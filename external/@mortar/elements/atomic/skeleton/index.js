import {
  MteElement,
  PresetMixinFactory,
  RadiusMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  mapNumberToPx,
  selectorFactory,
  styles7 as styles
} from "../../chunks/chunk.KVXAK6W4.js";

// src/atomic/skeleton/skeleton.element.ts
import { html } from "lit";
import { styleMap } from "lit-html/directives/style-map.js";
import { property } from "lit/decorators.js";

// src/atomic/skeleton/skeleton.styles.ts
import { css } from "lit";
var styles2 = css`:host{--bg-color:var(--mte-grey-3);--shimmer-color:rgba(var(--mte-grey-5-rgb),var(--mte-opacity-xl));display:flex;min-height:.6em;overflow:hidden;position:relative;width:100%}:host([appliedpreset=cx]){--bg-color:var(--mte-grey-3);--shimmer-color:rgba(var(--mte-surface-2-rgb),var(--mte-opacity-xl))}:host(:not([lines])){height:.6em}:host([shape=text]:not([lines])){height:.6em}:host([shape=text]) .indicator{border-radius:var(--mte-border-radius-md);height:.6em}:host([radius=none]) .indicator{border-radius:0}:host([radius=sm]) .indicator{border-radius:var(--mte-border-radius-sm)}:host([radius=md]) .indicator{border-radius:var(--mte-border-radius-md)}:host([radius=lg]) .indicator{border-radius:var(--mte-border-radius-lg)}:host([shape=text][lines]),:host([shape=text][withLineOptions]){flex-direction:column;gap:.75em}:host([shape=circle]){height:1em}.indicator{animation:shimmer 6s ease-in-out infinite;background:var(--bg-color);background:linear-gradient(270deg,var(--shimmer-color),var(--bg-color),var(--bg-color),var(--bg-color),var(--shimmer-color));background-size:400% 100%;flex:1 1 auto}:host([noAnimation]) .indicator{animation:none;background:var(--bg-color)}@media screen and (prefers-reduced-motion:reduce){.indicator{animation:none;background:var(--bg-color)}}@keyframes shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}`;

