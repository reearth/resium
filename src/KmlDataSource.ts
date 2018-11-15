import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface KmlDataSourceCesiumProps {
  clustering?: Cesium.EntityCluster;
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
  onReferesh?: (kmlDataSource: Cesium.KmlDataSource, urlComponent: string) => void;
  onUnsupportedNode?: (kmlDataSource: Cesium.KmlDataSource) => void;
}

export interface KmlDataSourceProps
  extends KmlDataSourceCesiumProps,
    KmlDataSourceCesiumReadonlyProps,
    KmlDataSourceCesiumEvents {
  data?: Cesium.Resource | string | Document | Blob;
  clampToGround?: boolean;
  ellipsoid?: Cesium.Ellipsoid;
  sourceUri?: string;
  show?: boolean;
  onLoad?: (kmlDataSouce: Cesium.KmlDataSource) => void;
}

export interface KmlDataSourceContext {
  dataSourceCollection: Cesium.DataSourceCollection;
  scene: Cesium.Scene;
}

const cesiumProps: Array<keyof KmlDataSourceCesiumProps> = ["clustering"];

const cesiumReadonlyProps: Array<keyof KmlDataSourceCesiumReadonlyProps> = [
  "camera",
  "canvas",
  "ellipsoid",
];

const cesiumEventProps: EventkeyMap<Cesium.KmlDataSource, keyof KmlDataSourceCesiumEvents> = {
  changedEvent: "onChange",
  errorEvent: "onError",
  loadingEvent: "onLoading",
  refreshEvent: "onReferesh",
  unsupportedNodeEvent: "onUnsupportedNode",
};

const load = ({
  element,
  data,
  onLoad,
  clampToGround,
  ellipsoid,
  sourceUri,
}: {
  element: Cesium.KmlDataSource;
  dataSources: Cesium.DataSourceCollection;
  data: Cesium.Resource | string | Document | Blob;
  onLoad?: (kmlDataSource: Cesium.KmlDataSource) => void;
  clampToGround?: boolean;
  ellipsoid?: Cesium.Ellipsoid;
  sourceUri?: string;
}) => {
  element.load(data, { clampToGround, ellipsoid, sourceUri }).then(value => {
    if (onLoad) {
      try {
        onLoad(value);
      } catch (e) {
        throw e;
      }
    }
  });
};

const KmlDataSource = createCesiumComponent<
  Cesium.KmlDataSource,
  KmlDataSourceProps,
  KmlDataSourceContext
>({
  name: "KmlDataSource",
  create(cprops, props, context) {
    const ds = new Cesium.KmlDataSource({
      camera: cprops.camera || context.scene.camera,
      canvas: cprops.canvas || (context.scene.canvas as HTMLCanvasElement),
      ellipsoid: cprops.ellipsoid,
    });
    if (cprops.clustering) {
      ds.clustering = cprops.clustering;
    }
    if (typeof cprops.show === "boolean") {
      ds.show = cprops.show;
    }
    return ds;
  },
  mount(element, context, props) {
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
  },
  update(element, props, prevProps, context) {
    if (prevProps.show !== props.show || !props.data) {
      element.show = !!props.data && (typeof props.show === "boolean" ? props.show : true);
    }
    if (
      props.data &&
      (prevProps.data !== props.data ||
        prevProps.clampToGround !== props.clampToGround ||
        prevProps.ellipsoid !== props.ellipsoid ||
        prevProps.sourceUri !== props.sourceUri)
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
  unmount(element, context) {
    context.dataSourceCollection.remove(element);
  },
  cesiumProps,
  cesiumReadonlyProps,
  cesiumEventProps,
});

export default KmlDataSource;
