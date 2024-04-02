import {
  styles as styles3,
  styles2 as styles4,
  styles3 as styles6
} from "../../chunks/chunk.CLITXIOY.js";
import {
  styles as styles5
} from "../../chunks/chunk.RKFIVTR3.js";
import "../../chunks/chunk.TZBVP4HI.js";
import "../../chunks/chunk.IVHA27EF.js";
import "../../chunks/chunk.SRHT6JKE.js";
import "../../chunks/chunk.DVRGAMYN.js";
import "../../chunks/chunk.D4QL7DP6.js";
import {
  MteIconRegistryService,
  mtrIconChevronRight,
  mtrIconThemeLightDark,
  mtrIconWeatherNight,
  mtrIconWeatherSunny
} from "../../chunks/chunk.M5RJHYFW.js";
import {
  ButtonMixin,
  MteElement,
  MteThemeService,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  eventEmitter,
  onUpdate,
  styles3 as styles,
  styles7 as styles2
} from "../../chunks/chunk.KVXAK6W4.js";

// src/atomic/color-scheme/color-scheme-nav-button.element.ts
import { html as html2 } from "lit";
import { property as property2, query as query2, eventOptions, state } from "lit/decorators.js";

// src/atomic/color-scheme/color-scheme-menu.element.ts
import { ifDefined } from "lit-html/directives/if-defined.js";
import { html } from "lit";
import { property, query } from "lit/decorators.js";

// src/atomic/color-scheme/color-scheme-menu.styles.ts
import { css } from "lit";
var styles7 = css`:host{position:absolute}`;

// src/atomic/color-scheme/color-scheme-menu.element.ts
var MteColorSchemeMenu = class extends MteElement {
  constructor() {
    super(...arguments);
    this.colorScheme = "light";
    this.position = "bottom";
  }
  handleColorSchemeChange() {
    if (this.colorScheme) {
      MteThemeService.setGlobalColorScheme(this.colorScheme);
    }
  }
  handleTargetChange() {
    this.linkMenuElements();
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      this.subs.push(
        MteThemeService.selectGlobalColorScheme().subscribe((newScheme) => {
          this.colorScheme = newScheme;
        })
      );
      this.linkMenuElements();
    });
  }
  open() {
    this.menuTriggerElement?.open();
  }
  close() {
    this.menuTriggerElement?.close();
  }
  getMenu() {
    return this.menuElement;
  }
  linkMenuElements() {
    if (this.menuElement) {
      this.menuTriggerElement.triggerElement = this.targetElement ?? this.parentElement ?? this.backupTriggerElement;
      if (!this.menuTriggerElement.overlayElement) {
        this.menuTriggerElement.overlayElement = this.menuElement;
      }
    }
  }
  handleSelection(event) {
    if (event.detail.value) {
      MteThemeService.setGlobalColorScheme(event.detail.value);
    }
  }
  render() {
    const lightActive = this.colorScheme === "light" ? "check" : null;
    const darkActive = this.colorScheme === "dark" ? "check" : null;
    const systemActive = this.colorScheme === "system" ? "check" : null;
    const lightAriaChecked = this.colorScheme === "light" ? "true" : "false";
    const darkAriaChecked = this.colorScheme === "dark" ? "true" : "false";
    const systemAriaChecked = this.colorScheme === "system" ? "true" : "false";
    return html`${this.instanceStyles} <span id="trigger"></span><mte-overlay-trigger id="menu-trigger"></mte-overlay-trigger><mte-menu id="menu" @onSelect="${this.handleSelection}" minw="175" triggerOn="none" position="${this.position}"><mte-menu-item role="menuitemcheckbox" aria-label='Set the color scheme to "Light"' aria-checked="${lightAriaChecked}" icon="weather-sunny" value="light" suffixIcon="${ifDefined(lightActive)}">Light</mte-menu-item><mte-menu-item role="menuitemcheckbox" aria-label='Set the color scheme to "Dark"' aria-checked="${darkAriaChecked}" icon="weather-night" value="dark" suffixIcon="${ifDefined(darkActive)}">Dark</mte-menu-item><mte-divider></mte-divider><mte-menu-item role="menuitemcheckbox" aria-label='Set the color scheme to "System"' aria-checked="${systemAriaChecked}" icon="theme-light-dark" value="system" suffixIcon="${ifDefined(systemActive)}">System</mte-menu-item></mte-menu>`;
  }
};
MteColorSchemeMenu.styles = [styles2, styles7];
__decorateClass([
  property({ reflect: true })
], MteColorSchemeMenu.prototype, "colorScheme", 2);
__decorateClass([
  property({ attribute: false })
], MteColorSchemeMenu.prototype, "targetElement", 2);
__decorateClass([
  property({ reflect: true })
], MteColorSchemeMenu.prototype, "position", 2);
__decorateClass([
  query("#menu")
], MteColorSchemeMenu.prototype, "menuElement", 2);
__decorateClass([
  query("#menu-trigger")
], MteColorSchemeMenu.prototype, "menuTriggerElement", 2);
__decorateClass([
  query("#trigger")
], MteColorSchemeMenu.prototype, "backupTriggerElement", 2);
__decorateClass([
  onUpdate("colorScheme", { waitUntilFirstUpdate: true })
], MteColorSchemeMenu.prototype, "handleColorSchemeChange", 1);
__decorateClass([
  onUpdate("targetElement")
], MteColorSchemeMenu.prototype, "handleTargetChange", 1);
MteColorSchemeMenu = __decorateClass([
  defineElement("mte-color-scheme-menu")
], MteColorSchemeMenu);

