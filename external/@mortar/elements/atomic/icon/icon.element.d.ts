import { MteElement } from '../../core';
import { mtrIcon } from '@mortar/icons';
import { IconPreset } from './icon.presets';
declare const MteIcon_base: import("../../core").Constructor<import("../../core").ColorInterface<import("../../core").StatusPalette>> & import("../../core").Constructor<import("../../core").PresetElementInterface<IconPreset>> & typeof MteElement;
/**
 */
export declare class MteIcon extends MteIcon_base {
    static styles: import("lit").CSSResult[];
    /** The name of the icon to render */
    name: mtrIcon | string;
    /** The library to load the icon from. The default library is `_default`. */
    library: string;
    /** The size of this icon. Matches a given font-size in px. */
    size: string | number;
    /** Scale this icon relative to the computed font-size of this element. */
    autosize: boolean;
    /** An icon's role is defaults to `img` to ensure they do not interrupt text.  */
    role: string;
    /** Label for icon to be read to screenreader technologies */
    ariaLabel: string;
    /** Label for icon to be read to screenreader technologies */
    ariaHidden: string;
    /** Renders the icon in the default muted ink color. */
    muted: boolean;
    /** Renders this icon with colors defined in the SVG instead of inheriting from CSS parents */
    withColor: boolean;
    /**
     * @hidden
     * Tracks the loaded icon so we don't need to refetch it during hydration
     */
    _loaded?: string;
    private iconSvg;
    private fetchAbortController?;
    private previousIconSubscription;
    private handleNameUpdate;
    private handleAriaLabelChange;
    protected updateInstanceStyles(changedProps: any): void;
    disconnectedCallback(): void;
    private needsIconUpdate;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-icon': MteIcon;
    }
}
export {};
