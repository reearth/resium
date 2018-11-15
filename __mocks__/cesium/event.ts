export default class Event {
  private events: Set<(...args: any[]) => void> = new Set();

  public addEventListener(e: (...args: any[]) => void, scope: any) {
    this.events.add(e);
  }

  public removeEventListener(e: (...args: any[]) => void, scope: any) {
    this.events.delete(e);
  }

  public raiseEvent(...args: any[]) {
    this.events.forEach(e => {
      e(...args);
    });
  }

  public get numberOfListeners() {
    return this.events.size;
  }
}
