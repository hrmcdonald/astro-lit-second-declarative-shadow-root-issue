import { MteElement, MteElementParts, StyleMap } from '../../core';
import { NavSidebarPreset } from './nav.presets';
import '../composition';
import './nav-icon-button.element';
import { PropertyValueMap } from 'lit';
export interface MteNavSidebarParts extends MteElementParts {
    /** Element that wraps the header slot */
    header?: StyleMap;
    /** Element that wraps the default slot */
    content?: StyleMap;
    /** Element that wraps the footer slot */
    footer?: StyleMap;
}
declare const MteNavSidebar_base: import("../../core").Constructor<import("../../core").InverseInterface> & import("../../core").Constructor<import("../../core").OverlayInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<NavSidebarPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteNavSidebarParts>> & typeof MteElement;
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
export declare class MteNavSidebar extends MteNavSidebar_base {
    static styles: import("lit").CSSResult[];
    static enabledWarnings: any[];
    private internalId;
    protected instanceStyleSelectorRoot: string;
    /** Whether the aside has a divider after the header or not */
    withoutHeaderDivider: boolean;
    /** Whether the aside has a divider before the footer or not */
    withoutFooterDivider: boolean;
    /** Given the `role` of complementary by default because the sidebar serves as an aside */
    role: string;
    /** Defaults to `Primary Navigation` */
    ariaLabel: string;
    /** Accessability attribute that gives the dialog an accessible description by referring to the content that describes the primary message or purpose of the aside */
    ariaDescribedBy: any;
    /** Accessability attribute that gives the dialog an accessible description by referring to the content that describes the primary message or purpose of the aside */
    ariaHidden: string;
    /** The id of the aside. Used to associate the aside with different aria attributes */
    id: string;
    /** @ignore */
    position: 'left' | 'right';
    /**
     * The element this drawer will render relative to in the window. ARIA attributes
     * on this element will be updated when set. An `mte-overlay-trigger` will assign
     * this property for you when a drawer is placed in its `overlay` slot.
     */
    targetElement: Element | HTMLElement;
    /** Hide the header menu button until the .focus the viewport is within the transition breakpoint */
    hideUntilTransition: boolean;
    /** The label given to the sidebar close button */
    closeAriaLabel: string;
    /**
     * Whether or not the aside is currently open. Use preferSidebar to determine initial value
     * @ignore
     */
    opened: boolean;
    /**
     * Used for styling purposes only
     * @ignore
     */
    headerInverse: boolean;
    /**
     * Used for styling purposes only
     * @ignore
     */
    beforeInit: boolean;
    /**
     * Used for styling purposes only
     * @ignore
     */
    preferSidebar: 'opened' | 'closed';
    /** The transition duration for opening/closing this overlay in milliseconds. Readonly. */
    get animationDuration(): number;
    set animationDuration(animationDuration: number);
    /** Weather or not the sidebar is in 'push' or 'over' mode */
    overlayMode?: 'push' | 'over';
    headerHeight: any;
    mobileBreakpoint: string;
    size?: number | string;
    closeButtonElem: HTMLElement;
    panelElem: HTMLElement;
    /** @ignore */
    hasOpenedOnce: boolean;
    /** @ignore */
    passive: boolean;
    private detectChildCloseController;
    private headerElem?;
    private signalStateController;
    private handleTargetChange;
    private handleStateChange;
    private handleSsrChange;
    constructor();
    connectedCallback(): void;
    protected firstUpdated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private initState;
    disconnectedCallback(): void;
    private updateGlobalState;
    protected updateInstanceStyles(changedProps: any): void;
    private updateTriggerAriaAttributes;
    /** Opens the sidebar */
    open(): Promise<void>;
    /** Closes the sidebar */
    close(): Promise<void>;
    /** Toggles the sidebar open and closed */
    toggle(): Promise<void>;
    setOverlayMode(mode?: 'push' | 'over'): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-nav-sidebar': MteNavSidebar;
    }
}
export {};
