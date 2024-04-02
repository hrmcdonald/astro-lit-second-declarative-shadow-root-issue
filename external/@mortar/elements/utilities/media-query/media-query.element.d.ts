import { StyleMap, MteContentBase } from '../../core';
/**
 * @slot - Default slotted content
 */
export declare class MteMediaQuery extends MteContentBase {
    static styles: import("lit").CSSResult[];
    /** Styles applied to child when viewport is smaller than given breakpoint */
    smallerThan?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string;
    /** Styles applied to child when viewport is larger than given breakpoint */
    largerThan?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string;
    /** Any other media query */
    query?: string;
    /** Styles applied to child when breakpoint matches */
    styles?: StyleMap;
    private queryStyles?;
    private selectorSuffix;
    private handleQueryChange;
    private generateQueryStyles;
    protected updateInstanceStyles(changedProps: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-media-query': MteMediaQuery;
    }
}
