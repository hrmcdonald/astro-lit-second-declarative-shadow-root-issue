import "../../chunks/chunk.GB4WLDXK.js";
import "../../chunks/chunk.PRVGPCT6.js";
import "../../chunks/chunk.JVVZWO6D.js";
import "../../chunks/chunk.OHVMOSF2.js";
import "../../chunks/chunk.TOU6J7OT.js";
import "../../chunks/chunk.Q54LTJXP.js";
import "../../chunks/chunk.D6N6Z2UH.js";
import "../../chunks/chunk.IVHA27EF.js";
import "../../chunks/chunk.SRHT6JKE.js";
import "../../chunks/chunk.DVRGAMYN.js";
import "../../chunks/chunk.D4QL7DP6.js";
import "../../chunks/chunk.M5RJHYFW.js";
import {
  ButtonMixin,
  InverseMixin,
  MteContentBase,
  PresetMixinFactory,
  RadiusMixin,
  __decorateClass,
  defineElement,
  presetProperty,
  styles2 as styles,
  styles3 as styles2,
  styles7 as styles3
} from "../../chunks/chunk.KVXAK6W4.js";

// src/atomic/card/card.element.ts
import { html } from "lit";
import { property } from "lit/decorators.js";

// src/atomic/card/card.styles.ts
import { css } from "lit";
var styles4 = css`:host{--padding:var(--mte-space-md);--interactive-hover-bg:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));--interactive-active-bg:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a));--color:var(--mte-ink-1);--background:var(--mte-surface-2);--border-color:var(--mte-border-1);--border-radius:var(--mte-border-radius-xl);--border-width:1px;--box-shadow:0px 3px 6px rgba(var(--mte-elevation-base-rgb),var(--mte-elevation-opacity-1));--selected-border-color:var(--mte-focus);--selected-background-color:var(--mte-focus-lighter);align-items:stretch;background:var(--background);border:solid var(--border-width) var(--border-color);border-radius:var(--border-radius);box-shadow:var(--box-shadow);box-sizing:border-box;color:var(--color);display:flex;flex-direction:column;padding:var(--padding);position:relative;transform:translateZ(22px)}:host([withoutShadow]){--box-shadow:none}:host([withShadow]){--box-shadow:0px 3px 6px rgba(var(--mte-elevation-base-rgb),var(--mte-elevation-opacity-1))}:host([withoutBorder]){--border-color:transparent}:host([selectable]:hover){cursor:pointer}:host([selectable]:not([inverse]):hover):before{background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a))!important;border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0}:host([selectable]:not([inverse]):active):before{background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a))!important;border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0}:host([selected]){--border-color:var(--selected-border-color)}:host([selected]:not([inverse])){--background:var(--selected-background-color)}:host([hideOverflow]){overflow:hidden}:host([radius=sm]){--border-radius:var(--mte-border-radius-md)}:host([radius=md]){--border-radius:var(--mte-border-radius-lg)}:host([selectable][inverse]:hover):before{background:rgba(var(--mte-ink-inverse-rgb),var(--mte-opacity-xs));border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0}:host([selectable][inverse]:active):before{background:rgba(var(--mte-ink-inverse-rgb),var(--mte-opacity-sm));border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0}:host ::slotted(mte-content),:host ::slotted(mte-footer),:host ::slotted(mte-header){--composition-padding-y:var(--padding);--composition-padding-x:var(--padding)}:host ::slotted(:where(mte-header,mte-section):first-child){border-top-left-radius:calc(var(--border-radius) - 1px);border-top-right-radius:calc(var(--border-radius) - 1px);margin-top:calc(var(--padding)*-1);overflow:hidden}:host ::slotted(:where(mte-header,mte-content,mte-footer,mte-section)){margin-left:calc(var(--padding)*-1);margin-right:calc(var(--padding)*-1)}:host ::slotted(:where(mte-footer,mte-section):last-child){border-bottom-left-radius:calc(var(--border-radius) - 1px);border-bottom-right-radius:calc(var(--border-radius) - 1px);margin-bottom:calc(var(--padding)*-1);overflow:hidden}`;

