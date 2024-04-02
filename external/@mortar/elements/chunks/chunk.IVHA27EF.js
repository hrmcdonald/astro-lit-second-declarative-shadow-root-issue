import {
  calculateDefaultPanelAnimation,
  calculateOverlayPlacements
} from "./chunk.SRHT6JKE.js";
import {
  DisabledMixin,
  MteElement,
  PortalController,
  StylePartsMixin,
  __decorateClass,
  config,
  defaultPortalAdapter,
  defineElement,
  eventEmitter,
  onUpdate,
  styles7 as styles
} from "./chunk.KVXAK6W4.js";

// src/atomic/tooltip/tooltip.element.ts
import {
  arrow,
  autoUpdate,
  computePosition,
  flip,
  hide,
  offset,
  shift
} from "@floating-ui/dom";
import { html } from "lit";
import { property, query, state } from "lit/decorators.js";

// src/atomic/tooltip/tooltip.styles.ts
import { css } from "lit";
var styles2 = css`:host{--color:var(--mte-light);--background:var(--mte-dark);--z-index:var(--mte-z-index-20);--radius:var(--mte-border-radius-xl);--padding-x:var(--mte-space-md);--padding-y:var(--mte-space-sm);pointer-events:auto}.tooltip{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;border-radius:var(--radius);color:var(--color);display:none;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);max-width:250px;opacity:0;padding:var(--padding-y) var(--padding-x);position:fixed;text-decoration:inherit;text-overflow:ellipsis;text-transform:inherit;z-index:var(--z-index)}.arrow,.tooltip{background:var(--background)}.arrow{height:10px;position:absolute;transform:rotate(45deg);width:10px}`;

