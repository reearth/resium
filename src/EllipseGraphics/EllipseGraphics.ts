import { EllipseGraphics as CesiumEllipseGraphics } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
} from "../core";

/*
@summary
`EllipseGraphics` is a ellipse visualization for the entity.
*/

/*
@scope
EllipseGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export type EllipseGraphicsCesiumProps = PickCesiumProps<
  CesiumEllipseGraphics | CesiumEllipseGraphics.ConstructorOptions,
  typeof cesiumProps
>;

export type EllipseGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type EllipseGraphicsProps = EllipseGraphicsCesiumProps & EllipseGraphicsCesiumEvents;

const cesiumProps = [
  "semiMajorAxis",
  "semiMinorAxis",
  "height",
  "heightReference",
  "extrudedHeight",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "numberOfVerticalLines",
  "rotation",
  "stRotation",
  "granularity",
  "shadows",
  "distanceDisplayCondition",
  "zIndex",
  "classificationType",
] as const;

const cesiumEventProps: EventkeyMap<CesiumEllipseGraphics, EllipseGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumEllipseGraphics | CesiumEllipseGraphics.ConstructorOptions,
  typeof cesiumProps | typeof cesiumEventProps[keyof typeof cesiumEventProps]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const EllipseGraphics = createCesiumComponent<CesiumEllipseGraphics, EllipseGraphicsProps>({
  name: "EllipseGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumEllipseGraphics(props);
    if (props.classificationType) {
      // WORKAROUND: classificationType field type is mismatched
      (element as any).classificationType = props.classificationType;
    }
    context.entity.ellipse = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.ellipse = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default EllipseGraphics;
