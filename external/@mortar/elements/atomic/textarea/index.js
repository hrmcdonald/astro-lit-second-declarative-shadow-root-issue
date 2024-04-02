import {
  DensityMixin,
  DisabledMixin,
  FieldsetMixin,
  FormFieldMixin,
  MteElement,
  PresetMixinFactory,
  RadiusMixin,
  SlotController,
  SlotObserverMixin,
  StylePartsMixin,
  TabIndexMixin,
  __decorateClass,
  defineElement,
  eventEmitter,
  isValidResizeController,
  onUpdate,
  selectorFactory,
  styles,
  styles5 as styles2,
  styles6 as styles3,
  styles7 as styles4
} from "../../chunks/chunk.KVXAK6W4.js";

// src/atomic/textarea/textarea.element.ts
import { html } from "lit";
import { property, query } from "lit/decorators.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { live } from "lit/directives/live.js";
import { FormControlMixin } from "@open-wc/form-control";
import { ResizeController } from "@lit-labs/observers/resize-controller.js";

// src/atomic/textarea/textarea.styles.ts
import { css } from "lit";
var styles5 = css`:host{--placeholder-color:var(--mte-ink-2);--color:var(--mte-ink-1);--font-size:1rem;--textarea-padding-x:calc(var(--mte-space-sm) + var(--mte-space-xs));--textarea-padding-y:var(--mte-space-xs)}.form-field{padding:var(--mte-space-xxs)}.textarea{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;background:transparent;border:none;border-radius:var(--form-field-radius);color:var(--color);font-size:var(--mte-font-set-body1-font-size);font-size:var(--font-size);font-weight:var(--mte-font-set-body1-font-weight);line-height:var(--mte-font-set-body1-line-height);min-height:calc(1em + var(--textarea-padding-y)*2);padding:var(--textarea-padding-y) var(--textarea-padding-x);resize:vertical;text-decoration:inherit;text-transform:inherit;width:100%}.textarea::-moz-placeholder{color:var(--placeholder-color)}.textarea::placeholder{color:var(--placeholder-color)}.textarea:focus{border-radius:var(--form-field-radius);outline-offset:3px}:host([withoutManualResize]) .textarea{resize:none}:host([withoutBorder]) .textarea{border-color:transparent}:host([readonly]){--form-field-border-color:var(--mte-readonly-3);--form-field-background:var(--mte-readonly-1)}:host([readonly]) .input{color:var(--mte-readonly-4)}:host([disabled]){--form-field-border-color:var(--mte-disabled-1);--form-field-background:var(--mte-disabled-1)}:host([disabled]) .textarea{color:var(--mte-disabled-4);cursor:not-allowed;resize:none}:host([disabled]) .textarea::-moz-placeholder,:host([readonly]) .textarea::-moz-placeholder{color:var(--mte-disabled-3);resize:none}:host([disabled]) .textarea::placeholder,:host([readonly]) .textarea::placeholder{color:var(--mte-disabled-3);resize:none}:host([size=sm]){--textarea-padding-x:calc(var(--mte-space-sm) + var(--mte-space-xxs));--textarea-padding-y:var(--mte-space-xxs);--font-size:0.875rem}:host([size=lg]){--textarea-padding-x:var(--mte-space-md);--textarea-padding-y:calc(var(--mte-space-xs) + var(--mte-space-xxs));--font-size:1.25rem}:host([radius=lg]) .form-field{--form-field-radius:var(--mte-border-radius-lg)}`;

