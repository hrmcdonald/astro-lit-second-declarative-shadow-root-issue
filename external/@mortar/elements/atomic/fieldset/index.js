import "../../chunks/chunk.LWJKRUKG.js";
import "../../chunks/chunk.D4QL7DP6.js";
import "../../chunks/chunk.M5RJHYFW.js";
import {
  FieldsetMixin,
  MteElement,
  ResponsiveValueConverter,
  SlotObserverMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  selectorFactory,
  styles5 as styles,
  styles7 as styles2
} from "../../chunks/chunk.KVXAK6W4.js";

// src/atomic/fieldset/fieldset.element.ts
import { html } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

// src/atomic/fieldset/fieldset.styles.ts
import { css } from "lit";
var styles3 = css`:host{--control-min-width:0px;display:block}.control-container{display:block}fieldset{border:none;margin:0}fieldset,legend{padding:0}`;

// src/atomic/fieldset/fieldset.element.ts
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9maWVsZHNldCIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2ZpZWxkc2V0L2ZpZWxkc2V0LnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tY29udHJvbC1taW4td2lkdGg6MHB4O2Rpc3BsYXk6YmxvY2t9LmNvbnRyb2wtY29udGFpbmVye2Rpc3BsYXk6YmxvY2t9ZmllbGRzZXR7Ym9yZGVyOm5vbmU7bWFyZ2luOjB9ZmllbGRzZXQsbGVnZW5ke3BhZGRpbmc6MH1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsZ0JBQWdCO0FBQ3pCLFNBQVMsaUJBQWlCOzs7QUNGMUIsU0FBUyxXQUFXO0FBQWEsSUFBTUEsVUFBUzs7O0FEMEJoRCxJQUFJLGVBQWU7QUFpQlosSUFBTSxjQUFOLGNBQTBCO0VBQy9CLGtCQUFrQixnQkFBcUQsVUFBVSxDQUFDO0FBQ3BGLEVBQUU7RUFGSzs7QUFNd0IsY0FBSyxpQkFBaUIsY0FBYzs7RUF3QnZELHFCQUFxQixjQUFnQztBQUM3RCxVQUFNLHFCQUFxQixZQUFZO0FBRXZDLFFBQUksYUFBYSxJQUFJLEdBQUcsR0FBRztBQUN6QixXQUFLLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLEtBQUsseUJBQXlCLEdBQUc7UUFDckYsR0FBRyxLQUFLO01BQ1YsQ0FBQztJQUNIO0VBQ0Y7RUFFQSxTQUFTO0FBQ1AsV0FBTyxPQUNILEtBQUssdUJBQXVCLHFCQUFxQjtNQUNqRCxtQkFBbUIsQ0FBQyxVQUFVLFlBQzVCLHVCQUFzQixVQUFVLEtBQUssSUFBSSxDQUFDLFdBQVMsVUFBVSxLQUFLLElBQUksQ0FBQyxZQUFVLE9BQU8sS0FDcEYsUUFBUTtNQUVkLGVBQWUsQ0FBQyxVQUFVLFlBQVksc0JBQXFCLE9BQU8sS0FBSSxRQUFRO0lBQ2hGLENBQUMsQ0FBQztFQUVOO0FBQ0Y7QUFuRGEsWUFHSixTQUFTLENBQUNDLFNBQVksUUFBZ0JBLE9BQU07QUFHdEI7RUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBTmhCLFlBTWtCO0FBR3FDO0VBQWpFLFNBQVMsRUFBRSxTQUFTLE1BQU0sV0FBVyx5QkFBeUIsQ0FBQztHQVRyRCxZQVN1RDtBQWdCdEM7RUFBM0IsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0dBekJmLFlBeUJpQjtBQUdBO0VBQTNCLFNBQVMsRUFBRSxNQUFNLE9BQU8sQ0FBQztHQTVCZixZQTRCaUI7QUE1QmpCLGNBQU47RUFETixjQUFjLGNBQWM7R0FDaEI7IiwKICAibmFtZXMiOiBbInN0eWxlcyIsICJzdHlsZXMiXQp9Cg==
