import type { ReactiveController, ReactiveControllerHost } from 'lit';
import { Signal } from '../utilities';
export interface SlotControllerOptions {
    /** Names of slots that should trigger a component update if changed */
    updateOnChange?: string[];
}
export declare class SlotController implements ReactiveController {
    host: ReactiveControllerHost & Element;
    options: SlotControllerOptions;
    slotChange: Signal<Set<string>>;
    onConnected: Signal<boolean>;
    connectedComplete: boolean;
    private subs;
    private updateTriggerSlots;
    constructor(host: ReactiveControllerHost & Element, options?: SlotControllerOptions);
    /** Emits when one of the specified slots has changed and after the firstUpdate after hostConnected */
    watchSlots(slots?: string[], { updateOnConnected }?: {
        updateOnConnected: boolean;
    }): Signal<Set<string>>;
    check(slotName: string): boolean;
    updateOnChange(slots: string | string[]): void;
    private hasDefaultSlot;
    private hasNamedSlot;
    private handleSlotChange;
    hostConnected(): void;
    hostDisconnected(): void;
}
/**
 * Given a slot, this function iterates over all of its assigned element and text nodes and returns the concatenated
 * HTML as a string. This is useful because we can't use slot.innerHTML as an alternative.
 */
export declare function getInnerHTML(slot: HTMLSlotElement): string;
/**
 * Given a slot, this function iterates over all of its assigned text nodes and returns the concatenated text as a
 * string. This is useful because we can't use slot.textContent as an alternative.
 */
export declare function getTextContent(slot: HTMLSlotElement | undefined | null): string;
