import {
  styles as styles3
} from "../../chunks/chunk.WF4M7EWL.js";
import "../../chunks/chunk.AA34PHRX.js";
import {
  DetectChildCloseController,
  InverseMixin,
  MteElement,
  OverlayMixin,
  PresetMixinFactory,
  SlotController,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  mapNumberToPx,
  onUpdate,
  styles2 as styles,
  styles7 as styles2
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/aside/aside.element.ts
import { html } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { classMap } from "lit-html/directives/class-map.js";

// src/atomic/aside/aside.styles.ts
import { css } from "lit";
var styles4 = css`:host .panel{border-bottom:var(--panel-border-bottom,initial);border-left:var(--panel-border-left,initial);border-right:var(--panel-border-right,initial);border-top:var(--panel-border-top,initial);border-color:var(--border-color,var(--mte-border-1));bottom:var(--panel-position-bottom,unset);box-sizing:border-box;height:min(var(--panel-height,100%),100%);left:var(--panel-position-left,unset);pointer-events:auto;right:var(--panel-position-right,unset);top:var(--panel-position-top,unset);transform:var(--panel-transform,initial);transition:visibility var(--panel-visibility-time,var(--transition-duration)) var(--panel-transition-fn,var(--transition-fn)),transform var(--panel-transition-time,var(--transition-duration)) var(--panel-transition-fn,var(--transition-fn));visibility:var(--panel-visibility,hidden);width:min(var(--panel-width,--size,350px),100%)}:host .panel{border-right:var(--panel-border)}:host([position=top]) .panel{border-bottom:var(--panel-border);border-right:none}:host([position=right]) .panel{border-left:var(--panel-border);border-right:none}:host([position=bottom]) .panel{border-right:none;border-top:var(--panel-border)}`;

// src/atomic/aside/aside.element.ts
import { config } from "@mortar/styles";
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
import { selectorFactory } from "@mortar/styles";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hc2lkZSIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2FzaWRlL2FzaWRlLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2FzaWRlIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYXNpZGUvYXNpZGUtY29udGFpbmVyLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0IC5wYW5lbHtib3JkZXItYm90dG9tOnZhcigtLXBhbmVsLWJvcmRlci1ib3R0b20saW5pdGlhbCk7Ym9yZGVyLWxlZnQ6dmFyKC0tcGFuZWwtYm9yZGVyLWxlZnQsaW5pdGlhbCk7Ym9yZGVyLXJpZ2h0OnZhcigtLXBhbmVsLWJvcmRlci1yaWdodCxpbml0aWFsKTtib3JkZXItdG9wOnZhcigtLXBhbmVsLWJvcmRlci10b3AsaW5pdGlhbCk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcix2YXIoLS1tdGUtYm9yZGVyLTEpKTtib3R0b206dmFyKC0tcGFuZWwtcG9zaXRpb24tYm90dG9tLHVuc2V0KTtib3gtc2l6aW5nOmJvcmRlci1ib3g7aGVpZ2h0Om1pbih2YXIoLS1wYW5lbC1oZWlnaHQsMTAwJSksMTAwJSk7bGVmdDp2YXIoLS1wYW5lbC1wb3NpdGlvbi1sZWZ0LHVuc2V0KTtwb2ludGVyLWV2ZW50czphdXRvO3JpZ2h0OnZhcigtLXBhbmVsLXBvc2l0aW9uLXJpZ2h0LHVuc2V0KTt0b3A6dmFyKC0tcGFuZWwtcG9zaXRpb24tdG9wLHVuc2V0KTt0cmFuc2Zvcm06dmFyKC0tcGFuZWwtdHJhbnNmb3JtLGluaXRpYWwpO3RyYW5zaXRpb246dmlzaWJpbGl0eSB2YXIoLS1wYW5lbC12aXNpYmlsaXR5LXRpbWUsdmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbikpIHZhcigtLXBhbmVsLXRyYW5zaXRpb24tZm4sdmFyKC0tdHJhbnNpdGlvbi1mbikpLHRyYW5zZm9ybSB2YXIoLS1wYW5lbC10cmFuc2l0aW9uLXRpbWUsdmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbikpIHZhcigtLXBhbmVsLXRyYW5zaXRpb24tZm4sdmFyKC0tdHJhbnNpdGlvbi1mbikpO3Zpc2liaWxpdHk6dmFyKC0tcGFuZWwtdmlzaWJpbGl0eSxoaWRkZW4pO3dpZHRoOm1pbih2YXIoLS1wYW5lbC13aWR0aCwtLXNpemUsMzUwcHgpLDEwMCUpfTpob3N0IC5wYW5lbHtib3JkZXItcmlnaHQ6dmFyKC0tcGFuZWwtYm9yZGVyKX06aG9zdChbcG9zaXRpb249dG9wXSkgLnBhbmVse2JvcmRlci1ib3R0b206dmFyKC0tcGFuZWwtYm9yZGVyKTtib3JkZXItcmlnaHQ6bm9uZX06aG9zdChbcG9zaXRpb249cmlnaHRdKSAucGFuZWx7Ym9yZGVyLWxlZnQ6dmFyKC0tcGFuZWwtYm9yZGVyKTtib3JkZXItcmlnaHQ6bm9uZX06aG9zdChbcG9zaXRpb249Ym90dG9tXSkgLnBhbmVse2JvcmRlci1yaWdodDpub25lO2JvcmRlci10b3A6dmFyKC0tcGFuZWwtYm9yZGVyKX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7ZGlzcGxheTpibG9jaztvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmU7LS1wYW5lbC1zaXplOjM1MHB4Oy0tcGFuZWwtcG9zaXRpb24tcmlnaHQ6dW5zZXQ7LS1wYW5lbC1wb3NpdGlvbi1ib3R0b206dW5zZXQ7LS1wYW5lbC1wb3NpdGlvbi1sZWZ0OnVuc2V0Oy0tcGFuZWwtcG9zaXRpb24tdG9wOnVuc2V0Oy0tcGFuZWwtd2lkdGg6MTAwJTstLXBhbmVsLWhlaWdodDoxMDAlOy0tcGFuZWwtdmlzaWJpbGl0eTpoaWRkZW47LS1wYW5lbC12aXNpYmlsaXR5LWR1cmF0aW9uOjIwMG1zOy0tcGFuZWwtdHJhbnNpdGlvbi1kdXJhdGlvbjoyMDBtczstLXBhbmVsLXRyYW5zaXRpb24tZm46Y3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTstLXBhbmVsLWFzaWRlLWNvbnRhaW5lci1wYWRkaW5nOnZhcigtLXBhbmVsLXNpemUpfTpob3N0IC5jb250ZW50e2hlaWdodDoxMDAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gdmFyKC0tcGFuZWwtdHJhbnNpdGlvbi1kdXJhdGlvbikgdmFyKC0tcGFuZWwtdHJhbnNpdGlvbi1mbiksd2lkdGggdmFyKC0tcGFuZWwtdHJhbnNpdGlvbi1kdXJhdGlvbikgdmFyKC0tcGFuZWwtdHJhbnNpdGlvbi1mbik7d2lkdGg6MTAwJTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm0sd2lkdGh9Omhvc3QoW3Bvc2l0aW9uPWxlZnRdKXstLXBhbmVsLXBvc2l0aW9uLXJpZ2h0OnVuc2V0Oy0tcGFuZWwtcG9zaXRpb24tYm90dG9tOjA7LS1wYW5lbC1wb3NpdGlvbi1sZWZ0OjA7LS1wYW5lbC1wb3NpdGlvbi10b3A6MDstLXBhbmVsLXdpZHRoOnZhcigtLXBhbmVsLXNpemUpOy0tcGFuZWwtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtMTAwJSk7LS1wYW5lbC1ib3JkZXItcmlnaHQ6MXB4IHNvbGlkfTpob3N0KFtwb3NpdGlvbj1yaWdodF0pey0tcGFuZWwtcG9zaXRpb24tcmlnaHQ6MDstLXBhbmVsLXBvc2l0aW9uLWJvdHRvbTowOy0tcGFuZWwtcG9zaXRpb24tbGVmdDp1bnNldDstLXBhbmVsLXBvc2l0aW9uLXRvcDowOy0tcGFuZWwtd2lkdGg6dmFyKC0tcGFuZWwtc2l6ZSk7LS1wYW5lbC10cmFuc2Zvcm06dHJhbnNsYXRlKDEwMCUpOy0tcGFuZWwtYm9yZGVyLWxlZnQ6MXB4IHNvbGlkfTpob3N0KFtwb3NpdGlvbj10b3BdKXstLXBhbmVsLXBvc2l0aW9uLXJpZ2h0OjA7LS1wYW5lbC1wb3NpdGlvbi1ib3R0b206dW5zZXQ7LS1wYW5lbC1wb3NpdGlvbi1sZWZ0OjA7LS1wYW5lbC1wb3NpdGlvbi10b3A6MDstLXBhbmVsLWhlaWdodDp2YXIoLS1wYW5lbC1zaXplKTstLXBhbmVsLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKTstLXBhbmVsLWJvcmRlci1ib3R0b206MXB4IHNvbGlkfTpob3N0KFtwb3NpdGlvbj1ib3R0b21dKXstLXBhbmVsLXBvc2l0aW9uLXJpZ2h0OjA7LS1wYW5lbC1wb3NpdGlvbi1ib3R0b206MDstLXBhbmVsLXBvc2l0aW9uLWxlZnQ6MDstLXBhbmVsLXBvc2l0aW9uLXRvcDp1bnNldDstLXBhbmVsLWhlaWdodDp2YXIoLS1wYW5lbC1zaXplKTstLXBhbmVsLXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwMCUpOy0tcGFuZWwtYm9yZGVyLXRvcDoxcHggc29saWR9Omhvc3QoW29wZW5lZF0pey0tcGFuZWwtdHJhbnNmb3JtOnRyYW5zZm9ybSgwLDApOy0tcGFuZWwtdmlzaWJpbGl0eTp2aXNpYmxlOy0tcGFuZWwtdmlzaWJpbGl0eS1kdXJhdGlvbjowbXN9Omhvc3QoW3Bvc2l0aW9uPWxlZnRdW29wZW5lZF0pIC5jb250ZW50e3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tcGFuZWwtc2l6ZSwwKSk7d2lkdGg6Y2FsYygxMDAlIC0gbWluKHZhcigtLXBhbmVsLXNpemUsIDApLCAxMDAlLCAxMDB2dykpfTpob3N0KFtwb3NpdGlvbj10b3BdW29wZW5lZF0pIC5jb250ZW50e2hlaWdodDpjYWxjKDEwMCUgLSBtaW4odmFyKC0tcGFuZWwtc2l6ZSwgMCksIDEwMCUsIDEwMHZoKSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkodmFyKC0tcGFuZWwtc2l6ZSwwKSl9Omhvc3QoW3Bvc2l0aW9uPWJvdHRvbV1bb3BlbmVkXSkgLmNvbnRlbnR7aGVpZ2h0OmNhbGMoMTAwJSAtIG1pbih2YXIoLS1wYW5lbC1zaXplLCAwKSwgMTAwJSwgMTAwdmgpKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDApfTpob3N0KFtwb3NpdGlvbj1yaWdodF1bb3BlbmVkXSkgLmNvbnRlbnR7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKTt3aWR0aDpjYWxjKDEwMCUgLSBtaW4odmFyKC0tcGFuZWwtc2l6ZSwgMCksIDEwMCUsIDEwMHZ3KSl9Omhvc3QoW29wZW5lZF1bd2l0aG91dFB1c2hdKXtwYWRkaW5nOjB9QG1lZGlhIHNjcmVlbiBhbmQgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKXs6aG9zdHt0cmFuc2l0aW9uOm5vbmV9fWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBcUIsWUFBWTtBQUNqQyxTQUFTLGdCQUFnQjtBQWdCekIsU0FBUyxpQkFBaUI7QUFFMUIsU0FBUyxnQkFBZ0I7OztBQ25CekIsU0FBUyxXQUFXO0FBQWEsSUFBTUEsVUFBUzs7O0FEc0JoRCxTQUFTLGNBQWM7QUFFdkIsSUFBSSxlQUFlO0FBeUJaLElBQU0sV0FBTixjQUF1QjtFQUM1QjtJQUNFLG1CQUFnQyxVQUFVO01BQ3hDLGdCQUFrRCxVQUFVO0lBQzlEO0VBQ0Y7QUFDRixFQUFFO0VBTks7O0FBU0wsU0FBUSxhQUFhO0FBRXJCLFNBQVUsNEJBQTRCO0FBR00seUJBQWdCO0FBR2hCLG1DQUEwQjtBQUcxQiw2QkFBb0I7QUFHcEIsZ0NBQXVCO0FBR3ZCLGdDQUF1QjtBQUd2Qiw2QkFBb0I7QUFNbkMsZ0JBQWlDO0FBR2pDLGNBQUssY0FBYyxLQUFLLFVBQVU7QUFJL0QsMEJBQWlCLHFCQUFxQixLQUFLLFVBQVU7QUF3QnJELFNBQVEsNkJBQTZCLElBQUksMkJBQTJCLElBQUk7O0VBcEJ4RSxJQUFJLG9CQUFvQjtBQUN0QixXQUFPLE9BQU8sVUFBVSxxQkFBcUIsUUFBUTtFQUN2RDs7O0VBR0EsSUFBSSxrQkFBa0IsbUJBQTJCO0VBQUM7RUFpQmxELG9CQUFvQjtBQUNsQixVQUFNLGtCQUFrQjtBQUV4QixTQUFLLGtCQUFrQjtNQUNyQixZQUFZO01BQ1osZUFBZSxLQUFLO01BQ3BCLHlCQUF5QixLQUFLO01BQzlCLGdCQUFnQixLQUFLO01BQ3JCLG1CQUFtQixLQUFLO0lB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LFVBQVU7SUFDcEQ7RUFDRjtFQUVRLGFBQWE7QUFDbkIsUUFBSSxDQUFDLEtBQUssUUFBUTtBQUNoQixXQUFLLFNBQVM7SUFDaEI7RUFDRjtFQUVRLGNBQWM7QUFDcEIsUUFBSSxLQUFLLFFBQVE7QUFDZixXQUFLLFNBQVM7SUFDaEI7RUFDRjtFQUVBLFNBQVM7QUFFUCxXQUFPRSxRQUFPLEtBQUssY0FBYyxJQUM3QixLQUFLLGFBQWEsU0FBUyxLQUFLLGFBQWEsU0FDM0NBLGtEQUNBLElBQUksNkJBRU4sS0FBSyxhQUFhLFNBQVMsS0FBSyxhQUFhLFNBQzNDQSxrREFDQSxJQUFJO0VBQ1o7QUFDRjtBQTFJYSxrQkFDSixTQUFTLENBQUNDLFNBQVlBLE9BQU07QUFHUztFQUEzQ0MsVUFBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQUovQixrQkFJaUM7QUFHQTtFQUEzQ0EsVUFBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQVAvQixrQkFPaUM7QUFHZjtFQUE1QkEsVUFBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBVmhCLGtCQVVrQjtBQUdBO0VBQTVCQSxVQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FiaEIsa0JBYWtCO0FBR2E7RUFBekMsc0JBQXNCLEVBQUUsTUFBTSxRQUFRLENBQUM7R0FoQjdCLGtCQWdCK0I7QUFvQmxDO0VBRFAsU0FBUyxRQUFRO0dBbkNQLGtCQW9DSDtBQXBDRyxvQkFBTjtFQUROLGNBQWMscUJBQXFCO0dBQ3ZCOyIsCiAgIm5hbWVzIjogWyJzdHlsZXMiLCAic3R5bGVzIiwgImh0bWwiLCAicHJvcGVydHkiLCAiY3NzIiwgInN0eWxlcyIsICJodG1sIiwgInN0eWxlcyIsICJwcm9wZXJ0eSJdCn0K
