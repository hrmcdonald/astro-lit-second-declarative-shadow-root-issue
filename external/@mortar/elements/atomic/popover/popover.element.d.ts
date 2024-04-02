import { LitElement } from 'lit';
import '../button';
import { MteOverlayPosition, MteElement, StyleMap, EventEmitter, MteOverlayPlacement, MteElementParts, PortalAdapter } from '../../core';
import '../composition';
import { OverlayElement } from '../../utilities/overlay-trigger';
export interface MtePopoverParts extends MteElementParts {
    /** Popover content container (use this for sizing the popover) */
    content?: StyleMap;
    /** Popover header slotted content container */
    header?: StyleMap;
    /** Popover body slotted content container */
    body?: StyleMap;
    /** Popover footer slotted content container */
    footer?: StyleMap;
    /** The popover arrow */
    arrow?: StyleMap;
}
declare const MtePopover_base: import("../../core").Constructor<import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MtePopoverParts>> & typeof MteElement;
/**
 * @dependency mte-overlay-trigger
 * @dependency mte-composition
 *
 * @slot - Popover content
 * @slot header - Slot at the top of the popover for header content
 * @slot footer - Slot at the bottom of the popover for footer content
 *
 * @csspart content - Popover content container (use this for sizing the popover)
 * @csspart header - Popover header title text
 * @csspart body - Popover body content container
 * @csspart arrow - The popover arrow
 *
 * @overlay
 */
export declare class MtePopover extends MtePopover_base implements OverlayElement {
    static styles: import("lit").CSSResult[];
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode;
    };
    /** Default unique ID for this popover. Used for the `aria-describedby` value of this popovers target. */
    id: string;
    /** Position of the popover relative to the parent element */
    position: MteOverlayPosition;
    /** Aligns the popover relative to the parent element */
    placement: MteOverlayPlacement;
    /** The default delay in ms before opening the popover after open is called */
    openDelay: number;
    /** The default delay in ms before closing the popover after close is called */
    closeDelay: number;
    /** Spacing in px between the overlay and the trigger */
    offset: number;
    /** Whether or not the popover arrow should be rendered. */
    withoutArrow: boolean;
    /** Whether or not the popover should trap user focus. */
    withoutFocusTrap: boolean;
    /** Whether or not the popover should close when the user clicks outside of it. */
    withoutCloseOnClickOutside: boolean;
    /** Whether or not the popover should close when the escape key is pressed. */
    withoutCloseOnEscape: boolean;
    /** Prevents this popover from "portaling" itself to the overlay stack at the root of the body on open. */
    withoutPortal: boolean;
    /** Accessibility attribute added whenever the popover is closed. */
    ariaHidden: string;
    /** Updates to `polite` to ensure the tooltip is read in certain browsers */
    ariaLive: string;
    /** Accessibility attribute set automatically to the id of any content in the header slot */
    ariaLabelledBy: any;
    /** Accessibility attribute set automatically to the id of any content in the default slot */
    ariaDescribedBy: any;
    /** Accessibility attribute set to `dialog` when `triggerOn` is "click" or "none" - `tooltip` otherwise. */
    role: 'dialog' | 'tooltip';
    /** Tells the focus trap to focus this popover if it has no focusable children while the focusTrap is enabled. */
    isFocusFallback: boolean;
    /** Required for proper accessibility when there are no focusable children. Do not change. */
    tabindex: string;
    /** Determines what will trigger the popover. Defaults to `click`. */
    triggerOn: 'hover' | 'focus' | 'click' | 'none';
    /**
     * The element this popover will render relative to in the window. ARIA attributes
     * on this element will be updated when set. An `mte-overlay-trigger` will assign
     * this property for you when a tooltip is placed in its `overlay` slot.
     */
    targetElement?: MteElement | LitElement | HTMLElement | Element | null | undefined;
    /** The transition duration for opening/closing this overlay in milliseconds */
    animationDuration: number;
    /**
     * Adapter for portal DOM operation that can be supplemented for external-framework integrations.
     * Notably-leveraged by overlays in our generated react wrappers.
     *
     * @ignore
     */
    portalAdapter: PortalAdapter;
    /** Whether or not the popover is visible */
    private visible;
    private opened;
    /** Where the popover is currently rendered if open */
    private renderedPosition;
    /** Emitted when the popover trigger event type is changed */
    _onTriggerChange: EventEmitter<typeof this.triggerOn>;
    /** Emitted when the popover is opened */
    _onOpen: EventEmitter<void>;
    /** Emitted when the popover is closed */
    _onClose: EventEmitter<void>;
    headerElements: Array<HTMLElement>;
    contentElements: Array<HTMLElement>;
    popoverContainerElem: HTMLElement;
    arrowElem: HTMLElement;
    /** Subscription callback to clear hover listeners */
    private cleanupUpdateListeners;
    /** The timeout ID of the timer set to open the popover */
    private openTimeoutId;
    /** The timeout ID of the timer set to close the popover */
    private closeTimeoutId;
    /** Animation control refs */
    private openAnimationRef?;
    private closeAnimationRef?;
    private focusTrapController;
    private clickOutsideController;
    private portalController;
    private detectChildCloseController;
    private slotController;
    /** The first element currently in the header slot */
    private get headerElementRef();
    private set headerElementRef(value);
    private _headerElementRef?;
    /** The first element currently in the content slot */
    private get contentElementRef();
    private set contentElementRef(value);
    private _contentElementRef;
    /** @ignore */
    hasHeader: boolean;
    /** @ignore */
    hasFooter: boolean;
    private handleTriggerOnChange;
    private handleIdChange;
    private handleDisabledChange;
    private handleWithoutCloseOnEscape;
    private handlePositionChange;
    private handleTargetChange;
    constructor();
    protected firstUpdated(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /** Toggles the popover between openn and hidden states */
    toggle(): Promise<void>;
    /** Opens the popover with any defined delays */
    open(): Promise<void>;
    /** Closes the popover with any defined delays */
    close(): Promise<void>;
    handleKeyDown(event: KeyboardEvent): void;
    /** Triggers a floating-ui position recompute */
    private updatePosition;
    private updateTriggerAriaIds;
    private handleCloseOnClickOutside;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-popover': MtePopover;
    }
}
export {};
