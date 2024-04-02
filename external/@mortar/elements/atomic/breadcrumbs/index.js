import "../../chunks/chunk.WORXKSBS.js";
import "../../chunks/chunk.HBUKDWVJ.js";
import "../../chunks/chunk.4XRLQ45E.js";
import {
  MteText
} from "../../chunks/chunk.AGXDFGNI.js";
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
  ButtonMixin,
  MteElement,
  PresetMixinFactory,
  RadiusMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  presetProperty,
  styles3 as styles,
  styles7 as styles2
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/breadcrumbs/breadcrumbs.element.ts
import { html } from "lit";
import { queryAssignedElements } from "lit/decorators.js";

// src/atomic/breadcrumbs/breadcrumbs.styles.ts
import { css } from "lit";
var styles3 = css`:host{display:block}ol{align-items:center;display:flex;margin:0;padding:0}`;

// src/atomic/breadcrumbs/breadcrumbs.element.ts
var MteBreadcrumbs = class extends MteElement {
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.handleSlotChange();
  }
  handleSlotChange() {
    this.breadcrumbs.forEach((breadcrumb, i) => {
      if (i === this.breadcrumbs.length - 1) {
        breadcrumb.ariaCurrent = "page";
      } else if (breadcrumb.ariaCurrent === "page") {
        breadcrumb.ariaCurrent = "false";
      }
    });
  }
  render() {
    return html`${this.instanceStyles}<nav><ol><slot @slotchange="${this.handleSlotChange}"></slot></ol></nav>`;
  }
};
MteBreadcrumbs.styles = [styles2, styles3];
__decorateClass([
  queryAssignedElements()
], MteBreadcrumbs.prototype, "breadcrumbs", 2);
MteBreadcrumbs = __decorateClass([
  defineElement("mte-breadcrumbs")
], MteBreadcrumbs);

// src/atomic/breadcrumbs/breadcrumb-item.element.ts
import { html as html2 } from "lit";
import { property } from "lit/decorators.js";

// src/atomic/breadcrumbs/breadcrumb-item.styles.ts
import { css as css2 } from "lit";
var styles4 = css2`:host{--background:transparent;--border-radius:var(--mte-border-radius-md);--color:var(--mte-ink-2);align-items:center;border-radius:var(--border-radius);display:inline-flex;font-size:.9rem;line-height:1;outline:none;position:relative;text-decoration:underline;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}:host(:focus-visible:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);bottom:-1px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-1px;pointer-events:none;position:absolute;right:-1px;top:-1px;z-index:9}:host(:not([withoutSeparator]):not(:last-of-type):focus-visible:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);bottom:-1px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-1px;pointer-events:none;position:absolute;right:21px;top:-1px;z-index:9}.link-container{align-items:center;background:var(--background);border-radius:var(--border-radius);cursor:pointer;display:flex;padding:4px 6px;white-space:nowrap;width:100%}:host .anchor:visited{--color:var(--mte-ink-2)}.separator{color:var(--color);padding:0 var(--mte-space-xs)}:host ::slotted([slot=prefix]){padding-right:var(--mte-space-xs)}:host([withoutUnderline]){text-decoration:none}:host([withoutUnderline]) .link-container:hover,:host([withoutUnderline]:focus){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));text-decoration:none}:host(:hover),:host(:last-of-type){--color:var(--mte-ink-1);text-decoration:none}:host(:last-of-type) mte-icon,:host([withoutSeparator]) mte-icon{display:none}`;

