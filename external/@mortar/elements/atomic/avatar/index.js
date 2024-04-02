import "../../chunks/chunk.ONN6V5YG.js";
import "../../chunks/chunk.SO73FSSR.js";
import "../../chunks/chunk.GB4WLDXK.js";
import "../../chunks/chunk.PRVGPCT6.js";
import "../../chunks/chunk.JVVZWO6D.js";
import "../../chunks/chunk.OHVMOSF2.js";
import "../../chunks/chunk.TOU6J7OT.js";
import "../../chunks/chunk.Q54LTJXP.js";
import "../../chunks/chunk.D6N6Z2UH.js";
import "../../chunks/chunk.IVHA27EF.js";
import "../../chunks/chunk.SRHT6JKE.js";
import "../../chunks/chunk.DVRGAMYN.js";
import "../../chunks/chunk.D4QL7DP6.js";
import "../../chunks/chunk.M5RJHYFW.js";
import {
  ButtonMixin,
  MteElement,
  RadiusMixin,
  ResponsiveValueConverter,
  StylePartsMixin,
  __decorateClass,
  config,
  defineElement,
  selectorFactory,
  styles7 as styles
} from "../../chunks/chunk.KVXAK6W4.js";

// src/atomic/avatar/avatar.element.ts
import { html } from "lit";
import { property, query, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

// src/atomic/avatar/avatar.styles.ts
import { css } from "lit";
var styles2 = css`:host{--size:2rem;--border-radius:var(--mte-border-radius-full);--border-color:transparent;--border-width:0px;--font-size:0.8rem;--weight:var(--mte-font-weight-medium);--frame-width:1px;--frame-color:var(--mte-surface-2);--elevation:var(--mte-elevation-z1);align-items:center;border:solid var(--border-width) var(--border-color);border-radius:var(--border-radius);box-shadow:var(--elevation);display:flex;height:var(--size);justify-content:center;outline:none;position:relative;width:var(--size)}:host([href]){cursor:pointer}:host([size=md]){--size:3rem;--font-size:1.25rem;--frame-width:2px}:host([size=lg]){--size:8rem;--font-size:3.2rem;--frame-width:4px;--weight:var(--mte-font-weight-regular)}:host([radius=md]){--border-radius:var(--mte-border-radius-full)}:host([radius=sm]){--border-radius:var(--mte-border-radius-lg)}:host([withoutElevation]){--elevation:var(--mte-elevation-z0)}:host([withBorder]){--border-color:var(--mte-border-1);--border-width:1px}.image-container{color:var(--color);display:grid;font-size:var(--font-size);font-weight:var(--weight);grid-template-areas:"image";height:calc(var(--size) - var(--border-width)*2);width:calc(var(--size) - var(--border-width)*2)}.fallback,.image-container{align-items:center;justify-content:center}.fallback{background-color:var(--background-color);border-radius:var(--border-radius);box-shadow:var(--elevation);display:flex}.fallback,.image{border:var(--frame-width) solid var(--frame-color);grid-area:image;height:calc(var(--size) - var(--frame-width)*2 - var(--border-width)*2);width:calc(var(--size) - var(--frame-width)*2 - var(--border-width)*2)}.image{border-radius:var(--border-radius)}.not-visible{display:none}:host(:focus-visible:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);bottom:-2px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-2px;pointer-events:none;position:absolute;right:-2px;top:-2px;z-index:9}`;

// src/atomic/avatar/avatar.element.ts
var MteAvatar = class extends ButtonMixin(
  RadiusMixin(StylePartsMixin(MteElement))
) {
  constructor() {
    super(...arguments);
    this.withTooltip = false;
    this.size = "md";
    this.withoutElevation = false;
    this.withBorder = false;
    this.showFallback = true;
  }
  connectedCallback() {
    super.connectedCallback();
    this.paletteColor = this.getAvatarPalette(this.label);
    this.initials = this.getInitials(this.label);
    this.updateComplete.then(() => {
      this.image?.addEventListener("load", (event) => {
        this.handleImageLoad();
      });
    });
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this.style.setProperty("--background-color", this.paletteColor?.color);
    this.style.setProperty("--color", this.paletteColor?.contrast);
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("label") || changedProperties.has("withTooltip")) {
      if (this.overlayTriggerElement) {
        this.overlayTriggerElement.overlayElement = this.tooltipElement;
        this.overlayTriggerElement.triggerElement = this;
      }
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.image?.removeEventListener("load", this.handleImageLoad);
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("bg") || changedProps.has("c") || changedProps.has("size") || changedProps.has("paletteColor")) {
      const isCustomSize = () => {
        if (this.size === "sm" || this.size === "md" || this.size === "lg") {
          return false;
        }
        return true;
      };
      this.setInstanceStyle("avatar", selectorFactory(this.instanceStyleSelectorRoot), {
        "--background-color": this.bg ?? this.paletteColor?.color,
        "--color": this.c ?? this.paletteColor?.contrast,
        "--size": isCustomSize() ? this.size : null
      });
    }
  }
  handleImageLoad() {
    this.showFallback = false;
  }
  getInitials(name) {
    if (this.initialsFormatter) {
      return this.initialsFormatter(this.label);
    }
    if (!name) {
      return "??";
    } else {
      const firstLastName = name.split(" ");
      const initials = firstLastName.map((name2, i) => {
        if (i === 0) {
          return name2[0];
        }
        if (i === firstLastName.length - 1) {
          return name2[0];
        }
      }).join("");
      return initials;
    }
  }
  getAvatarPalette(name) {
    if (this.colorFormatter) {
      return this.colorFormatter(this.label);
    }
    const colors = [
      config.palette.green.base,
      config.palette.teal.base,
      config.palette.cyan.base,
      config.palette.blue.base,
      config.palette.purple.base,
      config.palette.magenta.base,
      config.palette.red.base
    ];
    if (name) {
      const salt = 5;
      let sum = 0;
      for (let i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i) * salt;
      }
      const hash = sum % (colors.length - 1);
      return colors[hash];
    } else {
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }
  render() {
    return this.renderButtonTemplate(
      html`<div class="image-container"><img class="image ${classMap({ "not-visible": this.showFallback })}" alt="${this.label}" src="${this.src}" srcset="${this.srcSet}"><div role="img" aria-label="${this.label}" class="fallback ${classMap({ "not-visible": !this.showFallback })}">${this.initials}</div></div>${this.withTooltip ? html`<mte-overlay-trigger id="trigger"></mte-overlay-trigger><mte-tooltip id="tooltip" asAriaLabel>${this.label}</mte-tooltip>` : null}`
    );
  }
};
MteAvatar.styles = [styles, styles2];
__decorateClass([
  property()
], MteAvatar.prototype, "label", 2);
__decorateClass([
  property({ type: Boolean })
], MteAvatar.prototype, "withTooltip", 2);
__decorateClass([
  property()
], MteAvatar.prototype, "src", 2);
__decorateClass([
  property()
], MteAvatar.prototype, "srcSet", 2);
__decorateClass([
  property({ reflect: true })
], MteAvatar.prototype, "size", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteAvatar.prototype, "bg", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteAvatar.prototype, "c", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteAvatar.prototype, "withoutElevation", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], MteAvatar.prototype, "withBorder", 2);
__decorateClass([
  property()
], MteAvatar.prototype, "initialsFormatter", 2);
__decorateClass([
  property()
], MteAvatar.prototype, "colorFormatter", 2);
__decorateClass([
  query("img")
], MteAvatar.prototype, "image", 2);
__decorateClass([
  query(".fallback")
], MteAvatar.prototype, "fallback", 2);
__decorateClass([
  query("#tooltip")
], MteAvatar.prototype, "tooltipElement", 2);
__decorateClass([
  query("#trigger")
], MteAvatar.prototype, "overlayTriggerElement", 2);
__decorateClass([
  state()
], MteAvatar.prototype, "showFallback", 2);
MteAvatar = __decorateClass([
  defineElement("mte-avatar")
], MteAvatar);