// src/atomic/color-scheme/color-scheme-nav-button.element.ts
var MteColorSchemeNavButton = class extends StylePartsMixin(MteElement) {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.role = "listitem";
    this.colorScheme = "light";
    this.label = "Adjust color scheme";
  }
  handleColorSchemeChange() {
    if (this.colorScheme) {
      MteThemeService.setGlobalColorScheme(this.colorScheme);
    }
  }
  handleCacheChange() {
    if (this.cacheTo) {
      MteThemeService.cacheColorSchemeTo(this.cacheTo);
    }
  }
  handleButtonClick(e) {
    if (this.disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      return false;
    } else {
      this.menuElement.open();
    }
  }
  toggleColorScheme() {
    if (this.colorScheme === "light") {
      this.colorScheme = "dark";
    } else {
      this.colorScheme = "light";
    }
  }
  /** Proxy focus calls */
  focus(options) {
    this.buttonElement?.focus(options);
  }
  /** Proxy click calls */
  click() {
    this.buttonElement?.click();
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      this.subs.push(
        MteThemeService.selectGlobalColorScheme().subscribe((newScheme) => {
          this.colorScheme = newScheme;
        })
      );
      this.linkTooltipElements();
      this.linkMenuElements();
    });
  }
  linkTooltipElements() {
    if (this.tooltipTriggerElement && !this.tooltipTriggerElement.overlayElement) {
      this.tooltipTriggerElement.overlayElement = this.tooltipElement;
      this.tooltipTriggerElement.triggerElement = this.buttonElement;
    }
  }
  linkMenuElements() {
    this.menuElement.targetElement = this.buttonElement;
  }
  render() {
    const activeIcon = this.colorScheme === "light" ? "weather-sunny" : this.colorScheme === "dark" ? "weather-night" : "theme-light-dark";
    return html2`${this.instanceStyles} <button class="button" part="button" ?disabled="${this.disabled}" aria-label="${this.label}" @click="${this.handleButtonClick}"><mte-icon name="${activeIcon}"></mte-icon></button><mte-overlay-trigger id="tooltip-trigger"></mte-overlay-trigger><mte-tooltip id="tooltip" position="bottom" asAriaLabel ?disabled="${this.disabled}">${this.label}</mte-tooltip><mte-color-scheme-menu id="menu" position="bottom"></mte-color-scheme-menu>`;
  }
};
MteColorSchemeNavButton.styles = [styles2, styles4, styles3];
__decorateClass([
  property2({ type: Boolean, reflect: true })
], MteColorSchemeNavButton.prototype, "disabled", 2);
__decorateClass([
  property2({ reflect: true })
], MteColorSchemeNavButton.prototype, "role", 2);
__decorateClass([
  property2({ reflect: true })
], MteColorSchemeNavButton.prototype, "colorScheme", 2);
__decorateClass([
  property2({ reflect: true })
], MteColorSchemeNavButton.prototype, "cacheTo", 2);
__decorateClass([
  state()
], MteColorSchemeNavButton.prototype, "label", 2);
__decorateClass([
  query2(".button")
], MteColorSchemeNavButton.prototype, "buttonElement", 2);
__decorateClass([
  query2("#tooltip")
], MteColorSchemeNavButton.prototype, "tooltipElement", 2);
__decorateClass([
  query2("#tooltip-trigger")
], MteColorSchemeNavButton.prototype, "tooltipTriggerElement", 2);
__decorateClass([
  query2("#menu")
], MteColorSchemeNavButton.prototype, "menuElement", 2);
__decorateClass([
  onUpdate("colorScheme", { waitUntilFirstUpdate: true })
], MteColorSchemeNavButton.prototype, "handleColorSchemeChange", 1);
__decorateClass([
  onUpdate("cacheTo")
], MteColorSchemeNavButton.prototype, "handleCacheChange", 1);
__decorateClass([
  eventOptions({ capture: true })
], MteColorSchemeNavButton.prototype, "handleButtonClick", 1);
MteColorSchemeNavButton = __decorateClass([
  defineElement("mte-color-scheme-nav-button")
], MteColorSchemeNavButton);

