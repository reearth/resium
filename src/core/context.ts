import { createContext, useContext } from "react";

export const CesiumContext = createContext<any>({});
export const { Provider, Consumer } = CesiumContext;
export const useCesiumContext = <T extends any>() => useContext(CesiumContext) as T;
