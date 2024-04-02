import { MteElement, MteElementParts, StyleMap, EventEmitter } from '../../core';
import '../icon';
import '../button';
import { MteToastCloseDetail } from './toast.types';
export interface MteToastParts extends MteElementParts {
    /** The title for the toast notification */
    title?: StyleMap;
    /** The message for the toast notification */
    message?: StyleMap;
    /** The icon for the toast notification */
    icon?: StyleMap;
}
export interface MteToastAction {
    /** The label for the action button */
    label: string;
    /** A function to call when clicking the action */
    onClick: () => any;
}
declare const MteToast_base: import("../../core").Constructor<import("../../core").ColorInterface<import("../../core").StatusPalette>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteToastParts>> & typeof MteElement;
/**
 * @dependency mte-icon
 * @dependency mte-button
 * @dependency mte-icon-button
 *
 * @slot - The toast's message content.
 * @slot title - The toast's title content
 * @slot icon -The icon to render within the toast
 * @slot
 *
 * @csspart title - The title for the toast notification
 * @csspart message - The message for the toast notification
 * @csspart icon - The icon for the toast notification
 */
export declare class MteToast extends MteToast_base {
    static styles: import("lit").CSSResult[];
    /** The ID for the toast notification. */
    id: string;
    /** The status of the alert. */
    status?: 'primary' | 'success' | 'warning' | 'danger';
    /** A message to display within the toast notification. */
    message: string;
    /** An icon to display within the toast notification. Overrides the status icon if provided. */
    icon?: string;
    /** Hides the icon. */
    withoutIcon?: boolean;
    /** Whether the close button should be shown or not. */
    withoutClose?: boolean;
    /** An aria label to provide to the close button. */
    closeLabel?: string;
    /** An action to be rendered within a toast. Accepts a label and onClick property. */
    action?: MteToastAction | null;
    /** The role of the toast notification. */
    role: any;
    /** A label to provide to the toast if its role is dialog  */
    ariaLabel: any;
    /** Emitted when the close button is clicked. */
    _onCloseClick: EventEmitter<MteToastCloseDetail>;
    lastFocusedElement: any;
    disconnectedCallback(): void;
    onActionsUpdate(): Promise<void>;
    private handleCloseClick;
    get isInteractive(): boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-toast': MteToast;
    }
}
export {};
