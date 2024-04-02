import "../../chunks/chunk.JVVZWO6D.js";
import "../../chunks/chunk.D4QL7DP6.js";
import {
  MteIconRegistryService,
  mtrIconCircleOutline
} from "../../chunks/chunk.M5RJHYFW.js";
import {
  MteElement,
  StatusColorMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  styles7 as styles
} from "../../chunks/chunk.KVXAK6W4.js";

// src/atomic/timeline/timeline.element.ts
import { html } from "lit";
import { property } from "lit/decorators.js";

// src/atomic/timeline/timeline.styles.ts
import { css } from "lit";
var styles2 = css`:host{--gap:32px;display:inline-grid;grid-auto-flow:dense}:host([orientation=vertical]){-moz-column-gap:16px;column-gap:16px;grid-template-columns:repeat(3,max-content);row-gap:var(--gap);--item-description-text-alignment:right;--item-content-text-alignment:left;--item-description-placement:flex-end;--item-content-grid-column:3/3;--item-grid-column:2/2;--item-description-grid-column:1/1;--item-description-alignment:flex-start;--item-content-alignment:flex-start;--before-item-content-alignment:center;--before-item-content-placement:flex-end;--before-item-description-placement:flex-start;--before-item-content-text-alignment:right;--before-item-description-grid-column:3/3;--before-item-content-grid-column:1/1}:host([align=before][orientation=vertical]){--item-description-grid-column:3/3;--item-content-grid-column:1/1;--item-content-placement:flex-end;--item-content-text-alignment:right;--item-description-placement:flex-start}:host([orientation=horizontal]){-moz-column-gap:var(--gap);column-gap:var(--gap);grid-template-rows:repeat(3,max-content);row-gap:16px;text-align:center;--item-content-grid-row:1/1;--item-grid-row:2/2;--item-description-grid-row:3/3;--item-text-alignment:center;--item-alignment:center;--item-content-placement:center;--item-content-alignment:flex-end;--item-description-alignment:flex-start;--item-description-placement:center;--before-item-description-grid-row:1/1;--before-item-content-grid-row:3/3;--before-item-content-alignment:flex-start;--before-item-description-alignment:flex-end;--before-item-description-placement:center;--before-item-text-alignment:center}:host([align=before][orientation=horizontal]){--item-content-grid-row:3/3;--item-description-grid-row:1/1;--item-content-alignment:flex-start;--item-description-alignment:flex-end;--item-description-placement:center}:host([orientation=vertical]) ::slotted(mte-timeline-item[size=sm]){--icon-padding:5px;--vector-height:calc(100% + 12px)}:host([orientation=vertical]) ::slotted(mte-timeline-item[size=md]){--icon-padding:3px;--vector-height:calc(100% + 6px)}:host([orientation=vertical]) ::slotted(mte-timeline-item){--vector-start-display:none;--vector-vertical-start:calc(var(--icon-size) + var(--icon-padding))}:host([orientation=horizontal]) ::slotted(mte-timeline-item[size=sm]){--icon-padding:6px}:host([orientation=horizontal]) ::slotted(mte-timeline-item[size=md]){--icon-padding:10px}:host([orientation=horizontal]) ::slotted(mte-timeline-item){--display:block;--vector-width:calc(50% + var(--gap)*0.5 - var(--icon-size) + var(--icon-padding));--vector-horizontal-start:calc(var(--gap)*-1*0.5);--vector-horizontal-end:calc(var(--gap)*-1*0.5)}:host([orientation=horizontal]) ::slotted(mte-timeline-item[vector=indeterminate]){--vector-horizontal-end:calc(var(--gap)*-1*0.5 - 2px)}`;

