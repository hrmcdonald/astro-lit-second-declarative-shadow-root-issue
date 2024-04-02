import { MteElement, MteElementParts } from '../../core';
import { EventEmitter } from './../../core/decorators/event-emitter.decorator';
import { MteSplitPanelRepositionDetail } from './split-panel-event.types';
import '../button';
import '../button-group';
import '../../utilities/overlay-trigger';
export interface MteSplitPanelParts extends MteElementParts {
}
export interface MteSplitPanelMoveDivider {
    /** The direction the divider should move in */
    direction?: 'left' | 'right';
    /** The percentage amount the divider should move*/
    amount?: number;
    /** Collapse the divider fully in the specified direction */
    collapse?: boolean;
}
declare const MteSplitPanel_base: import("../../core").Constructor<import("../../core").TabIndexInterface> & import("../../core").Constructor<import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteSplitPanelParts>> & typeof MteElement;
/**
 * @slot start - Start panel
 * @slot end - End panel
 */
export declare class MteSplitPanel extends MteSplitPanel_base {
    static styles: import("lit").CSSResult[];
    /** Defines orientation of split panel */
    orientation: 'horizontal' | 'vertical';
    /** Sets the initial position of the divider. Defaults to 50% of the available space. */
    dividerPosition: number;
    /** Whether the controls should be show by default. */
    withControls: boolean;
    /** The position of the controls when they are shown. */
    controlPosition?: 'top' | 'bottom';
    /** The placement of the controls when they are shown. */
    controlPlacement?: 'start' | 'end';
    /** A designated primary panel will maintain its size and the secondary panel will resize to fit the remaining space. */
    primaryPanel?: 'start' | 'end';
    /** Sets the primaryMinimum size of either the specified primary panel or the start panel. See [the CSS function clamp() primaryMin parameter](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp#primaryMin) for acceptable values. */
    get primaryMin(): string;
    set primaryMin(newValue: string);
    private _primaryMin;
    /** Sets the primaryMaximum size of either the specified primary panel or the start panel. See [the CSS function clamp() primaryMax parameter](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp#primaryMax) for acceptable values. */
    get primaryMax(): string;
    set primaryMax(newValue: string);
    private _primaryMax;
    /** The minimum and maximum percentages for the divider. Used to determine if divider should be able to move left or right. Derived from primary min and max. */
    private minDividerPercent;
    private maxDividerPercent;
    /** Sets the grabber's visibility. */
    withoutGrabber: boolean;
    /** The aria label to provide to the divider. */
    dividerAriaLabel: string;
    /** Emitted when the divider's position changes. */
    _onReposition: EventEmitter<MteSplitPanelRepositionDetail>;
    dividerElem: HTMLElement;
    private size;
    private observer?;
    private lastPosition;
    connectedCallback(): void;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    /** Retroactively update the min and max percentages*/
    private updateMinMaxMarkers;
    private detectSize;
    private handleResize;
    private isVertical;
    private clamp;
    private pixelsToPercentage;
    private percentageToPixels;
    private handleDrag;
    private handleKeyDown;
    /** -- TabIndex overrides -- */
    getTabIndexAdapter(): string;
    setTabIndexAdapter(value: string): void;
    removeTabIndexAdapter(): void;
    handleIconClick(decrement: any, fully?: boolean): void;
    handleSeparatorClick(e: MouseEvent): void;
    moveDivider({ collapse, amount, direction }: MteSplitPanelMoveDivider): void;
    protected updateInstanceStyles(changedProps: any): void;
    private handleDividerPositionChange;
    private handleOrientationChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-split-panel': MteSplitPanel;
    }
}
export {};
