import { MteContentBase, ResponsiveValue } from '../../core';
declare const MteLayoutGrid_base: typeof MteContentBase;
/**
 * @slot - Default slotted content
 */
export declare class MteLayoutGrid extends MteLayoutGrid_base {
    static styles: import("lit").CSSResult[];
    /** Determines the number of columns in the layout grid. Defaults to 12. */
    cols?: ResponsiveValue<string | number>;
    /** Determines the number of rows in the layout grid. */
    rows?: ResponsiveValue<string | number>;
    /** Adjusts `grid-auto-flow`. Defaults to `row`. */
    autoFlow: 'row' | 'dense' | undefined;
    protected updateInstanceStyles(changedProps: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-layout-grid': MteLayoutGrid;
    }
}
export {};
