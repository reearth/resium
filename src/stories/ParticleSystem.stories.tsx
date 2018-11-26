import Cesium from "cesium";
import React from "react";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import ParticleSystem from "../ParticleSystem";
import { withCesium } from "../core/context";
import CameraFlyTo from "../CameraFlyTo";

import snowImg from "./assets/circular_particle.png";

const pos = new Cesium.Cartesian3(277096.634865404, 5647834.481964232, 2985563.7039122293);

class SnowParticle extends React.PureComponent<{ cesium: { scene: Cesium.Scene } }> {
  private static snowRadius = 100000.0;
  private static snowAlpha = 1.0;

  private snowGravityScratch = new Cesium.Cartesian3();
  private snowParticleSize: number;
  private minimumSnowImageSize: Cesium.Cartesian2;
  private maximumSnowImageSize: Cesium.Cartesian2;

  constructor(props: { cesium: { scene: Cesium.Scene } }) {
    super(props);
    const scene = props.cesium.scene;
    this.snowParticleSize = scene.drawingBufferWidth / 100.0;
    this.minimumSnowImageSize = new Cesium.Cartesian2(this.snowParticleSize, this.snowParticleSize);
    this.maximumSnowImageSize = new Cesium.Cartesian2(
      this.snowParticleSize * 2.0,
      this.snowParticleSize * 2.0,
    );
  }

  public render() {
    const scene = this.props.cesium.scene;
    return (
      <ParticleSystem
        modelMatrix={Cesium.Matrix4.fromTranslation(pos)}
        minimumSpeed={-1.0}
        maximumSpeed={0.0}
        lifetime={15.0}
        emitter={new (Cesium as any).SphereEmitter(SnowParticle.snowRadius)}
        startScale={0.5}
        endScale={1.0}
        image={snowImg}
        emissionRate={7000.0}
        startColor={Cesium.Color.WHITE.withAlpha(0.0)}
        endColor={Cesium.Color.WHITE.withAlpha(SnowParticle.snowAlpha)}
        minimumImageSize={this.minimumSnowImageSize}
        maximumImageSize={this.maximumSnowImageSize}
        onUpdate={this.onUpdate}
      />
    );
  }

  private onUpdate = (particle: any) => {
    const scene = this.props.cesium.scene;

    this.snowGravityScratch = Cesium.Cartesian3.normalize(
      particle.position,
      this.snowGravityScratch,
    );
    Cesium.Cartesian3.multiplyByScalar(
      this.snowGravityScratch,
      (Cesium.Math as any).randomBetween(-30.0, -300.0),
      this.snowGravityScratch,
    );
    particle.velocity = Cesium.Cartesian3.add(
      particle.velocity,
      this.snowGravityScratch,
      particle.velocity,
    );

    const distance = Cesium.Cartesian3.distance(scene.camera.position, particle.position);
    if (distance > SnowParticle.snowRadius) {
      particle.endColor.alpha = 0.0;
    } else {
      particle.endColor.alpha = SnowParticle.snowAlpha / (distance / SnowParticle.snowRadius + 0.1);
    }
  };
}

const WrappedSnowParticle = withCesium<{}, { scene: Cesium.Scene }>(SnowParticle);

export default () => {
  storiesOf("ParticleSystem", module).add("default", () => (
    <Viewer full shouldAnimate terrainProvider={Cesium.createWorldTerrain({})}>
      <CameraFlyTo
        duration={0}
        destination={pos}
        orientation={{
          heading: 4.731089976107251,
          pitch: -0.32003481981370063,
        }}
      />
      <WrappedSnowParticle />
    </Viewer>
  ));
};
