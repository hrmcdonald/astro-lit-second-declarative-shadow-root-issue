import {
  MteIconRegistryService,
  mtrIconClose
} from "./chunk.M5RJHYFW.js";
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
} from "./chunk.KVXAK6W4.js";

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2F0b21pYy9pbnB1dCIsICIuLi8uLi8uLi9zcmMvYXRvbWljL2lucHV0L2lucHV0LnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tcGxhY2Vob2xkZXItY29sb3I6dmFyKC0tbXRlLWluay0yKTstLWlucHV0LXBhZGRpbmcteTpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1pY29uLXNpemU6MjBweDstLWNvbG9yOnZhcigtLW10ZS1pbmstMSk7LS1mb250LXNpemU6MXJlbTtjb2xvcjp2YXIoLS1jb2xvcik7bGluZS1oZWlnaHQ6MH06aG9zdChbc2l6ZT1zbV0pey0taW5wdXQtcGFkZGluZy15OmNhbGModmFyKC0tbXRlLXNwYWNlLXhzKSArIHZhcigtLW10ZS1zcGFjZS14eHMpKTstLWljb24tc2l6ZToxOHB4Oy0tZm9udC1zaXplOjAuODc1cmVtfTpob3N0KFtzaXplPWxnXSl7LS1pbnB1dC1wYWRkaW5nLXk6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXhzKSk7LS1pY29uLXNpemU6MjJweDstLWZvbnQtc2l6ZToxLjI1cmVtfS5pbnB1dHtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtc2l6ZSk7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtd2VpZ2h0KTtoZWlnaHQ6Y2FsYygxZW0gKyB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpKjIpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1saW5lLWhlaWdodCk7bGluZS1oZWlnaHQ6MTttYXJnaW46MDtvdXRsaW5lOm5vbmU7cGFkZGluZzowO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt3aWR0aDoxMDAlfS5pbnB1dDo6LXdlYmtpdC1kYXRlLWFuZC10aW1lLXZhbHVle3RleHQtYWxpZ246bGVmdH0uY2xlYXJ7bWFyZ2luLWxlZnQ6Y2FsYyh2YXIoLS1mb3JtLWZpZWxkLWludGVybmFsLWdhcCkqLTEvMik7bWFyZ2luLXJpZ2h0OmNhbGModmFyKC0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXApKi0xKX0uaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpfS5pbnB1dDo6cGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpfTpob3N0KDpmb2N1cyl7b3V0bGluZTpub25lfTpob3N0KFtyZWFkb25seV0pey0tZm9ybS1maWVsZC1ib3JkZXItY29sb3I6dmFyKC0tbXRlLXJlYWRvbmx5LTMpOy0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1yZWFkb25seS0xKX06aG9zdChbcmVhZG9ubHldKSAuaW5wdXR7Y29sb3I6dmFyKC0tbXRlLXJlYWRvbmx5LTQpfTpob3N0KFtkaXNhYmxlZF0pey0tZm9ybS1maWVsZC1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTEpOy0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1kaXNhYmxlZC0xKX06aG9zdChbZGlzYWJsZWRdKSAuaW5wdXR7Y29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTQpO2N1cnNvcjpub3QtYWxsb3dlZH06aG9zdChbZGlzYWJsZWRdKSAuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsOmhvc3QoW3JlYWRvbmx5XSkgLmlucHV0OjotbW96LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC00KX06aG9zdChbZGlzYWJsZWRdKSAuaW5wdXQ6OnBsYWNlaG9sZGVyLDpob3N0KFtyZWFkb25seV0pIC5pbnB1dDo6cGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTQpfTpob3N0IDo6c2xvdHRlZChtdGUtaWNvbltzbG90PWFwcGVuZF0pLDpob3N0IDo6c2xvdHRlZChtdGUtaWNvbltzbG90PXByZWZpeF0pLDpob3N0IDo6c2xvdHRlZChtdGUtaWNvbltzbG90PXByZXBlbmRdKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWljb25bc2xvdD1zdWZmaXhdKXtoZWlnaHQ6dmFyKC0taWNvbi1zaXplKTttaW4taGVpZ2h0OnZhcigtLWljb24tc2l6ZSk7bWluLXdpZHRoOnZhcigtLWljb24tc2l6ZSk7d2lkdGg6dmFyKC0taWNvbi1zaXplKX1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxTQUFTLGlCQUFpQjtBQUUxQixTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLGNBQWM7QUFDdkIsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsVUFBVSxPQUFPLGFBQWE7QUFDdkMsU0FBUyxZQUFZOzs7QUNQckIsU0FBUyxXQUFXO0FBQWEsSUFBTUEsVUFBUzs7O0FEOENoRCx1QkFBdUIsY0FBYyxDQUFDLFlBQVksQ0FBQztBQXlCbkQsSUFBSSxlQUFlO0FBOEJaLElBQU0sV0FBTixjQUF1QjtFQUM1QjtJQUNFO01BQ0U7UUFDRTtVQUNFO1lBQ0U7Y0FDRSxtQkFBZ0MsVUFBVTtnQkFDeEMsZ0JBQWtELFVBQVU7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
