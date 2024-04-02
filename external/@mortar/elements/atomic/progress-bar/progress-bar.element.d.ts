import { ProgressBarPreset } from './progress-bar.presets';
import { MteElement, StyleMap, MteElementParts } from '../../core';
export interface MteProgressBarParts extends MteElementParts {
    /** The track behind the filled bar */
    track?: StyleMap;
    /** The filled portion of the progress bar */
    bar?: StyleMap;
}
declare const MteProgressBar_base: import("../../core").Constructor<import("../../core").ColorInterface<import("../../core").StatusPalette>> & import("../../core").Constructor<import("../../core").PresetElementInterface<ProgressBarPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteProgressBarParts>> & typeof MteElement;
/**
 * @csspart track - The track behind the filled bar
 * @csspart bar - The filled portion of the progress bar
 */
export declare class MteProgressBar extends MteProgressBar_base {
    static styles: import("lit").CSSResult[];
    /** Value of the progress bar */
    get value(): number;
    set value(newValue: number);
    private _value;
    /** Renders the bar as an indeterminate loading indicator */
    indeterminate: boolean;
    /**
     * Render without animations
     * @ignore
     */
    withoutAnimation: boolean;
    /** The role of this element. Defaults to `progressbar` and should not be changed. */
    role: string;
    /** Communicates the value of the progress-bar */
    ariaValueNow: string;
    /** Communicates the minimum value of this progress-bar. */
    ariaValueMin: string;
    /** Communicates the maximum value of this progress-bar. */
    ariaValueMax: string;
    private handleValueChange;
    private isIndeterminate;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-progress-bar': MteProgressBar;
    }
}
export {};
