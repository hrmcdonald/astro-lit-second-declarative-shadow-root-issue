import { MteText } from '../text';
import { LinkPreset } from './link.presets';
declare const MteLink_base: import("../../core").Constructor<import("../../core").ColorInterface<import("../../core").CorePalette>> & import("../../core").Constructor<import("../../core").PresetElementInterface<LinkPreset>> & import("../../core").Constructor<import("../../core").ButtonInterface & import("../../core").TabIndexInterface & import("../../core").DisabledInterface> & typeof MteText;
/**
 * @slot - Default slotted content
 */
export declare class MteLink extends MteLink_base {
    static styles: import("lit").CSSResult[];
    fontWeight: 'regular' | 'bold';
    getButtonClasses(): import("lit-html/directive").DirectiveResult<typeof import("lit-html/directives/class-map").ClassMapDirective>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-link': MteLink;
    }
}
export {};
