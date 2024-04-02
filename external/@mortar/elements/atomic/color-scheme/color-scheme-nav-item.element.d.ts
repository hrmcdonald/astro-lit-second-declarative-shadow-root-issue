import { MteElement, MteElementParts, StyleMap, MteColorScheme } from '../../core';
import '../icon';
import './color-scheme-menu.element';
import { MteColorSchemeMenu } from './color-scheme-menu.element';
export interface MteColorSchemeNavItemParts extends MteElementParts {
    /** The leading icon element/slot */
    prefix?: StyleMap;
    /** The button rendered within the list button */
    button?: StyleMap;
    /** The button's label text */
    label?: StyleMap;
}
declare const MteColorSchemeNavItem_base: import("../../core").Constructor<import("../../core").StylePartsInterface<MteColorSchemeNavItemParts>> & typeof MteElement;
/**
 * @dependency mte-icon
 * @dependency mte-menu
 * @dependency mte-overlay-trigger
 *
 * @csspart prefix - The leading icon element/slot
 * @csspart button - The button rendered within the list button
 * @csspart label - The button's label text
 */
export declare class MteColorSchemeNavItem extends MteColorSchemeNavItem_base {
    static styles: import("lit").CSSResult[];
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode;
    };
    /** Disables the button or anchor */
    disabled: boolean;
    /** Role is set to `listitem` by default. Should not be changed unless not used within an mte-nav-item-group. */
    role: string;
    /** The color scheme to default to (This will adjust the colorScheme globally) */
    colorScheme: MteColorScheme;
    /** Where to cache color scheme changes to/from (This will adjust the colorScheme caching globally) */
    cacheTo: 'localStorage' | 'sessionStorage' | 'none';
    label: string;
    buttonElement?: HTMLElement;
    menuElement?: MteColorSchemeMenu;
    private handleColorSchemeChange;
    private handleCacheChange;
    /** Captures certain click events to prevent interactions if disabled/iref */
    private handleButtonClick;
    toggleColorScheme(): void;
    /** Proxy focus calls */
    focus(options: FocusOptions): void;
    /** Proxy click calls */
    click(): void;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-color-scheme-nav-item': MteColorSchemeNavItem;
    }
}
export {};
