import "../../chunks/chunk.AA34PHRX.js";
import "../../chunks/chunk.CFKDY3QJ.js";
import {
  DetectChildCloseController,
  MteContentBase,
  OverlayMixin,
  PresetMixinFactory,
  RadiusMixin,
  SizeMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  onUpdate,
  styles4 as styles,
  styles7 as styles2
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/modal/modal.element.ts
import { html } from "lit";
import { property, query, queryAssignedElements } from "lit/decorators.js";

// src/atomic/modal/modal.styles.ts
import { css } from "lit";
var styles3 = css`:host{display:block;--mte-modal-background:var(--mte-surface-2);--mte-modal-color:inherit;--mte-modal-padding:var(--mte-space-md);--mte-modal-header-divider:solid 1px var(--mte-border-1);--mte-modal-footer-divider:solid 1px var(--mte-border-1);--mte-modal-border-radius:var(--mte-border-radius-xl);--transition-duration:200ms}:host(:not([opened]):not([openedFull])) .modal{height:1px!important;position:absolute!important;width:1px!important;clip:rect(0 0 0 0)!important;border:none!important;clip-path:inset(50%)!important;overflow:hidden!important;padding:0!important;white-space:nowrap!important}:host .modal{background:var(--mte-modal-background);border-color:transparent;border-radius:var(--mte-modal-border-radius);border-width:0;box-shadow:var(--mte-elevation-z3);color:var(--color);display:flex;flex-direction:column;left:50%;max-height:95vh;max-width:95vw;opacity:0;overflow:hidden;pointer-events:auto;position:fixed;top:50%;transform:translate(-50%,calc(-50% + 30px));transition:visibility 0s var(--transition-duration),transform var(--transition-duration),opacity var(--transition-duration);visibility:hidden;width:auto;will-change:transform;z-index:1}:host([size=sm]) .modal{width:min(440px,95vw)}:host([size=md]) .modal{width:min(600px,95vw)}:host([size=lg]) .modal{width:min(960px,95vw)}:host([radius=sm]) .modal{--mte-modal-border-radius:var(--mte-border-radius-md)}:host([radius=md]) .modal{--mte-modal-border-radius:var(--mte-border-radius-lg)}:host([withoutHeaderDivider]){--mte-modal-header-divider:none}:host([withoutFooterDivider]){--mte-modal-footer-divider:none}:host .modal.opened{opacity:1;transform:translate(-50%,-50%);transition:visibility 0s,transform var(--transition-duration),opacity var(--transition-duration);visibility:visible}:host ::slotted(mte-content),:host ::slotted(mte-footer),:host ::slotted(mte-header){--composition-padding-y:var(--mte-modal-padding);--composition-padding-x:var(--mte-modal-padding)}:host ::slotted(mte-header){--composition-divider:var(--mte-modal-header-divider)}:host ::slotted(mte-footer){--composition-divider:var(--mte-modal-footer-divider)}.content-container,.header{background:var(--mte-modal-background)}.content-container{display:flex;flex-grow:1;overflow:hidden;position:relative}.content{flex-grow:1;overflow:auto;will-change:transform}.content ::slotted(mte-content){padding-bottom:var(--composition-padding-y);padding-top:var(--composition-padding-y)}.footer{background:var(var(--mte-modal-background))}@media screen and (prefers-reduced-motion:reduce){:host .modal,:host .modal.opened{transition:none}}`;

// src/atomic/modal/modal.element.ts
import { ifDefined } from "lit-html/directives/if-defined.js";
import { classMap } from "lit-html/directives/class-map.js";
import { config, selectorFactory } from "@mortar/styles";
var nextUniqueId = 0;
var MteModal = class extends SizeMixin(
  RadiusMixin(
    OverlayMixin(
      PresetMixinFactory("MteModal")(
        StylePartsMixin(MteContentBase)
      )
    )
  )
) {
  constructor() {
    super(...arguments);
    this.internalId = nextUniqueId++;
    this.withoutCloseOnClickOutside = false;
    this.withoutCloseOnEscape = false;
    this.withoutFooterDivider = false;
    this.withoutHeaderDivider = false;
    this.withContentFocus = false;
    this.ariaModal = "true";
    this.role = "dialog";
    this.id = `mte-modal--${this.internalId}`;
    this.animationDuration = config.animation.transitionDurationJs.short * 1e3;
    this.contentStyleSelectorRoot = ":host:host:host:host:host:host .modal";
    this.instanceStyleSelectorRoot = ":host:host:host:host:host:host .modal";
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
      const headerId = existingId ?? `mte-modal-header--${this.internalId}`;
      this._headerElementRef?.setAttribute("id", headerId);
      this.ariaLabelledBy = headerId;
    } else {
      this.ariaLabelledBy = null;
    }
  }
  onCloseOnEscapeChange() {
    this.setOverlayOptions({
      withCloseOnClickOutside: !this.withoutCloseOnClickOutside,
      withCloseOnEscape: !this.withoutCloseOnEscape,
      withDimBackdrop: true,
      backdropTransitionDuration: `${this.animationDuration}ms`
    });
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    if (this.headerElements.length > 0) {
      this.headerElementRef = this.headerElements[0];
    }
  }
  open() {
    return new Promise((resolve) => {
      this.handleOverlayOpen({
        clickOutsideElement: this.modalElem
      }).then(() => {
        setTimeout(() => {
          this.handleOverlayOpenEnd().then(() => {
            resolve();
          });
        }, this.animationDuration);
      });
    });
  }
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
  /** Override default transition timing styles when changed */
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("animationDuration")) {
      this.setInstanceStyle("modal", selectorFactory(this.instanceStyleSelectorRoot), {
        "--transition-duration": `${this.animationDuration}ms`
      });
    }
  }
  render() {
    return html`${this.instanceStyles}<div class="modal ${classMap({ opened: this.opened && this.readyForAnimation })}"><div class="header" part="header"><slot name="header" @slotchange="${this.handleHeaderSlotChange}"></slot></div><div class="content-container"><div class="content" part="content" tabindex="${ifDefined(this.withContentFocus ? 0 : null)}"><slot></slot></div></div><div part="footer" class="footer"><slot name="footer"></slot></div></div>`;
  }
};
MteModal.styles = [styles2, styles, styles3];
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteModal.prototype, "withoutCloseOnClickOutside", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteModal.prototype, "withoutCloseOnEscape", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteModal.prototype, "withoutFooterDivider", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteModal.prototype, "withoutHeaderDivider", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteModal.prototype, "withContentFocus", 2);
__decorateClass([
  property({
    attribute: "aria-modal",
    reflect: true
  })
], MteModal.prototype, "ariaModal", 2);
__decorateClass([
  property({ attribute: "aria-describedby", reflect: true })
], MteModal.prototype, "ariaDescribedBy", 2);
__decorateClass([
  property({ reflect: true })
], MteModal.prototype, "role", 2);
__decorateClass([
  property({ reflect: true })
], MteModal.prototype, "id", 2);
__decorateClass([
  property({ attribute: "aria-labelledby", reflect: true })
], MteModal.prototype, "ariaLabelledBy", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MteModal.prototype, "animationDuration", 2);
__decorateClass([
  query(".modal")
], MteModal.prototype, "modalElem", 2);
__decorateClass([
  property({ reflect: true })
], MteModal.prototype, "triggerOn", 2);
__decorateClass([
  queryAssignedElements({ slot: "header" })
], MteModal.prototype, "headerElements", 2);
__decorateClass([
  onUpdate(["withoutCloseOnEscape", "withoutCloseOnClickOutside"])
], MteModal.prototype, "onCloseOnEscapeChange", 1);
MteModal = __decorateClass([
  defineElement("mte-modal")
], MteModal);
export {
  MteModal
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9tb2RhbCIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL21vZGFsL21vZGFsLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2Rpc3BsYXk6YmxvY2s7LS1tdGUtbW9kYWwtYmFja2dyb3VuZDp2YXIoLS1tdGUtc3VyZmFjZS0yKTstLW10ZS1tb2RhbC1jb2xvcjppbmhlcml0Oy0tbXRlLW1vZGFsLXBhZGRpbmc6dmFyKC0tbXRlLXNwYWNlLW1kKTstLW10ZS1tb2RhbC1oZWFkZXItZGl2aWRlcjpzb2xpZCAxcHggdmFyKC0tbXRlLWJvcmRlci0xKTstLW10ZS1tb2RhbC1mb290ZXItZGl2aWRlcjpzb2xpZCAxcHggdmFyKC0tbXRlLWJvcmRlci0xKTstLW10ZS1tb2RhbC1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXhsKTstLXRyYW5zaXRpb24tZHVyYXRpb246MjAwbXN9Omhvc3QoOm5vdChbb3BlbmVkXSk6bm90KFtvcGVuZWRGdWxsXSkpIC5tb2RhbHtoZWlnaHQ6MXB4IWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7d2lkdGg6MXB4IWltcG9ydGFudDtjbGlwOnJlY3QoMCAwIDAgMCkhaW1wb3J0YW50O2JvcmRlcjpub25lIWltcG9ydGFudDtjbGlwLXBhdGg6aW5zZXQoNTAlKSFpbXBvcnRhbnQ7b3ZlcmZsb3c6aGlkZGVuIWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50O3doaXRlLXNwYWNlOm5vd3JhcCFpbXBvcnRhbnR9Omhvc3QgLm1vZGFse2JhY2tncm91bmQ6dmFyKC0tbXRlLW1vZGFsLWJhY2tncm91bmQpO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOnZhcigtLW10ZS1tb2RhbC1ib3JkZXItcmFkaXVzKTtib3JkZXItd2lkdGg6MDtib3gtc2hhZG93OnZhcigtLW10ZS1lbGV2YXRpb24tejMpO2NvbG9yOnZhcigtLWNvbG9yKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2xlZnQ6NTAlO21heC1oZWlnaHQ6OTV2aDttYXgtd2lkdGg6OTV2dztvcGFjaXR5OjA7b3ZlcmZsb3c6aGlkZGVuO3BvaW50ZXItZXZlbnRzOmF1dG87cG9zaXRpb246Zml4ZWQ7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsY2FsYygtNTAlICsgMzBweCkpO3RyYW5zaXRpb246dmlzaWJpbGl0eSAwcyB2YXIoLS10cmFuc2l0aW9uLWR1cmF0aW9uKSx0cmFuc2Zvcm0gdmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbiksb3BhY2l0eSB2YXIoLS10cmFuc2l0aW9uLWR1cmF0aW9uKTt2aXNpYmlsaXR5OmhpZGRlbjt3aWR0aDphdXRvO3dpbGwtY2hhbmdlOnRyYW5zZm9ybTt6LWluZGV4OjF9Omhvc3QoW3NpemU9c21dKSAubW9kYWx7d2lkdGg6bWluKDQ0MHB4LDk1dncpfTpob3N0KFtzaXplPW1kXSkgLm1vZGFse3dpZHRoOm1pbig2MDBweCw5NXZ3KX06aG9zdChbc2l6ZT1sZ10pIC5tb2RhbHt3aWR0aDptaW4oOTYwcHgsOTV2dyl9Omhvc3QoW3JhZGl1cz1zbV0pIC5tb2RhbHstLW10ZS1tb2RhbC1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLW1kKX06aG9zdChbcmFkaXVzPW1kXSkgLm1vZGFsey0tbXRlLW1vZGFsLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbGcpfTpob3N0KFt3aXRob3V0SGVhZGVyRGl2aWRlcl0pey0tbXRlLW1vZGFsLWhlYWRlci1kaXZpZGVyOm5vbmV9Omhvc3QoW3dpdGhvdXRGb290ZXJEaXZpZGVyXSl7LS1tdGUtbW9kYWwtZm9vdGVyLWRpdmlkZXI6bm9uZX06aG9zdCAubW9kYWwub3BlbmVke29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNpdGlvbjp2aXNpYmlsaXR5IDBzLHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uLWR1cmF0aW9uKSxvcGFjaXR5IHZhcigtLXRyYW5zaXRpb24tZHVyYXRpb24pO3Zpc2liaWxpdHk6dmlzaWJsZX06aG9zdCA6OnNsb3R0ZWQobXRlLWNvbnRlbnQpLDpob3N0IDo6c2xvdHRlZChtdGUtZm9vdGVyKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWhlYWRlcil7LS1jb21wb3NpdGlvbi1wYWRkaW5nLXk6dmFyKC0tbXRlLW1vZGFsLXBhZGRpbmcpOy0tY29tcG9zaXRpb24tcGFkZGluZy14OnZhcigtLW10ZS1tb2RhbC1wYWRkaW5nKX06aG9zdCA6OnNsb3R0ZWQobXRlLWhlYWRlcil7LS1jb21wb3NpdGlvbi1kaXZpZGVyOnZhcigtLW10ZS1tb2RhbC1oZWFkZXItZGl2aWRlcil9Omhvc3QgOjpzbG90dGVkKG10ZS1mb290ZXIpey0tY29tcG9zaXRpb24tZGl2aWRlcjp2YXIoLS1tdGUtbW9kYWwtZm9vdGVyLWRpdmlkZXIpfS5jb250ZW50LWNvbnRhaW5lciwuaGVhZGVye2JhY2tncm91bmQ6dmFyKC0tbXRlLW1vZGFsLWJhY2tncm91bmQpfS5jb250ZW50LWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1ncm93OjE7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS5jb250ZW50e2ZsZXgtZ3JvdzoxO292ZXJmbG93OmF1dG87d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5jb250ZW50IDo6c2xvdHRlZChtdGUtY29udGVudCl7cGFkZGluZy1ib3R0b206dmFyKC0tY29tcG9zaXRpb24tcGFkZGluZy15KTtwYWRkaW5nLXRvcDp2YXIoLS1jb21wb3NpdGlvbi1wYWRkaW5nLXkpfS5mb290ZXJ7YmFja2dyb3VuZDp2YXIodmFyKC0tbXRlLW1vZGFsLWJhY2tncm91bmQpKX1AbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upezpob3N0IC5tb2RhbCw6aG9zdCAubW9kYWwub3BlbmVke3RyYW5zaXRpb246bm9uZX19YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLFlBQVk7QUFDckIsU0FBUyxVQUFVLE9BQU8sNkJBQTZCOzs7QUNEdkQsU0FBUyxXQUFXO0FBQWEsSUFBTUEsVUFBUzs7O0FEbUJoRCxTQUFTLGlCQUFpQjtBQUUxQixTQUFTLGdCQUFnQjtBQUd6QixTQUFTLFFBQVEsdUJBQXVCO0FBRXhDLElBQUksZUFBZTtBQXlCWixJQUFNLFdBQU4sY0FBdUI7RUFDNUI7SUFDRTtNQUNFLG1CQUFnQyxVQUFVO1FBQ3hDLGdCQUFzRCxjQUFjO01BQ3RFO0lBQ0Y7RUFDRjtBQUNGLEVBQUU7RUFSSzs7QUFXTCxTQUFRLGFBQWE7QUFHdUIsc0NBQTZCO0FBRzdCLGdDQUF1QjtBQUd2QixnQ0FBdUI7QUFHdkIsZ0NBQXVCO0FBR3ZCLDRCQUFtQjtBQU8vRCxxQkFBOEI7QUFNRCxnQkFBMEI7QUFHMUIsY0FBSyxjQUFjLEtBQUssVUFBVTtBQU9wQiw2QkFDekMsT0FBTyxVQUFVLHFCQUFxQixRQUFRO0FBRWhELFNBQVUsMkJBQTJCO0FBRXJDLFNBQVUsNEJBQTRCO0FBRXRDLFNBQVEsNkJBQTZCLElBQUksMkJBQTJCLElBQUk7QUFJM0MscUJBQVk7OztFQUt6QyxJQUFZLG1CQUFtQjtBQUM3QixXQUFPLEtBQUs7RUFDZDtFQUVBLElBQVksaUJBQWlCLFNBQWtDO0FBQzdELFNBQUssb0JBQW9CO0FBQ3pCLFFBQUksU0FBUztBQUVYLFlBQU0sYUFBYSxLQUFLLG1CQUFtQixhQUFhLElBQUk7QUFDNUQsWUFBTSxXQUFXLGNBQWMscUJBQXFCLEtBQUssVUFBVTtBQUNuRSxXQUFLLG1CQUFtQixhQUFhLE1BQU0sUUFBUTtBQUNuRCxXQUFLLGlCQUFpQjtJQUN4QixPQUFPO0FBQ0wsV0FBSyxpQkFBaUI7SUFDeEI7RUFDRjtFQUlRLHdCQUF3QjtBQUM5QixTQUFLLGtCQUFrQjtNQUNyQix5QkFBeUIsQ0FBQyxLQUFLO01BQy9CLG1CQUFtQixDQUFDLEtBQUs7TUFDekIsaUJBQWlCO01BQ2pCLDRCQUE0QixHQUFHLEtBQUssaUJBQWlCO0lBQ3ZELENBQUM7RUFDSDtFQUVBLGFBQWEsY0FBYztBQUN6QixVQUFNLGFBQWEsWUFBWTtBQUUvQixRQUFJLEtBQUssZUFBZSxTQUFTLEdBQUc7QUFDbEMsV0FBSyxtQkFBbUIsS0FBSyxlQUFlLENBQUM7SUFDL0M7RUFDRjtFQUVPLE9BQU87QUFDWixXQUFPLElBQUksUUFBYyxDQUFDLFlBQVk7QUFDcEMsV0FBSyxrQkFBa0I7UUFDckIscUJBQXFCLEtBQUs7TUFDNUIsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUNaLG1CQUFXLE1BQU07QUFDZixlQUFLLHFCQUFxQixFQUFFLEtBQUssTUFBTTtBQUNyQyxvQkFBUTtVQUNWLENBQUM7UUFDSCxHQUFHLEtBQUssaUJBQWlCO01BQzNCLENBQUM7SUFDSCxDQUFDO0VBQ0g7RUFFTyxRQUFRO0FBQ2IsV0FBTyxJQUFJLFFBQWMsQ0FBQyxZQUFZO0FBQ3BDLFdBQUssbUJBQW1CLEVBQUUsS0FBSyxNQUFNO0FBRW5DLG1CQUFXLE1BQU07QUFDZixlQUFLLHNCQUFzQixFQUFFLEtBQUssTUFBTTtBQUN0QyxvQkFBUTtVQUNWLENBQUM7UUFDSCxHQUFHLEtBQUssaUJBQWlCO01BQzNCLENBQUM7SUFDSCxDQUFDO0VBQ0g7RUFFTyxTQUFTO0FBQ2QsUUFBSSxLQUFLLFFBQVE7QUFDZixhQUFPLEtBQUssTUFBTTtJQUNwQixPQUFPO0FBQ0wsYUFBTyxLQUFLLEtBQUs7SUFDbkI7RUFDRjtFQUVRLHlCQUF5QjtBQUMvQixRQUFJLEtBQUssZUFBZSxTQUFTLEdBQUc7QUFDbEMsV0FBSyxtQkFBbUIsS0FBSyxlQUFlLENBQUM7SUFDL0M7RUFDRjs7RUFHVSxxQkFBcUIsY0FBYztBQUMzQyxVQUFNLHFCQUFxQixZQUFZO0FBQ3ZDLFFBQUksYUFBYSxJQUFJLG1CQUFtQixHQUFHO0FBQ3pDLFdBQUssaUJBQWlCLFNBQVMsZ0JBQWdCLEtBQUsseUJBQXlCLEdBQUc7UUFDOUUseUJBQXlCLEdBQUcsS0FBSyxpQkFBaUI7TUFDcEQsQ0FBQztJQUNIO0VBQ0Y7RUFFQSxTQUFTO0FBQ1AsV0FBTyxPQUFPLEtBQUssY0FBYyxxQkFDWCxTQUFTLEVBQUUsUUFBUSxLQUFLLFVBQVUsS0FBSyxrQkFBa0IsQ0FBQyxDQUFDLHdFQUV6QyxLQUFLLHNCQUFzQiwrRkFNaEQsVUFBVSxLQUFLLG1CQUFtQixJQUFJLElBQUksQ0FBQztFQVFoRTtBQUNGO0FBM0thLFNBU0osU0FBUyxDQUFDQyxTQUFZLFFBQWVBLE9BQU07QUFLTjtFQUEzQyxTQUFTLEVBQUUsU0FBUyxNQUFNLE1BQU0sUUFBUSxDQUFDO0dBZC9CLFNBY2lDO0FBR0E7RUFBM0MsU0FBUyxFQUFFLFNBQVMsTUFBTSxNQUFNLFFBQVEsQ0FBQztHQWpCL0IsU0FpQmlDO0FBR0E7RUFBM0MsU0FBUyxFQUFFLFNBQVMsTUFBTSxNQUFNLFFBQVEsQ0FBQztHQXBCL0IsU0FvQmlDO0FBR0E7RUFBM0MsU0FBUyxFQUFFLFNBQVMsTUFBTSxNQUFNLFFBQVEsQ0FBQztHQXZCL0IsU0F1QmlDO0FBR0E7RUFBM0MsU0FBUyxFQUFFLFNBQVMsTUFBTSxNQUFNLFFBQVEsQ0FBQztHQTFCL0IsU0EwQmlDO0FBTzVDO0VBSkMsU0FBUztJQUNSLFdBQVc7SUFDWCxTQUFTO0VBQ1gsQ0FBQztHQWhDVSxTQWlDWDtBQUc0RDtFQUEzRCxTQUFTLEVBQUUsV0FBVyxvQkFBb0IsU0FBUyxLQUFLLENBQUM7R0FwQy9DLFNBb0NpRDtBQUcvQjtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0F2Q2hCLFNBdUNrQjtBQUdBO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQTFDaEIsU0EwQ2tCO0FBSTdCO0VBREMsU0FBUyxFQUFFLFdBQVcsbUJBQW1CLFNBQVMsS0FBSyxDQUFDO0dBN0M5QyxTQThDWDtBQUcyQztFQUExQyxTQUFTLEVBQUUsTUFBTSxRQUFRLFNBQVMsS0FBSyxDQUFDO0dBakQ5QixTQWlEZ0M7QUFTbEI7RUFBeEIsTUFBTSxRQUFRO0dBMURKLFNBMERjO0FBRUk7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBNURoQixTQTREa0I7QUFFYztFQUExQyxzQkFBc0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztHQTlEOUIsU0E4RGdDO0FBc0JuQztFQURQLFNBQVMsQ0FBQyx3QkFBd0IsNEJBQTRCLENBQUM7R0FuRnJELFNBb0ZIO0FBcEZHLFdBQU47RUFETixjQUFjLFdBQVc7R0FDYjsiLAogICJuYW1lcyI6IFsic3R5bGVzIiwgInN0eWxlcyJdCn0K
