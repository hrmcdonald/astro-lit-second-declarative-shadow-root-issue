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

// src/atomic/range-slider/range-slider.element.ts
import { html } from "lit";
import { property, query } from "lit/decorators.js";

// src/atomic/range-slider/range-slider.styles.ts
import { css } from "lit";
var styles5 = css`.range:before{background-image:linear-gradient(to right,var(--track-color) 0,var(--track-color) var(--first-value-position),var(--track-color-filled) var(--first-value-position),var(--track-color-filled) var(--last-value-position),var(--track-color) var(--last-value-position),var(--track-color) 100%)}.range-input:first-of-type{clip-path:inset(0 var(--first-value-clip) 0 0);left:0;overflow:hidden;position:absolute}.range-input:last-of-type{clip-path:inset(0 0 0 var(--last-value-clip));left:0;overflow:hidden;position:absolute}.thumb-container.first-thumb{left:var(--first-value-position)}.thumb-container.last-thumb{left:var(--last-value-position)}.range-input:enabled:active+.thumb-container,.range-input:enabled:focus+.thumb-container{z-index:1}`;

// src/atomic/range-slider/range-slider.element.ts
import { FormControlMixin } from "@open-wc/form-control";
import { when } from "lit-html/directives/when.js";
import { selectorFactory } from "@mortar/styles";
import { classMap } from "lit-html/directives/class-map.js";
var MteRangeSlider = class extends TabIndexMixin(
  DisabledMixin(
    FormControlMixin(
      FieldsetMixin(
        SlotObserverMixin(
          PresetMixinFactory("MteRangeSlider")(
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
    this.value = [0, 100];
    this.step = 1;
    this.name = "";
    this.readonly = false;
    this.hideValueLabel = false;
    this.withNumberInput = false;
    this.marks = null;
    this.withMarkLabels = false;
    this.numberInputMinWidth = null;
    this.labelFormatter = (value) => `${value}`;
    this.numberAriaLabelMin = "Start";
    this.numberAriaValueLabelMax = "End";
    this.startInputAriaLabel = "Start";
    this.endInputAriaLabel = "End";
    this.stepFixedDigits = 0;
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.value) {
      this.value = this.defaultValue || [this.min, this.max];
    }
    this.setValue(JSON.stringify(this.value));
    this.addEventListener("invalid", this.handleInvalid);
  }
  onValueChange() {
    const nextValues = [this.getNearestStep(this.value[0]), this.getNearestStep(this.value[1])];
    if (this.value[0] < this.min) {
      nextValues[0] = this.min;
    }
    if (this.value[1] < this.min) {
      nextValues[1] = this.min;
    }
    if (this.value[0] > this.max) {
      nextValues[0] = this.max;
    }
    if (this.value[1] > this.max) {
      nextValues[1] = this.max;
    }
    if (isNaN(this.value[0]) || typeof this.value[0] !== "number") {
      nextValues[0] = this.getNearestStep(this.defaultValue[0] | this.min);
    }
    if (isNaN(this.value[1]) || typeof this.value[1] !== "number") {
      nextValues[1] = this.getNearestStep(this.defaultValue[1] | this.max);
    }
    this.value = nextValues;
    this.setNumericInputValue(this.value[0], 0);
    this.setNumericInputValue(this.value[1], 1);
    this.updateValueStyles();
    this.setValue(JSON.stringify(this.value));
  }
  async onWithNumberInputChange() {
    await this.updateComplete;
    if (this.withNumberInput) {
      this.setNumericInputValue(this.value[0], 0);
      this.setNumericInputValue(this.value[1], 1);
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
    this.value = [this.getNearestStep(this.value[0]), this.getNearestStep(this.value[1])];
    if (this.withNumberInput) {
      this.setNumericInputValue(this.value[0], 0);
      this.setNumericInputValue(this.value[1], 1);
    }
    this.setValue(JSON.stringify(this.value));
  }
  resetFormControl() {
    if (this.defaultValue) {
      this.value = this.defaultValue;
    }
    this.setValue(JSON.stringify(this.value));
  }
  validityCallback() {
    return this.error || this.validationTarget?.validationMessage;
  }
  getFixedPointValue(value) {
    return Number.parseFloat(Number(value).toFixed(this.stepFixedDigits));
  }
  getNearestStep(nextValue) {
    const numericValue = this.getFixedPointValue(nextValue);
    return this.getFixedPointValue(Math.round(numericValue / this.step) * this.step);
  }
  handleInput(e) {
    const target = e.target;
    const index = Number(target.dataset.index);
    const nextValue = [...this.value];
    nextValue[index] = this.getFixedPointValue(target.value);
    if (this.readonly) {
      target.value = this.value[target.dataset.index];
      return;
    }
    if (index === 0 && nextValue[index] > this.value[1]) {
      nextValue[0] = this.value[1];
    }
    if (index === 1 && nextValue[index] < this.value[0]) {
      nextValue[1] = this.value[0];
    }
    this.value = nextValue;
    this.setValue(JSON.stringify(this.value));
    if (this.withNumberInput) {
      this.setNumericInputValue(nextValue[0], 0);
      this.setNumericInputValue(nextValue[1], 1);
    }
    this._onInput.emit({ value: this.value, name: this.name });
  }
  handleNumberInput(e) {
    e.stopPropagation();
    const nextValue = [...this.value];
    const index = Number(e.target.dataset.index);
    const numericValue = this.getFixedPointValue(e.detail.value);
    nextValue[index] = numericValue;
    this.value = nextValue;
    this.setValue(JSON.stringify(this.value));
    this._onInput.emit({ value: this.value, name: this.name });
  }
  handleNumericChange(e) {
    e.stopPropagation();
    const nextValue = [...this.value];
    const index = Number(e.target.dataset.index);
    const numericValue = this.getFixedPointValue(e.detail.value);
    nextValue[index] = this.getNearestStep(numericValue);
    const minValue = index === 0 ? this.min : this.value[0];
    const maxValue = index === 1 ? this.max : this.value[1];
    if (numericValue >= minValue && numericValue <= maxValue) {
      nextValue[index] = numericValue;
    }
    if (numericValue <= minValue && index === 1) {
      nextValue[index] = minValue;
    }
    if (numericValue >= maxValue && index === 0) {
      nextValue[index] = maxValue;
    }
    this.value = nextValue;
    this.setValue(JSON.stringify(this.value));
    this.setNumericInputValue(this.value[index], index);
    this.handleChange();
  }
  handleChange() {
    this._onChange.emit({ value: this.value, name: this.name });
  }
  setNumericInputValue(value, index) {
    const id = index === 0 ? "#number-input-start" : "#number-input-end";
    const inputElement = this.shadowRoot?.querySelector(id);
    if (inputElement) {
      inputElement.value = value.toString();
    }
  }
  handleInvalid() {
    this._onInvalid.emit({
      value: this.value,
      name: this.name
    });
  }
  updateValueStyles() {
    const leftThumbPosition = Math.round(
      (this.value[0] - this.min) / (this.max - this.min) * 100
    );
    const rightThumbPosition = Math.round(
      (this.value[1] - this.min) / (this.max - this.min) * 100
    );
    this.setInstanceStyle("input-value-styles", selectorFactory(this.instanceStyleSelectorRoot), {
      "--first-value-clip": `${this.min + (rightThumbPosition - leftThumbPosition) / 2}%`,
      "--last-value-clip": `${leftThumbPosition + (rightThumbPosition - leftThumbPosition) / 2}%`,
      "--first-value-position": `${leftThumbPosition}%`,
      "--last-value-position": `${rightThumbPosition}%`
    });
  }
  render() {
    const hasHint = !!this.hasSlot("hint", this.hint);
    const hasError = !!this.hasSlot("error", this.error);
    const hasDescription = !!this.hasSlot("description", this.description);
    return html`${this.instanceStyles}${this.renderFieldsetTemplate(
      html`<div class="range-wrapper"><div id="prefix" class="prefix" part="prefix"><slot name="prefix"></slot></div><div class="range" part="range"><input id="range-value-start" data-index="0" type="range" multiple="multiple" class="range-input" part="rangeInputStart" value="${`${this.value?.[0]}`}" @input="${this.handleInput}" @change="${this.handleChange}" part="rangeInputStart" aria-valuetext="${this.labelFormatter(this.value?.[0])}" ?disabled="${this.disabled}" min="${this.min}" max="${this.max}" step="${this.step}" aria-label="start" aria-labelledby="range-value-start label" aria-describedby="${`${hasHint ? "hint " : ""}${hasError ? "error " : ""}${hasDescription ? "description" : ""}`}"> ${this.marks && this.marks.length > 0 ? html`<div role="listbox" class="marks" part="marks" id="marks">${this.marks.map(
        ({ value, label }) => html`<span role="option" class="mark" part="markLabel" value="${value}" style="${`left: ${value}%;`}" data-option-percent="${`${value}%`}">${this.withMarkLabels ? label : null}</span>`
      )}</div>` : null}<div class="thumb-container first-thumb" part="thumb-container-start"><div class="thumb" part="thumb-start"></div>${when(
        !this.hideValueLabel,
        () => html`<output part="value-label" for="range" aria-hidden="true" class="value-label">${this.labelFormatter(this.value?.[0])}</output>`
      )}</div><input id="range-value-end" type="range" data-index="1" class="range-input" part="rangeInputEnd" value="${`${this.value?.[1]}`}" @input="${this.handleInput}" @change="${this.handleChange}" aria-valuetext="${this.labelFormatter(this.value?.[1])}" ?disabled="${this.disabled}" min="${this.min}" max="${this.max}" step="${this.step}" aria-label="end" aria-labelledby="range-value-end label" aria-describedby="${`${hasHint ? "hint " : ""}${hasError ? "error" : ""}`}"><div class="thumb-container last-thumb" part="thumb-container-end"><div class="thumb" part="thumb-end"></div>${when(
        !this.hideValueLabel,
        () => html`<output aria-hidden="true" part="value-label" for="range-value-end" class="value-label">${this.labelFormatter(this.value?.[1])}</output>`
      )}</div></div><div id="suffix" class="suffix" part="suffix"><slot name="suffix"></slot></div></div>`
    )} ${this.withNumberInput ? html`<mte-visually-hidden><label id="number-input-start-label" for="number-input-start">${this.numberAriaLabelMin || this.startInputAriaLabel} ${this.label}</label></mte-visually-hidden><mte-input class="${classMap({
      ["number-input"]: true,
      ["with-description"]: !!this.description,
      ["with-label"]: !!this.label
    })}" id="number-input-start" aria-labelledby="number-input-start-label" data-index="0" ?disabled="${this.disabled}" ?readonly="${this.readonly}" part="numberInputStart" type="number" density="compact" min="${this.min}" step="${this.step}" max="${this.max}" w="min-content" .se="${{
      "--control-min-width": this.numberInputMinWidth || (this.max.toString().length > 2 ? `calc(${this.max.toString().length - 2}ch + 100px)` : "100px")
    }}" @onInput="${this.handleNumberInput}" @onChange="${this.handleNumericChange}"></mte-input>` : null} ${this.withNumberInput ? html`<mte-visually-hidden><label id="number-input-end-label" for="number-input-end">${this.numberAriaValueLabelMax || this.endInputAriaLabel} ${this.label}</label></mte-visually-hidden><mte-input id="number-input-end" class="${classMap({
      ["number-input"]: true,
      ["with-description"]: !!this.description,
      ["with-label"]: !!this.label
    })}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" data-index="1" part="numberInputEnd" density="compact" type="number" min="${this.min}" step="${this.step}" max="${this.max}" w="min-content" aria-labelledby="number-input-end-label" .se="${{
      "--control-min-width": this.numberInputMinWidth || (this.max.toString().length > 2 ? `calc(${this.max.toString().length - 2}ch + 100px)` : "100px")
    }}" @onInput="${this.handleNumberInput}" @onChange="${this.handleNumericChange}"></mte-input>` : null}`;
  }
};
MteRangeSlider.styles = [styles3, styles2, styles, styles4, styles5];
__decorateClass([
  property({ type: Number, reflect: true })
], MteRangeSlider.prototype, "min", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MteRangeSlider.prototype, "max", 2);
__decorateClass([
  property({ type: Array })
], MteRangeSlider.prototype, "defaultValue", 2);
__decorateClass([
  property({ type: Array, reflect: true })
], MteRangeSlider.prototype, "value", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MteRangeSlider.prototype, "step", 2);
__decorateClass([
  property({ reflect: true })
], MteRangeSlider.prototype, "name", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteRangeSlider.prototype, "readonly", 2);
__decorateClass([
  property({ type: Boolean })
], MteRangeSlider.prototype, "hideValueLabel", 2);
__decorateClass([
  property({ type: Boolean })
], MteRangeSlider.prototype, "withNumberInput", 2);
__decorateClass([
  property({ type: Array })
], MteRangeSlider.prototype, "marks", 2);
__decorateClass([
  property({ type: Boolean })
], MteRangeSlider.prototype, "withMarkLabels", 2);
__decorateClass([
  property()
], MteRangeSlider.prototype, "numberInputMinWidth", 2);
__decorateClass([
  property({ attribute: false })
], MteRangeSlider.prototype, "labelFormatter", 2);
__decorateClass([
  property()
], MteRangeSlider.prototype, "numberAriaLabelMin", 2);
__decorateClass([
  property()
], MteRangeSlider.prototype, "numberAriaValueLabelMax", 2);
__decorateClass([
  property()
], MteRangeSlider.prototype, "startInputAriaLabel", 2);
__decorateClass([
  property()
], MteRangeSlider.prototype, "endInputAriaLabel", 2);
__decorateClass([
  eventEmitter()
], MteRangeSlider.prototype, "_onChange", 2);
__decorateClass([
  eventEmitter()
], MteRangeSlider.prototype, "_onInput", 2);
__decorateClass([
  eventEmitter()
], MteRangeSlider.prototype, "_onInvalid", 2);
__decorateClass([
  query("#range-value-start")
], MteRangeSlider.prototype, "validationTarget", 2);
__decorateClass([
  onUpdate(["value", "min", "max"], { on: "both" })
], MteRangeSlider.prototype, "onValueChange", 1);
__decorateClass([
  onUpdate(["withNumberInput"], { on: "both" })
], MteRangeSlider.prototype, "onWithNumberInputChange", 1);
__decorateClass([
  onUpdate(["step"])
], MteRangeSlider.prototype, "onStepIncrementChange", 1);
MteRangeSlider = __decorateClass([
  defineElement("mte-range-slider")
], MteRangeSlider);
export {
  MteRangeSlider
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9yYW5nZS1zbGlkZXIiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYC5yYW5nZTpiZWZvcmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsdmFyKC0tdHJhY2stY29sb3IpIDAsdmFyKC0tdHJhY2stY29sb3IpIHZhcigtLWZpcnN0LXZhbHVlLXBvc2l0aW9uKSx2YXIoLS10cmFjay1jb2xvci1maWxsZWQpIHZhcigtLWZpcnN0LXZhbHVlLXBvc2l0aW9uKSx2YXIoLS10cmFjay1jb2xvci1maWxsZWQpIHZhcigtLWxhc3QtdmFsdWUtcG9zaXRpb24pLHZhcigtLXRyYWNrLWNvbG9yKSB2YXIoLS1sYXN0LXZhbHVlLXBvc2l0aW9uKSx2YXIoLS10cmFjay1jb2xvcikgMTAwJSl9LnJhbmdlLWlucHV0OmZpcnN0LW9mLXR5cGV7Y2xpcC1wYXRoOmluc2V0KDAgdmFyKC0tZmlyc3QtdmFsdWUtY2xpcCkgMCAwKTtsZWZ0OjA7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlfS5yYW5nZS1pbnB1dDpsYXN0LW9mLXR5cGV7Y2xpcC1wYXRoOmluc2V0KDAgMCAwIHZhcigtLWxhc3QtdmFsdWUtY2xpcCkpO2xlZnQ6MDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGV9LnRodW1iLWNvbnRhaW5lci5maXJzdC10aHVtYntsZWZ0OnZhcigtLWZpcnN0LXZhbHVlLXBvc2l0aW9uKX0udGh1bWItY29udGFpbmVyLmxhc3QtdGh1bWJ7bGVmdDp2YXIoLS1sYXN0LXZhbHVlLXBvc2l0aW9uKX0ucmFuZ2UtaW5wdXQ6ZW5hYmxlZDphY3RpdmUrLnRodW1iLWNvbnRhaW5lciwucmFuZ2UtaW5wdXQ6ZW5hYmxlZDpmb2N1cysudGh1bWItY29udGFpbmVye3otaW5kZXg6MX1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLFlBQVk7QUFDckIsU0FBUyxVQUFVLGFBQWE7OztBQ0RoQyxTQUFTLFdBQVc7QUFBYSxJQUFNQSxVQUFTOzs7QUR1QmhELFNBQVMsd0JBQXdCO0FBTWpDLFNBQVMsWUFBWTtBQUVyQixTQUFTLHVCQUF1QjtBQUNoQyxTQUFTLGdCQUFnQjtBQTZFbEIsSUFBTSxpQkFBTixjQUE2QjtFQUNsQztJQUNFO01BQ0U7UUFDRTtVQUNFLG1CQUFzQyxnQkFBZ0I7WUFDcEQsZ0JBQXdELFVBQVU7VUFDcEU7UUFDRjtNQUNGO0lBQ0Y7RUFDRjtBQUNGLEVBQUU7RUFaSzs7QUFnQnNDLGVBQU87QUFHUCxlQUFPO0FBTVIsaUJBQVEsQ0FBQyxHQUFHLEdBQUc7QUFHZCxnQkFBUTtBQUd0QixnQkFBTztBQUdRLG9CQUFZO0FBRzNCLDBCQUFrQjtBQUdsQiwyQkFBbUI7QUFHckIsaUJBQXlCO0FBR3ZCLDBCQUFpQjtBQUdsQywrQkFBK0I7QUFHWCwwQkFBNkMsQ0FBQyxVQUM1RSxHQUFHLEtBQUs7QUFLRSw4QkFBc0I7QUFLdEIsbUNBQTJCO0FBRzNCLCtCQUF1QjtBQUd2Qiw2QkFBcUI7QUFhakMsU0FBUSxrQkFBa0I7O0VBRTFCLG9CQUEwQjtBQUN4QixVQUFNLGtCQUFrQjtBQUN4QixRQUFJLENBQUMsS0FBSyxPQUFPO0FBQ2YsV0FBSyxRQUFRLEtBQUssZ0JBQWdCLENBQUMsS0FBSyxLQUFLLEtBQUssR0FBRztJQUN2RDtBQUNBLFNBQUssU0FBUyxLQUFLLFVBQVUsS0FBSyxLQUFLLENBQUM7QUFDeEMsU0FBSyxpQkFBaUIsV0FBVyxLQUFLLGFBQWE7RUFDckQ7RUFHQSxnQkFBZ0I7QUFDZCxVQUFNLGFBQWEsQ0FBQyxLQUFLLGVBQWUsS0FBSyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtB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
