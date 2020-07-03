import React, {
  forwardRef,
  DetailedHTMLProps,
  HTMLAttributes,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  ForwardRefRenderFunction,
  ReactElement,
} from "react";

import { useCesiumComponent, Options } from "./hooks";
import { CesiumContext, Context } from "./context";
import { pick } from "./util";

export type CesiumComponentOptions<
  Element,
  Props,
  Context = any,
  ProvidecContext = any,
  State = any
> = Options<Element, Props, Context, ProvidecContext, State> & {
  renderContainer?: boolean;
  noChildren?: boolean;
  containerProps?:
    | (keyof Props)[]
    | ((
        props: Props,
      ) => Partial<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>);
  defaultProps?: Partial<Props>;
};

export type CesiumComponentRef<Element> = {
  cesiumElement?: Element;
};

export type CesiumComponentType<Element, Props> = ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<CesiumComponentRef<Element>>
>;

export const createCesiumComponent = <
  Element,
  Props,
  Ctx = Context,
  ProvidecContext = Context,
  State = any
>({
  renderContainer,
  noChildren,
  containerProps,
  defaultProps,
  ...options
}: CesiumComponentOptions<Element, Props, Ctx, ProvidecContext, State>): CesiumComponentType<
  Element,
  Props
> => {
  const component: ForwardRefRenderFunction<CesiumComponentRef<Element>, Props> = (props, ref) => {
    const mergedProps = {
      ...defaultProps,
      ...props,
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [provided, mounted, wrapperRef] = useCesiumComponent<
      Element,
      Props,
      Ctx,
      ProvidecContext,
      State
    >(options, mergedProps, ref);

    if (noChildren) return null;

    const children = mounted ? (mergedProps.children as ReactElement) : null;
    const wrappedChildren = renderContainer ? (
      <div
        ref={wrapperRef}
        {...(typeof containerProps === "function"
          ? containerProps(mergedProps)
          : pick(mergedProps, containerProps))}>
        {children}
      </div>
    ) : (
      children
    );

    if (provided) {
      return <CesiumContext.Provider value={provided}>{wrappedChildren}</CesiumContext.Provider>;
    }
    return wrappedChildren;
  };

  component.displayName = options.name;

  return forwardRef(component);
};
