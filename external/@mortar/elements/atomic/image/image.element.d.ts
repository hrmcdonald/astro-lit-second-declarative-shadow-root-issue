import { EventEmitter, MteContentBase, MteElementParts, StyleMap } from '../../core';
export interface MteImageParts extends MteElementParts {
    /** The internal img element */
    img?: StyleMap;
}
declare const MteImage_base: import("../../core").Constructor<import("../../core").RadiusInterface> & import("../../core").Constructor<import("../../core").StylePartsInterface<MteImageParts>> & typeof MteContentBase;
/**
 * @slot img - Overrides the internal img element with one from the light DOM. Only styling is applied to the slotted img.
 *
 * @csspart img - The internal native img tag
 */
export declare class MteImage extends MteImage_base {
    static styles: import("lit").CSSResult[];
    /** Specifies an alternate text for an image */
    alt: string;
    /** Specifies the path to the image */
    src: string;
    /** Allow images from third-party sites that allow cross-origin access to be used with canvas */
    crossorigin: 'anonymous' | 'use-credentials';
    /** Specifies an image as a server-side image map */
    ismap: boolean;
    /** Specifies whether a browser should load an image immediately or to defer loading of images until some conditions are met */
    loading: 'eager' | 'lazy';
    /** Specifies a URL to a detailed description of an image */
    longdesc: string;
    /** Specifies which referrer information to use when fetching an image */
    referrerpolicy: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'unsafe-url';
    /** Specifies image sizes for different page layouts */
    sizes: string;
    /** Specifies a list of image files to use in different situations */
    srcset: string;
    /** Sets the `object-fit` style property on the image */
    fit: 'fill' | 'contain' | 'cover' | 'scale-down' | 'none' | 'initial' | 'inherit';
    /** Sets the `object-position` style property on the image */
    position: 'left' | 'right' | 'center' | string;
    /** Event that is emitted when the image loads */
    _onLoad: EventEmitter<void>;
    /** Event that is emitted when the image errors */
    _onError: EventEmitter<void>;
    /** Event that is emitted when loading the image is aborted */
    _onAbort: EventEmitter<void>;
    intersecting: boolean;
    private observer;
    private lazyChecked;
    protected willUpdate(changedProps: any): void;
    private handleIntersection;
    protected updateInstanceStyles(changedProps: any): void;
    private handleLoad;
    private handleError;
    private handleAbort;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-image': MteImage;
    }
}
export {};
