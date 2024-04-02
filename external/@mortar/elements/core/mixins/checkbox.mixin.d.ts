import { FormControlInterface } from '@open-wc/form-control';
import { Constructor, MteElement, TabIndexInterface, DisabledInterface } from '..';
import '../../core/polyfills/element-internals/index';
export interface MteCheckboxChangeDetail {
    /** The value of the control changed */
    value: string;
    /** The name of the control changed */
    name: string;
    /** Whether or not the element is checked */
    checked: boolean;
}
export interface CheckboxInterface {
    /** The label for the element */
    label?: string;
    /** The error text for the element */
    error?: string;
    /** The hint text for the element */
    hint?: string;
    /** An aria label that will be provided to the input element */
    ariaLabel?: string;
    /** The name for the element. Used when submitting a form that contains the element */
    name: string;
    /** The value for the element. Used as the value for a element when submitting a form that contains the element  */
    value: string;
    /**
     * Alters the behavior of this control. When "controlled", a controls value is driven explicitly by external state
     * via the `value` prop. Change events will fire but the control value will not change until it is altered directly.
     * @experimental
     */
    controlled: boolean;
    /** Whether the element should be checked by default. Useful for when resetting form controls or using a stateless component */
    defaultChecked: boolean;
    /** Whether the element is checked or not */
    checked: boolean;
    /** Whether the element should be readonly */
    readonly: boolean;
    /** Whether the selecting the element is required or not */
    required: boolean;
    /** Renders the required indicator for this inputs label without enabling native `required` validation */
    showRequired: boolean;
    /** Function to call when the input blurs  */
    handleBlur(): void;
    /** Function to call when the input is focused on  */
    handleFocus(): void;
    /** Function to call when the state of the input changes  */
    handleChange(): void;
    /** A set of attributes to be forwarded to an element within render and removed from the element */
    inheritedAttributes: {
        [key: string]: any;
    };
}
export declare const CheckboxMixin: <T extends Constructor<MteElement>>(superClass: T) => Constructor<CheckboxInterface & TabIndexInterface & FormControlInterface & DisabledInterface> & T;
