/// <reference types="react" />
import Cesium from "cesium";
export interface GeoJsonDataSourceCesiumProps {
    clustering?: Cesium.EntityCluster;
    name?: string;
}
export interface GeoJsonDataSourceCesiumEvents {
    onChange?: (GeoJsonDataSource: Cesium.GeoJsonDataSource) => void;
    onError?: (GeoJsonDataSource: Cesium.GeoJsonDataSource, error: any) => void;
    onLoading?: (GeoJsonDataSource: Cesium.GeoJsonDataSource, isLoaded: boolean) => void;
}
export interface GeoJsonDataSourceProps extends GeoJsonDataSourceCesiumProps, GeoJsonDataSourceCesiumEvents {
    data?: Cesium.Resource | string | object;
    clampToGround?: boolean;
    sourceUri?: string;
    show?: boolean;
    markerSize?: number;
    markerSymbol?: string;
    markerColor?: Cesium.Color;
    stroke?: Cesium.Color;
    strokeWidth?: number;
    fill?: Cesium.Color;
    onLoad?: (GeoJsonDataSouce: Cesium.GeoJsonDataSource) => void;
}
export interface GeoJsonDataSourceContext {
    dataSourceCollection?: Cesium.DataSourceCollection;
}
declare const GeoJsonDataSource: import("react").ForwardRefExoticComponent<GeoJsonDataSourceProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.GeoJsonDataSource>>>;
export default GeoJsonDataSource;
