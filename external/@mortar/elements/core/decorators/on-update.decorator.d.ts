import type { LitElement } from 'lit';
interface OnUpdateOptions {
    /**
     * If true, will only start watching after the initial update/render
     */
    waitUntilFirstUpdate?: boolean;
    /** Determines where this method will be called. Defaults to `client`. */
    on?: 'client' | 'ssr' | 'both';
}
export declare function onUpdate(propNames: string | string[], options?: OnUpdateOptions): <ElemClass extends LitElement>(proto: ElemClass, decoratedFnName: PropertyKey) => void;
export {};
