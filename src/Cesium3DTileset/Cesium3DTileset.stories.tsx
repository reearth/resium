import { action } from "storybook/actions";
import { Meta, StoryObj } from "@storybook/react";
import {
  BlendOption,
  Viewer as CesiumViewer,
  Cesium3DTileStyle,
  IonResource,
  EdgeDisplayMode,
} from "cesium";
import { useMemo, useRef } from "react";

import { CesiumComponentRef } from "../core";
import { events } from "../core/storybook";
import Viewer from "../Viewer";

import Cesium3DTileset from "./Cesium3DTileset";

type Story = StoryObj<typeof Cesium3DTileset>;

export default {
  title: "Cesium3DTileset",
  component: Cesium3DTileset,
} as Meta;

export const Basic: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return (
      <Viewer full ref={ref}>
        <Cesium3DTileset
          {...args}
          url="./tileset/tileset.json"
          onAllTilesLoad={action("onAllTilesLoad")}
          onInitialTilesLoad={action("onInitialTilesLoad")}
          onTileFailed={action("onTileFailed")}
          onTileLoad={action("onTileLoad")}
          onTileUnload={action("onTileUnload")}
          onReady={tileset => {
            ref.current?.cesiumElement?.zoomTo(tileset);
          }}
          {...events}
        />
      </Viewer>
    );
  },
};

export const Resource: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const url = useMemo(() => IonResource.fromAssetId(96188), []);
    return (
      <Viewer full ref={ref}>
        <Cesium3DTileset {...args} url={url} />
      </Viewer>
    );
  },
};

export const Style: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return (
      <Viewer full ref={ref}>
        <Cesium3DTileset
          {...args}
          url="./tileset/tileset.json"
          style={
            new Cesium3DTileStyle({
              color: {
                conditions: [["true", "color('red')"]],
              },
            })
          }
          onReady={tileset => {
            ref.current?.cesiumElement?.zoomTo(tileset);
          }}
        />
      </Viewer>
    );
  },
};

/**
 * Demonstrates the new `edgeDisplayMode` prop (Cesium 1.142+). Visible effect
 * requires source tilesets containing the `EXT_mesh_primitive_edge_visibility`
 * glTF extension. Most demo tilesets do not include edge data, so this story
 * documents the prop wiring; swap `url` for an edge-equipped tileset locally
 * to see CAD-style wireframe rendering.
 */
export const EdgeDisplay: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return (
      <Viewer full ref={ref}>
        <Cesium3DTileset
          {...args}
          url="./tileset/tileset.json"
          edgeDisplayMode={EdgeDisplayMode.SURFACES_AND_EDGES}
          onReady={tileset => {
            ref.current?.cesiumElement?.zoomTo(tileset);
          }}
        />
      </Viewer>
    );
  },
};

// Half-transparent red is what makes the two blend modes look different:
// TRANSLUCENT honours the alpha, OPAQUE ignores it.
const vectorStyle = new Cesium3DTileStyle({
  color: "color('red', 0.5)",
  pointSize: 28,
});

/**
 * `vectorBlendOption` (Cesium 1.146+) sets how a tileset's **vector** content
 * blends with the scene. It has no effect on ordinary mesh tiles, so this story
 * loads a bundled `vector-tileset` fixture: a 12×12 grid of points declared as
 * vector glTF (`3DTILES_content_gltf_vector`), styled half-transparent red.
 * Flip the control: TRANSLUCENT (Cesium's default) alpha-blends the points so
 * the field shows through them; OPAQUE disables blending and writes depth, so
 * the same points render solid red. Cesium re-applies the option every frame,
 * so it switches on the live tileset.
 */
export const VectorBlend: Story = {
  args: { vectorBlendOption: BlendOption.TRANSLUCENT },
  argTypes: {
    vectorBlendOption: {
      control: {
        type: "select",
        labels: { [BlendOption.OPAQUE]: "OPAQUE", [BlendOption.TRANSLUCENT]: "TRANSLUCENT" },
      },
      options: [BlendOption.OPAQUE, BlendOption.TRANSLUCENT],
    },
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    return (
      <Viewer full ref={ref}>
        <Cesium3DTileset
          url="./vector-tileset/tileset.json"
          style={vectorStyle}
          vectorBlendOption={args.vectorBlendOption}
          onReady={tileset => {
            ref.current?.cesiumElement?.zoomTo(tileset);
          }}
        />
      </Viewer>
    );
  },
};
