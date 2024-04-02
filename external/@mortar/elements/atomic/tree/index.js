import "../../chunks/chunk.YCYD3ABU.js";
import "../../chunks/chunk.AFBGVPX2.js";
import "../../chunks/chunk.FSBXRO6N.js";
import "../../chunks/chunk.5AAXKTSO.js";
import "../../chunks/chunk.D6N6Z2UH.js";
import "../../chunks/chunk.F33MBUAV.js";
import "../../chunks/chunk.SRHT6JKE.js";
import "../../chunks/chunk.CFKDY3QJ.js";
import "../../chunks/chunk.D4QL7DP6.js";
import {
  MteIconRegistryService
} from "../../chunks/chunk.L7F3KXB6.js";
import {
  DensityMixin,
  MteElement,
  PresetMixinFactory,
  SlotController,
  __decorateClass,
  defineElement,
  eventEmitter,
  isSsr,
  onUpdate,
  presetProperty,
  styles,
  styles7 as styles2
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/tree/tree.element.ts
import { html } from "lit";

// src/atomic/tree/tree.styles.ts
import { css } from "lit";
var styles3 = css`:host{background:rgb(var(--mte-surface-2-rgb));border-radius:var(--mte-border-radius-md);display:block;padding:6px;position:relative}::slotted(mte-tree-item){margin-left:0}`;

// src/atomic/tree/tree.context.ts
import { createContext } from "@lit-labs/context";
var treeContext = createContext("MTE_TREE_CONTEXT");

// src/atomic/tree/tree.element.ts
import { ContextProvider } from "@lit-labs/context";
var AllTreeElements = "__ALL__";
var MteTree = class extends DensityMixin(PresetMixinFactory("MteTree")(MteElement)) {
  constructor() {
    super();
    this.withLine = false;
    if (!isSsr()) {
      this.treeContextProvider = new ContextProvider(this, treeContext, {
        indicator: this.indicator,
        alignIndicator: this.alignIndicator,
        withLine: this.withLine,
        density: this.density
      });
    }
  }
  handleContextChange() {
    this.treeContextProvider?.setValue({
      indicator: this.indicator,
      alignIndicator: this.alignIndicator,
      withLine: this.withLine,
      density: this.density
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "tree");
  }
  render() {
    return html`${this.instanceStyles}<slot></slot>`;
  }
  expand(id) {
    this._onToggle.emit({
      action: "expand",
      target: id
    });
  }
  expandAll() {
    this._onToggle.emit({
      action: "expand",
      target: AllTreeElements
    });
  }
  collapse(id) {
    this._onToggle.emit({
      action: "collapse",
      target: id
    });
  }
  collapseAll() {
    this._onToggle.emit({
      action: "collapse",
      target: AllTreeElements
    });
  }
  toggle(id) {
    this._onToggle.emit({
      action: "toggle",
      target: id
    });
  }
  toggleAll() {
    this._onToggle.emit({
      action: "toggle",
      target: AllTreeElements
    });
  }
};
MteTree.styles = [styles2, styles, styles3];
__decorateClass([
  presetProperty()
], MteTree.prototype, "indicator", 2);
__decorateClass([
  presetProperty()
], MteTree.prototype, "alignIndicator", 2);
__decorateClass([
  presetProperty({ type: Boolean })
], MteTree.prototype, "withLine", 2);
__decorateClass([
  eventEmitter()
], MteTree.prototype, "_onToggle", 2);
__decorateClass([
  onUpdate(["indicator", "alignIndicator", "withLine", "density"])
], MteTree.prototype, "handleContextChange", 1);
MteTree = __decorateClass([
  defineElement("mte-tree")
], MteTree);

// src/atomic/tree/tree-item.element.ts
import { styleMap } from "lit/directives/style-map.js";
import {
  mtrIconChevronDown,
  mtrIconChevronRight,
  mtrIconMinusBoxOutline,
  mtrIconPlusBoxOutline
} from "@mortar/icons";
import { html as html2 } from "lit";
import { property, queryAssignedElements, queryAsync, state } from "lit/decorators.js";

// src/atomic/tree/tree-item.styles.ts
import { css as css2 } from "lit";
var styles4 = css2`:host{display:block;margin-left:30px;position:relative;white-spacing:nowrap}:host([density=compact]){margin-left:24px}:host([density=roomy]){margin-left:35px}:host([wrapText]){white-spacing:normal}.row{align-items:center;border-radius:var(--mte-border-radius-md);display:flex}.row.align--start .indicator{order:0}.row.align--end .indicator{margin-left:auto;order:1}.row.leaf:not(.align--end){margin-left:26px}:host([density=compact]) .row.leaf:not(.align--end){margin-left:22px}:host([density=roomy]) .row.leaf:not(.align--end){margin-left:32px}.row:not(.leaf)+mte-collapse ::slotted(:not(mte-tree-item)){margin-left:34px}:host([density=compact]) .row:not(.leaf)+mte-collapse ::slotted(:not(mte-tree-item)){margin-left:32px}:host([density=roomy]) .row:not(.leaf)+mte-collapse ::slotted(:not(mte-tree-item)){margin-left:44px}.row.single-trigger:not(.leaf){background:rgba(var(--mte-it-surface-2-default-rgb),var(--mte-it-surface-2-default-a))}.row.single-trigger:not(.leaf):hover{background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a))}.row.single-trigger:not(.leaf):active{background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a))}.row.leaf--trigger{background:rgba(var(--mte-it-surface-2-default-rgb),var(--mte-it-surface-2-default-a))}.row.leaf--trigger:hover{background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a))}.row.leaf--trigger:active{background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a))}.row.show-line:not(.leaf):after{border-left:1px solid rgb(var(--mte-border-2-rgb));content:"";height:calc(100% - 30px);left:13px;position:absolute;top:28px}:host([density=compact]) .row.show-line:not(.leaf):after{height:calc(100% - 26px);left:11px;top:24px}:host([density=roomy]) .row.show-line:not(.leaf):after{height:calc(100% - 36px);left:16px;top:34px}.indicator{align-items:center;align-self:flex-start;border-radius:var(--mte-border-radius-full);cursor:pointer;display:flex;height:22px;justify-content:center;min-height:22px;min-width:22px;padding:2px;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:22px}:host([density=roomy]) .indicator{padding:5px}:host([density=compact]) .indicator{height:16px;min-height:16px;min-width:16px;padding:3px;width:16px}.row:not(.single-trigger) .indicator{background:rgba(var(--mte-it-surface-2-default-rgb),var(--mte-it-surface-2-default-a))}.row:not(.single-trigger) .indicator:hover{background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a))}.row:not(.single-trigger) .indicator:active{background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a))}.label{align-items:center;border-radius:var(--mte-border-radius-md);color:unset;display:flex;padding:1px 8px;text-decoration:unset;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}:host([density=roomy]) .label{padding:4px 10px}:host([density=compact]) .label{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-body2-font-size);font-weight:var(--mte-font-set-body2-font-weight);line-height:var(--mte-font-set-body2-line-height);padding:1px 6px;text-decoration:inherit;text-transform:inherit}.label__icon{color:rgb(var(--mte-ink-3-rgb));margin-right:6px}.row:not(.leaf) .label{cursor:pointer}.row:not(.single-trigger):not(.leaf) .label{background:rgba(var(--mte-it-surface-2-default-rgb),var(--mte-it-surface-2-default-a))}.row:not(.single-trigger):not(.leaf) .label:hover{background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a))}.row:not(.single-trigger):not(.leaf) .label:active{background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a))}.active-indicator{background:rgb(var(--mte-focus-rgb));height:20px;left:0;position:absolute;top:3px;width:4px}.active-indicator.nested{border-bottom-right-radius:var(--mte-border-radius-md);border-top-right-radius:var(--mte-border-radius-md);height:8px;margin-top:6px;width:5px}`;

// src/atomic/tree/tree-item.element.ts
import { classMap } from "lit/directives/class-map.js";
import { ContextConsumer } from "@lit-labs/context";
var nextUniqueId = 0;
MteIconRegistryService.registerIcons([
  mtrIconChevronDown,
  mtrIconChevronRight,
  mtrIconPlusBoxOutline,
  mtrIconMinusBoxOutline
]);
var MteTreeItem = class extends MteElement {
  constructor() {
    super(...arguments);
    this.withLine = false;
    this.expanded = false;
    this.splitTrigger = false;
    this.forceTrigger = false;
    this.wrapText = false;
    this.withoutAnimation = false;
    this.isLeaf = true;
    this.hidden = false;
    this.slotController = new SlotController(this);
    // Subscribe to parent context
    this.treeContextConsumer = new ContextConsumer(
      this,
      treeContext,
      ({ indicator, alignIndicator, withLine, density }) => {
        this.indicator = indicator;
        this.alignIndicator = alignIndicator;
        this.withLine = withLine;
        this.density = density;
      },
      true
    );
    this.nestLevel = 0;
    /**
     * We need to position the indicator on initial load, but we don't want to
     * animate the first position placement. This gets set only after the first
     * handleExpandedChange call so we can ignore animating until after that
     *
     */
    this.firstExpandedCheckComplete = false;
    /** Called when this tree-items parent tree item emits a branch hidden event */
    this.handleBranchHiddenChange = (event) => {
      if (this.hidden !== event.detail) {
        this.hidden = event.detail;
        setTimeout(() => {
          this._onBranchHiddenChange.emit(this.hidden);
        });
        this.setAttribute("aria-hidden", `${this.hidden}`);
      }
    };
    /** Listens for toggle event emissions from the parent tree */
    this.handleParentToggleEvent = (event) => {
      const { action, target } = event.detail;
      if (target === AllTreeElements || target === this.id) {
        if (this.expanded && (action === "toggle" || action === "collapse")) {
          this.toggleExpanded();
        } else if (action === "toggle" || action === "expand") {
          this.toggleExpanded();
        }
      }
    };
  }
  get indicator() {
    return this._indicator ?? this.parentTree.indicator ?? "chevron";
  }
  set indicator(indicator) {
    this._indicator = indicator;
  }
  /**
   * Returns a ref to the closest parent tree element.
   * Returns null on in an ssr env
   */
  get parentTree() {
    return this.closest ? this.closest("mte-tree") : null;
  }
  /** Returns a ref to the closest parent tree-item or tree element */
  get parentItem() {
    return this.parentElement.closest(`:is(mte-tree, mte-tree-item)`);
  }
  handleLabelChange() {
    this.setAttribute("aria-label", this.label);
  }
  handleHrefChange() {
    this.splitTrigger = !!this.href;
  }
  async handleExpandedChange() {
    this._onBranchHiddenChange.emit(!this.expanded);
    this.setAttribute("aria-expanded", `${this.expanded}`);
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleParentToggleEvent.bind(this);
    this.handleBranchHiddenChange.bind(this);
    this.id = `mte-tree-item--${nextUniqueId++}`;
    this.setAttribute("role", "treeitem");
    this.setAttribute("tabindex", "1");
    this.slotController.watchSlots(["default"]).subscribe((changes) => {
      if (changes?.has("default")) {
        this.isLeaf = this.childItems.length === 0;
        this.handleExpandedChange().then(() => {
          this.firstExpandedCheckComplete = true;
        });
      }
    });
    const parentTree = this.parentTree;
    parentTree?.addEventListener("onToggle", this.handleParentToggleEvent);
    const parentItem = this.parentItem;
    parentItem?.addEventListener("onBranchHiddenChange", this.handleBranchHiddenChange);
    this.updateNestLevel();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.parentTree?.removeEventListener("onToggle", this.handleParentToggleEvent);
    this.parentItem?.removeEventListener("onBranchHiddenChange", this.handleBranchHiddenChange);
  }
  render() {
    const parentTree = this.parentTree;
    const indicatorIcon = this.isLeaf ? null : this.getIcon(this.indicator, this.expanded);
    const isLeafTrigger = this.isLeaf && (this.href || this.forceTrigger);
    const notLeafTrigger = this.isLeaf && !this.href && !this.forceTrigger;
    const rowClasses = classMap({
      "align--start": (this.alignIndicator ?? parentTree?.alignIndicator) === "start",
      "align--end": (this.alignIndicator ?? parentTree?.alignIndicator) === "end",
      "single-trigger": !this.isLeaf && !this.splitTrigger,
      "show-line": this.withLine ?? parentTree?.withLine,
      "leaf--trigger": isLeafTrigger,
      "leaf": this.isLeaf
    });
    const activeIndicatorStyles = styleMap({
      left: `-${this.nestLevel * 24 + 12}px`
    });
    const leafIconSize = this.density === "compact" ? 16 : this.density === "roomy" ? 20 : 18;
    return html2`<div class="row ${rowClasses}">${indicatorIcon ? html2`<div class="indicator" part="indicator" @click="${this.toggleExpanded}"><mte-icon name="${indicatorIcon}" size="${indicatorIcon !== "chevron-down" && indicatorIcon !== "chevron-right" ? leafIconSize : leafIconSize + 4}"></mte-icon></div>` : null} ${this.href ? html2`<a class="label" part="label" href="${this.href}" target="${this.target}">${this.icon ? html2`<mte-icon class="label__icon" name="${this.icon}" size="${leafIconSize}"></mte-icon>` : null}<slot name="label">${this.label}</slot></a>` : html2`<div class="label" part="label" @click="${notLeafTrigger ? this.clicked : this.toggleExpanded}">${this.icon ? html2`<mte-icon class="label__icon" name="${this.icon}" size="${leafIconSize}"></mte-icon>` : null}<slot name="label">${this.label}</slot></div>`}</div>${this.active ? html2`<div class="active-indicator" style="${activeIndicatorStyles}"></div>` : null}<mte-collapse withoutAnimation ?opened="${this.expanded}" withFade showOverflow><slot class="content" part="content" role="group"></slot></mte-collapse>`;
  }
  toggleExpanded() {
    this.expanded = !this.expanded;
    this.clicked();
    if (this.expanded) {
      this._onExpand.emit(true);
    } else {
      this._onCollapse.emit(true);
    }
  }
  clicked() {
    this._onClick.emit(true);
  }
  updateNestLevel() {
    const parentItem = this.parentItem;
    if (this.parentTree === parentItem) {
      this.nestLevel = 0;
    } else {
      this.nestLevel = parentItem?.nestLevel + 1;
    }
  }
  getIcon(indicator, expanded) {
    if (!indicator) {
      return expanded ? "chevron-down" : "chevron-right";
    }
    return indicator === "chevron" ? expanded ? "chevron-down" : "chevron-right" : expanded ? "minus-box-outline" : "plus-box-outline";
  }
};
MteTreeItem.styles = [styles2, styles4];
__decorateClass([
  property({ reflect: true })
], MteTreeItem.prototype, "label", 2);
__decorateClass([
  property({ reflect: true })
], MteTreeItem.prototype, "alignIndicator", 2);
__decorateClass([
  property({ type: Boolean })
], MteTreeItem.prototype, "withLine", 2);
__decorateClass([
  property({ type: Boolean })
], MteTreeItem.prototype, "expanded", 2);
__decorateClass([
  property({ type: Boolean })
], MteTreeItem.prototype, "splitTrigger", 2);
__decorateClass([
  property({ type: Boolean })
], MteTreeItem.prototype, "forceTrigger", 2);
__decorateClass([
  property({ type: Boolean })
], MteTreeItem.prototype, "wrapText", 2);
__decorateClass([
  property()
], MteTreeItem.prototype, "icon", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteTreeItem.prototype, "active", 2);
__decorateClass([
  property()
], MteTreeItem.prototype, "href", 2);
__decorateClass([
  property()
], MteTreeItem.prototype, "target", 2);
__decorateClass([
  property({ reflect: true })
], MteTreeItem.prototype, "density", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteTreeItem.prototype, "withoutAnimation", 2);
__decorateClass([
  property()
], MteTreeItem.prototype, "indicator", 1);
__decorateClass([
  eventEmitter()
], MteTreeItem.prototype, "_onExpand", 2);
__decorateClass([
  eventEmitter()
], MteTreeItem.prototype, "_onCollapse", 2);
__decorateClass([
  eventEmitter()
], MteTreeItem.prototype, "_onClick", 2);
__decorateClass([
  eventEmitter()
], MteTreeItem.prototype, "_onFocus", 2);
__decorateClass([
  eventEmitter()
], MteTreeItem.prototype, "_onBlur", 2);
__decorateClass([
  eventEmitter()
], MteTreeItem.prototype, "_onBranchHiddenChange", 2);
__decorateClass([
  state()
], MteTreeItem.prototype, "isLeaf", 2);
__decorateClass([
  state()
], MteTreeItem.prototype, "hidden", 2);
__decorateClass([
  queryAssignedElements()
], MteTreeItem.prototype, "childItems", 2);
__decorateClass([
  queryAsync(".indicator")
], MteTreeItem.prototype, "indicatorElem", 2);
__decorateClass([
  onUpdate("label")
], MteTreeItem.prototype, "handleLabelChange", 1);
__decorateClass([
  onUpdate("href")
], MteTreeItem.prototype, "handleHrefChange", 1);
__decorateClass([
  onUpdate("expanded", { waitUntilFirstUpdate: true })
], MteTreeItem.prototype, "handleExpandedChange", 1);
MteTreeItem = __decorateClass([
  defineElement("mte-tree-item")
], MteTreeItem);
export {
  AllTreeElements,
  MteTree,
  MteTreeItem,
  treeContext
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90cmVlL3RyZWUuZWxlbWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RyZWUvdHJlZS5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90cmVlL3RyZWUuY29udGV4dC50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RyZWUiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90cmVlL3RyZWUtaXRlbS5zdHlsZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuXG5pbXBvcnQge1xuICBiYXNlU3R5bGVzLFxuICBkZWZpbmVFbGVtZW50LFxuICBEZW5zaXR5TWl4aW4sXG4gIGRlbnNpdHlTdHlsZXMsXG4gIGV2ZW50RW1pdHRlcixcbiAgRXZlbnRFbWl0dGVyLFxuICBpc1NzcixcbiAgTXRlRWxlbWVudCxcbiAgb25VcGRhdGUsXG4gIFByZXNldE1peGluRmFjdG9yeSxcbiAgcHJlc2V0UHJvcGVydHksXG59IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi90cmVlLnN0eWxlcyc7XG5pbXBvcnQgeyBUcmVlUHJlc2V0IH0gZnJvbSAnLi90cmVlLnByZXNldHMnO1xuaW1wb3J0IHsgTXRlVHJlZUNvbnRleHQsIHRyZWVDb250ZXh0IH0gZnJvbSAnLi90cmVlLmNvbnRleHQnO1xuaW1wb3J0IHsgQ29udGV4dEtleSwgQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnQGxpdC1sYWJzL2NvbnRleHQnO1xuXG5leHBvcnQgY29uc3QgQWxsVHJlZUVsZW1lbnRzID0gJ19fQUxMX18nO1xuZXhwb3J0IGludGVyZmFjZSBUcmVlVG9nZ2xlRXZlbnREZXRhaWwge1xuICBhY3Rpb246ICdleHBhbmQnIHwgJ2NvbGxhcHNlJyB8ICd0b2dnbGUnO1xuICB0YXJnZXQ6IHN0cmluZyB8IHR5cGVvZiBBbGxUcmVlRWxlbWVudHM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUdsb2JhbFByb3BDaGFuZ2VFdmVudERldGFpbCB7XG4gIGNoYW5nZWRQcm9wczogU2V0PCdpbmRpY2F0b3InIHwgJ2FsaWduSW5kaWNhdG9yJyB8ICd3aXRoTGluZSc+O1xufVxuXG4vKipcbiAqIEBzbG90IC0gVHJlZSBjb250ZW50XG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtdHJlZScpXG5leHBvcnQgY2xhc3MgTXRlVHJlZSBleHRlbmRzIERlbnNpdHlNaXhpbihQcmVzZXRNaXhpbkZhY3Rvcnk8VHJlZVByZXNldD4oJ010ZVRyZWUnKShNdGVFbGVtZW50KSkge1xuICBzdGF0aWMgc3R5bGVzID0gW2Jhc2VTdHlsZXMsIGRlbnNpdHlTdHlsZXMsIHN0eWxlc107XG5cbiAgLyoqIFNldHMgdGhlIGluZGljYXRvciBmb3IgYWxsIG9mIHRoaXMgdHJlZSdzIGNoaWxkIHRyZWUtaXRlbXMgKi9cbiAgQHByZXNldFByb3BlcnR5KCkgaW5kaWNhdG9yPzogJ2NoZXZyb24nIHwgJ2JveCc7XG5cbiAgLyoqIFNldHMgdGhlIGFsaWdubWVudCBvZiBhbGwgb2YgdGhpcyB0cmVlJ3MgY2hpbGQgdHJlZS1pdGVtIGluZGljYXRvcnMgKi9cbiAgQHByZXNldFByb3BlcnR5KCkgYWxpZ25JbmRpY2F0b3I/OiAnc3RhcnQnIHwgJ2VuZCc7XG5cbiAgLyoqIFNldHMgdGhlIHdpdGhMaW5lIHN0YXR1cyBvZiBhbGwgb2YgdGhpcyB0cmVlJ3MgY2hpbGQgdHJlZS1pdGVtIGluZGljYXRvcnMgKi9cbiAgQHByZXNldFByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSB3aXRoTGluZT8gPSBmYWxzZTtcblxuICAvKipcbiAgICogRW1pdHMgYWxsIHRvZ2dsZSwgY29sbGFwc2UsIGFuZCBleHBhbmQgZXZlbnRzIGZvciBjaGlsZCB0cmVlLWl0ZW1zIHRvIHJlYWN0IHRvXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIEBldmVudEVtaXR0ZXIoKSBfb25Ub2dnbGU6IEV2ZW50RW1pdHRlcjxUcmVlVG9nZ2xlRXZlbnREZXRhaWw+O1xuXG4gIHByaXZhdGUgdHJlZUNvbnRleHRQcm92aWRlcjpcbiAgICB8IENvbnRleHRQcm92aWRlcjxDb250ZXh0S2V5PCdNVEVfVFJFRV9DT05URVhUJywgTXRlVHJlZUNvbnRleHQ+PlxuICAgIHwgdW5kZWZpbmVkO1xuXG4gIC8qKiBFbWl0IGNvbnRleHQgdXBkYXRlIHdoZW4gYSBjb250ZXh0IHByb3AgY2hhbmdlcyAqL1xuICBAb25VcGRhdGUoWydpbmRpY2F0b3InLCAnYWxpZ25JbmRpY2F0b3InLCAnd2l0aExpbmUnLCAnZGVuc2l0eSddKVxuICBwcml2YXRlIGhhbmRsZUNvbnRleHRDaGFuZ2UoKSB7XG4gICAgdGhpcy50cmVlQ29udGV4dFByb3ZpZGVyPy5zZXRWYWx1ZSh7XG4gICAgICBpbmRpY2F0b3I6IHRoaXMuaW5kaWNhdG9yLFxuICAgICAgYWxpZ25JbmRpY2F0b3I6IHRoaXMuYWxpZ25JbmRpY2F0b3IsXG4gICAgICB3aXRoTGluZTogdGhpcy53aXRoTGluZSxcbiAgICAgIGRlbnNpdHk6IHRoaXMuZGVuc2l0eSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyBXYWl0IHRvIGluaXQgY29udGV4dCBwcm92aWRlciB1bnRpbCBoZXJlIHNvIHdlIGNhbiBhdm9pZCBkb2luZyBzbyBkdXJpbmcgU1NSIGZvciBub3dcbiAgICAvLyBUT0RPKHJlZWNlKTogaW5pdCBub3JtYWxseSB3aGVuIGV2ZW50cyBhcmUgc3VwcG9ydGVkIGJ5IFNTUjogaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzMzNjVcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIHRoaXMudHJlZUNvbnRleHRQcm92aWRlciA9IG5ldyBDb250ZXh0UHJvdmlkZXIodGhpcywgdHJlZUNvbnRleHQsIHtcbiAgICAgICAgaW5kaWNhdG9yOiB0aGlzLmluZGljYXRvcixcbiAgICAgICAgYWxpZ25JbmRpY2F0b3I6IHRoaXMuYWxpZ25JbmRpY2F0b3IsXG4gICAgICAgIHdpdGhMaW5lOiB0aGlzLndpdGhMaW5lLFxuICAgICAgICBkZW5zaXR5OiB0aGlzLmRlbnNpdHksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndHJlZScpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYCR7dGhpcy5pbnN0YW5jZVN0eWxlc308c2xvdD48L3Nsb3Q+YDtcbiAgfVxuXG4gIHB1YmxpYyBleHBhbmQoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX29uVG9nZ2xlLmVtaXQoe1xuICAgICAgYWN0aW9uOiAnZXhwYW5kJyxcbiAgICAgIHRhcmdldDogaWQsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZXhwYW5kQWxsKCkge1xuICAgIHRoaXMuX29uVG9nZ2xlLmVtaXQoe1xuICAgICAgYWN0aW9uOiAnZXhwYW5kJyxcbiAgICAgIHRhcmdldDogQWxsVHJlZUVsZW1lbnRzLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNvbGxhcHNlKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vblRvZ2dsZS5lbWl0KHtcbiAgICAgIGFjdGlvbjogJ2NvbGxhcHNlJyxcbiAgICAgIHRhcmdldDogaWQsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY29sbGFwc2VBbGwoKSB7XG4gICAgdGhpcy5fb25Ub2dnbGUuZW1pdCh7XG4gICAgICBhY3Rpb246ICdjb2xsYXBzZScsXG4gICAgICB0YXJnZXQ6IEFsbFRyZWVFbGVtZW50cyxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX29uVG9nZ2xlLmVtaXQoe1xuICAgICAgYWN0aW9uOiAndG9nZ2xlJyxcbiAgICAgIHRhcmdldDogaWQsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlQWxsKCkge1xuICAgIHRoaXMuX29uVG9nZ2xlLmVtaXQoe1xuICAgICAgYWN0aW9uOiAndG9nZ2xlJyxcbiAgICAgIHRhcmdldDogQWxsVHJlZUVsZW1lbnRzLFxuICAgIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS10cmVlJzogTXRlVHJlZTtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtiYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtc3VyZmFjZS0yLXJnYikpO2JvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpO2Rpc3BsYXk6YmxvY2s7cGFkZGluZzo2cHg7cG9zaXRpb246cmVsYXRpdmV9OjpzbG90dGVkKG10ZS10cmVlLWl0ZW0pe21hcmdpbi1sZWZ0OjB9YDsiLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ0BsaXQtbGFicy9jb250ZXh0JztcbmltcG9ydCB7IERlbnNpdHlPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXRlVHJlZUNvbnRleHQge1xuICBpbmRpY2F0b3I6ICdjaGV2cm9uJyB8ICdib3gnO1xuICBhbGlnbkluZGljYXRvcjogJ3N0YXJ0JyB8ICdlbmQnO1xuICB3aXRoTGluZTogYm9vbGVhbjtcbiAgZGVuc2l0eTogRGVuc2l0eU9wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCB0cmVlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8TXRlVHJlZUNvbnRleHQ+KCdNVEVfVFJFRV9DT05URVhUJyk7XG4iLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2Rpc3BsYXk6YmxvY2s7bWFyZ2luLWxlZnQ6MzBweDtwb3NpdGlvbjpyZWxhdGl2ZTt3aGl0ZS1zcGFjaW5nOm5vd3JhcH06aG9zdChbZGVuc2l0eT1jb21wYWN0XSl7bWFyZ2luLWxlZnQ6MjRweH06aG9zdChbZGVuc2l0eT1yb29teV0pe21hcmdpbi1sZWZ0OjM1cHh9Omhvc3QoW3dyYXBUZXh0XSl7d2hpdGUtc3BhY2luZzpub3JtYWx9LnJvd3thbGlnbi1pdGVtczpjZW50ZXI7Ym9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCk7ZGlzcGxheTpmbGV4fS5yb3cuYWxpZ24tLXN0YXJ0IC5pbmRpY2F0b3J7b3JkZXI6MH0ucm93LmFsaWduLS1lbmQgLmluZGljYXRvcnttYXJnaW4tbGVmdDphdXRvO29yZGVyOjF9LnJvdy5sZWFmOm5vdCguYWxpZ24tLWVuZCl7bWFyZ2luLWxlZnQ6MjZweH06aG9zdChbZGVuc2l0eT1jb21wYWN0XSkgLnJvdy5sZWFmOm5vdCguYWxpZ24tLWVuZCl7bWFyZ2luLWxlZnQ6MjJweH06aG9zdChbZGVuc2l0eT1yb29teV0pIC5yb3cubGVhZjpub3QoLmFsaWduLS1lbmQpe21hcmdpbi1sZWZ0OjMycHh9LnJvdzpub3QoLmxlYWYpK210ZS1jb2xsYXBzZSA6OnNsb3R0ZWQoOm5vdChtdGUtdHJlZS1pdGVtKSl7bWFyZ2luLWxlZnQ6MzRweH06aG9zdChbZGVuc2l0eT1jb21wYWN0XSkgLnJvdzpub3QoLmxlYWYpK210ZS1jb2xsYXBzZSA6OnNsb3R0ZWQoOm5vdChtdGUtdHJlZS1pdGVtKSl7bWFyZ2luLWxlZnQ6MzJweH06aG9zdChbZGVuc2l0eT1yb29teV0pIC5yb3c6bm90KC5sZWFmKSttdGUtY29sbGFwc2UgOjpzbG90dGVkKDpub3QobXRlLXRyZWUtaXRlbSkpe21hcmdpbi1sZWZ0OjQ0cHh9LnJvdy5zaW5nbGUtdHJpZ2dlcjpub3QoLmxlYWYpe2JhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWRlZmF1bHQtcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWRlZmF1bHQtYSkpfS5yb3cuc2luZ2xlLXRyaWdnZXI6bm90KC5sZWFmKTpob3ZlcntiYWNrZ3JvdW5kOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYSkpfS5yb3cuc2luZ2xlLXRyaWdnZXI6bm90KC5sZWFmKTphY3RpdmV7YmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYSkpfS5yb3cubGVhZi0tdHJpZ2dlcntiYWNrZ3JvdW5kOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1kZWZhdWx0LXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1kZWZhdWx0LWEpKX0ucm93LmxlYWYtLXRyaWdnZXI6aG92ZXJ7YmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWEpKX0ucm93LmxlYWYtLXRyaWdnZXI6YWN0aXZle2JhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWEpKX0ucm93LnNob3ctbGluZTpub3QoLmxlYWYpOmFmdGVye2JvcmRlci1sZWZ0OjFweCBzb2xpZCByZ2IodmFyKC0tbXRlLWJvcmRlci0yLXJnYikpO2NvbnRlbnQ6XCJcIjtoZWlnaHQ6Y2FsYygxMDAlIC0gMzBweCk7bGVmdDoxM3B4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDoyOHB4fTpob3N0KFtkZW5zaXR5PWNvbXBhY3RdKSAucm93LnNob3ctbGluZTpub3QoLmxlYWYpOmFmdGVye2hlaWdodDpjYWxjKDEwMCUgLSAyNnB4KTtsZWZ0OjExcHg7dG9wOjI0cHh9Omhvc3QoW2RlbnNpdHk9cm9vbXldKSAucm93LnNob3ctbGluZTpub3QoLmxlYWYpOmFmdGVye2hlaWdodDpjYWxjKDEwMCUgLSAzNnB4KTtsZWZ0OjE2cHg7dG9wOjM0cHh9LmluZGljYXRvcnthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0O2JvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtZnVsbCk7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpmbGV4O2hlaWdodDoyMnB4O2p1c3RpZnktY29udGVudDpjZW50ZXI7bWluLWhlaWdodDoyMnB4O21pbi13aWR0aDoyMnB4O3BhZGRpbmc6MnB4Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt3aWR0aDoyMnB4fTpob3N0KFtkZW5zaXR5PXJvb215XSkgLmluZGljYXRvcntwYWRkaW5nOjVweH06aG9zdChbZGVuc2l0eT1jb21wYWN0XSkgLmluZGljYXRvcntoZWlnaHQ6MTZweDttaW4taGVpZ2h0OjE2cHg7bWluLXdpZHRoOjE2cHg7cGFkZGluZzozcHg7d2lkdGg6MTZweH0ucm93Om5vdCguc2luZ2xlLXRyaWdnZXIpIC5pbmRpY2F0b3J7YmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1hKSl9LnJvdzpub3QoLnNpbmdsZS10cmlnZ2VyKSAuaW5kaWNhdG9yOmhvdmVye2JhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hKSl9LnJvdzpub3QoLnNpbmdsZS10cmlnZ2VyKSAuaW5kaWNhdG9yOmFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hKSl9LmxhYmVse2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLW1kKTtjb2xvcjp1bnNldDtkaXNwbGF5OmZsZXg7cGFkZGluZzoxcHggOHB4O3RleHQtZGVjb3JhdGlvbjp1bnNldDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7d2lkdGg6MTAwJX06aG9zdChbZGVuc2l0eT1yb29teV0pIC5sYWJlbHtwYWRkaW5nOjRweCAxMHB4fTpob3N0KFtkZW5zaXR5PWNvbXBhY3RdKSAubGFiZWx7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1saW5lLWhlaWdodCk7cGFkZGluZzoxcHggNnB4O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXR9LmxhYmVsX19pY29ue2NvbG9yOnJnYih2YXIoLS1tdGUtaW5rLTMtcmdiKSk7bWFyZ2luLXJpZ2h0OjZweH0ucm93Om5vdCgubGVhZikgLmxhYmVse2N1cnNvcjpwb2ludGVyfS5yb3c6bm90KC5zaW5nbGUtdHJpZ2dlcik6bm90KC5sZWFmKSAubGFiZWx7YmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1hKSl9LnJvdzpub3QoLnNpbmdsZS10cmlnZ2VyKTpub3QoLmxlYWYpIC5sYWJlbDpob3ZlcntiYWNrZ3JvdW5kOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYSkpfS5yb3c6bm90KC5zaW5nbGUtdHJpZ2dlcik6bm90KC5sZWFmKSAubGFiZWw6YWN0aXZle2JhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWEpKX0uYWN0aXZlLWluZGljYXRvcntiYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7aGVpZ2h0OjIwcHg7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDozcHg7d2lkdGg6NHB4fS5hY3RpdmUtaW5kaWNhdG9yLm5lc3RlZHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpO2hlaWdodDo4cHg7bWFyZ2luLXRvcDo2cHg7d2lkdGg6NXB4fWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsWUFBWTs7O0FDQXJCLFNBQVMsV0FBVztBQUFhLElBQU1BLFVBQVM7OztBQ0FoRCxTQUFTLHFCQUFxQjtBQVV2QixJQUFNLGNBQWMsY0FBOEIsa0JBQWtCOzs7QUZRM0UsU0FBcUIsdUJBQXVCO0FBRXJDLElBQU0sa0JBQWtCO0FBY3hCLElBQU0sVUFBTixjQUFzQixhQUFhLG1CQUErQixTQUFTLEVBQUUsVUFBVSxDQUFDLEVBQUU7QUFBQSxFQWlDL0YsY0FBYztBQUNaLFVBQU07QUF4QjJCLG9CQUFZO0FBNEI3QyxRQUFJLENBQUMsTUFBTSxHQUFHO0FBQ1osV0FBSyxzQkFBc0IsSUFBSSxnQkFBZ0IsTUFBTSxhQUFhO0FBQUEsUUFDaEUsV0FBVyxLQUFLO0FBQUEsUUFDaEIsZ0JBQWdCLEtBQUs7QUFBQSxRQUNyQixVQUFVLEtBQUs7QUFBQSxRQUNmLFNBQVMsS0FBSztBQUFBLE1BQ2hCLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFD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Qy9ELFFBQUksQ0FBQyxXQUFXO0FBQ2QsYUFBTyxXQUFXLGlCQUFpQjtJQUNyQztBQUNBLFdBQU8sY0FBYyxZQUNqQixXQUNFLGlCQUNBLGtCQUNGLFdBQ0Esc0JBQ0E7RUFDTjtBQUNGO0FBdlVhLFlBQ0osU0FBUyxDQUFDQyxTQUFZQSxPQUFNO0FBR047RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBSmhCLFlBSWtCO0FBR0E7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBUGhCLFlBT2tCO0FBR0E7RUFBNUIsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0dBVmhCLFlBVWtCO0FBR0E7RUFBNUIsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0dBYmhCLFlBYWtCO0FBR0E7RUFBNUIsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0dBaEJoQixZQWdCa0I7QUFHQTtFQUE1QixTQUFTLEVBQUUsTUFBTSxRQUFRLENBQUM7R0FuQmhCLFlBbUJrQjtBQUdBO0VBQTVCLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztHQXRCaEIsWUFzQmtCO0FBR2pCO0VBQVgsU0FBUztHQXpCQyxZQXlCQztBQUdnQztFQUEzQyxTQUFTLEVBQUUsTUFBTSxTQUFTLFNBQVMsS0FBSyxDQUFDO0dBNUIvQixZQTRCaUM7QUFHaEM7RUFBWCxTQUFTO0dBL0JDLFlBK0JDO0FBR0E7RUFBWCxTQUFTO0dBbENDLFlBa0NDO0FBR2lCO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQXJDaEIsWUFxQ2tCO0FBRWU7RUFBM0MsU0FBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQXZDL0IsWUF1Q2lDO0FBSXhDO0VBREgsU0FBUztHQTFDQyxZQTJDUDtBQVNZO0VBQWYsYUFBYTtHQXBESCxZQW9ESztBQUdBO0VBQWYsYUFBYTtHQXZESCxZQXVESztBQUdBO0VBQWYsYUFBYTtHQTFESCxZQTBESztBQUVBO0VBQWYsYUFBYTtHQTVESCxZQTRESztBQUVBO0VBQWYsYUFBYTtHQTlESCxZQThESztBQUVBO0VBQWYsYUFBYTtHQWhFSCxZQWdFSztBQUVQO0VBQVIsTUFBTTtHQWxFSSxZQWtFRjtBQUVBO0VBQVIsTUFBTTtHQXBFSSxZQW9FRjtBQUVnQjtFQUF4QixzQkFBc0I7R0F0RVosWUFzRWM7QUFFQztFQUF6QixXQUFXLFlBQVk7R0F4RWIsWUF3RWU7QUF5Q2xCO0VBRFAsU0FBUyxPQUFPO0dBaEhOLFlBaUhIO0FBTUE7RUFEUCxTQUFTLE1BQU07R0F0SEwsWUF1SEg7QUFNTTtFQURiLFNBQVMsWUFBWSxFQUFFLHNCQUFzQixLQUFLLENBQUM7R0E1SHpDLFlBNkhHO0FBN0hILGNBQU47RUFETixjQUFjLGVBQWU7R0FDakI7IiwKICAibmFtZXMiOiBbInN0eWxlcyIsICJzdHlsZXMiLCAiaHRtbCIsICJjc3MiLCAic3R5bGVzIiwgImh0bWwiLCAic3R5bGVzIl0KfQo=
