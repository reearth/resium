import Cesium from "cesium";
import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

/*
@summary
`ParticleSystem` is 3D particles.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A ParticleSystem object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export interface ParticleSystemCesiumProps {
  show?: boolean;
  // @type Cesium.ParticleEmitter
  emitter?: any;
  modelMatrix?: Cesium.Matrix4;
  emitterModelMatrix?: Cesium.Matrix4;
  emissionRate?: number;
  // @type Cesium.ParticleBurst[]
  bursts?: any[];
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

export interface ParticleSystemCesiumEvents {
  onComplete?: () => void;
}

export interface ParticleSystemProps extends ParticleSystemCesiumProps, ParticleSystemCesiumEvents {
  // @CesiumEvent
  // Correspond to [ParticleSystem#updateCallback](https://cesiumjs.org/Cesium/Build/Documentation/ParticleSystem.html#updateCallback)
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

const cesiumEventProps: EventkeyMap<any, keyof ParticleSystemCesiumEvents> = {
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
