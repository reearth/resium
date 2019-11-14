import React, { forwardRef } from "react";
import { Consumer } from "./context";

export interface CesiumProp<C> {
  cesium: C;
}

export type WithContextProps<P, C> = P & CesiumProp<C>;
export type WithContextType<P, C> = React.ComponentType<WithContextProps<P, C>>;

export const withCesium = <P, C>(Component: WithContextType<P, C>) =>
  // supports both functional components and class components
  // eslint-disable-next-line react/display-name
  forwardRef<WithContextType<P, C>, P>((props, ref) => (
    <Consumer>{(value: any) => <Component {...props} ref={ref} cesium={value} />}</Consumer>
  ));
