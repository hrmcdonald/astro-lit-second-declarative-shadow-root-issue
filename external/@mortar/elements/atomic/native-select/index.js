import "../../chunks/chunk.LWJKRUKG.js";
import "../../chunks/chunk.D4QL7DP6.js";
import {
  MteIconRegistryService,
  mtrIconChevronDown
} from "../../chunks/chunk.M5RJHYFW.js";
import {
  DensityMixin,
  DisabledMixin,
  FieldsetMixin,
  FormFieldMixin,
  MteElement,
  PresetMixinFactory,
  SlotController,
  SlotObserverMixin,
  StylePartsMixin,
  TabIndexMixin,
  __decorateClass,
  defineElement,
  eventEmitter,
  isSsr,
  onUpdate,
  styles,
  styles5 as styles2,
  styles6 as styles3,
  styles7 as styles4
} from "../../chunks/chunk.KVXAK6W4.js";

// src/atomic/native-select/native-select.element.ts
import { ifDefined } from "lit-html/directives/if-defined.js";
import { FormControlMixin, requiredValidator } from "@open-wc/form-control";
import { html as html3 } from "lit";
import { property as property3, query, queryAssignedElements } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { live } from "lit/directives/live.js";

// src/atomic/native-select/native-select.styles.ts
import { css } from "lit";
var styles5 = css`:host{--input-padding-y:calc(var(--mte-space-sm) + var(--mte-space-xxs));--icon-size:20px;--color:var(--mte-ink-1);--font-size:1rem;color:var(--color);line-height:0}:host([size=sm]){--input-padding-y:calc(var(--mte-space-xs) + var(--mte-space-xxs));--icon-size:18px;--font-size:0.875rem}:host([size=lg]){--input-padding-y:calc(var(--mte-space-sm) + var(--mte-space-xs));--icon-size:22px;--font-size:1.25rem}.select{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:none;border-radius:0;box-sizing:border-box;color:var(--color);cursor:pointer;font-size:var(--mte-font-set-body1-font-size);font-size:var(--font-size);font-weight:var(--mte-font-set-body1-font-weight);height:calc(1em + var(--input-padding-y)*2);line-height:var(--mte-font-set-body1-line-height);line-height:1.25;margin:0;outline:none;padding-right:1.5em;text-align:inherit;text-decoration:inherit;text-transform:inherit;vertical-align:middle;width:100%}.select-wrapper{align-items:center;display:flex;position:relative;width:100%}.clear{margin-left:calc(var(--form-field-internal-gap)*-1/2);margin-right:calc(var(--form-field-internal-gap)*-1)}.chevron{color:var(--color);height:1.5em;pointer-events:none;position:absolute;right:0;width:1.5em}:host(:focus){outline:none}:host([readonly]){--form-field-border-color:var(--mte-readonly-3);--form-field-background:var(--mte-readonly-1)}:host([readonly]) .chevron,:host([readonly]) .select{color:var(--mte-readonly-4);opacity:1}:host([disabled]) .chevron,:host([disabled]) .select{color:var(--mte-disabled-4);opacity:1}:host([disabled]){--form-field-border-color:var(--mte-disabled-1);--form-field-background:var(--mte-disabled-1)}:host([disabled]),:host([disabled]) .select{cursor:not-allowed}:host ::slotted(mte-icon[slot=append]),:host ::slotted(mte-icon[slot=prefix]),:host ::slotted(mte-icon[slot=prepend]),:host ::slotted(mte-icon[slot=suffix]){height:var(--icon-size);min-height:var(--icon-size);min-width:var(--icon-size);width:var(--icon-size)}`;

// src/atomic/native-select/native-select-optgroup.element.ts
import { css as css2, html } from "lit";
import { property } from "lit/decorators.js";
var uniqueId = 0;
var MteNativeSelectOptgroup = class extends DisabledMixin(MteElement) {
  constructor() {
    super(...arguments);
    this.id = `mte-native-select-option-group-${uniqueId++}`;
    this.label = "";
    this.onRemoveFns = [];
  }
  willUpdate(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("label") || changedProps.has("disabled")) {
      this._onOptGroupAttributeChange.emit();
    }
  }
  async firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    await this.updateComplete;
    this.shadowRoot.querySelector("slot:not([name])").addEventListener("slotchange", () => this._onOptGroupSlotChange.emit());
  }
  render() {
    return html`<slot></slot>`;
  }
};
MteNativeSelectOptgroup.styles = css2` :host { display: none; } `;
__decorateClass([
  property({ reflect: true })
], MteNativeSelectOptgroup.prototype, "id", 2);
__decorateClass([
  property({ reflect: true })
], MteNativeSelectOptgroup.prototype, "label", 2);
__decorateClass([
  eventEmitter()
], MteNativeSelectOptgroup.prototype, "_onOptGroupAttributeChange", 2);
__decorateClass([
  eventEmitter()
], MteNativeSelectOptgroup.prototype, "_onOptGroupSlotChange", 2);
MteNativeSelectOptgroup = __decorateClass([
  defineElement("mte-native-select-optgroup")
], MteNativeSelectOptgroup);

