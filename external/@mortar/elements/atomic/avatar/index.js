import "../../chunks/chunk.Z4YXMBVY.js";
import "../../chunks/chunk.WORXKSBS.js";
import "../../chunks/chunk.HBUKDWVJ.js";
import "../../chunks/chunk.4XRLQ45E.js";
import "../../chunks/chunk.AGXDFGNI.js";
import "../../chunks/chunk.AFBGVPX2.js";
import "../../chunks/chunk.FSBXRO6N.js";
import "../../chunks/chunk.5AAXKTSO.js";
import "../../chunks/chunk.D6N6Z2UH.js";
import "../../chunks/chunk.F33MBUAV.js";
import "../../chunks/chunk.SRHT6JKE.js";
import "../../chunks/chunk.CFKDY3QJ.js";
import "../../chunks/chunk.D4QL7DP6.js";
import "../../chunks/chunk.L7F3KXB6.js";
import {
  ButtonMixin,
  MteElement,
  RadiusMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  styles3 as styles,
  styles7 as styles2
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/avatar/avatar.element.ts
import { html } from "lit";
import { property, query, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { config, selectorFactory } from "@mortar/styles";

// src/atomic/avatar/avatar.styles.ts
import { css } from "lit";
var styles3 = css`:host{--size:2rem;--border-radius:var(--mte-border-radius-full);--border-color:transparent;--border-width:0px;--font-size:0.8rem;--weight:var(--mte-font-weight-medium);--frame-width:1px;--frame-color:var(--mte-surface-2);--elevation:var(--mte-elevation-z1);align-items:center;border:solid var(--border-width) var(--border-color);border-radius:var(--border-radius);box-shadow:var(--elevation);display:flex;height:var(--size);justify-content:center;outline:none;position:relative;width:var(--size)}:host([href]){cursor:pointer}:host([size=md]){--size:3rem;--font-size:1.25rem;--frame-width:2px}:host([size=lg]){--size:8rem;--font-size:3.2rem;--frame-width:4px;--weight:var(--mte-font-weight-regular)}:host([radius=md]){--border-radius:var(--mte-border-radius-full)}:host([radius=sm]){--border-radius:var(--mte-border-radius-lg)}:host([withoutElevation]){--elevation:var(--mte-elevation-z0)}:host([withBorder]){--border-color:var(--mte-border-1);--border-width:1px}.image-container{color:var(--color);display:grid;font-size:var(--font-size);font-weight:var(--weight);grid-template-areas:"image";height:calc(var(--size) - var(--border-width)*2);width:calc(var(--size) - var(--border-width)*2)}.fallback,.image-container{align-items:center;justify-content:center}.fallback{background-color:var(--background-color);border-radius:var(--border-radius);box-shadow:var(--elevation);display:flex}.fallback,.image{border:var(--frame-width) solid var(--frame-color);grid-area:image;height:calc(var(--size) - var(--frame-width)*2 - var(--border-width)*2);width:calc(var(--size) - var(--frame-width)*2 - var(--border-width)*2)}.image{border-radius:var(--border-radius)}.not-visible{display:none}:host(:focus-visible:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);bottom:-2px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-2px;pointer-events:none;position:absolute;right:-2px;top:-2px;z-index:9}`;

// src/atomic/avatar/avatar.element.ts
import { ifDefined } from "lit-html/directives/if-defined.js";
var MteAvatar = class extends ButtonMixin(
  RadiusMixin(StylePartsMixin(MteElement))
) {
  constructor() {
    super(...arguments);
    this.withTooltip = false;
    this.size = "md";
    this.withoutElevation = false;
    this.withBorder = false;
    this.showFallback = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      this.handleSrcUpdate();
    });
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("src") || changedProperties.has("srcSet")) {
      this.handleSrcUpdate();
    }
    if (changedProperties.has("label") || changedProperties.has("withTooltip")) {
      this.handleFallback();
      if (this.overlayTriggerElement) {
        this.overlayTriggerElement.overlayElement = this.tooltipElement;
        this.overlayTriggerElement.triggerElement = this;
      }
    }
  }
  handleSrcUpdate() {
    if (!this.src && !this.srcSet) {
      this.showFallback = true;
      this.handleFallback();
      return;
    }
    const type = this.srcSet ? "srcSet" : "src";
    const source = type === "srcSet" ? this.srcSet : this.src;
    this.loadImage(type, source).then(() => {
      this.handleImageLoad();
    }).catch(() => {
      this.handleImageError();
    });
  }
  handleFallback() {
    if (!this.showFallback) {
      return;
    }
    this.paletteColor = this.getAvatarPalette(this.label);
    this.initials = this.getInitials(this.label);
    const backgroundColor = this.bg ?? this.paletteColor?.color;
    this.style.setProperty("--background-color", backgroundColor);
    const color = this.c ?? this.paletteColor?.contrast;
    this.style.setProperty("--color", color);
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
  // We need to know whether or not the image will load or error and attaching error event to `img` doesn't work.
  loadImage(type, source) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", resolve);
      image.addEventListener("error", reject);
      if (type === "srcSet") {
        image.srcset = source;
      } else {
        image.src = source;
      }
    });
  }
  handleImageLoad() {
    this.showFallback = false;
    this.requestUpdate();
  }
  handleImageError() {
    this.showFallback = true;
    this.handleFallback();
    this.requestUpdate();
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
      html`<div class="image-container"><img class="image ${classMap({ "not-visible": this.showFallback })}" alt="${this.label}" src="${ifDefined(this.src)}" srcset="${ifDefined(this.srcSet)}"><div role="img" aria-label="${this.label}" class="fallback ${classMap({ "not-visible": !this.showFallback })}">${this.initials ? html`${this.initials}` : null}</div></div>${this.withTooltip ? html`<mte-overlay-trigger id="trigger"></mte-overlay-trigger><mte-tooltip id="tooltip" asAriaLabel>${this.label}</mte-tooltip>` : null}`
    );
  }
};
MteAvatar.styles = [styles2, styles, styles3];
__decorateClass([
  property({ reflect: true })
], MteAvatar.prototype, "label", 2);
__decorateClass([
  property({ type: Boolean })
], MteAvatar.prototype, "withTooltip", 2);
__decorateClass([
  property({ reflect: true })
], MteAvatar.prototype, "src", 2);
__decorateClass([
  property({ reflect: true })
], MteAvatar.prototype, "srcSet", 2);
__decorateClass([
  property({ reflect: true })
], MteAvatar.prototype, "size", 2);
__decorateClass([
  property({ reflect: true })
], MteAvatar.prototype, "bg", 2);
__decorateClass([
  property({ reflect: true })
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
  query("#tooltip")
], MteAvatar.prototype, "tooltipElement", 2);
__decorateClass([
  query("#trigger")
], MteAvatar.prototype, "overlayTriggerElement", 2);
__decorateClass([
  state()
], MteAvatar.prototype, "showFallback", 2);
__decorateClass([
  state()
], MteAvatar.prototype, "initials", 2);
MteAvatar = __decorateClass([
  defineElement("mte-avatar")
], MteAvatar);

