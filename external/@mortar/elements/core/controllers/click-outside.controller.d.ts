import { ReactiveControllerHost } from 'lit';
export declare class ClickOutsideController {
    private host;
    private callback;
    private targets;
    private listening;
    constructor(host: ReactiveControllerHost & Element, callback: () => any);
    hostConnected(): void;
    hostDisconnected(): void;
    listenForClicksOutsideOf(element: HTMLElement): void;
    addTarget(element: HTMLElement): void;
    removeTarget(element: HTMLElement): void;
    stopListening(): void;
    isListening(): boolean;
    private handleClickOutside;
    private addListeners;
    private removeListeners;
}
