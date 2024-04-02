import { PropertyValueMap, TemplateResult } from 'lit';
import { MteElement, MteElementParts, StyleMap } from '../../core';
import { NavHeaderPreset } from './nav.presets';
import '../button';
import './nav-icon-button.element';
export interface MteNavHeaderParts extends MteElementParts {
    /** Start aligned navigation list */
    start?: StyleMap;
    /** End aligned navigation list */
    end?: StyleMap;
    /** Element within which the default menu button is rendered */
    menu?: StyleMap;
    /** Element within which the default preset logo is rendered */
    logo?: StyleMap;
    /** Element within which the app name is rendered */
    name?: StyleMap;
    /** Wrapper element where the container class is applied */
    container?: StyleMap;
    /** Wrapper element where padding and overflow is applied */
    wrapper?: StyleMap;
}
declare const MteNavHeader_base: import("../../core").Constructor<import("../../core").InverseInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<NavHeaderPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteNavHeaderParts>> & typeof MteElement;
/**
 * @slot start - Start aligned navigation list content
 * @slot end - End aligned navigation list content
 * @slot logo - Slot where the active preset logo is rendered
 * @slot name - Slot where the app name is rendered
 * @slot menu - Slot where the menu button is rendered
 *
 * @csspart start - Start aligned navigation list
 * @csspart end - End aligned navigation list
 * @csspart menu - Element within which the default menu button is rendered
 * @csspart logo - Element within which the default preset logo is rendered
 * @csspart name - Element within which the app name is rendered
 * @csspart container - Container element where the container class is applied
 * @csspart wrapper - Wrapper element where padding and overflow is applied
 */
export declare class MteNavHeader extends MteNavHeader_base {
    static styles: import("lit").CSSResult[];
    static enabledWarnings: any[];
    private internalId;
    /** The name of this application. Renders next to the logo. */
    name?: string;
    /** If set, the logo and site name will be wrapped with an anchor given this `href` */
    logoHref: string;
    /** Whether or not this content should be wrapped with a container. */
    withContainer: boolean;
    /** Whether or not this content should be wrapped with a container. Overrides `withContainer`. */
    withoutContainer: boolean;
    /** Whether or not the logo should be centered between the start and end slots */
    withCenterLogo: boolean;
    /** Whether the logo should use a link */
    withoutLogoLink: boolean;
    /** Given the `role` of navigation by default since app navigation items render here */
    role: string;
    /** Defaults to `Primary Navigation` */
    ariaLabel: string;
    /** Defaults to `Primary Navigation` */
    ariaLogoLabel?: string;
    /** The id of the header */
    id: string;
    /**
     * Weather or not the sidebar will open with 'over' instead of 'push'. Reflected for styling only.
     * @ignore
     */
    sidebarModeOver: boolean;
    /**
     * Reflected for styling only.
     * @ignore
     */
    hideMenuUntilTransition: boolean;
    /**
     * Used for styling purposes only
     * @ignore
     */
    beforeInit: boolean;
    /** @ignore */
    passive: boolean;
    /** Whether or not the window is within the "transition breakpoint" or not */
    withinMobileBreakpoint: boolean;
    sidebar?: Element;
    sidebarOpened?: boolean;
    defaultLogo?: TemplateResult<any>;
    menuButtonElem?: HTMLElement;
    logoLinkElem?: HTMLElement;
    startElements?: HTMLElement[];
    private signalStateController;
    private slotController;
    private handleStateChange;
    private handleLogoChange;
    protected firstUpdated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private updateGlobalState;
    renderLogo(): TemplateResult<1>;
    /** Focuses the proper first focusable item within the nav header */
    focus(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-nav-header': MteNavHeader;
    }
}
export {};
