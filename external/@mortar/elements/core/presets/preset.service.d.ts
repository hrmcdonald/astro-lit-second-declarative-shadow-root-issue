import { MortarPreset } from './presets';
import { Signal } from '../utilities';
declare class _MtePresetService {
    private presets;
    private presetChangedSignal;
    setPreset(presetName: string, preset: Partial<MortarPreset>): void;
    setComponentPreset<C extends keyof MortarPreset>(presetName: string, componentName: C, componentPreset: Partial<MortarPreset[C]>): void;
    setComponentPresetProperty<C extends keyof MortarPreset, P extends keyof MortarPreset[C]>(presetName: string, componentName: C, propertyName: P, value: MortarPreset[C][P] | Partial<MortarPreset[C][P]>): void;
    getPreset(presetName: string): MortarPreset;
    getComponentPreset<C extends keyof MortarPreset>(presetName: string, componentName: C): MortarPreset[C];
    selectPreset(presetName: string): Signal<MortarPreset>;
    selectComponentPreset<C extends keyof MortarPreset>(presetName: string, componentName: C): Signal<MortarPreset[C]>;
}
export declare const MtePresetService: _MtePresetService;
export {};
