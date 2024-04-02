import { EventEmitter, MteElement } from '../../core';
import { TreePreset } from './tree.presets';
export declare const AllTreeElements = "__ALL__";
export interface TreeToggleEventDetail {
    action: 'expand' | 'collapse' | 'toggle';
    target: string | typeof AllTreeElements;
}
export interface TreeGlobalPropChangeEventDetail {
    changedProps: Set<'indicator' | 'alignIndicator' | 'withLine'>;
}
declare const MteTree_base: import("../../core").Constructor<import("../../core").DensityInterface> & import("../../core").Constructor<import("../../core").PresetElementInterface<TreePreset>> & typeof MteElement;
/**
 * @slot - Tree content
 */
export declare class MteTree extends MteTree_base {
    static styles: import("lit").CSSResult[];
    /** Sets the indicator for all of this tree's child tree-items */
    indicator?: 'chevron' | 'box';
    /** Sets the alignment of all of this tree's child tree-item indicators */
    alignIndicator?: 'start' | 'end';
    /** Sets the withLine status of all of this tree's child tree-item indicators */
    withLine?: boolean;
    /**
     * Emits all toggle, collapse, and expand events for child tree-items to react to
     * @ignore
     */
    _onToggle: EventEmitter<TreeToggleEventDetail>;
    private treeContextProvider;
    /** Emit context update when a context prop changes */
    private handleContextChange;
    constructor();
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    expand(id: string): void;
    expandAll(): void;
    collapse(id: string): void;
    collapseAll(): void;
    toggle(id: string): void;
    toggleAll(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-tree': MteTree;
    }
}
export {};
