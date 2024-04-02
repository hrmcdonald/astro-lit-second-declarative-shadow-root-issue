import {
  MteElement,
  PresetMixinFactory,
  SizeMixin,
  StatusColorMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  styles7 as styles
} from "./chunk.Y4EV6E5D.js";

// src/atomic/badge/badge.element.ts
import { html } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

// src/atomic/badge/badge.styles.ts
import { css } from "lit";
var styles2 = css`:host{--badge-background:var(--mte-border-2);--badge-color:var(--mte-ink-1);--badge-translate-x:0%;--badge-translate-y:0%;--badge-padding:5px;--badge-outline-color:var(--mte-surface-1);align-items:center;display:inline-flex;position:relative;width:-moz-fit-content;width:fit-content}.content{position:relative}.label{align-items:center;background:var(--badge-background);border-radius:var(--mte-border-radius-full);box-shadow:0 0 0 1px var(--badge-outline-color);box-sizing:content-box;color:var(--badge-color);display:inline-flex;font-family:inherit;font-size:inherit;font-weight:inherit;justify-content:center;line-height:inherit;line-height:1;padding:calc(var(--badge-padding)*.75);pointer-events:none;text-align:center;text-decoration:inherit;text-transform:inherit;transform:translate(var(--badge-translate-x),var(--badge-translate-y));white-space:nowrap;z-index:var(--mte-z-index-10)}:host([size=sm]) .label{font-size:calc(var(--mte-font-set-body1-font-size)*.625);min-height:calc(1ch + var(--badge-padding)*1*2);min-width:1ch;padding:0 calc(var(--badge-padding)*1)}:host .label,:host([size=md]) .label{font-size:calc(var(--mte-font-set-body1-font-size)*.75);min-height:calc(1ch + var(--badge-padding)*1.4*2);min-width:1ch;padding:0 calc(var(--badge-padding)*1.4)}:host([size=lg]) .label{font-size:calc(var(--mte-font-set-body1-font-size)*.9375);min-height:calc(1ch + var(--badge-padding)*1.7*2);min-width:1ch;padding:0 calc(var(--badge-padding)*1.7)}:host([dot]) .label{height:var(--mte-space-comfy-sm);min-height:var(--mte-space-comfy-sm);min-width:var(--mte-space-comfy-sm);padding:0;width:var(--mte-space-comfy-sm)}:host([placement=end]) .label,:host([placement=start]) .label,:host([position=bottom]) .label,:host([position=top]) .label{position:absolute}:host([placement=start]) .label{--badge-translate-x:-50%;left:0;right:unset}:host([placement=end]) .label{--badge-translate-x:50%;left:unset;right:0}:host([position=top]) .label{--badge-translate-y:-50%;bottom:unset;top:0}:host([position=bottom]) .label{--badge-translate-y:50%;bottom:0;top:unset}:host([placement=start][withoutOverlap]) .label{--badge-translate-x:calc(-100% - 2px)}:host([placement=end][withoutOverlap]) .label{--badge-translate-x:calc(100% + 2px)}:host([placement=unset]) .label,:host([position=unset]) .label{position:unset}:host([position=unset]) .label{bottom:unset;top:unset}:host([placement=unset]) .label{left:unset;right:unset}:host([hide]) .label,:host([value="0"]:not([withShowZero])) .label{display:none}:host([color=primary]) .label{--badge-background:rgb(var(--mte-status-primary-base-rgb));--badge-color:rgb(var(--mte-status-primary-base-c-rgb))}:host([color=secondary]) .label{--badge-background:rgb(var(--mte-status-secondary-base-rgb));--badge-color:rgb(var(--mte-status-secondary-base-c-rgb))}:host([color=tertiary]) .label{--badge-background:rgb(var(--mte-status-tertiary-base-rgb));--badge-color:rgb(var(--mte-status-tertiary-base-c-rgb))}:host([color=success]) .label{--badge-background:rgb(var(--mte-status-success-base-rgb));--badge-color:rgb(var(--mte-status-success-base-c-rgb))}:host([color=warning]) .label{--badge-background:rgb(var(--mte-status-warning-base-rgb));--badge-color:rgb(var(--mte-status-warning-base-c-rgb))}:host([color=danger]) .label{--badge-background:rgb(var(--mte-status-danger-base-rgb));--badge-color:rgb(var(--mte-status-danger-base-c-rgb))}:host([withoutOutline]) .label{box-shadow:var(--mte-elevation-z1)}`;

