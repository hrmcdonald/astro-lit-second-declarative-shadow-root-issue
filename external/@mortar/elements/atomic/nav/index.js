import "../../chunks/chunk.YCYD3ABU.js";
import {
  styles as styles5,
  styles2 as styles6,
  styles3 as styles7
} from "../../chunks/chunk.CLITXIOY.js";
import {
  styles as styles4
} from "../../chunks/chunk.WF4M7EWL.js";
import "../../chunks/chunk.HBUKDWVJ.js";
import "../../chunks/chunk.4XRLQ45E.js";
import "../../chunks/chunk.AGXDFGNI.js";
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
import "../../chunks/chunk.PACEABGF.js";
import {
  AutoActiveLinkMixin,
  DetectChildCloseController,
  InverseMixin,
  MteContentBase,
  MteElement,
  OverlayMixin,
  PresetMixinFactory,
  ResponsiveValueConverter,
  SlotController,
  SlotObserverMixin,
  StylePartsMixin,
  WaitForFrameworkMixin,
  __decorateClass,
  computed,
  defineElement,
  eventEmitter,
  hebLogoInverseSvgContents,
  hebLogoSvgContents,
  hebLogoWhiteCopyrightSvgContents,
  isFocusTrapActive,
  isSsr,
  mapNumberToPx,
  mapPxToNumber,
  onUpdate,
  presetProperty,
  signal,
  styles2 as styles,
  styles4 as styles2,
  styles7 as styles3
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/nav/nav-root.element.ts
import { html } from "lit";

// src/atomic/nav/nav-root.styles.ts
import { css } from "lit";
var styles8 = css`:host{--background:inherit;--sidebar-size:var(--mte-nav-sidebar-size,0px);--sidebar-position-right:0;--sidebar-position-bottom:0;--sidebar-position-left:0;--sidebar-position-top:0;--sidebar-width:100%;--sidebar-height:100%;--sidebar-visibility:hidden;--sidebar-transition-time:200ms;--sidebar-transition-fn:cubic-bezier(0.25,0.8,0.25,1);--sidebar-aside-container-padding:var(--sidebar-size);--nav-z-index:1100;background:var(--background);display:block;min-height:100vh;min-width:100%;width:100%}:host([beforeInit]){--sidebar-transition-time:0ms}:host([appliedpreset=cx]),:host([appliedpreset=rx]){--background:var(--mte-surface-2)}:host(:not([withoutStickyHeader])) .header{position:sticky;top:0;z-index:var(--nav-z-index)}:host([sidebarPosition=left]){--sidebar-position-right:unset;--sidebar-width:var(--sidebar-size);--sidebar-transform:translate(-100%);--sidebar-border-right:1px solid}:host([sidebarPosition=right]){--sidebar-position-left:unset;--sidebar-width:var(--sidebar-size);--sidebar-transform:translate(100%);--sidebar-border-left:1px solid}:host([sidebarOpened]){--sidebar-transform:transform(0,0);--sidebar-visibility:visible;--sidebar-visibility-time:0ms}.container{display:grid;grid-template-columns:100%;grid-template-rows:auto 1fr auto;min-height:100vh;min-width:0;position:relative;transition:padding-left var(--sidebar-transition-time) var(--sidebar-transition-fn),width var(--sidebar-transition-time) var(--sidebar-transition-fn);width:100%;will-change:padding-left,width}.container,.content{transform:translateZ(0)}:host([sidebarPosition=left][sidebarOpened]:not([sidebarModeOver])) .container{padding-left:var(--sidebar-size,0);width:calc(100% - min(var(--sidebar-size, 0), 100%, 100vw))}:host([beforeInit]) .container{transition:none!important}`;

// src/atomic/nav/nav-root.element.ts
import { property, query, state } from "lit/decorators.js";
import { config as config2, selectorFactory } from "@mortar/styles";

// src/atomic/nav/nav-utilities.ts
import { config } from "@mortar/styles";
var navState = {
  sidebar: signal(),
  header: signal(),
  subheader: signal(),
  sidebarSize: signal(350),
  activeBreakpoint: signal(null),
  inverse: signal(null),
  preferSidebar: signal(null),
  withinMobileBreakpoint: signal(false)
};
var collections = {
  sidebar: {
    active: null,
    registered: /* @__PURE__ */ new Map()
  },
  header: {
    active: null,
    registered: /* @__PURE__ */ new Map()
  },
  subheader: {
    active: null,
    registered: /* @__PURE__ */ new Map()
  }
};
var deleteNavElementState = (collectionName, element) => {
  const collection = collections[collectionName];
  collection.registered.delete(element);
  if (collection.active === element) {
    const newActive = collection.registered.keys().next().value;
    collection.active = newActive;
    navState[collectionName].set(collection.registered.get(newActive));
  }
};
var updateNavElementState = (collectionName, element, state5) => {
  const collection = collections[collectionName];
  if (!collection.active) {
    collection.active = element;
  }
  if (collection.active === element) {
    const currentState = navState[collectionName].get();
    const nestedObjectValueChanged = Object.keys(state5).some(
      (key) => currentState?.[key] !== state5?.[key]
    );
    if (nestedObjectValueChanged) {
      navState[collectionName].set(state5);
    }
  }
  collection.registered.set(element, state5);
};
var getCurrentBreakpoint = (w) => {
  const width = w.innerWidth;
  const sm = mapPxToNumber(config.grid.breakpoint.sm);
  const md = mapPxToNumber(config.grid.breakpoint.md);
  const lg = mapPxToNumber(config.grid.breakpoint.lg);
  const xl = mapPxToNumber(config.grid.breakpoint.xl);
  const xxl = mapPxToNumber(config.grid.breakpoint.xxl);
  let breakpoint = "xs";
  if (width >= sm && width < md) {
    breakpoint = "sm";
  } else if (width >= md && width < lg) {
    breakpoint = "md";
  } else if (width >= lg && width < xl) {
    breakpoint = "lg";
  } else if (width >= xl && width < xxl) {
    breakpoint = "xl";
  } else if (width >= xxl) {
    breakpoint = "xxl";
  }
  return breakpoint;
};
var belowMobileBreakpoint = (activeBreakpoint, mobileBreakpoint) => {
  let breakpoints = ["xs", "sm", "md", "lg", "xl", "xxl"];
  breakpoints = breakpoints.slice(0, breakpoints.indexOf(mobileBreakpoint));
  return breakpoints.includes(activeBreakpoint);
};

// src/core/controllers/signal-state.controller.ts
var SignalStateController = class {
  constructor(host, signals, callback, options) {
    this.host = host;
    this.signals = signals;
    this.callback = callback;
    this.options = options;
    this.options = { waitUntilFirstUpdate: true, on: "client", ...this.options };
    this.host.addController(this);
    if (this.options.on !== "client" && isSsr()) {
      computed(this.signals, (r) => r).subscribe((r) => {
        this.callback?.(r);
      })();
    }
  }
  hostConnected() {
    if (this.options.waitUntilFirstUpdate) {
      this.host.updateComplete.then(() => {
        this.initSub();
      });
    } else {
      this.initSub();
    }
  }
  initSub() {
    this.host.subs.push(
      computed(this.signals, (r) => r).subscribe((r) => {
        this.callback?.(r);
        this.host.requestUpdate();
      })
    );
  }
};

// src/atomic/nav/nav-root.element.ts
import { ResizeController } from "@lit-labs/observers/resize-controller.js";
var MteNavRoot = class extends WaitForFrameworkMixin(
  PresetMixinFactory("MteNavRoot", {
    reflectAppliedPreset: true
  })(StylePartsMixin(MteElement))
) {
  constructor() {
    super();
    this.mobileBreakpoint = "lg";
    this.sidebarSize = 350;
    this.withoutStickyHeader = false;
    this.sidebarPosition = "left";
    this.sidebarOpened = false;
    this.sidebarModeOver = false;
    this.beforeInit = true;
    this.passive = false;
    this.firstUpdateComplete = false;
    this.signalStateController = new SignalStateController(
      this,
      [navState.sidebar],
      ([sidebar]) => {
        if (sidebar) {
          this.sidebarPosition = sidebar.position;
          this.sidebarOpened = sidebar.opened;
          this.sidebarModeOver = sidebar.overlayMode === "over";
        }
        this.updateHtmlScrollPaddingTop();
      },
      { waitUntilFirstUpdate: false }
    );
    this.handleBreakpointChange = () => {
      const breakpoint = getCurrentBreakpoint(globalThis.window);
      if (breakpoint !== this.previousBreakpointValue) {
        this.previousBreakpointValue = breakpoint;
        if (breakpoint) {
          const withinTransition = belowMobileBreakpoint(breakpoint, this.mobileBreakpoint);
          if (!this.passive) {
            navState.activeBreakpoint.set(breakpoint);
            navState.withinMobileBreakpoint.set(withinTransition);
          }
        }
      }
    };
    if (isSsr()) {
      this.handleSsrChange();
    }
  }
  handleStateChange() {
    if (!this.passive) {
      navState.inverse.set(this.inverse);
      navState.preferSidebar.set(this.preferSidebar);
      navState.sidebarSize.set(this.sidebarSize);
    }
  }
  handleSsrChange() {
    this.sidebarOpened = this.preferSidebar !== "closed";
  }
  connectedCallback() {
    super.connectedCallback();
    this.observer = new ResizeController(this, {
      callback: this.handleBreakpointChange
    });
    this.updateComplete.then(() => {
      this.firstUpdateComplete = true;
      this.observer.observe(this);
    });
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    setTimeout(() => {
      this.beforeInit = false;
    });
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (isSsr() && (this.beforeInit || changedProps.has("sidebarOpened") || changedProps.has("sidebarSize") || changedProps.has("mobileBreakpoint"))) {
      this.setInstanceStyle("nav-root", selectorFactory(this.instanceStyleSelectorRoot), {
        xs: { "--sidebar-size": "0px" },
        [this.mobileBreakpoint]: {
          "--sidebar-size": this.preferSidebar !== "closed" ? mapNumberToPx(this.sidebarSize) : "0px"
        }
      });
    }
    if (!isSsr() && this.firstUpdateComplete) {
      this.setInstanceStyle("nav-root", selectorFactory(this.instanceStyleSelectorRoot), {
        "--sidebar-size": mapNumberToPx(this.sidebarSize)
      });
    }
  }
  /** Adds global scroll top padding to the document when the header is sticky */
  updateHtmlScrollPaddingTop() {
    if (!isSsr() && document?.body?.parentElement && this.headerElement) {
      if (!this.withoutStickyHeader) {
        document.body.parentElement.style.scrollPaddingTop = `calc(${this.headerElement.offsetHeight}px + ${config2.space.xl})`;
      } else {
        document.body.parentElement.style.scrollPaddingTop = `${config2.space.xl}`;
      }
    }
  }
  render() {
    return html`${this.instanceStyles} ${this.sidebarPosition !== "right" ? html`<slot name="sidebar"></slot>` : null}<div class="container" part="headerContainer"><div class="header" part="header"><slot name="header"></slot><slot name="sub-header"></slot></div><div class="content" part="content"><slot></slot></div><div class="footer" part="footer"><slot name="footer"></slot></div></div>${this.sidebarPosition === "right" ? html`<slot name="sidebar"></slot>` : null}`;
  }
};
MteNavRoot.styles = [styles3, styles8];
__decorateClass([
  presetProperty({ reflect: true })
], MteNavRoot.prototype, "mobileBreakpoint", 2);
__decorateClass([
  presetProperty({ reflect: true })
], MteNavRoot.prototype, "inverse", 2);
__decorateClass([
  presetProperty({ reflect: true })
], MteNavRoot.prototype, "preferSidebar", 2);
__decorateClass([
  property({ reflect: true })
], MteNavRoot.prototype, "sidebarSize", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteNavRoot.prototype, "withoutStickyHeader", 2);
__decorateClass([
  property({ reflect: true })
], MteNavRoot.prototype, "sidebarPosition", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteNavRoot.prototype, "sidebarOpened", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteNavRoot.prototype, "sidebarModeOver", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteNavRoot.prototype, "beforeInit", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteNavRoot.prototype, "passive", 2);
__decorateClass([
  state()
], MteNavRoot.prototype, "firstUpdateComplete", 2);
__decorateClass([
  query(".header")
], MteNavRoot.prototype, "headerElement", 2);
__decorateClass([
  onUpdate(["mobileBreakpoint", "inverse", "preferSidebar", "withoutStickyHeader", "sidebarSize"])
], MteNavRoot.prototype, "handleStateChange", 1);
__decorateClass([
  onUpdate(["preferSidebar"], { on: "ssr" })
], MteNavRoot.prototype, "handleSsrChange", 1);
MteNavRoot = __decorateClass([
  defineElement("mte-nav-root")
], MteNavRoot);

// src/atomic/nav/nav-header.element.ts
import { classMap } from "lit/directives/class-map.js";
import { html as html3 } from "lit";
import { property as property3, query as query3, queryAssignedElements, state as state2 } from "lit/decorators.js";

// src/atomic/nav/nav-header.styles.ts
import { css as css2 } from "lit";
var styles9 = css2`:host{--background:var(--mte-surface-2);--border-color:var(--mte-border-1);--border:solid 1px var(--border-color);--color:var(--mte-ink-1);--padding-x:calc(var(--mte-space-sm) + var(--mte-space-xs));--padding-y:calc(var(--mte-space-sm) + var(--mte-space-xs));--header-padding-y:var(--padding-y);--gap:var(--mte-space-md);--transition-time:200ms --transition-fn:cubic-bezier(0.4,0,0.2,1);align-items:center;background:var(--background);border-bottom:var(--border);color:var(--color);display:flex;flex-direction:row;justify-content:center;position:relative;width:100%}.overflow-container{align-items:inherit;display:inherit;flex-direction:inherit;justify-content:inherit;overflow-x:auto;padding:var(--padding-y) var(--padding-x);width:inherit}:host:before{background:var(--background);border-bottom:var(--border);bottom:-1px;content:"";left:calc(var(--sidebar-size)*-1);position:absolute;top:0;width:var(--sidebar-size)}:host([beforeInit]){--transition-time:0ms}:host([appliedpreset=cx]:not([inverse])){--background:rgb(var(--mte-core-primary-base-rgb));--color:rgb(var(--mte-core-primary-base-c-rgb));--border:none;--button-background:rgb(var(--mte-core-primary-dark-rgb));--button-color:rgb(var(--mte-core-primary-dark-c-rgb))}:host([appliedpreset=rx]:not([inverse])){--background:rgb(var(--mte-core-primary-dark-rgb));--color:rgb(var(--mte-core-primary-dark-c-rgb));--border:none;--button-background:rgb(var(--mte-core-primary-dark-rgb));--button-color:rgb(var(--mte-core-primary-dark-c-rgb))}.menu{align-items:center;display:flex;flex-grow:0;flex-shrink:0;justify-content:center;margin-right:max(calc(var(--gap)/2),var(--mte-space-xs));max-width:100px;opacity:1;order:1;transition:max-width var(--transition-time) var(--transition-fn),opacity var(--transition-time) var(--transition-fn),margin-right var(--transition-time) var(--transition-fn),visibility var(--transition-time) var(--transition-fn);visibility:visible;will-change:max-width,opacity,margin-right}:host([hideMenuUntilTransition]) .menu{transition:none}:host .menu:not(.visible){display:none;margin-right:0;max-height:0;max-width:0;opacity:0;visibility:hidden}.logo-container{color:inherit;display:inline-flex;flex-grow:0;margin-right:var(--gap);order:2;text-decoration:none}.logo,.name{align-items:center;display:flex;flex-grow:0;justify-content:center}.name{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-body2-font-size);font-weight:var(--mte-font-set-body2-font-weight);font-weight:700;line-height:var(--mte-font-set-body2-line-height);text-decoration:inherit;text-transform:inherit;white-space:nowrap}.name.visible{margin-left:var(--gap)}.end,.start{align-items:center;display:flex;flex-basis:100%;flex-direction:row;gap:var(--gap)}.start{flex-grow:0;justify-content:flex-start;margin-right:var(--gap);order:3}.end{flex-grow:1;justify-content:flex-end;order:4}:host([withCenterLogo]) .logo-container{margin-left:var(--gap);order:3}:host([withCenterLogo]) .start{flex-grow:1;margin-right:0;order:2}.px-logo{height:32px;width:92px}.cx-logo{height:36px;width:104px}.rx-logo{height:36px;width:136px}`;

// src/atomic/nav/container.styles.ts
import { css as css3 } from "lit";
var styles10 = css3`.container{width:100%}.flex{align-items:center;display:flex;flex-direction:row}:host([withContainer]) .grid-container{box-sizing:border-box;--gutter-x:var(--mte-gutter-x,1.5rem);--gutter-y:var(--mte-gutter-y,0);margin-left:auto;margin-right:auto;padding-left:calc(var(--gutter-x)*1);padding-right:calc(var(--gutter-x)*1);width:100%}@media (min-width:480px){:host([withContainer]) .grid-container{max-width:768px}}@media (min-width:768px){:host([withContainer]) .grid-container{max-width:1024px}}@media (min-width:1024px){:host([withContainer]) .grid-container{max-width:1280px}}@media (min-width:1280px){:host([withContainer]) .grid-container{max-width:1440px}}@media (min-width:1536px){:host([withContainer]) .grid-container{max-width:1440px}}`;

// src/atomic/nav/nav-header.element.ts
import { ifDefined as ifDefined2 } from "lit/directives/if-defined.js";

// src/atomic/nav/nav-icon-button.element.ts
import { ifDefined } from "lit/directives/if-defined.js";
import { html as html2 } from "lit";
import { property as property2, query as query2, eventOptions } from "lit/decorators.js";
var MteNavIconButton = class extends PresetMixinFactory("MteNavIconButton", {
  reflectAppliedPreset: true
})(StylePartsMixin(MteElement)) {
  constructor() {
    super(...arguments);
    this.iconLibrary = "_default";
    this.labelPosition = "bottom";
    this.badgeDot = false;
    this.disabled = false;
    this.role = "listitem";
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("label")) {
      if (this.overlayTriggerElement && !this.overlayTriggerElement.overlayElement) {
        this.overlayTriggerElement.overlayElement = this.tooltipElement;
        this.overlayTriggerElement.triggerElement = this;
      }
    }
  }
  handleButtonClick(e) {
    if (this.disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      return false;
    }
    if (this.iref) {
      e.preventDefault();
    }
  }
  /** Proxy focus calls */
  focus(options) {
    this.buttonElement?.focus(options);
  }
  /** Proxy click calls */
  click() {
    this.buttonElement?.click();
  }
  renderButtonTemplate() {
    const href = this.href ?? this.iref;
    const contentsTemplate = html2`<mte-icon name="${ifDefined(this.icon)}" library="${ifDefined(this.iconLibrary)}" part="icon"></mte-icon>`;
    return href ? html2`<a id="anchor" class="button" part="button" href="${href}" target="${ifDefined(this.target)}" download="${ifDefined(this.download)}" ?disabled="${this.disabled}" aria-label="${this.label}" @click="${this.handleButtonClick}">${contentsTemplate}</a>` : html2`<button class="button" part="button" ?disabled="${this.disabled}" aria-label="${this.label}" @click="${this.handleButtonClick}">${contentsTemplate}</button>`;
  }
  render() {
    return html2`${this.instanceStyles} ${this.badge || this.badgeDot ? html2`<mte-badge part="badge" size="sm" ?dot="${this.badgeDot}" value="${this.badge}" color="${ifDefined(this.badgeColor)}" role="${ifDefined(this.badgeRole)}" aria-label="${ifDefined(this.badgeAriaLabel)}">${this.renderButtonTemplate()}</mte-badge>` : this.renderButtonTemplate()} ${this.label ? html2`<mte-overlay-trigger id="trigger"></mte-overlay-trigger><mte-tooltip id="tooltip" position="${this.labelPosition}" asAriaLabel ?disabled="${this.disabled}">${this.label}</mte-tooltip>` : null}`;
  }
};
MteNavIconButton.styles = [styles3, styles6, styles5];
__decorateClass([
  property2({ reflect: true })
], MteNavIconButton.prototype, "icon", 2);
__decorateClass([
  property2({ reflect: true })
], MteNavIconButton.prototype, "iconLibrary", 2);
__decorateClass([
  property2({ reflect: true })
], MteNavIconButton.prototype, "label", 2);
__decorateClass([
  property2({ reflect: true })
], MteNavIconButton.prototype, "labelPosition", 2);
__decorateClass([
  property2({ reflect: true })
], MteNavIconButton.prototype, "href", 2);
__decorateClass([
  property2({ reflect: true })
], MteNavIconButton.prototype, "iref", 2);
__decorateClass([
  property2({ reflect: true })
], MteNavIconButton.prototype, "target", 2);
__decorateClass([
  property2({ reflect: true })
], MteNavIconButton.prototype, "download", 2);
__decorateClass([
  property2({ reflect: true })
], MteNavIconButton.prototype, "badge", 2);
__decorateClass([
  property2({ reflect: true })
], MteNavIconButton.prototype, "badgeColor", 2);
__decorateClass([
  property2()
], MteNavIconButton.prototype, "badgeRole", 2);
__decorateClass([
  property2()
], MteNavIconButton.prototype, "badgeAriaLabel", 2);
__decorateClass([
  property2({ type: Boolean, reflect: true })
], MteNavIconButton.prototype, "badgeDot", 2);
__decorateClass([
  property2({ type: Boolean, reflect: true })
], MteNavIconButton.prototype, "disabled", 2);
__decorateClass([
  property2({ reflect: true })
], MteNavIconButton.prototype, "role", 2);
__decorateClass([
  query2("#anchor")
], MteNavIconButton.prototype, "anchorElement", 2);
__decorateClass([
  query2(".button")
], MteNavIconButton.prototype, "buttonElement", 2);
__decorateClass([
  query2("#tooltip")
], MteNavIconButton.prototype, "tooltipElement", 2);
__decorateClass([
  query2("#trigger")
], MteNavIconButton.prototype, "overlayTriggerElement", 2);
__decorateClass([
  eventOptions({ capture: true })
], MteNavIconButton.prototype, "handleButtonClick", 1);
MteNavIconButton = __decorateClass([
  defineElement("mte-nav-icon-button")
], MteNavIconButton);

