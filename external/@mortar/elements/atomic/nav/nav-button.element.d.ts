import { MteElement, MteElementParts, StyleMap } from '../../core';
import { NavButtonPreset } from './nav.presets';
export interface MteNavButtonParts extends MteElementParts {
    /** The button rendered within the list button */
    button?: StyleMap;
    /** The button's label text */
    label?: StyleMap;
}
declare const MteNavButton_base: import("../../core").Constructor<import("../../core").AutoActiveLinkInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<NavButtonPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteNavButtonParts>> & typeof MteElement;
/**
 * @dependency mte-icon
 *
 * @slot - Default slotted content
 *
 * @csspart button - The button rendered within the list button
 * @csspart label - The button's label text
 */
export declare class MteNavButton extends MteNavButton_base {
    static styles: import("lit").CSSResult[];
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
    /** Role is set to `listitem` by default. Should not be changed unless not used within an mte-nav-button-group. */
    role: string;
    /**
     * Reference to the internal anchor element used for AutoActiveLink logic
     * @ignore
     */
    anchorElement?: HTMLAnchorElement;
    buttonElement?: HTMLElement;
    private handleButtonClick;
    /** Proxy focus calls */
    focus(options: FocusOptions): void;
    /** Proxy click calls */
    click(): void;
    private renderButtonTemplate;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-nav-button': MteNavButton;
    }
}
export {};
