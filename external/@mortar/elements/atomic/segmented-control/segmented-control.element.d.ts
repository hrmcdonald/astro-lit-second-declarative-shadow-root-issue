import { MteElement, MteElementParts, MteOptionItem, EventEmitter, StyleMap } from '../../core';
import { MteSegmentedControlChangeDetail } from './segmented-control.types';
import { SegmentedControlPreset } from './segmented-control.presets';
import '../form-elements';
import '../../utilities/visually-hidden';
import '../../utilities/overlay-trigger';
import '../tooltip';
import { ResizeController } from '@lit-labs/observers/resize-controller.js';
export interface MteSegmentedControlParts extends MteElementParts {
    /** Label for segmented control */
    label?: StyleMap;
}
export interface MteSegmentedControlOptionItem extends MteOptionItem {
    name: string;
    value: string;
    id?: string;
    icon?: string;
    selected?: boolean;
    iconOnly?: boolean;
}
declare const MteSegmentedControl_base: import("../../core").Constructor<import("../../core").DensityInterface> & import("../../core").Constructor<import("../../core").RadiusInterface> & import("@open-wc/form-control").Constructor<import("@open-wc/form-control").FormControlInterface> & import("../../core").Constructor<import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<SegmentedControlPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteSegmentedControlParts>> & typeof MteElement;
/**
 * @slot - Default slotted content
 */
export declare class MteSegmentedControl extends MteSegmentedControl_base {
    static styles: import("lit").CSSResult[];
    /** Array of segmented controls to be rendered in MteSegmentedControl.  */
    options: MteSegmentedControlOptionItem[];
    /** Specify whether or not segmented control should expand to the full width of its container. */
    withFullWidth: boolean;
    /** Label for segmented controls.  */
    label?: string;
    /** An aria label to be used if no label is provided */
    ariaLabel: string;
    /** Emits explicitly when the user has changed the value of this control */
    _onChange: EventEmitter<MteSegmentedControlChangeDetail>;
    controls: HTMLDivElement;
    htmlOptions: HTMLDivElement[];
    observer?: ResizeController<void>;
    selected: MteSegmentedControlOptionItem;
    getSelected(): MteSegmentedControlOptionItem;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private handleOptionsChange;
    /** Removes classname responsible for transition to prevent animation of resize */
    private removeTransition;
    /** Computes and sets the size of the selected item background */
    private computeTransitionBackgroundSize;
    private handleMouseUp;
    private handleKeydown;
    private handleChange;
    renderOptionLabel(option: MteSegmentedControlOptionItem, i: number): import("lit-html").TemplateResult<1>;
    renderControls(): import("lit-html").TemplateResult<1>[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-segmented-control': MteSegmentedControl;
    }
}
export {};
