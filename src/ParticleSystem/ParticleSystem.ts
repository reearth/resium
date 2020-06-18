import { ParticleSystem as CesiumParticleSystem, Matrix4, Color, Cartesian2 } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

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
  // @type ParticleEmitter
  emitter?: any;
  modelMatrix?: Matrix4;
  emitterModelMatrix?: Matrix4;
  emissionRate?: number;
  // @type ParticleBurst[]
  bursts?: any[];
  loop?: boolean;
  scale?: number;
  startScale?: number;
  endScale?: number;
  color?: Color;
  startColor?: Color;
  endColor?: Color;
  image?: string | ImageData | HTMLImageElement | HTMLCanvasElement;
  imageSize?: Cartesian2;
  minimumImageSize?: Cartesian2;
  maximumImageSize?: Cartesian2;
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
  onUpdate?: CesiumParticleSystem.updateCallback;
}

const cesiumProps: (keyof ParticleSystemCesiumProps)[] = [
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

// ParticleSystem
const cesiumEventProps: EventkeyMap<any, ParticleSystemCesiumEvents> = {
  onComplete: "complete",
};

const ParticleSystem = createCesiumComponent<CesiumParticleSystem, ParticleSystemProps>({
  name: "ParticleSystem",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumParticleSystem({ ...props, updateCallback: props.onUpdate });
    context.primitiveCollection.add(element);
    return element;
  },
  update(element, props, prevProps) {
    if (props.onUpdate !== prevProps.onUpdate) {
      (element.updateCallback as any) = props.onUpdate; // WORKAROUND: updateCallback
    }
  },
  destroy(element, context) {
    if (context.primitiveCollection && !context.primitiveCollection.isDestroyed) {
      context.primitiveCollection.remove(element);
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default ParticleSystem;
