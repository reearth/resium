import {
  Credit,
  EquirectangularPanorama as CesiumEquirectangularPanorama,
  Matrix4,
} from "cesium";

import { createCesiumComponent, PickCesiumProps } from "../core";

/*
@summary
`EquirectangularPanorama` displays imagery in equirectangular format as a panorama in the scene.
It is added to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

export type EquirectangularPanoramaCesiumProps = PickCesiumProps<
  CesiumEquirectangularPanorama,
  typeof cesiumProps
>;

// Cesium types ConstructorOptions as {} for this class, so we define constructor props manually
export type EquirectangularPanoramaConstructorProps = {
  /** A 4x4 transformation matrix that defines the panorama's position and orientation. */
  transform: Matrix4;
  /** A URL to an image resource, or a preloaded image object. */
  image: string | HTMLImageElement | HTMLCanvasElement | ImageBitmap;
  /** The radius of the panorama in meters. Defaults to 100000.0. */
  radius?: number;
  /** The number of times to repeat the texture horizontally. Defaults to 1.0. */
  repeatHorizontal?: number;
  /** The number of times to repeat the texture vertically. Defaults to 1.0. */
  repeatVertical?: number;
  /** A credit for the panorama, which is displayed on the canvas. */
  credit?: Credit | string;
};

export type EquirectangularPanoramaProps = EquirectangularPanoramaCesiumProps &
  EquirectangularPanoramaConstructorProps;

const cesiumProps = ["show"] as const;

const cesiumReadonlyProps = ["transform", "image", "radius", "repeatHorizontal", "repeatVertical", "credit"] as const;

const EquirectangularPanorama = createCesiumComponent<
  CesiumEquirectangularPanorama,
  EquirectangularPanoramaProps
>({
  name: "EquirectangularPanorama",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumEquirectangularPanorama({
      transform: props.transform,
      image: props.image,
      radius: props.radius,
      repeatHorizontal: props.repeatHorizontal,
      repeatVertical: props.repeatVertical,
      credit: props.credit,
    } as any);
    context.primitiveCollection.add(element);
    return element;
  },
  destroy(element, context) {
    if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
      context.primitiveCollection.remove(element);
    }
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  setCesiumPropsAfterCreate: true,
  cesiumProps,
  cesiumReadonlyProps,
});

export default EquirectangularPanorama;
