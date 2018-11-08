import React from "react";

export interface Context {
  [key: string]: unknown | undefined;
}
export type WithContextProps<P, C extends Context> = P & { cesium: C };
export type WithContextType<P, C extends Context> = React.ComponentType<WithContextProps<P, C>>;

export const { Provider, Consumer } = React.createContext<Context>({});

export const withContext = <P extends any, C extends Context>(Component: WithContextType<P, C>) => {
  const withContextomponent: WithContextType<P, C> = (props, ref: React.Ref<any>) => (
    <Consumer>{(value: Context) => <Component {...props} ref={ref} cesium={value} />}</Consumer>
  );
  return React.forwardRef(withContextomponent);
};
