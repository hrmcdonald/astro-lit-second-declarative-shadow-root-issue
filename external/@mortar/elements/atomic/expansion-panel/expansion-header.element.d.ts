import { EventEmitter } from '../../core';
import { MteText } from '../text';
import '../icon';
declare const MteExpansionHeader_base: import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").ButtonInterface & import("../../core").TabIndexInterface & import("../../core").DisabledInterface> & typeof MteText;
/**
 * @dependency mte-icon
 *
 * @slot - Default slotted content
 *
 * @csspart label - element that wraps header label
 */
export declare class MteExpansionHeader extends MteExpansionHeader_base {
    static styles: import("lit").CSSResult[];
    slot: string;
    /** Called when the header's panel is opened */
    _onOpen: EventEmitter<void>;
    /** Called when the header's panel is closed */
    _onClose: EventEmitter<void>;
    open(): void;
    close(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-expansion-header': MteExpansionHeader;
    }
}
export {};
