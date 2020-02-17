import { KmlDataSource as CesiumKmlDataSource } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

/*
@summary
`KmlDataSource` provides the way to load and show KML data into the scene.
Both KML and KMZ are supported, and can be loaded from a URL, string or raw object.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

export interface KmlDataSourceCesiumProps {
  clustering?: Cesium.EntityCluster;
  name?: string;
}

export interface KmlDataSourceCesiumReadonlyProps {
  camera?: Cesium.Camera;
  canvas?: HTMLCanvasElement;
  ellipsoid?: Cesium.Ellipsoid;
}

export interface KmlDataSourceCesiumEvents {
  onChange?: (kmlDataSource: Cesium.KmlDataSource) => void;
  onError?: (kmlDataSource: Cesium.KmlDataSource, error: any) => void;
  onLoading?: (kmlDataSource: Cesium.KmlDataSource, isLoaded: boolean) => void;
  onRefresh?: (kmlDataSource: Cesium.KmlDataSource, urlComponent: string) => void;
  onUnsupportedNode?: (kmlDataSource: Cesium.KmlDataSource) => void;
}

export interface KmlDataSourceProps
  extends KmlDataSourceCesiumProps,
    KmlDataSourceCesiumReadonlyProps,
    KmlDataSourceCesiumEvents {
  // @CesiumReadonlyProp
  data?: Cesium.Resource | string | Document | Blob;
  // @CesiumReadonlyProp
  clampToGround?: boolean;
  // @CesiumReadonlyProp
  sourceUri?: string;
  // @CesiumReadonlyProp
  credit?: Cesium.Credit | string;
  // @CesiumProp
  show?: boolean;
  // Calls when the Promise for loading data is fullfilled.
  onLoad?: (kmlDataSouce: Cesium.KmlDataSource) => void;
}

const cesiumProps: (keyof KmlDataSourceCesiumProps)[] = ["clustering", "name"];

const cesiumReadonlyProps: (keyof KmlDataSourceCesiumReadonlyProps)[] = [
  "camera",
  "canvas",
  "ellipsoid",
];

const cesiumEventProps: EventkeyMap<Cesium.KmlDataSource, KmlDataSourceCesiumEvents> = {
  onChange: "changedEvent",
  onError: "ErrorEvent" as any,
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
  credit,
}: {
  element: Cesium.KmlDataSource;
  dataSources: Cesium.DataSourceCollection;
  data: Cesium.Resource | string | Document | Blob;
  onLoad?: (kmlDataSource: Cesium.KmlDataSource) => void;
  clampToGround?: boolean;
  ellipsoid?: Cesium.Ellipsoid;
  sourceUri?: string;
  credit?: Cesium.Credit | string;
}) => {
  // WORKAROUND: credit is missing
  element.load(data, { clampToGround, ellipsoid, sourceUri, credit } as any).then(value => {
    if (onLoad) {
      onLoad(value);
    }
  });
};

const KmlDataSource = createCesiumComponent<
  Cesium.KmlDataSource,
  KmlDataSourceProps,
  {
    dataSourceCollection?: Cesium.DataSourceCollection;
    scene?: Cesium.Scene;
  }
>({
  name: "KmlDataSource",
  create(context, props) {
    if (!context.scene || !context.dataSourceCollection) return;
    const element = new CesiumKmlDataSource({
      camera: props.camera || context.scene.camera,
      canvas: props.canvas || (context.scene.canvas as HTMLCanvasElement),
      ellipsoid: props.ellipsoid,
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

export default KmlDataSource;
