import {
  MteIconButton,
  defaultButtonBorderFactory
} from "./chunk.TOU6J7OT.js";
import {
  styles as styles4
} from "./chunk.D6N6Z2UH.js";
import {
  ButtonMixin,
  CoreColorMixin,
  DensityMixin,
  InverseMixin,
  MteElement,
  PresetMixinFactory,
  RadiusMixin,
  ResponsiveValueConverter,
  SizeMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  selectorFactory,
  styles,
  styles3 as styles2,
  styles7 as styles3
} from "./chunk.KVXAK6W4.js";

// src/atomic/button/button.element.ts
import { ifDefined } from "lit-html/directives/if-defined.js";
import { html } from "lit";
import { property } from "lit/decorators.js";
var MteButton = class extends InverseMixin(
  CoreColorMixin(
    RadiusMixin(
      SizeMixin(
        DensityMixin(
          ButtonMixin(
            PresetMixinFactory("MteButton")(
              StylePartsMixin(MteElement)
            )
          )
        )
      )
    )
  )
) {
  constructor() {
    super(...arguments);
    this.filled = false;
    this.outlined = false;
    this.iconLibrary = "_default";
    this.iconHidden = false;
    this.rightIconLibrary = "_default";
    this.rightIconHidden = false;
    this.loading = false;
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    let shouldUpdateStyles = false;
    for (const key of changedProps.keys()) {
      if (MteButton.contentProps.has(key)) {
        shouldUpdateStyles = true;
        break;
      }
    }
    if (shouldUpdateStyles) {
      this.setInstanceStyle("content-base", selectorFactory(":host:host:host:host:host:host"), {
        // Spacing
        m: this.m,
        mx: this.mx,
        my: this.my,
        mt: this.mt,
        mr: this.mr,
        mb: this.mb,
        ml: this.ml,
        // Sizing
        w: this.w,
        maxw: this.maxw,
        minw: this.minw,
        // Borders
        borderColor: this.borderColor,
        borderStyle: this.borderStyle,
        borderWidth: this.borderWidth,
        border: this.border ? defaultButtonBorderFactory(this.borderWidth, this.borderColor, this.borderStyle) : null,
        // Elevation
        elevation: this.elevation
      });
    }
  }
  render() {
    let loadingDiameter = 14;
    if (this.loading) {
      if (this.density === "compact" && this.size === "sm") {
        loadingDiameter = loadingDiameter - 7;
      } else if (this.density === "compact") {
        loadingDiameter = loadingDiameter - 4;
      } else if (this.size === "sm") {
        loadingDiameter = loadingDiameter - 5;
      }
    }
    const iconSize = this.size === "sm" ? 12 : this.size === "lg" ? 20 : 16;
    return this.renderButtonTemplate(html`${this.icon && !this.iconHidden || this.loading ? html`<span class="prefix"><span part="prefix">${this.loading ? html`<mte-spinner diameter="${loadingDiameter}"></mte-spinner>` : html`<mte-icon size="${iconSize}" name="${this.icon}" library="${ifDefined(this.iconLibrary)}"></mte-icon>`}</span></span>` : null}<slot part="label" class="label"></slot>${this.rightIcon && !this.rightIconHidden ? html`<span class="suffix"><span part="suffix"><mte-icon size="${iconSize}" name="${this.rightIcon}" library="${ifDefined(this.rightIconLibrary)}"></mte-icon></span></span>` : null}`);
  }
};
MteButton.styles = [styles3, styles, styles2, styles4];
// List of props for optimal style update checking
MteButton.contentProps = /* @__PURE__ */ new Set([
  "m",
  "mx",
  "my",
  "mt",
  "mr",
  "mb",
  "ml",
  "w",
  "maxw",
  "minw",
  "borderColor",
  "borderWidth",
  "borderStyle",
  "border",
  "elevation"
]);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteButton.prototype, "filled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteButton.prototype, "outlined", 2);
__decorateClass([
  property()
], MteButton.prototype, "icon", 2);
__decorateClass([
  property()
], MteButton.prototype, "iconLibrary", 2);
__decorateClass([
  property({ type: Boolean })
], MteButton.prototype, "iconHidden", 2);
__decorateClass([
  property()
], MteButton.prototype, "rightIcon", 2);
__decorateClass([
  property()
], MteButton.prototype, "rightIconLibrary", 2);
__decorateClass([
  property({ type: Boolean })
], MteButton.prototype, "rightIconHidden", 2);
__decorateClass([
  property({ type: Boolean })
], MteButton.prototype, "loading", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "m", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "mx", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "my", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "mt", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "mr", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "mb", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "ml", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "w", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "maxw", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "minw", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "borderColor", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "borderWidth", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "borderStyle", 2);
__decorateClass([
  property({ type: Boolean, reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "border", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "elevation", 2);
MteButton = __decorateClass([
  defineElement("mte-button")
], MteButton);

// src/atomic/button/index.ts
var registerButtonElements = () => {
  new MteButton();
  new MteIconButton();
};

export {
  MteButton,
  registerButtonElements
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24iLCAiLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24vaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgImltcG9ydCB7IE10ZUJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uLmVsZW1lbnQnO1xuaW1wb3J0IHsgTXRlSWNvbkJ1dHRvbiB9IGZyb20gJy4vaWNvbi1idXR0b24uZWxlbWVudCc7XG5cbmV4cG9ydCBjb25zdCByZWdpc3RlckJ1dHRvbkVsZW1lbnRzID0gKCkgPT4ge1xuICBuZXcgTXRlQnV0dG9uKCk7XG4gIG5ldyBNdGVJY29uQnV0dG9uKCk7XG59O1xuXG5leHBvcnQgKiBmcm9tICcuL2J1dHRvbi5lbGVtZW50JztcbmV4cG9ydCAqIGZyb20gJy4vaWNvbi1idXR0b24uZWxlbWVudCc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLGlCQUFpQjtBQUMxQixTQUFTLFlBQVk7QUFDckIsU0FBUyxnQkFBZ0I7QUFvRGxCLElBQU0sWUFBTixjQUF3QjtFQUM3QjtJQUNFO01BQ0U7UUFDRTtVQUNFO1lBQ0UsbUJBQWlDLFdBQVc7Y0FDMUMsZ0JBQW1ELFVBQVU7WUFDL0Q7VUFDRjtRQUNGO01BQ0Y7SUFDRjtFQUNGO0FBQ0YsRUFBRTtFQWRLOztBQWtCdUMsa0JBQVM7QUFHVCxvQkFBVztBQU0zQyx1QkFBYztBQUdHLHNCQUFhO0FBTTlCLDRCQUFtQjtBQUdGLDJCQUFrQjtBQUdsQixtQkFBVTs7RUFtRjdCLHFCQUFxQixjQUFnQztBQUM3RCxVQUFNLHFCQUFxQixZQUFZO0FBR3ZDLFFBQUkscUJBQXFCO0FBQ3pCLGVBQVcsT0FBTyxhQUFhLEtBQUssR0FBRztBQUNyQyxVQUFJLFVBQVUsYUFBYSxJQUFJLEdBQUcsR0FBRztBQUNuQyw2QkFBcUI7QUFDckI7TUFDRjtJQUNGO0FBRUEsUUFBSSxvQkFBb0I7QUFFdEIs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
