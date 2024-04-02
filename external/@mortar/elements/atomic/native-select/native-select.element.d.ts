import { EventEmitter } from './../../core/decorators/event-emitter.decorator';
import { SlotController } from './../../core/controllers/slot.controller';
import { MteElement, MteElementParts, StyleMap } from '../../core';
import '../icon/index';
import '../form-elements';
import '../../core/polyfills/element-internals/index';
import { NativeSelectPreset } from './native-select.presets';
import { MteNativeSelectChangeDetail, MteNativeSelectInputDetail } from './native-select-event.types';
import { MteNativeSelectOptgroup } from './native-select-optgroup.element';
import { MteNativeSelectOption } from './native-select-option.element';
import '../icon';
export interface MteNativeSelectParts extends MteElementParts {
    /** The label element for the control */
    label?: StyleMap;
    /** The description element for the control */
    description?: StyleMap;
    /** The hint element for the control */
    hint?: StyleMap;
    /** The error element for the control */
    error?: StyleMap;
    /** The prepend slot container element */
    prepend?: StyleMap;
    /** The append slot container element */
    append?: StyleMap;
    /** The prefix slot container element */
    prefix?: StyleMap;
    /** The suffix slot container element */
    suffix?: StyleMap;
    /** The internal select element */
    select?: StyleMap;
    /** The select element wrapper */
    wrapper?: StyleMap;
    /** The chevron icon for the select element */
    icon?: StyleMap;
}
export interface MteNativeSelectOptionItem {
    id?: string;
    label?: string;
    value?: string;
    disabled?: boolean;
    selected?: boolean;
    options?: MteNativeSelectOptionItem[];
}
declare const MteNativeSelect_base: import("../../core").Constructor<import("../../core").TabIndexInterface> & import("../../core").Constructor<import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").DensityInterface> & import("@open-wc/form-control").Constructor<import("@open-wc/form-control").FormControlInterface> & import("../../core").Constructor<import("../../core").FormFieldInterface & import("../../core").SizeInterface & import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").FieldsetInterface> & import("../../core").Constructor<import("../../core").SlotObserverInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<NativeSelectPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteNativeSelectParts>> & typeof MteElement;
/**
 * @dependency mte-form-elements
 *
 * @slot - Default slotted content
 * @slot label - Slot used to define custom label content. Renders above the control. Overrides the `label` prop.
 * @slot description - Slot used to define custom description content. Renders just below the label. Overrides the `description` prop.
 * @slot hint - Slot used to define custom hint content. Renders below the control. Overrides the `hint` prop.
 * @slot error - Slot used to define custom error content. Renders below the control in place of any hint. Overrides the `error` prop.
 * @slot prepend - Slot for leading, visual isolated form-field control content.
 * @slot prefix - Slot for leading, embedded form-field control content.
 * @slot suffix - Slot for trailing, embedded form-field control content.
 * @slot append - Slot for trailing, visual isolated form-field control content.
 *
 * @csspart label - The label element for the control
 * @csspart description - The description element for the control
 * @csspart hint - The hint element for the control
 * @csspart error - The error element for the control
 * @csspart prepend - The prepend slot container element
 * @csspart prefix - The prefix slot container element
 * @csspart select - The internal select element
 * @csspart suffix - The suffix slot container element
 * @csspart append - The append slot container element
 * @csspart wrapper - The select element wrapper
 * @csspart icon - The chevron icon for the select element
 *
 * @ngcontrol NativeSelectControlValueAccessor
 */
export declare class MteNativeSelect extends MteNativeSelect_base {
    static styles: import("lit").CSSResult[];
    id: string;
    /** An array of options that can be passed into the  */
    options: MteNativeSelectOptionItem[];
    /** Makes the select readonly. */
    readonly: boolean;
    /** Makes the select a required field. */
    required: boolean;
    /** Indicates that the select should receive focus on page load. */
    autofocus: boolean;
    /** Whether or not the control should render with vertical margins. */
    withoutBorder: boolean;
    /** The name of the select control, submitted as a name/value pair with form data. */
    name: string;
    /** The current value of the select, submitted as a name/value pair with form data. */
    value: any;
    /** The name of the value property when using an options array */
    valueProp: string;
    /** The name of the label property when using an options array */
    labelProp: string;
    /** Emits when this controls value has changed. */
    _onInput: EventEmitter<MteNativeSelectInputDetail>;
    /** Emits when the when the value of the element has been changed and then the element loses focus. */
    _onChange: EventEmitter<MteNativeSelectChangeDetail>;
    /** Emits when this element is focused */
    _onFocus: EventEmitter<void>;
    /** Emits when this element loses focus */
    _onBlur: EventEmitter<void>;
    /** The internal select element used in this control. This can be helpful for dispatching events during testing. */
    controlElement: HTMLSelectElement;
    childElements: (MteNativeSelectOption | MteNativeSelectOptgroup)[];
    private slottedOptionsSet;
    validationTarget: HTMLSelectElement;
    /** @ignore */
    slotController: SlotController;
    /** @ignore */
    static formControlValidators: import("@open-wc/form-control").Validator[];
    private handleValueChange;
    private handleOptionsChange;
    validityCallback(): string | void;
    connectedCallback(): Promise<void>;
    firstUpdated(changedProps: any): void;
    private onOptGroupSlotChange;
    private onAttributeChange;
    private onOptionSelect;
    private handleChange;
    private handleInput;
    private handleFocus;
    private handleBlur;
    private setFirstValue;
    private isOptGroup;
    private updateOptions;
    private findLastSelectedValue;
    /** -- TabIndex overrides -- */
    getTabIndexAdapter(): string;
    setTabIndexAdapter(value: string): void;
    removeTabIndexAdapter(): void;
    /** Refreshes options and potentially sets the selected value whenever the slotted option elements have changed */
    private refreshSelect;
    resetFormControl(): void;
    /** Clicks the element. NOTE: Native select controls cannot be opened programmatically via clicks. */
    click(): void;
    /** Focuses the element */
    focus(): void;
    /** Blurs the element */
    blur(): void;
    private renderOption;
    private renderOptgroup;
    private renderSelectChildren;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-native-select': MteNativeSelect;
    }
}
export {};
