import { MteElement } from '../../core';
declare const MteLabel_base: import("../../core").Constructor<import("../../core").DisabledInterface> & typeof MteElement;
/**
 * Element used to represent label text
 */
export declare class MteLabel extends MteLabel_base {
    static styles: import("lit").CSSResult[];
    /** Default unique ID for this label. */
    id: string;
    /** Determines if the required marker should be shown */
    showRequired: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
/**
 * Element used to represent label text
 */
export declare class MteLabelText extends MteLabel {
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-label': MteLabel;
        'mte-label-text': MteLabelText;
    }
}
export {};
