import { createCesiumComponent, EventkeyMap } from "../core/component";
import { ClockRange, ClockStep, JulianDate, Clock as CesiumClock, CesiumWidget } from "cesium";

/*
@summary
`Clock` can operate the clock of the Viewer or CesiumWidget.
All properties are applied to single clock.
*/

/*
@scope
Clock is available inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
Clock can not be used more than once for each Viewer or CesiumWidget.
*/

export interface ClockCesiumProps {
  canAnimate?: boolean;
  clockRange?: ClockRange;
  clockStep?: ClockStep;
  currentTime?: JulianDate;
  multiplier?: number;
  shouldAnimate?: boolean;
  startTime?: JulianDate;
  stopTime?: JulianDate;
}

export interface ClockCesiumEvents {
  onStop?: (clock: CesiumClock) => void;
  onTick?: (clock: CesiumClock) => void;
}

const cesiumEventProps: EventkeyMap<CesiumClock, ClockCesiumEvents> = {
  onStop: "onStop",
  onTick: "onTick",
};

export interface ClockProps extends ClockCesiumProps, ClockCesiumEvents {}

const cesiumProps: (keyof ClockCesiumProps)[] = [
  "canAnimate",
  "clockRange",
  "clockStep",
  "currentTime",
  "multiplier",
  "shouldAnimate",
  "startTime",
  "stopTime",
];

const Clock = createCesiumComponent<
  CesiumClock,
  ClockProps,
  {
    cesiumWidget?: CesiumWidget;
  }
>({
  name: "Clock",
  create: ctx => ctx.cesiumWidget?.clock,
  cesiumProps,
  cesiumEventProps,
  setCesiumPropsAfterCreate: true,
});

export default Clock;
