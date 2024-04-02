import { MteText } from '../text';
/**
 * @slot - Default slotted content
 */
export declare class MteTitle extends MteText {
    static styles: import("lit").CSSResult[];
    /** Adjusts the alignment of the title text */
    align?: 'start' | 'center' | 'end';
    /** Adjusts the font size and weight to different typography styles including any heading */
    heading?: '1' | '2' | '3' | '4' | '5' | '6';
    /** Specifies this title is a subtitle. Sets default typography style and a muted color */
    subtitle?: boolean;
    /** Whether or not this text should render muted */
    muted?: boolean;
    /** @ignore */
    inCard?: boolean;
    /** Will be set to "heading" when a `heading` value is set */
    role: string;
    /** Will be set to the same value as `heading` when it is set */
    ariaLevel: string;
    private handleHeadingChange;
    connectedCallback(): void;
    protected updateInstanceStyles(changedProps: any): void;
    render(): import("lit-html").TemplateResult<1>;
    private isInHeader;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-title': MteTitle;
    }
}
