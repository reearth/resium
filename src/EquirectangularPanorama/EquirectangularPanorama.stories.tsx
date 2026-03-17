import { Meta, StoryObj } from "@storybook/react";
import {
  Cartesian3,
  Ellipsoid,
  HeadingPitchRange,
  HeadingPitchRoll,
  Math as CesiumMath,
  Transforms,
} from "cesium";

import CameraLookAt from "../CameraLookAt";
import Globe from "../Globe";
import ScreenSpaceCameraController from "../ScreenSpaceCameraController";
import Viewer from "../Viewer";

import EquirectangularPanorama from "./EquirectangularPanorama";

const position = Cartesian3.fromDegrees(-122.4175, 37.655, 100);
const transform = Transforms.headingPitchRollToFixedFrame(
  position,
  new HeadingPitchRoll(CesiumMath.toRadians(10), CesiumMath.toRadians(-5), CesiumMath.toRadians(2)),
  Ellipsoid.WGS84,
  Transforms.eastNorthUpToFixedFrame,
);

// Public domain 360° interior panorama (Laon Cathedral, France — Wikimedia Commons)
const image =
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Laon_Cathedral_Interior_360x180%2C_Picardy%2C_France_-_Diliff.jpg";

const commonScene = (
  <>
    <Globe show={false} />
    <CameraLookAt target={position} offset={new HeadingPitchRange(0, 0, 2)} />
    <ScreenSpaceCameraController enableTranslate={false} enableZoom={false} />
  </>
);

type Story = StoryObj<typeof EquirectangularPanorama>;

export default {
  title: "EquirectangularPanorama",
  component: EquirectangularPanorama,
} as Meta;

// Toggle `show` in the controls panel to hide/reveal the panorama
export const Basic: Story = {
  args: { show: true },
  render: args => (
    <Viewer full>
      {commonScene}
      <EquirectangularPanorama {...args} transform={transform} image={image} />
    </Viewer>
  ),
};

// repeatHorizontal / repeatVertical tile the image across the sphere — visually distinct from Basic
export const TextureRepeat: Story = {
  render: () => (
    <Viewer full>
      {commonScene}
      <EquirectangularPanorama
        transform={transform}
        image={image}
        repeatHorizontal={3}
        repeatVertical={2}
        show
      />
    </Viewer>
  ),
};
