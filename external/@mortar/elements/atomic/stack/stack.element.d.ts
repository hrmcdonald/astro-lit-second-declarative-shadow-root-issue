import { MteContentBase, ResponsiveValue } from '../../core';
declare const MteStack_base: typeof MteContentBase;
/**
 * @slot - Default slotted content
 */
export declare class MteStack extends MteStack_base {
    static styles: import("lit").CSSResult[];
    /** Sets the `flex-direction` and `align-items` css properties on this element. Defaults to column */
    direction: ResponsiveValue<undefined | 'row' | 'rowReverse' | 'column' | 'columnReverse' | 'initial' | 'inherit'>;
    /** Shorthand for easily setting `direction="row"` */
    row: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-stack': MteStack;
    }
}
export {};
