import { LitElement } from 'lit';
import { MteElement, MteElementParts, MteOverlayPlacement, MteOverlayPosition, StyleMap, EventEmitter, PortalAdapter } from '../../core';
import { OverlayElement } from '../../utilities/overlay-trigger';
export interface MteTooltipParts extends MteElementParts {
    /** The tooltip container element */
    tooltip?: StyleMap;
    /** The tooltip arrow */
    arrow?: StyleMap;
}
declare const MteTooltip_base: import("../../core").Constructor<import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteTooltipParts>> & typeof MteElement;
/**
 * @dependency mte-overlay-trigger
 *
 * @slot - Tooltip content
 *
 * @overlay
 */
export declare class MteTooltip extends MteTooltip_base implements OverlayElement {
    static styles: import("lit").CSSResult[];
    /** Default unique ID for this tooltip. Used for the `aria-describedby` value of this tooltips target. */
    id: string;
    /** Position of the tooltip relative to the parent element */
    position: MteOverlayPosition;
    /** Aligns the tooltip relative to the parent element */
    placement: MteOverlayPlacement;
    /** The default delay in ms before opening the tooltip after open is called */
    openDelay: number;
    /** The default delay in ms before hiding the tooltip after close is called */
    closeDelay: number;
    /** Tooltip's role should always be tooltip. If you need interactive content use a popover. */
    role: string;
    /** Updates to `true` when the popover is open (and not used as a label) */
    ariaHidden: string;
    /** Updates to `polite` to ensure the tooltip is read in certain browsers */
    ariaLive: string;
    /** Determines what will trigger the tooltip. Defaults to `hover`. */
    triggerOn: 'hover' | 'none';
    /** Prevents this tooltip from "portalling" itself to the overlay stack at the root of the body on open. */
    withoutPortal: boolean;
    /** The transition duration for opening/closing this overlay in milliseconds */
    animationDuration: number;
    /** Applies the tooltip to the target element as an `aria-label` equivalent instead of a tooltip description. */
    asAriaLabel: boolean;
    /** Prevents the tooltip from attempting to assume which elements it should be applied `asAriaLabel` to. */
    withoutAutoLabel: boolean;
    /** Tracks internal opened state. */
    opened: boolean;
    /** Tracks whether this tooltip will assume it should act as a label. */
    assumeLabel: boolean;
    /**
     * The element this tooltip will render relative to in the window. ARIA attributes
     * on this element will be updated when set. An `mte-overlay-trigger` will assign
     * this property for you when a tooltip is placed in its `overlay` slot.
     */
    targetElement?: MteElement | LitElement | HTMLElement | Element | null | undefined;
    /**
     * Adapter for portal DOM operation that can be supplemented for external-framework integrations.
     * Notably-leveraged by overlays in our generated react wrappers.
     *
     * @ignore
     */
    portalAdapter: PortalAdapter;
    /**
     * For internal use only
     *
     * @ignore
     */
    withoutA11y: boolean;
    /** Emitted when the tooltip is opened */
    _onOpen: EventEmitter<void>;
    /** Emitted when the tooltip is opened */
    _onClose: EventEmitter<void>;
    /** Emitted when the tooltip trigger event type is changed */
    _onTriggerChange: EventEmitter<typeof this.triggerOn>;
    /** Whether or not the tooltip is visible */
    private visible;
    /** Where the popover is currently rendered if open */
    private renderedPosition;
    tooltipElem: HTMLElement;
    arrowElem: HTMLElement;
    /** The timeout ID of the timer set to open the tooltip */
    private openTimeoutId?;
    /** The timeout ID of the timer set to close the tooltip */
    private closeTimeoutId?;
    /** spacing in px between the overlay and the target */
    private offset;
    /** Subscription callback to clear hover listeners */
    private cleanupUpdateListeners?;
    /** Animation control refs */
    private openAnimationRef?;
    private closeAnimationRef?;
    private portalController;
    private handleAutoLabelChange;
    private handleTriggerOnChange;
    private handleA11yChange;
    private handleDisabledChange;
    private handlePositionChange;
    constructor();
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    /** Toggles the tooltip between open and closed states */
    toggle(): Promise<void>;
    /** Opens the tooltip with any defined delays */
    open(): Promise<void>;
    /** Closes the tooltip with any defined delays */
    close(): Promise<void>;
    private updateLabelAssumption;
    /** Syncs the tooltips id to all trigger elements */
    private updateTargetAriaIds;
    /** Triggers a floating-ui position recompute */
    private updatePosition;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-tooltip': MteTooltip;
    }
}
export {};
