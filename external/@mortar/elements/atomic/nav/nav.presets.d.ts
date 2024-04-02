import { Presets } from '../../core';
export interface NavRootPreset {
    mobileBreakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    inverse?: 'header' | 'sidebar';
    preferSidebar?: 'opened' | 'closed';
}
export declare const navRootPresets: Presets<NavRootPreset>;
export interface NavHeaderPreset {
    withContainer?: boolean;
}
export declare const navHeaderPresets: Presets<NavHeaderPreset>;
export interface NavSubHeaderPreset {
    withContainer?: boolean;
}
export declare const navSubHeaderPresets: Presets<NavSubHeaderPreset>;
export interface NavSidebarPreset {
    hideUntilTransition?: boolean;
}
export declare const navSidebarPresets: Presets<NavSidebarPreset>;
export interface NavContentPreset {
}
export declare const navContentPresets: Presets<NavContentPreset>;
export interface NavFooterPreset {
    withContainer?: boolean;
}
export declare const navFooterPresets: Presets<NavFooterPreset>;
export interface NavButtonPreset {
}
export declare const navButtonPresets: Presets<NavButtonPreset>;
export interface NavIconButtonPreset {
}
export declare const navIconButtonPresets: Presets<NavIconButtonPreset>;
export interface NavItemPreset {
}
export declare const navItemPresets: Presets<NavItemPreset>;
