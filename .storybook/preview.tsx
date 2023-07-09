/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Preview } from "@storybook/react";
import { Ion } from "cesium";
import React from "react";

Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjMmMxODRjYy1mYzFiLTQ5MTUtODE1MS02NGNkMzAyNTIyODciLCJpZCI6MTA2OTgsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJhc3NldHMiOlsyLDMsNCwxXSwiaWF0IjoxNTU3MjA1NTM1fQ.5TYPEJKj_JzGX4r_a6GQjwSu7TIW2BIzeaIW8gFLUec";

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
