/// <reference types="react" />
import Cesium from "cesium";
export interface KmlDataSourceCesiumProps {
    clustering?: Cesium.EntityCluster;
}
export interface KmlDataSourceCesiumReadonlyProps {
    camera?: Cesium.Camera;
    canvas?: HTMLCanvasElement;
    ellipsoid?: Cesium.Ellipsoid;
}
export interface KmlDataSourceCesiumEvents {
    onChange?: (kmlDataSource: Cesium.KmlDataSource) => void;
    onError?: (kmlDataSource: Cesium.KmlDataSource, error: any) => void;
    onLoading?: (kmlDataSource: Cesium.KmlDataSource, isLoaded: boolean) => void;
    onReferesh?: (kmlDataSource: Cesium.KmlDataSource, urlComponent: string) => void;
    onUnsupportedNode?: (kmlDataSource: Cesium.KmlDataSource) => void;
}
export interface KmlDataSourceProps extends KmlDataSourceCesiumProps, KmlDataSourceCesiumReadonlyProps, KmlDataSourceCesiumEvents {
    data?: Cesium.Resource | string | Document | Blob;
    clampToGround?: boolean;
    ellipsoid?: Cesium.Ellipsoid;
    sourceUri?: string;
    show?: boolean;
    onLoad?: (kmlDataSouce: Cesium.KmlDataSource) => void;
}
export interface KmlDataSourceContext {
    dataSourceCollection: Cesium.DataSourceCollection;
    scene: Cesium.Scene;
}
declare const KmlDataSource: import("react").ForwardRefExoticComponent<KmlDataSourceProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.KmlDataSource>>>;
export default KmlDataSource;
