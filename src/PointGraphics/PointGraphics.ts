import { PointGraphics as CesiumPointGraphics } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
} from "../core";

/*
@summary
`PointGraphics` is a point visualization for the entity.
*/

/*
@scope
PointGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export type PointGraphicsCesiumProps = PickCesiumProps<
  CesiumPointGraphics | CesiumPointGraphics.ConstructorOptions,
  typeof cesiumProps
>;

export type PointGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type PointGraphicsProps = PointGraphicsCesiumProps & PointGraphicsCesiumEvents;

const cesiumProps = [
  "color",
  "pixelSize",
  "outlineColor",
  "outlineWidth",
  "show",
  "scaleByDistance",
  "translucencyByDistance",
  "heightReference",
  "distanceDisplayCondition",
  "disableDepthTestDistance",
] as const;

const cesiumEventProps: EventkeyMap<CesiumPointGraphics, PointGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumPointGraphics,
  typeof cesiumProps | typeof cesiumEventProps[keyof typeof cesiumEventProps]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const PointGraphics = createCesiumComponent<CesiumPointGraphics, PointGraphicsProps>({
  name: "PointGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPointGraphics(props);
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.point = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PointGraphics;
