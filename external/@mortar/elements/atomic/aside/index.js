import {
  styles as styles3
} from "../../chunks/chunk.WF4M7EWL.js";
import "../../chunks/chunk.TZBVP4HI.js";
import {
  DetectChildCloseController,
  InverseMixin,
  MteElement,
  OverlayMixin,
  PresetMixinFactory,
  SlotController,
  StylePartsMixin,
  __decorateClass,
  config,
  defineElement,
  mapNumberToPx,
  onUpdate,
  selectorFactory,
  styles2 as styles,
  styles7 as styles2
} from "../../chunks/chunk.KVXAK6W4.js";

// src/atomic/aside/aside.element.ts
import { html } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { classMap } from "lit-html/directives/class-map.js";

// src/atomic/aside/aside.styles.ts
import { css } from "lit";
var styles4 = css`:host .panel{border-bottom:var(--panel-border-bottom,initial);border-left:var(--panel-border-left,initial);border-right:var(--panel-border-right,initial);border-top:var(--panel-border-top,initial);border-color:var(--border-color,var(--mte-border-1));bottom:var(--panel-position-bottom,unset);box-sizing:border-box;height:min(var(--panel-height,100%),100%);left:var(--panel-position-left,unset);pointer-events:auto;right:var(--panel-position-right,unset);top:var(--panel-position-top,unset);transform:var(--panel-transform,initial);transition:visibility var(--panel-visibility-time,var(--transition-duration)) var(--panel-transition-fn,var(--transition-fn)),transform var(--panel-transition-time,var(--transition-duration)) var(--panel-transition-fn,var(--transition-fn));visibility:var(--panel-visibility,hidden);width:min(var(--panel-width,--size,350px),100%)}`;

