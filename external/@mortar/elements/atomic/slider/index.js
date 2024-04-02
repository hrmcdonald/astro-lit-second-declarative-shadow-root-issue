import {
  styles as styles4
} from "../../chunks/chunk.6MR4SYYT.js";
import "../../chunks/chunk.NJZVQ4PW.js";
import "../../chunks/chunk.FQWJN7AO.js";
import "../../chunks/chunk.W6WAJOJ3.js";
import "../../chunks/chunk.LWJKRUKG.js";
import "../../chunks/chunk.OHVMOSF2.js";
import "../../chunks/chunk.TOU6J7OT.js";
import "../../chunks/chunk.Q54LTJXP.js";
import "../../chunks/chunk.D6N6Z2UH.js";
import "../../chunks/chunk.IVHA27EF.js";
import "../../chunks/chunk.SRHT6JKE.js";
import "../../chunks/chunk.DVRGAMYN.js";
import "../../chunks/chunk.D4QL7DP6.js";
import "../../chunks/chunk.M5RJHYFW.js";
import {
  DisabledMixin,
  FieldsetMixin,
  MteElement,
  PresetMixinFactory,
  SlotObserverMixin,
  StylePartsMixin,
  TabIndexMixin,
  __decorateClass,
  defineElement,
  eventEmitter,
  onUpdate,
  selectorFactory,
  styles5 as styles,
  styles6 as styles2,
  styles7 as styles3
} from "../../chunks/chunk.KVXAK6W4.js";

