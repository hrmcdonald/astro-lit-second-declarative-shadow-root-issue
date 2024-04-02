import "../../chunks/chunk.OHVMOSF2.js";
import "../../chunks/chunk.TOU6J7OT.js";
import "../../chunks/chunk.Q54LTJXP.js";
import "../../chunks/chunk.D6N6Z2UH.js";
import "../../chunks/chunk.IVHA27EF.js";
import "../../chunks/chunk.SRHT6JKE.js";
import "../../chunks/chunk.DVRGAMYN.js";
import "../../chunks/chunk.D4QL7DP6.js";
import "../../chunks/chunk.M5RJHYFW.js";
import {
  ButtonMixin,
  MteContentBase,
  MteElement,
  SlotController,
  __decorateClass,
  defineElement,
  eventEmitter,
  isValidResizeController,
  onUpdate,
  styles3 as styles,
  styles7 as styles2
} from "../../chunks/chunk.KVXAK6W4.js";

// src/atomic/tabs/tabs.element.ts
import { html } from "lit";
import { property, queryAssignedElements, query, state } from "lit/decorators.js";
import { ResizeController } from "@lit-labs/observers/resize-controller.js";

// src/atomic/tabs/tabs.styles.ts
import { css } from "lit";
var styles3 = css`:host{--border-color:var(--mte-border-2);--background:var(--mte-surface-1);--panel-radius:var(--mte-border-radius-md);--timing-fn:cubic-bezier(0.4,0,0.2,1);--animation-duration:200ms;display:block;height:100%;position:relative}.tab-list{box-sizing:border-box;display:flex;position:relative;scroll-behavior:smooth;-ms-overflow-style:none;height:100%;overflow:auto;padding-bottom:3px;scrollbar-width:none}.tab-list::-webkit-scrollbar{display:none}.tab-list:before{background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));border-bottom:3px solid rgb(var(--mte-core-primary-base-rgb));border-top-left-radius:var(--mte-border-radius-sm);border-top-right-radius:var(--mte-border-radius-sm);content:"";height:var(--background-height);left:0;opacity:var(--background-opacity,0);pointer-events:none;position:absolute;transform:translate(var(--background-translate,0,0));width:var(--background-width);z-index:2}.tab-list.selected:before{transition:transform var(--animation-duration) var(--timing-fn),width var(--animation-duration) var(--timing-fn),height var(--animation-duration) var(--timing-fn)}.indicator{background-color:var(--border-color);bottom:0;display:inline-block;height:3px;position:absolute;width:100%;z-index:0}.container{align-items:center;display:flex;position:relative}.button-container{display:none}:host([nextVisible]) .button-container.right,:host([previousVisible]) .button-container.left{align-items:center;align-self:center;background-color:var(--mte-surface-2);display:flex;height:100%;justify-content:center;position:absolute;width:32px;z-index:2}:host([nextVisible]) .scroll-indicator.right,:host([previousVisible]) .scroll-indicator.left{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--background);border:0;border-radius:50%;color:var(--mte-ink-2);cursor:pointer;display:flex;height:32px;justify-content:center;width:32px}:host([nextVisible]) .button-container.right{bottom:0;right:0;top:0}:host([previousVisible]) .button-container.left{bottom:0;left:0;top:0}:host([nextVisible]) .button-container.right:before{background:linear-gradient(to left,var(--mte-surface-2),transparent);content:"";height:100%;position:absolute;right:32px;width:32px}:host([previousVisible]) .button-container.left:after{background:linear-gradient(to left,transparent,var(--mte-surface-2));content:"";height:100%;left:32px;position:absolute;width:32px}:host([withEnclosedPanels]) .button-container.left,:host([withEnclosedPanels]) .button-container.right{height:38px;z-index:0}:host([withEnclosedPanels]) .button-container.left{z-index:1}.scroll-indicator:hover{--background:rgba(var(--mte-it-surface-1-hover-rgb),var(--mte-it-surface-1-hover-a))}:host([withInlineBorder]){--border-color:transparent}:host([withFullWidth]) .tab-list.selected:before{--animation-duration:300ms}:host([withFullWidth]) .tab-list,:host([withFullWidth]) ::slotted(mte-tab){width:100%}.tab-panels{--border-color:transparent;border-bottom:2px solid var(--border-color);border-left:2px solid var(--border-color);border-right:2px solid var(--border-color)}:host([radius=none]){--panel-radius:0px}:host([radius=sm]){--panel-radius:var(--mte-border-radius-sm)}:host([radius=md]){--panel-radius:var(--mte-border-radius-md)}:host([radius=lg]){--panel-radius:var(--mte-border-radius-lg)}:host([withFullWidth]) ::slotted(mte-tab){width:100%}:host([withEnclosedPanels]):host([withInlineBorder]){--border-color:var(--mte-border-2)}:host([withEnclosedPanels]) .tab-panels{--border-color:var(--mte-border-2);border-bottom:2px solid var(--border-color);border-bottom-left-radius:var(--panel-radius);border-bottom-right-radius:var(--panel-radius);border-left:2px solid var(--border-color);border-right:2px solid var(--border-color)}@media screen and (prefers-reduced-motion:reduce){.tab-list.selected:before{transition:none}}`;

