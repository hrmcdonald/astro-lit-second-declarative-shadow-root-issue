import "../../chunks/chunk.K7IFCJCW.js";
import "../../chunks/chunk.5AAXKTSO.js";
import "../../chunks/chunk.D4QL7DP6.js";
import {
  MteIconRegistryService
} from "../../chunks/chunk.L7F3KXB6.js";
import {
  CheckboxMixin,
  MteElement,
  PresetMixinFactory,
  SizeMixin,
  SlotObserverMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/switch/switch.element.ts
import { html } from "lit";
import { property, query, queryAssignedElements } from "lit/decorators.js";
import { live } from "lit/directives/live.js";
import { when } from "lit-html/directives/when.js";
import { classMap } from "lit-html/directives/class-map.js";

// src/atomic/switch/switch.styles.ts
import { css } from "lit";
var styles = css`:host{display:inline-block;position:relative;--base-padding:var(--mte-space-xs);--focus-radius:var(--mte-border-radius-xl);--border-radius:var(--mte-border-radius-xl);--transition-duration:80ms;--transition-timing:cubic-bezier(0.4,0,0.2,1);--control-background:rgb(var(--mte-ink-3-rgb));--thumb-background:var(--mte-white);--label-margin:0 var(--mte-space-sm);--label-font-weight:var(--mte-font-set-body1-font-weight);--label-line-height:var(--mte-font-set-body1-line-height);--label-font-size:var(--mte-font-set-body1-font-size)}.base{align-items:center;cursor:pointer;display:inline-flex;padding:var(--base-padding);position:relative;vertical-align:middle}.input{margin:0;opacity:0;padding:0;pointer-events:none;position:absolute}.control{background:var(--control-background);border:1px solid transparent;border-radius:var(--border-radius);box-shadow:inset 0 1px 0 0 rgba(var(--mte-dark-rgb),.16);flex-shrink:0;height:24px;position:relative;transition-property:background-color;transition-timing-function:var(--transition-timing);width:44px}.control,.thumb{transition-duration:var(--transition-duration)}.thumb{align-items:center;background-color:var(--thumb-background);border-radius:50%;box-shadow:0 1px 0 0 rgba(var(--mte-dark-rgb),.16),inset 0 -1px 0 0 rgba(var(--mte-dark-rgb),.16);display:flex;height:18px;justify-content:center;left:3px;position:absolute;top:3px;transform:translateZ(0);transition-property:transform;transition-timing-function:var(--transition-timing);width:18px;z-index:1}.hidden{display:none}.error,.hint,:host ::slotted([slot=error]),:host ::slotted([slot=hint]){margin-left:59px;transform:translateY(calc(var(--mte-space-xs)*-1))}:host .label,:host([size=md]) .label{font-size:var(--label-font-size);font-weight:var(--label-font-weight);line-height:var(--label-line-height);margin:var(--label-margin)}:host([size=sm]) .base{font-size:var(--mte-font-set-body2-font-size);font-weight:var(--mte-font-set-body2-font-weight);line-height:var(--mte-font-set-body2-line-height);padding:0}:host([size=sm]) .control{height:16px;width:28px}:host([size=sm]) .thumb{height:12px;left:2px;top:2px;width:12px}:host([size=sm]) .label{--label-font-size:var(--mte-font-set-body2-font-size)}:host([size=sm]) .error,:host([size=sm]) .hint,:host([size=sm]) ::slotted([slot=error]),:host([size=sm]) ::slotted([slot=hint]){margin-left:38px}:host([checked][size=sm]) .thumb{transform:translate3d(12px,0,0)}:host([checked]) .control{--control-background:rgba(var(--mte-status-success-base-rgb),1)}:host([checked]) .thumb{color:rgba(var(--mte-status-success-base-rgb),1);transform:translate3d(20px,0,0)}:host([loading]:not([disabled])) .control{--control-background:rgb(var(--mte-ink-3-rgb))}:host([readonly]) .base{color:var(--mte-readonly-4);cursor:auto}:host([readonly]) .control{--control-background:var(--mte-readonly-1);border-color:var(--mte-readonly-3);box-shadow:none}:host([readonly]) .thumb{--thumb-background:var(--mte-readonly-4);box-shadow:none;color:var(--mte-readonly-1)}:host([disabled]) .base{color:var(--mte-disabled-4);cursor:not-allowed}:host([disabled]) .control{--control-background:var(--mte-disabled-2);border-color:var(--mte-disabled-2);box-shadow:none}:host([disabled]) .thumb{--thumb-background:var(--mte-disabled-1);box-shadow:none;color:var(--mte-disabled-3)}:host(:focus),:host(:focus-visible){outline:none}:host(:not(.disabled):not([disabled]):not(:disabled)) input:focus-visible+.control:before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--focus-radius);border-bottom-right-radius:var(--focus-radius);border-top-left-radius:var(--focus-radius);border-top-right-radius:var(--focus-radius);bottom:-4px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-4px;pointer-events:none;position:absolute;right:-4px;top:-4px;z-index:9}`;

// src/atomic/switch/switch.element.ts
import { mtrIconCheck, mtrIconCheckBold } from "@mortar/icons";
import { ifDefined } from "lit-html/directives/if-defined.js";
var nextUniqueId = 0;
MteIconRegistryService.registerIcons([mtrIconCheck, mtrIconCheckBold]);
var MteSwitch = class extends CheckboxMixin(
  SizeMixin(
    SlotObserverMixin(
      PresetMixinFactory("MteSwitch")(
        StylePartsMixin(MteElement)
      )
    )
  )
) {
  constructor() {
    super(...arguments);
    this.internalId = nextUniqueId++;
    this.id = `mte-switch--${this.internalId}`;
    this.loading = false;
    this.loadingAriaLabel = "Loading";
    this.name = "";
    this.title = "";
  }
  /** Captures change events and ignores them if the element is loading */
  handleChangeWithLoading() {
    if (!this.loading) {
      this.handleChange();
    }
  }
  /**
   * Prevents label click from emitting beyond the component. This is done since the label
   * will also trigger a click on the checkbox here and we don't want both emitting out.
   */
  handleLabelClick(e) {
    if (e.target !== this.validationTarget) {
      e.stopPropagation();
    }
  }
  render() {
    const hasHint = !!this.hasSlot("hint", this.hint);
    const hasError = !!this.hasSlot("error", this.error);
    const hasErrors = !!(hasError || !!this.errorElements?.length);
    return html`<label part="base" class="base" for="input" @click="${this.handleLabelClick}"><input .checked="${live(this.checked)}" .value="${live(this.value)}" ?disabled="${this.disabled}" ?required="${this.required}" id="input" aria-invalid="${ifDefined(hasErrors ? "true" : null)}" @blur="${this.handleBlur}" @change="${this.handleChangeWithLoading}" @focus="${this.handleFocus}" aria-label="${ifDefined(this.inheritedAttributes.ariaLabel)}" aria-readonly="${this.readonly}" class="input" aria-describedby="${`${hasErrors ? "error" : ""}${hasHint && !hasErrors ? "hint" : ""}`}" role="switch" title="${this.title}" type="checkbox"><div part="control" class="control"><div part="thumb" class="thumb">${when(
      this.checked && !this.loading,
      () => html`<mte-icon class="check" name="${this.size === "sm" ? "check-bold" : "check"}" size="${this.size === "sm" ? "8" : "12"}"></mte-icon>`
    )} ${when(
      this.loading,
      () => html`<mte-spinner class="loading" aria-label="${this.loadingAriaLabel}" indeterminate diameter="${this.size === "sm" ? "8" : "12"}"></mte-spinner>`
    )}</div></div><slot name="label">${when(
      this.label,
      () => html`<mte-label class="label" part="label" ?showRequired="${this.showRequired ?? this.required}">${this.label}</mte-label>`
    )}</slot></label><div id="error"><slot name="error">${when(
      this.error,
      () => html`<mte-error class="error" part="error">${this.error}</mte-error>`
    )}</slot></div><div id="hint"><slot name="hint" class="${classMap({ hidden: hasErrors })}">${when(
      this.hint,
      () => html`<mte-hint class="hint" part="hint">${this.hint}</mte-hint>`
    )}</slot></div>`;
  }
};
MteSwitch.styles = [styles];
__decorateClass([
  property({ reflect: true })
], MteSwitch.prototype, "id", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteSwitch.prototype, "loading", 2);
__decorateClass([
  property({ reflect: false })
], MteSwitch.prototype, "loadingAriaLabel", 2);
__decorateClass([
  property({ reflect: true })
], MteSwitch.prototype, "name", 2);
__decorateClass([
  property()
], MteSwitch.prototype, "title", 2);
__decorateClass([
  query("#input")
], MteSwitch.prototype, "controlElement", 2);
__decorateClass([
  queryAssignedElements({ slot: "error" })
], MteSwitch.prototype, "errorElements", 2);
MteSwitch = __decorateClass([
  defineElement("mte-switch")
], MteSwitch);
export {
  MteSwitch
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zd2l0Y2giLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zd2l0Y2gvc3dpdGNoLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlOy0tYmFzZS1wYWRkaW5nOnZhcigtLW10ZS1zcGFjZS14cyk7LS1mb2N1cy1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteGwpOy0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14bCk7LS10cmFuc2l0aW9uLWR1cmF0aW9uOjgwbXM7LS10cmFuc2l0aW9uLXRpbWluZzpjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpOy0tY29udHJvbC1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtaW5rLTMtcmdiKSk7LS10aHVtYi1iYWNrZ3JvdW5kOnZhcigtLW10ZS13aGl0ZSk7LS1sYWJlbC1tYXJnaW46MCB2YXIoLS1tdGUtc3BhY2Utc20pOy0tbGFiZWwtZm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtd2VpZ2h0KTstLWxhYmVsLWxpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1saW5lLWhlaWdodCk7LS1sYWJlbC1mb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtc2l6ZSl9LmJhc2V7YWxpZ24taXRlbXM6Y2VudGVyO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWZsZXg7cGFkZGluZzp2YXIoLS1iYXNlLXBhZGRpbmcpO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uaW5wdXR7bWFyZ2luOjA7b3BhY2l0eTowO3BhZGRpbmc6MDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlfS5jb250cm9se2JhY2tncm91bmQ6dmFyKC0tY29udHJvbC1iYWNrZ3JvdW5kKTtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym94LXNoYWRvdzppbnNldCAwIDFweCAwIDAgcmdiYSh2YXIoLS1tdGUtZGFyay1yZ2IpLC4xNik7ZmxleC1zaHJpbms6MDtoZWlnaHQ6MjRweDtwb3NpdGlvbjpyZWxhdGl2ZTt0cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3I7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246dmFyKC0tdHJhbnNpdGlvbi10aW1pbmcpO3dpZHRoOjQ0cHh9LmNvbnRyb2wsLnRodW1ie3RyYW5zaXRpb24tZHVyYXRpb246dmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbil9LnRodW1ie2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXRodW1iLWJhY2tncm91bmQpO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCAxcHggMCAwIHJnYmEodmFyKC0tbXRlLWRhcmstcmdiKSwuMTYpLGluc2V0IDAgLTFweCAwIDAgcmdiYSh2YXIoLS1tdGUtZGFyay1yZ2IpLC4xNik7ZGlzcGxheTpmbGV4O2hlaWdodDoxOHB4O2p1c3RpZnktY29udGVudDpjZW50ZXI7bGVmdDozcHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjNweDt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybTt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjp2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7d2lkdGg6MThweDt6LWluZGV4OjF9LmhpZGRlbntkaXNwbGF5Om5vbmV9LmVycm9yLC5oaW50LDpob3N0IDo6c2xvdHRlZChbc2xvdD1lcnJvcl0pLDpob3N0IDo6c2xvdHRlZChbc2xvdD1oaW50XSl7bWFyZ2luLWxlZnQ6NTlweDt0cmFuc2Zvcm06dHJhbnNsYXRlWShjYWxjKHZhcigtLW10ZS1zcGFjZS14cykqLTEpKX06aG9zdCAubGFiZWwsOmhvc3QoW3NpemU9bWRdKSAubGFiZWx7Zm9udC1zaXplOnZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLWxhYmVsLWxpbmUtaGVpZ2h0KTttYXJnaW46dmFyKC0tbGFiZWwtbWFyZ2luKX06aG9zdChbc2l6ZT1zbV0pIC5iYXNle2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1saW5lLWhlaWdodCk7cGFkZGluZzowfTpob3N0KFtzaXplPXNtXSkgLmNvbnRyb2x7aGVpZ2h0OjE2cHg7d2lkdGg6MjhweH06aG9zdChbc2l6ZT1zbV0pIC50aHVtYntoZWlnaHQ6MTJweDtsZWZ0OjJweDt0b3A6MnB4O3dpZHRoOjEycHh9Omhvc3QoW3NpemU9c21dKSAubGFiZWx7LS1sYWJlbC1mb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWZvbnQtc2l6ZSl9Omhvc3QoW3NpemU9c21dKSAuZXJyb3IsOmhvc3QoW3NpemU9c21dKSAuaGludCw6aG9zdChbc2l6ZT1zbV0pIDo6c2xvdHRlZChbc2xvdD1lcnJvcl0pLDpob3N0KFtzaXplPXNtXSkgOjpzbG90dGVkKFtzbG90PWhpbnRdKXttYXJnaW4tbGVmdDozOHB4fTpob3N0KFtjaGVja2VkXVtzaXplPXNtXSkgLnRodW1ie3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMnB4LDAsMCl9Omhvc3QoW2NoZWNrZWRdKSAuY29udHJvbHstLWNvbnRyb2wtYmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1iYXNlLXJnYiksMSl9Omhvc3QoW2NoZWNrZWRdKSAudGh1bWJ7Y29sb3I6cmdiYSh2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtYmFzZS1yZ2IpLDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMHB4LDAsMCl9Omhvc3QoW2xvYWRpbmddOm5vdChbZGlzYWJsZWRdKSkgLmNvbnRyb2x7LS1jb250cm9sLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1pbmstMy1yZ2IpKX06aG9zdChbcmVhZG9ubHldKSAuYmFzZXtjb2xvcjp2YXIoLS1tdGUtcmVhZG9ubHktNCk7Y3Vyc29yOmF1dG99Omhvc3QoW3JlYWRvbmx5XSkgLmNvbnRyb2x7LS1jb250cm9sLWJhY2tncm91bmQ6dmFyKC0tbXRlLXJlYWRvbmx5LTEpO2JvcmRlci1jb2xvcjp2YXIoLS1tdGUtcmVhZG9ubHktMyk7Ym94LXNoYWRvdzpub25lfTpob3N0KFtyZWFkb25seV0pIC50aHVtYnstLXRodW1iLWJhY2tncm91bmQ6dmFyKC0tbXRlLXJlYWRvbmx5LTQpO2JveC1zaGFkb3c6bm9uZTtjb2xvcjp2YXIoLS1tdGUtcmVhZG9ubHktMSl9Omhvc3QoW2Rpc2FibGVkXSkgLmJhc2V7Y29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTQpO2N1cnNvcjpub3QtYWxsb3dlZH06aG9zdChbZGlzYWJsZWRdKSAuY29udHJvbHstLWNvbnRyb2wtYmFja2dyb3VuZDp2YXIoLS1tdGUtZGlzYWJsZWQtMik7Ym9yZGVyLWNvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC0yKTtib3gtc2hhZG93Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSkgLnRodW1iey0tdGh1bWItYmFja2dyb3VuZDp2YXIoLS1tdGUtZGlzYWJsZWQtMSk7Ym94LXNoYWRvdzpub25lO2NvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC0zKX06aG9zdCg6Zm9jdXMpLDpob3N0KDpmb2N1cy12aXNpYmxlKXtvdXRsaW5lOm5vbmV9Omhvc3QoOm5vdCguZGlzYWJsZWQpOm5vdChbZGlzYWJsZWRdKTpub3QoOmRpc2FibGVkKSkgaW5wdXQ6Zm9jdXMtdmlzaWJsZSsuY29udHJvbDpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCByZ2IodmFyKC0tbXRlLWZvY3VzLXJnYikpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tZm9jdXMtcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1mb2N1cy1yYWRpdXMpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tZm9jdXMtcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1mb2N1cy1yYWRpdXMpO2JvdHRvbTotNHB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDotNHB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTRweDt0b3A6LTRweDt6LWluZGV4Ojl9YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLFlBQVk7QUFDckIsU0FBUyxVQUFVLE9BQU8sNkJBQTZCO0FBQ3ZELFNBQVMsWUFBWTtBQWFyQixTQUFTLFlBQVk7QUFDckIsU0FBUyxnQkFBZ0I7OztBQ2hCekIsU0FBUyxXQUFXO0FBQWEsSUFBTSxTQUFTOzs7QURtQmhELFNBQVMsY0FBYyx3QkFBd0I7QUFDL0MsU0FBUyxpQkFBaUI7QUFNMUIsSUFBSSxlQUFlO0FBRW5CLHVCQUF1QixjQUFjLENBQUMsY0FBYyxnQkFBZ0IsQ0FBQztBQXFDOUQsSUFBTSxZQUFOLGNBQXdCO0VBQzdCO0lBQ0U7TUFDRSxtQkFBaUMsV0FBVztRQUMxQyxnQkFBbUQsVUFBVTtNQUMvRDtJQUNGO0VBQ0Y7QUFDRixFQUFFO0VBUks7O0FBV0wsU0FBUSxhQUFhO0FBR1EsY0FBSyxlQUFlLEtBQUssVUFBVTtBQUdwQixtQkFBVTtBQUd4Qiw0QkFBbUI7QUFHcEIsZ0JBQU87QUFHeEIsaUJBQVE7OztFQVNaLDBCQUEwQjtBQUNoQyxRQUFJLENBQUMsS0FBSyxTQUFTO0FBQ2pCLFdBQUssYUFBYTtJQUNwQjtFQUNGOzs7OztFQU1RLGlCQUFpQixHQUFpQjtBQUN4QyxRQUFJLEVBQUUsV0FBVyxLQUFLLGtCQUFrQjtBQUN0QyxRQUFFLGdCQUFnQjtJQUNwQjtFQUNGO0VBRUEsU0FBUztBQUNQLFVBQU0sVUFBVSxDQUFDLENBQUMsS0FBSyxRQUFRLFFBQVEsS0FBSyxJQUFJO0FBQ2hELFVBQU0sV0FBVyxDQUFDLENBQUMsS0FBSyxRQUFRLFNBQVMsS0FBSyxLQUFLO0FBQ25ELFVBQU0sWUFBWSxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsS0FBSyxlQUFlO0FBRXZELFdBQU8sMkRBQ2dELEtBQUssZ0JBQWdCLHNCQUUzRCxLQUFLLEtBQUssT0FBTyxDQUFDLGFBQ3BCLEtBQUssS0FBSyxLQUFLLENBQUMsZ0JBQ2IsS0FBSyxRQUFRLGdCQUNiLEtBQUssUUFBUSw4QkFFVixVQUFVLFlBQVksU0FBUyxJQUFJLENBQUMsWUFDM0MsS0FBSyxVQUFVLGNBQ2IsS0FBSyx1QkFBdUIsYUFDN0IsS0FBSyxXQUFXLGlCQUNaLFVBQVUsS0FBSyxvQkFBb0IsU0FBUyxDQUFDLG9CQUMxQyxLQUFLLFFBQVEscUNBRVYsR0FBRyxZQUFZLFVBQVUsRUFBRSxHQUFHLFdBQVcsQ0FBQyxZQUFZLFNBQVMsRUFBRSxFQUFFLDBCQUU5RSxLQUFLLEtBQUsseUZBS2Q7TUFDQSxLQUFLLFdBQVcsQ0FBQyxLQUFLO01BQ3RCLE1BQ0UscUNBRVMsS0FBSyxTQUFTLE9BQU8sZUFBZSxPQUFPLFdBQzNDLEtBQUssU0FBUyxPQUFPLE1BQU0sSUFBSTtJQUM1QyxDQUFDLElBQ0M7TUFDQSxLQUFLO01BQ0wsTUFDRSxnREFFZSxLQUFLLGdCQUFnQiw2QkFFdkIsS0FBSyxTQUFTLE9BQU8sTUFBTSxJQUFJO0lBQ2hELENBQUMsa0NBSUE7TUFDRCxLQUFLO01BQ0wsTUFDRSw0REFHa0IsS0FBSyxnQkFBZ0IsS0FBSyxRQUFRLEtBQy9DLEtBQUssS0FBSztJQUVuQixDQUFDLHFEQUtDO01BQ0EsS0FBSztNQUNMLE1BQU0sNkNBQTZDLEtBQUssS0FBSztJQUMvRCxDQUFDLHdEQUl1QixTQUFTLEVBQUUsUUFBUSxVQUFVLENBQUMsQ0FBQyxLQUNwRDtNQUNELEtBQUs7TUFDTCxNQUFNLDBDQUEwQyxLQUFLLElBQUk7SUFDM0QsQ0FBQztFQUlUO0FBQ0Y7QUFoSWEsVUFTSixTQUFTLENBQUMsTUFBTTtBQUtNO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQWRoQixVQWNrQjtBQUdlO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FqQi9CLFVBaUJpQztBQUdkO0VBQTdCLFNBQVMsRUFBRSxTQUFTLE1BQU0sQ0FBQztHQXBCakIsVUFvQm1CO0FBR0Q7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBdkJoQixVQXVCa0I7QUFHakI7RUFBWCxTQUFTO0dBMUJDLFVBMEJDO0FBR1k7RUFBdkIsTUFBTSxRQUFRO0dBN0JKLFVBNkJhO0FBR2tCO0VBQXpDLHNCQUFzQixFQUFFLE1BQU0sUUFBUSxDQUFDO0dBaEM3QixVQWdDK0I7QUFoQy9CLFlBQU47RUFETixjQUFjLFlBQVk7R0FDZDsiLAogICJuYW1lcyI6IFtdCn0K
