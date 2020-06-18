import { CylinderGraphics as CesiumCylinderGraphics } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
} from "../core";

/*
@summary
`CylinderGraphics` is a cylinder visualization for the entity.
*/

/*
@scope
CylinderGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export type CylinderGraphicsCesiumProps = PickCesiumProps<
  CesiumCylinderGraphics | CesiumCylinderGraphics.ConstructorOptions,
  typeof cesiumProps
>;

export type CylinderCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type CylinderGraphicsProps = CylinderGraphicsCesiumProps & CylinderCesiumEvents;

const cesiumProps = [
  "heightReference",
  "length",
  "topRadius",
  "bottomRadius",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "numberOfVerticalLines",
  "slices",
  "shadowMode",
  "distanceDisplayCondition",
] as const;

const cesiumEventProps: EventkeyMap<CesiumCylinderGraphics, CylinderCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumCylinderGraphics | CesiumCylinderGraphics.ConstructorOptions,
  typeof cesiumProps | typeof cesiumEventProps[keyof typeof cesiumEventProps]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const CylinderGraphics = createCesiumComponent<CesiumCylinderGraphics, CylinderGraphicsProps>({
  name: "CylinderGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumCylinderGraphics(props);
    context.entity.cylinder = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.cylinder = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default CylinderGraphics;
