interface SidebarState {
    element: HTMLElement;
    position: 'left' | 'right';
    opened: boolean;
    overlayMode: string;
    hideUntilTransition: boolean;
}
interface HeaderState {
    element: HTMLElement;
    height: number;
    withContainer: boolean;
}
interface SubHeaderState {
    element: HTMLElement;
}
export declare const navState: {
    sidebar: import("../../core").Signal<SidebarState>;
    header: import("../../core").Signal<HeaderState>;
    subheader: import("../../core").Signal<SubHeaderState>;
    sidebarSize: import("../../core").Signal<string | number>;
    activeBreakpoint: import("../../core").Signal<string>;
    inverse: import("../../core").Signal<"header" | "sidebar">;
    preferSidebar: import("../../core").Signal<"opened" | "closed">;
    withinMobileBreakpoint: import("../../core").Signal<boolean>;
};
export declare const deleteNavElementState: (collectionName: string, element: HTMLElement) => void;
export declare const updateNavElementState: (collectionName: string, element: HTMLElement, state: any) => void;
export declare const getCurrentBreakpoint: (w: Window) => string;
export declare const belowMobileBreakpoint: (activeBreakpoint: string, mobileBreakpoint: string) => boolean;
export {};
