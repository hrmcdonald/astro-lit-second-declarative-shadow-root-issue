import {
  MteIconRegistryService,
  mtrIconAlertCircle
} from "./chunk.M5RJHYFW.js";
import {
  DisabledMixin,
  MteElement,
  __decorateClass,
  defineElement,
  styles7 as styles
} from "./chunk.KVXAK6W4.js";

// src/atomic/form-elements/description.element.ts
import { html } from "lit";
import { property } from "lit/decorators.js";

// src/atomic/form-elements/description.styles.ts
import { css } from "lit";
var styles2 = css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mte-ink-2);display:block;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);margin:var(--mte-space-xs) 0;text-decoration:inherit;text-transform:inherit;width:100%}`;

// src/atomic/form-elements/description.element.ts
var nextUniqueId = 0;
var MteDescription = class extends MteElement {
  constructor() {
    super(...arguments);
    this.id = `mte-description--${nextUniqueId++}`;
  }
  render() {
    return html`${this.instanceStyles}<slot></slot>`;
  }
};
MteDescription.styles = [styles, styles2];
__decorateClass([
  property({ reflect: true })
], MteDescription.prototype, "id", 2);
MteDescription = __decorateClass([
  defineElement("mte-description")
], MteDescription);
var MteDescriptionText = class extends MteDescription {
};
MteDescriptionText = __decorateClass([
  defineElement("mte-description-text")
], MteDescriptionText);

// src/atomic/form-elements/error.element.ts
import { html as html2 } from "lit";
import { property as property2 } from "lit/decorators.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { when } from "lit-html/directives/when.js";

// src/atomic/form-elements/error.styles.ts
import { css as css2 } from "lit";
var styles3 = css2`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;align-items:center;background:rgb(var(--mte-core-danger-lighter-rgb));border-radius:var(--mte-border-radius-xs);color:rgb(var(--mte-core-danger-base-rgb));display:flex;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);font-weight:var(--mte-font-weight-medium);gap:var(--mte-space-xs);line-height:var(--mte-font-set-caption-line-height);margin:var(--mte-space-xs) 0;overflow:hidden;padding:0 var(--mte-space-xs);text-decoration:inherit;text-transform:inherit;width:100%}`;

// src/atomic/form-elements/error.element.ts
MteIconRegistryService.registerIcons([mtrIconAlertCircle]);
var nextUniqueId2 = 0;
var MteError = class extends MteElement {
  constructor() {
    super(...arguments);
    this.iconLibrary = "_default";
    this.hideIcon = false;
    this.id = `mte-error--${nextUniqueId2++}`;
  }
  render() {
    return html2`${this.instanceStyles} ${when(
      !this.hideIcon,
      () => html2`<mte-icon autosize part="icon" aria-hidden="true" name="${this.icon || "alert-circle"}" library="${ifDefined(this.iconLibrary)}"></mte-icon>`
    )}<slot></slot>`;
  }
};
MteError.styles = [styles, styles3];
__decorateClass([
  property2()
], MteError.prototype, "iconLibrary", 2);
__decorateClass([
  property2()
], MteError.prototype, "icon", 2);
__decorateClass([
  property2({ type: Boolean })
], MteError.prototype, "hideIcon", 2);
__decorateClass([
  property2({ reflect: true })
], MteError.prototype, "id", 2);
MteError = __decorateClass([
  defineElement("mte-error")
], MteError);
var MteErrorText = class extends MteError {
};
MteErrorText = __decorateClass([
  defineElement("mte-error-text")
], MteErrorText);

// src/atomic/form-elements/hint.element.ts
import { html as html3 } from "lit";
import { property as property3 } from "lit/decorators.js";

// src/atomic/form-elements/hint.styles.ts
import { css as css3 } from "lit";
var styles4 = css3`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mte-ink-2);display:block;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);font-weight:var(--mte-font-weight-medium);line-height:var(--mte-font-set-caption-line-height);margin:var(--mte-space-xs) 0;overflow:hidden;text-decoration:inherit;text-transform:inherit;width:100%}`;

// src/atomic/form-elements/hint.element.ts
var nextUniqueId3 = 0;
var MteHint = class extends MteElement {
  constructor() {
    super(...arguments);
    this.id = `mte-hint--${nextUniqueId3++}`;
  }
  render() {
    return html3`${this.instanceStyles}<slot></slot>`;
  }
};
MteHint.styles = [styles, styles4];
__decorateClass([
  property3({ reflect: true })
], MteHint.prototype, "id", 2);
MteHint = __decorateClass([
  defineElement("mte-hint")
], MteHint);
var MteHintText = class extends MteHint {
};
MteHintText = __decorateClass([
  defineElement("mte-hint-text")
], MteHintText);

// src/atomic/form-elements/label.element.ts
import { html as html4 } from "lit";
import { property as property4 } from "lit/decorators.js";

// src/atomic/form-elements/label.styles.ts
import { css as css4 } from "lit";
var styles5 = css4`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;align-items:center;color:inherit;cursor:inherit;display:block;font-size:var(--mte-font-set-body2-font-size);font-weight:var(--mte-font-set-body2-font-weight);font-weight:var(--mte-font-weight-bold);line-height:var(--mte-font-set-body2-line-height);margin:var(--mte-space-xs) 0;text-decoration:inherit;text-transform:inherit}:host([disabled]){color:var(--mte-disabled-4);cursor:not-allowed}.required{color:rgb(var(--mte-core-danger-base-rgb));padding-left:var(--mte-space-xs)}`;

// src/atomic/form-elements/label.element.ts
var nextUniqueId4 = 0;
var MteLabel = class extends DisabledMixin(MteElement) {
  constructor() {
    super(...arguments);
    this.id = `mte-label--${nextUniqueId4++}`;
  }
  render() {
    return html4`${this.instanceStyles}<slot></slot>${this.showRequired ? html4`<span class="required" aria-hidden="true">*</span>` : null}`;
  }
};
MteLabel.styles = [styles, styles5];
__decorateClass([
  property4({ reflect: true })
], MteLabel.prototype, "id", 2);
__decorateClass([
  property4({ type: Boolean, reflect: true })
], MteLabel.prototype, "showRequired", 2);
MteLabel = __decorateClass([
  defineElement("mte-label")
], MteLabel);
var MteLabelText = class extends MteLabel {
};
MteLabelText = __decorateClass([
  defineElement("mte-label-text")
], MteLabelText);

export {
  MteDescription,
  MteDescriptionText,
  MteError,
  MteErrorText,
  MteHint,
  MteHintText,
  MteLabel,
  MteLabelText
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2F0b21pYy9mb3JtLWVsZW1lbnRzL2Rlc2NyaXB0aW9uLmVsZW1lbnQudHMiLCAiLi4vLi4vLi4vc3JjL2F0b21pYy9mb3JtLWVsZW1lbnRzL2Rlc2NyaXB0aW9uLnN0eWxlcy50cyIsICIuLi8uLi8uLi9zcmMvYXRvbWljL2Zvcm0tZWxlbWVudHMiLCAiLi4vLi4vLi4vc3JjL2F0b21pYy9mb3JtLWVsZW1lbnRzL2Vycm9yLnN0eWxlcy50cyIsICIuLi8uLi8uLi9zcmMvYXRvbWljL2Zvcm0tZWxlbWVudHMvaGludC5lbGVtZW50LnRzIiwgIi4uLy4uLy4uL3NyYy9hdG9taWMvZm9ybS1lbGVtZW50cy9oaW50LnN0eWxlcy50cyIsICIuLi8uLi8uLi9zcmMvYXRvbWljL2Zvcm0tZWxlbWVudHMiLCAiLi4vLi4vLi4vc3JjL2F0b21pYy9mb3JtLWVsZW1lbnRzL2xhYmVsLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IGJhc2VTdHlsZXMsIGRlZmluZUVsZW1lbnQsIE10ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vZGVzY3JpcHRpb24uc3R5bGVzJztcblxubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbi8qKlxuICogRWxlbWVudCB1c2VkIHRvIHJlcHJlc2VudCBkZXNjcmlwdGlvbiBtZXNzYWdpbmcgdGV4dFxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLWRlc2NyaXB0aW9uJylcbmV4cG9ydCBjbGFzcyBNdGVEZXNjcmlwdGlvbiBleHRlbmRzIE10ZUVsZW1lbnQge1xuICBzdGF0aWMgc3R5bGVzID0gW2Jhc2VTdHlsZXMsIHN0eWxlc107XG5cbiAgLyoqIERlZmF1bHQgdW5pcXVlIElEIGZvciB0aGlzIGhpbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBpZCA9IGBtdGUtZGVzY3JpcHRpb24tLSR7bmV4dFVuaXF1ZUlkKyt9YDtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgJHt0aGlzLmluc3RhbmNlU3R5bGVzfTxzbG90Pjwvc2xvdD5gO1xuICB9XG59XG5cbi8qKlxuICogRWxlbWVudCB1c2VkIHRvIHJlcHJlc2VudCBkZXNjcmlwdGlvbiBtZXNzYWdpbmcgdGV4dFxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLWRlc2NyaXB0aW9uLXRleHQnKVxuZXhwb3J0IGNsYXNzIE10ZURlc2NyaXB0aW9uVGV4dCBleHRlbmRzIE10ZURlc2NyaXB0aW9uIHt9XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS1kZXNjcmlwdGlvbic6IE10ZURlc2NyaXB0aW9uO1xuICAgICdtdGUtZGVzY3JpcHRpb24tdGV4dCc6IE10ZURlc2NyaXB0aW9uVGV4dDtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Y29sb3I6dmFyKC0tbXRlLWluay0yKTtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtd2VpZ2h0KTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1saW5lLWhlaWdodCk7bWFyZ2luOnZhcigtLW10ZS1zcGFjZS14cykgMDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3dpZHRoOjEwMCV9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWxpZ2h0ZXItcmdiKSk7Ym9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14cyk7Y29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1iYXNlLXJnYikpO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXdlaWdodCk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7Z2FwOnZhcigtLW10ZS1zcGFjZS14cyk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tbGluZS1oZWlnaHQpO21hcmdpbjp2YXIoLS1tdGUtc3BhY2UteHMpIDA7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MCB2YXIoLS1tdGUtc3BhY2UteHMpO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7d2lkdGg6MTAwJX1gOyIsICJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgYmFzZVN0eWxlcywgZGVmaW5lRWxlbWVudCwgTXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL2NvcmUvJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vaGludC5zdHlsZXMnO1xuXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuLyoqXG4gKiBFbGVtZW50IHVzZWQgdG8gcmVwcmVzZW50IGhpbnQgbWVzc2FnaW5nIHRleHRcbiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS1oaW50JylcbmV4cG9ydCBjbGFzcyBNdGVIaW50IGV4dGVuZHMgTXRlRWxlbWVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbYmFzZVN0eWxlcywgc3R5bGVzXTtcblxuICAvKiogRGVmYXVsdCB1bmlxdWUgSUQgZm9yIHRoaXMgaGludCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGlkID0gYG10ZS1oaW50LS0ke25leHRVbmlxdWVJZCsrfWA7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYCR7dGhpcy5pbnN0YW5jZVN0eWxlc308c2xvdD48L3Nsb3Q+YDtcbiAgfVxufVxuXG4vKipcbiAqIEVsZW1lbnQgdXNlZCB0byByZXByZXNlbnQgaGludCBtZXNzYWdpbmcgdGV4dFxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLWhpbnQtdGV4dCcpXG5leHBvcnQgY2xhc3MgTXRlSGludFRleHQgZXh0ZW5kcyBNdGVIaW50IHt9XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS1oaW50JzogTXRlSGludDtcbiAgICAnbXRlLWhpbnQtdGV4dCc6IE10ZUhpbnRUZXh0O1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtjb2xvcjp2YXIoLS1tdGUtaW5rLTIpO2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC13ZWlnaHQpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXdlaWdodC1tZWRpdW0pO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWxpbmUtaGVpZ2h0KTttYXJnaW46dmFyKC0tbXRlLXNwYWNlLXhzKSAwO292ZXJmbG93OmhpZGRlbjt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3dpZHRoOjEwMCV9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDthbGlnbi1pdGVtczpjZW50ZXI7Y29sb3I6aW5oZXJpdDtjdXJzb3I6aW5oZXJpdDtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC13ZWlnaHQpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXdlaWdodC1ib2xkKTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItbGluZS1oZWlnaHQpO21hcmdpbjp2YXIoLS1tdGUtc3BhY2UteHMpIDA7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdH06aG9zdChbZGlzYWJsZWRdKXtjb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtNCk7Y3Vyc29yOm5vdC1hbGxvd2VkfS5yZXF1aXJlZHtjb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2Vy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UztBQUNQLFdBQU9DLFFBQ0gsS0FBSyxjQUFjLGdCQUVuQixLQUFLLGVBQWVBLDREQUEyRCxJQUFJO0VBRXpGO0FBQ0Y7QUFoQmEsU0FDSixTQUFTLENBQUMsUUFBWUMsT0FBTTtBQUdOO0VBQTVCQyxVQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FKaEIsU0FJa0I7QUFHZTtFQUEzQ0EsVUFBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQVAvQixTQU9pQztBQVBqQyxXQUFOO0VBRE4sY0FBYyxXQUFXO0dBQ2I7QUFzQk4sSUFBTSxlQUFOLGNBQTJCLFNBQVM7QUFBQztBQUEvQixlQUFOO0VBRE4sY0FBYyxnQkFBZ0I7R0FDbEI7IiwKICAibmFtZXMiOiBbInN0eWxlcyIsICJzdHlsZXMiLCAiaHRtbCIsICJwcm9wZXJ0eSIsICJjc3MiLCAic3R5bGVzIiwgIm5leHRVbmlxdWVJZCIsICJodG1sIiwgInN0eWxlcyIsICJwcm9wZXJ0eSIsICJodG1sIiwgInByb3BlcnR5IiwgImNzcyIsICJzdHlsZXMiLCAibmV4dFVuaXF1ZUlkIiwgImh0bWwiLCAic3R5bGVzIiwgInByb3BlcnR5IiwgImh0bWwiLCAicHJvcGVydHkiLCAiY3NzIiwgInN0eWxlcyIsICJuZXh0VW5pcXVlSWQiLCAiaHRtbCIsICJzdHlsZXMiLCAicHJvcGVydHkiXQp9Cg==
