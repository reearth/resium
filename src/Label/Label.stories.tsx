import React from "react";
import { Cartesian3, Color, Transforms } from "cesium";
import { Meta, Story } from "@storybook/react";

import Viewer from "../Viewer";
import Label, { LabelProps } from "./Label";
import LabelCollection from "../LabelCollection";
import { events } from "../core/storybook";

const center = Cartesian3.fromDegrees(-75.59777, 40.03883);

export default {
  title: "Label",
  component: Label,
} as Meta;

export const Basic: Story<LabelProps> = args => (
  <Viewer full>
    <LabelCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
      <Label
        {...args}
        fillColor={Color.ORANGE}
        position={new Cartesian3(0.0, 0.0, 0.0)}
        text="Cesium"
      />
      <Label
        {...args}
        fillColor={Color.YELLOW}
        position={new Cartesian3(1000000.0, 0.0, 0.0)}
        text="resium"
      />
      <Label
        {...args}
        fillColor={Color.GREEN}
        position={new Cartesian3(0.0, 1000000.0, 0.0)}
        text="Hi!"
      />
      <Label
        {...args}
        fillColor={Color.CYAN}
        position={new Cartesian3(0.0, 0.0, 1000000.0)}
        text="LGTM"
      />
    </LabelCollection>
  </Viewer>
);

export const Events: Story<LabelProps> = args => (
  <Viewer full>
    <LabelCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
      <Label
        {...args}
        fillColor={Color.ORANGE}
        position={new Cartesian3(0.0, 0.0, 0.0)}
        text="Cesium"
        {...events}
      />
    </LabelCollection>
  </Viewer>
);
