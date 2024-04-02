import { MteContentBase, MteElementParts } from '../../core';
export interface SmileParts extends MteElementParts {
}
/**
 * @slot - Default slotted content
 */
export declare class MteSmile extends MteContentBase {
    static styles: import("lit").CSSResult[];
    size: 'sm' | 'md' | 'lg' | 'none';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-smile': MteSmile;
    }
}
