import { ReactiveController, ReactiveControllerHost } from 'lit';
import { ElementPortalController, PortalOptions, PortalStack } from '../services';
export interface PortalControllerOptions {
    stack: PortalStack;
}
/**
 * Controller used to attach any element to a portal stack.
 *
 * Use this controller when you need to render an overlay at the root of the DOM.
 * To avoid positioning conflicts or overflow clipping.
 */
export declare class PortalController implements ReactiveController, ElementPortalController {
    host: ReactiveControllerHost & Element;
    options: PortalControllerOptions;
    /** @ignore */
    id: number;
    /**
     * Used by the MtePortalService to cache this elements portaled parent reference
     * @ignore
     */
    parentPortaledElement: Element;
    /**
     * Flag to help check if a disconnected callback has been fired
     * because of a portaling operation.
     */
    private ignoreNextDisconnect;
    constructor(host: ReactiveControllerHost & Element, options?: PortalControllerOptions);
    /** Requests the portal service append this item to the configured stack */
    appendToStack(element?: Element, options?: PortalOptions): Promise<void>;
    /** Requests the portal service remove this element from the configured stack */
    removeFromStack(element?: Element): void;
    /** Makes a backdrop associated with a portaled element visible if it exists */
    showBackdrop(element?: Element): void;
    /** Hides a backdrop associated with a portaled element if it exists */
    hideBackdrop(element?: Element): void;
    /** Updates the intertness a backdrop if it exists (whether or not the user can click through it) */
    setBackdropInertness(inert: boolean, element?: Element): void;
    hostConnected(): void;
    hostDisconnected(): void;
}