// src/atomic/avatar/avatar-group.element.ts
import { classMap as classMap2 } from "lit-html/directives/class-map.js";
import { html as html2 } from "lit";
import { property as property2, query as query2 } from "lit/decorators.js";

// src/atomic/avatar/avatar-group.styles.ts
import { css as css2 } from "lit";
var styles3 = css2`:host{--size:2rem;--border-radius:var(--mte-border-radius-full);--font-size:0.8rem;--color:var(--mte-ink-inverse);--weight:var(--mte-font-weight-medium);--gap:-0.75rem;--frame-width:1px;--border-width:0px;--border-color:transparent;--background-color:var(--mte-ink-2);--frame-color:var(--mte-surface-2);display:block;padding-left:calc(var(--gap)*-1)}.avatar-list{align-items:flex-start;display:flex}.avatar-list .avatar-excess-container,.avatar-list .avatar-list-item{margin-inline-start:var(--gap)}.avatar-list mte-avatar:focus-visible{z-index:1}button{all:unset}li,ul{padding:0}ul{list-style:none}.avatar-excess-container{align-items:center;border:solid var(--border-width) var(--border-color);border-radius:var(--border-radius);display:flex;height:calc(var(--size) - var(--border-width)*2);justify-content:center;position:relative;width:calc(var(--size) - var(--border-width)*2)}.avatar-excess-container.is-popover{cursor:pointer}.avatar-excess{align-items:center;background-color:var(--background-color);border:var(--frame-width) solid var(--frame-color);border-radius:var(--border-radius);color:var(--color);display:flex;font-size:var(--font-size);font-weight:var(--weight);height:calc(var(--size) - var(--frame-width)*2 - var(--border-width)*2);justify-content:center;width:calc(var(--size) - var(--frame-width)*2 - var(--border-width)*2)}:host([size=md]){--gap:-0.625rem;--size:3rem;--font-size:1.25rem;--frame-width:2px}:host([size=lg]){--gap:-1.5rem;--size:8rem;--font-size:3.2rem;--frame-width:4px;--weight:var(--mte-font-weight-regular)}:host([radius=md]){--border-radius:var(--mte-border-radius-full)}:host([radius=sm]){--border-radius:var(--mte-border-radius-lg)}.avatar-excess-container:focus-visible:not(.disabled):not([disabled]):not(:disabled):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);bottom:-2px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-2px;pointer-events:none;position:absolute;right:-2px;top:-2px;z-index:9}`;

