import "../../chunks/chunk.VG6JG275.js";
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
  DisabledMixin,
  MteElement,
  StylePartsMixin,
  TabIndexMixin,
  __decorateClass,
  defineElement,
  eventEmitter,
  isValidResizeController,
  onUpdate,
  styles7 as styles
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/split-panel/split-panel.element.ts
import { html } from "lit";
import { property, query } from "lit/decorators.js";

// src/atomic/split-panel/split-panel.styles.ts
import { css } from "lit";
var styles2 = css`:host{--divider-thickness:2px;--divider-padding:calc(var(--mte-space-sm) + var(--mte-space-xs));--divider-min-clamp:0;--divider-max-clamp:100%;--divider-position:50%;--divider-color:var(--mte-border-3);--divider-hover-color:var(--mte-grey-7);--grabber-width:6px;--grabber-height:24px;--grabber-radius:var(--mte-border-radius-xs);--grabber-border-thin:2px;--grabber-border-thick:4px;--grabber-color:var(--mte-grey-8);--grabber-groove-color:var(--mte-surface-1);--grabber-elevation:var(--mte-elevation-z2);--cursor:col-resize;--active-color:var(--mte-darker);--control-margin:var(--mte-space-xs);display:grid;position:relative}:host:after,:host:before{content:"";height:0;position:absolute;width:0}:host:before{left:var(--divider-min-clamp);top:0}:host:after{left:var(--divider-max-clamp);top:0}:host([orientation=vertical]):before{left:0;top:var(--divider-min-clamp)}:host([orientation=vertical]):after{left:0;top:var(--divider-max-clamp)}:host([primaryPanel=end]):before{left:unset;right:var(--divider-min-clamp)}:host([primaryPanel=end]):after{left:unset;right:var(--divider-max-clamp)}:host([orientation=vertical][primaryPanel=end]):before{bottom:var(--divider-min-clamp);left:0;top:unset}:host([orientation=vertical][primaryPanel=end]):after{bottom:var(--divider-max-clamp);left:0;top:unset}.divider{background-clip:content-box;background-color:var(--divider-color);cursor:var(--cursor);margin:0 calc(var(--divider-padding)*-1);padding:0 var(--divider-padding);position:relative;width:var(--divider-thickness);z-index:1}.divider:hover{--divider-color:var(--divider-hover-color);--grabber-color:var(--active-color)}.divider:focus-visible{--divider-color:var(--mte-focus);--grabber-color:var(--mte-focus)}.divider:active{--divider-color:var(--active-color);--grabber-color:var(--active-color)}:host(:not([withoutGrabber])) .divider:before{background:var(--grabber-color);box-shadow:var(--grabber-elevation);content:"";display:block;height:var(--grabber-height);left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:var(--divider-thickness);z-index:1}:host([orientation=vertical]:not([withoutGrabber])) .divider:before{height:var(--divider-thickness);width:var(--grabber-height)}:host(:not([withoutGrabber])) .divider:after{background:var(--grabber-groove-color);border:var(--grabber-border-thin) solid var(--grabber-color);border-bottom-width:var(--grabber-border-thick);border-radius:var(--grabber-radius);border-top-width:var(--grabber-border-thick);box-shadow:var(--grabber-elevation);content:"";display:block;height:var(--grabber-height);left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:var(--grabber-width);z-index:1}:host(:not([disabled]):not([withoutGrabber])) .divider:hover:after,:host(:not([disabled]):not([withoutGrabber])) .divider:hover:before{cursor:grab}:host(:not([disabled]):not([withoutGrabber])) .divider:active:after,:host(:not([disabled]):not([withoutGrabber])) .divider:active:before{cursor:var(--cursor)}:host([orientation=horizontal]){grid-template-columns:clamp(0%,clamp(var(--divider-min-clamp),calc(var(--divider-position) - var(--divider-thickness)/2),var(--divider-max-clamp)),calc(100% - var(--divider-thickness))) var(--divider-thickness) auto}:host([orientation=horizontal][primaryPanel=end]){grid-template-columns:auto var(--divider-thickness) clamp(0%,clamp(var(--divider-min-clamp),calc(var(--divider-position) - var(--divider-thickness)/2),var(--divider-max-clamp)),calc(100% - var(--divider-thickness)))}:host([orientation=vertical]){grid-template-rows:clamp(0%,clamp(var(--divider-min-clamp),calc(var(--divider-position) - var(--divider-thickness)/2),var(--divider-max-clamp)),calc(100% - var(--divider-thickness))) var(--divider-thickness) auto}:host([orientation=vertical][primaryPanel=end]){grid-template-rows:auto var(--divider-thickness) clamp(0%,clamp(var(--divider-min-clamp),calc(var(--divider-position) - var(--divider-thickness)/2),var(--divider-max-clamp)),calc(100% - var(--divider-thickness)))}:host([orientation=vertical]) .divider{height:var(--divider-thickness);margin:calc(var(--divider-padding)*-1) 0;padding:var(--divider-padding) 0;width:auto}:host([orientation=vertical]:not([withoutGrabber])) .divider:after{border-width:var(--grabber-border-thin) var(--grabber-border-thick);height:var(--grabber-width);left:50%;transform:translate(-50%,-50%);width:var(--grabber-height)}:host([orientation=vertical]:not([disabled])) .divider{--cursor:row-resize}:host([disabled]),:host([disabled]) .divider:active,:host([disabled]) .divider:hover{--cursor:not-allowed;--divider-color:var(--mte-disabled-2);--grabber-color:var(--mte-disabled-3);--grabber-elevation:none}::slotted([slot=end]),::slotted([slot=start]){overflow:hidden}:host(:not([withControls])) .controls{display:none;z-index:1}:host([withControls]) .controls{position:absolute;right:var(--control-margin);top:var(--control-margin)}:host([withControls][controlPosition=top]) .controls{position:absolute;top:var(--control-margin)}:host([withControls][controlPosition=bottom]) .controls{bottom:var(--control-margin);position:absolute;top:unset}:host([withControls][controlPlacement=start]) .controls{left:var(--control-margin);position:absolute;right:unset}:host([withControls][controlPlacement=end]) .controls{position:absolute;right:var(--control-margin)}.controls{background:var(--mte-surface-2);box-shadow:var(--mte-elevation-z1)}`;

