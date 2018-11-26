import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";
import Cesium, { CesiumWidget } from "cesium";

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
export interface ClockCesiumEventProps {
  onStop?: (clock: Cesium.Clock) => void;
  onTick?: (clock: Cesium.Clock) => void;
}
const cesiumEventProps: EventkeyMap<Cesium.Globe, keyof ClockCesiumEventProps> = {
  onStop: "onStop",
  onTick: "onTick",
};

export interface ClockProps extends ClockCesiumProps, ClockCesiumEventProps {}

export interface ClockContext {
  cesiumWidget: CesiumWidget;
}

const cesiumProps: Array<keyof ClockCesiumProps> = [
  "canAnimate",
  "clockRange",
  "clockStep",
  "currentTime",
  "multiplier",
  "shouldAnimate",
  "startTime",
  "stopTime",
];

const Clock = createCesiumComponent<Cesium.Clock, ClockProps, ClockContext>({
  name: "clock",
  create(cprops, props, context) {
    return context.cesiumWidget.clock;
  },
  cesiumProps,
  cesiumEventProps,
  setCesiumPropsAfterCreate: true,
});

export default Clock;
