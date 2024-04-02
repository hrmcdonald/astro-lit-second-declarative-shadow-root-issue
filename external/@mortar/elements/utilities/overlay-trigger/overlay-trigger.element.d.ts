import { LitElement } from 'lit';
import { MteElement } from '../../core';
import { OverlayElement } from './overlay-element.interface';
/**
 * Utility element that syncs an overlay with its trigger element.
 *
 * @slot overlay - The overlay to be opened and closed
 * @slot trigger - The element that will trigger the overlay and which it will be positioned around
 */
export declare class MteOverlayTrigger extends MteElement {
    static styles: import("lit").CSSResult[];
    /** Declarative property for controlling this overlay triggers slotted overlay */
    opened: any;
    /** Declarative property for passing a trigger element ref manually */
    triggerElement?: MteElement | LitElement | HTMLElement | Element | null | undefined;
    /** Declarative property for passing an overlay element ref manually */
    overlayElement?: OverlayElement;
    /** Queries for the slotted trigger element */
    triggerElements: Array<HTMLElement>;
    /** Queries for the slotted overlay element */
    overlayElements: Array<OverlayElement>;
    /** The first element currently in the trigger slot */
    private get triggerElementRef();
    private set triggerElementRef(value);
    private _triggerElementRef?;
    /** The first element currently in the overlay slot */
    private get overlayElementRef();
    private set overlayElementRef(value);
    private _overlayElementRef;
    private slotController;
    /** Tracks weather hover listeners are active or not */
    private isListeningForOpen;
    /** Watch for opened changes */
    private handleOpenedChanged;
    private handleManualTriggerElementChanged;
    private handleManualOverlayElementChanged;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    /** Toggles the overlay elements open/close state */
    toggle(): void;
    /** Opens overlay elements */
    open(): void;
    /** Closes overlay elements */
    close(): void;
    /** Updates the overlay elements targetElement when either are changed */
    private updateOverlayTargetElement;
    /** Adds hover/focus open/close listeners to the container elem */
    private toggleListeners;
    /** Adds event listeners to the trigger element based on the overlay elements `triggerOn` value */
    private addTriggerListeners;
    /** Removes event listeners from the trigger element */
    private removeTriggerListeners;
    /** Adds event listeners to the overlay element to watch for changes to its `triggerOn` value */
    private addOverlayListeners;
    /** Removes event listeners from the overlay element */
    private removeOverlayListeners;
    /** Called to update listeners on the trigger element when the overlay element's `triggerOn` value is changed */
    private updateTriggerListeners;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-overlay-trigger': MteOverlayTrigger;
    }
}
