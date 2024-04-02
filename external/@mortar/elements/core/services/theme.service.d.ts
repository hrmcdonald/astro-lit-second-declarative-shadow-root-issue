import { MortarThemeConfig } from '@mortar/styles';
import { Subset } from '../types';
export type MteTheme = 'default' | 'pxLight' | 'cxLight' | 'rxLight';
export type MteColorScheme = 'light' | 'dark' | 'system';
declare class _MteThemeService {
    config: {
        color: {
            black: string;
            white: string;
            light: string;
            dark: string;
            darker: string;
            focus: string;
            focusLighter: string;
            focusContrast: string;
            grey1: string;
            grey2: string;
            grey3: string;
            grey4: string;
            grey5: string;
            grey6: string;
            grey7: string;
            grey8: string;
            grey9: string;
            grey10: string;
            surface1: string;
            surface2: string;
            surface3: string;
            surface4: string;
            surfaceInverse: string;
            ink1: string;
            ink2: string;
            ink3: string;
            ink4: string;
            ink5: string;
            inkInverse: string;
            border1: string;
            border2: string;
            border3: string;
            borderInverse: string;
            disabled1: string;
            disabled2: string;
            disabled3: string;
            disabled4: string;
            disabledInverse1: string;
            disabledInverse2: string;
            disabledInverse3: string;
            readonly1: string;
            readonly2: string;
            readonly3: string;
            readonly4: string;
            elevationBase: string;
            code1: string;
            code2: string;
        };
        palette: {
            green: {
                lighter: {
                    color: string;
                    contrast: string;
                };
                light: {
                    color: string;
                    contrast: string;
                };
                base: {
                    color: string;
                    contrast: string;
                };
                dark: {
                    color: string;
                    contrast: string;
                };
                darker: {
                    color: string;
                    contrast: string;
                };
            };
            teal: {
                lighter: {
                    color: string;
                    contrast: string;
                };
                light: {
                    color: string;
                    contrast: string;
                };
                base: {
                    color: string;
                    contrast: string;
                };
                dark: {
                    color: string;
                    contrast: string;
                };
                darker: {
                    color: string;
                    contrast: string;
                };
            };
            cyan: {
                lighter: {
                    color: string;
                    contrast: string;
                };
                light: {
                    color: string;
                    contrast: string;
                };
                base: {
                    color: string;
                    contrast: string;
                };
                dark: {
                    color: string;
                    contrast: string;
                };
                darker: {
                    color: string;
                    contrast: string;
                };
            };
            blue: {
                lighter: {
                    color: string;
                    contrast: string;
                };
                light: {
                    color: string;
                    contrast: string;
                };
                base: {
                    color: string;
                    contrast: string;
                };
                dark: {
                    color: string;
                    contrast: string;
                };
                darker: {
                    color: string;
                    contrast: string;
                };
            };
            rxBlue: {
                lighter: {
                    color: string;
                    contrast: string;
                };
                light: {
                    color: string;
                    contrast: string;
                };
                base: {
                    color: string;
                    contrast: string;
                };
                dark: {
                    color: string;
                    contrast: string;
                };
                darker: {
                    color: string;
                    contrast: string;
                };
            };
            purple: {
                lighter: {
                    color: string;
                    contrast: string;
                };
                light: {
                    color: string;
                    contrast: string;
                };
                base: {
                    /** Returns a reactive signal that will update any time the global theme changes */
                    color: string;
                    contrast: string;
                };
                dark: {
                    color: string;
                    contrast: string;
                };
                darker: {
                    color: string;
                    contrast: string;
                };
            };
            magenta: {
                lighter: {
                    color: string;
                    contrast: string;
                };
                light: {
                    color: string;
                    contrast: string;
                };
                base: {
                    color: string;
                    contrast: string;
                };
                dark: {
                    color: string;
                    contrast: string;
                };
                darker: {
                    color: string;
                    contrast: string;
                };
            };
            red: {
                lighter: {
                    color: string;
                    contrast: string;
                };
                light: {
                    color: string;
                    contrast: string;
                };
                base: {
                    color: string;
                    contrast: string;
                };
                dark: {
                    color: string;
                    contrast: string;
                };
                darker: {
                    color: string;
                    contrast: string;
                };
            };
            hebRed: {
                /** @internal **/
                lighter: {
                    color: string;
                    contrast: string;
                };
                light: {
                    color: string;
                    contrast: string;
                };
                base: {
                    color: string;
                    contrast: string;
                };
                dark: {
                    color: string;
                    contrast: string;
                };
                darker: {
                    color: string;
                    contrast: string;
                };
            }; /** @internal **/
            orange: {
                lighter: {
                    color: string;
                    contrast: string;
                };
                light: {
                    color: string;
                    contrast: string;
                };
                base: {
                    color: string;
                    contrast: string;
                };
                dark: {
                    color: string;
                    contrast: string;
                };
                darker: {
                    color: string;
                    contrast: string;
                };
            };
            amber: {
                lighter: {
                    color: string;
                    contrast: string;
                };
                light: {
                    color: string;
                    contrast: string;
                };
                base: {
                    color: string;
                    contrast: string;
                };
                dark: {
                    color: string;
                    contrast: string;
                };
                darker: {
                    color: string;
                    contrast: string;
                };
            };
            yellow: {
                lighter: {
                    color: string;
                    contrast: string;
                };
                light: {
                    color: string;
                    contrast: string;
                };
                base: {
                    color: string;
                    contrast: string;
                };
                dark: {
                    color: string;
                    contrast: string;
                };
                darker: {
                    color: string;
                    contrast: string;
                };
            };
            couponYellow: {
                lighter: {
                    color: string;
                    contrast: string;
                };
                light: {
                    color: string;
                    contrast: string;
                };
                base: {
                    color: string;
                    contrast: string;
                };
                dark: {
                    color: string;
                    contrast: string;
                };
                darker: {
                    color: string;
                    contrast: string;
                };
            };
        };
        pg: {
            core: {
                primary: {
                    lighter: {
                        color: string;
                        contrast: string;
                    };
                    light: {
                        color: string;
                        contrast: string;
                    };
                    base: {
                        color: string;
                        contrast: string;
                    };
                    dark: {
                        color: string;
                        contrast: string;
                    };
                    darker: {
                        color: string;
                        contrast: string;
                    };
                };
                secondary: {
                    lighter: {
                        color: string;
                        contrast: string;
                    };
                    light: {
                        color: string;
                        contrast: string;
                    };
                    base: {
                        color: string;
                        contrast: string;
                    };
                    dark: {
                        color: string;
                        contrast: string;
                    };
                    darker: {
                        color: string;
                        contrast: string;
                    };
                };
                tertiary: {
                    lighter: {
                        color: string;
                        contrast: string;
                    };
                    light: {
                        color: string;
                        contrast: string;
                    };
                    base: {
                        color: string;
                        contrast: string;
                    };
                    dark: {
                        color: string;
                        contrast: string;
                    };
                    darker: {
                        color: string;
                        contrast: string;
                    };
                };
                danger: {
                    lighter: {
                        color: string;
                        contrast: string;
                    };
                    light: {
                        color: string;
                        contrast: string;
                    };
                    base: {
                        color: string;
                        contrast: string;
                    };
                    dark: {
                        color: string;
                        contrast: string;
                    };
                    darker: {
                        color: string;
                        contrast: string;
                    };
                };
            };
            status: {
                primary: {
                    lighter: {
                        color: string;
                        contrast: string;
                    };
                    light: {
                        color: string;
                        contrast: string;
                    };
                    base: {
                        color: string;
                        contrast: string;
                    };
                    dark: {
                        color: string;
                        contrast: string;
                    };
                    darker: {
                        color: string;
                        contrast: string;
                    };
                };
                secondary: {
                    lighter: {
                        color: string;
                        contrast: string;
                    };
                    light: {
                        color: string;
                        contrast: string;
                    };
                    base: {
                        color: string;
                        contrast: string;
                    };
                    dark: {
                        color: string;
                        contrast: string;
                    };
                    darker: {
                        color: string;
                        contrast: string;
                    };
                };
                tertiary: {
                    lighter: {
                        color: string;
                        contrast: string;
                    };
                    light: {
                        color: string;
                        contrast: string;
                    };
                    base: {
                        color: string;
                        contrast: string;
                    };
                    dark: {
                        color: string;
                        contrast: string;
                    };
                    darker: {
                        color: string;
                        contrast: string;
                    };
                };
                success: {
                    lighter: {
                        color: string;
                        contrast: string;
                    };
                    light: {
                        color: string;
                        contrast: string;
                    };
                    base: {
                        color: string;
                        contrast: string;
                    };
                    dark: {
                        color: string;
                        contrast: string;
                    };
                    darker: {
                        color: string;
                        contrast: string;
                    };
                };
                warning: {
                    lighter: {
                        color: string;
                        contrast: string;
                    };
                    light: {
                        color: string;
                        contrast: string;
                    };
                    base: {
                        color: string;
                        contrast: string;
                    };
                    dark: {
                        color: string;
                        contrast: string;
                    };
                    darker: {
                        color: string;
                        contrast: string;
                    };
                };
                danger: {
                    lighter: {
                        color: string;
                        contrast: string;
                    };
                    light: {
                        color: string;
                        contrast: string;
                    };
                    base: {
                        color: string;
                        contrast: string;
                    };
                    dark: {
                        color: string;
                        contrast: string;
                    };
                    darker: {
                        color: string;
                        contrast: string;
                    };
                };
            };
            viz: {
                one: {
                    lighter: {
                        color: string;
                        contrast: string;
                    };
                    light: {
                        color: string;
                        contrast: string;
                    };
                    base: {
                        color: string;
                        contrast: string;
                    };
                    dark: {
                        color: string;
                        contrast: string;
                    };
                    darker: {
                        color: string;
                        contrast: string;
                    };
                };
                two: {
                    lighter: {
                        color: string;
                        contrast: string;
                    };
                    light: {
                        color: string;
                        contrast: string;
                    };
                    base: {
                        color: string;
                        contrast: string;
                    };
                    dark: {
                        color: string;
                        contrast: string;
                    };
                    darker: {
                        color: string;
                        contrast: string;
                    };
                };
                three: {
                    lighter: {
                        color: string;
                        contrast: string;
                    };
                    light: {
                        color: string;
                        contrast: string;
                    };
                    base: {
                        color: string;
                        contrast: string;
                    };
                    dark: {
                        color: string;
                        contrast: string;
                    };
                    darker: {
                        color: string;
                        contrast: string;
                    };
                };
                four: {
                    lighter: {
                        color: string;
                        contrast: string;
                    };
                    light: {
                        color: string;
                        contrast: string;
                    };
                    base: {
                        color: string;
                        contrast: string;
                    };
                    dark: {
                        color: string;
                        contrast: string;
                    };
                    darker: {
                        color: string;
                        contrast: string;
                    };
                };
                five: {
                    lighter: {
                        color: string;
                        contrast: string;
                    };
                    light: {
                        color: string;
                        contrast: string;
                    };
                    base: {
                        color: string;
                        contrast: string;
                    };
                    dark: {
                        color: string;
                        contrast: string;
                    };
                    darker: {
                        color: string;
                        contrast: string;
                    };
                };
                six: {
                    lighter: {
                        color: string;
                        contrast: string;
                    };
                    light: {
                        color: string;
                        contrast: string;
                    };
                    base: {
                        color: string;
                        contrast: string;
                    };
                    dark: {
                        color: string;
                        contrast: string;
                    };
                    darker: {
                        color: string;
                        contrast: string;
                    };
                };
            };
        };
        stateToken: {
            surface1: {
                default: string;
                hover: string;
                active: string;
            };
            surface2: {
                default: string;
                hover: string;
                active: string;
            };
            surface3: {
                default: string;
                hover: string;
                active: string;
            };
            surface4: {
                default: string;
                hover: string;
                active: string;
            };
            surfaceInverse: {
                default: string;
                hover: string;
                active: string;
            };
            inkInverse: {
                default: string;
                hover: string;
                active: string;
            };
            link: {
                default: string;
                visited: string;
            };
        };
        opacity: {
            xxl: string;
            xl: string;
            lg: string;
            md: string;
            sm: string;
            xs: string;
            xxs: string;
            xxxs: string;
        };
        border: {
            radius: {
                none: string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                xxl: string;
                full: string;
            };
            width: {
                none: string;
                default: string;
                sm: string;
                md: string;
                lg: string;
            };
        };
        elevation: {
            level: {
                "0": string;
                "1": string;
                "2": string;
                "3": string;
                "4": string;
            };
            opacity: {
                "0": string;
                "1": string;
                "2": string;
                "3": string;
                "4": string;
            };
            z0: string;
            z1: string;
            z2: string;
            z3: string;
            z4: string;
        };
        zIndex: {
            "0": string;
            "10": string;
            "20": string;
            "30": string;
            "40": string;
            "50": string;
            "-1": string;
            auto: string;
        };
        grid: {
            breakpoint: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                xxl: string;
            };
            containerMaxWidth: {
                sm: string;
                md: string;
                lg: string;
                xl: string;
                xxl: string;
            };
        };
        size: {
            scale: {
                sm: string;
                md: string;
                lg: string;
            };
            densities: string[];
        };
        space: {
            none: string;
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
            xxxl: string;
            compact: {
                none: string;
                xxs: string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                xxl: string;
                xxxl: string;
            };
            comfy: {
                none: string;
                xxs: string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                xxl: string;
                xxxl: string;
            };
            roomy: {
                none: string;
                xxs: string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                xxl: string;
                xxxl: string;
            };
        };
        font: {
            base: string;
            family: {
                sans: string;
                serif: string;
                mono: string;
            };
            weight: {
                light: string;
                regular: string;
                medium: string;
                bold: string;
            };
            ratio: {
                sm: number;
                md: number;
                lg: number;
            };
            set: {
                h1: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                };
                h2: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                };
                h3: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                };
                h4: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                };
                h5: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                };
                h6: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                };
                subtitle: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                };
                body1: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                };
                body2: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                };
                caption: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                };
                button: {
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                };
            };
        };
        animation: {
            transitionDuration: {
                extraShort: string;
                shorter: string;
                short: string;
                default: string;
                long: string;
            };
            transitionDurationJs: {
                extraShort: number;
                shorter: number;
                short: number;
                default: number;
                long: number;
            };
            timingFunction: {
                decelerateOut: string;
                standard: string;
                accelerateIn: string;
                sharp: string;
                inOut: string;
            };
            timingFunctionJs: {
                decelerateOut: number[];
                standard: number[];
                accelerateIn: number[];
                sharp: number[];
                inOut: number[];
            };
        };
    };
    private rootObserver?;
    private themeSignal;
    private colorSchemeSignal;
    constructor();
    /** Configures the `MteThemeService` to cache color-scheme changes to `localStorage`, `sessionStorage`, or neither. */
    cacheColorSchemeTo(method: 'localStorage' | 'sessionStorage' | 'none'): void;
    /** Sets the current global theme on the document root */
    setGlobalTheme(theme: MteTheme): void;
    /** Sets the current global color-scheme on the document root */
    setGlobalColorScheme(colorScheme: MteColorScheme): void;
    /** Returns the current global theme from the document root */
    getGlobalTheme(): MteTheme | null;
    /** Returns the current global color-scheme from the document root */
    getGlobalColorScheme(): MteColorScheme | null;
    /** Returns a reactive signal that will update any time the global theme changes */
    selectGlobalTheme(): import("../utilities").Signal<MteTheme>;
    /** Returns a reactive signal that will update any time the global color-scheme changes */
    selectGlobalColorScheme(): import("../utilities").Signal<MteColorScheme>;
    /** Sets the value of all of the given theme variables on the document root */
    set(configFnOrObj: Subset<MortarThemeConfig> | ((config: MortarThemeConfig) => Subset<MortarThemeConfig>)): void;
    /** Retrieves the value for the requested theme variable from the document root */
    get<T>(k1: (themeConfig: MortarThemeConfig) => T): T;
    get<K1 extends keyof MortarThemeConfig>(k1: K1): MortarThemeConfig[K1];
    /** @internal **/
    get<K1 extends keyof MortarThemeConfig, K2 extends keyof MortarThemeConfig[K1]>(k1: K1, k2: K2): MortarThemeConfig[K1][K2];
    /** @internal **/
    get<K1 extends keyof MortarThemeConfig, K2 extends keyof MortarThemeConfig[K1], K3 extends keyof MortarThemeConfig[K1][K2]>(k1: K1, k2: K2, k3: K3): MortarThemeConfig[K1][K2][K3];
    /** @internal **/
    get<K1 extends keyof MortarThemeConfig, K2 extends keyof MortarThemeConfig[K1], K3 extends keyof MortarThemeConfig[K1][K2], K4 extends keyof MortarThemeConfig[K1][K2][K3]>(k1: K1, k2: K2, k3: K3, k4: K4): MortarThemeConfig[K1][K2][K3][K4];
    /** @internal **/
    get<K1 extends keyof MortarThemeConfig, K2 extends keyof MortarThemeConfig[K1], K3 extends keyof MortarThemeConfig[K1][K2], K4 extends keyof MortarThemeConfig[K1][K2][K3], K5 extends keyof MortarThemeConfig[K1][K2][K3][K4]>(k1: K1, k2: K2, k3: K3, k4: K4, k5: K5): MortarThemeConfig[K1][K2][K3][K4][K5];
    /** @internal **/
    get<K1 extends keyof MortarThemeConfig, K2 extends keyof MortarThemeConfig[K1], K3 extends keyof MortarThemeConfig[K1][K2], K4 extends keyof MortarThemeConfig[K1][K2][K3], K5 extends keyof MortarThemeConfig[K1][K2][K3][K4], K6 extends keyof MortarThemeConfig[K1][K2][K3][K4][K5]>(k1: K1, k2: K2, k3: K3, k4: K4, k5: K5, k6: K6): MortarThemeConfig[K1][K2][K3][K4][K5][K6];
    /** Flattens a given object to an array of path keys and its resulting value */
    private flattenPaths;
    private handleMutationEvent;
    private initCache;
    private initObserver;
    private getCacheMethod;
    private setCacheValue;
    private getCacheValue;
}
export declare const MteThemeService: _MteThemeService;
export {};
