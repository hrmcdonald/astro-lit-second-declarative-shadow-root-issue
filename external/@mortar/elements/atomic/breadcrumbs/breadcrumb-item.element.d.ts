import { MteElementParts, StyleMap } from '../../core';
import '../icon';
import { BreadcrumbItemPreset } from './breadcrumb-item.presets';
import { MteText } from '../text';
export interface MteBreadcrumbItemParts extends MteElementParts {
    /** breadcrumb-item prefix container */
    prefix?: StyleMap;
    /** breadcrumb-item separator */
    separator?: StyleMap;
}
declare const MteBreadcrumbItem_base: import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").ButtonInterface & import("../../core").TabIndexInterface & import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<BreadcrumbItemPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteBreadcrumbItemParts>> & typeof MteText;
/**
 * @dependency mte-icon
 *
 * @slot - Default slotted content
 * @slot prefix - slot for an icon, renders before the link
 *
 * @csspart separator - The chevron between breadcrumb links
 * @csspart prefix - The prefix container where an icon can be rendered
 */
export declare class MteBreadcrumbItem extends MteBreadcrumbItem_base {
    static styles: import("lit").CSSResult[];
    /** Added for screenreader assistance when breadcrumb item is the current page */
    ariaCurrent: string;
    /** Whether or not this item should render a separator. Set to true automatically within an `mte-breadcrumb-overflow`. */
    withoutSeparator: boolean;
    /** Is set to `listitem` by default. Should not be changed. */
    role: 'listitem';
    /** Specify whether links should be underlined */
    withoutUnderline: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-breadcrumb-item': MteBreadcrumbItem;
    }
}
export {};
