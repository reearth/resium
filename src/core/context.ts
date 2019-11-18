import { createContext, useContext } from "react";

export const CesiumContext = createContext<any>({});
export const { Provider, Consumer } = CesiumContext;
export const useCesium = <T extends any>() => useContext(CesiumContext) as T;
