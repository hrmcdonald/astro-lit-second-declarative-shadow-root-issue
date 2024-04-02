import { LitElement } from 'lit';
import { MteElement, MteElementParts, StyleMap } from '../../core';
import '../divider';
import { AsidePreset } from './aside.presets';
export interface MteAsideParts extends MteElementParts {
    /** Aside content container */
    content?: StyleMap;
    /** Aside header slotted content container */
    header?: StyleMap;
    /** Aside footer slotted content container */
    footer?: StyleMap;
}
declare const MteAside_base: import("../../core").Constructor<import("../../core").OverlayInterface> & import("../../core").Constructor<import("../../core").InverseInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<AsidePreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteAsideParts>> & typeof MteElement;
/**
 * @slot - Default slot for aside content
 * @slot header - Slot used to insert header content
 * @slot footer - Slot used to insert footer content
 *
 * @csspart header - Element that wraps the header slot
 * @csspart content - Element that wraps the default slot
 * @csspart footer - Element that wraps the footer slot
 *
 * @overlay
 */
export declare class MteAside extends MteAside_base {
    static styles: import("lit").CSSResult[];
    private internalId;
    protected instanceStyleSelectorRoot: string;
    /** Whether the aside should include a focus trap */
    withFocusTrap: boolean;
    /** Whether the aside should close when clicked outside */
    withCloseOnClickOutside: boolean;
    /** Whether the aside should close when escape is pressed */
    withCloseOnEscape: boolean;
    /** Whether the aside has a divider after the header or not */
    withoutHeaderDivider: boolean;
    /** Whether the aside has a divider before the footer or not */
    withoutFooterDivider: boolean;
    /** Whether the body should scroll or not when the aside is opened */
    withoutBodyScroll: boolean;
    /** Accessibility attribute that gives the dialog an accessible description by referring to the content that describes the primary message or purpose of the aside */
    ariaDescribedBy: any;
    /** Accessibility attribute that identifies the type of element */
    role: 'complementary' | string;
    /** The id of the aside. Used to associate the aside with different aria attributes */
    id: string;
    /** Accessibility attribute that gives the dialog an accessible name by referring to the element that provides the dialog title */
    ariaLabelledBy: string;
    /** The transition duration for opening/closing this overlay in milliseconds. Readonly. */
    get animationDuration(): number;
    set animationDuration(animationDuration: number);
    /**
     * The element this drawer will render relative to in the window. ARIA attributes
     * on this element will be updated when set. An `mte-overlay-trigger` will assign
     * this property for you when a drawer is placed in its `overlay` slot.
     */
    targetElement: MteElement | LitElement | HTMLElement | Element | null | undefined;
    private detectChildCloseController;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleOverlayOptionsChange;
    private handleTargetChange;
    private updateTriggerAriaAttributes;
    /** Opens the aside */
    open(): Promise<void>;
    /** Closes the aside */
    close(): Promise<void>;
    /** Toggles the aside open and closed */
    toggle(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-aside': MteAside;
    }
}
export {};