// src/atomic/badge/badge.element.ts
var MteBadge = class extends PresetMixinFactory("MteBadge")(
  StatusColorMixin(SizeMixin(StylePartsMixin(MteElement)))
) {
  constructor() {
    super(...arguments);
    this.position = "top";
    this.placement = "end";
    this.withoutOverlap = false;
    this.dot = false;
    this.withShowZero = false;
    this.hide = false;
    this.withoutOutline = false;
    this._value = "";
    this._inheritedAttributes = {};
  }
  get value() {
    return this._value;
  }
  set value(val) {
    if (typeof val === "string" && Number.isFinite(val)) {
      this._value = Number.parseFloat(val);
    } else {
      this._value = val;
    }
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    if (changedProperties.has("ariaLabel")) {
      this._inheritedAttributes = {
        ...this._inheritedAttributes,
        ariaLabel: this.ariaLabel
      };
      this.removeAttribute("aria-label");
    }
    if (changedProperties.has("role")) {
      this._inheritedAttributes = {
        ...this._inheritedAttributes,
        role: this.role
      };
      this.removeAttribute("role");
    }
  }
  renderLabelTemplate(value) {
    const showLimit = Number.isFinite(this.limit) && Number(value) > this.limit;
    const labelValue = showLimit ? this.limit : value;
    if (this.dot) {
      return html`<span part="label" class="label" aria-label="${ifDefined(this._inheritedAttributes.ariaLabel)}" role="${ifDefined(this._inheritedAttributes.role)}"></span>`;
    }
    return html`<span part="label" class="label" aria-label="${ifDefined(this._inheritedAttributes.ariaLabel)}" role="${ifDefined(this._inheritedAttributes.role)}">${labelValue}${showLimit ? "+" : ""}</span>`;
  }
  render() {
    return html`${this.instanceStyles}<slot></slot>${this.renderLabelTemplate(this.value)}`;
  }
};
MteBadge.styles = [styles, styles2];
__decorateClass([
  property({ reflect: true })
], MteBadge.prototype, "position", 2);
__decorateClass([
  property({ reflect: true })
], MteBadge.prototype, "placement", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteBadge.prototype, "withoutOverlap", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteBadge.prototype, "dot", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteBadge.prototype, "withShowZero", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteBadge.prototype, "hide", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteBadge.prototype, "withoutOutline", 2);
__decorateClass([
  property({ type: Number })
], MteBadge.prototype, "limit", 2);
__decorateClass([
  property()
], MteBadge.prototype, "role", 2);
__decorateClass([
  property({ attribute: "aria-label", reflect: true })
], MteBadge.prototype, "ariaLabel", 2);
__decorateClass([
  property({ type: [Number, String], reflect: true })
], MteBadge.prototype, "value", 1);
MteBadge = __decorateClass([
  defineElement("mte-badge")
], MteBadge);

