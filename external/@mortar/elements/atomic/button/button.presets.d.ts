import { CorePalette, DensityOptions, Presets, SizeOptions, RadiusOptions } from '../../core';
export interface ButtonPreset {
    size?: SizeOptions;
    color?: CorePalette;
    density?: DensityOptions;
    radius?: RadiusOptions;
}
export declare const buttonPresets: Presets<ButtonPreset>;
export interface IconButtonPreset {
    size?: SizeOptions;
    color?: CorePalette;
    density?: DensityOptions;
    radius?: RadiusOptions;
}
export declare const iconButtonPresets: Presets<IconButtonPreset>;
