import { PropertyValueMap } from 'lit';
import { MteElement, MteElementParts, StyleMap } from '../../core';
import { NavRootPreset } from './nav.presets';
export interface MteNavRootParts extends MteElementParts {
    /** Element that wraps the header and sub-header slots */
    header?: StyleMap;
    /** Element that wraps the content slot */
    content?: StyleMap;
    /** Element that wraps the sidebar slot */
    sidebar?: StyleMap;
    /** Element that wraps the footer slot */
    footer?: StyleMap;
    /** Element where header container styles are applied */
    headerContainer?: StyleMap;
}
declare const MteNavRoot_base: import("../../core").Constructor<import("../../core").PresetElementInterface<NavRootPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteNavRootParts>> & typeof MteElement;
/**
 * @slot - Default slotted content
 * @slot header - Slot for mte-nav-header
 * @slot sub-header - Optional slot for the mte-nav-subheader
 * @slot sidebar - Optional slot for the mte-nav-sidebar
 * @slot footer - Optional slot for mte-nav-footer
 *
 * @csspart header - Element that wraps the header and sub-header slots
 * @csspart content - Element that wraps the content slot
 * @csspart sidebar - Element that wraps the sidebar slot
 * @csspart footer - Element that wraps the footer slot
 * @csspart headerContainer - Element where header container styles are applied
 */
export declare class MteNavRoot extends MteNavRoot_base {
    static styles: import("lit").CSSResult[];
    /** The breakpoint at which the sidebar will transition to closed and open "over" all other elements */
    mobileBreakpoint: string;
    /** Whether the header or sidebar should be inverse. Neither will be if not set. */
    inverse?: 'header' | 'sidebar';
    /** Whether or not the sidebar should prefer to be closed or open */
    preferSidebar: 'opened' | 'closed';
    /** The size the nav-sidebar should be if one exists */
    sidebarSize: number | string;
    /** When set the header will not be sticky and scroll with the page content */
    withoutStickyHeader: boolean;
    /**
     * Where the sidebar is positioned. Reflected for styling only.
     * @ignore
     */
    sidebarPosition: 'left' | 'right';
    /**
     * Weather or not the sidebar is opened. Reflected for styling only.
     * @ignore
     */
    sidebarOpened: boolean;
    /**
     * Weather or not the sidebar will open with 'over' instead of 'push'. Reflected for styling only.
     * @ignore
     */
    sidebarModeOver: boolean;
    /**
     * Used for styling purposes only
     * @ignore
     */
    beforeInit: boolean;
    /** @ignore */
    passive: boolean;
    firstUpdateComplete: boolean;
    headerElement: HTMLElement;
    private signalStateController;
    private observer?;
    private handleStateChange;
    private handleSsrChange;
    constructor();
    connectedCallback(): void;
    protected firstUpdated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    protected updateInstanceStyles(changedProps: any): void;
    /** Adds global scroll top padding to the document when the header is sticky */
    private updateHtmlScrollPaddingTop;
    private previousBreakpointValue;
    private handleBreakpointChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-nav-root': MteNavRoot;
    }
}
export {};
