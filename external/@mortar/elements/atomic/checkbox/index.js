import "../../chunks/chunk.K7IFCJCW.js";
import "../../chunks/chunk.D4QL7DP6.js";
import {
  MteIconRegistryService
} from "../../chunks/chunk.L7F3KXB6.js";
import {
  CheckboxMixin,
  CoreColorMixin,
  MteElement,
  PresetMixinFactory,
  SizeMixin,
  SlotObserverMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  styles7 as styles
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/checkbox/checkbox.element.ts
import { html } from "lit";
import { property, query } from "lit/decorators.js";
import { live } from "lit/directives/live.js";
import { mtrIconCheck } from "@mortar/icons";

// src/atomic/checkbox/checkbox.styles.ts
import { css } from "lit";
var styles2 = css`:host{--label-gap:var(--mte-space-xs);--border-color:var(--mte-border-3);--border-hover-color:rgb(var(--mte-core-primary-base-rgb));--border-radius:var(--mte-border-radius-sm);--focus-radius:var(--mte-border-radius-md);--accent-color:rgb(var(--mte-core-primary-base-rgb));--check-color:rgb(var(--mte-core-primary-base-c-rgb));--label-font-size:var(--mte-font-set-body1-font-size);--label-font-weight:var(--mte-font-set-body1-font-weight);--label-line-height:var(--mte-font-set-body1-line-height);display:inline-block}.container{align-items:center;display:inline-flex;gap:var(--label-gap)}.container.has-content{margin-right:calc(var(--label-gap)*2)}.checkbox{display:flex}.checkbox,.input{position:relative}.input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid var(--border-color);border-radius:var(--border-radius);height:16px;margin:4px;width:16px}:host([checked]) .input,:host([disabled]) .input,:host([indeterminate]) .input{background-color:var(--accent-color);border-color:var(--accent-color)}:host([checked]) .input:after,:host([indeterminate]) .input:after{background:var(--check-color);content:"";position:absolute}:host(:not([disabled]):not([checked]):not([indeterminate]):not([readOnly]):hover) .input{border-color:var(--border-hover-color)}:host([size=sm]) .input{height:14px;width:14px}.label{font-size:var(--label-font-size);font-weight:var(--label-font-weight);line-height:var(--label-line-height)}:host([size=sm]) .label{--label-font-size:var(--mte-font-set-body2-font-size);--label-font-weight:var(--mte-font-set-body2-font-weight);--label-line-height:var(--mte-font-set-body2-line-height)}.check{display:none}:host([checked]:not([indeterminate])) .check{color:var(--check-color);display:inline;left:var(--mte-space-xs);position:absolute;top:var(--mte-space-xs)}:host([indeterminate]) .input:after{border-radius:var(--mte-border-radius-sm);inset:6px 3px}.error,.hint,:host ::slotted([slot=error]),:host ::slotted([slot=hint]){margin-left:28px;transform:translateY(calc(var(--mte-space-xs)*-1))}:host([size=sm]) .hint :host([size=sm]) .error,:host([size=sm]) ::slotted([slot=error]),:host([size=sm]) ::slotted([slot=hint]){margin-left:26px}.error,.hint,:host ::slotted(mte-error),:host ::slotted(mte-hint){width:auto}:host([color=primary]){--accent-color:rgb(var(--mte-core-primary-base-rgb));--border-hover-color:rgb(var(--mte-core-primary-base-rgb));--check-color:rgb(var(--mte-core-primary-base-c-rgb))}:host([color=secondary]){--accent-color:rgb(var(--mte-core-secondary-base-rgb));--border-hover-color:rgb(var(--mte-core-secondary-base-rgb));--check-color:rgb(var(--mte-core-secondary-base-c-rgb))}:host([color=tertiary]){--accent-color:rgb(var(--mte-core-tertiary-base-rgb));--border-hover-color:rgb(var(--mte-core-tertiary-base-rgb));--check-color:rgb(var(--mte-core-tertiary-base-c-rgb))}:host([color=danger]){--accent-color:rgb(var(--mte-core-danger-base-rgb));--border-hover-color:rgb(var(--mte-core-danger-base-rgb));--check-color:rgb(var(--mte-core-danger-base-c-rgb))}:host .input:focus,:host .input:focus-visible{outline:none}.input:focus-visible:not(.disabled):not([disabled]):not(:disabled):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--focus-radius);border-bottom-right-radius:var(--focus-radius);border-top-left-radius:var(--focus-radius);border-top-right-radius:var(--focus-radius);bottom:-5px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-5px;pointer-events:none;position:absolute;right:-5px;top:-5px;z-index:9}:host([readonly]){--accent-color:var(--mte-readonly-4);--border-color:var(--mte-readonly-3);--check-color:var(--mte-readonly-1);color:var(--mte-readonly-4);cursor:default}:host(:not([readonly])) .container,:host(:not([readonly])) .input{cursor:pointer}:host([disabled]){--accent-color:var(--mte-disabled-1);--check-color:var(--mte-disabled-3)}:host([disabled]) .container,:host([disabled]) .input{color:var(--mte-disabled-4);cursor:not-allowed}.hidden{display:none}`;

// src/atomic/checkbox/checkbox.element.ts
import { when } from "lit-html/directives/when.js";
import { queryAssignedElements } from "lit/decorators.js";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
MteIconRegistryService.registerIcons([mtrIconCheck]);
var nextUniqueId = 0;
var MteCheckbox = class extends CoreColorMixin(
  CheckboxMixin(
    SizeMixin(
      SlotObserverMixin(
        PresetMixinFactory("MteCheckbox")(
          StylePartsMixin(MteElement)
        )
      )
    )
  )
) {
  constructor() {
    super(...arguments);
    this.internalId = nextUniqueId++;
    this.id = `mte-checkbox--${this.internalId}`;
    this.indeterminate = false;
    this.name = "";
    this.title = "";
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
    const hasLabel = !!this.hasSlot("label", this.label);
    const hasHint = !!this.hasSlot("hint", this.hint);
    const hasError = !!this.hasSlot("error", this.error);
    const hasErrors = !!(hasError || !!this.errorElements?.length);
    return html`${this.instanceStyles} <label @click="${this.handleLabelClick}" class="container ${classMap({
      "has-content": hasLabel || hasHint || hasError
    })}" for="input"><span class="checkbox"><input .checked="${live(this.checked)}" .indeterminate="${live(this.indeterminate)}" .value="${live(this.value)}" aria-invalid="${ifDefined(hasErrors ? "true" : null)}" ?disabled="${this.disabled}" ?required="${this.required}" @blur="${this.handleBlur}" @change="${this.handleChange}" @focus="${this.handleFocus}" class="input" aria-describedby="${`${hasErrors ? "error" : ""}${hasHint && !hasErrors ? "hint" : ""}`}" aria-label="${ifDefined(this.inheritedAttributes.ariaLabel)}" aria-readonly="${this.readonly}" id="input" part="input" title="${this.title}" type="checkbox"><mte-icon class="check" size="${this.size === "sm" ? "14" : "16"}" name="check"></mte-icon></span><slot name="label">${when(
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
MteCheckbox.styles = [styles, styles2];
__decorateClass([
  property({ reflect: true })
], MteCheckbox.prototype, "id", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteCheckbox.prototype, "indeterminate", 2);
__decorateClass([
  property({ reflect: true })
], MteCheckbox.prototype, "name", 2);
__decorateClass([
  property()
], MteCheckbox.prototype, "title", 2);
__decorateClass([
  query("#input")
], MteCheckbox.prototype, "controlElement", 2);
__decorateClass([
  queryAssignedElements({ slot: "error" })
], MteCheckbox.prototype, "errorElements", 2);
MteCheckbox = __decorateClass([
  defineElement("mte-checkbox")
], MteCheckbox);
export {
  MteCheckbox
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jaGVja2JveCIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2NoZWNrYm94L2NoZWNrYm94LnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tbGFiZWwtZ2FwOnZhcigtLW10ZS1zcGFjZS14cyk7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0zKTstLWJvcmRlci1ob3Zlci1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLXJnYikpOy0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1zbSk7LS1mb2N1cy1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpOy0tYWNjZW50LWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtcmdiKSk7LS1jaGVjay1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLWMtcmdiKSk7LS1sYWJlbC1mb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtc2l6ZSk7LS1sYWJlbC1mb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTEtZm9udC13ZWlnaHQpOy0tbGFiZWwtbGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWxpbmUtaGVpZ2h0KTtkaXNwbGF5OmlubGluZS1ibG9ja30uY29udGFpbmVye2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmlubGluZS1mbGV4O2dhcDp2YXIoLS1sYWJlbC1nYXApfS5jb250YWluZXIuaGFzLWNvbnRlbnR7bWFyZ2luLXJpZ2h0OmNhbGModmFyKC0tbGFiZWwtZ2FwKSoyKX0uY2hlY2tib3h7ZGlzcGxheTpmbGV4fS5jaGVja2JveCwuaW5wdXR7cG9zaXRpb246cmVsYXRpdmV9LmlucHV0ey13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtoZWlnaHQ6MTZweDttYXJnaW46NHB4O3dpZHRoOjE2cHh9Omhvc3QoW2NoZWNrZWRdKSAuaW5wdXQsOmhvc3QoW2Rpc2FibGVkXSkgLmlucHV0LDpob3N0KFtpbmRldGVybWluYXRlXSkgLmlucHV0e2JhY2tncm91bmQtY29sb3I6dmFyKC0tYWNjZW50LWNvbG9yKTtib3JkZXItY29sb3I6dmFyKC0tYWNjZW50LWNvbG9yKX06aG9zdChbY2hlY2tlZF0pIC5pbnB1dDphZnRlciw6aG9zdChbaW5kZXRlcm1pbmF0ZV0pIC5pbnB1dDphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWNoZWNrLWNvbG9yKTtjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGV9Omhvc3QoOm5vdChbZGlzYWJsZWRdKTpub3QoW2NoZWNrZWRdKTpub3QoW2luZGV0ZXJtaW5hdGVdKTpub3QoW3JlYWRPbmx5XSk6aG92ZXIpIC5pbnB1dHtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWhvdmVyLWNvbG9yKX06aG9zdChbc2l6ZT1zbV0pIC5pbnB1dHtoZWlnaHQ6MTRweDt3aWR0aDoxNHB4fS5sYWJlbHtmb250LXNpemU6dmFyKC0tbGFiZWwtZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1sYWJlbC1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbGFiZWwtbGluZS1oZWlnaHQpfTpob3N0KFtzaXplPXNtXSkgLmxhYmVsey0tbGFiZWwtZm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXNpemUpOy0tbGFiZWwtZm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWZvbnQtd2VpZ2h0KTstLWxhYmVsLWxpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1saW5lLWhlaWdodCl9LmNoZWNre2Rpc3BsYXk6bm9uZX06aG9zdChbY2hlY2tlZF06bm90KFtpbmRldGVybWluYXRlXSkpIC5jaGVja3tjb2xvcjp2YXIoLS1jaGVjay1jb2xvcik7ZGlzcGxheTppbmxpbmU7bGVmdDp2YXIoLS1tdGUtc3BhY2UteHMpO3Bvc2l0aW9uOmFic29sdXRlO3RvcDp2YXIoLS1tdGUtc3BhY2UteHMpfTpob3N0KFtpbmRldGVybWluYXRlXSkgLmlucHV0OmFmdGVye2JvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtc20pO2luc2V0OjZweCAzcHh9LmVycm9yLC5oaW50LDpob3N0IDo6c2xvdHRlZChbc2xvdD1lcnJvcl0pLDpob3N0IDo6c2xvdHRlZChbc2xvdD1oaW50XSl7bWFyZ2luLWxlZnQ6MjhweDt0cmFuc2Zvcm06dHJhbnNsYXRlWShjYWxjKHZhcigtLW10ZS1zcGFjZS14cykqLTEpKX06aG9zdChbc2l6ZT1zbV0pIC5oaW50IDpob3N0KFtzaXplPXNtXSkgLmVycm9yLDpob3N0KFtzaXplPXNtXSkgOjpzbG90dGVkKFtzbG90PWVycm9yXSksOmhvc3QoW3NpemU9c21dKSA6OnNsb3R0ZWQoW3Nsb3Q9aGludF0pe21hcmdpbi1sZWZ0OjI2cHh9LmVycm9yLC5oaW50LDpob3N0IDo6c2xvdHRlZChtdGUtZXJyb3IpLDpob3N0IDo6c2xvdHRlZChtdGUtaGludCl7d2lkdGg6YXV0b306aG9zdChbY29sb3I9cHJpbWFyeV0pey0tYWNjZW50LWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtcmdiKSk7LS1ib3JkZXItaG92ZXItY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktYmFzZS1yZ2IpKTstLWNoZWNrLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtYy1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XSl7LS1hY2NlbnQtY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1iYXNlLXJnYikpOy0tYm9yZGVyLWhvdmVyLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1yZ2IpKTstLWNoZWNrLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1jLXJnYikpfTpob3N0KFtjb2xvcj10ZXJ0aWFyeV0pey0tYWNjZW50LWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLXJnYikpOy0tYm9yZGVyLWhvdmVyLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLXJnYikpOy0tY2hlY2stY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWJhc2UtYy1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXSl7LS1hY2NlbnQtY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1iYXNlLXJnYikpOy0tYm9yZGVyLWhvdmVyLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKTstLWNoZWNrLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1jLXJnYikpfTpob3N0IC5pbnB1dDpmb2N1cyw6aG9zdCAuaW5wdXQ6Zm9jdXMtdmlzaWJsZXtvdXRsaW5lOm5vbmV9LmlucHV0OmZvY3VzLXZpc2libGU6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1mb2N1cy1yYWRpdXMpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWZvY3VzLXJhZGl1cyk7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1mb2N1cy1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWZvY3VzLXJhZGl1cyk7Ym90dG9tOi01cHg7Ym94LXNoYWRvdzowIDAgMCAxcHggdmFyKC0tbXRlLWxpZ2h0KTtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jaztsZWZ0Oi01cHg7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDotNXB4O3RvcDotNXB4O3otaW5kZXg6OX06aG9zdChbcmVhZG9ubHldKXstLWFjY2VudC1jb2xvcjp2YXIoLS1tdGUtcmVhZG9ubHktNCk7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLXJlYWRvbmx5LTMpOy0tY2hlY2stY29sb3I6dmFyKC0tbXRlLXJlYWRvbmx5LTEpO2NvbG9yOnZhcigtLW10ZS1yZWFkb25seS00KTtjdXJzb3I6ZGVmYXVsdH06aG9zdCg6bm90KFtyZWFkb25seV0pKSAuY29udGFpbmVyLDpob3N0KDpub3QoW3JlYWRvbmx5XSkpIC5pbnB1dHtjdXJzb3I6cG9pbnRlcn06aG9zdChbZGlzYWJsZWRdKXstLWFjY2VudC1jb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtMSk7LS1jaGVjay1jb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtMyl9Omhvc3QoW2Rpc2FibGVkXSkgLmNvbnRhaW5lciw6aG9zdChbZGlzYWJsZWRdKSAuaW5wdXR7Y29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTQpO2N1cnNvcjpub3QtYWxsb3dlZH0uaGlkZGVue2Rpc3BsYXk6bm9uZX1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLFlBQVk7QUFDckIsU0FBUyxVQUFVLGFBQWE7QUFDaEMsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsb0JBQW9COzs7QUNIN0IsU0FBUyxXQUFXO0FBQWEsSUFBTUEsVUFBUzs7O0FEcUJoRCxTQUFTLFlBQVk7QUFDckIsU0FBUyw2QkFBNkI7QUFDdEMsU0FBUyxnQkFBZ0I7QUFFekIsU0FBUyxpQkFBaUI7QUFHMUIsdUJBQXVCLGNBQWMsQ0FBQyxZQUFZLENBQUM7QUFFbkQsSUFBSSxlQUFlO0FBZ0NaLElBQU0sY0FBTixjQUEwQjtFQUMv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
