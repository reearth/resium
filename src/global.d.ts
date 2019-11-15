declare namespace Cesium {
  export const Cesium3DTileStyle: any;
  export const GroundPrimitive: any;
  export const ImageryLayer: any;
  export const IonResource: any;
  export const ParticleSystem: any;
  export const PlaneGraphics: any;
  export const PostProcessStageComposite: any;
  export const PostProcessStageLibrary: any;
  export const SphereEmitter: any;
  export const TimeDynamicPointCloud: any;
}

declare module "*.glb" {
  const src: string;
  export default src;
}

declare module "*.pnts" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}
