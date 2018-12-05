import React from "react";
import { storiesOf } from "@storybook/react";

import Cesium from "cesium";
import Viewer from "../Viewer";
import Clock from "../Clock";
import Globe from "../Globe";

export default () => {
  storiesOf("Clock", module).add("default", () => (
    <Viewer full>
      <Globe enableLighting />
      <Clock
        startTime={Cesium.JulianDate.fromIso8601("2013-12-25")}
        currentTime={Cesium.JulianDate.fromIso8601("2013-12-25")}
        stopTime={Cesium.JulianDate.fromIso8601("2013-12-26")}
        clockRange={Cesium.ClockRange.LOOP_STOP} // loop when we hit the end time
        clockStep={Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER}
        multiplier={4000} // how much time to advance each tick
        shouldAnimate // Animation on by default
      />
    </Viewer>
  ));
};
