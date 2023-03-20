import { Clock as CesiumClock, ClockRange, ClockStep, JulianDate } from "cesium";

import { createCesiumComponent, PickCesiumProps } from "../core";

/*
@summary
`Clock` can operate the clock of the Viewer or CesiumWidget.
All properties are applied to single clock.
*/

/*
@scope
Clock can be mounted inside[Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
Clock can not be mounted more than once for each Viewer or CesiumWidget.
*/

export type ClockCesiumProps = PickCesiumProps<CesiumClock, typeof cesiumProps> & {
  canAnimate?: boolean;
  clockRange?: ClockRange;
  clockStep?: ClockStep;
  currentTime?: JulianDate;
  multiplier?: number;
  shouldAnimate?: boolean;
  startTime?: JulianDate;
  stopTime?: JulianDate;
};

export type ClockCesiumEvents = {
  onStop?: (clock: CesiumClock) => void;
  onTick?: (clock: CesiumClock) => void;
};

export const cesiumEventProps = {
  onStop: "onStop",
  onTick: "onTick",
} as const;

export type ClockProps = ClockCesiumProps & ClockCesiumEvents;

const cesiumProps = [
  "canAnimate",
  "clockRange",
  "clockStep",
  "currentTime",
  "multiplier",
  "shouldAnimate",
  "startTime",
  "stopTime",
] as const;

const Clock = createCesiumComponent<CesiumClock, ClockProps>({
  name: "Clock",
  create: ctx => ctx.cesiumWidget?.clock,
  cesiumProps,
  cesiumEventProps,
  setCesiumPropsAfterCreate: true,
});

export default Clock;
