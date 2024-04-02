import { MteElement, MteElementParts, StyleMap, MteColorScheme } from '../../core';
import '../icon';
import '../../utilities/overlay-trigger';
import '../tooltip';
import '../icon';
import './color-scheme-menu.element';
import { MteTooltip } from '../tooltip';
import { MteOverlayTrigger } from '../../utilities/overlay-trigger';
import { MteColorSchemeMenu } from './color-scheme-menu.element';
export interface MteColorSchemeNavButtonParts extends MteElementParts {
    /** The button rendered within the list button */
    button?: StyleMap;
}
declare const MteColorSchemeNavButton_base: import("../../core").Constructor<import("../../core").StylePartsInterface<MteColorSchemeNavButtonParts>> & typeof MteElement;
/**
 * @dependency mte-icon
 * @dependency mte-tooltip
 * @dependency mte-menu
 * @dependency mte-overlay-trigger
 *
 * @slot - Default slotted content
 *
 * @csspart button - The button rendered within the list button
 */
export declare class MteColorSchemeNavButton extends MteColorSchemeNavButton_base {
    static styles: import("lit").CSSResult[];
    /** Disables the button or anchor */
    disabled: boolean;
    /** Role is set to `listitem` by default. Should not be changed unless not used within an mte-nav-button-group. */
    role: string;
    /** The color scheme to default to (This will adjust the colorScheme globally) */
    colorScheme: MteColorScheme;
    /** Where to cache color scheme changes to/from (This will adjust the colorScheme caching globally) */
    cacheTo: 'localStorage' | 'sessionStorage' | 'none';
    label: string;
    buttonElement?: HTMLElement;
    tooltipElement: MteTooltip;
    tooltipTriggerElement: MteOverlayTrigger;
    menuElement: MteColorSchemeMenu;
    private handleColorSchemeChange;
    private handleCacheChange;
    private handleButtonClick;
    toggleColorScheme(): void;
    /** Proxy focus calls */
    focus(options: FocusOptions): void;
    /** Proxy click calls */
    click(): void;
    connectedCallback(): void;
    private linkTooltipElements;
    private linkMenuElements;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-color-scheme-nav-button': MteColorSchemeNavButton;
    }
}
export {};
