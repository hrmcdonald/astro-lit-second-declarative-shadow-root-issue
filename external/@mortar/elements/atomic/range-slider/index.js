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

// src/atomic/range-slider/range-slider.element.ts
import { html } from "lit";
import { property, query } from "lit/decorators.js";

// src/atomic/range-slider/range-slider.styles.ts
import { css } from "lit";
var styles5 = css`.range:before{background-image:linear-gradient(to right,var(--track-color) 0,var(--track-color) var(--first-value-position),var(--track-color-filled) var(--first-value-position),var(--track-color-filled) var(--last-value-position),var(--track-color) var(--last-value-position),var(--track-color) 100%)}.range-input:first-of-type{clip-path:inset(0 var(--first-value-clip) 0 0);left:0;overflow:hidden;position:absolute}.range-input:last-of-type{clip-path:inset(0 0 0 var(--last-value-clip));left:0;overflow:hidden;position:absolute}.thumb-container.first-thumb{left:var(--first-value-position)}.thumb-container.last-thumb{left:var(--last-value-position)}.range-input:enabled:active+.thumb-container,.range-input:enabled:focus+.thumb-container{z-index:1}`;

// src/atomic/range-slider/range-slider.element.ts
import { FormControlMixin } from "@open-wc/form-control";
import { when } from "lit-html/directives/when.js";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9yYW5nZS1zbGlkZXIiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYC5yYW5nZTpiZWZvcmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsdmFyKC0tdHJhY2stY29sb3IpIDAsdmFyKC0tdHJhY2stY29sb3IpIHZhcigtLWZpcnN0LXZhbHVlLXBvc2l0aW9uKSx2YXIoLS10cmFjay1jb2xvci1maWxsZWQpIHZhcigtLWZpcnN0LXZhbHVlLXBvc2l0aW9uKSx2YXIoLS10cmFjay1jb2xvci1maWxsZWQpIHZhcigtLWxhc3QtdmFsdWUtcG9zaXRpb24pLHZhcigtLXRyYWNrLWNvbG9yKSB2YXIoLS1sYXN0LXZhbHVlLXBvc2l0aW9uKSx2YXIoLS10cmFjay1jb2xvcikgMTAwJSl9LnJhbmdlLWlucHV0OmZpcnN0LW9mLXR5cGV7Y2xpcC1wYXRoOmluc2V0KDAgdmFyKC0tZmlyc3QtdmFsdWUtY2xpcCkgMCAwKTtsZWZ0OjA7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlfS5yYW5nZS1pbnB1dDpsYXN0LW9mLXR5cGV7Y2xpcC1wYXRoOmluc2V0KDAgMCAwIHZhcigtLWxhc3QtdmFsdWUtY2xpcCkpO2xlZnQ6MDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGV9LnRodW1iLWNvbnRhaW5lci5maXJzdC10aHVtYntsZWZ0OnZhcigtLWZpcnN0LXZhbHVlLXBvc2l0aW9uKX0udGh1bWItY29udGFpbmVyLmxhc3QtdGh1bWJ7bGVmdDp2YXIoLS1sYXN0LXZhbHVlLXBvc2l0aW9uKX0ucmFuZ2UtaW5wdXQ6ZW5hYmxlZDphY3RpdmUrLnRodW1iLWNvbnRhaW5lciwucmFuZ2UtaW5wdXQ6ZW5hYmxlZDpmb2N1cysudGh1bWItY29udGFpbmVye3otaW5kZXg6MX1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsVUFBVSxhQUFhOzs7QUNEaEMsU0FBUyxXQUFXO0FBQWEsSUFBTUEsVUFBUzs7O0FEdUJoRCxTQUFTLHdCQUF3QjtBQU1qQyxTQUFTLFlBQVk7QUFHckIsU0FBUyxnQkFBZ0I7QUE2RWxCLElBQU0saUJBQU4sY0FBNkI7RUFDbEM7SUFDRTtNQUNFO1FBQ0U7VUFDRSxtQkFBc0MsZ0JBQWdCO1lBQ3BELGdCQUF3RCxVQUFVO1VBQ3BFO1FBQ0Y7TUFDRjtJQUNGO0VBQ0Y7QUFDRixFQUFFO0VBWks7O0FBZ0JzQyxlQUFPO0FBR1AsZUFBTztBQU1SLGlCQUFRLENBQUMsR0FBRyxHQUFHO0FBR2QsZ0JBQVE7QUFHdEIsZ0JBQU87QUFHUSxvQkFBWTtBQUczQiwwQkFBa0I7QUFHbEIsMkJBQW1CO0FBR3JCLGlCQUF5QjtBQUd2QiwwQkFBaUI7QUFHbEMsK0JBQStCO0FBR1gsMEJBQTZDLENBQUMsVUFDNUUsR0FBRyxLQUFLO0FBS0UsOEJBQXNCO0FBS3RCLG1DQUEyQjtBQUczQiwrQkFBdUI7QUFHdkIsNkJBQXFCO0FBYWpDLFNBQVEsa0JBQWtCOztFQUUxQixvQkFBMEI7QUFDeEIsVUFBTSxrQkFBa0I7QUFDeEIsUUFBSSxDQUFDLEtBQUssT0FBTztBQUNmLFdBQUssUUFBUSxLQUFLLGdCQUFnQixDQUFDLEtBQUssS0FBSyxLQUFLLEdBQUc7SUFDdkQ7QUFDQSxTQUFLLFNBQVMsS0FBSyxVQUFVLEtBQUssS0FBSyxDQUFDO0FBQ3hDLFNBQUssaUJBQWlCLFdBQVcsS0FBSyxhQUFhO0VBQ3JEO0VBR0EsZ0JBQWdCO0FBQ2QsVUFBTSxhQUFhLENBQUMsS0FBSyxlQUFlLEtBQUssTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLGVBQWUsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBRTFGLFFBQUksS0FBSyxNQUFNLENBQUMsSUFBSSxLQUFLLEtBQUs7QUFDNUIsaUJBQVcsQ0FBQyxJQUFJLEtBQUs7SUFDdkI7QUFFQSxRQUFJLEtBQUssTUFBTSxDQUFDLElBQUksS0FBSyxLQUFLO0FBQzVCLGlCQUFXLENBQUMsSUFBSSxLQUFLO0lBQ3ZCO0FBRUEsUUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLEtBQUssS0FBSztBQUM1QixpQkFBVyxDQUFDLElBQUksS0FBSztJQUN2QjtBQUVBLFFBQUksS0FBSyxNQUFNLENBQUMsSUFBSSxLQUFLLEtBQUs7QUFDNUIsaUJBQVcsQ0FBQyxJQUFJLEtBQUs7SUFDdkI7QUFFQSxRQUFJLE1BQU0sS0FBSyxNQUFNLENBQUMsQ0FBQyxLQUFLLE9BQU8sS0FBSyxNQUFNLENBQUMsTUFBTSxVQUFVO0FBQzdELGlCQUFXLENBQUMsSUFBSSxLQUFLLGVBQWUsS0FBSyxhQUFhLENBQUMsSUFBSSxLQUFLLEdBQUc7SUFDckU7QUFFQSxRQUFJLE1BQU0sS0FBSyxNQUFNLENBQUMsQ0FBQyxLQUFLLE9BQU8sS0FBSyxNQUFNLENBQUMsTUFBTSxVQUFVO0FBQzdELGlCQUFXLENBQUMsSUFBSSxLQUFLLGVBQWUsS0FBSyxhQUFhLENBQUMsSUFBSSxLQUFLLEdBQUc7SUFDckU7QUFFQSxTQUFLLFFBQVE7QUFDYixTQUFLLHFCQUFxQixLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDMUMsU0FBSyxxQkFBcUIsS0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDO0FBRTFDLFNBQUssa0JBQWtCO0FBQ3ZCLFNBQUssU0FBUyxLQUFLLFVBQVUsS0FBSyxLQUFLLENBQUM7RUFDMUM7RUFHQSxNQUFNLDBCQUEwQjtBQUM5QixVQUFNLEtBQUs7QUFDWCxRQUFJLEtBQUssaUJBQWlCO0FBQ3hCLFdBQUsscUJBQXFCLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUMxQyxXQUFLLHFCQUFxQixLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDNUM7RUFDRjtFQUdBLHdCQUF3QjtBQUN0QixRQUFJLEtBQUssU0FBUyxHQUFHO0FBQ25CLFdBQUssT0FBTztJQUNkO0FBRUEsVUFBTSxzQkFBc0IsS0FBSyxLQUFLLFNBQVM7QUFDL0MsUUFBSSxvQkFBb0IsU0FBUyxHQUFHLEdBQUc7QUFDckMsV0FBSyxrQkFBa0Isb0JBQW9CLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRTtJQUMzRCxPQUFPO0FBQ0wsV0FBSyxrQkFBa0I7SUFDekI7QUFFQSxTQUFLLFFBQVEsQ0FBQyxLQUFLLGVBQWUsS0FBSyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssZUFBZSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFFcEYsUUFBSSxLQUFLLGlCQUFpQjtBQUN4QixXQUFLLHFCQUFxQixLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDMUMsV0FBSyxxQkFBcUIsS0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQzVDO0FBQ0EsU0FBSyxTQUFTLEtBQUssVUFBVSxLQUFLLEtBQUssQ0FBQztFQUMxQztFQUVBLG1CQUF5QjtBQUN2QixRQUFJLEtBQUssY0FBYztBQUNyQixXQUFLLFFBQVEsS0FBSztJQUNwQjtBQUNBLFNBQUssU0FBUyxLQUFLLFVBQVUsS0FBSyxLQUFLLENBQUM7RUFDMUM7RUFFQSxtQkFBa0M7QUFDaEMsV0FBTyxLQUFLLFNBQVMsS0FBSyxrQkFBa0I7RUFDOUM7RUFFUSxtQkFBbUIsT0FBd0I7QUFDakQsV0FBTyxPQUFPLFdBQVcsT0FBTyxLQUFLLEVBQUUsUUFBUSxLQUFLLGVBQWUsQ0FBQztFQUN0RTtFQUVRLGVBQWUsV0FBb0M7QUFDekQsVUFBTSxlQUFlLEtBQUssbUJBQW1CLFNBQVM7QUFDdEQsV0FBTyxLQUFLLG1CQUFtQixLQUFLLE1BQU0sZUFBZSxLQUFLLElBQUksSUFBSSxLQUFLLElBQUk7RUFDakY7RUFFUSxZQUFZLEdBQWdCO0FBQ2xDLFVBQU0sU0FBUyxFQUFFO0FBQ2pCLFVBQU0sUUFBUSxPQUFPLE9BQU8sUUFBUSxLQUFLO0FBQ3pDLFVBQU0sWUFBWSxDQUFDLEdBQUcsS0FBSyxLQUFLO0FBQ2hDLGNBQVUsS0FBSyxJQUFJLEtBQUssbUJBQW1CLE9BQU8sS0FBSztBQUV2RCxRQUFJLEtBQUssVUFBVTtBQUVqQixhQUFPLFFBQVEsS0FBSyxNQUFNLE9BQU8sUUFBUSxLQUFLO0FBQzlDO0lBQ0Y7QUFFQSxRQUFJLFVBQVUsS0FBSyxVQUFVLEtBQUssSUFBSSxLQUFLLE1BQU0sQ0FBQyxHQUFHO0FBQ25ELGdCQUFVLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQztJQUM3QjtBQUVBLFFBQUksVUFBVSxLQUFLLFVBQVUsS0FBSyxJQUFJLEtBQUssTUFBTSxDQUFDLEdBQUc7QUFDbkQsZ0JBQVUsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDO0lBQzdCO0FBRUEsU0FBSyxRQUFRO0FBQ2IsU0FBSyxTQUFTLEtBQUssVUFBVSxLQUFLLEtBQUssQ0FBQztBQUN4QyxRQUFJLEtBQUssaUJBQWlCO0FBQ3hCLFdBQUsscUJBQXFCLFVBQVUsQ0FBQyxHQUFHLENBQUM7QUFDekMsV0FBSyxxQkFBcUIsVUFBVSxDQUFDLEdBQUcsQ0FBQztJQUMzQztBQUNBLFNBQUssU0FBUyxLQUFLLEVBQUUsT0FBTyxLQUFLLE9BQU8sTUFBTSxLQUFLLEtBQUssQ0FBQztFQUMzRDtFQUVRLGtCQUFrQixHQUFzQjtBQUU5QyxNQUFFLGdCQUFnQjtBQUVsQixVQUFNLFlBQVksQ0FBQyxHQUFHLEtBQUssS0FBSztBQUNoQyxVQUFNLFFBQVEsT0FBUSxFQUFFLE9BQW9CLFFBQVEsS0FBSztBQUN6RCxVQUFNLGVBQWUsS0FBSyxtQkFBbUIsRUFBRSxPQUFPLEtBQUs7QUFFM0QsY0FBVSxLQUFLLElBQUk7QUFFbkIsU0FBSyxRQUFRO0FBQ2IsU0FBSyxTQUFTLEtBQUssVUFBVSxLQUFLLEtBQUssQ0FBQztBQUN4QyxTQUFLLFNBQVMsS0FBSyxFQUFFLE9BQU8sS0FBSyxPQUFPLE1BQU0sS0FBSyxLQUFLLENBQUM7RUFDM0Q7RUFFUSxvQkFBb0IsR0FBc0I7QUFFaEQsTUFBRSxnQkFBZ0I7QUFFbEIsVUFBTSxZQUFZLENBQUMsR0FBRyxLQUFLLEtBQUs7QUFDaEMsVUFBTSxRQUFRLE9BQVEsRUFBRSxPQUFvQixRQUFRLEtBQUs7QUFDekQsVUFBTSxlQUFlLEtBQUssbUJBQW1CLEVBQUUsT0FBTyxLQUFLO0FBRTNELGNBQVUsS0FBSyxJQUFJLEtBQUssZUFBZSxZQUFZO0FBRW5ELFVBQU0sV0FBVyxVQUFVLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxDQUFDO0FBQ3RELFVBQU0sV0FBVyxVQUFVLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxDQUFDO0FBRXRELFFBQUksZ0JBQWdCLFlBQVksZ0JBQWdCLFVBQVU7QUFDeEQsZ0JBQVUsS0FBSyxJQUFJO0lBQ3JCO0FBRUEsUUFBSSxnQkFBZ0IsWUFBWSxVQUFVLEdBQUc7QUFDM0MsZ0JBQVUsS0FBSyxJQUFJO0lBQ3JCO0FBRUEsUUFBSSxnQkFBZ0IsWUFBWSxVQUFVLEdBQUc7QUFDM0MsZ0JBQVUsS0FBSyxJQUFJO0lBQ3JCO0FBRUEsU0FBSyxRQUFRO0FBQ2IsU0FBSyxTQUFTLEtBQUssVUFBVSxLQUFLLEtBQUssQ0FBQztBQUN4QyxTQUFLLHFCQUFxQixLQUFLLE1BQU0sS0FBSyxHQUFHLEtBQUs7QUFDbEQsU0FBSyxhQUFhO0VBQ3BCO0VBRVEsZUFBZTtBQUNyQixTQUFLLFVBQVUsS0FBSyxFQUFFLE9BQU8sS0FBSyxPQUFPLE1BQU0sS0FBSyxLQUFLLENBQUM7RUFDNUQ7RUFFUSxxQkFBcUIsT0FBZSxPQUFlO0FBQ3pELFVBQU0sS0FBSyxVQUFVLElBQUksd0JBQXdCO0FBQ2pELFVBQU0sZUFBZSxLQUFLLFlBQVksY0FBYyxFQUFFO0FBQ3RELFFBQUksY0FBYztBQUNoQixtQkFBYSxRQUFRLE1BQU0sU0FBUztJQUN0QztFQUNGO0VBRVEsZ0JBQWdCO0FBQ3RCLFNBQUssV0FBVyxLQUFLO01BQ25CLE9BQU8sS0FBSztNQUNaLE1BQU0sS0FBSztJQUNiLENBQUM7RUFDSDtFQUVRLG9CQUFvQjtBQUMxQixVQUFNLG9CQUFvQixLQUFLO09BQzNCLEtBQUssTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLE9BQVE7SUFDekQ7QUFDQSxVQUFNLHFCQUFxQixLQUFLO09BQzVCLEtBQUssTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLE9BQVE7SUFDekQ7QUFFQSxTQUFLLGlCQUFpQixzQkFBc0IsZ0JBQWdCLEtBQUsseUJBQXlCLEdBQUc7TUFDM0Ysc0JBQXNCLEdBQUcsS0FBSyxPQUFPLHFCQUFxQixxQkFBcUIsQ0FBQztNQUNoRixxQkFBcUIsR0FBRyxxQkFBcUIscUJBQXFCLHFCQUFxQixDQUFDO01BQ3hGLDBCQUEwQixHQUFHLGlCQUFpQjtNQUM5Qyx5QkFBeUIsR0FBRyxrQkFBa0I7SUFDaEQsQ0FBQztFQUNIO0VBRUEsU0FBUztBQUNQLFVBQU0sVUFBVSxDQUFDLENBQUMsS0FBSyxRQUFRLFFBQVEsS0FBSyxJQUFJO0FBQ2hELFVBQU0sV0FBVyxDQUFDLENBQUMsS0FBSyxRQUFRLFNBQVMsS0FBSyxLQUFLO0FBQ25ELFVBQU0saUJBQWlCLENBQUMsQ0FBQyxLQUFLLFFBQVEsZUFBZSxLQUFLLFdBQVc7QUFFckUsV0FBTyxPQUFPLEtBQUssY0FBYyxHQUFHLEtBQUs7TUFDdkMsaVJBYWdCLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxFQUFFLGFBQ25CLEtBQUssV0FBVyxjQUNmLEtBQUssWUFBWSw0Q0FFVCxLQUFLLGVBQWUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLGdCQUN6QyxLQUFLLFFBQVEsVUFDbkIsS0FBSyxHQUFHLFVBQ1IsS0FBSyxHQUFHLFdBQ1AsS0FBSyxJQUFJLG9GQUdFLEdBQUcsVUFBVSxVQUFVLEVBQUUsR0FBRyxXQUFXLFdBQVcsRUFBRSxHQUNyRSxpQkFBaUIsZ0JBQWdCLEVBQ25DLEVBQUUsTUFDRixLQUFLLFNBQVMsS0FBSyxNQUFNLFNBQVMsSUFDaEMsaUVBQ0ksS0FBSyxNQUFNO1FBQ1gsQ0FBQyxFQUFFLE9BQU8sTUFBTSxNQUNkLGdFQUlVLEtBQUssWUFDTCxTQUFTLEtBQUssSUFBSSwwQkFDSixHQUFHLEtBQUssR0FBRyxLQUMvQixLQUFLLGlCQUFpQixRQUFRLElBQUk7TUFFMUMsQ0FBQyxXQUVILElBQUkscUhBR0o7UUFDQSxDQUFDLEtBQUs7UUFDTixNQUFNLHFGQUtELEtBQUssZUFBZSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7TUFFM0MsQ0FBQyxpSEFRTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsRUFBRSxhQUNuQixLQUFLLFdBQVcsY0FDZixLQUFLLFlBQVkscUJBQ1QsS0FBSyxlQUFlLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxnQkFDekMsS0FBSyxRQUFRLFVBQ25CLEtBQUssR0FBRyxVQUNSLEtBQUssR0FBRyxXQUNQLEtBQUssSUFBSSxnRkFHRSxHQUFHLFVBQVUsVUFBVSxFQUFFLEdBQUcsV0FBVyxVQUFVLEVBQUUsRUFBRSxrSEFHdEU7UUFDQSxDQUFDLEtBQUs7UUFDTixNQUFNLCtGQUtELEtBQUssZUFBZSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7TUFFM0MsQ0FBQztJQVFYLENBQUMsSUFDQyxLQUFLLGtCQUNILDBGQUVTLEtBQUssc0JBQXNCLEtBQUssbUJBQW1CLElBQUksS0FBSyxLQUFLLG1EQUk5RCxTQUFTO01BQ2YsQ0FBQyxjQUFjLEdBQUc7TUFDbEIsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsS0FBSztNQUM3QixDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSztJQUN6QixDQUFDLENBQUMsa0dBSVUsS0FBSyxRQUFRLGdCQUNiLEtBQUssUUFBUSxrRUFJbkIsS0FBSyxHQUFHLFdBQ1AsS0FBSyxJQUFJLFVBQ1YsS0FBSyxHQUFHLDBCQUVQO01BQ0wsdUJBQ0UsS0FBSyx3QkFDSixLQUFLLElBQUksU0FBUyxFQUFFLFNBQVMsSUFDMUIsUUFBUSxLQUFLLElBQUksU0FBUyxFQUFFLFNBQVMsQ0FBQyxnQkFDdEM7SUFDUixDQUFDLGVBQ1UsS0FBSyxpQkFBaUIsZ0JBQ3JCLEtBQUssbUJBQW1CLG1CQUN4QyxJQUFJLElBQ04sS0FBSyxrQkFDSCxzRkFFUyxLQUFLLDJCQUEyQixLQUFLLGlCQUFpQixJQUFJLEtBQUssS0FBSyx5RUFLakUsU0FBUztNQUNmLENBQUMsY0FBYyxHQUFHO01BQ2xCLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLEtBQUs7TUFDN0IsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUs7SUFDekIsQ0FBQyxDQUFDLGdCQUNVLEtBQUssUUFBUSxnQkFDYixLQUFLLFFBQVEsK0VBS25CLEtBQUssR0FBRyxXQUNQLEtBQUssSUFBSSxVQUNWLEtBQUssR0FBRyxtRUFHUDtNQUNMLHVCQUNFLEtBQUssd0JBQ0osS0FBSyxJQUFJLFNBQVMsRUFBRSxTQUFTLElBQzFCLFFBQVEsS0FBSyxJQUFJLFNBQVMsRUFBRSxTQUFTLENBQUMsZ0JBQ3RDO0lBQ1IsQ0FBQyxlQUNVLEtBQUssaUJBQWlCLGdCQUNyQixLQUFLLG1CQUFtQixtQkFDeEMsSUFBSTtFQUNWO0FBQ0Y7QUExY2EsZUFhSixTQUFTLENBQUNDLFNBQVlBLFNBQWlCLFFBQWdCQSxTQUFjQSxPQUFNO0FBR3ZDO0VBQTFDLFNBQVMsRUFBRSxNQUFNLFFBQVEsU0FBUyxLQUFLLENBQUM7R0FoQjlCLGVBZ0JnQztBQUdBO0VBQTFDLFNBQVMsRUFBRSxNQUFNLFFBQVEsU0FBUyxLQUFLLENBQUM7R0FuQjlCLGVBbUJnQztBQUdoQjtFQUExQixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7R0F0QmQsZUFzQmdCO0FBR2U7RUFBekMsU0FBUyxFQUFFLE1BQU0sT0FBTyxTQUFTLEtBQUssQ0FBQztHQXpCN0IsZUF5QitCO0FBR0M7RUFBMUMsU0FBUyxFQUFFLE1BQU0sUUFBUSxTQUFTLEtBQUssQ0FBQztHQTVCOUIsZUE0QmdDO0FBR2Q7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBL0JoQixlQStCa0I7QUFHZTtFQUEzQyxTQUFTLEVBQUUsTUFBTSxTQUFTLFNBQVMsS0FBSyxDQUFDO0dBbEMvQixlQWtDaUM7QUFHZjtFQUE1QixTQUFTLEVBQUUsTUFBTSxRQUFRLENBQUM7R0FyQ2hCLGVBcUNrQjtBQUdBO0VBQTVCLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztHQXhDaEIsZUF3Q2tCO0FBR0Y7RUFBMUIsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0dBM0NkLGVBMkNnQjtBQUdFO0VBQTVCLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztHQTlDaEIsZUE4Q2tCO0FBR2pCO0VBQVgsU0FBUztHQWpEQyxlQWlEQztBQUdvQjtFQUEvQixTQUFTLEVBQUUsV0FBVyxNQUFNLENBQUM7R0FwRG5CLGVBb0RxQjtBQU1wQjtFQUFYLFNBQVM7R0ExREMsZUEwREM7QUFLQTtFQUFYLFNBQVM7R0EvREMsZUErREM7QUFHQTtFQUFYLFNBQVM7R0FsRUMsZUFrRUM7QUFHQTtFQUFYLFNBQVM7R0FyRUMsZUFxRUM7QUFHSTtFQUFmLGFBQWE7R0F4RUgsZUF3RUs7QUFHQTtFQUFmLGFBQWE7R0EzRUgsZUEyRUs7QUFHQTtFQUFmLGFBQWE7R0E5RUgsZUE4RUs7QUFFYTtFQUE1QixNQUFNLG9CQUFvQjtHQWhGaEIsZUFnRmtCO0FBYzdCO0VBREMsU0FBUyxDQUFDLFNBQVMsT0FBTyxLQUFLLEdBQUcsRUFBRSxJQUFJLE9BQU8sQ0FBQztHQTdGdEMsZUE4Rlg7QUFvQ007RUFETCxTQUFTLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxJQUFJLE9BQU8sQ0FBQztHQWpJbEMsZUFrSUw7QUFTTjtFQURDLFNBQVMsQ0FBQyxNQUFNLENBQUM7R0ExSVAsZUEySVg7QUEzSVcsaUJBQU47RUFETixjQUFjLGtCQUFrQjtHQUNwQjsiLAogICJuYW1lcyI6IFsic3R5bGVzIiwgInN0eWxlcyJdCn0K
