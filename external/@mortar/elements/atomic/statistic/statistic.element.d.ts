import { PropertyValues } from 'lit';
import { MteElementParts, StyleMap } from '../../core';
import { MteText } from '../text';
import '../form-elements';
import '../../utilities/visually-hidden/visually-hidden.element';
export interface MteStatisticParts extends MteElementParts {
    /** Where the label is rendered */
    label?: StyleMap;
    /** Where the suffix is rendered */
    suffix?: StyleMap;
}
declare const MteStatistic_base: import("../../core").Constructor<import("../../core").SlotObserverInterface> & import("../../core").Constructor<import("../../core").ColorInterface<import("../../core").StatusPalette>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteStatisticParts>> & typeof MteText;
/**
 * @slot label - Slot used to define custom label content.
 * @slot prefix - Slot for content, rendered before the value.
 * @slot suffix - Slot for content, rendered after value.
 *
 * @csspart label - the statistic's label text
 * @csspart suffix - the statistic's suffix text
 */
export declare class MteStatistic extends MteStatistic_base {
    static styles: import("lit").CSSResult[];
    /** The value to be displayed and animated in the component */
    value: number;
    outputNode: HTMLDivElement;
    /** Set how long the statistic value will animate for in milliseconds */
    animationDuration: number;
    /** Set the easing curve of the animation */
    easing: string;
    /** Set whether or not number should animate. Animates by default */
    withoutAnimation: boolean;
    /** Set whether or not number should be formatted. Formatted by default */
    withoutFormatting: boolean;
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
    ariaLabel: string | null;
    label: any;
    suffix: any;
    /** Adjusts the font size of the statistic value */
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    /** Adjusts ths statistic's label font size */
    labelSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    /** Adjusts font weight of the statistic label */
    labelFontWeight?: 'initial' | 'inherit' | 'normal' | 'light' | 'regular' | 'medium' | 'lighter' | 'bold' | 'bolder' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    private animationRef?;
    isDecimalValue: boolean;
    connectedCallback(): void;
    private handleIsDecimalUpdate;
    update(changedProps: PropertyValues<this>): void;
    private animateFromTo;
    private formatAnimatedValue;
    private reduceMotion;
    disconnectedCallback(): void;
    format(value: number, isDecimalValue?: boolean): string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-statistic': MteStatistic;
    }
}
export {};
