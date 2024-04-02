import { IconButtonPreset } from './button.presets';
import { BorderWidthValue, MteElement, MteElementParts, MteOverlayPosition, ResponsiveValue, SpacingValue, StyleMap } from '../../core';
import '../icon';
import '../progress-spinner';
import '../tooltip';
import '../../utilities/overlay-trigger';
import { MteTooltip } from '../tooltip';
import { MteOverlayTrigger } from '../../utilities/overlay-trigger';
export interface MteIconButtonParts extends MteElementParts {
    /** The icon rendered inside of the button */
    icon?: StyleMap;
}
declare const MteIconButton_base: import("../../core").Constructor<import("../../core").DensityInterface> & import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").SizeInterface> & import("../../core").Constructor<import("../../core").InverseInterface> & import("../../core").Constructor<import("../../core").ColorInterface<import("../../core").CorePalette>> & import("../../core").Constructor<import("../../core").PresetElementInterface<IconButtonPreset>> & import("../../core").Constructor<import("../../core").ButtonInterface & import("../../core").TabIndexInterface & import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteIconButtonParts>> & typeof MteElement;
/**
 * @dependency mte-icon
 * @dependency mte-spinner
 * @dependency mte-tooltip
 * @dependency mte-overlay-trigger
 *
 * @csspart icon - The icon rendered inside of the button.
 */
export declare class MteIconButton extends MteIconButton_base {
    static styles: import("lit").CSSResult[];
    /** Signifies this is a filled button. Overrides `outlined` */
    filled: boolean;
    /** Signifies this is an outlined button. Overrides `outlined` */
    outlined: boolean;
    /** Icon to display in the button */
    icon: string;
    /** Icon Library from which to load icon */
    iconLibrary: string;
    /** Renders the button in a loading state while true */
    loading: boolean;
    /** The label for this icon button. Will be rendered with a tooltip as well. */
    label?: string;
    /** The preferred position for the icon label tooltip to render. */
    labelPosition?: MteOverlayPosition;
    /** Label for icon to be read to screenreader technologies */
    ariaLabel: string;
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
    tooltipElement: MteTooltip;
    overlayTriggerElement: MteOverlayTrigger;
    private static contentProps;
    private handleLabelChange;
    protected updateInstanceStyles(changedProps: Map<string, any>): void;
    updated(changedProperties: Map<string, any>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-icon-button': MteIconButton;
    }
}
export {};
