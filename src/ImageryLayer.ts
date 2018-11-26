import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";

export interface ImageryLayerCesiumProps {
  alpha?:
    | ((
        frameState: any /* Cesium.FrameState */,
        layer: Cesium.ImageryLayer,
        x: number,
        y: number,
        level: number,
      ) => number)
    | number;
  brightness?:
    | ((
        frameState: any /* Cesium.FrameState */,
        layer: Cesium.ImageryLayer,
        x: number,
        y: number,
        level: number,
      ) => number)
    | number;
  contrast?:
    | ((
        frameState: any /* Cesium.FrameState */,
        layer: Cesium.ImageryLayer,
        x: number,
        y: number,
        level: number,
      ) => number)
    | number;
  hue?:
    | ((
        frameState: any /* Cesium.FrameState */,
        layer: Cesium.ImageryLayer,
        x: number,
        y: number,
        level: number,
      ) => number)
    | number;
  saturation?:
    | ((
        frameState: any /* Cesium.FrameState */,
        layer: Cesium.ImageryLayer,
        x: number,
        y: number,
        level: number,
      ) => number)
    | number;
  gamma?:
    | ((
        frameState: any /* Cesium.FrameState */,
        layer: Cesium.ImageryLayer,
        x: number,
        y: number,
        level: number,
      ) => number)
    | number;
  splitDirection?:
    | ((
        frameState: any /* Cesium.FrameState */,
        layer: Cesium.ImageryLayer,
        x: number,
        y: number,
        level: number,
      ) => any)
    | any /* Cesium.SplitDirection */;
  minificationFilter?: any /* Cesium.TextureMinificationFilter */;
  magnificationFilter?: any /* Cesium.TextureMagnificationFilter */;
  cutoutRectangle?: Cesium.Rectangle;
  show?: boolean;
}

export interface ImageryLayerCesiumReadonlyProps {
  imageryProvider: Cesium.ImageryProvider;
  rectangle?: Cesium.Rectangle;
  maximumAnisotropy?: number;
  minimumTerrainLevel?: number;
  maximumTerrainLevel?: number;
}

export interface ImageryLayerProps
  extends ImageryLayerCesiumProps,
    ImageryLayerCesiumReadonlyProps {}

export interface ImageryLayerContext {
  imageryLayerCollection?: Cesium.ImageryLayerCollection;
}

const cesiumProps: Array<keyof ImageryLayerCesiumProps> = [
  "alpha",
  "brightness",
  "contrast",
  "hue",
  "saturation",
  "gamma",
  "splitDirection",
  "minificationFilter",
  "magnificationFilter",
  "cutoutRectangle",
  "show",
];

const cesiumReadonlyProps: Array<keyof ImageryLayerCesiumReadonlyProps> = [
  "imageryProvider",
  "rectangle",
  "maximumAnisotropy",
  "minimumTerrainLevel",
  "maximumTerrainLevel",
];

const ImageryLayer = createCesiumComponent<
  Cesium.ImageryLayer,
  ImageryLayerProps,
  ImageryLayerContext
>({
  name: "ImageryLayer",
  create(cprops) {
    return new Cesium.ImageryLayer(
      cprops.imageryProvider,
      {
        rectangle: cprops.rectangle,
        alpha: cprops.alpha,
        brightness: cprops.brightness,
        contrast: cprops.contrast,
        hue: cprops.hue,
        saturation: cprops.saturation,
        gamma: cprops.gamma,
        splitDirection: cprops.splitDirection,
        minificationFilter: cprops.minificationFilter,
        magnificationFilter: cprops.magnificationFilter,
        show: cprops.show,
        maximumAnisotropy: cprops.maximumAnisotropy,
        minimumTerrainLevel: cprops.minimumTerrainLevel,
        maximumTerrainLevel: cprops.maximumTerrainLevel,
        cutoutRectangle: cprops.cutoutRectangle,
      } as any /* workaround for splitDirection */,
    );
  },
  mount(element, context) {
    if (context.imageryLayerCollection) {
      context.imageryLayerCollection.add(element);
    }
  },
  unmount(element, context) {
    if (context.imageryLayerCollection) {
      context.imageryLayerCollection.remove(element);
    }
  },
  cesiumProps,
  cesiumReadonlyProps,
});

export default ImageryLayer;
