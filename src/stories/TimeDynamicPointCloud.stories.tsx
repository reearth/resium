import React from "react";
import { storiesOf } from "@storybook/react";
import Cesium from "cesium";

import Viewer from "../Viewer";
import TimeDynamicPointCloud from "../TimeDynamicPointCloud";
import { CesiumElementHolder } from "../core/CesiumComponent";

import point0 from "./assets/0.pnts";
import point1 from "./assets/1.pnts";
import point2 from "./assets/2.pnts";
import point3 from "./assets/3.pnts";
import point4 from "./assets/4.pnts";

const uris = [point0, point1, point2, point3, point4];
const dates = [
  "2018-07-19T15:18:00Z",
  "2018-07-19T15:18:00.5Z",
  "2018-07-19T15:18:01Z",
  "2018-07-19T15:18:01.5Z",
  "2018-07-19T15:18:02Z",
  "2018-07-19T15:18:02.5Z",
];
const start = Cesium.JulianDate.fromIso8601(dates[0]);
const stop = Cesium.JulianDate.fromIso8601(dates[dates.length - 1]);

const intervals = (Cesium.TimeIntervalCollection as any).fromIso8601DateArray({
  iso8601Dates: dates,
  dataCallback: (interval: Cesium.TimeInterval, index: number) => ({
    uri: uris[index],
  }),
});

const style = new (Cesium as any).Cesium3DTileStyle({
  pointSize: 5,
});

export default () => {
  storiesOf("TimeDynamicPointCloud", module).add("default", () => {
    const viewer = React.createRef<CesiumElementHolder<Cesium.Viewer>>();
    const onReady = (p: any) => {
      if (viewer.current !== null && viewer.current.cesiumElement) {
        viewer.current.cesiumElement.zoomTo(p, new Cesium.HeadingPitchRange(0.0, -0.5, 50.0));
      }
    };
    return (
      <Viewer full shouldAnimate ref={viewer}>
        {/* <Clock
          startTime={start}
          currentTime={start}
          stopTime={stop}
          clockRange={Cesium.ClockRange.LOOP_STOP} /> */}
        <TimeDynamicPointCloud intervals={intervals} style={style} onReady={onReady} />
      </Viewer>
    );
  });
};
