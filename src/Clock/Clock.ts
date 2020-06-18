import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
} from "../core";
import { ClockRange, ClockStep, JulianDate, Clock as CesiumClock } from "cesium";

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

const cesiumEventProps: EventkeyMap<CesiumClock, ClockCesiumEvents> = {
  onStop: "onStop",
  onTick: "onTick",
};

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

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumClock,
  typeof cesiumProps | typeof cesiumEventProps[keyof typeof cesiumEventProps]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const Clock = createCesiumComponent<CesiumClock, ClockProps>({
  name: "Clock",
  create: ctx => ctx.cesiumWidget?.clock,
  cesiumProps,
  cesiumEventProps,
  setCesiumPropsAfterCreate: true,
});

export default Clock;
