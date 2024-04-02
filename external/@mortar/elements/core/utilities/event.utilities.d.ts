/** Emits a custom event with more convenient defaults. */
export declare function emit(el: HTMLElement, name: string, options?: CustomEventInit): CustomEvent<any>;
/**
 * Waits for a specific event to be emitted from an element.
 * Ignores events that bubble up from child elements.
 */
export declare function waitForEvent(el: HTMLElement, eventName: string): Promise<void>;
