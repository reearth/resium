import React, { forwardRef } from "react";
import { Consumer } from "./context";

export interface CesiumProp<C> {
  cesium: C;
}

export interface CesiumInsideComponentType<E, P = any>
  extends React.PureComponent<WithContextProps<P, any>> {
  cesiumElement: E;
}

export type CesiumHOCComponentType<E, P, C> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<CesiumInsideComponentType<E, P>>
>;

export type WithContextProps<P, C> = P & CesiumProp<C>;
export type WithContextType<P, C> = React.ComponentType<WithContextProps<P, C>>;

export const withCesium = <P, C>(Component: WithContextType<P, C>) =>
  // supports both functional components and class components
  // eslint-disable-next-line react/display-name
  forwardRef<WithContextType<P, C>, P>((props, ref) => (
    <Consumer>{(value: any) => <Component {...props} ref={ref} cesium={value} />}</Consumer>
  ));
