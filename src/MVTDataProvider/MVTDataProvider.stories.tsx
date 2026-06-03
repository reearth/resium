import { action } from "storybook/actions";
import { Meta, StoryObj } from "@storybook/react";
import {
  Cartesian3,
  Cesium3DTileStyle,
  Rectangle,
  Viewer as CesiumViewer,
} from "cesium";
import { useRef } from "react";

import { CesiumComponentRef } from "../core";
import Viewer from "../Viewer";

import MVTDataProvider, { getTileset } from "./MVTDataProvider";

type Story = StoryObj<typeof MVTDataProvider>;

export default {
  title: "MVTDataProvider",
  component: MVTDataProvider,
  argTypes: {
    url: {
      control: "text",
      description:
        "MVT URL template ({z}/{x}/{y}). Most production vector tile services require an API key — paste your own key URL here to test against a known dataset.",
    },
  },
} as Meta;

// Constrain the demo to a small area (Manhattan, NYC) so the experimental
// MVTDataProvider doesn't try to load planet-scale data into the browser.
// Without an `extent`, Cesium's tile-selection traverses the whole world tree
// and pegs the iframe even on modest datasets — see the JSDoc on `Basic` below.
const NYC_EXTENT = Rectangle.fromDegrees(-74.05, 40.65, -73.85, 40.85);
const NYC_VIEW = Cartesian3.fromDegrees(-73.95, 40.75, 50_000);

/**
 * Loads OpenFreeMap's OpenMapTiles dataset for the Manhattan area and renders
 * features with a visible blue style.
 *
 * **About the constraints:** Cesium 1.142's `MVTDataProvider` is `@experimental`
 * and not yet performance-tuned for planet-scale rendering. Two constraints are
 * required for a smooth demo:
 *
 * 1. **`extent`** — restrict the tile tree to a small geographic region.
 *    Without this, Cesium fetches tiles across the whole globe and the iframe
 *    becomes unresponsive.
 * 2. **`Cesium3DTileStyle`** — apply per-feature color/show via the internal
 *    tileset (reached through `getTileset(provider)`). Without a style,
 *    decoded MVT features have no visible fill and you see nothing.
 *
 * Paste a different `{z}/{x}/{y}` MVT URL into the `url` control to swap data
 * sources (e.g. your MapTiler/Mapbox key URL). Network-dependent — does not
 * run under VRT.
 */
export const Basic: Story = {
  args: {
    url: "https://tiles.openfreemap.org/planet/latest/{z}/{x}/{y}.pbf",
    maxZoom: 12,
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const viewerRef = useRef<CesiumComponentRef<CesiumViewer>>(null);
    if (!args.url) {
      return (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#111",
            color: "white",
            fontFamily: "monospace",
            padding: 24,
            textAlign: "center",
          }}>
          <div style={{ maxWidth: 540 }}>
            <p style={{ fontSize: 16, marginBottom: 16 }}>
              Paste an MVT URL into the <code>url</code> control to mount the
              wrapper against real tiles.
            </p>
            <p style={{ opacity: 0.8, fontSize: 13, lineHeight: 1.5 }}>
              Example shape (your endpoint and key):
              <br />
              <code>{"https://api.maptiler.com/tiles/v3/{z}/{x}/{y}.pbf?key=YOUR_KEY"}</code>
            </p>
            <p style={{ opacity: 0.6, fontSize: 12, lineHeight: 1.5, marginTop: 16 }}>
              The story ships with an OpenFreeMap default + Manhattan extent;
              clear the URL arg to see this overlay.
            </p>
          </div>
        </div>
      );
    }
    return (
      <Viewer full ref={viewerRef}>
        <MVTDataProvider
          {...args}
          url={args.url}
          extent={NYC_EXTENT}
          onReady={provider => {
            action("onReady")(provider);
            const tileset = getTileset(provider);
            if (tileset) {
              tileset.style = new Cesium3DTileStyle({
                color: "color('#3388ff', 0.6)",
                show: true,
              });
            }
            viewerRef.current?.cesiumElement?.camera.flyTo({
              destination: NYC_VIEW,
              duration: 0,
            });
          }}
          onError={action("onError")}
        />
      </Viewer>
    );
  },
};
