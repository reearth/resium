export default class Event {
  public get numberOfListeners() {
    return this.events.size;
  }

  public addEventListener: (e: (...args: any[]) => void, scope: any) => void = jest.fn(e => {
    this.events.add(e);
  });

  public removeEventListener: (e: (...args: any[]) => void, scope: any) => void = jest.fn(e => {
    this.events.delete(e);
  });

  public raiseEvent: (...args: any[]) => void = jest.fn(args => {
    this.events.forEach(e => {
      e(...args);
    });
  });

  private events: Set<(...args: any[]) => void> = new Set();
}
