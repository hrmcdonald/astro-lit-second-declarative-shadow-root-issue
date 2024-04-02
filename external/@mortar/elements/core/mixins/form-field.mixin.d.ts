import { TemplateResult } from 'lit';
import { MteElement } from '../base-classes';
import { Constructor } from '../types';
import { RadiusInterface } from './radius.mixin';
import { SizeInterface } from './size.mixin';
import { SlotObserverInterface } from './slot-observer.mixin';
export declare class FormFieldInterface {
    /**
     * @ignore
     * Set to true while this form-field has focus
     */
    focused: boolean;
    renderFormFieldTemplate(formFieldContents: TemplateResult<any>, props?: {
        disabled?: boolean;
        showError?: boolean;
        withoutSlots?: boolean;
    }): any;
}
export declare const FormFieldMixin: <T extends Constructor<MteElement & SlotObserverInterface>>(superClass: T) => Constructor<FormFieldInterface & SizeInterface & RadiusInterface> & T;
