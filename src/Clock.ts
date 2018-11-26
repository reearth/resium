import createCesiumComponent from "./core/CesiumComponent";
import Cesium, { CesiumWidget } from "cesium";

export interface ClockCesiumProps {
  canAnimate?: boolean;
  clockRange?: Cesium.ClockRange;
  clockStep?: Cesium.ClockStep;
  currentTime?: Cesium.JulianDate;
  multiplier?: number;
  onStop?: Cesium.Event;
  onTick?: Cesium.Event;
  shouldAnimate?: boolean;
  startTime?: Cesium.JulianDate;
  stopTime?: Cesium.JulianDate;
}

/* tslint:disable-next-line: no-empty-interface */
export interface ClockProps extends ClockCesiumProps {}

/* tslint:disable-next-line: no-empty-interface */
export interface ClockContext {
  cesiumWidget: CesiumWidget;
}

const cesiumProps: Array<keyof ClockCesiumProps> = [
  "canAnimate",
  "clockRange",
  "clockStep",
  "currentTime",
  "multiplier",
  "onStop",
  "onTick",
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
  setCesiumPropsAfterCreate: true,
});

export default Clock;