// src/atomic/split-panel/split-panel.element.ts
import { selectorFactory } from "@mortar/styles";
import { ResizeController } from "@lit-labs/observers/resize-controller.js";
import {
  mtrIconArrowCollapseLeft,
  mtrIconArrowCollapseRight,
  mtrIconArrowLeft,
  mtrIconArrowRight
} from "@mortar/icons";
MteIconRegistryService.registerIcons([
  mtrIconArrowLeft,
  mtrIconArrowRight,
  mtrIconArrowCollapseLeft,
  mtrIconArrowCollapseRight
]);
var MteSplitPanel = class extends TabIndexMixin(
  DisabledMixin(StylePartsMixin(MteElement))
) {
  constructor() {
    super(...arguments);
    this.orientation = "horizontal";
    this.dividerPosition = 50;
    this.withControls = false;
    this.controlPosition = "top";
    this.controlPlacement = "end";
    this.primaryPanel = "start";
    this._primaryMin = "0%";
    this._primaryMax = "100%";
    /** The minimum and maximum percentages for the divider. Used to determine if divider should be able to move left or right. Derived from primary min and max. */
    this.minDividerPercent = 0;
    this.maxDividerPercent = 100;
    this.withoutGrabber = false;
    this.dividerAriaLabel = "Resize";
    this.lastPosition = this.dividerPosition;
    this.handleResize = (entries) => {
      if (entries?.length > 0) {
        const container = entries[0].contentRect;
        const { width: containerWidth, height: containerHeight } = container;
        const containerSize = this.isVertical() ? containerHeight : containerWidth;
        const leftPanelSize = this.percentageToPixels(this.dividerPosition);
        if (containerSize === 0) {
          return;
        }
        this.dividerPosition = this.pixelsToPercentage(leftPanelSize, containerSize);
        this.size = containerSize;
        this.updateMinMaxMarkers();
      }
    };
  }
  get primaryMin() {
    return this._primaryMin;
  }
  set primaryMin(newValue) {
    this._primaryMin = !newValue ? "0%" : newValue;
  }
  get primaryMax() {
    return this._primaryMax;
  }
  set primaryMax(newValue) {
    this._primaryMax = !newValue ? "100%" : newValue;
  }
  connectedCallback() {
    super.connectedCallback();
    this.observer = new ResizeController(this, {
      callback: this.handleResize
    });
    this.updateComplete.then(() => {
      this.observer.observe(this);
    });
  }
  firstUpdated() {
    this.detectSize();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (isValidResizeController(this.observer)) {
      this.observer.unobserve(this);
    }
  }
  async updateMinMaxMarkers() {
    await this.updateComplete;
    const direction = this.isVertical() ? "top" : "left";
    const beforePositionValue = getComputedStyle(this, ":before")[direction];
    const afterPositionValue = getComputedStyle(this, ":after")[direction];
    if (!beforePositionValue.endsWith("px") || !afterPositionValue.endsWith("px")) {
      return;
    }
    if (this.primaryPanel === "start") {
      this.minDividerPercent = Math.round(this.pixelsToPercentage(parseInt(beforePositionValue)));
      this.maxDividerPercent = Math.round(this.pixelsToPercentage(parseInt(afterPositionValue)));
    }
    if (this.primaryPanel === "end") {
      this.minDividerPercent = 100 - Math.round(this.pixelsToPercentage(parseInt(beforePositionValue)));
      this.maxDividerPercent = 100 - Math.round(this.pixelsToPercentage(parseInt(afterPositionValue)));
    }
    if (this.dividerPosition < this.minDividerPercent) {
      this.dividerPosition = this.minDividerPercent;
    }
    if (this.dividerPosition > this.maxDividerPercent) {
      this.dividerPosition = this.maxDividerPercent;
    }
  }
  detectSize() {
    const { width, height } = this.getBoundingClientRect();
    this.size = this.isVertical() ? height : width;
  }
  isVertical() {
    return this.orientation === "vertical";
  }
  clamp(value, primaryMin = 0, primaryMax = 100) {
    return Math.max(primaryMin, Math.min(value, primaryMax));
  }
  pixelsToPercentage(pixels, size = this.size) {
    return pixels / size * 100;
  }
  percentageToPixels(percentage, size = this.size) {
    return size * (percentage / 100);
  }
  handleDrag(event) {
    if (this.disabled) {
      return;
    }
    if (event.cancelable) {
      event.preventDefault();
    }
    const move = (pointerEvent) => {
      const domRect = this.getBoundingClientRect();
      const defaultView = this.ownerDocument.defaultView;
      const offsetX = domRect.left + defaultView.scrollX;
      const offsetY = domRect.top + defaultView.scrollY;
      const x = pointerEvent.pageX - offsetX;
      const y = pointerEvent.pageY - offsetY;
      let newPositionInPixels = this.isVertical() ? y : x;
      if (this.primaryPanel === "end") {
        newPositionInPixels = this.size - newPositionInPixels;
      }
      const nextDividerPosition = this.clamp(this.pixelsToPercentage(newPositionInPixels));
      if (nextDividerPosition < this.minDividerPercent || nextDividerPosition > this.maxDividerPercent) {
        return;
      }
      this.lastPosition = this.dividerPosition;
      this.dividerPosition = nextDividerPosition;
    };
    const stop = () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerup", stop);
    };
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerup", stop);
    move(event);
  }
  handleKeyDown(event) {
    if (this.disabled) {
      return;
    }
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Enter"].includes(
      event.key
    )) {
      event.preventDefault();
      let newDividerPosition = this.dividerPosition;
      const increment = (event.shiftKey ? 10 : 1) * (this.primaryPanel === "end" ? -1 : 1);
      if (event.key === "ArrowLeft" && !this.isVertical() || event.key === "ArrowUp" && this.isVertical()) {
        newDividerPosition -= increment;
      }
      if (event.key === "ArrowRight" && !this.isVertical() || event.key === "ArrowDown" && this.isVertical()) {
        newDividerPosition += increment;
      }
      if (event.key === "Home") {
        newDividerPosition = this.primaryPanel === "end" ? 100 : 0;
      }
      if (event.key === "End") {
        newDividerPosition = this.primaryPanel === "end" ? 0 : 100;
      }
      if (event.key === "Enter" && this.primaryPanel === "end") {
        newDividerPosition = this.dividerPosition === 100 ? this.lastPosition : 100;
      }
      if (event.key === "Enter" && this.primaryPanel === "start") {
        newDividerPosition = this.dividerPosition === 0 ? this.lastPosition : 0;
      }
      const clampedNewDividerPosition = this.clamp(newDividerPosition);
      if (clampedNewDividerPosition < this.minDividerPercent || clampedNewDividerPosition > this.maxDividerPercent) {
        return;
      }
      this.lastPosition = this.dividerPosition;
      this.dividerPosition = clampedNewDividerPosition;
    }
  }
  /** -- TabIndex overrides -- */
  getTabIndexAdapter() {
    return this.dividerElem?.getAttribute("tabindex");
  }
  setTabIndexAdapter(value) {
    this.removeAttribute("tabindex");
    this.dividerElem?.setAttribute("tabindex", value);
  }
  removeTabIndexAdapter() {
    this.removeAttribute("tabindex");
    this.dividerElem?.removeAttribute("tabindex");
  }
  handleIconClick(decrement, fully = false) {
    let nextPosition;
    if (fully) {
      nextPosition = decrement ? this.minDividerPercent : this.maxDividerPercent;
    } else {
      const moveBy = decrement ? -10 : 10;
      nextPosition = this.dividerPosition + moveBy;
      if (nextPosition < 0) {
        nextPosition = 0;
      }
      if (nextPosition > 100) {
        nextPosition = 100;
      }
    }
    this.lastPosition = this.dividerPosition;
    this.dividerPosition = nextPosition;
  }
  handleSeparatorClick(e) {
    if (e.detail % 2 === 0) {
      this.withControls = !this.withControls;
    }
  }
  moveDivider({ collapse = false, amount = 0, direction }) {
    this.lastPosition = this.dividerPosition;
    if (direction === "left" && collapse) {
      this.dividerPosition = 0;
      return;
    }
    if (direction === "right" && collapse) {
      this.dividerPosition = 100;
      return;
    }
    if (collapse) {
      this.dividerPosition = this.primaryPanel === "end" ? 100 : 0;
      return;
    }
    if (direction === "left" && amount) {
      const nextPosition = this.dividerPosition - amount;
      this.dividerPosition = nextPosition < 0 ? 0 : nextPosition;
      return;
    }
    if (direction === "right" && amount) {
      const nextPosition = this.dividerPosition + amount;
      this.dividerPosition = nextPosition > 100 ? 100 : nextPosition;
      return;
    }
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("orientation") || changedProps.has("dividerPosition") || changedProps.has("primaryPanel") || changedProps.has("primaryMin") || changedProps.has("primaryMax")) {
      this.setInstanceStyle("split-panel", selectorFactory(this.instanceStyleSelectorRoot), {
        "--divider-min-clamp": this.primaryMin,
        "--divider-max-clamp": this.primaryMax,
        "--divider-position": `${this.dividerPosition}%`
      });
    }
  }
  handleDividerPositionChange() {
    this._onReposition.emit({ value: this.dividerPosition });
  }
  handleOrientationChange() {
    this.detectSize();
  }
  render() {
    return html`${this.instanceStyles}<slot name="start" id="start"></slot><div role="separator" slot="trigger" aria-valuenow="${this.dividerPosition}" aria-valueMin="0" aria-valueMax="100" aria-label="${this.dividerAriaLabel}" tabindex="${this.disabled ? null : 0}" aria-controls="" class="divider" @click="${this.handleSeparatorClick}" @keydown="${this.handleKeyDown}" @mousedown="${this.handleDrag}" @touchstart="${this.handleDrag}"></div><div aria-hidden="true" class="controls"><mte-button-group class="controls" radius="sm"><mte-icon-button outlined id="control-collapse-left" @click="${() => this.handleIconClick(true, true)}" label="Fully collapse divider" icon="arrow-collapse-left" size="sm"></mte-icon-button><mte-icon-button outlined id="control-left" @click="${() => this.handleIconClick(true)}" label="Move divider towards end" icon="arrow-left" size="sm"></mte-icon-button><mte-icon-button outlined id="control-right" @click="${() => this.handleIconClick(false)}" label="Move divider towards start" icon="arrow-right" size="sm"></mte-icon-button><mte-icon-button outlined id="control-collapse-right" @click="${() => this.handleIconClick(false, true)}" label="Fully expand divider" icon="arrow-collapse-right" size="sm"></mte-icon-button></mte-button-group></div><slot name="end" id="end"></slot>`;
  }
};
MteSplitPanel.styles = [styles, styles2];
__decorateClass([
  property({ reflect: true })
], MteSplitPanel.prototype, "orientation", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MteSplitPanel.prototype, "dividerPosition", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteSplitPanel.prototype, "withControls", 2);
__decorateClass([
  property({ reflect: true })
], MteSplitPanel.prototype, "controlPosition", 2);
__decorateClass([
  property({ reflect: true })
], MteSplitPanel.prototype, "controlPlacement", 2);
__decorateClass([
  property({ reflect: true })
], MteSplitPanel.prototype, "primaryPanel", 2);
__decorateClass([
  property()
], MteSplitPanel.prototype, "primaryMin", 1);
__decorateClass([
  property()
], MteSplitPanel.prototype, "primaryMax", 1);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteSplitPanel.prototype, "withoutGrabber", 2);
__decorateClass([
  property()
], MteSplitPanel.prototype, "dividerAriaLabel", 2);
__decorateClass([
  eventEmitter()
], MteSplitPanel.prototype, "_onReposition", 2);
__decorateClass([
  query(".divider")
], MteSplitPanel.prototype, "dividerElem", 2);
__decorateClass([
  onUpdate(["primaryMin", "primaryMax", "orientation"])
], MteSplitPanel.prototype, "updateMinMaxMarkers", 1);
__decorateClass([
  onUpdate("dividerPosition", { waitUntilFirstUpdate: true })
], MteSplitPanel.prototype, "handleDividerPositionChange", 1);
__decorateClass([
  onUpdate("orientation")
], MteSplitPanel.prototype, "handleOrientationChange", 1);
MteSplitPanel = __decorateClass([
  defineElement("mte-split-panel")
], MteSplitPanel);
export {
  MteSplitPanel
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zcGxpdC1wYW5lbCIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3NwbGl0LXBhbmVsL3NwbGl0LXBhbmVsLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tZGl2aWRlci10aGlja25lc3M6MnB4Oy0tZGl2aWRlci1wYWRkaW5nOmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpOy0tZGl2aWRlci1taW4tY2xhbXA6MDstLWRpdmlkZXItbWF4LWNsYW1wOjEwMCU7LS1kaXZpZGVyLXBvc2l0aW9uOjUwJTstLWRpdmlkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0zKTstLWRpdmlkZXItaG92ZXItY29sb3I6dmFyKC0tbXRlLWdyZXktNyk7LS1ncmFiYmVyLXdpZHRoOjZweDstLWdyYWJiZXItaGVpZ2h0OjI0cHg7LS1ncmFiYmVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14cyk7LS1ncmFiYmVyLWJvcmRlci10aGluOjJweDstLWdyYWJiZXItYm9yZGVyLXRoaWNrOjRweDstLWdyYWJiZXItY29sb3I6dmFyKC0tbXRlLWdyZXktOCk7LS1ncmFiYmVyLWdyb292ZS1jb2xvcjp2YXIoLS1tdGUtc3VyZmFjZS0xKTstLWdyYWJiZXItZWxldmF0aW9uOnZhcigtLW10ZS1lbGV2YXRpb24tejIpOy0tY3Vyc29yOmNvbC1yZXNpemU7LS1hY3RpdmUtY29sb3I6dmFyKC0tbXRlLWRhcmtlcik7LS1jb250cm9sLW1hcmdpbjp2YXIoLS1tdGUtc3BhY2UteHMpO2Rpc3BsYXk6Z3JpZDtwb3NpdGlvbjpyZWxhdGl2ZX06aG9zdDphZnRlciw6aG9zdDpiZWZvcmV7Y29udGVudDpcIlwiO2hlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjB9Omhvc3Q6YmVmb3Jle2xlZnQ6dmFyKC0tZGl2aWRlci1taW4tY2xhbXApO3RvcDowfTpob3N0OmFmdGVye2xlZnQ6dmFyKC0tZGl2aWRlci1tYXgtY2xhbXApO3RvcDowfTpob3N0KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF0pOmJlZm9yZXtsZWZ0OjA7dG9wOnZhcigtLWRpdmlkZXItbWluLWNsYW1wKX06aG9zdChbb3JpZW50YXRpb249dmVydGljYWxdKTphZnRlcntsZWZ0OjA7dG9wOnZhcigtLWRpdmlkZXItbWF4LWNsYW1wKX06aG9zdChbcHJpbWFyeVBhbmVsPWVuZF0pOmJlZm9yZXtsZWZ0OnVuc2V0O3JpZ2h0OnZhcigtLWRpdmlkZXItbWluLWNsYW1wKX06aG9zdChbcHJpbWFyeVBhbmVsPWVuZF0pOmFmdGVye2xlZnQ6dW5zZXQ7cmlnaHQ6dmFyKC0tZGl2aWRlci1tYXgtY2xhbXApfTpob3N0KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF1bcHJpbWFyeVBhbmVsPWVuZF0pOmJlZm9yZXtib3R0b206dmFyKC0tZGl2aWRlci1taW4tY2xhbXApO2xlZnQ6MDt0b3A6dW5zZXR9Omhvc3QoW29yaWVudGF0aW9uPXZlcnRpY2FsXVtwcmltYXJ5UGFuZWw9ZW5kXSk6YWZ0ZXJ7Ym90dG9tOnZhcigtLWRpdmlkZXItbWF4LWNsYW1wKTtsZWZ0OjA7dG9wOnVuc2V0fS5kaXZpZGVye2JhY2tncm91bmQtY2xpcDpjb250ZW50LWJveDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWRpdmlkZXItY29sb3IpO2N1cnNvcjp2YXIoLS1jdXJzb3IpO21hcmdpbjowIGNhbGModmFyKC0tZGl2aWRlci1wYWRkaW5nKSotMSk7cGFkZGluZzowIHZhcigtLWRpdmlkZXItcGFkZGluZyk7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6dmFyKC0tZGl2aWRlci10aGlja25lc3MpO3otaW5kZXg6MX0uZGl2aWRlcjpob3ZlcnstLWRpdmlkZXItY29sb3I6dmFyKC0tZGl2aWRlci1ob3Zlci1jb2xvcik7LS1ncmFiYmVyLWNvbG9yOnZhcigtLWFjdGl2ZS1jb2xvcil9LmRpdmlkZXI6Zm9jdXMtdmlzaWJsZXstLWRpdmlkZXItY29sb3I6dmFyKC0tbXRlLWZvY3VzKTstLWdyYWJiZXItY29sb3I6dmFyKC0tbXRlLWZvY3VzKX0uZGl2aWRlcjphY3RpdmV7LS1kaXZpZGVyLWNvbG9yOnZhcigtLWFjdGl2ZS1jb2xvcik7LS1ncmFiYmVyLWNvbG9yOnZhcigtLWFjdGl2ZS1jb2xvcil9Omhvc3QoOm5vdChbd2l0aG91dEdyYWJiZXJdKSkgLmRpdmlkZXI6YmVmb3Jle2JhY2tncm91bmQ6dmFyKC0tZ3JhYmJlci1jb2xvcik7Ym94LXNoYWRvdzp2YXIoLS1ncmFiYmVyLWVsZXZhdGlvbik7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OnZhcigtLWdyYWJiZXItaGVpZ2h0KTtsZWZ0OjUwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt3aWR0aDp2YXIoLS1kaXZpZGVyLXRoaWNrbmVzcyk7ei1pbmRleDoxfTpob3N0KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF06bm90KFt3aXRob3V0R3JhYmJlcl0pKSAuZGl2aWRlcjpiZWZvcmV7aGVpZ2h0OnZhcigtLWRpdmlkZXItdGhpY2tuZXNzKTt3aWR0aDp2YXIoLS1ncmFiYmVyLWhlaWdodCl9Omhvc3QoOm5vdChbd2l0aG91dEdyYWJiZXJdKSkgLmRpdmlkZXI6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1ncmFiYmVyLWdyb292ZS1jb2xvcik7Ym9yZGVyOnZhcigtLWdyYWJiZXItYm9yZGVyLXRoaW4pIHNvbGlkIHZhcigtLWdyYWJiZXItY29sb3IpO2JvcmRlci1ib3R0b20td2lkdGg6dmFyKC0tZ3JhYmJlci1ib3JkZXItdGhpY2spO2JvcmRlci1yYWRpdXM6dmFyKC0tZ3JhYmJlci1yYWRpdXMpO2JvcmRlci10b3Atd2lkdGg6dmFyKC0tZ3JhYmJlci1ib3JkZXItdGhpY2spO2JveC1zaGFkb3c6dmFyKC0tZ3JhYmJlci1lbGV2YXRpb24pO2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO2hlaWdodDp2YXIoLS1ncmFiYmVyLWhlaWdodCk7bGVmdDo1MCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7d2lkdGg6dmFyKC0tZ3JhYmJlci13aWR0aCk7ei1pbmRleDoxfTpob3N0KDpub3QoW2Rpc2FibGVkXSk6bm90KFt3aXRob3V0R3JhYmJlcl0pKSAuZGl2aWRlcjpob3ZlcjphZnRlciw6aG9zdCg6bm90KFtkaXNhYmxlZF0pOm5vdChbd2l0aG91dEdyYWJiZXJdKSkgLmRpdmlkZXI6aG92ZXI6YmVmb3Jle2N1cnNvcjpncmFifTpob3N0KDpub3QoW2Rpc2FibGVkXSk6bm90KFt3aXRob3V0R3JhYmJlcl0pKSAuZGl2aWRlcjphY3RpdmU6YWZ0ZXIsOmhvc3QoOm5vdChbZGlzYWJsZWRdKTpub3QoW3dpdGhvdXRHcmFiYmVyXSkpIC5kaXZpZGVyOmFjdGl2ZTpiZWZvcmV7Y3Vyc29yOnZhcigtLWN1cnNvcil9Omhvc3QoW29yaWVudGF0aW9uPWhvcml6b250YWxdKXtncmlkLXRlbXBsYXRlLWNvbHVtbnM6Y2xhbXAoMCUsY2xhbXAodmFyKC0tZGl2aWRlci1taW4tY2xhbXApLGNhbGModmFyKC0tZGl2aWRlci1wb3NpdGlvbikgLSB2YXIoLS1kaXZpZGVyLXRoaWNrbmVzcykvMiksdmFyKC0tZGl2aWRlci1tYXgtY2xhbXApKSxjYWxjKDEwMCUgLSB2YXIoLS1kaXZpZGVyLXRoaWNrbmVzcykpKSB2YXIoLS1kaXZpZGVyLXRoaWNrbmVzcykgYXV0b306aG9zdChbb3JpZW50YXRpb249aG9yaXpvbnRhbF1bcHJpbWFyeVBhbmVsPWVuZF0pe2dyaWQtdGVtcGxhdGUtY29sdW1uczphdXRvIHZhcigtLWRpdmlkZXItdGhpY2tuZXNzKSBjbGFtcCgwJSxjbGFtcCh2YXIoLS1kaXZpZGVyLW1pbi1jbGFtcCksY2FsYyh2YXIoLS1kaXZpZGVyLXBvc2l0aW9uKSAtIHZhcigtLWRpdmlkZXItdGhpY2tuZXNzKS8yKSx2YXIoLS1kaXZpZGVyLW1heC1jbGFtcCkpLGNhbGMoMTAwJSAtIHZhcigtLWRpdmlkZXItdGhpY2tuZXNzKSkpfTpob3N0KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF0pe2dyaWQtdGVtcGxhdGUtcm93czpjbGFtcCgwJSxjbGFtcCh2YXIoLS1kaXZpZGVyLW1pbi1jbGFtcCksY2FsYyh2YXIoLS1kaXZpZGVyLXBvc2l0aW9uKSAtIHZhcigtLWRpdmlkZXItdGhpY2tuZXNzKS8yKSx2YXIoLS1kaXZpZGVyLW1heC1jbGFtcCkpLGNhbGMoMTAwJSAtIHZhcigtLWRpdmlkZXItdGhpY2tuZXNzKSkpIHZhcigtLWRpdmlkZXItdGhpY2tuZXNzKSBhdXRvfTpob3N0KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF1bcHJpbWFyeVBhbmVsPWVuZF0pe2dyaWQtdGVtcGxhdGUtcm93czphdXRvIHZhcigtLWRpdmlkZXItdGhpY2tuZXNzKSBjbGFtcCgwJSxjbGFtcCh2YXIoLS1kaXZpZGVyLW1pbi1jbGFtcCksY2FsYyh2YXIoLS1kaXZpZGVyLXBvc2l0aW9uKSAtIHZhcigtLWRpdmlkZXItdGhpY2tuZXNzKS8yKSx2YXIoLS1kaXZpZGVyLW1heC1jbGFtcCkpLGNhbGMoMTAwJSAtIHZhcigtLWRpdmlkZXItdGhpY2tuZXNzKSkpfTpob3N0KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF0pIC5kaXZpZGVye2hlaWdodDp2YXIoLS1kaXZpZGVyLXRoaWNrbmVzcyk7bWFyZ2luOmNhbGModmFyKC0tZGl2aWRlci1wYWRkaW5nKSotMSkgMDtwYWRkaW5nOnZhcigtLWRpdmlkZXItcGFkZGluZykgMDt3aWR0aDphdXRvfTpob3N0KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF06bm90KFt3aXRob3V0R3JhYmJlcl0pKSAuZGl2aWRlcjphZnRlcntib3JkZXItd2lkdGg6dmFyKC0tZ3JhYmJlci1ib3JkZXItdGhpbikgdmFyKC0tZ3JhYmJlci1ib3JkZXItdGhpY2spO2hlaWdodDp2YXIoLS1ncmFiYmVyLXdpZHRoKTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7d2lkdGg6dmFyKC0tZ3JhYmJlci1oZWlnaHQpfTpob3N0KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF06bm90KFtkaXNhYmxlZF0pKSAuZGl2aWRlcnstLWN1cnNvcjpyb3ctcmVzaXplfTpob3N0KFtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIC5kaXZpZGVyOmFjdGl2ZSw6aG9zdChbZGlzYWJsZWRdKSAuZGl2aWRlcjpob3ZlcnstLWN1cnNvcjpub3QtYWxsb3dlZDstLWRpdmlkZXItY29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTIpOy0tZ3JhYmJlci1jb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtMyk7LS1ncmFiYmVyLWVsZXZhdGlvbjpub25lfTo6c2xvdHRlZChbc2xvdD1lbmRdKSw6OnNsb3R0ZWQoW3Nsb3Q9c3RhcnRdKXtvdmVyZmxvdzpoaWRkZW59Omhvc3QoOm5vdChbd2l0aENvbnRyb2xzXSkpIC5jb250cm9sc3tkaXNwbGF5Om5vbmU7ei1pbmRleDoxfTpob3N0KFt3aXRoQ29udHJvbHNdKSAuY29udHJvbHN7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6dmFyKC0tY29udHJvbC1tYXJnaW4pO3RvcDp2YXIoLS1jb250cm9sLW1hcmdpbil9Omhvc3QoW3dpdGhDb250cm9sc11bY29udHJvbFBvc2l0aW9uPXRvcF0pIC5jb250cm9sc3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6dmFyKC0tY29udHJvbC1tYXJnaW4pfTpob3N0KFt3aXRoQ29udHJvbHNdW2NvbnRyb2xQb3NpdGlvbj1ib3R0b21dKSAuY29udHJvbHN7Ym90dG9tOnZhcigtLWNvbnRyb2wtbWFyZ2luKTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6dW5zZXR9Omhvc3QoW3dpdGhDb250cm9sc11bY29udHJvbFBsYWNlbWVudD1zdGFydF0pIC5jb250cm9sc3tsZWZ0OnZhcigtLWNvbnRyb2wtbWFyZ2luKTtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDp1bnNldH06aG9zdChbd2l0aENvbnRyb2xzXVtjb250cm9sUGxhY2VtZW50PWVuZF0pIC5jb250cm9sc3twb3NpdGlvbjphYnNvbHV0ZTtyaWdodDp2YXIoLS1jb250cm9sLW1hcmdpbil9LmNvbnRyb2xze2JhY2tncm91bmQ6dmFyKC0tbXRlLXN1cmZhY2UtMik7Ym94LXNoYWRvdzp2YXIoLS1tdGUtZWxldmF0aW9uLXoxKX1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsVUFBVSxhQUFhOzs7QUNEaEMsU0FBUyxXQUFXO0FBQWEsSUFBTUEsVUFBUzs7O0FEZWhELFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsd0JBQXdCO0FBT2pDO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7T0FDSztBQUVQLHVCQUF1QixjQUFjO0VBQ25DO0VBQ0E7RUFDQTtFQUNBO0FBQ0YsQ0FBQztBQWtCTSxJQUFNLGdCQUFOLGNBQTRCO0VBQ2pDLGNBQWMsZ0JBQXVELFVBQVUsQ0FBQztBQUNsRixFQUFFO0VBRks7O0FBTXdCLHVCQUF5QztBQUczQiwyQkFBa0I7QUFHakIsd0JBQWU7QUFHOUIsMkJBQXFDO0FBR3JDLDRCQUFxQztBQUdyQyx3QkFBaUM7QUFVOUQsU0FBUSxjQUFjO0FBVXRCLFNBQVEsY0FBYztBQUd0QjtTQUFRLG9CQUE0QjtBQUNwQyxTQUFRLG9CQUE0QjtBQUdRLDBCQUFpQjtBQUdqRCw0QkFBbUI7QUFTL0IsU0FBUSxlQUF1QixLQUFLO0FBaUVwQyxTQUFRLGVBQWUsQ0FBQyxZQUFtQztBQUN6RCxVQUFJLFNBQVMsU0FBUyxHQUFHO0FBQ3ZCLGNBQU0sWUFBWSxRQUFRLENBQUMsRUFBRTtBQUM3QixjQUFNLEVBQUUsT0FBTyxnQkFBZ0IsUUFBUSxnQkFBZ0IsSUFBSTtBQUMzRCxjQUFNLGdCQUFnQixLQUFLLFdBQVcsSUFBSSxrQkFBa0I7QUFFNUQsY0FBTSxnQkFBZ0IsS0FBSyxtQkFBbUIsS0FBSyxl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OEJBQThCO0FBQ3BDLFNBQUssY0FBYyxLQUFLLEVBQUUsT0FBTyxLQUFLLGdCQUFnQixDQUFDO0VBQ3pEO0VBR1EsMEJBQTBCO0FBQ2hDLFNBQUssV0FBVztFQUNsQjtFQUVBLFNBQVM7QUFDUCxXQUFPLE9BQU8sS0FBSyxjQUFjLDRGQUtaLEtBQUssZUFBZSx1REFHdkIsS0FBSyxnQkFBZ0IsZUFDdkIsS0FBSyxXQUFXLE9BQU8sQ0FBQyw4Q0FHM0IsS0FBSyxvQkFBb0IsZUFDdkIsS0FBSyxhQUFhLGlCQUNoQixLQUFLLFVBQVUsa0JBQ2QsS0FBSyxVQUFVLGdLQU1oQixNQUFNLEtBQUssZ0JBQWdCLE1BQU0sSUFBSSxDQUFDLCtJQVF0QyxNQUFNLEtBQUssZ0JBQWdCLElBQUksQ0FBQyx5SUFRaEMsTUFBTSxLQUFLLGdCQUFnQixLQUFLLENBQUMscUpBUWpDLE1BQU0sS0FBSyxnQkFBZ0IsT0FBTyxJQUFJLENBQUM7RUFRMUQ7QUFDRjtBQWxhYSxjQUdKLFNBQVMsQ0FBQyxRQUFZQyxPQUFNO0FBR047RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBTmhCLGNBTWtCO0FBR2M7RUFBMUMsU0FBUyxFQUFFLE1BQU0sUUFBUSxTQUFTLEtBQUssQ0FBQztHQVQ5QixjQVNnQztBQUdDO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FaL0IsY0FZaUM7QUFHZjtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FmaEIsY0Fla0I7QUFHQTtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FsQmhCLGNBa0JrQjtBQUdBO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQXJCaEIsY0FxQmtCO0FBSXpCO0VBREgsU0FBUztHQXhCQyxjQXlCUDtBQVVBO0VBREgsU0FBUztHQWxDQyxjQW1DUDtBQWF3QztFQUEzQyxTQUFTLEVBQUUsTUFBTSxTQUFTLFNBQVMsS0FBSyxDQUFDO0dBaEQvQixjQWdEaUM7QUFHaEM7RUFBWCxTQUFTO0dBbkRDLGNBbURDO0FBR0k7RUFBZixhQUFhO0dBdERILGNBc0RLO0FBRUc7RUFBbEIsTUFBTSxVQUFVO0dBeEROLGNBd0RRO0FBZ0NMO0VBRGIsU0FBUyxDQUFDLGNBQWMsY0FBYyxhQUFhLENBQUM7R0F2RjFDLGNBd0ZHO0FBMFFOO0VBRFAsU0FBUyxtQkFBbUIsRUFBRSxzQkFBc0IsS0FBSyxDQUFDO0dBaldoRCxjQWtXSDtBQUtBO0VBRFAsU0FBUyxhQUFhO0dBdFdaLGNBdVdIO0FBdldHLGdCQUFOO0VBRE4sY0FBYyxpQkFBaUI7R0FDbkI7IiwKICAibmFtZXMiOiBbInN0eWxlcyIsICJzdHlsZXMiXQp9Cg==
