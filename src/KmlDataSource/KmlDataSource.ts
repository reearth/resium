import {
  KmlDataSource as CesiumKmlDataSource,
  Ellipsoid,
  DataSourceCollection,
  Resource,
} from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
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

export type KmlDataSourceCesiumProps = PickCesiumProps<CesiumKmlDataSource, typeof cesiumProps>;

export type KmlDataSourceCesiumReadonlyProps = PickCesiumProps<
  CesiumKmlDataSource & CesiumKmlDataSource.LoadOptions,
  typeof cesiumReadonlyProps
> & {
  data: string | Resource | Document | Blob;
};

export type KmlDataSourceCesiumEvents = {
  onChange?: (kmlDataSource: CesiumKmlDataSource) => void;
  onError?: (kmlDataSource: CesiumKmlDataSource, error: any) => void;
  onLoading?: (kmlDataSource: CesiumKmlDataSource, isLoaded: boolean) => void;
  onRefresh?: (kmlDataSource: CesiumKmlDataSource, urlComponent: string) => void;
  onUnsupportedNode?: (kmlDataSource: CesiumKmlDataSource) => void;
};

export type KmlDataSourceProps = KmlDataSourceCesiumProps &
  KmlDataSourceCesiumReadonlyProps &
  KmlDataSourceCesiumEvents & {
    // Calls when the Promise for loading data is fullfilled.
    onLoad?: (kmlDataSouce: CesiumKmlDataSource) => void;
  };

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

const cesiumEventProps: EventkeyMap<CesiumKmlDataSource, KmlDataSourceCesiumEvents> = {
  onChange: "changedEvent",
  onError: "errorEvent",
  onLoading: "loadingEvent",
  onRefresh: "refreshEvent",
  onUnsupportedNode: "unsupportedNodeEvent",
};

const load = ({
  element,
  data,
  onLoad,
  clampToGround,
  ellipsoid,
  sourceUri,
}: {
  element: CesiumKmlDataSource;
  dataSources: DataSourceCollection;
  data: Resource | string | Document | Blob;
  onLoad?: (kmlDataSource: CesiumKmlDataSource) => void;
  clampToGround?: boolean;
  ellipsoid?: Ellipsoid;
  sourceUri?: string;
}) => {
  element.load(data, { clampToGround, ellipsoid, sourceUri }).then(value => {
    if (onLoad) {
      onLoad(value);
    }
  });
};

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumKmlDataSource | CesiumKmlDataSource.LoadOptions,
  | typeof cesiumProps
  | typeof cesiumReadonlyProps
  | typeof cesiumEventProps[keyof typeof cesiumEventProps]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

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
      load({
        element,
        dataSources: context.dataSourceCollection,
        data: props.data,
        onLoad: props.onLoad,
        clampToGround: props.clampToGround,
        ellipsoid: props.ellipsoid,
        sourceUri: props.sourceUri,
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
        prevProps.ellipsoid !== props.ellipsoid ||
        prevProps.sourceUri !== props.sourceUri ||
        prevProps.credit !== prevProps.credit)
    ) {
      load({
        element,
        dataSources: context.dataSourceCollection,
        data: props.data,
        onLoad: props.onLoad,
        clampToGround: props.clampToGround,
        ellipsoid: props.ellipsoid,
        sourceUri: props.sourceUri,
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

export default KmlDataSource;
