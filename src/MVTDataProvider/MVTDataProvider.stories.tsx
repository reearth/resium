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
  argTypes: {
    url: {
      control: "text",
      description:
        "MVT URL template ({z}/{x}/{y}). Most production vector tile services require an API key — paste your own key URL here to test against a known dataset.",
    },
  },
} as Meta;

/**
 * Loads OpenFreeMap's planet-scale OpenMapTiles vector tile set by default and
 * renders it over the Cesium globe. Paste a different `{z}/{x}/{y}` MVT URL
 * (e.g. your MapTiler/Mapbox key URL) into the `url` control to swap data sources.
 *
 * The default URL (`tiles.openfreemap.org/planet/latest/`) is OpenFreeMap's
 * officially-stable `latest` alias against the OpenMapTiles schema, full zoom
 * coverage z0–z14, no API key. Falls back to a bring-your-own-URL empty state
 * if you clear the `url` arg.
 *
 * Network-dependent — does not run under VRT (no `vrt` tag).
 */
export const Basic: Story = {
  args: {
    // OpenFreeMap planet/latest alias — public OpenMapTiles dataset, no API key required,
    // documented as the stable alias by the OpenFreeMap project (https://openfreemap.org).
    url: "https://tiles.openfreemap.org/planet/latest/{z}/{x}/{y}.pbf",
    maxZoom: 14,
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
              The story ships with an OpenFreeMap default; clear the URL arg
              to see this overlay, or paste your own keyed URL (Mapbox,
              MapTiler, Protomaps, etc.) to test against your provider.
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
