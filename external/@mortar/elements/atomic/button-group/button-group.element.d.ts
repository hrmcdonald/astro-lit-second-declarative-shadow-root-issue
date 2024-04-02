import { MteElement } from '../../core';
import { ButtonGroupPreset } from './button-group.presets';
declare const MteButtonGroup_base: import("../../core").Constructor<import("../../core").DensityInterface> & import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<ButtonGroupPreset>> & typeof MteElement;
/**
 * @slot - Default slotted content
 */
export declare class MteButtonGroup extends MteButtonGroup_base {
    static styles: import("lit").CSSResult[];
    /** Whether or not the group should align horizontally or vertically */
    orientation: 'horizontal' | 'vertical';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-button-group': MteButtonGroup;
    }
}
export {};
