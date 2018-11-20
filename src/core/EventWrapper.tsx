import React from "react";
import { ScreenSpaceEventType, ScreenSpaceEventHandler } from "cesium";
import omit from "lodash.omit";

import { withContext } from "./context";
import { CesiumComponentType, CesiumElementHolder } from "./CesiumComponent";

type Event = () => void;

export interface CesiumMovementEvent {
  position?: Cesium.Cartesian2;
  startPositon?: Cesium.Cartesian2;
  endPosition?: Cesium.Cartesian2;
}

export interface EventWrapperProps<T> {
  onClick?: (movement: CesiumMovementEvent, target: T) => void;
  onDoubleClick?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseDown?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseUp?: (movement: CesiumMovementEvent, entitargetty: T) => void;
  onMiddleClick?: (movement: CesiumMovementEvent, target: T) => void;
  onMiddleDoubleClick?: (movement: CesiumMovementEvent, target: T) => void;
  onMiddleDown?: (movement: CesiumMovementEvent, target: T) => void;
  onMiddleUp?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseMove?: (movement: CesiumMovementEvent, target: T) => void;
  onPinchEnd?: (movement: CesiumMovementEvent, target: T) => void;
  onPinchMove?: (movement: CesiumMovementEvent, target: T) => void;
  onPinchStart?: (movement: CesiumMovementEvent, target: T) => void;
  onRightClick?: (movement: CesiumMovementEvent, target: T) => void;
  onRightDoubleClick?: (movement: CesiumMovementEvent, target: T) => void;
  onRightDown?: (movement: CesiumMovementEvent, target: T) => void;
  onRightUp?: (movement: CesiumMovementEvent, target: T) => void;
  onWheel?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseEnter?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseLeave?: (movement: CesiumMovementEvent, target: T) => void;
}

export interface EventWrapperContext {
  cesiumWidget: Cesium.CesiumWidget;
  scene: Cesium.Scene;
}

const createEventWrapper = <E, P>(Comp: CesiumComponentType<E, P>) =>
  withContext<EventWrapperProps<E> & P, EventWrapperContext>(
    class EventWrapper extends React.PureComponent<
      EventWrapperProps<E> & P & { cesium: EventWrapperContext }
    > {
      private static events: Array<{
        prop: keyof EventWrapperProps<E>;
        type: Cesium.ScreenSpaceEventType;
      }> = [
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

      private ref = React.createRef<CesiumElementHolder<E>>();
      private sseh?: Cesium.ScreenSpaceEventHandler;
      private sseh2?: Cesium.ScreenSpaceEventHandler;
      private hovering = false;

      public render() {
        const props = omit(this.props, EventWrapper.events.map(e => e.prop));
        return <Comp ref={this.ref} {...props} />;
      }

      public componentDidMount() {
        this.sseh2 = new ScreenSpaceEventHandler(this.props.cesium.cesiumWidget.canvas);
        if (this.props.onMouseEnter || this.props.onMouseLeave) {
          this.sseh2.setInputAction(this.checkHovering as any, ScreenSpaceEventType.MOUSE_MOVE);
        }

        this.sseh = new ScreenSpaceEventHandler(this.props.cesium.cesiumWidget.canvas);
        EventWrapper.events.forEach(e => {
          const prop = this.props[e.prop];
          if (this.sseh && prop) {
            const ev = this.createEvent(prop as (m: CesiumMovementEvent, e: E) => void);
            this.sseh.setInputAction(ev as any, e.type);
          }
        });
      }

      public componentDidUpdate(prevProps: Readonly<EventWrapperProps<E>>) {
        EventWrapper.events.forEach(e => {
          const prop = this.props[e.prop];
          if (this.sseh && prevProps[e.prop] && prevProps[e.prop] !== prop && !prop) {
            this.sseh.removeInputAction(e.type);
          }
          if (this.sseh && prop && prevProps[e.prop] !== prop) {
            const ev = this.createEvent(prop as (m: CesiumMovementEvent, e: E) => void);
            this.sseh.setInputAction(ev as any, e.type);
          }
        });

        if (
          this.sseh2 &&
          (prevProps.onMouseEnter !== this.props.onMouseEnter ||
            prevProps.onMouseLeave !== this.props.onMouseLeave)
        ) {
          if (!this.props.onMouseEnter && !this.props.onMouseLeave) {
            this.sseh2.removeInputAction(ScreenSpaceEventType.MOUSE_MOVE);
          } else if (
            (this.props.onMouseEnter || this.props.onMouseLeave) &&
            !prevProps.onMouseEnter &&
            !prevProps.onMouseLeave
          ) {
            this.sseh2.setInputAction(this.checkHovering as any, ScreenSpaceEventType.MOUSE_MOVE);
          }
        }
      }

      public componentWillUnmount() {
        if (this.sseh && !this.sseh.isDestroyed) {
          this.sseh.destroy();
        }
        if (this.sseh2 && !this.sseh2.isDestroyed) {
          this.sseh2.destroy();
        }
      }

      private createEvent(fn: (m: CesiumMovementEvent, e: E) => void) {
        if (!this.ref.current || !this.ref.current.cesiumElement) {
          return;
        }
        const source = this.ref.current.cesiumElement;
        const scene = this.props.cesium.scene;
        return (movement: CesiumMovementEvent) => {
          const picked = movement.position ? scene.pick(movement.position) : undefined;
          if (picked && picked.id && picked.id === source) {
            fn(movement, source);
          }
        };
      }

      private checkHovering = (m: CesiumMovementEvent) => {
        if (!this.ref.current || !this.ref.current.cesiumElement) {
          return;
        }
        const source = this.ref.current.cesiumElement;
        const scene = this.props.cesium.scene;
        const picked = m.endPosition ? scene.pick(m.endPosition) : undefined;
        const before = this.hovering;

        const hovering = !!picked && !!picked.id && picked.id === source;
        this.hovering = hovering;

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
    },
  );

export default createEventWrapper;
