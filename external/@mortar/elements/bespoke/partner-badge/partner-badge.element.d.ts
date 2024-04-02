import { MteElement } from '../../core';
import '../../atomic/icon/icon.element';
/**
 *
 */
export declare class MtePartnerBadge extends MteElement {
    static styles: import("lit").CSSResult[];
    year: number;
    name: string;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-partner-badge': MtePartnerBadge;
    }
}
