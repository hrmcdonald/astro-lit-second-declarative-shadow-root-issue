import { BorderWidthValue, MteElement, MteElementParts, ResponsiveValue, SpacingValue, StyleMap, UnitValue } from '../../core';
import { ButtonPreset } from './button.presets';
import '../icon';
import '../progress-spinner';
export interface MteButtonParts extends MteElementParts {
    /** The button's label text */
    label?: StyleMap;
    /** The prefix container where any specified icon or the loading spinner is rendered */
    prefix?: StyleMap;
    /** The suffix container where any specified rightIcon is rendered */
    suffix?: StyleMap;
}
declare const MteButton_base: import("../../core").Constructor<import("../../core").InverseInterface> & import("../../core").Constructor<import("../../core").ColorInterface<import("../../core").CorePalette>> & import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").SizeInterface> & import("../../core").Constructor<import("../../core").DensityInterface> & import("../../core").Constructor<import("../../core").ButtonInterface & import("../../core").TabIndexInterface & import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<ButtonPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteButtonParts>> & typeof MteElement;
/**
 * @dependency mte-icon
 * @dependency mte-spinner
 *
 * @slot - Default slotted content
 *
 * @csspart prefix - The prefix container where any specified icon or the loading spinner is rendered
 * @csspart label - The button's label text
 * @csspart suffix - The suffix container where any specified rightIcon is rendered
 */
export declare class MteButton extends MteButton_base {
    static styles: import("lit").CSSResult[];
    /** Signifies this is a filled button. Overrides `outlined` */
    filled: boolean;
    /** Signifies this is an outlined button. Overrides `outlined` */
    outlined: boolean;
    /** Icon to display in the button */
    icon?: string;
    /** Icon Library from which to load icon */
    iconLibrary: string;
    /** Whether or not the icon should be hidden */
    iconHidden: boolean;
    /** Icon to display in the button */
    rightIcon?: string;
    /** Icon Library from which to load rightIcon */
    rightIconLibrary: string;
    /** Whether or not the right icon should be hidden */
    rightIconHidden: boolean;
    /** Renders the button in a loading state while true */
    loading: boolean;
    /** Sets the `margin` css property on this element */
    m?: ResponsiveValue<SpacingValue>;
    /** Sets the `margin-right` and `margin-left` css properties on this element */
    mx?: ResponsiveValue<SpacingValue>;
    /** Sets the `margin-top` and `margin-bottom` css properties on this element */
    my?: ResponsiveValue<SpacingValue>;
    /** Sets the `margin-top` css property on this element */
    mt?: ResponsiveValue<SpacingValue>;
    /** Sets the `margin-right` css property on this element */
    mr?: ResponsiveValue<SpacingValue>;
    /** Sets the `margin-bottom` css property on this element */
    mb?: ResponsiveValue<SpacingValue>;
    /** Sets the `margin-left` css property on this element */
    ml?: ResponsiveValue<SpacingValue>;
    /** Sets the `width` css property on this element */
    w?: ResponsiveValue<UnitValue>;
    /** Sets the `max-width` css property on this element */
    maxw?: ResponsiveValue<UnitValue>;
    /** Sets the `min-width` css property on this element */
    minw?: ResponsiveValue<UnitValue>;
    /** Overrides the `border-color` css property on this element. Can be passed dot notated theme config strings to select color token values. */
    borderColor?: ResponsiveValue<string | undefined>;
    /** Sets the `border-width` css property on this element. */
    borderWidth?: ResponsiveValue<BorderWidthValue>;
    /** Overrides the `border-style` css property on this element. */
    borderStyle?: ResponsiveValue<undefined | 'solid' | 'dotted' | 'dashed'>;
    /** Sets the `border` css property on this element. */
    border?: ResponsiveValue<boolean | undefined>;
    /** Applies Mortar standard box-shadow values */
    elevation?: ResponsiveValue<'z0' | 'z1' | 'z2' | 'z3' | 'z4'>;
    private static contentProps;
    protected updateInstanceStyles(changedProps: Map<string, any>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-button': MteButton;
    }
}
export {};
