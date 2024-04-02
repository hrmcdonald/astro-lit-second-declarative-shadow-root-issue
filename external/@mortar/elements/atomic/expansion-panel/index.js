import "../../chunks/chunk.EEB6DSBT.js";
import {
  MteText,
  styles as styles3
} from "../../chunks/chunk.JVVZWO6D.js";
import {
  styles as styles2
} from "../../chunks/chunk.D6N6Z2UH.js";
import "../../chunks/chunk.D4QL7DP6.js";
import {
  MteIconRegistryService,
  mtrIconChevronDown
} from "../../chunks/chunk.M5RJHYFW.js";
import {
  ButtonMixin,
  MteElement,
  RadiusMixin,
  StylePartsMixin,
  __decorateClass,
  config,
  defineElement,
  eventEmitter,
  styles7 as styles
} from "../../chunks/chunk.KVXAK6W4.js";

// src/atomic/expansion-panel/expansion-panel.element.ts
import { html } from "lit";
import { property, queryAssignedElements } from "lit/decorators.js";

// src/atomic/expansion-panel/expansion-panel.styles.ts
import { css } from "lit";
var styles4 = css`:host{--border-color:var(--mte-border-2);--content-padding-y:var(--mte-space-md);--content-padding-x:calc(var(--mte-space-md) + var(--mte-space-xs));--transform-icon:rotate(0deg);border:0;border-top:1px solid var(--border-color);display:block}:host([opened]){--transform-icon:rotate(-180deg)}:host ::slotted([slot=header]){display:flex;justify-content:space-between}:host([withoutAnimation]) ::slotted([slot=header]){--transition-time:0}:host([alignIcon=start]) ::slotted([slot=header]){flex-direction:row-reverse;gap:12px;justify-content:flex-end}.panel-content{padding:var(--content-padding-y) var(--content-padding-x)}:host(:last-of-type){border-bottom:1px solid var(--border-color)}:host([withoutBorder]){--border-color:transparent}`;

// src/atomic/expansion-panel/expansion-panel.element.ts
var MteExpansionPanel = class extends StylePartsMixin(
  MteElement
) {
  constructor() {
    super(...arguments);
    this.opened = false;
    this.withoutAnimation = false;
    this.withoutBorder = false;
    this.alignIcon = "end";
    this.animationDuration = config.animation.transitionDurationJs.short * 1e3;
  }
  firstUpdated() {
    if (this.header && this.header.length > 0) {
      this.opened ? this.header[0].ariaExpanded = "true" : this.header[0].ariaExpanded = "false";
    }
  }
  handleClick(event) {
    if (this.header && this.header.length > 0) {
      this.opened = !this.opened;
      if (this.opened) {
        this.header[0].open();
      } else {
        this.header[0].close();
      }
    }
  }
  render() {
    return html`${this.instanceStyles}<slot name="header" @click="${this.handleClick}"></slot><mte-collapse ?opened="${this.opened}" ?withoutAnimation="${this.withoutAnimation}" animationDuration="${this.animationDuration}"><div class="panel-content" part="panelContent"><slot></slot></div></mte-collapse>`;
  }
};
MteExpansionPanel.styles = [styles, styles4];
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteExpansionPanel.prototype, "opened", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteExpansionPanel.prototype, "withoutAnimation", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteExpansionPanel.prototype, "withoutBorder", 2);
__decorateClass([
  property({ reflect: true })
], MteExpansionPanel.prototype, "alignIcon", 2);
__decorateClass([
  property({ type: Number })
], MteExpansionPanel.prototype, "animationDuration", 2);
__decorateClass([
  queryAssignedElements({ slot: "header", selector: "mte-expansion-header" })
], MteExpansionPanel.prototype, "header", 2);
MteExpansionPanel = __decorateClass([
  defineElement("mte-expansion-panel")
], MteExpansionPanel);

// src/atomic/expansion-panel/expansion-header.element.ts
import { html as html2 } from "lit";
import { property as property2 } from "lit/decorators.js";

// src/atomic/expansion-panel/expansion-header.styles.ts
import { css as css2 } from "lit";
var styles5 = css2`:host{--transition-time:200ms;--border-radius:var(--mte-border-radius-md);--font-weight:var(--mte-font-weight-medium);--padding-y:calc(var(--mte-space-sm) + var(--mte-space-xs));border-radius:var(--border-radius);font-weight:var(--font-weight);padding-bottom:var(--padding-y);padding-top:var(--padding-y);position:relative}:host(:focus-visible:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);bottom:-2px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-2px;pointer-events:none;position:absolute;right:-2px;top:-2px;z-index:9}:host mte-icon{transform:var(--transform-icon);transition:transform var(--transition-time) linear}.label-container{align-items:center;display:flex;justify-content:start;width:100%}:host([disabled]){color:var(--mte-disabled-3)}:host([radius=md]){--border-radius:var(--mte-border-radius-lg)}:host([radius=lg]){--border-radius:var(--mte-border-radius-xl)}`;

