import { ParticleSystem as CesiumParticleSystem } from "cesium";

import { createCesiumComponent, PickCesiumProps, ConstructorOptions, Merge } from "../core";

/*
@summary
`ParticleSystem` is 3D particles.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A ParticleSystem object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export type Target = Merge<CesiumParticleSystem, ConstructorOptions<typeof CesiumParticleSystem>>;

export type ParticleSystemCesiumProps = PickCesiumProps<CesiumParticleSystem, typeof cesiumProps>;

export type ParticleSystemCesiumReadonlyProps = PickCesiumProps<Target, typeof cesiumReadonlyProps>;

export type ParticleSystemCesiumEvents = {
  onComplete?: () => void;
  onUpdate?: CesiumParticleSystem.updateCallback;
};

export type ParticleSystemProps = ParticleSystemCesiumProps &
  ParticleSystemCesiumReadonlyProps &
  ParticleSystemCesiumEvents;

const cesiumProps = [
  "show",
  "emitter",
  "modelMatrix",
  "emitterModelMatrix",
  "emissionRate",
  "bursts",
  "loop",
  "startScale",
  "endScale",
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
  "sizeInMeters",
] as const;

const cesiumReadonlyProps = [
  "color",
  "imageSize",
  "speed",
  "scale",
  "particleLife",
  "mass",
] as const;

// ParticleSystem
export const cesiumEventProps = {
  onComplete: "complete",
  onUpdate: "updateCallback",
} as const;

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
      (element.updateCallback as any) = props.onUpdate; // WORKAROUND: updateCallback should be accept undefined
    }
  },
  destroy(element, context) {
    if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
      context.primitiveCollection.remove(element);
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default ParticleSystem;
