import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface ModelGraphicsCesiumProps {
  uri?: Cesium.Property | string;
  show?: Cesium.Property | boolean;
  scale?: Cesium.Property | number;
  minimumPixelSize?: Cesium.Property | number;
  maximumScale?: Cesium.Property | number;
  incrementallyLoadTextures?: Cesium.Property | boolean;
  runAnimations?: Cesium.Property | boolean;
  clampAnimations?: Cesium.Property | boolean;
  nodeTransformations?: Cesium.Property; // | { [name: string]: Cesium.TranslationRotationScale };
  shadows?: Cesium.Property | Cesium.ShadowMode;
  heightReference?: Cesium.Property | Cesium.HeightReference;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
  silhouetteColor?: Cesium.Property | Cesium.Color;
  silhouetteSize?: Cesium.Property | number;
  color?: Cesium.Property | Cesium.Color;
  colorBlendMode?: Cesium.Property; // | Cesium.ColorBlendMode;
  colorBlendAmount?: Cesium.Property | number;
  clippingPlanes?: Cesium.Property; // | Cesium.ClippingPlaneCollection;
  imageBasedLightingFactor?: Cesium.Property | Cesium.Cartesian2;
  lightColor?: Cesium.Property | Cesium.Color;
}

export interface ModelGraphicsProps extends ModelGraphicsCesiumProps {
  onDefinitionChange?: () => void;
}

export interface ModelGraphicsContext {
  entity?: Cesium.Entity;
}

const cesiumProps: Array<keyof ModelGraphicsCesiumProps> = [
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

const cesiumEventProps: EventkeyMap<Cesium.ModelGraphics, keyof ModelGraphicsProps> = {
  definitionChanged: "onDefinitionChange",
};

const ModelGraphics = createCesiumComponent<
  Cesium.ModelGraphics,
  ModelGraphicsProps,
  ModelGraphicsContext
>({
  name: "ModelGraphics",
  create(cprops) {
    // workaround: type of "image" prop
    return new Cesium.ModelGraphics(cprops as any);
  },
  mount(element, context) {
    if (context.entity) {
      context.entity.model = element;
    }
  },
  unmount(element, context) {
    if (context.entity) {
      context.entity.model = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default ModelGraphics;
