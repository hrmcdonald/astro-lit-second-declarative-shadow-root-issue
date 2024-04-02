import { Constructor, MteElement } from '../';
export declare class LangInterface {
    /**
     * Adjusts the lang used to format content rendered by this element
     * @attr lang
     */
    lang: string;
}
export declare const LangMixin: <T extends Constructor<MteElement>>(superClass: T) => Constructor<LangInterface> & T;
