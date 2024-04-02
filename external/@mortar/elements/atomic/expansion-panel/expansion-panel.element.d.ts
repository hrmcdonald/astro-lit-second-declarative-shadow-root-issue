import { MteElement, MteElementParts, StyleMap } from '../../core';
import '../collapse';
import { MteExpansionHeader } from './expansion-header.element';
export interface MteExpansionPanelParts extends MteElementParts {
    /** Modal content container */
    panelContent?: StyleMap;
}
declare const MteExpansionPanel_base: import("../../core").Constructor<import("../../core").StylePartsInterface<MteExpansionPanelParts>> & typeof MteElement;
/**
 * @dependency mte-collapse
 *
 * @slot - Default slotted content
 * @slot header - Slot used to insert header content, should be `mte-expansion-header`
 *
 * @csspart panelContent - Element that wraps the default slot
 */
export declare class MteExpansionPanel extends MteExpansionPanel_base {
    static styles: import("lit").CSSResult[];
    /** Specify whether panel is open */
    opened: boolean;
    /** Specify whether panel should open without animation */
    withoutAnimation: boolean;
    /** SPecify whether or not the panel should render with top and bottom borders */
    withoutBorder: boolean;
    /** Customize chevron icon alignment */
    alignIcon: 'start' | 'end';
    /** The transition duration for opening/closing this overlay in milliseconds */
    animationDuration: number;
    header: MteExpansionHeader[];
    protected firstUpdated(): void;
    handleClick(event: MouseEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-expansion-panel': MteExpansionPanel;
    }
}
export {};
