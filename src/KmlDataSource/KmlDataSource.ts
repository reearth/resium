import { KmlDataSource as CesiumKmlDataSource } from "cesium";

import {
  createCesiumComponent,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
  Merge,
  ValueOf,
} from "../core";

/*
@summary
`KmlDataSource` provides the way to load and show KML data into the scene.
Both KML and KMZ are supported, and can be loaded from a URL, string or raw object.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

type Target = Merge<
  Merge<CesiumKmlDataSource, CesiumKmlDataSource.LoadOptions>,
  NonNullable<Parameters<InstanceType<typeof CesiumKmlDataSource>["load"]>[1]>
>;

export type KmlDataSourceCesiumProps = PickCesiumProps<CesiumKmlDataSource, typeof cesiumProps>;

export type KmlDataSourceCesiumReadonlyProps = PickCesiumProps<
  Target,
  typeof cesiumReadonlyProps
> & {
  data: Parameters<InstanceType<typeof CesiumKmlDataSource>["load"]>[0];
};

export type KmlDataSourceCesiumEvents = {
  onChange?: (kmlDataSource: CesiumKmlDataSource) => void;
  onError?: (kmlDataSource: CesiumKmlDataSource, error: any) => void;
  onLoading?: (kmlDataSource: CesiumKmlDataSource, isLoaded: boolean) => void;
  onRefresh?: (kmlDataSource: CesiumKmlDataSource, urlComponent: string) => void;
  onUnsupportedNode?: (kmlDataSource: CesiumKmlDataSource) => void;
};

export type KmlDataSourceOtherProps = {
  /** Calls when the Promise for loading data is fullfilled. */
  onLoad?: (kmlDataSouce: CesiumKmlDataSource) => void;
};

export type KmlDataSourceProps = KmlDataSourceCesiumProps &
  KmlDataSourceCesiumReadonlyProps &
  KmlDataSourceCesiumEvents &
  KmlDataSourceOtherProps;

const cesiumProps = ["clustering", "name", "show"] as const;

const cesiumReadonlyProps = [
  "data",
  "canvas",
  "camera",
  "ellipsoid",
  "clampToGround",
  "sourceUri",
  "credit",
] as const;

const cesiumEventProps = {
  onChange: "changedEvent",
  onError: "errorEvent",
  onLoading: "loadingEvent",
  onRefresh: "refreshEvent",
  onUnsupportedNode: "unsupportedNodeEvent",
} as const;

const load = (element: CesiumKmlDataSource, { data, onLoad, ...options }: KmlDataSourceProps) => {
  element.load(data, options).then(value => {
    if (onLoad) {
      onLoad(value);
    }
  });
};

const KmlDataSource = createCesiumComponent<CesiumKmlDataSource, KmlDataSourceProps>({
  name: "KmlDataSource",
  create(context, props) {
    if (!context.scene || !context.dataSourceCollection || !context.scene) return;
    const element = new CesiumKmlDataSource({
      camera: props.camera || context.scene.camera,
      canvas: props.canvas || context.scene.canvas,
      ellipsoid: props.ellipsoid,
      credit: props.credit,
    });
    if (props.clustering) {
      element.clustering = props.clustering;
    }
    if (typeof props.show === "boolean") {
      element.show = props.show;
    }
    if (typeof props.name !== "undefined") {
      element.name = props.name;
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
        prevProps.ellipsoid !== props.ellipsoid ||
        prevProps.sourceUri !== props.sourceUri ||
        prevProps.credit !== prevProps.credit)
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

export default KmlDataSource;

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<Target, typeof cesiumProps | ValueOf<typeof cesiumEventProps>>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;
