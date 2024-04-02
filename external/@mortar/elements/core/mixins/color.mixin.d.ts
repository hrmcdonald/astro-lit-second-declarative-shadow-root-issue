import { Constructor, MteElement, PresetElementInterface } from '../';
/** Possible core palette group color values. */
export type CorePalette = 'primary' | 'secondary' | 'tertiary' | 'danger' | undefined;
/**  Possible status palette group color values. */
export type StatusPalette = 'primary' | 'secondary' | 'tertiary' | 'accent' | 'warning' | 'success' | 'danger' | undefined;
/** Possible viz palette group color values. */
export type VizPalette = '1' | '2' | '3' | '4' | '5' | '6' | undefined;
export type PaletteGroupColor = CorePalette | StatusPalette | VizPalette;
export declare class ColorInterface<PaletteGroup> {
    /**
     * Adjusts the primary color palette used to theme this component
     * @attr color
     */
    color: PaletteGroup;
}
export declare enum PaletteGroupOption {
    Core = "core",
    Status = "status",
    Viz = "viz"
}
export declare const CoreColorMixin: <T extends Constructor<MteElement & Partial<PresetElementInterface<any>>>>(superClass: T) => Constructor<ColorInterface<CorePalette>> & T;
export declare const StatusColorMixin: <T extends Constructor<MteElement & Partial<PresetElementInterface<any>>>>(superClass: T) => Constructor<ColorInterface<StatusPalette>> & T;
export declare const VizColorMixin: <T extends Constructor<MteElement & Partial<PresetElementInterface<any>>>>(superClass: T) => Constructor<ColorInterface<VizPalette>> & T;
