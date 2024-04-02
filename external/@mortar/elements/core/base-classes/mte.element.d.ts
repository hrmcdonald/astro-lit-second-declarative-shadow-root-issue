import { LitElement } from 'lit';
import { SelectorFactory } from '@mortar/styles';
import { StyleMap, Unsubscriber } from '../utilities';
import { MortarPresetTheme } from '../presets';
export declare class MteElement extends LitElement {
    private __instanceStyleSheetMap;
    private __instanceStyleSheetNeedsUpdate;
    /** Set to true when firstUpdated is first called */
    protected __firstUpdated: boolean;
    protected instanceStyles: any;
    /**
     * All subs pushed to this array will be cleared in the disconnectedCallback
     * @ignore
     */
    subs: Unsubscriber[];
    /** Style mappings that are applied to the host element. */
    se?: StyleMap;
    /**
     * The theme to use for styling this component. Overrides the global preset for this instance of this component.
     * @ignore
     */
    set theme(theme: string);
    get theme(): string;
    private _theme;
    /** Used to declare a local theme value determined by the local preset if it is set. */
    protected __localPresetTheme: MortarPresetTheme;
    /**
     * Override this selector to have instance styles target a specific inner element.
     * Useful in specific scenarios where focus is delegated like buttons.
     *
     * By default this repeats `:host` six times to provide a specificity of 6
     */
    protected instanceStyleSelectorRoot: string;
    /**
     * Can be called by derived classes to register new instance level dynamic styles.
     * When called the instance stylesheet will be replaced with the latest styles this update.
     */
    protected setInstanceStyle(id: string, selector: SelectorFactory, styleMap: StyleMap): void;
    /** A custom hook that can be overridden in derived classes to set instance styles as needed */
    protected updateInstanceStyles(changedProps: any): void;
    protected willUpdate(changedProps: any): void;
    protected firstUpdated(changedProps: any): void;
    disconnectedCallback(): void;
}
