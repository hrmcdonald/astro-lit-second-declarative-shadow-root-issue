import { ToolbarPreset } from './toolbar.presets';
import { MteElement } from '../../core';
declare const MteToolbar_base: import("../../core").Constructor<import("../../core").DensityInterface> & import("../../core").Constructor<import("../../core").InverseInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<ToolbarPreset>> & typeof MteElement;
/**
 * @slot - Toolbar content
 */
export declare class MteToolbar extends MteToolbar_base {
    static styles: import("lit").CSSResult[];
    transparent: boolean;
    /**
     * Signals to host element that its slot contains an mte-toolbar-row
     * TODO: remove when :has() is available - https://caniuse.com/css-has
     */
    hasRowElemChild: boolean;
    private childRowElems;
    private slotController;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-toolbar': MteToolbar;
    }
}
export {};
