import { GeoJsonDataSource as CesiumGeoJsonDataSource } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

/*
@summary
`GeoJsonDataSource` provides the way to load and show GeoJSON data into the scene.
Both GeoJSON and TopoJSON are supported, and can be loaded from a URL, string or raw object.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

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
  // @CesiumReadonlyProp
  data?: Cesium.Resource | string | object;
  // @CesiumReadonlyProp
  clampToGround?: boolean;
  // @CesiumReadonlyProp
  sourceUri?: string;
  // @CesiumReadonlyProp
  credit?: Cesium.Credit | string;
  // @CesiumProp
  show?: boolean;
  // @CesiumReadonlyProp
  markerSize?: number;
  // @CesiumReadonlyProp
  markerSymbol?: string;
  // @CesiumReadonlyProp
  markerColor?: Cesium.Color;
  // @CesiumReadonlyProp
  stroke?: Cesium.Color;
  // @CesiumReadonlyProp
  strokeWidth?: number;
  // @CesiumReadonlyProp
  fill?: Cesium.Color;
  // @CesiumReadonlyProp
  describe?: (properties: { [key: string]: any }, nameProperty: string) => Cesium.Property | string;
  // Calls when the Promise for loading data is fullfilled.
  onLoad?: (GeoJsonDataSouce: Cesium.GeoJsonDataSource) => void;
}

const cesiumProps: (keyof GeoJsonDataSourceCesiumProps)[] = ["clustering", "name"];

const cesiumEventProps: EventkeyMap<Cesium.GeoJsonDataSource, GeoJsonDataSourceCesiumEvents> = {
  onChange: "changedEvent",
  onError: "ErrorEvent" as any,
  onLoading: "loadingEvent",
};

const load = ({
  element,
  data,
  onLoad,
  clampToGround,
  sourceUri,
  credit,
  markerSize,
  markerSymbol,
  markerColor,
  stroke,
  strokeWidth,
  fill,
  describe,
}: {
  element: Cesium.GeoJsonDataSource;
  dataSources: Cesium.DataSourceCollection;
  data: Cesium.Resource | string | object;
  onLoad?: (GeoJsonDataSource: Cesium.GeoJsonDataSource) => void;
  clampToGround?: boolean;
  sourceUri?: string;
  credit?: Cesium.Credit | string;
  markerSize?: number;
  markerSymbol?: string;
  markerColor?: Cesium.Color;
  stroke?: Cesium.Color;
  strokeWidth?: number;
  fill?: Cesium.Color;
  describe?: GeoJsonDataSourceProps["describe"];
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
      describe, // WORKAROUND
      credit,
    } as any)
    .then(value => {
      if (onLoad) {
        onLoad(value);
      }
    });
};

const GeoJsonDataSource = createCesiumComponent<
  Cesium.GeoJsonDataSource,
  GeoJsonDataSourceProps,
  {
    dataSourceCollection?: Cesium.DataSourceCollection;
  }
>({
  name: "GeoJsonDataSource",
  create(context, props) {
    if (!context.dataSourceCollection) return;
    const element = new CesiumGeoJsonDataSource(props.name);
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
        clampToGround: props.clampToGround,
        sourceUri: props.sourceUri,
        markerSize: props.markerSize,
        markerSymbol: props.markerSymbol,
        markerColor: props.markerColor,
        stroke: props.stroke,
        strokeWidth: props.strokeWidth,
        fill: props.fill,
        describe: props.describe,
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
        prevProps.clampToGround !== props.clampToGround ||
        prevProps.sourceUri !== props.sourceUri ||
        prevProps.credit !== props.credit ||
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
        credit: props.credit,
        markerSize: props.markerSize,
        markerSymbol: props.markerSymbol,
        markerColor: props.markerColor,
        stroke: props.stroke,
        strokeWidth: props.strokeWidth,
        fill: props.fill,
        describe: props.describe,
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
  cesiumEventProps,
});

export default GeoJsonDataSource;
