"use client";

import "cesium/Build/Cesium/Widgets/widgets.css";
import { Cartesian3, Color } from "cesium";
import { useState } from "react";
import { Entity, Viewer } from "resium";

// Cesium loads its workers/assets relative to this URL.
// They are linked into /public/cesium by the postinstall script.
window.CESIUM_BASE_URL = "/cesium";

export default function Cesium() {
  const [flag, setFlag] = useState(false);

  return (
    <Viewer full>
      <Entity
        name="Tokyo"
        position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
        point={{ pixelSize: 20, color: Color.WHITE }}
        description="hoge"
        onClick={() => setFlag((f) => !f)}
      />
      {flag && (
        <Entity
          position={Cartesian3.fromDegrees(139.767052, 34.681167, 100)}
          point={{ pixelSize: 20, color: Color.RED }}
        />
      )}
    </Viewer>
  );
}
