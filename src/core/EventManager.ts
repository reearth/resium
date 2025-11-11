import {
  ScreenSpaceEventType,
  ScreenSpaceEventHandler,
  Scene,
  Cartesian2,
  Primitive,
  Entity,
  PrimitiveCollection,
  Cesium3DTileFeature,
  PointPrimitiveCollection,
  LabelCollection,
  BillboardCollection,
  PolylineCollection,
  PointPrimitive,
  Label,
  Billboard,
  Polyline,
  TimeDynamicPointCloud,
  ModelNode,
  GroundPolylinePrimitive,
  GroundPrimitive,
} from "cesium";

import { entries, includes } from "./util";

export const eventManagerContextKey = "__RESIUM_EVENT_MANAGER";

export type EventType = keyof RootEventProps;

export type RootEventTarget =
  | Cesium3DTileFeature
  | {
      collection?:
        | PrimitiveCollection
        | PointPrimitiveCollection
        | LabelCollection
        | BillboardCollection
        | PolylineCollection;
      id?: Entity | string;
      node?: ModelNode;
      primitive?:
        | Primitive
        | PointPrimitive
        | Label
        | Billboard
        | Polyline
        | TimeDynamicPointCloud
        | GroundPolylinePrimitive
        | GroundPrimitive;
    };

export type EventProps<T> = {
  onClick?: (movement: CesiumMovementEvent, target: T) => void;
  onDoubleClick?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseDown?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseUp?: (movement: CesiumMovementEvent, target: T) => void;
  onMiddleClick?: (movement: CesiumMovementEvent, target: T) => void;
  onMiddleDown?: (movement: CesiumMovementEvent, target: T) => void;
  onMiddleUp?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseMove?: (movement: CesiumMovementEvent, target: T) => void;
  onPinchEnd?: (movement: CesiumMovementEvent, target: T) => void;
  onPinchMove?: (movement: CesiumMovementEvent, target: T) => void;
  onPinchStart?: (movement: CesiumMovementEvent, target: T) => void;
  onRightClick?: (movement: CesiumMovementEvent, target: T) => void;
  onRightDown?: (movement: CesiumMovementEvent, target: T) => void;
  onRightUp?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseEnter?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseLeave?: (movement: CesiumMovementEvent, target: T) => void;
};

export type RootEventProps = EventProps<RootEventTarget> & {
  onWheel?: (delta: number) => void;
};

type EventMap<T> = { [k in EventType]: T };

export type CesiumMovementEvent = {
  position?: Cartesian2;
  startPosition?: Cartesian2;
  endPosition?: Cartesian2;
};

export type Callback<T = any> = (e: CesiumMovementEvent, source: T) => void;

export const eventNames: EventType[] = [
  "onClick",
  "onDoubleClick",
  "onMouseDown",
  "onMouseUp",
  "onMiddleClick",
  "onMiddleDown",
  "onMiddleUp",
  "onMouseMove",
  "onPinchEnd",
  "onPinchMove",
  "onPinchStart",
  "onRightClick",
  "onRightDown",
  "onRightUp",
  "onWheel",
  "onMouseEnter",
  "onMouseLeave",
];

export class EventManager {
  private static eventTypeMap: EventMap<ScreenSpaceEventType> = {
    onClick: ScreenSpaceEventType.LEFT_CLICK,
    onDoubleClick: ScreenSpaceEventType.LEFT_DOUBLE_CLICK,
    onMouseDown: ScreenSpaceEventType.LEFT_DOWN,
    onMouseUp: ScreenSpaceEventType.LEFT_UP,
    onMiddleClick: ScreenSpaceEventType.MIDDLE_CLICK,
    onMiddleDown: ScreenSpaceEventType.MIDDLE_DOWN,
    onMiddleUp: ScreenSpaceEventType.MIDDLE_UP,
    onMouseMove: ScreenSpaceEventType.MOUSE_MOVE,
    onPinchEnd: ScreenSpaceEventType.PINCH_END,
    onPinchMove: ScreenSpaceEventType.PINCH_MOVE,
    onPinchStart: ScreenSpaceEventType.PINCH_START,
    onRightClick: ScreenSpaceEventType.RIGHT_CLICK,
    onRightDown: ScreenSpaceEventType.RIGHT_DOWN,
    onRightUp: ScreenSpaceEventType.RIGHT_UP,
    onWheel: ScreenSpaceEventType.WHEEL,
    onMouseEnter: ScreenSpaceEventType.MOUSE_MOVE,
    onMouseLeave: ScreenSpaceEventType.MOUSE_MOVE,
  };