// src/atomic/tabs/tabs.element.ts
var MteTabs = class extends MteElement {
  constructor() {
    super(...arguments);
    this.activation = "automatic";
    this.withFullWidth = false;
    this.withInlineBorder = false;
    this.withEnclosedPanels = false;
    this.nextVisible = false;
    this.previousVisible = false;
    this.slotController = new SlotController(this, { updateOnChange: ["nav", "new"] });
  }
  connectedCallback() {
    super.connectedCallback();
    this.observer = new ResizeController(this, {
      callback: () => {
        this.handleResize();
      }
    });
    this.updateComplete.then(() => {
      if (this.tabList) {
        this.observer?.observe(this.tabList);
        this.tabList.addEventListener("transitionend", () => {
          this.removeTransition();
        });
      }
    });
    this.slotController.watchSlots(["default", "nav"]).subscribe(() => {
      if (this.tabs.length > 0) {
        this.setAria();
        this.setInitial();
      }
    });
  }
  firstUpdated() {
    this.computeTransitionBackgroundSize();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.tabList && isValidResizeController(this.observer)) {
      this.observer?.unobserve(this.tabList);
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    this.setIsScrollable();
    this.setNextVisible();
    this.setPreviousVisible();
  }
  /** Removes classname responsible for transition to prevent animation on resize */
  removeTransition() {
    this.tabList?.classList.remove("selected");
  }
  select(panelName) {
    const targetTab = this.tabs?.find((tab) => tab.panel === panelName);
    if (targetTab) {
      this.setSelectedTab(targetTab);
    }
  }
  get enabledTabs() {
    return this.tabs.filter((tab) => {
      return tab.disabled === false;
    });
  }
  setAria() {
    this.tabs.forEach((tab) => {
      const panel = this.panels.find((panel2) => panel2.name === tab.panel);
      if (panel) {
        tab.ariaControls = panel.id;
        panel.ariaLabelledBy = tab.id;
      }
    });
  }
  setInitial() {
    if (!this.selectedTab) {
      const initialTab = this.enabledTabs.find((tab) => {
        return tab.defaultSelected === true;
      });
      this.setSelectedTab(initialTab ?? this.enabledTabs[0]);
    }
    this.computeTransitionBackgroundSize();
  }
  /** Sets the activated tab */
  setActiveTab(tab) {
    if (this.activeTab === tab) {
      return;
    }
    if (this.activeTab) {
      this.activeTab.activated = false;
    }
    this.activeTab = tab;
    this.activeTab.activated = true;
  }
  /** Sets the selected tab, meaning the tab's panel will also show. Separate from `setActiveTab()` to allow for manual activation */
  setSelectedTab(tab) {
    if (this.selectedTab === tab) {
      return;
    }
    if (this.selectedTab) {
      this.selectedTab.removeAttribute("selected");
      const panel2 = this.panels.find((panel3) => {
        return this.selectedTab.panel === panel3.name;
      });
      if (panel2) {
        panel2.selected = false;
      }
    }
    this.selectedTab = tab;
    this.selectedTab.selected = true;
    this.setActiveTab(this.selectedTab);
    const panel = this.panels.find((panel2) => {
      return tab.panel === panel2.name;
    });
    if (panel) {
      panel.selected = true;
    }
  }
  setScrollLeft(scrollLeft) {
    this.scrollLeft = scrollLeft;
  }
  setIsScrollable() {
    this.isScrollable = this.tabList.scrollWidth > this.tabList.clientWidth;
  }
  setNextVisible() {
    if (this.isScrollable && this.tabList.scrollLeft + this.tabList.clientWidth + 16 < this.tabList.scrollWidth) {
      this.nextVisible = true;
    } else {
      this.nextVisible = false;
    }
  }
  setPreviousVisible() {
    if (this.isScrollable && this.tabList.scrollLeft > 0) {
      this.previousVisible = true;
    } else {
      this.previousVisible = false;
    }
  }
  /** Computes and sets the size of the selected item background */
  computeTransitionBackgroundSize() {
    if (!this.selectedTab) {
      return;
    }
    setTimeout(() => {
      const rect = this.selectedTab.getBoundingClientRect();
      this.tabList.style.setProperty("--background-opacity", "1");
      this.tabList.style.setProperty("--background-width", rect.width + "px");
      this.tabList.style.setProperty("--background-height", rect.height + "px");
      this.tabList.style.setProperty(
        "--background-translate",
        `${this.selectedTab.offsetLeft}px, 0`
      );
    });
  }
  handleClick(event) {
    const target = event.target;
    const tab = target.closest("mte-tab");
    if (tab) {
      this.setSelectedTab(tab);
      this.computeTransitionBackgroundSize();
      this.tabList.classList.add("selected");
    }
  }
  handleKeyDown(event) {
    const target = event.target;
    const tab = target.closest("mte-tab");
    if (!tab) {
      return;
    }
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      this.removeTransition();
    }
    let nextActiveIndex = null;
    if (event.key === "ArrowLeft") {
      const activeTabIndex = this.enabledTabs.findIndex((tab2) => {
        return tab2 === this.activeTab;
      });
      nextActiveIndex = (this.enabledTabs.length + activeTabIndex - 1) % this.enabledTabs.length;
    }
    if (event.key === "ArrowRight") {
      const activeTabIndex = this.enabledTabs.findIndex((tab2) => {
        return tab2 === this.activeTab;
      });
      nextActiveIndex = (activeTabIndex + 1) % this.enabledTabs.length;
    }
    if (event.key === "Home") {
      nextActiveIndex = 0;
    }
    if (event.key === "End") {
      nextActiveIndex = this.enabledTabs.length - 1;
    }
    if (nextActiveIndex !== null) {
      if (this.activation === "manual") {
        this.setActiveTab(this.enabledTabs[nextActiveIndex]);
      } else if (this.activation === "automatic") {
        this.setSelectedTab(this.enabledTabs[nextActiveIndex]);
      }
      this.activeTab.focus();
    }
    this.computeTransitionBackgroundSize();
  }
  handleNextScrollClick() {
    const averageTabWidth = Math.round(this.tabList.scrollWidth / this.tabs.length);
    this.tabList.scrollLeft += averageTabWidth * 1.5;
    this.setScrollLeft(this.tabList.scrollLeft);
  }
  handlePreviousScrollClick() {
    const averageTabWidth = Math.round(this.tabList.scrollWidth / this.tabs.length);
    this.tabList.scrollLeft -= averageTabWidth * 1.5;
    this.setScrollLeft(this.tabList.scrollLeft);
  }
  handleScroll() {
    let timeoutId = null;
    return () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        this.setScrollLeft(this.tabList.scrollLeft);
        timeoutId = null;
      }, 100);
    };
  }
  handleResize() {
    this.setIsScrollable();
    this.computeTransitionBackgroundSize();
    if (this.isScrollable) {
      this.setNextVisible();
      this.setPreviousVisible();
    }
  }
  render() {
    return html`${this.instanceStyles}<div @click="${this.handleClick}" @keydown="${this.handleKeyDown}"><div class="container"><div class="button-container left"><button tabindex="-1" aria-hidden="true" @click="${this.handlePreviousScrollClick}" type="button" class="scroll-indicator left"><mte-icon name="arrow-left"></mte-icon></button></div><div class="tab-list" role="tablist" @scroll="${this.handleScroll()}"><slot name="nav"></slot></div><slot name="new"></slot><span class="indicator"></span><div class="button-container right"><button tabindex="-1" aria-hidden="true" type="button" @click="${this.handleNextScrollClick}" class="scroll-indicator right"><mte-icon name="arrow-right"></mte-icon></button></div></div><div class="tab-panels"><slot></slot></div></div>`;
  }
};
MteTabs.styles = [styles2, styles3];
__decorateClass([
  state()
], MteTabs.prototype, "scrollLeft", 2);
__decorateClass([
  property({ reflect: true })
], MteTabs.prototype, "activation", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteTabs.prototype, "withFullWidth", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteTabs.prototype, "withInlineBorder", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteTabs.prototype, "withEnclosedPanels", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteTabs.prototype, "nextVisible", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteTabs.prototype, "previousVisible", 2);
__decorateClass([
  queryAssignedElements({ slot: "nav" })
], MteTabs.prototype, "tabs", 2);
__decorateClass([
  queryAssignedElements()
], MteTabs.prototype, "panels", 2);
__decorateClass([
  query(".tab-list")
], MteTabs.prototype, "tabList", 2);
MteTabs = __decorateClass([
  defineElement("mte-tabs")
], MteTabs);

