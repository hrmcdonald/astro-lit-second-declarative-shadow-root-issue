import './toast-container.element';
import { MteToastConfig } from './toast-container.element';
export type { MteToastConfig } from './toast-container.element';
export type { MteToastCloseDetail } from './toast.types';
declare class _ToastService {
    constructor();
    private hotKey;
    private toastContainer;
    private handleHotKey;
    /** Sets the toast notification containers aria label property.  */
    setContainerLabel(label: string): void;
    /** Shows a toast notification based upon config options.  */
    show(config: MteToastConfig): string;
    /** Closes a specific toast notifications.  */
    close(id: string): void;
    /** Closes all currently visible toast notifications.  */
    closeAll(): void;
    /** Pauses the timer for a currently visible toast given a toast id */
    pauseTimer(id: string): void;
    /** Starts the timer for a currently visible toast given a toast id */
    startTimer(id: string): void;
    /** Sets a hot hey to be able to focus on the toast notification container. */
    setToastStackHotKey(keycode: string): void;
    private appendToastContainer;
}
export declare const MteToastService: _ToastService;
