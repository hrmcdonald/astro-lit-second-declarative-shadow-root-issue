import { MteElement, MteElementParts, StyleMap, EventEmitter } from '../../core';
import { AlertPreset } from './alert.presets';
import '../icon';
import '../button';
export interface MteAlertParts extends MteElementParts {
    /** The content container for the alert*/
    content?: StyleMap;
    /** The actions container for the alert */
    actions?: StyleMap;
    /** The icon container for the alert */
    icon?: StyleMap;
}
type Role = 'status' | 'alert' | 'log' | 'none';
type AriaLive = 'off' | 'polite' | 'assertive';
declare const MteAlert_base: import("../../core").Constructor<import("../../core").PresetElementInterface<AlertPreset>> & import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteAlertParts>> & typeof MteElement;
/**
 * @dependency mte-icon
 * @dependency mte-button
 *
 * @slot - Slot for default content. Renders to the right of the icon.
 * @slot icon - Slot for an icon. Renders to the left of the content.
 * @slot actions - Slot to insert alert actions.
 *
 * @csspart actions - The alert's actions slot container element.
 * @csspart content - The alert's content slot container element.
 * @csspart icon - The icon slot container element.
 */
export declare class MteAlert extends MteAlert_base {
    static styles: import("lit").CSSResult[];
    /** The status of the alert */
    status: 'primary' | 'success' | 'warning' | 'danger';
    /** The icon to render within the alert */
    icon: string;
    /**  Whether the icon should be hidden or not */
    hideIcon: boolean;
    /** Icon Library from which to load icon */
    iconLibrary: string;
    /** The type of close button to show in the alert */
    closeType: 'icon' | 'button';
    /** The text or aria label to apply to the close button */
    closeButtonText: string;
    /** Whether the alert should include a close button or not */
    withoutClose: boolean;
    /** The breakpoint to wrap alert actions */
    wrapActionsBreakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    /** Whether the alert should be rendered as a banner component or not */
    banner: boolean;
    /** The role that is applied to the alert element */
    role: Role;
    /** How the screen reader should announce changes to the live region (content) */
    ariaLive: AriaLive;
    /** Whether the alert is currently open or not */
    closed: boolean;
    /** Emitted when the alert is opened */
    _onOpen: EventEmitter<void>;
    /** Emitted when the alert is closed */
    _onClose: EventEmitter<void>;
    private contentVisible;
    open(): void;
    close(): void;
    private onCloseChange;
    firstUpdated(): void;
    protected updateInstanceStyles(changedProps: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-alert': MteAlert;
    }
}
export {};
