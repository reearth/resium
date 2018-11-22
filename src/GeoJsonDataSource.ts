import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface GeoJsonDataSourceCesiumProps {
  clustering?: Cesium.EntityCluster;
  name?: string;
}

export interface GeoJsonDataSourceCesiumEvents {
  onChange?: (GeoJsonDataSource: Cesium.GeoJsonDataSource) => void;
  onError?: (GeoJsonDataSource: Cesium.GeoJsonDataSource, error: any) => void;
  onLoading?: (GeoJsonDataSource: Cesium.GeoJsonDataSource, isLoaded: boolean) => void;
}

export interface GeoJsonDataSourceProps
  extends GeoJsonDataSourceCesiumProps,
    GeoJsonDataSourceCesiumEvents {
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

const cesiumProps: Array<keyof GeoJsonDataSourceCesiumProps> = ["clustering", "name"];

const cesiumEventProps: EventkeyMap<
  Cesium.GeoJsonDataSource,
  keyof GeoJsonDataSourceCesiumEvents
> = {
  changedEvent: "onChange",
  errorEvent: "onError",
  loadingEvent: "onLoading",
};

const load = ({
  element,
  data,
  onLoad,
  clampToGround,
  sourceUri,
  markerSize,
  markerSymbol,
  markerColor,
  stroke,
  strokeWidth,
  fill,
}: {
  element: Cesium.GeoJsonDataSource;
  dataSources: Cesium.DataSourceCollection;
  data: Cesium.Resource | string | object;
  onLoad?: (GeoJsonDataSource: Cesium.GeoJsonDataSource) => void;
  clampToGround?: boolean;
  sourceUri?: string;
  markerSize?: number;
  markerSymbol?: string;
  markerColor?: Cesium.Color;
  stroke?: Cesium.Color;
  strokeWidth?: number;
  fill?: Cesium.Color;
}) => {
  element
    .load(data, {
      clampToGround,
      markerSize,
      markerSymbol,
      markerColor,
      stroke,
      strokeWidth,
      fill,
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

const GeoJsonDataSource = createCesiumComponent<
  Cesium.GeoJsonDataSource,
  GeoJsonDataSourceProps,
  GeoJsonDataSourceContext
>({
  name: "GeoJsonDataSource",
  create(cprops, props, context) {
    const ds = new Cesium.GeoJsonDataSource(props.name);
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
          clampToGround: props.clampToGround,
          sourceUri: props.sourceUri,
          markerSize: props.markerSize,
          markerSymbol: props.markerSymbol,
          markerColor: props.markerColor,
          stroke: props.stroke,
          strokeWidth: props.strokeWidth,
          fill: props.fill,
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
        prevProps.clampToGround !== props.clampToGround ||
        prevProps.sourceUri !== props.sourceUri ||
        prevProps.markerSize !== props.markerSize ||
        prevProps.markerSymbol !== props.markerSymbol ||
        prevProps.markerColor !== props.markerColor ||
        prevProps.stroke !== props.stroke ||
        prevProps.strokeWidth !== props.strokeWidth ||
        prevProps.fill !== props.fill)
    ) {
      load({
        element,
        dataSources: context.dataSourceCollection,
        data: props.data,
        onLoad: props.onLoad,
        clampToGround: props.clampToGround,
        sourceUri: props.sourceUri,
        markerSize: props.markerSize,
        markerSymbol: props.markerSymbol,
        markerColor: props.markerColor,
        stroke: props.stroke,
        strokeWidth: props.strokeWidth,
        fill: props.fill,
      });
    }
  },
  unmount(element, context) {
    if (context.dataSourceCollection && !context.dataSourceCollection.isDestroyed()) {
      context.dataSourceCollection.remove(element);
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default GeoJsonDataSource;
