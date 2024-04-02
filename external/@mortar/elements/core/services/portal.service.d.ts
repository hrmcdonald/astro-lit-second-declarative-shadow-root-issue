export type PortalStack = 'overlay';
export interface PortaledElementMetadata {
    element: Element;
    stack: PortalStack;
    childPortaledElements: Set<Element>;
    parentPortaledElement?: Element;
    backdrop?: Element;
}
export interface ElementPortalController {
    id: number;
    parentPortaledElement: Element;
    options: {
        stack: PortalStack;
    };
}
export type PortalAdapter<T = any> = (portalElement: T, outletElement: Element) => Promise<any> | any;
export interface PortalOptions {
    /** Renders the backdrop dimmed */
    withDimBackdrop?: boolean;
    /** Makes the backdrop ignore pointer events. Useful for triggerOn "hover". */
    withInertBackdrop?: boolean;
    /** Disables the ability to scroll the page behind the overlay when true */
    withScrollLock?: boolean;
    /** Callback for handling closeOnClickOutside events when the portal's backdrop is clicked */
    closeOnClickOutsideHandler?: () => any;
    /** The animation duration for fading a shadow backdrop in/out */
    backdropTransitionDuration?: string;
    /** Adapter for "portaling" an element from one location in the DOM to another. Leveraged by framework wrappers for improved interop. */
    portalAdapter?: PortalAdapter;
}
/** Default native DOM adapter for portaling an element to another target element */
export declare const defaultPortalAdapter: PortalAdapter;
declare class _MtePortalService {
    /** Shared global const for stack element refs */
    private stackElements;
    /** Shared global const for portaled elements metadata */
    private portaledElements;
    private activeScrollLocks;
    private stackMutationObserver?;
    /**
     * When called, this service will attempt to locate the `@angular/cdk` overlay stack.
     * If found this service will be configured to use that element as the `overlay` stack instead of initializing its own.
     */
    configureCdkInterop(): void;
    /**
     * Registers a portal controller. All items it requested to be portaled will be track against it.
     * When the portal is removed we can then remove any elements it currently has portaled and
     * any of their portaled children.
     */
    addController(portalController: ElementPortalController): void;
    /** Removes all of a portal controllers portaled elements and their references */
    removeController(portalController: ElementPortalController): void;
    /**
     * Ensures a ref to the configured stack exists. If it does not, the configured stack will
     * be created and appended to the document. Does nothing during SSR.
     */
    initializeStack(stack: PortalStack): void;
    private appendStackToDom;
    /** Appends an item to the configured portal stack */
    appendToStack(portalController: ElementPortalController, element: Element, { withDimBackdrop, withInertBackdrop, withScrollLock, backdropTransitionDuration, closeOnClickOutsideHandler, portalAdapter, }?: PortalOptions): Promise<void>;
    /** Removes an element from the stack */
    removeFromStack(portalController: ElementPortalController, element: Element): void;
    private removeAllItemsFromStacks;
    /** Makes a backdrop associated with a portaled element visible if it exists */
    showBackdrop(portalController: ElementPortalController, element: Element): void;
    /** Hides a backdrop associated with a portaled element if it exists */
    hideBackdrop(portalController: ElementPortalController, element: Element): void;
    /** Updates the intertness a backdrop if it exists (whether or not the user can click through it) */
    setBackdropInertness(portalController: ElementPortalController, element: Element, inert?: boolean): void;
    /** Returns the id for the configured stack element */
    private idFactory;
    /**
     * Checks if an element is being portaled from within another portaled
     * element and returns that parent if it is
     */
    private getParentPortaledElement;
    /** Ensures an element is removed from the stack no matter which controller has portaled it */
    private removeFromStackGlobally;
    /** Finalizes the remove of an element from a portal stack */
    private finalizeStackRemove;
    /**
     * Applies a scroll lock to the body element to prevent scrolling of page content.
     * Calculates any body offsets due to visible scrollbars and dynamically adjusts for them.
     */
    private applyScrollLock;
    /** Removes an active scrollLock if there are no remaining elements portaled that requested it */
    private removeScrollLock;
}
export declare const MtePortalService: _MtePortalService;
export {};
