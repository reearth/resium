import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

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
  nodeTransformations?: Cesium.Property;
  shadows?: Cesium.Property | Cesium.ShadowMode;
  heightReference?: Cesium.Property | Cesium.HeightReference;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
  silhouetteColor?: Cesium.Property | Cesium.Color;
  silhouetteSize?: Cesium.Property | number;
  color?: Cesium.Property | Cesium.Color;
  // @type Cesium.Property | Cesium.ColorBlendMode
  colorBlendMode?: Cesium.Property | any;
  colorBlendAmount?: Cesium.Property | number;
  // @type Cesium.Propert | Cesium.ClippingPlaneCollection
  clippingPlanes?: Cesium.Property | any;
  imageBasedLightingFactor?: Cesium.Property | Cesium.Cartesian2;
  lightColor?: Cesium.Property | Cesium.Color;
}

export interface ModelGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface ModelGraphicsProps extends ModelGraphicsCesiumProps, ModelGraphicsCesiumEvents {}

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

const cesiumEventProps: EventkeyMap<Cesium.ModelGraphics, keyof ModelGraphicsCesiumEvents> = {
  definitionChanged: "onDefinitionChange",
};

const ModelGraphics = createCesiumComponent<
  Cesium.ModelGraphics,
  ModelGraphicsProps,
  ModelGraphicsContext
>({
  name: "ModelGraphics",
  create(cprops) {
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
