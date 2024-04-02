var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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

// src/atomic/drawer/index.ts
var drawer_exports = {};
__export(drawer_exports, {
  MteDrawer: () => MteDrawer
});
module.exports = __toCommonJS(drawer_exports);

// src/atomic/drawer/drawer.element.ts
var import_lit19 = require("lit");
var import_decorators21 = require("lit/decorators.js");

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
var generateSelectorsFromStyleMap = (selectorFn, styleMap) => {
  const parsedSelectors = [];
  const selectorQueue = [{ selector: selectorFn(), styleMap }];
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
var parseSelectors = (styles11, selectors) => {
  if (!selectors) {
    return styles11;
  } else {
    return `${styles11}${selectors.reduce((acc, { selector, selectorWrapper, style }) => {
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
  let styles11 = "";
  [...instanceStylesMap.entries()].filter(([key, _]) => key !== "se" && key !== "sp").sort((a, b) => b[0] - a[0]).forEach(([_, selectors]) => {
    styles11 = parseSelectors(styles11, selectors);
  });
  styles11 = `${styles11}${parseSelectors("", instanceStylesMap.get("se"))}${parseSelectors(
    "",
    instanceStylesMap.get("sp")
  )}`;
  return styles11;
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
  setInstanceStyle(id, selector, styleMap) {
    this.__instanceStyleSheetMap.set(id, generateSelectorsFromStyleMap(selector, styleMap));
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
var defaultBorderFactory = (width, color, style) => `${style ?? "solid"} ${borderWidthValShorthands([
  { prop: "borderWidth", value: dotStringToConfigValue(width ?? "1px") }
])[0]?.value} ${dotStringToConfigValue(color) ?? import_styles4.config.color.border1}`;
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

// src/core/mixins/density.mixin.styles.ts
var import_lit3 = require("lit");
var styles = import_lit3.css`:host([density=compact]){--mte-space-xxs:var(--mte-space-compact-xxs);--mte-space-xs:var(--mte-space-compact-xs);--mte-space-sm:var(--mte-space-compact-sm);--mte-space-md:var(--mte-space-compact-md);--mte-space-lg:var(--mte-space-compact-lg);--mte-space-xl:var(--mte-space-compact-xl);--mte-space-xxl:var(--mte-space-compact-xxl);--mte-space-xxxl:var(--mte-space-compact-xxxl)}:host([density=comfy]){--mte-space-xxs:var(--mte-space-comfy-xxs);--mte-space-xs:var(--mte-space-comfy-xs);--mte-space-sm:var(--mte-space-comfy-sm);--mte-space-md:var(--mte-space-comfy-md);--mte-space-lg:var(--mte-space-comfy-lg);--mte-space-xl:var(--mte-space-comfy-xl);--mte-space-xxl:var(--mte-space-comfy-xxl);--mte-space-xxxl:var(--mte-space-comfy-xxxl)}:host([density=roomy]){--mte-space-xxs:var(--mte-space-roomy-xxs);--mte-space-xs:var(--mte-space-roomy-xs);--mte-space-sm:var(--mte-space-roomy-sm);--mte-space-md:var(--mte-space-roomy-md);--mte-space-lg:var(--mte-space-roomy-lg);--mte-space-xl:var(--mte-space-roomy-xl);--mte-space-xxl:var(--mte-space-roomy-xxl);--mte-space-xxxl:var(--mte-space-roomy-xxxl)}`;

// src/core/mixins/disabled.mixin.ts
var import_decorators4 = require("lit/decorators.js");

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

// src/core/mixins/tabindex.mixin.ts
var import_decorators7 = require("lit/decorators.js");

// src/core/mixins/style-parts.mixin.ts
var import_decorators8 = require("lit/decorators.js");
var import_styles6 = require("@mortar/styles");
var StylePartsMixin = (superClass) => {
  class StylePartsElement extends superClass {
    updateInstanceStyles(changedProps) {
      super.updateInstanceStyles(changedProps);
      if (changedProps.has("sp")) {
        Object.entries(this.sp ?? {}).forEach(([part, styleMap]) => {
          const selector = (0, import_styles6.selectorFactory)(
            part === "host" ? ":host:host:host:host:host:host" : `:host:host:host:host:host:host::part(${part})`
          );
          this.setInstanceStyle(`sp-${part}`, selector, styleMap);
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

// src/core/mixins/slot-observer.mixin.ts
var import_decorators15 = require("lit/decorators.js");

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
  add(state6) {
    if (!/^--/.test(state6) || typeof state6 !== "string") {
      throw new DOMException(
        `Failed to execute 'add' on 'CustomStateSet': The specified value ${state6} must start with '--'.`
      );
    }
    const result = super.add(state6);
    const ref = customStateMap.get(this);
    const stateName = `state${state6}`;
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
  delete(state6) {
    const result = super.delete(state6);
    const ref = customStateMap.get(this);
    if (ref.isConnected) {
      ref.toggleAttribute(`state${state6}`, false);
      if (ref.part) {
        ref.part.remove(`state${state6}`);
      }
    } else {
      setTimeout(() => {
        ref.toggleAttribute(`state${state6}`, false);
        if (ref.part) {
          ref.part.remove(`state${state6}`);
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

// src/core/styles/lit-css.ts
var import_lit12 = require("lit");

// src/core/styles/base.styles.ts
var import_lit13 = require("lit");
var styles7 = import_lit13.css`:host{box-sizing:border-box}`;

// src/atomic/divider/divider.element.ts
var import_lit15 = require("lit");
var import_decorators19 = require("lit/decorators.js");

// src/atomic/divider/divider.styles.ts
var import_lit14 = require("lit");
var styles8 = import_lit14.css`:host{--divider-color:var(--mte-border-1);--divider-width:2px;display:block;line-height:1;margin:var(--mte-space-md) 0}:host([weight=thin]){--divider-width:1px}:host([weight=bold]){--divider-width:3px}:host([orientation=vertical]){margin:0 var(--mte-space-md)}:host([label]){align-self:stretch;display:flex;text-align:center;white-space:nowrap}:host([label]):after,:host([label]):before{content:"";position:relative}:host(:not([label])){background-color:var(--divider-color);height:var(--divider-width);min-height:var(--divider-width);width:100%}:host([orientation=vertical]:not([label])){align-self:stretch;height:auto;min-width:var(--divider-width);width:var(--divider-width)}:host([label]:not([orientation=vertical])){border:0;flex-shrink:0;gap:var(--mte-space-md)}:host([label]:not([orientation=vertical])):after,:host([label]:not([orientation=vertical])):before{border-top:var(--divider-width) solid var(--divider-color);height:auto;transform:translateY(calc(50% - var(--divider-width)/2));width:100%}:host([label]:not([orientation=vertical])[align=start]):before{width:10%}:host([label]:not([orientation=vertical])[align=end]):after{width:10%}:host([label][orientation=vertical]){flex-direction:column;flex-shrink:0;gap:var(--mte-space-sm);height:auto}:host([label][orientation=vertical]):after,:host([label][orientation=vertical]):before{border-left:var(--divider-width) solid var(--divider-color);height:100%;left:calc(50% - var(--divider-width)/2);top:0;transform:translateX(0)}`;

// src/atomic/divider/divider.element.ts
var MteDivider = class extends MteContentBase {
  constructor() {
    super(...arguments);
    this.align = "center";
    this.orientation = "horizontal";
    this.weight = "regular";
    this.role = "separator";
  }
  handleA11yChange() {
    this.role = this.label ? "presentation" : "separator";
    this.ariaOrientation = this.orientation === "vertical" ? this.orientation : null;
  }
  render() {
    return import_lit15.html`${this.instanceStyles}${this.label}`;
  }
};
MteDivider.styles = [styles7, styles8];
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteDivider.prototype, "label", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteDivider.prototype, "align", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteDivider.prototype, "orientation", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteDivider.prototype, "weight", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteDivider.prototype, "role", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true, attribute: "aria-orientation" })
], MteDivider.prototype, "ariaOrientation", 2);
__decorateClass([
  onUpdate(["label", "orientation"], { on: "both" })
], MteDivider.prototype, "handleA11yChange", 1);
MteDivider = __decorateClass([
  defineElement("mte-divider")
], MteDivider);

// src/atomic/drawer/drawer.styles.ts
var import_lit16 = require("lit");
var styles9 = import_lit16.css`:host{display:block;--size:350px;--background:var(--mte-surface-2);--color:var(--mte-ink-1);--padding:var(--mte-space-md);--border-color:var(--mte-border-1);--header-divider:solid 1px var(--border-color);--footer-divider:solid 1px var(--border-color);--panel-border:solid 1px var(--border-color);--transition-duration:200ms;--transition-fn:cubic-bezier(0.4,0,0.2,1)}:host(:not([opened]):not([openedFull])) .panel{height:1px!important;position:absolute!important;width:1px!important;clip:rect(0 0 0 0)!important;border:none!important;clip-path:inset(50%)!important;overflow:hidden!important;padding:0!important;white-space:nowrap!important}:host .panel{background:var(--background);border-color:var(--mte-border-1);color:var(--color);display:flex;flex-direction:column;overflow:auto;pointer-events:auto;position:absolute;transition:visibility var(--transition-duration) var(--transition-fn),transform var(--transition-duration) var(--transition-fn);visibility:hidden;will-change:transform;z-index:1}:host([slot=overlay]) .panel{box-shadow:var(--mte-elevation-z3);max-width:100%;position:fixed}:host([position=left]) .panel,:host([position=right]) .panel{height:100%;width:min(100vw,var(--size))}:host([position=bottom]) .panel,:host([position=top]) .panel{height:min(100vh,var(--size));max-height:100vh;width:100%}:host([position=left]) .panel{left:0;top:0;transform:translate(-100%)}:host([position=top]) .panel{left:0;top:0;transform:translateY(-100%)}:host([position=right]) .panel{right:0;top:0;transform:translate(100%)}:host([position=bottom]) .panel{bottom:0;left:0;transform:translateY(100%)}:host([withoutHeaderDivider]){--header-divider:none}:host([withoutFooterDivider]){--footer-divider:none}:host .panel.opened{transform:translate(0);transition:visibility var(--transition-duration) var(--transition-fn),transform var(--transition-duration) var(--transition-fn);visibility:visible}:host ::slotted(mte-content),:host ::slotted(mte-footer),:host ::slotted(mte-header){--composition-padding-y:var(--padding);--composition-padding-x:var(--padding)}:host ::slotted(mte-header){--composition-divider:var(--header-divider)}:host ::slotted(mte-footer){--composition-divider:var(--footer-divider)}.content-container,.header{background:var(--background)}.content-container{display:flex;flex-grow:1;min-height:0;overflow:hidden;position:relative}.content{flex-grow:1;overflow:auto;will-change:transform}.content::-webkit-scrollbar{width:14px}.content::-webkit-scrollbar-track{border-radius:10px}.content::-webkit-scrollbar-thumb{background:var(--mte-border-2);background-clip:padding-box;border:3px solid transparent;border-radius:10px}.content ::slotted(mte-content){padding-bottom:var(--composition-padding-y);padding-top:var(--composition-padding-y)}.footer{background:var(--background)}@media screen and (prefers-reduced-motion:reduce){:host .panel,:host .panel.opened{transition:none}}`;

// src/atomic/drawer/drawer.element.ts
var import_class_map3 = require("lit-html/directives/class-map.js");
var import_styles8 = require("@mortar/styles");

// src/utilities/overlay-trigger/overlay-trigger.element.ts
var import_lit18 = require("lit");
var import_decorators20 = require("lit/decorators.js");

// src/utilities/overlay-trigger/overlay-trigger.styles.ts
var import_lit17 = require("lit");
var styles10 = import_lit17.css`:host{box-sizing:border-box;display:contents}slot[name=overlay]::slotted(*){position:absolute}`;

// src/utilities/overlay-trigger/overlay-trigger.element.ts
var nextUniqueId2 = 0;
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
        this._triggerElementRef.id = `mte-overlay-trigger--trigger--${nextUniqueId2++}`;
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
    return import_lit18.html`<slot name="overlay"></slot><slot name="trigger"></slot>`;
  }
};
MteOverlayTrigger.styles = [styles10];
__decorateClass([
  (0, import_decorators20.property)({ type: Boolean, reflect: true })
], MteOverlayTrigger.prototype, "opened", 2);
__decorateClass([
  (0, import_decorators20.property)({ attribute: false })
], MteOverlayTrigger.prototype, "triggerElement", 2);
__decorateClass([
  (0, import_decorators20.property)({ attribute: false })
], MteOverlayTrigger.prototype, "overlayElement", 2);
__decorateClass([
  (0, import_decorators20.queryAssignedElements)({ slot: "trigger" })
], MteOverlayTrigger.prototype, "triggerElements", 2);
__decorateClass([
  (0, import_decorators20.queryAssignedElements)({ slot: "overlay" })
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

// src/atomic/drawer/drawer.element.ts
var nextUniqueId3 = 0;
var drawerDefaultSize = "350px";
var MteDrawer = class extends OverlayMixin(
  InverseMixin(
    PresetMixinFactory("MteDrawer")(
      StylePartsMixin(MteElement)
    )
  )
) {
  constructor() {
    super(...arguments);
    this.internalId = nextUniqueId3++;
    this.instanceStyleSelectorRoot = ":host:host:host:host:host:host .panel";
    this.position = "right";
    this.size = drawerDefaultSize;
    this.withoutCloseOnClickOutside = false;
    this.withoutCloseOnEscape = false;
    this.withoutHeaderDivider = false;
    this.withoutFooterDivider = false;
    this.ariaModal = "true";
    this.role = "dialog";
    this.id = `mte-drawer--${this.internalId}`;
    this.animationDuration = import_styles8.config.animation.transitionDurationJs.short * 1e3;
    this.detectChildCloseController = new DetectChildCloseController(this);
    this.triggerOn = "click";
  }
  /** The first element currently in the header slot */
  get headerElementRef() {
    return this._headerElementRef;
  }
  set headerElementRef(newElem) {
    this._headerElementRef = newElem;
    if (newElem) {
      const existingId = this._headerElementRef?.getAttribute("id");
      const headerId = existingId ?? `mte-drawer-header--${this.internalId}`;
      this._headerElementRef?.setAttribute("id", headerId);
      this.ariaLabelledBy = headerId;
    } else {
      this.ariaLabelledBy = null;
    }
  }
  handleOverlayChange() {
    this.setOverlayOptions({
      withCloseOnClickOutside: !this.withoutCloseOnClickOutside,
      withDimBackdrop: this.ariaModal === "true",
      withFocusTrap: this.ariaModal === "true",
      withScrollLock: this.ariaModal === "true",
      withCloseOnEscape: !this.withoutCloseOnEscape,
      backdropTransitionDuration: `${this.animationDuration}ms`
    });
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    if (this.headerElements.length > 0) {
      this.headerElementRef = this.headerElements[0];
    }
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("size")) {
      this.setInstanceStyle("size", (0, import_styles8.selectorFactory)(":host:host:host"), {
        "--size": `min(100vh, ${mapNumberToPx(this.size)})`
      });
    }
    if (changedProps.has("animationDuration")) {
      this.setInstanceStyle("drawer", (0, import_styles8.selectorFactory)(this.instanceStyleSelectorRoot), {
        "--transition-duration": `${this.animationDuration}ms`
      });
    }
  }
  /** Opens the drawer */
  open() {
    return new Promise((resolve) => {
      this.handleOverlayOpen().then(() => {
        setTimeout(() => {
          this.handleOverlayOpenEnd().then(() => {
            resolve();
          });
        }, this.animationDuration);
      });
    });
  }
  /** Closes the drawer */
  close() {
    return new Promise((resolve) => {
      this.handleOverlayClose().then(() => {
        setTimeout(() => {
          this.handleOverlayCloseEnd().then(() => {
            resolve();
          });
        }, this.animationDuration);
      });
    });
  }
  /** Toggles the drawer open and closed */
  toggle() {
    if (this.opened) {
      return this.close();
    } else {
      return this.open();
    }
  }
  handleHeaderSlotChange() {
    if (this.headerElements.length > 0) {
      this.headerElementRef = this.headerElements[0];
    }
  }
  render() {
    return import_lit19.html`${this.instanceStyles}<div class="${(0, import_class_map3.classMap)({ panel: true, opened: this.opened && this.readyForAnimation })}"><div class="header" part="header"><slot name="header" @slotchange="${this.handleHeaderSlotChange}"></slot></div><div class="content-container"><div class="content" part="content" tabindex="0"><slot></slot></div></div><div class="footer" part="footer"><slot name="footer"></slot></div></div>`;
  }
};
MteDrawer.styles = [styles7, styles2, styles4, styles9];
// Disable change-in-update warnings here because we want to handle state changes during init ASAP
MteDrawer.enabledWarnings = [];
__decorateClass([
  (0, import_decorators21.property)({ reflect: true })
], MteDrawer.prototype, "position", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true })
], MteDrawer.prototype, "size", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true, type: Boolean })
], MteDrawer.prototype, "withoutCloseOnClickOutside", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true, type: Boolean })
], MteDrawer.prototype, "withoutCloseOnEscape", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true, type: Boolean })
], MteDrawer.prototype, "withoutHeaderDivider", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true, type: Boolean })
], MteDrawer.prototype, "withoutFooterDivider", 2);
__decorateClass([
  (0, import_decorators21.property)({
    attribute: "aria-modal",
    reflect: true
  })
], MteDrawer.prototype, "ariaModal", 2);
__decorateClass([
  (0, import_decorators21.property)({ attribute: "aria-describedby", reflect: true })
], MteDrawer.prototype, "ariaDescribedBy", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true })
], MteDrawer.prototype, "role", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true })
], MteDrawer.prototype, "id", 2);
__decorateClass([
  (0, import_decorators21.property)({ attribute: "aria-labelledby", reflect: true })
], MteDrawer.prototype, "ariaLabelledBy", 2);
__decorateClass([
  (0, import_decorators21.property)({ type: Number, reflect: true })
], MteDrawer.prototype, "animationDuration", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true })
], MteDrawer.prototype, "triggerOn", 2);
__decorateClass([
  (0, import_decorators21.queryAssignedElements)({ slot: "header" })
], MteDrawer.prototype, "headerElements", 2);
__decorateClass([
  onUpdate(["withoutFocusTrap", "withoutCloseOnClickOutside", "withoutCloseOnEscape", "ariaModal"])
], MteDrawer.prototype, "handleOverlayChange", 1);
MteDrawer = __decorateClass([
  defineElement("mte-drawer")
], MteDrawer);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9kcmF3ZXIvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9kcmF3ZXIiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYmFzZS1jbGFzc2VzL210ZS5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9jc3MtaW4tanMvY3NzLWluLWpzLnByb3BlcnR5LW1hcHBlcnMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Nzcy1pbi1qcy9jc3MtaW4tanMudXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9mb2N1cy51dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Vudmlyb25tZW50LnV0aWxpdGllcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS91dGlsaXRpZXMvZm9ybS51dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL3JlYWN0aXZlLXNpZ25hbC50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9iYXNlLWNsYXNzZXMvY29udGVudC5iYXNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2F0dHJpYnV0ZS1jb252ZXJ0ZXIvcmVzcG9uc2l2ZS1hdHRyaWJ1dGUuY29udmVydGVyLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbnN0YW50cy9oZWItbG9nby50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb250cm9sbGVycy9jbGljay1vdXRzaWRlLmNvbnRyb2xsZXIudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29udHJvbGxlcnMvZm9jdXMtdHJhcC5jb250cm9sbGVyLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbnRyb2xsZXJzL3Nsb3QuY29udHJvbGxlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy90aGVtZS5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZpY2VzL3BvcnRhbC5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZpY2VzL2hpc3RvcnktYXBpLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc2VydmljZXMvbG9jYWxpemUuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb250cm9sbGVycy9wb3J0YWwuY29udHJvbGxlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb250cm9sbGVycy9kZXRlY3QtY2hpbGQtY2xvc2UuY29udHJvbGxlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2J1dHRvbi9idXR0b24ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2ljb24vaWNvbi5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90b29sYmFyL3Rvb2xiYXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2NhcmQvY2FyZC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdHJlZS90cmVlLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90YWcvdGFnLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9iYWRnZS9iYWRnZS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbGluay9saW5rLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hbGVydC9hbGVydC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvaW5wdXQvaW5wdXQucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2RyYXdlci9kcmF3ZXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2FzaWRlL2FzaWRlLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9icmVhZGNydW1icy9icmVhZGNydW1iLWl0ZW0ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL21vZGFsL21vZGFsLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jaGVja2JveC9jaGVja2JveC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcmFkaW8vcmFkaW8ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdi9uYXYucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3N3aXRjaC9zd2l0Y2gucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdGl2ZS1zZWxlY3QvbmF0aXZlLXNlbGVjdC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGV4dGFyZWEvdGV4dGFyZWEucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3NrZWxldG9uL3NrZWxldG9uLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zbGlkZXIvc2xpZGVyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zZWdtZW50ZWQtY29udHJvbC9zZWdtZW50ZWQtY29udHJvbC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0LmRlY29yYXRvci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5jb250ZXh0LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbnRyb2xsZXJzL2FwcGxpZWQtcHJlc2V0LWNvbnRleHQuY29udHJvbGxlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9kZWNvcmF0b3JzL29uLXVwZGF0ZS5kZWNvcmF0b3IudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvZGVjb3JhdG9ycy9ldmVudC1lbWl0dGVyLmRlY29yYXRvci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9kZWNvcmF0b3JzL2RlZmluZS1lbGVtZW50LmRlY29yYXRvci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZGVuc2l0eS5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2Rpc2FibGVkLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9pbnZlcnNlLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9pbnZlcnNlLm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvdGFiaW5kZXgubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3N0eWxlLXBhcnRzLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvYnV0dG9uLm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvb3ZlcmxheS5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvb3ZlcmxheS5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9maWVsZHNldC5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9mb3JtLWZpZWxkLm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvYXV0by1hY3RpdmUtbGluay5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvc2xvdC1vYnNlcnZlci5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvY2hlY2tib3gubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL21hcHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL2FvbS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvbXV0YXRpb24tb2JzZXJ2ZXJzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy91dGlscy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvVmFsaWRpdHlTdGF0ZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvQ3VzdG9tU3RhdGVTZXQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL0hUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9wYXRjaC1mb3JtLXByb3RvdHlwZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvZWxlbWVudC1pbnRlcm5hbHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2xhbmcubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3dhaXQtZm9yLWZ3Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3N0eWxlcyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zdHlsZXMvYmFzZS5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9kaXZpZGVyL2RpdmlkZXIuZWxlbWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2RpdmlkZXIvZGl2aWRlci5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9kcmF3ZXIvZHJhd2VyLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvdXRpbGl0aWVzL292ZXJsYXktdHJpZ2dlciIsICIuLi8uLi8uLi8uLi9zcmMvdXRpbGl0aWVzL292ZXJsYXktdHJpZ2dlci9vdmVybGF5LXRyaWdnZXIuc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL2RyYXdlci5lbGVtZW50JztcbiIsIG51bGwsICIvKiBlc2xpbnQtZGlzYWJsZSB3Yy9uby1zZWxmLWNsYXNzICovXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHNlbGVjdG9yRmFjdG9yeSwgU2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgY29uc3RydWN0SW5zdGFuY2VTdHlsZXMsXG4gIGdlbmVyYXRlU2VsZWN0b3JzRnJvbVN0eWxlTWFwLFxuICBTZWxlY3RvclN0eWxlcyxcbiAgU3R5bGVNYXAsXG4gIFVuc3Vic2NyaWJlcixcbn0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IHVuc2FmZUhUTUwgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3Vuc2FmZS1odG1sLmpzJztcbmltcG9ydCB7IE1vcnRhclByZXNldFRoZW1lIH0gZnJvbSAnLi4vcHJlc2V0cyc7XG5cbi8vIERpc2FibGUgdGhpcyB3YXJuaW5nIGZvciBub3cgYnkgcHJlLW1hcmtpbmcgaXQgYXMgaXNzdWVkIHNvIHVzZXJzIGRvbid0IGhhdmUgdG8gc2VlIGl0XG4vLyBUT0RPOiBBc2sgbGl0IHRlYW0gd2h5IHRoaXMgaXMgdGhyb3duIGV2ZXJ5d2hlcmUgYW5kIHdoYXQgYWx0ZXJuYXRpdmVzIGFyZSBmb3IgcHJlc2V0IHNvbHV0aW9uXG5nbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzID8/PSBuZXcgU2V0KCk7XG5nbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzLmFkZChcbiAgJ092ZXJyaWRpbmcgUmVhY3RpdmVFbGVtZW50LmdldFByb3BlcnR5RGVzY3JpcHRvcigpIGlzIGRlcHJlY2F0ZWQuIFRoZSBvdmVycmlkZSB3aWxsIG5vdCBiZSBjYWxsZWQgd2l0aCBzdGFuZGFyZCBkZWNvcmF0b3JzIFNlZSBodHRwczovL2xpdC5kZXYvbXNnL25vLW92ZXJyaWRlLWdldC1wcm9wZXJ0eS1kZXNjcmlwdG9yIGZvciBtb3JlIGluZm9ybWF0aW9uLidcbik7XG5cbmV4cG9ydCBjbGFzcyBNdGVFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHByaXZhdGUgX19pbnN0YW5jZVN0eWxlU2hlZXRNYXAgPSBuZXcgTWFwPHN0cmluZywgU2VsZWN0b3JTdHlsZXNbXT4oKTtcbiAgcHJpdmF0ZSBfX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlID0gZmFsc2U7XG5cbiAgLyoqIFNldCB0byB0cnVlIHdoZW4gZmlyc3RVcGRhdGVkIGlzIGZpcnN0IGNhbGxlZCAqL1xuICBwcm90ZWN0ZWQgX19maXJzdFVwZGF0ZWQgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgaW5zdGFuY2VTdHlsZXM7XG5cbiAgLyoqXG4gICAqIEFsbCBzdWJzIHB1c2hlZCB0byB0aGlzIGFycmF5IHdpbGwgYmUgY2xlYXJlZCBpbiB0aGUgZGlzY29ubmVjdGVkQ2FsbGJhY2tcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc3ViczogVW5zdWJzY3JpYmVyW10gPSBbXTtcblxuICAvKiogU3R5bGUgbWFwcGluZ3MgdGhhdCBhcmUgYXBwbGllZCB0byB0aGUgaG9zdCBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIHJlZmxlY3Q6IHRydWUgfSkgc2U/OiBTdHlsZU1hcDtcblxuICAvKipcbiAgICogVGhlIHRoZW1lIHRvIHVzZSBmb3Igc3R5bGluZyB0aGlzIGNvbXBvbmVudC4gT3ZlcnJpZGVzIHRoZSBnbG9iYWwgcHJlc2V0IGZvciB0aGlzIGluc3RhbmNlIG9mIHRoaXMgY29tcG9uZW50LlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBhdHRyaWJ1dGU6ICdkYXRhLW10ZS10aGVtZScgfSlcbiAgc2V0IHRoZW1lKHRoZW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuX3RoZW1lO1xuICAgIHRoaXMuX3RoZW1lID0gdGhlbWU7XG4gICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCd0aGVtZScsIG9sZFZhbHVlKTtcbiAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IGEgYmV0dGVyIHdheSB0byBzb2x2ZSB0aGlzIGZvciBhbGwgcHJlc2V0c1xuICAgIGlmICh0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZSkge1xuICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlcXVlc3RVcGRhdGUoJ3RoZW1lJywgbnVsbCkpO1xuICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBudWxsKSk7XG4gICAgfVxuICB9XG4gIGdldCB0aGVtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aGVtZSA/PyB0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZT8ubmFtZTtcbiAgfVxuICBwcml2YXRlIF90aGVtZTogc3RyaW5nO1xuXG4gIC8qKiBVc2VkIHRvIGRlY2xhcmUgYSBsb2NhbCB0aGVtZSB2YWx1ZSBkZXRlcm1pbmVkIGJ5IHRoZSBsb2NhbCBwcmVzZXQgaWYgaXQgaXMgc2V0LiAqL1xuICBAc3RhdGUoKSBwcm90ZWN0ZWQgX19sb2NhbFByZXNldFRoZW1lOiBNb3J0YXJQcmVzZXRUaGVtZTtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBzZWxlY3RvciB0byBoYXZlIGluc3RhbmNlIHN0eWxlcyB0YXJnZXQgYSBzcGVjaWZpYyBpbm5lciBlbGVtZW50LlxuICAgKiBVc2VmdWwgaW4gc3BlY2lmaWMgc2NlbmFyaW9zIHdoZXJlIGZvY3VzIGlzIGRlbGVnYXRlZCBsaWtlIGJ1dHRvbnMuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQgdGhpcyByZXBlYXRzIGA6aG9zdGAgc2l4IHRpbWVzIHRvIHByb3ZpZGUgYSBzcGVjaWZpY2l0eSBvZiA2XG4gICAqL1xuICBwcm90ZWN0ZWQgaW5zdGFuY2VTdHlsZVNlbGVjdG9yUm9vdCA9ICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnO1xuXG4gIC8qKlxuICAgKiBDYW4gYmUgY2FsbGVkIGJ5IGRlcml2ZWQgY2xhc3NlcyB0byByZWdpc3RlciBuZXcgaW5zdGFuY2UgbGV2ZWwgZHluYW1pYyBzdHlsZXMuXG4gICAqIFdoZW4gY2FsbGVkIHRoZSBpbnN0YW5jZSBzdHlsZXNoZWV0IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGUgbGF0ZXN0IHN0eWxlcyB0aGlzIHVwZGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBzZXRJbnN0YW5jZVN0eWxlKGlkOiBzdHJpbmcsIHNlbGVjdG9yOiBTZWxlY3RvckZhY3RvcnksIHN0eWxlTWFwOiBTdHlsZU1hcCkge1xuICAgIC8vIFdlIHBhcnNlIGFsbCBzdHlsZSBpbmZvcm1hdGlvbiBoZXJlIGFuZCBzY29wZSBpdCB0byB0aGUgZ2l2ZW4gaWQuIFRoaXMgZW5zdXJlcyB3ZVxuICAgIC8vIG9ubHkgZXZlciBuZWVkIHRvIHJlLXBhcnNlIHRoaXMgcG9ydGlvbiBvZiBzdHlsZSBpbmZvcm1hdGlvbiB3aGVuIGl0cyBhc3NvY2lhdGVkXG4gICAgLy8gaWQgaXMgdXBkYXRlZCBhZ2Fpbi5cbiAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TWFwLnNldChpZCwgZ2VuZXJhdGVTZWxlY3RvcnNGcm9tU3R5bGVNYXAoc2VsZWN0b3IsIHN0eWxlTWFwKSk7XG4gICAgdGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBBIGN1c3RvbSBob29rIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gaW4gZGVyaXZlZCBjbGFzc2VzIHRvIHNldCBpbnN0YW5jZSBzdHlsZXMgYXMgbmVlZGVkICovXG4gIHByb3RlY3RlZCB1cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpIHtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcygnc2UnKSkge1xuICAgICAgdGhpcy5zZXRJbnN0YW5jZVN0eWxlKCdzZScsIHNlbGVjdG9yRmFjdG9yeSh0aGlzLmluc3RhbmNlU3R5bGVTZWxlY3RvclJvb3QpLCB0aGlzLnNlID8/IHt9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgd2lsbFVwZGF0ZShjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci53aWxsVXBkYXRlKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBDYWxsIHRoZSB1cGRhdGVJbnN0YW5jZVN0eWxlcyBob29rXG4gICAgdGhpcy51cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaW5zdGFuY2Ugc3R5bGVzIG5lZWQgdG8gYmUgcmVyZW5kZXJlZFxuICAgIGlmICh0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2VTdHlsZXMgPSB1bnNhZmVIVE1MKFxuICAgICAgICBgPHN0eWxlIGlkPVwiX19pbnN0YW5jZS1zdHlsZXNcIj4ke2NvbnN0cnVjdEluc3RhbmNlU3R5bGVzKFxuICAgICAgICAgIHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXRNYXBcbiAgICAgICAgKX08L3N0eWxlPmBcbiAgICAgICk7XG4gICAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHRoaXMuX19maXJzdFVwZGF0ZWQgPSB0cnVlO1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIHRoaXMuc3Vicy5mb3JFYWNoKCh1bnN1YikgPT4gdW5zdWIoKSk7XG4gICAgdGhpcy5zdWJzID0gW107XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQgeyBQcm9wZXJ0eU1hcHBlciwgU3R5bGVQcm9wZXJ0eSB9IGZyb20gJy4vY3NzLWluLWpzLnR5cGVzJztcblxuY29uc3QgcHJvcGVydHlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IHN0cmluZ1tdPiA9IHtcbiAgbTogJ21hcmdpbicsXG4gIG14OiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXSxcbiAgbXk6IFsnbWFyZ2luVG9wJywgJ21hcmdpbkJvdHRvbSddLFxuICBtdDogJ21hcmdpblRvcCcsXG4gIG1yOiAnbWFyZ2luUmlnaHQnLFxuICBtYjogJ21hcmdpbkJvdHRvbScsXG4gIG1sOiAnbWFyZ2luTGVmdCcsXG4gIHA6ICdwYWRkaW5nJyxcbiAgcHg6IFsncGFkZGluZ0xlZnQnLCAncGFkZGluZ1JpZ2h0J10sXG4gIHB5OiBbJ3BhZGRpbmdUb3AnLCAncGFkZGluZ0JvdHRvbSddLFxuICBwdDogJ3BhZGRpbmdUb3AnLFxuICBwcjogJ3BhZGRpbmdSaWdodCcsXG4gIHBiOiAncGFkZGluZ0JvdHRvbScsXG4gIHBsOiAncGFkZGluZ0xlZnQnLFxuICBkOiAnZGlzcGxheScsXG4gIGE6ICdhbGlnbkl0ZW1zJyxcbiAgajogJ2p1c3RpZnlDb250ZW50JyxcbiAgZGlyZWN0aW9uOiAnZmxleERpcmVjdGlvbicsXG4gIHNocmluazogJ2ZsZXhTaHJpbmsnLFxuICBncm93OiAnZmxleEdyb3cnLFxuICB3cmFwOiAnZmxleFdyYXAnLFxuICB3OiAnd2lkdGgnLFxuICBtYXh3OiAnbWF4V2lkdGgnLFxuICBtaW53OiAnbWluV2lkdGgnLFxuICBoOiAnaGVpZ2h0JyxcbiAgbWF4aDogJ21heEhlaWdodCcsXG4gIG1pbmg6ICdtaW5IZWlnaHQnLFxuICBmczogJ2ZvbnRTaXplJyxcbiAgZnc6ICdmb250V2VpZ2h0JyxcbiAgYmc6ICdiYWNrZ3JvdW5kJyxcbiAgYzogJ2NvbG9yJyxcbiAgZWxldmF0aW9uOiAnYm94U2hhZG93Jyxcbn07XG5cbi8qKiBNYXBzIHByb3BlcnR5IHNob3J0aGFuZCB2YWx1ZXMgdG8gb25lIG9yIG1hbnkgZnVsbCBjc3MgcHJvcGVydGllcyAqL1xuZXhwb3J0IGNvbnN0IHByb3BTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5yZWR1Y2UoKGFjYywgcHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFByb3BzID0gcHJvcGVydHlNYXBbcHJvcE1hcC5wcm9wXSA/PyBwcm9wTWFwLnByb3A7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLmFjYyxcbiAgICAgIC4uLihBcnJheS5pc0FycmF5KG1hcHBlZFByb3BzKVxuICAgICAgICA/IG1hcHBlZFByb3BzLm1hcCgocHJvcCkgPT4gKHsgcHJvcCwgdmFsdWU6IHByb3BNYXAudmFsdWUgfSkpXG4gICAgICAgIDogW3sgcHJvcDogbWFwcGVkUHJvcHMsIHZhbHVlOiBwcm9wTWFwLnZhbHVlIH1dKSxcbiAgICBdO1xuICB9LCBbXSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIEBtb3J0YXIvc3R5bGVzIGNvbmZpZyB2YWx1ZSBmb3IgYSBnaXZlbiBkb3Qgbm90YXRlZCBzdHJpbmcuXG4gKiBOdW1iZXJzIGFuZCBub24tZG90IG5vdGF0ZWQgc3RyaW5nIHdpbGwganVzdCBiZSByZXR1cm5lZCBhcyBpcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUgPSAodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29uZmlnUGF0aCA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gICAgICBjb25zdCBjb25maWdWYWx1ZSA9IGNvbmZpZ1BhdGgucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjW2tleV07XG4gICAgICB9LCBjb25maWcpO1xuICAgICAgcmV0dXJuIGNvbmZpZ1ZhbHVlID8/IHZhbHVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59O1xuXG4vKiogTWFwcyBkb3Qgbm90YXRlZCBzdHJpbmcgdmFsdWVzIHRvIHRoZW1lIGNvbmZpZyB2YXJpYWJsZXMgKi9cbmV4cG9ydCBjb25zdCBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlTWFwcGVyOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5yZWR1Y2UoKGFjYywgcHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZ1ZhbHVlID0gZG90U3RyaW5nVG9Db25maWdWYWx1ZShwcm9wTWFwLnZhbHVlKTtcbiAgICBpZiAoY29uZmlnVmFsdWUpIHtcbiAgICAgIHByb3BNYXAudmFsdWUgPSBjb25maWdWYWx1ZSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gWy4uLmFjYywgcHJvcE1hcF07XG4gIH0sIFtdKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBOdW1iZXJUb1B4ID0gKHZhbDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCkgPT4ge1xuICBpZiAoIXZhbCkge1xuICAgIHJldHVybiB2YWwgYXMgbnVsbDtcbiAgfVxuICByZXR1cm4gIWlzTmFOKE51bWJlcih2YWwpKSA/IGAke3ZhbH1weGAgOiAodmFsIGFzIHN0cmluZyk7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwUHhUb051bWJlciA9ICh2YWw6IHN0cmluZyB8IG51bGwpID0+IHtcbiAgaWYgKCF2YWwpIHtcbiAgICByZXR1cm4gdmFsIGFzIG51bGw7XG4gIH1cbiAgcmV0dXJuIE51bWJlcih2YWwucmVwbGFjZSgncHgnLCAnJykpO1xufTtcblxuLyoqIE1hcHMgdGhlIHZhbHVlcyBvZiBhbnkgZ2l2ZW4gcHJvcHMgdG8gcHggdW5pdHMgaWYgaXQgaXMgYSBudW1iZXIgKi9cbmV4cG9ydCBjb25zdCBudW1iZXJUb1B4OiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IG1hcE51bWJlclRvUHgocHJvcE1hcC52YWx1ZSk7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBzcGFjaW5nTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAnMCc6IGNvbmZpZy5zcGFjZS5ub25lLFxuICAnMSc6IGNvbmZpZy5zcGFjZS54cyxcbiAgJzInOiBjb25maWcuc3BhY2Uuc20sXG4gICczJzogY29uZmlnLnNwYWNlLm1kLFxuICAnNCc6IGNvbmZpZy5zcGFjZS5sZyxcbiAgJzUnOiBjb25maWcuc3BhY2UueGwsXG4gICc2JzogY29uZmlnLnNwYWNlLnh4bCxcbiAgJzcnOiBjb25maWcuc3BhY2UueHh4bCxcbiAgJ25vbmUnOiBjb25maWcuc3BhY2Uubm9uZSxcbiAgJ3h4cyc6IGNvbmZpZy5zcGFjZS54eHMsXG4gICd4cyc6IGNvbmZpZy5zcGFjZS54cyxcbiAgJ3NtJzogY29uZmlnLnNwYWNlLnNtLFxuICAnbWQnOiBjb25maWcuc3BhY2UubWQsXG4gICdsZyc6IGNvbmZpZy5zcGFjZS5sZyxcbiAgJ3hsJzogY29uZmlnLnNwYWNlLnhsLFxuICAneHhsJzogY29uZmlnLnNwYWNlLnh4bCxcbiAgJ3h4eGwnOiBjb25maWcuc3BhY2UueHh4bCxcbn07XG5cbi8qKiBNYXBzIHNwYWNpbmcgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBzcGFjaW5nIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBzcGFjaW5nVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBzcGFjaW5nTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBib3JkZXJSYWRpdXNNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIG5vbmU6IGNvbmZpZy5ib3JkZXIucmFkaXVzLm5vbmUsXG4gIHhzOiBjb25maWcuYm9yZGVyLnJhZGl1cy54cyxcbiAgc206IGNvbmZpZy5ib3JkZXIucmFkaXVzLnNtLFxuICBtZDogY29uZmlnLmJvcmRlci5yYWRpdXMubWQsXG4gIGxnOiBjb25maWcuYm9yZGVyLnJhZGl1cy5sZyxcbiAgeGw6IGNvbmZpZy5ib3JkZXIucmFkaXVzLnhsLFxuICB4eGw6IGNvbmZpZy5ib3JkZXIucmFkaXVzLnh4bCxcbiAgZnVsbDogY29uZmlnLmJvcmRlci5yYWRpdXMuZnVsbCxcbn07XG5cbi8qKiBNYXBzIGJvcmRlciByYWRpdXMgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBib3JkZXIgcmFkaXVzIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGJvcmRlclJhZGl1c01hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgYm9yZGVyV2lkdGhNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIG5vbmU6IGNvbmZpZy5ib3JkZXIud2lkdGgubm9uZSxcbiAgc206IGNvbmZpZy5ib3JkZXIud2lkdGguc20sXG4gIG1kOiBjb25maWcuYm9yZGVyLndpZHRoLm1kLFxuICBsZzogY29uZmlnLmJvcmRlci53aWR0aC5sZyxcbn07XG5cbi8qKiBNYXBzIGJvcmRlciB3aWR0aCB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIGJvcmRlciB3aWR0aCBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGJvcmRlcldpZHRoTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBvcGFjaXR5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB4eGw6IGNvbmZpZy5vcGFjaXR5Lnh4bCxcbiAgeGw6IGNvbmZpZy5vcGFjaXR5LnhsLFxuICBsZzogY29uZmlnLm9wYWNpdHkubGcsXG4gIG1kOiBjb25maWcub3BhY2l0eS5tZCxcbiAgc206IGNvbmZpZy5vcGFjaXR5LnNtLFxuICB4czogY29uZmlnLm9wYWNpdHkueHMsXG4gIHh4czogY29uZmlnLm9wYWNpdHkueHhzLFxuICB4eHhzOiBjb25maWcub3BhY2l0eS54eHhzLFxufTtcblxuLyoqIE1hcHMgb3BhY2l0eSB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIG9wYWNpdHkgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IG9wYWNpdHlWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IG9wYWNpdHlNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGZvbnRXZWlnaHRNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIGxpZ2h0OiBjb25maWcuZm9udC53ZWlnaHQubGlnaHQsXG4gIHJlZ3VsYXI6IGNvbmZpZy5mb250LndlaWdodC5yZWd1bGFyLFxuICBtZWRpdW06IGNvbmZpZy5mb250LndlaWdodC5tZWRpdW0sXG4gIGJvbGQ6IGNvbmZpZy5mb250LndlaWdodC5ib2xkLFxufTtcblxuLyoqIE1hcHMgZm9udC13ZWlnaHQgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBzcGFjaW5nIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBmb250V2VpZ2h0VmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBmb250V2VpZ2h0TWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBmb250U2l6ZU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgeHhzOiAnMC42MjVyZW0nLFxuICB4czogJzAuNzVyZW0nLFxuICBzbTogJzAuODc1cmVtJyxcbiAgbWQ6ICcxcmVtJyxcbiAgbGc6ICcxLjI1cmVtJyxcbiAgeGw6ICcxLjVyZW0nLFxuICB4eGw6ICcxLjc1cmVtJyxcbn07XG5cbi8qKiBNYXBzIGZvbnQtc2l6ZSB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIHNwYWNpbmcgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGZvbnRTaXplVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBmb250U2l6ZU1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZm9udEZhbWlseU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgc2FuczogY29uZmlnLmZvbnQuZmFtaWx5LnNhbnMsXG4gIHNlcmlmOiBjb25maWcuZm9udC5mYW1pbHkuc2VyaWYsXG4gIG1vbm86IGNvbmZpZy5mb250LmZhbWlseS5tb25vLFxufTtcblxuLyoqIE1hcHMgZm9udC1mYW1pbHkgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBmb250LWZhbWlseSBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgZm9udEZhbWlseVZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZm9udEZhbWlseU1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZWxldmF0aW9uTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB6MDogY29uZmlnLmVsZXZhdGlvbi56MCxcbiAgejE6IGNvbmZpZy5lbGV2YXRpb24uejEsXG4gIHoyOiBjb25maWcuZWxldmF0aW9uLnoyLFxuICB6MzogY29uZmlnLmVsZXZhdGlvbi56MyxcbiAgejQ6IGNvbmZpZy5lbGV2YXRpb24uejQsXG59O1xuXG4vKiogTWFwcyBlbGV2YXRpb24gdmFsdWVzIGZyb20gZGVzaWduYXRlZCBlbGV2YXRpb24gc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGVsZXZhdGlvblZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZWxldmF0aW9uTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuIiwgImltcG9ydCB7IGNvbmZpZywgU2VsZWN0b3JPcHRpb25zIH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgU2VsZWN0b3JNZXRhZGF0YSxcbiAgU2VsZWN0b3JTdHlsZXMsXG4gIFN0eWxlTWFwLFxuICBTdHlsZU1hcENhbGxiYWNrLFxuICBTdHlsZVByb3BlcnR5LFxufSBmcm9tICcuL2Nzcy1pbi1qcy50eXBlcyc7XG5pbXBvcnQge1xuICBwcm9wU2hvcnRoYW5kcyxcbiAgc3BhY2luZ1ZhbFNob3J0aGFuZHMsXG4gIG51bWJlclRvUHgsXG4gIGRvdFN0cmluZ1RvQ29uZmlnVmFsdWVNYXBwZXIsXG4gIGJvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsXG4gIGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kcyxcbiAgb3BhY2l0eVZhbFNob3J0aGFuZHMsXG4gIGZvbnRXZWlnaHRWYWxTaG9ydGhhbmRzLFxuICBmb250RmFtaWx5VmFsU2hvcnRoYW5kcyxcbiAgZWxldmF0aW9uVmFsU2hvcnRoYW5kcyxcbiAgZm9udFNpemVWYWxTaG9ydGhhbmRzLFxufSBmcm9tICcuL2Nzcy1pbi1qcy5wcm9wZXJ0eS1tYXBwZXJzJztcblxuLyoqIFNwZWNpZmllcyB3aGljaCBwcm9wZXJ0eSBtYXBwZXJzIHNob3VsZCBiZSBjYWxsZWQgYW5kIGluIHdoYXQgb3JkZXIgZm9yIGEgZ2l2ZW4gcHJvcCAqL1xuY29uc3QgcHJvcE1hcHBlcnMgPSB7XG4gIGhlaWdodDogW251bWJlclRvUHhdLFxuICBtaW5IZWlnaHQ6IFtudW1iZXJUb1B4XSxcbiAgbWF4SGVpZ2h0OiBbbnVtYmVyVG9QeF0sXG4gIHdpZHRoOiBbbnVtYmVyVG9QeF0sXG4gIG1pbldpZHRoOiBbbnVtYmVyVG9QeF0sXG4gIG1heFdpZHRoOiBbbnVtYmVyVG9QeF0sXG4gIHRvcDogW251bWJlclRvUHhdLFxuICByaWdodDogW251bWJlclRvUHhdLFxuICBib3R0b206IFtudW1iZXJUb1B4XSxcbiAgbGVmdDogW251bWJlclRvUHhdLFxuICBtYXJnaW46IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpblRvcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luUmlnaHQ6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpbkJvdHRvbTogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luTGVmdDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZzogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ1RvcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ1JpZ2h0OiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nQm90dG9tOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nTGVmdDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgZ2FwOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICByb3dHYXA6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGNvbHVtbkdhcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgZm9udFNpemU6IFtmb250U2l6ZVZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBmb250V2VpZ2h0OiBbZm9udFdlaWdodFZhbFNob3J0aGFuZHNdLFxuICBmb250RmFtaWx5OiBbZm9udEZhbWlseVZhbFNob3J0aGFuZHNdLFxuICBib3JkZXJSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyV2lkdGg6IFtib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJUb3BSaWdodFJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgb3BhY2l0eTogW29wYWNpdHlWYWxTaG9ydGhhbmRzXSxcbiAgYm94U2hhZG93OiBbZWxldmF0aW9uVmFsU2hvcnRoYW5kc10sXG59O1xuXG4vKipcbiAqIFBhcnNlcyBwcm9wZXJ0aWVzIHRvIHRoZWlyIGFjdHVhbCBwcm9wZXJ0eSBtYXBwaW5ncyBhY2NvcmRpbmcgdG8gdGhlXG4gKiBtYXBwaW5nIGZ1bmN0aW9uIHBpcGVsaW5lcyBkZWZpbmVkIGFib3ZlXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJzZVByb3BTaG9ydGhhbmRzID0gKHByb3A6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlcik6IFN0eWxlUHJvcGVydHlbXSA9PiB7XG4gIC8vIENhc3QgdG8gc3RyaW5nIHZhbHVlc1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHZhbHVlID0gYCR7dmFsdWV9YDtcbiAgfVxuICAvLyBFeGVjIHByb3AgdHJhbnNmb3Jtc1xuICAvLyBUaGUgcHJvcCBzaG9ydGhhbmRzIG1hcHBlciBpcyBydW4gYWdhaW5zdCBldmVyeSBwcm9wXG4gIGNvbnN0IG1hcHBlZFByb3BzID0gZG90U3RyaW5nVG9Db25maWdWYWx1ZU1hcHBlcihwcm9wU2hvcnRoYW5kcyhbeyBwcm9wLCB2YWx1ZSB9XSkpO1xuICByZXR1cm4gbWFwcGVkUHJvcHMucmVkdWNlKChhY2MsIHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZXJzID0gcHJvcE1hcHBlcnNbcHJvcE1hcC5wcm9wXTtcbiAgICBpZiAobWFwcGVycykge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICAuLi5tYXBwZXJzLnJlZHVjZShcbiAgICAgICAgICAoYWNjLCBtYXBwZXIpID0+IG1hcHBlcihhY2MpLFxuICAgICAgICAgIFt7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IHByb3BNYXAudmFsdWUgfV1cbiAgICAgICAgKSxcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjYy5wdXNoKHByb3BNYXApO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gIH0sIFtdKTtcbn07XG5cbi8qKlxuICogUGFyc2VzIHN0eWxlTWFwIHZhbHVlcyB0byBzZWxlY3RvciArIHN0eWxlIGluZm8gdXNlZCBmb3JcbiAqIHVwZGF0aW5nIENTU1N0eWxlU2hlZXRzIG9yIDxzdHlsZT4gdGFncy5cbiAqL1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlU2VsZWN0b3JzRnJvbVN0eWxlTWFwID0gKFxuICBzZWxlY3RvckZuOiAob3B0aW9ucz86IFNlbGVjdG9yT3B0aW9ucykgPT4gc3RyaW5nLFxuICBzdHlsZU1hcDogU3R5bGVNYXBcbikgPT4ge1xuICBjb25zdCBwYXJzZWRTZWxlY3RvcnM6IFNlbGVjdG9yU3R5bGVzW10gPSBbXTtcbiAgY29uc3Qgc2VsZWN0b3JRdWV1ZTogU2VsZWN0b3JNZXRhZGF0YVtdID0gW3sgc2VsZWN0b3I6IHNlbGVjdG9yRm4oKSwgc3R5bGVNYXAgfV07XG4gIGNvbnN0IGJyZWFrcG9pbnRLZXlzID0gT2JqZWN0LmtleXMoY29uZmlnLmdyaWQuYnJlYWtwb2ludCk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHNlbGVjdG9yIHF1ZXVlIHVudGlsIHRoZXkgaGF2ZSBhbGwgYmVlbiBleGhhdXN0ZWRcbiAgd2hpbGUgKHNlbGVjdG9yUXVldWUubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHNlbGVjdG9yTWFwID0gc2VsZWN0b3JRdWV1ZS5zaGlmdCgpO1xuXG4gICAgLy8gUHVzaCBwYXJzZWQgc2VsZWN0b3JzIG9udG8gdGhlIHJldHVybiBsaXN0XG4gICAgcGFyc2VkU2VsZWN0b3JzLnB1c2goe1xuICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLFxuICAgICAgc2VsZWN0b3JXcmFwcGVyOiBzZWxlY3Rvck1hcC5zZWxlY3RvcldyYXBwZXIsXG4gICAgICBzdHlsZTogT2JqZWN0LmtleXMoc2VsZWN0b3JNYXAuc3R5bGVNYXApLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHNlbGVjdG9yTWFwLnN0eWxlTWFwW3Byb3BdO1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXJzZSBjYWxsYmFjayB2YWx1ZXNcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFsdWUgPSAodmFsdWUgYXMgU3R5bGVNYXBDYWxsYmFjaykoY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIG9iamVjdCB2YWx1ZXNcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIFF1ZXVlIHVwIHNlbGVjdG9ycyBmb3IgcHNldWRvLWNsYXNzZXNcbiAgICAgICAgICBpZiAocHJvcC5zdGFydHNXaXRoKCcmOicpKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JGbih7IGluZml4OiBwcm9wLnJlcGxhY2UoJyYnLCAnJykgfSksXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBzZWxlY3Rvck1hcC5zZWxlY3RvcldyYXBwZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFF1ZXVlIHVwIGJyZWFrcG9pbnQgc2VsZWN0b3Igc2hvcnRoYW5kc1xuICAgICAgICAgIGVsc2UgaWYgKGJyZWFrcG9pbnRLZXlzLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBgQG1lZGlhIChtaW4td2lkdGg6JHtjb25maWcuZ3JpZC5icmVha3BvaW50W3Byb3BdfSlgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIG1lZGlhL2NvbnRhaW5lciBxdWVyaWVzXG4gICAgICAgICAgZWxzZSBpZiAocHJvcC5zdGFydHNXaXRoKCdAbWVkaWEnKSB8fCBwcm9wLnN0YXJ0c1dpdGgoJ0Bjb250YWluZXInKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogcHJvcCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUXVldWUgdXAgc2VsZWN0b3JzIGZvciBzbG90dGVkIHF1ZXJpZXNcbiAgICAgICAgICBlbHNlIGlmIChwcm9wLnN0YXJ0c1dpdGgoJzo6c2xvdHRlZCcpIHx8IHByb3Auc3RhcnRzV2l0aCgnJiA6OnNsb3R0ZWQnKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yRm4oeyBwb3N0Zml4OiAnICcgKyBwcm9wLnJlcGxhY2UoJyYgJywgJycpIH0pLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogc2VsZWN0b3JNYXAuc2VsZWN0b3JXcmFwcGVyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIHZhbHVlIGJyZWFrcG9pbnQgb2JqZWN0c1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTG9vcCBpbiBvcmRlciBoZXJlIHNvIHRoZXkgb3ZlcnJpZGUgZWFjaCBvdGhlciBjb3JyZWN0bHlcbiAgICAgICAgICAgIGJyZWFrcG9pbnRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAodmFsdWVba2V5XSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsIC8vIGluaGVyaXQgdGhlIHNlbGVjdG9yIGhlcmUgaW4gY2FzZSB3ZSBhcmUgd2l0aGluIGEgcHNldWRvLWNsYXNzXG4gICAgICAgICAgICAgICAgICBzdHlsZU1hcDogeyBbcHJvcF06IHZhbHVlW2tleV0gfSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogYEBtZWRpYSAobWluLXdpZHRoOiR7Y29uZmlnLmdyaWQuYnJlYWtwb2ludFtrZXldfSlgLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2Ugbm9ybWFsIHByb3BzXG4gICAgICAgIGNvbnN0IHByb3BzID0gcGFyc2VQcm9wU2hvcnRoYW5kcyhwcm9wLCB2YWx1ZSBhcyBzdHJpbmcgfCBudW1iZXIpO1xuICAgICAgICByZXR1cm4gYCR7YWNjfSR7cHJvcHMucmVkdWNlKChhY2MyLCB7IHByb3AsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAvLyBDb252ZXJ0IHByb3BlcnR5IG5hbWVzIGZyb20gY2FtZWwtY2FzZSB0byBkYXNoLWNhc2UsIGkuZS46XG4gICAgICAgICAgLy8gIGBiYWNrZ3JvdW5kQ29sb3JgIC0+IGBiYWNrZ3JvdW5kLWNvbG9yYFxuICAgICAgICAgIC8vIFZlbmRvci1wcmVmaXhlZCBuYW1lcyBuZWVkIGFuIGV4dHJhIGAtYCBhcHBlbmRlZCB0byBmcm9udDpcbiAgICAgICAgICAvLyAgYHdlYmtpdEFwcGVhcmFuY2VgIC0+IGAtd2Via2l0LWFwcGVhcmFuY2VgXG4gICAgICAgICAgLy8gRXhjZXB0aW9uIGlzIGFueSBwcm9wZXJ0eSBuYW1lIGNvbnRhaW5pbmcgYSBkYXNoLCBpbmNsdWRpbmdcbiAgICAgICAgICAvLyBjdXN0b20gcHJvcGVydGllczsgd2UgYXNzdW1lIHRoZXNlIGFyZSBhbHJlYWR5IGRhc2gtY2FzZWQgaS5lLjpcbiAgICAgICAgICAvLyAgYC0tbXktYnV0dG9uLWNvbG9yYCAtLT4gYC0tbXktYnV0dG9uLWNvbG9yYFxuICAgICAgICAgIHByb3AgPSBwcm9wLnJlcGxhY2UoLyg/Ol4od2Via2l0fG1venxtc3xvKXwpKD89W0EtWl0pL2csICctJCYnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHJldHVybiBgJHthY2MyfSR7cHJvcH06JHt2YWx1ZX07YDtcbiAgICAgICAgfSwgJycpfWA7XG4gICAgICB9LCAnJyksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VkU2VsZWN0b3JzO1xufTtcblxuY29uc3QgcGFyc2VTZWxlY3RvcnMgPSAoc3R5bGVzLCBzZWxlY3RvcnM/OiBhbnkpID0+IHtcbiAgaWYgKCFzZWxlY3RvcnMpIHtcbiAgICByZXR1cm4gc3R5bGVzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgJHtzdHlsZXN9JHtzZWxlY3RvcnMucmVkdWNlKChhY2MsIHsgc2VsZWN0b3IsIHNlbGVjdG9yV3JhcHBlciwgc3R5bGUgfSkgPT4ge1xuICAgICAgaWYgKHN0eWxlID09PSAnJykge1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuICAgICAgY29uc3QgYmFzZSA9IGAke3NlbGVjdG9yfXske3N0eWxlfX1gO1xuICAgICAgY29uc3Qgd3JhcHBlZCA9IHNlbGVjdG9yV3JhcHBlciA/IGAke3NlbGVjdG9yV3JhcHBlcn17JHtiYXNlfX1gIDogYmFzZTtcbiAgICAgIHJldHVybiBgJHthY2N9JHt3cmFwcGVkfWA7XG4gICAgfSwgJycpfWA7XG4gIH1cbn07XG5cbi8qKlxuICogQ29tYmluZXMgYWxsIGluc3RhbmNlIHN0eWxlTWFwIHNlbGVjdG9ycyArIHN0eWxlIGluZm8gaW50byBvbmUgY3NzVGV4dFxuICogdXNlZCBmb3IgdXBkYXRpbmcgQ1NTU3R5bGVTaGVldHMgb3IgPHN0eWxlPiB0YWdzLlxuICovXG5leHBvcnQgY29uc3QgY29uc3RydWN0SW5zdGFuY2VTdHlsZXMgPSAoaW5zdGFuY2VTdHlsZXNNYXApID0+IHtcbiAgbGV0IHN0eWxlcyA9ICcnO1xuXG4gIC8vIFNvcnQga2V5cyBpbiBhbHBoYWJldGljYWwgb3JkZXIgdG8gaGVscCBhdm9pZCBoeWRyYXRpb24gbWlzbWF0Y2ggZXJyb3JzXG4gIFsuLi5pbnN0YW5jZVN0eWxlc01hcC5lbnRyaWVzKCldXG4gICAgLmZpbHRlcigoW2tleSwgX10pID0+IGtleSAhPT0gJ3NlJyAmJiBrZXkgIT09ICdzcCcpXG4gICAgLnNvcnQoKGEsIGIpID0+IGJbMF0gLSBhWzBdKVxuICAgIC5mb3JFYWNoKChbXywgc2VsZWN0b3JzXSkgPT4ge1xuICAgICAgc3R5bGVzID0gcGFyc2VTZWxlY3RvcnMoc3R5bGVzLCBzZWxlY3RvcnMpO1xuICAgIH0pO1xuXG4gIC8vIEFsd2F5cyBwYXJzZSBgc2VgIGFuZCBgc3BgIHNlbGVjdG9ycyBsYXN0IHRvIGhlbHAgYXZvaWQgaHlkcmF0aW9uIG1pc21hdGNoIGVycm9yc1xuICAvLyBhbmQgZW5zdXJlIHRoZXkgb3ZlcnJpZGUgYW55IGNvbXBvbmVudCBsZXZlbCBkeW5hbWljIHN0eWxlcy5cbiAgc3R5bGVzID0gYCR7c3R5bGVzfSR7cGFyc2VTZWxlY3RvcnMoJycsIGluc3RhbmNlU3R5bGVzTWFwLmdldCgnc2UnKSl9JHtwYXJzZVNlbGVjdG9ycyhcbiAgICAnJyxcbiAgICBpbnN0YW5jZVN0eWxlc01hcC5nZXQoJ3NwJylcbiAgKX1gO1xuICByZXR1cm4gc3R5bGVzO1xufTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjEgLSAyMDIyIFZhYWRpbiBMdGQuXG4gKiBUaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgaGlkZGVuIGRpcmVjdGx5IHdpdGggYGRpc3BsYXk6IG5vbmVgIG9yIGB2aXNpYmlsaXR5OiBoaWRkZW5gLFxuICogZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIFRoZSBtZXRob2QgZG9lc24ndCB0cmF2ZXJzZSB0aGUgZWxlbWVudCdzIGFuY2VzdG9ycywgaXQgb25seSBjaGVja3MgZm9yIHRoZSBDU1MgcHJvcGVydGllc1xuICogc2V0IGRpcmVjdGx5IHRvIG9yIGluaGVyaXRlZCBieSB0aGUgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gaXNFbGVtZW50SGlkZGVuRGlyZWN0bHkoZWxlbWVudCkge1xuICAvLyBDaGVjayBpbmxpbmUgc3R5bGUgZmlyc3QgdG8gc2F2ZSBhIHJlLWZsb3cuXG4gIGNvbnN0IHN0eWxlID0gZWxlbWVudC5zdHlsZTtcbiAgaWYgKFxuICAgIHN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nIHx8XG4gICAgc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8XG4gICAgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtYXV0b2ZvY3VzLWlnbm9yZScpXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIGlmIChjb21wdXRlZFN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nIHx8IGNvbXB1dGVkU3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbm9ybWFsaXplZCBlbGVtZW50IHRhYmluZGV4LiBJZiBub3QgZm9jdXNhYmxlLCByZXR1cm5zIC0xLlxuICogSXQgY2hlY2tzIGZvciB0aGUgYXR0cmlidXRlIFwidGFiaW5kZXhcIiBpbnN0ZWFkIG9mIHRoZSBlbGVtZW50IHByb3BlcnR5XG4gKiBgdGFiSW5kZXhgIHNpbmNlIGJyb3dzZXJzIGFzc2lnbiBkaWZmZXJlbnQgdmFsdWVzIHRvIGl0LlxuICogZS5nLiBpbiBGaXJlZm94IGA8ZGl2IGNvbnRlbnRlZGl0YWJsZT5gIGhhcyBgdGFiSW5kZXggPSAtMWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVRhYkluZGV4KGVsZW1lbnQpIHtcbiAgaWYgKCFpc0VsZW1lbnRGb2N1c2FibGUoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb25zdCB0YWJJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpIHx8IDA7XG4gIHJldHVybiBOdW1iZXIodGFiSW5kZXgpO1xufVxuXG4vKipcbiAqIFJldHVybnMgaWYgZWxlbWVudCBgYWAgaGFzIGxvd2VyIHRhYiBvcmRlciBjb21wYXJlZCB0byBlbGVtZW50IGBiYFxuICogKGJvdGggZWxlbWVudHMgYXJlIGFzc3VtZWQgdG8gYmUgZm9jdXNhYmxlIGFuZCB0YWJiYWJsZSkuXG4gKiBFbGVtZW50cyB3aXRoIHRhYmluZGV4ID0gMCBoYXZlIGxvd2VyIHRhYiBvcmRlciBjb21wYXJlZCB0byBlbGVtZW50c1xuICogd2l0aCB0YWJpbmRleCA+IDAuXG4gKiBJZiBib3RoIGhhdmUgc2FtZSB0YWJpbmRleCwgaXQgcmV0dXJucyBmYWxzZS5cbiAqL1xuZnVuY3Rpb24gaGFzTG93ZXJUYWJPcmRlcihhLCBiKSB7XG4gIC8vIE5vcm1hbGl6ZSB0YWJJbmRleGVzXG4gIC8vIGUuZy4gaW4gRmlyZWZveCBgPGRpdiBjb250ZW50ZWRpdGFibGU+YCBoYXMgYHRhYkluZGV4ID0gLTFgXG4gIGNvbnN0IGF0aSA9IE1hdGgubWF4KGEudGFiSW5kZXgsIDApO1xuICBjb25zdCBidGkgPSBNYXRoLm1heChiLnRhYkluZGV4LCAwKTtcbiAgcmV0dXJuIGF0aSA9PT0gMCB8fCBidGkgPT09IDAgPyBidGkgPiBhdGkgOiBhdGkgPiBidGk7XG59XG5cbi8qKlxuICogTWVyZ2Ugc29ydCBpdGVyYXRvciwgbWVyZ2VzIHRoZSB0d28gYXJyYXlzIGludG8gb25lLCBzb3J0ZWQgYnkgdGFiaW5kZXguXG4gKi9cbmZ1bmN0aW9uIG1lcmdlU29ydEJ5VGFiSW5kZXgobGVmdCwgcmlnaHQpIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIHdoaWxlIChsZWZ0Lmxlbmd0aCA+IDAgJiYgcmlnaHQubGVuZ3RoID4gMCkge1xuICAgIGlmIChoYXNMb3dlclRhYk9yZGVyKGxlZnRbMF0sIHJpZ2h0WzBdKSkge1xuICAgICAgcmVzdWx0LnB1c2gocmlnaHQuc2hpZnQoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKGxlZnQuc2hpZnQoKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5jb25jYXQobGVmdCwgcmlnaHQpO1xufVxuXG4vKiogU29ydHMgYW4gYXJyYXkgb2YgZWxlbWVudHMgYnkgdGFiaW5kZXguIFJldHVybnMgYSBuZXcgYXJyYXkuICovXG5mdW5jdGlvbiBzb3J0RWxlbWVudHNCeVRhYkluZGV4KGVsZW1lbnRzKSB7XG4gIC8vIEltcGxlbWVudCBhIG1lcmdlIHNvcnQgYXMgQXJyYXkucHJvdG90eXBlLnNvcnQgZG9lcyBhIG5vbi1zdGFibGUgc29ydFxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb3J0XG4gIGNvbnN0IGxlbiA9IGVsZW1lbnRzLmxlbmd0aDtcbiAgaWYgKGxlbiA8IDIpIHtcbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH1cbiAgY29uc3QgcGl2b3QgPSBNYXRoLmNlaWwobGVuIC8gMik7XG4gIGNvbnN0IGxlZnQgPSBzb3J0RWxlbWVudHNCeVRhYkluZGV4KGVsZW1lbnRzLnNsaWNlKDAsIHBpdm90KSk7XG4gIGNvbnN0IHJpZ2h0ID0gc29ydEVsZW1lbnRzQnlUYWJJbmRleChlbGVtZW50cy5zbGljZShwaXZvdCkpO1xuXG4gIHJldHVybiBtZXJnZVNvcnRCeVRhYkluZGV4KGxlZnQsIHJpZ2h0KTtcbn1cblxuLyoqXG4gKiBTZWFyY2hlcyBmb3Igbm9kZXMgdGhhdCBhcmUgdGFiYmFibGUgYW5kIGFkZHMgdGhlbSB0byB0aGUgYHJlc3VsdGAgYXJyYXkuXG4gKiBSZXR1cm5zIGlmIHRoZSBgcmVzdWx0YCBhcnJheSBuZWVkcyB0byBiZSBzb3J0ZWQgYnkgdGFiaW5kZXguXG4gKi9cbmZ1bmN0aW9uIGNvbGxlY3RGb2N1c2FibGVOb2Rlcyhub2RlLCByZXN1bHQpIHtcbiAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8IGlzRWxlbWVudEhpZGRlbkRpcmVjdGx5KG5vZGUpKSB7XG4gICAgLy8gRG9uJ3QgdHJhdmVyc2UgY2hpbGRyZW4gaWYgdGhlIG5vZGUgaXMgbm90IGFuIEhUTUwgZWxlbWVudCBvciBub3QgdmlzaWJsZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBlbGVtZW50ID0gbm9kZTtcbiAgY29uc3QgdGFiSW5kZXggPSBub3JtYWxpemVUYWJJbmRleChlbGVtZW50KTtcbiAgbGV0IG5lZWRzU29ydCA9IHRhYkluZGV4ID4gMDtcbiAgaWYgKHRhYkluZGV4ID49IDApIHtcbiAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIGxldCBjaGlsZHJlbiA9IFtdO1xuICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09ICdzbG90Jykge1xuICAgIGNoaWxkcmVuID0gZWxlbWVudC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgIGNoaWxkcmVuID0gKGVsZW1lbnQuc2hhZG93Um9vdCB8fCBlbGVtZW50KS5jaGlsZHJlbjtcbiAgfVxuICBbLi4uY2hpbGRyZW5dLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgLy8gRW5zdXJlIG1ldGhvZCBpcyBhbHdheXMgaW52b2tlZCB0byBjb2xsZWN0IGZvY3VzYWJsZSBjaGlsZHJlbi5cbiAgICBuZWVkc1NvcnQgPSBjb2xsZWN0Rm9jdXNhYmxlTm9kZXMoY2hpbGQsIHJlc3VsdCkgfHwgbmVlZHNTb3J0O1xuICB9KTtcbiAgcmV0dXJuIG5lZWRzU29ydDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgaGlkZGVuLCBmYWxzZSBvdGhlcndpc2UuXG4gKlxuICogQW4gZWxlbWVudCBpcyB0cmVhdGVkIGFzIGhpZGRlbiB3aGVuIGFueSBvZiB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqIC0gdGhlIGVsZW1lbnQgaXRzZWxmIG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzIGhhcyBgZGlzcGxheTogbm9uZWAuXG4gKiAtIHRoZSBlbGVtZW50IGhhcyBvciBpbmhlcml0cyBgdmlzaWJpbGl0eTogaGlkZGVuYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudEhpZGRlbihlbGVtZW50KSB7XG4gIC8vIGBvZmZzZXRQYXJlbnRgIGlzIGBudWxsYCB3aGVuIHRoZSBlbGVtZW50IGl0c2VsZlxuICAvLyBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyBpcyBoaWRkZW4gd2l0aCBgZGlzcGxheTogbm9uZWAuXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MRWxlbWVudC9vZmZzZXRQYXJlbnRcbiAgaWYgKGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gaXNFbGVtZW50SGlkZGVuRGlyZWN0bHkoZWxlbWVudCk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGZvY3VzYWJsZSwgb3RoZXJ3aXNlIGZhbHNlLlxuICpcbiAqIFRoZSBsaXN0IG9mIGZvY3VzYWJsZSBlbGVtZW50cyBpcyB0YWtlbiBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2MDAxOTQvNDIyODcwMy5cbiAqIEhvd2V2ZXIsIHRoZXJlIGlzbid0IGEgZGVmaW5pdGUgbGlzdCwgaXQncyB1cCB0byB0aGUgYnJvd3Nlci5cbiAqIFRoZSBvbmx5IHN0YW5kYXJkIHdlIGhhdmUgaXMgRE9NIExldmVsIDIgSFRNTCBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItSFRNTC9odG1sLmh0bWwsXG4gKiBhY2NvcmRpbmcgdG8gd2hpY2ggdGhlIG9ubHkgZWxlbWVudHMgdGhhdCBoYXZlIGEgYGZvY3VzKClgIG1ldGhvZCBhcmU6XG4gKiAtIEhUTUxJbnB1dEVsZW1lbnRcbiAqIC0gSFRNTFNlbGVjdEVsZW1lbnRcbiAqIC0gSFRNTFRleHRBcmVhRWxlbWVudFxuICogLSBIVE1MQW5jaG9yRWxlbWVudFxuICpcbiAqIFRoaXMgbm90YWJseSBvbWl0cyBIVE1MQnV0dG9uRWxlbWVudCBhbmQgSFRNTEFyZWFFbGVtZW50LlxuICogUmVmZXJyaW5nIHRvIHRoZXNlIHRlc3RzIHdpdGggdGFiYmFibGVzIGluIGRpZmZlcmVudCBicm93c2Vyc1xuICogaHR0cDovL2FsbHlqcy5pby9kYXRhLXRhYmxlcy9mb2N1c2FibGUuaHRtbFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50Rm9jdXNhYmxlKGVsZW1lbnQpIHtcbiAgLy8gVGhlIGVsZW1lbnQgY2Fubm90IGJlIGZvY3VzZWQgaWYgaXRzIGB0YWJpbmRleGAgYXR0cmlidXRlIGlzIHNldCB0byBgLTFgLlxuICBpZiAoZWxlbWVudC5tYXRjaGVzKCdbdGFiaW5kZXg9XCItMVwiXScpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRWxlbWVudHMgdGhhdCBjYW5ub3QgYmUgZm9jdXNlZCBpZiB0aGV5IGhhdmUgYSBgZGlzYWJsZWRgIGF0dHJpYnV0ZS5cbiAgaWYgKGVsZW1lbnQubWF0Y2hlcygnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbiwgb2JqZWN0JykpIHtcbiAgICByZXR1cm4gZWxlbWVudC5tYXRjaGVzKCc6bm90KFtkaXNhYmxlZF0pJyk7XG4gIH1cblxuICAvLyBFbGVtZW50cyB0aGF0IGNhbiBiZSBmb2N1c2VkIGV2ZW4gaWYgdGhleSBoYXZlIGEgYGRpc2FibGVkYCBhdHRyaWJ1dGUuXG4gIHJldHVybiBlbGVtZW50Lm1hdGNoZXMoJ2FbaHJlZl0sIGFyZWFbaHJlZl0sIGlmcmFtZSwgW3RhYmluZGV4XSwgW2NvbnRlbnRFZGl0YWJsZV0nKTtcbn1cblxuLyoqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBmb2N1c2VkLCBmYWxzZSBvdGhlcndpc2UuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50Rm9jdXNlZChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LmdldFJvb3ROb2RlKCkuYWN0aXZlRWxlbWVudCA9PT0gZWxlbWVudDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgdGFiLW9yZGVyZWQgYXJyYXkgb2YgZm9jdXNhYmxlIGVsZW1lbnRzIGZvciBhIHJvb3QgZWxlbWVudC5cbiAqIFRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBpbmNsdWRlIHRoZSByb290IGVsZW1lbnQgaWYgaXQgaXMgZm9jdXNhYmxlLlxuICpcbiAqIFRoZSBtZXRob2QgdHJhdmVyc2VzIG5vZGVzIGluIHNoYWRvdyBET00gdHJlZXMgdG9vIGlmIGFueS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZvY3VzYWJsZUVsZW1lbnRzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBbXTtcbiAgY29uc3QgbmVlZHNTb3J0QnlUYWJJbmRleCA9IGNvbGxlY3RGb2N1c2FibGVOb2RlcyhlbGVtZW50LCBmb2N1c2FibGVFbGVtZW50cyk7XG4gIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgLy8gdGhlIGZpbmFsIGFycmF5IGJ5IHRhYmluZGV4Llx1MjI0OFxuICBpZiAobmVlZHNTb3J0QnlUYWJJbmRleCkge1xuICAgIHJldHVybiBzb3J0RWxlbWVudHNCeVRhYkluZGV4KGZvY3VzYWJsZUVsZW1lbnRzKTtcbiAgfVxuICByZXR1cm4gZm9jdXNhYmxlRWxlbWVudHM7XG59XG4iLCAiaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICdsaXQtaHRtbC9pcy1zZXJ2ZXIuanMnO1xuXG5leHBvcnQgY29uc3QgaXNTc3IgPSAoKSA9PiBpc1NlcnZlcjtcblxuZXhwb3J0IGNvbnN0IGlzQnJvd3Nlckxpa2UgPSAoKSA9PiBnbG9iYWxUaGlzICE9PSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkUmVzaXplQ29udHJvbGxlciA9IChyZXNpemVDb250cm9sbGVyKSA9PlxuICByZXNpemVDb250cm9sbGVyPy5bJ19vYnNlcnZlciddPy5bJ3Vub2JzZXJ2ZSddO1xuXG5pbnRlcmZhY2UgTmF2aWdhdG9yVUFEYXRhIHtcbiAgYnJhbmRzOiBBcnJheTx7IGJyYW5kOiBzdHJpbmc7IHZlcnNpb246IHN0cmluZyB9PjtcbiAgbW9iaWxlOiBib29sZWFuO1xuICBwbGF0Zm9ybTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxhdGZvcm0oKTogc3RyaW5nIHtcbiAgY29uc3QgdWFEYXRhID0gKG5hdmlnYXRvciBhcyBhbnkpLnVzZXJBZ2VudERhdGEgYXMgTmF2aWdhdG9yVUFEYXRhIHwgdW5kZWZpbmVkO1xuXG4gIGlmICh1YURhdGE/LnBsYXRmb3JtKSB7XG4gICAgcmV0dXJuIHVhRGF0YS5wbGF0Zm9ybTtcbiAgfVxuXG4gIHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm07XG59XG5cbmV4cG9ydCBjb25zdCBpc1BsYXRmb3JtID0gKHBsYXRmb3JtOiAnSU9TJykgPT4ge1xuICBpZiAoIWlzU3NyKCkpIHtcbiAgICBpZiAocGxhdGZvcm0gPT09ICdJT1MnKSB7XG4gICAgICByZXR1cm4gL2lQKGhvbmV8YWR8b2QpfGlPUy8udGVzdChnZXRQbGF0Zm9ybSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4iLCAiY29uc3QgbmF0aXZlVmFsaWRpdHlTdGF0ZXM6IEFycmF5PGtleW9mIFZhbGlkaXR5U3RhdGU+ID0gW1xuICAnYmFkSW5wdXQnLFxuICAnY3VzdG9tRXJyb3InLFxuICAncGF0dGVybk1pc21hdGNoJyxcbiAgJ3JhbmdlT3ZlcmZsb3cnLFxuICAncmFuZ2VVbmRlcmZsb3cnLFxuICAnc3RlcE1pc21hdGNoJyxcbiAgJ3Rvb0xvbmcnLFxuICAndG9vU2hvcnQnLFxuICAndHlwZU1pc21hdGNoJyxcbiAgJ3ZhbHVlTWlzc2luZycsXG5dO1xuXG4vKipcbiAqIEN1c3RvbSB2YWxpZGF0b3IgZm9yIHRoZSBgQG9wZW4td2MvZm9ybS1jb250cm9sYCB0aGF0IGxlYW5zIG9uIGFuIGludGVybmFsXG4gKiBpbnB1dCB0byBmb3J3YXJkIG5hdGl2ZSB2YWxpZGF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBpbm5lcklucHV0VmFsaWRhdG9ycyA9IG5hdGl2ZVZhbGlkaXR5U3RhdGVzLm1hcCgoa2V5KSA9PiAoe1xuICBrZXksXG4gIGlzVmFsaWQoaW5zdGFuY2U6IEhUTUxFbGVtZW50ICYgeyB2YWxpZGF0aW9uVGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50IH0pIHtcbiAgICBpZiAoaW5zdGFuY2UudmFsaWRhdGlvblRhcmdldCkge1xuICAgICAgcmV0dXJuICFpbnN0YW5jZS52YWxpZGF0aW9uVGFyZ2V0LnZhbGlkaXR5W2tleV07XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxufSkpO1xuIiwgIi8qKlxuICogTk9URTpcbiAqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgaW1wbGVtZW50YXRpb24gZm9yIGFuIGV4dHJlbWVseSBzaW1wbGUgYW5kIGxpZ2h0d2VpZ2h0XG4gKiByZWFjdGl2ZSBzb2x1dGlvbiBsb29zZWx5IGJhc2VkIG9uIHNvbGlkLWpzIHN0eWxlIHNpZ25hbHMuIEl0IGVuYWJsZXMgYmFzaWNcbiAqIHJlYWN0aXZlIHN1YnNjcmlwdGlvbnMgYW5kIGNvbXB1dGVkIHNpZ25hbHMgb2Ygb25lIG9yIG1vcmUgb3RoZXIgZGVwZW5kZW5jeSBzaWduYWxzLlxuICpcbiAqIEluIGl0cyBjdXJyZW50IHN0YXRlLCBpdCBpcyBub3QgcGVyZmVjdCBhbmQgZG9lcyBub3QgaGFuZGxlIGFsbCBlZGdlIGNhc2VzLiBGb3JcbiAqIGV4YW1wbGUsIGlmIHlvdSBoYXZlIG11bHRpcGxlIGxheWVycyBvZiBjb21wdXRlZCBzdGF0ZSB3aXRoIGEgc2luZ2xlIGRlcGVuZGVuY3lcbiAqIHNoYXJlZCBtb3JlIHRoYW4gb25jZSBhY3Jvc3MgdGhvc2UgbGF5ZXJzLCB0aGUgc2FtZSBjaGFuZ2Ugd2lsbCBwb3RlbnRpYWxseSBiZVxuICogZW1pdHRlZCB0d2ljZS4gT3VyIGV4cGVjdGF0aW9uIGF0bSwgaXMgdGhhdCB3ZSB3b24ndCBlbmNvdW50ZXIgdGhvc2Ugc2NlbmFyaW9zXG4gKiBpbiB0aGlzIGxpYnJhcnkuXG4gKi9cblxuLyoqIFVuc3Vic2NyaWJlcyBmcm9tIHZhbHVlIHVwZGF0ZXMuICovXG5leHBvcnQgdHlwZSBVbnN1YnNjcmliZXIgPSAoKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25hbDxUPiB7XG4gIC8qKiBHZXQgdGhlIGN1cnJlbnQgdmFsdWUgKi9cbiAgZ2V0KCk6IFQ7XG5cbiAgLyoqIFNldCByZWFjdGl2ZSB2YWx1ZSAqL1xuICBzZXQodmFsdWU6IFQpO1xuXG4gIC8qKiBVcGRhdGUgcmVhY3RpdmUgdmFsdWUgdXNpbmcgY2FsbGJhY2sgKi9cbiAgdXBkYXRlKGZuOiAodmFsdWU6IFQpID0+IFQpO1xuXG4gIC8qKiBTdWJzY3JpYmUgdG8gcmVhY3RpdmUgdmFsdWUgY2hhbmdlcyAqL1xuICBzdWJzY3JpYmUoZm46ICh2YWx1ZTogVCwgdW5zdWJzY3JpYmU/OiBVbnN1YnNjcmliZXIpID0+IHZvaWQpOiBVbnN1YnNjcmliZXI7XG59XG5cbmNvbnN0IGNvbnRleHQgPSBbXTtcblxuZnVuY3Rpb24gX3N1YnNjcmliZShydW5uaW5nLCBzdWJzY3JpcHRpb25zKSB7XG4gIHN1YnNjcmlwdGlvbnMuYWRkKHJ1bm5pbmcpO1xuICBydW5uaW5nLmRlcGVuZGVuY2llcy5hZGQoc3Vic2NyaXB0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFudXAocnVubmluZykge1xuICBmb3IgKGNvbnN0IGRlcCBvZiBydW5uaW5nLmRlcGVuZGVuY2llcykge1xuICAgIGRlcC5kZWxldGUocnVubmluZyk7XG4gIH1cbiAgcnVubmluZy5kZXBlbmRlbmNpZXMuY2xlYXIoKTtcbn1cblxuLyoqIENyZWF0ZSBhIHNpZ25hbCB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IGdldHRlciBvciBzdWJzY3JpcHRpb24uICovXG5leHBvcnQgZnVuY3Rpb24gc2lnbmFsPFQ+KHZhbHVlPzogVCkge1xuICBjb25zdCBzdWJzY3JpcHRpb25zID0gbmV3IFNldDxhbnk+KCk7XG5cbiAgY29uc3QgZ2V0ID0gKCk6IFQgPT4ge1xuICAgIGNvbnN0IHJ1bm5pbmcgPSBjb250ZXh0W2NvbnRleHQubGVuZ3RoIC0gMV07XG4gICAgaWYgKHJ1bm5pbmcpIF9zdWJzY3JpYmUocnVubmluZywgc3Vic2NyaXB0aW9ucyk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHNldCA9IChuZXh0VmFsdWU6IFQpID0+IHtcbiAgICB2YWx1ZSA9IG5leHRWYWx1ZTtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiBbLi4uc3Vic2NyaXB0aW9uc10pIHtcbiAgICAgIHN1Yi5leGVjdXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZSA9IChmbjogKHZhbHVlOiBUKSA9PiBUKSA9PiB7XG4gICAgdmFsdWUgPSBmbih2YWx1ZSk7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgWy4uLnN1YnNjcmlwdGlvbnNdKSB7XG4gICAgICBzdWIuZXhlY3V0ZSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBUaGlzIGlzIGVzc2VudGlhbGx5IGEgdXNlRWZmZWN0IG1hc3F1ZXJhZGluZyBhcyBhIHN1YnNjcmliZSBmdW5jdGlvblxuICBjb25zdCBzdWJzY3JpYmUgPSAoZm46ICh2YWx1ZTogVCwgdW5zdWJzY3JpYmU/OiBVbnN1YnNjcmliZXIpID0+IHZvaWQpOiBVbnN1YnNjcmliZXIgPT4ge1xuICAgIGNvbnN0IGV4ZWN1dGUgPSAoKSA9PiB7XG4gICAgICBjbGVhbnVwKHJ1bm5pbmcpO1xuICAgICAgY29udGV4dC5wdXNoKHJ1bm5pbmcpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4ocnVubmluZy5nZXQoKSwgKCkgPT4gY2xlYW51cChydW5uaW5nKSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjb250ZXh0LnBvcCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICgpID0+IGNsZWFudXAocnVubmluZyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJ1bm5pbmcgPSB7XG4gICAgICBleGVjdXRlLFxuICAgICAgZGVwZW5kZW5jaWVzOiBuZXcgU2V0KCksXG4gICAgICBnZXQsXG4gICAgfTtcblxuICAgIHJldHVybiBleGVjdXRlKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQsXG4gICAgc2V0LFxuICAgIHVwZGF0ZSxcbiAgICBzdWJzY3JpYmUsXG4gIH0gYXMgU2lnbmFsPFQ+O1xufVxuXG4vKiogT25lIG9yIG1vcmUgYFNpZ25hbGBzICovXG50eXBlIFNpZ25hbHMgPSBTaWduYWw8YW55PiB8IFtTaWduYWw8YW55PiwgLi4uQXJyYXk8U2lnbmFsPGFueT4+XSB8IFNpZ25hbDxhbnk+W107XG5cbi8qKiBPbmUgb3IgbW9yZSB2YWx1ZXMgZnJvbSBzaWduYWxzICovXG5leHBvcnQgdHlwZSBTaWduYWxWYWx1ZXM8VD4gPSBUIGV4dGVuZHMgU2lnbmFsPGluZmVyIFU+XG4gID8gVVxuICA6IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gZXh0ZW5kcyBTaWduYWw8aW5mZXIgVT4gPyBVIDogbmV2ZXIgfTtcblxuLyoqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCBzaWduYWwgZnJvbSBvbmUgb3IgbW9yZSBzaWduYWwgZGVwZW5kZW5jaWVzICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQ8RCBleHRlbmRzIFNpZ25hbHMsIFQ+KFxuICBkZXBlbmRlbmNpZXM6IEQsXG4gIGZuOiAodmFsdWVzOiBTaWduYWxWYWx1ZXM8RD4pID0+IFRcbik6IFNpZ25hbDxUPjtcblxuLyoqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCBzaWduYWwgZnJvbSBvbmUgb3IgbW9yZSBzaWduYWwgZGVwZW5kZW5jaWVzICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQ8RCBleHRlbmRzIFNpZ25hbHMsIFQ+KFxuICBkZXBlbmRlbmNpZXM6IEQsXG4gIGZuPzogKHZhbHVlczogU2lnbmFsVmFsdWVzPEQ+LCBzZXQ/OiAodmFsdWU6IGFueSkgPT4gdm9pZCkgPT4gVFxuKTogU2lnbmFsPHVua25vd24+O1xuXG4vKiogQ3JlYXRlIGEgbmV3IGNvbXB1dGVkIHNpZ25hbCBmcm9tIG9uZSBvciBtb3JlIHNpZ25hbCBkZXBlbmRlbmNpZXMgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZDxEIGV4dGVuZHMgU2lnbmFscz4oXG4gIGRlcGVuZGVuY2llczogRCxcbiAgZm4/OiAoLi4ucGFyYW1zOiBhbnlbXSkgPT4gYW55XG4pOiBTaWduYWw8YW55PiB7XG4gIGNvbnN0IGF1dG8gPSBmbi5sZW5ndGggPCAyO1xuICBjb25zdCBzID0gc2lnbmFsPGFueT4oKTtcbiAgY29uc3Qgc2luZ2xlID0gIUFycmF5LmlzQXJyYXkoZGVwZW5kZW5jaWVzKTtcbiAgY29uc3QgZGVwcyA9IHNpbmdsZVxuICAgID8gKFtkZXBlbmRlbmNpZXNdIGFzIFNpZ25hbDxTaWduYWxWYWx1ZXM8RD4+W10pXG4gICAgOiAoZGVwZW5kZW5jaWVzIGFzIFNpZ25hbDxTaWduYWxWYWx1ZXM8RD4+W10pO1xuXG4gIC8vIFdlIG9ubHkgbmVlZCB0byBzdWJzY3JpYmUgdG8gdGhlIGZpcnN0IGl0ZW0gYmVjYXVzZVxuICAvLyB0aGUgYWN0IG9mIHJldHJpZXZpbmcgYWxsIGRlcGVuZGVuY3kgdmFsdWVzIHdpbGwgYWRkIHRoZW1cbiAgLy8gdG8gdGhlIGNvbnRleHQgc3RhY2sgYXBwcm9wcmlhdGVseVxuICBjb25zdCBkZXAgPSBkZXBzWzBdO1xuICBkZXAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgPSBkZXBzLm1hcCgoZGVwKSA9PiBkZXAuZ2V0KCkpO1xuICAgIGNvbnN0IHJldCA9IHNpbmdsZSA/IHZhbHVlc1swXSA6ICh2YWx1ZXMgYXMgU2lnbmFsVmFsdWVzPEQ+KTtcbiAgICBpZiAoYXV0bykge1xuICAgICAgcy5zZXQoZm4ocmV0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKHJldCwgcy5zZXQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzO1xufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIHdjL25vLXNlbGYtY2xhc3MgKi9cbmltcG9ydCB7IGNvbmZpZywgc2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMsIGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgTXRlRWxlbWVudCB9IGZyb20gJy4vbXRlLmVsZW1lbnQnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0gZnJvbSAnLi4vYXR0cmlidXRlLWNvbnZlcnRlcic7XG5cbmV4cG9ydCB0eXBlIFNwYWNpbmdWYWx1ZSA9XG4gIHwgbnVtYmVyXG4gIHwgc3RyaW5nXG4gIHwgMVxuICB8IDJcbiAgfCAzXG4gIHwgNFxuICB8IDVcbiAgfCA2XG4gIHwgJ25vbmUnXG4gIHwgJ3hzJ1xuICB8ICdzbSdcbiAgfCAnbWQnXG4gIHwgJ2xnJ1xuICB8ICd4bCdcbiAgfCAneHhsJ1xuICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgVW5pdFZhbHVlID0gbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBCb3JkZXJSYWRpdXNWYWx1ZSA9XG4gIHwgJ25vbmUnXG4gIHwgJ3hzJ1xuICB8ICdzbSdcbiAgfCAnbWQnXG4gIHwgJ2xnJ1xuICB8ICd4bCdcbiAgfCAneHhsJ1xuICB8ICdmdWxsJ1xuICB8IHN0cmluZ1xuICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgQm9yZGVyV2lkdGhWYWx1ZSA9ICdub25lJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgT3BhY2l0eVZhbHVlID1cbiAgfCAneHh4cydcbiAgfCAneHhzJ1xuICB8ICd4cydcbiAgfCAnc20nXG4gIHwgJ21kJ1xuICB8ICdsZydcbiAgfCAneGwnXG4gIHwgJ3h4bCdcbiAgfCBzdHJpbmdcbiAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFJlc3BvbnNpdmVWYWx1ZTxUPiA9IFQgfCBQYXJ0aWFsPFJlY29yZDwneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnLCBUPj47XG5cbmNvbnN0IGRlZmF1bHRCb3JkZXJGYWN0b3J5ID0gKHdpZHRoPywgY29sb3I/LCBzdHlsZT8pID0+XG4gIGAke3N0eWxlID8/ICdzb2xpZCd9ICR7XG4gICAgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzKFtcbiAgICAgIHsgcHJvcDogJ2JvcmRlcldpZHRoJywgdmFsdWU6IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUod2lkdGggPz8gJzFweCcpIH0sXG4gICAgXSlbMF0/LnZhbHVlXG4gIH0gJHtkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKGNvbG9yKSA/PyBjb25maWcuY29sb3IuYm9yZGVyMX1gO1xuXG5leHBvcnQgY2xhc3MgTXRlQ29udGVudEJhc2UgZXh0ZW5kcyBNdGVFbGVtZW50IHtcbiAgLy8gLS0gU3BhY2luZyBQcm9wcyAtLVxuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG0/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi1yaWdodGAgYW5kIGBtYXJnaW4tbGVmdGAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG14PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tdG9wYCBhbmQgYG1hcmdpbi1ib3R0b21gIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBteT86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXRvcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtdD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXJpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1yPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tYm90dG9tYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1iPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tbGVmdGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtbD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZ2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXJpZ2h0YCBhbmQgYHBhZGRpbmctbGVmdGAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHB4PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXRvcGAgYW5kIGBwYWRkaW5nLWJvdHRvbWAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHB5PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXRvcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwdD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1yaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwcj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1ib3R0b21gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcGI/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctbGVmdGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwbD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8vIC0tIFBvc2l0aW9uaW5nIFByb3BzIC0tXG5cbiAgLyoqIFNldHMgdGhlIGBkaXNwbGF5YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdibG9jaydcbiAgICB8ICdpbmxpbmUtYmxvY2snXG4gICAgfCAnZmxleCdcbiAgICB8ICdpbmxpbmUtZmxleCdcbiAgICB8ICdncmlkJ1xuICAgIHwgJ2lubGluZS1ncmlkJ1xuICAgIHwgJ2lubGluZSdcbiAgICB8ICdsaXN0LWl0ZW0nXG4gICAgfCAnbm9uZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1pdGVtc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBhPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZW5kJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnYmFzZWxpbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24taXRlbXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYWxpZ25JdGVtcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2Jhc2VsaW5lJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGFsaWduLXNlbGZgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYWxpZ25TZWxmPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnYXV0bydcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdiYXNlbGluZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1jb250ZW50YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGFsaWduQ29udGVudD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ3NwYWNlLWJldHdlZW4nXG4gICAgfCAnc3BhY2UtYXJvdW5kJ1xuICAgIHwgJ3NwYWNlLWV2ZW5seSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LWNvbnRlbnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgaj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIHwgJ3NwYWNlLWFyb3VuZCdcbiAgICB8ICdzcGFjZS1ldmVubHknXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1jb250ZW50YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGp1c3RpZnlDb250ZW50PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3NwYWNlLWJldHdlZW4nXG4gICAgfCAnc3BhY2UtYXJvdW5kJ1xuICAgIHwgJ3NwYWNlLWV2ZW5seSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LWl0ZW1zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGp1c3RpZnlJdGVtcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnbGVmdCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGp1c3RpZnktc2VsZmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBqdXN0aWZ5U2VsZj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnbGVmdCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZmxleDogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWRpcmVjdGlvbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBkaXJlY3Rpb24/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3JvdycgfCAncm93UmV2ZXJzZScgfCAnY29sdW1uJyB8ICdjb2x1bW5SZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1kaXJlY3Rpb25gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleERpcmVjdGlvbj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAncm93JyB8ICdyb3dSZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtblJldmVyc2UnIHwgJ2luaXRpYWwnIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWJhc2lzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJhc2lzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1iYXNpc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4QmFzaXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWdyb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3Jvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtZ3Jvd2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4R3Jvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtc2hyaW5rYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIHNocmluaz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtc2hyaW5rYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhTaHJpbms/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXdyYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgd3JhcD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAnbm93cmFwJyB8ICd3cmFwJyB8ICd3cmFwLXJldmVyc2UnIHwgJ2luaXRpYWwnIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXdyYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleFdyYXA/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ25vd3JhcCcgfCAnd3JhcCcgfCAnd3JhcC1yZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgb3JkZXJgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgb3JkZXI/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBnYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ2FwPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBjb2x1bW4tZ2FwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGNvbHVtbkdhcD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcm93LWdhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICByb3dHYXA/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtY29sdW1uYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRDb2x1bW4/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXJvd2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkUm93PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1hdXRvLWZsb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZEF1dG9GbG93PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdyb3cnIHwgJ2NvbHVtbicgfCAnZGVuc2UnIHwgJ3JvdyBkZW5zZScgfCAnY29sdW1uIGRlbnNlJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1hdXRvLWNvbHVtbnNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZEF1dG9Db2x1bW5zPzogUmVzcG9uc2l2ZVZhbHVlPCdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXV0by1yb3dzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRBdXRvUm93cz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICAnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZVxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgJ25vbmUnIHwgJ2F1dG8nIHwgJ21heC1jb250ZW50JyB8ICdtaW4tY29udGVudCcgfCBVbml0VmFsdWVcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtdGVtcGxhdGUtcm93c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBncmlkVGVtcGxhdGVSb3dzPzogUmVzcG9uc2l2ZVZhbHVlPCdub25lJyB8ICdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtdGVtcGxhdGUtYXJlYXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZFRlbXBsYXRlQXJlYXM/OiBSZXNwb25zaXZlVmFsdWU8J25vbmUnIHwgc3RyaW5nIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXJlYWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQXJlYT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvLyAtLSBTaXppbmcgUHJvcHMgLS1cblxuICAvKiogU2V0cyB0aGUgYHdpZHRoYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIHc/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1heC13aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtYXh3PzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtaW4td2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWludz86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgaGVpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGg/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1heC1oZWlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWF4aD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWluLWhlaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtaW5oPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBiYWNrZ3JvdW5kYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiBDYW4gYmUgcGFzc2VkIGRvdCBub3RhdGVkIHRoZW1lIGNvbmZpZyBzdHJpbmdzIHRvIHNlbGVjdCBjb2xvciB0b2tlbiB2YWx1ZXMuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJnPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgY29sb3JgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuIENhbiBiZSBwYXNzZWQgZG90IG5vdGF0ZWQgdGhlbWUgY29uZmlnIHN0cmluZ3MgdG8gc2VsZWN0IGNvbG9yIHRva2VuIHZhbHVlcy4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1jb2xvcmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gQ2FuIGJlIHBhc3NlZCBkb3Qgbm90YXRlZCB0aGVtZSBjb25maWcgc3RyaW5ncyB0byBzZWxlY3QgY29sb3IgdG9rZW4gdmFsdWVzLiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBib3JkZXJDb2xvcj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci13aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyV2lkdGg/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyV2lkdGhWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItc3R5bGVgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJvcmRlclN0eWxlPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdzb2xpZCcgfCAnZG90dGVkJyB8ICdkYXNoZWQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXJgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlcj86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3BgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcD86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1yaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyUmlnaHQ/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJCb3R0b20/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItbGVmdGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyTGVmdD86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyVG9wUmlnaHRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyVG9wTGVmdFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tTGVmdFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1c2AgYW5kIGBib3JkZXItdG9wLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1c2AgYW5kIGBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJSaWdodFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c2AgYW5kIGBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbVJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLWxlZnQtcmFkaXVzYCBhbmQgYGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyTGVmdFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBsaW5lLWhlaWdodGAgY3NzIHByb3BlcnR5ICAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBsaW5lSGVpZ2h0PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IG51bWJlclxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZm9udC13ZWlnaHRgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmb250V2VpZ2h0PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnbGlnaHQnXG4gICAgfCAncmVndWxhcidcbiAgICB8ICdtZWRpdW0nXG4gICAgfCAnbGlnaHRlcidcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnYm9sZCdcbiAgICB8ICdib2xkZXInXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICAgIHwgJzEwMCdcbiAgICB8ICcyMDAnXG4gICAgfCAnMzAwJ1xuICAgIHwgJzQwMCdcbiAgICB8ICc1MDAnXG4gICAgfCAnNjAwJ1xuICAgIHwgJzcwMCdcbiAgICB8ICc4MDAnXG4gICAgfCAnOTAwJ1xuICA+O1xuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIGBmb250V2VpZ2h0YC4gU2V0cyB0aGUgYGZvbnQtd2VpZ2h0YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZnc/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdsaWdodCdcbiAgICB8ICdyZWd1bGFyJ1xuICAgIHwgJ21lZGl1bSdcbiAgICB8ICdsaWdodGVyJ1xuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdib2xkJ1xuICAgIHwgJ2JvbGRlcidcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gICAgfCAnMTAwJ1xuICAgIHwgJzIwMCdcbiAgICB8ICczMDAnXG4gICAgfCAnNDAwJ1xuICAgIHwgJzUwMCdcbiAgICB8ICc2MDAnXG4gICAgfCAnNzAwJ1xuICAgIHwgJzgwMCdcbiAgICB8ICc5MDAnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmb250LXNpemVgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmb250U2l6ZT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCBVbml0VmFsdWUgfCAneHhzJyB8ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCdcbiAgPjtcblxuICAvKiogU2hvcnRoYW5kIGZvciBgZm9udFNpemVgLiBTZXRzIHRoZSBgZm9udC1zaXplYCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZnM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgVW5pdFZhbHVlIHwgJ3h4cycgfCAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmb250LWZhbWlseWAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZvbnRGYW1pbHk/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3NhbnMnIHwgJ3NlcmlmJyB8ICdtb25vJyB8IHN0cmluZ1xuICA+O1xuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIGBvcGFjaXR5YC4gU2V0cyB0aGUgYG9wYWNpdHlgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBvcGFjaXR5PzogUmVzcG9uc2l2ZVZhbHVlPE9wYWNpdHlWYWx1ZT47XG5cbiAgLyoqIEFwcGxpZXMgTW9ydGFyIHN0YW5kYXJkIGJveC1zaGFkb3cgdmFsdWVzICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGVsZXZhdGlvbj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICAnejAnIHwgJ3oxJyB8ICd6MicgfCAnejMnIHwgJ3o0J1xuICA+O1xuXG4gIC8qKiBBZGp1c3QgdGhpcyBlbGVtZW50cyBibGVlZCBpZiBpdCBpcyBhIGRpcmVjdCBkZXNjZW5kYW50IG9mIGFuIG10ZS1sYXlvdXQtY29udGFpbmVyICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbGF5b3V0QmxlZWQ/OiAnZnVsbCcgfCAncG9wb3V0JyB8ICdjb250ZW50JyB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogUmVuZGVycyB0aGlzIGVsZW1lbnQgYXMgYSBzdWJncmlkIHdoZW4gc2V0LiBgZGlzcGxheWAgaXMgc2V0IHRvIGBncmlkYCBhbmQgYGdyaWQtdGVtcGxhdGUtY29sdW1uc2AgaXMgc2V0IHRvIGBzdWJncmlkYC5cbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBzdWJncmlkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgc2VsZWN0b3IgdG8gaGF2ZSBpbnN0YW5jZSBzdHlsZXMgdGFyZ2V0IGEgc3BlY2lmaWMgaW5uZXIgZWxlbWVudC5cbiAgICogVXNlZnVsIGluIHNwZWNpZmljIHNjZW5hcmlvcyB3aGVyZSB0aGUgcHJpbWFyeSBjb250ZW50L3Nsb3Qgd3JhcHBlZCB3aXRoaW4gdGhlIHRlbXBsYXRlXG4gICAqIGxpa2Ugd2l0aCB0aGUgbW9kYWwgY29tcG9uZW50LlxuICAgKi9cbiAgcHJvdGVjdGVkIGNvbnRlbnRTdHlsZVNlbGVjdG9yUm9vdCA9ICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnO1xuXG4gIC8vIExpc3Qgb2YgcHJvcHMgZm9yIG9wdGltYWwgc3R5bGUgdXBkYXRlIGNoZWNraW5nXG4gIHByaXZhdGUgc3RhdGljIGNvbnRlbnRQcm9wcyA9IG5ldyBTZXQoW1xuICAgICdtJyxcbiAgICAnbXgnLFxuICAgICdteScsXG4gICAgJ210JyxcbiAgICAnbXInLFxuICAgICdtYicsXG4gICAgJ21sJyxcbiAgICAncCcsXG4gICAgJ3B4JyxcbiAgICAncHknLFxuICAgICdwdCcsXG4gICAgJ3ByJyxcbiAgICAncGInLFxuICAgICdwbCcsXG4gICAgJ2QnLFxuICAgICdhJyxcbiAgICAnaicsXG4gICAgJ2Jhc2lzJyxcbiAgICAnc2hyaW5rJyxcbiAgICAnZ3JvdycsXG4gICAgJ2RpcmVjdGlvbicsXG4gICAgJ3dyYXAnLFxuICAgICdhbGlnbkl0ZW1zJyxcbiAgICAnYWxpZ25TZWxmJyxcbiAgICAnYWxpZ25Db250ZW50JyxcbiAgICAnanVzdGlmeUNvbnRlbnQnLFxuICAgICdqdXN0aWZ5SXRlbXMnLFxuICAgICdqdXN0aWZ5U2VsZicsXG4gICAgJ2ZsZXgnLFxuICAgICdmbGV4RGlyZWN0aW9uJyxcbiAgICAnZmxleEJhc2lzJyxcbiAgICAnZmxleFNocmluaycsXG4gICAgJ2ZsZXhHcm93JyxcbiAgICAnZmxleFdyYXAnLFxuICAgICdvcmRlcicsXG4gICAgJ2dhcCcsXG4gICAgJ2NvbHVtbkdhcCcsXG4gICAgJ3Jvd0dhcCcsXG4gICAgJ2dyaWRDb2x1bW4nLFxuICAgICdncmlkUm93JyxcbiAgICAnZ3JpZEF1dG9GbG93JyxcbiAgICAnZ3JpZEF1dG9Db2x1bW5zJyxcbiAgICAnZ3JpZEF1dG9Sb3dzJyxcbiAgICAnZ3JpZFRlbXBsYXRlQ29sdW1ucycsXG4gICAgJ2dyaWRUZW1wbGF0ZVJvd3MnLFxuICAgICdncmlkVGVtcGxhdGVBcmVhcycsXG4gICAgJ2dyaWRBcmVhJyxcbiAgICAndycsXG4gICAgJ21heHcnLFxuICAgICdtaW53JyxcbiAgICAnaCcsXG4gICAgJ21heGgnLFxuICAgICdtaW5oJyxcbiAgICAnYmcnLFxuICAgICdjJyxcbiAgICAnYm9yZGVyQ29sb3InLFxuICAgICdib3JkZXJXaWR0aCcsXG4gICAgJ2JvcmRlclN0eWxlJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnYm9yZGVyVG9wJyxcbiAgICAnYm9yZGVyUmlnaHQnLFxuICAgICdib3JkZXJCb3R0b20nLFxuICAgICdib3JkZXJMZWZ0JyxcbiAgICAnYm9yZGVyUmFkaXVzJyxcbiAgICAnYm9yZGVyVG9wUmlnaHRSYWRpdXMnLFxuICAgICdib3JkZXJUb3BMZWZ0UmFkaXVzJyxcbiAgICAnYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMnLFxuICAgICdib3JkZXJCb3R0b21MZWZ0UmFkaXVzJyxcbiAgICAnYm9yZGVyVG9wUmFkaXVzJyxcbiAgICAnYm9yZGVyUmlnaHRSYWRpdXMnLFxuICAgICdib3JkZXJCb3R0b21SYWRpdXMnLFxuICAgICdib3JkZXJMZWZ0UmFkaXVzJyxcbiAgICAnbGluZUhlaWdodCcsXG4gICAgJ2ZvbnRXZWlnaHQnLFxuICAgICdmdycsXG4gICAgJ2ZvbnRTaXplJyxcbiAgICAnZnMnLFxuICAgICdmb250RmFtaWx5JyxcbiAgICAnb3BhY2l0eScsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ2xheW91dEJsZWVkJyxcbiAgICAnc3ViZ3JpZCcsXG4gIF0pO1xuXG4gIHByb3RlY3RlZCB1cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHM6IE1hcDxzdHJpbmcsIGFueT4pIHtcbiAgICBzdXBlci51cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gQ2hlY2sgaWYgYW55IGNvbnRlbnQgcHJvcCBoYXMgY2hhbmdlZCB0byBkZXRlcm1pbmUgaWYgd2UgbmVlZCB0byB1cGRhdGUgdGhlIGluc3RhbmNlIHN0eWxlc1xuICAgIGxldCBzaG91bGRVcGRhdGVTdHlsZXMgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBjaGFuZ2VkUHJvcHMua2V5cygpKSB7XG4gICAgICBpZiAoTXRlQ29udGVudEJhc2UuY29udGVudFByb3BzLmhhcyhrZXkpKSB7XG4gICAgICAgIHNob3VsZFVwZGF0ZVN0eWxlcyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaG91bGRVcGRhdGVTdHlsZXMpIHtcbiAgICAgIC8vIERvdWJsZSB0aGUgYDpob3N0YCBzZWxlY3RvciB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSBiZXlvbmQgbW9zdCBjb21wb25lbnQgbGV2ZWwgc3R5bGVzIGJ5IGRlZmF1bHRcbiAgICAgIHRoaXMuc2V0SW5zdGFuY2VTdHlsZSgnY29udGVudC1iYXNlJywgc2VsZWN0b3JGYWN0b3J5KHRoaXMuY29udGVudFN0eWxlU2VsZWN0b3JSb290KSwge1xuICAgICAgICAvLyBTcGFjaW5nXG4gICAgICAgIG06IHRoaXMubSxcbiAgICAgICAgbXg6IHRoaXMubXgsXG4gICAgICAgIG15OiB0aGlzLm15LFxuICAgICAgICBtdDogdGhpcy5tdCxcbiAgICAgICAgbXI6IHRoaXMubXIsXG4gICAgICAgIG1iOiB0aGlzLm1iLFxuICAgICAgICBtbDogdGhpcy5tbCxcbiAgICAgICAgcDogdGhpcy5wLFxuICAgICAgICBweDogdGhpcy5weCxcbiAgICAgICAgcHk6IHRoaXMucHksXG4gICAgICAgIHB0OiB0aGlzLnB0LFxuICAgICAgICBwcjogdGhpcy5wcixcbiAgICAgICAgcGI6IHRoaXMucGIsXG4gICAgICAgIHBsOiB0aGlzLnBsLFxuICAgICAgICAvLyBQb3NpdGlvbmluZ1xuICAgICAgICBkOiB0aGlzLnN1YmdyaWQgPyAnZ3JpZCcgOiB0aGlzLmQsXG4gICAgICAgIGFsaWduSXRlbXM6IHRoaXMuYSA/PyB0aGlzLmFsaWduSXRlbXMsXG4gICAgICAgIGFsaWduU2VsZjogdGhpcy5hbGlnblNlbGYsXG4gICAgICAgIGFsaWduQ29udGVudDogdGhpcy5hbGlnbkNvbnRlbnQsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiB0aGlzLmogPz8gdGhpcy5qdXN0aWZ5Q29udGVudCxcbiAgICAgICAganVzdGlmeUl0ZW1zOiB0aGlzLmp1c3RpZnlJdGVtcyxcbiAgICAgICAganVzdGlmeVNlbGY6IHRoaXMuanVzdGlmeVNlbGYsXG4gICAgICAgIGZsZXg6IHRoaXMuZmxleCxcbiAgICAgICAgZmxleERpcmVjdGlvbjogdGhpcy5kaXJlY3Rpb24gPz8gdGhpcy5mbGV4RGlyZWN0aW9uLFxuICAgICAgICBmbGV4QmFzaXM6IHRoaXMuYmFzaXMgPz8gdGhpcy5mbGV4QmFzaXMsXG4gICAgICAgIGZsZXhTaHJpbms6IHRoaXMuc2hyaW5rID8/IHRoaXMuZmxleFNocmluayxcbiAgICAgICAgZmxleEdyb3c6IHRoaXMuZ3JvdyA/PyB0aGlzLmZsZXhHcm93LFxuICAgICAgICBmbGV4V3JhcDogdGhpcy53cmFwID8/IHRoaXMuZmxleFdyYXAsXG4gICAgICAgIG9yZGVyOiB0aGlzLm9yZGVyLFxuICAgICAgICBnYXA6IHRoaXMuZ2FwLFxuICAgICAgICBjb2x1bW5HYXA6IHRoaXMuY29sdW1uR2FwLFxuICAgICAgICByb3dHYXA6IHRoaXMucm93R2FwLFxuICAgICAgICBncmlkQ29sdW1uOiB0aGlzLmxheW91dEJsZWVkID8gdGhpcy5sYXlvdXRCbGVlZCA6IHRoaXMuZ3JpZENvbHVtbixcbiAgICAgICAgZ3JpZFJvdzogdGhpcy5ncmlkUm93LFxuICAgICAgICBncmlkQXV0b0Zsb3c6IHRoaXMuZ3JpZEF1dG9GbG93LFxuICAgICAgICBncmlkQXV0b0NvbHVtbnM6IHRoaXMuZ3JpZEF1dG9Db2x1bW5zLFxuICAgICAgICBncmlkQXV0b1Jvd3M6IHRoaXMuZ3JpZEF1dG9Sb3dzLFxuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiB0aGlzLnN1YmdyaWQgPyAnc3ViZ3JpZCcgOiB0aGlzLmdyaWRUZW1wbGF0ZUNvbHVtbnMsXG4gICAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6IHRoaXMuZ3JpZFRlbXBsYXRlUm93cyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlQXJlYXM6IHRoaXMuZ3JpZFRlbXBsYXRlQXJlYXMsXG4gICAgICAgIGdyaWRBcmVhOiB0aGlzLmdyaWRBcmVhLFxuICAgICAgICAvLyBTaXppbmdcbiAgICAgICAgdzogdGhpcy53LFxuICAgICAgICBtYXh3OiB0aGlzLm1heHcsXG4gICAgICAgIG1pbnc6IHRoaXMubWludyxcbiAgICAgICAgaDogdGhpcy5oLFxuICAgICAgICBtYXhoOiB0aGlzLm1heGgsXG4gICAgICAgIG1pbmg6IHRoaXMubWluaCxcbiAgICAgICAgLy8gQ29sb3JzXG4gICAgICAgIGJnOiB0aGlzLmJnLFxuICAgICAgICBjOiB0aGlzLmMsXG4gICAgICAgIC8vIEJvcmRlcnNcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuYm9yZGVyQ29sb3IsXG4gICAgICAgIGJvcmRlcldpZHRoOiB0aGlzLmJvcmRlcldpZHRoLFxuICAgICAgICBib3JkZXJTdHlsZTogdGhpcy5ib3JkZXJTdHlsZSxcbiAgICAgICAgYm9yZGVyOiB0aGlzLmJvcmRlclxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlclRvcDogdGhpcy5ib3JkZXJUb3BcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJSaWdodDogdGhpcy5ib3JkZXJSaWdodFxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlckxlZnQ6IHRoaXMuYm9yZGVyTGVmdFxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlckJvdHRvbTogdGhpcy5ib3JkZXJCb3R0b21cbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICAvLyBCb3JkZXIgUmFkaXVzXG4gICAgICAgIGJvcmRlclJhZGl1czogdGhpcy5ib3JkZXJSYWRpdXMsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOlxuICAgICAgICAgIHRoaXMuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPz8gdGhpcy5ib3JkZXJUb3BSYWRpdXMgPz8gdGhpcy5ib3JkZXJSaWdodFJhZGl1cyxcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlclRvcExlZnRSYWRpdXMgPz8gdGhpcy5ib3JkZXJUb3BSYWRpdXMgPz8gdGhpcy5ib3JkZXJMZWZ0UmFkaXVzLFxuICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID8/IHRoaXMuYm9yZGVyQm90dG9tUmFkaXVzID8/IHRoaXMuYm9yZGVyUmlnaHRSYWRpdXMsXG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID8/IHRoaXMuYm9yZGVyQm90dG9tUmFkaXVzID8/IHRoaXMuYm9yZGVyTGVmdFJhZGl1cyxcbiAgICAgICAgLy8gRm9udHNcbiAgICAgICAgbGluZUhlaWdodDogdGhpcy5saW5lSGVpZ2h0LFxuICAgICAgICBmb250V2VpZ2h0OiB0aGlzLmZ3ID8/IHRoaXMuZm9udFdlaWdodCxcbiAgICAgICAgZm9udFNpemU6IHRoaXMuZnMgPz8gdGhpcy5mb250U2l6ZSxcbiAgICAgICAgZm9udEZhbWlseTogdGhpcy5mb250RmFtaWx5LFxuICAgICAgICAvLyBPcGFjaXR5XG4gICAgICAgIG9wYWNpdHk6IHRoaXMub3BhY2l0eSxcbiAgICAgICAgLy8gRWxldmF0aW9uXG4gICAgICAgIGVsZXZhdGlvbjogdGhpcy5lbGV2YXRpb24sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBkZWZhdWx0Q29udmVydGVyIH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGNvbnN0IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciA9IHtcbiAgZnJvbUF0dHJpYnV0ZTogKHZhbHVlLCB0eXBlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh2YWx1ZT8uWzBdID09PSAneycpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgdHlwZSk7XG4gIH0sXG4gIHRvQXR0cmlidXRlOiAodmFsdWUsIHR5cGUpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIudG9BdHRyaWJ1dGUodmFsdWUsIE9iamVjdCk7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLnRvQXR0cmlidXRlKHZhbHVlLCB0eXBlKTtcbiAgfSxcbn07XG4iLCAiaW1wb3J0IHsgRGlyZWN0aXZlUmVzdWx0IH0gZnJvbSAnbGl0L2RpcmVjdGl2ZS5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTVkcsIFVuc2FmZVNWR0RpcmVjdGl2ZSB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL3Vuc2FmZS1zdmcuanMnO1xuXG5leHBvcnQgY29uc3QgaGViTG9nb1N2Z0NvbnRlbnRzOiBEaXJlY3RpdmVSZXN1bHQ8dHlwZW9mIFVuc2FmZVNWR0RpcmVjdGl2ZT4gPSB1bnNhZmVTVkcoXG4gIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIGlkPVwiTGF5ZXJfMVwiIHg9XCIwXCIgeT1cIjBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MzYuMjcgMTg2LjI0XCI+PHN0eWxlPi5zdDB7ZmlsbDojZTEyNTFifS5zdDF7ZmlsbDojZmZmfTwvc3R5bGU+PGcgaWQ9XCJfeDMxXy1IRUJfTUFJTl9MT0dPXzAwMDAwMDk2MDQzNDA0MjA2ODYxODgwODcwMDAwMDA0ODEzMjQwOTM4OTQ2ODU1MzU1X1wiPjxwYXRoIGQ9XCJNOTMuMTIgMTg2LjI0QzQxLjY5IDE4Ni4yNCAwIDE0NC41NSAwIDkzLjEyUzQxLjY5IDAgOTMuMTIgMGgzNTAuMDNjNTEuNDMgMCA5My4xMiA0MS42OSA5My4xMiA5My4xMnMtNDEuNjkgOTMuMTItOTMuMTIgOTMuMTJIOTMuMTJ6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk05My4xMiAxNzQuMTljLTQ0Ljc2IDAtODEuMDUtMzYuMjktODEuMDUtODEuMDVzMzYuMjktODEuMDUgODEuMDUtODEuMDVoMzUwLjAzYzQ0Ljc2IDAgODEuMDUgMzYuMjkgODEuMDUgODEuMDVzLTM2LjI5IDgxLjA1LTgxLjA1IDgxLjA1SDkzLjEyelwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJtNDQ0Ljk0IDI0LjExLTM1My42NC4wMmMtMzcuMDcgMC02Ny4yIDMwLjk1LTY3LjE2IDY5LjA3IDAgMzcuOTMgMzAuMTYgNjguODggNjcuMTYgNjguODhsMzUzLjYzLS4wN2MzNy4xLS4wMyA2Ny4xNS0zMC44OSA2Ny4yLTY4Ljg1LS4wNC0zOC4yLTMwLjA5LTY5LjA1LTY3LjE5LTY5LjA1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNMjI0LjIxIDEzMi4yM2g4OC4xbC43Ni0xMi45OGgtNTYuMTh2LTE0Ljg0aDQ0LjgxVjg5LjMzaC00NC44MVY3My4yNWw1OC45Mi0uMDEgMS4xNS0xOS4yOWgtOTcuNHpNMTMyLjQ2IDUzLjk1djM1LjM4SDEwOC42VjUzLjk1SDcxLjI3bDQuNjUgNzguMjhoMzIuNjh2LTI3LjgyaDIzLjg2djI3LjgyaDMyLjY4bDQuNjUtNzguMjh6TTQ0OC41MiA5Ny4wMmM5LjktMi44MyAxNi40OS04LjU5IDE2LjQ5LTIwLjY3LjAzLTEzLjgyLTExLjA2LTIyLjQtMjUuMjktMjIuNGgtNzMuMjhsNC42NSA3OC4yOWg2NC4wNmMyNy45OCAwIDI2LjM5LTE4LjggMjYuMzktMTguOCAwLTcuOTYtNS4zMy0xNC42MS0xMy4wMi0xNi40MnptLTMxLjAyIDIyLjIyaC0xMy43MXYtMTQuODNoMTMuMjJjNy4yMyAwIDExLjA5IDIuMzEgMTEuMDkgNy40OC4wMSA0Ljk0LTMuNDkgNy4zNS0xMC42IDcuMzV6bTEuMDYtMjkuOTFoLTE0Ljc3VjczLjI1aDE0LjI1YzcuODUgMCAxMi4wMyAyLjUgMTIuMDMgOC4xMSAwIDUuMzUtMy43OSA3Ljk3LTExLjUxIDcuOTd6TTE4Mi43NiA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpNMzI5LjY0IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4elwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJNNTMwLjM0IDE3Mi43N2MwLTIuNDYtMS40Ni0zLjU0LTQuNC0zLjU0aC00Ljc0djEyLjQ0aDEuODh2LTUuMzloMi4xN2wzLjI4IDUuMzloMi4xMWwtMy41NC01LjQ4YzEuODQtLjIyIDMuMjQtMS4xOSAzLjI0LTMuNDJ6bS03LjI1IDEuOTJ2LTMuODZoMi41N2MxLjMxIDAgMi43MS4yOSAyLjcxIDEuODMgMCAxLjkyLTEuNDMgMi4wMy0zLjAzIDIuMDNoLTIuMjV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk01MjUuMzcgMTY0LjY3Yy01LjkzIDAtMTAuOTYgNC41Ny0xMC45NiAxMC43NiAwIDYuMjQgNS4wMiAxMC44MSAxMC45NiAxMC44MSA1Ljg4IDAgMTAuOS00LjU3IDEwLjktMTAuODEgMC02LjItNS4wMi0xMC43Ni0xMC45LTEwLjc2em0wIDE5Ljc4Yy00LjkzIDAtOC43OS0zLjgzLTguNzktOS4wMiAwLTUuMTEgMy44NS04Ljk2IDguNzktOC45NiA0Ljg4IDAgOC43MyAzLjg1IDguNzMgOC45NiAwIDUuMTktMy44NSA5LjAyLTguNzMgOS4wMnpcIiBjbGFzcz1cInN0MFwiLz48L2c+PC9zdmc+YFxuKTtcblxuZXhwb3J0IGNvbnN0IGhlYkxvZ29XaGl0ZUNvcHlyaWdodFN2Z0NvbnRlbnRzOiBEaXJlY3RpdmVSZXN1bHQ8dHlwZW9mIFVuc2FmZVNWR0RpcmVjdGl2ZT4gPVxuICB1bnNhZmVTVkcoXG4gICAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgaWQ9XCJMYXllcl8xXCIgeD1cIjBcIiB5PVwiMFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDUzNi4yNyAxODYuMjRcIj48c3R5bGU+LnN0MHtmaWxsOiNlMTI1MWJ9LnN0MXtmaWxsOiNmZmZ9PC9zdHlsZT48ZyBpZD1cIl94MzFfLUhFQl9NQUlOX0xPR09fMDAwMDAwOTYwNDM0MDQyMDY4NjE4ODA4NzAwMDAwMDQ4MTMyNDA5Mzg5NDY4NTUzNTVfXCI+PHBhdGggZD1cIk05My4xMiAxODYuMjRDNDEuNjkgMTg2LjI0IDAgMTQ0LjU1IDAgOTMuMTJTNDEuNjkgMCA5My4xMiAwaDM1MC4wM2M1MS40MyAwIDkzLjEyIDQxLjY5IDkzLjEyIDkzLjEycy00MS42OSA5My4xMi05My4xMiA5My4xMkg5My4xMnpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTkzLjEyIDE3NC4xOWMtNDQuNzYgMC04MS4wNS0zNi4yOS04MS4wNS04MS4wNXMzNi4yOS04MS4wNSA4MS4wNS04MS4wNWgzNTAuMDNjNDQuNzYgMCA4MS4wNSAzNi4yOSA4MS4wNSA4MS4wNXMtMzYuMjkgODEuMDUtODEuMDUgODEuMDVIOTMuMTJ6XCIgY2xhc3M9XCJzdDFcIi8+PHBhdGggZD1cIm00NDQuOTQgMjQuMTEtMzUzLjY0LjAyYy0zNy4wNyAwLTY3LjIgMzAuOTUtNjcuMTYgNjkuMDcgMCAzNy45MyAzMC4xNiA2OC44OCA2Ny4xNiA2OC44OGwzNTMuNjMtLjA3YzM3LjEtLjAzIDY3LjE1LTMwLjg5IDY3LjItNjguODUtLjA0LTM4LjItMzAuMDktNjkuMDUtNjcuMTktNjkuMDV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk0yMjQuMjEgMTMyLjIzaDg4LjFsLjc2LTEyLjk4aC01Ni4xOHYtMTQuODRoNDQuODFWODkuMzNoLTQ0LjgxVjczLjI1bDU4LjkyLS4wMSAxLjE1LTE5LjI5aC05Ny40ek0xMzIuNDYgNTMuOTV2MzUuMzhIMTA4LjZWNTMuOTVINzEuMjdsNC42NSA3OC4yOGgzMi42OHYtMjcuODJoMjMuODZ2MjcuODJoMzIuNjhsNC42NS03OC4yOHpNNDQ4LjUyIDk3LjAyYzkuOS0yLjgzIDE2LjQ5LTguNTkgMTYuNDktMjAuNjcuMDMtMTMuODItMTEuMDYtMjIuNC0yNS4yOS0yMi40aC03My4yOGw0LjY1IDc4LjI5aDY0LjA2YzI3Ljk4IDAgMjYuMzktMTguOCAyNi4zOS0xOC44IDAtNy45Ni01LjMzLTE0LjYxLTEzLjAyLTE2LjQyem0tMzEuMDIgMjIuMjJoLTEzLjcxdi0xNC44M2gxMy4yMmM3LjIzIDAgMTEuMDkgMi4zMSAxMS4wOSA3LjQ4LjAxIDQuOTQtMy40OSA3LjM1LTEwLjYgNy4zNXptMS4wNi0yOS45MWgtMTQuNzdWNzMuMjVoMTQuMjVjNy44NSAwIDEyLjAzIDIuNSAxMi4wMyA4LjExIDAgNS4zNS0zLjc5IDcuOTctMTEuNTEgNy45N3pNMTgyLjc2IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4ek0zMjkuNjQgODkuMzNsLjkgMTUuMDhoMjIuMDNsLjktMTUuMDh6TTUyOC4zNCAxNzAuNzdjMC0yLjQ2LTEuNDYtMy41NC00LjQtMy41NGgtNC43NHYxMi40NGgxLjg4di01LjM5aDIuMTdsMy4yOCA1LjM5aDIuMTFsLTMuNTQtNS40OGMxLjg0LS4yMiAzLjI0LTEuMTkgMy4yNC0zLjQyem0tNy4yNSAxLjkydi0zLjg2aDIuNTdjMS4zMSAwIDIuNzEuMjkgMi43MSAxLjgzIDAgMS45Mi0xLjQzIDIuMDMtMy4wMyAyLjAzaC0yLjI1elwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJNNTIzLjM3IDE2Mi42N2MtNS45MyAwLTEwLjk2IDQuNTctMTAuOTYgMTAuNzYgMCA2LjI0IDUuMDIgMTAuODEgMTAuOTYgMTAuODEgNS44OCAwIDEwLjktNC41NyAxMC45LTEwLjgxIDAtNi4yLTUuMDItMTAuNzYtMTAuOS0xMC43NnptMCAxOS43OGMtNC45MyAwLTguNzktMy44My04Ljc5LTkuMDIgMC01LjExIDMuODUtOC45NiA4Ljc5LTguOTYgNC44OCAwIDguNzMgMy44NSA4LjczIDguOTYgMCA1LjE5LTMuODUgOS4wMi04LjczIDkuMDJ6XCIgY2xhc3M9XCJzdDFcIi8+PC9nPjwvc3ZnPmBcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGhlYkxvZ29JbnZlcnNlU3ZnQ29udGVudHM6IERpcmVjdGl2ZVJlc3VsdDx0eXBlb2YgVW5zYWZlU1ZHRGlyZWN0aXZlPiA9IHVuc2FmZVNWRyhcbiAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgaWQ9XCJMYXllcl8xXCIgeD1cIjBcIiB5PVwiMFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDUzNi4yNyAxODYuMjRcIj48c3R5bGU+LnN0MHtmaWxsOiNmZmZ9PC9zdHlsZT48cGF0aCBkPVwiTTQ0My4xNSAwSDkzLjEyQzQxLjY5IDAgMCA0MS42OSAwIDkzLjEyYzAgNTEuNDMgNDEuNjkgOTMuMTIgOTMuMTIgOTMuMTJoMzUwLjAzYzUxLjQzIDAgOTMuMTItNDEuNjkgOTMuMTItOTMuMTJDNTM2LjI3IDQxLjY5IDQ5NC41OCAwIDQ0My4xNSAwem0wIDE3NC4xOUg5My4xMmMtNDQuNzYgMC04MS4wNS0zNi4yOS04MS4wNS04MS4wNXMzNi4yOS04MS4wNSA4MS4wNS04MS4wNWgzNTAuMDNjNDQuNzYgMCA4MS4wNSAzNi4yOSA4MS4wNSA4MS4wNS4wMSA0NC43Ni0zNi4yOCA4MS4wNS04MS4wNSA4MS4wNXptLTEzLjA4LTkyLjgzYzAgNS4zNi0zLjc5IDcuOTgtMTEuNTEgNy45OGgtMTQuNzdWNzMuMjVoMTQuMjVjNy44NCAwIDEyLjAzIDIuNSAxMi4wMyA4LjExem0tMS45NiAzMC41M2MwIDQuOTQtMy41IDcuMzYtMTAuNjEgNy4zNmgtMTMuNzF2LTE0LjgzaDEzLjIyYzcuMjQtLjAxIDExLjEgMi4zIDExLjEgNy40N3ptMTYuODMtODcuNzgtMzUzLjY0LjAyYy0zNy4wNyAwLTY3LjIgMzAuOTUtNjcuMTYgNjkuMDcgMCAzNy45MiAzMC4xNiA2OC44OCA2Ny4xNiA2OC44OGwzNTMuNjMtLjA3YzM3LjEtLjAzIDY3LjE1LTMwLjg5IDY3LjItNjguODUtLjA0LTM4LjItMzAuMDktNjkuMDUtNjcuMTktNjkuMDV6bS0yNzkuOCAxMDguMTJoLTMyLjY4di0yNy44MkgxMDguNnYyNy44Mkg3NS45MmwtNC42NS03OC4yOGgzNy4zM3YzNS4zOGgyMy44NlY1My45NWgzNy4zM2wtNC42NSA3OC4yOHptNDAuNTUtMjcuODJoLTIyLjA0bC0uOS0xNS4wOGgyMy44M2wtLjg5IDE1LjA4em0xMTAuMTItMzEuMTctNTguOTIuMDF2MTYuMDhoNDQuODF2MTUuMDhoLTQ0LjgxdjE0LjgzaDU2LjE4bC0uNzYgMTIuOTloLTg4LjFsLTQuNjUtNzguMjhoOTcuNGwtMS4xNSAxOS4yOXptMzYuNzYgMzEuMTdoLTIyLjA0bC0uOS0xNS4wOGgyMy44M2wtLjg5IDE1LjA4em0xMDguOTcgOS4wM3MxLjU5IDE4LjgtMjYuMzkgMTguOGgtNjQuMDZsLTQuNjUtNzguMjloNzMuMjhjMTQuMjMgMCAyNS4zMSA4LjU4IDI1LjI5IDIyLjQgMCAxMi4wOC02LjU5IDE3Ljg1LTE2LjQ5IDIwLjY3IDcuNjkgMS44MSAxMy4wMiA4LjQ2IDEzLjAyIDE2LjQyek01MzAuMzQgMTcyLjc3YzAtMi40Ni0xLjQ2LTMuNTQtNC40LTMuNTRoLTQuNzR2MTIuNDRoMS44OHYtNS4zOWgyLjE3bDMuMjggNS4zOWgyLjExbC0zLjU0LTUuNDhjMS44NC0uMjIgMy4yNC0xLjE5IDMuMjQtMy40MnptLTcuMjUgMS45MnYtMy44NmgyLjU3YzEuMzEgMCAyLjcxLjI5IDIuNzEgMS44MyAwIDEuOTItMS40MyAyLjAzLTMuMDMgMi4wM2gtMi4yNXpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTUyNS4zNyAxNjQuNjdjLTUuOTMgMC0xMC45NiA0LjU3LTEwLjk2IDEwLjc2IDAgNi4yNCA1LjAyIDEwLjgxIDEwLjk2IDEwLjgxIDUuODggMCAxMC45LTQuNTcgMTAuOS0xMC44MSAwLTYuMi01LjAyLTEwLjc2LTEwLjktMTAuNzZ6bTAgMTkuNzhjLTQuOTMgMC04Ljc5LTMuODMtOC43OS05LjAyIDAtNS4xMSAzLjg1LTguOTYgOC43OS04Ljk2IDQuODggMCA4LjczIDMuODUgOC43MyA4Ljk2IDAgNS4xOS0zLjg1IDkuMDItOC43MyA5LjAyelwiIGNsYXNzPVwic3QwXCIvPjwvc3ZnPmBcbik7XG4iLCAiaW1wb3J0IHsgUmVhY3RpdmVDb250cm9sbGVySG9zdCB9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBjbGFzcyBDbGlja091dHNpZGVDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSB0YXJnZXRzID0gbmV3IFNldDxIVE1MRWxlbWVudD4oKTtcbiAgcHJpdmF0ZSBsaXN0ZW5pbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgJiBFbGVtZW50LCBwcml2YXRlIGNhbGxiYWNrOiAoKSA9PiBhbnkpIHtcbiAgICB0aGlzLmhvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcblxuICAgIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlID0gdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhvc3RDb25uZWN0ZWQoKSB7fVxuXG4gIGhvc3REaXNjb25uZWN0ZWQoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGxpc3RlbkZvckNsaWNrc091dHNpZGVPZihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMudGFyZ2V0cy5hZGQoZWxlbWVudCk7XG4gICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGFkZFRhcmdldChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMudGFyZ2V0cy5hZGQoZWxlbWVudCk7XG4gIH1cblxuICByZW1vdmVUYXJnZXQoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnRhcmdldHMuZGVsZXRlKGVsZW1lbnQpO1xuICB9XG5cbiAgc3RvcExpc3RlbmluZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgIHRoaXMudGFyZ2V0cy5jbGVhcigpO1xuICB9XG5cbiAgaXNMaXN0ZW5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5zaXplID4gMDtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBzaG91bGRJZ25vcmUgPSBldmVudD8udGFyZ2V0Py5oYXNBdHRyaWJ1dGUoJ2RhdGEtaWdub3JlLW91dHNpZGUtY2xpY2tzJyk7XG4gICAgbGV0IHNob3VsZFRyaWdnZXIgPSB0cnVlO1xuICAgIGNvbnN0IHRhcmdldHNJdCA9IHRoaXMudGFyZ2V0cy5lbnRyaWVzKCk7XG4gICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0c0l0KSB7XG4gICAgICBpZiAoZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXModGFyZ2V0WzBdKSkge1xuICAgICAgICBzaG91bGRUcmlnZ2VyID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hvdWxkVHJpZ2dlciAmJiAhc2hvdWxkSWdub3JlKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xuICAgICAgdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICB0aGlzLmxpc3RlbmluZyA9IGZhbHNlO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgUmVhY3RpdmVDb250cm9sbGVySG9zdCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQge1xuICBnZXRGb2N1c2FibGVFbGVtZW50cyxcbiAgaXNFbGVtZW50Rm9jdXNlZCxcbiAgbm9ybWFsaXplVGFiSW5kZXgsXG59IGZyb20gJy4uL3V0aWxpdGllcy9mb2N1cy51dGlsaXRpZXMnO1xuXG5jb25zdCBpbnN0YW5jZXMgPSBbXTtcblxuLyoqIFJldHVybnMgdHJ1ZSBpZiBhbnkgZm9jdXMgdHJhcCBpcyBhY3RpdmUgKi9cbmV4cG9ydCBjb25zdCBpc0ZvY3VzVHJhcEFjdGl2ZSA9ICgpID0+IHtcbiAgcmV0dXJuIGluc3RhbmNlcy5sZW5ndGggPiAwO1xufTtcblxuLyoqIEEgY29udHJvbGxlciBmb3IgdHJhcHBpbmcgZm9jdXMgd2l0aGluIGEgRE9NIG5vZGUuKi9cbmV4cG9ydCBjbGFzcyBGb2N1c1RyYXBDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSB0cmFwTm9kZT86IEVsZW1lbnQgfCBIVE1MRWxlbWVudCA9IG51bGw7XG4gIHByaXZhdGUgcmVzdG9yZVRhcmdldD86IEVsZW1lbnQgfCBIVE1MRWxlbWVudDtcblxuICAvKiogQW4gYXJyYXkgb2YgdGFiLW9yZGVyZWQgZm9jdXNhYmxlIGVsZW1lbnRzIGluc2lkZSB0aGUgdHJhcCBub2RlLiAqL1xuICBwcml2YXRlIGdldCBmb2N1c2FibGVFbGVtZW50cygpIHtcbiAgICByZXR1cm4gZ2V0Rm9jdXNhYmxlRWxlbWVudHModGhpcy50cmFwTm9kZSk7XG4gIH1cblxuICAvKiogVGhlIGluZGV4IG9mIHRoZSBlbGVtZW50IGluc2lkZSB0aGUgdHJhcCBub2RlIHRoYXQgY3VycmVudGx5IGhhcyBmb2N1cy4gKi9cbiAgcHJpdmF0ZSBnZXQgZm9jdXNlZEVsZW1lbnRJbmRleCgpIHtcbiAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IHRoaXMuZm9jdXNhYmxlRWxlbWVudHM7XG4gICAgcmV0dXJuIGZvY3VzYWJsZUVsZW1lbnRzPy5pbmRleE9mKGZvY3VzYWJsZUVsZW1lbnRzPy5maWx0ZXIoaXNFbGVtZW50Rm9jdXNlZCkucG9wKCkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0ICYgRWxlbWVudCkge1xuICAgIHRoaXMuaG9zdC5hZGRDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhvc3RDb25uZWN0ZWQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcbiAgfVxuXG4gIGhvc3REaXNjb25uZWN0ZWQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgYSBmb2N1cyB0cmFwIGZvciBhIERPTSBub2RlIHRoYXQgd2lsbCBwcmV2ZW50IGZvY3VzIGZyb20gZXNjYXBpbmcgdGhlIG5vZGUuXG4gICAqIFRoZSB0cmFwIGNhbiBiZSBkZWFjdGl2YXRlZCB3aXRoIHRoZSBgLnJlbGVhc2VGb2N1cygpYCBtZXRob2QuXG4gICAqXG4gICAqIElmIGZvY3VzIGlzIGluaXRpYWxseSBvdXRzaWRlIHRoZSB0cmFwLCB0aGUgbWV0aG9kIHdpbGwgbW92ZSBmb2N1cyBpbnNpZGUsXG4gICAqIG9uIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBvZiB0aGUgdHJhcCBpbiB0aGUgdGFiIG9yZGVyLlxuICAgKiBUaGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgY2FuIGJlIHRoZSB0cmFwIG5vZGUgaXRzZWxmIGlmIGl0IGlzIGZvY3VzYWJsZVxuICAgKiBhbmQgY29tZXMgZmlyc3QgaW4gdGhlIHRhYiBvcmRlci5cbiAgICpcbiAgICogSWYgdGhlcmUgYXJlIG5vIGZvY3VzYWJsZSBlbGVtZW50cywgdGhlIG1ldGhvZCB3aWxsIHRocm93IGFuIGV4Y2VwdGlvblxuICAgKiBhbmQgdGhlIHRyYXAgd2lsbCBub3QgYmUgc2V0LlxuICAgKlxuICAgKiBJZiBhbiBlbGVtZW50IGlzIHBhc3NlZCB0byBgcmVzdG9yZUZvY3VzT25Eb25lYCB0aGF0IGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIHVwb25cbiAgICogcmVsZWFzZSBvZiB0aGUgZm9jdXMgdHJhcC5cbiAgICovXG4gIHRyYXBGb2N1cyh0cmFwTm9kZTogRWxlbWVudCB8IEhUTUxFbGVtZW50LCByZXN0b3JlRm9jdXNPblJlbGVhc2U/OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnRyYXBOb2RlID0gdHJhcE5vZGU7XG4gICAgdGhpcy5yZXN0b3JlVGFyZ2V0ID0gcmVzdG9yZUZvY3VzT25SZWxlYXNlID8/IG51bGw7XG5cbiAgICBpZiAodGhpcy5mb2N1c2FibGVFbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIEFsbG93cyB1cyB0byBmb2N1cyB0aGluZ3MgbGlrZSBwb3BvdmVycyBpZiB0aGV5IGNvbnRhaW4gbm90IGZvY3VzYWJsZSBjaGlsZHJlblxuICAgICAgaWYgKHRoaXMudHJhcE5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLWZvY3VzLWZhbGxiYWNrJykpIHtcbiAgICAgICAgKHRoaXMudHJhcE5vZGUgYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyYXBOb2RlID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIFRPRE8oUmVlY2UpOiBEZWNpZGUgaWYgd2Ugd2FudCB0byB0aHJvdyBlcnJvciBvciB3YXJuIGF0IGFsbCBoZXJlXG4gICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAvLyAgICdUaGUgdHJhcCBub2RlIHNob3VsZCBoYXZlIGF0IGxlYXN0IG9uZSBmb2N1c2FibGUgZGVzY2VuZGFudCBvciBiZSBmb2N1c2FibGUgaXRzZWxmLidcbiAgICAgIC8vICk7XG4gICAgfVxuXG4gICAgaW5zdGFuY2VzLnB1c2godGhpcyk7XG5cbiAgICBjb25zdCBlbGVtID0gdGhpcy50cmFwTm9kZT8ucXVlcnlTZWxlY3RvcignW2RhdGEtYXV0b2ZvY3VzXScpIGFzIGFueTtcbiAgICBpZiAoZWxlbSAmJiBub3JtYWxpemVUYWJJbmRleChlbGVtKSAhPT0gLTEpIHtcbiAgICAgIGVsZW0uZm9jdXMoKTtcbiAgICAgIGlmIChlbGVtLnNob3dGb2N1c1JpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlbGVtLnNob3dGb2N1c1JpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5mb2N1c2VkRWxlbWVudEluZGV4ID09PSAtMSAmJiB0aGlzLmZvY3VzYWJsZUVsZW1lbnRzPy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmZvY3VzYWJsZUVsZW1lbnRzWzBdLmZvY3VzKCk7XG4gICAgICBpZiAodGhpcy5mb2N1c2FibGVFbGVtZW50c1swXS5zaG93Rm9jdXNSaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5mb2N1c2FibGVFbGVtZW50c1swXS5zaG93Rm9jdXNSaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNUcmFwcGluZ0ZvY3VzKCkge1xuICAgIHJldHVybiB0aGlzLnRyYXBOb2RlICE9PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBmb2N1cyB0cmFwIHNldCB3aXRoIHRoZSBgLnRyYXBGb2N1cygpYCBtZXRob2RcbiAgICogc28gdGhhdCBpdCBiZWNvbWVzIHBvc3NpYmxlIHRvIHRhYiBvdXRzaWRlIHRoZSB0cmFwIG5vZGUuXG4gICAqL1xuICByZWxlYXNlRm9jdXMocHJldmVudFNjcm9sbCA9IGZhbHNlKSB7XG4gICAgdGhpcy50cmFwTm9kZSA9IG51bGw7XG4gICAgaW5zdGFuY2VzLnBvcCgpO1xuICAgICh0aGlzLnJlc3RvcmVUYXJnZXQgYXMgYW55KT8uZm9jdXM/Lih7IHByZXZlbnRTY3JvbGw6IHByZXZlbnRTY3JvbGwgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBga2V5ZG93bmAgZXZlbnQgaGFuZGxlciB0aGF0IG1hbmFnZXMgdGFiYmluZyBuYXZpZ2F0aW9uIHdoZW4gdGhlIHRyYXAgaXMgZW5hYmxlZC5cbiAgICpcbiAgICogLSBNb3ZlcyBmb2N1cyB0byB0aGUgbmV4dCBmb2N1c2FibGUgZWxlbWVudCBvZiB0aGUgdHJhcCBvbiBgVGFiYCBwcmVzcy5cbiAgICogV2hlbiBubyBuZXh0IGVsZW1lbnQgdG8gZm9jdXMsIHRoZSBtZXRob2QgbW92ZXMgZm9jdXMgdG8gdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgKiAtIE1vdmVzIGZvY3VzIHRvIHRoZSBwcmV2IGZvY3VzYWJsZSBlbGVtZW50IG9mIHRoZSB0cmFwIG9uIGBTaGlmdCtUYWJgIHByZXNzLlxuICAgKiBXaGVuIG5vIHByZXYgZWxlbWVudCB0byBmb2N1cywgdGhlIG1ldGhvZCBtb3ZlcyBmb2N1cyB0byB0aGUgbGFzdCBmb2N1c2FibGUgZWxlbWVudC5cbiAgICovXG4gIHByaXZhdGUgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnRyYXBOb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gT25seSBoYW5kbGUgZXZlbnRzIGZvciB0aGUgbGFzdCBpbnN0YW5jZVxuICAgIGlmICh0aGlzICE9PSBBcnJheS5mcm9tKGluc3RhbmNlcykucG9wKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgYmFja3dhcmQgPSBldmVudC5zaGlmdEtleTtcbiAgICAgIHRoaXMuZm9jdXNOZXh0RWxlbWVudChiYWNrd2FyZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIC0gTW92ZXMgZm9jdXMgdG8gdGhlIG5leHQgZm9jdXNhYmxlIGVsZW1lbnQgaWYgYGJhY2t3YXJkID09PSBmYWxzZWAuXG4gICAqIFdoZW4gbm8gbmV4dCBlbGVtZW50IHRvIGZvY3VzLCB0aGUgbWV0aG9kIG1vdmVzIGZvY3VzIHRvIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC5cbiAgICogLSBNb3ZlcyBmb2N1cyB0byB0aGUgcHJldiBmb2N1c2FibGUgZWxlbWVudCBpZiBgYmFja3dhcmQgPT09IHRydWVgLlxuICAgKiBXaGVuIG5vIHByZXYgZWxlbWVudCB0byBmb2N1cyB0aGUgbWV0aG9kIG1vdmVzIGZvY3VzIHRvIHRoZSBsYXN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgKlxuICAgKiBJZiBubyBmb2N1c2FibGUgZWxlbWVudHMsIHRoZSBtZXRob2QgcmV0dXJucyBpbW1lZGlhdGVseS5cbiAgICovXG4gIHByaXZhdGUgZm9jdXNOZXh0RWxlbWVudChiYWNrd2FyZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSB0aGlzLmZvY3VzYWJsZUVsZW1lbnRzO1xuICAgIGlmIChmb2N1c2FibGVFbGVtZW50cz8ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc3RlcCA9IGJhY2t3YXJkID8gLTEgOiAxO1xuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5mb2N1c2VkRWxlbWVudEluZGV4O1xuICAgICAgY29uc3QgbmV4dEluZGV4ID0gKGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCArIGN1cnJlbnRJbmRleCArIHN0ZXApICUgZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoO1xuICAgICAgZm9jdXNhYmxlRWxlbWVudHNbbmV4dEluZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgUmVhY3RpdmVDb250cm9sbGVyLCBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IFNpZ25hbCwgY29tcHV0ZWQsIGlzU3NyLCBzaWduYWwgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3RDb250cm9sbGVyT3B0aW9ucyB7XG4gIC8qKiBOYW1lcyBvZiBzbG90cyB0aGF0IHNob3VsZCB0cmlnZ2VyIGEgY29tcG9uZW50IHVwZGF0ZSBpZiBjaGFuZ2VkICovXG4gIHVwZGF0ZU9uQ2hhbmdlPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjbGFzcyBTbG90Q29udHJvbGxlciBpbXBsZW1lbnRzIFJlYWN0aXZlQ29udHJvbGxlciB7XG4gIHB1YmxpYyBzbG90Q2hhbmdlID0gc2lnbmFsPFNldDxzdHJpbmc+PihudWxsKTtcbiAgcHVibGljIG9uQ29ubmVjdGVkID0gc2lnbmFsKGZhbHNlKTtcbiAgcHVibGljIGNvbm5lY3RlZENvbXBsZXRlID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBzdWJzID0gW107XG4gIHByaXZhdGUgdXBkYXRlVHJpZ2dlclNsb3RzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGhvc3Q6IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgJiBFbGVtZW50LFxuICAgIHB1YmxpYyBvcHRpb25zOiBTbG90Q29udHJvbGxlck9wdGlvbnMgPSBudWxsXG4gICkge1xuICAgIHRoaXMuaG9zdC5hZGRDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlT25DaGFuZ2Uob3B0aW9ucz8udXBkYXRlT25DaGFuZ2UpO1xuICB9XG5cbiAgLyoqIEVtaXRzIHdoZW4gb25lIG9mIHRoZSBzcGVjaWZpZWQgc2xvdHMgaGFzIGNoYW5nZWQgYW5kIGFmdGVyIHRoZSBmaXJzdFVwZGF0ZSBhZnRlciBob3N0Q29ubmVjdGVkICovXG4gIHB1YmxpYyB3YXRjaFNsb3RzKHNsb3RzOiBzdHJpbmdbXSA9IFtdLCB7IHVwZGF0ZU9uQ29ubmVjdGVkIH0gPSB7IHVwZGF0ZU9uQ29ubmVjdGVkOiB0cnVlIH0pIHtcbiAgICBjb25zdCByZXR1cm5TaWduYWwgPSBzaWduYWw8U2V0PHN0cmluZz4+KCk7XG4gICAgdGhpcy5zdWJzLnB1c2goXG4gICAgICBjb21wdXRlZChcbiAgICAgICAgW3RoaXMub25Db25uZWN0ZWQsIHRoaXMuc2xvdENoYW5nZV0sXG4gICAgICAgIChbY29ubmVjdGVkLCBjaGFuZ2VzXTogW2Jvb2xlYW4sIFNldDxzdHJpbmc+XSwgc2V0KSA9PiB7XG4gICAgICAgICAgaWYgKHVwZGF0ZU9uQ29ubmVjdGVkICYmIGNvbm5lY3RlZCAmJiAhdGhpcy5jb25uZWN0ZWRDb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICBzZXQobmV3IFNldChzbG90cykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjaGFuZ2VzICYmXG4gICAgICAgICAgICBBcnJheS5mcm9tKGNoYW5nZXMua2V5cygpKS5zb21lKChrZXkpID0+IHNsb3RzLmxlbmd0aCA9PT0gMCB8fCBzbG90cy5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc2V0KGNoYW5nZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKS5zdWJzY3JpYmUoKGNoYW5nZXM6IFNldDxzdHJpbmc+KSA9PiB7XG4gICAgICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgICAgcmV0dXJuU2lnbmFsLnNldChjaGFuZ2VzKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybiByZXR1cm5TaWduYWwgYXMgU2lnbmFsPFNldDxzdHJpbmc+PjtcbiAgfVxuXG4gIHB1YmxpYyBjaGVjayhzbG90TmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHNsb3ROYW1lID09PSAnZGVmYXVsdCcgPyB0aGlzLmhhc0RlZmF1bHRTbG90KCkgOiB0aGlzLmhhc05hbWVkU2xvdChzbG90TmFtZSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlT25DaGFuZ2Uoc2xvdHM6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2xvdHMpKSB7XG4gICAgICBzbG90cy5mb3JFYWNoKChzbG90KSA9PiB0aGlzLnVwZGF0ZVRyaWdnZXJTbG90cy5hZGQoc2xvdCkpO1xuICAgIH0gZWxzZSBpZiAoc2xvdHMpIHtcbiAgICAgIHRoaXMudXBkYXRlVHJpZ2dlclNsb3RzLmFkZChzbG90cyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYXNEZWZhdWx0U2xvdCgpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuaG9zdC5jaGlsZE5vZGVzXS5zb21lKChub2RlKSA9PiB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5URVhUX05PREUgJiYgbm9kZS50ZXh0Q29udGVudD8udHJpbSgpICE9PSAnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGNvbnN0IGVsID0gbm9kZSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvLyBJZ25vcmUgdmlzdWFsbHkgaGlkZGVuIGVsZW1lbnRzIHNpbmNlIHRoZXkgYXJlbid0IHJlbmRlcmVkXG4gICAgICAgIGlmICh0YWdOYW1lID09PSAnbXRlLXZpc3VhbGx5LWhpZGRlbicpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBkb2Vzbid0IGhhdmUgYSBzbG90IGF0dHJpYnV0ZSwgaXQncyBwYXJ0IG9mIHRoZSBkZWZhdWx0IHNsb3RcbiAgICAgICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoJ3Nsb3QnKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzTmFtZWRTbG90KG5hbWU6IHN0cmluZykge1xuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5xdWVyeVNlbGVjdG9yKGA6c2NvcGUgPiBbc2xvdD1cIiR7bmFtZX1cIl1gKSAhPT0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2xvdENoYW5nZSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBjb25zdCBzbG90ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxTbG90RWxlbWVudDtcblxuICAgIC8vIFNldHVwIGV2ZW50IG1hcFxuICAgIGNvbnN0IGV2ZW50U2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgLy8gQWRkIGR1cGxpY2F0ZSBtYXBwaW5nIGZvciBzaW1wbGlmaWVkIGRlZmF1bHQgbmFtZVxuICAgIGlmIChzbG90Lm5hbWUgPT09ICdbZGVmYXVsdF0nIHx8IHNsb3QubmFtZSA9PT0gJycpIHtcbiAgICAgIGV2ZW50U2V0LmFkZCgnZGVmYXVsdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudFNldC5hZGQoc2xvdC5uYW1lKTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IHNsb3QgY2hhbmdlIHJlYWN0aXZlIGV2ZW50XG4gICAgdGhpcy5zbG90Q2hhbmdlLnNldChldmVudFNldCk7XG5cbiAgICAvLyBBdXRvbWF0aWNhbGx5IHJlcXVlc3QgYSBjb21wb25lbnQgdXBkYXRlIGFzIGNvbmZpZ3VyYXRpb24gZGljdGF0ZXNcbiAgICBpZiAoXG4gICAgICAodGhpcy51cGRhdGVUcmlnZ2VyU2xvdHMuaGFzKCdkZWZhdWx0JykgJiYgIXNsb3QubmFtZSkgfHxcbiAgICAgIChzbG90Lm5hbWUgJiYgdGhpcy51cGRhdGVUcmlnZ2VyU2xvdHMuaGFzKHNsb3QubmFtZSkpXG4gICAgKSB7XG4gICAgICB0aGlzLmhvc3QucmVxdWVzdFVwZGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBob3N0Q29ubmVjdGVkKCkge1xuICAgIHRoaXMuaG9zdC5zaGFkb3dSb290Py5hZGRFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgdGhpcy5oYW5kbGVTbG90Q2hhbmdlKTtcblxuICAgIC8vIFdhaXQgdW50aWwgZmlyc3QgdXBkYXRlIGFmdGVyIGNvbm5lY3RlZFxuICAgIHRoaXMuaG9zdC51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMub25Db25uZWN0ZWQuc2V0KHRydWUpO1xuICAgICAgLy8gVE9ETyhyZWVjZSk6IHJlY29uc2lkZXIgd2hlbiBhIHNvbHV0aW9uIGV4aXN0cyBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzE0MzRcbiAgICAgIC8vIElmIGFmdGVyIHRoZSBmaXJzdFVwZGF0ZSB3ZSdyZSB3YXRjaGluZyBzbG90cyByZXF1ZXN0IGFub3RoZXIgaW4gY2FzZSBzc3Itc2xvdHMgd2FzIG5vdCBwcm9wZXJseSBzZXQgYnkgdGhlIHVzZXJcbiAgICAgIGlmICh0aGlzLnVwZGF0ZVRyaWdnZXJTbG90cy5zaXplID4gMCkge1xuICAgICAgICB0aGlzLmhvc3QucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaG9zdERpc2Nvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmhvc3Quc2hhZG93Um9vdD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsIHRoaXMuaGFuZGxlU2xvdENoYW5nZSk7XG4gICAgdGhpcy5zdWJzLmZvckVhY2goKHVuc3ViKSA9PiB1bnN1YigpKTtcbiAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICB0aGlzLmNvbm5lY3RlZENvbXBsZXRlID0gZmFsc2U7XG4gICAgdGhpcy5vbkNvbm5lY3RlZC5zZXQoZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYSBzbG90LCB0aGlzIGZ1bmN0aW9uIGl0ZXJhdGVzIG92ZXIgYWxsIG9mIGl0cyBhc3NpZ25lZCBlbGVtZW50IGFuZCB0ZXh0IG5vZGVzIGFuZCByZXR1cm5zIHRoZSBjb25jYXRlbmF0ZWRcbiAqIEhUTUwgYXMgYSBzdHJpbmcuIFRoaXMgaXMgdXNlZnVsIGJlY2F1c2Ugd2UgY2FuJ3QgdXNlIHNsb3QuaW5uZXJIVE1MIGFzIGFuIGFsdGVybmF0aXZlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5uZXJIVE1MKHNsb3Q6IEhUTUxTbG90RWxlbWVudCk6IHN0cmluZyB7XG4gIGNvbnN0IG5vZGVzID0gc2xvdC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KTtcbiAgbGV0IGh0bWwgPSAnJztcblxuICBbLi4ubm9kZXNdLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIGh0bWwgKz0gKG5vZGUgYXMgSFRNTEVsZW1lbnQpLm91dGVySFRNTDtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIGh0bWwgKz0gbm9kZS50ZXh0Q29udGVudDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBodG1sO1xufVxuXG4vKipcbiAqIEdpdmVuIGEgc2xvdCwgdGhpcyBmdW5jdGlvbiBpdGVyYXRlcyBvdmVyIGFsbCBvZiBpdHMgYXNzaWduZWQgdGV4dCBub2RlcyBhbmQgcmV0dXJucyB0aGUgY29uY2F0ZW5hdGVkIHRleHQgYXMgYVxuICogc3RyaW5nLiBUaGlzIGlzIHVzZWZ1bCBiZWNhdXNlIHdlIGNhbid0IHVzZSBzbG90LnRleHRDb250ZW50IGFzIGFuIGFsdGVybmF0aXZlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQoc2xvdDogSFRNTFNsb3RFbGVtZW50IHwgdW5kZWZpbmVkIHwgbnVsbCk6IHN0cmluZyB7XG4gIGlmICghc2xvdCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBjb25zdCBub2RlcyA9IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gIGxldCB0ZXh0ID0gJyc7XG5cbiAgWy4uLm5vZGVzXS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICB0ZXh0ICs9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdGV4dDtcbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuaW1wb3J0IHtcbiAgY29uZmlnIGFzIGdldHRlckNvbmZpZyxcbiAgc2V0Q29uZmlnIGFzIHNldHRlckNvbmZpZyxcbiAgTW9ydGFyVGhlbWVDb25maWcsXG59IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7IFN1YnNldCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzU3NyLCBzaWduYWwgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgdHlwZSBNdGVUaGVtZSA9ICdkZWZhdWx0JyB8ICdweExpZ2h0JyB8ICdjeExpZ2h0JyB8ICdyeExpZ2h0JztcblxuZXhwb3J0IHR5cGUgTXRlQ29sb3JTY2hlbWUgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgJ3N5c3RlbSc7XG5cbmNvbnN0IENBQ0hFX1RPX0tFWSA9ICdtdGUudGhlbWUuY2FjaGUtdG8nO1xuY29uc3QgQ09MT1JfU0NIRU1FX0tFWSA9ICdtdGUudGhlbWUuZ2xvYmFsLWNvbG9yLXNjaGVtZSc7XG5cbmNsYXNzIF9NdGVUaGVtZVNlcnZpY2Uge1xuICBjb25maWcgPSBnZXR0ZXJDb25maWc7XG5cbiAgcHJpdmF0ZSByb290T2JzZXJ2ZXI/OiBNdXRhdGlvbk9ic2VydmVyO1xuICBwcml2YXRlIHRoZW1lU2lnbmFsID0gc2lnbmFsPE10ZVRoZW1lIHwgbnVsbD4odGhpcy5nZXRHbG9iYWxUaGVtZSgpKTtcbiAgcHJpdmF0ZSBjb2xvclNjaGVtZVNpZ25hbCA9IHNpZ25hbDxNdGVDb2xvclNjaGVtZSB8IG51bGw+KHRoaXMuZ2V0R2xvYmFsQ29sb3JTY2hlbWUoKSA/PyAnbGlnaHQnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRDYWNoZSgpO1xuICB9XG5cbiAgLyoqIENvbmZpZ3VyZXMgdGhlIGBNdGVUaGVtZVNlcnZpY2VgIHRvIGNhY2hlIGNvbG9yLXNjaGVtZSBjaGFuZ2VzIHRvIGBsb2NhbFN0b3JhZ2VgLCBgc2Vzc2lvblN0b3JhZ2VgLCBvciBuZWl0aGVyLiAqL1xuICBwdWJsaWMgY2FjaGVDb2xvclNjaGVtZVRvKG1ldGhvZDogJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnKSB7XG4gICAgaWYgKCFtZXRob2QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQ2xlYXIgYWxsIGtleXMgZnJvbSBhbGwgc3RvcmFnZSBsb2NhdGlvbnMgaWYgbm9uZVxuICAgIGlmIChtZXRob2QgPT09ICdub25lJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ0FDSEVfVE9fS0VZKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ09MT1JfU0NIRU1FX0tFWSk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgdHJ5IHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKENPTE9SX1NDSEVNRV9LRVkpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFNjaGVtZSA9IHRoaXMuY29sb3JTY2hlbWVTaWduYWwuZ2V0KCk7XG4gICAgLy8gU2V0IGNhY2hlIG1ldGhvZCBpbiBzdG9yYWdlIC0gVHJ5IGxvY2FsU3RvcmFnZSBmaXJzdFxuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQUNIRV9UT19LRVksIG1ldGhvZCk7XG4gICAgICBpZiAoY3VycmVudFNjaGVtZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDT0xPUl9TQ0hFTUVfS0VZLCBjdXJyZW50U2NoZW1lKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnTXRlVGhlbWVTZXJ2aWNlOiBDb3VsZCBub3Qgc2V0IGNvbG9yIHNjaGVtZSBjYWNoZSBtZXRob2QgdG8gYGxvY2FsU3RvcmFnZWAuIEF0dGVtcHRpbmcgZmFsbGJhY2sgdG8gYHNlc3Npb25TdG9yYWdlYC4gQ2FjaGluZyB3aWxsIG9ubHkgaGFwcGVuIHRvIHNlc3Npb25TdG9yYWdlLidcbiAgICAgICk7XG4gICAgICAvLyBUcnkgc2Vzc2lvblN0b3JhZ2UgbmV4dFxuICAgICAgdHJ5IHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShDQUNIRV9UT19LRVksICdzZXNzaW9uU3RvcmFnZScpO1xuICAgICAgICBpZiAoY3VycmVudFNjaGVtZSkge1xuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oQ09MT1JfU0NIRU1FX0tFWSwgY3VycmVudFNjaGVtZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnTXRlVGhlbWVTZXJ2aWNlOiBDb3VsZCBub3Qgc2V0IGNvbG9yIHNjaGVtZSBjYWNoZSBtZXRob2QgdG8gYGxvY2FsU3RvcmFnZWAgb3IgYHNlc3Npb25TdG9yYWdlYC4gQ2FjaGluZyBub3QgZW5hYmxlZC4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldHMgdGhlIGN1cnJlbnQgZ2xvYmFsIHRoZW1lIG9uIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBzZXRHbG9iYWxUaGVtZSh0aGVtZTogTXRlVGhlbWUpIHtcbiAgICBpZiAoIXRoZW1lIHx8IHR5cGVvZiB0aGVtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXRlVGhlbWVTZXJ2aWNlOiBHbG9iYWwgdGhlbWUgcGFyYW0gbXVzdCBiZSBhIHN0cmluZy4nKTtcbiAgICB9XG4gICAgdGhpcy5pbml0T2JzZXJ2ZXIoKTtcbiAgICBpZiAodGhlbWUgIT09ICdkZWZhdWx0Jykge1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uc2V0QXR0cmlidXRlKCdkYXRhLW10ZS10aGVtZScsIHRoZW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW10ZS10aGVtZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBjdXJyZW50IGdsb2JhbCBjb2xvci1zY2hlbWUgb24gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIHNldEdsb2JhbENvbG9yU2NoZW1lKGNvbG9yU2NoZW1lOiBNdGVDb2xvclNjaGVtZSkge1xuICAgIGlmICghY29sb3JTY2hlbWUgfHwgdHlwZW9mIGNvbG9yU2NoZW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdGVUaGVtZVNlcnZpY2U6IEdsb2JhbCBjb2xvclNjaGVtZSBwYXJhbSBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICAgIH1cbiAgICBjb25zdCBzY2hlbWUgPSBjb2xvclNjaGVtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzY2hlbWUgPT09ICdkYXJrJyB8fCBzY2hlbWUgPT09ICdsaWdodCcgfHwgc2NoZW1lID09PSAnc3lzdGVtJykge1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uc2V0QXR0cmlidXRlKCdkYXRhLW10ZS1jb2xvci1zY2hlbWUnLCBzY2hlbWUpO1xuICAgICAgdGhpcy5zZXRDYWNoZVZhbHVlKENPTE9SX1NDSEVNRV9LRVksIGNvbG9yU2NoZW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW10ZS1jb2xvci1zY2hlbWUnKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgY3VycmVudCBnbG9iYWwgdGhlbWUgZnJvbSB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgZ2V0R2xvYmFsVGhlbWUoKTogTXRlVGhlbWUgfCBudWxsIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1tdGUtdGhlbWUnKSBhcyBNdGVUaGVtZTtcbiAgICBpZiAoIVsnZGVmYXVsdCcsICdweExpZ2h0JywgJ2N4TGlnaHQnLCAncnhMaWdodCddLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZSBhcyBNdGVUaGVtZTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgY3VycmVudCBnbG9iYWwgY29sb3Itc2NoZW1lIGZyb20gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIGdldEdsb2JhbENvbG9yU2NoZW1lKCk6IE10ZUNvbG9yU2NoZW1lIHwgbnVsbCB7XG4gICAgY29uc3QgdmFsdWUgPSBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoXG4gICAgICAnZGF0YS1tdGUtY29sb3Itc2NoZW1lJ1xuICAgICkgYXMgTXRlQ29sb3JTY2hlbWU7XG4gICAgaWYgKCFbJ2xpZ2h0JywgJ2RhcmsnLCAnc3lzdGVtJ10uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlIGFzIE10ZUNvbG9yU2NoZW1lO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIGEgcmVhY3RpdmUgc2lnbmFsIHRoYXQgd2lsbCB1cGRhdGUgYW55IHRpbWUgdGhlIGdsb2JhbCB0aGVtZSBjaGFuZ2VzICovXG4gIHB1YmxpYyBzZWxlY3RHbG9iYWxUaGVtZSgpIHtcbiAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgIHJldHVybiB0aGlzLnRoZW1lU2lnbmFsO1xuICB9XG5cbiAgLyoqIFJldHVybnMgYSByZWFjdGl2ZSBzaWduYWwgdGhhdCB3aWxsIHVwZGF0ZSBhbnkgdGltZSB0aGUgZ2xvYmFsIGNvbG9yLXNjaGVtZSBjaGFuZ2VzICovXG4gIHB1YmxpYyBzZWxlY3RHbG9iYWxDb2xvclNjaGVtZSgpIHtcbiAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgIHJldHVybiB0aGlzLmNvbG9yU2NoZW1lU2lnbmFsO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIHZhbHVlIG9mIGFsbCBvZiB0aGUgZ2l2ZW4gdGhlbWUgdmFyaWFibGVzIG9uIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBzZXQoXG4gICAgY29uZmlnRm5Pck9iajpcbiAgICAgIHwgU3Vic2V0PE1vcnRhclRoZW1lQ29uZmlnPlxuICAgICAgfCAoKGNvbmZpZzogTW9ydGFyVGhlbWVDb25maWcpID0+IFN1YnNldDxNb3J0YXJUaGVtZUNvbmZpZz4pXG4gICkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnRm5Pck9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uZmlnRm5Pck9iaiA9IGNvbmZpZ0ZuT3JPYmoodGhpcy5jb25maWcpO1xuICAgIH1cbiAgICBjb25zdCBtYXBwaW5ncyA9IHRoaXMuZmxhdHRlblBhdGhzKGNvbmZpZ0ZuT3JPYmopO1xuICAgIG1hcHBpbmdzLmZvckVhY2goKFtwYXRoLCB2YWxdKSA9PiB7XG4gICAgICBjb25zdCBjc3NWYXIgPSBwYXRoLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiB7XG4gICAgICAgIHJldHVybiBhY2NbcHJvcF07XG4gICAgICB9LCBzZXR0ZXJDb25maWcpO1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uc3R5bGUuc2V0UHJvcGVydHkoY3NzVmFyLCBgJHt2YWx9YCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgdGhlIHJlcXVlc3RlZCB0aGVtZSB2YXJpYWJsZSBmcm9tIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBnZXQ8VD4oazE6ICh0aGVtZUNvbmZpZzogTW9ydGFyVGhlbWVDb25maWcpID0+IFQpOiBUO1xuICBwdWJsaWMgZ2V0PEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWc+KGsxOiBLMSk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLCBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXT4oXG4gICAgazE6IEsxLFxuICAgIGsyOiBLMlxuICApOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMyk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11cbiAgPihrMTogSzEsIGsyOiBLMiwgazM6IEszLCBrNDogSzQpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl0sXG4gICAgSzQgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXSxcbiAgICBLNSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVxuICA+KGsxOiBLMSwgazI6IEsyLCBrMzogSzMsIGs0OiBLNCwgazU6IEs1KTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdW0s1XTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXSxcbiAgICBLNCBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdLFxuICAgIEs1IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdLFxuICAgIEs2IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdW0s1XVxuICA+KGsxOiBLMSwgazI6IEsyLCBrMzogSzMsIGs0OiBLNCwgazU6IEs1LCBrNjogSzYpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdW0s2XTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXSxcbiAgICBLNCBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdLFxuICAgIEs1IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdLFxuICAgIEs2IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdW0s1XVxuICA+KFxuICAgIC4uLmtleXM6XG4gICAgICB8IFtLMV1cbiAgICAgIHwgW0sxLCBLMl1cbiAgICAgIHwgW0sxLCBLMiwgSzNdXG4gICAgICB8IFtLMSwgSzIsIEszLCBLNF1cbiAgICAgIHwgW0sxLCBLMiwgSzMsIEs0LCBLNV1cbiAgICAgIHwgW0sxLCBLMiwgSzMsIEs0LCBLNSwgSzZdXG4gICk6IGFueSB7XG4gICAgY29uc3QgW2ZuXSA9IGtleXMgPz8gW251bGxdO1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGNzc1ZhciA9IChmbiBhcyBhbnkpKHNldHRlckNvbmZpZyk7XG4gICAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShnbG9iYWxUaGlzPy5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoY3NzVmFyKTtcbiAgICB9XG4gICAgY29uc3QgY3NzVmFyID0ga2V5cy5yZWR1Y2UoKGFjYzogYW55LCBrZXkpID0+IGFjY1trZXldLCBzZXR0ZXJDb25maWcgYXMgYW55KSBhcyBzdHJpbmc7XG4gICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZ2xvYmFsVGhpcz8uZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Zhcik7XG4gIH1cblxuICAvKiogRmxhdHRlbnMgYSBnaXZlbiBvYmplY3QgdG8gYW4gYXJyYXkgb2YgcGF0aCBrZXlzIGFuZCBpdHMgcmVzdWx0aW5nIHZhbHVlICovXG4gIHByaXZhdGUgZmxhdHRlblBhdGhzKG9iajogUmVjb3JkPHN0cmluZywgYW55PiwgcGF0aDogc3RyaW5nW10gPSBbXSk6IFtzdHJpbmdbXSwgYW55XVtdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICBjb25zdCBuZXN0ZWQgPSBvYmpba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgbmVzdGVkID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwYXRoLnB1c2goa2V5KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihhY2MsIHRoaXMuZmxhdHRlblBhdGhzKG5lc3RlZCwgcGF0aCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aC5wdXNoKGtleSk7XG4gICAgICAgIGFjYy5wdXNoKFtwYXRoLCBuZXN0ZWRdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNdXRhdGlvbkV2ZW50ID0gKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcbiAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkge1xuICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZScpIHtcbiAgICAgICAgICB0aGlzLmNvbG9yU2NoZW1lU2lnbmFsLnNldCh0aGlzLmdldEdsb2JhbENvbG9yU2NoZW1lKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkYXRhLW10ZS10aGVtZScpIHtcbiAgICAgICAgICB0aGlzLnRoZW1lU2lnbmFsLnNldCh0aGlzLmdldEdsb2JhbFRoZW1lKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgaW5pdENhY2hlKCkge1xuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgdGhpcy5pbml0T2JzZXJ2ZXIoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNhY2hlQ29sb3JTY2hlbWUgPSB0aGlzLmdldENhY2hlVmFsdWUoQ09MT1JfU0NIRU1FX0tFWSk7XG4gICAgICAgIGlmIChjYWNoZUNvbG9yU2NoZW1lICYmIGNhY2hlQ29sb3JTY2hlbWUgIT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5zZXRHbG9iYWxDb2xvclNjaGVtZShjYWNoZUNvbG9yU2NoZW1lIGFzIE10ZUNvbG9yU2NoZW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXRPYnNlcnZlcigpIHtcbiAgICBpZiAoIWlzU3NyKCkgJiYgIXRoaXMucm9vdE9ic2VydmVyKSB7XG4gICAgICB0aGlzLnJvb3RPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuaGFuZGxlTXV0YXRpb25FdmVudCk7XG4gICAgICB0aGlzLnJvb3RPYnNlcnZlci5vYnNlcnZlKGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbJ2RhdGEtbXRlLXRoZW1lJywgJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZSddLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYWNoZU1ldGhvZCgpOiAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZScgfCBudWxsIHtcbiAgICAvLyBSZXRyaWV2ZSBjYWNoZSBtZXRob2RcbiAgICBsZXQgY2FjaGVNZXRob2Q6ICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJyB8IG51bGwgPSBudWxsO1xuICAgIC8vIFRyeSBsb2NhbFN0b3JhZ2VcbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ0FDSEVfVE9fS0VZKTtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgY2FjaGVNZXRob2QgPSB2YWwgYXMgJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRyeSBzZXNzaW9uU3RvcmFnZVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdmFsID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgY2FjaGVNZXRob2QgPSB2YWwgYXMgJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICByZXR1cm4gY2FjaGVNZXRob2Q7XG4gIH1cblxuICBwcml2YXRlIHNldENhY2hlVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjYWNoZU1ldGhvZCA9IHRoaXMuZ2V0Q2FjaGVNZXRob2QoKTtcbiAgICB0cnkge1xuICAgICAgaWYgKGNhY2hlTWV0aG9kID09PSAnbG9jYWxTdG9yYWdlJykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoY2FjaGVNZXRob2QgPT09ICdzZXNzaW9uU3RvcmFnZScpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYWNoZVZhbHVlKGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2FjaGVNZXRob2QgPSB0aGlzLmdldENhY2hlTWV0aG9kKCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChjYWNoZU1ldGhvZCA9PT0gJ2xvY2FsU3RvcmFnZScpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICB9IGVsc2UgaWYgKGNhY2hlTWV0aG9kID09PSAnc2Vzc2lvblN0b3JhZ2UnKSB7XG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlVGhlbWVTZXJ2aWNlID0gbmV3IF9NdGVUaGVtZVNlcnZpY2UoKTtcbiIsICJpbXBvcnQgeyBpc1NzciwgaXNQbGF0Zm9ybSB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCB0eXBlIFBvcnRhbFN0YWNrID0gJ292ZXJsYXknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRhbGVkRWxlbWVudE1ldGFkYXRhIHtcbiAgZWxlbWVudDogRWxlbWVudDtcbiAgc3RhY2s6IFBvcnRhbFN0YWNrO1xuICBjaGlsZFBvcnRhbGVkRWxlbWVudHM6IFNldDxFbGVtZW50PjtcbiAgcGFyZW50UG9ydGFsZWRFbGVtZW50PzogRWxlbWVudDtcbiAgYmFja2Ryb3A/OiBFbGVtZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRQb3J0YWxDb250cm9sbGVyIHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFyZW50UG9ydGFsZWRFbGVtZW50OiBFbGVtZW50O1xuICBvcHRpb25zOiB7IHN0YWNrOiBQb3J0YWxTdGFjayB9O1xufVxuXG5leHBvcnQgdHlwZSBQb3J0YWxBZGFwdGVyPFQgPSBhbnk+ID0gKFxuICBwb3J0YWxFbGVtZW50OiBULFxuICBvdXRsZXRFbGVtZW50OiBFbGVtZW50XG4pID0+IFByb21pc2U8YW55PiB8IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0YWxPcHRpb25zIHtcbiAgLyoqIFJlbmRlcnMgdGhlIGJhY2tkcm9wIGRpbW1lZCAqL1xuICB3aXRoRGltQmFja2Ryb3A/OiBib29sZWFuO1xuXG4gIC8qKiBNYWtlcyB0aGUgYmFja2Ryb3AgaWdub3JlIHBvaW50ZXIgZXZlbnRzLiBVc2VmdWwgZm9yIHRyaWdnZXJPbiBcImhvdmVyXCIuICovXG4gIHdpdGhJbmVydEJhY2tkcm9wPzogYm9vbGVhbjtcblxuICAvKiogRGlzYWJsZXMgdGhlIGFiaWxpdHkgdG8gc2Nyb2xsIHRoZSBwYWdlIGJlaGluZCB0aGUgb3ZlcmxheSB3aGVuIHRydWUgKi9cbiAgd2l0aFNjcm9sbExvY2s/OiBib29sZWFuO1xuXG4gIC8qKiBDYWxsYmFjayBmb3IgaGFuZGxpbmcgY2xvc2VPbkNsaWNrT3V0c2lkZSBldmVudHMgd2hlbiB0aGUgcG9ydGFsJ3MgYmFja2Ryb3AgaXMgY2xpY2tlZCAqL1xuICBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcj86ICgpID0+IGFueTtcblxuICAvKiogVGhlIGFuaW1hdGlvbiBkdXJhdGlvbiBmb3IgZmFkaW5nIGEgc2hhZG93IGJhY2tkcm9wIGluL291dCAqL1xuICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbj86IHN0cmluZztcblxuICAvKiogQWRhcHRlciBmb3IgXCJwb3J0YWxpbmdcIiBhbiBlbGVtZW50IGZyb20gb25lIGxvY2F0aW9uIGluIHRoZSBET00gdG8gYW5vdGhlci4gTGV2ZXJhZ2VkIGJ5IGZyYW1ld29yayB3cmFwcGVycyBmb3IgaW1wcm92ZWQgaW50ZXJvcC4gKi9cbiAgcG9ydGFsQWRhcHRlcj86IFBvcnRhbEFkYXB0ZXI7XG59XG5cbi8qKiBEZWZhdWx0IG5hdGl2ZSBET00gYWRhcHRlciBmb3IgcG9ydGFsaW5nIGFuIGVsZW1lbnQgdG8gYW5vdGhlciB0YXJnZXQgZWxlbWVudCAqL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRQb3J0YWxBZGFwdGVyOiBQb3J0YWxBZGFwdGVyID0gKHBvcnRhbEVsZW0sIG91dGxldEVsZW0pID0+IHtcbiAgb3V0bGV0RWxlbT8uYXBwZW5kQ2hpbGQocG9ydGFsRWxlbSk7XG59O1xuXG5jbGFzcyBfTXRlUG9ydGFsU2VydmljZSB7XG4gIC8qKiBTaGFyZWQgZ2xvYmFsIGNvbnN0IGZvciBzdGFjayBlbGVtZW50IHJlZnMgKi9cbiAgcHJpdmF0ZSBzdGFja0VsZW1lbnRzOiB7IG92ZXJsYXk6IEVsZW1lbnQgfSA9IHtcbiAgICBvdmVybGF5OiB1bmRlZmluZWQsXG4gIH07XG5cbiAgLyoqIFNoYXJlZCBnbG9iYWwgY29uc3QgZm9yIHBvcnRhbGVkIGVsZW1lbnRzIG1ldGFkYXRhICovXG4gIHByaXZhdGUgcG9ydGFsZWRFbGVtZW50cyA9IG5ldyBNYXA8bnVtYmVyLCBNYXA8RWxlbWVudCwgUG9ydGFsZWRFbGVtZW50TWV0YWRhdGE+PigpO1xuXG4gIHByaXZhdGUgYWN0aXZlU2Nyb2xsTG9ja3MgPSBuZXcgU2V0PEVsZW1lbnQ+KCk7XG5cbiAgcHJpdmF0ZSBzdGFja011dGF0aW9uT2JzZXJ2ZXI/OiBNdXRhdGlvbk9ic2VydmVyO1xuXG4gIC8qKlxuICAgKiBXaGVuIGNhbGxlZCwgdGhpcyBzZXJ2aWNlIHdpbGwgYXR0ZW1wdCB0byBsb2NhdGUgdGhlIGBAYW5ndWxhci9jZGtgIG92ZXJsYXkgc3RhY2suXG4gICAqIElmIGZvdW5kIHRoaXMgc2VydmljZSB3aWxsIGJlIGNvbmZpZ3VyZWQgdG8gdXNlIHRoYXQgZWxlbWVudCBhcyB0aGUgYG92ZXJsYXlgIHN0YWNrIGluc3RlYWQgb2YgaW5pdGlhbGl6aW5nIGl0cyBvd24uXG4gICAqL1xuICBwdWJsaWMgY29uZmlndXJlQ2RrSW50ZXJvcCgpIHtcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIGNvbnN0IGNka1N0YWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNkay1vdmVybGF5LWNvbnRhaW5lcicpO1xuICAgICAgaWYgKGNka1N0YWNrKSB7XG4gICAgICAgIHRoaXMuc3RhY2tFbGVtZW50cy5vdmVybGF5ID0gY2RrU3RhY2s7XG4gICAgICAgIHRoaXMuc3RhY2tFbGVtZW50cy5vdmVybGF5LmNsYXNzTGlzdC5hZGQodGhpcy5pZEZhY3RvcnkoJ292ZXJsYXknKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIHBvcnRhbCBjb250cm9sbGVyLiBBbGwgaXRlbXMgaXQgcmVxdWVzdGVkIHRvIGJlIHBvcnRhbGVkIHdpbGwgYmUgdHJhY2sgYWdhaW5zdCBpdC5cbiAgICogV2hlbiB0aGUgcG9ydGFsIGlzIHJlbW92ZWQgd2UgY2FuIHRoZW4gcmVtb3ZlIGFueSBlbGVtZW50cyBpdCBjdXJyZW50bHkgaGFzIHBvcnRhbGVkIGFuZFxuICAgKiBhbnkgb2YgdGhlaXIgcG9ydGFsZWQgY2hpbGRyZW4uXG4gICAqL1xuICBwdWJsaWMgYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlcikge1xuICAgIGlmICghdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmhhcyhwb3J0YWxDb250cm9sbGVyPy5pZCkpIHtcbiAgICAgIC8vIFRyYWNrIGluIHNldCBieSBJRCBzbyB3ZSBkb24ndCBrZWVwIGEgbGl2ZSByZWZlcmVuY2UgdG8gdGhlIGNvbnRyb2xsZXIgaXRzZWxmXG4gICAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuc2V0KHBvcnRhbENvbnRyb2xsZXIuaWQsIG5ldyBNYXA8RWxlbWVudCwgUG9ydGFsZWRFbGVtZW50TWV0YWRhdGE+KCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGFsbCBvZiBhIHBvcnRhbCBjb250cm9sbGVycyBwb3J0YWxlZCBlbGVtZW50cyBhbmQgdGhlaXIgcmVmZXJlbmNlcyAqL1xuICBwdWJsaWMgcmVtb3ZlQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlcikge1xuICAgIC8vIEF0dGVtcHQgdG8gcmVtb3ZlIGFsbCBpdGVtcyBhdHRhY2hlZCBieSB0aGlzIGNvbnRyb2xsZXIgZnJvbSB0aGUgY29uZmlndXJlZCBzdGFja1xuICAgIGNvbnN0IGF0dGFjaGVkRWxlbWVudHMgPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpO1xuICAgIGlmIChhdHRhY2hlZEVsZW1lbnRzKSB7XG4gICAgICBhdHRhY2hlZEVsZW1lbnRzLmZvckVhY2goKGl0ZW0pID0+IHRoaXMucmVtb3ZlRnJvbVN0YWNrKHBvcnRhbENvbnRyb2xsZXIsIGl0ZW0uZWxlbWVudCkpO1xuICAgIH1cbiAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZGVsZXRlKHBvcnRhbENvbnRyb2xsZXIuaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgYSByZWYgdG8gdGhlIGNvbmZpZ3VyZWQgc3RhY2sgZXhpc3RzLiBJZiBpdCBkb2VzIG5vdCwgdGhlIGNvbmZpZ3VyZWQgc3RhY2sgd2lsbFxuICAgKiBiZSBjcmVhdGVkIGFuZCBhcHBlbmRlZCB0byB0aGUgZG9jdW1lbnQuIERvZXMgbm90aGluZyBkdXJpbmcgU1NSLlxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVTdGFjayhzdGFjazogUG9ydGFsU3RhY2spIHtcbiAgICBpZiAoc3RhY2sgIT09ICdvdmVybGF5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE92ZXJsYXkgU3RhY2s6IFwiJHtzdGFja31cIiBtdXN0IGJlICdvdmVybGF5JyBhdCB0aGlzIHRpbWUuYCk7XG4gICAgfVxuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgaWYgKCF0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdKSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkRmFjdG9yeShzdGFjaykpO1xuICAgICAgICB0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdID1cbiAgICAgICAgICBlbGVtID8/XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmlkRmFjdG9yeShzdGFjayksXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXSAmJiAhdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXS5pc0Nvbm5lY3RlZCkge1xuICAgICAgICB0aGlzLmFwcGVuZFN0YWNrVG9Eb20odGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXSk7XG5cbiAgICAgICAgLy8gSW5pdCBtdXRhdGlvbiBvYnNlcnZlclxuICAgICAgICAvLyBUaGlzIHdpbGwgd2F0Y2ggZm9yIGFueXRpbWUgdGhlIHN0YWNrIGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NIGZvciBzb21lIHJlYXNvblxuICAgICAgICAvLyBJZiBpdCBpcywgaXQgd2lsbCByZS1hdHRhY2ggaXQgdG8gdGhlIERPTSBhZnRlciB0aGUgbmV4dCB0aWNrXG4gICAgICAgIGlmICghdGhpcy5zdGFja011dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICB0aGlzLnN0YWNrTXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtbCwgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbWwpIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCByZW1vdmVkTm9kZSBvZiBtdXRhdGlvbi5yZW1vdmVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZE5vZGUgPT09IHRoaXMuc3RhY2tFbGVtZW50cy5vdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUFsbEl0ZW1zRnJvbVN0YWNrcygpO1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kU3RhY2tUb0RvbSh0aGlzLnN0YWNrRWxlbWVudHMub3ZlcmxheSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXT8ucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuc3RhY2tNdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXS5wYXJlbnROb2RlLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1YnRyZWU6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhcHBlbmRTdGFja1RvRG9tKHN0YWNrRWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmIChzdGFja0VsZW1lbnQgJiYgIXN0YWNrRWxlbWVudC5pc0Nvbm5lY3RlZCkge1xuICAgICAgY29uc3QgdG9hc3RDb250YWluZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ210ZS10b2FzdC1jb250YWluZXInKTtcbiAgICAgIGlmICh0b2FzdENvbnRhaW5lcikge1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShzdGFja0VsZW1lbnQsIHRvYXN0Q29udGFpbmVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHN0YWNrRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIEFwcGVuZHMgYW4gaXRlbSB0byB0aGUgY29uZmlndXJlZCBwb3J0YWwgc3RhY2sgKi9cbiAgcHVibGljIGFwcGVuZFRvU3RhY2soXG4gICAgcG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsXG4gICAgZWxlbWVudDogRWxlbWVudCxcbiAgICB7XG4gICAgICB3aXRoRGltQmFja2Ryb3AgPSBmYWxzZSxcbiAgICAgIHdpdGhJbmVydEJhY2tkcm9wID0gZmFsc2UsXG4gICAgICB3aXRoU2Nyb2xsTG9jayA9IGZhbHNlLFxuICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcixcbiAgICAgIHBvcnRhbEFkYXB0ZXIgPSBkZWZhdWx0UG9ydGFsQWRhcHRlcixcbiAgICB9OiBQb3J0YWxPcHRpb25zID0ge31cbiAgKSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50UG9ydGFsZWRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRQb3J0YWxlZEVsZW1lbnQocG9ydGFsQ29udHJvbGxlciwgZWxlbWVudCk7XG4gICAgICBjb25zdCBzdGFja05hbWUgPSBwb3J0YWxDb250cm9sbGVyLm9wdGlvbnMuc3RhY2s7XG4gICAgICBjb25zdCBzdGFjayA9IHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja05hbWVdO1xuICAgICAgY29uc3QgYXR0YWNoZWRFbGVtZW50cyA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCk7XG5cbiAgICAgIGNvbnN0IGJhY2tkcm9wID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgICBjbGFzc05hbWU6ICdtdGUtcG9ydGFsX19iYWNrZHJvcCcsXG4gICAgICAgIC4uLihiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvblxuICAgICAgICAgID8geyBzdHlsZTogYHRyYW5zaXRpb24tZHVyYXRpb246ICR7YmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb259O2AgfVxuICAgICAgICAgIDoge30pLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIEhhbmRsZSBiYWNrZHJvcCBzdHlsaW5nXG4gICAgICBpZiAod2l0aEluZXJ0QmFja2Ryb3ApIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLWluZXJ0Jyk7XG4gICAgICB9XG4gICAgICBpZiAod2l0aERpbUJhY2tkcm9wKSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1zaGFkb3cnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS10cmFuc3BhcmVudCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBBcHBlbmQgYmFja2Ryb3BcbiAgICAgIHN0YWNrPy5hcHBlbmRDaGlsZChiYWNrZHJvcCk7XG5cbiAgICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgICAvLyBBZGQgbGlzdGVuZXIgaWYgY2xpY2sgaGFuZGxlciBpcyBwcmVzZW50XG4gICAgICAgIGlmIChjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcikge1xuICAgICAgICAgIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyKTtcbiAgICAgICAgICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGJhY2tkcm9wIHNob3VsZCBiZSBkaW0sIGFuaW1hdGUgaXQgYWZ0ZXIgaXQgaGFzIGJlZW4gYXBwZW5kZWQgdG8gdGhlIGRvbVxuICAgICAgICBpZiAod2l0aERpbUJhY2tkcm9wKSB7XG4gICAgICAgICAgZ2xvYmFsVGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXNob3cnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBseSBzY3JvbGwgbG9ja1xuICAgICAgICBpZiAod2l0aFNjcm9sbExvY2spIHtcbiAgICAgICAgICB0aGlzLmFwcGx5U2Nyb2xsTG9jayhlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBXYWl0IGZvciBSZWFjdCAob3Igb3RoZXIgZnV0dXJlIGZyYW1ld29yayBhZGFwdGVyKSB0byBhcHBlbmQgZWxlbWVudCB0byBuZXdcbiAgICAgIC8vIGxvY2F0aW9uIGluIHRoZSBET00gYmVmb3JlIGFkZGluZyB0byBzdGFjay4gRG9pbmcgc28gdHJpZ2dlcnMgYGhvc3REaXNjb25uZWN0ZWRgXG4gICAgICAvLyB3aGljaCB3b3VsZCBpbnN0YW50bHkgcmVtb3ZlIHRoZSBlbGVtZW50IGlmIG5vdCBmb3IgdGhpcyBleHRyYSB0aW1lb3V0IHRvIHdhaXQgYSB0aWNrXG4gICAgICBQcm9taXNlLnJlc29sdmUocG9ydGFsQWRhcHRlcihlbGVtZW50LCBzdGFjaykpLnRoZW4oKCkgPT4ge1xuICAgICAgICBhdHRhY2hlZEVsZW1lbnRzLnNldChlbGVtZW50LCB7XG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICBzdGFjazogc3RhY2tOYW1lLFxuICAgICAgICAgIGJhY2tkcm9wLFxuICAgICAgICAgIGNoaWxkUG9ydGFsZWRFbGVtZW50czogbmV3IFNldDxFbGVtZW50PigpLFxuICAgICAgICAgIHBhcmVudFBvcnRhbGVkRWxlbWVudCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGFuIGVsZW1lbnQgZnJvbSB0aGUgc3RhY2sgKi9cbiAgcHVibGljIHJlbW92ZUZyb21TdGFjayhwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgZWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmICh0aGlzLnBvcnRhbGVkRWxlbWVudHMuaGFzKHBvcnRhbENvbnRyb2xsZXIuaWQpKSB7XG4gICAgICBjb25zdCBhdHRhY2hlZEVsZW1lbnRzID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKTtcbiAgICAgIGlmIChhdHRhY2hlZEVsZW1lbnRzKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRNZXRhZGF0YSA9IGF0dGFjaGVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBpZiAoZWxlbWVudE1ldGFkYXRhKSB7XG4gICAgICAgICAgYXR0YWNoZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgdGhpcy5maW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTYWZlbHkgcmVtb3ZlcyBhbGwgaXRlbXMgZnJvbSBhbGwgc3RhY2tzXG4gIHByaXZhdGUgcmVtb3ZlQWxsSXRlbXNGcm9tU3RhY2tzKCkge1xuICAgIGZvciAobGV0IFtpZCwgY29udHJvbGxlck1hcF0gb2YgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmVudHJpZXMoKSkge1xuICAgICAgZm9yIChsZXQgW2VsZW1lbnQsIGVsZW1lbnRNZXRhZGF0YV0gb2YgY29udHJvbGxlck1hcC5lbnRyaWVzKCkpIHtcbiAgICAgICAgaWYgKGVsZW1lbnRNZXRhZGF0YSkge1xuICAgICAgICAgIHRoaXMuZmluYWxpemVTdGFja1JlbW92ZShlbGVtZW50TWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIE1ha2VzIGEgYmFja2Ryb3AgYXNzb2NpYXRlZCB3aXRoIGEgcG9ydGFsZWQgZWxlbWVudCB2aXNpYmxlIGlmIGl0IGV4aXN0cyAqL1xuICBwdWJsaWMgc2hvd0JhY2tkcm9wKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIGNvbnN0IHsgYmFja2Ryb3AgfSA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuICAgIGJhY2tkcm9wPy5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0tc2hvdycpO1xuICB9XG5cbiAgLyoqIEhpZGVzIGEgYmFja2Ryb3AgYXNzb2NpYXRlZCB3aXRoIGEgcG9ydGFsZWQgZWxlbWVudCBpZiBpdCBleGlzdHMgKi9cbiAgcHVibGljIGhpZGVCYWNrZHJvcChwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyKTtcbiAgICBjb25zdCB7IGJhY2tkcm9wIH0gPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpLmdldChlbGVtZW50KSA/PyB7fTtcbiAgICBiYWNrZHJvcD8uY2xhc3NMaXN0LnJlbW92ZSgnYmFja2Ryb3AtLXNob3cnKTtcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIHRoZSBpbnRlcnRuZXNzIGEgYmFja2Ryb3AgaWYgaXQgZXhpc3RzICh3aGV0aGVyIG9yIG5vdCB0aGUgdXNlciBjYW4gY2xpY2sgdGhyb3VnaCBpdCkgKi9cbiAgcHVibGljIHNldEJhY2tkcm9wSW5lcnRuZXNzKFxuICAgIHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLFxuICAgIGVsZW1lbnQ6IEVsZW1lbnQsXG4gICAgaW5lcnQ6IGJvb2xlYW4gPSB0cnVlXG4gICkge1xuICAgIHRoaXMuYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyKTtcbiAgICBjb25zdCB7IGJhY2tkcm9wIH0gPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpLmdldChlbGVtZW50KSA/PyB7fTtcbiAgICBpZiAoaW5lcnQpIHtcbiAgICAgIGJhY2tkcm9wPy5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0taW5lcnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tkcm9wLS1pbmVydCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBpZCBmb3IgdGhlIGNvbmZpZ3VyZWQgc3RhY2sgZWxlbWVudCAqL1xuICBwcml2YXRlIGlkRmFjdG9yeSA9IChzdGFjazogUG9ydGFsU3RhY2spID0+IGBtdGUtcG9ydGFsX18ke3N0YWNrfS1zdGFja2A7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhbiBlbGVtZW50IGlzIGJlaW5nIHBvcnRhbGVkIGZyb20gd2l0aGluIGFub3RoZXIgcG9ydGFsZWRcbiAgICogZWxlbWVudCBhbmQgcmV0dXJucyB0aGF0IHBhcmVudCBpZiBpdCBpc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRQYXJlbnRQb3J0YWxlZEVsZW1lbnQocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAocG9ydGFsQ29udHJvbGxlci5wYXJlbnRQb3J0YWxlZEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBwb3J0YWxDb250cm9sbGVyLnBhcmVudFBvcnRhbGVkRWxlbWVudDtcbiAgICB9XG4gICAgbGV0IHBhcmVudFBvcnRhbGVkRWxlbWVudDogRWxlbWVudDtcbiAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZm9yRWFjaCgocG9ydGFsQ29udHJvbGxlcikgPT5cbiAgICAgIHBvcnRhbENvbnRyb2xsZXIuZm9yRWFjaCgocG9ydGFsZWRFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChwb3J0YWxlZEVsZW1lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgIHBvcnRhbGVkRWxlbWVudC5jaGlsZFBvcnRhbGVkRWxlbWVudHMuYWRkKGVsZW1lbnQpO1xuICAgICAgICAgIHBhcmVudFBvcnRhbGVkRWxlbWVudCA9IHBvcnRhbGVkRWxlbWVudC5lbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgLy8gQ2FjaGUgdGhlIHBhcmVudFBvcnRhbGVkRWxlbWVudCBpZiBmb3VuZCBvbiB0aGUgY29udHJvbGxlciBzbyB3ZSBjYW4gcmVmZXJlbmNlXG4gICAgLy8gaXQgd2hlbiBvcGVuZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBET01cbiAgICBpZiAocGFyZW50UG9ydGFsZWRFbGVtZW50KSB7XG4gICAgICBwb3J0YWxDb250cm9sbGVyLnBhcmVudFBvcnRhbGVkRWxlbWVudCA9IHBhcmVudFBvcnRhbGVkRWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudFBvcnRhbGVkRWxlbWVudDtcbiAgfVxuXG4gIC8qKiBFbnN1cmVzIGFuIGVsZW1lbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBzdGFjayBubyBtYXR0ZXIgd2hpY2ggY29udHJvbGxlciBoYXMgcG9ydGFsZWQgaXQgKi9cbiAgcHJpdmF0ZSByZW1vdmVGcm9tU3RhY2tHbG9iYWxseShlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmZvckVhY2goKHBvcnRhbENvbnRyb2xsZXIpID0+IHtcbiAgICAgIGlmIChwb3J0YWxDb250cm9sbGVyLmhhcyhlbGVtZW50KSkge1xuICAgICAgICBjb25zdCBlbGVtZW50TWV0YWRhdGEgPSBwb3J0YWxDb250cm9sbGVyLmdldChlbGVtZW50KTtcbiAgICAgICAgcG9ydGFsQ29udHJvbGxlci5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIHRoaXMuZmluYWxpemVTdGFja1JlbW92ZShlbGVtZW50TWV0YWRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEZpbmFsaXplcyB0aGUgcmVtb3ZlIG9mIGFuIGVsZW1lbnQgZnJvbSBhIHBvcnRhbCBzdGFjayAqL1xuICBwcml2YXRlIGZpbmFsaXplU3RhY2tSZW1vdmUoZWxlbWVudE1ldGFkYXRhOiBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YSkge1xuICAgIGlmIChlbGVtZW50TWV0YWRhdGEpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgc3RhY2s6IHN0YWNrTmFtZSxcbiAgICAgICAgYmFja2Ryb3AsXG4gICAgICAgIGNoaWxkUG9ydGFsZWRFbGVtZW50cyxcbiAgICAgICAgcGFyZW50UG9ydGFsZWRFbGVtZW50LFxuICAgICAgfSA9IGVsZW1lbnRNZXRhZGF0YTtcbiAgICAgIGNvbnN0IHN0YWNrID0gdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrTmFtZV07XG5cbiAgICAgIC8vIFJlbW92ZSBhbnkgc2Nyb2xsTG9ja3NcbiAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsTG9jayhlbGVtZW50KTtcblxuICAgICAgLy8gRW5zdXJlcyBhbiBlbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSBhbnkgcGFyZW50IHBvcnRhbGVkIGVsZW1lbnRzIGNoaWxkcmVuIGxpc3RzXG4gICAgICBpZiAocGFyZW50UG9ydGFsZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChwb3J0YWxDb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgaWYgKHBvcnRhbENvbnRyb2xsZXIuaGFzKHBhcmVudFBvcnRhbGVkRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHBvcnRhbENvbnRyb2xsZXIuZ2V0KHBhcmVudFBvcnRhbGVkRWxlbWVudCkuY2hpbGRQb3J0YWxlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBFbnN1cmVzIGFueSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQgYXJlIHJlbW92ZWQgYmVmb3JlIHRoaXMgZWxlbWVudCBpc1xuICAgICAgaWYgKGNoaWxkUG9ydGFsZWRFbGVtZW50cy5zaXplID4gMCkge1xuICAgICAgICBjaGlsZFBvcnRhbGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gdGhpcy5yZW1vdmVGcm9tU3RhY2tHbG9iYWxseShlbGVtZW50KSk7XG4gICAgICB9XG4gICAgICAvLyBSZW1vdmVzIHRoaXMgZWxlbWVudHMgYmFja2Ryb3AgZnJvbSB0aGUgcG9ydGFsIHN0YWNrXG4gICAgICBpZiAoYmFja2Ryb3AgJiYgYmFja2Ryb3AucGFyZW50RWxlbWVudCA9PT0gc3RhY2spIHtcbiAgICAgICAgc3RhY2s/LnJlbW92ZUNoaWxkKGJhY2tkcm9wKTtcbiAgICAgIH1cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgYSByZWFjdCB3cmFwcGVkIHBvcnRhbGVkIGVsZW1lbnRcbiAgICAgIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQ/Lmhhc0F0dHJpYnV0ZSgnZGF0YS1vdmVybGF5LXdyYXBwZXInKSkge1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgPT09IHN0YWNrKSB7XG4gICAgICAgICAgc3RhY2s/LnJlbW92ZUNoaWxkKGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50ID09PSBzdGFjaykge1xuICAgICAgICBzdGFjaz8ucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgYSBzY3JvbGwgbG9jayB0byB0aGUgYm9keSBlbGVtZW50IHRvIHByZXZlbnQgc2Nyb2xsaW5nIG9mIHBhZ2UgY29udGVudC5cbiAgICogQ2FsY3VsYXRlcyBhbnkgYm9keSBvZmZzZXRzIGR1ZSB0byB2aXNpYmxlIHNjcm9sbGJhcnMgYW5kIGR5bmFtaWNhbGx5IGFkanVzdHMgZm9yIHRoZW0uXG4gICAqL1xuICBwcml2YXRlIGFwcGx5U2Nyb2xsTG9jayhlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5hY3RpdmVTY3JvbGxMb2Nrcy5hZGQoZWxlbWVudCk7XG5cbiAgICBjb25zdCBpc0lPUyA9IGlzUGxhdGZvcm0oJ0lPUycpO1xuICAgIGNvbnN0IGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG4gICAgY29uc3Qgc2Nyb2xsYmFyWCA9XG4gICAgICBNYXRoLnJvdW5kKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSArXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICBjb25zdCBwYWRkaW5nUHJvcCA9IHNjcm9sbGJhclggPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBzY3JvbGxYID0gYm9keVN0eWxlLmxlZnQgPyBwYXJzZUZsb2F0KGJvZHlTdHlsZS5sZWZ0KSA6IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICBjb25zdCBzY3JvbGxZID0gYm9keVN0eWxlLnRvcCA/IHBhcnNlRmxvYXQoYm9keVN0eWxlLnRvcCkgOiB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cbiAgICBib2R5U3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ210ZS1zY3JvbGwtbG9jay0tYWN0aXZlJyk7XG5cbiAgICBpZiAoc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgIGJvZHlTdHlsZVtwYWRkaW5nUHJvcF0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGA7XG4gICAgfVxuXG4gICAgLy8gT25seSBpT1MgZG9lc24ndCByZXNwZWN0IGBvdmVyZmxvdzogaGlkZGVuYCBvbiBkb2N1bWVudC5ib2R5LCBhbmQgdGhpc1xuICAgIC8vIHRlY2huaXF1ZSBoYXMgZmV3ZXIgc2lkZSBlZmZlY3RzLlxuICAgIGlmIChpc0lPUykge1xuICAgICAgLy8gaU9TIDEyIGRvZXMgbm90IHN1cHBvcnQgYHZpc3VhbFZpZXdwb3J0YC5cbiAgICAgIGNvbnN0IG9mZnNldExlZnQgPSBnbG9iYWxUaGlzLnZpc3VhbFZpZXdwb3J0Py5vZmZzZXRMZWZ0IHx8IDA7XG4gICAgICBjb25zdCBvZmZzZXRUb3AgPSBnbG9iYWxUaGlzLnZpc3VhbFZpZXdwb3J0Py5vZmZzZXRUb3AgfHwgMDtcblxuICAgICAgT2JqZWN0LmFzc2lnbihib2R5U3R5bGUsIHtcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIHRvcDogYCR7LShzY3JvbGxZIC0gTWF0aC5mbG9vcihvZmZzZXRUb3ApKX1weGAsXG4gICAgICAgIGxlZnQ6IGAkey0oc2Nyb2xsWCAtIE1hdGguZmxvb3Iob2Zmc2V0TGVmdCkpfXB4YCxcbiAgICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGFuIGFjdGl2ZSBzY3JvbGxMb2NrIGlmIHRoZXJlIGFyZSBubyByZW1haW5pbmcgZWxlbWVudHMgcG9ydGFsZWQgdGhhdCByZXF1ZXN0ZWQgaXQgKi9cbiAgcHJpdmF0ZSByZW1vdmVTY3JvbGxMb2NrKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFjdGl2ZVNjcm9sbExvY2tzLmRlbGV0ZShlbGVtZW50KTtcblxuICAgIGlmICh0aGlzLmFjdGl2ZVNjcm9sbExvY2tzLnNpemUgPT09IDApIHtcbiAgICAgIGNvbnN0IGlzSU9TID0gaXNQbGF0Zm9ybSgnSU9TJyk7XG4gICAgICBjb25zdCBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuICAgICAgY29uc3Qgc2Nyb2xsYmFyWCA9XG4gICAgICAgIE1hdGgucm91bmQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpICtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICBjb25zdCBwYWRkaW5nUHJvcCA9IHNjcm9sbGJhclggPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oYm9keVN0eWxlLCB7XG4gICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgW3BhZGRpbmdQcm9wXTogJycsXG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtdGUtc2Nyb2xsLWxvY2stLWFjdGl2ZScpO1xuXG4gICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5U3R5bGUsIHtcbiAgICAgICAgICBwb3NpdGlvbjogJycsXG4gICAgICAgICAgdG9wOiAnJyxcbiAgICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgICByaWdodDogJycsXG4gICAgICAgIH0pO1xuICAgICAgICBnbG9iYWxUaGlzLnNjcm9sbFRvKHNjcm9sbFgsIHNjcm9sbFkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlUG9ydGFsU2VydmljZSA9IG5ldyBfTXRlUG9ydGFsU2VydmljZSgpO1xuIiwgImltcG9ydCB7IHNpZ25hbCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmNsYXNzIF9NdGVIaXN0b3J5QXBpU2VydmljZSB7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjaGFuZ2VTaWduYWwgPSBzaWduYWwoKTtcbiAgcHJpdmF0ZSBwcmV2SHJlZjogc3RyaW5nO1xuXG4gIHB1YmxpYyBzdGF0ZUNoYW5nZXMoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlU2lnbmFsO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3J3YXJkQXBwbHkgPSAodGFyZ2V0LCB0aGlzQXJnLCBhcmdBcnJheSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IHRhcmdldC5hcHBseSh0aGlzQXJnLCBhcmdBcnJheSk7XG4gICAgLy8gT25seSBlbWl0IGEgc3RhdGUgY2hhbmdlIGlmIHRoZSBocmVmIGRpZmZlcnMgZnJvbSB0aGUgbGFzdCBlbWlzc2lvblxuICAgIGlmICh0aGlzLnByZXZIcmVmICE9PSB3aW5kb3cubG9jYXRpb24uaHJlZikge1xuICAgICAgdGhpcy5wcmV2SHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgdGhpcy5jaGFuZ2VTaWduYWwuc2V0KHRoaXMucHJldkhyZWYpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAvLyBMaXN0ZW4gZm9yIGJhY2sgZXZlbnRzIHdpdGggcG9wc3RhdGUgZXZlbnRcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VTaWduYWwuc2V0KHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBQYXRjaCBIaXN0b3J5IEFQSSBtZXRob2RzIHRvIGVuc3VyZSB3ZSBlbWl0IGFueXRpbWUgdGhlaXIgc3RhdGUgaXMgY2hhbmdlZFxuICAgICAgLy8gVGhpcyBpcyBuZWNjZXNhcnkgYmVjYWlzZSB0aGUgYHBvcHN0YXRlYCBldmVudCBpcyBub3QgcmVsaWFibHkgY2FsbGVkIGFjcm9zcyBicm93c2VycyB3aGVuZXZlciB0aGUgaGlzdG9yeSBBUEkgaXMgdXNlZFxuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjayA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5iYWNrLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQgPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkuZm9yd2FyZCwgeyBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHkgfSk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5nbyA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5nbywgeyBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHkgfSk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUsIHtcbiAgICAgICAgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVIaXN0b3J5QXBpU2VydmljZSA9IG5ldyBfTXRlSGlzdG9yeUFwaVNlcnZpY2UoKTtcbiIsICJpbXBvcnQgeyBpc1NzciB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCB0eXBlIE10ZURhdGVGb3JtYXRPcHRpb25zID0gSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnMgJiB7XG4gIGxhbmc/OiBzdHJpbmc7XG4gIGZvcm1hdD86XG4gICAgfCAnc2hvcnQnXG4gICAgfCAnbWVkaXVtJ1xuICAgIHwgJ2xvbmcnXG4gICAgfCAnZnVsbCdcbiAgICB8ICdzaG9ydERhdGUnXG4gICAgfCAnbWVkaXVtRGF0ZSdcbiAgICB8ICdsb25nRGF0ZSdcbiAgICB8ICdmdWxsRGF0ZSdcbiAgICB8ICdzaG9ydFRpbWUnXG4gICAgfCAnbWVkaXVtVGltZSdcbiAgICB8ICdsb25nVGltZSdcbiAgICB8ICdmdWxsVGltZSc7XG59O1xuXG5leHBvcnQgdHlwZSBNdGVOdW1iZXJGb3JtYXRPcHRpb25zID0gSW50bC5OdW1iZXJGb3JtYXRPcHRpb25zICYgeyBsYW5nPzogc3RyaW5nIH07XG5cbmNsYXNzIF9NdGVMb2NhbGl6ZVNlcnZpY2Uge1xuICAvLyBBc3N1bWUgYGVuYCBsYW5nIGZvciBub3cgYXMgYSBmYWxsYmFjayB1bnRpbCB3ZSByb2xsYmFjayB3aWRlciBzdXBwb3J0IGZvciBpMTFuIHdoZW4gbmVjZXNzYXJ5XG4gIHByaXZhdGUgbGFuZ3VhZ2UgPSAnZW4nO1xuICBwcml2YXRlIGluaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIGlmICghaXNTc3IoKSAmJiAhdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0aGlzLmxhbmd1YWdlID0gYCR7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgfHwgbmF2aWdhdG9yLmxhbmd1YWdlfWAudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0TnVtYmVyKG51bWJlclRvRm9ybWF0OiBudW1iZXIgfCBzdHJpbmcsIG9wdGlvbnM/OiBNdGVOdW1iZXJGb3JtYXRPcHRpb25zKTogc3RyaW5nIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICBjb25zdCBsYW5nID0gb3B0aW9ucz8ubGFuZyA/IG9wdGlvbnMubGFuZyA6IHRoaXMubGFuZ3VhZ2U7XG4gICAgbnVtYmVyVG9Gb3JtYXQgPSBOdW1iZXIobnVtYmVyVG9Gb3JtYXQpO1xuICAgIC8vIEVuc3VyZSBubyBudWxsIG9wdGlvbnMgZXhpc3RcbiAgICBjb25zdCBmaW5hbE9wdGlvbnMgPSB7XG4gICAgICBsYW5nOiBvcHRpb25zLmxhbmcgPz8gdW5kZWZpbmVkLFxuICAgICAgc3R5bGU6IG9wdGlvbnMuc3R5bGUgPz8gdW5kZWZpbmVkLFxuICAgICAgY3VycmVuY3k6IG9wdGlvbnMuY3VycmVuY3kgPz8gdW5kZWZpbmVkLFxuICAgICAgY3VycmVuY3lEaXNwbGF5OiBvcHRpb25zLmN1cnJlbmN5RGlzcGxheSA/PyB1bmRlZmluZWQsXG4gICAgICB1c2VHcm91cGluZzogb3B0aW9ucy51c2VHcm91cGluZyA/PyB1bmRlZmluZWQsXG4gICAgICBtaW5pbXVtSW50ZWdlckRpZ2l0czogb3B0aW9ucy5taW5pbXVtSW50ZWdlckRpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IG9wdGlvbnMubWluaW11bUZyYWN0aW9uRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogb3B0aW9ucy5tYXhpbXVtRnJhY3Rpb25EaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgbWluaW11bVNpZ25pZmljYW50RGlnaXRzOiBvcHRpb25zLm1pbmltdW1TaWduaWZpY2FudERpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICBtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHM6IG9wdGlvbnMubWF4aW11bVNpZ25pZmljYW50RGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICB9O1xuICAgIHJldHVybiBpc05hTihudW1iZXJUb0Zvcm1hdClcbiAgICAgID8gJydcbiAgICAgIDogbmV3IEludGwuTnVtYmVyRm9ybWF0KGxhbmcsIGZpbmFsT3B0aW9ucykuZm9ybWF0KG51bWJlclRvRm9ybWF0KTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXREYXRlKGRhdGVUb0Zvcm1hdDogRGF0ZSB8IHN0cmluZywgb3B0aW9ucz86IE10ZURhdGVGb3JtYXRPcHRpb25zKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgY29uc3QgbGFuZyA9IG9wdGlvbnM/LmxhbmcgPyBvcHRpb25zLmxhbmcgOiB0aGlzLmxhbmd1YWdlO1xuICAgIGNvbnN0IGZvcm1hdHRlZE9wdGlvbnMgPSB7IC4uLihvcHRpb25zID8/IHt9KSwgLi4udGhpcy5nZXREZWZpbmVkRGF0ZUZvcm1hdChvcHRpb25zPy5mb3JtYXQpIH07XG4gICAgLy8gRW5zdXJlIG5vIG51bGwgb3B0aW9ucyBleGlzdFxuICAgIGNvbnN0IGZpbmFsT3B0aW9ucyA9IHtcbiAgICAgIGxhbmc6IGZvcm1hdHRlZE9wdGlvbnMubGFuZyA/PyB1bmRlZmluZWQsXG4gICAgICB3ZWVrZGF5OiBmb3JtYXR0ZWRPcHRpb25zLndlZWtkYXkgPz8gdW5kZWZpbmVkLFxuICAgICAgZXJhOiBmb3JtYXR0ZWRPcHRpb25zLmVyYSA/PyB1bmRlZmluZWQsXG4gICAgICB5ZWFyOiBmb3JtYXR0ZWRPcHRpb25zLnllYXIgPz8gdW5kZWZpbmVkLFxuICAgICAgbW9udGg6IGZvcm1hdHRlZE9wdGlvbnMubW9udGggPz8gdW5kZWZpbmVkLFxuICAgICAgZGF5OiBmb3JtYXR0ZWRPcHRpb25zLmRheSA/PyB1bmRlZmluZWQsXG4gICAgICBob3VyOiBmb3JtYXR0ZWRPcHRpb25zLmhvdXIgPz8gdW5kZWZpbmVkLFxuICAgICAgbWludXRlOiBmb3JtYXR0ZWRPcHRpb25zLm1pbnV0ZSA/PyB1bmRlZmluZWQsXG4gICAgICBzZWNvbmQ6IGZvcm1hdHRlZE9wdGlvbnMuc2Vjb25kID8/IHVuZGVmaW5lZCxcbiAgICAgIGZyYWN0aW9uYWxTZWNvbmREaWdpdHM6IGZvcm1hdHRlZE9wdGlvbnMuZnJhY3Rpb25hbFNlY29uZERpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICB0aW1lWm9uZU5hbWU6IGZvcm1hdHRlZE9wdGlvbnMudGltZVpvbmVOYW1lID8/IHVuZGVmaW5lZCxcbiAgICAgIHRpbWVab25lOiBmb3JtYXR0ZWRPcHRpb25zLnRpbWVab25lID8/IHVuZGVmaW5lZCxcbiAgICAgIGhvdXIxMjogZm9ybWF0dGVkT3B0aW9ucy5ob3VyMTIgPz8gdW5kZWZpbmVkLFxuICAgICAgZm9ybWF0OiBmb3JtYXR0ZWRPcHRpb25zLmZvcm1hdCA/PyB1bmRlZmluZWQsXG4gICAgfTtcbiAgICBkYXRlVG9Gb3JtYXQgPSBuZXcgRGF0ZShkYXRlVG9Gb3JtYXQpO1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsYW5nLCBmaW5hbE9wdGlvbnMpLmZvcm1hdChkYXRlVG9Gb3JtYXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZpbmVkRGF0ZUZvcm1hdChcbiAgICBmb3JtYXQ6XG4gICAgICB8ICdzaG9ydCdcbiAgICAgIHwgJ21lZGl1bSdcbiAgICAgIHwgJ2xvbmcnXG4gICAgICB8ICdmdWxsJ1xuICAgICAgfCAnc2hvcnREYXRlJ1xuICAgICAgfCAnbWVkaXVtRGF0ZSdcbiAgICAgIHwgJ2xvbmdEYXRlJ1xuICAgICAgfCAnZnVsbERhdGUnXG4gICAgICB8ICdzaG9ydFRpbWUnXG4gICAgICB8ICdtZWRpdW1UaW1lJ1xuICAgICAgfCAnbG9uZ1RpbWUnXG4gICAgICB8ICdmdWxsVGltZSdcbiAgKTogTXRlRGF0ZUZvcm1hdE9wdGlvbnMge1xuICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICBjYXNlICdzaG9ydCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbG9uZyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2Z1bGwnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnc2hvcnREYXRlJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ21lZGl1bURhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2xvbmdEYXRlJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2Z1bGxEYXRlJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdzaG9ydFRpbWUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ21lZGl1bVRpbWUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2xvbmdUaW1lJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnZnVsbFRpbWUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICBmcmFjdGlvbmFsU2Vjb25kRGlnaXRzOiAyLFxuICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZUxvY2FsaXplU2VydmljZSA9IG5ldyBfTXRlTG9jYWxpemVTZXJ2aWNlKCk7XG4iLCAiaW1wb3J0IHsgUmVhY3RpdmVDb250cm9sbGVyLCBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBNdGVQb3J0YWxTZXJ2aWNlLCBQb3J0YWxPcHRpb25zLCBQb3J0YWxTdGFjayB9IGZyb20gJy4uL3NlcnZpY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0YWxDb250cm9sbGVyT3B0aW9ucyB7XG4gIHN0YWNrOiBQb3J0YWxTdGFjaztcbn1cblxubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbi8qKlxuICogQ29udHJvbGxlciB1c2VkIHRvIGF0dGFjaCBhbnkgZWxlbWVudCB0byBhIHBvcnRhbCBzdGFjay5cbiAqXG4gKiBVc2UgdGhpcyBjb250cm9sbGVyIHdoZW4geW91IG5lZWQgdG8gcmVuZGVyIGFuIG92ZXJsYXkgYXQgdGhlIHJvb3Qgb2YgdGhlIERPTS5cbiAqIFRvIGF2b2lkIHBvc2l0aW9uaW5nIGNvbmZsaWN0cyBvciBvdmVyZmxvdyBjbGlwcGluZy5cbiAqL1xuZXhwb3J0IGNsYXNzIFBvcnRhbENvbnRyb2xsZXIgaW1wbGVtZW50cyBSZWFjdGl2ZUNvbnRyb2xsZXIsIEVsZW1lbnRQb3J0YWxDb250cm9sbGVyIHtcbiAgLyoqIEBpZ25vcmUgKi9cbiAgaWQgPSBuZXh0VW5pcXVlSWQrKztcblxuICAvKipcbiAgICogVXNlZCBieSB0aGUgTXRlUG9ydGFsU2VydmljZSB0byBjYWNoZSB0aGlzIGVsZW1lbnRzIHBvcnRhbGVkIHBhcmVudCByZWZlcmVuY2VcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcGFyZW50UG9ydGFsZWRFbGVtZW50OiBFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBGbGFnIHRvIGhlbHAgY2hlY2sgaWYgYSBkaXNjb25uZWN0ZWQgY2FsbGJhY2sgaGFzIGJlZW4gZmlyZWRcbiAgICogYmVjYXVzZSBvZiBhIHBvcnRhbGluZyBvcGVyYXRpb24uXG4gICAqL1xuICBwcml2YXRlIGlnbm9yZU5leHREaXNjb25uZWN0ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaG9zdDogUmVhY3RpdmVDb250cm9sbGVySG9zdCAmIEVsZW1lbnQsXG4gICAgcHVibGljIG9wdGlvbnM6IFBvcnRhbENvbnRyb2xsZXJPcHRpb25zID0geyBzdGFjazogJ292ZXJsYXknIH1cbiAgKSB7XG4gICAgdGhpcy5ob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XG4gIH1cblxuICAvKiogUmVxdWVzdHMgdGhlIHBvcnRhbCBzZXJ2aWNlIGFwcGVuZCB0aGlzIGl0ZW0gdG8gdGhlIGNvbmZpZ3VyZWQgc3RhY2sgKi9cbiAgcHVibGljIGFwcGVuZFRvU3RhY2soZWxlbWVudDogRWxlbWVudCA9IHRoaXMuaG9zdCwgb3B0aW9uczogUG9ydGFsT3B0aW9ucyA9IHt9KSB7XG4gICAgLy8gT25seSBpZ25vcmUgdGhlIG5leHQgZGlzY29ubmVjdCBpZiB0aGUgZWxlbWVudCBiZWluZyBwb3J0YWxlZCBpcyBjdXJyZW50bHkgY29ubmVjdGVkIHRvIHRoZSBET01cbiAgICBpZiAoZWxlbWVudD8uaXNDb25uZWN0ZWQpIHtcbiAgICAgIHRoaXMuaWdub3JlTmV4dERpc2Nvbm5lY3QgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gTXRlUG9ydGFsU2VydmljZS5hcHBlbmRUb1N0YWNrKHRoaXMsIGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqIFJlcXVlc3RzIHRoZSBwb3J0YWwgc2VydmljZSByZW1vdmUgdGhpcyBlbGVtZW50IGZyb20gdGhlIGNvbmZpZ3VyZWQgc3RhY2sgKi9cbiAgcHVibGljIHJlbW92ZUZyb21TdGFjayhlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5ob3N0KSB7XG4gICAgdGhpcy5pZ25vcmVOZXh0RGlzY29ubmVjdCA9IGZhbHNlO1xuICAgIHJldHVybiBNdGVQb3J0YWxTZXJ2aWNlLnJlbW92ZUZyb21TdGFjayh0aGlzLCBlbGVtZW50KTtcbiAgfVxuXG4gIC8qKiBNYWtlcyBhIGJhY2tkcm9wIGFzc29jaWF0ZWQgd2l0aCBhIHBvcnRhbGVkIGVsZW1lbnQgdmlzaWJsZSBpZiBpdCBleGlzdHMgKi9cbiAgcHVibGljIHNob3dCYWNrZHJvcChlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5ob3N0KSB7XG4gICAgcmV0dXJuIE10ZVBvcnRhbFNlcnZpY2Uuc2hvd0JhY2tkcm9wKHRoaXMsIGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqIEhpZGVzIGEgYmFja2Ryb3AgYXNzb2NpYXRlZCB3aXRoIGEgcG9ydGFsZWQgZWxlbWVudCBpZiBpdCBleGlzdHMgKi9cbiAgcHVibGljIGhpZGVCYWNrZHJvcChlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5ob3N0KSB7XG4gICAgcmV0dXJuIE10ZVBvcnRhbFNlcnZpY2UuaGlkZUJhY2tkcm9wKHRoaXMsIGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIGludGVydG5lc3MgYSBiYWNrZHJvcCBpZiBpdCBleGlzdHMgKHdoZXRoZXIgb3Igbm90IHRoZSB1c2VyIGNhbiBjbGljayB0aHJvdWdoIGl0KSAqL1xuICBwdWJsaWMgc2V0QmFja2Ryb3BJbmVydG5lc3MoaW5lcnQ6IGJvb2xlYW4sIGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLmhvc3QpIHtcbiAgICByZXR1cm4gTXRlUG9ydGFsU2VydmljZS5zZXRCYWNrZHJvcEluZXJ0bmVzcyh0aGlzLCBlbGVtZW50LCBpbmVydCk7XG4gIH1cblxuICBob3N0Q29ubmVjdGVkKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhY2spIHtcbiAgICAgIE10ZVBvcnRhbFNlcnZpY2UuaW5pdGlhbGl6ZVN0YWNrKHRoaXMub3B0aW9ucy5zdGFjayk7XG4gICAgfVxuICB9XG5cbiAgaG9zdERpc2Nvbm5lY3RlZCgpIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgbmV4dCBkaXNjb25uZWN0IHNob3VsZCBiZSBpZ25vcmVkIGJlY2F1c2UgaXQgaXMgdHJpZ2dlZFxuICAgIC8vIGZyb20gYSBwb3J0YWxpbmcgb3BlcmF0aW9uXG4gICAgaWYgKHRoaXMuaWdub3JlTmV4dERpc2Nvbm5lY3QpIHtcbiAgICAgIHRoaXMuaWdub3JlTmV4dERpc2Nvbm5lY3QgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgTXRlUG9ydGFsU2VydmljZS5yZW1vdmVDb250cm9sbGVyKHRoaXMpO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgfSBmcm9tICdsaXQnO1xuXG5pbnRlcmZhY2UgQ2xvc2FibGVFbGVtZW50IHtcbiAgY2xvc2U6ICgpID0+IGFueSB8IFByb21pc2U8YW55Pjtcbn1cblxuLyoqXG4gKiBUaGlzIGNvbnRyb2xsZXIgd2F0Y2hlcyBmb3IgYSBgZG9DbG9zZWAgZXZlbnQgdG8gYmUgdGhyb3duIGJ5IGFueSBjaGlsZCBlbGVtZW50cy5cbiAqIFdoZW4gYSBgZG9DbG9zZWAgZXZlbnQgaXMgZW1pdHRlZCBpdCB3aWxsIGF0dGVtcHQgdG8gY2xvc2UgdGhlIGhvc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZXRlY3RDaGlsZENsb3NlQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdDogUmVhY3RpdmVDb250cm9sbGVySG9zdCAmIEVsZW1lbnQgJiBDbG9zYWJsZUVsZW1lbnQpIHtcbiAgICB0aGlzLmhvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmx5IHRyaWdnZXIgYSBjbG9zZSBpZiB0aGUgdGFyZ2V0IGlzIG5vdCB0aGlzIGVsZW1lbnRcbiAgICogYXMgdGhpcyBpbXBsaWVzIHRoZSBjbG9zZSB3YXMgdHJpZ2dlcmVkIGZyb20gYSBjaGlsZCBlbGVtZW50XG4gICAqL1xuICBwcml2YXRlIGNoaWxkT25seUNsb3NlID0gKGU6IEN1c3RvbUV2ZW50PGFueT4pID0+IHtcbiAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMuaG9zdCkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuaG9zdC5jbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBob3N0Q29ubmVjdGVkKCkge1xuICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdkb0Nsb3NlJywgdGhpcy5jaGlsZE9ubHlDbG9zZSwgdHJ1ZSk7XG4gIH1cblxuICBob3N0RGlzY29ubmVjdGVkKCkge1xuICAgIHRoaXMuaG9zdC5yZW1vdmVFdmVudExpc3RlbmVyKCdkb0Nsb3NlJywgdGhpcy5jaGlsZE9ubHlDbG9zZSwgdHJ1ZSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBDb3JlUGFsZXR0ZSwgRGVuc2l0eU9wdGlvbnMsIFByZXNldHMsIFNpemVPcHRpb25zLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uUHJlc2V0IHtcbiAgc2l6ZT86IFNpemVPcHRpb25zO1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICBkZW5zaXR5PzogRGVuc2l0eU9wdGlvbnM7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBidXR0b25QcmVzZXRzOiBQcmVzZXRzPEJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJY29uQnV0dG9uUHJlc2V0IHtcbiAgc2l6ZT86IFNpemVPcHRpb25zO1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICBkZW5zaXR5PzogRGVuc2l0eU9wdGlvbnM7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBpY29uQnV0dG9uUHJlc2V0czogUHJlc2V0czxJY29uQnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFN0YXR1c1BhbGV0dGUgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25QcmVzZXQge1xuICBjb2xvcj86IFN0YXR1c1BhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBpY29uUHJlc2V0czogUHJlc2V0czxJY29uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFN0YXR1c1BhbGV0dGUgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzQmFyUHJlc2V0IHtcbiAgY29sb3I/OiBTdGF0dXNQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NCYXJQcmVzZXRzOiBQcmVzZXRzPFByb2dyZXNzQmFyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgU3RhdHVzUGFsZXR0ZSB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NTcGlubmVyUHJlc2V0IHtcbiAgY29sb3I/OiBTdGF0dXNQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NTcGlubmVyUHJlc2V0czogUHJlc2V0czxQcm9ncmVzc1NwaW5uZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUb29sYmFyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCB0b29sYmFyUHJlc2V0czogUHJlc2V0czxUb29sYmFyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRQcmVzZXQge1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xuICB3aXRoU2hhZG93PzogYm9vbGVhbjtcbiAgd2l0aG91dFNoYWRvdz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZEJ1dHRvblByZXNldCBleHRlbmRzIENhcmRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGNhcmRQcmVzZXRzOiBQcmVzZXRzPENhcmRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICB3aXRob3V0U2hhZG93OiB0cnVlLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBjYXJkQnV0dG9uUHJlc2V0czogUHJlc2V0czxDYXJkQnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgd2l0aG91dFNoYWRvdzogdHJ1ZSxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHRyZWVQcmVzZXRzOiBQcmVzZXRzPFRyZWVQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgQ29yZVBhbGV0dGUsIFByZXNldHMsIFNpemVPcHRpb25zLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnUHJlc2V0cyB7XG4gIHNpemU/OiBTaXplT3B0aW9ucztcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IHRhZ1ByZXNldHM6IFByZXNldHM8VGFnUHJlc2V0cz4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCYWRnZVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgYmFkZ2VQcmVzZXRzOiBQcmVzZXRzPEJhZGdlUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IENvcmVQYWxldHRlLCBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBMaW5rUHJlc2V0IHtcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgZm9udFdlaWdodD86ICdyZWd1bGFyJyB8ICdib2xkJztcbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtQcmVzZXRzOiBQcmVzZXRzPExpbmtQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBbGVydFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgYWxlcnRQcmVzZXRzOiBQcmVzZXRzPEFsZXJ0UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBpbnB1dFByZXNldHM6IFByZXNldHM8SW5wdXRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd2VyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBkcmF3ZXJQcmVzZXRzOiBQcmVzZXRzPERyYXdlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBc2lkZVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgYXNpZGVQcmVzZXRzOiBQcmVzZXRzPEFzaWRlUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCcmVhZGNydW1iSXRlbVByZXNldCB7XG4gIGZvbnRXZWlnaHQ/OiAncmVndWxhcicgfCAnYm9sZCc7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG4gIHdpdGhvdXRVbmRlcmxpbmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgYnJlYWRjcnVtYkl0ZW1QcmVzZXRzOiBQcmVzZXRzPEJyZWFkY3J1bWJJdGVtUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHtcbiAgICB3aXRob3V0VW5kZXJsaW5lOiB0cnVlLFxuICB9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBtb2RhbFByZXNldHM6IFByZXNldHM8TW9kYWxQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgQ29yZVBhbGV0dGUgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDaGVja2JveFByZXNldCB7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja2JveFByZXNldHM6IFByZXNldHM8Q2hlY2tib3hQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFkaW9QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHJhZGlvUHJlc2V0czogUHJlc2V0czxSYWRpb1ByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBOYXZSb290UHJlc2V0IHtcbiAgbW9iaWxlQnJlYWtwb2ludD86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCc7XG4gIGludmVyc2U/OiAnaGVhZGVyJyB8ICdzaWRlYmFyJztcbiAgcHJlZmVyU2lkZWJhcj86ICdvcGVuZWQnIHwgJ2Nsb3NlZCc7XG59XG5cbmV4cG9ydCBjb25zdCBuYXZSb290UHJlc2V0czogUHJlc2V0czxOYXZSb290UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge1xuICAgIGludmVyc2U6ICdzaWRlYmFyJyxcbiAgfSxcbiAgY3g6IHtcbiAgICBwcmVmZXJTaWRlYmFyOiAnY2xvc2VkJyxcbiAgfSxcbiAgcHg6IHtcbiAgICBpbnZlcnNlOiAnc2lkZWJhcicsXG4gIH0sXG4gIHJ4OiB7XG4gICAgcHJlZmVyU2lkZWJhcjogJ2Nsb3NlZCcsXG4gIH0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkhlYWRlclByZXNldCB7XG4gIHdpdGhDb250YWluZXI/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbmF2SGVhZGVyUHJlc2V0czogUHJlc2V0czxOYXZIZWFkZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2U3ViSGVhZGVyUHJlc2V0IHtcbiAgd2l0aENvbnRhaW5lcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZTdWJIZWFkZXJQcmVzZXRzOiBQcmVzZXRzPE5hdlN1YkhlYWRlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZTaWRlYmFyUHJlc2V0IHtcbiAgaGlkZVVudGlsVHJhbnNpdGlvbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZTaWRlYmFyUHJlc2V0czogUHJlc2V0czxOYXZTaWRlYmFyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgaGlkZVVudGlsVHJhbnNpdGlvbjogdHJ1ZSxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge1xuICAgIGhpZGVVbnRpbFRyYW5zaXRpb246IHRydWUsXG4gIH0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkNvbnRlbnRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkNvbnRlbnRQcmVzZXRzOiBQcmVzZXRzPE5hdkNvbnRlbnRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2Rm9vdGVyUHJlc2V0IHtcbiAgd2l0aENvbnRhaW5lcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZGb290ZXJQcmVzZXRzOiBQcmVzZXRzPE5hdkZvb3RlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZCdXR0b25QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkJ1dHRvblByZXNldHM6IFByZXNldHM8TmF2QnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkljb25CdXR0b25QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkljb25CdXR0b25QcmVzZXRzOiBQcmVzZXRzPE5hdkljb25CdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2SXRlbVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF2SXRlbVByZXNldHM6IFByZXNldHM8TmF2SXRlbVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uR3JvdXBQcmVzZXQge1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgYnV0dG9uR3JvdXBQcmVzZXRzOiBQcmVzZXRzPEJ1dHRvbkdyb3VwUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTd2l0Y2hQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHN3aXRjaFByZXNldHM6IFByZXNldHM8U3dpdGNoUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVTZWxlY3RQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdGl2ZVNlbGVjdFByZXNldHM6IFByZXNldHM8TmF0aXZlU2VsZWN0UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUZXh0YXJlYVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgdGV4dGFyZWFQcmVzZXRzOiBQcmVzZXRzPFRleHRhcmVhUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTa2VsZXRvblByZXNldCB7fVxuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25QcmVzZXRzOiBQcmVzZXRzPFNrZWxldG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHNsaWRlclByZXNldHM6IFByZXNldHM8U2xpZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBSYW5nZVNsaWRlclByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgcmFuZ2VTbGlkZXJQcmVzZXRzOiBQcmVzZXRzPFJhbmdlU2xpZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWdtZW50ZWRDb250cm9sUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBzZWdtZW50ZWRDb250cm9sUHJlc2V0czogUHJlc2V0czxTZWdtZW50ZWRDb250cm9sUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IGJ1dHRvblByZXNldHMsIGljb25CdXR0b25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2J1dHRvbi9idXR0b24ucHJlc2V0cyc7XG5pbXBvcnQgeyBpY29uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9pY29uL2ljb24ucHJlc2V0cyc7XG5pbXBvcnQgeyBwcm9ncmVzc0JhclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5wcmVzZXRzJztcbmltcG9ydCB7IHByb2dyZXNzU3Bpbm5lclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLnByZXNldHMnO1xuaW1wb3J0IHsgdG9vbGJhclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdG9vbGJhci90b29sYmFyLnByZXNldHMnO1xuaW1wb3J0IHsgY2FyZFByZXNldHMsIGNhcmRCdXR0b25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2NhcmQvY2FyZC5wcmVzZXRzJztcbmltcG9ydCB7IHRyZWVQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3RyZWUvdHJlZS5wcmVzZXRzJztcbmltcG9ydCB7IHRhZ1ByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdGFnL3RhZy5wcmVzZXRzJztcbmltcG9ydCB7IGJhZGdlUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9iYWRnZS9iYWRnZS5wcmVzZXRzJztcbmltcG9ydCB7IGxpbmtQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2xpbmsvbGluay5wcmVzZXRzJztcbmltcG9ydCB7IGFsZXJ0UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9hbGVydC9hbGVydC5wcmVzZXRzJztcbmltcG9ydCB7IGlucHV0UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9pbnB1dC9pbnB1dC5wcmVzZXRzJztcbmltcG9ydCB7IGRyYXdlclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvZHJhd2VyL2RyYXdlci5wcmVzZXRzJztcbmltcG9ydCB7IGFzaWRlUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9hc2lkZS9hc2lkZS5wcmVzZXRzJztcbmltcG9ydCB7IGJyZWFkY3J1bWJJdGVtUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9icmVhZGNydW1icy9icmVhZGNydW1iLWl0ZW0ucHJlc2V0cyc7XG5pbXBvcnQgeyBtb2RhbFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvbW9kYWwvbW9kYWwucHJlc2V0cyc7XG5pbXBvcnQgeyBjaGVja2JveFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvY2hlY2tib3gvY2hlY2tib3gucHJlc2V0cyc7XG5pbXBvcnQgeyByYWRpb1ByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcmFkaW8vcmFkaW8ucHJlc2V0cyc7XG5pbXBvcnQge1xuICBuYXZSb290UHJlc2V0cyxcbiAgbmF2SGVhZGVyUHJlc2V0cyxcbiAgbmF2U3ViSGVhZGVyUHJlc2V0cyxcbiAgbmF2U2lkZWJhclByZXNldHMsXG4gIG5hdkNvbnRlbnRQcmVzZXRzLFxuICBuYXZGb290ZXJQcmVzZXRzLFxuICBuYXZCdXR0b25QcmVzZXRzLFxuICBuYXZJY29uQnV0dG9uUHJlc2V0cyxcbiAgbmF2SXRlbVByZXNldHMsXG59IGZyb20gJy4uLy4uL2F0b21pYy9uYXYvbmF2LnByZXNldHMnO1xuaW1wb3J0IHsgYnV0dG9uR3JvdXBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAucHJlc2V0cyc7XG5pbXBvcnQgeyBzd2l0Y2hQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3N3aXRjaC9zd2l0Y2gucHJlc2V0cyc7XG5pbXBvcnQgeyBuYXRpdmVTZWxlY3RQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL25hdGl2ZS1zZWxlY3QvbmF0aXZlLXNlbGVjdC5wcmVzZXRzJztcbmltcG9ydCB7IHRleHRhcmVhUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy90ZXh0YXJlYS90ZXh0YXJlYS5wcmVzZXRzJztcbmltcG9ydCB7IHNrZWxldG9uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9za2VsZXRvbi9za2VsZXRvbi5wcmVzZXRzJztcbmltcG9ydCB7IHNsaWRlclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc2xpZGVyL3NsaWRlci5wcmVzZXRzJztcbmltcG9ydCB7IHJhbmdlU2xpZGVyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLnByZXNldHMnO1xuaW1wb3J0IHsgc2VnbWVudGVkQ29udHJvbFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc2VnbWVudGVkLWNvbnRyb2wvc2VnbWVudGVkLWNvbnRyb2wucHJlc2V0cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9ydGFyUHJlc2V0VGhlbWUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbG9yU2NoZW1lOiAnc3lzdGVtJyB8ICdsaWdodCcgfCAnZGFyayc7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdkZWZhdWx0JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAncHgnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9IGFzIE1vcnRhclByZXNldFRoZW1lLFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMuZGVmYXVsdCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMuZGVmYXVsdCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMuZGVmYXVsdCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMuZGVmYXVsdCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMuZGVmYXVsdCxcbiAgTXRlTGluazogbGlua1ByZXNldHMuZGVmYXVsdCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMuZGVmYXVsdCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMuZGVmYXVsdCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMuZGVmYXVsdCxcbn07XG5cbmV4cG9ydCB0eXBlIE1vcnRhclByZXNldCA9IHR5cGVvZiBkZWZhdWx0UHJlc2V0O1xuXG5leHBvcnQgY29uc3QgcHhQcmVzZXQ6IE1vcnRhclByZXNldCA9IHtcbiAgcHJlc2V0OiAncHgnLFxuICB0aGVtZToge1xuICAgIG5hbWU6ICdweCcsXG4gICAgY29sb3JTY2hlbWU6ICdsaWdodCcsXG4gIH0sXG4gIE10ZUJ1dHRvbjogYnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMucHgsXG4gIE10ZUljb246IGljb25QcmVzZXRzLnB4LFxuICBNdGVQcm9ncmVzc0JhcjogcHJvZ3Jlc3NCYXJQcmVzZXRzLnB4LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMucHgsXG4gIE10ZVRvb2xiYXI6IHRvb2xiYXJQcmVzZXRzLnB4LFxuICBNdGVDYXJkOiBjYXJkUHJlc2V0cy5weCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMucHgsXG4gIE10ZVRyZWU6IHRyZWVQcmVzZXRzLnB4LFxuICBNdGVUYWc6IHRhZ1ByZXNldHMucHgsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMucHgsXG4gIE10ZUxpbms6IGxpbmtQcmVzZXRzLnB4LFxuICBNdGVBbGVydDogYWxlcnRQcmVzZXRzLnB4LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLnB4LFxuICBNdGVEcmF3ZXI6IGRyYXdlclByZXNldHMucHgsXG4gIE10ZUFzaWRlOiBhc2lkZVByZXNldHMucHgsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMucHgsXG4gIE10ZU1vZGFsOiBtb2RhbFByZXNldHMucHgsXG4gIE10ZUNoZWNrYm94OiBjaGVja2JveFByZXNldHMucHgsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMucHgsXG4gIE10ZU5hdlJvb3Q6IG5hdlJvb3RQcmVzZXRzLnB4LFxuICBNdGVOYXZIZWFkZXI6IG5hdkhlYWRlclByZXNldHMucHgsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5weCxcbiAgTXRlTmF2U2lkZWJhcjogbmF2U2lkZWJhclByZXNldHMucHgsXG4gIE10ZU5hdkNvbnRlbnQ6IG5hdkNvbnRlbnRQcmVzZXRzLnB4LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMucHgsXG4gIE10ZU5hdkJ1dHRvbjogbmF2QnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlTmF2SWNvbkJ1dHRvbjogbmF2SWNvbkJ1dHRvblByZXNldHMucHgsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLnB4LFxuICBNdGVCdXR0b25Hcm91cDogYnV0dG9uR3JvdXBQcmVzZXRzLnB4LFxuICBNdGVTd2l0Y2g6IHN3aXRjaFByZXNldHMucHgsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5weCxcbiAgTXRlVGV4dGFyZWE6IHRleHRhcmVhUHJlc2V0cy5weCxcbiAgTXRlU2tlbGV0b246IHNrZWxldG9uUHJlc2V0cy5weCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLnB4LFxuICBNdGVSYW5nZVNsaWRlcjogcmFuZ2VTbGlkZXJQcmVzZXRzLnB4LFxuICBNdGVTZWdtZW50ZWRDb250cm9sOiBzZWdtZW50ZWRDb250cm9sUHJlc2V0cy5weCxcbn07XG5cbmV4cG9ydCBjb25zdCBjeFByZXNldDogTW9ydGFyUHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdjeCcsXG4gIHRoZW1lOiB7XG4gICAgbmFtZTogJ2N4JyxcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSxcbiAgTXRlQnV0dG9uOiBidXR0b25QcmVzZXRzLmN4LFxuICBNdGVJY29uQnV0dG9uOiBpY29uQnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMuY3gsXG4gIE10ZVByb2dyZXNzQmFyOiBwcm9ncmVzc0JhclByZXNldHMuY3gsXG4gIE10ZVByb2dyZXNzU3Bpbm5lcjogcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cy5jeCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMuY3gsXG4gIE10ZUNhcmQ6IGNhcmRQcmVzZXRzLmN4LFxuICBNdGVDYXJkQnV0dG9uOiBjYXJkQnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMuY3gsXG4gIE10ZVRhZzogdGFnUHJlc2V0cy5jeCxcbiAgTXRlQmFkZ2U6IGJhZGdlUHJlc2V0cy5jeCxcbiAgTXRlTGluazogbGlua1ByZXNldHMuY3gsXG4gIE10ZUFsZXJ0OiBhbGVydFByZXNldHMuY3gsXG4gIE10ZUlucHV0OiBpbnB1dFByZXNldHMuY3gsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5jeCxcbiAgTXRlQXNpZGU6IGFzaWRlUHJlc2V0cy5jeCxcbiAgTXRlQnJlYWRjcnVtYkl0ZW06IGJyZWFkY3J1bWJJdGVtUHJlc2V0cy5jeCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5jeCxcbiAgTXRlQ2hlY2tib3g6IGNoZWNrYm94UHJlc2V0cy5jeCxcbiAgTXRlUmFkaW86IHJhZGlvUHJlc2V0cy5jeCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMuY3gsXG4gIE10ZU5hdkhlYWRlcjogbmF2SGVhZGVyUHJlc2V0cy5jeCxcbiAgTXRlTmF2U3ViSGVhZGVyOiBuYXZTdWJIZWFkZXJQcmVzZXRzLmN4LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5jeCxcbiAgTXRlTmF2Q29udGVudDogbmF2Q29udGVudFByZXNldHMuY3gsXG4gIE10ZU5hdkZvb3RlcjogbmF2Rm9vdGVyUHJlc2V0cy5jeCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLmN4LFxuICBNdGVOYXZJY29uQnV0dG9uOiBuYXZJY29uQnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlTmF2SXRlbTogbmF2SXRlbVByZXNldHMuY3gsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMuY3gsXG4gIE10ZVN3aXRjaDogc3dpdGNoUHJlc2V0cy5jeCxcbiAgTXRlTmF0aXZlU2VsZWN0OiBuYXRpdmVTZWxlY3RQcmVzZXRzLmN4LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLmN4LFxuICBNdGVTa2VsZXRvbjogc2tlbGV0b25QcmVzZXRzLmN4LFxuICBNdGVTbGlkZXI6IHNsaWRlclByZXNldHMuY3gsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMuY3gsXG4gIE10ZVNlZ21lbnRlZENvbnRyb2w6IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzLmN4LFxufTtcblxuZXhwb3J0IGNvbnN0IHJ4UHJlc2V0OiBNb3J0YXJQcmVzZXQgPSB7XG4gIHByZXNldDogJ3J4JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAncngnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9LFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMucngsXG4gIE10ZUljb25CdXR0b246IGljb25CdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVJY29uOiBpY29uUHJlc2V0cy5yeCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5yeCxcbiAgTXRlUHJvZ3Jlc3NTcGlubmVyOiBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzLnJ4LFxuICBNdGVUb29sYmFyOiB0b29sYmFyUHJlc2V0cy5yeCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMucngsXG4gIE10ZUNhcmRCdXR0b246IGNhcmRCdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVUcmVlOiB0cmVlUHJlc2V0cy5yeCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLnJ4LFxuICBNdGVCYWRnZTogYmFkZ2VQcmVzZXRzLnJ4LFxuICBNdGVMaW5rOiBsaW5rUHJlc2V0cy5yeCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5yeCxcbiAgTXRlSW5wdXQ6IGlucHV0UHJlc2V0cy5yeCxcbiAgTXRlRHJhd2VyOiBkcmF3ZXJQcmVzZXRzLnJ4LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLnJ4LFxuICBNdGVCcmVhZGNydW1iSXRlbTogYnJlYWRjcnVtYkl0ZW1QcmVzZXRzLnJ4LFxuICBNdGVNb2RhbDogbW9kYWxQcmVzZXRzLnJ4LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLnJ4LFxuICBNdGVSYWRpbzogcmFkaW9QcmVzZXRzLnJ4LFxuICBNdGVOYXZSb290OiBuYXZSb290UHJlc2V0cy5yeCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZTdWJIZWFkZXI6IG5hdlN1YkhlYWRlclByZXNldHMucngsXG4gIE10ZU5hdlNpZGViYXI6IG5hdlNpZGViYXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5yeCxcbiAgTXRlTmF2Rm9vdGVyOiBuYXZGb290ZXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZCdXR0b246IG5hdkJ1dHRvblByZXNldHMucngsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVOYXZJdGVtOiBuYXZJdGVtUHJlc2V0cy5yeCxcbiAgTXRlQnV0dG9uR3JvdXA6IGJ1dHRvbkdyb3VwUHJlc2V0cy5yeCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLnJ4LFxuICBNdGVOYXRpdmVTZWxlY3Q6IG5hdGl2ZVNlbGVjdFByZXNldHMucngsXG4gIE10ZVRleHRhcmVhOiB0ZXh0YXJlYVByZXNldHMucngsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMucngsXG4gIE10ZVNsaWRlcjogc2xpZGVyUHJlc2V0cy5yeCxcbiAgTXRlUmFuZ2VTbGlkZXI6IHJhbmdlU2xpZGVyUHJlc2V0cy5yeCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMucngsXG59O1xuIiwgImltcG9ydCB7IGN4UHJlc2V0LCBkZWZhdWx0UHJlc2V0LCBNb3J0YXJQcmVzZXQsIHB4UHJlc2V0LCByeFByZXNldCB9IGZyb20gJy4vcHJlc2V0cyc7XG5pbXBvcnQgeyBjb21wdXRlZCwgU2lnbmFsLCBzaWduYWwgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5jbGFzcyBfTXRlUHJlc2V0U2VydmljZSB7XG4gIHByaXZhdGUgcHJlc2V0cyA9IG5ldyBNYXA8c3RyaW5nLCBNb3J0YXJQcmVzZXQ+KFtcbiAgICBbJ2dsb2JhbCcsIGRlZmF1bHRQcmVzZXRdLFxuICAgIFsnZGVmYXVsdCcsIGRlZmF1bHRQcmVzZXRdLFxuICAgIFsncHgnLCBweFByZXNldF0sXG4gICAgWydjeCcsIGN4UHJlc2V0XSxcbiAgICBbJ3J4JywgcnhQcmVzZXRdLFxuICBdKTtcblxuICBwcml2YXRlIHByZXNldENoYW5nZWRTaWduYWwgPSBzaWduYWw8eyBwcmVzZXROYW1lOiBzdHJpbmc7IGNvbXBvbmVudE5hbWU6IHN0cmluZyB9Pih7XG4gICAgcHJlc2V0TmFtZTogbnVsbCxcbiAgICBjb21wb25lbnROYW1lOiBudWxsLFxuICB9KTtcblxuICBwdWJsaWMgc2V0UHJlc2V0KHByZXNldE5hbWU6IHN0cmluZywgcHJlc2V0OiBQYXJ0aWFsPE1vcnRhclByZXNldD4pIHtcbiAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgIC4uLih0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpID8/IGRlZmF1bHRQcmVzZXQpLFxuICAgICAgLi4ucHJlc2V0LFxuICAgIH0pO1xuICAgIHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbC5zZXQoeyBwcmVzZXROYW1lLCBjb21wb25lbnROYW1lOiBudWxsIH0pO1xuICB9XG5cbiAgcHVibGljIHNldENvbXBvbmVudFByZXNldDxDIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0PihcbiAgICBwcmVzZXROYW1lOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogQyxcbiAgICBjb21wb25lbnRQcmVzZXQ6IFBhcnRpYWw8TW9ydGFyUHJlc2V0W0NdPlxuICApIHtcbiAgICBjb25zdCBzZWxlY3RlZFByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSkgPz8gZGVmYXVsdFByZXNldDtcbiAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgIC4uLnNlbGVjdGVkUHJlc2V0LFxuICAgICAgW2NvbXBvbmVudE5hbWVdOiB7XG4gICAgICAgIC4uLihzZWxlY3RlZFByZXNldFtjb21wb25lbnROYW1lXSA/PyAoe30gYXMgYW55KSksXG4gICAgICAgIC4uLmNvbXBvbmVudFByZXNldCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLnNldCh7IHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWUgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29tcG9uZW50UHJlc2V0UHJvcGVydHk8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldCwgUCBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldFtDXT4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IEMsXG4gICAgcHJvcGVydHlOYW1lOiBQLFxuICAgIHZhbHVlOiBNb3J0YXJQcmVzZXRbQ11bUF0gfCBQYXJ0aWFsPE1vcnRhclByZXNldFtDXVtQXT5cbiAgKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpID8/IGRlZmF1bHRQcmVzZXQ7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb21wb25lbnRQcmVzZXQgPSBzZWxlY3RlZFByZXNldFtjb21wb25lbnROYW1lXSBhcyBhbnk7XG5cbiAgICAvLyBJZiBzZXR0aW5nIGFuIG9iamVjdCB2YWx1ZSBiZSBzdXJlIHRvIHNwcmVhZCBvdmVyIGV4aXN0aW5nIHZhbHVlXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgICAuLi5zZWxlY3RlZFByZXNldCxcbiAgICAgICAgW2NvbXBvbmVudE5hbWVdOiB7XG4gICAgICAgICAgLi4uc2VsZWN0ZWRDb21wb25lbnRQcmVzZXQsXG4gICAgICAgICAgW3Byb3BlcnR5TmFtZV06IHtcbiAgICAgICAgICAgIC4uLnNlbGVjdGVkQ29tcG9uZW50UHJlc2V0W3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSBqdXN0IHNldCB0aGUgdmFsdWVcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgICAuLi5zZWxlY3RlZFByZXNldCxcbiAgICAgICAgW2NvbXBvbmVudE5hbWVdOiB7XG4gICAgICAgICAgLi4uc2VsZWN0ZWRDb21wb25lbnRQcmVzZXQsXG4gICAgICAgICAgW3Byb3BlcnR5TmFtZV06IHZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbC5zZXQoeyBwcmVzZXROYW1lLCBjb21wb25lbnROYW1lIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFByZXNldChwcmVzZXROYW1lOiBzdHJpbmcpOiBNb3J0YXJQcmVzZXQge1xuICAgIGNvbnN0IHByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSk7XG4gICAgaWYgKCFwcmVzZXQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE10ZVByZXNldFNlcnZpY2U6IEEgcHJlc2V0IHdpdGggdGhlIG5hbWUgXCIke3ByZXNldE5hbWV9XCIgZG9lcyBub3QgZXhpc3RgKTtcbiAgICB9XG4gICAgcmV0dXJuIHByZXNldDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb21wb25lbnRQcmVzZXQ8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldD4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IENcbiAgKTogTW9ydGFyUHJlc2V0W0NdIHtcbiAgICBjb25zdCBwcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpO1xuICAgIGNvbnN0IGNvbXBvbmVudFByZXNldCA9IHByZXNldFtjb21wb25lbnROYW1lXTtcbiAgICBpZiAoIXByZXNldCkge1xuICAgICAgY29uc29sZS5lcnJvcihgTXRlUHJlc2V0U2VydmljZTogQSBwcmVzZXQgd2l0aCB0aGUgbmFtZSBcIiR7cHJlc2V0TmFtZX1cIiBkb2VzIG5vdCBleGlzdC5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudFByZXNldDtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RQcmVzZXQocHJlc2V0TmFtZTogc3RyaW5nKTogU2lnbmFsPE1vcnRhclByZXNldD4ge1xuICAgIGxldCBmaXJzdEVtaXQgPSB0cnVlO1xuICAgIHJldHVybiBjb21wdXRlZCh0aGlzLnByZXNldENoYW5nZWRTaWduYWwsIChjaGFuZ2UsIHNldCkgPT4ge1xuICAgICAgaWYgKGZpcnN0RW1pdCkge1xuICAgICAgICBzZXQodGhpcy5nZXRQcmVzZXQocHJlc2V0TmFtZSkpO1xuICAgICAgICBmaXJzdEVtaXQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnByZXNldE5hbWUgPT09IHByZXNldE5hbWUpIHtcbiAgICAgICAgc2V0KHRoaXMuZ2V0UHJlc2V0KHByZXNldE5hbWUpKTtcbiAgICAgIH1cbiAgICB9KSBhcyBTaWduYWw8TW9ydGFyUHJlc2V0PjtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RDb21wb25lbnRQcmVzZXQ8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldD4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IENcbiAgKTogU2lnbmFsPE1vcnRhclByZXNldFtDXT4ge1xuICAgIGxldCBmaXJzdEVtaXQgPSB0cnVlO1xuICAgIHJldHVybiBjb21wdXRlZCh0aGlzLnByZXNldENoYW5nZWRTaWduYWwsIChjaGFuZ2UsIHNldCkgPT4ge1xuICAgICAgaWYgKGZpcnN0RW1pdCkge1xuICAgICAgICBzZXQodGhpcy5nZXRDb21wb25lbnRQcmVzZXQocHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSkpO1xuICAgICAgICBmaXJzdEVtaXQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIChjaGFuZ2UucHJlc2V0TmFtZSA9PT0gcHJlc2V0TmFtZSAmJiAhY2hhbmdlLmNvbXBvbmVudE5hbWUpIHx8XG4gICAgICAgIChjaGFuZ2UucHJlc2V0TmFtZSA9PT0gcHJlc2V0TmFtZSAmJiBjaGFuZ2UuY29tcG9uZW50TmFtZSA9PT0gY29tcG9uZW50TmFtZSlcbiAgICAgICkge1xuICAgICAgICBzZXQodGhpcy5nZXRDb21wb25lbnRQcmVzZXQocHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSkpO1xuICAgICAgfVxuICAgIH0pIGFzIFNpZ25hbDxNb3J0YXJQcmVzZXRbQ10+O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVQcmVzZXRTZXJ2aWNlID0gbmV3IF9NdGVQcmVzZXRTZXJ2aWNlKCk7XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlcyAqL1xuaW1wb3J0IHsgQ29udGV4dENvbnN1bWVyIH0gZnJvbSAnQGxpdC1sYWJzL2NvbnRleHQnO1xuaW1wb3J0IHsgUHJvcGVydHlEZWNsYXJhdGlvbiwgUmVhY3RpdmVFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIENvbnN0cnVjdG9yLFxuICBpc1NzcixcbiAgTXRlRWxlbWVudCxcbiAgTXRlUHJlc2V0U2VydmljZSxcbiAgcHJlc2V0Q29udGV4dCxcbiAgc2lnbmFsLFxuICBjb21wdXRlZCxcbiAgVW5zdWJzY3JpYmVyLFxufSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgTW9ydGFyUHJlc2V0IH0gZnJvbSAnLi9wcmVzZXRzJztcblxuZXhwb3J0IHR5cGUgUHJlc2V0T3B0aW9ucyA9ICdtZCcgfCAnc20nIHwgJ2xnJyB8IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJlc2V0RWxlbWVudEludGVyZmFjZTxQPiB7XG4gIC8qKiBAaWdub3JlICovXG4gIHJlYWRvbmx5IF9fY29tcG9uZW50TmFtZToga2V5b2YgTW9ydGFyUHJlc2V0O1xuXG4gIC8qKiBTZWxlY3RzIHRoZSBwcmVzZXQgZm9yIHRoaXMgY29tcG9uZW50LiBPdmVycmlkZXMgdGhlIGdsb2JhbCBwcmVzZXQgZm9yIHRoaXMgaW5zdGFuY2Ugb2YgdGhpcyBjb21wb25lbnQuICovXG4gIHByZXNldDogc3RyaW5nO1xuXG4gIC8qKiBAaWdub3JlICovXG4gIGFwcGxpZWRQcmVzZXQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmVzZXRNaXhpbkZhY3RvcnlPcHRpb25zIHtcbiAgcmVmbGVjdEFwcGxpZWRQcmVzZXQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IHtcbiAgaXMsXG4gIGRlZmluZVByb3BlcnR5LFxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIGdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZ2V0UHJvdG90eXBlT2YsXG59ID0gT2JqZWN0O1xuXG5leHBvcnQgY29uc3QgUHJlc2V0TWl4aW5GYWN0b3J5ID0gPFA+KFxuICBjb21wb25lbnROYW1lOiBrZXlvZiBNb3J0YXJQcmVzZXQsXG4gIG9wdGlvbnM6IFByZXNldE1peGluRmFjdG9yeU9wdGlvbnMgPSB7IHJlZmxlY3RBcHBsaWVkUHJlc2V0OiBmYWxzZSB9XG4pID0+IHtcbiAgcmV0dXJuIDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgICBjbGFzcyBQcmVzZXRFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICByZWFkb25seSBfX2NvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lO1xuXG4gICAgICAvKiogTWFwIHRoYXQgc3RvcmVzIHByaXZhdGUgdmFsdWVzIHRoYXQgdGFrZSBwcmVjZWRlbmNlIG92ZXIgcHJlc2V0IHZhbHVlcyAqL1xuICAgICAgcHJvdGVjdGVkIF92YWx1ZU1hcCA9IG5ldyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+KCk7XG5cbiAgICAgIC8qKiBNYXAgdGhhdCBzdG9yZXMgZmFsbGJhY2sgcHJlc2V0IHZhbHVlcyBlbWl0dGVkIGJ5IHRoZSBwcmVzZXRDb250cm9sbGVyICovXG4gICAgICBwcm90ZWN0ZWQgX3ByZXNldE1hcCA9IG5ldyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+KCk7XG5cbiAgICAgIC8qKiBTZWxlY3RzIGEgc3BlY2lmaWMgcHJlc2V0IGZvciB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZS4gT3ZlcnJpZGVzIHRoZSBjdXJyZW50IGdsb2JhbCBwcmVzZXQuICovXG4gICAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pXG4gICAgICBzZXQgcHJlc2V0KHByZXNldDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3ByZXNldCA9IHByZXNldDtcbiAgICAgICAgdGhpcy5fYWN0aXZlUHJlc2V0U2lnbmFsLnNldChwcmVzZXQpO1xuICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgIC8vIFN0b3AgU1NSIGNvbnN0cnVjdG9yIGxpc3RlbmVyIGlmIHN0aWxsIG9wZW4uXG4gICAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1Yj8uKCk7XG4gICAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1YiA9IG51bGw7XG4gICAgICAgICAgY29uc3QgcHJlc2V0ID0gTXRlUHJlc2V0U2VydmljZS5nZXRQcmVzZXQodGhpcy5wcmVzZXQgPz8gJ2dsb2JhbCcpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlU3NyUHJlc2V0Q2hhbmdlcyhwcmVzZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBnZXQgcHJlc2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJlc2V0O1xuICAgICAgfVxuICAgICAgcHJpdmF0ZSBfcHJlc2V0ID0gJ2dsb2JhbCc7XG5cbiAgICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IG9wdGlvbnM/LnJlZmxlY3RBcHBsaWVkUHJlc2V0ID8/IGZhbHNlIH0pIGFwcGxpZWRQcmVzZXQgPSAnZ2xvYmFsJztcblxuICAgICAgQHN0YXRlKCkgcHJpdmF0ZSBfYXBwbGllZFByZXNldD86IHN0cmluZztcblxuICAgICAgLyoqIEtlZXBzIGNvbnN0cnVjdG9yIHByZXNldCBzdWJzY3JpcHRpb24gb3BlbiB1bnRpbCB3aWxsVXBkYXRlICovXG4gICAgICBwcml2YXRlIHNzckNvbnN0cnVjdG9yU3ViOiBVbnN1YnNjcmliZXI7XG4gICAgICBwcml2YXRlIHByZXZpb3VzQ29tcG9uZW50VW5zdWI6IFVuc3Vic2NyaWJlcjtcblxuICAgICAgLyoqIEVtaXRzIHdoZW5ldmVyIHRoZSBsb2NhbCBwcmVzZXQgdmFsdWUgY2hhbmdlcy4gKi9cbiAgICAgIHByaXZhdGUgX2FjdGl2ZVByZXNldFNpZ25hbCA9IHNpZ25hbDxzdHJpbmc+KG51bGwpO1xuICAgICAgcHJpdmF0ZSBfcGFyZW50UHJlc2V0U2lnbmFsID0gc2lnbmFsPHN0cmluZz4obnVsbCk7XG5cbiAgICAgIHByaXZhdGUgX3ByZXNldENvbnRleHQgPSBuZXcgQ29udGV4dENvbnN1bWVyKHRoaXMsIHtcbiAgICAgICAgY29udGV4dDogcHJlc2V0Q29udGV4dCxcbiAgICAgICAgc3Vic2NyaWJlOiB0cnVlLFxuICAgICAgICBjYWxsYmFjazogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcGFyZW50UHJlc2V0U2lnbmFsLnNldCgodmFsdWUgPT09ICcnID8gbnVsbCA6IHZhbHVlKSA/PyAnZ2xvYmFsJyk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBPdmVycmlkZXMgdGhlIGRlZmF1bHQgZ2V0UHJvcGVydHlEZXNjcmlwdG9yIG1ldGhvZCB0byBjaGVjayBmb3IgdGhlIGN1c3RvbVxuICAgICAgICogYGlzUHJlc2V0YCBvcHRpb24uIERlc2NyaXB0b3JzIG9mIHByb3BlcnRpZXMgdGhhdCBhcmUgZGVjbGFyZWQgd2l0aCB0aGUgYGlzUHJlc2V0YFxuICAgICAgICogb3B0aW9uIGFyZSBkZWZpbmVkIHdpdGggc3BlY2lhbCBnZXR0ZXIvc2V0dGVyIGxvZ2ljIHRoYXQgc2V0cyB2YWx1ZSB0byB2YWx1ZU1hcFxuICAgICAgICogYW5kIGdldHMgdmFsdWVzIGZyb20gdGhlIHZhbHVlTWFwIGJ1dCB0aGVuIGFsc28gZmFsbHMgYmFjayB0byBhbnkgdmFsdWUgaW4gdGhlIHByZXNldE1hcFxuICAgICAgICpcbiAgICAgICAqIFRoZSBwcmVzZXRNYXAgaXMgcG9wdWxhdGVkIGFib3ZlIGZyb20gdmFsdWVzIGZyb20gdGhlIHByZXNldENvbnRyb2xsZXIgd2hlbmV2ZXIgdGhlXG4gICAgICAgKiBwcmVzZXQgZm9yIHRoaXMgY29tcG9uZW50IGlzIGNoYW5nZWQgZ2xvYmFsbHkuXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICAgIG5hbWU6IFByb3BlcnR5S2V5LFxuICAgICAgICBrZXk6IHN0cmluZyB8IHN5bWJvbCxcbiAgICAgICAgb3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvblxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHsgZ2V0LCBzZXQgfSA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLnByb3RvdHlwZSwgbmFtZSkgPz8ge1xuICAgICAgICAgIGdldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW2tleSBhcyBrZXlvZiB0eXBlb2YgdGhpc107XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQodGhpczogUmVhY3RpdmVFbGVtZW50LCB2OiB1bmtub3duKSB7XG4gICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcgfCBzeW1ib2wsIHVua25vd24+KVtrZXldID0gdjtcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGdldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQpOiBhbnkge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBnZXR0ZXIgbG9naWMgdGhhdCBnZXRzIGZyb20gdGhlIHZhbHVlTWFwIG9yIHByZXNldE1hcFxuICAgICAgICAgICAgaWYgKG9wdGlvbnNbJ2lzUHJlc2V0J10pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkuX3ZhbHVlTWFwIGFzIE1hcDxcbiAgICAgICAgICAgICAgICAgICAgUHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgICAgIFBba2V5b2YgUF1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICApLmdldChuYW1lKSB8fFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fcHJlc2V0TWFwIGFzIE1hcDxcbiAgICAgICAgICAgICAgICAgICAgUHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgICAgIFBba2V5b2YgUF1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICApLmdldChuYW1lKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVmYXVsdCBwcm9wZXJ0eSBnZXR0ZXIgbG9naWNcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gZ2V0Py5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCwgdmFsdWU6IHVua25vd24pIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgc2V0dGVyIGxvZ2ljIHRoYXQgc2V0cyB0byB0aGUgdmFsdWVNYXBcbiAgICAgICAgICAgIGlmIChvcHRpb25zWydpc1ByZXNldCddKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gKFxuICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fdmFsdWVNYXAgYXMgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPlxuICAgICAgICAgICAgICApLmdldChuYW1lKTtcbiAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fdmFsdWVNYXAgYXMgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPlxuICAgICAgICAgICAgICApLnNldChuYW1lLCB2YWx1ZSBhcyBhbnkpO1xuICAgICAgICAgICAgICAvLyBEdXJpbmcgU1NSIHdlIG5lZWQgdG8gdXBkYXRlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgIGlmIChpc1NzcigpKSB7XG4gICAgICAgICAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBSZWFjdGl2ZUVsZW1lbnQpLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIE9uIHRoZSBjbGllbnQgd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgY3VycmVudCB1cGRhdGUgdG8gZmluaXNoXG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlYWN0aXZlRWxlbWVudCkucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlZmF1bHQgcHJvcGVydHkgc2V0dGVyIGxvZ2ljXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBnZXQ/LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgIHNldCEuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICh0aGlzIGFzIHVua25vd24gYXMgUmVhY3RpdmVFbGVtZW50KS5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgICAgICAvLyBTdWJzY3JpYmVzIGZvciBjaGFuZ2VzIHRvIHRoaXMgY29tcG9uZW50cyBhY3RpdmUgcHJlc2V0IHRvIHVwZGF0ZSBhbGwgcmVsZXZhbnQgcHJvcHMgcHJlc2V0IHZhbHVlc1xuICAgICAgICB0aGlzLnN1YnMucHVzaChcbiAgICAgICAgICBjb21wdXRlZChcbiAgICAgICAgICAgIFt0aGlzLl9hY3RpdmVQcmVzZXRTaWduYWwsIHRoaXMuX3BhcmVudFByZXNldFNpZ25hbF0sXG4gICAgICAgICAgICAoW2FjdGl2ZVByZXNldCwgcGFyZW50UHJlc2V0XSwgc2V0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhY3RpdmVQcmVzZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZSA9XG4gICAgICAgICAgICAgICAgICBhY3RpdmVQcmVzZXQgPT09ICdnbG9iYWwnXG4gICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICA6IE10ZVByZXNldFNlcnZpY2UuZ2V0Q29tcG9uZW50UHJlc2V0KGFjdGl2ZVByZXNldCwgJ3RoZW1lJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2xvY2FsUHJlc2V0VGhlbWUgPSBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBudWxsKTtcblxuICAgICAgICAgICAgICB0aGlzLl9hcHBsaWVkUHJlc2V0ID0gYWN0aXZlUHJlc2V0ID8/IHBhcmVudFByZXNldCA/PyAnZ2xvYmFsJztcbiAgICAgICAgICAgICAgdGhpcy5hcHBsaWVkUHJlc2V0ID0gTXRlUHJlc2V0U2VydmljZS5nZXRDb21wb25lbnRQcmVzZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwbGllZFByZXNldCxcbiAgICAgICAgICAgICAgICAncHJlc2V0J1xuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIC8vIFVuc3Vic2NyaWJlIHRvIHByZXZpb3VzIGNvbXBvbmVudCBwcmVzZXQgY2hhbmdlc1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ29tcG9uZW50VW5zdWI/LigpO1xuICAgICAgICAgICAgICAvLyBVcGRhdGUgcHJvcHMgaWYgbmV3IGNvbXBvbmVudCBwcmVzZXQgZW1pdHNcbiAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0NvbXBvbmVudFVuc3ViID0gTXRlUHJlc2V0U2VydmljZS5zZWxlY3RDb21wb25lbnRQcmVzZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwbGllZFByZXNldCxcbiAgICAgICAgICAgICAgICB0aGlzLl9fY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgICApLnN1YnNjcmliZSgobmV3UHJlc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ByZXNldCkge1xuICAgICAgICAgICAgICAgICAgc2V0KG5ld1ByZXNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApLnN1YnNjcmliZSgobmV3UHJlc2V0cykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWVzTWFwID0gbmV3IE1hcCh0aGlzLl9wcmVzZXRNYXApO1xuICAgICAgICAgICAgY29uc3Qgb2xkUHJvcHMgPSBBcnJheS5mcm9tKHRoaXMuX3ByZXNldE1hcC5rZXlzKCkpO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSBPYmplY3Qua2V5cyhuZXdQcmVzZXRzID8/IHt9KTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGtleXMgaW4gdGhlIG5ldyBwcmVzZXRzIGNsZWFyIGFsbCBwcmVzZXQgdmFsdWVzXG4gICAgICAgICAgICBpZiAobmV3UHJvcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG9sZCBzZXQgcHJvcHMgYW5kIG5ldyBvbmVzXG4gICAgICAgICAgICAvLyBSZW1vdmUgb2xkIG9uZXMgJiBzZXQgbmV3IG9uZXNcbiAgICAgICAgICAgIC8vIEZpbmFsbHkgZm9yY2UgYW4gdXBkYXRlIGZvciBlYWNoIHByb3BcbiAgICAgICAgICAgIFsuLi5vbGRQcm9wcywgLi4ubmV3UHJvcHNdLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAobmV3UHJlc2V0c1trZXldKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLnNldChrZXksIG5ld1ByZXNldHNba2V5XSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShrZXksIG9sZFZhbHVlc01hcC5nZXQoa2V5KSA/PyBudWxsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgICAgIHRoaXMucHJldmlvdXNDb21wb25lbnRVbnN1Yj8uKCk7XG4gICAgICAgIHRoaXMuc3NyQ29uc3RydWN0b3JTdWI/LigpO1xuICAgICAgfVxuXG4gICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBzdXBlcihhcmdzKTtcblxuICAgICAgICAvLyBUT0RPKHJlZWNlKTogRW5zdXJlIHdlIHVwZGF0ZSB0aGlzIHRvIHN1cHBvcnQgY29udGV4dCB3aGVuIHRoYXQgaXMgU1NSIEZyaWVuZGx5OiBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9pc3N1ZXMvMzM2NVxuICAgICAgICAvLyBIYW5kbGUgc2V0dGluZyBwcmVzZXQgZGVmYXVsdHMgaW4gU1NSXG4gICAgICAgIGlmIChpc1NzcigpKSB7XG4gICAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1YiA9IE10ZVByZXNldFNlcnZpY2Uuc2VsZWN0UHJlc2V0KHRoaXMucHJlc2V0ID8/ICdnbG9iYWwnKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocHJlc2V0KSA9PiB0aGlzLmhhbmRsZVNzclByZXNldENoYW5nZXMocHJlc2V0KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBoYW5kbGVTc3JQcmVzZXRDaGFuZ2VzKHByZXNldDogTW9ydGFyUHJlc2V0KSB7XG4gICAgICAgIGlmIChwcmVzZXQpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRQcmVzZXRzID0gcHJlc2V0W3RoaXMuX19jb21wb25lbnROYW1lXTtcbiAgICAgICAgICBjb25zdCBvbGRQcm9wcyA9IEFycmF5LmZyb20odGhpcy5fcHJlc2V0TWFwLmtleXMoKSk7XG4gICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRQcmVzZXRzID8/IHt9KTtcblxuICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBrZXlzIGluIHRoZSBuZXcgcHJlc2V0cyBjbGVhciBhbGwgcHJlc2V0IHZhbHVlc1xuICAgICAgICAgIGlmIChuZXdQcm9wcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5jbGVhcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBMb29wIHRocm91Z2ggb2xkIHNldCBwcm9wcyBhbmQgbmV3IG9uZXNcbiAgICAgICAgICAvLyBSZW1vdmUgb2xkIG9uZXMgJiBzZXQgbmV3IG9uZXNcbiAgICAgICAgICAvLyBGaW5hbGx5IGZvcmNlIGFuIHVwZGF0ZSBmb3IgZWFjaCBwcm9wXG4gICAgICAgICAgWy4uLm9sZFByb3BzLCAuLi5uZXdQcm9wc10uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50UHJlc2V0c1trZXldKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5zZXQoa2V5LCBjb21wb25lbnRQcmVzZXRzW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKGtleSwgbnVsbCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5hcHBsaWVkUHJlc2V0ID0gcHJlc2V0WydwcmVzZXQnXTtcbiAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ2FwcGxpZWRQcmVzZXQnLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUHJlc2V0RWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxQcmVzZXRFbGVtZW50SW50ZXJmYWNlPFA+PiAmIFQ7XG4gIH07XG59O1xuIiwgImltcG9ydCB7IFByb3BlcnR5RGVjbGFyYXRpb24gfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVzZXRQcm9wZXJ0eTxUPihvcHRpb25zPzogUHJvcGVydHlEZWNsYXJhdGlvbikge1xuICByZXR1cm4gcHJvcGVydHkoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgaXNQcmVzZXQ6IHRydWUsXG4gIH0gYXMgYW55KTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAnQGxpdC1sYWJzL2NvbnRleHQnO1xuXG5leHBvcnQgY29uc3QgcHJlc2V0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8c3RyaW5nPignTVRFX1BSRVNFVCcpO1xuIiwgImltcG9ydCB7IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgTXRlUHJlc2V0U2VydmljZSB9IGZyb20gJy4uL3ByZXNldHMnO1xuaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgTXRlRWxlbWVudCB9IGZyb20gJy4uL2Jhc2UtY2xhc3Nlcyc7XG5cbmNvbnN0IGdsb2JhbFByZXNldCQgPSBNdGVQcmVzZXRTZXJ2aWNlLnNlbGVjdFByZXNldCgnZ2xvYmFsJyk7XG5jb25zdCBnbG9iYWxQcmVzZXROYW1lJCA9IGNvbXB1dGVkKGdsb2JhbFByZXNldCQsIChwcmVzZXQpID0+IHByZXNldC5wcmVzZXQpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpZWRQcmVzZXRDb250ZXh0IHtcbiAgcHJlc2V0TmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFByZXNldCBpcyBkZXRlcm1pbmVkIGZyb20gZWl0aGVyIHRoZSBwYXJlbnQgcHJlc2V0IGNvbnRleHQgb3IgYSBsb2NhbCBwcmVzZXQgcHJvcGVydHkuXG4gKiBUaGlzIGNvbnRyb2xsZXIga2VlcHMgdHJhY2sgb2YgdGhlIGFjdHVhbCBhY3RpdmUgcHJlc2V0IGFwcGxpZWQgdG8gdGhlIGN1cnJlbnQgY29tcG9uZW50LlxuICogSWYgYSBjYWxsYmFjayBpcyBnaXZlbiBpdCB3aWxsIGJlIGNhbGxlZCBhbnkgdGltZSB0aGF0IGNvbnRleHQgY2hhbmdlcy4gT3RoZXJ3aXNlIGNvbnRyb2xsZXJcbiAqIG1ldGhvZHMgY2FuIGJlIGNhbGxlZCB3aGVuIG5lZWRlZC5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIGV2ZW4gd2l0aGluIGVsZW1lbnRzIHRoYXQgZG8gbm90IGhhdmUgdGhlaXIgb3duIHByZXNldFxuICogb3B0aW9ucyAoYWthIGV4dGVuZCB0aGUgcHJlc2V0TWl4aW4pLlxuICovXG5leHBvcnQgY2xhc3MgQXBwbGllZFByZXNldENvbnRleHRDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBhcHBsaWVkUHJlc2V0TmFtZSA9ICdnbG9iYWwnO1xuICBwcml2YXRlIGFjdGl2ZUdsb2JhbFByZXNldE5hbWUgPSAnZGVmYXVsdCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBob3N0OiBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0ICYgTXRlRWxlbWVudCxcbiAgICBwcml2YXRlIGNhbGxiYWNrPzogKGNvbnRleHQ6IEFwcGxpZWRQcmVzZXRDb250ZXh0KSA9PiB2b2lkXG4gICkge1xuICAgIHRoaXMuaG9zdC5hZGRDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgfVxuXG4gIGhvc3RDb25uZWN0ZWQoKSB7XG4gICAgdGhpcy5ob3N0LnN1YnMucHVzaChcbiAgICAgIGdsb2JhbFByZXNldE5hbWUkLnN1YnNjcmliZSgoZ2xvYmFsUHJlc2V0TmFtZSkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZUdsb2JhbFByZXNldE5hbWUgPSBnbG9iYWxQcmVzZXROYW1lO1xuICAgICAgICB0aGlzLnVwZGF0ZUFwcGxpZWRQcmVzZXRDb250ZXh0KCk7XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5leGVjQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGhvc3RVcGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVBcHBsaWVkUHJlc2V0Q29udGV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBleGVjQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5jYWxsYmFjaz8uKHtcbiAgICAgIHByZXNldE5hbWU6IHRoaXMuYXBwbGllZFByZXNldE5hbWUsXG4gICAgfSBhcyBBcHBsaWVkUHJlc2V0Q29udGV4dCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUFwcGxpZWRQcmVzZXRDb250ZXh0KCkge1xuICAgIGxldCB1cGRhdGVkID0gZmFsc2U7XG4gICAgY29uc3QgbmV3UHJlc2V0TmFtZSA9ICh0aGlzLmhvc3QgYXMgYW55KS5hcHBsaWVkUHJlc2V0ID8/IHRoaXMuYWN0aXZlR2xvYmFsUHJlc2V0TmFtZTtcbiAgICBpZiAobmV3UHJlc2V0TmFtZSAhPT0gdGhpcy5hcHBsaWVkUHJlc2V0TmFtZSkge1xuICAgICAgdGhpcy5hcHBsaWVkUHJlc2V0TmFtZSA9IG5ld1ByZXNldE5hbWU7XG4gICAgICB1cGRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgIHRoaXMuZXhlY0NhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVByZXNldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGllZFByZXNldE5hbWU7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IExpdEVsZW1lbnQsIFByb3BlcnR5VmFsdWVNYXAsIFJlYWN0aXZlRWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBpc1NzciB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbnR5cGUgVXBkYXRlSGFuZGxlciA9IChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVNYXA8YW55PikgPT4gdm9pZDtcblxuaW50ZXJmYWNlIE9uVXBkYXRlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBJZiB0cnVlLCB3aWxsIG9ubHkgc3RhcnQgd2F0Y2hpbmcgYWZ0ZXIgdGhlIGluaXRpYWwgdXBkYXRlL3JlbmRlclxuICAgKi9cbiAgd2FpdFVudGlsRmlyc3RVcGRhdGU/OiBib29sZWFuO1xuXG4gIC8qKiBEZXRlcm1pbmVzIHdoZXJlIHRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkLiBEZWZhdWx0cyB0byBgY2xpZW50YC4gKi9cbiAgb24/OiAnY2xpZW50JyB8ICdzc3InIHwgJ2JvdGgnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25VcGRhdGUocHJvcE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgb3B0aW9ucz86IE9uVXBkYXRlT3B0aW9ucykge1xuICBjb25zdCByZXNvbHZlZE9wdGlvbnM6IFJlcXVpcmVkPE9uVXBkYXRlT3B0aW9ucz4gPSB7XG4gICAgd2FpdFVudGlsRmlyc3RVcGRhdGU6IGZhbHNlLFxuICAgIG9uOiAnY2xpZW50JyxcbiAgICAuLi5vcHRpb25zLFxuICB9O1xuICByZXR1cm4gPEVsZW1DbGFzcyBleHRlbmRzIExpdEVsZW1lbnQ+KHByb3RvOiBFbGVtQ2xhc3MsIGRlY29yYXRlZEZuTmFtZTogUHJvcGVydHlLZXkpID0+IHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0tIHVwZGF0ZSBpcyBhIHByb3RlY3RlZCBwcm9wZXJ0eVxuICAgIGNvbnN0IHsgd2lsbFVwZGF0ZSB9ID0gcHJvdG87XG4gICAgY29uc3QgX3Byb3BOYW1lcyA9IEFycmF5LmlzQXJyYXkocHJvcE5hbWVzKSA/IHByb3BOYW1lcyA6IFtwcm9wTmFtZXNdO1xuICAgIGNvbnN0IHByb3BOYW1lS2V5cyA9IF9wcm9wTmFtZXMgYXMgKGtleW9mIEVsZW1DbGFzcylbXTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0tIHVwZGF0ZSBpcyBhIHByb3RlY3RlZCBwcm9wZXJ0eVxuICAgIHByb3RvLndpbGxVcGRhdGUgPSBmdW5jdGlvbiAodGhpczogRWxlbUNsYXNzLCBjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVNYXA8YW55Pikge1xuICAgICAgaWYgKHByb3BOYW1lS2V5cy5zb21lKChrZXkpID0+IGNoYW5nZWRQcm9wcy5oYXMoa2V5KSkpIHtcbiAgICAgICAgaWYgKCFyZXNvbHZlZE9wdGlvbnMud2FpdFVudGlsRmlyc3RVcGRhdGUgfHwgKHRoaXMgYXMgdW5rbm93biBhcyBMaXRFbGVtZW50KS5oYXNVcGRhdGVkKSB7XG4gICAgICAgICAgY29uc3Qgc3NyID0gaXNTc3IoKTtcbiAgICAgICAgICBpZiAocmVzb2x2ZWRPcHRpb25zLm9uID09PSAnY2xpZW50JyAmJiAhc3NyKSB7XG4gICAgICAgICAgICAodGhpc1tkZWNvcmF0ZWRGbk5hbWVdIGFzIHVua25vd24gYXMgVXBkYXRlSGFuZGxlcikoY2hhbmdlZFByb3BzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc29sdmVkT3B0aW9ucy5vbiA9PT0gJ3NzcicgJiYgc3NyKSB7XG4gICAgICAgICAgICAodGhpc1tkZWNvcmF0ZWRGbk5hbWVdIGFzIHVua25vd24gYXMgVXBkYXRlSGFuZGxlcikoY2hhbmdlZFByb3BzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc29sdmVkT3B0aW9ucy5vbiA9PT0gJ2JvdGgnKSB7XG4gICAgICAgICAgICAodGhpc1tkZWNvcmF0ZWRGbk5hbWVdIGFzIHVua25vd24gYXMgVXBkYXRlSGFuZGxlcikoY2hhbmdlZFByb3BzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHdpbGxVcGRhdGUuY2FsbCh0aGlzLCBjaGFuZ2VkUHJvcHMpO1xuICAgIH07XG4gIH07XG59XG4iLCAiaW1wb3J0IHsgaXNTc3IgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50T3B0aW9ucyB7XG4gIC8qKiBpbmRpY2F0ZSBpZiBldmVudCBidWJibGVzIHVwIHRocm91Z2ggdGhlIERPTSBvciBub3QgKi9cbiAgYnViYmxlcz86IGJvb2xlYW47XG4gIC8qKiBpbmRpY2F0ZSBpZiBldmVudCBpcyBjYW5jZWxhYmxlICovXG4gIGNhbmNlbGFibGU/OiBib29sZWFuO1xuICAvKiogaW5kaWNhdGUgaWYgZXZlbnQgY2FuIGJ1YmJsZSBhY3Jvc3MgdGhlIGJvdW5kYXJ5IGJldHdlZW4gdGhlIHNoYWRvdyBET00gYW5kIHRoZSBsaWdodCBET00gKi9cbiAgY29tcG9zZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgRXZlbnRFbWl0dGVyPFQ+IHtcbiAgcHJpdmF0ZSBldmVudE5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhcmdldDogSFRNTEVsZW1lbnQsIGV2ZW50TmFtZTogc3RyaW5nKSB7XG4gICAgLy8gU2FuaXR5IGNoZWNrIHRvIGNhbGwgb3V0IGltcHJvcGVybHkgcHJlZml4ZWQgZXZlbnQgZW1pdHRlcnNcbiAgICB0cnkge1xuICAgICAgaWYgKGV2ZW50TmFtZT8uWzBdICE9PSAnXycpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgJHt0YXJnZXQudGFnTmFtZX06IEV2ZW50RW1pdHRlciBwcm9wZXJ0eSBmb3IgXCIke2V2ZW50TmFtZX1cIiBtdXN0IGJlIHByZWZpeGVkIHdpdGggXCJfXCJgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfVxuICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lLnJlcGxhY2UoL15fLywgJycpO1xuICB9XG5cbiAgLyoqIERpc3BhdGNoZXMgdGhlIGN1c3RvbSBldmVudC4gSWYgdGhlIGV2ZW50IGlzIGBjYW5jZWxhYmxlYCBhbmQgaXMgcHJldmVudGVkIHRoaXMgd2lsbCByZXR1cm4gZmFsc2UuICovXG4gIGVtaXQodmFsdWU6IFQsIG9wdGlvbnM/OiBFdmVudE9wdGlvbnMpOiBib29sZWFuIHtcbiAgICAvLyBUT0RPKHJlZWNlKTogcmVtb3ZlIHdoZW4gZXZlbnRzIGFyZSBzdXBwb3J0ZWQgZHVyaW5nIFNTUlxuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudDxUPih0aGlzLmV2ZW50TmFtZSwge1xuICAgICAgICAgIGRldGFpbDogdmFsdWUsXG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgICAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbi8vIExlZ2FjeSBUUyBEZWNvcmF0b3JcbmZ1bmN0aW9uIGxlZ2FjeUV2ZW50KFxuICBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHByb3RvT3JEZXNjcmlwdG9yOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgbmFtZTogUHJvcGVydHlLZXlcbikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG9PckRlc2NyaXB0b3IsIG5hbWUsIGRlc2NyaXB0b3IpO1xufVxuXG4vLyBUQzM5IERlY29yYXRvcnMgcHJvcG9zYWxcbmZ1bmN0aW9uIHN0YW5kYXJkRXZlbnQoZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLCBlbGVtZW50OiB7IGtleTogc3RyaW5nIH0pIHtcbiAgcmV0dXJuIHtcbiAgICBraW5kOiAnbWV0aG9kJyxcbiAgICBwbGFjZW1lbnQ6ICdwcm90b3R5cGUnLFxuICAgIGtleTogZWxlbWVudC5rZXksXG4gICAgZGVzY3JpcHRvcixcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50RW1pdHRlcigpIHtcbiAgcmV0dXJuIChwcm90b09yRGVzY3JpcHRvcjogYW55LCBuYW1lOiBzdHJpbmcpOiBhbnkgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB7XG4gICAgICBnZXQodGhpczogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEVtaXR0ZXIodGhpcywgbmFtZSAhPT0gdW5kZWZpbmVkID8gbmFtZSA6IHByb3RvT3JEZXNjcmlwdG9yLmtleSk7XG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5hbWUgIT09IHVuZGVmaW5lZFxuICAgICAgPyBsZWdhY3lFdmVudChkZXNjcmlwdG9yLCBwcm90b09yRGVzY3JpcHRvciwgbmFtZSlcbiAgICAgIDogc3RhbmRhcmRFdmVudChkZXNjcmlwdG9yLCBwcm90b09yRGVzY3JpcHRvcik7XG4gIH07XG59XG4iLCAiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9iYXNlLmpzJztcbi8qKlxuICogSXRlbXMgaW4gdGhpcyBmaWxlIGFyZSBtb2RpZmljYXRpb25zIG9mIG9mIHRoZSBkZWNvcmF0b3JzIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9ibG9iL21haW4vcGFja2FnZXMvcmVhY3RpdmUtZWxlbWVudC9zcmMvZGVjb3JhdG9ycy9jdXN0b20tZWxlbWVudC50c1xuICpcbiAqIFdlJ3ZlIGFkZGVkIGNoZWNrcyB0byBwcmV2ZW50IHJlLXJlZ2lzdHJhdGlvbnMgZnJvbSB0aHJvd2luZyBoYXJkIGVycm9ycy5cbiAqL1xuXG4vKipcbiAqIEFsbG93IGZvciBjdXN0b20gZWxlbWVudCBjbGFzc2VzIHdpdGggcHJpdmF0ZSBjb25zdHJ1Y3RvcnNcbiAqL1xudHlwZSBDdXN0b21FbGVtZW50Q2xhc3MgPSBPbWl0PHR5cGVvZiBIVE1MRWxlbWVudCwgJ25ldyc+O1xuXG5leHBvcnQgdHlwZSBDdXN0b21FbGVtZW50RGVjb3JhdG9yID0ge1xuICAvLyBsZWdhY3lcbiAgKGNsczogQ3VzdG9tRWxlbWVudENsYXNzKTogdm9pZDtcblxuICAvLyBzdGFuZGFyZFxuICAodGFyZ2V0OiBDdXN0b21FbGVtZW50Q2xhc3MsIGNvbnRleHQ6IENsYXNzRGVjb3JhdG9yQ29udGV4dDxDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD4+KTogdm9pZDtcbn07XG5cbi8qKlxuICogQ2xhc3MgZGVjb3JhdG9yIGZhY3RvcnkgdGhhdCBkZWZpbmVzIHRoZSBkZWNvcmF0ZWQgY2xhc3MgYXMgYSBjdXN0b20gZWxlbWVudC5cbiAqXG4gKiBgYGBqc1xuICogQGN1c3RvbUVsZW1lbnQoJ215LWVsZW1lbnQnKVxuICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBgO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqIEBwYXJhbSB0YWdOYW1lIFRoZSB0YWcgbmFtZSBvZiB0aGUgY3VzdG9tIGVsZW1lbnQgdG8gZGVmaW5lLlxuICovXG5leHBvcnQgY29uc3QgZGVmaW5lRWxlbWVudCA9XG4gICh0YWdOYW1lOiBzdHJpbmcpOiBDdXN0b21FbGVtZW50RGVjb3JhdG9yID0+XG4gIChcbiAgICBjbGFzc09yVGFyZ2V0OiBDdXN0b21FbGVtZW50Q2xhc3MgfCBDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD4sXG4gICAgY29udGV4dD86IENsYXNzRGVjb3JhdG9yQ29udGV4dDxDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD4+XG4gICkgPT4ge1xuICAgIGlmIChjb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIoKCkgPT4ge1xuICAgICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldD8uKHRhZ05hbWUpKSB7XG4gICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXNzT3JUYXJnZXQgYXMgQ3VzdG9tRWxlbWVudENvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0Py4odGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXNzT3JUYXJnZXQgYXMgQ3VzdG9tRWxlbWVudENvbnN0cnVjdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0KFtkZW5zaXR5PWNvbXBhY3RdKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHhzKTstLW10ZS1zcGFjZS14czp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14cyk7LS1tdGUtc3BhY2Utc206dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3Qtc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LW1kKTstLW10ZS1zcGFjZS1sZzp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1sZyk7LS1tdGUtc3BhY2UteGw6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eGwpOy0tbXRlLXNwYWNlLXh4eGw6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHh4bCl9Omhvc3QoW2RlbnNpdHk9Y29tZnldKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2UtY29tZnktc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1jb21meS1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1jb21meS14eHhsKX06aG9zdChbZGVuc2l0eT1yb29teV0pey0tbXRlLXNwYWNlLXh4czp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHhzKTstLW10ZS1zcGFjZS14czp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHMpOy0tbXRlLXNwYWNlLXNtOnZhcigtLW10ZS1zcGFjZS1yb29teS1zbSk7LS1tdGUtc3BhY2UtbWQ6dmFyKC0tbXRlLXNwYWNlLXJvb215LW1kKTstLW10ZS1zcGFjZS1sZzp2YXIoLS1tdGUtc3BhY2Utcm9vbXktbGcpOy0tbXRlLXNwYWNlLXhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14bCk7LS1tdGUtc3BhY2UteHhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14eGwpOy0tbXRlLXNwYWNlLXh4eGw6dmFyKC0tbXRlLXNwYWNlLXJvb215LXh4eGwpfWA7IiwgImltcG9ydCB7IExpdEVsZW1lbnQsIFByb3BlcnR5VmFsdWVzIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi8nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEaXNhYmxlZEludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGlzIGNvbXBvbmVudFxuICAgKiBAYXR0ciBkaXNhYmxlZFxuICAgKi9cbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBEaXNhYmxlZE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBEaXNhYmxlZEVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBhdHRyIGRpc2FibGVkXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLy8gQmVjYXVzZSBgYXJpYURpc2FibGVkYCBleGlzdHMgYXMgYSBzdHJpbmcgb24gTGl0RWxlbWVudCB3ZSBjYW5ub3QgZGVjbGFyZSB0aGlzIGEgcHJvcGVydHkgaGVyZVxuICAgIHByb3RlY3RlZCB3aWxsVXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXM8YW55Pik6IHZvaWQge1xuICAgICAgc3VwZXIud2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAoX2NoYW5nZWRQcm9wZXJ0aWVzLmhhcygnZGlzYWJsZWQnKSkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgYCR7dGhpcy5kaXNhYmxlZH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBEaXNhYmxlZEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8RGlzYWJsZWRJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IHByZXNldFByb3BlcnR5IH0gZnJvbSAnLi4vcHJlc2V0cy9wcmVzZXQuZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW52ZXJzZUludGVyZmFjZSB7XG4gIC8qKiBSZW5kZXJzIHRoaXMgY29tcG9uZW50IHdpdGggaW52ZXJzZSB0aGVtaW5nICovXG4gIGludmVyc2U6IGJvb2xlYW47XG5cbiAgLyoqIFNwZWNpYWwgb3B0aW9uIHRvIG92ZXJyaWRlIGludmVyc2Ugd2hlbiBpdCBpcyBzZXQgYnkgYSBwcmVzZXQgKi9cbiAgd2l0aG91dEludmVyc2U6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBJbnZlcnNlTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPExpdEVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIEludmVyc2VFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqIFJlbmRlcnMgdGhpcyBjb21wb25lbnQgd2l0aCBpbnZlcnNlIHRoZW1pbmcgKi9cbiAgICBAcHJlc2V0UHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGludmVyc2UgPSBmYWxzZTtcblxuICAgIC8qKiBTcGVjaWFsIG9wdGlvbiB0byBvdmVycmlkZSBpbnZlcnNlIHdoZW4gaXQgaXMgc2V0IGJ5IGEgcHJlc2V0ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRob3V0SW52ZXJzZSA9IGZhbHNlO1xuICB9XG4gIHJldHVybiBJbnZlcnNlRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxJbnZlcnNlSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdChbaW52ZXJzZV06bm90KFt3aXRob3V0SW52ZXJzZV0pKXstLW10ZS1zdXJmYWNlLTE6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS0xLXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtc3VyZmFjZS0yOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tbXRlLXN1cmZhY2UtMi1yZ2I6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpOy0tbXRlLXN1cmZhY2UtMzp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlKTstLW10ZS1zdXJmYWNlLTMtcmdiOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UtcmdiKTstLW10ZS1zdXJmYWNlLTQ6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS00LXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtaW5rLTE6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMS1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTI6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMi1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTM6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMy1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTQ6dmFyKC0tbXRlLWJsYWNrKTstLW10ZS1pbmstNC1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1tdGUtaW5rLTU6dmFyKC0tbXRlLWJsYWNrKTstLW10ZS1pbmstNS1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1tdGUtYm9yZGVyLTE6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMS1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtYm9yZGVyLTI6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMi1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtYm9yZGVyLTM6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMy1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtZGlzYWJsZWQtMTp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0xKTstLW10ZS1kaXNhYmxlZC0xLXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0xLXJnYik7LS1tdGUtZGlzYWJsZWQtMjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0yKTstLW10ZS1kaXNhYmxlZC0yLXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0yKTstLW10ZS1kaXNhYmxlZC0zOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMpOy0tbXRlLWRpc2FibGVkLTMtcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMtcmdiKTstLW10ZS1kaXNhYmxlZC00OnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMpOy0tbXRlLWRpc2FibGVkLTQtcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTEtZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMS1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0yLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1pdC1zdXJmYWNlLTMtZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0zLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTMtYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMy1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1saWdodDp2YXIoLS1tdGUtd2hpdGUpOy0tbXRlLWxpZ2h0LXJnYjp2YXIoLS1tdGUtd2hpdGUtcmdiKTstLW10ZS1kYXJrOnZhcigtLW10ZS1ibGFjayk7LS1tdGUtZGFyay1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1idXR0b24tZmlsbGVkLWJnOnZhcigtLW10ZS13aGl0ZSk7LS1idXR0b24tZmlsbGVkLWluazp2YXIoLS1tdGUtYmxhY2spOy0tYnV0dG9uLWZpbGxlZC1hY3RpdmUtYmc6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWluazp2YXIoLS1tdGUtd2hpdGUpfWA7IiwgImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBvblVwZGF0ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRGlzYWJsZWRJbnRlcmZhY2UgfSBmcm9tICcuL2Rpc2FibGVkLm1peGluJztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgaXNTc3IgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUYWJJbmRleEludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgdGFiaW5kZXggYXR0cmlidXRlIHZhbHVlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnRcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZ2V0VGFiSW5kZXhBZGFwdGVyKCk6IHN0cmluZztcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHNldCB0aGUgdGFiaW5kZXggYXR0cmlidXRlIG9uIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHNldFRhYkluZGV4QWRhcHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJlbW92ZSB0aGUgdGFiaW5kZXggYXR0cmlidXRlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnRcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCk6IHZvaWQ7XG59XG5cbi8qKlxuICogTWl4aW4gdG8gcHJvcGVybHkgbWFuYWdlIHRoZSB0YWJpbmRleCBpbiBhIG5vbi1pbnRydXNpdmUgd2F5LiBXaGVuIGRpc2FibGVkIGlzIHRydWUsXG4gKiB0aGUgdGFiaW5kZXggd2lsbCBBTFdBWVMgYmUgYC0xYC4gSG93ZXZlciwgYW55IGNoYW5nZXMgdG8gdGFiaW5kZXggd2lsbCBiZSBpbnRlcmNlcHRlZFxuICogYW5kIGNhY2hlZCBpbnRlcm5hbGx5IHVudGlsIGRpc2FibGVkIGlzIGZhbHNlLCB0aGVuIHRhYmluZGV4IHdpbGwgYmUgcmVzdG9yZWQgdG8gdGhlXG4gKiBjYWNoZWQgdmFsdWUsIG9yIHJlbW92ZWQgaWYgdGhhdCBpcyB1bmRlZmluZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBUYWJJbmRleE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50ICYgRGlzYWJsZWRJbnRlcmZhY2U+PihcbiAgc3VwZXJDbGFzczogVCxcbiAgb3B0aW9uczogeyBpbml0aWFsVGFiSW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCB9ID0geyBpbml0aWFsVGFiSW5kZXg6IHVuZGVmaW5lZCB9XG4pID0+IHtcbiAgY2xhc3MgVGFiSW5kZXhFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiAndGFiaW5kZXgnLCB0eXBlOiBOdW1iZXIsIG5vQWNjZXNzb3I6IHRydWUgfSlcbiAgICBwdWJsaWMgb3ZlcnJpZGUgc2V0IHRhYkluZGV4KHRhYkluZGV4OiBudW1iZXIpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIC8vIFdoZW4gc2V0dGluZyB0aGUgdGFiSW5kZXggb24gdGhlIGN1cnJlbnQgZWxlbWVudCB0byBgLTFgIGRpc2FibGVkLCB3ZSB3YW50IHRvIGtlZXAgdHJhY2sgb2Ygd2hhdCB0aGUgdGFiSW5kZXggdmFsdWUgYmVmb3JlIHRoYXQgd2FzXG4gICAgICAgIC8vIGFzIHRoZSBjYWNoZWRUYWJJbmRleC4gVG8gZG8gdGhpcyB3ZSBtdXN0IGlnbm9yZSB0aGUgaW5pdGlhbCBjaGFuZ2UgdG8gYC0xYCBhbmQgdGhlbiBjYWNoZSBhbnkgZnV0dXJlIHZhbHVlcyBiZWZvcmUga2VlcGluZyB0aGVcbiAgICAgICAgLy8gdGFiSW5kZXggYXMgYC0xYCB1bnRpbCBubyBsb25nZXIgZGlzYWJsZWQuIFRoZW4gd2UgY2FuIHJldHVybiB0aGUgdGFiSW5kZXggdG8gd2hhdGV2ZXIgdGhlIGxhc3Qgc2V0IHZhbHVlIHdhcyBmcm9tIHRoZSBjYWNoZWQgaW5kZXguXG4gICAgICAgIGlmICghdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKCctMScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90YWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl90YWJJbmRleH1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIG92ZXJyaWRlIGdldCB0YWJJbmRleCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90YWJJbmRleDtcbiAgICB9XG4gICAgcHJpdmF0ZSBfdGFiSW5kZXggPSBvcHRpb25zPy5pbml0aWFsVGFiSW5kZXg7XG4gICAgcHJpdmF0ZSBfY2FjaGVkVGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gZmFsc2U7XG5cbiAgICBAb25VcGRhdGUoWydkaXNhYmxlZCddLCB7IG9uOiAnYm90aCcgfSlcbiAgICBwcml2YXRlIGhhbmRsZVRhYmluZGV4Q2hhbmdlKGNoYW5nZWRQcm9wcykge1xuICAgICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgaWYgKGNoYW5nZWRQcm9wcy5nZXQoJ2Rpc2FibGVkJykgPT09IGZhbHNlICYmIHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jYWNoZWRUYWJJbmRleCA9IE51bWJlcih0aGlzLmdldFRhYkluZGV4QWRhcHRlcigpKTtcbiAgICAgICAgICB0aGlzLl90YWJJbmRleCA9IC0xO1xuICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKCctMScsIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYW5nZWRQcm9wcy5nZXQoJ2Rpc2FibGVkJykgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5fY2FjaGVkVGFiSW5kZXggIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9jYWNoZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fdGFiSW5kZXggPSB0aGlzLl9jYWNoZWRUYWJJbmRleDtcbiAgICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKGAke3RoaXMuX2NhY2hlZFRhYkluZGV4fWApO1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVUYWJJbmRleEFkYXB0ZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHRhYmluZGV4IGF0dHJpYnV0ZSB2YWx1ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50ICovXG4gICAgZ2V0VGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIH1cblxuICAgIC8qKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gc2V0IHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgb24gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgKi9cbiAgICBzZXRUYWJJbmRleEFkYXB0ZXIodmFsdWU6IHN0cmluZywgc2hvdWxkUHJldmVudFRhYkluZGV4Q2hhbmdlT25TZWxmID0gZmFsc2UpIHtcbiAgICAgIGlmIChzaG91bGRQcmV2ZW50VGFiSW5kZXhDaGFuZ2VPblNlbGYpIHtcbiAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJlbW92ZSB0aGUgdGFiaW5kZXggYXR0cmlidXRlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgKi9cbiAgICByZW1vdmVUYWJJbmRleEFkYXB0ZXIoKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICB3aWxsVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICBzdXBlci53aWxsVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKGlzU3NyKCkgJiYgdGhpcy5fdGFiSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl90YWJJbmRleH1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICAgIGlmICh0aGlzLl90YWJJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKGAke3RoaXMuX3RhYkluZGV4fWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gVGFiSW5kZXhFbGVtZW50IGFzIENvbnN0cnVjdG9yPFRhYkluZGV4SW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQsIFN0eWxlTWFwIH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgc2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE10ZUVsZW1lbnRQYXJ0cyB7XG4gIC8qKiBUaGUgaG9zdCBlbGVtZW50IFwicGFydFwiLiBPdmVycmlkZXMgdGhlIGBzZWAgcHJvcGVydHkgb2YgdGhpcyBlbGVtZW50ICovXG4gIGhvc3Q/OiBTdHlsZU1hcDtcbn1cblxuZXhwb3J0IHR5cGUgU3R5bGVQYXJ0c01hcDxUID0gc3RyaW5nIHwgbnVtYmVyPiA9IHtcbiAgW25hbWU6IHN0cmluZ106IFN0eWxlTWFwPFQ+O1xufTtcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3R5bGVQYXJ0c0ludGVyZmFjZTxTdHlsZVBhcnRzPiB7XG4gIC8qKlxuICAgKiBTdHlsZSBtYXBwaW5ncyB0aGF0IGFyZSBhcHBsaWVkIHRvIGVhY2ggY3NzIHBhcnQgYnkgbmFtZS4gU2V0IHRoZVxuICAgKiBwcm9wZXJ0eSBgaG9zdGAgdG8gYXBwbHkgYSBgU3R5bGVJbmZvYCBvYmplY3QgdG8gdGhlIGVsZW1lbnQgaG9zdCBpdHNlbGYuXG4gICAqL1xuICBzcD86IFN0eWxlUGFydHM7XG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZVBhcnRzTWl4aW4gPSA8U3R5bGVQYXJ0cywgVCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIFN0eWxlUGFydHNFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogU3R5bGUgbWFwcGluZ3MgdGhhdCBhcmUgYXBwbGllZCB0byBlYWNoIGNzcyBwYXJ0IGJ5IG5hbWUuIFNldCB0aGVcbiAgICAgKiBwcm9wZXJ0eSBgaG9zdGAgdG8gYXBwbHkgYSBgU3R5bGVJbmZvYCBvYmplY3QgdG8gdGhlIGVsZW1lbnQgaG9zdCBpdHNlbGYuXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCByZWZsZWN0OiB0cnVlIH0pIHNwOiBTdHlsZVBhcnRzO1xuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgICAgc3VwZXIudXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKTtcblxuICAgICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ3NwJykpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5zcCA/PyAoe30gYXMgU3R5bGVQYXJ0cykpLmZvckVhY2goKFtwYXJ0LCBzdHlsZU1hcF0pID0+IHtcbiAgICAgICAgICAvLyBEb3VibGUgdGhlIGA6aG9zdGAgc2VsZWN0b3IgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgYmV5b25kIG1vc3QgY29tcG9uZW50IGxldmVsIHN0eWxlcyBieSBkZWZhdWx0XG4gICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvckZhY3RvcnkoXG4gICAgICAgICAgICBwYXJ0ID09PSAnaG9zdCdcbiAgICAgICAgICAgICAgPyAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0J1xuICAgICAgICAgICAgICA6IGA6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6OnBhcnQoJHtwYXJ0fSlgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoYHNwLSR7cGFydH1gLCBzZWxlY3Rvciwgc3R5bGVNYXApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gU3R5bGVQYXJ0c0VsZW1lbnQgYXMgQ29uc3RydWN0b3I8U3R5bGVQYXJ0c0ludGVyZmFjZTxTdHlsZVBhcnRzPj4gJiBUO1xufTtcbiIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7cG9zaXRpb246cmVsYXRpdmV9I2FuY2hvcntpbnNldDowO3Bvc2l0aW9uOmFic29sdXRlfWA7IiwgImltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIENsaWNrT3V0c2lkZUNvbnRyb2xsZXIsXG4gIENvbnN0cnVjdG9yLFxuICBFdmVudEVtaXR0ZXIsXG4gIEZvY3VzVHJhcENvbnRyb2xsZXIsXG4gIE10ZUVsZW1lbnQsXG4gIFBvcnRhbEFkYXB0ZXIsXG4gIFBvcnRhbENvbnRyb2xsZXIsXG4gIGRlZmF1bHRQb3J0YWxBZGFwdGVyLFxuICBldmVudEVtaXR0ZXIsXG4gIGlzU3NyLFxufSBmcm9tICcuLic7XG5pbXBvcnQgeyBQcm9wZXJ0eVZhbHVlTWFwIH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3ZlcmxheUludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBvdmVybGF5IHN0YXRlIG9uIHRoZSBvdmVybGF5IG1peGluLiBCeSBkZWZhdWx0IGFsbCBvcHRpb25zIGFyZSBzZXQgdG8gdHJ1ZSBpbml0aWFsbHkuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBzZXRPdmVybGF5T3B0aW9ucyhvcHRpb25zOiB7XG4gICAgd2l0aENsb3NlT25DbGlja091dHNpZGU/OiBib29sZWFuO1xuICAgIHdpdGhDbG9zZU9uRXNjYXBlPzogYm9vbGVhbjtcbiAgICB3aXRoRm9jdXNUcmFwPzogYm9vbGVhbjtcbiAgICB3aXRoUG9ydGFsPzogYm9vbGVhbjtcbiAgICB3aXRoRGltQmFja2Ryb3A/OiBib29sZWFuO1xuICAgIHdpdGhJbmVydEJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICB3aXRoU2Nyb2xsTG9jaz86IGJvb2xlYW47XG4gICAgYW5pbWF0aW9uRHVyYXRpb24/OiBudW1iZXI7XG4gICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG4gICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlPzogYm9vbGVhbjtcbiAgICBmb2N1c1RyYXBUYXJnZXQ/OiBFbGVtZW50O1xuICB9KTogdW5rbm93bjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIG92ZXJsYXkgc2hvdWxkIG9wZW4uIENhbiBhZGQgYSBsaXN0ZW5lciBmb3Igb3V0c2lkZSBjbGlja3MsIHBvcnRhbCBhbiBlbGVtZW50LFxuICAgKiBhbmQgcHJldmVudCB0aGUgYm9keSBmcm9tIHNjcm9sbGluZyB1cG9uIG9wZW4uXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBoYW5kbGVPdmVybGF5T3BlbihvcHRpb25zPzoge1xuICAgIGNsaWNrT3V0c2lkZUVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcbiAgICB3aWxsT3Blbj86ICgpID0+IHZvaWQ7XG4gIH0pOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgYWZ0ZXIgdGhlIG92ZXJsYXkgaGFzIGJlZW4gb3B0aW9uYWxseSBwb3J0YWxlZCBhbmQvb3IgYWxsIGFuaW1hdGlvbnMgaGF2ZSBmaW5pc2hlZC5cbiAgICovXG4gIGhhbmRsZU92ZXJsYXlPcGVuRW5kKCk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBvdmVybGF5IGVsZW1lbnQgc2hvdWxkIGNsb3NlLiBDYW4gc3RvcCBsaXN0ZW5pbmcgZm9yIG91dHNpZGUgY2xpY2tzLCByZWxlYXNlIGEsXG4gICAqIGZvY3VzIHRyYXAsIGFuZCBhbGxvdyB0aGUgYm9keSBlbGVtZW50IHRvIHNjcm9sbCBhZ2Fpbi5cbiAgICovXG4gIGhhbmRsZU92ZXJsYXlDbG9zZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgb3ZlcmxheSBlbGVtZW50IGhhcyBmaW5pc2hlZCBjbG9zaW5nIGFuZC9vciBhbGwgYW5pbWF0aW9ucyBoYXZlIGNvbXBsZXRlZC4gQ2FuXG4gICAqIHJlbW92ZSBhbiBlbGVtZW50IGZyb20gdGhlIHBvcnRhbC5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIGhhbmRsZU92ZXJsYXlDbG9zZUVuZChvcHRpb25zPzogeyByZW1vdmVGcm9tRWxlbWVudD86IEhUTUxFbGVtZW50IH0pOiBQcm9taXNlPHZvaWQ+O1xuXG4gIG9wZW4oKTogUHJvbWlzZTx2b2lkPjtcblxuICBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBUaGUgdGFiIGluZGV4IGZvciB0aGlzIGVsZW1lbnRcbiAgICovXG4gIHRhYmluZGV4OiBudW1iZXI7XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaXMgaW5pdGlhbGx5IG9wZW5lZCAqL1xuICBfb25PcGVuOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEVtaXR0ZWQgYWZ0ZXIgdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBvcGVuaW5nICovXG4gIF9vbk9wZW5FbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgY2xvc2luZyAqL1xuICBfb25DbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBjbG9zaW5nICovXG4gIF9vbkNsb3NlRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgcG9ydGFsQWRhcHRlcjogUG9ydGFsQWRhcHRlcjtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBUaGUgb3BlbmVkIHN0YXRlIG9mIHRoZSBvdmVybGF5IHJlZ2FyZGxlc3Mgb2YgYW5pbWF0aW9uc1xuICAgKi9cbiAgb3BlbmVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEluZGljYXRlcyB0aGUgb3ZlcmxheSBoYXMgYmVlbiBwb3J0YWxlZCBhbmQgcmVhZHkgdG8gYW5pbWF0ZVxuICAgKi9cbiAgcmVhZHlGb3JBbmltYXRpb246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogSW5kaWNhdGVzIHRoZSBvdmVybGF5IGhhcyBiZWVuIGZ1bGx5IGFuaW1hdGVkIG9wZW5cbiAgICovXG4gIG9wZW5lZEZ1bGw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBPdmVybGF5TWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIE92ZXJsYXlFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqIFRoZSB0YWIgaW5kZXggb2YgdGhpcyBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiAndGFiaW5kZXgnLCB0eXBlOiBOdW1iZXIgfSkgdGFiaW5kZXggPSAtMTtcblxuICAgIC8qKlxuICAgICAqIEFkYXB0ZXIgZm9yIHBvcnRhbCBET00gb3BlcmF0aW9uIHRoYXQgY2FuIGJlIHN1cHBsZW1lbnRlZCBmb3IgZXh0ZXJuYWwtZnJhbWV3b3JrIGludGVncmF0aW9ucy5cbiAgICAgKiBOb3RhYmx5LWxldmVyYWdlZCBieSBvdmVybGF5cyBpbiBvdXIgZ2VuZXJhdGVkIHJlYWN0IHdyYXBwZXJzLlxuICAgICAqXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSgpIHBvcnRhbEFkYXB0ZXI6IFBvcnRhbEFkYXB0ZXIgPSBkZWZhdWx0UG9ydGFsQWRhcHRlcjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBvcGVuZWQgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uT3BlbjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIEVtaXR0ZWQgYWZ0ZXIgdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBvcGVuaW5nICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbk9wZW5FbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBjbG9zZWQgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBjbG9zaW5nICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkNsb3NlRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBlbGVtZW50IHNob3VsZCB1c2UgYSBmb2N1cyB0cmFwIG9yIG5vdCAqL1xuICAgIHByaXZhdGUgX3dpdGhGb2N1c1RyYXAgPSB0cnVlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgZWxlbWVudCBzaG91bGQgY2xvc2Ugd2hlbiBhIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgdGhlIGVsZW1lbnQgKi9cbiAgICBwcml2YXRlIF9jbG9zZU9uQ2xpY2tPdXRzaWRlID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBjbG9zZSB3aGVuIHRoZSBlc2NhcGUgYnV0dG9uIGlzIHByZXNzZWQgKi9cbiAgICBwcml2YXRlIF9jbG9zZU9uRXNjYXBlID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IHNob3VsZCB1c2UgYSBwb3J0YWwgb3Igbm90ICovXG4gICAgcHJpdmF0ZSBfd2l0aFBvcnRhbCA9IHRydWU7XG5cbiAgICAvKiogV2V0aGVyIHRoZSB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGNsaWNrIGJlaGluZCB0aGUgYmFja2Ryb3Agb3Igbm90ICovXG4gICAgcHJpdmF0ZSBfd2l0aEluZXJ0QmFja2Ryb3AgPSBmYWxzZTtcblxuICAgIC8qKiBXZXRoZXIgdGhlIG92ZXJsYXkncyBiYWNrZHJvcCBzaG91bGQgcmVuZGVyIGRpbW1lZCAqL1xuICAgIHByaXZhdGUgX3dpdGhEaW1CYWNrZHJvcCA9IGZhbHNlO1xuXG4gICAgLyoqIFdldGhlciBvciBub3QgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlLWFwcGVuZGVkIHRvIGl0J3Mgb3JpZ2luIHBhcmVudCBlbGVtZW50IG9uIGNsb3NlIF9pZl8gcG9ydGFsZWQuICovXG4gICAgcHJpdmF0ZSBfcmV0dXJuVG9PcmlnaW5PbkNsb3NlID0gZmFsc2U7XG5cbiAgICAvKiogT3B0aW9uYWwgYmFja2Ryb3AgdGltaW5nLiBJbXBvcnRhbnQgcGFydGljdWxhcmx5IGZvciBzbW9vdGggY2xvc2VzIHdpdGggYSB2aXNpYmxlIGJhY2tkcm9wICovXG4gICAgcHJpdmF0ZSBfYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBzaG91bGQgcHJldmVudCBzY3JvbGxpbmcgb24gdGhlIGJvZHkgKi9cbiAgICBwcml2YXRlIF93aXRoU2Nyb2xsTG9jayA9IHRydWU7XG5cbiAgICBwcm90ZWN0ZWQgZm9jdXNUcmFwQ29udHJvbGxlciA9IG5ldyBGb2N1c1RyYXBDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgcHJvdGVjdGVkIGNsaWNrT3V0c2lkZUNvbnRyb2xsZXIgPSBuZXcgQ2xpY2tPdXRzaWRlQ29udHJvbGxlcih0aGlzLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3dpdGhQb3J0YWwpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZU9uQ2xpY2tPdXRzaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwcm90ZWN0ZWQgcG9ydGFsQ29udHJvbGxlciA9IG5ldyBQb3J0YWxDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgcGFyZW50IGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdGlhbFBhcmVudDogRWxlbWVudCB8IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0byBkZXRlY3QgY2xpY2tzIG91dHNpZGUgb2YgdG8gY2xvc2UgdGhlIG92ZXJsYXkgZWxlbWVudC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG5cbiAgICBwcml2YXRlIF9vcmlnaW5QYXJlbnQ/OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIF9mb2N1c1RyYXBUYXJnZXQ/OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQgPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqIFRoZSBvcGVuZWQgc3RhdGUgb2YgdGhlIG92ZXJsYXkgcmVnYXJkbGVzcyBvZiBhbmltYXRpb25zXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBvcGVuZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBJbmRpY2F0ZXMgdGhlIG92ZXJsYXkgaGFzIGJlZW4gcG9ydGFsZWQgYW5kIHJlYWR5IHRvIGFuaW1hdGVcbiAgICAgKi9cbiAgICBAc3RhdGUoKVxuICAgIHNldCByZWFkeUZvckFuaW1hdGlvbihyZWFkeUZvckFuaW1hdGlvbjogYm9vbGVhbikge1xuICAgICAgdGhpcy5fcmVhZHlGb3JBbmltYXRpb24gPSByZWFkeUZvckFuaW1hdGlvbjtcbiAgICB9XG4gICAgZ2V0IHJlYWR5Rm9yQW5pbWF0aW9uKCkge1xuICAgICAgLy8gRHVyaW5nIFNTUiByZXR1cm4gdHJ1ZSBpbiBjYXNlIHNvbWV0aGluZyBuZWVkcyB0byBiZSBvcGVuZWQgaW5pdGlhbGx5LlxuICAgICAgcmV0dXJuIGlzU3NyKCkgPyB0cnVlIDogdGhpcy5fcmVhZHlGb3JBbmltYXRpb247XG4gICAgfVxuICAgIHByaXZhdGUgX3JlYWR5Rm9yQW5pbWF0aW9uID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogVGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgb3ZlcmxheSByZWdhcmRsZXNzIG9mIGFuaW1hdGlvbnMuIFRoaXMgaXMgcmVmbGVjdGVkIGFuZCB1c2VkIGJ5XG4gICAgICogc29tZSBvdmVybGF5cyB0byByZXN0cmljdCB0aGVpciBzaXplIHdoaWxlIGhpZGRlbi4gKHNpbmNlIGRpc3BsYXk6IG5vbmUgYnJlYWtzIGFuaW1hdGlvbnMpXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBvcGVuZWRGdWxsID0gZmFsc2U7XG5cbiAgICBzZXRPdmVybGF5T3B0aW9ucyhvcHRpb25zOiB7XG4gICAgICB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZT86IGJvb2xlYW47XG4gICAgICB3aXRoQ2xvc2VPbkVzY2FwZT86IGJvb2xlYW47XG4gICAgICB3aXRoRm9jdXNUcmFwPzogYm9vbGVhbjtcbiAgICAgIHdpdGhQb3J0YWw/OiBib29sZWFuO1xuICAgICAgd2l0aEluZXJ0QmFja2Ryb3A/OiBib29sZWFuO1xuICAgICAgd2l0aERpbUJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICAgIHdpdGhTY3JvbGxMb2NrPzogYm9vbGVhbjtcbiAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuICAgICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlPzogYm9vbGVhbjtcbiAgICAgIGZvY3VzVHJhcFRhcmdldD86IEVsZW1lbnQ7XG4gICAgfSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB3aXRoRm9jdXNUcmFwLFxuICAgICAgICB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZSxcbiAgICAgICAgd2l0aENsb3NlT25Fc2NhcGUsXG4gICAgICAgIHdpdGhQb3J0YWwsXG4gICAgICAgIHdpdGhTY3JvbGxMb2NrLFxuICAgICAgICB3aXRoSW5lcnRCYWNrZHJvcCxcbiAgICAgICAgd2l0aERpbUJhY2tkcm9wLFxuICAgICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlLFxuICAgICAgICBmb2N1c1RyYXBUYXJnZXQsXG4gICAgICB9ID0gb3B0aW9ucyA/PyB7fTtcblxuICAgICAgdGhpcy5fd2l0aEZvY3VzVHJhcCA9IHdpdGhGb2N1c1RyYXAgPz8gdGhpcy5fd2l0aEZvY3VzVHJhcDtcbiAgICAgIHRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUgPSB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZSA/PyB0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlO1xuICAgICAgdGhpcy5fd2l0aFNjcm9sbExvY2sgPSB3aXRoU2Nyb2xsTG9jayA/PyB0aGlzLl93aXRoU2Nyb2xsTG9jaztcbiAgICAgIHRoaXMuX3dpdGhQb3J0YWwgPSB3aXRoUG9ydGFsID8/IHRoaXMuX3dpdGhQb3J0YWw7XG4gICAgICB0aGlzLl93aXRoSW5lcnRCYWNrZHJvcCA9XG4gICAgICAgIHdpdGhJbmVydEJhY2tkcm9wID8/ICF0aGlzLl93aXRoRm9jdXNUcmFwID8/IHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wO1xuICAgICAgdGhpcy5fd2l0aERpbUJhY2tkcm9wID0gd2l0aERpbUJhY2tkcm9wID8/IHRoaXMuX3dpdGhEaW1CYWNrZHJvcDtcbiAgICAgIHRoaXMuX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID1cbiAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPz8gdGhpcy5fYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb247XG4gICAgICB0aGlzLl9yZXR1cm5Ub09yaWdpbk9uQ2xvc2UgPSByZXR1cm5Ub09yaWdpbk9uQ2xvc2UgPz8gdGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlO1xuICAgICAgdGhpcy5fZm9jdXNUcmFwVGFyZ2V0ID0gZm9jdXNUcmFwVGFyZ2V0ID8/IHRoaXMuX2ZvY3VzVHJhcFRhcmdldDtcblxuICAgICAgaWYgKHdpdGhDbG9zZU9uRXNjYXBlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fY2xvc2VPbkVzY2FwZSAhPT0gd2l0aENsb3NlT25Fc2NhcGUpIHtcbiAgICAgICAgaWYgKHdpdGhDbG9zZU9uRXNjYXBlID09PSB0cnVlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbG9zZU9uRXNjYXBlID0gd2l0aENsb3NlT25Fc2NhcGUgPz8gdGhpcy5fY2xvc2VPbkVzY2FwZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpdGhGb2N1c1RyYXAgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAod2l0aEZvY3VzVHJhcCA9PT0gdHJ1ZSAmJiB0aGlzLnRhYmluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gLTE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlT3ZlcmxheSgpO1xuICAgIH1cblxuICAgIGhhbmRsZU92ZXJsYXlPcGVuKG9wdGlvbnM/OiB7XG4gICAgICBjbGlja091dHNpZGVFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG4gICAgICB3aWxsT3Blbj86ICgpID0+IHZvaWQ7XG4gICAgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gSWdub3JlIGlmIGFscmVhZHkgb3BlblxuICAgICAgaWYgKHRoaXMub3BlbmVkIHx8IHRoaXMub3BlbmVkRnVsbCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgICBjb25zdCB7IGNsaWNrT3V0c2lkZUVsZW1lbnQsIHdpbGxPcGVuIH0gPSBvcHRpb25zID8/IHt9O1xuICAgICAgd2lsbE9wZW4/LigpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQgPSBjbGlja091dHNpZGVFbGVtZW50IHx8IHRoaXM7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5saXN0ZW5Gb3JDbGlja3NPdXRzaWRlT2YodGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCk7XG4gICAgICAgIGlmICh0aGlzLl93aXRoUG9ydGFsKSB7XG4gICAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyXG4gICAgICAgICAgICAuYXBwZW5kVG9TdGFjayh0aGlzLCB7XG4gICAgICAgICAgICAgIHdpdGhEaW1CYWNrZHJvcDogdGhpcy5fd2l0aERpbUJhY2tkcm9wLFxuICAgICAgICAgICAgICB3aXRoSW5lcnRCYWNrZHJvcDogdGhpcy5fd2l0aEluZXJ0QmFja2Ryb3AsXG4gICAgICAgICAgICAgIHdpdGhTY3JvbGxMb2NrOiB0aGlzLl93aXRoU2Nyb2xsTG9jayxcbiAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXI6IHRoaXMuaGFuZGxlQ2xvc2VPbkNsaWNrT3V0c2lkZSxcbiAgICAgICAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb246IHRoaXMuX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICAgICAgICBwb3J0YWxBZGFwdGVyOiB0aGlzLnBvcnRhbEFkYXB0ZXIsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAvLyBXYWl0IGZvciBhcHBlbmQgdG8gY29tcGxldGUgYmVmb3JlIGFuaW1hdGluZ1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5Rm9yQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBBZnRlciBhbmltYXRpb24gYmVnaW5zIHJlc29sdmVcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fb25PcGVuLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5fb3JpZ2luUGFyZW50ICYmXG4gICAgICAgICAgICB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSAmJlxuICAgICAgICAgICAgdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkgIT09IHRoaXMuX29yaWdpblBhcmVudFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIHRoaXMuX29yaWdpblBhcmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFdhaXQgZm9yIGFwcGVuZCB0byBjb21wbGV0ZSBiZWZvcmUgYW5pbWF0aW5nXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Rm9yQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIEFmdGVyIGFuaW1hdGlvbiBiZWdpbnMgcmVzb2x2ZVxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fb25PcGVuLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMjApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVPdmVybGF5T3BlbkVuZCgpIHtcbiAgICAgIC8vIENhbmNlbCBpZiBjbG9zZWQgYmVmb3JlIG9wZW4gZW5kZWRcbiAgICAgIGlmICghdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWRGdWxsID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLl93aXRoRm9jdXNUcmFwKSB7XG4gICAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci50cmFwRm9jdXModGhpcy5fZm9jdXNUcmFwVGFyZ2V0LCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29uT3BlbkVuZC5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlT3ZlcmxheUNsb3NlKCkge1xuICAgICAgLy8gSWdub3JlIGlmIGFscmVhZHkgY2xvc2VkXG4gICAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9vbkNsb3NlLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5yZWxlYXNlRm9jdXModHJ1ZSk7XG4gICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIuaGlkZUJhY2tkcm9wKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlT3ZlcmxheUNsb3NlRW5kKG9wdGlvbnM/OiB7IHJlbW92ZUZyb21FbGVtZW50PzogSFRNTEVsZW1lbnQgfSkge1xuICAgICAgLy8gQ2FuY2VsIGlmIG9wZW5lZCBiZWZvcmUgY2xvc2UgZW5kZWRcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZEZ1bGwgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVhZHlGb3JBbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5yZW1vdmVGcm9tU3RhY2sob3B0aW9ucz8ucmVtb3ZlRnJvbUVsZW1lbnQgfHwgdGhpcyk7XG4gICAgICBpZiAodGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlKSB7XG4gICAgICAgIGlmICh0aGlzLl9vcmlnaW5QYXJlbnQgJiYgdGhpcy5fb3JpZ2luUGFyZW50ICE9PSB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSkge1xuICAgICAgICAgIHRoaXMucG9ydGFsQWRhcHRlcih0aGlzLCB0aGlzLl9vcmlnaW5QYXJlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9vbkNsb3NlRW5kLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZU92ZXJsYXlLZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnRFbGVtZW50Py5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheS13cmFwcGVyJylcbiAgICAgICAgPyB0aGlzLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnRcbiAgICAgICAgOiB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGFyZW50IGVsZW1lbnQgdGhpcyBvdmVybGF5IHdpbGwgYmUgcmVhdHRhY2hlZCB0byBlaXRoZXI6XG4gICAgICogLSBXaGVuIGNvbmZpZ3VyZWQgdG8gZG8gc28gb24gY2xvc2VcbiAgICAgKiAtIFdoZW4gXCJwb3J0YWxpbmdcIiBpcyBkaXNhYmxlZFxuICAgICAqL1xuICAgIHNldE9yaWdpblBhcmVudChuZXdPcmlnaW46IEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG4gICAgICBpZiAoY3VycmVudFBhcmVudEVsZW1lbnQgPT09IHRoaXMuX29yaWdpblBhcmVudCkge1xuICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgbmV3T3JpZ2luKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29yaWdpblBhcmVudCA9IG5ld09yaWdpbjtcbiAgICB9XG5cbiAgICAvKiogVXBkYXRlcyB2YXJpb3VzIGJlaGF2aW9ycyB0byBhcHBseSB0aGUgbGF0ZXN0IG92ZXJsYXkgb3B0aW9ucyAqL1xuICAgIHVwZGF0ZU92ZXJsYXkoKSB7XG4gICAgICAvLyBVcGRhdGUgYmFja2Ryb3AgaW5lcnRuZXNzXG4gICAgICBpZiAodGhpcy5fd2l0aEluZXJ0QmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNldEJhY2tkcm9wSW5lcnRuZXNzKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNldEJhY2tkcm9wSW5lcnRuZXNzKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSBjbGljayBvdXRzaWRlIGNvbnRyb2xsZXJcbiAgICAgIGlmICh0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlICYmICF0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuaXNMaXN0ZW5pbmcoKSkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIubGlzdGVuRm9yQ2xpY2tzT3V0c2lkZU9mKHRoaXMpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZSAmJiB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuaXNMaXN0ZW5pbmcoKSkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuc3RvcExpc3RlbmluZygpO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIGZvY3VzIHRyYXAgY29udHJvbGxlclxuICAgICAgaWYgKHRoaXMuX3dpdGhGb2N1c1RyYXAgJiYgdGhpcy5vcGVuZWQgJiYgIXRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5pc1RyYXBwaW5nRm9jdXMoKSkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIudHJhcEZvY3VzKHRoaXMuX2ZvY3VzVHJhcFRhcmdldCwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl93aXRoRm9jdXNUcmFwICYmIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5pc1RyYXBwaW5nRm9jdXMoKSkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIucmVsZWFzZUZvY3VzKHRydWUpO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIGJhY2tkcm9wIGNvbnRyb2xsZXJcbiAgICAgIGlmICh0aGlzLl93aXRoRGltQmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNob3dCYWNrZHJvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLmhpZGVCYWNrZHJvcCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZSkge1xuICAgICAgICBpZiAodGhpcy5fb3JpZ2luUGFyZW50ICYmIHRoaXMuX29yaWdpblBhcmVudCAhPT0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgdGhpcy5fb3JpZ2luUGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIG9wZW4oKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09wZW4gbWV0aG9kIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbG9zZSBtZXRob2Qgbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55KSB7XG4gICAgICBzdXBlcihhcmdzKTtcbiAgICAgIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24gPSB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChcbiAgICAgIGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlTWFwPGFueT4gfCBNYXA8UHJvcGVydHlLZXksIHVua25vd24+XG4gICAgKTogdm9pZCB7XG4gICAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgdGhpcy5fb3JpZ2luUGFyZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVDbG9zZU9uQ2xpY2tPdXRzaWRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgIGlmICh0aGlzLl9jbG9zZU9uRXNjYXBlKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBldmVudCBsaXN0ZW5lciBpbiB0aGUgZXZlbnQgdGhlIG92ZXJsYXkgZWxlbWVudCB3YXMgcG9ydGFsZWQuXG4gICAgICBpZiAodGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIubGlzdGVuRm9yQ2xpY2tzT3V0c2lkZU9mKHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5yZWxlYXNlRm9jdXModHJ1ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE92ZXJsYXlFbGVtZW50IGFzIENvbnN0cnVjdG9yPE92ZXJsYXlJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2Rpc3BsYXk6YmxvY2s7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMDB9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tZnVsbC13aWR0aDptYXgtY29udGVudDstLWNvbnRyb2wtd2lkdGg6dW5zZXQ7LS1jb250cm9sLW1pbi13aWR0aDoyNDBweDstLWNvbnRyb2wtbWF4LXdpZHRoOnZhcigtLWNvbnRyb2wtd2lkdGgpOy0tY29udHJvbC1tYXJnaW4teTp2YXIoLS1tdGUtc3BhY2Utc20pOy0tY29udHJvbC1tYXJnaW4teDp2YXIoLS1tdGUtc3BhY2Utc20pOy0tY29udHJvbC1kZXNjcmlwdG9yLW1hcmdpbjp2YXIoLS1tdGUtc3BhY2Utc20pOy0tbGFiZWwtd2lkdGg6dmFyKC0tY29udHJvbC13aWR0aCk7LS1sYWJlbC1taW4td2lkdGg6dmFyKC0tY29udHJvbC1taW4td2lkdGgpOy0tbGFiZWwtbWF4LXdpZHRoOnZhcigtLWNvbnRyb2wtbWF4LXdpZHRoKTstLWxhYmVsLW1hcmdpbi15OnZhcigtLW10ZS1zcGFjZS14cyk7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6dmFyKC0tZnVsbC13aWR0aCl9LmdyaWQtY29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWdyaWQ7Z3JpZC10ZW1wbGF0ZS1hcmVhczpcImxhYmVsXCIgXCJjb250cm9sXCI7Z3JpZC10ZW1wbGF0ZS1yb3dzOjFmciBtaW5tYXgoMCwxMDAlKTt3aWR0aDppbmhlcml0fTpob3N0KFt3aXRoRnVsbFdpZHRoXSl7LS1mdWxsLXdpZHRoOjEwMCU7LS1jb250cm9sLXdpZHRoOjEwMCV9Omhvc3QoW3dpdGhvdXRNYXJnaW5dKXstLWNvbnRyb2wtbWFyZ2luLXk6MHB4fTpob3N0KFt3aXRob3V0TWFyZ2luXSkgLmxhYmVsLWNvbnRhaW5lci5oYXMtY29udGVudHttYXJnaW4tYm90dG9tOnZhcigtLWNvbnRyb2wtZGVzY3JpcHRvci1tYXJnaW4pfS5sYWJlbC1jb250YWluZXJ7ZGlzcGxheTpub25lO2dyaWQtYXJlYTpsYWJlbDttYXgtd2lkdGg6dmFyKC0tbGFiZWwtbWF4LXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbGFiZWwtbWluLXdpZHRoKTt3aWR0aDp2YXIoLS1sYWJlbC13aWR0aCl9LmxhYmVsLWNvbnRhaW5lci5oYXMtY29udGVudHtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6dmFyKC0tbGFiZWwtbWFyZ2luLXkpfS5sYWJlbC1jb250YWluZXI6bm90KC5oYXMtY29udGVudCl7bWFyZ2luOjAhaW1wb3J0YW50fS5jb250ZXh0e2dyaWQtYXJlYTpjb250ZXh0fS5kZXNjcmlwdGlvbiwuZXJyb3IsLmhpbnQsLmxhYmVse2Rpc3BsYXk6YmxvY2t9LmRlc2NyaXB0aW9uIG10ZS1kZXNjcmlwdGlvbiwuZGVzY3JpcHRpb24gbXRlLWRlc2NyaXB0aW9uLXRleHQsLmxhYmVsIG10ZS1sYWJlbCwubGFiZWwgbXRlLWxhYmVsLXRleHQsOmhvc3QgOjpzbG90dGVkKG10ZS1kZXNjcmlwdGlvbi10ZXh0W3Nsb3Q9ZGVzY3JpcHRpb25dKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWRlc2NyaXB0aW9uW3Nsb3Q9ZGVzY3JpcHRpb25dKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWxhYmVsLXRleHRbc2xvdD1sYWJlbF0pLDpob3N0IDo6c2xvdHRlZChtdGUtbGFiZWxbc2xvdD1sYWJlbF0pe21hcmdpbjowfTpob3N0KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pey0tbGFiZWwtd2lkdGg6bWF4LWNvbnRlbnQ7LS1sYWJlbC1taW4td2lkdGg6bWF4LWNvbnRlbnR9Omhvc3QoW2xhYmVsUG9zaXRpb249YmVmb3JlXSkgLmdyaWQtY29udGFpbmVye2dyaWQtdGVtcGxhdGUtYXJlYXM6XCJsYWJlbCBjb250cm9sXCI7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1pbm1heChhdXRvLHZhcigtLWxhYmVsLXdpZHRoKSkgbWlubWF4KGF1dG8sdmFyKC0tY29udHJvbC13aWR0aCkpfTpob3N0KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pIC5sYWJlbC1jb250YWluZXJ7bWFyZ2luLWJvdHRvbTp2YXIoLS1jb250cm9sLW1hcmdpbi15KTttYXJnaW4tcmlnaHQ6dmFyKC0tY29udHJvbC1tYXJnaW4teCk7bWFyZ2luLXRvcDpjYWxjKHZhcigtLWNvbnRyb2wtbWFyZ2luLXkpICsgdmFyKC0tbGFiZWwtYmVmb3JlLW9mZnNldCkpfS5kZXNjcmlwdGlvbiwuZXJyb3IsLmhpbnR7bWluLXdpZHRoOjEwMCU7d2lkdGg6LW1vei1taW4tY29udGVudDt3aWR0aDptaW4tY29udGVudH0uY29udHJvbC1vdXRlci1jb250YWluZXJ7Z3JpZC1hcmVhOmNvbnRyb2w7bWFyZ2luLXRvcDp2YXIoLS1jb250cm9sLW1hcmdpbi15KTttYXgtd2lkdGg6dmFyKC0tY29udHJvbC1tYXgtd2lkdGgpO21pbi13aWR0aDp2YXIoLS1jb250cm9sLW1pbi13aWR0aCk7d2lkdGg6dmFyKC0tY29udHJvbC13aWR0aCl9Omhvc3QoOm5vdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKSkgLmNvbnRyb2wtb3V0ZXItY29udGFpbmVyLmhhcy1sYWJlbC1jb250ZW50e21hcmdpbi10b3A6Y2FsYyh2YXIoLS1jb250cm9sLW1hcmdpbi15KS8yKX0uY29udHJvbC1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXJnaW4tYm90dG9tOnZhcigtLWNvbnRyb2wtbWFyZ2luLXkpfS5lcnJvciwuaGludHtkaXNwbGF5Om5vbmV9LmVycm9yLmhhcy1jb250ZW50LC5oaW50Lmhhcy1jb250ZW50e2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDp2YXIoLS1jb250cm9sLWRlc2NyaXB0b3ItbWFyZ2luKX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1mb3JtLWZpZWxkLWludGVybmFsLXBhZGRpbmc6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwOnZhcigtLW10ZS1zcGFjZS1zbSk7LS1mb3JtLWZpZWxkLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCk7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1zdXJmYWNlLTIpOy0tcHJlcGVuZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1ncmV5LTEpOy0tcHJlcGVuZC1wYWRkaW5nLXg6dmFyKC0tbXRlLXNwYWNlLXNtKTstLXByZXBlbmQtYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMil9Omhvc3QoW3JhZGl1cz1zbV0pey0tZm9ybS1maWVsZC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteHMpfTpob3N0KFtyYWRpdXM9bGddKXstLWZvcm0tZmllbGQtcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXh4bCl9Omhvc3QoW3NpemU9c21dKXstLXByZXBlbmQtcGFkZGluZy14OmNhbGModmFyKC0tbXRlLXNwYWNlLXhzKSArIHZhcigtLW10ZS1zcGFjZS14eHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtcGFkZGluZzpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1mb3JtLWZpZWxkLWludGVybmFsLWdhcDpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSl9Omhvc3QoW3NpemU9bGddKXstLXByZXBlbmQtcGFkZGluZy14OmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1wYWRkaW5nOmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXA6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXhzKSl9LmZvcm0tZmllbGR7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6dmFyKC0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2dhcDp2YXIoLS1mb3JtLWZpZWxkLWludGVybmFsLWdhcCk7cG9zaXRpb246cmVsYXRpdmV9Omhvc3QoW2Rpc2FibGVkXSkgLmZvcm0tZmllbGR7YmFja2dyb3VuZDp2YXIoLS1tdGUtZGlzYWJsZWQtMSk7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1tdGUtZGlzYWJsZWQtMSl9LmFwcGVuZCwucHJlcGVuZHthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpzdHJldGNoO2JhY2tncm91bmQ6dmFyKC0tcHJlcGVuZC1iYWNrZ3JvdW5kKTtkaXNwbGF5Om5vbmU7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOjAgdmFyKC0tcHJlcGVuZC1wYWRkaW5nLXgpfS5wcmVwZW5ke2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci1yaWdodDoxcHggc29saWQgdmFyKC0tcHJlcGVuZC1ib3JkZXItY29sb3IpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpfS5hcHBlbmR7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci1sZWZ0OjFweCBzb2xpZCB2YXIoLS1wcmVwZW5kLWJvcmRlci1jb2xvcik7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpfS5hcHBlbmQuaGFzLWNvbnRlbnQsLnByZXBlbmQuaGFzLWNvbnRlbnR7ZGlzcGxheTpmbGV4fS5wcmVmaXgsLnN1ZmZpeHthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpzdHJldGNoO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5wcmVmaXg6bm90KC5oYXMtcHJlcGVuZCl7cGFkZGluZy1sZWZ0OnZhcigtLXByZXBlbmQtcGFkZGluZy14KX0uc3VmZml4Om5vdCguaGFzLWFwcGVuZCl7cGFkZGluZy1yaWdodDp2YXIoLS1wcmVwZW5kLXBhZGRpbmcteCl9LmZvcm0tZmllbGQuZm9jdXNlZDpub3QoLmRpc2FibGVkKTpub3QoW2Rpc2FibGVkXSk6bm90KDpkaXNhYmxlZCk6YmVmb3Jle2JvcmRlcjoycHggc29saWQgcmdiKHZhcigtLW10ZS1mb2N1cy1yZ2IpKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvdHRvbTotMXB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDotMXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTFweDt0b3A6LTFweDt6LWluZGV4Ojl9LmZvcm0tZmllbGQuaW52YWxpZHstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKX06aG9zdChbd2l0aG91dEJvcmRlcl0pIDppcyguZm9ybS1maWVsZCwucHJlcGVuZCwuYXBwZW5kKXstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fWA7IiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtcbiAgQWN0aXZlTGlua09wdGlvbnMsXG4gIENvbnN0cnVjdG9yLFxuICBNdGVFbGVtZW50LFxuICBNdGVIaXN0b3J5QXBpU2VydmljZSxcbiAgVW5zdWJzY3JpYmVyLFxuICBpc0xpbmtBY3RpdmUsXG4gIG9uVXBkYXRlLFxufSBmcm9tICcuLi8nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMaW5rSW50ZXJmYWNlIHtcbiAgaHJlZj86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXV0b0FjdGl2ZUxpbmtJbnRlcmZhY2Uge1xuICAvKiogV2hldGhlciBvciBub3QgdGhpcyBsaW5rIGlzIHRoZSBhY3RpdmUgcGFnZSAqL1xuICBhY3RpdmU6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgbGluayBzaG91bGQgYXV0b21hdGljYWxseSB0cnkgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIHRoZSBhY3RpdmUgcGFnZSAqL1xuICB3aXRob3V0QXV0b0FjdGl2ZTogYm9vbGVhbjtcblxuICAvKiogT3B0aW9ucyB0byByZWZpbmUgaG93IHRoaXMgbGluayB3aWxsIGRldGVybWluZSBpZiBpdCBpcyB0aGUgYWN0aXZlIHBhZ2UgKi9cbiAgYWN0aXZlTGlua09wdGlvbnM/OiBQYXJ0aWFsPEFjdGl2ZUxpbmtPcHRpb25zPjtcblxuICAvKiogVGhlIGludGVybmFsIGFuY2hvciBlbGVtZW50IGZyb20gd2hpY2ggdG8gcHVsbCB0aGUgbG9jYXRpb24gZm9yIGNvbXBhcmlzb24gKi9cbiAgYW5jaG9yRWxlbWVudD86IEhUTUxBbmNob3JFbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgQXV0b0FjdGl2ZUxpbmtNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudCAmIExpbmtJbnRlcmZhY2U+PihcbiAgc3VwZXJDbGFzczogVFxuKSA9PiB7XG4gIGNsYXNzIEF1dG9BY3RpdmVMaW5rRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgYWN0aXZlID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHdpdGhvdXRBdXRvQWN0aXZlID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIHJlZmxlY3Q6IHRydWUgfSkgYWN0aXZlTGlua09wdGlvbnM/OiBQYXJ0aWFsPEFjdGl2ZUxpbmtPcHRpb25zPjtcblxuICAgIGFuY2hvckVsZW1lbnQ/OiBIVE1MQW5jaG9yRWxlbWVudDtcblxuICAgIHByaXZhdGUgdW5zdWI6IFVuc3Vic2NyaWJlcjtcblxuICAgIEBvblVwZGF0ZSgnYWN0aXZlJywgeyB3YWl0VW50aWxGaXJzdFVwZGF0ZTogdHJ1ZSB9KVxuICAgIHByaXZhdGUgaGFuZGxlQWN0aXZlTGlua0NoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3BhZ2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAb25VcGRhdGUoWydocmVmJywgJ2lyZWYnLCAnd2l0aEF1dG9BY3RpdmUnXSwgeyB3YWl0VW50aWxGaXJzdFVwZGF0ZTogdHJ1ZSB9KVxuICAgIHByaXZhdGUgaGFuZGxlQXV0b0FjdGl2ZUNoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmhyZWYgfHwgdGhpc1snaXJlZiddKSB7XG4gICAgICAgIGlmICh0aGlzLndpdGhvdXRBdXRvQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcigpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlVXJsQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUF1dG9BY3RpdmVDaGFuZ2UoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExpc3RlbmVyKCkge1xuICAgICAgaWYgKCF0aGlzLnVuc3ViKSB7XG4gICAgICAgIHRoaXMudW5zdWIgPSBNdGVIaXN0b3J5QXBpU2VydmljZS5zdGF0ZUNoYW5nZXMoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlVXJsQ2hhbmdlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLnVuc3ViPy4oKTtcbiAgICAgIHRoaXMudW5zdWIgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlVXJsQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmUgPSBpc0xpbmtBY3RpdmUoXG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudD8uaHJlZixcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIHRoaXMuYWN0aXZlTGlua09wdGlvbnNcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gQXV0b0FjdGl2ZUxpbmtFbGVtZW50IGFzIENvbnN0cnVjdG9yPEF1dG9BY3RpdmVMaW5rSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQsIFNsb3RDb250cm9sbGVyIH0gZnJvbSAnLi4nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTbG90T2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAvKipcbiAgICogUHJvcCB1c2VkIHRvIGRlY2xhcmUgd2hpY2ggc2xvdHMgYXJlIGJlaW5nIHVzZWQgZHVyaW5nIFNTUiB0byBtYWtlIHRoZW0gdmlzaWJsZSBpbiBjZXJ0YWluIGVkZ2UtY2FzZXMuXG4gICAqL1xuICBzc3JTbG90czogc3RyaW5nO1xuXG4gIHNsb3RDb250cm9sbGVyOiBTbG90Q29udHJvbGxlcjtcblxuICBoYXNTbG90OiAoc2xvdDogc3RyaW5nLCBvclZhbHVlPzogYW55KSA9PiBib29sZWFuO1xuXG4gIHNzclNsb3RDaGVjazogKHNsb3RzOiBzdHJpbmcpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBTbG90T2JzZXJ2ZXJNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgU2xvdE9ic2VydmVyRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIFByb3AgdXNlZCB0byBkZWNsYXJlIHdoaWNoIHNsb3RzIGFyZSBiZWluZyB1c2VkIGR1cmluZyBTU1IgdG8gbWFrZSB0aGVtIHZpc2libGUgaW4gY2VydGFpbiBlZGdlLWNhc2VzLlxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSlcbiAgICBzZXQgc3NyU2xvdHModmFsOiBzdHJpbmcpIHtcbiAgICAgIGxldCBvbGRWYWwgPSB0aGlzLl9zc3JTbG90cztcbiAgICAgIHRoaXMuX3NzclNsb3RzID0gdmFsO1xuICAgICAgLy8gUGFyc2UgYW5kIGNhY2hlIHNzciBzbG90IHNldFxuICAgICAgY29uc3Qgc2xvdHMgPSAodGhpcy5fc3NyU2xvdHMgPz8gJycpXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLm1hcCgoc2xvdCkgPT4gc2xvdC50cmltKCkpO1xuICAgICAgdGhpcy5fc3NyU2xvdFNldCA9IG5ldyBTZXQ8c3RyaW5nPihzbG90cyk7XG4gICAgICAvLyBOb3JtYWwgdXBkYXRlXG4gICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ3NzclNsb3RzJywgb2xkVmFsKTtcbiAgICB9XG4gICAgZ2V0IHNzclNsb3RzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NzclNsb3RzO1xuICAgIH1cbiAgICBwcml2YXRlIF9zc3JTbG90cz86IHN0cmluZztcblxuICAgIC8qKiBAaWdub3JlICovXG4gICAgX3NzclNsb3RTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIHNsb3RDb250cm9sbGVyID0gbmV3IFNsb3RDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBzbG90IGhhcyBjb250ZW50LCBvciBpZiBpdCB3YXMgc3BlY2lmaWVkIGFzIGV4aXN0aW5nIGR1cmluZyBTU1IuXG4gICAgICogT25jZSBjYWxsZWQsIHRoZSBjb21wb25lbnQgd2lsbCBub3cgYXV0b21hdGljYWxseSB1cGRhdGUgaWYgdGhlIGNvbnRlbnRzIG9mIHRoaXMgc2xvdCBjaGFuZ2UuXG4gICAgICovXG4gICAgaGFzU2xvdChzbG90OiBzdHJpbmcsIG9yVmFsdWU/OiBhbnkpOiBib29sZWFuIHtcbiAgICAgIHRoaXMuc2xvdENvbnRyb2xsZXIudXBkYXRlT25DaGFuZ2Uoc2xvdCk7XG4gICAgICAvLyBUT0RPKHJlZWNlKTogcmVjb25zaWRlciB3aGVuIGEgc29sdXRpb24gZXhpc3RzIGZvciBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9pc3N1ZXMvMTQzNFxuICAgICAgLy8gV2UgaGF2ZSB0byBhc3N1bWUgYWxpZ25tZW50IHdpdGggc3NyU2xvdENoZWNrIHVudGlsIHRoZSBmaXJzdCB1cGRhdGUgaGVyZSBvdGhlcndpc2UgcGFydCBtaXNtYXRjaGVzIGNhbiBvY2N1clxuICAgICAgaWYgKCF0aGlzLl9fZmlyc3RVcGRhdGVkKSB7XG4gICAgICAgIHJldHVybiBvclZhbHVlIHx8IHRoaXMuc3NyU2xvdENoZWNrKHNsb3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9yVmFsdWUgfHwgdGhpcy5zbG90Q29udHJvbGxlci5jaGVjayhzbG90KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogV2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGUgcmVxdWVzdGVkIHNsb3Qgd2FzIHNwZWNpZmllZCBpbiB0aGUgbGlzdCBvZiBgc3NyLXNsb3RzYC4gKi9cbiAgICBzc3JTbG90Q2hlY2soc2xvdDogc3RyaW5nKSB7XG4gICAgICBpZiAodGhpcy5fX2ZpcnN0VXBkYXRlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3NyU2xvdFNldC5oYXMoc2xvdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBTbG90T2JzZXJ2ZXJFbGVtZW50IGFzIENvbnN0cnVjdG9yPFNsb3RPYnNlcnZlckludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBGb3JtQ29udHJvbE1peGluLCBGb3JtQ29udHJvbEludGVyZmFjZSB9IGZyb20gJ0BvcGVuLXdjL2Zvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgcXVlcnkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBDb25zdHJ1Y3RvcixcbiAgRGlzYWJsZWRNaXhpbixcbiAgVGFiSW5kZXhNaXhpbixcbiAgTXRlRWxlbWVudCxcbiAgaW5uZXJJbnB1dFZhbGlkYXRvcnMsXG4gIFRhYkluZGV4SW50ZXJmYWNlLFxuICBEaXNhYmxlZEludGVyZmFjZSxcbiAgb25VcGRhdGUsXG4gIGV2ZW50RW1pdHRlcixcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICcuLic7XG5cbi8vIFJlcXVpcmVkIHBvbHlmaWxsIGZvciBub3dcbmltcG9ydCAnLi4vLi4vY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvaW5kZXgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE10ZUNoZWNrYm94Q2hhbmdlRGV0YWlsIHtcbiAgLyoqIFRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCBjaGFuZ2VkICovXG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sIGNoYW5nZWQgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgZWxlbWVudCBpcyBjaGVja2VkICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tib3hJbnRlcmZhY2Uge1xuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgZWxlbWVudCAqL1xuICBsYWJlbD86IHN0cmluZztcblxuICAvKiogVGhlIGVycm9yIHRleHQgZm9yIHRoZSBlbGVtZW50ICovXG4gIGVycm9yPzogc3RyaW5nO1xuXG4gIC8qKiBUaGUgaGludCB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICBoaW50Pzogc3RyaW5nO1xuXG4gIC8qKiBBbiBhcmlhIGxhYmVsIHRoYXQgd2lsbCBiZSBwcm92aWRlZCB0byB0aGUgaW5wdXQgZWxlbWVudCAqL1xuICBhcmlhTGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBuYW1lIGZvciB0aGUgZWxlbWVudC4gVXNlZCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgdmFsdWUgZm9yIHRoZSBlbGVtZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSBlbGVtZW50IHdoZW4gc3VibWl0dGluZyBhIGZvcm0gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudCAgKi9cbiAgdmFsdWU6IHN0cmluZztcblxuICAvKipcbiAgICogQWx0ZXJzIHRoZSBiZWhhdmlvciBvZiB0aGlzIGNvbnRyb2wuIFdoZW4gXCJjb250cm9sbGVkXCIsIGEgY29udHJvbHMgdmFsdWUgaXMgZHJpdmVuIGV4cGxpY2l0bHkgYnkgZXh0ZXJuYWwgc3RhdGVcbiAgICogdmlhIHRoZSBgdmFsdWVgIHByb3AuIENoYW5nZSBldmVudHMgd2lsbCBmaXJlIGJ1dCB0aGUgY29udHJvbCB2YWx1ZSB3aWxsIG5vdCBjaGFuZ2UgdW50aWwgaXQgaXMgYWx0ZXJlZCBkaXJlY3RseS5cbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgY29udHJvbGxlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgY2hlY2tlZCBieSBkZWZhdWx0LiBVc2VmdWwgZm9yIHdoZW4gcmVzZXR0aW5nIGZvcm0gY29udHJvbHMgb3IgdXNpbmcgYSBzdGF0ZWxlc3MgY29tcG9uZW50ICovXG4gIGRlZmF1bHRDaGVja2VkOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGNoZWNrZWQgb3Igbm90ICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlYWRvbmx5ICovXG4gIHJlYWRvbmx5OiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBzZWxlY3RpbmcgdGhlIGVsZW1lbnQgaXMgcmVxdWlyZWQgb3Igbm90ICovXG4gIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gIC8qKiBSZW5kZXJzIHRoZSByZXF1aXJlZCBpbmRpY2F0b3IgZm9yIHRoaXMgaW5wdXRzIGxhYmVsIHdpdGhvdXQgZW5hYmxpbmcgbmF0aXZlIGByZXF1aXJlZGAgdmFsaWRhdGlvbiAqL1xuICBzaG93UmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgaW5wdXQgYmx1cnMgICovXG4gIGhhbmRsZUJsdXIoKTogdm9pZDtcblxuICAvKiogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBpbnB1dCBpcyBmb2N1c2VkIG9uICAqL1xuICBoYW5kbGVGb2N1cygpOiB2b2lkO1xuXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCBjaGFuZ2VzICAqL1xuICBoYW5kbGVDaGFuZ2UoKTogdm9pZDtcblxuICAvKiogQSBzZXQgb2YgYXR0cmlidXRlcyB0byBiZSBmb3J3YXJkZWQgdG8gYW4gZWxlbWVudCB3aXRoaW4gcmVuZGVyIGFuZCByZW1vdmVkIGZyb20gdGhlIGVsZW1lbnQgKi9cbiAgaW5oZXJpdGVkQXR0cmlidXRlczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGNvbnN0IENoZWNrYm94TWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIENoZWNrYm94RWxlbWVudCBleHRlbmRzIFRhYkluZGV4TWl4aW4oRm9ybUNvbnRyb2xNaXhpbihEaXNhYmxlZE1peGluKHN1cGVyQ2xhc3MpKSwge1xuICAgIGluaXRpYWxUYWJJbmRleDogMCxcbiAgfSkge1xuICAgIGluaGVyaXRlZEF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICAgIC8qKiBAaWdub3JlICovXG4gICAgc3RhdGljIGZvcm1Db250cm9sVmFsaWRhdG9ycyA9IGlubmVySW5wdXRWYWxpZGF0b3JzO1xuXG4gICAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoKSBsYWJlbD86IHN0cmluZztcblxuICAgIC8qKiBUaGUgZXJyb3IgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoKSBlcnJvcj86IHN0cmluZztcblxuICAgIC8qKiBUaGUgaGludCB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSgpIGhpbnQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBbHRlcnMgdGhlIGJlaGF2aW9yIG9mIHRoaXMgY29udHJvbC4gV2hlbiBcImNvbnRyb2xsZWRcIiwgYSBjb250cm9scyB2YWx1ZSBpcyBkcml2ZW4gZXhwbGljaXRseSBieSBleHRlcm5hbCBzdGF0ZVxuICAgICAqIHZpYSB0aGUgYHZhbHVlYCBwcm9wLiBDaGFuZ2UgZXZlbnRzIHdpbGwgZmlyZSBidXQgdGhlIGNvbnRyb2wgdmFsdWUgd2lsbCBub3QgY2hhbmdlIHVudGlsIGl0IGlzIGFsdGVyZWQgZGlyZWN0bHkuXG4gICAgICogQGV4cGVyaW1lbnRhbFxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgY29udHJvbGxlZDogYm9vbGVhbjtcblxuICAgIC8qKiBBbiBhcmlhIGxhYmVsIHRoYXQgd2lsbCBiZSBwcm92aWRlZCB0byB0aGUgaW5wdXQgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ2FyaWEtbGFiZWwnLCByZWZsZWN0OiB0cnVlIH0pIGFyaWFMYWJlbDogc3RyaW5nO1xuXG4gICAgLyoqIFRoZSBuYW1lIGZvciB0aGUgZWxlbWVudC4gVXNlZCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIG5hbWU6IHN0cmluZztcblxuICAgIC8qKiBUaGUgdmFsdWUgZm9yIHRoZSBlbGVtZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSBlbGVtZW50IHdoZW4gc3VibWl0dGluZyBhIGZvcm0gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudCAgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHZhbHVlPyA9ICdvbic7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgY2hlY2tlZCBieSBkZWZhdWx0LiBVc2VmdWwgZm9yIHdoZW4gcmVzZXR0aW5nIGZvcm0gY29udHJvbHMgb3IgdXNpbmcgYSBzdGF0ZWxlc3MgY29tcG9uZW50ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBkZWZhdWx0Q2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgY2hlY2tlZCBvciBub3QgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGNoZWNrZWQgPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBiZSByZWFkb25seSAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcmVhZG9ubHkgPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBzZWxlY3RpbmcgdGhlIGVsZW1lbnQgaXMgcmVxdWlyZWQgb3Igbm90ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSByZXF1aXJlZCA9IGZhbHNlO1xuXG4gICAgLyoqIFJlbmRlcnMgdGhlIHJlcXVpcmVkIGluZGljYXRvciBmb3IgdGhpcyBpbnB1dHMgbGFiZWwgd2l0aG91dCBlbmFibGluZyBuYXRpdmUgYHJlcXVpcmVkYCB2YWxpZGF0aW9uICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBzaG93UmVxdWlyZWQ/O1xuXG4gICAgLyoqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgd2l0aGluIHRoZSBmb3JtIGNvbnRyb2wgbWl4aW4gKi9cbiAgICBAcXVlcnkoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpIHZhbGlkYXRpb25UYXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoZSBlbGVtZW50J3Mgc3RhdGUgaXMgYWJvdXQgdG8gY2hhbmdlLiBJZiBkZWZhdWx0IGlzIHByZXZlbnRlZCwgaXQgd2lsbCByZXZlcnQgdGhlIGNoZWNrYm94IHRvIGl0J3Mgb3JpZ2luYWwgY2hlY2tlZCBzdGF0ZSBwcmlvciB0byBzZWxlY3RpbmcuICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF93aWxsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TXRlQ2hlY2tib3hDaGFuZ2VEZXRhaWw+O1xuXG4gICAgLyoqIEVtaXR0ZWQgd2hlbiB0aGUgZWxlbWVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkLiAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxNdGVDaGVja2JveENoYW5nZURldGFpbD47XG5cbiAgICAvKiogRW1pdHMgd2hlbiB0aGlzIGVsZW1lbnQgaXMgZm9jdXNlZCAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25Gb2N1czogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIEVtaXRzIHdoZW4gdGhpcyBlbGVtZW50IGxvc2VzIGZvY3VzICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkJsdXI6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBvblVwZGF0ZSgnZGVmYXVsdENoZWNrZWQnKVxuICAgIHByb3RlY3RlZCBvbkRlZmF1bHRDaGVja2VkQ2hhbmdlKCkge1xuICAgICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkICYmIHRoaXMuZGVmYXVsdENoZWNrZWQgJiYgIXRoaXMuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBvblVwZGF0ZShbJ3ZhbHVlJywgJ2NoZWNrZWQnXSwgeyBvbjogJ2JvdGgnIH0pXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBAb25VcGRhdGUoJ2FyaWFMYWJlbCcsIHsgb246ICdib3RoJyB9KVxuICAgIHByb3RlY3RlZCB1cGRhdGVMYWJlbCgpIHtcbiAgICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IHtcbiAgICAgICAgLi4udGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzLFxuICAgICAgICBhcmlhTGFiZWw6IHRoaXMuYXJpYUxhYmVsLFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogLS0gRm9ybSBjb250cm9sIHZhbGlkYXRpb24gb3ZlcnJpZGVzIC0tICovXG4gICAgc2hvdWxkRm9ybVZhbHVlVXBkYXRlKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRGb3JtQ29udHJvbCgpOiB2b2lkIHtcbiAgICAgIHN1cGVyLnJlc2V0Rm9ybUNvbnRyb2w/LigpO1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMuZGVmYXVsdENoZWNrZWQ7XG4gICAgfVxuXG4gICAgdmFsaWRpdHlDYWxsYmFjaygpOiBzdHJpbmcgfCB2b2lkIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9yIHx8IHRoaXMudmFsaWRhdGlvblRhcmdldD8udmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgfVxuXG4gICAgLyoqIC0tIFRhYkluZGV4IG92ZXJyaWRlcyAtLSAqL1xuICAgIGdldFRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICBzZXRUYWJJbmRleEFkYXB0ZXIodmFsdWU6IHN0cmluZykge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm90UHJldmVudGVkID0gdGhpcy5fd2lsbENoYW5nZS5lbWl0KFxuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIGNoZWNrZWQ6ICF0aGlzLmNoZWNrZWQsXG4gICAgICAgIH0sXG4gICAgICAgIHsgY2FuY2VsYWJsZTogdHJ1ZSB9XG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5jb250cm9sbGVkKSB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBjaGVja2VkOiAhdGhpcy5jaGVja2VkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG5vdFByZXZlbnRlZCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgY2hlY2tlZDogdGhpcy5jaGVja2VkLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5fb25CbHVyLmVtaXQoKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9vbkZvY3VzLmVtaXQoKTtcbiAgICB9O1xuXG4gICAgLyoqIENsaWNrcyB0aGUgZWxlbWVudCAqL1xuICAgIHB1YmxpYyBjbGljaygpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblRhcmdldC5jbGljaygpO1xuICAgIH1cblxuICAgIC8qKiBGb2N1c2VzIHRoZSBlbGVtZW50ICovXG4gICAgcHVibGljIGZvY3VzKCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqIEJsdXJzIHRoZSBlbGVtZW50ICovXG4gICAgcHVibGljIGJsdXIoKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBDaGVja2JveEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8XG4gICAgQ2hlY2tib3hJbnRlcmZhY2UgJiBUYWJJbmRleEludGVyZmFjZSAmIEZvcm1Db250cm9sSW50ZXJmYWNlICYgRGlzYWJsZWRJbnRlcmZhY2VcbiAgPiAmXG4gICAgVDtcbn07XG4iLCAiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgdGhlIFdlYWtNYXBzIHVzZWQgdGhyb3VnaG91dCB0aGlzIHByb2plY3QuIFRoZSBXZWFrTWFwcyBleGlzdCB0byB0aWVcbiAqIG9iamVjdHMgdG9nZXRoZXIgd2l0aG91dCBwb2xsdXRpbmcgdGhlIG9iamVjdHMgdGhlbXNlbHZlcyB3aXRoIHJlZmVyZW5jZXMgd2UnZCByYXRoZXIga2VlcFxuICogaGlkZGVuLiBUaGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gd29yayBhcyB0cmFuc3BhcmVudGx5IGFzIHBvc3NpYmxlLlxuICovXG5pbXBvcnQgeyBJRWxlbWVudEludGVybmFscywgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqIFVzZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBpdCBpcyBhdHRhY2hlZCB0byAqL1xuZXhwb3J0IGNvbnN0IHJlZk1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBJQ3VzdG9tRWxlbWVudD4oKTtcblxuLyoqIFVzZWUgYW4gRWxlbWVudHNJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGl0cyBWYWxpZGl0eVN0YXRlIG9iamVjdCAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkaXR5TWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIFZhbGlkaXR5U3RhdGU+KCk7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgaXRzIGF0dGFjaGVkIGlucHV0W3R5cGU9XCJoaWRkZW5cIl0gKi9cbmV4cG9ydCBjb25zdCBoaWRkZW5JbnB1dE1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBIVE1MSW5wdXRFbGVtZW50W10+KCk7XG5cbi8qKiBVc2UgYSBjdXN0b20gZWxlbWVudCB0byBnZXQgaXRzIGF0dGFjaGVkIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgKi9cbmV4cG9ydCBjb25zdCBpbnRlcm5hbHNNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHM+KCk7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgdGhlIGF0dGFjaGVkIHZhbGlkYXRpb24gbWVzc2FnZSAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25NZXNzYWdlTWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIHN0cmluZz4oKTtcblxuLyoqIFVzZSBhIGZvcm0gZWxlbWVudCB0byBnZXQgYXR0YWNoZWQgY3VzdG9tIGVsZW1lbnRzIGFuZCBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlcyAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmV4cG9ydCBjb25zdCBmb3Jtc01hcCA9IG5ldyBXZWFrTWFwPEhUTUxGb3JtRWxlbWVudCwgT2JqZWN0PigpO1xuXG4vKiogVXNlIGEgY3VzdG9tIGVsZW1lbnQgb3Igb3RoZXIgb2JqZWN0IHRvIGdldCB0aGVpciBhc3NvY2lhdGVkIE11dGF0aW9uT2JzZXJ2ZXJzICovXG5leHBvcnQgY29uc3Qgc2hhZG93SG9zdHNNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgTXV0YXRpb25PYnNlcnZlcj4oKTtcblxuLyoqIFVzZSBhIGZvcm0gZWxlbWVudCB0byBnZXQgYSBzZXQgb2YgYXR0YWNoZWQgY3VzdG9tIGVsZW1lbnRzICovXG5leHBvcnQgY29uc3QgZm9ybUVsZW1lbnRzTWFwID0gbmV3IFdlYWtNYXA8SFRNTEZvcm1FbGVtZW50LCBTZXQ8SUN1c3RvbUVsZW1lbnQ+PigpO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIGFuIGVsZW1lbnQncyB2YWx1ZSAqL1xuZXhwb3J0IGNvbnN0IHJlZlZhbHVlTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIGFueT4oKTtcblxuLyoqIEVsZW1lbnRzIHRoYXQgbmVlZCB0byBiZSB1cGdyYWRlZCBvbmNlIGFkZGVkIHRvIHRoZSBET00gKi9cbmV4cG9ydCBjb25zdCB1cGdyYWRlTWFwID0gbmV3IFdlYWtNYXA8RWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHM+KCk7XG5cbi8qKiBTYXZlIHJlZmVyZW5jZXMgdG8gc2hhZG93IHJvb3RzIGZvciBpbmNsdXNpb24gaW4gaW50ZXJuYWxzIGluc3RhbmNlICovXG5leHBvcnQgY29uc3Qgc2hhZG93Um9vdE1hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBTaGFkb3dSb290PigpO1xuXG4vKiogU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgaW50ZXJuYWxzJyB2YWxpZGF0aW9uIGFuY2hvciAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25BbmNob3JNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgSFRNTEVsZW1lbnQ+KCk7XG5cbi8qKiBNYXAgRG9jdW1lbnRGcmFnbWVudHMgdG8gdGhlaXIgTXV0YXRpb25PYnNlcnZlcnMgc28gd2UgY2FuIGRpc2Nvbm5lY3Qgb25jZSBlbGVtZW50cyBhcmUgcmVtb3ZlZCAqL1xuZXhwb3J0IGNvbnN0IGRvY3VtZW50RnJhZ21lbnRNYXAgPSBuZXcgV2Vha01hcDxEb2N1bWVudEZyYWdtZW50LCBNdXRhdGlvbk9ic2VydmVyPigpO1xuXG4vKiogV2hldGhlciBjb25uZWN0ZWRDYWxsYmFjayBoYXMgYWxyZWFkeSBiZWVuIGNhbGxlZC4gKi9cbmV4cG9ydCBjb25zdCBjb25uZWN0ZWRDYWxsYmFja01hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBib29sZWFuPigpO1xuXG4vKiogU2F2ZSBhIHJlZmVyZW5jZSB0byB2YWxpZGl0eSBzdGF0ZSBmb3IgZWxlbWVudHMgdGhhdCBuZWVkIHRvIHVwZ3JhZGUgYWZ0ZXIgYmVpbmcgY29ubmVjdGVkICovXG5leHBvcnQgY29uc3QgdmFsaWRpdHlVcGdyYWRlTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzPigpO1xuIiwgImltcG9ydCB7IHVwZ3JhZGVNYXAgfSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHsgSUFvbSwgSUVsZW1lbnRJbnRlcm5hbHMgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuZXhwb3J0IGNvbnN0IGFvbTogSUFvbSA9IHtcbiAgYXJpYUF0b21pYzogJ2FyaWEtYXRvbWljJyxcbiAgYXJpYUF1dG9Db21wbGV0ZTogJ2FyaWEtYXV0b2NvbXBsZXRlJyxcbiAgYXJpYUJ1c3k6ICdhcmlhLWJ1c3knLFxuICBhcmlhQ2hlY2tlZDogJ2FyaWEtY2hlY2tlZCcsXG4gIGFyaWFDb2xDb3VudDogJ2FyaWEtY29sY291bnQnLFxuICBhcmlhQ29sSW5kZXg6ICdhcmlhLWNvbGluZGV4JyxcbiAgYXJpYUNvbEluZGV4VGV4dDogJ2FyaWEtY29saW5kZXh0ZXh0JyxcbiAgYXJpYUNvbFNwYW46ICdhcmlhLWNvbHNwYW4nLFxuICBhcmlhQ3VycmVudDogJ2FyaWEtY3VycmVudCcsXG4gIGFyaWFEaXNhYmxlZDogJ2FyaWEtZGlzYWJsZWQnLFxuICBhcmlhRXhwYW5kZWQ6ICdhcmlhLWV4cGFuZGVkJyxcbiAgYXJpYUhhc1BvcHVwOiAnYXJpYS1oYXNwb3B1cCcsXG4gIGFyaWFIaWRkZW46ICdhcmlhLWhpZGRlbicsXG4gIGFyaWFJbnZhbGlkOiAnYXJpYS1pbnZhbGlkJyxcbiAgYXJpYUtleVNob3J0Y3V0czogJ2FyaWEta2V5c2hvcnRjdXRzJyxcbiAgYXJpYUxhYmVsOiAnYXJpYS1sYWJlbCcsXG4gIGFyaWFMZXZlbDogJ2FyaWEtbGV2ZWwnLFxuICBhcmlhTGl2ZTogJ2FyaWEtbGl2ZScsXG4gIGFyaWFNb2RhbDogJ2FyaWEtbW9kYWwnLFxuICBhcmlhTXVsdGlMaW5lOiAnYXJpYS1tdWx0aWxpbmUnLFxuICBhcmlhTXVsdGlTZWxlY3RhYmxlOiAnYXJpYS1tdWx0aXNlbGVjdGFibGUnLFxuICBhcmlhT3JpZW50YXRpb246ICdhcmlhLW9yaWVudGF0aW9uJyxcbiAgYXJpYVBsYWNlaG9sZGVyOiAnYXJpYS1wbGFjZWhvbGRlcicsXG4gIGFyaWFQb3NJblNldDogJ2FyaWEtcG9zaW5zZXQnLFxuICBhcmlhUHJlc3NlZDogJ2FyaWEtcHJlc3NlZCcsXG4gIGFyaWFSZWFkT25seTogJ2FyaWEtcmVhZG9ubHknLFxuICBhcmlhUmVsZXZhbnQ6ICdhcmlhLXJlbGV2YW50JyxcbiAgYXJpYVJlcXVpcmVkOiAnYXJpYS1yZXF1aXJlZCcsXG4gIGFyaWFSb2xlRGVzY3JpcHRpb246ICdhcmlhLXJvbGVkZXNjcmlwdGlvbicsXG4gIGFyaWFSb3dDb3VudDogJ2FyaWEtcm93Y291bnQnLFxuICBhcmlhUm93SW5kZXg6ICdhcmlhLXJvd2luZGV4JyxcbiAgYXJpYVJvd0luZGV4VGV4dDogJ2FyaWEtcm93aW5kZXh0ZXh0JyxcbiAgYXJpYVJvd1NwYW46ICdhcmlhLXJvd3NwYW4nLFxuICBhcmlhU2VsZWN0ZWQ6ICdhcmlhLXNlbGVjdGVkJyxcbiAgYXJpYVNldFNpemU6ICdhcmlhLXNldHNpemUnLFxuICBhcmlhU29ydDogJ2FyaWEtc29ydCcsXG4gIGFyaWFWYWx1ZU1heDogJ2FyaWEtdmFsdWVtYXgnLFxuICBhcmlhVmFsdWVNaW46ICdhcmlhLXZhbHVlbWluJyxcbiAgYXJpYVZhbHVlTm93OiAnYXJpYS12YWx1ZW5vdycsXG4gIGFyaWFWYWx1ZVRleHQ6ICdhcmlhLXZhbHVldGV4dCcsXG4gIHJvbGU6ICdyb2xlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0QW9tID0gKHJlZjogRWxlbWVudCwgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscykgPT4ge1xuICBmb3IgKGxldCBrZXkgaW4gYW9tKSB7XG4gICAgaW50ZXJuYWxzW2tleV0gPSBudWxsO1xuXG4gICAgbGV0IGNsb3N1cmVWYWx1ZSA9IG51bGw7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGFvbVtrZXldO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnRlcm5hbHMsIGtleSwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gY2xvc3VyZVZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICBjbG9zdXJlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgIHJlZi5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVwZ3JhZGVNYXAuc2V0KHJlZiwgaW50ZXJuYWxzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufTtcbiIsICJpbXBvcnQge1xuICBpbnRlcm5hbHNNYXAsXG4gIHNoYWRvd0hvc3RzTWFwLFxuICB1cGdyYWRlTWFwLFxuICBoaWRkZW5JbnB1dE1hcCxcbiAgZG9jdW1lbnRGcmFnbWVudE1hcCxcbiAgZm9ybUVsZW1lbnRzTWFwLFxuICB2YWxpZGl0eVVwZ3JhZGVNYXAsXG4gIHJlZlZhbHVlTWFwLFxufSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHsgYW9tIH0gZnJvbSAnLi9hb20uanMnO1xuaW1wb3J0IHtcbiAgcmVtb3ZlSGlkZGVuSW5wdXRzLFxuICBpbml0Rm9ybSxcbiAgaW5pdExhYmVscyxcbiAgdXBncmFkZUludGVybmFscyxcbiAgc2V0RGlzYWJsZWQsXG4gIG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuZnVuY3Rpb24gaW5pdE5vZGUobm9kZTogSUN1c3RvbUVsZW1lbnQpOiB2b2lkIHtcbiAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChub2RlKTtcbiAgY29uc3QgeyBmb3JtIH0gPSBpbnRlcm5hbHM7XG4gIGluaXRGb3JtKG5vZGUsIGZvcm0sIGludGVybmFscyk7XG4gIGluaXRMYWJlbHMobm9kZSwgaW50ZXJuYWxzLmxhYmVscyk7XG59XG5cbi8qKlxuICogSWYgYSBmaWVsZHNldCdzIGRpc2FibGVkIHN0YXRlIGlzIHRvZ2dsZWQsIHRoZSBmb3JtRGlzYWJsZWRDYWxsYmFja1xuICogb24gYW55IGNoaWxkIGZvcm0tYXNzb2NpYXRlZCBjdXNvdG0gZWxlbWVudHMuXG4gKi9cbmV4cG9ydCBjb25zdCB3YWxrRmllbGRzZXQgPSAobm9kZTogSFRNTEZpZWxkU2V0RWxlbWVudCwgZmlyc3RSZW5kZXIgPSBmYWxzZSk6IHZvaWQgPT4ge1xuICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKG5vZGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCB7XG4gICAgYWNjZXB0Tm9kZShub2RlOiBJQ3VzdG9tRWxlbWVudCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gaW50ZXJuYWxzTWFwLmhhcyhub2RlKSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVA7XG4gICAgfSxcbiAgfSk7XG5cbiAgbGV0IGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcbiAgLyoqXG4gICAqIFdlIGRvbid0IG5lZWQgdG8gY2FsbCBhbnl0aGluZyBvbiBmaXJzdCByZW5kZXIgaWZcbiAgICogdGhlIGVsZW1lbnQgaXNuJ3QgZGlzYWJsZWRcbiAgICovXG4gIGNvbnN0IGlzQ2FsbE5lY2Vzc2FyeSA9ICFmaXJzdFJlbmRlciB8fCBub2RlLmRpc2FibGVkO1xuXG4gIHdoaWxlIChjdXJyZW50KSB7XG4gICAgaWYgKGN1cnJlbnQuZm9ybURpc2FibGVkQ2FsbGJhY2sgJiYgaXNDYWxsTmVjZXNzYXJ5KSB7XG4gICAgICBzZXREaXNhYmxlZChjdXJyZW50LCBub2RlLmRpc2FibGVkKTtcbiAgICB9XG4gICAgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZzogTXV0YXRpb25PYnNlcnZlckluaXQgPSB7XG4gIGF0dHJpYnV0ZXM6IHRydWUsXG4gIGF0dHJpYnV0ZUZpbHRlcjogWydkaXNhYmxlZCcsICduYW1lJ10sXG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRPck5hbWVPYnNlcnZlciA9IG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKVxuICA/IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnNMaXN0OiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0IGFzIElDdXN0b21FbGVtZW50O1xuXG4gICAgICAgIC8qKiBNYW5hZ2UgY2hhbmdlcyB0byB0aGUgcmVmJ3MgZGlzYWJsZWQgc3RhdGUgKi9cbiAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0LmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICAgICAgICBzZXREaXNhYmxlZCh0YXJnZXQsIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmxvY2FsTmFtZSA9PT0gJ2ZpZWxkc2V0Jykge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXB1cnBvc2UgdGhlIG9ic2VydmVyIGZvciBmaWVsZHNldHMgd2hpY2ggbmVlZFxuICAgICAgICAgICAgICogdG8gYmUgd2Fsa2VkIHdoZW5ldmVyIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgaXMgc2V0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHdhbGtGaWVsZHNldCh0YXJnZXQgYXMgdW5rbm93biBhcyBIVE1MRmllbGRTZXRFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqIE1hbmFnZSBjaGFuZ2VzIHRvIHRoZSByZWYncyBuYW1lICovXG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnbmFtZScpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0LmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlZlZhbHVlTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgaW50ZXJuYWxzLnNldEZvcm1WYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgOiAoe30gYXMgTXV0YXRpb25PYnNlcnZlcik7XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlckNhbGxiYWNrKG11dGF0aW9uTGlzdDogTXV0YXRpb25SZWNvcmRbXSkge1xuICBtdXRhdGlvbkxpc3QuZm9yRWFjaCgobXV0YXRpb25SZWNvcmQpID0+IHtcbiAgICBjb25zdCB7IGFkZGVkTm9kZXMsIHJlbW92ZWROb2RlcyB9ID0gbXV0YXRpb25SZWNvcmQ7XG4gICAgY29uc3QgYWRkZWQgPSBBcnJheS5mcm9tKGFkZGVkTm9kZXMpIGFzIElDdXN0b21FbGVtZW50W107XG4gICAgY29uc3QgcmVtb3ZlZCA9IEFycmF5LmZyb20ocmVtb3ZlZE5vZGVzKSBhcyBJQ3VzdG9tRWxlbWVudFtdO1xuXG4gICAgYWRkZWQuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgLyoqIEFsbG93cyBmb3IgZHluYW1pYyBhZGRpdGlvbiBvZiBlbGVtZW50cyB0byBmb3JtcyAqL1xuICAgICAgaWYgKGludGVybmFsc01hcC5oYXMobm9kZSkgJiYgbm9kZS5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgICBpbml0Tm9kZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgLyoqIFVwZ3JhZGUgdGhlIGFjY2Vzc2liaWxpdHkgaW5mb3JtYXRpb24gb24gYW55IHByZXZpb3VzbHkgY29ubmVjdGVkICovXG4gICAgICBpZiAodXBncmFkZU1hcC5oYXMobm9kZSkpIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gdXBncmFkZU1hcC5nZXQobm9kZSk7XG4gICAgICAgIGNvbnN0IGFvbUtleXMgPSBPYmplY3Qua2V5cyhhb20pO1xuICAgICAgICBhb21LZXlzXG4gICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBpbnRlcm5hbHNba2V5XSAhPT0gbnVsbClcbiAgICAgICAgICAuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhb21ba2V5XSwgaW50ZXJuYWxzW2tleV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB1cGdyYWRlTWFwLmRlbGV0ZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgLyoqIFVwZ3JhZGUgdGhlIHZhbGlkaXR5IHN0YXRlIHdoZW4gdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkICovXG4gICAgICBpZiAodmFsaWRpdHlVcGdyYWRlTWFwLmhhcyhub2RlKSkge1xuICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSB2YWxpZGl0eVVwZ3JhZGVNYXAuZ2V0KG5vZGUpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgaW50ZXJuYWxzLnZhbGlkaXR5LnZhbGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnaW50ZXJuYWxzLWludmFsaWQnLCAoIWludGVybmFscy52YWxpZGl0eS52YWxpZCkudG9TdHJpbmcoKSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCAoIWludGVybmFscy52YWxpZGl0eS52YWxpZCkudG9TdHJpbmcoKSk7XG4gICAgICAgIHZhbGlkaXR5VXBncmFkZU1hcC5kZWxldGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKiBJZiB0aGUgbm9kZSB0aGF0J3MgYWRkZWQgaXMgYSBmb3JtLCBjaGVjayB0aGUgdmFsaWRpdHkgKi9cbiAgICAgIGlmIChub2RlLmxvY2FsTmFtZSA9PT0gJ2Zvcm0nKSB7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQobm9kZSBhcyB1bmtub3duIGFzIEhUTUxGb3JtRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIobm9kZSwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIHtcbiAgICAgICAgICBhY2NlcHROb2RlKG5vZGU6IElDdXN0b21FbGVtZW50KTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBpbnRlcm5hbHNNYXAuaGFzKG5vZGUpICYmICEoZm9ybUVsZW1lbnRzICYmIGZvcm1FbGVtZW50cy5oYXMobm9kZSkpXG4gICAgICAgICAgICAgID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUXG4gICAgICAgICAgICAgIDogTm9kZUZpbHRlci5GSUxURVJfU0tJUDtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgaW5pdE5vZGUoY3VycmVudCk7XG4gICAgICAgICAgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmxvY2FsTmFtZSA9PT0gJ2ZpZWxkc2V0Jykge1xuICAgICAgICBkaXNhYmxlZE9yTmFtZU9ic2VydmVyLm9ic2VydmU/Lihub2RlLCBkaXNhYmxlZE9yTmFtZU9ic2VydmVyQ29uZmlnKTtcbiAgICAgICAgd2Fsa0ZpZWxkc2V0KG5vZGUgYXMgdW5rbm93biBhcyBIVE1MRmllbGRTZXRFbGVtZW50LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlbW92ZWQuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChub2RlKTtcbiAgICAgIC8qKiBDbGVhbiB1cCBhbnkgaGlkZGVuIGlucHV0IGVsZW1lbnRzIGxlZnQgYWZ0ZXIgYW4gZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQgKi9cbiAgICAgIGlmIChpbnRlcm5hbHMgJiYgaGlkZGVuSW5wdXRNYXAuZ2V0KGludGVybmFscykpIHtcbiAgICAgICAgcmVtb3ZlSGlkZGVuSW5wdXRzKGludGVybmFscyk7XG4gICAgICB9XG4gICAgICAvKiogRGlzY29ubmVjdCBhbnkgdW5uZWVkZWQgTXV0YXRpb25PYnNlcnZlcnMgKi9cbiAgICAgIGlmIChzaGFkb3dIb3N0c01hcC5oYXMobm9kZSkpIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBzaGFkb3dIb3N0c01hcC5nZXQobm9kZSk7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhpcyBvYnNlcnZlciBjYWxsYmFjayBpcyBqdXN0IGZvciBkb2N1bWVudCBmcmFnbWVudHNcbiAqIGl0IHdpbGwgdXBncmFkZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIGlmIHdhcyBhcHBlbmRlZFxuICogZnJvbSBhIGRvY3VtZW50IGZyYWdtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJhZ21lbnRPYnNlcnZlckNhbGxiYWNrKG11dGF0aW9uTGlzdDogTXV0YXRpb25SZWNvcmRbXSk6IHZvaWQge1xuICBtdXRhdGlvbkxpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICBjb25zdCB7IHJlbW92ZWROb2RlcyB9ID0gbXV0YXRpb247XG5cbiAgICByZW1vdmVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBkb2N1bWVudEZyYWdtZW50TWFwLmdldChtdXRhdGlvbi50YXJnZXQgYXMgRG9jdW1lbnRGcmFnbWVudCk7XG4gICAgICBpZiAoaW50ZXJuYWxzTWFwLmhhcyhub2RlIGFzIElDdXN0b21FbGVtZW50KSkge1xuICAgICAgICB1cGdyYWRlSW50ZXJuYWxzKG5vZGUgYXMgSUN1c3RvbUVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBEZWZlciB0aGUgdXBncmFkZSBvZiBub2RlcyB3aXRoaW5nIGEgRG9jdW1lbnRGcmFnbWVudFxuICogQHBhcmFtIGZyYWdtZW50IHtEb2N1bWVudEZyYWdtZW50fVxuICovXG5leHBvcnQgY29uc3QgZGVmZXJVcGdyYWRlID0gKGZyYWdtZW50OiBEb2N1bWVudEZyYWdtZW50KSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnJhZ21lbnRPYnNlcnZlckNhbGxiYWNrKTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZT8uKGZyYWdtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgZG9jdW1lbnRGcmFnbWVudE1hcC5zZXQoZnJhZ21lbnQsIG9ic2VydmVyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvYnNlcnZlciA9IG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKVxuICA/IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spXG4gIDogKHt9IGFzIE11dGF0aW9uT2JzZXJ2ZXIpO1xuZXhwb3J0IGNvbnN0IG9ic2VydmVyQ29uZmlnOiBNdXRhdGlvbk9ic2VydmVySW5pdCA9IHtcbiAgY2hpbGRMaXN0OiB0cnVlLFxuICBzdWJ0cmVlOiB0cnVlLFxufTtcbiIsICJpbXBvcnQgeyBoaWRkZW5JbnB1dE1hcCwgZm9ybXNNYXAsIGZvcm1FbGVtZW50c01hcCwgaW50ZXJuYWxzTWFwIH0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIsIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWcgfSBmcm9tICcuL211dGF0aW9uLW9ic2VydmVycy5qcyc7XG5pbXBvcnQgeyBJQ3VzdG9tRWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHMsIExhYmVsc0xpc3QgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuLyoqXG4gKiBUb2dnbGUncyB0aGUgZGlzYWJsZWQgc3RhdGUgKGF0dHJpYnV0ZXMgJiBjYWxsYmFjaykgb24gdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSBjdXN0b20gZWxlbWVudCBpbnN0YW5jZVxuICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZCAtIFRoZSBkaXNhYmxlZCBzdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgc2V0RGlzYWJsZWQgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLWRpc2FibGVkJywgZGlzYWJsZWQpO1xuXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIHJlZi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICB9IGVsc2Uge1xuICAgIHJlZi5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKTtcbiAgfVxuXG4gIGlmIChyZWYuZm9ybURpc2FibGVkQ2FsbGJhY2spIHtcbiAgICByZWYuZm9ybURpc2FibGVkQ2FsbGJhY2suYXBwbHkocmVmLCBbZGlzYWJsZWRdKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBoaWRkZW4gaW5wdXRzIGZvciB0aGUgZ2l2ZW4gZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUhpZGRlbklucHV0cyA9IChpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzKTogdm9pZCA9PiB7XG4gIGNvbnN0IGhpZGRlbklucHV0cyA9IGhpZGRlbklucHV0TWFwLmdldChpbnRlcm5hbHMpO1xuICBoaWRkZW5JbnB1dHMuZm9yRWFjaCgoaGlkZGVuSW5wdXQpID0+IHtcbiAgICBoaWRkZW5JbnB1dC5yZW1vdmUoKTtcbiAgfSk7XG4gIGhpZGRlbklucHV0TWFwLnNldChpbnRlcm5hbHMsIFtdKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhpZGRlbiBpbnB1dCBmb3IgdGhlIGdpdmVuIHJlZlxuICogQHBhcmFtIHtJQ3VzdG9tRWxlbWVudH0gcmVmIC0gVGhlIGVsZW1lbnQgdG8gd2F0Y2hcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZSBmb3IgdGhlIHJlZlxuICogQHJldHVybiB7SFRNTElucHV0RWxlbWVudH0gVGhlIGhpZGRlbiBpbnB1dFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlSGlkZGVuSW5wdXQgPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHNcbik6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gJ2hpZGRlbic7XG4gIGlucHV0Lm5hbWUgPSByZWYuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gIHJlZi5hZnRlcihpbnB1dCk7XG4gIGhpZGRlbklucHV0TWFwLmdldChpbnRlcm5hbHMpLnB1c2goaW5wdXQpO1xuICByZXR1cm4gaW5wdXQ7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSByZWYgYnkgc2V0dGluZyB1cCBhbiBhdHRyaWJ1dGUgb2JzZXJ2ZSBvbiBpdFxuICogbG9va2luZyBmb3IgY2hhbmdlcyB0byBkaXNhYmxlZFxuICogQHBhcmFtIHtJQ3VzdG9tRWxlbWVudH0gcmVmIC0gVGhlIGVsZW1lbnQgdG8gd2F0Y2hcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZSBmb3IgdGhlIHJlZlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRSZWYgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscyk6IHZvaWQgPT4ge1xuICBoaWRkZW5JbnB1dE1hcC5zZXQoaW50ZXJuYWxzLCBbXSk7XG4gIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIub2JzZXJ2ZT8uKHJlZiwgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZyk7XG59O1xuXG4vKipcbiAqIFNldCB1cCBsYWJlbHMgZm9yIHRoZSByZWZcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSByZWYgdG8gYWRkIGxhYmVscyB0b1xuICogQHBhcmFtIHtMYWJlbHNMaXN0fSBsYWJlbHMgLSBBIGxpc3Qgb2YgdGhlIGxhYmVsc1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRMYWJlbHMgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgbGFiZWxzOiBMYWJlbHNMaXN0KTogdm9pZCA9PiB7XG4gIGlmIChsYWJlbHMubGVuZ3RoKSB7XG4gICAgQXJyYXkuZnJvbShsYWJlbHMpLmZvckVhY2goKGxhYmVsKSA9PiBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlZi5jbGljay5iaW5kKHJlZikpKTtcbiAgICBsZXQgZmlyc3RMYWJlbElkID0gbGFiZWxzWzBdLmlkO1xuICAgIGlmICghbGFiZWxzWzBdLmlkKSB7XG4gICAgICBmaXJzdExhYmVsSWQgPSBgJHtsYWJlbHNbMF0uaHRtbEZvcn1fTGFiZWxgO1xuICAgICAgbGFiZWxzWzBdLmlkID0gZmlyc3RMYWJlbElkO1xuICAgIH1cbiAgICByZWYuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBmaXJzdExhYmVsSWQpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGludGVybmFscy12YWxpZCBhbmQgaW50ZXJuYWxzLWludmFsaWQgYXR0cmlidXRlc1xuICogYmFzZWQgb24gZm9ybSB2YWxpZGl0eS5cbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSAtIFRoZSB0YXJnZXQgZm9ybVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHNldEZvcm1WYWxpZGl0eSA9IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgY29uc3QgbmF0aXZlQ29udHJvbFZhbGlkaXR5ID0gQXJyYXkuZnJvbShmb3JtLmVsZW1lbnRzKVxuICAgIC5maWx0ZXIoXG4gICAgICAoZWxlbWVudDogRWxlbWVudCAmIHsgdmFsaWRpdHk6IFZhbGlkaXR5U3RhdGUgfSkgPT5cbiAgICAgICAgIWVsZW1lbnQudGFnTmFtZS5pbmNsdWRlcygnLScpICYmIGVsZW1lbnQudmFsaWRpdHlcbiAgICApXG4gICAgLm1hcCgoZWxlbWVudDogRWxlbWVudCAmIHsgdmFsaWRpdHk6IFZhbGlkaXR5U3RhdGUgfSkgPT4gZWxlbWVudC52YWxpZGl0eS52YWxpZCk7XG4gIGNvbnN0IHBvbHlmaWxsZWRFbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSkgfHwgW107XG4gIGNvbnN0IHBvbHlmaWxsZWRWYWxpZGl0eSA9IEFycmF5LmZyb20ocG9seWZpbGxlZEVsZW1lbnRzKVxuICAgIC5maWx0ZXIoKGNvbnRyb2wpID0+IGNvbnRyb2wuaXNDb25uZWN0ZWQpXG4gICAgLm1hcCgoY29udHJvbDogSUN1c3RvbUVsZW1lbnQpID0+IGludGVybmFsc01hcC5nZXQoY29udHJvbCkudmFsaWRpdHkudmFsaWQpO1xuICBjb25zdCBoYXNJbnZhbGlkID0gWy4uLm5hdGl2ZUNvbnRyb2xWYWxpZGl0eSwgLi4ucG9seWZpbGxlZFZhbGlkaXR5XS5pbmNsdWRlcyhmYWxzZSk7XG4gIGZvcm0udG9nZ2xlQXR0cmlidXRlKCdpbnRlcm5hbHMtaW52YWxpZCcsIGhhc0ludmFsaWQpO1xuICBmb3JtLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgIWhhc0ludmFsaWQpO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gaW5wdXQgY2FsbGJhY2suIFVwZGF0ZXMgdGhlIGZvcm0ncyB2YWxpZGl0eVxuICogYXR0cmlidXRlcyBvbiBpbnB1dC5cbiAqIEBwYXJhbSB7RXZlbnR9IC0gVGhlIGZvcm0gaW5wdXQgZXZlbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtSW5wdXRDYWxsYmFjayA9IChldmVudDogRXZlbnQpID0+IHtcbiAgc2V0Rm9ybVZhbGlkaXR5KGZpbmRQYXJlbnRGb3JtKGV2ZW50LnRhcmdldCkpO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gY2hhbmdlIGNhbGxiYWNrLiBVcGRhdGVzIHRoZSBmb3JtJ3MgdmFsaWRpdHlcbiAqIGF0dHJpYnV0ZXMgb24gY2hhbmdlLlxuICogQHBhcmFtIHtFdmVudH0gLSBUaGUgZm9ybSBjaGFuZ2UgZXZlbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtQ2hhbmdlQ2FsbGJhY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIHNldEZvcm1WYWxpZGl0eShmaW5kUGFyZW50Rm9ybShldmVudC50YXJnZXQpKTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIHN1Ym1pdCBjYWxsYmFjay4gV2UgbmVlZCB0byBjYW5jZWwgYW55IHN1Ym1pc3Npb25cbiAqIGlmIGEgbmVzdGVkIGludGVybmFscyBpcyBpbnZhbGlkLlxuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IC0gVGhlIGZvcm0gZWxlbWVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHdpcmVTdWJtaXRMb2dpYyA9IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgY29uc3QgU1VCTUlUX0JVVFRPTl9TRUxFQ1RPUiA9XG4gICAgJzppcyhidXR0b25bdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGJ1dHRvbjpub3QoW3R5cGVdKSk6bm90KFtkaXNhYmxlZF0pJztcbiAgbGV0IHN1Ym1pdEJ1dHRvblNlbGVjdG9yID0gYCR7U1VCTUlUX0JVVFRPTl9TRUxFQ1RPUn06bm90KFtmb3JtXSlgO1xuXG4gIGlmIChmb3JtLmlkKSB7XG4gICAgc3VibWl0QnV0dG9uU2VsZWN0b3IgKz0gYCwke1NVQk1JVF9CVVRUT05fU0VMRUNUT1J9W2Zvcm09JyR7Zm9ybS5pZH0nXWA7XG4gIH1cblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgaWYgKHRhcmdldC5jbG9zZXN0KHN1Ym1pdEJ1dHRvblNlbGVjdG9yKSkge1xuICAgICAgLy8gdmFsaWRhdGVcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChmb3JtKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGlzIGZvcm0gZG9lcyBub3QgdmFsaWRhdGUgdGhlbiB3ZSdyZSBkb25lXG4gICAgICAgKi9cbiAgICAgIGlmIChmb3JtLm5vVmFsaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvKiogSWYgdGhlIFNldCBoYXMgaXRlbXMsIGNvbnRpbnVlICovXG4gICAgICBpZiAoZWxlbWVudHMuc2l6ZSkge1xuICAgICAgICBjb25zdCBub2RlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpO1xuICAgICAgICAvKiogQ2hlY2sgdGhlIGludGVybmFscy5jaGVja1ZhbGlkaXR5KCkgb2YgYWxsIG5vZGVzICovXG4gICAgICAgIGNvbnN0IHZhbGlkaXR5TGlzdCA9IG5vZGVzLnJldmVyc2UoKS5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KG5vZGUpO1xuICAgICAgICAgIHJldHVybiBpbnRlcm5hbHMucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqIElmIGFueSBub2RlIGlzIGZhbHNlLCBzdG9wIHRoZSBldmVudCAqL1xuICAgICAgICBpZiAodmFsaWRpdHlMaXN0LmluY2x1ZGVzKGZhbHNlKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gcmVzZXQgY2FsbGJhY2suIFRoaXMgd2lsbCBsb29wIG92ZXIgYWRkZWRcbiAqIGlucHV0cyBhbmQgY2FsbCBmb3JtUmVzZXRDYWxsYmFjayBpZiBhcHBsaWNhYmxlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZm9ybVJlc2V0Q2FsbGJhY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIC8qKiBHZXQgdGhlIFNldCBvZiBlbGVtZW50cyBhdHRhY2hlZCB0byB0aGlzIGZvcm0gKi9cbiAgY29uc3QgZWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQpO1xuXG4gIC8qKiBTb21lIGZvcm1zIHdvbid0IGNvbnRhaW4gZm9ybSBhc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50cyAqL1xuICBpZiAoZWxlbWVudHMgJiYgZWxlbWVudHMuc2l6ZSkge1xuICAgIC8qKiBMb29wIG92ZXIgdGhlIGVsZW1lbnRzIGFuZCBjYWxsIGZvcm1SZXNldENhbGxiYWNrIGlmIGFwcGxpY2FibGUgKi9cbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoKGVsZW1lbnQuY29uc3RydWN0b3IgYXMgYW55KS5mb3JtQXNzb2NpYXRlZCAmJiBlbGVtZW50LmZvcm1SZXNldENhbGxiYWNrKSB7XG4gICAgICAgIGVsZW1lbnQuZm9ybVJlc2V0Q2FsbGJhY2suYXBwbHkoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgZm9ybS4gV2Ugd2lsbCBuZWVkIHRvIGFkZCBzdWJtaXQgYW5kIHJlc2V0IGxpc3RlbmVyc1xuICogaWYgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0LiBJZiB0aGV5IGRvLCBqdXN0IGFkZCB0aGUgbmV3IHJlZiB0byB0aGUgZm9ybS5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZiAtIFRoZSBlbGVtZW50IHJlZiB0aGF0IGluY2x1ZGVzIGludGVybmFsc1xuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm0gLSBUaGUgZm9ybSB0aGUgcmVmIGJlbG9uZ3MgdG9cbiAqIEBwYXJhbSB7RWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzIC0gVGhlIGludGVybmFscyBmb3IgcmVmXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgaW5pdEZvcm0gPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIGZvcm06IEhUTUxGb3JtRWxlbWVudCxcbiAgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFsc1xuKSA9PiB7XG4gIGlmIChmb3JtKSB7XG4gICAgLyoqIFRoaXMgd2lsbCBiZSBhIFdlYWtNYXA8SFRNTEZvcm1FbGVtZW50LCBTZXQ8SFRNTEVsZW1lbnQ+ICovXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChmb3JtKTtcblxuICAgIGlmIChmb3JtRWxlbWVudHMpIHtcbiAgICAgIC8qKiBJZiBmb3JtRWxlbWVudHMgZXhpc3RzLCBhZGQgdG8gaXQgKi9cbiAgICAgIGZvcm1FbGVtZW50cy5hZGQocmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoqIElmIGZvcm1FbGVtZW50cyBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgaXQgYW5kIGFkZCB0byBpdCAqL1xuICAgICAgY29uc3QgaW5pdFNldCA9IG5ldyBTZXQ8SUN1c3RvbUVsZW1lbnQ+KCk7XG4gICAgICBpbml0U2V0LmFkZChyZWYpO1xuICAgICAgZm9ybUVsZW1lbnRzTWFwLnNldChmb3JtLCBpbml0U2V0KTtcblxuICAgICAgLyoqIEFkZCBsaXN0ZW5lcnMgdG8gZW11bGF0ZSB2YWxpZGF0aW9uIGFuZCByZXNldCBiZWhhdmlvciAqL1xuICAgICAgd2lyZVN1Ym1pdExvZ2ljKGZvcm0pO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIGZvcm1SZXNldENhbGxiYWNrKTtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmb3JtSW5wdXRDYWxsYmFjayk7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZvcm1DaGFuZ2VDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgZm9ybXNNYXAuc2V0KGZvcm0sIHsgcmVmLCBpbnRlcm5hbHMgfSk7XG5cbiAgICAvKiogQ2FsbCBmb3JtQXNzb2NpYXRlZENhbGxiYWNrIGlmIGFwcGxpY2FibGUgKi9cbiAgICBpZiAocmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddICYmIHJlZi5mb3JtQXNzb2NpYXRlZENhbGxiYWNrKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVmLmZvcm1Bc3NvY2lhdGVkQ2FsbGJhY2suYXBwbHkocmVmLCBbZm9ybV0pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIHNldEZvcm1WYWxpZGl0eShmb3JtKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSBsb29rIGZvciBhbiBlbGVtZW50J3MgcGFyZW50IGZvcm1cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbSAtIFRoZSBlbGVtZW50IHRvIGxvb2sgZm9yIGEgcGFyZW50IGZvcm1cbiAqIEByZXR1cm4ge0hUTUxGb3JtRWxlbWVudHxudWxsfSAtIFRoZSBwYXJlbnQgZm9ybSwgaWYgb25lIGV4aXN0c1xuICovXG5leHBvcnQgY29uc3QgZmluZFBhcmVudEZvcm0gPSAoZWxlbSkgPT4ge1xuICBsZXQgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuICBpZiAocGFyZW50ICYmIHBhcmVudC50YWdOYW1lICE9PSAnRk9STScpIHtcbiAgICBwYXJlbnQgPSBmaW5kUGFyZW50Rm9ybShwYXJlbnQpO1xuICB9XG4gIHJldHVybiBwYXJlbnQ7XG59O1xuXG4vKipcbiAqIFRocm93IGFuIGVycm9yIGlmIHRoZSBlbGVtZW50IHJlZiBpcyBub3QgZm9ybSBhc3NvY2lhdGVkXG4gKiBAcGFyYW0gcmVmIHtJQ3VzdG9tRWxlbWVudH0gLSBUaGUgZWxlbWVudCB0byBjaGVjayBpZiBpdCBpcyBmb3JtIGFzc29jaWF0ZWRcbiAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IC0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdGhyb3dcbiAqIEBwYXJhbSBFcnJvclR5cGUge2FueX0gLSBUaGUgZXJyb3IgdHlwZSB0byB0aHJvdywgZGVmYXVsdHMgdG8gRE9NRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQgPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIG1lc3NhZ2U6IHN0cmluZyxcbiAgRXJyb3JUeXBlOiBhbnkgPSBET01FeGNlcHRpb25cbik6IHZvaWQgPT4ge1xuICBpZiAoIXJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgIHRocm93IG5ldyBFcnJvclR5cGUobWVzc2FnZSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIGZvciBlYWNoIEhUTUxGb3JtRWxlbWVudC5jaGVja1ZhbGlkaXR5fHJlcG9ydFZhbGlkaXR5XG4gKiB3aWxsIGxvb3Agb3ZlciBhIGZvcm0ncyBhZGRlZCBjb21wb25lbnRzIGFuZCBjYWxsIHRoZSByZXNwZWN0aXZlXG4gKiBtZXRob2QgbW9kaWZ5aW5nIHRoZSBkZWZhdWx0IHJldHVybiB2YWx1ZSBpZiBuZWVkZWRcbiAqIEBwYXJhbSBmb3JtIHtIVE1MRm9ybUVsZW1lbnR9IC0gVGhlIGZvcm0gZWxlbWVudCB0byBydW4gdGhlIG1ldGhvZCBvblxuICogQHBhcmFtIHJldHVyblZhbHVlIHtib29sZWFufSAtIFRoZSBpbml0aWFsIHJlc3VsdCBvZiB0aGUgb3JpZ2luYWwgbWV0aG9kXG4gKiBAcGFyYW0gbWV0aG9kIHsnY2hlY2tWYWxpZGl0eSd8J3JlcG9ydFZhbGlkaXR5J30gLSBUaGUgb3JpZ2luYWwgbWV0aG9kXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVGhlIGZvcm0ncyB2YWxpZGl0eSBzdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgb3ZlcnJpZGVGb3JtTWV0aG9kID0gKFxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnQsXG4gIHJldHVyblZhbHVlOiBib29sZWFuLFxuICBtZXRob2Q6ICdjaGVja1ZhbGlkaXR5JyB8ICdyZXBvcnRWYWxpZGl0eSdcbik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSk7XG5cbiAgLyoqIFNvbWUgZm9ybXMgd29uJ3QgY29udGFpbiBmb3JtIGFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnRzICovXG4gIGlmIChlbGVtZW50cyAmJiBlbGVtZW50cy5zaXplKSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChlbGVtZW50KTtcbiAgICAgIGNvbnN0IHZhbGlkID0gaW50ZXJuYWxzW21ldGhvZF0oKTtcbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xuXG4vKipcbiAqIFdpbGwgdXBncmFkZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIGJ5IGluaXRpYWxpemluZyB0aGVcbiAqIGluc3RhbmNlJ3MgZm9ybSBhbmQgbGFiZWxzLiBUaGlzIGlzIGNhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGlzXG4gKiBlaXRoZXIgY29uc3RydWN0ZWQgb3IgYXBwZW5kZWQgZnJvbSBhIERvY3VtZW50RnJhZ21lbnRcbiAqIEBwYXJhbSByZWYge0lDdXN0b21FbGVtZW50fSAtIFRoZSBjdXN0b20gZWxlbWVudCB0byB1cGdyYWRlXG4gKi9cbmV4cG9ydCBjb25zdCB1cGdyYWRlSW50ZXJuYWxzID0gKHJlZjogSUN1c3RvbUVsZW1lbnQpID0+IHtcbiAgaWYgKHJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQocmVmKTtcbiAgICBjb25zdCB7IGxhYmVscywgZm9ybSB9ID0gaW50ZXJuYWxzO1xuICAgIGluaXRMYWJlbHMocmVmLCBsYWJlbHMpO1xuICAgIGluaXRGb3JtKHJlZiwgZm9ybSwgaW50ZXJuYWxzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayB0byBzZWUgaWYgTXV0YXRpb25PYnNlcnZlciBleGlzdHMgaW4gdGhlIGN1cnJlbnRcbiAqIGV4ZWN1dGlvbiBjb250ZXh0LiBXaWxsIGxpa2VseSByZXR1cm4gZmFsc2Ugb24gdGhlIHNlcnZlclxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdXRhdGlvbk9ic2VydmVyRXhpc3RzKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xufVxuIiwgImltcG9ydCB7IHNldEZvcm1WYWxpZGl0eSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKiogRW11bGF0ZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgVmFsaWRpdHlTdGF0ZSBvYmplY3QgKi9cbmV4cG9ydCBjbGFzcyBWYWxpZGl0eVN0YXRlIGltcGxlbWVudHMgZ2xvYmFsVGhpcy5WYWxpZGl0eVN0YXRlIHtcbiAgYmFkSW5wdXQgPSBmYWxzZTtcbiAgY3VzdG9tRXJyb3IgPSBmYWxzZTtcbiAgcGF0dGVybk1pc21hdGNoID0gZmFsc2U7XG4gIHJhbmdlT3ZlcmZsb3cgPSBmYWxzZTtcbiAgcmFuZ2VVbmRlcmZsb3cgPSBmYWxzZTtcbiAgc3RlcE1pc21hdGNoID0gZmFsc2U7XG4gIHRvb0xvbmcgPSBmYWxzZTtcbiAgdG9vU2hvcnQgPSBmYWxzZTtcbiAgdHlwZU1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkID0gdHJ1ZTtcbiAgdmFsdWVNaXNzaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgT2JqZWN0LnNlYWwodGhpcyk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldCBhIFZhbGlkaXR5U3RhdGUgb2JqZWN0IGJhY2sgdG8gdmFsaWRcbiAqIEBwYXJhbSB7VmFsaWRpdHlTdGF0ZX0gdmFsaWRpdHlPYmplY3QgLSBUaGUgb2JqZWN0IHRvIG1vZGlmeVxuICogQHJldHVybiB7VmFsaWRpdHlTdGF0ZX0gLSBUaGUgbW9kaWZpZWQgVmFsaWRpdHlTdGF0ZU9iamVjdFxuICovXG5leHBvcnQgY29uc3Qgc2V0VmFsaWQgPSAodmFsaWRpdHlPYmplY3Q6IFZhbGlkaXR5U3RhdGUpOiBWYWxpZGl0eVN0YXRlID0+IHtcbiAgdmFsaWRpdHlPYmplY3QuYmFkSW5wdXQgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QuY3VzdG9tRXJyb3IgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QucGF0dGVybk1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnJhbmdlT3ZlcmZsb3cgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QucmFuZ2VVbmRlcmZsb3cgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3Quc3RlcE1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnRvb0xvbmcgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QudG9vU2hvcnQgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QudHlwZU1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnZhbGlkID0gdHJ1ZTtcbiAgdmFsaWRpdHlPYmplY3QudmFsdWVNaXNzaW5nID0gZmFsc2U7XG4gIHJldHVybiB2YWxpZGl0eU9iamVjdDtcbn07XG5cbi8qKlxuICogUmVjb25jaWxlIGEgVmFsaWRpdHlTdGF0ZSBvYmplY3Qgd2l0aCBhIG5ldyBzdGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7VmFsaWRpdHlTdGF0ZX0gLSBUaGUgYmFzZSBvYmplY3QgdG8gcmVjb25jaWxlIHdpdGggbmV3IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gLSBBIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3QgdG8gb3ZlcnJpZGUgdGhlIG9yaWdpbmFsXG4gKiBAcmV0dXJuIHtWYWxpZGl0eVN0YXRlfSAtIFRoZSB1cGRhdGVkIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCByZWNvbmNpbGVWYWxpZGl0eSA9IChcbiAgdmFsaWRpdHlPYmplY3Q6IFZhbGlkaXR5U3RhdGUsXG4gIG5ld1N0YXRlOiBQYXJ0aWFsPFZhbGlkaXR5U3RhdGU+LFxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnRcbik6IFZhbGlkaXR5U3RhdGUgPT4ge1xuICB2YWxpZGl0eU9iamVjdC52YWxpZCA9IGlzVmFsaWQobmV3U3RhdGUpO1xuICBPYmplY3Qua2V5cyhuZXdTdGF0ZSkuZm9yRWFjaCgoa2V5KSA9PiAodmFsaWRpdHlPYmplY3Rba2V5XSA9IG5ld1N0YXRlW2tleV0pKTtcbiAgaWYgKGZvcm0pIHtcbiAgICBzZXRGb3JtVmFsaWRpdHkoZm9ybSk7XG4gIH1cbiAgcmV0dXJuIHZhbGlkaXR5T2JqZWN0O1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3Qgc2hvdWxkIGJlIHZhbGlkXG4gKiBAcGFyYW0ge09iamVjdH0gLSBBIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IC0gU2hvdWxkIHRoZSBuZXcgb2JqZWN0IGJlIHZhbGlkXG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkID0gKHZhbGlkaXR5U3RhdGU6IFBhcnRpYWw8VmFsaWRpdHlTdGF0ZT4pOiBib29sZWFuID0+IHtcbiAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgZm9yIChsZXQga2V5IGluIHZhbGlkaXR5U3RhdGUpIHtcbiAgICBpZiAoa2V5ICE9PSAndmFsaWQnICYmIHZhbGlkaXR5U3RhdGVba2V5XSAhPT0gZmFsc2UpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWxpZDtcbn07XG4iLCAiaW1wb3J0IHsgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuLyoqIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIHJlZiBmb3IgdGVoIEN1c3RvbVN0YXRlU2V0ICovXG5jb25zdCBjdXN0b21TdGF0ZU1hcCA9IG5ldyBXZWFrTWFwPEN1c3RvbVN0YXRlU2V0LCBJQ3VzdG9tRWxlbWVudD4oKTtcblxuZnVuY3Rpb24gYWRkU3RhdGUocmVmOiBJQ3VzdG9tRWxlbWVudCwgc3RhdGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgcmVmLnRvZ2dsZUF0dHJpYnV0ZShzdGF0ZU5hbWUsIHRydWUpO1xuICBpZiAocmVmLnBhcnQpIHtcbiAgICByZWYucGFydC5hZGQoc3RhdGVOYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDdXN0b21TdGF0ZSA9IGAtLSR7c3RyaW5nfWA7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21TdGF0ZVNldCBleHRlbmRzIFNldDxDdXN0b21TdGF0ZT4ge1xuICBzdGF0aWMgZ2V0IGlzUG9seWZpbGxlZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJlZjogSUN1c3RvbUVsZW1lbnQpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghcmVmIHx8ICFyZWYudGFnTmFtZSB8fCByZWYudGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbGxlZ2FsIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuXG4gICAgY3VzdG9tU3RhdGVNYXAuc2V0KHRoaXMsIHJlZik7XG4gIH1cblxuICBhZGQoc3RhdGU6IEN1c3RvbVN0YXRlKSB7XG4gICAgaWYgKCEvXi0tLy50ZXN0KHN0YXRlKSB8fCB0eXBlb2Ygc3RhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ2FkZCcgb24gJ0N1c3RvbVN0YXRlU2V0JzogVGhlIHNwZWNpZmllZCB2YWx1ZSAke3N0YXRlfSBtdXN0IHN0YXJ0IHdpdGggJy0tJy5gXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5hZGQoc3RhdGUpO1xuICAgIGNvbnN0IHJlZiA9IGN1c3RvbVN0YXRlTWFwLmdldCh0aGlzKTtcbiAgICBjb25zdCBzdGF0ZU5hbWUgPSBgc3RhdGUke3N0YXRlfWA7XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IGFkZCB0aGUgc3RhdGUgaW1tZWRpYXRlbHkgaWYgdGhlIHJlZiBpcyBjb25uZWN0ZWQgdG8gdGhlIERPTTtcbiAgICAgKiBvdGhlcndpc2UsIHdhaXQgYSB0aWNrIGJlY2F1c2UgdGhlIGVsZW1lbnQgaXMgbGlrZWx5IGJlaW5nIGNvbnN0cnVjdGVkXG4gICAgICogYnkgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBhbmQgd291bGQgdGhyb3cgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgIGFkZFN0YXRlKHJlZiwgc3RhdGVOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFkZFN0YXRlKHJlZiwgc3RhdGVOYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBmb3IgKGxldCBbZW50cnldIG9mIHRoaXMuZW50cmllcygpKSB7XG4gICAgICB0aGlzLmRlbGV0ZShlbnRyeSk7XG4gICAgfVxuICAgIHN1cGVyLmNsZWFyKCk7XG4gIH1cblxuICBkZWxldGUoc3RhdGU6IEN1c3RvbVN0YXRlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuZGVsZXRlKHN0YXRlKTtcbiAgICBjb25zdCByZWYgPSBjdXN0b21TdGF0ZU1hcC5nZXQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHRvZ2dsZSB0aGUgc3RhdGUvYXR0ciBpbW1lZGlhdGVseSBpZiB0aGUgcmVmIGlzIGNvbm5lY3RlZCB0byB0aGUgRE9NO1xuICAgICAqIG90aGVyd2lzZSwgd2FpdCBhIHRpY2sgYmVjYXVzZSB0aGUgZWxlbWVudCBpcyBsaWtlbHkgYmVpbmcgY29uc3RydWN0ZWRcbiAgICAgKiBieSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGFuZCB3b3VsZCB0aHJvdyBvdGhlcndpc2UuXG4gICAgICovXG4gICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZShgc3RhdGUke3N0YXRlfWAsIGZhbHNlKTtcbiAgICAgIGlmIChyZWYucGFydCkge1xuICAgICAgICByZWYucGFydC5yZW1vdmUoYHN0YXRlJHtzdGF0ZX1gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoYHN0YXRlJHtzdGF0ZX1gLCBmYWxzZSk7XG4gICAgICAgIGlmIChyZWYucGFydCkge1xuICAgICAgICAgIHJlZi5wYXJ0LnJlbW92ZShgc3RhdGUke3N0YXRlfWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCAiZXhwb3J0IGNsYXNzIEhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uIGltcGxlbWVudHMgZ2xvYmFsVGhpcy5IVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbiB7XG4gIHJlYWRvbmx5ICNlbGVtZW50cztcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgIHRoaXMuI2VsZW1lbnRzID0gZWxlbWVudHM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgICB0aGlzW2ldID0gZWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgIHRoaXNbZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKV0gPSBlbGVtZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBbaW5kZXg6IG51bWJlcl06IEVsZW1lbnQ7XG5cbiAgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLiNlbGVtZW50cy5sZW5ndGg7XG4gIH1cblxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gdGhpcy4jZWxlbWVudHNbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICB9XG5cbiAgaXRlbShpKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXNbaV0gPT0gbnVsbCA/IG51bGwgOiB0aGlzW2ldO1xuICB9XG5cbiAgbmFtZWRJdGVtKG5hbWUpOiBFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpc1tuYW1lXSA9PSBudWxsID8gbnVsbCA6IHRoaXNbbmFtZV07XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbiB9IGZyb20gJy4vSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24uanMnO1xuaW1wb3J0IHsgZm9ybUVsZW1lbnRzTWFwIH0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IG92ZXJyaWRlRm9ybU1ldGhvZCB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFBhdGNoIHRoZSBIVE1MRWxlbWVudCBwcm90b3R5cGVcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHBhdGNoZXMgY2hlY2tWYWxpZGl0eSwgcmVwb3J0VmFsaWRpdHkgYW5kIGVsZW1lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEZvcm1Qcm90b3R5cGUoKTogdm9pZCB7XG4gIGNvbnN0IGNoZWNrVmFsaWRpdHkgPSBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmNoZWNrVmFsaWRpdHk7XG4gIEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUuY2hlY2tWYWxpZGl0eSA9IGNoZWNrVmFsaWRpdHlPdmVycmlkZTtcblxuICBjb25zdCByZXBvcnRWYWxpZGl0eSA9IEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUucmVwb3J0VmFsaWRpdHk7XG4gIEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUucmVwb3J0VmFsaWRpdHkgPSByZXBvcnRWYWxpZGl0eU92ZXJyaWRlO1xuXG4gIGZ1bmN0aW9uIGNoZWNrVmFsaWRpdHlPdmVycmlkZSguLi5hcmdzKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldHVyblZhbHVlID0gY2hlY2tWYWxpZGl0eS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICByZXR1cm4gb3ZlcnJpZGVGb3JtTWV0aG9kKHRoaXMsIHJldHVyblZhbHVlLCAnY2hlY2tWYWxpZGl0eScpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwb3J0VmFsaWRpdHlPdmVycmlkZSguLi5hcmdzKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldHVyblZhbHVlID0gcmVwb3J0VmFsaWRpdHkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgcmV0dXJuIG92ZXJyaWRlRm9ybU1ldGhvZCh0aGlzLCByZXR1cm5WYWx1ZSwgJ3JlcG9ydFZhbGlkaXR5Jyk7XG4gIH1cblxuICBjb25zdCB7IGdldCB9ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLCAnZWxlbWVudHMnKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUsICdlbGVtZW50cycsIHtcbiAgICBnZXQoLi4uYXJncykge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBnZXQuY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgICAgIGNvbnN0IHBvbHlmaWxsZWRFbGVtZW50cyA9IEFycmF5LmZyb20oZm9ybUVsZW1lbnRzTWFwLmdldCh0aGlzKSB8fCBbXSk7XG5cbiAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBwb2x5ZmlsbGVkIGVsZW1lbnRzLCByZXR1cm4gdGhlIG5hdGl2ZSBlbGVtZW50cyBjb2xsZWN0aW9uXG4gICAgICBpZiAocG9seWZpbGxlZEVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgICB9XG5cbiAgICAgIC8vIE1lcmdlIHRoZSBuYXRpdmUgZWxlbWVudHMgd2l0aCB0aGUgcG9seWZpbGxlZCBlbGVtZW50c1xuICAgICAgLy8gYW5kIG9yZGVyIHRoZW0gYnkgdGhlaXIgcG9zaXRpb24gaW4gdGhlIERPTVxuICAgICAgY29uc3Qgb3JkZXJlZEVsZW1lbnRzID0gQXJyYXkuZnJvbShlbGVtZW50cylcbiAgICAgICAgLmNvbmNhdChwb2x5ZmlsbGVkRWxlbWVudHMpXG4gICAgICAgIC5zb3J0KChhOiBFbGVtZW50LCBiOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpICYgMiA/IDEgOiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmV3IEhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uKG9yZGVyZWRFbGVtZW50cyk7XG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgY29ubmVjdGVkQ2FsbGJhY2tNYXAsXG4gIGludGVybmFsc01hcCxcbiAgcmVmTWFwLFxuICByZWZWYWx1ZU1hcCxcbiAgc2hhZG93SG9zdHNNYXAsXG4gIHNoYWRvd1Jvb3RNYXAsXG4gIHZhbGlkYXRpb25BbmNob3JNYXAsXG4gIHZhbGlkaXR5TWFwLFxuICB2YWxpZGF0aW9uTWVzc2FnZU1hcCxcbiAgdmFsaWRpdHlVcGdyYWRlTWFwLFxufSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlSGlkZGVuSW5wdXQsXG4gIGZpbmRQYXJlbnRGb3JtLFxuICBpbml0UmVmLFxuICBtdXRhdGlvbk9ic2VydmVyRXhpc3RzLFxuICByZW1vdmVIaWRkZW5JbnB1dHMsXG4gIHNldERpc2FibGVkLFxuICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQsXG4gIHVwZ3JhZGVJbnRlcm5hbHMsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgaW5pdEFvbSB9IGZyb20gJy4vYW9tLmpzJztcbmltcG9ydCB7IFZhbGlkaXR5U3RhdGUsIHJlY29uY2lsZVZhbGlkaXR5LCBzZXRWYWxpZCB9IGZyb20gJy4vVmFsaWRpdHlTdGF0ZS5qcyc7XG5pbXBvcnQgeyBkZWZlclVwZ3JhZGUsIG9ic2VydmVyQ2FsbGJhY2ssIG9ic2VydmVyQ29uZmlnIH0gZnJvbSAnLi9tdXRhdGlvbi1vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgSUVsZW1lbnRJbnRlcm5hbHMsIElDdXN0b21FbGVtZW50LCBMYWJlbHNMaXN0IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5pbXBvcnQgeyBDdXN0b21TdGF0ZVNldCB9IGZyb20gJy4vQ3VzdG9tU3RhdGVTZXQuanMnO1xuaW1wb3J0IHsgcGF0Y2hGb3JtUHJvdG90eXBlIH0gZnJvbSAnLi9wYXRjaC1mb3JtLXByb3RvdHlwZS5qcyc7XG5pbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gJ2xpdC1odG1sL2lzLXNlcnZlci5qcyc7XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50SW50ZXJuYWxzIGltcGxlbWVudHMgSUVsZW1lbnRJbnRlcm5hbHMge1xuICBhcmlhQXRvbWljOiBzdHJpbmc7XG4gIGFyaWFBdXRvQ29tcGxldGU6IHN0cmluZztcbiAgYXJpYUJ1c3k6IHN0cmluZztcbiAgYXJpYUNoZWNrZWQ6IHN0cmluZztcbiAgYXJpYUNvbENvdW50OiBzdHJpbmc7XG4gIGFyaWFDb2xJbmRleDogc3RyaW5nO1xuICBhcmlhQ29sSW5kZXhUZXh0OiBzdHJpbmc7XG4gIGFyaWFDb2xTcGFuOiBzdHJpbmc7XG4gIGFyaWFDdXJyZW50OiBzdHJpbmc7XG4gIGFyaWFEaXNhYmxlZDogc3RyaW5nO1xuICBhcmlhRXhwYW5kZWQ6IHN0cmluZztcbiAgYXJpYUhhc1BvcHVwOiBzdHJpbmc7XG4gIGFyaWFIaWRkZW46IHN0cmluZztcbiAgYXJpYUludmFsaWQ6IHN0cmluZztcbiAgYXJpYUtleVNob3J0Y3V0czogc3RyaW5nO1xuICBhcmlhTGFiZWw6IHN0cmluZztcbiAgYXJpYUxldmVsOiBzdHJpbmc7XG4gIGFyaWFMaXZlOiBzdHJpbmc7XG4gIGFyaWFNb2RhbDogc3RyaW5nO1xuICBhcmlhTXVsdGlMaW5lOiBzdHJpbmc7XG4gIGFyaWFNdWx0aVNlbGVjdGFibGU6IHN0cmluZztcbiAgYXJpYU9yaWVudGF0aW9uOiBzdHJpbmc7XG4gIGFyaWFQbGFjZWhvbGRlcjogc3RyaW5nO1xuICBhcmlhUG9zSW5TZXQ6IHN0cmluZztcbiAgYXJpYVByZXNzZWQ6IHN0cmluZztcbiAgYXJpYVJlYWRPbmx5OiBzdHJpbmc7XG4gIGFyaWFSZWxldmFudDogc3RyaW5nO1xuICBhcmlhUmVxdWlyZWQ6IHN0cmluZztcbiAgYXJpYVJvbGVEZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhcmlhUm93Q291bnQ6IHN0cmluZztcbiAgYXJpYVJvd0luZGV4OiBzdHJpbmc7XG4gIGFyaWFSb3dJbmRleFRleHQ6IHN0cmluZztcbiAgYXJpYVJvd1NwYW46IHN0cmluZztcbiAgYXJpYVNlbGVjdGVkOiBzdHJpbmc7XG4gIGFyaWFTZXRTaXplOiBzdHJpbmc7XG4gIGFyaWFTb3J0OiBzdHJpbmc7XG4gIGFyaWFWYWx1ZU1heDogc3RyaW5nO1xuICBhcmlhVmFsdWVNaW46IHN0cmluZztcbiAgYXJpYVZhbHVlTm93OiBzdHJpbmc7XG4gIGFyaWFWYWx1ZVRleHQ6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuXG4gIHN0YXRlczogQ3VzdG9tU3RhdGVTZXQ7XG5cbiAgc3RhdGljIGdldCBpc1BvbHlmaWxsZWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyZWY6IElDdXN0b21FbGVtZW50KSB7XG4gICAgaWYgKCFyZWYgfHwgIXJlZi50YWdOYW1lIHx8IHJlZi50YWdOYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0lsbGVnYWwgY29uc3RydWN0b3InKTtcbiAgICB9XG4gICAgY29uc3Qgcm9vdE5vZGUgPSByZWYuZ2V0Um9vdE5vZGUoKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IG5ldyBWYWxpZGl0eVN0YXRlKCk7XG4gICAgdGhpcy5zdGF0ZXMgPSBuZXcgQ3VzdG9tU3RhdGVTZXQocmVmKTtcbiAgICByZWZNYXAuc2V0KHRoaXMsIHJlZik7XG4gICAgdmFsaWRpdHlNYXAuc2V0KHRoaXMsIHZhbGlkaXR5KTtcbiAgICBpbnRlcm5hbHNNYXAuc2V0KHJlZiwgdGhpcyk7XG4gICAgaW5pdEFvbShyZWYsIHRoaXMpO1xuICAgIGluaXRSZWYocmVmLCB0aGlzKTtcbiAgICBPYmplY3Quc2VhbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIElmIGFwcGVuZGVkIGZyb20gYSBEb2N1bWVudEZyYWdtZW50LCB3YWl0IHVudGlsIGl0IGlzIGNvbm5lY3RlZFxuICAgICAqIGJlZm9yZSBhdHRlbXB0aW5nIHRvIHVwZ3JhZGUgdGhlIGludGVybmFscyBpbnN0YW5jZVxuICAgICAqL1xuICAgIGlmIChyb290Tm9kZSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgIGRlZmVyVXBncmFkZShyb290Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgaW4gYSB2YWxpZCBzdGF0ZVxuICAgKi9cbiAgY2hlY2tWYWxpZGl0eSgpOiBib29sZWFuIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnY2hlY2tWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIC8qKiBJZiB0aGUgZWxlbWVudCB3aWxsIG5vdCB2YWxpZGF0ZSwgaXQgaXMgbmVjZXNzYXJpbHkgdmFsaWQgYnkgZGVmYXVsdCAqL1xuICAgIGlmICghdGhpcy53aWxsVmFsaWRhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICBpZiAoIXZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBjb25zdCB2YWxpZGl0eUV2ZW50ID0gbmV3IEV2ZW50KCdpbnZhbGlkJywge1xuICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgY29tcG9zZWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICByZWYuZGlzcGF0Y2hFdmVudCh2YWxpZGl0eUV2ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkaXR5LnZhbGlkO1xuICB9XG5cbiAgLyoqIFRoZSBmb3JtIGVsZW1lbnQgdGhlIGN1c3RvbSBlbGVtZW50IGlzIGFzc29jaWF0ZWQgd2l0aCAqL1xuICBnZXQgZm9ybSgpOiBIVE1MRm9ybUVsZW1lbnQge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAnZm9ybScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgbGV0IGZvcm07XG4gICAgaWYgKHJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSA9PT0gdHJ1ZSkge1xuICAgICAgZm9ybSA9IGZpbmRQYXJlbnRGb3JtKHJlZik7XG4gICAgfVxuICAgIHJldHVybiBmb3JtO1xuICB9XG5cbiAgLyoqIEEgbGlzdCBvZiBhbGwgcmVsYXRpdmUgZm9ybSBsYWJlbHMgZm9yIHRoaXMgZWxlbWVudCAqL1xuICBnZXQgbGFiZWxzKCk6IExhYmVsc0xpc3Qge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAnbGFiZWxzJyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBjb25zdCBpZCA9IHJlZi5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgY29uc3QgaG9zdFJvb3QgPSByZWYuZ2V0Um9vdE5vZGUoKSBhcyBFbGVtZW50O1xuICAgIGlmIChob3N0Um9vdCAmJiBpZCkge1xuICAgICAgcmV0dXJuIGhvc3RSb290LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTExhYmVsRWxlbWVudD4oYFtmb3I9XCIke2lkfVwiXWApIGFzIHVua25vd24gYXMgTGFiZWxzTGlzdDtcbiAgICB9XG4gICAgcmV0dXJuIFtdIGFzIHVua25vd24gYXMgTGFiZWxzTGlzdDtcbiAgfVxuXG4gIC8qKiBXaWxsIHJlcG9ydCB0aGUgZWxlbWVudHMgdmFsaWRpdHkgc3RhdGUgKi9cbiAgcmVwb3J0VmFsaWRpdHkoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3JlcG9ydFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgLyoqIElmIHRoZSBlbGVtZW50IHdpbGwgbm90IHZhbGlkYXRlLCBpdCBpcyB2YWxpZCBieSBkZWZhdWx0ICovXG4gICAgaWYgKCF0aGlzLndpbGxWYWxpZGF0ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHZhbGlkID0gdGhpcy5jaGVja1ZhbGlkaXR5KCk7XG4gICAgY29uc3QgYW5jaG9yID0gdmFsaWRhdGlvbkFuY2hvck1hcC5nZXQodGhpcyk7XG4gICAgaWYgKGFuY2hvciAmJiAhcmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3JlcG9ydFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCF2YWxpZCAmJiBhbmNob3IpIHtcbiAgICAgIHJlZi5mb2N1cygpO1xuICAgICAgYW5jaG9yLmZvY3VzKCk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBlbGVtZW50J3MgdmFsdWUgd2l0aGluIHRoZSBmb3JtICovXG4gIHNldEZvcm1WYWx1ZSh2YWx1ZTogc3RyaW5nIHwgRm9ybURhdGEgfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldEZvcm1WYWx1ZScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIHJlbW92ZUhpZGRlbklucHV0cyh0aGlzKTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpKSB7XG4gICAgICBpZiAocmVmLmdldEF0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgIGNvbnN0IGhpZGRlbklucHV0ID0gY3JlYXRlSGlkZGVuSW5wdXQocmVmLCB0aGlzKTtcbiAgICAgICAgaGlkZGVuSW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgQXJyYXkuZnJvbSh2YWx1ZSlcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAuZm9yRWFjaCgoW2Zvcm1EYXRhS2V5LCBmb3JtRGF0YVZhbHVlXSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgZm9ybURhdGFWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGhpZGRlbklucHV0ID0gY3JlYXRlSGlkZGVuSW5wdXQocmVmLCB0aGlzKTtcbiAgICAgICAgICAgIGhpZGRlbklucHV0Lm5hbWUgPSBmb3JtRGF0YUtleTtcbiAgICAgICAgICAgIGhpZGRlbklucHV0LnZhbHVlID0gZm9ybURhdGFWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWZWYWx1ZU1hcC5zZXQocmVmLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZWxlbWVudCdzIHZhbGlkaXR5LiBUaGUgZmlyc3QgYXJndW1lbnQgaXMgYSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gICAqIHJlZmxlY3RpbmcgdGhlIGNoYW5nZXMgdG8gYmUgbWFkZSB0byB0aGUgZWxlbWVudCdzIHZhbGlkaXR5LiBJZiB0aGUgZWxlbWVudCBpcyBpbnZhbGlkLFxuICAgKiB0aGUgc2Vjb25kIGFyZ3VtZW50IHNldHMgdGhlIGVsZW1lbnQncyB2YWxpZGF0aW9uIG1lc3NhZ2UuXG4gICAqXG4gICAqIElmIHRoZSBmaWVsZCBpcyB2YWxpZCBhbmQgYSBtZXNzYWdlIGlzIHNwZWNpZmllZCwgdGhlIG1ldGhvZCB3aWxsIHRocm93IGEgVHlwZUVycm9yLlxuICAgKi9cbiAgc2V0VmFsaWRpdHkoXG4gICAgdmFsaWRpdHlDaGFuZ2VzOiBQYXJ0aWFsPGdsb2JhbFRoaXMuVmFsaWRpdHlTdGF0ZT4sXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2U/OiBzdHJpbmcsXG4gICAgYW5jaG9yPzogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgaWYgKCF2YWxpZGl0eUNoYW5nZXMpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgdmFsaWRhdGlvbkFuY2hvck1hcC5zZXQodGhpcywgYW5jaG9yKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICBjb25zdCB2YWxpZGl0eUNoYW5nZXNPYmo6IFBhcnRpYWw8VmFsaWRpdHlTdGF0ZT4gPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWxpZGl0eUNoYW5nZXMpIHtcbiAgICAgIHZhbGlkaXR5Q2hhbmdlc09ialtrZXldID0gdmFsaWRpdHlDaGFuZ2VzW2tleV07XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyh2YWxpZGl0eUNoYW5nZXNPYmopLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0VmFsaWQodmFsaWRpdHkpO1xuICAgIH1cbiAgICBjb25zdCBjaGVjayA9IHsgLi4udmFsaWRpdHksIC4uLnZhbGlkaXR5Q2hhbmdlc09iaiB9O1xuICAgIGRlbGV0ZSBjaGVjay52YWxpZDtcbiAgICBjb25zdCB7IHZhbGlkIH0gPSByZWNvbmNpbGVWYWxpZGl0eSh2YWxpZGl0eSwgY2hlY2ssIHRoaXMuZm9ybSk7XG5cbiAgICBpZiAoIXZhbGlkICYmICF2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdzZXRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgc2Vjb25kIGFyZ3VtZW50IHNob3VsZCBub3QgYmUgZW1wdHkgaWYgb25lIG9yIG1vcmUgZmxhZ3MgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IGFyZSB0cnVlLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHZhbGlkYXRpb25NZXNzYWdlTWFwLnNldCh0aGlzLCB2YWxpZCA/ICcnIDogdmFsaWRhdGlvbk1lc3NhZ2UpO1xuXG4gICAgLy8gY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBob3N0IGVsZW1lbnQgaXMgY29ubmVjdGVkIGJlZm9yZSBhZGRpbmcgYXR0cmlidXRlc1xuICAgIC8vIGJlY2F1c2Ugc2FmYXJpIGRvZXNudCBhbGxvdyBlbGVtZW50cyB0byBoYXZlIGF0dHJpYnV0ZXMgYWRkZWQgaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLWludmFsaWQnLCAhdmFsaWQpO1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgdmFsaWQpO1xuICAgICAgcmVmLnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgYCR7IXZhbGlkfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGl0eVVwZ3JhZGVNYXAuc2V0KHJlZiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNoYWRvd1Jvb3QoKTogU2hhZG93Um9vdCB8IG51bGwge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IHNoYWRvd1Jvb3RNYXAuZ2V0KHJlZik7XG4gICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgIHJldHVybiBzaGFkb3dSb290O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBUaGUgZWxlbWVudCdzIHZhbGlkYXRpb24gbWVzc2FnZSBzZXQgZHVyaW5nIGEgY2FsbCB0byBFbGVtZW50SW50ZXJuYWxzLnNldFZhbGlkaXR5ICovXG4gIGdldCB2YWxpZGF0aW9uTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAndmFsaWRhdGlvbk1lc3NhZ2UnIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIHJldHVybiB2YWxpZGF0aW9uTWVzc2FnZU1hcC5nZXQodGhpcyk7XG4gIH1cblxuICAvKiogVGhlIGN1cnJlbnQgdmFsaWRpdHkgc3RhdGUgb2YgdGhlIG9iamVjdCAqL1xuICBnZXQgdmFsaWRpdHkoKTogZ2xvYmFsVGhpcy5WYWxpZGl0eVN0YXRlIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ3ZhbGlkaXR5JyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICByZXR1cm4gdmFsaWRpdHk7XG4gIH1cblxuICAvKiogSWYgdHJ1ZSB0aGUgZWxlbWVudCB3aWxsIHBhcnRpY2lwYXRlIGluIGEgZm9ybSdzIGNvbnN0cmFpbnQgdmFsaWRhdGlvbi4gKi9cbiAgZ2V0IHdpbGxWYWxpZGF0ZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ3dpbGxWYWxpZGF0ZScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgaWYgKHJlZi5kaXNhYmxlZCB8fCByZWYuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IHJlZi5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5JykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLy8gLS0tIERpc2FibGluZyB0aGlzIHR5cGUgZGVjbGFyYXRpb24gdG8gYXZvaWQgY29uZmxpY3Qgd2l0aCBleHRlcm5hbCBlbGVtZW50LWludGVybmFscy1wb2x5ZmlsbCB0eXBlcyAtLS1cbi8vIGRlY2xhcmUgZ2xvYmFsIHtcbi8vICAgaW50ZXJmYWNlIEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3RvciB7XG4vLyAgICAgZm9ybUFzc29jaWF0ZWQ/OiBib29sZWFuO1xuLy8gICB9XG5cbi8vICAgaW50ZXJmYWNlIFdpbmRvdyB7XG4vLyAgICAgRWxlbWVudEludGVybmFsczogdHlwZW9mIEVsZW1lbnRJbnRlcm5hbHM7XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudEludGVybmFsc1N1cHBvcnRlZCgpOiBib29sZWFuIHtcbiAgaWYgKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgIXdpbmRvdy5FbGVtZW50SW50ZXJuYWxzIHx8XG4gICAgIUhUTUxFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hJbnRlcm5hbHNcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2xhc3MgRWxlbWVudEludGVybmFsc0ZlYXR1cmVEZXRlY3Rpb24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuaW50ZXJuYWxzID0gdGhpcy5hdHRhY2hJbnRlcm5hbHMoKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcmFuZG9tTmFtZSA9IGBlbGVtZW50LWludGVybmFscy1mZWF0dXJlLWRldGVjdGlvbi0ke01hdGgucmFuZG9tKClcbiAgICAudG9TdHJpbmcoMzYpXG4gICAgLnJlcGxhY2UoL1teYS16XSsvZywgJycpfWA7XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZShyYW5kb21OYW1lLCBFbGVtZW50SW50ZXJuYWxzRmVhdHVyZURldGVjdGlvbik7XG4gIGNvbnN0IGZlYXR1cmVEZXRlY3Rpb25FbGVtZW50ID0gbmV3IEVsZW1lbnRJbnRlcm5hbHNGZWF0dXJlRGV0ZWN0aW9uKCk7XG4gIHJldHVybiBbXG4gICAgJ3NoYWRvd1Jvb3QnLFxuICAgICdmb3JtJyxcbiAgICAnd2lsbFZhbGlkYXRlJyxcbiAgICAndmFsaWRpdHknLFxuICAgICd2YWxpZGF0aW9uTWVzc2FnZScsXG4gICAgJ2xhYmVscycsXG4gICAgJ3NldEZvcm1WYWx1ZScsXG4gICAgJ3NldFZhbGlkaXR5JyxcbiAgICAnY2hlY2tWYWxpZGl0eScsXG4gICAgJ3JlcG9ydFZhbGlkaXR5JyxcbiAgXS5ldmVyeSgocHJvcCkgPT4gcHJvcCBpbiBmZWF0dXJlRGV0ZWN0aW9uRWxlbWVudC5pbnRlcm5hbHMpO1xufVxuXG4vLyBPbmx5IGluY2x1ZGVzIHRoaXMgcG9seWZpbGwgaWYgd2UgYXJlIGluIGEgamVzdCBydW5uZXIgb3Igbm90IGluIFNTUlxuaWYgKFxuICAhaXNTZXJ2ZXIgfHxcbiAgKChwcm9jZXNzIGFzIGFueSk/LmVudi5KRVNUX1dPUktFUl9JRCAhPT0gdW5kZWZpbmVkICYmIChwcm9jZXNzIGFzIGFueSk/LmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKVxuKSB7XG4gIGlmICghaXNFbGVtZW50SW50ZXJuYWxzU3VwcG9ydGVkKCkpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8qKiBAdHMtZXhwZWN0LWVycm9yOiB3ZSBuZWVkIHRvIHJlcGxhY2UgdGhlIGRlZmF1bHQgRWxlbWVudEludGVybmFscyAqL1xuICAgICAgd2luZG93LkVsZW1lbnRJbnRlcm5hbHMgPSBFbGVtZW50SW50ZXJuYWxzO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgZGVmaW5lID0gQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5kZWZpbmU7XG4gICAgICBDdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlLmRlZmluZSA9IGZ1bmN0aW9uIChuYW1lLCBjb25zdHJ1Y3Rvciwgb3B0aW9ucykge1xuICAgICAgICBpZiAoY29uc3RydWN0b3IuZm9ybUFzc29jaWF0ZWQpIHtcbiAgICAgICAgICBjb25zdCBjb25uZWN0ZWRDYWxsYmFjayA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaztcbiAgICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWNvbm5lY3RlZENhbGxiYWNrTWFwLmhhcyh0aGlzKSkge1xuICAgICAgICAgICAgICBjb25uZWN0ZWRDYWxsYmFja01hcC5zZXQodGhpcywgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgc2V0RGlzYWJsZWQodGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbm5lY3RlZENhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2suYXBwbHkodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhbHdheXMgdXBncmFkZUludGVybmFscyBpbiBjb25uZWN0ZWRDYWxsYmFjayBpbnN0ZWFkIG9mIGNvbnN0cnVjdG9yXG4gICAgICAgICAgICB1cGdyYWRlSW50ZXJuYWxzKHRoaXMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBkZWZpbmUuY2FsbCh0aGlzLCBuYW1lLCBjb25zdHJ1Y3Rvciwgb3B0aW9ucyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gYSBjdXN0b20gZWxlbWVudC4gQ2FsbGluZyB0aGlzIG1ldGhvZFxuICAgICAqIG9uIGEgYnVpbHQtaW4gZWxlbWVudCB3aWxsIHRocm93IGFuIGVycm9yLlxuICAgICAqL1xuICAgIGlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzID0gZnVuY3Rpb24gKCk6IElFbGVtZW50SW50ZXJuYWxzIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhZ05hbWUpIHtcbiAgICAgICAgICAvKiogVGhpcyBoYXBwZW5zIGluIHRoZSBMaXRTU1IgZW52aXJvbm1lbnQuIEhlcmUgd2UgY2FuIGdlbmVyYWxseSBpZ25vcmUgaW50ZXJuYWxzIGZvciBub3cgKi9cbiAgICAgICAgICByZXR1cm4ge30gYXMgb2JqZWN0IGFzIElFbGVtZW50SW50ZXJuYWxzO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdhdHRhY2hJbnRlcm5hbHMnIG9uICdIVE1MRWxlbWVudCc6IFVuYWJsZSB0byBhdHRhY2ggRWxlbWVudEludGVybmFscyB0byBub24tY3VzdG9tIGVsZW1lbnRzLmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnRlcm5hbHNNYXAuaGFzKHRoaXMpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgICAgIGBET01FeGNlcHRpb246IEZhaWxlZCB0byBleGVjdXRlICdhdHRhY2hJbnRlcm5hbHMnIG9uICdIVE1MRWxlbWVudCc6IEVsZW1lbnRJbnRlcm5hbHMgZm9yIHRoZSBzcGVjaWZpZWQgZWxlbWVudCB3YXMgYWxyZWFkeSBhdHRhY2hlZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnRJbnRlcm5hbHModGhpcykgYXMgSUVsZW1lbnRJbnRlcm5hbHM7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbm5lci1kZWNsYXJhdGlvbnNcbiAgICAgIGZ1bmN0aW9uIGF0dGFjaFNoYWRvd09ic2VydmVyKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGF0dGFjaFNoYWRvdy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgc2hhZG93Um9vdE1hcC5zZXQodGhpcywgc2hhZG93Um9vdCk7XG5cbiAgICAgICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKSkge1xuICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG4gICAgICAgICAgaWYgKHdpbmRvdy5TaGFkeURPTSkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCBvYnNlcnZlckNvbmZpZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2hhZG93Um9vdCwgb2JzZXJ2ZXJDb25maWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzaGFkb3dIb3N0c01hcC5zZXQodGhpcywgb2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGFkb3dSb290O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhdHRhY2hTaGFkb3cgPSBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3c7XG4gICAgICBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3cgPSBhdHRhY2hTaGFkb3dPYnNlcnZlcjtcbiAgICB9XG5cbiAgICBpZiAobXV0YXRpb25PYnNlcnZlckV4aXN0cygpKSB7XG4gICAgICBjb25zdCBkb2N1bWVudE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG4gICAgICBkb2N1bWVudE9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBvYnNlcnZlckNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogS2VlcHMgdGhlIHBvbHlmaWxsIGZyb20gdGhyb3dpbmcgaW4gZW52aXJvbm1lbnRzIHdoZXJlIEhUTUxGb3JtRWxlbWVudFxuICAgICAqIGlzIHVuZGVmaW5lZCBsaWtlIGluIGEgc2VydmVyIGVudmlyb25tZW50XG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBIVE1MRm9ybUVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwYXRjaEZvcm1Qcm90b3R5cGUoKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXdpbmRvdy5DdXN0b21TdGF0ZVNldCkge1xuICAgICAgd2luZG93LkN1c3RvbVN0YXRlU2V0ID0gQ3VzdG9tU3RhdGVTZXQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3cuQ3VzdG9tU3RhdGVTZXQpIHtcbiAgICB3aW5kb3cuQ3VzdG9tU3RhdGVTZXQgPSBDdXN0b21TdGF0ZVNldDtcbiAgICBjb25zdCBhdHRhY2hJbnRlcm5hbHMgPSBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzO1xuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hJbnRlcm5hbHMgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gYXR0YWNoSW50ZXJuYWxzLmNhbGwodGhpcywgYXJncyk7XG4gICAgICBpbnRlcm5hbHMuc3RhdGVzID0gbmV3IEN1c3RvbVN0YXRlU2V0KHRoaXMpO1xuICAgICAgcmV0dXJuIGludGVybmFscztcbiAgICB9O1xuICB9XG59XG4iLCAiaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQgfSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExhbmdJbnRlcmZhY2Uge1xuICAvKipcbiAgICogQWRqdXN0cyB0aGUgbGFuZyB1c2VkIHRvIGZvcm1hdCBjb250ZW50IHJlbmRlcmVkIGJ5IHRoaXMgZWxlbWVudFxuICAgKiBAYXR0ciBsYW5nXG4gICAqL1xuICBsYW5nOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBMYW5nTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIExhbmdFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgbGFuZyB1c2VkIHRvIGZvcm1hdCBjb250ZW50IHJlbmRlcmVkIGJ5IHRoaXMgZWxlbWVudFxuICAgICAqIEBhdHRyIGxhbmdcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGxhbmc6IHN0cmluZztcbiAgfVxuICByZXR1cm4gTGFuZ0VsZW1lbnQgYXMgQ29uc3RydWN0b3I8TGFuZ0ludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50IH0gZnJvbSAnLi4vJztcblxuLyoqXG4gKiBTcGVjaWFsIGNsYXNzIHRoYXQgaGVscHMgZnJhbWV3b3JrIHdyYXBwZXIgc3R5bGluZyBrbm93IHdoZW4gYSB3cmFwcGVyIGZyYW1ld29ya1xuICogaGFzIGZpbmlzaGVkIHJlbmRlcmluZyBhbmQgdGh1cyBlbGVtZW50cyBjYW4gbm93IGJlIHNob3duIHdpdGhvdXQgYSBGT1VDLiBUaGlzXG4gKiBvY2N1cnMgaW4gdGhlIHNjZW5hcmlvIHdoZXJlIExpdCBlbGVtZW50cyByZWdpc3RlciBhbmQgcmVuZGVyIGJlZm9yZSB0aGVcbiAqIHdyYXBwZXIgZnJhbWV3b3JrIHBhc3NlcyBlbGVtZW50cyB0aGVpciBwcm9wcy5cbiAqL1xuZXhwb3J0IGNvbnN0IFdhaXRGb3JGcmFtZXdvcmtNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgV2FpdEZvckZyYW1ld29ya0VsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogJ210ZS1mdy1yZW5kZXJlZCcsIHJlZmxlY3Q6IHRydWUgfSkgX2Z3UmVuZGVyZWQ7XG4gIH1cbiAgcmV0dXJuIFdhaXRGb3JGcmFtZXdvcmtFbGVtZW50IGFzIFQ7XG59O1xuIiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3h9YDsiLCAiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IGJhc2VTdHlsZXMsIGRlZmluZUVsZW1lbnQsIE10ZUNvbnRlbnRCYXNlLCBvblVwZGF0ZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9kaXZpZGVyLnN0eWxlcyc7XG5cbi8qKiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS1kaXZpZGVyJylcbmV4cG9ydCBjbGFzcyBNdGVEaXZpZGVyIGV4dGVuZHMgTXRlQ29udGVudEJhc2Uge1xuICBzdGF0aWMgc3R5bGVzID0gW2Jhc2VTdHlsZXMsIHN0eWxlc107XG5cbiAgLyoqIExhYmVsIHRoYXQgd2lsbCBhcHBlYXIgaW4gTXRlRGl2aWRlciAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqIERlZmluZXMgd2hlcmUgdG8gYWxpZ24gdGhlIGxhYmVsICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgYWxpZ246ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInID0gJ2NlbnRlcic7XG5cbiAgLyoqIERlZmluZXMgb3JpZW50YXRpb24gb2YgTXRlRGl2aWRlciAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIG9yaWVudGF0aW9uOiAndmVydGljYWwnIHwgJ2hvcml6b250YWwnID0gJ2hvcml6b250YWwnO1xuXG4gIC8qKiBTZXRzIHdlaWdodCBvciB0aGlja25lc3Mgb2YgTXRlRGl2aWRlciAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHdlaWdodDogJ3RoaW4nIHwgJ3JlZ3VsYXInIHwgJ2JvbGQnID0gJ3JlZ3VsYXInO1xuXG4gIC8qKiBEZWZpbmVzIHJvbGUgb2YgTXRlRGl2aWRlciAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHJvbGU6ICdzZXBhcmF0b3InIHwgJ3ByZXNlbnRhdGlvbicgPSAnc2VwYXJhdG9yJztcblxuICAvKiogRGVmaW5lcyBhcmlhLW9yaWVudGF0aW9uICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGF0dHJpYnV0ZTogJ2FyaWEtb3JpZW50YXRpb24nIH0pIGFyaWFPcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyB8IG51bGw7XG5cbiAgQG9uVXBkYXRlKFsnbGFiZWwnLCAnb3JpZW50YXRpb24nXSwgeyBvbjogJ2JvdGgnIH0pXG4gIHByaXZhdGUgaGFuZGxlQTExeUNoYW5nZSgpIHtcbiAgICB0aGlzLnJvbGUgPSB0aGlzLmxhYmVsID8gJ3ByZXNlbnRhdGlvbicgOiAnc2VwYXJhdG9yJztcbiAgICB0aGlzLmFyaWFPcmllbnRhdGlvbiA9IHRoaXMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgPyB0aGlzLm9yaWVudGF0aW9uIDogbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGAke3RoaXMuaW5zdGFuY2VTdHlsZXN9JHt0aGlzLmxhYmVsfWA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLWRpdmlkZXInOiBNdGVEaXZpZGVyO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tZGl2aWRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTEpOy0tZGl2aWRlci13aWR0aDoycHg7ZGlzcGxheTpibG9jaztsaW5lLWhlaWdodDoxO21hcmdpbjp2YXIoLS1tdGUtc3BhY2UtbWQpIDB9Omhvc3QoW3dlaWdodD10aGluXSl7LS1kaXZpZGVyLXdpZHRoOjFweH06aG9zdChbd2VpZ2h0PWJvbGRdKXstLWRpdmlkZXItd2lkdGg6M3B4fTpob3N0KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF0pe21hcmdpbjowIHZhcigtLW10ZS1zcGFjZS1tZCl9Omhvc3QoW2xhYmVsXSl7YWxpZ24tc2VsZjpzdHJldGNoO2Rpc3BsYXk6ZmxleDt0ZXh0LWFsaWduOmNlbnRlcjt3aGl0ZS1zcGFjZTpub3dyYXB9Omhvc3QoW2xhYmVsXSk6YWZ0ZXIsOmhvc3QoW2xhYmVsXSk6YmVmb3Jle2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjpyZWxhdGl2ZX06aG9zdCg6bm90KFtsYWJlbF0pKXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWRpdmlkZXItY29sb3IpO2hlaWdodDp2YXIoLS1kaXZpZGVyLXdpZHRoKTttaW4taGVpZ2h0OnZhcigtLWRpdmlkZXItd2lkdGgpO3dpZHRoOjEwMCV9Omhvc3QoW29yaWVudGF0aW9uPXZlcnRpY2FsXTpub3QoW2xhYmVsXSkpe2FsaWduLXNlbGY6c3RyZXRjaDtoZWlnaHQ6YXV0bzttaW4td2lkdGg6dmFyKC0tZGl2aWRlci13aWR0aCk7d2lkdGg6dmFyKC0tZGl2aWRlci13aWR0aCl9Omhvc3QoW2xhYmVsXTpub3QoW29yaWVudGF0aW9uPXZlcnRpY2FsXSkpe2JvcmRlcjowO2ZsZXgtc2hyaW5rOjA7Z2FwOnZhcigtLW10ZS1zcGFjZS1tZCl9Omhvc3QoW2xhYmVsXTpub3QoW29yaWVudGF0aW9uPXZlcnRpY2FsXSkpOmFmdGVyLDpob3N0KFtsYWJlbF06bm90KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF0pKTpiZWZvcmV7Ym9yZGVyLXRvcDp2YXIoLS1kaXZpZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtoZWlnaHQ6YXV0bzt0cmFuc2Zvcm06dHJhbnNsYXRlWShjYWxjKDUwJSAtIHZhcigtLWRpdmlkZXItd2lkdGgpLzIpKTt3aWR0aDoxMDAlfTpob3N0KFtsYWJlbF06bm90KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF0pW2FsaWduPXN0YXJ0XSk6YmVmb3Jle3dpZHRoOjEwJX06aG9zdChbbGFiZWxdOm5vdChbb3JpZW50YXRpb249dmVydGljYWxdKVthbGlnbj1lbmRdKTphZnRlcnt3aWR0aDoxMCV9Omhvc3QoW2xhYmVsXVtvcmllbnRhdGlvbj12ZXJ0aWNhbF0pe2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LXNocmluazowO2dhcDp2YXIoLS1tdGUtc3BhY2Utc20pO2hlaWdodDphdXRvfTpob3N0KFtsYWJlbF1bb3JpZW50YXRpb249dmVydGljYWxdKTphZnRlciw6aG9zdChbbGFiZWxdW29yaWVudGF0aW9uPXZlcnRpY2FsXSk6YmVmb3Jle2JvcmRlci1sZWZ0OnZhcigtLWRpdmlkZXItd2lkdGgpIHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO2hlaWdodDoxMDAlO2xlZnQ6Y2FsYyg1MCUgLSB2YXIoLS1kaXZpZGVyLXdpZHRoKS8yKTt0b3A6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKX1gOyIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7ZGlzcGxheTpibG9jazstLXNpemU6MzUwcHg7LS1iYWNrZ3JvdW5kOnZhcigtLW10ZS1zdXJmYWNlLTIpOy0tY29sb3I6dmFyKC0tbXRlLWluay0xKTstLXBhZGRpbmc6dmFyKC0tbXRlLXNwYWNlLW1kKTstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTEpOy0taGVhZGVyLWRpdmlkZXI6c29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvcik7LS1mb290ZXItZGl2aWRlcjpzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yKTstLXBhbmVsLWJvcmRlcjpzb2xpZCAxcHggdmFyKC0tYm9yZGVyLWNvbG9yKTstLXRyYW5zaXRpb24tZHVyYXRpb246MjAwbXM7LS10cmFuc2l0aW9uLWZuOmN1YmljLWJlemllcigwLjQsMCwwLjIsMSl9Omhvc3QoOm5vdChbb3BlbmVkXSk6bm90KFtvcGVuZWRGdWxsXSkpIC5wYW5lbHtoZWlnaHQ6MXB4IWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7d2lkdGg6MXB4IWltcG9ydGFudDtjbGlwOnJlY3QoMCAwIDAgMCkhaW1wb3J0YW50O2JvcmRlcjpub25lIWltcG9ydGFudDtjbGlwLXBhdGg6aW5zZXQoNTAlKSFpbXBvcnRhbnQ7b3ZlcmZsb3c6aGlkZGVuIWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50O3doaXRlLXNwYWNlOm5vd3JhcCFpbXBvcnRhbnR9Omhvc3QgLnBhbmVse2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Ym9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMSk7Y29sb3I6dmFyKC0tY29sb3IpO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47b3ZlcmZsb3c6YXV0bztwb2ludGVyLWV2ZW50czphdXRvO3Bvc2l0aW9uOmFic29sdXRlO3RyYW5zaXRpb246dmlzaWJpbGl0eSB2YXIoLS10cmFuc2l0aW9uLWR1cmF0aW9uKSB2YXIoLS10cmFuc2l0aW9uLWZuKSx0cmFuc2Zvcm0gdmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbikgdmFyKC0tdHJhbnNpdGlvbi1mbik7dmlzaWJpbGl0eTpoaWRkZW47d2lsbC1jaGFuZ2U6dHJhbnNmb3JtO3otaW5kZXg6MX06aG9zdChbc2xvdD1vdmVybGF5XSkgLnBhbmVse2JveC1zaGFkb3c6dmFyKC0tbXRlLWVsZXZhdGlvbi16Myk7bWF4LXdpZHRoOjEwMCU7cG9zaXRpb246Zml4ZWR9Omhvc3QoW3Bvc2l0aW9uPWxlZnRdKSAucGFuZWwsOmhvc3QoW3Bvc2l0aW9uPXJpZ2h0XSkgLnBhbmVse2hlaWdodDoxMDAlO3dpZHRoOm1pbigxMDB2dyx2YXIoLS1zaXplKSl9Omhvc3QoW3Bvc2l0aW9uPWJvdHRvbV0pIC5wYW5lbCw6aG9zdChbcG9zaXRpb249dG9wXSkgLnBhbmVse2hlaWdodDptaW4oMTAwdmgsdmFyKC0tc2l6ZSkpO21heC1oZWlnaHQ6MTAwdmg7d2lkdGg6MTAwJX06aG9zdChbcG9zaXRpb249bGVmdF0pIC5wYW5lbHtsZWZ0OjA7dG9wOjA7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMTAwJSl9Omhvc3QoW3Bvc2l0aW9uPXRvcF0pIC5wYW5lbHtsZWZ0OjA7dG9wOjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpfTpob3N0KFtwb3NpdGlvbj1yaWdodF0pIC5wYW5lbHtyaWdodDowO3RvcDowO3RyYW5zZm9ybTp0cmFuc2xhdGUoMTAwJSl9Omhvc3QoW3Bvc2l0aW9uPWJvdHRvbV0pIC5wYW5lbHtib3R0b206MDtsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwJSl9Omhvc3QoW3dpdGhvdXRIZWFkZXJEaXZpZGVyXSl7LS1oZWFkZXItZGl2aWRlcjpub25lfTpob3N0KFt3aXRob3V0Rm9vdGVyRGl2aWRlcl0pey0tZm9vdGVyLWRpdmlkZXI6bm9uZX06aG9zdCAucGFuZWwub3BlbmVke3RyYW5zZm9ybTp0cmFuc2xhdGUoMCk7dHJhbnNpdGlvbjp2aXNpYmlsaXR5IHZhcigtLXRyYW5zaXRpb24tZHVyYXRpb24pIHZhcigtLXRyYW5zaXRpb24tZm4pLHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uLWR1cmF0aW9uKSB2YXIoLS10cmFuc2l0aW9uLWZuKTt2aXNpYmlsaXR5OnZpc2libGV9Omhvc3QgOjpzbG90dGVkKG10ZS1jb250ZW50KSw6aG9zdCA6OnNsb3R0ZWQobXRlLWZvb3RlciksOmhvc3QgOjpzbG90dGVkKG10ZS1oZWFkZXIpey0tY29tcG9zaXRpb24tcGFkZGluZy15OnZhcigtLXBhZGRpbmcpOy0tY29tcG9zaXRpb24tcGFkZGluZy14OnZhcigtLXBhZGRpbmcpfTpob3N0IDo6c2xvdHRlZChtdGUtaGVhZGVyKXstLWNvbXBvc2l0aW9uLWRpdmlkZXI6dmFyKC0taGVhZGVyLWRpdmlkZXIpfTpob3N0IDo6c2xvdHRlZChtdGUtZm9vdGVyKXstLWNvbXBvc2l0aW9uLWRpdmlkZXI6dmFyKC0tZm9vdGVyLWRpdmlkZXIpfS5jb250ZW50LWNvbnRhaW5lciwuaGVhZGVye2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCl9LmNvbnRlbnQtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWdyb3c6MTttaW4taGVpZ2h0OjA7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS5jb250ZW50e2ZsZXgtZ3JvdzoxO292ZXJmbG93OmF1dG87d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhcnt3aWR0aDoxNHB4fS5jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10cmFja3tib3JkZXItcmFkaXVzOjEwcHh9LmNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie2JhY2tncm91bmQ6dmFyKC0tbXRlLWJvcmRlci0yKTtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7Ym9yZGVyOjNweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjEwcHh9LmNvbnRlbnQgOjpzbG90dGVkKG10ZS1jb250ZW50KXtwYWRkaW5nLWJvdHRvbTp2YXIoLS1jb21wb3NpdGlvbi1wYWRkaW5nLXkpO3BhZGRpbmctdG9wOnZhcigtLWNvbXBvc2l0aW9uLXBhZGRpbmcteSl9LmZvb3RlcntiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpfUBtZWRpYSBzY3JlZW4gYW5kIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSl7Omhvc3QgLnBhbmVsLDpob3N0IC5wYW5lbC5vcGVuZWR7dHJhbnNpdGlvbjpub25lfX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6Y29udGVudHN9c2xvdFtuYW1lPW92ZXJsYXldOjpzbG90dGVkKCope3Bvc2l0aW9uOmFic29sdXRlfWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLElBQUFBLGVBQXFCO0FBQ3JCLElBQUFDLHNCQUFnRDs7O0FDQWhELHdCQUFnQztBQUNoQyxpQkFBMkI7QUFDM0IsSUFBQUMsaUJBQWlEOzs7QUNIakQsb0JBQXVCO0FBR3ZCLElBQU0sY0FBaUQ7QUFBQSxFQUNyRCxHQUFHO0FBQUEsRUFDSCxJQUFJLENBQUMsY0FBYyxhQUFhO0FBQUEsRUFDaEMsSUFBSSxDQUFDLGFBQWEsY0FBYztBQUFBLEVBQ2hDLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLEdBQUc7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U0FBUyxLQUFLLENBQUM7R0FoRGhCLFVBZ0RrQjtBQUk3QjtNQURDLDhCQUFTLEVBQUUsV0FBVyxtQkFBbUIsU0FBUyxLQUFLLENBQUM7R0FuRDlDLFVBb0RYO0FBRzJDO01BQTFDLDhCQUFTLEVBQUUsTUFBTSxRQUFRLFNBQVMsS0FBSyxDQUFDO0dBdkQ5QixVQXVEZ0M7QUFLZDtNQUE1Qiw4QkFBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0dBNURoQixVQTREa0I7QUFFYztNQUExQywyQ0FBc0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztHQTlEOUIsVUE4RGdDO0FBc0JuQztFQURQLFNBQVMsQ0FBQyxvQkFBb0IsOEJBQThCLHdCQUF3QixXQUFXLENBQUM7R0FuRnRGLFVBb0ZIO0FBcEZHLFlBQU47RUFETixjQUFjLFlBQVk7R0FDZDsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfc3R5bGVzIiwgImltcG9ydF9zdHlsZXMiLCAiYWNjIiwgInByb3AiLCAidmFsdWUiLCAic3R5bGVzIiwgImRlcCIsICJpbXBvcnRfc3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X3N0eWxlcyIsICJnZXR0ZXJDb25maWciLCAib2JzZXJ2ZXIiLCAiZSIsICJzZXR0ZXJDb25maWciLCAiY3NzVmFyIiwgIm9ic2VydmVyIiwgInBvcnRhbENvbnRyb2xsZXIiLCAiZWxlbWVudCIsICJzY3JvbGxYIiwgInNjcm9sbFkiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAicHJlc2V0IiwgIm9wdGlvbnMiLCAiaW1wb3J0X2NvbnRleHQiLCAiY29udGV4dCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfaWZfZGVmaW5lZCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2NsYXNzX21hcCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgIm5vZGUiLCAib2JzZXJ2ZXIiLCAic3RhdGUiLCAiaW1wb3J0X2lzX3NlcnZlciIsICJvYnNlcnZlciIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAic3R5bGVzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9jbGFzc19tYXAiLCAiaW1wb3J0X3N0eWxlcyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgIm5leHRVbmlxdWVJZCIsICJzdHlsZXMiLCAibmV4dFVuaXF1ZUlkIiwgInN0eWxlcyJdCn0K
