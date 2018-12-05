/// <reference types="react" />
import Cesium from "cesium";
export interface ParticleSystemCesiumProps {
    show?: boolean;
    emitter?: any;
    modelMatrix?: Cesium.Matrix4;
    emitterModelMatrix?: Cesium.Matrix4;
    emissionRate?: number;
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
export interface ParticleSystemProps extends ParticleSystemCesiumProps {
    onComplete?: () => void;
    onUpdate?: (particle: any, dt: number) => void;
}
export interface ParticleSystemContext {
    primitiveCollection: Cesium.PrimitiveCollection;
}
declare const ParticleSystem: import("react").ForwardRefExoticComponent<ParticleSystemProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<any>>>;
export default ParticleSystem;
