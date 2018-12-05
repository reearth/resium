import React from "react";
export interface Context {
    [key: string]: unknown | undefined;
}
export interface CesiumProp<C> {
    cesium: C;
}
export declare type WithContextProps<P, C> = P & CesiumProp<C>;
export declare type WithContextType<P, C> = React.ComponentType<WithContextProps<P, C>>;
export declare const Provider: React.ProviderExoticComponent<React.ProviderProps<Context>>, Consumer: React.ExoticComponent<React.ConsumerProps<Context>>;
export declare const withCesium: <P, C>(Component: React.ComponentType<WithContextProps<P, C>>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<React.ComponentType<WithContextProps<P, C>>>>;
