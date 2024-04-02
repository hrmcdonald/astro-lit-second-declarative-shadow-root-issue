import { MteElement, MteElementParts } from '../../core';
export interface MteFormatDateParts extends MteElementParts {
}
declare const MteFormatDate_base: import("../../core").Constructor<import("../../core").LangInterface> & typeof MteElement;
/**
 * @slot - Default slotted content
 */
export declare class MteFormatDate extends MteFormatDate_base {
    static styles: import("lit").CSSResult[];
    /**
     * The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly
     * recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format
     * in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
     */
    date: Date | string;
    /** The format for displaying the weekday. */
    weekday: 'narrow' | 'short' | 'long';
    /** The format for displaying the era. */
    era: 'narrow' | 'short' | 'long';
    /** The format for displaying the year. */
    year: 'numeric' | '2-digit';
    /** The format for displaying the month. */
    month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
    /** The format for displaying the day. */
    day: 'numeric' | '2-digit';
    /** The format for displaying the hour. */
    hour: 'numeric' | '2-digit';
    /** The format for displaying the minute. */
    minute: 'numeric' | '2-digit';
    /** The format for displaying the second. */
    second: 'numeric' | '2-digit';
    /** The format for displaying the milliseconds. */
    fractionalSecondDigits: 1 | 2 | 3 | '1' | '2' | '3';
    /** The format for displaying the time. */
    timeZoneName: 'short' | 'long';
    /** The time zone to express the time in. */
    timeZone: string;
    /** The format for displaying the hour. */
    hourFormat: 'auto' | '12' | '24';
    /** Pre-defined format options that apply the proper values for each of the other date/time options */
    format: 'short' | 'medium' | 'long' | 'full' | 'shortDate' | 'mediumDate' | 'longDate' | 'fullDate' | 'shortTime' | 'mediumTime' | 'longTime' | 'fullTime';
    protected firstUpdated(changedProps: any): void;
    private renderDate;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-format-date': MteFormatDate;
    }
}
export {};
