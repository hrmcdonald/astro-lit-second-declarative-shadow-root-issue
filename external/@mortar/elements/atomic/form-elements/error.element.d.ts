import { MteElement, MteElementParts, StyleMap } from '../../core';
import '../icon';
export interface MteErrorParts extends MteElementParts {
    /** The icon for the error */
    icon?: StyleMap;
}
/**
 * Element used to represent error messaging text
 */
export declare class MteError extends MteElement {
    static styles: import("lit").CSSResult[];
    /** Icon Library from which to load icon */
    iconLibrary?: string;
    /** The icon to render within the error */
    icon?: string;
    /** Whether the icon should be hidden or not */
    hideIcon: boolean;
    /** Default unique ID for this error */
    id: string;
    render(): import("lit-html").TemplateResult<1>;
}
/**
 * Element used to represent error messaging text
 */
export declare class MteErrorText extends MteError {
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-error': MteError;
        'mte-error-text': MteErrorText;
    }
}
