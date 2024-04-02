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
  borderWidthValShorthands,
  config,
  defineElement,
  dotStringToConfigValue,
  onUpdate,
  selectorFactory,
  styles,
  styles3 as styles2,
  styles7 as styles3
} from "./chunk.KVXAK6W4.js";

// src/atomic/button/icon-button.element.ts
import { html } from "lit";
import { property, query } from "lit/decorators.js";

// src/atomic/button/icon-button.styles.ts
import { css } from "lit";
var styles5 = css`:host{--padding-y:var(--mte-space-sm);--padding-x:var(--padding-y);--border-radius:var(--group-radius,var(--mte-border-radius-full));--focus-radius:var(--group-focus-radius,var(--mte-border-radius-full));--icon-size:16px;--color:inherit}:host([radius=sm]){--border-radius:var(--mte-border-radius-sm);--focus-radius:var(--mte-border-radius-md)}:host mte-icon{height:var(--icon-size);min-height:var(--icon-size);min-width:var(--icon-size);width:var(--icon-size)}:host([size=sm]) mte-icon{--icon-size:12px}:host([size=lg]) mte-icon{--icon-size:20px}`;

// src/atomic/button/button-common.ts
var defaultButtonBorderFactory = (width, color, style) => `${style ?? "solid"} ${borderWidthValShorthands([
  { prop: "borderWidth", value: dotStringToConfigValue(width ?? "1px") }
])[0]?.value} ${dotStringToConfigValue(color) ?? config.color.border1}`;

