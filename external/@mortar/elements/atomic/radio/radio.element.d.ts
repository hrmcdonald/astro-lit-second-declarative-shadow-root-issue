import { MteElement, MteElementParts, EventEmitter, StyleMap } from '../../core';
import '../form-elements';
import { RadioPreset } from './radio.presets';
export interface MteRadioParts extends MteElementParts {
    /** The label element for the control */
    label?: StyleMap;
    /** The description element for the control */
    description?: StyleMap;
    /** The indicator for the control */
    indicator?: StyleMap;
}
declare const MteRadio_base: import("../../core").Constructor<import("../../core").TabIndexInterface> & import("../../core").Constructor<import("../../core").ColorInterface<import("../../core").CorePalette>> & import("../../core").Constructor<import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").SizeInterface> & import("../../core").Constructor<import("../../core").SlotObserverInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<RadioPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteRadioParts>> & typeof MteElement;
/**
 *
 * @slot label - Slot used to define custom label content. Renders to the right of the control. Overrides the `label` prop.
 * @slot description - Slot used to define custom description content. Renders below the control. Overrides the `description` prop.
 *
 * @csspart label - The label element for the control
 * @csspart description - The description element for the control
 */
export declare class MteRadio extends MteRadio_base {
    static styles: import("lit").CSSResult[];
    private internalId;
    /** The label for the radio button */
    label?: string;
    /** The description text for the radio button */
    description?: string;
    /** The value for the radio button. Used as the value for a radio button when submitting a form that contains the radio button  */
    value?: string;
    /** Whether the radio should be checked by default  */
    defaultChecked: boolean;
    /** Indicates that the input should receive focus on page load. */
    autofocus: boolean;
    /** An aria label to be used if no label is provided */
    ariaLabel: string;
    /** The role the radio should use. */
    role: string;
    /** The name for the radio button. Used when submitting a form that contains a radio button. Overrides name value on each radio. */
    name: string;
    /** Whether the radio is checked or not */
    checked: boolean;
    /** Whether the radio should be readonly */
    readonly: boolean;
    /** Emitted when the radios's state has changed */
    _onRadioChange: EventEmitter<any>;
    /** Emits when this element is focused */
    _onFocus: EventEmitter<void>;
    /** Emits when this element loses focus */
    _onBlur: EventEmitter<void>;
    private onDefaultCheckedChange;
    private onCheckChange;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private addEventListeners;
    private removeEventListeners;
    private handleClick;
    private handleBlur;
    private handleFocus;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
