import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3, Ellipsoid, HeadingPitchRange, Matrix3, Matrix4, Transforms } from "cesium";

import CameraLookAt from "../CameraLookAt";
import Globe from "../Globe";
import ScreenSpaceCameraController from "../ScreenSpaceCameraController";
import Viewer from "../Viewer";

import CubeMapPanorama from "./CubeMapPanorama";

// Free outdoor park cube map — "Park2" by Emil Persson (humus.name, CC-BY 3.0)
// In production, use GoogleStreetViewCubeMapPanoramaProvider to load real Street View imagery.
const parkSources = {
  positiveX: "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/cube/Park2/posx.jpg",
  negativeX: "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/cube/Park2/negx.jpg",
  positiveY: "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/cube/Park2/posy.jpg",
  negativeY: "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/cube/Park2/negy.jpg",
  positiveZ: "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/cube/Park2/posz.jpg",
  negativeZ: "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/cube/Park2/negz.jpg",
};

const position = Cartesian3.fromDegrees(-122.4175, 37.655, 0);

// CubeMapPanorama uses a Matrix3 (rotation only) — extract from the localFrame transform
const transform = Matrix4.getMatrix3(
  Transforms.localFrameToFixedFrameGenerator("north", "down")(position, Ellipsoid.default),
  new Matrix3(),
);

type Story = StoryObj<typeof CubeMapPanorama>;

export default {
  title: "CubeMapPanorama",
  component: CubeMapPanorama,
} as Meta;

// Toggle `show` in the controls panel to hide/reveal the panorama
export const Basic: Story = {
  args: { show: true },
  render: args => (
    <Viewer full>
      {/* Hide the globe so the panorama renders as the background */}
      <Globe show={false} />
      {/* Place the camera inside the cube map (range = 2m) */}
      <CameraLookAt target={position} offset={new HeadingPitchRange(0, 0, 2)} />
      {/* Prevent panning away from the panorama */}
      <ScreenSpaceCameraController enableTranslate={false} enableZoom={false} />
      <CubeMapPanorama {...args} sources={parkSources} transform={transform} />
    </Viewer>
  ),
};
