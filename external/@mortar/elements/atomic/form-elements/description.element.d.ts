import { MteElement } from '../../core';
/**
 * Element used to represent description messaging text
 */
export declare class MteDescription extends MteElement {
    static styles: import("lit").CSSResult[];
    /** Default unique ID for this hint */
    id: string;
    render(): import("lit-html").TemplateResult<1>;
}
/**
 * Element used to represent description messaging text
 */
export declare class MteDescriptionText extends MteDescription {
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-description': MteDescription;
        'mte-description-text': MteDescriptionText;
    }
}
