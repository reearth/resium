import { Event as CesiumEvent } from "cesium";
import {
  useEffect,
  useRef,
  useImperativeHandle,
  useState,
  useCallback,
  useLayoutEffect,
  RefObject,
} from "react";

import { RootComponentInternalProps } from "./component";
import { ResiumContext, useCesium } from "./context";
import { EventManager, eventManagerContextKey, eventNames } from "./EventManager";
import { includes, shallowEquals, isDestroyed } from "./util";

export type EventkeyMap<T, P> = { [K in keyof P]?: keyof T };

export type Options<Element, Props extends RootComponentInternalProps, State = any> = {
  name: string;
  create?: (
    ctx: ResiumContext,
    props: Props,
    wrapperRef: HTMLDivElement | null,
  ) => Element | [Element, State] | undefined;
  destroy?: (
    element: Element,
    ctx: ResiumContext,
    wrapperRef: HTMLDivElement | null,
    state?: State,
  ) => void;
  provide?: (
    element: Element,
    ctx: ResiumContext,
    props?: Props,
    state?: State,
  ) => Partial<ResiumContext>;
  update?: (element: Element, props: Props, prevProps: Props, context: ResiumContext) => void;
  cesiumProps?: readonly (keyof Props)[];
  cesiumReadonlyProps?: readonly (keyof Props)[];
  cesiumEventProps?: EventkeyMap<Element, Props>;
  otherProps?: readonly (keyof Props)[];
  setCesiumPropsAfterCreate?: boolean;
  useCommonEvent?: boolean;
  useRootEvent?: boolean;
};

