import { EventEmitter, MteElement, StyleMap, MteElementParts } from '../../core';
export interface MteCollapseParts extends MteElementParts {
    /** Container where collapse content is rendered */
    content?: StyleMap;
}
declare const MteCollapse_base: import("../../core").Constructor<import("../../core").DisabledInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteCollapseParts>> & typeof MteElement;
/**
 * @slot - Collapse content
 *
 * @csspart content - Container where collapse content is rendered
 */
export declare class MteCollapse extends MteCollapse_base {
    static styles: import("lit").CSSResult[];
    id: string;
    /** Specify whether collapse is open */
    opened: boolean;
    /** Whether or not child contents should fade in and out of view */
    withFade: boolean;
    showOverflow: boolean;
    /** Whether or not an animation should be used when opening/closing */
    withoutAnimation: boolean;
    /** The transition duration for opening/closing this overlay in milliseconds */
    animationDuration: number;
    /** @hidden */
    doShowOverflow: boolean;
    /** If set this collapse will listen for clicks on any element with this id to toggle its opened state. */
    triggerId?: string;
    /**
     * @hidden
     * The root document from which the collapse will query for a trigger. If one is not provided `document` will be used.
     */
    triggerRoot?: any;
    /** If set this collapse will listen for clicks on this element to toggle its opened state. */
    set triggerElement(newTrigger: Element);
    get triggerElement(): Element;
    private _triggerElement?;
    /** Tracks the `opacity` css value for instance styles */
    opacity: string;
    /** Tracks the `visibility` css value for instance styles */
    visibility: string;
    /** Tracks the `overflow` css value for instance styles */
    overflow: string;
    /** Tracks the `gridTemplateRows` css value for instance styles */
    initialGridTemplateRows: string;
    /** Emitted when the collapse is opened */
    _onOpen: EventEmitter<void>;
    /** Emitted when the collapse is closed */
    _onClose: EventEmitter<void>;
    contentElem: HTMLElement;
    private opacityAnimationRef?;
    private gridAnimationRef?;
    private gridAnimationState?;
    private firstUpdateComplete;
    private handleOpenedChanged;
    private handleShowOverflow;
    private handleTriggerChange;
    protected firstUpdated(changedProps: any): void;
    private animationDone;
    private updateTriggerA11y;
    constructor();
    disconnectedCallback(): void;
    protected updateInstanceStyles(changedProps: any): void;
    render(): import("lit-html").TemplateResult<1>;
    toggle(): void;
    open(): void;
    close(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-collapse': MteCollapse;
    }
}
export {};
