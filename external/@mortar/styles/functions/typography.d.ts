import { config } from '../config';
export declare const fontBaseMixin: (family?: "sans" | "serif" | "mono") => string;
export interface fontSetOptions {
    s: keyof typeof config.font.set;
    ratio?: typeof config.font.ratio[keyof typeof config.font.ratio];
    fontFamily?: keyof typeof config.font.family;
    important?: boolean;
}
export declare const fontSetMixin: ({ s: set, ratio, fontFamily, important, }: fontSetOptions) => string;
export declare const fontOverflowEllipsisMixin: () => string;
export declare const fontSetInheritMixin: () => string;
