import {
  forwardRef,
  PureComponent,
  PropsWithoutRef,
  RefAttributes,
  ForwardRefExoticComponent,
  ComponentType,
} from "react";

import { Consumer } from "./context";

export type CesiumProp<C> = {
  cesium: C;
};

export interface CesiumInsideComponentType<E, P = any>
  extends PureComponent<WithContextProps<P, any>> {
  cesiumElement: E;
}

export type CesiumHOCComponentType<E, P> = ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<CesiumInsideComponentType<E, P>>
>;

export type WithContextProps<P, C> = P & CesiumProp<C>;
export type WithContextType<P, C> = ComponentType<WithContextProps<P, C>>;

export const withCesium = <P, C>(Component: WithContextType<P, C>) =>
  // supports both functional components and class components
  // eslint-disable-next-line react/display-name
  forwardRef<WithContextType<P, C>, P>((props, ref) => (
    <Consumer>{(value: any) => <Component {...props} ref={ref} cesium={value} />}</Consumer>
  ));
