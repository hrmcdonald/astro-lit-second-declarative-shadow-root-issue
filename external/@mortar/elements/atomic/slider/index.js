import {
  styles as styles4
} from "../../chunks/chunk.6MR4SYYT.js";
import "../../chunks/chunk.GTPWW37Y.js";
import "../../chunks/chunk.FQWJN7AO.js";
import "../../chunks/chunk.DYYIIZPZ.js";
import "../../chunks/chunk.K7IFCJCW.js";
import "../../chunks/chunk.AFBGVPX2.js";
import "../../chunks/chunk.FSBXRO6N.js";
import "../../chunks/chunk.5AAXKTSO.js";
import "../../chunks/chunk.D6N6Z2UH.js";
import "../../chunks/chunk.F33MBUAV.js";
import "../../chunks/chunk.SRHT6JKE.js";
import "../../chunks/chunk.CFKDY3QJ.js";
import "../../chunks/chunk.D4QL7DP6.js";
import "../../chunks/chunk.L7F3KXB6.js";
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
  styles5 as styles,
  styles6 as styles2,
  styles7 as styles3
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/slider/slider.element.ts
import { html } from "lit";
import { property, query } from "lit/decorators.js";
import { FormControlMixin } from "@open-wc/form-control";
import { when } from "lit-html/directives/when.js";
import { selectorFactory } from "@mortar/styles";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zbGlkZXIiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsWUFBWTtBQUNyQixTQUFTLFVBQVUsYUFBYTtBQXFCaEMsU0FBUyx3QkFBd0I7QUFNakMsU0FBUyxZQUFZO0FBRXJCLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsZ0JBQWdCO0FBdUVsQixJQUFNLFlBQU4sY0FBd0I7RUFDN0I7SUFDRTtNQUNFO1FBQ0U7VUFDRSxtQkFBaUMsV0FBVztZQUMxQyxnQkFBbUQsVUFBVTtVQUMvRDtRQUNGO01BQ0Y7SUFDRjtFQUNGO0FBQ0YsRUFBRTtFQVpLOztBQWdCc0MsZUFBTztBQUdQLGVBQU87QUFTUCxnQkFBUTtBQUd0QixnQkFBTztBQUd4Qiw0QkFBb0I7QUFHTCxpQkFBeUI7QUFHdkIsMEJBQWlCO0FBR0Ysb0JBQVk7QUFLM0IsMEJBQWtCO0FBSWxCLDZCQUFxQjtBQUdyQiwyQkFBbUI7QUFHcEMsK0JBQStCO0FBR1gsMEJBQWlCLENBQUMsVUFBMEIsR0FBRyxLQUFLO0FBYXBGLFNBQVEsa0JBQWtCOztFQUUxQixNQUFNLG9CQUFvQjtBQUN4QixVQUFNLGtCQUFrQjtBQUN4QixTQUFLLGlCQUFpQixXQUFXLEtBQUssYUFBYTtFQUNyRDtFQUdBLGdCQUFnQjtBQUNkLFFBQUksS0FBSyxRQUFRLEtBQUssS0FBSztBQUN6QixXQUFLLGFBQWEsS0FBSyxlQUFlLEtBQUssR0FBRyxDQUFDO0FBQy9DLFdBQUssa0JBQWtCO0FBQ3ZCO0lBQ0Y7QUFFQSxRQUFJLEtBQUssUUFBUSxLQUFLLEtBQUs7QUFDekIsV0FBSyxhQUFhLEtBQUssZUFBZSxLQUFLLEdBQUcsQ0FBQztBQUMvQyxXQUFLLGtCQUFrQjtBQUN2QjtJQUNGO0FBRUEsUUFBSSxNQUFNLEtBQUssS0FBSyxLQUFLLE9BQU8sS0FBSyxVQUFV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
