import { MteElement, MteElementParts, SizeOptions, ResponsiveValue } from '../../core';
import './avatar.element';
import '../../utilities/overlay-trigger';
import '../tooltip';
import '../link';
import '../popover';
export interface MteAvatarGroupParts extends MteElementParts {
}
export interface MteAvatarItemOption {
    label: string;
    /** Optional tooltip to show full name */
    withTooltip?: boolean;
    href?: string;
    src?: string;
    srcSet?: string;
    bg?: ResponsiveValue<string | undefined>;
    c?: ResponsiveValue<string | undefined>;
    initialsFormatter?: (label: string) => string;
    colorFormatter?: (label: string) => {
        color: string;
        contrast: string;
    };
}
declare const MteAvatarGroup_base: import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteAvatarGroupParts>> & typeof MteElement;
/**
 * @dependency mte-overlay-trigger
 * @dependency mte-tooltip
 * @dependency mte-link
 * @dependency mte-popover
 *
 * @slot - Default slotted content
 */
export declare class MteAvatarGroup extends MteAvatarGroup_base {
    static styles: import("lit").CSSResult[];
    /** Sets how many avatars will be visible. The truncated items will be represented with a `+X` label   */
    limit?: any;
    /** Sets the size of the avatar item. Width and height will have the same value */
    size?: SizeOptions | number | string;
    /** Sets the space between avatar items. */
    gap?: string;
    /** Array of avatars to be rendered in MteAvatarGroup.  */
    items: MteAvatarItemOption[];
    triggerElem: HTMLButtonElement;
    protected updateInstanceStyles(changedProps: any): void;
    private renderItem;
    private renderItems;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-avatar-group': MteAvatarGroup;
    }
}
export {};
