import { EventEmitter, MteElementParts, StyleMap, MteContentBase } from '../../core';
import '../button';
import '../title';
export interface MteHeaderParts extends MteElementParts {
    titleContainer?: StyleMap;
    content?: StyleMap;
}
declare const MteHeader_base: import("../../core").Constructor<import("../../core").StylePartsInterface<MteHeaderParts>> & typeof MteContentBase;
/**
 * @dependency mte-icon
 *
 * @slot - The slot for default content. Renders between `title` and `action` slots.
 * @slot title - Slot for the header title. Renders to the left of the default slot.
 * @slot action - Slot for an action item. The close button renders here when `withClose` is set.
 *
 * @csspart title - The header's title slot container element.
 * @csspart content - The header's default slot container element.
 * @csspart action - The header's action slot container element.
 */
export declare class MteHeader extends MteHeader_base {
    static styles: import("lit").CSSResult[];
    /** Renders an mte-title if no content is present in the slot */
    label?: string;
    /** Whether or not the close button is rendered */
    withClose?: boolean;
    /** ARIA label for the close button */
    closeAriaLabel: string;
    /** Value passed to this header's close button's `type` property */
    closeType: 'button' | 'submit' | 'reset';
    /** Adds a bottom border to this header */
    withBorder: boolean;
    /** Emits when the close button is clicked */
    _onClose: EventEmitter<MouseEvent>;
    /** Emits when the close button is clicked. Signals to parent elements they should close. */
    _doClose: EventEmitter<MouseEvent>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-header': MteHeader;
    }
}
export {};