// src/atomic/skeleton/skeleton.element.ts
var MteSkeleton = class extends RadiusMixin(
  PresetMixinFactory("MteSkeleton", {
    reflectAppliedPreset: true
  })(StylePartsMixin(MteElement))
) {
  constructor() {
    super(...arguments);
    this.shape = "text";
    this.ariaHidden = "true";
    this.withLineOptions = false;
    this.defaultLineOptions = {
      minPercent: 73,
      maxPercent: 93
    };
  }
  /** Update :host dynamic style overrides */
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if ([
      "w",
      "width",
      "h",
      "height",
      "d",
      "diameter",
      "shape",
      "lines",
      "lineOptions",
      "withLineOptions"
    ].some((prop) => changedProps.has(prop))) {
      const parsedWidth = mapNumberToPx(this.w ?? this.width);
      const parsedHeight = mapNumberToPx(this.h ?? this.height);
      const parsedDiameter = mapNumberToPx(this.d ?? this.diameter) ?? "1em";
      const lineOptions = { ...this.defaultLineOptions, ...this.lineOptions ?? {} };
      const styleMap2 = {
        width: `${this.shape === "circle" ? parsedDiameter : parsedWidth}`,
        height: `${this.shape === "circle" ? parsedDiameter : parsedHeight}`,
        borderRadius: `${this.shape === "circle" ? parsedDiameter : null}`,
        gap: `${this.shape === "text" && this.lines && lineOptions.gap ? mapNumberToPx(lineOptions.gap) : null}`
      };
      this.setInstanceStyle(
        "mte-skeleton",
        selectorFactory(this.instanceStyleSelectorRoot),
        styleMap2
      );
    }
  }
  getRandomLineLength(lineOptions) {
    const min = Number(lineOptions.min ?? lineOptions.minPercent);
    const max = Number(lineOptions.max ?? lineOptions.maxPercent);
    return Math.random() * (max - min + 1) + min;
  }
  render() {
    const lineOptions = { ...this.defaultLineOptions, ...this.lineOptions ?? {} };
    const multiLineHeight = mapNumberToPx(lineOptions.h ?? lineOptions.height);
    if (this.shape === "text" && this.lines > 1) {
      return html`${this.instanceStyles}${Array.from(Array(this.lines)).map((_, i) => {
        const lineStyleMap = styleMap({
          height: multiLineHeight,
          width: `${i === this.lines - 1 ? lineOptions.min ?? lineOptions.minPercent : lineOptions.max ?? lineOptions.maxPercent}%`
        });
        return html`<div class="indicator row" part="indicator" style="${lineStyleMap}"></div>`;
      })}`;
    } else if (this.withLineOptions) {
      const lineStyleMap = styleMap({
        height: multiLineHeight,
        width: `${this.getRandomLineLength(lineOptions)}%`
      });
      return html`${this.instanceStyles}<div class="indicator" part="indicator row" style="${lineStyleMap}"></div>`;
    } else {
      return html`${this.instanceStyles}<div class="indicator" part="indicator"></div>`;
    }
  }
};
MteSkeleton.styles = [styles, styles2];
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteSkeleton.prototype, "withoutAnimation", 2);
__decorateClass([
  property({ reflect: true })
], MteSkeleton.prototype, "shape", 2);
__decorateClass([
  property({ reflect: true })
], MteSkeleton.prototype, "width", 2);
__decorateClass([
  property({ reflect: true })
], MteSkeleton.prototype, "w", 2);
__decorateClass([
  property({ reflect: true })
], MteSkeleton.prototype, "height", 2);
__decorateClass([
  property({ reflect: true })
], MteSkeleton.prototype, "h", 2);
__decorateClass([
  property({ reflect: true })
], MteSkeleton.prototype, "diameter", 2);
__decorateClass([
  property({ reflect: true })
], MteSkeleton.prototype, "d", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], MteSkeleton.prototype, "lines", 2);
__decorateClass([
  property({ type: Object, reflect: true })
], MteSkeleton.prototype, "lineOptions", 2);
__decorateClass([
  property({ attribute: "aria-hidden", reflect: true })
], MteSkeleton.prototype, "ariaHidden", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteSkeleton.prototype, "withLineOptions", 2);
MteSkeleton = __decorateClass([
  defineElement("mte-skeleton")
], MteSkeleton);
export {
  MteSkeleton
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9za2VsZXRvbiIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3NrZWxldG9uL3NrZWxldG9uLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tYmctY29sb3I6dmFyKC0tbXRlLWdyZXktMyk7LS1zaGltbWVyLWNvbG9yOnJnYmEodmFyKC0tbXRlLWdyZXktNS1yZ2IpLHZhcigtLW10ZS1vcGFjaXR5LXhsKSk7ZGlzcGxheTpmbGV4O21pbi1oZWlnaHQ6LjZlbTtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX06aG9zdChbYXBwbGllZHByZXNldD1jeF0pey0tYmctY29sb3I6dmFyKC0tbXRlLWdyZXktMyk7LS1zaGltbWVyLWNvbG9yOnJnYmEodmFyKC0tbXRlLXN1cmZhY2UtMi1yZ2IpLHZhcigtLW10ZS1vcGFjaXR5LXhsKSl9Omhvc3QoOm5vdChbbGluZXNdKSl7aGVpZ2h0Oi42ZW19Omhvc3QoW3NoYXBlPXRleHRdOm5vdChbbGluZXNdKSl7aGVpZ2h0Oi42ZW19Omhvc3QoW3NoYXBlPXRleHRdKSAuaW5kaWNhdG9ye2JvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpO2hlaWdodDouNmVtfTpob3N0KFtyYWRpdXM9bm9uZV0pIC5pbmRpY2F0b3J7Ym9yZGVyLXJhZGl1czowfTpob3N0KFtyYWRpdXM9c21dKSAuaW5kaWNhdG9ye2JvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtc20pfTpob3N0KFtyYWRpdXM9bWRdKSAuaW5kaWNhdG9ye2JvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpfTpob3N0KFtyYWRpdXM9bGddKSAuaW5kaWNhdG9ye2JvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbGcpfTpob3N0KFtzaGFwZT10ZXh0XVtsaW5lc10pLDpob3N0KFtzaGFwZT10ZXh0XVt3aXRoTGluZU9wdGlvbnNdKXtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOi43NWVtfTpob3N0KFtzaGFwZT1jaXJjbGVdKXtoZWlnaHQ6MWVtfS5pbmRpY2F0b3J7YW5pbWF0aW9uOnNoaW1tZXIgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7YmFja2dyb3VuZDp2YXIoLS1iZy1jb2xvcik7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMjcwZGVnLHZhcigtLXNoaW1tZXItY29sb3IpLHZhcigtLWJnLWNvbG9yKSx2YXIoLS1iZy1jb2xvciksdmFyKC0tYmctY29sb3IpLHZhcigtLXNoaW1tZXItY29sb3IpKTtiYWNrZ3JvdW5kLXNpemU6NDAwJSAxMDAlO2ZsZXg6MSAxIGF1dG99Omhvc3QoW25vQW5pbWF0aW9uXSkgLmluZGljYXRvcnthbmltYXRpb246bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWJnLWNvbG9yKX1AbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5pbmRpY2F0b3J7YW5pbWF0aW9uOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1iZy1jb2xvcil9fUBrZXlmcmFtZXMgc2hpbW1lcnswJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjIwMCUgMH10b3tiYWNrZ3JvdW5kLXBvc2l0aW9uOi0yMDAlIDB9fWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVMsWUFBWTtBQUNyQixTQUFTLGdCQUFnQjtBQUN6QixTQUFTLGdCQUFnQjs7O0FDSHpCLFNBQVMsV0FBVztBQUFhLElBQU1BLFVBQVM7OztBRG1EekMsSUFBTSxjQUFOLGNBQTBCO0VBQy9CLG1CQUFtQyxlQUFlO0lBQ2hELHNCQUFzQjtFQUN4QixDQUFDLEVBQUUsZ0JBQXFELFVBQVUsQ0FBQztBQUNyRSxFQUFFO0VBSks7O0FBZXdCLGlCQUFvQztBQTJCVixzQkFBYTtBQUd4QiwyQkFBa0I7QUFFOUQsU0FBUSxxQkFBNkM7TUFDbkQsWUFBWTtNQUNaLFlBQVk7SUFDZDs7O0VBR1UscUJBQXFCLGNBQWM7QUFDM0MsVUFBTSxxQkFBcUIsWUFBWTtBQUV2QyxRQUNFO01BQ0U7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDRixFQUFFLEtBQUssQ0FBQyxTQUFTLGFBQWEsSUFBSSxJQUFJLENBQUMsR0FDdkM7QUFDQSxZQUFNLGNBQWMsY0FBYyxLQUFLLEtBQUssS0FBSyxLQUFLO0FBQ3RELFlBQU0sZUFBZSxjQUFjLEtBQUssS0FBSyxLQUFLLE1BQU07QUFDeEQsWUFBTSxpQkFBaUIsY0FBYyxLQUFLLEtBQUssS0FBSyxRQUFRLEtBQUs7QUFDakUsWUFBTSxjQUFjLEVBQUUsR0FBRyxLQUFLLG9CQUFvQixHQUFJLEtBQUssZUFBZSxDQUFDLEVBQUc7QUFFOUUsWUFBTUMsWUFBVztRQUNmLE9BQU8sR0FBRyxLQUFLLFVBQVUsV0FBVyxpQkFBaUIsV0FBVztRQUNoRSxRQUFRLEdBQUcsS0FBSyxVQUFVLFdBQVcsaUJBQWlCLFlBQVk7UUFDbEUsY0FBYyxHQUFHLEtBQUssVUFBVSxXQUFXLGlCQUFpQixJQUFJO1FBQ2hFLEtBQUssR0FDSCxLQUFLLFVBQVUsVUFBVSxLQUFLLFNBQVMsWUFBWSxNQUMvQyxjQUFjLFlBQVksR0FBRyxJQUM3QixJQUNOO01BQ0Y7QUFHQSxXQUFLO1FBQ0g7UUFDQSxnQkFBZ0IsS0FBSyx5QkFBeUI7UUFDOUNBO01BQ0Y7SUFDRjtFQUNGO0VBRVEsb0JBQW9CLGFBQXFDO0FBQy9ELFVBQU0sTUFBTSxPQUFPLFlBQVksT0FBTyxZQUFZLFVBQVU7QUFDNUQsVUFBTSxNQUFNLE9BQU8sWUFBWSxPQUFPLFlBQVksVUFBVTtBQUM1RCxXQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sTUFBTSxLQUFLO0VBQzNDO0VBRUEsU0FBUztBQUNQLFVBQU0sY0FBYyxFQUFFLEdBQUcsS0FBSyxvQkFBb0IsR0FBSSxLQUFLLGVBQWUsQ0FBQyxFQUFHO0FBQzlFLFVBQU0sa0JBQWtCLGNBQWMsWUFBWSxLQUFLLFlBQVksTUFBTTtBQUV6RSxRQUFJLEtBQUssVUFBVSxVQUFVLEtBQUssUUFBUSxHQUFHO0FBQzNDLGFBQU8sT0FBTyxLQUFLLGNBQWMsR0FBRyxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLE1BQU07QUFDOUUsY0FBTSxlQUFlLFNBQVM7VUFDNUIsUUFBUTtVQUNSLE9BQU8sR0FDTCxNQUFNLEtBQUssUUFBUSxJQUNmLFlBQVksT0FBTyxZQUFZLGFBQy9CLFlBQVksT0FBTyxZQUFZLFVBQ3JDO1FBQ0YsQ0FBQztBQUNELGVBQU8sMERBQXlELFlBQVk7TUFDOUUsQ0FBQyxDQUFDO0lBQ0osV0FBVyxLQUFLLGlCQUFpQjtBQUMvQixZQUFNLGVBQWUsU0FBUztRQUM1QixRQUFRO1FBQ1IsT0FBTyxHQUFHLEtBQUssb0JBQW9CLFdBQVcsQ0FBQztNQUNqRCxDQUFDO0FBQ0QsYUFBTyxPQUFPLEtBQUssY0FBYyxzREFDcUIsWUFBWTtJQUNwRSxPQUFPO0FBQ0wsYUFBTyxPQUFPLEtBQUssY0FBYztJQUVuQztFQUNGO0FBQ0Y7QUFqSWEsWUFLSixTQUFTLENBQUMsUUFBWUMsT0FBTTtBQUdTO0VBQTNDLFNBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FSL0IsWUFRaUM7QUFPZjtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FmaEIsWUFla0I7QUFHQTtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FsQmhCLFlBa0JrQjtBQUdBO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQXJCaEIsWUFxQmtCO0FBR0E7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBeEJoQixZQXdCa0I7QUFHQTtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0EzQmhCLFlBMkJrQjtBQUdBO0VBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQTlCaEIsWUE4QmtCO0FBR0E7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBakNoQixZQWlDa0I7QUFHYztFQUExQyxTQUFTLEVBQUUsTUFBTSxRQUFRLFNBQVMsS0FBSyxDQUFDO0dBcEM5QixZQW9DZ0M7QUFHQTtFQUExQyxTQUFTLEVBQUUsTUFBTSxRQUFRLFNBQVMsS0FBSyxDQUFDO0dBdkM5QixZQXVDZ0M7QUFHWTtFQUF0RCxTQUFTLEVBQUUsV0FBVyxlQUFlLFNBQVMsS0FBSyxDQUFDO0dBMUMxQyxZQTBDNEM7QUFHWDtFQUEzQyxTQUFTLEVBQUUsTUFBTSxTQUFTLFNBQVMsS0FBSyxDQUFDO0dBN0MvQixZQTZDaUM7QUE3Q2pDLGNBQU47RUFETixjQUFjLGNBQWM7R0FDaEI7IiwKICAibmFtZXMiOiBbInN0eWxlcyIsICJzdHlsZU1hcCIsICJzdHlsZXMiXQp9Cg==
