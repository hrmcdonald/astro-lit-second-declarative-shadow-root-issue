import { LitElement } from 'lit';
import { MteElementParts, MortarPreset, MortarPresetTheme } from '../../core';
export interface MtePresetProviderParts extends MteElementParts {
}
/**
 * @slot - Default slotted content
 */
export declare class MtePresetProvider extends LitElement {
    static styles: import("lit").CSSResult[];
    /** The preset to be used to render child elements */
    context: 'default' | 'px' | 'cx' | 'rx' | string;
    /** The registered preset ID name the given `config` will be set for */
    configId: string;
    /** The config passed here will be set as the preset config for the `configId` in the `MtePresetService` */
    config: MortarPreset;
    /**
     * The theme applied to child elements
     * @ignore
     */
    theme: string;
    /**
     * The theme color scheme applied to child elements
     * @ignore
     */
    colorScheme: MortarPresetTheme['colorScheme'];
    private presetContextProvider;
    private handlePresetChange;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-preset-provider': MtePresetProvider;
    }
}