// src/atomic/timeline/timeline.element.ts
var MteTimeline = class extends StylePartsMixin(MteElement) {
  constructor() {
    super(...arguments);
    this.orientation = "vertical";
    this.align = "after";
    this.role = "list";
  }
  render() {
    return html`${this.instanceStyles}<slot></slot>`;
  }
};
MteTimeline.styles = [styles, styles2];
__decorateClass([
  property({ reflect: true })
], MteTimeline.prototype, "orientation", 2);
__decorateClass([
  property({ reflect: true })
], MteTimeline.prototype, "align", 2);
__decorateClass([
  property({ reflect: true })
], MteTimeline.prototype, "role", 2);
MteTimeline = __decorateClass([
  defineElement("mte-timeline")
], MteTimeline);

// src/atomic/timeline/timeline-item.element.ts
import { html as html2 } from "lit";
import { property as property2 } from "lit/decorators.js";

// src/atomic/timeline/timeline-item.styles.ts
import { css as css2 } from "lit";
var styles3 = css2`:host{--vector-color-start:var(--mte-border-3);--vector-color-end:var(--mte-border-3);--vector-style-start:solid;--vector-style-end:solid;display:contents}.description{align-items:var(--item-description-alignment,center);display:flex;grid-column:var(--item-description-grid-column);grid-row:var(--item-description-grid-row);justify-content:var(--item-description-placement);text-align:var(--item-description-text-alignment)}.node{align-items:var(--item-alignment);display:flex;grid-column:var(--item-grid-column);grid-row:var(--item-grid-row);justify-content:center;position:relative}.content{align-items:var(--item-content-alignment,center);display:flex;grid-column:var(--item-content-grid-column);grid-row:var(--item-content-grid-row);justify-content:var(--item-content-placement);max-width:30ch;text-align:var(--item-content-text-alignment)}:host([align=before]) .content{--item-content-grid-row:var(--before-item-content-grid-row);--item-content-grid-column:var(--before-item-content-grid-column);--item-content-alignment:var(--before-item-content-alignment);--item-content-placement:var(--before-item-content-placement);--item-content-text-alignment:var(--before-item-content-text-alignment)}:host([align=before]) .description{--item-description-alignment:var(--before-item-description-alignment);--item-description-placement:var(--before-item-description-placement);--item-description-grid-row:var(--before-item-description-grid-row);--item-description-grid-column:var(--before-item-description-grid-column)}.node mte-icon{padding:3px;z-index:1}:host([size=sm]){--icon-size:16px}:host([size=md]){--icon-size:24px}:host(:not(:first-of-type)) .node:before,:host(:not(:last-of-type)) .node:after{content:"";height:var(--vector-height);position:absolute;width:var(--vector-width)}.node:before{border:1px var(--vector-style-start) var(--vector-color-start);display:var(--vector-start-display);left:var(--vector-horizontal-start)}.node:after{border:1px var(--vector-style-end) var(--vector-color-end);right:var(--vector-horizontal-end);top:var(--vector-vertical-start)}:host([vector=indeterminate]) .node:after{--vector-style-end:dashed}:host([color=primary][vector=filled]){--vector-color-end:rgb(var(--mte-status-primary-base-rgb))}:host([color=secondary][vector=filled]){--vector-color-end:rgb(var(--mte-status-secondary-base-rgb))}:host([color=tertiary][vector=filled]){--vector-color-end:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=success][vector=filled]){--vector-color-end:rgb(var(--mte-status-success-base-rgb))}:host([color=warning][vector=filled]){--vector-color-end:rgb(var(--mte-status-warning-base-rgb))}:host([color=danger][vector=filled]){--vector-color-end:rgb(var(--mte-status-danger-base-rgb))}`;

