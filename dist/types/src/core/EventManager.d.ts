import Cesium from "cesium";
export declare type EventType = "onClick" | "onDoubleClick" | "onMouseDown" | "onMouseUp" | "onMiddleClick" | "onMiddleDown" | "onMiddleUp" | "onMouseMove" | "onPinchEnd" | "onPinchMove" | "onPinchStart" | "onRightClick" | "onRightDown" | "onRightUp" | "onWheel" | "onMouseEnter" | "onMouseLeave";
export interface EventProps<T> {
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
    onWheel?: (movement: CesiumMovementEvent, target: T) => void;
    onMouseEnter?: (movement: CesiumMovementEvent, target: T) => void;
    onMouseLeave?: (movement: CesiumMovementEvent, target: T) => void;
}
export interface CesiumMovementEvent {
    position?: Cesium.Cartesian2;
    startPositon?: Cesium.Cartesian2;
    endPosition?: Cesium.Cartesian2;
}
export declare type Callback<T = any> = (e: CesiumMovementEvent, source: T) => void;
export declare const eventNames: EventType[];
export default class EventManager {
    private static eventTypeMap;
    private scene;
    private sshe;
    private events;
    private hovered;
    private changed;
    constructor(scene: Cesium.Scene, canvas: HTMLCanvasElement);
    destroy(): void;
    isDestroyed(): boolean;
    on(element: any, type: EventType, cb: Callback): void;
    off(element: any, type: EventType): void;
    setEvents(element: any, props: object): void;
    clearEvents(element: any): void;
    commit(): void;
    getScreenSpaceEventHandler(): Cesium.ScreenSpaceEventHandler;
    private onMouseMove;
    private eventCallback;
    private pick;
}
