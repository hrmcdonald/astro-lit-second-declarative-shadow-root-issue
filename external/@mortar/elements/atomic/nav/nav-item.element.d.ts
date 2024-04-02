import { MteElement, MteElementParts, StatusPalette, StyleMap, EventEmitter } from '../../core';
import { NavItemPreset } from './nav.presets';
import '../badge';
import '../icon';
import '../collapse';
export interface MteNavItemParts extends MteElementParts {
    /** The leading icon element/slot */
    prefix?: StyleMap;
    /** The button rendered within the list button */
    button?: StyleMap;
    /** The button's label text */
    label?: StyleMap;
    /** The default badge element */
    badge?: StyleMap;
    /** The toggle icon element/slot */
    suffix?: StyleMap;
    /** The additional toggle button rendered when the item is an anchor and a section parent */
    toggle?: StyleMap;
}
declare const MteNavItem_base: import("../../core").Constructor<import("../../core").AutoActiveLinkInterface> & import("../../core").Constructor<import("../../core").SlotObserverInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<NavItemPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteNavItemParts>> & typeof MteElement;
/**
 * @dependency mte-icon
 * @dependency mte-badge
 * @dependency mte-collapse
 *
 * @slot prefix - Where the icon is rendered by default
 * @slot - Default slotted content
 * @slot badge - Where the badge is rendered by default
 * @slot suffix - Where the toggle icon is rendered by default
 * @slot child - Slot for nesting child navigational items
 *
 * @csspart prefix - The leading icon element/slot
 * @csspart button - The button rendered within the list button
 * @csspart label - The button's label text
 * @csspart badge - The default badge element
 * @csspart suffix - The toggle icon element/slot
 * @csspart toggle - The additional toggle button rendered when the item is an anchor and a section parent
 */
export declare class MteNavItem extends MteNavItem_base {
    static styles: import("lit").CSSResult[];
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode;
    };
    /** Icon to display in the button */
    icon?: string;
    /** Icon Library from which to load icon */
    iconLibrary: string;
    /** The value of the badge to be rendered for this item */
    badge?: string | number;
    /** The color of the badge to be rendered for this item */
    badgeColor?: StatusPalette;
    /** If the badge should render as a dot indicator */
    badgeDot: boolean;
    /** Whether or not this item's child section is opened (if it has one) */
    opened: boolean;
    /** Used as the href property for a `<a>` link. When set this button will act as a `<a>` element instead of a `<button>` */
    href?: string;
    /**
     * Short for "inert reference". When set, `iref` will display like an `<a>` element to users visually, but will
     * capture click events and `preventDefault()` internally so external tooling can handle link click events.
     */
    iref?: string;
    /** Tells the browser where to open the link. Only used when `href` is set. */
    target?: '_blank' | '_parent' | '_self' | '_top';
    /** Tells the browser to download the linked file as this filename. Only used when `href` is set */
    download?: string;
    /** Disables the button or anchor */
    disabled: boolean;
    /** Role is set to `listitem` by default. Should not be changed unless not used within an mte-nav-item-group. */
    role: string;
    /**
     * Reference to the internal anchor element used for AutoActiveLink logic
     * @ignore
     */
    anchorElement?: HTMLAnchorElement;
    buttonElement?: HTMLElement;
    /** Emitted when this item's child section is opened */
    _onSectionOpen: EventEmitter<void>;
    /** Emitted when this item's child section is closed */
    _onSectionClose: EventEmitter<void>;
    /** Captures certain click events to prevent interactions if disabled/iref */
    private handleButtonClick;
    /**
     * Suppresses certain click events so a click cannot cause
     * navigation when it bubbles up to certain framework router tooling.
     */
    private suppressEventPropagation;
    /** Toggles the section opened state */
    private handleToggleClick;
    /** Proxy focus calls */
    focus(options: FocusOptions): void;
    /** Proxy click calls */
    click(): void;
    private renderButtonTemplate;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-nav-item': MteNavItem;
    }
}
export {};