// src/atomic/tabs/tab.element.ts
import { html as html2 } from "lit";
import { property as property2 } from "lit/decorators.js";

// src/atomic/tabs/tab.styles.ts
import { css as css2 } from "lit";
var styles4 = css2`:host{--border-color:var(--mte-border-2);--border-radius:var(--mte-border-radius-sm);--focus-radius:var(--mte-border-radius-sm);--background:transparent;--gap:var(--mte-space-sm);--padding-x:var(--mte-space-md);--padding-y:var(--mte-space-sm);align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--background);border:0;border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);cursor:pointer;display:inline-flex;font-family:inherit;font-size:100%;font-weight:inherit;justify-content:center;line-height:normal;outline:none!important;padding:var(--padding-y) var(--padding-x);position:relative;text-align:center;white-space:nowrap}.content{align-items:center;display:flex;gap:var(--gap);justify-content:space-between}:host(:focus-visible:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--focus-radius);border-top-right-radius:var(--focus-radius);box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;inset:1px;pointer-events:none;position:absolute;z-index:9}:host(:hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a))}:host(:active),:host([activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a))}:host([disabled]){cursor:not-allowed;--background:var(--mte-disabled-1)}.indicator{background-color:var(--border-color);bottom:-3px;display:inline-block;height:3px;left:0;position:absolute;width:100%;z-index:1}:host([selected]){font-weight:var(--mte-font-weight-bold)}:host([selected]:hover){--background:transparent}:host([disabled]){--border-color:var(--mte-disabled-3)}`;

