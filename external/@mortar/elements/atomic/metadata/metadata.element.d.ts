import { MteElementParts } from '../../core';
import { MteContentGrid } from '../grid';
export interface MteMetadataParts extends MteElementParts {
}
declare const MteMetadata_base: import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").SizeInterface> & typeof MteContentGrid;
/**
 * @slot - Default slotted content
 */
export declare class MteMetadata extends MteMetadata_base {
    static styles: import("lit").CSSResult[];
    /** Adjusts the visual representation of all child metadata items */
    format: 'grid' | 'stack';
    /** Adjusts the justification of item labels when `format="grid"` */
    justifyLabel: 'flex-start' | 'flex-end';
    /** The a11y role applied to this item */
    role: string;
    protected updateInstanceStyles(changedProps: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-metadata': MteMetadata;
    }
}
export {};
