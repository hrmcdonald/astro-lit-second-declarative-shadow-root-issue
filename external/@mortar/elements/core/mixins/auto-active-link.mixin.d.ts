import { ActiveLinkOptions, Constructor, MteElement } from '../';
export declare class LinkInterface {
    href?: string;
}
export declare class AutoActiveLinkInterface {
    /** Whether or not this link is the active page */
    active: boolean;
    /** Whether or not this link should automatically try to determine if it is the active page */
    withoutAutoActive: boolean;
    /** Options to refine how this link will determine if it is the active page */
    activeLinkOptions?: Partial<ActiveLinkOptions>;
    /** The internal anchor element from which to pull the location for comparison */
    anchorElement?: HTMLAnchorElement;
}
export declare const AutoActiveLinkMixin: <T extends Constructor<MteElement & LinkInterface>>(superClass: T) => Constructor<AutoActiveLinkInterface> & T;