// src/atomic/native-select/native-select-option.element.ts
import { css as css3, html as html2 } from "lit";
import { property as property2 } from "lit/decorators.js";
var uniqueId2 = 0;
var MteNativeSelectOption = class extends DisabledMixin(MteElement) {
  constructor() {
    super(...arguments);
    this.id = `mte-native-select-option-${uniqueId2++}`;
    this.value = "";
    this.selected = false;
  }
  willUpdate(changedProps) {
    super.willUpdate(changedProps);
    if (this.hasUpdated) {
      if (changedProps.has("value") || changedProps.has("disabled")) {
        this._onOptionAttributeChange.emit();
      }
      if (changedProps.has("selected") && this.selected) {
        this._onOptionSelect.emit();
      }
    }
  }
  async firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    await this.updateComplete;
    this.shadowRoot.querySelector("slot:not([name])").addEventListener("slotchange", () => this._onOptionAttributeChange.emit());
  }
  render() {
    return html2`<slot></slot>`;
  }
};
MteNativeSelectOption.styles = css3` :host { display: none; } `;
__decorateClass([
  property2({ reflect: true })
], MteNativeSelectOption.prototype, "id", 2);
__decorateClass([
  property2({ reflect: true })
], MteNativeSelectOption.prototype, "value", 2);
__decorateClass([
  property2({ reflect: true, type: Boolean })
], MteNativeSelectOption.prototype, "selected", 2);
__decorateClass([
  eventEmitter()
], MteNativeSelectOption.prototype, "_onOptionAttributeChange", 2);
__decorateClass([
  eventEmitter()
], MteNativeSelectOption.prototype, "_onOptionSelect", 2);
MteNativeSelectOption = __decorateClass([
  defineElement("mte-native-select-option")
], MteNativeSelectOption);

