import { MteElement } from '../../core';
import { EventEmitter } from '../../core';
declare const MteNativeSelectOptgroup_base: import("../../core").Constructor<import("../../core").DisabledInterface> & typeof MteElement;
export declare class MteNativeSelectOptgroup extends MteNativeSelectOptgroup_base {
    /** A unique ID for the option group */
    id: string;
    /** A a label for the option group */
    label: string;
    private onRemoveFns;
    static styles: import("lit").CSSResult;
    /** For internal use only. Emits when the attribute of the optgroup changes */
    _onOptGroupAttributeChange: EventEmitter<void>;
    /** For internal use only. Emits when the slot of the optgroup changes */
    _onOptGroupSlotChange: EventEmitter<void>;
    willUpdate(changedProps: Map<string | symbol, unknown>): void;
    firstUpdated(changedProps: Map<string | symbol, unknown>): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-native-select-optgroup': MteNativeSelectOptgroup;
    }
}
export {};
