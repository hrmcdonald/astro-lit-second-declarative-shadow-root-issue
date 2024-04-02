import {
  MteElement,
  PresetMixinFactory,
  StatusColorMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  onUpdate
} from "./chunk.KVXAK6W4.js";

// src/atomic/progress-spinner/progress-spinner.element.ts
import { html } from "lit";
import { property, state } from "lit/decorators.js";

// src/atomic/progress-spinner/progress-spinner.styles.ts
import { css } from "lit";
var styles = css`@keyframes progress-spinner-animation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}:host{display:inline-block;height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content;will-change:transform}.container{align-items:center;display:flex;justify-content:center;overflow:visible;position:relative;vertical-align:middle}.container svg{display:block;overflow:visible}.container path{fill-opacity:0}.track{stroke:rgb(var(--mte-border-1-rgb))}.bar{left:0;position:absolute;top:0;stroke:rgb(var(--mte-status-primary-base-rgb))}.bar path{transform-origin:center;transition:stroke-dashoffset .2s cubic-bezier(.4,0,.2,1) 0ms;will-change:stroke-dashoffset}:host([withoutAnimation]) .bar path{transition:none!important}:host([indeterminate]){animation:progress-spinner-animation .5s linear infinite}:host([indeterminate]) .bar path{transition:none}:host([color=primary]) .bar{stroke:rgb(var(--mte-status-primary-base-rgb))}:host([color=secondary]) .bar{stroke:rgb(var(--mte-status-secondary-base-rgb))}:host([color=tertiary]) .bar{stroke:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=success]) .bar{stroke:rgb(var(--mte-status-success-base-rgb))}:host([color=warning]) .bar{stroke:rgb(var(--mte-status-warning-base-rgb))}:host([color=danger]) .bar{stroke:rgb(var(--mte-status-danger-base-rgb))}@media screen and (prefers-reduced-motion:reduce){.bar path{transition:none}:host([indeterminate]){animation:none}}`;

// src/atomic/progress-spinner/progress-spinner.common.ts
var SPINNER_BASE_SIZE = 100;

