import { ResponsiveValue } from './../../core/base-classes/content.base';
import { MteContentBase } from '../../core';
declare const MteLayoutContainer_base: typeof MteContentBase;
/**
 * @slot - Default slotted content
 */
export declare class MteLayoutContainer extends MteLayoutContainer_base {
    static styles: import("lit").CSSResult[];
    /** When set, the container will stretch across the entire available width and not constrain content other than with gutters. */
    fluid: boolean;
    /** Can be set to customize the width of the popout bleed. Defaults to just the size of the gutter. */
    popoutBleedWidth?: ResponsiveValue<string | number>;
    protected updateInstanceStyles(changedProps: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-layout-container': MteLayoutContainer;
    }
}
export {};
