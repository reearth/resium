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
 * Loads a public MVT endpoint and shows the resulting tileset over a global view.
 *
 * Defaults to MapLibre's curated demo basemap (no API key required, public test dataset).
 * To test against your own tiles, paste a `{z}/{x}/{y}.pbf|.mvt` URL into the
 * `url` control — most production vector tile services (Mapbox, MapTiler,
 * Protomaps, ESRI) require an API key in the URL.
 *
 * Network-dependent — does not run under VRT (no `vrt` tag).
 */
export const Basic: Story = {
  args: {
    // MapLibre's demo basemap — public test dataset specifically for examples like this.
    // If MapLibre rotates this URL, swap to e.g.
    //   https://tiles.openfreemap.org/planet/20240429_001001_pt/{z}/{x}/{y}.pbf
    // or paste your own keyed URL via the controls panel.
    url: "https://demotiles.maplibre.org/tiles/{z}/{x}/{y}.pbf",
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
          <div>
            <p>Paste an MVT URL into the <code>url</code> control to test the wrapper.</p>
            <p style={{ opacity: 0.7, fontSize: 12, marginTop: 12 }}>
              Example: <code>{"https://your-host.example/tiles/{z}/{x}/{y}.pbf?key=YOUR_KEY"}</code>
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
