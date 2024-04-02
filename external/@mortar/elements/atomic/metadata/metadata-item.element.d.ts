import { MteElement, MteElementParts, ResponsiveValue, StyleMap } from '../../core';
import '../icon';
import '../tooltip';
import '../../utilities/overlay-trigger';
import '../../utilities/visually-hidden';
export interface MteMetadataItemParts extends MteElementParts {
    /** Element where label text is rendered */
    label?: StyleMap;
    /** Element where slotted value content is rendered */
    value?: StyleMap;
}
declare const MteMetadataItem_base: import("../../core").Constructor<import("../../core").StylePartsInterface<MteMetadataItemParts>> & typeof MteElement;
/**
 * @dependency mte-icon
 * @dependency mte-tooltip
 * @dependency mte-overlay-trigger
 * @dependency mte-visually-hidden
 *
 * @slot - Default slotted content
 *
 * @csspart label - Element where label text is rendered
 * @csspart value - Element where slotted value content is rendered
 */
export declare class MteMetadataItem extends MteMetadataItem_base {
    static styles: import("lit").CSSResult[];
    /** Label for this metadata item */
    label?: string;
    /** Renders an information tooltip to display more context about this item's label */
    description?: string;
    /** The a11y role applied to this item */
    role: string;
    /** Responsive column span value for this item in the metadata "grid" */
    span: ResponsiveValue<number>;
    /** Responsive row span value for this item in the metadata "grid" */
    rowSpan: ResponsiveValue<number>;
    protected updateInstanceStyles(changedProps: any): void;
    private getGridArea;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-metadata-item': MteMetadataItem;
    }
}
export {};
