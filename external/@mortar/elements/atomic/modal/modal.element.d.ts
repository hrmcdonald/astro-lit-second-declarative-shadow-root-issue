import { MteElementParts, StyleMap, MteContentBase } from '../../core';
import '../divider';
import { ModalPreset } from './modal.presets';
import '../../utilities/overlay-trigger';
import { MteHeader } from '../composition';
export interface MteModalParts extends MteElementParts {
    /** Modal content container */
    content?: StyleMap;
    /** Modal header slotted content container */
    header?: StyleMap;
    /** Modal footer slotted content container */
    footer?: StyleMap;
}
declare const MteModal_base: import("../../core").Constructor<import("../../core").SizeInterface> & import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").OverlayInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<ModalPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteModalParts>> & typeof MteContentBase;
/**
 * @slot - Default slot for modal content
 * @slot header - Slot used to insert header content
 * @slot footer - Slot used to insert footer content
 *
 * @csspart header - Element that wraps the header slot
 * @csspart content - Element that wraps the default slot
 * @csspart footer - Element that wraps the footer slot
 *
 * @overlay
 */
export declare class MteModal extends MteModal_base {
    static styles: import("lit").CSSResult[];
    private internalId;
    /** Whether the modal should close when clicked outside */
    withoutCloseOnClickOutside: boolean;
    /** Whether the modal should close when escape is pressed */
    withoutCloseOnEscape: boolean;
    /** Whether the modal has a divider after the header or not */
    withoutFooterDivider: boolean;
    /** Whether the modal has a divider before the footer or not */
    withoutHeaderDivider: boolean;
    /** Whether the modal content should be scrollable */
    withContentFocus: boolean;
    /** Accessibility attribute added to tell windows underneath the current dialog are not available for interaction */
    ariaModal: 'true' | 'false';
    /** Accessibility attribute that gives the dialog an accessible description by referring to the dialog content that describes the primary message or purpose of the dialog */
    ariaDescribedBy: any;
    /** Accessibility attribute that identifies the type of element */
    role: 'dialog' | string;
    /** The id of the modal. Used to associate the modal with different aria attributes */
    id: string;
    /** Accessibility attribute that gives the dialog an accessible name by referring to the element that provides the dialog title */
    ariaLabelledBy: string;
    /** The transition duration for opening/closing this overlay in milliseconds */
    animationDuration: number;
    protected contentStyleSelectorRoot: string;
    protected instanceStyleSelectorRoot: string;
    private detectChildCloseController;
    private modalElem;
    triggerOn: string;
    headerElements: Array<HTMLElement | MteHeader>;
    /** The first element currently in the header slot */
    private get headerElementRef();
    private set headerElementRef(value);
    private _headerElementRef?;
    private onCloseOnEscapeChange;
    firstUpdated(changedProps: any): void;
    open(): Promise<void>;
    close(): Promise<void>;
    toggle(): Promise<void>;
    private handleHeaderSlotChange;
    /** Override default transition timing styles when changed */
    protected updateInstanceStyles(changedProps: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-modal': MteModal;
    }
}
export {};
