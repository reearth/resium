import { Meta, StoryObj } from "@storybook/react";
import { Viewer as CesiumViewer } from "cesium";
import { useRef } from "react";

import { CesiumComponentRef } from "..";
import Cesium3DTileset from "../Cesium3DTileset";
import Viewer from "../Viewer";

import { Fxaa as ResiumFxaa } from "./Fxaa";

import { PostProcessStage, LensFlareStage, NightVisionStage, BlackAndWhiteStage } from ".";

type Story = StoryObj<typeof PostProcessStage>;

export default {
  title: "PostProcessStage",
  component: PostProcessStage,
} as Meta;

const shader = `
uniform sampler2D colorTexture;
in vec2 v_textureCoordinates;
const int KERNEL_WIDTH = 16;
void main(void)
{
    vec2 step = 1.0 / czm_viewport.zw;
    vec2 integralPos = v_textureCoordinates - mod(v_textureCoordinates, 8.0 * step);
    vec3 averageValue = vec3(0.0);
    for (int i = 0; i < KERNEL_WIDTH; i++)
    {
        for (int j = 0; j < KERNEL_WIDTH; j++)
        {
            averageValue += texture(colorTexture, integralPos + step * vec2(i, j)).rgb;
        }
    }
    averageValue /= float(KERNEL_WIDTH * KERNEL_WIDTH);
    out_FragColor = vec4(averageValue, 1.0);
}
`;

export const Mosaic: Story = {
  args: {
    enabled: true,
  },
  render: args => (
    <Viewer full>
      <PostProcessStage {...args} fragmentShader={shader} />
    </Viewer>
  ),
};

Mosaic.args = {
  enabled: true,
};

export const BlackAndWhite: Story = {
  args: {
    enabled: true,
  },
  render: args => (
    <Viewer full>
      <BlackAndWhiteStage {...args} />
    </Viewer>
  ),
};

export const LensFlare: StoryObj<typeof LensFlareStage> = {
  args: {
    enabled: true,
    intensity: 5,
  },
  render: args => (
    <Viewer full>
      <LensFlareStage {...args} />
    </Viewer>
  ),
};

export const NightVison: Story = {
  args: {
    enabled: true,
  },
  render: args => (
    <Viewer full>
      <NightVisionStage {...args} />
    </Viewer>
  ),
};

export const Fxaa: Story = {
  args: {
    enabled: true,
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return (
      <Viewer full ref={ref}>
        <Cesium3DTileset
          url="./tileset/tileset.json"
          onReady={tileset => {
            ref.current?.cesiumElement?.zoomTo(tileset);
          }}
        />
        <ResiumFxaa {...args} />
      </Viewer>
    );
  },
};
