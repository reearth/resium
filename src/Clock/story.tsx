import React from "react";
import { storiesOf } from "@storybook/react";
import { JulianDate, ClockRange, ClockStep } from "cesium";

import Viewer from "../Viewer";
import Clock from "./Clock";
import Globe from "../Globe";

storiesOf("Clock", module).add("Basic", () => (
  <Viewer full>
    <Globe enableLighting />
    <Clock
      startTime={JulianDate.fromIso8601("2013-12-25")}
      currentTime={JulianDate.fromIso8601("2013-12-25")}
      stopTime={JulianDate.fromIso8601("2013-12-26")}
      clockRange={ClockRange.LOOP_STOP} // loop when we hit the end time
      clockStep={ClockStep.SYSTEM_CLOCK_MULTIPLIER}
      multiplier={4000} // how much time to advance each tick
      shouldAnimate // Animation on by default
    />
  </Viewer>
));
