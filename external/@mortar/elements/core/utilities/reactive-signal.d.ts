/**
 * NOTE:
 *
 * This file contains implementation for an extremely simple and lightweight
 * reactive solution loosely based on solid-js style signals. It enables basic
 * reactive subscriptions and computed signals of one or more other dependency signals.
 *
 * In its current state, it is not perfect and does not handle all edge cases. For
 * example, if you have multiple layers of computed state with a single dependency
 * shared more than once across those layers, the same change will potentially be
 * emitted twice. Our expectation atm, is that we won't encounter those scenarios
 * in this library.
 */
/** Unsubscribes from value updates. */
export type Unsubscriber = () => void;
export interface Signal<T> {
    /** Get the current value */
    get(): T;
    /** Set reactive value */
    set(value: T): any;
    /** Update reactive value using callback */
    update(fn: (value: T) => T): any;
    /** Subscribe to reactive value changes */
    subscribe(fn: (value: T, unsubscribe?: Unsubscriber) => void): Unsubscriber;
}
/** Create a signal that allows both updating and reading by getter or subscription. */
export declare function signal<T>(value?: T): Signal<T>;
/** One or more `Signal`s */
type Signals = Signal<any> | [Signal<any>, ...Array<Signal<any>>] | Signal<any>[];
/** One or more values from signals */
export type SignalValues<T> = T extends Signal<infer U> ? U : {
    [K in keyof T]: T[K] extends Signal<infer U> ? U : never;
};
/** Create a new computed signal from one or more signal dependencies */
export declare function computed<D extends Signals, T>(dependencies: D, fn: (values: SignalValues<D>) => T): Signal<T>;
/** Create a new computed signal from one or more signal dependencies */
export declare function computed<D extends Signals, T>(dependencies: D, fn?: (values: SignalValues<D>, set?: (value: any) => void) => T): Signal<unknown>;
export {};
