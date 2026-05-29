import type { ImageryProvider } from "cesium";
import type {
  HTMLAttributes,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  ForwardRefRenderFunction,
  PropsWithChildren} from "react";
import {
  forwardRef
} from "react";

import { CesiumContext } from "./context";
import type { Options } from "./hooks";
import { useCesiumComponent } from "./hooks";
import { pick } from "./util";

export type CesiumComponentOptions<
  Element,
  Props extends RootComponentInternalProps,
  State = any,
> = Options<Element, Props, State> & {
  renderContainer?: boolean;
  noChildren?: boolean;
  containerProps?: (keyof Props)[] | ((props: Props) => HTMLAttributes<HTMLDivElement>);
  defaultProps?: Partial<Props>;
  /**
   * Render-phase hook to resolve prop overrides before the Cesium element is
   * created. Use this together with `useCesiumResource` to integrate async
   * resource loading with React Suspense. Returns a partial props object that
   * is merged over the incoming props.
   */
  useResource?: (props: Props) => Partial<Props> | undefined;
};

export type CesiumComponentRef<Element> = {
  cesiumElement?: Element;
};

export type CesiumComponentType<Element, Props> = ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<CesiumComponentRef<Element>>
>;

export type RootComponentInternalProps = {
  onUpdate?: () => void;
};

export type RootComponentInternalValues = {
  imageryLayerWaitingList?: (Promise<ImageryProvider> | ImageryProvider)[];
};

const noResource = (): undefined => undefined;

export const createCesiumComponent = <Element, Props extends object, State = any>({
  renderContainer,
  noChildren,
  containerProps,
  defaultProps,
  useResource = noResource,
  ...options
}: CesiumComponentOptions<Element, Props, State>): CesiumComponentType<Element, Props> => {
  const component: ForwardRefRenderFunction<CesiumComponentRef<Element>, PropsWithoutRef<Props>> = (
    props,
    ref,
  ) => {
    const baseProps = {
      ...defaultProps,
      ...props,
    } as Props;
    // May suspend (throw a promise) to integrate async loading with <Suspense>.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const resolved = useResource(baseProps);
    const mergedProps = resolved ? ({ ...baseProps, ...resolved } as Props) : baseProps;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [provided, mounted, wrapperRef] = useCesiumComponent<Element, Props, State>(
      options,
      mergedProps,
      ref,
    );

    if (noChildren) return null;

    const children = mounted
      ? "children" in mergedProps
        ? (mergedProps as PropsWithChildren<Props>).children
        : null
      : null;
    const wrappedChildren = renderContainer ? (
      <div
        data-testid="resium-container"
        ref={wrapperRef}
        {...(typeof containerProps === "function"
          ? containerProps(mergedProps)
          : pick(mergedProps, containerProps))}>
        {children}
      </div>
    ) : children ? (
      <>{children}</>
    ) : null;

    if (provided) {
      return <CesiumContext.Provider value={provided}>{wrappedChildren}</CesiumContext.Provider>;
    }
    return wrappedChildren;
  };

  component.displayName = options.name;

  return forwardRef(component);
};