// src/atomic/progress-spinner/progress-spinner.element.ts
import { styleMap } from "lit/directives/style-map.js";
var MteProgressSpinner = class extends StatusColorMixin(
  PresetMixinFactory("MteProgressSpinner")(
    StylePartsMixin(MteElement)
  )
) {
  constructor() {
    super(...arguments);
    this.diameter = SPINNER_BASE_SIZE;
    this.indeterminate = false;
    this._value = 0;
    this.withoutAnimation = false;
    this.role = "progressbar";
    this.ariaValueNow = `${this.value}`;
    this.ariaValueMin = "0";
    this.ariaValueMax = "100";
    /** Default diameter */
    this.BASE_DIAMETER = 100;
    /** Total length of the drawn path  */
    this.PATH_LENGTH = 280;
    /** Used for calculating a standard stoke width based on the size of the circle */
    this.R = 45;
    /** Default width of the path stroke */
    this.STROKE_WIDTH = 4;
    /** Max width of the path stroke */
    this.MAX_STROKE_WIDTH = 16;
    /** Path for the spinner track */
    this.trackShape = `M 50,50 m 0,-${this.R} a ${this.R},${this.R} 0 1 1 0,${this.R * 2} a ${this.R},${this.R} 0 1 1 0,-${this.R * 2}`;
    /** Defines the dash pattern of the bar path  */
    this.strokeDashArray = `${this.PATH_LENGTH} ${this.PATH_LENGTH}`;
    this.strokeWidth = Math.min(
      this.MAX_STROKE_WIDTH,
      this.STROKE_WIDTH * 100 / this.BASE_DIAMETER
    );
    this.viewBox = "3.00 3.00 94.00 94.00";
    this.strokeDashOffset = this.PATH_LENGTH - this.PATH_LENGTH * (this.isIndeterminate() ? 0.25 : this.value / 100);
  }
  get value() {
    return !this.indeterminate ? this._value : 0;
  }
  set value(newValue) {
    const oldVal = this._value;
    this._value = Math.max(0, Math.min(100, newValue || 0));
    this.requestUpdate("value", oldVal);
  }
  handleValueChange() {
    this.recalculateSizing();
    this.ariaValueNow = this.isIndeterminate() ? void 0 : `${this.value}`;
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.recalculateSizing();
  }
  isIndeterminate() {
    return this.indeterminate;
  }
  recalculateSizing() {
    this.strokeWidth = Math.min(
      this.MAX_STROKE_WIDTH,
      this.STROKE_WIDTH * 100 / (this.d ?? this.diameter)
    );
    this.strokeDashOffset = this.PATH_LENGTH - this.PATH_LENGTH * (this.isIndeterminate() ? 0.25 : this.value / 100);
    const viewRadius = this.R + this.strokeWidth / 2;
    const viewBoxX = (50 - viewRadius).toFixed(2);
    const viewBoxWidth = (viewRadius * 2).toFixed(2);
    this.viewBox = `${viewBoxX} ${viewBoxX} ${viewBoxWidth} ${viewBoxWidth}`;
  }
  render() {
    const diameter = this.d ?? this.diameter;
    const containerStyles = styleMap({
      width: `${diameter}px`,
      height: `${diameter}px`
    });
    const trackStyles = styleMap({
      width: `${diameter}px`,
      height: `${diameter}px`,
      strokeWidth: `${this.strokeWidth.toFixed(2)}px`
    });
    const barStyles = styleMap({
      width: `${diameter}px`,
      height: `${diameter}px`,
      strokeWidth: `${this.strokeWidth.toFixed(2)}px`
    });
    return html`${this.instanceStyles}<div class="container" part="container" style="${containerStyles}"><svg class="track" part="track" style="${trackStyles}" viewBox="${this.viewBox}" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="${this.trackShape}"></path></svg> <svg class="bar" part="bar" style="${barStyles}" viewBox="${this.viewBox}" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="${this.trackShape}" pathLength="${this.PATH_LENGTH - 1}" stroke-dasharray="${this.strokeDashArray}" stroke-dashoffset="${this.strokeDashOffset}"></path></svg></div>`;
  }
};
MteProgressSpinner.styles = styles;
__decorateClass([
  property({ type: Number, reflect: true })
], MteProgressSpinner.prototype, "diameter", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MteProgressSpinner.prototype, "d", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteProgressSpinner.prototype, "indeterminate", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MteProgressSpinner.prototype, "value", 1);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteProgressSpinner.prototype, "withoutAnimation", 2);
__decorateClass([
  property({ reflect: true })
], MteProgressSpinner.prototype, "role", 2);
__decorateClass([
  property({ attribute: "aria-valuenow", reflect: true })
], MteProgressSpinner.prototype, "ariaValueNow", 2);
__decorateClass([
  property({ attribute: "aria-valuemin", reflect: true })
], MteProgressSpinner.prototype, "ariaValueMin", 2);
__decorateClass([
  property({ attribute: "aria-valuemax", reflect: true })
], MteProgressSpinner.prototype, "ariaValueMax", 2);
__decorateClass([
  state()
], MteProgressSpinner.prototype, "strokeWidth", 2);
__decorateClass([
  state()
], MteProgressSpinner.prototype, "viewBox", 2);
__decorateClass([
  state()
], MteProgressSpinner.prototype, "strokeDashOffset", 2);
__decorateClass([
  onUpdate(["value"], { on: "both" })
], MteProgressSpinner.prototype, "handleValueChange", 1);
MteProgressSpinner = __decorateClass([
  defineElement("mte-progress-spinner")
], MteProgressSpinner);

// src/atomic/progress-spinner/spinner.element.ts
import { property as property2 } from "lit/decorators.js";
var MteSpinner = class extends MteProgressSpinner {
  constructor() {
    super(...arguments);
    this.indeterminate = true;
  }
};
__decorateClass([
  property2({ reflect: true })
], MteSpinner.prototype, "indeterminate", 2);
MteSpinner = __decorateClass([
  defineElement("mte-spinner")
], MteSpinner);

