import { MteElement, MteOptionItem, MteElementParts, EventEmitter, StyleMap } from '../../core';
import { SliderPreset } from './slider.presets';
import '../input';
import '../form-elements';
import '../../utilities/visually-hidden';
export interface MteSliderParts extends MteElementParts {
    /** The element wrapping the range input  */
    range?: StyleMap;
    /** The range input  */
    rangeInput?: StyleMap;
    /** The number input control */
    numberInput?: StyleMap;
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
export interface MteSliderInputDetail {
    /** The name of the component */
    name: string;
    /** The value of the component */
    value: number;
}
export interface MteSliderChangeDetail {
    /** The name of the component */
    name: string;
    /** The value of the component */
    value: number;
}
export interface MteSliderInvalidDetail {
    /** The name of the component */
    name: string;
    /** The value of the component */
    value: number;
}
declare const MteSlider_base: import("../../core").Constructor<import("../../core").TabIndexInterface> & import("../../core").Constructor<import("../../core").DisabledInterface> & import("@open-wc/form-control").Constructor<import("@open-wc/form-control").FormControlInterface> & import("../../core").Constructor<import("../../core").FieldsetInterface> & import("../../core").Constructor<import("../../core").SlotObserverInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<SliderPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteSliderParts>> & typeof MteElement;
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
export declare class MteSlider extends MteSlider_base {
    static styles: import("lit").CSSResult[];
    /** The minimum possible value for the component */
    min?: number;
    /** The maximum possible value for the component */
    max?: number;
    /** The initial default value for the component */
    defaultValue?: any;
    /** The current value of the component */
    value: any;
    /** The step to increment the component by */
    step?: number;
    /** The name of the form control */
    name: string;
    /** The label for the number input */
    numberValueLabel?: string;
    /** An array of slider tick marks thar render below the slider  */
    marks: MteOptionItem[];
    /** Whether or not the slider label marks should be visible*/
    withMarkLabels: boolean;
    /** Whether the component should be readonly */
    readonly?: boolean;
    /** Whether the label for the component should be hidden. Deprecated in favor of `withoutValueLabel`
     * @deprecated
     */
    hideValueLabel?: boolean;
    /** Whether the label for the component should be visible. Is visible by default.
     */
    withoutValueLabel?: boolean;
    /** Whether a number input should be visible within the component */
    withNumberInput?: boolean;
    /** The minimum width of the number input. */
    numberInputMinWidth?: string;
    /** A function to format the label with  */
    labelFormatter: (value: number) => string;
    /** Emits when the change event occurs on the component  */
    _onChange: EventEmitter<MteSliderChangeDetail>;
    /** Emits when the change event occurs on the component  */
    _onInput: EventEmitter<MteSliderInputDetail>;
    /** Emits when an invalid event occurs */
    _onInvalid: EventEmitter<MteSliderInvalidDetail>;
    validationTarget: HTMLInputElement;
    private stepFixedDigits;
    connectedCallback(): Promise<void>;
    onValueChange(): void;
    onWithNumberInputChange(): Promise<void>;
    onStepIncrementChange(): void;
    validityCallback(): string | void;
    resetFormControl(): void;
    private getFixedPointValue;
    private getNearestStep;
    private setAllValues;
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
        'mte-slider': MteSlider;
    }
}
export {};
