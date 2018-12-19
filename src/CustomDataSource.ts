import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

/*
@summary
`CustomDataSource` is a kind of data sources, but empty.
It can be thought of as a collection of entities in a sense.
It can have some Entity components as children.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

export interface CustomDataSourceCesiumProps {
  clustering?: Cesium.EntityCluster;
  name?: string;
  show?: boolean;
  clock?: Cesium.DataSourceClock;
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
  dataSourceCollection?: Cesium.DataSourceCollection;
}

const cesiumProps: Array<keyof CustomDataSourceCesiumProps> = [
  "clustering",
  "name",
  "show",
  "clock",
];

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
    if (typeof cprops.clock !== "undefined") {
      ds.clock = cprops.clock;
    }
    return ds;
  },
  mount(element, context) {
    if (context.dataSourceCollection) {
      context.dataSourceCollection.add(element);
    }
  },
  unmount(element, context) {
    if (context.dataSourceCollection && !context.dataSourceCollection.isDestroyed()) {
      context.dataSourceCollection.remove(element);
    }
  },
  provide(element) {
    return {
      entityCollection: element.entities,
      dataSource: element,
    };
  },
  cesiumProps,
  cesiumEventProps,
});

export default CustomDataSource;
