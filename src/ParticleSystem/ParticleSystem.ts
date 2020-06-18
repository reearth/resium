import { ParticleSystem as CesiumParticleSystem } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
  ConstructorOptions,
  Merge,
} from "../core";

/*
@summary
`ParticleSystem` is 3D particles.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A ParticleSystem object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export type ParticleSystemCesiumProps = PickCesiumProps<CesiumParticleSystem, typeof cesiumProps>;

export type ParticleSystemCesiumReadonlyProps = PickCesiumProps<
  Merge<CesiumParticleSystem, ConstructorOptions<typeof CesiumParticleSystem>>,
  typeof cesiumReadonlyProps
>;

export type ParticleSystemCesiumEvents = {
  onComplete?: () => void;
};

export type ParticleSystemProps = ParticleSystemCesiumProps &
  ParticleSystemCesiumReadonlyProps &
  ParticleSystemCesiumEvents & {
    // @CesiumEvent
    // Correspond to [ParticleSystem#updateCallback](https://cesiumjs.org/Cesium/Build/Documentation/ParticleSystem.html#updateCallback)
    onUpdate?: CesiumParticleSystem.updateCallback;
  };

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
const cesiumEventProps: EventkeyMap<any, ParticleSystemCesiumEvents> = {
  onComplete: "complete",
};

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumParticleSystem,
  typeof cesiumProps | typeof cesiumEventProps[keyof typeof cesiumEventProps]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

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
