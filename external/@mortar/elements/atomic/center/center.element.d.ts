import { MteContentBase } from '../../core';
/**
 * @slot - Default slotted content
 */
export declare class MteCenter extends MteContentBase {
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-center': MteCenter;
    }
}
