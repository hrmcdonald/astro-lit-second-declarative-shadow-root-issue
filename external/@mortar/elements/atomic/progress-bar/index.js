import {
  MteElement,
  PresetMixinFactory,
  StatusColorMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  onUpdate,
  styles7 as styles
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/progress-bar/progress-bar.element.ts
import { styleMap } from "lit/directives/style-map.js";
import { html } from "lit";
import { property } from "lit/decorators.js";

// src/atomic/progress-bar/progress-bar.styles.ts
import { css } from "lit";
var styles2 = css`@keyframes progress-bar-indeterminate{0%{transform:translate(-100%)}to{transform:translate(200%)}}:host{display:block;height:4px;overflow:hidden;position:relative;width:100%}.progress-bar-element{height:100%;position:absolute;width:100%}.track{background-color:rgb(var(--mte-border-1-rgb))}.bar{animation:none;backface-visibility:hidden;background-color:rgb(var(--mte-status-primary-base-rgb));transform-origin:left;transition:transform .2s ease;width:100%}:host([withoutAnimation]) .bar{transition:none!important}:host([color=primary]) .bar{background-color:rgb(var(--mte-status-primary-base-rgb))}:host([color=secondary]) .bar{background-color:rgb(var(--mte-status-secondary-base-rgb))}:host([color=tertiary]) .bar{background-color:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=success]) .bar{background-color:rgb(var(--mte-status-success-base-rgb))}:host([color=warning]) .bar{background-color:rgb(var(--mte-status-warning-base-rgb))}:host([color=danger]) .bar{background-color:rgb(var(--mte-status-danger-base-rgb))}:host([indeterminate]) .bar{animation:progress-bar-indeterminate 1.5s cubic-bezier(.4,0,.2,1) infinite;width:60%}@media screen and (prefers-reduced-motion:reduce){:host([indeterminate]) .bar{animation:none}.bar{transition:none}}`;

// src/atomic/progress-bar/progress-bar.element.ts
var MteProgressBar = class extends StatusColorMixin(
  PresetMixinFactory("MteProgressBar")(
    StylePartsMixin(MteElement)
  )
) {
  constructor() {
    super(...arguments);
    this._value = 0;
    this.indeterminate = false;
    this.withoutAnimation = false;
    this.role = "progressbar";
    this.ariaValueNow = `${this.value}`;
    this.ariaValueMin = "0";
    this.ariaValueMax = "100";
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    this._value = Math.max(0, Math.min(100, newValue || 0));
  }
  handleValueChange() {
    this.ariaValueNow = this.isIndeterminate() ? void 0 : `${this.value}`;
  }
  isIndeterminate() {
    return this.indeterminate;
  }
  render() {
    const primaryTransformStyles = styleMap({
      transform: `scaleX(${this.value}%)`
    });
    return html`${this.instanceStyles}<div class="track progress-bar-element" part="track"></div><div class="bar progress-bar-element" part="bar" style="${primaryTransformStyles}"></div>`;
  }
};
MteProgressBar.styles = [styles, styles2];
__decorateClass([
  property({ type: Number, reflect: true })
], MteProgressBar.prototype, "value", 1);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteProgressBar.prototype, "indeterminate", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteProgressBar.prototype, "withoutAnimation", 2);
__decorateClass([
  property({ reflect: true })
], MteProgressBar.prototype, "role", 2);
__decorateClass([
  property({ attribute: "aria-valuenow", reflect: true })
], MteProgressBar.prototype, "ariaValueNow", 2);
__decorateClass([
  property({ attribute: "aria-valuemin", reflect: true })
], MteProgressBar.prototype, "ariaValueMin", 2);
__decorateClass([
  property({ attribute: "aria-valuemax", reflect: true })
], MteProgressBar.prototype, "ariaValueMax", 2);
__decorateClass([
  onUpdate(["value", "mode"], { on: "both" })
], MteProgressBar.prototype, "handleValueChange", 1);
MteProgressBar = __decorateClass([
  defineElement("mte-progress-bar")
], MteProgressBar);
export {
  MteProgressBar
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9wcm9ncmVzcy1iYXIiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYEBrZXlmcmFtZXMgcHJvZ3Jlc3MtYmFyLWluZGV0ZXJtaW5hdGV7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMTAwJSl9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZSgyMDAlKX19Omhvc3R7ZGlzcGxheTpibG9jaztoZWlnaHQ6NHB4O292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfS5wcm9ncmVzcy1iYXItZWxlbWVudHtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlfS50cmFja3tiYWNrZ3JvdW5kLWNvbG9yOnJnYih2YXIoLS1tdGUtYm9yZGVyLTEtcmdiKSl9LmJhcnthbmltYXRpb246bm9uZTtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZ3JvdW5kLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktYmFzZS1yZ2IpKTt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2U7d2lkdGg6MTAwJX06aG9zdChbd2l0aG91dEFuaW1hdGlvbl0pIC5iYXJ7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH06aG9zdChbY29sb3I9cHJpbWFyeV0pIC5iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXNlY29uZGFyeV0pIC5iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9dGVydGlhcnldKSAuYmFye2JhY2tncm91bmQtY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c3VjY2Vzc10pIC5iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXdhcm5pbmddKSAuYmFye2JhY2tncm91bmQtY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1kYW5nZXJdKSAuYmFye2JhY2tncm91bmQtY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtcmdiKSl9Omhvc3QoW2luZGV0ZXJtaW5hdGVdKSAuYmFye2FuaW1hdGlvbjpwcm9ncmVzcy1iYXItaW5kZXRlcm1pbmF0ZSAxLjVzIGN1YmljLWJlemllciguNCwwLC4yLDEpIGluZmluaXRlO3dpZHRoOjYwJX1AbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upezpob3N0KFtpbmRldGVybWluYXRlXSkgLmJhcnthbmltYXRpb246bm9uZX0uYmFye3RyYW5zaXRpb246bm9uZX19YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLGdCQUFnQjtBQUN6QixTQUFTLFlBQVk7QUFDckIsU0FBUyxnQkFBZ0I7OztBQ0Z6QixTQUFTLFdBQVc7QUFBYSxJQUFNQSxVQUFTOzs7QUQ4QnpDLElBQU0saUJBQU4sY0FBNkI7RUFDbEMsbUJBQXNDLGdCQUFnQjtJQUNwRCxnQkFBd0QsVUFBVTtFQUNwRTtBQUNGLEVBQUU7RUFKSzs7QUFlTCxTQUFRLFNBQVM7QUFHMkIseUJBQWdCO0FBTWhCLDRCQUFtQjtBQUdsQyxnQkFBTztBQUdxQix3QkFBZSxHQUFHLEtBQUssS0FBSztBQUc1Qix3QkFBZTtBQUdmLHdCQUFlOztFQTNCeEUsSUFBSSxRQUFnQjtBQUNsQixXQUFPLEtBQUs7RUFDZDtFQUNBLElBQUksTUFBTSxVQUFrQjtBQUMxQixTQUFLLFNBQVMsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUM7RUFDeEQ7RUF5QlEsb0JBQW9CO0FBQzFCLFNBQUssZUFBZSxLQUFLLGdCQUFnQixJQUFJLFNBQVksR0FBRyxLQUFLLEtBQUs7RUFDeEU7RUFFUSxrQkFBa0I7QUFDeEIsV0FBTyxLQUFLO0VBQ2Q7RUFFQSxTQUFTO0FBQ1AsVUFBTSx5QkFBeUIsU0FBUztNQUN0QyxXQUFXLFVBQVUsS0FBSyxLQUFLO0lBQ2pDLENBQUM7QUFFRCxXQUFPLE9BQU8sS0FBSyxjQUFjLHNIQUUwQixzQkFBc0I7RUFDbkY7QUFDRjtBQXhEYSxlQUtKLFNBQVMsQ0FBQyxRQUFZQyxPQUFNO0FBSS9CO0VBREgsU0FBUyxFQUFFLE1BQU0sUUFBUSxTQUFTLEtBQUssQ0FBQztHQVI5QixlQVNQO0FBU3dDO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FsQi9CLGVBa0JpQztBQU1BO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0F4Qi9CLGVBd0JpQztBQUdmO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQTNCaEIsZUEyQmtCO0FBRzRCO0VBQXhELFNBQVMsRUFBRSxXQUFXLGlCQUFpQixTQUFTLEtBQUssQ0FBQztHQTlCNUMsZUE4QjhDO0FBR0E7RUFBeEQsU0FBUyxFQUFFLFdBQVcsaUJBQWlCLFNBQVMsS0FBSyxDQUFDO0dBakM1QyxlQWlDOEM7QUFHQTtFQUF4RCxTQUFTLEVBQUUsV0FBVyxpQkFBaUIsU0FBUyxLQUFLLENBQUM7R0FwQzVDLGVBb0M4QztBQUdqRDtFQURQLFNBQVMsQ0FBQyxTQUFTLE1BQU0sR0FBRyxFQUFFLElBQUksT0FBTyxDQUFDO0dBdENoQyxlQXVDSDtBQXZDRyxpQkFBTjtFQUROLGNBQWMsa0JBQWtCO0dBQ3BCOyIsCiAgIm5hbWVzIjogWyJzdHlsZXMiLCAic3R5bGVzIl0KfQo=
