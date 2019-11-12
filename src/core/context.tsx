import React, { createContext } from "react";

export interface CesiumProp<C> {
  cesium: C;
}

export type WithContextProps<P, C> = P & CesiumProp<C>;
export type WithContextType<P, C> = React.ComponentType<WithContextProps<P, C>>;

export const CesiumContext = createContext<any>({});
export const { Provider, Consumer } = CesiumContext;

export const withCesium = <P, C>(Component: WithContextType<P, C>) =>
  // supports both functional components and class components
  // eslint-disable-next-line react/display-name
  React.forwardRef<WithContextType<P, C>, P>(
    (props: P & { children?: React.ReactNode }, ref?: React.Ref<WithContextType<P, C>> | null) => (
      <Consumer>
        {(value: any) => <Component {...Object.assign({}, props, { ref })} cesium={value} />}
      </Consumer>
    ),
  );
