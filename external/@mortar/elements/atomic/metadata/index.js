import "../../chunks/chunk.FQWJN7AO.js";
import "../../chunks/chunk.DYYIIZPZ.js";
import {
  MteContentGrid,
  styles as styles2
} from "../../chunks/chunk.NOJZGMQT.js";
import "../../chunks/chunk.F33MBUAV.js";
import "../../chunks/chunk.SRHT6JKE.js";
import "../../chunks/chunk.CFKDY3QJ.js";
import "../../chunks/chunk.D4QL7DP6.js";
import {
  MteIconRegistryService
} from "../../chunks/chunk.L7F3KXB6.js";
import {
  MteElement,
  RadiusMixin,
  ResponsiveValueConverter,
  SizeMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  getResponsivePropVal,
  styles7 as styles
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/metadata/metadata.element.ts
import { html } from "lit";
import { property } from "lit/decorators.js";

// src/atomic/metadata/metadata.styles.ts
import { css } from "lit";
var styles3 = css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-body1-font-size);font-weight:var(--mte-font-set-body1-font-weight);line-height:var(--mte-font-set-body1-line-height);text-decoration:inherit;text-transform:inherit;--grid-cols:2;--grid-item-width:100%;--grid-col-gap:1px;--grid-row-gap:1px;--border:solid 1px var(--mte-border-1);--border-radius:var(--mte-border-radius-md);--padding:0px;--item-span-multiplier:2;--item-span:2;--item-outline:solid 1px var(--mte-border-1);--item-row-gap:0;--item-col-gap:0;--item-display:grid;--key-background:var(--mte-surface-1);--key-padding-x:var(--mte-space-sm);--key-padding-y:var(--mte-space-md);--key-align:center;--key-fw:var(--mte-font-weight-medium);--val-background:var(--mte-surface-2);--val-padding-x:var(--mte-space-sm);--val-padding-y:var(--mte-space-md);--val-align:center;border:var(--border);border-radius:var(--border-radius);-moz-column-gap:var(--grid-col-gap);column-gap:var(--grid-col-gap);grid-auto-flow:dense;grid-template-columns:repeat(var(--grid-cols),max-content minmax(var(--grid-item-min-width),var(--grid-item-width)));overflow:hidden;padding:var(--padding);row-gap:var(--grid-row-gap)}:host([size=sm]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-body2-font-size);font-weight:var(--mte-font-set-body2-font-weight);line-height:var(--mte-font-set-body2-line-height);text-decoration:inherit;text-transform:inherit}:host([radius=sm]){--border-radius:0px}:host([radius=lg]){--border-radius:var(--mte-border-radius-xl)}:host([format=stack]){grid-template-columns:repeat(var(--grid-cols),minmax(var(--grid-item-min-width),var(--grid-item-width)));--grid-col-gap:var(--mte-space-sm);--grid-row-gap:var(--mte-space-md);--border:none;--border-radius:0px;--padding:var(--mte-space-sm);--item-span-multiplier:1;--item-display:flex;--item-span:1;--item-outline:none;--item-row-gap:var(--mte-space-xxs);--key-background:transparent;--key-padding-x:0;--key-padding-y:0;--key-fw:var(--mte-font-weight-bold);--val-background:transparent;--val-padding-x:0;--val-padding-y:0;--val-align:flex-start}dl{display:contents;margin-block:0;margin-inline:0}`;

// src/atomic/metadata/metadata.element.ts
import { selectorFactory } from "@mortar/styles";
var MteMetadata = class extends RadiusMixin(SizeMixin(MteContentGrid)) {
  constructor() {
    super(...arguments);
    this.format = "grid";
    this.role = "list";
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("justifyLabel") || changedProps.has("format")) {
      this.setInstanceStyle("mte-metadata", selectorFactory(this.instanceStyleSelectorRoot), {
        "--key-justify": this.format === "grid" ? this.justifyLabel : null
      });
    }
  }
  render() {
    return html`${this.instanceStyles}<slot></slot>`;
  }
};
MteMetadata.styles = [styles, styles2, styles3];
__decorateClass([
  property({ reflect: true })
], MteMetadata.prototype, "format", 2);
__decorateClass([
  property({ reflect: true })
], MteMetadata.prototype, "justifyLabel", 2);
__decorateClass([
  property({ reflect: true })
], MteMetadata.prototype, "role", 2);
MteMetadata = __decorateClass([
  defineElement("mte-metadata")
], MteMetadata);

// src/atomic/metadata/metadata-item.element.ts
import { ifDefined } from "lit-html/directives/if-defined.js";
import { html as html2 } from "lit";
import { property as property2 } from "lit/decorators.js";

// src/atomic/metadata/metadata-item.styles.ts
import { css as css2 } from "lit";
var styles4 = css2`:host{--key-span:1;--val-span:calc(var(--item-span) - 1);-moz-column-gap:var(--item-col-gap);column-gap:var(--item-col-gap);display:var(--item-display);flex-direction:column;grid-column-end:span var(--item-span);grid-row-end:var(--item-row-span);grid-template-columns:subgrid;row-gap:var(--item-row-gap)}.key{align-items:var(--key-align);background:var(--key-background);display:flex;font-weight:var(--key-fw);grid-column-end:span var(--key-span);justify-content:var(--key-justify);outline:var(--item-outline);padding:var(--key-padding-x) var(--key-padding-y)}.key-info-icon{margin-left:var(--mte-space-xs)}.value-container{align-items:var(--val-align);background:var(--val-background);display:flex;flex-grow:1;grid-column-end:span var(--val-span);margin-inline:0;outline:var(--item-outline);padding:var(--val-padding-x) var(--val-padding-y)}.value{display:block;height:100%;width:100%}dl{display:contents;margin-block:0;margin-inline:0}`;

// src/atomic/metadata/metadata-item.element.ts
import { selectorFactory as selectorFactory2 } from "@mortar/styles";
import { mtrIconInformationSlabCircleOutline } from "@mortar/icons";
MteIconRegistryService.registerIcons([mtrIconInformationSlabCircleOutline]);
var MteMetadataItem = class extends StylePartsMixin(
  MteElement
) {
  constructor() {
    super(...arguments);
    this.role = "listitem";
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("span") || changedProps.has("rowSpan")) {
      this.setInstanceStyle("mte-metadata-item", selectorFactory2(this.instanceStyleSelectorRoot), {
        ...this.getGridArea(""),
        xs: this.getGridArea("xs"),
        sm: this.getGridArea("sm"),
        md: this.getGridArea("md"),
        lg: this.getGridArea("lg"),
        xl: this.getGridArea("xl"),
        xxl: this.getGridArea("xxl")
      });
    }
  }
  getGridArea(bp) {
    const colSpan = getResponsivePropVal(this, "span", bp) ?? null;
    const rowSpan = getResponsivePropVal(this, "rowSpan", bp) ?? null;
    if (!colSpan && !rowSpan) {
      return null;
    } else {
      return {
        "--item-span": colSpan ? `min(calc(var(--grid-cols) * var(--item-span-multiplier)), calc(${colSpan} * var(--item-span-multiplier)))` : null,
        "--item-row-span": rowSpan ? `span ` + rowSpan : null
      };
    }
  }
  render() {
    return html2`${this.instanceStyles}<div class="key"><span id="label" part="label" aria-describedby="${ifDefined(this.description ? "description" : null)}">${this.label} </span>${this.description ? html2`<mte-overlay-trigger><mte-tooltip slot="overlay">${this.description}</mte-tooltip><mte-icon muted class="key-info-icon" aria-hidden="true" autosize name="information-slab-circle-outline" slot="trigger"></mte-icon></mte-overlay-trigger><mte-visually-hidden id="description">${this.description}</mte-visually-hidden>` : null}</div><div class="value-container"><div class="value" part="value"><slot></slot></div></div>`;
  }
};
MteMetadataItem.styles = [styles, styles4];
__decorateClass([
  property2()
], MteMetadataItem.prototype, "label", 2);
__decorateClass([
  property2()
], MteMetadataItem.prototype, "description", 2);
__decorateClass([
  property2({ reflect: true })
], MteMetadataItem.prototype, "role", 2);
__decorateClass([
  property2({ type: Number, reflect: true, converter: ResponsiveValueConverter })
], MteMetadataItem.prototype, "span", 2);
__decorateClass([
  property2({ type: Number, reflect: true, converter: ResponsiveValueConverter })
], MteMetadataItem.prototype, "rowSpan", 2);
MteMetadataItem = __decorateClass([
  defineElement("mte-metadata-item")
], MteMetadataItem);
export {
  MteMetadata,
  MteMetadataItem
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9tZXRhZGF0YS9tZXRhZGF0YS5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbWV0YWRhdGEvbWV0YWRhdGEuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbWV0YWRhdGEiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9tZXRhZGF0YS9tZXRhZGF0YS1pdGVtLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IGRlZmluZUVsZW1lbnQsIE10ZUVsZW1lbnRQYXJ0cywgYmFzZVN0eWxlcywgU2l6ZU1peGluLCBSYWRpdXNNaXhpbiB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgTXRlQ29udGVudEdyaWQgfSBmcm9tICcuLi9ncmlkJztcbmltcG9ydCB7IHN0eWxlcyBhcyBjb250ZW50R3JpZFN0eWxlcyB9IGZyb20gJy4uL2dyaWQvY29udGVudC1ncmlkLnN0eWxlcyc7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL21ldGFkYXRhLnN0eWxlcyc7XG5pbXBvcnQgeyBzZWxlY3RvckZhY3RvcnkgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXRlTWV0YWRhdGFQYXJ0cyBleHRlbmRzIE10ZUVsZW1lbnRQYXJ0cyB7fVxuXG4vKipcbiAqIEBzbG90IC0gRGVmYXVsdCBzbG90dGVkIGNvbnRlbnRcbiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS1tZXRhZGF0YScpXG5leHBvcnQgY2xhc3MgTXRlTWV0YWRhdGEgZXh0ZW5kcyBSYWRpdXNNaXhpbihTaXplTWl4aW4oTXRlQ29udGVudEdyaWQpKSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbYmFzZVN0eWxlcywgY29udGVudEdyaWRTdHlsZXMsIHN0eWxlc107XG5cbiAgLyoqIEFkanVzdHMgdGhlIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvZiBhbGwgY2hpbGQgbWV0YWRhdGEgaXRlbXMgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBmb3JtYXQ6ICdncmlkJyB8ICdzdGFjaycgPSAnZ3JpZCc7XG5cbiAgLyoqIEFkanVzdHMgdGhlIGp1c3RpZmljYXRpb24gb2YgaXRlbSBsYWJlbHMgd2hlbiBgZm9ybWF0PVwiZ3JpZFwiYCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGp1c3RpZnlMYWJlbDogJ2ZsZXgtc3RhcnQnIHwgJ2ZsZXgtZW5kJztcblxuICAvKiogVGhlIGExMXkgcm9sZSBhcHBsaWVkIHRvIHRoaXMgaXRlbSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHJvbGUgPSAnbGlzdCc7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcygnanVzdGlmeUxhYmVsJykgfHwgY2hhbmdlZFByb3BzLmhhcygnZm9ybWF0JykpIHtcbiAgICAgIHRoaXMuc2V0SW5zdGFuY2VTdHlsZSgnbXRlLW1ldGFkYXRhJywgc2VsZWN0b3JGYWN0b3J5KHRoaXMuaW5zdGFuY2VTdHlsZVNlbGVjdG9yUm9vdCksIHtcbiAgICAgICAgJy0ta2V5LWp1c3RpZnknOiB0aGlzLmZvcm1hdCA9PT0gJ2dyaWQnID8gdGhpcy5qdXN0aWZ5TGFiZWwgOiBudWxsLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYCR7dGhpcy5pbnN0YW5jZVN0eWxlc308c2xvdD48L3Nsb3Q+YDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdtdGUtbWV0YWRhdGEnOiBNdGVNZXRhZGF0YTtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWxpbmUtaGVpZ2h0KTt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0Oy0tZ3JpZC1jb2xzOjI7LS1ncmlkLWl0ZW0td2lkdGg6MTAwJTstLWdyaWQtY29sLWdhcDoxcHg7LS1ncmlkLXJvdy1nYXA6MXB4Oy0tYm9yZGVyOnNvbGlkIDFweCB2YXIoLS1tdGUtYm9yZGVyLTEpOy0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCk7LS1wYWRkaW5nOjBweDstLWl0ZW0tc3Bhbi1tdWx0aXBsaWVyOjI7LS1pdGVtLXNwYW46MjstLWl0ZW0tb3V0bGluZTpzb2xpZCAxcHggdmFyKC0tbXRlLWJvcmRlci0xKTstLWl0ZW0tcm93LWdhcDowOy0taXRlbS1jb2wtZ2FwOjA7LS1pdGVtLWRpc3BsYXk6Z3JpZDstLWtleS1iYWNrZ3JvdW5kOnZhcigtLW10ZS1zdXJmYWNlLTEpOy0ta2V5LXBhZGRpbmcteDp2YXIoLS1tdGUtc3BhY2Utc20pOy0ta2V5LXBhZGRpbmcteTp2YXIoLS1tdGUtc3BhY2UtbWQpOy0ta2V5LWFsaWduOmNlbnRlcjstLWtleS1mdzp2YXIoLS1tdGUtZm9udC13ZWlnaHQtbWVkaXVtKTstLXZhbC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1zdXJmYWNlLTIpOy0tdmFsLXBhZGRpbmcteDp2YXIoLS1tdGUtc3BhY2Utc20pOy0tdmFsLXBhZGRpbmcteTp2YXIoLS1tdGUtc3BhY2UtbWQpOy0tdmFsLWFsaWduOmNlbnRlcjtib3JkZXI6dmFyKC0tYm9yZGVyKTtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpOy1tb3otY29sdW1uLWdhcDp2YXIoLS1ncmlkLWNvbC1nYXApO2NvbHVtbi1nYXA6dmFyKC0tZ3JpZC1jb2wtZ2FwKTtncmlkLWF1dG8tZmxvdzpkZW5zZTtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KHZhcigtLWdyaWQtY29scyksbWF4LWNvbnRlbnQgbWlubWF4KHZhcigtLWdyaWQtaXRlbS1taW4td2lkdGgpLHZhcigtLWdyaWQtaXRlbS13aWR0aCkpKTtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzp2YXIoLS1wYWRkaW5nKTtyb3ctZ2FwOnZhcigtLWdyaWQtcm93LWdhcCl9Omhvc3QoW3NpemU9c21dKXtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWxpbmUtaGVpZ2h0KTt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0fTpob3N0KFtyYWRpdXM9c21dKXstLWJvcmRlci1yYWRpdXM6MHB4fTpob3N0KFtyYWRpdXM9bGddKXstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteGwpfTpob3N0KFtmb3JtYXQ9c3RhY2tdKXtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KHZhcigtLWdyaWQtY29scyksbWlubWF4KHZhcigtLWdyaWQtaXRlbS1taW4td2lkdGgpLHZhcigtLWdyaWQtaXRlbS13aWR0aCkpKTstLWdyaWQtY29sLWdhcDp2YXIoLS1tdGUtc3BhY2Utc20pOy0tZ3JpZC1yb3ctZ2FwOnZhcigtLW10ZS1zcGFjZS1tZCk7LS1ib3JkZXI6bm9uZTstLWJvcmRlci1yYWRpdXM6MHB4Oy0tcGFkZGluZzp2YXIoLS1tdGUtc3BhY2Utc20pOy0taXRlbS1zcGFuLW11bHRpcGxpZXI6MTstLWl0ZW0tZGlzcGxheTpmbGV4Oy0taXRlbS1zcGFuOjE7LS1pdGVtLW91dGxpbmU6bm9uZTstLWl0ZW0tcm93LWdhcDp2YXIoLS1tdGUtc3BhY2UteHhzKTstLWtleS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0ta2V5LXBhZGRpbmcteDowOy0ta2V5LXBhZGRpbmcteTowOy0ta2V5LWZ3OnZhcigtLW10ZS1mb250LXdlaWdodC1ib2xkKTstLXZhbC1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tdmFsLXBhZGRpbmcteDowOy0tdmFsLXBhZGRpbmcteTowOy0tdmFsLWFsaWduOmZsZXgtc3RhcnR9ZGx7ZGlzcGxheTpjb250ZW50czttYXJnaW4tYmxvY2s6MDttYXJnaW4taW5saW5lOjB9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0ta2V5LXNwYW46MTstLXZhbC1zcGFuOmNhbGModmFyKC0taXRlbS1zcGFuKSAtIDEpOy1tb3otY29sdW1uLWdhcDp2YXIoLS1pdGVtLWNvbC1nYXApO2NvbHVtbi1nYXA6dmFyKC0taXRlbS1jb2wtZ2FwKTtkaXNwbGF5OnZhcigtLWl0ZW0tZGlzcGxheSk7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dyaWQtY29sdW1uLWVuZDpzcGFuIHZhcigtLWl0ZW0tc3Bhbik7Z3JpZC1yb3ctZW5kOnZhcigtLWl0ZW0tcm93LXNwYW4pO2dyaWQtdGVtcGxhdGUtY29sdW1uczpzdWJncmlkO3Jvdy1nYXA6dmFyKC0taXRlbS1yb3ctZ2FwKX0ua2V5e2FsaWduLWl0ZW1zOnZhcigtLWtleS1hbGlnbik7YmFja2dyb3VuZDp2YXIoLS1rZXktYmFja2dyb3VuZCk7ZGlzcGxheTpmbGV4O2ZvbnQtd2VpZ2h0OnZhcigtLWtleS1mdyk7Z3JpZC1jb2x1bW4tZW5kOnNwYW4gdmFyKC0ta2V5LXNwYW4pO2p1c3RpZnktY29udGVudDp2YXIoLS1rZXktanVzdGlmeSk7b3V0bGluZTp2YXIoLS1pdGVtLW91dGxpbmUpO3BhZGRpbmc6dmFyKC0ta2V5LXBhZGRpbmcteCkgdmFyKC0ta2V5LXBhZGRpbmcteSl9LmtleS1pbmZvLWljb257bWFyZ2luLWxlZnQ6dmFyKC0tbXRlLXNwYWNlLXhzKX0udmFsdWUtY29udGFpbmVye2FsaWduLWl0ZW1zOnZhcigtLXZhbC1hbGlnbik7YmFja2dyb3VuZDp2YXIoLS12YWwtYmFja2dyb3VuZCk7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzoxO2dyaWQtY29sdW1uLWVuZDpzcGFuIHZhcigtLXZhbC1zcGFuKTttYXJnaW4taW5saW5lOjA7b3V0bGluZTp2YXIoLS1pdGVtLW91dGxpbmUpO3BhZGRpbmc6dmFyKC0tdmFsLXBhZGRpbmcteCkgdmFyKC0tdmFsLXBhZGRpbmcteSl9LnZhbHVle2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX1kbHtkaXNwbGF5OmNvbnRlbnRzO21hcmdpbi1ibG9jazowO21hcmdpbi1pbmxpbmU6MH1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsZ0JBQWdCOzs7QUNEekIsU0FBUyxXQUFXO0FBQWEsSUFBTUEsVUFBUzs7O0FETWhELFNBQVMsdUJBQXVCO0FBUXpCLElBQU0sY0FBTixjQUEwQixZQUFZLFVBQVUsY0FBYyxDQUFDLEVBQUU7QUFBQSxFQUFqRTtBQUFBO0FBSXdCLGtCQUEyQjtBQU0zQixnQkFBTztBQUFBO0FBQUEsRUFFMUIscUJBQXFCLGNBQWM7QUFDM0MsVUFBTSxxQkFBcUIsWUFBWTtBQUV2QyxRQUFJLGFBQWEsSUFBSSxjQUFjLEtBQUssYUFBYSxJQUFJLFFBQVEsR0FBRztBQUNsRSxXQUFLLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLEtBQUsseUJBQXlCLEdBQUc7QUFBQSxRQUNyRixpQkFBaUIsS0FBSyxXQUFXLFNBQVMsS0FBSyxlQUFlO0FBQUEsTUFDaEUsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQUEsRUFFQSxTQUFTO0FBQ1AsV0FBTyxPQUFPLEtBQUssY0FBYztBQUFBLEVBQ25DO0FBQ0Y7QUF6QmEsWUFDSixTQUFTLENBQUMsUUFBWUMsU0FBbUJBLE9BQU07QUFHekI7QUFBQSxFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFBQSxHQUpoQixZQUlrQjtBQUdBO0FBQUEsRUFBNUIsU0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0FBQUEsR0FQaEIsWUFPa0I7QUFHQTtBQUFBLEVBQTVCLFNBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztBQUFBLEdBVmhCLFlBVWtCO0FBVmxCLGNBQU47QUFBQSxFQUROLGNBQWMsY0FBYztBQUFBLEdBQ2hCOzs7QUVkYixTQUFTLGlCQUFpQjtBQUMxQixTQUFTLFFBQUFDLGFBQVk7QUFDckIsU0FBUyxZQUFBQyxpQkFBZ0I7OztBQ0Z6QixTQUFTLE9BQUFDLFlBQVc7QUFBYSxJQUFNQyxVQUFTRDs7O0FEZWhELFNBQVMsbUJBQUFFLHdCQUF1QjtBQUVoQyxTQUFTLDJDQUEyQztBQU1wRCx1QkFBdUIsY0FBYyxDQUFDLG1DQUFtQyxDQUFDO0FBc0JuRSxJQUFNLGtCQUFOLGNBQThCO0VBQ25DO0FBQ0YsRUFBRTtFQUZLOztBQVl3QixnQkFBTzs7RUFVMUIscUJBQXFCLGNBQWM7QUFDM0MsVUFBTSxxQkFBcUIsWUFBWTtBQUV2QyxRQUFJLGFBQWEsSUFBSSxNQUFNLEtBQUssYUFBYSxJQUFJLFNBQVMsR0FBRztBQUMzRCxXQUFLLGlCQUFpQixxQkFBcUJDLGlCQUFnQixLQUFLLHlCQUF5QixHQUFHO1FBQzFGLEdBQUcsS0FBSyxZQUFZLEVBQUU7UUFDdEIsSUFBSSxLQUFLLFlBQVksSUFBSTtRQUN6QixJQUFJLEtBQUssWUFBWSxJQUFJO1FBQ3pCLElBQUksS0FBSyxZQUFZLElBQUk7UUFDekIsSUFBSSxLQUFLLFlBQVksSUFBSTtRQUN6QixJQUFJLEtBQUssWUFBWSxJQUFJO1FBQ3pCLEtBQUssS0FBSyxZQUFZLEtBQUs7TUFDN0IsQ0FBQztJQUNIO0VBQ0Y7RUFFUSxZQUFZLElBQVk7QUFDOUIsVUFBTSxVQUFVLHFCQUFxQixNQUFNLFFBQVEsRUFBRSxLQUFLO0FBQzFELFVBQU0sVUFBVSxxQkFBcUIsTUFBTSxXQUFXLEVBQUUsS0FBSztBQUc3RCxRQUFJLENBQUMsV0FBVyxDQUFDLFNBQVM7QUFDeEIsYUFBTztJQUNULE9BQU87QUFHTCxhQUFPO1FBQ0wsZUFBZSxVQUNYLGtFQUFrRSxPQUFPLHFDQUN6RTtRQUNKLG1CQUFtQixVQUFVLFVBQVUsVUFBVTtNQUNuRDtJQUNGO0VBQ0Y7RUFFQSxTQUFTO0FBQ1AsV0FBT0MsUUFBTyxLQUFLLGNBQWMsb0VBS1IsVUFBVSxLQUFLLGNBQWMsZ0JBQWdCLElBQUksQ0FBQyxLQUNuRSxLQUFLLEtBQUssV0FFWixLQUFLLGNBQ0hBLHlEQUVrQyxLQUFLLFdBQVcsZ05BU1IsS0FBSyxXQUFXLDJCQUUxRCxJQUFJO0VBT2Q7QUFDRjtBQXhGYSxnQkFHSixTQUFTLENBQUMsUUFBWUMsT0FBTTtBQUd2QjtFQUFYQyxVQUFTO0dBTkMsZ0JBTUM7QUFHQTtFQUFYQSxVQUFTO0dBVEMsZ0JBU0M7QUFHaUI7RUFBNUJBLFVBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQVpoQixnQkFZa0I7QUFJN0I7RUFEQ0EsVUFBUyxFQUFFLE1BQU0sUUFBUSxTQUFTLE1BQU0sV0FBVyx5QkFBeUIsQ0FBQztHQWZuRSxnQkFnQlg7QUFJQTtFQURDQSxVQUFTLEVBQUUsTUFBTSxRQUFRLFNBQVMsTUFBTSxXQUFXLHlCQUF5QixDQUFDO0dBbkJuRSxnQkFvQlg7QUFwQlcsa0JBQU47RUFETixjQUFjLG1CQUFtQjtHQUNyQjsiLAogICJuYW1lcyI6IFsic3R5bGVzIiwgInN0eWxlcyIsICJodG1sIiwgInByb3BlcnR5IiwgImNzcyIsICJzdHlsZXMiLCAic2VsZWN0b3JGYWN0b3J5IiwgInNlbGVjdG9yRmFjdG9yeSIsICJodG1sIiwgInN0eWxlcyIsICJwcm9wZXJ0eSJdCn0K
