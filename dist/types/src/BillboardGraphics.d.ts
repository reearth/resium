/// <reference types="react" />
import Cesium from "cesium";
export interface BillboardGraphicsCesiumProps {
    image?: Cesium.Property | ImageData | string | HTMLCanvasElement;
    show?: Cesium.Property | boolean;
    scale?: Cesium.Property | number;
    horizontalOrigin?: Cesium.Property | Cesium.HorizontalOrigin;
    verticalOrigin?: Cesium.Property | Cesium.VerticalOrigin;
    eyeOffset?: Cesium.Property | Cesium.Cartesian3;
    pixelOffset?: Cesium.Property | Cesium.Cartesian2;
    rotation?: Cesium.Property | number;
    alignedAxis?: Cesium.Property | Cesium.Cartesian3;
    width?: Cesium.Property | number;
    height?: Cesium.Property | number;
    color?: Cesium.Property | Cesium.Color;
    scaleByDistance?: Cesium.Property | Cesium.NearFarScalar;
    translucencyByDistance?: Cesium.Property | Cesium.NearFarScalar;
    pixelOffsetScaleByDistance?: Cesium.Property | Cesium.NearFarScalar;
    imageSubRegion?: Cesium.Property | Cesium.BoundingRectangle;
    sizeInMeters?: Cesium.Property | boolean;
    heightReference?: Cesium.Property | Cesium.HeightReference;
    distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
    disableDepthTestDistance?: Cesium.Property | number;
}
export interface BillboardGraphicsProps extends BillboardGraphicsCesiumProps {
    onDefinitionChange?: () => void;
}
export interface BillboardGraphicsContext {
    entity?: Cesium.Entity;
}
declare const BillboardGraphics: import("react").ForwardRefExoticComponent<BillboardGraphicsProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.BillboardGraphics>>>;
export default BillboardGraphics;
