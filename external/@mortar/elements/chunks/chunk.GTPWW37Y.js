import {
  MteIconRegistryService
} from "./chunk.L7F3KXB6.js";
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
  innerInputValidators,
  isSsr,
  onUpdate,
  styles,
  styles5 as styles2,
  styles6 as styles3,
  styles7 as styles4
} from "./chunk.Y4EV6E5D.js";

// src/atomic/input/input.element.ts
import { ifDefined } from "lit-html/directives/if-defined.js";
import { FormControlMixin } from "@open-wc/form-control";
import { submit } from "@open-wc/form-helpers";
import { html } from "lit";
import { property, query, state } from "lit/decorators.js";
import { live } from "lit/directives/live.js";

// src/atomic/input/input.styles.ts
import { css } from "lit";
var styles5 = css`:host{--placeholder-color:var(--mte-ink-2);--input-padding-y:calc(var(--mte-space-sm) + var(--mte-space-xxs));--icon-size:20px;--color:var(--mte-ink-1);--font-size:1rem;color:var(--color);line-height:0}:host([size=sm]){--input-padding-y:calc(var(--mte-space-xs) + var(--mte-space-xxs));--icon-size:18px;--font-size:0.875rem}:host([size=lg]){--input-padding-y:calc(var(--mte-space-sm) + var(--mte-space-xs));--icon-size:22px;--font-size:1.25rem}.input{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:none;border-radius:0;color:var(--color);font-size:var(--mte-font-set-body1-font-size);font-size:var(--font-size);font-weight:var(--mte-font-set-body1-font-weight);height:calc(1em + var(--input-padding-y)*2);line-height:var(--mte-font-set-body1-line-height);line-height:1;margin:0;outline:none;padding:0;text-align:inherit;text-decoration:inherit;text-transform:inherit;vertical-align:middle;width:100%}.input::-webkit-date-and-time-value{text-align:left}.clear{margin-left:calc(var(--form-field-internal-gap)*-1/2);margin-right:calc(var(--form-field-internal-gap)*-1)}.input::-moz-placeholder{color:var(--placeholder-color)}.input::placeholder{color:var(--placeholder-color)}:host(:focus){outline:none}:host([readonly]){--form-field-border-color:var(--mte-readonly-3);--form-field-background:var(--mte-readonly-1)}:host([readonly]) .input{color:var(--mte-readonly-4)}:host([disabled]){--form-field-border-color:var(--mte-disabled-1);--form-field-background:var(--mte-disabled-1)}:host([disabled]) .input{color:var(--mte-disabled-4);cursor:not-allowed}:host([disabled]) .input::-moz-placeholder,:host([readonly]) .input::-moz-placeholder{color:var(--mte-disabled-4)}:host([disabled]) .input::placeholder,:host([readonly]) .input::placeholder{color:var(--mte-disabled-4)}:host ::slotted(mte-icon[slot=append]),:host ::slotted(mte-icon[slot=prefix]),:host ::slotted(mte-icon[slot=prepend]),:host ::slotted(mte-icon[slot=suffix]){height:var(--icon-size);min-height:var(--icon-size);min-width:var(--icon-size);width:var(--icon-size)}`;

