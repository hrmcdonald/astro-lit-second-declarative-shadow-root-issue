import "../../chunks/chunk.FQWJN7AO.js";
import {
  MteVisuallyHidden
} from "../../chunks/chunk.DYYIIZPZ.js";
import "../../chunks/chunk.AFBGVPX2.js";
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
  MteElement,
  StatusColorMixin,
  StylePartsMixin,
  TabIndexMixin,
  __decorateClass,
  defineElement,
  eventEmitter,
  isSsr,
  onUpdate,
  registerElements,
  styles7 as styles
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/toast/toast-container.element.ts
import { html as html2 } from "lit";
import { property as property2 } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { ifDefined as ifDefined2 } from "lit/directives/if-defined.js";

// src/atomic/toast/toast-container.styles.ts
import { css } from "lit";
var styles2 = css`:host{--border-radius:var(--mte-border-radius-md);display:flex;flex-direction:column;gap:20px;max-height:100vh;overflow-y:auto;padding:var(--mte-space-xl);pointer-events:none;position:fixed;right:10px;top:10px}:host(:focus-visible){outline:none}:host(:focus-visible:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;inset:2px;pointer-events:none;position:absolute;z-index:9}:host(:focus-visible:not(.disabled):not([disabled]):not(:disabled)):before{bottom:var(--focus-bottom,0);top:var(--focus-top,0)}:host(.animate-toast) mte-toast:last-child{animation:toastEntrance 80ms cubic-bezier(.4,0,1,1) 0s 1}@media screen and (max-width:768px){:host{align-items:center;bottom:10px;right:auto;top:auto;width:100%}:host(.animate-toast) mte-toast:not(:last-child){animation:toastTransition 80ms cubic-bezier(.4,0,1,1) 0s 1}:host(.animate-toast) mte-toast:last-child{animation:toastEntrance 80ms cubic-bezier(.4,0,1,1) 0s 1}}@media (prefers-reduced-motion){animation:none}@keyframes toastEntrance{0%{opacity:0;transform:translateY(50%)}to{opacity:1;transform:translateY(0)}}@keyframes toastTransition{0%{transform:translateY(100%)}to{transform:translateY(0)}}`;

// src/atomic/toast/toast.element.ts
import { html } from "lit";
import { when } from "lit-html/directives/when.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { property } from "lit/decorators.js";
import {
  mtrIconClose,
  mtrIconCheckCircle,
  mtrIconAlert,
  mtrIconAlertCircle,
  mtrIconInformation
} from "@mortar/icons";

// src/atomic/toast/toast.styles.ts
import { css as css2 } from "lit";
var styles3 = css2`:host{--background:var(--mte-surface-2);--accent-color:var(--mte-grey-8);--icon-color:var(--mte-ink-1);--color:var(--mte-ink-1);--border:1px solid var(--mte-border-2);--border-color:var(--mte-border-2);--border-radius:var(--mte-border-radius-md);align-items:center;background:var(--background);border:var(--border);border-color:var(--border-color);border-radius:var(--border-radius);box-shadow:var(--mte-elevation-level-4) rgba(0,0,0,.2);color:var(--color);display:flex;flex-shrink:0;gap:8px;min-height:46px;padding:var(--mte-space-sm);pointer-events:auto;position:relative;width:100%}:host:before{align-self:stretch;background-color:var(--accent-color);border-radius:var(--mte-border-radius-full);content:"";display:block;flex-shrink:0;height:auto;width:4px}:host([icon]:not([icon=""])):before,:host([status]:not([withoutIcon]):not([status=""])):before{content:none}.icon{height:24px;min-height:24px;min-width:24px;width:24px}.message{font-size:var(--mte-font-set-body2-font-size);font-weight:var(--mte-font-set-body2-font-weight);-webkit-hyphens:auto;hyphens:auto;line-height:var(--mte-font-set-body2-line-height);word-wrap:break-word;overflow-wrap:break-word}.action,.close{margin-left:auto}.action+.close{margin-left:0}:host([color=primary]) .icon,:host([status=primary]) .icon{--icon-color:rgb(var(--mte-status-primary-base-rgb))}:host([color=primary]),:host([status=primary]){--accent-color:rgb(var(--mte-status-primary-base-rgb))}:host([color=secondary]) .icon,:host([status=secondary]) .icon{--icon-color:rgb(var(--mte-status-secondary-base-rgb))}:host([color=secondary]),:host([status=secondary]){--accent-color:rgb(var(--mte-status-secondary-base-rgb))}:host([color=tertiary]) .icon,:host([status=tertiary]) .icon{--icon-color:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=tertiary]),:host([status=tertiary]){--accent-color:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=success]) .icon,:host([status=success]) .icon{--icon-color:rgb(var(--mte-status-success-base-rgb))}:host([color=success]),:host([status=success]){--accent-color:rgb(var(--mte-status-success-base-rgb))}:host([color=warning]) .icon,:host([status=warning]) .icon{--icon-color:rgb(var(--mte-status-warning-darker-rgb))}:host([color=warning]),:host([status=warning]){--accent-color:rgb(var(--mte-status-warning-darker-rgb))}:host([color=danger]),:host([status=danger]){--background:rgb(var(--mte-status-danger-lighter-rgb));--accent-color:rgb(var(--mte-status-danger-base-rgb));--color:rgb(var(--mte-status-danger-lighter-c-rgb));--icon-color:rgb(var(--mte-status-danger-base-rgb))}@media (prefers-reduced-motion){animation:none}@media screen and (min-width:480px){:host{max-width:380px;width:380px}}`;

