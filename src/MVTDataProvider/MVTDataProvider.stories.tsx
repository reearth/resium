import { action } from "storybook/actions";
import { Meta, StoryObj } from "@storybook/react";
import { Cartesian3, Viewer as CesiumViewer } from "cesium";
import { useRef } from "react";

import { CesiumComponentRef } from "../core";
import Viewer from "../Viewer";

import MVTDataProvider from "./MVTDataProvider";

type Story = StoryObj<typeof MVTDataProvider>;

export default {
  title: "MVTDataProvider",
  component: MVTDataProvider,
} as Meta;

/**
 * Loads a public MVT endpoint and shows the resulting tileset over a global view.
 * Network-dependent — does not run under VRT (no `vrt` tag).
 */
export const Basic: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const viewerRef = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return (
      <Viewer full ref={viewerRef}>
        <MVTDataProvider
          {...args}
          // Public Protomaps MVT endpoint — no API key required.
          url="https://api.protomaps.com/tiles/v3/{z}/{x}/{y}.mvt"
          maxZoom={14}
          onReady={provider => {
            action("onReady")(provider);
            // Fly to a global view so the tileset extent is visible regardless of where it loads first.
            viewerRef.current?.cesiumElement?.camera.flyTo({
              destination: Cartesian3.fromDegrees(0, 0, 25_000_000),
              duration: 0,
            });
          }}
          onError={action("onError")}
        />
      </Viewer>
    );
  },
};