// src/atomic/breadcrumbs/breadcrumb-item.element.ts
import { mtrIconChevronRight } from "@mortar/icons";
MteIconRegistryService.registerIcons([mtrIconChevronRight]);
var MteBreadcrumbItem = class extends RadiusMixin(
  ButtonMixin(
    PresetMixinFactory("MteBreadcrumbItem")(
      StylePartsMixin(MteText)
    )
  )
) {
  constructor() {
    super(...arguments);
    this.withoutSeparator = false;
    this.role = "listitem";
    this.withoutUnderline = false;
  }
  render() {
    const anchor = this.renderButtonTemplate(
      html2`<slot name="prefix" part="prefix"></slot><slot></slot>`
    );
    return html2`<span class="link-container">${anchor}</span><mte-icon class="separator" part="separator" size="16" aria-hidden="true" name="chevron-right"></mte-icon>`;
  }
};
MteBreadcrumbItem.styles = [...MteText.styles, styles, styles4];
__decorateClass([
  property({ reflect: true, attribute: "aria-current" })
], MteBreadcrumbItem.prototype, "ariaCurrent", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteBreadcrumbItem.prototype, "withoutSeparator", 2);
__decorateClass([
  property({ reflect: true })
], MteBreadcrumbItem.prototype, "role", 2);
__decorateClass([
  presetProperty({ type: Boolean, reflect: true })
], MteBreadcrumbItem.prototype, "withoutUnderline", 2);
MteBreadcrumbItem = __decorateClass([
  defineElement("mte-breadcrumb-item")
], MteBreadcrumbItem);

// src/atomic/breadcrumbs/breadcrumb-overflow.element.ts
import { html as html3 } from "lit";
import { property as property2, query, queryAssignedElements as queryAssignedElements2 } from "lit/decorators.js";

// src/atomic/breadcrumbs/breadcrumb-overflow.styles.ts
import { css as css3 } from "lit";
var styles5 = css3`:host{--border-radius:var(--mte-border-radius-md);--color:var(--mte-ink-2);align-items:center;display:inline-flex;position:relative}mte-popover{--padding-y:var(--mte-space-md)}button:focus-visible:not(.disabled):not([disabled]):not(:disabled):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);bottom:-1px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-1px;pointer-events:none;position:absolute;right:19px;top:-1px;z-index:9}:host button{align-items:center;background-color:inherit;border:0;border-radius:var(--border-radius);cursor:pointer;display:flex;outline:none;padding:0 4px}:host button:focus,:host button:hover{background-color:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a))}:host button:active{background-color:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a))}:host mte-icon{color:var(--color)}:host>mte-icon{padding-left:6px}.overflow-item-list{display:flex;flex-direction:column;gap:var(--mte-space-sm);margin:0;padding:0}:host ::slotted(mte-breadcrumb-item){--color:var(--mte-ink-2);text-decoration:underline}:host ::slotted(mte-breadcrumb-item:hover){--color:var(--mte-ink-1);text-decoration:none}`;

