import React from "react";
import pick from "lodash.pick";

import { withContext, Provider } from "./context";
import { attachEvents, updateEvents, detachEvents } from "./events";

type Prop<P, C> = P & { cesium: C };

type EventKeys<T> = { [P in keyof T]: T[P] extends Cesium.Event ? P : never }[keyof T];
type EventkeyMap<T, P> = { [K in EventKeys<T>]: P };

export interface CesiumComponentOption<E, P, C, CC = {}> {
  name: string;
  create: (props: Readonly<P>) => E;
  mount?: (element: E, context: Readonly<C>, props: Readonly<P>) => void;
  unmount?: (element: E, context: Readonly<C>, props: Readonly<P>) => void;
  render?: (props: Readonly<P>) => React.ReactNode | false;
  updateProperties?: (element: E, props: Readonly<P>, prevProps: Readonly<P>) => void;
  update?: (element: E, props: Readonly<P>, prevProps: Readonly<P>) => void;
  provide?: (props: Readonly<P>) => CC;
  cesiumProps?: Array<keyof P>;
  cesiumReadOnlyProps?: Array<keyof P>;
  cesiumEventProps?: EventkeyMap<E, keyof P>;
  initLazy?: boolean;
  setCesiumPropsAfterCreate?: boolean;
}

const createCesiumComponent = <E, P, C, CC>(opts: CesiumComponentOption<E, P, C, CC>) => {
  class CesiumComponent extends React.PureComponent<Prop<P, C>> {
    public static displayName = opts.name;

    private static getCesiumEventMap(
      props: Readonly<Prop<P, C>> & Readonly<{ children?: React.ReactNode }>,
    ) {
      if (!opts.cesiumEventProps) {
        return {};
      }
      return Object.entries(opts.cesiumEventProps).reduce(
        (a, [cesiumEventName, eventProp]) => ({
          ...a,
          [cesiumEventName]: props[eventProp],
        }),
        {},
      );
    }

    private static getCesiumProps(
      props: Readonly<Prop<P, C>> & Readonly<{ children?: React.ReactNode }>,
    ) {
      return pick(props, opts.cesiumProps || []);
    }

    private static getCesiumReadOnlyProps(
      props: Readonly<Prop<P, C>> & Readonly<{ children?: React.ReactNode }>,
    ) {
      return pick(props, opts.cesiumReadOnlyProps || []);
    }

    private static shouldUpdate(a: { [key: string]: any }, b: { [key: string]: any }) {
      return Object.keys(a).some(k => a[k] !== b[k]);
    }

    // tslint:disable-next-line:variable-name
    private _ce?: E;

    private mounted: boolean = false;

    constructor(props: Readonly<Prop<P, C>>) {
      super(props);
      if (!opts.initLazy) {
        this.create(props);
      }
    }

    public render() {
      if (opts.render) {
        return opts.render(this.props);
      } else if (opts.render === false) {
        return null;
      }

      return !this.mounted ? null : opts.provide ? (
        <Provider value={Object.assign({}, this.props.cesium, opts.provide(this.props))}>
          {this.props.children}
        </Provider>
      ) : (
        this.props.children
      );
    }

    public componentDidMount() {
      if (opts.initLazy) {
        this.create(this.props);
      }
      this.mount();
      this.mounted = true;
      this.forceUpdate();
    }

    public componentDidUpdate(
      prevProps: Readonly<Prop<P, C> & Readonly<{ children?: React.ReactNode }>>,
    ) {
      // if readonly props is updated, remount this component.
      if (
        CesiumComponent.shouldUpdate(
          CesiumComponent.getCesiumReadOnlyProps(this.props),
          CesiumComponent.getCesiumReadOnlyProps(prevProps),
        )
      ) {
        this.remount();
        return;
      }

      this.update(prevProps);
    }

    public componentWillUnmount() {
      this.unmount();
      this._ce = undefined;
    }

    public get cesiumElement() {
      return this._ce;
    }

    private create(props?: Readonly<Prop<P, C>>) {
      this._ce = opts.create(props || this.props);

      if (opts.setCesiumPropsAfterCreate && this._ce) {
        Object.entries(CesiumComponent.getCesiumProps(this.props)).forEach(([k, v]) => {
          if (this._ce) {
            (this._ce as any)[k] = v;
          }
        });
      }

      attachEvents(this._ce, CesiumComponent.getCesiumEventMap(this.props));
    }

    private mount() {
      if (opts.mount && this._ce) {
        opts.mount(this._ce, this.props.cesium, this.props);
      }
    }

    private unmount() {
      if (opts.unmount && this._ce) {
        opts.unmount(this._ce, this.props.cesium, this.props);
      }

      if (this._ce) {
        detachEvents(this._ce, CesiumComponent.getCesiumEventMap(this.props));
      }
    }

    private update(prevProps: Readonly<Prop<P, C>>) {
      if (opts.updateProperties) {
        if (this._ce) {
          opts.updateProperties(this._ce, this.props, prevProps);
        }
      } else {
        Object.entries(CesiumComponent.getCesiumProps(this.props))
          .filter(([k, v]) => (prevProps as any)[k] !== v)
          .forEach(([k, v]) => {
            if (this._ce) {
              (this._ce as any)[k] = v;
            }
          });

        updateEvents(
          this._ce,
          CesiumComponent.getCesiumEventMap(prevProps),
          CesiumComponent.getCesiumEventMap(this.props),
        );
      }

      if (opts.update && this._ce) {
        opts.update(this._ce, this.props, prevProps);
      }
    }

    private remount() {
      this.unmount();
      this.create(undefined);
      this.mount();
    }
  }

  return withContext(CesiumComponent);
};

export default createCesiumComponent;
