import {
  MteText
} from "./chunk.JVVZWO6D.js";
import {
  ButtonMixin,
  CoreColorMixin,
  PresetMixinFactory,
  __decorateClass,
  defineElement,
  presetProperty,
  styles3 as styles
} from "./chunk.KVXAK6W4.js";

// src/atomic/link/link.element.ts
import { html } from "lit";

// src/atomic/link/link.styles.ts
import { css } from "lit";
var styles2 = css`:host{--color:rgba(var(--mte-it-link-default-rgb),var(--mte-it-link-default-a));--focus-radius:var(--mte-border-radius-sm);-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;color:var(--color);cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;font-weight:inherit;margin:0;outline:none;padding:0;text-decoration:none}:host(:focus-visible:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--focus-radius);border-bottom-right-radius:var(--focus-radius);border-top-left-radius:var(--focus-radius);border-top-right-radius:var(--focus-radius);bottom:-2px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-6px;pointer-events:none;position:absolute;right:-6px;top:-2px;z-index:9}:host .anchor:visited{--color:rgba(var(--mte-it-link-visited-rgb),var(--mte-it-link-visited-a))}:host(:not([disabled]):focus),:host(:not([disabled]):hover){text-decoration:underline}:host([disabled]),:host([disabled]) a{--color:var(--mte-disabled-4);cursor:not-allowed}:host([color=primary]){--color:rgb(var(--mte-core-primary-base-rgb))}:host([color=secondary]){--color:rgb(var(--mte-core-secondary-base-rgb))}:host([color=tertiary]){--color:rgb(var(--mte-core-tertiary-base-rgb))}:host([color=danger]){--color:rgb(var(--mte-core-danger-base-rgb))}`;

// src/atomic/link/link.element.ts
import { classMap } from "lit/directives/class-map.js";
var MteLink = class extends CoreColorMixin(
  PresetMixinFactory("MteLink")(ButtonMixin(MteText))
) {
  getButtonClasses() {
    return classMap({ link: true });
  }
  render() {
    return this.renderButtonTemplate(html`<slot></slot>`);
  }
};
MteLink.styles = [...MteText.styles, styles, styles2];
__decorateClass([
  presetProperty({ reflect: true })
], MteLink.prototype, "fontWeight", 2);
MteLink = __decorateClass([
  defineElement("mte-link")
], MteLink);