// src/atomic/expansion-panel/expansion-header.element.ts
MteIconRegistryService.registerIcons([mtrIconChevronDown]);
var MteExpansionHeader = class extends RadiusMixin(ButtonMixin(MteText)) {
  constructor() {
    super(...arguments);
    this.slot = "header";
  }
  open() {
    this.ariaExpanded = "true";
    this._onOpen.emit(null, { bubbles: false });
  }
  close() {
    this.ariaExpanded = "false";
    this._onClose.emit(null, { bubbles: false });
  }
  render() {
    return this.renderButtonTemplate(html2`<div class="label-container" part="label"><slot></slot></div><mte-icon size="20" name="chevron-down"></mte-icon>`);
  }
};
MteExpansionHeader.styles = [styles, styles2, styles3, styles5];
__decorateClass([
  property2({ reflect: true })
], MteExpansionHeader.prototype, "slot", 2);
__decorateClass([
  eventEmitter()
], MteExpansionHeader.prototype, "_onOpen", 2);
__decorateClass([
  eventEmitter()
], MteExpansionHeader.prototype, "_onClose", 2);
MteExpansionHeader = __decorateClass([
  defineElement("mte-expansion-header")
], MteExpansionHeader);
export {
  MteExpansionHeader,
  MteExpansionPanel
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9leHBhbnNpb24tcGFuZWwiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9leHBhbnNpb24tcGFuZWwvZXhwYW5zaW9uLXBhbmVsLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2V4cGFuc2lvbi1wYW5lbCIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2V4cGFuc2lvbi1wYW5lbC9leHBhbnNpb24taGVhZGVyLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMik7LS1jb250ZW50LXBhZGRpbmcteTp2YXIoLS1tdGUtc3BhY2UtbWQpOy0tY29udGVudC1wYWRkaW5nLXg6Y2FsYyh2YXIoLS1tdGUtc3BhY2UtbWQpICsgdmFyKC0tbXRlLXNwYWNlLXhzKSk7LS10cmFuc2Zvcm0taWNvbjpyb3RhdGUoMGRlZyk7Ym9yZGVyOjA7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtkaXNwbGF5OmJsb2NrfTpob3N0KFtvcGVuZWRdKXstLXRyYW5zZm9ybS1pY29uOnJvdGF0ZSgtMTgwZGVnKX06aG9zdCA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSl7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufTpob3N0KFt3aXRob3V0QW5pbWF0aW9uXSkgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pey0tdHJhbnNpdGlvbi10aW1lOjB9Omhvc3QoW2FsaWduSWNvbj1zdGFydF0pIDo6c2xvdHRlZChbc2xvdD1oZWFkZXJdKXtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTtnYXA6MTJweDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LnBhbmVsLWNvbnRlbnR7cGFkZGluZzp2YXIoLS1jb250ZW50LXBhZGRpbmcteSkgdmFyKC0tY29udGVudC1wYWRkaW5nLXgpfTpob3N0KDpsYXN0LW9mLXR5cGUpe2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcil9Omhvc3QoW3dpdGhvdXRCb3JkZXJdKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudH1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS10cmFuc2l0aW9uLXRpbWU6MjAwbXM7LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLW1kKTstLWZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXdlaWdodC1tZWRpdW0pOy0tcGFkZGluZy15OmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Zm9udC13ZWlnaHQ6dmFyKC0tZm9udC13ZWlnaHQpO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmcteSk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy15KTtwb3NpdGlvbjpyZWxhdGl2ZX06aG9zdCg6Zm9jdXMtdmlzaWJsZTpub3QoLmRpc2FibGVkKTpub3QoW2Rpc2FibGVkXSk6bm90KDpkaXNhYmxlZCkpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvdHRvbTotMnB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDotMnB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTJweDt0b3A6LTJweDt6LWluZGV4Ojl9Omhvc3QgbXRlLWljb257dHJhbnNmb3JtOnZhcigtLXRyYW5zZm9ybS1pY29uKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uLXRpbWUpIGxpbmVhcn0ubGFiZWwtY29udGFpbmVye2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnN0YXJ0O3dpZHRoOjEwMCV9Omhvc3QoW2Rpc2FibGVkXSl7Y29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTMpfTpob3N0KFtyYWRpdXM9bWRdKXstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbGcpfTpob3N0KFtyYWRpdXM9bGddKXstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteGwpfWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLFlBQVk7QUFDckIsU0FBUyxVQUFpQiw2QkFBNkI7OztBQ0R2RCxTQUFTLFdBQVc7QUFBYSxJQUFNQSxVQUFTOzs7QUQ2QnpDLElBQU0sb0JBQU4sY0FBZ0M7RUFDckM7QUFDRixFQUFFO0VBRks7O0FBTXVDLGtCQUFTO0FBR1QsNEJBQW1CO0FBR25CLHlCQUFnQjtBQUcvQixxQkFBNkI7QUFHOUIsNkJBQzFCLE9BQU8sVUFBVSxxQkFBcUIsUUFBUTs7RUFLdEMsZUFBZTtBQUN2QixRQUFJLEtBQUssVUFBVSxLQUFLLE9BQU8sU0FBUyxHQUFHO0FBQ3pDLFdBQUssU0FDQSxLQUFLLE9BQU8sQ0FBQyxFQUFFLGVBQWUsU0FDOUIsS0FBSyxPQUFPLENBQUMsRUFBRSxlQUFlO0lBQ3JDO0VBQ0Y7RUFFQSxZQUFZLE9BQW1CO0FBQzdCLFFBQUksS0FBSyxVQUFVLEtBQUssT0FBTyxTQUFTLEdBQUc7QUFDekMsV0FBSyxTQUFTLENBQUMsS0FBSztBQUNwQixVQUFJLEtBQUssUUFBUTtBQUNmLGFBQUssT0FBTyxDQUFDLEVBQUUsS0FBSztNQUN0QixPQUFPO0FBQ0wsYUFBSyxPQUFPLENBQUMsRUFBRSxNQUFNO01BQ3ZCO0lBQ0Y7RUFDRjtFQUVBLFNBQVM7QUFDUCxXQUFPLE9BQU8sS0FBSyxjQUFjLCtCQUNGLEtBQUssV0FBVyxtQ0FFakMsS0FBSyxNQUFNLHdCQUNELEtBQUssZ0JBQWdCLHdCQUNyQixLQUFLLGlCQUFpQjtFQUtoRDtBQUNGO0FBdkRhLGtCQUdKLFNBQVMsQ0FBQyxRQUFZQyxPQUFNO0FBR1M7RUFBM0MsU0FBUyxFQUFFLFNBQVMsTUFBTSxNQUFNLFFBQVEsQ0FBQztHQU4vQixrQkFNaUM7QUFHQTtFQUEzQyxTQUFTLEVBQUUsTUFBTSxTQUFTLFNBQVMsS0FBSyxDQUFDO0dBVC9CLGtCQVNpQztBQUdBO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FaL0Isa0JBWWlDO0FBR2Y7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBZmhCLGtCQWVrQjtBQUdEO0VBQTNCLFNBQVMsRUFBRSxNQUFNLE9BQU8sQ0FBQztHQWxCZixrQkFrQmlCO0FBSTVCO0VBREMsc0JBQXNCLEVBQUUsTUFBTSxVQUFVLFVBQVUsdUJBQXVCLENBQUM7R0FyQmhFLGtCQXNCWDtBQXRCVyxvQkFBTjtFQUROLGNBQWMscUJBQXFCO0dBQ3ZCOzs7QUU3QmIsU0FBUyxRQUFBQyxhQUFZO0FBQ3JCLFNBQVMsWUFBQUMsaUJBQWdCOzs7QUNEekIsU0FBUyxPQUFBQyxZQUFXO0FBQWEsSUFBTUMsVUFBU0Q7OztBRGtCaEQsdUJBQXVCLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztBQVVsRCxJQUFNLHFCQUFOLGNBQWlDLFlBQVksWUFBWSxPQUFPLENBQUMsRUFBRTtFQUFuRTs7QUFHd0IsZ0JBQU87O0VBUTdCLE9BQU87QUFDWixTQUFLLGVBQWU7QUFDcEIsU0FBSyxRQUFRLEtBQUssTUFBTSxFQUFFLFNBQVMsTUFBTSxDQUFDO0VBQzVDO0VBRU8sUUFBUTtBQUNiLFNBQUssZUFBZTtBQUNwQixTQUFLLFNBQVMsS0FBSyxNQUFNLEVBQUUsU0FBUyxNQUFNLENBQUM7RUFDN0M7RUFFQSxTQUFTO0FBQ1AsV0FBTyxLQUFLLHFCQUFxQkUsdUhBS2hDO0VBQ0g7QUFDRjtBQTdCYSxtQkFDSixTQUFTLENBQUMsUUFBWUMsU0FBY0EsU0FBWUEsT0FBTTtBQUVoQztFQUE1QkMsVUFBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBSGhCLG1CQUdrQjtBQUdiO0VBQWYsYUFBYTtHQU5ILG1CQU1LO0FBR0E7RUFBZixhQUFhO0dBVEgsbUJBU0s7QUFUTCxxQkFBTjtFQUROLGNBQWMsc0JBQXNCO0dBQ3hCOyIsCiAgIm5hbWVzIjogWyJzdHlsZXMiLCAic3R5bGVzIiwgImh0bWwiLCAicHJvcGVydHkiLCAiY3NzIiwgInN0eWxlcyIsICJodG1sIiwgInN0eWxlcyIsICJwcm9wZXJ0eSJdCn0K