// src/atomic/tabs/tab.element.ts
var nextUniqueId = 0;
var MteTab = class extends ButtonMixin(MteElement) {
  constructor() {
    super(...arguments);
    this.selected = false;
    this.activated = false;
    this.defaultSelected = false;
    this.role = "tab";
    this.id = `mte-tab--${nextUniqueId++}`;
  }
  show() {
    this._onShow.emit();
  }
  hide() {
    this._onHide.emit();
  }
  handleSelectedChanged() {
    if (this.selected) {
      this.ariaSelected = "true";
      this.show();
    } else {
      this.ariaSelected = "false";
      this.hide();
    }
  }
  handleActivatedChanged() {
    this.tabIndex = this.activated ? 0 : -1;
  }
  render() {
    return this.renderButtonTemplate(
      html2`<div class="content"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div><span class="indicator"></span>`
    );
  }
};
MteTab.styles = [styles2, styles, styles4];
__decorateClass([
  property2({ reflect: true })
], MteTab.prototype, "panel", 2);
__decorateClass([
  property2({ type: Boolean, reflect: true })
], MteTab.prototype, "selected", 2);
__decorateClass([
  property2({ type: Boolean, reflect: true })
], MteTab.prototype, "activated", 2);
__decorateClass([
  property2({ type: Boolean })
], MteTab.prototype, "defaultSelected", 2);
__decorateClass([
  property2({ reflect: true, attribute: "aria-selected" })
], MteTab.prototype, "ariaSelected", 2);
__decorateClass([
  property2({ reflect: true })
], MteTab.prototype, "role", 2);
__decorateClass([
  property2({ reflect: true, attribute: "aria-controls" })
], MteTab.prototype, "ariaControls", 2);
__decorateClass([
  property2({ reflect: true })
], MteTab.prototype, "id", 2);
__decorateClass([
  eventEmitter()
], MteTab.prototype, "_onShow", 2);
__decorateClass([
  eventEmitter()
], MteTab.prototype, "_onHide", 2);
__decorateClass([
  onUpdate("selected", { on: "both" })
], MteTab.prototype, "handleSelectedChanged", 1);
__decorateClass([
  onUpdate("activated", { on: "both" })
], MteTab.prototype, "handleActivatedChanged", 1);
MteTab = __decorateClass([
  defineElement("mte-tab")
], MteTab);

// src/atomic/tabs/tab-panel.element.ts
import { html as html3 } from "lit";
import { property as property3 } from "lit/decorators.js";

// src/atomic/tabs/tab-panel.styles.ts
import { css as css3 } from "lit";
var styles5 = css3`:host{padding:16px}:host(:not([selected])){display:none}:host([selected]){display:block}`;

// src/atomic/tabs/tab-panel.element.ts
var nextUniqueId2 = 0;
var MteTabPanel = class extends MteContentBase {
  constructor() {
    super(...arguments);
    this.role = "tabpanel";
    this.active = false;
    this.selected = false;
    this.id = `mte-tab-panel--${nextUniqueId2++}`;
  }
  render() {
    return html3`${this.instanceStyles}<slot></slot>`;
  }
};
MteTabPanel.styles = [styles2, styles5];
__decorateClass([
  property3({ reflect: true })
], MteTabPanel.prototype, "name", 2);
__decorateClass([
  property3({ reflect: true })
], MteTabPanel.prototype, "role", 2);
__decorateClass([
  property3({ type: Boolean, reflect: true })
], MteTabPanel.prototype, "active", 2);
__decorateClass([
  property3({ type: Boolean, reflect: true })
], MteTabPanel.prototype, "selected", 2);
__decorateClass([
  property3({ reflect: true, attribute: "aria-labelledby" })
], MteTabPanel.prototype, "ariaLabelledBy", 2);
__decorateClass([
  property3({ reflect: true })
], MteTabPanel.prototype, "id", 2);
MteTabPanel = __decorateClass([
  defineElement("mte-tab-panel")
], MteTabPanel);

