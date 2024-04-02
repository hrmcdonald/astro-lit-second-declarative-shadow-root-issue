import { MteElement, EventEmitter } from '../../core';
declare const MteTab_base: import("../../core").Constructor<import("../../core").ButtonInterface & import("../../core").TabIndexInterface & import("../../core").DisabledInterface> & typeof MteElement;
/**
 * @slot - Default slotted content
 * @slot prefix - Slot for content, rendered before the value.
 * @slot suffix - Slot for content, rendered after value.
 */
export declare class MteTab extends MteTab_base {
    static styles: import("lit").CSSResult[];
    /** Define associated panel */
    panel: string;
    /** Specify selected state of MteTab. */
    selected: boolean;
    /** Specify activated state of MteTab */
    activated: boolean;
    /** Set to true to change which tab will be selected by default on render */
    defaultSelected: boolean;
    /** Specify whether tab is selected in aria */
    ariaSelected: 'true' | 'false';
    /** Specify role of MteTab */
    role: string;
    /** Specify id reference for associated tab panel */
    ariaControls: string;
    /** Specify an id to be associated with the tab panel. */
    id: string;
    /** Called when tab is shown */
    _onShow: EventEmitter<void>;
    /** Called when tab is hidden */
    _onHide: EventEmitter<void>;
    show(): void;
    hide(): void;
    private handleSelectedChanged;
    private handleActivatedChanged;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-tab': MteTab;
    }
}
export {};
