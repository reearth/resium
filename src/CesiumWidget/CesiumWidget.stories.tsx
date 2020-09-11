import React from "react";
import { Meta, Story } from "@storybook/react";

import CesiumWidget, { CesiumWidgetProps } from "./CesiumWidget";
import { events } from "../core/storybook";

export default {
  title: "CesiumWidget",
  component: CesiumWidget,
} as Meta;

export const Basic: Story<CesiumWidgetProps> = args => <CesiumWidget {...args} full />;

export const Events: Story<CesiumWidgetProps> = args => <CesiumWidget {...args} full {...events} />;
