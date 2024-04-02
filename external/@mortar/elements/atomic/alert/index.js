import "../../chunks/chunk.OHVMOSF2.js";
import "../../chunks/chunk.TOU6J7OT.js";
import "../../chunks/chunk.Q54LTJXP.js";
import "../../chunks/chunk.D6N6Z2UH.js";
import "../../chunks/chunk.IVHA27EF.js";
import "../../chunks/chunk.SRHT6JKE.js";
import "../../chunks/chunk.DVRGAMYN.js";
import "../../chunks/chunk.D4QL7DP6.js";
import {
  MteIconRegistryService,
  mtrIconAlert,
  mtrIconAlertCircle,
  mtrIconCheckCircle
} from "../../chunks/chunk.M5RJHYFW.js";
import {
  MteElement,
  PresetMixinFactory,
  RadiusMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  eventEmitter,
  onUpdate,
  selectorFactory,
  styles7 as styles
} from "../../chunks/chunk.KVXAK6W4.js";

// src/atomic/alert/alert.element.ts
import { html } from "lit";
import { property, state } from "lit/decorators.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

// src/atomic/alert/alert.styles.ts
import { css } from "lit";
var styles2 = css`:host{--color:inherit;--icon-color:inherit;--background:transparent;--border-radius:var(--mte-border-radius-lg);--border-color:var(--mte-border-2);--border:1px solid var(--border-color);--banner-border-bottom:1px solid var(--border-color);--content-grid-row-gap:var(--mte-space-xs);overflow:hidden;width:100%}.alert{background:var(--background);border:var(--border);border-radius:var(--border-radius);display:grid;font-family:var(--mte-font-family-sans);grid-template-columns:min-content auto auto;grid-template-rows:auto;padding:calc(var(--mte-space-sm) + var(--mte-space-xxs)) var(--mte-space-md);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-body1-font-size);font-weight:var(--mte-font-set-body1-font-weight);line-height:var(--mte-font-set-body1-line-height);text-decoration:inherit;text-transform:inherit}:host([closed]) .alert{display:none}:host([banner]) .alert,:host([radius=none]) .alert{--border-radius:var(--mte-border-radius-none);--border:none;border-bottom:var(--banner-border-bottom)}:host([radius=sm]) .alert{--border-radius:var(--mte-border-radius-sm)}:host([radius=md]) .alert{--border-radius:var(--mte-border-radius-md)}.icon{color:var(--icon-color);grid-row:1/2;justify-content:center}.icon mte-icon,:host ::slotted([slot=icon]){display:block;padding:calc(var(--mte-space-xs) + var(--mte-space-xxs)) var(--mte-space-sm) calc(var(--mte-space-xs) + var(--mte-space-xxs)) 0}.actions{display:flex;gap:var(--mte-space-sm);grid-column:2/-1;grid-row:2/3;justify-content:end}:host ::slotted([slot=actions]){margin:calc(var(--mte-space-xs) + var(--mte-space-xxs)) 0}.close-button{margin:calc(var(--mte-space-xs) + var(--mte-space-xxs)) 0}.close-icon-button{grid-row:1/2;margin-left:auto;transform:translateX(calc(var(--mte-space-xs) + var(--mte-space-xxs)))}.content{grid-row:1/2;padding:calc(var(--mte-space-xs) + var(--mte-space-xxs)) var(--mte-space-sm) calc(var(--mte-space-xs) + var(--mte-space-xxs)) 0}:host ::slotted(mte-content),:host ::slotted(mte-header),:host ::slotted(mte-title:not([heading])){font-size:inherit;line-height:inherit}:host ::slotted(mte-content),:host ::slotted(mte-header),:host ::slotted(mte-title){color:var(--color);overflow-wrap:break-word;padding:0}:host ::slotted(mte-header){font-weight:var(--mte-font-weight-bold)}:host([status=primary]){--background:rgb(var(--mte-status-primary-lighter-rgb));--border-color:rgb(var(--mte-status-primary-base-rgb));--icon-color:rgb(var(--mte-status-primary-base-rgb));--color:rgb(var(--mte-status-primary-lighter-c-rgb))}:host([status=secondary]){--background:rgb(var(--mte-status-secondary-lighter-rgb));--border-color:rgb(var(--mte-status-secondary-base-rgb));--icon-color:rgb(var(--mte-status-secondary-base-rgb));--color:rgb(var(--mte-status-secondary-lighter-c-rgb))}:host([status=tertiary]){--background:rgb(var(--mte-status-tertiary-lighter-rgb));--border-color:rgb(var(--mte-status-tertiary-base-rgb));--icon-color:rgb(var(--mte-status-tertiary-base-rgb));--color:rgb(var(--mte-status-tertiary-lighter-c-rgb))}:host([status=success]){--background:rgb(var(--mte-status-success-lighter-rgb));--border-color:rgb(var(--mte-status-success-base-rgb));--icon-color:rgb(var(--mte-status-success-base-rgb));--color:rgb(var(--mte-status-success-lighter-c-rgb))}:host([status=warning]){--background:rgb(var(--mte-status-warning-lighter-rgb));--border-color:rgb(var(--mte-status-warning-base-rgb));--icon-color:rgb(var(--mte-status-warning-darker-rgb));--color:rgb(var(--mte-status-warning-lighter-c-rgb))}:host([status=danger]){--background:rgb(var(--mte-status-danger-lighter-rgb));--border-color:rgb(var(--mte-status-danger-base-rgb));--icon-color:rgb(var(--mte-status-danger-base-rgb));--color:rgb(var(--mte-status-danger-lighter-c-rgb))}`;