export {
  MteLink
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2F0b21pYy9saW5rL2xpbmsuZWxlbWVudC50cyIsICIuLi8uLi8uLi9zcmMvYXRvbWljL2xpbmsvbGluay5zdHlsZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuXG5pbXBvcnQge1xuICBwcmVzZXRQcm9wZXJ0eSxcbiAgQ29yZUNvbG9yTWl4aW4sXG4gIFByZXNldE1peGluRmFjdG9yeSxcbiAgZGVmaW5lRWxlbWVudCxcbiAgYnV0dG9uU3R5bGVzLFxufSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IE10ZVRleHQgfSBmcm9tICcuLi90ZXh0JztcbmltcG9ydCB7IEJ1dHRvbk1peGluIH0gZnJvbSAnLi4vLi4vY29yZS9taXhpbnMvYnV0dG9uLm1peGluJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vbGluay5zdHlsZXMnO1xuaW1wb3J0IHsgTGlua1ByZXNldCB9IGZyb20gJy4vbGluay5wcmVzZXRzJztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvY2xhc3MtbWFwLmpzJztcblxuLyoqXG4gKiBAc2xvdCAtIERlZmF1bHQgc2xvdHRlZCBjb250ZW50XG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtbGluaycpXG5leHBvcnQgY2xhc3MgTXRlTGluayBleHRlbmRzIENvcmVDb2xvck1peGluKFxuICBQcmVzZXRNaXhpbkZhY3Rvcnk8TGlua1ByZXNldD4oJ010ZUxpbmsnKShCdXR0b25NaXhpbihNdGVUZXh0KSlcbikge1xuICBzdGF0aWMgc3R5bGVzID0gWy4uLk10ZVRleHQuc3R5bGVzLCBidXR0b25TdHlsZXMsIHN0eWxlc107XG5cbiAgQHByZXNldFByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBmb250V2VpZ2h0OiAncmVndWxhcicgfCAnYm9sZCc7XG5cbiAgZ2V0QnV0dG9uQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY2xhc3NNYXAoeyBsaW5rOiB0cnVlIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlckJ1dHRvblRlbXBsYXRlKGh0bWxgPHNsb3Q+PC9zbG90PmApO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS1saW5rJzogTXRlTGluaztcbiAgfVxufVxuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWNvbG9yOnJnYmEodmFyKC0tbXRlLWl0LWxpbmstZGVmYXVsdC1yZ2IpLHZhcigtLW10ZS1pdC1saW5rLWRlZmF1bHQtYSkpOy0tZm9jdXMtcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXNtKTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7YmFja2dyb3VuZDpub25lO2JvcmRlcjowO2NvbG9yOnZhcigtLWNvbG9yKTtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxMDAlO2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bWFyZ2luOjA7b3V0bGluZTpub25lO3BhZGRpbmc6MDt0ZXh0LWRlY29yYXRpb246bm9uZX06aG9zdCg6Zm9jdXMtdmlzaWJsZTpub3QoLmRpc2FibGVkKTpub3QoW2Rpc2FibGVkXSk6bm90KDpkaXNhYmxlZCkpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1mb2N1cy1yYWRpdXMpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWZvY3VzLXJhZGl1cyk7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1mb2N1cy1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWZvY3VzLXJhZGl1cyk7Ym90dG9tOi0ycHg7Ym94LXNoYWRvdzowIDAgMCAxcHggdmFyKC0tbXRlLWxpZ2h0KTtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jaztsZWZ0Oi02cHg7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDotNnB4O3RvcDotMnB4O3otaW5kZXg6OX06aG9zdCAuYW5jaG9yOnZpc2l0ZWR7LS1jb2xvcjpyZ2JhKHZhcigtLW10ZS1pdC1saW5rLXZpc2l0ZWQtcmdiKSx2YXIoLS1tdGUtaXQtbGluay12aXNpdGVkLWEpKX06aG9zdCg6bm90KFtkaXNhYmxlZF0pOmZvY3VzKSw6aG9zdCg6bm90KFtkaXNhYmxlZF0pOmhvdmVyKXt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfTpob3N0KFtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIGF7LS1jb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtNCk7Y3Vyc29yOm5vdC1hbGxvd2VkfTpob3N0KFtjb2xvcj1wcmltYXJ5XSl7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1zZWNvbmRhcnldKXstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9dGVydGlhcnldKXstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1kYW5nZXJdKXstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKX1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxZQUFZOzs7QUNBckIsU0FBUyxXQUFXO0FBQWEsSUFBTUEsVUFBUzs7O0FEYWhELFNBQVMsZ0JBQWdCO0FBTWxCLElBQU0sVUFBTixjQUFzQjtBQUFBLEVBQzNCLG1CQUErQixTQUFTLEVBQUUsWUFBWSxPQUFPLENBQUM7QUFDaEUsRUFBRTtBQUFBLEVBS0EsbUJBQW1CO0FBQ2pCLFdBQU8sU0FBUyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQUEsRUFDaEM7QUFBQSxFQUVBLFNBQVM7QUFDUCxXQUFPLEtBQUsscUJBQXFCLG1CQUFtQjtBQUFBLEVBQ3REO0FBQ0Y7QUFkYSxRQUdKLFNBQVMsQ0FBQyxHQUFHLFFBQVEsUUFBUSxRQUFjQyxPQUFNO0FBRXJCO0FBQUEsRUFBbEMsZUFBZSxFQUFFLFNBQVMsS0FBSyxDQUFDO0FBQUEsR0FMdEIsUUFLd0I7QUFMeEIsVUFBTjtBQUFBLEVBRE4sY0FBYyxVQUFVO0FBQUEsR0FDWjsiLAogICJuYW1lcyI6IFsic3R5bGVzIiwgInN0eWxlcyJdCn0K