// src/atomic/tooltip/tooltip.element.ts
import anime from "animejs";
var TOOLTIP_AUTO_LABEL_TAGS = ["MTE-ICON-BUTTON"];
var nextUniqueId = 0;
var MteTooltip = class extends DisabledMixin(StylePartsMixin(MteElement)) {
  constructor() {
    super();
    this.id = `mte-tooltip--${nextUniqueId++}`;
    this.position = "top";
    this.placement = "center";
    this.openDelay = 0;
    this.closeDelay = 0;
    this.role = "tooltip";
    this.ariaHidden = "true";
    this.ariaLive = "off";
    this.triggerOn = "hover";
    this.withoutPortal = false;
    this.animationDuration = config.animation.transitionDurationJs.short * 1e3;
    this.asAriaLabel = false;
    this.withoutAutoLabel = false;
    this.opened = false;
    this.assumeLabel = false;
    this.portalAdapter = defaultPortalAdapter;
    this.withoutA11y = false;
    this.visible = false;
    this.renderedPosition = null;
    /** spacing in px between the overlay and the target */
    this.offset = 8;
    /** Subscription callback to clear hover listeners */
    this.cleanupUpdateListeners = null;
    this.portalController = new PortalController(this);
    /** Triggers a floating-ui position recompute */
    this.updatePosition = () => {
      if (this.targetElement) {
        const [placement, fallbackPlacements] = calculateOverlayPlacements(
          this.position,
          this.placement
        );
        computePosition(this.targetElement, this.tooltipElem, {
          strategy: "fixed",
          placement,
          middleware: [
            shift({ padding: this.offset }),
            offset(this.offset),
            flip({ fallbackPlacements }),
            arrow({ element: this.arrowElem }),
            hide()
          ]
        }).then(({ x, y, placement: placement2, middlewareData }) => {
          this.renderedPosition = placement2;
          const { referenceHidden } = middlewareData.hide;
          Object.assign(this.tooltipElem.style, {
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
              [staticSide]: "-3px"
            });
          }
        });
      }
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  handleAutoLabelChange() {
    this.updateLabelAssumption();
  }
  handleTriggerOnChange() {
    this._onTriggerChange.emit(this.triggerOn);
  }
  handleA11yChange() {
    this.updateTargetAriaIds();
  }
  handleDisabledChange() {
    if (this.visible) {
      this.close();
    }
  }
  handlePositionChange() {
    if (this.opened && this.cleanupUpdateListeners) {
      this.updatePosition();
    }
    this.renderedPosition = null;
  }
  firstUpdated() {
    if (!this.opened) {
      this.ariaHidden = "true";
      this.ariaLive = "off";
    }
    this.updateTargetAriaIds();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanupUpdateListeners?.();
    this.cleanupUpdateListeners = null;
    this.openAnimationRef?.remove();
    this.closeAnimationRef?.remove();
  }
  /** Toggles the tooltip between open and closed states */
  toggle() {
    return this.visible ? this.close() : this.open();
  }
  /** Opens the tooltip with any defined delays */
  open() {
    return new Promise((resolve) => {
      if (!this.disabled && !this.opened && this.targetElement) {
        if (this.closeTimeoutId) {
          clearTimeout(this.closeTimeoutId);
          this.closeTimeoutId = null;
        }
        this.openTimeoutId = setTimeout(() => {
          const openPromise = this.withoutPortal ? Promise.resolve() : this.portalController.appendToStack(this, {
            withInertBackdrop: true,
            portalAdapter: this.portalAdapter
          });
          openPromise.then(() => {
            if (!this.cleanupUpdateListeners) {
              setTimeout(() => {
                this.cleanupUpdateListeners = autoUpdate(
                  this.targetElement,
                  this.tooltipElem,
                  this.updatePosition
                );
              });
            }
            if (!this.opened) {
              this._onOpen.emit(null, { bubbles: false });
            }
            this.opened = true;
            this.ariaHidden = this.asAriaLabel || this.assumeLabel ? "true" : "false";
            this.ariaLive = this.asAriaLabel || this.assumeLabel ? "off" : "polite";
            this.openTimeoutId = null;
            if (this.tooltipElem) {
              this.tooltipElem.style.display = "block";
              this.closeAnimationRef?.pause();
              this.openAnimationRef?.remove();
              this.openAnimationRef = anime({
                targets: this.tooltipElem,
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
                easing: "easeOutElastic",
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
    });
  }
  /** Closes the tooltip with any defined delays */
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
        this.closeTimeoutId = null;
        this.cleanupUpdateListeners?.();
        this.cleanupUpdateListeners = null;
        if (this.tooltipElem) {
          this.openAnimationRef?.pause();
          this.closeAnimationRef?.remove();
          this.closeAnimationRef = anime({
            targets: this.tooltipElem,
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
            easing: "easeOutElastic",
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
      this.tooltipElem.style.display = "";
      this.closeAnimationRef?.remove();
      this.closeAnimationRef = null;
      this.portalController.removeFromStack();
    });
  }
  updateLabelAssumption() {
    if (!this.withoutA11y) {
      this.assumeLabel = !this.withoutAutoLabel && TOOLTIP_AUTO_LABEL_TAGS.includes(this.targetElement?.tagName) && !this.targetElement.getAttribute("aria-label") && !this.targetElement.getAttribute("aria-labelledby");
      if (this.opened) {
        this.ariaHidden = this.asAriaLabel || this.assumeLabel ? "true" : "false";
        this.ariaLive = this.asAriaLabel || this.assumeLabel ? "off" : "polite";
      }
    }
  }
  /** Syncs the tooltips id to all trigger elements */
  updateTargetAriaIds() {
    if (!this.withoutA11y) {
      this.updateLabelAssumption();
      if (this.asAriaLabel || this.assumeLabel) {
        if (!this.targetElement?.getAttribute("aria-labelledby")) {
          this.targetElement?.setAttribute("aria-labelledby", this.id);
        }
        if (this.targetElement?.getAttribute("aria-describedby")) {
          this.targetElement?.removeAttribute("aria-describedby");
        }
      } else {
        if (!this.targetElement?.getAttribute("aria-describedby")) {
          this.targetElement?.setAttribute("aria-describedby", this.id);
        }
        if (this.targetElement?.getAttribute("aria-labelledby")) {
          this.targetElement?.removeAttribute("aria-labelledby");
        }
      }
    }
  }
  render() {
    return html`${this.instanceStyles}<div part="tooltip" class="tooltip"><slot></slot><div part="arrow" class="arrow"></div></div>`;
  }
};
MteTooltip.styles = [styles, styles2];
__decorateClass([
  property({ reflect: true })
], MteTooltip.prototype, "id", 2);
__decorateClass([
  property()
], MteTooltip.prototype, "position", 2);
__decorateClass([
  property()
], MteTooltip.prototype, "placement", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MteTooltip.prototype, "openDelay", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MteTooltip.prototype, "closeDelay", 2);
__decorateClass([
  property({ reflect: true })
], MteTooltip.prototype, "role", 2);
__decorateClass([
  property({ attribute: "aria-hidden", reflect: true })
], MteTooltip.prototype, "ariaHidden", 2);
__decorateClass([
  property({ attribute: "aria-live", reflect: true })
], MteTooltip.prototype, "ariaLive", 2);
__decorateClass([
  property({ reflect: true })
], MteTooltip.prototype, "triggerOn", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteTooltip.prototype, "withoutPortal", 2);
__decorateClass([
  property({ type: Number })
], MteTooltip.prototype, "animationDuration", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteTooltip.prototype, "asAriaLabel", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteTooltip.prototype, "withoutAutoLabel", 2);
__decorateClass([
  state()
], MteTooltip.prototype, "opened", 2);
__decorateClass([
  state()
], MteTooltip.prototype, "assumeLabel", 2);
__decorateClass([
  property({ type: Object })
], MteTooltip.prototype, "targetElement", 2);
__decorateClass([
  property()
], MteTooltip.prototype, "portalAdapter", 2);
__decorateClass([
  property({ type: Boolean })
], MteTooltip.prototype, "withoutA11y", 2);
__decorateClass([
  eventEmitter()
], MteTooltip.prototype, "_onOpen", 2);
__decorateClass([
  eventEmitter()
], MteTooltip.prototype, "_onClose", 2);
__decorateClass([
  eventEmitter()
], MteTooltip.prototype, "_onTriggerChange", 2);
__decorateClass([
  state()
], MteTooltip.prototype, "visible", 2);
__decorateClass([
  state()
], MteTooltip.prototype, "renderedPosition", 2);
__decorateClass([
  query(".tooltip")
], MteTooltip.prototype, "tooltipElem", 2);
__decorateClass([
  query(".arrow")
], MteTooltip.prototype, "arrowElem", 2);
__decorateClass([
  onUpdate("withoutAutoLabel")
], MteTooltip.prototype, "handleAutoLabelChange", 1);
__decorateClass([
  onUpdate("triggerOn")
], MteTooltip.prototype, "handleTriggerOnChange", 1);
__decorateClass([
  onUpdate(["id", "targetElement", "asAriaLabel"], { waitUntilFirstUpdate: true })
], MteTooltip.prototype, "handleA11yChange", 1);
__decorateClass([
  onUpdate("disabled", { waitUntilFirstUpdate: true })
], MteTooltip.prototype, "handleDisabledChange", 1);
__decorateClass([
  onUpdate(["position", "placement", "sp", "se"], { waitUntilFirstUpdate: true })
], MteTooltip.prototype, "handlePositionChange", 1);
MteTooltip = __decorateClass([
  defineElement("mte-tooltip")
], MteTooltip);

export {
  MteTooltip
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2F0b21pYy90b29sdGlwIiwgIi4uLy4uLy4uL3NyYy9hdG9taWMvdG9vbHRpcC90b29sdGlwLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tY29sb3I6dmFyKC0tbXRlLWxpZ2h0KTstLWJhY2tncm91bmQ6dmFyKC0tbXRlLWRhcmspOy0tei1pbmRleDp2YXIoLS1tdGUtei1pbmRleC0yMCk7LS1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteGwpOy0tcGFkZGluZy14OnZhcigtLW10ZS1zcGFjZS1tZCk7LS1wYWRkaW5nLXk6dmFyKC0tbXRlLXNwYWNlLXNtKTtwb2ludGVyLWV2ZW50czphdXRvfS50b29sdGlwe2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtib3JkZXItcmFkaXVzOnZhcigtLXJhZGl1cyk7Y29sb3I6dmFyKC0tY29sb3IpO2Rpc3BsYXk6bm9uZTtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tbGluZS1oZWlnaHQpO21heC13aWR0aDoyNTBweDtvcGFjaXR5OjA7cGFkZGluZzp2YXIoLS1wYWRkaW5nLXkpIHZhcigtLXBhZGRpbmcteCk7cG9zaXRpb246Zml4ZWQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3otaW5kZXg6dmFyKC0tei1pbmRleCl9LmFycm93LC50b29sdGlwe2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCl9LmFycm93e2hlaWdodDoxMHB4O3Bvc2l0aW9uOmFic29sdXRlO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3dpZHRoOjEwcHh9YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7RUFFRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtPQUNLO0FBRVAsU0FBcUIsWUFBWTtBQUNqQyxTQUFTLFVBQVUsT0FBTyxhQUFhOzs7QUNadkMsU0FBUyxXQUFXO0FBQWEsSUFBTUEsVUFBUzs7O0FEb0NoRCxPQUFPLFdBQVc7QUFHbEIsSUFBTSwwQkFBMEIsQ0FBQyxpQkFBaUI7QUFVbEQsSUFBSSxlQUFlO0FBVVosSUFBTSxhQUFOLGNBQ0csY0FBYyxnQkFBb0QsVUFBVSxDQUFDLEVBRXZGO0VBZ0pFLGNBQWM7QUFDWixVQUFNO0FBN0lxQixjQUFLLGdCQUFnQixjQUFjO0FBR3BELG9CQUErQjtBQUcvQixxQkFBaUM7QUFHRixxQkFBWTtBQUdaLHNCQUFhO0FBRzNCLGdCQUFPO0FBR21CLHNCQUFhO0FBR2Ysb0JBQVc7QUFHbkMscUJBQThCO0FBR2YseUJBQWdCO0FBR2hDLDZCQUMxQixPQUFPLFVBQVUscUJBQXFCLFFBQVE7QUFHSix1QkFBYztBQUdkLDRCQUFtQjtBQUd0RCxrQkFBUztBQUdULHVCQUFjO0FBcUJYLHlCQUErQjtBQU9kLHVCQUFjO0FBWWxDLFNBQVEsVUFBVTtBQUdsQixTQUFRLG1CQUFxQztBQWF0RDtTQUFRLFNBQVM7QUFHakI7U0FBUSx5QkFBMEI7QUFNbEMsU0FBUSxtQkFBbUIsSUFBSSxpQkFBaUIsSUFBSTtBQWtPcEQ7U0FBUSxpQkFBaUIsTUFBTTtBQUM3QixVQUFJLEtBQUssZUFBZTtBQUN0QixjQUFNLENBQUMsV0FBVyxrQkFBa0IsSUFBSTtVQUN0QyxLQUFLO1VBQ0wsS0FBSztRQUNQO0FBQ0Esd0JBQWdCLEtBQUssZUFBZSxLQUFLLGFBQWE7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QXRELFNBQVMsRUFBRSxXQUFXLGVBQWUsU0FBUyxLQUFLLENBQUM7R0F6QjFDLFdBeUI0QztBQUdGO0VBQXBELFNBQVMsRUFBRSxXQUFXLGFBQWEsU0FBUyxLQUFLLENBQUM7R0E1QnhDLFdBNEIwQztBQUd4QjtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0EvQmhCLFdBK0JrQjtBQUdlO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FsQy9CLFdBa0NpQztBQUdoQjtFQUEzQixTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7R0FyQ2YsV0FxQ2lCO0FBSWdCO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0F6Qy9CLFdBeUNpQztBQUdBO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0E1Qy9CLFdBNENpQztBQUduQztFQUFSLE1BQU07R0EvQ0ksV0ErQ0Y7QUFHQTtFQUFSLE1BQU07R0FsREksV0FrREY7QUFPbUI7RUFBM0IsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0dBekRmLFdBeURpQjtBQWNoQjtFQUFYLFNBQVM7R0F2RUMsV0F1RUM7QUFPaUI7RUFBNUIsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0dBOUVoQixXQThFa0I7QUFHYjtFQUFmLGFBQWE7R0FqRkgsV0FpRks7QUFHQTtFQUFmLGFBQWE7R0FwRkgsV0FvRks7QUFHQTtFQUFmLGFBQWE7R0F2RkgsV0F1Rks7QUFHQztFQUFoQixNQUFNO0dBMUZJLFdBMEZNO0FBR0E7RUFBaEIsTUFBTTtHQTdGSSxXQTZGTTtBQUVFO0VBQWxCLE1BQU0sVUFBVTtHQS9GTixXQStGUTtBQUVGO0VBQWhCLE1BQU0sUUFBUTtHQWpHSixXQWlHTTtBQXFCVDtFQURQLFNBQVMsa0JBQWtCO0dBckhqQixXQXNISDtBQUtBO0VBRFAsU0FBUyxXQUFXO0dBMUhWLFdBMkhIO0FBS0E7RUFEUCxTQUFTLENBQUMsTUFBTSxpQkFBaUIsYUFBYSxHQUFHLEVBQUUsc0JBQXNCLEtBQUssQ0FBQztHQS9IckUsV0FnSUg7QUFLQTtFQURQLFNBQVMsWUFBWSxFQUFFLHNCQUFzQixLQUFLLENBQUM7R0FwSXpDLFdBcUlIO0FBT0E7RUFEUCxTQUFTLENBQUMsWUFBWSxhQUFhLE1BQU0sSUFBSSxHQUFHLEVBQUUsc0JBQXNCLEtBQUssQ0FBQztHQTNJcEUsV0E0SUg7QUE1SUcsYUFBTjtFQUROLGNBQWMsYUFBYTtHQUNmOyIsCiAgIm5hbWVzIjogWyJzdHlsZXMiLCAicGxhY2VtZW50IiwgInN0eWxlcyJdCn0K
