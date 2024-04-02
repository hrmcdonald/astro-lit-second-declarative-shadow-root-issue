import "../../chunks/chunk.LWJKRUKG.js";
import "../../chunks/chunk.D4QL7DP6.js";
import "../../chunks/chunk.M5RJHYFW.js";
import {
  CoreColorMixin,
  DisabledMixin,
  FieldsetMixin,
  MteElement,
  PresetMixinFactory,
  SizeMixin,
  SlotObserverMixin,
  StylePartsMixin,
  TabIndexMixin,
  __decorateClass,
  defineElement,
  eventEmitter,
  onUpdate,
  styles5 as styles,
  styles7 as styles2
} from "../../chunks/chunk.KVXAK6W4.js";

// src/atomic/radio/radio.element.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { property } from "lit/decorators.js";

// src/atomic/radio/radio.styles.ts
import { css } from "lit";
var styles3 = css`:host{--accent-color:rgb(var(--mte-core-primary-base-rgb));--border-color:var(--mte-border-3);--border-hover-color:rgb(var(--mte-core-primary-base-rgb));--focus-radius:50%;--label-gap:var(--mte-space-xs);--label-font-size:var(--mte-font-set-body1-font-size);--label-font-weight:var(--mte-font-set-body1-font-weight);--label-line-height:var(--mte-font-set-body1-line-height);display:inline-block}.container{align-items:center;display:inline-flex;gap:var(--label-gap)}.container.has-content{margin-right:calc(var(--label-gap)*2)}.label{font-size:var(--radio-group-label-font-size,var(--label-font-size));font-weight:var(--radio-group-label-font-weight,var(--label-font-weight));line-height:var(--radio-group-label-line-height,var(--label-line-height))}:host([size=sm]) .label{--label-font-weight:var(--mte-font-set-body2-font-weight);--label-font-size:var(--mte-font-set-body2-font-size);--label-line-height:var(--mte-font-set-body2-line-height)}.indicator{border:1px solid var(--border-color);border-radius:50%;color:currentColor;font:inherit;margin:4px;max-height:14px;max-width:14px;min-height:14px;min-width:14px;position:relative}.indicator:after{background:var(--accent-color);border-radius:50%;content:"";left:50%;max-height:9px;max-width:9px;min-height:9px;min-width:9px;position:absolute;top:50%;transform:scale(0);transform:translate(-50%,-50%) scale(0);transition:80ms cubic-bezier(.4,0,.2,1)}:host([checked]) .indicator,:host([disabled]) .indicator{border-color:var(--accent-color)}:host([checked]) .indicator:after{transform:translate(-50%,-50%) scale(1)}:host .description,:host ::slotted([slot=description]){margin-left:28px;transform:translateY(calc(var(--mte-space-xs)*-1))}.description,:host ::slotted(mte-description){width:auto}:host([color=primary]){--accent-color:rgb(var(--mte-core-primary-base-rgb));--border-hover-color:rgb(var(--mte-core-primary-base-rgb));--check-color:rgb(var(--mte-core-primary-base-c-rgb))}:host([color=secondary]){--accent-color:rgb(var(--mte-core-secondary-base-rgb));--border-hover-color:rgb(var(--mte-core-secondary-base-rgb));--check-color:rgb(var(--mte-core-secondary-base-c-rgb))}:host([color=tertiary]){--accent-color:rgb(var(--mte-core-tertiary-base-rgb));--border-hover-color:rgb(var(--mte-core-tertiary-base-rgb));--check-color:rgb(var(--mte-core-tertiary-base-c-rgb))}:host([color=danger]){--accent-color:rgb(var(--mte-core-danger-base-rgb));--border-hover-color:rgb(var(--mte-core-danger-base-rgb));--check-color:rgb(var(--mte-core-danger-base-c-rgb))}:host(:not([readOnly]):not([disabled])) .container:hover{cursor:pointer}:host(:not([readOnly]):not([disabled])) .container:hover .indicator{border-color:var(--border-hover-color)}:host(:focus),:host(:focus-visible){outline:none}:host(:focus-visible:not(.disabled):not([disabled]):not(:disabled)) .indicator:before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--focus-radius);border-bottom-right-radius:var(--focus-radius);border-top-left-radius:var(--focus-radius);border-top-right-radius:var(--focus-radius);bottom:-5px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-5px;pointer-events:none;position:absolute;right:-5px;top:-5px;z-index:9}:host([readonly]){--accent-color:var(--mte-readonly-4);--border-color:var(--mte-readonly-3);--border-hover-color:var(--mte-readonly-3);--check-color:var(--mte-readonly-1);color:var(--mte-readonly-4)}:host([disabled]) .container,:host([disabled]) .indicator{color:var(--mte-disabled-4);cursor:not-allowed}:host([disabled]){--accent-color:var(--mte-disabled-2);--border-hover-color:var(--mte-disabled-2);--border-color:var(--mte-disabled-2)}.hidden{display:none}`;

