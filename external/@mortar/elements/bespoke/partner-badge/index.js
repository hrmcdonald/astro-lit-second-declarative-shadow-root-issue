import {
  MteIconRegistryService,
  mtrIconStar
} from "../../chunks/chunk.M5RJHYFW.js";
import {
  MteElement,
  __decorateClass,
  defineElement,
  styles7 as styles
} from "../../chunks/chunk.KVXAK6W4.js";

// src/bespoke/partner-badge/partner-badge.element.ts
import { html } from "lit";
import { property } from "lit/decorators.js";

// src/bespoke/partner-badge/partner-badge.styles.ts
import { css } from "lit";
var styles2 = css`.container{border:1px solid rgb(var(--mte-border-2-rgb));border-radius:var(--mte-border-radius-xl);overflow:hidden}.container.with-shadow{box-shadow:var(--mte-elevation-z3)}.header{display:flex;flex-direction:row}.header .logo{flex-grow:1}.header .logo,.header .year{align-items:center;background:rgb(var(--mte-core-primary-base-rgb));color:rgb(var(--mte-core-primary-base-c-rgb));display:flex;justify-content:center;padding:var(--mte-space-md) var(--mte-space-md) var(--mte-space-md) var(--mte-space-md)}.header .year{border-left:2px solid rgb(var(--mte-core-danger-base-c-rgb));flex-grow:0;margin-left:2px}.content{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;align-items:center;display:flex;font-size:var(--mte-font-set-h3-font-size);font-weight:var(--mte-font-set-h3-font-weight);font-weight:bolder;justify-content:center;line-height:var(--mte-font-set-h3-line-height);padding:var(--mte-space-md) var(--mte-space-md);text-align:center;text-decoration:inherit;text-transform:inherit}.footer{display:flex;flex-direction:row}.footer .texas{align-items:center;background:rgb(var(--mte-core-danger-base-rgb));border-right:2px solid rgb(var(--mte-core-danger-base-c-rgb));display:flex;justify-content:center;margin-right:2px;padding:var(--mte-space-md) var(--mte-space-md) var(--mte-space-md) var(--mte-space-md)}.footer .texas,.footer .texas mte-icon{color:rgb(var(--mte-core-danger-base-c-rgb))}.footer .text{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;align-items:center;background:rgb(var(--mte-core-primary-base-rgb));color:rgb(var(--mte-core-primary-base-c-rgb));display:flex;font-size:var(--mte-font-set-body1-font-size);font-weight:var(--mte-font-set-body1-font-weight);font-weight:bolder;justify-content:center;line-height:var(--mte-font-set-body1-line-height);padding:var(--mte-space-md) var(--mte-space-md) var(--mte-space-md) var(--mte-space-md);text-align:center;text-decoration:inherit;text-transform:inherit}`;

