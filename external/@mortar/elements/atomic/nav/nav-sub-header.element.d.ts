import { MteElement, MteElementParts, StyleMap } from '../../core';
import { NavSubHeaderPreset } from './nav.presets';
export interface MteNavSubHeaderParts extends MteElementParts {
    /** Start aligned navigation list */
    start?: StyleMap;
    /** End aligned navigation list */
    end?: StyleMap;
    /** Wrapper element where the container class is applied */
    container?: StyleMap;
}
declare const MteNavSubHeader_base: import("../../core").Constructor<import("../../core").PresetElementInterface<NavSubHeaderPreset>> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteNavSubHeaderParts>> & typeof MteElement;
/**
 * @slot start - Start aligned navigation list content
 * @slot end - End aligned navigation list content
 *
 * @csspart start - Start aligned navigation list
 * @csspart end - End aligned navigation list
 * @csspart container - Wrapper element where the container class is applied
 */
export declare class MteNavSubHeader extends MteNavSubHeader_base {
    static styles: import("lit").CSSResult[];
    private internalId;
    /**
     * Weather or not this subheader should render with a container. Reflected for styling only.
     * @ignore
     */
    withContainer: boolean;
    /**
     * Whether or not this content should be wrapped with a container. Overrides `withContainer`.
     * @ignore
     */
    withoutContainer: boolean;
    /** Given the `role` of navigation by default since navigation items will render here */
    role: string;
    /** Defaults to `Secondary Navigation` */
    ariaLabel: string;
    /** The id of the subheader */
    id: string;
    /** @ignore */
    passive: boolean;
    private signalStateController;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private updateGlobalState;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-nav-sub-header': MteNavSubHeader;
    }
}
export {};
