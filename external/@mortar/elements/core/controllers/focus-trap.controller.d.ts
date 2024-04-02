import { ReactiveControllerHost } from 'lit';
/** Returns true if any focus trap is active */
export declare const isFocusTrapActive: () => boolean;
/** A controller for trapping focus within a DOM node.*/
export declare class FocusTrapController {
    private host;
    private trapNode?;
    private restoreTarget?;
    /** An array of tab-ordered focusable elements inside the trap node. */
    private get focusableElements();
    /** The index of the element inside the trap node that currently has focus. */
    private get focusedElementIndex();
    constructor(host: ReactiveControllerHost & Element);
    hostConnected(): void;
    hostDisconnected(): void;
    /**
     * Activates a focus trap for a DOM node that will prevent focus from escaping the node.
     * The trap can be deactivated with the `.releaseFocus()` method.
     *
     * If focus is initially outside the trap, the method will move focus inside,
     * on the first focusable element of the trap in the tab order.
     * The first focusable element can be the trap node itself if it is focusable
     * and comes first in the tab order.
     *
     * If there are no focusable elements, the method will throw an exception
     * and the trap will not be set.
     *
     * If an element is passed to `restoreFocusOnDone` that element will be focused upon
     * release of the focus trap.
     */
    trapFocus(trapNode: Element | HTMLElement, restoreFocusOnRelease?: Element | HTMLElement): void;
    isTrappingFocus(): boolean;
    /**
     * Deactivates the focus trap set with the `.trapFocus()` method
     * so that it becomes possible to tab outside the trap node.
     */
    releaseFocus(preventScroll?: boolean): void;
    /**
     * A `keydown` event handler that manages tabbing navigation when the trap is enabled.
     *
     * - Moves focus to the next focusable element of the trap on `Tab` press.
     * When no next element to focus, the method moves focus to the first focusable element.
     * - Moves focus to the prev focusable element of the trap on `Shift+Tab` press.
     * When no prev element to focus, the method moves focus to the last focusable element.
     */
    private onKeyDown;
    /**
     * - Moves focus to the next focusable element if `backward === false`.
     * When no next element to focus, the method moves focus to the first focusable element.
     * - Moves focus to the prev focusable element if `backward === true`.
     * When no prev element to focus the method moves focus to the last focusable element.
     *
     * If no focusable elements, the method returns immediately.
     */
    private focusNextElement;
}
