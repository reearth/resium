import { Meta, StoryObj } from "@storybook/react";
import { JulianDate, ClockRange, ClockStep, Viewer as CesiumViewer } from "cesium";
import { useEffect, useMemo, useRef } from "react";

import { CesiumComponentRef } from "../core";
import Globe from "../Globe";
import Viewer from "../Viewer";

import Clock from "./Clock";

type Story = StoryObj<typeof Clock>;

export default {
  title: "Clock",
  component: Clock,
} as Meta;

export const Basic: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const startTime = useMemo(() => JulianDate.fromIso8601("2013-12-25"), []);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const stopTime = useMemo(() => JulianDate.fromIso8601("2013-12-26"), []);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      // Zoom the bottom Timeline widget to the clock's time range so it is bound to the clock.
      ref.current?.cesiumElement?.timeline?.zoomTo(startTime, stopTime);
    }, [startTime, stopTime]);

    return (
      <Viewer full ref={ref}>
        <Globe enableLighting />
        <Clock
          startTime={startTime}
          currentTime={startTime}
          stopTime={stopTime}
          clockRange={ClockRange.LOOP_STOP} // loop when we hit the end time
          clockStep={ClockStep.SYSTEM_CLOCK_MULTIPLIER}
          multiplier={4000} // how much time to advance each tick
          shouldAnimate // Animation on by default
        />
      </Viewer>
    );
  },
};
