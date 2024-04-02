/**
 * Options for generating a selector with infix or postfix modifiers.
 * These infix or postfix values must be placed in different parts of
 * the generated selector depending upon if the selector root is a
 * `:host()` element or standard `#id`/`.class`.
 *
 * `nonHostInfix` and `nonHostPostfix` will override values passed
 * for `infix` and `postfix` if the the selector root is not `:host`.
 * This is so that the selector can be used to provide different
 * behavior when it is dynamically with both :host and id/class
 * selectors (most likely in mixins).
 */
export interface SelectorOptions {
    infix?: string;
    postfix?: string;
    nonHostInfix?: string;
    nonHostPostfix?: string;
}
/**
 * Special type that defines a SelectorFactory function.
 * These functions work exactly like global selector() function
 * except the selectorRoot and some possible infix or postfix values
 * have already been set by a parent mixin.
 */
export type SelectorFactory = (options?: SelectorOptions) => string;
/** Determines if a class is `:host` or not */
export declare const isHostClass: (selectorRoot: string) => boolean;
/**
 * Core building block of our CSS in JS "mixins"
 *
 * This factory allows mixins to declare their own selector root
 * alongside their own infix and/or postfix options. The factory returns
 * a localized custom selector function that the user can call with
 * additional infix or postfix values so that the selector can be used
 * multiple times within the scope of the "mixin" callback.
 */
export declare const selectorFactory: (selectorRoot: string, { infix: internalInfix, postfix: internalPostfix, nonHostInfix: internalNonHostInfix, nonHostPostfix: internalNonHostPostfix, }?: SelectorOptions) => SelectorFactory;
/**
 * Function used for generating a selector with infix or postfix modifiers.
 * These infix or postfix values must be placed in different parts of
 * the generated selector depending upon if the selectorRoot is a
 * `:host()` element or standard `#id`/`.class`.
 *
 * `nonHostInfix` and `nonHostPostfix` will override values passed for `infix`
 * and `postfix` if the the selector root is not `:host`. This is so that the
 * selector can be used to provide different behavior when it is dynamically
 * with both :host and id/class selectors (most likely in mixins).
 */
export declare const selector: (selectorRoot: string, { infix, postfix, nonHostInfix, nonHostPostfix }?: SelectorOptions) => string;
export declare const sizeModifier: (value: number | string, size: string) => string;
export declare const stripUnit: (value: string) => string;
export declare const stripUnitInt: (value: string) => number;
export declare const stripUnitFloat: (value: string) => number;
export declare const sizeVariantsMixin: (selectorRoot: string, content: (selector: SelectorFactory, variant: string) => string) => string;
export declare const densityVariantsMixin: (selectorRoot: string, content: (selector: SelectorFactory, variant: string) => string) => string;
export declare const disabled: () => string;
export declare const fillspacing: () => string;
export declare const visuallyHidden: () => string;
