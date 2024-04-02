import { MteElement, MteElementParts } from '../../core';
export interface MteVisuallyHiddenParts extends MteElementParts {
}
/**
 * @slot - The content to be visually hidden.
 */
export declare class MteVisuallyHidden extends MteElement {
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-visually-hidden': MteVisuallyHidden;
    }
}
