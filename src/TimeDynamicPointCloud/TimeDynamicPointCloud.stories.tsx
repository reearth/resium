import { Meta, StoryObj } from "@storybook/react";
import {
  HeadingPitchRange,
  Cesium3DTileStyle,
  TimeIntervalCollection,
  TimeInterval,
  JulianDate,
  ClockRange,
  Viewer as CesiumViewer,
} from "cesium";
import { useRef } from "react";

import Clock from "../Clock";
import { CesiumComponentRef } from "../core";
import { events } from "../core/storybook";
import Viewer from "../Viewer";

import TimeDynamicPointCloud from "./TimeDynamicPointCloud";

type Story = StoryObj<typeof TimeDynamicPointCloud>;

export default {
  title: "TimeDynamicPointCloud",
  component: TimeDynamicPointCloud,
} as Meta;

const uris = [
  "pointcloud/0.pnts",
  "pointcloud/1.pnts",
  "pointcloud/2.pnts",
  "pointcloud/3.pnts",
  "pointcloud/4.pnts",
];
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
  dataCallback: (_interval: TimeInterval, index: number) => ({
    uri: uris[index],
  }),
});

const style = new Cesium3DTileStyle({
  pointSize: 5,
});

export const Basic: Story = {
  args: { show: true },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
          {...args}
          intervals={intervals}
          style={style}
          onReady={p => {
            ref.current?.cesiumElement?.zoomTo(p, new HeadingPitchRange(0.0, -0.5, 50.0));
          }}
          {...events}
        />
      </Viewer>
    );
  },
};
