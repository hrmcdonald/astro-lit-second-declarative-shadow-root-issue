declare class _MteHistoryApiService {
    private initialized;
    private changeSignal;
    private prevHref;
    stateChanges(): import("../utilities").Signal<unknown>;
    private forwardApply;
    private init;
}
export declare const MteHistoryApiService: _MteHistoryApiService;
export {};
