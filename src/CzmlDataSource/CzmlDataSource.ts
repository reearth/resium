import { CzmlDataSource as CesiumCzmlDataSource } from "cesium";

import createCesiumComponent, { EventkeyMap } from "../core/CesiumComponent";

/*
@summary
`CzmlDataSource` provides the way to load and show CZML data into the scene.
CZML data can be loaded from a URL, string or raw object.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

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
  // @CesiumReadonlyProp
  data?: Cesium.Resource | string | object;
  // @CesiumReadonlyProp
  sourceUri?: string;
  // @CesiumReadonlyProp
  credit?: Cesium.Credit | string;
  // @CesiumProp
  show?: boolean;
  // Calls when the Promise for loading data is fullfilled.
  onLoad?: (CzmlDataSouce: Cesium.CzmlDataSource) => void;
}

export interface CzmlDataSourceContext {
  dataSourceCollection?: Cesium.DataSourceCollection;
}

const cesiumProps: (keyof CzmlDataSourceCesiumProps)[] = ["clustering"];

const cesiumReadonlyProps: (keyof CzmlDataSourceCesiumReadonlyProps)[] = ["name"];

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
  credit,
}: {
  element: Cesium.CzmlDataSource;
  dataSources: Cesium.DataSourceCollection;
  data: Cesium.Resource | string | object;
  onLoad?: (CzmlDataSource: Cesium.CzmlDataSource) => void;
  sourceUri?: string;
  credit?: Cesium.Credit | string;
}) => {
  element
    .load(data, {
      sourceUri,
      credit,
    } as any)
    .then(value => {
      if (onLoad) {
        onLoad(value);
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
    const ds = new CesiumCzmlDataSource(props.name);
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
          credit: props.credit,
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
      (prevProps.data !== props.data ||
        prevProps.sourceUri !== props.sourceUri ||
        prevProps.credit !== props.credit)
    ) {
      load({
        element,
        dataSources: context.dataSourceCollection,
        data: props.data,
        onLoad: props.onLoad,
        sourceUri: props.sourceUri,
        credit: props.credit,
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
