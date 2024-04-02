import { MteElement, MteElementParts } from '../../core';
import '../icon';
import '../button';
export interface MteNewTabButtonParts extends MteElementParts {
}
declare const MteNewTabButton_base: import("../../core").Constructor<import("../../core").ButtonInterface & import("../../core").TabIndexInterface & import("../../core").DisabledInterface> & typeof MteElement;
export declare class MteNewTabButton extends MteNewTabButton_base {
    static styles: import("lit").CSSResult[];
    slot: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-new-tab-button': MteNewTabButton;
    }
}
export {};
