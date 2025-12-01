 
import type { Preview } from "@storybook/react";
import React from "react";

export const preview: Preview = {
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    Story => {
      return <Story />;
    },
  ],
};
