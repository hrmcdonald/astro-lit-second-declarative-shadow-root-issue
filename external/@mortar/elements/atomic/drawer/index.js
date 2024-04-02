import {
  styles as styles4
} from "../../chunks/chunk.WF4M7EWL.js";
import "../../chunks/chunk.TZBVP4HI.js";
import "../../chunks/chunk.DVRGAMYN.js";
import {
  DetectChildCloseController,
  InverseMixin,
  MteElement,
  OverlayMixin,
  PresetMixinFactory,
  StylePartsMixin,
  __decorateClass,
  config,
  defineElement,
  mapNumberToPx,
  onUpdate,
  selectorFactory,
  styles2 as styles,
  styles4 as styles2,
  styles7 as styles3
} from "../../chunks/chunk.KVXAK6W4.js";

// src/atomic/drawer/drawer.element.ts
import { html } from "lit";
import { property, queryAssignedElements } from "lit/decorators.js";
import { classMap } from "lit-html/directives/class-map.js";
var nextUniqueId = 0;
var drawerDefaultSize = "350px";
var MteDrawer = class extends OverlayMixin(
  InverseMixin(
    PresetMixinFactory("MteDrawer")(
      StylePartsMixin(MteElement)
    )
  )
) {
  constructor() {
    super(...arguments);
    this.internalId = nextUniqueId++;
    this.instanceStyleSelectorRoot = ":host:host:host:host:host:host .panel";
    this.position = "right";
    this.size = drawerDefaultSize;
    this.withoutCloseOnClickOutside = false;
    this.withoutCloseOnEscape = false;
    this.withoutHeaderDivider = false;
    this.withoutFooterDivider = false;
    this.ariaModal = "true";
    this.role = "dialog";
    this.id = `mte-drawer--${this.internalId}`;
    this.animationDuration = config.animation.transitionDurationJs.short * 1e3;
    this.detectChildCloseController = new DetectChildCloseController(this);
    this.triggerOn = "click";
  }
  /** The first element currently in the header slot */
  get headerElementRef() {
    return this._headerElementRef;
  }
  set headerElementRef(newElem) {
    this._headerElementRef = newElem;
    if (newElem) {
      const existingId = this._headerElementRef?.getAttribute("id");
      const headerId = existingId ?? `mte-drawer-header--${this.internalId}`;
      this._headerElementRef?.setAttribute("id", headerId);
      this.ariaLabelledBy = headerId;
    } else {
      this.ariaLabelledBy = null;
    }
  }
  handleOverlayChange() {
    this.setOverlayOptions({
      withCloseOnClickOutside: !this.withoutCloseOnClickOutside,
      withDimBackdrop: this.ariaModal === "true",
      withFocusTrap: this.ariaModal === "true",
      withScrollLock: this.ariaModal === "true",
      withCloseOnEscape: !this.withoutCloseOnEscape,
      backdropTransitionDuration: `${this.animationDuration}ms`
    });
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    if (this.headerElements.length > 0) {
      this.headerElementRef = this.headerElements[0];
    }
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("size")) {
      this.setInstanceStyle("size", selectorFactory(":host:host:host"), {
        "--size": `min(100vh, ${mapNumberToPx(this.size)})`
      });
    }
    if (changedProps.has("animationDuration")) {
      this.setInstanceStyle("drawer", selectorFactory(this.instanceStyleSelectorRoot), {
        "--transition-duration": `${this.animationDuration}ms`
      });
    }
  }
  /** Opens the drawer */
  open() {
    return new Promise((resolve) => {
      this.handleOverlayOpen().then(() => {
        setTimeout(() => {
          this.handleOverlayOpenEnd().then(() => {
            resolve();
          });
        }, this.animationDuration);
      });
    });
  }
  /** Closes the drawer */
  close() {
    return new Promise((resolve) => {
      this.handleOverlayClose().then(() => {
        setTimeout(() => {
          this.handleOverlayCloseEnd().then(() => {
            resolve();
          });
        }, this.animationDuration);
      });
    });
  }
  /** Toggles the drawer open and closed */
  toggle() {
    if (this.opened) {
      return this.close();
    } else {
      return this.open();
    }
  }
  handleHeaderSlotChange() {
    if (this.headerElements.length > 0) {
      this.headerElementRef = this.headerElements[0];
    }
  }
  render() {
    return html`${this.instanceStyles}<div class="${classMap({ panel: true, opened: this.opened && this.readyForAnimation })}"><div class="header" part="header"><slot name="header" @slotchange="${this.handleHeaderSlotChange}"></slot></div><div class="content-container"><div class="content" part="content" tabindex="0"><slot></slot></div></div><div class="footer" part="footer"><slot name="footer"></slot></div></div>`;
  }
};
MteDrawer.styles = [styles3, styles, styles2, styles4];
// Disable change-in-update warnings here because we want to handle state changes during init ASAP
MteDrawer.enabledWarnings = [];
__decorateClass([
  property({ reflect: true })
], MteDrawer.prototype, "position", 2);
__decorateClass([
  property({ reflect: true })
], MteDrawer.prototype, "size", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteDrawer.prototype, "withoutCloseOnClickOutside", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteDrawer.prototype, "withoutCloseOnEscape", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteDrawer.prototype, "withoutHeaderDivider", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteDrawer.prototype, "withoutFooterDivider", 2);
__decorateClass([
  property({
    attribute: "aria-modal",
    reflect: true
  })
], MteDrawer.prototype, "ariaModal", 2);
__decorateClass([
  property({ attribute: "aria-describedby", reflect: true })
], MteDrawer.prototype, "ariaDescribedBy", 2);
__decorateClass([
  property({ reflect: true })
], MteDrawer.prototype, "role", 2);
__decorateClass([
  property({ reflect: true })
], MteDrawer.prototype, "id", 2);
__decorateClass([
  property({ attribute: "aria-labelledby", reflect: true })
], MteDrawer.prototype, "ariaLabelledBy", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MteDrawer.prototype, "animationDuration", 2);
__decorateClass([
  property({ reflect: true })
], MteDrawer.prototype, "triggerOn", 2);
__decorateClass([
  queryAssignedElements({ slot: "header" })
], MteDrawer.prototype, "headerElements", 2);
__decorateClass([
  onUpdate(["withoutFocusTrap", "withoutCloseOnClickOutside", "withoutCloseOnEscape", "ariaModal"])
], MteDrawer.prototype, "handleOverlayChange", 1);
MteDrawer = __decorateClass([
  defineElement("mte-drawer")
], MteDrawer);
export {
  MteDrawer
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9kcmF3ZXIiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsVUFBVSw2QkFBNkI7QUFxQmhELFNBQVMsZ0JBQWdCO0FBSXpCLElBQUksZUFBZTtBQUNuQixJQUFNLG9CQUFvQjtBQTJCbkIsSUFBTSxZQUFOLGNBQXdCO0VBQzdCO0lBQ0UsbUJBQWlDLFdBQVc7TUFDMUMsZ0JBQW1ELFVBQVU7SUFDL0Q7RUFDRjtBQUNGLEVBQUU7RUFOSzs7QUFZTCxTQUFRLGFBQWE7QUFFckIsU0FBVSw0QkFBNEI7QUFHVCxvQkFBOEI7QUFHOUIsZ0JBQU87QUFHUSxzQ0FBNkI7QUFHN0IsZ0NBQXVCO0FBR3ZCLGdDQUF1QjtBQUd2QixnQ0FBdUI7QUFPbkUscUJBQThCO0FBTUQsZ0JBQTBCO0FBRzFCLGNBQUssZUFBZSxLQUFLLFVBQVU7QUFPckIsNkJBQ3pDLE9BQU8sVUFBVSxxQkFBcUIsUUFBUTtBQUVoRCxTQUFRLDZCQUE2QixJQUFJLDJCQUEyQixJQUFJO0FBRTNDLHFCQUFZOzs7RUFLekMsSUFBWSxtQkFBbUI7QUFDN0IsV0FBTyxLQUFLO0VBQ2Q7RUFFQSxJQUFZLGlCQUFpQixTQUFrQztBQUM3RCxTQUFLLG9CQUFvQjtBQUN6QixRQUFJLFNBQVM7QUFFWCxZQUFNLGFBQWEsS0FBSyxtQkFBbUIsYUFBYSxJQUFJO0FBQzVELFlBQU0sV0FBVyxjQUFjLHNCQUFzQixLQUFLLFVBQVU7QUFDcEUsV0FBSyxtQkFBbUIsYUFBYSxNQUFNLFFBQVE7QUFDbkQsV0FBSyxpQkFBaUI7SUFDeEIsT0FBTztBQUNMLFdBQUssaUJBQWlCO0lBQ3hCO0VBQ0Y7RUFJUSxzQkFBc0I7QUFDNUIsU0FBSyxrQkFBa0I7TUFDckIseUJBQXlCLENBQUMsS0FBSztNQUMvQixpQkFBaUIsS0FBSyxjQUFjO01BQ3BD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
