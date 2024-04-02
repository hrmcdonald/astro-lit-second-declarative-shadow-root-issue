import {
  calculateDefaultPanelAnimation,
  calculateOverlayPlacements
} from "./chunk.SRHT6JKE.js";
import {
  MteIconRegistryService
} from "./chunk.L7F3KXB6.js";
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
  defaultPortalAdapter,
  defineElement,
  eventEmitter,
  onUpdate,
  styles3 as styles,
  styles7 as styles2
} from "./chunk.Y4EV6E5D.js";

// src/atomic/menu/menu.element.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { property, query, queryAssignedElements, state } from "lit/decorators.js";

// src/atomic/menu/menu.styles.ts
import { css } from "lit";
var styles3 = css`:host{--z-index:var(--mte-z-index-20);--color:var(--mte-ink-1);--background:var(--mte-surface-2);--border-color:var(--mte-border-2);--radius:var(--mte-border-radius-md);--padding-y:var(--mte-space-xs);--padding-x:var(--mte-space-xs);--header-padding-y:calc(var(--padding-y) + var(--mte-space-xs) + var(--mte-space-xxs));--header-padding-x:calc(var(--padding-x) + var(--mte-space-sm) + var(--mte-space-xs));--gap:var(--mte-space-xs);--box-shadow:var(--mte-elevation-z1);pointer-events:auto}:host{display:block;pointer-events:none;position:absolute;z-index:1000}.menu{background:var(--background);border:1px solid var(--border-color);border-radius:var(--radius);box-shadow:var(--box-shadow);color:var(--color);display:none;flex-direction:column;gap:var(--gap);outline:none;overflow:hidden;overflow-y:auto;padding:var(--padding-y) var(--padding-x);pointer-events:auto;position:fixed;z-index:var(--z-index)}.header{border-bottom:2px solid var(--mte-border-1);display:none;margin:calc(var(--padding-y)*-1) calc(var(--padding-x)*-1) 0 calc(var(--padding-x)*-1);padding:var(--header-padding-y) var(--header-padding-x)}.header.has-content{display:initial}::slotted(mte-divider),mte-divider{margin:0 calc(var(--padding-x)*-1);width:calc(100% + var(--padding-x) + var(--padding-x))}`;