// src/atomic/textarea/textarea.element.ts
var nextUniqueId = 0;
var MteTextarea = class extends FormControlMixin(
  FormFieldMixin(
    FieldsetMixin(
      SlotObserverMixin(
        RadiusMixin(
          DensityMixin(
            TabIndexMixin(
              DisabledMixin(
                PresetMixinFactory("MteTextarea")(
                  StylePartsMixin(MteElement)
                )
              ),
              { initialTabIndex: 0 }
            )
          )
        )
      )
    )
  )
) {
  constructor() {
    super(...arguments);
    this.id = `mte-textarea--${nextUniqueId++}`;
    this.withoutManualResize = false;
    this.autosize = false;
    this.name = "";
    this.placeholder = "";
    this.readonly = false;
    this.required = false;
    this.withoutBorder = false;
    this.title = "";
    this.autocomplete = "off";
    this.rows = 2;
    this.cols = 1;
    this.value = "";
    this.isPressing = false;
    /** @ignore */
    this.slotController = new SlotController(this, {
      updateOnChange: ["label", "description", "hint", "error"]
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.observer = new ResizeController(this, {
      callback: (entries) => {
        if (entries.length === 0) {
          return;
        }
        if (this.isPressing) {
          this.maximumHeight = null;
          this.minimumHeight = null;
          if (this.validationTarget.clientHeight < this.validationTarget.scrollHeight) {
            this.maximumHeight = this.validationTarget.clientHeight;
            return;
          }
          this.minimumHeight = this.validationTarget.scrollHeight;
          return;
        } else {
          this.setTextareaHeight();
        }
      }
    });
    this.updateComplete.then(() => {
      if (this.validationTarget) {
        this.observer?.observe(this.validationTarget);
      }
    });
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this.setTextareaHeight();
    if (document.readyState === "complete") {
      this.setValue(this.value);
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        this.setValue(this.value);
      });
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.validationTarget && isValidResizeController(this.observer)) {
      this.observer?.unobserve(this.validationTarget);
    }
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    let shouldUpdateStyles = false;
    for (const key of changedProps.keys()) {
      if (MteTextarea._styleProps.has(key)) {
        shouldUpdateStyles = true;
        break;
      }
    }
    if (shouldUpdateStyles) {
      let wordSpacing;
      if (this.wordSpacing === "sm") {
        wordSpacing = "-0.05em";
      } else if (this.wordSpacing === "lg") {
        wordSpacing = "0.05em";
      }
      let letterSpacing;
      if (this.letterSpacing === "sm") {
        letterSpacing = "-0.02em";
      } else if (this.letterSpacing === "lg") {
        letterSpacing = "0.02em";
      }
      this.setInstanceStyle("internal-textarea", selectorFactory(":host:host textarea"), {
        "word-break": this.wordBreak,
        "word-spacing": wordSpacing,
        "letter-spacing": letterSpacing,
        "white-space": this.whiteSpace,
        "maxHeight": this.maxh,
        "minHeight": this.minh
      });
    }
  }
  handleInvalid(event) {
    this._onInvalid.emit({
      nativeEvent: event,
      name: this.name,
      value: this.value
    });
  }
  handleFocus() {
    this.focused = !this.readonly && true;
    this._onFocus.emit();
  }
  handleBlur() {
    this.focused = !this.readonly && false;
    this._onBlur.emit();
  }
  handleInput(event) {
    this.value = event.target.value;
    if (!this.disabled && !this.readonly) {
      this._onInput.emit({
        nativeEvent: event,
        name: this.name,
        value: this.value
      });
    }
  }
  handleChange(event) {
    if (!this.disabled && !this.readonly) {
      this.value = event.target.value;
      this._onChange.emit({
        nativeEvent: event,
        name: this.name,
        value: this.value
      });
    }
  }
  handleValueChange() {
    this.setValue(this.value);
  }
  setTextareaHeight() {
    if (!this.autosize) {
      return;
    }
    if (this.maximumHeight && this.validationTarget.clientHeight <= this.maximumHeight) {
      return;
    }
    if (this.minimumHeight !== void 0 && this.minimumHeight >= this.validationTarget.scrollHeight) {
      return;
    }
    this.validationTarget.style.height = "auto";
    this.validationTarget.style.height = `${this.validationTarget.scrollHeight}px`;
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
   * Clicks this element
   */
  click() {
    this.validationTarget.click();
  }
  /**
   * Focuses this element
   */
  focus() {
    this.validationTarget.focus();
  }
  /**
   * Blurs this element
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
  handleMouseDown() {
    this.isPressing = true;
  }
  handleMouseUp() {
    this.isPressing = false;
  }
  render() {
    const hasHint = this.hasSlot("hint", this.hint);
    const hasError = this.hasSlot("error", this.error);
    const hasDescription = this.hasSlot("description", this.description);
    const describedBy = `${hasDescription ? "description" : ""} ${!hasError && hasHint ? "hint" : ""}${hasError ? "error" : ""}`.trim();
    return this.renderFieldsetTemplate(
      this.renderFormFieldTemplate(
        html`<textarea id="input" class="textarea" part="textarea" ?disabled="${this.disabled}" ?readonly="${this.readonly}" ?required="${this.required}" rows="${this.rows}" ?autofocus="${this.autofocus}" name="${ifDefined(this.name)}" title="${this.title}" .value="${live(this.value)}" placeholder="${ifDefined(this.placeholder)}" autocomplete="${ifDefined(this.autocomplete)}" minlength="${ifDefined(this.minLength)}" maxlength="${ifDefined(this.maxLength)}" aria-describedby="${ifDefined(describedBy === "" ? void 0 : describedBy)}" aria-invalid="${hasError ? "true" : "false"}" @change="${this.handleChange}" @input="${this.handleInput}" @focus="${this.handleFocus}" @blur="${this.handleBlur}" @mousedown="${this.handleMouseDown}" @mouseup="${this.handleMouseUp}" @invalid="${this.handleInvalid}"></textarea>`,
        { disabled: this.disabled, showError: hasError, withoutSlots: true }
      ),
      {},
      { showRequired: this.showRequired ?? this.required }
    );
  }
};
MteTextarea.styles = [styles4, styles, styles3, styles2, styles5];
MteTextarea._styleProps = /* @__PURE__ */ new Set([
  "whiteSpace",
  "wordBreak",
  "wordSpacing",
  "letterSpacing",
  "maxh",
  "minh"
]);
__decorateClass([
  property({ reflect: true })
], MteTextarea.prototype, "id", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteTextarea.prototype, "withoutManualResize", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteTextarea.prototype, "autosize", 2);
__decorateClass([
  property({ reflect: true })
], MteTextarea.prototype, "name", 2);
__decorateClass([
  property()
], MteTextarea.prototype, "placeholder", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteTextarea.prototype, "readonly", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteTextarea.prototype, "required", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteTextarea.prototype, "withoutBorder", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MteTextarea.prototype, "minLength", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MteTextarea.prototype, "maxLength", 2);
__decorateClass([
  property()
], MteTextarea.prototype, "title", 2);
__decorateClass([
  property()
], MteTextarea.prototype, "autocapitalize", 2);
__decorateClass([
  property()
], MteTextarea.prototype, "autocomplete", 2);
__decorateClass([
  property({ type: Boolean })
], MteTextarea.prototype, "autofocus", 2);
__decorateClass([
  property({ type: Number })
], MteTextarea.prototype, "rows", 2);
__decorateClass([
  property({ type: Number })
], MteTextarea.prototype, "cols", 2);
__decorateClass([
  property({ reflect: true })
], MteTextarea.prototype, "wordBreak", 2);
__decorateClass([
  property({ reflect: true })
], MteTextarea.prototype, "wordSpacing", 2);
__decorateClass([
  property({ reflect: true })
], MteTextarea.prototype, "letterSpacing", 2);
__decorateClass([
  property({ reflect: true })
], MteTextarea.prototype, "whiteSpace", 2);
__decorateClass([
  property({ reflect: true })
], MteTextarea.prototype, "maxh", 2);
__decorateClass([
  property({ reflect: true })
], MteTextarea.prototype, "minh", 2);
__decorateClass([
  eventEmitter()
], MteTextarea.prototype, "_onInput", 2);
__decorateClass([
  eventEmitter()
], MteTextarea.prototype, "_onChange", 2);
__decorateClass([
  eventEmitter()
], MteTextarea.prototype, "_onInvalid", 2);
__decorateClass([
  eventEmitter()
], MteTextarea.prototype, "_onFocus", 2);
__decorateClass([
  eventEmitter()
], MteTextarea.prototype, "_onBlur", 2);
__decorateClass([
  query("#input")
], MteTextarea.prototype, "controlElement", 2);
__decorateClass([
  query("#input")
], MteTextarea.prototype, "validationTarget", 2);
__decorateClass([
  property()
], MteTextarea.prototype, "value", 2);
__decorateClass([
  onUpdate("value")
], MteTextarea.prototype, "handleValueChange", 1);
__decorateClass([
  onUpdate("value", { on: "both", waitUntilFirstUpdate: true })
], MteTextarea.prototype, "setTextareaHeight", 1);
MteTextarea = __decorateClass([
  defineElement("mte-textarea")
], MteTextarea);
export {
  MteTextarea
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90ZXh0YXJlYSIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RleHRhcmVhL3RleHRhcmVhLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tcGxhY2Vob2xkZXItY29sb3I6dmFyKC0tbXRlLWluay0yKTstLWNvbG9yOnZhcigtLW10ZS1pbmstMSk7LS1mb250LXNpemU6MXJlbTstLXRleHRhcmVhLXBhZGRpbmcteDpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKTstLXRleHRhcmVhLXBhZGRpbmcteTp2YXIoLS1tdGUtc3BhY2UteHMpfS5mb3JtLWZpZWxke3BhZGRpbmc6dmFyKC0tbXRlLXNwYWNlLXh4cyl9LnRleHRhcmVhe2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtc2l6ZSk7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtd2VpZ2h0KTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTEtbGluZS1oZWlnaHQpO21pbi1oZWlnaHQ6Y2FsYygxZW0gKyB2YXIoLS10ZXh0YXJlYS1wYWRkaW5nLXkpKjIpO3BhZGRpbmc6dmFyKC0tdGV4dGFyZWEtcGFkZGluZy15KSB2YXIoLS10ZXh0YXJlYS1wYWRkaW5nLXgpO3Jlc2l6ZTp2ZXJ0aWNhbDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3dpZHRoOjEwMCV9LnRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKX0udGV4dGFyZWE6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKX0udGV4dGFyZWE6Zm9jdXN7Ym9yZGVyLXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7b3V0bGluZS1vZmZzZXQ6M3B4fTpob3N0KFt3aXRob3V0TWFudWFsUmVzaXplXSkgLnRleHRhcmVhe3Jlc2l6ZTpub25lfTpob3N0KFt3aXRob3V0Qm9yZGVyXSkgLnRleHRhcmVhe2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudH06aG9zdChbcmVhZG9ubHldKXstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1yZWFkb25seS0zKTstLWZvcm0tZmllbGQtYmFja2dyb3VuZDp2YXIoLS1tdGUtcmVhZG9ubHktMSl9Omhvc3QoW3JlYWRvbmx5XSkgLmlucHV0e2NvbG9yOnZhcigtLW10ZS1yZWFkb25seS00KX06aG9zdChbZGlzYWJsZWRdKXstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC0xKTstLWZvcm0tZmllbGQtYmFja2dyb3VuZDp2YXIoLS1tdGUtZGlzYWJsZWQtMSl9Omhvc3QoW2Rpc2FibGVkXSkgLnRleHRhcmVhe2NvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC00KTtjdXJzb3I6bm90LWFsbG93ZWQ7cmVzaXplOm5vbmV9Omhvc3QoW2Rpc2FibGVkXSkgLnRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyLDpob3N0KFtyZWFkb25seV0pIC50ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtMyk7cmVzaXplOm5vbmV9Omhvc3QoW2Rpc2FibGVkXSkgLnRleHRhcmVhOjpwbGFjZWhvbGRlciw6aG9zdChbcmVhZG9ubHldKSAudGV4dGFyZWE6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC0zKTtyZXNpemU6bm9uZX06aG9zdChbc2l6ZT1zbV0pey0tdGV4dGFyZWEtcGFkZGluZy14OmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14eHMpKTstLXRleHRhcmVhLXBhZGRpbmcteTp2YXIoLS1tdGUtc3BhY2UteHhzKTstLWZvbnQtc2l6ZTowLjg3NXJlbX06aG9zdChbc2l6ZT1sZ10pey0tdGV4dGFyZWEtcGFkZGluZy14OnZhcigtLW10ZS1zcGFjZS1tZCk7LS10ZXh0YXJlYS1wYWRkaW5nLXk6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpOy0tZm9udC1zaXplOjEuMjVyZW19Omhvc3QoW3JhZGl1cz1sZ10pIC5mb3JtLWZpZWxkey0tZm9ybS1maWVsZC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbGcpfWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsWUFBWTtBQUNyQixTQUFTLFVBQVUsYUFBYTtBQUVoQyxTQUFTLGlCQUFpQjtBQUMxQixTQUFTLFlBQVk7QUFDckIsU0FBUyx3QkFBd0I7QUFFakMsU0FBUyx3QkFBd0I7OztBQ1BqQyxTQUFTLFdBQVc7QUFBYSxJQUFNQSxVQUFTOzs7QUQ0Q2hELElBQUksZUFBZTtBQWtCWixJQUFNLGNBQU4sY0FBMEI7RUFDL0I7SUFDRTtNQUNFO1FBQ0U7VUFDRTtZQUNFO2NBQ0U7Z0JBQ0UsbUJBQW1DLGFBQWE7a0JBQzlDLGdCQUFxRCxVQUFVO2dCQUNqRTtjQUNGO2NBQ0EsRUFBRSxpQkFBaUIsRUFBRTtZQUN2QjtVQUNGO1FBQ0Y7TUFDRjtJQUNGO0VBQ0Y7QUFDRixFQUFFO0VBbkJLOztBQXVCd0IsY0FBSyxpQkFBaUIsY0FBYztBQUdyQiwrQkFBc0I7QUFHdEIsb0JBQVc7QUFHMUIsZ0JBQU87QUFHeEIsdUJBQWM7QUFHa0Isb0JBQVc7QUFHWCxvQkFBVztBQUdYLHlCQUFnQjtBQVNoRCxpQkFBUTtBQVNSLHdCQUE2QjtBQUtiLGdCQUFPO0FBRVAsZ0JBQU87QUE0RHZCLGlCQUFRO0FBSXBCLHNCQUFhO0FBcU9iO1NBQVMsaUJBQWlCLElBQUksZUFBZSxNQUFNO01BQ2pELGdCQUFnQixDQUFDLFNBQVMsZUFBZSxRQUFRLE9BQU87SUFDMUQsQ0FBQzs7RUFsT0Qsb0JBQW9CO0FBQ2xCLFVBQU0sa0JBQWtCO0FBRXhCLFNBQUssV0FBVyxJQUFJLGlCQUFpQixNQUFNO01BQ3pDLFVBQVUsQ0FBQyxZQUFZO0FBQ3JCLFlBQUksUUFBUSxXQUFXLEdBQUc7QUFDeEI7UUFDRjtBQUdBLFlBQUksS0FBSyxZQUFZO0FBQ25CLGVBQUssZ0JBQWdCO0FBQ3JCLGVBQUssZ0JBQWdCO0FBRXJCLGNBQUksS0FBSyxpQkFBaUIsZUFBZSxLQUFLLGlCQUFpQixjQUFjO0FBQzNFLGlCQUFLLGdCQUFnQixLQUFLLGlCQUFpQjtBQUMzQztVQUNGO0FBRUEsZUFBSyxnQkFBZ0IsS0FBSyxpQkFBaUI7QUFDM0M7UUFDRixPQUFPO0FBQ0wsZUFBSyxrQkFBa0I7UUFDekI7TUFDRjtJQUNGLENBQUM7QUFFRCxTQUFLLGVBQWUsS0FBSyxNQUFNO0FBQzdCLFVBQUksS0FBSyxrQkFBa0I7QUFDekIsYUFBSyxVQUFVLFFBQVEsS0FBSyxnQkFBZ0I7TUFDOUM7SUFDRixDQUFDO0VBQ0g7RUFFVSxhQUFhLGNBQWM7QUFDbkMsVUFBTSxhQUFhLFlBQVk7QUFFL0IsU0FBSyxrQkFBa0I7QUFFdkIsUUFBSSxTQUFTLGVBQWUsWUFBWTtBQUN0QyxXQUFLLFNBQVMsS0FBSyxLQUFLO0lBQzFCLE9BQU87QUFDTCxlQUFTLGlCQUFpQixvQkFBb0IsTUFBTTtBQUNsRCxhQUFLLFNBQVMsS0FBSyxLQUFLO01BQzFCLENBQUM7SUFDSDtFQUNGO0VBRUEsdUJBQXVCO0FBQ3JCLFVBQU0scUJBQXFCO0FBRTNCLFFBQUksS0FBSyxvQkFBb0Isd0JBQXdCLEtBQUssUUFBUSxHQUFHO0FBQ25FLFdBQUssVUFBVSxVQUFVLEtBQUssZ0JBQWdCO0lBQ2hEO0VBQ0Y7RUFXVSxxQkFBcUIsY0FBYztBQUMzQyxVQUFNLHFCQUFxQixZQUFZO0FBR3ZDLFFBQUkscUJBQXFCO0FBQ3pCLGVBQVcsT0FBTyxhQUFhLEtBQUssR0FBRztBQUNyQyxVQUFJLFlBQVksWUFBWSxJQUFJLEdBQUcsR0FBRztBQUNwQyw2QkFBcUI7QUFDckI7TUFDRjtJQUNGO0FBRUEsUUFBSSxvQkFBb0I7QUFFdEIsVUFBSTtBQUNKLFVBQUksS0FBSyxnQkFBZ0IsTUFBTTtBQUM3QixzQkFBYztNQUNoQixXQUFXLEtBQUssZ0JBQWdCLE1BQU07QUFDcEMsc0JBQWM7TUFDaEI7QUFFQSxVQUFJO0FBQ0osVUFBSSxLQUFLLGtCQUFrQixNQUFNO0FBQy9CLHdCQUFnQjtNQUNsQixXQUFXLEtBQUssa0JBQWtCLE1BQU07QUFDdEMsd0JBQWdCO01BQ2xCO0FBRUEsV0FBSyxpQkFBaUIscUJBQXFCLGdCQUFnQixxQkFBcUIsR0FBRztRQUNqRixjQUFjLEtBQUs7UUFDbkIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixlQUFlLEtBQUs7UUFDcEIsYUFBYSxLQUFLO1FBQ2xCLGFBQWEsS0FBSztNQUNwQixDQUFDO0lBQ0g7RUFDRjtFQUVPLGNBQWMsT0FBYztBQUNqQyxTQUFLLFdBQVcsS0FBSztNQUNuQixhQUFhO01BQ2IsTUFBTSxLQUFLO01BQ1gsT0FBTyxLQUFLO0lBQ2QsQ0FBQztFQUNIO0VBRVEsY0FBYztBQUNwQixTQUFLLFVBQVUsQ0FBQyxLQUFLLFlBQVk7QUFDakMsU0FBSyxTQUFTLEtBQUs7RUFDckI7RUFFUSxhQUFhO0FBQ25CLFNBQUssVUFBVSxDQUFDLEtBQUssWUFBWTtBQUNqQyxTQUFLLFFBQVEsS0FBSztFQUNwQjtFQUVBLFlBQVksT0FBbUI7QUFDN0IsU0FBSyxRQUFTLE1BQU0sT0FBK0I7QUFDbkQsUUFBSSxDQUFDLEtBQUssWUFBWSxDQUFDLEtBQUssVUFBVTtBQUNwQyxXQUFLLFNBQVMsS0FBSztRQUNqQixhQUFhO1FBQ2IsTUFBTSxLQUFLO1FBQ1gsT0FBTyxLQUFLO01BQ2QsQ0FBQztJQUNIO0VBQ0Y7RUFFQSxhQUFhLE9BQW1CO0FBQzlCLFFBQUksQ0FBQyxLQUFLLFlBQVksQ0FBQyxLQUFLLFVBQVU7QUFDcEMsV0FBSyxRQUFTLE1BQU0sT0FBK0I7QUFDbkQsV0FBSyxVQUFVLEtBQUs7UUFDbEIsYUFBYTtRQUNiLE1BQU0sS0FBSztRQUNYLE9BQU8sS0FBSztNQUNkLENBQUM7SUFDSDtFQUNGO0VBR1Esb0JBQW9CO0FBQzFCLFNBQUssU0FBUyxLQUFLLEtBQUs7RUFDMUI7RUFHUSxvQkFBb0I7QUFDMUIsUUFBSSxDQUFDLEtBQUssVUFBVTtBQUNsQjtJQUNGO0FBR0EsUUFBSSxLQUFLLGlCQUFpQixLQUFLLGlCQUFpQixnQkFBZ0IsS0FBSyxlQUFlO0FBQ2xGO0lBQ0Y7QUFHQSxRQUNFLEtBQUssa0JBQWtCLFVBQ3ZCLEtBQUssaUJBQWlCLEtBQUssaUJBQWlCLGNBQzVDO0FBQ0E7SUFDRjtBQUVBLFNBQUssaUJBQWlCLE1BQU0sU0FBUztBQUNyQyxTQUFLLGlCQUFpQixNQUFNLFNBQVMsR0FBRyxLQUFLLGlCQUFpQixZQUFZO0VBQzVFOztFQUdBLHFCQUFxQjtBQUNuQixXQUFPLEtBQUssa0JBQWtCLGFBQWEsVUFBVTtFQUN2RDtFQUVBLG1CQUFtQixPQUFlO0FBQ2hDLFNBQUssZ0JBQWdCLFVBQVU7QUFDL0IsU0FBSyxrQkFBa0IsYUFBYSxZQUFZLEtBQUs7RUFDdkQ7RUFFQSx3QkFBd0I7QUFDdEIsU0FBSyxnQkFBZ0IsVUFBVTtBQUMvQixTQUFLLGtCQUFrQixnQkFBZ0IsVUFBVTtFQUNuRDs7OztFQUtPLFFBQWM7QUFDbkIsU0FBSyxpQkFBaUIsTUFBTTtFQUM5Qjs7OztFQUtPLFFBQVE7QUFDYixTQUFLLGlCQUFpQixNQUFNO0VBQzlCOzs7O0VBS08sT0FBTztBQUNaLFNBQUssaUJBQWlCLEtBQUs7RUFDN0I7Ozs7RUFLTyxTQUFlO0FBQ3BCLFNBQUssaUJBQWlCLE9BQU87RUFDL0I7RUFFQSxrQkFBa0I7QUFDaEIsU0FBSyxhQUFhO0VBQ3BCO0VBRUEsZ0JBQWdCO0FBQ2QsU0FBSyxhQUFhO0VBQ3BCO0VBT0EsU0FBUztBQUNQLFVBQU0sVUFBVSxLQUFLLFFBQVEsUUFBUSxLQUFLLElBQUk7QUFDOUMsVUFBTSxXQUFXLEtBQUssUUFBUSxTQUFTLEtBQUssS0FBSztBQUNqRCxVQUFNLGlCQUFpQixLQUFLLFFBQVEsZUFBZSxLQUFLLFdBQVc7QUFFbkUsVUFBTSxjQUFjLEdBQUcsaUJBQWlCLGdCQUFnQixFQUFFLElBQ3hELENBQUMsWUFBWSxVQUFVLFNBQVMsRUFDbEMsR0FBRyxXQUFXLFVBQVUsRUFBRSxHQUFHLEtBQUs7QUFFbEMsV0FBTyxLQUFLO01BQ1YsS0FBSztRQUNILHdFQUljLEtBQUssUUFBUSxnQkFDYixLQUFLLFFBQVEsZ0JBQ2IsS0FBSyxRQUFRLFdBQ2xCLEtBQUssSUFBSSxpQkFDSCxLQUFLLFNBQVMsV0FDcEIsVUFBVSxLQUFLLElBQUksQ0FBQyxZQUNuQixLQUFLLEtBQUssYUFDVCxLQUFLLEtBQUssS0FBSyxDQUFDLGtCQUNYLFVBQVUsS0FBSyxXQUFXLENBQUMsbUJBQzFCLFVBQVUsS0FBSyxZQUFZLENBQUMsZ0JBQy9CLFVBQVUsS0FBSyxTQUFTLENBQUMsZ0JBQ3pCLFVBQVUsS0FBSyxTQUFTLENBQUMsdUJBQ2xCLFVBQVUsZ0JBQWdCLEtBQUssU0FBWSxXQUFXLENBQUMsbUJBQzNELFdBQVcsU0FBUyxPQUFPLGNBQ2hDLEtBQUssWUFBWSxhQUNsQixLQUFLLFdBQVcsYUFDaEIsS0FBSyxXQUFXLFlBQ2pCLEtBQUssVUFBVSxpQkFDVixLQUFLLGVBQWUsZUFDdEIsS0FBSyxhQUFhLGVBQ2xCLEtBQUssYUFBYTtRQUMvQixFQUFFLFVBQVUsS0FBSyxVQUFVLFdBQVcsVUFBVSxjQUFjLEtBQUs7TUFDckU7TUFDQSxDQUFDO01BQ0QsRUFBRSxjQUFjLEtBQUssZ0JBQWdCLEtBQUssU0FBUztJQUNyRDtFQUNGO0FBQ0Y7QUF4WmEsWUFvQkosU0FBUyxDQUFDQyxTQUFZLFFBQWVBLFNBQWlCQSxTQUFnQkEsT0FBTTtBQXBCeEUsWUFrTUksY0FBYyxvQkFBSSxJQUFJO0VBQ25DO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNGLENBQUM7QUFsTDRCO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQXZCaEIsWUF1QmtCO0FBR2U7RUFBM0MsU0FBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQTFCL0IsWUEwQmlDO0FBR0E7RUFBM0MsU0FBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQTdCL0IsWUE2QmlDO0FBR2Y7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBaENoQixZQWdDa0I7QUFHakI7RUFBWCxTQUFTO0dBbkNDLFlBbUNDO0FBR2dDO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0F0Qy9CLFlBc0NpQztBQUdBO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0F6Qy9CLFlBeUNpQztBQUdBO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0E1Qy9CLFlBNENpQztBQUdEO0VBQTFDLFNBQVMsRUFBRSxNQUFNLFFBQVEsU0FBUyxLQUFLLENBQUM7R0EvQzlCLFlBK0NnQztBQUdBO0VBQTFDLFNBQVMsRUFBRSxNQUFNLFFBQVEsU0FBUyxLQUFLLENBQUM7R0FsRDlCLFlBa0RnQztBQUcvQjtFQUFYLFNBQVM7R0FyREMsWUFxREM7QUFHQTtFQUFYLFNBQVM7R0F4REMsWUF3REM7QUFNQTtFQUFYLFNBQVM7R0E5REMsWUE4REM7QUFHaUI7RUFBNUIsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0dBakVoQixZQWlFa0I7QUFFRDtFQUEzQixTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7R0FuRWYsWUFtRWlCO0FBRUE7RUFBM0IsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0dBckVmLFlBcUVpQjtBQUdDO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQXhFaEIsWUF3RWtCO0FBV0E7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBbkZoQixZQW1Ga0I7QUFHQTtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0F0RmhCLFlBc0ZrQjtBQUdBO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQXpGaEIsWUF5RmtCO0FBY0E7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBdkdoQixZQXVHa0I7QUFHQTtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0ExR2hCLFlBMEdrQjtBQUdiO0VBQWYsYUFBYTtHQTdHSCxZQTZHSztBQUdBO0VBQWYsYUFBYTtHQWhISCxZQWdISztBQUdBO0VBQWYsYUFBYTtHQW5ISCxZQW1ISztBQUdBO0VBQWYsYUFBYTtHQXRISCxZQXNISztBQUdBO0VBQWYsYUFBYTtHQXpISCxZQXlISztBQUdRO0VBQXZCLE1BQU0sUUFBUTtHQTVISixZQTRIYTtBQUVQO0VBQWhCLE1BQU0sUUFBUTtHQTlISixZQThITTtBQUdMO0VBQVgsU0FBUztHQWpJQyxZQWlJQztBQTBKSjtFQURQLFNBQVMsT0FBTztHQTFSTixZQTJSSDtBQUtBO0VBRFAsU0FBUyxTQUFTLEVBQUUsSUFBSSxRQUFRLHNCQUFzQixLQUFLLENBQUM7R0EvUmxELFlBZ1NIO0FBaFNHLGNBQU47RUFETixjQUFjLGNBQWM7R0FDaEI7IiwKICAibmFtZXMiOiBbInN0eWxlcyIsICJzdHlsZXMiXQp9Cg==
