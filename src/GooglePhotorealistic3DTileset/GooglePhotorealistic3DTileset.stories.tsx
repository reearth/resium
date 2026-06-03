import { action } from "storybook/actions";
import { Meta, StoryObj } from "@storybook/react";
import { Viewer as CesiumViewer } from "cesium";
import { useRef } from "react";

import { CesiumComponentRef } from "../core";
import { events } from "../core/storybook";
import Viewer from "../Viewer";

import GooglePhotorealistic3DTileset from "./GooglePhotorealistic3DTileset";

type Story = StoryObj<typeof GooglePhotorealistic3DTileset>;

export default {
  title: "GooglePhotorealistic3DTileset",
  component: GooglePhotorealistic3DTileset,
  argTypes: {
    apiKey: {
      control: "text",
      description:
        "Google Maps API key. Required to load photorealistic tiles. Paste your own key in the Storybook controls panel — none is shipped in source.",
    },
  },
} as Meta;

/**
 * Loads Google's photorealistic 3D tiles using the `apiKey` arg.
 *
 * **Bring your own API key.** No key is shipped in the repo. Paste a Google
 * Maps API key into the `apiKey` control to mount the tileset. Without a key
 * the tileset request hangs waiting for authentication and the iframe locks up;
 * the story handles this by showing an instructional empty-state overlay until
 * a key is provided.
 *
 * Get a key at https://console.cloud.google.com → APIs & Services → Credentials,
 * then enable the "Map Tiles API" and the "Photorealistic 3D Tiles" capability.
 */
export const Basic: Story = {
  args: {
    // Empty by default — paste your Google Maps API key into the controls panel.
    // See the JSDoc above for why no default key is shipped.
    apiKey: "",
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    if (!args.apiKey) {
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
              Paste your Google Maps API key into the <code>apiKey</code>{" "}
              control to load the photorealistic tileset.
            </p>
            <p style={{ opacity: 0.8, fontSize: 13, lineHeight: 1.5 }}>
              Without a key, Cesium's authentication handshake hangs waiting
              for credentials and the iframe locks up.
            </p>
            <p style={{ opacity: 0.6, fontSize: 12, lineHeight: 1.5, marginTop: 16 }}>
              Get a key at{" "}
              <code>console.cloud.google.com → APIs & Services → Credentials</code>,
              enable the <em>Map Tiles API</em>, then paste it above.
            </p>
          </div>
        </div>
      );
    }
    return (
      <Viewer full ref={ref}>
        <GooglePhotorealistic3DTileset
          {...args}
          apiKey={args.apiKey}
          onAllTilesLoad={action("onAllTilesLoad")}
          onInitialTilesLoad={action("onInitialTilesLoad")}
          onTileFailed={action("onTileFailed")}
          onTileLoad={action("onTileLoad")}
          onTileUnload={action("onTileUnload")}
          onReady={tileset => {
            ref.current?.cesiumElement?.zoomTo(tileset);
          }}
          onError={action("onError")}
          {...events}
        />
      </Viewer>
    );
  },
};
