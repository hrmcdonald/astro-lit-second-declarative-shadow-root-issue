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
  styles,
  styles5 as styles2,
  styles6 as styles3,
  styles7 as styles4
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/textarea/textarea.element.ts
import { html } from "lit";
import { property, query } from "lit/decorators.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { live } from "lit/directives/live.js";
import { FormControlMixin } from "@open-wc/form-control";
import { selectorFactory } from "@mortar/styles";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90ZXh0YXJlYSIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RleHRhcmVhL3RleHRhcmVhLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tcGxhY2Vob2xkZXItY29sb3I6dmFyKC0tbXRlLWluay0yKTstLWNvbG9yOnZhcigtLW10ZS1pbmstMSk7LS1mb250LXNpemU6MXJlbTstLXRleHRhcmVhLXBhZGRpbmcteDpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKTstLXRleHRhcmVhLXBhZGRpbmcteTp2YXIoLS1tdGUtc3BhY2UteHMpfS5mb3JtLWZpZWxke3BhZGRpbmc6dmFyKC0tbXRlLXNwYWNlLXh4cyl9LnRleHRhcmVhe2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtc2l6ZSk7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtd2VpZ2h0KTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTEtbGluZS1oZWlnaHQpO21pbi1oZWlnaHQ6Y2FsYygxZW0gKyB2YXIoLS10ZXh0YXJlYS1wYWRkaW5nLXkpKjIpO3BhZGRpbmc6dmFyKC0tdGV4dGFyZWEtcGFkZGluZy15KSB2YXIoLS10ZXh0YXJlYS1wYWRkaW5nLXgpO3Jlc2l6ZTp2ZXJ0aWNhbDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3dpZHRoOjEwMCV9LnRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKX0udGV4dGFyZWE6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKX0udGV4dGFyZWE6Zm9jdXN7Ym9yZGVyLXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7b3V0bGluZS1vZmZzZXQ6M3B4fTpob3N0KFt3aXRob3V0TWFudWFsUmVzaXplXSkgLnRleHRhcmVhe3Jlc2l6ZTpub25lfTpob3N0KFt3aXRob3V0Qm9yZGVyXSkgLnRleHRhcmVhe2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudH06aG9zdChbcmVhZG9ubHldKXstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1yZWFkb25seS0zKTstLWZvcm0tZmllbGQtYmFja2dyb3VuZDp2YXIoLS1tdGUtcmVhZG9ubHktMSl9Omhvc3QoW3JlYWRvbmx5XSkgLmlucHV0e2NvbG9yOnZhcigtLW10ZS1yZWFkb25seS00KX06aG9zdChbZGlzYWJsZWRdKXstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC0xKTstLWZvcm0tZmllbGQtYmFja2dyb3VuZDp2YXIoLS1tdGUtZGlzYWJsZWQtMSl9Omhvc3QoW2Rpc2FibGVkXSkgLnRleHRhcmVhe2NvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC00KTtjdXJzb3I6bm90LWFsbG93ZWQ7cmVzaXplOm5vbmV9Omhvc3QoW2Rpc2FibGVkXSkgLnRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyLDpob3N0KFtyZWFkb25seV0pIC50ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtMyk7cmVzaXplOm5vbmV9Omhvc3QoW2Rpc2FibGVkXSkgLnRleHRhcmVhOjpwbGFjZWhvbGRlciw6aG9zdChbcmVhZG9ubHldKSAudGV4dGFyZWE6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC0zKTtyZXNpemU6bm9uZX06aG9zdChbc2l6ZT1zbV0pey0tdGV4dGFyZWEtcGFkZGluZy14OmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14eHMpKTstLXRleHRhcmVhLXBhZGRpbmcteTp2YXIoLS1tdGUtc3BhY2UteHhzKTstLWZvbnQtc2l6ZTowLjg3NXJlbX06aG9zdChbc2l6ZT1sZ10pey0tdGV4dGFyZWEtcGFkZGluZy14OnZhcigtLW10ZS1zcGFjZS1tZCk7LS10ZXh0YXJlYS1wYWRkaW5nLXk6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpOy0tZm9udC1zaXplOjEuMjVyZW19Omhvc3QoW3JhZGl1cz1sZ10pIC5mb3JtLWZpZWxkey0tZm9ybS1maWVsZC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbGcpfWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsVUFBVSxhQUFhO0FBRWhDLFNBQVMsaUJBQWlCO0FBQzFCLFNBQVMsWUFBWTtBQUNyQixTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHVCQUF1QjtBQUNoQyxTQUFTLHdCQUF3Qjs7O0FDUGpDLFNBQVMsV0FBVztBQUFhLElBQU1BLFVBQVM7OztBRDRDaEQsSUFBSSxlQUFlO0FBa0JaLElBQU0sY0FBTixjQUEwQjtFQUMvQjtJQUNFO01BQ0U7UUFDRTtVQUNFO1lBQ0U7Y0FDRTtnQkFDRSxtQkFBbUMsYUFBYTtrQkFDOUMsZ0JBQXFELFVBQVU7Z0JBQ2pFO2NBQ0Y7Y0FDQSxFQUFFLGlCQUFpQixFQUFFO1lBQ3ZCO1VBQ0Y7UUFDRjtNQUNGO0lBQ0Y7RUFDRjtBQUNGLEVBQUU7RUFuQks7O0FB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