// src/atomic/avatar/avatar-group.element.ts
import { classMap as classMap2 } from "lit-html/directives/class-map.js";
import { html as html2 } from "lit";
import { property as property2, query as query2 } from "lit/decorators.js";

// src/atomic/avatar/avatar-group.styles.ts
import { css as css2 } from "lit";
var styles4 = css2`:host{--size:2rem;--border-radius:var(--mte-border-radius-full);--font-size:0.8rem;--color:var(--mte-ink-inverse);--weight:var(--mte-font-weight-medium);--gap:-0.75rem;--frame-width:1px;--border-width:0px;--border-color:transparent;--background-color:var(--mte-ink-2);--frame-color:var(--mte-surface-2);display:block;padding-left:calc(var(--gap)*-1)}.avatar-list{align-items:flex-start;display:flex}.avatar-list .avatar-excess-container,.avatar-list .avatar-list-item{margin-inline-start:var(--gap)}.avatar-list mte-avatar:focus-visible{z-index:1}button{all:unset}li,ul{padding:0}ul{list-style:none}.avatar-excess-container{align-items:center;border:solid var(--border-width) var(--border-color);border-radius:var(--border-radius);display:flex;height:calc(var(--size) - var(--border-width)*2);justify-content:center;position:relative;width:calc(var(--size) - var(--border-width)*2)}.avatar-excess-container.is-popover{cursor:pointer}.avatar-excess{align-items:center;background-color:var(--background-color);border:var(--frame-width) solid var(--frame-color);border-radius:var(--border-radius);color:var(--color);display:flex;font-size:var(--font-size);font-weight:var(--weight);height:calc(var(--size) - var(--frame-width)*2 - var(--border-width)*2);justify-content:center;width:calc(var(--size) - var(--frame-width)*2 - var(--border-width)*2)}:host([size=md]){--gap:-0.625rem;--size:3rem;--font-size:1.25rem;--frame-width:2px}:host([size=lg]){--gap:-1.5rem;--size:8rem;--font-size:3.2rem;--frame-width:4px;--weight:var(--mte-font-weight-regular)}:host([radius=md]){--border-radius:var(--mte-border-radius-full)}:host([radius=sm]){--border-radius:var(--mte-border-radius-lg)}.avatar-excess-container:focus-visible:not(.disabled):not([disabled]):not(:disabled):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);bottom:-2px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-2px;pointer-events:none;position:absolute;right:-2px;top:-2px;z-index:9}`;

