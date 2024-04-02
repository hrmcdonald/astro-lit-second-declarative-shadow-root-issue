import { MortarThemeConfig } from '@mortar/styles';
export type StyleMapCallback = (themeConfig: MortarThemeConfig) => string | number;
export interface StyleMap<T = string | number | boolean | StyleMapCallback | Record<string, string | number | StyleMapCallback | Record<string, string | number | StyleMapCallback>>> {
    [name: string]: T | undefined | null;
}
export interface SelectorMetadata {
    selector: string;
    styleMap: StyleMap;
    selectorWrapper?: string;
}
export interface SelectorStyles {
    selector: string;
    style: string;
    selectorWrapper?: string;
}
export interface StyleProperty {
    prop: string;
    value: string | number;
}
export type PropertyMapper = (props: StyleProperty[]) => StyleProperty[];
