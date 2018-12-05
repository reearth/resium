declare type EventFunc = (...args: any[]) => any;
export interface Events {
    [key: string]: (...args: any[]) => any;
}
export declare const attachEvents: (target: unknown, events: Events) => void;
export declare const detachEvents: (target: unknown, events: Events) => void;
export declare const updateEvents: (target: unknown, prevEvents: Events, newEvents: Events) => void;
export declare const getEventProps: (eventNames: string[], props: Events) => {
    [key: string]: EventFunc;
};
export {};
