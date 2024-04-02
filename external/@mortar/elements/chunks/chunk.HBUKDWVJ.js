import {
  MteIconRegistryService
} from "./chunk.L7F3KXB6.js";
import {
  MteContentBase,
  StatusColorMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  eventEmitter,
  styles7 as styles
} from "./chunk.Y4EV6E5D.js";

// src/atomic/composition/header.element.ts
import { html } from "lit";
import { property } from "lit/decorators.js";

// src/atomic/composition/header.styles.ts
import { css } from "lit";
var styles2 = css`:host{--composition-padding-y:var(--mte-space-md);--composition-padding-x:var(--mte-space-md);--composition-divider:none;--action-margin:var(--mte-space-md);align-items:center;border-bottom:var(--composition-divider);direction:row;display:flex;padding:var(--composition-padding-y) var(--composition-padding-x)}:host([withBorder]){--composition-divider:solid 1px var(--mte-border-1)}.title{display:flex;flex-direction:column;justify-content:center}.content{align-items:center;direction:row;display:flex;flex-grow:1}.action{align-self:flex-start;display:block;flex-grow:0;flex-shrink:0;margin-left:var(--action-margin)}`;

// src/atomic/composition/header.element.ts
var MteHeader = class extends StylePartsMixin(
  MteContentBase
) {
  constructor() {
    super(...arguments);
    this.closeAriaLabel = "Close";
    this.closeType = "button";
    this.withBorder = false;
  }
  render() {
    return html`${this.instanceStyles}<slot name="title" class="title" part="title"><mte-title>${this.label}</mte-title></slot><slot class="content" part="content"></slot><slot name="action" class="action" part="action">${this.withClose ? html`<mte-icon-button class="close-button" icon="close" density="compact" type="${this.closeType}" aria-label="${this.closeAriaLabel}" @click="${(e) => {
      this._onClose.emit(e);
      this._doClose.emit(e);
    }}"></mte-icon-button>` : null}</slot>`;
  }
};
MteHeader.styles = [styles, styles2];
__decorateClass([
  property()
], MteHeader.prototype, "label", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteHeader.prototype, "withClose", 2);
__decorateClass([
  property({ reflect: true })
], MteHeader.prototype, "closeAriaLabel", 2);
__decorateClass([
  property({ reflect: true })
], MteHeader.prototype, "closeType", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteHeader.prototype, "withBorder", 2);
__decorateClass([
  eventEmitter()
], MteHeader.prototype, "_onClose", 2);
__decorateClass([
  eventEmitter()
], MteHeader.prototype, "_doClose", 2);
MteHeader = __decorateClass([
  defineElement("mte-header")
], MteHeader);

// src/atomic/composition/content.element.ts
import { html as html2 } from "lit";

// src/atomic/composition/content.styles.ts
import { css as css3 } from "lit";
var styles3 = css3`:host{--composition-padding-y:var(--mte-space-md);--composition-padding-x:var(--mte-space-md);display:block;padding-left:var(--composition-padding-x);padding-right:var(--composition-padding-x);position:relative}:not(mte-header)+:host{padding-top:var(--composition-padding-y)}:host+:not(mte-footer){padding-bottom:var(--composition-padding-y)}`;

// src/atomic/composition/content.element.ts
var MteContent = class extends MteContentBase {
  render() {
    return html2`${this.instanceStyles}<slot></slot>`;
  }
};
MteContent.styles = [styles, styles3];
MteContent = __decorateClass([
  defineElement("mte-content")
], MteContent);

// src/atomic/composition/footer.element.ts
import { html as html3 } from "lit";
import { property as property2 } from "lit/decorators.js";

// src/atomic/composition/footer.styles.ts
import { css as css4 } from "lit";
var styles4 = css4`:host{--composition-padding-y:var(--mte-space-md);--composition-padding-x:var(--mte-space-md);--composition-divider:none;border-top:var(--composition-divider);display:block;padding:var(--composition-padding-y) var(--composition-padding-x)}:host([actions]){align-items:center;display:flex;flex-direction:row;gap:var(--mte-space-sm);justify-content:flex-end}:host([withBorder]){--composition-divider:solid 1px var(--mte-border-1)}`;

