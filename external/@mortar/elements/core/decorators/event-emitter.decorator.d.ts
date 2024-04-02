export interface EventOptions {
    /** indicate if event bubbles up through the DOM or not */
    bubbles?: boolean;
    /** indicate if event is cancelable */
    cancelable?: boolean;
    /** indicate if event can bubble across the boundary between the shadow DOM and the light DOM */
    composed?: boolean;
}
export declare class EventEmitter<T> {
    private target;
    private eventName;
    constructor(target: HTMLElement, eventName: string);
    /** Dispatches the custom event. If the event is `cancelable` and is prevented this will return false. */
    emit(value: T, options?: EventOptions): boolean;
}
export declare function eventEmitter(): (protoOrDescriptor: any, name: string) => any;