  private scene: Scene | undefined;
  private sshe: ScreenSpaceEventHandler;
  private events: EventMap<Map<any, Callback>> = {
    onClick: new Map(),
    onDoubleClick: new Map(),
    onMouseDown: new Map(),
    onMouseUp: new Map(),
    onMiddleClick: new Map(),
    onMiddleDown: new Map(),
    onMiddleUp: new Map(),
    onMouseMove: new Map(),
    onPinchEnd: new Map(),
    onPinchMove: new Map(),
    onPinchStart: new Map(),
    onRightClick: new Map(),
    onRightDown: new Map(),
    onRightUp: new Map(),
    onWheel: new Map(),
    onMouseEnter: new Map(),
    onMouseLeave: new Map(),
  };
  private hovered: any = undefined;

  public constructor(scene?: Scene) {
    this.scene = scene;
    this.sshe = new ScreenSpaceEventHandler(scene?.canvas);
  }

  public destroy() {
    this.hovered = undefined;
    if (!this.sshe.isDestroyed()) {
      this.sshe.destroy();
    }
  }

  public isDestroyed() {
    return this.sshe.isDestroyed();
  }

  public on(element: any, type: EventType, cb: Callback) {
    if (element && type === "onWheel") return;
    this.events[type].set(element, cb);
  }

  public off(element: any, type: EventType) {
    this.events[type].delete(element);
    if (this.hovered === element) {
      this.hovered = undefined;
    }
  }

  public setEvents(element: any, props: any) {
    entries(props).forEach(([k, v]) => {
      const et = k as EventType;
      if (includes(eventNames, et)) {
        if (v) {
          this.on(element, et, v);
        } else {
          this.off(element, et);
        }
      }
    });
    this.commit();
  }

  public clearEvents(element: any) {
    this.hovered = undefined;
    eventNames.forEach(et => {
      this.off(element, et);
    });
    this.commit();
  }

  public commit() {
    const sshe = this.sshe;
    const destroyed = this.sshe.isDestroyed();

    if (!destroyed) {
      if (
        this.events.onMouseEnter.size === 0 &&
        this.events.onMouseLeave.size === 0 &&
        this.events.onMouseMove.size === 0
      ) {
        this.sshe.removeInputAction(ScreenSpaceEventType.MOUSE_MOVE);
      } else if (!this.sshe.getInputAction(ScreenSpaceEventType.MOUSE_MOVE)) {
        this.sshe.setInputAction(this.onMouseMove, ScreenSpaceEventType.MOUSE_MOVE);
      }
    }

    entries(this.events).forEach(([et, m]) => {
      if (et === "onMouseEnter" || et === "onMouseLeave" || et === "onMouseMove") {
        return;
      }

      const cesiumEventType = EventManager.eventTypeMap[et];

      if (!destroyed) {
        if (m.size === 0) {
          sshe.removeInputAction(cesiumEventType);
        } else if (!sshe.getInputAction(cesiumEventType)) {
          sshe.setInputAction(this.eventCallback(et), cesiumEventType);
        }
      }
    });
  }

  public getScreenSpaceEventHandler() {
    return this.sshe;
  }

  private getEventCallback(type: EventType, picked: any) {
    return picked === null
      ? this.events[type].get(null)
      : this.events[type].get(picked.id) || // Entity
          this.events[type].get(picked.id?.entityCollection?.owner) || // Entity in DataSource
          this.events[type].get(picked.primitive) || // Primitive
          this.events[type].get(picked.tileset); // Cesium3DTileFeature
  }

  private onMouseMove = (e: CesiumMovementEvent) => {
    const picked = this.pick(e.endPosition);

    if (this.hovered !== picked) {
      if (this.hovered) {
        this.getEventCallback("onMouseLeave", this.hovered)?.(e, this.hovered);
        this.getEventCallback("onMouseLeave", null)?.(e, this.hovered);
      }

      if (picked) {
        this.getEventCallback("onMouseEnter", picked)?.(e, picked);
        this.getEventCallback("onMouseEnter", null)?.(e, picked);
      }
    }

    if (picked) {
      this.getEventCallback("onMouseMove", picked)?.(e, picked);
    }
    this.getEventCallback("onMouseMove", null)?.(e, picked);

    this.hovered = picked;
  };

  private eventCallback = (et: EventType) => {
    return (e: any) => {
      const picked = this.pick(e?.position);
      if (picked) {
        this.getEventCallback(et, picked)?.(e, picked);
      }
      this.getEventCallback(et, null)?.(e, picked);
    };
  };

  private pick(pos?: Cartesian2): any | undefined {
    if (!pos) return undefined;
    return this.scene?.pick(pos);
  }
}

export default EventManager;