// src/atomic/button/icon-button.element.ts
var MteIconButton = class extends DensityMixin(
  RadiusMixin(
    SizeMixin(
      InverseMixin(
        CoreColorMixin(
          PresetMixinFactory("MteIconButton")(
            ButtonMixin(StylePartsMixin(MteElement))
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
    this.loading = false;
    this.labelPosition = "top";
  }
  handleLabelChange() {
    if (this.label) {
      this.ariaLabel = this.label;
    }
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    let shouldUpdateStyles = false;
    for (const key of changedProps.keys()) {
      if (MteIconButton.contentProps.has(key)) {
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
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("label")) {
      if (this.overlayTriggerElement && !this.overlayTriggerElement.overlayElement) {
        this.overlayTriggerElement.overlayElement = this.tooltipElement;
        this.overlayTriggerElement.triggerElement = this;
      }
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
    return html`${this.renderButtonTemplate(
      this.loading ? html`<mte-spinner diameter="${loadingDiameter}"></mte-spinner>` : html`<mte-icon name="${this.icon}" library="${this.iconLibrary}" part="icon"></mte-icon>`
    )} ${this.label ? html`<mte-overlay-trigger id="trigger"></mte-overlay-trigger><mte-tooltip id="tooltip" position="${this.labelPosition}" asAriaLabel ?disabled="${this.disabled}" withoutA11y>${this.label}</mte-tooltip>` : null}`;
  }
};
MteIconButton.styles = [styles3, styles, styles2, styles4, styles5];
// List of props for optimal style update checking
MteIconButton.contentProps = /* @__PURE__ */ new Set([
  "m",
  "mx",
  "my",
  "mt",
  "mr",
  "mb",
  "ml",
  "borderColor",
  "borderWidth",
  "borderStyle",
  "border",
  "elevation"
]);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteIconButton.prototype, "filled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteIconButton.prototype, "outlined", 2);
__decorateClass([
  property()
], MteIconButton.prototype, "icon", 2);
__decorateClass([
  property()
], MteIconButton.prototype, "iconLibrary", 2);
__decorateClass([
  property({ type: Boolean })
], MteIconButton.prototype, "loading", 2);
__decorateClass([
  property({ reflect: true })
], MteIconButton.prototype, "label", 2);
__decorateClass([
  property({ reflect: true })
], MteIconButton.prototype, "labelPosition", 2);
__decorateClass([
  property({ attribute: "aria-label", reflect: true })
], MteIconButton.prototype, "ariaLabel", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "m", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "mx", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "my", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "mt", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "mr", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "mb", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "ml", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "borderColor", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "borderWidth", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "borderStyle", 2);
__decorateClass([
  property({ type: Boolean, reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "border", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "elevation", 2);
__decorateClass([
  query("#tooltip")
], MteIconButton.prototype, "tooltipElement", 2);
__decorateClass([
  query("#trigger")
], MteIconButton.prototype, "overlayTriggerElement", 2);
__decorateClass([
  onUpdate(["label", "ariaLabel"], { on: "both" })
], MteIconButton.prototype, "handleLabelChange", 1);
MteIconButton = __decorateClass([
  defineElement("mte-icon-button")
], MteIconButton);

export {
  defaultButtonBorderFactory,
  MteIconButton
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24iLCAiLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24vaWNvbi1idXR0b24uc3R5bGVzLnRzIiwgIi4uLy4uLy4uL3NyYy9hdG9taWMvYnV0dG9uL2J1dHRvbi1jb21tb24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLXBhZGRpbmcteTp2YXIoLS1tdGUtc3BhY2Utc20pOy0tcGFkZGluZy14OnZhcigtLXBhZGRpbmcteSk7LS1ib3JkZXItcmFkaXVzOnZhcigtLWdyb3VwLXJhZGl1cyx2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1mdWxsKSk7LS1mb2N1cy1yYWRpdXM6dmFyKC0tZ3JvdXAtZm9jdXMtcmFkaXVzLHZhcigtLW10ZS1ib3JkZXItcmFkaXVzLWZ1bGwpKTstLWljb24tc2l6ZToxNnB4Oy0tY29sb3I6aW5oZXJpdH06aG9zdChbcmFkaXVzPXNtXSl7LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXNtKTstLWZvY3VzLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCl9Omhvc3QgbXRlLWljb257aGVpZ2h0OnZhcigtLWljb24tc2l6ZSk7bWluLWhlaWdodDp2YXIoLS1pY29uLXNpemUpO21pbi13aWR0aDp2YXIoLS1pY29uLXNpemUpO3dpZHRoOnZhcigtLWljb24tc2l6ZSl9Omhvc3QoW3NpemU9c21dKSBtdGUtaWNvbnstLWljb24tc2l6ZToxMnB4fTpob3N0KFtzaXplPWxnXSkgbXRlLWljb257LS1pY29uLXNpemU6MjBweH1gOyIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQgeyBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMsIGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRCdXR0b25Cb3JkZXJGYWN0b3J5ID0gKHdpZHRoPywgY29sb3I/LCBzdHlsZT8pID0+XG4gIGAke3N0eWxlID8/ICdzb2xpZCd9ICR7XG4gICAgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzKFtcbiAgICAgIHsgcHJvcDogJ2JvcmRlcldpZHRoJywgdmFsdWU6IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUod2lkdGggPz8gJzFweCcpIH0sXG4gICAgXSlbMF0/LnZhbHVlXG4gIH0gJHtkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKGNvbG9yKSA/PyBjb25maWcuY29sb3IuYm9yZGVyMX1gO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBMkIsWUFBWTtBQUN2QyxTQUFTLFVBQVUsYUFBYTs7O0FDSGhDLFNBQVMsV0FBVztBQUFhLElBQU1BLFVBQVM7OztBQ0d6QyxJQUFNLDZCQUE2QixDQUFDLE9BQVEsT0FBUSxVQUN6RCxHQUFHLFNBQVMsT0FBTyxJQUNqQix5QkFBeUI7QUFBQSxFQUN2QixFQUFFLE1BQU0sZUFBZSxPQUFPLHVCQUF1QixTQUFTLEtBQUssRUFBRTtBQUN2RSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQ1QsSUFBSSx1QkFBdUIsS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPOzs7QUYyQ3BELElBQU0sZ0JBQU4sY0FBNEI7RUFDakM7SUFDRTtNQUNFO1FBQ0U7VUFDRSxtQkFBcUMsZUFBZTtZQUNsRCxZQUFZLGdCQUF1RCxVQUFVLENBQUM7VUFDaEY7UUFDRjtNQUNGO0lBQ0Y7RUFDRjtBQUNGLEVBQUU7RUFaSzs7QUFnQnVDLGtCQUFTO0FBR1Qsb0JBQVc7QUFNM0MsdUJBQWM7QUFHRyxtQkFBVTtBQU1WLHlCQUFxQzs7RUE2RTFELG9CQUFvQjtBQUMxQixRQUFJLEtBQUssT0FBTztBQUNkLFdBQUssWUFBWSxLQUFLO0lBQ3hCO0VBQ0Y7RUFFVSxxQkFBcUIsY0FBZ0M7QUFDN0Qs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
