import { ModelGraphics as CesiumModelGraphics } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
} from "../core";

/*
@summary
`ModelGraphics` is a 3D model visualization for the entity.
*/

/*
@scope
ModelGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export type ModelGraphicsCesiumProps = PickCesiumProps<
  CesiumModelGraphics | CesiumModelGraphics.ConstructorOptions,
  typeof cesiumProps
>;

export type ModelGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type ModelGraphicsProps = ModelGraphicsCesiumProps & ModelGraphicsCesiumEvents;

const cesiumProps = [
  "uri",
  "show",
  "scale",
  "minimumPixelSize",
  "maximumScale",
  "incrementallyLoadTextures",
  "runAnimations",
  "clampAnimations",
  "nodeTransformations",
  "shadows",
  "heightReference",
  "distanceDisplayCondition",
  "silhouetteColor",
  "silhouetteSize",
  "color",
  "colorBlendMode",
  "colorBlendAmount",
  "clippingPlanes",
  "imageBasedLightingFactor",
  "lightColor",
] as const;

const cesiumEventProps: EventkeyMap<CesiumModelGraphics, ModelGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumModelGraphics | CesiumModelGraphics.ConstructorOptions,
  typeof cesiumProps | typeof cesiumEventProps[keyof typeof cesiumEventProps]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const ModelGraphics = createCesiumComponent<CesiumModelGraphics, ModelGraphicsProps>({
  name: "ModelGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumModelGraphics(props);
    context.entity.model = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.model = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default ModelGraphics;
