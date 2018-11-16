import mockCesiumElement from "./helper";
import { Event } from "cesium";

export default mockCesiumElement({
  definitionChanged: new Event(),
});
