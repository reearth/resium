import { BoxGraphics as CesiumBoxGraphics } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
} from "../core";

/*
@summary
`BoxGraphics` is a box visualization for the entity.
*/

/*
@scope
BoxGraphic is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export type BoxGraphicsCesiumProps = PickCesiumProps<
  CesiumBoxGraphics | CesiumBoxGraphics.ConstructorOptions,
  typeof cesiumProps
>;

export type BoxGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type BoxGraphicsProps = BoxGraphicsCesiumProps & BoxGraphicsCesiumEvents;

const cesiumProps = [
  "heightReference",
  "dimensions",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "shadows",
  "distanceDisplayCondition",
] as const;

const cesiumEventProps: EventkeyMap<CesiumBoxGraphics, BoxGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumBoxGraphics | CesiumBoxGraphics.ConstructorOptions,
  typeof cesiumProps | typeof cesiumEventProps[keyof typeof cesiumEventProps][]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const BoxGraphics = createCesiumComponent<CesiumBoxGraphics, BoxGraphicsProps>({
  name: "BoxGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumBoxGraphics({
      heightReference: props.heightReference,
      dimensions: props.dimensions,
      show: props.show,
      fill: props.fill,
      material: props.material as any, // WORKAROUND: string type missing
      outline: props.outline,
      outlineColor: props.outlineColor,
      outlineWidth: props.outlineWidth,
      shadows: props.shadows,
      distanceDisplayCondition: props.distanceDisplayCondition,
    });
    context.entity.box = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.box = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default BoxGraphics;
