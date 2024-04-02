import { Constructor, MteElement } from '../';
import { PresetElementInterface } from '../presets/preset.mixin';
export type RadiusOptions = 'sm' | 'md' | 'lg' | 'none' | undefined;
export declare class RadiusInterface {
    /**
     * Adjusts the border-radius of this component
     * @attr radius
     */
    radius: RadiusOptions;
}
export declare const RadiusMixin: <T extends Constructor<MteElement & Partial<PresetElementInterface<any>>>>(superClass: T) => Constructor<RadiusInterface> & T;