// src/atomic/native-select/native-select.element.ts
import { guard } from "lit/directives/guard.js";
MteIconRegistryService.registerIcons([mtrIconChevronDown]);
var nextUniqueId = 0;
var MteNativeSelect = class extends TabIndexMixin(
  DisabledMixin(
    DensityMixin(
      FormControlMixin(
        FormFieldMixin(
          FieldsetMixin(
            SlotObserverMixin(
              PresetMixinFactory("MteNativeSelect")(
                StylePartsMixin(MteElement)
              )
            )
          )
        )
      )
    )
  ),
  { initialTabIndex: 0 }
) {
  constructor() {
    super(...arguments);
    this.id = `mte-select--${nextUniqueId++}`;
    this.options = null;
    this.readonly = false;
    this.required = false;
    this.withoutBorder = false;
    this.name = "";
    this.valueProp = "value";
    this.labelProp = "label";
    this.slottedOptionsSet = /* @__PURE__ */ new Set();
    /** @ignore */
    this.slotController = new SlotController(this, {
      updateOnChange: ["label", "description", "hint", "error", "prepend", "append"]
    });
  }
  handleValueChange() {
    this.setValue(this.value);
  }
  handleOptionsChange() {
    if (this.hasUpdated && !isSsr()) {
      this.refreshSelect();
    }
  }
  validityCallback() {
    return this.error || this.validationTarget?.validationMessage;
  }
  async connectedCallback() {
    super.connectedCallback();
    if (!isSsr()) {
      this.addEventListener("onOptGroupAttributeChange", this.onAttributeChange);
      this.addEventListener("onOptGroupSlotChange", this.onOptGroupSlotChange);
      this.addEventListener("onOptionAttributeChange", this.onAttributeChange);
      this.addEventListener("onOptionSelect", this.onOptionSelect);
    }
    await this.updateComplete;
    this.updateOptions();
    if (typeof this.value === "undefined") {
      this.setFirstValue();
    }
    this.setValue(this.value);
    if (!isSsr()) {
      this.shadowRoot.querySelector("slot:not([name])").addEventListener("slotchange", () => {
        this.refreshSelect();
      });
    }
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    if (document.readyState === "complete") {
      this.setValue(this.value);
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        this.setValue(this.value);
      });
    }
  }
  onOptGroupSlotChange(e) {
    e.preventDefault();
    e.stopPropagation();
    const children = e.target.children;
    const selectedValue = this.findLastSelectedValue(children);
    this.value = selectedValue;
    this.requestUpdate();
  }
  onAttributeChange(e) {
    e.preventDefault();
    e.stopPropagation();
    this.requestUpdate();
  }
  onOptionSelect(e) {
    e.preventDefault();
    e.stopPropagation();
    this.value = e.target.value;
    this.requestUpdate();
  }
  handleChange() {
    if (!this.disabled && !this.readonly) {
      this._onChange.emit({
        name: this.name,
        value: this.value
      });
    }
  }
  handleInput(e) {
    this.value = e.target.value;
    if (!this.disabled && !this.readonly) {
      this._onInput.emit({
        name: this.name,
        value: this.value
      });
    }
  }
  handleFocus() {
    this.focused = !this.readonly && true;
    this._onFocus.emit();
  }
  handleBlur() {
    this.focused = !this.readonly && false;
    this._onBlur.emit();
  }
  setFirstValue() {
    if (this.options) {
      this.value = this.options[0].options ? this.options[0].options[0][this.valueProp] : this.options[0][this.valueProp];
      return;
    }
    const { value: firstElement } = this.slottedOptionsSet.values().next();
    if (this.isOptGroup(firstElement)) {
      const childOptions = firstElement.children[0];
      const firstChild = childOptions[0];
      if (firstChild) {
        this.value = firstChild.value;
      }
      return;
    }
    if (firstElement) {
      this.value = firstElement.value;
    }
  }
  isOptGroup(option) {
    if (option instanceof MteNativeSelectOption) {
      return false;
    }
    return option instanceof MteNativeSelectOptgroup || option?.options;
  }
  updateOptions() {
    if (this.options) {
      this.options.forEach((option) => {
        if (option.selected) {
          this.value = option[this.valueProp];
        }
        if (option.options) {
          const selectedValue = this.findLastSelectedValue(option.options);
          this.value = selectedValue;
        }
      });
      return;
    }
    this.slottedOptionsSet.clear();
    this.childElements.forEach((option) => {
      this.slottedOptionsSet.add(option);
      if (this.isOptGroup(option)) {
        const selectedValue = this.findLastSelectedValue(option.children);
        this.value = selectedValue;
        return;
      }
      if (option instanceof MteNativeSelectOption && option.selected) {
        this.value = option.value;
      }
    });
  }
  // Selects the last selected item if multiple items are selected because this is how an actual select works.
  findLastSelectedValue(children) {
    return [...children].reverse().find(
      (child) => (child instanceof MteNativeSelectOption || child instanceof Option) && child.selected
    )?.[this.valueProp];
  }
  /** -- TabIndex overrides -- */
  getTabIndexAdapter() {
    return this.validationTarget?.getAttribute("tabindex");
  }
  setTabIndexAdapter(value) {
    this.removeAttribute("tabindex");
    this.validationTarget?.setAttribute("tabindex", value);
  }
  removeTabIndexAdapter() {
    this.removeAttribute("tabindex");
    this.validationTarget?.removeAttribute("tabindex");
  }
  /** Refreshes options and potentially sets the selected value whenever the slotted option elements have changed */
  refreshSelect() {
    this.updateOptions();
    if (typeof this.value === "undefined") {
      this.setFirstValue();
    }
    this.requestUpdate();
  }
  resetFormControl() {
    super.resetFormControl?.();
    this.value = void 0;
    this.refreshSelect();
  }
  /** Clicks the element. NOTE: Native select controls cannot be opened programmatically via clicks. */
  click() {
    this.validationTarget.click();
  }
  /** Focuses the element */
  focus() {
    this.validationTarget.focus();
  }
  /** Blurs the element */
  blur() {
    this.validationTarget.blur();
  }
  renderOption(option) {
    const isSelected = option[this.valueProp] === this.value;
    const text = option instanceof MteNativeSelectOption ? option.textContent : option[this.labelProp];
    return guard(
      [option[this.valueProp], option.disabled, isSelected, text],
      () => html3`<option value="${ifDefined(option[this.valueProp])}" ?disabled="${option.disabled}" ?selected="${isSelected}">${text}</option>`
    );
  }
  renderOptgroup(optgroup) {
    return html3`<optgroup ?disabled="${optgroup.disabled}" label="${ifDefined(optgroup.label)}">${optgroup instanceof MteNativeSelectOptgroup ? repeat(
      optgroup.children,
      (option) => option,
      (option) => this.renderOption(option)
    ) : optgroup.options.map((option) => this.renderOption(option))}</optgroup>`;
  }
  renderSelectChildren() {
    if (this.options) {
      return this.options.map((option) => {
        if (option.options) {
          return this.renderOptgroup(option);
        }
        return this.renderOption(option);
      });
    }
    return repeat(
      this.slottedOptionsSet,
      (option) => option,
      (option) => {
        if (option instanceof MteNativeSelectOption) {
          return this.renderOption(option);
        }
        if (option instanceof MteNativeSelectOptgroup) {
          return this.renderOptgroup(option);
        }
        return null;
      }
    );
  }
  render() {
    const validity = isSsr() ? true : this.checkValidity();
    const nativeErrorMessage = !validity ? this.validationMessage : null;
    const hasDescription = this.hasSlot("description", this.description);
    const hasHint = this.hasSlot("hint", this.hint);
    const hasError = this.hasSlot("error", this.error);
    const showError = hasError || nativeErrorMessage;
    const describedBy = `${hasDescription ? "description" : ""} ${!hasError && hasHint ? "hint" : ""}${hasError ? "error" : ""}`.trim();
    return this.renderFieldsetTemplate(
      this.renderFormFieldTemplate(
        html3`${this.instanceStyles}<div class="select-wrapper" part="wrapper"><select part="select" class="select" id="input" ?disabled="${this.disabled || this.readonly}" ?required="${this.required}" ?autofocus="${this.autofocus}" title="${this.title}" name="${ifDefined(this.name)}" .value="${live(this.value)}" aria-describedby="${ifDefined(describedBy === "" ? void 0 : describedBy)}" aria-invalid="${showError ? "true" : "false"}" @change="${this.handleChange}" @input="${this.handleInput}" @focus="${this.handleFocus}" @blur="${this.handleBlur}">${this.renderSelectChildren()}</select><mte-icon part="icon" class="chevron" name="chevron-down"></mte-icon></div><slot></slot>`,
        {
          disabled: this.disabled,
          showError: hasError
        }
      ),
      {},
      { showRequired: this.showRequired ?? this.required }
    );
  }
};
MteNativeSelect.styles = [styles4, styles, styles3, styles2, styles5];
/** @ignore */
MteNativeSelect.formControlValidators = [requiredValidator];
__decorateClass([
  property3({ reflect: true })
], MteNativeSelect.prototype, "id", 2);
__decorateClass([
  property3({ type: Array })
], MteNativeSelect.prototype, "options", 2);
__decorateClass([
  property3({ type: Boolean, reflect: true })
], MteNativeSelect.prototype, "readonly", 2);
__decorateClass([
  property3({ type: Boolean, reflect: true })
], MteNativeSelect.prototype, "required", 2);
__decorateClass([
  property3({ type: Boolean })
], MteNativeSelect.prototype, "autofocus", 2);
__decorateClass([
  property3({ type: Boolean, reflect: true })
], MteNativeSelect.prototype, "withoutBorder", 2);
__decorateClass([
  property3({ reflect: true })
], MteNativeSelect.prototype, "name", 2);
__decorateClass([
  property3()
], MteNativeSelect.prototype, "value", 2);
__decorateClass([
  property3()
], MteNativeSelect.prototype, "valueProp", 2);
__decorateClass([
  property3()
], MteNativeSelect.prototype, "labelProp", 2);
__decorateClass([
  eventEmitter()
], MteNativeSelect.prototype, "_onInput", 2);
__decorateClass([
  eventEmitter()
], MteNativeSelect.prototype, "_onChange", 2);
__decorateClass([
  eventEmitter()
], MteNativeSelect.prototype, "_onFocus", 2);
__decorateClass([
  eventEmitter()
], MteNativeSelect.prototype, "_onBlur", 2);
__decorateClass([
  query("#input")
], MteNativeSelect.prototype, "controlElement", 2);
__decorateClass([
  queryAssignedElements({
    selector: "mte-native-select-optgroup, :not(mte-native-select-optgroup) > mte-native-select-option"
  })
], MteNativeSelect.prototype, "childElements", 2);
__decorateClass([
  query("#input")
], MteNativeSelect.prototype, "validationTarget", 2);
__decorateClass([
  onUpdate("value")
], MteNativeSelect.prototype, "handleValueChange", 1);
__decorateClass([
  onUpdate("options")
], MteNativeSelect.prototype, "handleOptionsChange", 1);
MteNativeSelect = __decorateClass([
  defineElement("mte-native-select")
], MteNativeSelect);
export {
  MteNativeSelect,
  MteNativeSelectOptgroup,
  MteNativeSelectOption
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXRpdmUtc2VsZWN0IiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbmF0aXZlLXNlbGVjdC9uYXRpdmUtc2VsZWN0LnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdGl2ZS1zZWxlY3QiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXRpdmUtc2VsZWN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1pbnB1dC1wYWRkaW5nLXk6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpOy0taWNvbi1zaXplOjIwcHg7LS1jb2xvcjp2YXIoLS1tdGUtaW5rLTEpOy0tZm9udC1zaXplOjFyZW07Y29sb3I6dmFyKC0tY29sb3IpO2xpbmUtaGVpZ2h0OjB9Omhvc3QoW3NpemU9c21dKXstLWlucHV0LXBhZGRpbmcteTpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1pY29uLXNpemU6MThweDstLWZvbnQtc2l6ZTowLjg3NXJlbX06aG9zdChbc2l6ZT1sZ10pey0taW5wdXQtcGFkZGluZy15OmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpOy0taWNvbi1zaXplOjIycHg7LS1mb250LXNpemU6MS4yNXJlbX0uc2VsZWN0e2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjA7Ym94LXNpemluZzpib3JkZXItYm94O2NvbG9yOnZhcigtLWNvbG9yKTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtc2l6ZSk7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtd2VpZ2h0KTtoZWlnaHQ6Y2FsYygxZW0gKyB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpKjIpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1saW5lLWhlaWdodCk7bGluZS1oZWlnaHQ6MS4yNTttYXJnaW46MDtvdXRsaW5lOm5vbmU7cGFkZGluZy1yaWdodDoxLjVlbTt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7d2lkdGg6MTAwJX0uc2VsZWN0LXdyYXBwZXJ7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfS5jbGVhcnttYXJnaW4tbGVmdDpjYWxjKHZhcigtLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwKSotMS8yKTttYXJnaW4tcmlnaHQ6Y2FsYyh2YXIoLS1mb3JtLWZpZWxkLWludGVybmFsLWdhcCkqLTEpfS5jaGV2cm9ue2NvbG9yOnZhcigtLWNvbG9yKTtoZWlnaHQ6MS41ZW07cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3dpZHRoOjEuNWVtfTpob3N0KDpmb2N1cyl7b3V0bGluZTpub25lfTpob3N0KFtyZWFkb25seV0pey0tZm9ybS1maWVsZC1ib3JkZXItY29sb3I6dmFyKC0tbXRlLXJlYWRvbmx5LTMpOy0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1yZWFkb25seS0xKX06aG9zdChbcmVhZG9ubHldKSAuY2hldnJvbiw6aG9zdChbcmVhZG9ubHldKSAuc2VsZWN0e2NvbG9yOnZhcigtLW10ZS1yZWFkb25seS00KTtvcGFjaXR5OjF9Omhvc3QoW2Rpc2FibGVkXSkgLmNoZXZyb24sOmhvc3QoW2Rpc2FibGVkXSkgLnNlbGVjdHtjb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtNCk7b3BhY2l0eToxfTpob3N0KFtkaXNhYmxlZF0pey0tZm9ybS1maWVsZC1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTEpOy0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1kaXNhYmxlZC0xKX06aG9zdChbZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSAuc2VsZWN0e2N1cnNvcjpub3QtYWxsb3dlZH06aG9zdCA6OnNsb3R0ZWQobXRlLWljb25bc2xvdD1hcHBlbmRdKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWljb25bc2xvdD1wcmVmaXhdKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWljb25bc2xvdD1wcmVwZW5kXSksOmhvc3QgOjpzbG90dGVkKG10ZS1pY29uW3Nsb3Q9c3VmZml4XSl7aGVpZ2h0OnZhcigtLWljb24tc2l6ZSk7bWluLWhlaWdodDp2YXIoLS1pY29uLXNpemUpO21pbi13aWR0aDp2YXIoLS1pY29uLXNpemUpO3dpZHRoOnZhcigtLWljb24tc2l6ZSl9YDsiLCBudWxsLCBudWxsXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVMsaUJBQWlCO0FBRTFCLFNBQVMsa0JBQWtCLHlCQUF5QjtBQUNwRCxTQUFTLFFBQUFBLGFBQVk7QUFDckIsU0FBUyxZQUFBQyxXQUFVLE9BQU8sNkJBQTZCO0FBd0J2RCxTQUFTLGNBQWM7QUFDdkIsU0FBUyxZQUFZOzs7QUM5QnJCLFNBQVMsV0FBVztBQUFhLElBQU1DLFVBQVM7OztBQ0FoRCxTQUFTLE9BQUFDLE1BQUssWUFBWTtBQUUxQixTQUFTLGdCQUFnQjtBQUd6QixJQUFJLFdBQVc7QUFHUixJQUFNLDBCQUFOLGNBQXNDLGNBQWMsVUFBVSxFQUFFO0VBQWhFOztBQUV3QixjQUFLLGtDQUFrQyxVQUFVO0FBRWpELGlCQUFRO0FBRXJDLFNBQVEsY0FBYyxDQUFDOztFQWN2QixXQUFXLGNBQTZDO0FBQ3RELFVBQU0sUUFBUSxZQUFZO0FBRTFCLFFBQUksYUFBYSxJQUFJLE9BQU8sS0FBSyxhQUFhLElBQUksVUFBVSxHQUFHO0FBQzdELFdBQUssMkJBQTJCLEtBQUs7SUFDdkM7RUFDRjtFQUVBLE1BQU0sYUFBYSxjQUE2QztBQUM5RCxVQUFNLGFBQWEsWUFBWTtBQUUvQixVQUFNLEtBQUs7QUFFWCxTQUFLLFdBQ0YsY0FBYyxrQkFBa0IsRUFDaEMsaUJBQWlCLGNBQWMsTUFBTSxLQUFLLHNCQUFzQixLQUFLLENBQUM7RUFDM0U7RUFFQSxTQUFTO0FBQ1AsV0FBTztFQUNUO0FBQ0Y7QUF6Q2Esd0JBUUosU0FBU0M7QUFOYTtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FGaEIsd0JBRWtCO0FBRUE7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBSmhCLHdCQUlrQjtBQVdiO0VBQWYsYUFBYTtHQWZILHdCQWVLO0FBR0E7RUFBZixhQUFhO0dBbEJILHdCQWtCSztBQWxCTCwwQkFBTjtFQUROLGNBQWMsNEJBQTRCO0dBQzlCOzs7QUNSYixTQUFTLE9BQUFDLE1BQUssUUFBQUMsYUFBWTtBQUcxQixTQUFTLFlBQUFDLGlCQUFnQjtBQUV6QixJQUFJQyxZQUFXO0FBR1IsSUFBTSx3QkFBTixjQUFvQyxjQUFjLFVBQVUsRUFBRTtFQUE5RDs7QUFFd0IsY0FBSyw0QkFBNEJBLFdBQVU7QUFHM0MsaUJBQVE7QUFHTyxvQkFBVzs7RUFRdkQsV0FBVyxjQUE2QztBQUN0RCxVQUFNLFdBQVcsWUFBWTtBQUU3QixRQUFJLEtBQUssWUFBWTtBQUNuQixVQUFJLGFBQWEsSUFBSSxPQUFPLEtBQUssYUFBYSxJQUFJLFVBQVUsR0FBRztBQUM3RCxhQUFLLHlCQUF5QixLQUFLO01BQ3JDO0FBRUEsVUFBSSxhQUFhLElBQUksVUFBVSxLQUFLLEtBQUssVUFBVTtBQUNqRCxhQUFLLGdCQUFnQixLQUFLO01BQzVCO0lBQ0Y7RUFDRjtFQUVBLE1BQU0sYUFBYSxjQUE2QztBQUM5RCxVQUFNLGFBQWEsWUFBWTtBQUUvQixVQUFNLEtBQUs7QUFFWCxTQUFLLFdBQ0YsY0FBYyxrQkFBa0IsRUFDaEMsaUJBQWlCLGNBQWMsTUFBTSxLQUFLLHlCQUF5QixLQUFLLENBQUM7RUFDOUU7RUFRQSxTQUFTO0FBQ1AsV0FBT0M7RUFDVDtBQUNGO0FBakRhLHNCQXdDSixTQUFTQztBQXRDYTtFQUE1QkMsVUFBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBRmhCLHNCQUVrQjtBQUdBO0VBQTVCQSxVQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FMaEIsc0JBS2tCO0FBR2U7RUFBM0NBLFVBQVMsRUFBRSxTQUFTLE1BQU0sTUFBTSxRQUFRLENBQUM7R0FSL0Isc0JBUWlDO0FBRzVCO0VBQWYsYUFBYTtHQVhILHNCQVdLO0FBR0E7RUFBZixhQUFhO0dBZEgsc0JBY0s7QUFkTCx3QkFBTjtFQUROLGNBQWMsMEJBQTBCO0dBQzVCOzs7QUhvQ2IsU0FBUyxhQUFhO0FBR3RCLHVCQUF1QixjQUFjLENBQUMsa0JBQWtCLENBQUM7QUFvQ3pELElBQUksZUFBZTtBQThCWixJQUFNLGtCQUFOLGNBQThCO0VBQ25DO0lBQ0U7TUFDRTtRQUNFO1VBQ0U7WUFDRTtjQUNFLG1CQUF1QyxpQkFBaUI7Z0JBQ3RELGdCQUF5RCxVQUFVO2NBQ3JFO1lBQ0Y7VUFDRjtRQUNGO01BQ0Y7SUFDRjtFQUNGO0VBQ0EsRUFBRSxpQkFBaUIsRUFBRTtBQUN2QixFQUFFO0VBakJLOztBQW9Cd0IsY0FBSyxlQUFlLGNBQWM7QUFHcEMsbUJBQXVDO0FBR3RCLG9CQUFXO0FBR1gsb0JBQVc7QUFNWCx5QkFBZ0I7QUFHL0IsZ0JBQU87QUFNeEIscUJBQVk7QUFHWixxQkFBWTtBQXVCeEIsU0FBUSxvQkFFSixvQkFBSSxJQUFJO0FBS1o7U0FBUyxpQkFBaUIsSUFBSSxlQUFlLE1BQU07TUFDakQsZ0JBQWdCLENBQUMsU0FBUyxlQUFlLFFBQVEsU0FBUyxXQUFXLFFBQVE7SUFDL0UsQ0FBQzs7RUFNTyxvQkFBb0I7QUFDMUIsU0FBSyxTQUFTLEtBQUssS0FBSztFQUMxQjtFQUdRLHNCQUFzQjtBQUM1QixRQUFJLEtBQUssY0FBYyxDQUFDLE1BQU0sR0FBRztBQUMvQixXQUFLLGNBQWM7SUFDckI7RUFDRjtFQUVBLG1CQUFrQztBQUNoQyxXQUFPLEtBQUssU0FBUyxLQUFLLGtCQUFrQjtFQUM5QztFQUVBLE1BQU0sb0JBQW9CO0FBQ3hCLFVBQU0sa0JBQWtCO0FBRXhCLFFBQUksQ0FBQyxNQUFNLEdBQUc7QUFDWixXQUFLLGlCQUFpQiw2QkFBNkIsS0FBSyxpQkFBaUI7QUFDekUsV0FBSyxpQkFBaUIsd0JBQXdCLEtBQUssb0JBQW9CO0FBQ3ZFLFdBQUssaUJBQWlCLDJCQUEyQixLQUFLLGlCQUFpQjtBQUN2RSxXQUFLLGlCQUFpQixrQkFBa0IsS0FBSyxjQUFjO0lBQzdEO0FBRUEsVUFBTSxLQUFLO0FBRVgsU0FBSyxjQUFjO0FBRW5CLFFBQUksT0FBTyxLQUFLLFVBQVUsYUFBYTtBQUNyQyxXQUFLLGNBQWM7SUFDckI7QUFFQSxTQUFLLFNBQVMsS0FBSyxLQUFLO0FBRXhCLFFBQUksQ0FBQyxNQUFNLEdBQUc7QUFDWixXQUFLLFdBQVcsY0FBYyxrQkFBa0IsRUFBRSxpQkFBaUIsY0FBYyxNQUFNO0FBQ3JGLGFBQUssY0FBYztNQUNyQixDQUFDO0lBQ0g7RUFDRjtFQUVBLGFBQWEsY0FBYztBQUN6QixVQUFNLGFBQWEsWUFBWTtBQUMvQixRQUFJLFNBQVMsZUFBZSxZQUFZO0FBQ3RDLFdBQUssU0FBUyxLQUFLLEtBQUs7SUFDMUIsT0FBTztBQUNMLGVBQVMsaUJBQWlCLG9CQUFvQixNQUFNO0FBQ2xELGFBQUssU0FBUyxLQUFLLEtBQUs7TUFDMUIsQ0FBQztJQUNIO0VBQ0Y7RUFFUSxxQkFBcUIsR0FBZ0I7QUFDM0MsTUFBRSxlQUFlO0FBQ2pCLE1BQUUsZ0JBQWdCO0FBQ2xCLFVBQU0sV0FBWSxFQUFFLE9BQ2pCO0FBQ0gsVUFBTSxnQkFBZ0IsS0FBSyxzQkFBc0IsUUFBUTtBQUN6RCxTQUFLLFFBQVE7QUFDYixTQUFLLGNBQWM7RUFDckI7RUFFUSxrQkFBa0IsR0FBZ0I7QUFDeEMsTUFBRSxlQUFlO0FBQ2pCLE1BQUUsZ0JBQWdCO0FBQ2xCLFNBQUssY0FBYztFQUNyQjtFQUVRLGVBQWUsR0FBZ0I7QUFDckMsTUFBRSxlQUFlO0FBQ2pCLE1BQUUsZ0JBQWdCO0FBQ2xCLFNBQUssUUFBUyxFQUFFLE9BQWlDO0FBQ2pELFNBQUssY0FBYztFQUNyQjtFQUVRLGVBQWU7QUFDckIsUUFBSSxDQUFDLEtBQUssWUFBWSxDQUFDLEtBQUssVUFBVTtBQUNwQyxXQUFLLFVBQVUsS0FBSztRQUNsQixNQUFNLEtBQUs7UUFDWCxPQUFPLEtBQUs7TUFDZCxDQUFDO0lBQ0g7RUFDRjtFQUVRLFlBQVksR0FBVTtBQUM1QixTQUFLLFFBQVMsRUFBRSxPQUE2QjtBQUM3QyxRQUFJLENBQUMsS0FBSyxZQUFZLENBQUMsS0FBSyxVQUFVO0FBQ3BDLFdBQUssU0FBUyxLQUFLO1FBQ2pCLE1BQU0sS0FBSztRQUNYLE9BQU8sS0FBSztNQUNkLENBQUM7SUFDSDtFQUNGO0VBRVEsY0FBYztBQUNwQixTQUFLLFVBQVUsQ0FBQyxLQUFLLFlBQVk7QUFDakMsU0FBSyxTQUFTLEtBQUs7RUFDckI7RUFFUSxhQUFhO0FBQ25CLFNBQUssVUFBVSxDQUFDLEtBQUssWUFBWTtBQUNqQyxTQUFLLFFBQVEsS0FBSztFQUNwQjtFQUVRLGdCQUFnQjtBQUN0QixRQUFJLEtBQUssU0FBUztBQUNoQixXQUFLLFFBQVEsS0FBSyxRQUFRLENBQUMsRUFBRSxVQUN6QixLQUFLLFFBQVEsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEtBQUssU0FBUyxJQUN6QyxLQUFLLFFBQVEsQ0FBQyxFQUFFLEtBQUssU0FBUztBQUNsQztJQUNGO0FBRUEsVUFBTSxFQUFFLE9BQU8sYUFBYSxJQUFJLEtBQUssa0JBQWtCLE9BQU8sRUFBRSxLQUFLO0FBRXJFLFFBQUksS0FBSyxXQUFXLFlBQVksR0FBRztBQUNqQyxZQUFNLGVBQWUsYUFBYSxTQUFTLENBQUM7QUFDNUMsWUFBTSxhQUFhLGFBQWEsQ0FBQztBQUVqQyxVQUFJLFlBQVk7QUFDZCxhQUFLLFFBQVEsV0FBVztNQUMxQjtBQUNBO0lBQ0Y7QUFFQSxRQUFJLGNBQWM7QUFDaEIsV0FBSyxRQUFRLGFBQWE7SUFDNUI7RUFDRjtFQUVRLFdBQ04sUUFDQTtBQUNBLFFBQUksa0JBQWtCLHVCQUF1QjtBQUMzQyxhQUFPO0lBQ1Q7QUFDQSxXQUFPLGtCQUFrQiwyQkFBMkIsUUFBUTtFQUM5RDtFQUVRLGdCQUFnQjtBQUV0QixRQUFJLEtBQUssU0FBUztBQUNoQixXQUFLLFFBQVEsUUFBUSxDQUFDLFdBQVc7QUFDL0IsWUFBSSxPQUFPLFVBQVU7QUFDbkIsZUFBSyxRQUFRLE9BQU8sS0FBSyxTQUFTO1FBQ3BDO0FBRUEsWUFBSSxPQUFPLFNBQVM7QUFFbEIsZ0JBQU0sZ0JBQWdCLEtBQUssc0JBQXNCLE9BQU8sT0FBTztBQUMvRCxlQUFLLFFBQVE7UUFDZjtNQUNGLENBQUM7QUFDRDtJQUNGO0FBRUEsU0FBSyxrQkFBa0IsTUFBTTtBQUU3QixTQUFLLGNBQWMsUUFBUSxDQUFDLFdBQVc7QUFDckMsV0FBSyxrQkFBa0IsSUFBSSxNQUFNO0FBQ2pDLFVBQUksS0FBSyxXQUFXLE1BQU0sR0FBRztBQUMzQixjQUFNLGdCQUFnQixLQUFLLHNCQUFzQixPQUFPLFFBQVE7QUFDaEUsYUFBSyxRQUFRO0FBQ2I7TUFDRjtBQUVBLFVBQUksa0JBQWtCLHlCQUF5QixPQUFPLFVBQVU7QUFDOUQsYUFBSyxRQUFRLE9BQU87TUFDdEI7SUFDRixDQUFDO0VBQ0g7O0VBR1Esc0JBQXNCLFVBQXdEO0FBQ3BGLFdBQ0UsQ0FBQyxHQUFHLFFBQVEsRUFDVCxRQUFRLEVBQ1I7TUFDQyxDQUFDLFdBQ0UsaUJBQWlCLHlCQUF5QixpQkFBaUIsV0FBVyxNQUFNO0lBQ2pGLElBQ0EsS0FBSyxTQUFTO0VBQ3BCOztFQUdBLHFCQUFxQjtBQUNuQixXQUFPLEtBQUssa0JBQWtCLGFBQWEsVUFBVTtFQUN2RDtFQUVBLG1CQUFtQixPQUFlO0FBQ2hDLFNBQUssZ0JBQWdCLFVBQVU7QUFDL0IsU0FBSyxrQkFBa0IsYUFBYSxZQUFZLEtBQUs7RUFDdkQ7RUFFQSx3QkFBd0I7QUFDdEIsU0FBSyxnQkFBZ0IsVUFBVTtBQUMvQixTQUFLLGtCQUFrQixnQkFBZ0IsVUFBVTtFQUNuRDs7RUFHUSxnQkFBZ0I7QUFDdEIsU0FBSyxjQUFjO0FBRW5CLFFBQUksT0FBTyxLQUFLLFVBQVUsYUFBYTtBQUNyQyxXQUFLLGNBQWM7SUFDckI7QUFFQSxTQUFLLGNBQWM7RUFDckI7RUFFTyxtQkFBeUI7QUFDOUIsVUFBTSxtQkFBbUI7QUFDekIsU0FBSyxRQUFRO0FBQ2IsU0FBSyxjQUFjO0VBQ3JCOztFQUdPLFFBQVE7QUFDYixTQUFLLGlCQUFpQixNQUFNO0VBQzlCOztFQUdPLFFBQVE7QUFDYixTQUFLLGlCQUFpQixNQUFNO0VBQzlCOztFQUdPLE9BQU87QUFDWixTQUFLLGlCQUFpQixLQUFLO0VBQzdCO0VBRVEsYUFBYSxRQUEyRDtBQUM5RSxVQUFNLGFBQWEsT0FBTyxLQUFLLFNBQVMsTUFBTSxLQUFLO0FBQ25ELFVBQU0sT0FDSixrQkFBa0Isd0JBQXdCLE9BQU8sY0FBYyxPQUFPLEtBQUssU0FBUztBQUN0RixXQUFPO01BQ0wsQ0FBQyxPQUFPLEtBQUssU0FBUyxHQUFHLE9BQU8sVUFBVSxZQUFZLElBQUk7TUFDMUQsTUFBTUMsdUJBRU0sVUFBVSxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsZ0JBQzdCLE9BQU8sUUFBUSxnQkFDZixVQUFVLEtBQ3BCLElBQUk7SUFHWjtFQUNGO0VBRVEsZUFBZSxVQUErRDtBQUNwRixXQUFPQSw2QkFDaUIsU0FBUyxRQUFRLFlBQVUsVUFBVSxTQUFTLEtBQUssQ0FBQyxLQUN0RSxvQkFBb0IsMEJBQ2xCO01BQ0UsU0FBUztNQUNULENBQUMsV0FBVztNQUNaLENBQUMsV0FBa0MsS0FBSyxhQUFhLE1BQU07SUFDN0QsSUFDQSxTQUFTLFFBQVEsSUFBSSxDQUFDLFdBQVcsS0FBSyxhQUFhLE1BQU0sQ0FBQyxDQUFDO0VBR3JFO0VBRVEsdUJBQXVCO0FBQzdCLFFBQUksS0FBSyxTQUFTO0FBQ2hCLGFBQU8sS0FBSyxRQUFRLElBQUksQ0FBQyxXQUFXO0FBQ2xDLFlBQUksT0FBTyxTQUFTO0FBQ2xCLGlCQUFPLEtBQUssZUFBZSxNQUFNO1FBQ25DO0FBRUEsZUFBTyxLQUFLLGFBQWEsTUFBTTtNQUNqQyxDQUFDO0lBQ0g7QUFFQSxXQUFPO01BQ0wsS0FBSztNQUNMLENBQUMsV0FBVztNQUNaLENBQUMsV0FBVztBQUNWLFlBQUksa0JBQWtCLHVCQUF1QjtBQUMzQyxpQkFBTyxLQUFLLGFBQWEsTUFBTTtRQUNqQztBQUNBLFlBQUksa0JBQWtCLHlCQUF5QjtBQUM3QyxpQkFBTyxLQUFLLGVBQWUsTUFBTTtRQUNuQztBQUNBLGVBQU87TUFDVDtJQUNGO0VBQ0Y7RUFFQSxTQUFTO0FBQ1AsVUFBTSxXQUFXLE1BQU0sSUFBSSxPQUFPLEtBQUssY0FBYztBQUNyRCxVQUFNLHFCQUFxQixDQUFDLFdBQVcsS0FBSyxvQkFBb0I7QUFDaEUsVUFBTSxpQkFBaUIsS0FBSyxRQUFRLGVBQWUsS0FBSyxXQUFXO0FBQ25FLFVBQU0sVUFBVSxLQUFLLFFBQVEsUUFBUSxLQUFLLElBQUk7QUFDOUMsVUFBTSxXQUFXLEtBQUssUUFBUSxTQUFTLEtBQUssS0FBSztBQUNqRCxVQUFNLFlBQVksWUFBWTtBQUU5QixVQUFNLGNBQWMsR0FBRyxpQkFBaUIsZ0JBQWdCLEVBQUUsSUFDeEQsQ0FBQyxZQUFZLFVBQVUsU0FBUyxFQUNsQyxHQUFHLFdBQVcsVUFBVSxFQUFFLEdBQUcsS0FBSztBQUVsQyxXQUFPLEtBQUs7TUFDVixLQUFLO1FBQ0hBLFFBQU8sS0FBSyxjQUFjLHlHQU1SLEtBQUssWUFBWSxLQUFLLFFBQVEsZ0JBQzlCLEtBQUssUUFBUSxpQkFDWixLQUFLLFNBQVMsWUFFekIsS0FDRyxLQUNMLFdBQ08sVUFBVSxLQUFLLElBQUksQ0FBQyxhQUNsQixLQUFLLEtBQUssS0FBSyxDQUFDLHVCQUNOLFVBQVUsZ0JBQWdCLEtBQUssU0FBWSxXQUFXLENBQUMsbUJBQzNELFlBQVksU0FBUyxPQUFPLGNBQ2pDLEtBQUssWUFBWSxhQUNsQixLQUFLLFdBQVcsYUFDaEIsS0FBSyxXQUFXLFlBQ2pCLEtBQUssVUFBVSxLQUNyQixLQUFLLHFCQUFxQixDQUFDO1FBS25DO1VBQ0UsVUFBVSxLQUFLO1VBQ2YsV0FBVztRQUNiO01BQ0Y7TUFDQSxDQUFDO01BQ0QsRUFBRSxjQUFjLEtBQUssZ0JBQWdCLEtBQUssU0FBUztJQUNyRDtFQUNGO0FBQ0Y7QUF0YWEsZ0JBa0JKLFNBQVMsQ0FBQ0MsU0FBWSxRQUFlQSxTQUFpQkEsU0FBZ0JBLE9BQU07O0FBbEJ4RSxnQkFrRkosd0JBQXdCLENBQUMsaUJBQWlCO0FBOURwQjtFQUE1QkMsVUFBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBcEJoQixnQkFvQmtCO0FBR0Y7RUFBMUJBLFVBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztHQXZCZCxnQkF1QmdCO0FBR2lCO0VBQTNDQSxVQUFTLEVBQUUsTUFBTSxTQUFTLFNBQVMsS0FBSyxDQUFDO0dBMUIvQixnQkEwQmlDO0FBR0E7RUFBM0NBLFVBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0E3Qi9CLGdCQTZCaUM7QUFHZjtFQUE1QkEsVUFBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0dBaENoQixnQkFnQ2tCO0FBR2U7RUFBM0NBLFVBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FuQy9CLGdCQW1DaUM7QUFHZjtFQUE1QkEsVUFBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBdENoQixnQkFzQ2tCO0FBR2pCO0VBQVhBLFVBQVM7R0F6Q0MsZ0JBeUNDO0FBR0E7RUFBWEEsVUFBUztHQTVDQyxnQkE0Q0M7QUFHQTtFQUFYQSxVQUFTO0dBL0NDLGdCQStDQztBQUdJO0VBQWYsYUFBYTtHQWxESCxnQkFrREs7QUFHQTtFQUFmLGFBQWE7R0FyREgsZ0JBcURLO0FBR0E7RUFBZixhQUFhO0dBeERILGdCQXdESztBQUdBO0VBQWYsYUFBYTtHQTNESCxnQkEyREs7QUFHUTtFQUF2QixNQUFNLFFBQVE7R0E5REosZ0JBOERhO0FBTXhCO0VBSkMsc0JBQXNCO0lBQ3JCLFVBQ0U7RUFDSixDQUFDO0dBbkVVLGdCQW9FWDtBQU1pQjtFQUFoQixNQUFNLFFBQVE7R0ExRUosZ0JBMEVNO0FBV1Q7RUFEUCxTQUFTLE9BQU87R0FwRk4sZ0JBcUZIO0FBS0E7RUFEUCxTQUFTLFNBQVM7R0F6RlIsZ0JBMEZIO0FBMUZHLGtCQUFOO0VBRE4sY0FBYyxtQkFBbUI7R0FDckI7IiwKICAibmFtZXMiOiBbImh0bWwiLCAicHJvcGVydHkiLCAic3R5bGVzIiwgImNzcyIsICJjc3MiLCAiY3NzIiwgImh0bWwiLCAicHJvcGVydHkiLCAidW5pcXVlSWQiLCAiaHRtbCIsICJjc3MiLCAicHJvcGVydHkiLCAiaHRtbCIsICJzdHlsZXMiLCAicHJvcGVydHkiXQp9Cg==
