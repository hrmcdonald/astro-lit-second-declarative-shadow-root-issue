import { MteContentBase } from '../../core';
/**
 * @slot - Default slotted content
 */
export declare class MteTabPanel extends MteContentBase {
    static styles: import("lit").CSSResult[];
    /** Define associated tab, should match MteTab's `panel` property */
    name: string;
    /** Specify role of MteTab */
    role: string;
    active: boolean;
    selected: boolean;
    ariaLabelledBy: string;
    /** Specify an id to be associated with the tab panel. Required */
    id: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-tab-panel': MteTabPanel;
    }
}
