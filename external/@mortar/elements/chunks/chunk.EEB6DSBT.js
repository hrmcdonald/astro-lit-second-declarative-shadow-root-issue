import {
  DisabledMixin,
  MteElement,
  StylePartsMixin,
  __decorateClass,
  config,
  defineElement,
  eventEmitter,
  isSsr,
  onUpdate,
  selectorFactory,
  styles7 as styles
} from "./chunk.KVXAK6W4.js";

// src/atomic/collapse/collapse.element.ts
import { html } from "lit";
import { property, query, state } from "lit/decorators.js";

// src/atomic/collapse/collapse.styles.ts
import { css } from "lit";
var styles2 = css`:host{display:grid;grid-template-rows:0fr;will-change:grid-template-rows,opacity}.content{overflow:hidden}`;

// src/atomic/collapse/collapse.element.ts
import anime from "animejs";
var nextUniqueId = 0;
var MteCollapse = class extends DisabledMixin(
  StylePartsMixin(MteElement)
) {
  constructor() {
    super();
    this.id = `mte-collapse--${nextUniqueId++}`;
    this.opened = false;
    this.withFade = false;
    this.showOverflow = false;
    this.withoutAnimation = false;
    this.animationDuration = config.animation.transitionDurationJs.short * 1e3;
    this.doShowOverflow = false;
    this.firstUpdateComplete = false;
    this.animationDone = () => {
      this.opacityAnimationRef?.remove();
      this.gridAnimationRef?.remove();
      this.opacityAnimationRef = null;
      this.gridAnimationRef = null;
      this.visibility = this.opened ? "inherit" : "hidden";
      if (this.showOverflow && this.opened) {
        this.overflow = "visible";
      }
    };
    this.toggle = this.toggle.bind(this);
  }
  set triggerElement(newTrigger) {
    if (newTrigger && this._triggerElement !== newTrigger) {
      this._triggerElement?.removeEventListener("click", this.toggle);
      this._triggerElement?.removeAttribute("aria-controls");
      this._triggerElement = newTrigger;
      this._triggerElement.setAttribute("aria-controls", this.id);
      this._triggerElement.addEventListener("click", this.toggle);
      this.updateTriggerA11y();
    }
  }
  get triggerElement() {
    return this._triggerElement;
  }
  handleOpenedChanged() {
    if (isSsr() || !this.firstUpdateComplete) {
      this.opacity = this.opened ? "1" : "0";
      this.visibility = this.opened ? "inherit" : "hidden";
      this.initialGridTemplateRows = this.opened ? "1fr" : "0fr";
    } else {
      if (this.opened) {
        this.visibility = "inherit";
      }
      this.style.overflow = "hidden";
      this.updateTriggerA11y();
      if (!this.withoutAnimation) {
        this.opacityAnimationRef?.pause();
        this.gridAnimationRef?.pause();
        const ease = config.animation.timingFunctionJs.standard;
        const easing = `cubicBezier(${ease[0]}, ${ease[1]}, ${ease[2]}, ${ease[3]})`;
        this.opacityAnimationRef = anime({
          targets: this,
          opacity: this.withFade ? this.opened ? 1 : 0 : [1, 1],
          duration: this.animationDuration,
          easing,
          complete: () => {
            this.animationDone();
          }
        });
        this.gridAnimationState ??= { rows: this.opened ? 0 : 1 };
        this.gridAnimationRef = anime({
          targets: this.gridAnimationState,
          rows: this.opened ? [this.gridAnimationState.rows, 1] : [this.gridAnimationState.rows, 0],
          duration: this.animationDuration,
          easing,
          update: () => {
            this.style.gridTemplateRows = `${this.gridAnimationState.rows}fr`;
          }
        });
      } else {
        this.gridAnimationState = null;
        this.opacity = this.opened ? "1" : this.withFade ? "0" : "1";
        this.style.gridTemplateRows = this.opened ? "1fr" : "0fr";
        this.animationDone();
      }
    }
  }
  handleShowOverflow(changedProps) {
    if (isSsr() || !this.firstUpdateComplete) {
      if (this.opened && this.showOverflow) {
        this.overflow = "visible";
      }
    } else {
      if (changedProps.has("showOverflow") && !changedProps.has("opened")) {
        this.overflow = this.showOverflow ? "visible" : "hidden";
      }
    }
  }
  handleTriggerChange(changedProps) {
    const root = this.triggerRoot ?? document;
    this.triggerElement = root.getElementById(this.triggerId);
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this.firstUpdateComplete = true;
  }
  updateTriggerA11y() {
    if (this.triggerElement) {
      this.triggerElement.setAttribute("aria-expanded", this.opened ? "true" : "false");
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.opacityAnimationRef?.remove();
    this.gridAnimationRef?.remove();
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("opacity") || changedProps.has("visibility") || changedProps.has("overflow") || changedProps.has("initialGridTemplateRows")) {
      this.setInstanceStyle("collapse", selectorFactory(this.instanceStyleSelectorRoot), {
        opacity: this.opacity,
        visibility: this.visibility,
        overflow: this.overflow,
        gridTemplateRows: this.firstUpdateComplete ? null : this.initialGridTemplateRows
      });
    }
  }
  render() {
    return html`${this.instanceStyles}<div class="content" part="content"><slot></slot></div>`;
  }
  toggle() {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  }
  open() {
    if (!this.disabled) {
      this.opened = true;
      this._onOpen.emit(null, { bubbles: false });
    }
  }
  close() {
    if (!this.disabled) {
      this.opened = false;
      this._onClose.emit(null, { bubbles: false });
    }
  }
};
MteCollapse.styles = [styles, styles2];
__decorateClass([
  property({ reflect: true })
], MteCollapse.prototype, "id", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteCollapse.prototype, "opened", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteCollapse.prototype, "withFade", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteCollapse.prototype, "showOverflow", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteCollapse.prototype, "withoutAnimation", 2);
__decorateClass([
  property({ type: Number })
], MteCollapse.prototype, "animationDuration", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteCollapse.prototype, "doShowOverflow", 2);
__decorateClass([
  property({ reflect: true })
], MteCollapse.prototype, "triggerId", 2);
__decorateClass([
  property({ type: Object })
], MteCollapse.prototype, "triggerRoot", 2);
__decorateClass([
  property({ type: Object })
], MteCollapse.prototype, "triggerElement", 1);
__decorateClass([
  state()
], MteCollapse.prototype, "opacity", 2);
__decorateClass([
  state()
], MteCollapse.prototype, "visibility", 2);
__decorateClass([
  state()
], MteCollapse.prototype, "overflow", 2);
__decorateClass([
  state()
], MteCollapse.prototype, "initialGridTemplateRows", 2);
__decorateClass([
  eventEmitter()
], MteCollapse.prototype, "_onOpen", 2);
__decorateClass([
  eventEmitter()
], MteCollapse.prototype, "_onClose", 2);
__decorateClass([
  query(".content")
], MteCollapse.prototype, "contentElem", 2);
__decorateClass([
  onUpdate("opened", { on: "both" })
], MteCollapse.prototype, "handleOpenedChanged", 1);
__decorateClass([
  onUpdate(["opened", "showOverflow"], { on: "both" })
], MteCollapse.prototype, "handleShowOverflow", 1);
__decorateClass([
  onUpdate(["triggerId", "triggerRoot"])
], MteCollapse.prototype, "handleTriggerChange", 1);
MteCollapse = __decorateClass([
  defineElement("mte-collapse")
], MteCollapse);