// src/atomic/color-scheme/color-scheme-nav-item.element.ts
import { html as html3 } from "lit";
import { property as property3, query as query3, state as state2, eventOptions as eventOptions2 } from "lit/decorators.js";
var MteColorSchemeNavItem = class extends StylePartsMixin(MteElement) {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.role = "listitem";
    this.colorScheme = "light";
    this.label = "Adjust color scheme";
  }
  handleColorSchemeChange() {
    if (this.colorScheme) {
      MteThemeService.setGlobalColorScheme(this.colorScheme);
    }
  }
  handleCacheChange() {
    if (this.cacheTo) {
      MteThemeService.cacheColorSchemeTo(this.cacheTo);
    }
  }
  handleButtonClick(e) {
    if (this.disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      return false;
    } else {
      this.menuElement?.open();
    }
  }
  toggleColorScheme() {
    if (this.colorScheme === "light") {
      this.colorScheme = "dark";
    } else {
      this.colorScheme = "light";
    }
  }
  /** Proxy focus calls */
  focus(options) {
    this.buttonElement?.focus(options);
  }
  /** Proxy click calls */
  click() {
    this.buttonElement?.click();
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      this.subs.push(
        MteThemeService.selectGlobalColorScheme().subscribe((newScheme) => {
          this.colorScheme = newScheme;
        })
      );
    });
  }
  render() {
    const activeIcon = this.colorScheme === "light" ? "weather-sunny" : this.colorScheme === "dark" ? "weather-night" : "theme-light-dark";
    return html3`${this.instanceStyles}<div class="container"><button class="button primary" part="button" ?disabled="${this.disabled}" @click="${(e) => {
      this.handleButtonClick(e);
    }}"><div part="prefix"><mte-icon autosize name="${activeIcon}"></mte-icon></div><div class="label" part="label">${this.label}</div></button><mte-color-scheme-menu id="menu" position="bottom"></mte-color-scheme-menu></div>`;
  }
};
MteColorSchemeNavItem.styles = [styles2, styles6];
MteColorSchemeNavItem.shadowRootOptions = { ...MteElement.shadowRootOptions, delegatesFocus: true };
__decorateClass([
  property3({ type: Boolean, reflect: true })
], MteColorSchemeNavItem.prototype, "disabled", 2);
__decorateClass([
  property3({ reflect: true })
], MteColorSchemeNavItem.prototype, "role", 2);
__decorateClass([
  property3({ reflect: true })
], MteColorSchemeNavItem.prototype, "colorScheme", 2);
__decorateClass([
  property3({ reflect: true })
], MteColorSchemeNavItem.prototype, "cacheTo", 2);
__decorateClass([
  state2()
], MteColorSchemeNavItem.prototype, "label", 2);
__decorateClass([
  query3(".button.primary")
], MteColorSchemeNavItem.prototype, "buttonElement", 2);
__decorateClass([
  query3("#menu")
], MteColorSchemeNavItem.prototype, "menuElement", 2);
__decorateClass([
  onUpdate("colorScheme", { waitUntilFirstUpdate: true })
], MteColorSchemeNavItem.prototype, "handleColorSchemeChange", 1);
__decorateClass([
  onUpdate("cacheTo")
], MteColorSchemeNavItem.prototype, "handleCacheChange", 1);
__decorateClass([
  eventOptions2({ capture: true })
], MteColorSchemeNavItem.prototype, "handleButtonClick", 1);
MteColorSchemeNavItem = __decorateClass([
  defineElement("mte-color-scheme-nav-item")
], MteColorSchemeNavItem);