export const useCesiumComponent = <Element, Props extends RootComponentInternalProps, State = any>(
  {
    name,
    create,
    destroy,
    provide,
    update,
    cesiumReadonlyProps,
    cesiumEventProps,
    otherProps,
    setCesiumPropsAfterCreate,
    useCommonEvent,
    useRootEvent,
  }: Options<Element, Props, State>,
  props: Props,
  ref: any,
): [Partial<ResiumContext> | undefined, boolean, RefObject<HTMLDivElement>] => {
  const element = useRef<Element>();
  const ctx = useCesium();
  const provided = useRef<Partial<ResiumContext> | undefined>(provide ? {} : undefined);
  const attachedEvents = useRef<{
    [key in keyof Element]?: any;
  }>({});
  const initialProps = useRef<Props>(props);
  const prevProps = useRef<Props>({} as Props);
  const [mounted, setMounted] = useState(false);
  const mountedRef = useRef(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<State>();
  const eventManager = ctx?.[eventManagerContextKey];

  // Update properties
  const updateProperties = useCallback(
    (props: Props) => {
      if (!element.current) return;
      const target: any = element.current;

      const propsKeys = Object.keys(props) as (keyof Props)[];
      const eventKeys = Object.keys(cesiumEventProps || []) as (keyof Props)[];

      const propDiff = propsKeys
        .concat(
          (Object.keys(prevProps.current) as (keyof Props)[]).filter(k => !propsKeys.includes(k)),
        )
        .filter(k => prevProps.current[k] !== props[k])
        .map(k => [k, prevProps.current[k], props[k]] as [keyof Props, any, any]);

      const updatedReadonlyProps: (keyof Props)[] = [];
      for (const [k, prevValue, newValue] of propDiff) {
        if (cesiumReadonlyProps?.includes(k)) {
          updatedReadonlyProps.push(k);
        } else if (includes(eventKeys, k)) {
          const cesiumKey = cesiumEventProps?.[k] as keyof Element;
          const eventHandler = target[cesiumKey];
          if (eventHandler instanceof CesiumEvent) {
            if (typeof prevValue === "undefined") {
              // added
              eventHandler.addEventListener(newValue);
              attachedEvents.current[cesiumKey] = newValue;
            } else if (typeof newValue === "undefined") {
              // deleted
              eventHandler.removeEventListener(prevValue);
              delete attachedEvents.current[cesiumKey];
            } else {
              // updated
              eventHandler.removeEventListener(prevValue);
              eventHandler.addEventListener(newValue);
            }
          }
        } else if (k !== "children" && !eventNames.includes(k as any) && !otherProps?.includes(k)) {
          target[k] = newValue;
        }
      }

      const em = useRootEvent
        ? (provided.current?.[eventManagerContextKey] as EventManager | undefined)
        : eventManager;
      if (useCommonEvent && em && element.current) {
        em.setEvents(useRootEvent ? null : element.current, props);
      }

      if (update && mountedRef.current) {
        update(element.current, props, prevProps.current, ctx);
      }

      prevProps.current = props;
      initialProps.current = props;

      // Recreate cesium element when any read-only prop is updated
      if (mountedRef.current && updatedReadonlyProps.length > 0) {
        if (process.env.NODE_ENV !== "production") {
          console.warn(
            `Warning: <${name}> is recreated because following read-only props have been updated: ${updatedReadonlyProps.join(
              ", ",
            )}`,
          );
        }

        unmount();
        mount();
      }
    },
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  const mount = useCallback(() => {
    // Initialize cesium element
    const result = create?.(ctx, initialProps.current, wrapperRef.current);
    if (Array.isArray(result)) {
      element.current = result[0];
      stateRef.current = result[1];
    } else {
      element.current = result;
    }

    if (setCesiumPropsAfterCreate) {
      updateProperties(initialProps.current);
    } else {
      // Attach events
      if (element.current && cesiumEventProps) {
        const target: any = element.current;
        for (const key of Object.keys(initialProps.current) as (keyof Props)[]) {
          const eventKey = cesiumEventProps[key];
          if (eventKey) {
            const e: any = initialProps.current[key];
            const eventHandler = target[eventKey];
            if (e && eventHandler instanceof CesiumEvent) {
              eventHandler.addEventListener(e);
            }
          }
        }
      }

      prevProps.current = initialProps.current;
    }

    if (provide && element.current) {
      provided.current = {
        ...ctx,
        ...provide(element.current, ctx, props, stateRef.current),
      };
    }

    const em = useRootEvent
      ? (provided.current?.[eventManagerContextKey] as EventManager | undefined)
      : eventManager;
    if (useCommonEvent && em && element.current) {
      em.setEvents(useRootEvent ? null : element.current, initialProps.current);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const unmount = useCallback(() => {
    // Destroy cesium element
    if (element.current && destroy) {
      destroy(element.current, ctx, wrapperRef.current, stateRef.current);
    }

    const em = useRootEvent
      ? (provided.current?.[eventManagerContextKey] as EventManager | undefined)
      : eventManager;
    if (useCommonEvent && em && element.current) {
      em.clearEvents(useRootEvent ? null : element.current);
    }

    // Detach all events
    if (element.current && !isDestroyed(element.current)) {
      const attachedEventKeys = Object.keys(attachedEvents.current) as (keyof Element)[];
      for (const k of attachedEventKeys) {
        const eventHandler: any = element.current[k];
        eventHandler?.removeEventListener?.(attachedEvents.current[k]);
      }
    }

    attachedEvents.current = {};
    provided.current = undefined;
    stateRef.current = undefined;
    element.current = undefined;

    setMounted(false);
    mountedRef.current = false;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // To prevent re-execution by hot loader, execute only once
  useLayoutEffect(() => {
    mount();
    return () => unmount();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Update properties of cesium element
  useEffect(() => {
    if (mounted) {
      if (!shallowEquals(props, prevProps.current)) {
        updateProperties(props);
        ctx.__$internal?.onUpdate?.();
      }
    } else {
      // first time
      prevProps.current = props;
      initialProps.current = props;
      setMounted(true);
      mountedRef.current = true;
    }
  }, [ctx.__$internal, mounted, props, updateProperties]);

  // Expose cesium element
  useImperativeHandle(ref, () => ({
    cesiumElement: element.current,
  }));

  return [provided.current, mounted, wrapperRef];
};