// src/atomic/aside/aside.element.ts
var nextUniqueId = 0;
var MteAside = class extends OverlayMixin(
  InverseMixin(
    PresetMixinFactory("MteAside")(
      StylePartsMixin(MteElement)
    )
  )
) {
  constructor() {
    super(...arguments);
    this.internalId = nextUniqueId++;
    this.instanceStyleSelectorRoot = ":host:host:host:host:host:host .panel";
    this.withFocusTrap = false;
    this.withCloseOnClickOutside = false;
    this.withCloseOnEscape = false;
    this.withoutHeaderDivider = false;
    this.withoutFooterDivider = false;
    this.withoutBodyScroll = false;
    this.role = "complementary";
    this.id = `mte-aside--${this.internalId}`;
    this.ariaLabelledBy = `mte-aside-header--${this.internalId}`;
    this.detectChildCloseController = new DetectChildCloseController(this);
  }
  get animationDuration() {
    return config.animation.transitionDurationJs.short * 1e3;
  }
  // Empty setter included for compatibility reasons
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  set animationDuration(animationDuration) {
  }
  connectedCallback() {
    super.connectedCallback();
    this.setOverlayOptions({
      withPortal: false,
      withFocusTrap: this.withFocusTrap,
      withCloseOnClickOutside: this.withCloseOnClickOutside,
      withScrollLock: this.withoutBodyScroll,
      withCloseOnEscape: this.withCloseOnEscape
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  handleOverlayOptionsChange() {
    this.setOverlayOptions({
      withFocusTrap: this.withFocusTrap,
      withCloseOnClickOutside: this.withCloseOnClickOutside,
      withScrollLock: this.withoutBodyScroll,
      withCloseOnEscape: this.withCloseOnEscape
    });
  }
  handleTargetChange() {
    this.updateTriggerAriaAttributes();
  }
  updateTriggerAriaAttributes() {
    if (this.targetElement) {
      this.targetElement.setAttribute("role", "button");
      this.targetElement.setAttribute("aria-expanded", `${this.opened}`);
      this.targetElement.setAttribute("aria-controls", this.id);
    }
  }
  /** Opens the aside */
  open() {
    return new Promise((resolve) => {
      this.handleOverlayOpen({
        willOpen: () => {
          if (this.targetElement) {
            this.targetElement.setAttribute("aria-expanded", "true");
          }
        }
      }).then(() => {
        setTimeout(() => {
          this.handleOverlayOpenEnd().then(() => {
            resolve();
          });
        }, this.animationDuration);
      });
    });
  }
  /** Closes the aside */
  close() {
    return new Promise((resolve) => {
      this.handleOverlayClose().then(() => {
        setTimeout(() => {
          if (this.targetElement) {
            this.targetElement.setAttribute("aria-expanded", "false");
          }
          this.handleOverlayCloseEnd().then(() => {
            resolve();
          });
        }, this.animationDuration);
      });
    });
  }
  /** Toggles the aside open and closed */
  toggle() {
    if (this.opened) {
      return this.close();
    } else {
      return this.open();
    }
  }
  render() {
    return html`${this.instanceStyles}<div class="panel ${classMap({
      opened: this.opened && this.readyForAnimation
    })}"><div class="header" part="header" id="${ifDefined(
      this.ariaLabelledBy === `mte-aside-header--${this.internalId}` ? this.ariaLabelledBy : null
    )}"><slot name="header"></slot></div><div class="content-container"><div class="content" tabindex="0" part="content"><slot></slot></div></div><div class="footer" part="footer"><slot name="footer"></slot></div></div>`;
  }
};
MteAside.styles = [styles2, styles, styles3, styles4];
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteAside.prototype, "withFocusTrap", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteAside.prototype, "withCloseOnClickOutside", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteAside.prototype, "withCloseOnEscape", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteAside.prototype, "withoutHeaderDivider", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteAside.prototype, "withoutFooterDivider", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteAside.prototype, "withoutBodyScroll", 2);
__decorateClass([
  property({ attribute: "aria-describedby", reflect: true })
], MteAside.prototype, "ariaDescribedBy", 2);
__decorateClass([
  property({ reflect: true })
], MteAside.prototype, "role", 2);
__decorateClass([
  property({ reflect: true })
], MteAside.prototype, "id", 2);
__decorateClass([
  property({ attribute: "aria-labelledby", reflect: true })
], MteAside.prototype, "ariaLabelledBy", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MteAside.prototype, "animationDuration", 1);
__decorateClass([
  property({ type: Object, attribute: false })
], MteAside.prototype, "targetElement", 2);
__decorateClass([
  onUpdate(["withFocusTrap", "withCloseOnClickOutside", "withoutBodyScroll", "withCloseOnEscape"])
], MteAside.prototype, "handleOverlayOptionsChange", 1);
__decorateClass([
  onUpdate(["targetElement", "id"], { on: "client" })
], MteAside.prototype, "handleTargetChange", 1);
MteAside = __decorateClass([
  defineElement("mte-aside")
], MteAside);

// src/atomic/aside/aside-container.element.ts
import { html as html2 } from "lit";
import { queryAssignedElements, property as property2 } from "lit/decorators.js";

// src/atomic/aside/aside-container.styles.ts
import { css as css2 } from "lit";
var styles5 = css2`:host{display:block;overflow:hidden;position:relative;--panel-size:350px;--panel-position-right:unset;--panel-position-bottom:unset;--panel-position-left:unset;--panel-position-top:unset;--panel-width:100%;--panel-height:100%;--panel-visibility:hidden;--panel-visibility-duration:200ms;--panel-transition-duration:200ms;--panel-transition-fn:cubic-bezier(0.4,0,0.2,1);--panel-aside-container-padding:var(--panel-size)}:host .content{height:100%;transform:translate(0);transition:transform var(--panel-transition-duration) var(--panel-transition-fn),width var(--panel-transition-duration) var(--panel-transition-fn);width:100%;will-change:transform,width}:host([position=left]){--panel-position-right:unset;--panel-position-bottom:0;--panel-position-left:0;--panel-position-top:0;--panel-width:var(--panel-size);--panel-transform:translate(-100%);--panel-border-right:1px solid}:host([position=right]){--panel-position-right:0;--panel-position-bottom:0;--panel-position-left:unset;--panel-position-top:0;--panel-width:var(--panel-size);--panel-transform:translate(100%);--panel-border-left:1px solid}:host([position=top]){--panel-position-right:0;--panel-position-bottom:unset;--panel-position-left:0;--panel-position-top:0;--panel-height:var(--panel-size);--panel-transform:translateY(-100%);--panel-border-bottom:1px solid}:host([position=bottom]){--panel-position-right:0;--panel-position-bottom:0;--panel-position-left:0;--panel-position-top:unset;--panel-height:var(--panel-size);--panel-transform:translateY(100%);--panel-border-top:1px solid}:host([opened]){--panel-transform:transform(0,0);--panel-visibility:visible;--panel-visibility-duration:0ms}:host([position=left][opened]) .content{transform:translate(var(--panel-size,0));width:calc(100% - min(var(--panel-size, 0), 100%, 100vw))}:host([position=top][opened]) .content{height:calc(100% - min(var(--panel-size, 0), 100%, 100vh));transform:translateY(var(--panel-size,0))}:host([position=bottom][opened]) .content{height:calc(100% - min(var(--panel-size, 0), 100%, 100vh));transform:translate(0)}:host([position=right][opened]) .content{transform:translate(0);width:calc(100% - min(var(--panel-size, 0), 100%, 100vw))}:host([opened][withoutPush]){padding:0}@media screen and (prefers-reduced-motion:reduce){:host{transition:none}}`;

// src/atomic/aside/aside-container.element.ts
var MteAsideContainer = class extends MteElement {
  constructor() {
    super();
    this.position = "left";
    this.slotController = new SlotController(this, {
      updateOnChange: ["aside"]
    });
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }
  /** The first element currently in the aside slot */
  get asideElementRef() {
    return this._asideElementRef;
  }
  set asideElementRef(newElem) {
    this.removeAsideListeners(this._asideElementRef);
    this._asideElementRef = newElem;
    this.addAsideListeners(this._asideElementRef);
  }
  onOpenedChange() {
    setTimeout(() => {
      if (this.opened) {
        this.asideElementRef?.open?.();
      } else {
        this.asideElementRef?.close?.();
      }
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.slotController.watchSlots(["aside"]).subscribe((changes) => {
      if (changes?.has("aside")) {
        if (this.asideElements?.length > 0) {
          const overlayElem = this.asideElements?.[0];
          if (overlayElem.hasAttribute("data-overlay-wrapper")) {
            if (overlayElem.hasAttribute("data-overlay-ready")) {
              this.asideElementRef = overlayElem.children?.[0];
            } else {
              overlayElem.addEventListener(
                "portalready",
                (e) => {
                  this.asideElementRef = overlayElem.children?.[0];
                },
                { once: true }
              );
            }
          } else {
            this.asideElementRef = overlayElem;
          }
        }
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.asideElementRef?.close();
    this.removeAsideListeners(this.asideElementRef);
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("size") || changedProps.has("opened")) {
      this.setInstanceStyle("panel-size", selectorFactory(":host:host:host"), {
        "--panel-size": mapNumberToPx(this.size)
      });
    }
  }
  /** Removes event listeners from the aside element */
  removeAsideListeners(element) {
    if (element) {
      element.removeEventListener("onClose", this.handleClose);
      element.removeEventListener("onOpen", this.handleOpen);
    }
  }
  /** Adds event listeners to the overlay element to watch for changes to its `triggerOn` value */
  addAsideListeners(element) {
    if (element) {
      element.addEventListener("onClose", this.handleClose);
      element.addEventListener("onOpen", this.handleOpen);
    }
  }
  handleOpen() {
    if (!this.opened) {
      this.opened = true;
    }
  }
  handleClose() {
    if (this.opened) {
      this.opened = false;
    }
  }
  render() {
    return html2`${this.instanceStyles} ${this.position === "top" || this.position === "left" ? html2`<div class="content"><slot></slot></div>` : null}<slot name="aside"></slot>${this.position !== "top" && this.position !== "left" ? html2`<div class="content"><slot></slot></div>` : null}`;
  }
};
MteAsideContainer.styles = [styles2, styles5];
__decorateClass([
  property2({ type: Boolean, reflect: true })
], MteAsideContainer.prototype, "withoutPush", 2);
__decorateClass([
  property2({ type: Boolean, reflect: true })
], MteAsideContainer.prototype, "opened", 2);
__decorateClass([
  property2({ reflect: true })
], MteAsideContainer.prototype, "position", 2);
__decorateClass([
  property2({ reflect: true })
], MteAsideContainer.prototype, "size", 2);
__decorateClass([
  queryAssignedElements({ slot: "aside" })
], MteAsideContainer.prototype, "asideElements", 2);
__decorateClass([
  onUpdate("opened")
], MteAsideContainer.prototype, "onOpenedChange", 1);
MteAsideContainer = __decorateClass([
  defineElement("mte-aside-container")
], MteAsideContainer);
export {
  MteAside,
  MteAsideContainer
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hc2lkZSIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2FzaWRlL2FzaWRlLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2FzaWRlIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYXNpZGUvYXNpZGUtY29udGFpbmVyLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0IC5wYW5lbHtib3JkZXItYm90dG9tOnZhcigtLXBhbmVsLWJvcmRlci1ib3R0b20saW5pdGlhbCk7Ym9yZGVyLWxlZnQ6dmFyKC0tcGFuZWwtYm9yZGVyLWxlZnQsaW5pdGlhbCk7Ym9yZGVyLXJpZ2h0OnZhcigtLXBhbmVsLWJvcmRlci1yaWdodCxpbml0aWFsKTtib3JkZXItdG9wOnZhcigtLXBhbmVsLWJvcmRlci10b3AsaW5pdGlhbCk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcix2YXIoLS1tdGUtYm9yZGVyLTEpKTtib3R0b206dmFyKC0tcGFuZWwtcG9zaXRpb24tYm90dG9tLHVuc2V0KTtib3gtc2l6aW5nOmJvcmRlci1ib3g7aGVpZ2h0Om1pbih2YXIoLS1wYW5lbC1oZWlnaHQsMTAwJSksMTAwJSk7bGVmdDp2YXIoLS1wYW5lbC1wb3NpdGlvbi1sZWZ0LHVuc2V0KTtwb2ludGVyLWV2ZW50czphdXRvO3JpZ2h0OnZhcigtLXBhbmVsLXBvc2l0aW9uLXJpZ2h0LHVuc2V0KTt0b3A6dmFyKC0tcGFuZWwtcG9zaXRpb24tdG9wLHVuc2V0KTt0cmFuc2Zvcm06dmFyKC0tcGFuZWwtdHJhbnNmb3JtLGluaXRpYWwpO3RyYW5zaXRpb246dmlzaWJpbGl0eSB2YXIoLS1wYW5lbC12aXNpYmlsaXR5LXRpbWUsdmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbikpIHZhcigtLXBhbmVsLXRyYW5zaXRpb24tZm4sdmFyKC0tdHJhbnNpdGlvbi1mbikpLHRyYW5zZm9ybSB2YXIoLS1wYW5lbC10cmFuc2l0aW9uLXRpbWUsdmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbikpIHZhcigtLXBhbmVsLXRyYW5zaXRpb24tZm4sdmFyKC0tdHJhbnNpdGlvbi1mbikpO3Zpc2liaWxpdHk6dmFyKC0tcGFuZWwtdmlzaWJpbGl0eSxoaWRkZW4pO3dpZHRoOm1pbih2YXIoLS1wYW5lbC13aWR0aCwtLXNpemUsMzUwcHgpLDEwMCUpfWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTstLXBhbmVsLXNpemU6MzUwcHg7LS1wYW5lbC1wb3NpdGlvbi1yaWdodDp1bnNldDstLXBhbmVsLXBvc2l0aW9uLWJvdHRvbTp1bnNldDstLXBhbmVsLXBvc2l0aW9uLWxlZnQ6dW5zZXQ7LS1wYW5lbC1wb3NpdGlvbi10b3A6dW5zZXQ7LS1wYW5lbC13aWR0aDoxMDAlOy0tcGFuZWwtaGVpZ2h0OjEwMCU7LS1wYW5lbC12aXNpYmlsaXR5OmhpZGRlbjstLXBhbmVsLXZpc2liaWxpdHktZHVyYXRpb246MjAwbXM7LS1wYW5lbC10cmFuc2l0aW9uLWR1cmF0aW9uOjIwMG1zOy0tcGFuZWwtdHJhbnNpdGlvbi1mbjpjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpOy0tcGFuZWwtYXNpZGUtY29udGFpbmVyLXBhZGRpbmc6dmFyKC0tcGFuZWwtc2l6ZSl9Omhvc3QgLmNvbnRlbnR7aGVpZ2h0OjEwMCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSB2YXIoLS1wYW5lbC10cmFuc2l0aW9uLWR1cmF0aW9uKSB2YXIoLS1wYW5lbC10cmFuc2l0aW9uLWZuKSx3aWR0aCB2YXIoLS1wYW5lbC10cmFuc2l0aW9uLWR1cmF0aW9uKSB2YXIoLS1wYW5lbC10cmFuc2l0aW9uLWZuKTt3aWR0aDoxMDAlO3dpbGwtY2hhbmdlOnRyYW5zZm9ybSx3aWR0aH06aG9zdChbcG9zaXRpb249bGVmdF0pey0tcGFuZWwtcG9zaXRpb24tcmlnaHQ6dW5zZXQ7LS1wYW5lbC1wb3NpdGlvbi1ib3R0b206MDstLXBhbmVsLXBvc2l0aW9uLWxlZnQ6MDstLXBhbmVsLXBvc2l0aW9uLXRvcDowOy0tcGFuZWwtd2lkdGg6dmFyKC0tcGFuZWwtc2l6ZSk7LS1wYW5lbC10cmFuc2Zvcm06dHJhbnNsYXRlKC0xMDAlKTstLXBhbmVsLWJvcmRlci1yaWdodDoxcHggc29saWR9Omhvc3QoW3Bvc2l0aW9uPXJpZ2h0XSl7LS1wYW5lbC1wb3NpdGlvbi1yaWdodDowOy0tcGFuZWwtcG9zaXRpb24tYm90dG9tOjA7LS1wYW5lbC1wb3NpdGlvbi1sZWZ0OnVuc2V0Oy0tcGFuZWwtcG9zaXRpb24tdG9wOjA7LS1wYW5lbC13aWR0aDp2YXIoLS1wYW5lbC1zaXplKTstLXBhbmVsLXRyYW5zZm9ybTp0cmFuc2xhdGUoMTAwJSk7LS1wYW5lbC1ib3JkZXItbGVmdDoxcHggc29saWR9Omhvc3QoW3Bvc2l0aW9uPXRvcF0pey0tcGFuZWwtcG9zaXRpb24tcmlnaHQ6MDstLXBhbmVsLXBvc2l0aW9uLWJvdHRvbTp1bnNldDstLXBhbmVsLXBvc2l0aW9uLWxlZnQ6MDstLXBhbmVsLXBvc2l0aW9uLXRvcDowOy0tcGFuZWwtaGVpZ2h0OnZhcigtLXBhbmVsLXNpemUpOy0tcGFuZWwtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpOy0tcGFuZWwtYm9yZGVyLWJvdHRvbToxcHggc29saWR9Omhvc3QoW3Bvc2l0aW9uPWJvdHRvbV0pey0tcGFuZWwtcG9zaXRpb24tcmlnaHQ6MDstLXBhbmVsLXBvc2l0aW9uLWJvdHRvbTowOy0tcGFuZWwtcG9zaXRpb24tbGVmdDowOy0tcGFuZWwtcG9zaXRpb24tdG9wOnVuc2V0Oy0tcGFuZWwtaGVpZ2h0OnZhcigtLXBhbmVsLXNpemUpOy0tcGFuZWwtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwJSk7LS1wYW5lbC1ib3JkZXItdG9wOjFweCBzb2xpZH06aG9zdChbb3BlbmVkXSl7LS1wYW5lbC10cmFuc2Zvcm06dHJhbnNmb3JtKDAsMCk7LS1wYW5lbC12aXNpYmlsaXR5OnZpc2libGU7LS1wYW5lbC12aXNpYmlsaXR5LWR1cmF0aW9uOjBtc306aG9zdChbcG9zaXRpb249bGVmdF1bb3BlbmVkXSkgLmNvbnRlbnR7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1wYW5lbC1zaXplLDApKTt3aWR0aDpjYWxjKDEwMCUgLSBtaW4odmFyKC0tcGFuZWwtc2l6ZSwgMCksIDEwMCUsIDEwMHZ3KSl9Omhvc3QoW3Bvc2l0aW9uPXRvcF1bb3BlbmVkXSkgLmNvbnRlbnR7aGVpZ2h0OmNhbGMoMTAwJSAtIG1pbih2YXIoLS1wYW5lbC1zaXplLCAwKSwgMTAwJSwgMTAwdmgpKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSh2YXIoLS1wYW5lbC1zaXplLDApKX06aG9zdChbcG9zaXRpb249Ym90dG9tXVtvcGVuZWRdKSAuY29udGVudHtoZWlnaHQ6Y2FsYygxMDAlIC0gbWluKHZhcigtLXBhbmVsLXNpemUsIDApLCAxMDAlLCAxMDB2aCkpO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCl9Omhvc3QoW3Bvc2l0aW9uPXJpZ2h0XVtvcGVuZWRdKSAuY29udGVudHt0cmFuc2Zvcm06dHJhbnNsYXRlKDApO3dpZHRoOmNhbGMoMTAwJSAtIG1pbih2YXIoLS1wYW5lbC1zaXplLCAwKSwgMTAwJSwgMTAwdncpKX06aG9zdChbb3BlbmVkXVt3aXRob3V0UHVzaF0pe3BhZGRpbmc6MH1AbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upezpob3N0e3RyYW5zaXRpb246bm9uZX19YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQXFCLFlBQVk7QUFDakMsU0FBUyxnQkFBZ0I7QUFnQnpCLFNBQVMsaUJBQWlCO0FB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QUFXLENBQUM7Z0JBQ2pEO2dCQUNBLEVBQUUsTUFBTSxLQUFLO2NBQ2Y7WUFDRjtVQUNGLE9BQU87QUFDTCxpQkFBSyxrQkFBa0I7VUFDekI7UUFDRjtNQUNGO0lBQ0YsQ0FBQztFQUNIO0VBRUEsdUJBQXVCO0FBQ3JCLFVBQU0scUJBQXFCO0FBQzNCLFNBQUssaUJBQWlCLE1BQU07QUFDNUIsU0FBSyxxQkFBcUIsS0FBSyxlQUFlO0VBQ2hEO0VBRVUscUJBQXFCLGNBQWM7QUFDM0MsVUFBTSxxQkFBcUIsWUFBWTtBQUV2QyxRQUFJLGFBQWEsSUFBSSxNQUFNLEtBQUssYUFBYSxJQUFJLFFBQVEsR0FBRztBQUMxRCxXQUFLLGlCQUFpQixjQUFjLGdCQUFnQixpQkFBaUIsR0FBRztRQUN0RSxnQkFBZ0IsY0FBYyxLQUFLLElBQUk7TUFDekMsQ0FBQztJQUNIO0VBQ0Y7O0VBR1EscUJBQXFCLFNBQW1CO0FBQzlDLFFBQUksU0FBUztBQUNYLGNBQVEsb0JBQW9CLFdBQVcsS0FBSyxXQUFXO0FBQ3ZELGNBQVEsb0JBQW9CLFVBQVUsS0FBSyxVQUFVO0lBQ3ZEO0VBQ0Y7O0VBR1Esa0JBQWtCLFNBQW1CO0FBQzNDLFFBQUksU0FBUztBQUNYLGNBQVEsaUJBQWlCLFdBQVcsS0FBSyxXQUFXO0FBQ3BELGNBQVEsaUJBQWlCLFVBQVUsS0FBSyxVQUFVO0lBQ3BEO0VBQ0Y7RUFFUSxhQUFhO0FBQ25CLFFBQUksQ0FBQyxLQUFLLFFBQVE7QUFDaEIsV0FBSyxTQUFTO0lBQ2hCO0VBQ0Y7RUFFUSxjQUFjO0FBQ3BCLFFBQUksS0FBSyxRQUFRO0FBQ2YsV0FBSyxTQUFTO0lBQ2hCO0VBQ0Y7RUFFQSxTQUFTO0FBRVAsV0FBT0UsUUFBTyxLQUFLLGNBQWMsSUFDN0IsS0FBSyxhQUFhLFNBQVMsS0FBSyxhQUFhLFNBQzNDQSxrREFDQSxJQUFJLDZCQUVOLEtBQUssYUFBYSxTQUFTLEtBQUssYUFBYSxTQUMzQ0Esa0RBQ0EsSUFBSTtFQUNaO0FBQ0Y7QUExSWEsa0JBQ0osU0FBUyxDQUFDQyxTQUFZQSxPQUFNO0FBR1M7RUFBM0NDLFVBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FKL0Isa0JBSWlDO0FBR0E7RUFBM0NBLFVBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FQL0Isa0JBT2lDO0FBR2Y7RUFBNUJBLFVBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQVZoQixrQkFVa0I7QUFHQTtFQUE1QkEsVUFBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBYmhCLGtCQWFrQjtBQUdhO0VBQXpDLHNCQUFzQixFQUFFLE1BQU0sUUFBUSxDQUFDO0dBaEI3QixrQkFnQitCO0FBb0JsQztFQURQLFNBQVMsUUFBUTtHQW5DUCxrQkFvQ0g7QUFwQ0csb0JBQU47RUFETixjQUFjLHFCQUFxQjtHQUN2QjsiLAogICJuYW1lcyI6IFsic3R5bGVzIiwgInN0eWxlcyIsICJodG1sIiwgInByb3BlcnR5IiwgImNzcyIsICJzdHlsZXMiLCAiaHRtbCIsICJzdHlsZXMiLCAicHJvcGVydHkiXQp9Cg==
