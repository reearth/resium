import type { Credit, Matrix3 } from "cesium";
import { CubeMapPanorama as CesiumCubeMapPanorama } from "cesium";

import { createCesiumComponent, PickCesiumProps } from "../core";

/*
@summary
`CubeMapPanorama` displays imagery in cube map format as a panorama in the scene.
This is only supported in 3D. It is added to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

export type CubeMapPanoramaCesiumProps = PickCesiumProps<
  CesiumCubeMapPanorama,
  typeof cesiumProps
>;

// Cesium types ConstructorOptions as {} for this class, so we define constructor props manually
export type CubeMapPanoramaConstructorProps = {
  /** A 3x3 rotation matrix that defines the panorama's orientation (use Matrix4.getMatrix3 to extract from a localFrameToFixedFrame transform). */
  transform?: Matrix3;
  /** A credit for the panorama, which is displayed on the canvas. */
  credit?: Credit | string;
};

export type CubeMapPanoramaProps = CubeMapPanoramaCesiumProps & CubeMapPanoramaConstructorProps;

const cesiumProps = ["show", "sources"] as const;

const cesiumReadonlyProps = ["transform", "credit"] as const;

const CubeMapPanorama = createCesiumComponent<CesiumCubeMapPanorama, CubeMapPanoramaProps>({
  name: "CubeMapPanorama",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumCubeMapPanorama({
      sources: props.sources,
      show: props.show,
      transform: props.transform,
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

export default CubeMapPanorama;
