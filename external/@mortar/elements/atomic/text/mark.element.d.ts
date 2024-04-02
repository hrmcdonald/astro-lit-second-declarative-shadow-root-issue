import { MteElement } from '../../core';
declare const MteMark_base: import("../../core").Constructor<import("../../core").ColorInterface<import("../../core").StatusPalette>> & typeof MteElement;
/**
 * @slot - Default slotted content
 */
export declare class MteMark extends MteMark_base {
    static styles: import("lit").CSSResult[];
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-mark': MteMark;
    }
}
export {};
