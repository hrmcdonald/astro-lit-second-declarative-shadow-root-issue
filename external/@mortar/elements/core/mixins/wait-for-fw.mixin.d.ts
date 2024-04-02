import { Constructor, MteElement } from '../';
/**
 * Special class that helps framework wrapper styling know when a wrapper framework
 * has finished rendering and thus elements can now be shown without a FOUC. This
 * occurs in the scenario where Lit elements register and render before the
 * wrapper framework passes elements their props.
 */
export declare const WaitForFrameworkMixin: <T extends Constructor<MteElement>>(superClass: T) => T;
