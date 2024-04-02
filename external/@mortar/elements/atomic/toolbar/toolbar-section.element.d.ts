import { MteElement } from '../../core';
/**
 * @slot - Toolbar section content
 */
export declare class MteToolbarSection extends MteElement {
    static styles: import("lit").CSSResult[];
    align: 'start' | 'end';
    shrink: any;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-toolbar-section': MteToolbarSection;
    }
}
