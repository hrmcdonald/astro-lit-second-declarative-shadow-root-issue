import { MteElementParts, ResponsiveValue, UnitValue, MteContentBase } from '../../core';
export interface MteNavButtonGroupParts extends MteElementParts {
}
/**
 * @slot - Default slotted for grouped child nav-buttons
 */
export declare class MteNavButtonGroup extends MteContentBase {
    static styles: import("lit").CSSResult[];
    direction: ResponsiveValue<undefined | 'row' | 'rowReverse' | 'column' | 'columnReverse' | 'initial' | 'inherit'>;
    gap: ResponsiveValue<UnitValue>;
    /** Label used to name this list if necessary */
    ariaLabel: string | null;
    protected contentStyleSelectorRoot: string;
    protected instanceStyleSelectorRoot: string;
    private _inheritedAttributes;
    private handleLabelChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-nav-button-group': MteNavButtonGroup;
    }
}