// src/atomic/toast/toast.element.ts
MteIconRegistryService.registerIcons([
  mtrIconCheckCircle,
  mtrIconAlert,
  mtrIconAlertCircle,
  mtrIconClose,
  mtrIconInformation
]);
var statusIcons = {
  success: mtrIconCheckCircle.name,
  danger: mtrIconAlertCircle.name,
  warning: mtrIconAlert.name,
  primary: mtrIconInformation.name
};
var uniqueId = 0;
var MteToast = class extends StatusColorMixin(
  StylePartsMixin(MteElement)
) {
  constructor() {
    super(...arguments);
    this.id = `mte-toast--${uniqueId++}`;
    this.message = "";
    this.icon = "";
    this.withoutIcon = false;
    this.withoutClose = false;
    this.closeLabel = "Close toast";
    this.action = null;
    this.role = null;
    this.ariaLabel = null;
    this.lastFocusedElement = null;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.lastFocusedElement) {
      this.lastFocusedElement.focus();
      this.lastFocusedElement = null;
    }
  }
  async onActionsUpdate() {
    this.role = this.isInteractive ? "dialog" : null;
    if (this.role === "dialog") {
      await this.updateComplete;
      const action = this.shadowRoot.querySelector("mte-button");
      action.focus();
      this.lastFocusedElement = document.activeElement;
    } else {
      this.lastFocusedElement = null;
    }
  }
  handleCloseClick() {
    this._onCloseClick.emit({ id: this.id });
  }
  get isInteractive() {
    return !!this.action;
  }
  render() {
    return html`${this.instanceStyles} ${when(
      (!!this.icon || !!statusIcons[this.status]) && !this.withoutIcon,
      () => html`<mte-icon class="icon" size="24" aria-hidden="true" part="icon" name="${this.icon || statusIcons[this.status]}"></mte-icon>`,
      () => html`<slot name="icon"></slot>`
    )} ${when(
      this.message,
      () => html`<div part="message" class="message">${this.message}</div>`,
      () => html`<slot></slot>`
    )} ${when(
      this.action,
      () => html`<mte-button @click="${this.action.onClick}" class="action" size="sm" part="action">${this.action.label}</mte-button>`,
      () => html`<slot name="actions"></slot>`
    )} ${when(
      !this.withoutClose,
      () => html`<mte-icon-button size="sm" class="close" part="close" icon="close" @click="${this.handleCloseClick}" aria-hidden="${!this.isInteractive}" tabIndex="${this.isInteractive ? 0 : -1}" aria-label="${ifDefined(
        this.isInteractive ? this.closeLabel : null
      )}"></mte-icon-button>`,
      () => html`<slot name="icon"></slot>`
    )}`;
  }
};
MteToast.styles = [styles, styles3];
__decorateClass([
  property({ reflect: true })
], MteToast.prototype, "id", 2);
__decorateClass([
  property({ reflect: true })
], MteToast.prototype, "status", 2);
__decorateClass([
  property()
], MteToast.prototype, "message", 2);
__decorateClass([
  property()
], MteToast.prototype, "icon", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteToast.prototype, "withoutIcon", 2);
__decorateClass([
  property({ type: Boolean })
], MteToast.prototype, "withoutClose", 2);
__decorateClass([
  property()
], MteToast.prototype, "closeLabel", 2);
__decorateClass([
  property({ type: Object })
], MteToast.prototype, "action", 2);
__decorateClass([
  property({ reflect: true })
], MteToast.prototype, "role", 2);
__decorateClass([
  property({ attribute: "aria-label", reflect: true, type: String })
], MteToast.prototype, "ariaLabel", 2);
__decorateClass([
  eventEmitter()
], MteToast.prototype, "_onCloseClick", 2);
__decorateClass([
  onUpdate("action")
], MteToast.prototype, "onActionsUpdate", 1);
MteToast = __decorateClass([
  defineElement("mte-toast")
], MteToast);

// src/atomic/toast/toast-container.element.ts
var uniqueId2 = 0;
function createTimer(fn, countdown) {
  const startTime = (/* @__PURE__ */ new Date()).getTime();
  let id = setTimeout(fn, countdown), complete = false, totalTimeRun;
  function timeDiff(date1, date2) {
    return date2 ? date2 - date1 : (/* @__PURE__ */ new Date()).getTime() - date1;
  }
  function cancel() {
    clearTimeout(id);
  }
  function pause() {
    clearTimeout(id);
    totalTimeRun = timeDiff(startTime);
    complete = totalTimeRun >= countdown;
  }
  function resume() {
    id = complete ? -1 : setTimeout(fn, countdown - totalTimeRun);
  }
  return { cancel, pause, resume };
}
var MteToastContainer = class extends TabIndexMixin(DisabledMixin(MteElement)) {
  constructor() {
    super(...arguments);
    this._id = "mte-toast-container";
    this.toasts = /* @__PURE__ */ new Map();
    this.ariaLabel = "Notifications";
    this.tabIndex = null;
    this.getAutoDuration = (characters) => Math.min(Math.max(characters * 50, 5e3), 12e3) + 500 * this.toasts.size;
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("onCloseClick", (e) => {
      const toast = this.toasts.get(e.detail.id);
      if (toast.onCloseClick) {
        toast.onCloseClick(e);
      }
      this.removeToast(e.detail.id);
    });
    this.addEventListener("scroll", () => {
      this.style.setProperty("--focus-top", `${this.scrollTop}px`);
      this.style.setProperty("--focus-bottom", `${-1 * this.scrollTop + 20}px`);
    });
  }
  get id() {
    return this._id;
  }
  /** Adds a toast message to the toast container */
  addToast(toastConfig) {
    const toastExists = this.toasts.has(toastConfig.id);
    if (toastConfig.duration === 0) {
      toastConfig.duration = null;
    }
    if (toastConfig.duration && !toastConfig.action && toastConfig.duration !== "auto") {
      toastConfig.timer = createTimer(() => this.removeToast(toastConfig.id), toastConfig.duration);
    }
    if (toastConfig.duration && !toastConfig.action && toastConfig.duration === "auto") {
      const duration = this.getAutoDuration(toastConfig.message.length);
      toastConfig.timer = createTimer(() => this.removeToast(toastConfig.id), duration);
    }
    if (toastConfig.withoutClose && !toastConfig.action && !toastConfig.duration) {
      const duration = this.getAutoDuration(toastConfig.message.length);
      toastConfig.timer = createTimer(() => this.removeToast(toastConfig.id), duration);
    }
    if (!toastConfig.id) {
      toastConfig.id = `mte-toast--${uniqueId2++}`;
    }
    this.toasts.set(toastConfig.id, toastConfig);
    this.tabIndex = 0;
    if (!toastExists) {
      this.classList.toggle("animate-toast");
    }
    this.renderMessages(this.toasts);
    setTimeout(() => {
      if (!toastExists) {
        this.classList.toggle("animate-toast");
      }
    }, 80);
    this.requestUpdate();
    return toastConfig.id;
  }
  /** Removes a toast message from the toast container */
  removeToast(id) {
    if (this.toasts.has(id)) {
      this.toasts.get(id).timer?.cancel();
      this.toasts.delete(id);
      this.renderMessages(this.toasts);
      this.requestUpdate();
    }
    if (this.toasts.size === 0) {
      this.removeAttribute("tabindex");
    }
  }
  /** Pauses the timer on a toast given an ID */
  pauseTimer(id) {
    const toast = this.toasts.get(id);
    if (toast?.timer) {
      toast.timer.pause();
    }
  }
  /** Starts the timer on a toast given an ID */
  startTimer(id) {
    const toast = this.toasts.get(id);
    if (toast?.timer) {
      toast.timer.resume();
    }
  }
  /** Removes all toasts from the toast container */
  removeAllToasts() {
    this.toasts.forEach((toast) => toast?.timer?.cancel());
    this.toasts.clear();
    this.removeAttribute("tabindex");
  }
  renderToasts(toasts) {
    return repeat(
      toasts,
      ([id]) => id,
      ([_, config]) => {
        return html2`<mte-toast aria-label="${ifDefined2(config.action ? config.ariaLabel || "Toast notification" : null)}" @mouseenter="${config.timer ? (e) => this.pauseTimer(e.target.id) : null}" @mouseleave="${config.timer ? (e) => this.startTimer(e.target.id) : null}" id="${config.id}" .message="${config.message}" status="${ifDefined2(config.status)}" color="${ifDefined2(config.color)}" icon="${ifDefined2(config.icon)}" ?withoutIcon="${config.withoutIcon}" ?withoutClose="${config.withoutClose}" .action="${config.action}" .se="${config.se}" .sp="${config.sp}" .closeLabel="${config.closeLabel}"></mte-toast>`;
      }
    );
  }
  renderMessages(toasts) {
    const politeMessages = [];
    const assertiveMessages = [];
    toasts.forEach((toast) => {
      if (toast.politeness === "off") {
        return;
      }
      if (toast.politeness === "assertive") {
        assertiveMessages.push(toast.message);
        return;
      }
      politeMessages.push(toast.message);
    });
    if (politeMessages.length > 0) {
      this.shadowRoot.querySelector('[role="status"]').innerText = politeMessages.join("\n");
    } else {
      this.shadowRoot.querySelector('[role="status"]').innerText = "";
    }
    if (assertiveMessages.length > 0) {
      this.shadowRoot.querySelector('[role="alert"]').innerText = assertiveMessages.join("\n");
    } else {
      this.shadowRoot.querySelector('[role="alert"]').innerText = "";
    }
  }
  render() {
    return html2`<mte-visually-hidden><div role="status" aria-label="${this.ariaLabel}"></div><div role="alert" aria-atomic="false" aria-label="${this.ariaLabel}"></div></mte-visually-hidden>${this.renderToasts(this.toasts)}`;
  }
};
MteToastContainer.styles = [styles2];
__decorateClass([
  property2({})
], MteToastContainer.prototype, "ariaLabel", 2);
__decorateClass([
  property2({ reflect: true, type: Number })
], MteToastContainer.prototype, "tabIndex", 2);
__decorateClass([
  property2({ type: String, reflect: true, attribute: "id" })
], MteToastContainer.prototype, "id", 1);
MteToastContainer = __decorateClass([
  defineElement("mte-toast-container")
], MteToastContainer);

// src/atomic/toast/toast.service.ts
var uniqueToastId = 0;
registerElements(MteToast, MteVisuallyHidden);
var _ToastService = class {
  constructor() {
    this.hotKey = "F8";
    this.toastContainer = null;
    if (!isSsr()) {
      globalThis.document.addEventListener("keydown", this.handleHotKey.bind(this));
      this.appendToastContainer();
    }
  }
  handleHotKey(event) {
    if (event.key === this.hotKey && this.toastContainer) {
      this.toastContainer.focus();
    }
  }
  /** Sets the toast notification containers aria label property.  */
  setContainerLabel(label) {
    this.toastContainer.ariaLabel = label;
  }
  /** Shows a toast notification based upon config options.  */
  show(config) {
    const toast = {
      id: `mte-toast--${uniqueToastId++}`,
      message: "",
      ...config
    };
    return this.toastContainer.addToast(toast);
  }
  /** Closes a specific toast notifications.  */
  close(id) {
    this.toastContainer.removeToast(id);
  }
  /** Closes all currently visible toast notifications.  */
  closeAll() {
    this.toastContainer.removeAllToasts();
  }
  /** Pauses the timer for a currently visible toast given a toast id */
  pauseTimer(id) {
    this.toastContainer.pauseTimer(id);
  }
  /** Starts the timer for a currently visible toast given a toast id */
  startTimer(id) {
    this.toastContainer.startTimer(id);
  }
  /** Sets a hot hey to be able to focus on the toast notification container. */
  setToastStackHotKey(keycode) {
    this.hotKey = keycode;
  }
  appendToastContainer() {
    if (!this.toastContainer) {
      this.toastContainer = globalThis.document.createElement("mte-toast-container");
    }
    globalThis.document.body.appendChild(this.toastContainer);
  }
};
var MteToastService = new _ToastService();
export {
  MteToast,
  MteToastService
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90b2FzdCIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RvYXN0L3RvYXN0LWNvbnRhaW5lci5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90b2FzdCIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RvYXN0L3RvYXN0LnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RvYXN0L3RvYXN0LnNlcnZpY2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjIwcHg7bWF4LWhlaWdodDoxMDB2aDtvdmVyZmxvdy15OmF1dG87cGFkZGluZzp2YXIoLS1tdGUtc3BhY2UteGwpO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246Zml4ZWQ7cmlnaHQ6MTBweDt0b3A6MTBweH06aG9zdCg6Zm9jdXMtdmlzaWJsZSl7b3V0bGluZTpub25lfTpob3N0KDpmb2N1cy12aXNpYmxlOm5vdCguZGlzYWJsZWQpOm5vdChbZGlzYWJsZWRdKTpub3QoOmRpc2FibGVkKSk6YmVmb3Jle2JvcmRlcjoycHggc29saWQgcmdiKHZhcigtLW10ZS1mb2N1cy1yZ2IpKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym94LXNoYWRvdzowIDAgMCAxcHggdmFyKC0tbXRlLWxpZ2h0KTtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jaztpbnNldDoycHg7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Ojl9Omhvc3QoOmZvY3VzLXZpc2libGU6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpKTpiZWZvcmV7Ym90dG9tOnZhcigtLWZvY3VzLWJvdHRvbSwwKTt0b3A6dmFyKC0tZm9jdXMtdG9wLDApfTpob3N0KC5hbmltYXRlLXRvYXN0KSBtdGUtdG9hc3Q6bGFzdC1jaGlsZHthbmltYXRpb246dG9hc3RFbnRyYW5jZSA4MG1zIGN1YmljLWJlemllciguNCwwLDEsMSkgMHMgMX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXs6aG9zdHthbGlnbi1pdGVtczpjZW50ZXI7Ym90dG9tOjEwcHg7cmlnaHQ6YXV0bzt0b3A6YXV0bzt3aWR0aDoxMDAlfTpob3N0KC5hbmltYXRlLXRvYXN0KSBtdGUtdG9hc3Q6bm90KDpsYXN0LWNoaWxkKXthbmltYXRpb246dG9hc3RUcmFuc2l0aW9uIDgwbXMgY3ViaWMtYmV6aWVyKC40LDAsMSwxKSAwcyAxfTpob3N0KC5hbmltYXRlLXRvYXN0KSBtdGUtdG9hc3Q6bGFzdC1jaGlsZHthbmltYXRpb246dG9hc3RFbnRyYW5jZSA4MG1zIGN1YmljLWJlemllciguNCwwLDEsMSkgMHMgMX19QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uKXthbmltYXRpb246bm9uZX1Aa2V5ZnJhbWVzIHRvYXN0RW50cmFuY2V7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDUwJSl9dG97b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApfX1Aa2V5ZnJhbWVzIHRvYXN0VHJhbnNpdGlvbnswJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKX19YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tYmFja2dyb3VuZDp2YXIoLS1tdGUtc3VyZmFjZS0yKTstLWFjY2VudC1jb2xvcjp2YXIoLS1tdGUtZ3JleS04KTstLWljb24tY29sb3I6dmFyKC0tbXRlLWluay0xKTstLWNvbG9yOnZhcigtLW10ZS1pbmstMSk7LS1ib3JkZXI6MXB4IHNvbGlkIHZhcigtLW10ZS1ib3JkZXItMik7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2JvcmRlcjp2YXIoLS1ib3JkZXIpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym94LXNoYWRvdzp2YXIoLS1tdGUtZWxldmF0aW9uLWxldmVsLTQpIHJnYmEoMCwwLDAsLjIpO2NvbG9yOnZhcigtLWNvbG9yKTtkaXNwbGF5OmZsZXg7ZmxleC1zaHJpbms6MDtnYXA6OHB4O21pbi1oZWlnaHQ6NDZweDtwYWRkaW5nOnZhcigtLW10ZS1zcGFjZS1zbSk7cG9pbnRlci1ldmVudHM6YXV0bztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfTpob3N0OmJlZm9yZXthbGlnbi1zZWxmOnN0cmV0Y2g7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hY2NlbnQtY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtZnVsbCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7ZmxleC1zaHJpbms6MDtoZWlnaHQ6YXV0bzt3aWR0aDo0cHh9Omhvc3QoW2ljb25dOm5vdChbaWNvbj1cIlwiXSkpOmJlZm9yZSw6aG9zdChbc3RhdHVzXTpub3QoW3dpdGhvdXRJY29uXSk6bm90KFtzdGF0dXM9XCJcIl0pKTpiZWZvcmV7Y29udGVudDpub25lfS5pY29ue2hlaWdodDoyNHB4O21pbi1oZWlnaHQ6MjRweDttaW4td2lkdGg6MjRweDt3aWR0aDoyNHB4fS5tZXNzYWdle2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC13ZWlnaHQpOy13ZWJraXQtaHlwaGVuczphdXRvO2h5cGhlbnM6YXV0bztsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItbGluZS1oZWlnaHQpO3dvcmQtd3JhcDpicmVhay13b3JkO292ZXJmbG93LXdyYXA6YnJlYWstd29yZH0uYWN0aW9uLC5jbG9zZXttYXJnaW4tbGVmdDphdXRvfS5hY3Rpb24rLmNsb3Nle21hcmdpbi1sZWZ0OjB9Omhvc3QoW2NvbG9yPXByaW1hcnldKSAuaWNvbiw6aG9zdChbc3RhdHVzPXByaW1hcnldKSAuaWNvbnstLWljb24tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1wcmltYXJ5XSksOmhvc3QoW3N0YXR1cz1wcmltYXJ5XSl7LS1hY2NlbnQtY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1zZWNvbmRhcnldKSAuaWNvbiw6aG9zdChbc3RhdHVzPXNlY29uZGFyeV0pIC5pY29uey0taWNvbi1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XSksOmhvc3QoW3N0YXR1cz1zZWNvbmRhcnldKXstLWFjY2VudC1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9dGVydGlhcnldKSAuaWNvbiw6aG9zdChbc3RhdHVzPXRlcnRpYXJ5XSkgLmljb257LS1pY29uLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXRlcnRpYXJ5XSksOmhvc3QoW3N0YXR1cz10ZXJ0aWFyeV0pey0tYWNjZW50LWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXN1Y2Nlc3NdKSAuaWNvbiw6aG9zdChbc3RhdHVzPXN1Y2Nlc3NdKSAuaWNvbnstLWljb24tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1zdWNjZXNzXSksOmhvc3QoW3N0YXR1cz1zdWNjZXNzXSl7LS1hY2NlbnQtY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj13YXJuaW5nXSkgLmljb24sOmhvc3QoW3N0YXR1cz13YXJuaW5nXSkgLmljb257LS1pY29uLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctZGFya2VyLXJnYikpfTpob3N0KFtjb2xvcj13YXJuaW5nXSksOmhvc3QoW3N0YXR1cz13YXJuaW5nXSl7LS1hY2NlbnQtY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1kYXJrZXItcmdiKSl9Omhvc3QoW2NvbG9yPWRhbmdlcl0pLDpob3N0KFtzdGF0dXM9ZGFuZ2VyXSl7LS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1saWdodGVyLXJnYikpOy0tYWNjZW50LWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1iYXNlLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWxpZ2h0ZXItYy1yZ2IpKTstLWljb24tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtcmdiKSl9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uKXthbmltYXRpb246bm9uZX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQ4MHB4KXs6aG9zdHttYXgtd2lkdGg6MzgwcHg7d2lkdGg6MzgwcHh9fWA7IiwgImltcG9ydCB7IGlzU3NyLCByZWdpc3RlckVsZW1lbnRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBNdGVWaXN1YWxseUhpZGRlbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy92aXN1YWxseS1oaWRkZW4nO1xuXG5pbXBvcnQgJy4vdG9hc3QtY29udGFpbmVyLmVsZW1lbnQnO1xuaW1wb3J0IHsgTXRlVG9hc3RDb25maWcsIE10ZVRvYXN0Q29udGFpbmVyIH0gZnJvbSAnLi90b2FzdC1jb250YWluZXIuZWxlbWVudCc7XG5pbXBvcnQgeyBNdGVUb2FzdCB9IGZyb20gJy4vdG9hc3QuZWxlbWVudCc7XG5cbmV4cG9ydCB0eXBlIHsgTXRlVG9hc3RDb25maWcgfSBmcm9tICcuL3RvYXN0LWNvbnRhaW5lci5lbGVtZW50JztcbmV4cG9ydCB0eXBlIHsgTXRlVG9hc3RDbG9zZURldGFpbCB9IGZyb20gJy4vdG9hc3QudHlwZXMnO1xuXG5sZXQgdW5pcXVlVG9hc3RJZCA9IDA7XG5cbi8vIEVuc3VyZXMgTXRlVG9hc3QgYW5kIE10ZVZpc3VhbGx5SGlkZGVuIGVsZW1lbnRzIGFyZSBidW5kbGVkIHdoZW4gdGhpcyBzZXJ2aWNlIGlzIHVzZWQuXG5yZWdpc3RlckVsZW1lbnRzKE10ZVRvYXN0LCBNdGVWaXN1YWxseUhpZGRlbik7XG5cbmNsYXNzIF9Ub2FzdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIGdsb2JhbFRoaXMuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlSG90S2V5LmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5hcHBlbmRUb2FzdENvbnRhaW5lcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaG90S2V5ID0gJ0Y4JztcblxuICBwcml2YXRlIHRvYXN0Q29udGFpbmVyOiBNdGVUb2FzdENvbnRhaW5lciB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgaGFuZGxlSG90S2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gdGhpcy5ob3RLZXkgJiYgdGhpcy50b2FzdENvbnRhaW5lcikge1xuICAgICAgdGhpcy50b2FzdENvbnRhaW5lci5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSB0b2FzdCBub3RpZmljYXRpb24gY29udGFpbmVycyBhcmlhIGxhYmVsIHByb3BlcnR5LiAgKi9cbiAgcHVibGljIHNldENvbnRhaW5lckxhYmVsKGxhYmVsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRvYXN0Q29udGFpbmVyLmFyaWFMYWJlbCA9IGxhYmVsO1xuICB9XG5cbiAgLyoqIFNob3dzIGEgdG9hc3Qgbm90aWZpY2F0aW9uIGJhc2VkIHVwb24gY29uZmlnIG9wdGlvbnMuICAqL1xuICBwdWJsaWMgc2hvdyhjb25maWc6IE10ZVRvYXN0Q29uZmlnKTogc3RyaW5nIHtcbiAgICBjb25zdCB0b2FzdDogTXRlVG9hc3RDb25maWcgPSB7XG4gICAgICBpZDogYG10ZS10b2FzdC0tJHt1bmlxdWVUb2FzdElkKyt9YCxcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgLi4uY29uZmlnLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy50b2FzdENvbnRhaW5lci5hZGRUb2FzdCh0b2FzdCk7XG4gIH1cblxuICAvKiogQ2xvc2VzIGEgc3BlY2lmaWMgdG9hc3Qgbm90aWZpY2F0aW9ucy4gICovXG4gIHB1YmxpYyBjbG9zZShpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy50b2FzdENvbnRhaW5lci5yZW1vdmVUb2FzdChpZCk7XG4gIH1cblxuICAvKiogQ2xvc2VzIGFsbCBjdXJyZW50bHkgdmlzaWJsZSB0b2FzdCBub3RpZmljYXRpb25zLiAgKi9cbiAgcHVibGljIGNsb3NlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMudG9hc3RDb250YWluZXIucmVtb3ZlQWxsVG9hc3RzKCk7XG4gIH1cblxuICAvKiogUGF1c2VzIHRoZSB0aW1lciBmb3IgYSBjdXJyZW50bHkgdmlzaWJsZSB0b2FzdCBnaXZlbiBhIHRvYXN0IGlkICovXG4gIHB1YmxpYyBwYXVzZVRpbWVyKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnRvYXN0Q29udGFpbmVyLnBhdXNlVGltZXIoaWQpO1xuICB9XG5cbiAgLyoqIFN0YXJ0cyB0aGUgdGltZXIgZm9yIGEgY3VycmVudGx5IHZpc2libGUgdG9hc3QgZ2l2ZW4gYSB0b2FzdCBpZCAqL1xuICBwdWJsaWMgc3RhcnRUaW1lcihpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy50b2FzdENvbnRhaW5lci5zdGFydFRpbWVyKGlkKTtcbiAgfVxuXG4gIC8qKiBTZXRzIGEgaG90IGhleSB0byBiZSBhYmxlIHRvIGZvY3VzIG9uIHRoZSB0b2FzdCBub3RpZmljYXRpb24gY29udGFpbmVyLiAqL1xuICBwdWJsaWMgc2V0VG9hc3RTdGFja0hvdEtleShrZXljb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmhvdEtleSA9IGtleWNvZGU7XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZFRvYXN0Q29udGFpbmVyKCkge1xuICAgIGlmICghdGhpcy50b2FzdENvbnRhaW5lcikge1xuICAgICAgdGhpcy50b2FzdENvbnRhaW5lciA9IGdsb2JhbFRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbXRlLXRvYXN0LWNvbnRhaW5lcicpO1xuICAgIH1cbiAgICBnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50b2FzdENvbnRhaW5lcik7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZVRvYXN0U2VydmljZSA9IG5ldyBfVG9hc3RTZXJ2aWNlKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxRQUFBQSxhQUFZO0FBQ3JCLFNBQVMsWUFBQUMsaUJBQWdCO0FBRXpCLFNBQVMsY0FBYztBQUN2QixTQUFTLGFBQUFDLGtCQUFpQjs7O0FDSjFCLFNBQVMsV0FBVztBQUFhLElBQU1DLFVBQVM7OztBQ0FoRCxTQUFTLFlBQVk7QUFDckIsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsaUJBQWlCO0FBQzFCLFNBQVMsZ0JBQWdCO0FBY3pCO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtPQUNLOzs7QUN2QlAsU0FBUyxPQUFBQyxZQUFXO0FBQWEsSUFBTUMsVUFBU0Q7OztBRCtCaEQsdUJBQXVCLGNBQWM7RUFDbkM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNGLENBQUM7QUFFRCxJQUFNLGNBQWM7RUFDbEIsU0FBUyxtQkFBbUI7RUFDNUIsUUFBUSxtQkFBbUI7RUFDM0IsU0FBUyxhQUFhO0VBQ3RCLFNBQVMsbUJBQW1CO0FBQzlCO0FBb0JBLElBQUksV0FBVztBQWlCUixJQUFNLFdBQU4sY0FBdUI7RUFDNUIsZ0JBQWtELFVBQVU7QUFDOUQsRUFBRTtFQUZLOztBQU13QixjQUFLLGNBQWMsVUFBVTtBQUs5QyxtQkFBVTtBQUdWLGdCQUFRO0FBR3dCLHVCQUFlO0FBRzlCLHdCQUFnQjtBQUdqQyxzQkFBYztBQUdFLGtCQUFpQztBQUdoQyxnQkFBTztBQUdnQyxxQkFBWTtBQUtoRiw4QkFBcUI7O0VBRXJCLHVCQUE2QjtBQUMzQixVQUFNLHFCQUFxQjtBQUMzQixRQUFJLEtBQUssb0JBQW9CO0FBQzNCLFdBQUssbUJBQW1CLE1BQU07QUFDOUIsV0FBSyxxQkFBcUI7SUFDNUI7RUFDRjtFQUdBLE1BQU0sa0JBQWtCO0FBQ3RCLFNBQUssT0FBTyxLQUFLLGdCQUFnQixXQUFXO0FBRTVDLFFBQUksS0FBSyxTQUFTLFVBQVU7QUFDMUIsWUFBTSxLQUFLO0FBQ1gsWUFBTSxTQUFTLEtBQUssV0FBVyxjQUFjLFlBQVk7QUFDekQsYUFBTyxNQUFNO0FBRWIsV0FBSyxxQkFBcUIsU0FBUztJQUNyQyxPQUFPO0FBQ0wsV0FBSyxxQkFBcUI7SUFDNUI7RUFDRjtFQUVRLG1CQUFtQjtBQUN6QixTQUFLLGNBQWMsS0FBSyxFQUFFLElBQUksS0FBSyxHQUFHLENBQUM7RUFDekM7RUFFQSxJQUFJLGdCQUFnQjtBQUNsQixXQUFPLENBQUMsQ0FBQyxLQUFLO0VBQ2hCO0VBRUEsU0FBUztBQUNQLFdBQU8sT0FDSCxLQUFLLGNBQWMsSUFDbkI7T0FDQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxZQUFZLEtBQUssTUFBTSxNQUFNLENBQUMsS0FBSztNQUNyRCxNQUNFLDZFQUtTLEtBQUssUUFBUSxZQUFZLEtBQUssTUFBTSxDQUFDO01BQ2hELE1BQU07SUFDUixDQUFDLElBQ0M7TUFDQSxLQUFLO01BQ0wsTUFBTSwyQ0FBMkMsS0FBSyxPQUFPO01BQzdELE1BQU07SUFDUixDQUFDLElBQ0M7TUFDQSxLQUFLO01BQ0wsTUFDRSwyQkFBMEIsS0FBSyxPQUFPLE9BQU8sNENBQ3hDLEtBQUssT0FBTyxLQUFLO01BRXhCLE1BQU07SUFDUixDQUFDLElBQ0M7TUFDQSxDQUFDLEtBQUs7TUFDTixNQUNFLGtGQUtXLEtBQUssZ0JBQWdCLGtCQUNmLENBQUMsS0FBSyxhQUFhLGVBQ3ZCLEtBQUssZ0JBQWdCLElBQUksRUFBRSxpQkFDekI7UUFDWCxLQUFLLGdCQUFnQixLQUFLLGFBQWE7TUFDekMsQ0FBQztNQUNMLE1BQU07SUFDUixDQUFDO0VBRUw7QUFDRjtBQW5IYSxTQUdKLFNBQVMsQ0FBQyxRQUFZRSxPQUFNO0FBR047RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBTmhCLFNBTWtCO0FBRUE7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBUmhCLFNBUWtCO0FBR2pCO0VBQVgsU0FBUztHQVhDLFNBV0M7QUFHQTtFQUFYLFNBQVM7R0FkQyxTQWNDO0FBR2dDO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FqQi9CLFNBaUJpQztBQUdmO0VBQTVCLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztHQXBCaEIsU0FvQmtCO0FBR2pCO0VBQVgsU0FBUztHQXZCQyxTQXVCQztBQUdnQjtFQUEzQixTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7R0ExQmYsU0EwQmlCO0FBR0M7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBN0JoQixTQTZCa0I7QUFHdUM7RUFBbkUsU0FBUyxFQUFFLFdBQVcsY0FBYyxTQUFTLE1BQU0sTUFBTSxPQUFPLENBQUM7R0FoQ3ZELFNBZ0N5RDtBQUdwRDtFQUFmLGFBQWE7R0FuQ0gsU0FtQ0s7QUFhVjtFQURMLFNBQVMsUUFBUTtHQS9DUCxTQWdETDtBQWhESyxXQUFOO0VBRE4sY0FBYyxXQUFXO0dBQ2I7OztBRnRFYixJQUFJQyxZQUFXO0FBdUNmLFNBQVMsWUFBWSxJQUFlLFdBQW1CO0FBQ3JELFFBQU0sYUFBWSxvQkFBSSxLQUFLLEdBQUUsUUFBUTtBQUNyQyxNQUFJLEtBQW9DLFdBQVcsSUFBSSxTQUFTLEdBQzlELFdBQVcsT0FDWDtBQUVGLFdBQVMsU0FBUyxPQUFlLE9BQWdCO0FBQy9DLFdBQU8sUUFBUSxRQUFRLFNBQVEsb0JBQUksS0FBSyxHQUFFLFFBQVEsSUFBSTtFQUN4RDtBQUVBLFdBQVMsU0FBUztBQUNoQixpQkFBYSxFQUFFO0VBQ2pCO0FBRUEsV0FBUyxRQUFRO0FBQ2YsaUJBQWEsRUFBRTtBQUNmLG1CQUFlLFNBQVMsU0FBUztBQUNqQyxlQUFXLGdCQUFnQjtFQUM3QjtBQUVBLFdBQVMsU0FBUztBQUNoQixTQUFLLFdBQ0EsS0FDRCxXQUFXLElBQUksWUFBWSxZQUFZO0VBQzdDO0FBRUEsU0FBTyxFQUFFLFFBQWdCLE9BQWMsT0FBZTtBQUN4RDtBQUdPLElBQU0sb0JBQU4sY0FBZ0MsY0FBYyxjQUFjLFVBQVUsQ0FBQyxFQUFFO0VBQXpFOztBQWtCTCxTQUFRLE1BQU07QUFFZCxTQUFRLFNBQThDLG9CQUFJLElBQUk7QUFFaEQscUJBQVk7QUFHaUIsb0JBQVc7QUFTdEQsU0FBUSxrQkFBa0IsQ0FBQyxlQUN6QixLQUFLLElBQUksS0FBSyxJQUFJLGFBQWEsSUFBSSxHQUFJLEdBQUcsSUFBSyxJQUFJLE1BQU0sS0FBSyxPQUFPOztFQWxDdkUsb0JBQW9CO0FBQ2xCLFVBQU0sa0JBQWtCO0FBRXhCLFNBQUssaUJBQWlCLGdCQUFnQixDQUFDLE1BQW1CO0FBQ3hELFlBQU0sUUFBUSxLQUFLLE9BQU8sSUFBSSxFQUFFLE9BQU8sRUFBRTtBQUN6QyxVQUFJLE1BQU0sY0FBYztBQUN0QixjQUFNLGFBQWEsQ0FBQztNQUN0QjtBQUNBLFdBQUssWUFBWSxFQUFFLE9BQU8sRUFBRTtJQUM5QixDQUFDO0FBRUQsU0FBSyxpQkFBaUIsVUFBVSxNQUFNO0FBQ3BDLFdBQUssTUFBTSxZQUFZLGVBQWUsR0FBRyxLQUFLLFNBQVMsSUFBSTtBQUMzRCxXQUFLLE1BQU0sWUFBWSxrQkFBa0IsR0FBRyxLQUFLLEtBQUssWUFBWSxFQUFFLElBQUk7SUFDMUUsQ0FBQztFQUNIO0VBWUEsSUFBSSxLQUFhO0FBQ2YsV0FBTyxLQUFLO0VBQ2Q7O0VBUU8sU0FBUyxhQUE2QztBQUMzRCxVQUFNLGNBQWMsS0FBSyxPQUFPLElBQUksWUFBWSxFQUFFO0FBQ2xELFFBQUksWUFBWSxhQUFhLEdBQUc7QUFDOUIsa0JBQVksV0FBVztJQUN6QjtBQUVBLFFBQUksWUFBWSxZQUFZLENBQUMsWUFBWSxVQUFVLFlBQVksYUFBYSxRQUFRO0FBQ2xGLGtCQUFZLFFBQVEsWUFBWSxNQUFNLEtBQUssWUFBWSxZQUFZLEVBQUUsR0FBRyxZQUFZLFFBQVE7SUFDOUY7QUFFQSxRQUFJLFlBQVksWUFBWSxDQUFDLFlBQVksVUFBVSxZQUFZLGFBQWEsUUFBUTtBQUNsRixZQUFNLFdBQVcsS0FBSyxnQkFBZ0IsWUFBWSxRQUFRLE1BQU07QUFDaEUsa0JBQVksUUFBUSxZQUFZLE1BQU0sS0FBSyxZQUFZLFlBQVksRUFBRSxHQUFHLFFBQVE7SUFDbEY7QUFFQSxRQUFJLFlBQVksZ0JBQWdCLENBQUMsWUFBWSxVQUFVLENBQUMsWUFBWSxVQUFVO0FBQzVFLFlBQU0sV0FBVyxLQUFLLGdCQUFnQixZQUFZLFFBQVEsTUFBTTtBQUNoRSxrQkFBWSxRQUFRLFlBQVksTUFBTSxLQUFLLFlBQVksWUFBWSxFQUFFLEdBQUcsUUFBUTtJQUNsRjtBQUVBLFFBQUksQ0FBQyxZQUFZLElBQUk7QUFDbkIsa0JBQVksS0FBSyxjQUFjQSxXQUFVO0lBQzNDO0FBQ0EsU0FBSyxPQUFPLElBQUksWUFBWSxJQUFJLFdBQVc7QUFFM0MsU0FBSyxXQUFXO0FBRWhCLFFBQUksQ0FBQyxhQUFhO0FBQ2hCLFdBQUssVUFBVSxPQUFPLGVBQWU7SUFDdkM7QUFFQSxTQUFLLGVBQWUsS0FBSyxNQUFNO0FBRS9CLGVBQVcsTUFBTTtBQUNmLFVBQUksQ0FBQyxhQUFhO0FBQ2hCLGFBQUssVUFBVSxPQUFPLGVBQWU7TUFDdkM7SUFDRixHQUFHLEVBQUU7QUFDTCxTQUFLLGNBQWM7QUFFbkIsV0FBTyxZQUFZO0VBQ3JCOztFQUdPLFlBQVksSUFBWTtBQUM3QixRQUFJLEtBQUssT0FBTyxJQUFJLEVBQUUsR0FBRztBQUN2QixXQUFLLE9BQU8sSUFBSSxFQUFFLEVBQUUsT0FBTyxPQUFPO0FBQ2xDLFdBQUssT0FBTyxPQUFPLEVBQUU7QUFDckIsV0FBSyxlQUFlLEtBQUssTUFBTTtBQUMvQixXQUFLLGNBQWM7SUFDckI7QUFFQSxRQUFJLEtBQUssT0FBTyxTQUFTLEdBQUc7QUFDMUIsV0FBSyxnQkFBZ0IsVUFBVTtJQUNqQztFQUNGOztFQUdPLFdBQVcsSUFBWTtBQUM1QixVQUFNLFFBQVEsS0FBSyxPQUFPLElBQUksRUFBRTtBQUNoQyxRQUFJLE9BQU8sT0FBTztBQUNoQixZQUFNLE1BQU0sTUFBTTtJQUNwQjtFQUNGOztFQUdPLFdBQVcsSUFBWTtBQUM1QixVQUFNLFFBQVEsS0FBSyxPQUFPLElBQUksRUFBRTtBQUNoQyxRQUFJLE9BQU8sT0FBTztBQUNoQixZQUFNLE1BQU0sT0FBTztJQUNyQjtFQUNGOztFQUdPLGtCQUFrQjtBQUN2QixTQUFLLE9BQU8sUUFBUSxDQUFDLFVBQVUsT0FBTyxPQUFPLE9BQU8sQ0FBQztBQUNyRCxTQUFLLE9BQU8sTUFBTTtBQUNsQixTQUFLLGdCQUFnQixVQUFVO0VBQ2pDO0VBRVEsYUFBYSxRQUE2QztBQUNoRSxXQUFPO01BQ0w7TUFDQSxDQUFDLENBQUMsRUFBRSxNQUFNO01BQ1YsQ0FBQyxDQUFDLEdBQUcsTUFBTSxNQUFNO0FBQ2YsZUFBT0MsK0JBQ1FDLFdBQVUsT0FBTyxTQUFTLE9BQU8sYUFBYSx1QkFBdUIsSUFBSSxDQUFDLGtCQUN6RSxPQUFPLFFBQ2pCLENBQUMsTUFBa0IsS0FBSyxXQUFZLEVBQUUsT0FBb0IsRUFBRSxJQUM1RCxJQUFJLGtCQUNNLE9BQU8sUUFDakIsQ0FBQyxNQUFrQixLQUFLLFdBQVksRUFBRSxPQUFvQixFQUFFLElBQzVELElBQUksU0FDSCxPQUFPLEVBQUUsZUFDSCxPQUFPLE9BQU8sYUFDaEJBLFdBQVUsT0FBTyxNQUFNLENBQUMsWUFDekJBLFdBQVUsT0FBTyxLQUFLLENBQUMsV0FDeEJBLFdBQVUsT0FBTyxJQUFJLENBQUMsbUJBQ2QsT0FBTyxXQUFXLG9CQUNqQixPQUFPLFlBQVksY0FDekIsT0FBTyxNQUFNLFVBQ2pCLE9BQU8sRUFBRSxVQUNULE9BQU8sRUFBRSxrQkFDRCxPQUFPLFVBQVU7TUFDbkM7SUFDRjtFQUNGO0VBRVEsZUFBZSxRQUE2QztBQUNsRSxVQUFNLGlCQUFpQixDQUFDO0FBQ3hCLFVBQU0sb0JBQW9CLENBQUM7QUFDM0IsV0FBTyxRQUFRLENBQUMsVUFBVTtBQUN4QixVQUFJLE1BQU0sZUFBZSxPQUFPO0FBQzlCO01BQ0Y7QUFFQSxVQUFJLE1BQU0sZUFBZSxhQUFhO0FBQ3BDLDBCQUFrQixLQUFLLE1BQU0sT0FBTztBQUNwQztNQUNGO0FBRUEscUJBQWUsS0FBSyxNQUFNLE9BQU87SUFDbkMsQ0FBQztBQUdELFFBQUksZUFBZSxTQUFTLEdBQUc7QUFDN0IsTUFBQyxLQUFLLFdBQVcsY0FBYyxpQkFBaUIsRUFBa0IsWUFDaEUsZUFBZSxLQUFLLElBQUk7SUFDNUIsT0FBTztBQUNMLE1BQUMsS0FBSyxXQUFXLGNBQWMsaUJBQWlCLEVBQWtCLFlBQVk7SUFDaEY7QUFFQSxRQUFJLGtCQUFrQixTQUFTLEdBQUc7QUFDaEMsTUFBQyxLQUFLLFdBQVcsY0FBYyxnQkFBZ0IsRUFBa0IsWUFDL0Qsa0JBQWtCLEtBQUssSUFBSTtJQUMvQixPQUFPO0FBQ0wsTUFBQyxLQUFLLFdBQVcsY0FBYyxnQkFBZ0IsRUFBa0IsWUFBWTtJQUMvRTtFQUNGO0VBRUEsU0FBUztBQUNQLFdBQU9ELDREQUU2QixLQUFLLFNBQVMsNkRBQ0ssS0FBSyxTQUFTLGlDQUVqRSxLQUFLLGFBQWEsS0FBSyxNQUFNLENBQUM7RUFFcEM7QUFDRjtBQTNMYSxrQkFnQ0osU0FBUyxDQUFDRSxPQUFNO0FBVlQ7RUFBYkMsVUFBUyxDQUFDLENBQUM7R0F0QkQsa0JBc0JHO0FBRzZCO0VBQTFDQSxVQUFTLEVBQUUsU0FBUyxNQUFNLE1BQU0sT0FBTyxDQUFDO0dBekI5QixrQkF5QmdDO0FBR3ZDO0VBREhBLFVBQVMsRUFBRSxNQUFNLFFBQVEsU0FBUyxNQUFNLFdBQVcsS0FBSyxDQUFDO0dBM0IvQyxrQkE0QlA7QUE1Qk8sb0JBQU47RUFETixjQUFjLHFCQUFxQjtHQUN2Qjs7O0FJdEViLElBQUksZ0JBQWdCO0FBR3BCLGlCQUFpQixVQUFVLGlCQUFpQjtBQUU1QyxJQUFNLGdCQUFOLE1BQW9CO0FBQUEsRUFDbEIsY0FBYztBQU9kLFNBQVEsU0FBUztBQUVqQixTQUFRLGlCQUEyQztBQVJqRCxRQUFJLENBQUMsTUFBTSxHQUFHO0FBQ1osaUJBQVcsU0FBUyxpQkFBaUIsV0FBVyxLQUFLLGFBQWEsS0FBSyxJQUFJLENBQUM7QUFDNUUsV0FBSyxxQkFBcUI7QUFBQSxJQUM1QjtBQUFBLEVBQ0Y7QUFBQSxFQU1RLGFBQWEsT0FBNEI7QUFDL0MsUUFBSSxNQUFNLFFBQVEsS0FBSyxVQUFVLEtBQUssZ0JBQWdCO0FBQ3BELFdBQUssZUFBZSxNQUFNO0FBQUEsSUFDNUI7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUdPLGtCQUFrQixPQUFlO0FBQ3RDLFNBQUssZUFBZSxZQUFZO0FBQUEsRUFDbEM7QUFBQTtBQUFBLEVBR08sS0FBSyxRQUFnQztBQUMxQyxVQUFNLFFBQXdCO0FBQUEsTUFDNUIsSUFBSSxjQUFjLGVBQWU7QUFBQSxNQUNqQyxTQUFTO0FBQUEsTUFDVCxHQUFHO0FBQUEsSUFDTDtBQUVBLFdBQU8sS0FBSyxlQUFlLFNBQVMsS0FBSztBQUFBLEVBQzNDO0FBQUE7QUFBQSxFQUdPLE1BQU0sSUFBa0I7QUFDN0IsU0FBSyxlQUFlLFlBQVksRUFBRTtBQUFBLEVBQ3BDO0FBQUE7QUFBQSxFQUdPLFdBQWlCO0FBQ3RCLFNBQUssZUFBZSxnQkFBZ0I7QUFBQSxFQUN0QztBQUFBO0FBQUEsRUFHTyxXQUFXLElBQWtCO0FBQ2xDLFNBQUssZUFBZSxXQUFXLEVBQUU7QUFBQSxFQUNuQztBQUFBO0FBQUEsRUFHTyxXQUFXLElBQWtCO0FBQ2xDLFNBQUssZUFBZSxXQUFXLEVBQUU7QUFBQSxFQUNuQztBQUFBO0FBQUEsRUFHTyxvQkFBb0IsU0FBdUI7QUFDaEQsU0FBSyxTQUFTO0FBQUEsRUFDaEI7QUFBQSxFQUVRLHVCQUF1QjtBQUM3QixRQUFJLENBQUMsS0FBSyxnQkFBZ0I7QUFDeEIsV0FBSyxpQkFBaUIsV0FBVyxTQUFTLGNBQWMscUJBQXFCO0FBQUEsSUFDL0U7QUFDQSxlQUFXLFNBQVMsS0FBSyxZQUFZLEtBQUssY0FBYztBQUFBLEVBQzFEO0FBQ0Y7QUFFTyxJQUFNLGtCQUFrQixJQUFJLGNBQWM7IiwKICAibmFtZXMiOiBbImh0bWwiLCAicHJvcGVydHkiLCAiaWZEZWZpbmVkIiwgInN0eWxlcyIsICJjc3MiLCAic3R5bGVzIiwgInN0eWxlcyIsICJ1bmlxdWVJZCIsICJodG1sIiwgImlmRGVmaW5lZCIsICJzdHlsZXMiLCAicHJvcGVydHkiXQp9Cg==
