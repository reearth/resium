/// <reference types="react" />
import Cesium from "cesium";
export interface CustomDataSourceCesiumProps {
    clustering?: Cesium.EntityCluster;
    name?: string;
    show?: boolean;
}
export interface CustomDataSourceCesiumEvents {
    onChange?: (customDataSource: Cesium.CustomDataSource) => void;
    onError?: (customDataSource: Cesium.CustomDataSource, error: any) => void;
    onLoading?: (customDataSource: Cesium.CustomDataSource, isLoaded: boolean) => void;
}
export interface CustomDataSourceProps extends CustomDataSourceCesiumProps, CustomDataSourceCesiumEvents {
}
export interface CustomDataSourceContext {
    dataSourceCollection: Cesium.DataSourceCollection;
}
declare const CustomDataSource: import("react").ForwardRefExoticComponent<CustomDataSourceProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.CustomDataSource>>>;
export default CustomDataSource;
