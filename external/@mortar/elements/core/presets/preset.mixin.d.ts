import { Constructor, MteElement } from '../';
import { MortarPreset } from './presets';
export type PresetOptions = 'md' | 'sm' | 'lg' | string | undefined;
export declare class PresetElementInterface<P> {
    /** @ignore */
    readonly __componentName: keyof MortarPreset;
    /** Selects the preset for this component. Overrides the global preset for this instance of this component. */
    preset: string;
    /** @ignore */
    appliedPreset: string;
}
export interface PresetMixinFactoryOptions {
    reflectAppliedPreset: boolean;
}
export declare const PresetMixinFactory: <P>(componentName: keyof MortarPreset, options?: PresetMixinFactoryOptions) => <T extends Constructor<MteElement>>(superClass: T) => Constructor<PresetElementInterface<P>> & T;
