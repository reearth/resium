import React, { forwardRef } from "react";

import { useCesium, Options, EventkeyMap } from "./hooks";
import { CesiumContext } from "./context";
import { pick } from "./util";

export { EventkeyMap };

export interface CesiumComponentOptions<
  Element,
  Props,
  Context,
  ProvidecContext = any,
  State = any
> extends Options<Element, Props, Context, ProvidecContext, State> {
  renderContainer?: boolean;
  noChildren?: boolean;
  containerProps?:
    | (keyof Props)[]
    | ((
        props: Props,
      ) => Partial<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>);
  defaultProps?: Partial<Props>;
}

export interface CesiumComponentRef<Element> {
  cesiumElement?: Element;
}

export type CesiumComponentType<Element, Props> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Props> & React.RefAttributes<CesiumComponentRef<Element>>
>;

export const createCesiumComponent = <Element, Props, Context, ProvidecContext = any, State = any>({
  renderContainer,
  noChildren,
  containerProps,
  defaultProps,
  ...options
}: CesiumComponentOptions<Element, Props, Context, ProvidecContext, State>): CesiumComponentType<
  Element,
  Props
> => {
  const component: React.FC<Props> = (props, ref) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [provided, mounted, wrapperRef] = useCesium(options, props, ref);

    if (noChildren) return null;

    const children: React.ReactElement | null = mounted ? <>{props.children}</> : null;
    const wrappedChildren: React.ReactElement | null = renderContainer ? (
      <div
        ref={wrapperRef}
        {...(typeof containerProps === "function"
          ? containerProps(props)
          : pick(props, containerProps))}>
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

  if (defaultProps) {
    component.defaultProps = defaultProps;
  }

  return forwardRef<CesiumComponentRef<Element>, Props>(component);
};
