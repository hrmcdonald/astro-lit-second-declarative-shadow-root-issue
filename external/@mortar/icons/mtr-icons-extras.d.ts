export declare const mtrIconLit: {
    name: 'lit';
    data: string;
};
export declare const mtrIconTexas: {
    name: 'texas';
    data: string;
};
export type mtrIconExtras = 'lit' | 'texas';
export interface MortarCoreExtrasIcon {
    name: mtrIconExtras;
    data: string;
}
export type MortarCoreExtrasIconNameSubset<T extends Readonly<MortarCoreExtrasIcon[]>> = T[number]['name'];
