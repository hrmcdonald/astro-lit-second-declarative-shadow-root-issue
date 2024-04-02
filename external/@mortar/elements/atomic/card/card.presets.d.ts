import { Presets, RadiusOptions } from './../../core';
export interface CardPreset {
    radius?: RadiusOptions;
    withShadow?: boolean;
    withoutShadow?: boolean;
}
export interface CardButtonPreset extends CardPreset {
}
export declare const cardPresets: Presets<CardPreset>;
export declare const cardButtonPresets: Presets<CardButtonPreset>;
