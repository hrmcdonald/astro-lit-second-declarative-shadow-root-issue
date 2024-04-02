import { MteElement, MteElementParts } from '../../core';
import '../../utilities/overlay-trigger';
import '../tooltip';
import '../icon';
import { MteTooltip } from '../tooltip';
import { MteOverlayTrigger } from '../../utilities/overlay-trigger';
export interface MteAvatarParts extends MteElementParts {
}
type SizeOptions = 'md' | 'sm' | 'lg' | undefined;
declare const MteAvatar_base: import("../../core").Constructor<import("../../core").ButtonInterface & import("../../core").TabIndexInterface & import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteAvatarParts>> & typeof MteElement;
/**
 * @dependency mte-overlay-trigger
 * @dependency mte-tooltip
 *
 * @slot - Default slotted content
 */
export declare class MteAvatar extends MteAvatar_base {
    static styles: import("lit").CSSResult[];
    /** Generally, the name that is being represented in the avatar. This will be used to display initials if no image is provided and ti will also be the `alt` text for the image */
    label: string;
    /** Optional tooltip to show full name */
    withTooltip?: boolean;
    /** Specifies the path to the image to be displayed in the avatar */
    src?: string;
    /** Specifies the srcset path to the image to be displayed in the avatar */
    srcSet?: string;
    /** Sets the size of the avatar. Width and height will have the same value */
    size?: SizeOptions | number | string;
    /** Customize the background color of the avatar when no image is rendered */
    bg?: string | undefined;
    /** Customize the font color of the avatar when no image is rendered */
    c?: string;
    /** Displays avatar without elevation. */
    withoutElevation?: boolean;
    /** Displays avatar with a border. */
    withBorder?: boolean;
    /** Provide a custom initials formatter. By default, initials will be first letter of first name and first letter of last name provided */
    initialsFormatter?: (label: string) => string;
    /** Provide a custom background color formatter. BY default, a random mortar color will be set as the background color for the avatar when no image is present */
    colorFormatter?: (label: string) => {
        color: string;
        contrast: string;
    };
    tooltipElement: MteTooltip;
    overlayTriggerElement: MteOverlayTrigger;
    showFallback: boolean;
    initials?: string;
    paletteColor?: {
        color: string;
        contrast: string;
    };
    connectedCallback(): void;
    updated(changedProperties: Map<string, any>): void;
    private handleSrcUpdate;
    handleFallback(): void;
    protected updateInstanceStyles(changedProps: any): void;
    private loadImage;
    handleImageLoad(): void;
    handleImageError(): void;
    getInitials(name: any): any;
    getAvatarPalette(name: any): {
        color: string;
        contrast: string;
    };
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-avatar': MteAvatar;
    }
}
export {};
