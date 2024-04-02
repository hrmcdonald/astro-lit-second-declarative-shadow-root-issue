import { MteElement, MteElementParts, StyleMap } from '../../core';
import '../form-elements';
import '../icon';
import { CheckboxPreset } from './checkbox.presets';
export type { MteCheckboxChangeDetail } from '../../core';
export interface MteCheckboxParts extends MteElementParts {
    /** The label element for the control */
    label?: StyleMap;
    /** The hint element for the control */
    hint?: StyleMap;
    /** The error element for the control */
    error?: StyleMap;
    /** The internal input element */
    input?: StyleMap;
}
declare const MteCheckbox_base: import("../../core").Constructor<import("../../core").ColorInterface<import("../../core").CorePalette>> & import("../../core").Constructor<import("../../core").CheckboxInterface & import("../../core").TabIndexInterface & import("@open-wc/form-control").FormControlInterface & import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").SizeInterface> & import("../../core").Constructor<import("../../core").SlotObserverInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<CheckboxPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteCheckboxParts>> & typeof MteElement;
/**
 * @dependency mte-icon
 * @dependency mte-form-elements
 *
 * @slot label - Slot used to define custom label content. Renders to the right of the control. Overrides the `label` prop.
 * @slot hint - Slot used to define custom hint content. Renders below the control. Overrides the `hint` prop.
 * @slot error - Slot used to define custom error content. Renders below the control in place of any hint. Overrides the `error` prop.
 *
 * @csspart label - The label element for the control
 * @csspart hint - The hint element for the control
 * @csspart error - The error element for the control
 * @csspart input - The internal input element
 *
 * @ngcontrol CheckboxControlValueAccessor
 */
export declare class MteCheckbox extends MteCheckbox_base {
    static styles: import("lit").CSSResult[];
    private internalId;
    /** A unique ID used to associated the checkbox with its label */
    id: string;
    /** Whether the checkbox is an indeterminate checkbox or not */
    indeterminate: boolean;
    /** The name of the checkbox control, submitted as a name/value pair with form data. */
    name: string;
    /** The title to be passed through to the input element */
    title: string;
    /** The internal input element used in this control. This can be helpful for dispatching keyboard events during testing. */
    controlElement: HTMLInputElement;
    /** The error elements within the checkbox error slot */
    errorElements: Array<HTMLElement>;
    /**
     * Prevents label click from emitting beyond the component. This is done since the label
     * will also trigger a click on the checkbox here and we don't want both emitting out.
     */
    private handleLabelClick;
    render(): import("lit-html").TemplateResult<1>;
}
