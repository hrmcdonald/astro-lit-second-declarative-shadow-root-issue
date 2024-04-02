import { MteElement } from '../../core/';
/**
 * Element used to represent hint messaging text
 */
export declare class MteHint extends MteElement {
    static styles: import("lit").CSSResult[];
    /** Default unique ID for this hint */
    id: string;
    render(): import("lit-html").TemplateResult<1>;
}
/**
 * Element used to represent hint messaging text
 */
export declare class MteHintText extends MteHint {
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-hint': MteHint;
        'mte-hint-text': MteHintText;
    }
}
