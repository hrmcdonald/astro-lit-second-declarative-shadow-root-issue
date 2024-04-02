import {
  MteElement,
  SlotController,
  __decorateClass,
  defineElement,
  onUpdate
} from "./chunk.Y4EV6E5D.js";

// src/utilities/overlay-trigger/overlay-trigger.element.ts
import { html } from "lit";
import { property, queryAssignedElements } from "lit/decorators.js";

// src/utilities/overlay-trigger/overlay-trigger.styles.ts
import { css } from "lit";
var styles = css`:host{box-sizing:border-box;display:contents}slot[name=overlay]::slotted(*){position:absolute}`;

// src/utilities/overlay-trigger/overlay-trigger.element.ts
var nextUniqueId = 0;
var MteOverlayTrigger = class extends MteElement {
  constructor() {
    super();
    this.slotController = new SlotController(this);
    /** Tracks weather hover listeners are active or not */
    this.isListeningForOpen = false;
    /** Called to update listeners on the trigger element when the overlay element's `triggerOn` value is changed */
    this.updateTriggerListeners = (e) => {
      this.removeTriggerListeners(this.triggerElementRef);
      this.addTriggerListeners(this.triggerElementRef);
      e?.stopPropagation();
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  /** The first element currently in the trigger slot */
  get triggerElementRef() {
    return this._triggerElementRef;
  }
  set triggerElementRef(newElem) {
    if (this._triggerElementRef !== newElem) {
      this.removeTriggerListeners(this._triggerElementRef);
      this._triggerElementRef = newElem;
      if (this._triggerElementRef && !this._triggerElementRef?.id) {
        this._triggerElementRef.id = `mte-overlay-trigger--trigger--${nextUniqueId++}`;
      }
      this.addTriggerListeners(this._triggerElementRef);
      if (!this._triggerElementRef) {
        this.overlayElementRef?.close?.();
      }
      this.updateOverlayTargetElement();
    }
  }
  /** The first element currently in the overlay slot */
  get overlayElementRef() {
    return this._overlayElementRef;
  }
  set overlayElementRef(newElem) {
    if (this._overlayElementRef !== newElem) {
      this.removeOverlayListeners(this._overlayElementRef);
      this._overlayElementRef = newElem;
      this.addOverlayListeners(this._overlayElementRef);
      this.updateOverlayTargetElement();
      if (this.triggerElementRef) {
        this.updateTriggerListeners();
      }
    }
  }
  handleOpenedChanged() {
    setTimeout(() => {
      if (this.opened) {
        this.open();
      } else {
        this.close();
      }
    });
  }
  handleManualTriggerElementChanged() {
    this.triggerElementRef = this.triggerElement;
  }
  handleManualOverlayElementChanged() {
    this.overlayElementRef = this.overlayElement;
  }
  connectedCallback() {
    super.connectedCallback();
    this.slotController.watchSlots(["overlay", "trigger"]).subscribe((changes) => {
      if (changes?.has("overlay")) {
        if (this.overlayElements?.length > 0) {
          const overlayElem = this.overlayElements?.[0];
          if (overlayElem.hasAttribute("data-overlay-wrapper")) {
            if (overlayElem.hasAttribute("data-overlay-ready")) {
              this.overlayElementRef = overlayElem.children?.[0];
            } else {
              overlayElem.addEventListener(
                "portalready",
                (e) => {
                  this.overlayElementRef = overlayElem.children?.[0];
                },
                { once: true }
              );
            }
          } else {
            this.overlayElementRef = overlayElem;
          }
        }
      }
      if (changes?.has("trigger")) {
        if (this.triggerElements?.length > 0) {
          this.triggerElementRef = this.triggerElements?.[0];
        }
      }
      if (changes?.has("trigger") && !this.triggerElements?.[0]) {
        this.overlayElementRef?.close?.();
      }
    });
    this.updateComplete.then(() => {
      this.toggleListeners(true);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.overlayElementRef?.close?.();
    this.toggleListeners(false);
  }
  /** Toggles the overlay elements open/close state */
  toggle() {
    setTimeout(() => {
      this.overlayElementRef?.toggle?.();
    });
  }
  /** Opens overlay elements */
  open() {
    setTimeout(() => {
      this.overlayElementRef?.open?.();
    });
  }
  /** Closes overlay elements */
  close() {
    setTimeout(() => {
      this.overlayElementRef?.close?.();
    });
  }
  /** Updates the overlay elements targetElement when either are changed */
  updateOverlayTargetElement() {
    if (this.overlayElementRef && this.triggerElementRef) {
      this.overlayElementRef.targetElement = this.triggerElementRef;
      if (this.opened) {
        this.open();
      } else {
        this.close();
      }
    }
  }
  /** Adds hover/focus open/close listeners to the container elem */
  toggleListeners(set) {
    if (set === null) {
      set = !this.isListeningForOpen;
    }
    if (set) {
      this.addTriggerListeners(this.triggerElementRef);
    } else {
      this.removeTriggerListeners(this.triggerElementRef);
    }
    this.isListeningForOpen = set;
  }
  /** Adds event listeners to the trigger element based on the overlay elements `triggerOn` value */
  addTriggerListeners(element) {
    if (element) {
      const triggerOn = this.overlayElementRef?.triggerOn ?? this.overlayElementRef?.getAttribute("triggerOn");
      if (triggerOn === "none" || !triggerOn) {
        return;
      }
      if (triggerOn !== "click") {
        element.addEventListener("focus", this.open, true);
        element.addEventListener("blur", this.close, true);
        if (triggerOn === "hover") {
          element.addEventListener("mouseenter", this.open);
          element.addEventListener("mouseleave", this.close);
        }
      } else {
        element.addEventListener("click", this.open, true);
      }
    }
  }
  /** Removes event listeners from the trigger element */
  removeTriggerListeners(element) {
    if (element) {
      element.removeEventListener("mouseenter", this.open);
      element.removeEventListener("mouseleave", this.close);
      element.removeEventListener("focus", this.open, true);
      element.removeEventListener("blur", this.close, true);
      element.removeEventListener("click", this.open, true);
    }
  }
  /** Adds event listeners to the overlay element to watch for changes to its `triggerOn` value */
  addOverlayListeners(element) {
    if (element) {
      element.addEventListener("onTriggerChange", this.updateTriggerListeners);
    }
  }
  /** Removes event listeners from the overlay element */
  removeOverlayListeners(element) {
    if (element) {
      element.removeEventListener("onTriggerChange", this.updateTriggerListeners);
    }
  }
  render() {
    return html`<slot name="overlay"></slot><slot name="trigger"></slot>`;
  }
};
MteOverlayTrigger.styles = [styles];
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteOverlayTrigger.prototype, "opened", 2);
__decorateClass([
  property({ attribute: false })
], MteOverlayTrigger.prototype, "triggerElement", 2);
__decorateClass([
  property({ attribute: false })
], MteOverlayTrigger.prototype, "overlayElement", 2);
__decorateClass([
  queryAssignedElements({ slot: "trigger" })
], MteOverlayTrigger.prototype, "triggerElements", 2);
__decorateClass([
  queryAssignedElements({ slot: "overlay" })
], MteOverlayTrigger.prototype, "overlayElements", 2);
__decorateClass([
  onUpdate("opened")
], MteOverlayTrigger.prototype, "handleOpenedChanged", 1);
__decorateClass([
  onUpdate("triggerElement")
], MteOverlayTrigger.prototype, "handleManualTriggerElementChanged", 1);
__decorateClass([
  onUpdate("overlayElement")
], MteOverlayTrigger.prototype, "handleManualOverlayElementChanged", 1);
MteOverlayTrigger = __decorateClass([
  defineElement("mte-overlay-trigger")
], MteOverlayTrigger);

export {
  MteOverlayTrigger
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL3V0aWxpdGllcy9vdmVybGF5LXRyaWdnZXIiLCAiLi4vLi4vLi4vc3JjL3V0aWxpdGllcy9vdmVybGF5LXRyaWdnZXIvb3ZlcmxheS10cmlnZ2VyLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmNvbnRlbnRzfXNsb3RbbmFtZT1vdmVybGF5XTo6c2xvdHRlZCgqKXtwb3NpdGlvbjphYnNvbHV0ZX1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUFBLFNBQVMsWUFBd0I7QUFDakMsU0FBUyxVQUFVLDZCQUE2Qjs7O0FDRGhELFNBQVMsV0FBVztBQUFhLElBQU0sU0FBUzs7O0FETWhELElBQUksZUFBZTtBQVNaLElBQU0sb0JBQU4sY0FBZ0MsV0FBVztFQStGaEQsY0FBYztBQUNaLFVBQU07QUE5QlIsU0FBUSxpQkFBaUIsSUFBSSxlQUFlLElBQUk7QUFHaEQ7U0FBUSxxQkFBcUI7QUEyTDdCO1NBQVEseUJBQXlCLENBQUMsTUFBNkI7QUFDN0QsV0FBSyx1QkFBdUIsS0FBSyxpQkFBaUI7QUFDbEQsV0FBSyxvQkFBb0IsS0FBSyxpQkFBaUI7QUFDL0MsU0FBRyxnQkFBZ0I7SUFDckI7QUFuS0UsU0FBSyxPQUFPLEtBQUssS0FBSyxLQUFLLElBQUk7QUFDL0IsU0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLElBQUk7RUFDbkM7O0VBMUVBLElBQVksb0JBQW9CO0FBQzlCLFdBQU8sS0FBSztFQUNkO0VBQ0EsSUFBWSxrQkFDVixTQUNBO0FBQ0EsUUFBSSxLQUFLLHVCQUF1QixTQUFTO0FBRXZDLFdBQUssdUJBQXVCLEtBQUssa0JBQWtCO0FBQ25ELFdBQUsscUJBQXFCO0FBQzFCLFVBQUksS0FBSyxzQkFBc0IsQ0FBQyxLQUFLLG9C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
