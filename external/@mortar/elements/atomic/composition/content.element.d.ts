import { MteContentBase } from '../../core';
/**
 *
 */
export declare class MteContent extends MteContentBase {
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-content': MteContent;
    }
}
