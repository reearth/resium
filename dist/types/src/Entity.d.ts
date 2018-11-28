/// <reference types="react" />
import Cesium from "cesium";
import EventManager, { EventProps } from "./core/EventManager";
import { BillboardGraphicsCesiumProps } from "./BillboardGraphics";
import { BoxGraphicsCesiumProps } from "./BoxGraphics";
import { CorridorGraphicsCesiumProps } from "./CorridorGraphics";
import { CylinderGraphicsCesiumProps } from "./CylinderGraphics";
import { EllipseGraphicsCesiumProps } from "./EllipseGraphics";
import { EllipsoidGraphicsCesiumProps } from "./EllipsoidGraphics";
import { LabelGraphicsCesiumProps } from "./LabelGraphics";
import { ModelGraphicsCesiumProps } from "./ModelGraphics";
import { PathGraphicsCesiumProps } from "./PathGraphics";
import { PlaneGraphicsCesiumProps } from "./PlaneGraphics";
import { PointGraphicsCesiumProps } from "./PointGraphics";
import { PolygonGraphicsCesiumProps } from "./PolygonGraphics";
import { PolylineGraphicsCesiumProps } from "./PolylineGraphics";
import { PolylineVolumeGraphicsCesiumProps } from "./PolylineVolumeGraphics";
import { RectangleGraphicsCesiumProps } from "./RectangleGraphics";
import { WallGraphicsCesiumProps } from "./WallGraphics";
export interface EntityCesiumProps {
    availability?: Cesium.TimeIntervalCollection;
    billboard?: Cesium.BillboardGraphics | BillboardGraphicsCesiumProps;
    box?: Cesium.BoxGraphics | BoxGraphicsCesiumProps;
    corridor?: Cesium.CorridorGraphics | CorridorGraphicsCesiumProps;
    cylinder?: Cesium.CylinderGraphics | CylinderGraphicsCesiumProps;
    description?: Cesium.Property | any;
    ellipse?: Cesium.EllipseGraphics | EllipseGraphicsCesiumProps;
    ellipsoid?: Cesium.EllipsoidGraphics | EllipsoidGraphicsCesiumProps;
    entityCollection?: Cesium.EntityCollection;
    label?: Cesium.LabelGraphics | LabelGraphicsCesiumProps;
    model?: Cesium.ModelGraphics | ModelGraphicsCesiumProps;
    name?: string;
    orientation?: Cesium.Property | Cesium.Matrix4;
    parent?: Cesium.Entity;
    path?: Cesium.PathGraphics | PathGraphicsCesiumProps;
    plane?: {
        plane: Cesium.Property;
        dimensions: Cesium.Property | Cesium.Cartesian2;
        show: Cesium.Property | boolean;
        fill: Cesium.Property | boolean;
        material: Cesium.MaterialProperty | Cesium.Color | string;
        outline: Cesium.Property | boolean;
        outlineColor?: Cesium.Property | Cesium.Color;
        outlineWidth?: Cesium.Property | number;
        shadows?: Cesium.Property | Cesium.ShadowMode;
        distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
    } | PlaneGraphicsCesiumProps;
    point?: Cesium.PointGraphics | PointGraphicsCesiumProps;
    polygon?: Cesium.PolygonGraphics | PolygonGraphicsCesiumProps;
    polyline?: Cesium.PolylineGraphics | PolylineGraphicsCesiumProps;
    polylineVolume?: Cesium.PolylineVolumeGraphics | PolylineVolumeGraphicsCesiumProps;
    position?: Cesium.PositionProperty | Cesium.Cartesian3;
    properties?: any;
    rectangle?: Cesium.RectangleGraphics | RectangleGraphicsCesiumProps;
    show?: boolean;
    viewFrom?: Cesium.Property | Cesium.Cartesian3;
    wall?: Cesium.WallGraphics | WallGraphicsCesiumProps;
}
export interface EntityCesiumReadonlyProps {
    id?: string;
}
export interface EntityCesiumEvents {
    onDefinitionChange?: () => void;
}
export interface EntityProps extends EntityCesiumProps, EntityCesiumReadonlyProps, EntityCesiumEvents, EventProps<Cesium.Entity> {
    children?: React.ReactNode;
    selected?: boolean;
    tracked?: boolean;
}
export interface EntityContext {
    entityCollection?: Cesium.EntityCollection;
    viewer?: Cesium.Viewer;
    __RESIUM_EVENT_MANAGER?: EventManager;
}
declare const Entity: import("react").ForwardRefExoticComponent<EntityProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.Entity>>>;
export default Entity;
