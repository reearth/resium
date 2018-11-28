/// <reference types="react" />
import Cesium from "cesium";
export interface CylinderGraphicsCesiumProps {
    heightReference?: Cesium.Property | Cesium.HeightReference;
    length?: Cesium.Property | number;
    topRadius?: Cesium.Property | number;
    bottomRadius?: Cesium.Property | number;
    show?: Cesium.Property | boolean;
    fill?: Cesium.Property | boolean;
    material?: Cesium.MaterialProperty | Cesium.Color | string;
    outline?: Cesium.Property | boolean;
    outlineColor?: Cesium.Property | Cesium.Color;
    outlineWidth?: Cesium.Property | number;
    numberOfVerticalLines?: Cesium.Property | number;
    slices?: Cesium.Property | number;
    shadowMode?: Cesium.Property | Cesium.ShadowMode;
    distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
}
export interface CylinderGraphicsProps extends CylinderGraphicsCesiumProps {
    onDefinitionChange?: () => void;
}
export interface CylinderGraphicsContext {
    entity?: Cesium.Entity;
}
declare const CylinderGraphics: import("react").ForwardRefExoticComponent<CylinderGraphicsProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.CylinderGraphics>>>;
export default CylinderGraphics;