export {
  MteBadge
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2F0b21pYy9iYWRnZSIsICIuLi8uLi8uLi9zcmMvYXRvbWljL2JhZGdlL2JhZGdlLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tYmFkZ2UtYmFja2dyb3VuZDp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tYmFkZ2UtY29sb3I6dmFyKC0tbXRlLWluay0xKTstLWJhZGdlLXRyYW5zbGF0ZS14OjAlOy0tYmFkZ2UtdHJhbnNsYXRlLXk6MCU7LS1iYWRnZS1wYWRkaW5nOjVweDstLWJhZGdlLW91dGxpbmUtY29sb3I6dmFyKC0tbXRlLXN1cmZhY2UtMSk7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6aW5saW5lLWZsZXg7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6LW1vei1maXQtY29udGVudDt3aWR0aDpmaXQtY29udGVudH0uY29udGVudHtwb3NpdGlvbjpyZWxhdGl2ZX0ubGFiZWx7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6dmFyKC0tYmFkZ2UtYmFja2dyb3VuZCk7Ym9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1mdWxsKTtib3gtc2hhZG93OjAgMCAwIDFweCB2YXIoLS1iYWRnZS1vdXRsaW5lLWNvbG9yKTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2NvbG9yOnZhcigtLWJhZGdlLWNvbG9yKTtkaXNwbGF5OmlubGluZS1mbGV4O2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2xpbmUtaGVpZ2h0OmluaGVyaXQ7bGluZS1oZWlnaHQ6MTtwYWRkaW5nOmNhbGModmFyKC0tYmFkZ2UtcGFkZGluZykqLjc1KTtwb2ludGVyLWV2ZW50czpub25lO3RleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1iYWRnZS10cmFuc2xhdGUteCksdmFyKC0tYmFkZ2UtdHJhbnNsYXRlLXkpKTt3aGl0ZS1zcGFjZTpub3dyYXA7ei1pbmRleDp2YXIoLS1tdGUtei1pbmRleC0xMCl9Omhvc3QoW3NpemU9c21dKSAubGFiZWx7Zm9udC1zaXplOmNhbGModmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtc2l6ZSkqLjYyNSk7bWluLWhlaWdodDpjYWxjKDFjaCArIHZhcigtLWJhZGdlLXBhZGRpbmcpKjEqMik7bWluLXdpZHRoOjFjaDtwYWRkaW5nOjAgY2FsYyh2YXIoLS1iYWRnZS1wYWRkaW5nKSoxKX06aG9zdCAubGFiZWwsOmhvc3QoW3NpemU9bWRdKSAubGFiZWx7Zm9udC1zaXplOmNhbGModmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtc2l6ZSkqLjc1KTttaW4taGVpZ2h0OmNhbGMoMWNoICsgdmFyKC0tYmFkZ2UtcGFkZGluZykqMS40KjIpO21pbi13aWR0aDoxY2g7cGFkZGluZzowIGNhbGModmFyKC0tYmFkZ2UtcGFkZGluZykqMS40KX06aG9zdChbc2l6ZT1sZ10pIC5sYWJlbHtmb250LXNpemU6Y2FsYyh2YXIoLS1tdGUtZm9udC1zZXQtYm9keTEtZm9udC1zaXplKSouOTM3NSk7bWluLWhlaWdodDpjYWxjKDFjaCArIHZhcigtLWJhZGdlLXBhZGRpbmcpKjEuNyoyKTttaW4td2lkdGg6MWNoO3BhZGRpbmc6MCBjYWxjKHZhcigtLWJhZGdlLXBhZGRpbmcpKjEuNyl9Omhvc3QoW2RvdF0pIC5sYWJlbHtoZWlnaHQ6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXNtKTttaW4taGVpZ2h0OnZhcigtLW10ZS1zcGFjZS1jb21meS1zbSk7bWluLXdpZHRoOnZhcigtLW10ZS1zcGFjZS1jb21meS1zbSk7cGFkZGluZzowO3dpZHRoOnZhcigtLW10ZS1zcGFjZS1jb21meS1zbSl9Omhvc3QoW3BsYWNlbWVudD1lbmRdKSAubGFiZWwsOmhvc3QoW3BsYWNlbWVudD1zdGFydF0pIC5sYWJlbCw6aG9zdChbcG9zaXRpb249Ym90dG9tXSkgLmxhYmVsLDpob3N0KFtwb3NpdGlvbj10b3BdKSAubGFiZWx7cG9zaXRpb246YWJzb2x1dGV9Omhvc3QoW3BsYWNlbWVudD1zdGFydF0pIC5sYWJlbHstLWJhZGdlLXRyYW5zbGF0ZS14Oi01MCU7bGVmdDowO3JpZ2h0OnVuc2V0fTpob3N0KFtwbGFjZW1lbnQ9ZW5kXSkgLmxhYmVsey0tYmFkZ2UtdHJhbnNsYXRlLXg6NTAlO2xlZnQ6dW5zZXQ7cmlnaHQ6MH06aG9zdChbcG9zaXRpb249dG9wXSkgLmxhYmVsey0tYmFkZ2UtdHJhbnNsYXRlLXk6LTUwJTtib3R0b206dW5zZXQ7dG9wOjB9Omhvc3QoW3Bvc2l0aW9uPWJvdHRvbV0pIC5sYWJlbHstLWJhZGdlLXRyYW5zbGF0ZS15OjUwJTtib3R0b206MDt0b3A6dW5zZXR9Omhvc3QoW3BsYWNlbWVudD1zdGFydF1bd2l0aG91dE92ZXJsYXBdKSAubGFiZWx7LS1iYWRnZS10cmFuc2xhdGUteDpjYWxjKC0xMDAlIC0gMnB4KX06aG9zdChbcGxhY2VtZW50PWVuZF1bd2l0aG91dE92ZXJsYXBdKSAubGFiZWx7LS1iYWRnZS10cmFuc2xhdGUteDpjYWxjKDEwMCUgKyAycHgpfTpob3N0KFtwbGFjZW1lbnQ9dW5zZXRdKSAubGFiZWwsOmhvc3QoW3Bvc2l0aW9uPXVuc2V0XSkgLmxhYmVse3Bvc2l0aW9uOnVuc2V0fTpob3N0KFtwb3NpdGlvbj11bnNldF0pIC5sYWJlbHtib3R0b206dW5zZXQ7dG9wOnVuc2V0fTpob3N0KFtwbGFjZW1lbnQ9dW5zZXRdKSAubGFiZWx7bGVmdDp1bnNldDtyaWdodDp1bnNldH06aG9zdChbaGlkZV0pIC5sYWJlbCw6aG9zdChbdmFsdWU9XCIwXCJdOm5vdChbd2l0aFNob3daZXJvXSkpIC5sYWJlbHtkaXNwbGF5Om5vbmV9Omhvc3QoW2NvbG9yPXByaW1hcnldKSAubGFiZWx7LS1iYWRnZS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktYmFzZS1yZ2IpKTstLWJhZGdlLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktYmFzZS1jLXJnYikpfTpob3N0KFtjb2xvcj1zZWNvbmRhcnldKSAubGFiZWx7LS1iYWRnZS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1iYXNlLXJnYikpOy0tYmFkZ2UtY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtYy1yZ2IpKX06aG9zdChbY29sb3I9dGVydGlhcnldKSAubGFiZWx7LS1iYWRnZS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWJhc2UtcmdiKSk7LS1iYWRnZS1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1iYXNlLWMtcmdiKSl9Omhvc3QoW2NvbG9yPXN1Y2Nlc3NdKSAubGFiZWx7LS1iYWRnZS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtYmFzZS1yZ2IpKTstLWJhZGdlLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtYmFzZS1jLXJnYikpfTpob3N0KFtjb2xvcj13YXJuaW5nXSkgLmxhYmVsey0tYmFkZ2UtYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWJhc2UtcmdiKSk7LS1iYWRnZS1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWJhc2UtYy1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXSkgLmxhYmVsey0tYmFkZ2UtYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItYmFzZS1yZ2IpKTstLWJhZGdlLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1iYXNlLWMtcmdiKSl9Omhvc3QoW3dpdGhvdXRPdXRsaW5lXSkgLmxhYmVse2JveC1z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
