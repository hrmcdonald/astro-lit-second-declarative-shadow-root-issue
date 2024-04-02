import { LitElement } from 'lit';
import { MteElement, MteElementParts, MteOverlayPosition, PortalAdapter, EventEmitter, MteOverlayPlacement, ResponsiveValue, UnitValue, StyleMap } from '../../core';
import { OverlayElement } from '../../utilities/overlay-trigger';
import '../divider';
import { MteMenuSelectDetail } from './menu.types';
export interface MteMenuParts extends MteElementParts {
    /** The menu panel overlay */
    menu?: StyleMap;
    /** The header content container */
    header?: StyleMap;
}
declare const MteMenu_base: import("../../core").Constructor<import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteMenuParts>> & typeof MteElement;
/**
 * @dependency mte-overlay-trigger
 *
 * @slot - Default slotted content
 * @slot header - Slot used to insert header content
 *
 * @csspart menu - The menu panel overlay
 * @csspart header - The header content container
 */
export declare class MteMenu extends MteMenu_base implements OverlayElement {
    static styles: import("lit").CSSResult[];
    /** Default unique ID for this menu. Used for the `aria-describedby` value of this menus target. */
    id: string;
    /** Position of the menu relative to the parent element */
    position: MteOverlayPosition;
    /** Aligns the menu relative to the parent element */
    placement: MteOverlayPlacement;
    /** Determines what will trigger the popover. Defaults to `click`. */
    triggerOn: 'click' | 'none';
    /** Whether or not the popover should close when the user clicks outside of it. */
    withoutCloseOnClickOutside: boolean;
    /** Whether or not the popover should close when the escape key is pressed. */
    withoutCloseOnEscape: boolean;
    /** Prevents this menu from "portalling" itself to the overlay stack at the root of the body on open. */
    withoutPortal: boolean;
    /** Accessibility attribute added whenever the popover is closed. */
    ariaHidden: string;
    /** Accessibility attribute set automatically to the id of any content in the header slot or the menu button */
    ariaLabelledBy: any;
    /** Accessibility attribute set to `menu`. */
    role: string;
    /** Sets the `max-height` css property on this menu panel*/
    maxh?: ResponsiveValue<UnitValue>;
    /** Sets the `min-width` css property on this menu panel*/
    minw?: ResponsiveValue<UnitValue>;
    /** @hidden */
    isNestedMenu: boolean;
    /** The transition duration for opening/closing this overlay in milliseconds */
    animationDuration: number;
    /** Spacing in px between the menu panel and the overlay trigger */
    offset: number;
    /**
     * The element this menu will render relative to in the window. ARIA attributes
     * on this element will be updated when set. An `mte-overlay-trigger` will assign
     * this property for you when a menu is placed in its `overlay` slot.
     */
    targetElement?: MteElement | LitElement | HTMLElement | Element | null | undefined;
    /**
     * Adapter for portal DOM operation that can be supplemented for external-framework integrations.
     * Notably-leveraged by overlays in our generated react wrappers.
     *
     * @ignore
     */
    portalAdapter: PortalAdapter;
    /** Tracks internal opened state. */
    opened: boolean;
    /** Whether or not the menu is visible */
    private visible;
    /** Where the popover is currently rendered if open */
    private renderedPosition;
    hasHeader: boolean;
    /** Emitted when a menu item is selected */
    _onSelect: EventEmitter<MteMenuSelectDetail>;
    /** Emitted when the menu is opened */
    _onOpen: EventEmitter<void>;
    /** Emitted when the menu is opened */
    _onClose: EventEmitter<void>;
    /** Emitted when the menu trigger event type is changed */
    _onTriggerChange: EventEmitter<typeof this.triggerOn>;
    /**
     * Communicates to parent when a nested menu is opened
     * @hidden
     */
    _proxyNestedMenuOpened: EventEmitter<MteMenu>;
    /**
     * Communicates to parent when a nested menu is opened
     * @hidden
     */
    _proxyNestedMenuGlobalClosed: EventEmitter<MteMenu>;
    menuElem: HTMLElement;
    headerElems: HTMLElement[];
    menuItemElems: HTMLElement[];
    private preventNextFocusRestoration;
    /** Subscription callback to clear hover listeners */
    private cleanupUpdateListeners?;
    /** Animation control refs */
    private openAnimationRef?;
    private closeAnimationRef?;
    private portalController;
    private restoreFocusController;
    private clickOutsideController;
    private slotController;
    /** The first element currently in the header slot */
    private get headerElementRef();
    private set headerElementRef(value);
    private _headerElementRef?;
    private handleTriggerOnChange;
    private handleA11yChange;
    private handleTargetChange;
    private handleDisabledChange;
    private handleWithoutCloseOnEscape;
    private handlePositionChange;
    constructor();
    protected firstUpdated(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /** Toggles the menu between open and closed states */
    toggle(): Promise<void>;
    /** Opens the menu with any defined delays */
    open(): Promise<void>;
    /** Closes the tooltip with any defined delays */
    close(): Promise<void>;
    handleGlobalKeyDown(event: KeyboardEvent): void;
    private handleKeyDown;
    private handleMouseDown;
    /** Resets tabindexes on slotted menu-items */
    private initSelection;
    private isMenuItem;
    /** Returns all slotted menu items */
    private getAllItems;
    /** Returns the current active/focused menu item */
    private getCurrentItem;
    /** Marks a menu item as the current active/focused item */
    private setCurrentItem;
    /** Syncs the menus id to all trigger elements */
    private updateTargetAriaIds;
    /** Triggers a floating-ui position recompute */
    private updatePosition;
    /** SlotObserverMixin doesn't work here for some reason??? */
    private handleHeaderSlotChange;
    /** Proxies an event from a nested menu item up to any parent menus */
    private handleNestedMenuOpened;
    /** Listens for a child menu item to be clicked */
    private handleMenuItemClicked;
    private handleCloseOnClickOutside;
    protected updateInstanceStyles(changedProps: Map<string, any>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-menu': MteMenu;
    }
}
export {};
