import { MteContentBase } from '../../core';
/**
 *
 */
export declare class MteFooter extends MteContentBase {
    static styles: import("lit").CSSResult[];
    /** Renders contents in a end aligned flex row with a gap */
    actions: boolean;
    /** Adds a bottom border to this header */
    withBorder: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-footer': MteFooter;
    }
}
