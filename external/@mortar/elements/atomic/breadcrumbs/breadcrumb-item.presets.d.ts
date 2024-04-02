import { Presets, RadiusOptions } from '../../core';
export interface BreadcrumbItemPreset {
    fontWeight?: 'regular' | 'bold';
    radius?: RadiusOptions;
    withoutUnderline?: boolean;
}
export declare const breadcrumbItemPresets: Presets<BreadcrumbItemPreset>;
