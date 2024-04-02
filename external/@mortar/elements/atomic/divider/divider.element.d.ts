import { MteContentBase } from '../../core';
/** */
export declare class MteDivider extends MteContentBase {
    static styles: import("lit").CSSResult[];
    /** Label that will appear in MteDivider */
    label: string;
    /** Defines where to align the label */
    align: 'start' | 'end' | 'center';
    /** Defines orientation of MteDivider */
    orientation: 'vertical' | 'horizontal';
    /** Sets weight or thickness of MteDivider */
    weight: 'thin' | 'regular' | 'bold';
    /** Defines role of MteDivider */
    role: 'separator' | 'presentation';
    /** Defines aria-orientation */
    ariaOrientation: 'vertical' | null;
    private handleA11yChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-divider': MteDivider;
    }
}
