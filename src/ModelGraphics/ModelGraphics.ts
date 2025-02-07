import { ModelGraphics as CesiumModelGraphics } from "cesium";

import { createCesiumComponent, PickCesiumProps, Merge } from "../core";

/*
@summary
`ModelGraphics` is a 3D model visualization for the entity.
*/

/*
@scope
ModelGraphics can be mounted only inside[Entity](/components/Entity) components,
and can not be mounted more than once for each entity.
*/

export type Target = Merge<CesiumModelGraphics, CesiumModelGraphics.ConstructorOptions>;

export type ModelGraphicsCesiumProps = PickCesiumProps<Target, typeof cesiumProps>;

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
  "environmentMapOptions",
  "enableVerticalExaggeration",
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
  "articulations",
  "customShader",
] as const;

export const cesiumEventProps = {
  onDefinitionChange: "definitionChanged",
} as const;

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
