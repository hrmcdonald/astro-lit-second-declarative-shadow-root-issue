import { MteContentBase, ResponsiveValue } from '../../core';
declare const MteContentGrid_base: typeof MteContentBase;
/**
 * @slot - Default slotted content
 */
export declare class MteContentGrid extends MteContentGrid_base {
    static styles: import("lit").CSSResult[];
    /** Determines the number of cols in the grid. By default `auto-fit` will scale to fit all items. */
    cols?: ResponsiveValue<string | number>;
    /** Determines the strict width of grid items (when they will wrap). */
    colWidth?: ResponsiveValue<string | number>;
    /** Determines the minimum width of grid items (when they will wrap). */
    colMinWidth?: ResponsiveValue<string | number>;
    /** When set, all rows will stretch to the same size. */
    withAutoRows: boolean;
    /** Adjusts `grid-auto-flow`. Defaults to `row`. */
    autoFlow: 'row' | 'dense' | 'column' | 'column dense' | undefined;
    protected updateInstanceStyles(changedProps: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-content-grid': MteContentGrid;
    }
}
export {};