// src/atomic/card/card.element.ts
var MteCard = class extends InverseMixin(
  RadiusMixin(PresetMixinFactory("MteCard")(MteContentBase))
) {
  constructor() {
    super(...arguments);
    this.withShadow = false;
    this.withoutShadow = false;
    this.hideOverflow = false;
    this.selected = false;
    this.selectable = false;
    this.withoutBorder = false;
  }
  render() {
    return html`${this.instanceStyles}<slot></slot>`;
  }
};
MteCard.styles = [styles3, styles, styles4];
__decorateClass([
  presetProperty({ type: Boolean, reflect: true })
], MteCard.prototype, "withShadow", 2);
__decorateClass([
  presetProperty({ type: Boolean, reflect: true })
], MteCard.prototype, "withoutShadow", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteCard.prototype, "hideOverflow", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteCard.prototype, "selected", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteCard.prototype, "selectable", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteCard.prototype, "withoutBorder", 2);
MteCard = __decorateClass([
  defineElement("mte-card")
], MteCard);

// src/atomic/card/card-button.element.ts
import { html as html2 } from "lit";
import { property as property2 } from "lit/decorators.js";

// src/atomic/card/card-button.styles.ts
import { css as css2 } from "lit";
var styles5 = css2`:host{--button-overlay-color:transparent;cursor:pointer;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;position:relative;text-decoration:inherit;text-transform:inherit}:host(:hover){cursor:pointer}:host([disabled]){cursor:not-allowed!important}:host(:focus:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top-left-radius:inherit;border-top-right-radius:inherit;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;inset:-1px;pointer-events:none;position:absolute;z-index:9}:host(:hover:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top-left-radius:inherit;border-top-right-radius:inherit;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;inset:-1px;pointer-events:none;position:absolute;z-index:9}:host:before{background:var(--button-overlay-color);border-radius:var(--border-radius);content:"";display:block;inset:0;pointer-events:none;position:absolute;z-index:9}:host([activestate]:not([disabled])):before{--button-overlay-color:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-opacity-xxxs))}:host([inverse][activestate]:not([disabled])):before{--button-overlay-color:rgba(var(--mte-it-surface-inverse-active-rgb),var(--mte-opacity-xxs))}`;

