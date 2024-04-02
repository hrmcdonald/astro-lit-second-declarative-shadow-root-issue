import { MteElement } from '../../core';
/**
 * @slot - Default slotted content
 */
export declare class MteToolbarRow extends MteElement {
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-toolbar-row': MteToolbarRow;
    }
}
