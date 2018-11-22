import Cesium, { ScreenSpaceEventType, ScreenSpaceEventHandler } from "cesium";

export type EventType =
  | "onClick"
  | "onDoubleClick"
  | "onMouseDown"
  | "onMouseUp"
  | "onMiddleClick"
  | "onMiddleDown"
  | "onMiddleUp"
  | "onMouseMove"
  | "onPinchEnd"
  | "onPinchMove"
  | "onPinchStart"
  | "onRightClick"
  | "onRightDown"
  | "onRightUp"
  | "onWheel"
  | "onMouseEnter"
  | "onMouseLeave";

export interface EventProps<T> {
  onClick?: (movement: CesiumMovementEvent, target: T) => void;
  onDoubleClick?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseDown?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseUp?: (movement: CesiumMovementEvent, entitargetty: T) => void;
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
  onWheel?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseEnter?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseLeave?: (movement: CesiumMovementEvent, target: T) => void;
}

type EventMap<T> = { [k in EventType]: T };

export interface CesiumMovementEvent {
  position?: Cesium.Cartesian2;
  startPositon?: Cesium.Cartesian2;
  endPosition?: Cesium.Cartesian2;
}

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

export default class EventManager {
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

  private static equalsPickedObject(picked: any, element: any) {
    return (
      !!picked &&
      (picked === element ||
        picked.primitive === element ||
        (!!picked.primitive.equals && picked.primitive.equals(element)))
    );
  }

  private scene: Cesium.Scene;
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
  private hovered = new Map<any, boolean>();
  private changed = new Map<any, boolean>();

  constructor(scene: Cesium.Scene, canvas: HTMLCanvasElement) {
    this.scene = scene;
    this.sshe = new ScreenSpaceEventHandler(canvas);
  }

  public destroy() {
    if (!this.sshe.isDestroyed()) {
      this.sshe.destroy();
    }
  }

  public isDestroyed() {
    return this.sshe.isDestroyed();
  }

  public on(element: any, type: EventType, cb: Callback) {
    this.events[type].set(element, cb);
  }

  public off(element: any, type: EventType) {
    this.events[type].delete(element);
  }

  public setEvents(element: any, props: object) {
    Object.entries(props).forEach(([k, v]) => {
      const et = k as EventType;
      if (eventNames.includes(et)) {
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
    eventNames.forEach(et => {
      this.off(element, et);
    });
    this.commit();
  }

  public commit() {
    const sshe = this.sshe;
    const destroyed = this.sshe.isDestroyed();
    const elements = new Set(this.hovered.keys());
    const elements2 = new Set<any>();

    if (!destroyed) {
      if (
        this.events.onMouseEnter.size === 0 &&
        this.events.onMouseLeave.size === 0 &&
        this.events.onMouseMove.size === 0
      ) {
        this.sshe.removeInputAction(ScreenSpaceEventType.MOUSE_MOVE);
      } else if (!this.sshe.getInputAction(ScreenSpaceEventType.MOUSE_MOVE)) {
        this.sshe.setInputAction(this.onMouseMove as any, ScreenSpaceEventType.MOUSE_MOVE);
      }
    }

    Object.entries(this.events).forEach(([et, m]) => {
      const eventType = et as EventType;

      m.forEach((v, k) => {
        if (!this.hovered.has(k)) {
          this.hovered.set(k, false);
        }
        elements2.add(k);
      });

      if (et === "onMouseEnter" || et === "onMouseLeave" || et === "onMouseMove") {
        return;
      }

      const cesiumEventType = EventManager.eventTypeMap[eventType];

      if (!destroyed) {
        if (m.size === 0) {
          sshe.removeInputAction(cesiumEventType);
        } else if (!sshe.getInputAction(cesiumEventType)) {
          sshe.setInputAction(this.eventCallback(eventType) as any, cesiumEventType);
        }
      }
    });

    elements.forEach(e => {
      if (!elements2.has(e)) {
        this.hovered.delete(e);
      }
    });
  }

  public getScreenSpaceEventHandler() {
    return this.sshe;
  }

  private onMouseMove = (e: CesiumMovementEvent) => {
    const picked = this.pick(e.endPosition);
    this.changed.clear();

    this.hovered.forEach((h, element) => {
      const p = EventManager.equalsPickedObject(picked, element);
      this.hovered.set(element, p);
      if (p !== h) {
        this.changed.set(element, p);
      }
    });

    if (picked) {
      this.events.onMouseMove.forEach((cb, element) => {
        if (this.hovered.get(element)) {
          cb(e, element);
        }
      });
    }

    this.changed.forEach((hovered, element) => {
      if (hovered) {
        const onMouseEnter = this.events.onMouseEnter.get(element);
        if (onMouseEnter) {
          onMouseEnter(e, element);
        }
      } else {
        const onMouseLeave = this.events.onMouseLeave.get(element);
        if (onMouseLeave) {
          onMouseLeave(e, element);
        }
      }
    });
  };

  private eventCallback = (et: EventType) => (e: CesiumMovementEvent) => {
    const picked = this.pick(e.position);
    if (picked) {
      this.events[et].forEach((cb, element) => {
        if (EventManager.equalsPickedObject(picked, element)) {
          cb(e, element);
        }
      });
    }
  };

  private pick(pos?: Cesium.Cartesian2): any | undefined {
    if (!pos) {
      return undefined;
    }
    const picked = this.scene.pick(pos);
    if (picked) {
      // Entity
      if (picked.id instanceof Cesium.Entity) {
        return picked.id;
      }
      // Other
      return picked;
    }
    return undefined;
  }
}
