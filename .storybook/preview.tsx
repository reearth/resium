/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Preview } from "@storybook/react";
import { Ion } from "cesium";
import React from "react";

Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhYzVkMTc1ZS00NTRhLTRjY2QtYTQwZS01YmU2Mjg1ODAwN2YiLCJpZCI6MjU5LCJpYXQiOjE2ODgzOTgwMjl9.MZC_HUBRd0y5HJeB-F5QSpT-fEgTM6mI5gMaSND9FHc";

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
