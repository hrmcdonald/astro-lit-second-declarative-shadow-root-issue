import { ResponsiveValue, MteContentBase } from '../../core';
/**
 * @slot - Default slotted content
 */
export declare class MteGridItem extends MteContentBase {
    static styles: import("lit").CSSResult[];
    /** The amount of columns this item should span. */
    span?: ResponsiveValue<string | number | 'all'>;
    /** The amount of columns this item should span above the `sm` breakpoint. */
    spanSm?: string | number;
    /** The amount of columns this item should span above the `md` breakpoint. */
    spanMd?: string | number;
    /** The amount of columns this item should span above the `lg` breakpoint. */
    spanLg?: string | number;
    /** The amount of columns this item should span above the `xl` breakpoint. */
    spanXl?: string | number;
    /** The amount of columns this item should span above the `xxl` breakpoint. */
    spanXxl?: string | number;
    /** The column where this item should start horizontally spanning. */
    start?: ResponsiveValue<string | number>;
    /** The column where this item should start horizontally spanning above the `sm` breakpoint. */
    startSm?: string | number;
    /** The column where this item should start horizontally spanning above the `md` breakpoint. */
    startMd?: string | number;
    /** The column where this item should start horizontally spanning above the `lg` breakpoint. */
    startLg?: string | number;
    /** The column where this item should start horizontally spanning above the `xl` breakpoint. */
    startXl?: string | number;
    /** The column where this item should start horizontally spanning above the `xxl` breakpoint. */
    startXxl?: string | number;
    /** The amount of rows this item should span. */
    rowSpan?: ResponsiveValue<string | number>;
    /** The amount of rows this item should span above the `sm` breakpoint. */
    rowSpanSm?: string | number;
    /** The amount of rows this item should span above the `md` breakpoint. */
    rowSpanMd?: string | number;
    /** The amount of rows this item should span above the `lg` breakpoint. */
    rowSpanLg?: string | number;
    /** The amount of rows this item should span above the `xl` breakpoint. */
    rowSpanXl?: string | number;
    /** The amount of rows this item should span above the `xxl` breakpoint. */
    rowSpanXxl?: string | number;
    /** The row where this item should start vertically spanning. */
    rowStart?: ResponsiveValue<string | number>;
    /** The row where this item should start vertically spanning above the `sm` breakpoint. */
    rowStartSm?: string | number;
    /** The row where this item should start vertically spanning above the `md` breakpoint. */
    rowStartMd?: string | number;
    /** The row where this item should start vertically spanning above the `lg` breakpoint. */
    rowStartLg?: string | number;
    /** The row where this item should start vertically spanning above the `xl` breakpoint. */
    rowStartXl?: string | number;
    /** The row where this item should start vertically spanning above the `xxl` breakpoint. */
    rowStartXxl?: string | number;
    private getGridArea;
    private static _styleProps;
    protected updateInstanceStyles(changedProps: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-grid-item': MteGridItem;
    }
}
