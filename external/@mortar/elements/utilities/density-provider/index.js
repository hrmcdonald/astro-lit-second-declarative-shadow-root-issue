import {
  MteElement,
  __decorateClass,
  defineElement,
  isSsr,
  onUpdate
} from "../../chunks/chunk.KVXAK6W4.js";

// src/utilities/density-provider/density-provider.element.ts
import { property } from "lit/decorators.js";
import { ContextProvider } from "@lit-labs/context";
import { html } from "lit";

// src/utilities/density-provider/density.context.ts
import { createContext } from "@lit-labs/context";
var densityContext = createContext("MTE_DENSITY");

// src/utilities/density-provider/density-provider.styles.ts
import { css } from "lit";
var styles = css`:host{box-sizing:border-box;display:contents}:host([_density=compact]){--mte-space-xxs:var(--mte-space-compact-xxs);--mte-space-xs:var(--mte-space-compact-xs);--mte-space-sm:var(--mte-space-compact-sm);--mte-space-md:var(--mte-space-compact-md);--mte-space-lg:var(--mte-space-compact-lg);--mte-space-xl:var(--mte-space-compact-xl);--mte-space-xxl:var(--mte-space-compact-xxl);--mte-space-xxxl:var(--mte-space-compact-xxxl)}:host([_density=comfy]){--mte-space-xxs:var(--mte-space-comfy-xxs);--mte-space-xs:var(--mte-space-comfy-xs);--mte-space-sm:var(--mte-space-comfy-sm);--mte-space-md:var(--mte-space-comfy-md);--mte-space-lg:var(--mte-space-comfy-lg);--mte-space-xl:var(--mte-space-comfy-xl);--mte-space-xxl:var(--mte-space-comfy-xxl);--mte-space-xxxl:var(--mte-space-comfy-xxxl)}:host([_density=roomy]){--mte-space-xxs:var(--mte-space-roomy-xxs);--mte-space-xs:var(--mte-space-roomy-xs);--mte-space-sm:var(--mte-space-roomy-sm);--mte-space-md:var(--mte-space-roomy-md);--mte-space-lg:var(--mte-space-roomy-lg);--mte-space-xl:var(--mte-space-roomy-xl);--mte-space-xxl:var(--mte-space-roomy-xxl);--mte-space-xxxl:var(--mte-space-roomy-xxxl)}`;

