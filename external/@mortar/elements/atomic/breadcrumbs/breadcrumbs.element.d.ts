import { MteElement } from '../../core';
import { MteBreadcrumbItem } from './breadcrumb-item.element';
import '../icon';
/**
 * @dependency mte-icon
 *
 * @slot - Default slotted content
 */
export declare class MteBreadcrumbs extends MteElement {
    static styles: import("lit").CSSResult[];
    breadcrumbs: Array<MteBreadcrumbItem>;
    firstUpdated(changedProperties: any): void;
    handleSlotChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-breadcrumbs': MteBreadcrumbs;
    }
}
