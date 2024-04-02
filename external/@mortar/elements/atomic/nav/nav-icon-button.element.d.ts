import { MteElement, MteElementParts, StatusPalette, StyleMap, MteOverlayPosition } from '../../core';
import { NavIconButtonPreset } from './nav.presets';
import '../../utilities/overlay-trigger';
import '../tooltip';
import '../icon';
import { MteTooltip } from '../tooltip';
import { MteOverlayTrigger } from '../../utilities/overlay-trigger';
export interface MteNavIconButtonParts extends MteElementParts {
    /** The button rendered within the list button */
    button?: StyleMap;
    /** The icon rendered inside of the button */
    icon?: StyleMap;
}
declare const MteNavIconButton_base: import("../../core").Constructor<import("../../core").PresetElementInterface<NavIconButtonPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteNavIconButtonParts>> & typeof MteElement;
/**
 * @dependency mte-icon
 * @dependency mte-tooltip
 * @dependency mte-overlay-trigger
 *
 * @csspart button - The button rendered within the list button
 * @csspart icon - The icon rendered inside of the button
 */
export declare class MteNavIconButton extends MteNavIconButton_base {
    static styles: import("lit").CSSResult[];
    /** Icon to display in the button */
    icon?: string;
    /** Icon Library from which to load icon */
    iconLibrary: string;
    /** The label for this icon button. Will be rendered with a tooltip as well. */
    label?: string;
    /** The preferred position for where to render the label tooltip */
    labelPosition: MteOverlayPosition;
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
    /** The value of the badge to be rendered for this item */
    badge?: string | number;
    /** The color of the badge to be rendered for this item */
    badgeColor?: StatusPalette;
    /** The role that should be applied to the badge when rendered */
    badgeRole?: string;
    /** The `aria-label` to be applied to the badge when rendered */
    badgeAriaLabel?: string;
    /** If the badge should render as a dot indicator */
    badgeDot: boolean;
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
    tooltipElement: MteTooltip;
    overlayTriggerElement: MteOverlayTrigger;
    updated(changedProperties: Map<string, any>): void;
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
        'mte-nav-icon-button': MteNavIconButton;
    }
}
export {};
