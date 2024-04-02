import { LitElement } from 'lit';
import { EventEmitter, MteElement } from '../../core';
/** Interface that must be implemented by overlays to be used in an MteOverlayTriggers overlay slot */
export interface OverlayElement extends MteElement {
    /** Opens the overlay */
    open(): Promise<void>;
    /** Closes the overlay */
    close(): Promise<void>;
    /** Toggles the current open/close state */
    toggle(): Promise<void>;
    /** Will be set by the MteOverlayTrigger with the trigger element */
    targetElement?: MteElement | LitElement | HTMLElement | Element | null | undefined;
    /** Used by the MteOverlayTrigger to properly watch for trigger events on the target element */
    triggerOn: Partial<'hover' | 'focus' | 'click' | 'none'>;
    /** Listened to by the MteOverlayTrigger to determine when trigger listeners should be changed */
    _onTriggerChange: EventEmitter<Partial<'hover' | 'focus' | 'click' | 'none'>>;
}
