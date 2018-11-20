/// <reference types="cesium" />
import React from "react";
import { CesiumElementHolder } from "./CesiumComponent";
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
declare const createEventWrapper: <E, P>(Comp: React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<CesiumElementHolder<E>>>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<EventWrapperProps<E> & P> & React.RefAttributes<React.ComponentType<import("./context").WithContextProps<EventWrapperProps<E> & P, EventWrapperContext>>>>;
export default createEventWrapper;
