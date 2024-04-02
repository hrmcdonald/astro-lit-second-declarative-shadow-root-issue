import "../../chunks/chunk.FQWJN7AO.js";
import {
  MteVisuallyHidden
} from "../../chunks/chunk.W6WAJOJ3.js";
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
  mtrIconCheckCircle,
  mtrIconClose,
  mtrIconInformation
} from "../../chunks/chunk.M5RJHYFW.js";
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
} from "../../chunks/chunk.KVXAK6W4.js";

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90b2FzdCIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RvYXN0L3RvYXN0LWNvbnRhaW5lci5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90b2FzdCIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RvYXN0L3RvYXN0LnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RvYXN0L3RvYXN0LnNlcnZpY2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjIwcHg7bWF4LWhlaWdodDoxMDB2aDtvdmVyZmxvdy15OmF1dG87cGFkZGluZzp2YXIoLS1tdGUtc3BhY2UteGwpO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246Zml4ZWQ7cmlnaHQ6MTBweDt0b3A6MTBweH06aG9zdCg6Zm9jdXMtdmlzaWJsZSl7b3V0bGluZTpub25lfTpob3N0KDpmb2N1cy12aXNpYmxlOm5vdCguZGlzYWJsZWQpOm5vdChbZGlzYWJsZWRdKTpub3QoOmRpc2FibGVkKSk6YmVmb3Jle2JvcmRlcjoycHggc29saWQgcmdiKHZhcigtLW10ZS1mb2N1cy1yZ2IpKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym94LXNoYWRvdzowIDAgMCAxcHggdmFyKC0tbXRlLWxpZ2h0KTtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jaztpbnNldDoycHg7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Ojl9Omhvc3QoOmZvY3VzLXZpc2libGU6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpKTpiZWZvcmV7Ym90dG9tOnZhcigtLWZvY3VzLWJvdHRvbSwwKTt0b3A6dmFyKC0tZm9jdXMtdG9wLDApfTpob3N0KC5hbmltYXRlLXRvYXN0KSBtdGUtdG9hc3Q6bGFzdC1jaGlsZHthbmltYXRpb246dG9hc3RFbnRyYW5jZSA4MG1zIGN1YmljLWJlemllciguNCwwLDEsMSkgMHMgMX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXs6aG9zdHthbGlnbi1pdGVtczpjZW50ZXI7Ym90dG9tOjEwcHg7cmlnaHQ6YXV0bzt0b3A6YXV0bzt3aWR0aDoxMDAlfTpob3N0KC5hbmltYXRlLXRvYXN0KSBtdGUtdG9hc3Q6bm90KDpsYXN0LWNoaWxkKXthbmltYXRpb246dG9hc3RUcmFuc2l0aW9uIDgwbXMgY3ViaWMtYmV6aWVyKC40LDAsMSwxKSAwcyAxfTpob3N0KC5hbmltYXRlLXRvYXN0KSBtdGUtdG9hc3Q6bGFzdC1jaGlsZHthbmltYXRpb246dG9hc3RFbnRyYW5jZSA4MG1zIGN1YmljLWJlemllciguNCwwLDEsMSkgMHMgMX19QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uKXthbmltYXRpb246bm9uZX1Aa2V5ZnJhbWVzIHRvYXN0RW50cmFuY2V7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDUwJSl9dG97b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApfX1Aa2V5ZnJhbWVzIHRvYXN0VHJhbnNpdGlvbnswJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKX19YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tYmFja2dyb3VuZDp2YXIoLS1tdGUtc3VyZmFjZS0yKTstLWFjY2VudC1jb2xvcjp2YXIoLS1tdGUtZ3JleS04KTstLWljb24tY29sb3I6dmFyKC0tbXRlLWluay0xKTstLWNvbG9yOnZhcigtLW10ZS1pbmstMSk7LS1ib3JkZXI6MXB4IHNvbGlkIHZhcigtLW10ZS1ib3JkZXItMik7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2JvcmRlcjp2YXIoLS1ib3JkZXIpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym94LXNoYWRvdzp2YXIoLS1tdGUtZWxldmF0aW9uLWxldmVsLTQpIHJnYmEoMCwwLDAsLjIpO2NvbG9yOnZhcigtLWNvbG9yKTtkaXNwbGF5OmZsZXg7ZmxleC1zaHJpbms6MDtnYXA6OHB4O21pbi1oZWlnaHQ6NDZweDtwYWRkaW5nOnZhcigtLW10ZS1zcGFjZS1zbSk7cG9pbnRlci1ldmVudHM6YXV0bztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfTpob3N0OmJlZm9yZXthbGlnbi1zZWxmOnN0cmV0Y2g7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hY2NlbnQtY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtZnVsbCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7ZmxleC1zaHJpbms6MDtoZWlnaHQ6YXV0bzt3aWR0aDo0cHh9Omhvc3QoW2ljb25dOm5vdChbaWNvbj1cIlwiXSkpOmJlZm9yZSw6aG9zdChbc3RhdHVzXTpub3QoW3dpdGhvdXRJY29uXSk6bm90KFtzdGF0dXM9XCJcIl0pKTpiZWZvcmV7Y29udGVudDpub25lfS5pY29ue2hlaWdodDoyNHB4O21pbi1oZWlnaHQ6MjRweDttaW4td2lkdGg6MjRweDt3aWR0aDoyNHB4fS5tZXNzYWdle2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC13ZWlnaHQpOy13ZWJraXQtaHlwaGVuczphdXRvO2h5cGhlbnM6YXV0bztsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItbGluZS1oZWlnaHQpO3dvcmQtd3JhcDpicmVhay13b3JkO292ZXJmbG93LXdyYXA6YnJlYWstd29yZH0uYWN0aW9uLC5jbG9zZXttYXJnaW4tbGVmdDphdXRvfS5hY3Rpb24rLmNsb3Nle21hcmdpbi1sZWZ0OjB9Omhvc3QoW2NvbG9yPXByaW1hcnldKSAuaWNvbiw6aG9zdChbc3RhdHVzPXByaW1hcnldKSAuaWNvbnstLWljb24tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1wcmltYXJ5XSksOmhvc3QoW3N0YXR1cz1wcmltYXJ5XSl7LS1hY2NlbnQtY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1zZWNvbmRhcnldKSAuaWNvbiw6aG9zdChbc3RhdHVzPXNlY29uZGFyeV0pIC5pY29uey0taWNvbi1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XSksOmhvc3QoW3N0YXR1cz1zZWNvbmRhcnldKXstLWFjY2VudC1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9dGVydGlhcnldKSAuaWNvbiw6aG9zdChbc3RhdHVzPXRlcnRpYXJ5XSkgLmljb257LS1pY29uLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXRlcnRpYXJ5XSksOmhvc3QoW3N0YXR1cz10ZXJ0aWFyeV0pey0tYWNjZW50LWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXN1Y2Nlc3NdKSAuaWNvbiw6aG9zdChbc3RhdHVzPXN1Y2Nlc3NdKSAuaWNvbnstLWljb24tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1zdWNjZXNzXSksOmhvc3QoW3N0YXR1cz1zdWNjZXNzXSl7LS1hY2NlbnQtY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj13YXJuaW5nXSkgLmljb24sOmhvc3QoW3N0YXR1cz13YXJuaW5nXSkgLmljb257LS1pY29uLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctZGFya2VyLXJnYikpfTpob3N0KFtjb2xvcj13YXJuaW5nXSksOmhvc3QoW3N0YXR1cz13YXJuaW5nXSl7LS1hY2NlbnQtY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1kYXJrZXItcmdiKSl9Omhvc3QoW2NvbG9yPWRhbmdlcl0pLDpob3N0KFtzdGF0dXM9ZGFuZ2VyXSl7LS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1saWdodGVyLXJnYikpOy0tYWNjZW50LWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1iYXNlLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWxpZ2h0ZXItYy1yZ2IpKTstLWljb24tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtcmdiKSl9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uKXthbmltYXRpb246bm9uZX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQ4MHB4KXs6aG9zdHttYXgtd2lkdGg6MzgwcHg7d2lkdGg6MzgwcHh9fWA7IiwgImltcG9ydCB7IGlzU3NyLCByZWdpc3RlckVsZW1lbnRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBNdGVWaXN1YWxseUhpZGRlbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy92aXN1YWxseS1oaWRkZW4nO1xuXG5pbXBvcnQgJy4vdG9hc3QtY29udGFpbmVyLmVsZW1lbnQnO1xuaW1wb3J0IHsgTXRlVG9hc3RDb25maWcsIE10ZVRvYXN0Q29udGFpbmVyIH0gZnJvbSAnLi90b2FzdC1jb250YWluZXIuZWxlbWVudCc7XG5pbXBvcnQgeyBNdGVUb2FzdCB9IGZyb20gJy4vdG9hc3QuZWxlbWVudCc7XG5cbmV4cG9ydCB0eXBlIHsgTXRlVG9hc3RDb25maWcgfSBmcm9tICcuL3RvYXN0LWNvbnRhaW5lci5lbGVtZW50JztcbmV4cG9ydCB0eXBlIHsgTXRlVG9hc3RDbG9zZURldGFpbCB9IGZyb20gJy4vdG9hc3QudHlwZXMnO1xuXG5sZXQgdW5pcXVlVG9hc3RJZCA9IDA7XG5cbi8vIEVuc3VyZXMgTXRlVG9hc3QgYW5kIE10ZVZpc3VhbGx5SGlkZGVuIGVsZW1lbnRzIGFyZSBidW5kbGVkIHdoZW4gdGhpcyBzZXJ2aWNlIGlzIHVzZWQuXG5yZWdpc3RlckVsZW1lbnRzKE10ZVRvYXN0LCBNdGVWaXN1YWxseUhpZGRlbik7XG5cbmNsYXNzIF9Ub2FzdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIGdsb2JhbFRoaXMuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlSG90S2V5LmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5hcHBlbmRUb2FzdENvbnRhaW5lcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaG90S2V5ID0gJ0Y4JztcblxuICBwcml2YXRlIHRvYXN0Q29udGFpbmVyOiBNdGVUb2FzdENvbnRhaW5lciB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgaGFuZGxlSG90S2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gdGhpcy5ob3RLZXkgJiYgdGhpcy50b2FzdENvbnRhaW5lcikge1xuICAgICAgdGhpcy50b2FzdENvbnRhaW5lci5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSB0b2FzdCBub3RpZmljYXRpb24gY29udGFpbmVycyBhcmlhIGxhYmVsIHByb3BlcnR5LiAgKi9cbiAgcHVibGljIHNldENvbnRhaW5lckxhYmVsKGxhYmVsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRvYXN0Q29udGFpbmVyLmFyaWFMYWJlbCA9IGxhYmVsO1xuICB9XG5cbiAgLyoqIFNob3dzIGEgdG9hc3Qgbm90aWZpY2F0aW9uIGJhc2VkIHVwb24gY29uZmlnIG9wdGlvbnMuICAqL1xuICBwdWJsaWMgc2hvdyhjb25maWc6IE10ZVRvYXN0Q29uZmlnKTogc3RyaW5nIHtcbiAgICBjb25zdCB0b2FzdDogTXRlVG9hc3RDb25maWcgPSB7XG4gICAgICBpZDogYG10ZS10b2FzdC0tJHt1bmlxdWVUb2FzdElkKyt9YCxcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgLi4uY29uZmlnLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy50b2FzdENvbnRhaW5lci5hZGRUb2FzdCh0b2FzdCk7XG4gIH1cblxuICAvKiogQ2xvc2VzIGEgc3BlY2lmaWMgdG9hc3Qgbm90aWZpY2F0aW9ucy4gICovXG4gIHB1YmxpYyBjbG9zZShpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy50b2FzdENvbnRhaW5lci5yZW1vdmVUb2FzdChpZCk7XG4gIH1cblxuICAvKiogQ2xvc2VzIGFsbCBjdXJyZW50bHkgdmlzaWJsZSB0b2FzdCBub3RpZmljYXRpb25zLiAgKi9cbiAgcHVibGljIGNsb3NlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMudG9hc3RDb250YWluZXIucmVtb3ZlQWxsVG9hc3RzKCk7XG4gIH1cblxuICAvKiogUGF1c2VzIHRoZSB0aW1lciBmb3IgYSBjdXJyZW50bHkgdmlzaWJsZSB0b2FzdCBnaXZlbiBhIHRvYXN0IGlkICovXG4gIHB1YmxpYyBwYXVzZVRpbWVyKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnRvYXN0Q29udGFpbmVyLnBhdXNlVGltZXIoaWQpO1xuICB9XG5cbiAgLyoqIFN0YXJ0cyB0aGUgdGltZXIgZm9yIGEgY3VycmVudGx5IHZpc2libGUgdG9hc3QgZ2l2ZW4gYSB0b2FzdCBpZCAqL1xuICBwdWJsaWMgc3RhcnRUaW1lcihpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy50b2FzdENvbnRhaW5lci5zdGFydFRpbWVyKGlkKTtcbiAgfVxuXG4gIC8qKiBTZXRzIGEgaG90IGhleSB0byBiZSBhYmxlIHRvIGZvY3VzIG9uIHRoZSB0b2FzdCBub3RpZmljYXRpb24gY29udGFpbmVyLiAqL1xuICBwdWJsaWMgc2V0VG9hc3RTdGFja0hvdEtleShrZXljb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmhvdEtleSA9IGtleWNvZGU7XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZFRvYXN0Q29udGFpbmVyKCkge1xuICAgIGlmICghdGhpcy50b2FzdENvbnRhaW5lcikge1xuICAgICAgdGhpcy50b2FzdENvbnRhaW5lciA9IGdsb2JhbFRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbXRlLXRvYXN0LWNvbnRhaW5lcicpO1xuICAgIH1cbiAgICBnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50b2FzdENvbnRhaW5lcik7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZVRvYXN0U2VydmljZSA9IG5ldyBfVG9hc3RTZXJ2aWNlKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLFFBQUFBLGFBQVk7QUFDckIsU0FBUyxZ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LGNBQWMsZUFBZTtBQUFBLE1BQ2pDLFNBQVM7QUFBQSxNQUNULEdBQUc7QUFBQSxJQUNMO0FBRUEsV0FBTyxLQUFLLGVBQWUsU0FBUyxLQUFLO0FBQUEsRUFDM0M7QUFBQTtBQUFBLEVBR08sTUFBTSxJQUFrQjtBQUM3QixTQUFLLGVBQWUsWUFBWSxFQUFFO0FBQUEsRUFDcEM7QUFBQTtBQUFBLEVBR08sV0FBaUI7QUFDdEIsU0FBSyxlQUFlLGdCQUFnQjtBQUFBLEVBQ3RDO0FBQUE7QUFBQSxFQUdPLFdBQVcsSUFBa0I7QUFDbEMsU0FBSyxlQUFlLFdBQVcsRUFBRTtBQUFBLEVBQ25DO0FBQUE7QUFBQSxFQUdPLFdBQVcsSUFBa0I7QUFDbEMsU0FBSyxlQUFlLFdBQVcsRUFBRTtBQUFBLEVBQ25DO0FBQUE7QUFBQSxFQUdPLG9CQUFvQixTQUF1QjtBQUNoRCxTQUFLLFNBQVM7QUFBQSxFQUNoQjtBQUFBLEVBRVEsdUJBQXVCO0FBQzdCLFFBQUksQ0FBQyxLQUFLLGdCQUFnQjtBQUN4QixXQUFLLGlCQUFpQixXQUFXLFNBQVMsY0FBYyxxQkFBcUI7QUFBQSxJQUMvRTtBQUNBLGVBQVcsU0FBUyxLQUFLLFlBQVksS0FBSyxjQUFjO0FBQUEsRUFDMUQ7QUFDRjtBQUVPLElBQU0sa0JBQWtCLElBQUksY0FBYzsiLAogICJuYW1lcyI6IFsiaHRtbCIsICJwcm9wZXJ0eSIsICJpZkRlZmluZWQiLCAic3R5bGVzIiwgImNzcyIsICJzdHlsZXMiLCAic3R5bGVzIiwgInVuaXF1ZUlkIiwgImh0bWwiLCAiaWZEZWZpbmVkIiwgInN0eWxlcyIsICJwcm9wZXJ0eSJdCn0K
