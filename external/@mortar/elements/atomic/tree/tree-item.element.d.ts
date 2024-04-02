import { DensityOptions, EventEmitter, MteElement } from '../../core';
import '../collapse';
import '../button';
/**
 * @slot - Tree Item content
 */
export declare class MteTreeItem extends MteElement {
    static styles: import("lit").CSSResult[];
    /** Label to be rendered for this element */
    label: string;
    /** Where the expansion indicator should be rendered for this item */
    alignIndicator?: 'start' | 'end';
    /** Whether or not a line should be rendered for this item. Only applies to sections (items w/ children) */
    withLine: boolean;
    /** Whether or not this item is expanded or collapsed */
    expanded: boolean;
    /** Renders the label as a separate trigger from the expansion indicator */
    splitTrigger: boolean;
    /** Forces the element to render as a trigger (w/ hover) even if it is not a link or parent */
    forceTrigger: boolean;
    /** Allows this items text to wrap at white spacing */
    wrapText: boolean;
    /** The icon to be rendered before this items label */
    icon: string;
    /** Whether or not this item should display an active indictor */
    active: any;
    /** Used as the href property for a `<a>` link. When set this item will act as a `<a>` element */
    href?: string;
    /** Tells the browser where to open the link. Only used when `href` is set. */
    target?: '_blank' | '_parent' | '_self' | '_top';
    /** @hidden */
    density: DensityOptions;
    withoutAnimation: boolean;
    /** The type of indicator to display for this item. Only applies to sections (items w/ children) */
    get indicator(): "box" | "chevron";
    set indicator(indicator: "box" | "chevron");
    private _indicator;
    /** Event emitted when this item is expanded. Only applies to sections (items w/ children) */
    _onExpand: EventEmitter<boolean>;
    /** Event emitted when this item is collapsed. Only applies to sections (items w/ children) */
    _onCollapse: EventEmitter<boolean>;
    /** Event emitted with this item is clicked */
    _onClick: EventEmitter<boolean>;
    _onFocus: EventEmitter<boolean>;
    _onBlur: EventEmitter<boolean>;
    _onBranchHiddenChange: EventEmitter<boolean>;
    isLeaf: boolean;
    hidden: boolean;
    childItems: any;
    indicatorElem: Promise<HTMLElement>;
    private slotController;
    private treeContextConsumer;
    private nestLevel;
    /**
     * We need to position the indicator on initial load, but we don't want to
     * animate the first position placement. This gets set only after the first
     * handleExpandedChange call so we can ignore animating until after that
     *
     */
    firstExpandedCheckComplete: boolean;
    /**
     * Returns a ref to the closest parent tree element.
     * Returns null on in an ssr env
     */
    get parentTree(): import("./tree.element").MteTree;
    /** Returns a ref to the closest parent tree-item or tree element */
    get parentItem(): MteTreeItem;
    private handleLabelChange;
    /** Toggles the value of splitTrigger inversely with href */
    private handleHrefChange;
    /** Animates the chevron indicator icon upon expansion */
    private handleExpandedChange;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    toggleExpanded(): void;
    private clicked;
    /** Called when this tree-items parent tree item emits a branch hidden event */
    private handleBranchHiddenChange;
    /** Listens for toggle event emissions from the parent tree */
    private handleParentToggleEvent;
    private updateNestLevel;
    private getIcon;
}
declare global {
    interface HTMLElementTagNameMap {
        'mte-tree-item': MteTreeItem;
    }
}
