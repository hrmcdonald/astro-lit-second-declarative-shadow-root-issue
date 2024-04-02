import "../../chunks/chunk.FSBXRO6N.js";
import "../../chunks/chunk.5AAXKTSO.js";
import "../../chunks/chunk.D6N6Z2UH.js";
import "../../chunks/chunk.F33MBUAV.js";
import "../../chunks/chunk.SRHT6JKE.js";
import "../../chunks/chunk.CFKDY3QJ.js";
import "../../chunks/chunk.D4QL7DP6.js";
import {
  MteIconRegistryService
} from "../../chunks/chunk.L7F3KXB6.js";
import {
  DisabledMixin,
  MteContentBase,
  MteElement,
  PresetMixinFactory,
  RadiusMixin,
  SizeMixin,
  StatusColorMixin,
  StylePartsMixin,
  __decorateClass,
  css,
  defineElement,
  eventEmitter,
  isSsr,
  styles7 as styles
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/tag/tag-list.element.ts
import { html } from "lit";
import { property } from "lit/decorators.js";
import { config } from "@mortar/styles";
var MteTagList = class extends MteContentBase {
  constructor() {
    super(...arguments);
    this.role = "list";
  }
  connectedCallback() {
    super.connectedCallback();
    if (!isSsr()) {
      this.addEventListener("onSelect", this.handleChildEvents);
      this.addEventListener("onRemove", this.handleChildEvents);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("onSelect", this.handleChildEvents);
    this.removeEventListener("onRemove", this.handleChildEvents);
  }
  handleChildEvents(event) {
    this._onChange.emit(event.detail);
  }
  render() {
    return html`${this.instanceStyles}<slot></slot>`;
  }
};
MteTagList.styles = [
  styles,
  css` :host { display: flex; flex-wrap: wrap; align-items: center; width: auto; gap: ${config.space.sm}; } `
];
__decorateClass([
  property({ reflect: true })
], MteTagList.prototype, "role", 2);
__decorateClass([
  eventEmitter()
], MteTagList.prototype, "_onChange", 2);
MteTagList = __decorateClass([
  defineElement("mte-tag-list")
], MteTagList);

// src/atomic/tag/tag.element.ts
import { html as html2 } from "lit";

// src/atomic/tag/tag.styles.ts
import { css as css2 } from "lit";
var styles2 = css2`:host{--background:transparent;--color:inherit;--border-style:solid;--border-width:1px;--border-radius:var(--mte-border-radius-sm);--border-color:var(--mte-border-2);--padding-y:2px;--padding-x:8px;--font-size:0.75rem;--icon-margin:4px;align-items:center;background:var(--background);border-color:var(--border-color);border-radius:var(--border-radius);border-style:var(--border-style);border-width:var(--border-width);color:var(--color);display:inline-flex;font-family:inherit;font-size:inherit;font-size:var(--font-size);font-weight:inherit;line-height:inherit;padding:var(--padding-y) var(--padding-x) var(--padding-y) var(--padding-x);position:relative;text-decoration:inherit;text-transform:inherit;white-space:nowrap}.content{display:inline-flex;white-space:nowrap}.content,.prefix{align-items:center}.prefix{display:flex;justify-content:center;margin-right:var(--icon-margin)}.label,.prefix{align-self:center}.label{display:inline-block}.close{align-self:center;display:flex;margin-left:6px;padding:2px}:host([size=sm][removable]) .close{margin-left:6px;padding:1px}:host([size=lg][removable]) .close{margin-left:8px;padding:3px}:host([removable]:not([selectable])){padding:var(--padding-y) 3px var(--padding-y) var(--padding-x)}:host([size=sm]){--padding-x:6px;--font-size:0.625rem;font-weight:var(--mte-font-weight-bold)}:host([size=lg]){--padding-x:10px;--font-size:1rem}:host([radius=none]){--border-radius:var(--mte-border-radius-none)}:host([radius=sm]){--border-radius:var(--mte-border-radius-sm)}:host([radius=md]){--border-radius:var(--mte-border-radius-sm)}:host([radius=lg]){--border-radius:var(--mte-border-radius-xl)}:host([selectable]:hover){--background:var(--mte-surface-3);--border-color:var(--mte-border-3)}:host([selectable][selected]){--background:var(--mte-surface-4);--border-color:var(--mte-border-3);--color:var(--mte-ink-4)}:host([color=primary]){--background:rgb(var(--mte-status-primary-lighter-rgb));--color:rgb(var(--mte-status-primary-darker-rgb));--border-color:rgb(var(--mte-status-primary-light-rgb))}:host([selectable][color=primary]:hover){--background:rgb(var(--mte-status-primary-light-rgb));--color:rgb(var(--mte-status-primary-base-c-rgb));--border-color:rgb(var(--mte-status-primary-base-c-rgb))}:host([selectable][selected][color=primary]){--background:rgb(var(--mte-status-primary-base-rgb));--color:rgb(var(--mte-status-primary-dark-c-rgb));--border-color:rgb(var(--mte-status-primary-dark-c-rgb))}:host([color=secondary]){--background:rgb(var(--mte-status-secondary-lighter-rgb));--color:rgb(var(--mte-status-secondary-darker-rgb));--border-color:rgb(var(--mte-status-secondary-light-rgb))}:host([selectable][color=secondary]:hover){--background:rgb(var(--mte-status-secondary-light-rgb));--color:rgb(var(--mte-status-secondary-base-c-rgb));--border-color:rgb(var(--mte-status-secondary-base-c-rgb))}:host([selectable][selected][color=secondary]){--background:rgb(var(--mte-status-secondary-base-rgb));--color:rgb(var(--mte-status-secondary-dark-c-rgb));--border-color:rgb(var(--mte-status-secondary-dark-c-rgb))}:host([color=tertiary]){--background:rgb(var(--mte-status-tertiary-lighter-rgb));--color:rgb(var(--mte-status-tertiary-darker-rgb));--border-color:rgb(var(--mte-status-tertiary-light-rgb))}:host([selectable][color=tertiary]:hover){--background:rgb(var(--mte-status-tertiary-light-rgb));--color:rgb(var(--mte-status-tertiary-base-c-rgb));--border-color:rgb(var(--mte-status-tertiary-base-c-rgb))}:host([selectable][selected][color=tertiary]){--background:rgb(var(--mte-status-tertiary-base-rgb));--color:rgb(var(--mte-status-tertiary-dark-c-rgb));--border-color:rgb(var(--mte-status-tertiary-dark-c-rgb))}:host([color=success]){--background:rgb(var(--mte-status-success-lighter-rgb));--color:rgb(var(--mte-status-success-darker-rgb));--border-color:rgb(var(--mte-status-success-light-rgb))}:host([selectable][color=success]:hover){--background:rgb(var(--mte-status-success-light-rgb));--color:rgb(var(--mte-status-success-base-c-rgb));--border-color:rgb(var(--mte-status-success-base-c-rgb))}:host([selectable][selected][color=success]){--background:rgb(var(--mte-status-success-base-rgb));--color:rgb(var(--mte-status-success-dark-c-rgb));--border-color:rgb(var(--mte-status-success-dark-c-rgb))}:host([color=warning]){--background:rgb(var(--mte-status-warning-lighter-rgb));--color:rgb(var(--mte-status-warning-darker-rgb));--border-color:rgb(var(--mte-status-warning-light-rgb))}:host([selectable][color=warning]:hover){--background:rgb(var(--mte-status-warning-light-rgb));--color:rgb(var(--mte-status-warning-base-c-rgb));--border-color:rgb(var(--mte-status-warning-base-c-rgb))}:host([selectable][selected][color=warning]){--background:rgb(var(--mte-status-warning-base-rgb));--color:rgb(var(--mte-status-warning-dark-c-rgb));--border-color:rgb(var(--mte-status-warning-dark-c-rgb))}:host([color=danger]){--background:rgb(var(--mte-status-danger-lighter-rgb));--color:rgb(var(--mte-status-danger-darker-rgb));--border-color:rgb(var(--mte-status-danger-light-rgb))}:host([selectable][color=danger]:hover){--background:rgb(var(--mte-status-danger-light-rgb));--color:rgb(var(--mte-status-danger-base-c-rgb));--border-color:rgb(var(--mte-status-danger-base-c-rgb))}:host([selectable][selected][color=danger]){--background:rgb(var(--mte-status-danger-base-rgb));--color:rgb(var(--mte-status-danger-dark-c-rgb));--border-color:rgb(var(--mte-status-danger-dark-c-rgb))}:host([selectable]){cursor:pointer}:host([selectable]) .content:focus{outline:none}.content[role=checkbox]:focus-visible:not(.disabled):not([disabled]):not(:disabled):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);bottom:-4px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-4px;pointer-events:none;position:absolute;right:-4px;top:-4px;z-index:9}:host([disabled]),:host([removable][disabled]) .close,:host([selectable][disabled]){cursor:not-allowed;--color:var(--mte-disabled-4);--border-color:var(--mte-disabled-2);--background:var(--mte-disabled-1)}`;

// src/atomic/tag/tag.element.ts
import { property as property2 } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit-html/directives/when.js";
import { mtrIconClose } from "@mortar/icons";
MteIconRegistryService.registerIcons([mtrIconClose]);
var nextUniqueId = 0;
var iconButtonSizes = {
  sm: {
    icon: {
      "--icon-size": "10px"
    }
  },
  md: null,
  lg: {
    icon: {
      "--icon-size": "14px"
    }
  }
};
var MteTag = class extends RadiusMixin(
  SizeMixin(
    StatusColorMixin(
      DisabledMixin(
        PresetMixinFactory("MteTag")(
          StylePartsMixin(MteElement)
        )
      )
    )
  )
) {
  constructor() {
    super(...arguments);
    this.uniqueId = `${nextUniqueId++}`;
    this.selectable = false;
    this.selected = false;
    this.removable = false;
    this.closeLabel = "Remove";
    this.iconLibrary = "_default";
    this.id = `mte-tag--${this.uniqueId}`;
  }
  connectedCallback() {
    super.connectedCallback();
    if (!isSsr() && this.parentElement?.role === "list") {
      this.role = "listitem";
    }
  }
  handleSelectKeyDown(event) {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      this.toggleSelected();
    }
  }
  handleRemoveKeyDown(event) {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      this.handleRemove();
    }
  }
  toggleSelected() {
    if (this.selectable && !this.disabled) {
      this.selected = !this.selected;
      this._onSelect.emit(
        {
          target: this,
          action: this.selected ? "select" : "deselect"
        },
        { bubbles: true }
      );
    }
  }
  handleRemove() {
    if (!this.disabled) {
      this._onRemove.emit(
        {
          target: this,
          action: "remove"
        },
        { bubbles: true }
      );
    }
  }
  render() {
    return html2`${this.instanceStyles}<div class="content" part="content" role="${ifDefined(this.selectable ? "checkbox" : null)}" tabindex="${ifDefined(this.selectable ? 0 : null)}" aria-checked="${ifDefined(this.selectable ? this.selected : null)}" @click="${this.toggleSelected}" @keydown="${this.handleSelectKeyDown}">${when(
      this.icon,
      () => html2`<span part="prefix" class="prefix"><mte-icon name="${this.icon}" size="${this.size === "sm" ? 10 : this.size === "lg" ? 16 : 12}" library="${ifDefined(this.iconLibrary)}"></mte-icon></span>`
    )}<slot part="label" class="label"></slot></div>${when(
      this.removable,
      () => html2`<mte-icon-button icon="close" class="close" part="closeButton" ?disabled="${this.disabled}" aria-label="${this.closeLabel}" size="sm" density="compact" .sp="${iconButtonSizes[this.size || "md"]}" @keydown="${this.handleRemoveKeyDown}" @click="${this.handleRemove}"></mte-icon-button>`
    )}`;
  }
};
MteTag.styles = [styles, styles2];
__decorateClass([
  property2({ reflect: true, type: Boolean })
], MteTag.prototype, "selectable", 2);
__decorateClass([
  property2({ reflect: true, type: Boolean })
], MteTag.prototype, "selected", 2);
__decorateClass([
  property2({ reflect: true })
], MteTag.prototype, "role", 2);
__decorateClass([
  property2({ reflect: true, type: Boolean })
], MteTag.prototype, "removable", 2);
__decorateClass([
  property2()
], MteTag.prototype, "closeLabel", 2);
__decorateClass([
  property2()
], MteTag.prototype, "icon", 2);
__decorateClass([
  property2()
], MteTag.prototype, "iconLibrary", 2);
__decorateClass([
  property2({ reflect: true })
], MteTag.prototype, "id", 2);
__decorateClass([
  eventEmitter()
], MteTag.prototype, "_onSelect", 2);
__decorateClass([
  eventEmitter()
], MteTag.prototype, "_onRemove", 2);
MteTag = __decorateClass([
  defineElement("mte-tag")
], MteTag);
export {
  MteTag,
  MteTagList
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90YWciLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90YWciLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90YWcvdGFnLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOmluaGVyaXQ7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1ib3JkZXItd2lkdGg6MXB4Oy0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1zbSk7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLXBhZGRpbmcteToycHg7LS1wYWRkaW5nLXg6OHB4Oy0tZm9udC1zaXplOjAuNzVyZW07LS1pY29uLW1hcmdpbjo0cHg7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtjb2xvcjp2YXIoLS1jb2xvcik7ZGlzcGxheTppbmxpbmUtZmxleDtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5oZXJpdDtwYWRkaW5nOnZhcigtLXBhZGRpbmcteSkgdmFyKC0tcGFkZGluZy14KSB2YXIoLS1wYWRkaW5nLXkpIHZhcigtLXBhZGRpbmcteCk7cG9zaXRpb246cmVsYXRpdmU7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3dyYXB9LmNvbnRlbnR7ZGlzcGxheTppbmxpbmUtZmxleDt3aGl0ZS1zcGFjZTpub3dyYXB9LmNvbnRlbnQsLnByZWZpeHthbGlnbi1pdGVtczpjZW50ZXJ9LnByZWZpeHtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW4tcmlnaHQ6dmFyKC0taWNvbi1tYXJnaW4pfS5sYWJlbCwucHJlZml4e2FsaWduLXNlbGY6Y2VudGVyfS5sYWJlbHtkaXNwbGF5OmlubGluZS1ibG9ja30uY2xvc2V7YWxpZ24tc2VsZjpjZW50ZXI7ZGlzcGxheTpmbGV4O21hcmdpbi1sZWZ0OjZweDtwYWRkaW5nOjJweH06aG9zdChbc2l6ZT1zbV1bcmVtb3ZhYmxlXSkgLmNsb3Nle21hcmdpbi1sZWZ0OjZweDtwYWRkaW5nOjFweH06aG9zdChbc2l6ZT1sZ11bcmVtb3ZhYmxlXSkgLmNsb3Nle21hcmdpbi1sZWZ0OjhweDtwYWRkaW5nOjNweH06aG9zdChbcmVtb3ZhYmxlXTpub3QoW3NlbGVjdGFibGVdKSl7cGFkZGluZzp2YXIoLS1wYWRkaW5nLXkpIDNweCB2YXIoLS1wYWRkaW5nLXkpIHZhcigtLXBhZGRpbmcteCl9Omhvc3QoW3NpemU9c21dKXstLXBhZGRpbmcteDo2cHg7LS1mb250LXNpemU6MC42MjVyZW07Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtd2VpZ2h0LWJvbGQpfTpob3N0KFtzaXplPWxnXSl7LS1wYWRkaW5nLXg6MTBweDstLWZvbnQtc2l6ZToxcmVtfTpob3N0KFtyYWRpdXM9bm9uZV0pey0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1ub25lKX06aG9zdChbcmFkaXVzPXNtXSl7LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXNtKX06aG9zdChbcmFkaXVzPW1kXSl7LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXNtKX06aG9zdChbcmFkaXVzPWxnXSl7LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXhsKX06aG9zdChbc2VsZWN0YWJsZV06aG92ZXIpey0tYmFja2dyb3VuZDp2YXIoLS1tdGUtc3VyZmFjZS0zKTstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTMpfTpob3N0KFtzZWxlY3RhYmxlXVtzZWxlY3RlZF0pey0tYmFja2dyb3VuZDp2YXIoLS1tdGUtc3VyZmFjZS00KTstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTMpOy0tY29sb3I6dmFyKC0tbXRlLWluay00KX06aG9zdChbY29sb3I9cHJpbWFyeV0pey0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWxpZ2h0ZXItcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWRhcmtlci1yZ2IpKTstLWJvcmRlci1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWxpZ2h0LXJnYikpfTpob3N0KFtzZWxlY3RhYmxlXVtjb2xvcj1wcmltYXJ5XTpob3Zlcil7LS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktbGlnaHQtcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWJhc2UtYy1yZ2IpKTstLWJvcmRlci1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWJhc2UtYy1yZ2IpKX06aG9zdChbc2VsZWN0YWJsZV1bc2VsZWN0ZWRdW2NvbG9yPXByaW1hcnldKXstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1iYXNlLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1kYXJrLWMtcmdiKSk7LS1ib3JkZXItY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1kYXJrLWMtcmdiKSl9Omhvc3QoW2NvbG9yPXNlY29uZGFyeV0pey0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktbGlnaHRlci1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1kYXJrZXItcmdiKSk7LS1ib3JkZXItY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWxpZ2h0LXJnYikpfTpob3N0KFtzZWxlY3RhYmxlXVtjb2xvcj1zZWNvbmRhcnldOmhvdmVyKXstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWxpZ2h0LXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtYy1yZ2IpKTstLWJvcmRlci1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktYmFzZS1jLXJnYikpfTpob3N0KFtzZWxlY3RhYmxlXVtzZWxlY3RlZF1bY29sb3I9c2Vjb25kYXJ5XSl7LS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1iYXNlLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWRhcmstYy1yZ2IpKTstLWJvcmRlci1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktZGFyay1jLXJnYikpfTpob3N0KFtjb2xvcj10ZXJ0aWFyeV0pey0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1saWdodGVyLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktZGFya2VyLXJnYikpOy0tYm9yZGVyLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWxpZ2h0LXJnYikpfTpob3N0KFtzZWxlY3RhYmxlXVtjb2xvcj10ZXJ0aWFyeV06aG92ZXIpey0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1saWdodC1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWJhc2UtYy1yZ2IpKTstLWJvcmRlci1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1iYXNlLWMtcmdiKSl9Omhvc3QoW3NlbGVjdGFibGVdW3NlbGVjdGVkXVtjb2xvcj10ZXJ0aWFyeV0pey0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1iYXNlLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktZGFyay1jLXJnYikpOy0tYm9yZGVyLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWRhcmstYy1yZ2IpKX06aG9zdChbY29sb3I9c3VjY2Vzc10pey0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWxpZ2h0ZXItcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWRhcmtlci1yZ2IpKTstLWJvcmRlci1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWxpZ2h0LXJnYikpfTpob3N0KFtzZWxlY3RhYmxlXVtjb2xvcj1zdWNjZXNzXTpob3Zlcil7LS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtbGlnaHQtcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWJhc2UtYy1yZ2IpKTstLWJvcmRlci1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWJhc2UtYy1yZ2IpKX06aG9zdChbc2VsZWN0YWJsZV1bc2VsZWN0ZWRdW2NvbG9yPXN1Y2Nlc3NdKXstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1iYXNlLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1kYXJrLWMtcmdiKSk7LS1ib3JkZXItY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1kYXJrLWMtcmdiKSl9Omhvc3QoW2NvbG9yPXdhcm5pbmddKXstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1saWdodGVyLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1kYXJrZXItcmdiKSk7LS1ib3JkZXItY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1saWdodC1yZ2IpKX06aG9zdChbc2VsZWN0YWJsZV1bY29sb3I9d2FybmluZ106aG92ZXIpey0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWxpZ2h0LXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1iYXNlLWMtcmdiKSk7LS1ib3JkZXItY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1iYXNlLWMtcmdiKSl9Omhvc3QoW3NlbGVjdGFibGVdW3NlbGVjdGVkXVtjb2xvcj13YXJuaW5nXSl7LS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctYmFzZS1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctZGFyay1jLXJnYikpOy0tYm9yZGVyLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctZGFyay1jLXJnYikpfTpob3N0KFtjb2xvcj1kYW5nZXJdKXstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWxpZ2h0ZXItcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItZGFya2VyLXJnYikpOy0tYm9yZGVyLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1saWdodC1yZ2IpKX06aG9zdChbc2VsZWN0YWJsZV1bY29sb3I9ZGFuZ2VyXTpob3Zlcil7LS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1saWdodC1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1iYXNlLWMtcmdiKSk7LS1ib3JkZXItY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtYy1yZ2IpKX06aG9zdChbc2VsZWN0YWJsZV1bc2VsZWN0ZWRdW2NvbG9yPWRhbmdlcl0pey0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItYmFzZS1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1kYXJrLWMtcmdiKSk7LS1ib3JkZXItY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWRhcmstYy1yZ2IpKX06aG9zdChbc2VsZWN0YWJsZV0pe2N1cnNvcjpwb2ludGVyfTpob3N0KFtzZWxlY3RhYmxlXSkgLmNvbnRlbnQ6Zm9jdXN7b3V0bGluZTpub25lfS5jb250ZW50W3JvbGU9Y2hlY2tib3hdOmZvY3VzLXZpc2libGU6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvdHRvbTotNHB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDotNHB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTRweDt0b3A6LTRweDt6LWluZGV4Ojl9Omhvc3QoW2Rpc2FibGVkXSksOmhvc3QoW3JlbW92YWJsZV1bZGlzYWJsZWRdKSAuY2xvc2UsOmhvc3QoW3NlbGVjdGFibGVdW2Rpc2FibGVkXSl7Y3Vyc29yOm5vdC1hbGxvd2VkOy0tY29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTQpOy0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC0yKTstLWJhY2tncm91bmQ6dmFyKC0tbXRlLWRpc2FibGVkLTEpfWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsWUFBWTtBQUNyQixTQUFTLGdCQUFnQjtBQVV6QixTQUFTLGNBQWM7QUFPaEIsSUFBTSxhQUFOLGNBQXlCLGVBQWU7RUFBeEM7O0FBZXdCLGdCQUFPOztFQUtwQyxvQkFBb0I7QUFDbEIsVUFBTSxrQkFBa0I7QUFDeEIsUUFBSSxDQUFDLE1BQU0sR0FBRztBQUNaLFdBQUssaUJBQWlCLFlBQVksS0FBSyxpQkFBaUI7QUFDeEQsV0FBSyxpQkFBaUIsWUFBWSxLQUFLLGlCQUFpQjtJQUMxRDtFQUNGO0VBRUEsdUJBQXVCO0FBQ3JCLFVBQU0scUJBQXFCO0FBQzNCLFNBQUssb0JBQW9CLFlBQVksS0FBSyxpQkFBaUI7QUFDM0QsU0FBSyxvQkFBb0IsWUFBWSxLQUFLLGlCQUFpQjtFQUM3RDtFQUVRLGtCQUFrQixPQUFvQjtBQUM1QyxTQUFLLFVBQVUsS0FBSyxNQUFNLE1BQU07RUFDbEM7RUFFQSxTQUFTO0FBQ1AsV0FBTyxPQUFPLEtBQUssY0FBYztFQUNuQztBQUNGO0FBekNhLFdBQ0osU0FBUztFQUNkO0VBQ0Esc0ZBTVcsT0FBTyxNQUFNLEVBQUU7QUFHNUI7QUFHNkI7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBZmhCLFdBZWtCO0FBR2I7RUFBZixhQUFhO0dBbEJILFdBa0JLO0FBbEJMLGFBQU47RUFETixjQUFjLGNBQWM7R0FDaEI7OztBQ2xCYixTQUFTLFFBQUFBLGFBQVk7OztBQ0FyQixTQUFTLE9BQUFDLFlBQVc7QUFBYSxJQUFNQyxVQUFTRDs7O0FEc0JoRCxTQUFTLFlBQUFFLGlCQUFnQjtBQUN6QixTQUFTLGlCQUFpQjtBQUMxQixTQUFTLFlBQVk7QUFDckIsU0FBUyxvQkFBb0I7QUFHN0IsdUJBQXVCLGNBQWMsQ0FBQyxZQUFZLENBQUM7QUFFbkQsSUFBSSxlQUFlO0FBRW5CLElBQU0sa0JBQWtCO0VBQ3RCLElBQUk7SUFDRixNQUFNO01BQ0osZUFBZTtJQUNqQjtFQUNGO0VBQ0EsSUFBSTtFQUNKLElBQUk7SUFDRixNQUFNO01BQ0osZUFBZTtJQUNqQjtFQUNGO0FBQ0Y7QUFxQ08sSUFBTSxTQUFOLGNBQXFCO0VBQzFCO0lBQ0U7TUFDRTtRQUNFLG1CQUErQixRQUFRO1VBQ3JDLGdCQUFnRCxVQUFVO1FBQzVEO01BQ0Y7SUFDRjtFQUNGO0FBQ0YsRUFBRTtFQVZLOztBQWFMLFNBQVEsV0FBVyxHQUFHLGNBQWM7QUFVUSxzQkFBYTtBQUdiLG9CQUFXO0FBTVgscUJBQVk7QUFHNUMsc0JBQWE7QUFNYix1QkFBYztBQUdHLGNBQUssWUFBWSxLQUFLLFFBQVE7O0VBN0IzRCxvQkFBb0I7QUFDbEIsVUFBTSxrQkFBa0I7QUFDeEIsUUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLGVBQWUsU0FBUyxRQUFRO0FBQ25ELFdBQUssT0FBTztJQUNkO0VBQ0Y7RUFnQ1Esb0JBQW9CLE9BQXNCO0FBQ2hELFFBQUksTUFBTSxRQUFRLE9BQU8sTUFBTSxRQUFRLFNBQVM7QUFDOUMsWUFBTSxlQUFlO0FBQ3JCLFdBQUssZUFBZTtJQUN0QjtFQUNGO0VBRVEsb0JBQW9CLE9BQXNCO0FBQ2hELFFBQUksTUFBTSxRQUFRLE9BQU8sTUFBTSxRQUFRLFNBQVM7QUFDOUMsWUFBTSxlQUFlO0FBQ3JCLFdBQUssYUFBYTtJQUNwQjtFQUNGO0VBRVEsaUJBQWlCO0FBQ3ZCLFFBQUksS0FBSyxjQUFjLENBQUMsS0FBSyxVQUFVO0FBQ3JDLFdBQUssV0FBVyxDQUFDLEtBQUs7QUFDdEIsV0FBSyxVQUFVO1FBQ2I7VUFDRSxRQUFRO1VBQ1IsUUFBUSxLQUFLLFdBQVcsV0FBVztRQUNyQztRQUNBLEVBQUUsU0FBUyxLQUFLO01BQ2xCO0lBQ0Y7RUFDRjtFQUVRLGVBQWU7QUFDckIsUUFBSSxDQUFDLEtBQUssVUFBVTtBQUNsQixXQUFLLFVBQVU7UUFDYjtVQUNFLFFBQVE7VUFDUixRQUFRO1FBQ1Y7UUFDQSxFQUFFLFNBQVMsS0FBSztNQUNsQjtJQUNGO0VBQ0Y7RUFFQSxTQUFTO0FBQ1AsV0FBT0MsUUFBUSxLQUFLLGNBQWMsNkNBSXZCLFVBQVUsS0FBSyxhQUFhLGFBQWEsSUFBSSxDQUFDLGVBQzFDLFVBQVUsS0FBSyxhQUFhLElBQUksSUFBSSxDQUFDLG1CQUNqQyxVQUFVLEtBQUssYUFBYSxLQUFLLFdBQVcsSUFBSSxDQUFDLGFBQ3ZELEtBQUssY0FBYyxlQUNqQixLQUFLLG1CQUFtQixLQUNqQztNQUNBLEtBQUs7TUFDTCxNQUFNQSwyREFFSyxLQUFLLElBQUksV0FDVCxLQUFLLFNBQVMsT0FBTyxLQUFLLEtBQUssU0FBUyxPQUFPLEtBQUssRUFBRSxjQUNuRCxVQUFVLEtBQUssV0FBVyxDQUFDO0lBRTNDLENBQUMsaURBR0Q7TUFDQSxLQUFLO01BQ0wsTUFBTUEsa0ZBSVEsS0FBSyxRQUFRLGlCQUNaLEtBQUssVUFBVSxzQ0FHdEIsZ0JBQWdCLEtBQUssUUFBUSxJQUFJLENBQUMsZUFDN0IsS0FBSyxtQkFBbUIsYUFDMUIsS0FBSyxZQUFZO0lBQzlCLENBQUM7RUFDTDtBQUNGO0FBL0hhLE9BV0osU0FBUyxDQUFDLFFBQVlDLE9BQU07QUFZUztFQUEzQ0MsVUFBUyxFQUFFLFNBQVMsTUFBTSxNQUFNLFFBQVEsQ0FBQztHQXZCL0IsT0F1QmlDO0FBR0E7RUFBM0NBLFVBQVMsRUFBRSxTQUFTLE1BQU0sTUFBTSxRQUFRLENBQUM7R0ExQi9CLE9BMEJpQztBQUdmO0VBQTVCQSxVQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0E3QmhCLE9BNkJrQjtBQUdlO0VBQTNDQSxVQUFTLEVBQUUsU0FBUyxNQUFNLE1BQU0sUUFBUSxDQUFDO0dBaEMvQixPQWdDaUM7QUFHaEM7RUFBWEEsVUFBUztHQW5DQyxPQW1DQztBQUdBO0VBQVhBLFVBQVM7R0F0Q0MsT0FzQ0M7QUFHQTtFQUFYQSxVQUFTO0dBekNDLE9BeUNDO0FBR2lCO0VBQTVCQSxVQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0E1Q2hCLE9BNENrQjtBQUdiO0VBQWYsYUFBYTtHQS9DSCxPQStDSztBQUdBO0VBQWYsYUFBYTtHQWxESCxPQWtESztBQWxETCxTQUFOO0VBRE4sY0FBYyxTQUFTO0dBQ1g7IiwKICAibmFtZXMiOiBbImh0bWwiLCAiY3NzIiwgInN0eWxlcyIsICJwcm9wZXJ0eSIsICJodG1sIiwgInN0eWxlcyIsICJwcm9wZXJ0eSJdCn0K
