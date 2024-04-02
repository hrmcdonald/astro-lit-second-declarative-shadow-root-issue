import { LitElement } from 'lit';
import { Constructor } from '../';
import { PresetElementInterface } from '../presets/preset.mixin';
export type DensityOptions = 'compact' | 'comfy' | 'roomy' | undefined;
export declare class DensityInterface {
    /**
     * Adjusts the data density of this component
     * @attr density
     */
    density: DensityOptions;
}
export declare const DensityMixin: <T extends Constructor<LitElement & PresetElementInterface<any>>>(superClass: T) => Constructor<DensityInterface> & T;