// src/atomic/radio/radio.element.ts
import { when } from "lit-html/directives/when.js";
var nextUniqueId = 0;
var MteRadio = class extends TabIndexMixin(
  CoreColorMixin(
    DisabledMixin(
      SizeMixin(
        SlotObserverMixin(
          PresetMixinFactory("MteRadio")(
            StylePartsMixin(MteElement)
          )
        )
      )
    )
  ),
  { initialTabIndex: 0 }
) {
  constructor() {
    super(...arguments);
    this.internalId = nextUniqueId++;
    this.value = "on";
    this.defaultChecked = false;
    this.role = "radio";
    this.checked = false;
    this.readonly = false;
    this.handleClick = () => {
      if (this.disabled || this.readonly || this.checked) {
        return;
      }
      this.checked = true;
      this._onRadioChange.emit(
        { value: this.value, name: this.name, checked: this.checked },
        { bubbles: true }
      );
    };
    this.handleBlur = () => {
      this._onBlur.emit();
    };
    this.handleFocus = () => {
      this._onFocus.emit();
    };
  }
  onDefaultCheckedChange() {
    if (!this.hasUpdated && this.defaultChecked && !this.checked) {
      this.checked = true;
    }
  }
  onCheckChange() {
    this.setAttribute("aria-checked", this.checked ? "true" : "false");
    if (this.checked) {
      this._onRadioChange.emit(
        { value: this.value, name: this.name, checked: this.checked },
        { bubbles: true }
      );
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListeners();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListeners();
  }
  addEventListeners() {
    this.addEventListener("blur", this.handleBlur);
    this.addEventListener("focus", this.handleFocus);
    this.addEventListener("click", this.handleClick);
  }
  removeEventListeners() {
    this.removeEventListener("blur", this.handleBlur);
    this.removeEventListener("focus", this.handleFocus);
    this.removeEventListener("click", this.handleClick);
  }
  render() {
    const hasLabel = this.hasSlot("label", this.label);
    const hasDescription = this.hasSlot("description", this.description);
    return html`${this.instanceStyles} <span class="container ${classMap({ "has-content": hasLabel || hasDescription })}" @click="${this.handleClick}"><span class="indicator" part="indicator"></span><slot name="label">${when(
      this.label,
      () => html`<mte-label class="label" part="label">${this.label}</mte-label>`
    )}</slot></span><slot name="description">${when(
      this.description,
      () => html`<mte-description class="description" part="description">${this.description}</mte-description>`
    )}</slot>`;
  }
};
MteRadio.styles = [styles2, styles3];
__decorateClass([
  property()
], MteRadio.prototype, "label", 2);
__decorateClass([
  property()
], MteRadio.prototype, "description", 2);
__decorateClass([
  property()
], MteRadio.prototype, "value", 2);
__decorateClass([
  property({ type: Boolean })
], MteRadio.prototype, "defaultChecked", 2);
__decorateClass([
  property({ type: Boolean })
], MteRadio.prototype, "autofocus", 2);
__decorateClass([
  property({ reflect: true, attribute: "aria-label" })
], MteRadio.prototype, "ariaLabel", 2);
__decorateClass([
  property({ reflect: true, attribute: "role" })
], MteRadio.prototype, "role", 2);
__decorateClass([
  property({ reflect: true })
], MteRadio.prototype, "name", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteRadio.prototype, "checked", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteRadio.prototype, "readonly", 2);
__decorateClass([
  eventEmitter()
], MteRadio.prototype, "_onRadioChange", 2);
__decorateClass([
  eventEmitter()
], MteRadio.prototype, "_onFocus", 2);
__decorateClass([
  eventEmitter()
], MteRadio.prototype, "_onBlur", 2);
__decorateClass([
  onUpdate("defaultChecked")
], MteRadio.prototype, "onDefaultCheckedChange", 1);
__decorateClass([
  onUpdate("checked")
], MteRadio.prototype, "onCheckChange", 1);
MteRadio = __decorateClass([
  defineElement("mte-radio")
], MteRadio);

// src/atomic/radio/radio-group.element.ts
import { html as html2 } from "lit";
import { property as property2 } from "lit/decorators.js";
import { FormControlMixin } from "@open-wc/form-control";

// src/atomic/radio/radio-group.styles.ts
import { css as css2 } from "lit";
var styles4 = css2`:host{--radio-gap:var(--mte-space-xxs);--radio-group-label-font-weight:var(--mte-font-set-body1-font-weight);--radio-group-label-font-size:var(--mte-font-set-body1-font-size);--radio-group-label-line-height:var(--mte-font-set-body1-line-height);height:100%;max-width:100%}:host([size=sm]){--radio-group-label-font-weight:var(--mte-font-set-body2-font-weight);--radio-group-label-font-size:var(--mte-font-set-body2-font-size);--radio-group-label-line-height:var(--mte-font-set-body2-line-height)}:host([direction=row]) .control-container{flex-direction:row}.fieldset{border:none;height:100%;margin:0;margin-inline:0;padding:0;padding-block:0;padding-inline:0;width:100%}.control-container{align-items:flex-start;display:inline-flex;flex-direction:column;flex-wrap:wrap;gap:var(--radio-gap);height:-moz-fit-content;height:fit-content;max-height:100%}`;

// src/atomic/radio/radio-group.element.ts
import { ifDefined } from "lit-html/directives/if-defined.js";
var MteRadioGroup = class extends FormControlMixin(
  CoreColorMixin(
    DisabledMixin(
      SizeMixin(
        FieldsetMixin(
          SlotObserverMixin(StylePartsMixin(MteElement))
        )
      )
    )
  )
) {
  constructor() {
    super(...arguments);
    this.shouldFormUpdate = false;
    this.direction = "column";
    this.label = "";
    this.name = "";
    this.title = "";
    this.readonly = false;
    this.value = "";
    this.required = false;
    this.ariaLabelledBy = "";
    this.ariaDescribedBy = "";
    this.showRequired = false;
    this._inheritedAttributes = {};
  }
  get validationTarget() {
    return this.querySelector?.(
      'mte-radio:not([disabled]):not([readonly]):not([tabindex="-1"])'
    );
  }
  get checkedRadio() {
    return this.querySelector("mte-radio[checked]");
  }
  get focusableRadio() {
    return this.querySelector("mte-radio[checked]:not([disabled]):not([readonly]") || this.validationTarget;
  }
  get radioElements() {
    return [...this.querySelectorAll(`mte-radio`)];
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("onRadioChange", this.handleRadioChange);
    this.addEventListener("invalid", this.handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("onRadioChange", this.handleRadioChange);
    this.removeEventListener("invalid", this.handleInvalid);
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this.resetRadios(true);
  }
  onDisabledUpdate() {
    this.radioElements.forEach((radio) => {
      if (this.hasUpdated) {
        radio.disabled = this.disabled;
        return;
      }
      if (this.disabled) {
        radio.disabled = true;
      }
    });
  }
  onAriaLabelledByChange(changes) {
    if (changes.has("ariaLabelledBy")) {
      this._inheritedAttributes = {
        ...this._inheritedAttributes,
        ariaLabelledBy: this.ariaLabelledBy
      };
      this.removeAttribute("aria-labelledby");
    }
  }
  onAriaDescribedByChange(changes) {
    if (changes.has("ariaDescribedBy")) {
      this._inheritedAttributes = {
        ...this._inheritedAttributes,
        ariaDescribedBy: this.ariaDescribedBy
      };
      this.removeAttribute("aria-describedby");
    }
  }
  onNameUpdate() {
    this.radioElements.forEach((radio) => {
      if (this.name) {
        radio.name = this.name;
      }
    });
  }
  onColorUpdate() {
    this.radioElements.forEach((radio) => {
      if (this.color) {
        radio.color = this.color;
      }
    });
  }
  onReadonlyUpdate() {
    this.radioElements.forEach((radio) => {
      if (this.hasUpdated) {
        radio.readonly = this.readonly;
        return;
      }
      if (this.readonly) {
        radio.readonly = true;
      }
    });
  }
  shouldFormValueUpdate() {
    return this.shouldFormUpdate;
  }
  resetRadios(firstUpdated) {
    let focusableTarget;
    let checkedTarget;
    this.radioElements.forEach((radio) => {
      if (firstUpdated) {
        radio.checked = radio.defaultChecked || radio.checked;
      } else {
        radio.checked = radio.defaultChecked;
      }
      if (radio.checked && !radio.disabled && !radio.readonly) {
        focusableTarget = radio;
        checkedTarget = radio;
      }
      if (!focusableTarget && !radio.disabled && !radio.readonly) {
        focusableTarget = radio;
      }
      radio.tabIndex = -1;
    });
    if (focusableTarget) {
      focusableTarget.tabIndex = 0;
    }
    this.shouldFormUpdate = !!checkedTarget;
    this.setValue(this.value || checkedTarget?.value);
    if (checkedTarget && !firstUpdated) {
      this._onChange.emit({
        radio: checkedTarget,
        checked: true,
        value: this.value || checkedTarget?.value,
        name: this.name
      });
    }
  }
  resetFormControl() {
    this.resetRadios();
  }
  validityCallback() {
    if (this.error) {
      return this.error;
    }
  }
  handleInvalid() {
    this._onInvalid.emit();
  }
  getSlottedElement(name) {
    return this.querySelector?.(`:scope > [slot="${name}"]`);
  }
  handleRadioChange(event) {
    const selectedRadio = event.target;
    if (!selectedRadio || selectedRadio.disabled || selectedRadio.readonly) {
      return;
    }
    this.radioElements.forEach((radio) => {
      const isSelectedRadio = radio === selectedRadio;
      radio.checked = isSelectedRadio;
      radio.tabIndex = isSelectedRadio ? 0 : -1;
    });
    this.shouldFormUpdate = true;
    this.setValue(this.value || selectedRadio?.value);
    this._onChange.emit({
      radio: selectedRadio,
      checked: true,
      value: this.value || selectedRadio?.value,
      name: this.name
    });
  }
  handleKeyDown(event) {
    const { key } = event;
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(key)) {
      return;
    }
    let increment = 1;
    const focusableRadios = this.radioElements.filter(
      (radio) => !radio.disabled && !radio.readonly
    );
    if (["ArrowUp", "ArrowLeft"].includes(key)) {
      increment = -1;
    }
    if (key === " ") {
      increment = 0;
    }
    const currentIndex = focusableRadios.findIndex(
      (radio) => radio === document.activeElement || radio.checked
    );
    let index = currentIndex === -1 ? 0 : currentIndex + increment;
    if (index < 0) {
      index = focusableRadios.length - 1;
    }
    if (index > focusableRadios.length - 1) {
      index = 0;
    }
    const nextSelectedRadio = focusableRadios[index];
    this.radioElements.forEach((radio) => {
      radio.checked = false;
      radio.tabIndex = -1;
    });
    this.setValue(this.value || nextSelectedRadio?.value);
    if (nextSelectedRadio) {
      nextSelectedRadio.checked = true;
      nextSelectedRadio.tabIndex = 0;
      nextSelectedRadio.focus();
      this.shouldFormUpdate = true;
      this._onChange.emit({
        radio: nextSelectedRadio,
        checked: true,
        value: this.value || nextSelectedRadio?.value,
        name: this.name
      });
    }
    event.preventDefault();
  }
  /** Focuses on the first focusable radio */
  focus() {
    this.focusableRadio.focus();
  }
  /** Blurs the radio */
  blur() {
    const focusedRadio = this.radioElements.find((radio) => radio === document.activeElement);
    if (focusedRadio) {
      focusedRadio.blur();
    }
  }
  render() {
    const hintId = this.getSlottedElement("hint")?.id || (this.hint ? "hint" : "");
    const errorId = this.getSlottedElement("error")?.id || (this.error ? "error" : "");
    const descriptionId = this.getSlottedElement("description")?.id || (this.description ? "description" : "");
    return this.renderFieldsetTemplate(
      html2`${this.instanceStyles}<slot @keydown="${this.handleKeyDown}"></slot>`,
      {
        containerTemplate: (contents, classes) => html2`<fieldset role="radiogroup" aria-labelledby="${ifDefined(this._inheritedAttributes.ariaLabelledBy)}" aria-describedby="${`${descriptionId} ${errorId || hintId} ${this._inheritedAttributes.ariaDescribedBy}`.trim()}" class="${`fieldset ${classes}`}">${contents}</fieldset>`,
        labelTemplate: (contents, classes) => html2`<legend class="${classes}" @click="${this.focus}">${contents}</legend>`
      },
      {
        label: this.label,
        hint: this.hint,
        description: this.description,
        hasLabel: this.hasSlot("label", this.label),
        hasDescription: this.hasSlot("description", this.description),
        showError: this.hasSlot("error", this.error),
        showRequired: this.showRequired
      }
    );
  }
};
MteRadioGroup.styles = [styles2, styles, styles4];
MteRadioGroup.formControlValidators = [
  {
    attribute: "required",
    key: "valueMissing",
    message: "Please select an item",
    async isValid(instance) {
      await instance.updateComplete;
      const isChecked = instance.radioElements.some((instance2) => instance2.checked);
      if (instance.required && !isChecked) {
        return false;
      }
      return true;
    }
  }
];
__decorateClass([
  property2({ reflect: true })
], MteRadioGroup.prototype, "direction", 2);
__decorateClass([
  property2()
], MteRadioGroup.prototype, "label", 2);
__decorateClass([
  property2({ reflect: true })
], MteRadioGroup.prototype, "name", 2);
__decorateClass([
  property2({ reflect: true })
], MteRadioGroup.prototype, "title", 2);
__decorateClass([
  property2({ type: Boolean })
], MteRadioGroup.prototype, "readonly", 2);
__decorateClass([
  property2()
], MteRadioGroup.prototype, "value", 2);
__decorateClass([
  property2({ type: Boolean, reflect: true })
], MteRadioGroup.prototype, "required", 2);
__decorateClass([
  property2({ attribute: "aria-labelledby", reflect: true })
], MteRadioGroup.prototype, "ariaLabelledBy", 2);
__decorateClass([
  property2({ attribute: "aria-describedby", reflect: true })
], MteRadioGroup.prototype, "ariaDescribedBy", 2);
__decorateClass([
  property2({ type: Boolean })
], MteRadioGroup.prototype, "showRequired", 2);
__decorateClass([
  eventEmitter()
], MteRadioGroup.prototype, "_onChange", 2);
__decorateClass([
  eventEmitter()
], MteRadioGroup.prototype, "_onInvalid", 2);
__decorateClass([
  onUpdate("disabled")
], MteRadioGroup.prototype, "onDisabledUpdate", 1);
__decorateClass([
  onUpdate("ariaLabelledBy", { on: "both" })
], MteRadioGroup.prototype, "onAriaLabelledByChange", 1);
__decorateClass([
  onUpdate("ariaDescribedBy", { on: "both" })
], MteRadioGroup.prototype, "onAriaDescribedByChange", 1);
__decorateClass([
  onUpdate("name")
], MteRadioGroup.prototype, "onNameUpdate", 1);
__decorateClass([
  onUpdate("color")
], MteRadioGroup.prototype, "onColorUpdate", 1);
__decorateClass([
  onUpdate("readonly")
], MteRadioGroup.prototype, "onReadonlyUpdate", 1);
MteRadioGroup = __decorateClass([
  defineElement("mte-radio-group")
], MteRadioGroup);
export {
  MteRadio,
  MteRadioGroup
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9yYWRpbyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3JhZGlvL3JhZGlvLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3JhZGlvIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcmFkaW8vcmFkaW8tZ3JvdXAuc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1hY2NlbnQtY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktYmFzZS1yZ2IpKTstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTMpOy0tYm9yZGVyLWhvdmVyLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtcmdiKSk7LS1mb2N1cy1yYWRpdXM6NTAlOy0tbGFiZWwtZ2FwOnZhcigtLW10ZS1zcGFjZS14cyk7LS1sYWJlbC1mb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtc2l6ZSk7LS1sYWJlbC1mb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTEtZm9udC13ZWlnaHQpOy0tbGFiZWwtbGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWxpbmUtaGVpZ2h0KTtkaXNwbGF5OmlubGluZS1ibG9ja30uY29udGFpbmVye2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmlubGluZS1mbGV4O2dhcDp2YXIoLS1sYWJlbC1nYXApfS5jb250YWluZXIuaGFzLWNvbnRlbnR7bWFyZ2luLXJpZ2h0OmNhbGModmFyKC0tbGFiZWwtZ2FwKSoyKX0ubGFiZWx7Zm9udC1zaXplOnZhcigtLXJhZGlvLWdyb3VwLWxhYmVsLWZvbnQtc2l6ZSx2YXIoLS1sYWJlbC1mb250LXNpemUpKTtmb250LXdlaWdodDp2YXIoLS1yYWRpby1ncm91cC1sYWJlbC1mb250LXdlaWdodCx2YXIoLS1sYWJlbC1mb250LXdlaWdodCkpO2xpbmUtaGVpZ2h0OnZhcigtLXJhZGlvLWdyb3VwLWxhYmVsLWxpbmUtaGVpZ2h0LHZhcigtLWxhYmVsLWxpbmUtaGVpZ2h0KSl9Omhvc3QoW3NpemU9c21dKSAubGFiZWx7LS1sYWJlbC1mb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC13ZWlnaHQpOy0tbGFiZWwtZm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXNpemUpOy0tbGFiZWwtbGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWxpbmUtaGVpZ2h0KX0uaW5kaWNhdG9ye2JvcmRlcjoxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItcmFkaXVzOjUwJTtjb2xvcjpjdXJyZW50Q29sb3I7Zm9udDppbmhlcml0O21hcmdpbjo0cHg7bWF4LWhlaWdodDoxNHB4O21heC13aWR0aDoxNHB4O21pbi1oZWlnaHQ6MTRweDttaW4td2lkdGg6MTRweDtwb3NpdGlvbjpyZWxhdGl2ZX0uaW5kaWNhdG9yOmFmdGVye2JhY2tncm91bmQ6dmFyKC0tYWNjZW50LWNvbG9yKTtib3JkZXItcmFkaXVzOjUwJTtjb250ZW50OlwiXCI7bGVmdDo1MCU7bWF4LWhlaWdodDo5cHg7bWF4LXdpZHRoOjlweDttaW4taGVpZ2h0OjlweDttaW4td2lkdGg6OXB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgwKTt0cmFuc2l0aW9uOjgwbXMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSl9Omhvc3QoW2NoZWNrZWRdKSAuaW5kaWNhdG9yLDpob3N0KFtkaXNhYmxlZF0pIC5pbmRpY2F0b3J7Ym9yZGVyLWNvbG9yOnZhcigtLWFjY2VudC1jb2xvcil9Omhvc3QoW2NoZWNrZWRdKSAuaW5kaWNhdG9yOmFmdGVye3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgxKX06aG9zdCAuZGVzY3JpcHRpb24sOmhvc3QgOjpzbG90dGVkKFtzbG90PWRlc2NyaXB0aW9uXSl7bWFyZ2luLWxlZnQ6MjhweDt0cmFuc2Zvcm06dHJhbnNsYXRlWShjYWxjKHZhcigtLW10ZS1zcGFjZS14cykqLTEpKX0uZGVzY3JpcHRpb24sOmhvc3QgOjpzbG90dGVkKG10ZS1kZXNjcmlwdGlvbil7d2lkdGg6YXV0b306aG9zdChbY29sb3I9cHJpbWFyeV0pey0tYWNjZW50LWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtcmdiKSk7LS1ib3JkZXItaG92ZXItY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktYmFzZS1yZ2IpKTstLWNoZWNrLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtYy1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XSl7LS1hY2NlbnQtY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1iYXNlLXJnYikpOy0tYm9yZGVyLWhvdmVyLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1yZ2IpKTstLWNoZWNrLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1jLXJnYikpfTpob3N0KFtjb2xvcj10ZXJ0aWFyeV0pey0tYWNjZW50LWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLXJnYikpOy0tYm9yZGVyLWhvdmVyLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLXJnYikpOy0tY2hlY2stY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWJhc2UtYy1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXSl7LS1hY2NlbnQtY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1iYXNlLXJnYikpOy0tYm9yZGVyLWhvdmVyLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKTstLWNoZWNrLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1jLXJnYikpfTpob3N0KDpub3QoW3JlYWRPbmx5XSk6bm90KFtkaXNhYmxlZF0pKSAuY29udGFpbmVyOmhvdmVye2N1cnNvcjpwb2ludGVyfTpob3N0KDpub3QoW3JlYWRPbmx5XSk6bm90KFtkaXNhYmxlZF0pKSAuY29udGFpbmVyOmhvdmVyIC5pbmRpY2F0b3J7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1ob3Zlci1jb2xvcil9Omhvc3QoOmZvY3VzKSw6aG9zdCg6Zm9jdXMtdmlzaWJsZSl7b3V0bGluZTpub25lfTpob3N0KDpmb2N1cy12aXNpYmxlOm5vdCguZGlzYWJsZWQpOm5vdChbZGlzYWJsZWRdKTpub3QoOmRpc2FibGVkKSkgLmluZGljYXRvcjpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCByZ2IodmFyKC0tbXRlLWZvY3VzLXJnYikpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tZm9jdXMtcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1mb2N1cy1yYWRpdXMpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tZm9jdXMtcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1mb2N1cy1yYWRpdXMpO2JvdHRvbTotNXB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDotNXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTVweDt0b3A6LTVweDt6LWluZGV4Ojl9Omhvc3QoW3JlYWRvbmx5XSl7LS1hY2NlbnQtY29sb3I6dmFyKC0tbXRlLXJlYWRvbmx5LTQpOy0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1yZWFkb25seS0zKTstLWJvcmRlci1ob3Zlci1jb2xvcjp2YXIoLS1tdGUtcmVhZG9ubHktMyk7LS1jaGVjay1jb2xvcjp2YXIoLS1tdGUtcmVhZG9ubHktMSk7Y29sb3I6dmFyKC0tbXRlLXJlYWRvbmx5LTQpfTpob3N0KFtkaXNhYmxlZF0pIC5jb250YWluZXIsOmhvc3QoW2Rpc2FibGVkXSkgLmluZGljYXRvcntjb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtNCk7Y3Vyc29yOm5vdC1hbGxvd2VkfTpob3N0KFtkaXNhYmxlZF0pey0tYWNjZW50LWNvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC0yKTstLWJvcmRlci1ob3Zlci1jb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtMik7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTIpfS5oaWRkZW57ZGlzcGxheTpub25lfWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLXJhZGlvLWdhcDp2YXIoLS1tdGUtc3BhY2UteHhzKTstLXJhZGlvLWdyb3VwLWxhYmVsLWZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1mb250LXdlaWdodCk7LS1yYWRpby1ncm91cC1sYWJlbC1mb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtc2l6ZSk7LS1yYWRpby1ncm91cC1sYWJlbC1saW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTEtbGluZS1oZWlnaHQpO2hlaWdodDoxMDAlO21heC13aWR0aDoxMDAlfTpob3N0KFtzaXplPXNtXSl7LS1yYWRpby1ncm91cC1sYWJlbC1mb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC13ZWlnaHQpOy0tcmFkaW8tZ3JvdXAtbGFiZWwtZm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXNpemUpOy0tcmFkaW8tZ3JvdXAtbGFiZWwtbGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWxpbmUtaGVpZ2h0KX06aG9zdChbZGlyZWN0aW9uPXJvd10pIC5jb250cm9sLWNvbnRhaW5lcntmbGV4LWRpcmVjdGlvbjpyb3d9LmZpZWxkc2V0e2JvcmRlcjpub25lO2hlaWdodDoxMDAlO21hcmdpbjowO21hcmdpbi1pbmxpbmU6MDtwYWRkaW5nOjA7cGFkZGluZy1ibG9jazowO3BhZGRpbmctaW5saW5lOjA7d2lkdGg6MTAwJX0uY29udHJvbC1jb250YWluZXJ7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtkaXNwbGF5OmlubGluZS1mbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LXdyYXA6d3JhcDtnYXA6dmFyKC0tcmFkaW8tZ2FwKTtoZWlnaHQ6LW1vei1maXQtY29udGVudDtoZWlnaHQ6Zml0LWNvbnRlbnQ7bWF4LWhlaWdodDoxMDAlfWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsZ0JBQWdCO0FBQ3pCLFNBQVMsWUFBWTtBQUNyQixTQUFTLGdCQUFnQjs7O0FDRnpCLFNBQVMsV0FBVztBQUFhLElBQU1BLFVBQVM7OztBRHVCaEQsU0FBUyxZQUFZO0FBRXJCLElBQUksZUFBZTtBQXNCWixJQUFNLFdBQU4sY0FBdUI7RUFDNUI7SUFDRTtNQUNFO1FBQ0U7VUFDRSxtQkFBZ0MsVUFBVTtZQUN4QyxnQkFBa0QsVUFBVTtVQUM5RDtRQUNGO01BQ0Y7SUFDRjtFQUNGO0VBQ0EsRUFBRSxpQkFBaUIsRUFBRTtBQUN2QixFQUFFO0VBYks7O0FBZ0JMLFNBQVEsYUFBYTtBQVNULGlCQUFTO0FBR1EsMEJBQWlCO0FBU0UsZ0JBQU87QUFNWCxtQkFBVTtBQUdWLG9CQUFXO0FBb0R2RCxTQUFRLGNBQWMsTUFBTTtBQUMxQixVQUFJLEtBQUssWUFBWSxLQUFLLFlBQVksS0FBSyxTQUFTO0FBQ2xEO01BQ0Y7QUFFQSxXQUFLLFVBQVU7QUFDZixXQUFLLGVBQWU7UUFDbEIsRUFBRSxPQUFPLEtBQUssT0FBTyxNQUFNLEtBQUssTUFBTSxTQUFTLEtBQUssUUFBUTtRQUM1RCxFQUFFLFNBQVMsS0FBSztNQUNsQjtJQUNGO0FBRUEsU0FBUSxhQUFhLE1BQU07QUFDekIsV0FBSyxRQUFRLEtBQUs7SUFDcEI7QUFFQSxTQUFRLGNBQWMsTUFBTTtBQUMxQixXQUFLLFNBQVMsS0FBSztJQUNyQjs7RUExRFEseUJBQXlCO0FBQy9CLFFBQUksQ0FBQyxLQUFLLGNBQWMsS0FBSyxrQkFBa0IsQ0FBQyxLQUFLLFNBQVM7QUFDNUQsV0FBSyxVQUFVO0lBQ2pCO0VBQ0Y7RUFHUSxnQkFBZ0I7QUFDdEIsU0FBSyxhQUFhLGdCQUFnQixLQUFLLFVBQVUsU0FBUyxPQUFPO0FBRWpFLFFBQUksS0FBSyxTQUFTO0FBQ2hCLFdBQUssZUFBZTtRQUNsQixFQUFFLE9BQU8sS0FBSyxPQUFPLE1BQU0sS0FBSyxNQUFNLFNBQVMsS0FBSyxRQUFRO1FBQzVELEVBQUUsU0FBUyxLQUFLO01BQ2xCO0lBQ0Y7RUFDRjtFQUVBLG9CQUFvQjtBQUNsQixVQUFNLGtCQUFrQjtBQUN4QixTQUFLLGtCQUFrQjtFQUN6QjtFQUVBLHVCQUF1QjtBQUNyQixVQUFNLHFCQUFxQjtBQUMzQixTQUFLLHFCQUFxQjtFQUM1QjtFQUVRLG9CQUFvQjtBQUMxQixTQUFLLGlCQUFpQixRQUFRLEtBQUssVUFBVTtBQUM3QyxTQUFLLGlCQUFpQixTQUFTLEtBQUssV0FBVztBQUMvQyxTQUFLLGlCQUFpQixTQUFTLEtBQUssV0FBVztFQUNqRDtFQUVRLHVCQUF1QjtBQUM3QixTQUFLLG9CQUFvQixRQUFRLEtBQUssVUFBVTtBQUNoRCxTQUFLLG9CQUFvQixTQUFTLEtBQUssV0FBVztBQUNsRCxTQUFLLG9CQUFvQixTQUFTLEtBQUssV0FBVztFQUNwRDtFQXNCQSxTQUFTO0FBQ1AsVUFBTSxXQUFXLEtBQUssUUFBUSxTQUFTLEtBQUssS0FBSztBQUNqRCxVQUFNLGlCQUFpQixLQUFLLFFBQVEsZUFBZSxLQUFLLFdBQVc7QUFDbkUsV0FBTyxPQUNILEtBQUssY0FBYywyQkFFQSxTQUFTLEVBQUUsZUFBZSxZQUFZLGVBQWUsQ0FBQyxDQUFDLGFBQ2pFLEtBQUssV0FBVyx3RUFHckI7TUFDQSxLQUFLO01BQ0wsTUFBTSw2Q0FBNkMsS0FBSyxLQUFLO0lBQy9ELENBQUMsMENBSUE7TUFDRCxLQUFLO01BQ0wsTUFDRSwrREFDSyxLQUFLLFdBQVc7SUFFekIsQ0FBQztFQUdQO0FBQ0Y7QUFqSmEsU0FjSixTQUFTLENBQUNDLFNBQVlBLE9BQU07QUFLdkI7RUFBWCxTQUFTO0dBbkJDLFNBbUJDO0FBR0E7RUFBWCxTQUFTO0dBdEJDLFNBc0JDO0FBR0E7RUFBWCxTQUFTO0dBekJDLFNBeUJDO0FBR2lCO0VBQTVCLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztHQTVCaEIsU0E0QmtCO0FBR0E7RUFBNUIsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0dBL0JoQixTQStCa0I7QUFHeUI7RUFBckQsU0FBUyxFQUFFLFNBQVMsTUFBTSxXQUFXLGFBQWEsQ0FBQztHQWxDekMsU0FrQzJDO0FBR047RUFBL0MsU0FBUyxFQUFFLFNBQVMsTUFBTSxXQUFXLE9BQU8sQ0FBQztHQXJDbkMsU0FxQ3FDO0FBR25CO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQXhDaEIsU0F3Q2tCO0FBR2U7RUFBM0MsU0FBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQTNDL0IsU0EyQ2lDO0FBR0E7RUFBM0MsU0FBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQTlDL0IsU0E4Q2lDO0FBRzVCO0VBQWYsYUFBYTtHQWpESCxTQWlESztBQUdBO0VBQWYsYUFBYTtHQXBESCxTQW9ESztBQUdBO0VBQWYsYUFBYTtHQXZESCxTQXVESztBQUdSO0VBRFAsU0FBUyxnQkFBZ0I7R0F6RGYsU0EwREg7QUFPQTtFQURQLFNBQVMsU0FBUztHQWhFUixTQWlFSDtBQWpFRyxXQUFOO0VBRE4sY0FBYyxXQUFXO0dBQ2I7OztBRTlDYixTQUFTLFFBQUFDLGFBQVk7QUFDckIsU0FBUyxZQUFBQyxpQkFBZ0I7QUFDekIsU0FBUyx3QkFBd0I7OztBQ0hqQyxTQUFTLE9BQUFDLFlBQVc7QUFBYSxJQUFNQyxVQUFTRDs7O0FEdUJoRCxTQUFTLGlCQUFpQjtBQWlEbkIsSUFBTSxnQkFBTixjQUE0QjtFQUNqQztJQUNFO01BQ0U7UUFDRTtVQUNFLGtCQUFrQixnQkFBdUQsVUFBVSxDQUFDO1FBQ3RGO01BQ0Y7SUFDRjtFQUNGO0FBQ0YsRUFBRTtFQVZLOztBQWdDTCxTQUFRLG1CQUFtQjtBQUdFLHFCQUErQjtBQUdoRCxpQkFBUTtBQUdTLGdCQUFPO0FBR1AsaUJBQVE7QUFHUixvQkFBVztBQUc1QixpQkFBUTtBQUd3QixvQkFBVztBQUdJLDBCQUFpQjtBQUdoQiwyQkFBa0I7QUFHakQsd0JBQWU7QUFrSDVDLFNBQVEsdUJBQStDLENBQUM7O0VBMUd4RCxJQUFJLG1CQUE2QjtBQUMvQixXQUFPLEtBQUs7TUFDVjtJQUNGO0VBQ0Y7RUFFQSxJQUFJLGVBQXlCO0FBQzNCLFdBQU8sS0FBSyxjQUF3QixvQkFBb0I7RUFDMUQ7RUFFQSxJQUFJLGlCQUEyQjtBQUM3QixXQUNFLEtBQUssY0FBd0IsbURBQW1ELEtBQ2hGLEtBQUs7RUFFVDtFQUVBLElBQUksZ0JBQTRCO0FBQzlCLFdBQU8sQ0FBQyxHQUFHLEtBQUssaUJBQTJCLFdBQVcsQ0FBQztFQUN6RDtFQUVBLG9CQUFvQjtBQUNsQixVQUFNLGtCQUFrQjtBQUN4QixTQUFLLGlCQUFpQixpQkFBaUIsS0FBSyxpQkFBaUI7QUFDN0QsU0FBSyxpQkFBaUIsV0FBVyxLQUFLLGFBQWE7RUFDckQ7RUFFQSx1QkFBdUI7QUFDckIsVUFBTSxxQkFBcUI7QUFDM0IsU0FBSyxvQkFBb0IsaUJBQWlCLEtBQUssaUJBQWlCO0FBQ2hFLFNBQUssb0JBQW9CLFdBQVcsS0FBSyxhQUFhO0VBQ3hEO0VBRUEsYUFBYSxjQUFjO0FBQ3pCLFVBQU0sYUFBYSxZQUFZO0FBQy9CLFNBQUssWUFBWSxJQUFJO0VBQ3ZCO0VBR1EsbUJBQW1CO0FBQ3pCLFNBQUssY0FBYyxRQUFRLENBQUMsVUFBVTtBQUNwQyxVQUFJLEtBQUssWUFBWTtBQUNuQixjQUFNLFdBQVcsS0FBSztBQUN0QjtNQUNGO0FBRUEsVUFBSSxLQUFLLFVBQVU7QUFDakIsY0FBTSxXQUFXO01BQ25CO0lBQ0YsQ0FBQztFQUNIO0VBR1EsdUJBQXVCLFNBQVM7QUFDdEMsUUFBSSxRQUFRLElBQUksZ0JBQWdCLEdBQUc7QUFDakMsV0FBSyx1QkFBdUI7UUFDMUIsR0FBRyxLQUFLO1FBQ1IsZ0JBQWdCLEtBQUs7TUFDdkI7QUFDQSxXQUFLLGdCQUFnQixpQkFBaUI7SUFDeEM7RUFDRjtFQUdRLHdCQUF3QixTQUFTO0FBQ3ZDLFFBQUksUUFBUSxJQUFJLGlCQUFpQixHQUFHO0FBQ2xDLFdBQUssdUJBQXVCO1FBQzFCLEdBQUcsS0FBSztRQUNSLGlCQUFpQixLQUFLO01BQ3hCO0FBQ0EsV0FBSyxnQkFBZ0Isa0JBQWtCO0lBQ3pDO0VBQ0Y7RUFHUSxlQUFlO0FBQ3JCLFNBQUssY0FBYyxRQUFRLENBQUMsVUFBVTtBQUNwQyxVQUFJLEtBQUssTUFBTTtBQUNiLGNBQU0sT0FBTyxLQUFLO01BQ3BCO0lBQ0YsQ0FBQztFQUNIO0VBR1EsZ0JBQWdCO0FBQ3RCLFNBQUssY0FBYyxRQUFRLENBQUMsVUFBVTtBQUNwQyxVQUFJLEtBQUssT0FBTztBQUNkLGNBQU0sUUFBUSxLQUFLO01BQ3JCO0lBQ0YsQ0FBQztFQUNIO0VBR1EsbUJBQW1CO0FBQ3pCLFNBQUssY0FBYyxRQUFRLENBQUMsVUFBVTtBQUNwQyxVQUFJLEtBQUssWUFBWTtBQUNuQixjQUFNLFdBQVcsS0FBSztBQUN0QjtNQUNGO0FBRUEsVUFBSSxLQUFLLFVBQVU7QUFDakIsY0FBTSxXQUFXO01BQ25CO0lBQ0YsQ0FBQztFQUNIO0VBSUEsd0JBQXdCO0FBQ3RCLFdBQU8sS0FBSztFQUNkO0VBRUEsWUFBWSxjQUFlO0FBQ3pCLFFBQUk7QUFDSixRQUFJO0FBQ0osU0FBSyxjQUFjLFFBQVEsQ0FBQyxVQUFVO0FBQ3BDLFVBQUksY0FBYztBQUNoQixjQUFNLFVBQVUsTUFBTSxrQkFBa0IsTUFBTTtNQUNoRCxPQUFPO0FBQ0wsY0FBTSxVQUFVLE1BQU07TUFDeEI7QUFFQSxVQUFJLE1BQU0sV0FBVyxDQUFDLE1BQU0sWUFBWSxDQUFDLE1BQU0sVUFBVTtBQUN2RCwwQkFBa0I7QUFDbEIsd0JBQWdCO01BQ2xCO0FBRUEsVUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sWUFBWSxDQUFDLE1BQU0sVUFBVTtBQUMxRCwwQkFBa0I7TUFDcEI7QUFFQSxZQUFNLFdBQVc7SUFDbkIsQ0FBQztBQUVELFFBQUksaUJBQWlCO0FBQ25CLHNCQUFnQixXQUFXO0lBQzdCO0FBRUEsU0FBSyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzFCLFNBQUssU0FBUyxLQUFLLFNBQVMsZUFBZSxLQUFLO0FBRWhELFFBQUksaUJBQWlCLENBQUMsY0FBYztBQUNsQyxXQUFLLFVBQVUsS0FBSztRQUNsQixPQUFPO1FBQ1AsU0FBUztRQUNULE9BQU8sS0FBSyxTQUFTLGVBQWU7UUFDcEMsTUFBTSxLQUFLO01BQ2IsQ0FBQztJQUNIO0VBQ0Y7RUFFQSxtQkFBbUI7QUFDakIsU0FBSyxZQUFZO0VBQ25CO0VBRUEsbUJBQWtDO0FBQ2hDLFFBQUksS0FBSyxPQUFPO0FBQ2QsYUFBTyxLQUFLO0lBQ2Q7RUFDRjtFQUVRLGdCQUFnQjtBQUN0QixTQUFLLFdBQVcsS0FBSztFQUN2QjtFQUVRLGtCQUFrQixNQUEyQjtBQUNuRCxXQUFPLEtBQUssZ0JBQWdCLG1CQUFtQixJQUFJLElBQUk7RUFDekQ7RUFFUSxrQkFBa0IsT0FBb0I7QUFDNUMsVUFBTSxnQkFBZ0IsTUFBTTtBQUU1QixRQUFJLENBQUMsaUJBQWlCLGNBQWMsWUFBWSxjQUFjLFVBQVU7QUFDdEU7SUFDRjtBQUVBLFNBQUssY0FBYyxRQUFRLENBQUMsVUFBVTtBQUNwQyxZQUFNLGtCQUFrQixVQUFVO0FBRWxDLFlBQU0sVUFBVTtBQUNoQixZQUFNLFdBQVcsa0JBQWtCLElBQUk7SUFDekMsQ0FBQztBQUVELFNBQUssbUJBQW1CO0FBQ3hCLFNBQUssU0FBUyxLQUFLLFNBQVMsZUFBZSxLQUFLO0FBRWhELFNBQUssVUFBVSxLQUFLO01BQ2xCLE9BQU87TUFDUCxTQUFTO01BQ1QsT0FBTyxLQUFLLFNBQVMsZUFBZTtNQUNwQyxNQUFNLEtBQUs7SUFDYixDQUFDO0VBQ0g7RUFFUSxjQUFjLE9BQXNCO0FBQzFDLFVBQU0sRUFBRSxJQUFJLElBQUk7QUFFaEIsUUFBSSxDQUFDLENBQUMsV0FBVyxhQUFhLGFBQWEsY0FBYyxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDM0U7SUFDRjtBQUVBLFFBQUksWUFBWTtBQUNoQixVQUFNLGtCQUFrQixLQUFLLGNBQWM7TUFDekMsQ0FBQyxVQUFVLENBQUMsTUFBTSxZQUFZLENBQUMsTUFBTTtJQUN2QztBQUVBLFFBQUksQ0FBQyxXQUFXLFdBQVcsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUMxQyxrQkFBWTtJQUNkO0FBRUEsUUFBSSxRQUFRLEtBQUs7QUFDZixrQkFBWTtJQUNkO0FBRUEsVUFBTSxlQUFlLGdCQUFnQjtNQUNuQyxDQUFDLFVBQVUsVUFBVSxTQUFTLGlCQUFpQixNQUFNO0lBQ3ZEO0FBRUEsUUFBSSxRQUFRLGlCQUFpQixLQUFLLElBQUksZUFBZTtBQUVyRCxRQUFJLFFBQVEsR0FBRztBQUNiLGNBQVEsZ0JBQWdCLFNBQVM7SUFDbkM7QUFFQSxRQUFJLFFBQVEsZ0JBQWdCLFNBQVMsR0FBRztBQUN0QyxjQUFRO0lBQ1Y7QUFFQSxVQUFNLG9CQUFvQixnQkFBZ0IsS0FBSztBQUUvQyxTQUFLLGNBQWMsUUFBUSxDQUFDLFVBQVU7QUFDcEMsWUFBTSxVQUFVO0FBQ2hCLFlBQU0sV0FBVztJQUNuQixDQUFDO0FBRUQsU0FBSyxTQUFTLEtBQUssU0FBUyxtQkFBbUIsS0FBSztBQUVwRCxRQUFJLG1CQUFtQjtBQUNyQix3QkFBa0IsVUFBVTtBQUM1Qix3QkFBa0IsV0FBVztBQUM3Qix3QkFBa0IsTUFBTTtBQUN4QixXQUFLLG1CQUFtQjtBQUV4QixXQUFLLFVBQVUsS0FBSztRQUNsQixPQUFPO1FBQ1AsU0FBUztRQUNULE9BQU8sS0FBSyxTQUFTLG1CQUFtQjtRQUN4QyxNQUFNLEtBQUs7TUFDYixDQUFDO0lBQ0g7QUFDQSxVQUFNLGVBQWU7RUFDdkI7O0VBR08sUUFBUTtBQUNiLFNBQUssZUFBZSxNQUFNO0VBQzVCOztFQUdPLE9BQU87QUFDWixVQUFNLGVBQWUsS0FBSyxjQUFjLEtBQUssQ0FBQyxVQUFVLFVBQVUsU0FBUyxhQUFhO0FBRXhGLFFBQUksY0FBYztBQUNoQixtQkFBYSxLQUFLO0lBQ3BCO0VBQ0Y7RUFFQSxTQUFTO0FBQ1AsVUFBTSxTQUFTLEtBQUssa0JBQWtCLE1BQU0sR0FBRyxPQUFPLEtBQUssT0FBTyxTQUFTO0FBQzNFLFVBQU0sVUFBVSxLQUFLLGtCQUFrQixPQUFPLEdBQUcsT0FBTyxLQUFLLFFBQVEsVUFBVTtBQUMvRSxVQUFNLGdCQUNKLEtBQUssa0JBQWtCLGFBQWEsR0FBRyxPQUFPLEtBQUssY0FBYyxnQkFBZ0I7QUFFbkYsV0FBTyxLQUFLO01BQ1ZFLFFBQU8sS0FBSyxjQUFjLG1CQUFtQixLQUFLLGFBQWE7TUFDL0Q7UUFDRSxtQkFBbUIsQ0FBQyxVQUFVLFlBQzVCQSxxREFFb0IsVUFBVSxLQUFLLHFCQUFxQixjQUFjLENBQUMsdUJBQ2xELEdBQUcsYUFBYSxJQUFJLFdBQVcsTUFBTSxJQUN0RCxLQUFLLHFCQUFxQixlQUM1QixHQUFHLEtBQUssQ0FBQyxZQUNELFlBQVksT0FBTyxFQUFFLEtBQzNCLFFBQVE7UUFFZCxlQUFlLENBQUMsVUFBVSxZQUN4QkEsdUJBQXFCLE9BQU8sYUFBVyxLQUFLLEtBQUssS0FBSSxRQUFRO01BQ2pFO01BQ0E7UUFDRSxPQUFPLEtBQUs7UUFDWixNQUFNLEtBQUs7UUFDWCxhQUFhLEtBQUs7UUFDbEIsVUFBVSxLQUFLLFFBQVEsU0FBUyxLQUFLLEtBQUs7UUFDMUMsZ0JBQWdCLEtBQUssUUFBUSxlQUFlLEtBQUssV0FBVztRQUM1RCxXQUFXLEtBQUssUUFBUSxTQUFTLEtBQUssS0FBSztRQUMzQyxjQUFjLEtBQUs7TUFDckI7SUFDRjtFQUNGO0FBQ0Y7QUFsWGEsY0FXSixTQUFTLENBQUNDLFNBQVksUUFBZ0JBLE9BQU07QUFYeEMsY0FhSix3QkFBd0I7RUFDN0I7SUFDRSxXQUFXO0lBQ1gsS0FBSztJQUNMLFNBQVM7SUFDVCxNQUFNLFFBQVEsVUFBVTtBQUV0QixZQUFNLFNBQVM7QUFFZixZQUFNLFlBQVksU0FBUyxjQUFjLEtBQUssQ0FBQ0MsY0FBYUEsVUFBUyxPQUFPO0FBQzVFLFVBQUksU0FBUyxZQUFZLENBQUMsV0FBVztBQUNuQyxlQUFPO01BQ1Q7QUFFQSxhQUFPO0lBQ1Q7RUFDRjtBQUNGO0FBSzZCO0VBQTVCQyxVQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FuQ2hCLGNBbUNrQjtBQUdqQjtFQUFYQSxVQUFTO0dBdENDLGNBc0NDO0FBR2lCO0VBQTVCQSxVQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0F6Q2hCLGNBeUNrQjtBQUdBO0VBQTVCQSxVQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0E1Q2hCLGNBNENrQjtBQUdBO0VBQTVCQSxVQUFTLEVBQUUsTUFBTSxRQUFRLENBQUM7R0EvQ2hCLGNBK0NrQjtBQUdqQjtFQUFYQSxVQUFTO0dBbERDLGNBa0RDO0FBR2dDO0VBQTNDQSxVQUFTLEVBQUUsTUFBTSxTQUFTLFNBQVMsS0FBSyxDQUFDO0dBckQvQixjQXFEaUM7QUFHZTtFQUExREEsVUFBUyxFQUFFLFdBQVcsbUJBQW1CLFNBQVMsS0FBSyxDQUFDO0dBeEQ5QyxjQXdEZ0Q7QUFHQztFQUEzREEsVUFBUyxFQUFFLFdBQVcsb0JBQW9CLFNBQVMsS0FBSyxDQUFDO0dBM0QvQyxjQTJEaUQ7QUFHL0I7RUFBNUJBLFVBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztHQTlEaEIsY0E4RGtCO0FBR2I7RUFBZixhQUFhO0dBakVILGNBaUVLO0FBR0E7RUFBZixhQUFhO0dBcEVILGNBb0VLO0FBeUNSO0VBRFAsU0FBUyxVQUFVO0dBNUdULGNBNkdIO0FBY0E7RUFEUCxTQUFTLGtCQUFrQixFQUFFLElBQUksT0FBTyxDQUFDO0dBMUgvQixjQTJISDtBQVdBO0VBRFAsU0FBUyxtQkFBbUIsRUFBRSxJQUFJLE9BQU8sQ0FBQztHQXJJaEMsY0FzSUg7QUFXQTtFQURQLFNBQVMsTUFBTTtHQWhKTCxjQWlKSDtBQVNBO0VBRFAsU0FBUyxPQUFPO0dBekpOLGNBMEpIO0FBU0E7RUFEUCxTQUFTLFVBQVU7R0FsS1QsY0FtS0g7QUFuS0csZ0JBQU47RUFETixjQUFjLGlCQUFpQjtHQUNuQjsiLAogICJuYW1lcyI6IFsic3R5bGVzIiwgInN0eWxlcyIsICJodG1sIiwgInByb3BlcnR5IiwgImNzcyIsICJzdHlsZXMiLCAiaHRtbCIsICJzdHlsZXMiLCAiaW5zdGFuY2UiLCAicHJvcGVydHkiXQp9Cg==
