import { MteElement, MteElementParts, MteOverlayPlacement, MteOverlayPosition, StyleMap } from '../../core';
import { BadgePreset } from './badge.presets';
export type MteBadgePosition = Exclude<MteOverlayPosition, 'left' | 'right'> | 'unset';
export type MteBadgePlacement = Exclude<MteOverlayPlacement, 'center'> | 'unset';
export interface MteBadgeParts extends MteElementParts {
    /** Where the badge value is rendered */
    label?: StyleMap;
}
declare const MteBadge_base: import("../../core").Constructor<import("../../core").PresetElementInterface<BadgePreset>> & import("../../core").Constructor<import("../../core").ColorInterface<import("../../core").StatusPalette>> & import("../../core").Constructor<import("../../core").SizeInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteBadgeParts>> & typeof MteElement;
/**
 * @slot - Default slotted content for the badge
 */
export declare class MteBadge extends MteBadge_base {
    static styles: import("lit").CSSResult[];
    /** Position of the badge relative to the parent element */
    position: MteBadgePosition;
    /** Aligns the badge relative to the parent element */
    placement: MteBadgePlacement;
    /** Whether the badge should overlap its contents or not */
    withoutOverlap: boolean;
    /** Whether to display the badge as a dot or not */
    dot: boolean;
    /** Whether to display the badge if the value is zero or not. */
    withShowZero: boolean;
    /** Whether the badge should be hidden or not */
    hide: boolean;
    /** Whether the badge should render without an outline or not  */
    withoutOutline: boolean;
    /** Caps the content value if the content is a number */
    limit: number;
    /** The role to apply to the label element */
    role: string | null;
    /** The aria-label to apply to the label element */
    ariaLabel: string | null;
    /** The value to determine the number or string in the badge */
    get value(): number | string | null | undefined;
    set value(val: string | number | null | undefined);
    private _value;
    private _inheritedAttributes;
    willUpdate(changedProperties: any): void;
    private renderLabelTemplate;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-badge': MteBadge;
    }
}
export {};
