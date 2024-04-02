import { config } from '../config';
import { SelectorOptions } from './core';
import { CSSResult } from 'lit';
export declare const paletteGroupOptions: {
    core: string[];
    status: string[];
    viz: string[];
};
export interface ColorOptions {
    g?: 'core' | 'status' | 'viz';
    p: string;
    c?: 'lighter' | 'light' | 'base' | 'dark' | 'darker';
    o?: keyof typeof config.opacity | number | string;
}
export declare const color: ({ g: group, p: palette, c: color, o: opacity, }: ColorOptions) => string;
export declare const colorContrast: ({ g: group, p: palette, c: color, o: opacity, }: ColorOptions) => string;
/**
 * Calls the callback with each palette in the requested palette group
 * then combines all of the returned CSS template strings.
 */
export declare const forEachPGVariant: <PaletteGroup extends "core" | "status" | "viz">(group: PaletteGroup, callback: (group: PaletteGroup, palette: string) => CSSResult | string) => string;
export interface TokenOptions {
    n: keyof typeof config.color;
    o?: keyof typeof config.opacity | number | string;
}
export declare const token: ({ n: name, o: opacity }: TokenOptions) => string;
export interface StateTokenOptions {
    n: keyof typeof config.stateToken;
    s: string;
    o?: keyof typeof config.opacity | number | string;
}
export declare const stateToken: ({ n: name, s: state, o: opacity }: StateTokenOptions) => string;
export interface StateTokenMixinOptions {
    selectorOptions?: SelectorOptions;
    n: keyof typeof config.stateToken;
    forStates?: string[];
    forProps?: string[];
    autoContrast?: boolean;
    useImportant?: boolean;
    asOverlay?: boolean;
}
export declare const stateTokenMixin: (selectorRoot: string, { selectorOptions, n: name, forStates, forProps, useImportant, asOverlay, }: StateTokenMixinOptions) => string;
export interface FocusOptions {
    selectorOptions?: SelectorOptions;
    selectorState?: ':focus-visible' | ':focus' | ':hover' | null;
    selectorOutlet?: '::before' | '::after';
    flush?: boolean;
    radius?: string;
    inset?: string;
    radiusTopLeft?: string;
    radiusTopRight?: string;
    radiusBottomLeft?: string;
    radiusBottomRight?: string;
    offsetTop?: string;
    offsetRight?: string;
    offsetBottom?: string;
    offsetLeft?: string;
}
export declare const focusedMixin: (selectorRoot: string, { selectorOptions, selectorState, selectorOutlet, flush, radius, inset, radiusTopLeft, radiusTopRight, radiusBottomLeft, radiusBottomRight, offsetTop, offsetRight, offsetBottom, offsetLeft, }: FocusOptions) => string;
