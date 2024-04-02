import { MteContentBase } from '../../core';
/**
 * @slot - Default slotted content
 */
export declare class MteText extends MteContentBase {
    static styles: import("lit").CSSResult[];
    /** Sets the `text-alignment` property */
    align?: 'start' | 'center' | 'end' | 'right' | 'left' | 'justify' | 'justify-all' | 'match-parent' | 'initial' | 'inherit' | 'revert' | 'revert-layer' | 'unset';
    /** Adjusts the font size of this text */
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    /** Sets the `text-transform` property */
    transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'full-width' | 'initial' | 'inherit' | 'revert' | 'revert-layer' | 'unset';
    /** Sets the `word-break` property */
    wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'initial' | 'inherit' | 'revert' | 'revert-layer' | 'unset';
    /** Sets the `word-spacing` property */
    wordSpacing?: 'sm' | 'md' | 'lg';
    /** Sets the `letter-spacing` property */
    letterSpacing?: 'sm' | 'md' | 'lg';
    /** Sets the `white-space` property */
    whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces' | 'initial' | 'inherit' | 'revert' | 'revert-layer' | 'unset';
    /** Whether or not the text should be underlined */
    underline?: boolean;
    /** Whether or not the text should be italic */
    italic?: boolean;
    /** Whether or not the text should be striked through */
    strikethrough?: boolean;
    /** Whether or not this text should render muted */
    muted?: boolean;
    /** Limits the amount of visible lines. Sets the `-webkit-line-clamp` property. */
    lineClamp?: string;
    /** Adjusts if text is wrapped and if so, what algorithm determines the wrapping behavior. */
    textWrap?: 'wrap' | 'nowrap' | 'balance' | 'pretty' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset' | undefined;
    /** Weather or not the text should wrap to the next line */
    noWrap?: boolean;
    /** Limits the width to a specified number of 0 glyph characters and is typically used in combination with noWrap or lineClamp */
    maxCharWidth?: number;
    private static _styleProps;
    protected updateInstanceStyles(changedProps: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-text': MteText;
    }
}
