import { MteElement, MteElementParts, StyleMap } from '../../core';
import '../text';
import '../icon';
export interface MteTimelineItemParts extends MteElementParts {
    /** The description container for timeline item's optional description */
    description?: StyleMap;
    /** The node for icon in the timeline item  */
    node?: StyleMap;
}
declare const MteTimelineItem_base: import("../../core").Constructor<import("../../core").ColorInterface<import("../../core").StatusPalette>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteTimelineItemParts>> & typeof MteElement;
/**
 * @slot - Default slotted content
 *
 * @dependency mte-icon
 *
 * @csspart description - timeline item's description container.
 * @csspart node - node for timeline's icon
 */
export declare class MteTimelineItem extends MteTimelineItem_base {
    static styles: import("lit").CSSResult[];
    description?: string;
    align: 'before' | 'after';
    icon: string;
    vector: 'default' | 'filled' | 'indeterminate';
    size: 'sm' | 'md';
    /** Defines role of the timeline-item */
    role: string;
    private setIconSize;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-timeline-item': MteTimelineItem;
    }
}
export {};
