import { ReactiveControllerHost } from 'lit';
import { Signal, SignalValues } from '../utilities';
import { MteElement } from '../base-classes';
export interface SignalStateControllerOptions {
    waitUntilFirstUpdate?: boolean;
    on?: 'server' | 'client' | 'both';
}
/**
 * Binds an element to a signal. The element will now request an update
 * any time the signal emits a new value. If provided the callback will
 * be called before the update is requested.
 */
export declare class SignalStateController<S extends [Signal<T1>] | [Signal<T1>, Signal<T2>] | [Signal<T1>, Signal<T2>, Signal<T3>] | [Signal<T1>, Signal<T2>, Signal<T3>, Signal<T4>] | [Signal<T1>, Signal<T2>, Signal<T3>, Signal<T4>, Signal<T5>] | [Signal<T1>, Signal<T2>, Signal<T3>, Signal<T4>, Signal<T5>, Signal<T6>] | [Signal<T1>, Signal<T2>, Signal<T3>, Signal<T4>, Signal<T5>, Signal<T6>, Signal<T7>] | [
    Signal<T1>,
    Signal<T2>,
    Signal<T3>,
    Signal<T4>,
    Signal<T5>,
    Signal<T6>,
    Signal<T7>,
    Signal<T8>
], T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any, T7 = any, T8 = any> {
    private host;
    private signals;
    private callback?;
    private options?;
    constructor(host: ReactiveControllerHost & MteElement, signals: S, callback?: (state: SignalValues<S>) => void, options?: SignalStateControllerOptions);
    hostConnected(): void;
    private initSub;
}
