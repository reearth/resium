import {
  GeoJsonDataSource as CesiumGeoJsonDataSource,
  DataSourceCollection,
  EntityCluster,
  Resource,
  Credit,
  Color,
  Property,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core";

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
  clustering?: EntityCluster;
  name?: string;
}

export interface GeoJsonDataSourceCesiumEvents {
  onChange?: (GeoJsonDataSource: CesiumGeoJsonDataSource) => void;
  onError?: (GeoJsonDataSource: CesiumGeoJsonDataSource, error: any) => void;
  onLoading?: (GeoJsonDataSource: CesiumGeoJsonDataSource, isLoaded: boolean) => void;
}

export interface GeoJsonDataSourceProps
  extends GeoJsonDataSourceCesiumProps,
    GeoJsonDataSourceCesiumEvents {
  // @CesiumReadonlyProp
  data?: Resource | string | any;
  // @CesiumReadonlyProp
  clampToGround?: boolean;
  // @CesiumReadonlyProp
  sourceUri?: string;
  // @CesiumReadonlyProp
  credit?: Credit | string;
  // @CesiumProp
  show?: boolean;
  // @CesiumReadonlyProp
  markerSize?: number;
  // @CesiumReadonlyProp
  markerSymbol?: string;
  // @CesiumReadonlyProp
  markerColor?: Color;
  // @CesiumReadonlyProp
  stroke?: Color;
  // @CesiumReadonlyProp
  strokeWidth?: number;
  // @CesiumReadonlyProp
  fill?: Color;
  // @CesiumReadonlyProp
  describe?: (properties: { [key: string]: any }, nameProperty: string) => Property | string;
  // Calls when the Promise for loading data is fullfilled.
  onLoad?: (GeoJsonDataSouce: CesiumGeoJsonDataSource) => void;
}

const cesiumProps: (keyof GeoJsonDataSourceCesiumProps)[] = ["clustering", "name"];

const cesiumEventProps: EventkeyMap<CesiumGeoJsonDataSource, GeoJsonDataSourceCesiumEvents> = {
  onChange: "changedEvent",
  onError: "errorEvent",
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
  element: CesiumGeoJsonDataSource;
  dataSources: DataSourceCollection;
  data: Resource | string | any;
  onLoad?: (GeoJsonDataSource: CesiumGeoJsonDataSource) => void;
  clampToGround?: boolean;
  sourceUri?: string;
  credit?: Credit | string;
  markerSize?: number;
  markerSymbol?: string;
  markerColor?: Color;
  stroke?: Color;
  strokeWidth?: number;
  fill?: Color;
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
      describe,
      credit,
    })
    .then(value => {
      if (onLoad) {
        onLoad(value);
      }
    });
};

const GeoJsonDataSource = createCesiumComponent<CesiumGeoJsonDataSource, GeoJsonDataSourceProps>({
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
