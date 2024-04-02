import { MteElementParts, StyleMap, MteContentBase } from '../../core';
import { NavContentPreset } from './nav.presets';
export interface MteNavContentParts extends MteElementParts {
    /** The wrapper container element */
    container?: StyleMap;
}
declare const MteNavContent_base: import("../../core").Constructor<import("../../core").PresetElementInterface<NavContentPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteNavContentParts>> & typeof MteContentBase;
/**
 * @slot - Default slotted content
 *
 * @csspart container - The wrapper container element
 */
export declare class MteNavContent extends MteNavContent_base {
    static styles: import("lit").CSSResult[];
    /** Given the `role` of main by default since the main content of the page with be rendered here. */
    role: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-nav-content': MteNavContent;
    }
}
export {};
