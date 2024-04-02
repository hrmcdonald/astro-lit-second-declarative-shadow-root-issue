import { MteElement, StyleMap, MteCheckboxChangeDetail } from '../../core';
import { SwitchPreset } from './switch.presets';
import '../form-elements';
import '../icon';
import '../progress-spinner';
export interface MteSwitchParts {
    /** The base for the control */
    base: StyleMap;
    /** The track that wraps the switch thumb */
    track: StyleMap;
    /** The thumb of the switch */
    thumb: StyleMap;
    /** The label for the switch */
    label: StyleMap;
    /** The error for the switch */
    error: StyleMap;
    /** The hint for the switch */
    hint: StyleMap;
}
export type { MteCheckboxChangeDetail };
declare const MteSwitch_base: import("../../core").Constructor<import("../../core").CheckboxInterface & import("../../core").TabIndexInterface & import("@open-wc/form-control").FormControlInterface & import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").SizeInterface> & import("../../core").Constructor<import("../../core").SlotObserverInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<SwitchPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteSwitchParts>> & typeof MteElement;
/**
 * @dependency mte-icon
 * @dependency mte-form-elements
 *
 * @slot label - Slot used to define custom label content. Renders to the right of the control. Overrides the `label` prop.
 * @slot hint - Slot used to define custom hint content. Renders below the control. Overrides the `hint` prop.
 * @slot error - Slot used to define custom error content. Renders below the control in place of any hint. Overrides the `error` prop.
 *
 * @csspart base - The base for the control.
 * @csspart track - The track that wraps the switch thumb.
 * @csspart thumb - The thumb of the switch.
 * @csspart label - The label element for the control.
 * @csspart hint - The hint element for the control.
 * @csspart error - The error element for the control.
 *
 * @ngcontrol CheckboxControlValueAccessor
 */
export declare class MteSwitch extends MteSwitch_base {
    static styles: import("lit").CSSResult[];
    private internalId;
    /** A unique ID used to associated the checkbox with its label */
    id: string;
    /** Whether the switch should show a loading indicator */
    loading: boolean;
    /** The aria label to provide to the loading spinner */
    loadingAriaLabel: string;
    /** The name of the switch control, submitted as a name/value pair with form data. */
    name: string;
    /** The title to be passed through to the input element */
    title: string;
    /** The internal input element used in this control. This can be helpful for dispatching keyboard events during testing. */
    controlElement: HTMLInputElement;
    /** The error elements within the switch error slot */
    errorElements: Array<HTMLElement>;
    /** Captures change events and ignores them if the element is loading */
    private handleChangeWithLoading;
    /**
     * Prevents label click from emitting beyond the component. This is done since the label
     * will also trigger a click on the checkbox here and we don't want both emitting out.
     */
    private handleLabelClick;
    render(): import("lit-html").TemplateResult<1>;
}
