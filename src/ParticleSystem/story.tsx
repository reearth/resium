import React, { useMemo, useRef, useCallback } from "react";
import { Cartesian3, Cartesian2, SphereEmitter } from "cesium";
import { storiesOf } from "@storybook/react";

import { useCesium } from "../core/context";
import Viewer from "../Viewer";
import ParticleSystem from "./ParticleSystem";
import CameraFlyTo from "../CameraFlyTo";

import snowImg from "assets/circular_particle.png";

const pos = new Cartesian3(277096.634865404, 5647834.481964232, 2985563.7039122293);
const snowAlpha = 1.0;
const snowRadius = 100000.0;

const SnowParticle: React.FC = () => {
  const scene = useCesium<{ scene?: Cesium.Scene }>().scene;
  const snowGravityScratch = useRef(new Cartesian3());
  const snowParticleSize = scene ? scene.drawingBufferWidth / 100.0 : 0;
  const minimumSnowImageSize = useMemo(() => new Cartesian2(snowParticleSize, snowParticleSize), [
    snowParticleSize,
  ]);
  const maximumSnowImageSize = useMemo(
    () => new Cartesian2(snowParticleSize * 2.0, snowParticleSize * 2.0),
    [snowParticleSize],
  );
  const emitter = useMemo(() => new SphereEmitter(snowRadius), []);

  const onUpdate = useCallback(
    (particle: any) => {
      if (!scene) return;

      snowGravityScratch.current = Cesium.Cartesian3.normalize(
        particle.position,
        snowGravityScratch.current,
      );
      Cesium.Cartesian3.multiplyByScalar(
        snowGravityScratch.current,
        (Cesium.Math as any).randomBetween(-30.0, -300.0),
        snowGravityScratch.current,
      );
      particle.velocity = Cesium.Cartesian3.add(
        particle.velocity,
        snowGravityScratch.current,
        particle.velocity,
      );

      const distance = Cesium.Cartesian3.distance(scene.camera.position, particle.position);
      if (distance > snowRadius) {
        particle.endColor.alpha = 0.0;
      } else {
        particle.endColor.alpha = snowAlpha / (distance / snowRadius + 0.1);
      }
    },
    [scene],
  );

  return (
    <ParticleSystem
      modelMatrix={Cesium.Matrix4.fromTranslation(pos)}
      minimumSpeed={-1.0}
      maximumSpeed={0.0}
      lifetime={15.0}
      emitter={emitter}
      startScale={0.5}
      endScale={1.0}
      image={snowImg}
      emissionRate={7000.0}
      startColor={Cesium.Color.WHITE.withAlpha(0.0)}
      endColor={Cesium.Color.WHITE.withAlpha(snowAlpha)}
      minimumImageSize={minimumSnowImageSize}
      maximumImageSize={maximumSnowImageSize}
      onUpdate={onUpdate}
    />
  );
};

storiesOf("ParticleSystem", module).add("Basic", () => (
  <Viewer full shouldAnimate terrainProvider={Cesium.createWorldTerrain({})}>
    <CameraFlyTo
      duration={0}
      destination={pos}
      orientation={{
        heading: 4.731089976107251,
        pitch: -0.32003481981370063,
      }}
    />
    <SnowParticle />
  </Viewer>
));