// src/atomic/composition/footer.element.ts
var MteFooter = class extends MteContentBase {
  constructor() {
    super(...arguments);
    this.actions = false;
    this.withBorder = false;
  }
  render() {
    return html3`${this.instanceStyles}<slot></slot>`;
  }
};
MteFooter.styles = [styles, styles4];
__decorateClass([
  property2({ type: Boolean, reflect: true })
], MteFooter.prototype, "actions", 2);
__decorateClass([
  property2({ type: Boolean, reflect: true })
], MteFooter.prototype, "withBorder", 2);
MteFooter = __decorateClass([
  defineElement("mte-footer")
], MteFooter);

// src/atomic/composition/condition.element.ts
import { ifDefined } from "lit/directives/if-defined.js";
import { html as html4 } from "lit";
import { property as property3 } from "lit/decorators.js";

// src/atomic/composition/condition.styles.ts
import { css as css5 } from "lit";
var styles5 = css5`:host{align-items:center;color:var(--mte-ink-3);display:flex;justify-content:center;padding:var(--mte-space-sm);text-align:center;width:100%}`;

// src/atomic/composition/condition.element.ts
import {
  mtrIconAlert,
  mtrIconAlertCircle,
  mtrIconCheckCircle,
  mtrIconInformation
} from "@mortar/icons";
MteIconRegistryService.registerIcons([
  mtrIconCheckCircle,
  mtrIconAlertCircle,
  mtrIconAlert,
  mtrIconInformation
]);
var MteCondition = class extends StatusColorMixin(MteContentBase) {
  constructor() {
    super(...arguments);
    this.type = "info";
    this.muted = false;
    this.size = 72;
  }
  render() {
    const icon = this.getIcon(this.icon, this.type);
    return html4`${this.instanceStyles} ${this.loading ? html4`<mte-spinner diameter="${Number(this.size)}"></mte-spinner>` : icon ? html4`<mte-icon name="${icon}" color="${ifDefined(this.getColor(this.color, this.muted, this.type))}" size="${this.size}"></mte-icon>` : null}`;
  }
  getColor(color, muted, type) {
    if (muted) {
      return null;
    }
    if (color) {
      return color;
    }
    switch (type) {
      case "success":
        return "success";
      case "error":
        return "danger";
      case "warn":
        return "warning";
      case "info":
        return "primary";
      case "upload":
      default:
        return null;
    }
  }
  getIcon(icon, type) {
    if (icon) {
      return icon;
    }
    switch (type) {
      case "success":
        return "check-circle";
      case "error":
        return "alert-circle";
      case "warn":
        return "alert";
      case "info":
        return "information";
      case "upload":
        return "cloud-upload";
      default:
        return null;
    }
  }
};
MteCondition.styles = [styles, styles5];
__decorateClass([
  property3({ reflect: true })
], MteCondition.prototype, "type", 2);
__decorateClass([
  property3({ reflect: true })
], MteCondition.prototype, "icon", 2);
__decorateClass([
  property3({ type: Boolean, reflect: true })
], MteCondition.prototype, "muted", 2);
__decorateClass([
  property3({ type: Boolean, reflect: true })
], MteCondition.prototype, "loading", 2);
__decorateClass([
  property3({ type: Number, reflect: true })
], MteCondition.prototype, "size", 2);
MteCondition = __decorateClass([
  defineElement("mte-condition")
], MteCondition);

// src/atomic/composition/section.element.ts
import { html as html5 } from "lit";

// src/atomic/composition/section.styles.ts
import { css as css6 } from "lit";
var styles6 = css6`:host{display:block;position:relative}`;

// src/atomic/composition/section.element.ts
var MteSection = class extends MteContentBase {
  render() {
    return html5`${this.instanceStyles}<slot></slot>`;
  }
};
MteSection.styles = [styles, styles6];
MteSection = __decorateClass([
  defineElement("mte-section")
], MteSection);

