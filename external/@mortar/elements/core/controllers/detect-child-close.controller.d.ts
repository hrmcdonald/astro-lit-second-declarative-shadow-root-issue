import { ReactiveControllerHost } from 'lit';
interface ClosableElement {
    close: () => any | Promise<any>;
}
/**
 * This controller watches for a `doClose` event to be thrown by any child elements.
 * When a `doClose` event is emitted it will attempt to close the host.
 */
export declare class DetectChildCloseController {
    private host;
    constructor(host: ReactiveControllerHost & Element & ClosableElement);
    /**
     * Only trigger a close if the target is not this element
     * as this implies the close was triggered from a child element
     */
    private childOnlyClose;
    hostConnected(): void;
    hostDisconnected(): void;
}
export {};
