import { MteElement } from '../../core';
import { MteToast } from './toast.element';
import '../../utilities/visually-hidden';
import './toast.element';
interface Timer {
    cancel: () => any;
    pause: () => any;
    resume: () => any;
}
export interface MteToastConfig extends Pick<MteToast, 'message' | 'status' | 'icon' | 'withoutIcon' | 'withoutClose' | 'action' | 'se' | 'sp' | 'closeLabel'> {
    /** The color of notification to show */
    color?: 'primary' | 'success' | 'danger' | 'warning' | null;
    /** The ID for the toast notification. If no ID is provided an ID will be automatically generated.  */
    id?: string;
    /** A function to call when the toast is closed */
    onCloseClick?: (CustomEvent: any) => any;
    /** An aria label to apply to the toast if it is an interactive dialog (i.e. the toast has an action) */
    ariaLabel?: string;
    /** How the toast should announce itself */
    politeness?: 'assertive' | 'polite' | 'off';
    /** How long the toast should be visible for. Does not apply if the toast has an action or has a status of danger. */
    duration?: number | 'auto' | null;
}
interface MteInternalToastConfig extends MteToastConfig {
    timer?: Timer;
}
declare const MteToastContainer_base: import("../../core").Constructor<import("../../core").TabIndexInterface> & import("../../core").Constructor<import("../../core").DisabledInterface> & typeof MteElement;
export declare class MteToastContainer extends MteToastContainer_base {
    connectedCallback(): void;
    private _id;
    private toasts;
    ariaLabel: string;
    /** The tab index for the toast */
    tabIndex: any;
    get id(): string;
    static styles: import("lit").CSSResult[];
    private getAutoDuration;
    /** Adds a toast message to the toast container */
    addToast(toastConfig: MteInternalToastConfig): string;
    /** Removes a toast message from the toast container */
    removeToast(id: string): void;
    /** Pauses the timer on a toast given an ID */
    pauseTimer(id: string): void;
    /** Starts the timer on a toast given an ID */
    startTimer(id: string): void;
    /** Removes all toasts from the toast container */
    removeAllToasts(): void;
    private renderToasts;
    private renderMessages;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-toast-container': MteToastContainer;
    }
}
export {};
