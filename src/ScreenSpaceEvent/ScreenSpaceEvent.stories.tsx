import { Meta, StoryObj } from "@storybook/react";
import {
  Cartesian2,
  Cartesian3,
  Color,
  KeyboardEventModifier,
  ScreenSpaceEventType,
  Viewer as CesiumViewer,
} from "cesium";
import { useRef, useState } from "react";

import { CesiumComponentRef } from "../core";
import Entity from "../Entity";
import PointGraphics from "../PointGraphics";
import ScreenSpaceEventHandler from "../ScreenSpaceEventHandler";
import Viewer from "../Viewer";

import ScreenSpaceEvent from "./ScreenSpaceEvent";

type Story = StoryObj<typeof ScreenSpaceEvent>;

export default {
  title: "ScreenSpaceEvent",
  component: ScreenSpaceEvent,
} as Meta;

type Marker = { id: number; position: Cartesian3; color: Color; label: string };

/**
 * Demonstrates plain, single-modifier, and chord-modifier bindings on the same
 * event type. Each binding drops a colored point on the globe at the click
 * location, so it's obvious which combination fired:
 *
 * - **Plain click** → red point
 * - **ALT + click** → yellow point
 * - **ALT + SHIFT + click** → cyan point (chord — requires Cesium 1.142+)
 *
 * The overlay also logs the last few events for confirmation. Clicks that miss
 * the globe (e.g. above the horizon) only update the log.
 */
export const Chord: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const viewerRef = useRef<CesiumComponentRef<CesiumViewer>>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const counterRef = useRef(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [markers, setMarkers] = useState<Marker[]>([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [log, setLog] = useState<string[]>([]);

    const pickGlobe = (screen: Cartesian2): Cartesian3 | undefined => {
      const viewer = viewerRef.current?.cesiumElement;
      if (!viewer) return undefined;
      const ray = viewer.camera.getPickRay(screen);
      if (!ray) return undefined;
      const hit = viewer.scene.globe.pick(ray, viewer.scene);
      return hit ?? undefined;
    };

    const handle =
      (label: string, color: Color) =>
      (e: { position: Cartesian2 } | { startPosition: Cartesian2; endPosition: Cartesian2 }) => {
        if (!("position" in e)) return;
        setLog(prev => [...prev.slice(-5), label]);
        const position = pickGlobe(e.position);
        if (!position) return;
        const id = counterRef.current++;
        setMarkers(prev => [...prev.slice(-19), { id, position, color, label }]);
      };

    return (
      <Viewer full ref={viewerRef}>
        <ScreenSpaceEventHandler>
          <ScreenSpaceEvent
            action={handle("LEFT_CLICK", Color.RED)}
            type={ScreenSpaceEventType.LEFT_CLICK}
          />
          <ScreenSpaceEvent
            action={handle("LEFT_CLICK + ALT", Color.YELLOW)}
            modifier={KeyboardEventModifier.ALT}
            type={ScreenSpaceEventType.LEFT_CLICK}
          />
          <ScreenSpaceEvent
            action={handle("LEFT_CLICK + ALT + SHIFT", Color.CYAN)}
            modifier={[KeyboardEventModifier.ALT, KeyboardEventModifier.SHIFT]}
            type={ScreenSpaceEventType.LEFT_CLICK}
          />
        </ScreenSpaceEventHandler>
        {markers.map(m => (
          <Entity key={m.id} position={m.position}>
            <PointGraphics
              pixelSize={14}
              color={m.color}
              outlineColor={Color.WHITE}
              outlineWidth={2}
            />
          </Entity>
        ))}
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            padding: 12,
            background: "rgba(0,0,0,0.75)",
            color: "white",
            fontFamily: "monospace",
            fontSize: 12,
            borderRadius: 4,
            pointerEvents: "none",
            minWidth: 260,
          }}>
          <div style={{ marginBottom: 8, fontWeight: 600 }}>
            Try clicking the globe:
          </div>
          <div style={{ opacity: 0.85, lineHeight: 1.5 }}>
            <div>
              <span style={{ color: "#ff6b6b" }}>●</span> plain click
            </div>
            <div>
              <span style={{ color: "#ffe066" }}>●</span> ALT + click
            </div>
            <div>
              <span style={{ color: "#66e0ff" }}>●</span> ALT + SHIFT + click
              (chord)
            </div>
          </div>
          <div style={{ marginTop: 10, borderTop: "1px solid #444", paddingTop: 8 }}>
            {log.length === 0
              ? <div style={{ opacity: 0.6 }}>· no events yet</div>
              : log.map((l, i) => <div key={i}>· {l}</div>)}
          </div>
        </div>
      </Viewer>
    );
  },
};