// src/atomic/avatar/avatar-group.element.ts
import { ifDefined } from "lit-html/directives/if-defined.js";
var MteAvatarGroup = class extends RadiusMixin(
  StylePartsMixin(MteElement)
) {
  constructor() {
    super(...arguments);
    this.size = "md";
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("gap")) {
      this.setInstanceStyle("avatar-group", selectorFactory(this.instanceStyleSelectorRoot), {
        "--gap": this.gap
      });
    }
  }
  renderItem(item) {
    return html2`<li class="avatar-list-item"><mte-avatar href="${ifDefined(item.href)}" src="${ifDefined(item.src)}" srcSet="${ifDefined(item.srcSet)}" label="${item.label}" c="${ifDefined(item.c)}" bg="${ifDefined(item.bg)}" size="${ifDefined(this.size)}" radius="${ifDefined(this.radius)}" .colorFormatter="${item.colorFormatter}" .initialsFormatter="${item.initialsFormatter}" ?withoutElevation="${true}" ?withTooltip="${item.withTooltip}"></mte-avatar></li>`;
  }
  renderItems() {
    if (!this.items) {
      return;
    }
    if (this.limit && this.limit < this.items.length) {
      const visibleItems = this.items?.slice(0, this.limit);
      const excessItems = this.items?.slice(this.limit, this.items.length);
      const names = excessItems.map((excessItem) => {
        return excessItem.label;
      });
      let allItems = visibleItems.map((item) => this.renderItem(item));
      const hasLink = excessItems.find((item) => {
        return item.href;
      });
      return html2`${allItems}<li><mte-overlay-trigger><button id="trigger" type="button" slot="trigger" class="avatar-excess-container ${classMap2({ "is-popover": !!hasLink })}"><div class="avatar-excess">+${excessItems.length}</div></button> ${hasLink ? html2`<mte-popover withoutPortal @onClose="${() => this.triggerElem.focus()}" id="popover" slot="overlay"><ul>${excessItems.map((item) => {
        return item.href ? html2`<li><mte-link href="${ifDefined(item.href)}">${item.label}</mte-link></li>` : html2`<li>${item.label}</li>`;
      })}</ul></mte-popover>` : html2`<mte-tooltip slot="overlay">${names.map((name) => {
        return html2`<div>${name}</div>`;
      })}</mte-tooltip>`}</mte-overlay-trigger></li>`;
    }
    if (this.items) {
      return this.items.map((item) => this.renderItem(item));
    }
  }
  render() {
    return html2`${this.instanceStyles}<ul class="avatar-list">${this.renderItems()}</ul>`;
  }
};
MteAvatarGroup.styles = [styles, styles3];
__decorateClass([
  property2({ type: Number })
], MteAvatarGroup.prototype, "limit", 2);
__decorateClass([
  property2({ reflect: true })
], MteAvatarGroup.prototype, "size", 2);
__decorateClass([
  property2()
], MteAvatarGroup.prototype, "gap", 2);
__decorateClass([
  property2({ type: Array })
], MteAvatarGroup.prototype, "items", 2);
__decorateClass([
  query2("#trigger")
], MteAvatarGroup.prototype, "triggerElem", 2);
MteAvatarGroup = __decorateClass([
  defineElement("mte-avatar-group")
], MteAvatarGroup);
export {
  MteAvatar,
  MteAvatarGroup
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hdmF0YXIiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hdmF0YXIvYXZhdGFyLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2F2YXRhciIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2F2YXRhci9hdmF0YXItZ3JvdXAuc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1zaXplOjJyZW07LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLWZ1bGwpOy0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYm9yZGVyLXdpZHRoOjBweDstLWZvbnQtc2l6ZTowLjhyZW07LS13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7LS1mcmFtZS13aWR0aDoxcHg7LS1mcmFtZS1jb2xvcjp2YXIoLS1tdGUtc3VyZmFjZS0yKTstLWVsZXZhdGlvbjp2YXIoLS1tdGUtZWxldmF0aW9uLXoxKTthbGlnbi1pdGVtczpjZW50ZXI7Ym9yZGVyOnNvbGlkIHZhcigtLWJvcmRlci13aWR0aCkgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JveC1zaGFkb3c6dmFyKC0tZWxldmF0aW9uKTtkaXNwbGF5OmZsZXg7aGVpZ2h0OnZhcigtLXNpemUpO2p1c3RpZnktY29udGVudDpjZW50ZXI7b3V0bGluZTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOnZhcigtLXNpemUpfTpob3N0KFtocmVmXSl7Y3Vyc29yOnBvaW50ZXJ9Omhvc3QoW3NpemU9bWRdKXstLXNpemU6M3JlbTstLWZvbnQtc2l6ZToxLjI1cmVtOy0tZnJhbWUtd2lkdGg6MnB4fTpob3N0KFtzaXplPWxnXSl7LS1zaXplOjhyZW07LS1mb250LXNpemU6My4ycmVtOy0tZnJhbWUtd2lkdGg6NHB4Oy0td2VpZ2h0OnZhcigtLW10ZS1mb250LXdlaWdodC1yZWd1bGFyKX06aG9zdChbcmFkaXVzPW1kXSl7LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLWZ1bGwpfTpob3N0KFtyYWRpdXM9c21dKXstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbGcpfTpob3N0KFt3aXRob3V0RWxldmF0aW9uXSl7LS1lbGV2YXRpb246dmFyKC0tbXRlLWVsZXZhdGlvbi16MCl9Omhvc3QoW3dpdGhCb3JkZXJdKXstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTEpOy0tYm9yZGVyLXdpZHRoOjFweH0uaW1hZ2UtY29udGFpbmVye2NvbG9yOnZhcigtLWNvbG9yKTtkaXNwbGF5OmdyaWQ7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0td2VpZ2h0KTtncmlkLXRlbXBsYXRlLWFyZWFzOlwiaW1hZ2VcIjtoZWlnaHQ6Y2FsYyh2YXIoLS1zaXplKSAtIHZhcigtLWJvcmRlci13aWR0aCkqMik7d2lkdGg6Y2FsYyh2YXIoLS1zaXplKSAtIHZhcigtLWJvcmRlci13aWR0aCkqMil9LmZhbGxiYWNrLC5pbWFnZS1jb250YWluZXJ7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmZhbGxiYWNre2JhY2tncm91bmQtY29sb3I6dmFyKC0tYmFja2dyb3VuZC1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3gtc2hhZG93OnZhcigtLWVsZXZhdGlvbik7ZGlzcGxheTpmbGV4fS5mYWxsYmFjaywuaW1hZ2V7Ym9yZGVyOnZhcigtLWZyYW1lLXdpZHRoKSBzb2xpZCB2YXIoLS1mcmFtZS1jb2xvcik7Z3JpZC1hcmVhOmltYWdlO2hlaWdodDpjYWxjKHZhcigtLXNpemUpIC0gdmFyKC0tZnJhbWUtd2lkdGgpKjIgLSB2YXIoLS1ib3JkZXItd2lkdGgpKjIpO3dpZHRoOmNhbGModmFyKC0tc2l6ZSkgLSB2YXIoLS1mcmFtZS13aWR0aCkqMiAtIHZhcigtLWJvcmRlci13aWR0aCkqMil9LmltYWdle2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyl9Lm5vdC12aXNpYmxle2Rpc3BsYXk6bm9uZX06aG9zdCg6Zm9jdXMtdmlzaWJsZTpub3QoLmRpc2FibGVkKTpub3QoW2Rpc2FibGVkXSk6bm90KDpkaXNhYmxlZCkpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvdHRvbTotMnB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDotMnB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTJweDt0b3A6LTJweDt6LWluZGV4Ojl9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tc2l6ZToycmVtOy0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1mdWxsKTstLWZvbnQtc2l6ZTowLjhyZW07LS1jb2xvcjp2YXIoLS1tdGUtaW5rLWludmVyc2UpOy0td2VpZ2h0OnZhcigtLW10ZS1mb250LXdlaWdodC1tZWRpdW0pOy0tZ2FwOi0wLjc1cmVtOy0tZnJhbWUtd2lkdGg6MXB4Oy0tYm9yZGVyLXdpZHRoOjBweDstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtY29sb3I6dmFyKC0tbXRlLWluay0yKTstLWZyYW1lLWNvbG9yOnZhcigtLW10ZS1zdXJmYWNlLTIpO2Rpc3BsYXk6YmxvY2s7cGFkZGluZy1sZWZ0OmNhbGModmFyKC0tZ2FwKSotMSl9LmF2YXRhci1saXN0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7ZGlzcGxheTpmbGV4fS5hdmF0YXItbGlzdCAuYXZhdGFyLWV4Y2Vzcy1jb250YWluZXIsLmF2YXRhci1saXN0IC5hdmF0YXItbGlzdC1pdGVte21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0tZ2FwKX0uYXZhdGFyLWxpc3QgbXRlLWF2YXRhcjpmb2N1cy12aXNpYmxle3otaW5kZXg6MX1idXR0b257YWxsOnVuc2V0fWxpLHVse3BhZGRpbmc6MH11bHtsaXN0LXN0eWxlOm5vbmV9LmF2YXRhci1leGNlc3MtY29udGFpbmVye2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXI6c29saWQgdmFyKC0tYm9yZGVyLXdpZHRoKSB2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7ZGlzcGxheTpmbGV4O2hlaWdodDpjYWxjKHZhcigtLXNpemUpIC0gdmFyKC0tYm9yZGVyLXdpZHRoKSoyKTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOmNhbGModmFyKC0tc2l6ZSkgLSB2YXIoLS1ib3JkZXItd2lkdGgpKjIpfS5hdmF0YXItZXhjZXNzLWNvbnRhaW5lci5pcy1wb3BvdmVye2N1cnNvcjpwb2ludGVyfS5hdmF0YXItZXhjZXNze2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJhY2tncm91bmQtY29sb3IpO2JvcmRlcjp2YXIoLS1mcmFtZS13aWR0aCkgc29saWQgdmFyKC0tZnJhbWUtY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Y29sb3I6dmFyKC0tY29sb3IpO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS13ZWlnaHQpO2hlaWdodDpjYWxjKHZhcigtLXNpemUpIC0gdmFyKC0tZnJhbWUtd2lkdGgpKjIgLSB2YXIoLS1ib3JkZXItd2lkdGgpKjIpO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6Y2FsYyh2YXIoLS1zaXplKSAtIHZhcigtLWZyYW1lLXdpZHRoKSoyIC0gdmFyKC0tYm9yZGVyLXdpZHRoKSoyKX06aG9zdChbc2l6ZT1tZF0pey0tZ2FwOi0wLjYyNXJlbTstLXNpemU6M3JlbTstLWZvbnQtc2l6ZToxLjI1cmVtOy0tZnJhbWUtd2lkdGg6MnB4fTpob3N0KFtzaXplPWxnXSl7LS1nYXA6LTEuNXJlbTstLXNpemU6OHJlbTstLWZvbnQtc2l6ZTozLjJyZW07LS1mcmFtZS13aWR0aDo0cHg7LS13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpfTpob3N0KFtyYWRpdXM9bWRdKXstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtZnVsbCl9Omhvc3QoW3JhZGl1cz1zbV0pey0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1sZyl9LmF2YXRhci1leGNlc3MtY29udGFpbmVyOmZvY3VzLXZpc2libGU6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvdHRvbTotMnB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDotMnB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTJweDt0b3A6LTJweDt6LWluZGV4Ojl9YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsVUFBVSxPQUFPLGFBQWE7QUFDdkMsU0FBUyxnQkFBZ0I7OztBQ0Z6QixTQUFTLFdBQVc7QUFBYSxJQUFNQSxVQUFTOzs7QURpQ3pDLElBQU0sWUFBTixjQUF3QjtFQUM3QixZQUFZLGdCQUFtRCxVQUFVLENBQUM7QUFDNUUsRUFBRTtFQUZLOztBQVN3Qix1QkFBZTtBQVNmLGdCQUF1QztBQWF4Qiw0QkFBb0I7QUFHcEIsc0JBQWM7QUFlakQsd0JBQXdCOztFQVFqQyxvQkFBMEI7QUFDeEIsVUFBTSxrQkFBa0I7QUFDeEIsU0FBSyxlQUFlLEtBQUssaUJBQWlCLEtBQUssS0FBSztBQUNwRCxTQUFLLFdBQVcsS0FBSyxZQUFZLEtBQUssS0FBSztBQUUzQyxTQUFLLGVBQWUsS0FBSyxNQUFNO0FBQzdCLFdBQUssT0FBTyxpQkFBaUIsUUFBUSxDQUFDLFVBQVU7QUFDOUMsYUFBSyxnQkFBZ0I7TUFDdkIsQ0FBQztJQUNILENBQUM7RUFDSDtFQUVBLGFBQWEsY0FBYztBQUN6QixVQUFNLGFBQWEsWUFBWTtBQUMvQixTQUFLLE1BQU0sWUFBWSxzQkFBc0IsS0FBSyxjQUFjLEtBQUs7QUFDckUsU0FBSyxNQUFNLFlBQVksV0FBVyxLQUFLLGNBQWMsUUFBUTtFQUMvRDtFQUVBLFFBQVEsbUJBQXFDO0FBQzNDLFVBQU0sUUFBUSxpQkFBaUI7QUFDL0IsUUFBSSxrQkFBa0IsSUFBSSxPQUFPLEtBQUssa0JBQWtCLElBQUksYUFBYSxHQUFHO0FBQzFFLFVBQUksS0FBSyx1QkFBdUI7QUFDOUIsYUFBSyxzQkFBc0IsaUJBQWlCLEtBQUs7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LEtBQUsscUJBRXJEQSxZQUFXLEtBQUssS0FBSztNQUMzQixDQUFDLENBQUMsd0JBR05BLG9DQUVNLE1BQU0sSUFBSSxDQUFDLFNBQVM7QUFDcEIsZUFBT0EsYUFBWSxJQUFJO01BQ3pCLENBQUMsQ0FBQyxnQkFFTDtJQUdiO0FBRUEsUUFBSSxLQUFLLE9BQU87QUFDZCxhQUFPLEtBQUssTUFBTSxJQUFJLENBQUMsU0FBUyxLQUFLLFdBQVcsSUFBSSxDQUFDO0lBQ3ZEO0VBQ0Y7RUFFQSxTQUFTO0FBQ1AsV0FBT0EsUUFBTyxLQUFLLGNBQWMsMkJBRTNCLEtBQUssWUFBWSxDQUFDO0VBRTFCO0FBQ0Y7QUFoSGEsZUFHSixTQUFTLENBQUMsUUFBWUUsT0FBTTtBQUdQO0VBQTNCQyxVQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7R0FOZixlQU1pQjtBQUdDO0VBQTVCQSxVQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FUaEIsZUFTa0I7QUFHakI7RUFBWEEsVUFBUztHQVpDLGVBWUM7QUFHZTtFQUExQkEsVUFBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0dBZmQsZUFlZ0I7QUFFUjtFQUFsQkMsT0FBTSxVQUFVO0dBakJOLGVBaUJRO0FBakJSLGlCQUFOO0VBRE4sY0FBYyxrQkFBa0I7R0FDcEI7IiwKICAibmFtZXMiOiBbInN0eWxlcyIsICJuYW1lIiwgInN0eWxlcyIsICJjbGFzc01hcCIsICJodG1sIiwgInByb3BlcnR5IiwgInF1ZXJ5IiwgImNzcyIsICJzdHlsZXMiLCAiaHRtbCIsICJjbGFzc01hcCIsICJzdHlsZXMiLCAicHJvcGVydHkiLCAicXVlcnkiXQp9Cg==
