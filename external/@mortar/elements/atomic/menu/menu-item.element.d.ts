import { EventEmitter, MteElement, MteElementParts, StyleMap } from '../../core';
import '../icon';
import { MteMenu } from './menu.element';
import { MteOverlayTrigger } from '../../utilities/overlay-trigger';
export interface MteMenuItemParts extends MteElementParts {
    /** Container of slotted prefix content */
    prefix?: StyleMap;
    /** Container of slotted menu item label text/content */
    label?: StyleMap;
    /** Container of slotted suffix content */
    suffix?: StyleMap;
}
declare const MteMenuItem_base: import("../../core").Constructor<import("../../core").SlotObserverInterface> & import("../../core").Constructor<import("../../core").ButtonInterface & import("../../core").TabIndexInterface & import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteMenuItemParts>> & typeof MteElement;
/**
 * @dependency mte-icon
 * @dependency mte-overlay-trigger
 *
 * @slot - Default slotted content
 * @slot prefix - Content rendered before the menu item label text
 * @slot suffix - Content rendered after the menu item label text
 * @slot child - Slot designated for a nested mte-menu
 *
 * @csspart prefix - Container of slotted prefix content
 * @csspart label - Container of slotted menu item label text/content
 * @csspart suffix - Container of slotted suffix content
 */
export declare class MteMenuItem extends MteMenuItem_base {
    static styles: import("lit").CSSResult[];
    /** Icon to be rendered for this option */
    icon: string;
    /** Icon to be rendered for suffix of this option */
    suffixIcon: string;
    /** Renders this option with danger styling */
    danger: boolean;
    /** Prevents the menu from closing when this item is selected */
    withoutCloseOnClick: boolean;
    /** Value that will be included in the select event detail if this item is selected */
    value: string;
    /** When set the submenu indicator will display as the `dots-horizontal` icon instead of `menu-right` icon. */
    withAltSubmenuIndicator: boolean;
    /** Accessibility attribute set to `menuitem`. */
    role: string;
    overlayTriggerElem: MteOverlayTrigger;
    childElems: MteMenu[];
    hasNestedMenu: boolean;
    /**
     * Communicates to parent menus this item was clicked
     * @hidden
     */
    _menuItemClicked: EventEmitter<MouseEvent | KeyboardEvent>;
    /**
     * Communicates to parent when a nested menu is opened
     * @hidden
     */
    _nestedMenuOpened: EventEmitter<MteMenu>;
    constructor();
    /** Attempts to open child menu if one exists */
    openChild(): void;
    /** Attempts to close child menu if one exists */
    closeChild(): void;
    connectedCallback(): void;
    /** Handles clicks on this element to alert a parent menu */
    private handleClick;
    /** Proxies menu-item clicked events from nested menus up to parent menus */
    private handleProxyMenuItemClicked;
    /** Proxies open events from nested menu items to alert a parent menu */
    private handleNestedMenuOpen;
    /** Proxies open events from nested menu items of children to alert a parent menu */
    private handleProxyNestedMenuOpen;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-menu-item': MteMenuItem;
    }
}
export {};
