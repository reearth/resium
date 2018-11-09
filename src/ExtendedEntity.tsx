import React from "react";
import { ScreenSpaceEventType, Entity as CesiumEntity, ScreenSpaceEventHandler } from "cesium";
import omit from "lodash.omit";

import Entity, { EntityProps } from "./Entity";
import { withContext } from "./core/context";

type Event = () => void;

export interface CesiumMovementEvent {
  position?: Cesium.Cartesian2;
  startPositon?: Cesium.Cartesian2;
  endPosition?: Cesium.Cartesian2;
}

export interface ExtendedEntityEvents {
  onClick?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onDoubleClick?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onMouseDown?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onMouseUp?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onMiddleClick?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onMiddleDoubleClick?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onMiddleDown?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onMiddleUp?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onMouseMove?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onPinchEnd?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onPinchMove?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onPinchStart?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onRightClick?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onRightDoubleClick?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onRightDown?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onRightUp?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onWheel?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onMouseEnter?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
  onMouseLeave?: (movement: CesiumMovementEvent, entity: Cesium.Entity) => void;
}

export interface ExtendedEntityProps extends EntityProps, ExtendedEntityEvents {}

const events: Array<{ prop: keyof ExtendedEntityEvents; type: Cesium.ScreenSpaceEventType }> = [
  { prop: "onClick", type: ScreenSpaceEventType.LEFT_CLICK },
  { prop: "onDoubleClick", type: ScreenSpaceEventType.LEFT_DOUBLE_CLICK },
  { prop: "onMouseDown", type: ScreenSpaceEventType.LEFT_DOWN },
  { prop: "onMouseUp", type: ScreenSpaceEventType.LEFT_UP },
  { prop: "onMiddleClick", type: ScreenSpaceEventType.MIDDLE_CLICK },
  { prop: "onMiddleDown", type: ScreenSpaceEventType.MIDDLE_DOWN },
  { prop: "onMiddleUp", type: ScreenSpaceEventType.MIDDLE_UP },
  { prop: "onMouseMove", type: ScreenSpaceEventType.MOUSE_MOVE },
  { prop: "onPinchEnd", type: ScreenSpaceEventType.PINCH_END },
  { prop: "onPinchMove", type: ScreenSpaceEventType.PINCH_MOVE },
  { prop: "onPinchStart", type: ScreenSpaceEventType.PINCH_START },
  { prop: "onRightClick", type: ScreenSpaceEventType.RIGHT_CLICK },
  { prop: "onRightDown", type: ScreenSpaceEventType.RIGHT_DOWN },
  { prop: "onRightUp", type: ScreenSpaceEventType.RIGHT_UP },
  { prop: "onWheel", type: ScreenSpaceEventType.WHEEL },
];

class ExtendedEntity extends React.PureComponent<
  ExtendedEntityProps & { cesium: { cesiumWidget: Cesium.CesiumWidget; scene: Cesium.Scene } }
> {
  private ref = React.createRef<typeof Entity>();
  private sseh?: Cesium.ScreenSpaceEventHandler;
  private sseh2?: Cesium.ScreenSpaceEventHandler;
  private hovering = false;

  public render() {
    const props = omit(this.props, events.map(e => e.prop));
    return <Entity ref={this.ref} {...props} />;
  }

  public componentDidMount() {
    this.sseh = new ScreenSpaceEventHandler(this.props.cesium.cesiumWidget.canvas);
    this.sseh2 = new ScreenSpaceEventHandler(this.props.cesium.cesiumWidget.canvas);
    this.sseh2.setInputAction(this.checkHovering as any, ScreenSpaceEventType.MOUSE_MOVE);
    events.forEach(e => {
      const prop = this.props[e.prop];
      if (this.sseh && prop) {
        const ev = this.createEvent(prop, e.type);
        this.sseh.setInputAction(ev as any, e.type);
      }
    });
  }

  public componentDidUpdate(prevProps: Readonly<ExtendedEntityProps>) {
    events.forEach(e => {
      const prop = this.props[e.prop];
      if (this.sseh && prevProps[e.prop] && prevProps[e.prop] !== prop && !prop) {
        this.sseh.removeInputAction(e.type);
      }
      if (this.sseh && prop && prevProps[e.prop] !== prop) {
        const ev = this.createEvent(prop, e.type);
        this.sseh.setInputAction(ev as any, e.type);
      }
    });
  }

  public componentWillUnmount() {
    if (this.sseh && !this.sseh.isDestroyed) {
      this.sseh.destroy();
    }
    if (this.sseh2 && !this.sseh2.isDestroyed) {
      this.sseh2.destroy();
    }
  }

  private createEvent(
    fn: (m: CesiumMovementEvent, e: CesiumEntity) => void,
    type: Cesium.ScreenSpaceEventType,
  ) {
    const scene = this.props.cesium.scene;
    const source: CesiumEntity = (this.ref.current as any).cesiumElement;
    return (movement: CesiumMovementEvent) => {
      const picked = movement.position ? scene.pick(movement.position) : undefined;
      if (picked && picked.id && picked.id === source) {
        fn(movement, source);
      }
    };
  }

  private checkHovering = (m: CesiumMovementEvent) => {
    const scene = this.props.cesium.scene;
    const source: CesiumEntity = (this.ref.current as any).cesiumElement;
    const picked = m.endPosition ? scene.pick(m.endPosition) : undefined;
    const before = this.hovering;

    const hovering = picked && picked.id && picked.id === source;
    this.hovering = !!hovering;

    if (before !== hovering) {
      if (hovering) {
        if (this.props.onMouseEnter) {
          this.props.onMouseEnter(m, source);
        }
      } else {
        if (this.props.onMouseLeave) {
          this.props.onMouseLeave(m, source);
        }
      }
    }
  };
}

export default withContext<
  ExtendedEntityProps,
  { cesiumWidget: Cesium.CesiumWidget; scene: Cesium.Scene }
>(ExtendedEntity);
