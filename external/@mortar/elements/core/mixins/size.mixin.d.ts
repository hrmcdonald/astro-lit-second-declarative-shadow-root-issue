import { Constructor, MteElement } from '../';
import { PresetElementInterface } from '../presets/preset.mixin';
export type SizeOptions = 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
export declare class SizeInterface {
    /**
     * Adjusts the scale of this component
     * @attr size
     */
    size: SizeOptions;
}
export declare const SizeMixin: <T extends Constructor<MteElement & Partial<PresetElementInterface<any>>>>(superClass: T) => Constructor<SizeInterface> & T;
