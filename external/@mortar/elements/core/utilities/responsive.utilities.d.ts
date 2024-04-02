import { MteElement, ResponsiveValue } from '../base-classes';
export declare const getResponsivePropVal: (c: MteElement, prop: string, bp: string) => any;
export declare const mapResponsiveNumberToPx: (value: ResponsiveValue<string | number>) => string | Partial<Record<"xs" | "sm" | "md" | "lg" | "xl" | "xxl", string | number>>;
