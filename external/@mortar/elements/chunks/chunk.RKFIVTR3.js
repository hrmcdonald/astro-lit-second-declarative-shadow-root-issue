import {
  calculateDefaultPanelAnimation,
  calculateOverlayPlacements
} from "./chunk.SRHT6JKE.js";
import {
  MteIconRegistryService,
  mtrIconDotsHorizontal,
  mtrIconMenuRight
} from "./chunk.M5RJHYFW.js";
import {
  ButtonMixin,
  ClickOutsideController,
  DisabledMixin,
  MteElement,
  PortalController,
  ResponsiveValueConverter,
  RestoreFocusController,
  SlotController,
  SlotObserverMixin,
  StylePartsMixin,
  __decorateClass,
  config,
  defaultPortalAdapter,
  defineElement,
  eventEmitter,
  onUpdate,
  selectorFactory,
  styles3 as styles,
  styles7 as styles2
} from "./chunk.KVXAK6W4.js";

// src/atomic/menu/menu.element.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { property, query, queryAssignedElements, state } from "lit/decorators.js";

// src/atomic/menu/menu.styles.ts
import { css } from "lit";
var styles3 = css`:host{--z-index:var(--mte-z-index-20);--color:var(--mte-ink-1);--background:var(--mte-surface-2);--border-color:var(--mte-border-2);--radius:var(--mte-border-radius-md);--padding-y:var(--mte-space-xs);--padding-x:var(--mte-space-xs);--header-padding-y:calc(var(--padding-y) + var(--mte-space-xs) + var(--mte-space-xxs));--header-padding-x:calc(var(--padding-x) + var(--mte-space-sm) + var(--mte-space-xs));--gap:var(--mte-space-xs);--box-shadow:var(--mte-elevation-z1);pointer-events:auto}:host{display:block;pointer-events:none;position:absolute;z-index:1000}.menu{background:var(--background);border:1px solid var(--border-color);border-radius:var(--radius);box-shadow:var(--box-shadow);color:var(--color);display:none;flex-direction:column;gap:var(--gap);outline:none;overflow:hidden;overflow-y:auto;padding:var(--padding-y) var(--padding-x);pointer-events:auto;position:fixed;z-index:var(--z-index)}.header{border-bottom:2px solid var(--mte-border-1);display:none;margin:calc(var(--padding-y)*-1) calc(var(--padding-x)*-1) 0 calc(var(--padding-x)*-1);padding:var(--header-padding-y) var(--header-padding-x)}.header.has-content{display:initial}::slotted(mte-divider),mte-divider{margin:0 calc(var(--padding-x)*-1);width:calc(100% + var(--padding-x) + var(--padding-x))}`;

