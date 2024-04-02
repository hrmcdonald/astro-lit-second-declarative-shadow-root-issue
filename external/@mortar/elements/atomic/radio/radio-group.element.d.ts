import { MteElement, MteElementParts, EventEmitter, StyleMap } from '../../core';
import '../form-elements';
import { MteRadio } from './radio.element';
import '../../core/polyfills/element-internals/index';
export interface MteRadioGroupChangeDetail {
    /** Reference to the individual radio control changed */
    radio: MteRadio;
    /** The value of the control changed */
    value: string;
    /** The name of the control changed */
    name: string;
    /** Whether or not the checkbox is checked */
    checked: boolean;
}
export interface MteRadioGroupParts extends MteElementParts {
    /** The label element for the control */
    label?: StyleMap;
    /** The hint element for the control */
    hint?: StyleMap;
    /** The error element for the control */
    error?: StyleMap;
    /** The description element for the control */
    description?: StyleMap;
}
declare const MteRadioGroup_base: import("@open-wc/form-control").Constructor<import("@open-wc/form-control").FormControlInterface> & import("../../core").Constructor<import("../../core").ColorInterface<import("../../core").CorePalette>> & import("../../core").Constructor<import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").SizeInterface> & import("../../core").Constructor<import("../../core").FieldsetInterface> & import("../../core").Constructor<import("../../core").SlotObserverInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteRadioGroupParts>> & typeof MteElement;
/**
 * @dependency mte-form-elements
 *
 * @slot - The slot used to insert the radio elements.
 * @slot label - Slot used to define custom label content. Renders above the radio elements. Overrides the `label` prop.
 * @slot hint - Slot used to define custom hint content. Renders below the radio elements. Overrides the `hint` prop.
 * @slot error - Slot used to define custom error content. Renders below the radio elements in place of any hint. Overrides the `error` prop.
 * @slot description - Slot used to define custom description content. Renders below the label. Overrides the `description` prop.
 *
 * @csspart label - The label element for the control
 * @csspart hint - The hint element for the control
 * @csspart error - The error element for the control
 * @csspart description - The description element for the control
 *
 * @ngcontrol RadioGroupControlValueAccessor
 */
export declare class MteRadioGroup extends MteRadioGroup_base {
    static styles: import("lit").CSSResult[];
    static formControlValidators: {
        attribute: string;
        key: string;
        message: string;
        isValid(instance: any): Promise<boolean>;
    }[];
    private shouldFormUpdate;
    /** The direction to flex child radio elements */
    direction?: 'column' | 'row';
    /** The label for the radio group  */
    label: string;
    /** The name of the radio group, submitted as a name/value pair with form data. */
    name: string;
    /** The title to be displayed when hovering the element */
    title: string;
    /** Whether the radio should be readonly. Overrides the readonly property on a radio element if set. */
    readonly: boolean;
    /** The value of the radio group, submitted as a name/value pair with form data. Overrides the value of a radio button if provided.  */
    value: string;
    /** Whether a radio selection is required for submission or not. */
    required: boolean;
    /** The ID of the element that labels the radio group */
    ariaLabelledBy: string;
    /** The ID of the element that labels the radio group */
    ariaDescribedBy: string;
    /** Whether a selection is required for the radio group  */
    showRequired: boolean;
    /** Emitted when a radio is checked */
    _onChange: EventEmitter<MteRadioGroupChangeDetail>;
    /** Emitted when a radio is invalid */
    _onInvalid: EventEmitter<void>;
    get validationTarget(): MteRadio;
    get checkedRadio(): MteRadio;
    get focusableRadio(): MteRadio;
    get radioElements(): MteRadio[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(changedProps: any): void;
    private onDisabledUpdate;
    private onAriaLabelledByChange;
    private onAriaDescribedByChange;
    private onNameUpdate;
    private onColorUpdate;
    private onReadonlyUpdate;
    private _inheritedAttributes;
    shouldFormValueUpdate(): boolean;
    resetRadios(firstUpdated?: any): void;
    resetFormControl(): void;
    validityCallback(): string | void;
    private handleInvalid;
    private getSlottedElement;
    private handleRadioChange;
    private handleKeyDown;
    /** Focuses on the first focusable radio */
    focus(): void;
    /** Blurs the radio */
    blur(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
