import { MteElement, MteElementParts, ResponsiveValue } from '../../core';
export interface MteFieldsetParts extends MteElementParts {
}
declare const MteFieldset_base: import("../../core").Constructor<import("../../core").FieldsetInterface> & import("../../core").Constructor<import("../../core").SlotObserverInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteFieldsetParts>> & typeof MteElement;
/**
 * @dependency mte-form-elements
 *
 * @slot - Default slotted content
 * @slot label - Slot used to define custom label content. Renders above the control. Overrides the `label` prop.
 * @slot description - Slot used to define custom description content. Renders just below the label. Overrides the `description` prop.
 * @slot hint - Slot used to define custom hint content. Renders below the control. Overrides the `hint` prop.
 * @slot error - Slot used to define custom error content. Renders below the control in place of any hint. Overrides the `error` prop.
 *
 * @csspart label - The label element for the control
 * @csspart description - The description element for the control
 * @csspart hint - The hint element for the control
 * @csspart error - The error element for the control
 */
export declare class MteFieldset extends MteFieldset_base {
    static styles: import("lit").CSSResult[];
    /** Default unique ID for this label. */
    id: string;
    /** Sets the `display` css property on this element */
    d?: ResponsiveValue<undefined | 'block' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'inline' | 'list-item' | 'none' | 'initial' | 'inherit'>;
    /** The name associated with the fieldset group */
    name?: any;
    /** The ID attribute of the form element the fieldset should be inside of. If you want the input elements inside the fieldset to be associated with the form, include the form attribute directly on those elements */
    form?: any;
    protected updateInstanceStyles(changedProps: Map<string, any>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-fieldset': MteFieldset;
    }
}
export {};