// src/atomic/menu/menu.element.ts
import {
  autoUpdate,
  computePosition,
  flip,
  hide,
  offset,
  shift
} from "@floating-ui/dom";
import anime from "animejs";
var nextUniqueId = 0;
var nextUniqueChildId = 0;
var MteMenu = class extends DisabledMixin(StylePartsMixin(MteElement)) {
  constructor() {
    super();
    this.id = `mte-menu--${nextUniqueId++}`;
    this.position = "bottom";
    this.placement = "start";
    this.triggerOn = "click";
    this.withoutCloseOnClickOutside = false;
    this.withoutCloseOnEscape = false;
    this.withoutPortal = false;
    this.ariaHidden = "true";
    this.role = "menu";
    this.isNestedMenu = false;
    this.animationDuration = config.animation.transitionDurationJs.short * 1e3;
    this.offset = 2;
    this.portalAdapter = defaultPortalAdapter;
    this.opened = false;
    this.visible = false;
    this.renderedPosition = null;
    this.hasHeader = false;
    this.preventNextFocusRestoration = false;
    /** Subscription callback to clear hover listeners */
    this.cleanupUpdateListeners = null;
    this.portalController = new PortalController(this);
    this.restoreFocusController = new RestoreFocusController(this);
    this.clickOutsideController = new ClickOutsideController(this, () => {
      if (this.withoutPortal) {
        this.handleCloseOnClickOutside();
      }
    });
    this.slotController = new SlotController(this, {
      updateOnChange: ["header"]
    });
    /** Triggers a floating-ui position recompute */
    this.updatePosition = () => {
      if (this.targetElement) {
        const [placement, fallbackPlacements] = calculateOverlayPlacements(
          this.position,
          this.placement
        );
        computePosition(this.targetElement, this.menuElem, {
          strategy: "fixed",
          placement,
          middleware: [
            shift({ padding: this.offset }),
            offset(this.offset),
            flip({ fallbackPlacements }),
            hide()
          ].filter((item) => item !== null)
        }).then(({ x, y, placement: placement2, middlewareData }) => {
          this.renderedPosition = placement2;
          const { referenceHidden } = middlewareData.hide;
          Object.assign(this.menuElem.style, {
            left: `${x}px`,
            top: `${y}px`,
            visibility: referenceHidden ? "hidden" : "visible"
          });
        });
      }
    };
    /** Proxies an event from a nested menu item up to any parent menus */
    this.handleNestedMenuOpened = (e) => {
      this.menuItemElems?.forEach((item) => {
        if (item !== e.target) {
          item?.closeChild();
        }
      });
      this.clickOutsideController.addTarget(e.detail);
      this._proxyNestedMenuOpened.emit(e.detail);
      e.stopPropagation();
    };
    /** Listens for a child menu item to be clicked */
    this.handleMenuItemClicked = (e) => {
      this._onSelect.emit({
        nativeEvent: e.detail,
        selected: e.detail.target,
        value: e.detail.target?.value
      });
      this.close();
      e.stopPropagation();
    };
    this.handleCloseOnClickOutside = () => {
      if (this.opened && !this.withoutCloseOnClickOutside) {
        this.close();
      }
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleGlobalKeyDown = this.handleGlobalKeyDown.bind(this);
    this.handleMenuItemClicked = this.handleMenuItemClicked.bind(this);
  }
  /** The first element currently in the header slot */
  get headerElementRef() {
    return this._headerElementRef;
  }
  set headerElementRef(newElem) {
    this._headerElementRef = newElem;
    if (newElem) {
      const existingId = this._headerElementRef?.getAttribute("id");
      const headerId = existingId ?? `${this.id}-${nextUniqueChildId++}`;
      this._headerElementRef?.setAttribute("id", headerId);
      this.ariaLabelledBy = headerId;
    } else {
      this.ariaLabelledBy = null;
    }
  }
  handleTriggerOnChange() {
    this._onTriggerChange.emit(this.triggerOn);
    this.updateTargetAriaIds();
  }
  handleA11yChange() {
    this.updateTargetAriaIds();
  }
  handleTargetChange() {
    this.updatePosition();
  }
  handleDisabledChange() {
    if (this.visible) {
      this.close();
    }
  }
  handleWithoutCloseOnEscape() {
    if (!this.withoutCloseOnEscape && this.visible) {
      document.addEventListener("keydown", this.handleGlobalKeyDown);
    } else if (this.visible) {
      document.removeEventListener("keydown", this.handleGlobalKeyDown);
    }
  }
  handlePositionChange() {
    this.updatePosition();
    this.renderedPosition = null;
  }
  firstUpdated() {
    if (!this.opened) {
      this.ariaHidden = "true";
    }
    this.updateTargetAriaIds();
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("menuItemClicked", this.handleMenuItemClicked);
    this.addEventListener("keydown", this.handleKeyDown);
    this.addEventListener("mousedown", this.handleMouseDown);
    this.slotController.watchSlots(["header", "default"]).subscribe((changes) => {
      if (changes?.has("header")) {
        this.hasHeader = this.slotController.check("header");
        if (this.headerElems?.length > 0) {
          this.headerElementRef = this.headerElems?.[0];
        }
      }
      if (!this.__firstUpdated && changes?.has("default")) {
        this.setCurrentItem(this.getCurrentItem());
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanupUpdateListeners?.();
    this.cleanupUpdateListeners = null;
    this.openAnimationRef?.remove();
    this.closeAnimationRef?.remove();
    document.removeEventListener("keydown", this.handleGlobalKeyDown);
  }
  /** Toggles the menu between open and closed states */
  toggle() {
    return this.visible ? this.close() : this.open();
  }
  /** Opens the menu with any defined delays */
  open() {
    return new Promise((resolve) => {
      if (!this.disabled && !this.visible && this.targetElement) {
        const openPromise = this.withoutPortal ? Promise.resolve() : this.portalController.appendToStack(this, {
          portalAdapter: this.portalAdapter,
          withInertBackdrop: this.isNestedMenu,
          closeOnClickOutsideHandler: this.handleCloseOnClickOutside
        });
        openPromise.then(() => {
          if (!this.cleanupUpdateListeners) {
            setTimeout(() => {
              this.cleanupUpdateListeners = autoUpdate(
                this.targetElement,
                this.menuElem,
                this.updatePosition
              );
            });
          }
          if (!this.opened) {
            this._onOpen.emit();
          }
          this.opened = true;
          this.ariaHidden = "false";
          this.targetElement?.setAttribute("aria-expanded", "true");
          if (this.menuElem) {
            this.menuElem.style.display = "flex";
            this.closeAnimationRef?.pause();
            this.openAnimationRef?.remove();
            this.openAnimationRef = anime({
              targets: this.menuElem,
              ...calculateDefaultPanelAnimation(this.renderedPosition, {
                fallbackPosition: this.position,
                fallbackPlacement: this.placement,
                action: "open",
                scaleX: 0.95,
                scaleY: 0.85
              }),
              opacity: {
                value: [0, 1],
                easing: "linear",
                duration: this.animationDuration / 2
              },
              easing: "easeOutElastic(.5, .75)",
              duration: this.animationDuration,
              complete: () => {
                resolve();
              }
            });
          } else {
            resolve();
          }
        });
      }
    }).then(() => {
      this.visible = true;
      this.openAnimationRef?.remove();
      this.openAnimationRef = null;
      this.restoreFocusController.setRestoreFocusTarget();
      this.clickOutsideController.listenForClicksOutsideOf(this.menuElem);
      this.addEventListener("nestedMenuOpened", this.handleNestedMenuOpened);
      if (!this.withoutCloseOnEscape) {
        document.addEventListener("keydown", this.handleGlobalKeyDown);
      }
      setTimeout(() => {
        this.initSelection();
      }, 50);
    });
  }
  /** Closes the tooltip with any defined delays */
  close() {
    return new Promise((resolve) => {
      if (this.opened) {
        this._onClose.emit();
      }
      this.opened = false;
      this.ariaHidden = "true";
      this.targetElement?.setAttribute("aria-expanded", "false");
      this.cleanupUpdateListeners?.();
      this.cleanupUpdateListeners = null;
      if (this.menuElem) {
        this.openAnimationRef?.pause();
        this.closeAnimationRef?.remove();
        this.closeAnimationRef = anime({
          targets: this.menuElem,
          ...calculateDefaultPanelAnimation(this.renderedPosition, {
            fallbackPosition: this.position,
            fallbackPlacement: this.placement,
            action: "close",
            scaleX: 0.95,
            scaleY: 0.85
          }),
          opacity: {
            value: [1, 0],
            easing: "linear",
            duration: this.animationDuration / 2
          },
          easing: "easeOutElastic(.5, .75)",
          duration: this.animationDuration,
          complete: () => {
            resolve();
          }
        });
      } else {
        resolve();
      }
    }).then(() => {
      this.visible = false;
      this.menuElem.style.display = "";
      this.closeAnimationRef?.remove();
      this.closeAnimationRef = null;
      this.portalController.removeFromStack();
      this.clickOutsideController.stopListening();
      this.removeEventListener("nestedMenuOpened", this.handleNestedMenuOpened);
      if (!this.preventNextFocusRestoration) {
        this.restoreFocusController.restoreFocus(true);
      } else {
        this.preventNextFocusRestoration = false;
      }
      if (!this.withoutCloseOnEscape) {
        document.removeEventListener("keydown", this.handleGlobalKeyDown);
      }
    });
  }
  handleGlobalKeyDown(event) {
    if (event.key === "Escape" || event.key === "Tab") {
      if (event.key === "Tab") {
        event.preventDefault();
      }
      if (this.isNestedMenu) {
        this.preventNextFocusRestoration = true;
      }
      this.close();
    }
  }
  handleKeyDown(event) {
    if (["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      const items = this.getAllItems();
      const activeItem = this.getCurrentItem();
      let index = activeItem ? items.indexOf(activeItem) : 0;
      if (activeItem.hasNestedMenu && event.key === "ArrowRight") {
        activeItem.openChild();
      }
      if (this.isNestedMenu && event.key === "ArrowLeft") {
        this.close();
      }
      if (items.length > 0) {
        event.preventDefault();
        event.stopPropagation();
        if (event.key === "ArrowDown") {
          index++;
        } else if (event.key === "ArrowUp") {
          index--;
        } else if (event.key === "Home") {
          index = 0;
        } else if (event.key === "End") {
          index = items.length - 1;
        }
        if (index < 0) {
          index = items.length - 1;
        }
        if (index > items.length - 1) {
          index = 0;
        }
        this.setCurrentItem(items[index]);
        items[index].focus();
      }
    }
  }
  handleMouseDown(event) {
    const target = event.target;
    if (this.isMenuItem(target)) {
      this.setCurrentItem(target);
    }
  }
  /** Resets tabindexes on slotted menu-items */
  initSelection() {
    const items = this.getAllItems();
    items.forEach((item, i) => {
      if (!item.disabled) {
        item.setAttribute("tabindex", i === 0 ? "0" : "-1");
        item.setAttribute("data-active", i === 0 ? "true" : "false");
        if (i === 0) {
          item.focus();
        }
      }
    });
  }
  isMenuItem(item) {
    if (item.tagName) {
      return item.tagName?.toLowerCase() === "mte-menu-item" || item.tagName?.toLowerCase() === "mte-color-scheme-menu-item";
    } else {
      return false;
    }
  }
  /** Returns all slotted menu items */
  getAllItems() {
    return (this.menuItemElems ?? []).filter((el) => {
      if (el.inert || !this.isMenuItem(el)) {
        return false;
      }
      return true;
    });
  }
  /** Returns the current active/focused menu item */
  getCurrentItem() {
    return this.getAllItems().find((i) => i.getAttribute("data-active") === "true");
  }
  /** Marks a menu item as the current active/focused item */
  setCurrentItem(item) {
    const items = this.getAllItems();
    items.forEach((i) => {
      i.setAttribute("tabindex", i === item ? "0" : "-1");
      i.setAttribute("data-active", i === item ? "true" : "false");
    });
  }
  /** Syncs the menus id to all trigger elements */
  updateTargetAriaIds() {
    if (this.targetElement) {
      this.targetElement.setAttribute("aria-haspopup", "menu");
      this.targetElement.setAttribute("aria-controls", this.id);
      if (!this.ariaLabel && !this.ariaLabelledBy && !this.headerElementRef) {
        this.ariaLabelledBy = this.targetElement.id;
      }
    }
  }
  /** SlotObserverMixin doesn't work here for some reason??? */
  handleHeaderSlotChange() {
    if (this.headerElems?.length > 0) {
      this.hasHeader = true;
    }
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("maxh") || changedProps.has("minw")) {
      this.setInstanceStyle("menu", selectorFactory(":host:host:host:host:host:host .menu"), {
        maxh: this.maxh,
        minw: this.minw
      });
    }
  }
  render() {
    return html`${this.instanceStyles}<div part="menu" class="menu"><span class="header ${classMap({
      "has-content": this.hasHeader
    })}" part="header"><slot name="header" @slotchange="${this.handleHeaderSlotChange}"></slot></span><slot></slot></div>`;
  }
};
MteMenu.styles = [styles2, styles3];
__decorateClass([
  property({ reflect: true })
], MteMenu.prototype, "id", 2);
__decorateClass([
  property({ reflect: true })
], MteMenu.prototype, "position", 2);
__decorateClass([
  property({ reflect: true })
], MteMenu.prototype, "placement", 2);
__decorateClass([
  property({ reflect: true })
], MteMenu.prototype, "triggerOn", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteMenu.prototype, "withoutCloseOnClickOutside", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteMenu.prototype, "withoutCloseOnEscape", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteMenu.prototype, "withoutPortal", 2);
__decorateClass([
  property({ attribute: "aria-hidden", reflect: true })
], MteMenu.prototype, "ariaHidden", 2);
__decorateClass([
  property({ attribute: "aria-labelledby", reflect: true })
], MteMenu.prototype, "ariaLabelledBy", 2);
__decorateClass([
  property({ reflect: true })
], MteMenu.prototype, "role", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteMenu.prototype, "maxh", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteMenu.prototype, "minw", 2);
__decorateClass([
  property({ type: Boolean })
], MteMenu.prototype, "isNestedMenu", 2);
__decorateClass([
  property({ type: Number })
], MteMenu.prototype, "animationDuration", 2);
__decorateClass([
  property({ type: Number })
], MteMenu.prototype, "offset", 2);
__decorateClass([
  property({ type: Object })
], MteMenu.prototype, "targetElement", 2);
__decorateClass([
  property()
], MteMenu.prototype, "portalAdapter", 2);
__decorateClass([
  state()
], MteMenu.prototype, "opened", 2);
__decorateClass([
  state()
], MteMenu.prototype, "visible", 2);
__decorateClass([
  state()
], MteMenu.prototype, "renderedPosition", 2);
__decorateClass([
  state()
], MteMenu.prototype, "hasHeader", 2);
__decorateClass([
  eventEmitter()
], MteMenu.prototype, "_onSelect", 2);
__decorateClass([
  eventEmitter()
], MteMenu.prototype, "_onOpen", 2);
__decorateClass([
  eventEmitter()
], MteMenu.prototype, "_onClose", 2);
__decorateClass([
  eventEmitter()
], MteMenu.prototype, "_onTriggerChange", 2);
__decorateClass([
  eventEmitter()
], MteMenu.prototype, "_proxyNestedMenuOpened", 2);
__decorateClass([
  eventEmitter()
], MteMenu.prototype, "_proxyNestedMenuGlobalClosed", 2);
__decorateClass([
  query(".menu")
], MteMenu.prototype, "menuElem", 2);
__decorateClass([
  queryAssignedElements({ slot: "header" })
], MteMenu.prototype, "headerElems", 2);
__decorateClass([
  queryAssignedElements({
    selector: ":not(mte-menu) mte-menu-item, :not(mte-menu) mte-color-scheme-menu-item",
    flatten: true
  })
], MteMenu.prototype, "menuItemElems", 2);
__decorateClass([
  onUpdate("triggerOn")
], MteMenu.prototype, "handleTriggerOnChange", 1);
__decorateClass([
  onUpdate(["id", "targetElement"], { waitUntilFirstUpdate: true })
], MteMenu.prototype, "handleA11yChange", 1);
__decorateClass([
  onUpdate(["targetElement"], { waitUntilFirstUpdate: true })
], MteMenu.prototype, "handleTargetChange", 1);
__decorateClass([
  onUpdate("disabled", { waitUntilFirstUpdate: true })
], MteMenu.prototype, "handleDisabledChange", 1);
__decorateClass([
  onUpdate("withoutCloseOnEscape")
], MteMenu.prototype, "handleWithoutCloseOnEscape", 1);
__decorateClass([
  onUpdate(["position", "placement", "sp", "se"], { waitUntilFirstUpdate: true })
], MteMenu.prototype, "handlePositionChange", 1);
MteMenu = __decorateClass([
  defineElement("mte-menu")
], MteMenu);

// src/atomic/menu/menu-item.element.ts
import { classMap as classMap2 } from "lit/directives/class-map.js";
import { html as html2 } from "lit";

// src/atomic/menu/menu-item.styles.ts
import { css as css2 } from "lit";
var styles4 = css2`:host{--color:inherit;--radius:var(--mte-border-radius-md);--padding-y:calc(var(--mte-space-xs) + var(--mte-space-xxs));--padding-x:calc(var(--mte-space-sm) + var(--mte-space-xs));--gap:var(--mte-space-sm);align-items:center;background:var(--background);border-radius:var(--radius);color:var(--color);cursor:pointer;display:flex;gap:var(--gap);padding:var(--padding-y) var(--padding-x);position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host(:focus-visible:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--radius);border-bottom-right-radius:var(--radius);border-top-left-radius:var(--radius);border-top-right-radius:var(--radius);box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;inset:-1px;pointer-events:none;position:absolute;z-index:9}:host(::-moz-focus-inner){border:0;padding:0}:host(:focus-visible),:host(:hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a))}:host(:active),:host([activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a))}:host([danger]){--color:rgb(var(--mte-status-danger-base-rgb))}:host([danger]:focus-visible),:host([danger]:hover){--background:rgb(var(--mte-status-danger-lighter-rgb));--color:rgb(var(--mte-status-danger-dark-rgb))}:host([danger]:active),:host([danger][activestate]){--color:rgb(var(--mte-status-danger-darker-rgb))}:host([disabled]),:host([disabled]) a{cursor:not-allowed!important;--color:var(--mte-disabled-3)!important;box-shadow:none!important;text-shadow:none!important}:host([disabled]) .prop-icon{--color:var(--mte-disabled-3)!important;--icon-color:var(--mte-disabled-3)!important}:host([disabled]:hover),:host([disabled][activestate]){--background:transparent!important}:host([danger]) .prop-icon{--color:var(--color);--icon-color:var(--color)}.label{display:flex;flex-direction:row;flex-grow:1}.nested-menu,.prefix,.suffix{align-items:center;display:none;flex-direction:row}.has-content{display:flex}.nested-menu,.nested-menu-trigger{display:none}.nested-menu.has-child{display:flex}.suffix.has-content,.suffix:not(.has-content)+.nested-menu.has-child{padding-left:var(--mte-space-sm)}`;

// src/atomic/menu/menu-item.element.ts
import { property as property2, query as query2, queryAssignedElements as queryAssignedElements2, state as state2 } from "lit/decorators.js";
MteIconRegistryService.registerIcons([mtrIconMenuRight, mtrIconDotsHorizontal]);
var MteMenuItem = class extends SlotObserverMixin(
  ButtonMixin(StylePartsMixin(MteElement))
) {
  constructor() {
    super();
    this.danger = false;
    this.withoutCloseOnClick = false;
    this.withAltSubmenuIndicator = false;
    this.role = "menuitem";
    this.hasNestedMenu = false;
    this.handleClick = this.handleClick.bind(this);
    this.handleNestedMenuOpen = this.handleNestedMenuOpen.bind(this);
    this.handleProxyMenuItemClicked = this.handleProxyMenuItemClicked.bind(this);
    this.handleProxyNestedMenuOpen = this.handleProxyNestedMenuOpen.bind(this);
  }
  /** Attempts to open child menu if one exists */
  openChild() {
    this.overlayTriggerElem?.open();
  }
  /** Attempts to close child menu if one exists */
  closeChild() {
    this.overlayTriggerElem?.close();
  }
  connectedCallback() {
    super.connectedCallback();
    this.slotController.watchSlots(["child"]).subscribe((changed) => {
      if (changed?.has("child") && this.childElems?.length > 0 && this.overlayTriggerElem) {
        const menu = this.childElems[0];
        if (menu?.tagName.toLowerCase() === "mte-menu") {
          this.hasNestedMenu = true;
          menu.isNestedMenu = true;
          if (menu.position === "bottom") {
            menu.position = "right";
          }
          menu.offset = 2;
          menu.addEventListener("menuItemClicked", this.handleProxyMenuItemClicked);
          menu.addEventListener("onOpen", this.handleNestedMenuOpen);
          menu.addEventListener("proxyNestedMenuOpened", this.handleProxyNestedMenuOpen);
          this.overlayTriggerElem.triggerElement = this;
          this.overlayTriggerElem.overlayElement = menu;
        }
      }
    });
    this.addEventListener("click", this.handleClick);
  }
  /** Handles clicks on this element to alert a parent menu */
  handleClick(e) {
    if (!this.withoutCloseOnClick && !this.hasNestedMenu) {
      this._menuItemClicked.emit(e);
    }
  }
  /** Proxies menu-item clicked events from nested menus up to parent menus */
  handleProxyMenuItemClicked(e) {
    this._menuItemClicked.emit(e.detail);
  }
  /** Proxies open events from nested menu items to alert a parent menu */
  handleNestedMenuOpen() {
    this._nestedMenuOpened.emit(this.overlayTriggerElem.overlayElement);
  }
  /** Proxies open events from nested menu items of children to alert a parent menu */
  handleProxyNestedMenuOpen(e) {
    this._nestedMenuOpened.emit(e.detail);
  }
  render() {
    const hasPrefix = this.hasSlot("prefix", this.icon);
    const hasSuffix = this.hasSlot("suffix", this.suffixIcon);
    const hasChildren = this.hasSlot("child", this.hasNestedMenu);
    const submenuIcon = this.withAltSubmenuIndicator ? "dots-horizontal" : "menu-right";
    return this.renderButtonTemplate(html2`${this.instanceStyles}<div class="prefix ${classMap2({
      "has-content": hasPrefix
    })}" part="prefix"><slot name="prefix">${this.icon ? html2`<mte-icon class="prop-icon" muted autosize name="${this.icon}"></mte-icon>` : null}</slot></div><div class="label" part="label"><slot></slot></div><div class="suffix ${classMap2({
      "has-content": hasSuffix
    })}" part="suffix"><slot name="suffix">${this.suffixIcon ? html2`<mte-icon class="prop-icon" muted autosize name="${this.suffixIcon}"></mte-icon>` : null}</slot></div><span class="nested-menu ${classMap2({ "has-child": hasChildren })}"><mte-icon muted autosize name="${submenuIcon}"></mte-icon><span class="nested-menu-trigger"><mte-overlay-trigger id="overlay-trigger"></mte-overlay-trigger><slot name="child"></slot></span></span>`);
  }
};
MteMenuItem.styles = [styles2, styles, styles4];
__decorateClass([
  property2({ reflect: true })
], MteMenuItem.prototype, "icon", 2);
__decorateClass([
  property2({ reflect: true })
], MteMenuItem.prototype, "suffixIcon", 2);
__decorateClass([
  property2({ type: Boolean, reflect: true })
], MteMenuItem.prototype, "danger", 2);
__decorateClass([
  property2({ type: Boolean, reflect: true })
], MteMenuItem.prototype, "withoutCloseOnClick", 2);
__decorateClass([
  property2({ reflect: true })
], MteMenuItem.prototype, "value", 2);
__decorateClass([
  property2({ type: Boolean, reflect: true })
], MteMenuItem.prototype, "withAltSubmenuIndicator", 2);
__decorateClass([
  property2({ reflect: true })
], MteMenuItem.prototype, "role", 2);
__decorateClass([
  query2("#overlay-trigger")
], MteMenuItem.prototype, "overlayTriggerElem", 2);
__decorateClass([
  queryAssignedElements2({ slot: "child" })
], MteMenuItem.prototype, "childElems", 2);
__decorateClass([
  state2()
], MteMenuItem.prototype, "hasNestedMenu", 2);
__decorateClass([
  eventEmitter()
], MteMenuItem.prototype, "_menuItemClicked", 2);
__decorateClass([
  eventEmitter()
], MteMenuItem.prototype, "_nestedMenuOpened", 2);
MteMenuItem = __decorateClass([
  defineElement("mte-menu-item")
], MteMenuItem);

export {
  MteMenu,
  styles4 as styles,
  MteMenuItem
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2F0b21pYy9tZW51IiwgIi4uLy4uLy4uL3NyYy9hdG9taWMvbWVudS9tZW51LnN0eWxlcy50cyIsICIuLi8uLi8uLi9zcmMvYXRvbWljL21lbnUiLCAiLi4vLi4vLi4vc3JjL2F0b21pYy9tZW51L21lbnUtaXRlbS5zdHlsZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLXotaW5kZXg6dmFyKC0tbXRlLXotaW5kZXgtMjApOy0tY29sb3I6dmFyKC0tbXRlLWluay0xKTstLWJhY2tncm91bmQ6dmFyKC0tbXRlLXN1cmZhY2UtMik7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCk7LS1wYWRkaW5nLXk6dmFyKC0tbXRlLXNwYWNlLXhzKTstLXBhZGRpbmcteDp2YXIoLS1tdGUtc3BhY2UteHMpOy0taGVhZGVyLXBhZGRpbmcteTpjYWxjKHZhcigtLXBhZGRpbmcteSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpOy0taGVhZGVyLXBhZGRpbmcteDpjYWxjKHZhcigtLXBhZGRpbmcteCkgKyB2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXhzKSk7LS1nYXA6dmFyKC0tbXRlLXNwYWNlLXhzKTstLWJveC1zaGFkb3c6dmFyKC0tbXRlLWVsZXZhdGlvbi16MSk7cG9pbnRlci1ldmVudHM6YXV0b306aG9zdHtkaXNwbGF5OmJsb2NrO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfS5tZW51e2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tcmFkaXVzKTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO2NvbG9yOnZhcigtLWNvbG9yKTtkaXNwbGF5Om5vbmU7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDp2YXIoLS1nYXApO291dGxpbmU6bm9uZTtvdmVyZmxvdzpoaWRkZW47b3ZlcmZsb3cteTphdXRvO3BhZGRpbmc6dmFyKC0tcGFkZGluZy15KSB2YXIoLS1wYWRkaW5nLXgpO3BvaW50ZXItZXZlbnRzOmF1dG87cG9zaXRpb246Zml4ZWQ7ei1pbmRleDp2YXIoLS16LWluZGV4KX0uaGVhZGVye2JvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLW10ZS1ib3JkZXItMSk7ZGlzcGxheTpub25lO21hcmdpbjpjYWxjKHZhcigtLXBhZGRpbmcteSkqLTEpIGNhbGModmFyKC0tcGFkZGluZy14KSotMSkgMCBjYWxjKHZhcigtLXBhZGRpbmcteCkqLTEpO3BhZGRpbmc6dmFyKC0taGVhZGVyLXBhZGRpbmcteSkgdmFyKC0taGVhZGVyLXBhZGRpbmcteCl9LmhlYWRlci5oYXMtY29udGVudHtkaXNwbGF5OmluaXRpYWx9OjpzbG90dGVkKG10ZS1kaXZpZGVyKSxtdGUtZGl2aWRlcnttYXJnaW46MCBjYWxjKHZhcigtLXBhZGRpbmcteCkqLTEpO3dpZHRoOmNhbGMoMTAwJSArIHZhcigtLXBhZGRpbmcteCkgKyB2YXIoLS1wYWRkaW5nLXgpKX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1jb2xvcjppbmhlcml0Oy0tcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLW1kKTstLXBhZGRpbmcteTpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1wYWRkaW5nLXg6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXhzKSk7LS1nYXA6dmFyKC0tbXRlLXNwYWNlLXNtKTthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtib3JkZXItcmFkaXVzOnZhcigtLXJhZGl1cyk7Y29sb3I6dmFyKC0tY29sb3IpO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6ZmxleDtnYXA6dmFyKC0tZ2FwKTtwYWRkaW5nOnZhcigtLXBhZGRpbmcteSkgdmFyKC0tcGFkZGluZy14KTtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9Omhvc3QoOmZvY3VzLXZpc2libGU6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpKTpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCByZ2IodmFyKC0tbXRlLWZvY3VzLXJnYikpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1yYWRpdXMpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1yYWRpdXMpO2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7aW5zZXQ6LTFweDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6OX06aG9zdCg6Oi1tb3otZm9jdXMtaW5uZXIpe2JvcmRlcjowO3BhZGRpbmc6MH06aG9zdCg6Zm9jdXMtdmlzaWJsZSksOmhvc3QoOmhvdmVyKXstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hKSl9Omhvc3QoOmFjdGl2ZSksOmhvc3QoW2FjdGl2ZXN0YXRlXSl7LS1iYWNrZ3JvdW5kOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hKSl9Omhvc3QoW2Rhbmdlcl0pey0tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtcmdiKSl9Omhvc3QoW2Rhbmdlcl06Zm9jdXMtdmlzaWJsZSksOmhvc3QoW2Rhbmdlcl06aG92ZXIpey0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHRlci1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1kYXJrLXJnYikpfTpob3N0KFtkYW5nZXJdOmFjdGl2ZSksOmhvc3QoW2Rhbmdlcl1bYWN0aXZlc3RhdGVdKXstLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1kYXJrZXItcmdiKSl9Omhvc3QoW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgYXtjdXJzb3I6bm90LWFsbG93ZWQhaW1wb3J0YW50Oy0tY29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTMpIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50O3RleHQtc2hhZG93Om5vbmUhaW1wb3J0YW50fTpob3N0KFtkaXNhYmxlZF0pIC5wcm9wLWljb257LS1jb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtMykhaW1wb3J0YW50Oy0taWNvbi1jb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtMykhaW1wb3J0YW50fTpob3N0KFtkaXNhYmxlZF06aG92ZXIpLDpob3N0KFtkaXNhYmxlZF1bYWN0aXZlc3RhdGVdKXstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQhaW1wb3J0YW50fTpob3N0KFtkYW5nZXJdKSAucHJvcC1pY29uey0tY29sb3I6dmFyKC0tY29sb3IpOy0taWNvbi1jb2xvcjp2YXIoLS1jb2xvcil9LmxhYmVse2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1ncm93OjF9Lm5lc3RlZC1tZW51LC5wcmVmaXgsLnN1ZmZpeHthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpub25lO2ZsZXgtZGlyZWN0aW9uOnJvd30uaGFzLWNvbnRlbnR7ZGlzcGxheTpmbGV4fS5uZXN0ZWQtbWVudSwubmVzdGVkLW1lbnUtdHJpZ2dlcntkaXNwbGF5Om5vbmV9Lm5lc3RlZC1tZW51Lmhhcy1jaGlsZHtkaXNwbGF5OmZsZXh9LnN1ZmZpeC5oYXMtY29udGVudCwuc3VmZml4Om5vdCguaGFzLWNvbnRlbnQpKy5uZXN0ZWQtbWVudS5oYXMtY2hpbGR7cGFkZGluZy1sZWZ0OnZhcigtLW10ZS1zcGFjZS1zbSl9YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVMsZ0JBQWdCO0FBQ3pCLFNBQXFCLFlBQVk7QUFDakMsU0FBUyxVQUFVLE9BQU8sdUJBQXVCLGFBQWE7OztBQ0g5RCxTQUFTLFdBQVc7QUFBYSxJQUFNQSxVQUFTOzs7QUQ2QmhEO0VBRUU7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO09BQ0s7QUFPUCxPQUFPLFdBQVc7QUFVbEIsSUFBSSxlQUFlO0FBQ25CLElBQUksb0JBQW9CO0FBWWpCLElBQU0sVUFBTixjQUNHLGNBQWMsZ0JBQWlELFVBQVUsQ0FBQyxFQUVwRjtFQW9NRSxjQUFjO0FBQ1osVUFBTTtBQWpNcUIsY0FBSyxhQUFhLGNBQWM7QUFHaEMsb0JBQStCO0FBRy9CLHFCQUFpQztBQUdqQyxxQkFBOEI7QUFHZixzQ0FBNkI7QUFHN0IsZ0NBQXVCO0FBR3ZCLHlCQUFnQjtBQUdMLHNCQUFhO0FBTXZDLGdCQUFPO0FBV1Asd0JBQWU7QUFHaEIsNkJBQzFCLE9BQU8sVUFBVSxxQkFBcUIsUUFBUTtBQUdwQixrQkFBUztBQXFCekIseUJBQStCO0FBR2xDLGtCQUFTO0FBR1QsU0FBUSxVQUFVO0FBR2xCLFNBQVEsbUJBQXFDO0FBRTdDLHFCQUFZO0FBb0NyQixTQUFRLDhCQUE4QjtBQUd0QztTQUFRLHlCQUEwQjtBQU1sQyxTQUFRLG1CQUFtQixJQUFJLGlCQUFpQixJQUFJO0FBRXBELFNBQVEseUJBQXlCLElBQUksdUJBQXVCLElBQUk7QUFFaEUsU0FBUSx5QkFBeUIsSUFBSSx1QkFBdUIsTUFBTSxNQUFNO0FBQ3RFLFVBQUksS0FBSyxlQUFlO0FBQ3RCLGFBQUssMEJBQTBCO01BQ2pDO0lBQ0YsQ0FBQztBQUVELFNBQVEsaUJBQWlCLElBQUksZUFBZSxNQUFNO01BQ2hELGdCQUFnQixDQUFDLFFBQVE7SUFDM0IsQ0FBQztBQW1YRDtTQUFRLGlCQUFpQixNQUFNO0FBQzdCLFVBQUksS0FBSyxlQUFlO0FBQ3RCLGNBQU0sQ0FBQyxXQUFXLGtCQUFrQixJQUFJO1VBQ3RDLEtBQUs7VUFDTCxLQUFLO1FBQ1A7QUFDQSx3QkFBZ0IsS0FBSyxlQUFlLEtBQUssVUFBVTtVQUNqRCxVQUFVO1VBQ1Y7VUFDQSxZQUFZO1lBQ1YsTUFBTSxFQUFFLFNBQVMsS0FBSyxPQUFPLENBQUM7WUFDOUIsT0FBTyxLQUFLLE1BQU07WUFDbEIsS0FBSyxFQUFFLG1CQUF1QyxDQUFDO1lBQy9DLEtBQUs7VUFDUCxFQUFFLE9BQU8sQ0FBQyxTQUFTLFNBQVMsSUFBSTtRQUNsQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLFdBQUFDLFlBQVcsZUFBZSxNQUFNO0FBQy9DLGVBQUssbUJBQW1CQTtBQUN4QixnQkFBTSxFQUFFLGdCQUFnQixJQUFJLGVBQWU7QUFHM0MsaUJBQU8sT0FBTyxLQUFLLFNBQVMsT0FBTztZQUNqQyxNQUFNLEdBQUcsQ0FBQztZQUNWLEtBQUssR0FBRyxDQUFDO1lBQ1QsWUFBWSxrQkFBa0IsV0FBVztVQUMzQyxDQUFDO1FBQ0gsQ0FBQztNQUNIO0lBQ0Y7QUFVQTtTQUFRLHlCQUF5QixDQUFDLE1BQW1CO0FBRW5ELFdBQUssZUFBZSxRQUFRLENBQUMsU0FBUztBQUNwQyxZQUFJLFNBQVMsRUFBRSxRQUFRO0FBQ3JCLFVBQUMsTUFBYyxXQUFXO1FBQzVCO01BQ0YsQ0FBQztBQUNELFdBQUssdUJBQXVCLFVBQVUsRUFBRSxNQUFNO0FBQzlDLFdBQUssdUJBQXVCLEtBQUssRUFBRSxNQUFNO0FBQ3pDLFFBQUUsZ0JBQWdCO0lBQ3BCO0FBR0E7U0FBUSx3QkFBd0IsQ0FBQyxNQUFtQjtBQUNsRCxXQUFLLFVBQVUsS0FBSztRQUNsQixhQUFhLEVBQUU7UUFDZixVQUFVLEVBQUUsT0FBTztRQUNuQixPQUFPLEVBQUUsT0FBTyxRQUFRO01BQzFCLENBQUM7QUFDRCxXQUFLLE1BQU07QUFDWCxRQUFFLGdCQUFnQjtJQUNwQjtBQUVBLFNBQVEsNEJBQTRCLE1BQU07QUFDeEMsVUFBSSxLQUFLLFVBQVUsQ0FBQyxLQUFLLDRCQUE0QjtBQUNuRCxhQUFLLE1BQU07TUFDYjtJQUNGO0FBclhFLFNBQUssT0FBTyxLQUFLLEtBQUssS0FBSyxJQUFJO0FBQy9CLFNBQUssUUFBUSxLQUFLLE1BQU0sS0FBSyxJQUFJO0FBQ2pDLFNBQUssZ0JBQWdCLEtBQUssY0FBYyxLQUFLLElBQUk7QUFDakQsU0FBSyxrQkFBa0IsS0FBSyxnQkFBZ0IsS0FBSyxJQUFJO0FBQ3JELFNBQUssc0JBQXNCLEtBQUssb0JBQW9CLEtBQUssSUFBSTtBQUM3RCxTQUFLLHdCQUF3QixLQUFLLHNCQUFzQixLQUFLLElBQUk7RUFDbkU7O0VBakVBLElBQVksbUJBQW1CO0FBQzdCLFdBQU8sS0FBSztFQUNkO0VBQ0EsSUFBWSxpQkFBaUIsU0FBc0I7QUFDakQsU0FBSyxvQkFBb0I7QUFDekIsUUFBSSxTQUFTO0FBRVgsWUFBTSxhQUFhLEtBQUssbUJBQW1CLGFBQWEsSUFBSTtBQUM1RCxZQUFNLFdBQVcsY0FBYyxHQUFHLEtBQUssRUFBRSxJQUFJLG1CQUFtQjtBQUNoRSxXQUFLLG1CQUFtQixhQUFhLE1BQU0sUUFBUTtBQUNuRCxXQUFLLGlCQUFpQjtJQUN4QixPQUFPO0FBQ0wsV0FBSyxpQkFBaUI7SUFDeEI7RUFDRjtFQUlRLHdCQUF3QjtBQUM5QixTQUFLLGlCQUFpQixLQUFLLEtBQUssU0FBUztBQUN6QyxTQUFLLG9CQUFvQjtFQUMzQjtFQUdRLG1CQUFtQjtBQUN6QixTQUFLLG9CQUFvQjtFQUMzQjtFQUdRLHFCQUFxQjtBQUMzQixTQUFLLGVBQWU7RUFDdEI7RUFHUSx1QkFBdUI7QUFDN0IsUUFBSSxLQUFLLFNBQVM7QUFDaEIsV0FBSyxNQUFNO0lBQ2I7RUFDRjtFQUdRLDZCQUE2QjtBQUNuQyxRQUFJLENBQUMsS0FBSyx3QkFBd0IsS0FBSyxTQUFTO0FBQzlDLGVBQVMsaUJBQWlCLFdBQVcsS0FBSyxtQkFBbUI7SUFDL0QsV0FBVyxLQUFLLFNBQVM7QUFDdkIsZUFBUyxvQkFBb0IsV0FBVyxLQUFLLG1CQUFtQjtJQUNsRTtFQUNGO0VBR1EsdUJBQXVCO0FBQzdCLFNBQUssZUFBZTtBQUNwQixTQUFLLG1CQUFtQjtFQUMxQjtFQWNVLGVBQXFCO0FBQzdCLFFBQUksQ0FBQyxLQUFLLFFBQVE7QUFDaEIsV0FBSyxhQUFhO0lBQ3BCO0FBQ0EsU0FBSyxvQkFBb0I7RUFDM0I7RUFFQSxvQkFBMEI7QUFDeEIsVUFBTSxrQkFBa0I7QUFDeEIsU0FBSyxpQkFBaUIsbUJBQW1CLEtBQUsscUJBQXFCO0FBQ25FLFNBQUssaUJBQWlCLFdBQVcsS0FBSyxhQUFhO0FBQ25ELFNBQUssaUJBQWlCLGFBQWEsS0FBSyxlQUFlO0FBRXZELFNBQUssZUFBZSxXQUFXLENBQUMsVUFBVSxTQUFTLENBQUMsRUFBRSxVQUFVLENBQUMsWUFBWTtBQUUzRSxVQUFJLFNBQVMsSUFBSSxRQUFRLEdBQUc7QUFDMUIsYUFBSyxZQUFZLEtBQUssZUFBZSxNQUFNLFFBQVE7QUFDbkQsWUFBSSxLQUFLLGFBQWEsU0FBUyxHQUFHO0FBQ2hDLGVBQUssbUJBQW1CLEtBQUssY0FBYyxDQUFDO1FBQzlDO01BQ0Y7QUFFQSxVQUFJLENBQUMsS0FBSyxrQkFBa0IsU0FBUyxJQUFJLFNBQVMsR0FBRztBQUNuRCxhQUFLLGVBQWUsS0FBSyxlQUFlLENBQUM7TUFDM0M7SUFDRixDQUFDO0VBQ0g7RUFFQSx1QkFBNkI7QUFDM0IsVUFBTSxxQkFBcUI7QUFDM0IsU0FBSyx5QkFBeUI7QUFDOUIsU0FBSyx5QkFBeUI7QUFDOUIsU0FBSyxrQkFBa0IsT0FBTztBQUM5QixTQUFLLG1CQUFtQixPQUFPO0FBQy9CLGFBQVMsb0JBQW9CLFdBQVcsS0FBSyxtQkFBbUI7RUFDbEU7O0VBR08sU0FBUztBQUNkLFdBQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxJQUFJLEtBQUssS0FBSztFQUNqRDs7RUFHTyxPQUFPO0FBQ1osV0FBTyxJQUFJLFFBQWMsQ0FBQyxZQUFZO0FBRXBDLFVBQUksQ0FBQyxLQUFLLFlBQVksQ0FBQyxLQUFLLFdBQVcsS0FBSyxlQUFlO0FBQ3pELGNBQU0sY0FBYyxLQUFLLGdCQUNyQixRQUFRLFFBQVEsSUFDaEIsS0FBSyxpQkFBaUIsY0FBYyxNQUFNO1VBQ3hDLGVBQWUsS0FBSztVQUNwQixtQkFBbUIsS0FBSztVQUN4Qiw0QkFBNEIsS0FBSztRQUNuQyxDQUFDO0FBQ0wsb0JBQVksS0FBSyxNQUFNO0FBQ3JCLGNBQUksQ0FBQyxLQUFLLHdCQUF3QjtBQUVoQyx1QkFBVyxNQUFNO0FBQ2YsbUJBQUsseUJBQXlCO2dCQUM1QixLQUFLO2dCQUNMLEtBQUs7Z0JBQ0wsS0FBSztjQUNQO1lBQ0YsQ0FBQztVQUNIO0FBQ0EsY0FBSSxDQUFDLEtBQUssUUFBUTtBQUNoQixpQkFBSyxRQUFRLEtBQUs7VUFDcEI7QUFDQSxlQUFLLFNBQVM7QUFDZCxlQUFLLGFBQWE7QUFDbEIsZUFBSyxlQUFlLGFBQWEsaUJBQWlCLE1BQU07QUFDeEQsY0FBSSxLQUFLLFVBQVU7QUFDakIsaUJBQUssU0FBUyxNQUFNLFVBQVU7QUFDOUIsaUJBQUssbUJBQW1CLE1BQU07QUFDOUIsaUJBQUssa0JBQWtCLE9BQU87QUFDOUIsaUJBQUssbUJBQW1CLE1BQU07Y0FDNUIsU0FBUyxLQUFLO2NBQ2QsR0FBRywrQkFBK0IsS0FBSyxrQkFBa0I7Z0JBQ3ZELGtCQUFrQixLQUFLO2dCQUN2QixtQkFBbUIsS0FBSztnQkFDeEIsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Y0FDVixDQUFDO2NBQ0QsU0FBUztnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNaLFFBQVE7Z0JBQ1IsVUFBVSxLQUFLLG9CQUFvQjtjQUNyQztjQUNBLFFBQVE7Y0FDUixVQUFVLEtBQUs7Y0FDZixVQUFVLE1BQU07QUFDZCx3QkFBUTtjQUNWO1lBQ0YsQ0FBQztVQUNILE9BQU87QUFDTCxvQkFBUTtVQUNWO1FBQ0YsQ0FBQztNQUNIO0lBQ0YsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUVaLFdBQUssVUFBVTtBQUNmLFdBQUssa0JBQWtCLE9BQU87QUFDOUIsV0FBSyxtQkFBbUI7QUFDeEIsV0FBSyx1QkFBdUIsc0JBQXNCO0FBQ2xELFdBQUssdUJBQXVCLHlCQUF5QixLQUFLLFFBQVE7QUFDbEUsV0FBSyxpQkFBaUIsb0JBQW9CLEtBQUssc0JBQXNCO0FBQ3JFLFVBQUksQ0FBQyxLQUFLLHNCQUFzQjtBQUM5QixpQkFBUyxpQkFBaUIsV0FBVyxLQUFLLG1CQUFtQjtNQUMvRDtBQUVBLGlCQUFXLE1BQU07QUFDZixhQUFLLGNBQWM7TUFDckIsR0FBRyxFQUFFO0lBQ1AsQ0FBQztFQUNIOztFQUdPLFFBQVE7QUFDYixXQUFPLElBQUksUUFBYyxDQUFDLFlBQVk7QUFDcEMsVUFBSSxLQUFLLFFBQVE7QUFDZixhQUFLLFNBQVMsS0FBSztNQUNyQjtBQUNBLFdBQUssU0FBUztBQUNkLFdBQUssYUFBYTtBQUNsQixXQUFLLGVBQWUsYUFBYSxpQkFBaUIsT0FBTztBQUN6RCxXQUFLLHlCQUF5QjtBQUM5QixXQUFLLHlCQUF5QjtBQUM5QixVQUFJLEtBQUssVUFBVTtBQUNqQixhQUFLLGtCQUFrQixNQUFNO0FBQzdCLGFBQUssbUJBQW1CLE9BQU87QUFDL0IsYUFBSyxvQkFBb0IsTUFBTTtVQUM3QixTQUFTLEtBQUs7VUFDZCxHQUFHLCtCQUErQixLQUFLLGtCQUFrQjtZQUN2RCxrQkFBa0IsS0FBSztZQUN2QixtQkFBbUIsS0FBSztZQUN4QixRQUFRO1lBQ1IsUUFBUTtZQUNSLFFBQVE7VUFDVixDQUFDO1VBQ0QsU0FBUztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDWixRQUFRO1lBQ1IsVUFBVSxLQUFLLG9CQUFvQjtVQUNyQztVQUNBLFFBQVE7VUFDUixVQUFVLEtBQUs7VUFDZixVQUFVLE1BQU07QUFDZCxvQkFBUTtVQUNWO1FBQ0YsQ0FBQztNQUNILE9BQU87QUFDTCxnQkFBUTtNQUNWO0lBQ0YsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUVaLFdBQUssVUFBVTtBQUNmLFdBQUssU0FBUyxNQUFNLFVBQVU7QUFDOUIsV0FBSyxtQkFBbUIsT0FBTztBQUMvQixXQUFLLG9CQUFvQjtBQUN6QixXQUFLLGlCQUFpQixnQkFBZ0I7QUFDdEMsV0FBSyx1QkFBdUIsY0FBYztBQUMxQyxXQUFLLG9CQUFvQixvQkFBb0IsS0FBSyxzQkFBc0I7QUFDeEUsVUFBSSxDQUFDLEtBQUssNkJBQTZCO0FBQ3JDLGFBQUssdUJBQXVCLGFBQWEsSUFBSTtNQUMvQyxPQUFPO0FBQ0wsYUFBSyw4QkFBOEI7TUFDckM7QUFDQSxVQUFJLENBQUMsS0FBSyxzQkFBc0I7QUFDOUIsaUJBQVMsb0JBQW9CLFdBQVcsS0FBSyxtQkFBbUI7TUFDbEU7SUFDRixDQUFDO0VBQ0g7RUFFQSxvQkFBb0IsT0FBc0I7QUFDeEMsUUFBSSxNQUFNLFFBQVEsWUFBWSxNQUFNLFFBQVEsT0FBTztBQUVqRCxVQUFJLE1BQU0sUUFBUSxPQUFPO0FBQ3ZCLGNBQU0sZUFBZTtNQUN2QjtBQUdBLFVBQUksS0FBSyxjQUFjO0FBQ3JCLGFBQUssOEJBQThCO01BQ3JDO0FBQ0EsV0FBSyxNQUFNO0lBQ2I7RUFDRjtFQUVRLGNBQWMsT0FBc0I7QUFDMUMsUUFBSSxDQUFDLGFBQWEsV0FBVyxhQUFhLGNBQWMsUUFBUSxLQUFLLEVBQUUsU0FBUyxNQUFNLEdBQUcsR0FBRztBQUMxRixZQUFNLFFBQVEsS0FBSyxZQUFZO0FBQy9CLFlBQU0sYUFBYSxLQUFLLGVBQWU7QUFDdkMsVUFBSSxRQUFRLGFBQWEsTUFBTSxRQUFRLFVBQVUsSUFBSTtBQUVyRCxVQUFLLFdBQW1CLGlCQUFpQixNQUFNLFFBQVEsY0FBYztBQUNuRSxRQUFDLFdBQW1CLFVBQVU7TUFDaEM7QUFDQSxVQUFJLEtBQUssZ0JBQWdCLE1BQU0sUUFBUSxhQUFhO0FBQ2xELGFBQUssTUFBTTtNQUNiO0FBQ0EsVUFBSSxNQUFNLFNBQVMsR0FBRztBQUNwQixjQUFNLGVBQWU7QUFDckIsY0FBTSxnQkFBZ0I7QUFFdEIsWUFBSSxNQUFNLFFBQVEsYUFBYTtBQUM3QjtRQUNGLFdBQVcsTUFBTSxRQUFRLFdBQVc7QUFDbEM7UUFDRixXQUFXLE1BQU0sUUFBUSxRQUFRO0FBQy9CLGtCQUFRO1FBQ1YsV0FBVyxNQUFNLFFBQVEsT0FBTztBQUM5QixrQkFBUSxNQUFNLFNBQVM7UUFDekI7QUFFQSxZQUFJLFFBQVEsR0FBRztBQUNiLGtCQUFRLE1BQU0sU0FBUztRQUN6QjtBQUNBLFlBQUksUUFBUSxNQUFNLFNBQVMsR0FBRztBQUM1QixrQkFBUTtRQUNWO0FBRUEsYUFBSyxlQUFlLE1BQU0sS0FBSyxDQUFDO0FBQ2hDLGNBQU0sS0FBSyxFQUFFLE1BQU07TUFDckI7SUFDRjtFQUNGO0VBRVEsZ0JBQWdCLE9BQW1CO0FBQ3pDLFVBQU0sU0FBUyxNQUFNO0FBRXJCLFFBQUksS0FBSyxXQUFXLE1BQU0sR0FBRztBQUMzQixXQUFLLGVBQWUsTUFBTTtJQUM1QjtFQUNGOztFQUdRLGdCQUFnQjtBQUN0QixVQUFNLFFBQVEsS0FBSyxZQUFZO0FBQy9CLFVBQU0sUUFBUSxDQUFDLE1BQU0sTUFBTTtBQUN6QixVQUFJLENBQUUsS0FBYSxVQUFVO0FBQzNCLGFBQUssYUFBYSxZQUFZLE1BQU0sSUFBSSxNQUFNLElBQUk7QUFDbEQsYUFBSyxhQUFhLGVBQWUsTUFBTSxJQUFJLFNBQVMsT0FBTztBQUUzRCxZQUFJLE1BQU0sR0FBRztBQUNYLGVBQUssTUFBTTtRQUNiO01BQ0Y7SUFDRixDQUFDO0VBQ0g7RUFFUSxXQUFXLE1BQVc7QUFDNUIsUUFBSSxLQUFLLFNBQVM7QUFDaEIsYUFDRSxLQUFLLFNBQVMsWUFBWSxNQUFNLG1CQUNoQyxLQUFLLFNBQVMsWUFBWSxNQUFNO0lBRXBDLE9BQU87QUFDTCxhQUFPO0lBQ1Q7RUFDRjs7RUFHUSxjQUFjO0FBQ3BCLFlBQVEsS0FBSyxpQkFBaUIsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFvQjtBQUM1RCxVQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUssV0FBVyxFQUFFLEdBQUc7QUFDcEMsZUFBTztNQUNUO0FBQ0EsYUFBTztJQUNULENBQUM7RUFDSDs7RUFHUSxpQkFBaUI7QUFDdkIsV0FBTyxLQUFLLFlBQVksRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsYUFBYSxNQUFNLE1BQU07RUFDaEY7O0VBR1EsZUFBZSxNQUFtQjtBQUN4QyxVQUFNLFFBQVEsS0FBSyxZQUFZO0FBRy9CLFVBQU0sUUFBUSxDQUFDLE1BQU07QUFDbkIsUUFBRSxhQUFhLFlBQVksTUFBTSxPQUFPLE1BQU0sSUFBSTtBQUNsRCxRQUFFLGFBQWEsZUFBZSxNQUFNLE9BQU8sU0FBUyxPQUFPO0lBQzdELENBQUM7RUFDSDs7RUFHUSxzQkFBc0I7QUFDNUIsUUFBSSxLQUFLLGVBQWU7QUFDdEIsV0FBSyxjQUFjLGFBQWEsaUJBQWlCLE1BQU07QUFDdkQsV0FBSyxjQUFjLGFBQWEsaUJBQWlCLEtBQUssRUFBRTtBQUN4RCxVQUFJLENBQUMsS0FBSyxhQUFhLENBQUMsS0FBSyxrQkFBa0IsQ0FBQyxLQUFLLGtCQUFrQjtBQUNyRSxhQUFLLGlCQUFpQixLQUFLLGNBQWM7TUFDM0M7SUFDRjtFQUNGOztFQWlDUSx5QkFBeUI7QUFDL0IsUUFBSSxLQUFLLGFBQWEsU0FBUyxHQUFHO0FBQ2hDLFdBQUssWUFBWTtJQUNuQjtFQUNGO0VBZ0NVLHFCQUFxQixjQUFnQztBQUM3RCxVQUFNLHFCQUFxQixZQUFZO0FBRXZDLFFBQUksYUFBYSxJQUFJLE1BQU0sS0FBSyxhQUFhLElBQUksTUFBTSxHQUFHO0FBRXhELFdBQUssaUJBQWlCLFFBQVEsZ0JBQWdCLHNDQUFzQyxHQUFHO1FBQ3JGLE1BQU0sS0FBSztRQUNYLE1BQU0sS0FBSztNQUNiLENBQUM7SUFDSDtFQUNGO0VBRUEsU0FBUztBQUNQLFdBQU8sT0FBTyxLQUFLLGNBQWMscURBR1gsU0FBUztNQUN2QixlQUFlLEtBQUs7SUFDdEIsQ0FBQyxDQUFDLG9EQUVnQyxLQUFLLHNCQUFzQjtFQUlyRTtBQUNGO0FBM2xCYSxRQUlKLFNBQVMsQ0FBQ0MsU0FBWUEsT0FBTTtBQUdOO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQVBoQixRQU9rQjtBQUdBO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQVZoQixRQVVrQjtBQUdBO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQWJoQixRQWFrQjtBQUdBO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQWhCaEIsUUFnQmtCO0FBR2U7RUFBM0MsU0FBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQW5CL0IsUUFtQmlDO0FBR0E7RUFBM0MsU0FBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQXRCL0IsUUFzQmlDO0FBR0E7RUFBM0MsU0FBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQXpCL0IsUUF5QmlDO0FBR1c7RUFBdEQsU0FBUyxFQUFFLFdBQVcsZUFBZSxTQUFTLEtBQUssQ0FBQztHQTVCMUMsUUE0QjRDO0FBR0k7RUFBMUQsU0FBUyxFQUFFLFdBQVcsbUJBQW1CLFNBQVMsS0FBSyxDQUFDO0dBL0I5QyxRQStCZ0Q7QUFHOUI7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBbENoQixRQWtDa0I7QUFJN0I7RUFEQyxTQUFTLEVBQUUsU0FBUyxNQUFNLFdBQVcseUJBQXlCLENBQUM7R0FyQ3JELFFBc0NYO0FBSUE7RUFEQyxTQUFTLEVBQUUsU0FBUyxNQUFNLFdBQVcseUJBQXlCLENBQUM7R0F6Q3JELFFBMENYO0FBRzZCO0VBQTVCLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztHQTdDaEIsUUE2Q2tCO0FBR0Q7RUFBM0IsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0dBaERmLFFBZ0RpQjtBQUlBO0VBQTNCLFNBQVMsRUFBRSxNQUFNLE9BQU8sQ0FBQztHQXBEZixRQW9EaUI7QUFPQTtFQUEzQixTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7R0EzRGYsUUEyRGlCO0FBY2hCO0VBQVgsU0FBUztHQXpFQyxRQXlFQztBQUdIO0VBQVIsTUFBTTtHQTVFSSxRQTRFRjtBQUdRO0VBQWhCLE1BQU07R0EvRUksUUErRU07QUFHQTtFQUFoQixNQUFNO0dBbEZJLFFBa0ZNO0FBRVI7RUFBUixNQUFNO0dBcEZJLFFBb0ZGO0FBR087RUFBZixhQUFhO0dBdkZILFFBdUZLO0FBR0E7RUFBZixhQUFhO0dBMUZILFFBMEZLO0FBR0E7RUFBZixhQUFhO0dBN0ZILFFBNkZLO0FBR0E7RUFBZixhQUFhO0dBaEdILFFBZ0dLO0FBTUE7RUFBZixhQUFhO0dBdEdILFFBc0dLO0FBTUE7RUFBZixhQUFhO0dBNUdILFFBNEdLO0FBRUE7RUFBZixNQUFNLE9BQU87R0E5R0gsUUE4R0s7QUFFMkI7RUFBMUMsc0JBQXNCLEVBQUUsTUFBTSxTQUFTLENBQUM7R0FoSDlCLFFBZ0hnQztBQU0zQztFQUpDLHNCQUFzQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztFQUNYLENBQUM7R0FySFUsUUFzSFg7QUE0Q1E7RUFEUCxTQUFTLFdBQVc7R0FqS1YsUUFrS0g7QUFNQTtFQURQLFNBQVMsQ0FBQyxNQUFNLGVBQWUsR0FBRyxFQUFFLHNCQUFzQixLQUFLLENBQUM7R0F2S3RELFFBd0tIO0FBS0E7RUFEUCxTQUFTLENBQUMsZUFBZSxHQUFHLEVBQUUsc0JBQXNCLEtBQUssQ0FBQztHQTVLaEQsUUE2S0g7QUFLQTtFQURQLFNBQVMsWUFBWSxFQUFFLHNCQUFzQixLQUFLLENBQUM7R0FqTHpDLFFBa0xIO0FBT0E7RUFEUCxTQUFTLHNCQUFzQjtHQXhMckIsUUF5TEg7QUFTQTtFQURQLFNBQVMsQ0FBQyxZQUFZLGFBQWEsTUFBTSxJQUFJLEdBQUcsRUFBRSxzQkFBc0IsS0FBSyxDQUFDO0dBak1wRSxRQWtNSDtBQWxNRyxVQUFOO0VBRE4sY0FBYyxVQUFVO0dBQ1o7OztBRW5FYixTQUFTLFlBQUFDLGlCQUFnQjtBQUV6QixTQUFTLFFBQUFDLGFBQVk7OztBQ0ZyQixTQUFTLE9BQUFDLFlBQVc7QUFBYSxJQUFNQyxVQUFTRDs7O0FEZ0JoRCxTQUFTLFlBQUFFLFdBQVUsU0FBQUMsUUFBTyx5QkFBQUMsd0JBQXVCLFNBQUFDLGNBQWE7QUFPOUQsdUJBQXVCLGNBQWMsQ0FBQyxrQkFBa0IscUJBQXFCLENBQUM7QUEyQnZFLElBQU0sY0FBTixjQUEwQjtFQUMvQixZQUFZLGdCQUFxRCxVQUFVLENBQUM7QUFDOUUsRUFBRTtFQTBDQSxjQUFjO0FBQ1osVUFBTTtBQWpDb0Msa0JBQVM7QUFHVCwrQkFBc0I7QUFNdEIsbUNBQTBCO0FBR3pDLGdCQUFPO0FBTTNCLHlCQUFnQjtBQWtCdkIsU0FBSyxjQUFjLEtBQUssWUFBWSxLQUFLLElBQUk7QUFDN0MsU0FBSyx1QkFBdUIsS0FBSyxxQkFBcUIsS0FBSyxJQUFJO0FBQy9ELFNBQUssNkJBQTZCLEtBQUssMkJBQTJCLEtBQUssSUFBSTtBQUMzRSxTQUFLLDRCQUE0QixLQUFLLDBCQUEwQixLQUFLLElBQUk7RUFDM0U7O0VBR0EsWUFBWTtBQUNWLFNBQUssb0JBQW9CLEtBQUs7RUFDaEM7O0VBR0EsYUFBYTtBQUNYLFNBQUssb0JBQW9CLE1BQU07RUFDakM7RUFFQSxvQkFBMEI7QUFDeEIsVUFBTSxrQkFBa0I7QUFFeEIsU0FBSyxlQUFlLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFVLENBQUMsWUFBWTtBQUUvRCxVQUFJLFNBQVMsSUFBSSxPQUFPLEtBQUssS0FBSyxZQUFZLFNBQVMsS0FBSyxLQUFLLG9CQUFvQjtBQUVuRixjQUFNLE9BQU8sS0FBSyxXQUFXLENBQUM7QUFDOUIsWUFBSSxNQUFNLFFBQVEsWUFBWSxNQUFNLFlBQVk7QUFDOUMsZUFBSyxnQkFBZ0I7QUFDckIsZUFBSyxlQUFlO0FBRXBCLGNBQUksS0FBSyxhQUFhLFVBQVU7QUFDOUIsaUJBQUssV0FBVztVQUNsQjtBQUNBLGVBQUssU0FBUztBQUNkLGVBQUssaUJBQWlCLG1CQUFtQixLQUFLLDBCQUEwQjtBQUN4RSxlQUFLLGlCQUFpQixVQUFVLEtBQUssb0JBQW9CO0FBQ3pELGVBQUssaUJBQWlCLHlCQUF5QixLQUFLLHlCQUF5QjtBQUM3RSxlQUFLLG1CQUFtQixpQkFBaUI7QUFDekMsZUFBSyxtQkFBbUIsaUJBQWlCO1FBQzNDO01BQ0Y7SUFDRixDQUFDO0FBRUQsU0FBSyxpQkFBaUIsU0FBUyxLQUFLLFdBQVc7RUFDakQ7O0VBR1EsWUFBWSxHQUFHO0FBQ3JCLFFBQUksQ0FBQyxLQUFLLHVCQUF1QixDQUFDLEtBQUssZUFBZTtBQUNwRCxXQUFLLGlCQUFpQixLQUFLLENBQUM7SUFDOUI7RUFDRjs7RUFHUSwyQkFBMkIsR0FBRztBQUNwQyxTQUFLLGlCQUFpQixLQUFLLEVBQUUsTUFBTTtFQUNyQzs7RUFHUSx1QkFBdUI7QUFDN0IsU0FBSyxrQkFBa0IsS0FBSyxLQUFLLG1CQUFtQixjQUF5QjtFQUMvRTs7RUFHUSwwQkFBMEIsR0FBZ0I7QUFDaEQsU0FBSyxrQkFBa0IsS0FBSyxFQUFFLE1BQU07RUFDdEM7RUFFQSxTQUFTO0FBQ1AsVUFBTSxZQUFZLEtBQUssUUFBUSxVQUFVLEtBQUssSUFBSTtBQUNsRCxVQUFNLFlBQVksS0FBSyxRQUFRLFVBQVUsS0FBSyxVQUFVO0FBQ3hELFVBQU0sY0FBYyxLQUFLLFFBQVEsU0FBUyxLQUFLLGFBQWE7QUFDNUQsVUFBTSxjQUFjLEtBQUssMEJBQTBCLG9CQUFvQjtBQUV2RSxXQUFPLEtBQUsscUJBQXFCQyxRQUFPLEtBQUssY0FBYyxzQkFFdkNDLFVBQVM7TUFDdkIsZUFBZTtJQUNqQixDQUFDLENBQUMsdUNBR0UsS0FBSyxPQUNIRCx5REFBdUQsS0FBSyxJQUFJLGtCQUNoRSxJQUFJLHNGQU9NQyxVQUFTO01BQ3ZCLGVBQWU7SUFDakIsQ0FBQyxDQUFDLHVDQUdFLEtBQUssYUFDSEQseURBQXVELEtBQUssVUFBVSxrQkFDdEUsSUFBSSx5Q0FHZUMsVUFBUyxFQUFFLGFBQWEsWUFBWSxDQUFDLENBQUMsb0NBQy9CLFdBQVcseUpBS3BDO0VBQ2I7QUFDRjtBQTFKYSxZQUdKLFNBQVMsQ0FBQ0MsU0FBWSxRQUFjQSxPQUFNO0FBR3BCO0VBQTVCQyxVQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FOaEIsWUFNa0I7QUFHQTtFQUE1QkEsVUFBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBVGhCLFlBU2tCO0FBR2U7RUFBM0NBLFVBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FaL0IsWUFZaUM7QUFHQTtFQUEzQ0EsVUFBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQWYvQixZQWVpQztBQUdmO0VBQTVCQSxVQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FsQmhCLFlBa0JrQjtBQUdlO0VBQTNDQSxVQUFTLEVBQUUsTUFBTSxTQUFTLFNBQVMsS0FBSyxDQUFDO0dBckIvQixZQXFCaUM7QUFHZjtFQUE1QkEsVUFBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBeEJoQixZQXdCa0I7QUFFRjtFQUExQkMsT0FBTSxrQkFBa0I7R0ExQmQsWUEwQmdCO0FBRWU7RUFBekNDLHVCQUFzQixFQUFFLE1BQU0sUUFBUSxDQUFDO0dBNUI3QixZQTRCK0I7QUFFakM7RUFBUkMsT0FBTTtHQTlCSSxZQThCRjtBQU1PO0VBQWYsYUFBYTtHQXBDSCxZQW9DSztBQU1BO0VBQWYsYUFBYTtHQTFDSCxZQTBDSztBQTFDTCxjQUFOO0VBRE4sY0FBYyxlQUFlO0dBQ2pCOyIsCiAgIm5hbWVzIjogWyJzdHlsZXMiLCAicGxhY2VtZW50IiwgInN0eWxlcyIsICJjbGFzc01hcCIsICJodG1sIiwgImNzcyIsICJzdHlsZXMiLCAicHJvcGVydHkiLCAicXVlcnkiLCAicXVlcnlBc3NpZ25lZEVsZW1lbnRzIiwgInN0YXRlIiwgImh0bWwiLCAiY2xhc3NNYXAiLCAic3R5bGVzIiwgInByb3BlcnR5IiwgInF1ZXJ5IiwgInF1ZXJ5QXNzaWduZWRFbGVtZW50cyIsICJzdGF0ZSJdCn0K
