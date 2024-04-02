import { PropertyMapper } from './css-in-js.types';
/** Maps property shorthand values to one or many full css properties */
export declare const propShorthands: PropertyMapper;
/**
 * Returns the @mortar/styles config value for a given dot notated string.
 * Numbers and non-dot notated string will just be returned as is.
 */
export declare const dotStringToConfigValue: (value: string | number) => string | number;
/** Maps dot notated string values to theme config variables */
export declare const dotStringToConfigValueMapper: PropertyMapper;
export declare const mapNumberToPx: (val: string | number | null) => string;
export declare const mapPxToNumber: (val: string | null) => number;
/** Maps the values of any given props to px units if it is a number */
export declare const numberToPx: PropertyMapper;
/** Maps spacing values from designated spacing shorthands */
export declare const spacingValShorthands: PropertyMapper;
/** Maps border radius values from designated border radius shorthands */
export declare const borderRadiusValShorthands: PropertyMapper;
/** Maps border width values from designated border width shorthands */
export declare const borderWidthValShorthands: PropertyMapper;
/** Maps opacity values from designated opacity shorthands */
export declare const opacityValShorthands: PropertyMapper;
/** Maps font-weight values from designated spacing shorthands */
export declare const fontWeightValShorthands: PropertyMapper;
/** Maps font-size values from designated spacing shorthands */
export declare const fontSizeValShorthands: PropertyMapper;
/** Maps font-family values from designated font-family shorthands */
export declare const fontFamilyValShorthands: PropertyMapper;
/** Maps elevation values from designated elevation shorthands */
export declare const elevationValShorthands: PropertyMapper;
