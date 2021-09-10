import React from "react";
import { Meta, Story } from "@storybook/react";
import { Viewer as CesiumViewer } from "cesium";

import Viewer from "../Viewer";
import { PostProcessStage, LensFlareStage, NightVisionStage, BlackAndWhiteStage } from ".";
import { LensFlareStageProps } from "./LensFlareStage";
import { PostProcessStageProps } from "./PostProcessStage";
import { Fxaa as ResiumFxaa } from "./Fxaa";
import Cesium3DTileset from "../Cesium3DTileset";
import { useRef } from "react";
import { CesiumComponentRef } from "..";

export default {
  title: "PostProcessStage",
  component: PostProcessStage,
} as Meta;

const shader = `
uniform sampler2D colorTexture;
varying vec2 v_textureCoordinates;
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
            averageValue += texture2D(colorTexture, integralPos + step * vec2(i, j)).rgb;
        }
    }
    averageValue /= float(KERNEL_WIDTH * KERNEL_WIDTH);
    gl_FragColor = vec4(averageValue, 1.0);
}
`;

export const Mosaic: Story<PostProcessStageProps> = args => (
  <Viewer full>
    <PostProcessStage {...args} fragmentShader={shader} />
  </Viewer>
);

Mosaic.args = {
  enabled: true,
};

export const BlackAndWhite: Story<PostProcessStageProps> = args => (
  <Viewer full>
    <BlackAndWhiteStage {...args} />
  </Viewer>
);

BlackAndWhite.args = {
  enabled: true,
};

export const LensFlare: Story<LensFlareStageProps> = args => (
  <Viewer full>
    <LensFlareStage {...args} />
  </Viewer>
);

LensFlare.args = {
  enabled: true,
  intensity: 5,
};

export const NightVison: Story<PostProcessStageProps> = args => (
  <Viewer full>
    <NightVisionStage {...args} />
  </Viewer>
);

NightVison.args = {
  enabled: true,
};

export const Fxaa: Story<PostProcessStageProps> = args => {
  const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
  return (
    <Viewer full ref={ref}>
      <Cesium3DTileset
        {...args}
        url="./tileset/tileset.json"
        onReady={tileset => {
          ref.current?.cesiumElement?.zoomTo(tileset);
        }}
      />
      <ResiumFxaa {...args} />
    </Viewer>
  );
};

Fxaa.args = {
  enabled: true,
};