// src/atomic/color-scheme/color-scheme-menu-item.element.ts
import { html as html4 } from "lit";
import { property as property4, query as query4, state as state3 } from "lit/decorators.js";
MteIconRegistryService.registerIcons([mtrIconChevronRight]);
var MteColorSchemeMenuItem = class extends ButtonMixin(
  StylePartsMixin(MteElement)
) {
  constructor() {
    super();
    this.withoutCloseOnClick = false;
    this.role = "menuitem";
    this.colorScheme = "light";
    this.withAltSubmenuIndicator = false;
    this.label = "Adjust color scheme";
    this.hasNestedMenu = true;
    this.handleClick = this.handleClick.bind(this);
    this.handleProxyMenuItemClicked = this.handleProxyMenuItemClicked.bind(this);
  }
  handleColorSchemeChange() {
    if (this.colorScheme) {
      MteThemeService.setGlobalColorScheme(this.colorScheme);
    }
  }
  handleCacheChange() {
    if (this.cacheTo) {
      MteThemeService.cacheColorSchemeTo(this.cacheTo);
    }
  }
  toggleColorScheme() {
    if (this.colorScheme === "light") {
      this.colorScheme = "dark";
    } else {
      this.colorScheme = "light";
    }
  }
  /** Attempts to open child menu if one exists */
  openChild() {
    this.menuElement?.open();
  }
  /** Attempts to close child menu if one exists */
  closeChild() {
    this.menuElement?.close();
  }
  /** Handles clicks on this element to alert a parent menu */
  handleClick(e) {
    this.menuElement?.open();
  }
  /** Proxies menu-item clicked events from nested menus up to parent menus */
  handleProxyMenuItemClicked(e) {
    this._menuItemClicked.emit(e.detail);
  }
  linkMenuElements() {
    if (this.menuElement) {
      this.menuElement.targetElement = this;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      this.subs.push(
        MteThemeService.selectGlobalColorScheme().subscribe((newScheme) => {
          this.colorScheme = newScheme;
        })
      );
      this.linkMenuElements();
      const nestedMenu = this.menuElement.getMenu();
      if (nestedMenu) {
        nestedMenu.isNestedMenu = true;
        nestedMenu.offset = 2;
        nestedMenu.addEventListener("menuItemClicked", this.handleProxyMenuItemClicked);
      }
    });
    this.addEventListener("click", this.handleClick);
  }
  render() {
    const activeIcon = this.colorScheme === "light" ? "weather-sunny" : this.colorScheme === "dark" ? "weather-night" : "theme-light-dark";
    const submenuIcon = this.withAltSubmenuIndicator ? "dots-horizontal" : "menu-right";
    return this.renderButtonTemplate(html4`${this.instanceStyles}<div class="prefix has-content"><mte-icon class="prop-icon" muted autosize name="${activeIcon}"></mte-icon></div><div class="label" part="label">${this.label}</div><div class="suffix"></div><span class="nested-menu has-child"><mte-icon muted autosize name="${submenuIcon}"></mte-icon></span><mte-color-scheme-menu id="menu" position="right"></mte-color-scheme-menu>`);
  }
};
MteColorSchemeMenuItem.styles = [styles2, styles, styles5];
__decorateClass([
  property4({ type: Boolean, reflect: true })
], MteColorSchemeMenuItem.prototype, "withoutCloseOnClick", 2);
__decorateClass([
  property4({ reflect: true })
], MteColorSchemeMenuItem.prototype, "role", 2);
__decorateClass([
  property4({ reflect: true })
], MteColorSchemeMenuItem.prototype, "colorScheme", 2);
__decorateClass([
  property4({ reflect: true })
], MteColorSchemeMenuItem.prototype, "cacheTo", 2);
__decorateClass([
  property4({ type: Boolean, reflect: true })
], MteColorSchemeMenuItem.prototype, "withAltSubmenuIndicator", 2);
__decorateClass([
  state3()
], MteColorSchemeMenuItem.prototype, "label", 2);
__decorateClass([
  query4("#menu")
], MteColorSchemeMenuItem.prototype, "menuElement", 2);
__decorateClass([
  eventEmitter()
], MteColorSchemeMenuItem.prototype, "_menuItemClicked", 2);
__decorateClass([
  onUpdate("colorScheme", { waitUntilFirstUpdate: true })
], MteColorSchemeMenuItem.prototype, "handleColorSchemeChange", 1);
__decorateClass([
  onUpdate("cacheTo")
], MteColorSchemeMenuItem.prototype, "handleCacheChange", 1);
MteColorSchemeMenuItem = __decorateClass([
  defineElement("mte-color-scheme-menu-item")
], MteColorSchemeMenuItem);

