import { useEffect, useRef, useImperativeHandle, useState, useCallback } from "react";
import { useCesiumContext } from "./context";
import EventManager, { eventManagerContextKey } from "./EventManager";

export type EventKeys<T> = { [P in keyof T]: T[P] extends Cesium.Event ? P : never }[keyof T];
export type EventkeyMap<T, P> = { [K in keyof P]?: EventKeys<T> };

export interface Options<Element, Props, Context> {
  name: string;
  create?: (ctx: Context, props: Props, wrapperRef: HTMLDivElement | null) => Element | undefined;
  destroy?: (element: Element, ctx: Context, wrapperRef: HTMLDivElement | null) => void;
  provide?: (element: Element, ctx: Context) => any;
  cesiumProps?: (keyof Props)[];
  cesiumReadonlyProps?: (keyof Props)[];
  cesiumEventProps?: EventkeyMap<Element, Props>;
  setCesiumPropsAfterCreate?: boolean;
  useCommonEvent?: boolean;
}

export const useCesium = <Element, Props, Context, ProvidedContext = {}>(
  {
    name,
    create,
    destroy,
    provide,
    cesiumProps,
    cesiumReadonlyProps,
    cesiumEventProps,
    setCesiumPropsAfterCreate,
    useCommonEvent,
  }: Options<Element, Props, Context>,
  props: Props,
  ref: any,
): [ProvidedContext | undefined, boolean, React.RefObject<HTMLDivElement>] => {
  const element = useRef<Element>();
  const provided = useRef<Context & ProvidedContext>();
  const attachedEvents = useRef<
    {
      [key in keyof Element]?: any;
    }
  >({});
  const initialProps = useRef<Props>(props);
  const prevProps = useRef<Props>({} as Props);
  const [mounted, setMounted] = useState(false);
  const mountedRef = useRef(false);
  const [remount, setRemount] = useState(0);
  const ctx = useCesiumContext<Context & { [eventManagerContextKey]?: EventManager }>();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const eventManager = ctx[eventManagerContextKey];

  // Update properties
  const updateProperties = useCallback(
    (props: Props) => {
      if (!element.current) return;
      const target: any = element.current;

      const eventKeys = Object.keys(cesiumEventProps || []) as (keyof Props)[];

      const propDiff = [
        ...(Object.keys(props) as (keyof Props)[]),
        ...(Object.keys(prevProps.current) as (keyof Props)[]),
      ]
        .filter(k => prevProps.current[k] !== props[k])
        .map(k => [k, prevProps.current[k], props[k]] as [keyof Props, any, any]);

      const updatedReadonlyProps: (keyof Props)[] = [];
      for (const [k, prevValue, newValue] of propDiff) {
        if (cesiumProps?.includes(k)) {
          target[k] = newValue;
        } else if (cesiumReadonlyProps?.includes(k)) {
          updatedReadonlyProps.push(k);
        } else if (eventKeys.includes(k)) {
          const cesiumKey = cesiumEventProps?.[k] as keyof Element;
          const eventHandler: Cesium.Event = target[cesiumKey];

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
      }

      if (useCommonEvent && eventManager && element.current) {
        eventManager.setEvents(element.current, props);
      }

      prevProps.current = props;
      initialProps.current = props;

      // Recreate cesium element when any read-only prop is updated
      if (mountedRef.current && updatedReadonlyProps.length > 0) {
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.warn(
            `Warning: <${name}> is recreated because following read-only props have been updated: ${updatedReadonlyProps.join(
              ", ",
            )}`,
          );
        }

        setRemount(i => i + 1);
      }
    },
    [cesiumEventProps, cesiumProps, cesiumReadonlyProps, eventManager, name, useCommonEvent],
  );

  useEffect(() => {
    const wrapperDiv = wrapperRef.current;

    // Initialize cesium element
    element.current = create?.(ctx, initialProps.current, wrapperDiv);

    if (setCesiumPropsAfterCreate) {
      updateProperties(initialProps.current);
    } else {
      // Attach events
      if (element.current && cesiumEventProps) {
        const target: any = element.current;
        for (const key of Object.keys(initialProps.current) as (keyof Props)[]) {
          const eventKey = cesiumEventProps[key];
          if (eventKey) {
            const e = initialProps.current[key];
            if (e) {
              target[eventKey].addEventListener(e);
            }
          }
        }
      }

      prevProps.current = initialProps.current;
    }

    if (useCommonEvent && eventManager && element.current) {
      eventManager.setEvents(element.current, initialProps.current);
    }

    if (provide && element.current) {
      provided.current = { ...ctx, ...provide(element.current, ctx) };
    }

    setMounted(true);
    mountedRef.current = true;

    return () => {
      // Destroy cesium element
      if (element.current && destroy) {
        destroy(element.current, ctx, wrapperDiv);
      }

      if (useCommonEvent && eventManager && element.current) {
        eventManager.clearEvents(element.current);
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
      element.current = undefined;

      setMounted(false);
      mountedRef.current = false;
    };
  }, [
    cesiumEventProps,
    create,
    ctx,
    destroy,
    eventManager,
    provide,
    remount,
    setCesiumPropsAfterCreate,
    updateProperties,
    useCommonEvent,
  ]);

  // Update properties of cesium element
  useEffect(() => {
    if (mounted) {
      updateProperties(props);
    } else {
      prevProps.current = props;
      initialProps.current = props;
    }
  });

  // Expose cesium element
  useImperativeHandle(ref, () => ({
    cesiumElement: element.current,
  }));

  return [provided.current, mounted, wrapperRef];
};

interface Destroyable {
  isDestroyed(): boolean;
  destroy(): void;
}

function isDestroyable(d: any): d is Destroyable {
  return d && typeof d.isDestroyed === "function" && typeof d.destroy === "function";
}

function isDestroyed(d: any) {
  return isDestroyable(d) && d.isDestroyed();
}