// src/atomic/slider/slider.element.ts
import { html } from "lit";
import { property, query } from "lit/decorators.js";
import { FormControlMixin } from "@open-wc/form-control";
import { when } from "lit-html/directives/when.js";
import { classMap } from "lit-html/directives/class-map.js";
var MteSlider = class extends TabIndexMixin(
  DisabledMixin(
    FormControlMixin(
      FieldsetMixin(
        SlotObserverMixin(
          PresetMixinFactory("MteSlider")(
            StylePartsMixin(MteElement)
          )
        )
      )
    )
  )
) {
  constructor() {
    super(...arguments);
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.name = "";
    this.numberValueLabel = "Value";
    this.marks = null;
    this.withMarkLabels = false;
    this.readonly = false;
    this.hideValueLabel = false;
    this.withoutValueLabel = false;
    this.withNumberInput = false;
    this.numberInputMinWidth = null;
    this.labelFormatter = (value) => `${value}`;
    this.stepFixedDigits = 0;
  }
  async connectedCallback() {
    super.connectedCallback();
    this.addEventListener("invalid", this.handleInvalid);
  }
  onValueChange() {
    if (this.value < this.min) {
      this.setAllValues(this.getNearestStep(this.min));
      this.updateValueStyles();
      return;
    }
    if (this.value > this.max) {
      this.setAllValues(this.getNearestStep(this.max));
      this.updateValueStyles();
      return;
    }
    if (isNaN(this.value) || typeof this.value !== "number") {
      this.setAllValues(this.getNearestStep(this.defaultValue | this.min));
      this.updateValueStyles();
      return;
    }
    this.setAllValues(this.getNearestStep(this.value));
    this.updateValueStyles();
  }
  async onWithNumberInputChange() {
    await this.updateComplete;
    if (this.withNumberInput) {
      this.setAllValues(this.value);
    }
  }
  onStepIncrementChange() {
    if (this.step === 0) {
      this.step = 1;
    }
    const stringStepIncrement = this.step.toString();
    if (stringStepIncrement.includes(".")) {
      this.stepFixedDigits = stringStepIncrement.split(".")[1].length;
    } else {
      this.stepFixedDigits = 0;
    }
    this.setAllValues(this.getNearestStep(this.value));
  }
  validityCallback() {
    return this.error || this.validationTarget?.validationMessage;
  }
  resetFormControl() {
    if (this.defaultValue) {
      this.setAllValues(this.defaultValue);
    }
  }
  getFixedPointValue(value) {
    return Number.parseFloat(Number(value).toFixed(this.stepFixedDigits));
  }
  getNearestStep(nextValue) {
    const numericValue = this.getFixedPointValue(nextValue);
    return this.getFixedPointValue(Math.round(numericValue / this.step) * this.step);
  }
  setAllValues(value) {
    this.value = value;
    this.setValue(value.toString());
    if (this.withNumberInput) {
      this.setNumericInputValue(this.value);
    }
  }
  handleInput(e) {
    const target = e.target;
    if (this.readonly) {
      target.value = this.value.toString();
      return;
    }
    this.setAllValues(this.getFixedPointValue(target.value));
    this._onInput.emit({ value: this.value, name: this.name });
  }
  handleNumberInput(e) {
    const numericValue = this.getFixedPointValue(e.detail.value);
    if (numericValue < this.min) {
      this.value = this.min;
    } else if (numericValue > this.max) {
      this.value = this.max;
    } else {
      this.value = numericValue;
    }
    this.setValue(this.value.toString());
    this._onInput.emit({ value: this.value, name: this.name });
  }
  handleNumericChange(e) {
    this.value = this.getNearestStep(e.target.value);
    this.setValue(this.value.toString());
    this.setNumericInputValue(this.value);
    this.handleChange();
  }
  handleChange() {
    this._onChange.emit({ value: this.value, name: this.name });
  }
  setNumericInputValue(value) {
    const input = this.shadowRoot?.querySelector("#number-input");
    if (input) {
      input.value = value.toString();
    }
  }
  handleInvalid() {
    this._onInvalid.emit({
      value: this.value,
      name: this.name
    });
  }
  updateValueStyles() {
    const thumbPosition = Math.round((this.value - this.min) / (this.max - this.min) * 100);
    this.setInstanceStyle("input-value-styles", selectorFactory(this.instanceStyleSelectorRoot), {
      "--first-value-position": `${thumbPosition}%`
    });
  }
  render() {
    const hasHint = !!this.hasSlot("hint", this.hint);
    const hasError = !!this.hasSlot("error", this.error);
    const hasDescription = !!this.hasSlot("description", this.description);
    let shouldHideLabel = false;
    if (this.hideValueLabel || this.withoutValueLabel) {
      shouldHideLabel = true;
    }
    return html`${this.instanceStyles}${this.renderFieldsetTemplate(
      html`<div class="range-wrapper"><div id="prefix" class="prefix" part="prefix"><slot name="prefix"></slot></div><div class="range" part="range"><input id="range-value" type="range" list="${this.marks && this.marks.length > 0 ? "marks" : null}" class="range-input" part="rangeInput" @input="${this.handleInput}" @change="${this.handleChange}" value="${this.value}" aria-valuetext="${this.labelFormatter(this.value)}" min="${this.min}" max="${this.max}" step="${this.step}" aria-labelledby="label" aria-describedby="${`${hasHint ? "hint " : ""}${hasError ? "error " : ""}${hasDescription ? "description" : ""}`}" ?disabled="${this.disabled}"> ${this.marks && this.marks.length > 0 ? html`<div role="listbox" class="marks" part="marks" id="marks">${this.marks.map(
        ({ value, label }) => html`<span role="option" class="mark" part="markLabel" value="${value}" style="${`left: ${value}%;`}" data-option-percent="${`${value}%`}">${this.withMarkLabels ? label : null}</span>`
      )}</div>` : null}<div class="thumb-container" part="thumb-container" aria-hidden="true"><div class="thumb first-thumb" part="thumb"></div>${when(
        !shouldHideLabel,
        () => html`<output id="value-input-label" part="value-label" class="value-label">${this.labelFormatter(this.value)}</output>`
      )}</div></div><div id="suffix" class="suffix" part="suffix"><slot name="suffix"></slot></div></div>`
    )} ${this.withNumberInput ? html`<mte-input id="number-input" class="${classMap({
      ["number-input"]: true,
      ["with-description"]: !!this.description,
      ["with-label"]: !!this.label
    })}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" part="numberInput" density="compact" type="number" min="${this.min}" step="${this.step}" max="${this.max}" w="min-content" aria-label="${this.label}" .se="${{
      "--control-min-width": this.numberInputMinWidth || (this.max.toString().length > 2 ? `calc(${this.max.toString().length - 2}ch + 100px)` : "100px")
    }}" @onInput="${this.handleNumberInput}" @onChange="${this.handleNumericChange}">` : null}`;
  }
};
MteSlider.styles = [styles3, styles2, styles, styles4];
__decorateClass([
  property({ type: Number, reflect: true })
], MteSlider.prototype, "min", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MteSlider.prototype, "max", 2);
__decorateClass([
  property({ type: Number })
], MteSlider.prototype, "defaultValue", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MteSlider.prototype, "value", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MteSlider.prototype, "step", 2);
__decorateClass([
  property({ reflect: true })
], MteSlider.prototype, "name", 2);
__decorateClass([
  property()
], MteSlider.prototype, "numberValueLabel", 2);
__decorateClass([
  property({ type: Array })
], MteSlider.prototype, "marks", 2);
__decorateClass([
  property({ type: Boolean })
], MteSlider.prototype, "withMarkLabels", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteSlider.prototype, "readonly", 2);
__decorateClass([
  property({ type: Boolean })
], MteSlider.prototype, "hideValueLabel", 2);
__decorateClass([
  property({ type: Boolean })
], MteSlider.prototype, "withoutValueLabel", 2);
__decorateClass([
  property({ type: Boolean })
], MteSlider.prototype, "withNumberInput", 2);
__decorateClass([
  property()
], MteSlider.prototype, "numberInputMinWidth", 2);
__decorateClass([
  property({ attribute: false })
], MteSlider.prototype, "labelFormatter", 2);
__decorateClass([
  eventEmitter()
], MteSlider.prototype, "_onChange", 2);
__decorateClass([
  eventEmitter()
], MteSlider.prototype, "_onInput", 2);
__decorateClass([
  eventEmitter()
], MteSlider.prototype, "_onInvalid", 2);
__decorateClass([
  query("#input")
], MteSlider.prototype, "validationTarget", 2);
__decorateClass([
  onUpdate(["value", "min", "max", "defaultValue"], { on: "both" })
], MteSlider.prototype, "onValueChange", 1);
__decorateClass([
  onUpdate(["withNumberInput"], { on: "both" })
], MteSlider.prototype, "onWithNumberInputChange", 1);
__decorateClass([
  onUpdate(["step"], { on: "both" })
], MteSlider.prototype, "onStepIncrementChange", 1);
MteSlider = __decorateClass([
  defineElement("mte-slider")
], MteSlider);
export {
  MteSlider
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zbGlkZXIiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLFlBQVk7QUFDckIsU0FBUyxVQUFVLGFBQWE7QUFxQmhDLFNBQVMsd0JBQXdCO0FBTWpDLFNBQVMsWUFBWTtBQUdyQixTQUFTLGdCQUFnQjtBQXVFbEIsSUFBTSxZQUFOLGNBQXdCO0VBQzdCO0lBQ0U7TUFDRTtRQUNFO1VBQ0UsbUJBQWlDLFdBQVc7WUFDMUMsZ0JBQW1ELFVBQVU7VUFDL0Q7UUFDRjtNQUNGO0lBQ0Y7RUFDRjtBQUNGLEVBQUU7RUFaSzs7QUFnQnNDLGVBQU87QUFHUCxlQUFPO0FBU1AsZ0JBQVE7QUFHdEIsZ0JBQU87QUFHeEIsNEJBQW9CO0FBR0wsaUJBQXlCO0FBR3ZCLDBCQUFpQjtBQUdGLG9CQUFZO0FBSzNCLDBCQUFrQjtBQUlsQiw2QkFBcUI7QUFHckIsMkJBQW1CO0FBR3BDLCtCQUErQjtBQUdYLDBCQUFpQixDQUFDLFVBQTBCLEdBQUcsS0FBSztBQWFwRixTQUFRLGtCQUFrQjs7RUFFMUIsTUFBTSxvQkFBb0I7QUFDeEIsVUFBTSxrQkFBa0I7QUFDeEIsU0FBSyxpQkFBaUIsV0FBVyxLQUFLLGFBQWE7RUFDckQ7RUFHQSxnQkFBZ0I7QUFDZCxRQUFJLEtBQUssUUFBUSxLQUFLLEtBQUs7QUFDekIsV0FBSyxhQUFhLEtBQUssZUFBZSxLQUFLLEdBQUcsQ0FBQztBQUMvQyxXQUFLLGtCQUFrQjtBQUN2QjtJQUNGO0FBRUEsUUFBSSxLQUFLLFFBQVEsS0FBSyxLQUFLO0FBQ3pCLFdBQUssYUFBYSxLQUFLLGVBQWUsS0FBSyxHQUFHLENBQUM7QUFDL0MsV0FBSyxrQkFBa0I7QUFDdkI7SUFDRjtBQUVBLFFBQUksTUFBTSxLQUFLLEtBQUssS0FBSyxPQUFPLEtBQUssVUFBVSxVQUFVO0FBQ3ZELFdBQUss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