// src/atomic/menu/menu.element.ts
import { config, selectorFactory } from "@mortar/styles";
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
import { mtrIconDotsHorizontal, mtrIconMenuRight } from "@mortar/icons";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2F0b21pYy9tZW51IiwgIi4uLy4uLy4uL3NyYy9hdG9taWMvbWVudS9tZW51LnN0eWxlcy50cyIsICIuLi8uLi8uLi9zcmMvYXRvbWljL21lbnUiLCAiLi4vLi4vLi4vc3JjL2F0b21pYy9tZW51L21lbnUtaXRlbS5zdHlsZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLXotaW5kZXg6dmFyKC0tbXRlLXotaW5kZXgtMjApOy0tY29sb3I6dmFyKC0tbXRlLWluay0xKTstLWJhY2tncm91bmQ6dmFyKC0tbXRlLXN1cmZhY2UtMik7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCk7LS1wYWRkaW5nLXk6dmFyKC0tbXRlLXNwYWNlLXhzKTstLXBhZGRpbmcteDp2YXIoLS1tdGUtc3BhY2UteHMpOy0taGVhZGVyLXBhZGRpbmcteTpjYWxjKHZhcigtLXBhZGRpbmcteSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpOy0taGVhZGVyLXBhZGRpbmcteDpjYWxjKHZhcigtLXBhZGRpbmcteCkgKyB2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXhzKSk7LS1nYXA6dmFyKC0tbXRlLXNwYWNlLXhzKTstLWJveC1zaGFkb3c6dmFyKC0tbXRlLWVsZXZhdGlvbi16MSk7cG9pbnRlci1ldmVudHM6YXV0b306aG9zdHtkaXNwbGF5OmJsb2NrO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfS5tZW51e2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tcmFkaXVzKTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO2NvbG9yOnZhcigtLWNvbG9yKTtkaXNwbGF5Om5vbmU7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDp2YXIoLS1nYXApO291dGxpbmU6bm9uZTtvdmVyZmxvdzpoaWRkZW47b3ZlcmZsb3cteTphdXRvO3BhZGRpbmc6dmFyKC0tcGFkZGluZy15KSB2YXIoLS1wYWRkaW5nLXgpO3BvaW50ZXItZXZlbnRzOmF1dG87cG9zaXRpb246Zml4ZWQ7ei1pbmRleDp2YXIoLS16LWluZGV4KX0uaGVhZGVye2JvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLW10ZS1ib3JkZXItMSk7ZGlzcGxheTpub25lO21hcmdpbjpjYWxjKHZhcigtLXBhZGRpbmcteSkqLTEpIGNhbGModmFyKC0tcGFkZGluZy14KSotMSkgMCBjYWxjKHZhcigtLXBhZGRpbmcteCkqLTEpO3BhZGRpbmc6dmFyKC0taGVhZGVyLXBhZGRpbmcteSkgdmFyKC0taGVhZGVyLXBhZGRpbmcteCl9LmhlYWRlci5oYXMtY29udGVudHtkaXNwbGF5OmluaXRpYWx9OjpzbG90dGVkKG10ZS1kaXZpZGVyKSxtdGUtZGl2aWRlcnttYXJnaW46MCBjYWxjKHZhcigtLXBhZGRpbmcteCkqLTEpO3dpZHRoOmNhbGMoMTAwJSArIHZhcigtLXBhZGRpbmcteCkgKyB2YXIoLS1wYWRkaW5nLXgpKX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1jb2xvcjppbmhlcml0Oy0tcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLW1kKTstLXBhZGRpbmcteTpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1wYWRkaW5nLXg6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXhzKSk7LS1nYXA6dmFyKC0tbXRlLXNwYWNlLXNtKTthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtib3JkZXItcmFkaXVzOnZhcigtLXJhZGl1cyk7Y29sb3I6dmFyKC0tY29sb3IpO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6ZmxleDtnYXA6dmFyKC0tZ2FwKTtwYWRkaW5nOnZhcigtLXBhZGRpbmcteSkgdmFyKC0tcGFkZGluZy14KTtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9Omhvc3QoOmZvY3VzLXZpc2libGU6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpKTpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCByZ2IodmFyKC0tbXRlLWZvY3VzLXJnYikpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1yYWRpdXMpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1yYWRpdXMpO2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7aW5zZXQ6LTFweDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6OX06aG9zdCg6Oi1tb3otZm9jdXMtaW5uZXIpe2JvcmRlcjowO3BhZGRpbmc6MH06aG9zdCg6Zm9jdXMtdmlzaWJsZSksOmhvc3QoOmhvdmVyKXstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hKSl9Omhvc3QoOmFjdGl2ZSksOmhvc3QoW2FjdGl2ZXN0YXRlXSl7LS1iYWNrZ3JvdW5kOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hKSl9Omhvc3QoW2Rhbmdlcl0pey0tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtcmdiKSl9Omhvc3QoW2Rhbmdlcl06Zm9jdXMtdmlzaWJsZSksOmhvc3QoW2Rhbmdlcl06aG92ZXIpey0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHRlci1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1kYXJrLXJnYikpfTpob3N0KFtkYW5nZXJdOmFjdGl2ZSksOmhvc3QoW2Rhbmdlcl1bYWN0aXZlc3RhdGVdKXstLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1kYXJrZXItcmdiKSl9Omhvc3QoW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgYXtjdXJzb3I6bm90LWFsbG93ZWQhaW1wb3J0YW50Oy0tY29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTMpIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50O3RleHQtc2hhZG93Om5vbmUhaW1wb3J0YW50fTpob3N0KFtkaXNhYmxlZF0pIC5wcm9wLWljb257LS1jb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtMykhaW1wb3J0YW50Oy0taWNvbi1jb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtMykhaW1wb3J0YW50fTpob3N0KFtkaXNhYmxlZF06aG92ZXIpLDpob3N0KFtkaXNhYmxlZF1bYWN0aXZlc3RhdGVdKXstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQhaW1wb3J0YW50fTpob3N0KFtkYW5nZXJdKSAucHJvcC1pY29uey0tY29sb3I6dmFyKC0tY29sb3IpOy0taWNvbi1jb2xvcjp2YXIoLS1jb2xvcil9LmxhYmVse2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1ncm93OjF9Lm5lc3RlZC1tZW51LC5wcmVmaXgsLnN1ZmZpeHthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpub25lO2ZsZXgtZGlyZWN0aW9uOnJvd30uaGFzLWNvbnRlbnR7ZGlzcGxheTpmbGV4fS5uZXN0ZWQtbWVudSwubmVzdGVkLW1lbnUtdHJpZ2dlcntkaXNwbGF5Om5vbmV9Lm5lc3RlZC1tZW51Lmhhcy1jaGlsZHtkaXNwbGF5OmZsZXh9LnN1ZmZpeC5oYXMtY29udGVudCwuc3VmZml4Om5vdCguaGFzLWNvbnRlbnQpKy5uZXN0ZWQtbWVudS5oYXMtY2hpbGR7cGFkZGluZy1sZWZ0OnZhcigtLW10ZS1zcGFjZS1zbSl9YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBUyxnQkFBZ0I7QUFDekIsU0FBcUIsWUFBWTtBQUNqQyxTQUFTLFVBQVUsT0FBTyx1QkFBdUIsYUFBYTs7O0FDSDlELFNBQVMsV0FBVztBQUFhLElBQU1BLFVBQVM7OztBRDRCaEQsU0FBUyxRQUFRLHVCQUF1QjtBQUN4QztFQUVFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtPQUNLO0FBT1AsT0FBTyxXQUFXO0FBVWxCLElBQUksZUFBZTtBQUNuQixJQUFJLG9CQUFvQjtBQVlqQixJQUFNLFVBQU4sY0FDRyxjQUFjLGdCQUFpRCxVQUFVLENBQUMsRUFFcEY7RUFvTUUsY0FBYztBQUNaLFVBQU07QUFqTXFCLGNBQUssYUFBYSxjQUFjO0FBR2hDLG9CQUErQjtBQUcvQixxQkFBaUM7QUFHakMscUJBQThCO0FBR2Ysc0NBQTZCO0FBRzdCLGdDQUF1QjtBQUd2Qix5QkFBZ0I7QUFHTCxzQkFBYTtBQU12QyxnQkFBTztBQVdQLHdCQUFlO0FBR2hCLDZCQUMxQixPQUFPLFVBQVUscUJBQXFCLFFBQVE7QUFHcEIsa0JBQVM7QUFxQnpCLHlCQUErQjtBQUdsQyxrQkFBUztBQUdULFNBQVEsVUFBVTtBQUdsQixTQUFRLG1CQUFxQztBQUU3QyxxQkFBWTtBQW9DckIsU0FBUSw4QkFBOEI7QUFHdEM7U0FBUSx5QkFBMEI7QUFNbEMsU0FBUSxtQkFBbUIsSUFBSSxpQkFB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QUFZLENBQUMsQ0FBQyxvQ0FDL0IsV0FBVyx5SkFLcEM7RUFDYjtBQUNGO0FBMUphLFlBR0osU0FBUyxDQUFDQyxTQUFZLFFBQWNBLE9BQU07QUFHcEI7RUFBNUJDLFVBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQU5oQixZQU1rQjtBQUdBO0VBQTVCQSxVQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FUaEIsWUFTa0I7QUFHZTtFQUEzQ0EsVUFBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQVovQixZQVlpQztBQUdBO0VBQTNDQSxVQUFTLEVBQUUsTUFBTSxTQUFTLFNBQVMsS0FBSyxDQUFDO0dBZi9CLFlBZWlDO0FBR2Y7RUFBNUJBLFVBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQWxCaEIsWUFrQmtCO0FBR2U7RUFBM0NBLFVBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FyQi9CLFlBcUJpQztBQUdmO0VBQTVCQSxVQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0F4QmhCLFlBd0JrQjtBQUVGO0VBQTFCQyxPQUFNLGtCQUFrQjtHQTFCZCxZQTBCZ0I7QUFFZTtFQUF6Q0MsdUJBQXNCLEVBQUUsTUFBTSxRQUFRLENBQUM7R0E1QjdCLFlBNEIrQjtBQUVqQztFQUFSQyxPQUFNO0dBOUJJLFlBOEJGO0FBTU87RUFBZixhQUFhO0dBcENILFlBb0NLO0FBTUE7RUFBZixhQUFhO0dBMUNILFlBMENLO0FBMUNMLGNBQU47RUFETixjQUFjLGVBQWU7R0FDakI7IiwKICAibmFtZXMiOiBbInN0eWxlcyIsICJwbGFjZW1lbnQiLCAic3R5bGVzIiwgImNsYXNzTWFwIiwgImh0bWwiLCAiY3NzIiwgInN0eWxlcyIsICJwcm9wZXJ0eSIsICJxdWVyeSIsICJxdWVyeUFzc2lnbmVkRWxlbWVudHMiLCAic3RhdGUiLCAiaHRtbCIsICJjbGFzc01hcCIsICJzdHlsZXMiLCAicHJvcGVydHkiLCAicXVlcnkiLCAicXVlcnlBc3NpZ25lZEVsZW1lbnRzIiwgInN0YXRlIl0KfQo=
