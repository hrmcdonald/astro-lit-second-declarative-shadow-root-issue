import {
  calculateDefaultPanelAnimation,
  calculateOverlayPlacements
} from "./chunk.SRHT6JKE.js";
import {
  MteIconRegistryService
} from "./chunk.L7F3KXB6.js";
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
  defaultPortalAdapter,
  defineElement,
  eventEmitter,
  onUpdate,
  styles7 as styles
} from "./chunk.Y4EV6E5D.js";

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
import { config } from "@mortar/styles";
import { mtrIconClose } from "@mortar/icons";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2F0b21pYy9wb3BvdmVyIiwgIi4uLy4uLy4uL3NyYy9hdG9taWMvcG9wb3Zlci9wb3BvdmVyLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tcGFkZGluZy15OjEycHg7LS1wYWRkaW5nLXg6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LW1kKTstLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCk7LS1iYWNrZ3JvdW5kOnZhcigtLW10ZS1zdXJmYWNlLTIpOy0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMil9Omhvc3R7ZGlzcGxheTpibG9jaztwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMH06aG9zdCA6OnNsb3R0ZWQobXRlLWNvbnRlbnQpLDpob3N0IDo6c2xvdHRlZChtdGUtZm9vdGVyKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWhlYWRlcil7LS1jb21wb3NpdGlvbi1wYWRkaW5nLXk6MHB4Oy0tY29tcG9zaXRpb24tcGFkZGluZy14OjBweH0udHJpZ2dlci1jb250YWluZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2t9LnBvcG92ZXItY29udGFpbmVye2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjpmaXhlZDt6LWluZGV4OnZhcigtLW10ZS16LWluZGV4LTIwKX0ucG9wb3Zlci1jb250YWluZXIudmlzaWJsZXtib3JkZXItcmFkaXVzOnZhcigtLXJhZGl1cyk7Ym94LXNoYWRvdzp2YXIoLS1tdGUtZWxldmF0aW9uLXoxKX0ucG9wb3Zlcntmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1yYWRpdXMpO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tbGluZS1oZWlnaHQpO292ZXJmbG93OmhpZGRlbjtwb2ludGVyLWV2ZW50czphdXRvO3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7dGV4dC10cmFuc2Zvcm06aW5oZXJpdH0uY29udGVudHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6dmFyKC0tcGFkZGluZy15KSB2YXIoLS1wYWRkaW5nLXgpIHZhcigtLXBhZGRpbmcteSkgdmFyKC0tcGFkZGluZy14KTt6LWluZGV4OjJ9I2hlYWRlcnthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4fSNoZWFkZXIuaGFzLWNvbnRlbnR7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy15KX1zbG90W25hbWU9aGVhZGVyXXtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7ZGlzcGxheTpibG9jaztmbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1ncm93OjE7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXdlaWdodCk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtd2VpZ2h0LWJvbGQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1saW5lLWhlaWdodCk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdH06aG9zdCA6OnNsb3R0ZWQobXRlLXRpdGxlKXtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXdlaWdodCk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtd2VpZ2h0LWJvbGQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1saW5lLWhlaWdodCk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdH0jYm9keXtkaXNwbGF5OmJsb2NrO2ZsZXgtZ3JvdzoxfSNmb290ZXIuaGFzLWNvbnRlbnR7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy15KX0uYXJyb3d7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtkaXNwbGF5Om5vbmU7aGVpZ2h0OjhweDtvcGFjaXR5OjA7cG9zaXRpb246YWJzb2x1dGU7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7d2lkdGg6OHB4O3otaW5kZXg6MX0uYXJyb3cudG9wLC5hcnJvdy50b3AtZW5kLC5hcnJvdy50b3Atc3RhcnR7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItcmlnaHQ6MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcil9LmFycm93LnJpZ2h0LC5hcnJvdy5yaWdodC1lbmQsLmFycm93LnJpZ2h0LXN0YXJ0e2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcil9LmFycm93LmJvdHRvbSwuYXJyb3cuYm90dG9tLWVuZCwuYXJyb3cuYm90dG9tLXN0YXJ0e2JvcmRlci1sZWZ0OjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcil9LmFycm93LmxlZnQsLmFycm93LmxlZnQtZW5kLC5hcnJvdy5sZWZ0LXN0YXJ0e2JvcmRlci1yaWdodDoxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpfS5hcnJvdy52aXNpYmxle2Rpc3BsYXk6YmxvY2s7b3BhY2l0eToxfWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQXFCLFlBQVk7QUFDakMsU0FBUyxVQUFVLE9BQU8sdUJBQXVCLGFBQWE7QUFDOUQsU0FBUyxnQkFBZ0I7OztBQ0Z6QixTQUFTLFdBQVc7QUFBYSxJQUFNQSxVQUFTOzs7QURLaEQ7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtPQUNLO0FBQ1AsU0FBUyxjQUFjO0FBdUJ2QixTQUFTLG9CQUFvQjtBQU83QixPQUFPLFdBQVc7QUFFbEIsdUJBQXVCLGNBQWMsQ0FBQyxZQUFZLENBQUM7QUFtQm5ELElBQUksZUFBZTtBQUNuQixJQUFJLG9CQUFvQjtBQWtCakIsSUFBTSxhQUFOLGNBQ0csY0FBYyxnQkFBb0QsVUFBVSxDQUFDLEVBRXZGO0VBa09FLGNBQWM7QUFDWixVQUFNO0FBN05xQixjQUFLLGdCQUFnQixjQUFjO0FBR25DLG9CQUErQjtBQUcvQixxQkFBaUM7QUFHbkIscUJBQVk7QUFHWixzQkFBYTtBQUdiLGtCQUFTO0FBR1Isd0JBQWU7QUFHZiw0QkFBbUI7QUFHbkIsc0NBQTZCO0FBRzdCLGdDQUF1QjtBQUd2Qix5QkFBZ0I7QUFHTCxzQkFBYTtB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
