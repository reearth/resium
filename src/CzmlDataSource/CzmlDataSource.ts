import { CzmlDataSource as CesiumCzmlDataSource } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

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

const cesiumProps: (keyof CzmlDataSourceCesiumProps)[] = ["clustering"];

const cesiumReadonlyProps: (keyof CzmlDataSourceCesiumReadonlyProps)[] = ["name"];

const cesiumEventProps: EventkeyMap<Cesium.CzmlDataSource, CzmlDataSourceCesiumEvents> = {
  onChange: "changedEvent",
  onError: "ErrorEvent" as any,
  onLoading: "loadingEvent",
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
    } as any) // WORKAROUND: credit field is missing
    .then(value => {
      if (onLoad) {
        onLoad(value);
      }
    });
};

const CzmlDataSource = createCesiumComponent<
  Cesium.CzmlDataSource,
  CzmlDataSourceProps,
  {
    dataSourceCollection?: Cesium.DataSourceCollection;
  }
>({
  name: "CzmlDataSource",
  create(context, props) {
    if (!context.dataSourceCollection) return;
    const element = new CesiumCzmlDataSource(props.name);
    if (props.clustering) {
      element.clustering = props.clustering;
    }
    if (typeof props.show === "boolean") {
      element.show = props.show;
    }
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
    return element;
  },
  update(element, props, prevProps, context) {
    if (!props.data) {
      element.show = false;
    } else if (prevProps.show !== props.show) {
      element.show = typeof props.show === "boolean" ? props.show : true;
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
  destroy(element, context) {
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