// src/atomic/tabs/new-tab-button.element.ts
import { html as html4 } from "lit";
import { property as property4 } from "lit/decorators.js";

// src/atomic/tabs/new-tab-button.styles.ts
import { css as css4 } from "lit";
var styles6 = css4`:host{align-items:center;display:flex;height:100%;justify-content:center;padding:9px 16px;z-index:1}:host(:active){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a))}:host(:focus){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a))}`;

// src/atomic/tabs/new-tab-button.element.ts
var MteNewTabButton = class extends ButtonMixin(MteElement) {
  constructor() {
    super(...arguments);
    this.slot = "new";
  }
  render() {
    return this.renderButtonTemplate(
      html4`<mte-icon name="plus" size="20" aria-label="Add new tab"></mte-icon>`
    );
  }
};
MteNewTabButton.styles = [styles2, styles4, styles6];
__decorateClass([
  property4({ reflect: true })
], MteNewTabButton.prototype, "slot", 2);
MteNewTabButton = __decorateClass([
  defineElement("mte-new-tab-button")
], MteNewTabButton);
export {
  MteNewTabButton,
  MteTab,
  MteTabPanel,
  MteTabs
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90YWJzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGFicy90YWJzLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RhYnMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90YWJzL3RhYi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90YWJzL3RhYi1wYW5lbC5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGFicy90YWItcGFuZWwuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGFicy9uZXctdGFiLWJ1dHRvbi5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGFicy9uZXctdGFiLWJ1dHRvbi5zdHlsZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tYmFja2dyb3VuZDp2YXIoLS1tdGUtc3VyZmFjZS0xKTstLXBhbmVsLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCk7LS10aW1pbmctZm46Y3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTstLWFuaW1hdGlvbi1kdXJhdGlvbjoyMDBtcztkaXNwbGF5OmJsb2NrO2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlfS50YWItbGlzdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO3Njcm9sbC1iZWhhdmlvcjpzbW9vdGg7LW1zLW92ZXJmbG93LXN0eWxlOm5vbmU7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6YXV0bztwYWRkaW5nLWJvdHRvbTozcHg7c2Nyb2xsYmFyLXdpZHRoOm5vbmV9LnRhYi1saXN0Ojotd2Via2l0LXNjcm9sbGJhcntkaXNwbGF5Om5vbmV9LnRhYi1saXN0OmJlZm9yZXtiYWNrZ3JvdW5kOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYSkpO2JvcmRlci1ib3R0b206M3B4IHNvbGlkIHJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtcmdiKSk7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1zbSk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtc20pO2NvbnRlbnQ6XCJcIjtoZWlnaHQ6dmFyKC0tYmFja2dyb3VuZC1oZWlnaHQpO2xlZnQ6MDtvcGFjaXR5OnZhcigtLWJhY2tncm91bmQtb3BhY2l0eSwwKTtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tYmFja2dyb3VuZC10cmFuc2xhdGUsMCwwKSk7d2lkdGg6dmFyKC0tYmFja2dyb3VuZC13aWR0aCk7ei1pbmRleDoyfS50YWItbGlzdC5zZWxlY3RlZDpiZWZvcmV7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gdmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKSB2YXIoLS10aW1pbmctZm4pLHdpZHRoIHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbikgdmFyKC0tdGltaW5nLWZuKSxoZWlnaHQgdmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKSB2YXIoLS10aW1pbmctZm4pfS5pbmRpY2F0b3J7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JvdHRvbTowO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDozcHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTt6LWluZGV4OjB9LmNvbnRhaW5lcnthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlfS5idXR0b24tY29udGFpbmVye2Rpc3BsYXk6bm9uZX06aG9zdChbbmV4dFZpc2libGVdKSAuYnV0dG9uLWNvbnRhaW5lci5yaWdodCw6aG9zdChbcHJldmlvdXNWaXNpYmxlXSkgLmJ1dHRvbi1jb250YWluZXIubGVmdHthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tdGUtc3VyZmFjZS0yKTtkaXNwbGF5OmZsZXg7aGVpZ2h0OjEwMCU7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDozMnB4O3otaW5kZXg6Mn06aG9zdChbbmV4dFZpc2libGVdKSAuc2Nyb2xsLWluZGljYXRvci5yaWdodCw6aG9zdChbcHJldmlvdXNWaXNpYmxlXSkgLnNjcm9sbC1pbmRpY2F0b3IubGVmdHthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYmFja2dyb3VuZCk7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czo1MCU7Y29sb3I6dmFyKC0tbXRlLWluay0yKTtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXg7aGVpZ2h0OjMycHg7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDozMnB4fTpob3N0KFtuZXh0VmlzaWJsZV0pIC5idXR0b24tY29udGFpbmVyLnJpZ2h0e2JvdHRvbTowO3JpZ2h0OjA7dG9wOjB9Omhvc3QoW3ByZXZpb3VzVmlzaWJsZV0pIC5idXR0b24tY29udGFpbmVyLmxlZnR7Ym90dG9tOjA7bGVmdDowO3RvcDowfTpob3N0KFtuZXh0VmlzaWJsZV0pIC5idXR0b24tY29udGFpbmVyLnJpZ2h0OmJlZm9yZXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LHZhcigtLW10ZS1zdXJmYWNlLTIpLHRyYW5zcGFyZW50KTtjb250ZW50OlwiXCI7aGVpZ2h0OjEwMCU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MzJweDt3aWR0aDozMnB4fTpob3N0KFtwcmV2aW91c1Zpc2libGVdKSAuYnV0dG9uLWNvbnRhaW5lci5sZWZ0OmFmdGVye2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQsdHJhbnNwYXJlbnQsdmFyKC0tbXRlLXN1cmZhY2UtMikpO2NvbnRlbnQ6XCJcIjtoZWlnaHQ6MTAwJTtsZWZ0OjMycHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MzJweH06aG9zdChbd2l0aEVuY2xvc2VkUGFuZWxzXSkgLmJ1dHRvbi1jb250YWluZXIubGVmdCw6aG9zdChbd2l0aEVuY2xvc2VkUGFuZWxzXSkgLmJ1dHRvbi1jb250YWluZXIucmlnaHR7aGVpZ2h0OjM4cHg7ei1pbmRleDowfTpob3N0KFt3aXRoRW5jbG9zZWRQYW5lbHNdKSAuYnV0dG9uLWNvbnRhaW5lci5sZWZ0e3otaW5kZXg6MX0uc2Nyb2xsLWluZGljYXRvcjpob3ZlcnstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMS1ob3Zlci1hKSl9Omhvc3QoW3dpdGhJbmxpbmVCb3JkZXJdKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudH06aG9zdChbd2l0aEZ1bGxXaWR0aF0pIC50YWItbGlzdC5zZWxlY3RlZDpiZWZvcmV7LS1hbmltYXRpb24tZHVyYXRpb246MzAwbXN9Omhvc3QoW3dpdGhGdWxsV2lkdGhdKSAudGFiLWxpc3QsOmhvc3QoW3dpdGhGdWxsV2lkdGhdKSA6OnNsb3R0ZWQobXRlLXRhYil7d2lkdGg6MTAwJX0udGFiLXBhbmVsc3stLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItYm90dG9tOjJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1sZWZ0OjJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1yaWdodDoycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKX06aG9zdChbcmFkaXVzPW5vbmVdKXstLXBhbmVsLXJhZGl1czowcHh9Omhvc3QoW3JhZGl1cz1zbV0pey0tcGFuZWwtcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXNtKX06aG9zdChbcmFkaXVzPW1kXSl7LS1wYW5lbC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpfTpob3N0KFtyYWRpdXM9bGddKXstLXBhbmVsLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1sZyl9Omhvc3QoW3dpdGhGdWxsV2lkdGhdKSA6OnNsb3R0ZWQobXRlLXRhYil7d2lkdGg6MTAwJX06aG9zdChbd2l0aEVuY2xvc2VkUGFuZWxzXSk6aG9zdChbd2l0aElubGluZUJvcmRlcl0pey0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMil9Omhvc3QoW3dpdGhFbmNsb3NlZFBhbmVsc10pIC50YWItcGFuZWxzey0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMik7Ym9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLXBhbmVsLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tcGFuZWwtcmFkaXVzKTtib3JkZXItbGVmdDoycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcil9QG1lZGlhIHNjcmVlbiBhbmQgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKXsudGFiLWxpc3Quc2VsZWN0ZWQ6YmVmb3Jle3RyYW5zaXRpb246bm9uZX19YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMik7LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXNtKTstLWZvY3VzLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1zbSk7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tZ2FwOnZhcigtLW10ZS1zcGFjZS1zbSk7LS1wYWRkaW5nLXg6dmFyKC0tbXRlLXNwYWNlLW1kKTstLXBhZGRpbmcteTp2YXIoLS1tdGUtc3BhY2Utc20pO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1iYWNrZ3JvdW5kKTtib3JkZXI6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWZsZXg7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MTAwJTtmb250LXdlaWdodDppbmhlcml0O2p1c3RpZnktY29udGVudDpjZW50ZXI7bGluZS1oZWlnaHQ6bm9ybWFsO291dGxpbmU6bm9uZSFpbXBvcnRhbnQ7cGFkZGluZzp2YXIoLS1wYWRkaW5nLXkpIHZhcigtLXBhZGRpbmcteCk7cG9zaXRpb246cmVsYXRpdmU7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwfS5jb250ZW50e2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7Z2FwOnZhcigtLWdhcCk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Omhvc3QoOmZvY3VzLXZpc2libGU6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpKTpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCByZ2IodmFyKC0tbXRlLWZvY3VzLXJnYikpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tZm9jdXMtcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1mb2N1cy1yYWRpdXMpO2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7aW5zZXQ6MXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo5fTpob3N0KDpob3Zlcil7LS1iYWNrZ3JvdW5kOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYSkpfTpob3N0KDphY3RpdmUpLDpob3N0KFthY3RpdmVzdGF0ZV0pey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYSkpfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpub3QtYWxsb3dlZDstLWJhY2tncm91bmQ6dmFyKC0tbXRlLWRpc2FibGVkLTEpfS5pbmRpY2F0b3J7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JvdHRvbTotM3B4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDozcHg7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7ei1pbmRleDoxfTpob3N0KFtzZWxlY3RlZF0pe2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXdlaWdodC1ib2xkKX06aG9zdChbc2VsZWN0ZWRdOmhvdmVyKXstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnR9Omhvc3QoW2Rpc2FibGVkXSl7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTMpfWA7IiwgImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBiYXNlU3R5bGVzLCBNdGVDb250ZW50QmFzZSwgZGVmaW5lRWxlbWVudCB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi90YWItcGFuZWwuc3R5bGVzJztcblxubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbi8qKlxuICogQHNsb3QgLSBEZWZhdWx0IHNsb3R0ZWQgY29udGVudFxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLXRhYi1wYW5lbCcpXG5leHBvcnQgY2xhc3MgTXRlVGFiUGFuZWwgZXh0ZW5kcyBNdGVDb250ZW50QmFzZSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbYmFzZVN0eWxlcywgc3R5bGVzXTtcblxuICAvKiogRGVmaW5lIGFzc29jaWF0ZWQgdGFiLCBzaG91bGQgbWF0Y2ggTXRlVGFiJ3MgYHBhbmVsYCBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIG5hbWU6IHN0cmluZztcblxuICAvKiogU3BlY2lmeSByb2xlIG9mIE10ZVRhYiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHJvbGUgPSAndGFicGFuZWwnO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgYWN0aXZlID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBzZWxlY3RlZCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGF0dHJpYnV0ZTogJ2FyaWEtbGFiZWxsZWRieScgfSkgYXJpYUxhYmVsbGVkQnk6IHN0cmluZztcblxuICAvKiogU3BlY2lmeSBhbiBpZCB0byBiZSBhc3NvY2lhdGVkIHdpdGggdGhlIHRhYiBwYW5lbC4gUmVxdWlyZWQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBpZCA9IGBtdGUtdGFiLXBhbmVsLS0ke25leHRVbmlxdWVJZCsrfWA7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYCR7dGhpcy5pbnN0YW5jZVN0eWxlc308c2xvdD48L3Nsb3Q+YDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdtdGUtdGFiLXBhbmVsJzogTXRlVGFiUGFuZWw7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7cGFkZGluZzoxNnB4fTpob3N0KDpub3QoW3NlbGVjdGVkXSkpe2Rpc3BsYXk6bm9uZX06aG9zdChbc2VsZWN0ZWRdKXtkaXNwbGF5OmJsb2NrfWA7IiwgImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBNdGVFbGVtZW50LCBNdGVFbGVtZW50UGFydHMsIGJhc2VTdHlsZXMsIGRlZmluZUVsZW1lbnQsIEJ1dHRvbk1peGluIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBzdHlsZXMgYXMgdGFiU3R5bGVzIH0gZnJvbSAnLi90YWIuc3R5bGVzJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vbmV3LXRhYi1idXR0b24uc3R5bGVzJztcbmltcG9ydCAnLi4vaWNvbic7XG5pbXBvcnQgJy4uL2J1dHRvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXRlTmV3VGFiQnV0dG9uUGFydHMgZXh0ZW5kcyBNdGVFbGVtZW50UGFydHMge31cblxuQGRlZmluZUVsZW1lbnQoJ210ZS1uZXctdGFiLWJ1dHRvbicpXG5leHBvcnQgY2xhc3MgTXRlTmV3VGFiQnV0dG9uIGV4dGVuZHMgQnV0dG9uTWl4aW4oTXRlRWxlbWVudCkge1xuICBzdGF0aWMgc3R5bGVzID0gW2Jhc2VTdHlsZXMsIHRhYlN0eWxlcywgc3R5bGVzXTtcblxuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHNsb3QgPSAnbmV3JztcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyQnV0dG9uVGVtcGxhdGUoXG4gICAgICBodG1sYDxtdGUtaWNvbiBuYW1lPVwicGx1c1wiIHNpemU9XCIyMFwiIGFyaWEtbGFiZWw9XCJBZGQgbmV3IHRhYlwiPjwvbXRlLWljb24+YFxuICAgICk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLW5ldy10YWItYnV0dG9uJzogTXRlTmV3VGFiQnV0dG9uO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7aGVpZ2h0OjEwMCU7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOjlweCAxNnB4O3otaW5kZXg6MX06aG9zdCg6YWN0aXZlKXstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWEpKX06aG9zdCg6Zm9jdXMpey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWEpKX1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsWUFBWTtBQUNyQixTQUFTLFVBQVUsdUJBQXVCLE9BQU8sYUFBYTtBQVM5RCxTQUFTLHdCQUF3Qjs7O0FDVmpDLFNBQVMsV0FBVztBQUFhLElBQU1BLFVBQVM7OztBRHFCekMsSUFBTSxVQUFOLGNBQXNCLFdBQVc7RUFBakM7O0FBdUJ3QixzQkFBcUM7QUFLdEIseUJBQWdCO0FBS2hCLDRCQUFtQjtBQUtuQiw4QkFBcUI7QUFLckIsdUJBQWM7QUFLZCwyQkFBa0I7QUFVOUQsMEJBQWlCLElBQUksZUFBZSxNQUFNLEVBQUUsZ0JB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LE9BQU07QUFHTjtBQUFBLEVBQTVCQyxVQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFBQSxHQUpoQixZQUlrQjtBQUdBO0FBQUEsRUFBNUJBLFVBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztBQUFBLEdBUGhCLFlBT2tCO0FBRWU7QUFBQSxFQUEzQ0EsVUFBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztBQUFBLEdBVC9CLFlBU2lDO0FBRUE7QUFBQSxFQUEzQ0EsVUFBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztBQUFBLEdBWC9CLFlBV2lDO0FBRWU7QUFBQSxFQUExREEsVUFBUyxFQUFFLFNBQVMsTUFBTSxXQUFXLGtCQUFrQixDQUFDO0FBQUEsR0FiOUMsWUFhZ0Q7QUFHOUI7QUFBQSxFQUE1QkEsVUFBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0FBQUEsR0FoQmhCLFlBZ0JrQjtBQWhCbEIsY0FBTjtBQUFBLEVBRE4sY0FBYyxlQUFlO0FBQUEsR0FDakI7OztBRVhiLFNBQVMsUUFBQUMsYUFBWTtBQUNyQixTQUFTLFlBQUFDLGlCQUFnQjs7O0FDRHpCLFNBQVMsT0FBQUMsWUFBVztBQUFhLElBQU1DLFVBQVNEOzs7QURXekMsSUFBTSxrQkFBTixjQUE4QixZQUFZLFVBQVUsRUFBRTtBQUFBLEVBQXREO0FBQUE7QUFHd0IsZ0JBQU87QUFBQTtBQUFBLEVBRXBDLFNBQVM7QUFDUCxXQUFPLEtBQUs7QUFBQSxNQUNWRTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFWYSxnQkFDSixTQUFTLENBQUNDLFNBQVlBLFNBQVdBLE9BQU07QUFFakI7QUFBQSxFQUE1QkMsVUFBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0FBQUEsR0FIaEIsZ0JBR2tCO0FBSGxCLGtCQUFOO0FBQUEsRUFETixjQUFjLG9CQUFvQjtBQUFBLEdBQ3RCOyIsCiAgIm5hbWVzIjogWyJzdHlsZXMiLCAicGFuZWwiLCAidGFiIiwgInN0eWxlcyIsICJodG1sIiwgInByb3BlcnR5IiwgImNzcyIsICJzdHlsZXMiLCAiaHRtbCIsICJzdHlsZXMiLCAicHJvcGVydHkiLCAiaHRtbCIsICJwcm9wZXJ0eSIsICJjc3MiLCAic3R5bGVzIiwgIm5leHRVbmlxdWVJZCIsICJodG1sIiwgInN0eWxlcyIsICJwcm9wZXJ0eSIsICJodG1sIiwgInByb3BlcnR5IiwgImNzcyIsICJzdHlsZXMiLCAiaHRtbCIsICJzdHlsZXMiLCAicHJvcGVydHkiXQp9Cg==
