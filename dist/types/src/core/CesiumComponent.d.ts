/// <reference types="cesium" />
import React from "react";
export declare type EventKeys<T> = {
    [P in keyof T]: T[P] extends Cesium.Event ? P : never;
}[keyof T];
export declare type EventkeyMap<T, P> = {
    [K in EventKeys<T>]?: P;
};
export interface CesiumComponentOption<E, P, C, CC = {}, R = {}> {
    name: string;
    create: (cesiumProps: Readonly<P>, props: Readonly<P>, context: Readonly<C>, ref?: React.RefObject<R>) => E | [E, any];
    mount?: (element: E, context: Readonly<C>, props: Readonly<P>, ref?: React.RefObject<R>) => void;
    unmount?: (element: E, context: Readonly<C>, props: Readonly<P>, ref: React.RefObject<R> | undefined, state: any) => void;
    render?: (element: E | undefined, props: Readonly<P> & Readonly<{
        children?: React.ReactNode;
    }>, mounted: boolean, ref: React.RefObject<R> | undefined) => React.ReactNode;
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
export declare type CesiumComponentType<E, P> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<CesiumElementHolder<E>>>;
declare const createCesiumComponent: <E, P, C, CC = {}, R = {}>(opts: CesiumComponentOption<E, P, C, CC, R>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<CesiumElementHolder<E>>>;
export default createCesiumComponent;