// src/atomic/card/card-button.element.ts
var MteCardButton = class extends InverseMixin(
  RadiusMixin(PresetMixinFactory("MteCardButton")(ButtonMixin(MteContentBase)))
) {
  constructor() {
    super(...arguments);
    this.withShadow = false;
    this.withoutShadow = false;
    this.hideOverflow = false;
    this.withoutHover = false;
    this.selected = false;
  }
  render() {
    return this.renderButtonTemplate(html2`<slot></slot>`);
  }
};
MteCardButton.styles = [styles3, styles, styles2, styles4, styles5];
__decorateClass([
  presetProperty({ type: Boolean, reflect: true })
], MteCardButton.prototype, "withShadow", 2);
__decorateClass([
  presetProperty({ type: Boolean, reflect: true })
], MteCardButton.prototype, "withoutShadow", 2);
__decorateClass([
  property2({ type: Boolean, reflect: true })
], MteCardButton.prototype, "hideOverflow", 2);
__decorateClass([
  presetProperty({ type: Boolean, reflect: true })
], MteCardButton.prototype, "withoutHover", 2);
__decorateClass([
  property2({ type: Boolean, reflect: true })
], MteCardButton.prototype, "selected", 2);
MteCardButton = __decorateClass([
  defineElement("mte-card-button")
], MteCardButton);
export {
  MteCard,
  MteCardButton
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jYXJkL2NhcmQuZWxlbWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2NhcmQvY2FyZC5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jYXJkL2NhcmQtYnV0dG9uLmVsZW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jYXJkL2NhcmQtYnV0dG9uLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIE10ZUNvbnRlbnRCYXNlLFxuICBQcmVzZXRNaXhpbkZhY3RvcnksXG4gIEludmVyc2VNaXhpbixcbiAgUmFkaXVzTWl4aW4sXG4gIGJhc2VTdHlsZXMsXG4gIGRlZmluZUVsZW1lbnQsXG4gIHByZXNldFByb3BlcnR5LFxuICBpbnZlcnNlU3R5bGVzLFxufSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vY2FyZC5zdHlsZXMnO1xuaW1wb3J0IHsgQ2FyZFByZXNldCB9IGZyb20gJy4vY2FyZC5wcmVzZXRzJztcbmltcG9ydCAnLi4vY29tcG9zaXRpb24nO1xuXG4vKipcbiAqIEBkZXBlbmRlbmN5IG10ZS1jb21wb3NpdGlvblxuICpcbiAqIEBzbG90IC0gRGVmYXVsdCBzbG90dGVkIGNvbnRlbnRcbiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS1jYXJkJylcbmV4cG9ydCBjbGFzcyBNdGVDYXJkIGV4dGVuZHMgSW52ZXJzZU1peGluKFxuICBSYWRpdXNNaXhpbihQcmVzZXRNaXhpbkZhY3Rvcnk8Q2FyZFByZXNldD4oJ010ZUNhcmQnKShNdGVDb250ZW50QmFzZSkpXG4pIHtcbiAgc3RhdGljIHN0eWxlcyA9IFtiYXNlU3R5bGVzLCBpbnZlcnNlU3R5bGVzLCBzdHlsZXNdO1xuXG4gIC8qKiBSZW5kZXJzIGEgZHJvcCBzaGFkb3cgZm9yIHByZXNldHMgd2l0aCBzaGFkb3dzIGRpc2FibGVkIGJ5IGRlZmF1bHQuIENhcmRzIHdpdGhpbiBjYXJkcyBjYW5ub3QgZGlzcGxheSBzaGFkb3dzIGV2ZW4gaWYgdGhpcyBhdHRyaWJ1dGUgaXMgcHJlc2VudC4gKi9cbiAgQHByZXNldFByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRoU2hhZG93ID0gZmFsc2U7XG5cbiAgLyoqIFByZXZlbnRzIGRyb3Agc2hhZG93IHJlbmRlcmluZyBmb3IgcHJlc2V0cyB3aXRoIHNoYWRvd3MgZW5hYmxlZCBieSBkZWZhdWx0LiBDYXJkcyB3aXRoaW4gY2FyZHMgY2Fubm90IGRpc3BsYXkgc2hhZG93cyBldmVuIGlmIHRoaXMgYXR0cmlidXRlIGlzIHByZXNlbnQuICovXG4gIEBwcmVzZXRQcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgd2l0aG91dFNoYWRvdyA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGNhcmQgc2hvdWxkIGhpZGUgb3ZlcmZsb3cgY29udGVudCAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGhpZGVPdmVyZmxvdyA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGNhcmQgc2hvdWxkIGJlIG1hcmtlZCBhcyBzZWxlY3RlZCAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHNlbGVjdGVkID0gZmFsc2U7XG5cbiAgLyoqIEFkZHMgaG92ZXIvYWN0aXZlIHN0eWxpbmcuIFByZWZlciB1c2luZyBhbiBtdGUtY2FyZC1idXR0b24gd2hlbiB1c2VyIGludGVyYWN0aW9uIGlzIG5lZWQuIFRoaXMgY2FuIGJlIHVzZWZ1bCBpbnRlcm5hbCB0byBvdGhlciBjb250cm9scyAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHNlbGVjdGFibGUgPSBmYWxzZTtcblxuICAvKiogUmVtb3ZlcyB0aGUgY2FyZCBib3JkZXIgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRob3V0Qm9yZGVyID0gZmFsc2U7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYCR7dGhpcy5pbnN0YW5jZVN0eWxlc308c2xvdD48L3Nsb3Q+YDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdtdGUtY2FyZCc6IE10ZUNhcmQ7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1wYWRkaW5nOnZhcigtLW10ZS1zcGFjZS1tZCk7LS1pbnRlcmFjdGl2ZS1ob3Zlci1iZzpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWEpKTstLWludGVyYWN0aXZlLWFjdGl2ZS1iZzpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYSkpOy0tY29sb3I6dmFyKC0tbXRlLWluay0xKTstLWJhY2tncm91bmQ6dmFyKC0tbXRlLXN1cmZhY2UtMik7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0xKTstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteGwpOy0tYm9yZGVyLXdpZHRoOjFweDstLWJveC1zaGFkb3c6MHB4IDNweCA2cHggcmdiYSh2YXIoLS1tdGUtZWxldmF0aW9uLWJhc2UtcmdiKSx2YXIoLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktMSkpOy0tc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1mb2N1cyk7LS1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW10ZS1mb2N1cy1saWdodGVyKTthbGlnbi1pdGVtczpzdHJldGNoO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Ym9yZGVyOnNvbGlkIHZhcigtLWJvcmRlci13aWR0aCkgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7Ym94LXNpemluZzpib3JkZXItYm94O2NvbG9yOnZhcigtLWNvbG9yKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6dmFyKC0tcGFkZGluZyk7cG9zaXRpb246cmVsYXRpdmU7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMjJweCl9Omhvc3QoW3dpdGhvdXRTaGFkb3ddKXstLWJveC1zaGFkb3c6bm9uZX06aG9zdChbd2l0aFNoYWRvd10pey0tYm94LXNoYWRvdzowcHggM3B4IDZweCByZ2JhKHZhcigtLW10ZS1lbGV2YXRpb24tYmFzZS1yZ2IpLHZhcigtLW10ZS1lbGV2YXRpb24tb3BhY2l0eS0xKSl9Omhvc3QoW3dpdGhvdXRCb3JkZXJdKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudH06aG9zdChbc2VsZWN0YWJsZV06aG92ZXIpe2N1cnNvcjpwb2ludGVyfTpob3N0KFtzZWxlY3RhYmxlXTpub3QoW2ludmVyc2VdKTpob3Zlcik6YmVmb3Jle2JhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hKSkhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6aW5oZXJpdDtib3R0b206MDtjb250ZW50OlwiXCI7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjB9Omhvc3QoW3NlbGVjdGFibGVdOm5vdChbaW52ZXJzZV0pOmFjdGl2ZSk6YmVmb3Jle2JhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWEpKSFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czppbmhlcml0O2JvdHRvbTowO2NvbnRlbnQ6XCJcIjtsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MH06aG9zdChbc2VsZWN0ZWRdKXstLWJvcmRlci1jb2xvcjp2YXIoLS1zZWxlY3RlZC1ib3JkZXItY29sb3IpfTpob3N0KFtzZWxlY3RlZF06bm90KFtpbnZlcnNlXSkpey0tYmFja2dyb3VuZDp2YXIoLS1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yKX06aG9zdChbaGlkZU92ZXJmbG93XSl7b3ZlcmZsb3c6aGlkZGVufTpob3N0KFtyYWRpdXM9c21dKXstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpfTpob3N0KFtyYWRpdXM9bWRdKXstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbGcpfTpob3N0KFtzZWxlY3RhYmxlXVtpbnZlcnNlXTpob3Zlcik6YmVmb3Jle2JhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaW5rLWludmVyc2UtcmdiKSx2YXIoLS1tdGUtb3BhY2l0eS14cykpO2JvcmRlci1yYWRpdXM6aW5oZXJpdDtib3R0b206MDtjb250ZW50OlwiXCI7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjB9Omhvc3QoW3NlbGVjdGFibGVdW2ludmVyc2VdOmFjdGl2ZSk6YmVmb3Jle2JhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaW5rLWludmVyc2UtcmdiKSx2YXIoLS1tdGUtb3BhY2l0eS1zbSkpO2JvcmRlci1yYWRpdXM6aW5oZXJpdDtib3R0b206MDtjb250ZW50OlwiXCI7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjB9Omhvc3QgOjpzbG90dGVkKG10ZS1jb250ZW50KSw6aG9zdCA6OnNsb3R0ZWQobXRlLWZvb3RlciksOmhvc3QgOjpzbG90dGVkKG10ZS1oZWFkZXIpey0tY29tcG9zaXRpb24tcGFkZGluZy15OnZhcigtLXBhZGRpbmcpOy0tY29tcG9zaXRpb24tcGFkZGluZy14OnZhcigtLXBhZGRpbmcpfTpob3N0IDo6c2xvdHRlZCg6d2hlcmUobXRlLWhlYWRlcixtdGUtc2VjdGlvbik6Zmlyc3QtY2hpbGQpe2JvcmRlci10b3AtbGVmdC1yYWRpdXM6Y2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAtIDFweCk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6Y2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAtIDFweCk7bWFyZ2luLXRvcDpjYWxjKHZhcigtLXBhZGRpbmcpKi0xKTtvdmVyZmxvdzpoaWRkZW59Omhvc3QgOjpzbG90dGVkKDp3aGVyZShtdGUtaGVhZGVyLG10ZS1jb250ZW50LG10ZS1mb290ZXIsbXRlLXNlY3Rpb24pKXttYXJnaW4tbGVmdDpjYWxjKHZhcigtLXBhZGRpbmcpKi0xKTttYXJnaW4tcmlnaHQ6Y2FsYyh2YXIoLS1wYWRkaW5nKSotMSl9Omhvc3QgOjpzbG90dGVkKDp3aGVyZShtdGUtZm9vdGVyLG10ZS1zZWN0aW9uKTpsYXN0LWNoaWxkKXtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOmNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgLSAxcHgpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOmNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgLSAxcHgpO21hcmdpbi1ib3R0b206Y2FsYyh2YXIoLS1wYWRkaW5nKSotMSk7b3ZlcmZsb3c6aGlkZGVufWA7IiwgImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBQcmVzZXRNaXhpbkZhY3RvcnksXG4gIFJhZGl1c01peGluLFxuICBJbnZlcnNlTWl4aW4sXG4gIEJ1dHRvbk1peGluLFxuICBwcmVzZXRQcm9wZXJ0eSxcbiAgTXRlQ29udGVudEJhc2UsXG4gIGRlZmluZUVsZW1lbnQsXG4gIGJhc2VTdHlsZXMsXG4gIGJ1dHRvblN0eWxlcyxcbiAgaW52ZXJzZVN0eWxlcyxcbn0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBzdHlsZXMgYXMgY2FyZFN0eWxlcyB9IGZyb20gJy4vY2FyZC5zdHlsZXMnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9jYXJkLWJ1dHRvbi5zdHlsZXMnO1xuaW1wb3J0IHsgQ2FyZEJ1dHRvblByZXNldCB9IGZyb20gJy4vY2FyZC5wcmVzZXRzJztcblxuLyoqXG4gKiBAc2xvdCAtIERlZmF1bHQgc2xvdHRlZCBjb250ZW50XG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtY2FyZC1idXR0b24nKVxuZXhwb3J0IGNsYXNzIE10ZUNhcmRCdXR0b24gZXh0ZW5kcyBJbnZlcnNlTWl4aW4oXG4gIFJhZGl1c01peGluKFByZXNldE1peGluRmFjdG9yeTxDYXJkQnV0dG9uUHJlc2V0PignTXRlQ2FyZEJ1dHRvbicpKEJ1dHRvbk1peGluKE10ZUNvbnRlbnRCYXNlKSkpXG4pIHtcbiAgc3RhdGljIHN0eWxlcyA9IFtiYXNlU3R5bGVzLCBpbnZlcnNlU3R5bGVzLCBidXR0b25TdHlsZXMsIGNhcmRTdHlsZXMsIHN0eWxlc107XG5cbiAgLyoqIFJlbmRlcnMgYSBkcm9wIHNoYWRvdyBmb3IgcHJlc2V0cyB3aXRoIHNoYWRvd3MgZGlzYWJsZWQgYnkgZGVmYXVsdC4gQ2FyZHMgd2l0aGluIGNhcmRzIGNhbm5vdCBkaXNwbGF5IHNoYWRvd3MgZXZlbiBpZiB0aGlzIGF0dHJpYnV0ZSBpcyBwcmVzZW50LiAqL1xuICBAcHJlc2V0UHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHdpdGhTaGFkb3cgPSBmYWxzZTtcblxuICAvKiogUHJldmVudHMgZHJvcCBzaGFkb3cgcmVuZGVyaW5nIGZvciBwcmVzZXRzIHdpdGggc2hhZG93cyBlbmFibGVkIGJ5IGRlZmF1bHQuIENhcmRzIHdpdGhpbiBjYXJkcyBjYW5ub3QgZGlzcGxheSBzaGFkb3dzIGV2ZW4gaWYgdGhpcyBhdHRyaWJ1dGUgaXMgcHJlc2VudC4gKi9cbiAgQHByZXNldFByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRob3V0U2hhZG93ID0gZmFsc2U7XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgY2FyZCBzaG91bGQgaGlkZSBvdmVyZmxvdyBjb250ZW50ICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgaGlkZU92ZXJmbG93ID0gZmFsc2U7XG5cbiAgLyoqIFByZXZlbnRzIGhvdmVyIHN0eWxpbmcgZWZmZWN0ICovXG4gIEBwcmVzZXRQcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgd2l0aG91dEhvdmVyID0gZmFsc2U7XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgY2FyZCBzaG91bGQgYmUgbWFya2VkIGFzIHNlbGVjdGVkICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgc2VsZWN0ZWQgPSBmYWxzZTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyQnV0dG9uVGVtcGxhdGUoaHRtbGA8c2xvdD48L3Nsb3Q+YCk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLWNhcmQtYnV0dG9uJzogTXRlQ2FyZEJ1dHRvbjtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWJ1dHRvbi1vdmVybGF5LWNvbG9yOnRyYW5zcGFyZW50O2N1cnNvcjpwb2ludGVyO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsaW5lLWhlaWdodDppbmhlcml0O3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXR9Omhvc3QoOmhvdmVyKXtjdXJzb3I6cG9pbnRlcn06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6bm90LWFsbG93ZWQhaW1wb3J0YW50fTpob3N0KDpmb2N1czpub3QoLmRpc2FibGVkKTpub3QoW2Rpc2FibGVkXSk6bm90KDpkaXNhYmxlZCkpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czppbmhlcml0O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOmluaGVyaXQ7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czppbmhlcml0O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOmluaGVyaXQ7Ym94LXNoYWRvdzowIDAgMCAxcHggdmFyKC0tbXRlLWxpZ2h0KTtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jaztpbnNldDotMXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo5fTpob3N0KDpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoW2Rpc2FibGVkXSk6bm90KDpkaXNhYmxlZCkpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czppbmhlcml0O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOmluaGVyaXQ7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czppbmhlcml0O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOmluaGVyaXQ7Ym94LXNoYWRvdzowIDAgMCAxcHggdmFyKC0tbXRlLWxpZ2h0KTtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jaztpbnNldDotMXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo5fTpob3N0OmJlZm9yZXtiYWNrZ3JvdW5kOnZhcigtLWJ1dHRvbi1vdmVybGF5LWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO2luc2V0OjA7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Ojl9Omhvc3QoW2FjdGl2ZXN0YXRlXTpub3QoW2Rpc2FibGVkXSkpOmJlZm9yZXstLWJ1dHRvbi1vdmVybGF5LWNvbG9yOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtcmdiKSx2YXIoLS1tdGUtb3BhY2l0eS14eHhzKSl9Omhvc3QoW2ludmVyc2VdW2FjdGl2ZXN0YXRlXTpub3QoW2Rpc2FibGVkXSkpOmJlZm9yZXstLWJ1dHRvbi1vdmVybGF5LWNvbG9yOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtcmdiKSx2YXIoLS1tdGUtb3BhY2l0eS14eHMpKX1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsWUFBWTtBQUNyQixTQUFTLGdCQUFnQjs7O0FDRHpCLFNBQVMsV0FBVztBQUFhLElBQU1BLFVBQVM7OztBRHNCekMsSUFBTSxVQUFOLGNBQXNCO0FBQUEsRUFDM0IsWUFBWSxtQkFBK0IsU0FBUyxFQUFFLGNBQWMsQ0FBQztBQUN2RSxFQUFFO0FBQUEsRUFGSztBQUFBO0FBTTZDLHNCQUFhO0FBR2IseUJBQWdCO0FBR3RCLHdCQUFlO0FBR2Ysb0JBQVc7QUFHWCxzQkFBYTtBQUdiLHlCQUFnQjtBQUFBO0FBQUEsRUFFNUQsU0FBUztBQUNQLFdBQU8sT0FBTyxLQUFLLGNBQWM7QUFBQSxFQUNuQztBQUNGO0FBMUJhLFFBR0osU0FBUyxDQUFDQyxTQUFZLFFBQWVBLE9BQU07QUFHQTtBQUFBLEVBQWpELGVBQWUsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7QUFBQSxHQU5yQyxRQU11QztBQUdBO0FBQUEsRUFBakQsZUFBZSxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztBQUFBLEdBVHJDLFFBU3VDO0FBR047QUFBQSxFQUEzQyxTQUFTLEVBQUUsTUFBTSxTQUFTLFNBQVMsS0FBSyxDQUFDO0FBQUEsR0FaL0IsUUFZaUM7QUFHQTtBQUFBLEVBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7QUFBQSxHQWYvQixRQWVpQztBQUdBO0FBQUEsRUFBM0MsU0FBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztBQUFBLEdBbEIvQixRQWtCaUM7QUFHQTtBQUFBLEVBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7QUFBQSxHQXJCL0IsUUFxQmlDO0FBckJqQyxVQUFOO0FBQUEsRUFETixjQUFjLFVBQVU7QUFBQSxHQUNaOzs7QUV0QmIsU0FBUyxRQUFBQyxhQUFZO0FBQ3JCLFNBQVMsWUFBQUMsaUJBQWdCOzs7QUNEekIsU0FBUyxPQUFBQyxZQUFXO0FBQWEsSUFBTUMsVUFBU0Q7OztBRHNCekMsSUFBTSxnQkFBTixjQUE0QjtBQUFBLEVBQ2pDLFlBQVksbUJBQXFDLGVBQWUsRUFBRSxZQUFZLGNBQWMsQ0FBQyxDQUFDO0FBQ2hHLEVBQUU7QUFBQSxFQUZLO0FBQUE7QUFNNkMsc0JBQWE7QUFHYix5QkFBZ0I7QUFHdEIsd0JBQWU7QUFHVCx3QkFBZTtBQUdyQixvQkFBVztBQUFBO0FBQUEsRUFFdkQsU0FBUztBQUNQLFdBQU8sS0FBSyxxQkFBcUJFLG9CQUFtQjtBQUFBLEVBQ3REO0FBQ0Y7QUF2QmEsY0FHSixTQUFTLENBQUNDLFNBQVksUUFBZUEsU0FBY0EsU0FBWUEsT0FBTTtBQUcxQjtBQUFBLEVBQWpELGVBQWUsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7QUFBQSxHQU5yQyxjQU11QztBQUdBO0FBQUEsRUFBakQsZUFBZSxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztBQUFBLEdBVHJDLGNBU3VDO0FBR047QUFBQSxFQUEzQ0MsVUFBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztBQUFBLEdBWi9CLGNBWWlDO0FBR007QUFBQSxFQUFqRCxlQUFlLEVBQUUsTUFBTSxTQUFTLFNBQVMsS0FBSyxDQUFDO0FBQUEsR0FmckMsY0FldUM7QUFHTjtBQUFBLEVBQTNDQSxVQUFTLEVBQUUsTUFBTSxTQUFTLFNBQVMsS0FBSyxDQUFDO0FBQUEsR0FsQi9CLGNBa0JpQztBQWxCakMsZ0JBQU47QUFBQSxFQUROLGNBQWMsaUJBQWlCO0FBQUEsR0FDbkI7IiwKICAibmFtZXMiOiBbInN0eWxlcyIsICJzdHlsZXMiLCAiaHRtbCIsICJwcm9wZXJ0eSIsICJjc3MiLCAic3R5bGVzIiwgImh0bWwiLCAic3R5bGVzIiwgInByb3BlcnR5Il0KfQo=
