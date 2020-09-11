import { CylinderGraphics as CesiumCylinderGraphics } from "cesium";

import {
  createCesiumComponent,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
  Merge,
  ValueOf,
} from "../core";

/*
@summary
`CylinderGraphics` is a cylinder visualization for the entity.
*/

/*
@scope
CylinderGraphics can be mounted only inside[Entity](/components/Entity) components,
and can not be mounted more than once for each entity.
*/

export type CylinderGraphicsCesiumProps = PickCesiumProps<
  Merge<CesiumCylinderGraphics, CesiumCylinderGraphics.ConstructorOptions>,
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
  "shadows",
] as const;

const cesiumEventProps = {
  onDefinitionChange: "definitionChanged",
} as const;

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

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  Merge<CesiumCylinderGraphics, CesiumCylinderGraphics.ConstructorOptions>,
  keyof CylinderGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;
