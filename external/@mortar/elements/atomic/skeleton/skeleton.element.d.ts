import { MteElement, StyleMap, MteElementParts } from '../../core';
import { SkeletonPreset } from './skeleton.presets';
export interface MteSkeletonParts extends MteElementParts {
    /** The inner animated indicator element */
    indicator?: StyleMap;
}
/** Subset of options for text shaped skeletons with multiple lines */
export interface MteSkeletonLineOptions extends MteElementParts {
    /** The measurement for gap spacing between lines */
    gap?: string | number;
    /** The measurement for the height of each line's text skeleton */
    height?: string | number;
    /** Shorthand for `height`. The measurement for the height of each line's text skeleton */
    h?: string | number;
    /** The width of each line's text skeleton except the last one */
    maxPercent?: number | string;
    /** Shorthand for `maxPercent`. The width of each line's text skeleton except the last one */
    max?: number | string;
    /** The width of the last line's text skeleton */
    minPercent?: number | string;
    /** Shorthand for `minPercent`. The width of the last line's text skeleton */
    min?: number | string;
}
declare const MteSkeleton_base: import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<SkeletonPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteSkeletonParts>> & typeof MteElement;
/**
 * @csspart indicator - The inner animated indicator element
 */
export declare class MteSkeleton extends MteSkeleton_base {
    static styles: import("lit").CSSResult[];
    /** Prevents shimmer/loading animation */
    withoutAnimation: boolean;
    /**
     * Determines the shape of this skeleton object.
     * Use `text` to represent text content, `rect`
     * is good for images, and `circle` for avatars.
     */
    shape: 'text' | 'rect' | 'circle';
    /** Determines the width of the skeleton. Only applied to `text` and `rect`. */
    width: string | number;
    /** Shorthand for `width`. Determines the width of the skeleton. Only applied to `text` and `rect`. */
    w: string | number;
    /** Determines the height of the skeleton. Only applied to `text` and `rect` skeletons. */
    height: string | number;
    /** Shorthand for `height`. Determines the height of the skeleton. Only applied to `text` and `rect` skeletons. */
    h: string | number;
    /** Determines the diameter of the skeleton. Only applied to `circle` skeletons. */
    diameter: string | number;
    /** Shorthand for `diameter`. Determines the diameter of the skeleton. Only applied to `circle` skeletons. */
    d: string | number;
    /** Duplicates this skeleton vertically to mock out X number of lines of text. Only applies to `text` shaped skeletons */
    lines: number;
    /** Subset of options for `text` shaped skeletons with multiple lines */
    lineOptions: MteSkeletonLineOptions;
    /** Hides the skeleton from screen readers. */
    ariaHidden: string;
    /** Varies text width according to line options even when no lines are defined */
    withLineOptions: boolean;
    private defaultLineOptions;
    /** Update :host dynamic style overrides */
    protected updateInstanceStyles(changedProps: any): void;
    private getRandomLineLength;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-skeleton': MteSkeleton;
    }
}
export {};
