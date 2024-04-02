import "../../chunks/chunk.K7IFCJCW.js";
import "../../chunks/chunk.D4QL7DP6.js";
import {
  MteIconRegistryService
} from "../../chunks/chunk.L7F3KXB6.js";
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
} from "../../chunks/chunk.Y4EV6E5D.js";

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
import { mtrIconChevronDown } from "@mortar/icons";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXRpdmUtc2VsZWN0IiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbmF0aXZlLXNlbGVjdC9uYXRpdmUtc2VsZWN0LnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdGl2ZS1zZWxlY3QiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXRpdmUtc2VsZWN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1pbnB1dC1wYWRkaW5nLXk6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpOy0taWNvbi1zaXplOjIwcHg7LS1jb2xvcjp2YXIoLS1tdGUtaW5rLTEpOy0tZm9udC1zaXplOjFyZW07Y29sb3I6dmFyKC0tY29sb3IpO2xpbmUtaGVpZ2h0OjB9Omhvc3QoW3NpemU9c21dKXstLWlucHV0LXBhZGRpbmcteTpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1pY29uLXNpemU6MThweDstLWZvbnQtc2l6ZTowLjg3NXJlbX06aG9zdChbc2l6ZT1sZ10pey0taW5wdXQtcGFkZGluZy15OmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpOy0taWNvbi1zaXplOjIycHg7LS1mb250LXNpemU6MS4yNXJlbX0uc2VsZWN0e2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjA7Ym94LXNpemluZzpib3JkZXItYm94O2NvbG9yOnZhcigtLWNvbG9yKTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtc2l6ZSk7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtd2VpZ2h0KTtoZWlnaHQ6Y2FsYygxZW0gKyB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpKjIpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1saW5lLWhlaWdodCk7bGluZS1oZWlnaHQ6MS4yNTttYXJnaW46MDtvdXRsaW5lOm5vbmU7cGFkZGluZy1yaWdodDoxLjVlbTt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7d2lkdGg6MTAwJX0uc2VsZWN0LXdyYXBwZXJ7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfS5jbGVhcnttYXJnaW4tbGVmdDpjYWxjKHZhcigtLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwKSotMS8yKTttYXJnaW4tcmlnaHQ6Y2FsYyh2YXIoLS1mb3JtLWZpZWxkLWludGVybmFsLWdhcCkqLTEpfS5jaGV2cm9ue2NvbG9yOnZhcigtLWNvbG9yKTtoZWlnaHQ6MS41ZW07cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3dpZHRoOjEuNWVtfTpob3N0KDpmb2N1cyl7b3V0bGluZTpub25lfTpob3N0KFtyZWFkb25seV0pey0tZm9ybS1maWVsZC1ib3JkZXItY29sb3I6dmFyKC0tbXRlLXJlYWRvbmx5LTMpOy0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1yZWFkb25seS0xKX06aG9zdChbcmVhZG9ubHldKSAuY2hldnJvbiw6aG9zdChbcmVhZG9ubHldKSAuc2VsZWN0e2NvbG9yOnZhcigtLW10ZS1yZWFkb25seS00KTtvcGFjaXR5OjF9Omhvc3QoW2Rpc2FibGVkXSkgLmNoZXZyb24sOmhvc3QoW2Rpc2FibGVkXSkgLnNlbGVjdHtjb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtNCk7b3BhY2l0eToxfTpob3N0KFtkaXNhYmxlZF0pey0tZm9ybS1maWVsZC1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTEpOy0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1kaXNhYmxlZC0xKX06aG9zdChbZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSAuc2VsZWN0e2N1cnNvcjpub3QtYWxsb3dlZH06aG9zdCA6OnNsb3R0ZWQobXRlLWljb25bc2xvdD1hcHBlbmRdKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWljb25bc2xvdD1wcmVmaXhdKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWljb25bc2xvdD1wcmVwZW5kXSksOmhvc3QgOjpzbG90dGVkKG10ZS1pY29uW3Nsb3Q9c3VmZml4XSl7aGVpZ2h0OnZhcigtLWljb24tc2l6ZSk7bWluLWhlaWdodDp2YXIoLS1pY29uLXNpemUpO21pbi13aWR0aDp2YXIoLS1pY29uLXNpemUpO3dpZHRoOnZhcigtLWljb24tc2l6ZSl9YDsiLCBudWxsLCBudWxsXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBUyxpQkFBaUI7QUFFMUIsU0FBUyxrQkFBa0IseUJBQXlCO0FBQ3BELFNBQVMsUUFBQUEsYUFBWTtBQUNyQixTQUFTLFlBQUFDLFdBQVUsT0FBTyw2QkFBNkI7QUF3QnZELFNBQVMsY0FBYztBQUN2QixTQUFTLFlBQVk7OztBQzlCckIsU0FBUyxXQUFXO0FBQWEsSUFBTUMsVUFBUzs7O0FDQWhELFNBQVMsT0FBQUMsTUFBSyxZQUFZO0FBRTFCLFNBQVMsZ0JBQWdCO0FBR3pCLElBQUksV0FBVztB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LGdCQWtESztBQUdBO0VBQWYsYUFBYTtHQXJESCxnQkFxREs7QUFHQTtFQUFmLGFBQWE7R0F4REgsZ0JBd0RLO0FBR0E7RUFBZixhQUFhO0dBM0RILGdCQTJESztBQUdRO0VBQXZCLE1BQU0sUUFBUTtHQTlESixnQkE4RGE7QUFNeEI7RUFKQyxzQkFBc0I7SUFDckIsVUFDRTtFQUNKLENBQUM7R0FuRVUsZ0JBb0VYO0FBTWlCO0VBQWhCLE1BQU0sUUFBUTtHQTFFSixnQkEwRU07QUFXVDtFQURQLFNBQVMsT0FBTztHQXBGTixnQkFxRkg7QUFLQTtFQURQLFNBQVMsU0FBUztHQXpGUixnQkEwRkg7QUExRkcsa0JBQU47RUFETixjQUFjLG1CQUFtQjtHQUNyQjsiLAogICJuYW1lcyI6IFsiaHRtbCIsICJwcm9wZXJ0eSIsICJzdHlsZXMiLCAiY3NzIiwgImNzcyIsICJjc3MiLCAiaHRtbCIsICJwcm9wZXJ0eSIsICJ1bmlxdWVJZCIsICJodG1sIiwgImNzcyIsICJwcm9wZXJ0eSIsICJodG1sIiwgInN0eWxlcyIsICJwcm9wZXJ0eSJdCn0K