// src/atomic/timeline/timeline-item.element.ts
MteIconRegistryService.registerIcons([mtrIconCircleOutline]);
var MteTimelineItem = class extends StatusColorMixin(
  StylePartsMixin(MteElement)
) {
  constructor() {
    super(...arguments);
    this.align = "after";
    this.icon = "circle-outline";
    this.vector = "default";
    this.size = "md";
    this.role = "listitem";
  }
  setIconSize() {
    if (this.size === "sm") {
      return 16;
    }
    if (this.size === "md") {
      return 24;
    }
  }
  render() {
    return html2`${this.instanceStyles}<div class="description" part="description"><mte-text muted>${this.description}</mte-text></div><div class="node"><mte-icon part="node" name="${this.icon}" color="${this.color}" size="${this.setIconSize()}"></mte-icon></div><div class="content"><slot></slot></div>`;
  }
};
MteTimelineItem.styles = [styles, styles3];
__decorateClass([
  property2({ reflect: true })
], MteTimelineItem.prototype, "description", 2);
__decorateClass([
  property2({ reflect: true })
], MteTimelineItem.prototype, "align", 2);
__decorateClass([
  property2({ reflect: true })
], MteTimelineItem.prototype, "icon", 2);
__decorateClass([
  property2({ reflect: true })
], MteTimelineItem.prototype, "vector", 2);
__decorateClass([
  property2({ reflect: true })
], MteTimelineItem.prototype, "size", 2);
__decorateClass([
  property2({ reflect: true })
], MteTimelineItem.prototype, "role", 2);
MteTimelineItem = __decorateClass([
  defineElement("mte-timeline-item")
], MteTimelineItem);
export {
  MteTimeline,
  MteTimelineItem
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90aW1lbGluZS90aW1lbGluZS5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGltZWxpbmUvdGltZWxpbmUuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGltZWxpbmUiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90aW1lbGluZS90aW1lbGluZS1pdGVtLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIE10ZUVsZW1lbnQsXG4gIGRlZmluZUVsZW1lbnQsXG4gIE10ZUVsZW1lbnRQYXJ0cyxcbiAgU3R5bGVQYXJ0c01peGluLFxuICBiYXNlU3R5bGVzLFxufSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vdGltZWxpbmUuc3R5bGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBNdGVUaW1lbGluZVBhcnRzIGV4dGVuZHMgTXRlRWxlbWVudFBhcnRzIHt9XG5cbi8qKlxuICogQHNsb3QgLSBEZWZhdWx0IHNsb3R0ZWQgY29udGVudFxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLXRpbWVsaW5lJylcbmV4cG9ydCBjbGFzcyBNdGVUaW1lbGluZSBleHRlbmRzIFN0eWxlUGFydHNNaXhpbjxNdGVUaW1lbGluZVBhcnRzLCB0eXBlb2YgTXRlRWxlbWVudD4oTXRlRWxlbWVudCkge1xuICBzdGF0aWMgc3R5bGVzID0gW2Jhc2VTdHlsZXMsIHN0eWxlc107XG5cbiAgLyogU2V0IHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgdGltZWxpbmUgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICd2ZXJ0aWNhbCc7XG5cbiAgLyogU2V0IGhvdyBhbGwgdGltZWluZSBpdGVtcyB3aWxsIGJlIHBsYWNlZCByZWxhdGl2ZSB0byB0aGUgdGltZWxpbmUgdmVjdG9yICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgYWxpZ246ICdiZWZvcmUnIHwgJ2FmdGVyJyA9ICdhZnRlcic7XG5cbiAgLyoqIERlZmluZXMgcm9sZSBvZiB0aGUgdGltZWxpbmUgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSByb2xlID0gJ2xpc3QnO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGAke3RoaXMuaW5zdGFuY2VTdHlsZXN9PHNsb3Q+PC9zbG90PmA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLXRpbWVsaW5lJzogTXRlVGltZWxpbmU7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1nYXA6MzJweDtkaXNwbGF5OmlubGluZS1ncmlkO2dyaWQtYXV0by1mbG93OmRlbnNlfTpob3N0KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF0pey1tb3otY29sdW1uLWdhcDoxNnB4O2NvbHVtbi1nYXA6MTZweDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsbWF4LWNvbnRlbnQpO3Jvdy1nYXA6dmFyKC0tZ2FwKTstLWl0ZW0tZGVzY3JpcHRpb24tdGV4dC1hbGlnbm1lbnQ6cmlnaHQ7LS1pdGVtLWNvbnRlbnQtdGV4dC1hbGlnbm1lbnQ6bGVmdDstLWl0ZW0tZGVzY3JpcHRpb24tcGxhY2VtZW50OmZsZXgtZW5kOy0taXRlbS1jb250ZW50LWdyaWQtY29sdW1uOjMvMzstLWl0ZW0tZ3JpZC1jb2x1bW46Mi8yOy0taXRlbS1kZXNjcmlwdGlvbi1ncmlkLWNvbHVtbjoxLzE7LS1pdGVtLWRlc2NyaXB0aW9uLWFsaWdubWVudDpmbGV4LXN0YXJ0Oy0taXRlbS1jb250ZW50LWFsaWdubWVudDpmbGV4LXN0YXJ0Oy0tYmVmb3JlLWl0ZW0tY29udGVudC1hbGlnbm1lbnQ6Y2VudGVyOy0tYmVmb3JlLWl0ZW0tY29udGVudC1wbGFjZW1lbnQ6ZmxleC1lbmQ7LS1iZWZvcmUtaXRlbS1kZXNjcmlwdGlvbi1wbGFjZW1lbnQ6ZmxleC1zdGFydDstLWJlZm9yZS1pdGVtLWNvbnRlbnQtdGV4dC1hbGlnbm1lbnQ6cmlnaHQ7LS1iZWZvcmUtaXRlbS1kZXNjcmlwdGlvbi1ncmlkLWNvbHVtbjozLzM7LS1iZWZvcmUtaXRlbS1jb250ZW50LWdyaWQtY29sdW1uOjEvMX06aG9zdChbYWxpZ249YmVmb3JlXVtvcmllbnRhdGlvbj12ZXJ0aWNhbF0pey0taXRlbS1kZXNjcmlwdGlvbi1ncmlkLWNvbHVtbjozLzM7LS1pdGVtLWNvbnRlbnQtZ3JpZC1jb2x1bW46MS8xOy0taXRlbS1jb250ZW50LXBsYWNlbWVudDpmbGV4LWVuZDstLWl0ZW0tY29udGVudC10ZXh0LWFsaWdubWVudDpyaWdodDstLWl0ZW0tZGVzY3JpcHRpb24tcGxhY2VtZW50OmZsZXgtc3RhcnR9Omhvc3QoW29yaWVudGF0aW9uPWhvcml6b250YWxdKXstbW96LWNvbHVtbi1nYXA6dmFyKC0tZ2FwKTtjb2x1bW4tZ2FwOnZhcigtLWdhcCk7Z3JpZC10ZW1wbGF0ZS1yb3dzOnJlcGVhdCgzLG1heC1jb250ZW50KTtyb3ctZ2FwOjE2cHg7dGV4dC1hbGlnbjpjZW50ZXI7LS1pdGVtLWNvbnRlbnQtZ3JpZC1yb3c6MS8xOy0taXRlbS1ncmlkLXJvdzoyLzI7LS1pdGVtLWRlc2NyaXB0aW9uLWdyaWQtcm93OjMvMzstLWl0ZW0tdGV4dC1hbGlnbm1lbnQ6Y2VudGVyOy0taXRlbS1hbGlnbm1lbnQ6Y2VudGVyOy0taXRlbS1jb250ZW50LXBsYWNlbWVudDpjZW50ZXI7LS1pdGVtLWNvbnRlbnQtYWxpZ25tZW50OmZsZXgtZW5kOy0taXRlbS1kZXNjcmlwdGlvbi1hbGlnbm1lbnQ6ZmxleC1zdGFydDstLWl0ZW0tZGVzY3JpcHRpb24tcGxhY2VtZW50OmNlbnRlcjstLWJlZm9yZS1pdGVtLWRlc2NyaXB0aW9uLWdyaWQtcm93OjEvMTstLWJlZm9yZS1pdGVtLWNvbnRlbnQtZ3JpZC1yb3c6My8zOy0tYmVmb3JlLWl0ZW0tY29udGVudC1hbGlnbm1lbnQ6ZmxleC1zdGFydDstLWJlZm9yZS1pdGVtLWRlc2NyaXB0aW9uLWFsaWdubWVudDpmbGV4LWVuZDstLWJlZm9yZS1pdGVtLWRlc2NyaXB0aW9uLXBsYWNlbWVudDpjZW50ZXI7LS1iZWZvcmUtaXRlbS10ZXh0LWFsaWdubWVudDpjZW50ZXJ9Omhvc3QoW2FsaWduPWJlZm9yZV1bb3JpZW50YXRpb249aG9yaXpvbnRhbF0pey0taXRlbS1jb250ZW50LWdyaWQtcm93OjMvMzstLWl0ZW0tZGVzY3JpcHRpb24tZ3JpZC1yb3c6MS8xOy0taXRlbS1jb250ZW50LWFsaWdubWVudDpmbGV4LXN0YXJ0Oy0taXRlbS1kZXNjcmlwdGlvbi1hbGlnbm1lbnQ6ZmxleC1lbmQ7LS1pdGVtLWRlc2NyaXB0aW9uLXBsYWNlbWVudDpjZW50ZXJ9Omhvc3QoW29yaWVudGF0aW9uPXZlcnRpY2FsXSkgOjpzbG90dGVkKG10ZS10aW1lbGluZS1pdGVtW3NpemU9c21dKXstLWljb24tcGFkZGluZzo1cHg7LS12ZWN0b3ItaGVpZ2h0OmNhbGMoMTAwJSArIDEycHgpfTpob3N0KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF0pIDo6c2xvdHRlZChtdGUtdGltZWxpbmUtaXRlbVtzaXplPW1kXSl7LS1pY29uLXBhZGRpbmc6M3B4Oy0tdmVjdG9yLWhlaWdodDpjYWxjKDEwMCUgKyA2cHgpfTpob3N0KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF0pIDo6c2xvdHRlZChtdGUtdGltZWxpbmUtaXRlbSl7LS12ZWN0b3Itc3RhcnQtZGlzcGxheTpub25lOy0tdmVjdG9yLXZlcnRpY2FsLXN0YXJ0OmNhbGModmFyKC0taWNvbi1zaXplKSArIHZhcigtLWljb24tcGFkZGluZykpfTpob3N0KFtvcmllbnRhdGlvbj1ob3Jpem9udGFsXSkgOjpzbG90dGVkKG10ZS10aW1lbGluZS1pdGVtW3NpemU9c21dKXstLWljb24tcGFkZGluZzo2cHh9Omhvc3QoW29yaWVudGF0aW9uPWhvcml6b250YWxdKSA6OnNsb3R0ZWQobXRlLXRpbWVsaW5lLWl0ZW1bc2l6ZT1tZF0pey0taWNvbi1wYWRkaW5nOjEwcHh9Omhvc3QoW29yaWVudGF0aW9uPWhvcml6b250YWxdKSA6OnNsb3R0ZWQobXRlLXRpbWVsaW5lLWl0ZW0pey0tZGlzcGxheTpibG9jazstLXZlY3Rvci13aWR0aDpjYWxjKDUwJSArIHZhcigtLWdhcCkqMC41IC0gdmFyKC0taWNvbi1zaXplKSArIHZhcigtLWljb24tcGFkZGluZykpOy0tdmVjdG9yLWhvcml6b250YWwtc3RhcnQ6Y2FsYyh2YXIoLS1nYXApKi0xKjAuNSk7LS12ZWN0b3ItaG9yaXpvbnRhbC1lbmQ6Y2FsYyh2YXIoLS1nYXApKi0xKjAuNSl9Omhvc3QoW29yaWVudGF0aW9uPWhvcml6b250YWxdKSA6OnNsb3R0ZWQobXRlLXRpbWVsaW5lLWl0ZW1bdmVjdG9yPWluZGV0ZXJtaW5hdGVdKXstLXZlY3Rvci1ob3Jpem9udGFsLWVuZDpjYWxjKHZhcigtLWdhcCkqLTEqMC41IC0gMnB4KX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS12ZWN0b3ItY29sb3Itc3RhcnQ6dmFyKC0tbXRlLWJvcmRlci0zKTstLXZlY3Rvci1jb2xvci1lbmQ6dmFyKC0tbXRlLWJvcmRlci0zKTstLXZlY3Rvci1zdHlsZS1zdGFydDpzb2xpZDstLXZlY3Rvci1zdHlsZS1lbmQ6c29saWQ7ZGlzcGxheTpjb250ZW50c30uZGVzY3JpcHRpb257YWxpZ24taXRlbXM6dmFyKC0taXRlbS1kZXNjcmlwdGlvbi1hbGlnbm1lbnQsY2VudGVyKTtkaXNwbGF5OmZsZXg7Z3JpZC1jb2x1bW46dmFyKC0taXRlbS1kZXNjcmlwdGlvbi1ncmlkLWNvbHVtbik7Z3JpZC1yb3c6dmFyKC0taXRlbS1kZXNjcmlwdGlvbi1ncmlkLXJvdyk7anVzdGlmeS1jb250ZW50OnZhcigtLWl0ZW0tZGVzY3JpcHRpb24tcGxhY2VtZW50KTt0ZXh0LWFsaWduOnZhcigtLWl0ZW0tZGVzY3JpcHRpb24tdGV4dC1hbGlnbm1lbnQpfS5ub2Rle2FsaWduLWl0ZW1zOnZhcigtLWl0ZW0tYWxpZ25tZW50KTtkaXNwbGF5OmZsZXg7Z3JpZC1jb2x1bW46dmFyKC0taXRlbS1ncmlkLWNvbHVtbik7Z3JpZC1yb3c6dmFyKC0taXRlbS1ncmlkLXJvdyk7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZX0uY29udGVudHthbGlnbi1pdGVtczp2YXIoLS1pdGVtLWNvbnRlbnQtYWxpZ25tZW50LGNlbnRlcik7ZGlzcGxheTpmbGV4O2dyaWQtY29sdW1uOnZhcigtLWl0ZW0tY29udGVudC1ncmlkLWNvbHVtbik7Z3JpZC1yb3c6dmFyKC0taXRlbS1jb250ZW50LWdyaWQtcm93KTtqdXN0aWZ5LWNvbnRlbnQ6dmFyKC0taXRlbS1jb250ZW50LXBsYWNlbWVudCk7bWF4LXdpZHRoOjMwY2g7dGV4dC1hbGlnbjp2YXIoLS1pdGVtLWNvbnRlbnQtdGV4dC1hbGlnbm1lbnQpfTpob3N0KFthbGlnbj1iZWZvcmVdKSAuY29udGVudHstLWl0ZW0tY29udGVudC1ncmlkLXJvdzp2YXIoLS1iZWZvcmUtaXRlbS1jb250ZW50LWdyaWQtcm93KTstLWl0ZW0tY29udGVudC1ncmlkLWNvbHVtbjp2YXIoLS1iZWZvcmUtaXRlbS1jb250ZW50LWdyaWQtY29sdW1uKTstLWl0ZW0tY29udGVudC1hbGlnbm1lbnQ6dmFyKC0tYmVmb3JlLWl0ZW0tY29udGVudC1hbGlnbm1lbnQpOy0taXRlbS1jb250ZW50LXBsYWNlbWVudDp2YXIoLS1iZWZvcmUtaXRlbS1jb250ZW50LXBsYWNlbWVudCk7LS1pdGVtLWNvbnRlbnQtdGV4dC1hbGlnbm1lbnQ6dmFyKC0tYmVmb3JlLWl0ZW0tY29udGVudC10ZXh0LWFsaWdubWVudCl9Omhvc3QoW2FsaWduPWJlZm9yZV0pIC5kZXNjcmlwdGlvbnstLWl0ZW0tZGVzY3JpcHRpb24tYWxpZ25tZW50OnZhcigtLWJlZm9yZS1pdGVtLWRlc2NyaXB0aW9uLWFsaWdubWVudCk7LS1pdGVtLWRlc2NyaXB0aW9uLXBsYWNlbWVudDp2YXIoLS1iZWZvcmUtaXRlbS1kZXNjcmlwdGlvbi1wbGFjZW1lbnQpOy0taXRlbS1kZXNjcmlwdGlvbi1ncmlkLXJvdzp2YXIoLS1iZWZvcmUtaXRlbS1kZXNjcmlwdGlvbi1ncmlkLXJvdyk7LS1pdGVtLWRlc2NyaXB0aW9uLWdyaWQtY29sdW1uOnZhcigtLWJlZm9yZS1pdGVtLWRlc2NyaXB0aW9uLWdyaWQtY29sdW1uKX0ubm9kZSBtdGUtaWNvbntwYWRkaW5nOjNweDt6LWluZGV4OjF9Omhvc3QoW3NpemU9c21dKXstLWljb24tc2l6ZToxNnB4fTpob3N0KFtzaXplPW1kXSl7LS1pY29uLXNpemU6MjRweH06aG9zdCg6bm90KDpmaXJzdC1vZi10eXBlKSkgLm5vZGU6YmVmb3JlLDpob3N0KDpub3QoOmxhc3Qtb2YtdHlwZSkpIC5ub2RlOmFmdGVye2NvbnRlbnQ6XCJcIjtoZWlnaHQ6dmFyKC0tdmVjdG9yLWhlaWdodCk7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6dmFyKC0tdmVjdG9yLXdpZHRoKX0ubm9kZTpiZWZvcmV7Ym9yZGVyOjFweCB2YXIoLS12ZWN0b3Itc3R5bGUtc3RhcnQpIHZhcigtLXZlY3Rvci1jb2xvci1zdGFydCk7ZGlzcGxheTp2YXIoLS12ZWN0b3Itc3RhcnQtZGlzcGxheSk7bGVmdDp2YXIoLS12ZWN0b3ItaG9yaXpvbnRhbC1zdGFydCl9Lm5vZGU6YWZ0ZXJ7Ym9yZGVyOjFweCB2YXIoLS12ZWN0b3Itc3R5bGUtZW5kKSB2YXIoLS12ZWN0b3ItY29sb3ItZW5kKTtyaWdodDp2YXIoLS12ZWN0b3ItaG9yaXpvbnRhbC1lbmQpO3RvcDp2YXIoLS12ZWN0b3ItdmVydGljYWwtc3RhcnQpfTpob3N0KFt2ZWN0b3I9aW5kZXRlcm1pbmF0ZV0pIC5ub2RlOmFmdGVyey0tdmVjdG9yLXN0eWxlLWVuZDpkYXNoZWR9Omhvc3QoW2NvbG9yPXByaW1hcnldW3ZlY3Rvcj1maWxsZWRdKXstLXZlY3Rvci1jb2xvci1lbmQ6cmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1zZWNvbmRhcnldW3ZlY3Rvcj1maWxsZWRdKXstLXZlY3Rvci1jb2xvci1lbmQ6cmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXRlcnRpYXJ5XVt2ZWN0b3I9ZmlsbGVkXSl7LS12ZWN0b3ItY29sb3ItZW5kOnJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXN1Y2Nlc3NdW3ZlY3Rvcj1maWxsZWRdKXstLXZlY3Rvci1jb2xvci1lbmQ6cmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj13YXJuaW5nXVt2ZWN0b3I9ZmlsbGVkXSl7LS12ZWN0b3ItY29sb3ItZW5kOnJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXVt2ZWN0b3I9ZmlsbGVkXSl7LS12ZWN0b3ItY29sb3ItZW5kOnJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1iYXNlLXJnYikpfWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsWUFBWTtBQUNyQixTQUFTLGdCQUFnQjs7O0FDRHpCLFNBQVMsV0FBVztBQUFhLElBQU1BLFVBQVM7OztBRGlCekMsSUFBTSxjQUFOLGNBQTBCLGdCQUFxRCxVQUFVLEVBQUU7QUFBQSxFQUEzRjtBQUFBO0FBSXdCLHVCQUF5QztBQUd6QyxpQkFBNEI7QUFHNUIsZ0JBQU87QUFBQTtBQUFBLEVBRXBDLFNBQVM7QUFDUCxXQUFPLE9BQU8sS0FBSyxjQUFjO0FBQUEsRUFDbkM7QUFDRjtBQWZhLFlBQ0osU0FBUyxDQUFDLFFBQVlDLE9BQU07QUFHTjtBQUFBLEVBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztBQUFBLEdBSmhCLFlBSWtCO0FBR0E7QUFBQSxFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFBQSxHQVBoQixZQU9rQjtBQUdBO0FBQUEsRUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0FBQUEsR0FWaEIsWUFVa0I7QUFWbEIsY0FBTjtBQUFBLEVBRE4sY0FBYyxjQUFjO0FBQUEsR0FDaEI7OztBRWpCYixTQUFTLFFBQUFDLGFBQVk7QUFDckIsU0FBUyxZQUFBQyxpQkFBZ0I7OztBQ0R6QixTQUFTLE9BQUFDLFlBQVc7QUFBYSxJQUFNQyxVQUFTRDs7O0FEaUJoRCx1QkFBdUIsY0FBYyxDQUFDLG9CQUFvQixDQUFDO0FBbUJwRCxJQUFNLGtCQUFOLGNBQThCO0VBQ25DLGdCQUF5RCxVQUFVO0FBQ3JFLEVBQUU7RUFGSzs7QUFTd0IsaUJBQTRCO0FBRzVCLGdCQUFlO0FBR2Ysa0JBQWlEO0FBR2pELGdCQUFvQjtBQUdwQixnQkFBTzs7RUFFNUIsY0FBYztBQUNwQixRQUFJLEtBQUssU0FBUyxNQUFNO0FBQ3RCLGFBQU87SUFDVDtBQUNBLFFBQUksS0FBSyxTQUFTLE1BQU07QUFDdEIsYUFBTztJQUNUO0VBQ0Y7RUFFQSxTQUFTO0FBQ1AsV0FBT0UsUUFBTyxLQUFLLGNBQWMsK0RBRVgsS0FBSyxXQUFXLGtFQUt6QixLQUFLLElBQUksWUFDUixLQUFLLEtBQUssV0FDWCxLQUFLLFlBQVksQ0FBQztFQUdqQztBQUNGO0FBOUNhLGdCQUdKLFNBQVMsQ0FBQyxRQUFZQyxPQUFNO0FBR047RUFBNUJDLFVBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQU5oQixnQkFNa0I7QUFHQTtFQUE1QkEsVUFBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBVGhCLGdCQVNrQjtBQUdBO0VBQTVCQSxVQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FaaEIsZ0JBWWtCO0FBR0E7RUFBNUJBLFVBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQWZoQixnQkFla0I7QUFHQTtFQUE1QkEsVUFBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBbEJoQixnQkFrQmtCO0FBR0E7RUFBNUJBLFVBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQXJCaEIsZ0JBcUJrQjtBQXJCbEIsa0JBQU47RUFETixjQUFjLG1CQUFtQjtHQUNyQjsiLAogICJuYW1lcyI6IFsic3R5bGVzIiwgInN0eWxlcyIsICJodG1sIiwgInByb3BlcnR5IiwgImNzcyIsICJzdHlsZXMiLCAiaHRtbCIsICJzdHlsZXMiLCAicHJvcGVydHkiXQp9Cg==
