import { Constructor, MteElement, SlotController } from '..';
export declare class SlotObserverInterface {
    /**
     * Prop used to declare which slots are being used during SSR to make them visible in certain edge-cases.
     */
    ssrSlots: string;
    slotController: SlotController;
    hasSlot: (slot: string, orValue?: any) => boolean;
    ssrSlotCheck: (slots: string) => boolean;
}
export declare const SlotObserverMixin: <T extends Constructor<MteElement>>(superClass: T) => Constructor<SlotObserverInterface> & T;
