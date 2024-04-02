import { DensityOptions, MteElement } from '../../core';
/**
 * @slot - Default slotted content
 */
export declare class MteDensityProvider extends MteElement {
    static styles: import("lit").CSSResult[];
    /** The density that should be applied to all child elements */
    density: DensityOptions;
    private densityContextProvider;
    private handleDensityChange;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-density-provider': MteDensityProvider;
    }
}
