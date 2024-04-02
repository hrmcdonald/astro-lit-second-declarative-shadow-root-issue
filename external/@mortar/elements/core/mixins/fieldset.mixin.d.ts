import { TemplateResult } from 'lit';
import { MteElement, UnitValue } from '../base-classes';
import { Constructor } from '../types';
import { SlotObserverInterface } from './slot-observer.mixin';
export declare class FieldsetInterface {
    /** The label to render for this control. Overridden by the `label` slot. */
    label: string;
    /** The description to render for this control. Visible under the label. Overridden by the `description` slot. */
    description: string;
    /** The hint to render for this control. Visible under the control when not in an error state. Overridden by the `hint` slot. */
    hint: string;
    /** The error to render for this control. Visible under the control when in an error state. Overridden by the `error` slot. */
    error: string;
    /**
     * Where to render the label and description for the control. When set to before, the label
     * will be position in the center of the control/slotted content.
     */
    labelPosition: 'before' | 'above';
    /** Renders the required indicator for this inputs label without enabling native `required` validation */
    showRequired: boolean;
    /** Sets the width of the control portion of this element */
    w?: UnitValue;
    /** Sets the max width of the control portion of this element */
    maxw?: UnitValue;
    /** Sets the min width of the control portion of this element */
    minw?: UnitValue;
    /** Sets the width of the label portion of this element */
    labelWidth: UnitValue;
    /** Sets the max width of the label portion of this element */
    labelMaxWidth: UnitValue;
    /** Sets the min width of the label portion of this element */
    labelMinWidth: UnitValue;
    /** Whether or not the control should stretch to fill horizontal space. */
    withFullWidth: boolean;
    /** Whether or not the control should render with vertical margins. */
    withoutMargin: boolean;
    renderFieldsetTemplate(fieldsetContents: TemplateResult<any>, options?: {
        containerTemplate?: (contents: any, classes: any) => TemplateResult<any>;
        labelTemplate?: (contents: any, classes: any) => TemplateResult<any>;
    }, props?: {
        label?: string;
        description?: string;
        hint?: string;
        error?: string;
        hasLabel?: boolean;
        hasDescription?: boolean;
        showRequired?: boolean;
        showError?: boolean;
    }): TemplateResult<1>;
}
export declare const FieldsetMixin: <T extends Constructor<MteElement & SlotObserverInterface>>(superClass: T) => Constructor<FieldsetInterface> & T;
