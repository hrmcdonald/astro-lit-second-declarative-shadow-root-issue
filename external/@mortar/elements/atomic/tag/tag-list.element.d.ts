import { MteContentBase, EventEmitter } from '../../core';
import { MteTagRemoveEventDetail, MteTagSelectEventDetail } from './tag.element';
/**
 * @slot - Default slotted content
 */
export declare class MteTagList extends MteContentBase {
    static styles: import("lit").CSSResult[];
    /** The role the tag list element should use */
    role: string;
    /** Emitted when a tag is either selected or removed */
    _onChange: EventEmitter<MteTagSelectEventDetail | MteTagRemoveEventDetail>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleChildEvents;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-tag-list': MteTagList;
    }
}
