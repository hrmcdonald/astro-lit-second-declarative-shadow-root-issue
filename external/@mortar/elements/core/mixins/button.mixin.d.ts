import { DisabledInterface } from './disabled.mixin';
import { Constructor, MteElement, TabIndexInterface } from '..';
import { TemplateResult } from 'lit';
export declare class ButtonInterface {
    /** An optional name for the button. Ignored when `href` is set */
    name: string;
    /** An optional value for the button. Ignored when `href` is set */
    value: string;
    /** Specifies the type of button */
    type: 'button' | 'submit' | 'reset';
    /** Used as the href property for a `<a>` link. When set this button will act as a `<a>` element instead of a `<button>` */
    href: string;
    /**
     * Short for "inert reference". When set, `iref` will display like an `<a>` element to users visually, but will
     * capture click events and `preventDefault()` internally so external tooling can handle link click events.
     */
    iref: string;
    /** Tells the browser where to open the link. Only used when `href` is set. */
    target: '_blank' | '_parent' | '_self' | '_top';
    /** Tells the browser to download the linked file as this filename. Only used when `href` is set */
    download: string;
    /** Simulates a button click */
    click(): void;
    /**
     * @ignore
     * Call this method with the contents of this button
     */
    renderButtonTemplate(buttonContents: TemplateResult<any>): TemplateResult<1>;
}
export declare const ButtonMixin: <T extends Constructor<MteElement>>(superClass: T) => Constructor<ButtonInterface & TabIndexInterface & DisabledInterface> & T;
