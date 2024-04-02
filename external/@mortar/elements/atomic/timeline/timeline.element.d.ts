import { MteElement, MteElementParts } from '../../core';
export interface MteTimelineParts extends MteElementParts {
}
declare const MteTimeline_base: import("../../core").Constructor<import("../../core").StylePartsInterface<MteTimelineParts>> & typeof MteElement;
/**
 * @slot - Default slotted content
 */
export declare class MteTimeline extends MteTimeline_base {
    static styles: import("lit").CSSResult[];
    orientation: 'horizontal' | 'vertical';
    align: 'before' | 'after';
    /** Defines role of the timeline */
    role: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-timeline': MteTimeline;
    }
}
export {};
