import { Constructor, EventEmitter, MteElement, PortalAdapter } from '..';
export declare class OverlayInterface {
    /**
     * Updates the overlay state on the overlay mixin. By default all options are set to true initially.
     * @param options
     */
    setOverlayOptions(options: {
        withCloseOnClickOutside?: boolean;
        withCloseOnEscape?: boolean;
        withFocusTrap?: boolean;
        withPortal?: boolean;
        withDimBackdrop?: boolean;
        withInertBackdrop?: boolean;
        withScrollLock?: boolean;
        animationDuration?: number;
        backdropTransitionDuration?: string;
        returnToOriginOnClose?: boolean;
        focusTrapTarget?: Element;
    }): unknown;
    /**
     * A function to call when the overlay should open. Can add a listener for outside clicks, portal an element,
     * and prevent the body from scrolling upon open.
     * @param options
     */
    handleOverlayOpen(options?: {
        clickOutsideElement?: HTMLElement;
        willOpen?: () => void;
    }): Promise<void>;
    /**
     * A function to call after the overlay has been optionally portaled and/or all animations have finished.
     */
    handleOverlayOpenEnd(): Promise<void>;
    /**
     * A function to call when the overlay element should close. Can stop listening for outside clicks, release a,
     * focus trap, and allow the body element to scroll again.
     */
    handleOverlayClose(): Promise<void>;
    /**
     * A function to call when the overlay element has finished closing and/or all animations have completed. Can
     * remove an element from the portal.
     * @param options
     */
    handleOverlayCloseEnd(options?: {
        removeFromElement?: HTMLElement;
    }): Promise<void>;
    open(): Promise<void>;
    close(): Promise<void>;
    /**
     * The tab index for this element
     */
    tabindex: number;
    /** Emitted when this overlay is initially opened */
    _onOpen: EventEmitter<void>;
    /** Emitted after this overlay has finished opening */
    _onOpenEnd: EventEmitter<void>;
    /** Emitted when this overlay is initially closing */
    _onClose: EventEmitter<void>;
    /** Emitted when this overlay has finished closing */
    _onCloseEnd: EventEmitter<void>;
    /** @ignore */
    portalAdapter: PortalAdapter;
    /**
     * @ignore
     * The opened state of the overlay regardless of animations
     */
    opened: boolean;
    /**
     * @ignore
     * Indicates the overlay has been portaled and ready to animate
     */
    readyForAnimation: boolean;
    /**
     * @ignore
     * Indicates the overlay has been fully animated open
     */
    openedFull: boolean;
}
export declare const OverlayMixin: <T extends Constructor<MteElement>>(superClass: T) => Constructor<OverlayInterface> & T;