export {
  SPINNER_BASE_SIZE,
  MteProgressSpinner,
  MteSpinner
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2F0b21pYy9wcm9ncmVzcy1zcGlubmVyIiwgIi4uLy4uLy4uL3NyYy9hdG9taWMvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLnN0eWxlcy50cyIsICIuLi8uLi8uLi9zcmMvYXRvbWljL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5jb21tb24udHMiLCAiLi4vLi4vLi4vc3JjL2F0b21pYy9wcm9ncmVzcy1zcGlubmVyL3NwaW5uZXIuZWxlbWVudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYEBrZXlmcmFtZXMgcHJvZ3Jlc3Mtc3Bpbm5lci1hbmltYXRpb257MCV7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX10b3t0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19Omhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0Oi1tb3otZml0LWNvbnRlbnQ7aGVpZ2h0OmZpdC1jb250ZW50O3dpZHRoOi1tb3otZml0LWNvbnRlbnQ7d2lkdGg6Zml0LWNvbnRlbnQ7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5jb250YWluZXJ7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO292ZXJmbG93OnZpc2libGU7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246bWlkZGxlfS5jb250YWluZXIgc3Zne2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6dmlzaWJsZX0uY29udGFpbmVyIHBhdGh7ZmlsbC1vcGFjaXR5OjB9LnRyYWNre3N0cm9rZTpyZ2IodmFyKC0tbXRlLWJvcmRlci0xLXJnYikpfS5iYXJ7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3N0cm9rZTpyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWJhc2UtcmdiKSl9LmJhciBwYXRoe3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zaXRpb246c3Ryb2tlLWRhc2hvZmZzZXQgLjJzIGN1YmljLWJlemllciguNCwwLC4yLDEpIDBtczt3aWxsLWNoYW5nZTpzdHJva2UtZGFzaG9mZnNldH06aG9zdChbd2l0aG91dEFuaW1hdGlvbl0pIC5iYXIgcGF0aHt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fTpob3N0KFtpbmRldGVybWluYXRlXSl7YW5pbWF0aW9uOnByb2dyZXNzLXNwaW5uZXItYW5pbWF0aW9uIC41cyBsaW5lYXIgaW5maW5pdGV9Omhvc3QoW2luZGV0ZXJtaW5hdGVdKSAuYmFyIHBhdGh7dHJhbnNpdGlvbjpub25lfTpob3N0KFtjb2xvcj1wcmltYXJ5XSkgLmJhcntzdHJva2U6cmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1zZWNvbmRhcnldKSAuYmFye3N0cm9rZTpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9dGVydGlhcnldKSAuYmFye3N0cm9rZTpyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1zdWNjZXNzXSkgLmJhcntzdHJva2U6cmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj13YXJuaW5nXSkgLmJhcntzdHJva2U6cmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1kYW5nZXJdKSAuYmFye3N0cm9rZTpyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItYmFzZS1yZ2IpKX1AbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5iYXIgcGF0aHt0cmFuc2l0aW9uOm5vbmV9Omhvc3QoW2luZGV0ZXJtaW5hdGVdKXthbmltYXRpb246bm9uZX19YDsiLCAiLyoqXG4gKiBCYXNlIHJlZmVyZW5jZSBzaXplIG9mIHRoZSBzcGlubmVyLlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgU1BJTk5FUl9CQVNFX1NJWkUgPSAxMDA7XG4iLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBkZWZpbmVFbGVtZW50IH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBNdGVQcm9ncmVzc1NwaW5uZXIgfSBmcm9tICcuL3Byb2dyZXNzLXNwaW5uZXIuZWxlbWVudCc7XG5cbi8qKlxuICogVGhpcyBpcyBhIGNvbXBvbmVudCBkZWZpbml0aW9uIHRvIGJlIHVzZWQgYXMgYSBjb252ZW5pZW5jZSByZWZlcmVuY2UgdG8gY3JlYXRlIGFuXG4gKiBpbmRldGVybWluYXRlIGA8bXRyLXByb2dyZXNzLXNwaW5uZXI+YCBpbnN0YW5jZS5cbiAqXG4gKiBAY3NzcGFydCBjb250YWluZXIgLSBJbm5lciBjb250YWluZXIgZWxlbWVudCB0aGF0IGhvdXNlcyB0aGUgdHJhY2sgYW5kIGJhclxuICogQGNzc3BhcnQgdHJhY2sgLSBUaGUgdHJhY2sgYmVoaW5kIHRoZSBmaWxsZWQgYmFyXG4gKiBAY3NzcGFydCBiYXIgLSBUaGUgZmlsbGVkIHBvcnRpb24gb2YgdGhlIHNwaW5uZXJcbiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS1zcGlubmVyJylcbmV4cG9ydCBjbGFzcyBNdGVTcGlubmVyIGV4dGVuZHMgTXRlUHJvZ3Jlc3NTcGlubmVyIHtcbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBvdmVycmlkZSBpbmRldGVybWluYXRlID0gdHJ1ZTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLXNwaW5uZXInOiBNdGVQcm9ncmVzc1NwaW5uZXI7XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxZQUFZO0FBQ3JCLFNB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LG9FQUdYLEtBQUssVUFBVSxzREFPbEIsU0FBUyxjQUNQLEtBQUssT0FBTyxvRUFJaEIsS0FBSyxVQUFVLGlCQUNOLEtBQUssY0FBYyxDQUFDLHVCQUNkLEtBQUssZUFBZSx3QkFDbkIsS0FBSyxnQkFBZ0I7RUFHbkQ7QUFDRjtBQTlKYSxtQkFLSixTQUFTO0FBRzJCO0VBQTFDLFNBQVMsRUFBRSxNQUFNLFFBQVEsU0FBUyxLQUFLLENBQUM7R0FSOUIsbUJBUWdDO0FBR0E7RUFBMUMsU0FBUyxFQUFFLE1BQU0sUUFBUSxTQUFTLEtBQUssQ0FBQztHQVg5QixtQkFXZ0M7QUFHQztFQUEzQyxTQUFTLEVBQUUsTUFBTSxTQUFTLFNBQVMsS0FBSyxDQUFDO0dBZC9CLG1CQWNpQztBQUl4QztFQURILFNBQVMsRUFBRSxNQUFNLFFBQVEsU0FBUyxLQUFLLENBQUM7R0FqQjlCLG1CQWtCUDtBQWN3QztFQUEzQyxTQUFTLEVBQUUsTUFBTSxTQUFTLFNBQVMsS0FBSyxDQUFDO0dBaEMvQixtQkFnQ2lDO0FBR2Y7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBbkNoQixtQkFtQ2tCO0FBRzRCO0VBQXhELFNBQVMsRUFBRSxXQUFXLGlCQUFpQixTQUFTLEtBQUssQ0FBQztHQXRDNUMsbUJBc0M4QztBQUdBO0VBQXhELFNBQVMsRUFBRSxXQUFXLGlCQUFpQixTQUFTLEtBQUssQ0FBQztHQXpDNUMsbUJBeUM4QztBQUdBO0VBQXhELFNBQVMsRUFBRSxXQUFXLGlCQUFpQixTQUFTLEtBQUssQ0FBQztHQTVDNUMsbUJBNEM4QztBQTBCaEQ7RUFBUixNQUFNO0dBdEVJLG1CQXNFRjtBQU1BO0VBQVIsTUFBTTtHQTVFSSxtQkE0RUY7QUFHQTtFQUFSLE1BQU07R0EvRUksbUJBK0VGO0FBSUQ7RUFEUCxTQUFTLENBQUMsT0FBTyxHQUFHLEVBQUUsSUFBSSxPQUFPLENBQUM7R0FsRnhCLG1CQW1GSDtBQW5GRyxxQkFBTjtFQUROLGNBQWMsc0JBQXNCO0dBQ3hCOzs7QUdsQ2IsU0FBUyxZQUFBQSxpQkFBZ0I7QUFhbEIsSUFBTSxhQUFOLGNBQXlCLG1CQUFtQjtBQUFBLEVBQTVDO0FBQUE7QUFDd0IsU0FBUyxnQkFBZ0I7QUFBQTtBQUN4RDtBQUR3QztBQUFBLEVBQXJDQyxVQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFBQSxHQURoQixXQUMyQjtBQUQzQixhQUFOO0FBQUEsRUFETixjQUFjLGFBQWE7QUFBQSxHQUNmOyIsCiAgIm5hbWVzIjogWyJwcm9wZXJ0eSIsICJwcm9wZXJ0eSJdCn0K
