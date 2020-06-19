import { GeoJsonDataSource as CesiumGeoJsonDataSource } from "cesium";

import {
  createCesiumComponent,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
  Merge,
  ValueOf,
  MethodOptions2,
} from "../core";

/*
@summary
`GeoJsonDataSource` provides the way to load and show GeoJSON data into the scene.
Both GeoJSON and TopoJSON are supported, and can be loaded from a URL, string or raw object.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

type Target = Merge<
  Merge<CesiumGeoJsonDataSource, CesiumGeoJsonDataSource.LoadOptions>,
  MethodOptions2<typeof CesiumGeoJsonDataSource, "load">
>;

export type GeoJsonDataSourceCesiumProps = PickCesiumProps<
  CesiumGeoJsonDataSource,
  typeof cesiumProps
>;

export type GeoJsonDataSourceCesiumReadonlyProps = PickCesiumProps<
  Target,
  typeof cesiumReadonlyProps
> & {
  data: Parameters<InstanceType<typeof CesiumGeoJsonDataSource>["load"]>[0];
};

export type GeoJsonDataSourceCesiumEvents = {
  onChange?: (GeoJsonDataSource: CesiumGeoJsonDataSource) => void;
  onError?: (GeoJsonDataSource: CesiumGeoJsonDataSource, error: any) => void;
  onLoading?: (GeoJsonDataSource: CesiumGeoJsonDataSource, isLoaded: boolean) => void;
};

export type GeoJsonDataSourceOtherProps = {
  /** Calls when the Promise for loading data is fullfilled. */
  onLoad?: (GeoJsonDataSouce: CesiumGeoJsonDataSource) => void;
};

export type GeoJsonDataSourceProps = GeoJsonDataSourceCesiumProps &
  GeoJsonDataSourceCesiumReadonlyProps &
  GeoJsonDataSourceCesiumEvents &
  GeoJsonDataSourceOtherProps;

const cesiumProps = ["clustering", "name", "show"] as const;

const cesiumReadonlyProps = [
  "data",
  "clampToGround",
  "sourceUri",
  "credit",
  "markerSize",
  "markerSymbol",
  "markerColor",
  "stroke",
  "strokeWidth",
  "fill",
  "describe",
] as const;

const cesiumEventProps = {
  onChange: "changedEvent",
  onError: "errorEvent",
  onLoading: "loadingEvent",
} as const;

const load = (
  element: CesiumGeoJsonDataSource,
  { data, onLoad, ...options }: GeoJsonDataSourceProps,
) => {
  element.load(data, options).then(value => {
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
      load(element, props);
    }
    return element;
  },
  update(element, props, prevProps) {
    if (!props.data) {
      element.show = false;
    } else if (prevProps.show !== props.show) {
      element.show = typeof props.show === "boolean" ? props.show : true;
    }
    if (
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
      load(element, props);
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

export default GeoJsonDataSource;

// Unused prop check
type IgnoredProps = "entities" | "clock" | "isLoading";
type UnusedProps = UnusedCesiumProps<
  Target,
  keyof GeoJsonDataSourceProps | ValueOf<typeof cesiumEventProps>
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;
