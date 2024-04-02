import { DensityOptions } from '../../core';
export interface MteTreeContext {
    indicator: 'chevron' | 'box';
    alignIndicator: 'start' | 'end';
    withLine: boolean;
    density: DensityOptions;
}
export declare const treeContext: {
    __context__: MteTreeContext;
};
