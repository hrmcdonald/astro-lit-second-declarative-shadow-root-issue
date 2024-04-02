import { MteElement, MteElementParts, StyleMap } from '../../core';
import { ProgressSpinnerPreset } from './progress-spinner.presets';
export interface MteProgressSpinnerParts extends MteElementParts {
    /** Inner container element that houses the track and bar */
    container?: StyleMap;
    /** The track behind the filled bar */
    track?: StyleMap;
    /** The filled portion of the spinner */
    bar?: StyleMap;
}
declare const MteProgressSpinner_base: import("../../core").Constructor<import("../../core").ColorInterface<import("../../core").StatusPalette>> & import("../../core").Constructor<import("../../core").PresetElementInterface<ProgressSpinnerPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteProgressSpinnerParts>> & typeof MteElement;
/**
 * @csspart container - Inner container element that houses the track and bar
 * @csspart track - The track behind the filled bar
 * @csspart bar - The filled portion of the spinner
 */
export declare class MteProgressSpinner extends MteProgressSpinner_base {
    static styles: import("lit").CSSResult;
    /** The diameter of the progress spinner (will set width and height) */
    diameter: number;
    /** Shorthand for `diameter`. The diameter of the progress spinner (will set width and height) */
    d: any;
    /** Renders the spinner as an indeterminate loading indicator */
    indeterminate: boolean;
    /** Value of the progress spinner */
    get value(): number;
    set value(newValue: number);
    private _value;
    /**
     * Render without animations
     * @ignore
     */
    withoutAnimation: boolean;
    /** The role of this element. Defaults to `progressbar` and should not be changed. */
    role: string;
    /** Communicates the value of the progress-spinner when not `indeterminate`. */
    ariaValueNow: string;
    /** Communicates the minimum value of this progress-spinner. */
    ariaValueMin: string;
    /** Communicates the maximum value of this progress-spinner. */
    ariaValueMax: string;
    /** Default diameter */
    private BASE_DIAMETER;
    /** Total length of the drawn path  */
    private PATH_LENGTH;
    /** Used for calculating a standard stoke width based on the size of the circle */
    private R;
    /** Default width of the path stroke */
    private STROKE_WIDTH;
    /** Max width of the path stroke */
    private MAX_STROKE_WIDTH;
    /** Path for the spinner track */
    private trackShape;
    /** Defines the dash pattern of the bar path  */
    private strokeDashArray;
    /** The width of the track and bar path stroke */
    strokeWidth: number;
    /** The size of the progress circle  */
    viewBox: string;
    /** Determines the size of the bar */
    strokeDashOffset: number;
    private handleValueChange;
    firstUpdated(changedProperties: any): void;
    private isIndeterminate;
    private recalculateSizing;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-progress-spinner': MteProgressSpinner;
    }
}
export {};
