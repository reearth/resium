import React from "react";
import pick from "lodash.pick";

import { withCesium, Provider, WithContextProps } from "./context";
import { attachEvents, updateEvents, detachEvents } from "./events";

export type EventKeys<T> = { [P in keyof T]: T[P] extends Cesium.Event ? P : never }[keyof T];
export type EventkeyMap<T, P> = { [K in EventKeys<T>]?: P };

export interface CesiumComponentOption<E, P, C, CC = {}, R = {}> {
  name: string;
  create: (
    cesiumProps: Readonly<P>,
    props: Readonly<P>,
    context: Readonly<C>,
    ref?: React.RefObject<R>,
  ) => E | [E, any];
  mount?: (element: E, context: Readonly<C>, props: Readonly<P>, ref?: React.RefObject<R>) => void;
  unmount?: (
    element: E,
    context: Readonly<C>,
    props: Readonly<P>,
    ref: React.RefObject<R> | undefined,
    state: any,
  ) => void;
  render?: (
    element: E | undefined,
    props: Readonly<P> & Readonly<{ children?: React.ReactNode }>,
    mounted: boolean,
    ref: React.RefObject<R> | undefined,
  ) => React.ReactNode;
  update?: (element: E, props: Readonly<P>, prevProps: Readonly<P>, context: Readonly<C>) => void;
  provide?: (element: E, props: Readonly<P>, state: any) => CC;
  cesiumProps?: Array<keyof P>;
  cesiumReadonlyProps?: Array<keyof P>;
  cesiumEventProps?: EventkeyMap<E, keyof P>;
  setCesiumPropsAfterCreate?: boolean;
  noRender?: boolean;
  createRef?: boolean;
  defaultProps?: Partial<P>;
}

export interface CesiumElementHolder<E> {
  readonly cesiumElement: E | undefined;
}

export type CesiumComponentType<E, P> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<CesiumElementHolder<E>>
>;

const createCesiumComponent = <E, P, C, CC = {}, R = {}>(
  opts: CesiumComponentOption<E, P, C, CC, R>,
): CesiumComponentType<E, P> => {
  class CesiumComponent extends React.PureComponent<WithContextProps<P, C>> {
    public static displayName = opts.name;

    public static defaultProps: Partial<WithContextProps<P, C>> =
      (opts.defaultProps as Partial<WithContextProps<P, C>>) || {};

    private static getCesiumEventMap(
      props: Readonly<WithContextProps<P, C>> & Readonly<{ children?: React.ReactNode }>,
    ) {
      if (!opts.cesiumEventProps) {
        return {};
      }
      return Object.entries(opts.cesiumEventProps).reduce(
        (a, [cesiumEventName, eventProp]) => ({
          ...a,
          ...(eventProp
            ? {
                [cesiumEventName]: props[eventProp],
              }
            : {}),
        }),
        {},
      );
    }

    private static getCesiumProps(
      props: Readonly<WithContextProps<P, C>> & Readonly<{ children?: React.ReactNode }>,
    ) {
      return pick(props, opts.cesiumProps || []);
    }

    private static getCesiumReadOnlyProps(
      props: Readonly<WithContextProps<P, C>> & Readonly<{ children?: React.ReactNode }>,
    ) {
      return pick(props, opts.cesiumReadonlyProps || []);
    }

    private static shouldUpdate(a: { [key: string]: any }, b: { [key: string]: any }) {
      return Object.keys(a).some(k => a[k] !== b[k]);
    }

    public get cesiumElement() {
      return this._ce;
    }

    // tslint:disable-next-line:variable-name
    private _ce?: E;
    // tslint:disable-next-line:variable-name
    private _state: any;
    private mounted: boolean = false;
    private ref?: React.RefObject<R>;

    constructor(props: WithContextProps<P, C>) {
      super(props);
      if (opts.createRef) {
        this.ref = React.createRef();
      }
      if (!opts.createRef) {
        this.create(props);
      }
    }

    public render() {
      if (opts.noRender) {
        return null;
      }

      const render = opts.render
        ? opts.render(this._ce, this.props, this.mounted, this.ref)
        : this.props.children || null;

      return !opts.render && !this.mounted ? null : opts.provide ? (
        <Provider
          value={Object.assign(
            {},
            this.props.cesium,
            this._ce ? opts.provide(this._ce, this.props, this._state) : {},
          )}>
          {render}
        </Provider>
      ) : (
        render
      );
    }

    public componentDidMount() {
      if (opts.createRef) {
        this.create();
      }
      this.mount();
      this.mounted = true;
      this.forceUpdate();
    }

    public componentDidUpdate(prevProps: WithContextProps<P, C>) {
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

    private create(props: Readonly<WithContextProps<P, C>> = this.props) {
      const cesiumProps = pick(props, [
        ...(opts.cesiumProps || []),
        ...(opts.cesiumReadonlyProps || []),
      ]);
      const element = opts.create(cesiumProps, props, this.props.cesium, this.ref);
      if (Array.isArray(element)) {
        this._ce = element[0];
        this._state = element[1];
      } else {
        this._ce = element;
      }

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
        opts.mount(this._ce, this.props.cesium, this.props, this.ref);
      }
    }

    private unmount() {
      if (opts.unmount && this._ce) {
        opts.unmount(this._ce, this.props.cesium, this.props, this.ref, this._state);
      }

      if (this._ce) {
        detachEvents(this._ce, CesiumComponent.getCesiumEventMap(this.props));
      }

      this._ce = undefined;
    }

    private update(prevProps: Readonly<WithContextProps<P, C>>) {
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

      if (opts.update && this._ce) {
        opts.update(this._ce, this.props, prevProps, this.props.cesium);
      }
    }

    private remount() {
      this.unmount();
      this.create(undefined);
      this.mount();
    }
  }

  return withCesium(CesiumComponent);
};

export default createCesiumComponent;
