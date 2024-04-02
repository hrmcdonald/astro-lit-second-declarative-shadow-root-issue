import "../../chunks/chunk.DYYIIZPZ.js";
import "../../chunks/chunk.K7IFCJCW.js";
import {
  MteText
} from "../../chunks/chunk.AGXDFGNI.js";
import "../../chunks/chunk.D4QL7DP6.js";
import "../../chunks/chunk.L7F3KXB6.js";
import {
  MteLocalizeService,
  SlotObserverMixin,
  StatusColorMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  isSsr,
  onUpdate,
  styles7 as styles
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/statistic/statistic.element.ts
import { html } from "lit";
import { property, query, state } from "lit/decorators.js";

// src/atomic/statistic/statistic.styles.ts
import { css } from "lit";
var styles2 = css`:host{--color:inherit;--gap:var(--mte-space-xxs);font-weight:var(--mte-font-weight-medium)}.content{align-items:center;color:var(--color);display:flex;flex-direction:row;gap:var(--gap)}:host([lineClamp]) .content{display:-webkit-inline-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}:host([lineClamp][block]) .content{display:-webkit-box}:host([noWrap]) .content{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([size=xxs]) .content{font-size:.625rem}:host([size=xs]) .content{font-size:.75rem}:host([size=sm]) .content{font-size:.875rem}:host([size=md]) .content{font-size:1rem}:host([size=lg]) .content{font-size:1.25rem}:host([size=xl]) .content{font-size:1.5rem}:host([size=xxl]) .content{font-size:1.75rem}:host([italic]) .content{font-style:italic}:host([underline]) .content{text-decoration:underline}:host([strikethrough]) .content{text-decoration:line-through}:host([underline][strikethrough]) .content{text-decoration:underline line-through}:host([transform=lowercase]) .content{text-transform:lowercase}:host([transform=uppercase]) .content{text-transform:uppercase}:host([transform=capitalize]) .content{text-transform:capitalize}:host([muted]) .content{--color:var(--mte-ink-2)}:host([color=primary]) .content{--color:rgb(var(--mte-status-primary-base-rgb))}:host([color=secondary]) .content{--color:rgb(var(--mte-status-secondary-base-rgb))}:host([color=tertiary]) .content{--color:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=success]) .content{--color:rgb(var(--mte-status-success-base-rgb))}:host([color=warning]) .content{--color:rgb(var(--mte-status-warning-base-rgb))}:host([color=danger]) .content{--color:rgb(var(--mte-status-danger-base-rgb))}`;

// src/atomic/statistic/statistic.element.ts
import { when } from "lit-html/directives/when.js";
import { classMap } from "lit-html/directives/class-map.js";
import anime from "animejs";
var MteStatistic = class extends SlotObserverMixin(
  StatusColorMixin(StylePartsMixin(MteText))
) {
  constructor() {
    super(...arguments);
    this.value = 0;
    this.animationDuration = 1e3;
    this.easing = "linear";
    this.withoutAnimation = false;
    this.withoutFormatting = false;
    this.type = "decimal";
    this.noGrouping = false;
    this.currency = "USD";
    this.currencyDisplay = "symbol";
    this.size = "lg";
    this.labelSize = "sm";
    this.labelFontWeight = "normal";
    this.isDecimalValue = true;
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      requestAnimationFrame(() => {
        this.animateFromTo(0, this.value);
      });
    });
  }
  handleIsDecimalUpdate() {
    this.isDecimalValue = this.type === "currency" ? true : this.value % 1 !== 0;
  }
  // Hook into `update` for manual value formatting
  update(changedProps) {
    super.update(changedProps);
    if (!isSsr() && this.__firstUpdated) {
      if (changedProps.has("value")) {
        this.animateFromTo(changedProps.get("value"), this.value);
      } else if (changedProps.size > 0) {
        this.outputNode.innerText = `${this.formatAnimatedValue(this.value)}`;
      }
    }
  }
  animateFromTo(from, to) {
    if (this.reduceMotion()) {
      this.outputNode.innerText = `${this.formatAnimatedValue(this.value)}`;
    } else {
      const animationState = { val: from };
      this.animationRef = anime({
        targets: animationState,
        val: to,
        duration: this.animationDuration,
        easing: "easeInOutSine",
        update: () => {
          this.outputNode.innerText = `${this.formatAnimatedValue(animationState.val)}`;
        }
      });
    }
  }
  formatAnimatedValue(value) {
    if (this.withoutFormatting) {
      return this.isDecimalValue ? Math.round(value * 100) / 100 : Math.round(value);
    } else {
      return this.format(value, this.isDecimalValue);
    }
  }
  reduceMotion() {
    if (this.withoutAnimation || globalThis?.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return true;
    }
    return false;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.animationRef?.remove();
  }
  format(value, isDecimalValue = true) {
    return MteLocalizeService.formatNumber(value, {
      lang: this.lang,
      style: this.type,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      // If not set and decimal value was given, ignore. If not set and min is set, must be >= min.
      maximumFractionDigits: this.maximumFractionDigits ?? isDecimalValue ? null : this.minimumFractionDigits ?? 0,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits
    });
  }
  render() {
    const hasLabel = !!this.hasSlot("label", this.label);
    const hasSuffix = !!this.hasSlot("suffix", this.suffix);
    return html`${this.instanceStyles}<div class="container ${classMap({ "has-content": hasLabel || hasSuffix })}"><slot name="label">${when(
      this.label,
      () => html`<mte-text muted size="${this.labelSize}" fw="${this.labelFontWeight}" class="label" part="label">${this.label}</mte-text>`
    )}</slot><div class="content"><slot name="prefix"></slot><mte-visually-hidden>${this.withoutFormatting ? this.value : this.format(this.value, this.isDecimalValue)}</mte-visually-hidden><div id="output" aria-hidden="true"> </div><slot name="suffix">${when(this.suffix, () => html`<div class="suffix" part="suffix">${this.suffix}</div>`)}</slot></div></div>`;
  }
};
MteStatistic.styles = [styles, styles2];
__decorateClass([
  property({ reflect: true, type: Number })
], MteStatistic.prototype, "value", 2);
__decorateClass([
  query("#output")
], MteStatistic.prototype, "outputNode", 2);
__decorateClass([
  property({ reflect: true, type: Number })
], MteStatistic.prototype, "animationDuration", 2);
__decorateClass([
  property({ reflect: true, type: String })
], MteStatistic.prototype, "easing", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteStatistic.prototype, "withoutAnimation", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteStatistic.prototype, "withoutFormatting", 2);
__decorateClass([
  property()
], MteStatistic.prototype, "type", 2);
__decorateClass([
  property({ type: Boolean })
], MteStatistic.prototype, "noGrouping", 2);
__decorateClass([
  property()
], MteStatistic.prototype, "currency", 2);
__decorateClass([
  property()
], MteStatistic.prototype, "currencyDisplay", 2);
__decorateClass([
  property({ type: Number })
], MteStatistic.prototype, "minimumIntegerDigits", 2);
__decorateClass([
  property({ type: Number })
], MteStatistic.prototype, "minimumFractionDigits", 2);
__decorateClass([
  property({ type: Number })
], MteStatistic.prototype, "maximumFractionDigits", 2);
__decorateClass([
  property({ type: Number })
], MteStatistic.prototype, "minimumSignificantDigits", 2);
__decorateClass([
  property({ type: Number })
], MteStatistic.prototype, "maximumSignificantDigits", 2);
__decorateClass([
  property({ attribute: "aria-label", reflect: true })
], MteStatistic.prototype, "ariaLabel", 2);
__decorateClass([
  property({ reflect: true, type: String })
], MteStatistic.prototype, "label", 2);
__decorateClass([
  property({ reflect: true, type: String })
], MteStatistic.prototype, "suffix", 2);
__decorateClass([
  property({ reflect: true })
], MteStatistic.prototype, "size", 2);
__decorateClass([
  property({ reflect: true })
], MteStatistic.prototype, "labelSize", 2);
__decorateClass([
  property({ reflect: true })
], MteStatistic.prototype, "labelFontWeight", 2);
__decorateClass([
  state()
], MteStatistic.prototype, "isDecimalValue", 2);
__decorateClass([
  onUpdate(["value", "type"])
], MteStatistic.prototype, "handleIsDecimalUpdate", 1);
MteStatistic = __decorateClass([
  defineElement("mte-statistic")
], MteStatistic);
export {
  MteStatistic
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zdGF0aXN0aWMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zdGF0aXN0aWMvc3RhdGlzdGljLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tY29sb3I6aW5oZXJpdDstLWdhcDp2YXIoLS1tdGUtc3BhY2UteHhzKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC13ZWlnaHQtbWVkaXVtKX0uY29udGVudHthbGlnbi1pdGVtczpjZW50ZXI7Y29sb3I6dmFyKC0tY29sb3IpO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7Z2FwOnZhcigtLWdhcCl9Omhvc3QoW2xpbmVDbGFtcF0pIC5jb250ZW50e2Rpc3BsYXk6LXdlYmtpdC1pbmxpbmUtYm94O292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzOy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbH06aG9zdChbbGluZUNsYW1wXVtibG9ja10pIC5jb250ZW50e2Rpc3BsYXk6LXdlYmtpdC1ib3h9Omhvc3QoW25vV3JhcF0pIC5jb250ZW50e2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfTpob3N0KFtzaXplPXh4c10pIC5jb250ZW50e2ZvbnQtc2l6ZTouNjI1cmVtfTpob3N0KFtzaXplPXhzXSkgLmNvbnRlbnR7Zm9udC1zaXplOi43NXJlbX06aG9zdChbc2l6ZT1zbV0pIC5jb250ZW50e2ZvbnQtc2l6ZTouODc1cmVtfTpob3N0KFtzaXplPW1kXSkgLmNvbnRlbnR7Zm9udC1zaXplOjFyZW19Omhvc3QoW3NpemU9bGddKSAuY29udGVudHtmb250LXNpemU6MS4yNXJlbX06aG9zdChbc2l6ZT14bF0pIC5jb250ZW50e2ZvbnQtc2l6ZToxLjVyZW19Omhvc3QoW3NpemU9eHhsXSkgLmNvbnRlbnR7Zm9udC1zaXplOjEuNzVyZW19Omhvc3QoW2l0YWxpY10pIC5jb250ZW50e2ZvbnQtc3R5bGU6aXRhbGljfTpob3N0KFt1bmRlcmxpbmVdKSAuY29udGVudHt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfTpob3N0KFtzdHJpa2V0aHJvdWdoXSkgLmNvbnRlbnR7dGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaH06aG9zdChbdW5kZXJsaW5lXVtzdHJpa2V0aHJvdWdoXSkgLmNvbnRlbnR7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSBsaW5lLXRocm91Z2h9Omhvc3QoW3RyYW5zZm9ybT1sb3dlcmNhc2VdKSAuY29udGVudHt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2V9Omhvc3QoW3RyYW5zZm9ybT11cHBlcmNhc2VdKSAuY29udGVudHt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9Omhvc3QoW3RyYW5zZm9ybT1jYXBpdGFsaXplXSkgLmNvbnRlbnR7dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZX06aG9zdChbbXV0ZWRdKSAuY29udGVudHstLWNvbG9yOnZhcigtLW10ZS1pbmstMil9Omhvc3QoW2NvbG9yPXByaW1hcnldKSAuY29udGVudHstLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XSkgLmNvbnRlbnR7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9dGVydGlhcnldKSAuY29udGVudHstLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXN1Y2Nlc3NdKSAuY29udGVudHstLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9d2FybmluZ10pIC5jb250ZW50ey0tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1kYW5nZXJdKSAuY29udGVudHstLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1iYXNlLXJnYikpfWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUF5QixZQUFZO0FBQ3JDLFNBQVMsVUFBVSxPQUFPLGFBQWE7OztBQ0R2QyxTQUFTLFdBQVc7QUFBYSxJQUFNQSxVQUFTOzs7QURpQmhELFNBQVMsWUFBWTtBQUNyQixTQUFTLGdCQUFnQjtBQUV6QixPQUFPLFdBQVc7QUFtQlgsSUFBTSxlQUFOLGNBQTJCO0VBQ2hDLGlCQUFpQixnQkFBbUQsT0FBTyxDQUFDO0FBQzlFLEVBQUU7RUFGSzs7QUFNc0MsaUJBQVE7QUFLUiw2QkFBb0I7QUFHcEIsa0JBQVM7QUFHUiw0QkFBbUI7QUFHbkIsNkJBQW9CO0FBR3BELGdCQUEyQztBQUcxQixzQkFBYTtBQUc5QixvQkFBVztBQUdYLDJCQUErRDtBQXdCOUMsZ0JBQTBEO0FBRzFELHFCQUErRDtBQUcvRCwyQkFrQmpCO0FBTUgsMEJBQWlCOztFQUUxQixvQkFBb0I7QUFDbEIsVUFBTSxrQkFBa0I7QUFFeEIsU0FBSyxlQUFlLEtBQUssTUFBTTtBQUM3Qiw0QkFBc0IsTUFBTTtBQUMxQixhQUFLLGNBQWMsR0FBRyxLQUFLLEtBQUs7TUFDbEMsQ0FBQztJQUNILENBQUM7RUFDSDtFQUdRLHdCQUF3QjtBQUM5QixTQUFLLGlCQUFpQixLQUFLLFNBQVMsYUFBYSxPQUFPLEtBQUssUUFBUSxNQUFNO0VBQzdFOztFQUdBLE9BQU8sY0FBb0M7QUFDekMsVUFBTSxPQUFPLFlBQVk7QUFFekIsUUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLGdCQUFnQjtBQUVuQyxVQUFJLGFBQWEsSUFBSSxPQUFPLEdBQUc7QUFDN0IsYUFBSyxjQUFjLGFBQWEsSUFBSSxPQUFPLEdBQUcsS0FBSyxLQUFLO01BQzFELFdB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
