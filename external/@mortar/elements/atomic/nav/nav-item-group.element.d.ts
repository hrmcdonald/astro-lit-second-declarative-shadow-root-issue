import { MteElement, MteElementParts, StyleMap } from '../../core';
export interface MteNavItemGroupParts extends MteElementParts {
    /** Element that wraps the optional header slot */
    header?: StyleMap;
}
declare const MteNavItemGroup_base: import("../../core").Constructor<import("../../core").StylePartsInterface<MteNavItemGroupParts>> & typeof MteElement;
/**
 * @slot - Default slotted for grouped child items
 * @slot header - Optional slot where the header label is rendered
 *
 * @csspart header - Element that wraps the optional header slot
 */
export declare class MteNavItemGroup extends MteNavItemGroup_base {
    static styles: import("lit").CSSResult[];
    /** Optional header label to render above this group of mte-nav-items */
    header?: string;
    /** Label used to name this list if necessary */
    ariaLabel: string | null;
    private _inheritedAttributes;
    private handleLabelChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-nav-item-group': MteNavItemGroup;
    }
}
export {};
