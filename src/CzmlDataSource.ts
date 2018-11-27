import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

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

export interface CzmlDataSourceProps
  extends CzmlDataSourceCesiumProps,
    CzmlDataSourceCesiumReadonlyProps,
    CzmlDataSourceCesiumEvents {
  data?: Cesium.Resource | string | object;
  sourceUri?: string;
  show?: boolean;
  onLoad?: (CzmlDataSouce: Cesium.CzmlDataSource) => void;
}

export interface CzmlDataSourceContext {
  dataSourceCollection?: Cesium.DataSourceCollection;
}

const cesiumProps: Array<keyof CzmlDataSourceCesiumProps> = ["clustering"];

const cesiumReadonlyProps: Array<keyof CzmlDataSourceCesiumReadonlyProps> = ["name"];

const cesiumEventProps: EventkeyMap<Cesium.CzmlDataSource, keyof CzmlDataSourceCesiumEvents> = {
  changedEvent: "onChange",
  errorEvent: "onError",
  loadingEvent: "onLoading",
};

const load = ({
  element,
  data,
  onLoad,
  sourceUri,
}: {
  element: Cesium.CzmlDataSource;
  dataSources: Cesium.DataSourceCollection;
  data: Cesium.Resource | string | object;
  onLoad?: (CzmlDataSource: Cesium.CzmlDataSource) => void;
  sourceUri?: string;
}) => {
  element
    .load(data, {
      sourceUri,
    })
    .then(value => {
      if (onLoad) {
        try {
          onLoad(value);
        } catch (e) {
          throw e;
        }
      }
    });
};

const CzmlDataSource = createCesiumComponent<
  Cesium.CzmlDataSource,
  CzmlDataSourceProps,
  CzmlDataSourceContext
>({
  name: "CzmlDataSource",
  create(cprops, props) {
    const ds = new Cesium.CzmlDataSource(props.name);
    if (cprops.clustering) {
      ds.clustering = cprops.clustering;
    }
    if (typeof cprops.show === "boolean") {
      ds.show = cprops.show;
    }
    return ds;
  },
  mount(element, context, props) {
    if (context.dataSourceCollection) {
      context.dataSourceCollection.add(element);
      if (props.data) {
        load({
          element,
          dataSources: context.dataSourceCollection,
          data: props.data,
          onLoad: props.onLoad,
          sourceUri: props.sourceUri,
        });
      }
    }
  },
  update(element, props, prevProps, context) {
    if (prevProps.show !== props.show || !props.data) {
      element.show = !!props.data && (typeof props.show === "boolean" ? props.show : true);
    }
    if (
      context.dataSourceCollection &&
      props.data &&
      (prevProps.data !== props.data || prevProps.sourceUri !== props.sourceUri)
    ) {
      load({
        element,
        dataSources: context.dataSourceCollection,
        data: props.data,
        onLoad: props.onLoad,
        sourceUri: props.sourceUri,
      });
    }
  },
  unmount(element, context) {
    if (context.dataSourceCollection && !context.dataSourceCollection.isDestroyed()) {
      context.dataSourceCollection.remove(element);
    }
  },
  provide(element) {
    return {
      dataSource: element,
    };
  },
  cesiumProps,
  cesiumReadonlyProps,
  cesiumEventProps,
});

export default CzmlDataSource;
