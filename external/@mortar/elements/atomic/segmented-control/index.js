import "../../chunks/chunk.FQWJN7AO.js";
import "../../chunks/chunk.DYYIIZPZ.js";
import "../../chunks/chunk.K7IFCJCW.js";
import "../../chunks/chunk.F33MBUAV.js";
import "../../chunks/chunk.SRHT6JKE.js";
import "../../chunks/chunk.CFKDY3QJ.js";
import "../../chunks/chunk.D4QL7DP6.js";
import "../../chunks/chunk.L7F3KXB6.js";
import {
  DensityMixin,
  DisabledMixin,
  MteElement,
  PresetMixinFactory,
  RadiusMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  eventEmitter,
  isValidResizeController,
  onUpdate,
  styles,
  styles7 as styles2
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/segmented-control/segmented-control.element.ts
import { html } from "lit";
import { property, query, queryAll } from "lit/decorators.js";

// src/atomic/segmented-control/segmented-control.styles.ts
import { css } from "lit";
var styles3 = css`:host{--border-radius:var(--mte-border-radius-sm);--border-color:var(--mte-border-1);--background:var(--mte-surface-3);--control-background:transparent;--selected-background:var(--mte-surface-2);--option-padding-x:var(--mte-space-md);--option-padding-y:var(--mte-space-xs);--box-shadow:var(--mte-elevation-z1);text-wrap:nowrap}fieldset{border:0;margin:0;padding:0}.segmented-controls{--temp-background-color:var(--mte-surface-2);background-color:var(--background);border:1px solid var(--border-color);border-radius:var(--border-radius);display:inline-flex;padding:2px;position:relative}.segmented-controls:before{background:var(--selected-background);border-radius:var(--border-radius);box-shadow:var(--box-shadow);content:"";height:var(--background-height);left:0;opacity:var(--background-opacity,0);pointer-events:none;position:absolute;transform:translate(var(--background-translate,0,0));width:var(--background-width)}.segmented-controls.selected:before{transition:var(--animation-duration) transform ease-in-out}:host([disabled]) .segmented-controls.selected:before{--selected-background:var(--mte-disabled-2);--box-shadow:0}input[type=radio]{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.option label{align-items:center;background-color:var(--control-background);border-radius:var(--border-radius);cursor:pointer;display:flex;gap:6px;justify-content:center;padding:var(--option-padding-y) var(--option-padding-x)}.option label:hover{--control-background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a))}.option label:active{--control-background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a))}input[type=radio]:checked+label,input[type=radio]:checked+mte-overlay-trigger label{background-color:var(--temp-background-color);font-weight:var(--mte-font-weight-medium)}input[type=radio]:checked+label:hover,input[type=radio]:checked+mte-overlay-trigger label:hover{--control-background:transparent}input[type=radio]:checked:disabled+label:hover,input[type=radio]:checked:disabled+mte-overlay-trigger label:hover{--control-background:var(--mte-disabled-2)}input[type=radio]+label,input[type=radio]+mte-overlay-trigger label{position:relative}input[type=radio]:focus-visible:not(.disabled):not([disabled]):not(:disabled)+label:before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);bottom:0;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:0;pointer-events:none;position:absolute;right:0;top:0;z-index:9}input[type=radio]:focus-visible:not(.disabled):not([disabled]):not(:disabled)+mte-overlay-trigger label:before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);bottom:0;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:0;pointer-events:none;position:absolute;right:0;top:0;z-index:9}input[type=radio]:disabled+label,input[type=radio]:disabled+mte-overlay-trigger label{--control-background:var(--mte-disabled-2);color:var(--mte-disabled-4);cursor:not-allowed}:host([disabled]){--control-background:var(--mte-disabled-2);--background:var(--mte-disabled-2)}:host([withFullWidth]) .segmented-controls{justify-content:space-evenly;width:100%}:host([withFullWidth]) .option{display:flex}:host([withFullWidth]) .option,:host([withFullWidth]) .option label{height:100%;width:100%}:host([withFullWidth]) .option label{--option-padding-x:0}:host([radius=lg]){--border-radius:var(--mte-border-radius-xl)}:host([radius=md]){--border-radius:var(--mte-border-radius-md)}@media screen and (prefers-reduced-motion:reduce){.segmented-controls.selected:before{transition:none}}`;

// src/atomic/segmented-control/segmented-control.element.ts
import { FormControlMixin } from "@open-wc/form-control";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { config } from "@mortar/styles";
import { ResizeController } from "@lit-labs/observers/resize-controller.js";
var MteSegmentedControl = class extends DensityMixin(
  RadiusMixin(
    FormControlMixin(
      DisabledMixin(
        PresetMixinFactory("MteSegmentedControl")(
          StylePartsMixin(MteElement)
        )
      )
    )
  )
) {
  constructor() {
    super(...arguments);
    this.withFullWidth = false;
    this.handleMouseUp = (event) => {
      this.controls.style.setProperty(
        "--animation-duration",
        `${config.animation.transitionDuration.short}`
      );
    };
    // Essentially, turns off animation when focus is visible
    this.handleKeydown = (event) => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        this.controls.style.setProperty("--animation-duration", "0");
      }
    };
  }
  getSelected() {
    return this.selected;
  }
  connectedCallback() {
    super.connectedCallback();
    this.observer = new ResizeController(this, {
      callback: () => {
        this.computeTransitionBackgroundSize();
      }
    });
    this.updateComplete.then(() => {
      this.observer?.observe(this.controls);
      this.controls.addEventListener("transitionend", () => {
        this.removeTransition();
      });
    });
    this.addEventListener("mouseup", (event) => {
      this.handleMouseUp(event);
    });
    this.addEventListener("keydown", (event) => {
      this.handleKeydown(event);
    });
  }
  firstUpdated() {
    this.controls?.style.setProperty("--temp-background-color", "transparent");
    this.selected = this.options?.find((option) => option.selected);
    this.computeTransitionBackgroundSize();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.controls?.removeEventListener("transitionend", this.removeTransition);
    if (this.controls && isValidResizeController(this.observer)) {
      this.observer?.unobserve(this.controls);
    }
  }
  handleOptionsChange() {
    this.selected = this.options?.find((option) => option.selected);
    this.computeTransitionBackgroundSize();
  }
  /** Removes classname responsible for transition to prevent animation of resize */
  removeTransition() {
    this.controls?.classList.remove("selected");
  }
  /** Computes and sets the size of the selected item background */
  computeTransitionBackgroundSize() {
    if (!this.selected) {
      return;
    }
    const selectedIndex = this.options.findIndex((option) => option.value === this.selected.value);
    const selectedOption = this.htmlOptions[selectedIndex];
    const rect = selectedOption.getBoundingClientRect();
    this.controls.style.setProperty("--background-opacity", "1");
    this.controls.style.setProperty("--background-width", rect.width + "px");
    this.controls.style.setProperty("--background-height", rect.height + "px");
    this.controls.style.setProperty("--background-translate", `${selectedOption.offsetLeft}px, 0`);
  }
  handleChange(event) {
    const target = event.target;
    if (this.selected) {
      this.controls.classList.add("selected");
    }
    this.selected = this.options.find((option) => {
      return target.value === option.value;
    });
    this.computeTransitionBackgroundSize();
    this._onChange.emit({
      id: target.id,
      value: target.value
    });
  }
  renderOptionLabel(option, i) {
    if (!option.icon) {
      return html`<label for="${option.id ? option.id : `mte-segmented-option--${i}`}" part="label">${option.label}</label>`;
    }
    if (option.iconOnly) {
      return html`<mte-overlay-trigger><label slot="trigger" for="${option.id ? option.id : `mte-segmented-option--${i}`}" part="label"><mte-icon name="${option.icon}"></mte-icon></label><mte-tooltip asAriaLabel ?disabled="${option.disabled || this.disabled}" slot="overlay">${option.label}</mte-tooltip></mte-overlay-trigger>`;
    } else {
      return html`<label for="${option.id ? option.id : `mte-segmented-option--${i}`}" part="label"><mte-icon autosize name="${option.icon}"></mte-icon>${option.label}</label>`;
    }
  }
  renderControls() {
    if (this.options) {
      return this.options.map((option, i) => {
        return html`<div class="option"><input id="${option.id ? option.id : `mte-segmented-option--${i}`}" type="radio" value="${option.value}" name="${option.name}" @change="${this.handleChange}" ?checked="${option.selected}" ?disabled="${option.disabled}"> ${this.renderOptionLabel(option, i)}</div>`;
      });
    }
  }
  render() {
    return html`${this.instanceStyles}<fieldset role="radiogroup" ?disabled="${this.disabled}"><legend aria-label="${ifDefined(this.ariaLabel)}"><mte-visually-hidden>${this.label}</mte-visually-hidden></legend><div class="segmented-controls">${this.renderControls()}</div></fieldset>`;
  }
};
MteSegmentedControl.styles = [styles2, styles, styles3];
__decorateClass([
  property({ type: Array })
], MteSegmentedControl.prototype, "options", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteSegmentedControl.prototype, "withFullWidth", 2);
__decorateClass([
  property({ reflect: true })
], MteSegmentedControl.prototype, "label", 2);
__decorateClass([
  property({ reflect: true, attribute: "aria-label" })
], MteSegmentedControl.prototype, "ariaLabel", 2);
__decorateClass([
  eventEmitter()
], MteSegmentedControl.prototype, "_onChange", 2);
__decorateClass([
  query(".segmented-controls")
], MteSegmentedControl.prototype, "controls", 2);
__decorateClass([
  queryAll(".option")
], MteSegmentedControl.prototype, "htmlOptions", 2);
__decorateClass([
  onUpdate("options", { waitUntilFirstUpdate: true })
], MteSegmentedControl.prototype, "handleOptionsChange", 1);
MteSegmentedControl = __decorateClass([
  defineElement("mte-segmented-control")
], MteSegmentedControl);
export {
  MteSegmentedControl
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zZWdtZW50ZWQtY29udHJvbCIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3NlZ21lbnRlZC1jb250cm9sL3NlZ21lbnRlZC1jb250cm9sLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1zbSk7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0xKTstLWJhY2tncm91bmQ6dmFyKC0tbXRlLXN1cmZhY2UtMyk7LS1jb250cm9sLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1zZWxlY3RlZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1zdXJmYWNlLTIpOy0tb3B0aW9uLXBhZGRpbmcteDp2YXIoLS1tdGUtc3BhY2UtbWQpOy0tb3B0aW9uLXBhZGRpbmcteTp2YXIoLS1tdGUtc3BhY2UteHMpOy0tYm94LXNoYWRvdzp2YXIoLS1tdGUtZWxldmF0aW9uLXoxKTt0ZXh0LXdyYXA6bm93cmFwfWZpZWxkc2V0e2JvcmRlcjowO21hcmdpbjowO3BhZGRpbmc6MH0uc2VnbWVudGVkLWNvbnRyb2xzey0tdGVtcC1iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW10ZS1zdXJmYWNlLTIpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYmFja2dyb3VuZCk7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7ZGlzcGxheTppbmxpbmUtZmxleDtwYWRkaW5nOjJweDtwb3NpdGlvbjpyZWxhdGl2ZX0uc2VnbWVudGVkLWNvbnRyb2xzOmJlZm9yZXtiYWNrZ3JvdW5kOnZhcigtLXNlbGVjdGVkLWJhY2tncm91bmQpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtjb250ZW50OlwiXCI7aGVpZ2h0OnZhcigtLWJhY2tncm91bmQtaGVpZ2h0KTtsZWZ0OjA7b3BhY2l0eTp2YXIoLS1iYWNrZ3JvdW5kLW9wYWNpdHksMCk7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLWJhY2tncm91bmQtdHJhbnNsYXRlLDAsMCkpO3dpZHRoOnZhcigtLWJhY2tncm91bmQtd2lkdGgpfS5zZWdtZW50ZWQtY29udHJvbHMuc2VsZWN0ZWQ6YmVmb3Jle3RyYW5zaXRpb246dmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKSB0cmFuc2Zvcm0gZWFzZS1pbi1vdXR9Omhvc3QoW2Rpc2FibGVkXSkgLnNlZ21lbnRlZC1jb250cm9scy5zZWxlY3RlZDpiZWZvcmV7LS1zZWxlY3RlZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1kaXNhYmxlZC0yKTstLWJveC1zaGFkb3c6MH1pbnB1dFt0eXBlPXJhZGlvXXtjbGlwOnJlY3QoMCAwIDAgMCk7Y2xpcC1wYXRoOmluc2V0KDUwJSk7aGVpZ2h0OjFweDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7d2hpdGUtc3BhY2U6bm93cmFwO3dpZHRoOjFweH0ub3B0aW9uIGxhYmVse2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbnRyb2wtYmFja2dyb3VuZCk7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXg7Z2FwOjZweDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6dmFyKC0tb3B0aW9uLXBhZGRpbmcteSkgdmFyKC0tb3B0aW9uLXBhZGRpbmcteCl9Lm9wdGlvbiBsYWJlbDpob3ZlcnstLWNvbnRyb2wtYmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWEpKX0ub3B0aW9uIGxhYmVsOmFjdGl2ZXstLWNvbnRyb2wtYmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYSkpfWlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQrbGFiZWwsaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCttdGUtb3ZlcmxheS10cmlnZ2VyIGxhYmVse2JhY2tncm91bmQtY29sb3I6dmFyKC0tdGVtcC1iYWNrZ3JvdW5kLWNvbG9yKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC13ZWlnaHQtbWVkaXVtKX1pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkK2xhYmVsOmhvdmVyLGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQrbXRlLW92ZXJsYXktdHJpZ2dlciBsYWJlbDpob3ZlcnstLWNvbnRyb2wtYmFja2dyb3VuZDp0cmFuc3BhcmVudH1pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkOmRpc2FibGVkK2xhYmVsOmhvdmVyLGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQ6ZGlzYWJsZWQrbXRlLW92ZXJsYXktdHJpZ2dlciBsYWJlbDpob3ZlcnstLWNvbnRyb2wtYmFja2dyb3VuZDp2YXIoLS1tdGUtZGlzYWJsZWQtMil9aW5wdXRbdHlwZT1yYWRpb10rbGFiZWwsaW5wdXRbdHlwZT1yYWRpb10rbXRlLW92ZXJsYXktdHJpZ2dlciBsYWJlbHtwb3NpdGlvbjpyZWxhdGl2ZX1pbnB1dFt0eXBlPXJhZGlvXTpmb2N1cy12aXNpYmxlOm5vdCguZGlzYWJsZWQpOm5vdChbZGlzYWJsZWRdKTpub3QoOmRpc2FibGVkKStsYWJlbDpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCByZ2IodmFyKC0tbXRlLWZvY3VzLXJnYikpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3R0b206MDtib3gtc2hhZG93OjAgMCAwIDFweCB2YXIoLS1tdGUtbGlnaHQpO2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO2xlZnQ6MDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjA7ei1pbmRleDo5fWlucHV0W3R5cGU9cmFkaW9dOmZvY3VzLXZpc2libGU6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpK210ZS1vdmVybGF5LXRyaWdnZXIgbGFiZWw6YmVmb3Jle2JvcmRlcjoycHggc29saWQgcmdiKHZhcigtLW10ZS1mb2N1cy1yZ2IpKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym90dG9tOjA7Ym94LXNoYWRvdzowIDAgMCAxcHggdmFyKC0tbXRlLWxpZ2h0KTtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jaztsZWZ0OjA7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowO3otaW5kZXg6OX1pbnB1dFt0eXBlPXJhZGlvXTpkaXNhYmxlZCtsYWJlbCxpbnB1dFt0eXBlPXJhZGlvXTpkaXNhYmxlZCttdGUtb3ZlcmxheS10cmlnZ2VyIGxhYmVsey0tY29udHJvbC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1kaXNhYmxlZC0yKTtjb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtNCk7Y3Vyc29yOm5vdC1hbGxvd2VkfTpob3N0KFtkaXNhYmxlZF0pey0tY29udHJvbC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1kaXNhYmxlZC0yKTstLWJhY2tncm91bmQ6dmFyKC0tbXRlLWRpc2FibGVkLTIpfTpob3N0KFt3aXRoRnVsbFdpZHRoXSkgLnNlZ21lbnRlZC1jb250cm9sc3tqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O3dpZHRoOjEwMCV9Omhvc3QoW3dpdGhGdWxsV2lkdGhdKSAub3B0aW9ue2Rpc3BsYXk6ZmxleH06aG9zdChbd2l0aEZ1bGxXaWR0aF0pIC5vcHRpb24sOmhvc3QoW3dpdGhGdWxsV2lkdGhdKSAub3B0aW9uIGxhYmVse2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9Omhvc3QoW3dpdGhGdWxsV2lkdGhdKSAub3B0aW9uIGxhYmVsey0tb3B0aW9uLXBhZGRpbmcteDowfTpob3N0KFtyYWRpdXM9bGddKXstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteGwpfTpob3N0KFtyYWRpdXM9bWRdKXstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpfUBtZWRpYSBzY3JlZW4gYW5kIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSl7LnNlZ21lbnRlZC1jb250cm9scy5zZWxlY3RlZDpiZWZvcmV7dHJhbnNpdGlvbjpub25lfX1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLFlBQVk7QUFDckIsU0FBUyxVQUFVLE9BQU8sZ0JBQWdCOzs7QUNEMUMsU0FBUyxXQUFXO0FBQWEsSUFBTUEsVUFBUzs7O0FEdUJoRCxTQUFTLHdCQUF3QjtBQUVqQyxTQUFTLGlCQUFpQjtBQUkxQixTQUFTLGNBQWM7QUFDdkIsU0FBUyx3QkFBd0I7QUFvQjFCLElBQU0sc0JBQU4sY0FBa0M7RUFDdkM7SUFDRTtNQUNFO1FBQ0UsbUJBQTJDLHFCQUFxQjtVQUM5RCxnQkFBNkQsVUFBVTtRQUN6RTtNQUNGO0lBQ0Y7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QUFDLEVBQUUsa0JBQ3hFLE9BQU8sS0FBSztJQUVuQjtBQUVBLFFBQUksT0FBTyxVQUFVO0FBQ25CLGFBQU8sdURBR0csT0FBTyxLQUFLLE9BQU8sS0FBSyx5QkFBeUIsQ0FBQyxFQUFFLGtDQUV6QyxPQUFPLElBQUksNERBRU8sT0FBTyxZQUFZLEtBQUssUUFBUSxvQkFDaEUsT0FBTyxLQUFLO0lBR3JCLE9BQU87QUFDTCxhQUFPLG1CQUFrQixPQUFPLEtBQUssT0FBTyxLQUFLLHlCQUF5QixDQUFDLEVBQUUsMkNBQ2pELE9BQU8sSUFBSSxnQkFDbkMsT0FBTyxLQUFLO0lBRWxCO0VBQ0Y7RUFFQSxpQkFBaUI7QUFDZixRQUFJLEtBQUssU0FBUztBQUNoQixhQUFPLEtBQUssUUFBUSxJQUFJLENBQUMsUUFBUSxNQUFNO0FBQ3JDLGVBQU8sc0NBRUUsT0FBTyxLQUFLLE9BQU8sS0FBSyx5QkFBeUIsQ0FBQyxFQUFFLHlCQUVqRCxPQUFPLEtBQUssV0FDYixPQUFPLElBQUksY0FDUixLQUFLLFlBQVksZUFDaEIsT0FBTyxRQUFRLGdCQUNkLE9BQU8sUUFBUSxNQUMzQixLQUFLLGtCQUFrQixRQUFRLENBQUMsQ0FBQztNQUV2QyxDQUFDO0lBQ0g7RUFDRjtFQUVBLFNBQVM7QUFDUCxXQUFPLE9BQU8sS0FBSyxjQUFjLDBDQUNTLEtBQUssUUFBUSx5QkFDOUIsVUFBVSxLQUFLLFNBQVMsQ0FBQywwQkFDckIsS0FBSyxLQUFLLGtFQUVELEtBQUssZUFBZSxDQUFDO0VBRTdEO0FBQ0Y7QUFwTWEsb0JBV0osU0FBUyxDQUFDQyxTQUFZLFFBQWVBLE9BQU07QUFHdkI7RUFBMUIsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0dBZGQsb0JBY2dCO0FBR2lCO0VBQTNDLFNBQVMsRUFBRSxTQUFTLE1BQU0sTUFBTSxRQUFRLENBQUM7R0FqQi9CLG9CQWlCaUM7QUFHZjtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FwQmhCLG9CQW9Ca0I7QUFHeUI7RUFBckQsU0FBUyxFQUFFLFNBQVMsTUFBTSxXQUFXLGFBQWEsQ0FBQztHQXZCekMsb0JBdUIyQztBQUd0QztFQUFmLGFBQWE7R0ExQkgsb0JBMEJLO0FBRWM7RUFBN0IsTUFBTSxxQkFBcUI7R0E1QmpCLG9CQTRCbUI7QUFDVDtFQUFwQixTQUFTLFNBQVM7R0E3QlIsb0JBNkJVO0FBcURiO0VBRFAsU0FBUyxXQUFXLEVBQUUsc0JBQXNCLEtBQUssQ0FBQztHQWpGeEMsb0JBa0ZIO0FBbEZHLHNCQUFOO0VBRE4sY0FBYyx1QkFBdUI7R0FDekI7IiwKICAibmFtZXMiOiBbInN0eWxlcyIsICJzdHlsZXMiXQp9Cg==
