import React, { useRef } from "react";
import {
  HeadingPitchRange,
  Cesium3DTileStyle,
  TimeIntervalCollection,
  TimeInterval,
  JulianDate,
  ClockRange,
  Viewer as CesiumViewer,
} from "cesium";
import { storiesOf } from "@storybook/react";

import { CesiumComponentRef } from "../core";
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
const start = JulianDate.fromIso8601(dates[0]);
const stop = JulianDate.fromIso8601(dates[dates.length - 1]);

const intervals = TimeIntervalCollection.fromIso8601DateArray({
  iso8601Dates: dates,
  dataCallback: (interval: TimeInterval, index: number) => ({
    uri: uris[index],
  }),
});

const style = new Cesium3DTileStyle({
  pointSize: 5,
});

storiesOf("TimeDynamicPointCloud", module).add("Basic", () => {
  const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
  return (
    <Viewer full shouldAnimate ref={ref}>
      <Clock
        startTime={start}
        currentTime={start}
        stopTime={stop}
        clockRange={ClockRange.LOOP_STOP}
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
