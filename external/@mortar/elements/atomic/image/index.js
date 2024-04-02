import {
  MteContentBase,
  RadiusMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  eventEmitter,
  isSsr,
  selectorFactory,
  styles7 as styles
} from "../../chunks/chunk.KVXAK6W4.js";

// src/atomic/image/image.element.ts
import { ifDefined } from "lit/directives/if-defined.js";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pbWFnZSIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2ltYWdlL2ltYWdlLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0taW1hZ2UtYm9yZGVyLXJhZGl1czowcHg7Ym9yZGVyLXJhZGl1czp2YXIoLS1pbWFnZS1ib3JkZXItcmFkaXVzKTtkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfTpob3N0IDo6c2xvdHRlZChpbWcpLDpob3N0IGltZ3tkaXNwbGF5OmJsb2NrO2hlaWdodDoxMDAlO21heC1oZWlnaHQ6MTAwJTttYXgtd2lkdGg6MTAwJTttaW4taGVpZ2h0OjEwMCU7bWluLXdpZHRoOjEwMCU7LW8tb2JqZWN0LWZpdDpjb3ZlcjtvYmplY3QtZml0OmNvdmVyOy1vLW9iamVjdC1wb3NpdGlvbjpjZW50ZXI7b2JqZWN0LXBvc2l0aW9uOmNlbnRlcjt3aWR0aDoxMDAlfTpob3N0KFtyYWRpdXM9c21dKXstLWltYWdlLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtc20pfTpob3N0KFtyYWRpdXM9bWRdKXstLWltYWdlLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpfTpob3N0KFtyYWRpdXM9bGddKXstLWltYWdlLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbGcpfWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsaUJBQWlCO0FBRTFCLFNBQVMsWUFBWTtBQUNyQixTQUFTLFVBQVUsYUFBYTs7O0FDSGhDLFNBQVMsV0FBVztBQUFhLElBQU1BLFVBQVM7OztBRDZCekMsSUFBTSxXQUFOLGNBQXVCO0VBQzVCLGdCQUFzRCxjQUFjO0FBQ3RFLEVBQUU7RUFGSzs7QUEyREksd0JBQWU7QUFJeEIsU0FBUSxjQUFjO0FBbUJ0QixTQUFRLHFCQUFxQixPQUFPLFlBQVk7QUFDOUMsaUJBQVcsU0FBUyxTQUFTO0FBQzNCLFlBQUksTUFBTSxnQkFBZ0I7QUFDeEIsZUFBSyxlQUFlO0FBQ3BCLGNBQUksS0FBSyxVQUFVO0FBQ2pCLGlCQUFLLFNBQVMsV0FBVztVQUMzQjtRQUNGO01BQ0Y7SUFDRjs7RUExQlUsV0FBVyxjQUF5QjtBQUM1QyxRQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsS0FBSyxhQUFhO0FBQ2pDLFVBQUksS0FBSyxZQUFZLFFBQVE7QUFFM0IsYUFBSyxXQUFXLElBQUkscUJBQXFCLEtBQUssb0JBQW9CLEVBQUUsWUFBWSxTQUFTLENBQUM7QUFDMUYsYUFBSyxTQUFTLFFBQVEsSUFBSTtNQUM1QixPQUFPO0FBR0wsYUFBSyxlQUFlO01BQ3RCO0FBQ0EsV0FBSyxjQUFjO0lBQ3JCO0FBRUEsVUFBTSxXQUFXLFlBQVk7RUFDL0I7RUFhVSxxQkFBcUIsY0FBYztBQUMzQyxVQUFNLHFCQUFxQixZQUFZO0FBRXZDLFFBQUksYUFBYSxJQUFJLEtBQUssS0FBSyxhQUFhLElBQUksVUFBVSxHQUFHO0FBQzNELFlBQU0sV0FBVztRQUNmLFdBQVcsS0FBSztRQUNoQixnQkFBZ0IsS0FBSztNQUN2QjtBQUdBLFdBQUssaUJBQWlCLGFBQWEsZ0JBQWdCLHFCQUFxQixHQUFHLFFBQVE7QUFDbkYsV0FBSztRQUNIO1FBQ0EsZ0JBQWdCLGdDQUFnQztRQUNoRDtNQUNGO0lBQ0Y7RUFDRjtFQUVRLFdBQVcsR0FBRztBQUNwQixTQUFLLFFBQVEsS0FBSztFQUNwQjtFQUVRLFlBQVksR0FBRztBQUNyQixTQUFLLFNBQVMsS0FBSztFQUNyQjtFQUVRLFlBQVksR0FBRztBQUNyQixTQUFLLFNBQVMsS0FBSztFQUNyQjtFQUVBLFNBQVM7QUFDUCxVQUFNLE1BQ0osS0FBSyxZQUFZLFVBQVUsQ0FBQyxLQUFLLGVBQzdCLEtBQUssZUFDSCxLQUFLLE1BQ0wsT0FDRixLQUFLO0FBQ1gsVUFBTSxTQUNKLEtBQUssWUFBWSxVQUFVLENBQUMsS0FBSyxlQUM3QixLQUFLLGVBQ0gsS0FBSyxTQUNMLE9BQ0YsS0FBSztBQUVYLFdBQU8sT0FBTyxLQUFLLGNBQWMsNENBSWxCLEtBQUssV0FBVyxZQUNqQixLQUFLLFVBQVUsYUFDZCxLQUFLLFdBQVcsVUFDbkIsVUFBVSxHQUFHLENBQUMsYUFDWCxVQUFVLE1BQU0sQ0FBQyxVQUNwQixVQUFVLEtBQUssR0FBRyxDQUFDLGtCQUNYLFVBQVUsS0FBSyxXQUFXLENBQUMsYUFDaEMsS0FBSyxLQUFLLGVBQ1IsVUFBVSxLQUFLLFFBQVEsQ0FBQyxxQkFDbEIsVUFBVSxLQUFLLGNBQWMsQ0FBQyxZQUN2QyxVQUFVLEtBQUssS0FBSyxDQUFDO0VBRXJDO0FBQ0Y7QUEzSmEsU0FHSixTQUFTLENBQUMsUUFBWUMsT0FBTTtBQUdOO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQU5oQixTQU1rQjtBQUdBO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQVRoQixTQVNrQjtBQUdBO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQVpoQixTQVlrQjtBQUdlO0VBQTNDLFNBQVMsRUFBRSxTQUFTLE1BQU0sTUFBTSxRQUFRLENBQUM7R0FmL0IsU0FlaUM7QUFHZjtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FsQmhCLFNBa0JrQjtBQUdBO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQXJCaEIsU0FxQmtCO0FBR0E7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBeEJoQixTQXdCa0I7QUFRQTtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FoQ2hCLFNBZ0NrQjtBQUdBO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQW5DaEIsU0FtQ2tCO0FBR0E7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBdENoQixTQXNDa0I7QUFVQTtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FoRGhCLFNBZ0RrQjtBQUdiO0VBQWYsYUFBYTtHQW5ESCxTQW1ESztBQUdBO0VBQWYsYUFBYTtHQXRESCxTQXNESztBQUdBO0VBQWYsYUFBYTtHQXpESCxTQXlESztBQUVQO0VBQVIsTUFBTTtHQTNESSxTQTJERjtBQTNERSxXQUFOO0VBRE4sY0FBYyxXQUFXO0dBQ2I7IiwKICAibmFtZXMiOiBbInN0eWxlcyIsICJzdHlsZXMiXQp9Cg==