export {
  MteCollapse
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2F0b21pYy9jb2xsYXBzZSIsICIuLi8uLi8uLi9zcmMvYXRvbWljL2NvbGxhcHNlL2NvbGxhcHNlLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLXJvd3M6MGZyO3dpbGwtY2hhbmdlOmdyaWQtdGVtcGxhdGUtcm93cyxvcGFjaXR5fS5jb250ZW50e292ZXJmbG93OmhpZGRlbn1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVMsWUFBWTtBQUNyQixTQUFTLFVBQVUsT0FBTyxhQUFhOzs7QUNGdkMsU0FBUyxXQUFXO0FBQWEsSUFBTUEsVUFBUzs7O0FEaUJoRCxPQUFPLFdBQVc7QUFFbEIsSUFBSSxlQUFlO0FBYVosSUFBTSxjQUFOLGNBQTBCO0VBQy9CLGdCQUFxRCxVQUFVO0FBQ2pFLEVBQUU7RUFxS0EsY0FBYztBQUNaLFVBQU07QUFuS3FCLGNBQUssaUJBQWlCLGNBQWM7QUFHckIsa0JBQVM7QUFHVCxvQkFBVztBQUVYLHdCQUFlO0FBR2YsNEJBQW1CO0FBR25DLDZCQUMxQixPQUFPLFVBQVUscUJBQXFCLFFBQVE7QUFHSiwwQkFBaUI7QUFvRDdELFNBQVEsc0JBQXNCO0FBMkU5QixTQUFRLGdCQUFnQixNQUFNO0FBQzVCLFdBQUsscUJBQXFCLE9BQU87QUFDakMsV0FBSyxrQkFBa0IsT0FBTztBQUM5QixXQUFLLHNCQUFzQjtBQUMzQixXQUFLLG1CQUFtQjtBQUN4QixXQUFLLGFBQWEsS0FBSyxTQUFTLFlBQVk7QUFDNUMsVUFBSSxLQUFLLGdCQUFnQixLQUFLLFFBQVE7QUFDcEMsYUFBSyxXQUFXO01BQ2xCO0lBQ0Y7QUFXRSxTQUFLLFNBQVMsS0FBSyxPQUFPLEtBQUssSUFBSTtFQUNyQztFQXZJQSxJQUFJLGVBQWUsWUFBcUI7QUFDdEMsUUFBSSxjQUFjLEtBQUssb0JBQW9CLFlBQVk7QUFDckQsV0FBSyxpQkFBaUIsb0JBQW9CLFNBQVMsS0FBSyxNQUFNO0FBQzlELFdBQUssaUJBQWlCLGdCQUFnQixlQUFlO0FBQ3JELFdBQUssa0JBQWtCO0FBQ3ZCLFdBQUssZ0JBQWdCLGFBQWEsaUJBQWlCLEtBQUssRUFBRTtBQUMxRCxXQUFLLGdCQUFnQixpQkFBaUIsU0FBUyxLQUFLLE1BQU07QUFDMUQsV0FBSyxrQkFBa0I7SUFDekI7RUFDRjtFQUNBLElBQUksaUJBQTBCO0FBQzVCLFdBQU8sS0FBSztFQUNkO0VBOEJRLHNCQUFzQjtBQUM1QixRQUFJLE1BQU0sS0FBSyxDQUFDLEtBQUsscUJBQXFCO0FBQ3hDLFdBQUssVUFBVSxLQUFLLFNBQVMsTUFBTTtBQUNuQyxXQUFLLGFBQWEsS0FBSyxTQUFTLFlBQVk7QUFDNUMsV0FBSywwQkFBMEIsS0FBSyxTQUFTLFFBQVE7SUFDdkQsT0FBTztBQUVMLFVBQUksS0FBSyxRQUFRO0FBQ2YsYUFBSyxhQUFhO01BQ3BCO0FBQ0EsV0FBSyxNQUFNLFdBQVc7QUFDdEIsV0FBSyxrQkFBa0I7QUFDdkIsVUFBSSxDQUFDLEtBQUssa0JBQWtCO0FBQzFCLGFBQUsscUJBQXFCLE1BQU07QUFDaEMsYUFBSyxrQkFBa0IsTUFBTTtBQUM3QixjQUFNLE9BQU8sT0FBTyxVQUFVLGlCQUFpQjtBQUMvQyxjQUFNLFNBQVMsZUFBZSxLQUFLLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQztBQUN6RSxhQUFLLHNCQUFzQixNQUFNO1VBQy9CLFNBQVM7VUFDVCxTQUFTLEtBQUssV0FBWSxLQUFLLFNBQVMsSUFBSSxJQUFLLENBQUMsR0FBRyxDQUFDO1VBQ3RELFVBQVUsS0FBSztVQUNmO1VBQ0EsVUFBVSxNQUFNO0FBQ2QsaUJBQUssY0FBYztVQUNyQjtRQUNGLENBQUM7QUFFRCxhQUFLLHVCQUF1QixFQUFFLE1BQU0sS0FBSyxTQUFTLElBQUksRUFBRTtBQUN4RCxhQUFLLG1CQUFtQixNQUFNO1VBQzVCLFNBQVMsS0FBSztVQUNkLE1BQU0sS0FBSyxTQUFTLENBQUMsS0FBSyxtQkFBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLG1CQUFtQixNQUFNLENBQUM7VUFDeEYsVUFBVSxLQUFLO1VBQ2Y7VUFDQSxRQUFRLE1BQU07QUFDWixpQkFBSyxNQUFNLG1CQUFtQixHQUFHLEtBQUssbUJBQW1CLElBQUk7VUFDL0Q7UUFDRixDQUFDO01BQ0gsT0FBTztBQUNMLGFBQUsscUJBQXFCO0FBQzFCLGFBQUssVUFBVSxLQUFLLFNBQVMsTUFBTSxLQUFLLFdBQVcsTUFBTTtBQUN6RCxhQUFLLE1BQU0sbUJBQW1CLEtBQUssU0FBUyxRQUFRO0FBQ3BELGFBQUssY0FBYztNQUNyQjtJQUNGO0VBQ0Y7RUFHUSxtQkFBbUIsY0FBYztBQUN2QyxRQUFJLE1BQU0sS0FBSyxDQUFDLEtBQUsscUJBQXFCO0FBQ3hDLFVBQUksS0FBSyxVQUFVLEtBQUssY0FBYztBQUNwQyxhQUFLLFdBQVc7TUFDbEI7SUFDRixPQUFPO0FBR0wsVUFBSSxhQUFhLElBQUksY0FBYyxLQUFLLENBQUMsYUFBYSxJQUFJLFFBQVEsR0FBRztBQUNuRSxhQUFLLFdBQVcsS0FBSyxlQUFlLFlBQVk7TUFDbEQ7SUFDRjtFQUNGO0VBR1Esb0JBQW9CLGNBQWM7QUFDeEMsVUFBTSxPQUFPLEtBQUssZUFBZTtBQUNqQyxTQUFLLGlCQUFpQixLQUFLLGVBQWUsS0FBSyxTQUFTO0VBQzFEO0VBRVUsYUFBYSxjQUF5QjtBQUM5QyxVQUFNLGFBQWEsWUFBWTtBQUMvQixTQUFLLHNCQUFzQjtFQUM3QjtFQWFRLG9CQUFvQjtBQUMxQixRQUFJLEtBQUssZ0JBQWdCO0FBQ3ZCLFdBQUssZUFBZSxhQUFhLGlCQUFpQixLQUFLLFNBQVMsU0FBUyxPQUFPO0lBQ2xGO0VBQ0Y7RUFRQSx1QkFBdUI7QUFDckIsVUFBTSxxQkFBcUI7QUFDM0IsU0FBSyxxQkFBcUIsT0FBTztBQUNqQyxTQUFLLGtCQUFrQixPQUFPO0VBQ2hDO0VBRVUscUJBQXFCLGNBQWM7QUFDM0MsVUFBTSxxQkFBcUIsWUFBWTtBQUV2QyxRQUNFLGFBQWEsSUFBSSxTQUFTLEtBQzFCLGFBQWEsSUFBSSxZQUFZLEtBQzdCLGFBQWEsSUFBSSxVQUFVLEtBQzNCLGFBQWEsSUFBSSx5QkFBeUIsR0FDMUM7QUFDQSxXQUFLLGlCQUFpQixZQUFZLGdCQUFnQixLQUFLLHlCQUF5QixHQUFHO1FBQ2pGLFNBQVMsS0FBSztRQUNkLFlBQVksS0FBSztRQUNqQixVQUFVLEtBQUs7UUFDZixrQkFBa0IsS0FBSyxzQkFBc0IsT0FBTyxLQUFLO01BQzNELENBQUM7SUFDSDtFQUNGO0VBRUEsU0FBUztBQUNQLFdBQU8sT0FBTyxLQUFLLGNBQWM7RUFJbkM7RUFFTyxTQUFTO0FBQ2QsUUFBSSxLQUFLLFFBQVE7QUFDZixXQUFLLE1BQU07SUFDYixPQUFPO0FBQ0wsV0FBSyxLQUFLO0lBQ1o7RUFDRjtFQUVPLE9BQU87QUFDWixRQUFJLENBQUMsS0FBSyxVQUFVO0FBQ2xCLFdBQUssU0FBUztBQUNkLFdBQUssUUFBUSxLQUFLLE1BQU0sRUFBRSxTQUFTLE1BQU0sQ0FBQztJQUM1QztFQUNGO0VBRU8sUUFBUTtBQUNiLFFBQUksQ0FBQyxLQUFLLFVBQVU7QUFDbEIsV0FBSyxTQUFTO0FBQ2QsV0FBSyxTQUFTLEtBQUssTUFBTSxFQUFFLFNBQVMsTUFBTSxDQUFDO0lBQzdDO0VBQ0Y7QUFDRjtBQWpPYSxZQUdKLFNBQVMsQ0FBQyxRQUFZQyxPQUFNO0FBRU47RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBTGhCLFlBS2tCO0FBR2U7RUFBM0MsU0FBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQVIvQixZQVFpQztBQUdBO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FYL0IsWUFXaUM7QUFFQTtFQUEzQyxTQUFTLEVBQUUsTUFBTSxTQUFTLFNBQVMsS0FBSyxDQUFDO0dBYi9CLFlBYWlDO0FBR0E7RUFBM0MsU0FBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQWhCL0IsWUFnQmlDO0FBR2hCO0VBQTNCLFNBQVMsRUFBRSxNQUFNLE9BQU8sQ0FBQztHQW5CZixZQW1CaUI7QUFJZ0I7RUFBM0MsU0FBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQXZCL0IsWUF1QmlDO0FBR2Y7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBMUJoQixZQTBCa0I7QUFNRDtFQUEzQixTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7R0FoQ2YsWUFnQ2lCO0FBSXhCO0VBREgsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0dBbkNmLFlBb0NQO0FBZ0JLO0VBQVIsTUFBTTtHQXBESSxZQW9ERjtBQUdBO0VBQVIsTUFBTTtHQXZESSxZQXVERjtBQUdBO0VBQVIsTUFBTTtHQTFESSxZQTBERjtBQUdBO0VBQVIsTUFBTTtHQTdESSxZQTZERjtBQUdPO0VBQWYsYUFBYTtHQWhFSCxZQWdFSztBQUdBO0VBQWYsYUFBYTtHQW5FSCxZQW1FSztBQUVHO0VBQWxCLE1BQU0sVUFBVTtHQXJFTixZQXFFUTtBQVNYO0VBRFAsU0FBUyxVQUFVLEVBQUUsSUFBSSxPQUFPLENBQUM7R0E3RXZCLFlBOEVIO0FBK0NBO0VBRFAsU0FBUyxDQUFDLFVBQVUsY0FBYyxHQUFHLEVBQUUsSUFBSSxPQUFPLENBQUM7R0E1SHpDLFlBNkhIO0FBZUE7RUFEUCxTQUFTLENBQUMsYUFBYSxhQUFhLENBQUM7R0EzSTNCLFlBNElIO0FBNUlHLGNBQU47RUFETixjQUFjLGNBQWM7R0FDaEI7IiwKICAibmFtZXMiOiBbInN0eWxlcyIsICJzdHlsZXMiXQp9Cg==
