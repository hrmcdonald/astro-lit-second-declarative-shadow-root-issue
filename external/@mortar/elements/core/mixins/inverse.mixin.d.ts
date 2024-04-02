import { LitElement } from 'lit';
import { Constructor } from '../';
export declare class InverseInterface {
    /** Renders this component with inverse theming */
    inverse: boolean;
    /** Special option to override inverse when it is set by a preset */
    withoutInverse: boolean;
}
export declare const InverseMixin: <T extends Constructor<LitElement>>(superClass: T) => Constructor<InverseInterface> & T;
