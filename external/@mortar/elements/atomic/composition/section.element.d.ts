import { MteContentBase } from '../../core';
/**
 *
 */
export declare class MteSection extends MteContentBase {
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-section': MteSection;
    }
}
