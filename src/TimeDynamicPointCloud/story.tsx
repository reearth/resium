import React, { useRef } from "react";
import { HeadingPitchRange, Cesium3DTileStyle } from "cesium";
import { storiesOf } from "@storybook/react";

import { CesiumComponentRef } from "../core/component";
import Viewer from "../Viewer";
import Clock from "../Clock";
import TimeDynamicPointCloud from "./TimeDynamicPointCloud";

import point0 from "assets/pointcloud/0.pnts";
import point1 from "assets/pointcloud/1.pnts";
import point2 from "assets/pointcloud/2.pnts";
import point3 from "assets/pointcloud/3.pnts";
import point4 from "assets/pointcloud/4.pnts";

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

const style = new Cesium3DTileStyle({
  pointSize: 5,
});

storiesOf("TimeDynamicPointCloud", module).add("Basic", () => {
  const ref = useRef<CesiumComponentRef<Cesium.Viewer>>(null);
  return (
    <Viewer full shouldAnimate ref={ref}>
      <Clock
        startTime={start}
        currentTime={start}
        stopTime={stop}
        clockRange={Cesium.ClockRange.LOOP_STOP}
      />
      <TimeDynamicPointCloud
        intervals={intervals}
        style={style}
        onReady={p => {
          ref.current?.cesiumElement?.zoomTo(p, new HeadingPitchRange(0.0, -0.5, 50.0));
        }}
      />
    </Viewer>
  );
});