// src/bespoke/partner-badge/partner-badge.element.ts
MteIconRegistryService.registerIcons([
  mtrIconStar,
  {
    name: "texas",
    data: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:spacing="preserve">
<path d="M6.6,0.9h5.5c0,1.2,0,2.5,0,3.7c0,0.3,0.1,0.4,0.3,0.5c0.6,0.2,1.2,0.4,1.8,0.6c0.4,0.1,0.8,0.1,1.1,0.1
c0.9,0.2,2.7,0.6,2.8,0.6c1.6-0.3,3.1-0.3,4.6,0.4C23,6.9,23.1,7,23.1,7.3c0,0.9,0,1.8,0,2.7c0,0.1,0,0.3,0.1,0.4
c0.2,0.4,0.3,0.7,0.5,1c0.1,0.2,0.2,0.3,0.3,0.5v0.8c-0.1,0.5-0.2,1-0.2,1.5c-0.1,0.5-0.2,1-0.8,1.1c-0.3,0.1-0.6,0.2-0.9,0.4
c0,0-1,0.8-1.3,1c-0.5,0.4-2.5,1.2-2.6,1.2c-0.1,0.2-0.2,0.5-0.3,0.7c-0.2,0.4-0.5,0.7-0.7,1.1c-0.1,0.3-0.1,0.7-0.3,1.1
c0,0.1-0.1,0.2-0.1,0.3c0.2,0.6,0.1,1.3,0.6,1.7c0,0,0,0.2,0,0.3c-0.3,0-0.6,0.1-0.8,0c-0.7-0.2-1.3-0.4-2-0.6c-0.5-0.1-0.9-0.4-1-1
c-0.1-0.2-0.2-0.5-0.3-0.7c-0.6-1.1-1.4-2.2-1.8-3.3c-0.4-1-2-2.4-2.1-2.4c-0.6,0-1.2-0.4-1.8,0C7.2,15.3,7,15.4,7,15.7
c0,0.1,0,0.3-0.1,0.4c-0.1,0.6-0.5,0.8-1.1,0.5c-0.5-0.3-1-0.5-1.5-0.8c-0.2-0.1-0.4-0.4-0.5-0.6c-0.2-0.5-0.4-1-0.6-1.5
c-0.1-0.2-0.3-0.4-0.4-0.5c-0.5-0.2-0.9-0.6-1.2-1c-0.1-0.2-0.3-0.4-0.4-0.4c-0.6-0.1-0.8-0.6-1.2-1v-0.3c2,0,4,0,6,0
c0.4,0,0.5-0.1,0.5-0.5C6.5,6.9,6.6,3.9,6.6,0.9L6.6,0.9z"/>
</svg>`
  }
]);
var MtePartnerBadge = class extends MteElement {
  constructor() {
    super();
  }
  render() {
    return html`${this.instanceStyles}<div class="container with-shadow"><div class="header"><div class="logo"></div><div class="year">${!this.year || this.year < 1 ? html`<mte-icon name="star" size="28"></mte-icon>` : this.year}</div></div><div class="content">${this.name}</div><div class="footer"><div class="texas"><mte-icon name="texas" size="24"></mte-icon></div><div class="text">Because People Matter</div></div></div>`;
  }
};
MtePartnerBadge.styles = [styles, styles2];
__decorateClass([
  property({ type: Number, reflect: true })
], MtePartnerBadge.prototype, "year", 2);
__decorateClass([
  property({ reflect: true })
], MtePartnerBadge.prototype, "name", 2);
MtePartnerBadge = __decorateClass([
  defineElement("mte-partner-badge")
], MtePartnerBadge);
export {
  MtePartnerBadge
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2Jlc3Bva2UvcGFydG5lci1iYWRnZSIsICIuLi8uLi8uLi8uLi9zcmMvYmVzcG9rZS9wYXJ0bmVyLWJhZGdlL3BhcnRuZXItYmFkZ2Uuc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgLmNvbnRhaW5lcntib3JkZXI6MXB4IHNvbGlkIHJnYih2YXIoLS1tdGUtYm9yZGVyLTItcmdiKSk7Ym9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14bCk7b3ZlcmZsb3c6aGlkZGVufS5jb250YWluZXIud2l0aC1zaGFkb3d7Ym94LXNoYWRvdzp2YXIoLS1tdGUtZWxldmF0aW9uLXozKX0uaGVhZGVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3d9LmhlYWRlciAubG9nb3tmbGV4LWdyb3c6MX0uaGVhZGVyIC5sb2dvLC5oZWFkZXIgLnllYXJ7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktYmFzZS1yZ2IpKTtjb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLWMtcmdiKSk7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzp2YXIoLS1tdGUtc3BhY2UtbWQpIHZhcigtLW10ZS1zcGFjZS1tZCkgdmFyKC0tbXRlLXNwYWNlLW1kKSB2YXIoLS1tdGUtc3BhY2UtbWQpfS5oZWFkZXIgLnllYXJ7Ym9yZGVyLWxlZnQ6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1jLXJnYikpO2ZsZXgtZ3JvdzowO21hcmdpbi1sZWZ0OjJweH0uY29udGVudHtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWgzLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWgzLWZvbnQtd2VpZ2h0KTtmb250LXdlaWdodDpib2xkZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtaDMtbGluZS1oZWlnaHQpO3BhZGRpbmc6dmFyKC0tbXRlLXNwYWNlLW1kKSB2YXIoLS1tdGUtc3BhY2UtbWQpO3RleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXR9LmZvb3RlcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93fS5mb290ZXIgLnRleGFze2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKTtib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1jLXJnYikpO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1yaWdodDoycHg7cGFkZGluZzp2YXIoLS1tdGUtc3BhY2UtbWQpIHZhcigtLW10ZS1zcGFjZS1tZCkgdmFyKC0tbXRlLXNwYWNlLW1kKSB2YXIoLS1tdGUtc3BhY2UtbWQpfS5mb290ZXIgLnRleGFzLC5mb290ZXIgLnRleGFzIG10ZS1pY29ue2NvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1jLXJnYikpfS5mb290ZXIgLnRleHR7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtcmdiKSk7Y29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktYmFzZS1jLXJnYikpO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtd2VpZ2h0KTtmb250LXdlaWdodDpib2xkZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTEtbGluZS1oZWlnaHQpO3BhZGRpbmc6dmFyKC0tbXRlLXNwYWNlLW1kKSB2YXIoLS1tdGUtc3BhY2UtbWQpIHZhcigtLW10ZS1zcGFjZS1tZCkgdmFyKC0tbXRlLXNwYWNlLW1kKTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0fWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsZ0JBQWdCOzs7QUNEekIsU0FBUyxXQUFXO0FBQWEsSUFBTUEsVUFBUzs7O0FEU2hELHVCQUF1QixjQUFjO0VBQ25DO0VBQ0E7SUFDRSxNQUFNO0lBQ04sTUFBTTs7Ozs7Ozs7Ozs7RUFXUjtBQUNGLENBQUM7QUFNTSxJQUFNLGtCQUFOLGNBQThCLFdBQVc7RUFPOUMsY0FBYztBQUNaLFVBQU07RUFDUjtFQUVBLFNBQVM7QUFDUCxXQUFPLE9BQU8sS0FBSyxjQUFjLG9HQUt2QixDQUFDLEtBQUssUUFBUSxLQUFLLE9BQU8sSUFDeEIsb0RBQ0EsS0FBSyxJQUFJLG9DQUdNLEtBQUssSUFBSTtFQVF0QztBQUNGO0FBL0JhLGdCQUNKLFNBQVMsQ0FBQyxRQUFZQyxPQUFNO0FBRVE7RUFBMUMsU0FBUyxFQUFFLE1BQU0sUUFBUSxTQUFTLEtBQUssQ0FBQztHQUg5QixnQkFHZ0M7QUFFZDtFQUE1QixTQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FMaEIsZ0JBS2tCO0FBTGxCLGtCQUFOO0VBRE4sY0FBYyxtQkFBbUI7R0FDckI7IiwKICAibmFtZXMiOiBbInN0eWxlcyIsICJzdHlsZXMiXQp9Cg==
