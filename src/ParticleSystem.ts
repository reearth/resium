import Cesium from "cesium";
import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";
import { any } from "prop-types";

export interface ParticleSystemCesiumProps {
  show?: boolean;
  emitter?: any; // Cesium.ParticleEmitter;
  modelMatrix?: Cesium.Matrix4;
  emitterModelMatrix?: Cesium.Matrix4;
  emissionRate?: number;
  bursts?: any[]; // Cesium.ParticleBurst[];
  loop?: boolean;
  scale?: number;
  startScale?: number;
  endScale?: number;
  color?: Cesium.Color;
  startColor?: Cesium.Color;
  endColor?: Cesium.Color;
  image?: string | ImageData | HTMLImageElement | HTMLCanvasElement;
  imageSize?: Cesium.Cartesian2;
  minimumImageSize?: Cesium.Cartesian2;
  maximumImageSize?: Cesium.Cartesian2;
  speed?: number;
  minimumSpeed?: number;
  maximumSpeed?: number;
  lifetime?: number;
  particleLife?: number;
  minimumParticleLife?: number;
  maximumParticleLife?: number;
  mass?: number;
  minimumMass?: number;
  maximumMass?: number;
}

export interface ParticleSystemProps extends ParticleSystemCesiumProps {
  onComplete?: () => void;
  onUpdate?: (particle: any /* Cesium.Particle */, dt: number) => void;
}

export interface ParticleSystemContext {
  primitiveCollection: Cesium.PrimitiveCollection;
}

const cesiumProps: Array<keyof ParticleSystemCesiumProps> = [
  "show",
  "emitter",
  "modelMatrix",
  "emitterModelMatrix",
  "emissionRate",
  "bursts",
  "loop",
  "scale",
  "startScale",
  "endScale",
  "color",
  "startColor",
  "endColor",
  "image",
  "imageSize",
  "minimumImageSize",
  "maximumImageSize",
  "speed",
  "minimumSpeed",
  "maximumSpeed",
  "lifetime",
  "particleLife",
  "minimumParticleLife",
  "maximumParticleLife",
  "mass",
  "minimumMass",
  "maximumMass",
];

const cesiumEventProps: EventkeyMap<any, keyof ParticleSystemProps> = {
  complete: "onComplete",
};

const ParticleSystem = createCesiumComponent<
  any,
  ParticleSystemProps,
  ParticleSystemContext /* Cesium.ParticleSystem */
>({
  name: "ParticleSystem",
  create(cprops, props) {
    return new (Cesium as any).ParticleSystem({ ...cprops, updateCallback: props.onUpdate });
  },
  update(element, props, prevProps) {
    if (props.onUpdate !== prevProps.onUpdate) {
      element.updateCallback = props.onUpdate;
    }
  },
  mount(element, context) {
    context.primitiveCollection.add(element);
  },
  unmount(element, context) {
    if (!context.primitiveCollection.isDestroyed) {
      context.primitiveCollection.remove(element);
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default ParticleSystem;