// src/atomic/avatar/avatar-group.element.ts
import { ifDefined as ifDefined2 } from "lit-html/directives/if-defined.js";
import { selectorFactory as selectorFactory2 } from "@mortar/styles";
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
      this.setInstanceStyle("avatar-group", selectorFactory2(this.instanceStyleSelectorRoot), {
        "--gap": this.gap
      });
    }
  }
  renderItem(item) {
    return html2`<li class="avatar-list-item"><mte-avatar href="${ifDefined2(item.href)}" src="${ifDefined2(item.src)}" srcSet="${ifDefined2(item.srcSet)}" label="${item.label}" c="${ifDefined2(item.c)}" bg="${ifDefined2(item.bg)}" size="${ifDefined2(this.size)}" radius="${ifDefined2(this.radius)}" .colorFormatter="${item.colorFormatter}" .initialsFormatter="${item.initialsFormatter}" ?withoutElevation="${true}" ?withTooltip="${item.withTooltip}"></mte-avatar></li>`;
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
        return item.href ? html2`<li><mte-link href="${ifDefined2(item.href)}">${item.label}</mte-link></li>` : html2`<li>${item.label}</li>`;
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
MteAvatarGroup.styles = [styles2, styles4];
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hdmF0YXIiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hdmF0YXIvYXZhdGFyLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2F2YXRhciIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2F2YXRhci9hdmF0YXItZ3JvdXAuc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1zaXplOjJyZW07LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLWZ1bGwpOy0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYm9yZGVyLXdpZHRoOjBweDstLWZvbnQtc2l6ZTowLjhyZW07LS13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7LS1mcmFtZS13aWR0aDoxcHg7LS1mcmFtZS1jb2xvcjp2YXIoLS1tdGUtc3VyZmFjZS0yKTstLWVsZXZhdGlvbjp2YXIoLS1tdGUtZWxldmF0aW9uLXoxKTthbGlnbi1pdGVtczpjZW50ZXI7Ym9yZGVyOnNvbGlkIHZhcigtLWJvcmRlci13aWR0aCkgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JveC1zaGFkb3c6dmFyKC0tZWxldmF0aW9uKTtkaXNwbGF5OmZsZXg7aGVpZ2h0OnZhcigtLXNpemUpO2p1c3RpZnktY29udGVudDpjZW50ZXI7b3V0bGluZTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOnZhcigtLXNpemUpfTpob3N0KFtocmVmXSl7Y3Vyc29yOnBvaW50ZXJ9Omhvc3QoW3NpemU9bWRdKXstLXNpemU6M3JlbTstLWZvbnQtc2l6ZToxLjI1cmVtOy0tZnJhbWUtd2lkdGg6MnB4fTpob3N0KFtzaXplPWxnXSl7LS1zaXplOjhyZW07LS1mb250LXNpemU6My4ycmVtOy0tZnJhbWUtd2lkdGg6NHB4Oy0td2VpZ2h0OnZhcigtLW10ZS1mb250LXdlaWdodC1yZWd1bGFyKX06aG9zdChbcmFkaXVzPW1kXSl7LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLWZ1bGwpfTpob3N0KFtyYWRpdXM9c21dKXstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbGcpfTpob3N0KFt3aXRob3V0RWxldmF0aW9uXSl7LS1lbGV2YXRpb246dmFyKC0tbXRlLWVsZXZhdGlvbi16MCl9Omhvc3QoW3dpdGhCb3JkZXJdKXstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTEpOy0tYm9yZGVyLXdpZHRoOjFweH0uaW1hZ2UtY29udGFpbmVye2NvbG9yOnZhcigtLWNvbG9yKTtkaXNwbGF5OmdyaWQ7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0td2VpZ2h0KTtncmlkLXRlbXBsYXRlLWFyZWFzOlwiaW1hZ2VcIjtoZWlnaHQ6Y2FsYyh2YXIoLS1zaXplKSAtIHZhcigtLWJvcmRlci13aWR0aCkqMik7d2lkdGg6Y2FsYyh2YXIoLS1zaXplKSAtIHZhcigtLWJvcmRlci13aWR0aCkqMil9LmZhbGxiYWNrLC5pbWFnZS1jb250YWluZXJ7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmZhbGxiYWNre2JhY2tncm91bmQtY29sb3I6dmFyKC0tYmFja2dyb3VuZC1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3gtc2hhZG93OnZhcigtLWVsZXZhdGlvbik7ZGlzcGxheTpmbGV4fS5mYWxsYmFjaywuaW1hZ2V7Ym9yZGVyOnZhcigtLWZyYW1lLXdpZHRoKSBzb2xpZCB2YXIoLS1mcmFtZS1jb2xvcik7Z3JpZC1hcmVhOmltYWdlO2hlaWdodDpjYWxjKHZhcigtLXNpemUpIC0gdmFyKC0tZnJhbWUtd2lkdGgpKjIgLSB2YXIoLS1ib3JkZXItd2lkdGgpKjIpO3dpZHRoOmNhbGModmFyKC0tc2l6ZSkgLSB2YXIoLS1mcmFtZS13aWR0aCkqMiAtIHZhcigtLWJvcmRlci13aWR0aCkqMil9LmltYWdle2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyl9Lm5vdC12aXNpYmxle2Rpc3BsYXk6bm9uZX06aG9zdCg6Zm9jdXMtdmlzaWJsZTpub3QoLmRpc2FibGVkKTpub3QoW2Rpc2FibGVkXSk6bm90KDpkaXNhYmxlZCkpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvdHRvbTotMnB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDotMnB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTJweDt0b3A6LTJweDt6LWluZGV4Ojl9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tc2l6ZToycmVtOy0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1mdWxsKTstLWZvbnQtc2l6ZTowLjhyZW07LS1jb2xvcjp2YXIoLS1tdGUtaW5rLWludmVyc2UpOy0td2VpZ2h0OnZhcigtLW10ZS1mb250LXdlaWdodC1tZWRpdW0pOy0tZ2FwOi0wLjc1cmVtOy0tZnJhbWUtd2lkdGg6MXB4Oy0tYm9yZGVyLXdpZHRoOjBweDstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtY29sb3I6dmFyKC0tbXRlLWluay0yKTstLWZyYW1lLWNvbG9yOnZhcigtLW10ZS1zdXJmYWNlLTIpO2Rpc3BsYXk6YmxvY2s7cGFkZGluZy1sZWZ0OmNhbGModmFyKC0tZ2FwKSotMSl9LmF2YXRhci1saXN0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7ZGlzcGxheTpmbGV4fS5hdmF0YXItbGlzdCAuYXZhdGFyLWV4Y2Vzcy1jb250YWluZXIsLmF2YXRhci1saXN0IC5hdmF0YXItbGlzdC1pdGVte21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0tZ2FwKX0uYXZhdGFyLWxpc3QgbXRlLWF2YXRhcjpmb2N1cy12aXNpYmxle3otaW5kZXg6MX1idXR0b257YWxsOnVuc2V0fWxpLHVse3BhZGRpbmc6MH11bHtsaXN0LXN0eWxlOm5vbmV9LmF2YXRhci1leGNlc3MtY29udGFpbmVye2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXI6c29saWQgdmFyKC0tYm9yZGVyLXdpZHRoKSB2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7ZGlzcGxheTpmbGV4O2hlaWdodDpjYWxjKHZhcigtLXNpemUpIC0gdmFyKC0tYm9yZGVyLXdpZHRoKSoyKTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOmNhbGModmFyKC0tc2l6ZSkgLSB2YXIoLS1ib3JkZXItd2lkdGgpKjIpfS5hdmF0YXItZXhjZXNzLWNvbnRhaW5lci5pcy1wb3BvdmVye2N1cnNvcjpwb2ludGVyfS5hdmF0YXItZXhjZXNze2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJhY2tncm91bmQtY29sb3IpO2JvcmRlcjp2YXIoLS1mcmFtZS13aWR0aCkgc29saWQgdmFyKC0tZnJhbWUtY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Y29sb3I6dmFyKC0tY29sb3IpO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS13ZWlnaHQpO2hlaWdodDpjYWxjKHZhcigtLXNpemUpIC0gdmFyKC0tZnJhbWUtd2lkdGgpKjIgLSB2YXIoLS1ib3JkZXItd2lkdGgpKjIpO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6Y2FsYyh2YXIoLS1zaXplKSAtIHZhcigtLWZyYW1lLXdpZHRoKSoyIC0gdmFyKC0tYm9yZGVyLXdpZHRoKSoyKX06aG9zdChbc2l6ZT1tZF0pey0tZ2FwOi0wLjYyNXJlbTstLXNpemU6M3JlbTstLWZvbnQtc2l6ZToxLjI1cmVtOy0tZnJhbWUtd2lkdGg6MnB4fTpob3N0KFtzaXplPWxnXSl7LS1nYXA6LTEuNXJlbTstLXNpemU6OHJlbTstLWZvbnQtc2l6ZTozLjJyZW07LS1mcmFtZS13aWR0aDo0cHg7LS13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpfTpob3N0KFtyYWRpdXM9bWRdKXstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtZnVsbCl9Omhvc3QoW3JhZGl1cz1zbV0pey0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1sZyl9LmF2YXRhci1leGNlc3MtY29udGFpbmVyOmZvY3VzLXZpc2libGU6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvdHRvbTotMnB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDotMnB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTJweDt0b3A6LTJweDt6LWluZGV4Ojl9YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsWUFBWTtBQUNyQixTQUFTLFVBQVUsT0FBTyxhQUFhO0FBQ3ZDLFNBQVMsZ0JBQWdCO0FBV3pCLFNBQVMsUUFBUSx1QkFBdUI7OztBQ2J4QyxTQUFTLFdBQVc7QUFBYSxJQUFNQSxVQUFTOzs7QURvQmhELFNBQVMsaUJBQWlCO0FBYW5CLElBQU0sWUFBTixjQUF3QjtFQUM3QixZQUFZLGdCQUFtRCxVQUFVLENBQUM7QUFDNUUsRUFBRTtFQUZLOztBQVN3Qix1QkFBZTtBQVNmLGdCQUF1QztBQVN4Qiw0QkFBb0I7QUFHcEIsc0JBQWM7QUFZakQsd0JBQXdCOztFQVFqQyxvQkFBMEI7QUFDeEIsVUFBTSxrQkFBa0I7QUFDeEIsU0FBSyxlQUFlLEtBQUssTUFBTTtBQUM3QixXQUFLLGdCQUFnQjtJQUN2QixDQUFDO0VBQ0g7RUFFQSxRQUFRLG1CQUFxQztBQUMzQyxVQUFNLFFBQVEsaUJBQWlCO0FBRS9CLFFBQUksa0JBQWtCLElBQUksS0FBSyxLQUFLLGtCQUFrQixJQUFJLFFBQVEsR0FBRztBQUNuRSxXQUFLLGdCQUFnQjtJQUN2QjtBQUNBLFFBQUksa0JBQWtCLElBQUksT0FBTyxLQUFLLGtCQUFrQixJQUFJLGFBQWEsR0FBRztBQUMxRSxXQUFLLGVBQWU7QUFDcEIsVUFBSSxLQUFLLHVCQUF1QjtBQUM5QixhQUFLLHNCQUFzQixpQkFBaUIsS0FBSztBQUNqRCxhQUFLLHNCQUFzQixpQkFBaUI7TUFDOUM7SUFDRjtFQUNGO0VBRVEsa0JBQWtCO0FBQ3hCLFFBQUksQ0FBQyxLQUFLLE9BQU8sQ0FBQyxLQUFLLFFBQVE7QUFDN0IsV0FBSyxlQUFlO0FBQ3BC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QUFLLE9BQU87QUFDZCxhQUFPLEtBQUssTUFBTSxJQUFJLENBQUMsU0FBUyxLQUFLLFdBQVcsSUFBSSxDQUFDO0lBQ3ZEO0VBQ0Y7RUFFQSxTQUFTO0FBQ1AsV0FBT0EsUUFBTyxLQUFLLGNBQWMsMkJBRTNCLEtBQUssWUFBWSxDQUFDO0VBRTFCO0FBQ0Y7QUFoSGEsZUFHSixTQUFTLENBQUNHLFNBQVlBLE9BQU07QUFHUDtFQUEzQkMsVUFBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0dBTmYsZUFNaUI7QUFHQztFQUE1QkEsVUFBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBVGhCLGVBU2tCO0FBR2pCO0VBQVhBLFVBQVM7R0FaQyxlQVlDO0FBR2U7RUFBMUJBLFVBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztHQWZkLGVBZWdCO0FBRVI7RUFBbEJDLE9BQU0sVUFBVTtHQWpCTixlQWlCUTtBQWpCUixpQkFBTjtFQUROLGNBQWMsa0JBQWtCO0dBQ3BCOyIsCiAgIm5hbWVzIjogWyJzdHlsZXMiLCAibmFtZSIsICJzdHlsZXMiLCAiY2xhc3NNYXAiLCAiaHRtbCIsICJwcm9wZXJ0eSIsICJxdWVyeSIsICJjc3MiLCAic3R5bGVzIiwgImlmRGVmaW5lZCIsICJzZWxlY3RvckZhY3RvcnkiLCAic2VsZWN0b3JGYWN0b3J5IiwgImh0bWwiLCAiaWZEZWZpbmVkIiwgImNsYXNzTWFwIiwgInN0eWxlcyIsICJwcm9wZXJ0eSIsICJxdWVyeSJdCn0K
