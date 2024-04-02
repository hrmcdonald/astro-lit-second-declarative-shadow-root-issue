import { SelectorOptions } from '@mortar/styles';
import { SelectorStyles, StyleMap, StyleProperty } from './css-in-js.types';
/**
 * Parses properties to their actual property mappings according to the
 * mapping function pipelines defined above
 */
export declare const parsePropShorthands: (prop: string, value: string | number) => StyleProperty[];
/**
 * Parses styleMap values to selector + style info used for
 * updating CSSStyleSheets or <style> tags.
 */
export declare const generateSelectorsFromStyleMap: (selectorFn: (options?: SelectorOptions) => string, styleMap: StyleMap) => SelectorStyles[];
/**
 * Combines all instance styleMap selectors + style info into one cssText
 * used for updating CSSStyleSheets or <style> tags.
 */
export declare const constructInstanceStyles: (instanceStylesMap: any) => string;
