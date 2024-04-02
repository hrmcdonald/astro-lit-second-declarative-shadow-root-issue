import { MteElement, EventEmitter } from '../../core';
import '../../core/polyfills/element-internals/index';
declare const MteNativeSelectOption_base: import("../../core").Constructor<import("../../core").DisabledInterface> & typeof MteElement;
export declare class MteNativeSelectOption extends MteNativeSelectOption_base {
    /** A unique ID for the native select option */
    id: string;
    /** A unique value for the native select option */
    value: string;
    /** Whether the option should be selected */
    selected: boolean;
    /** For internal use only. An event that emits when an option attribute changes */
    _onOptionAttributeChange: EventEmitter<void>;
    /** For internal use only. An event that emits when an option is selected */
    _onOptionSelect: EventEmitter<void>;
    willUpdate(changedProps: Map<string | symbol, unknown>): void;
    firstUpdated(changedProps: Map<string | symbol, unknown>): Promise<void>;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-native-select-option': MteNativeSelectOption;
    }
}
export {};
