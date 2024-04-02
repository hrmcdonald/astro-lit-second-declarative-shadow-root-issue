import "../../chunks/chunk.K7IFCJCW.js";
import "../../chunks/chunk.D4QL7DP6.js";
import "../../chunks/chunk.L7F3KXB6.js";
import {
  FieldsetMixin,
  MteElement,
  ResponsiveValueConverter,
  SlotObserverMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  styles5 as styles,
  styles7 as styles2
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/fieldset/fieldset.element.ts
import { html } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

// src/atomic/fieldset/fieldset.styles.ts
import { css } from "lit";
var styles3 = css`:host{--control-min-width:0px;display:block}.control-container{display:block}fieldset{border:none;margin:0}fieldset,legend{padding:0}`;

// src/atomic/fieldset/fieldset.element.ts
import { selectorFactory } from "@mortar/styles";
var nextUniqueId = 0;
var MteFieldset = class extends FieldsetMixin(
  SlotObserverMixin(StylePartsMixin(MteElement))
) {
  constructor() {
    super(...arguments);
    this.id = `mte-fieldset--${nextUniqueId++}`;
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("d")) {
      this.setInstanceStyle("mte-fieldset", selectorFactory(this.instanceStyleSelectorRoot), {
        d: this.d
      });
    }
  }
  render() {
    return html`${this.renderFieldsetTemplate(html`<slot></slot>`, {
      containerTemplate: (contents, classes) => html`<fieldset name="${ifDefined(this.name)}" form="${ifDefined(this.form)}" class="${classes}">${contents}</fieldset>`,
      labelTemplate: (contents, classes) => html`<legend class="${classes}">${contents}</legend>`
    })}`;
  }
};
MteFieldset.styles = [styles2, styles, styles3];
__decorateClass([
  property({ reflect: true })
], MteFieldset.prototype, "id", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteFieldset.prototype, "d", 2);
__decorateClass([
  property({ type: String })
], MteFieldset.prototype, "name", 2);
__decorateClass([
  property({ type: String })
], MteFieldset.prototype, "form", 2);
MteFieldset = __decorateClass([
  defineElement("mte-fieldset")
], MteFieldset);
export {
  MteFieldset
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9maWVsZHNldCIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2ZpZWxkc2V0L2ZpZWxkc2V0LnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tY29udHJvbC1taW4td2lkdGg6MHB4O2Rpc3BsYXk6YmxvY2t9LmNvbnRyb2wtY29udGFpbmVye2Rpc3BsYXk6YmxvY2t9ZmllbGRzZXR7Ym9yZGVyOm5vbmU7bWFyZ2luOjB9ZmllbGRzZXQsbGVnZW5ke3BhZGRpbmc6MH1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLFlBQVk7QUFDckIsU0FBUyxnQkFBZ0I7QUFDekIsU0FBUyxpQkFBaUI7OztBQ0YxQixTQUFTLFdBQVc7QUFBYSxJQUFNQSxVQUFTOzs7QURpQmhELFNBQVMsdUJBQXVCO0FBU2hDLElBQUksZUFBZTtBQWlCWixJQUFNLGNBQU4sY0FBMEI7RUFDL0Isa0JBQWtCLGdCQUFxRCxVQUFVLENBQUM7QUFDcEYsRUFBRTtFQUZLOztBQU13QixjQUFLLGlCQUFpQixjQUFjOztFQXdCdkQscUJBQXFCLGNBQWdDO0FBQzdELFVBQU0scUJBQXFCLFlBQVk7QUFFdkMsUUFBSSxhQUFhLElBQUksR0FBRyxHQUFHO0FBQ3pCLFdBQUssaUJBQWlCLGdCQUFnQixnQkFBZ0IsS0FBSyx5QkFBeUIsR0FBRztRQUNyRixHQUFHLEtBQUs7TUFDVixDQUFDO0lBQ0g7RUFDRjtFQUVBLFNBQVM7QUFDUCxXQUFPLE9BQ0gsS0FBSyx1QkFBdUIscUJBQXFCO01BQ2pELG1CQUFtQixDQUFDLFVBQVUsWUFDNUIsdUJBQXNCLFVBQVUsS0FBSyxJQUFJLENBQUMsV0FBUyxVQUFVLEtBQUssSUFBSSxDQUFDLFlBQVUsT0FBTyxLQUNwRixRQUFRO01BRWQsZUFBZSxDQUFDLFVBQVUsWUFBWSxzQkFBcUIsT0FBTyxLQUFJLFFBQVE7SUFDaEYsQ0FBQyxDQUFDO0VBRU47QUFDRjtBQW5EYSxZQUdKLFNBQVMsQ0FBQ0MsU0FBWSxRQUFnQkEsT0FBTTtBQUd0QjtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FOaEIsWUFNa0I7QUFHcUM7RUFBakUsU0FBUyxFQUFFLFNBQVMsTUFBTSxXQUFXLHlCQUF5QixDQUFDO0dBVHJELFlBU3VEO0FBZ0J0QztFQUEzQixTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7R0F6QmYsWUF5QmlCO0FBR0E7RUFBM0IsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0dBNUJmLFlBNEJpQjtBQTVCakIsY0FBTjtFQUROLGNBQWMsY0FBYztHQUNoQjsiLAogICJuYW1lcyI6IFsic3R5bGVzIiwgInN0eWxlcyJdCn0K
