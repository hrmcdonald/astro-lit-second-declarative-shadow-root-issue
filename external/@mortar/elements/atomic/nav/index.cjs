var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// src/atomic/nav/index.ts
var nav_exports = {};
__export(nav_exports, {
  MteNavButton: () => MteNavButton,
  MteNavButtonGroup: () => MteNavButtonGroup,
  MteNavContent: () => MteNavContent,
  MteNavFooter: () => MteNavFooter,
  MteNavHeader: () => MteNavHeader,
  MteNavIconButton: () => MteNavIconButton,
  MteNavItem: () => MteNavItem,
  MteNavItemGroup: () => MteNavItemGroup,
  MteNavRoot: () => MteNavRoot,
  MteNavSidebar: () => MteNavSidebar,
  MteNavSubHeader: () => MteNavSubHeader
});
module.exports = __toCommonJS(nav_exports);

// src/atomic/nav/nav-root.element.ts
var import_lit15 = require("lit");

// src/core/base-classes/mte.element.ts
var import_decorators = require("lit/decorators.js");
var import_lit = require("lit");
var import_styles3 = require("@mortar/styles");

// src/core/utilities/css-in-js/css-in-js.property-mappers.ts
var import_styles = require("@mortar/styles");
var propertyMap = {
  m: "margin",
  mx: ["marginLeft", "marginRight"],
  my: ["marginTop", "marginBottom"],
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  ml: "marginLeft",
  p: "padding",
  px: ["paddingLeft", "paddingRight"],
  py: ["paddingTop", "paddingBottom"],
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  d: "display",
  a: "alignItems",
  j: "justifyContent",
  direction: "flexDirection",
  shrink: "flexShrink",
  grow: "flexGrow",
  wrap: "flexWrap",
  w: "width",
  maxw: "maxWidth",
  minw: "minWidth",
  h: "height",
  maxh: "maxHeight",
  minh: "minHeight",
  fs: "fontSize",
  fw: "fontWeight",
  bg: "background",
  c: "color",
  elevation: "boxShadow"
};
var propShorthands = (props) => {
  return props.reduce((acc, propMap) => {
    const mappedProps = propertyMap[propMap.prop] ?? propMap.prop;
    return [
      ...acc,
      ...Array.isArray(mappedProps) ? mappedProps.map((prop) => ({ prop, value: propMap.value })) : [{ prop: mappedProps, value: propMap.value }]
    ];
  }, []);
};
var dotStringToConfigValue = (value) => {
  if (typeof value === "string" && value.indexOf(".") !== -1) {
    try {
      const configPath = value.split(".");
      const configValue = configPath.reduce((acc, key) => {
        return acc[key];
      }, import_styles.config);
      return configValue ?? value;
    } catch (e) {
      return value;
    }
  } else {
    return value;
  }
};
var dotStringToConfigValueMapper = (props) => {
  return props.reduce((acc, propMap) => {
    const configValue = dotStringToConfigValue(propMap.value);
    if (configValue) {
      propMap.value = configValue ?? propMap.value;
    }
    return [...acc, propMap];
  }, []);
};
var mapNumberToPx = (val) => {
  if (!val) {
    return val;
  }
  return !isNaN(Number(val)) ? `${val}px` : val;
};
var mapPxToNumber = (val) => {
  if (!val) {
    return val;
  }
  return Number(val.replace("px", ""));
};
var numberToPx = (props) => {
  return props.map((propMap) => {
    const mappedValue = mapNumberToPx(propMap.value);
    return { prop: propMap.prop, value: mappedValue };
  });
};
var spacingMap = {
  "0": import_styles.config.space.none,
  "1": import_styles.config.space.xs,
  "2": import_styles.config.space.sm,
  "3": import_styles.config.space.md,
  "4": import_styles.config.space.lg,
  "5": import_styles.config.space.xl,
  "6": import_styles.config.space.xxl,
  "7": import_styles.config.space.xxxl,
  "none": import_styles.config.space.none,
  "xxs": import_styles.config.space.xxs,
  "xs": import_styles.config.space.xs,
  "sm": import_styles.config.space.sm,
  "md": import_styles.config.space.md,
  "lg": import_styles.config.space.lg,
  "xl": import_styles.config.space.xl,
  "xxl": import_styles.config.space.xxl,
  "xxxl": import_styles.config.space.xxxl
};
var spacingValShorthands = (props) => {
  return props.map((propMap) => {
    const mappedValue = spacingMap[propMap.value] ?? propMap.value;
    return { prop: propMap.prop, value: mappedValue };
  });
};
var borderRadiusMap = {
  none: import_styles.config.border.radius.none,
  xs: import_styles.config.border.radius.xs,
  sm: import_styles.config.border.radius.sm,
  md: import_styles.config.border.radius.md,
  lg: import_styles.config.border.radius.lg,
  xl: import_styles.config.border.radius.xl,
  xxl: import_styles.config.border.radius.xxl,
  full: import_styles.config.border.radius.full
};
var borderRadiusValShorthands = (props) => {
  return props.map((propMap) => {
    const mappedValue = borderRadiusMap[propMap.value] ?? propMap.value;
    return { prop: propMap.prop, value: mappedValue };
  });
};
var borderWidthMap = {
  none: import_styles.config.border.width.none,
  sm: import_styles.config.border.width.sm,
  md: import_styles.config.border.width.md,
  lg: import_styles.config.border.width.lg
};
var borderWidthValShorthands = (props) => {
  return props.map((propMap) => {
    const mappedValue = borderWidthMap[propMap.value] ?? propMap.value;
    return { prop: propMap.prop, value: mappedValue };
  });
};
var opacityMap = {
  xxl: import_styles.config.opacity.xxl,
  xl: import_styles.config.opacity.xl,
  lg: import_styles.config.opacity.lg,
  md: import_styles.config.opacity.md,
  sm: import_styles.config.opacity.sm,
  xs: import_styles.config.opacity.xs,
  xxs: import_styles.config.opacity.xxs,
  xxxs: import_styles.config.opacity.xxxs
};
var opacityValShorthands = (props) => {
  return props.map((propMap) => {
    const mappedValue = opacityMap[propMap.value] ?? propMap.value;
    return { prop: propMap.prop, value: mappedValue };
  });
};
var fontWeightMap = {
  light: import_styles.config.font.weight.light,
  regular: import_styles.config.font.weight.regular,
  medium: import_styles.config.font.weight.medium,
  bold: import_styles.config.font.weight.bold
};
var fontWeightValShorthands = (props) => {
  return props.map((propMap) => {
    const mappedValue = fontWeightMap[propMap.value] ?? propMap.value;
    return { prop: propMap.prop, value: mappedValue };
  });
};
var fontSizeMap = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.25rem",
  xl: "1.5rem",
  xxl: "1.75rem"
};
var fontSizeValShorthands = (props) => {
  return props.map((propMap) => {
    const mappedValue = fontSizeMap[propMap.value] ?? propMap.value;
    return { prop: propMap.prop, value: mappedValue };
  });
};
var fontFamilyMap = {
  sans: import_styles.config.font.family.sans,
  serif: import_styles.config.font.family.serif,
  mono: import_styles.config.font.family.mono
};
var fontFamilyValShorthands = (props) => {
  return props.map((propMap) => {
    const mappedValue = fontFamilyMap[propMap.value] ?? propMap.value;
    return { prop: propMap.prop, value: mappedValue };
  });
};
var elevationMap = {
  z0: import_styles.config.elevation.z0,
  z1: import_styles.config.elevation.z1,
  z2: import_styles.config.elevation.z2,
  z3: import_styles.config.elevation.z3,
  z4: import_styles.config.elevation.z4
};
var elevationValShorthands = (props) => {
  return props.map((propMap) => {
    const mappedValue = elevationMap[propMap.value] ?? propMap.value;
    return { prop: propMap.prop, value: mappedValue };
  });
};

// src/core/utilities/css-in-js/css-in-js.utilities.ts
var import_styles2 = require("@mortar/styles");
var propMappers = {
  height: [numberToPx],
  minHeight: [numberToPx],
  maxHeight: [numberToPx],
  width: [numberToPx],
  minWidth: [numberToPx],
  maxWidth: [numberToPx],
  top: [numberToPx],
  right: [numberToPx],
  bottom: [numberToPx],
  left: [numberToPx],
  margin: [spacingValShorthands, numberToPx],
  marginTop: [spacingValShorthands, numberToPx],
  marginRight: [spacingValShorthands, numberToPx],
  marginBottom: [spacingValShorthands, numberToPx],
  marginLeft: [spacingValShorthands, numberToPx],
  padding: [spacingValShorthands, numberToPx],
  paddingTop: [spacingValShorthands, numberToPx],
  paddingRight: [spacingValShorthands, numberToPx],
  paddingBottom: [spacingValShorthands, numberToPx],
  paddingLeft: [spacingValShorthands, numberToPx],
  gap: [spacingValShorthands, numberToPx],
  rowGap: [spacingValShorthands, numberToPx],
  columnGap: [spacingValShorthands, numberToPx],
  fontSize: [fontSizeValShorthands, numberToPx],
  fontWeight: [fontWeightValShorthands],
  fontFamily: [fontFamilyValShorthands],
  borderRadius: [borderRadiusValShorthands, numberToPx],
  borderWidth: [borderWidthValShorthands, numberToPx],
  borderTopRightRadius: [borderRadiusValShorthands, numberToPx],
  borderTopLeftRadius: [borderRadiusValShorthands, numberToPx],
  borderBottomRightRadius: [borderRadiusValShorthands, numberToPx],
  borderBottomLeftRadius: [borderRadiusValShorthands, numberToPx],
  opacity: [opacityValShorthands],
  boxShadow: [elevationValShorthands]
};
var parsePropShorthands = (prop, value) => {
  if (typeof value === "number") {
    value = `${value}`;
  }
  const mappedProps = dotStringToConfigValueMapper(propShorthands([{ prop, value }]));
  return mappedProps.reduce((acc, propMap) => {
    const mappers = propMappers[propMap.prop];
    if (mappers) {
      return [
        ...acc,
        ...mappers.reduce(
          (acc2, mapper) => mapper(acc2),
          [{ prop: propMap.prop, value: propMap.value }]
        )
      ];
    } else {
      acc.push(propMap);
      return acc;
    }
  }, []);
};
var generateSelectorsFromStyleMap = (selectorFn, styleMap2) => {
  const parsedSelectors = [];
  const selectorQueue = [{ selector: selectorFn(), styleMap: styleMap2 }];
  const breakpointKeys = Object.keys(import_styles2.config.grid.breakpoint);
  while (selectorQueue.length > 0) {
    const selectorMap = selectorQueue.shift();
    parsedSelectors.push({
      selector: selectorMap.selector,
      selectorWrapper: selectorMap.selectorWrapper,
      style: Object.keys(selectorMap.styleMap).reduce((acc, prop) => {
        let value = selectorMap.styleMap[prop];
        if (value == null) {
          return acc;
        } else if (typeof value === "function") {
          value = value(import_styles2.config);
        } else if (typeof value === "object") {
          if (prop.startsWith("&:")) {
            selectorQueue.push({
              selector: selectorFn({ infix: prop.replace("&", "") }),
              styleMap: value,
              selectorWrapper: selectorMap.selectorWrapper
            });
            return acc;
          } else if (breakpointKeys.includes(prop)) {
            selectorQueue.push({
              selector: selectorMap.selector,
              styleMap: value,
              selectorWrapper: `@media (min-width:${import_styles2.config.grid.breakpoint[prop]})`
            });
            return acc;
          } else if (prop.startsWith("@media") || prop.startsWith("@container")) {
            selectorQueue.push({
              selector: selectorMap.selector,
              styleMap: value,
              selectorWrapper: prop
            });
            return acc;
          } else if (prop.startsWith("::slotted") || prop.startsWith("& ::slotted")) {
            selectorQueue.push({
              selector: selectorFn({ postfix: " " + prop.replace("& ", "") }),
              styleMap: value,
              selectorWrapper: selectorMap.selectorWrapper
            });
            return acc;
          } else {
            breakpointKeys.forEach((key) => {
              if (value[key]) {
                selectorQueue.push({
                  selector: selectorMap.selector,
                  // inherit the selector here in case we are within a pseudo-class
                  styleMap: { [prop]: value[key] },
                  selectorWrapper: `@media (min-width:${import_styles2.config.grid.breakpoint[key]})`
                });
              }
            });
          }
          return acc;
        }
        const props = parsePropShorthands(prop, value);
        return `${acc}${props.reduce((acc2, { prop: prop2, value: value2 }) => {
          prop2 = prop2.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase();
          return `${acc2}${prop2}:${value2};`;
        }, "")}`;
      }, "")
    });
  }
  return parsedSelectors;
};
var parseSelectors = (styles36, selectors) => {
  if (!selectors) {
    return styles36;
  } else {
    return `${styles36}${selectors.reduce((acc, { selector, selectorWrapper, style }) => {
      if (style === "") {
        return acc;
      }
      const base = `${selector}{${style}}`;
      const wrapped = selectorWrapper ? `${selectorWrapper}{${base}}` : base;
      return `${acc}${wrapped}`;
    }, "")}`;
  }
};
var constructInstanceStyles = (instanceStylesMap) => {
  let styles36 = "";
  [...instanceStylesMap.entries()].filter(([key, _]) => key !== "se" && key !== "sp").sort((a, b) => b[0] - a[0]).forEach(([_, selectors]) => {
    styles36 = parseSelectors(styles36, selectors);
  });
  styles36 = `${styles36}${parseSelectors("", instanceStylesMap.get("se"))}${parseSelectors(
    "",
    instanceStylesMap.get("sp")
  )}`;
  return styles36;
};

// src/core/utilities/focus.utilities.ts
function isElementHiddenDirectly(element) {
  const style = element.style;
  if (style.visibility === "hidden" || style.display === "none" || element.hasAttribute("data-autofocus-ignore")) {
    return true;
  }
  const computedStyle = getComputedStyle(element);
  if (computedStyle.visibility === "hidden" || computedStyle.display === "none") {
    return true;
  }
  return false;
}
function normalizeTabIndex(element) {
  if (!isElementFocusable(element)) {
    return -1;
  }
  const tabIndex = element.getAttribute("tabindex") || 0;
  return Number(tabIndex);
}
function hasLowerTabOrder(a, b) {
  const ati = Math.max(a.tabIndex, 0);
  const bti = Math.max(b.tabIndex, 0);
  return ati === 0 || bti === 0 ? bti > ati : ati > bti;
}
function mergeSortByTabIndex(left, right) {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    if (hasLowerTabOrder(left[0], right[0])) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  return result.concat(left, right);
}
function sortElementsByTabIndex(elements) {
  const len = elements.length;
  if (len < 2) {
    return elements;
  }
  const pivot = Math.ceil(len / 2);
  const left = sortElementsByTabIndex(elements.slice(0, pivot));
  const right = sortElementsByTabIndex(elements.slice(pivot));
  return mergeSortByTabIndex(left, right);
}
function collectFocusableNodes(node, result) {
  if (node.nodeType !== Node.ELEMENT_NODE || isElementHiddenDirectly(node)) {
    return false;
  }
  const element = node;
  const tabIndex = normalizeTabIndex(element);
  let needsSort = tabIndex > 0;
  if (tabIndex >= 0) {
    result.push(element);
  }
  let children = [];
  if (element.localName === "slot") {
    children = element.assignedNodes({ flatten: true });
  } else {
    children = (element.shadowRoot || element).children;
  }
  [...children].forEach((child) => {
    needsSort = collectFocusableNodes(child, result) || needsSort;
  });
  return needsSort;
}
function isElementFocusable(element) {
  if (element.matches('[tabindex="-1"]')) {
    return false;
  }
  if (element.matches("input, select, textarea, button, object")) {
    return element.matches(":not([disabled])");
  }
  return element.matches("a[href], area[href], iframe, [tabindex], [contentEditable]");
}
function isElementFocused(element) {
  return element.getRootNode().activeElement === element;
}
function getFocusableElements(element) {
  if (!element) {
    return null;
  }
  const focusableElements = [];
  const needsSortByTabIndex = collectFocusableNodes(element, focusableElements);
  if (needsSortByTabIndex) {
    return sortElementsByTabIndex(focusableElements);
  }
  return focusableElements;
}

// src/core/utilities/environment.utilities.ts
var import_is_server = require("lit-html/is-server.js");
var isSsr = () => import_is_server.isServer;
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData?.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
var isPlatform = (platform) => {
  if (!isSsr()) {
    if (platform === "IOS") {
      return /iP(hone|ad|od)|iOS/.test(getPlatform());
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// src/core/utilities/form.utilities.ts
var nativeValidityStates = [
  "badInput",
  "customError",
  "patternMismatch",
  "rangeOverflow",
  "rangeUnderflow",
  "stepMismatch",
  "tooLong",
  "tooShort",
  "typeMismatch",
  "valueMissing"
];
var innerInputValidators = nativeValidityStates.map((key) => ({
  key,
  isValid(instance) {
    if (instance.validationTarget) {
      return !instance.validationTarget.validity[key];
    }
    return true;
  }
}));

// src/core/utilities/reactive-signal.ts
var context = [];
function _subscribe(running, subscriptions) {
  subscriptions.add(running);
  running.dependencies.add(subscriptions);
}
function cleanup(running) {
  for (const dep of running.dependencies) {
    dep.delete(running);
  }
  running.dependencies.clear();
}
function signal(value) {
  const subscriptions = /* @__PURE__ */ new Set();
  const get = () => {
    const running = context[context.length - 1];
    if (running)
      _subscribe(running, subscriptions);
    return value;
  };
  const set = (nextValue) => {
    value = nextValue;
    for (const sub of [...subscriptions]) {
      sub.execute();
    }
  };
  const update = (fn) => {
    value = fn(value);
    for (const sub of [...subscriptions]) {
      sub.execute();
    }
  };
  const subscribe = (fn) => {
    const execute = () => {
      cleanup(running);
      context.push(running);
      try {
        fn(running.get(), () => cleanup(running));
      } finally {
        context.pop();
      }
      return () => cleanup(running);
    };
    const running = {
      execute,
      dependencies: /* @__PURE__ */ new Set(),
      get
    };
    return execute();
  };
  return {
    get,
    set,
    update,
    subscribe
  };
}
function computed(dependencies, fn) {
  const auto = fn.length < 2;
  const s = signal();
  const single = !Array.isArray(dependencies);
  const deps = single ? [dependencies] : dependencies;
  const dep = deps[0];
  dep.subscribe(() => {
    const values = deps.map((dep2) => dep2.get());
    const ret = single ? values[0] : values;
    if (auto) {
      s.set(fn(ret));
    } else {
      fn(ret, s.set);
    }
  });
  return s;
}

// src/core/utilities/location.utilities.ts
var defaultActiveLinkOptions = {
  path: "exact",
  queryParams: "subset",
  fragment: "ignored"
};
var isLinkActive = (targetHref, activeHref, options) => {
  if (!targetHref) {
    return false;
  } else {
    const mergedOptions = Object.assign(defaultActiveLinkOptions, options ?? {});
    const targetUrl = new URL(targetHref);
    const activeUrl = new URL(activeHref);
    let active = true;
    if (mergedOptions.path === "exact") {
      if (targetUrl.pathname !== activeUrl.pathname) {
        active = false;
      }
    } else if (mergedOptions.path === "subset") {
      if (!activeUrl.pathname.startsWith(targetUrl.pathname)) {
        active = false;
      }
    }
    if (mergedOptions.queryParams === "exact") {
      activeUrl.searchParams.forEach((val, key) => {
        if (val !== targetUrl.searchParams.get(key)) {
          active = false;
        }
      });
    } else if (mergedOptions.queryParams === "subset") {
      targetUrl.searchParams.forEach((val, key) => {
        if (val !== activeUrl.searchParams.get(key)) {
          active = false;
        }
      });
    }
    if (mergedOptions.fragment === "exact") {
      if (activeUrl.hash !== targetUrl.hash) {
        active = false;
      }
    }
    return active;
  }
};

// src/core/base-classes/mte.element.ts
var import_unsafe_html = require("lit-html/directives/unsafe-html.js");
globalThis.litIssuedWarnings ??= /* @__PURE__ */ new Set();
globalThis.litIssuedWarnings.add(
  "Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators See https://lit.dev/msg/no-override-get-property-descriptor for more information."
);
var MteElement = class extends import_lit.LitElement {
  constructor() {
    super(...arguments);
    this.__instanceStyleSheetMap = /* @__PURE__ */ new Map();
    this.__instanceStyleSheetNeedsUpdate = false;
    /** Set to true when firstUpdated is first called */
    this.__firstUpdated = false;
    /**
     * All subs pushed to this array will be cleared in the disconnectedCallback
     * @ignore
     */
    this.subs = [];
    /**
     * Override this selector to have instance styles target a specific inner element.
     * Useful in specific scenarios where focus is delegated like buttons.
     *
     * By default this repeats `:host` six times to provide a specificity of 6
     */
    this.instanceStyleSelectorRoot = ":host:host:host:host:host:host";
  }
  set theme(theme) {
    const oldValue = this._theme;
    this._theme = theme;
    this.requestUpdate("theme", oldValue);
    if (this.__localPresetTheme) {
      this.updateComplete.then(() => this.requestUpdate("theme", null));
    }
  }
  get theme() {
    return this._theme ?? this.__localPresetTheme?.name;
  }
  /**
   * Can be called by derived classes to register new instance level dynamic styles.
   * When called the instance stylesheet will be replaced with the latest styles this update.
   */
  setInstanceStyle(id, selector, styleMap2) {
    this.__instanceStyleSheetMap.set(id, generateSelectorsFromStyleMap(selector, styleMap2));
    this.__instanceStyleSheetNeedsUpdate = true;
  }
  /** A custom hook that can be overridden in derived classes to set instance styles as needed */
  updateInstanceStyles(changedProps) {
    if (changedProps.has("se")) {
      this.setInstanceStyle("se", (0, import_styles3.selectorFactory)(this.instanceStyleSelectorRoot), this.se ?? {});
    }
  }
  willUpdate(changedProps) {
    super.willUpdate(changedProps);
    this.updateInstanceStyles(changedProps);
    if (this.__instanceStyleSheetNeedsUpdate) {
      this.instanceStyles = (0, import_unsafe_html.unsafeHTML)(
        `<style id="__instance-styles">${constructInstanceStyles(
          this.__instanceStyleSheetMap
        )}</style>`
      );
      this.__instanceStyleSheetNeedsUpdate = false;
    }
  }
  firstUpdated(changedProps) {
    this.__firstUpdated = true;
    super.firstUpdated(changedProps);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.subs.forEach((unsub) => unsub());
    this.subs = [];
  }
};
__decorateClass([
  (0, import_decorators.property)({ type: Object, reflect: true })
], MteElement.prototype, "se", 2);
__decorateClass([
  (0, import_decorators.property)({ reflect: true, attribute: "data-mte-theme" })
], MteElement.prototype, "theme", 1);
__decorateClass([
  (0, import_decorators.state)()
], MteElement.prototype, "__localPresetTheme", 2);

// src/core/base-classes/content.base.ts
var import_styles4 = require("@mortar/styles");
var import_decorators2 = require("lit/decorators.js");

// src/core/attribute-converter/responsive-attribute.converter.ts
var import_lit2 = require("lit");
var ResponsiveValueConverter = {
  fromAttribute: (value, type) => {
    try {
      if (value?.[0] === "{") {
        return import_lit2.defaultConverter.fromAttribute(value, Object);
      }
    } catch (e) {
    }
    return import_lit2.defaultConverter.fromAttribute(value, type);
  },
  toAttribute: (value, type) => {
    if (typeof value === "object") {
      return import_lit2.defaultConverter.toAttribute(value, Object);
    }
    return import_lit2.defaultConverter.toAttribute(value, type);
  }
};

// src/core/base-classes/content.base.ts
var defaultBorderFactory = (width, color2, style) => `${style ?? "solid"} ${borderWidthValShorthands([
  { prop: "borderWidth", value: dotStringToConfigValue(width ?? "1px") }
])[0]?.value} ${dotStringToConfigValue(color2) ?? import_styles4.config.color.border1}`;
var _MteContentBase = class _MteContentBase extends MteElement {
  constructor() {
    super(...arguments);
    this.subgrid = false;
    /**
     * Override this selector to have instance styles target a specific inner element.
     * Useful in specific scenarios where the primary content/slot wrapped within the template
     * like with the modal component.
     */
    this.contentStyleSelectorRoot = ":host:host:host:host:host:host";
  }
  static {
    // List of props for optimal style update checking
    this.contentProps = /* @__PURE__ */ new Set([
      "m",
      "mx",
      "my",
      "mt",
      "mr",
      "mb",
      "ml",
      "p",
      "px",
      "py",
      "pt",
      "pr",
      "pb",
      "pl",
      "d",
      "a",
      "j",
      "basis",
      "shrink",
      "grow",
      "direction",
      "wrap",
      "alignItems",
      "alignSelf",
      "alignContent",
      "justifyContent",
      "justifyItems",
      "justifySelf",
      "flex",
      "flexDirection",
      "flexBasis",
      "flexShrink",
      "flexGrow",
      "flexWrap",
      "order",
      "gap",
      "columnGap",
      "rowGap",
      "gridColumn",
      "gridRow",
      "gridAutoFlow",
      "gridAutoColumns",
      "gridAutoRows",
      "gridTemplateColumns",
      "gridTemplateRows",
      "gridTemplateAreas",
      "gridArea",
      "w",
      "maxw",
      "minw",
      "h",
      "maxh",
      "minh",
      "bg",
      "c",
      "borderColor",
      "borderWidth",
      "borderStyle",
      "border",
      "borderTop",
      "borderRight",
      "borderBottom",
      "borderLeft",
      "borderRadius",
      "borderTopRightRadius",
      "borderTopLeftRadius",
      "borderBottomRightRadius",
      "borderBottomLeftRadius",
      "borderTopRadius",
      "borderRightRadius",
      "borderBottomRadius",
      "borderLeftRadius",
      "lineHeight",
      "fontWeight",
      "fw",
      "fontSize",
      "fs",
      "fontFamily",
      "opacity",
      "elevation",
      "layoutBleed",
      "subgrid"
    ]);
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    let shouldUpdateStyles = false;
    for (const key of changedProps.keys()) {
      if (_MteContentBase.contentProps.has(key)) {
        shouldUpdateStyles = true;
        break;
      }
    }
    if (shouldUpdateStyles) {
      this.setInstanceStyle("content-base", (0, import_styles4.selectorFactory)(this.contentStyleSelectorRoot), {
        // Spacing
        m: this.m,
        mx: this.mx,
        my: this.my,
        mt: this.mt,
        mr: this.mr,
        mb: this.mb,
        ml: this.ml,
        p: this.p,
        px: this.px,
        py: this.py,
        pt: this.pt,
        pr: this.pr,
        pb: this.pb,
        pl: this.pl,
        // Positioning
        d: this.subgrid ? "grid" : this.d,
        alignItems: this.a ?? this.alignItems,
        alignSelf: this.alignSelf,
        alignContent: this.alignContent,
        justifyContent: this.j ?? this.justifyContent,
        justifyItems: this.justifyItems,
        justifySelf: this.justifySelf,
        flex: this.flex,
        flexDirection: this.direction ?? this.flexDirection,
        flexBasis: this.basis ?? this.flexBasis,
        flexShrink: this.shrink ?? this.flexShrink,
        flexGrow: this.grow ?? this.flexGrow,
        flexWrap: this.wrap ?? this.flexWrap,
        order: this.order,
        gap: this.gap,
        columnGap: this.columnGap,
        rowGap: this.rowGap,
        gridColumn: this.layoutBleed ? this.layoutBleed : this.gridColumn,
        gridRow: this.gridRow,
        gridAutoFlow: this.gridAutoFlow,
        gridAutoColumns: this.gridAutoColumns,
        gridAutoRows: this.gridAutoRows,
        gridTemplateColumns: this.subgrid ? "subgrid" : this.gridTemplateColumns,
        gridTemplateRows: this.gridTemplateRows,
        gridTemplateAreas: this.gridTemplateAreas,
        gridArea: this.gridArea,
        // Sizing
        w: this.w,
        maxw: this.maxw,
        minw: this.minw,
        h: this.h,
        maxh: this.maxh,
        minh: this.minh,
        // Colors
        bg: this.bg,
        c: this.c,
        // Borders
        borderColor: this.borderColor,
        borderWidth: this.borderWidth,
        borderStyle: this.borderStyle,
        border: this.border ? defaultBorderFactory(this.borderWidth, this.borderColor, this.borderStyle) : null,
        borderTop: this.borderTop ? defaultBorderFactory(this.borderWidth, this.borderColor, this.borderStyle) : null,
        borderRight: this.borderRight ? defaultBorderFactory(this.borderWidth, this.borderColor, this.borderStyle) : null,
        borderLeft: this.borderLeft ? defaultBorderFactory(this.borderWidth, this.borderColor, this.borderStyle) : null,
        borderBottom: this.borderBottom ? defaultBorderFactory(this.borderWidth, this.borderColor, this.borderStyle) : null,
        // Border Radius
        borderRadius: this.borderRadius,
        borderTopRightRadius: this.borderTopRightRadius ?? this.borderTopRadius ?? this.borderRightRadius,
        borderTopLeftRadius: this.borderTopLeftRadius ?? this.borderTopRadius ?? this.borderLeftRadius,
        borderBottomRightRadius: this.borderBottomRightRadius ?? this.borderBottomRadius ?? this.borderRightRadius,
        borderBottomLeftRadius: this.borderBottomLeftRadius ?? this.borderBottomRadius ?? this.borderLeftRadius,
        // Fonts
        lineHeight: this.lineHeight,
        fontWeight: this.fw ?? this.fontWeight,
        fontSize: this.fs ?? this.fontSize,
        fontFamily: this.fontFamily,
        // Opacity
        opacity: this.opacity,
        // Elevation
        elevation: this.elevation
      });
    }
  }
};
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "m", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "mx", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "my", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "mt", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "mr", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "mb", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "ml", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "p", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "px", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "py", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "pt", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "pr", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "pb", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "pl", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "d", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "a", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "alignItems", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "alignSelf", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "alignContent", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "j", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "justifyContent", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "justifyItems", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "justifySelf", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "flex", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "direction", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "flexDirection", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "basis", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "flexBasis", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "grow", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "flexGrow", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "shrink", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "flexShrink", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "wrap", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "flexWrap", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "order", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "gap", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "columnGap", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "rowGap", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "gridColumn", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "gridRow", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "gridAutoFlow", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "gridAutoColumns", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "gridAutoRows", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "gridTemplateColumns", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "gridTemplateRows", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "gridTemplateAreas", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "gridArea", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "w", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "maxw", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "minw", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "h", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "maxh", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "minh", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "bg", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "c", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "borderColor", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "borderWidth", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "borderStyle", 2);
__decorateClass([
  (0, import_decorators2.property)({ type: Boolean, reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "border", 2);
__decorateClass([
  (0, import_decorators2.property)({ type: Boolean, reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "borderTop", 2);
__decorateClass([
  (0, import_decorators2.property)({ type: Boolean, reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "borderRight", 2);
__decorateClass([
  (0, import_decorators2.property)({ type: Boolean, reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "borderBottom", 2);
__decorateClass([
  (0, import_decorators2.property)({ type: Boolean, reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "borderLeft", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "borderRadius", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "borderTopRightRadius", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "borderTopLeftRadius", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "borderBottomRightRadius", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "borderBottomLeftRadius", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "borderTopRadius", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "borderRightRadius", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "borderBottomRadius", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "borderLeftRadius", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "lineHeight", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "fontWeight", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "fw", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "fontSize", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "fs", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "fontFamily", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "opacity", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true, converter: ResponsiveValueConverter })
], _MteContentBase.prototype, "elevation", 2);
__decorateClass([
  (0, import_decorators2.property)({ reflect: true })
], _MteContentBase.prototype, "layoutBleed", 2);
__decorateClass([
  (0, import_decorators2.property)({ type: Boolean, reflect: true })
], _MteContentBase.prototype, "subgrid", 2);
var MteContentBase = _MteContentBase;

// src/core/constants/heb-logo.ts
var import_unsafe_svg = require("lit/directives/unsafe-svg.js");
var hebLogoSvgContents = (0, import_unsafe_svg.unsafeSVG)(
  `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 536.27 186.24"><style>.st0{fill:#e1251b}.st1{fill:#fff}</style><g id="_x31_-HEB_MAIN_LOGO_00000096043404206861880870000004813240938946855355_"><path d="M93.12 186.24C41.69 186.24 0 144.55 0 93.12S41.69 0 93.12 0h350.03c51.43 0 93.12 41.69 93.12 93.12s-41.69 93.12-93.12 93.12H93.12z" class="st0"/><path d="M93.12 174.19c-44.76 0-81.05-36.29-81.05-81.05s36.29-81.05 81.05-81.05h350.03c44.76 0 81.05 36.29 81.05 81.05s-36.29 81.05-81.05 81.05H93.12z" class="st1"/><path d="m444.94 24.11-353.64.02c-37.07 0-67.2 30.95-67.16 69.07 0 37.93 30.16 68.88 67.16 68.88l353.63-.07c37.1-.03 67.15-30.89 67.2-68.85-.04-38.2-30.09-69.05-67.19-69.05z" class="st0"/><path d="M224.21 132.23h88.1l.76-12.98h-56.18v-14.84h44.81V89.33h-44.81V73.25l58.92-.01 1.15-19.29h-97.4zM132.46 53.95v35.38H108.6V53.95H71.27l4.65 78.28h32.68v-27.82h23.86v27.82h32.68l4.65-78.28zM448.52 97.02c9.9-2.83 16.49-8.59 16.49-20.67.03-13.82-11.06-22.4-25.29-22.4h-73.28l4.65 78.29h64.06c27.98 0 26.39-18.8 26.39-18.8 0-7.96-5.33-14.61-13.02-16.42zm-31.02 22.22h-13.71v-14.83h13.22c7.23 0 11.09 2.31 11.09 7.48.01 4.94-3.49 7.35-10.6 7.35zm1.06-29.91h-14.77V73.25h14.25c7.85 0 12.03 2.5 12.03 8.11 0 5.35-3.79 7.97-11.51 7.97zM182.76 89.33l.9 15.08h22.03l.9-15.08zM329.64 89.33l.9 15.08h22.03l.9-15.08z" class="st1"/><path d="M530.34 172.77c0-2.46-1.46-3.54-4.4-3.54h-4.74v12.44h1.88v-5.39h2.17l3.28 5.39h2.11l-3.54-5.48c1.84-.22 3.24-1.19 3.24-3.42zm-7.25 1.92v-3.86h2.57c1.31 0 2.71.29 2.71 1.83 0 1.92-1.43 2.03-3.03 2.03h-2.25z" class="st0"/><path d="M525.37 164.67c-5.93 0-10.96 4.57-10.96 10.76 0 6.24 5.02 10.81 10.96 10.81 5.88 0 10.9-4.57 10.9-10.81 0-6.2-5.02-10.76-10.9-10.76zm0 19.78c-4.93 0-8.79-3.83-8.79-9.02 0-5.11 3.85-8.96 8.79-8.96 4.88 0 8.73 3.85 8.73 8.96 0 5.19-3.85 9.02-8.73 9.02z" class="st0"/></g></svg>`
);
var hebLogoWhiteCopyrightSvgContents = (0, import_unsafe_svg.unsafeSVG)(
  `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 536.27 186.24"><style>.st0{fill:#e1251b}.st1{fill:#fff}</style><g id="_x31_-HEB_MAIN_LOGO_00000096043404206861880870000004813240938946855355_"><path d="M93.12 186.24C41.69 186.24 0 144.55 0 93.12S41.69 0 93.12 0h350.03c51.43 0 93.12 41.69 93.12 93.12s-41.69 93.12-93.12 93.12H93.12z" class="st0"/><path d="M93.12 174.19c-44.76 0-81.05-36.29-81.05-81.05s36.29-81.05 81.05-81.05h350.03c44.76 0 81.05 36.29 81.05 81.05s-36.29 81.05-81.05 81.05H93.12z" class="st1"/><path d="m444.94 24.11-353.64.02c-37.07 0-67.2 30.95-67.16 69.07 0 37.93 30.16 68.88 67.16 68.88l353.63-.07c37.1-.03 67.15-30.89 67.2-68.85-.04-38.2-30.09-69.05-67.19-69.05z" class="st0"/><path d="M224.21 132.23h88.1l.76-12.98h-56.18v-14.84h44.81V89.33h-44.81V73.25l58.92-.01 1.15-19.29h-97.4zM132.46 53.95v35.38H108.6V53.95H71.27l4.65 78.28h32.68v-27.82h23.86v27.82h32.68l4.65-78.28zM448.52 97.02c9.9-2.83 16.49-8.59 16.49-20.67.03-13.82-11.06-22.4-25.29-22.4h-73.28l4.65 78.29h64.06c27.98 0 26.39-18.8 26.39-18.8 0-7.96-5.33-14.61-13.02-16.42zm-31.02 22.22h-13.71v-14.83h13.22c7.23 0 11.09 2.31 11.09 7.48.01 4.94-3.49 7.35-10.6 7.35zm1.06-29.91h-14.77V73.25h14.25c7.85 0 12.03 2.5 12.03 8.11 0 5.35-3.79 7.97-11.51 7.97zM182.76 89.33l.9 15.08h22.03l.9-15.08zM329.64 89.33l.9 15.08h22.03l.9-15.08zM528.34 170.77c0-2.46-1.46-3.54-4.4-3.54h-4.74v12.44h1.88v-5.39h2.17l3.28 5.39h2.11l-3.54-5.48c1.84-.22 3.24-1.19 3.24-3.42zm-7.25 1.92v-3.86h2.57c1.31 0 2.71.29 2.71 1.83 0 1.92-1.43 2.03-3.03 2.03h-2.25z" class="st1"/><path d="M523.37 162.67c-5.93 0-10.96 4.57-10.96 10.76 0 6.24 5.02 10.81 10.96 10.81 5.88 0 10.9-4.57 10.9-10.81 0-6.2-5.02-10.76-10.9-10.76zm0 19.78c-4.93 0-8.79-3.83-8.79-9.02 0-5.11 3.85-8.96 8.79-8.96 4.88 0 8.73 3.85 8.73 8.96 0 5.19-3.85 9.02-8.73 9.02z" class="st1"/></g></svg>`
);
var hebLogoInverseSvgContents = (0, import_unsafe_svg.unsafeSVG)(
  `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 536.27 186.24"><style>.st0{fill:#fff}</style><path d="M443.15 0H93.12C41.69 0 0 41.69 0 93.12c0 51.43 41.69 93.12 93.12 93.12h350.03c51.43 0 93.12-41.69 93.12-93.12C536.27 41.69 494.58 0 443.15 0zm0 174.19H93.12c-44.76 0-81.05-36.29-81.05-81.05s36.29-81.05 81.05-81.05h350.03c44.76 0 81.05 36.29 81.05 81.05.01 44.76-36.28 81.05-81.05 81.05zm-13.08-92.83c0 5.36-3.79 7.98-11.51 7.98h-14.77V73.25h14.25c7.84 0 12.03 2.5 12.03 8.11zm-1.96 30.53c0 4.94-3.5 7.36-10.61 7.36h-13.71v-14.83h13.22c7.24-.01 11.1 2.3 11.1 7.47zm16.83-87.78-353.64.02c-37.07 0-67.2 30.95-67.16 69.07 0 37.92 30.16 68.88 67.16 68.88l353.63-.07c37.1-.03 67.15-30.89 67.2-68.85-.04-38.2-30.09-69.05-67.19-69.05zm-279.8 108.12h-32.68v-27.82H108.6v27.82H75.92l-4.65-78.28h37.33v35.38h23.86V53.95h37.33l-4.65 78.28zm40.55-27.82h-22.04l-.9-15.08h23.83l-.89 15.08zm110.12-31.17-58.92.01v16.08h44.81v15.08h-44.81v14.83h56.18l-.76 12.99h-88.1l-4.65-78.28h97.4l-1.15 19.29zm36.76 31.17h-22.04l-.9-15.08h23.83l-.89 15.08zm108.97 9.03s1.59 18.8-26.39 18.8h-64.06l-4.65-78.29h73.28c14.23 0 25.31 8.58 25.29 22.4 0 12.08-6.59 17.85-16.49 20.67 7.69 1.81 13.02 8.46 13.02 16.42zM530.34 172.77c0-2.46-1.46-3.54-4.4-3.54h-4.74v12.44h1.88v-5.39h2.17l3.28 5.39h2.11l-3.54-5.48c1.84-.22 3.24-1.19 3.24-3.42zm-7.25 1.92v-3.86h2.57c1.31 0 2.71.29 2.71 1.83 0 1.92-1.43 2.03-3.03 2.03h-2.25z" class="st0"/><path d="M525.37 164.67c-5.93 0-10.96 4.57-10.96 10.76 0 6.24 5.02 10.81 10.96 10.81 5.88 0 10.9-4.57 10.9-10.81 0-6.2-5.02-10.76-10.9-10.76zm0 19.78c-4.93 0-8.79-3.83-8.79-9.02 0-5.11 3.85-8.96 8.79-8.96 4.88 0 8.73 3.85 8.73 8.96 0 5.19-3.85 9.02-8.73 9.02z" class="st0"/></svg>`
);

// src/core/controllers/click-outside.controller.ts
var ClickOutsideController = class {
  constructor(host, callback) {
    this.host = host;
    this.callback = callback;
    this.targets = /* @__PURE__ */ new Set();
    this.listening = false;
    this.host.addController(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  hostConnected() {
  }
  hostDisconnected() {
    this.removeListeners();
  }
  listenForClicksOutsideOf(element) {
    this.targets.add(element);
    this.addListeners();
  }
  addTarget(element) {
    this.targets.add(element);
  }
  removeTarget(element) {
    this.targets.delete(element);
  }
  stopListening() {
    this.removeListeners();
    this.targets.clear();
  }
  isListening() {
    return this.targets.size > 0;
  }
  handleClickOutside(event) {
    const shouldIgnore = event?.target?.hasAttribute("data-ignore-outside-clicks");
    let shouldTrigger = true;
    const targetsIt = this.targets.entries();
    for (const target of targetsIt) {
      if (event.composedPath().includes(target[0])) {
        shouldTrigger = false;
        break;
      }
    }
    if (shouldTrigger && !shouldIgnore) {
      this.callback();
    }
  }
  addListeners() {
    if (!this.listening) {
      this.listening = true;
      document.addEventListener("mousedown", this.handleClickOutside);
      document.addEventListener("touchstart", this.handleClickOutside);
    }
  }
  removeListeners() {
    this.listening = false;
    document.removeEventListener("mousedown", this.handleClickOutside);
    document.removeEventListener("touchstart", this.handleClickOutside);
  }
};

// src/core/controllers/focus-trap.controller.ts
var instances = [];
var isFocusTrapActive = () => {
  return instances.length > 0;
};
var FocusTrapController = class {
  constructor(host) {
    this.host = host;
    this.trapNode = null;
    this.host.addController(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  /** An array of tab-ordered focusable elements inside the trap node. */
  get focusableElements() {
    return getFocusableElements(this.trapNode);
  }
  /** The index of the element inside the trap node that currently has focus. */
  get focusedElementIndex() {
    const focusableElements = this.focusableElements;
    return focusableElements?.indexOf(focusableElements?.filter(isElementFocused).pop());
  }
  hostConnected() {
    document.addEventListener("keydown", this.onKeyDown);
  }
  hostDisconnected() {
    document.removeEventListener("keydown", this.onKeyDown);
  }
  /**
   * Activates a focus trap for a DOM node that will prevent focus from escaping the node.
   * The trap can be deactivated with the `.releaseFocus()` method.
   *
   * If focus is initially outside the trap, the method will move focus inside,
   * on the first focusable element of the trap in the tab order.
   * The first focusable element can be the trap node itself if it is focusable
   * and comes first in the tab order.
   *
   * If there are no focusable elements, the method will throw an exception
   * and the trap will not be set.
   *
   * If an element is passed to `restoreFocusOnDone` that element will be focused upon
   * release of the focus trap.
   */
  trapFocus(trapNode, restoreFocusOnRelease) {
    this.trapNode = trapNode;
    this.restoreTarget = restoreFocusOnRelease ?? null;
    if (this.focusableElements.length === 0) {
      if (this.trapNode.hasAttribute("data-focus-fallback")) {
        this.trapNode.focus();
      } else {
        this.trapNode = null;
      }
    }
    instances.push(this);
    const elem = this.trapNode?.querySelector("[data-autofocus]");
    if (elem && normalizeTabIndex(elem) !== -1) {
      elem.focus();
      if (elem.showFocusRing !== void 0) {
        elem.showFocusRing = true;
      }
    } else if (this.focusedElementIndex === -1 && this.focusableElements?.length > 0) {
      this.focusableElements[0].focus();
      if (this.focusableElements[0].showFocusRing !== void 0) {
        this.focusableElements[0].showFocusRing = true;
      }
    }
  }
  isTrappingFocus() {
    return this.trapNode !== null;
  }
  /**
   * Deactivates the focus trap set with the `.trapFocus()` method
   * so that it becomes possible to tab outside the trap node.
   */
  releaseFocus(preventScroll = false) {
    this.trapNode = null;
    instances.pop();
    this.restoreTarget?.focus?.({ preventScroll });
  }
  /**
   * A `keydown` event handler that manages tabbing navigation when the trap is enabled.
   *
   * - Moves focus to the next focusable element of the trap on `Tab` press.
   * When no next element to focus, the method moves focus to the first focusable element.
   * - Moves focus to the prev focusable element of the trap on `Shift+Tab` press.
   * When no prev element to focus, the method moves focus to the last focusable element.
   */
  onKeyDown(event) {
    if (!this.trapNode) {
      return;
    }
    if (this !== Array.from(instances).pop()) {
      return;
    }
    if (event.key === "Tab") {
      event.preventDefault();
      const backward = event.shiftKey;
      this.focusNextElement(backward);
    }
  }
  /**
   * - Moves focus to the next focusable element if `backward === false`.
   * When no next element to focus, the method moves focus to the first focusable element.
   * - Moves focus to the prev focusable element if `backward === true`.
   * When no prev element to focus the method moves focus to the last focusable element.
   *
   * If no focusable elements, the method returns immediately.
   */
  focusNextElement(backward = false) {
    const focusableElements = this.focusableElements;
    if (focusableElements?.length > 0) {
      const step = backward ? -1 : 1;
      const currentIndex = this.focusedElementIndex;
      const nextIndex = (focusableElements.length + currentIndex + step) % focusableElements.length;
      focusableElements[nextIndex].focus();
    }
  }
};

// src/core/controllers/slot.controller.ts
var SlotController = class {
  constructor(host, options = null) {
    this.host = host;
    this.options = options;
    this.slotChange = signal(null);
    this.onConnected = signal(false);
    this.connectedComplete = false;
    this.subs = [];
    this.updateTriggerSlots = /* @__PURE__ */ new Set();
    this.handleSlotChange = (event) => {
      const slot = event.target;
      const eventSet = /* @__PURE__ */ new Set();
      if (slot.name === "[default]" || slot.name === "") {
        eventSet.add("default");
      } else {
        eventSet.add(slot.name);
      }
      this.slotChange.set(eventSet);
      if (this.updateTriggerSlots.has("default") && !slot.name || slot.name && this.updateTriggerSlots.has(slot.name)) {
        this.host.requestUpdate();
      }
    };
    this.host.addController(this);
    this.updateOnChange(options?.updateOnChange);
  }
  /** Emits when one of the specified slots has changed and after the firstUpdate after hostConnected */
  watchSlots(slots = [], { updateOnConnected } = { updateOnConnected: true }) {
    const returnSignal = signal();
    this.subs.push(
      computed(
        [this.onConnected, this.slotChange],
        ([connected, changes], set) => {
          if (updateOnConnected && connected && !this.connectedComplete) {
            this.connectedComplete = true;
            set(new Set(slots));
          }
          if (changes && Array.from(changes.keys()).some((key) => slots.length === 0 || slots.includes(key))) {
            set(changes);
          }
        }
      ).subscribe((changes) => {
        if (changes) {
          returnSignal.set(changes);
        }
      })
    );
    return returnSignal;
  }
  check(slotName) {
    return slotName === "default" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
  }
  updateOnChange(slots) {
    if (Array.isArray(slots)) {
      slots.forEach((slot) => this.updateTriggerSlots.add(slot));
    } else if (slots) {
      this.updateTriggerSlots.add(slots);
    }
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((node) => {
      if (node.nodeType === node.TEXT_NODE && node.textContent?.trim() !== "") {
        return true;
      }
      if (node.nodeType === node.ELEMENT_NODE) {
        const el = node;
        const tagName = el.tagName.toLowerCase();
        if (tagName === "mte-visually-hidden") {
          return false;
        }
        if (!el.hasAttribute("slot")) {
          return true;
        }
      }
      return false;
    });
  }
  hasNamedSlot(name) {
    if (!isSsr()) {
      return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
    } else {
      return false;
    }
  }
  hostConnected() {
    this.host.shadowRoot?.addEventListener("slotchange", this.handleSlotChange);
    this.host.updateComplete.then(() => {
      this.onConnected.set(true);
      if (this.updateTriggerSlots.size > 0) {
        this.host.requestUpdate();
      }
    });
  }
  hostDisconnected() {
    this.host.shadowRoot?.removeEventListener("slotchange", this.handleSlotChange);
    this.subs.forEach((unsub) => unsub());
    this.subs = [];
    this.connectedComplete = false;
    this.onConnected.set(false);
  }
};

// src/core/services/theme.service.ts
var import_styles5 = require("@mortar/styles");
var CACHE_TO_KEY = "mte.theme.cache-to";
var COLOR_SCHEME_KEY = "mte.theme.global-color-scheme";
var _MteThemeService = class {
  constructor() {
    this.config = import_styles5.config;
    this.themeSignal = signal(this.getGlobalTheme());
    this.colorSchemeSignal = signal(this.getGlobalColorScheme() ?? "light");
    this.handleMutationEvent = (mutationList, observer2) => {
      for (const mutation of mutationList) {
        if (mutation.type === "attributes") {
          if (mutation.attributeName === "data-mte-color-scheme") {
            this.colorSchemeSignal.set(this.getGlobalColorScheme());
          } else if (mutation.attributeName === "data-mte-theme") {
            this.themeSignal.set(this.getGlobalTheme());
          }
        }
      }
    };
    this.initCache();
  }
  /** Configures the `MteThemeService` to cache color-scheme changes to `localStorage`, `sessionStorage`, or neither. */
  cacheColorSchemeTo(method) {
    if (!method) {
      return;
    }
    if (method === "none") {
      try {
        localStorage.removeItem(CACHE_TO_KEY);
        localStorage.removeItem(COLOR_SCHEME_KEY);
      } catch (e) {
      }
      try {
        sessionStorage.removeItem(CACHE_TO_KEY);
        sessionStorage.removeItem(COLOR_SCHEME_KEY);
      } catch (e) {
      }
      return;
    }
    const currentScheme = this.colorSchemeSignal.get();
    try {
      localStorage.setItem(CACHE_TO_KEY, method);
      if (currentScheme) {
        localStorage.setItem(COLOR_SCHEME_KEY, currentScheme);
      }
    } catch (e) {
      console.error(
        "MteThemeService: Could not set color scheme cache method to `localStorage`. Attempting fallback to `sessionStorage`. Caching will only happen to sessionStorage."
      );
      try {
        sessionStorage.setItem(CACHE_TO_KEY, "sessionStorage");
        if (currentScheme) {
          sessionStorage.setItem(COLOR_SCHEME_KEY, currentScheme);
        }
      } catch (e2) {
        console.error(
          "MteThemeService: Could not set color scheme cache method to `localStorage` or `sessionStorage`. Caching not enabled."
        );
      }
    }
  }
  /** Sets the current global theme on the document root */
  setGlobalTheme(theme) {
    if (!theme || typeof theme !== "string") {
      throw new Error("MteThemeService: Global theme param must be a string.");
    }
    this.initObserver();
    if (theme !== "default") {
      globalThis?.document?.documentElement?.setAttribute("data-mte-theme", theme);
    } else {
      globalThis?.document?.documentElement?.removeAttribute("data-mte-theme");
    }
  }
  /** Sets the current global color-scheme on the document root */
  setGlobalColorScheme(colorScheme) {
    if (!colorScheme || typeof colorScheme !== "string") {
      throw new Error("MteThemeService: Global colorScheme param must be a string.");
    }
    const scheme = colorScheme.toLowerCase();
    if (scheme === "dark" || scheme === "light" || scheme === "system") {
      globalThis?.document?.documentElement?.setAttribute("data-mte-color-scheme", scheme);
      this.setCacheValue(COLOR_SCHEME_KEY, colorScheme);
    } else {
      globalThis?.document?.documentElement?.removeAttribute("data-mte-color-scheme");
    }
  }
  /** Returns the current global theme from the document root */
  getGlobalTheme() {
    const value = globalThis?.document?.documentElement?.getAttribute("data-mte-theme");
    if (!["default", "pxLight", "cxLight", "rxLight"].includes(value)) {
      return null;
    } else {
      return value;
    }
  }
  /** Returns the current global color-scheme from the document root */
  getGlobalColorScheme() {
    const value = globalThis?.document?.documentElement?.getAttribute(
      "data-mte-color-scheme"
    );
    if (!["light", "dark", "system"].includes(value)) {
      return null;
    } else {
      return value;
    }
  }
  /** Returns a reactive signal that will update any time the global theme changes */
  selectGlobalTheme() {
    this.initObserver();
    return this.themeSignal;
  }
  /** Returns a reactive signal that will update any time the global color-scheme changes */
  selectGlobalColorScheme() {
    this.initObserver();
    return this.colorSchemeSignal;
  }
  /** Sets the value of all of the given theme variables on the document root */
  set(configFnOrObj) {
    if (typeof configFnOrObj === "function") {
      configFnOrObj = configFnOrObj(this.config);
    }
    const mappings = this.flattenPaths(configFnOrObj);
    mappings.forEach(([path, val]) => {
      const cssVar = path.reduce((acc, prop) => {
        return acc[prop];
      }, import_styles5.setConfig);
      globalThis?.document?.documentElement?.style.setProperty(cssVar, `${val}`);
    });
  }
  /** @internal **/
  get(...keys) {
    const [fn] = keys ?? [null];
    if (typeof fn === "function") {
      const cssVar2 = fn(import_styles5.setConfig);
      return getComputedStyle(globalThis?.documentElement).getPropertyValue(cssVar2);
    }
    const cssVar = keys.reduce((acc, key) => acc[key], import_styles5.setConfig);
    return getComputedStyle(globalThis?.documentElement).getPropertyValue(cssVar);
  }
  /** Flattens a given object to an array of path keys and its resulting value */
  flattenPaths(obj, path = []) {
    return Object.keys(obj).reduce((acc, key) => {
      const nested = obj[key];
      if (typeof nested === "object") {
        path.push(key);
        Object.assign(acc, this.flattenPaths(nested, path));
      } else {
        path.push(key);
        acc.push([path, nested]);
      }
      return acc;
    }, []);
  }
  initCache() {
    if (!isSsr()) {
      this.initObserver();
      try {
        const cacheColorScheme = this.getCacheValue(COLOR_SCHEME_KEY);
        if (cacheColorScheme && cacheColorScheme !== "") {
          this.setGlobalColorScheme(cacheColorScheme);
        }
      } catch (e) {
      }
    }
  }
  initObserver() {
    if (!isSsr() && !this.rootObserver) {
      this.rootObserver = new MutationObserver(this.handleMutationEvent);
      this.rootObserver.observe(globalThis?.document?.documentElement, {
        attributes: true,
        attributeFilter: ["data-mte-theme", "data-mte-color-scheme"]
      });
    }
  }
  getCacheMethod() {
    let cacheMethod = null;
    try {
      const val = localStorage.getItem(CACHE_TO_KEY);
      if (val) {
        cacheMethod = val;
      }
    } catch (e) {
      try {
        const val = sessionStorage.getItem(CACHE_TO_KEY);
        if (val) {
          cacheMethod = val;
        }
      } catch (e2) {
      }
    }
    return cacheMethod;
  }
  setCacheValue(key, value) {
    const cacheMethod = this.getCacheMethod();
    try {
      if (cacheMethod === "localStorage") {
        localStorage.setItem(key, value);
      } else if (cacheMethod === "sessionStorage") {
        sessionStorage.setItem(key, value);
      }
    } catch (e) {
    }
  }
  getCacheValue(key) {
    const cacheMethod = this.getCacheMethod();
    try {
      if (cacheMethod === "localStorage") {
        return localStorage.getItem(key);
      } else if (cacheMethod === "sessionStorage") {
        return sessionStorage.getItem(key);
      }
    } catch (e) {
    }
    return null;
  }
};
var MteThemeService = new _MteThemeService();

// src/core/services/portal.service.ts
var defaultPortalAdapter = (portalElem, outletElem) => {
  outletElem?.appendChild(portalElem);
};
var _MtePortalService = class {
  constructor() {
    /** Shared global const for stack element refs */
    this.stackElements = {
      overlay: void 0
    };
    /** Shared global const for portaled elements metadata */
    this.portaledElements = /* @__PURE__ */ new Map();
    this.activeScrollLocks = /* @__PURE__ */ new Set();
    /** Returns the id for the configured stack element */
    this.idFactory = (stack) => `mte-portal__${stack}-stack`;
  }
  /**
   * When called, this service will attempt to locate the `@angular/cdk` overlay stack.
   * If found this service will be configured to use that element as the `overlay` stack instead of initializing its own.
   */
  configureCdkInterop() {
    if (!isSsr()) {
      const cdkStack = document.querySelector(".cdk-overlay-container");
      if (cdkStack) {
        this.stackElements.overlay = cdkStack;
        this.stackElements.overlay.classList.add(this.idFactory("overlay"));
      }
    }
  }
  /**
   * Registers a portal controller. All items it requested to be portaled will be track against it.
   * When the portal is removed we can then remove any elements it currently has portaled and
   * any of their portaled children.
   */
  addController(portalController) {
    if (!this.portaledElements.has(portalController?.id)) {
      this.portaledElements.set(portalController.id, /* @__PURE__ */ new Map());
    }
  }
  /** Removes all of a portal controllers portaled elements and their references */
  removeController(portalController) {
    const attachedElements = this.portaledElements.get(portalController.id);
    if (attachedElements) {
      attachedElements.forEach((item) => this.removeFromStack(portalController, item.element));
    }
    this.portaledElements.delete(portalController.id);
  }
  /**
   * Ensures a ref to the configured stack exists. If it does not, the configured stack will
   * be created and appended to the document. Does nothing during SSR.
   */
  initializeStack(stack) {
    if (stack !== "overlay") {
      throw new Error(`Invalid Overlay Stack: "${stack}" must be 'overlay' at this time.`);
    }
    if (!isSsr()) {
      if (!this.stackElements[stack]) {
        const elem = document.getElementById(this.idFactory(stack));
        this.stackElements[stack] = elem ?? Object.assign(document.createElement("div"), {
          className: this.idFactory(stack)
        });
      }
      if (this.stackElements[stack] && !this.stackElements[stack].isConnected) {
        this.appendStackToDom(this.stackElements[stack]);
        if (!this.stackMutationObserver) {
          this.stackMutationObserver = new MutationObserver((ml, observer2) => {
            for (const mutation of ml) {
              for (const removedNode of mutation.removedNodes) {
                if (removedNode === this.stackElements.overlay) {
                  this.removeAllItemsFromStacks();
                  setTimeout(() => {
                    this.appendStackToDom(this.stackElements.overlay);
                  });
                }
              }
            }
          });
        }
        if (this.stackElements[stack]?.parentElement) {
          this.stackMutationObserver.observe(this.stackElements[stack].parentNode, {
            attributes: false,
            childList: true,
            subtree: false
          });
        }
      }
    }
  }
  appendStackToDom(stackElement) {
    if (stackElement && !stackElement.isConnected) {
      const toastContainer = document.body.querySelector("mte-toast-container");
      if (toastContainer) {
        document.body.insertBefore(stackElement, toastContainer);
      } else {
        document.body.append(stackElement);
      }
    }
  }
  /** Appends an item to the configured portal stack */
  appendToStack(portalController, element, {
    withDimBackdrop = false,
    withInertBackdrop = false,
    withScrollLock = false,
    backdropTransitionDuration,
    closeOnClickOutsideHandler,
    portalAdapter = defaultPortalAdapter
  } = {}) {
    this.addController(portalController);
    return new Promise((resolve) => {
      const parentPortaledElement = this.getParentPortaledElement(portalController, element);
      const stackName = portalController.options.stack;
      const stack = this.stackElements[stackName];
      const attachedElements = this.portaledElements.get(portalController.id);
      const backdrop = Object.assign(document.createElement("div"), {
        className: "mte-portal__backdrop",
        ...backdropTransitionDuration ? { style: `transition-duration: ${backdropTransitionDuration};` } : {}
      });
      if (withInertBackdrop) {
        backdrop.classList.add("backdrop--inert");
      }
      if (withDimBackdrop) {
        backdrop.classList.add("backdrop--shadow");
      } else {
        backdrop.classList.add("backdrop--transparent");
      }
      stack?.appendChild(backdrop);
      if (!isSsr()) {
        if (closeOnClickOutsideHandler) {
          backdrop.addEventListener("mousedown", closeOnClickOutsideHandler);
          backdrop.addEventListener("touchstart", closeOnClickOutsideHandler);
        }
        if (withDimBackdrop) {
          globalThis.requestAnimationFrame(() => {
            backdrop.classList.add("backdrop--show");
          });
        }
        if (withScrollLock) {
          this.applyScrollLock(element);
        }
      }
      Promise.resolve(portalAdapter(element, stack)).then(() => {
        attachedElements.set(element, {
          element,
          stack: stackName,
          backdrop,
          childPortaledElements: /* @__PURE__ */ new Set(),
          parentPortaledElement
        });
      });
      resolve();
    });
  }
  /** Removes an element from the stack */
  removeFromStack(portalController, element) {
    if (this.portaledElements.has(portalController.id)) {
      const attachedElements = this.portaledElements.get(portalController.id);
      if (attachedElements) {
        const elementMetadata = attachedElements.get(element);
        if (elementMetadata) {
          attachedElements.delete(element);
          this.finalizeStackRemove(elementMetadata);
        }
      }
    }
  }
  // Safely removes all items from all stacks
  removeAllItemsFromStacks() {
    for (let [id, controllerMap] of this.portaledElements.entries()) {
      for (let [element, elementMetadata] of controllerMap.entries()) {
        if (elementMetadata) {
          this.finalizeStackRemove(elementMetadata);
        }
      }
    }
  }
  /** Makes a backdrop associated with a portaled element visible if it exists */
  showBackdrop(portalController, element) {
    this.addController(portalController);
    const { backdrop } = this.portaledElements.get(portalController.id).get(element) ?? {};
    backdrop?.classList.add("backdrop--show");
  }
  /** Hides a backdrop associated with a portaled element if it exists */
  hideBackdrop(portalController, element) {
    this.addController(portalController);
    const { backdrop } = this.portaledElements.get(portalController.id).get(element) ?? {};
    backdrop?.classList.remove("backdrop--show");
  }
  /** Updates the intertness a backdrop if it exists (whether or not the user can click through it) */
  setBackdropInertness(portalController, element, inert = true) {
    this.addController(portalController);
    const { backdrop } = this.portaledElements.get(portalController.id).get(element) ?? {};
    if (inert) {
      backdrop?.classList.add("backdrop--inert");
    } else {
      backdrop?.classList.remove("backdrop--inert");
    }
  }
  /**
   * Checks if an element is being portaled from within another portaled
   * element and returns that parent if it is
   */
  getParentPortaledElement(portalController, element) {
    if (portalController.parentPortaledElement) {
      return portalController.parentPortaledElement;
    }
    let parentPortaledElement;
    this.portaledElements.forEach(
      (portalController2) => portalController2.forEach((portaledElement) => {
        if (portaledElement.element.contains(element)) {
          portaledElement.childPortaledElements.add(element);
          parentPortaledElement = portaledElement.element;
        }
      })
    );
    if (parentPortaledElement) {
      portalController.parentPortaledElement = parentPortaledElement;
    }
    return parentPortaledElement;
  }
  /** Ensures an element is removed from the stack no matter which controller has portaled it */
  removeFromStackGlobally(element) {
    this.portaledElements.forEach((portalController) => {
      if (portalController.has(element)) {
        const elementMetadata = portalController.get(element);
        portalController.delete(element);
        this.finalizeStackRemove(elementMetadata);
      }
    });
  }
  /** Finalizes the remove of an element from a portal stack */
  finalizeStackRemove(elementMetadata) {
    if (elementMetadata) {
      const {
        element,
        stack: stackName,
        backdrop,
        childPortaledElements,
        parentPortaledElement
      } = elementMetadata;
      const stack = this.stackElements[stackName];
      this.removeScrollLock(element);
      if (parentPortaledElement) {
        this.portaledElements.forEach((portalController) => {
          if (portalController.has(parentPortaledElement)) {
            portalController.get(parentPortaledElement).childPortaledElements.delete(element);
          }
        });
      }
      if (childPortaledElements.size > 0) {
        childPortaledElements.forEach((element2) => this.removeFromStackGlobally(element2));
      }
      if (backdrop && backdrop.parentElement === stack) {
        stack?.removeChild(backdrop);
      }
      if (element.parentElement?.hasAttribute("data-overlay-wrapper")) {
        if (element.parentElement.parentElement === stack) {
          stack?.removeChild(element.parentElement);
        }
      } else if (element.parentElement === stack) {
        stack?.removeChild(element);
      }
    }
  }
  /**
   * Applies a scroll lock to the body element to prevent scrolling of page content.
   * Calculates any body offsets due to visible scrollbars and dynamically adjusts for them.
   */
  applyScrollLock(element) {
    this.activeScrollLocks.add(element);
    const isIOS = isPlatform("IOS");
    const bodyStyle = document.body.style;
    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const scrollX2 = bodyStyle.left ? parseFloat(bodyStyle.left) : window.pageXOffset;
    const scrollY2 = bodyStyle.top ? parseFloat(bodyStyle.top) : window.pageYOffset;
    bodyStyle.overflow = "hidden";
    document.body.classList.add("mte-scroll-lock--active");
    if (scrollbarWidth) {
      bodyStyle[paddingProp] = `${scrollbarWidth}px`;
    }
    if (isIOS) {
      const offsetLeft = globalThis.visualViewport?.offsetLeft || 0;
      const offsetTop = globalThis.visualViewport?.offsetTop || 0;
      Object.assign(bodyStyle, {
        position: "fixed",
        top: `${-(scrollY2 - Math.floor(offsetTop))}px`,
        left: `${-(scrollX2 - Math.floor(offsetLeft))}px`,
        right: "0"
      });
    }
  }
  /** Removes an active scrollLock if there are no remaining elements portaled that requested it */
  removeScrollLock(element) {
    this.activeScrollLocks.delete(element);
    if (this.activeScrollLocks.size === 0) {
      const isIOS = isPlatform("IOS");
      const bodyStyle = document.body.style;
      const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
      const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
      Object.assign(bodyStyle, {
        overflow: "",
        [paddingProp]: ""
      });
      document.body.classList.remove("mte-scroll-lock--active");
      if (isIOS) {
        Object.assign(bodyStyle, {
          position: "",
          top: "",
          left: "",
          right: ""
        });
        globalThis.scrollTo(scrollX, scrollY);
      }
    }
  }
};
var MtePortalService = new _MtePortalService();

// src/core/services/history-api.service.ts
var _MteHistoryApiService = class {
  constructor() {
    this.initialized = false;
    this.changeSignal = signal();
    this.forwardApply = (target, thisArg, argArray) => {
      const res = target.apply(thisArg, argArray);
      if (this.prevHref !== window.location.href) {
        this.prevHref = window.location.href;
        this.changeSignal.set(this.prevHref);
      }
      return res;
    };
  }
  stateChanges() {
    this.init();
    return this.changeSignal;
  }
  init() {
    if (!this.initialized) {
      this.initialized = true;
      window.addEventListener("popstate", () => {
        this.changeSignal.set(window.location.href);
      });
      window.history.back = new Proxy(window.history.back, { apply: this.forwardApply });
      window.history.forward = new Proxy(window.history.forward, { apply: this.forwardApply });
      window.history.go = new Proxy(window.history.go, { apply: this.forwardApply });
      window.history.pushState = new Proxy(window.history.pushState, { apply: this.forwardApply });
      window.history.replaceState = new Proxy(window.history.pushState, {
        apply: this.forwardApply
      });
    }
  }
};
var MteHistoryApiService = new _MteHistoryApiService();

// src/core/services/localize.service.ts
var _MteLocalizeService = class {
  constructor() {
    // Assume `en` lang for now as a fallback until we rollback wider support for i11n when necessary
    this.language = "en";
    this.initialized = false;
  }
  init() {
    if (!isSsr() && !this.initialized) {
      this.initialized = true;
      this.language = `${document.documentElement.lang || navigator.language}`.toLowerCase();
    }
  }
  formatNumber(numberToFormat, options) {
    this.init();
    const lang = options?.lang ? options.lang : this.language;
    numberToFormat = Number(numberToFormat);
    const finalOptions = {
      lang: options.lang ?? void 0,
      style: options.style ?? void 0,
      currency: options.currency ?? void 0,
      currencyDisplay: options.currencyDisplay ?? void 0,
      useGrouping: options.useGrouping ?? void 0,
      minimumIntegerDigits: options.minimumIntegerDigits ?? void 0,
      minimumFractionDigits: options.minimumFractionDigits ?? void 0,
      maximumFractionDigits: options.maximumFractionDigits ?? void 0,
      minimumSignificantDigits: options.minimumSignificantDigits ?? void 0,
      maximumSignificantDigits: options.maximumSignificantDigits ?? void 0
    };
    return isNaN(numberToFormat) ? "" : new Intl.NumberFormat(lang, finalOptions).format(numberToFormat);
  }
  formatDate(dateToFormat, options) {
    this.init();
    const lang = options?.lang ? options.lang : this.language;
    const formattedOptions = { ...options ?? {}, ...this.getDefinedDateFormat(options?.format) };
    const finalOptions = {
      lang: formattedOptions.lang ?? void 0,
      weekday: formattedOptions.weekday ?? void 0,
      era: formattedOptions.era ?? void 0,
      year: formattedOptions.year ?? void 0,
      month: formattedOptions.month ?? void 0,
      day: formattedOptions.day ?? void 0,
      hour: formattedOptions.hour ?? void 0,
      minute: formattedOptions.minute ?? void 0,
      second: formattedOptions.second ?? void 0,
      fractionalSecondDigits: formattedOptions.fractionalSecondDigits ?? void 0,
      timeZoneName: formattedOptions.timeZoneName ?? void 0,
      timeZone: formattedOptions.timeZone ?? void 0,
      hour12: formattedOptions.hour12 ?? void 0,
      format: formattedOptions.format ?? void 0
    };
    dateToFormat = new Date(dateToFormat);
    return new Intl.DateTimeFormat(lang, finalOptions).format(dateToFormat);
  }
  getDefinedDateFormat(format) {
    switch (format) {
      case "short":
        return {
          month: "numeric",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric"
        };
      case "medium":
        return {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        };
      case "long":
        return {
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        };
      case "full":
        return {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        };
      case "shortDate":
        return {
          month: "numeric",
          day: "numeric",
          year: "numeric"
        };
      case "mediumDate":
        return {
          month: "short",
          day: "numeric",
          year: "numeric"
        };
      case "longDate":
        return {
          month: "long",
          day: "numeric",
          year: "numeric"
        };
      case "fullDate":
        return {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        };
      case "shortTime":
        return {
          hour: "numeric",
          minute: "numeric"
        };
      case "mediumTime":
        return {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        };
      case "longTime":
        return {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        };
      case "fullTime":
        return {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          fractionalSecondDigits: 2,
          timeZoneName: "short"
        };
      default:
        return {};
    }
  }
};
var MteLocalizeService = new _MteLocalizeService();

// src/core/controllers/portal.controller.ts
var nextUniqueId = 0;
var PortalController = class {
  constructor(host, options = { stack: "overlay" }) {
    this.host = host;
    this.options = options;
    /** @ignore */
    this.id = nextUniqueId++;
    /**
     * Flag to help check if a disconnected callback has been fired
     * because of a portaling operation.
     */
    this.ignoreNextDisconnect = true;
    this.host.addController(this);
  }
  /** Requests the portal service append this item to the configured stack */
  appendToStack(element = this.host, options = {}) {
    if (element?.isConnected) {
      this.ignoreNextDisconnect = true;
    }
    return MtePortalService.appendToStack(this, element, options);
  }
  /** Requests the portal service remove this element from the configured stack */
  removeFromStack(element = this.host) {
    this.ignoreNextDisconnect = false;
    return MtePortalService.removeFromStack(this, element);
  }
  /** Makes a backdrop associated with a portaled element visible if it exists */
  showBackdrop(element = this.host) {
    return MtePortalService.showBackdrop(this, element);
  }
  /** Hides a backdrop associated with a portaled element if it exists */
  hideBackdrop(element = this.host) {
    return MtePortalService.hideBackdrop(this, element);
  }
  /** Updates the intertness a backdrop if it exists (whether or not the user can click through it) */
  setBackdropInertness(inert, element = this.host) {
    return MtePortalService.setBackdropInertness(this, element, inert);
  }
  hostConnected() {
    if (this.options.stack) {
      MtePortalService.initializeStack(this.options.stack);
    }
  }
  hostDisconnected() {
    if (this.ignoreNextDisconnect) {
      this.ignoreNextDisconnect = false;
    } else {
      MtePortalService.removeController(this);
    }
  }
};

// src/core/controllers/detect-child-close.controller.ts
var DetectChildCloseController = class {
  constructor(host) {
    this.host = host;
    /**
     * Only trigger a close if the target is not this element
     * as this implies the close was triggered from a child element
     */
    this.childOnlyClose = (e) => {
      if (e.target !== this.host) {
        e.stopPropagation();
        this.host.close();
      }
    };
    this.host.addController(this);
  }
  hostConnected() {
    this.host.addEventListener("doClose", this.childOnlyClose, true);
  }
  hostDisconnected() {
    this.host.removeEventListener("doClose", this.childOnlyClose, true);
  }
};

// src/atomic/button/button.presets.ts
var buttonPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};
var iconButtonPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/icon/icon.presets.ts
var iconPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/progress-bar/progress-bar.presets.ts
var progressBarPresets = {
  default: {},
  cx: {
    color: "secondary"
  },
  px: {},
  rx: {}
};

// src/atomic/progress-spinner/progress-spinner.presets.ts
var progressSpinnerPresets = {
  default: {},
  cx: {
    color: "secondary"
  },
  px: {},
  rx: {}
};

// src/atomic/toolbar/toolbar.presets.ts
var toolbarPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/card/card.presets.ts
var cardPresets = {
  default: {},
  cx: {
    withoutShadow: true
  },
  px: {},
  rx: {}
};
var cardButtonPresets = {
  default: {},
  cx: {
    withoutShadow: true
  },
  px: {},
  rx: {}
};

// src/atomic/tree/tree.presets.ts
var treePresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/tag/tag.presets.ts
var tagPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/badge/badge.presets.ts
var badgePresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/link/link.presets.ts
var linkPresets = {
  default: {},
  cx: {
    fontWeight: "bold"
  },
  px: {},
  rx: {}
};

// src/atomic/alert/alert.presets.ts
var alertPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/input/input.presets.ts
var inputPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/drawer/drawer.presets.ts
var drawerPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/aside/aside.presets.ts
var asidePresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/breadcrumbs/breadcrumb-item.presets.ts
var breadcrumbItemPresets = {
  default: {},
  cx: {},
  px: {
    withoutUnderline: true
  },
  rx: {}
};

// src/atomic/modal/modal.presets.ts
var modalPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/checkbox/checkbox.presets.ts
var checkboxPresets = {
  default: {},
  cx: {
    color: "secondary"
  },
  px: {},
  rx: {}
};

// src/atomic/radio/radio.presets.ts
var radioPresets = {
  default: {},
  cx: {
    color: "secondary"
  },
  px: {},
  rx: {}
};

// src/atomic/nav/nav.presets.ts
var navRootPresets = {
  default: {
    inverse: "sidebar"
  },
  cx: {
    preferSidebar: "closed"
  },
  px: {
    inverse: "sidebar"
  },
  rx: {
    preferSidebar: "closed"
  }
};
var navHeaderPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};
var navSubHeaderPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};
var navSidebarPresets = {
  default: {},
  cx: {
    hideUntilTransition: true
  },
  px: {},
  rx: {
    hideUntilTransition: true
  }
};
var navContentPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};
var navFooterPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};
var navButtonPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};
var navIconButtonPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};
var navItemPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/button-group/button-group.presets.ts
var buttonGroupPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/switch/switch.presets.ts
var switchPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/native-select/native-select.presets.ts
var nativeSelectPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/textarea/textarea.presets.ts
var textareaPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/skeleton/skeleton.presets.ts
var skeletonPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/slider/slider.presets.ts
var sliderPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/range-slider/range-slider.presets.ts
var rangeSliderPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/atomic/segmented-control/segmented-control.presets.ts
var segmentedControlPresets = {
  default: {},
  cx: {},
  px: {},
  rx: {}
};

// src/core/presets/presets.ts
var defaultPreset = {
  preset: "default",
  theme: {
    name: "px",
    colorScheme: "light"
  },
  MteButton: buttonPresets.default,
  MteIconButton: iconButtonPresets.default,
  MteIcon: iconPresets.default,
  MteProgressBar: progressBarPresets.default,
  MteProgressSpinner: progressSpinnerPresets.default,
  MteToolbar: toolbarPresets.default,
  MteCard: cardPresets.default,
  MteCardButton: cardButtonPresets.default,
  MteTree: treePresets.default,
  MteTag: tagPresets.default,
  MteBadge: badgePresets.default,
  MteLink: linkPresets.default,
  MteAlert: alertPresets.default,
  MteInput: inputPresets.default,
  MteDrawer: drawerPresets.default,
  MteAside: asidePresets.default,
  MteBreadcrumbItem: breadcrumbItemPresets.default,
  MteModal: modalPresets.default,
  MteCheckbox: checkboxPresets.default,
  MteRadio: radioPresets.default,
  MteNavRoot: navRootPresets.default,
  MteNavHeader: navHeaderPresets.default,
  MteNavSubHeader: navSubHeaderPresets.default,
  MteNavSidebar: navSidebarPresets.default,
  MteNavContent: navContentPresets.default,
  MteNavFooter: navFooterPresets.default,
  MteNavButton: navButtonPresets.default,
  MteNavIconButton: navIconButtonPresets.default,
  MteNavItem: navItemPresets.default,
  MteButtonGroup: buttonGroupPresets.default,
  MteSwitch: switchPresets.default,
  MteNativeSelect: nativeSelectPresets.default,
  MteTextarea: textareaPresets.default,
  MteSkeleton: skeletonPresets.default,
  MteSlider: sliderPresets.default,
  MteRangeSlider: rangeSliderPresets.default,
  MteSegmentedControl: segmentedControlPresets.default
};
var pxPreset = {
  preset: "px",
  theme: {
    name: "px",
    colorScheme: "light"
  },
  MteButton: buttonPresets.px,
  MteIconButton: iconButtonPresets.px,
  MteIcon: iconPresets.px,
  MteProgressBar: progressBarPresets.px,
  MteProgressSpinner: progressSpinnerPresets.px,
  MteToolbar: toolbarPresets.px,
  MteCard: cardPresets.px,
  MteCardButton: cardButtonPresets.px,
  MteTree: treePresets.px,
  MteTag: tagPresets.px,
  MteBadge: badgePresets.px,
  MteLink: linkPresets.px,
  MteAlert: alertPresets.px,
  MteInput: inputPresets.px,
  MteDrawer: drawerPresets.px,
  MteAside: asidePresets.px,
  MteBreadcrumbItem: breadcrumbItemPresets.px,
  MteModal: modalPresets.px,
  MteCheckbox: checkboxPresets.px,
  MteRadio: radioPresets.px,
  MteNavRoot: navRootPresets.px,
  MteNavHeader: navHeaderPresets.px,
  MteNavSubHeader: navSubHeaderPresets.px,
  MteNavSidebar: navSidebarPresets.px,
  MteNavContent: navContentPresets.px,
  MteNavFooter: navFooterPresets.px,
  MteNavButton: navButtonPresets.px,
  MteNavIconButton: navIconButtonPresets.px,
  MteNavItem: navItemPresets.px,
  MteButtonGroup: buttonGroupPresets.px,
  MteSwitch: switchPresets.px,
  MteNativeSelect: nativeSelectPresets.px,
  MteTextarea: textareaPresets.px,
  MteSkeleton: skeletonPresets.px,
  MteSlider: sliderPresets.px,
  MteRangeSlider: rangeSliderPresets.px,
  MteSegmentedControl: segmentedControlPresets.px
};
var cxPreset = {
  preset: "cx",
  theme: {
    name: "cx",
    colorScheme: "light"
  },
  MteButton: buttonPresets.cx,
  MteIconButton: iconButtonPresets.cx,
  MteIcon: iconPresets.cx,
  MteProgressBar: progressBarPresets.cx,
  MteProgressSpinner: progressSpinnerPresets.cx,
  MteToolbar: toolbarPresets.cx,
  MteCard: cardPresets.cx,
  MteCardButton: cardButtonPresets.cx,
  MteTree: treePresets.cx,
  MteTag: tagPresets.cx,
  MteBadge: badgePresets.cx,
  MteLink: linkPresets.cx,
  MteAlert: alertPresets.cx,
  MteInput: inputPresets.cx,
  MteDrawer: drawerPresets.cx,
  MteAside: asidePresets.cx,
  MteBreadcrumbItem: breadcrumbItemPresets.cx,
  MteModal: modalPresets.cx,
  MteCheckbox: checkboxPresets.cx,
  MteRadio: radioPresets.cx,
  MteNavRoot: navRootPresets.cx,
  MteNavHeader: navHeaderPresets.cx,
  MteNavSubHeader: navSubHeaderPresets.cx,
  MteNavSidebar: navSidebarPresets.cx,
  MteNavContent: navContentPresets.cx,
  MteNavFooter: navFooterPresets.cx,
  MteNavButton: navButtonPresets.cx,
  MteNavIconButton: navIconButtonPresets.cx,
  MteNavItem: navItemPresets.cx,
  MteButtonGroup: buttonGroupPresets.cx,
  MteSwitch: switchPresets.cx,
  MteNativeSelect: nativeSelectPresets.cx,
  MteTextarea: textareaPresets.cx,
  MteSkeleton: skeletonPresets.cx,
  MteSlider: sliderPresets.cx,
  MteRangeSlider: rangeSliderPresets.cx,
  MteSegmentedControl: segmentedControlPresets.cx
};
var rxPreset = {
  preset: "rx",
  theme: {
    name: "rx",
    colorScheme: "light"
  },
  MteButton: buttonPresets.rx,
  MteIconButton: iconButtonPresets.rx,
  MteIcon: iconPresets.rx,
  MteProgressBar: progressBarPresets.rx,
  MteProgressSpinner: progressSpinnerPresets.rx,
  MteToolbar: toolbarPresets.rx,
  MteCard: cardPresets.rx,
  MteCardButton: cardButtonPresets.rx,
  MteTree: treePresets.rx,
  MteTag: tagPresets.rx,
  MteBadge: badgePresets.rx,
  MteLink: linkPresets.rx,
  MteAlert: alertPresets.rx,
  MteInput: inputPresets.rx,
  MteDrawer: drawerPresets.rx,
  MteAside: asidePresets.rx,
  MteBreadcrumbItem: breadcrumbItemPresets.rx,
  MteModal: modalPresets.rx,
  MteCheckbox: checkboxPresets.rx,
  MteRadio: radioPresets.rx,
  MteNavRoot: navRootPresets.rx,
  MteNavHeader: navHeaderPresets.rx,
  MteNavSubHeader: navSubHeaderPresets.rx,
  MteNavSidebar: navSidebarPresets.rx,
  MteNavContent: navContentPresets.rx,
  MteNavFooter: navFooterPresets.rx,
  MteNavButton: navButtonPresets.rx,
  MteNavIconButton: navIconButtonPresets.rx,
  MteNavItem: navItemPresets.rx,
  MteButtonGroup: buttonGroupPresets.rx,
  MteSwitch: switchPresets.rx,
  MteNativeSelect: nativeSelectPresets.rx,
  MteTextarea: textareaPresets.rx,
  MteSkeleton: skeletonPresets.rx,
  MteSlider: sliderPresets.rx,
  MteRangeSlider: rangeSliderPresets.rx,
  MteSegmentedControl: segmentedControlPresets.rx
};

// src/core/presets/preset.service.ts
var _MtePresetService = class {
  constructor() {
    this.presets = /* @__PURE__ */ new Map([
      ["global", defaultPreset],
      ["default", defaultPreset],
      ["px", pxPreset],
      ["cx", cxPreset],
      ["rx", rxPreset]
    ]);
    this.presetChangedSignal = signal({
      presetName: null,
      componentName: null
    });
  }
  setPreset(presetName, preset) {
    this.presets.set(presetName, {
      ...this.presets.get(presetName) ?? defaultPreset,
      ...preset
    });
    this.presetChangedSignal.set({ presetName, componentName: null });
  }
  setComponentPreset(presetName, componentName, componentPreset) {
    const selectedPreset = this.presets.get(presetName) ?? defaultPreset;
    this.presets.set(presetName, {
      ...selectedPreset,
      [componentName]: {
        ...selectedPreset[componentName] ?? {},
        ...componentPreset
      }
    });
    this.presetChangedSignal.set({ presetName, componentName });
  }
  setComponentPresetProperty(presetName, componentName, propertyName, value) {
    const selectedPreset = this.presets.get(presetName) ?? defaultPreset;
    const selectedComponentPreset = selectedPreset[componentName];
    if (typeof value === "object") {
      this.presets.set(presetName, {
        ...selectedPreset,
        [componentName]: {
          ...selectedComponentPreset,
          [propertyName]: {
            ...selectedComponentPreset[propertyName],
            ...value
          }
        }
      });
    } else {
      this.presets.set(presetName, {
        ...selectedPreset,
        [componentName]: {
          ...selectedComponentPreset,
          [propertyName]: value
        }
      });
    }
    this.presetChangedSignal.set({ presetName, componentName });
  }
  getPreset(presetName) {
    const preset = this.presets.get(presetName);
    if (!preset) {
      console.error(`MtePresetService: A preset with the name "${presetName}" does not exist`);
    }
    return preset;
  }
  getComponentPreset(presetName, componentName) {
    const preset = this.presets.get(presetName);
    const componentPreset = preset[componentName];
    if (!preset) {
      console.error(`MtePresetService: A preset with the name "${presetName}" does not exist.`);
    }
    return componentPreset;
  }
  selectPreset(presetName) {
    let firstEmit = true;
    return computed(this.presetChangedSignal, (change, set) => {
      if (firstEmit) {
        set(this.getPreset(presetName));
        firstEmit = false;
      } else if (change.presetName === presetName) {
        set(this.getPreset(presetName));
      }
    });
  }
  selectComponentPreset(presetName, componentName) {
    let firstEmit = true;
    return computed(this.presetChangedSignal, (change, set) => {
      if (firstEmit) {
        set(this.getComponentPreset(presetName, componentName));
        firstEmit = false;
      } else if (change.presetName === presetName && !change.componentName || change.presetName === presetName && change.componentName === componentName) {
        set(this.getComponentPreset(presetName, componentName));
      }
    });
  }
};
var MtePresetService = new _MtePresetService();

// src/core/presets/preset.mixin.ts
var import_context = require("@lit-labs/context");
var import_decorators3 = require("lit/decorators.js");
var {
  is,
  defineProperty,
  getOwnPropertyDescriptor,
  getOwnPropertyNames,
  getOwnPropertySymbols,
  getPrototypeOf
} = Object;
var PresetMixinFactory = (componentName, options = { reflectAppliedPreset: false }) => {
  return (superClass) => {
    class PresetElement extends superClass {
      constructor(...args) {
        super(args);
        this.__componentName = componentName;
        /** Map that stores private values that take precedence over preset values */
        this._valueMap = /* @__PURE__ */ new Map();
        /** Map that stores fallback preset values emitted by the presetController */
        this._presetMap = /* @__PURE__ */ new Map();
        this._preset = "global";
        this.appliedPreset = "global";
        /** Emits whenever the local preset value changes. */
        this._activePresetSignal = signal(null);
        this._parentPresetSignal = signal(null);
        this._presetContext = new import_context.ContextConsumer(this, {
          context: presetContext,
          subscribe: true,
          callback: (value) => {
            this._parentPresetSignal.set((value === "" ? null : value) ?? "global");
          }
        });
        if (isSsr()) {
          this.ssrConstructorSub = MtePresetService.selectPreset(this.preset ?? "global").subscribe(
            (preset) => this.handleSsrPresetChanges(preset)
          );
        }
      }
      set preset(preset) {
        this._preset = preset;
        this._activePresetSignal.set(preset);
        if (isSsr()) {
          this.ssrConstructorSub?.();
          this.ssrConstructorSub = null;
          const preset2 = MtePresetService.getPreset(this.preset ?? "global");
          this.handleSsrPresetChanges(preset2);
        }
      }
      get preset() {
        return this._preset;
      }
      /**
       * Overrides the default getPropertyDescriptor method to check for the custom
       * `isPreset` option. Descriptors of properties that are declared with the `isPreset`
       * option are defined with special getter/setter logic that sets value to valueMap
       * and gets values from the valueMap but then also falls back to any value in the presetMap
       *
       * The presetMap is populated above from values from the presetController whenever the
       * preset for this component is changed globally.
       */
      static getPropertyDescriptor(name, key, options2) {
        const { get, set } = getOwnPropertyDescriptor(this.prototype, name) ?? {
          get() {
            return this[key];
          },
          set(v) {
            this[key] = v;
          }
        };
        return {
          get() {
            if (options2["isPreset"]) {
              return this._valueMap.get(name) || this._presetMap.get(name);
            } else {
              return get?.call(this);
            }
          },
          set(value) {
            if (options2["isPreset"]) {
              const oldValue = this._valueMap.get(name);
              this._valueMap.set(name, value);
              if (isSsr()) {
                this.requestUpdate(name, oldValue, options2);
              } else {
                this.updateComplete.then(() => {
                  this.requestUpdate(name, oldValue, options2);
                });
              }
            } else {
              const oldValue = get?.call(this);
              set.call(this, value);
              this.requestUpdate(name, oldValue, options2);
            }
          },
          configurable: true,
          enumerable: true
        };
      }
      connectedCallback() {
        super.connectedCallback();
        this.subs.push(
          computed(
            [this._activePresetSignal, this._parentPresetSignal],
            ([activePreset, parentPreset], set) => {
              if (activePreset) {
                this.__localPresetTheme = activePreset === "global" ? null : MtePresetService.getComponentPreset(activePreset, "theme");
              } else {
                this.__localPresetTheme = null;
              }
              this.requestUpdate("theme", null);
              this._appliedPreset = activePreset ?? parentPreset ?? "global";
              this.appliedPreset = MtePresetService.getComponentPreset(
                this._appliedPreset,
                "preset"
              );
              this.previousComponentUnsub?.();
              this.previousComponentUnsub = MtePresetService.selectComponentPreset(
                this._appliedPreset,
                this.__componentName
              ).subscribe((newPreset) => {
                if (newPreset) {
                  set(newPreset);
                }
              });
            }
          ).subscribe((newPresets) => {
            const oldValuesMap = new Map(this._presetMap);
            const oldProps = Array.from(this._presetMap.keys());
            const newProps = Object.keys(newPresets ?? {});
            if (newProps.length === 0) {
              this._presetMap.clear();
            }
            [...oldProps, ...newProps].forEach((key) => {
              if (newPresets[key]) {
                this._presetMap.set(key, newPresets[key]);
              } else {
                this._presetMap.delete(key);
              }
              this.requestUpdate(key, oldValuesMap.get(key) ?? null);
            });
          })
        );
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        this.previousComponentUnsub?.();
        this.ssrConstructorSub?.();
      }
      handleSsrPresetChanges(preset) {
        if (preset) {
          const componentPresets = preset[this.__componentName];
          const oldProps = Array.from(this._presetMap.keys());
          const newProps = Object.keys(componentPresets ?? {});
          if (newProps.length === 0) {
            this._presetMap.clear();
          }
          [...oldProps, ...newProps].forEach((key) => {
            if (componentPresets[key]) {
              this._presetMap.set(key, componentPresets[key]);
            } else {
              this._presetMap.delete(key);
            }
            this.requestUpdate(key, null);
          });
          this.appliedPreset = preset["preset"];
          this.requestUpdate("appliedPreset", null);
        }
      }
    }
    __decorateClass([
      (0, import_decorators3.property)({ reflect: true })
    ], PresetElement.prototype, "preset", 1);
    __decorateClass([
      (0, import_decorators3.property)({ reflect: options?.reflectAppliedPreset ?? false })
    ], PresetElement.prototype, "appliedPreset", 2);
    __decorateClass([
      (0, import_decorators3.state)()
    ], PresetElement.prototype, "_appliedPreset", 2);
    return PresetElement;
  };
};

// src/core/presets/preset.decorator.ts
var import_property = require("@lit/reactive-element/decorators/property.js");
function presetProperty(options) {
  return (0, import_property.property)({
    ...options,
    isPreset: true
  });
}

// src/core/presets/preset.context.ts
var import_context2 = require("@lit-labs/context");
var presetContext = (0, import_context2.createContext)("MTE_PRESET");

// src/core/controllers/applied-preset-context.controller.ts
var globalPreset$ = MtePresetService.selectPreset("global");
var globalPresetName$ = computed(globalPreset$, (preset) => preset.preset);

// src/core/decorators/on-update.decorator.ts
function onUpdate(propNames, options) {
  const resolvedOptions = {
    waitUntilFirstUpdate: false,
    on: "client",
    ...options
  };
  return (proto, decoratedFnName) => {
    const { willUpdate } = proto;
    const _propNames = Array.isArray(propNames) ? propNames : [propNames];
    const propNameKeys = _propNames;
    proto.willUpdate = function(changedProps) {
      if (propNameKeys.some((key) => changedProps.has(key))) {
        if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
          const ssr = isSsr();
          if (resolvedOptions.on === "client" && !ssr) {
            this[decoratedFnName](changedProps);
          } else if (resolvedOptions.on === "ssr" && ssr) {
            this[decoratedFnName](changedProps);
          } else if (resolvedOptions.on === "both") {
            this[decoratedFnName](changedProps);
          }
        }
      }
      willUpdate.call(this, changedProps);
    };
  };
}

// src/core/decorators/event-emitter.decorator.ts
var EventEmitter = class {
  constructor(target, eventName) {
    this.target = target;
    try {
      if (eventName?.[0] !== "_") {
        console.error(
          `${target.tagName}: EventEmitter property for "${eventName}" must be prefixed with "_"`
        );
      }
    } catch (e) {
    }
    this.eventName = eventName.replace(/^_/, "");
  }
  /** Dispatches the custom event. If the event is `cancelable` and is prevented this will return false. */
  emit(value, options) {
    if (!isSsr()) {
      return this.target.dispatchEvent(
        new CustomEvent(this.eventName, {
          detail: value,
          bubbles: true,
          cancelable: false,
          composed: true,
          ...options
        })
      );
    } else {
      return true;
    }
  }
};
function legacyEvent(descriptor, protoOrDescriptor, name) {
  Object.defineProperty(protoOrDescriptor, name, descriptor);
}
function standardEvent(descriptor, element) {
  return {
    kind: "method",
    placement: "prototype",
    key: element.key,
    descriptor
  };
}
function eventEmitter() {
  return (protoOrDescriptor, name) => {
    const descriptor = {
      get() {
        return new EventEmitter(this, name !== void 0 ? name : protoOrDescriptor.key);
      },
      enumerable: true,
      configurable: true
    };
    return name !== void 0 ? legacyEvent(descriptor, protoOrDescriptor, name) : standardEvent(descriptor, protoOrDescriptor);
  };
}

// src/core/decorators/define-element.decorator.ts
var defineElement = (tagName) => (classOrTarget, context2) => {
  if (context2 !== void 0) {
    context2.addInitializer(() => {
      if (!customElements.get?.(tagName)) {
        customElements.define(tagName, classOrTarget);
      }
    });
  } else {
    if (!customElements.get?.(tagName)) {
      customElements.define(tagName, classOrTarget);
    }
  }
};

// src/core/mixins/color.mixin.ts
var CoreColorMixin = (superClass) => {
  class ColorElement extends superClass {
  }
  __decorateClass([
    presetProperty({ reflect: true })
  ], ColorElement.prototype, "color", 2);
  return ColorElement;
};
var StatusColorMixin = (superClass) => {
  class ColorElement extends superClass {
  }
  __decorateClass([
    presetProperty({ reflect: true })
  ], ColorElement.prototype, "color", 2);
  return ColorElement;
};

// src/core/mixins/density.mixin.ts
var DensityMixin = (superClass) => {
  class DensityElement extends superClass {
  }
  __decorateClass([
    presetProperty({ reflect: true })
  ], DensityElement.prototype, "density", 2);
  return DensityElement;
};

// src/core/mixins/density.mixin.styles.ts
var import_lit3 = require("lit");
var styles = import_lit3.css`:host([density=compact]){--mte-space-xxs:var(--mte-space-compact-xxs);--mte-space-xs:var(--mte-space-compact-xs);--mte-space-sm:var(--mte-space-compact-sm);--mte-space-md:var(--mte-space-compact-md);--mte-space-lg:var(--mte-space-compact-lg);--mte-space-xl:var(--mte-space-compact-xl);--mte-space-xxl:var(--mte-space-compact-xxl);--mte-space-xxxl:var(--mte-space-compact-xxxl)}:host([density=comfy]){--mte-space-xxs:var(--mte-space-comfy-xxs);--mte-space-xs:var(--mte-space-comfy-xs);--mte-space-sm:var(--mte-space-comfy-sm);--mte-space-md:var(--mte-space-comfy-md);--mte-space-lg:var(--mte-space-comfy-lg);--mte-space-xl:var(--mte-space-comfy-xl);--mte-space-xxl:var(--mte-space-comfy-xxl);--mte-space-xxxl:var(--mte-space-comfy-xxxl)}:host([density=roomy]){--mte-space-xxs:var(--mte-space-roomy-xxs);--mte-space-xs:var(--mte-space-roomy-xs);--mte-space-sm:var(--mte-space-roomy-sm);--mte-space-md:var(--mte-space-roomy-md);--mte-space-lg:var(--mte-space-roomy-lg);--mte-space-xl:var(--mte-space-roomy-xl);--mte-space-xxl:var(--mte-space-roomy-xxl);--mte-space-xxxl:var(--mte-space-roomy-xxxl)}`;

// src/core/mixins/disabled.mixin.ts
var import_decorators4 = require("lit/decorators.js");
var DisabledMixin = (superClass) => {
  class DisabledElement extends superClass {
    constructor() {
      super(...arguments);
      this.disabled = false;
    }
    // Because `ariaDisabled` exists as a string on LitElement we cannot declare this a property here
    willUpdate(_changedProperties) {
      super.willUpdate(_changedProperties);
      if (_changedProperties.has("disabled")) {
        if (this.disabled) {
          this.setAttribute("aria-disabled", `${this.disabled}`);
        } else {
          this.removeAttribute("aria-disabled");
        }
      }
    }
  }
  __decorateClass([
    (0, import_decorators4.property)({ type: Boolean, reflect: true })
  ], DisabledElement.prototype, "disabled", 2);
  return DisabledElement;
};

// src/core/mixins/inverse.mixin.ts
var import_decorators5 = require("lit/decorators.js");
var InverseMixin = (superClass) => {
  class InverseElement extends superClass {
    constructor() {
      super(...arguments);
      this.inverse = false;
      this.withoutInverse = false;
    }
  }
  __decorateClass([
    presetProperty({ type: Boolean, reflect: true })
  ], InverseElement.prototype, "inverse", 2);
  __decorateClass([
    (0, import_decorators5.property)({ type: Boolean, reflect: true })
  ], InverseElement.prototype, "withoutInverse", 2);
  return InverseElement;
};

// src/core/mixins/inverse.mixin.styles.ts
var import_lit4 = require("lit");
var styles2 = import_lit4.css`:host([inverse]:not([withoutInverse])){--mte-surface-1:var(--mte-surface-inverse);--mte-surface-1-rgb:var(--mte-surface-inverse-rgb);--mte-surface-2:var(--mte-surface-inverse);--mte-surface-2-rgb:var(--mte-surface-inverse-rgb);--mte-surface-3:var(--mte-surface-inverse);--mte-surface-3-rgb:var(--mte-surface-inverse-rgb);--mte-surface-4:var(--mte-surface-inverse);--mte-surface-4-rgb:var(--mte-surface-inverse-rgb);--mte-ink-1:var(--mte-white);--mte-ink-1-rgb:var(--mte-white-rgb);--mte-ink-2:var(--mte-white);--mte-ink-2-rgb:var(--mte-white-rgb);--mte-ink-3:var(--mte-white);--mte-ink-3-rgb:var(--mte-white-rgb);--mte-ink-4:var(--mte-black);--mte-ink-4-rgb:var(--mte-black-rgb);--mte-ink-5:var(--mte-black);--mte-ink-5-rgb:var(--mte-black-rgb);--mte-border-1:var(--mte-border-inverse);--mte-border-1-rgb:var(--mte-border-inverse-rgb);--mte-border-2:var(--mte-border-inverse);--mte-border-2-rgb:var(--mte-border-inverse-rgb);--mte-border-3:var(--mte-border-inverse);--mte-border-3-rgb:var(--mte-border-inverse-rgb);--mte-disabled-1:var(--mte-disabled-inverse-1);--mte-disabled-1-rgb:var(--mte-disabled-inverse-1-rgb);--mte-disabled-2:var(--mte-disabled-inverse-2);--mte-disabled-2-rgb:var(--mte-disabled-inverse-2);--mte-disabled-3:var(--mte-disabled-inverse-3);--mte-disabled-3-rgb:var(--mte-disabled-inverse-3-rgb);--mte-disabled-4:var(--mte-disabled-inverse-3);--mte-disabled-4-rgb:var(--mte-disabled-inverse-3-rgb);--mte-it-surface-1-default-rgb:var(--mte-it-surface-inverse-default-rgb);--mte-it-surface-1-default-a:var(--mte-it-surface-inverse-default-a);--mte-it-surface-1-hover-rgb:var(--mte-it-surface-inverse-hover-rgb);--mte-it-surface-1-hover-a:var(--mte-it-surface-inverse-hover-a);--mte-it-surface-1-active-rgb:var(--mte-it-surface-inverse-active-rgb);--mte-it-surface-1-active-a:var(--mte-it-surface-inverse-active-a);--mte-it-surface-2-default-rgb:var(--mte-it-surface-inverse-default-rgb);--mte-it-surface-2-default-a:var(--mte-it-surface-inverse-default-a);--mte-it-surface-2-hover-rgb:var(--mte-it-surface-inverse-hover-rgb);--mte-it-surface-2-hover-a:var(--mte-it-surface-inverse-hover-a);--mte-it-surface-2-active-rgb:var(--mte-it-surface-inverse-active-rgb);--mte-it-surface-2-active-a:var(--mte-it-surface-inverse-active-a);--mte-it-surface-3-default-rgb:var(--mte-it-surface-inverse-default-rgb);--mte-it-surface-3-default-a:var(--mte-it-surface-inverse-default-a);--mte-it-surface-3-hover-rgb:var(--mte-it-surface-inverse-hover-rgb);--mte-it-surface-3-hover-a:var(--mte-it-surface-inverse-hover-a);--mte-it-surface-3-active-rgb:var(--mte-it-surface-inverse-active-rgb);--mte-it-surface-3-active-a:var(--mte-it-surface-inverse-active-a);--mte-light:var(--mte-white);--mte-light-rgb:var(--mte-white-rgb);--mte-dark:var(--mte-black);--mte-dark-rgb:var(--mte-black-rgb);--button-filled-bg:var(--mte-white);--button-filled-ink:var(--mte-black);--button-filled-active-bg:var(--mte-border-inverse);--button-filled-active-ink:var(--mte-white)}`;

// src/core/mixins/size.mixin.ts
var SizeMixin = (superClass) => {
  class SizeElement extends superClass {
  }
  __decorateClass([
    presetProperty({ reflect: true })
  ], SizeElement.prototype, "size", 2);
  return SizeElement;
};

// src/core/mixins/tabindex.mixin.ts
var import_decorators7 = require("lit/decorators.js");
var TabIndexMixin = (superClass, options = { initialTabIndex: void 0 }) => {
  class TabIndexElement extends superClass {
    constructor() {
      super(...arguments);
      this._tabIndex = options?.initialTabIndex;
      this._cachedTabIndex = void 0;
      this._preventNextTabIndexCacheChange = false;
    }
    set tabIndex(tabIndex) {
      if (this.disabled) {
        if (!this._preventNextTabIndexCacheChange) {
          this._cachedTabIndex = tabIndex;
          this._preventNextTabIndexCacheChange = true;
          this.setTabIndexAdapter("-1");
        } else {
          this._preventNextTabIndexCacheChange = false;
        }
      } else {
        this._tabIndex = tabIndex;
        this.setTabIndexAdapter(`${this._tabIndex}`);
      }
    }
    get tabIndex() {
      return this._tabIndex;
    }
    handleTabindexChange(changedProps) {
      if (changedProps.has("disabled")) {
        if (changedProps.get("disabled") === false && this.disabled) {
          this._preventNextTabIndexCacheChange = false;
          this._cachedTabIndex = Number(this.getTabIndexAdapter());
          this._tabIndex = -1;
          this.setTabIndexAdapter("-1", true);
        } else if (changedProps.get("disabled") === true) {
          if (this._cachedTabIndex !== void 0 && this._cachedTabIndex !== null) {
            this._tabIndex = this._cachedTabIndex;
            this.setTabIndexAdapter(`${this._cachedTabIndex}`);
            this._cachedTabIndex = void 0;
          } else {
            this._cachedTabIndex = void 0;
            this.removeTabIndexAdapter();
          }
        }
      }
    }
    /** Override this adapter to retrieve the current tabindex attribute value from a custom target element */
    getTabIndexAdapter() {
      return this.getAttribute("tabindex");
    }
    /** Override this adapter to set the tabindex attribute on a custom target element */
    setTabIndexAdapter(value, shouldPreventTabIndexChangeOnSelf = false) {
      if (shouldPreventTabIndexChangeOnSelf) {
        this._preventNextTabIndexCacheChange = true;
      }
      this.setAttribute("tabindex", value);
    }
    /** Override this adapter to remove the tabindex attribute from a custom target element */
    removeTabIndexAdapter() {
      this.removeAttribute("tabindex");
    }
    willUpdate(changedProperties) {
      super.willUpdate(changedProperties);
      if (isSsr() && this._tabIndex !== void 0) {
        this.setTabIndexAdapter(`${this._tabIndex}`);
      }
    }
    firstUpdated(changedProperties) {
      super.firstUpdated(changedProperties);
      if (this._tabIndex !== void 0) {
        this.setTabIndexAdapter(`${this._tabIndex}`);
      }
    }
  }
  __decorateClass([
    (0, import_decorators7.property)({ attribute: "tabindex", type: Number, noAccessor: true })
  ], TabIndexElement.prototype, "tabIndex", 1);
  __decorateClass([
    onUpdate(["disabled"], { on: "both" })
  ], TabIndexElement.prototype, "handleTabindexChange", 1);
  return TabIndexElement;
};

// src/core/mixins/radius.mixin.ts
var RadiusMixin = (superClass) => {
  class RadiusElement extends superClass {
  }
  __decorateClass([
    presetProperty({ reflect: true })
  ], RadiusElement.prototype, "radius", 2);
  return RadiusElement;
};

// src/core/mixins/style-parts.mixin.ts
var import_decorators8 = require("lit/decorators.js");
var import_styles6 = require("@mortar/styles");
var StylePartsMixin = (superClass) => {
  class StylePartsElement extends superClass {
    updateInstanceStyles(changedProps) {
      super.updateInstanceStyles(changedProps);
      if (changedProps.has("sp")) {
        Object.entries(this.sp ?? {}).forEach(([part, styleMap2]) => {
          const selector = (0, import_styles6.selectorFactory)(
            part === "host" ? ":host:host:host:host:host:host" : `:host:host:host:host:host:host::part(${part})`
          );
          this.setInstanceStyle(`sp-${part}`, selector, styleMap2);
        });
      }
    }
  }
  __decorateClass([
    (0, import_decorators8.property)({ type: Object, reflect: true })
  ], StylePartsElement.prototype, "sp", 2);
  return StylePartsElement;
};

// src/core/mixins/button.mixin.ts
var import_decorators9 = require("lit/decorators.js");
var import_lit5 = require("lit");
var import_form_helpers = require("@open-wc/form-helpers");
var import_if_defined = require("lit-html/directives/if-defined.js");
var ButtonMixin = (superClass) => {
  class ButtonElement extends TabIndexMixin(DisabledMixin(superClass), { initialTabIndex: 0 }) {
    constructor() {
      super();
      this.role = "button";
      this.proxyFocus = this.proxyFocus.bind(this);
      if (!isSsr()) {
        this.addEventListener("click", this.handleClickCapture, {
          capture: true
        });
        this.addEventListener("keydown", this.handleKeydown);
        this.addEventListener("keypress", this.handleKeypress);
        this.addEventListener("pointerdown", this.handlePointerdown);
      }
    }
    handleHrefChange() {
      this.manageRoleChange();
    }
    click() {
      if (this.disabled) {
        return;
      }
      if (this.shouldProxyClick()) {
        return;
      }
      if (!this.shouldSubmit()) {
        super.click();
      }
    }
    connectedCallback() {
      super.connectedCallback();
      this.form = this.closest("form");
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      if (this.anchorElem) {
        this.anchorElem.removeEventListener("focus", this.proxyFocus);
      }
      this.removeActive();
    }
    updated(changed) {
      super.updated(changed);
      if (this.anchorElem) {
        this.anchorElem.addEventListener("focus", this.proxyFocus);
        this.anchorElem.tabIndex = -1;
      }
    }
    /** Updates the role attribute and click proxy behavior when `href` changes */
    manageRoleChange() {
      if (this.href && this.href.length > 0 || this.iref && this.iref.length > 0) {
        if (this.role === "button") {
          this.role = "link";
        }
        if (!isSsr()) {
          this.removeEventListener("click", this.shouldProxyClick);
        }
      } else {
        if (!this.role || this.role === "link") {
          this.role = "button";
        }
        if (!isSsr()) {
          this.addEventListener("click", this.shouldProxyClick);
        }
      }
    }
    /** Determines if a click event should be proxied to the hidden internal anchor */
    shouldProxyClick() {
      let handled = false;
      if (this.anchorElem) {
        this.anchorElem.click();
        handled = true;
      }
      return handled;
    }
    /** Determines if the parent form should be submitted or reset */
    shouldSubmit() {
      if (this.type === "submit" && this.form) {
        (0, import_form_helpers.submit)(this.form);
        return true;
      }
      if (this.type === "reset" && this.form) {
        this.form.reset();
        return true;
      }
      return false;
    }
    /** Intercepts native click events to prevent propagation when disabled */
    handleClickCapture(event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        return false;
      }
      if (!this.href && event.target === this) {
        event.preventDefault();
      }
      this.shouldSubmit();
    }
    proxyFocus() {
      this.focus();
    }
    /** Tracks spacebar presses to properly adjust the active state */
    handleKeydown(event) {
      const { code } = event;
      switch (code) {
        case "Space":
          event.preventDefault();
          if (typeof this.href === "undefined" && typeof this.iref === "undefined") {
            this.addEventListener("keyup", this.handleKeyup);
            this.setActive();
          }
          break;
        default:
          break;
      }
    }
    /** Tracks enter presses to properly simulate a click */
    handleKeypress(event) {
      const { code } = event;
      switch (code) {
        case "Enter":
        case "NumpadEnter":
          this.click();
          break;
        default:
          break;
      }
    }
    /** Tracks spacebar presses to properly adjust the active state */
    handleKeyup(event) {
      const { code } = event;
      switch (code) {
        case "Space":
          this.removeEventListener("keyup", this.handleKeyup);
          this.removeActive();
          this.click();
          break;
        default:
          break;
      }
    }
    setActive() {
      this.setAttribute("activestate", "");
      this.addEventListener("focusout", this.removeActive);
      this.addEventListener("pointerup", this.removeActive);
      this.addEventListener("pointercancel", this.removeActive);
      this.addEventListener("pointerleave", this.removeActive);
    }
    removeActive() {
      this.removeAttribute("activestate");
      this.removeEventListener("focusout", this.removeActive);
      this.removeEventListener("pointerup", this.removeActive);
      this.removeEventListener("pointercancel", this.removeActive);
      this.removeEventListener("pointerleave", this.removeActive);
    }
    handlePointerdown() {
      this.setActive();
    }
    renderAnchor() {
      const href = this.href ?? this.iref;
      return href ? import_lit5.html`<a id="anchor" class="anchor" aria-hidden="true" tabindex="-1" href="${href}" target="${(0, import_if_defined.ifDefined)(this.target)}" download="${(0, import_if_defined.ifDefined)(this.download)}"></a>` : null;
    }
    /** Call this method with the contents of this button */
    renderButtonTemplate(buttonContents) {
      return import_lit5.html`${this.instanceStyles}${buttonContents}${this.renderAnchor()}`;
    }
  }
  __decorateClass([
    (0, import_decorators9.property)({ reflect: true })
  ], ButtonElement.prototype, "name", 2);
  __decorateClass([
    (0, import_decorators9.property)({ reflect: true })
  ], ButtonElement.prototype, "value", 2);
  __decorateClass([
    (0, import_decorators9.property)({ reflect: true })
  ], ButtonElement.prototype, "type", 2);
  __decorateClass([
    (0, import_decorators9.property)({ reflect: true })
  ], ButtonElement.prototype, "href", 2);
  __decorateClass([
    (0, import_decorators9.property)({ reflect: true })
  ], ButtonElement.prototype, "iref", 2);
  __decorateClass([
    (0, import_decorators9.property)({ reflect: true })
  ], ButtonElement.prototype, "target", 2);
  __decorateClass([
    (0, import_decorators9.property)({ reflect: true })
  ], ButtonElement.prototype, "download", 2);
  __decorateClass([
    (0, import_decorators9.property)({ reflect: true })
  ], ButtonElement.prototype, "role", 2);
  __decorateClass([
    (0, import_decorators9.query)("#anchor")
  ], ButtonElement.prototype, "anchorElem", 2);
  __decorateClass([
    onUpdate(["href", "iref"], { on: "both" })
  ], ButtonElement.prototype, "handleHrefChange", 1);
  return ButtonElement;
};

// src/core/mixins/button.mixin.styles.ts
var import_lit6 = require("lit");
var styles3 = import_lit6.css`:host{position:relative}#anchor{inset:0;position:absolute}`;

// src/core/mixins/overlay.mixin.ts
var import_decorators10 = require("lit/decorators.js");
var OverlayMixin = (superClass) => {
  class OverlayElement extends superClass {
    constructor(...args) {
      super(args);
      this.tabindex = -1;
      this.portalAdapter = defaultPortalAdapter;
      /** Whether the overlay element should use a focus trap or not */
      this._withFocusTrap = true;
      /** Whether the overlay element should close when a user clicks outside of the element */
      this._closeOnClickOutside = true;
      /** Whether the element should close when the escape button is pressed */
      this._closeOnEscape = true;
      /** Whether the overlay should use a portal or not */
      this._withPortal = true;
      /** Wether the user should be able to click behind the backdrop or not */
      this._withInertBackdrop = false;
      /** Wether the overlay's backdrop should render dimmed */
      this._withDimBackdrop = false;
      /** Wether or not the element should be re-appended to it's origin parent element on close _if_ portaled. */
      this._returnToOriginOnClose = false;
      /** Whether the overlay should prevent scrolling on the body */
      this._withScrollLock = true;
      this.focusTrapController = new FocusTrapController(this);
      this.clickOutsideController = new ClickOutsideController(this, () => {
        if (!this._withPortal) {
          this.handleCloseOnClickOutside();
        }
      });
      this.portalController = new PortalController(this);
      /**
       * The initial parent element
       */
      this.initialParent = this.getActualParentElement();
      this._focusTrapTarget = this;
      this.opened = false;
      this._readyForAnimation = false;
      this.openedFull = false;
      this.handleCloseOnClickOutside = () => {
        if (this._closeOnClickOutside) {
          this.close();
        }
      };
      this.handleOverlayKeyDown = this.handleOverlayKeyDown.bind(this);
    }
    set readyForAnimation(readyForAnimation) {
      this._readyForAnimation = readyForAnimation;
    }
    get readyForAnimation() {
      return isSsr() ? true : this._readyForAnimation;
    }
    setOverlayOptions(options) {
      const {
        withFocusTrap,
        withCloseOnClickOutside,
        withCloseOnEscape,
        withPortal,
        withScrollLock,
        withInertBackdrop,
        withDimBackdrop,
        backdropTransitionDuration,
        returnToOriginOnClose,
        focusTrapTarget
      } = options ?? {};
      this._withFocusTrap = withFocusTrap ?? this._withFocusTrap;
      this._closeOnClickOutside = withCloseOnClickOutside ?? this._closeOnClickOutside;
      this._withScrollLock = withScrollLock ?? this._withScrollLock;
      this._withPortal = withPortal ?? this._withPortal;
      this._withInertBackdrop = withInertBackdrop ?? !this._withFocusTrap ?? this._withInertBackdrop;
      this._withDimBackdrop = withDimBackdrop ?? this._withDimBackdrop;
      this._backdropTransitionDuration = backdropTransitionDuration ?? this._backdropTransitionDuration;
      this._returnToOriginOnClose = returnToOriginOnClose ?? this._returnToOriginOnClose;
      this._focusTrapTarget = focusTrapTarget ?? this._focusTrapTarget;
      if (withCloseOnEscape !== void 0 && this._closeOnEscape !== withCloseOnEscape) {
        if (withCloseOnEscape === true) {
          document.addEventListener("keydown", this.handleOverlayKeyDown);
        } else {
          document.removeEventListener("keydown", this.handleOverlayKeyDown);
        }
        this._closeOnEscape = withCloseOnEscape ?? this._closeOnEscape;
      }
      if (withFocusTrap === false) {
        this.tabindex = 0;
      }
      if (withFocusTrap === true && this.tabindex !== -1) {
        this.tabindex = -1;
      }
      this.updateOverlay();
    }
    handleOverlayOpen(options) {
      if (this.opened || this.openedFull) {
        return Promise.resolve();
      }
      this.opened = true;
      const { clickOutsideElement, willOpen } = options ?? {};
      willOpen?.();
      return new Promise((resolve) => {
        this.clickOutsideOverlayElement = clickOutsideElement || this;
        this.clickOutsideController.listenForClicksOutsideOf(this.clickOutsideOverlayElement);
        if (this._withPortal) {
          this.portalController.appendToStack(this, {
            withDimBackdrop: this._withDimBackdrop,
            withInertBackdrop: this._withInertBackdrop,
            withScrollLock: this._withScrollLock,
            closeOnClickOutsideHandler: this.handleCloseOnClickOutside,
            backdropTransitionDuration: this._backdropTransitionDuration,
            portalAdapter: this.portalAdapter
          }).then(() => {
            setTimeout(() => {
              this.readyForAnimation = true;
              this.updateComplete.then(() => {
                this._onOpen.emit(null, { bubbles: false });
                resolve();
              });
            }, 20);
          });
        } else {
          if (this._originParent && this.getActualParentElement() && this.getActualParentElement() !== this._originParent) {
            this.portalAdapter(this, this._originParent);
          }
          setTimeout(() => {
            this.readyForAnimation = true;
            this.updateComplete.then(() => {
              this._onOpen.emit(null, { bubbles: false });
              resolve();
            });
          }, 20);
        }
      });
    }
    async handleOverlayOpenEnd() {
      if (!this.opened) {
        return;
      }
      this.openedFull = true;
      if (this._withFocusTrap) {
        this.focusTrapController.trapFocus(this._focusTrapTarget, document.activeElement);
      }
      this._onOpenEnd.emit(null, { bubbles: false });
    }
    async handleOverlayClose() {
      if (!this.opened) {
        return;
      }
      this.opened = false;
      this._onClose.emit(null, { bubbles: false });
      this.clickOutsideOverlayElement = null;
      this.clickOutsideController.stopListening();
      this.focusTrapController.releaseFocus(true);
      this.portalController.hideBackdrop();
    }
    async handleOverlayCloseEnd(options) {
      if (this.opened) {
        return;
      }
      this.openedFull = false;
      this.readyForAnimation = false;
      this.portalController.removeFromStack(options?.removeFromElement || this);
      if (this._returnToOriginOnClose) {
        if (this._originParent && this._originParent !== this.getActualParentElement()) {
          this.portalAdapter(this, this._originParent);
        }
      }
      this._onCloseEnd.emit(null, { bubbles: false });
    }
    handleOverlayKeyDown(e) {
      if (e.key === "Escape") {
        this.close();
      }
    }
    getActualParentElement() {
      return this.parentElement?.hasAttribute("data-overlay-wrapper") ? this.parentElement?.parentElement : this.parentElement;
    }
    /**
     * Updates the parent element this overlay will be reattached to either:
     * - When configured to do so on close
     * - When "portaling" is disabled
     */
    setOriginParent(newOrigin) {
      const currentParentElement = this.getActualParentElement();
      if (currentParentElement === this._originParent) {
        this.portalAdapter(this, newOrigin);
      }
      this._originParent = newOrigin;
    }
    /** Updates various behaviors to apply the latest overlay options */
    updateOverlay() {
      if (this._withInertBackdrop) {
        this.portalController.setBackdropInertness(true);
      } else {
        this.portalController.setBackdropInertness(false);
      }
      if (this._closeOnClickOutside && !this.clickOutsideController.isListening()) {
        this.clickOutsideController.listenForClicksOutsideOf(this);
      } else if (!this._closeOnClickOutside && this.clickOutsideController.isListening()) {
        this.clickOutsideController.stopListening();
      }
      if (this._withFocusTrap && this.opened && !this.focusTrapController.isTrappingFocus()) {
        this.focusTrapController.trapFocus(this._focusTrapTarget, document.activeElement);
      } else if (!this._withFocusTrap && this.focusTrapController.isTrappingFocus()) {
        this.focusTrapController.releaseFocus(true);
      }
      if (this._withDimBackdrop) {
        this.portalController.showBackdrop();
      } else {
        this.portalController.hideBackdrop();
      }
      if (this._returnToOriginOnClose) {
        if (this._originParent && this._originParent !== this.getActualParentElement()) {
          this.portalAdapter(this, this._originParent);
        }
      }
    }
    async open() {
      throw new Error("Open method not implemented");
    }
    async close() {
      throw new Error("Close method not implemented");
    }
    firstUpdated(changedProperties) {
      super.firstUpdated(changedProperties);
      this._originParent = this.getActualParentElement();
    }
    connectedCallback() {
      super.connectedCallback();
      if (this._closeOnEscape) {
        document.addEventListener("keydown", this.handleOverlayKeyDown);
      }
      if (this.clickOutsideOverlayElement) {
        this.clickOutsideController.listenForClicksOutsideOf(this.clickOutsideOverlayElement);
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.focusTrapController.releaseFocus(true);
      document.removeEventListener("keydown", this.handleOverlayKeyDown);
    }
  }
  __decorateClass([
    (0, import_decorators10.property)({ attribute: "tabindex", type: Number })
  ], OverlayElement.prototype, "tabindex", 2);
  __decorateClass([
    (0, import_decorators10.property)()
  ], OverlayElement.prototype, "portalAdapter", 2);
  __decorateClass([
    eventEmitter()
  ], OverlayElement.prototype, "_onOpen", 2);
  __decorateClass([
    eventEmitter()
  ], OverlayElement.prototype, "_onOpenEnd", 2);
  __decorateClass([
    eventEmitter()
  ], OverlayElement.prototype, "_onClose", 2);
  __decorateClass([
    eventEmitter()
  ], OverlayElement.prototype, "_onCloseEnd", 2);
  __decorateClass([
    (0, import_decorators10.property)({ type: Boolean, reflect: true })
  ], OverlayElement.prototype, "opened", 2);
  __decorateClass([
    (0, import_decorators10.state)()
  ], OverlayElement.prototype, "readyForAnimation", 1);
  __decorateClass([
    (0, import_decorators10.property)({ type: Boolean, reflect: true })
  ], OverlayElement.prototype, "openedFull", 2);
  return OverlayElement;
};

// src/core/mixins/overlay.mixin.styles.ts
var import_lit7 = require("lit");
var styles4 = import_lit7.css`:host{display:block;pointer-events:none;position:absolute;z-index:1000}`;

// src/core/mixins/fieldset.mixin.ts
var import_if_defined2 = require("lit-html/directives/if-defined.js");
var import_class_map = require("lit/directives/class-map.js");
var import_lit8 = require("lit");
var import_decorators11 = require("lit/decorators.js");
var import_styles7 = require("@mortar/styles");
var import_resize_controller = require("@lit-labs/observers/resize-controller.js");

// src/core/mixins/fieldset.mixin.styles.ts
var import_lit9 = require("lit");
var styles5 = import_lit9.css`:host{--full-width:max-content;--control-width:unset;--control-min-width:240px;--control-max-width:var(--control-width);--control-margin-y:var(--mte-space-sm);--control-margin-x:var(--mte-space-sm);--control-descriptor-margin:var(--mte-space-sm);--label-width:var(--control-width);--label-min-width:var(--control-min-width);--label-max-width:var(--control-max-width);--label-margin-y:var(--mte-space-xs);display:inline-block;width:var(--full-width)}.grid-container{display:inline-grid;grid-template-areas:"label" "control";grid-template-rows:1fr minmax(0,100%);width:inherit}:host([withFullWidth]){--full-width:100%;--control-width:100%}:host([withoutMargin]){--control-margin-y:0px}:host([withoutMargin]) .label-container.has-content{margin-bottom:var(--control-descriptor-margin)}.label-container{display:none;grid-area:label;max-width:var(--label-max-width);min-width:var(--label-min-width);width:var(--label-width)}.label-container.has-content{display:block;margin-top:var(--label-margin-y)}.label-container:not(.has-content){margin:0!important}.context{grid-area:context}.description,.error,.hint,.label{display:block}.description mte-description,.description mte-description-text,.label mte-label,.label mte-label-text,:host ::slotted(mte-description-text[slot=description]),:host ::slotted(mte-description[slot=description]),:host ::slotted(mte-label-text[slot=label]),:host ::slotted(mte-label[slot=label]){margin:0}:host([labelPosition=before]){--label-width:max-content;--label-min-width:max-content}:host([labelPosition=before]) .grid-container{grid-template-areas:"label control";grid-template-columns:minmax(auto,var(--label-width)) minmax(auto,var(--control-width))}:host([labelPosition=before]) .label-container{margin-bottom:var(--control-margin-y);margin-right:var(--control-margin-x);margin-top:calc(var(--control-margin-y) + var(--label-before-offset))}.description,.error,.hint{min-width:100%;width:-moz-min-content;width:min-content}.control-outer-container{grid-area:control;margin-top:var(--control-margin-y);max-width:var(--control-max-width);min-width:var(--control-min-width);width:var(--control-width)}:host(:not([labelPosition=before])) .control-outer-container.has-label-content{margin-top:calc(var(--control-margin-y)/2)}.control-container{display:flex;flex-direction:column;margin-bottom:var(--control-margin-y)}.error,.hint{display:none}.error.has-content,.hint.has-content{display:block;margin-top:var(--control-descriptor-margin)}`;

// src/core/mixins/form-field.mixin.ts
var import_class_map2 = require("lit/directives/class-map.js");
var import_lit10 = require("lit");
var import_decorators13 = require("lit/decorators.js");

// src/core/mixins/form-field.mixin.styles.ts
var import_lit11 = require("lit");
var styles6 = import_lit11.css`:host{--form-field-internal-padding:var(--mte-space-sm);--form-field-internal-gap:var(--mte-space-sm);--form-field-radius:var(--mte-border-radius-md);--form-field-border-color:var(--mte-border-2);--form-field-background:var(--mte-surface-2);--prepend-background:var(--mte-grey-1);--prepend-padding-x:var(--mte-space-sm);--prepend-border-color:var(--mte-border-2)}:host([radius=sm]){--form-field-radius:var(--mte-border-radius-xs)}:host([radius=lg]){--form-field-radius:var(--mte-border-radius-xxl)}:host([size=sm]){--prepend-padding-x:calc(var(--mte-space-xs) + var(--mte-space-xxs));--form-field-internal-padding:calc(var(--mte-space-xs) + var(--mte-space-xxs));--form-field-internal-gap:calc(var(--mte-space-xs) + var(--mte-space-xxs))}:host([size=lg]){--prepend-padding-x:calc(var(--mte-space-sm) + var(--mte-space-xs));--form-field-internal-padding:calc(var(--mte-space-sm) + var(--mte-space-xs));--form-field-internal-gap:calc(var(--mte-space-sm) + var(--mte-space-xs))}.form-field{align-items:center;background:var(--form-field-background);border:1px solid var(--form-field-border-color);border-radius:var(--form-field-radius);display:flex;flex-direction:row;gap:var(--form-field-internal-gap);position:relative}:host([disabled]) .form-field{background:var(--mte-disabled-1);border:1px solid var(--mte-disabled-1)}.append,.prepend{align-items:center;align-self:stretch;background:var(--prepend-background);display:none;font-size:var(--font-size);justify-content:center;padding:0 var(--prepend-padding-x)}.prepend{border-bottom-left-radius:var(--form-field-radius);border-right:1px solid var(--prepend-border-color);border-top-left-radius:var(--form-field-radius)}.append{border-bottom-right-radius:var(--form-field-radius);border-left:1px solid var(--prepend-border-color);border-top-right-radius:var(--form-field-radius)}.append.has-content,.prepend.has-content{display:flex}.prefix,.suffix{align-items:center;align-self:stretch;display:flex;font-size:var(--font-size);justify-content:center}.prefix:not(.has-prepend){padding-left:var(--prepend-padding-x)}.suffix:not(.has-append){padding-right:var(--prepend-padding-x)}.form-field.focused:not(.disabled):not([disabled]):not(:disabled):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--form-field-radius);border-bottom-right-radius:var(--form-field-radius);border-top-left-radius:var(--form-field-radius);border-top-right-radius:var(--form-field-radius);bottom:-1px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-1px;pointer-events:none;position:absolute;right:-1px;top:-1px;z-index:9}.form-field.invalid{--form-field-border-color:rgb(var(--mte-core-danger-base-rgb))}:host([withoutBorder]) :is(.form-field,.prepend,.append){--form-field-border-color:transparent}`;

// src/core/mixins/auto-active-link.mixin.ts
var import_decorators14 = require("lit/decorators.js");
var AutoActiveLinkMixin = (superClass) => {
  class AutoActiveLinkElement extends superClass {
    constructor() {
      super(...arguments);
      this.active = false;
      this.withoutAutoActive = false;
      this.handleUrlChange = () => {
        this.active = isLinkActive(
          this.anchorElement?.href,
          window.location.href,
          this.activeLinkOptions
        );
      };
    }
    handleActiveLinkChange() {
      if (this.active) {
        this.anchorElement?.setAttribute("aria-current", "page");
      } else {
        this.anchorElement?.removeAttribute("aria-current");
      }
    }
    handleAutoActiveChange() {
      if (this.href || this["iref"]) {
        if (this.withoutAutoActive) {
          this.removeListener();
          this.active = false;
        } else {
          this.addListener();
          this.handleUrlChange();
        }
      }
    }
    connectedCallback() {
      super.connectedCallback();
      this.updateComplete.then(() => {
        this.handleAutoActiveChange();
      });
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeListener();
    }
    addListener() {
      if (!this.unsub) {
        this.unsub = MteHistoryApiService.stateChanges().subscribe(() => {
          this.handleUrlChange();
        });
      }
    }
    removeListener() {
      this.unsub?.();
      this.unsub = null;
    }
  }
  __decorateClass([
    (0, import_decorators14.property)({ type: Boolean, reflect: true })
  ], AutoActiveLinkElement.prototype, "active", 2);
  __decorateClass([
    (0, import_decorators14.property)({ type: Boolean, reflect: true })
  ], AutoActiveLinkElement.prototype, "withoutAutoActive", 2);
  __decorateClass([
    (0, import_decorators14.property)({ type: Object, reflect: true })
  ], AutoActiveLinkElement.prototype, "activeLinkOptions", 2);
  __decorateClass([
    onUpdate("active", { waitUntilFirstUpdate: true })
  ], AutoActiveLinkElement.prototype, "handleActiveLinkChange", 1);
  __decorateClass([
    onUpdate(["href", "iref", "withAutoActive"], { waitUntilFirstUpdate: true })
  ], AutoActiveLinkElement.prototype, "handleAutoActiveChange", 1);
  return AutoActiveLinkElement;
};

// src/core/mixins/slot-observer.mixin.ts
var import_decorators15 = require("lit/decorators.js");
var SlotObserverMixin = (superClass) => {
  class SlotObserverElement extends superClass {
    constructor() {
      super(...arguments);
      /** @ignore */
      this._ssrSlotSet = /* @__PURE__ */ new Set();
      this.slotController = new SlotController(this);
    }
    set ssrSlots(val) {
      let oldVal = this._ssrSlots;
      this._ssrSlots = val;
      const slots = (this._ssrSlots ?? "").trim().split(" ").map((slot) => slot.trim());
      this._ssrSlotSet = new Set(slots);
      this.requestUpdate("ssrSlots", oldVal);
    }
    get ssrSlots() {
      return this._ssrSlots;
    }
    /**
     * Returns true if the given slot has content, or if it was specified as existing during SSR.
     * Once called, the component will now automatically update if the contents of this slot change.
     */
    hasSlot(slot, orValue) {
      this.slotController.updateOnChange(slot);
      if (!this.__firstUpdated) {
        return orValue || this.ssrSlotCheck(slot);
      } else {
        return orValue || this.slotController.check(slot);
      }
    }
    /** Will return true if the requested slot was specified in the list of `ssr-slots`. */
    ssrSlotCheck(slot) {
      if (this.__firstUpdated) {
        return false;
      } else {
        return this._ssrSlotSet.has(slot);
      }
    }
  }
  __decorateClass([
    (0, import_decorators15.property)({ reflect: true })
  ], SlotObserverElement.prototype, "ssrSlots", 1);
  return SlotObserverElement;
};

// src/core/mixins/checkbox.mixin.ts
var import_form_control = require("@open-wc/form-control");
var import_decorators16 = require("lit/decorators.js");

// src/core/polyfills/element-internals/maps.ts
var refMap = /* @__PURE__ */ new WeakMap();
var validityMap = /* @__PURE__ */ new WeakMap();
var hiddenInputMap = /* @__PURE__ */ new WeakMap();
var internalsMap = /* @__PURE__ */ new WeakMap();
var validationMessageMap = /* @__PURE__ */ new WeakMap();
var formsMap = /* @__PURE__ */ new WeakMap();
var shadowHostsMap = /* @__PURE__ */ new WeakMap();
var formElementsMap = /* @__PURE__ */ new WeakMap();
var refValueMap = /* @__PURE__ */ new WeakMap();
var upgradeMap = /* @__PURE__ */ new WeakMap();
var shadowRootMap = /* @__PURE__ */ new WeakMap();
var validationAnchorMap = /* @__PURE__ */ new WeakMap();
var documentFragmentMap = /* @__PURE__ */ new WeakMap();
var connectedCallbackMap = /* @__PURE__ */ new WeakMap();
var validityUpgradeMap = /* @__PURE__ */ new WeakMap();

// src/core/polyfills/element-internals/aom.ts
var aom = {
  ariaAtomic: "aria-atomic",
  ariaAutoComplete: "aria-autocomplete",
  ariaBusy: "aria-busy",
  ariaChecked: "aria-checked",
  ariaColCount: "aria-colcount",
  ariaColIndex: "aria-colindex",
  ariaColIndexText: "aria-colindextext",
  ariaColSpan: "aria-colspan",
  ariaCurrent: "aria-current",
  ariaDisabled: "aria-disabled",
  ariaExpanded: "aria-expanded",
  ariaHasPopup: "aria-haspopup",
  ariaHidden: "aria-hidden",
  ariaInvalid: "aria-invalid",
  ariaKeyShortcuts: "aria-keyshortcuts",
  ariaLabel: "aria-label",
  ariaLevel: "aria-level",
  ariaLive: "aria-live",
  ariaModal: "aria-modal",
  ariaMultiLine: "aria-multiline",
  ariaMultiSelectable: "aria-multiselectable",
  ariaOrientation: "aria-orientation",
  ariaPlaceholder: "aria-placeholder",
  ariaPosInSet: "aria-posinset",
  ariaPressed: "aria-pressed",
  ariaReadOnly: "aria-readonly",
  ariaRelevant: "aria-relevant",
  ariaRequired: "aria-required",
  ariaRoleDescription: "aria-roledescription",
  ariaRowCount: "aria-rowcount",
  ariaRowIndex: "aria-rowindex",
  ariaRowIndexText: "aria-rowindextext",
  ariaRowSpan: "aria-rowspan",
  ariaSelected: "aria-selected",
  ariaSetSize: "aria-setsize",
  ariaSort: "aria-sort",
  ariaValueMax: "aria-valuemax",
  ariaValueMin: "aria-valuemin",
  ariaValueNow: "aria-valuenow",
  ariaValueText: "aria-valuetext",
  role: "role"
};
var initAom = (ref, internals) => {
  for (let key in aom) {
    internals[key] = null;
    let closureValue = null;
    const attributeName = aom[key];
    Object.defineProperty(internals, key, {
      get() {
        return closureValue;
      },
      set(value) {
        closureValue = value;
        if (ref.isConnected) {
          ref.setAttribute(attributeName, value);
        } else {
          upgradeMap.set(ref, internals);
        }
      }
    });
  }
};

// src/core/polyfills/element-internals/mutation-observers.ts
function initNode(node) {
  const internals = internalsMap.get(node);
  const { form } = internals;
  initForm(node, form, internals);
  initLabels(node, internals.labels);
}
var walkFieldset = (node, firstRender = false) => {
  const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT, {
    acceptNode(node2) {
      return internalsMap.has(node2) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  let current = walker.nextNode();
  const isCallNecessary = !firstRender || node.disabled;
  while (current) {
    if (current.formDisabledCallback && isCallNecessary) {
      setDisabled(current, node.disabled);
    }
    current = walker.nextNode();
  }
};
var disabledOrNameObserverConfig = {
  attributes: true,
  attributeFilter: ["disabled", "name"]
};
var disabledOrNameObserver = mutationObserverExists() ? new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    const target = mutation.target;
    if (mutation.attributeName === "disabled") {
      if (target.constructor["formAssociated"]) {
        setDisabled(target, target.hasAttribute("disabled"));
      } else if (target.localName === "fieldset") {
        walkFieldset(target);
      }
    }
    if (mutation.attributeName === "name") {
      if (target.constructor["formAssociated"]) {
        const internals = internalsMap.get(target);
        const value = refValueMap.get(target);
        internals.setFormValue(value);
      }
    }
  }
}) : {};
function observerCallback(mutationList) {
  mutationList.forEach((mutationRecord) => {
    const { addedNodes, removedNodes } = mutationRecord;
    const added = Array.from(addedNodes);
    const removed = Array.from(removedNodes);
    added.forEach((node) => {
      if (internalsMap.has(node) && node.constructor["formAssociated"]) {
        initNode(node);
      }
      if (upgradeMap.has(node)) {
        const internals = upgradeMap.get(node);
        const aomKeys = Object.keys(aom);
        aomKeys.filter((key) => internals[key] !== null).forEach((key) => {
          node.setAttribute(aom[key], internals[key]);
        });
        upgradeMap.delete(node);
      }
      if (validityUpgradeMap.has(node)) {
        const internals = validityUpgradeMap.get(node);
        node.setAttribute("internals-valid", internals.validity.valid.toString());
        node.setAttribute("internals-invalid", (!internals.validity.valid).toString());
        node.setAttribute("aria-invalid", (!internals.validity.valid).toString());
        validityUpgradeMap.delete(node);
      }
      if (node.localName === "form") {
        const formElements = formElementsMap.get(node);
        const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT, {
          acceptNode(node2) {
            return internalsMap.has(node2) && !(formElements && formElements.has(node2)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
          }
        });
        let current = walker.nextNode();
        while (current) {
          initNode(current);
          current = walker.nextNode();
        }
      }
      if (node.localName === "fieldset") {
        disabledOrNameObserver.observe?.(node, disabledOrNameObserverConfig);
        walkFieldset(node, true);
      }
    });
    removed.forEach((node) => {
      const internals = internalsMap.get(node);
      if (internals && hiddenInputMap.get(internals)) {
        removeHiddenInputs(internals);
      }
      if (shadowHostsMap.has(node)) {
        const observer2 = shadowHostsMap.get(node);
        observer2.disconnect();
      }
    });
  });
}
function fragmentObserverCallback(mutationList) {
  mutationList.forEach((mutation) => {
    const { removedNodes } = mutation;
    removedNodes.forEach((node) => {
      const observer2 = documentFragmentMap.get(mutation.target);
      if (internalsMap.has(node)) {
        upgradeInternals(node);
      }
      observer2.disconnect();
    });
  });
}
var deferUpgrade = (fragment) => {
  const observer2 = new MutationObserver(fragmentObserverCallback);
  observer2.observe?.(fragment, { childList: true });
  documentFragmentMap.set(fragment, observer2);
};
var observer = mutationObserverExists() ? new MutationObserver(observerCallback) : {};
var observerConfig = {
  childList: true,
  subtree: true
};

// src/core/polyfills/element-internals/utils.ts
var setDisabled = (ref, disabled) => {
  ref.toggleAttribute("internals-disabled", disabled);
  if (disabled) {
    ref.setAttribute("aria-disabled", "true");
  } else {
    ref.removeAttribute("aria-disabled");
  }
  if (ref.formDisabledCallback) {
    ref.formDisabledCallback.apply(ref, [disabled]);
  }
};
var removeHiddenInputs = (internals) => {
  const hiddenInputs = hiddenInputMap.get(internals);
  hiddenInputs.forEach((hiddenInput) => {
    hiddenInput.remove();
  });
  hiddenInputMap.set(internals, []);
};
var createHiddenInput = (ref, internals) => {
  const input = document.createElement("input");
  input.type = "hidden";
  input.name = ref.getAttribute("name");
  ref.after(input);
  hiddenInputMap.get(internals).push(input);
  return input;
};
var initRef = (ref, internals) => {
  hiddenInputMap.set(internals, []);
  disabledOrNameObserver.observe?.(ref, disabledOrNameObserverConfig);
};
var initLabels = (ref, labels) => {
  if (labels.length) {
    Array.from(labels).forEach((label) => label.addEventListener("click", ref.click.bind(ref)));
    let firstLabelId = labels[0].id;
    if (!labels[0].id) {
      firstLabelId = `${labels[0].htmlFor}_Label`;
      labels[0].id = firstLabelId;
    }
    ref.setAttribute("aria-labelledby", firstLabelId);
  }
};
var setFormValidity = (form) => {
  const nativeControlValidity = Array.from(form.elements).filter(
    (element) => !element.tagName.includes("-") && element.validity
  ).map((element) => element.validity.valid);
  const polyfilledElements = formElementsMap.get(form) || [];
  const polyfilledValidity = Array.from(polyfilledElements).filter((control) => control.isConnected).map((control) => internalsMap.get(control).validity.valid);
  const hasInvalid = [...nativeControlValidity, ...polyfilledValidity].includes(false);
  form.toggleAttribute("internals-invalid", hasInvalid);
  form.toggleAttribute("internals-valid", !hasInvalid);
};
var formInputCallback = (event) => {
  setFormValidity(findParentForm(event.target));
};
var formChangeCallback = (event) => {
  setFormValidity(findParentForm(event.target));
};
var wireSubmitLogic = (form) => {
  const SUBMIT_BUTTON_SELECTOR = ":is(button[type=submit], input[type=submit], button:not([type])):not([disabled])";
  let submitButtonSelector = `${SUBMIT_BUTTON_SELECTOR}:not([form])`;
  if (form.id) {
    submitButtonSelector += `,${SUBMIT_BUTTON_SELECTOR}[form='${form.id}']`;
  }
  form.addEventListener("click", (event) => {
    const target = event.target;
    if (target.closest(submitButtonSelector)) {
      const elements = formElementsMap.get(form);
      if (form.noValidate) {
        return;
      }
      if (elements.size) {
        const nodes = Array.from(elements);
        const validityList = nodes.reverse().map((node) => {
          const internals = internalsMap.get(node);
          return internals.reportValidity();
        });
        if (validityList.includes(false)) {
          event.preventDefault();
        }
      }
    }
  });
};
var formResetCallback = (event) => {
  const elements = formElementsMap.get(event.target);
  if (elements && elements.size) {
    elements.forEach((element) => {
      if (element.constructor.formAssociated && element.formResetCallback) {
        element.formResetCallback.apply(element);
      }
    });
  }
};
var initForm = (ref, form, internals) => {
  if (form) {
    const formElements = formElementsMap.get(form);
    if (formElements) {
      formElements.add(ref);
    } else {
      const initSet = /* @__PURE__ */ new Set();
      initSet.add(ref);
      formElementsMap.set(form, initSet);
      wireSubmitLogic(form);
      form.addEventListener("reset", formResetCallback);
      form.addEventListener("input", formInputCallback);
      form.addEventListener("change", formChangeCallback);
    }
    formsMap.set(form, { ref, internals });
    if (ref.constructor["formAssociated"] && ref.formAssociatedCallback) {
      setTimeout(() => {
        ref.formAssociatedCallback.apply(ref, [form]);
      }, 0);
    }
    setFormValidity(form);
  }
};
var findParentForm = (elem) => {
  let parent = elem.parentNode;
  if (parent && parent.tagName !== "FORM") {
    parent = findParentForm(parent);
  }
  return parent;
};
var throwIfNotFormAssociated = (ref, message, ErrorType = DOMException) => {
  if (!ref.constructor["formAssociated"]) {
    throw new ErrorType(message);
  }
};
var overrideFormMethod = (form, returnValue, method) => {
  const elements = formElementsMap.get(form);
  if (elements && elements.size) {
    elements.forEach((element) => {
      const internals = internalsMap.get(element);
      const valid = internals[method]();
      if (!valid) {
        returnValue = false;
      }
    });
  }
  return returnValue;
};
var upgradeInternals = (ref) => {
  if (ref.constructor["formAssociated"]) {
    const internals = internalsMap.get(ref);
    const { labels, form } = internals;
    initLabels(ref, labels);
    initForm(ref, form, internals);
  }
};
function mutationObserverExists() {
  return typeof MutationObserver !== "undefined";
}

// src/core/polyfills/element-internals/ValidityState.ts
var ValidityState = class {
  constructor() {
    this.badInput = false;
    this.customError = false;
    this.patternMismatch = false;
    this.rangeOverflow = false;
    this.rangeUnderflow = false;
    this.stepMismatch = false;
    this.tooLong = false;
    this.tooShort = false;
    this.typeMismatch = false;
    this.valid = true;
    this.valueMissing = false;
    Object.seal(this);
  }
};
var setValid = (validityObject) => {
  validityObject.badInput = false;
  validityObject.customError = false;
  validityObject.patternMismatch = false;
  validityObject.rangeOverflow = false;
  validityObject.rangeUnderflow = false;
  validityObject.stepMismatch = false;
  validityObject.tooLong = false;
  validityObject.tooShort = false;
  validityObject.typeMismatch = false;
  validityObject.valid = true;
  validityObject.valueMissing = false;
  return validityObject;
};
var reconcileValidity = (validityObject, newState, form) => {
  validityObject.valid = isValid(newState);
  Object.keys(newState).forEach((key) => validityObject[key] = newState[key]);
  if (form) {
    setFormValidity(form);
  }
  return validityObject;
};
var isValid = (validityState) => {
  let valid = true;
  for (let key in validityState) {
    if (key !== "valid" && validityState[key] !== false) {
      valid = false;
    }
  }
  return valid;
};

// src/core/polyfills/element-internals/CustomStateSet.ts
var customStateMap = /* @__PURE__ */ new WeakMap();
function addState(ref, stateName) {
  ref.toggleAttribute(stateName, true);
  if (ref.part) {
    ref.part.add(stateName);
  }
}
var CustomStateSet = class extends Set {
  static get isPolyfilled() {
    return true;
  }
  constructor(ref) {
    super();
    if (!ref || !ref.tagName || ref.tagName.indexOf("-") === -1) {
      throw new TypeError("Illegal constructor");
    }
    customStateMap.set(this, ref);
  }
  add(state14) {
    if (!/^--/.test(state14) || typeof state14 !== "string") {
      throw new DOMException(
        `Failed to execute 'add' on 'CustomStateSet': The specified value ${state14} must start with '--'.`
      );
    }
    const result = super.add(state14);
    const ref = customStateMap.get(this);
    const stateName = `state${state14}`;
    if (ref.isConnected) {
      addState(ref, stateName);
    } else {
      setTimeout(() => {
        addState(ref, stateName);
      });
    }
    return result;
  }
  clear() {
    for (let [entry] of this.entries()) {
      this.delete(entry);
    }
    super.clear();
  }
  delete(state14) {
    const result = super.delete(state14);
    const ref = customStateMap.get(this);
    if (ref.isConnected) {
      ref.toggleAttribute(`state${state14}`, false);
      if (ref.part) {
        ref.part.remove(`state${state14}`);
      }
    } else {
      setTimeout(() => {
        ref.toggleAttribute(`state${state14}`, false);
        if (ref.part) {
          ref.part.remove(`state${state14}`);
        }
      });
    }
    return result;
  }
};

// src/core/polyfills/element-internals/HTMLFormControlsCollection.ts
var HTMLFormControlsCollection = class {
  #elements;
  constructor(elements) {
    this.#elements = elements;
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      this[i] = element;
      if (element.hasAttribute("name")) {
        this[element.getAttribute("name")] = element;
      }
    }
    Object.freeze(this);
  }
  get length() {
    return this.#elements.length;
  }
  [Symbol.iterator]() {
    return this.#elements[Symbol.iterator]();
  }
  item(i) {
    return this[i] == null ? null : this[i];
  }
  namedItem(name) {
    return this[name] == null ? null : this[name];
  }
};

// src/core/polyfills/element-internals/patch-form-prototype.ts
function patchFormPrototype() {
  const checkValidity = HTMLFormElement.prototype.checkValidity;
  HTMLFormElement.prototype.checkValidity = checkValidityOverride;
  const reportValidity = HTMLFormElement.prototype.reportValidity;
  HTMLFormElement.prototype.reportValidity = reportValidityOverride;
  function checkValidityOverride(...args) {
    let returnValue = checkValidity.apply(this, args);
    return overrideFormMethod(this, returnValue, "checkValidity");
  }
  function reportValidityOverride(...args) {
    let returnValue = reportValidity.apply(this, args);
    return overrideFormMethod(this, returnValue, "reportValidity");
  }
  const { get } = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, "elements");
  Object.defineProperty(HTMLFormElement.prototype, "elements", {
    get(...args) {
      const elements = get.call(this, ...args);
      const polyfilledElements = Array.from(formElementsMap.get(this) || []);
      if (polyfilledElements.length === 0) {
        return elements;
      }
      const orderedElements = Array.from(elements).concat(polyfilledElements).sort((a, b) => {
        if (a.compareDocumentPosition) {
          return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        }
        return 0;
      });
      return new HTMLFormControlsCollection(orderedElements);
    }
  });
}

// src/core/polyfills/element-internals/element-internals.ts
var import_is_server2 = require("lit-html/is-server.js");
var ElementInternals = class {
  static get isPolyfilled() {
    return true;
  }
  constructor(ref) {
    if (!ref || !ref.tagName || ref.tagName.indexOf("-") === -1) {
      throw new TypeError("Illegal constructor");
    }
    const rootNode = ref.getRootNode();
    const validity = new ValidityState();
    this.states = new CustomStateSet(ref);
    refMap.set(this, ref);
    validityMap.set(this, validity);
    internalsMap.set(ref, this);
    initAom(ref, this);
    initRef(ref, this);
    Object.seal(this);
    if (rootNode instanceof DocumentFragment) {
      deferUpgrade(rootNode);
    }
  }
  /**
   * Will return true if the element is in a valid state
   */
  checkValidity() {
    const ref = refMap.get(this);
    throwIfNotFormAssociated(
      ref,
      `Failed to execute 'checkValidity' on 'ElementInternals': The target element is not a form-associated custom element.`
    );
    if (!this.willValidate) {
      return true;
    }
    const validity = validityMap.get(this);
    if (!validity.valid) {
      const validityEvent = new Event("invalid", {
        bubbles: false,
        cancelable: true,
        composed: false
      });
      ref.dispatchEvent(validityEvent);
    }
    return validity.valid;
  }
  /** The form element the custom element is associated with */
  get form() {
    const ref = refMap.get(this);
    throwIfNotFormAssociated(
      ref,
      `Failed to read the 'form' property from 'ElementInternals': The target element is not a form-associated custom element.`
    );
    let form;
    if (ref.constructor["formAssociated"] === true) {
      form = findParentForm(ref);
    }
    return form;
  }
  /** A list of all relative form labels for this element */
  get labels() {
    const ref = refMap.get(this);
    throwIfNotFormAssociated(
      ref,
      `Failed to read the 'labels' property from 'ElementInternals': The target element is not a form-associated custom element.`
    );
    const id = ref.getAttribute("id");
    const hostRoot = ref.getRootNode();
    if (hostRoot && id) {
      return hostRoot.querySelectorAll(`[for="${id}"]`);
    }
    return [];
  }
  /** Will report the elements validity state */
  reportValidity() {
    const ref = refMap.get(this);
    throwIfNotFormAssociated(
      ref,
      `Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element.`
    );
    if (!this.willValidate) {
      return true;
    }
    const valid = this.checkValidity();
    const anchor = validationAnchorMap.get(this);
    if (anchor && !ref.constructor["formAssociated"]) {
      throw new DOMException(
        `Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element.`
      );
    }
    if (!valid && anchor) {
      ref.focus();
      anchor.focus();
    }
    return valid;
  }
  /** Sets the element's value within the form */
  setFormValue(value) {
    const ref = refMap.get(this);
    throwIfNotFormAssociated(
      ref,
      `Failed to execute 'setFormValue' on 'ElementInternals': The target element is not a form-associated custom element.`
    );
    removeHiddenInputs(this);
    if (value != null && !(value instanceof FormData)) {
      if (ref.getAttribute("name")) {
        const hiddenInput = createHiddenInput(ref, this);
        hiddenInput.value = value;
      }
    } else if (value != null && value instanceof FormData) {
      Array.from(value).reverse().forEach(([formDataKey, formDataValue]) => {
        if (typeof formDataValue === "string") {
          const hiddenInput = createHiddenInput(ref, this);
          hiddenInput.name = formDataKey;
          hiddenInput.value = formDataValue;
        }
      });
    }
    refValueMap.set(ref, value);
  }
  /**
   * Sets the element's validity. The first argument is a partial ValidityState object
   * reflecting the changes to be made to the element's validity. If the element is invalid,
   * the second argument sets the element's validation message.
   *
   * If the field is valid and a message is specified, the method will throw a TypeError.
   */
  setValidity(validityChanges, validationMessage, anchor) {
    const ref = refMap.get(this);
    throwIfNotFormAssociated(
      ref,
      `Failed to execute 'setValidity' on 'ElementInternals': The target element is not a form-associated custom element.`
    );
    if (!validityChanges) {
      throw new TypeError(
        "Failed to execute 'setValidity' on 'ElementInternals': 1 argument required, but only 0 present."
      );
    }
    validationAnchorMap.set(this, anchor);
    const validity = validityMap.get(this);
    const validityChangesObj = {};
    for (const key in validityChanges) {
      validityChangesObj[key] = validityChanges[key];
    }
    if (Object.keys(validityChangesObj).length === 0) {
      setValid(validity);
    }
    const check = { ...validity, ...validityChangesObj };
    delete check.valid;
    const { valid } = reconcileValidity(validity, check, this.form);
    if (!valid && !validationMessage) {
      throw new DOMException(
        `Failed to execute 'setValidity' on 'ElementInternals': The second argument should not be empty if one or more flags in the first argument are true.`
      );
    }
    validationMessageMap.set(this, valid ? "" : validationMessage);
    if (ref.isConnected) {
      ref.toggleAttribute("internals-invalid", !valid);
      ref.toggleAttribute("internals-valid", valid);
      ref.setAttribute("aria-invalid", `${!valid}`);
    } else {
      validityUpgradeMap.set(ref, this);
    }
  }
  get shadowRoot() {
    const ref = refMap.get(this);
    const shadowRoot = shadowRootMap.get(ref);
    if (shadowRoot) {
      return shadowRoot;
    }
    return null;
  }
  /** The element's validation message set during a call to ElementInternals.setValidity */
  get validationMessage() {
    const ref = refMap.get(this);
    throwIfNotFormAssociated(
      ref,
      `Failed to read the 'validationMessage' property from 'ElementInternals': The target element is not a form-associated custom element.`
    );
    return validationMessageMap.get(this);
  }
  /** The current validity state of the object */
  get validity() {
    const ref = refMap.get(this);
    throwIfNotFormAssociated(
      ref,
      `Failed to read the 'validity' property from 'ElementInternals': The target element is not a form-associated custom element.`
    );
    const validity = validityMap.get(this);
    return validity;
  }
  /** If true the element will participate in a form's constraint validation. */
  get willValidate() {
    const ref = refMap.get(this);
    throwIfNotFormAssociated(
      ref,
      `Failed to read the 'willValidate' property from 'ElementInternals': The target element is not a form-associated custom element.`
    );
    if (ref.disabled || ref.hasAttribute("disabled") || ref.hasAttribute("readonly")) {
      return false;
    }
    return true;
  }
};
function isElementInternalsSupported() {
  if (typeof window === "undefined" || !window.ElementInternals || !HTMLElement.prototype.attachInternals) {
    return false;
  }
  class ElementInternalsFeatureDetection extends HTMLElement {
    constructor() {
      super();
      this.internals = this.attachInternals();
    }
  }
  const randomName = `element-internals-feature-detection-${Math.random().toString(36).replace(/[^a-z]+/g, "")}`;
  customElements.define(randomName, ElementInternalsFeatureDetection);
  const featureDetectionElement = new ElementInternalsFeatureDetection();
  return [
    "shadowRoot",
    "form",
    "willValidate",
    "validity",
    "validationMessage",
    "labels",
    "setFormValue",
    "setValidity",
    "checkValidity",
    "reportValidity"
  ].every((prop) => prop in featureDetectionElement.internals);
}
if (!import_is_server2.isServer || process?.env.JEST_WORKER_ID !== void 0 && false) {
  if (!isElementInternalsSupported()) {
    if (typeof window !== "undefined") {
      window.ElementInternals = ElementInternals;
    }
    if (typeof CustomElementRegistry !== "undefined") {
      const define = CustomElementRegistry.prototype.define;
      CustomElementRegistry.prototype.define = function(name, constructor, options) {
        if (constructor.formAssociated) {
          const connectedCallback = constructor.prototype.connectedCallback;
          constructor.prototype.connectedCallback = function() {
            if (!connectedCallbackMap.has(this)) {
              connectedCallbackMap.set(this, true);
              if (this.hasAttribute("disabled")) {
                setDisabled(this, true);
              }
            }
            if (connectedCallback != null) {
              connectedCallback.apply(this);
            }
            upgradeInternals(this);
          };
        }
        define.call(this, name, constructor, options);
      };
    }
    if (typeof HTMLElement !== "undefined") {
      HTMLElement.prototype.attachInternals = function() {
        if (!this.tagName) {
          return {};
        } else if (this.tagName.indexOf("-") === -1) {
          throw new Error(
            `Failed to execute 'attachInternals' on 'HTMLElement': Unable to attach ElementInternals to non-custom elements.`
          );
        }
        if (internalsMap.has(this)) {
          throw new DOMException(
            `DOMException: Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.`
          );
        }
        return new ElementInternals(this);
      };
    }
    if (typeof Element !== "undefined") {
      let attachShadowObserver = function(...args) {
        const shadowRoot = attachShadow.apply(this, args);
        shadowRootMap.set(this, shadowRoot);
        if (mutationObserverExists()) {
          const observer2 = new MutationObserver(observerCallback);
          if (window.ShadyDOM) {
            observer2.observe(this, observerConfig);
          } else {
            observer2.observe(shadowRoot, observerConfig);
          }
          shadowHostsMap.set(this, observer2);
        }
        return shadowRoot;
      };
      const attachShadow = Element.prototype.attachShadow;
      Element.prototype.attachShadow = attachShadowObserver;
    }
    if (mutationObserverExists()) {
      const documentObserver = new MutationObserver(observerCallback);
      documentObserver.observe(document.documentElement, observerConfig);
    }
    if (typeof HTMLFormElement !== "undefined") {
      patchFormPrototype();
    }
    if (typeof window !== "undefined" && !window.CustomStateSet) {
      window.CustomStateSet = CustomStateSet;
    }
  } else if (typeof window !== "undefined" && !window.CustomStateSet) {
    window.CustomStateSet = CustomStateSet;
    const attachInternals = HTMLElement.prototype.attachInternals;
    HTMLElement.prototype.attachInternals = function(...args) {
      const internals = attachInternals.call(this, args);
      internals.states = new CustomStateSet(this);
      return internals;
    };
  }
}

// src/core/mixins/lang.mixin.ts
var import_decorators17 = require("lit/decorators.js");

// src/core/mixins/wait-for-fw.mixin.ts
var import_decorators18 = require("lit/decorators.js");
var WaitForFrameworkMixin = (superClass) => {
  class WaitForFrameworkElement extends superClass {
  }
  __decorateClass([
    (0, import_decorators18.property)({ type: Boolean, attribute: "mte-fw-rendered", reflect: true })
  ], WaitForFrameworkElement.prototype, "_fwRendered", 2);
  return WaitForFrameworkElement;
};

// src/core/styles/lit-css.ts
var import_lit12 = require("lit");
var css7 = (strings, ...values) => (0, import_lit12.css)(strings, ...values.map((value) => (0, import_lit12.unsafeCSS)(value)));

// src/core/styles/base.styles.ts
var import_lit13 = require("lit");
var styles7 = import_lit13.css`:host{box-sizing:border-box}`;

// src/atomic/nav/nav-root.styles.ts
var import_lit14 = require("lit");
var styles8 = import_lit14.css`:host{--background:inherit;--sidebar-size:var(--mte-nav-sidebar-size,0px);--sidebar-position-right:0;--sidebar-position-bottom:0;--sidebar-position-left:0;--sidebar-position-top:0;--sidebar-width:100%;--sidebar-height:100%;--sidebar-visibility:hidden;--sidebar-transition-time:200ms;--sidebar-transition-fn:cubic-bezier(0.25,0.8,0.25,1);--sidebar-aside-container-padding:var(--sidebar-size);--nav-z-index:1100;background:var(--background);display:block;min-height:100vh;min-width:100%;width:100%}:host([beforeInit]){--sidebar-transition-time:0ms}:host([appliedpreset=cx]),:host([appliedpreset=rx]){--background:var(--mte-surface-2)}:host(:not([withoutStickyHeader])) .header{position:sticky;top:0;z-index:var(--nav-z-index)}:host([sidebarPosition=left]){--sidebar-position-right:unset;--sidebar-width:var(--sidebar-size);--sidebar-transform:translate(-100%);--sidebar-border-right:1px solid}:host([sidebarPosition=right]){--sidebar-position-left:unset;--sidebar-width:var(--sidebar-size);--sidebar-transform:translate(100%);--sidebar-border-left:1px solid}:host([sidebarOpened]){--sidebar-transform:transform(0,0);--sidebar-visibility:visible;--sidebar-visibility-time:0ms}.container{display:grid;grid-template-columns:100%;grid-template-rows:auto 1fr auto;min-height:100vh;min-width:0;position:relative;transition:padding-left var(--sidebar-transition-time) var(--sidebar-transition-fn),width var(--sidebar-transition-time) var(--sidebar-transition-fn);width:100%;will-change:padding-left,width}.container,.content{transform:translateZ(0)}:host([sidebarPosition=left][sidebarOpened]:not([sidebarModeOver])) .container{padding-left:var(--sidebar-size,0);width:calc(100% - min(var(--sidebar-size, 0), 100%, 100vw))}:host([beforeInit]) .container{transition:none!important}`;

// src/atomic/nav/nav-root.element.ts
var import_decorators19 = require("lit/decorators.js");
var import_styles9 = require("@mortar/styles");

// src/atomic/nav/nav-utilities.ts
var import_styles8 = require("@mortar/styles");
var navState = {
  sidebar: signal(),
  header: signal(),
  subheader: signal(),
  sidebarSize: signal(350),
  activeBreakpoint: signal(null),
  inverse: signal(null),
  preferSidebar: signal(null),
  withinMobileBreakpoint: signal(false)
};
var collections = {
  sidebar: {
    active: null,
    registered: /* @__PURE__ */ new Map()
  },
  header: {
    active: null,
    registered: /* @__PURE__ */ new Map()
  },
  subheader: {
    active: null,
    registered: /* @__PURE__ */ new Map()
  }
};
var deleteNavElementState = (collectionName, element) => {
  const collection = collections[collectionName];
  collection.registered.delete(element);
  if (collection.active === element) {
    const newActive = collection.registered.keys().next().value;
    collection.active = newActive;
    navState[collectionName].set(collection.registered.get(newActive));
  }
};
var updateNavElementState = (collectionName, element, state14) => {
  const collection = collections[collectionName];
  if (!collection.active) {
    collection.active = element;
  }
  if (collection.active === element) {
    const currentState = navState[collectionName].get();
    const nestedObjectValueChanged = Object.keys(state14).some(
      (key) => currentState?.[key] !== state14?.[key]
    );
    if (nestedObjectValueChanged) {
      navState[collectionName].set(state14);
    }
  }
  collection.registered.set(element, state14);
};
var getCurrentBreakpoint = (w) => {
  const width = w.innerWidth;
  const sm = mapPxToNumber(import_styles8.config.grid.breakpoint.sm);
  const md = mapPxToNumber(import_styles8.config.grid.breakpoint.md);
  const lg = mapPxToNumber(import_styles8.config.grid.breakpoint.lg);
  const xl = mapPxToNumber(import_styles8.config.grid.breakpoint.xl);
  const xxl = mapPxToNumber(import_styles8.config.grid.breakpoint.xxl);
  let breakpoint = "xs";
  if (width >= sm && width < md) {
    breakpoint = "sm";
  } else if (width >= md && width < lg) {
    breakpoint = "md";
  } else if (width >= lg && width < xl) {
    breakpoint = "lg";
  } else if (width >= xl && width < xxl) {
    breakpoint = "xl";
  } else if (width >= xxl) {
    breakpoint = "xxl";
  }
  return breakpoint;
};
var belowMobileBreakpoint = (activeBreakpoint, mobileBreakpoint) => {
  let breakpoints = ["xs", "sm", "md", "lg", "xl", "xxl"];
  breakpoints = breakpoints.slice(0, breakpoints.indexOf(mobileBreakpoint));
  return breakpoints.includes(activeBreakpoint);
};

// src/core/controllers/signal-state.controller.ts
var SignalStateController = class {
  constructor(host, signals, callback, options) {
    this.host = host;
    this.signals = signals;
    this.callback = callback;
    this.options = options;
    this.options = { waitUntilFirstUpdate: true, on: "client", ...this.options };
    this.host.addController(this);
    if (this.options.on !== "client" && isSsr()) {
      computed(this.signals, (r) => r).subscribe((r) => {
        this.callback?.(r);
      })();
    }
  }
  hostConnected() {
    if (this.options.waitUntilFirstUpdate) {
      this.host.updateComplete.then(() => {
        this.initSub();
      });
    } else {
      this.initSub();
    }
  }
  initSub() {
    this.host.subs.push(
      computed(this.signals, (r) => r).subscribe((r) => {
        this.callback?.(r);
        this.host.requestUpdate();
      })
    );
  }
};

// src/atomic/nav/nav-root.element.ts
var import_resize_controller2 = require("@lit-labs/observers/resize-controller.js");
var MteNavRoot = class extends WaitForFrameworkMixin(
  PresetMixinFactory("MteNavRoot", {
    reflectAppliedPreset: true
  })(StylePartsMixin(MteElement))
) {
  constructor() {
    super();
    this.mobileBreakpoint = "lg";
    this.sidebarSize = 350;
    this.withoutStickyHeader = false;
    this.sidebarPosition = "left";
    this.sidebarOpened = false;
    this.sidebarModeOver = false;
    this.beforeInit = true;
    this.passive = false;
    this.firstUpdateComplete = false;
    this.signalStateController = new SignalStateController(
      this,
      [navState.sidebar],
      ([sidebar]) => {
        if (sidebar) {
          this.sidebarPosition = sidebar.position;
          this.sidebarOpened = sidebar.opened;
          this.sidebarModeOver = sidebar.overlayMode === "over";
        }
        this.updateHtmlScrollPaddingTop();
      },
      { waitUntilFirstUpdate: false }
    );
    this.handleBreakpointChange = () => {
      const breakpoint = getCurrentBreakpoint(globalThis.window);
      if (breakpoint !== this.previousBreakpointValue) {
        this.previousBreakpointValue = breakpoint;
        if (breakpoint) {
          const withinTransition = belowMobileBreakpoint(breakpoint, this.mobileBreakpoint);
          if (!this.passive) {
            navState.activeBreakpoint.set(breakpoint);
            navState.withinMobileBreakpoint.set(withinTransition);
          }
        }
      }
    };
    if (isSsr()) {
      this.handleSsrChange();
    }
  }
  handleStateChange() {
    if (!this.passive) {
      navState.inverse.set(this.inverse);
      navState.preferSidebar.set(this.preferSidebar);
      navState.sidebarSize.set(this.sidebarSize);
    }
  }
  handleSsrChange() {
    this.sidebarOpened = this.preferSidebar !== "closed";
  }
  connectedCallback() {
    super.connectedCallback();
    this.observer = new import_resize_controller2.ResizeController(this, {
      callback: this.handleBreakpointChange
    });
    this.updateComplete.then(() => {
      this.firstUpdateComplete = true;
      this.observer.observe(this);
    });
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    setTimeout(() => {
      this.beforeInit = false;
    });
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (isSsr() && (this.beforeInit || changedProps.has("sidebarOpened") || changedProps.has("sidebarSize") || changedProps.has("mobileBreakpoint"))) {
      this.setInstanceStyle("nav-root", (0, import_styles9.selectorFactory)(this.instanceStyleSelectorRoot), {
        xs: { "--sidebar-size": "0px" },
        [this.mobileBreakpoint]: {
          "--sidebar-size": this.preferSidebar !== "closed" ? mapNumberToPx(this.sidebarSize) : "0px"
        }
      });
    }
    if (!isSsr() && this.firstUpdateComplete) {
      this.setInstanceStyle("nav-root", (0, import_styles9.selectorFactory)(this.instanceStyleSelectorRoot), {
        "--sidebar-size": mapNumberToPx(this.sidebarSize)
      });
    }
  }
  /** Adds global scroll top padding to the document when the header is sticky */
  updateHtmlScrollPaddingTop() {
    if (!isSsr() && document?.body?.parentElement && this.headerElement) {
      if (!this.withoutStickyHeader) {
        document.body.parentElement.style.scrollPaddingTop = `calc(${this.headerElement.offsetHeight}px + ${import_styles9.config.space.xl})`;
      } else {
        document.body.parentElement.style.scrollPaddingTop = `${import_styles9.config.space.xl}`;
      }
    }
  }
  render() {
    return import_lit15.html`${this.instanceStyles} ${this.sidebarPosition !== "right" ? import_lit15.html`<slot name="sidebar"></slot>` : null}<div class="container" part="headerContainer"><div class="header" part="header"><slot name="header"></slot><slot name="sub-header"></slot></div><div class="content" part="content"><slot></slot></div><div class="footer" part="footer"><slot name="footer"></slot></div></div>${this.sidebarPosition === "right" ? import_lit15.html`<slot name="sidebar"></slot>` : null}`;
  }
};
MteNavRoot.styles = [styles7, styles8];
__decorateClass([
  presetProperty({ reflect: true })
], MteNavRoot.prototype, "mobileBreakpoint", 2);
__decorateClass([
  presetProperty({ reflect: true })
], MteNavRoot.prototype, "inverse", 2);
__decorateClass([
  presetProperty({ reflect: true })
], MteNavRoot.prototype, "preferSidebar", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteNavRoot.prototype, "sidebarSize", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteNavRoot.prototype, "withoutStickyHeader", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteNavRoot.prototype, "sidebarPosition", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteNavRoot.prototype, "sidebarOpened", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteNavRoot.prototype, "sidebarModeOver", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteNavRoot.prototype, "beforeInit", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteNavRoot.prototype, "passive", 2);
__decorateClass([
  (0, import_decorators19.state)()
], MteNavRoot.prototype, "firstUpdateComplete", 2);
__decorateClass([
  (0, import_decorators19.query)(".header")
], MteNavRoot.prototype, "headerElement", 2);
__decorateClass([
  onUpdate(["mobileBreakpoint", "inverse", "preferSidebar", "withoutStickyHeader", "sidebarSize"])
], MteNavRoot.prototype, "handleStateChange", 1);
__decorateClass([
  onUpdate(["preferSidebar"], { on: "ssr" })
], MteNavRoot.prototype, "handleSsrChange", 1);
MteNavRoot = __decorateClass([
  defineElement("mte-nav-root")
], MteNavRoot);

// src/atomic/nav/nav-header.element.ts
var import_class_map3 = require("lit/directives/class-map.js");
var import_lit33 = require("lit");
var import_decorators28 = require("lit/decorators.js");

// src/atomic/nav/nav-header.styles.ts
var import_lit16 = require("lit");
var styles9 = import_lit16.css`:host{--background:var(--mte-surface-2);--border-color:var(--mte-border-1);--border:solid 1px var(--border-color);--color:var(--mte-ink-1);--padding-x:calc(var(--mte-space-sm) + var(--mte-space-xs));--padding-y:calc(var(--mte-space-sm) + var(--mte-space-xs));--header-padding-y:var(--padding-y);--gap:var(--mte-space-md);--transition-time:200ms --transition-fn:cubic-bezier(0.4,0,0.2,1);align-items:center;background:var(--background);border-bottom:var(--border);color:var(--color);display:flex;flex-direction:row;justify-content:center;position:relative;width:100%}.overflow-container{align-items:inherit;display:inherit;flex-direction:inherit;justify-content:inherit;overflow-x:auto;padding:var(--padding-y) var(--padding-x);width:inherit}:host:before{background:var(--background);border-bottom:var(--border);bottom:-1px;content:"";left:calc(var(--sidebar-size)*-1);position:absolute;top:0;width:var(--sidebar-size)}:host([beforeInit]){--transition-time:0ms}:host([appliedpreset=cx]:not([inverse])){--background:rgb(var(--mte-core-primary-base-rgb));--color:rgb(var(--mte-core-primary-base-c-rgb));--border:none;--button-background:rgb(var(--mte-core-primary-dark-rgb));--button-color:rgb(var(--mte-core-primary-dark-c-rgb))}:host([appliedpreset=rx]:not([inverse])){--background:rgb(var(--mte-core-primary-dark-rgb));--color:rgb(var(--mte-core-primary-dark-c-rgb));--border:none;--button-background:rgb(var(--mte-core-primary-dark-rgb));--button-color:rgb(var(--mte-core-primary-dark-c-rgb))}.menu{align-items:center;display:flex;flex-grow:0;flex-shrink:0;justify-content:center;margin-right:max(calc(var(--gap)/2),var(--mte-space-xs));max-width:100px;opacity:1;order:1;transition:max-width var(--transition-time) var(--transition-fn),opacity var(--transition-time) var(--transition-fn),margin-right var(--transition-time) var(--transition-fn),visibility var(--transition-time) var(--transition-fn);visibility:visible;will-change:max-width,opacity,margin-right}:host([hideMenuUntilTransition]) .menu{transition:none}:host .menu:not(.visible){display:none;margin-right:0;max-height:0;max-width:0;opacity:0;visibility:hidden}.logo-container{color:inherit;display:inline-flex;flex-grow:0;margin-right:var(--gap);order:2;text-decoration:none}.logo,.name{align-items:center;display:flex;flex-grow:0;justify-content:center}.name{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-body2-font-size);font-weight:var(--mte-font-set-body2-font-weight);font-weight:700;line-height:var(--mte-font-set-body2-line-height);text-decoration:inherit;text-transform:inherit;white-space:nowrap}.name.visible{margin-left:var(--gap)}.end,.start{align-items:center;display:flex;flex-basis:100%;flex-direction:row;gap:var(--gap)}.start{flex-grow:0;justify-content:flex-start;margin-right:var(--gap);order:3}.end{flex-grow:1;justify-content:flex-end;order:4}:host([withCenterLogo]) .logo-container{margin-left:var(--gap);order:3}:host([withCenterLogo]) .start{flex-grow:1;margin-right:0;order:2}.px-logo{height:32px;width:92px}.cx-logo{height:36px;width:104px}.rx-logo{height:36px;width:136px}`;

// src/atomic/nav/container.styles.ts
var import_lit17 = require("lit");
var styles10 = import_lit17.css`.container{width:100%}.flex{align-items:center;display:flex;flex-direction:row}:host([withContainer]) .grid-container{box-sizing:border-box;--gutter-x:var(--mte-gutter-x,1.5rem);--gutter-y:var(--mte-gutter-y,0);margin-left:auto;margin-right:auto;padding-left:calc(var(--gutter-x)*1);padding-right:calc(var(--gutter-x)*1);width:100%}@media (min-width:480px){:host([withContainer]) .grid-container{max-width:768px}}@media (min-width:768px){:host([withContainer]) .grid-container{max-width:1024px}}@media (min-width:1024px){:host([withContainer]) .grid-container{max-width:1280px}}@media (min-width:1280px){:host([withContainer]) .grid-container{max-width:1440px}}@media (min-width:1536px){:host([withContainer]) .grid-container{max-width:1440px}}`;

// src/atomic/nav/nav-header.element.ts
var import_if_defined5 = require("lit/directives/if-defined.js");

// src/atomic/button/button.element.ts
var import_if_defined3 = require("lit-html/directives/if-defined.js");
var import_lit23 = require("lit");
var import_decorators23 = require("lit/decorators.js");

// src/atomic/button/button.styles.ts
var import_lit18 = require("lit");
var styles11 = import_lit18.css`:host{--background:transparent;--color:inherit;--padding-y:var(--mte-space-sm);--padding-x:calc(var(--mte-space-md) + var(--mte-space-xs));--border-width:1px;--border-style:solid;--border-radius:var(--group-radius,var(--mte-border-radius-xl));--focus-radius:var(--group-focus-radius,var(--mte-border-radius-full));--border-color:transparent;--border-alt-color:var(--border-color);--icon-size:16px;--focus-offset:-5px;--final-y:var(--padding-y);--final-x:var(--padding-x);align-items:center;-webkit-appearance:none;background:var(--background);border:var(--border-style) var(--border-width) var(--border-color);border-bottom-left-radius:var(--group-border-bottom-left-radius,var(--border-radius));border-bottom-right-radius:var(--group-border-bottom-right-radius,var(--border-radius));border-color:var(--group-border-top-color,var(--border-color)) var(--group-border-right-color,var(--border-color)) var(--group-border-bottom-color,var(--border-color)) var(--group-border-left-color,var(--border-color));border-top-left-radius:var(--group-border-top-left-radius,var(--border-radius));border-top-right-radius:var(--group-border-top-right-radius,var(--border-radius));color:var(--color);cursor:pointer;display:inline-flex;flex-wrap:nowrap;font-family:var(--mte-font-family-sans);justify-content:center;outline:none!important;overflow:visible;padding:var(--final-y) var(--final-x);-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;width:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-button-font-size);font-weight:var(--mte-font-set-button-font-weight);line-height:var(--mte-font-set-button-line-height);line-height:1;text-decoration:inherit;text-transform:inherit}:host(:focus-visible:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--group-focus-bottom-left-radius,var(--focus-radius));border-bottom-right-radius:var(--group-focus-bottom-right-radius,var(--focus-radius));border-top-left-radius:var(--group-focus-top-left-radius,var(--focus-radius));border-top-right-radius:var(--group-focus-top-right-radius,var(--focus-radius));bottom:var(--focus-offset);box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:var(--focus-offset);pointer-events:none;position:absolute;right:var(--focus-offset);top:var(--focus-offset);z-index:9}:host(::-moz-focus-inner){border:0;padding:0}:host(:hover),:host([activestate]){outline:none;--color:inherit}:host(:hover){--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)))}:host(:active),:host([activestate]){--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)))}:host([outlined]){--border-style:solid;--border-color:var(--mte-border-2)}:host([filled]){--border-style:solid;--border-color:transparent;--background:var(--button-filled-bg,var(--mte-grey-10));--color:var(--button-filled-ink,var(--mte-ink-5))}:host([filled]:hover){--background:var(--button-filled-active-bg,var(--mte-grey-9));--color:var(--button-filled-active-ink,var(--mte-ink-5))}:host([filled]:active),:host([filled][activestate]){--background:var(--button-filled-active-bg,var(--mte-darker));--color:var(--button-filled-active-ink,var(--mte-ink-5))}:host([color=primary]:not([disabled])){--border-color:transparent;--background:transparent;--color:rgb(var(--mte-core-primary-base-rgb))}:host([color=primary]:not([disabled]):focus),:host([color=primary]:not([disabled]):hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));--color:rgb(var(--mte-core-primary-dark-rgb))}:host([color=primary]:not([disabled])[activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a));--color:rgb(var(--mte-core-primary-darker-rgb))}:host([color=primary][outlined]:not([disabled])){--background:transparent;--border-color:var(--mte-border-2);--color:rgb(var(--mte-core-primary-base-rgb))}:host([color=primary][outlined]:not([disabled]):focus),:host([color=primary][outlined]:not([disabled]):hover){--border-color:var(--mte-border-2);--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)));--color:rgb(var(--mte-core-primary-dark-rgb))}:host([color=primary][outlined]:not([disabled])[activestate]){--border-color:var(--mte-border-2);--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)));--color:rgb(var(--mte-core-primary-darker-rgb))}:host([color=primary][filled]:not([disabled])){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-primary-dark-rgb));--background:rgb(var(--mte-core-primary-base-rgb));--color:rgb(var(--mte-core-primary-base-c-rgb))}:host([color=primary][filled]:not([disabled]):focus),:host([color=primary][filled]:not([disabled]):hover){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-primary-dark-rgb));--background:rgb(var(--mte-core-primary-dark-rgb));--color:rgb(var(--mte-core-primary-dark-c-rgb))}:host([color=primary][filled]:not([disabled])[activestate]){--border-color:transparent;--background:rgb(var(--mte-core-primary-darker-rgb));--color:rgb(var(--mte-core-primary-darker-c-rgb))}:host([color=secondary]:not([disabled])){--border-color:transparent;--background:transparent;--color:rgb(var(--mte-core-secondary-base-rgb))}:host([color=secondary]:not([disabled]):focus),:host([color=secondary]:not([disabled]):hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));--color:rgb(var(--mte-core-secondary-dark-rgb))}:host([color=secondary]:not([disabled])[activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a));--color:rgb(var(--mte-core-secondary-darker-rgb))}:host([color=secondary][outlined]:not([disabled])){--background:transparent;--border-color:var(--mte-border-2);--color:rgb(var(--mte-core-secondary-base-rgb))}:host([color=secondary][outlined]:not([disabled]):focus),:host([color=secondary][outlined]:not([disabled]):hover){--border-color:var(--mte-border-2);--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)));--color:rgb(var(--mte-core-secondary-dark-rgb))}:host([color=secondary][outlined]:not([disabled])[activestate]){--border-color:var(--mte-border-2);--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)));--color:rgb(var(--mte-core-secondary-darker-rgb))}:host([color=secondary][filled]:not([disabled])){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-secondary-dark-rgb));--background:rgb(var(--mte-core-secondary-base-rgb));--color:rgb(var(--mte-core-secondary-base-c-rgb))}:host([color=secondary][filled]:not([disabled]):focus),:host([color=secondary][filled]:not([disabled]):hover){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-secondary-dark-rgb));--background:rgb(var(--mte-core-secondary-dark-rgb));--color:rgb(var(--mte-core-secondary-dark-c-rgb))}:host([color=secondary][filled]:not([disabled])[activestate]){--border-color:transparent;--background:rgb(var(--mte-core-secondary-darker-rgb));--color:rgb(var(--mte-core-secondary-darker-c-rgb))}:host([color=tertiary]:not([disabled])){--border-color:transparent;--background:transparent;--color:rgb(var(--mte-core-tertiary-base-rgb))}:host([color=tertiary]:not([disabled]):focus),:host([color=tertiary]:not([disabled]):hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));--color:rgb(var(--mte-core-tertiary-dark-rgb))}:host([color=tertiary]:not([disabled])[activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a));--color:rgb(var(--mte-core-tertiary-darker-rgb))}:host([color=tertiary][outlined]:not([disabled])){--background:transparent;--border-color:var(--mte-border-2);--color:rgb(var(--mte-core-tertiary-base-rgb))}:host([color=tertiary][outlined]:not([disabled]):focus),:host([color=tertiary][outlined]:not([disabled]):hover){--border-color:var(--mte-border-2);--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)));--color:rgb(var(--mte-core-tertiary-dark-rgb))}:host([color=tertiary][outlined]:not([disabled])[activestate]){--border-color:var(--mte-border-2);--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)));--color:rgb(var(--mte-core-tertiary-darker-rgb))}:host([color=tertiary][filled]:not([disabled])){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-tertiary-dark-rgb));--background:rgb(var(--mte-core-tertiary-base-rgb));--color:rgb(var(--mte-core-tertiary-base-c-rgb))}:host([color=tertiary][filled]:not([disabled]):focus),:host([color=tertiary][filled]:not([disabled]):hover){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-tertiary-dark-rgb));--background:rgb(var(--mte-core-tertiary-dark-rgb));--color:rgb(var(--mte-core-tertiary-dark-c-rgb))}:host([color=tertiary][filled]:not([disabled])[activestate]){--border-color:transparent;--background:rgb(var(--mte-core-tertiary-darker-rgb));--color:rgb(var(--mte-core-tertiary-darker-c-rgb))}:host([color=danger]:not([disabled])){--border-color:transparent;--background:transparent;--color:rgb(var(--mte-core-danger-base-rgb))}:host([color=danger]:not([disabled]):focus),:host([color=danger]:not([disabled]):hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));--color:rgb(var(--mte-core-danger-dark-rgb))}:host([color=danger]:not([disabled])[activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a));--color:rgb(var(--mte-core-danger-darker-rgb))}:host([color=danger][outlined]:not([disabled])){--background:transparent;--border-color:var(--mte-border-2);--color:rgb(var(--mte-core-danger-base-rgb))}:host([color=danger][outlined]:not([disabled]):focus),:host([color=danger][outlined]:not([disabled]):hover){--border-color:var(--mte-border-2);--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)));--color:rgb(var(--mte-core-danger-dark-rgb))}:host([color=danger][outlined]:not([disabled])[activestate]){--border-color:var(--mte-border-2);--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)));--color:rgb(var(--mte-core-danger-darker-rgb))}:host([color=danger][filled]:not([disabled])){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-danger-dark-rgb));--background:rgb(var(--mte-core-danger-base-rgb));--color:rgb(var(--mte-core-danger-base-c-rgb))}:host([color=danger][filled]:not([disabled]):focus),:host([color=danger][filled]:not([disabled]):hover){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-danger-dark-rgb));--background:rgb(var(--mte-core-danger-dark-rgb));--color:rgb(var(--mte-core-danger-dark-c-rgb))}:host([color=danger][filled]:not([disabled])[activestate]){--border-color:transparent;--background:rgb(var(--mte-core-danger-darker-rgb));--color:rgb(var(--mte-core-danger-darker-c-rgb))}:host([disabled]),:host([disabled]) a{cursor:not-allowed!important;--color:var(--mte-disabled-4)!important;box-shadow:none!important;text-shadow:none!important}:host([disabled]:hover),:host([disabled][activestate]){--background:transparent!important}:host([disabled][filled]),:host([disabled][outlined]){--border-color:var(--mte-disabled-2)!important;--background:var(--mte-disabled-1)!important;--color:var(--mte-disabled-4)!important}:host([disabled][filled]:hover),:host([disabled][filled][activestate]),:host([disabled][outlined]:hover),:host([disabled][outlined][activestate]){--background:var(--mte-disabled-1)!important}:host([size=sm]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:calc(var(--mte-font-set-button-font-size)*.8);font-weight:var(--mte-font-set-button-font-weight);line-height:var(--mte-font-set-button-line-height);text-decoration:inherit;text-transform:inherit;--final-y:calc(var(--padding-y)*var(--mte-size-scale-sm));--final-x:calc(var(--padding-x)*var(--mte-size-scale-sm))}:host([size=lg]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:calc(var(--mte-font-set-button-font-size)*1.2);font-weight:var(--mte-font-set-button-font-weight);line-height:var(--mte-font-set-button-line-height);text-decoration:inherit;text-transform:inherit;--border-radius:var(--mte-border-radius-full);--final-y:calc(var(--padding-y)*var(--mte-size-scale-lg));--final-x:calc(var(--padding-x)*var(--mte-size-scale-lg))}:host([radius=sm]){--border-radius:var(--mte-border-radius-sm);--focus-radius:var(--mte-border-radius-md)}.prefix,.prefix>span{align-items:center;display:flex;justify-content:center}.prefix{margin-left:calc(var(--mte-space-sm)*-1);padding-right:var(--mte-space-sm)}:host([size=sm]) .prefix{margin-left:calc(var(--mte-space-xs)*-1);padding-right:var(--mte-space-xs)}.suffix,.suffix>span{align-items:center;display:flex;justify-content:center}.suffix{margin-right:calc(var(--mte-space-sm)*-1);padding-left:var(--mte-space-sm)}:host([size=sm]) .suffix{margin-right:calc(var(--mte-space-xs)*-1);padding-left:var(--mte-space-xs)}:host>:not(.label) mte-icon{height:var(--icon-size);min-height:var(--icon-size);min-width:var(--icon-size);width:var(--icon-size)}:host([size=sm])>:not(.label) mte-icon{--icon-size:12px}:host([size=lg])>:not(.label) mte-icon{--icon-size:20px}`;

// src/atomic/icon/icon.element.ts
var import_lit20 = require("lit");
var import_decorators20 = require("lit/decorators.js");

// src/atomic/icon/icon.styles.ts
var import_lit19 = require("lit");
var styles12 = import_lit19.css`:host{box-sizing:content-box!important;color:var(--icon-color,inherit);display:inline-block;line-height:0;width:24px}:host([autosize]){vertical-align:middle}:host([muted]){--icon-color:var(--mte-ink-2)}svg{display:block;height:100%;width:100%}:host(:not([withColor])) svg *{color:inherit;fill:currentColor!important}:host([color=primary])>svg *{color:rgb(var(--mte-status-primary-base-rgb))}:host([color=secondary])>svg *{color:rgb(var(--mte-status-secondary-base-rgb))}:host([color=tertiary])>svg *{color:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=success])>svg *{color:rgb(var(--mte-status-success-base-rgb))}:host([color=warning])>svg *{color:rgb(var(--mte-status-warning-base-rgb))}:host([color=danger])>svg *{color:rgb(var(--mte-status-danger-base-rgb))}`;

// src/atomic/icon/icon-registry.service.ts
var import_icons = require("@mortar/icons");
var _MteIconRegistryService = class {
  constructor() {
    /** Map where loaded icon svgs are cached */
    this.iconRegistry = /* @__PURE__ */ new Map();
    /** Map of registered lazy loading resolver functions per icon library */
    this.iconUrlResolvers = /* @__PURE__ */ new Map();
    /** Defines the svg used when an icon cannot be loaded */
    this.fallbackIcon = import_icons.mtrIconHelpRhombus?.data;
    /** Tracks if icons should be lazy loaded internally */
    this.lazyLoadEnabled = true;
    /** Prevents logs and fetches when true */
    this.testModeEnabled = false;
    /** Delimiter used when creating library + icon name keys */
    this.delimiter = "~";
    this.iconUrlResolvers.set("_default", (iconName) => {
      return `https://mortar-cdn.heb.com/icons/mdi/7.2/${iconName}.svg`;
    });
    this.iconUrlResolvers.set("cx", (iconName) => {
      return `https://mortar-cdn.heb.com/icons/cx/1.1/${iconName}.svg`;
    });
    this.ssrInit().then(() => {
    });
  }
  /** @hidden */
  async ssrInit() {
    try {
      if (isSsr()) {
        const iconImport = process?.env.MORTAR_DYNAMIC_SSR_ICON_IMPORTS === "true" ? "@mortar/icons" : null;
        if (iconImport) {
          const icons = await import(
            /* webpackIgnore: true */
            /* @vite-ignore */
            iconImport
          );
          this.serverIconCache = icons?.default ?? icons;
        }
      }
    } catch (e) {
    }
  }
  /**
   * Configures the root url from which this service will attempt to fetch icons from for the given "library".
   */
  registerIconLibrary(iconLibrary = "_default", iconUrlResolver) {
    this.lazyLoadEnabled = true;
    if (iconUrlResolver) {
      this.iconUrlResolvers.set(iconLibrary ?? "_default", iconUrlResolver);
    }
    for (const [name, iconSignal] of this.iconRegistry) {
      if (!iconSignal || !iconSignal.get()?.fetched) {
        const [iconLibrary2, pathName] = name.split(this.delimiter);
        this.fetchIcon(pathName, iconLibrary2).then((icon) => {
          iconSignal.set({ fetched: true, data: icon });
        });
      }
    }
  }
  /** Manually registers new icons */
  registerIcons(icons, iconLibrary = "_default") {
    icons.forEach((icon) => {
      const iconSignal = this.iconRegistry.get(`${iconLibrary}${this.delimiter}${icon.name}`);
      if (!iconSignal) {
        this.iconRegistry.set(
          `${iconLibrary}${this.delimiter}${icon.name}`,
          signal({ fetched: true, data: icon.data })
        );
      } else if (iconSignal && !iconSignal.get()?.fetched) {
        iconSignal.set({ fetched: true, data: icon.data });
      }
    });
  }
  /**
   * Allows you to override the lazy loading. Defaults to `true`.
   * When `false` icons will not be fetched from remote locations.
   */
  setLazyLoading(value = true) {
    this.lazyLoadEnabled = value;
  }
  /**
   * Allows you to override the test mode. Defaults to `false`.
   * When true warnings will not be thrown and no fetches will be made.
   */
  setTestMode(value = false) {
    this.testModeEnabled = value;
  }
  /** Sets a new custom fallback icon */
  setFallbackIcon(fallbackIcon) {
    this.fallbackIcon = fallbackIcon;
  }
  /**
   * Attempts to retrieve an icon from the registry.
   *
   * If a rootSvgIconUrl has been set, this method will
   * attempt to load the icon from there. If successful,
   * that svg will be registered for reuse.
   */
  getIcon(pathName, iconLibrary = "_default", abortSignal) {
    if (pathName === void 0) {
      return signal(this.fallbackIcon);
    }
    const registeredSignal = this.iconRegistry.get(`${iconLibrary}${this.delimiter}${pathName}`);
    const iconRegistered = !!registeredSignal;
    if (iconRegistered) {
      return computed(registeredSignal, (entry) => {
        return entry?.data;
      });
    } else if (!iconRegistered && this.lazyLoadEnabled) {
      let iconSignal;
      if (isSsr()) {
        if (this.serverIconCache) {
          const camelName = pathName.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          const iconName = `${iconLibrary === "cx" ? "cx" : "mtr"}Icon${camelName.charAt(0).toUpperCase()}${camelName.slice(1)}`;
          if (this.serverIconCache[iconName]) {
            iconSignal = signal({
              data: this.serverIconCache[iconName]?.data,
              fetched: true
            });
          } else {
            return this.handledFailedLoad(iconLibrary, pathName, iconSignal);
          }
        } else {
          iconSignal = signal({
            data: null,
            fetched: false
          });
        }
      } else {
        iconSignal = signal({
          data: null,
          fetched: false
        });
        this.iconRegistry.set(`${iconLibrary}${this.delimiter}${pathName}`, iconSignal);
        this.fetchIcon(pathName, iconLibrary, abortSignal).then((icon) => {
          iconSignal.set({ data: icon, fetched: true });
        });
      }
      return computed(iconSignal, (entry) => entry?.data);
    } else if (!iconRegistered && !this.lazyLoadEnabled) {
      const temp = this.handledFailedLoad(iconLibrary, pathName);
      return temp;
    }
  }
  /** Logs a warning and returns fallback icon. Call when attempt to load icon has failed. */
  handledFailedLoad(iconLibrary, pathName, iconSignal) {
    if (!iconSignal) {
      iconSignal = signal({
        data: this.fallbackIcon,
        fetched: false
      });
    }
    this.iconRegistry.set(`${iconLibrary}${this.delimiter}${pathName}`, iconSignal);
    if (!this.testModeEnabled) {
      console.warn(
        `Mortar: No icon is registered for the path name "${pathName}". Did you add it to the mortar icon registry?`
      );
    }
    return computed(iconSignal, (entry) => entry?.data);
  }
  /** Fetches an icon for the given library by name */
  async fetchIcon(pathName, iconLibrary = "_default", abortSignal) {
    if (!this.testModeEnabled) {
      try {
        const resolver = this.iconUrlResolvers.get(iconLibrary);
        if (!resolver) {
          console.warn(
            `MteIconRegistryService: No iconUrlResolver registered for library: "${iconLibrary}"`
          );
          return this.fallbackIcon;
        }
        const req = fetch(resolver(pathName), { method: "get", signal: abortSignal });
        const res = this.parseIconData(pathName, req);
        return await res;
      } catch (e) {
        if (pathName) {
          console.error(`MteIconRegistryService: failed to load icon: ${pathName}`);
        }
        return this.fallbackIcon;
      }
    }
    return this.fallbackIcon;
  }
  /** Asynchronously parse icon fetch response data */
  parseIconData(pathName, req) {
    return new Promise((resolve, reject) => {
      req.then((res) => {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.text());
        } else {
          if (pathName) {
            console.error(`MteIconRegistryService: failed to load icon: ${pathName}`);
          }
          resolve(this.fallbackIcon);
        }
      }).catch((e) => {
        resolve(this.fallbackIcon);
      });
    });
  }
};
var MteIconRegistryService = new _MteIconRegistryService();

// src/atomic/icon/icon.element.ts
var import_unsafe_svg2 = require("lit/directives/unsafe-svg.js");
var import_styles10 = require("@mortar/styles");
var MteIcon = class extends StatusColorMixin(
  PresetMixinFactory("MteIcon")(MteElement)
) {
  constructor() {
    super(...arguments);
    this.library = "_default";
    this.size = 24;
    this.autosize = false;
    this.role = "img";
    this.ariaHidden = "true";
    this.muted = false;
    this.withColor = false;
  }
  handleNameUpdate() {
    if (this.name) {
      if (this.needsIconUpdate()) {
        this.fetchAbortController?.abort();
        this.fetchAbortController = new AbortController();
        this.previousIconSubscription?.();
        this.previousIconSubscription = MteIconRegistryService.getIcon(
          this.name,
          this.library,
          this.fetchAbortController.signal
        ).subscribe((icon, unsub) => {
          if (icon) {
            const oldSvg = this.iconSvg;
            const oldLoaded = this._loaded;
            if (isSsr()) {
              this.iconSvg = icon;
              this._loaded = `${this.library}~${this.name}`;
              this.requestUpdate("iconSvg", oldSvg);
              this.requestUpdate("_loaded", oldLoaded);
            } else {
              this.updateComplete.then(() => {
                this.iconSvg = icon;
                this._loaded = `${this.library}~${this.name}`;
                this.requestUpdate("iconSvg", oldSvg);
                this.requestUpdate("_loaded", oldLoaded);
              });
            }
            if (this.iconSvg !== null && this.iconSvg !== MteIconRegistryService["fallbackIcon"]) {
              unsub();
              this.previousIconSubscription?.();
              this.previousIconSubscription = null;
            }
          }
          if (isSsr()) {
            unsub();
          }
        });
      } else if (!this.iconSvg) {
        const svg = this.renderRoot?.querySelector("svg")?.outerHTML ?? null;
        this.updateComplete.then(() => {
          this.iconSvg = svg;
          this.requestUpdate("iconSvg", null);
        });
      }
    } else {
      this._loaded = null;
      this.iconSvg = void 0;
    }
  }
  handleAriaLabelChange() {
    if (!this.ariaLabel) {
      this.ariaHidden = "true";
    }
    if (this.ariaLabel && this.ariaHidden === "true") {
      this.ariaHidden = null;
    }
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("size") || changedProps.has("iconSvg") || changedProps.has("autosize")) {
      if (this.autosize || this.size) {
        const size = this.autosize ? "calc(1em + 2px)" : `${this.size}px`;
        this.setInstanceStyle("mte-icon-sizing", (0, import_styles10.selectorFactory)(":host:host"), {
          width: size,
          minWidth: size,
          height: size,
          minHeight: size
        });
      }
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.previousIconSubscription?.();
  }
  needsIconUpdate() {
    return !this._loaded || this._loaded !== `${this.library}~${this.name}`;
  }
  render() {
    return import_lit20.html`${this.instanceStyles}${(0, import_unsafe_svg2.unsafeSVG)(this.iconSvg)}`;
  }
};
MteIcon.styles = [styles12];
__decorateClass([
  (0, import_decorators20.property)({ reflect: true })
], MteIcon.prototype, "name", 2);
__decorateClass([
  (0, import_decorators20.property)({ reflect: true })
], MteIcon.prototype, "library", 2);
__decorateClass([
  (0, import_decorators20.property)({ type: Number, reflect: true })
], MteIcon.prototype, "size", 2);
__decorateClass([
  (0, import_decorators20.property)({ type: Boolean, reflect: true })
], MteIcon.prototype, "autosize", 2);
__decorateClass([
  (0, import_decorators20.property)({ reflect: true })
], MteIcon.prototype, "role", 2);
__decorateClass([
  (0, import_decorators20.property)({ attribute: "aria-label", reflect: true })
], MteIcon.prototype, "ariaLabel", 2);
__decorateClass([
  (0, import_decorators20.property)({ attribute: "aria-hidden", reflect: true })
], MteIcon.prototype, "ariaHidden", 2);
__decorateClass([
  (0, import_decorators20.property)({ type: Boolean, reflect: true })
], MteIcon.prototype, "muted", 2);
__decorateClass([
  (0, import_decorators20.property)({ type: Boolean, reflect: true })
], MteIcon.prototype, "withColor", 2);
__decorateClass([
  (0, import_decorators20.property)({ reflect: true })
], MteIcon.prototype, "_loaded", 2);
__decorateClass([
  (0, import_decorators20.state)()
], MteIcon.prototype, "iconSvg", 2);
__decorateClass([
  onUpdate(["name", "library"], { on: "both" })
], MteIcon.prototype, "handleNameUpdate", 1);
__decorateClass([
  onUpdate(["ariaLabel"], { on: "both" })
], MteIcon.prototype, "handleAriaLabelChange", 1);
MteIcon = __decorateClass([
  defineElement("mte-icon")
], MteIcon);

// src/atomic/progress-spinner/progress-spinner.element.ts
var import_lit22 = require("lit");
var import_decorators21 = require("lit/decorators.js");

// src/atomic/progress-spinner/progress-spinner.styles.ts
var import_lit21 = require("lit");
var styles13 = import_lit21.css`@keyframes progress-spinner-animation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}:host{display:inline-block;height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content;will-change:transform}.container{align-items:center;display:flex;justify-content:center;overflow:visible;position:relative;vertical-align:middle}.container svg{display:block;overflow:visible}.container path{fill-opacity:0}.track{stroke:rgb(var(--mte-border-1-rgb))}.bar{left:0;position:absolute;top:0;stroke:rgb(var(--mte-status-primary-base-rgb))}.bar path{transform-origin:center;transition:stroke-dashoffset .2s cubic-bezier(.4,0,.2,1) 0ms;will-change:stroke-dashoffset}:host([withoutAnimation]) .bar path{transition:none!important}:host([indeterminate]){animation:progress-spinner-animation .5s linear infinite}:host([indeterminate]) .bar path{transition:none}:host([color=primary]) .bar{stroke:rgb(var(--mte-status-primary-base-rgb))}:host([color=secondary]) .bar{stroke:rgb(var(--mte-status-secondary-base-rgb))}:host([color=tertiary]) .bar{stroke:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=success]) .bar{stroke:rgb(var(--mte-status-success-base-rgb))}:host([color=warning]) .bar{stroke:rgb(var(--mte-status-warning-base-rgb))}:host([color=danger]) .bar{stroke:rgb(var(--mte-status-danger-base-rgb))}@media screen and (prefers-reduced-motion:reduce){.bar path{transition:none}:host([indeterminate]){animation:none}}`;

// src/atomic/progress-spinner/progress-spinner.common.ts
var SPINNER_BASE_SIZE = 100;

// src/atomic/progress-spinner/progress-spinner.element.ts
var import_style_map = require("lit/directives/style-map.js");
var MteProgressSpinner = class extends StatusColorMixin(
  PresetMixinFactory("MteProgressSpinner")(
    StylePartsMixin(MteElement)
  )
) {
  constructor() {
    super(...arguments);
    this.diameter = SPINNER_BASE_SIZE;
    this.indeterminate = false;
    this._value = 0;
    this.withoutAnimation = false;
    this.role = "progressbar";
    this.ariaValueNow = `${this.value}`;
    this.ariaValueMin = "0";
    this.ariaValueMax = "100";
    /** Default diameter */
    this.BASE_DIAMETER = 100;
    /** Total length of the drawn path  */
    this.PATH_LENGTH = 280;
    /** Used for calculating a standard stoke width based on the size of the circle */
    this.R = 45;
    /** Default width of the path stroke */
    this.STROKE_WIDTH = 4;
    /** Max width of the path stroke */
    this.MAX_STROKE_WIDTH = 16;
    /** Path for the spinner track */
    this.trackShape = `M 50,50 m 0,-${this.R} a ${this.R},${this.R} 0 1 1 0,${this.R * 2} a ${this.R},${this.R} 0 1 1 0,-${this.R * 2}`;
    /** Defines the dash pattern of the bar path  */
    this.strokeDashArray = `${this.PATH_LENGTH} ${this.PATH_LENGTH}`;
    this.strokeWidth = Math.min(
      this.MAX_STROKE_WIDTH,
      this.STROKE_WIDTH * 100 / this.BASE_DIAMETER
    );
    this.viewBox = "3.00 3.00 94.00 94.00";
    this.strokeDashOffset = this.PATH_LENGTH - this.PATH_LENGTH * (this.isIndeterminate() ? 0.25 : this.value / 100);
  }
  get value() {
    return !this.indeterminate ? this._value : 0;
  }
  set value(newValue) {
    const oldVal = this._value;
    this._value = Math.max(0, Math.min(100, newValue || 0));
    this.requestUpdate("value", oldVal);
  }
  handleValueChange() {
    this.recalculateSizing();
    this.ariaValueNow = this.isIndeterminate() ? void 0 : `${this.value}`;
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.recalculateSizing();
  }
  isIndeterminate() {
    return this.indeterminate;
  }
  recalculateSizing() {
    this.strokeWidth = Math.min(
      this.MAX_STROKE_WIDTH,
      this.STROKE_WIDTH * 100 / (this.d ?? this.diameter)
    );
    this.strokeDashOffset = this.PATH_LENGTH - this.PATH_LENGTH * (this.isIndeterminate() ? 0.25 : this.value / 100);
    const viewRadius = this.R + this.strokeWidth / 2;
    const viewBoxX = (50 - viewRadius).toFixed(2);
    const viewBoxWidth = (viewRadius * 2).toFixed(2);
    this.viewBox = `${viewBoxX} ${viewBoxX} ${viewBoxWidth} ${viewBoxWidth}`;
  }
  render() {
    const diameter = this.d ?? this.diameter;
    const containerStyles = (0, import_style_map.styleMap)({
      width: `${diameter}px`,
      height: `${diameter}px`
    });
    const trackStyles = (0, import_style_map.styleMap)({
      width: `${diameter}px`,
      height: `${diameter}px`,
      strokeWidth: `${this.strokeWidth.toFixed(2)}px`
    });
    const barStyles = (0, import_style_map.styleMap)({
      width: `${diameter}px`,
      height: `${diameter}px`,
      strokeWidth: `${this.strokeWidth.toFixed(2)}px`
    });
    return import_lit22.html`${this.instanceStyles}<div class="container" part="container" style="${containerStyles}"><svg class="track" part="track" style="${trackStyles}" viewBox="${this.viewBox}" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="${this.trackShape}"></path></svg> <svg class="bar" part="bar" style="${barStyles}" viewBox="${this.viewBox}" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="${this.trackShape}" pathLength="${this.PATH_LENGTH - 1}" stroke-dasharray="${this.strokeDashArray}" stroke-dashoffset="${this.strokeDashOffset}"></path></svg></div>`;
  }
};
MteProgressSpinner.styles = styles13;
__decorateClass([
  (0, import_decorators21.property)({ type: Number, reflect: true })
], MteProgressSpinner.prototype, "diameter", 2);
__decorateClass([
  (0, import_decorators21.property)({ type: Number, reflect: true })
], MteProgressSpinner.prototype, "d", 2);
__decorateClass([
  (0, import_decorators21.property)({ type: Boolean, reflect: true })
], MteProgressSpinner.prototype, "indeterminate", 2);
__decorateClass([
  (0, import_decorators21.property)({ type: Number, reflect: true })
], MteProgressSpinner.prototype, "value", 1);
__decorateClass([
  (0, import_decorators21.property)({ type: Boolean, reflect: true })
], MteProgressSpinner.prototype, "withoutAnimation", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true })
], MteProgressSpinner.prototype, "role", 2);
__decorateClass([
  (0, import_decorators21.property)({ attribute: "aria-valuenow", reflect: true })
], MteProgressSpinner.prototype, "ariaValueNow", 2);
__decorateClass([
  (0, import_decorators21.property)({ attribute: "aria-valuemin", reflect: true })
], MteProgressSpinner.prototype, "ariaValueMin", 2);
__decorateClass([
  (0, import_decorators21.property)({ attribute: "aria-valuemax", reflect: true })
], MteProgressSpinner.prototype, "ariaValueMax", 2);
__decorateClass([
  (0, import_decorators21.state)()
], MteProgressSpinner.prototype, "strokeWidth", 2);
__decorateClass([
  (0, import_decorators21.state)()
], MteProgressSpinner.prototype, "viewBox", 2);
__decorateClass([
  (0, import_decorators21.state)()
], MteProgressSpinner.prototype, "strokeDashOffset", 2);
__decorateClass([
  onUpdate(["value"], { on: "both" })
], MteProgressSpinner.prototype, "handleValueChange", 1);
MteProgressSpinner = __decorateClass([
  defineElement("mte-progress-spinner")
], MteProgressSpinner);

// src/atomic/progress-spinner/spinner.element.ts
var import_decorators22 = require("lit/decorators.js");
var MteSpinner = class extends MteProgressSpinner {
  constructor() {
    super(...arguments);
    this.indeterminate = true;
  }
};
__decorateClass([
  (0, import_decorators22.property)({ reflect: true })
], MteSpinner.prototype, "indeterminate", 2);
MteSpinner = __decorateClass([
  defineElement("mte-spinner")
], MteSpinner);

// src/atomic/button/button.element.ts
var import_styles12 = require("@mortar/styles");

// src/atomic/button/button-common.ts
var import_styles11 = require("@mortar/styles");
var defaultButtonBorderFactory = (width, color2, style) => `${style ?? "solid"} ${borderWidthValShorthands([
  { prop: "borderWidth", value: dotStringToConfigValue(width ?? "1px") }
])[0]?.value} ${dotStringToConfigValue(color2) ?? import_styles11.config.color.border1}`;

// src/atomic/button/button.element.ts
var MteButton = class extends InverseMixin(
  CoreColorMixin(
    RadiusMixin(
      SizeMixin(
        DensityMixin(
          ButtonMixin(
            PresetMixinFactory("MteButton")(
              StylePartsMixin(MteElement)
            )
          )
        )
      )
    )
  )
) {
  constructor() {
    super(...arguments);
    this.filled = false;
    this.outlined = false;
    this.iconLibrary = "_default";
    this.iconHidden = false;
    this.rightIconLibrary = "_default";
    this.rightIconHidden = false;
    this.loading = false;
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    let shouldUpdateStyles = false;
    for (const key of changedProps.keys()) {
      if (MteButton.contentProps.has(key)) {
        shouldUpdateStyles = true;
        break;
      }
    }
    if (shouldUpdateStyles) {
      this.setInstanceStyle("content-base", (0, import_styles12.selectorFactory)(":host:host:host:host:host:host"), {
        // Spacing
        m: this.m,
        mx: this.mx,
        my: this.my,
        mt: this.mt,
        mr: this.mr,
        mb: this.mb,
        ml: this.ml,
        // Sizing
        w: this.w,
        maxw: this.maxw,
        minw: this.minw,
        // Borders
        borderColor: this.borderColor,
        borderStyle: this.borderStyle,
        borderWidth: this.borderWidth,
        border: this.border ? defaultButtonBorderFactory(this.borderWidth, this.borderColor, this.borderStyle) : null,
        // Elevation
        elevation: this.elevation
      });
    }
  }
  render() {
    let loadingDiameter = 14;
    if (this.loading) {
      if (this.density === "compact" && this.size === "sm") {
        loadingDiameter = loadingDiameter - 7;
      } else if (this.density === "compact") {
        loadingDiameter = loadingDiameter - 4;
      } else if (this.size === "sm") {
        loadingDiameter = loadingDiameter - 5;
      }
    }
    const iconSize = this.size === "sm" ? 12 : this.size === "lg" ? 20 : 16;
    return this.renderButtonTemplate(import_lit23.html`${this.icon && !this.iconHidden || this.loading ? import_lit23.html`<span class="prefix"><span part="prefix">${this.loading ? import_lit23.html`<mte-spinner diameter="${loadingDiameter}"></mte-spinner>` : import_lit23.html`<mte-icon size="${iconSize}" name="${this.icon}" library="${(0, import_if_defined3.ifDefined)(this.iconLibrary)}"></mte-icon>`}</span></span>` : null}<slot part="label" class="label"></slot>${this.rightIcon && !this.rightIconHidden ? import_lit23.html`<span class="suffix"><span part="suffix"><mte-icon size="${iconSize}" name="${this.rightIcon}" library="${(0, import_if_defined3.ifDefined)(this.rightIconLibrary)}"></mte-icon></span></span>` : null}`);
  }
};
MteButton.styles = [styles7, styles, styles3, styles11];
// List of props for optimal style update checking
MteButton.contentProps = /* @__PURE__ */ new Set([
  "m",
  "mx",
  "my",
  "mt",
  "mr",
  "mb",
  "ml",
  "w",
  "maxw",
  "minw",
  "borderColor",
  "borderWidth",
  "borderStyle",
  "border",
  "elevation"
]);
__decorateClass([
  (0, import_decorators23.property)({ type: Boolean, reflect: true })
], MteButton.prototype, "filled", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Boolean, reflect: true })
], MteButton.prototype, "outlined", 2);
__decorateClass([
  (0, import_decorators23.property)()
], MteButton.prototype, "icon", 2);
__decorateClass([
  (0, import_decorators23.property)()
], MteButton.prototype, "iconLibrary", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Boolean })
], MteButton.prototype, "iconHidden", 2);
__decorateClass([
  (0, import_decorators23.property)()
], MteButton.prototype, "rightIcon", 2);
__decorateClass([
  (0, import_decorators23.property)()
], MteButton.prototype, "rightIconLibrary", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Boolean })
], MteButton.prototype, "rightIconHidden", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Boolean })
], MteButton.prototype, "loading", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "m", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "mx", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "my", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "mt", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "mr", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "mb", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "ml", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "w", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "maxw", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "minw", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "borderColor", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "borderWidth", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "borderStyle", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Boolean, reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "border", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "elevation", 2);
MteButton = __decorateClass([
  defineElement("mte-button")
], MteButton);

// src/atomic/button/icon-button.element.ts
var import_lit29 = require("lit");
var import_decorators26 = require("lit/decorators.js");

// src/atomic/button/icon-button.styles.ts
var import_lit24 = require("lit");
var styles14 = import_lit24.css`:host{--padding-y:var(--mte-space-sm);--padding-x:var(--padding-y);--border-radius:var(--group-radius,var(--mte-border-radius-full));--focus-radius:var(--group-focus-radius,var(--mte-border-radius-full));--icon-size:16px;--color:inherit}:host([radius=sm]){--border-radius:var(--mte-border-radius-sm);--focus-radius:var(--mte-border-radius-md)}:host mte-icon{height:var(--icon-size);min-height:var(--icon-size);min-width:var(--icon-size);width:var(--icon-size)}:host([size=sm]) mte-icon{--icon-size:12px}:host([size=lg]) mte-icon{--icon-size:20px}`;

// src/atomic/tooltip/tooltip.element.ts
var import_dom = require("@floating-ui/dom");
var import_styles13 = require("@mortar/styles");
var import_lit26 = require("lit");
var import_decorators24 = require("lit/decorators.js");

// src/atomic/tooltip/tooltip.styles.ts
var import_lit25 = require("lit");
var styles15 = import_lit25.css`:host{--color:var(--mte-light);--background:var(--mte-dark);--z-index:var(--mte-z-index-20);--radius:var(--mte-border-radius-xl);--padding-x:var(--mte-space-md);--padding-y:var(--mte-space-sm);pointer-events:auto}.tooltip{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;border-radius:var(--radius);color:var(--color);display:none;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);max-width:250px;opacity:0;padding:var(--padding-y) var(--padding-x);position:fixed;text-decoration:inherit;text-overflow:ellipsis;text-transform:inherit;z-index:var(--z-index)}.arrow,.tooltip{background:var(--background)}.arrow{height:10px;position:absolute;transform:rotate(45deg);width:10px}`;

// src/core/utilities/overlay.utilities.ts
var calculateOverlayPlacements = (position, placement = "center") => {
  const getFallbackGroup = (position2, preferredPlacement, primaryPosition) => {
    if (primaryPosition === "left") {
      if (position2 === "top" || position2 === "bottom") {
        preferredPlacement = "start";
      }
    }
    if (primaryPosition === "right") {
      if (position2 === "top" || position2 === "bottom") {
        preferredPlacement = "end";
      }
    }
    const alignOrder = preferredPlacement === "center" ? ["", "-end", "-start"] : preferredPlacement === "start" ? ["-start", "", "-end"] : ["-end", "", "-start"];
    return alignOrder.map((align) => `${position2}${align}`).filter((placement2) => placement2 !== primaryPosition);
  };
  const preferred = `${position}${placement === "end" ? "-end" : placement === "start" ? "-start" : ""}`;
  switch (position) {
    case "bottom":
      return [
        preferred,
        [
          ...getFallbackGroup("bottom", placement, preferred),
          ...getFallbackGroup("top", placement, preferred),
          ...getFallbackGroup("right", placement, preferred),
          ...getFallbackGroup("left", placement, preferred)
        ]
      ];
    case "left":
      return [
        preferred,
        [
          ...getFallbackGroup("left", placement, preferred),
          ...getFallbackGroup("right", placement, preferred),
          ...getFallbackGroup("top", placement, preferred),
          ...getFallbackGroup("bottom", placement, preferred)
        ]
      ];
    case "right":
      return [
        preferred,
        [
          ...getFallbackGroup("right", placement, preferred),
          ...getFallbackGroup("left", placement, preferred),
          ...getFallbackGroup("top", placement, preferred),
          ...getFallbackGroup("bottom", placement, preferred)
        ]
      ];
    case "top":
    default:
      return [
        preferred,
        [
          ...getFallbackGroup("top", placement, preferred),
          ...getFallbackGroup("bottom", placement, preferred),
          ...getFallbackGroup("right", placement, preferred),
          ...getFallbackGroup("left", placement, preferred)
        ]
      ];
  }
};
var calculateDefaultPanelAnimation = (renderedPlacement, options) => {
  const scaleX = options.scaleX ?? 0.9;
  const scaleY = options.scaleY ?? null;
  let position = options.fallbackPosition;
  let placement = options.fallbackPlacement;
  if (renderedPlacement) {
    const [pa, pb] = renderedPlacement.split("-");
    position = pa;
    placement = pb;
  }
  let translateY = null;
  if (position === "top") {
    translateY = "10%";
  } else if (position === "bottom") {
    translateY = "-10%";
  } else if (position === "right" || position === "left") {
    if (placement === "start") {
      translateY = "-5%";
    } else if (placement === "end") {
      translateY = "5%";
    }
  }
  let translateX = "";
  if (position === "top" || position === "bottom") {
    if (placement === "start") {
      translateX = "-5%";
    } else if (placement === "end") {
      translateX = "5%";
    }
  } else {
    if (position === "right") {
      translateX = "-10%";
    } else if (position === "left") {
      translateX = "10%";
    }
  }
  if (options.action === "open") {
    return {
      scaleX: [scaleX, 1],
      scaleY: scaleY ? [scaleY, 1] : void 0,
      translateX: [translateX, "0%"],
      translateY: translateY ? [translateY, "0%"] : void 0
    };
  } else {
    return {
      scaleX: [1, scaleX],
      scaleY: scaleY ? [1, scaleY] : void 0,
      translateX: ["0%", translateX],
      translateY: translateY ? ["0%", translateY] : void 0
    };
  }
};

// src/atomic/tooltip/tooltip.element.ts
var import_animejs = __toESM(require("animejs"), 1);
var TOOLTIP_AUTO_LABEL_TAGS = ["MTE-ICON-BUTTON"];
var nextUniqueId2 = 0;
var MteTooltip = class extends DisabledMixin(StylePartsMixin(MteElement)) {
  constructor() {
    super();
    this.id = `mte-tooltip--${nextUniqueId2++}`;
    this.position = "top";
    this.placement = "center";
    this.openDelay = 0;
    this.closeDelay = 0;
    this.role = "tooltip";
    this.ariaHidden = "true";
    this.ariaLive = "off";
    this.triggerOn = "hover";
    this.withoutPortal = false;
    this.animationDuration = import_styles13.config.animation.transitionDurationJs.short * 1e3;
    this.asAriaLabel = false;
    this.withoutAutoLabel = false;
    this.opened = false;
    this.assumeLabel = false;
    this.portalAdapter = defaultPortalAdapter;
    this.withoutA11y = false;
    this.visible = false;
    this.renderedPosition = null;
    /** spacing in px between the overlay and the target */
    this.offset = 8;
    /** Subscription callback to clear hover listeners */
    this.cleanupUpdateListeners = null;
    this.portalController = new PortalController(this);
    /** Triggers a floating-ui position recompute */
    this.updatePosition = () => {
      if (this.targetElement) {
        const [placement, fallbackPlacements] = calculateOverlayPlacements(
          this.position,
          this.placement
        );
        (0, import_dom.computePosition)(this.targetElement, this.tooltipElem, {
          strategy: "fixed",
          placement,
          middleware: [
            (0, import_dom.shift)({ padding: this.offset }),
            (0, import_dom.offset)(this.offset),
            (0, import_dom.flip)({ fallbackPlacements }),
            (0, import_dom.arrow)({ element: this.arrowElem }),
            (0, import_dom.hide)()
          ]
        }).then(({ x, y, placement: placement2, middlewareData }) => {
          this.renderedPosition = placement2;
          const { referenceHidden } = middlewareData.hide;
          Object.assign(this.tooltipElem.style, {
            left: `${x}px`,
            top: `${y}px`,
            visibility: referenceHidden ? "hidden" : "visible"
          });
          const { x: arrowX, y: arrowY, centerOffset } = middlewareData.arrow;
          const staticSide = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          }[placement2.split("-")[0]];
          if (centerOffset !== 0) {
            this.arrowElem.style.opacity = "0";
          } else {
            Object.assign(this.arrowElem.style, {
              left: arrowX != null ? `${arrowX}px` : "",
              top: arrowY != null ? `${arrowY}px` : "",
              right: "",
              bottom: "",
              opacity: 1,
              [staticSide]: "-3px"
            });
          }
        });
      }
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  handleAutoLabelChange() {
    this.updateLabelAssumption();
  }
  handleTriggerOnChange() {
    this._onTriggerChange.emit(this.triggerOn);
  }
  handleA11yChange() {
    this.updateTargetAriaIds();
  }
  handleDisabledChange() {
    if (this.visible) {
      this.close();
    }
  }
  handlePositionChange() {
    if (this.opened && this.cleanupUpdateListeners) {
      this.updatePosition();
    }
    this.renderedPosition = null;
  }
  firstUpdated() {
    if (!this.opened) {
      this.ariaHidden = "true";
      this.ariaLive = "off";
    }
    this.updateTargetAriaIds();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanupUpdateListeners?.();
    this.cleanupUpdateListeners = null;
    this.openAnimationRef?.remove();
    this.closeAnimationRef?.remove();
  }
  /** Toggles the tooltip between open and closed states */
  toggle() {
    return this.visible ? this.close() : this.open();
  }
  /** Opens the tooltip with any defined delays */
  open() {
    return new Promise((resolve) => {
      if (!this.disabled && !this.opened && this.targetElement) {
        if (this.closeTimeoutId) {
          clearTimeout(this.closeTimeoutId);
          this.closeTimeoutId = null;
        }
        this.openTimeoutId = setTimeout(() => {
          const openPromise = this.withoutPortal ? Promise.resolve() : this.portalController.appendToStack(this, {
            withInertBackdrop: true,
            portalAdapter: this.portalAdapter
          });
          openPromise.then(() => {
            if (!this.cleanupUpdateListeners) {
              setTimeout(() => {
                this.cleanupUpdateListeners = (0, import_dom.autoUpdate)(
                  this.targetElement,
                  this.tooltipElem,
                  this.updatePosition
                );
              });
            }
            if (!this.opened) {
              this._onOpen.emit(null, { bubbles: false });
            }
            this.opened = true;
            this.ariaHidden = this.asAriaLabel || this.assumeLabel ? "true" : "false";
            this.ariaLive = this.asAriaLabel || this.assumeLabel ? "off" : "polite";
            this.openTimeoutId = null;
            if (this.tooltipElem) {
              this.tooltipElem.style.display = "block";
              this.closeAnimationRef?.pause();
              this.openAnimationRef?.remove();
              this.openAnimationRef = (0, import_animejs.default)({
                targets: this.tooltipElem,
                ...calculateDefaultPanelAnimation(this.renderedPosition, {
                  fallbackPosition: this.position,
                  fallbackPlacement: this.placement,
                  action: "open",
                  scaleX: 0.9
                }),
                opacity: {
                  value: [0, 1],
                  easing: "linear",
                  duration: this.animationDuration / 2
                },
                easing: "easeOutElastic",
                duration: this.animationDuration,
                complete: () => {
                  resolve();
                }
              });
            } else {
              resolve();
            }
          });
        }, this.openDelay);
      }
    }).then(() => {
      this.visible = true;
      this.openAnimationRef?.remove();
      this.openAnimationRef = null;
    });
  }
  /** Closes the tooltip with any defined delays */
  close() {
    return new Promise((resolve) => {
      if (this.openTimeoutId) {
        clearTimeout(this.openTimeoutId);
        this.openTimeoutId = null;
      }
      this.closeTimeoutId = setTimeout(() => {
        if (this.opened) {
          this._onClose.emit(null, { bubbles: false });
        }
        this.opened = false;
        this.ariaHidden = "true";
        this.ariaLive = "off";
        this.closeTimeoutId = null;
        this.cleanupUpdateListeners?.();
        this.cleanupUpdateListeners = null;
        if (this.tooltipElem) {
          this.openAnimationRef?.pause();
          this.closeAnimationRef?.remove();
          this.closeAnimationRef = (0, import_animejs.default)({
            targets: this.tooltipElem,
            ...calculateDefaultPanelAnimation(this.renderedPosition, {
              fallbackPosition: this.position,
              fallbackPlacement: this.placement,
              action: "close",
              scaleX: 0.9
            }),
            opacity: {
              value: [1, 0],
              easing: "linear",
              duration: this.animationDuration / 2
            },
            easing: "easeOutElastic",
            duration: this.animationDuration,
            complete: () => {
              resolve();
            }
          });
        } else {
          resolve();
        }
      }, this.closeDelay);
    }).then(() => {
      this.visible = false;
      this.tooltipElem.style.display = "";
      this.closeAnimationRef?.remove();
      this.closeAnimationRef = null;
      this.portalController.removeFromStack();
    });
  }
  updateLabelAssumption() {
    if (!this.withoutA11y) {
      this.assumeLabel = !this.withoutAutoLabel && TOOLTIP_AUTO_LABEL_TAGS.includes(this.targetElement?.tagName) && !this.targetElement.getAttribute("aria-label") && !this.targetElement.getAttribute("aria-labelledby");
      if (this.opened) {
        this.ariaHidden = this.asAriaLabel || this.assumeLabel ? "true" : "false";
        this.ariaLive = this.asAriaLabel || this.assumeLabel ? "off" : "polite";
      }
    }
  }
  /** Syncs the tooltips id to all trigger elements */
  updateTargetAriaIds() {
    if (!this.withoutA11y) {
      this.updateLabelAssumption();
      if (this.asAriaLabel || this.assumeLabel) {
        if (!this.targetElement?.getAttribute("aria-labelledby")) {
          this.targetElement?.setAttribute("aria-labelledby", this.id);
        }
        if (this.targetElement?.getAttribute("aria-describedby")) {
          this.targetElement?.removeAttribute("aria-describedby");
        }
      } else {
        if (!this.targetElement?.getAttribute("aria-describedby")) {
          this.targetElement?.setAttribute("aria-describedby", this.id);
        }
        if (this.targetElement?.getAttribute("aria-labelledby")) {
          this.targetElement?.removeAttribute("aria-labelledby");
        }
      }
    }
  }
  render() {
    return import_lit26.html`${this.instanceStyles}<div part="tooltip" class="tooltip"><slot></slot><div part="arrow" class="arrow"></div></div>`;
  }
};
MteTooltip.styles = [styles7, styles15];
__decorateClass([
  (0, import_decorators24.property)({ reflect: true })
], MteTooltip.prototype, "id", 2);
__decorateClass([
  (0, import_decorators24.property)()
], MteTooltip.prototype, "position", 2);
__decorateClass([
  (0, import_decorators24.property)()
], MteTooltip.prototype, "placement", 2);
__decorateClass([
  (0, import_decorators24.property)({ type: Number, reflect: true })
], MteTooltip.prototype, "openDelay", 2);
__decorateClass([
  (0, import_decorators24.property)({ type: Number, reflect: true })
], MteTooltip.prototype, "closeDelay", 2);
__decorateClass([
  (0, import_decorators24.property)({ reflect: true })
], MteTooltip.prototype, "role", 2);
__decorateClass([
  (0, import_decorators24.property)({ attribute: "aria-hidden", reflect: true })
], MteTooltip.prototype, "ariaHidden", 2);
__decorateClass([
  (0, import_decorators24.property)({ attribute: "aria-live", reflect: true })
], MteTooltip.prototype, "ariaLive", 2);
__decorateClass([
  (0, import_decorators24.property)({ reflect: true })
], MteTooltip.prototype, "triggerOn", 2);
__decorateClass([
  (0, import_decorators24.property)({ type: Boolean, reflect: true })
], MteTooltip.prototype, "withoutPortal", 2);
__decorateClass([
  (0, import_decorators24.property)({ type: Number })
], MteTooltip.prototype, "animationDuration", 2);
__decorateClass([
  (0, import_decorators24.property)({ type: Boolean, reflect: true })
], MteTooltip.prototype, "asAriaLabel", 2);
__decorateClass([
  (0, import_decorators24.property)({ type: Boolean, reflect: true })
], MteTooltip.prototype, "withoutAutoLabel", 2);
__decorateClass([
  (0, import_decorators24.state)()
], MteTooltip.prototype, "opened", 2);
__decorateClass([
  (0, import_decorators24.state)()
], MteTooltip.prototype, "assumeLabel", 2);
__decorateClass([
  (0, import_decorators24.property)({ type: Object })
], MteTooltip.prototype, "targetElement", 2);
__decorateClass([
  (0, import_decorators24.property)()
], MteTooltip.prototype, "portalAdapter", 2);
__decorateClass([
  (0, import_decorators24.property)({ type: Boolean })
], MteTooltip.prototype, "withoutA11y", 2);
__decorateClass([
  eventEmitter()
], MteTooltip.prototype, "_onOpen", 2);
__decorateClass([
  eventEmitter()
], MteTooltip.prototype, "_onClose", 2);
__decorateClass([
  eventEmitter()
], MteTooltip.prototype, "_onTriggerChange", 2);
__decorateClass([
  (0, import_decorators24.state)()
], MteTooltip.prototype, "visible", 2);
__decorateClass([
  (0, import_decorators24.state)()
], MteTooltip.prototype, "renderedPosition", 2);
__decorateClass([
  (0, import_decorators24.query)(".tooltip")
], MteTooltip.prototype, "tooltipElem", 2);
__decorateClass([
  (0, import_decorators24.query)(".arrow")
], MteTooltip.prototype, "arrowElem", 2);
__decorateClass([
  onUpdate("withoutAutoLabel")
], MteTooltip.prototype, "handleAutoLabelChange", 1);
__decorateClass([
  onUpdate("triggerOn")
], MteTooltip.prototype, "handleTriggerOnChange", 1);
__decorateClass([
  onUpdate(["id", "targetElement", "asAriaLabel"], { waitUntilFirstUpdate: true })
], MteTooltip.prototype, "handleA11yChange", 1);
__decorateClass([
  onUpdate("disabled", { waitUntilFirstUpdate: true })
], MteTooltip.prototype, "handleDisabledChange", 1);
__decorateClass([
  onUpdate(["position", "placement", "sp", "se"], { waitUntilFirstUpdate: true })
], MteTooltip.prototype, "handlePositionChange", 1);
MteTooltip = __decorateClass([
  defineElement("mte-tooltip")
], MteTooltip);

// src/utilities/overlay-trigger/overlay-trigger.element.ts
var import_lit28 = require("lit");
var import_decorators25 = require("lit/decorators.js");

// src/utilities/overlay-trigger/overlay-trigger.styles.ts
var import_lit27 = require("lit");
var styles16 = import_lit27.css`:host{box-sizing:border-box;display:contents}slot[name=overlay]::slotted(*){position:absolute}`;

// src/utilities/overlay-trigger/overlay-trigger.element.ts
var nextUniqueId3 = 0;
var MteOverlayTrigger = class extends MteElement {
  constructor() {
    super();
    this.slotController = new SlotController(this);
    /** Tracks weather hover listeners are active or not */
    this.isListeningForOpen = false;
    /** Called to update listeners on the trigger element when the overlay element's `triggerOn` value is changed */
    this.updateTriggerListeners = (e) => {
      this.removeTriggerListeners(this.triggerElementRef);
      this.addTriggerListeners(this.triggerElementRef);
      e?.stopPropagation();
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  /** The first element currently in the trigger slot */
  get triggerElementRef() {
    return this._triggerElementRef;
  }
  set triggerElementRef(newElem) {
    if (this._triggerElementRef !== newElem) {
      this.removeTriggerListeners(this._triggerElementRef);
      this._triggerElementRef = newElem;
      if (this._triggerElementRef && !this._triggerElementRef?.id) {
        this._triggerElementRef.id = `mte-overlay-trigger--trigger--${nextUniqueId3++}`;
      }
      this.addTriggerListeners(this._triggerElementRef);
      if (!this._triggerElementRef) {
        this.overlayElementRef?.close?.();
      }
      this.updateOverlayTargetElement();
    }
  }
  /** The first element currently in the overlay slot */
  get overlayElementRef() {
    return this._overlayElementRef;
  }
  set overlayElementRef(newElem) {
    if (this._overlayElementRef !== newElem) {
      this.removeOverlayListeners(this._overlayElementRef);
      this._overlayElementRef = newElem;
      this.addOverlayListeners(this._overlayElementRef);
      this.updateOverlayTargetElement();
      if (this.triggerElementRef) {
        this.updateTriggerListeners();
      }
    }
  }
  handleOpenedChanged() {
    setTimeout(() => {
      if (this.opened) {
        this.open();
      } else {
        this.close();
      }
    });
  }
  handleManualTriggerElementChanged() {
    this.triggerElementRef = this.triggerElement;
  }
  handleManualOverlayElementChanged() {
    this.overlayElementRef = this.overlayElement;
  }
  connectedCallback() {
    super.connectedCallback();
    this.slotController.watchSlots(["overlay", "trigger"]).subscribe((changes) => {
      if (changes?.has("overlay")) {
        if (this.overlayElements?.length > 0) {
          const overlayElem = this.overlayElements?.[0];
          if (overlayElem.hasAttribute("data-overlay-wrapper")) {
            if (overlayElem.hasAttribute("data-overlay-ready")) {
              this.overlayElementRef = overlayElem.children?.[0];
            } else {
              overlayElem.addEventListener(
                "portalready",
                (e) => {
                  this.overlayElementRef = overlayElem.children?.[0];
                },
                { once: true }
              );
            }
          } else {
            this.overlayElementRef = overlayElem;
          }
        }
      }
      if (changes?.has("trigger")) {
        if (this.triggerElements?.length > 0) {
          this.triggerElementRef = this.triggerElements?.[0];
        }
      }
      if (changes?.has("trigger") && !this.triggerElements?.[0]) {
        this.overlayElementRef?.close?.();
      }
    });
    this.updateComplete.then(() => {
      this.toggleListeners(true);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.overlayElementRef?.close?.();
    this.toggleListeners(false);
  }
  /** Toggles the overlay elements open/close state */
  toggle() {
    setTimeout(() => {
      this.overlayElementRef?.toggle?.();
    });
  }
  /** Opens overlay elements */
  open() {
    setTimeout(() => {
      this.overlayElementRef?.open?.();
    });
  }
  /** Closes overlay elements */
  close() {
    setTimeout(() => {
      this.overlayElementRef?.close?.();
    });
  }
  /** Updates the overlay elements targetElement when either are changed */
  updateOverlayTargetElement() {
    if (this.overlayElementRef && this.triggerElementRef) {
      this.overlayElementRef.targetElement = this.triggerElementRef;
      if (this.opened) {
        this.open();
      } else {
        this.close();
      }
    }
  }
  /** Adds hover/focus open/close listeners to the container elem */
  toggleListeners(set) {
    if (set === null) {
      set = !this.isListeningForOpen;
    }
    if (set) {
      this.addTriggerListeners(this.triggerElementRef);
    } else {
      this.removeTriggerListeners(this.triggerElementRef);
    }
    this.isListeningForOpen = set;
  }
  /** Adds event listeners to the trigger element based on the overlay elements `triggerOn` value */
  addTriggerListeners(element) {
    if (element) {
      const triggerOn = this.overlayElementRef?.triggerOn ?? this.overlayElementRef?.getAttribute("triggerOn");
      if (triggerOn === "none" || !triggerOn) {
        return;
      }
      if (triggerOn !== "click") {
        element.addEventListener("focus", this.open, true);
        element.addEventListener("blur", this.close, true);
        if (triggerOn === "hover") {
          element.addEventListener("mouseenter", this.open);
          element.addEventListener("mouseleave", this.close);
        }
      } else {
        element.addEventListener("click", this.open, true);
      }
    }
  }
  /** Removes event listeners from the trigger element */
  removeTriggerListeners(element) {
    if (element) {
      element.removeEventListener("mouseenter", this.open);
      element.removeEventListener("mouseleave", this.close);
      element.removeEventListener("focus", this.open, true);
      element.removeEventListener("blur", this.close, true);
      element.removeEventListener("click", this.open, true);
    }
  }
  /** Adds event listeners to the overlay element to watch for changes to its `triggerOn` value */
  addOverlayListeners(element) {
    if (element) {
      element.addEventListener("onTriggerChange", this.updateTriggerListeners);
    }
  }
  /** Removes event listeners from the overlay element */
  removeOverlayListeners(element) {
    if (element) {
      element.removeEventListener("onTriggerChange", this.updateTriggerListeners);
    }
  }
  render() {
    return import_lit28.html`<slot name="overlay"></slot><slot name="trigger"></slot>`;
  }
};
MteOverlayTrigger.styles = [styles16];
__decorateClass([
  (0, import_decorators25.property)({ type: Boolean, reflect: true })
], MteOverlayTrigger.prototype, "opened", 2);
__decorateClass([
  (0, import_decorators25.property)({ attribute: false })
], MteOverlayTrigger.prototype, "triggerElement", 2);
__decorateClass([
  (0, import_decorators25.property)({ attribute: false })
], MteOverlayTrigger.prototype, "overlayElement", 2);
__decorateClass([
  (0, import_decorators25.queryAssignedElements)({ slot: "trigger" })
], MteOverlayTrigger.prototype, "triggerElements", 2);
__decorateClass([
  (0, import_decorators25.queryAssignedElements)({ slot: "overlay" })
], MteOverlayTrigger.prototype, "overlayElements", 2);
__decorateClass([
  onUpdate("opened")
], MteOverlayTrigger.prototype, "handleOpenedChanged", 1);
__decorateClass([
  onUpdate("triggerElement")
], MteOverlayTrigger.prototype, "handleManualTriggerElementChanged", 1);
__decorateClass([
  onUpdate("overlayElement")
], MteOverlayTrigger.prototype, "handleManualOverlayElementChanged", 1);
MteOverlayTrigger = __decorateClass([
  defineElement("mte-overlay-trigger")
], MteOverlayTrigger);

// src/atomic/button/icon-button.element.ts
var import_styles14 = require("@mortar/styles");
var MteIconButton = class extends DensityMixin(
  RadiusMixin(
    SizeMixin(
      InverseMixin(
        CoreColorMixin(
          PresetMixinFactory("MteIconButton")(
            ButtonMixin(StylePartsMixin(MteElement))
          )
        )
      )
    )
  )
) {
  constructor() {
    super(...arguments);
    this.filled = false;
    this.outlined = false;
    this.iconLibrary = "_default";
    this.loading = false;
    this.labelPosition = "top";
  }
  handleLabelChange() {
    if (this.label) {
      this.ariaLabel = this.label;
    }
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    let shouldUpdateStyles = false;
    for (const key of changedProps.keys()) {
      if (MteIconButton.contentProps.has(key)) {
        shouldUpdateStyles = true;
        break;
      }
    }
    if (shouldUpdateStyles) {
      this.setInstanceStyle("content-base", (0, import_styles14.selectorFactory)(":host:host:host:host:host:host"), {
        // Spacing
        m: this.m,
        mx: this.mx,
        my: this.my,
        mt: this.mt,
        mr: this.mr,
        mb: this.mb,
        ml: this.ml,
        // Borders
        borderColor: this.borderColor,
        borderStyle: this.borderStyle,
        borderWidth: this.borderWidth,
        border: this.border ? defaultButtonBorderFactory(this.borderWidth, this.borderColor, this.borderStyle) : null,
        // Elevation
        elevation: this.elevation
      });
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("label")) {
      if (this.overlayTriggerElement && !this.overlayTriggerElement.overlayElement) {
        this.overlayTriggerElement.overlayElement = this.tooltipElement;
        this.overlayTriggerElement.triggerElement = this;
      }
    }
  }
  render() {
    let loadingDiameter = 14;
    if (this.loading) {
      if (this.density === "compact" && this.size === "sm") {
        loadingDiameter = loadingDiameter - 7;
      } else if (this.density === "compact") {
        loadingDiameter = loadingDiameter - 4;
      } else if (this.size === "sm") {
        loadingDiameter = loadingDiameter - 5;
      }
    }
    return import_lit29.html`${this.renderButtonTemplate(
      this.loading ? import_lit29.html`<mte-spinner diameter="${loadingDiameter}"></mte-spinner>` : import_lit29.html`<mte-icon name="${this.icon}" library="${this.iconLibrary}" part="icon"></mte-icon>`
    )} ${this.label ? import_lit29.html`<mte-overlay-trigger id="trigger"></mte-overlay-trigger><mte-tooltip id="tooltip" position="${this.labelPosition}" asAriaLabel ?disabled="${this.disabled}" withoutA11y>${this.label}</mte-tooltip>` : null}`;
  }
};
MteIconButton.styles = [styles7, styles, styles3, styles11, styles14];
// List of props for optimal style update checking
MteIconButton.contentProps = /* @__PURE__ */ new Set([
  "m",
  "mx",
  "my",
  "mt",
  "mr",
  "mb",
  "ml",
  "borderColor",
  "borderWidth",
  "borderStyle",
  "border",
  "elevation"
]);
__decorateClass([
  (0, import_decorators26.property)({ type: Boolean, reflect: true })
], MteIconButton.prototype, "filled", 2);
__decorateClass([
  (0, import_decorators26.property)({ type: Boolean, reflect: true })
], MteIconButton.prototype, "outlined", 2);
__decorateClass([
  (0, import_decorators26.property)()
], MteIconButton.prototype, "icon", 2);
__decorateClass([
  (0, import_decorators26.property)()
], MteIconButton.prototype, "iconLibrary", 2);
__decorateClass([
  (0, import_decorators26.property)({ type: Boolean })
], MteIconButton.prototype, "loading", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true })
], MteIconButton.prototype, "label", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true })
], MteIconButton.prototype, "labelPosition", 2);
__decorateClass([
  (0, import_decorators26.property)({ attribute: "aria-label", reflect: true })
], MteIconButton.prototype, "ariaLabel", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "m", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "mx", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "my", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "mt", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "mr", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "mb", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "ml", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "borderColor", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "borderWidth", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "borderStyle", 2);
__decorateClass([
  (0, import_decorators26.property)({ type: Boolean, reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "border", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "elevation", 2);
__decorateClass([
  (0, import_decorators26.query)("#tooltip")
], MteIconButton.prototype, "tooltipElement", 2);
__decorateClass([
  (0, import_decorators26.query)("#trigger")
], MteIconButton.prototype, "overlayTriggerElement", 2);
__decorateClass([
  onUpdate(["label", "ariaLabel"], { on: "both" })
], MteIconButton.prototype, "handleLabelChange", 1);
MteIconButton = __decorateClass([
  defineElement("mte-icon-button")
], MteIconButton);

// src/atomic/nav/nav-icon-button.element.ts
var import_if_defined4 = require("lit/directives/if-defined.js");
var import_lit32 = require("lit");
var import_decorators27 = require("lit/decorators.js");

// src/atomic/nav/nav-icon-button.styles.ts
var import_lit30 = require("lit");
var styles17 = import_lit30.css`:host{--background:transparent;--padding-y:calc(var(--mte-space-xs) + var(--mte-space-xxs));--padding-x:var(--padding-y);--border-radius:var(--mte-border-radius-full);--focus-radius:var(--mte-border-radius-full);--icon-size:20px;--color:inherit}:host([radius=sm]){--border-radius:var(--mte-border-radius-sm);--focus-radius:var(--mte-border-radius-md)}:host mte-icon{height:var(--icon-size);min-height:var(--icon-size);min-width:var(--icon-size);width:var(--icon-size)}:host([size=sm]) mte-icon{--icon-size:12px}:host([size=lg]) mte-icon{--icon-size:20px}`;

// src/atomic/nav/nav-button.styles.ts
var import_lit31 = require("lit");
var styles18 = import_lit31.css`:host{--background:transparent;--color:inherit;--padding-y:var(--mte-space-sm);--padding-x:var(--mte-space-sm);--border-radius:var(--mte-border-radius-md);--focus-radius:var(--mte-border-radius-lg);--icon-size:16px;--gap:var(--mte-space-xxs);align-items:center;display:flex;justify-content:center}.button{-webkit-appearance:none;background:var(--button-background,var(--background));border:var(--border-style) var(--border-width) var(--border-color);border-radius:var(--border-radius);color:var(--button-color,var(--color));cursor:pointer;font-family:var(--mte-font-family-sans);outline:none!important;overflow:visible;padding:var(--padding-y) var(--padding-x);position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:auto;will-change:box-shadow;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-button-font-size);font-weight:var(--mte-font-set-button-font-weight);line-height:var(--mte-font-set-button-line-height);line-height:1;text-decoration:inherit;text-transform:inherit}.button,.button .label{align-items:center;display:inline-flex;justify-content:center}.button .label{gap:var(--gap)}:host([active]:not([appliedpreset=cx]):not([appliedpreset=rx])) .button:after{background:var(--mte-focus);bottom:calc(var(--header-padding-y)*-1);content:"";height:3px;left:0;position:absolute;right:0}:host([active][appliedpreset=rx]) .button:after{background:rgb(var(--mte-core-primary-dark-c-rgb));bottom:calc(var(--header-padding-y)*-1);content:"";height:3px;left:0;position:absolute;right:0}.button:active,.button:hover{outline:none;--color:inherit}.button:hover{--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a))}.button:active{--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a))}.button:focus-visible:not(.disabled):not([disabled]):not(:disabled):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--focus-radius);border-bottom-right-radius:var(--focus-radius);border-top-left-radius:var(--focus-radius);border-top-right-radius:var(--focus-radius);box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;inset:0;pointer-events:none;position:absolute;z-index:9}.button::-moz-focus-inner{border:0;padding:0}:host([disabled]) .button{cursor:not-allowed!important;--color:var(--mte-disabled-4)!important;box-shadow:none!important;text-shadow:none!important}:host([disabled]) .button:active,:host([disabled]) .button:hover{--background:transparent!important}`;

// src/atomic/nav/nav-icon-button.element.ts
var MteNavIconButton = class extends PresetMixinFactory("MteNavIconButton", {
  reflectAppliedPreset: true
})(StylePartsMixin(MteElement)) {
  constructor() {
    super(...arguments);
    this.iconLibrary = "_default";
    this.labelPosition = "bottom";
    this.badgeDot = false;
    this.disabled = false;
    this.role = "listitem";
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("label")) {
      if (this.overlayTriggerElement && !this.overlayTriggerElement.overlayElement) {
        this.overlayTriggerElement.overlayElement = this.tooltipElement;
        this.overlayTriggerElement.triggerElement = this;
      }
    }
  }
  handleButtonClick(e) {
    if (this.disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      return false;
    }
    if (this.iref) {
      e.preventDefault();
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
  renderButtonTemplate() {
    const href = this.href ?? this.iref;
    const contentsTemplate = import_lit32.html`<mte-icon name="${(0, import_if_defined4.ifDefined)(this.icon)}" library="${(0, import_if_defined4.ifDefined)(this.iconLibrary)}" part="icon"></mte-icon>`;
    return href ? import_lit32.html`<a id="anchor" class="button" part="button" href="${href}" target="${(0, import_if_defined4.ifDefined)(this.target)}" download="${(0, import_if_defined4.ifDefined)(this.download)}" ?disabled="${this.disabled}" aria-label="${this.label}" @click="${this.handleButtonClick}">${contentsTemplate}</a>` : import_lit32.html`<button class="button" part="button" ?disabled="${this.disabled}" aria-label="${this.label}" @click="${this.handleButtonClick}">${contentsTemplate}</button>`;
  }
  render() {
    return import_lit32.html`${this.instanceStyles} ${this.badge || this.badgeDot ? import_lit32.html`<mte-badge part="badge" size="sm" ?dot="${this.badgeDot}" value="${this.badge}" color="${(0, import_if_defined4.ifDefined)(this.badgeColor)}" role="${(0, import_if_defined4.ifDefined)(this.badgeRole)}" aria-label="${(0, import_if_defined4.ifDefined)(this.badgeAriaLabel)}">${this.renderButtonTemplate()}</mte-badge>` : this.renderButtonTemplate()} ${this.label ? import_lit32.html`<mte-overlay-trigger id="trigger"></mte-overlay-trigger><mte-tooltip id="tooltip" position="${this.labelPosition}" asAriaLabel ?disabled="${this.disabled}">${this.label}</mte-tooltip>` : null}`;
  }
};
MteNavIconButton.styles = [styles7, styles18, styles17];
__decorateClass([
  (0, import_decorators27.property)({ reflect: true })
], MteNavIconButton.prototype, "icon", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true })
], MteNavIconButton.prototype, "iconLibrary", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true })
], MteNavIconButton.prototype, "label", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true })
], MteNavIconButton.prototype, "labelPosition", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true })
], MteNavIconButton.prototype, "href", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true })
], MteNavIconButton.prototype, "iref", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true })
], MteNavIconButton.prototype, "target", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true })
], MteNavIconButton.prototype, "download", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true })
], MteNavIconButton.prototype, "badge", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true })
], MteNavIconButton.prototype, "badgeColor", 2);
__decorateClass([
  (0, import_decorators27.property)()
], MteNavIconButton.prototype, "badgeRole", 2);
__decorateClass([
  (0, import_decorators27.property)()
], MteNavIconButton.prototype, "badgeAriaLabel", 2);
__decorateClass([
  (0, import_decorators27.property)({ type: Boolean, reflect: true })
], MteNavIconButton.prototype, "badgeDot", 2);
__decorateClass([
  (0, import_decorators27.property)({ type: Boolean, reflect: true })
], MteNavIconButton.prototype, "disabled", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true })
], MteNavIconButton.prototype, "role", 2);
__decorateClass([
  (0, import_decorators27.query)("#anchor")
], MteNavIconButton.prototype, "anchorElement", 2);
__decorateClass([
  (0, import_decorators27.query)(".button")
], MteNavIconButton.prototype, "buttonElement", 2);
__decorateClass([
  (0, import_decorators27.query)("#tooltip")
], MteNavIconButton.prototype, "tooltipElement", 2);
__decorateClass([
  (0, import_decorators27.query)("#trigger")
], MteNavIconButton.prototype, "overlayTriggerElement", 2);
__decorateClass([
  (0, import_decorators27.eventOptions)({ capture: true })
], MteNavIconButton.prototype, "handleButtonClick", 1);
MteNavIconButton = __decorateClass([
  defineElement("mte-nav-icon-button")
], MteNavIconButton);

// src/atomic/nav/nav-header.element.ts
var import_icons2 = require("@mortar/icons");
MteIconRegistryService.registerIcons([import_icons2.mtrIconMenu]);
var nextUniqueId4 = 0;
var MteNavHeader = class extends InverseMixin(
  WaitForFrameworkMixin(
    PresetMixinFactory("MteNavHeader", {
      reflectAppliedPreset: true
    })(StylePartsMixin(MteElement))
  )
) {
  constructor() {
    super(...arguments);
    this.internalId = nextUniqueId4++;
    this.logoHref = "/";
    this.withContainer = false;
    this.withoutContainer = false;
    this.withCenterLogo = false;
    this.withoutLogoLink = false;
    this.role = "navigation";
    this.ariaLabel = "Primary Navigation";
    this.id = `mte-nav-header--${this.internalId}`;
    this.sidebarModeOver = false;
    this.hideMenuUntilTransition = false;
    this.beforeInit = true;
    this.passive = false;
    this.withinMobileBreakpoint = false;
    // Update local state with global nav state changes
    this.signalStateController = new SignalStateController(
      this,
      [navState.sidebar, navState.inverse, navState.withinMobileBreakpoint],
      ([sidebar, inverse, withinMobileBreakpoint]) => {
        this.inverse = inverse === "header";
        this.withinMobileBreakpoint = withinMobileBreakpoint;
        if (sidebar) {
          this.sidebarModeOver = sidebar.overlayMode === "over";
          this.hideMenuUntilTransition = sidebar.hideUntilTransition;
          this.sidebarOpened = sidebar.opened;
          this.sidebar = sidebar.element;
        }
      }
    );
    this.slotController = new SlotController(this, { updateOnChange: ["name"] });
  }
  handleStateChange() {
    this.updateGlobalState();
  }
  handleLogoChange() {
    if (this.appliedPreset === "cx") {
      this.defaultLogo = import_lit33.html`<svg class="cx-logo" viewBox="0 0 104 36" xmlns="http://www.w3.org/2000/svg">${hebLogoInverseSvgContents}</svg>`;
    } else if (this.appliedPreset === "rx") {
      this.defaultLogo = import_lit33.html`<svg class="rx-logo" viewBox="0 0 348 92" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.687 43.066c3.272 0 7.24-.205 7.24-4.582 0-4.172-3.559-4.499-6.831-4.499h-4.132v9.08h3.723Zm-3.723 27.037H.402V23.268h19.103c4.581 0 9.694.123 13.703 2.454 4.376 2.577 6.953 7.24 6.953 12.272 0 4.417-1.718 8.671-5.194 11.453-3.6 2.945-8.263 3.6-12.763 3.6h-7.24v17.056ZM44.579 23.268h13.498v16.035c2.577-3.15 5.727-4.786 9.817-4.786 3.395 0 7.036.94 8.958 3.804 1.964 2.986 1.964 6.34 1.964 9.899v21.843H65.317v-21.68c0-2.331-.49-4.295-3.272-4.295-2.168 0-3.968 1.555-3.968 5.032v20.943H44.58V23.267ZM105.69 53.783c-3.272.327-8.754 1.35-8.754 5.604 0 2.25 1.432 3.19 3.559 3.19 5.113 0 5.195-4.295 5.195-8.14v-.654Zm1.186 16.32a23.58 23.58 0 0 1-.491-4.826c-2.74 4.008-6.626 5.522-11.412 5.522-6.463 0-12.148-3.559-12.148-10.512 0-5.523 4.294-9.204 9.121-10.717 4.418-1.35 9.163-1.923 13.703-2.168v-.287c0-3.15-.818-4.376-4.09-4.376-2.66 0-4.909.94-5.318 3.886l-12.435-1.146c2.045-8.671 10.308-10.921 18.162-10.921 4.09 0 9.367.532 12.762 2.986 4.581 3.19 4.008 7.69 4.008 12.68v12.23c0 2.577.082 5.195 1.105 7.65h-12.967ZM191.139 35.212v4.704h.122c1.923-3.558 5.4-5.4 9.49-5.4 4.295 0 7.69 1.637 9.817 5.4 2.373-3.886 5.849-5.4 10.431-5.4 2.945 0 6.054.9 8.099 2.987 2.536 2.577 2.536 6.013 2.536 9.694v22.866h-13.253V49.12c0-2.25.286-4.786-2.863-4.786-3.804 0-3.682 3.558-3.682 6.34v19.389h-13.253V49.12c0-2.168-.122-4.99-3.068-4.99-3.19 0-3.476 2.372-3.476 4.99v20.943h-13.253v-34.85h12.353ZM258.672 53.783c-3.273.327-8.754 1.35-8.754 5.604 0 2.25 1.432 3.19 3.559 3.19 5.113 0 5.195-4.295 5.195-8.14v-.654Zm1.145 16.32a23.58 23.58 0 0 1-.491-4.826c-2.74 4.008-6.626 5.522-11.412 5.522-6.504 0-12.149-3.559-12.149-10.512 0-5.523 4.295-9.204 9.163-10.717 4.418-1.35 9.162-1.923 13.703-2.168v-.287c0-3.15-.818-4.376-4.091-4.376-2.658 0-4.908.94-5.317 3.886l-12.435-1.146c2.045-8.671 10.308-10.921 18.161-10.921 4.091 0 9.368.532 12.763 2.986 4.581 3.19 4.008 7.69 4.008 12.68v12.23c0 2.577.082 5.195 1.105 7.65h-13.008ZM310.047 56.973c-1.227 9-7.649 13.785-16.525 13.785-5.031 0-9.163-1.145-12.844-4.786-3.559-3.558-5.195-8.262-5.195-13.253 0-10.512 7.24-18.202 17.957-18.202 8.59 0 15.421 5.031 16.444 13.785l-11.944 1.022-.082-.327c-.491-2.373-1.023-5.113-4.009-5.113-4.295 0-4.295 5.645-4.295 8.753 0 3.273.082 8.59 4.5 8.59 2.945 0 4.008-2.658 4.376-5.195l11.617.941ZM331.154 53.783l6.054-18.57h9.98L333.731 72.19c-2.577 7.24-6.054 9.98-13.867 9.98-2.045 0-4.172-.081-6.872-.327V72.15c1.636.204 3.273.409 4.909.409 1.84 0 5.931.082 5.931-2.659 0-1.022-.532-2.168-.9-3.15l-12.23-31.537h14.684l5.768 18.57Z" fill="#fff"/><path d="M130.069 26.909c7.117 0 12.925-5.686 12.925-12.926S137.227.853 130.069.853H76.607c-7.117 0-12.926 5.89-12.926 13.13 0 7.281 5.768 12.926 12.926 12.926h53.462Z" fill="#EE3224"/><path fill-rule="evenodd" clip-rule="evenodd" d="M63.48 13.983c0-7.348 5.896-13.33 13.127-13.33h53.462c7.272 0 13.126 5.982 13.126 13.33 0 7.352-5.899 13.126-13.126 13.126H76.607c-7.268 0-13.126-5.733-13.126-13.126Zm13.127-12.93c-7.004 0-12.725 5.798-12.725 12.93 0 7.169 5.676 12.725 12.725 12.725h53.462c7.008 0 12.725-5.597 12.725-12.725 0-7.133-5.681-12.93-12.725-12.93H76.607Z" fill="#EE3224"/><path d="M129.496 25.763c6.913 0 12.312-5.195 12.312-11.821 0-6.627-5.195-11.985-12.107-11.985H76.607h.164c-6.913 0-11.904 5.358-11.904 11.985 0 6.626 4.99 11.821 11.904 11.821h52.725Z" fill="#fff"/><path d="M129.005 24.74c6.709 0 11.74-4.703 11.74-10.757 0-6.054-5.031-10.962-11.74-10.962H77.466h.164c-6.709 0-11.535 4.908-11.535 10.962 0 6.054 4.826 10.758 11.535 10.758h51.375Z" fill="#EE3224"/><path d="M142.626 23.677v-.409h.287c.122 0 .286.041.286.205 0 .204-.164.204-.327.204h-.246Zm0 .164h.246l.327.573h.205l-.369-.573c.205-.041.328-.123.328-.368 0-.246-.164-.368-.45-.368h-.491v1.309h.204v-.573Zm-.654-.082c0-.532.409-.94.9-.94.491 0 .9.408.9.94 0 .573-.409.94-.9.94-.491 0-.9-.408-.9-.94Zm.9 1.145c.613 0 1.145-.49 1.145-1.145 0-.654-.532-1.145-1.145-1.145-.614 0-1.145.49-1.145 1.145s.531 1.145 1.145 1.145ZM74.725 7.806h5.89l-.122 5.4h3.559l-.205-5.318h5.727l-.532 11.944h-4.827l-.163-4.172h-3.64l-.083 4.09h-4.99l-.614-11.944ZM97.06 7.97h14.684l-.164 3.272h-8.753v2.045h6.299l-.082 2.373h-6.299v2.045h8.549l-.082 2.209H97.591L97.059 7.97ZM91.414 13.37h3.64v2.208h-3.558l-.082-2.209ZM113.503 13.37h3.436v2.29h-3.436v-2.29ZM119.556 19.996l-.531-12.026h11.085c2.168 0 3.804 1.309 3.804 3.436 0 2.332-1.8 3.15-2.495 3.19v.082c1.104.246 1.759.818 1.759 2.29 0 2.864-2.659 3.069-4.091 3.069l-9.531-.041Z" fill="#fff"/><path d="M124.833 17.828v-2.209h2.004c.614 0 1.187.327 1.187 1.064 0 .695-.778 1.145-1.596 1.145h-1.595ZM124.874 13.574v-2.536h2.004c.778 0 1.596.45 1.596 1.309 0 .695-.941 1.227-1.759 1.227h-1.841ZM138.618 40.448h5.849c1.391 0 2.863 0 4.131.49 1.432.614 2.25 1.882 2.25 3.191 0 3.354-3.763 3.723-6.913 3.723h-5.277v-7.404h-.04Zm31.659 30.146 13.622-18.08h-12.926l-7.527 10.513-6.176-8.835c5.522-2.087 8.631-5.236 8.631-10.308 0-3.804-1.841-7.24-5.768-9.285-3.518-1.923-8.017-2.373-12.148-2.373h-23.929v38.86h14.602v-14.85h3.559l11.658 15.095-15.135 20.124h13.171l8.672-12.23 8.672 12.23h16.689l-15.667-20.86Z" fill="#EE3224"/></svg>`;
    } else {
      if (this.inverse) {
        this.defaultLogo = import_lit33.html`<svg class="px-logo" viewBox="0 0 92 32" xmlns="http://www.w3.org/2000/svg">${hebLogoWhiteCopyrightSvgContents}</svg>`;
      } else {
        this.defaultLogo = import_lit33.html`<svg class="px-logo" viewBox="0 0 92 32" xmlns="http://www.w3.org/2000/svg">${hebLogoSvgContents}</svg>`;
      }
    }
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.beforeInit = false;
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      setTimeout(() => {
        this.updateGlobalState();
      });
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateGlobalState();
    this.slotController.watchSlots(["start", "end"]).subscribe((changes) => {
      if (changes) {
        this.updateGlobalState();
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    deleteNavElementState("header", this);
  }
  updateGlobalState() {
    if (!this.passive) {
      updateNavElementState("header", this, {
        element: this,
        height: this.offsetHeight,
        withContainer: !this.withoutContainer && this.withContainer
      });
    } else {
      deleteNavElementState("header", this);
    }
  }
  renderLogo() {
    return import_lit33.html`<div class="logo" part="logo" aria-hidden="true"><slot name="logo">${this.defaultLogo}</slot></div><div class="name ${(0, import_class_map3.classMap)({ visible: this.name || this.slotController.check("name") })}" part="name"><slot name="name">${this.name}</slot></div>`;
  }
  /** Focuses the proper first focusable item within the nav header */
  focus() {
    if (this.sidebar) {
      this.menuButtonElem?.focus({ preventScroll: true });
    } else if (!this.withoutLogoLink) {
      this.logoLinkElem?.focus({ preventScroll: true });
    } else if (this.startElements?.length > 0) {
      this.startElements[0].focus({ preventScroll: true });
    }
  }
  render() {
    return import_lit33.html`${this.instanceStyles}<div class="overflow-container" part="wrapper"><div class="container flex ${(0, import_class_map3.classMap)({
      "grid-container": !this.withoutContainer && this.withContainer
    })}" part="container"><div class="menu ${(0, import_class_map3.classMap)({
      visible: this.sidebar && !this.sidebarOpened && !this.hideMenuUntilTransition || this.withinMobileBreakpoint
    })}" part="menu"><slot name="menu">${this.sidebar ? import_lit33.html`<mte-nav-icon-button id="default-menu-button" .se="${{ "--button-background": "initial" }}" icon="menu" label="${this.sidebarOpened ? "Close Sidebar" : "Open Sidebar"}" @click="${() => {
      this.sidebar.open();
    }}"></mte-nav-icon-button>` : null}</slot></div>${this.withoutLogoLink ? import_lit33.html`<div class="logo-container">${this.renderLogo()}</div>` : import_lit33.html`<a class="logo-container" href="${this.logoHref}" aria-label="${(0, import_if_defined5.ifDefined)(this.ariaLogoLabel ?? this.name)}">${this.renderLogo()}</a>`}<div class="start" part="start"><slot name="start"></slot></div><div class="end" part="end"><slot name="end"></slot></div></div></div>`;
  }
};
MteNavHeader.styles = [styles7, styles2, styles10, styles9];
// Disable change-in-update warnings here because we want to handle state changes during init ASAP
MteNavHeader.enabledWarnings = [];
__decorateClass([
  (0, import_decorators28.property)({ reflect: true })
], MteNavHeader.prototype, "name", 2);
__decorateClass([
  (0, import_decorators28.property)({ reflect: true })
], MteNavHeader.prototype, "logoHref", 2);
__decorateClass([
  presetProperty({ type: Boolean, reflect: true })
], MteNavHeader.prototype, "withContainer", 2);
__decorateClass([
  (0, import_decorators28.property)({ type: Boolean, reflect: true })
], MteNavHeader.prototype, "withoutContainer", 2);
__decorateClass([
  (0, import_decorators28.property)({ type: Boolean, reflect: true })
], MteNavHeader.prototype, "withCenterLogo", 2);
__decorateClass([
  (0, import_decorators28.property)({ type: Boolean, reflect: true })
], MteNavHeader.prototype, "withoutLogoLink", 2);
__decorateClass([
  (0, import_decorators28.property)({ reflect: true })
], MteNavHeader.prototype, "role", 2);
__decorateClass([
  (0, import_decorators28.property)({ attribute: "aria-label", reflect: true })
], MteNavHeader.prototype, "ariaLabel", 2);
__decorateClass([
  (0, import_decorators28.property)({ reflect: false })
], MteNavHeader.prototype, "ariaLogoLabel", 2);
__decorateClass([
  (0, import_decorators28.property)({ reflect: true })
], MteNavHeader.prototype, "id", 2);
__decorateClass([
  (0, import_decorators28.property)({ type: Boolean, reflect: true })
], MteNavHeader.prototype, "sidebarModeOver", 2);
__decorateClass([
  (0, import_decorators28.property)({ type: Boolean, reflect: true })
], MteNavHeader.prototype, "hideMenuUntilTransition", 2);
__decorateClass([
  (0, import_decorators28.property)({ type: Boolean, reflect: true })
], MteNavHeader.prototype, "beforeInit", 2);
__decorateClass([
  (0, import_decorators28.property)({ type: Boolean, reflect: true })
], MteNavHeader.prototype, "passive", 2);
__decorateClass([
  (0, import_decorators28.state)()
], MteNavHeader.prototype, "withinMobileBreakpoint", 2);
__decorateClass([
  (0, import_decorators28.state)()
], MteNavHeader.prototype, "sidebar", 2);
__decorateClass([
  (0, import_decorators28.state)()
], MteNavHeader.prototype, "sidebarOpened", 2);
__decorateClass([
  (0, import_decorators28.state)()
], MteNavHeader.prototype, "defaultLogo", 2);
__decorateClass([
  (0, import_decorators28.query)("#default-menu-button")
], MteNavHeader.prototype, "menuButtonElem", 2);
__decorateClass([
  (0, import_decorators28.query)(".logo-container")
], MteNavHeader.prototype, "logoLinkElem", 2);
__decorateClass([
  (0, import_decorators28.queryAssignedElements)({
    slot: "start",
    selector: '[href], [tabindex]:not([tabindex="-1"]), mte-nav-button, mte-nav-icon-button',
    flatten: true
  })
], MteNavHeader.prototype, "startElements", 2);
__decorateClass([
  onUpdate(["withContainer", "withoutContainer", "passive"], { waitUntilFirstUpdate: true })
], MteNavHeader.prototype, "handleStateChange", 1);
__decorateClass([
  onUpdate(["appliedPreset", "inverse"], { on: "both" })
], MteNavHeader.prototype, "handleLogoChange", 1);
MteNavHeader = __decorateClass([
  defineElement("mte-nav-header")
], MteNavHeader);

// src/atomic/nav/nav-sub-header.element.ts
var import_class_map4 = require("lit/directives/class-map.js");
var import_lit35 = require("lit");
var import_decorators29 = require("lit/decorators.js");

// src/atomic/nav/nav-sub-header.styles.ts
var import_lit34 = require("lit");
var styles19 = import_lit34.css`:host{--background:var(--mte-surface-2);--color:var(--mte-ink-1);--border-color:var(--mte-border-1);--padding-x:var(--mte-space-sm);--padding-y:var(--mte-space-sm);--header-padding-y:var(--padding-y);--gap:var(--mte-space-sm);align-items:center;background:var(--background);border-bottom:1px solid var(--border-color);color:var(--color);display:flex;flex-direction:row;gap:var(--gap);overflow-x:auto;padding:var(--padding-y) var(--padding-x);width:100%}:host([appliedpreset=cx]){--padding-y:calc(var(--mte-space-xs) + var(--mte-space-xxs))}:host([appliedpreset=cx]:not([inverse])){--background:rgb(var(--mte-core-primary-dark-rgb));--color:rgb(var(--mte-core-primary-dark-c-rgb));--button-background:rgb(var(--mte-core-primary-dark-rgb));--button-color:rgb(var(--mte-core-primary-dark-c-rgb))}.end,.start{align-items:center;display:flex;flex-direction:row;flex-grow:1;gap:var(--gap)}.start{justify-content:flex-start}.end{justify-content:flex-end}`;

// src/atomic/nav/nav-sub-header.element.ts
var nextUniqueId5 = 0;
var MteNavSubHeader = class extends WaitForFrameworkMixin(
  PresetMixinFactory("MteNavSubHeader", {
    reflectAppliedPreset: true
  })(StylePartsMixin(MteElement))
) {
  constructor() {
    super(...arguments);
    this.internalId = nextUniqueId5++;
    this.withContainer = false;
    this.withoutContainer = false;
    this.role = "navigation";
    this.ariaLabel = "Secondary Navigation";
    this.id = `mte-nav-sub-header--${this.internalId}`;
    this.passive = false;
    // Update local state with global nav state changes
    this.signalStateController = new SignalStateController(this, [navState.header], ([header]) => {
      if (header) {
        this.withContainer = header.withContainer;
      }
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateGlobalState();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    deleteNavElementState("subheader", this);
  }
  updateGlobalState() {
    if (!this.passive) {
      updateNavElementState("subheader", this, {
        element: this
      });
    } else {
      deleteNavElementState("subheader", this);
    }
  }
  render() {
    return import_lit35.html`${this.instanceStyles}<div class="container flex ${(0, import_class_map4.classMap)({ "grid-container": this.withContainer })}" part="container"><div class="start" part="start"><slot name="start"></slot></div><div class="end" part="end"><slot name="end"></slot></div></div>`;
  }
};
MteNavSubHeader.styles = [styles7, styles2, styles10, styles19];
__decorateClass([
  presetProperty({ type: Boolean, reflect: true })
], MteNavSubHeader.prototype, "withContainer", 2);
__decorateClass([
  (0, import_decorators29.property)({ type: Boolean, reflect: true })
], MteNavSubHeader.prototype, "withoutContainer", 2);
__decorateClass([
  (0, import_decorators29.property)({ reflect: true })
], MteNavSubHeader.prototype, "role", 2);
__decorateClass([
  (0, import_decorators29.property)({ attribute: "aria-label", reflect: true })
], MteNavSubHeader.prototype, "ariaLabel", 2);
__decorateClass([
  (0, import_decorators29.property)({ reflect: true })
], MteNavSubHeader.prototype, "id", 2);
__decorateClass([
  (0, import_decorators29.property)({ type: Boolean, reflect: true })
], MteNavSubHeader.prototype, "passive", 2);
MteNavSubHeader = __decorateClass([
  defineElement("mte-nav-sub-header")
], MteNavSubHeader);

// src/atomic/nav/nav-sidebar.element.ts
var import_class_map5 = require("lit/directives/class-map.js");
var import_decorators35 = require("lit/decorators.js");

// src/atomic/nav/nav-sidebar.styles.ts
var import_lit36 = require("lit");
var styles20 = import_lit36.css`:host{--size:var(--sidebar-size);--fallback-border-right:solid 1px;border-bottom:var(--sidebar-border-bottom,initial);border-left:var(--sidebar-border-left,initial);border-right:var(--sidebar-border-right,initial);border-top:var(--sidebar-border-top,initial);border-color:var(--border-color,var(--mte-border-1));bottom:var(--sidebar-position-bottom,unset);box-sizing:border-box;display:block;height:min(var(--sidebar-height,100%),100%);left:var(--sidebar-position-left,unset);pointer-events:none;position:sticky;right:var(--sidebar-position-right,unset);top:var(--sidebar-position-top,unset);top:0;transform:var(--sidebar-transform,initial);transition:visibility var(--sidebar-visibility-time,var(--transition-time)) var(--sidebar-transition-fn,var(--transition-fn)),transform var(--sidebar-transition-time,var(--transition-time)) var(--sidebar-transition-fn,var(--transition-fn));visibility:var(--sidebar-visibility,hidden);width:min(var(--sidebar-width,--size,350px),100%);z-index:var(--nav-z-index);z-index:1000}:host([beforeInit]:not([preferSidebar=closed]):not([hasOpenedOnce])) .panel{transition:none}:host([aria-hidden=true]){visibility:hidden}:host .panel{--sidebar-height:100vh!important;border-right:none!important;height:100vh!important;pointer-events:auto}:host([beforeInit]) .panel{transition:none!important}:host([position=left]) .panel,:host([position=right]) .panel{height:100%;width:var(--size)}.header{align-items:center;border-bottom:1px solid var(--border-color);border-right:var(--sidebar-border-right,var(--fallback-border-right));border-color:var(--border-color,var(--mte-border-1));box-sizing:border-box;display:flex;flex-direction:row;min-height:max(-moz-fit-content,var(--mte-nav-header-height,57px));min-height:max(fit-content,var(--mte-nav-header-height,57px));padding:calc(var(--mte-space-sm) + var(--mte-space-xs))}:host([headerInverse]) .header{--background:var(--mte-surface-inverse);--color:var(--mte-ink-inverse);--border-color:var(--mte-border-inverse);background:var(--background);border-color:var(--border-color);color:var(--color);position:relative;transform-style:preserve-3d}.content-container,.footer{border-right:var(--sidebar-border-right,var(--fallback-border-right));border-color:var(--border-color,var(--mte-border-1))}.flex-spacer{flex-grow:1}:host([position=top]) .panel{border-bottom:var(--sidebar-border);border-right:none}:host([position=right]) .panel{border-left:var(--sidebar-border);border-right:none}:host([position=bottom]) .panel{border-right:none;border-top:var(--sidebar-border)}:host([position=left]) .panel{border-right:var(--sidebar-border)}`;

// src/atomic/drawer/drawer.styles.ts
var import_lit37 = require("lit");
var styles21 = import_lit37.css`:host{display:block;--size:350px;--background:var(--mte-surface-2);--color:var(--mte-ink-1);--padding:var(--mte-space-md);--border-color:var(--mte-border-1);--header-divider:solid 1px var(--border-color);--footer-divider:solid 1px var(--border-color);--panel-border:solid 1px var(--border-color);--transition-duration:200ms;--transition-fn:cubic-bezier(0.4,0,0.2,1)}:host(:not([opened]):not([openedFull])) .panel{height:1px!important;position:absolute!important;width:1px!important;clip:rect(0 0 0 0)!important;border:none!important;clip-path:inset(50%)!important;overflow:hidden!important;padding:0!important;white-space:nowrap!important}:host .panel{background:var(--background);border-color:var(--mte-border-1);color:var(--color);display:flex;flex-direction:column;overflow:auto;pointer-events:auto;position:absolute;transition:visibility var(--transition-duration) var(--transition-fn),transform var(--transition-duration) var(--transition-fn);visibility:hidden;will-change:transform;z-index:1}:host([slot=overlay]) .panel{box-shadow:var(--mte-elevation-z3);max-width:100%;position:fixed}:host([position=left]) .panel,:host([position=right]) .panel{height:100%;width:min(100vw,var(--size))}:host([position=bottom]) .panel,:host([position=top]) .panel{height:min(100vh,var(--size));max-height:100vh;width:100%}:host([position=left]) .panel{left:0;top:0;transform:translate(-100%)}:host([position=top]) .panel{left:0;top:0;transform:translateY(-100%)}:host([position=right]) .panel{right:0;top:0;transform:translate(100%)}:host([position=bottom]) .panel{bottom:0;left:0;transform:translateY(100%)}:host([withoutHeaderDivider]){--header-divider:none}:host([withoutFooterDivider]){--footer-divider:none}:host .panel.opened{transform:translate(0);transition:visibility var(--transition-duration) var(--transition-fn),transform var(--transition-duration) var(--transition-fn);visibility:visible}:host ::slotted(mte-content),:host ::slotted(mte-footer),:host ::slotted(mte-header){--composition-padding-y:var(--padding);--composition-padding-x:var(--padding)}:host ::slotted(mte-header){--composition-divider:var(--header-divider)}:host ::slotted(mte-footer){--composition-divider:var(--footer-divider)}.content-container,.header{background:var(--background)}.content-container{display:flex;flex-grow:1;min-height:0;overflow:hidden;position:relative}.content{flex-grow:1;overflow:auto;will-change:transform}.content::-webkit-scrollbar{width:14px}.content::-webkit-scrollbar-track{border-radius:10px}.content::-webkit-scrollbar-thumb{background:var(--mte-border-2);background-clip:padding-box;border:3px solid transparent;border-radius:10px}.content ::slotted(mte-content){padding-bottom:var(--composition-padding-y);padding-top:var(--composition-padding-y)}.footer{background:var(--background)}@media screen and (prefers-reduced-motion:reduce){:host .panel,:host .panel.opened{transition:none}}`;

// src/atomic/composition/header.element.ts
var import_lit44 = require("lit");
var import_decorators32 = require("lit/decorators.js");

// src/atomic/title/title.element.ts
var import_styles17 = require("@mortar/styles");
var import_lit42 = require("lit");
var import_decorators31 = require("lit/decorators.js");

// src/atomic/title/title.styles.ts
var import_lit38 = require("lit");
var styles22 = import_lit38.css`:host{display:block;text-wrap:balance}:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-subtitle-font-size);font-weight:var(--mte-font-set-subtitle-font-weight);line-height:var(--mte-font-set-subtitle-line-height);text-decoration:inherit;text-transform:inherit}:host([subtitle]){font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height)}:host([heading="1"]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-h1-font-size);font-weight:var(--mte-font-set-h1-font-weight);line-height:var(--mte-font-set-h1-line-height);text-decoration:inherit;text-transform:inherit}:host([heading="2"]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-h2-font-size);font-weight:var(--mte-font-set-h2-font-weight);line-height:var(--mte-font-set-h2-line-height);text-decoration:inherit;text-transform:inherit}:host([heading="3"]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-h3-font-size);font-weight:var(--mte-font-set-h3-font-weight);line-height:var(--mte-font-set-h3-line-height);text-decoration:inherit;text-transform:inherit}:host([heading="4"]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-h4-font-size);font-weight:var(--mte-font-set-h4-font-weight);line-height:var(--mte-font-set-h4-line-height);text-decoration:inherit;text-transform:inherit}:host([heading="5"]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-h5-font-size);font-weight:var(--mte-font-set-h5-font-weight);line-height:var(--mte-font-set-h5-line-height);text-decoration:inherit;text-transform:inherit}:host([heading="6"]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-h6-font-size);font-weight:var(--mte-font-set-h6-font-weight);line-height:var(--mte-font-set-h6-line-height);text-decoration:inherit;text-transform:inherit}:host([heading=caption]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);text-decoration:inherit;text-transform:inherit}:host([heading=subtitle]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-subtitle-font-size);font-weight:var(--mte-font-set-subtitle-font-weight);line-height:var(--mte-font-set-subtitle-line-height);text-decoration:inherit;text-transform:inherit}:host([subtitle]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-body1-font-size);font-weight:var(--mte-font-set-body1-font-weight);line-height:var(--mte-font-set-body1-line-height);text-decoration:inherit;text-transform:inherit}:host([inCard]:not([heading])){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-subtitle-font-size);font-weight:var(--mte-font-set-subtitle-font-weight);line-height:var(--mte-font-set-subtitle-line-height);text-decoration:inherit;text-transform:inherit}:host([inCard][subtitle]:not([heading])){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);text-decoration:inherit;text-transform:inherit}:host([subtitle]){color:var(--mte-ink-2)!important}`;

// src/atomic/text/text.element.ts
var import_styles15 = require("@mortar/styles");
var import_lit40 = require("lit");
var import_decorators30 = require("lit/decorators.js");

// src/atomic/text/text.styles.ts
var import_lit39 = require("lit");
var styles23 = import_lit39.css`:host{--color:inherit;color:var(--color);display:inline-block}:host([lineClamp]){display:-webkit-inline-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}:host([lineClamp][block]){display:-webkit-box}:host([noWrap]){display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([size=xxs]){font-size:.625rem}:host([size=xs]){font-size:.75rem}:host([size=sm]){font-size:.875rem}:host([size=md]){font-size:1rem}:host([size=lg]){font-size:1.25rem}:host([size=xl]){font-size:1.5rem}:host([size=xxl]){font-size:1.75rem}:host([muted]){--color:var(--mte-ink-2)}`;

// src/atomic/text/text.element.ts
var MteText = class extends MteContentBase {
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    let shouldUpdateStyles = false;
    for (const key of changedProps.keys()) {
      if (MteText._styleProps.has(key)) {
        shouldUpdateStyles = true;
        break;
      }
    }
    if (shouldUpdateStyles) {
      let textDecoration;
      if (this.underline) {
        textDecoration = `underline${this.strikethrough ? " line-through" : ""}`;
      } else if (this.strikethrough) {
        textDecoration = "line-through";
      }
      let wordSpacing;
      if (this.wordSpacing === "sm") {
        wordSpacing = "-0.05em";
      } else if (this.wordSpacing === "lg") {
        wordSpacing = "0.05em";
      }
      let letterSpacing;
      if (this.letterSpacing === "sm") {
        letterSpacing = "-0.02em";
      } else if (this.letterSpacing === "lg") {
        letterSpacing = "0.02em";
      }
      this.setInstanceStyle("text", (0, import_styles15.selectorFactory)(":host:host:host:host:host"), {
        "-webkit-line-clamp": this.lineClamp,
        "maxWidth": Number.isFinite(this.maxCharWidth) ? `${Math.round(this.maxCharWidth < 0 ? 0 : this.maxCharWidth)}ch` : null,
        "word-break": this.wordBreak,
        "word-spacing": wordSpacing,
        "letter-spacing": letterSpacing,
        "white-space": this.whiteSpace,
        "font-style": this.italic ? "italic" : void 0,
        "text-align": this.align,
        "text-decoration": textDecoration,
        "text-transform": this.transform,
        "text-wrap": this.textWrap
      });
    }
  }
  render() {
    return import_lit40.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteText.styles = [styles7, styles23];
MteText._styleProps = /* @__PURE__ */ new Set([
  "align",
  "italic",
  "lineClamp",
  "maxCharWidth",
  "strikethrough",
  "transform",
  "underline",
  "whiteSpace",
  "wordBreak",
  "wordSpacing",
  "letterSpacing",
  "textWrap"
]);
__decorateClass([
  (0, import_decorators30.property)({ reflect: true })
], MteText.prototype, "align", 2);
__decorateClass([
  (0, import_decorators30.property)({ reflect: true })
], MteText.prototype, "size", 2);
__decorateClass([
  (0, import_decorators30.property)({ reflect: true })
], MteText.prototype, "transform", 2);
__decorateClass([
  (0, import_decorators30.property)({ reflect: true })
], MteText.prototype, "wordBreak", 2);
__decorateClass([
  (0, import_decorators30.property)({ reflect: true })
], MteText.prototype, "wordSpacing", 2);
__decorateClass([
  (0, import_decorators30.property)({ reflect: true })
], MteText.prototype, "letterSpacing", 2);
__decorateClass([
  (0, import_decorators30.property)({ reflect: true })
], MteText.prototype, "whiteSpace", 2);
__decorateClass([
  (0, import_decorators30.property)({ type: Boolean, reflect: true })
], MteText.prototype, "underline", 2);
__decorateClass([
  (0, import_decorators30.property)({ type: Boolean, reflect: true })
], MteText.prototype, "italic", 2);
__decorateClass([
  (0, import_decorators30.property)({ type: Boolean, reflect: true })
], MteText.prototype, "strikethrough", 2);
__decorateClass([
  (0, import_decorators30.property)({ type: Boolean, reflect: true })
], MteText.prototype, "muted", 2);
__decorateClass([
  (0, import_decorators30.property)({ reflect: true })
], MteText.prototype, "lineClamp", 2);
__decorateClass([
  (0, import_decorators30.property)({ reflect: true })
], MteText.prototype, "textWrap", 2);
__decorateClass([
  (0, import_decorators30.property)({ type: Boolean, reflect: true })
], MteText.prototype, "noWrap", 2);
__decorateClass([
  (0, import_decorators30.property)({ type: Number, reflect: true })
], MteText.prototype, "maxCharWidth", 2);
MteText = __decorateClass([
  defineElement("mte-text")
], MteText);

// src/atomic/text/mark.element.ts
var import_styles16 = require("@mortar/styles");
var import_lit41 = require("lit");
var MteMark = class extends StatusColorMixin(MteElement) {
  connectedCallback() {
    super.connectedCallback();
    if (!this.color) {
      this.color = "warning";
    }
  }
  render() {
    return import_lit41.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteMark.styles = [
  styles7,
  css7` :host { display: inline-block; margin-right: -2px; margin-left: -2px; padding-right: 2px; padding-left: 2px; } /** Status PG Variants */ ${(0, import_styles16.forEachPGVariant)(
    "status",
    (g, p) => css7` :host([color='${p}']) { background: ${(0, import_styles16.color)({ g, p, c: "light", o: "sm" })}; color: inherit; } `
  )} `
];
MteMark = __decorateClass([
  defineElement("mte-mark")
], MteMark);

// src/atomic/title/title.element.ts
var MteTitle = class extends MteText {
  handleHeadingChange() {
    if (this.heading) {
      this.role = "heading";
      this.ariaLevel = this.heading;
    } else {
      this.role = void 0;
      this.ariaLevel = void 0;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.inCard = this.isInHeader();
    if (this.inCard) {
      this.slot = "title";
    }
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("align")) {
      this.setInstanceStyle("text", (0, import_styles17.selectorFactory)(":host:host:host"), {
        textAlign: this.align
      });
    }
  }
  render() {
    return import_lit42.html`${this.instanceStyles}<slot></slot>`;
  }
  isInHeader() {
    return this.parentElement?.tagName === "MTE-HEADER";
  }
};
MteTitle.styles = [...MteText.styles, styles22];
__decorateClass([
  (0, import_decorators31.property)()
], MteTitle.prototype, "align", 2);
__decorateClass([
  (0, import_decorators31.property)({ reflect: true })
], MteTitle.prototype, "heading", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Boolean, reflect: true })
], MteTitle.prototype, "subtitle", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Boolean, reflect: true })
], MteTitle.prototype, "muted", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Boolean, reflect: true })
], MteTitle.prototype, "inCard", 2);
__decorateClass([
  (0, import_decorators31.property)({ reflect: true })
], MteTitle.prototype, "role", 2);
__decorateClass([
  (0, import_decorators31.property)({ attribute: "aria-level", reflect: true })
], MteTitle.prototype, "ariaLevel", 2);
__decorateClass([
  onUpdate("heading", { on: "both" })
], MteTitle.prototype, "handleHeadingChange", 1);
MteTitle = __decorateClass([
  defineElement("mte-title")
], MteTitle);

// src/atomic/composition/header.styles.ts
var import_lit43 = require("lit");
var styles24 = import_lit43.css`:host{--composition-padding-y:var(--mte-space-md);--composition-padding-x:var(--mte-space-md);--composition-divider:none;--action-margin:var(--mte-space-md);align-items:center;border-bottom:var(--composition-divider);direction:row;display:flex;padding:var(--composition-padding-y) var(--composition-padding-x)}:host([withBorder]){--composition-divider:solid 1px var(--mte-border-1)}.title{display:flex;flex-direction:column;justify-content:center}.content{align-items:center;direction:row;display:flex;flex-grow:1}.action{align-self:flex-start;display:block;flex-grow:0;flex-shrink:0;margin-left:var(--action-margin)}`;

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
    return import_lit44.html`${this.instanceStyles}<slot name="title" class="title" part="title"><mte-title>${this.label}</mte-title></slot><slot class="content" part="content"></slot><slot name="action" class="action" part="action">${this.withClose ? import_lit44.html`<mte-icon-button class="close-button" icon="close" density="compact" type="${this.closeType}" aria-label="${this.closeAriaLabel}" @click="${(e) => {
      this._onClose.emit(e);
      this._doClose.emit(e);
    }}"></mte-icon-button>` : null}</slot>`;
  }
};
MteHeader.styles = [styles7, styles24];
__decorateClass([
  (0, import_decorators32.property)()
], MteHeader.prototype, "label", 2);
__decorateClass([
  (0, import_decorators32.property)({ type: Boolean, reflect: true })
], MteHeader.prototype, "withClose", 2);
__decorateClass([
  (0, import_decorators32.property)({ reflect: true })
], MteHeader.prototype, "closeAriaLabel", 2);
__decorateClass([
  (0, import_decorators32.property)({ reflect: true })
], MteHeader.prototype, "closeType", 2);
__decorateClass([
  (0, import_decorators32.property)({ type: Boolean, reflect: true })
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
var import_lit46 = require("lit");

// src/atomic/composition/content.styles.ts
var import_lit45 = require("lit");
var styles25 = import_lit45.css`:host{--composition-padding-y:var(--mte-space-md);--composition-padding-x:var(--mte-space-md);display:block;padding-left:var(--composition-padding-x);padding-right:var(--composition-padding-x);position:relative}:not(mte-header)+:host{padding-top:var(--composition-padding-y)}:host+:not(mte-footer){padding-bottom:var(--composition-padding-y)}`;

// src/atomic/composition/content.element.ts
var MteContent = class extends MteContentBase {
  render() {
    return import_lit46.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteContent.styles = [styles7, styles25];
MteContent = __decorateClass([
  defineElement("mte-content")
], MteContent);

// src/atomic/composition/footer.element.ts
var import_lit48 = require("lit");
var import_decorators33 = require("lit/decorators.js");

// src/atomic/composition/footer.styles.ts
var import_lit47 = require("lit");
var styles26 = import_lit47.css`:host{--composition-padding-y:var(--mte-space-md);--composition-padding-x:var(--mte-space-md);--composition-divider:none;border-top:var(--composition-divider);display:block;padding:var(--composition-padding-y) var(--composition-padding-x)}:host([actions]){align-items:center;display:flex;flex-direction:row;gap:var(--mte-space-sm);justify-content:flex-end}:host([withBorder]){--composition-divider:solid 1px var(--mte-border-1)}`;

// src/atomic/composition/footer.element.ts
var MteFooter = class extends MteContentBase {
  constructor() {
    super(...arguments);
    this.actions = false;
    this.withBorder = false;
  }
  render() {
    return import_lit48.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteFooter.styles = [styles7, styles26];
__decorateClass([
  (0, import_decorators33.property)({ type: Boolean, reflect: true })
], MteFooter.prototype, "actions", 2);
__decorateClass([
  (0, import_decorators33.property)({ type: Boolean, reflect: true })
], MteFooter.prototype, "withBorder", 2);
MteFooter = __decorateClass([
  defineElement("mte-footer")
], MteFooter);

// src/atomic/composition/condition.element.ts
var import_if_defined6 = require("lit/directives/if-defined.js");
var import_lit50 = require("lit");
var import_decorators34 = require("lit/decorators.js");

// src/atomic/composition/condition.styles.ts
var import_lit49 = require("lit");
var styles27 = import_lit49.css`:host{align-items:center;color:var(--mte-ink-3);display:flex;justify-content:center;padding:var(--mte-space-sm);text-align:center;width:100%}`;

// src/atomic/composition/condition.element.ts
var import_icons3 = require("@mortar/icons");
MteIconRegistryService.registerIcons([
  import_icons3.mtrIconCheckCircle,
  import_icons3.mtrIconAlertCircle,
  import_icons3.mtrIconAlert,
  import_icons3.mtrIconInformation
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
    return import_lit50.html`${this.instanceStyles} ${this.loading ? import_lit50.html`<mte-spinner diameter="${Number(this.size)}"></mte-spinner>` : icon ? import_lit50.html`<mte-icon name="${icon}" color="${(0, import_if_defined6.ifDefined)(this.getColor(this.color, this.muted, this.type))}" size="${this.size}"></mte-icon>` : null}`;
  }
  getColor(color2, muted, type) {
    if (muted) {
      return null;
    }
    if (color2) {
      return color2;
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
MteCondition.styles = [styles7, styles27];
__decorateClass([
  (0, import_decorators34.property)({ reflect: true })
], MteCondition.prototype, "type", 2);
__decorateClass([
  (0, import_decorators34.property)({ reflect: true })
], MteCondition.prototype, "icon", 2);
__decorateClass([
  (0, import_decorators34.property)({ type: Boolean, reflect: true })
], MteCondition.prototype, "muted", 2);
__decorateClass([
  (0, import_decorators34.property)({ type: Boolean, reflect: true })
], MteCondition.prototype, "loading", 2);
__decorateClass([
  (0, import_decorators34.property)({ type: Number, reflect: true })
], MteCondition.prototype, "size", 2);
MteCondition = __decorateClass([
  defineElement("mte-condition")
], MteCondition);

// src/atomic/composition/section.element.ts
var import_lit52 = require("lit");

// src/atomic/composition/section.styles.ts
var import_lit51 = require("lit");
var styles28 = import_lit51.css`:host{display:block;position:relative}`;

// src/atomic/composition/section.element.ts
var MteSection = class extends MteContentBase {
  render() {
    return import_lit52.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteSection.styles = [styles7, styles28];
MteSection = __decorateClass([
  defineElement("mte-section")
], MteSection);

// src/atomic/nav/nav-sidebar.element.ts
var import_styles18 = require("@mortar/styles");
var import_lit53 = require("lit");
var nextUniqueId6 = 0;
var MteNavSidebar = class extends InverseMixin(
  OverlayMixin(
    WaitForFrameworkMixin(
      PresetMixinFactory("MteNavSidebar", {
        reflectAppliedPreset: true
      })(StylePartsMixin(MteElement))
    )
  )
) {
  constructor() {
    super();
    this.internalId = nextUniqueId6++;
    this.instanceStyleSelectorRoot = ":host:host:host:host:host:host .panel";
    this.withoutHeaderDivider = false;
    this.withoutFooterDivider = false;
    this.role = "complementary";
    this.ariaLabel = "Sidebar Navigation";
    this.ariaHidden = "false";
    this.id = `mte-nav-sidebar--${this.internalId}`;
    this.position = "left";
    this.hideUntilTransition = false;
    this.closeAriaLabel = "Close";
    this.opened = false;
    this.headerInverse = false;
    this.beforeInit = true;
    this.headerHeight = null;
    this.mobileBreakpoint = "lg";
    this.hasOpenedOnce = false;
    this.passive = false;
    this.detectChildCloseController = new DetectChildCloseController(this);
    // Update local state with global nav state changes
    this.signalStateController = new SignalStateController(
      this,
      [
        navState.header,
        navState.preferSidebar,
        navState.inverse,
        navState.withinMobileBreakpoint,
        navState.sidebarSize
      ],
      ([header, preferSidebar, inverse, withinMobileBreakpoint, sidebarSize]) => {
        this.inverse = inverse === "sidebar";
        this.headerInverse = inverse === "header";
        this.preferSidebar = preferSidebar;
        this.size = sidebarSize;
        if (header) {
          this.headerHeight = header.height;
          this.headerElem = header.element;
        }
        if (withinMobileBreakpoint && this.overlayMode !== "over") {
          this.setOverlayMode("over");
          this.close();
        } else if (!withinMobileBreakpoint) {
          if (this.preferSidebar !== "closed") {
            if (!this.hasOpenedOnce) {
              this.setOverlayMode("push");
              this.readyForAnimation = true;
              this.open();
            }
            if (this.overlayMode !== "push" && !this.opened) {
              this.setOverlayMode("push");
              this.open();
            } else {
              this.setOverlayMode("push");
            }
          } else {
            this.close();
          }
        }
      }
    );
    if (isSsr()) {
      this.handleSsrChange();
    }
  }
  get animationDuration() {
    return import_styles18.config.animation.transitionDurationJs.short * 1e3;
  }
  // Empty setter included for compatibility reasons
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  set animationDuration(animationDuration) {
  }
  handleTargetChange() {
    this.updateTriggerAriaAttributes();
  }
  handleStateChange() {
    this.updateGlobalState();
  }
  handleSsrChange() {
    this.opened = this.preferSidebar !== "closed";
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateGlobalState();
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.initState();
  }
  initState() {
    if (this.beforeInit) {
      if (!this.overlayMode) {
        this.setOverlayMode("push");
      }
      if (this.preferSidebar === "closed") {
        this.close();
      } else if (this.preferSidebar === "opened") {
        const activeBreakpoint = getCurrentBreakpoint(globalThis.window);
        const withinTransition = belowMobileBreakpoint(activeBreakpoint, this.mobileBreakpoint);
        if (!withinTransition) {
          this.open();
        } else {
          this.close();
        }
      }
      this.updateGlobalState();
      setTimeout(() => {
        this.beforeInit = false;
      });
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    deleteNavElementState("sidebar", this);
  }
  updateGlobalState() {
    if (!this.passive) {
      updateNavElementState("sidebar", this, {
        element: this,
        position: this.position,
        opened: this.opened,
        overlayMode: this.overlayMode,
        hideUntilTransition: this.hideUntilTransition
      });
    } else {
      deleteNavElementState("sidebar", this);
    }
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (isSsr() && this.headerHeight || changedProps.has("headerHeight") && this.headerHeight || changedProps.has("size")) {
      this.setInstanceStyle("nav-root", (0, import_styles18.selectorFactory)(this.instanceStyleSelectorRoot), {
        "--mte-nav-header-height": `${this.headerHeight}px`,
        ...isSsr() ? {} : { "--size": mapNumberToPx(this.size) }
      });
    }
  }
  updateTriggerAriaAttributes() {
    if (this.targetElement) {
      this.targetElement.setAttribute("role", "button");
      this.targetElement.setAttribute("aria-expanded", `${this.opened}`);
      this.targetElement.setAttribute("aria-controls", this.id);
    }
  }
  /** Opens the sidebar */
  open() {
    return new Promise((resolve) => {
      this.handleOverlayOpen({
        willOpen: () => {
          this.ariaHidden = this.opened ? "false" : "true";
          if (this.targetElement) {
            this.targetElement.setAttribute("aria-expanded", "true");
          }
        }
      }).then(() => {
        setTimeout(() => {
          this.handleOverlayOpenEnd().then(() => {
            if (!this.hasOpenedOnce) {
              this.hasOpenedOnce = true;
            } else if (this.overlayMode !== "over" && !isFocusTrapActive()) {
              this.closeButtonElem.focus({ preventScroll: true });
            }
            resolve();
          });
        }, this.animationDuration);
      });
    });
  }
  /** Closes the sidebar */
  close() {
    return new Promise((resolve) => {
      this.handleOverlayClose().then(() => {
        setTimeout(() => {
          if (this.targetElement) {
            this.targetElement.setAttribute("aria-expanded", "false");
          }
          this.handleOverlayCloseEnd().then(() => {
            if (this.hasOpenedOnce && !isFocusTrapActive()) {
              this.headerElem?.focus({ preventScroll: true });
            }
            this.ariaHidden = this.opened ? "false" : "true";
            resolve();
          });
        }, this.animationDuration);
      });
    });
  }
  /** Toggles the sidebar open and closed */
  toggle() {
    if (this.opened) {
      return this.close();
    } else {
      return this.open();
    }
  }
  setOverlayMode(mode = "push") {
    if (mode === "over") {
      this.setOverlayOptions({
        withFocusTrap: true,
        withCloseOnClickOutside: true,
        withScrollLock: true,
        withCloseOnEscape: true,
        withPortal: true,
        withDimBackdrop: true,
        returnToOriginOnClose: true,
        focusTrapTarget: this.panelElem
      });
    } else {
      this.setOverlayOptions({
        withFocusTrap: false,
        withCloseOnClickOutside: false,
        withScrollLock: false,
        withCloseOnEscape: false,
        withPortal: false,
        withDimBackdrop: false,
        focusTrapTarget: this.panelElem
      });
    }
    this.overlayMode = mode;
  }
  render() {
    return import_lit53.html`${this.instanceStyles}<div class="panel ${(0, import_class_map5.classMap)({ opened: this.opened && this.readyForAnimation })}"><div class="header" part="header"><span class="flex-spacer"></span><mte-nav-icon-button class="close-button" icon="close" label="Close Sidebar" labelPosition="left" role="presentation" @click="${() => this.close()}"></mte-nav-icon-button></div><div class="content-container"><div class="content" part="content" role="navigation"><slot></slot></div></div><div class="footer" part="footer"><slot name="footer"></slot></div></div>`;
  }
};
MteNavSidebar.styles = [styles7, styles2, styles21, styles4, styles20];
// Disable change-in-update warnings here because we want to handle state changes during init ASAP
MteNavSidebar.enabledWarnings = [];
__decorateClass([
  (0, import_decorators35.property)({ reflect: true, type: Boolean })
], MteNavSidebar.prototype, "withoutHeaderDivider", 2);
__decorateClass([
  (0, import_decorators35.property)({ reflect: true, type: Boolean })
], MteNavSidebar.prototype, "withoutFooterDivider", 2);
__decorateClass([
  (0, import_decorators35.property)({ reflect: true })
], MteNavSidebar.prototype, "role", 2);
__decorateClass([
  (0, import_decorators35.property)({ attribute: "aria-label", reflect: true })
], MteNavSidebar.prototype, "ariaLabel", 2);
__decorateClass([
  (0, import_decorators35.property)({ attribute: "aria-describedby", reflect: true })
], MteNavSidebar.prototype, "ariaDescribedBy", 2);
__decorateClass([
  (0, import_decorators35.property)({ attribute: "aria-hidden", reflect: true })
], MteNavSidebar.prototype, "ariaHidden", 2);
__decorateClass([
  (0, import_decorators35.property)({ reflect: true })
], MteNavSidebar.prototype, "id", 2);
__decorateClass([
  (0, import_decorators35.property)({ reflect: true })
], MteNavSidebar.prototype, "position", 2);
__decorateClass([
  (0, import_decorators35.property)({ type: Object })
], MteNavSidebar.prototype, "targetElement", 2);
__decorateClass([
  presetProperty({ type: Boolean, reflect: true })
], MteNavSidebar.prototype, "hideUntilTransition", 2);
__decorateClass([
  (0, import_decorators35.property)()
], MteNavSidebar.prototype, "closeAriaLabel", 2);
__decorateClass([
  (0, import_decorators35.property)({ type: Boolean, reflect: true })
], MteNavSidebar.prototype, "opened", 2);
__decorateClass([
  (0, import_decorators35.property)({ type: Boolean, reflect: true })
], MteNavSidebar.prototype, "headerInverse", 2);
__decorateClass([
  (0, import_decorators35.property)({ type: Boolean, reflect: true })
], MteNavSidebar.prototype, "beforeInit", 2);
__decorateClass([
  (0, import_decorators35.property)({ reflect: true })
], MteNavSidebar.prototype, "preferSidebar", 2);
__decorateClass([
  (0, import_decorators35.property)({ type: Number, reflect: true })
], MteNavSidebar.prototype, "animationDuration", 1);
__decorateClass([
  (0, import_decorators35.state)()
], MteNavSidebar.prototype, "overlayMode", 2);
__decorateClass([
  (0, import_decorators35.state)()
], MteNavSidebar.prototype, "headerHeight", 2);
__decorateClass([
  (0, import_decorators35.state)()
], MteNavSidebar.prototype, "mobileBreakpoint", 2);
__decorateClass([
  (0, import_decorators35.state)()
], MteNavSidebar.prototype, "size", 2);
__decorateClass([
  (0, import_decorators35.query)(".close-button")
], MteNavSidebar.prototype, "closeButtonElem", 2);
__decorateClass([
  (0, import_decorators35.query)(".panel")
], MteNavSidebar.prototype, "panelElem", 2);
__decorateClass([
  (0, import_decorators35.property)({ type: Boolean, reflect: true })
], MteNavSidebar.prototype, "hasOpenedOnce", 2);
__decorateClass([
  (0, import_decorators35.property)({ type: Boolean, reflect: true })
], MteNavSidebar.prototype, "passive", 2);
__decorateClass([
  onUpdate(["targetElement", "id"])
], MteNavSidebar.prototype, "handleTargetChange", 1);
__decorateClass([
  onUpdate(["position", "opened", "overlayMode", "hideUntilTransition", "passive"])
], MteNavSidebar.prototype, "handleStateChange", 1);
__decorateClass([
  onUpdate(["preferSidebar"], { on: "ssr" })
], MteNavSidebar.prototype, "handleSsrChange", 1);
MteNavSidebar = __decorateClass([
  defineElement("mte-nav-sidebar")
], MteNavSidebar);

// src/atomic/nav/nav-content.element.ts
var import_lit55 = require("lit");

// src/atomic/nav/nav-content.styles.ts
var import_lit54 = require("lit");
var styles29 = import_lit54.css``;

// src/atomic/nav/nav-content.element.ts
var import_decorators36 = require("lit/decorators.js");
var MteNavContent = class extends WaitForFrameworkMixin(
  PresetMixinFactory("MteNavContent", {
    reflectAppliedPreset: true
  })(StylePartsMixin(MteContentBase))
) {
  constructor() {
    super(...arguments);
    this.role = "main";
  }
  render() {
    return import_lit55.html`${this.instanceStyles}<div class="container" part="container"><slot></slot></div>`;
  }
};
MteNavContent.styles = [styles7, styles10, styles29];
__decorateClass([
  (0, import_decorators36.property)({ reflect: true })
], MteNavContent.prototype, "role", 2);
MteNavContent = __decorateClass([
  defineElement("mte-nav-content")
], MteNavContent);

// src/atomic/nav/nav-footer.element.ts
var import_lit57 = require("lit");

// src/atomic/nav/nav-footer.styles.ts
var import_lit56 = require("lit");
var styles30 = import_lit56.css`:host{--background:var(--mte-surface-2);--color:var(--mte-ink-1);--border-color:var(--mte-border-1);--border:solid 1px var(--border-color);background:var(--background);border-top:var(--border);color:var(--color);display:block;overflow-x:auto;width:100%}:host([appliedpreset=cx]:not([inverse])),:host([appliedpreset=rx]:not([inverse])){--background:var(--mte-surface-4);--color:var(--mte-ink-5);--border:none}`;

// src/atomic/nav/nav-footer.element.ts
var import_decorators37 = require("lit/decorators.js");
var import_class_map6 = require("lit/directives/class-map.js");
var MteNavFooter = class extends InverseMixin(
  WaitForFrameworkMixin(
    PresetMixinFactory("MteNavFooter", {
      reflectAppliedPreset: true
    })(StylePartsMixin(MteContentBase))
  )
) {
  constructor() {
    super(...arguments);
    this.withContainer = false;
    this.withoutContainer = false;
    this.role = "contentinfo";
  }
  render() {
    return import_lit57.html`${this.instanceStyles}<div class="container ${(0, import_class_map6.classMap)({
      "grid-container": !this.withoutContainer && this.withContainer,
      "grid-container-fluid": !this.withoutContainer && !this.withContainer
    })}" part="container"><slot></slot></div>`;
  }
};
MteNavFooter.styles = [styles7, styles2, styles10, styles30];
__decorateClass([
  presetProperty({ type: Boolean, reflect: true })
], MteNavFooter.prototype, "withContainer", 2);
__decorateClass([
  (0, import_decorators37.property)({ type: Boolean, reflect: true })
], MteNavFooter.prototype, "withoutContainer", 2);
__decorateClass([
  (0, import_decorators37.property)({ reflect: true })
], MteNavFooter.prototype, "role", 2);
MteNavFooter = __decorateClass([
  defineElement("mte-nav-footer")
], MteNavFooter);

// src/atomic/nav/nav-button.element.ts
var import_if_defined7 = require("lit/directives/if-defined.js");
var import_lit58 = require("lit");
var import_decorators38 = require("lit/decorators.js");
var MteNavButton = class extends AutoActiveLinkMixin(
  PresetMixinFactory("MteNavButton", {
    reflectAppliedPreset: true
  })(StylePartsMixin(MteElement))
) {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.role = "listitem";
  }
  handleButtonClick(e) {
    if (this.disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      return false;
    }
    if (this.iref) {
      e.preventDefault();
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
  renderButtonTemplate() {
    const href = this.href ?? this.iref;
    const contentsTemplate = import_lit58.html`<div class="label" part="label"><slot></slot></div>`;
    return href ? import_lit58.html`<a id="anchor" class="button" part="button" href="${href}" target="${(0, import_if_defined7.ifDefined)(this.target)}" download="${(0, import_if_defined7.ifDefined)(this.download)}" ?disabled="${this.disabled}" @click="${this.handleButtonClick}">${contentsTemplate}</a>` : import_lit58.html`<button class="button" part="button" ?disabled="${this.disabled}" @click="${this.handleButtonClick}">${contentsTemplate}</button>`;
  }
  render() {
    return import_lit58.html`${this.instanceStyles}${this.renderButtonTemplate()}`;
  }
};
MteNavButton.styles = [styles7, styles18];
__decorateClass([
  (0, import_decorators38.property)({ reflect: true })
], MteNavButton.prototype, "href", 2);
__decorateClass([
  (0, import_decorators38.property)({ reflect: true })
], MteNavButton.prototype, "iref", 2);
__decorateClass([
  (0, import_decorators38.property)({ reflect: true })
], MteNavButton.prototype, "target", 2);
__decorateClass([
  (0, import_decorators38.property)({ reflect: true })
], MteNavButton.prototype, "download", 2);
__decorateClass([
  (0, import_decorators38.property)({ type: Boolean, reflect: true })
], MteNavButton.prototype, "disabled", 2);
__decorateClass([
  (0, import_decorators38.property)({ reflect: true })
], MteNavButton.prototype, "role", 2);
__decorateClass([
  (0, import_decorators38.query)("#anchor")
], MteNavButton.prototype, "anchorElement", 2);
__decorateClass([
  (0, import_decorators38.query)(".button")
], MteNavButton.prototype, "buttonElement", 2);
__decorateClass([
  (0, import_decorators38.eventOptions)({ capture: true })
], MteNavButton.prototype, "handleButtonClick", 1);
MteNavButton = __decorateClass([
  defineElement("mte-nav-button")
], MteNavButton);

// src/atomic/nav/nav-button-group.element.ts
var import_if_defined8 = require("lit/directives/if-defined.js");
var import_decorators39 = require("lit/decorators.js");
var import_lit60 = require("lit");

// src/atomic/nav/nav-button-group.styles.ts
var import_lit59 = require("lit");
var styles31 = import_lit59.css`:host{display:contents}ul{display:flex;list-style-type:none;margin:0;padding:0}:host([direction=columnReverse]) ul,:host([direction=column]) ul{align-items:stretch;flex-direction:column}:host([direction=rowReverse]) ul,:host([direction=row]) ul{align-items:center;flex-direction:row}`;

// src/atomic/nav/nav-button-group.element.ts
var import_styles19 = require("@mortar/styles");
var MteNavButtonGroup = class extends MteContentBase {
  constructor() {
    super(...arguments);
    this.direction = "row";
    this.gap = `var(--gap, ${import_styles19.config.space.md})`;
    this.contentStyleSelectorRoot = ":host:host:host:host:host:host ul";
    this.instanceStyleSelectorRoot = ":host:host:host:host:host:host ul";
    this._inheritedAttributes = {};
  }
  handleLabelChange(changes) {
    if (changes.has("ariaLabel")) {
      this._inheritedAttributes = {
        ...this._inheritedAttributes,
        ariaLabel: this.ariaLabel
      };
      this.removeAttribute("aria-label");
    }
  }
  render() {
    return import_lit60.html`${this.instanceStyles}<ul aria-label="${(0, import_if_defined8.ifDefined)(this._inheritedAttributes.ariaLabel)}"><slot></slot></ul>`;
  }
};
MteNavButtonGroup.styles = [styles7, styles31];
__decorateClass([
  (0, import_decorators39.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteNavButtonGroup.prototype, "direction", 2);
__decorateClass([
  (0, import_decorators39.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteNavButtonGroup.prototype, "gap", 2);
__decorateClass([
  (0, import_decorators39.property)({ attribute: "aria-label", reflect: true })
], MteNavButtonGroup.prototype, "ariaLabel", 2);
__decorateClass([
  onUpdate("ariaLabel", { on: "both" })
], MteNavButtonGroup.prototype, "handleLabelChange", 1);
MteNavButtonGroup = __decorateClass([
  defineElement("mte-nav-button-group")
], MteNavButtonGroup);

// src/atomic/nav/nav-item.element.ts
var import_if_defined10 = require("lit/directives/if-defined.js");
var import_lit66 = require("lit");
var import_decorators42 = require("lit/decorators.js");

// src/atomic/nav/nav-item.styles.ts
var import_lit61 = require("lit");
var styles32 = import_lit61.css`:host{--background:transparent;--color:inherit;--disabled-color:var(--mte-disabled-4);--padding-x:var(--mte-space-sm);--padding-y:var(--mte-space-sm);--margin-x:0;--margin-y:var(--mte-space-xs);--border-radius:var(--mte-border-radius-md);--focus-radius:var(--mte-border-radius-md);--icon-size:18px;--gap:var(--mte-space-sm);--child-indent:calc(var(--mte-space-lg) + var(--mte-space-xs));--font-size:var(--mte-font-set-button-font-size);--font-weight:var(--mte-font-weight-medium)}.container{margin:var(--margin-y) var(--margin-x)}.button{align-items:center;-webkit-appearance:none;background:var(--background);border:var(--border-style) var(--border-width) var(--border-color);border-radius:var(--border-radius);box-sizing:border-box;color:var(--color);cursor:pointer;display:flex;font-family:var(--mte-font-family-sans);gap:var(--gap);justify-content:flex-start;max-width:100%;outline:none!important;overflow:hidden;padding:var(--padding-y) var(--padding-x);position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:normal;width:auto;width:100%;will-change:box-shadow;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-button-font-size);font-size:var(--font-size);font-weight:var(--mte-font-set-button-font-weight);font-weight:var(--font-weight);line-height:var(--mte-font-set-button-line-height);line-height:1;text-decoration:inherit;text-transform:inherit}.button .label{margin-bottom:1px;margin-top:1px}:host([active]) .button:not(.href-toggle){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a))}.button:hover{--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a))}.button:active{--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a))}.button:active,.button:hover{outline:none;--color:inherit}.button:focus-visible:not(.disabled):not([disabled]):not(:disabled):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--focus-radius);border-bottom-right-radius:var(--focus-radius);border-top-left-radius:var(--focus-radius);border-top-right-radius:var(--focus-radius);box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;inset:1px;pointer-events:none;position:absolute;z-index:9}.button::-moz-focus-inner{border:0;padding:0}.href-container{align-items:center;display:flex;flex-direction:row;gap:var(--mte-space-xs);justify-content:center}.href-toggle{flex-grow:0;height:-moz-fit-content;height:fit-content;justify-content:center;margin-right:1px;width:-moz-fit-content;width:fit-content}:host([disabled]) .button{box-shadow:none!important;color:var(--disabled-color)!important;cursor:not-allowed!important;text-shadow:none!important}:host([disabled]) .button:active,:host([disabled]) .button:hover{--background:transparent!important}:host ::slotted(mte-icon:not(size)),mte-icon{height:var(--icon-size);min-height:var(--icon-size);min-width:var(--icon-size);width:var(--icon-size)}.suffix-spacer{flex-grow:1}ul{display:block;list-style-type:none;margin:0;padding:0}.collapse{margin-left:var(--child-indent);position:relative}.collapse:before{background:var(--mte-border-1);bottom:var(--mte-space-sm);content:"";left:calc(var(--child-indent)/2*-1 + 3px);position:absolute;top:var(--mte-space-sm);width:1px}`;

// src/atomic/badge/badge.element.ts
var import_lit63 = require("lit");
var import_decorators40 = require("lit/decorators.js");
var import_if_defined9 = require("lit-html/directives/if-defined.js");

// src/atomic/badge/badge.styles.ts
var import_lit62 = require("lit");
var styles33 = import_lit62.css`:host{--badge-background:var(--mte-border-2);--badge-color:var(--mte-ink-1);--badge-translate-x:0%;--badge-translate-y:0%;--badge-padding:5px;--badge-outline-color:var(--mte-surface-1);align-items:center;display:inline-flex;position:relative;width:-moz-fit-content;width:fit-content}.content{position:relative}.label{align-items:center;background:var(--badge-background);border-radius:var(--mte-border-radius-full);box-shadow:0 0 0 1px var(--badge-outline-color);box-sizing:content-box;color:var(--badge-color);display:inline-flex;font-family:inherit;font-size:inherit;font-weight:inherit;justify-content:center;line-height:inherit;line-height:1;padding:calc(var(--badge-padding)*.75);pointer-events:none;text-align:center;text-decoration:inherit;text-transform:inherit;transform:translate(var(--badge-translate-x),var(--badge-translate-y));white-space:nowrap;z-index:var(--mte-z-index-10)}:host([size=sm]) .label{font-size:calc(var(--mte-font-set-body1-font-size)*.625);min-height:calc(1ch + var(--badge-padding)*1*2);min-width:1ch;padding:0 calc(var(--badge-padding)*1)}:host .label,:host([size=md]) .label{font-size:calc(var(--mte-font-set-body1-font-size)*.75);min-height:calc(1ch + var(--badge-padding)*1.4*2);min-width:1ch;padding:0 calc(var(--badge-padding)*1.4)}:host([size=lg]) .label{font-size:calc(var(--mte-font-set-body1-font-size)*.9375);min-height:calc(1ch + var(--badge-padding)*1.7*2);min-width:1ch;padding:0 calc(var(--badge-padding)*1.7)}:host([dot]) .label{height:var(--mte-space-comfy-sm);min-height:var(--mte-space-comfy-sm);min-width:var(--mte-space-comfy-sm);padding:0;width:var(--mte-space-comfy-sm)}:host([placement=end]) .label,:host([placement=start]) .label,:host([position=bottom]) .label,:host([position=top]) .label{position:absolute}:host([placement=start]) .label{--badge-translate-x:-50%;left:0;right:unset}:host([placement=end]) .label{--badge-translate-x:50%;left:unset;right:0}:host([position=top]) .label{--badge-translate-y:-50%;bottom:unset;top:0}:host([position=bottom]) .label{--badge-translate-y:50%;bottom:0;top:unset}:host([placement=start][withoutOverlap]) .label{--badge-translate-x:calc(-100% - 2px)}:host([placement=end][withoutOverlap]) .label{--badge-translate-x:calc(100% + 2px)}:host([placement=unset]) .label,:host([position=unset]) .label{position:unset}:host([position=unset]) .label{bottom:unset;top:unset}:host([placement=unset]) .label{left:unset;right:unset}:host([hide]) .label,:host([value="0"]:not([withShowZero])) .label{display:none}:host([color=primary]) .label{--badge-background:rgb(var(--mte-status-primary-base-rgb));--badge-color:rgb(var(--mte-status-primary-base-c-rgb))}:host([color=secondary]) .label{--badge-background:rgb(var(--mte-status-secondary-base-rgb));--badge-color:rgb(var(--mte-status-secondary-base-c-rgb))}:host([color=tertiary]) .label{--badge-background:rgb(var(--mte-status-tertiary-base-rgb));--badge-color:rgb(var(--mte-status-tertiary-base-c-rgb))}:host([color=success]) .label{--badge-background:rgb(var(--mte-status-success-base-rgb));--badge-color:rgb(var(--mte-status-success-base-c-rgb))}:host([color=warning]) .label{--badge-background:rgb(var(--mte-status-warning-base-rgb));--badge-color:rgb(var(--mte-status-warning-base-c-rgb))}:host([color=danger]) .label{--badge-background:rgb(var(--mte-status-danger-base-rgb));--badge-color:rgb(var(--mte-status-danger-base-c-rgb))}:host([withoutOutline]) .label{box-shadow:var(--mte-elevation-z1)}`;

// src/atomic/badge/badge.element.ts
var MteBadge = class extends PresetMixinFactory("MteBadge")(
  StatusColorMixin(SizeMixin(StylePartsMixin(MteElement)))
) {
  constructor() {
    super(...arguments);
    this.position = "top";
    this.placement = "end";
    this.withoutOverlap = false;
    this.dot = false;
    this.withShowZero = false;
    this.hide = false;
    this.withoutOutline = false;
    this._value = "";
    this._inheritedAttributes = {};
  }
  get value() {
    return this._value;
  }
  set value(val) {
    if (typeof val === "string" && Number.isFinite(val)) {
      this._value = Number.parseFloat(val);
    } else {
      this._value = val;
    }
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    if (changedProperties.has("ariaLabel")) {
      this._inheritedAttributes = {
        ...this._inheritedAttributes,
        ariaLabel: this.ariaLabel
      };
      this.removeAttribute("aria-label");
    }
    if (changedProperties.has("role")) {
      this._inheritedAttributes = {
        ...this._inheritedAttributes,
        role: this.role
      };
      this.removeAttribute("role");
    }
  }
  renderLabelTemplate(value) {
    const showLimit = Number.isFinite(this.limit) && Number(value) > this.limit;
    const labelValue = showLimit ? this.limit : value;
    if (this.dot) {
      return import_lit63.html`<span part="label" class="label" aria-label="${(0, import_if_defined9.ifDefined)(this._inheritedAttributes.ariaLabel)}" role="${(0, import_if_defined9.ifDefined)(this._inheritedAttributes.role)}"></span>`;
    }
    return import_lit63.html`<span part="label" class="label" aria-label="${(0, import_if_defined9.ifDefined)(this._inheritedAttributes.ariaLabel)}" role="${(0, import_if_defined9.ifDefined)(this._inheritedAttributes.role)}">${labelValue}${showLimit ? "+" : ""}</span>`;
  }
  render() {
    return import_lit63.html`${this.instanceStyles}<slot></slot>${this.renderLabelTemplate(this.value)}`;
  }
};
MteBadge.styles = [styles7, styles33];
__decorateClass([
  (0, import_decorators40.property)({ reflect: true })
], MteBadge.prototype, "position", 2);
__decorateClass([
  (0, import_decorators40.property)({ reflect: true })
], MteBadge.prototype, "placement", 2);
__decorateClass([
  (0, import_decorators40.property)({ type: Boolean, reflect: true })
], MteBadge.prototype, "withoutOverlap", 2);
__decorateClass([
  (0, import_decorators40.property)({ type: Boolean, reflect: true })
], MteBadge.prototype, "dot", 2);
__decorateClass([
  (0, import_decorators40.property)({ type: Boolean, reflect: true })
], MteBadge.prototype, "withShowZero", 2);
__decorateClass([
  (0, import_decorators40.property)({ type: Boolean, reflect: true })
], MteBadge.prototype, "hide", 2);
__decorateClass([
  (0, import_decorators40.property)({ type: Boolean, reflect: true })
], MteBadge.prototype, "withoutOutline", 2);
__decorateClass([
  (0, import_decorators40.property)({ type: Number })
], MteBadge.prototype, "limit", 2);
__decorateClass([
  (0, import_decorators40.property)()
], MteBadge.prototype, "role", 2);
__decorateClass([
  (0, import_decorators40.property)({ attribute: "aria-label", reflect: true })
], MteBadge.prototype, "ariaLabel", 2);
__decorateClass([
  (0, import_decorators40.property)({ type: [Number, String], reflect: true })
], MteBadge.prototype, "value", 1);
MteBadge = __decorateClass([
  defineElement("mte-badge")
], MteBadge);

// src/atomic/collapse/collapse.element.ts
var import_styles20 = require("@mortar/styles");
var import_lit65 = require("lit");
var import_decorators41 = require("lit/decorators.js");

// src/atomic/collapse/collapse.styles.ts
var import_lit64 = require("lit");
var styles34 = import_lit64.css`:host{display:grid;grid-template-rows:0fr;will-change:grid-template-rows,opacity}.content{overflow:hidden}`;

// src/atomic/collapse/collapse.element.ts
var import_animejs2 = __toESM(require("animejs"), 1);
var nextUniqueId7 = 0;
var MteCollapse = class extends DisabledMixin(
  StylePartsMixin(MteElement)
) {
  constructor() {
    super();
    this.id = `mte-collapse--${nextUniqueId7++}`;
    this.opened = false;
    this.withFade = false;
    this.showOverflow = false;
    this.withoutAnimation = false;
    this.animationDuration = import_styles20.config.animation.transitionDurationJs.short * 1e3;
    this.doShowOverflow = false;
    this.firstUpdateComplete = false;
    this.animationDone = () => {
      this.opacityAnimationRef?.remove();
      this.gridAnimationRef?.remove();
      this.opacityAnimationRef = null;
      this.gridAnimationRef = null;
      this.visibility = this.opened ? "inherit" : "hidden";
      if (this.showOverflow && this.opened) {
        this.overflow = "visible";
      }
    };
    this.toggle = this.toggle.bind(this);
  }
  set triggerElement(newTrigger) {
    if (newTrigger && this._triggerElement !== newTrigger) {
      this._triggerElement?.removeEventListener("click", this.toggle);
      this._triggerElement?.removeAttribute("aria-controls");
      this._triggerElement = newTrigger;
      this._triggerElement.setAttribute("aria-controls", this.id);
      this._triggerElement.addEventListener("click", this.toggle);
      this.updateTriggerA11y();
    }
  }
  get triggerElement() {
    return this._triggerElement;
  }
  handleOpenedChanged() {
    if (isSsr() || !this.firstUpdateComplete) {
      this.opacity = this.opened ? "1" : "0";
      this.visibility = this.opened ? "inherit" : "hidden";
      this.initialGridTemplateRows = this.opened ? "1fr" : "0fr";
    } else {
      if (this.opened) {
        this.visibility = "inherit";
      }
      this.style.overflow = "hidden";
      this.updateTriggerA11y();
      if (!this.withoutAnimation) {
        this.opacityAnimationRef?.pause();
        this.gridAnimationRef?.pause();
        const ease = import_styles20.config.animation.timingFunctionJs.standard;
        const easing = `cubicBezier(${ease[0]}, ${ease[1]}, ${ease[2]}, ${ease[3]})`;
        this.opacityAnimationRef = (0, import_animejs2.default)({
          targets: this,
          opacity: this.withFade ? this.opened ? 1 : 0 : [1, 1],
          duration: this.animationDuration,
          easing,
          complete: () => {
            this.animationDone();
          }
        });
        this.gridAnimationState ??= { rows: this.opened ? 0 : 1 };
        this.gridAnimationRef = (0, import_animejs2.default)({
          targets: this.gridAnimationState,
          rows: this.opened ? [this.gridAnimationState.rows, 1] : [this.gridAnimationState.rows, 0],
          duration: this.animationDuration,
          easing,
          update: () => {
            this.style.gridTemplateRows = `${this.gridAnimationState.rows}fr`;
          }
        });
      } else {
        this.gridAnimationState = null;
        this.opacity = this.opened ? "1" : this.withFade ? "0" : "1";
        this.style.gridTemplateRows = this.opened ? "1fr" : "0fr";
        this.animationDone();
      }
    }
  }
  handleShowOverflow(changedProps) {
    if (isSsr() || !this.firstUpdateComplete) {
      if (this.opened && this.showOverflow) {
        this.overflow = "visible";
      }
    } else {
      if (changedProps.has("showOverflow") && !changedProps.has("opened")) {
        this.overflow = this.showOverflow ? "visible" : "hidden";
      }
    }
  }
  handleTriggerChange(changedProps) {
    const root = this.triggerRoot ?? document;
    this.triggerElement = root.getElementById(this.triggerId);
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this.firstUpdateComplete = true;
  }
  updateTriggerA11y() {
    if (this.triggerElement) {
      this.triggerElement.setAttribute("aria-expanded", this.opened ? "true" : "false");
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.opacityAnimationRef?.remove();
    this.gridAnimationRef?.remove();
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("opacity") || changedProps.has("visibility") || changedProps.has("overflow") || changedProps.has("initialGridTemplateRows")) {
      this.setInstanceStyle("collapse", (0, import_styles20.selectorFactory)(this.instanceStyleSelectorRoot), {
        opacity: this.opacity,
        visibility: this.visibility,
        overflow: this.overflow,
        gridTemplateRows: this.firstUpdateComplete ? null : this.initialGridTemplateRows
      });
    }
  }
  render() {
    return import_lit65.html`${this.instanceStyles}<div class="content" part="content"><slot></slot></div>`;
  }
  toggle() {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  }
  open() {
    if (!this.disabled) {
      this.opened = true;
      this._onOpen.emit(null, { bubbles: false });
    }
  }
  close() {
    if (!this.disabled) {
      this.opened = false;
      this._onClose.emit(null, { bubbles: false });
    }
  }
};
MteCollapse.styles = [styles7, styles34];
__decorateClass([
  (0, import_decorators41.property)({ reflect: true })
], MteCollapse.prototype, "id", 2);
__decorateClass([
  (0, import_decorators41.property)({ type: Boolean, reflect: true })
], MteCollapse.prototype, "opened", 2);
__decorateClass([
  (0, import_decorators41.property)({ type: Boolean, reflect: true })
], MteCollapse.prototype, "withFade", 2);
__decorateClass([
  (0, import_decorators41.property)({ type: Boolean, reflect: true })
], MteCollapse.prototype, "showOverflow", 2);
__decorateClass([
  (0, import_decorators41.property)({ type: Boolean, reflect: true })
], MteCollapse.prototype, "withoutAnimation", 2);
__decorateClass([
  (0, import_decorators41.property)({ type: Number })
], MteCollapse.prototype, "animationDuration", 2);
__decorateClass([
  (0, import_decorators41.property)({ type: Boolean, reflect: true })
], MteCollapse.prototype, "doShowOverflow", 2);
__decorateClass([
  (0, import_decorators41.property)({ reflect: true })
], MteCollapse.prototype, "triggerId", 2);
__decorateClass([
  (0, import_decorators41.property)({ type: Object })
], MteCollapse.prototype, "triggerRoot", 2);
__decorateClass([
  (0, import_decorators41.property)({ type: Object })
], MteCollapse.prototype, "triggerElement", 1);
__decorateClass([
  (0, import_decorators41.state)()
], MteCollapse.prototype, "opacity", 2);
__decorateClass([
  (0, import_decorators41.state)()
], MteCollapse.prototype, "visibility", 2);
__decorateClass([
  (0, import_decorators41.state)()
], MteCollapse.prototype, "overflow", 2);
__decorateClass([
  (0, import_decorators41.state)()
], MteCollapse.prototype, "initialGridTemplateRows", 2);
__decorateClass([
  eventEmitter()
], MteCollapse.prototype, "_onOpen", 2);
__decorateClass([
  eventEmitter()
], MteCollapse.prototype, "_onClose", 2);
__decorateClass([
  (0, import_decorators41.query)(".content")
], MteCollapse.prototype, "contentElem", 2);
__decorateClass([
  onUpdate("opened", { on: "both" })
], MteCollapse.prototype, "handleOpenedChanged", 1);
__decorateClass([
  onUpdate(["opened", "showOverflow"], { on: "both" })
], MteCollapse.prototype, "handleShowOverflow", 1);
__decorateClass([
  onUpdate(["triggerId", "triggerRoot"])
], MteCollapse.prototype, "handleTriggerChange", 1);
MteCollapse = __decorateClass([
  defineElement("mte-collapse")
], MteCollapse);

// src/atomic/nav/nav-item.element.ts
var MteNavItem = class extends AutoActiveLinkMixin(
  SlotObserverMixin(
    WaitForFrameworkMixin(
      PresetMixinFactory("MteNavItem")(
        StylePartsMixin(MteElement)
      )
    )
  )
) {
  constructor() {
    super(...arguments);
    this.iconLibrary = "_default";
    this.badgeDot = false;
    this.opened = false;
    this.disabled = false;
    this.role = "listitem";
  }
  handleButtonClick(e) {
    if (this.disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      return false;
    }
    if (this.iref) {
      e.preventDefault();
    }
  }
  /**
   * Suppresses certain click events so a click cannot cause
   * navigation when it bubbles up to certain framework router tooling.
   */
  suppressEventPropagation(e) {
    e.stopImmediatePropagation();
    e.stopPropagation();
  }
  /** Toggles the section opened state */
  handleToggleClick(e) {
    this.opened = !this.opened;
    if (this.opened) {
      this._onSectionOpen.emit();
    } else {
      this._onSectionClose.emit();
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
  renderButtonTemplate(hasChildren) {
    const href = this.href ?? this.iref;
    const suffixTemplate = (withToggle = true) => import_lit66.html`<slot name="suffix" part="suffix">${withToggle ? import_lit66.html`<mte-icon autosize name="${this.opened ? "chevron-down" : "chevron-right"}"></mte-icon>` : null}</slot>`;
    const contentsTemplate = import_lit66.html`<slot name="prefix" part="prefix">${this.icon ? import_lit66.html`<mte-icon autosize name="${this.icon}" library="${(0, import_if_defined10.ifDefined)(this.iconLibrary)}"></mte-icon>` : null}</slot><div class="label" part="label"><slot></slot></div><slot name="badge">${this.badge || this.badgeDot ? import_lit66.html`<mte-badge part="badge" aria-hidden="true" ?dot="${this.badgeDot}" value="${this.badge}" color="${(0, import_if_defined10.ifDefined)(this.badgeColor)}" size="sm" position="unset" placement="unset" withoutOutline></mte-badge>` : null}</slot><span class="suffix-spacer"></span> ${hasChildren && !href || !hasChildren && href ? suffixTemplate(hasChildren) : null}`;
    return href ? import_lit66.html`<div class="href-container"><a class="button primary" id="anchor" part="button" href="${href}" target="${(0, import_if_defined10.ifDefined)(this.target)}" download="${(0, import_if_defined10.ifDefined)(this.download)}" aria-description="${(0, import_if_defined10.ifDefined)(this.badge ? `Details: ${this.badge}` : null)}" ?disabled="${this.disabled}" @click="${this.handleButtonClick}">${contentsTemplate}</a> ${hasChildren ? import_lit66.html`<button class="button href-toggle" part="button" aria-labelledby="anchor" aria-expanded="${(0, import_if_defined10.ifDefined)(hasChildren ? this.opened ? "true" : "false" : null)}" ?disabled="${this.disabled}" @click="${(e) => {
      this.handleToggleClick(e);
      this.suppressEventPropagation(e);
    }}">${suffixTemplate(true)}</button>` : null}</div>` : import_lit66.html`<button class="button primary" part="toggle" ?disabled="${this.disabled}" aria-description="${(0, import_if_defined10.ifDefined)(this.badge ? `Details: ${this.badge}` : null)}" aria-expanded="${(0, import_if_defined10.ifDefined)(hasChildren ? this.opened ? "true" : "false" : null)}" @click="${(e) => {
      this.handleButtonClick(e);
      this.handleToggleClick(e);
    }}">${contentsTemplate}</button>`;
  }
  render() {
    const hasChildren = this.hasSlot("child");
    return import_lit66.html`${this.instanceStyles}<div class="container">${this.renderButtonTemplate(hasChildren)} ${hasChildren ? import_lit66.html`<div class="collapse"><mte-collapse ?opened="${this.opened}" withFade><ul><slot name="child" @click="${this.suppressEventPropagation}"></slot></ul></mte-collapse></div>` : null}</div>`;
  }
};
MteNavItem.styles = [styles7, styles32];
MteNavItem.shadowRootOptions = { ...MteElement.shadowRootOptions, delegatesFocus: true };
__decorateClass([
  (0, import_decorators42.property)({ reflect: true })
], MteNavItem.prototype, "icon", 2);
__decorateClass([
  (0, import_decorators42.property)({ reflect: true })
], MteNavItem.prototype, "iconLibrary", 2);
__decorateClass([
  (0, import_decorators42.property)({ reflect: true })
], MteNavItem.prototype, "badge", 2);
__decorateClass([
  (0, import_decorators42.property)({ reflect: true })
], MteNavItem.prototype, "badgeColor", 2);
__decorateClass([
  (0, import_decorators42.property)({ type: Boolean, reflect: true })
], MteNavItem.prototype, "badgeDot", 2);
__decorateClass([
  (0, import_decorators42.property)({ type: Boolean, reflect: true })
], MteNavItem.prototype, "opened", 2);
__decorateClass([
  (0, import_decorators42.property)({ reflect: true })
], MteNavItem.prototype, "href", 2);
__decorateClass([
  (0, import_decorators42.property)({ reflect: true })
], MteNavItem.prototype, "iref", 2);
__decorateClass([
  (0, import_decorators42.property)({ reflect: true })
], MteNavItem.prototype, "target", 2);
__decorateClass([
  (0, import_decorators42.property)({ reflect: true })
], MteNavItem.prototype, "download", 2);
__decorateClass([
  (0, import_decorators42.property)({ type: Boolean, reflect: true })
], MteNavItem.prototype, "disabled", 2);
__decorateClass([
  (0, import_decorators42.property)({ reflect: true })
], MteNavItem.prototype, "role", 2);
__decorateClass([
  (0, import_decorators42.query)("#anchor")
], MteNavItem.prototype, "anchorElement", 2);
__decorateClass([
  (0, import_decorators42.query)(".button.primary")
], MteNavItem.prototype, "buttonElement", 2);
__decorateClass([
  eventEmitter()
], MteNavItem.prototype, "_onSectionOpen", 2);
__decorateClass([
  eventEmitter()
], MteNavItem.prototype, "_onSectionClose", 2);
__decorateClass([
  (0, import_decorators42.eventOptions)({ capture: true })
], MteNavItem.prototype, "handleButtonClick", 1);
MteNavItem = __decorateClass([
  defineElement("mte-nav-item")
], MteNavItem);

// src/atomic/nav/nav-item-group.element.ts
var import_class_map7 = require("lit/directives/class-map.js");
var import_if_defined11 = require("lit/directives/if-defined.js");
var import_decorators43 = require("lit/decorators.js");
var import_lit68 = require("lit");

// src/atomic/nav/nav-item-group.styles.ts
var import_lit67 = require("lit");
var styles35 = import_lit67.css`:host{--indent-size:var(--mte-space-lg);--header-color:var(--mte-ink-2);--header-margin:var(--mte-space-md);display:block}ul{display:block;list-style-type:none;margin:0;padding:0}.header{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--header-color);font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);text-decoration:inherit;text-transform:inherit}.default-header{margin-top:var(--header-margin)}`;

// src/atomic/nav/nav-item-group.element.ts
var MteNavItemGroup = class extends StylePartsMixin(
  MteElement
) {
  constructor() {
    super(...arguments);
    this._inheritedAttributes = {};
  }
  handleLabelChange(changes) {
    if (changes.has("ariaLabel")) {
      this._inheritedAttributes = {
        ...this._inheritedAttributes,
        ariaLabel: this.ariaLabel
      };
      this.removeAttribute("aria-label");
    }
  }
  render() {
    return import_lit68.html`${this.instanceStyles}<div id="header" class="header" part="header"><slot name="header"><div class="${(0, import_class_map7.classMap)({ "default-header": this.header })}">${this.header}</div></slot></div><ul aria-labelledby="${(0, import_if_defined11.ifDefined)(
      this._inheritedAttributes.ariaLabel ?? this.header ? "header" : null
    )}"><slot></slot></ul>`;
  }
};
MteNavItemGroup.styles = [styles7, styles35];
__decorateClass([
  (0, import_decorators43.property)({ reflect: true })
], MteNavItemGroup.prototype, "header", 2);
__decorateClass([
  (0, import_decorators43.property)({ attribute: "aria-label", reflect: true })
], MteNavItemGroup.prototype, "ariaLabel", 2);
__decorateClass([
  onUpdate("ariaLabel", { on: "both" })
], MteNavItemGroup.prototype, "handleLabelChange", 1);
MteNavItemGroup = __decorateClass([
  defineElement("mte-nav-item-group")
], MteNavItemGroup);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */