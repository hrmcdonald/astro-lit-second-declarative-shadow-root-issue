import { MteElementParts, StyleMap, MteContentBase } from '../../core';
import { NavFooterPreset } from './nav.presets';
export interface MteNavFooterParts extends MteElementParts {
    /** The wrapper container element */
    container?: StyleMap;
}
declare const MteNavFooter_base: import("../../core").Constructor<import("../../core").InverseInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<NavFooterPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteNavFooterParts>> & typeof MteContentBase;
/**
 * @slot - Default slotted footer
 *
 * @csspart container - The wrapper container element
 */
export declare class MteNavFooter extends MteNavFooter_base {
    static styles: import("lit").CSSResult[];
    /** Whether or not this footer should be wrapped with a container. Overrides `withContainerFluid`. */
    withContainer: boolean;
    /** Whether or not this footer should be wrapped with a container. Overrides `withContainer` and `withContainerFluid`. */
    withoutContainer: boolean;
    /** Given the `role` of contentinfo by default since the main footer of the page with be rendered here. */
    role: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-nav-footer': MteNavFooter;
    }
}
export {};
