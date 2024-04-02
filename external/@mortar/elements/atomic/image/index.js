import {
  MteContentBase,
  RadiusMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  eventEmitter,
  isSsr,
  styles7 as styles
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/image/image.element.ts
import { ifDefined } from "lit/directives/if-defined.js";
import { selectorFactory } from "@mortar/styles";
import { html } from "lit";
import { property, state } from "lit/decorators.js";

// src/atomic/image/image.styles.ts
import { css } from "lit";
var styles2 = css`:host{--image-border-radius:0px;border-radius:var(--image-border-radius);display:block;overflow:hidden;position:relative;width:100%}:host ::slotted(img),:host img{display:block;height:100%;max-height:100%;max-width:100%;min-height:100%;min-width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100%}:host([radius=sm]){--image-border-radius:var(--mte-border-radius-sm)}:host([radius=md]){--image-border-radius:var(--mte-border-radius-md)}:host([radius=lg]){--image-border-radius:var(--mte-border-radius-lg)}`;

// src/atomic/image/image.element.ts
var MteImage = class extends RadiusMixin(
  StylePartsMixin(MteContentBase)
) {
  constructor() {
    super(...arguments);
    this.intersecting = false;
    this.lazyChecked = false;
    this.handleIntersection = async (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.intersecting = true;
          if (this.observer) {
            this.observer.disconnect();
          }
        }
      }
    };
  }
  willUpdate(changedProps) {
    if (!isSsr() && !this.lazyChecked) {
      if (this.loading === "lazy") {
        this.observer = new IntersectionObserver(this.handleIntersection, { rootMargin: "1250px" });
        this.observer.observe(this);
      } else {
        this.intersecting = true;
      }
      this.lazyChecked = true;
    }
    super.willUpdate(changedProps);
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("fit") || changedProps.has("position")) {
      const styleMap = {
        objectFit: this.fit,
        objectPosition: this.position
      };
      this.setInstanceStyle("mte-image", selectorFactory(":host:host:host img"), styleMap);
      this.setInstanceStyle(
        "mte-image-img-slot",
        selectorFactory(":host:host:host ::slotted(img)"),
        styleMap
      );
    }
  }
  handleLoad(e) {
    this._onLoad.emit();
  }
  handleError(e) {
    this._onError.emit();
  }
  handleAbort(e) {
    this._onAbort.emit();
  }
  render() {
    const src = this.loading === "lazy" && !this.intersecting ? this.intersecting ? this.src : null : this.src;
    const srcset = this.loading === "lazy" && !this.intersecting ? this.intersecting ? this.srcset : null : this.srcset;
    return html`${this.instanceStyles}<slot name="img"><img part="img" @error="${this.handleError}" @load="${this.handleLoad}" @abort="${this.handleAbort}" src="${ifDefined(src)}" srcset="${ifDefined(srcset)}" alt="${ifDefined(this.alt)}" crossorigin="${ifDefined(this.crossorigin)}" ?ismap="${this.ismap}" longdesc="${ifDefined(this.longdesc)}" referrerpolicy="${ifDefined(this.referrerpolicy)}" sizes="${ifDefined(this.sizes)}"></slot>`;
  }
};
MteImage.styles = [styles, styles2];
__decorateClass([
  property({ reflect: true })
], MteImage.prototype, "alt", 2);
__decorateClass([
  property({ reflect: true })
], MteImage.prototype, "src", 2);
__decorateClass([
  property({ reflect: true })
], MteImage.prototype, "crossorigin", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteImage.prototype, "ismap", 2);
__decorateClass([
  property({ reflect: true })
], MteImage.prototype, "loading", 2);
__decorateClass([
  property({ reflect: true })
], MteImage.prototype, "longdesc", 2);
__decorateClass([
  property({ reflect: true })
], MteImage.prototype, "referrerpolicy", 2);
__decorateClass([
  property({ reflect: true })
], MteImage.prototype, "sizes", 2);
__decorateClass([
  property({ reflect: true })
], MteImage.prototype, "srcset", 2);
__decorateClass([
  property({ reflect: true })
], MteImage.prototype, "fit", 2);
__decorateClass([
  property({ reflect: true })
], MteImage.prototype, "position", 2);
__decorateClass([
  eventEmitter()
], MteImage.prototype, "_onLoad", 2);
__decorateClass([
  eventEmitter()
], MteImage.prototype, "_onError", 2);
__decorateClass([
  eventEmitter()
], MteImage.prototype, "_onAbort", 2);
__decorateClass([
  state()
], MteImage.prototype, "intersecting", 2);
MteImage = __decorateClass([
  defineElement("mte-image")
], MteImage);
export {
  MteImage
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pbWFnZSIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2ltYWdlL2ltYWdlLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0taW1hZ2UtYm9yZGVyLXJhZGl1czowcHg7Ym9yZGVyLXJhZGl1czp2YXIoLS1pbWFnZS1ib3JkZXItcmFkaXVzKTtkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfTpob3N0IDo6c2xvdHRlZChpbWcpLDpob3N0IGltZ3tkaXNwbGF5OmJsb2NrO2hlaWdodDoxMDAlO21heC1oZWlnaHQ6MTAwJTttYXgtd2lkdGg6MTAwJTttaW4taGVpZ2h0OjEwMCU7bWluLXdpZHRoOjEwMCU7LW8tb2JqZWN0LWZpdDpjb3ZlcjtvYmplY3QtZml0OmNvdmVyOy1vLW9iamVjdC1wb3NpdGlvbjpjZW50ZXI7b2JqZWN0LXBvc2l0aW9uOmNlbnRlcjt3aWR0aDoxMDAlfTpob3N0KFtyYWRpdXM9c21dKXstLWltYWdlLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtc20pfTpob3N0KFtyYWRpdXM9bWRdKXstLWltYWdlLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpfTpob3N0KFtyYWRpdXM9bGddKXstLWltYWdlLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbGcpfWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxpQkFBaUI7QUFDMUIsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsVUFBVSxhQUFhOzs7QUNIaEMsU0FBUyxXQUFXO0FBQWEsSUFBTUEsVUFBUzs7O0FENkJ6QyxJQUFNLFdBQU4sY0FBdUI7RUFDNUIsZ0JBQXNELGNBQWM7QUFDdEUsRUFBRTtFQUZLOztBQTJESSx3QkFBZTtBQUl4QixTQUFRLGNBQWM7QUFtQnRCLFNBQVEscUJBQXFCLE9BQU8sWUFBWTtBQUM5QyxpQkFBVyxTQUFTLFNBQVM7QUFDM0IsWUFBSSxNQUFNLGdCQUFnQjtBQUN4QixlQUFLLGVBQWU7QUFDcEIsY0FBSSxLQUFLLFVBQVU7QUFDakIsaUJBQUssU0FBUyxXQUFXO1VBQzNCO1FBQ0Y7TUFDRjtJQUNGOztFQTFCVSxXQUFXLGNBQXlCO0FBQzVDLFFBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxLQUFLLGFBQWE7QUFDakMsVUFBSSxLQUFLLFlBQVksUUFBUTtBQUUzQixhQUFLLFdBQVcsSUFBSSxxQkFBcUIsS0FBSyxvQkFBb0IsRUFBRSxZQUFZLFNBQVMsQ0FBQztBQUMxRixhQUFLLFNBQVMsUUFBUSxJQUFJO01BQzVCLE9BQU87QUFHTCxhQUFLLGVBQWU7TUFDdEI7QUFDQSxXQUFLLGNBQWM7SUFDckI7QUFFQSxVQUFNLFdBQVcsWUFBWTtFQUMvQjtFQWFVLHFCQUFxQixjQUFjO0FBQzNDLFVBQU0scUJBQXFCLFlBQVk7QUFFdkMsUUFBSSxhQUFhLElBQUksS0FBSyxLQUFLLGFBQWEsSUFBSSxVQUFVLEdBQUc7QUFDM0QsWUFBTSxXQUFXO1FBQ2YsV0FBVyxLQUFLO1FBQ2hCLGdCQUFnQixLQUFLO01BQ3ZCO0FBR0EsV0FBSyxpQkFBaUIsYUFBYSxnQkFBZ0IscUJBQXFCLEdBQUcsUUFBUTtBQUNuRixXQUFLO1FBQ0g7UUFDQSxnQkFBZ0IsZ0NBQWdDO1FBQ2hEO01BQ0Y7SUFDRjtFQUNGO0VBRVEsV0FBVyxHQUFHO0FBQ3BCLFNBQUssUUFBUSxLQUFLO0VBQ3BCO0VBRVEsWUFBWSxHQUFHO0FBQ3JCLFNBQUssU0FBUyxLQUFLO0VBQ3JCO0VBRVEsWUFBWSxHQUFHO0FBQ3JCLFNBQUssU0FBUyxLQUFLO0VBQ3JCO0VBRUEsU0FBUztBQUNQLFVBQU0sTUFDSixLQUFLLFlBQVksVUFBVSxDQUFDLEtBQUssZUFDN0IsS0FBSyxlQUNILEtBQUssTUFDTCxPQUNGLEtBQUs7QUFDWCxVQUFNLFNBQ0osS0FBSyxZQUFZLFVBQVUsQ0FBQyxLQUFLLGVBQzdCLEtBQUssZUFDSCxLQUFLLFNBQ0wsT0FDRixLQUFLO0FBRVgsV0FBTyxPQUFPLEtBQUssY0FBYyw0Q0FJbEIsS0FBSyxXQUFXLFlBQ2pCLEtBQUssVUFBVSxhQUNkLEtBQUssV0FBVyxVQUNuQixVQUFVLEdBQUcsQ0FBQyxhQUNYLFVBQVUsTUFBTSxDQUFDLFVBQ3BCLFVBQVUsS0FBSyxHQUFHLENBQUMsa0JBQ1gsVUFBVSxLQUFLLFdBQVcsQ0FBQyxhQUNoQyxLQUFLLEtBQUssZUFDUixVQUFVLEtBQUssUUFBUSxDQUFDLHFCQUNsQixVQUFVLEtBQUssY0FBYyxDQUFDLFlBQ3ZDLFVBQVUsS0FBSyxLQUFLLENBQUM7RUFFckM7QUFDRjtBQTNKYSxTQUdKLFNBQVMsQ0FBQyxRQUFZQyxPQUFNO0FBR047RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBTmhCLFNBTWtCO0FBR0E7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBVGhCLFNBU2tCO0FBR0E7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBWmhCLFNBWWtCO0FBR2U7RUFBM0MsU0FBUyxFQUFFLFNBQVMsTUFBTSxNQUFNLFFBQVEsQ0FBQztHQWYvQixTQWVpQztBQUdmO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQWxCaEIsU0FrQmtCO0FBR0E7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBckJoQixTQXFCa0I7QUFHQTtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0F4QmhCLFNBd0JrQjtBQVFBO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQWhDaEIsU0FnQ2tCO0FBR0E7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBbkNoQixTQW1Da0I7QUFHQTtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0F0Q2hCLFNBc0NrQjtBQVVBO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQWhEaEIsU0FnRGtCO0FBR2I7RUFBZixhQUFhO0dBbkRILFNBbURLO0FBR0E7RUFBZixhQUFhO0dBdERILFNBc0RLO0FBR0E7RUFBZixhQUFhO0dBekRILFNBeURLO0FBRVA7RUFBUixNQUFNO0dBM0RJLFNBMkRGO0FBM0RFLFdBQU47RUFETixjQUFjLFdBQVc7R0FDYjsiLAogICJuYW1lcyI6IFsic3R5bGVzIiwgInN0eWxlcyJdCn0K
