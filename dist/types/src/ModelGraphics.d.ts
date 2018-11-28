/// <reference types="react" />
import Cesium from "cesium";
export interface ModelGraphicsCesiumProps {
    uri?: Cesium.Property | string;
    show?: Cesium.Property | boolean;
    scale?: Cesium.Property | number;
    minimumPixelSize?: Cesium.Property | number;
    maximumScale?: Cesium.Property | number;
    incrementallyLoadTextures?: Cesium.Property | boolean;
    runAnimations?: Cesium.Property | boolean;
    clampAnimations?: Cesium.Property | boolean;
    nodeTransformations?: Cesium.Property;
    shadows?: Cesium.Property | Cesium.ShadowMode;
    heightReference?: Cesium.Property | Cesium.HeightReference;
    distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
    silhouetteColor?: Cesium.Property | Cesium.Color;
    silhouetteSize?: Cesium.Property | number;
    color?: Cesium.Property | Cesium.Color;
    colorBlendMode?: Cesium.Property;
    colorBlendAmount?: Cesium.Property | number;
    clippingPlanes?: Cesium.Property;
    imageBasedLightingFactor?: Cesium.Property | Cesium.Cartesian2;
    lightColor?: Cesium.Property | Cesium.Color;
}
export interface ModelGraphicsProps extends ModelGraphicsCesiumProps {
    onDefinitionChange?: () => void;
}
export interface ModelGraphicsContext {
    entity?: Cesium.Entity;
}
declare const ModelGraphics: import("react").ForwardRefExoticComponent<ModelGraphicsProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.ModelGraphics>>>;
export default ModelGraphics;