// src/atomic/breadcrumbs/breadcrumb-overflow.element.ts
import { mtrIconDotsHorizontal } from "@mortar/icons";
MteIconRegistryService.registerIcons([mtrIconDotsHorizontal]);
var MteBreadcrumbOverflow = class extends MteElement {
  constructor() {
    super(...arguments);
    this.role = "listitem";
  }
  handleSlotChange() {
    this.breadcrumbs.forEach((breadcrumb) => {
      breadcrumb.withoutSeparator = true;
    });
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    if (this.overlayTriggerElem) {
      this.overlayTriggerElem.overlayElement = this.popoverElem;
      this.overlayTriggerElem.triggerElement = this.triggerElem;
    }
  }
  render() {
    return html3`${this.instanceStyles}<mte-overlay-trigger id="overlay-trigger"></mte-overlay-trigger><button aria-label="overflow dialog" id="trigger"><mte-icon name="dots-horizontal"></mte-icon></button><mte-popover id="popover" aria-labelledby="trigger" withoutPortal position="bottom" @onClose="${() => this.triggerElem.focus()}"><ul class="overflow-item-list"><slot @slotchange="${this.handleSlotChange}"></slot></ul></mte-popover><mte-icon size="14" name="chevron-right"></mte-icon>`;
  }
};
MteBreadcrumbOverflow.shadowRootOptions = { ...MteElement.shadowRootOptions, delegatesFocus: true };
MteBreadcrumbOverflow.styles = [styles2, styles5];
__decorateClass([
  property2({ reflect: true })
], MteBreadcrumbOverflow.prototype, "role", 2);
__decorateClass([
  query("#trigger")
], MteBreadcrumbOverflow.prototype, "triggerElem", 2);
__decorateClass([
  query("#overlay-trigger")
], MteBreadcrumbOverflow.prototype, "overlayTriggerElem", 2);
__decorateClass([
  query("#popover")
], MteBreadcrumbOverflow.prototype, "popoverElem", 2);
__decorateClass([
  queryAssignedElements2()
], MteBreadcrumbOverflow.prototype, "breadcrumbs", 2);
MteBreadcrumbOverflow = __decorateClass([
  defineElement("mte-breadcrumb-overflow")
], MteBreadcrumbOverflow);
export {
  MteBreadcrumbItem,
  MteBreadcrumbOverflow,
  MteBreadcrumbs
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9icmVhZGNydW1icyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2JyZWFkY3J1bWJzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi1pdGVtLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2JyZWFkY3J1bWJzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi1vdmVyZmxvdy5zdHlsZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtkaXNwbGF5OmJsb2NrfW9se2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7bWFyZ2luOjA7cGFkZGluZzowfWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLW1kKTstLWNvbG9yOnZhcigtLW10ZS1pbmstMik7YWxpZ24taXRlbXM6Y2VudGVyO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7ZGlzcGxheTppbmxpbmUtZmxleDtmb250LXNpemU6LjlyZW07bGluZS1oZWlnaHQ6MTtvdXRsaW5lOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7d2hpdGUtc3BhY2U6bm93cmFwfTpob3N0KDpmb2N1cy12aXNpYmxlOm5vdCguZGlzYWJsZWQpOm5vdChbZGlzYWJsZWRdKTpub3QoOmRpc2FibGVkKSk6YmVmb3Jle2JvcmRlcjoycHggc29saWQgcmdiKHZhcigtLW10ZS1mb2N1cy1yZ2IpKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym90dG9tOi0xcHg7Ym94LXNoYWRvdzowIDAgMCAxcHggdmFyKC0tbXRlLWxpZ2h0KTtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jaztsZWZ0Oi0xcHg7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDotMXB4O3RvcDotMXB4O3otaW5kZXg6OX06aG9zdCg6bm90KFt3aXRob3V0U2VwYXJhdG9yXSk6bm90KDpsYXN0LW9mLXR5cGUpOmZvY3VzLXZpc2libGU6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpKTpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCByZ2IodmFyKC0tbXRlLWZvY3VzLXJnYikpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3R0b206LTFweDtib3gtc2hhZG93OjAgMCAwIDFweCB2YXIoLS1tdGUtbGlnaHQpO2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO2xlZnQ6LTFweDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjIxcHg7dG9wOi0xcHg7ei1pbmRleDo5fS5saW5rLWNvbnRhaW5lcnthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6ZmxleDtwYWRkaW5nOjRweCA2cHg7d2hpdGUtc3BhY2U6bm93cmFwO3dpZHRoOjEwMCV9Omhvc3QgLmFuY2hvcjp2aXNpdGVkey0tY29sb3I6dmFyKC0tbXRlLWluay0yKX0uc2VwYXJhdG9ye2NvbG9yOnZhcigtLWNvbG9yKTtwYWRkaW5nOjAgdmFyKC0tbXRlLXNwYWNlLXhzKX06aG9zdCA6OnNsb3R0ZWQoW3Nsb3Q9cHJlZml4XSl7cGFkZGluZy1yaWdodDp2YXIoLS1tdGUtc3BhY2UteHMpfTpob3N0KFt3aXRob3V0VW5kZXJsaW5lXSl7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Omhvc3QoW3dpdGhvdXRVbmRlcmxpbmVdKSAubGluay1jb250YWluZXI6aG92ZXIsOmhvc3QoW3dpdGhvdXRVbmRlcmxpbmVdOmZvY3VzKXstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hKSk7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Omhvc3QoOmhvdmVyKSw6aG9zdCg6bGFzdC1vZi10eXBlKXstLWNvbG9yOnZhcigtLW10ZS1pbmstMSk7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Omhvc3QoOmxhc3Qtb2YtdHlwZSkgbXRlLWljb24sOmhvc3QoW3dpdGhvdXRTZXBhcmF0b3JdKSBtdGUtaWNvbntkaXNwbGF5Om5vbmV9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCk7LS1jb2xvcjp2YXIoLS1tdGUtaW5rLTIpO2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlfW10ZS1wb3BvdmVyey0tcGFkZGluZy15OnZhcigtLW10ZS1zcGFjZS1tZCl9YnV0dG9uOmZvY3VzLXZpc2libGU6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvdHRvbTotMXB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDotMXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MTlweDt0b3A6LTFweDt6LWluZGV4Ojl9Omhvc3QgYnV0dG9ue2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXg7b3V0bGluZTpub25lO3BhZGRpbmc6MCA0cHh9Omhvc3QgYnV0dG9uOmZvY3VzLDpob3N0IGJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYSkpfTpob3N0IGJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYSkpfTpob3N0IG10ZS1pY29ue2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdD5tdGUtaWNvbntwYWRkaW5nLWxlZnQ6NnB4fS5vdmVyZmxvdy1pdGVtLWxpc3R7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6dmFyKC0tbXRlLXNwYWNlLXNtKTttYXJnaW46MDtwYWRkaW5nOjB9Omhvc3QgOjpzbG90dGVkKG10ZS1icmVhZGNydW1iLWl0ZW0pey0tY29sb3I6dmFyKC0tbXRlLWluay0yKTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfTpob3N0IDo6c2xvdHRlZChtdGUtYnJlYWRjcnVtYi1pdGVtOmhvdmVyKXstLWNvbG9yOnZhcigtLW10ZS1pbmstMSk7dGV4dC1kZWNvcmF0aW9uOm5vbmV9YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsNkJBQTZCOzs7QUNEdEMsU0FBUyxXQUFXO0FBQWEsSUFBTUEsVUFBUzs7O0FEYXpDLElBQU0saUJBQU4sY0FBNkIsV0FBVztFQUs3QyxhQUFhLG1CQUFtQjtBQUM5QixVQUFNLGFBQWEsaUJBQWlCO0FBRXBDLFNBQUssaUJBQWlCO0VBQ3hCO0VBRUEsbUJBQW1CO0FBQ2pCLFNBQUssWUFBWSxRQUFRLENBQUMsWUFBWSxNQUFNO0FBQzFDLFVBQUksTUFBTSxLQUFLLFlBQVksU0FBUyxHQUFHO0FBQ3JDLG1CQUFXLGNBQWM7TUFDM0IsV0FBVyxXQUFXLGdCQUFnQixRQUFRO0FBQzVDLG1CQUFXLGNBQWM7TUFDM0I7SUFDRixDQUFDO0VBQ0g7RUFFQSxTQUFTO0FBQ1AsV0FBTyxPQUFPLEtBQUssY0FBYywrQkFHUCxLQUFLLGdCQUFnQjtFQUdqRDtBQUNGO0FBN0JhLGVBQ0osU0FBUyxDQUFDQyxTQUFZQSxPQUFNO0FBRVY7RUFBeEIsc0JBQXNCO0dBSFosZUFHYztBQUhkLGlCQUFOO0VBRE4sY0FBYyxpQkFBaUI7R0FDbkI7OztBRWJiLFNBQVMsUUFBQUMsYUFBWTtBQUNyQixTQUFTLGdCQUFnQjs7O0FDRHpCLFNBQVMsT0FBQUMsWUFBVztBQUFhLElBQU1DLFVBQVNEOzs7QURrQmhELFNBQVMsMkJBQTJCO0FBRXBDLHVCQUF1QixjQUFjLENBQUMsbUJBQW1CLENBQUM7QUFvQm5ELElBQU0sb0JBQU4sY0FBZ0M7RUFDckM7SUFDRSxtQkFBeUMsbUJBQW1CO01BQzFELGdCQUF3RCxPQUFPO0lBQ2pFO0VBQ0Y7QUFDRixFQUFFO0VBTks7O0FBYXVDLDRCQUFtQjtBQUdsQyxnQkFBbUI7QUFHRSw0QkFBbUI7O0VBRXJFLFNBQVM7QUFDUCxVQUFNLFNBQVMsS0FBSztNQUNsQkU7SUFDRjtBQUVBLFdBQU9BLHFDQUMwQixNQUFNO0VBU3pDO0FBQ0Y7QUFyQ2Esa0JBT0osU0FBUyxDQUFDLEdBQUcsUUFBUSxRQUFRLFFBQWNDLE9BQU07QUFHQTtFQUF2RCxTQUFTLEVBQUUsU0FBUyxNQUFNLFdBQVcsZUFBZSxDQUFDO0dBVjNDLGtCQVU2QztBQUdaO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FiL0Isa0JBYWlDO0FBR2Y7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBaEJoQixrQkFnQmtCO0FBR3FCO0VBQWpELGVBQWUsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FuQnJDLGtCQW1CdUM7QUFuQnZDLG9CQUFOO0VBRE4sY0FBYyxxQkFBcUI7R0FDdkI7OztBRXhDYixTQUEyQixRQUFBQyxhQUFZO0FBQ3ZDLFNBQVMsWUFBQUMsV0FBVSxPQUFPLHlCQUFBQyw4QkFBNkI7OztBQ0R2RCxTQUFTLE9BQUFDLFlBQVc7QUFBYSxJQUFNQyxVQUFTRDs7O0FET2hELFNBQVMsNkJBQTZCO0FBS3RDLHVCQUF1QixjQUFjLENBQUMscUJBQXFCLENBQUM7QUFVckQsSUFBTSx3QkFBTixjQUFvQyxXQUFXO0VBQS9DOztBQU13QixnQkFBbUI7O0VBVWhELG1CQUFtQjtBQUNqQixTQUFLLFlBQVksUUFBUSxDQUFDLGVBQWU7QUFDdkMsaUJBQVcsbUJBQW1CO0lBQ2hDLENBQUM7RUFDSDtFQUVVLGFBQ1IsbUJBQ007QUFDTixVQUFNLGFBQWEsaUJBQWlCO0FBQ3BDLFFBQUksS0FBSyxvQkFBb0I7QUFDM0IsV0FBSyxtQkFBbUIsaUJBQWlCLEtBQUs7QUFDOUMsV0FBSyxtQkFBbUIsaUJBQWlCLEtBQUs7SUFDaEQ7RUFDRjtFQUVBLFNBQVM7QUFDUCxXQUFPRSxRQUFPLEtBQUssY0FBYyx3UUFVbEIsTUFBTSxLQUFLLFlBQVksTUFBTSxDQUFDLHVEQUVuQixLQUFLLGdCQUFnQjtFQUlqRDtBQUNGO0FBbERhLHNCQUNKLG9CQUFvQixFQUFFLEdBQUcsV0FBVyxtQkFBbUIsZ0JBQWdCLEtBQUs7QUFEeEUsc0JBR0osU0FBUyxDQUFDQyxTQUFZQSxPQUFNO0FBR047RUFBNUJDLFVBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQU5oQixzQkFNa0I7QUFFVjtFQUFsQixNQUFNLFVBQVU7R0FSTixzQkFRUTtBQUVRO0VBQTFCLE1BQU0sa0JBQWtCO0dBVmQsc0JBVWdCO0FBRVI7RUFBbEIsTUFBTSxVQUFVO0dBWk4sc0JBWVE7QUFFTTtFQUF4QkMsdUJBQXNCO0dBZFosc0JBY2M7QUFkZCx3QkFBTjtFQUROLGNBQWMseUJBQXlCO0dBQzNCOyIsCiAgIm5hbWVzIjogWyJzdHlsZXMiLCAic3R5bGVzIiwgImh0bWwiLCAiY3NzIiwgInN0eWxlcyIsICJodG1sIiwgInN0eWxlcyIsICJodG1sIiwgInByb3BlcnR5IiwgInF1ZXJ5QXNzaWduZWRFbGVtZW50cyIsICJjc3MiLCAic3R5bGVzIiwgImh0bWwiLCAic3R5bGVzIiwgInByb3BlcnR5IiwgInF1ZXJ5QXNzaWduZWRFbGVtZW50cyJdCn0K
