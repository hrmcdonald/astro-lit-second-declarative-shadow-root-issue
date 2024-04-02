import { MteElement, MteElementParts, StyleMap, EventEmitter } from '../../core';
import '../icon';
import '../button/icon-button.element';
import { TagPresets } from './tag.presets';
export interface MteTagSelectEventDetail {
    action: 'select' | 'deselect';
    target: HTMLElement;
}
export interface MteTagRemoveEventDetail {
    action: 'remove';
    target: HTMLElement;
}
export interface MteTagParts extends MteElementParts {
    /** The tag's label */
    label?: StyleMap;
    /** The prefix container where any specified icon is rendered */
    prefix?: StyleMap;
    /** The content wrapper that surrounds the label, prefix, and icon  */
    content?: StyleMap;
    /** The close button for a removable tag */
    closeButton?: StyleMap;
}
declare const MteTag_base: import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").SizeInterface> & import("../../core").Constructor<import("../../core").ColorInterface<import("../../core").StatusPalette>> & import("../../core").Constructor<import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<TagPresets>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteTagParts>> & typeof MteElement;
/**
 * @dependency mte-icon
 *
 * @slot - The tag's label
 *
 * @csspart tag - The tag's internal native span tag
 * @csspart label - The tag's label
 * @csspart prefix - The prefix's container where the specified icon is rendered
 * @csspart closeButton - The close button for a removable tag
 */
export declare class MteTag extends MteTag_base {
    static styles: import("lit").CSSResult[];
    private uniqueId;
    connectedCallback(): void;
    /** Whether the tag element is selectable or not */
    selectable: boolean;
    /** Whether the tag is currently selected */
    selected: boolean;
    /** The role for the tag element  */
    role: any;
    /** Whether the tag element has a remove button */
    removable: boolean;
    /** The close text to display on the remove button */
    closeLabel: string;
    /** Icon to display in the tag */
    icon: string;
    /** Icon Library from which to load the icon */
    iconLibrary: string;
    /** A unique id to identify this tag with */
    id: string;
    /** Emitted when the tag has been selected */
    _onSelect: EventEmitter<MteTagSelectEventDetail>;
    /** Emitted when the tag has been removed */
    _onRemove: EventEmitter<MteTagRemoveEventDetail>;
    private handleSelectKeyDown;
    private handleRemoveKeyDown;
    private toggleSelected;
    private handleRemove;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-tag': MteTag;
    }
}
export {};
