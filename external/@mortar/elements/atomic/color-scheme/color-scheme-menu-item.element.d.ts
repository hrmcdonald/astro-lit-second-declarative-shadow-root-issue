import { MteElement, MteElementParts, StyleMap, MteColorScheme, EventEmitter } from '../../core';
import '../icon';
import './color-scheme-menu.element';
import { MteColorSchemeMenu } from './color-scheme-menu.element';
export interface MteColorSchemeMenuItemParts extends MteElementParts {
    /** Container of slotted prefix content */
    prefix?: StyleMap;
    /** Container of slotted menu item label text/content */
    label?: StyleMap;
}
declare const MteColorSchemeMenuItem_base: import("../../core").Constructor<import("../../core").ButtonInterface & import("../../core").TabIndexInterface & import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteColorSchemeMenuItemParts>> & typeof MteElement;
/**
 * @dependency mte-icon
 * @dependency mte-menu
 * @dependency mte-overlay-trigger
 *
 * @csspart prefix - Container of slotted prefix content
 * @csspart label - Container of slotted menu item label text/content
 */
export declare class MteColorSchemeMenuItem extends MteColorSchemeMenuItem_base {
    static styles: import("lit").CSSResult[];
    /** Prevents the menu from closing when this item is selected */
    withoutCloseOnClick: boolean;
    /** Accessibility attribute set to `menuitem`. */
    role: string;
    /** The color scheme to default to (This will adjust the colorScheme globally) */
    colorScheme: MteColorScheme;
    /** Where to cache color scheme changes to/from (This will adjust the colorScheme caching globally) */
    cacheTo: 'localStorage' | 'sessionStorage' | 'none';
    /** When set the submenu indicator will display as the `dots-horizontal` icon instead of `menu-right` icon. */
    withAltSubmenuIndicator: boolean;
    label: string;
    menuElement?: MteColorSchemeMenu;
    hasNestedMenu: boolean;
    /**
     * Communicates to parent menus this item was clicked
     * @hidden
     */
    _menuItemClicked: EventEmitter<MouseEvent | KeyboardEvent>;
    private handleColorSchemeChange;
    private handleCacheChange;
    constructor();
    toggleColorScheme(): void;
    /** Attempts to open child menu if one exists */
    openChild(): void;
    /** Attempts to close child menu if one exists */
    closeChild(): void;
    /** Handles clicks on this element to alert a parent menu */
    private handleClick;
    /** Proxies menu-item clicked events from nested menus up to parent menus */
    private handleProxyMenuItemClicked;
    private linkMenuElements;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-color-scheme-menu-item': MteColorSchemeMenuItem;
    }
}
export {};