// src/utilities/density-provider/density-provider.element.ts
var MteDensityProvider = class extends MteElement {
  handleDensityChange() {
    if (this.density === void 0) {
      this.requestUpdate("density", null);
    }
    this.densityContextProvider?.setValue(this.density);
    if (this.density) {
      this.setAttribute("_density", this.density);
    } else {
      this.removeAttribute("_density");
    }
  }
  constructor() {
    super();
    if (!isSsr()) {
      this.densityContextProvider = new ContextProvider(this, {
        context: densityContext,
        initialValue: void 0
      });
    }
  }
  render() {
    return html`${this.instanceStyles}<slot></slot>`;
  }
};
MteDensityProvider.styles = [styles];
__decorateClass([
  property({ reflect: true })
], MteDensityProvider.prototype, "density", 2);
__decorateClass([
  onUpdate("density", { on: "both" })
], MteDensityProvider.prototype, "handleDensityChange", 1);
MteDensityProvider = __decorateClass([
  defineElement("mte-density-provider")
], MteDensityProvider);
export {
  MteDensityProvider,
  densityContext
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL3V0aWxpdGllcy9kZW5zaXR5LXByb3ZpZGVyL2RlbnNpdHktcHJvdmlkZXIuZWxlbWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvdXRpbGl0aWVzL2RlbnNpdHktcHJvdmlkZXIvZGVuc2l0eS5jb250ZXh0LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZGVuc2l0eS1wcm92aWRlci9kZW5zaXR5LXByb3ZpZGVyLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBDb250ZXh0UHJvdmlkZXIgfSBmcm9tICdAbGl0LWxhYnMvY29udGV4dCc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IGRlZmluZUVsZW1lbnQsIERlbnNpdHlPcHRpb25zLCBpc1NzciwgTXRlRWxlbWVudCwgb25VcGRhdGUgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IGRlbnNpdHlDb250ZXh0IH0gZnJvbSAnLi9kZW5zaXR5LmNvbnRleHQnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9kZW5zaXR5LXByb3ZpZGVyLnN0eWxlcyc7XG5cbi8qKlxuICogQHNsb3QgLSBEZWZhdWx0IHNsb3R0ZWQgY29udGVudFxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLWRlbnNpdHktcHJvdmlkZXInKVxuZXhwb3J0IGNsYXNzIE10ZURlbnNpdHlQcm92aWRlciBleHRlbmRzIE10ZUVsZW1lbnQge1xuICBzdGF0aWMgc3R5bGVzID0gW3N0eWxlc107XG5cbiAgLyoqIFRoZSBkZW5zaXR5IHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgdG8gYWxsIGNoaWxkIGVsZW1lbnRzICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgZGVuc2l0eTogRGVuc2l0eU9wdGlvbnM7XG5cbiAgcHJpdmF0ZSBkZW5zaXR5Q29udGV4dFByb3ZpZGVyOiBDb250ZXh0UHJvdmlkZXI8eyBfX2NvbnRleHRfXzogRGVuc2l0eU9wdGlvbnMgfT47XG5cbiAgQG9uVXBkYXRlKCdkZW5zaXR5JywgeyBvbjogJ2JvdGgnIH0pXG4gIHByaXZhdGUgaGFuZGxlRGVuc2l0eUNoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5kZW5zaXR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnZGVuc2l0eScsIG51bGwpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBjb250ZXh0XG4gICAgdGhpcy5kZW5zaXR5Q29udGV4dFByb3ZpZGVyPy5zZXRWYWx1ZSh0aGlzLmRlbnNpdHkpO1xuXG4gICAgLy8gSGFuZGxlIGF0dHJpYnV0ZSBmb3Igc3R5bGluZyBwdXJwb3Nlc1xuICAgIGlmICh0aGlzLmRlbnNpdHkpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdfZGVuc2l0eScsIHRoaXMuZGVuc2l0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdfZGVuc2l0eScpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyBXYWl0IHRvIGluaXQgY29udGV4dCBwcm92aWRlciB1bnRpbCBoZXJlIHNvIHdlIGNhbiBhdm9pZCBkb2luZyBzbyBkdXJpbmcgU1NSIGZvciBub3dcbiAgICAvLyBUT0RPKHJlZWNlKTogaW5pdCBub3JtYWxseSB3aGVuIGV2ZW50cyBhcmUgc3VwcG9ydGVkIGJ5IFNTUjogaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzMzNjVcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIHRoaXMuZGVuc2l0eUNvbnRleHRQcm92aWRlciA9IG5ldyBDb250ZXh0UHJvdmlkZXIodGhpcywge1xuICAgICAgICBjb250ZXh0OiBkZW5zaXR5Q29udGV4dCxcbiAgICAgICAgaW5pdGlhbFZhbHVlOiB1bmRlZmluZWQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgJHt0aGlzLmluc3RhbmNlU3R5bGVzfTxzbG90Pjwvc2xvdD5gO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS1kZW5zaXR5LXByb3ZpZGVyJzogTXRlRGVuc2l0eVByb3ZpZGVyO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ0BsaXQtbGFicy9jb250ZXh0JztcbmltcG9ydCB7IERlbnNpdHlPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBjb25zdCBkZW5zaXR5Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8RGVuc2l0eU9wdGlvbnM+KCdNVEVfREVOU0lUWScpO1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpjb250ZW50c306aG9zdChbX2RlbnNpdHk9Y29tcGFjdF0pey0tbXRlLXNwYWNlLXh4czp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eHMpOy0tbXRlLXNwYWNlLXhzOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1zbSk7LS1tdGUtc3BhY2UtbWQ6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QtbWQpOy0tbXRlLXNwYWNlLWxnOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14bCk7LS1tdGUtc3BhY2UteHhsOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXh4bCk7LS1tdGUtc3BhY2UteHh4bDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eHhsKX06aG9zdChbX2RlbnNpdHk9Y29tZnldKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2UtY29tZnktc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1jb21meS1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1jb21meS14eHhsKX06aG9zdChbX2RlbnNpdHk9cm9vbXldKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLXJvb215LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLXJvb215LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2Utcm9vbXktc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1yb29teS1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLXJvb215LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14eHhsKX1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUFBLFNBQVMsZ0JBQWdCO0FBQ3pCLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsWUFBWTs7O0FDRnJCLFNBQVMscUJBQXFCO0FBR3ZCLElBQU0saUJBQWlCLGNBQThCLGFBQWE7OztBQ0h6RSxTQUFTLFdBQVc7QUFBYSxJQUFNLFNBQVM7OztBRld6QyxJQUFNLHFCQUFOLGNBQWlDLFdBQVc7QUFBQSxFQVN6QyxzQkFBc0I7QUFDNUIsUUFBSSxLQUFLLFlBQVksUUFBVztBQUM5QixXQUFLLGNBQWMsV0FBVyxJQUFJO0FBQUEsSUFDcEM7QUFHQSxTQUFLLHdCQUF3QixTQUFTLEtBQUssT0FBTztBQUdsRCxRQUFJLEtBQUssU0FBUztBQUNoQixXQUFLLGFBQWEsWUFBWSxLQUFLLE9BQU87QUFBQSxJQUM1QyxPQUFPO0FBQ0wsV0FBSyxnQkFBZ0IsVUFBVTtBQUFBLElBQ2pDO0FBQUEsRUFDRjtBQUFBLEVBRUEsY0FBYztBQUNaLFVBQU07QUFJTixRQUFJLENBQUMsTUFBTSxHQUFHO0FBQ1osV0FBSyx5QkFBeUIsSUFBSSxnQkFBZ0IsTUFBTTtBQUFBLFFBQ3RELFNBQVM7QUFBQSxRQUNULGNBQWM7QUFBQSxNQUNoQixDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVM7QUFDUCxXQUFPLE9BQU8sS0FBSyxjQUFjO0FBQUEsRUFDbkM7QUFDRjtBQXpDYSxtQkFDSixTQUFTLENBQUMsTUFBTTtBQUdNO0FBQUEsRUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0FBQUEsR0FKaEIsbUJBSWtCO0FBS3JCO0FBQUEsRUFEUCxTQUFTLFdBQVcsRUFBRSxJQUFJLE9BQU8sQ0FBQztBQUFBLEdBUnhCLG1CQVNIO0FBVEcscUJBQU47QUFBQSxFQUROLGNBQWMsc0JBQXNCO0FBQUEsR0FDeEI7IiwKICAibmFtZXMiOiBbXQp9Cg==
