import { MteElement, MteElementParts } from '../../core';
export interface MteFormatNumberParts extends MteElementParts {
}
declare const MteFormatNumber_base: import("../../core").Constructor<import("../../core").LangInterface> & typeof MteElement;
/**
 * @slot - Default slotted content
 */
export declare class MteFormatNumber extends MteFormatNumber_base {
    static styles: import("lit").CSSResult[];
    /** The number to format. */
    value: number;
    /** The formatting style to use. */
    type: 'currency' | 'decimal' | 'percent';
    /** Turns off grouping separators. */
    noGrouping: boolean;
    /** The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting. */
    currency: string;
    /** How to display the currency. */
    currencyDisplay: 'symbol' | 'narrowSymbol' | 'code' | 'name';
    /** The minimum number of integer digits to use. Possible values are 1-21. */
    minimumIntegerDigits: number;
    /** The minimum number of fraction digits to use. Possible values are 0-20. */
    minimumFractionDigits: number;
    /** The maximum number of fraction digits to use. Possible values are 0-0. */
    maximumFractionDigits: number;
    /** The minimum number of significant digits to use. Possible values are 1-21. */
    minimumSignificantDigits: number;
    /** The maximum number of significant digits to use,. Possible values are 1-21. */
    maximumSignificantDigits: number;
    format(value: number): string;
    render(): "" | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-format-number': MteFormatNumber;
    }
}
export {};
