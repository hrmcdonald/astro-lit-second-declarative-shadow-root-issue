import { MteContentBase } from '../../core';
/**
 * @slot - Default slotted content
 */
export declare class MteBox extends MteContentBase {
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-box': MteBox;
    }
}
