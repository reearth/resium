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
 * Bring-your-own-URL demo for `MVTDataProvider`. Paste a `{z}/{x}/{y}` MVT URL
 * (with API key if your provider requires one) into the `url` control to mount
 * the wrapper against real tiles.
 *
 * No default URL is shipped because every free public MVT endpoint we evaluated
 * is fragile — Protomaps' demo path now returns 403, MapLibre's demotiles is
 * only z0–z5 and crashes the browser at higher zoom, OpenFreeMap is a
 * community-hosted endpoint that can rotate. This mirrors how the
 * `GooglePhotorealistic3DTileset` story expects consumers to bring their own
 * API key.
 *
 * Network-dependent — does not run under VRT (no `vrt` tag).
 */
export const Basic: Story = {
  args: {
    // Empty by default — see the JSDoc above for why. Paste your own URL in the controls panel.
    url: "",
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
              No default URL is shipped — every free public MVT endpoint we
              evaluated either requires authentication or proved unstable. This
              mirrors how the <code>GooglePhotorealistic3DTileset</code> story
              expects you to set <code>GoogleMaps.defaultApiKey</code> or pass
              an <code>apiKey</code> prop.
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
