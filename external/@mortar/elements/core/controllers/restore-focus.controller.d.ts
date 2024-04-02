import { ReactiveControllerHost } from 'lit';
export declare class RestoreFocusController {
    private host;
    private restoreFocusTarget;
    constructor(host: ReactiveControllerHost & Element);
    hostConnected(): void;
    /**
     * Sets the target element that will be focused when restoreFocus is requests.
     * If not defined, the `document.activeElement` will be used instead.
     */
    setRestoreFocusTarget(restoreFocusTarget: Element | void): void;
    /** Attempts to restor focus to the restoreFocus target */
    restoreFocus(preventScroll?: boolean): void;
}