// src/atomic/color-scheme/index.ts
MteIconRegistryService.registerIcons([
  mtrIconWeatherSunny,
  mtrIconWeatherNight,
  mtrIconThemeLightDark
]);
export {
  MteColorSchemeMenuItem,
  MteColorSchemeNavButton,
  MteColorSchemeNavItem
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jb2xvci1zY2hlbWUiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jb2xvci1zY2hlbWUiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jb2xvci1zY2hlbWUvY29sb3Itc2NoZW1lLW1lbnUuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvY29sb3Itc2NoZW1lIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvY29sb3Itc2NoZW1lIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvY29sb3Itc2NoZW1lL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7cG9zaXRpb246YWJzb2x1dGV9YDsiLCBudWxsLCBudWxsLCAiaW1wb3J0IHsgTXRlSWNvblJlZ2lzdHJ5U2VydmljZSB9IGZyb20gJy4uL2ljb24nO1xuaW1wb3J0IHsgbXRySWNvbldlYXRoZXJTdW5ueSwgbXRySWNvbldlYXRoZXJOaWdodCwgbXRySWNvblRoZW1lTGlnaHREYXJrIH0gZnJvbSAnQG1vcnRhci9pY29ucyc7XG5cbk10ZUljb25SZWdpc3RyeVNlcnZpY2UucmVnaXN0ZXJJY29ucyhbXG4gIG10ckljb25XZWF0aGVyU3VubnksXG4gIG10ckljb25XZWF0aGVyTmlnaHQsXG4gIG10ckljb25UaGVtZUxpZ2h0RGFyayxcbl0pO1xuXG5leHBvcnQgKiBmcm9tICcuL2NvbG9yLXNjaGVtZS1uYXYtYnV0dG9uLmVsZW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb2xvci1zY2hlbWUtbmF2LWl0ZW0uZWxlbWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbG9yLXNjaGVtZS1tZW51LWl0ZW0uZWxlbWVudCc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QkMsUUFBTyxLQUFLLGNBQWMsb0ZBRUwsVUFBVSxzREFFNUIsS0FBSyxLQUFLLHNHQUdWLFdBQVcsZ0dBRStCO0VBQ2hGO0FBQ0Y7QUFwSWEsdUJBR0osU0FBUyxDQUFDQyxTQUFZLFFBQWNBLE9BQVU7QUFHVDtFQUEzQ0MsVUFBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQU4vQix1QkFNaUM7QUFHZjtFQUE1QkEsVUFBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBVGhCLHVCQVNrQjtBQUdBO0VBQTVCQSxVQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FaaEIsdUJBWWtCO0FBR0E7RUFBNUJBLFVBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQWZoQix1QkFla0I7QUFHZTtFQUEzQ0EsVUFBUyxFQUFFLE1BQU0sU0FBUyxTQUFTLEtBQUssQ0FBQztHQWxCL0IsdUJBa0JpQztBQUVuQztFQUFSQyxPQUFNO0dBcEJJLHVCQW9CRjtBQUVPO0VBQWZDLE9BQU0sT0FBTztHQXRCSCx1QkFzQks7QUFRQTtFQUFmLGFBQWE7R0E5QkgsdUJBOEJLO0FBR1I7RUFEUCxTQUFTLGVBQWUsRUFBRSxzQkFBc0IsS0FBSyxDQUFDO0dBaEM1Qyx1QkFpQ0g7QUFPQTtFQURQLFNBQVMsU0FBUztHQXZDUix1QkF3Q0g7QUF4Q0cseUJBQU47RUFETixjQUFjLDRCQUE0QjtHQUM5Qjs7O0FDeENiLHVCQUF1QixjQUFjO0FBQUEsRUFDbkM7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImh0bWwiLCAicHJvcGVydHkiLCAicXVlcnkiLCAic3R5bGVzIiwgInN0eWxlcyIsICJodG1sIiwgInN0eWxlcyIsICJwcm9wZXJ0eSIsICJxdWVyeSIsICJodG1sIiwgInByb3BlcnR5IiwgInF1ZXJ5IiwgInN0YXRlIiwgImV2ZW50T3B0aW9ucyIsICJodG1sIiwgInN0eWxlcyIsICJwcm9wZXJ0eSIsICJzdGF0ZSIsICJxdWVyeSIsICJldmVudE9wdGlvbnMiLCAiaHRtbCIsICJwcm9wZXJ0eSIsICJxdWVyeSIsICJzdGF0ZSIsICJodG1sIiwgInN0eWxlcyIsICJwcm9wZXJ0eSIsICJzdGF0ZSIsICJxdWVyeSJdCn0K