// src/atomic/input/input.element.ts
import { mtrIconClose } from "@mortar/icons";
MteIconRegistryService.registerIcons([mtrIconClose]);
var nextUniqueId = 0;
var MteInput = class extends TabIndexMixin(
  DisabledMixin(
    DensityMixin(
      FormControlMixin(
        FormFieldMixin(
          FieldsetMixin(
            SlotObserverMixin(
              PresetMixinFactory("MteInput")(
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
    this.id = `mte-input--${nextUniqueId++}`;
    this.type = "text";
    this.name = "";
    this.controlled = false;
    this._value = "";
    this._currentSelection = { start: 0, end: 0 };
    this.placeholder = "";
    this.readonly = false;
    this.required = false;
    this.spellcheck = null;
    this.spellcheckFallback = false;
    this.withoutBorder = false;
    this.dirty = false;
    this.touched = false;
    this.initialized = false;
    /** @ignore */
    this.slotController = new SlotController(this, {
      updateOnChange: ["label", "description", "hint", "error", "prepend", "append"]
    });
    this.handleKeydown = (event) => {
      const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
      if (event.key === "Enter" && !hasModifier && this.form) {
        this.dirty = true;
        submit(this.form);
      }
      this._onKeydown.emit(event);
    };
  }
  set value(value) {
    if (this.controlled) {
      this._value = value;
      if (this.controlElement) {
        this.controlElement.value = value;
        this.controlElement.selectionStart = this.controlElement.selectionEnd = this._pendingSelectionStart ?? value.length;
      }
    } else {
      this._value = value;
    }
  }
  get value() {
    return this._value;
  }
  handleValueChange() {
    this.setValue(this.value);
  }
  handleControlled() {
    if (this.controlled) {
      this.addEventListener("keydown", this.updateCursorPosition);
    } else {
      this.removeEventListener("keydown", this.updateCursorPosition);
    }
  }
  handleType() {
    if (this.type === "text" || this.type === "search") {
      this.spellcheckFallback = true;
      if (this.type === "search") {
        this.addEventListener("keydown", this.handleClearOnEscape);
      }
    } else {
      this.removeEventListener("keydown", this.handleClearOnEscape);
      this.spellcheckFallback = false;
    }
  }
  /** Updates the latest cursorSelection positions used while controlled */
  updateCursorPosition() {
    this._currentSelection = {
      start: this.validationTarget.selectionStart,
      end: this.validationTarget.selectionEnd
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("keydown", this.handleKeydown);
    this.addEventListener("invalid", this.handleInvalid);
    this.internals.form?.addEventListener("submit", (e) => {
      this.reportValidity();
    });
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this.handleType();
    if (document.readyState === "complete") {
      this.setValue(this.value);
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        this.setValue(this.value);
      });
    }
    this.initialized = true;
  }
  /** -- Form control validation overrides -- */
  validityCallback() {
    if (this.initialized) {
      this.dirty = true;
    }
    return this.error || this.validationTarget?.validationMessage;
  }
  reportValidity() {
    this.dirty = true;
    return this.checkValidity();
  }
  valueChangedCallback(value) {
    this.value = value;
  }
  resetFormControl() {
    this.value = "";
    this.dirty = false;
    this.touched = false;
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
  /**
   * Clicks this input
   */
  click() {
    this.validationTarget.click();
  }
  /**
   * Focuses this input
   */
  focus() {
    this.validationTarget.focus();
  }
  /**
   * Blurs this input
   */
  blur() {
    this.validationTarget.blur();
  }
  /**
   * Selects all the text.
   */
  select() {
    this.validationTarget.select();
  }
  /**
   * Sets the start and end positions of the current selection.
   *
   * @param selectionStart The 0-based index of the first selected character. An index greater than the length of the
   *  element's value is treated as pointing to the end of the value.
   * @param selectionEnd The 0-based index of the character after the last selected character. An index greater than
   *  the length of the element's value is treated as pointing to the end of the value.
   * @param [selectionDirection="none"] A string indicating the direction in which the selection is considered to
   *  have been performed.
   */
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    this.validationTarget.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  handleFocus(event) {
    this.focused = !this.readonly && true;
    this._onFocus.emit();
  }
  handleBlur(event) {
    this.touched = true;
    this.focused = !this.readonly && false;
    this._onBlur.emit();
  }
  handleInvalid(event) {
    this.value = event.target.value;
    this._onInvalid.emit({
      value: this.value,
      name: this.name
    });
  }
  handleBeforeInput(event) {
    this._onBeforeInput.emit({
      value: this.value,
      name: this.name,
      data: event.data,
      dataTransfer: event.dataTransfer,
      inputType: event.inputType,
      isComposing: event.isComposing
    });
    if (this.controlled) {
      event.preventDefault();
      const inputType = event.inputType;
      const currentValue = event.target.value;
      const inputText = event.data || "";
      const { start, end } = this._currentSelection;
      let newValue;
      let newStart;
      if (start !== end) {
        newValue = currentValue.slice(0, start) + (inputText || "") + currentValue.slice(end);
        newStart = start;
        if (inputType.startsWith("insert"))
          newStart += inputText.length;
      } else if (inputType.startsWith("insert")) {
        newValue = currentValue.slice(0, start) + inputText + currentValue.slice(end);
        newStart = start + inputText.length;
      } else if (inputType === "deleteContentBackward") {
        newStart = Math.max(0, start - 1);
        newValue = currentValue.slice(0, newStart) + currentValue.slice(start);
      } else if (inputType === "deleteContentForward") {
        newValue = currentValue.slice(0, start) + currentValue.slice(start + 1);
        newStart = start;
      } else {
        newValue = currentValue;
        newStart = start;
      }
      this._pendingSelectionStart = newStart;
      this._onInput.emit({
        value: newValue,
        name: this.name,
        data: event.data,
        dataTransfer: event.dataTransfer,
        inputType: event.inputType,
        isComposing: event.isComposing
      });
    }
  }
  handleInput(event) {
    if (!this.controlled) {
      this.value = event.target.value;
      this._onInput.emit({
        value: this.value,
        name: this.name,
        data: event.data,
        dataTransfer: event.dataTransfer,
        inputType: event.inputType,
        isComposing: event.isComposing
      });
    }
  }
  /** Handles the internal input's change events */
  handleChange(event) {
    this.value = event.target.value;
    this.dirty = true;
    this._onChange.emit({
      value: this.value,
      name: this.name
    });
  }
  /** Handles `keydown` events to clear while type="search" */
  handleClearOnEscape(e) {
    if (e.key === "Escape") {
      this.handleClear();
    }
  }
  /** Handles clear events while type="search" */
  handleClear(e) {
    if (e) {
      e.preventDefault();
    }
    const notPrevented = this._onSearchClear.emit(void 0, { cancelable: true });
    if (notPrevented) {
      if (!this.controlled) {
        this.value = "";
      }
      this._onInput.emit({
        value: "",
        name: this.name,
        data: "",
        dataTransfer: null,
        inputType: "",
        isComposing: false
      });
    }
  }
  render() {
    const validity = isSsr() ? true : this.checkValidity();
    const nativeErrorMessage = !validity ? this.validationMessage : null;
    const hasDescription = this.hasSlot("description", this.description);
    const hasHint = this.hasSlot("hint", this.hint);
    const hasError = this.hasSlot("error", this.error);
    const showError = hasError || nativeErrorMessage && this.dirty && this.touched;
    const describedBy = `${hasDescription ? "description" : ""} ${!hasError && hasHint ? "hint" : ""}${hasError ? "error" : ""}`.trim();
    const spellcheck = this.spellcheck ?? this.spellcheckFallback;
    return this.renderFieldsetTemplate(
      this.renderFormFieldTemplate(
        html`<input part="input" id="input" class="input" ?disabled="${this.disabled}" ?readonly="${this.readonly}" ?required="${this.required}" ?autofocus="${this.autofocus}" type="${this.type === "search" ? "text" : this.type}" title="${this.title}" name="${ifDefined(this.name)}" placeholder="${ifDefined(this.readonly ? null : this.placeholder)}" minlength="${ifDefined(this.minlength)}" maxlength="${ifDefined(this.maxlength)}" min="${ifDefined(this.min)}" max="${ifDefined(this.max)}" step="${ifDefined(this.step)}" .value="${live(this.value)}" autocapitalize="${ifDefined(this.type === "password" ? "off" : this.autocapitalize)}" autocomplete="${ifDefined(this.type === "password" ? "off" : this.autocomplete)}" autocorrect="${ifDefined(this.type === "password" ? "off" : this.autocorrect)}" spellcheck="${spellcheck}" pattern="${ifDefined(this.pattern)}" enterkeyhint="${ifDefined(this.enterkeyhint)}" inputmode="${ifDefined(this.inputmode)}" aria-describedby="${ifDefined(describedBy === "" ? void 0 : describedBy)}" aria-invalid="${showError ? "true" : "false"}" @change="${this.handleChange}" @beforeinput="${this.handleBeforeInput}" @input="${this.handleInput}" @focus="${this.handleFocus}" @blur="${this.handleBlur}"> ${this.type === "search" && this.value ? html`<mte-icon-button tabindex="-1" class="clear" icon="close" size="sm" density="compact" @mousedown="${this.handleClear}" aria-hidden="true"></mte-icon-button>` : null}`,
        { disabled: this.disabled, showError: hasError }
      ),
      {},
      { showRequired: this.showRequired ?? this.required }
    );
  }
};
MteInput.styles = [styles4, styles, styles3, styles2, styles5];
/** @ignore */
MteInput.formControlValidators = innerInputValidators;
__decorateClass([
  property({ reflect: true })
], MteInput.prototype, "id", 2);
__decorateClass([
  property({ reflect: true })
], MteInput.prototype, "type", 2);
__decorateClass([
  property({ reflect: true })
], MteInput.prototype, "name", 2);
__decorateClass([
  property({ type: Boolean })
], MteInput.prototype, "controlled", 2);
__decorateClass([
  query("#input")
], MteInput.prototype, "controlElement", 2);
__decorateClass([
  property()
], MteInput.prototype, "value", 1);
__decorateClass([
  property()
], MteInput.prototype, "placeholder", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteInput.prototype, "readonly", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteInput.prototype, "required", 2);
__decorateClass([
  property()
], MteInput.prototype, "pattern", 2);
__decorateClass([
  property({ type: Number })
], MteInput.prototype, "minlength", 2);
__decorateClass([
  property({ type: Number })
], MteInput.prototype, "maxlength", 2);
__decorateClass([
  property({ type: Number })
], MteInput.prototype, "min", 2);
__decorateClass([
  property({ type: Number })
], MteInput.prototype, "max", 2);
__decorateClass([
  property()
], MteInput.prototype, "step", 2);
__decorateClass([
  property()
], MteInput.prototype, "autocapitalize", 2);
__decorateClass([
  property()
], MteInput.prototype, "autocorrect", 2);
__decorateClass([
  property()
], MteInput.prototype, "autocomplete", 2);
__decorateClass([
  property({ type: Boolean })
], MteInput.prototype, "autofocus", 2);
__decorateClass([
  property()
], MteInput.prototype, "enterkeyhint", 2);
__decorateClass([
  property({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (value) => !value || value === "false" ? false : true,
      toAttribute: (value) => {
        if (value) {
          return "true";
        } else if (value === false) {
          return "false";
        } else {
          return null;
        }
      }
    }
  })
], MteInput.prototype, "spellcheck", 2);
__decorateClass([
  property()
], MteInput.prototype, "inputmode", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteInput.prototype, "withoutBorder", 2);
__decorateClass([
  eventEmitter()
], MteInput.prototype, "_onInput", 2);
__decorateClass([
  eventEmitter()
], MteInput.prototype, "_onBeforeInput", 2);
__decorateClass([
  eventEmitter()
], MteInput.prototype, "_onChange", 2);
__decorateClass([
  eventEmitter()
], MteInput.prototype, "_onInvalid", 2);
__decorateClass([
  eventEmitter()
], MteInput.prototype, "_onFocus", 2);
__decorateClass([
  eventEmitter()
], MteInput.prototype, "_onBlur", 2);
__decorateClass([
  eventEmitter()
], MteInput.prototype, "_onKeydown", 2);
__decorateClass([
  eventEmitter()
], MteInput.prototype, "_onSearchClear", 2);
__decorateClass([
  state()
], MteInput.prototype, "dirty", 2);
__decorateClass([
  state()
], MteInput.prototype, "touched", 2);
__decorateClass([
  query("#input")
], MteInput.prototype, "validationTarget", 2);
__decorateClass([
  onUpdate("value")
], MteInput.prototype, "handleValueChange", 1);
__decorateClass([
  onUpdate("controlled")
], MteInput.prototype, "handleControlled", 1);
__decorateClass([
  onUpdate("type")
], MteInput.prototype, "handleType", 1);
MteInput = __decorateClass([
  defineElement("mte-input")
], MteInput);

export {
  MteInput
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2F0b21pYy9pbnB1dCIsICIuLi8uLi8uLi9zcmMvYXRvbWljL2lucHV0L2lucHV0LnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tcGxhY2Vob2xkZXItY29sb3I6dmFyKC0tbXRlLWluay0yKTstLWlucHV0LXBhZGRpbmcteTpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1pY29uLXNpemU6MjBweDstLWNvbG9yOnZhcigtLW10ZS1pbmstMSk7LS1mb250LXNpemU6MXJlbTtjb2xvcjp2YXIoLS1jb2xvcik7bGluZS1oZWlnaHQ6MH06aG9zdChbc2l6ZT1zbV0pey0taW5wdXQtcGFkZGluZy15OmNhbGModmFyKC0tbXRlLXNwYWNlLXhzKSArIHZhcigtLW10ZS1zcGFjZS14eHMpKTstLWljb24tc2l6ZToxOHB4Oy0tZm9udC1zaXplOjAuODc1cmVtfTpob3N0KFtzaXplPWxnXSl7LS1pbnB1dC1wYWRkaW5nLXk6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXhzKSk7LS1pY29uLXNpemU6MjJweDstLWZvbnQtc2l6ZToxLjI1cmVtfS5pbnB1dHtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtc2l6ZSk7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtd2VpZ2h0KTtoZWlnaHQ6Y2FsYygxZW0gKyB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpKjIpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1saW5lLWhlaWdodCk7bGluZS1oZWlnaHQ6MTttYXJnaW46MDtvdXRsaW5lOm5vbmU7cGFkZGluZzowO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt3aWR0aDoxMDAlfS5pbnB1dDo6LXdlYmtpdC1kYXRlLWFuZC10aW1lLXZhbHVle3RleHQtYWxpZ246bGVmdH0uY2xlYXJ7bWFyZ2luLWxlZnQ6Y2FsYyh2YXIoLS1mb3JtLWZpZWxkLWludGVybmFsLWdhcCkqLTEvMik7bWFyZ2luLXJpZ2h0OmNhbGModmFyKC0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXApKi0xKX0uaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpfS5pbnB1dDo6cGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpfTpob3N0KDpmb2N1cyl7b3V0bGluZTpub25lfTpob3N0KFtyZWFkb25seV0pey0tZm9ybS1maWVsZC1ib3JkZXItY29sb3I6dmFyKC0tbXRlLXJlYWRvbmx5LTMpOy0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1yZWFkb25seS0xKX06aG9zdChbcmVhZG9ubHldKSAuaW5wdXR7Y29sb3I6dmFyKC0tbXRlLXJlYWRvbmx5LTQpfTpob3N0KFtkaXNhYmxlZF0pey0tZm9ybS1maWVsZC1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTEpOy0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1kaXNhYmxlZC0xKX06aG9zdChbZGlzYWJsZWRdKSAuaW5wdXR7Y29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTQpO2N1cnNvcjpub3QtYWxsb3dlZH06aG9zdChbZGlzYWJsZWRdKSAuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsOmhvc3QoW3JlYWRvbmx5XSkgLmlucHV0OjotbW96LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC00KX06aG9zdChbZGlzYWJsZWRdKSAuaW5wdXQ6OnBsYWNlaG9sZGVyLDpob3N0KFtyZWFkb25seV0pIC5pbnB1dDo6cGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTQpfTpob3N0IDo6c2xvdHRlZChtdGUtaWNvbltzbG90PWFwcGVuZF0pLDpob3N0IDo6c2xvdHRlZChtdGUtaWNvbltzbG90PXByZWZpeF0pLDpob3N0IDo6c2xvdHRlZChtdGUtaWNvbltzbG90PXByZXBlbmRdKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWljb25bc2xvdD1zdWZmaXhdKXtoZWlnaHQ6dmFyKC0taWNvbi1zaXplKTttaW4taGVpZ2h0OnZhcigtLWljb24tc2l6ZSk7bWluLXdpZHRoOnZhcigtLWljb24tc2l6ZSk7d2lkdGg6dmFyKC0taWNvbi1zaXplKX1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVMsaUJBQWlCO0FBRTFCLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsY0FBYztBQUN2QixTQUFTLFlBQVk7QUFDckIsU0FBUyxVQUFVLE9BQU8sYUFBYTtBQUN2QyxTQUFTLFlBQVk7OztBQ1ByQixTQUFTLFdBQVc7QUFBYSxJQUFNQSxVQUFTOzs7QUQ0Q2hELFNBQVMsb0JBQW9CO0FBRTdCLHVCQUF1QixjQUFjLENBQUMsWUFBWSxDQUFDO0FBeUJuRCxJQUFJLGVBQWU7QUE4QlosSUFBTSxXQUFOLGNBQXVCO0VBQzVCO0lBQ0U7TUFDRTtRQUNFO1VBQ0U7WUFDRTtjQUNFLG1CQUFnQyxVQUFVO2dC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
