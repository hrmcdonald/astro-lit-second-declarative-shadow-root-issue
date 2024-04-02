import { LitElement } from 'lit';
import { Constructor } from '../types';
import { DisabledInterface } from './disabled.mixin';
export declare class TabIndexInterface {
    /**
     * Override this adapter to retrieve the current tabindex attribute value from a custom target element
     * @ignore
     */
    getTabIndexAdapter(): string;
    /**
     * Override this adapter to set the tabindex attribute on a custom target element
     * @ignore
     */
    setTabIndexAdapter(value: string): void;
    /**
     * Override this adapter to remove the tabindex attribute from a custom target element
     * @ignore
     */
    removeTabIndexAdapter(): void;
}
/**
 * Mixin to properly manage the tabindex in a non-intrusive way. When disabled is true,
 * the tabindex will ALWAYS be `-1`. However, any changes to tabindex will be intercepted
 * and cached internally until disabled is false, then tabindex will be restored to the
 * cached value, or removed if that is undefined.
 */
export declare const TabIndexMixin: <T extends Constructor<LitElement & DisabledInterface>>(superClass: T, options?: {
    initialTabIndex: number | undefined;
}) => Constructor<TabIndexInterface> & T;
