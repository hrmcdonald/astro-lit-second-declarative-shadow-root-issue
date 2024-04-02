import { MteElement, MteElementParts, StyleMap } from '../../core';
import '../divider';
import { MteHeader } from '../composition';
import { DrawerPreset } from './drawer.presets';
import '../../utilities/overlay-trigger';
export interface MteDrawerParts extends MteElementParts {
    /** Drawer content container */
    content?: StyleMap;
    /** Drawer header slotted content container */
    header?: StyleMap;
    /** Drawer footer slotted content container */
    footer?: StyleMap;
}
export type MteDrawerPosition = 'top' | 'right' | 'bottom' | 'left';
declare const MteDrawer_base: import("../../core").Constructor<import("../../core").OverlayInterface> & import("../../core").Constructor<import("../../core").InverseInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<DrawerPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteDrawerParts>> & typeof MteElement;
/**
 * @slot - Default slot for drawer content
 * @slot header - Slot used to insert header content
 * @slot footer - Slot used to insert footer content
 *
 * @csspart header - Element that wraps the header slot
 * @csspart content - Element that wraps the default slot
 * @csspart footer - Element that wraps the footer slot
 *
 * @overlay
 */
export declare class MteDrawer extends MteDrawer_base {
    static styles: import("lit").CSSResult[];
    static enabledWarnings: any[];
    private internalId;
    protected instanceStyleSelectorRoot: string;
    /** Where the drawer should be positioned in relation to its parent */
    position: MteDrawerPosition;
    /** The size of the drawer in units (e.g. 250px) */
    size: string;
    /** Whether the drawer should close when clicked outside */
    withoutCloseOnClickOutside: boolean;
    /** Whether the drawer should close when escape is pressed */
    withoutCloseOnEscape: boolean;
    /** Whether the drawer has a divider after the header or not */
    withoutHeaderDivider: boolean;
    /** Whether the drawer has a divider before the footer or not */
    withoutFooterDivider: boolean;
    /** Accessibility attribute added to tell windows underneath the current dialog are not available for interaction */
    ariaModal: 'true' | 'false';
    /** Accessibility attribute that gives the dialog an accessible description by referring to the dialog content that describes the primary message or purpose of the dialog */
    ariaDescribedBy: any;
    /** Accessibility attribute that identifies the type of element */
    role: 'dialog' | string;
    /** The id of the drawer. Used to associate the drawer with different aria attributes */
    id: string;
    /** Accessibility attribute that gives the dialog an accessible name by referring to the element that provides the dialog title */
    ariaLabelledBy: string;
    /** The transition duration for opening/closing this overlay in milliseconds */
    animationDuration: number;
    private detectChildCloseController;
    triggerOn: string;
    headerElements: Array<HTMLElement | MteHeader>;
    /** The first element currently in the header slot */
    private get headerElementRef();
    private set headerElementRef(value);
    private _headerElementRef?;
    private handleOverlayChange;
    firstUpdated(changedProps: any): void;
    protected updateInstanceStyles(changedProps: any): void;
    /** Opens the drawer */
    open(): Promise<void>;
    /** Closes the drawer */
    close(): Promise<void>;
    /** Toggles the drawer open and closed */
    toggle(): Promise<void>;
    private handleHeaderSlotChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-drawer': MteDrawer;
    }
}
export {};