// src/atomic/alert/alert.element.ts
MteIconRegistryService.registerIcons([mtrIconCheckCircle, mtrIconAlert, mtrIconAlertCircle]);
var statusIcons = {
  success: "check-circle",
  warning: "alert",
  danger: "alert-circle"
};
var MteAlert = class extends PresetMixinFactory("MteAlert")(
  RadiusMixin(StylePartsMixin(MteElement))
) {
  constructor() {
    super(...arguments);
    this.hideIcon = false;
    this.iconLibrary = "_default";
    this.closeType = "button";
    this.closeButtonText = "Dismiss";
    this.withoutClose = false;
    this.wrapActionsBreakpoint = "lg";
    this.banner = false;
    this.role = "none";
    this.closed = false;
    this.contentVisible = false;
  }
  open() {
    if (!this.closed) {
      return;
    }
    this.closed = false;
    this.contentVisible = true;
    this._onOpen.emit(null, { bubbles: false });
  }
  close() {
    if (this.closed) {
      return;
    }
    this.closed = true;
    this.contentVisible = false;
    this._onClose.emit(null, { bubbles: false });
  }
  onCloseChange() {
    if (this.role === "none" && (this.ariaLive === "off" || !this.ariaLive)) {
      this.contentVisible = !this.closed;
    }
  }
  firstUpdated() {
    if (!this.closed && this.role !== "none") {
      this.contentVisible = true;
      this.requestUpdate();
    }
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    this.setInstanceStyle("alert", selectorFactory(":host:host:host .alert"), {
      gridTemplateColumns: {
        [this.wrapActionsBreakpoint]: "min-content auto auto min-content"
      }
    });
    this.setInstanceStyle("alert-actions", selectorFactory(":host:host:host .actions"), {
      gridColumn: {
        [this.wrapActionsBreakpoint]: "3/4"
      },
      gridRow: {
        [this.wrapActionsBreakpoint]: "1"
      },
      alignSelf: {
        [this.wrapActionsBreakpoint]: "center"
      }
    });
    this.setInstanceStyle(
      "alert-slotted-actions",
      selectorFactory(':host:host:host ::slotted([slot="actions"])'),
      {
        margin: {
          [this.wrapActionsBreakpoint]: "0"
        }
      }
    );
    this.setInstanceStyle("alert-close-button", selectorFactory(":host:host:host .close-button"), {
      margin: {
        [this.wrapActionsBreakpoint]: "0"
      }
    });
  }
  render() {
    const icon = this.icon || statusIcons[this.status];
    const showCloseButton = this.closeType === "button" && !this.withoutClose;
    const isLiveRegion = this.ariaLive !== "off" && !!this.ariaLive || this.role !== "none" && !this.ariaLive;
    if (!this.contentVisible) {
      return null;
    }
    return html`${this.instanceStyles}<div class="alert"><div class="icon">${!this.hideIcon ? html`<slot part="icon" name="icon">${icon ? html`<mte-icon size="24" name="${icon}" library="${ifDefined(this.iconLibrary)}"></mte-icon>` : null}</slot>` : null}</div><div class="content"><slot part="content"></slot></div><div class="actions" aria-hidden="${isLiveRegion}">${showCloseButton ? html`<span class="close-button"><mte-button tabindex="${isLiveRegion ? -1 : 0}" size="md" @click="${this.close}">${this.closeButtonText}</mte-button></span>` : null}<slot name="actions" part="actions"></slot></div><div class="close-icon-button">${this.closeType === "icon" && !this.withoutClose ? html`<mte-icon-button icon="close" aria-hidden="${isLiveRegion}" aria-label="${this.closeButtonText}" tabindex="${isLiveRegion ? -1 : 0}" size="md" @click="${this.close}"></mte-icon-button>` : null}</div></div>`;
  }
};
MteAlert.styles = [styles, styles2];
__decorateClass([
  property({ reflect: true })
], MteAlert.prototype, "status", 2);
__decorateClass([
  property()
], MteAlert.prototype, "icon", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteAlert.prototype, "hideIcon", 2);
__decorateClass([
  property()
], MteAlert.prototype, "iconLibrary", 2);
__decorateClass([
  property()
], MteAlert.prototype, "closeType", 2);
__decorateClass([
  property()
], MteAlert.prototype, "closeButtonText", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteAlert.prototype, "withoutClose", 2);
__decorateClass([
  property({ reflect: true })
], MteAlert.prototype, "wrapActionsBreakpoint", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteAlert.prototype, "banner", 2);
__decorateClass([
  property({ reflect: true })
], MteAlert.prototype, "role", 2);
__decorateClass([
  property({ reflect: true, attribute: "aria-live" })
], MteAlert.prototype, "ariaLive", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteAlert.prototype, "closed", 2);
__decorateClass([
  eventEmitter()
], MteAlert.prototype, "_onOpen", 2);
__decorateClass([
  eventEmitter()
], MteAlert.prototype, "_onClose", 2);
__decorateClass([
  state()
], MteAlert.prototype, "contentVisible", 2);
__decorateClass([
  onUpdate("closed", { on: "both" })
], MteAlert.prototype, "onCloseChange", 1);
MteAlert = __decorateClass([
  defineElement("mte-alert")
], MteAlert);
export {
  MteAlert
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hbGVydCIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2FsZXJ0L2FsZXJ0LnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tY29sb3I6aW5oZXJpdDstLWljb24tY29sb3I6aW5oZXJpdDstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLWxnKTstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOy0tYmFubmVyLWJvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7LS1jb250ZW50LWdyaWQtcm93LWdhcDp2YXIoLS1tdGUtc3BhY2UteHMpO292ZXJmbG93OmhpZGRlbjt3aWR0aDoxMDAlfS5hbGVydHtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2JvcmRlcjp2YXIoLS1ib3JkZXIpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7ZGlzcGxheTpncmlkO2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTtncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWluLWNvbnRlbnQgYXV0byBhdXRvO2dyaWQtdGVtcGxhdGUtcm93czphdXRvO3BhZGRpbmc6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpIHZhcigtLW10ZS1zcGFjZS1tZCk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWxpbmUtaGVpZ2h0KTt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0fTpob3N0KFtjbG9zZWRdKSAuYWxlcnR7ZGlzcGxheTpub25lfTpob3N0KFtiYW5uZXJdKSAuYWxlcnQsOmhvc3QoW3JhZGl1cz1ub25lXSkgLmFsZXJ0ey0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1ub25lKTstLWJvcmRlcjpub25lO2JvcmRlci1ib3R0b206dmFyKC0tYmFubmVyLWJvcmRlci1ib3R0b20pfTpob3N0KFtyYWRpdXM9c21dKSAuYWxlcnR7LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXNtKX06aG9zdChbcmFkaXVzPW1kXSkgLmFsZXJ0ey0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCl9Lmljb257Y29sb3I6dmFyKC0taWNvbi1jb2xvcik7Z3JpZC1yb3c6MS8yO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lmljb24gbXRlLWljb24sOmhvc3QgOjpzbG90dGVkKFtzbG90PWljb25dKXtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpIHZhcigtLW10ZS1zcGFjZS1zbSkgY2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpIDB9LmFjdGlvbnN7ZGlzcGxheTpmbGV4O2dhcDp2YXIoLS1tdGUtc3BhY2Utc20pO2dyaWQtY29sdW1uOjIvLTE7Z3JpZC1yb3c6Mi8zO2p1c3RpZnktY29udGVudDplbmR9Omhvc3QgOjpzbG90dGVkKFtzbG90PWFjdGlvbnNdKXttYXJnaW46Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpIDB9LmNsb3NlLWJ1dHRvbnttYXJnaW46Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpIDB9LmNsb3NlLWljb24tYnV0dG9ue2dyaWQtcm93OjEvMjttYXJnaW4tbGVmdDphdXRvO3RyYW5zZm9ybTp0cmFuc2xhdGVYKGNhbGModmFyKC0tbXRlLXNwYWNlLXhzKSArIHZhcigtLW10ZS1zcGFjZS14eHMpKSl9LmNvbnRlbnR7Z3JpZC1yb3c6MS8yO3BhZGRpbmc6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpIHZhcigtLW10ZS1zcGFjZS1zbSkgY2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpIDB9Omhvc3QgOjpzbG90dGVkKG10ZS1jb250ZW50KSw6aG9zdCA6OnNsb3R0ZWQobXRlLWhlYWRlciksOmhvc3QgOjpzbG90dGVkKG10ZS10aXRsZTpub3QoW2hlYWRpbmddKSl7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5oZXJpdH06aG9zdCA6OnNsb3R0ZWQobXRlLWNvbnRlbnQpLDpob3N0IDo6c2xvdHRlZChtdGUtaGVhZGVyKSw6aG9zdCA6OnNsb3R0ZWQobXRlLXRpdGxlKXtjb2xvcjp2YXIoLS1jb2xvcik7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkO3BhZGRpbmc6MH06aG9zdCA6OnNsb3R0ZWQobXRlLWhlYWRlcil7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtd2VpZ2h0LWJvbGQpfTpob3N0KFtzdGF0dXM9cHJpbWFyeV0pey0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWxpZ2h0ZXItcmdiKSk7LS1ib3JkZXItY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1iYXNlLXJnYikpOy0taWNvbi1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWJhc2UtcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWxpZ2h0ZXItYy1yZ2IpKX06aG9zdChbc3RhdHVzPXNlY29uZGFyeV0pey0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktbGlnaHRlci1yZ2IpKTstLWJvcmRlci1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktYmFzZS1yZ2IpKTstLWljb24tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktbGlnaHRlci1jLXJnYikpfTpob3N0KFtzdGF0dXM9dGVydGlhcnldKXstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktbGlnaHRlci1yZ2IpKTstLWJvcmRlci1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1iYXNlLXJnYikpOy0taWNvbi1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1iYXNlLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktbGlnaHRlci1jLXJnYikpfTpob3N0KFtzdGF0dXM9c3VjY2Vzc10pey0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWxpZ2h0ZXItcmdiKSk7LS1ib3JkZXItY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1iYXNlLXJnYikpOy0taWNvbi1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWJhc2UtcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWxpZ2h0ZXItYy1yZ2IpKX06aG9zdChbc3RhdHVzPXdhcm5pbmddKXstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1saWdodGVyLXJnYikpOy0tYm9yZGVyLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctYmFzZS1yZ2IpKTstLWljb24tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1kYXJrZXItcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWxpZ2h0ZXItYy1yZ2IpKX06aG9zdChbc3RhdHVzPWRhbmdlcl0pey0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHRlci1yZ2IpKTstLWJvcmRlci1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItYmFzZS1yZ2IpKTstLWljb24tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHRlci1jLXJnYikpfWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsWUFBWTtBQUNyQixTQUFTLFVBQVUsYUFBYTtBQUNoQyxTQUFTLGlCQUFpQjs7O0FDRjFCLFNBQVMsV0FBVztBQUFhLElBQU1BLFVBQVM7OztBRHdCaEQsdUJBQXVCLGNBQWMsQ0FBQyxvQkFBb0IsY0FBYyxrQkFBa0IsQ0FBQztBQWlCM0YsSUFBTSxjQUFjO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsUUFBUTtBQUNWO0FBZU8sSUFBTSxXQUFOLGNBQXVCLG1CQUFnQyxVQUFVO0VBQ3RFLFlBQVksZ0JBQWtELFVBQVUsQ0FBQztBQUMzRSxFQUFFO0VBRks7O0FBWXVDLG9CQUFXO0FBRzNDLHVCQUFjO0FBR2QscUJBQStCO0FBRy9CLDJCQUFrQjtBQUdjLHdCQUFlO0FBRzlCLGlDQUMzQjtBQUcwQyxrQkFBUztBQUd4QixnQkFBYTtBQU1FLGtCQUFTO0FBUTVDLFNBQVEsaUJBQWlCOztFQUUzQixPQUFPO0FBQ1osUUFBSSxDQUFDLEtBQUssUUFBUTtBQUNoQjtJQUNGO0FBQ0EsU0FBSyxTQUFTO0FBQ2QsU0FBSyxpQkFBaUI7QUFDdEIsU0FBSyxRQUFRLEtBQUssTUFBTSxFQUFFLFNBQVMsTUFBTSxDQUFDO0VBQzVDO0VBRU8sUUFBUTtBQUNiLFFBQUksS0FBSyxRQUFRO0FBQ2Y7SUFDRjtBQUNBLFNBQUssU0FBUztBQUNkLFNBQUssaUJBQWlCO0FBQ3RCLFNBQUssU0FBUyxLQUFLLE1BQU0sRUFBRSxTQUFTLE1BQU0sQ0FBQztFQUM3QztFQUdRLGdCQUFnQjtBQUV0QixRQUFJLEtBQUssU0FBUyxXQUFXLEtBQUssYUFBYSxTQUFTLENBQUMsS0FBSyxXQUFXO0FBQ3ZFLFdBQUssaUJBQWlCLENBQUMsS0FBSztJQUM5QjtFQUNGO0VBRUEsZUFBZTtBQUNiLFFBQUksQ0FBQyxLQUFLLFVBQVUsS0FBSyxTQUFTLFFBQVE7QUFDeEMsV0FBSyxpQkFBaUI7QUFDdEIsV0FBSyxjQUFjO0lBQ3JCO0VBQ0Y7RUFFVSxxQkFBcUIsY0FBYztBQUMzQyxVQUFNLHFCQUFxQixZQUFZO0FBRXZDLFNBQUssaUJBQWlCLFNBQVMsZ0JBQWdCLHdCQUF3QixHQUFHO01BQ3hFLHFCQUFxQjtRQUNuQixDQUFDLEtBQUsscUJBQXFCLEdBQUc7TUFDaEM7SUFDRixDQUFDO0FBRUQsU0FBSyxpQkFBaUIsaUJBQWlCLGdCQUFnQiwwQkFBMEIsR0FBRztNQUNsRixZQUFZO1FBQ1YsQ0FBQyxLQUFLLHFCQUFxQixHQUFHO01BQ2hDO01BQ0EsU0FBUztRQUNQLENBQUMsS0FBSyxxQkFBcUIsR0FBRztNQUNoQztNQUNBLFdBQVc7UUFDVCxDQUFDLEtBQUsscUJBQXFCLEdBQUc7TUFDaEM7SUFDRixDQUFDO0FBRUQsU0FBSztNQUNIO01BQ0EsZ0JBQWdCLDZDQUE2QztNQUM3RDtRQUNFLFFBQVE7VUFDTixDQUFDLEtBQUsscUJBQXFCLEdBQUc7UUFDaEM7TUFDRjtJQUNGO0FBRUEsU0FBSyxpQkFBaUIsc0JBQXNCLGdCQUFnQiwrQkFBK0IsR0FBRztNQUM1RixRQUFRO1FBQ04sQ0FBQyxLQUFLLHFCQUFxQixHQUFHO01BQ2hDO0lBQ0YsQ0FBQztFQUNIO0VBRUEsU0FBUztBQUNQLFVBQU0sT0FBTyxLQUFLLFFBQVEsWUFBWSxLQUFLLE1BQU07QUFDakQsVUFBTSxrQkFBa0IsS0FBSyxjQUFjLFlBQVksQ0FBQyxLQUFLO0FBQzdELFVBQU0sZUFDSCxLQUFLLGFBQWEsU0FBUyxDQUFDLENBQUMsS0FBSyxZQUFjLEtBQUssU0FBUyxVQUFVLENBQUMsS0FBSztBQUVqRixRQUFJLENBQUMsS0FBSyxnQkFBZ0I7QUFDeEIsYUFBTztJQUNUO0FBRUEsV0FBTyxPQUNILEtBQUssY0FBYyx3Q0FHZixDQUFDLEtBQUssV0FDSixxQ0FDSSxPQUNFLGlDQUVTLElBQUksY0FDRCxVQUFVLEtBQUssV0FBVyxDQUFDLGtCQUN2QyxJQUFJLFlBRVYsSUFBSSxrR0FNeUIsWUFBWSxLQUUzQyxrQkFDRSx3REFDMEIsZUFBZSxLQUFLLENBQUMsdUJBQXFCLEtBQUssS0FBSyxLQUN4RSxLQUFLLGVBQWUseUJBRzFCLElBQUksbUZBSU4sS0FBSyxjQUFjLFVBQVUsQ0FBQyxLQUFLLGVBQ2pDLGtEQUVnQixZQUFZLGlCQUNiLEtBQUssZUFBZSxlQUN0QixlQUFlLEtBQUssQ0FBQyx1QkFFdkIsS0FBSyxLQUFLLHlCQUNyQixJQUFJO0VBSWhCO0FBQ0Y7QUEvS2EsU0FHSixTQUFTLENBQUMsUUFBWUMsT0FBTTtBQUdOO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQU5oQixTQU1rQjtBQUdqQjtFQUFYLFNBQVM7R0FUQyxTQVNDO0FBR2dDO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FaL0IsU0FZaUM7QUFHaEM7RUFBWCxTQUFTO0dBZkMsU0FlQztBQUdBO0VBQVgsU0FBUztHQWxCQyxTQWtCQztBQUdBO0VBQVgsU0FBUztHQXJCQyxTQXFCQztBQUdnQztFQUEzQyxTQUFTLEVBQUUsTUFBTSxTQUFTLFNBQVMsS0FBSyxDQUFDO0dBeEIvQixTQXdCaUM7QUFHZjtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0EzQmhCLFNBMkJrQjtBQUllO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0EvQi9CLFNBK0JpQztBQUdmO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQWxDaEIsU0FrQ2tCO0FBR3dCO0VBQXBELFNBQVMsRUFBRSxTQUFTLE1BQU0sV0FBVyxZQUFZLENBQUM7R0FyQ3hDLFNBcUMwQztBQUdUO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0F4Qy9CLFNBd0NpQztBQUc1QjtFQUFmLGFBQWE7R0EzQ0gsU0EyQ0s7QUFHQTtFQUFmLGFBQWE7R0E5Q0gsU0E4Q0s7QUFFQztFQUFoQixNQUFNO0dBaERJLFNBZ0RNO0FBcUJUO0VBRFAsU0FBUyxVQUFVLEVBQUUsSUFBSSxPQUFPLENBQUM7R0FwRXZCLFNBcUVIO0FBckVHLFdBQU47RUFETixjQUFjLFdBQVc7R0FDYjsiLAogICJuYW1lcyI6IFsic3R5bGVzIiwgInN0eWxlcyJdCn0K
