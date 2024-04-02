import { MteProgressSpinner } from './progress-spinner.element';
/**
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate `<mtr-progress-spinner>` instance.
 *
 * @csspart container - Inner container element that houses the track and bar
 * @csspart track - The track behind the filled bar
 * @csspart bar - The filled portion of the spinner
 */
export declare class MteSpinner extends MteProgressSpinner {
    indeterminate: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-spinner': MteProgressSpinner;
    }
}
