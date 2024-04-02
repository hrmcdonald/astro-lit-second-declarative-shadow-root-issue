import { MteContentBase } from '../../core';
import { CardPreset } from './card.presets';
import '../composition';
declare const MteCard_base: import("../../core").Constructor<import("../../core").InverseInterface> & import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<CardPreset>> & typeof MteContentBase;
/**
 * @dependency mte-composition
 *
 * @slot - Default slotted content
 */
export declare class MteCard extends MteCard_base {
    static styles: import("lit").CSSResult[];
    /** Renders a drop shadow for presets with shadows disabled by default. Cards within cards cannot display shadows even if this attribute is present. */
    withShadow: boolean;
    /** Prevents drop shadow rendering for presets with shadows enabled by default. Cards within cards cannot display shadows even if this attribute is present. */
    withoutShadow: boolean;
    /** Whether or not this card should hide overflow content */
    hideOverflow: boolean;
    /** Whether or not this card should be marked as selected */
    selected: boolean;
    /** Adds hover/active styling. Prefer using an mte-card-button when user interaction is need. This can be useful internal to other controls */
    selectable: boolean;
    /** Removes the card border */
    withoutBorder: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-card': MteCard;
    }
}
export {};
