import { ReactiveControllerHost } from 'lit';
import { MteElement } from '../base-classes';
export interface AppliedPresetContext {
    presetName: string;
}
/**
 * Preset is determined from either the parent preset context or a local preset property.
 * This controller keeps track of the actual active preset applied to the current component.
 * If a callback is given it will be called any time that context changes. Otherwise controller
 * methods can be called when needed.
 *
 * This can be used even within elements that do not have their own preset
 * options (aka extend the presetMixin).
 */
export declare class AppliedPresetContextController {
    private host;
    private callback?;
    private appliedPresetName;
    private activeGlobalPresetName;
    constructor(host: ReactiveControllerHost & MteElement, callback?: (context: AppliedPresetContext) => void);
    hostConnected(): void;
    hostUpdate(): void;
    private execCallback;
    private updateAppliedPresetContext;
    getActivePresetName(): string;
}
