import {
  MteContentBase,
  __decorateClass,
  defineElement,
  mapNumberToPx,
  onUpdate
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/utilities/media-query/media-query.element.ts
import { html } from "lit";
import { property, state } from "lit/decorators.js";

// src/utilities/media-query/media-query.styles.ts
import { css } from "lit";
var styles = css`:host{box-sizing:border-box;display:contents}`;

// src/utilities/media-query/media-query.element.ts
import { config, selectorFactory } from "@mortar/styles";
var MteMediaQuery = class extends MteContentBase {
  constructor() {
    super(...arguments);
    this.selectorSuffix = "";
  }
  handleQueryChange() {
    this.selectorSuffix = this.styles ? " > ::slotted(*)" : "";
    this.queryStyles = this.generateQueryStyles(
      this.smallerThan,
      this.largerThan,
      this.query,
      this.styles
    );
  }
  generateQueryStyles(smallerThan, largerThan, query, styles2) {
    smallerThan = smallerThan ?? void 0;
    largerThan = largerThan ?? void 0;
    const smt = config.grid.breakpoint[smallerThan] ?? mapNumberToPx(smallerThan);
    const lgt = config.grid.breakpoint[largerThan] ?? mapNumberToPx(largerThan);
    let queryStyles = {};
    if (styles2 === void 0 && (largerThan !== void 0 || smallerThan !== void 0)) {
      styles2 = { display: `contents !important` };
      queryStyles = { display: "none !important" };
    }
    if (largerThan !== void 0 && smallerThan !== void 0) {
      queryStyles[`@media (min-width: ${lgt}) and (max-width: calc(${smt} - 1px))`] = styles2;
    } else {
      if (largerThan !== void 0) {
        queryStyles[`@media (min-width: ${lgt})`] = styles2;
      } else {
        queryStyles[`@media (max-width: calc(${smt} - 1px))`] = styles2;
      }
    }
    if (query) {
      queryStyles[query] = styles2;
    }
    return queryStyles;
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("queryStyles")) {
      this.setInstanceStyle(
        "media-query",
        selectorFactory(`${this.instanceStyleSelectorRoot}:host${this.selectorSuffix}`),
        this.queryStyles ?? {}
      );
    }
  }
  render() {
    return html`${this.instanceStyles}<slot></slot>`;
  }
};
MteMediaQuery.styles = [styles];
__decorateClass([
  property({ reflect: true })
], MteMediaQuery.prototype, "smallerThan", 2);
__decorateClass([
  property({ reflect: true })
], MteMediaQuery.prototype, "largerThan", 2);
__decorateClass([
  property({ reflect: true })
], MteMediaQuery.prototype, "query", 2);
__decorateClass([
  property({ reflect: true })
], MteMediaQuery.prototype, "styles", 2);
__decorateClass([
  state()
], MteMediaQuery.prototype, "queryStyles", 2);
__decorateClass([
  state()
], MteMediaQuery.prototype, "selectorSuffix", 2);
__decorateClass([
  onUpdate(["largerThan", "smallerThan", "query", "styles"], { on: "both" })
], MteMediaQuery.prototype, "handleQueryChange", 1);
MteMediaQuery = __decorateClass([
  defineElement("mte-media-query")
], MteMediaQuery);
export {
  MteMediaQuery
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL3V0aWxpdGllcy9tZWRpYS1xdWVyeS9tZWRpYS1xdWVyeS5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy91dGlsaXRpZXMvbWVkaWEtcXVlcnkvbWVkaWEtcXVlcnkuc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIGRlZmluZUVsZW1lbnQsXG4gIFN0eWxlTWFwLFxuICBtYXBOdW1iZXJUb1B4LFxuICBvblVwZGF0ZSxcbiAgTXRlQ29udGVudEJhc2UsXG4gIGlzU3NyLFxufSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vbWVkaWEtcXVlcnkuc3R5bGVzJztcbmltcG9ydCB7IGNvbmZpZywgc2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuXG4vKipcbiAqIEBzbG90IC0gRGVmYXVsdCBzbG90dGVkIGNvbnRlbnRcbiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS1tZWRpYS1xdWVyeScpXG5leHBvcnQgY2xhc3MgTXRlTWVkaWFRdWVyeSBleHRlbmRzIE10ZUNvbnRlbnRCYXNlIHtcbiAgc3RhdGljIHN0eWxlcyA9IFtzdHlsZXNdO1xuXG4gIC8qKiBTdHlsZXMgYXBwbGllZCB0byBjaGlsZCB3aGVuIHZpZXdwb3J0IGlzIHNtYWxsZXIgdGhhbiBnaXZlbiBicmVha3BvaW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgc21hbGxlclRoYW4/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IG51bWJlciB8IHN0cmluZztcblxuICAvKiogU3R5bGVzIGFwcGxpZWQgdG8gY2hpbGQgd2hlbiB2aWV3cG9ydCBpcyBsYXJnZXIgdGhhbiBnaXZlbiBicmVha3BvaW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbGFyZ2VyVGhhbj86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgbnVtYmVyIHwgc3RyaW5nO1xuXG4gIC8qKiBBbnkgb3RoZXIgbWVkaWEgcXVlcnkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBxdWVyeT86IHN0cmluZztcblxuICAvKiogU3R5bGVzIGFwcGxpZWQgdG8gY2hpbGQgd2hlbiBicmVha3BvaW50IG1hdGNoZXMgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBzdHlsZXM/OiBTdHlsZU1hcDtcblxuICBAc3RhdGUoKSBwcml2YXRlIHF1ZXJ5U3R5bGVzPzogU3R5bGVNYXA7XG5cbiAgQHN0YXRlKCkgcHJpdmF0ZSBzZWxlY3RvclN1ZmZpeCA9ICcnO1xuXG4gIEBvblVwZGF0ZShbJ2xhcmdlclRoYW4nLCAnc21hbGxlclRoYW4nLCAncXVlcnknLCAnc3R5bGVzJ10sIHsgb246ICdib3RoJyB9KVxuICBwcml2YXRlIGhhbmRsZVF1ZXJ5Q2hhbmdlKCkge1xuICAgIHRoaXMuc2VsZWN0b3JTdWZmaXggPSB0aGlzLnN0eWxlcyA/ICcgPiA6OnNsb3R0ZWQoKiknIDogJyc7XG4gICAgdGhpcy5xdWVyeVN0eWxlcyA9IHRoaXMuZ2VuZXJhdGVRdWVyeVN0eWxlcyhcbiAgICAgIHRoaXMuc21hbGxlclRoYW4sXG4gICAgICB0aGlzLmxhcmdlclRoYW4sXG4gICAgICB0aGlzLnF1ZXJ5LFxuICAgICAgdGhpcy5zdHlsZXNcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVF1ZXJ5U3R5bGVzKFxuICAgIHNtYWxsZXJUaGFuPzogbnVtYmVyIHwgc3RyaW5nLFxuICAgIGxhcmdlclRoYW4/OiBzdHJpbmcgfCBudW1iZXIsXG4gICAgcXVlcnk/OiBzdHJpbmcsXG4gICAgc3R5bGVzPzogU3R5bGVNYXBcbiAgKSB7XG4gICAgLy8gRW5zdXJlIHZhbHVlcyBhcmUgdW5kZWZpbmVkIGFuZCBub3QgbnVsbFxuICAgIHNtYWxsZXJUaGFuID0gc21hbGxlclRoYW4gPz8gdW5kZWZpbmVkO1xuICAgIGxhcmdlclRoYW4gPSBsYXJnZXJUaGFuID8/IHVuZGVmaW5lZDtcblxuICAgIC8vIFBhcnNlIHZhbHVlc1xuICAgIGNvbnN0IHNtdCA9IGNvbmZpZy5ncmlkLmJyZWFrcG9pbnRbc21hbGxlclRoYW5dID8/IG1hcE51bWJlclRvUHgoc21hbGxlclRoYW4pO1xuICAgIGNvbnN0IGxndCA9IGNvbmZpZy5ncmlkLmJyZWFrcG9pbnRbbGFyZ2VyVGhhbl0gPz8gbWFwTnVtYmVyVG9QeChsYXJnZXJUaGFuKTtcbiAgICBsZXQgcXVlcnlTdHlsZXMgPSB7fTtcblxuICAgIC8vIEFzc3VtZSB1c2VyIHdhbnRzIHRvIGhpZGUgaWYgbm8gc3R5bGVzIGFyZSBkZWZpbmVkIGJ1dCBicmVha3BvaW50cyBhcmVcbiAgICBpZiAoc3R5bGVzID09PSB1bmRlZmluZWQgJiYgKGxhcmdlclRoYW4gIT09IHVuZGVmaW5lZCB8fCBzbWFsbGVyVGhhbiAhPT0gdW5kZWZpbmVkKSkge1xuICAgICAgc3R5bGVzID0geyBkaXNwbGF5OiBgY29udGVudHMgIWltcG9ydGFudGAgfTtcbiAgICAgIHF1ZXJ5U3R5bGVzID0geyBkaXNwbGF5OiAnbm9uZSAhaW1wb3J0YW50JyB9O1xuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIHN0eWxlIG1hcFxuICAgIGlmIChsYXJnZXJUaGFuICE9PSB1bmRlZmluZWQgJiYgc21hbGxlclRoYW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcXVlcnlTdHlsZXNbYEBtZWRpYSAobWluLXdpZHRoOiAke2xndH0pIGFuZCAobWF4LXdpZHRoOiBjYWxjKCR7c210fSAtIDFweCkpYF0gPSBzdHlsZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChsYXJnZXJUaGFuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcXVlcnlTdHlsZXNbYEBtZWRpYSAobWluLXdpZHRoOiAke2xndH0pYF0gPSBzdHlsZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWVyeVN0eWxlc1tgQG1lZGlhIChtYXgtd2lkdGg6IGNhbGMoJHtzbXR9IC0gMXB4KSlgXSA9IHN0eWxlcztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBxdWVyeVN0eWxlc1txdWVyeV0gPSBzdHlsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5U3R5bGVzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ3F1ZXJ5U3R5bGVzJykpIHtcbiAgICAgIC8vIFNldCBtZWRpYSBxdWVyeSBzdHlsZXMgd2l0aCBvbmUgaGlnaGVyIHNwZWNpZmljaXR5IHRoYXQgYHNlYCBzdHlsZXNcbiAgICAgIHRoaXMuc2V0SW5zdGFuY2VTdHlsZShcbiAgICAgICAgJ21lZGlhLXF1ZXJ5JyxcbiAgICAgICAgc2VsZWN0b3JGYWN0b3J5KGAke3RoaXMuaW5zdGFuY2VTdHlsZVNlbGVjdG9yUm9vdH06aG9zdCR7dGhpcy5zZWxlY3RvclN1ZmZpeH1gKSxcbiAgICAgICAgdGhpcy5xdWVyeVN0eWxlcyA/PyB7fVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgJHt0aGlzLmluc3RhbmNlU3R5bGVzfTxzbG90Pjwvc2xvdD5gO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS1tZWRpYS1xdWVyeSc6IE10ZU1lZGlhUXVlcnk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6Y29udGVudHN9YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7QUFBQSxTQUFTLFlBQVk7QUFDckIsU0FBUyxVQUFVLGFBQWE7OztBQ0RoQyxTQUFTLFdBQVc7QUFBYSxJQUFNLFNBQVM7OztBRFdoRCxTQUFTLFFBQVEsdUJBQXVCO0FBTWpDLElBQU0sZ0JBQU4sY0FBNEIsZUFBZTtBQUFBLEVBQTNDO0FBQUE7QUFpQkksU0FBUSxpQkFBaUI7QUFBQTtBQUFBLEVBRzFCLG9CQUFvQjtBQUMxQixTQUFLLGlCQUFpQixLQUFLLFNBQVMsb0JBQW9CO0FBQ3hELFNBQUssY0FBYyxLQUFLO0FBQUEsTUFDdEIsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQUEsRUFFUSxvQkFDTixhQUNBLFlBQ0EsT0FDQUEsU0FDQTtBQUVBLGtCQUFjLGVBQWU7QUFDN0IsaUJBQWEsY0FBYztBQUczQixVQUFNLE1BQU0sT0FBTyxLQUFLLFdBQVcsV0FBVyxLQUFLLGNBQWMsV0FBVztBQUM1RSxVQUFNLE1BQU0sT0FBTyxLQUFLLFdBQVcsVUFBVSxLQUFLLGNBQWMsVUFBVTtBQUMxRSxRQUFJLGNBQWMsQ0FBQztBQUduQixRQUFJQSxZQUFXLFdBQWMsZUFBZSxVQUFhLGdCQUFnQixTQUFZO0FBQ25GLE1BQUFBLFVBQVMsRUFBRSxTQUFTLHNCQUFzQjtBQUMxQyxvQkFBYyxFQUFFLFNBQVMsa0JBQWtCO0FBQUEsSUFDN0M7QUFHQSxRQUFJLGVBQWUsVUFBYSxnQkFBZ0IsUUFBVztBQUN6RCxrQkFBWSxzQkFBc0IsR0FBRywwQkFBMEIsR0FBRyxVQUFVLElBQUlBO0FBQUEsSUFDbEYsT0FBTztBQUNMLFVBQUksZUFBZSxRQUFXO0FBQzVCLG9CQUFZLHNCQUFzQixHQUFHLEdBQUcsSUFBSUE7QUFBQSxNQUM5QyxPQUFPO0FBQ0wsb0JBQVksMkJBQTJCLEdBQUcsVUFBVSxJQUFJQTtBQUFBLE1BQzFEO0FBQUEsSUFDRjtBQUNBLFFBQUksT0FBTztBQUNULGtCQUFZLEtBQUssSUFBSUE7QUFBQSxJQUN2QjtBQUVBLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFVSxxQkFBcUIsY0FBYztBQUMzQyxVQUFNLHFCQUFxQixZQUFZO0FBQ3ZDLFFBQUksYUFBYSxJQUFJLGFBQWEsR0FBRztBQUVuQyxXQUFLO0FBQUEsUUFDSDtBQUFBLFFBQ0EsZ0JBQWdCLEdBQUcsS0FBSyx5QkFBeUIsUUFBUSxLQUFLLGNBQWMsRUFBRTtBQUFBLFFBQzlFLEtBQUssZUFBZSxDQUFDO0FBQUEsTUFDdkI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsU0FBUztBQUNQLFdBQU8sT0FBTyxLQUFLLGNBQWM7QUFBQSxFQUNuQztBQUNGO0FBbkZhLGNBQ0osU0FBUyxDQUFDLE1BQU07QUFHTTtBQUFBLEVBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztBQUFBLEdBSmhCLGNBSWtCO0FBR0E7QUFBQSxFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFBQSxHQVBoQixjQU9rQjtBQUdBO0FBQUEsRUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0FBQUEsR0FWaEIsY0FVa0I7QUFHQTtBQUFBLEVBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztBQUFBLEdBYmhCLGNBYWtCO0FBRVo7QUFBQSxFQUFoQixNQUFNO0FBQUEsR0FmSSxjQWVNO0FBRUE7QUFBQSxFQUFoQixNQUFNO0FBQUEsR0FqQkksY0FpQk07QUFHVDtBQUFBLEVBRFAsU0FBUyxDQUFDLGNBQWMsZUFBZSxTQUFTLFFBQVEsR0FBRyxFQUFFLElBQUksT0FBTyxDQUFDO0FBQUEsR0FuQi9ELGNBb0JIO0FBcEJHLGdCQUFOO0FBQUEsRUFETixjQUFjLGlCQUFpQjtBQUFBLEdBQ25COyIsCiAgIm5hbWVzIjogWyJzdHlsZXMiXQp9Cg==
