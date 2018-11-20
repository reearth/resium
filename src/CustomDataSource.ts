import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

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

export interface CustomDataSourceProps
  extends CustomDataSourceCesiumProps,
    CustomDataSourceCesiumEvents {
  children?: React.ReactNode;
}

export interface CustomDataSourceContext {
  dataSourceCollection: Cesium.DataSourceCollection;
}

const cesiumProps: Array<keyof CustomDataSourceCesiumProps> = ["clustering", "name", "show"];

const cesiumEventProps: EventkeyMap<Cesium.CustomDataSource, keyof CustomDataSourceCesiumEvents> = {
  changedEvent: "onChange",
  errorEvent: "onError",
  loadingEvent: "onLoading",
};

const CustomDataSource = createCesiumComponent<
  Cesium.CustomDataSource,
  CustomDataSourceProps,
  CustomDataSourceContext
>({
  name: "CustomDataSource",
  create(cprops) {
    const ds = new Cesium.CustomDataSource(cprops.name);
    if (cprops.clustering) {
      ds.clustering = cprops.clustering;
    }
    if (typeof cprops.show === "boolean") {
      ds.show = cprops.show;
    }
    return ds;
  },
  mount(element, context) {
    context.dataSourceCollection.add(element);
  },
  unmount(element, context) {
    context.dataSourceCollection.remove(element);
  },
  provide(element) {
    return {
      entityCollection: element.entities,
    };
  },
  cesiumProps,
  cesiumEventProps,
});

export default CustomDataSource;
