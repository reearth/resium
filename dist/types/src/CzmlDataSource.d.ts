/// <reference types="react" />
import Cesium from "cesium";
export interface CzmlDataSourceCesiumProps {
    clustering?: Cesium.EntityCluster;
}
export interface CzmlDataSourceCesiumReadonlyProps {
    name?: string;
}
export interface CzmlDataSourceCesiumEvents {
    onChange?: (CzmlDataSource: Cesium.CzmlDataSource) => void;
    onError?: (CzmlDataSource: Cesium.CzmlDataSource, error: any) => void;
    onLoading?: (CzmlDataSource: Cesium.CzmlDataSource, isLoaded: boolean) => void;
}
export interface CzmlDataSourceProps extends CzmlDataSourceCesiumProps, CzmlDataSourceCesiumReadonlyProps, CzmlDataSourceCesiumEvents {
    data?: Cesium.Resource | string | object;
    sourceUri?: string;
    show?: boolean;
    onLoad?: (CzmlDataSouce: Cesium.CzmlDataSource) => void;
}
export interface CzmlDataSourceContext {
    dataSourceCollection?: Cesium.DataSourceCollection;
}
declare const CzmlDataSource: import("react").ForwardRefExoticComponent<CzmlDataSourceProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.CzmlDataSource>>>;
export default CzmlDataSource;