export {
  MteHeader,
  MteContent,
  MteFooter,
  MteCondition,
  MteSection
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2F0b21pYy9jb21wb3NpdGlvbiIsICIuLi8uLi8uLi9zcmMvYXRvbWljL2NvbXBvc2l0aW9uL2hlYWRlci5zdHlsZXMudHMiLCAiLi4vLi4vLi4vc3JjL2F0b21pYy9jb21wb3NpdGlvbi9jb250ZW50LmVsZW1lbnQudHMiLCAiLi4vLi4vLi4vc3JjL2F0b21pYy9jb21wb3NpdGlvbi9jb250ZW50LnN0eWxlcy50cyIsICIuLi8uLi8uLi9zcmMvYXRvbWljL2NvbXBvc2l0aW9uL2Zvb3Rlci5lbGVtZW50LnRzIiwgIi4uLy4uLy4uL3NyYy9hdG9taWMvY29tcG9zaXRpb24vZm9vdGVyLnN0eWxlcy50cyIsICIuLi8uLi8uLi9zcmMvYXRvbWljL2NvbXBvc2l0aW9uIiwgIi4uLy4uLy4uL3NyYy9hdG9taWMvY29tcG9zaXRpb24vY29uZGl0aW9uLnN0eWxlcy50cyIsICIuLi8uLi8uLi9zcmMvYXRvbWljL2NvbXBvc2l0aW9uL3NlY3Rpb24uZWxlbWVudC50cyIsICIuLi8uLi8uLi9zcmMvYXRvbWljL2NvbXBvc2l0aW9uL3NlY3Rpb24uc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1jb21wb3NpdGlvbi1wYWRkaW5nLXk6dmFyKC0tbXRlLXNwYWNlLW1kKTstLWNvbXBvc2l0aW9uLXBhZGRpbmcteDp2YXIoLS1tdGUtc3BhY2UtbWQpOy0tY29tcG9zaXRpb24tZGl2aWRlcjpub25lOy0tYWN0aW9uLW1hcmdpbjp2YXIoLS1tdGUtc3BhY2UtbWQpO2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXItYm90dG9tOnZhcigtLWNvbXBvc2l0aW9uLWRpdmlkZXIpO2RpcmVjdGlvbjpyb3c7ZGlzcGxheTpmbGV4O3BhZGRpbmc6dmFyKC0tY29tcG9zaXRpb24tcGFkZGluZy15KSB2YXIoLS1jb21wb3NpdGlvbi1wYWRkaW5nLXgpfTpob3N0KFt3aXRoQm9yZGVyXSl7LS1jb21wb3NpdGlvbi1kaXZpZGVyOnNvbGlkIDFweCB2YXIoLS1tdGUtYm9yZGVyLTEpfS50aXRsZXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmNvbnRlbnR7YWxpZ24taXRlbXM6Y2VudGVyO2RpcmVjdGlvbjpyb3c7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzoxfS5hY3Rpb257YWxpZ24tc2VsZjpmbGV4LXN0YXJ0O2Rpc3BsYXk6YmxvY2s7ZmxleC1ncm93OjA7ZmxleC1zaHJpbms6MDttYXJnaW4tbGVmdDp2YXIoLS1hY3Rpb24tbWFyZ2luKX1gOyIsICJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IGJhc2VTdHlsZXMsIGRlZmluZUVsZW1lbnQsIE10ZUNvbnRlbnRCYXNlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL2NvbnRlbnQuc3R5bGVzJztcblxuLyoqXG4gKlxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLWNvbnRlbnQnKVxuZXhwb3J0IGNsYXNzIE10ZUNvbnRlbnQgZXh0ZW5kcyBNdGVDb250ZW50QmFzZSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbYmFzZVN0eWxlcywgc3R5bGVzXTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgJHt0aGlzLmluc3RhbmNlU3R5bGVzfTxzbG90Pjwvc2xvdD5gO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS1jb250ZW50JzogTXRlQ29udGVudDtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWNvbXBvc2l0aW9uLXBhZGRpbmcteTp2YXIoLS1tdGUtc3BhY2UtbWQpOy0tY29tcG9zaXRpb24tcGFkZGluZy14OnZhcigtLW10ZS1zcGFjZS1tZCk7ZGlzcGxheTpibG9jaztwYWRkaW5nLWxlZnQ6dmFyKC0tY29tcG9zaXRpb24tcGFkZGluZy14KTtwYWRkaW5nLXJpZ2h0OnZhcigtLWNvbXBvc2l0aW9uLXBhZGRpbmcteCk7cG9zaXRpb246cmVsYXRpdmV9Om5vdChtdGUtaGVhZGVyKSs6aG9zdHtwYWRkaW5nLXRvcDp2YXIoLS1jb21wb3NpdGlvbi1wYWRkaW5nLXkpfTpob3N0Kzpub3QobXRlLWZvb3Rlcil7cGFkZGluZy1ib3R0b206dmFyKC0tY29tcG9zaXRpb24tcGFkZGluZy15KX1gOyIsICJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgYmFzZVN0eWxlcywgZGVmaW5lRWxlbWVudCwgTXRlQ29udGVudEJhc2UgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vZm9vdGVyLnN0eWxlcyc7XG5cbi8qKlxuICpcbiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS1mb290ZXInKVxuZXhwb3J0IGNsYXNzIE10ZUZvb3RlciBleHRlbmRzIE10ZUNvbnRlbnRCYXNlIHtcbiAgc3RhdGljIHN0eWxlcyA9IFtiYXNlU3R5bGVzLCBzdHlsZXNdO1xuXG4gIC8qKiBSZW5kZXJzIGNvbnRlbnRzIGluIGEgZW5kIGFsaWduZWQgZmxleCByb3cgd2l0aCBhIGdhcCAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGFjdGlvbnMgPSBmYWxzZTtcblxuICAvKiogQWRkcyBhIGJvdHRvbSBib3JkZXIgdG8gdGhpcyBoZWFkZXIgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRoQm9yZGVyID0gZmFsc2U7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYCR7dGhpcy5pbnN0YW5jZVN0eWxlc308c2xvdD48L3Nsb3Q+YDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdtdGUtZm9vdGVyJzogTXRlRm9vdGVyO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tY29tcG9zaXRpb24tcGFkZGluZy15OnZhcigtLW10ZS1zcGFjZS1tZCk7LS1jb21wb3NpdGlvbi1wYWRkaW5nLXg6dmFyKC0tbXRlLXNwYWNlLW1kKTstLWNvbXBvc2l0aW9uLWRpdmlkZXI6bm9uZTtib3JkZXItdG9wOnZhcigtLWNvbXBvc2l0aW9uLWRpdmlkZXIpO2Rpc3BsYXk6YmxvY2s7cGFkZGluZzp2YXIoLS1jb21wb3NpdGlvbi1wYWRkaW5nLXkpIHZhcigtLWNvbXBvc2l0aW9uLXBhZGRpbmcteCl9Omhvc3QoW2FjdGlvbnNdKXthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztnYXA6dmFyKC0tbXRlLXNwYWNlLXNtKTtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Omhvc3QoW3dpdGhCb3JkZXJdKXstLWNvbXBvc2l0aW9uLWRpdmlkZXI6c29saWQgMXB4IHZhcigtLW10ZS1ib3JkZXItMSl9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjp2YXIoLS1tdGUtaW5rLTMpO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6dmFyKC0tbXRlLXNwYWNlLXNtKTt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDAlfWA7IiwgImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgYmFzZVN0eWxlcywgZGVmaW5lRWxlbWVudCwgTXRlQ29udGVudEJhc2UgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vc2VjdGlvbi5zdHlsZXMnO1xuXG4vKipcbiAqXG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtc2VjdGlvbicpXG5leHBvcnQgY2xhc3MgTXRlU2VjdGlvbiBleHRlbmRzIE10ZUNvbnRlbnRCYXNlIHtcbiAgc3RhdGljIHN0eWxlcyA9IFtiYXNlU3R5bGVzLCBzdHlsZXNdO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGAke3RoaXMuaW5zdGFuY2VTdHlsZXN9PHNsb3Q+PC9zbG90PmA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLXNlY3Rpb24nOiBNdGVTZWN0aW9uO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmV9YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsWUFBWTtBQUNyQixTQUFTLGdCQUFnQjs7O0FDRHpCLFNBQVMsV0FBVztBQUFhLElBQU1BLFVBQVM7OztBRG9DekMsSUFBTSxZQUFOLGNBQXdCO0VBQzdCO0FBQ0YsRUFBRTtFQUZLOztBQVl3QiwwQkFBaUI7QUFHakIscUJBQTJDO0FBRzVCLHNCQUFhOztFQVF6RCxTQUFTO0FBQ1AsV0FBTyxPQUNILEtBQUssY0FBYyw0REFFTixLQUFLLEtBQUssbUhBSXJCLEtBQUssWUFDSCxrRkFJUyxLQUFLLFNBQVMsaUJBQ1IsS0FBSyxjQUFjLGFBQ3ZCLENBQUMsTUFBTTtBQUNkLFdBQUssU0FBUyxLQUFLLENBQUM7QUFDcEIsV0FBSyxTQUFTLEtBQUssQ0FBQztJQUN0QixDQUFDLHlCQUNILElBQUk7RUFHZDtBQUNGO0FBakRhLFVBR0osU0FBUyxDQUFD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Q0gsZUFBTztNQUNULEtBQUs7QUFDSCxlQUFPO01BQ1QsS0FBSztBQUNILGVBQU87TUFDVCxLQUFLO0FBQ0gsZUFBTztNQUNULEtBQUs7QUFDSCxlQUFPO01BQ1Q7QUFDRSxlQUFPO0lBQ1g7RUFDRjtBQUNGO0FBMUVhLGFBQ0osU0FBUyxDQUFDLFFBQVlDLE9BQU07QUFHTjtFQUE1QkMsVUFBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBSmhCLGFBSWtCO0FBR0E7RUFBNUJBLFVBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQVBoQixhQU9rQjtBQUdlO0VBQTNDQSxVQUFTLEVBQUUsTUFBTSxTQUFTLFNBQVMsS0FBSyxDQUFDO0dBVi9CLGFBVWlDO0FBR0E7RUFBM0NBLFVBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FiL0IsYUFhaUM7QUFHRDtFQUExQ0EsVUFBUyxFQUFFLE1BQU0sUUFBUSxTQUFTLEtBQUssQ0FBQztHQWhCOUIsYUFnQmdDO0FBaEJoQyxlQUFOO0VBRE4sY0FBYyxlQUFlO0dBQ2pCOzs7QUUzQmIsU0FBUyxRQUFBQyxhQUFZOzs7QUNBckIsU0FBUyxPQUFBQyxZQUFXO0FBQWEsSUFBTUMsVUFBU0Q7OztBRFF6QyxJQUFNLGFBQU4sY0FBeUIsZUFBZTtBQUFBLEVBRzdDLFNBQVM7QUFDUCxXQUFPRSxRQUFPLEtBQUssY0FBYztBQUFBLEVBQ25DO0FBQ0Y7QUFOYSxXQUNKLFNBQVMsQ0FBQyxRQUFZQyxPQUFNO0FBRHhCLGFBQU47QUFBQSxFQUROLGNBQWMsYUFBYTtBQUFBLEdBQ2Y7IiwKICAibmFtZXMiOiBbInN0eWxlcyIsICJzdHlsZXMiLCAiaHRtbCIsICJjc3MiLCAic3R5bGVzIiwgImh0bWwiLCAic3R5bGVzIiwgImh0bWwiLCAicHJvcGVydHkiLCAiY3NzIiwgInN0eWxlcyIsICJodG1sIiwgInN0eWxlcyIsICJwcm9wZXJ0eSIsICJodG1sIiwgInByb3BlcnR5IiwgImNzcyIsICJzdHlsZXMiLCAiaHRtbCIsICJzdHlsZXMiLCAicHJvcGVydHkiLCAiaHRtbCIsICJjc3MiLCAic3R5bGVzIiwgImh0bWwiLCAic3R5bGVzIl0KfQo=
