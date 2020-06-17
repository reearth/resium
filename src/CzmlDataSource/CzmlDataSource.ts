import {
  CzmlDataSource as CesiumCzmlDataSource,
  EntityCluster,
  Resource,
  Credit,
  DataSourceCollection,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core";

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
  clustering?: EntityCluster;
}

export interface CzmlDataSourceCesiumReadonlyProps {
  name?: string;
}

export interface CzmlDataSourceCesiumEvents {
  onChange?: (CzmlDataSource: CesiumCzmlDataSource) => void;
  onError?: (CzmlDataSource: CesiumCzmlDataSource, error: any) => void;
  onLoading?: (CzmlDataSource: CesiumCzmlDataSource, isLoaded: boolean) => void;
}

export interface CzmlDataSourceProps
  extends CzmlDataSourceCesiumProps,
    CzmlDataSourceCesiumReadonlyProps,
    CzmlDataSourceCesiumEvents {
  // @CesiumReadonlyProp
  data?: Resource | string | any;
  // @CesiumReadonlyProp
  sourceUri?: string;
  // @CesiumReadonlyProp
  credit?: Credit | string;
  // @CesiumProp
  show?: boolean;
  // Calls when the Promise for loading data is fullfilled.
  onLoad?: (CzmlDataSouce: CesiumCzmlDataSource) => void;
}

const cesiumProps: (keyof CzmlDataSourceCesiumProps)[] = ["clustering"];

const cesiumReadonlyProps: (keyof CzmlDataSourceCesiumReadonlyProps)[] = ["name"];

const cesiumEventProps: EventkeyMap<CesiumCzmlDataSource, CzmlDataSourceCesiumEvents> = {
  onChange: "changedEvent",
  onError: "errorEvent",
  onLoading: "loadingEvent",
};

const load = ({
  element,
  data,
  onLoad,
  sourceUri,
  credit,
}: {
  element: CesiumCzmlDataSource;
  dataSources: DataSourceCollection;
  data: Resource | string | any;
  onLoad?: (CzmlDataSource: CesiumCzmlDataSource) => void;
  sourceUri?: string;
  credit?: Credit | string;
}) => {
  element
    .load(data, {
      sourceUri,
      credit,
    })
    .then(value => {
      if (onLoad) {
        onLoad(value);
      }
    });
};

const CzmlDataSource = createCesiumComponent<CesiumCzmlDataSource, CzmlDataSourceProps>({
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
