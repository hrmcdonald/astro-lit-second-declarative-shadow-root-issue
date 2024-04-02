import { CorePalette, Presets } from './../../core';
export interface LinkPreset {
    color?: CorePalette;
    fontWeight?: 'regular' | 'bold';
}
export declare const linkPresets: Presets<LinkPreset>;
