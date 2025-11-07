import { KmlDataSource as CesiumKmlDataSource } from "cesium";

import {
  createCesiumComponent,
  PickCesiumProps,
  Merge,
  MethodOptions2,
  EventProps,
  EventTarget,
} from "../core";

export type { EventTarget } from "../core";

/*
@summary
`KmlDataSource` provides the way to load and show KML data into the scene.
Both KML and KMZ are supported, and can be loaded from a URL, string or raw object.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

export type Target = Merge<
  Merge<CesiumKmlDataSource, CesiumKmlDataSource.LoadOptions>,
  MethodOptions2<typeof CesiumKmlDataSource, "load">
>;

export type KmlDataSourceCesiumProps = PickCesiumProps<CesiumKmlDataSource, typeof cesiumProps>;

export type KmlDataSourceCesiumReadonlyProps = PickCesiumProps<Target, typeof cesiumReadonlyProps>;

export type KmlDataSourceCesiumEvents = {
  onChange?: (kmlDataSource: CesiumKmlDataSource) => void;
  onError?: (kmlDataSource: CesiumKmlDataSource, error: any) => void;
  onLoading?: (kmlDataSource: CesiumKmlDataSource, isLoaded: boolean) => void;
  onRefresh?: (kmlDataSource: CesiumKmlDataSource, urlComponent: string) => void;
  onUnsupportedNode?: (kmlDataSource: CesiumKmlDataSource) => void;
};

export type KmlDataSourceOtherProps = EventProps<EventTarget> & {
  /** Calls when the Promise for loading data is fullfilled. */
  onLoad?: (kmlDataSouce: CesiumKmlDataSource) => void;
  data?: Parameters<InstanceType<typeof CesiumKmlDataSource>["load"]>[0];
};

export type KmlDataSourceProps = KmlDataSourceCesiumProps &
  KmlDataSourceCesiumReadonlyProps &
  KmlDataSourceCesiumEvents &
  KmlDataSourceOtherProps;

const cesiumProps = ["clustering", "name", "show"] as const;

const cesiumReadonlyProps = [
  "canvas",
  "camera",
  "ellipsoid",
  "clampToGround",
  "sourceUri",
  "credit",
  "screenOverlayContainer",
] as const;

export const cesiumEventProps = {
  onChange: "changedEvent",
  onError: "errorEvent",
  onLoading: "loadingEvent",
  onRefresh: "refreshEvent",
  onUnsupportedNode: "unsupportedNodeEvent",
} as const;

export const otherProps = ["onLoad", "data"] as const;

const load = (element: CesiumKmlDataSource, { data, onLoad, ...options }: KmlDataSourceProps) => {
  if (!data) return;
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
        prevProps.credit !== props.credit)
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
  otherProps,
  useCommonEvent: true,
});

export default KmlDataSource;
