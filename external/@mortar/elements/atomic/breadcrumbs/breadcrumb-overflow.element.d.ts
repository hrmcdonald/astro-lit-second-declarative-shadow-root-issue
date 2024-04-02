import { PropertyValueMap } from 'lit';
import { MteElement } from '../../core';
import '../../utilities/overlay-trigger';
import '../popover';
import { MteBreadcrumbItem } from './breadcrumb-item.element';
import { MtePopover } from '../popover';
import { MteOverlayTrigger } from '../../utilities/overlay-trigger';
/**
 * @dependency mte-icon
 * @dependency mte-overlay-trigger
 * @dependency mte-popover
 *
 * @slot - Default slotted content
 */
export declare class MteBreadcrumbOverflow extends MteElement {
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode;
    };
    static styles: import("lit").CSSResult[];
    /** role of breadcrumb item */
    role: 'listitem';
    triggerElem: HTMLButtonElement;
    overlayTriggerElem: MteOverlayTrigger;
    popoverElem: MtePopover;
    breadcrumbs: Array<MteBreadcrumbItem>;
    handleSlotChange(): void;
    protected firstUpdated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-breadcrumb-overflow': MteBreadcrumbOverflow;
    }
}
