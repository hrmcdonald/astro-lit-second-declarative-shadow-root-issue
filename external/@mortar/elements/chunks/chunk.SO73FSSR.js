import {
  calculateDefaultPanelAnimation,
  calculateOverlayPlacements
} from "./chunk.SRHT6JKE.js";
import {
  MteIconRegistryService,
  mtrIconClose
} from "./chunk.M5RJHYFW.js";
import {
  ClickOutsideController,
  DetectChildCloseController,
  DisabledMixin,
  FocusTrapController,
  MteElement,
  PortalController,
  SlotController,
  StylePartsMixin,
  __decorateClass,
  config,
  defaultPortalAdapter,
  defineElement,
  eventEmitter,
  onUpdate,
  styles7 as styles
} from "./chunk.KVXAK6W4.js";

// src/atomic/popover/popover.element.ts
import { html } from "lit";
import { property, query, queryAssignedElements, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

// src/atomic/popover/popover.styles.ts
import { css } from "lit";
var styles2 = css`:host{--padding-y:12px;--padding-x:var(--mte-space-comfy-md);--radius:var(--mte-border-radius-md);--background:var(--mte-surface-2);--border-color:var(--mte-border-2)}:host{display:block;pointer-events:none;position:absolute;z-index:1000}:host ::slotted(mte-content),:host ::slotted(mte-footer),:host ::slotted(mte-header){--composition-padding-y:0px;--composition-padding-x:0px}.trigger-container{display:inline-block}.popover-container{display:none;position:fixed;z-index:var(--mte-z-index-20)}.popover-container.visible{border-radius:var(--radius);box-shadow:var(--mte-elevation-z1)}.popover{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;background:var(--background);border:1px solid var(--border-color);border-radius:var(--radius);display:flex;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);overflow:hidden;pointer-events:auto;position:relative;text-decoration:inherit;text-overflow:ellipsis;text-transform:inherit}.content{display:flex;flex-direction:column;padding:var(--padding-y) var(--padding-x) var(--padding-y) var(--padding-x);z-index:2}#header{align-items:center;display:flex}#header.has-content{padding-bottom:var(--padding-y)}slot[name=header]{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;flex-direction:row;flex-grow:1;font-size:var(--mte-font-set-body2-font-size);font-weight:var(--mte-font-set-body2-font-weight);font-weight:var(--mte-font-weight-bold);line-height:var(--mte-font-set-body2-line-height);text-decoration:inherit;text-transform:inherit}:host ::slotted(mte-title){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-body2-font-size);font-weight:var(--mte-font-set-body2-font-weight);font-weight:var(--mte-font-weight-bold);line-height:var(--mte-font-set-body2-line-height);text-decoration:inherit;text-transform:inherit}#body{display:block;flex-grow:1}#footer.has-content{padding-top:var(--padding-y)}.arrow{background:var(--background);display:none;height:8px;opacity:0;position:absolute;transform:rotate(45deg);width:8px;z-index:1}.arrow.top,.arrow.top-end,.arrow.top-start{border-bottom:1px solid var(--border-color);border-right:1px solid var(--border-color)}.arrow.right,.arrow.right-end,.arrow.right-start{border-bottom:1px solid var(--border-color);border-left:1px solid var(--border-color)}.arrow.bottom,.arrow.bottom-end,.arrow.bottom-start{border-left:1px solid var(--border-color);border-top:1px solid var(--border-color)}.arrow.left,.arrow.left-end,.arrow.left-start{border-right:1px solid var(--border-color);border-top:1px solid var(--border-color)}.arrow.visible{display:block;opacity:1}`;

// src/atomic/popover/popover.element.ts
import {
  autoUpdate,
  computePosition,
  flip,
  shift,
  offset,
  arrow,
  hide
} from "@floating-ui/dom";
import anime from "animejs";
MteIconRegistryService.registerIcons([mtrIconClose]);
var nextUniqueId = 0;
var nextUniqueChildId = 0;
var MtePopover = class extends DisabledMixin(StylePartsMixin(MteElement)) {
  constructor() {
    super();
    this.id = `mte-popover--${nextUniqueId++}`;
    this.position = "top";
    this.placement = "center";
    this.openDelay = 0;
    this.closeDelay = 0;
    this.offset = 8;
    this.withoutArrow = false;
    this.withoutFocusTrap = false;
    this.withoutCloseOnClickOutside = false;
    this.withoutCloseOnEscape = false;
    this.withoutPortal = false;
    this.ariaHidden = "true";
    this.ariaLive = "off";
    this.role = "dialog";
    this.isFocusFallback = true;
    this.tabindex = "-1";
    this.triggerOn = "click";
    this.animationDuration = config.animation.transitionDurationJs.short * 1e3;
    this.portalAdapter = defaultPortalAdapter;
    this.visible = false;
    this.opened = false;
    this.renderedPosition = null;
    /** Subscription callback to clear hover listeners */
    this.cleanupUpdateListeners = null;
    this.focusTrapController = new FocusTrapController(this);
    this.clickOutsideController = new ClickOutsideController(this, () => {
      if (this.withoutPortal) {
        this.handleCloseOnClickOutside();
      }
    });
    this.portalController = new PortalController(this);
    this.detectChildCloseController = new DetectChildCloseController(this);
    this.slotController = new SlotController(this, {
      updateOnChange: ["default", "header", "footer"]
    });
    this.hasHeader = false;
    this.hasFooter = false;
    /** Triggers a floating-ui position recompute */
    this.updatePosition = () => {
      if (this.targetElement) {
        const [placement, fallbackPlacements] = calculateOverlayPlacements(
          this.position,
          this.placement
        );
        computePosition(this.targetElement, this.popoverContainerElem, {
          placement,
          strategy: "fixed",
          middleware: [
            shift({ padding: 16 }),
            offset(this.offset),
            flip({ fallbackPlacements }),
            arrow({ element: this.arrowElem }),
            hide()
          ].filter((item) => item !== null)
        }).then(({ x, y, placement: placement2, middlewareData }) => {
          this.renderedPosition = placement2;
          const { referenceHidden } = middlewareData.hide;
          Object.assign(this.popoverContainerElem.style, {
            left: `${x}px`,
            top: `${y}px`,
            visibility: referenceHidden ? "hidden" : "visible"
          });
          const { x: arrowX, y: arrowY, centerOffset } = middlewareData.arrow;
          const staticSide = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          }[placement2.split("-")[0]];
          if (centerOffset !== 0) {
            this.arrowElem.style.opacity = "0";
          } else {
            Object.assign(this.arrowElem.style, {
              left: arrowX != null ? `${arrowX}px` : "",
              top: arrowY != null ? `${arrowY}px` : "",
              right: "",
              bottom: "",
              opacity: 1,
              [staticSide]: "-4px"
            });
          }
        });
      }
    };
    this.handleCloseOnClickOutside = () => {
      if (this.opened && !this.withoutCloseOnClickOutside) {
        this.close();
      }
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
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
  /** The first element currently in the content slot */
  get contentElementRef() {
    return this._contentElementRef;
  }
  set contentElementRef(newElem) {
    this._contentElementRef = newElem;
    if (newElem) {
      const existingId = this._contentElementRef?.getAttribute("id");
      const contentId = existingId ?? `${this.id}-${nextUniqueChildId++}`;
      this._contentElementRef?.setAttribute("id", contentId);
      this.ariaDescribedBy = contentId;
    } else {
      this.ariaDescribedBy = null;
    }
  }
  handleTriggerOnChange() {
    this.role = this.triggerOn === "click" || this.triggerOn === "none" ? "dialog" : "tooltip";
    this.isFocusFallback = this.role === "dialog" ? true : false;
    this._onTriggerChange.emit(this.triggerOn);
    this.updateTriggerAriaIds();
  }
  handleIdChange() {
    this.updateTriggerAriaIds();
  }
  handleDisabledChange() {
    if (this.visible) {
      this.close();
    }
  }
  handleWithoutCloseOnEscape() {
    if (!this.withoutCloseOnEscape && this.visible) {
      document.addEventListener("keydown", this.handleKeyDown);
    } else if (this.visible) {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }
  handlePositionChange() {
    this.updatePosition();
    this.renderedPosition = null;
  }
  handleTargetChange() {
    this.updateTriggerAriaIds();
    this.updatePosition();
  }
  firstUpdated() {
    if (!this.opened) {
      this.ariaHidden = "true";
    }
    this.updateTriggerAriaIds();
  }
  connectedCallback() {
    super.connectedCallback();
    this.slotController.watchSlots(["default", "header", "footer"]).subscribe((changes) => {
      if (changes?.has("header")) {
        this.hasHeader = this.slotController.check("header");
        if (this.headerElements?.length > 0) {
          this.headerElementRef = this.headerElements?.[0];
        }
      }
      if (changes?.has("footer")) {
        this.hasFooter = this.slotController.check("footer");
      }
      if (changes?.has("default")) {
        if (this.contentElements?.length > 0) {
          this.contentElementRef = this.contentElements?.[0];
        }
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanupUpdateListeners?.();
    this.cleanupUpdateListeners = null;
    this.openAnimationRef?.remove();
    this.closeAnimationRef?.remove();
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  /** Toggles the popover between openn and hidden states */
  toggle() {
    return this.visible ? this.close() : this.open();
  }
  /** Opens the popover with any defined delays */
  open() {
    return new Promise((resolve) => {
      if (!this.disabled && !this.visible && this.targetElement) {
        if (this.closeTimeoutId) {
          clearTimeout(this.closeTimeoutId);
          this.closeTimeoutId = null;
        }
        this.openTimeoutId = setTimeout(() => {
          const openPromise = this.withoutPortal ? Promise.resolve() : this.portalController.appendToStack(this, {
            withInertBackdrop: this.triggerOn !== "click" || this.withoutCloseOnClickOutside && this.withoutFocusTrap,
            portalAdapter: this.portalAdapter,
            closeOnClickOutsideHandler: this.handleCloseOnClickOutside
          });
          openPromise.then(() => {
            if (!this.cleanupUpdateListeners) {
              setTimeout(() => {
                this.cleanupUpdateListeners = autoUpdate(
                  this.targetElement,
                  this.popoverContainerElem,
                  this.updatePosition
                );
              });
            }
            if (!this.opened) {
              this._onOpen.emit(null, { bubbles: false });
            }
            this.opened = true;
            this.ariaHidden = "false";
            this.ariaLive = this.triggerOn === "click" || this.triggerOn === "none" ? "off" : "polite";
            this.targetElement?.setAttribute("aria-expanded", "true");
            this.openTimeoutId = null;
            if (this.popoverContainerElem) {
              this.popoverContainerElem.style.display = "block";
              this.closeAnimationRef?.pause();
              this.openAnimationRef?.remove();
              this.openAnimationRef = anime({
                targets: this.popoverContainerElem,
                ...calculateDefaultPanelAnimation(this.renderedPosition, {
                  fallbackPosition: this.position,
                  fallbackPlacement: this.placement,
                  action: "open",
                  scaleX: 0.9
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
        }, this.openDelay);
      }
    }).then(() => {
      this.visible = true;
      this.openAnimationRef?.remove();
      this.openAnimationRef = null;
      this.clickOutsideController.listenForClicksOutsideOf(this.popoverContainerElem);
      if (!this.withoutCloseOnEscape) {
        document.addEventListener("keydown", this.handleKeyDown);
      }
      if (this.triggerOn === "click" && !this.withoutFocusTrap) {
        setTimeout(() => {
          this.updateComplete.then(() => {
            this.focusTrapController.trapFocus(this, document.activeElement);
          });
        }, 50);
      }
    });
  }
  /** Closes the popover with any defined delays */
  close() {
    return new Promise((resolve) => {
      if (this.openTimeoutId) {
        clearTimeout(this.openTimeoutId);
        this.openTimeoutId = null;
      }
      this.closeTimeoutId = setTimeout(() => {
        if (this.opened) {
          this._onClose.emit(null, { bubbles: false });
        }
        this.opened = false;
        this.ariaHidden = "true";
        this.ariaLive = "off";
        this.targetElement?.setAttribute("aria-expanded", "false");
        this.closeTimeoutId = null;
        this.cleanupUpdateListeners?.();
        this.cleanupUpdateListeners = null;
        if (this.popoverContainerElem) {
          this.openAnimationRef?.pause();
          this.closeAnimationRef?.remove();
          this.closeAnimationRef = anime({
            targets: this.popoverContainerElem,
            ...calculateDefaultPanelAnimation(this.renderedPosition, {
              fallbackPosition: this.position,
              fallbackPlacement: this.placement,
              action: "close",
              scaleX: 0.9
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
      }, this.closeDelay);
    }).then(() => {
      this.visible = false;
      this.popoverContainerElem.style.display = "";
      this.closeAnimationRef?.remove();
      this.closeAnimationRef = null;
      this.portalController.removeFromStack();
      this.clickOutsideController.stopListening();
      if (!this.withoutCloseOnEscape) {
        document.removeEventListener("keydown", this.handleKeyDown);
      }
      if (!this.withoutFocusTrap) {
        this.focusTrapController.releaseFocus(true);
      }
    });
  }
  handleKeyDown(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }
  updateTriggerAriaIds() {
    if (this.targetElement) {
      if (this.triggerOn === "click") {
        this.targetElement.removeAttribute("aria-describedby");
        this.targetElement.setAttribute("aria-haspopup", "true");
        this.targetElement.setAttribute("aria-controls", this.id);
      } else {
        this.targetElement.setAttribute("aria-describedby", this.id);
        this.targetElement.removeAttribute("aria-haspopup");
        this.targetElement.removeAttribute("aria-controls");
      }
    }
    if (this.opened) {
      this.ariaLive = this.triggerOn === "click" || this.triggerOn === "none" ? "off" : "polite";
    }
  }
  render() {
    const containerClasses = classMap({ visible: this.visible });
    const arrowClasses = classMap({
      visible: !this.withoutArrow,
      [this.renderedPosition]: true
    });
    return html`${this.instanceStyles}<div class="popover-container ${containerClasses}"><div class="popover"><div class="content" part="content"><div id="header" part="header" class="${classMap({ "has-content": this.hasHeader })}"><slot name="header"></slot></div><span id="body" part="body"><slot></slot></span><div id="footer" part="footer" class="${classMap({ "has-content": this.hasFooter })}"><slot name="footer"></slot></div></div></div><div part="arrow" class="arrow ${arrowClasses}"></div></div>`;
  }
};
MtePopover.styles = [styles, styles2];
MtePopover.shadowRootOptions = { ...MteElement.shadowRootOptions, delegatesFocus: false };
__decorateClass([
  property({ reflect: true })
], MtePopover.prototype, "id", 2);
__decorateClass([
  property({ reflect: true })
], MtePopover.prototype, "position", 2);
__decorateClass([
  property({ reflect: true })
], MtePopover.prototype, "placement", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MtePopover.prototype, "openDelay", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MtePopover.prototype, "closeDelay", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MtePopover.prototype, "offset", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MtePopover.prototype, "withoutArrow", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MtePopover.prototype, "withoutFocusTrap", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MtePopover.prototype, "withoutCloseOnClickOutside", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MtePopover.prototype, "withoutCloseOnEscape", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MtePopover.prototype, "withoutPortal", 2);
__decorateClass([
  property({ attribute: "aria-hidden", reflect: true })
], MtePopover.prototype, "ariaHidden", 2);
__decorateClass([
  property({ attribute: "aria-live", reflect: true })
], MtePopover.prototype, "ariaLive", 2);
__decorateClass([
  property({ attribute: "aria-labelledby", reflect: true })
], MtePopover.prototype, "ariaLabelledBy", 2);
__decorateClass([
  property({ attribute: "aria-describedby", reflect: true })
], MtePopover.prototype, "ariaDescribedBy", 2);
__decorateClass([
  property({ reflect: true })
], MtePopover.prototype, "role", 2);
__decorateClass([
  property({ attribute: "data-focus-fallback", type: Boolean, reflect: true })
], MtePopover.prototype, "isFocusFallback", 2);
__decorateClass([
  property({ reflect: true })
], MtePopover.prototype, "tabindex", 2);
__decorateClass([
  property({ reflect: true })
], MtePopover.prototype, "triggerOn", 2);
__decorateClass([
  property({ attribute: false })
], MtePopover.prototype, "targetElement", 2);
__decorateClass([
  property({ type: Number })
], MtePopover.prototype, "animationDuration", 2);
__decorateClass([
  property()
], MtePopover.prototype, "portalAdapter", 2);
__decorateClass([
  state()
], MtePopover.prototype, "visible", 2);
__decorateClass([
  state()
], MtePopover.prototype, "opened", 2);
__decorateClass([
  state()
], MtePopover.prototype, "renderedPosition", 2);
__decorateClass([
  eventEmitter()
], MtePopover.prototype, "_onTriggerChange", 2);
__decorateClass([
  eventEmitter()
], MtePopover.prototype, "_onOpen", 2);
__decorateClass([
  eventEmitter()
], MtePopover.prototype, "_onClose", 2);
__decorateClass([
  queryAssignedElements({ slot: "header" })
], MtePopover.prototype, "headerElements", 2);
__decorateClass([
  queryAssignedElements()
], MtePopover.prototype, "contentElements", 2);
__decorateClass([
  query(".popover-container")
], MtePopover.prototype, "popoverContainerElem", 2);
__decorateClass([
  query(".arrow")
], MtePopover.prototype, "arrowElem", 2);
__decorateClass([
  state()
], MtePopover.prototype, "hasHeader", 2);
__decorateClass([
  state()
], MtePopover.prototype, "hasFooter", 2);
__decorateClass([
  onUpdate("triggerOn")
], MtePopover.prototype, "handleTriggerOnChange", 1);
__decorateClass([
  onUpdate("id", { waitUntilFirstUpdate: true })
], MtePopover.prototype, "handleIdChange", 1);
__decorateClass([
  onUpdate("disabled", { waitUntilFirstUpdate: true })
], MtePopover.prototype, "handleDisabledChange", 1);
__decorateClass([
  onUpdate("withoutCloseOnEscape")
], MtePopover.prototype, "handleWithoutCloseOnEscape", 1);
__decorateClass([
  onUpdate(["position", "placement", "se", "sp", "offset"], { waitUntilFirstUpdate: true })
], MtePopover.prototype, "handlePositionChange", 1);
__decorateClass([
  onUpdate(["targetElement"], { waitUntilFirstUpdate: true })
], MtePopover.prototype, "handleTargetChange", 1);
MtePopover = __decorateClass([
  defineElement("mte-popover")
], MtePopover);

export {
  MtePopover
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2F0b21pYy9wb3BvdmVyIiwgIi4uLy4uLy4uL3NyYy9hdG9taWMvcG9wb3Zlci9wb3BvdmVyLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tcGFkZGluZy15OjEycHg7LS1wYWRkaW5nLXg6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LW1kKTstLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCk7LS1iYWNrZ3JvdW5kOnZhcigtLW10ZS1zdXJmYWNlLTIpOy0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMil9Omhvc3R7ZGlzcGxheTpibG9jaztwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMH06aG9zdCA6OnNsb3R0ZWQobXRlLWNvbnRlbnQpLDpob3N0IDo6c2xvdHRlZChtdGUtZm9vdGVyKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWhlYWRlcil7LS1jb21wb3NpdGlvbi1wYWRkaW5nLXk6MHB4Oy0tY29tcG9zaXRpb24tcGFkZGluZy14OjBweH0udHJpZ2dlci1jb250YWluZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2t9LnBvcG92ZXItY29udGFpbmVye2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjpmaXhlZDt6LWluZGV4OnZhcigtLW10ZS16LWluZGV4LTIwKX0ucG9wb3Zlci1jb250YWluZXIudmlzaWJsZXtib3JkZXItcmFkaXVzOnZhcigtLXJhZGl1cyk7Ym94LXNoYWRvdzp2YXIoLS1tdGUtZWxldmF0aW9uLXoxKX0ucG9wb3Zlcntmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1yYWRpdXMpO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tbGluZS1oZWlnaHQpO292ZXJmbG93OmhpZGRlbjtwb2ludGVyLWV2ZW50czphdXRvO3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7dGV4dC10cmFuc2Zvcm06aW5oZXJpdH0uY29udGVudHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6dmFyKC0tcGFkZGluZy15KSB2YXIoLS1wYWRkaW5nLXgpIHZhcigtLXBhZGRpbmcteSkgdmFyKC0tcGFkZGluZy14KTt6LWluZGV4OjJ9I2hlYWRlcnthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4fSNoZWFkZXIuaGFzLWNvbnRlbnR7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy15KX1zbG90W25hbWU9aGVhZGVyXXtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7ZGlzcGxheTpibG9jaztmbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1ncm93OjE7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXdlaWdodCk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtd2VpZ2h0LWJvbGQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1saW5lLWhlaWdodCk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdH06aG9zdCA6OnNsb3R0ZWQobXRlLXRpdGxlKXtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXdlaWdodCk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtd2VpZ2h0LWJvbGQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1saW5lLWhlaWdodCk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdH0jYm9keXtkaXNwbGF5OmJsb2NrO2ZsZXgtZ3JvdzoxfSNmb290ZXIuaGFzLWNvbnRlbnR7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy15KX0uYXJyb3d7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtkaXNwbGF5Om5vbmU7aGVpZ2h0OjhweDtvcGFjaXR5OjA7cG9zaXRpb246YWJzb2x1dGU7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7d2lkdGg6OHB4O3otaW5kZXg6MX0uYXJyb3cudG9wLC5hcnJvdy50b3AtZW5kLC5hcnJvdy50b3Atc3RhcnR7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItcmlnaHQ6MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcil9LmFycm93LnJpZ2h0LC5hcnJvdy5yaWdodC1lbmQsLmFycm93LnJpZ2h0LXN0YXJ0e2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcil9LmFycm93LmJvdHRvbSwuYXJyb3cuYm90dG9tLWVuZCwuYXJyb3cuYm90dG9tLXN0YXJ0e2JvcmRlci1sZWZ0OjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcil9LmFycm93LmxlZnQsLmFycm93LmxlZnQtZW5kLC5hcnJvdy5sZWZ0LXN0YXJ0e2JvcmRlci1yaWdodDoxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpfS5hcnJvdy52aXNpYmxle2Rpc3BsYXk6YmxvY2s7b3BhY2l0eToxfWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBcUIsWUFBWTtBQUNqQyxTQUFTLFVBQVUsT0FBTyx1QkFBdUIsYUFBYTtBQUM5RCxTQUFTLGdCQUFnQjs7O0FDRnpCLFNBQVMsV0FBVztBQUFhLElBQU1BLFVBQVM7OztBREtoRDtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO09BQ0s7QUErQlAsT0FBTyxXQUFXO0FBRWxCLHVCQUF1QixjQUFjLENBQUMsWUFBWSxDQUFDO0FBbUJuRCxJQUFJLGVBQWU7QUFDbkIsSUFBSSxvQkFBb0I7QUFrQmpCLElBQU0sYUFBTixjQUNHLGNBQWMsZ0JBQW9ELFVBQVUsQ0FBQyxFQUV2RjtFQWtPRSxjQUFjO0FBQ1osVUFBTTtBQTdOcUIsY0FBSyxnQkFBZ0IsY0FBYztBQUduQyxvQkFBK0I7QUFHL0IscUJBQWlDO0FBR25CLHFCQUFZO0FBR1osc0JBQWE7QUFHYixrQkFBUztBQUdSLHdCQUFlO0FBR2YsNEJBQW1CO0FBR25CLHNDQUE2QjtBQUc3QixnQ0FBdUI7QUFHdkIseUJBQWdCO0FBR0wsc0JBQWE7QUFHZixvQkFBVztBQVNuQyxnQkFBNkI7QUFHb0IsMkJB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
