import { Signal } from '../../core';
import { MortarIcon } from '@mortar/icons';
export type IconData = {
    data?: string;
    fetched?: boolean;
};
/**
 * Service used to register svg strings for a given icon name and then look them
 * up by that same name or fetch them from a CDN. The `MteIconRegistryService` is
 * a singleton instance of this class. You should always use that export instead
 * of initializing a new instance.
 */
export declare class _MteIconRegistryService {
    /** Map where loaded icon svgs are cached */
    private iconRegistry;
    /** Map of registered lazy loading resolver functions per icon library */
    private iconUrlResolvers;
    /** Defines the svg used when an icon cannot be loaded */
    private fallbackIcon;
    /** Tracks if icons should be lazy loaded internally */
    private lazyLoadEnabled;
    /** Prevents logs and fetches when true */
    private testModeEnabled;
    /** Delimiter used when creating library + icon name keys */
    private delimiter;
    /** If executing server-side all mortar icons will be loaded here */
    private serverIconCache?;
    constructor();
    /** @hidden */
    ssrInit(): Promise<void>;
    /**
     * Configures the root url from which this service will attempt to fetch icons from for the given "library".
     */
    registerIconLibrary(iconLibrary?: string, iconUrlResolver?: (iconName: string) => string): void;
    /** Manually registers new icons */
    registerIcons(icons: MortarIcon[], iconLibrary?: string): void;
    /**
     * Allows you to override the lazy loading. Defaults to `true`.
     * When `false` icons will not be fetched from remote locations.
     */
    setLazyLoading(value?: boolean): void;
    /**
     * Allows you to override the test mode. Defaults to `false`.
     * When true warnings will not be thrown and no fetches will be made.
     */
    setTestMode(value?: boolean): void;
    /** Sets a new custom fallback icon */
    setFallbackIcon(fallbackIcon: string | null): void;
    /**
     * Attempts to retrieve an icon from the registry.
     *
     * If a rootSvgIconUrl has been set, this method will
     * attempt to load the icon from there. If successful,
     * that svg will be registered for reuse.
     */
    getIcon(pathName: string, iconLibrary?: string, abortSignal?: AbortSignal): Signal<string | null>;
    /** Logs a warning and returns fallback icon. Call when attempt to load icon has failed. */
    private handledFailedLoad;
    /** Fetches an icon for the given library by name */
    private fetchIcon;
    /** Asynchronously parse icon fetch response data */
    private parseIconData;
}
declare const MteIconRegistryService: _MteIconRegistryService;
/**
 * Instance of _MteIconRegistryService exported as a singleton.
 *
 * Service used to register svg strings for a given icon name and then look them up by that same name.
 */
export { MteIconRegistryService };
