import {
  ModelGraphics as CesiumModelGraphics,
  Property,
  Color,
  Cartesian2,
  ClippingPlaneCollection,
  DistanceDisplayCondition,
  HeightReference,
  ShadowMode,
} from "cesium";

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
  uri?: Property | string;
  show?: Property | boolean;
  scale?: Property | number;
  minimumPixelSize?: Property | number;
  maximumScale?: Property | number;
  incrementallyLoadTextures?: Property | boolean;
  runAnimations?: Property | boolean;
  clampAnimations?: Property | boolean;
  // @type Property | { [name: string]: TranslationRotationScale }
  nodeTransformations?: Property | any;
  shadows?: Property | ShadowMode;
  heightReference?: Property | HeightReference;
  distanceDisplayCondition?: Property | DistanceDisplayCondition;
  silhouetteColor?: Property | Color;
  silhouetteSize?: Property | number;
  color?: Property | Color;
  // @type Property | ColorBlendMode
  colorBlendMode?: Property | any;
  colorBlendAmount?: Property | number;
  clippingPlanes?: Property | ClippingPlaneCollection;
  imageBasedLightingFactor?: Property | Cartesian2;
  lightColor?: Property | Color;
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

const cesiumEventProps: EventkeyMap<CesiumModelGraphics, ModelGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

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
