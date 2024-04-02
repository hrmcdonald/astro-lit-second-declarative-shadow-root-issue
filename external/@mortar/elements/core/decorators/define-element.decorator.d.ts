import { Constructor } from '@lit/reactive-element/decorators/base.js';
/**
 * Items in this file are modifications of of the decorators here:
 * https://github.com/lit/lit/blob/main/packages/reactive-element/src/decorators/custom-element.ts
 *
 * We've added checks to prevent re-registrations from throwing hard errors.
 */
/**
 * Allow for custom element classes with private constructors
 */
type CustomElementClass = Omit<typeof HTMLElement, 'new'>;
export type CustomElementDecorator = {
    (cls: CustomElementClass): void;
    (target: CustomElementClass, context: ClassDecoratorContext<Constructor<HTMLElement>>): void;
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```js
 * @customElement('my-element')
 * class MyElement extends LitElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The tag name of the custom element to define.
 */
export declare const defineElement: (tagName: string) => CustomElementDecorator;
export {};
