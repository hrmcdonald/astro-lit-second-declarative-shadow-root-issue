import { Constructor, MteElement, StyleMap } from '..';
export interface MteElementParts {
    /** The host element "part". Overrides the `se` property of this element */
    host?: StyleMap;
}
export type StylePartsMap<T = string | number> = {
    [name: string]: StyleMap<T>;
};
export declare class StylePartsInterface<StyleParts> {
    /**
     * Style mappings that are applied to each css part by name. Set the
     * property `host` to apply a `StyleInfo` object to the element host itself.
     */
    sp?: StyleParts;
}
export declare const StylePartsMixin: <StyleParts, T extends Constructor<MteElement>>(superClass: T) => Constructor<StylePartsInterface<StyleParts>> & T;
