export default class ScreenSpaceEventHandler {
  public getInputAction = jest.fn((type: Cesium.ScreenSpaceEventType) => {
    return this.events.get(type);
  });
  public setInputAction = jest.fn((action: any, type: Cesium.ScreenSpaceEventType) => {
    this.events.set(type, action);
  });
  public removeInputAction = jest.fn((type: Cesium.ScreenSpaceEventType) => {
    this.events.delete(type);
  });
  public destroy = jest.fn(() => {
    this.destroyed = true;
  });
  public isDestroyed = jest.fn(() => this.destroyed);
  private events = new Map<Cesium.ScreenSpaceEventType, any>();
  private destroyed = false;
}