// src/atomic/nav/nav-header.element.ts
import { mtrIconMenu } from "@mortar/icons";
MteIconRegistryService.registerIcons([mtrIconMenu]);
var nextUniqueId = 0;
var MteNavHeader = class extends InverseMixin(
  WaitForFrameworkMixin(
    PresetMixinFactory("MteNavHeader", {
      reflectAppliedPreset: true
    })(StylePartsMixin(MteElement))
  )
) {
  constructor() {
    super(...arguments);
    this.internalId = nextUniqueId++;
    this.logoHref = "/";
    this.withContainer = false;
    this.withoutContainer = false;
    this.withCenterLogo = false;
    this.withoutLogoLink = false;
    this.role = "navigation";
    this.ariaLabel = "Primary Navigation";
    this.id = `mte-nav-header--${this.internalId}`;
    this.sidebarModeOver = false;
    this.hideMenuUntilTransition = false;
    this.beforeInit = true;
    this.passive = false;
    this.withinMobileBreakpoint = false;
    // Update local state with global nav state changes
    this.signalStateController = new SignalStateController(
      this,
      [navState.sidebar, navState.inverse, navState.withinMobileBreakpoint],
      ([sidebar, inverse, withinMobileBreakpoint]) => {
        this.inverse = inverse === "header";
        this.withinMobileBreakpoint = withinMobileBreakpoint;
        if (sidebar) {
          this.sidebarModeOver = sidebar.overlayMode === "over";
          this.hideMenuUntilTransition = sidebar.hideUntilTransition;
          this.sidebarOpened = sidebar.opened;
          this.sidebar = sidebar.element;
        }
      }
    );
    this.slotController = new SlotController(this, { updateOnChange: ["name"] });
  }
  handleStateChange() {
    this.updateGlobalState();
  }
  handleLogoChange() {
    if (this.appliedPreset === "cx") {
      this.defaultLogo = html3`<svg class="cx-logo" viewBox="0 0 104 36" xmlns="http://www.w3.org/2000/svg">${hebLogoInverseSvgContents}</svg>`;
    } else if (this.appliedPreset === "rx") {
      this.defaultLogo = html3`<svg class="rx-logo" viewBox="0 0 348 92" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.687 43.066c3.272 0 7.24-.205 7.24-4.582 0-4.172-3.559-4.499-6.831-4.499h-4.132v9.08h3.723Zm-3.723 27.037H.402V23.268h19.103c4.581 0 9.694.123 13.703 2.454 4.376 2.577 6.953 7.24 6.953 12.272 0 4.417-1.718 8.671-5.194 11.453-3.6 2.945-8.263 3.6-12.763 3.6h-7.24v17.056ZM44.579 23.268h13.498v16.035c2.577-3.15 5.727-4.786 9.817-4.786 3.395 0 7.036.94 8.958 3.804 1.964 2.986 1.964 6.34 1.964 9.899v21.843H65.317v-21.68c0-2.331-.49-4.295-3.272-4.295-2.168 0-3.968 1.555-3.968 5.032v20.943H44.58V23.267ZM105.69 53.783c-3.272.327-8.754 1.35-8.754 5.604 0 2.25 1.432 3.19 3.559 3.19 5.113 0 5.195-4.295 5.195-8.14v-.654Zm1.186 16.32a23.58 23.58 0 0 1-.491-4.826c-2.74 4.008-6.626 5.522-11.412 5.522-6.463 0-12.148-3.559-12.148-10.512 0-5.523 4.294-9.204 9.121-10.717 4.418-1.35 9.163-1.923 13.703-2.168v-.287c0-3.15-.818-4.376-4.09-4.376-2.66 0-4.909.94-5.318 3.886l-12.435-1.146c2.045-8.671 10.308-10.921 18.162-10.921 4.09 0 9.367.532 12.762 2.986 4.581 3.19 4.008 7.69 4.008 12.68v12.23c0 2.577.082 5.195 1.105 7.65h-12.967ZM191.139 35.212v4.704h.122c1.923-3.558 5.4-5.4 9.49-5.4 4.295 0 7.69 1.637 9.817 5.4 2.373-3.886 5.849-5.4 10.431-5.4 2.945 0 6.054.9 8.099 2.987 2.536 2.577 2.536 6.013 2.536 9.694v22.866h-13.253V49.12c0-2.25.286-4.786-2.863-4.786-3.804 0-3.682 3.558-3.682 6.34v19.389h-13.253V49.12c0-2.168-.122-4.99-3.068-4.99-3.19 0-3.476 2.372-3.476 4.99v20.943h-13.253v-34.85h12.353ZM258.672 53.783c-3.273.327-8.754 1.35-8.754 5.604 0 2.25 1.432 3.19 3.559 3.19 5.113 0 5.195-4.295 5.195-8.14v-.654Zm1.145 16.32a23.58 23.58 0 0 1-.491-4.826c-2.74 4.008-6.626 5.522-11.412 5.522-6.504 0-12.149-3.559-12.149-10.512 0-5.523 4.295-9.204 9.163-10.717 4.418-1.35 9.162-1.923 13.703-2.168v-.287c0-3.15-.818-4.376-4.091-4.376-2.658 0-4.908.94-5.317 3.886l-12.435-1.146c2.045-8.671 10.308-10.921 18.161-10.921 4.091 0 9.368.532 12.763 2.986 4.581 3.19 4.008 7.69 4.008 12.68v12.23c0 2.577.082 5.195 1.105 7.65h-13.008ZM310.047 56.973c-1.227 9-7.649 13.785-16.525 13.785-5.031 0-9.163-1.145-12.844-4.786-3.559-3.558-5.195-8.262-5.195-13.253 0-10.512 7.24-18.202 17.957-18.202 8.59 0 15.421 5.031 16.444 13.785l-11.944 1.022-.082-.327c-.491-2.373-1.023-5.113-4.009-5.113-4.295 0-4.295 5.645-4.295 8.753 0 3.273.082 8.59 4.5 8.59 2.945 0 4.008-2.658 4.376-5.195l11.617.941ZM331.154 53.783l6.054-18.57h9.98L333.731 72.19c-2.577 7.24-6.054 9.98-13.867 9.98-2.045 0-4.172-.081-6.872-.327V72.15c1.636.204 3.273.409 4.909.409 1.84 0 5.931.082 5.931-2.659 0-1.022-.532-2.168-.9-3.15l-12.23-31.537h14.684l5.768 18.57Z" fill="#fff"/><path d="M130.069 26.909c7.117 0 12.925-5.686 12.925-12.926S137.227.853 130.069.853H76.607c-7.117 0-12.926 5.89-12.926 13.13 0 7.281 5.768 12.926 12.926 12.926h53.462Z" fill="#EE3224"/><path fill-rule="evenodd" clip-rule="evenodd" d="M63.48 13.983c0-7.348 5.896-13.33 13.127-13.33h53.462c7.272 0 13.126 5.982 13.126 13.33 0 7.352-5.899 13.126-13.126 13.126H76.607c-7.268 0-13.126-5.733-13.126-13.126Zm13.127-12.93c-7.004 0-12.725 5.798-12.725 12.93 0 7.169 5.676 12.725 12.725 12.725h53.462c7.008 0 12.725-5.597 12.725-12.725 0-7.133-5.681-12.93-12.725-12.93H76.607Z" fill="#EE3224"/><path d="M129.496 25.763c6.913 0 12.312-5.195 12.312-11.821 0-6.627-5.195-11.985-12.107-11.985H76.607h.164c-6.913 0-11.904 5.358-11.904 11.985 0 6.626 4.99 11.821 11.904 11.821h52.725Z" fill="#fff"/><path d="M129.005 24.74c6.709 0 11.74-4.703 11.74-10.757 0-6.054-5.031-10.962-11.74-10.962H77.466h.164c-6.709 0-11.535 4.908-11.535 10.962 0 6.054 4.826 10.758 11.535 10.758h51.375Z" fill="#EE3224"/><path d="M142.626 23.677v-.409h.287c.122 0 .286.041.286.205 0 .204-.164.204-.327.204h-.246Zm0 .164h.246l.327.573h.205l-.369-.573c.205-.041.328-.123.328-.368 0-.246-.164-.368-.45-.368h-.491v1.309h.204v-.573Zm-.654-.082c0-.532.409-.94.9-.94.491 0 .9.408.9.94 0 .573-.409.94-.9.94-.491 0-.9-.408-.9-.94Zm.9 1.145c.613 0 1.145-.49 1.145-1.145 0-.654-.532-1.145-1.145-1.145-.614 0-1.145.49-1.145 1.145s.531 1.145 1.145 1.145ZM74.725 7.806h5.89l-.122 5.4h3.559l-.205-5.318h5.727l-.532 11.944h-4.827l-.163-4.172h-3.64l-.083 4.09h-4.99l-.614-11.944ZM97.06 7.97h14.684l-.164 3.272h-8.753v2.045h6.299l-.082 2.373h-6.299v2.045h8.549l-.082 2.209H97.591L97.059 7.97ZM91.414 13.37h3.64v2.208h-3.558l-.082-2.209ZM113.503 13.37h3.436v2.29h-3.436v-2.29ZM119.556 19.996l-.531-12.026h11.085c2.168 0 3.804 1.309 3.804 3.436 0 2.332-1.8 3.15-2.495 3.19v.082c1.104.246 1.759.818 1.759 2.29 0 2.864-2.659 3.069-4.091 3.069l-9.531-.041Z" fill="#fff"/><path d="M124.833 17.828v-2.209h2.004c.614 0 1.187.327 1.187 1.064 0 .695-.778 1.145-1.596 1.145h-1.595ZM124.874 13.574v-2.536h2.004c.778 0 1.596.45 1.596 1.309 0 .695-.941 1.227-1.759 1.227h-1.841ZM138.618 40.448h5.849c1.391 0 2.863 0 4.131.49 1.432.614 2.25 1.882 2.25 3.191 0 3.354-3.763 3.723-6.913 3.723h-5.277v-7.404h-.04Zm31.659 30.146 13.622-18.08h-12.926l-7.527 10.513-6.176-8.835c5.522-2.087 8.631-5.236 8.631-10.308 0-3.804-1.841-7.24-5.768-9.285-3.518-1.923-8.017-2.373-12.148-2.373h-23.929v38.86h14.602v-14.85h3.559l11.658 15.095-15.135 20.124h13.171l8.672-12.23 8.672 12.23h16.689l-15.667-20.86Z" fill="#EE3224"/></svg>`;
    } else {
      if (this.inverse) {
        this.defaultLogo = html3`<svg class="px-logo" viewBox="0 0 92 32" xmlns="http://www.w3.org/2000/svg">${hebLogoWhiteCopyrightSvgContents}</svg>`;
      } else {
        this.defaultLogo = html3`<svg class="px-logo" viewBox="0 0 92 32" xmlns="http://www.w3.org/2000/svg">${hebLogoSvgContents}</svg>`;
      }
    }
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.beforeInit = false;
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      setTimeout(() => {
        this.updateGlobalState();
      });
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateGlobalState();
    this.slotController.watchSlots(["start", "end"]).subscribe((changes) => {
      if (changes) {
        this.updateGlobalState();
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    deleteNavElementState("header", this);
  }
  updateGlobalState() {
    if (!this.passive) {
      updateNavElementState("header", this, {
        element: this,
        height: this.offsetHeight,
        withContainer: !this.withoutContainer && this.withContainer
      });
    } else {
      deleteNavElementState("header", this);
    }
  }
  renderLogo() {
    return html3`<div class="logo" part="logo" aria-hidden="true"><slot name="logo">${this.defaultLogo}</slot></div><div class="name ${classMap({ visible: this.name || this.slotController.check("name") })}" part="name"><slot name="name">${this.name}</slot></div>`;
  }
  /** Focuses the proper first focusable item within the nav header */
  focus() {
    if (this.sidebar) {
      this.menuButtonElem?.focus({ preventScroll: true });
    } else if (!this.withoutLogoLink) {
      this.logoLinkElem?.focus({ preventScroll: true });
    } else if (this.startElements?.length > 0) {
      this.startElements[0].focus({ preventScroll: true });
    }
  }
  render() {
    return html3`${this.instanceStyles}<div class="overflow-container" part="wrapper"><div class="container flex ${classMap({
      "grid-container": !this.withoutContainer && this.withContainer
    })}" part="container"><div class="menu ${classMap({
      visible: this.sidebar && !this.sidebarOpened && !this.hideMenuUntilTransition || this.withinMobileBreakpoint
    })}" part="menu"><slot name="menu">${this.sidebar ? html3`<mte-nav-icon-button id="default-menu-button" .se="${{ "--button-background": "initial" }}" icon="menu" label="${this.sidebarOpened ? "Close Sidebar" : "Open Sidebar"}" @click="${() => {
      this.sidebar.open();
    }}"></mte-nav-icon-button>` : null}</slot></div>${this.withoutLogoLink ? html3`<div class="logo-container">${this.renderLogo()}</div>` : html3`<a class="logo-container" href="${this.logoHref}" aria-label="${ifDefined2(this.ariaLogoLabel ?? this.name)}">${this.renderLogo()}</a>`}<div class="start" part="start"><slot name="start"></slot></div><div class="end" part="end"><slot name="end"></slot></div></div></div>`;
  }
};
MteNavHeader.styles = [styles3, styles, styles10, styles9];
// Disable change-in-update warnings here because we want to handle state changes during init ASAP
MteNavHeader.enabledWarnings = [];
__decorateClass([
  property3({ reflect: true })
], MteNavHeader.prototype, "name", 2);
__decorateClass([
  property3({ reflect: true })
], MteNavHeader.prototype, "logoHref", 2);
__decorateClass([
  presetProperty({ type: Boolean, reflect: true })
], MteNavHeader.prototype, "withContainer", 2);
__decorateClass([
  property3({ type: Boolean, reflect: true })
], MteNavHeader.prototype, "withoutContainer", 2);
__decorateClass([
  property3({ type: Boolean, reflect: true })
], MteNavHeader.prototype, "withCenterLogo", 2);
__decorateClass([
  property3({ type: Boolean, reflect: true })
], MteNavHeader.prototype, "withoutLogoLink", 2);
__decorateClass([
  property3({ reflect: true })
], MteNavHeader.prototype, "role", 2);
__decorateClass([
  property3({ attribute: "aria-label", reflect: true })
], MteNavHeader.prototype, "ariaLabel", 2);
__decorateClass([
  property3({ reflect: false })
], MteNavHeader.prototype, "ariaLogoLabel", 2);
__decorateClass([
  property3({ reflect: true })
], MteNavHeader.prototype, "id", 2);
__decorateClass([
  property3({ type: Boolean, reflect: true })
], MteNavHeader.prototype, "sidebarModeOver", 2);
__decorateClass([
  property3({ type: Boolean, reflect: true })
], MteNavHeader.prototype, "hideMenuUntilTransition", 2);
__decorateClass([
  property3({ type: Boolean, reflect: true })
], MteNavHeader.prototype, "beforeInit", 2);
__decorateClass([
  property3({ type: Boolean, reflect: true })
], MteNavHeader.prototype, "passive", 2);
__decorateClass([
  state2()
], MteNavHeader.prototype, "withinMobileBreakpoint", 2);
__decorateClass([
  state2()
], MteNavHeader.prototype, "sidebar", 2);
__decorateClass([
  state2()
], MteNavHeader.prototype, "sidebarOpened", 2);
__decorateClass([
  state2()
], MteNavHeader.prototype, "defaultLogo", 2);
__decorateClass([
  query3("#default-menu-button")
], MteNavHeader.prototype, "menuButtonElem", 2);
__decorateClass([
  query3(".logo-container")
], MteNavHeader.prototype, "logoLinkElem", 2);
__decorateClass([
  queryAssignedElements({
    slot: "start",
    selector: '[href], [tabindex]:not([tabindex="-1"]), mte-nav-button, mte-nav-icon-button',
    flatten: true
  })
], MteNavHeader.prototype, "startElements", 2);
__decorateClass([
  onUpdate(["withContainer", "withoutContainer", "passive"], { waitUntilFirstUpdate: true })
], MteNavHeader.prototype, "handleStateChange", 1);
__decorateClass([
  onUpdate(["appliedPreset", "inverse"], { on: "both" })
], MteNavHeader.prototype, "handleLogoChange", 1);
MteNavHeader = __decorateClass([
  defineElement("mte-nav-header")
], MteNavHeader);

// src/atomic/nav/nav-sub-header.element.ts
import { classMap as classMap2 } from "lit/directives/class-map.js";
import { html as html4 } from "lit";
import { property as property4 } from "lit/decorators.js";

// src/atomic/nav/nav-sub-header.styles.ts
import { css as css4 } from "lit";
var styles11 = css4`:host{--background:var(--mte-surface-2);--color:var(--mte-ink-1);--border-color:var(--mte-border-1);--padding-x:var(--mte-space-sm);--padding-y:var(--mte-space-sm);--header-padding-y:var(--padding-y);--gap:var(--mte-space-sm);align-items:center;background:var(--background);border-bottom:1px solid var(--border-color);color:var(--color);display:flex;flex-direction:row;gap:var(--gap);overflow-x:auto;padding:var(--padding-y) var(--padding-x);width:100%}:host([appliedpreset=cx]){--padding-y:calc(var(--mte-space-xs) + var(--mte-space-xxs))}:host([appliedpreset=cx]:not([inverse])){--background:rgb(var(--mte-core-primary-dark-rgb));--color:rgb(var(--mte-core-primary-dark-c-rgb));--button-background:rgb(var(--mte-core-primary-dark-rgb));--button-color:rgb(var(--mte-core-primary-dark-c-rgb))}.end,.start{align-items:center;display:flex;flex-direction:row;flex-grow:1;gap:var(--gap)}.start{justify-content:flex-start}.end{justify-content:flex-end}`;

// src/atomic/nav/nav-sub-header.element.ts
var nextUniqueId2 = 0;
var MteNavSubHeader = class extends WaitForFrameworkMixin(
  PresetMixinFactory("MteNavSubHeader", {
    reflectAppliedPreset: true
  })(StylePartsMixin(MteElement))
) {
  constructor() {
    super(...arguments);
    this.internalId = nextUniqueId2++;
    this.withContainer = false;
    this.withoutContainer = false;
    this.role = "navigation";
    this.ariaLabel = "Secondary Navigation";
    this.id = `mte-nav-sub-header--${this.internalId}`;
    this.passive = false;
    // Update local state with global nav state changes
    this.signalStateController = new SignalStateController(this, [navState.header], ([header]) => {
      if (header) {
        this.withContainer = header.withContainer;
      }
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateGlobalState();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    deleteNavElementState("subheader", this);
  }
  updateGlobalState() {
    if (!this.passive) {
      updateNavElementState("subheader", this, {
        element: this
      });
    } else {
      deleteNavElementState("subheader", this);
    }
  }
  render() {
    return html4`${this.instanceStyles}<div class="container flex ${classMap2({ "grid-container": this.withContainer })}" part="container"><div class="start" part="start"><slot name="start"></slot></div><div class="end" part="end"><slot name="end"></slot></div></div>`;
  }
};
MteNavSubHeader.styles = [styles3, styles, styles10, styles11];
__decorateClass([
  presetProperty({ type: Boolean, reflect: true })
], MteNavSubHeader.prototype, "withContainer", 2);
__decorateClass([
  property4({ type: Boolean, reflect: true })
], MteNavSubHeader.prototype, "withoutContainer", 2);
__decorateClass([
  property4({ reflect: true })
], MteNavSubHeader.prototype, "role", 2);
__decorateClass([
  property4({ attribute: "aria-label", reflect: true })
], MteNavSubHeader.prototype, "ariaLabel", 2);
__decorateClass([
  property4({ reflect: true })
], MteNavSubHeader.prototype, "id", 2);
__decorateClass([
  property4({ type: Boolean, reflect: true })
], MteNavSubHeader.prototype, "passive", 2);
MteNavSubHeader = __decorateClass([
  defineElement("mte-nav-sub-header")
], MteNavSubHeader);

// src/atomic/nav/nav-sidebar.element.ts
import { classMap as classMap3 } from "lit/directives/class-map.js";
import { property as property5, query as query4, state as state3 } from "lit/decorators.js";

// src/atomic/nav/nav-sidebar.styles.ts
import { css as css5 } from "lit";
var styles12 = css5`:host{--size:var(--sidebar-size);--fallback-border-right:solid 1px;border-bottom:var(--sidebar-border-bottom,initial);border-left:var(--sidebar-border-left,initial);border-right:var(--sidebar-border-right,initial);border-top:var(--sidebar-border-top,initial);border-color:var(--border-color,var(--mte-border-1));bottom:var(--sidebar-position-bottom,unset);box-sizing:border-box;display:block;height:min(var(--sidebar-height,100%),100%);left:var(--sidebar-position-left,unset);pointer-events:none;position:sticky;right:var(--sidebar-position-right,unset);top:var(--sidebar-position-top,unset);top:0;transform:var(--sidebar-transform,initial);transition:visibility var(--sidebar-visibility-time,var(--transition-time)) var(--sidebar-transition-fn,var(--transition-fn)),transform var(--sidebar-transition-time,var(--transition-time)) var(--sidebar-transition-fn,var(--transition-fn));visibility:var(--sidebar-visibility,hidden);width:min(var(--sidebar-width,--size,350px),100%);z-index:var(--nav-z-index);z-index:1000}:host([beforeInit]:not([preferSidebar=closed]):not([hasOpenedOnce])) .panel{transition:none}:host([aria-hidden=true]){visibility:hidden}:host .panel{--sidebar-height:100vh!important;border-right:none!important;height:100vh!important;pointer-events:auto}:host([beforeInit]) .panel{transition:none!important}:host([position=left]) .panel,:host([position=right]) .panel{height:100%;width:var(--size)}.header{align-items:center;border-bottom:1px solid var(--border-color);border-right:var(--sidebar-border-right,var(--fallback-border-right));border-color:var(--border-color,var(--mte-border-1));box-sizing:border-box;display:flex;flex-direction:row;min-height:max(-moz-fit-content,var(--mte-nav-header-height,57px));min-height:max(fit-content,var(--mte-nav-header-height,57px));padding:calc(var(--mte-space-sm) + var(--mte-space-xs))}:host([headerInverse]) .header{--background:var(--mte-surface-inverse);--color:var(--mte-ink-inverse);--border-color:var(--mte-border-inverse);background:var(--background);border-color:var(--border-color);color:var(--color);position:relative;transform-style:preserve-3d}.content-container,.footer{border-right:var(--sidebar-border-right,var(--fallback-border-right));border-color:var(--border-color,var(--mte-border-1))}.flex-spacer{flex-grow:1}:host([position=top]) .panel{border-bottom:var(--sidebar-border);border-right:none}:host([position=right]) .panel{border-left:var(--sidebar-border);border-right:none}:host([position=bottom]) .panel{border-right:none;border-top:var(--sidebar-border)}:host([position=left]) .panel{border-right:var(--sidebar-border)}`;

// src/atomic/nav/nav-sidebar.element.ts
import { config as config3, selectorFactory as selectorFactory2 } from "@mortar/styles";
import { html as html5 } from "lit";
var nextUniqueId3 = 0;
var MteNavSidebar = class extends InverseMixin(
  OverlayMixin(
    WaitForFrameworkMixin(
      PresetMixinFactory("MteNavSidebar", {
        reflectAppliedPreset: true
      })(StylePartsMixin(MteElement))
    )
  )
) {
  constructor() {
    super();
    this.internalId = nextUniqueId3++;
    this.instanceStyleSelectorRoot = ":host:host:host:host:host:host .panel";
    this.withoutHeaderDivider = false;
    this.withoutFooterDivider = false;
    this.role = "complementary";
    this.ariaLabel = "Sidebar Navigation";
    this.ariaHidden = "false";
    this.id = `mte-nav-sidebar--${this.internalId}`;
    this.position = "left";
    this.hideUntilTransition = false;
    this.closeAriaLabel = "Close";
    this.opened = false;
    this.headerInverse = false;
    this.beforeInit = true;
    this.headerHeight = null;
    this.mobileBreakpoint = "lg";
    this.hasOpenedOnce = false;
    this.passive = false;
    this.detectChildCloseController = new DetectChildCloseController(this);
    // Update local state with global nav state changes
    this.signalStateController = new SignalStateController(
      this,
      [
        navState.header,
        navState.preferSidebar,
        navState.inverse,
        navState.withinMobileBreakpoint,
        navState.sidebarSize
      ],
      ([header, preferSidebar, inverse, withinMobileBreakpoint, sidebarSize]) => {
        this.inverse = inverse === "sidebar";
        this.headerInverse = inverse === "header";
        this.preferSidebar = preferSidebar;
        this.size = sidebarSize;
        if (header) {
          this.headerHeight = header.height;
          this.headerElem = header.element;
        }
        if (withinMobileBreakpoint && this.overlayMode !== "over") {
          this.setOverlayMode("over");
          this.close();
        } else if (!withinMobileBreakpoint) {
          if (this.preferSidebar !== "closed") {
            if (!this.hasOpenedOnce) {
              this.setOverlayMode("push");
              this.readyForAnimation = true;
              this.open();
            }
            if (this.overlayMode !== "push" && !this.opened) {
              this.setOverlayMode("push");
              this.open();
            } else {
              this.setOverlayMode("push");
            }
          } else {
            this.close();
          }
        }
      }
    );
    if (isSsr()) {
      this.handleSsrChange();
    }
  }
  get animationDuration() {
    return config3.animation.transitionDurationJs.short * 1e3;
  }
  // Empty setter included for compatibility reasons
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  set animationDuration(animationDuration) {
  }
  handleTargetChange() {
    this.updateTriggerAriaAttributes();
  }
  handleStateChange() {
    this.updateGlobalState();
  }
  handleSsrChange() {
    this.opened = this.preferSidebar !== "closed";
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateGlobalState();
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.initState();
  }
  initState() {
    if (this.beforeInit) {
      if (!this.overlayMode) {
        this.setOverlayMode("push");
      }
      if (this.preferSidebar === "closed") {
        this.close();
      } else if (this.preferSidebar === "opened") {
        const activeBreakpoint = getCurrentBreakpoint(globalThis.window);
        const withinTransition = belowMobileBreakpoint(activeBreakpoint, this.mobileBreakpoint);
        if (!withinTransition) {
          this.open();
        } else {
          this.close();
        }
      }
      this.updateGlobalState();
      setTimeout(() => {
        this.beforeInit = false;
      });
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    deleteNavElementState("sidebar", this);
  }
  updateGlobalState() {
    if (!this.passive) {
      updateNavElementState("sidebar", this, {
        element: this,
        position: this.position,
        opened: this.opened,
        overlayMode: this.overlayMode,
        hideUntilTransition: this.hideUntilTransition
      });
    } else {
      deleteNavElementState("sidebar", this);
    }
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (isSsr() && this.headerHeight || changedProps.has("headerHeight") && this.headerHeight || changedProps.has("size")) {
      this.setInstanceStyle("nav-root", selectorFactory2(this.instanceStyleSelectorRoot), {
        "--mte-nav-header-height": `${this.headerHeight}px`,
        ...isSsr() ? {} : { "--size": mapNumberToPx(this.size) }
      });
    }
  }
  updateTriggerAriaAttributes() {
    if (this.targetElement) {
      this.targetElement.setAttribute("role", "button");
      this.targetElement.setAttribute("aria-expanded", `${this.opened}`);
      this.targetElement.setAttribute("aria-controls", this.id);
    }
  }
  /** Opens the sidebar */
  open() {
    return new Promise((resolve) => {
      this.handleOverlayOpen({
        willOpen: () => {
          this.ariaHidden = this.opened ? "false" : "true";
          if (this.targetElement) {
            this.targetElement.setAttribute("aria-expanded", "true");
          }
        }
      }).then(() => {
        setTimeout(() => {
          this.handleOverlayOpenEnd().then(() => {
            if (!this.hasOpenedOnce) {
              this.hasOpenedOnce = true;
            } else if (this.overlayMode !== "over" && !isFocusTrapActive()) {
              this.closeButtonElem.focus({ preventScroll: true });
            }
            resolve();
          });
        }, this.animationDuration);
      });
    });
  }
  /** Closes the sidebar */
  close() {
    return new Promise((resolve) => {
      this.handleOverlayClose().then(() => {
        setTimeout(() => {
          if (this.targetElement) {
            this.targetElement.setAttribute("aria-expanded", "false");
          }
          this.handleOverlayCloseEnd().then(() => {
            if (this.hasOpenedOnce && !isFocusTrapActive()) {
              this.headerElem?.focus({ preventScroll: true });
            }
            this.ariaHidden = this.opened ? "false" : "true";
            resolve();
          });
        }, this.animationDuration);
      });
    });
  }
  /** Toggles the sidebar open and closed */
  toggle() {
    if (this.opened) {
      return this.close();
    } else {
      return this.open();
    }
  }
  setOverlayMode(mode = "push") {
    if (mode === "over") {
      this.setOverlayOptions({
        withFocusTrap: true,
        withCloseOnClickOutside: true,
        withScrollLock: true,
        withCloseOnEscape: true,
        withPortal: true,
        withDimBackdrop: true,
        returnToOriginOnClose: true,
        focusTrapTarget: this.panelElem
      });
    } else {
      this.setOverlayOptions({
        withFocusTrap: false,
        withCloseOnClickOutside: false,
        withScrollLock: false,
        withCloseOnEscape: false,
        withPortal: false,
        withDimBackdrop: false,
        focusTrapTarget: this.panelElem
      });
    }
    this.overlayMode = mode;
  }
  render() {
    return html5`${this.instanceStyles}<div class="panel ${classMap3({ opened: this.opened && this.readyForAnimation })}"><div class="header" part="header"><span class="flex-spacer"></span><mte-nav-icon-button class="close-button" icon="close" label="Close Sidebar" labelPosition="left" role="presentation" @click="${() => this.close()}"></mte-nav-icon-button></div><div class="content-container"><div class="content" part="content" role="navigation"><slot></slot></div></div><div class="footer" part="footer"><slot name="footer"></slot></div></div>`;
  }
};
MteNavSidebar.styles = [styles3, styles, styles4, styles2, styles12];
// Disable change-in-update warnings here because we want to handle state changes during init ASAP
MteNavSidebar.enabledWarnings = [];
__decorateClass([
  property5({ reflect: true, type: Boolean })
], MteNavSidebar.prototype, "withoutHeaderDivider", 2);
__decorateClass([
  property5({ reflect: true, type: Boolean })
], MteNavSidebar.prototype, "withoutFooterDivider", 2);
__decorateClass([
  property5({ reflect: true })
], MteNavSidebar.prototype, "role", 2);
__decorateClass([
  property5({ attribute: "aria-label", reflect: true })
], MteNavSidebar.prototype, "ariaLabel", 2);
__decorateClass([
  property5({ attribute: "aria-describedby", reflect: true })
], MteNavSidebar.prototype, "ariaDescribedBy", 2);
__decorateClass([
  property5({ attribute: "aria-hidden", reflect: true })
], MteNavSidebar.prototype, "ariaHidden", 2);
__decorateClass([
  property5({ reflect: true })
], MteNavSidebar.prototype, "id", 2);
__decorateClass([
  property5({ reflect: true })
], MteNavSidebar.prototype, "position", 2);
__decorateClass([
  property5({ type: Object })
], MteNavSidebar.prototype, "targetElement", 2);
__decorateClass([
  presetProperty({ type: Boolean, reflect: true })
], MteNavSidebar.prototype, "hideUntilTransition", 2);
__decorateClass([
  property5()
], MteNavSidebar.prototype, "closeAriaLabel", 2);
__decorateClass([
  property5({ type: Boolean, reflect: true })
], MteNavSidebar.prototype, "opened", 2);
__decorateClass([
  property5({ type: Boolean, reflect: true })
], MteNavSidebar.prototype, "headerInverse", 2);
__decorateClass([
  property5({ type: Boolean, reflect: true })
], MteNavSidebar.prototype, "beforeInit", 2);
__decorateClass([
  property5({ reflect: true })
], MteNavSidebar.prototype, "preferSidebar", 2);
__decorateClass([
  property5({ type: Number, reflect: true })
], MteNavSidebar.prototype, "animationDuration", 1);
__decorateClass([
  state3()
], MteNavSidebar.prototype, "overlayMode", 2);
__decorateClass([
  state3()
], MteNavSidebar.prototype, "headerHeight", 2);
__decorateClass([
  state3()
], MteNavSidebar.prototype, "mobileBreakpoint", 2);
__decorateClass([
  state3()
], MteNavSidebar.prototype, "size", 2);
__decorateClass([
  query4(".close-button")
], MteNavSidebar.prototype, "closeButtonElem", 2);
__decorateClass([
  query4(".panel")
], MteNavSidebar.prototype, "panelElem", 2);
__decorateClass([
  property5({ type: Boolean, reflect: true })
], MteNavSidebar.prototype, "hasOpenedOnce", 2);
__decorateClass([
  property5({ type: Boolean, reflect: true })
], MteNavSidebar.prototype, "passive", 2);
__decorateClass([
  onUpdate(["targetElement", "id"])
], MteNavSidebar.prototype, "handleTargetChange", 1);
__decorateClass([
  onUpdate(["position", "opened", "overlayMode", "hideUntilTransition", "passive"])
], MteNavSidebar.prototype, "handleStateChange", 1);
__decorateClass([
  onUpdate(["preferSidebar"], { on: "ssr" })
], MteNavSidebar.prototype, "handleSsrChange", 1);
MteNavSidebar = __decorateClass([
  defineElement("mte-nav-sidebar")
], MteNavSidebar);

// src/atomic/nav/nav-content.element.ts
import { html as html6 } from "lit";

// src/atomic/nav/nav-content.styles.ts
import { css as css6 } from "lit";
var styles13 = css6``;

// src/atomic/nav/nav-content.element.ts
import { property as property6 } from "lit/decorators.js";
var MteNavContent = class extends WaitForFrameworkMixin(
  PresetMixinFactory("MteNavContent", {
    reflectAppliedPreset: true
  })(StylePartsMixin(MteContentBase))
) {
  constructor() {
    super(...arguments);
    this.role = "main";
  }
  render() {
    return html6`${this.instanceStyles}<div class="container" part="container"><slot></slot></div>`;
  }
};
MteNavContent.styles = [styles3, styles10, styles13];
__decorateClass([
  property6({ reflect: true })
], MteNavContent.prototype, "role", 2);
MteNavContent = __decorateClass([
  defineElement("mte-nav-content")
], MteNavContent);

// src/atomic/nav/nav-footer.element.ts
import { html as html7 } from "lit";

// src/atomic/nav/nav-footer.styles.ts
import { css as css7 } from "lit";
var styles14 = css7`:host{--background:var(--mte-surface-2);--color:var(--mte-ink-1);--border-color:var(--mte-border-1);--border:solid 1px var(--border-color);background:var(--background);border-top:var(--border);color:var(--color);display:block;overflow-x:auto;width:100%}:host([appliedpreset=cx]:not([inverse])),:host([appliedpreset=rx]:not([inverse])){--background:var(--mte-surface-4);--color:var(--mte-ink-5);--border:none}`;

// src/atomic/nav/nav-footer.element.ts
import { property as property7 } from "lit/decorators.js";
import { classMap as classMap4 } from "lit/directives/class-map.js";
var MteNavFooter = class extends InverseMixin(
  WaitForFrameworkMixin(
    PresetMixinFactory("MteNavFooter", {
      reflectAppliedPreset: true
    })(StylePartsMixin(MteContentBase))
  )
) {
  constructor() {
    super(...arguments);
    this.withContainer = false;
    this.withoutContainer = false;
    this.role = "contentinfo";
  }
  render() {
    return html7`${this.instanceStyles}<div class="container ${classMap4({
      "grid-container": !this.withoutContainer && this.withContainer,
      "grid-container-fluid": !this.withoutContainer && !this.withContainer
    })}" part="container"><slot></slot></div>`;
  }
};
MteNavFooter.styles = [styles3, styles, styles10, styles14];
__decorateClass([
  presetProperty({ type: Boolean, reflect: true })
], MteNavFooter.prototype, "withContainer", 2);
__decorateClass([
  property7({ type: Boolean, reflect: true })
], MteNavFooter.prototype, "withoutContainer", 2);
__decorateClass([
  property7({ reflect: true })
], MteNavFooter.prototype, "role", 2);
MteNavFooter = __decorateClass([
  defineElement("mte-nav-footer")
], MteNavFooter);

// src/atomic/nav/nav-button.element.ts
import { ifDefined as ifDefined3 } from "lit/directives/if-defined.js";
import { html as html8 } from "lit";
import { property as property8, query as query5, eventOptions as eventOptions2 } from "lit/decorators.js";
var MteNavButton = class extends AutoActiveLinkMixin(
  PresetMixinFactory("MteNavButton", {
    reflectAppliedPreset: true
  })(StylePartsMixin(MteElement))
) {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.role = "listitem";
  }
  handleButtonClick(e) {
    if (this.disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      return false;
    }
    if (this.iref) {
      e.preventDefault();
    }
  }
  /** Proxy focus calls */
  focus(options) {
    this.buttonElement?.focus(options);
  }
  /** Proxy click calls */
  click() {
    this.buttonElement?.click();
  }
  renderButtonTemplate() {
    const href = this.href ?? this.iref;
    const contentsTemplate = html8`<div class="label" part="label"><slot></slot></div>`;
    return href ? html8`<a id="anchor" class="button" part="button" href="${href}" target="${ifDefined3(this.target)}" download="${ifDefined3(this.download)}" ?disabled="${this.disabled}" @click="${this.handleButtonClick}">${contentsTemplate}</a>` : html8`<button class="button" part="button" ?disabled="${this.disabled}" @click="${this.handleButtonClick}">${contentsTemplate}</button>`;
  }
  render() {
    return html8`${this.instanceStyles}${this.renderButtonTemplate()}`;
  }
};
MteNavButton.styles = [styles3, styles6];
__decorateClass([
  property8({ reflect: true })
], MteNavButton.prototype, "href", 2);
__decorateClass([
  property8({ reflect: true })
], MteNavButton.prototype, "iref", 2);
__decorateClass([
  property8({ reflect: true })
], MteNavButton.prototype, "target", 2);
__decorateClass([
  property8({ reflect: true })
], MteNavButton.prototype, "download", 2);
__decorateClass([
  property8({ type: Boolean, reflect: true })
], MteNavButton.prototype, "disabled", 2);
__decorateClass([
  property8({ reflect: true })
], MteNavButton.prototype, "role", 2);
__decorateClass([
  query5("#anchor")
], MteNavButton.prototype, "anchorElement", 2);
__decorateClass([
  query5(".button")
], MteNavButton.prototype, "buttonElement", 2);
__decorateClass([
  eventOptions2({ capture: true })
], MteNavButton.prototype, "handleButtonClick", 1);
MteNavButton = __decorateClass([
  defineElement("mte-nav-button")
], MteNavButton);

// src/atomic/nav/nav-button-group.element.ts
import { ifDefined as ifDefined4 } from "lit/directives/if-defined.js";
import { property as property9 } from "lit/decorators.js";
import { html as html9 } from "lit";

// src/atomic/nav/nav-button-group.styles.ts
import { css as css8 } from "lit";
var styles15 = css8`:host{display:contents}ul{display:flex;list-style-type:none;margin:0;padding:0}:host([direction=columnReverse]) ul,:host([direction=column]) ul{align-items:stretch;flex-direction:column}:host([direction=rowReverse]) ul,:host([direction=row]) ul{align-items:center;flex-direction:row}`;

// src/atomic/nav/nav-button-group.element.ts
import { config as config4 } from "@mortar/styles";
var MteNavButtonGroup = class extends MteContentBase {
  constructor() {
    super(...arguments);
    this.direction = "row";
    this.gap = `var(--gap, ${config4.space.md})`;
    this.contentStyleSelectorRoot = ":host:host:host:host:host:host ul";
    this.instanceStyleSelectorRoot = ":host:host:host:host:host:host ul";
    this._inheritedAttributes = {};
  }
  handleLabelChange(changes) {
    if (changes.has("ariaLabel")) {
      this._inheritedAttributes = {
        ...this._inheritedAttributes,
        ariaLabel: this.ariaLabel
      };
      this.removeAttribute("aria-label");
    }
  }
  render() {
    return html9`${this.instanceStyles}<ul aria-label="${ifDefined4(this._inheritedAttributes.ariaLabel)}"><slot></slot></ul>`;
  }
};
MteNavButtonGroup.styles = [styles3, styles15];
__decorateClass([
  property9({ reflect: true, converter: ResponsiveValueConverter })
], MteNavButtonGroup.prototype, "direction", 2);
__decorateClass([
  property9({ reflect: true, converter: ResponsiveValueConverter })
], MteNavButtonGroup.prototype, "gap", 2);
__decorateClass([
  property9({ attribute: "aria-label", reflect: true })
], MteNavButtonGroup.prototype, "ariaLabel", 2);
__decorateClass([
  onUpdate("ariaLabel", { on: "both" })
], MteNavButtonGroup.prototype, "handleLabelChange", 1);
MteNavButtonGroup = __decorateClass([
  defineElement("mte-nav-button-group")
], MteNavButtonGroup);

// src/atomic/nav/nav-item.element.ts
import { ifDefined as ifDefined5 } from "lit/directives/if-defined.js";
import { html as html10 } from "lit";
import { property as property10, query as query6, eventOptions as eventOptions3 } from "lit/decorators.js";
var MteNavItem = class extends AutoActiveLinkMixin(
  SlotObserverMixin(
    WaitForFrameworkMixin(
      PresetMixinFactory("MteNavItem")(
        StylePartsMixin(MteElement)
      )
    )
  )
) {
  constructor() {
    super(...arguments);
    this.iconLibrary = "_default";
    this.badgeDot = false;
    this.opened = false;
    this.disabled = false;
    this.role = "listitem";
  }
  handleButtonClick(e) {
    if (this.disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      return false;
    }
    if (this.iref) {
      e.preventDefault();
    }
  }
  /**
   * Suppresses certain click events so a click cannot cause
   * navigation when it bubbles up to certain framework router tooling.
   */
  suppressEventPropagation(e) {
    e.stopImmediatePropagation();
    e.stopPropagation();
  }
  /** Toggles the section opened state */
  handleToggleClick(e) {
    this.opened = !this.opened;
    if (this.opened) {
      this._onSectionOpen.emit();
    } else {
      this._onSectionClose.emit();
    }
  }
  /** Proxy focus calls */
  focus(options) {
    this.buttonElement?.focus(options);
  }
  /** Proxy click calls */
  click() {
    this.buttonElement?.click();
  }
  renderButtonTemplate(hasChildren) {
    const href = this.href ?? this.iref;
    const suffixTemplate = (withToggle = true) => html10`<slot name="suffix" part="suffix">${withToggle ? html10`<mte-icon autosize name="${this.opened ? "chevron-down" : "chevron-right"}"></mte-icon>` : null}</slot>`;
    const contentsTemplate = html10`<slot name="prefix" part="prefix">${this.icon ? html10`<mte-icon autosize name="${this.icon}" library="${ifDefined5(this.iconLibrary)}"></mte-icon>` : null}</slot><div class="label" part="label"><slot></slot></div><slot name="badge">${this.badge || this.badgeDot ? html10`<mte-badge part="badge" aria-hidden="true" ?dot="${this.badgeDot}" value="${this.badge}" color="${ifDefined5(this.badgeColor)}" size="sm" position="unset" placement="unset" withoutOutline></mte-badge>` : null}</slot><span class="suffix-spacer"></span> ${hasChildren && !href || !hasChildren && href ? suffixTemplate(hasChildren) : null}`;
    return href ? html10`<div class="href-container"><a class="button primary" id="anchor" part="button" href="${href}" target="${ifDefined5(this.target)}" download="${ifDefined5(this.download)}" aria-description="${ifDefined5(this.badge ? `Details: ${this.badge}` : null)}" ?disabled="${this.disabled}" @click="${this.handleButtonClick}">${contentsTemplate}</a> ${hasChildren ? html10`<button class="button href-toggle" part="button" aria-labelledby="anchor" aria-expanded="${ifDefined5(hasChildren ? this.opened ? "true" : "false" : null)}" ?disabled="${this.disabled}" @click="${(e) => {
      this.handleToggleClick(e);
      this.suppressEventPropagation(e);
    }}">${suffixTemplate(true)}</button>` : null}</div>` : html10`<button class="button primary" part="toggle" ?disabled="${this.disabled}" aria-description="${ifDefined5(this.badge ? `Details: ${this.badge}` : null)}" aria-expanded="${ifDefined5(hasChildren ? this.opened ? "true" : "false" : null)}" @click="${(e) => {
      this.handleButtonClick(e);
      this.handleToggleClick(e);
    }}">${contentsTemplate}</button>`;
  }
  render() {
    const hasChildren = this.hasSlot("child");
    return html10`${this.instanceStyles}<div class="container">${this.renderButtonTemplate(hasChildren)} ${hasChildren ? html10`<div class="collapse"><mte-collapse ?opened="${this.opened}" withFade><ul><slot name="child" @click="${this.suppressEventPropagation}"></slot></ul></mte-collapse></div>` : null}</div>`;
  }
};
MteNavItem.styles = [styles3, styles7];
MteNavItem.shadowRootOptions = { ...MteElement.shadowRootOptions, delegatesFocus: true };
__decorateClass([
  property10({ reflect: true })
], MteNavItem.prototype, "icon", 2);
__decorateClass([
  property10({ reflect: true })
], MteNavItem.prototype, "iconLibrary", 2);
__decorateClass([
  property10({ reflect: true })
], MteNavItem.prototype, "badge", 2);
__decorateClass([
  property10({ reflect: true })
], MteNavItem.prototype, "badgeColor", 2);
__decorateClass([
  property10({ type: Boolean, reflect: true })
], MteNavItem.prototype, "badgeDot", 2);
__decorateClass([
  property10({ type: Boolean, reflect: true })
], MteNavItem.prototype, "opened", 2);
__decorateClass([
  property10({ reflect: true })
], MteNavItem.prototype, "href", 2);
__decorateClass([
  property10({ reflect: true })
], MteNavItem.prototype, "iref", 2);
__decorateClass([
  property10({ reflect: true })
], MteNavItem.prototype, "target", 2);
__decorateClass([
  property10({ reflect: true })
], MteNavItem.prototype, "download", 2);
__decorateClass([
  property10({ type: Boolean, reflect: true })
], MteNavItem.prototype, "disabled", 2);
__decorateClass([
  property10({ reflect: true })
], MteNavItem.prototype, "role", 2);
__decorateClass([
  query6("#anchor")
], MteNavItem.prototype, "anchorElement", 2);
__decorateClass([
  query6(".button.primary")
], MteNavItem.prototype, "buttonElement", 2);
__decorateClass([
  eventEmitter()
], MteNavItem.prototype, "_onSectionOpen", 2);
__decorateClass([
  eventEmitter()
], MteNavItem.prototype, "_onSectionClose", 2);
__decorateClass([
  eventOptions3({ capture: true })
], MteNavItem.prototype, "handleButtonClick", 1);
MteNavItem = __decorateClass([
  defineElement("mte-nav-item")
], MteNavItem);

// src/atomic/nav/nav-item-group.element.ts
import { classMap as classMap5 } from "lit/directives/class-map.js";
import { ifDefined as ifDefined6 } from "lit/directives/if-defined.js";
import { property as property11 } from "lit/decorators.js";
import { html as html11 } from "lit";

// src/atomic/nav/nav-item-group.styles.ts
import { css as css9 } from "lit";
var styles16 = css9`:host{--indent-size:var(--mte-space-lg);--header-color:var(--mte-ink-2);--header-margin:var(--mte-space-md);display:block}ul{display:block;list-style-type:none;margin:0;padding:0}.header{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--header-color);font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);text-decoration:inherit;text-transform:inherit}.default-header{margin-top:var(--header-margin)}`;

// src/atomic/nav/nav-item-group.element.ts
var MteNavItemGroup = class extends StylePartsMixin(
  MteElement
) {
  constructor() {
    super(...arguments);
    this._inheritedAttributes = {};
  }
  handleLabelChange(changes) {
    if (changes.has("ariaLabel")) {
      this._inheritedAttributes = {
        ...this._inheritedAttributes,
        ariaLabel: this.ariaLabel
      };
      this.removeAttribute("aria-label");
    }
  }
  render() {
    return html11`${this.instanceStyles}<div id="header" class="header" part="header"><slot name="header"><div class="${classMap5({ "default-header": this.header })}">${this.header}</div></slot></div><ul aria-labelledby="${ifDefined6(
      this._inheritedAttributes.ariaLabel ?? this.header ? "header" : null
    )}"><slot></slot></ul>`;
  }
};
MteNavItemGroup.styles = [styles3, styles16];
__decorateClass([
  property11({ reflect: true })
], MteNavItemGroup.prototype, "header", 2);
__decorateClass([
  property11({ attribute: "aria-label", reflect: true })
], MteNavItemGroup.prototype, "ariaLabel", 2);
__decorateClass([
  onUpdate("ariaLabel", { on: "both" })
], MteNavItemGroup.prototype, "handleLabelChange", 1);
MteNavItemGroup = __decorateClass([
  defineElement("mte-nav-item-group")
], MteNavItemGroup);
export {
  MteNavButton,
  MteNavButtonGroup,
  MteNavContent,
  MteNavFooter,
  MteNavHeader,
  MteNavIconButton,
  MteNavItem,
  MteNavItemGroup,
  MteNavRoot,
  MteNavSidebar,
  MteNavSubHeader
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXYiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXYvbmF2LXJvb3Quc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbmF2L25hdi11dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29udHJvbGxlcnMvc2lnbmFsLXN0YXRlLmNvbnRyb2xsZXIudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXYiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXYvbmF2LWhlYWRlci5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXYvY29udGFpbmVyLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdiIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdiIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdi9uYXYtc3ViLWhlYWRlci5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXYiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXYvbmF2LXNpZGViYXIuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbmF2IiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbmF2L25hdi1jb250ZW50LnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdiIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdi9uYXYtZm9vdGVyLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdiIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdiIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdi9uYXYtYnV0dG9uLWdyb3VwLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdiIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdiIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdi9uYXYtaXRlbS1ncm91cC5zdHlsZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWJhY2tncm91bmQ6aW5oZXJpdDstLXNpZGViYXItc2l6ZTp2YXIoLS1tdGUtbmF2LXNpZGViYXItc2l6ZSwwcHgpOy0tc2lkZWJhci1wb3NpdGlvbi1yaWdodDowOy0tc2lkZWJhci1wb3NpdGlvbi1ib3R0b206MDstLXNpZGViYXItcG9zaXRpb24tbGVmdDowOy0tc2lkZWJhci1wb3NpdGlvbi10b3A6MDstLXNpZGViYXItd2lkdGg6MTAwJTstLXNpZGViYXItaGVpZ2h0OjEwMCU7LS1zaWRlYmFyLXZpc2liaWxpdHk6aGlkZGVuOy0tc2lkZWJhci10cmFuc2l0aW9uLXRpbWU6MjAwbXM7LS1zaWRlYmFyLXRyYW5zaXRpb24tZm46Y3ViaWMtYmV6aWVyKDAuMjUsMC44LDAuMjUsMSk7LS1zaWRlYmFyLWFzaWRlLWNvbnRhaW5lci1wYWRkaW5nOnZhcigtLXNpZGViYXItc2l6ZSk7LS1uYXYtei1pbmRleDoxMTAwO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7ZGlzcGxheTpibG9jazttaW4taGVpZ2h0OjEwMHZoO21pbi13aWR0aDoxMDAlO3dpZHRoOjEwMCV9Omhvc3QoW2JlZm9yZUluaXRdKXstLXNpZGViYXItdHJhbnNpdGlvbi10aW1lOjBtc306aG9zdChbYXBwbGllZHByZXNldD1jeF0pLDpob3N0KFthcHBsaWVkcHJlc2V0PXJ4XSl7LS1iYWNrZ3JvdW5kOnZhcigtLW10ZS1zdXJmYWNlLTIpfTpob3N0KDpub3QoW3dpdGhvdXRTdGlja3lIZWFkZXJdKSkgLmhlYWRlcntwb3NpdGlvbjpzdGlja3k7dG9wOjA7ei1pbmRleDp2YXIoLS1uYXYtei1pbmRleCl9Omhvc3QoW3NpZGViYXJQb3NpdGlvbj1sZWZ0XSl7LS1zaWRlYmFyLXBvc2l0aW9uLXJpZ2h0OnVuc2V0Oy0tc2lkZWJhci13aWR0aDp2YXIoLS1zaWRlYmFyLXNpemUpOy0tc2lkZWJhci10cmFuc2Zvcm06dHJhbnNsYXRlKC0xMDAlKTstLXNpZGViYXItYm9yZGVyLXJpZ2h0OjFweCBzb2xpZH06aG9zdChbc2lkZWJhclBvc2l0aW9uPXJpZ2h0XSl7LS1zaWRlYmFyLXBvc2l0aW9uLWxlZnQ6dW5zZXQ7LS1zaWRlYmFyLXdpZHRoOnZhcigtLXNpZGViYXItc2l6ZSk7LS1zaWRlYmFyLXRyYW5zZm9ybTp0cmFuc2xhdGUoMTAwJSk7LS1zaWRlYmFyLWJvcmRlci1sZWZ0OjFweCBzb2xpZH06aG9zdChbc2lkZWJhck9wZW5lZF0pey0tc2lkZWJhci10cmFuc2Zvcm06dHJhbnNmb3JtKDAsMCk7LS1zaWRlYmFyLXZpc2liaWxpdHk6dmlzaWJsZTstLXNpZGViYXItdmlzaWJpbGl0eS10aW1lOjBtc30uY29udGFpbmVye2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MTAwJTtncmlkLXRlbXBsYXRlLXJvd3M6YXV0byAxZnIgYXV0bzttaW4taGVpZ2h0OjEwMHZoO21pbi13aWR0aDowO3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246cGFkZGluZy1sZWZ0IHZhcigtLXNpZGViYXItdHJhbnNpdGlvbi10aW1lKSB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tZm4pLHdpZHRoIHZhcigtLXNpZGViYXItdHJhbnNpdGlvbi10aW1lKSB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tZm4pO3dpZHRoOjEwMCU7d2lsbC1jaGFuZ2U6cGFkZGluZy1sZWZ0LHdpZHRofS5jb250YWluZXIsLmNvbnRlbnR7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9Omhvc3QoW3NpZGViYXJQb3NpdGlvbj1sZWZ0XVtzaWRlYmFyT3BlbmVkXTpub3QoW3NpZGViYXJNb2RlT3Zlcl0pKSAuY29udGFpbmVye3BhZGRpbmctbGVmdDp2YXIoLS1zaWRlYmFyLXNpemUsMCk7d2lkdGg6Y2FsYygxMDAlIC0gbWluKHZhcigtLXNpZGViYXItc2l6ZSwgMCksIDEwMCUsIDEwMHZ3KSl9Omhvc3QoW2JlZm9yZUluaXRdKSAuY29udGFpbmVye3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9YDsiLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgbWFwUHhUb051bWJlciwgc2lnbmFsIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmludGVyZmFjZSBTdGF0ZUNvbGxlY3Rpb248VD4ge1xuICBhY3RpdmU/OiBIVE1MRWxlbWVudDtcbiAgcmVnaXN0ZXJlZDogVDtcbn1cblxuaW50ZXJmYWNlIFNpZGViYXJTdGF0ZSB7XG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JztcbiAgb3BlbmVkOiBib29sZWFuO1xuICBvdmVybGF5TW9kZTogc3RyaW5nO1xuICBoaWRlVW50aWxUcmFuc2l0aW9uOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSGVhZGVyU3RhdGUge1xuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHdpdGhDb250YWluZXI6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBTdWJIZWFkZXJTdGF0ZSB7XG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgbmF2U3RhdGUgPSB7XG4gIHNpZGViYXI6IHNpZ25hbDxTaWRlYmFyU3RhdGU+KCksXG4gIGhlYWRlcjogc2lnbmFsPEhlYWRlclN0YXRlPigpLFxuICBzdWJoZWFkZXI6IHNpZ25hbDxTdWJIZWFkZXJTdGF0ZT4oKSxcbiAgc2lkZWJhclNpemU6IHNpZ25hbDxudW1iZXIgfCBzdHJpbmc+KDM1MCksXG4gIGFjdGl2ZUJyZWFrcG9pbnQ6IHNpZ25hbDxzdHJpbmc+KG51bGwpLFxuICBpbnZlcnNlOiBzaWduYWw8J2hlYWRlcicgfCAnc2lkZWJhcicgfCBudWxsPihudWxsKSxcbiAgcHJlZmVyU2lkZWJhcjogc2lnbmFsPCdvcGVuZWQnIHwgJ2Nsb3NlZCcgfCBudWxsPihudWxsKSxcbiAgd2l0aGluTW9iaWxlQnJlYWtwb2ludDogc2lnbmFsKGZhbHNlKSxcbn07XG5cbi8vIFVzZWQgdG8gdHJhY2sgdGhlIHN0YXRlIG9mIGFueSBudW1iZXIgb2YgaW5zdGFuY2VzIG9mIHRoZXNlIG5hdiBlbGVtZW50cyBvbiBhIHBhZ2VcbmNvbnN0IGNvbGxlY3Rpb25zID0ge1xuICBzaWRlYmFyOiB7XG4gICAgYWN0aXZlOiBudWxsLFxuICAgIHJlZ2lzdGVyZWQ6IG5ldyBNYXA8SFRNTEVsZW1lbnQsIFNpZGViYXJTdGF0ZT4oKSxcbiAgfSxcbiAgaGVhZGVyOiB7XG4gICAgYWN0aXZlOiBudWxsLFxuICAgIHJlZ2lzdGVyZWQ6IG5ldyBNYXA8SFRNTEVsZW1lbnQsIEhlYWRlclN0YXRlPigpLFxuICB9LFxuICBzdWJoZWFkZXI6IHtcbiAgICBhY3RpdmU6IG51bGwsXG4gICAgcmVnaXN0ZXJlZDogbmV3IE1hcDxIVE1MRWxlbWVudCwgU3ViSGVhZGVyU3RhdGU+KCksXG4gIH0sXG59O1xuXG4vLyBSZW1vdmVzIGFuIGVsZW1lbnQgZnJvbSB0cmFja2luZy4gSWYgdGhlcmUgYXJlIG90aGVycyByZWdpc3RlcmVkLCB0aGUgbmV4dCBvbmUgdXAgaXMgbWFkZSB0aGUgYWN0aXZlIG9uZVxuZXhwb3J0IGNvbnN0IGRlbGV0ZU5hdkVsZW1lbnRTdGF0ZSA9IChjb2xsZWN0aW9uTmFtZTogc3RyaW5nLCBlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuICBjb25zdCBjb2xsZWN0aW9uID0gY29sbGVjdGlvbnNbY29sbGVjdGlvbk5hbWVdIGFzIFN0YXRlQ29sbGVjdGlvbjxhbnk+O1xuICBjb2xsZWN0aW9uLnJlZ2lzdGVyZWQuZGVsZXRlKGVsZW1lbnQpO1xuICBpZiAoY29sbGVjdGlvbi5hY3RpdmUgPT09IGVsZW1lbnQpIHtcbiAgICBjb25zdCBuZXdBY3RpdmUgPSBjb2xsZWN0aW9uLnJlZ2lzdGVyZWQua2V5cygpLm5leHQoKS52YWx1ZTtcbiAgICBjb2xsZWN0aW9uLmFjdGl2ZSA9IG5ld0FjdGl2ZTtcbiAgICBuYXZTdGF0ZVtjb2xsZWN0aW9uTmFtZV0uc2V0KGNvbGxlY3Rpb24ucmVnaXN0ZXJlZC5nZXQobmV3QWN0aXZlKSk7XG4gIH1cbn07XG5cbi8vIFVwZGF0ZXMgdGhlIHN0YXRlIG9mIGEgdHJhY2tlZCBuYXYgZWxlbWVudC4gSWYgaXQgaXMgdGhlIGFjdGl2ZSBlbGVtZW50IGVtaXRzIHRoZSBjaGFuZ2UgdG8gb3RoZXIgYWN0aXZlIGNvbXBvbmVudHNcbmV4cG9ydCBjb25zdCB1cGRhdGVOYXZFbGVtZW50U3RhdGUgPSAoY29sbGVjdGlvbk5hbWU6IHN0cmluZywgZWxlbWVudDogSFRNTEVsZW1lbnQsIHN0YXRlOiBhbnkpID0+IHtcbiAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zW2NvbGxlY3Rpb25OYW1lXSBhcyBTdGF0ZUNvbGxlY3Rpb248YW55PjtcbiAgaWYgKCFjb2xsZWN0aW9uLmFjdGl2ZSkge1xuICAgIGNvbGxlY3Rpb24uYWN0aXZlID0gZWxlbWVudDtcbiAgfVxuICBpZiAoY29sbGVjdGlvbi5hY3RpdmUgPT09IGVsZW1lbnQpIHtcbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBuYXZTdGF0ZVtjb2xsZWN0aW9uTmFtZV0uZ2V0KCk7XG4gICAgLy8gU2luY2Ugd2UncmUgZGVhbGluZyB3aXRoIG5lc3RlZCBwcm9wcyBoZXJlLCBjaGVjayBpZiBhbnl0aGluZyBoYXMgYWN0dWFsbHkgY2hhbmdlZFxuICAgIGNvbnN0IG5lc3RlZE9iamVjdFZhbHVlQ2hhbmdlZCA9IE9iamVjdC5rZXlzKHN0YXRlKS5zb21lKFxuICAgICAgKGtleSkgPT4gY3VycmVudFN0YXRlPy5ba2V5XSAhPT0gc3RhdGU/LltrZXldXG4gICAgKTtcbiAgICAvLyBPbmx5IHVwZGF0ZSBpZiBhbnkgYWN0aXZlIGNvbGxlY3Rpb24gdmFsdWVzIGhhdmUgY2hhbmdlZFxuICAgIGlmIChuZXN0ZWRPYmplY3RWYWx1ZUNoYW5nZWQpIHtcbiAgICAgIG5hdlN0YXRlW2NvbGxlY3Rpb25OYW1lXS5zZXQoc3RhdGUpO1xuICAgIH1cbiAgfVxuICBjb2xsZWN0aW9uLnJlZ2lzdGVyZWQuc2V0KGVsZW1lbnQsIHN0YXRlKTtcbn07XG5cbi8vIFJldHVybnMgdGhlIGN1cnJlbnQgYWN0aXZlIGJyZWFrcG9pbnQgdmFsdWUgYXMgYSBzdHJpbmdcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50QnJlYWtwb2ludCA9ICh3OiBXaW5kb3cpID0+IHtcbiAgY29uc3Qgd2lkdGggPSB3LmlubmVyV2lkdGg7XG4gIGNvbnN0IHNtID0gbWFwUHhUb051bWJlcihjb25maWcuZ3JpZC5icmVha3BvaW50LnNtKTtcbiAgY29uc3QgbWQgPSBtYXBQeFRvTnVtYmVyKGNvbmZpZy5ncmlkLmJyZWFrcG9pbnQubWQpO1xuICBjb25zdCBsZyA9IG1hcFB4VG9OdW1iZXIoY29uZmlnLmdyaWQuYnJlYWtwb2ludC5sZyk7XG4gIGNvbnN0IHhsID0gbWFwUHhUb051bWJlcihjb25maWcuZ3JpZC5icmVha3BvaW50LnhsKTtcbiAgY29uc3QgeHhsID0gbWFwUHhUb051bWJlcihjb25maWcuZ3JpZC5icmVha3BvaW50Lnh4bCk7XG4gIGxldCBicmVha3BvaW50ID0gJ3hzJztcbiAgaWYgKHdpZHRoID49IHNtICYmIHdpZHRoIDwgbWQpIHtcbiAgICBicmVha3BvaW50ID0gJ3NtJztcbiAgfSBlbHNlIGlmICh3aWR0aCA+PSBtZCAmJiB3aWR0aCA8IGxnKSB7XG4gICAgYnJlYWtwb2ludCA9ICdtZCc7XG4gIH0gZWxzZSBpZiAod2lkdGggPj0gbGcgJiYgd2lkdGggPCB4bCkge1xuICAgIGJyZWFrcG9pbnQgPSAnbGcnO1xuICB9IGVsc2UgaWYgKHdpZHRoID49IHhsICYmIHdpZHRoIDwgeHhsKSB7XG4gICAgYnJlYWtwb2ludCA9ICd4bCc7XG4gIH0gZWxzZSBpZiAod2lkdGggPj0geHhsKSB7XG4gICAgYnJlYWtwb2ludCA9ICd4eGwnO1xuICB9XG4gIHJldHVybiBicmVha3BvaW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGJlbG93TW9iaWxlQnJlYWtwb2ludCA9IChhY3RpdmVCcmVha3BvaW50OiBzdHJpbmcsIG1vYmlsZUJyZWFrcG9pbnQ6IHN0cmluZykgPT4ge1xuICBsZXQgYnJlYWtwb2ludHMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJ3h4bCddO1xuICBicmVha3BvaW50cyA9IGJyZWFrcG9pbnRzLnNsaWNlKDAsIGJyZWFrcG9pbnRzLmluZGV4T2YobW9iaWxlQnJlYWtwb2ludCkpO1xuICByZXR1cm4gYnJlYWtwb2ludHMuaW5jbHVkZXMoYWN0aXZlQnJlYWtwb2ludCk7XG59O1xuIiwgImltcG9ydCB7IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgU2lnbmFsLCBTaWduYWxWYWx1ZXMsIGNvbXB1dGVkLCBpc1NzciB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBNdGVFbGVtZW50IH0gZnJvbSAnLi4vYmFzZS1jbGFzc2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBTaWduYWxTdGF0ZUNvbnRyb2xsZXJPcHRpb25zIHtcbiAgd2FpdFVudGlsRmlyc3RVcGRhdGU/OiBib29sZWFuO1xuICBvbj86ICdzZXJ2ZXInIHwgJ2NsaWVudCcgfCAnYm90aCc7XG59XG5cbi8qKlxuICogQmluZHMgYW4gZWxlbWVudCB0byBhIHNpZ25hbC4gVGhlIGVsZW1lbnQgd2lsbCBub3cgcmVxdWVzdCBhbiB1cGRhdGVcbiAqIGFueSB0aW1lIHRoZSBzaWduYWwgZW1pdHMgYSBuZXcgdmFsdWUuIElmIHByb3ZpZGVkIHRoZSBjYWxsYmFjayB3aWxsXG4gKiBiZSBjYWxsZWQgYmVmb3JlIHRoZSB1cGRhdGUgaXMgcmVxdWVzdGVkLlxuICovXG5leHBvcnQgY2xhc3MgU2lnbmFsU3RhdGVDb250cm9sbGVyPFxuICBTIGV4dGVuZHNcbiAgICB8IFtTaWduYWw8VDE+XVxuICAgIHwgW1NpZ25hbDxUMT4sIFNpZ25hbDxUMj5dXG4gICAgfCBbU2lnbmFsPFQxPiwgU2lnbmFsPFQyPiwgU2lnbmFsPFQzPl1cbiAgICB8IFtTaWduYWw8VDE+LCBTaWduYWw8VDI+LCBTaWduYWw8VDM+LCBTaWduYWw8VDQ+XVxuICAgIHwgW1NpZ25hbDxUMT4sIFNpZ25hbDxUMj4sIFNpZ25hbDxUMz4sIFNpZ25hbDxUND4sIFNpZ25hbDxUNT5dXG4gICAgfCBbU2lnbmFsPFQxPiwgU2lnbmFsPFQyPiwgU2lnbmFsPFQzPiwgU2lnbmFsPFQ0PiwgU2lnbmFsPFQ1PiwgU2lnbmFsPFQ2Pl1cbiAgICB8IFtTaWduYWw8VDE+LCBTaWduYWw8VDI+LCBTaWduYWw8VDM+LCBTaWduYWw8VDQ+LCBTaWduYWw8VDU+LCBTaWduYWw8VDY+LCBTaWduYWw8VDc+XVxuICAgIHwgW1xuICAgICAgICBTaWduYWw8VDE+LFxuICAgICAgICBTaWduYWw8VDI+LFxuICAgICAgICBTaWduYWw8VDM+LFxuICAgICAgICBTaWduYWw8VDQ+LFxuICAgICAgICBTaWduYWw8VDU+LFxuICAgICAgICBTaWduYWw8VDY+LFxuICAgICAgICBTaWduYWw8VDc+LFxuICAgICAgICBTaWduYWw8VDg+XG4gICAgICBdLFxuICBUMSA9IGFueSxcbiAgVDIgPSBhbnksXG4gIFQzID0gYW55LFxuICBUNCA9IGFueSxcbiAgVDUgPSBhbnksXG4gIFQ2ID0gYW55LFxuICBUNyA9IGFueSxcbiAgVDggPSBhbnlcbj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGhvc3Q6IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgJiBNdGVFbGVtZW50LFxuICAgIHByaXZhdGUgc2lnbmFsczogUyxcbiAgICBwcml2YXRlIGNhbGxiYWNrPzogKHN0YXRlOiBTaWduYWxWYWx1ZXM8Uz4pID0+IHZvaWQsXG4gICAgcHJpdmF0ZSBvcHRpb25zPzogU2lnbmFsU3RhdGVDb250cm9sbGVyT3B0aW9uc1xuICApIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7IHdhaXRVbnRpbEZpcnN0VXBkYXRlOiB0cnVlLCBvbjogJ2NsaWVudCcsIC4uLnRoaXMub3B0aW9ucyB9O1xuICAgIHRoaXMuaG9zdC5hZGRDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5vbiAhPT0gJ2NsaWVudCcgJiYgaXNTc3IoKSkge1xuICAgICAgLy8gRXhlYyBldmVudHMgb25jZSBkdXJpbmcgc3NyXG4gICAgICBjb21wdXRlZCh0aGlzLnNpZ25hbHMsIChyKSA9PiByKS5zdWJzY3JpYmUoKHIpID0+IHtcbiAgICAgICAgdGhpcy5jYWxsYmFjaz8uKHIpO1xuICAgICAgfSkoKTtcbiAgICB9XG4gIH1cblxuICBob3N0Q29ubmVjdGVkKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMud2FpdFVudGlsRmlyc3RVcGRhdGUpIHtcbiAgICAgIHRoaXMuaG9zdC51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0U3ViKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0U3ViKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0U3ViKCkge1xuICAgIHRoaXMuaG9zdC5zdWJzLnB1c2goXG4gICAgICBjb21wdXRlZCh0aGlzLnNpZ25hbHMsIChyKSA9PiByKS5zdWJzY3JpYmUoKHIpID0+IHtcbiAgICAgICAgdGhpcy5jYWxsYmFjaz8uKHIpO1xuICAgICAgICB0aGlzLmhvc3QucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tYmFja2dyb3VuZDp2YXIoLS1tdGUtc3VyZmFjZS0yKTstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTEpOy0tYm9yZGVyOnNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3IpOy0tY29sb3I6dmFyKC0tbXRlLWluay0xKTstLXBhZGRpbmcteDpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKTstLXBhZGRpbmcteTpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKTstLWhlYWRlci1wYWRkaW5nLXk6dmFyKC0tcGFkZGluZy15KTstLWdhcDp2YXIoLS1tdGUtc3BhY2UtbWQpOy0tdHJhbnNpdGlvbi10aW1lOjIwMG1zIC0tdHJhbnNpdGlvbi1mbjpjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2JvcmRlci1ib3R0b206dmFyKC0tYm9yZGVyKTtjb2xvcjp2YXIoLS1jb2xvcik7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9Lm92ZXJmbG93LWNvbnRhaW5lcnthbGlnbi1pdGVtczppbmhlcml0O2Rpc3BsYXk6aW5oZXJpdDtmbGV4LWRpcmVjdGlvbjppbmhlcml0O2p1c3RpZnktY29udGVudDppbmhlcml0O292ZXJmbG93LXg6YXV0bztwYWRkaW5nOnZhcigtLXBhZGRpbmcteSkgdmFyKC0tcGFkZGluZy14KTt3aWR0aDppbmhlcml0fTpob3N0OmJlZm9yZXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2JvcmRlci1ib3R0b206dmFyKC0tYm9yZGVyKTtib3R0b206LTFweDtjb250ZW50OlwiXCI7bGVmdDpjYWxjKHZhcigtLXNpZGViYXItc2l6ZSkqLTEpO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3dpZHRoOnZhcigtLXNpZGViYXItc2l6ZSl9Omhvc3QoW2JlZm9yZUluaXRdKXstLXRyYW5zaXRpb24tdGltZTowbXN9Omhvc3QoW2FwcGxpZWRwcmVzZXQ9Y3hdOm5vdChbaW52ZXJzZV0pKXstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktYmFzZS1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtYy1yZ2IpKTstLWJvcmRlcjpub25lOy0tYnV0dG9uLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFyay1yZ2IpKTstLWJ1dHRvbi1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLWMtcmdiKSl9Omhvc3QoW2FwcGxpZWRwcmVzZXQ9cnhdOm5vdChbaW52ZXJzZV0pKXstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFyay1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWRhcmstYy1yZ2IpKTstLWJvcmRlcjpub25lOy0tYnV0dG9uLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFyay1yZ2IpKTstLWJ1dHRvbi1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLWMtcmdiKSl9Lm1lbnV7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDtmbGV4LWdyb3c6MDtmbGV4LXNocmluazowO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luLXJpZ2h0Om1heChjYWxjKHZhcigtLWdhcCkvMiksdmFyKC0tbXRlLXNwYWNlLXhzKSk7bWF4LXdpZHRoOjEwMHB4O29wYWNpdHk6MTtvcmRlcjoxO3RyYW5zaXRpb246bWF4LXdpZHRoIHZhcigtLXRyYW5zaXRpb24tdGltZSkgdmFyKC0tdHJhbnNpdGlvbi1mbiksb3BhY2l0eSB2YXIoLS10cmFuc2l0aW9uLXRpbWUpIHZhcigtLXRyYW5zaXRpb24tZm4pLG1hcmdpbi1yaWdodCB2YXIoLS10cmFuc2l0aW9uLXRpbWUpIHZhcigtLXRyYW5zaXRpb24tZm4pLHZpc2liaWxpdHkgdmFyKC0tdHJhbnNpdGlvbi10aW1lKSB2YXIoLS10cmFuc2l0aW9uLWZuKTt2aXNpYmlsaXR5OnZpc2libGU7d2lsbC1jaGFuZ2U6bWF4LXdpZHRoLG9wYWNpdHksbWFyZ2luLXJpZ2h0fTpob3N0KFtoaWRlTWVudVVudGlsVHJhbnNpdGlvbl0pIC5tZW51e3RyYW5zaXRpb246bm9uZX06aG9zdCAubWVudTpub3QoLnZpc2libGUpe2Rpc3BsYXk6bm9uZTttYXJnaW4tcmlnaHQ6MDttYXgtaGVpZ2h0OjA7bWF4LXdpZHRoOjA7b3BhY2l0eTowO3Zpc2liaWxpdHk6aGlkZGVufS5sb2dvLWNvbnRhaW5lcntjb2xvcjppbmhlcml0O2Rpc3BsYXk6aW5saW5lLWZsZXg7ZmxleC1ncm93OjA7bWFyZ2luLXJpZ2h0OnZhcigtLWdhcCk7b3JkZXI6Mjt0ZXh0LWRlY29yYXRpb246bm9uZX0ubG9nbywubmFtZXthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzowO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm5hbWV7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC13ZWlnaHQpO2ZvbnQtd2VpZ2h0OjcwMDtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItbGluZS1oZWlnaHQpO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm93cmFwfS5uYW1lLnZpc2libGV7bWFyZ2luLWxlZnQ6dmFyKC0tZ2FwKX0uZW5kLC5zdGFydHthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O2ZsZXgtYmFzaXM6MTAwJTtmbGV4LWRpcmVjdGlvbjpyb3c7Z2FwOnZhcigtLWdhcCl9LnN0YXJ0e2ZsZXgtZ3JvdzowO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O21hcmdpbi1yaWdodDp2YXIoLS1nYXApO29yZGVyOjN9LmVuZHtmbGV4LWdyb3c6MTtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7b3JkZXI6NH06aG9zdChbd2l0aENlbnRlckxvZ29dKSAubG9nby1jb250YWluZXJ7bWFyZ2luLWxlZnQ6dmFyKC0tZ2FwKTtvcmRlcjozfTpob3N0KFt3aXRoQ2VudGVyTG9nb10pIC5zdGFydHtmbGV4LWdyb3c6MTttYXJnaW4tcmlnaHQ6MDtvcmRlcjoyfS5weC1sb2dve2hlaWdodDozMnB4O3dpZHRoOjkycHh9LmN4LWxvZ297aGVpZ2h0OjM2cHg7d2lkdGg6MTA0cHh9LnJ4LWxvZ297aGVpZ2h0OjM2cHg7d2lkdGg6MTM2cHh9YDsiLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYC5jb250YWluZXJ7d2lkdGg6MTAwJX0uZmxleHthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvd306aG9zdChbd2l0aENvbnRhaW5lcl0pIC5ncmlkLWNvbnRhaW5lcntib3gtc2l6aW5nOmJvcmRlci1ib3g7LS1ndXR0ZXIteDp2YXIoLS1tdGUtZ3V0dGVyLXgsMS41cmVtKTstLWd1dHRlci15OnZhcigtLW10ZS1ndXR0ZXIteSwwKTttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO3BhZGRpbmctbGVmdDpjYWxjKHZhcigtLWd1dHRlci14KSoxKTtwYWRkaW5nLXJpZ2h0OmNhbGModmFyKC0tZ3V0dGVyLXgpKjEpO3dpZHRoOjEwMCV9QG1lZGlhIChtaW4td2lkdGg6NDgwcHgpezpob3N0KFt3aXRoQ29udGFpbmVyXSkgLmdyaWQtY29udGFpbmVye21heC13aWR0aDo3NjhweH19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpezpob3N0KFt3aXRoQ29udGFpbmVyXSkgLmdyaWQtY29udGFpbmVye21heC13aWR0aDoxMDI0cHh9fUBtZWRpYSAobWluLXdpZHRoOjEwMjRweCl7Omhvc3QoW3dpdGhDb250YWluZXJdKSAuZ3JpZC1jb250YWluZXJ7bWF4LXdpZHRoOjEyODBweH19QG1lZGlhIChtaW4td2lkdGg6MTI4MHB4KXs6aG9zdChbd2l0aENvbnRhaW5lcl0pIC5ncmlkLWNvbnRhaW5lcnttYXgtd2lkdGg6MTQ0MHB4fX1AbWVkaWEgKG1pbi13aWR0aDoxNTM2cHgpezpob3N0KFt3aXRoQ29udGFpbmVyXSkgLmdyaWQtY29udGFpbmVye21heC13aWR0aDoxNDQwcHh9fWA7IiwgbnVsbCwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWJhY2tncm91bmQ6dmFyKC0tbXRlLXN1cmZhY2UtMik7LS1jb2xvcjp2YXIoLS1tdGUtaW5rLTEpOy0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMSk7LS1wYWRkaW5nLXg6dmFyKC0tbXRlLXNwYWNlLXNtKTstLXBhZGRpbmcteTp2YXIoLS1tdGUtc3BhY2Utc20pOy0taGVhZGVyLXBhZGRpbmcteTp2YXIoLS1wYWRkaW5nLXkpOy0tZ2FwOnZhcigtLW10ZS1zcGFjZS1zbSk7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtjb2xvcjp2YXIoLS1jb2xvcik7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztnYXA6dmFyKC0tZ2FwKTtvdmVyZmxvdy14OmF1dG87cGFkZGluZzp2YXIoLS1wYWRkaW5nLXkpIHZhcigtLXBhZGRpbmcteCk7d2lkdGg6MTAwJX06aG9zdChbYXBwbGllZHByZXNldD1jeF0pey0tcGFkZGluZy15OmNhbGModmFyKC0tbXRlLXNwYWNlLXhzKSArIHZhcigtLW10ZS1zcGFjZS14eHMpKX06aG9zdChbYXBwbGllZHByZXNldD1jeF06bm90KFtpbnZlcnNlXSkpey0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFyay1jLXJnYikpOy0tYnV0dG9uLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFyay1yZ2IpKTstLWJ1dHRvbi1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLWMtcmdiKSl9LmVuZCwuc3RhcnR7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1ncm93OjE7Z2FwOnZhcigtLWdhcCl9LnN0YXJ0e2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5lbmR7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLXNpemU6dmFyKC0tc2lkZWJhci1zaXplKTstLWZhbGxiYWNrLWJvcmRlci1yaWdodDpzb2xpZCAxcHg7Ym9yZGVyLWJvdHRvbTp2YXIoLS1zaWRlYmFyLWJvcmRlci1ib3R0b20saW5pdGlhbCk7Ym9yZGVyLWxlZnQ6dmFyKC0tc2lkZWJhci1ib3JkZXItbGVmdCxpbml0aWFsKTtib3JkZXItcmlnaHQ6dmFyKC0tc2lkZWJhci1ib3JkZXItcmlnaHQsaW5pdGlhbCk7Ym9yZGVyLXRvcDp2YXIoLS1zaWRlYmFyLWJvcmRlci10b3AsaW5pdGlhbCk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcix2YXIoLS1tdGUtYm9yZGVyLTEpKTtib3R0b206dmFyKC0tc2lkZWJhci1wb3NpdGlvbi1ib3R0b20sdW5zZXQpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO2hlaWdodDptaW4odmFyKC0tc2lkZWJhci1oZWlnaHQsMTAwJSksMTAwJSk7bGVmdDp2YXIoLS1zaWRlYmFyLXBvc2l0aW9uLWxlZnQsdW5zZXQpO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246c3RpY2t5O3JpZ2h0OnZhcigtLXNpZGViYXItcG9zaXRpb24tcmlnaHQsdW5zZXQpO3RvcDp2YXIoLS1zaWRlYmFyLXBvc2l0aW9uLXRvcCx1bnNldCk7dG9wOjA7dHJhbnNmb3JtOnZhcigtLXNpZGViYXItdHJhbnNmb3JtLGluaXRpYWwpO3RyYW5zaXRpb246dmlzaWJpbGl0eSB2YXIoLS1zaWRlYmFyLXZpc2liaWxpdHktdGltZSx2YXIoLS10cmFuc2l0aW9uLXRpbWUpKSB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tZm4sdmFyKC0tdHJhbnNpdGlvbi1mbikpLHRyYW5zZm9ybSB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tdGltZSx2YXIoLS10cmFuc2l0aW9uLXRpbWUpKSB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tZm4sdmFyKC0tdHJhbnNpdGlvbi1mbikpO3Zpc2liaWxpdHk6dmFyKC0tc2lkZWJhci12aXNpYmlsaXR5LGhpZGRlbik7d2lkdGg6bWluKHZhcigtLXNpZGViYXItd2lkdGgsLS1zaXplLDM1MHB4KSwxMDAlKTt6LWluZGV4OnZhcigtLW5hdi16LWluZGV4KTt6LWluZGV4OjEwMDB9Omhvc3QoW2JlZm9yZUluaXRdOm5vdChbcHJlZmVyU2lkZWJhcj1jbG9zZWRdKTpub3QoW2hhc09wZW5lZE9uY2VdKSkgLnBhbmVse3RyYW5zaXRpb246bm9uZX06aG9zdChbYXJpYS1oaWRkZW49dHJ1ZV0pe3Zpc2liaWxpdHk6aGlkZGVufTpob3N0IC5wYW5lbHstLXNpZGViYXItaGVpZ2h0OjEwMHZoIWltcG9ydGFudDtib3JkZXItcmlnaHQ6bm9uZSFpbXBvcnRhbnQ7aGVpZ2h0OjEwMHZoIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czphdXRvfTpob3N0KFtiZWZvcmVJbml0XSkgLnBhbmVse3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9Omhvc3QoW3Bvc2l0aW9uPWxlZnRdKSAucGFuZWwsOmhvc3QoW3Bvc2l0aW9uPXJpZ2h0XSkgLnBhbmVse2hlaWdodDoxMDAlO3dpZHRoOnZhcigtLXNpemUpfS5oZWFkZXJ7YWxpZ24taXRlbXM6Y2VudGVyO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJpZ2h0OnZhcigtLXNpZGViYXItYm9yZGVyLXJpZ2h0LHZhcigtLWZhbGxiYWNrLWJvcmRlci1yaWdodCkpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IsdmFyKC0tbXRlLWJvcmRlci0xKSk7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7bWluLWhlaWdodDptYXgoLW1vei1maXQtY29udGVudCx2YXIoLS1tdGUtbmF2LWhlYWRlci1oZWlnaHQsNTdweCkpO21pbi1oZWlnaHQ6bWF4KGZpdC1jb250ZW50LHZhcigtLW10ZS1uYXYtaGVhZGVyLWhlaWdodCw1N3B4KSk7cGFkZGluZzpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKX06aG9zdChbaGVhZGVySW52ZXJzZV0pIC5oZWFkZXJ7LS1iYWNrZ3JvdW5kOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tY29sb3I6dmFyKC0tbXRlLWluay1pbnZlcnNlKTstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7Y29sb3I6dmFyKC0tY29sb3IpO3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZH0uY29udGVudC1jb250YWluZXIsLmZvb3Rlcntib3JkZXItcmlnaHQ6dmFyKC0tc2lkZWJhci1ib3JkZXItcmlnaHQsdmFyKC0tZmFsbGJhY2stYm9yZGVyLXJpZ2h0KSk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcix2YXIoLS1tdGUtYm9yZGVyLTEpKX0uZmxleC1zcGFjZXJ7ZmxleC1ncm93OjF9Omhvc3QoW3Bvc2l0aW9uPXRvcF0pIC5wYW5lbHtib3JkZXItYm90dG9tOnZhcigtLXNpZGViYXItYm9yZGVyKTtib3JkZXItcmlnaHQ6bm9uZX06aG9zdChbcG9zaXRpb249cmlnaHRdKSAucGFuZWx7Ym9yZGVyLWxlZnQ6dmFyKC0tc2lkZWJhci1ib3JkZXIpO2JvcmRlci1yaWdodDpub25lfTpob3N0KFtwb3NpdGlvbj1ib3R0b21dKSAucGFuZWx7Ym9yZGVyLXJpZ2h0Om5vbmU7Ym9yZGVyLXRvcDp2YXIoLS1zaWRlYmFyLWJvcmRlcil9Omhvc3QoW3Bvc2l0aW9uPWxlZnRdKSAucGFuZWx7Ym9yZGVyLXJpZ2h0OnZhcigtLXNpZGViYXItYm9yZGVyKX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgYDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tYmFja2dyb3VuZDp2YXIoLS1tdGUtc3VyZmFjZS0yKTstLWNvbG9yOnZhcigtLW10ZS1pbmstMSk7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0xKTstLWJvcmRlcjpzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2JvcmRlci10b3A6dmFyKC0tYm9yZGVyKTtjb2xvcjp2YXIoLS1jb2xvcik7ZGlzcGxheTpibG9jaztvdmVyZmxvdy14OmF1dG87d2lkdGg6MTAwJX06aG9zdChbYXBwbGllZHByZXNldD1jeF06bm90KFtpbnZlcnNlXSkpLDpob3N0KFthcHBsaWVkcHJlc2V0PXJ4XTpub3QoW2ludmVyc2VdKSl7LS1iYWNrZ3JvdW5kOnZhcigtLW10ZS1zdXJmYWNlLTQpOy0tY29sb3I6dmFyKC0tbXRlLWluay01KTstLWJvcmRlcjpub25lfWA7IiwgbnVsbCwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtkaXNwbGF5OmNvbnRlbnRzfXVse2Rpc3BsYXk6ZmxleDtsaXN0LXN0eWxlLXR5cGU6bm9uZTttYXJnaW46MDtwYWRkaW5nOjB9Omhvc3QoW2RpcmVjdGlvbj1jb2x1bW5SZXZlcnNlXSkgdWwsOmhvc3QoW2RpcmVjdGlvbj1jb2x1bW5dKSB1bHthbGlnbi1pdGVtczpzdHJldGNoO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn06aG9zdChbZGlyZWN0aW9uPXJvd1JldmVyc2VdKSB1bCw6aG9zdChbZGlyZWN0aW9uPXJvd10pIHVse2FsaWduLWl0ZW1zOmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpyb3d9YDsiLCBudWxsLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0taW5kZW50LXNpemU6dmFyKC0tbXRlLXNwYWNlLWxnKTstLWhlYWRlci1jb2xvcjp2YXIoLS1tdGUtaW5rLTIpOy0taGVhZGVyLW1hcmdpbjp2YXIoLS1tdGUtc3BhY2UtbWQpO2Rpc3BsYXk6YmxvY2t9dWx7ZGlzcGxheTpibG9jaztsaXN0LXN0eWxlLXR5cGU6bm9uZTttYXJnaW46MDtwYWRkaW5nOjB9LmhlYWRlcntmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Y29sb3I6dmFyKC0taGVhZGVyLWNvbG9yKTtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tbGluZS1oZWlnaHQpO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXR9LmRlZmF1bHQtaGVhZGVye21hcmdpbi10b3A6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aHRtbCIsICJwcm9wZXJ0eSIsICJxdWVyeSIsICJzdGF0ZSIsICJjc3MiLCAic3R5bGVzIiwgImNzcyIsICJzdHlsZXMiLCAiaWZEZWZpbmVkIiwgImh0bWwiLCAicHJvcGVydHkiLCAicXVlcnkiLCAiaHRtbCIsICJzdHlsZXMiLCAicHJvcGVydHkiLCAicXVlcnkiLCAiaHRtbCIsICJpZkRlZmluZWQiLCAic3R5bGVzIiwgInByb3BlcnR5IiwgInN0YXRlIiwgInF1ZXJ5IiwgImNsYXNzTWFwIiwgImh0bWwiLCAicHJvcGVydHkiLCAiY3NzIiwgInN0eWxlcyIsICJuZXh0VW5pcXVlSWQiLCAiaHRtbCIsICJjbGFzc01hcCIsICJzdHlsZXMiLCAicHJvcGVydHkiLCAiY2xhc3NNYXAiLCAicHJvcGVydHkiLCAicXVlcnkiLCAic3RhdGUiLCAiY3NzIiwgInN0eWxlcyIsICJjb25maWciLCAic2VsZWN0b3JGYWN0b3J5IiwgImh0bWwiLCAibmV4dFVuaXF1ZUlkIiwgImNvbmZpZyIsICJzZWxlY3RvckZhY3RvcnkiLCAiaHRtbCIsICJjbGFzc01hcCIsICJzdHlsZXMiLCAicHJvcGVydHkiLCAic3RhdGUiLCAicXVlcnkiLCAiaHRtbCIsICJjc3MiLCAic3R5bGVzIiwgInByb3BlcnR5IiwgImh0bWwiLCAic3R5bGVzIiwgInByb3BlcnR5IiwgImh0bWwiLCAiY3NzIiwgInN0eWxlcyIsICJwcm9wZXJ0eSIsICJjbGFzc01hcCIsICJodG1sIiwgImNsYXNzTWFwIiwgInN0eWxlcyIsICJwcm9wZXJ0eSIsICJpZkRlZmluZWQiLCAiaHRtbCIsICJwcm9wZXJ0eSIsICJxdWVyeSIsICJldmVudE9wdGlvbnMiLCAiaHRtbCIsICJpZkRlZmluZWQiLCAic3R5bGVzIiwgInByb3BlcnR5IiwgInF1ZXJ5IiwgImV2ZW50T3B0aW9ucyIsICJpZkRlZmluZWQiLCAicHJvcGVydHkiLCAiaHRtbCIsICJjc3MiLCAic3R5bGVzIiwgImNvbmZpZyIsICJjb25maWciLCAiaHRtbCIsICJpZkRlZmluZWQiLCAic3R5bGVzIiwgInByb3BlcnR5IiwgImlmRGVmaW5lZCIsICJodG1sIiwgInByb3BlcnR5IiwgInF1ZXJ5IiwgImV2ZW50T3B0aW9ucyIsICJodG1sIiwgImlmRGVmaW5lZCIsICJzdHlsZXMiLCAicHJvcGVydHkiLCAicXVlcnkiLCAiZXZlbnRPcHRpb25zIiwgImNsYXNzTWFwIiwgImlmRGVmaW5lZCIsICJwcm9wZXJ0eSIsICJodG1sIiwgImNzcyIsICJzdHlsZXMiLCAiaHRtbCIsICJjbGFzc01hcCIsICJpZkRlZmluZWQiLCAic3R5bGVzIiwgInByb3BlcnR5Il0KfQo=
