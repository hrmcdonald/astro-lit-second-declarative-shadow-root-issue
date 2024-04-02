import { MteContentBase } from '../../core';
import '../icon';
import '../progress-spinner';
declare const MteCondition_base: import("../../core").Constructor<import("../../core").ColorInterface<import("../../core").StatusPalette>> & typeof MteContentBase;
/**
 * @dependency mte-icon
 * @dependency mte-spinner
 */
export declare class MteCondition extends MteCondition_base {
    static styles: import("lit").CSSResult[];
    /** Default condition type. Sets fallback icon and color. */
    type: 'success' | 'error' | 'warn' | 'info' | 'upload';
    /** Overrides the icon defined for the current type with a custom one */
    icon: string;
    /** Forces the color to be gray */
    muted: boolean;
    /** Displays a loading indicator instead of the icon */
    loading: boolean;
    /** Defines the icon size and loading indicator radius */
    size: string | number;
    render(): import("lit-html").TemplateResult<1>;
    private getColor;
    private getIcon;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-condition': MteCondition;
    }
}
export {};
