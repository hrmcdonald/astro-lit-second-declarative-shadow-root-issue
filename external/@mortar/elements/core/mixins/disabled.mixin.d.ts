import { LitElement } from 'lit';
import { Constructor } from '../';
export declare class DisabledInterface {
    /**
     * Disables this component
     * @attr disabled
     */
    disabled: boolean;
}
export declare const DisabledMixin: <T extends Constructor<LitElement>>(superClass: T) => Constructor<DisabledInterface> & T;
