import React, { forwardRef } from "react";

import { useCesium, Options, EventkeyMap } from "./hooks";
import { CesiumContext } from "./context";

export { EventkeyMap };

export interface CesiumComponentOptions<Element, Props, Context>
  extends Options<Element, Props, Context> {
  renderContainer?: boolean;
  noChildren?: boolean;
}

export interface CesiumComponentRef<Element> {
  cesiumElement?: Element;
}

export type CesiumComponentType<Element, Props> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Props> & React.RefAttributes<CesiumComponentRef<Element>>
>;

export const createCesiumComponent = <Element, Props, Context>({
  renderContainer,
  noChildren,
  ...options
}: CesiumComponentOptions<Element, Props, Context>): CesiumComponentType<Element, Props> => {
  const component: React.FC<Props> = (props, ref) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [provided, mounted, wrapperRef] = useCesium(options, props, ref);

    if (noChildren) return null;

    const children: React.ReactElement | null = mounted ? <>{props.children}</> : null;
    const wrappedChildren: React.ReactElement | null = renderContainer ? (
      <div ref={wrapperRef}>{children}</div>
    ) : (
      children
    );

    if (provided) {
      return <CesiumContext.Provider value={provided}>{wrappedChildren}</CesiumContext.Provider>;
    }
    return wrappedChildren;
  };

  component.displayName = options.name;

  return forwardRef<CesiumComponentRef<Element>, Props>(component);
};
