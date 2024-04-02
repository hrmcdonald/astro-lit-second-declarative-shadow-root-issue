import { MteElement, MteOptionItem, MteElementParts, EventEmitter, StyleMap } from '../../core';
import { RangeSliderPreset } from './range-slider.presets';
import '../input';
import '../../utilities/visually-hidden';
import '../form-elements';
export interface MteRangeSliderInputDetail {
    /** The name of the component */
    name: string;
    /** The value of the component */
    value: number[];
}
export interface MteRangeSliderChangeDetail {
    /** The name of the component */
    name: string;
    /** The value of the component */
    value: number[];
}
export interface MteRangeSliderInvalidDetail {
    /** The name of the component */
    name: string;
    /** The value of the component */
    value: number[];
}
export interface MteRangeSliderParts extends MteElementParts {
    /** The element that wraps the range input elements */
    range?: StyleMap;
    /** The input for the start value */
    rangeInputStart?: StyleMap;
    /** The input for the end value */
    rangeInputEnd?: StyleMap;
    /** The number input for the start value */
    numberInputStart?: StyleMap;
    /** The number input for the end value */
    numberInputEnd?: StyleMap;
    /** The element prefixed to the input. Renders to the right of the prepend element and before the input. */
    prefix?: StyleMap;
    /** The suffix element for the input. Renders to the left of the append element and after the input. */
    suffix?: StyleMap;
    /** The label for the input */
    label?: StyleMap;
    /** The hint for the input */
    hint?: StyleMap;
    /** The error for the input */
    error?: StyleMap;
    /** The description for the input */
    description?: StyleMap;
    /** The containing element that holds the tick marks */
    marks?: StyleMap;
    /** The labels for each mark  */
    markLabel?: StyleMap;
}
declare const MteRangeSlider_base: import("../../core").Constructor<import("../../core").TabIndexInterface> & import("../../core").Constructor<import("../../core").DisabledInterface> & import("@open-wc/form-control").Constructor<import("@open-wc/form-control").FormControlInterface> & import("../../core").Constructor<import("../../core").FieldsetInterface> & import("../../core").Constructor<import("../../core").SlotObserverInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<RangeSliderPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteRangeSliderParts>> & typeof MteElement;
/**
 * @dependency mte-input
 * @dependency mte-form-elements
 * @dependency mte-visually-hidden
 *
 * @slot label - Slot used to define custom label content. Renders above the slider element. Overrides the `label` prop.
 * @slot hint - Slot used to define custom hint content. Renders below the slider element. Overrides the `hint` prop.
 * @slot error - Slot used to define custom error content. Renders below the slider element in place of any hint. Overrides the `error` prop.
 * @slot description - Slot used to define custom description content. Renders below the label. Overrides the `description` prop.
 * @slot prefix - Slot for leading, embedded form-field control content.
 * @slot suffix - Slot for trailing, embedded form-field control content.
 *
 * @csspart numberInputStart - The number input for the end value
 * @csspart numberInputEnd - The number input for the end value
 * @csspart range - The entire range element for the control
 * @csspart rangeInput - The range input element for the control
 * @csspart numberInput - The number input element for the control
 * @csspart label - The label element for the control
 * @csspart hint - The hint element for the control
 * @csspart error - The error element for the control
 * @csspart description - The description element for the control
 * @csspart prefix - The
 * @csspart suffix - The description element for the control
 */
export declare class MteRangeSlider extends MteRangeSlider_base {
    static styles: import("lit").CSSResult[];
    /** The minimum possible value for the component */
    min?: number;
    /** The maximum possible value for the component */
    max?: number;
    /** The initial default value for the component */
    defaultValue?: any;
    /** The current value of the component */
    value: number[];
    /** The step to increment the component by */
    step?: number;
    /** The name of the form control */
    name: string;
    /** Whether the component should be readonly */
    readonly?: boolean;
    /** Whether the label for the component should be hidden */
    hideValueLabel?: boolean;
    /** Whether a number input should be visible within the component */
    withNumberInput?: boolean;
    /** An array of slider tick marks thar render below the slider  */
    marks: MteOptionItem[];
    /** Whether or not the slider label marks should be visible*/
    withMarkLabels: boolean;
    /** The minimum width of the number input. */
    numberInputMinWidth?: string;
    /** A function to format the label with  */
    labelFormatter?: (value: number) => string;
    /** The label for the minimum value number input. Deprecated in favor of `startInputAriaLabel`.
     * @deprecated
     */
    numberAriaLabelMin?: string;
    /** The label for the minimum value number input.  Deprecated in favor of `endInputAriaLabel`.
     * @deprecated
     */
    numberAriaValueLabelMax?: string;
    /** The label for the minimum number input */
    startInputAriaLabel?: string;
    /** The label for the maximum number input */
    endInputAriaLabel?: string;
    /** Emits when the change event occurs on the component  */
    _onChange: EventEmitter<MteRangeSliderChangeDetail>;
    /** Emits when the change event occurs on the component  */
    _onInput: EventEmitter<MteRangeSliderInputDetail>;
    /** Emits when an invalid event occurs */
    _onInvalid: EventEmitter<MteRangeSliderInvalidDetail>;
    validationTarget: HTMLInputElement;
    private stepFixedDigits;
    connectedCallback(): void;
    onValueChange(): void;
    onWithNumberInputChange(): Promise<void>;
    onStepIncrementChange(): void;
    resetFormControl(): void;
    validityCallback(): string | void;
    private getFixedPointValue;
    private getNearestStep;
    private handleInput;
    private handleNumberInput;
    private handleNumericChange;
    private handleChange;
    private setNumericInputValue;
    private handleInvalid;
    private updateValueStyles;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-range-slider': MteRangeSlider;
    }
}
export {};
