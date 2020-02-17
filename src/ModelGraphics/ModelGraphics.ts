import { ModelGraphics as CesiumModelGraphics } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

/*
@summary
`ModelGraphics` is a 3D model visualization for the entity.
*/

/*
@scope
ModelGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface ModelGraphicsCesiumProps {
  uri?: Cesium.Property | string;
  show?: Cesium.Property | boolean;
  scale?: Cesium.Property | number;
  minimumPixelSize?: Cesium.Property | number;
  maximumScale?: Cesium.Property | number;
  incrementallyLoadTextures?: Cesium.Property | boolean;
  runAnimations?: Cesium.Property | boolean;
  clampAnimations?: Cesium.Property | boolean;
  // @type Cesium.Property | { [name: string]: Cesium.TranslationRotationScale }
  nodeTransformations?: Cesium.Property | any;
  shadows?: Cesium.Property | Cesium.ShadowMode;
  heightReference?: Cesium.Property | Cesium.HeightReference;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
  silhouetteColor?: Cesium.Property | Cesium.Color;
  silhouetteSize?: Cesium.Property | number;
  color?: Cesium.Property | Cesium.Color;
  // @type Cesium.Property | Cesium.ColorBlendMode
  colorBlendMode?: Cesium.Property | any;
  colorBlendAmount?: Cesium.Property | number;
  clippingPlanes?: Cesium.Property | Cesium.ClippingPlaneCollection;
  imageBasedLightingFactor?: Cesium.Property | Cesium.Cartesian2;
  lightColor?: Cesium.Property | Cesium.Color;
}

export interface ModelGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface ModelGraphicsProps extends ModelGraphicsCesiumProps, ModelGraphicsCesiumEvents {}

const cesiumProps: (keyof ModelGraphicsCesiumProps)[] = [
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
];

const cesiumEventProps: EventkeyMap<Cesium.ModelGraphics, ModelGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const ModelGraphics = createCesiumComponent<
  Cesium.ModelGraphics,
  ModelGraphicsProps,
  {
    entity?: Cesium.Entity;
  }
>({
  name: "ModelGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumModelGraphics(props as any); // WORKAROUND
    context.entity.model = element;
    return element;
  },
  destroy(element, context) {
    if (context.entity) {
      context.entity.model = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default ModelGraphics;
