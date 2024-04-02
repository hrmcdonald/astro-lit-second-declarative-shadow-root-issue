export interface MortarPresetTheme {
    name: string;
    colorScheme: 'system' | 'light' | 'dark';
}
export declare const defaultPreset: {
    preset: string;
    theme: MortarPresetTheme;
    MteButton: import("../../atomic/button/button.presets").ButtonPreset;
    MteIconButton: import("../../atomic/button/button.presets").IconButtonPreset;
    MteIcon: import("../../atomic/icon/icon.presets").IconPreset;
    MteProgressBar: import("../../atomic/progress-bar/progress-bar.presets").ProgressBarPreset;
    MteProgressSpinner: import("../../atomic/progress-spinner/progress-spinner.presets").ProgressSpinnerPreset;
    MteToolbar: import("../../atomic/toolbar/toolbar.presets").ToolbarPreset;
    MteCard: import("../../atomic/card/card.presets").CardPreset;
    MteCardButton: import("../../atomic/card/card.presets").CardButtonPreset;
    MteTree: import("../../atomic/tree/tree.presets").TreePreset;
    MteTag: import("../../atomic/tag/tag.presets").TagPresets;
    MteBadge: import("../../atomic/badge/badge.presets").BadgePreset;
    MteLink: import("../../atomic/link/link.presets").LinkPreset;
    MteAlert: import("../../atomic/alert/alert.presets").AlertPreset;
    MteInput: import("../../atomic/input/input.presets").InputPreset;
    MteDrawer: import("../../atomic/drawer/drawer.presets").DrawerPreset;
    MteAside: import("../../atomic/aside/aside.presets").AsidePreset;
    MteBreadcrumbItem: import("../../atomic/breadcrumbs/breadcrumb-item.presets").BreadcrumbItemPreset;
    MteModal: import("../../atomic/modal/modal.presets").ModalPreset;
    MteCheckbox: import("../../atomic/checkbox/checkbox.presets").CheckboxPreset;
    MteRadio: import("../../atomic/radio/radio.presets").RadioPreset;
    MteNavRoot: import("../../atomic/nav/nav.presets").NavRootPreset;
    MteNavHeader: import("../../atomic/nav/nav.presets").NavHeaderPreset;
    MteNavSubHeader: import("../../atomic/nav/nav.presets").NavSubHeaderPreset;
    MteNavSidebar: import("../../atomic/nav/nav.presets").NavSidebarPreset;
    MteNavContent: import("../../atomic/nav/nav.presets").NavContentPreset;
    MteNavFooter: import("../../atomic/nav/nav.presets").NavFooterPreset;
    MteNavButton: import("../../atomic/nav/nav.presets").NavButtonPreset;
    MteNavIconButton: import("../../atomic/nav/nav.presets").NavIconButtonPreset;
    MteNavItem: import("../../atomic/nav/nav.presets").NavItemPreset;
    MteButtonGroup: import("../../atomic/button-group/button-group.presets").ButtonGroupPreset;
    MteSwitch: import("../../atomic/switch/switch.presets").SwitchPreset;
    MteNativeSelect: import("../../atomic/native-select/native-select.presets").NativeSelectPreset;
    MteTextarea: import("../../atomic/textarea/textarea.presets").TextareaPreset;
    MteSkeleton: import("../../atomic/skeleton/skeleton.presets").SkeletonPreset;
    MteSlider: import("../../atomic/slider/slider.presets").SliderPreset;
    MteRangeSlider: import("../../atomic/range-slider/range-slider.presets").RangeSliderPreset;
    MteSegmentedControl: import("../../atomic/segmented-control/segmented-control.presets").SegmentedControlPreset;
};
export type MortarPreset = typeof defaultPreset;
export declare const pxPreset: MortarPreset;
export declare const cxPreset: MortarPreset;
export declare const rxPreset: MortarPreset;