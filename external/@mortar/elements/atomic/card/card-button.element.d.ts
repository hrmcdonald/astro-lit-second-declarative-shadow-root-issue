import { MteContentBase } from '../../core';
import { CardButtonPreset } from './card.presets';
declare const MteCardButton_base: import("../../core").Constructor<import("../../core").InverseInterface> & import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<CardButtonPreset>> & import("../../core").Constructor<import("../../core").ButtonInterface & import("../../core").TabIndexInterface & import("../../core").DisabledInterface> & typeof MteContentBase;
/**
 * @slot - Default slotted content
 */
export declare class MteCardButton extends MteCardButton_base {
    static styles: import("lit").CSSResult[];
    /** Renders a drop shadow for presets with shadows disabled by default. Cards within cards cannot display shadows even if this attribute is present. */
    withShadow: boolean;
    /** Prevents drop shadow rendering for presets with shadows enabled by default. Cards within cards cannot display shadows even if this attribute is present. */
    withoutShadow: boolean;
    /** Whether or not this card should hide overflow content */
    hideOverflow: boolean;
    /** Prevents hover styling effect */
    withoutHover: boolean;
    /** Whether or not this card should be marked as selected */
    selected: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-card-button': MteCardButton;
    }
}
export {};
