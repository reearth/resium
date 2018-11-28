import React from "react";
import { storiesOf } from "@storybook/react";
import { Cartesian3 } from "cesium";

import Viewer from "../Viewer";
import Entity from "../Entity";
import * as postProcessStage from "../PostProcessStage";
import * as postProcessStageComposite from "../PostProcessStageComposite";
import model from "./assets/Cesium_Air.glb";

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

export default () => {
  storiesOf("PostProcessStage", module)
    .add("Mosaic", () => (
      <Viewer full>
        <postProcessStage.PostProcessStage fragmentShader={shader} />
      </Viewer>
    ))
    .add("Lens flare", () => (
      <Viewer full>
        <postProcessStage.LensFlareStage intensity={5} />
      </Viewer>
    ))
    .add("Night vison", () => (
      <Viewer full>
        <postProcessStage.NightVisionStage />
      </Viewer>
    ))
    .add("Bloom", () => (
      <Viewer full>
        <postProcessStageComposite.Bloom />
        <Entity
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          model={{ uri: model }}
          tracked
        />
      </Viewer>
    ));
};
