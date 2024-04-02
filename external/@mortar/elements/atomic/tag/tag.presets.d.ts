import { CorePalette, Presets, SizeOptions, RadiusOptions } from '../../core';
export interface TagPresets {
    size?: SizeOptions;
    color?: CorePalette;
    radius?: RadiusOptions;
}
export declare const tagPresets: Presets<TagPresets>;
