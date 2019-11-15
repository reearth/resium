import { createCesiumComponent, EventkeyMap } from "../core/component";

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

// Workaround
export interface ResiumClock extends Cesium.Clock {
  onTick: Cesium.Event<[ResiumClock]>;
  onStop: Cesium.Event<[ResiumClock]>;
}

export interface ClockCesiumProps {
  canAnimate?: boolean;
  clockRange?: Cesium.ClockRange;
  clockStep?: Cesium.ClockStep;
  currentTime?: Cesium.JulianDate;
  multiplier?: number;
  shouldAnimate?: boolean;
  startTime?: Cesium.JulianDate;
  stopTime?: Cesium.JulianDate;
}

export interface ClockCesiumEvents {
  onStop?: (clock: ResiumClock) => void;
  onTick?: (clock: ResiumClock) => void;
}

const cesiumEventProps: EventkeyMap<ResiumClock, ClockCesiumEvents> = {
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
  ResiumClock,
  ClockProps,
  {
    cesiumWidget?: Cesium.CesiumWidget;
  }
>({
  name: "Clock",
  create: ctx => ctx.cesiumWidget?.clock as ResiumClock | undefined,
  cesiumProps,
  cesiumEventProps,
  setCesiumPropsAfterCreate: true,
});

export default Clock;
