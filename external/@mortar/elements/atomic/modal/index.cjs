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

// src/atomic/modal/index.ts
var modal_exports = {};
__export(modal_exports, {
  MteModal: () => MteModal
});
module.exports = __toCommonJS(modal_exports);

// src/atomic/modal/modal.element.ts
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

// src/atomic/modal/modal.styles.ts
var import_lit16 = require("lit");
var styles9 = import_lit16.css`:host{display:block;--mte-modal-background:var(--mte-surface-2);--mte-modal-color:inherit;--mte-modal-padding:var(--mte-space-md);--mte-modal-header-divider:solid 1px var(--mte-border-1);--mte-modal-footer-divider:solid 1px var(--mte-border-1);--mte-modal-border-radius:var(--mte-border-radius-xl);--transition-duration:200ms}:host(:not([opened]):not([openedFull])) .modal{height:1px!important;position:absolute!important;width:1px!important;clip:rect(0 0 0 0)!important;border:none!important;clip-path:inset(50%)!important;overflow:hidden!important;padding:0!important;white-space:nowrap!important}:host .modal{background:var(--mte-modal-background);border-color:transparent;border-radius:var(--mte-modal-border-radius);border-width:0;box-shadow:var(--mte-elevation-z3);color:var(--color);display:flex;flex-direction:column;left:50%;max-height:95vh;max-width:95vw;opacity:0;overflow:hidden;pointer-events:auto;position:fixed;top:50%;transform:translate(-50%,calc(-50% + 30px));transition:visibility 0s var(--transition-duration),transform var(--transition-duration),opacity var(--transition-duration);visibility:hidden;width:auto;will-change:transform;z-index:1}:host([size=sm]) .modal{width:min(440px,95vw)}:host([size=md]) .modal{width:min(600px,95vw)}:host([size=lg]) .modal{width:min(960px,95vw)}:host([radius=sm]) .modal{--mte-modal-border-radius:var(--mte-border-radius-md)}:host([radius=md]) .modal{--mte-modal-border-radius:var(--mte-border-radius-lg)}:host([withoutHeaderDivider]){--mte-modal-header-divider:none}:host([withoutFooterDivider]){--mte-modal-footer-divider:none}:host .modal.opened{opacity:1;transform:translate(-50%,-50%);transition:visibility 0s,transform var(--transition-duration),opacity var(--transition-duration);visibility:visible}:host ::slotted(mte-content),:host ::slotted(mte-footer),:host ::slotted(mte-header){--composition-padding-y:var(--mte-modal-padding);--composition-padding-x:var(--mte-modal-padding)}:host ::slotted(mte-header){--composition-divider:var(--mte-modal-header-divider)}:host ::slotted(mte-footer){--composition-divider:var(--mte-modal-footer-divider)}.content-container,.header{background:var(--mte-modal-background)}.content-container{display:flex;flex-grow:1;overflow:hidden;position:relative}.content{flex-grow:1;overflow:auto;will-change:transform}.content ::slotted(mte-content){padding-bottom:var(--composition-padding-y);padding-top:var(--composition-padding-y)}.footer{background:var(var(--mte-modal-background))}@media screen and (prefers-reduced-motion:reduce){:host .modal,:host .modal.opened{transition:none}}`;

// src/atomic/modal/modal.element.ts
var import_if_defined3 = require("lit-html/directives/if-defined.js");
var import_class_map3 = require("lit-html/directives/class-map.js");

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

// src/atomic/modal/modal.element.ts
var import_styles8 = require("@mortar/styles");
var nextUniqueId3 = 0;
var MteModal = class extends SizeMixin(
  RadiusMixin(
    OverlayMixin(
      PresetMixinFactory("MteModal")(
        StylePartsMixin(MteContentBase)
      )
    )
  )
) {
  constructor() {
    super(...arguments);
    this.internalId = nextUniqueId3++;
    this.withoutCloseOnClickOutside = false;
    this.withoutCloseOnEscape = false;
    this.withoutFooterDivider = false;
    this.withoutHeaderDivider = false;
    this.withContentFocus = false;
    this.ariaModal = "true";
    this.role = "dialog";
    this.id = `mte-modal--${this.internalId}`;
    this.animationDuration = import_styles8.config.animation.transitionDurationJs.short * 1e3;
    this.contentStyleSelectorRoot = ":host:host:host:host:host:host .modal";
    this.instanceStyleSelectorRoot = ":host:host:host:host:host:host .modal";
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
      const headerId = existingId ?? `mte-modal-header--${this.internalId}`;
      this._headerElementRef?.setAttribute("id", headerId);
      this.ariaLabelledBy = headerId;
    } else {
      this.ariaLabelledBy = null;
    }
  }
  onCloseOnEscapeChange() {
    this.setOverlayOptions({
      withCloseOnClickOutside: !this.withoutCloseOnClickOutside,
      withCloseOnEscape: !this.withoutCloseOnEscape,
      withDimBackdrop: true,
      backdropTransitionDuration: `${this.animationDuration}ms`
    });
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    if (this.headerElements.length > 0) {
      this.headerElementRef = this.headerElements[0];
    }
  }
  open() {
    return new Promise((resolve) => {
      this.handleOverlayOpen({
        clickOutsideElement: this.modalElem
      }).then(() => {
        setTimeout(() => {
          this.handleOverlayOpenEnd().then(() => {
            resolve();
          });
        }, this.animationDuration);
      });
    });
  }
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
  /** Override default transition timing styles when changed */
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    if (changedProps.has("animationDuration")) {
      this.setInstanceStyle("modal", (0, import_styles8.selectorFactory)(this.instanceStyleSelectorRoot), {
        "--transition-duration": `${this.animationDuration}ms`
      });
    }
  }
  render() {
    return import_lit19.html`${this.instanceStyles}<div class="modal ${(0, import_class_map3.classMap)({ opened: this.opened && this.readyForAnimation })}"><div class="header" part="header"><slot name="header" @slotchange="${this.handleHeaderSlotChange}"></slot></div><div class="content-container"><div class="content" part="content" tabindex="${(0, import_if_defined3.ifDefined)(this.withContentFocus ? 0 : null)}"><slot></slot></div></div><div part="footer" class="footer"><slot name="footer"></slot></div></div>`;
  }
};
MteModal.styles = [styles7, styles4, styles9];
__decorateClass([
  (0, import_decorators21.property)({ reflect: true, type: Boolean })
], MteModal.prototype, "withoutCloseOnClickOutside", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true, type: Boolean })
], MteModal.prototype, "withoutCloseOnEscape", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true, type: Boolean })
], MteModal.prototype, "withoutFooterDivider", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true, type: Boolean })
], MteModal.prototype, "withoutHeaderDivider", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true, type: Boolean })
], MteModal.prototype, "withContentFocus", 2);
__decorateClass([
  (0, import_decorators21.property)({
    attribute: "aria-modal",
    reflect: true
  })
], MteModal.prototype, "ariaModal", 2);
__decorateClass([
  (0, import_decorators21.property)({ attribute: "aria-describedby", reflect: true })
], MteModal.prototype, "ariaDescribedBy", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true })
], MteModal.prototype, "role", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true })
], MteModal.prototype, "id", 2);
__decorateClass([
  (0, import_decorators21.property)({ attribute: "aria-labelledby", reflect: true })
], MteModal.prototype, "ariaLabelledBy", 2);
__decorateClass([
  (0, import_decorators21.property)({ type: Number, reflect: true })
], MteModal.prototype, "animationDuration", 2);
__decorateClass([
  (0, import_decorators21.query)(".modal")
], MteModal.prototype, "modalElem", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true })
], MteModal.prototype, "triggerOn", 2);
__decorateClass([
  (0, import_decorators21.queryAssignedElements)({ slot: "header" })
], MteModal.prototype, "headerElements", 2);
__decorateClass([
  onUpdate(["withoutCloseOnEscape", "withoutCloseOnClickOutside"])
], MteModal.prototype, "onCloseOnEscapeChange", 1);
MteModal = __decorateClass([
  defineElement("mte-modal")
], MteModal);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9tb2RhbC9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL21vZGFsIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2Jhc2UtY2xhc3Nlcy9tdGUuZWxlbWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS91dGlsaXRpZXMvY3NzLWluLWpzL2Nzcy1pbi1qcy5wcm9wZXJ0eS1tYXBwZXJzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9jc3MtaW4tanMvY3NzLWluLWpzLnV0aWxpdGllcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS91dGlsaXRpZXMvZm9jdXMudXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9lbnZpcm9ubWVudC51dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Zvcm0udXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9yZWFjdGl2ZS1zaWduYWwudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYmFzZS1jbGFzc2VzL2NvbnRlbnQuYmFzZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9hdHRyaWJ1dGUtY29udmVydGVyL3Jlc3BvbnNpdmUtYXR0cmlidXRlLmNvbnZlcnRlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb25zdGFudHMvaGViLWxvZ28udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29udHJvbGxlcnMvY2xpY2stb3V0c2lkZS5jb250cm9sbGVyLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbnRyb2xsZXJzL2ZvY3VzLXRyYXAuY29udHJvbGxlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb250cm9sbGVycy9zbG90LmNvbnRyb2xsZXIudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc2VydmljZXMvdGhlbWUuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy9wb3J0YWwuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy9oaXN0b3J5LWFwaS5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZpY2VzL2xvY2FsaXplLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29udHJvbGxlcnMvcG9ydGFsLmNvbnRyb2xsZXIudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29udHJvbGxlcnMvZGV0ZWN0LWNoaWxkLWNsb3NlLmNvbnRyb2xsZXIudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24vYnV0dG9uLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pY29uL2ljb24ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdG9vbGJhci90b29sYmFyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jYXJkL2NhcmQucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RyZWUvdHJlZS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGFnL3RhZy5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYmFkZ2UvYmFkZ2UucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2xpbmsvbGluay5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYWxlcnQvYWxlcnQucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2lucHV0L2lucHV0LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9kcmF3ZXIvZHJhd2VyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hc2lkZS9hc2lkZS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi1pdGVtLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9tb2RhbC9tb2RhbC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvY2hlY2tib3gvY2hlY2tib3gucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3JhZGlvL3JhZGlvLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXYvbmF2LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zd2l0Y2gvc3dpdGNoLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXRpdmUtc2VsZWN0L25hdGl2ZS1zZWxlY3QucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RleHRhcmVhL3RleHRhcmVhLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9za2VsZXRvbi9za2VsZXRvbi5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc2xpZGVyL3NsaWRlci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcmFuZ2Utc2xpZGVyL3JhbmdlLXNsaWRlci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc2VnbWVudGVkLWNvbnRyb2wvc2VnbWVudGVkLWNvbnRyb2wucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXQuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5kZWNvcmF0b3IudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXQuY29udGV4dC50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb250cm9sbGVycy9hcHBsaWVkLXByZXNldC1jb250ZXh0LmNvbnRyb2xsZXIudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvZGVjb3JhdG9ycy9vbi11cGRhdGUuZGVjb3JhdG9yLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2RlY29yYXRvcnMvZXZlbnQtZW1pdHRlci5kZWNvcmF0b3IudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvZGVjb3JhdG9ycy9kZWZpbmUtZWxlbWVudC5kZWNvcmF0b3IudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2RlbnNpdHkubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9kaXNhYmxlZC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvaW52ZXJzZS5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvaW52ZXJzZS5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3NpemUubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3RhYmluZGV4Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9yYWRpdXMubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3N0eWxlLXBhcnRzLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvYnV0dG9uLm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvb3ZlcmxheS5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvb3ZlcmxheS5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9maWVsZHNldC5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9mb3JtLWZpZWxkLm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvYXV0by1hY3RpdmUtbGluay5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvc2xvdC1vYnNlcnZlci5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvY2hlY2tib3gubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL21hcHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL2FvbS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvbXV0YXRpb24tb2JzZXJ2ZXJzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy91dGlscy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvVmFsaWRpdHlTdGF0ZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvQ3VzdG9tU3RhdGVTZXQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL0hUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9wYXRjaC1mb3JtLXByb3RvdHlwZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvZWxlbWVudC1pbnRlcm5hbHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2xhbmcubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3dhaXQtZm9yLWZ3Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3N0eWxlcyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zdHlsZXMvYmFzZS5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9kaXZpZGVyL2RpdmlkZXIuZWxlbWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2RpdmlkZXIvZGl2aWRlci5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9tb2RhbC9tb2RhbC5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL3V0aWxpdGllcy9vdmVybGF5LXRyaWdnZXIiLCAiLi4vLi4vLi4vLi4vc3JjL3V0aWxpdGllcy9vdmVybGF5LXRyaWdnZXIvb3ZlcmxheS10cmlnZ2VyLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0ICogZnJvbSAnLi9tb2RhbC5lbGVtZW50JztcbiIsIG51bGwsICIvKiBlc2xpbnQtZGlzYWJsZSB3Yy9uby1zZWxmLWNsYXNzICovXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHNlbGVjdG9yRmFjdG9yeSwgU2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgY29uc3RydWN0SW5zdGFuY2VTdHlsZXMsXG4gIGdlbmVyYXRlU2VsZWN0b3JzRnJvbVN0eWxlTWFwLFxuICBTZWxlY3RvclN0eWxlcyxcbiAgU3R5bGVNYXAsXG4gIFVuc3Vic2NyaWJlcixcbn0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IHVuc2FmZUhUTUwgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3Vuc2FmZS1odG1sLmpzJztcbmltcG9ydCB7IE1vcnRhclByZXNldFRoZW1lIH0gZnJvbSAnLi4vcHJlc2V0cyc7XG5cbi8vIERpc2FibGUgdGhpcyB3YXJuaW5nIGZvciBub3cgYnkgcHJlLW1hcmtpbmcgaXQgYXMgaXNzdWVkIHNvIHVzZXJzIGRvbid0IGhhdmUgdG8gc2VlIGl0XG4vLyBUT0RPOiBBc2sgbGl0IHRlYW0gd2h5IHRoaXMgaXMgdGhyb3duIGV2ZXJ5d2hlcmUgYW5kIHdoYXQgYWx0ZXJuYXRpdmVzIGFyZSBmb3IgcHJlc2V0IHNvbHV0aW9uXG5nbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzID8/PSBuZXcgU2V0KCk7XG5nbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzLmFkZChcbiAgJ092ZXJyaWRpbmcgUmVhY3RpdmVFbGVtZW50LmdldFByb3BlcnR5RGVzY3JpcHRvcigpIGlzIGRlcHJlY2F0ZWQuIFRoZSBvdmVycmlkZSB3aWxsIG5vdCBiZSBjYWxsZWQgd2l0aCBzdGFuZGFyZCBkZWNvcmF0b3JzIFNlZSBodHRwczovL2xpdC5kZXYvbXNnL25vLW92ZXJyaWRlLWdldC1wcm9wZXJ0eS1kZXNjcmlwdG9yIGZvciBtb3JlIGluZm9ybWF0aW9uLidcbik7XG5cbmV4cG9ydCBjbGFzcyBNdGVFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHByaXZhdGUgX19pbnN0YW5jZVN0eWxlU2hlZXRNYXAgPSBuZXcgTWFwPHN0cmluZywgU2VsZWN0b3JTdHlsZXNbXT4oKTtcbiAgcHJpdmF0ZSBfX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlID0gZmFsc2U7XG5cbiAgLyoqIFNldCB0byB0cnVlIHdoZW4gZmlyc3RVcGRhdGVkIGlzIGZpcnN0IGNhbGxlZCAqL1xuICBwcm90ZWN0ZWQgX19maXJzdFVwZGF0ZWQgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgaW5zdGFuY2VTdHlsZXM7XG5cbiAgLyoqXG4gICAqIEFsbCBzdWJzIHB1c2hlZCB0byB0aGlzIGFycmF5IHdpbGwgYmUgY2xlYXJlZCBpbiB0aGUgZGlzY29ubmVjdGVkQ2FsbGJhY2tcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc3ViczogVW5zdWJzY3JpYmVyW10gPSBbXTtcblxuICAvKiogU3R5bGUgbWFwcGluZ3MgdGhhdCBhcmUgYXBwbGllZCB0byB0aGUgaG9zdCBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIHJlZmxlY3Q6IHRydWUgfSkgc2U/OiBTdHlsZU1hcDtcblxuICAvKipcbiAgICogVGhlIHRoZW1lIHRvIHVzZSBmb3Igc3R5bGluZyB0aGlzIGNvbXBvbmVudC4gT3ZlcnJpZGVzIHRoZSBnbG9iYWwgcHJlc2V0IGZvciB0aGlzIGluc3RhbmNlIG9mIHRoaXMgY29tcG9uZW50LlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBhdHRyaWJ1dGU6ICdkYXRhLW10ZS10aGVtZScgfSlcbiAgc2V0IHRoZW1lKHRoZW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuX3RoZW1lO1xuICAgIHRoaXMuX3RoZW1lID0gdGhlbWU7XG4gICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCd0aGVtZScsIG9sZFZhbHVlKTtcbiAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IGEgYmV0dGVyIHdheSB0byBzb2x2ZSB0aGlzIGZvciBhbGwgcHJlc2V0c1xuICAgIGlmICh0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZSkge1xuICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlcXVlc3RVcGRhdGUoJ3RoZW1lJywgbnVsbCkpO1xuICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBudWxsKSk7XG4gICAgfVxuICB9XG4gIGdldCB0aGVtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aGVtZSA/PyB0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZT8ubmFtZTtcbiAgfVxuICBwcml2YXRlIF90aGVtZTogc3RyaW5nO1xuXG4gIC8qKiBVc2VkIHRvIGRlY2xhcmUgYSBsb2NhbCB0aGVtZSB2YWx1ZSBkZXRlcm1pbmVkIGJ5IHRoZSBsb2NhbCBwcmVzZXQgaWYgaXQgaXMgc2V0LiAqL1xuICBAc3RhdGUoKSBwcm90ZWN0ZWQgX19sb2NhbFByZXNldFRoZW1lOiBNb3J0YXJQcmVzZXRUaGVtZTtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBzZWxlY3RvciB0byBoYXZlIGluc3RhbmNlIHN0eWxlcyB0YXJnZXQgYSBzcGVjaWZpYyBpbm5lciBlbGVtZW50LlxuICAgKiBVc2VmdWwgaW4gc3BlY2lmaWMgc2NlbmFyaW9zIHdoZXJlIGZvY3VzIGlzIGRlbGVnYXRlZCBsaWtlIGJ1dHRvbnMuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQgdGhpcyByZXBlYXRzIGA6aG9zdGAgc2l4IHRpbWVzIHRvIHByb3ZpZGUgYSBzcGVjaWZpY2l0eSBvZiA2XG4gICAqL1xuICBwcm90ZWN0ZWQgaW5zdGFuY2VTdHlsZVNlbGVjdG9yUm9vdCA9ICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnO1xuXG4gIC8qKlxuICAgKiBDYW4gYmUgY2FsbGVkIGJ5IGRlcml2ZWQgY2xhc3NlcyB0byByZWdpc3RlciBuZXcgaW5zdGFuY2UgbGV2ZWwgZHluYW1pYyBzdHlsZXMuXG4gICAqIFdoZW4gY2FsbGVkIHRoZSBpbnN0YW5jZSBzdHlsZXNoZWV0IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGUgbGF0ZXN0IHN0eWxlcyB0aGlzIHVwZGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBzZXRJbnN0YW5jZVN0eWxlKGlkOiBzdHJpbmcsIHNlbGVjdG9yOiBTZWxlY3RvckZhY3RvcnksIHN0eWxlTWFwOiBTdHlsZU1hcCkge1xuICAgIC8vIFdlIHBhcnNlIGFsbCBzdHlsZSBpbmZvcm1hdGlvbiBoZXJlIGFuZCBzY29wZSBpdCB0byB0aGUgZ2l2ZW4gaWQuIFRoaXMgZW5zdXJlcyB3ZVxuICAgIC8vIG9ubHkgZXZlciBuZWVkIHRvIHJlLXBhcnNlIHRoaXMgcG9ydGlvbiBvZiBzdHlsZSBpbmZvcm1hdGlvbiB3aGVuIGl0cyBhc3NvY2lhdGVkXG4gICAgLy8gaWQgaXMgdXBkYXRlZCBhZ2Fpbi5cbiAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TWFwLnNldChpZCwgZ2VuZXJhdGVTZWxlY3RvcnNGcm9tU3R5bGVNYXAoc2VsZWN0b3IsIHN0eWxlTWFwKSk7XG4gICAgdGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBBIGN1c3RvbSBob29rIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gaW4gZGVyaXZlZCBjbGFzc2VzIHRvIHNldCBpbnN0YW5jZSBzdHlsZXMgYXMgbmVlZGVkICovXG4gIHByb3RlY3RlZCB1cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpIHtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcygnc2UnKSkge1xuICAgICAgdGhpcy5zZXRJbnN0YW5jZVN0eWxlKCdzZScsIHNlbGVjdG9yRmFjdG9yeSh0aGlzLmluc3RhbmNlU3R5bGVTZWxlY3RvclJvb3QpLCB0aGlzLnNlID8/IHt9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgd2lsbFVwZGF0ZShjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci53aWxsVXBkYXRlKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBDYWxsIHRoZSB1cGRhdGVJbnN0YW5jZVN0eWxlcyBob29rXG4gICAgdGhpcy51cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaW5zdGFuY2Ugc3R5bGVzIG5lZWQgdG8gYmUgcmVyZW5kZXJlZFxuICAgIGlmICh0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2VTdHlsZXMgPSB1bnNhZmVIVE1MKFxuICAgICAgICBgPHN0eWxlIGlkPVwiX19pbnN0YW5jZS1zdHlsZXNcIj4ke2NvbnN0cnVjdEluc3RhbmNlU3R5bGVzKFxuICAgICAgICAgIHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXRNYXBcbiAgICAgICAgKX08L3N0eWxlPmBcbiAgICAgICk7XG4gICAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHRoaXMuX19maXJzdFVwZGF0ZWQgPSB0cnVlO1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIHRoaXMuc3Vicy5mb3JFYWNoKCh1bnN1YikgPT4gdW5zdWIoKSk7XG4gICAgdGhpcy5zdWJzID0gW107XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQgeyBQcm9wZXJ0eU1hcHBlciwgU3R5bGVQcm9wZXJ0eSB9IGZyb20gJy4vY3NzLWluLWpzLnR5cGVzJztcblxuY29uc3QgcHJvcGVydHlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IHN0cmluZ1tdPiA9IHtcbiAgbTogJ21hcmdpbicsXG4gIG14OiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXSxcbiAgbXk6IFsnbWFyZ2luVG9wJywgJ21hcmdpbkJvdHRvbSddLFxuICBtdDogJ21hcmdpblRvcCcsXG4gIG1yOiAnbWFyZ2luUmlnaHQnLFxuICBtYjogJ21hcmdpbkJvdHRvbScsXG4gIG1sOiAnbWFyZ2luTGVmdCcsXG4gIHA6ICdwYWRkaW5nJyxcbiAgcHg6IFsncGFkZGluZ0xlZnQnLCAncGFkZGluZ1JpZ2h0J10sXG4gIHB5OiBbJ3BhZGRpbmdUb3AnLCAncGFkZGluZ0JvdHRvbSddLFxuICBwdDogJ3BhZGRpbmdUb3AnLFxuICBwcjogJ3BhZGRpbmdSaWdodCcsXG4gIHBiOiAncGFkZGluZ0JvdHRvbScsXG4gIHBsOiAncGFkZGluZ0xlZnQnLFxuICBkOiAnZGlzcGxheScsXG4gIGE6ICdhbGlnbkl0ZW1zJyxcbiAgajogJ2p1c3RpZnlDb250ZW50JyxcbiAgZGlyZWN0aW9uOiAnZmxleERpcmVjdGlvbicsXG4gIHNocmluazogJ2ZsZXhTaHJpbmsnLFxuICBncm93OiAnZmxleEdyb3cnLFxuICB3cmFwOiAnZmxleFdyYXAnLFxuICB3OiAnd2lkdGgnLFxuICBtYXh3OiAnbWF4V2lkdGgnLFxuICBtaW53OiAnbWluV2lkdGgnLFxuICBoOiAnaGVpZ2h0JyxcbiAgbWF4aDogJ21heEhlaWdodCcsXG4gIG1pbmg6ICdtaW5IZWlnaHQnLFxuICBmczogJ2ZvbnRTaXplJyxcbiAgZnc6ICdmb250V2VpZ2h0JyxcbiAgYmc6ICdiYWNrZ3JvdW5kJyxcbiAgYzogJ2NvbG9yJyxcbiAgZWxldmF0aW9uOiAnYm94U2hhZG93Jyxcbn07XG5cbi8qKiBNYXBzIHByb3BlcnR5IHNob3J0aGFuZCB2YWx1ZXMgdG8gb25lIG9yIG1hbnkgZnVsbCBjc3MgcHJvcGVydGllcyAqL1xuZXhwb3J0IGNvbnN0IHByb3BTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5yZWR1Y2UoKGFjYywgcHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFByb3BzID0gcHJvcGVydHlNYXBbcHJvcE1hcC5wcm9wXSA/PyBwcm9wTWFwLnByb3A7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLmFjYyxcbiAgICAgIC4uLihBcnJheS5pc0FycmF5KG1hcHBlZFByb3BzKVxuICAgICAgICA/IG1hcHBlZFByb3BzLm1hcCgocHJvcCkgPT4gKHsgcHJvcCwgdmFsdWU6IHByb3BNYXAudmFsdWUgfSkpXG4gICAgICAgIDogW3sgcHJvcDogbWFwcGVkUHJvcHMsIHZhbHVlOiBwcm9wTWFwLnZhbHVlIH1dKSxcbiAgICBdO1xuICB9LCBbXSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIEBtb3J0YXIvc3R5bGVzIGNvbmZpZyB2YWx1ZSBmb3IgYSBnaXZlbiBkb3Qgbm90YXRlZCBzdHJpbmcuXG4gKiBOdW1iZXJzIGFuZCBub24tZG90IG5vdGF0ZWQgc3RyaW5nIHdpbGwganVzdCBiZSByZXR1cm5lZCBhcyBpcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUgPSAodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29uZmlnUGF0aCA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gICAgICBjb25zdCBjb25maWdWYWx1ZSA9IGNvbmZpZ1BhdGgucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjW2tleV07XG4gICAgICB9LCBjb25maWcpO1xuICAgICAgcmV0dXJuIGNvbmZpZ1ZhbHVlID8/IHZhbHVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59O1xuXG4vKiogTWFwcyBkb3Qgbm90YXRlZCBzdHJpbmcgdmFsdWVzIHRvIHRoZW1lIGNvbmZpZyB2YXJpYWJsZXMgKi9cbmV4cG9ydCBjb25zdCBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlTWFwcGVyOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5yZWR1Y2UoKGFjYywgcHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZ1ZhbHVlID0gZG90U3RyaW5nVG9Db25maWdWYWx1ZShwcm9wTWFwLnZhbHVlKTtcbiAgICBpZiAoY29uZmlnVmFsdWUpIHtcbiAgICAgIHByb3BNYXAudmFsdWUgPSBjb25maWdWYWx1ZSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gWy4uLmFjYywgcHJvcE1hcF07XG4gIH0sIFtdKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBOdW1iZXJUb1B4ID0gKHZhbDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCkgPT4ge1xuICBpZiAoIXZhbCkge1xuICAgIHJldHVybiB2YWwgYXMgbnVsbDtcbiAgfVxuICByZXR1cm4gIWlzTmFOKE51bWJlcih2YWwpKSA/IGAke3ZhbH1weGAgOiAodmFsIGFzIHN0cmluZyk7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwUHhUb051bWJlciA9ICh2YWw6IHN0cmluZyB8IG51bGwpID0+IHtcbiAgaWYgKCF2YWwpIHtcbiAgICByZXR1cm4gdmFsIGFzIG51bGw7XG4gIH1cbiAgcmV0dXJuIE51bWJlcih2YWwucmVwbGFjZSgncHgnLCAnJykpO1xufTtcblxuLyoqIE1hcHMgdGhlIHZhbHVlcyBvZiBhbnkgZ2l2ZW4gcHJvcHMgdG8gcHggdW5pdHMgaWYgaXQgaXMgYSBudW1iZXIgKi9cbmV4cG9ydCBjb25zdCBudW1iZXJUb1B4OiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IG1hcE51bWJlclRvUHgocHJvcE1hcC52YWx1ZSk7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBzcGFjaW5nTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAnMCc6IGNvbmZpZy5zcGFjZS5ub25lLFxuICAnMSc6IGNvbmZpZy5zcGFjZS54cyxcbiAgJzInOiBjb25maWcuc3BhY2Uuc20sXG4gICczJzogY29uZmlnLnNwYWNlLm1kLFxuICAnNCc6IGNvbmZpZy5zcGFjZS5sZyxcbiAgJzUnOiBjb25maWcuc3BhY2UueGwsXG4gICc2JzogY29uZmlnLnNwYWNlLnh4bCxcbiAgJzcnOiBjb25maWcuc3BhY2UueHh4bCxcbiAgJ25vbmUnOiBjb25maWcuc3BhY2Uubm9uZSxcbiAgJ3h4cyc6IGNvbmZpZy5zcGFjZS54eHMsXG4gICd4cyc6IGNvbmZpZy5zcGFjZS54cyxcbiAgJ3NtJzogY29uZmlnLnNwYWNlLnNtLFxuICAnbWQnOiBjb25maWcuc3BhY2UubWQsXG4gICdsZyc6IGNvbmZpZy5zcGFjZS5sZyxcbiAgJ3hsJzogY29uZmlnLnNwYWNlLnhsLFxuICAneHhsJzogY29uZmlnLnNwYWNlLnh4bCxcbiAgJ3h4eGwnOiBjb25maWcuc3BhY2UueHh4bCxcbn07XG5cbi8qKiBNYXBzIHNwYWNpbmcgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBzcGFjaW5nIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBzcGFjaW5nVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBzcGFjaW5nTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBib3JkZXJSYWRpdXNNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIG5vbmU6IGNvbmZpZy5ib3JkZXIucmFkaXVzLm5vbmUsXG4gIHhzOiBjb25maWcuYm9yZGVyLnJhZGl1cy54cyxcbiAgc206IGNvbmZpZy5ib3JkZXIucmFkaXVzLnNtLFxuICBtZDogY29uZmlnLmJvcmRlci5yYWRpdXMubWQsXG4gIGxnOiBjb25maWcuYm9yZGVyLnJhZGl1cy5sZyxcbiAgeGw6IGNvbmZpZy5ib3JkZXIucmFkaXVzLnhsLFxuICB4eGw6IGNvbmZpZy5ib3JkZXIucmFkaXVzLnh4bCxcbiAgZnVsbDogY29uZmlnLmJvcmRlci5yYWRpdXMuZnVsbCxcbn07XG5cbi8qKiBNYXBzIGJvcmRlciByYWRpdXMgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBib3JkZXIgcmFkaXVzIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGJvcmRlclJhZGl1c01hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgYm9yZGVyV2lkdGhNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIG5vbmU6IGNvbmZpZy5ib3JkZXIud2lkdGgubm9uZSxcbiAgc206IGNvbmZpZy5ib3JkZXIud2lkdGguc20sXG4gIG1kOiBjb25maWcuYm9yZGVyLndpZHRoLm1kLFxuICBsZzogY29uZmlnLmJvcmRlci53aWR0aC5sZyxcbn07XG5cbi8qKiBNYXBzIGJvcmRlciB3aWR0aCB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIGJvcmRlciB3aWR0aCBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGJvcmRlcldpZHRoTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBvcGFjaXR5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB4eGw6IGNvbmZpZy5vcGFjaXR5Lnh4bCxcbiAgeGw6IGNvbmZpZy5vcGFjaXR5LnhsLFxuICBsZzogY29uZmlnLm9wYWNpdHkubGcsXG4gIG1kOiBjb25maWcub3BhY2l0eS5tZCxcbiAgc206IGNvbmZpZy5vcGFjaXR5LnNtLFxuICB4czogY29uZmlnLm9wYWNpdHkueHMsXG4gIHh4czogY29uZmlnLm9wYWNpdHkueHhzLFxuICB4eHhzOiBjb25maWcub3BhY2l0eS54eHhzLFxufTtcblxuLyoqIE1hcHMgb3BhY2l0eSB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIG9wYWNpdHkgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IG9wYWNpdHlWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IG9wYWNpdHlNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGZvbnRXZWlnaHRNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIGxpZ2h0OiBjb25maWcuZm9udC53ZWlnaHQubGlnaHQsXG4gIHJlZ3VsYXI6IGNvbmZpZy5mb250LndlaWdodC5yZWd1bGFyLFxuICBtZWRpdW06IGNvbmZpZy5mb250LndlaWdodC5tZWRpdW0sXG4gIGJvbGQ6IGNvbmZpZy5mb250LndlaWdodC5ib2xkLFxufTtcblxuLyoqIE1hcHMgZm9udC13ZWlnaHQgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBzcGFjaW5nIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBmb250V2VpZ2h0VmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBmb250V2VpZ2h0TWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBmb250U2l6ZU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgeHhzOiAnMC42MjVyZW0nLFxuICB4czogJzAuNzVyZW0nLFxuICBzbTogJzAuODc1cmVtJyxcbiAgbWQ6ICcxcmVtJyxcbiAgbGc6ICcxLjI1cmVtJyxcbiAgeGw6ICcxLjVyZW0nLFxuICB4eGw6ICcxLjc1cmVtJyxcbn07XG5cbi8qKiBNYXBzIGZvbnQtc2l6ZSB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIHNwYWNpbmcgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGZvbnRTaXplVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBmb250U2l6ZU1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZm9udEZhbWlseU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgc2FuczogY29uZmlnLmZvbnQuZmFtaWx5LnNhbnMsXG4gIHNlcmlmOiBjb25maWcuZm9udC5mYW1pbHkuc2VyaWYsXG4gIG1vbm86IGNvbmZpZy5mb250LmZhbWlseS5tb25vLFxufTtcblxuLyoqIE1hcHMgZm9udC1mYW1pbHkgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBmb250LWZhbWlseSBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgZm9udEZhbWlseVZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZm9udEZhbWlseU1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZWxldmF0aW9uTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB6MDogY29uZmlnLmVsZXZhdGlvbi56MCxcbiAgejE6IGNvbmZpZy5lbGV2YXRpb24uejEsXG4gIHoyOiBjb25maWcuZWxldmF0aW9uLnoyLFxuICB6MzogY29uZmlnLmVsZXZhdGlvbi56MyxcbiAgejQ6IGNvbmZpZy5lbGV2YXRpb24uejQsXG59O1xuXG4vKiogTWFwcyBlbGV2YXRpb24gdmFsdWVzIGZyb20gZGVzaWduYXRlZCBlbGV2YXRpb24gc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGVsZXZhdGlvblZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZWxldmF0aW9uTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuIiwgImltcG9ydCB7IGNvbmZpZywgU2VsZWN0b3JPcHRpb25zIH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgU2VsZWN0b3JNZXRhZGF0YSxcbiAgU2VsZWN0b3JTdHlsZXMsXG4gIFN0eWxlTWFwLFxuICBTdHlsZU1hcENhbGxiYWNrLFxuICBTdHlsZVByb3BlcnR5LFxufSBmcm9tICcuL2Nzcy1pbi1qcy50eXBlcyc7XG5pbXBvcnQge1xuICBwcm9wU2hvcnRoYW5kcyxcbiAgc3BhY2luZ1ZhbFNob3J0aGFuZHMsXG4gIG51bWJlclRvUHgsXG4gIGRvdFN0cmluZ1RvQ29uZmlnVmFsdWVNYXBwZXIsXG4gIGJvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsXG4gIGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kcyxcbiAgb3BhY2l0eVZhbFNob3J0aGFuZHMsXG4gIGZvbnRXZWlnaHRWYWxTaG9ydGhhbmRzLFxuICBmb250RmFtaWx5VmFsU2hvcnRoYW5kcyxcbiAgZWxldmF0aW9uVmFsU2hvcnRoYW5kcyxcbiAgZm9udFNpemVWYWxTaG9ydGhhbmRzLFxufSBmcm9tICcuL2Nzcy1pbi1qcy5wcm9wZXJ0eS1tYXBwZXJzJztcblxuLyoqIFNwZWNpZmllcyB3aGljaCBwcm9wZXJ0eSBtYXBwZXJzIHNob3VsZCBiZSBjYWxsZWQgYW5kIGluIHdoYXQgb3JkZXIgZm9yIGEgZ2l2ZW4gcHJvcCAqL1xuY29uc3QgcHJvcE1hcHBlcnMgPSB7XG4gIGhlaWdodDogW251bWJlclRvUHhdLFxuICBtaW5IZWlnaHQ6IFtudW1iZXJUb1B4XSxcbiAgbWF4SGVpZ2h0OiBbbnVtYmVyVG9QeF0sXG4gIHdpZHRoOiBbbnVtYmVyVG9QeF0sXG4gIG1pbldpZHRoOiBbbnVtYmVyVG9QeF0sXG4gIG1heFdpZHRoOiBbbnVtYmVyVG9QeF0sXG4gIHRvcDogW251bWJlclRvUHhdLFxuICByaWdodDogW251bWJlclRvUHhdLFxuICBib3R0b206IFtudW1iZXJUb1B4XSxcbiAgbGVmdDogW251bWJlclRvUHhdLFxuICBtYXJnaW46IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpblRvcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luUmlnaHQ6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpbkJvdHRvbTogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luTGVmdDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZzogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ1RvcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ1JpZ2h0OiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nQm90dG9tOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nTGVmdDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgZ2FwOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICByb3dHYXA6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGNvbHVtbkdhcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgZm9udFNpemU6IFtmb250U2l6ZVZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBmb250V2VpZ2h0OiBbZm9udFdlaWdodFZhbFNob3J0aGFuZHNdLFxuICBmb250RmFtaWx5OiBbZm9udEZhbWlseVZhbFNob3J0aGFuZHNdLFxuICBib3JkZXJSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyV2lkdGg6IFtib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJUb3BSaWdodFJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgb3BhY2l0eTogW29wYWNpdHlWYWxTaG9ydGhhbmRzXSxcbiAgYm94U2hhZG93OiBbZWxldmF0aW9uVmFsU2hvcnRoYW5kc10sXG59O1xuXG4vKipcbiAqIFBhcnNlcyBwcm9wZXJ0aWVzIHRvIHRoZWlyIGFjdHVhbCBwcm9wZXJ0eSBtYXBwaW5ncyBhY2NvcmRpbmcgdG8gdGhlXG4gKiBtYXBwaW5nIGZ1bmN0aW9uIHBpcGVsaW5lcyBkZWZpbmVkIGFib3ZlXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJzZVByb3BTaG9ydGhhbmRzID0gKHByb3A6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlcik6IFN0eWxlUHJvcGVydHlbXSA9PiB7XG4gIC8vIENhc3QgdG8gc3RyaW5nIHZhbHVlc1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHZhbHVlID0gYCR7dmFsdWV9YDtcbiAgfVxuICAvLyBFeGVjIHByb3AgdHJhbnNmb3Jtc1xuICAvLyBUaGUgcHJvcCBzaG9ydGhhbmRzIG1hcHBlciBpcyBydW4gYWdhaW5zdCBldmVyeSBwcm9wXG4gIGNvbnN0IG1hcHBlZFByb3BzID0gZG90U3RyaW5nVG9Db25maWdWYWx1ZU1hcHBlcihwcm9wU2hvcnRoYW5kcyhbeyBwcm9wLCB2YWx1ZSB9XSkpO1xuICByZXR1cm4gbWFwcGVkUHJvcHMucmVkdWNlKChhY2MsIHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZXJzID0gcHJvcE1hcHBlcnNbcHJvcE1hcC5wcm9wXTtcbiAgICBpZiAobWFwcGVycykge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICAuLi5tYXBwZXJzLnJlZHVjZShcbiAgICAgICAgICAoYWNjLCBtYXBwZXIpID0+IG1hcHBlcihhY2MpLFxuICAgICAgICAgIFt7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IHByb3BNYXAudmFsdWUgfV1cbiAgICAgICAgKSxcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjYy5wdXNoKHByb3BNYXApO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gIH0sIFtdKTtcbn07XG5cbi8qKlxuICogUGFyc2VzIHN0eWxlTWFwIHZhbHVlcyB0byBzZWxlY3RvciArIHN0eWxlIGluZm8gdXNlZCBmb3JcbiAqIHVwZGF0aW5nIENTU1N0eWxlU2hlZXRzIG9yIDxzdHlsZT4gdGFncy5cbiAqL1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlU2VsZWN0b3JzRnJvbVN0eWxlTWFwID0gKFxuICBzZWxlY3RvckZuOiAob3B0aW9ucz86IFNlbGVjdG9yT3B0aW9ucykgPT4gc3RyaW5nLFxuICBzdHlsZU1hcDogU3R5bGVNYXBcbikgPT4ge1xuICBjb25zdCBwYXJzZWRTZWxlY3RvcnM6IFNlbGVjdG9yU3R5bGVzW10gPSBbXTtcbiAgY29uc3Qgc2VsZWN0b3JRdWV1ZTogU2VsZWN0b3JNZXRhZGF0YVtdID0gW3sgc2VsZWN0b3I6IHNlbGVjdG9yRm4oKSwgc3R5bGVNYXAgfV07XG4gIGNvbnN0IGJyZWFrcG9pbnRLZXlzID0gT2JqZWN0LmtleXMoY29uZmlnLmdyaWQuYnJlYWtwb2ludCk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHNlbGVjdG9yIHF1ZXVlIHVudGlsIHRoZXkgaGF2ZSBhbGwgYmVlbiBleGhhdXN0ZWRcbiAgd2hpbGUgKHNlbGVjdG9yUXVldWUubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHNlbGVjdG9yTWFwID0gc2VsZWN0b3JRdWV1ZS5zaGlmdCgpO1xuXG4gICAgLy8gUHVzaCBwYXJzZWQgc2VsZWN0b3JzIG9udG8gdGhlIHJldHVybiBsaXN0XG4gICAgcGFyc2VkU2VsZWN0b3JzLnB1c2goe1xuICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLFxuICAgICAgc2VsZWN0b3JXcmFwcGVyOiBzZWxlY3Rvck1hcC5zZWxlY3RvcldyYXBwZXIsXG4gICAgICBzdHlsZTogT2JqZWN0LmtleXMoc2VsZWN0b3JNYXAuc3R5bGVNYXApLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHNlbGVjdG9yTWFwLnN0eWxlTWFwW3Byb3BdO1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXJzZSBjYWxsYmFjayB2YWx1ZXNcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFsdWUgPSAodmFsdWUgYXMgU3R5bGVNYXBDYWxsYmFjaykoY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIG9iamVjdCB2YWx1ZXNcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIFF1ZXVlIHVwIHNlbGVjdG9ycyBmb3IgcHNldWRvLWNsYXNzZXNcbiAgICAgICAgICBpZiAocHJvcC5zdGFydHNXaXRoKCcmOicpKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JGbih7IGluZml4OiBwcm9wLnJlcGxhY2UoJyYnLCAnJykgfSksXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBzZWxlY3Rvck1hcC5zZWxlY3RvcldyYXBwZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFF1ZXVlIHVwIGJyZWFrcG9pbnQgc2VsZWN0b3Igc2hvcnRoYW5kc1xuICAgICAgICAgIGVsc2UgaWYgKGJyZWFrcG9pbnRLZXlzLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBgQG1lZGlhIChtaW4td2lkdGg6JHtjb25maWcuZ3JpZC5icmVha3BvaW50W3Byb3BdfSlgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIG1lZGlhL2NvbnRhaW5lciBxdWVyaWVzXG4gICAgICAgICAgZWxzZSBpZiAocHJvcC5zdGFydHNXaXRoKCdAbWVkaWEnKSB8fCBwcm9wLnN0YXJ0c1dpdGgoJ0Bjb250YWluZXInKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogcHJvcCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUXVldWUgdXAgc2VsZWN0b3JzIGZvciBzbG90dGVkIHF1ZXJpZXNcbiAgICAgICAgICBlbHNlIGlmIChwcm9wLnN0YXJ0c1dpdGgoJzo6c2xvdHRlZCcpIHx8IHByb3Auc3RhcnRzV2l0aCgnJiA6OnNsb3R0ZWQnKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yRm4oeyBwb3N0Zml4OiAnICcgKyBwcm9wLnJlcGxhY2UoJyYgJywgJycpIH0pLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogc2VsZWN0b3JNYXAuc2VsZWN0b3JXcmFwcGVyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIHZhbHVlIGJyZWFrcG9pbnQgb2JqZWN0c1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTG9vcCBpbiBvcmRlciBoZXJlIHNvIHRoZXkgb3ZlcnJpZGUgZWFjaCBvdGhlciBjb3JyZWN0bHlcbiAgICAgICAgICAgIGJyZWFrcG9pbnRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAodmFsdWVba2V5XSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsIC8vIGluaGVyaXQgdGhlIHNlbGVjdG9yIGhlcmUgaW4gY2FzZSB3ZSBhcmUgd2l0aGluIGEgcHNldWRvLWNsYXNzXG4gICAgICAgICAgICAgICAgICBzdHlsZU1hcDogeyBbcHJvcF06IHZhbHVlW2tleV0gfSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogYEBtZWRpYSAobWluLXdpZHRoOiR7Y29uZmlnLmdyaWQuYnJlYWtwb2ludFtrZXldfSlgLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2Ugbm9ybWFsIHByb3BzXG4gICAgICAgIGNvbnN0IHByb3BzID0gcGFyc2VQcm9wU2hvcnRoYW5kcyhwcm9wLCB2YWx1ZSBhcyBzdHJpbmcgfCBudW1iZXIpO1xuICAgICAgICByZXR1cm4gYCR7YWNjfSR7cHJvcHMucmVkdWNlKChhY2MyLCB7IHByb3AsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAvLyBDb252ZXJ0IHByb3BlcnR5IG5hbWVzIGZyb20gY2FtZWwtY2FzZSB0byBkYXNoLWNhc2UsIGkuZS46XG4gICAgICAgICAgLy8gIGBiYWNrZ3JvdW5kQ29sb3JgIC0+IGBiYWNrZ3JvdW5kLWNvbG9yYFxuICAgICAgICAgIC8vIFZlbmRvci1wcmVmaXhlZCBuYW1lcyBuZWVkIGFuIGV4dHJhIGAtYCBhcHBlbmRlZCB0byBmcm9udDpcbiAgICAgICAgICAvLyAgYHdlYmtpdEFwcGVhcmFuY2VgIC0+IGAtd2Via2l0LWFwcGVhcmFuY2VgXG4gICAgICAgICAgLy8gRXhjZXB0aW9uIGlzIGFueSBwcm9wZXJ0eSBuYW1lIGNvbnRhaW5pbmcgYSBkYXNoLCBpbmNsdWRpbmdcbiAgICAgICAgICAvLyBjdXN0b20gcHJvcGVydGllczsgd2UgYXNzdW1lIHRoZXNlIGFyZSBhbHJlYWR5IGRhc2gtY2FzZWQgaS5lLjpcbiAgICAgICAgICAvLyAgYC0tbXktYnV0dG9uLWNvbG9yYCAtLT4gYC0tbXktYnV0dG9uLWNvbG9yYFxuICAgICAgICAgIHByb3AgPSBwcm9wLnJlcGxhY2UoLyg/Ol4od2Via2l0fG1venxtc3xvKXwpKD89W0EtWl0pL2csICctJCYnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHJldHVybiBgJHthY2MyfSR7cHJvcH06JHt2YWx1ZX07YDtcbiAgICAgICAgfSwgJycpfWA7XG4gICAgICB9LCAnJyksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VkU2VsZWN0b3JzO1xufTtcblxuY29uc3QgcGFyc2VTZWxlY3RvcnMgPSAoc3R5bGVzLCBzZWxlY3RvcnM/OiBhbnkpID0+IHtcbiAgaWYgKCFzZWxlY3RvcnMpIHtcbiAgICByZXR1cm4gc3R5bGVzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgJHtzdHlsZXN9JHtzZWxlY3RvcnMucmVkdWNlKChhY2MsIHsgc2VsZWN0b3IsIHNlbGVjdG9yV3JhcHBlciwgc3R5bGUgfSkgPT4ge1xuICAgICAgaWYgKHN0eWxlID09PSAnJykge1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuICAgICAgY29uc3QgYmFzZSA9IGAke3NlbGVjdG9yfXske3N0eWxlfX1gO1xuICAgICAgY29uc3Qgd3JhcHBlZCA9IHNlbGVjdG9yV3JhcHBlciA/IGAke3NlbGVjdG9yV3JhcHBlcn17JHtiYXNlfX1gIDogYmFzZTtcbiAgICAgIHJldHVybiBgJHthY2N9JHt3cmFwcGVkfWA7XG4gICAgfSwgJycpfWA7XG4gIH1cbn07XG5cbi8qKlxuICogQ29tYmluZXMgYWxsIGluc3RhbmNlIHN0eWxlTWFwIHNlbGVjdG9ycyArIHN0eWxlIGluZm8gaW50byBvbmUgY3NzVGV4dFxuICogdXNlZCBmb3IgdXBkYXRpbmcgQ1NTU3R5bGVTaGVldHMgb3IgPHN0eWxlPiB0YWdzLlxuICovXG5leHBvcnQgY29uc3QgY29uc3RydWN0SW5zdGFuY2VTdHlsZXMgPSAoaW5zdGFuY2VTdHlsZXNNYXApID0+IHtcbiAgbGV0IHN0eWxlcyA9ICcnO1xuXG4gIC8vIFNvcnQga2V5cyBpbiBhbHBoYWJldGljYWwgb3JkZXIgdG8gaGVscCBhdm9pZCBoeWRyYXRpb24gbWlzbWF0Y2ggZXJyb3JzXG4gIFsuLi5pbnN0YW5jZVN0eWxlc01hcC5lbnRyaWVzKCldXG4gICAgLmZpbHRlcigoW2tleSwgX10pID0+IGtleSAhPT0gJ3NlJyAmJiBrZXkgIT09ICdzcCcpXG4gICAgLnNvcnQoKGEsIGIpID0+IGJbMF0gLSBhWzBdKVxuICAgIC5mb3JFYWNoKChbXywgc2VsZWN0b3JzXSkgPT4ge1xuICAgICAgc3R5bGVzID0gcGFyc2VTZWxlY3RvcnMoc3R5bGVzLCBzZWxlY3RvcnMpO1xuICAgIH0pO1xuXG4gIC8vIEFsd2F5cyBwYXJzZSBgc2VgIGFuZCBgc3BgIHNlbGVjdG9ycyBsYXN0IHRvIGhlbHAgYXZvaWQgaHlkcmF0aW9uIG1pc21hdGNoIGVycm9yc1xuICAvLyBhbmQgZW5zdXJlIHRoZXkgb3ZlcnJpZGUgYW55IGNvbXBvbmVudCBsZXZlbCBkeW5hbWljIHN0eWxlcy5cbiAgc3R5bGVzID0gYCR7c3R5bGVzfSR7cGFyc2VTZWxlY3RvcnMoJycsIGluc3RhbmNlU3R5bGVzTWFwLmdldCgnc2UnKSl9JHtwYXJzZVNlbGVjdG9ycyhcbiAgICAnJyxcbiAgICBpbnN0YW5jZVN0eWxlc01hcC5nZXQoJ3NwJylcbiAgKX1gO1xuICByZXR1cm4gc3R5bGVzO1xufTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjEgLSAyMDIyIFZhYWRpbiBMdGQuXG4gKiBUaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgaGlkZGVuIGRpcmVjdGx5IHdpdGggYGRpc3BsYXk6IG5vbmVgIG9yIGB2aXNpYmlsaXR5OiBoaWRkZW5gLFxuICogZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIFRoZSBtZXRob2QgZG9lc24ndCB0cmF2ZXJzZSB0aGUgZWxlbWVudCdzIGFuY2VzdG9ycywgaXQgb25seSBjaGVja3MgZm9yIHRoZSBDU1MgcHJvcGVydGllc1xuICogc2V0IGRpcmVjdGx5IHRvIG9yIGluaGVyaXRlZCBieSB0aGUgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gaXNFbGVtZW50SGlkZGVuRGlyZWN0bHkoZWxlbWVudCkge1xuICAvLyBDaGVjayBpbmxpbmUgc3R5bGUgZmlyc3QgdG8gc2F2ZSBhIHJlLWZsb3cuXG4gIGNvbnN0IHN0eWxlID0gZWxlbWVudC5zdHlsZTtcbiAgaWYgKFxuICAgIHN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nIHx8XG4gICAgc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8XG4gICAgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtYXV0b2ZvY3VzLWlnbm9yZScpXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIGlmIChjb21wdXRlZFN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nIHx8IGNvbXB1dGVkU3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbm9ybWFsaXplZCBlbGVtZW50IHRhYmluZGV4LiBJZiBub3QgZm9jdXNhYmxlLCByZXR1cm5zIC0xLlxuICogSXQgY2hlY2tzIGZvciB0aGUgYXR0cmlidXRlIFwidGFiaW5kZXhcIiBpbnN0ZWFkIG9mIHRoZSBlbGVtZW50IHByb3BlcnR5XG4gKiBgdGFiSW5kZXhgIHNpbmNlIGJyb3dzZXJzIGFzc2lnbiBkaWZmZXJlbnQgdmFsdWVzIHRvIGl0LlxuICogZS5nLiBpbiBGaXJlZm94IGA8ZGl2IGNvbnRlbnRlZGl0YWJsZT5gIGhhcyBgdGFiSW5kZXggPSAtMWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVRhYkluZGV4KGVsZW1lbnQpIHtcbiAgaWYgKCFpc0VsZW1lbnRGb2N1c2FibGUoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBjb25zdCB0YWJJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpIHx8IDA7XG4gIHJldHVybiBOdW1iZXIodGFiSW5kZXgpO1xufVxuXG4vKipcbiAqIFJldHVybnMgaWYgZWxlbWVudCBgYWAgaGFzIGxvd2VyIHRhYiBvcmRlciBjb21wYXJlZCB0byBlbGVtZW50IGBiYFxuICogKGJvdGggZWxlbWVudHMgYXJlIGFzc3VtZWQgdG8gYmUgZm9jdXNhYmxlIGFuZCB0YWJiYWJsZSkuXG4gKiBFbGVtZW50cyB3aXRoIHRhYmluZGV4ID0gMCBoYXZlIGxvd2VyIHRhYiBvcmRlciBjb21wYXJlZCB0byBlbGVtZW50c1xuICogd2l0aCB0YWJpbmRleCA+IDAuXG4gKiBJZiBib3RoIGhhdmUgc2FtZSB0YWJpbmRleCwgaXQgcmV0dXJucyBmYWxzZS5cbiAqL1xuZnVuY3Rpb24gaGFzTG93ZXJUYWJPcmRlcihhLCBiKSB7XG4gIC8vIE5vcm1hbGl6ZSB0YWJJbmRleGVzXG4gIC8vIGUuZy4gaW4gRmlyZWZveCBgPGRpdiBjb250ZW50ZWRpdGFibGU+YCBoYXMgYHRhYkluZGV4ID0gLTFgXG4gIGNvbnN0IGF0aSA9IE1hdGgubWF4KGEudGFiSW5kZXgsIDApO1xuICBjb25zdCBidGkgPSBNYXRoLm1heChiLnRhYkluZGV4LCAwKTtcbiAgcmV0dXJuIGF0aSA9PT0gMCB8fCBidGkgPT09IDAgPyBidGkgPiBhdGkgOiBhdGkgPiBidGk7XG59XG5cbi8qKlxuICogTWVyZ2Ugc29ydCBpdGVyYXRvciwgbWVyZ2VzIHRoZSB0d28gYXJyYXlzIGludG8gb25lLCBzb3J0ZWQgYnkgdGFiaW5kZXguXG4gKi9cbmZ1bmN0aW9uIG1lcmdlU29ydEJ5VGFiSW5kZXgobGVmdCwgcmlnaHQpIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIHdoaWxlIChsZWZ0Lmxlbmd0aCA+IDAgJiYgcmlnaHQubGVuZ3RoID4gMCkge1xuICAgIGlmIChoYXNMb3dlclRhYk9yZGVyKGxlZnRbMF0sIHJpZ2h0WzBdKSkge1xuICAgICAgcmVzdWx0LnB1c2gocmlnaHQuc2hpZnQoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKGxlZnQuc2hpZnQoKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5jb25jYXQobGVmdCwgcmlnaHQpO1xufVxuXG4vKiogU29ydHMgYW4gYXJyYXkgb2YgZWxlbWVudHMgYnkgdGFiaW5kZXguIFJldHVybnMgYSBuZXcgYXJyYXkuICovXG5mdW5jdGlvbiBzb3J0RWxlbWVudHNCeVRhYkluZGV4KGVsZW1lbnRzKSB7XG4gIC8vIEltcGxlbWVudCBhIG1lcmdlIHNvcnQgYXMgQXJyYXkucHJvdG90eXBlLnNvcnQgZG9lcyBhIG5vbi1zdGFibGUgc29ydFxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb3J0XG4gIGNvbnN0IGxlbiA9IGVsZW1lbnRzLmxlbmd0aDtcbiAgaWYgKGxlbiA8IDIpIHtcbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH1cbiAgY29uc3QgcGl2b3QgPSBNYXRoLmNlaWwobGVuIC8gMik7XG4gIGNvbnN0IGxlZnQgPSBzb3J0RWxlbWVudHNCeVRhYkluZGV4KGVsZW1lbnRzLnNsaWNlKDAsIHBpdm90KSk7XG4gIGNvbnN0IHJpZ2h0ID0gc29ydEVsZW1lbnRzQnlUYWJJbmRleChlbGVtZW50cy5zbGljZShwaXZvdCkpO1xuXG4gIHJldHVybiBtZXJnZVNvcnRCeVRhYkluZGV4KGxlZnQsIHJpZ2h0KTtcbn1cblxuLyoqXG4gKiBTZWFyY2hlcyBmb3Igbm9kZXMgdGhhdCBhcmUgdGFiYmFibGUgYW5kIGFkZHMgdGhlbSB0byB0aGUgYHJlc3VsdGAgYXJyYXkuXG4gKiBSZXR1cm5zIGlmIHRoZSBgcmVzdWx0YCBhcnJheSBuZWVkcyB0byBiZSBzb3J0ZWQgYnkgdGFiaW5kZXguXG4gKi9cbmZ1bmN0aW9uIGNvbGxlY3RGb2N1c2FibGVOb2Rlcyhub2RlLCByZXN1bHQpIHtcbiAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8IGlzRWxlbWVudEhpZGRlbkRpcmVjdGx5KG5vZGUpKSB7XG4gICAgLy8gRG9uJ3QgdHJhdmVyc2UgY2hpbGRyZW4gaWYgdGhlIG5vZGUgaXMgbm90IGFuIEhUTUwgZWxlbWVudCBvciBub3QgdmlzaWJsZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBlbGVtZW50ID0gbm9kZTtcbiAgY29uc3QgdGFiSW5kZXggPSBub3JtYWxpemVUYWJJbmRleChlbGVtZW50KTtcbiAgbGV0IG5lZWRzU29ydCA9IHRhYkluZGV4ID4gMDtcbiAgaWYgKHRhYkluZGV4ID49IDApIHtcbiAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIGxldCBjaGlsZHJlbiA9IFtdO1xuICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09ICdzbG90Jykge1xuICAgIGNoaWxkcmVuID0gZWxlbWVudC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgIGNoaWxkcmVuID0gKGVsZW1lbnQuc2hhZG93Um9vdCB8fCBlbGVtZW50KS5jaGlsZHJlbjtcbiAgfVxuICBbLi4uY2hpbGRyZW5dLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgLy8gRW5zdXJlIG1ldGhvZCBpcyBhbHdheXMgaW52b2tlZCB0byBjb2xsZWN0IGZvY3VzYWJsZSBjaGlsZHJlbi5cbiAgICBuZWVkc1NvcnQgPSBjb2xsZWN0Rm9jdXNhYmxlTm9kZXMoY2hpbGQsIHJlc3VsdCkgfHwgbmVlZHNTb3J0O1xuICB9KTtcbiAgcmV0dXJuIG5lZWRzU29ydDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgaGlkZGVuLCBmYWxzZSBvdGhlcndpc2UuXG4gKlxuICogQW4gZWxlbWVudCBpcyB0cmVhdGVkIGFzIGhpZGRlbiB3aGVuIGFueSBvZiB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqIC0gdGhlIGVsZW1lbnQgaXRzZWxmIG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzIGhhcyBgZGlzcGxheTogbm9uZWAuXG4gKiAtIHRoZSBlbGVtZW50IGhhcyBvciBpbmhlcml0cyBgdmlzaWJpbGl0eTogaGlkZGVuYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudEhpZGRlbihlbGVtZW50KSB7XG4gIC8vIGBvZmZzZXRQYXJlbnRgIGlzIGBudWxsYCB3aGVuIHRoZSBlbGVtZW50IGl0c2VsZlxuICAvLyBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyBpcyBoaWRkZW4gd2l0aCBgZGlzcGxheTogbm9uZWAuXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MRWxlbWVudC9vZmZzZXRQYXJlbnRcbiAgaWYgKGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gaXNFbGVtZW50SGlkZGVuRGlyZWN0bHkoZWxlbWVudCk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGZvY3VzYWJsZSwgb3RoZXJ3aXNlIGZhbHNlLlxuICpcbiAqIFRoZSBsaXN0IG9mIGZvY3VzYWJsZSBlbGVtZW50cyBpcyB0YWtlbiBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2MDAxOTQvNDIyODcwMy5cbiAqIEhvd2V2ZXIsIHRoZXJlIGlzbid0IGEgZGVmaW5pdGUgbGlzdCwgaXQncyB1cCB0byB0aGUgYnJvd3Nlci5cbiAqIFRoZSBvbmx5IHN0YW5kYXJkIHdlIGhhdmUgaXMgRE9NIExldmVsIDIgSFRNTCBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItSFRNTC9odG1sLmh0bWwsXG4gKiBhY2NvcmRpbmcgdG8gd2hpY2ggdGhlIG9ubHkgZWxlbWVudHMgdGhhdCBoYXZlIGEgYGZvY3VzKClgIG1ldGhvZCBhcmU6XG4gKiAtIEhUTUxJbnB1dEVsZW1lbnRcbiAqIC0gSFRNTFNlbGVjdEVsZW1lbnRcbiAqIC0gSFRNTFRleHRBcmVhRWxlbWVudFxuICogLSBIVE1MQW5jaG9yRWxlbWVudFxuICpcbiAqIFRoaXMgbm90YWJseSBvbWl0cyBIVE1MQnV0dG9uRWxlbWVudCBhbmQgSFRNTEFyZWFFbGVtZW50LlxuICogUmVmZXJyaW5nIHRvIHRoZXNlIHRlc3RzIHdpdGggdGFiYmFibGVzIGluIGRpZmZlcmVudCBicm93c2Vyc1xuICogaHR0cDovL2FsbHlqcy5pby9kYXRhLXRhYmxlcy9mb2N1c2FibGUuaHRtbFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50Rm9jdXNhYmxlKGVsZW1lbnQpIHtcbiAgLy8gVGhlIGVsZW1lbnQgY2Fubm90IGJlIGZvY3VzZWQgaWYgaXRzIGB0YWJpbmRleGAgYXR0cmlidXRlIGlzIHNldCB0byBgLTFgLlxuICBpZiAoZWxlbWVudC5tYXRjaGVzKCdbdGFiaW5kZXg9XCItMVwiXScpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRWxlbWVudHMgdGhhdCBjYW5ub3QgYmUgZm9jdXNlZCBpZiB0aGV5IGhhdmUgYSBgZGlzYWJsZWRgIGF0dHJpYnV0ZS5cbiAgaWYgKGVsZW1lbnQubWF0Y2hlcygnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbiwgb2JqZWN0JykpIHtcbiAgICByZXR1cm4gZWxlbWVudC5tYXRjaGVzKCc6bm90KFtkaXNhYmxlZF0pJyk7XG4gIH1cblxuICAvLyBFbGVtZW50cyB0aGF0IGNhbiBiZSBmb2N1c2VkIGV2ZW4gaWYgdGhleSBoYXZlIGEgYGRpc2FibGVkYCBhdHRyaWJ1dGUuXG4gIHJldHVybiBlbGVtZW50Lm1hdGNoZXMoJ2FbaHJlZl0sIGFyZWFbaHJlZl0sIGlmcmFtZSwgW3RhYmluZGV4XSwgW2NvbnRlbnRFZGl0YWJsZV0nKTtcbn1cblxuLyoqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBmb2N1c2VkLCBmYWxzZSBvdGhlcndpc2UuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50Rm9jdXNlZChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LmdldFJvb3ROb2RlKCkuYWN0aXZlRWxlbWVudCA9PT0gZWxlbWVudDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgdGFiLW9yZGVyZWQgYXJyYXkgb2YgZm9jdXNhYmxlIGVsZW1lbnRzIGZvciBhIHJvb3QgZWxlbWVudC5cbiAqIFRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBpbmNsdWRlIHRoZSByb290IGVsZW1lbnQgaWYgaXQgaXMgZm9jdXNhYmxlLlxuICpcbiAqIFRoZSBtZXRob2QgdHJhdmVyc2VzIG5vZGVzIGluIHNoYWRvdyBET00gdHJlZXMgdG9vIGlmIGFueS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZvY3VzYWJsZUVsZW1lbnRzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBbXTtcbiAgY29uc3QgbmVlZHNTb3J0QnlUYWJJbmRleCA9IGNvbGxlY3RGb2N1c2FibGVOb2RlcyhlbGVtZW50LCBmb2N1c2FibGVFbGVtZW50cyk7XG4gIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgLy8gdGhlIGZpbmFsIGFycmF5IGJ5IHRhYmluZGV4Llx1MjI0OFxuICBpZiAobmVlZHNTb3J0QnlUYWJJbmRleCkge1xuICAgIHJldHVybiBzb3J0RWxlbWVudHNCeVRhYkluZGV4KGZvY3VzYWJsZUVsZW1lbnRzKTtcbiAgfVxuICByZXR1cm4gZm9jdXNhYmxlRWxlbWVudHM7XG59XG4iLCAiaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICdsaXQtaHRtbC9pcy1zZXJ2ZXIuanMnO1xuXG5leHBvcnQgY29uc3QgaXNTc3IgPSAoKSA9PiBpc1NlcnZlcjtcblxuZXhwb3J0IGNvbnN0IGlzQnJvd3Nlckxpa2UgPSAoKSA9PiBnbG9iYWxUaGlzICE9PSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkUmVzaXplQ29udHJvbGxlciA9IChyZXNpemVDb250cm9sbGVyKSA9PlxuICByZXNpemVDb250cm9sbGVyPy5bJ19vYnNlcnZlciddPy5bJ3Vub2JzZXJ2ZSddO1xuXG5pbnRlcmZhY2UgTmF2aWdhdG9yVUFEYXRhIHtcbiAgYnJhbmRzOiBBcnJheTx7IGJyYW5kOiBzdHJpbmc7IHZlcnNpb246IHN0cmluZyB9PjtcbiAgbW9iaWxlOiBib29sZWFuO1xuICBwbGF0Zm9ybTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxhdGZvcm0oKTogc3RyaW5nIHtcbiAgY29uc3QgdWFEYXRhID0gKG5hdmlnYXRvciBhcyBhbnkpLnVzZXJBZ2VudERhdGEgYXMgTmF2aWdhdG9yVUFEYXRhIHwgdW5kZWZpbmVkO1xuXG4gIGlmICh1YURhdGE/LnBsYXRmb3JtKSB7XG4gICAgcmV0dXJuIHVhRGF0YS5wbGF0Zm9ybTtcbiAgfVxuXG4gIHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm07XG59XG5cbmV4cG9ydCBjb25zdCBpc1BsYXRmb3JtID0gKHBsYXRmb3JtOiAnSU9TJykgPT4ge1xuICBpZiAoIWlzU3NyKCkpIHtcbiAgICBpZiAocGxhdGZvcm0gPT09ICdJT1MnKSB7XG4gICAgICByZXR1cm4gL2lQKGhvbmV8YWR8b2QpfGlPUy8udGVzdChnZXRQbGF0Zm9ybSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4iLCAiY29uc3QgbmF0aXZlVmFsaWRpdHlTdGF0ZXM6IEFycmF5PGtleW9mIFZhbGlkaXR5U3RhdGU+ID0gW1xuICAnYmFkSW5wdXQnLFxuICAnY3VzdG9tRXJyb3InLFxuICAncGF0dGVybk1pc21hdGNoJyxcbiAgJ3JhbmdlT3ZlcmZsb3cnLFxuICAncmFuZ2VVbmRlcmZsb3cnLFxuICAnc3RlcE1pc21hdGNoJyxcbiAgJ3Rvb0xvbmcnLFxuICAndG9vU2hvcnQnLFxuICAndHlwZU1pc21hdGNoJyxcbiAgJ3ZhbHVlTWlzc2luZycsXG5dO1xuXG4vKipcbiAqIEN1c3RvbSB2YWxpZGF0b3IgZm9yIHRoZSBgQG9wZW4td2MvZm9ybS1jb250cm9sYCB0aGF0IGxlYW5zIG9uIGFuIGludGVybmFsXG4gKiBpbnB1dCB0byBmb3J3YXJkIG5hdGl2ZSB2YWxpZGF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBpbm5lcklucHV0VmFsaWRhdG9ycyA9IG5hdGl2ZVZhbGlkaXR5U3RhdGVzLm1hcCgoa2V5KSA9PiAoe1xuICBrZXksXG4gIGlzVmFsaWQoaW5zdGFuY2U6IEhUTUxFbGVtZW50ICYgeyB2YWxpZGF0aW9uVGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50IH0pIHtcbiAgICBpZiAoaW5zdGFuY2UudmFsaWRhdGlvblRhcmdldCkge1xuICAgICAgcmV0dXJuICFpbnN0YW5jZS52YWxpZGF0aW9uVGFyZ2V0LnZhbGlkaXR5W2tleV07XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxufSkpO1xuIiwgIi8qKlxuICogTk9URTpcbiAqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgaW1wbGVtZW50YXRpb24gZm9yIGFuIGV4dHJlbWVseSBzaW1wbGUgYW5kIGxpZ2h0d2VpZ2h0XG4gKiByZWFjdGl2ZSBzb2x1dGlvbiBsb29zZWx5IGJhc2VkIG9uIHNvbGlkLWpzIHN0eWxlIHNpZ25hbHMuIEl0IGVuYWJsZXMgYmFzaWNcbiAqIHJlYWN0aXZlIHN1YnNjcmlwdGlvbnMgYW5kIGNvbXB1dGVkIHNpZ25hbHMgb2Ygb25lIG9yIG1vcmUgb3RoZXIgZGVwZW5kZW5jeSBzaWduYWxzLlxuICpcbiAqIEluIGl0cyBjdXJyZW50IHN0YXRlLCBpdCBpcyBub3QgcGVyZmVjdCBhbmQgZG9lcyBub3QgaGFuZGxlIGFsbCBlZGdlIGNhc2VzLiBGb3JcbiAqIGV4YW1wbGUsIGlmIHlvdSBoYXZlIG11bHRpcGxlIGxheWVycyBvZiBjb21wdXRlZCBzdGF0ZSB3aXRoIGEgc2luZ2xlIGRlcGVuZGVuY3lcbiAqIHNoYXJlZCBtb3JlIHRoYW4gb25jZSBhY3Jvc3MgdGhvc2UgbGF5ZXJzLCB0aGUgc2FtZSBjaGFuZ2Ugd2lsbCBwb3RlbnRpYWxseSBiZVxuICogZW1pdHRlZCB0d2ljZS4gT3VyIGV4cGVjdGF0aW9uIGF0bSwgaXMgdGhhdCB3ZSB3b24ndCBlbmNvdW50ZXIgdGhvc2Ugc2NlbmFyaW9zXG4gKiBpbiB0aGlzIGxpYnJhcnkuXG4gKi9cblxuLyoqIFVuc3Vic2NyaWJlcyBmcm9tIHZhbHVlIHVwZGF0ZXMuICovXG5leHBvcnQgdHlwZSBVbnN1YnNjcmliZXIgPSAoKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25hbDxUPiB7XG4gIC8qKiBHZXQgdGhlIGN1cnJlbnQgdmFsdWUgKi9cbiAgZ2V0KCk6IFQ7XG5cbiAgLyoqIFNldCByZWFjdGl2ZSB2YWx1ZSAqL1xuICBzZXQodmFsdWU6IFQpO1xuXG4gIC8qKiBVcGRhdGUgcmVhY3RpdmUgdmFsdWUgdXNpbmcgY2FsbGJhY2sgKi9cbiAgdXBkYXRlKGZuOiAodmFsdWU6IFQpID0+IFQpO1xuXG4gIC8qKiBTdWJzY3JpYmUgdG8gcmVhY3RpdmUgdmFsdWUgY2hhbmdlcyAqL1xuICBzdWJzY3JpYmUoZm46ICh2YWx1ZTogVCwgdW5zdWJzY3JpYmU/OiBVbnN1YnNjcmliZXIpID0+IHZvaWQpOiBVbnN1YnNjcmliZXI7XG59XG5cbmNvbnN0IGNvbnRleHQgPSBbXTtcblxuZnVuY3Rpb24gX3N1YnNjcmliZShydW5uaW5nLCBzdWJzY3JpcHRpb25zKSB7XG4gIHN1YnNjcmlwdGlvbnMuYWRkKHJ1bm5pbmcpO1xuICBydW5uaW5nLmRlcGVuZGVuY2llcy5hZGQoc3Vic2NyaXB0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFudXAocnVubmluZykge1xuICBmb3IgKGNvbnN0IGRlcCBvZiBydW5uaW5nLmRlcGVuZGVuY2llcykge1xuICAgIGRlcC5kZWxldGUocnVubmluZyk7XG4gIH1cbiAgcnVubmluZy5kZXBlbmRlbmNpZXMuY2xlYXIoKTtcbn1cblxuLyoqIENyZWF0ZSBhIHNpZ25hbCB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IGdldHRlciBvciBzdWJzY3JpcHRpb24uICovXG5leHBvcnQgZnVuY3Rpb24gc2lnbmFsPFQ+KHZhbHVlPzogVCkge1xuICBjb25zdCBzdWJzY3JpcHRpb25zID0gbmV3IFNldDxhbnk+KCk7XG5cbiAgY29uc3QgZ2V0ID0gKCk6IFQgPT4ge1xuICAgIGNvbnN0IHJ1bm5pbmcgPSBjb250ZXh0W2NvbnRleHQubGVuZ3RoIC0gMV07XG4gICAgaWYgKHJ1bm5pbmcpIF9zdWJzY3JpYmUocnVubmluZywgc3Vic2NyaXB0aW9ucyk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHNldCA9IChuZXh0VmFsdWU6IFQpID0+IHtcbiAgICB2YWx1ZSA9IG5leHRWYWx1ZTtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiBbLi4uc3Vic2NyaXB0aW9uc10pIHtcbiAgICAgIHN1Yi5leGVjdXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZSA9IChmbjogKHZhbHVlOiBUKSA9PiBUKSA9PiB7XG4gICAgdmFsdWUgPSBmbih2YWx1ZSk7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgWy4uLnN1YnNjcmlwdGlvbnNdKSB7XG4gICAgICBzdWIuZXhlY3V0ZSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBUaGlzIGlzIGVzc2VudGlhbGx5IGEgdXNlRWZmZWN0IG1hc3F1ZXJhZGluZyBhcyBhIHN1YnNjcmliZSBmdW5jdGlvblxuICBjb25zdCBzdWJzY3JpYmUgPSAoZm46ICh2YWx1ZTogVCwgdW5zdWJzY3JpYmU/OiBVbnN1YnNjcmliZXIpID0+IHZvaWQpOiBVbnN1YnNjcmliZXIgPT4ge1xuICAgIGNvbnN0IGV4ZWN1dGUgPSAoKSA9PiB7XG4gICAgICBjbGVhbnVwKHJ1bm5pbmcpO1xuICAgICAgY29udGV4dC5wdXNoKHJ1bm5pbmcpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4ocnVubmluZy5nZXQoKSwgKCkgPT4gY2xlYW51cChydW5uaW5nKSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjb250ZXh0LnBvcCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICgpID0+IGNsZWFudXAocnVubmluZyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJ1bm5pbmcgPSB7XG4gICAgICBleGVjdXRlLFxuICAgICAgZGVwZW5kZW5jaWVzOiBuZXcgU2V0KCksXG4gICAgICBnZXQsXG4gICAgfTtcblxuICAgIHJldHVybiBleGVjdXRlKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQsXG4gICAgc2V0LFxuICAgIHVwZGF0ZSxcbiAgICBzdWJzY3JpYmUsXG4gIH0gYXMgU2lnbmFsPFQ+O1xufVxuXG4vKiogT25lIG9yIG1vcmUgYFNpZ25hbGBzICovXG50eXBlIFNpZ25hbHMgPSBTaWduYWw8YW55PiB8IFtTaWduYWw8YW55PiwgLi4uQXJyYXk8U2lnbmFsPGFueT4+XSB8IFNpZ25hbDxhbnk+W107XG5cbi8qKiBPbmUgb3IgbW9yZSB2YWx1ZXMgZnJvbSBzaWduYWxzICovXG5leHBvcnQgdHlwZSBTaWduYWxWYWx1ZXM8VD4gPSBUIGV4dGVuZHMgU2lnbmFsPGluZmVyIFU+XG4gID8gVVxuICA6IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gZXh0ZW5kcyBTaWduYWw8aW5mZXIgVT4gPyBVIDogbmV2ZXIgfTtcblxuLyoqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCBzaWduYWwgZnJvbSBvbmUgb3IgbW9yZSBzaWduYWwgZGVwZW5kZW5jaWVzICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQ8RCBleHRlbmRzIFNpZ25hbHMsIFQ+KFxuICBkZXBlbmRlbmNpZXM6IEQsXG4gIGZuOiAodmFsdWVzOiBTaWduYWxWYWx1ZXM8RD4pID0+IFRcbik6IFNpZ25hbDxUPjtcblxuLyoqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCBzaWduYWwgZnJvbSBvbmUgb3IgbW9yZSBzaWduYWwgZGVwZW5kZW5jaWVzICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQ8RCBleHRlbmRzIFNpZ25hbHMsIFQ+KFxuICBkZXBlbmRlbmNpZXM6IEQsXG4gIGZuPzogKHZhbHVlczogU2lnbmFsVmFsdWVzPEQ+LCBzZXQ/OiAodmFsdWU6IGFueSkgPT4gdm9pZCkgPT4gVFxuKTogU2lnbmFsPHVua25vd24+O1xuXG4vKiogQ3JlYXRlIGEgbmV3IGNvbXB1dGVkIHNpZ25hbCBmcm9tIG9uZSBvciBtb3JlIHNpZ25hbCBkZXBlbmRlbmNpZXMgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZDxEIGV4dGVuZHMgU2lnbmFscz4oXG4gIGRlcGVuZGVuY2llczogRCxcbiAgZm4/OiAoLi4ucGFyYW1zOiBhbnlbXSkgPT4gYW55XG4pOiBTaWduYWw8YW55PiB7XG4gIGNvbnN0IGF1dG8gPSBmbi5sZW5ndGggPCAyO1xuICBjb25zdCBzID0gc2lnbmFsPGFueT4oKTtcbiAgY29uc3Qgc2luZ2xlID0gIUFycmF5LmlzQXJyYXkoZGVwZW5kZW5jaWVzKTtcbiAgY29uc3QgZGVwcyA9IHNpbmdsZVxuICAgID8gKFtkZXBlbmRlbmNpZXNdIGFzIFNpZ25hbDxTaWduYWxWYWx1ZXM8RD4+W10pXG4gICAgOiAoZGVwZW5kZW5jaWVzIGFzIFNpZ25hbDxTaWduYWxWYWx1ZXM8RD4+W10pO1xuXG4gIC8vIFdlIG9ubHkgbmVlZCB0byBzdWJzY3JpYmUgdG8gdGhlIGZpcnN0IGl0ZW0gYmVjYXVzZVxuICAvLyB0aGUgYWN0IG9mIHJldHJpZXZpbmcgYWxsIGRlcGVuZGVuY3kgdmFsdWVzIHdpbGwgYWRkIHRoZW1cbiAgLy8gdG8gdGhlIGNvbnRleHQgc3RhY2sgYXBwcm9wcmlhdGVseVxuICBjb25zdCBkZXAgPSBkZXBzWzBdO1xuICBkZXAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgPSBkZXBzLm1hcCgoZGVwKSA9PiBkZXAuZ2V0KCkpO1xuICAgIGNvbnN0IHJldCA9IHNpbmdsZSA/IHZhbHVlc1swXSA6ICh2YWx1ZXMgYXMgU2lnbmFsVmFsdWVzPEQ+KTtcbiAgICBpZiAoYXV0bykge1xuICAgICAgcy5zZXQoZm4ocmV0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKHJldCwgcy5zZXQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzO1xufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIHdjL25vLXNlbGYtY2xhc3MgKi9cbmltcG9ydCB7IGNvbmZpZywgc2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMsIGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgTXRlRWxlbWVudCB9IGZyb20gJy4vbXRlLmVsZW1lbnQnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0gZnJvbSAnLi4vYXR0cmlidXRlLWNvbnZlcnRlcic7XG5cbmV4cG9ydCB0eXBlIFNwYWNpbmdWYWx1ZSA9XG4gIHwgbnVtYmVyXG4gIHwgc3RyaW5nXG4gIHwgMVxuICB8IDJcbiAgfCAzXG4gIHwgNFxuICB8IDVcbiAgfCA2XG4gIHwgJ25vbmUnXG4gIHwgJ3hzJ1xuICB8ICdzbSdcbiAgfCAnbWQnXG4gIHwgJ2xnJ1xuICB8ICd4bCdcbiAgfCAneHhsJ1xuICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgVW5pdFZhbHVlID0gbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBCb3JkZXJSYWRpdXNWYWx1ZSA9XG4gIHwgJ25vbmUnXG4gIHwgJ3hzJ1xuICB8ICdzbSdcbiAgfCAnbWQnXG4gIHwgJ2xnJ1xuICB8ICd4bCdcbiAgfCAneHhsJ1xuICB8ICdmdWxsJ1xuICB8IHN0cmluZ1xuICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgQm9yZGVyV2lkdGhWYWx1ZSA9ICdub25lJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgT3BhY2l0eVZhbHVlID1cbiAgfCAneHh4cydcbiAgfCAneHhzJ1xuICB8ICd4cydcbiAgfCAnc20nXG4gIHwgJ21kJ1xuICB8ICdsZydcbiAgfCAneGwnXG4gIHwgJ3h4bCdcbiAgfCBzdHJpbmdcbiAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFJlc3BvbnNpdmVWYWx1ZTxUPiA9IFQgfCBQYXJ0aWFsPFJlY29yZDwneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnLCBUPj47XG5cbmNvbnN0IGRlZmF1bHRCb3JkZXJGYWN0b3J5ID0gKHdpZHRoPywgY29sb3I/LCBzdHlsZT8pID0+XG4gIGAke3N0eWxlID8/ICdzb2xpZCd9ICR7XG4gICAgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzKFtcbiAgICAgIHsgcHJvcDogJ2JvcmRlcldpZHRoJywgdmFsdWU6IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUod2lkdGggPz8gJzFweCcpIH0sXG4gICAgXSlbMF0/LnZhbHVlXG4gIH0gJHtkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKGNvbG9yKSA/PyBjb25maWcuY29sb3IuYm9yZGVyMX1gO1xuXG5leHBvcnQgY2xhc3MgTXRlQ29udGVudEJhc2UgZXh0ZW5kcyBNdGVFbGVtZW50IHtcbiAgLy8gLS0gU3BhY2luZyBQcm9wcyAtLVxuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG0/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi1yaWdodGAgYW5kIGBtYXJnaW4tbGVmdGAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG14PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tdG9wYCBhbmQgYG1hcmdpbi1ib3R0b21gIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBteT86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXRvcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtdD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXJpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1yPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tYm90dG9tYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1iPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tbGVmdGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtbD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZ2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXJpZ2h0YCBhbmQgYHBhZGRpbmctbGVmdGAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHB4PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXRvcGAgYW5kIGBwYWRkaW5nLWJvdHRvbWAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHB5PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXRvcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwdD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1yaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwcj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1ib3R0b21gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcGI/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctbGVmdGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwbD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8vIC0tIFBvc2l0aW9uaW5nIFByb3BzIC0tXG5cbiAgLyoqIFNldHMgdGhlIGBkaXNwbGF5YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdibG9jaydcbiAgICB8ICdpbmxpbmUtYmxvY2snXG4gICAgfCAnZmxleCdcbiAgICB8ICdpbmxpbmUtZmxleCdcbiAgICB8ICdncmlkJ1xuICAgIHwgJ2lubGluZS1ncmlkJ1xuICAgIHwgJ2lubGluZSdcbiAgICB8ICdsaXN0LWl0ZW0nXG4gICAgfCAnbm9uZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1pdGVtc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBhPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZW5kJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnYmFzZWxpbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24taXRlbXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYWxpZ25JdGVtcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2Jhc2VsaW5lJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGFsaWduLXNlbGZgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYWxpZ25TZWxmPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnYXV0bydcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdiYXNlbGluZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1jb250ZW50YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGFsaWduQ29udGVudD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ3NwYWNlLWJldHdlZW4nXG4gICAgfCAnc3BhY2UtYXJvdW5kJ1xuICAgIHwgJ3NwYWNlLWV2ZW5seSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LWNvbnRlbnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgaj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIHwgJ3NwYWNlLWFyb3VuZCdcbiAgICB8ICdzcGFjZS1ldmVubHknXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1jb250ZW50YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGp1c3RpZnlDb250ZW50PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3NwYWNlLWJldHdlZW4nXG4gICAgfCAnc3BhY2UtYXJvdW5kJ1xuICAgIHwgJ3NwYWNlLWV2ZW5seSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LWl0ZW1zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGp1c3RpZnlJdGVtcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnbGVmdCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGp1c3RpZnktc2VsZmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBqdXN0aWZ5U2VsZj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnbGVmdCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZmxleDogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWRpcmVjdGlvbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBkaXJlY3Rpb24/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3JvdycgfCAncm93UmV2ZXJzZScgfCAnY29sdW1uJyB8ICdjb2x1bW5SZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1kaXJlY3Rpb25gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleERpcmVjdGlvbj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAncm93JyB8ICdyb3dSZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtblJldmVyc2UnIHwgJ2luaXRpYWwnIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWJhc2lzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJhc2lzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1iYXNpc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4QmFzaXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWdyb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3Jvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtZ3Jvd2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4R3Jvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtc2hyaW5rYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIHNocmluaz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtc2hyaW5rYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhTaHJpbms/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXdyYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgd3JhcD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAnbm93cmFwJyB8ICd3cmFwJyB8ICd3cmFwLXJldmVyc2UnIHwgJ2luaXRpYWwnIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXdyYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleFdyYXA/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ25vd3JhcCcgfCAnd3JhcCcgfCAnd3JhcC1yZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgb3JkZXJgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgb3JkZXI/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBnYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ2FwPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBjb2x1bW4tZ2FwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGNvbHVtbkdhcD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcm93LWdhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICByb3dHYXA/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtY29sdW1uYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRDb2x1bW4/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXJvd2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkUm93PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1hdXRvLWZsb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZEF1dG9GbG93PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdyb3cnIHwgJ2NvbHVtbicgfCAnZGVuc2UnIHwgJ3JvdyBkZW5zZScgfCAnY29sdW1uIGRlbnNlJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1hdXRvLWNvbHVtbnNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZEF1dG9Db2x1bW5zPzogUmVzcG9uc2l2ZVZhbHVlPCdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXV0by1yb3dzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRBdXRvUm93cz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICAnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZVxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgJ25vbmUnIHwgJ2F1dG8nIHwgJ21heC1jb250ZW50JyB8ICdtaW4tY29udGVudCcgfCBVbml0VmFsdWVcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtdGVtcGxhdGUtcm93c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBncmlkVGVtcGxhdGVSb3dzPzogUmVzcG9uc2l2ZVZhbHVlPCdub25lJyB8ICdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtdGVtcGxhdGUtYXJlYXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZFRlbXBsYXRlQXJlYXM/OiBSZXNwb25zaXZlVmFsdWU8J25vbmUnIHwgc3RyaW5nIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXJlYWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQXJlYT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvLyAtLSBTaXppbmcgUHJvcHMgLS1cblxuICAvKiogU2V0cyB0aGUgYHdpZHRoYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIHc/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1heC13aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtYXh3PzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtaW4td2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWludz86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgaGVpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGg/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1heC1oZWlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWF4aD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWluLWhlaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtaW5oPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBiYWNrZ3JvdW5kYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiBDYW4gYmUgcGFzc2VkIGRvdCBub3RhdGVkIHRoZW1lIGNvbmZpZyBzdHJpbmdzIHRvIHNlbGVjdCBjb2xvciB0b2tlbiB2YWx1ZXMuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJnPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgY29sb3JgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuIENhbiBiZSBwYXNzZWQgZG90IG5vdGF0ZWQgdGhlbWUgY29uZmlnIHN0cmluZ3MgdG8gc2VsZWN0IGNvbG9yIHRva2VuIHZhbHVlcy4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1jb2xvcmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gQ2FuIGJlIHBhc3NlZCBkb3Qgbm90YXRlZCB0aGVtZSBjb25maWcgc3RyaW5ncyB0byBzZWxlY3QgY29sb3IgdG9rZW4gdmFsdWVzLiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBib3JkZXJDb2xvcj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci13aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyV2lkdGg/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyV2lkdGhWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItc3R5bGVgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJvcmRlclN0eWxlPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdzb2xpZCcgfCAnZG90dGVkJyB8ICdkYXNoZWQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXJgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlcj86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3BgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcD86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1yaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyUmlnaHQ/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJCb3R0b20/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItbGVmdGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyTGVmdD86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyVG9wUmlnaHRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyVG9wTGVmdFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tTGVmdFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1c2AgYW5kIGBib3JkZXItdG9wLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1c2AgYW5kIGBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJSaWdodFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c2AgYW5kIGBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbVJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLWxlZnQtcmFkaXVzYCBhbmQgYGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyTGVmdFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBsaW5lLWhlaWdodGAgY3NzIHByb3BlcnR5ICAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBsaW5lSGVpZ2h0PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IG51bWJlclxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZm9udC13ZWlnaHRgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmb250V2VpZ2h0PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnbGlnaHQnXG4gICAgfCAncmVndWxhcidcbiAgICB8ICdtZWRpdW0nXG4gICAgfCAnbGlnaHRlcidcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnYm9sZCdcbiAgICB8ICdib2xkZXInXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICAgIHwgJzEwMCdcbiAgICB8ICcyMDAnXG4gICAgfCAnMzAwJ1xuICAgIHwgJzQwMCdcbiAgICB8ICc1MDAnXG4gICAgfCAnNjAwJ1xuICAgIHwgJzcwMCdcbiAgICB8ICc4MDAnXG4gICAgfCAnOTAwJ1xuICA+O1xuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIGBmb250V2VpZ2h0YC4gU2V0cyB0aGUgYGZvbnQtd2VpZ2h0YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZnc/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdsaWdodCdcbiAgICB8ICdyZWd1bGFyJ1xuICAgIHwgJ21lZGl1bSdcbiAgICB8ICdsaWdodGVyJ1xuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdib2xkJ1xuICAgIHwgJ2JvbGRlcidcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gICAgfCAnMTAwJ1xuICAgIHwgJzIwMCdcbiAgICB8ICczMDAnXG4gICAgfCAnNDAwJ1xuICAgIHwgJzUwMCdcbiAgICB8ICc2MDAnXG4gICAgfCAnNzAwJ1xuICAgIHwgJzgwMCdcbiAgICB8ICc5MDAnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmb250LXNpemVgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmb250U2l6ZT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCBVbml0VmFsdWUgfCAneHhzJyB8ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCdcbiAgPjtcblxuICAvKiogU2hvcnRoYW5kIGZvciBgZm9udFNpemVgLiBTZXRzIHRoZSBgZm9udC1zaXplYCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZnM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgVW5pdFZhbHVlIHwgJ3h4cycgfCAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmb250LWZhbWlseWAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZvbnRGYW1pbHk/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3NhbnMnIHwgJ3NlcmlmJyB8ICdtb25vJyB8IHN0cmluZ1xuICA+O1xuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIGBvcGFjaXR5YC4gU2V0cyB0aGUgYG9wYWNpdHlgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBvcGFjaXR5PzogUmVzcG9uc2l2ZVZhbHVlPE9wYWNpdHlWYWx1ZT47XG5cbiAgLyoqIEFwcGxpZXMgTW9ydGFyIHN0YW5kYXJkIGJveC1zaGFkb3cgdmFsdWVzICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGVsZXZhdGlvbj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICAnejAnIHwgJ3oxJyB8ICd6MicgfCAnejMnIHwgJ3o0J1xuICA+O1xuXG4gIC8qKiBBZGp1c3QgdGhpcyBlbGVtZW50cyBibGVlZCBpZiBpdCBpcyBhIGRpcmVjdCBkZXNjZW5kYW50IG9mIGFuIG10ZS1sYXlvdXQtY29udGFpbmVyICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbGF5b3V0QmxlZWQ/OiAnZnVsbCcgfCAncG9wb3V0JyB8ICdjb250ZW50JyB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogUmVuZGVycyB0aGlzIGVsZW1lbnQgYXMgYSBzdWJncmlkIHdoZW4gc2V0LiBgZGlzcGxheWAgaXMgc2V0IHRvIGBncmlkYCBhbmQgYGdyaWQtdGVtcGxhdGUtY29sdW1uc2AgaXMgc2V0IHRvIGBzdWJncmlkYC5cbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBzdWJncmlkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgc2VsZWN0b3IgdG8gaGF2ZSBpbnN0YW5jZSBzdHlsZXMgdGFyZ2V0IGEgc3BlY2lmaWMgaW5uZXIgZWxlbWVudC5cbiAgICogVXNlZnVsIGluIHNwZWNpZmljIHNjZW5hcmlvcyB3aGVyZSB0aGUgcHJpbWFyeSBjb250ZW50L3Nsb3Qgd3JhcHBlZCB3aXRoaW4gdGhlIHRlbXBsYXRlXG4gICAqIGxpa2Ugd2l0aCB0aGUgbW9kYWwgY29tcG9uZW50LlxuICAgKi9cbiAgcHJvdGVjdGVkIGNvbnRlbnRTdHlsZVNlbGVjdG9yUm9vdCA9ICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnO1xuXG4gIC8vIExpc3Qgb2YgcHJvcHMgZm9yIG9wdGltYWwgc3R5bGUgdXBkYXRlIGNoZWNraW5nXG4gIHByaXZhdGUgc3RhdGljIGNvbnRlbnRQcm9wcyA9IG5ldyBTZXQoW1xuICAgICdtJyxcbiAgICAnbXgnLFxuICAgICdteScsXG4gICAgJ210JyxcbiAgICAnbXInLFxuICAgICdtYicsXG4gICAgJ21sJyxcbiAgICAncCcsXG4gICAgJ3B4JyxcbiAgICAncHknLFxuICAgICdwdCcsXG4gICAgJ3ByJyxcbiAgICAncGInLFxuICAgICdwbCcsXG4gICAgJ2QnLFxuICAgICdhJyxcbiAgICAnaicsXG4gICAgJ2Jhc2lzJyxcbiAgICAnc2hyaW5rJyxcbiAgICAnZ3JvdycsXG4gICAgJ2RpcmVjdGlvbicsXG4gICAgJ3dyYXAnLFxuICAgICdhbGlnbkl0ZW1zJyxcbiAgICAnYWxpZ25TZWxmJyxcbiAgICAnYWxpZ25Db250ZW50JyxcbiAgICAnanVzdGlmeUNvbnRlbnQnLFxuICAgICdqdXN0aWZ5SXRlbXMnLFxuICAgICdqdXN0aWZ5U2VsZicsXG4gICAgJ2ZsZXgnLFxuICAgICdmbGV4RGlyZWN0aW9uJyxcbiAgICAnZmxleEJhc2lzJyxcbiAgICAnZmxleFNocmluaycsXG4gICAgJ2ZsZXhHcm93JyxcbiAgICAnZmxleFdyYXAnLFxuICAgICdvcmRlcicsXG4gICAgJ2dhcCcsXG4gICAgJ2NvbHVtbkdhcCcsXG4gICAgJ3Jvd0dhcCcsXG4gICAgJ2dyaWRDb2x1bW4nLFxuICAgICdncmlkUm93JyxcbiAgICAnZ3JpZEF1dG9GbG93JyxcbiAgICAnZ3JpZEF1dG9Db2x1bW5zJyxcbiAgICAnZ3JpZEF1dG9Sb3dzJyxcbiAgICAnZ3JpZFRlbXBsYXRlQ29sdW1ucycsXG4gICAgJ2dyaWRUZW1wbGF0ZVJvd3MnLFxuICAgICdncmlkVGVtcGxhdGVBcmVhcycsXG4gICAgJ2dyaWRBcmVhJyxcbiAgICAndycsXG4gICAgJ21heHcnLFxuICAgICdtaW53JyxcbiAgICAnaCcsXG4gICAgJ21heGgnLFxuICAgICdtaW5oJyxcbiAgICAnYmcnLFxuICAgICdjJyxcbiAgICAnYm9yZGVyQ29sb3InLFxuICAgICdib3JkZXJXaWR0aCcsXG4gICAgJ2JvcmRlclN0eWxlJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnYm9yZGVyVG9wJyxcbiAgICAnYm9yZGVyUmlnaHQnLFxuICAgICdib3JkZXJCb3R0b20nLFxuICAgICdib3JkZXJMZWZ0JyxcbiAgICAnYm9yZGVyUmFkaXVzJyxcbiAgICAnYm9yZGVyVG9wUmlnaHRSYWRpdXMnLFxuICAgICdib3JkZXJUb3BMZWZ0UmFkaXVzJyxcbiAgICAnYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMnLFxuICAgICdib3JkZXJCb3R0b21MZWZ0UmFkaXVzJyxcbiAgICAnYm9yZGVyVG9wUmFkaXVzJyxcbiAgICAnYm9yZGVyUmlnaHRSYWRpdXMnLFxuICAgICdib3JkZXJCb3R0b21SYWRpdXMnLFxuICAgICdib3JkZXJMZWZ0UmFkaXVzJyxcbiAgICAnbGluZUhlaWdodCcsXG4gICAgJ2ZvbnRXZWlnaHQnLFxuICAgICdmdycsXG4gICAgJ2ZvbnRTaXplJyxcbiAgICAnZnMnLFxuICAgICdmb250RmFtaWx5JyxcbiAgICAnb3BhY2l0eScsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ2xheW91dEJsZWVkJyxcbiAgICAnc3ViZ3JpZCcsXG4gIF0pO1xuXG4gIHByb3RlY3RlZCB1cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHM6IE1hcDxzdHJpbmcsIGFueT4pIHtcbiAgICBzdXBlci51cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gQ2hlY2sgaWYgYW55IGNvbnRlbnQgcHJvcCBoYXMgY2hhbmdlZCB0byBkZXRlcm1pbmUgaWYgd2UgbmVlZCB0byB1cGRhdGUgdGhlIGluc3RhbmNlIHN0eWxlc1xuICAgIGxldCBzaG91bGRVcGRhdGVTdHlsZXMgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBjaGFuZ2VkUHJvcHMua2V5cygpKSB7XG4gICAgICBpZiAoTXRlQ29udGVudEJhc2UuY29udGVudFByb3BzLmhhcyhrZXkpKSB7XG4gICAgICAgIHNob3VsZFVwZGF0ZVN0eWxlcyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaG91bGRVcGRhdGVTdHlsZXMpIHtcbiAgICAgIC8vIERvdWJsZSB0aGUgYDpob3N0YCBzZWxlY3RvciB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSBiZXlvbmQgbW9zdCBjb21wb25lbnQgbGV2ZWwgc3R5bGVzIGJ5IGRlZmF1bHRcbiAgICAgIHRoaXMuc2V0SW5zdGFuY2VTdHlsZSgnY29udGVudC1iYXNlJywgc2VsZWN0b3JGYWN0b3J5KHRoaXMuY29udGVudFN0eWxlU2VsZWN0b3JSb290KSwge1xuICAgICAgICAvLyBTcGFjaW5nXG4gICAgICAgIG06IHRoaXMubSxcbiAgICAgICAgbXg6IHRoaXMubXgsXG4gICAgICAgIG15OiB0aGlzLm15LFxuICAgICAgICBtdDogdGhpcy5tdCxcbiAgICAgICAgbXI6IHRoaXMubXIsXG4gICAgICAgIG1iOiB0aGlzLm1iLFxuICAgICAgICBtbDogdGhpcy5tbCxcbiAgICAgICAgcDogdGhpcy5wLFxuICAgICAgICBweDogdGhpcy5weCxcbiAgICAgICAgcHk6IHRoaXMucHksXG4gICAgICAgIHB0OiB0aGlzLnB0LFxuICAgICAgICBwcjogdGhpcy5wcixcbiAgICAgICAgcGI6IHRoaXMucGIsXG4gICAgICAgIHBsOiB0aGlzLnBsLFxuICAgICAgICAvLyBQb3NpdGlvbmluZ1xuICAgICAgICBkOiB0aGlzLnN1YmdyaWQgPyAnZ3JpZCcgOiB0aGlzLmQsXG4gICAgICAgIGFsaWduSXRlbXM6IHRoaXMuYSA/PyB0aGlzLmFsaWduSXRlbXMsXG4gICAgICAgIGFsaWduU2VsZjogdGhpcy5hbGlnblNlbGYsXG4gICAgICAgIGFsaWduQ29udGVudDogdGhpcy5hbGlnbkNvbnRlbnQsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiB0aGlzLmogPz8gdGhpcy5qdXN0aWZ5Q29udGVudCxcbiAgICAgICAganVzdGlmeUl0ZW1zOiB0aGlzLmp1c3RpZnlJdGVtcyxcbiAgICAgICAganVzdGlmeVNlbGY6IHRoaXMuanVzdGlmeVNlbGYsXG4gICAgICAgIGZsZXg6IHRoaXMuZmxleCxcbiAgICAgICAgZmxleERpcmVjdGlvbjogdGhpcy5kaXJlY3Rpb24gPz8gdGhpcy5mbGV4RGlyZWN0aW9uLFxuICAgICAgICBmbGV4QmFzaXM6IHRoaXMuYmFzaXMgPz8gdGhpcy5mbGV4QmFzaXMsXG4gICAgICAgIGZsZXhTaHJpbms6IHRoaXMuc2hyaW5rID8/IHRoaXMuZmxleFNocmluayxcbiAgICAgICAgZmxleEdyb3c6IHRoaXMuZ3JvdyA/PyB0aGlzLmZsZXhHcm93LFxuICAgICAgICBmbGV4V3JhcDogdGhpcy53cmFwID8/IHRoaXMuZmxleFdyYXAsXG4gICAgICAgIG9yZGVyOiB0aGlzLm9yZGVyLFxuICAgICAgICBnYXA6IHRoaXMuZ2FwLFxuICAgICAgICBjb2x1bW5HYXA6IHRoaXMuY29sdW1uR2FwLFxuICAgICAgICByb3dHYXA6IHRoaXMucm93R2FwLFxuICAgICAgICBncmlkQ29sdW1uOiB0aGlzLmxheW91dEJsZWVkID8gdGhpcy5sYXlvdXRCbGVlZCA6IHRoaXMuZ3JpZENvbHVtbixcbiAgICAgICAgZ3JpZFJvdzogdGhpcy5ncmlkUm93LFxuICAgICAgICBncmlkQXV0b0Zsb3c6IHRoaXMuZ3JpZEF1dG9GbG93LFxuICAgICAgICBncmlkQXV0b0NvbHVtbnM6IHRoaXMuZ3JpZEF1dG9Db2x1bW5zLFxuICAgICAgICBncmlkQXV0b1Jvd3M6IHRoaXMuZ3JpZEF1dG9Sb3dzLFxuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiB0aGlzLnN1YmdyaWQgPyAnc3ViZ3JpZCcgOiB0aGlzLmdyaWRUZW1wbGF0ZUNvbHVtbnMsXG4gICAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6IHRoaXMuZ3JpZFRlbXBsYXRlUm93cyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlQXJlYXM6IHRoaXMuZ3JpZFRlbXBsYXRlQXJlYXMsXG4gICAgICAgIGdyaWRBcmVhOiB0aGlzLmdyaWRBcmVhLFxuICAgICAgICAvLyBTaXppbmdcbiAgICAgICAgdzogdGhpcy53LFxuICAgICAgICBtYXh3OiB0aGlzLm1heHcsXG4gICAgICAgIG1pbnc6IHRoaXMubWludyxcbiAgICAgICAgaDogdGhpcy5oLFxuICAgICAgICBtYXhoOiB0aGlzLm1heGgsXG4gICAgICAgIG1pbmg6IHRoaXMubWluaCxcbiAgICAgICAgLy8gQ29sb3JzXG4gICAgICAgIGJnOiB0aGlzLmJnLFxuICAgICAgICBjOiB0aGlzLmMsXG4gICAgICAgIC8vIEJvcmRlcnNcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuYm9yZGVyQ29sb3IsXG4gICAgICAgIGJvcmRlcldpZHRoOiB0aGlzLmJvcmRlcldpZHRoLFxuICAgICAgICBib3JkZXJTdHlsZTogdGhpcy5ib3JkZXJTdHlsZSxcbiAgICAgICAgYm9yZGVyOiB0aGlzLmJvcmRlclxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlclRvcDogdGhpcy5ib3JkZXJUb3BcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJSaWdodDogdGhpcy5ib3JkZXJSaWdodFxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlckxlZnQ6IHRoaXMuYm9yZGVyTGVmdFxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlckJvdHRvbTogdGhpcy5ib3JkZXJCb3R0b21cbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICAvLyBCb3JkZXIgUmFkaXVzXG4gICAgICAgIGJvcmRlclJhZGl1czogdGhpcy5ib3JkZXJSYWRpdXMsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOlxuICAgICAgICAgIHRoaXMuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPz8gdGhpcy5ib3JkZXJUb3BSYWRpdXMgPz8gdGhpcy5ib3JkZXJSaWdodFJhZGl1cyxcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlclRvcExlZnRSYWRpdXMgPz8gdGhpcy5ib3JkZXJUb3BSYWRpdXMgPz8gdGhpcy5ib3JkZXJMZWZ0UmFkaXVzLFxuICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID8/IHRoaXMuYm9yZGVyQm90dG9tUmFkaXVzID8/IHRoaXMuYm9yZGVyUmlnaHRSYWRpdXMsXG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID8/IHRoaXMuYm9yZGVyQm90dG9tUmFkaXVzID8/IHRoaXMuYm9yZGVyTGVmdFJhZGl1cyxcbiAgICAgICAgLy8gRm9udHNcbiAgICAgICAgbGluZUhlaWdodDogdGhpcy5saW5lSGVpZ2h0LFxuICAgICAgICBmb250V2VpZ2h0OiB0aGlzLmZ3ID8/IHRoaXMuZm9udFdlaWdodCxcbiAgICAgICAgZm9udFNpemU6IHRoaXMuZnMgPz8gdGhpcy5mb250U2l6ZSxcbiAgICAgICAgZm9udEZhbWlseTogdGhpcy5mb250RmFtaWx5LFxuICAgICAgICAvLyBPcGFjaXR5XG4gICAgICAgIG9wYWNpdHk6IHRoaXMub3BhY2l0eSxcbiAgICAgICAgLy8gRWxldmF0aW9uXG4gICAgICAgIGVsZXZhdGlvbjogdGhpcy5lbGV2YXRpb24sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBkZWZhdWx0Q29udmVydGVyIH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGNvbnN0IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciA9IHtcbiAgZnJvbUF0dHJpYnV0ZTogKHZhbHVlLCB0eXBlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh2YWx1ZT8uWzBdID09PSAneycpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgdHlwZSk7XG4gIH0sXG4gIHRvQXR0cmlidXRlOiAodmFsdWUsIHR5cGUpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIudG9BdHRyaWJ1dGUodmFsdWUsIE9iamVjdCk7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLnRvQXR0cmlidXRlKHZhbHVlLCB0eXBlKTtcbiAgfSxcbn07XG4iLCAiaW1wb3J0IHsgRGlyZWN0aXZlUmVzdWx0IH0gZnJvbSAnbGl0L2RpcmVjdGl2ZS5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTVkcsIFVuc2FmZVNWR0RpcmVjdGl2ZSB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL3Vuc2FmZS1zdmcuanMnO1xuXG5leHBvcnQgY29uc3QgaGViTG9nb1N2Z0NvbnRlbnRzOiBEaXJlY3RpdmVSZXN1bHQ8dHlwZW9mIFVuc2FmZVNWR0RpcmVjdGl2ZT4gPSB1bnNhZmVTVkcoXG4gIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIGlkPVwiTGF5ZXJfMVwiIHg9XCIwXCIgeT1cIjBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MzYuMjcgMTg2LjI0XCI+PHN0eWxlPi5zdDB7ZmlsbDojZTEyNTFifS5zdDF7ZmlsbDojZmZmfTwvc3R5bGU+PGcgaWQ9XCJfeDMxXy1IRUJfTUFJTl9MT0dPXzAwMDAwMDk2MDQzNDA0MjA2ODYxODgwODcwMDAwMDA0ODEzMjQwOTM4OTQ2ODU1MzU1X1wiPjxwYXRoIGQ9XCJNOTMuMTIgMTg2LjI0QzQxLjY5IDE4Ni4yNCAwIDE0NC41NSAwIDkzLjEyUzQxLjY5IDAgOTMuMTIgMGgzNTAuMDNjNTEuNDMgMCA5My4xMiA0MS42OSA5My4xMiA5My4xMnMtNDEuNjkgOTMuMTItOTMuMTIgOTMuMTJIOTMuMTJ6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk05My4xMiAxNzQuMTljLTQ0Ljc2IDAtODEuMDUtMzYuMjktODEuMDUtODEuMDVzMzYuMjktODEuMDUgODEuMDUtODEuMDVoMzUwLjAzYzQ0Ljc2IDAgODEuMDUgMzYuMjkgODEuMDUgODEuMDVzLTM2LjI5IDgxLjA1LTgxLjA1IDgxLjA1SDkzLjEyelwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJtNDQ0Ljk0IDI0LjExLTM1My42NC4wMmMtMzcuMDcgMC02Ny4yIDMwLjk1LTY3LjE2IDY5LjA3IDAgMzcuOTMgMzAuMTYgNjguODggNjcuMTYgNjguODhsMzUzLjYzLS4wN2MzNy4xLS4wMyA2Ny4xNS0zMC44OSA2Ny4yLTY4Ljg1LS4wNC0zOC4yLTMwLjA5LTY5LjA1LTY3LjE5LTY5LjA1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNMjI0LjIxIDEzMi4yM2g4OC4xbC43Ni0xMi45OGgtNTYuMTh2LTE0Ljg0aDQ0LjgxVjg5LjMzaC00NC44MVY3My4yNWw1OC45Mi0uMDEgMS4xNS0xOS4yOWgtOTcuNHpNMTMyLjQ2IDUzLjk1djM1LjM4SDEwOC42VjUzLjk1SDcxLjI3bDQuNjUgNzguMjhoMzIuNjh2LTI3LjgyaDIzLjg2djI3LjgyaDMyLjY4bDQuNjUtNzguMjh6TTQ0OC41MiA5Ny4wMmM5LjktMi44MyAxNi40OS04LjU5IDE2LjQ5LTIwLjY3LjAzLTEzLjgyLTExLjA2LTIyLjQtMjUuMjktMjIuNGgtNzMuMjhsNC42NSA3OC4yOWg2NC4wNmMyNy45OCAwIDI2LjM5LTE4LjggMjYuMzktMTguOCAwLTcuOTYtNS4zMy0xNC42MS0xMy4wMi0xNi40MnptLTMxLjAyIDIyLjIyaC0xMy43MXYtMTQuODNoMTMuMjJjNy4yMyAwIDExLjA5IDIuMzEgMTEuMDkgNy40OC4wMSA0Ljk0LTMuNDkgNy4zNS0xMC42IDcuMzV6bTEuMDYtMjkuOTFoLTE0Ljc3VjczLjI1aDE0LjI1YzcuODUgMCAxMi4wMyAyLjUgMTIuMDMgOC4xMSAwIDUuMzUtMy43OSA3Ljk3LTExLjUxIDcuOTd6TTE4Mi43NiA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpNMzI5LjY0IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4elwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJNNTMwLjM0IDE3Mi43N2MwLTIuNDYtMS40Ni0zLjU0LTQuNC0zLjU0aC00Ljc0djEyLjQ0aDEuODh2LTUuMzloMi4xN2wzLjI4IDUuMzloMi4xMWwtMy41NC01LjQ4YzEuODQtLjIyIDMuMjQtMS4xOSAzLjI0LTMuNDJ6bS03LjI1IDEuOTJ2LTMuODZoMi41N2MxLjMxIDAgMi43MS4yOSAyLjcxIDEuODMgMCAxLjkyLTEuNDMgMi4wMy0zLjAzIDIuMDNoLTIuMjV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk01MjUuMzcgMTY0LjY3Yy01LjkzIDAtMTAuOTYgNC41Ny0xMC45NiAxMC43NiAwIDYuMjQgNS4wMiAxMC44MSAxMC45NiAxMC44MSA1Ljg4IDAgMTAuOS00LjU3IDEwLjktMTAuODEgMC02LjItNS4wMi0xMC43Ni0xMC45LTEwLjc2em0wIDE5Ljc4Yy00LjkzIDAtOC43OS0zLjgzLTguNzktOS4wMiAwLTUuMTEgMy44NS04Ljk2IDguNzktOC45NiA0Ljg4IDAgOC43MyAzLjg1IDguNzMgOC45NiAwIDUuMTktMy44NSA5LjAyLTguNzMgOS4wMnpcIiBjbGFzcz1cInN0MFwiLz48L2c+PC9zdmc+YFxuKTtcblxuZXhwb3J0IGNvbnN0IGhlYkxvZ29XaGl0ZUNvcHlyaWdodFN2Z0NvbnRlbnRzOiBEaXJlY3RpdmVSZXN1bHQ8dHlwZW9mIFVuc2FmZVNWR0RpcmVjdGl2ZT4gPVxuICB1bnNhZmVTVkcoXG4gICAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgaWQ9XCJMYXllcl8xXCIgeD1cIjBcIiB5PVwiMFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDUzNi4yNyAxODYuMjRcIj48c3R5bGU+LnN0MHtmaWxsOiNlMTI1MWJ9LnN0MXtmaWxsOiNmZmZ9PC9zdHlsZT48ZyBpZD1cIl94MzFfLUhFQl9NQUlOX0xPR09fMDAwMDAwOTYwNDM0MDQyMDY4NjE4ODA4NzAwMDAwMDQ4MTMyNDA5Mzg5NDY4NTUzNTVfXCI+PHBhdGggZD1cIk05My4xMiAxODYuMjRDNDEuNjkgMTg2LjI0IDAgMTQ0LjU1IDAgOTMuMTJTNDEuNjkgMCA5My4xMiAwaDM1MC4wM2M1MS40MyAwIDkzLjEyIDQxLjY5IDkzLjEyIDkzLjEycy00MS42OSA5My4xMi05My4xMiA5My4xMkg5My4xMnpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTkzLjEyIDE3NC4xOWMtNDQuNzYgMC04MS4wNS0zNi4yOS04MS4wNS04MS4wNXMzNi4yOS04MS4wNSA4MS4wNS04MS4wNWgzNTAuMDNjNDQuNzYgMCA4MS4wNSAzNi4yOSA4MS4wNSA4MS4wNXMtMzYuMjkgODEuMDUtODEuMDUgODEuMDVIOTMuMTJ6XCIgY2xhc3M9XCJzdDFcIi8+PHBhdGggZD1cIm00NDQuOTQgMjQuMTEtMzUzLjY0LjAyYy0zNy4wNyAwLTY3LjIgMzAuOTUtNjcuMTYgNjkuMDcgMCAzNy45MyAzMC4xNiA2OC44OCA2Ny4xNiA2OC44OGwzNTMuNjMtLjA3YzM3LjEtLjAzIDY3LjE1LTMwLjg5IDY3LjItNjguODUtLjA0LTM4LjItMzAuMDktNjkuMDUtNjcuMTktNjkuMDV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk0yMjQuMjEgMTMyLjIzaDg4LjFsLjc2LTEyLjk4aC01Ni4xOHYtMTQuODRoNDQuODFWODkuMzNoLTQ0LjgxVjczLjI1bDU4LjkyLS4wMSAxLjE1LTE5LjI5aC05Ny40ek0xMzIuNDYgNTMuOTV2MzUuMzhIMTA4LjZWNTMuOTVINzEuMjdsNC42NSA3OC4yOGgzMi42OHYtMjcuODJoMjMuODZ2MjcuODJoMzIuNjhsNC42NS03OC4yOHpNNDQ4LjUyIDk3LjAyYzkuOS0yLjgzIDE2LjQ5LTguNTkgMTYuNDktMjAuNjcuMDMtMTMuODItMTEuMDYtMjIuNC0yNS4yOS0yMi40aC03My4yOGw0LjY1IDc4LjI5aDY0LjA2YzI3Ljk4IDAgMjYuMzktMTguOCAyNi4zOS0xOC44IDAtNy45Ni01LjMzLTE0LjYxLTEzLjAyLTE2LjQyem0tMzEuMDIgMjIuMjJoLTEzLjcxdi0xNC44M2gxMy4yMmM3LjIzIDAgMTEuMDkgMi4zMSAxMS4wOSA3LjQ4LjAxIDQuOTQtMy40OSA3LjM1LTEwLjYgNy4zNXptMS4wNi0yOS45MWgtMTQuNzdWNzMuMjVoMTQuMjVjNy44NSAwIDEyLjAzIDIuNSAxMi4wMyA4LjExIDAgNS4zNS0zLjc5IDcuOTctMTEuNTEgNy45N3pNMTgyLjc2IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4ek0zMjkuNjQgODkuMzNsLjkgMTUuMDhoMjIuMDNsLjktMTUuMDh6TTUyOC4zNCAxNzAuNzdjMC0yLjQ2LTEuNDYtMy41NC00LjQtMy41NGgtNC43NHYxMi40NGgxLjg4di01LjM5aDIuMTdsMy4yOCA1LjM5aDIuMTFsLTMuNTQtNS40OGMxLjg0LS4yMiAzLjI0LTEuMTkgMy4yNC0zLjQyem0tNy4yNSAxLjkydi0zLjg2aDIuNTdjMS4zMSAwIDIuNzEuMjkgMi43MSAxLjgzIDAgMS45Mi0xLjQzIDIuMDMtMy4wMyAyLjAzaC0yLjI1elwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJNNTIzLjM3IDE2Mi42N2MtNS45MyAwLTEwLjk2IDQuNTctMTAuOTYgMTAuNzYgMCA2LjI0IDUuMDIgMTAuODEgMTAuOTYgMTAuODEgNS44OCAwIDEwLjktNC41NyAxMC45LTEwLjgxIDAtNi4yLTUuMDItMTAuNzYtMTAuOS0xMC43NnptMCAxOS43OGMtNC45MyAwLTguNzktMy44My04Ljc5LTkuMDIgMC01LjExIDMuODUtOC45NiA4Ljc5LTguOTYgNC44OCAwIDguNzMgMy44NSA4LjczIDguOTYgMCA1LjE5LTMuODUgOS4wMi04LjczIDkuMDJ6XCIgY2xhc3M9XCJzdDFcIi8+PC9nPjwvc3ZnPmBcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGhlYkxvZ29JbnZlcnNlU3ZnQ29udGVudHM6IERpcmVjdGl2ZVJlc3VsdDx0eXBlb2YgVW5zYWZlU1ZHRGlyZWN0aXZlPiA9IHVuc2FmZVNWRyhcbiAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgaWQ9XCJMYXllcl8xXCIgeD1cIjBcIiB5PVwiMFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDUzNi4yNyAxODYuMjRcIj48c3R5bGU+LnN0MHtmaWxsOiNmZmZ9PC9zdHlsZT48cGF0aCBkPVwiTTQ0My4xNSAwSDkzLjEyQzQxLjY5IDAgMCA0MS42OSAwIDkzLjEyYzAgNTEuNDMgNDEuNjkgOTMuMTIgOTMuMTIgOTMuMTJoMzUwLjAzYzUxLjQzIDAgOTMuMTItNDEuNjkgOTMuMTItOTMuMTJDNTM2LjI3IDQxLjY5IDQ5NC41OCAwIDQ0My4xNSAwem0wIDE3NC4xOUg5My4xMmMtNDQuNzYgMC04MS4wNS0zNi4yOS04MS4wNS04MS4wNXMzNi4yOS04MS4wNSA4MS4wNS04MS4wNWgzNTAuMDNjNDQuNzYgMCA4MS4wNSAzNi4yOSA4MS4wNSA4MS4wNS4wMSA0NC43Ni0zNi4yOCA4MS4wNS04MS4wNSA4MS4wNXptLTEzLjA4LTkyLjgzYzAgNS4zNi0zLjc5IDcuOTgtMTEuNTEgNy45OGgtMTQuNzdWNzMuMjVoMTQuMjVjNy44NCAwIDEyLjAzIDIuNSAxMi4wMyA4LjExem0tMS45NiAzMC41M2MwIDQuOTQtMy41IDcuMzYtMTAuNjEgNy4zNmgtMTMuNzF2LTE0LjgzaDEzLjIyYzcuMjQtLjAxIDExLjEgMi4zIDExLjEgNy40N3ptMTYuODMtODcuNzgtMzUzLjY0LjAyYy0zNy4wNyAwLTY3LjIgMzAuOTUtNjcuMTYgNjkuMDcgMCAzNy45MiAzMC4xNiA2OC44OCA2Ny4xNiA2OC44OGwzNTMuNjMtLjA3YzM3LjEtLjAzIDY3LjE1LTMwLjg5IDY3LjItNjguODUtLjA0LTM4LjItMzAuMDktNjkuMDUtNjcuMTktNjkuMDV6bS0yNzkuOCAxMDguMTJoLTMyLjY4di0yNy44MkgxMDguNnYyNy44Mkg3NS45MmwtNC42NS03OC4yOGgzNy4zM3YzNS4zOGgyMy44NlY1My45NWgzNy4zM2wtNC42NSA3OC4yOHptNDAuNTUtMjcuODJoLTIyLjA0bC0uOS0xNS4wOGgyMy44M2wtLjg5IDE1LjA4em0xMTAuMTItMzEuMTctNTguOTIuMDF2MTYuMDhoNDQuODF2MTUuMDhoLTQ0LjgxdjE0LjgzaDU2LjE4bC0uNzYgMTIuOTloLTg4LjFsLTQuNjUtNzguMjhoOTcuNGwtMS4xNSAxOS4yOXptMzYuNzYgMzEuMTdoLTIyLjA0bC0uOS0xNS4wOGgyMy44M2wtLjg5IDE1LjA4em0xMDguOTcgOS4wM3MxLjU5IDE4LjgtMjYuMzkgMTguOGgtNjQuMDZsLTQuNjUtNzguMjloNzMuMjhjMTQuMjMgMCAyNS4zMSA4LjU4IDI1LjI5IDIyLjQgMCAxMi4wOC02LjU5IDE3Ljg1LTE2LjQ5IDIwLjY3IDcuNjkgMS44MSAxMy4wMiA4LjQ2IDEzLjAyIDE2LjQyek01MzAuMzQgMTcyLjc3YzAtMi40Ni0xLjQ2LTMuNTQtNC40LTMuNTRoLTQuNzR2MTIuNDRoMS44OHYtNS4zOWgyLjE3bDMuMjggNS4zOWgyLjExbC0zLjU0LTUuNDhjMS44NC0uMjIgMy4yNC0xLjE5IDMuMjQtMy40MnptLTcuMjUgMS45MnYtMy44NmgyLjU3YzEuMzEgMCAyLjcxLjI5IDIuNzEgMS44MyAwIDEuOTItMS40MyAyLjAzLTMuMDMgMi4wM2gtMi4yNXpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTUyNS4zNyAxNjQuNjdjLTUuOTMgMC0xMC45NiA0LjU3LTEwLjk2IDEwLjc2IDAgNi4yNCA1LjAyIDEwLjgxIDEwLjk2IDEwLjgxIDUuODggMCAxMC45LTQuNTcgMTAuOS0xMC44MSAwLTYuMi01LjAyLTEwLjc2LTEwLjktMTAuNzZ6bTAgMTkuNzhjLTQuOTMgMC04Ljc5LTMuODMtOC43OS05LjAyIDAtNS4xMSAzLjg1LTguOTYgOC43OS04Ljk2IDQuODggMCA4LjczIDMuODUgOC43MyA4Ljk2IDAgNS4xOS0zLjg1IDkuMDItOC43MyA5LjAyelwiIGNsYXNzPVwic3QwXCIvPjwvc3ZnPmBcbik7XG4iLCAiaW1wb3J0IHsgUmVhY3RpdmVDb250cm9sbGVySG9zdCB9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBjbGFzcyBDbGlja091dHNpZGVDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSB0YXJnZXRzID0gbmV3IFNldDxIVE1MRWxlbWVudD4oKTtcbiAgcHJpdmF0ZSBsaXN0ZW5pbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgJiBFbGVtZW50LCBwcml2YXRlIGNhbGxiYWNrOiAoKSA9PiBhbnkpIHtcbiAgICB0aGlzLmhvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcblxuICAgIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlID0gdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhvc3RDb25uZWN0ZWQoKSB7fVxuXG4gIGhvc3REaXNjb25uZWN0ZWQoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGxpc3RlbkZvckNsaWNrc091dHNpZGVPZihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMudGFyZ2V0cy5hZGQoZWxlbWVudCk7XG4gICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGFkZFRhcmdldChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMudGFyZ2V0cy5hZGQoZWxlbWVudCk7XG4gIH1cblxuICByZW1vdmVUYXJnZXQoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnRhcmdldHMuZGVsZXRlKGVsZW1lbnQpO1xuICB9XG5cbiAgc3RvcExpc3RlbmluZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgIHRoaXMudGFyZ2V0cy5jbGVhcigpO1xuICB9XG5cbiAgaXNMaXN0ZW5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5zaXplID4gMDtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBzaG91bGRJZ25vcmUgPSBldmVudD8udGFyZ2V0Py5oYXNBdHRyaWJ1dGUoJ2RhdGEtaWdub3JlLW91dHNpZGUtY2xpY2tzJyk7XG4gICAgbGV0IHNob3VsZFRyaWdnZXIgPSB0cnVlO1xuICAgIGNvbnN0IHRhcmdldHNJdCA9IHRoaXMudGFyZ2V0cy5lbnRyaWVzKCk7XG4gICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0c0l0KSB7XG4gICAgICBpZiAoZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXModGFyZ2V0WzBdKSkge1xuICAgICAgICBzaG91bGRUcmlnZ2VyID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hvdWxkVHJpZ2dlciAmJiAhc2hvdWxkSWdub3JlKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmluZykge1xuICAgICAgdGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICB0aGlzLmxpc3RlbmluZyA9IGZhbHNlO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgUmVhY3RpdmVDb250cm9sbGVySG9zdCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQge1xuICBnZXRGb2N1c2FibGVFbGVtZW50cyxcbiAgaXNFbGVtZW50Rm9jdXNlZCxcbiAgbm9ybWFsaXplVGFiSW5kZXgsXG59IGZyb20gJy4uL3V0aWxpdGllcy9mb2N1cy51dGlsaXRpZXMnO1xuXG5jb25zdCBpbnN0YW5jZXMgPSBbXTtcblxuLyoqIFJldHVybnMgdHJ1ZSBpZiBhbnkgZm9jdXMgdHJhcCBpcyBhY3RpdmUgKi9cbmV4cG9ydCBjb25zdCBpc0ZvY3VzVHJhcEFjdGl2ZSA9ICgpID0+IHtcbiAgcmV0dXJuIGluc3RhbmNlcy5sZW5ndGggPiAwO1xufTtcblxuLyoqIEEgY29udHJvbGxlciBmb3IgdHJhcHBpbmcgZm9jdXMgd2l0aGluIGEgRE9NIG5vZGUuKi9cbmV4cG9ydCBjbGFzcyBGb2N1c1RyYXBDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSB0cmFwTm9kZT86IEVsZW1lbnQgfCBIVE1MRWxlbWVudCA9IG51bGw7XG4gIHByaXZhdGUgcmVzdG9yZVRhcmdldD86IEVsZW1lbnQgfCBIVE1MRWxlbWVudDtcblxuICAvKiogQW4gYXJyYXkgb2YgdGFiLW9yZGVyZWQgZm9jdXNhYmxlIGVsZW1lbnRzIGluc2lkZSB0aGUgdHJhcCBub2RlLiAqL1xuICBwcml2YXRlIGdldCBmb2N1c2FibGVFbGVtZW50cygpIHtcbiAgICByZXR1cm4gZ2V0Rm9jdXNhYmxlRWxlbWVudHModGhpcy50cmFwTm9kZSk7XG4gIH1cblxuICAvKiogVGhlIGluZGV4IG9mIHRoZSBlbGVtZW50IGluc2lkZSB0aGUgdHJhcCBub2RlIHRoYXQgY3VycmVudGx5IGhhcyBmb2N1cy4gKi9cbiAgcHJpdmF0ZSBnZXQgZm9jdXNlZEVsZW1lbnRJbmRleCgpIHtcbiAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IHRoaXMuZm9jdXNhYmxlRWxlbWVudHM7XG4gICAgcmV0dXJuIGZvY3VzYWJsZUVsZW1lbnRzPy5pbmRleE9mKGZvY3VzYWJsZUVsZW1lbnRzPy5maWx0ZXIoaXNFbGVtZW50Rm9jdXNlZCkucG9wKCkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0ICYgRWxlbWVudCkge1xuICAgIHRoaXMuaG9zdC5hZGRDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhvc3RDb25uZWN0ZWQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcbiAgfVxuXG4gIGhvc3REaXNjb25uZWN0ZWQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgYSBmb2N1cyB0cmFwIGZvciBhIERPTSBub2RlIHRoYXQgd2lsbCBwcmV2ZW50IGZvY3VzIGZyb20gZXNjYXBpbmcgdGhlIG5vZGUuXG4gICAqIFRoZSB0cmFwIGNhbiBiZSBkZWFjdGl2YXRlZCB3aXRoIHRoZSBgLnJlbGVhc2VGb2N1cygpYCBtZXRob2QuXG4gICAqXG4gICAqIElmIGZvY3VzIGlzIGluaXRpYWxseSBvdXRzaWRlIHRoZSB0cmFwLCB0aGUgbWV0aG9kIHdpbGwgbW92ZSBmb2N1cyBpbnNpZGUsXG4gICAqIG9uIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBvZiB0aGUgdHJhcCBpbiB0aGUgdGFiIG9yZGVyLlxuICAgKiBUaGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgY2FuIGJlIHRoZSB0cmFwIG5vZGUgaXRzZWxmIGlmIGl0IGlzIGZvY3VzYWJsZVxuICAgKiBhbmQgY29tZXMgZmlyc3QgaW4gdGhlIHRhYiBvcmRlci5cbiAgICpcbiAgICogSWYgdGhlcmUgYXJlIG5vIGZvY3VzYWJsZSBlbGVtZW50cywgdGhlIG1ldGhvZCB3aWxsIHRocm93IGFuIGV4Y2VwdGlvblxuICAgKiBhbmQgdGhlIHRyYXAgd2lsbCBub3QgYmUgc2V0LlxuICAgKlxuICAgKiBJZiBhbiBlbGVtZW50IGlzIHBhc3NlZCB0byBgcmVzdG9yZUZvY3VzT25Eb25lYCB0aGF0IGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIHVwb25cbiAgICogcmVsZWFzZSBvZiB0aGUgZm9jdXMgdHJhcC5cbiAgICovXG4gIHRyYXBGb2N1cyh0cmFwTm9kZTogRWxlbWVudCB8IEhUTUxFbGVtZW50LCByZXN0b3JlRm9jdXNPblJlbGVhc2U/OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnRyYXBOb2RlID0gdHJhcE5vZGU7XG4gICAgdGhpcy5yZXN0b3JlVGFyZ2V0ID0gcmVzdG9yZUZvY3VzT25SZWxlYXNlID8/IG51bGw7XG5cbiAgICBpZiAodGhpcy5mb2N1c2FibGVFbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIEFsbG93cyB1cyB0byBmb2N1cyB0aGluZ3MgbGlrZSBwb3BvdmVycyBpZiB0aGV5IGNvbnRhaW4gbm90IGZvY3VzYWJsZSBjaGlsZHJlblxuICAgICAgaWYgKHRoaXMudHJhcE5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLWZvY3VzLWZhbGxiYWNrJykpIHtcbiAgICAgICAgKHRoaXMudHJhcE5vZGUgYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyYXBOb2RlID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIFRPRE8oUmVlY2UpOiBEZWNpZGUgaWYgd2Ugd2FudCB0byB0aHJvdyBlcnJvciBvciB3YXJuIGF0IGFsbCBoZXJlXG4gICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAvLyAgICdUaGUgdHJhcCBub2RlIHNob3VsZCBoYXZlIGF0IGxlYXN0IG9uZSBmb2N1c2FibGUgZGVzY2VuZGFudCBvciBiZSBmb2N1c2FibGUgaXRzZWxmLidcbiAgICAgIC8vICk7XG4gICAgfVxuXG4gICAgaW5zdGFuY2VzLnB1c2godGhpcyk7XG5cbiAgICBjb25zdCBlbGVtID0gdGhpcy50cmFwTm9kZT8ucXVlcnlTZWxlY3RvcignW2RhdGEtYXV0b2ZvY3VzXScpIGFzIGFueTtcbiAgICBpZiAoZWxlbSAmJiBub3JtYWxpemVUYWJJbmRleChlbGVtKSAhPT0gLTEpIHtcbiAgICAgIGVsZW0uZm9jdXMoKTtcbiAgICAgIGlmIChlbGVtLnNob3dGb2N1c1JpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlbGVtLnNob3dGb2N1c1JpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5mb2N1c2VkRWxlbWVudEluZGV4ID09PSAtMSAmJiB0aGlzLmZvY3VzYWJsZUVsZW1lbnRzPy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmZvY3VzYWJsZUVsZW1lbnRzWzBdLmZvY3VzKCk7XG4gICAgICBpZiAodGhpcy5mb2N1c2FibGVFbGVtZW50c1swXS5zaG93Rm9jdXNSaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5mb2N1c2FibGVFbGVtZW50c1swXS5zaG93Rm9jdXNSaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNUcmFwcGluZ0ZvY3VzKCkge1xuICAgIHJldHVybiB0aGlzLnRyYXBOb2RlICE9PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBmb2N1cyB0cmFwIHNldCB3aXRoIHRoZSBgLnRyYXBGb2N1cygpYCBtZXRob2RcbiAgICogc28gdGhhdCBpdCBiZWNvbWVzIHBvc3NpYmxlIHRvIHRhYiBvdXRzaWRlIHRoZSB0cmFwIG5vZGUuXG4gICAqL1xuICByZWxlYXNlRm9jdXMocHJldmVudFNjcm9sbCA9IGZhbHNlKSB7XG4gICAgdGhpcy50cmFwTm9kZSA9IG51bGw7XG4gICAgaW5zdGFuY2VzLnBvcCgpO1xuICAgICh0aGlzLnJlc3RvcmVUYXJnZXQgYXMgYW55KT8uZm9jdXM/Lih7IHByZXZlbnRTY3JvbGw6IHByZXZlbnRTY3JvbGwgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBga2V5ZG93bmAgZXZlbnQgaGFuZGxlciB0aGF0IG1hbmFnZXMgdGFiYmluZyBuYXZpZ2F0aW9uIHdoZW4gdGhlIHRyYXAgaXMgZW5hYmxlZC5cbiAgICpcbiAgICogLSBNb3ZlcyBmb2N1cyB0byB0aGUgbmV4dCBmb2N1c2FibGUgZWxlbWVudCBvZiB0aGUgdHJhcCBvbiBgVGFiYCBwcmVzcy5cbiAgICogV2hlbiBubyBuZXh0IGVsZW1lbnQgdG8gZm9jdXMsIHRoZSBtZXRob2QgbW92ZXMgZm9jdXMgdG8gdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgKiAtIE1vdmVzIGZvY3VzIHRvIHRoZSBwcmV2IGZvY3VzYWJsZSBlbGVtZW50IG9mIHRoZSB0cmFwIG9uIGBTaGlmdCtUYWJgIHByZXNzLlxuICAgKiBXaGVuIG5vIHByZXYgZWxlbWVudCB0byBmb2N1cywgdGhlIG1ldGhvZCBtb3ZlcyBmb2N1cyB0byB0aGUgbGFzdCBmb2N1c2FibGUgZWxlbWVudC5cbiAgICovXG4gIHByaXZhdGUgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnRyYXBOb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gT25seSBoYW5kbGUgZXZlbnRzIGZvciB0aGUgbGFzdCBpbnN0YW5jZVxuICAgIGlmICh0aGlzICE9PSBBcnJheS5mcm9tKGluc3RhbmNlcykucG9wKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgYmFja3dhcmQgPSBldmVudC5zaGlmdEtleTtcbiAgICAgIHRoaXMuZm9jdXNOZXh0RWxlbWVudChiYWNrd2FyZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIC0gTW92ZXMgZm9jdXMgdG8gdGhlIG5leHQgZm9jdXNhYmxlIGVsZW1lbnQgaWYgYGJhY2t3YXJkID09PSBmYWxzZWAuXG4gICAqIFdoZW4gbm8gbmV4dCBlbGVtZW50IHRvIGZvY3VzLCB0aGUgbWV0aG9kIG1vdmVzIGZvY3VzIHRvIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC5cbiAgICogLSBNb3ZlcyBmb2N1cyB0byB0aGUgcHJldiBmb2N1c2FibGUgZWxlbWVudCBpZiBgYmFja3dhcmQgPT09IHRydWVgLlxuICAgKiBXaGVuIG5vIHByZXYgZWxlbWVudCB0byBmb2N1cyB0aGUgbWV0aG9kIG1vdmVzIGZvY3VzIHRvIHRoZSBsYXN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgKlxuICAgKiBJZiBubyBmb2N1c2FibGUgZWxlbWVudHMsIHRoZSBtZXRob2QgcmV0dXJucyBpbW1lZGlhdGVseS5cbiAgICovXG4gIHByaXZhdGUgZm9jdXNOZXh0RWxlbWVudChiYWNrd2FyZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSB0aGlzLmZvY3VzYWJsZUVsZW1lbnRzO1xuICAgIGlmIChmb2N1c2FibGVFbGVtZW50cz8ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc3RlcCA9IGJhY2t3YXJkID8gLTEgOiAxO1xuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5mb2N1c2VkRWxlbWVudEluZGV4O1xuICAgICAgY29uc3QgbmV4dEluZGV4ID0gKGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCArIGN1cnJlbnRJbmRleCArIHN0ZXApICUgZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoO1xuICAgICAgZm9jdXNhYmxlRWxlbWVudHNbbmV4dEluZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgUmVhY3RpdmVDb250cm9sbGVyLCBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IFNpZ25hbCwgY29tcHV0ZWQsIGlzU3NyLCBzaWduYWwgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3RDb250cm9sbGVyT3B0aW9ucyB7XG4gIC8qKiBOYW1lcyBvZiBzbG90cyB0aGF0IHNob3VsZCB0cmlnZ2VyIGEgY29tcG9uZW50IHVwZGF0ZSBpZiBjaGFuZ2VkICovXG4gIHVwZGF0ZU9uQ2hhbmdlPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjbGFzcyBTbG90Q29udHJvbGxlciBpbXBsZW1lbnRzIFJlYWN0aXZlQ29udHJvbGxlciB7XG4gIHB1YmxpYyBzbG90Q2hhbmdlID0gc2lnbmFsPFNldDxzdHJpbmc+PihudWxsKTtcbiAgcHVibGljIG9uQ29ubmVjdGVkID0gc2lnbmFsKGZhbHNlKTtcbiAgcHVibGljIGNvbm5lY3RlZENvbXBsZXRlID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBzdWJzID0gW107XG4gIHByaXZhdGUgdXBkYXRlVHJpZ2dlclNsb3RzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGhvc3Q6IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgJiBFbGVtZW50LFxuICAgIHB1YmxpYyBvcHRpb25zOiBTbG90Q29udHJvbGxlck9wdGlvbnMgPSBudWxsXG4gICkge1xuICAgIHRoaXMuaG9zdC5hZGRDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlT25DaGFuZ2Uob3B0aW9ucz8udXBkYXRlT25DaGFuZ2UpO1xuICB9XG5cbiAgLyoqIEVtaXRzIHdoZW4gb25lIG9mIHRoZSBzcGVjaWZpZWQgc2xvdHMgaGFzIGNoYW5nZWQgYW5kIGFmdGVyIHRoZSBmaXJzdFVwZGF0ZSBhZnRlciBob3N0Q29ubmVjdGVkICovXG4gIHB1YmxpYyB3YXRjaFNsb3RzKHNsb3RzOiBzdHJpbmdbXSA9IFtdLCB7IHVwZGF0ZU9uQ29ubmVjdGVkIH0gPSB7IHVwZGF0ZU9uQ29ubmVjdGVkOiB0cnVlIH0pIHtcbiAgICBjb25zdCByZXR1cm5TaWduYWwgPSBzaWduYWw8U2V0PHN0cmluZz4+KCk7XG4gICAgdGhpcy5zdWJzLnB1c2goXG4gICAgICBjb21wdXRlZChcbiAgICAgICAgW3RoaXMub25Db25uZWN0ZWQsIHRoaXMuc2xvdENoYW5nZV0sXG4gICAgICAgIChbY29ubmVjdGVkLCBjaGFuZ2VzXTogW2Jvb2xlYW4sIFNldDxzdHJpbmc+XSwgc2V0KSA9PiB7XG4gICAgICAgICAgaWYgKHVwZGF0ZU9uQ29ubmVjdGVkICYmIGNvbm5lY3RlZCAmJiAhdGhpcy5jb25uZWN0ZWRDb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICBzZXQobmV3IFNldChzbG90cykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjaGFuZ2VzICYmXG4gICAgICAgICAgICBBcnJheS5mcm9tKGNoYW5nZXMua2V5cygpKS5zb21lKChrZXkpID0+IHNsb3RzLmxlbmd0aCA9PT0gMCB8fCBzbG90cy5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc2V0KGNoYW5nZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKS5zdWJzY3JpYmUoKGNoYW5nZXM6IFNldDxzdHJpbmc+KSA9PiB7XG4gICAgICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgICAgcmV0dXJuU2lnbmFsLnNldChjaGFuZ2VzKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybiByZXR1cm5TaWduYWwgYXMgU2lnbmFsPFNldDxzdHJpbmc+PjtcbiAgfVxuXG4gIHB1YmxpYyBjaGVjayhzbG90TmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHNsb3ROYW1lID09PSAnZGVmYXVsdCcgPyB0aGlzLmhhc0RlZmF1bHRTbG90KCkgOiB0aGlzLmhhc05hbWVkU2xvdChzbG90TmFtZSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlT25DaGFuZ2Uoc2xvdHM6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2xvdHMpKSB7XG4gICAgICBzbG90cy5mb3JFYWNoKChzbG90KSA9PiB0aGlzLnVwZGF0ZVRyaWdnZXJTbG90cy5hZGQoc2xvdCkpO1xuICAgIH0gZWxzZSBpZiAoc2xvdHMpIHtcbiAgICAgIHRoaXMudXBkYXRlVHJpZ2dlclNsb3RzLmFkZChzbG90cyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYXNEZWZhdWx0U2xvdCgpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuaG9zdC5jaGlsZE5vZGVzXS5zb21lKChub2RlKSA9PiB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5URVhUX05PREUgJiYgbm9kZS50ZXh0Q29udGVudD8udHJpbSgpICE9PSAnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGNvbnN0IGVsID0gbm9kZSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvLyBJZ25vcmUgdmlzdWFsbHkgaGlkZGVuIGVsZW1lbnRzIHNpbmNlIHRoZXkgYXJlbid0IHJlbmRlcmVkXG4gICAgICAgIGlmICh0YWdOYW1lID09PSAnbXRlLXZpc3VhbGx5LWhpZGRlbicpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBkb2Vzbid0IGhhdmUgYSBzbG90IGF0dHJpYnV0ZSwgaXQncyBwYXJ0IG9mIHRoZSBkZWZhdWx0IHNsb3RcbiAgICAgICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoJ3Nsb3QnKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzTmFtZWRTbG90KG5hbWU6IHN0cmluZykge1xuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5xdWVyeVNlbGVjdG9yKGA6c2NvcGUgPiBbc2xvdD1cIiR7bmFtZX1cIl1gKSAhPT0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2xvdENoYW5nZSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBjb25zdCBzbG90ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxTbG90RWxlbWVudDtcblxuICAgIC8vIFNldHVwIGV2ZW50IG1hcFxuICAgIGNvbnN0IGV2ZW50U2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgLy8gQWRkIGR1cGxpY2F0ZSBtYXBwaW5nIGZvciBzaW1wbGlmaWVkIGRlZmF1bHQgbmFtZVxuICAgIGlmIChzbG90Lm5hbWUgPT09ICdbZGVmYXVsdF0nIHx8IHNsb3QubmFtZSA9PT0gJycpIHtcbiAgICAgIGV2ZW50U2V0LmFkZCgnZGVmYXVsdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudFNldC5hZGQoc2xvdC5uYW1lKTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IHNsb3QgY2hhbmdlIHJlYWN0aXZlIGV2ZW50XG4gICAgdGhpcy5zbG90Q2hhbmdlLnNldChldmVudFNldCk7XG5cbiAgICAvLyBBdXRvbWF0aWNhbGx5IHJlcXVlc3QgYSBjb21wb25lbnQgdXBkYXRlIGFzIGNvbmZpZ3VyYXRpb24gZGljdGF0ZXNcbiAgICBpZiAoXG4gICAgICAodGhpcy51cGRhdGVUcmlnZ2VyU2xvdHMuaGFzKCdkZWZhdWx0JykgJiYgIXNsb3QubmFtZSkgfHxcbiAgICAgIChzbG90Lm5hbWUgJiYgdGhpcy51cGRhdGVUcmlnZ2VyU2xvdHMuaGFzKHNsb3QubmFtZSkpXG4gICAgKSB7XG4gICAgICB0aGlzLmhvc3QucmVxdWVzdFVwZGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBob3N0Q29ubmVjdGVkKCkge1xuICAgIHRoaXMuaG9zdC5zaGFkb3dSb290Py5hZGRFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgdGhpcy5oYW5kbGVTbG90Q2hhbmdlKTtcblxuICAgIC8vIFdhaXQgdW50aWwgZmlyc3QgdXBkYXRlIGFmdGVyIGNvbm5lY3RlZFxuICAgIHRoaXMuaG9zdC51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMub25Db25uZWN0ZWQuc2V0KHRydWUpO1xuICAgICAgLy8gVE9ETyhyZWVjZSk6IHJlY29uc2lkZXIgd2hlbiBhIHNvbHV0aW9uIGV4aXN0cyBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzE0MzRcbiAgICAgIC8vIElmIGFmdGVyIHRoZSBmaXJzdFVwZGF0ZSB3ZSdyZSB3YXRjaGluZyBzbG90cyByZXF1ZXN0IGFub3RoZXIgaW4gY2FzZSBzc3Itc2xvdHMgd2FzIG5vdCBwcm9wZXJseSBzZXQgYnkgdGhlIHVzZXJcbiAgICAgIGlmICh0aGlzLnVwZGF0ZVRyaWdnZXJTbG90cy5zaXplID4gMCkge1xuICAgICAgICB0aGlzLmhvc3QucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaG9zdERpc2Nvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmhvc3Quc2hhZG93Um9vdD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsIHRoaXMuaGFuZGxlU2xvdENoYW5nZSk7XG4gICAgdGhpcy5zdWJzLmZvckVhY2goKHVuc3ViKSA9PiB1bnN1YigpKTtcbiAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICB0aGlzLmNvbm5lY3RlZENvbXBsZXRlID0gZmFsc2U7XG4gICAgdGhpcy5vbkNvbm5lY3RlZC5zZXQoZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYSBzbG90LCB0aGlzIGZ1bmN0aW9uIGl0ZXJhdGVzIG92ZXIgYWxsIG9mIGl0cyBhc3NpZ25lZCBlbGVtZW50IGFuZCB0ZXh0IG5vZGVzIGFuZCByZXR1cm5zIHRoZSBjb25jYXRlbmF0ZWRcbiAqIEhUTUwgYXMgYSBzdHJpbmcuIFRoaXMgaXMgdXNlZnVsIGJlY2F1c2Ugd2UgY2FuJ3QgdXNlIHNsb3QuaW5uZXJIVE1MIGFzIGFuIGFsdGVybmF0aXZlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5uZXJIVE1MKHNsb3Q6IEhUTUxTbG90RWxlbWVudCk6IHN0cmluZyB7XG4gIGNvbnN0IG5vZGVzID0gc2xvdC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KTtcbiAgbGV0IGh0bWwgPSAnJztcblxuICBbLi4ubm9kZXNdLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIGh0bWwgKz0gKG5vZGUgYXMgSFRNTEVsZW1lbnQpLm91dGVySFRNTDtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIGh0bWwgKz0gbm9kZS50ZXh0Q29udGVudDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBodG1sO1xufVxuXG4vKipcbiAqIEdpdmVuIGEgc2xvdCwgdGhpcyBmdW5jdGlvbiBpdGVyYXRlcyBvdmVyIGFsbCBvZiBpdHMgYXNzaWduZWQgdGV4dCBub2RlcyBhbmQgcmV0dXJucyB0aGUgY29uY2F0ZW5hdGVkIHRleHQgYXMgYVxuICogc3RyaW5nLiBUaGlzIGlzIHVzZWZ1bCBiZWNhdXNlIHdlIGNhbid0IHVzZSBzbG90LnRleHRDb250ZW50IGFzIGFuIGFsdGVybmF0aXZlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQoc2xvdDogSFRNTFNsb3RFbGVtZW50IHwgdW5kZWZpbmVkIHwgbnVsbCk6IHN0cmluZyB7XG4gIGlmICghc2xvdCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBjb25zdCBub2RlcyA9IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gIGxldCB0ZXh0ID0gJyc7XG5cbiAgWy4uLm5vZGVzXS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICB0ZXh0ICs9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdGV4dDtcbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuaW1wb3J0IHtcbiAgY29uZmlnIGFzIGdldHRlckNvbmZpZyxcbiAgc2V0Q29uZmlnIGFzIHNldHRlckNvbmZpZyxcbiAgTW9ydGFyVGhlbWVDb25maWcsXG59IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7IFN1YnNldCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzU3NyLCBzaWduYWwgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgdHlwZSBNdGVUaGVtZSA9ICdkZWZhdWx0JyB8ICdweExpZ2h0JyB8ICdjeExpZ2h0JyB8ICdyeExpZ2h0JztcblxuZXhwb3J0IHR5cGUgTXRlQ29sb3JTY2hlbWUgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgJ3N5c3RlbSc7XG5cbmNvbnN0IENBQ0hFX1RPX0tFWSA9ICdtdGUudGhlbWUuY2FjaGUtdG8nO1xuY29uc3QgQ09MT1JfU0NIRU1FX0tFWSA9ICdtdGUudGhlbWUuZ2xvYmFsLWNvbG9yLXNjaGVtZSc7XG5cbmNsYXNzIF9NdGVUaGVtZVNlcnZpY2Uge1xuICBjb25maWcgPSBnZXR0ZXJDb25maWc7XG5cbiAgcHJpdmF0ZSByb290T2JzZXJ2ZXI/OiBNdXRhdGlvbk9ic2VydmVyO1xuICBwcml2YXRlIHRoZW1lU2lnbmFsID0gc2lnbmFsPE10ZVRoZW1lIHwgbnVsbD4odGhpcy5nZXRHbG9iYWxUaGVtZSgpKTtcbiAgcHJpdmF0ZSBjb2xvclNjaGVtZVNpZ25hbCA9IHNpZ25hbDxNdGVDb2xvclNjaGVtZSB8IG51bGw+KHRoaXMuZ2V0R2xvYmFsQ29sb3JTY2hlbWUoKSA/PyAnbGlnaHQnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRDYWNoZSgpO1xuICB9XG5cbiAgLyoqIENvbmZpZ3VyZXMgdGhlIGBNdGVUaGVtZVNlcnZpY2VgIHRvIGNhY2hlIGNvbG9yLXNjaGVtZSBjaGFuZ2VzIHRvIGBsb2NhbFN0b3JhZ2VgLCBgc2Vzc2lvblN0b3JhZ2VgLCBvciBuZWl0aGVyLiAqL1xuICBwdWJsaWMgY2FjaGVDb2xvclNjaGVtZVRvKG1ldGhvZDogJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnKSB7XG4gICAgaWYgKCFtZXRob2QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQ2xlYXIgYWxsIGtleXMgZnJvbSBhbGwgc3RvcmFnZSBsb2NhdGlvbnMgaWYgbm9uZVxuICAgIGlmIChtZXRob2QgPT09ICdub25lJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ0FDSEVfVE9fS0VZKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ09MT1JfU0NIRU1FX0tFWSk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgdHJ5IHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKENPTE9SX1NDSEVNRV9LRVkpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFNjaGVtZSA9IHRoaXMuY29sb3JTY2hlbWVTaWduYWwuZ2V0KCk7XG4gICAgLy8gU2V0IGNhY2hlIG1ldGhvZCBpbiBzdG9yYWdlIC0gVHJ5IGxvY2FsU3RvcmFnZSBmaXJzdFxuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQUNIRV9UT19LRVksIG1ldGhvZCk7XG4gICAgICBpZiAoY3VycmVudFNjaGVtZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDT0xPUl9TQ0hFTUVfS0VZLCBjdXJyZW50U2NoZW1lKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnTXRlVGhlbWVTZXJ2aWNlOiBDb3VsZCBub3Qgc2V0IGNvbG9yIHNjaGVtZSBjYWNoZSBtZXRob2QgdG8gYGxvY2FsU3RvcmFnZWAuIEF0dGVtcHRpbmcgZmFsbGJhY2sgdG8gYHNlc3Npb25TdG9yYWdlYC4gQ2FjaGluZyB3aWxsIG9ubHkgaGFwcGVuIHRvIHNlc3Npb25TdG9yYWdlLidcbiAgICAgICk7XG4gICAgICAvLyBUcnkgc2Vzc2lvblN0b3JhZ2UgbmV4dFxuICAgICAgdHJ5IHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShDQUNIRV9UT19LRVksICdzZXNzaW9uU3RvcmFnZScpO1xuICAgICAgICBpZiAoY3VycmVudFNjaGVtZSkge1xuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oQ09MT1JfU0NIRU1FX0tFWSwgY3VycmVudFNjaGVtZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnTXRlVGhlbWVTZXJ2aWNlOiBDb3VsZCBub3Qgc2V0IGNvbG9yIHNjaGVtZSBjYWNoZSBtZXRob2QgdG8gYGxvY2FsU3RvcmFnZWAgb3IgYHNlc3Npb25TdG9yYWdlYC4gQ2FjaGluZyBub3QgZW5hYmxlZC4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldHMgdGhlIGN1cnJlbnQgZ2xvYmFsIHRoZW1lIG9uIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBzZXRHbG9iYWxUaGVtZSh0aGVtZTogTXRlVGhlbWUpIHtcbiAgICBpZiAoIXRoZW1lIHx8IHR5cGVvZiB0aGVtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXRlVGhlbWVTZXJ2aWNlOiBHbG9iYWwgdGhlbWUgcGFyYW0gbXVzdCBiZSBhIHN0cmluZy4nKTtcbiAgICB9XG4gICAgdGhpcy5pbml0T2JzZXJ2ZXIoKTtcbiAgICBpZiAodGhlbWUgIT09ICdkZWZhdWx0Jykge1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uc2V0QXR0cmlidXRlKCdkYXRhLW10ZS10aGVtZScsIHRoZW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW10ZS10aGVtZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBjdXJyZW50IGdsb2JhbCBjb2xvci1zY2hlbWUgb24gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIHNldEdsb2JhbENvbG9yU2NoZW1lKGNvbG9yU2NoZW1lOiBNdGVDb2xvclNjaGVtZSkge1xuICAgIGlmICghY29sb3JTY2hlbWUgfHwgdHlwZW9mIGNvbG9yU2NoZW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdGVUaGVtZVNlcnZpY2U6IEdsb2JhbCBjb2xvclNjaGVtZSBwYXJhbSBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICAgIH1cbiAgICBjb25zdCBzY2hlbWUgPSBjb2xvclNjaGVtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzY2hlbWUgPT09ICdkYXJrJyB8fCBzY2hlbWUgPT09ICdsaWdodCcgfHwgc2NoZW1lID09PSAnc3lzdGVtJykge1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uc2V0QXR0cmlidXRlKCdkYXRhLW10ZS1jb2xvci1zY2hlbWUnLCBzY2hlbWUpO1xuICAgICAgdGhpcy5zZXRDYWNoZVZhbHVlKENPTE9SX1NDSEVNRV9LRVksIGNvbG9yU2NoZW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW10ZS1jb2xvci1zY2hlbWUnKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgY3VycmVudCBnbG9iYWwgdGhlbWUgZnJvbSB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgZ2V0R2xvYmFsVGhlbWUoKTogTXRlVGhlbWUgfCBudWxsIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1tdGUtdGhlbWUnKSBhcyBNdGVUaGVtZTtcbiAgICBpZiAoIVsnZGVmYXVsdCcsICdweExpZ2h0JywgJ2N4TGlnaHQnLCAncnhMaWdodCddLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZSBhcyBNdGVUaGVtZTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgY3VycmVudCBnbG9iYWwgY29sb3Itc2NoZW1lIGZyb20gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIGdldEdsb2JhbENvbG9yU2NoZW1lKCk6IE10ZUNvbG9yU2NoZW1lIHwgbnVsbCB7XG4gICAgY29uc3QgdmFsdWUgPSBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoXG4gICAgICAnZGF0YS1tdGUtY29sb3Itc2NoZW1lJ1xuICAgICkgYXMgTXRlQ29sb3JTY2hlbWU7XG4gICAgaWYgKCFbJ2xpZ2h0JywgJ2RhcmsnLCAnc3lzdGVtJ10uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlIGFzIE10ZUNvbG9yU2NoZW1lO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIGEgcmVhY3RpdmUgc2lnbmFsIHRoYXQgd2lsbCB1cGRhdGUgYW55IHRpbWUgdGhlIGdsb2JhbCB0aGVtZSBjaGFuZ2VzICovXG4gIHB1YmxpYyBzZWxlY3RHbG9iYWxUaGVtZSgpIHtcbiAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgIHJldHVybiB0aGlzLnRoZW1lU2lnbmFsO1xuICB9XG5cbiAgLyoqIFJldHVybnMgYSByZWFjdGl2ZSBzaWduYWwgdGhhdCB3aWxsIHVwZGF0ZSBhbnkgdGltZSB0aGUgZ2xvYmFsIGNvbG9yLXNjaGVtZSBjaGFuZ2VzICovXG4gIHB1YmxpYyBzZWxlY3RHbG9iYWxDb2xvclNjaGVtZSgpIHtcbiAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgIHJldHVybiB0aGlzLmNvbG9yU2NoZW1lU2lnbmFsO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIHZhbHVlIG9mIGFsbCBvZiB0aGUgZ2l2ZW4gdGhlbWUgdmFyaWFibGVzIG9uIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBzZXQoXG4gICAgY29uZmlnRm5Pck9iajpcbiAgICAgIHwgU3Vic2V0PE1vcnRhclRoZW1lQ29uZmlnPlxuICAgICAgfCAoKGNvbmZpZzogTW9ydGFyVGhlbWVDb25maWcpID0+IFN1YnNldDxNb3J0YXJUaGVtZUNvbmZpZz4pXG4gICkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnRm5Pck9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uZmlnRm5Pck9iaiA9IGNvbmZpZ0ZuT3JPYmoodGhpcy5jb25maWcpO1xuICAgIH1cbiAgICBjb25zdCBtYXBwaW5ncyA9IHRoaXMuZmxhdHRlblBhdGhzKGNvbmZpZ0ZuT3JPYmopO1xuICAgIG1hcHBpbmdzLmZvckVhY2goKFtwYXRoLCB2YWxdKSA9PiB7XG4gICAgICBjb25zdCBjc3NWYXIgPSBwYXRoLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiB7XG4gICAgICAgIHJldHVybiBhY2NbcHJvcF07XG4gICAgICB9LCBzZXR0ZXJDb25maWcpO1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uc3R5bGUuc2V0UHJvcGVydHkoY3NzVmFyLCBgJHt2YWx9YCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgdGhlIHJlcXVlc3RlZCB0aGVtZSB2YXJpYWJsZSBmcm9tIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBnZXQ8VD4oazE6ICh0aGVtZUNvbmZpZzogTW9ydGFyVGhlbWVDb25maWcpID0+IFQpOiBUO1xuICBwdWJsaWMgZ2V0PEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWc+KGsxOiBLMSk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLCBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXT4oXG4gICAgazE6IEsxLFxuICAgIGsyOiBLMlxuICApOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMyk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11cbiAgPihrMTogSzEsIGsyOiBLMiwgazM6IEszLCBrNDogSzQpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl0sXG4gICAgSzQgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXSxcbiAgICBLNSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVxuICA+KGsxOiBLMSwgazI6IEsyLCBrMzogSzMsIGs0OiBLNCwgazU6IEs1KTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdW0s1XTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXSxcbiAgICBLNCBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdLFxuICAgIEs1IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdLFxuICAgIEs2IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdW0s1XVxuICA+KGsxOiBLMSwgazI6IEsyLCBrMzogSzMsIGs0OiBLNCwgazU6IEs1LCBrNjogSzYpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdW0s2XTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXSxcbiAgICBLNCBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdLFxuICAgIEs1IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdLFxuICAgIEs2IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdW0s1XVxuICA+KFxuICAgIC4uLmtleXM6XG4gICAgICB8IFtLMV1cbiAgICAgIHwgW0sxLCBLMl1cbiAgICAgIHwgW0sxLCBLMiwgSzNdXG4gICAgICB8IFtLMSwgSzIsIEszLCBLNF1cbiAgICAgIHwgW0sxLCBLMiwgSzMsIEs0LCBLNV1cbiAgICAgIHwgW0sxLCBLMiwgSzMsIEs0LCBLNSwgSzZdXG4gICk6IGFueSB7XG4gICAgY29uc3QgW2ZuXSA9IGtleXMgPz8gW251bGxdO1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGNzc1ZhciA9IChmbiBhcyBhbnkpKHNldHRlckNvbmZpZyk7XG4gICAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShnbG9iYWxUaGlzPy5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoY3NzVmFyKTtcbiAgICB9XG4gICAgY29uc3QgY3NzVmFyID0ga2V5cy5yZWR1Y2UoKGFjYzogYW55LCBrZXkpID0+IGFjY1trZXldLCBzZXR0ZXJDb25maWcgYXMgYW55KSBhcyBzdHJpbmc7XG4gICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZ2xvYmFsVGhpcz8uZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Zhcik7XG4gIH1cblxuICAvKiogRmxhdHRlbnMgYSBnaXZlbiBvYmplY3QgdG8gYW4gYXJyYXkgb2YgcGF0aCBrZXlzIGFuZCBpdHMgcmVzdWx0aW5nIHZhbHVlICovXG4gIHByaXZhdGUgZmxhdHRlblBhdGhzKG9iajogUmVjb3JkPHN0cmluZywgYW55PiwgcGF0aDogc3RyaW5nW10gPSBbXSk6IFtzdHJpbmdbXSwgYW55XVtdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICBjb25zdCBuZXN0ZWQgPSBvYmpba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgbmVzdGVkID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwYXRoLnB1c2goa2V5KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihhY2MsIHRoaXMuZmxhdHRlblBhdGhzKG5lc3RlZCwgcGF0aCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aC5wdXNoKGtleSk7XG4gICAgICAgIGFjYy5wdXNoKFtwYXRoLCBuZXN0ZWRdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNdXRhdGlvbkV2ZW50ID0gKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcbiAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkge1xuICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZScpIHtcbiAgICAgICAgICB0aGlzLmNvbG9yU2NoZW1lU2lnbmFsLnNldCh0aGlzLmdldEdsb2JhbENvbG9yU2NoZW1lKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkYXRhLW10ZS10aGVtZScpIHtcbiAgICAgICAgICB0aGlzLnRoZW1lU2lnbmFsLnNldCh0aGlzLmdldEdsb2JhbFRoZW1lKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgaW5pdENhY2hlKCkge1xuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgdGhpcy5pbml0T2JzZXJ2ZXIoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNhY2hlQ29sb3JTY2hlbWUgPSB0aGlzLmdldENhY2hlVmFsdWUoQ09MT1JfU0NIRU1FX0tFWSk7XG4gICAgICAgIGlmIChjYWNoZUNvbG9yU2NoZW1lICYmIGNhY2hlQ29sb3JTY2hlbWUgIT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5zZXRHbG9iYWxDb2xvclNjaGVtZShjYWNoZUNvbG9yU2NoZW1lIGFzIE10ZUNvbG9yU2NoZW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXRPYnNlcnZlcigpIHtcbiAgICBpZiAoIWlzU3NyKCkgJiYgIXRoaXMucm9vdE9ic2VydmVyKSB7XG4gICAgICB0aGlzLnJvb3RPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuaGFuZGxlTXV0YXRpb25FdmVudCk7XG4gICAgICB0aGlzLnJvb3RPYnNlcnZlci5vYnNlcnZlKGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbJ2RhdGEtbXRlLXRoZW1lJywgJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZSddLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYWNoZU1ldGhvZCgpOiAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZScgfCBudWxsIHtcbiAgICAvLyBSZXRyaWV2ZSBjYWNoZSBtZXRob2RcbiAgICBsZXQgY2FjaGVNZXRob2Q6ICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJyB8IG51bGwgPSBudWxsO1xuICAgIC8vIFRyeSBsb2NhbFN0b3JhZ2VcbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ0FDSEVfVE9fS0VZKTtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgY2FjaGVNZXRob2QgPSB2YWwgYXMgJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRyeSBzZXNzaW9uU3RvcmFnZVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdmFsID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgY2FjaGVNZXRob2QgPSB2YWwgYXMgJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICByZXR1cm4gY2FjaGVNZXRob2Q7XG4gIH1cblxuICBwcml2YXRlIHNldENhY2hlVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjYWNoZU1ldGhvZCA9IHRoaXMuZ2V0Q2FjaGVNZXRob2QoKTtcbiAgICB0cnkge1xuICAgICAgaWYgKGNhY2hlTWV0aG9kID09PSAnbG9jYWxTdG9yYWdlJykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoY2FjaGVNZXRob2QgPT09ICdzZXNzaW9uU3RvcmFnZScpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYWNoZVZhbHVlKGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2FjaGVNZXRob2QgPSB0aGlzLmdldENhY2hlTWV0aG9kKCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChjYWNoZU1ldGhvZCA9PT0gJ2xvY2FsU3RvcmFnZScpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICB9IGVsc2UgaWYgKGNhY2hlTWV0aG9kID09PSAnc2Vzc2lvblN0b3JhZ2UnKSB7XG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlVGhlbWVTZXJ2aWNlID0gbmV3IF9NdGVUaGVtZVNlcnZpY2UoKTtcbiIsICJpbXBvcnQgeyBpc1NzciwgaXNQbGF0Zm9ybSB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCB0eXBlIFBvcnRhbFN0YWNrID0gJ292ZXJsYXknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRhbGVkRWxlbWVudE1ldGFkYXRhIHtcbiAgZWxlbWVudDogRWxlbWVudDtcbiAgc3RhY2s6IFBvcnRhbFN0YWNrO1xuICBjaGlsZFBvcnRhbGVkRWxlbWVudHM6IFNldDxFbGVtZW50PjtcbiAgcGFyZW50UG9ydGFsZWRFbGVtZW50PzogRWxlbWVudDtcbiAgYmFja2Ryb3A/OiBFbGVtZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRQb3J0YWxDb250cm9sbGVyIHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFyZW50UG9ydGFsZWRFbGVtZW50OiBFbGVtZW50O1xuICBvcHRpb25zOiB7IHN0YWNrOiBQb3J0YWxTdGFjayB9O1xufVxuXG5leHBvcnQgdHlwZSBQb3J0YWxBZGFwdGVyPFQgPSBhbnk+ID0gKFxuICBwb3J0YWxFbGVtZW50OiBULFxuICBvdXRsZXRFbGVtZW50OiBFbGVtZW50XG4pID0+IFByb21pc2U8YW55PiB8IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0YWxPcHRpb25zIHtcbiAgLyoqIFJlbmRlcnMgdGhlIGJhY2tkcm9wIGRpbW1lZCAqL1xuICB3aXRoRGltQmFja2Ryb3A/OiBib29sZWFuO1xuXG4gIC8qKiBNYWtlcyB0aGUgYmFja2Ryb3AgaWdub3JlIHBvaW50ZXIgZXZlbnRzLiBVc2VmdWwgZm9yIHRyaWdnZXJPbiBcImhvdmVyXCIuICovXG4gIHdpdGhJbmVydEJhY2tkcm9wPzogYm9vbGVhbjtcblxuICAvKiogRGlzYWJsZXMgdGhlIGFiaWxpdHkgdG8gc2Nyb2xsIHRoZSBwYWdlIGJlaGluZCB0aGUgb3ZlcmxheSB3aGVuIHRydWUgKi9cbiAgd2l0aFNjcm9sbExvY2s/OiBib29sZWFuO1xuXG4gIC8qKiBDYWxsYmFjayBmb3IgaGFuZGxpbmcgY2xvc2VPbkNsaWNrT3V0c2lkZSBldmVudHMgd2hlbiB0aGUgcG9ydGFsJ3MgYmFja2Ryb3AgaXMgY2xpY2tlZCAqL1xuICBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcj86ICgpID0+IGFueTtcblxuICAvKiogVGhlIGFuaW1hdGlvbiBkdXJhdGlvbiBmb3IgZmFkaW5nIGEgc2hhZG93IGJhY2tkcm9wIGluL291dCAqL1xuICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbj86IHN0cmluZztcblxuICAvKiogQWRhcHRlciBmb3IgXCJwb3J0YWxpbmdcIiBhbiBlbGVtZW50IGZyb20gb25lIGxvY2F0aW9uIGluIHRoZSBET00gdG8gYW5vdGhlci4gTGV2ZXJhZ2VkIGJ5IGZyYW1ld29yayB3cmFwcGVycyBmb3IgaW1wcm92ZWQgaW50ZXJvcC4gKi9cbiAgcG9ydGFsQWRhcHRlcj86IFBvcnRhbEFkYXB0ZXI7XG59XG5cbi8qKiBEZWZhdWx0IG5hdGl2ZSBET00gYWRhcHRlciBmb3IgcG9ydGFsaW5nIGFuIGVsZW1lbnQgdG8gYW5vdGhlciB0YXJnZXQgZWxlbWVudCAqL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRQb3J0YWxBZGFwdGVyOiBQb3J0YWxBZGFwdGVyID0gKHBvcnRhbEVsZW0sIG91dGxldEVsZW0pID0+IHtcbiAgb3V0bGV0RWxlbT8uYXBwZW5kQ2hpbGQocG9ydGFsRWxlbSk7XG59O1xuXG5jbGFzcyBfTXRlUG9ydGFsU2VydmljZSB7XG4gIC8qKiBTaGFyZWQgZ2xvYmFsIGNvbnN0IGZvciBzdGFjayBlbGVtZW50IHJlZnMgKi9cbiAgcHJpdmF0ZSBzdGFja0VsZW1lbnRzOiB7IG92ZXJsYXk6IEVsZW1lbnQgfSA9IHtcbiAgICBvdmVybGF5OiB1bmRlZmluZWQsXG4gIH07XG5cbiAgLyoqIFNoYXJlZCBnbG9iYWwgY29uc3QgZm9yIHBvcnRhbGVkIGVsZW1lbnRzIG1ldGFkYXRhICovXG4gIHByaXZhdGUgcG9ydGFsZWRFbGVtZW50cyA9IG5ldyBNYXA8bnVtYmVyLCBNYXA8RWxlbWVudCwgUG9ydGFsZWRFbGVtZW50TWV0YWRhdGE+PigpO1xuXG4gIHByaXZhdGUgYWN0aXZlU2Nyb2xsTG9ja3MgPSBuZXcgU2V0PEVsZW1lbnQ+KCk7XG5cbiAgcHJpdmF0ZSBzdGFja011dGF0aW9uT2JzZXJ2ZXI/OiBNdXRhdGlvbk9ic2VydmVyO1xuXG4gIC8qKlxuICAgKiBXaGVuIGNhbGxlZCwgdGhpcyBzZXJ2aWNlIHdpbGwgYXR0ZW1wdCB0byBsb2NhdGUgdGhlIGBAYW5ndWxhci9jZGtgIG92ZXJsYXkgc3RhY2suXG4gICAqIElmIGZvdW5kIHRoaXMgc2VydmljZSB3aWxsIGJlIGNvbmZpZ3VyZWQgdG8gdXNlIHRoYXQgZWxlbWVudCBhcyB0aGUgYG92ZXJsYXlgIHN0YWNrIGluc3RlYWQgb2YgaW5pdGlhbGl6aW5nIGl0cyBvd24uXG4gICAqL1xuICBwdWJsaWMgY29uZmlndXJlQ2RrSW50ZXJvcCgpIHtcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIGNvbnN0IGNka1N0YWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNkay1vdmVybGF5LWNvbnRhaW5lcicpO1xuICAgICAgaWYgKGNka1N0YWNrKSB7XG4gICAgICAgIHRoaXMuc3RhY2tFbGVtZW50cy5vdmVybGF5ID0gY2RrU3RhY2s7XG4gICAgICAgIHRoaXMuc3RhY2tFbGVtZW50cy5vdmVybGF5LmNsYXNzTGlzdC5hZGQodGhpcy5pZEZhY3RvcnkoJ292ZXJsYXknKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIHBvcnRhbCBjb250cm9sbGVyLiBBbGwgaXRlbXMgaXQgcmVxdWVzdGVkIHRvIGJlIHBvcnRhbGVkIHdpbGwgYmUgdHJhY2sgYWdhaW5zdCBpdC5cbiAgICogV2hlbiB0aGUgcG9ydGFsIGlzIHJlbW92ZWQgd2UgY2FuIHRoZW4gcmVtb3ZlIGFueSBlbGVtZW50cyBpdCBjdXJyZW50bHkgaGFzIHBvcnRhbGVkIGFuZFxuICAgKiBhbnkgb2YgdGhlaXIgcG9ydGFsZWQgY2hpbGRyZW4uXG4gICAqL1xuICBwdWJsaWMgYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlcikge1xuICAgIGlmICghdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmhhcyhwb3J0YWxDb250cm9sbGVyPy5pZCkpIHtcbiAgICAgIC8vIFRyYWNrIGluIHNldCBieSBJRCBzbyB3ZSBkb24ndCBrZWVwIGEgbGl2ZSByZWZlcmVuY2UgdG8gdGhlIGNvbnRyb2xsZXIgaXRzZWxmXG4gICAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuc2V0KHBvcnRhbENvbnRyb2xsZXIuaWQsIG5ldyBNYXA8RWxlbWVudCwgUG9ydGFsZWRFbGVtZW50TWV0YWRhdGE+KCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGFsbCBvZiBhIHBvcnRhbCBjb250cm9sbGVycyBwb3J0YWxlZCBlbGVtZW50cyBhbmQgdGhlaXIgcmVmZXJlbmNlcyAqL1xuICBwdWJsaWMgcmVtb3ZlQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlcikge1xuICAgIC8vIEF0dGVtcHQgdG8gcmVtb3ZlIGFsbCBpdGVtcyBhdHRhY2hlZCBieSB0aGlzIGNvbnRyb2xsZXIgZnJvbSB0aGUgY29uZmlndXJlZCBzdGFja1xuICAgIGNvbnN0IGF0dGFjaGVkRWxlbWVudHMgPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpO1xuICAgIGlmIChhdHRhY2hlZEVsZW1lbnRzKSB7XG4gICAgICBhdHRhY2hlZEVsZW1lbnRzLmZvckVhY2goKGl0ZW0pID0+IHRoaXMucmVtb3ZlRnJvbVN0YWNrKHBvcnRhbENvbnRyb2xsZXIsIGl0ZW0uZWxlbWVudCkpO1xuICAgIH1cbiAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZGVsZXRlKHBvcnRhbENvbnRyb2xsZXIuaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgYSByZWYgdG8gdGhlIGNvbmZpZ3VyZWQgc3RhY2sgZXhpc3RzLiBJZiBpdCBkb2VzIG5vdCwgdGhlIGNvbmZpZ3VyZWQgc3RhY2sgd2lsbFxuICAgKiBiZSBjcmVhdGVkIGFuZCBhcHBlbmRlZCB0byB0aGUgZG9jdW1lbnQuIERvZXMgbm90aGluZyBkdXJpbmcgU1NSLlxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVTdGFjayhzdGFjazogUG9ydGFsU3RhY2spIHtcbiAgICBpZiAoc3RhY2sgIT09ICdvdmVybGF5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE92ZXJsYXkgU3RhY2s6IFwiJHtzdGFja31cIiBtdXN0IGJlICdvdmVybGF5JyBhdCB0aGlzIHRpbWUuYCk7XG4gICAgfVxuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgaWYgKCF0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdKSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkRmFjdG9yeShzdGFjaykpO1xuICAgICAgICB0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdID1cbiAgICAgICAgICBlbGVtID8/XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmlkRmFjdG9yeShzdGFjayksXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXSAmJiAhdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXS5pc0Nvbm5lY3RlZCkge1xuICAgICAgICB0aGlzLmFwcGVuZFN0YWNrVG9Eb20odGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXSk7XG5cbiAgICAgICAgLy8gSW5pdCBtdXRhdGlvbiBvYnNlcnZlclxuICAgICAgICAvLyBUaGlzIHdpbGwgd2F0Y2ggZm9yIGFueXRpbWUgdGhlIHN0YWNrIGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NIGZvciBzb21lIHJlYXNvblxuICAgICAgICAvLyBJZiBpdCBpcywgaXQgd2lsbCByZS1hdHRhY2ggaXQgdG8gdGhlIERPTSBhZnRlciB0aGUgbmV4dCB0aWNrXG4gICAgICAgIGlmICghdGhpcy5zdGFja011dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICB0aGlzLnN0YWNrTXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtbCwgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbWwpIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCByZW1vdmVkTm9kZSBvZiBtdXRhdGlvbi5yZW1vdmVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZE5vZGUgPT09IHRoaXMuc3RhY2tFbGVtZW50cy5vdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUFsbEl0ZW1zRnJvbVN0YWNrcygpO1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kU3RhY2tUb0RvbSh0aGlzLnN0YWNrRWxlbWVudHMub3ZlcmxheSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXT8ucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuc3RhY2tNdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXS5wYXJlbnROb2RlLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1YnRyZWU6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhcHBlbmRTdGFja1RvRG9tKHN0YWNrRWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmIChzdGFja0VsZW1lbnQgJiYgIXN0YWNrRWxlbWVudC5pc0Nvbm5lY3RlZCkge1xuICAgICAgY29uc3QgdG9hc3RDb250YWluZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ210ZS10b2FzdC1jb250YWluZXInKTtcbiAgICAgIGlmICh0b2FzdENvbnRhaW5lcikge1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShzdGFja0VsZW1lbnQsIHRvYXN0Q29udGFpbmVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHN0YWNrRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIEFwcGVuZHMgYW4gaXRlbSB0byB0aGUgY29uZmlndXJlZCBwb3J0YWwgc3RhY2sgKi9cbiAgcHVibGljIGFwcGVuZFRvU3RhY2soXG4gICAgcG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsXG4gICAgZWxlbWVudDogRWxlbWVudCxcbiAgICB7XG4gICAgICB3aXRoRGltQmFja2Ryb3AgPSBmYWxzZSxcbiAgICAgIHdpdGhJbmVydEJhY2tkcm9wID0gZmFsc2UsXG4gICAgICB3aXRoU2Nyb2xsTG9jayA9IGZhbHNlLFxuICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcixcbiAgICAgIHBvcnRhbEFkYXB0ZXIgPSBkZWZhdWx0UG9ydGFsQWRhcHRlcixcbiAgICB9OiBQb3J0YWxPcHRpb25zID0ge31cbiAgKSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50UG9ydGFsZWRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRQb3J0YWxlZEVsZW1lbnQocG9ydGFsQ29udHJvbGxlciwgZWxlbWVudCk7XG4gICAgICBjb25zdCBzdGFja05hbWUgPSBwb3J0YWxDb250cm9sbGVyLm9wdGlvbnMuc3RhY2s7XG4gICAgICBjb25zdCBzdGFjayA9IHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja05hbWVdO1xuICAgICAgY29uc3QgYXR0YWNoZWRFbGVtZW50cyA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCk7XG5cbiAgICAgIGNvbnN0IGJhY2tkcm9wID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgICBjbGFzc05hbWU6ICdtdGUtcG9ydGFsX19iYWNrZHJvcCcsXG4gICAgICAgIC4uLihiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvblxuICAgICAgICAgID8geyBzdHlsZTogYHRyYW5zaXRpb24tZHVyYXRpb246ICR7YmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb259O2AgfVxuICAgICAgICAgIDoge30pLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIEhhbmRsZSBiYWNrZHJvcCBzdHlsaW5nXG4gICAgICBpZiAod2l0aEluZXJ0QmFja2Ryb3ApIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLWluZXJ0Jyk7XG4gICAgICB9XG4gICAgICBpZiAod2l0aERpbUJhY2tkcm9wKSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1zaGFkb3cnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS10cmFuc3BhcmVudCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBBcHBlbmQgYmFja2Ryb3BcbiAgICAgIHN0YWNrPy5hcHBlbmRDaGlsZChiYWNrZHJvcCk7XG5cbiAgICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgICAvLyBBZGQgbGlzdGVuZXIgaWYgY2xpY2sgaGFuZGxlciBpcyBwcmVzZW50XG4gICAgICAgIGlmIChjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcikge1xuICAgICAgICAgIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyKTtcbiAgICAgICAgICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGJhY2tkcm9wIHNob3VsZCBiZSBkaW0sIGFuaW1hdGUgaXQgYWZ0ZXIgaXQgaGFzIGJlZW4gYXBwZW5kZWQgdG8gdGhlIGRvbVxuICAgICAgICBpZiAod2l0aERpbUJhY2tkcm9wKSB7XG4gICAgICAgICAgZ2xvYmFsVGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXNob3cnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBseSBzY3JvbGwgbG9ja1xuICAgICAgICBpZiAod2l0aFNjcm9sbExvY2spIHtcbiAgICAgICAgICB0aGlzLmFwcGx5U2Nyb2xsTG9jayhlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBXYWl0IGZvciBSZWFjdCAob3Igb3RoZXIgZnV0dXJlIGZyYW1ld29yayBhZGFwdGVyKSB0byBhcHBlbmQgZWxlbWVudCB0byBuZXdcbiAgICAgIC8vIGxvY2F0aW9uIGluIHRoZSBET00gYmVmb3JlIGFkZGluZyB0byBzdGFjay4gRG9pbmcgc28gdHJpZ2dlcnMgYGhvc3REaXNjb25uZWN0ZWRgXG4gICAgICAvLyB3aGljaCB3b3VsZCBpbnN0YW50bHkgcmVtb3ZlIHRoZSBlbGVtZW50IGlmIG5vdCBmb3IgdGhpcyBleHRyYSB0aW1lb3V0IHRvIHdhaXQgYSB0aWNrXG4gICAgICBQcm9taXNlLnJlc29sdmUocG9ydGFsQWRhcHRlcihlbGVtZW50LCBzdGFjaykpLnRoZW4oKCkgPT4ge1xuICAgICAgICBhdHRhY2hlZEVsZW1lbnRzLnNldChlbGVtZW50LCB7XG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICBzdGFjazogc3RhY2tOYW1lLFxuICAgICAgICAgIGJhY2tkcm9wLFxuICAgICAgICAgIGNoaWxkUG9ydGFsZWRFbGVtZW50czogbmV3IFNldDxFbGVtZW50PigpLFxuICAgICAgICAgIHBhcmVudFBvcnRhbGVkRWxlbWVudCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGFuIGVsZW1lbnQgZnJvbSB0aGUgc3RhY2sgKi9cbiAgcHVibGljIHJlbW92ZUZyb21TdGFjayhwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgZWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmICh0aGlzLnBvcnRhbGVkRWxlbWVudHMuaGFzKHBvcnRhbENvbnRyb2xsZXIuaWQpKSB7XG4gICAgICBjb25zdCBhdHRhY2hlZEVsZW1lbnRzID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKTtcbiAgICAgIGlmIChhdHRhY2hlZEVsZW1lbnRzKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRNZXRhZGF0YSA9IGF0dGFjaGVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBpZiAoZWxlbWVudE1ldGFkYXRhKSB7XG4gICAgICAgICAgYXR0YWNoZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgdGhpcy5maW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTYWZlbHkgcmVtb3ZlcyBhbGwgaXRlbXMgZnJvbSBhbGwgc3RhY2tzXG4gIHByaXZhdGUgcmVtb3ZlQWxsSXRlbXNGcm9tU3RhY2tzKCkge1xuICAgIGZvciAobGV0IFtpZCwgY29udHJvbGxlck1hcF0gb2YgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmVudHJpZXMoKSkge1xuICAgICAgZm9yIChsZXQgW2VsZW1lbnQsIGVsZW1lbnRNZXRhZGF0YV0gb2YgY29udHJvbGxlck1hcC5lbnRyaWVzKCkpIHtcbiAgICAgICAgaWYgKGVsZW1lbnRNZXRhZGF0YSkge1xuICAgICAgICAgIHRoaXMuZmluYWxpemVTdGFja1JlbW92ZShlbGVtZW50TWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIE1ha2VzIGEgYmFja2Ryb3AgYXNzb2NpYXRlZCB3aXRoIGEgcG9ydGFsZWQgZWxlbWVudCB2aXNpYmxlIGlmIGl0IGV4aXN0cyAqL1xuICBwdWJsaWMgc2hvd0JhY2tkcm9wKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIGNvbnN0IHsgYmFja2Ryb3AgfSA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuICAgIGJhY2tkcm9wPy5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0tc2hvdycpO1xuICB9XG5cbiAgLyoqIEhpZGVzIGEgYmFja2Ryb3AgYXNzb2NpYXRlZCB3aXRoIGEgcG9ydGFsZWQgZWxlbWVudCBpZiBpdCBleGlzdHMgKi9cbiAgcHVibGljIGhpZGVCYWNrZHJvcChwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyKTtcbiAgICBjb25zdCB7IGJhY2tkcm9wIH0gPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpLmdldChlbGVtZW50KSA/PyB7fTtcbiAgICBiYWNrZHJvcD8uY2xhc3NMaXN0LnJlbW92ZSgnYmFja2Ryb3AtLXNob3cnKTtcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIHRoZSBpbnRlcnRuZXNzIGEgYmFja2Ryb3AgaWYgaXQgZXhpc3RzICh3aGV0aGVyIG9yIG5vdCB0aGUgdXNlciBjYW4gY2xpY2sgdGhyb3VnaCBpdCkgKi9cbiAgcHVibGljIHNldEJhY2tkcm9wSW5lcnRuZXNzKFxuICAgIHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLFxuICAgIGVsZW1lbnQ6IEVsZW1lbnQsXG4gICAgaW5lcnQ6IGJvb2xlYW4gPSB0cnVlXG4gICkge1xuICAgIHRoaXMuYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyKTtcbiAgICBjb25zdCB7IGJhY2tkcm9wIH0gPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpLmdldChlbGVtZW50KSA/PyB7fTtcbiAgICBpZiAoaW5lcnQpIHtcbiAgICAgIGJhY2tkcm9wPy5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0taW5lcnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tkcm9wLS1pbmVydCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBpZCBmb3IgdGhlIGNvbmZpZ3VyZWQgc3RhY2sgZWxlbWVudCAqL1xuICBwcml2YXRlIGlkRmFjdG9yeSA9IChzdGFjazogUG9ydGFsU3RhY2spID0+IGBtdGUtcG9ydGFsX18ke3N0YWNrfS1zdGFja2A7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhbiBlbGVtZW50IGlzIGJlaW5nIHBvcnRhbGVkIGZyb20gd2l0aGluIGFub3RoZXIgcG9ydGFsZWRcbiAgICogZWxlbWVudCBhbmQgcmV0dXJucyB0aGF0IHBhcmVudCBpZiBpdCBpc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRQYXJlbnRQb3J0YWxlZEVsZW1lbnQocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAocG9ydGFsQ29udHJvbGxlci5wYXJlbnRQb3J0YWxlZEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBwb3J0YWxDb250cm9sbGVyLnBhcmVudFBvcnRhbGVkRWxlbWVudDtcbiAgICB9XG4gICAgbGV0IHBhcmVudFBvcnRhbGVkRWxlbWVudDogRWxlbWVudDtcbiAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZm9yRWFjaCgocG9ydGFsQ29udHJvbGxlcikgPT5cbiAgICAgIHBvcnRhbENvbnRyb2xsZXIuZm9yRWFjaCgocG9ydGFsZWRFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChwb3J0YWxlZEVsZW1lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgIHBvcnRhbGVkRWxlbWVudC5jaGlsZFBvcnRhbGVkRWxlbWVudHMuYWRkKGVsZW1lbnQpO1xuICAgICAgICAgIHBhcmVudFBvcnRhbGVkRWxlbWVudCA9IHBvcnRhbGVkRWxlbWVudC5lbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgLy8gQ2FjaGUgdGhlIHBhcmVudFBvcnRhbGVkRWxlbWVudCBpZiBmb3VuZCBvbiB0aGUgY29udHJvbGxlciBzbyB3ZSBjYW4gcmVmZXJlbmNlXG4gICAgLy8gaXQgd2hlbiBvcGVuZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBET01cbiAgICBpZiAocGFyZW50UG9ydGFsZWRFbGVtZW50KSB7XG4gICAgICBwb3J0YWxDb250cm9sbGVyLnBhcmVudFBvcnRhbGVkRWxlbWVudCA9IHBhcmVudFBvcnRhbGVkRWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudFBvcnRhbGVkRWxlbWVudDtcbiAgfVxuXG4gIC8qKiBFbnN1cmVzIGFuIGVsZW1lbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBzdGFjayBubyBtYXR0ZXIgd2hpY2ggY29udHJvbGxlciBoYXMgcG9ydGFsZWQgaXQgKi9cbiAgcHJpdmF0ZSByZW1vdmVGcm9tU3RhY2tHbG9iYWxseShlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmZvckVhY2goKHBvcnRhbENvbnRyb2xsZXIpID0+IHtcbiAgICAgIGlmIChwb3J0YWxDb250cm9sbGVyLmhhcyhlbGVtZW50KSkge1xuICAgICAgICBjb25zdCBlbGVtZW50TWV0YWRhdGEgPSBwb3J0YWxDb250cm9sbGVyLmdldChlbGVtZW50KTtcbiAgICAgICAgcG9ydGFsQ29udHJvbGxlci5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIHRoaXMuZmluYWxpemVTdGFja1JlbW92ZShlbGVtZW50TWV0YWRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEZpbmFsaXplcyB0aGUgcmVtb3ZlIG9mIGFuIGVsZW1lbnQgZnJvbSBhIHBvcnRhbCBzdGFjayAqL1xuICBwcml2YXRlIGZpbmFsaXplU3RhY2tSZW1vdmUoZWxlbWVudE1ldGFkYXRhOiBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YSkge1xuICAgIGlmIChlbGVtZW50TWV0YWRhdGEpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgc3RhY2s6IHN0YWNrTmFtZSxcbiAgICAgICAgYmFja2Ryb3AsXG4gICAgICAgIGNoaWxkUG9ydGFsZWRFbGVtZW50cyxcbiAgICAgICAgcGFyZW50UG9ydGFsZWRFbGVtZW50LFxuICAgICAgfSA9IGVsZW1lbnRNZXRhZGF0YTtcbiAgICAgIGNvbnN0IHN0YWNrID0gdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrTmFtZV07XG5cbiAgICAgIC8vIFJlbW92ZSBhbnkgc2Nyb2xsTG9ja3NcbiAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsTG9jayhlbGVtZW50KTtcblxuICAgICAgLy8gRW5zdXJlcyBhbiBlbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSBhbnkgcGFyZW50IHBvcnRhbGVkIGVsZW1lbnRzIGNoaWxkcmVuIGxpc3RzXG4gICAgICBpZiAocGFyZW50UG9ydGFsZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChwb3J0YWxDb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgaWYgKHBvcnRhbENvbnRyb2xsZXIuaGFzKHBhcmVudFBvcnRhbGVkRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHBvcnRhbENvbnRyb2xsZXIuZ2V0KHBhcmVudFBvcnRhbGVkRWxlbWVudCkuY2hpbGRQb3J0YWxlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBFbnN1cmVzIGFueSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQgYXJlIHJlbW92ZWQgYmVmb3JlIHRoaXMgZWxlbWVudCBpc1xuICAgICAgaWYgKGNoaWxkUG9ydGFsZWRFbGVtZW50cy5zaXplID4gMCkge1xuICAgICAgICBjaGlsZFBvcnRhbGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gdGhpcy5yZW1vdmVGcm9tU3RhY2tHbG9iYWxseShlbGVtZW50KSk7XG4gICAgICB9XG4gICAgICAvLyBSZW1vdmVzIHRoaXMgZWxlbWVudHMgYmFja2Ryb3AgZnJvbSB0aGUgcG9ydGFsIHN0YWNrXG4gICAgICBpZiAoYmFja2Ryb3AgJiYgYmFja2Ryb3AucGFyZW50RWxlbWVudCA9PT0gc3RhY2spIHtcbiAgICAgICAgc3RhY2s/LnJlbW92ZUNoaWxkKGJhY2tkcm9wKTtcbiAgICAgIH1cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgYSByZWFjdCB3cmFwcGVkIHBvcnRhbGVkIGVsZW1lbnRcbiAgICAgIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQ/Lmhhc0F0dHJpYnV0ZSgnZGF0YS1vdmVybGF5LXdyYXBwZXInKSkge1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgPT09IHN0YWNrKSB7XG4gICAgICAgICAgc3RhY2s/LnJlbW92ZUNoaWxkKGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50ID09PSBzdGFjaykge1xuICAgICAgICBzdGFjaz8ucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgYSBzY3JvbGwgbG9jayB0byB0aGUgYm9keSBlbGVtZW50IHRvIHByZXZlbnQgc2Nyb2xsaW5nIG9mIHBhZ2UgY29udGVudC5cbiAgICogQ2FsY3VsYXRlcyBhbnkgYm9keSBvZmZzZXRzIGR1ZSB0byB2aXNpYmxlIHNjcm9sbGJhcnMgYW5kIGR5bmFtaWNhbGx5IGFkanVzdHMgZm9yIHRoZW0uXG4gICAqL1xuICBwcml2YXRlIGFwcGx5U2Nyb2xsTG9jayhlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5hY3RpdmVTY3JvbGxMb2Nrcy5hZGQoZWxlbWVudCk7XG5cbiAgICBjb25zdCBpc0lPUyA9IGlzUGxhdGZvcm0oJ0lPUycpO1xuICAgIGNvbnN0IGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG4gICAgY29uc3Qgc2Nyb2xsYmFyWCA9XG4gICAgICBNYXRoLnJvdW5kKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSArXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICBjb25zdCBwYWRkaW5nUHJvcCA9IHNjcm9sbGJhclggPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBzY3JvbGxYID0gYm9keVN0eWxlLmxlZnQgPyBwYXJzZUZsb2F0KGJvZHlTdHlsZS5sZWZ0KSA6IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICBjb25zdCBzY3JvbGxZID0gYm9keVN0eWxlLnRvcCA/IHBhcnNlRmxvYXQoYm9keVN0eWxlLnRvcCkgOiB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cbiAgICBib2R5U3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ210ZS1zY3JvbGwtbG9jay0tYWN0aXZlJyk7XG5cbiAgICBpZiAoc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgIGJvZHlTdHlsZVtwYWRkaW5nUHJvcF0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGA7XG4gICAgfVxuXG4gICAgLy8gT25seSBpT1MgZG9lc24ndCByZXNwZWN0IGBvdmVyZmxvdzogaGlkZGVuYCBvbiBkb2N1bWVudC5ib2R5LCBhbmQgdGhpc1xuICAgIC8vIHRlY2huaXF1ZSBoYXMgZmV3ZXIgc2lkZSBlZmZlY3RzLlxuICAgIGlmIChpc0lPUykge1xuICAgICAgLy8gaU9TIDEyIGRvZXMgbm90IHN1cHBvcnQgYHZpc3VhbFZpZXdwb3J0YC5cbiAgICAgIGNvbnN0IG9mZnNldExlZnQgPSBnbG9iYWxUaGlzLnZpc3VhbFZpZXdwb3J0Py5vZmZzZXRMZWZ0IHx8IDA7XG4gICAgICBjb25zdCBvZmZzZXRUb3AgPSBnbG9iYWxUaGlzLnZpc3VhbFZpZXdwb3J0Py5vZmZzZXRUb3AgfHwgMDtcblxuICAgICAgT2JqZWN0LmFzc2lnbihib2R5U3R5bGUsIHtcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIHRvcDogYCR7LShzY3JvbGxZIC0gTWF0aC5mbG9vcihvZmZzZXRUb3ApKX1weGAsXG4gICAgICAgIGxlZnQ6IGAkey0oc2Nyb2xsWCAtIE1hdGguZmxvb3Iob2Zmc2V0TGVmdCkpfXB4YCxcbiAgICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGFuIGFjdGl2ZSBzY3JvbGxMb2NrIGlmIHRoZXJlIGFyZSBubyByZW1haW5pbmcgZWxlbWVudHMgcG9ydGFsZWQgdGhhdCByZXF1ZXN0ZWQgaXQgKi9cbiAgcHJpdmF0ZSByZW1vdmVTY3JvbGxMb2NrKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFjdGl2ZVNjcm9sbExvY2tzLmRlbGV0ZShlbGVtZW50KTtcblxuICAgIGlmICh0aGlzLmFjdGl2ZVNjcm9sbExvY2tzLnNpemUgPT09IDApIHtcbiAgICAgIGNvbnN0IGlzSU9TID0gaXNQbGF0Zm9ybSgnSU9TJyk7XG4gICAgICBjb25zdCBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuICAgICAgY29uc3Qgc2Nyb2xsYmFyWCA9XG4gICAgICAgIE1hdGgucm91bmQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpICtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICBjb25zdCBwYWRkaW5nUHJvcCA9IHNjcm9sbGJhclggPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oYm9keVN0eWxlLCB7XG4gICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgW3BhZGRpbmdQcm9wXTogJycsXG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtdGUtc2Nyb2xsLWxvY2stLWFjdGl2ZScpO1xuXG4gICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5U3R5bGUsIHtcbiAgICAgICAgICBwb3NpdGlvbjogJycsXG4gICAgICAgICAgdG9wOiAnJyxcbiAgICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgICByaWdodDogJycsXG4gICAgICAgIH0pO1xuICAgICAgICBnbG9iYWxUaGlzLnNjcm9sbFRvKHNjcm9sbFgsIHNjcm9sbFkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlUG9ydGFsU2VydmljZSA9IG5ldyBfTXRlUG9ydGFsU2VydmljZSgpO1xuIiwgImltcG9ydCB7IHNpZ25hbCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmNsYXNzIF9NdGVIaXN0b3J5QXBpU2VydmljZSB7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjaGFuZ2VTaWduYWwgPSBzaWduYWwoKTtcbiAgcHJpdmF0ZSBwcmV2SHJlZjogc3RyaW5nO1xuXG4gIHB1YmxpYyBzdGF0ZUNoYW5nZXMoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlU2lnbmFsO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3J3YXJkQXBwbHkgPSAodGFyZ2V0LCB0aGlzQXJnLCBhcmdBcnJheSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IHRhcmdldC5hcHBseSh0aGlzQXJnLCBhcmdBcnJheSk7XG4gICAgLy8gT25seSBlbWl0IGEgc3RhdGUgY2hhbmdlIGlmIHRoZSBocmVmIGRpZmZlcnMgZnJvbSB0aGUgbGFzdCBlbWlzc2lvblxuICAgIGlmICh0aGlzLnByZXZIcmVmICE9PSB3aW5kb3cubG9jYXRpb24uaHJlZikge1xuICAgICAgdGhpcy5wcmV2SHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgdGhpcy5jaGFuZ2VTaWduYWwuc2V0KHRoaXMucHJldkhyZWYpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAvLyBMaXN0ZW4gZm9yIGJhY2sgZXZlbnRzIHdpdGggcG9wc3RhdGUgZXZlbnRcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VTaWduYWwuc2V0KHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBQYXRjaCBIaXN0b3J5IEFQSSBtZXRob2RzIHRvIGVuc3VyZSB3ZSBlbWl0IGFueXRpbWUgdGhlaXIgc3RhdGUgaXMgY2hhbmdlZFxuICAgICAgLy8gVGhpcyBpcyBuZWNjZXNhcnkgYmVjYWlzZSB0aGUgYHBvcHN0YXRlYCBldmVudCBpcyBub3QgcmVsaWFibHkgY2FsbGVkIGFjcm9zcyBicm93c2VycyB3aGVuZXZlciB0aGUgaGlzdG9yeSBBUEkgaXMgdXNlZFxuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjayA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5iYWNrLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQgPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkuZm9yd2FyZCwgeyBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHkgfSk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5nbyA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5nbywgeyBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHkgfSk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUsIHtcbiAgICAgICAgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVIaXN0b3J5QXBpU2VydmljZSA9IG5ldyBfTXRlSGlzdG9yeUFwaVNlcnZpY2UoKTtcbiIsICJpbXBvcnQgeyBpc1NzciB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCB0eXBlIE10ZURhdGVGb3JtYXRPcHRpb25zID0gSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnMgJiB7XG4gIGxhbmc/OiBzdHJpbmc7XG4gIGZvcm1hdD86XG4gICAgfCAnc2hvcnQnXG4gICAgfCAnbWVkaXVtJ1xuICAgIHwgJ2xvbmcnXG4gICAgfCAnZnVsbCdcbiAgICB8ICdzaG9ydERhdGUnXG4gICAgfCAnbWVkaXVtRGF0ZSdcbiAgICB8ICdsb25nRGF0ZSdcbiAgICB8ICdmdWxsRGF0ZSdcbiAgICB8ICdzaG9ydFRpbWUnXG4gICAgfCAnbWVkaXVtVGltZSdcbiAgICB8ICdsb25nVGltZSdcbiAgICB8ICdmdWxsVGltZSc7XG59O1xuXG5leHBvcnQgdHlwZSBNdGVOdW1iZXJGb3JtYXRPcHRpb25zID0gSW50bC5OdW1iZXJGb3JtYXRPcHRpb25zICYgeyBsYW5nPzogc3RyaW5nIH07XG5cbmNsYXNzIF9NdGVMb2NhbGl6ZVNlcnZpY2Uge1xuICAvLyBBc3N1bWUgYGVuYCBsYW5nIGZvciBub3cgYXMgYSBmYWxsYmFjayB1bnRpbCB3ZSByb2xsYmFjayB3aWRlciBzdXBwb3J0IGZvciBpMTFuIHdoZW4gbmVjZXNzYXJ5XG4gIHByaXZhdGUgbGFuZ3VhZ2UgPSAnZW4nO1xuICBwcml2YXRlIGluaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIGlmICghaXNTc3IoKSAmJiAhdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0aGlzLmxhbmd1YWdlID0gYCR7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgfHwgbmF2aWdhdG9yLmxhbmd1YWdlfWAudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0TnVtYmVyKG51bWJlclRvRm9ybWF0OiBudW1iZXIgfCBzdHJpbmcsIG9wdGlvbnM/OiBNdGVOdW1iZXJGb3JtYXRPcHRpb25zKTogc3RyaW5nIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICBjb25zdCBsYW5nID0gb3B0aW9ucz8ubGFuZyA/IG9wdGlvbnMubGFuZyA6IHRoaXMubGFuZ3VhZ2U7XG4gICAgbnVtYmVyVG9Gb3JtYXQgPSBOdW1iZXIobnVtYmVyVG9Gb3JtYXQpO1xuICAgIC8vIEVuc3VyZSBubyBudWxsIG9wdGlvbnMgZXhpc3RcbiAgICBjb25zdCBmaW5hbE9wdGlvbnMgPSB7XG4gICAgICBsYW5nOiBvcHRpb25zLmxhbmcgPz8gdW5kZWZpbmVkLFxuICAgICAgc3R5bGU6IG9wdGlvbnMuc3R5bGUgPz8gdW5kZWZpbmVkLFxuICAgICAgY3VycmVuY3k6IG9wdGlvbnMuY3VycmVuY3kgPz8gdW5kZWZpbmVkLFxuICAgICAgY3VycmVuY3lEaXNwbGF5OiBvcHRpb25zLmN1cnJlbmN5RGlzcGxheSA/PyB1bmRlZmluZWQsXG4gICAgICB1c2VHcm91cGluZzogb3B0aW9ucy51c2VHcm91cGluZyA/PyB1bmRlZmluZWQsXG4gICAgICBtaW5pbXVtSW50ZWdlckRpZ2l0czogb3B0aW9ucy5taW5pbXVtSW50ZWdlckRpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IG9wdGlvbnMubWluaW11bUZyYWN0aW9uRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogb3B0aW9ucy5tYXhpbXVtRnJhY3Rpb25EaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgbWluaW11bVNpZ25pZmljYW50RGlnaXRzOiBvcHRpb25zLm1pbmltdW1TaWduaWZpY2FudERpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICBtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHM6IG9wdGlvbnMubWF4aW11bVNpZ25pZmljYW50RGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICB9O1xuICAgIHJldHVybiBpc05hTihudW1iZXJUb0Zvcm1hdClcbiAgICAgID8gJydcbiAgICAgIDogbmV3IEludGwuTnVtYmVyRm9ybWF0KGxhbmcsIGZpbmFsT3B0aW9ucykuZm9ybWF0KG51bWJlclRvRm9ybWF0KTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXREYXRlKGRhdGVUb0Zvcm1hdDogRGF0ZSB8IHN0cmluZywgb3B0aW9ucz86IE10ZURhdGVGb3JtYXRPcHRpb25zKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgY29uc3QgbGFuZyA9IG9wdGlvbnM/LmxhbmcgPyBvcHRpb25zLmxhbmcgOiB0aGlzLmxhbmd1YWdlO1xuICAgIGNvbnN0IGZvcm1hdHRlZE9wdGlvbnMgPSB7IC4uLihvcHRpb25zID8/IHt9KSwgLi4udGhpcy5nZXREZWZpbmVkRGF0ZUZvcm1hdChvcHRpb25zPy5mb3JtYXQpIH07XG4gICAgLy8gRW5zdXJlIG5vIG51bGwgb3B0aW9ucyBleGlzdFxuICAgIGNvbnN0IGZpbmFsT3B0aW9ucyA9IHtcbiAgICAgIGxhbmc6IGZvcm1hdHRlZE9wdGlvbnMubGFuZyA/PyB1bmRlZmluZWQsXG4gICAgICB3ZWVrZGF5OiBmb3JtYXR0ZWRPcHRpb25zLndlZWtkYXkgPz8gdW5kZWZpbmVkLFxuICAgICAgZXJhOiBmb3JtYXR0ZWRPcHRpb25zLmVyYSA/PyB1bmRlZmluZWQsXG4gICAgICB5ZWFyOiBmb3JtYXR0ZWRPcHRpb25zLnllYXIgPz8gdW5kZWZpbmVkLFxuICAgICAgbW9udGg6IGZvcm1hdHRlZE9wdGlvbnMubW9udGggPz8gdW5kZWZpbmVkLFxuICAgICAgZGF5OiBmb3JtYXR0ZWRPcHRpb25zLmRheSA/PyB1bmRlZmluZWQsXG4gICAgICBob3VyOiBmb3JtYXR0ZWRPcHRpb25zLmhvdXIgPz8gdW5kZWZpbmVkLFxuICAgICAgbWludXRlOiBmb3JtYXR0ZWRPcHRpb25zLm1pbnV0ZSA/PyB1bmRlZmluZWQsXG4gICAgICBzZWNvbmQ6IGZvcm1hdHRlZE9wdGlvbnMuc2Vjb25kID8/IHVuZGVmaW5lZCxcbiAgICAgIGZyYWN0aW9uYWxTZWNvbmREaWdpdHM6IGZvcm1hdHRlZE9wdGlvbnMuZnJhY3Rpb25hbFNlY29uZERpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICB0aW1lWm9uZU5hbWU6IGZvcm1hdHRlZE9wdGlvbnMudGltZVpvbmVOYW1lID8/IHVuZGVmaW5lZCxcbiAgICAgIHRpbWVab25lOiBmb3JtYXR0ZWRPcHRpb25zLnRpbWVab25lID8/IHVuZGVmaW5lZCxcbiAgICAgIGhvdXIxMjogZm9ybWF0dGVkT3B0aW9ucy5ob3VyMTIgPz8gdW5kZWZpbmVkLFxuICAgICAgZm9ybWF0OiBmb3JtYXR0ZWRPcHRpb25zLmZvcm1hdCA/PyB1bmRlZmluZWQsXG4gICAgfTtcbiAgICBkYXRlVG9Gb3JtYXQgPSBuZXcgRGF0ZShkYXRlVG9Gb3JtYXQpO1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsYW5nLCBmaW5hbE9wdGlvbnMpLmZvcm1hdChkYXRlVG9Gb3JtYXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZpbmVkRGF0ZUZvcm1hdChcbiAgICBmb3JtYXQ6XG4gICAgICB8ICdzaG9ydCdcbiAgICAgIHwgJ21lZGl1bSdcbiAgICAgIHwgJ2xvbmcnXG4gICAgICB8ICdmdWxsJ1xuICAgICAgfCAnc2hvcnREYXRlJ1xuICAgICAgfCAnbWVkaXVtRGF0ZSdcbiAgICAgIHwgJ2xvbmdEYXRlJ1xuICAgICAgfCAnZnVsbERhdGUnXG4gICAgICB8ICdzaG9ydFRpbWUnXG4gICAgICB8ICdtZWRpdW1UaW1lJ1xuICAgICAgfCAnbG9uZ1RpbWUnXG4gICAgICB8ICdmdWxsVGltZSdcbiAgKTogTXRlRGF0ZUZvcm1hdE9wdGlvbnMge1xuICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICBjYXNlICdzaG9ydCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbG9uZyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2Z1bGwnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnc2hvcnREYXRlJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ21lZGl1bURhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2xvbmdEYXRlJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2Z1bGxEYXRlJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdzaG9ydFRpbWUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ21lZGl1bVRpbWUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2xvbmdUaW1lJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnZnVsbFRpbWUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICBmcmFjdGlvbmFsU2Vjb25kRGlnaXRzOiAyLFxuICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZUxvY2FsaXplU2VydmljZSA9IG5ldyBfTXRlTG9jYWxpemVTZXJ2aWNlKCk7XG4iLCAiaW1wb3J0IHsgUmVhY3RpdmVDb250cm9sbGVyLCBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBNdGVQb3J0YWxTZXJ2aWNlLCBQb3J0YWxPcHRpb25zLCBQb3J0YWxTdGFjayB9IGZyb20gJy4uL3NlcnZpY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0YWxDb250cm9sbGVyT3B0aW9ucyB7XG4gIHN0YWNrOiBQb3J0YWxTdGFjaztcbn1cblxubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbi8qKlxuICogQ29udHJvbGxlciB1c2VkIHRvIGF0dGFjaCBhbnkgZWxlbWVudCB0byBhIHBvcnRhbCBzdGFjay5cbiAqXG4gKiBVc2UgdGhpcyBjb250cm9sbGVyIHdoZW4geW91IG5lZWQgdG8gcmVuZGVyIGFuIG92ZXJsYXkgYXQgdGhlIHJvb3Qgb2YgdGhlIERPTS5cbiAqIFRvIGF2b2lkIHBvc2l0aW9uaW5nIGNvbmZsaWN0cyBvciBvdmVyZmxvdyBjbGlwcGluZy5cbiAqL1xuZXhwb3J0IGNsYXNzIFBvcnRhbENvbnRyb2xsZXIgaW1wbGVtZW50cyBSZWFjdGl2ZUNvbnRyb2xsZXIsIEVsZW1lbnRQb3J0YWxDb250cm9sbGVyIHtcbiAgLyoqIEBpZ25vcmUgKi9cbiAgaWQgPSBuZXh0VW5pcXVlSWQrKztcblxuICAvKipcbiAgICogVXNlZCBieSB0aGUgTXRlUG9ydGFsU2VydmljZSB0byBjYWNoZSB0aGlzIGVsZW1lbnRzIHBvcnRhbGVkIHBhcmVudCByZWZlcmVuY2VcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcGFyZW50UG9ydGFsZWRFbGVtZW50OiBFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBGbGFnIHRvIGhlbHAgY2hlY2sgaWYgYSBkaXNjb25uZWN0ZWQgY2FsbGJhY2sgaGFzIGJlZW4gZmlyZWRcbiAgICogYmVjYXVzZSBvZiBhIHBvcnRhbGluZyBvcGVyYXRpb24uXG4gICAqL1xuICBwcml2YXRlIGlnbm9yZU5leHREaXNjb25uZWN0ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaG9zdDogUmVhY3RpdmVDb250cm9sbGVySG9zdCAmIEVsZW1lbnQsXG4gICAgcHVibGljIG9wdGlvbnM6IFBvcnRhbENvbnRyb2xsZXJPcHRpb25zID0geyBzdGFjazogJ292ZXJsYXknIH1cbiAgKSB7XG4gICAgdGhpcy5ob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XG4gIH1cblxuICAvKiogUmVxdWVzdHMgdGhlIHBvcnRhbCBzZXJ2aWNlIGFwcGVuZCB0aGlzIGl0ZW0gdG8gdGhlIGNvbmZpZ3VyZWQgc3RhY2sgKi9cbiAgcHVibGljIGFwcGVuZFRvU3RhY2soZWxlbWVudDogRWxlbWVudCA9IHRoaXMuaG9zdCwgb3B0aW9uczogUG9ydGFsT3B0aW9ucyA9IHt9KSB7XG4gICAgLy8gT25seSBpZ25vcmUgdGhlIG5leHQgZGlzY29ubmVjdCBpZiB0aGUgZWxlbWVudCBiZWluZyBwb3J0YWxlZCBpcyBjdXJyZW50bHkgY29ubmVjdGVkIHRvIHRoZSBET01cbiAgICBpZiAoZWxlbWVudD8uaXNDb25uZWN0ZWQpIHtcbiAgICAgIHRoaXMuaWdub3JlTmV4dERpc2Nvbm5lY3QgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gTXRlUG9ydGFsU2VydmljZS5hcHBlbmRUb1N0YWNrKHRoaXMsIGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqIFJlcXVlc3RzIHRoZSBwb3J0YWwgc2VydmljZSByZW1vdmUgdGhpcyBlbGVtZW50IGZyb20gdGhlIGNvbmZpZ3VyZWQgc3RhY2sgKi9cbiAgcHVibGljIHJlbW92ZUZyb21TdGFjayhlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5ob3N0KSB7XG4gICAgdGhpcy5pZ25vcmVOZXh0RGlzY29ubmVjdCA9IGZhbHNlO1xuICAgIHJldHVybiBNdGVQb3J0YWxTZXJ2aWNlLnJlbW92ZUZyb21TdGFjayh0aGlzLCBlbGVtZW50KTtcbiAgfVxuXG4gIC8qKiBNYWtlcyBhIGJhY2tkcm9wIGFzc29jaWF0ZWQgd2l0aCBhIHBvcnRhbGVkIGVsZW1lbnQgdmlzaWJsZSBpZiBpdCBleGlzdHMgKi9cbiAgcHVibGljIHNob3dCYWNrZHJvcChlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5ob3N0KSB7XG4gICAgcmV0dXJuIE10ZVBvcnRhbFNlcnZpY2Uuc2hvd0JhY2tkcm9wKHRoaXMsIGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqIEhpZGVzIGEgYmFja2Ryb3AgYXNzb2NpYXRlZCB3aXRoIGEgcG9ydGFsZWQgZWxlbWVudCBpZiBpdCBleGlzdHMgKi9cbiAgcHVibGljIGhpZGVCYWNrZHJvcChlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5ob3N0KSB7XG4gICAgcmV0dXJuIE10ZVBvcnRhbFNlcnZpY2UuaGlkZUJhY2tkcm9wKHRoaXMsIGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIGludGVydG5lc3MgYSBiYWNrZHJvcCBpZiBpdCBleGlzdHMgKHdoZXRoZXIgb3Igbm90IHRoZSB1c2VyIGNhbiBjbGljayB0aHJvdWdoIGl0KSAqL1xuICBwdWJsaWMgc2V0QmFja2Ryb3BJbmVydG5lc3MoaW5lcnQ6IGJvb2xlYW4sIGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLmhvc3QpIHtcbiAgICByZXR1cm4gTXRlUG9ydGFsU2VydmljZS5zZXRCYWNrZHJvcEluZXJ0bmVzcyh0aGlzLCBlbGVtZW50LCBpbmVydCk7XG4gIH1cblxuICBob3N0Q29ubmVjdGVkKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhY2spIHtcbiAgICAgIE10ZVBvcnRhbFNlcnZpY2UuaW5pdGlhbGl6ZVN0YWNrKHRoaXMub3B0aW9ucy5zdGFjayk7XG4gICAgfVxuICB9XG5cbiAgaG9zdERpc2Nvbm5lY3RlZCgpIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgbmV4dCBkaXNjb25uZWN0IHNob3VsZCBiZSBpZ25vcmVkIGJlY2F1c2UgaXQgaXMgdHJpZ2dlZFxuICAgIC8vIGZyb20gYSBwb3J0YWxpbmcgb3BlcmF0aW9uXG4gICAgaWYgKHRoaXMuaWdub3JlTmV4dERpc2Nvbm5lY3QpIHtcbiAgICAgIHRoaXMuaWdub3JlTmV4dERpc2Nvbm5lY3QgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgTXRlUG9ydGFsU2VydmljZS5yZW1vdmVDb250cm9sbGVyKHRoaXMpO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgfSBmcm9tICdsaXQnO1xuXG5pbnRlcmZhY2UgQ2xvc2FibGVFbGVtZW50IHtcbiAgY2xvc2U6ICgpID0+IGFueSB8IFByb21pc2U8YW55Pjtcbn1cblxuLyoqXG4gKiBUaGlzIGNvbnRyb2xsZXIgd2F0Y2hlcyBmb3IgYSBgZG9DbG9zZWAgZXZlbnQgdG8gYmUgdGhyb3duIGJ5IGFueSBjaGlsZCBlbGVtZW50cy5cbiAqIFdoZW4gYSBgZG9DbG9zZWAgZXZlbnQgaXMgZW1pdHRlZCBpdCB3aWxsIGF0dGVtcHQgdG8gY2xvc2UgdGhlIGhvc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZXRlY3RDaGlsZENsb3NlQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdDogUmVhY3RpdmVDb250cm9sbGVySG9zdCAmIEVsZW1lbnQgJiBDbG9zYWJsZUVsZW1lbnQpIHtcbiAgICB0aGlzLmhvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmx5IHRyaWdnZXIgYSBjbG9zZSBpZiB0aGUgdGFyZ2V0IGlzIG5vdCB0aGlzIGVsZW1lbnRcbiAgICogYXMgdGhpcyBpbXBsaWVzIHRoZSBjbG9zZSB3YXMgdHJpZ2dlcmVkIGZyb20gYSBjaGlsZCBlbGVtZW50XG4gICAqL1xuICBwcml2YXRlIGNoaWxkT25seUNsb3NlID0gKGU6IEN1c3RvbUV2ZW50PGFueT4pID0+IHtcbiAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMuaG9zdCkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuaG9zdC5jbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBob3N0Q29ubmVjdGVkKCkge1xuICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdkb0Nsb3NlJywgdGhpcy5jaGlsZE9ubHlDbG9zZSwgdHJ1ZSk7XG4gIH1cblxuICBob3N0RGlzY29ubmVjdGVkKCkge1xuICAgIHRoaXMuaG9zdC5yZW1vdmVFdmVudExpc3RlbmVyKCdkb0Nsb3NlJywgdGhpcy5jaGlsZE9ubHlDbG9zZSwgdHJ1ZSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBDb3JlUGFsZXR0ZSwgRGVuc2l0eU9wdGlvbnMsIFByZXNldHMsIFNpemVPcHRpb25zLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uUHJlc2V0IHtcbiAgc2l6ZT86IFNpemVPcHRpb25zO1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICBkZW5zaXR5PzogRGVuc2l0eU9wdGlvbnM7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBidXR0b25QcmVzZXRzOiBQcmVzZXRzPEJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJY29uQnV0dG9uUHJlc2V0IHtcbiAgc2l6ZT86IFNpemVPcHRpb25zO1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICBkZW5zaXR5PzogRGVuc2l0eU9wdGlvbnM7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBpY29uQnV0dG9uUHJlc2V0czogUHJlc2V0czxJY29uQnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFN0YXR1c1BhbGV0dGUgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25QcmVzZXQge1xuICBjb2xvcj86IFN0YXR1c1BhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBpY29uUHJlc2V0czogUHJlc2V0czxJY29uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFN0YXR1c1BhbGV0dGUgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzQmFyUHJlc2V0IHtcbiAgY29sb3I/OiBTdGF0dXNQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NCYXJQcmVzZXRzOiBQcmVzZXRzPFByb2dyZXNzQmFyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgU3RhdHVzUGFsZXR0ZSB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NTcGlubmVyUHJlc2V0IHtcbiAgY29sb3I/OiBTdGF0dXNQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NTcGlubmVyUHJlc2V0czogUHJlc2V0czxQcm9ncmVzc1NwaW5uZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUb29sYmFyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCB0b29sYmFyUHJlc2V0czogUHJlc2V0czxUb29sYmFyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRQcmVzZXQge1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xuICB3aXRoU2hhZG93PzogYm9vbGVhbjtcbiAgd2l0aG91dFNoYWRvdz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZEJ1dHRvblByZXNldCBleHRlbmRzIENhcmRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGNhcmRQcmVzZXRzOiBQcmVzZXRzPENhcmRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICB3aXRob3V0U2hhZG93OiB0cnVlLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBjYXJkQnV0dG9uUHJlc2V0czogUHJlc2V0czxDYXJkQnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgd2l0aG91dFNoYWRvdzogdHJ1ZSxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHRyZWVQcmVzZXRzOiBQcmVzZXRzPFRyZWVQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgQ29yZVBhbGV0dGUsIFByZXNldHMsIFNpemVPcHRpb25zLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnUHJlc2V0cyB7XG4gIHNpemU/OiBTaXplT3B0aW9ucztcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IHRhZ1ByZXNldHM6IFByZXNldHM8VGFnUHJlc2V0cz4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCYWRnZVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgYmFkZ2VQcmVzZXRzOiBQcmVzZXRzPEJhZGdlUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IENvcmVQYWxldHRlLCBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBMaW5rUHJlc2V0IHtcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgZm9udFdlaWdodD86ICdyZWd1bGFyJyB8ICdib2xkJztcbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtQcmVzZXRzOiBQcmVzZXRzPExpbmtQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBbGVydFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgYWxlcnRQcmVzZXRzOiBQcmVzZXRzPEFsZXJ0UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBpbnB1dFByZXNldHM6IFByZXNldHM8SW5wdXRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd2VyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBkcmF3ZXJQcmVzZXRzOiBQcmVzZXRzPERyYXdlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBc2lkZVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgYXNpZGVQcmVzZXRzOiBQcmVzZXRzPEFzaWRlUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCcmVhZGNydW1iSXRlbVByZXNldCB7XG4gIGZvbnRXZWlnaHQ/OiAncmVndWxhcicgfCAnYm9sZCc7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG4gIHdpdGhvdXRVbmRlcmxpbmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgYnJlYWRjcnVtYkl0ZW1QcmVzZXRzOiBQcmVzZXRzPEJyZWFkY3J1bWJJdGVtUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHtcbiAgICB3aXRob3V0VW5kZXJsaW5lOiB0cnVlLFxuICB9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBtb2RhbFByZXNldHM6IFByZXNldHM8TW9kYWxQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgQ29yZVBhbGV0dGUgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDaGVja2JveFByZXNldCB7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja2JveFByZXNldHM6IFByZXNldHM8Q2hlY2tib3hQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFkaW9QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHJhZGlvUHJlc2V0czogUHJlc2V0czxSYWRpb1ByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBOYXZSb290UHJlc2V0IHtcbiAgbW9iaWxlQnJlYWtwb2ludD86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCc7XG4gIGludmVyc2U/OiAnaGVhZGVyJyB8ICdzaWRlYmFyJztcbiAgcHJlZmVyU2lkZWJhcj86ICdvcGVuZWQnIHwgJ2Nsb3NlZCc7XG59XG5cbmV4cG9ydCBjb25zdCBuYXZSb290UHJlc2V0czogUHJlc2V0czxOYXZSb290UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge1xuICAgIGludmVyc2U6ICdzaWRlYmFyJyxcbiAgfSxcbiAgY3g6IHtcbiAgICBwcmVmZXJTaWRlYmFyOiAnY2xvc2VkJyxcbiAgfSxcbiAgcHg6IHtcbiAgICBpbnZlcnNlOiAnc2lkZWJhcicsXG4gIH0sXG4gIHJ4OiB7XG4gICAgcHJlZmVyU2lkZWJhcjogJ2Nsb3NlZCcsXG4gIH0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkhlYWRlclByZXNldCB7XG4gIHdpdGhDb250YWluZXI/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbmF2SGVhZGVyUHJlc2V0czogUHJlc2V0czxOYXZIZWFkZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2U3ViSGVhZGVyUHJlc2V0IHtcbiAgd2l0aENvbnRhaW5lcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZTdWJIZWFkZXJQcmVzZXRzOiBQcmVzZXRzPE5hdlN1YkhlYWRlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZTaWRlYmFyUHJlc2V0IHtcbiAgaGlkZVVudGlsVHJhbnNpdGlvbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZTaWRlYmFyUHJlc2V0czogUHJlc2V0czxOYXZTaWRlYmFyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgaGlkZVVudGlsVHJhbnNpdGlvbjogdHJ1ZSxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge1xuICAgIGhpZGVVbnRpbFRyYW5zaXRpb246IHRydWUsXG4gIH0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkNvbnRlbnRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkNvbnRlbnRQcmVzZXRzOiBQcmVzZXRzPE5hdkNvbnRlbnRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2Rm9vdGVyUHJlc2V0IHtcbiAgd2l0aENvbnRhaW5lcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZGb290ZXJQcmVzZXRzOiBQcmVzZXRzPE5hdkZvb3RlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZCdXR0b25QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkJ1dHRvblByZXNldHM6IFByZXNldHM8TmF2QnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkljb25CdXR0b25QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkljb25CdXR0b25QcmVzZXRzOiBQcmVzZXRzPE5hdkljb25CdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2SXRlbVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF2SXRlbVByZXNldHM6IFByZXNldHM8TmF2SXRlbVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uR3JvdXBQcmVzZXQge1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgYnV0dG9uR3JvdXBQcmVzZXRzOiBQcmVzZXRzPEJ1dHRvbkdyb3VwUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTd2l0Y2hQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHN3aXRjaFByZXNldHM6IFByZXNldHM8U3dpdGNoUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVTZWxlY3RQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdGl2ZVNlbGVjdFByZXNldHM6IFByZXNldHM8TmF0aXZlU2VsZWN0UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUZXh0YXJlYVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgdGV4dGFyZWFQcmVzZXRzOiBQcmVzZXRzPFRleHRhcmVhUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTa2VsZXRvblByZXNldCB7fVxuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25QcmVzZXRzOiBQcmVzZXRzPFNrZWxldG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHNsaWRlclByZXNldHM6IFByZXNldHM8U2xpZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBSYW5nZVNsaWRlclByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgcmFuZ2VTbGlkZXJQcmVzZXRzOiBQcmVzZXRzPFJhbmdlU2xpZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWdtZW50ZWRDb250cm9sUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBzZWdtZW50ZWRDb250cm9sUHJlc2V0czogUHJlc2V0czxTZWdtZW50ZWRDb250cm9sUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IGJ1dHRvblByZXNldHMsIGljb25CdXR0b25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2J1dHRvbi9idXR0b24ucHJlc2V0cyc7XG5pbXBvcnQgeyBpY29uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9pY29uL2ljb24ucHJlc2V0cyc7XG5pbXBvcnQgeyBwcm9ncmVzc0JhclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5wcmVzZXRzJztcbmltcG9ydCB7IHByb2dyZXNzU3Bpbm5lclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLnByZXNldHMnO1xuaW1wb3J0IHsgdG9vbGJhclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdG9vbGJhci90b29sYmFyLnByZXNldHMnO1xuaW1wb3J0IHsgY2FyZFByZXNldHMsIGNhcmRCdXR0b25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2NhcmQvY2FyZC5wcmVzZXRzJztcbmltcG9ydCB7IHRyZWVQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3RyZWUvdHJlZS5wcmVzZXRzJztcbmltcG9ydCB7IHRhZ1ByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdGFnL3RhZy5wcmVzZXRzJztcbmltcG9ydCB7IGJhZGdlUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9iYWRnZS9iYWRnZS5wcmVzZXRzJztcbmltcG9ydCB7IGxpbmtQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2xpbmsvbGluay5wcmVzZXRzJztcbmltcG9ydCB7IGFsZXJ0UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9hbGVydC9hbGVydC5wcmVzZXRzJztcbmltcG9ydCB7IGlucHV0UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9pbnB1dC9pbnB1dC5wcmVzZXRzJztcbmltcG9ydCB7IGRyYXdlclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvZHJhd2VyL2RyYXdlci5wcmVzZXRzJztcbmltcG9ydCB7IGFzaWRlUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9hc2lkZS9hc2lkZS5wcmVzZXRzJztcbmltcG9ydCB7IGJyZWFkY3J1bWJJdGVtUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9icmVhZGNydW1icy9icmVhZGNydW1iLWl0ZW0ucHJlc2V0cyc7XG5pbXBvcnQgeyBtb2RhbFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvbW9kYWwvbW9kYWwucHJlc2V0cyc7XG5pbXBvcnQgeyBjaGVja2JveFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvY2hlY2tib3gvY2hlY2tib3gucHJlc2V0cyc7XG5pbXBvcnQgeyByYWRpb1ByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcmFkaW8vcmFkaW8ucHJlc2V0cyc7XG5pbXBvcnQge1xuICBuYXZSb290UHJlc2V0cyxcbiAgbmF2SGVhZGVyUHJlc2V0cyxcbiAgbmF2U3ViSGVhZGVyUHJlc2V0cyxcbiAgbmF2U2lkZWJhclByZXNldHMsXG4gIG5hdkNvbnRlbnRQcmVzZXRzLFxuICBuYXZGb290ZXJQcmVzZXRzLFxuICBuYXZCdXR0b25QcmVzZXRzLFxuICBuYXZJY29uQnV0dG9uUHJlc2V0cyxcbiAgbmF2SXRlbVByZXNldHMsXG59IGZyb20gJy4uLy4uL2F0b21pYy9uYXYvbmF2LnByZXNldHMnO1xuaW1wb3J0IHsgYnV0dG9uR3JvdXBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAucHJlc2V0cyc7XG5pbXBvcnQgeyBzd2l0Y2hQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3N3aXRjaC9zd2l0Y2gucHJlc2V0cyc7XG5pbXBvcnQgeyBuYXRpdmVTZWxlY3RQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL25hdGl2ZS1zZWxlY3QvbmF0aXZlLXNlbGVjdC5wcmVzZXRzJztcbmltcG9ydCB7IHRleHRhcmVhUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy90ZXh0YXJlYS90ZXh0YXJlYS5wcmVzZXRzJztcbmltcG9ydCB7IHNrZWxldG9uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9za2VsZXRvbi9za2VsZXRvbi5wcmVzZXRzJztcbmltcG9ydCB7IHNsaWRlclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc2xpZGVyL3NsaWRlci5wcmVzZXRzJztcbmltcG9ydCB7IHJhbmdlU2xpZGVyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLnByZXNldHMnO1xuaW1wb3J0IHsgc2VnbWVudGVkQ29udHJvbFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc2VnbWVudGVkLWNvbnRyb2wvc2VnbWVudGVkLWNvbnRyb2wucHJlc2V0cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9ydGFyUHJlc2V0VGhlbWUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbG9yU2NoZW1lOiAnc3lzdGVtJyB8ICdsaWdodCcgfCAnZGFyayc7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdkZWZhdWx0JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAncHgnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9IGFzIE1vcnRhclByZXNldFRoZW1lLFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMuZGVmYXVsdCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMuZGVmYXVsdCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMuZGVmYXVsdCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMuZGVmYXVsdCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMuZGVmYXVsdCxcbiAgTXRlTGluazogbGlua1ByZXNldHMuZGVmYXVsdCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMuZGVmYXVsdCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMuZGVmYXVsdCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMuZGVmYXVsdCxcbn07XG5cbmV4cG9ydCB0eXBlIE1vcnRhclByZXNldCA9IHR5cGVvZiBkZWZhdWx0UHJlc2V0O1xuXG5leHBvcnQgY29uc3QgcHhQcmVzZXQ6IE1vcnRhclByZXNldCA9IHtcbiAgcHJlc2V0OiAncHgnLFxuICB0aGVtZToge1xuICAgIG5hbWU6ICdweCcsXG4gICAgY29sb3JTY2hlbWU6ICdsaWdodCcsXG4gIH0sXG4gIE10ZUJ1dHRvbjogYnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMucHgsXG4gIE10ZUljb246IGljb25QcmVzZXRzLnB4LFxuICBNdGVQcm9ncmVzc0JhcjogcHJvZ3Jlc3NCYXJQcmVzZXRzLnB4LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMucHgsXG4gIE10ZVRvb2xiYXI6IHRvb2xiYXJQcmVzZXRzLnB4LFxuICBNdGVDYXJkOiBjYXJkUHJlc2V0cy5weCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMucHgsXG4gIE10ZVRyZWU6IHRyZWVQcmVzZXRzLnB4LFxuICBNdGVUYWc6IHRhZ1ByZXNldHMucHgsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMucHgsXG4gIE10ZUxpbms6IGxpbmtQcmVzZXRzLnB4LFxuICBNdGVBbGVydDogYWxlcnRQcmVzZXRzLnB4LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLnB4LFxuICBNdGVEcmF3ZXI6IGRyYXdlclByZXNldHMucHgsXG4gIE10ZUFzaWRlOiBhc2lkZVByZXNldHMucHgsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMucHgsXG4gIE10ZU1vZGFsOiBtb2RhbFByZXNldHMucHgsXG4gIE10ZUNoZWNrYm94OiBjaGVja2JveFByZXNldHMucHgsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMucHgsXG4gIE10ZU5hdlJvb3Q6IG5hdlJvb3RQcmVzZXRzLnB4LFxuICBNdGVOYXZIZWFkZXI6IG5hdkhlYWRlclByZXNldHMucHgsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5weCxcbiAgTXRlTmF2U2lkZWJhcjogbmF2U2lkZWJhclByZXNldHMucHgsXG4gIE10ZU5hdkNvbnRlbnQ6IG5hdkNvbnRlbnRQcmVzZXRzLnB4LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMucHgsXG4gIE10ZU5hdkJ1dHRvbjogbmF2QnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlTmF2SWNvbkJ1dHRvbjogbmF2SWNvbkJ1dHRvblByZXNldHMucHgsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLnB4LFxuICBNdGVCdXR0b25Hcm91cDogYnV0dG9uR3JvdXBQcmVzZXRzLnB4LFxuICBNdGVTd2l0Y2g6IHN3aXRjaFByZXNldHMucHgsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5weCxcbiAgTXRlVGV4dGFyZWE6IHRleHRhcmVhUHJlc2V0cy5weCxcbiAgTXRlU2tlbGV0b246IHNrZWxldG9uUHJlc2V0cy5weCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLnB4LFxuICBNdGVSYW5nZVNsaWRlcjogcmFuZ2VTbGlkZXJQcmVzZXRzLnB4LFxuICBNdGVTZWdtZW50ZWRDb250cm9sOiBzZWdtZW50ZWRDb250cm9sUHJlc2V0cy5weCxcbn07XG5cbmV4cG9ydCBjb25zdCBjeFByZXNldDogTW9ydGFyUHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdjeCcsXG4gIHRoZW1lOiB7XG4gICAgbmFtZTogJ2N4JyxcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSxcbiAgTXRlQnV0dG9uOiBidXR0b25QcmVzZXRzLmN4LFxuICBNdGVJY29uQnV0dG9uOiBpY29uQnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMuY3gsXG4gIE10ZVByb2dyZXNzQmFyOiBwcm9ncmVzc0JhclByZXNldHMuY3gsXG4gIE10ZVByb2dyZXNzU3Bpbm5lcjogcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cy5jeCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMuY3gsXG4gIE10ZUNhcmQ6IGNhcmRQcmVzZXRzLmN4LFxuICBNdGVDYXJkQnV0dG9uOiBjYXJkQnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMuY3gsXG4gIE10ZVRhZzogdGFnUHJlc2V0cy5jeCxcbiAgTXRlQmFkZ2U6IGJhZGdlUHJlc2V0cy5jeCxcbiAgTXRlTGluazogbGlua1ByZXNldHMuY3gsXG4gIE10ZUFsZXJ0OiBhbGVydFByZXNldHMuY3gsXG4gIE10ZUlucHV0OiBpbnB1dFByZXNldHMuY3gsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5jeCxcbiAgTXRlQXNpZGU6IGFzaWRlUHJlc2V0cy5jeCxcbiAgTXRlQnJlYWRjcnVtYkl0ZW06IGJyZWFkY3J1bWJJdGVtUHJlc2V0cy5jeCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5jeCxcbiAgTXRlQ2hlY2tib3g6IGNoZWNrYm94UHJlc2V0cy5jeCxcbiAgTXRlUmFkaW86IHJhZGlvUHJlc2V0cy5jeCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMuY3gsXG4gIE10ZU5hdkhlYWRlcjogbmF2SGVhZGVyUHJlc2V0cy5jeCxcbiAgTXRlTmF2U3ViSGVhZGVyOiBuYXZTdWJIZWFkZXJQcmVzZXRzLmN4LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5jeCxcbiAgTXRlTmF2Q29udGVudDogbmF2Q29udGVudFByZXNldHMuY3gsXG4gIE10ZU5hdkZvb3RlcjogbmF2Rm9vdGVyUHJlc2V0cy5jeCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLmN4LFxuICBNdGVOYXZJY29uQnV0dG9uOiBuYXZJY29uQnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlTmF2SXRlbTogbmF2SXRlbVByZXNldHMuY3gsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMuY3gsXG4gIE10ZVN3aXRjaDogc3dpdGNoUHJlc2V0cy5jeCxcbiAgTXRlTmF0aXZlU2VsZWN0OiBuYXRpdmVTZWxlY3RQcmVzZXRzLmN4LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLmN4LFxuICBNdGVTa2VsZXRvbjogc2tlbGV0b25QcmVzZXRzLmN4LFxuICBNdGVTbGlkZXI6IHNsaWRlclByZXNldHMuY3gsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMuY3gsXG4gIE10ZVNlZ21lbnRlZENvbnRyb2w6IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzLmN4LFxufTtcblxuZXhwb3J0IGNvbnN0IHJ4UHJlc2V0OiBNb3J0YXJQcmVzZXQgPSB7XG4gIHByZXNldDogJ3J4JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAncngnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9LFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMucngsXG4gIE10ZUljb25CdXR0b246IGljb25CdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVJY29uOiBpY29uUHJlc2V0cy5yeCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5yeCxcbiAgTXRlUHJvZ3Jlc3NTcGlubmVyOiBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzLnJ4LFxuICBNdGVUb29sYmFyOiB0b29sYmFyUHJlc2V0cy5yeCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMucngsXG4gIE10ZUNhcmRCdXR0b246IGNhcmRCdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVUcmVlOiB0cmVlUHJlc2V0cy5yeCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLnJ4LFxuICBNdGVCYWRnZTogYmFkZ2VQcmVzZXRzLnJ4LFxuICBNdGVMaW5rOiBsaW5rUHJlc2V0cy5yeCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5yeCxcbiAgTXRlSW5wdXQ6IGlucHV0UHJlc2V0cy5yeCxcbiAgTXRlRHJhd2VyOiBkcmF3ZXJQcmVzZXRzLnJ4LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLnJ4LFxuICBNdGVCcmVhZGNydW1iSXRlbTogYnJlYWRjcnVtYkl0ZW1QcmVzZXRzLnJ4LFxuICBNdGVNb2RhbDogbW9kYWxQcmVzZXRzLnJ4LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLnJ4LFxuICBNdGVSYWRpbzogcmFkaW9QcmVzZXRzLnJ4LFxuICBNdGVOYXZSb290OiBuYXZSb290UHJlc2V0cy5yeCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZTdWJIZWFkZXI6IG5hdlN1YkhlYWRlclByZXNldHMucngsXG4gIE10ZU5hdlNpZGViYXI6IG5hdlNpZGViYXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5yeCxcbiAgTXRlTmF2Rm9vdGVyOiBuYXZGb290ZXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZCdXR0b246IG5hdkJ1dHRvblByZXNldHMucngsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVOYXZJdGVtOiBuYXZJdGVtUHJlc2V0cy5yeCxcbiAgTXRlQnV0dG9uR3JvdXA6IGJ1dHRvbkdyb3VwUHJlc2V0cy5yeCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLnJ4LFxuICBNdGVOYXRpdmVTZWxlY3Q6IG5hdGl2ZVNlbGVjdFByZXNldHMucngsXG4gIE10ZVRleHRhcmVhOiB0ZXh0YXJlYVByZXNldHMucngsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMucngsXG4gIE10ZVNsaWRlcjogc2xpZGVyUHJlc2V0cy5yeCxcbiAgTXRlUmFuZ2VTbGlkZXI6IHJhbmdlU2xpZGVyUHJlc2V0cy5yeCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMucngsXG59O1xuIiwgImltcG9ydCB7IGN4UHJlc2V0LCBkZWZhdWx0UHJlc2V0LCBNb3J0YXJQcmVzZXQsIHB4UHJlc2V0LCByeFByZXNldCB9IGZyb20gJy4vcHJlc2V0cyc7XG5pbXBvcnQgeyBjb21wdXRlZCwgU2lnbmFsLCBzaWduYWwgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5jbGFzcyBfTXRlUHJlc2V0U2VydmljZSB7XG4gIHByaXZhdGUgcHJlc2V0cyA9IG5ldyBNYXA8c3RyaW5nLCBNb3J0YXJQcmVzZXQ+KFtcbiAgICBbJ2dsb2JhbCcsIGRlZmF1bHRQcmVzZXRdLFxuICAgIFsnZGVmYXVsdCcsIGRlZmF1bHRQcmVzZXRdLFxuICAgIFsncHgnLCBweFByZXNldF0sXG4gICAgWydjeCcsIGN4UHJlc2V0XSxcbiAgICBbJ3J4JywgcnhQcmVzZXRdLFxuICBdKTtcblxuICBwcml2YXRlIHByZXNldENoYW5nZWRTaWduYWwgPSBzaWduYWw8eyBwcmVzZXROYW1lOiBzdHJpbmc7IGNvbXBvbmVudE5hbWU6IHN0cmluZyB9Pih7XG4gICAgcHJlc2V0TmFtZTogbnVsbCxcbiAgICBjb21wb25lbnROYW1lOiBudWxsLFxuICB9KTtcblxuICBwdWJsaWMgc2V0UHJlc2V0KHByZXNldE5hbWU6IHN0cmluZywgcHJlc2V0OiBQYXJ0aWFsPE1vcnRhclByZXNldD4pIHtcbiAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgIC4uLih0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpID8/IGRlZmF1bHRQcmVzZXQpLFxuICAgICAgLi4ucHJlc2V0LFxuICAgIH0pO1xuICAgIHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbC5zZXQoeyBwcmVzZXROYW1lLCBjb21wb25lbnROYW1lOiBudWxsIH0pO1xuICB9XG5cbiAgcHVibGljIHNldENvbXBvbmVudFByZXNldDxDIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0PihcbiAgICBwcmVzZXROYW1lOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogQyxcbiAgICBjb21wb25lbnRQcmVzZXQ6IFBhcnRpYWw8TW9ydGFyUHJlc2V0W0NdPlxuICApIHtcbiAgICBjb25zdCBzZWxlY3RlZFByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSkgPz8gZGVmYXVsdFByZXNldDtcbiAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgIC4uLnNlbGVjdGVkUHJlc2V0LFxuICAgICAgW2NvbXBvbmVudE5hbWVdOiB7XG4gICAgICAgIC4uLihzZWxlY3RlZFByZXNldFtjb21wb25lbnROYW1lXSA/PyAoe30gYXMgYW55KSksXG4gICAgICAgIC4uLmNvbXBvbmVudFByZXNldCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLnNldCh7IHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWUgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29tcG9uZW50UHJlc2V0UHJvcGVydHk8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldCwgUCBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldFtDXT4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IEMsXG4gICAgcHJvcGVydHlOYW1lOiBQLFxuICAgIHZhbHVlOiBNb3J0YXJQcmVzZXRbQ11bUF0gfCBQYXJ0aWFsPE1vcnRhclByZXNldFtDXVtQXT5cbiAgKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpID8/IGRlZmF1bHRQcmVzZXQ7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb21wb25lbnRQcmVzZXQgPSBzZWxlY3RlZFByZXNldFtjb21wb25lbnROYW1lXSBhcyBhbnk7XG5cbiAgICAvLyBJZiBzZXR0aW5nIGFuIG9iamVjdCB2YWx1ZSBiZSBzdXJlIHRvIHNwcmVhZCBvdmVyIGV4aXN0aW5nIHZhbHVlXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgICAuLi5zZWxlY3RlZFByZXNldCxcbiAgICAgICAgW2NvbXBvbmVudE5hbWVdOiB7XG4gICAgICAgICAgLi4uc2VsZWN0ZWRDb21wb25lbnRQcmVzZXQsXG4gICAgICAgICAgW3Byb3BlcnR5TmFtZV06IHtcbiAgICAgICAgICAgIC4uLnNlbGVjdGVkQ29tcG9uZW50UHJlc2V0W3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSBqdXN0IHNldCB0aGUgdmFsdWVcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgICAuLi5zZWxlY3RlZFByZXNldCxcbiAgICAgICAgW2NvbXBvbmVudE5hbWVdOiB7XG4gICAgICAgICAgLi4uc2VsZWN0ZWRDb21wb25lbnRQcmVzZXQsXG4gICAgICAgICAgW3Byb3BlcnR5TmFtZV06IHZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbC5zZXQoeyBwcmVzZXROYW1lLCBjb21wb25lbnROYW1lIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFByZXNldChwcmVzZXROYW1lOiBzdHJpbmcpOiBNb3J0YXJQcmVzZXQge1xuICAgIGNvbnN0IHByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSk7XG4gICAgaWYgKCFwcmVzZXQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE10ZVByZXNldFNlcnZpY2U6IEEgcHJlc2V0IHdpdGggdGhlIG5hbWUgXCIke3ByZXNldE5hbWV9XCIgZG9lcyBub3QgZXhpc3RgKTtcbiAgICB9XG4gICAgcmV0dXJuIHByZXNldDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb21wb25lbnRQcmVzZXQ8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldD4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IENcbiAgKTogTW9ydGFyUHJlc2V0W0NdIHtcbiAgICBjb25zdCBwcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpO1xuICAgIGNvbnN0IGNvbXBvbmVudFByZXNldCA9IHByZXNldFtjb21wb25lbnROYW1lXTtcbiAgICBpZiAoIXByZXNldCkge1xuICAgICAgY29uc29sZS5lcnJvcihgTXRlUHJlc2V0U2VydmljZTogQSBwcmVzZXQgd2l0aCB0aGUgbmFtZSBcIiR7cHJlc2V0TmFtZX1cIiBkb2VzIG5vdCBleGlzdC5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudFByZXNldDtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RQcmVzZXQocHJlc2V0TmFtZTogc3RyaW5nKTogU2lnbmFsPE1vcnRhclByZXNldD4ge1xuICAgIGxldCBmaXJzdEVtaXQgPSB0cnVlO1xuICAgIHJldHVybiBjb21wdXRlZCh0aGlzLnByZXNldENoYW5nZWRTaWduYWwsIChjaGFuZ2UsIHNldCkgPT4ge1xuICAgICAgaWYgKGZpcnN0RW1pdCkge1xuICAgICAgICBzZXQodGhpcy5nZXRQcmVzZXQocHJlc2V0TmFtZSkpO1xuICAgICAgICBmaXJzdEVtaXQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnByZXNldE5hbWUgPT09IHByZXNldE5hbWUpIHtcbiAgICAgICAgc2V0KHRoaXMuZ2V0UHJlc2V0KHByZXNldE5hbWUpKTtcbiAgICAgIH1cbiAgICB9KSBhcyBTaWduYWw8TW9ydGFyUHJlc2V0PjtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RDb21wb25lbnRQcmVzZXQ8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldD4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IENcbiAgKTogU2lnbmFsPE1vcnRhclByZXNldFtDXT4ge1xuICAgIGxldCBmaXJzdEVtaXQgPSB0cnVlO1xuICAgIHJldHVybiBjb21wdXRlZCh0aGlzLnByZXNldENoYW5nZWRTaWduYWwsIChjaGFuZ2UsIHNldCkgPT4ge1xuICAgICAgaWYgKGZpcnN0RW1pdCkge1xuICAgICAgICBzZXQodGhpcy5nZXRDb21wb25lbnRQcmVzZXQocHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSkpO1xuICAgICAgICBmaXJzdEVtaXQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIChjaGFuZ2UucHJlc2V0TmFtZSA9PT0gcHJlc2V0TmFtZSAmJiAhY2hhbmdlLmNvbXBvbmVudE5hbWUpIHx8XG4gICAgICAgIChjaGFuZ2UucHJlc2V0TmFtZSA9PT0gcHJlc2V0TmFtZSAmJiBjaGFuZ2UuY29tcG9uZW50TmFtZSA9PT0gY29tcG9uZW50TmFtZSlcbiAgICAgICkge1xuICAgICAgICBzZXQodGhpcy5nZXRDb21wb25lbnRQcmVzZXQocHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSkpO1xuICAgICAgfVxuICAgIH0pIGFzIFNpZ25hbDxNb3J0YXJQcmVzZXRbQ10+O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVQcmVzZXRTZXJ2aWNlID0gbmV3IF9NdGVQcmVzZXRTZXJ2aWNlKCk7XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlcyAqL1xuaW1wb3J0IHsgQ29udGV4dENvbnN1bWVyIH0gZnJvbSAnQGxpdC1sYWJzL2NvbnRleHQnO1xuaW1wb3J0IHsgUHJvcGVydHlEZWNsYXJhdGlvbiwgUmVhY3RpdmVFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIENvbnN0cnVjdG9yLFxuICBpc1NzcixcbiAgTXRlRWxlbWVudCxcbiAgTXRlUHJlc2V0U2VydmljZSxcbiAgcHJlc2V0Q29udGV4dCxcbiAgc2lnbmFsLFxuICBjb21wdXRlZCxcbiAgVW5zdWJzY3JpYmVyLFxufSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgTW9ydGFyUHJlc2V0IH0gZnJvbSAnLi9wcmVzZXRzJztcblxuZXhwb3J0IHR5cGUgUHJlc2V0T3B0aW9ucyA9ICdtZCcgfCAnc20nIHwgJ2xnJyB8IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJlc2V0RWxlbWVudEludGVyZmFjZTxQPiB7XG4gIC8qKiBAaWdub3JlICovXG4gIHJlYWRvbmx5IF9fY29tcG9uZW50TmFtZToga2V5b2YgTW9ydGFyUHJlc2V0O1xuXG4gIC8qKiBTZWxlY3RzIHRoZSBwcmVzZXQgZm9yIHRoaXMgY29tcG9uZW50LiBPdmVycmlkZXMgdGhlIGdsb2JhbCBwcmVzZXQgZm9yIHRoaXMgaW5zdGFuY2Ugb2YgdGhpcyBjb21wb25lbnQuICovXG4gIHByZXNldDogc3RyaW5nO1xuXG4gIC8qKiBAaWdub3JlICovXG4gIGFwcGxpZWRQcmVzZXQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmVzZXRNaXhpbkZhY3RvcnlPcHRpb25zIHtcbiAgcmVmbGVjdEFwcGxpZWRQcmVzZXQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IHtcbiAgaXMsXG4gIGRlZmluZVByb3BlcnR5LFxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIGdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZ2V0UHJvdG90eXBlT2YsXG59ID0gT2JqZWN0O1xuXG5leHBvcnQgY29uc3QgUHJlc2V0TWl4aW5GYWN0b3J5ID0gPFA+KFxuICBjb21wb25lbnROYW1lOiBrZXlvZiBNb3J0YXJQcmVzZXQsXG4gIG9wdGlvbnM6IFByZXNldE1peGluRmFjdG9yeU9wdGlvbnMgPSB7IHJlZmxlY3RBcHBsaWVkUHJlc2V0OiBmYWxzZSB9XG4pID0+IHtcbiAgcmV0dXJuIDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgICBjbGFzcyBQcmVzZXRFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICByZWFkb25seSBfX2NvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lO1xuXG4gICAgICAvKiogTWFwIHRoYXQgc3RvcmVzIHByaXZhdGUgdmFsdWVzIHRoYXQgdGFrZSBwcmVjZWRlbmNlIG92ZXIgcHJlc2V0IHZhbHVlcyAqL1xuICAgICAgcHJvdGVjdGVkIF92YWx1ZU1hcCA9IG5ldyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+KCk7XG5cbiAgICAgIC8qKiBNYXAgdGhhdCBzdG9yZXMgZmFsbGJhY2sgcHJlc2V0IHZhbHVlcyBlbWl0dGVkIGJ5IHRoZSBwcmVzZXRDb250cm9sbGVyICovXG4gICAgICBwcm90ZWN0ZWQgX3ByZXNldE1hcCA9IG5ldyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+KCk7XG5cbiAgICAgIC8qKiBTZWxlY3RzIGEgc3BlY2lmaWMgcHJlc2V0IGZvciB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZS4gT3ZlcnJpZGVzIHRoZSBjdXJyZW50IGdsb2JhbCBwcmVzZXQuICovXG4gICAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pXG4gICAgICBzZXQgcHJlc2V0KHByZXNldDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3ByZXNldCA9IHByZXNldDtcbiAgICAgICAgdGhpcy5fYWN0aXZlUHJlc2V0U2lnbmFsLnNldChwcmVzZXQpO1xuICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgIC8vIFN0b3AgU1NSIGNvbnN0cnVjdG9yIGxpc3RlbmVyIGlmIHN0aWxsIG9wZW4uXG4gICAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1Yj8uKCk7XG4gICAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1YiA9IG51bGw7XG4gICAgICAgICAgY29uc3QgcHJlc2V0ID0gTXRlUHJlc2V0U2VydmljZS5nZXRQcmVzZXQodGhpcy5wcmVzZXQgPz8gJ2dsb2JhbCcpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlU3NyUHJlc2V0Q2hhbmdlcyhwcmVzZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBnZXQgcHJlc2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJlc2V0O1xuICAgICAgfVxuICAgICAgcHJpdmF0ZSBfcHJlc2V0ID0gJ2dsb2JhbCc7XG5cbiAgICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IG9wdGlvbnM/LnJlZmxlY3RBcHBsaWVkUHJlc2V0ID8/IGZhbHNlIH0pIGFwcGxpZWRQcmVzZXQgPSAnZ2xvYmFsJztcblxuICAgICAgQHN0YXRlKCkgcHJpdmF0ZSBfYXBwbGllZFByZXNldD86IHN0cmluZztcblxuICAgICAgLyoqIEtlZXBzIGNvbnN0cnVjdG9yIHByZXNldCBzdWJzY3JpcHRpb24gb3BlbiB1bnRpbCB3aWxsVXBkYXRlICovXG4gICAgICBwcml2YXRlIHNzckNvbnN0cnVjdG9yU3ViOiBVbnN1YnNjcmliZXI7XG4gICAgICBwcml2YXRlIHByZXZpb3VzQ29tcG9uZW50VW5zdWI6IFVuc3Vic2NyaWJlcjtcblxuICAgICAgLyoqIEVtaXRzIHdoZW5ldmVyIHRoZSBsb2NhbCBwcmVzZXQgdmFsdWUgY2hhbmdlcy4gKi9cbiAgICAgIHByaXZhdGUgX2FjdGl2ZVByZXNldFNpZ25hbCA9IHNpZ25hbDxzdHJpbmc+KG51bGwpO1xuICAgICAgcHJpdmF0ZSBfcGFyZW50UHJlc2V0U2lnbmFsID0gc2lnbmFsPHN0cmluZz4obnVsbCk7XG5cbiAgICAgIHByaXZhdGUgX3ByZXNldENvbnRleHQgPSBuZXcgQ29udGV4dENvbnN1bWVyKHRoaXMsIHtcbiAgICAgICAgY29udGV4dDogcHJlc2V0Q29udGV4dCxcbiAgICAgICAgc3Vic2NyaWJlOiB0cnVlLFxuICAgICAgICBjYWxsYmFjazogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcGFyZW50UHJlc2V0U2lnbmFsLnNldCgodmFsdWUgPT09ICcnID8gbnVsbCA6IHZhbHVlKSA/PyAnZ2xvYmFsJyk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBPdmVycmlkZXMgdGhlIGRlZmF1bHQgZ2V0UHJvcGVydHlEZXNjcmlwdG9yIG1ldGhvZCB0byBjaGVjayBmb3IgdGhlIGN1c3RvbVxuICAgICAgICogYGlzUHJlc2V0YCBvcHRpb24uIERlc2NyaXB0b3JzIG9mIHByb3BlcnRpZXMgdGhhdCBhcmUgZGVjbGFyZWQgd2l0aCB0aGUgYGlzUHJlc2V0YFxuICAgICAgICogb3B0aW9uIGFyZSBkZWZpbmVkIHdpdGggc3BlY2lhbCBnZXR0ZXIvc2V0dGVyIGxvZ2ljIHRoYXQgc2V0cyB2YWx1ZSB0byB2YWx1ZU1hcFxuICAgICAgICogYW5kIGdldHMgdmFsdWVzIGZyb20gdGhlIHZhbHVlTWFwIGJ1dCB0aGVuIGFsc28gZmFsbHMgYmFjayB0byBhbnkgdmFsdWUgaW4gdGhlIHByZXNldE1hcFxuICAgICAgICpcbiAgICAgICAqIFRoZSBwcmVzZXRNYXAgaXMgcG9wdWxhdGVkIGFib3ZlIGZyb20gdmFsdWVzIGZyb20gdGhlIHByZXNldENvbnRyb2xsZXIgd2hlbmV2ZXIgdGhlXG4gICAgICAgKiBwcmVzZXQgZm9yIHRoaXMgY29tcG9uZW50IGlzIGNoYW5nZWQgZ2xvYmFsbHkuXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICAgIG5hbWU6IFByb3BlcnR5S2V5LFxuICAgICAgICBrZXk6IHN0cmluZyB8IHN5bWJvbCxcbiAgICAgICAgb3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvblxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHsgZ2V0LCBzZXQgfSA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLnByb3RvdHlwZSwgbmFtZSkgPz8ge1xuICAgICAgICAgIGdldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW2tleSBhcyBrZXlvZiB0eXBlb2YgdGhpc107XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQodGhpczogUmVhY3RpdmVFbGVtZW50LCB2OiB1bmtub3duKSB7XG4gICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcgfCBzeW1ib2wsIHVua25vd24+KVtrZXldID0gdjtcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGdldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQpOiBhbnkge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBnZXR0ZXIgbG9naWMgdGhhdCBnZXRzIGZyb20gdGhlIHZhbHVlTWFwIG9yIHByZXNldE1hcFxuICAgICAgICAgICAgaWYgKG9wdGlvbnNbJ2lzUHJlc2V0J10pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkuX3ZhbHVlTWFwIGFzIE1hcDxcbiAgICAgICAgICAgICAgICAgICAgUHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgICAgIFBba2V5b2YgUF1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICApLmdldChuYW1lKSB8fFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fcHJlc2V0TWFwIGFzIE1hcDxcbiAgICAgICAgICAgICAgICAgICAgUHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgICAgIFBba2V5b2YgUF1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICApLmdldChuYW1lKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVmYXVsdCBwcm9wZXJ0eSBnZXR0ZXIgbG9naWNcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gZ2V0Py5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCwgdmFsdWU6IHVua25vd24pIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgc2V0dGVyIGxvZ2ljIHRoYXQgc2V0cyB0byB0aGUgdmFsdWVNYXBcbiAgICAgICAgICAgIGlmIChvcHRpb25zWydpc1ByZXNldCddKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gKFxuICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fdmFsdWVNYXAgYXMgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPlxuICAgICAgICAgICAgICApLmdldChuYW1lKTtcbiAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fdmFsdWVNYXAgYXMgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPlxuICAgICAgICAgICAgICApLnNldChuYW1lLCB2YWx1ZSBhcyBhbnkpO1xuICAgICAgICAgICAgICAvLyBEdXJpbmcgU1NSIHdlIG5lZWQgdG8gdXBkYXRlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgIGlmIChpc1NzcigpKSB7XG4gICAgICAgICAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBSZWFjdGl2ZUVsZW1lbnQpLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIE9uIHRoZSBjbGllbnQgd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgY3VycmVudCB1cGRhdGUgdG8gZmluaXNoXG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlYWN0aXZlRWxlbWVudCkucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlZmF1bHQgcHJvcGVydHkgc2V0dGVyIGxvZ2ljXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBnZXQ/LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgIHNldCEuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICh0aGlzIGFzIHVua25vd24gYXMgUmVhY3RpdmVFbGVtZW50KS5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgICAgICAvLyBTdWJzY3JpYmVzIGZvciBjaGFuZ2VzIHRvIHRoaXMgY29tcG9uZW50cyBhY3RpdmUgcHJlc2V0IHRvIHVwZGF0ZSBhbGwgcmVsZXZhbnQgcHJvcHMgcHJlc2V0IHZhbHVlc1xuICAgICAgICB0aGlzLnN1YnMucHVzaChcbiAgICAgICAgICBjb21wdXRlZChcbiAgICAgICAgICAgIFt0aGlzLl9hY3RpdmVQcmVzZXRTaWduYWwsIHRoaXMuX3BhcmVudFByZXNldFNpZ25hbF0sXG4gICAgICAgICAgICAoW2FjdGl2ZVByZXNldCwgcGFyZW50UHJlc2V0XSwgc2V0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhY3RpdmVQcmVzZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZSA9XG4gICAgICAgICAgICAgICAgICBhY3RpdmVQcmVzZXQgPT09ICdnbG9iYWwnXG4gICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICA6IE10ZVByZXNldFNlcnZpY2UuZ2V0Q29tcG9uZW50UHJlc2V0KGFjdGl2ZVByZXNldCwgJ3RoZW1lJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2xvY2FsUHJlc2V0VGhlbWUgPSBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBudWxsKTtcblxuICAgICAgICAgICAgICB0aGlzLl9hcHBsaWVkUHJlc2V0ID0gYWN0aXZlUHJlc2V0ID8/IHBhcmVudFByZXNldCA/PyAnZ2xvYmFsJztcbiAgICAgICAgICAgICAgdGhpcy5hcHBsaWVkUHJlc2V0ID0gTXRlUHJlc2V0U2VydmljZS5nZXRDb21wb25lbnRQcmVzZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwbGllZFByZXNldCxcbiAgICAgICAgICAgICAgICAncHJlc2V0J1xuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIC8vIFVuc3Vic2NyaWJlIHRvIHByZXZpb3VzIGNvbXBvbmVudCBwcmVzZXQgY2hhbmdlc1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ29tcG9uZW50VW5zdWI/LigpO1xuICAgICAgICAgICAgICAvLyBVcGRhdGUgcHJvcHMgaWYgbmV3IGNvbXBvbmVudCBwcmVzZXQgZW1pdHNcbiAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0NvbXBvbmVudFVuc3ViID0gTXRlUHJlc2V0U2VydmljZS5zZWxlY3RDb21wb25lbnRQcmVzZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwbGllZFByZXNldCxcbiAgICAgICAgICAgICAgICB0aGlzLl9fY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgICApLnN1YnNjcmliZSgobmV3UHJlc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ByZXNldCkge1xuICAgICAgICAgICAgICAgICAgc2V0KG5ld1ByZXNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApLnN1YnNjcmliZSgobmV3UHJlc2V0cykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWVzTWFwID0gbmV3IE1hcCh0aGlzLl9wcmVzZXRNYXApO1xuICAgICAgICAgICAgY29uc3Qgb2xkUHJvcHMgPSBBcnJheS5mcm9tKHRoaXMuX3ByZXNldE1hcC5rZXlzKCkpO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSBPYmplY3Qua2V5cyhuZXdQcmVzZXRzID8/IHt9KTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGtleXMgaW4gdGhlIG5ldyBwcmVzZXRzIGNsZWFyIGFsbCBwcmVzZXQgdmFsdWVzXG4gICAgICAgICAgICBpZiAobmV3UHJvcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG9sZCBzZXQgcHJvcHMgYW5kIG5ldyBvbmVzXG4gICAgICAgICAgICAvLyBSZW1vdmUgb2xkIG9uZXMgJiBzZXQgbmV3IG9uZXNcbiAgICAgICAgICAgIC8vIEZpbmFsbHkgZm9yY2UgYW4gdXBkYXRlIGZvciBlYWNoIHByb3BcbiAgICAgICAgICAgIFsuLi5vbGRQcm9wcywgLi4ubmV3UHJvcHNdLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAobmV3UHJlc2V0c1trZXldKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLnNldChrZXksIG5ld1ByZXNldHNba2V5XSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShrZXksIG9sZFZhbHVlc01hcC5nZXQoa2V5KSA/PyBudWxsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgICAgIHRoaXMucHJldmlvdXNDb21wb25lbnRVbnN1Yj8uKCk7XG4gICAgICAgIHRoaXMuc3NyQ29uc3RydWN0b3JTdWI/LigpO1xuICAgICAgfVxuXG4gICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBzdXBlcihhcmdzKTtcblxuICAgICAgICAvLyBUT0RPKHJlZWNlKTogRW5zdXJlIHdlIHVwZGF0ZSB0aGlzIHRvIHN1cHBvcnQgY29udGV4dCB3aGVuIHRoYXQgaXMgU1NSIEZyaWVuZGx5OiBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9pc3N1ZXMvMzM2NVxuICAgICAgICAvLyBIYW5kbGUgc2V0dGluZyBwcmVzZXQgZGVmYXVsdHMgaW4gU1NSXG4gICAgICAgIGlmIChpc1NzcigpKSB7XG4gICAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1YiA9IE10ZVByZXNldFNlcnZpY2Uuc2VsZWN0UHJlc2V0KHRoaXMucHJlc2V0ID8/ICdnbG9iYWwnKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocHJlc2V0KSA9PiB0aGlzLmhhbmRsZVNzclByZXNldENoYW5nZXMocHJlc2V0KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBoYW5kbGVTc3JQcmVzZXRDaGFuZ2VzKHByZXNldDogTW9ydGFyUHJlc2V0KSB7XG4gICAgICAgIGlmIChwcmVzZXQpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRQcmVzZXRzID0gcHJlc2V0W3RoaXMuX19jb21wb25lbnROYW1lXTtcbiAgICAgICAgICBjb25zdCBvbGRQcm9wcyA9IEFycmF5LmZyb20odGhpcy5fcHJlc2V0TWFwLmtleXMoKSk7XG4gICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRQcmVzZXRzID8/IHt9KTtcblxuICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBrZXlzIGluIHRoZSBuZXcgcHJlc2V0cyBjbGVhciBhbGwgcHJlc2V0IHZhbHVlc1xuICAgICAgICAgIGlmIChuZXdQcm9wcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5jbGVhcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBMb29wIHRocm91Z2ggb2xkIHNldCBwcm9wcyBhbmQgbmV3IG9uZXNcbiAgICAgICAgICAvLyBSZW1vdmUgb2xkIG9uZXMgJiBzZXQgbmV3IG9uZXNcbiAgICAgICAgICAvLyBGaW5hbGx5IGZvcmNlIGFuIHVwZGF0ZSBmb3IgZWFjaCBwcm9wXG4gICAgICAgICAgWy4uLm9sZFByb3BzLCAuLi5uZXdQcm9wc10uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50UHJlc2V0c1trZXldKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5zZXQoa2V5LCBjb21wb25lbnRQcmVzZXRzW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKGtleSwgbnVsbCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5hcHBsaWVkUHJlc2V0ID0gcHJlc2V0WydwcmVzZXQnXTtcbiAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ2FwcGxpZWRQcmVzZXQnLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUHJlc2V0RWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxQcmVzZXRFbGVtZW50SW50ZXJmYWNlPFA+PiAmIFQ7XG4gIH07XG59O1xuIiwgImltcG9ydCB7IFByb3BlcnR5RGVjbGFyYXRpb24gfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVzZXRQcm9wZXJ0eTxUPihvcHRpb25zPzogUHJvcGVydHlEZWNsYXJhdGlvbikge1xuICByZXR1cm4gcHJvcGVydHkoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgaXNQcmVzZXQ6IHRydWUsXG4gIH0gYXMgYW55KTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAnQGxpdC1sYWJzL2NvbnRleHQnO1xuXG5leHBvcnQgY29uc3QgcHJlc2V0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8c3RyaW5nPignTVRFX1BSRVNFVCcpO1xuIiwgImltcG9ydCB7IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgTXRlUHJlc2V0U2VydmljZSB9IGZyb20gJy4uL3ByZXNldHMnO1xuaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgTXRlRWxlbWVudCB9IGZyb20gJy4uL2Jhc2UtY2xhc3Nlcyc7XG5cbmNvbnN0IGdsb2JhbFByZXNldCQgPSBNdGVQcmVzZXRTZXJ2aWNlLnNlbGVjdFByZXNldCgnZ2xvYmFsJyk7XG5jb25zdCBnbG9iYWxQcmVzZXROYW1lJCA9IGNvbXB1dGVkKGdsb2JhbFByZXNldCQsIChwcmVzZXQpID0+IHByZXNldC5wcmVzZXQpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpZWRQcmVzZXRDb250ZXh0IHtcbiAgcHJlc2V0TmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFByZXNldCBpcyBkZXRlcm1pbmVkIGZyb20gZWl0aGVyIHRoZSBwYXJlbnQgcHJlc2V0IGNvbnRleHQgb3IgYSBsb2NhbCBwcmVzZXQgcHJvcGVydHkuXG4gKiBUaGlzIGNvbnRyb2xsZXIga2VlcHMgdHJhY2sgb2YgdGhlIGFjdHVhbCBhY3RpdmUgcHJlc2V0IGFwcGxpZWQgdG8gdGhlIGN1cnJlbnQgY29tcG9uZW50LlxuICogSWYgYSBjYWxsYmFjayBpcyBnaXZlbiBpdCB3aWxsIGJlIGNhbGxlZCBhbnkgdGltZSB0aGF0IGNvbnRleHQgY2hhbmdlcy4gT3RoZXJ3aXNlIGNvbnRyb2xsZXJcbiAqIG1ldGhvZHMgY2FuIGJlIGNhbGxlZCB3aGVuIG5lZWRlZC5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIGV2ZW4gd2l0aGluIGVsZW1lbnRzIHRoYXQgZG8gbm90IGhhdmUgdGhlaXIgb3duIHByZXNldFxuICogb3B0aW9ucyAoYWthIGV4dGVuZCB0aGUgcHJlc2V0TWl4aW4pLlxuICovXG5leHBvcnQgY2xhc3MgQXBwbGllZFByZXNldENvbnRleHRDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBhcHBsaWVkUHJlc2V0TmFtZSA9ICdnbG9iYWwnO1xuICBwcml2YXRlIGFjdGl2ZUdsb2JhbFByZXNldE5hbWUgPSAnZGVmYXVsdCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBob3N0OiBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0ICYgTXRlRWxlbWVudCxcbiAgICBwcml2YXRlIGNhbGxiYWNrPzogKGNvbnRleHQ6IEFwcGxpZWRQcmVzZXRDb250ZXh0KSA9PiB2b2lkXG4gICkge1xuICAgIHRoaXMuaG9zdC5hZGRDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgfVxuXG4gIGhvc3RDb25uZWN0ZWQoKSB7XG4gICAgdGhpcy5ob3N0LnN1YnMucHVzaChcbiAgICAgIGdsb2JhbFByZXNldE5hbWUkLnN1YnNjcmliZSgoZ2xvYmFsUHJlc2V0TmFtZSkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZUdsb2JhbFByZXNldE5hbWUgPSBnbG9iYWxQcmVzZXROYW1lO1xuICAgICAgICB0aGlzLnVwZGF0ZUFwcGxpZWRQcmVzZXRDb250ZXh0KCk7XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5leGVjQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGhvc3RVcGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVBcHBsaWVkUHJlc2V0Q29udGV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBleGVjQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5jYWxsYmFjaz8uKHtcbiAgICAgIHByZXNldE5hbWU6IHRoaXMuYXBwbGllZFByZXNldE5hbWUsXG4gICAgfSBhcyBBcHBsaWVkUHJlc2V0Q29udGV4dCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUFwcGxpZWRQcmVzZXRDb250ZXh0KCkge1xuICAgIGxldCB1cGRhdGVkID0gZmFsc2U7XG4gICAgY29uc3QgbmV3UHJlc2V0TmFtZSA9ICh0aGlzLmhvc3QgYXMgYW55KS5hcHBsaWVkUHJlc2V0ID8/IHRoaXMuYWN0aXZlR2xvYmFsUHJlc2V0TmFtZTtcbiAgICBpZiAobmV3UHJlc2V0TmFtZSAhPT0gdGhpcy5hcHBsaWVkUHJlc2V0TmFtZSkge1xuICAgICAgdGhpcy5hcHBsaWVkUHJlc2V0TmFtZSA9IG5ld1ByZXNldE5hbWU7XG4gICAgICB1cGRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgIHRoaXMuZXhlY0NhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVByZXNldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGllZFByZXNldE5hbWU7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IExpdEVsZW1lbnQsIFByb3BlcnR5VmFsdWVNYXAsIFJlYWN0aXZlRWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBpc1NzciB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbnR5cGUgVXBkYXRlSGFuZGxlciA9IChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVNYXA8YW55PikgPT4gdm9pZDtcblxuaW50ZXJmYWNlIE9uVXBkYXRlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBJZiB0cnVlLCB3aWxsIG9ubHkgc3RhcnQgd2F0Y2hpbmcgYWZ0ZXIgdGhlIGluaXRpYWwgdXBkYXRlL3JlbmRlclxuICAgKi9cbiAgd2FpdFVudGlsRmlyc3RVcGRhdGU/OiBib29sZWFuO1xuXG4gIC8qKiBEZXRlcm1pbmVzIHdoZXJlIHRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkLiBEZWZhdWx0cyB0byBgY2xpZW50YC4gKi9cbiAgb24/OiAnY2xpZW50JyB8ICdzc3InIHwgJ2JvdGgnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25VcGRhdGUocHJvcE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgb3B0aW9ucz86IE9uVXBkYXRlT3B0aW9ucykge1xuICBjb25zdCByZXNvbHZlZE9wdGlvbnM6IFJlcXVpcmVkPE9uVXBkYXRlT3B0aW9ucz4gPSB7XG4gICAgd2FpdFVudGlsRmlyc3RVcGRhdGU6IGZhbHNlLFxuICAgIG9uOiAnY2xpZW50JyxcbiAgICAuLi5vcHRpb25zLFxuICB9O1xuICByZXR1cm4gPEVsZW1DbGFzcyBleHRlbmRzIExpdEVsZW1lbnQ+KHByb3RvOiBFbGVtQ2xhc3MsIGRlY29yYXRlZEZuTmFtZTogUHJvcGVydHlLZXkpID0+IHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0tIHVwZGF0ZSBpcyBhIHByb3RlY3RlZCBwcm9wZXJ0eVxuICAgIGNvbnN0IHsgd2lsbFVwZGF0ZSB9ID0gcHJvdG87XG4gICAgY29uc3QgX3Byb3BOYW1lcyA9IEFycmF5LmlzQXJyYXkocHJvcE5hbWVzKSA/IHByb3BOYW1lcyA6IFtwcm9wTmFtZXNdO1xuICAgIGNvbnN0IHByb3BOYW1lS2V5cyA9IF9wcm9wTmFtZXMgYXMgKGtleW9mIEVsZW1DbGFzcylbXTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0tIHVwZGF0ZSBpcyBhIHByb3RlY3RlZCBwcm9wZXJ0eVxuICAgIHByb3RvLndpbGxVcGRhdGUgPSBmdW5jdGlvbiAodGhpczogRWxlbUNsYXNzLCBjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVNYXA8YW55Pikge1xuICAgICAgaWYgKHByb3BOYW1lS2V5cy5zb21lKChrZXkpID0+IGNoYW5nZWRQcm9wcy5oYXMoa2V5KSkpIHtcbiAgICAgICAgaWYgKCFyZXNvbHZlZE9wdGlvbnMud2FpdFVudGlsRmlyc3RVcGRhdGUgfHwgKHRoaXMgYXMgdW5rbm93biBhcyBMaXRFbGVtZW50KS5oYXNVcGRhdGVkKSB7XG4gICAgICAgICAgY29uc3Qgc3NyID0gaXNTc3IoKTtcbiAgICAgICAgICBpZiAocmVzb2x2ZWRPcHRpb25zLm9uID09PSAnY2xpZW50JyAmJiAhc3NyKSB7XG4gICAgICAgICAgICAodGhpc1tkZWNvcmF0ZWRGbk5hbWVdIGFzIHVua25vd24gYXMgVXBkYXRlSGFuZGxlcikoY2hhbmdlZFByb3BzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc29sdmVkT3B0aW9ucy5vbiA9PT0gJ3NzcicgJiYgc3NyKSB7XG4gICAgICAgICAgICAodGhpc1tkZWNvcmF0ZWRGbk5hbWVdIGFzIHVua25vd24gYXMgVXBkYXRlSGFuZGxlcikoY2hhbmdlZFByb3BzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc29sdmVkT3B0aW9ucy5vbiA9PT0gJ2JvdGgnKSB7XG4gICAgICAgICAgICAodGhpc1tkZWNvcmF0ZWRGbk5hbWVdIGFzIHVua25vd24gYXMgVXBkYXRlSGFuZGxlcikoY2hhbmdlZFByb3BzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHdpbGxVcGRhdGUuY2FsbCh0aGlzLCBjaGFuZ2VkUHJvcHMpO1xuICAgIH07XG4gIH07XG59XG4iLCAiaW1wb3J0IHsgaXNTc3IgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50T3B0aW9ucyB7XG4gIC8qKiBpbmRpY2F0ZSBpZiBldmVudCBidWJibGVzIHVwIHRocm91Z2ggdGhlIERPTSBvciBub3QgKi9cbiAgYnViYmxlcz86IGJvb2xlYW47XG4gIC8qKiBpbmRpY2F0ZSBpZiBldmVudCBpcyBjYW5jZWxhYmxlICovXG4gIGNhbmNlbGFibGU/OiBib29sZWFuO1xuICAvKiogaW5kaWNhdGUgaWYgZXZlbnQgY2FuIGJ1YmJsZSBhY3Jvc3MgdGhlIGJvdW5kYXJ5IGJldHdlZW4gdGhlIHNoYWRvdyBET00gYW5kIHRoZSBsaWdodCBET00gKi9cbiAgY29tcG9zZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgRXZlbnRFbWl0dGVyPFQ+IHtcbiAgcHJpdmF0ZSBldmVudE5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhcmdldDogSFRNTEVsZW1lbnQsIGV2ZW50TmFtZTogc3RyaW5nKSB7XG4gICAgLy8gU2FuaXR5IGNoZWNrIHRvIGNhbGwgb3V0IGltcHJvcGVybHkgcHJlZml4ZWQgZXZlbnQgZW1pdHRlcnNcbiAgICB0cnkge1xuICAgICAgaWYgKGV2ZW50TmFtZT8uWzBdICE9PSAnXycpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgJHt0YXJnZXQudGFnTmFtZX06IEV2ZW50RW1pdHRlciBwcm9wZXJ0eSBmb3IgXCIke2V2ZW50TmFtZX1cIiBtdXN0IGJlIHByZWZpeGVkIHdpdGggXCJfXCJgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfVxuICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lLnJlcGxhY2UoL15fLywgJycpO1xuICB9XG5cbiAgLyoqIERpc3BhdGNoZXMgdGhlIGN1c3RvbSBldmVudC4gSWYgdGhlIGV2ZW50IGlzIGBjYW5jZWxhYmxlYCBhbmQgaXMgcHJldmVudGVkIHRoaXMgd2lsbCByZXR1cm4gZmFsc2UuICovXG4gIGVtaXQodmFsdWU6IFQsIG9wdGlvbnM/OiBFdmVudE9wdGlvbnMpOiBib29sZWFuIHtcbiAgICAvLyBUT0RPKHJlZWNlKTogcmVtb3ZlIHdoZW4gZXZlbnRzIGFyZSBzdXBwb3J0ZWQgZHVyaW5nIFNTUlxuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudDxUPih0aGlzLmV2ZW50TmFtZSwge1xuICAgICAgICAgIGRldGFpbDogdmFsdWUsXG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgICAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbi8vIExlZ2FjeSBUUyBEZWNvcmF0b3JcbmZ1bmN0aW9uIGxlZ2FjeUV2ZW50KFxuICBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHByb3RvT3JEZXNjcmlwdG9yOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgbmFtZTogUHJvcGVydHlLZXlcbikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG9PckRlc2NyaXB0b3IsIG5hbWUsIGRlc2NyaXB0b3IpO1xufVxuXG4vLyBUQzM5IERlY29yYXRvcnMgcHJvcG9zYWxcbmZ1bmN0aW9uIHN0YW5kYXJkRXZlbnQoZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLCBlbGVtZW50OiB7IGtleTogc3RyaW5nIH0pIHtcbiAgcmV0dXJuIHtcbiAgICBraW5kOiAnbWV0aG9kJyxcbiAgICBwbGFjZW1lbnQ6ICdwcm90b3R5cGUnLFxuICAgIGtleTogZWxlbWVudC5rZXksXG4gICAgZGVzY3JpcHRvcixcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50RW1pdHRlcigpIHtcbiAgcmV0dXJuIChwcm90b09yRGVzY3JpcHRvcjogYW55LCBuYW1lOiBzdHJpbmcpOiBhbnkgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB7XG4gICAgICBnZXQodGhpczogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEVtaXR0ZXIodGhpcywgbmFtZSAhPT0gdW5kZWZpbmVkID8gbmFtZSA6IHByb3RvT3JEZXNjcmlwdG9yLmtleSk7XG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5hbWUgIT09IHVuZGVmaW5lZFxuICAgICAgPyBsZWdhY3lFdmVudChkZXNjcmlwdG9yLCBwcm90b09yRGVzY3JpcHRvciwgbmFtZSlcbiAgICAgIDogc3RhbmRhcmRFdmVudChkZXNjcmlwdG9yLCBwcm90b09yRGVzY3JpcHRvcik7XG4gIH07XG59XG4iLCAiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9iYXNlLmpzJztcbi8qKlxuICogSXRlbXMgaW4gdGhpcyBmaWxlIGFyZSBtb2RpZmljYXRpb25zIG9mIG9mIHRoZSBkZWNvcmF0b3JzIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9ibG9iL21haW4vcGFja2FnZXMvcmVhY3RpdmUtZWxlbWVudC9zcmMvZGVjb3JhdG9ycy9jdXN0b20tZWxlbWVudC50c1xuICpcbiAqIFdlJ3ZlIGFkZGVkIGNoZWNrcyB0byBwcmV2ZW50IHJlLXJlZ2lzdHJhdGlvbnMgZnJvbSB0aHJvd2luZyBoYXJkIGVycm9ycy5cbiAqL1xuXG4vKipcbiAqIEFsbG93IGZvciBjdXN0b20gZWxlbWVudCBjbGFzc2VzIHdpdGggcHJpdmF0ZSBjb25zdHJ1Y3RvcnNcbiAqL1xudHlwZSBDdXN0b21FbGVtZW50Q2xhc3MgPSBPbWl0PHR5cGVvZiBIVE1MRWxlbWVudCwgJ25ldyc+O1xuXG5leHBvcnQgdHlwZSBDdXN0b21FbGVtZW50RGVjb3JhdG9yID0ge1xuICAvLyBsZWdhY3lcbiAgKGNsczogQ3VzdG9tRWxlbWVudENsYXNzKTogdm9pZDtcblxuICAvLyBzdGFuZGFyZFxuICAodGFyZ2V0OiBDdXN0b21FbGVtZW50Q2xhc3MsIGNvbnRleHQ6IENsYXNzRGVjb3JhdG9yQ29udGV4dDxDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD4+KTogdm9pZDtcbn07XG5cbi8qKlxuICogQ2xhc3MgZGVjb3JhdG9yIGZhY3RvcnkgdGhhdCBkZWZpbmVzIHRoZSBkZWNvcmF0ZWQgY2xhc3MgYXMgYSBjdXN0b20gZWxlbWVudC5cbiAqXG4gKiBgYGBqc1xuICogQGN1c3RvbUVsZW1lbnQoJ215LWVsZW1lbnQnKVxuICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBgO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqIEBwYXJhbSB0YWdOYW1lIFRoZSB0YWcgbmFtZSBvZiB0aGUgY3VzdG9tIGVsZW1lbnQgdG8gZGVmaW5lLlxuICovXG5leHBvcnQgY29uc3QgZGVmaW5lRWxlbWVudCA9XG4gICh0YWdOYW1lOiBzdHJpbmcpOiBDdXN0b21FbGVtZW50RGVjb3JhdG9yID0+XG4gIChcbiAgICBjbGFzc09yVGFyZ2V0OiBDdXN0b21FbGVtZW50Q2xhc3MgfCBDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD4sXG4gICAgY29udGV4dD86IENsYXNzRGVjb3JhdG9yQ29udGV4dDxDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD4+XG4gICkgPT4ge1xuICAgIGlmIChjb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIoKCkgPT4ge1xuICAgICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldD8uKHRhZ05hbWUpKSB7XG4gICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXNzT3JUYXJnZXQgYXMgQ3VzdG9tRWxlbWVudENvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0Py4odGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXNzT3JUYXJnZXQgYXMgQ3VzdG9tRWxlbWVudENvbnN0cnVjdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0KFtkZW5zaXR5PWNvbXBhY3RdKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHhzKTstLW10ZS1zcGFjZS14czp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14cyk7LS1tdGUtc3BhY2Utc206dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3Qtc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LW1kKTstLW10ZS1zcGFjZS1sZzp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1sZyk7LS1tdGUtc3BhY2UteGw6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eGwpOy0tbXRlLXNwYWNlLXh4eGw6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHh4bCl9Omhvc3QoW2RlbnNpdHk9Y29tZnldKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2UtY29tZnktc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1jb21meS1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1jb21meS14eHhsKX06aG9zdChbZGVuc2l0eT1yb29teV0pey0tbXRlLXNwYWNlLXh4czp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHhzKTstLW10ZS1zcGFjZS14czp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHMpOy0tbXRlLXNwYWNlLXNtOnZhcigtLW10ZS1zcGFjZS1yb29teS1zbSk7LS1tdGUtc3BhY2UtbWQ6dmFyKC0tbXRlLXNwYWNlLXJvb215LW1kKTstLW10ZS1zcGFjZS1sZzp2YXIoLS1tdGUtc3BhY2Utcm9vbXktbGcpOy0tbXRlLXNwYWNlLXhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14bCk7LS1tdGUtc3BhY2UteHhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14eGwpOy0tbXRlLXNwYWNlLXh4eGw6dmFyKC0tbXRlLXNwYWNlLXJvb215LXh4eGwpfWA7IiwgImltcG9ydCB7IExpdEVsZW1lbnQsIFByb3BlcnR5VmFsdWVzIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi8nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEaXNhYmxlZEludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGlzIGNvbXBvbmVudFxuICAgKiBAYXR0ciBkaXNhYmxlZFxuICAgKi9cbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBEaXNhYmxlZE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBEaXNhYmxlZEVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBhdHRyIGRpc2FibGVkXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLy8gQmVjYXVzZSBgYXJpYURpc2FibGVkYCBleGlzdHMgYXMgYSBzdHJpbmcgb24gTGl0RWxlbWVudCB3ZSBjYW5ub3QgZGVjbGFyZSB0aGlzIGEgcHJvcGVydHkgaGVyZVxuICAgIHByb3RlY3RlZCB3aWxsVXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXM8YW55Pik6IHZvaWQge1xuICAgICAgc3VwZXIud2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAoX2NoYW5nZWRQcm9wZXJ0aWVzLmhhcygnZGlzYWJsZWQnKSkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgYCR7dGhpcy5kaXNhYmxlZH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBEaXNhYmxlZEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8RGlzYWJsZWRJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IHByZXNldFByb3BlcnR5IH0gZnJvbSAnLi4vcHJlc2V0cy9wcmVzZXQuZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW52ZXJzZUludGVyZmFjZSB7XG4gIC8qKiBSZW5kZXJzIHRoaXMgY29tcG9uZW50IHdpdGggaW52ZXJzZSB0aGVtaW5nICovXG4gIGludmVyc2U6IGJvb2xlYW47XG5cbiAgLyoqIFNwZWNpYWwgb3B0aW9uIHRvIG92ZXJyaWRlIGludmVyc2Ugd2hlbiBpdCBpcyBzZXQgYnkgYSBwcmVzZXQgKi9cbiAgd2l0aG91dEludmVyc2U6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBJbnZlcnNlTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPExpdEVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIEludmVyc2VFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqIFJlbmRlcnMgdGhpcyBjb21wb25lbnQgd2l0aCBpbnZlcnNlIHRoZW1pbmcgKi9cbiAgICBAcHJlc2V0UHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGludmVyc2UgPSBmYWxzZTtcblxuICAgIC8qKiBTcGVjaWFsIG9wdGlvbiB0byBvdmVycmlkZSBpbnZlcnNlIHdoZW4gaXQgaXMgc2V0IGJ5IGEgcHJlc2V0ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRob3V0SW52ZXJzZSA9IGZhbHNlO1xuICB9XG4gIHJldHVybiBJbnZlcnNlRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxJbnZlcnNlSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdChbaW52ZXJzZV06bm90KFt3aXRob3V0SW52ZXJzZV0pKXstLW10ZS1zdXJmYWNlLTE6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS0xLXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtc3VyZmFjZS0yOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tbXRlLXN1cmZhY2UtMi1yZ2I6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpOy0tbXRlLXN1cmZhY2UtMzp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlKTstLW10ZS1zdXJmYWNlLTMtcmdiOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UtcmdiKTstLW10ZS1zdXJmYWNlLTQ6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS00LXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtaW5rLTE6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMS1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTI6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMi1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTM6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMy1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTQ6dmFyKC0tbXRlLWJsYWNrKTstLW10ZS1pbmstNC1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1tdGUtaW5rLTU6dmFyKC0tbXRlLWJsYWNrKTstLW10ZS1pbmstNS1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1tdGUtYm9yZGVyLTE6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMS1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtYm9yZGVyLTI6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMi1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtYm9yZGVyLTM6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMy1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtZGlzYWJsZWQtMTp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0xKTstLW10ZS1kaXNhYmxlZC0xLXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0xLXJnYik7LS1tdGUtZGlzYWJsZWQtMjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0yKTstLW10ZS1kaXNhYmxlZC0yLXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0yKTstLW10ZS1kaXNhYmxlZC0zOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMpOy0tbXRlLWRpc2FibGVkLTMtcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMtcmdiKTstLW10ZS1kaXNhYmxlZC00OnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMpOy0tbXRlLWRpc2FibGVkLTQtcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTEtZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMS1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0yLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1pdC1zdXJmYWNlLTMtZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0zLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTMtYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMy1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1saWdodDp2YXIoLS1tdGUtd2hpdGUpOy0tbXRlLWxpZ2h0LXJnYjp2YXIoLS1tdGUtd2hpdGUtcmdiKTstLW10ZS1kYXJrOnZhcigtLW10ZS1ibGFjayk7LS1tdGUtZGFyay1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1idXR0b24tZmlsbGVkLWJnOnZhcigtLW10ZS13aGl0ZSk7LS1idXR0b24tZmlsbGVkLWluazp2YXIoLS1tdGUtYmxhY2spOy0tYnV0dG9uLWZpbGxlZC1hY3RpdmUtYmc6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWluazp2YXIoLS1tdGUtd2hpdGUpfWA7IiwgImltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50IH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IHByZXNldFByb3BlcnR5IH0gZnJvbSAnLi4vcHJlc2V0cy9wcmVzZXQuZGVjb3JhdG9yJztcbmltcG9ydCB7IFByZXNldEVsZW1lbnRJbnRlcmZhY2UgfSBmcm9tICcuLi9wcmVzZXRzL3ByZXNldC5taXhpbic7XG5cbmV4cG9ydCB0eXBlIFNpemVPcHRpb25zID0gJ21kJyB8ICd4cycgfCAnc20nIHwgJ2xnJyB8ICd4bCcgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNpemVJbnRlcmZhY2Uge1xuICAvKipcbiAgICogQWRqdXN0cyB0aGUgc2NhbGUgb2YgdGhpcyBjb21wb25lbnRcbiAgICogQGF0dHIgc2l6ZVxuICAgKi9cbiAgc2l6ZTogU2l6ZU9wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBTaXplTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQgJiBQYXJ0aWFsPFByZXNldEVsZW1lbnRJbnRlcmZhY2U8YW55Pj4+PihcbiAgc3VwZXJDbGFzczogVFxuKSA9PiB7XG4gIGNsYXNzIFNpemVFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgc2NhbGUgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBzaXplXG4gICAgICovXG4gICAgQHByZXNldFByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBzaXplOiBTaXplT3B0aW9ucztcbiAgfVxuICByZXR1cm4gU2l6ZUVsZW1lbnQgYXMgQ29uc3RydWN0b3I8U2l6ZUludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgb25VcGRhdGUgfSBmcm9tICcuLi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IERpc2FibGVkSW50ZXJmYWNlIH0gZnJvbSAnLi9kaXNhYmxlZC5taXhpbic7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IGlzU3NyIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGFiSW5kZXhJbnRlcmZhY2Uge1xuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHRhYmluZGV4IGF0dHJpYnV0ZSB2YWx1ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGdldFRhYkluZGV4QWRhcHRlcigpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byBzZXQgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBvbiBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzZXRUYWJJbmRleEFkYXB0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byByZW1vdmUgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlbW92ZVRhYkluZGV4QWRhcHRlcigpOiB2b2lkO1xufVxuXG4vKipcbiAqIE1peGluIHRvIHByb3Blcmx5IG1hbmFnZSB0aGUgdGFiaW5kZXggaW4gYSBub24taW50cnVzaXZlIHdheS4gV2hlbiBkaXNhYmxlZCBpcyB0cnVlLFxuICogdGhlIHRhYmluZGV4IHdpbGwgQUxXQVlTIGJlIGAtMWAuIEhvd2V2ZXIsIGFueSBjaGFuZ2VzIHRvIHRhYmluZGV4IHdpbGwgYmUgaW50ZXJjZXB0ZWRcbiAqIGFuZCBjYWNoZWQgaW50ZXJuYWxseSB1bnRpbCBkaXNhYmxlZCBpcyBmYWxzZSwgdGhlbiB0YWJpbmRleCB3aWxsIGJlIHJlc3RvcmVkIHRvIHRoZVxuICogY2FjaGVkIHZhbHVlLCBvciByZW1vdmVkIGlmIHRoYXQgaXMgdW5kZWZpbmVkLlxuICovXG5leHBvcnQgY29uc3QgVGFiSW5kZXhNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudCAmIERpc2FibGVkSW50ZXJmYWNlPj4oXG4gIHN1cGVyQ2xhc3M6IFQsXG4gIG9wdGlvbnM6IHsgaW5pdGlhbFRhYkluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQgfSA9IHsgaW5pdGlhbFRhYkluZGV4OiB1bmRlZmluZWQgfVxuKSA9PiB7XG4gIGNsYXNzIFRhYkluZGV4RWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ3RhYmluZGV4JywgdHlwZTogTnVtYmVyLCBub0FjY2Vzc29yOiB0cnVlIH0pXG4gICAgcHVibGljIG92ZXJyaWRlIHNldCB0YWJJbmRleCh0YWJJbmRleDogbnVtYmVyKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAvLyBXaGVuIHNldHRpbmcgdGhlIHRhYkluZGV4IG9uIHRoZSBjdXJyZW50IGVsZW1lbnQgdG8gYC0xYCBkaXNhYmxlZCwgd2Ugd2FudCB0byBrZWVwIHRyYWNrIG9mIHdoYXQgdGhlIHRhYkluZGV4IHZhbHVlIGJlZm9yZSB0aGF0IHdhc1xuICAgICAgICAvLyBhcyB0aGUgY2FjaGVkVGFiSW5kZXguIFRvIGRvIHRoaXMgd2UgbXVzdCBpZ25vcmUgdGhlIGluaXRpYWwgY2hhbmdlIHRvIGAtMWAgYW5kIHRoZW4gY2FjaGUgYW55IGZ1dHVyZSB2YWx1ZXMgYmVmb3JlIGtlZXBpbmcgdGhlXG4gICAgICAgIC8vIHRhYkluZGV4IGFzIGAtMWAgdW50aWwgbm8gbG9uZ2VyIGRpc2FibGVkLiBUaGVuIHdlIGNhbiByZXR1cm4gdGhlIHRhYkluZGV4IHRvIHdoYXRldmVyIHRoZSBsYXN0IHNldCB2YWx1ZSB3YXMgZnJvbSB0aGUgY2FjaGVkIGluZGV4LlxuICAgICAgICBpZiAoIXRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSkge1xuICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcignLTEnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoYCR7dGhpcy5fdGFiSW5kZXh9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgdGFiSW5kZXgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGFiSW5kZXg7XG4gICAgfVxuICAgIHByaXZhdGUgX3RhYkluZGV4ID0gb3B0aW9ucz8uaW5pdGlhbFRhYkluZGV4O1xuICAgIHByaXZhdGUgX2NhY2hlZFRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IGZhbHNlO1xuXG4gICAgQG9uVXBkYXRlKFsnZGlzYWJsZWQnXSwgeyBvbjogJ2JvdGgnIH0pXG4gICAgcHJpdmF0ZSBoYW5kbGVUYWJpbmRleENoYW5nZShjaGFuZ2VkUHJvcHMpIHtcbiAgICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIGlmIChjaGFuZ2VkUHJvcHMuZ2V0KCdkaXNhYmxlZCcpID09PSBmYWxzZSAmJiB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSBOdW1iZXIodGhpcy5nZXRUYWJJbmRleEFkYXB0ZXIoKSk7XG4gICAgICAgICAgdGhpcy5fdGFiSW5kZXggPSAtMTtcbiAgICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcignLTEnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2VkUHJvcHMuZ2V0KCdkaXNhYmxlZCcpID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2NhY2hlZFRhYkluZGV4ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fY2FjaGVkVGFiSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYkluZGV4ID0gdGhpcy5fY2FjaGVkVGFiSW5kZXg7XG4gICAgICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl9jYWNoZWRUYWJJbmRleH1gKTtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZWRUYWJJbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byByZXRyaWV2ZSB0aGUgY3VycmVudCB0YWJpbmRleCBhdHRyaWJ1dGUgdmFsdWUgZnJvbSBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudCAqL1xuICAgIGdldFRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHNldCB0aGUgdGFiaW5kZXggYXR0cmlidXRlIG9uIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50ICovXG4gICAgc2V0VGFiSW5kZXhBZGFwdGVyKHZhbHVlOiBzdHJpbmcsIHNob3VsZFByZXZlbnRUYWJJbmRleENoYW5nZU9uU2VsZiA9IGZhbHNlKSB7XG4gICAgICBpZiAoc2hvdWxkUHJldmVudFRhYkluZGV4Q2hhbmdlT25TZWxmKSB7XG4gICAgICAgIHRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byByZW1vdmUgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50ICovXG4gICAgcmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgd2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgc3VwZXIud2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChpc1NzcigpICYmIHRoaXMuX3RhYkluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoYCR7dGhpcy5fdGFiSW5kZXh9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAodGhpcy5fdGFiSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl90YWJJbmRleH1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFRhYkluZGV4RWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxUYWJJbmRleEludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBDb25zdHJ1Y3RvciwgTXRlRWxlbWVudCB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBwcmVzZXRQcm9wZXJ0eSB9IGZyb20gJy4uL3ByZXNldHMvcHJlc2V0LmRlY29yYXRvcic7XG5pbXBvcnQgeyBQcmVzZXRFbGVtZW50SW50ZXJmYWNlIH0gZnJvbSAnLi4vcHJlc2V0cy9wcmVzZXQubWl4aW4nO1xuXG5leHBvcnQgdHlwZSBSYWRpdXNPcHRpb25zID0gJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ25vbmUnIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSYWRpdXNJbnRlcmZhY2Uge1xuICAvKipcbiAgICogQWRqdXN0cyB0aGUgYm9yZGVyLXJhZGl1cyBvZiB0aGlzIGNvbXBvbmVudFxuICAgKiBAYXR0ciByYWRpdXNcbiAgICovXG4gIHJhZGl1czogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IFJhZGl1c01peGluID0gPFxuICBUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudCAmIFBhcnRpYWw8UHJlc2V0RWxlbWVudEludGVyZmFjZTxhbnk+Pj5cbj4oXG4gIHN1cGVyQ2xhc3M6IFRcbikgPT4ge1xuICBjbGFzcyBSYWRpdXNFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgYm9yZGVyLXJhZGl1cyBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBhdHRyIHJhZGl1c1xuICAgICAqL1xuICAgIEBwcmVzZXRQcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgcmFkaXVzOiBSYWRpdXNPcHRpb25zO1xuICB9XG4gIHJldHVybiBSYWRpdXNFbGVtZW50IGFzIENvbnN0cnVjdG9yPFJhZGl1c0ludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50LCBTdHlsZU1hcCB9IGZyb20gJy4uJztcbmltcG9ydCB7IHNlbGVjdG9yRmFjdG9yeSB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBNdGVFbGVtZW50UGFydHMge1xuICAvKiogVGhlIGhvc3QgZWxlbWVudCBcInBhcnRcIi4gT3ZlcnJpZGVzIHRoZSBgc2VgIHByb3BlcnR5IG9mIHRoaXMgZWxlbWVudCAqL1xuICBob3N0PzogU3R5bGVNYXA7XG59XG5cbmV4cG9ydCB0eXBlIFN0eWxlUGFydHNNYXA8VCA9IHN0cmluZyB8IG51bWJlcj4gPSB7XG4gIFtuYW1lOiBzdHJpbmddOiBTdHlsZU1hcDxUPjtcbn07XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0eWxlUGFydHNJbnRlcmZhY2U8U3R5bGVQYXJ0cz4ge1xuICAvKipcbiAgICogU3R5bGUgbWFwcGluZ3MgdGhhdCBhcmUgYXBwbGllZCB0byBlYWNoIGNzcyBwYXJ0IGJ5IG5hbWUuIFNldCB0aGVcbiAgICogcHJvcGVydHkgYGhvc3RgIHRvIGFwcGx5IGEgYFN0eWxlSW5mb2Agb2JqZWN0IHRvIHRoZSBlbGVtZW50IGhvc3QgaXRzZWxmLlxuICAgKi9cbiAgc3A/OiBTdHlsZVBhcnRzO1xufVxuXG5leHBvcnQgY29uc3QgU3R5bGVQYXJ0c01peGluID0gPFN0eWxlUGFydHMsIFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBTdHlsZVBhcnRzRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIFN0eWxlIG1hcHBpbmdzIHRoYXQgYXJlIGFwcGxpZWQgdG8gZWFjaCBjc3MgcGFydCBieSBuYW1lLiBTZXQgdGhlXG4gICAgICogcHJvcGVydHkgYGhvc3RgIHRvIGFwcGx5IGEgYFN0eWxlSW5mb2Agb2JqZWN0IHRvIHRoZSBlbGVtZW50IGhvc3QgaXRzZWxmLlxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgcmVmbGVjdDogdHJ1ZSB9KSBzcDogU3R5bGVQYXJ0cztcblxuICAgIHByb3RlY3RlZCB1cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpIHtcbiAgICAgIHN1cGVyLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKCdzcCcpKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuc3AgPz8gKHt9IGFzIFN0eWxlUGFydHMpKS5mb3JFYWNoKChbcGFydCwgc3R5bGVNYXBdKSA9PiB7XG4gICAgICAgICAgLy8gRG91YmxlIHRoZSBgOmhvc3RgIHNlbGVjdG9yIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5IGJleW9uZCBtb3N0IGNvbXBvbmVudCBsZXZlbCBzdHlsZXMgYnkgZGVmYXVsdFxuICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0b3JGYWN0b3J5KFxuICAgICAgICAgICAgcGFydCA9PT0gJ2hvc3QnXG4gICAgICAgICAgICAgID8gJzpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCdcbiAgICAgICAgICAgICAgOiBgOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0OjpwYXJ0KCR7cGFydH0pYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zZXRJbnN0YW5jZVN0eWxlKGBzcC0ke3BhcnR9YCwgc2VsZWN0b3IsIHN0eWxlTWFwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFN0eWxlUGFydHNFbGVtZW50IGFzIENvbnN0cnVjdG9yPFN0eWxlUGFydHNJbnRlcmZhY2U8U3R5bGVQYXJ0cz4+ICYgVDtcbn07XG4iLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlfSNhbmNob3J7aW5zZXQ6MDtwb3NpdGlvbjphYnNvbHV0ZX1gOyIsICJpbXBvcnQgeyBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBDbGlja091dHNpZGVDb250cm9sbGVyLFxuICBDb25zdHJ1Y3RvcixcbiAgRXZlbnRFbWl0dGVyLFxuICBGb2N1c1RyYXBDb250cm9sbGVyLFxuICBNdGVFbGVtZW50LFxuICBQb3J0YWxBZGFwdGVyLFxuICBQb3J0YWxDb250cm9sbGVyLFxuICBkZWZhdWx0UG9ydGFsQWRhcHRlcixcbiAgZXZlbnRFbWl0dGVyLFxuICBpc1Nzcixcbn0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgUHJvcGVydHlWYWx1ZU1hcCB9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE92ZXJsYXlJbnRlcmZhY2Uge1xuICAvKipcbiAgICogVXBkYXRlcyB0aGUgb3ZlcmxheSBzdGF0ZSBvbiB0aGUgb3ZlcmxheSBtaXhpbi4gQnkgZGVmYXVsdCBhbGwgb3B0aW9ucyBhcmUgc2V0IHRvIHRydWUgaW5pdGlhbGx5LlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgc2V0T3ZlcmxheU9wdGlvbnMob3B0aW9uczoge1xuICAgIHdpdGhDbG9zZU9uQ2xpY2tPdXRzaWRlPzogYm9vbGVhbjtcbiAgICB3aXRoQ2xvc2VPbkVzY2FwZT86IGJvb2xlYW47XG4gICAgd2l0aEZvY3VzVHJhcD86IGJvb2xlYW47XG4gICAgd2l0aFBvcnRhbD86IGJvb2xlYW47XG4gICAgd2l0aERpbUJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICB3aXRoSW5lcnRCYWNrZHJvcD86IGJvb2xlYW47XG4gICAgd2l0aFNjcm9sbExvY2s/OiBib29sZWFuO1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uPzogbnVtYmVyO1xuICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuICAgIHJldHVyblRvT3JpZ2luT25DbG9zZT86IGJvb2xlYW47XG4gICAgZm9jdXNUcmFwVGFyZ2V0PzogRWxlbWVudDtcbiAgfSk6IHVua25vd247XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBvdmVybGF5IHNob3VsZCBvcGVuLiBDYW4gYWRkIGEgbGlzdGVuZXIgZm9yIG91dHNpZGUgY2xpY2tzLCBwb3J0YWwgYW4gZWxlbWVudCxcbiAgICogYW5kIHByZXZlbnQgdGhlIGJvZHkgZnJvbSBzY3JvbGxpbmcgdXBvbiBvcGVuLlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgaGFuZGxlT3ZlcmxheU9wZW4ob3B0aW9ucz86IHtcbiAgICBjbGlja091dHNpZGVFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG4gICAgd2lsbE9wZW4/OiAoKSA9PiB2b2lkO1xuICB9KTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIGFmdGVyIHRoZSBvdmVybGF5IGhhcyBiZWVuIG9wdGlvbmFsbHkgcG9ydGFsZWQgYW5kL29yIGFsbCBhbmltYXRpb25zIGhhdmUgZmluaXNoZWQuXG4gICAqL1xuICBoYW5kbGVPdmVybGF5T3BlbkVuZCgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgb3ZlcmxheSBlbGVtZW50IHNob3VsZCBjbG9zZS4gQ2FuIHN0b3AgbGlzdGVuaW5nIGZvciBvdXRzaWRlIGNsaWNrcywgcmVsZWFzZSBhLFxuICAgKiBmb2N1cyB0cmFwLCBhbmQgYWxsb3cgdGhlIGJvZHkgZWxlbWVudCB0byBzY3JvbGwgYWdhaW4uXG4gICAqL1xuICBoYW5kbGVPdmVybGF5Q2xvc2UoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIG92ZXJsYXkgZWxlbWVudCBoYXMgZmluaXNoZWQgY2xvc2luZyBhbmQvb3IgYWxsIGFuaW1hdGlvbnMgaGF2ZSBjb21wbGV0ZWQuIENhblxuICAgKiByZW1vdmUgYW4gZWxlbWVudCBmcm9tIHRoZSBwb3J0YWwuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBoYW5kbGVPdmVybGF5Q2xvc2VFbmQob3B0aW9ucz86IHsgcmVtb3ZlRnJvbUVsZW1lbnQ/OiBIVE1MRWxlbWVudCB9KTogUHJvbWlzZTx2b2lkPjtcblxuICBvcGVuKCk6IFByb21pc2U8dm9pZD47XG5cbiAgY2xvc2UoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogVGhlIHRhYiBpbmRleCBmb3IgdGhpcyBlbGVtZW50XG4gICAqL1xuICB0YWJpbmRleDogbnVtYmVyO1xuXG4gIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBvcGVuZWQgKi9cbiAgX29uT3BlbjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBFbWl0dGVkIGFmdGVyIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgb3BlbmluZyAqL1xuICBfb25PcGVuRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaXMgaW5pdGlhbGx5IGNsb3NpbmcgKi9cbiAgX29uQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgY2xvc2luZyAqL1xuICBfb25DbG9zZUVuZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBAaWdub3JlICovXG4gIHBvcnRhbEFkYXB0ZXI6IFBvcnRhbEFkYXB0ZXI7XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogVGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgb3ZlcmxheSByZWdhcmRsZXNzIG9mIGFuaW1hdGlvbnNcbiAgICovXG4gIG9wZW5lZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBJbmRpY2F0ZXMgdGhlIG92ZXJsYXkgaGFzIGJlZW4gcG9ydGFsZWQgYW5kIHJlYWR5IHRvIGFuaW1hdGVcbiAgICovXG4gIHJlYWR5Rm9yQW5pbWF0aW9uOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEluZGljYXRlcyB0aGUgb3ZlcmxheSBoYXMgYmVlbiBmdWxseSBhbmltYXRlZCBvcGVuXG4gICAqL1xuICBvcGVuZWRGdWxsOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgT3ZlcmxheU1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBPdmVybGF5RWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKiBUaGUgdGFiIGluZGV4IG9mIHRoaXMgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ3RhYmluZGV4JywgdHlwZTogTnVtYmVyIH0pIHRhYmluZGV4ID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBBZGFwdGVyIGZvciBwb3J0YWwgRE9NIG9wZXJhdGlvbiB0aGF0IGNhbiBiZSBzdXBwbGVtZW50ZWQgZm9yIGV4dGVybmFsLWZyYW1ld29yayBpbnRlZ3JhdGlvbnMuXG4gICAgICogTm90YWJseS1sZXZlcmFnZWQgYnkgb3ZlcmxheXMgaW4gb3VyIGdlbmVyYXRlZCByZWFjdCB3cmFwcGVycy5cbiAgICAgKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoKSBwb3J0YWxBZGFwdGVyOiBQb3J0YWxBZGFwdGVyID0gZGVmYXVsdFBvcnRhbEFkYXB0ZXI7XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgb3BlbmVkICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbk9wZW46IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0dGVkIGFmdGVyIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgb3BlbmluZyAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25PcGVuRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgY2xvc2VkICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgY2xvc2luZyAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25DbG9zZUVuZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgZWxlbWVudCBzaG91bGQgdXNlIGEgZm9jdXMgdHJhcCBvciBub3QgKi9cbiAgICBwcml2YXRlIF93aXRoRm9jdXNUcmFwID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IGVsZW1lbnQgc2hvdWxkIGNsb3NlIHdoZW4gYSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBlbGVtZW50ICovXG4gICAgcHJpdmF0ZSBfY2xvc2VPbkNsaWNrT3V0c2lkZSA9IHRydWU7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgY2xvc2Ugd2hlbiB0aGUgZXNjYXBlIGJ1dHRvbiBpcyBwcmVzc2VkICovXG4gICAgcHJpdmF0ZSBfY2xvc2VPbkVzY2FwZSA9IHRydWU7XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBzaG91bGQgdXNlIGEgcG9ydGFsIG9yIG5vdCAqL1xuICAgIHByaXZhdGUgX3dpdGhQb3J0YWwgPSB0cnVlO1xuXG4gICAgLyoqIFdldGhlciB0aGUgdXNlciBzaG91bGQgYmUgYWJsZSB0byBjbGljayBiZWhpbmQgdGhlIGJhY2tkcm9wIG9yIG5vdCAqL1xuICAgIHByaXZhdGUgX3dpdGhJbmVydEJhY2tkcm9wID0gZmFsc2U7XG5cbiAgICAvKiogV2V0aGVyIHRoZSBvdmVybGF5J3MgYmFja2Ryb3Agc2hvdWxkIHJlbmRlciBkaW1tZWQgKi9cbiAgICBwcml2YXRlIF93aXRoRGltQmFja2Ryb3AgPSBmYWxzZTtcblxuICAgIC8qKiBXZXRoZXIgb3Igbm90IHRoZSBlbGVtZW50IHNob3VsZCBiZSByZS1hcHBlbmRlZCB0byBpdCdzIG9yaWdpbiBwYXJlbnQgZWxlbWVudCBvbiBjbG9zZSBfaWZfIHBvcnRhbGVkLiAqL1xuICAgIHByaXZhdGUgX3JldHVyblRvT3JpZ2luT25DbG9zZSA9IGZhbHNlO1xuXG4gICAgLyoqIE9wdGlvbmFsIGJhY2tkcm9wIHRpbWluZy4gSW1wb3J0YW50IHBhcnRpY3VsYXJseSBmb3Igc21vb3RoIGNsb3NlcyB3aXRoIGEgdmlzaWJsZSBiYWNrZHJvcCAqL1xuICAgIHByaXZhdGUgX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgc2hvdWxkIHByZXZlbnQgc2Nyb2xsaW5nIG9uIHRoZSBib2R5ICovXG4gICAgcHJpdmF0ZSBfd2l0aFNjcm9sbExvY2sgPSB0cnVlO1xuXG4gICAgcHJvdGVjdGVkIGZvY3VzVHJhcENvbnRyb2xsZXIgPSBuZXcgRm9jdXNUcmFwQ29udHJvbGxlcih0aGlzKTtcblxuICAgIHByb3RlY3RlZCBjbGlja091dHNpZGVDb250cm9sbGVyID0gbmV3IENsaWNrT3V0c2lkZUNvbnRyb2xsZXIodGhpcywgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl93aXRoUG9ydGFsKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2VPbkNsaWNrT3V0c2lkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcHJvdGVjdGVkIHBvcnRhbENvbnRyb2xsZXIgPSBuZXcgUG9ydGFsQ29udHJvbGxlcih0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHBhcmVudCBlbGVtZW50XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRpYWxQYXJlbnQ6IEVsZW1lbnQgfCBIVE1MRWxlbWVudCA9IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgdG8gZGV0ZWN0IGNsaWNrcyBvdXRzaWRlIG9mIHRvIGNsb3NlIHRoZSBvdmVybGF5IGVsZW1lbnQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjbGlja091dHNpZGVPdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xuXG4gICAgcHJpdmF0ZSBfb3JpZ2luUGFyZW50PzogRWxlbWVudCB8IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBfZm9jdXNUcmFwVGFyZ2V0PzogRWxlbWVudCB8IEhUTUxFbGVtZW50ID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBUaGUgb3BlbmVkIHN0YXRlIG9mIHRoZSBvdmVybGF5IHJlZ2FyZGxlc3Mgb2YgYW5pbWF0aW9uc1xuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgb3BlbmVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogSW5kaWNhdGVzIHRoZSBvdmVybGF5IGhhcyBiZWVuIHBvcnRhbGVkIGFuZCByZWFkeSB0byBhbmltYXRlXG4gICAgICovXG4gICAgQHN0YXRlKClcbiAgICBzZXQgcmVhZHlGb3JBbmltYXRpb24ocmVhZHlGb3JBbmltYXRpb246IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuX3JlYWR5Rm9yQW5pbWF0aW9uID0gcmVhZHlGb3JBbmltYXRpb247XG4gICAgfVxuICAgIGdldCByZWFkeUZvckFuaW1hdGlvbigpIHtcbiAgICAgIC8vIER1cmluZyBTU1IgcmV0dXJuIHRydWUgaW4gY2FzZSBzb21ldGhpbmcgbmVlZHMgdG8gYmUgb3BlbmVkIGluaXRpYWxseS5cbiAgICAgIHJldHVybiBpc1NzcigpID8gdHJ1ZSA6IHRoaXMuX3JlYWR5Rm9yQW5pbWF0aW9uO1xuICAgIH1cbiAgICBwcml2YXRlIF9yZWFkeUZvckFuaW1hdGlvbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqIFRoZSBvcGVuZWQgc3RhdGUgb2YgdGhlIG92ZXJsYXkgcmVnYXJkbGVzcyBvZiBhbmltYXRpb25zLiBUaGlzIGlzIHJlZmxlY3RlZCBhbmQgdXNlZCBieVxuICAgICAqIHNvbWUgb3ZlcmxheXMgdG8gcmVzdHJpY3QgdGhlaXIgc2l6ZSB3aGlsZSBoaWRkZW4uIChzaW5jZSBkaXNwbGF5OiBub25lIGJyZWFrcyBhbmltYXRpb25zKVxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgb3BlbmVkRnVsbCA9IGZhbHNlO1xuXG4gICAgc2V0T3ZlcmxheU9wdGlvbnMob3B0aW9uczoge1xuICAgICAgd2l0aENsb3NlT25DbGlja091dHNpZGU/OiBib29sZWFuO1xuICAgICAgd2l0aENsb3NlT25Fc2NhcGU/OiBib29sZWFuO1xuICAgICAgd2l0aEZvY3VzVHJhcD86IGJvb2xlYW47XG4gICAgICB3aXRoUG9ydGFsPzogYm9vbGVhbjtcbiAgICAgIHdpdGhJbmVydEJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICAgIHdpdGhEaW1CYWNrZHJvcD86IGJvb2xlYW47XG4gICAgICB3aXRoU2Nyb2xsTG9jaz86IGJvb2xlYW47XG4gICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbj86IHN0cmluZztcbiAgICAgIHJldHVyblRvT3JpZ2luT25DbG9zZT86IGJvb2xlYW47XG4gICAgICBmb2N1c1RyYXBUYXJnZXQ/OiBFbGVtZW50O1xuICAgIH0pIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgd2l0aEZvY3VzVHJhcCxcbiAgICAgICAgd2l0aENsb3NlT25DbGlja091dHNpZGUsXG4gICAgICAgIHdpdGhDbG9zZU9uRXNjYXBlLFxuICAgICAgICB3aXRoUG9ydGFsLFxuICAgICAgICB3aXRoU2Nyb2xsTG9jayxcbiAgICAgICAgd2l0aEluZXJ0QmFja2Ryb3AsXG4gICAgICAgIHdpdGhEaW1CYWNrZHJvcCxcbiAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgIHJldHVyblRvT3JpZ2luT25DbG9zZSxcbiAgICAgICAgZm9jdXNUcmFwVGFyZ2V0LFxuICAgICAgfSA9IG9wdGlvbnMgPz8ge307XG5cbiAgICAgIHRoaXMuX3dpdGhGb2N1c1RyYXAgPSB3aXRoRm9jdXNUcmFwID8/IHRoaXMuX3dpdGhGb2N1c1RyYXA7XG4gICAgICB0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlID0gd2l0aENsb3NlT25DbGlja091dHNpZGUgPz8gdGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZTtcbiAgICAgIHRoaXMuX3dpdGhTY3JvbGxMb2NrID0gd2l0aFNjcm9sbExvY2sgPz8gdGhpcy5fd2l0aFNjcm9sbExvY2s7XG4gICAgICB0aGlzLl93aXRoUG9ydGFsID0gd2l0aFBvcnRhbCA/PyB0aGlzLl93aXRoUG9ydGFsO1xuICAgICAgdGhpcy5fd2l0aEluZXJ0QmFja2Ryb3AgPVxuICAgICAgICB3aXRoSW5lcnRCYWNrZHJvcCA/PyAhdGhpcy5fd2l0aEZvY3VzVHJhcCA/PyB0aGlzLl93aXRoSW5lcnRCYWNrZHJvcDtcbiAgICAgIHRoaXMuX3dpdGhEaW1CYWNrZHJvcCA9IHdpdGhEaW1CYWNrZHJvcCA/PyB0aGlzLl93aXRoRGltQmFja2Ryb3A7XG4gICAgICB0aGlzLl9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9XG4gICAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID8/IHRoaXMuX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgdGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlID0gcmV0dXJuVG9PcmlnaW5PbkNsb3NlID8/IHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZTtcbiAgICAgIHRoaXMuX2ZvY3VzVHJhcFRhcmdldCA9IGZvY3VzVHJhcFRhcmdldCA/PyB0aGlzLl9mb2N1c1RyYXBUYXJnZXQ7XG5cbiAgICAgIGlmICh3aXRoQ2xvc2VPbkVzY2FwZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX2Nsb3NlT25Fc2NhcGUgIT09IHdpdGhDbG9zZU9uRXNjYXBlKSB7XG4gICAgICAgIGlmICh3aXRoQ2xvc2VPbkVzY2FwZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xvc2VPbkVzY2FwZSA9IHdpdGhDbG9zZU9uRXNjYXBlID8/IHRoaXMuX2Nsb3NlT25Fc2NhcGU7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aXRoRm9jdXNUcmFwID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpdGhGb2N1c1RyYXAgPT09IHRydWUgJiYgdGhpcy50YWJpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy50YWJpbmRleCA9IC0xO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZU92ZXJsYXkoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVPdmVybGF5T3BlbihvcHRpb25zPzoge1xuICAgICAgY2xpY2tPdXRzaWRlRWxlbWVudD86IEhUTUxFbGVtZW50O1xuICAgICAgd2lsbE9wZW4/OiAoKSA9PiB2b2lkO1xuICAgIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIElnbm9yZSBpZiBhbHJlYWR5IG9wZW5cbiAgICAgIGlmICh0aGlzLm9wZW5lZCB8fCB0aGlzLm9wZW5lZEZ1bGwpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgICAgY29uc3QgeyBjbGlja091dHNpZGVFbGVtZW50LCB3aWxsT3BlbiB9ID0gb3B0aW9ucyA/PyB7fTtcbiAgICAgIHdpbGxPcGVuPy4oKTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50ID0gY2xpY2tPdXRzaWRlRWxlbWVudCB8fCB0aGlzO1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIubGlzdGVuRm9yQ2xpY2tzT3V0c2lkZU9mKHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQpO1xuICAgICAgICBpZiAodGhpcy5fd2l0aFBvcnRhbCkge1xuICAgICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlclxuICAgICAgICAgICAgLmFwcGVuZFRvU3RhY2sodGhpcywge1xuICAgICAgICAgICAgICB3aXRoRGltQmFja2Ryb3A6IHRoaXMuX3dpdGhEaW1CYWNrZHJvcCxcbiAgICAgICAgICAgICAgd2l0aEluZXJ0QmFja2Ryb3A6IHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wLFxuICAgICAgICAgICAgICB3aXRoU2Nyb2xsTG9jazogdGhpcy5fd2l0aFNjcm9sbExvY2ssXG4gICAgICAgICAgICAgIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyOiB0aGlzLmhhbmRsZUNsb3NlT25DbGlja091dHNpZGUsXG4gICAgICAgICAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLl9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgICAgcG9ydGFsQWRhcHRlcjogdGhpcy5wb3J0YWxBZGFwdGVyLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgLy8gV2FpdCBmb3IgYXBwZW5kIHRvIGNvbXBsZXRlIGJlZm9yZSBhbmltYXRpbmdcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkeUZvckFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gQWZ0ZXIgYW5pbWF0aW9uIGJlZ2lucyByZXNvbHZlXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX29uT3Blbi5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuX29yaWdpblBhcmVudCAmJlxuICAgICAgICAgICAgdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkgJiZcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpICE9PSB0aGlzLl9vcmlnaW5QYXJlbnRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMucG9ydGFsQWRhcHRlcih0aGlzLCB0aGlzLl9vcmlnaW5QYXJlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBXYWl0IGZvciBhcHBlbmQgdG8gY29tcGxldGUgYmVmb3JlIGFuaW1hdGluZ1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUZvckFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAvLyBBZnRlciBhbmltYXRpb24gYmVnaW5zIHJlc29sdmVcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX29uT3Blbi5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlT3ZlcmxheU9wZW5FbmQoKSB7XG4gICAgICAvLyBDYW5jZWwgaWYgY2xvc2VkIGJlZm9yZSBvcGVuIGVuZGVkXG4gICAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbmVkRnVsbCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5fd2l0aEZvY3VzVHJhcCkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIudHJhcEZvY3VzKHRoaXMuX2ZvY3VzVHJhcFRhcmdldCwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vbk9wZW5FbmQuZW1pdChudWxsLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZU92ZXJsYXlDbG9zZSgpIHtcbiAgICAgIC8vIElnbm9yZSBpZiBhbHJlYWR5IGNsb3NlZFxuICAgICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fb25DbG9zZS5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5zdG9wTGlzdGVuaW5nKCk7XG4gICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIucmVsZWFzZUZvY3VzKHRydWUpO1xuICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLmhpZGVCYWNrZHJvcCgpO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZU92ZXJsYXlDbG9zZUVuZChvcHRpb25zPzogeyByZW1vdmVGcm9tRWxlbWVudD86IEhUTUxFbGVtZW50IH0pIHtcbiAgICAgIC8vIENhbmNlbCBpZiBvcGVuZWQgYmVmb3JlIGNsb3NlIGVuZGVkXG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWRGdWxsID0gZmFsc2U7XG4gICAgICB0aGlzLnJlYWR5Rm9yQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIucmVtb3ZlRnJvbVN0YWNrKG9wdGlvbnM/LnJlbW92ZUZyb21FbGVtZW50IHx8IHRoaXMpO1xuICAgICAgaWYgKHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZSkge1xuICAgICAgICBpZiAodGhpcy5fb3JpZ2luUGFyZW50ICYmIHRoaXMuX29yaWdpblBhcmVudCAhPT0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgdGhpcy5fb3JpZ2luUGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fb25DbG9zZUVuZC5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVPdmVybGF5S2V5RG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudD8uaGFzQXR0cmlidXRlKCdkYXRhLW92ZXJsYXktd3JhcHBlcicpXG4gICAgICAgID8gdGhpcy5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50XG4gICAgICAgIDogdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHBhcmVudCBlbGVtZW50IHRoaXMgb3ZlcmxheSB3aWxsIGJlIHJlYXR0YWNoZWQgdG8gZWl0aGVyOlxuICAgICAqIC0gV2hlbiBjb25maWd1cmVkIHRvIGRvIHNvIG9uIGNsb3NlXG4gICAgICogLSBXaGVuIFwicG9ydGFsaW5nXCIgaXMgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBzZXRPcmlnaW5QYXJlbnQobmV3T3JpZ2luOiBFbGVtZW50KSB7XG4gICAgICBjb25zdCBjdXJyZW50UGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpO1xuICAgICAgaWYgKGN1cnJlbnRQYXJlbnRFbGVtZW50ID09PSB0aGlzLl9vcmlnaW5QYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIG5ld09yaWdpbik7XG4gICAgICB9XG4gICAgICB0aGlzLl9vcmlnaW5QYXJlbnQgPSBuZXdPcmlnaW47XG4gICAgfVxuXG4gICAgLyoqIFVwZGF0ZXMgdmFyaW91cyBiZWhhdmlvcnMgdG8gYXBwbHkgdGhlIGxhdGVzdCBvdmVybGF5IG9wdGlvbnMgKi9cbiAgICB1cGRhdGVPdmVybGF5KCkge1xuICAgICAgLy8gVXBkYXRlIGJhY2tkcm9wIGluZXJ0bmVzc1xuICAgICAgaWYgKHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5zZXRCYWNrZHJvcEluZXJ0bmVzcyh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5zZXRCYWNrZHJvcEluZXJ0bmVzcyhmYWxzZSk7XG4gICAgICB9XG4gICAgICAvLyBVcGRhdGUgY2xpY2sgb3V0c2lkZSBjb250cm9sbGVyXG4gICAgICBpZiAodGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZSAmJiAhdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmlzTGlzdGVuaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmxpc3RlbkZvckNsaWNrc091dHNpZGVPZih0aGlzKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUgJiYgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmlzTGlzdGVuaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSBmb2N1cyB0cmFwIGNvbnRyb2xsZXJcbiAgICAgIGlmICh0aGlzLl93aXRoRm9jdXNUcmFwICYmIHRoaXMub3BlbmVkICYmICF0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIuaXNUcmFwcGluZ0ZvY3VzKCkpIHtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLnRyYXBGb2N1cyh0aGlzLl9mb2N1c1RyYXBUYXJnZXQsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5fd2l0aEZvY3VzVHJhcCAmJiB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIuaXNUcmFwcGluZ0ZvY3VzKCkpIHtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLnJlbGVhc2VGb2N1cyh0cnVlKTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSBiYWNrZHJvcCBjb250cm9sbGVyXG4gICAgICBpZiAodGhpcy5fd2l0aERpbUJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5zaG93QmFja2Ryb3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5oaWRlQmFja2Ryb3AoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9yZXR1cm5Ub09yaWdpbk9uQ2xvc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuX29yaWdpblBhcmVudCAmJiB0aGlzLl9vcmlnaW5QYXJlbnQgIT09IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpKSB7XG4gICAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIHRoaXMuX29yaWdpblBhcmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBvcGVuKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPcGVuIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2xvc2UgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueSkge1xuICAgICAgc3VwZXIoYXJncyk7XG4gICAgICB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duID0gdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoXG4gICAgICBjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZU1hcDxhbnk+IHwgTWFwPFByb3BlcnR5S2V5LCB1bmtub3duPlxuICAgICk6IHZvaWQge1xuICAgICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgIHRoaXMuX29yaWdpblBhcmVudCA9IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlQ2xvc2VPbkNsaWNrT3V0c2lkZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgICBpZiAodGhpcy5fY2xvc2VPbkVzY2FwZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgaW4gdGhlIGV2ZW50IHRoZSBvdmVybGF5IGVsZW1lbnQgd2FzIHBvcnRhbGVkLlxuICAgICAgaWYgKHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmxpc3RlbkZvckNsaWNrc091dHNpZGVPZih0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIucmVsZWFzZUZvY3VzKHRydWUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPdmVybGF5RWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxPdmVybGF5SW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtkaXNwbGF5OmJsb2NrO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWZ1bGwtd2lkdGg6bWF4LWNvbnRlbnQ7LS1jb250cm9sLXdpZHRoOnVuc2V0Oy0tY29udHJvbC1taW4td2lkdGg6MjQwcHg7LS1jb250cm9sLW1heC13aWR0aDp2YXIoLS1jb250cm9sLXdpZHRoKTstLWNvbnRyb2wtbWFyZ2luLXk6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWNvbnRyb2wtbWFyZ2luLXg6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWNvbnRyb2wtZGVzY3JpcHRvci1tYXJnaW46dmFyKC0tbXRlLXNwYWNlLXNtKTstLWxhYmVsLXdpZHRoOnZhcigtLWNvbnRyb2wtd2lkdGgpOy0tbGFiZWwtbWluLXdpZHRoOnZhcigtLWNvbnRyb2wtbWluLXdpZHRoKTstLWxhYmVsLW1heC13aWR0aDp2YXIoLS1jb250cm9sLW1heC13aWR0aCk7LS1sYWJlbC1tYXJnaW4teTp2YXIoLS1tdGUtc3BhY2UteHMpO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOnZhcigtLWZ1bGwtd2lkdGgpfS5ncmlkLWNvbnRhaW5lcntkaXNwbGF5OmlubGluZS1ncmlkO2dyaWQtdGVtcGxhdGUtYXJlYXM6XCJsYWJlbFwiIFwiY29udHJvbFwiO2dyaWQtdGVtcGxhdGUtcm93czoxZnIgbWlubWF4KDAsMTAwJSk7d2lkdGg6aW5oZXJpdH06aG9zdChbd2l0aEZ1bGxXaWR0aF0pey0tZnVsbC13aWR0aDoxMDAlOy0tY29udHJvbC13aWR0aDoxMDAlfTpob3N0KFt3aXRob3V0TWFyZ2luXSl7LS1jb250cm9sLW1hcmdpbi15OjBweH06aG9zdChbd2l0aG91dE1hcmdpbl0pIC5sYWJlbC1jb250YWluZXIuaGFzLWNvbnRlbnR7bWFyZ2luLWJvdHRvbTp2YXIoLS1jb250cm9sLWRlc2NyaXB0b3ItbWFyZ2luKX0ubGFiZWwtY29udGFpbmVye2Rpc3BsYXk6bm9uZTtncmlkLWFyZWE6bGFiZWw7bWF4LXdpZHRoOnZhcigtLWxhYmVsLW1heC13aWR0aCk7bWluLXdpZHRoOnZhcigtLWxhYmVsLW1pbi13aWR0aCk7d2lkdGg6dmFyKC0tbGFiZWwtd2lkdGgpfS5sYWJlbC1jb250YWluZXIuaGFzLWNvbnRlbnR7ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOnZhcigtLWxhYmVsLW1hcmdpbi15KX0ubGFiZWwtY29udGFpbmVyOm5vdCguaGFzLWNvbnRlbnQpe21hcmdpbjowIWltcG9ydGFudH0uY29udGV4dHtncmlkLWFyZWE6Y29udGV4dH0uZGVzY3JpcHRpb24sLmVycm9yLC5oaW50LC5sYWJlbHtkaXNwbGF5OmJsb2NrfS5kZXNjcmlwdGlvbiBtdGUtZGVzY3JpcHRpb24sLmRlc2NyaXB0aW9uIG10ZS1kZXNjcmlwdGlvbi10ZXh0LC5sYWJlbCBtdGUtbGFiZWwsLmxhYmVsIG10ZS1sYWJlbC10ZXh0LDpob3N0IDo6c2xvdHRlZChtdGUtZGVzY3JpcHRpb24tdGV4dFtzbG90PWRlc2NyaXB0aW9uXSksOmhvc3QgOjpzbG90dGVkKG10ZS1kZXNjcmlwdGlvbltzbG90PWRlc2NyaXB0aW9uXSksOmhvc3QgOjpzbG90dGVkKG10ZS1sYWJlbC10ZXh0W3Nsb3Q9bGFiZWxdKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWxhYmVsW3Nsb3Q9bGFiZWxdKXttYXJnaW46MH06aG9zdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKXstLWxhYmVsLXdpZHRoOm1heC1jb250ZW50Oy0tbGFiZWwtbWluLXdpZHRoOm1heC1jb250ZW50fTpob3N0KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pIC5ncmlkLWNvbnRhaW5lcntncmlkLXRlbXBsYXRlLWFyZWFzOlwibGFiZWwgY29udHJvbFwiO2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoYXV0byx2YXIoLS1sYWJlbC13aWR0aCkpIG1pbm1heChhdXRvLHZhcigtLWNvbnRyb2wtd2lkdGgpKX06aG9zdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKSAubGFiZWwtY29udGFpbmVye21hcmdpbi1ib3R0b206dmFyKC0tY29udHJvbC1tYXJnaW4teSk7bWFyZ2luLXJpZ2h0OnZhcigtLWNvbnRyb2wtbWFyZ2luLXgpO21hcmdpbi10b3A6Y2FsYyh2YXIoLS1jb250cm9sLW1hcmdpbi15KSArIHZhcigtLWxhYmVsLWJlZm9yZS1vZmZzZXQpKX0uZGVzY3JpcHRpb24sLmVycm9yLC5oaW50e21pbi13aWR0aDoxMDAlO3dpZHRoOi1tb3otbWluLWNvbnRlbnQ7d2lkdGg6bWluLWNvbnRlbnR9LmNvbnRyb2wtb3V0ZXItY29udGFpbmVye2dyaWQtYXJlYTpjb250cm9sO21hcmdpbi10b3A6dmFyKC0tY29udHJvbC1tYXJnaW4teSk7bWF4LXdpZHRoOnZhcigtLWNvbnRyb2wtbWF4LXdpZHRoKTttaW4td2lkdGg6dmFyKC0tY29udHJvbC1taW4td2lkdGgpO3dpZHRoOnZhcigtLWNvbnRyb2wtd2lkdGgpfTpob3N0KDpub3QoW2xhYmVsUG9zaXRpb249YmVmb3JlXSkpIC5jb250cm9sLW91dGVyLWNvbnRhaW5lci5oYXMtbGFiZWwtY29udGVudHttYXJnaW4tdG9wOmNhbGModmFyKC0tY29udHJvbC1tYXJnaW4teSkvMil9LmNvbnRyb2wtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWFyZ2luLWJvdHRvbTp2YXIoLS1jb250cm9sLW1hcmdpbi15KX0uZXJyb3IsLmhpbnR7ZGlzcGxheTpub25lfS5lcnJvci5oYXMtY29udGVudCwuaGludC5oYXMtY29udGVudHtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6dmFyKC0tY29udHJvbC1kZXNjcmlwdG9yLW1hcmdpbil9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tZm9ybS1maWVsZC1pbnRlcm5hbC1wYWRkaW5nOnZhcigtLW10ZS1zcGFjZS1zbSk7LS1mb3JtLWZpZWxkLWludGVybmFsLWdhcDp2YXIoLS1tdGUtc3BhY2Utc20pOy0tZm9ybS1maWVsZC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpOy0tZm9ybS1maWVsZC1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWZvcm0tZmllbGQtYmFja2dyb3VuZDp2YXIoLS1tdGUtc3VyZmFjZS0yKTstLXByZXBlbmQtYmFja2dyb3VuZDp2YXIoLS1tdGUtZ3JleS0xKTstLXByZXBlbmQtcGFkZGluZy14OnZhcigtLW10ZS1zcGFjZS1zbSk7LS1wcmVwZW5kLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpfTpob3N0KFtyYWRpdXM9c21dKXstLWZvcm0tZmllbGQtcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXhzKX06aG9zdChbcmFkaXVzPWxnXSl7LS1mb3JtLWZpZWxkLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14eGwpfTpob3N0KFtzaXplPXNtXSl7LS1wcmVwZW5kLXBhZGRpbmcteDpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1mb3JtLWZpZWxkLWludGVybmFsLXBhZGRpbmc6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXA6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpfTpob3N0KFtzaXplPWxnXSl7LS1wcmVwZW5kLXBhZGRpbmcteDpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtcGFkZGluZzpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwOmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpfS5mb3JtLWZpZWxke2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnZhcigtLWZvcm0tZmllbGQtYmFja2dyb3VuZCk7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztnYXA6dmFyKC0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXApO3Bvc2l0aW9uOnJlbGF0aXZlfTpob3N0KFtkaXNhYmxlZF0pIC5mb3JtLWZpZWxke2JhY2tncm91bmQ6dmFyKC0tbXRlLWRpc2FibGVkLTEpO2JvcmRlcjoxcHggc29saWQgdmFyKC0tbXRlLWRpc2FibGVkLTEpfS5hcHBlbmQsLnByZXBlbmR7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLXNlbGY6c3RyZXRjaDtiYWNrZ3JvdW5kOnZhcigtLXByZXBlbmQtYmFja2dyb3VuZCk7ZGlzcGxheTpub25lO2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUpO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzowIHZhcigtLXByZXBlbmQtcGFkZGluZy14KX0ucHJlcGVuZHtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItcmlnaHQ6MXB4IHNvbGlkIHZhcigtLXByZXBlbmQtYm9yZGVyLWNvbG9yKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKX0uYXBwZW5ke2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItbGVmdDoxcHggc29saWQgdmFyKC0tcHJlcGVuZC1ib3JkZXItY29sb3IpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKX0uYXBwZW5kLmhhcy1jb250ZW50LC5wcmVwZW5kLmhhcy1jb250ZW50e2Rpc3BsYXk6ZmxleH0ucHJlZml4LC5zdWZmaXh7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLXNlbGY6c3RyZXRjaDtkaXNwbGF5OmZsZXg7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ucHJlZml4Om5vdCguaGFzLXByZXBlbmQpe3BhZGRpbmctbGVmdDp2YXIoLS1wcmVwZW5kLXBhZGRpbmcteCl9LnN1ZmZpeDpub3QoLmhhcy1hcHBlbmQpe3BhZGRpbmctcmlnaHQ6dmFyKC0tcHJlcGVuZC1wYWRkaW5nLXgpfS5mb3JtLWZpZWxkLmZvY3VzZWQ6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3R0b206LTFweDtib3gtc2hhZG93OjAgMCAwIDFweCB2YXIoLS1tdGUtbGlnaHQpO2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO2xlZnQ6LTFweDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0Oi0xcHg7dG9wOi0xcHg7ei1pbmRleDo5fS5mb3JtLWZpZWxkLmludmFsaWR7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtcmdiKSl9Omhvc3QoW3dpdGhvdXRCb3JkZXJdKSA6aXMoLmZvcm0tZmllbGQsLnByZXBlbmQsLmFwcGVuZCl7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudH1gOyIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIEFjdGl2ZUxpbmtPcHRpb25zLFxuICBDb25zdHJ1Y3RvcixcbiAgTXRlRWxlbWVudCxcbiAgTXRlSGlzdG9yeUFwaVNlcnZpY2UsXG4gIFVuc3Vic2NyaWJlcixcbiAgaXNMaW5rQWN0aXZlLFxuICBvblVwZGF0ZSxcbn0gZnJvbSAnLi4vJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTGlua0ludGVyZmFjZSB7XG4gIGhyZWY/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEF1dG9BY3RpdmVMaW5rSW50ZXJmYWNlIHtcbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgbGluayBpcyB0aGUgYWN0aXZlIHBhZ2UgKi9cbiAgYWN0aXZlOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGxpbmsgc2hvdWxkIGF1dG9tYXRpY2FsbHkgdHJ5IHRvIGRldGVybWluZSBpZiBpdCBpcyB0aGUgYWN0aXZlIHBhZ2UgKi9cbiAgd2l0aG91dEF1dG9BY3RpdmU6IGJvb2xlYW47XG5cbiAgLyoqIE9wdGlvbnMgdG8gcmVmaW5lIGhvdyB0aGlzIGxpbmsgd2lsbCBkZXRlcm1pbmUgaWYgaXQgaXMgdGhlIGFjdGl2ZSBwYWdlICovXG4gIGFjdGl2ZUxpbmtPcHRpb25zPzogUGFydGlhbDxBY3RpdmVMaW5rT3B0aW9ucz47XG5cbiAgLyoqIFRoZSBpbnRlcm5hbCBhbmNob3IgZWxlbWVudCBmcm9tIHdoaWNoIHRvIHB1bGwgdGhlIGxvY2F0aW9uIGZvciBjb21wYXJpc29uICovXG4gIGFuY2hvckVsZW1lbnQ/OiBIVE1MQW5jaG9yRWxlbWVudDtcbn1cblxuZXhwb3J0IGNvbnN0IEF1dG9BY3RpdmVMaW5rTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQgJiBMaW5rSW50ZXJmYWNlPj4oXG4gIHN1cGVyQ2xhc3M6IFRcbikgPT4ge1xuICBjbGFzcyBBdXRvQWN0aXZlTGlua0VsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRob3V0QXV0b0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCByZWZsZWN0OiB0cnVlIH0pIGFjdGl2ZUxpbmtPcHRpb25zPzogUGFydGlhbDxBY3RpdmVMaW5rT3B0aW9ucz47XG5cbiAgICBhbmNob3JFbGVtZW50PzogSFRNTEFuY2hvckVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHVuc3ViOiBVbnN1YnNjcmliZXI7XG5cbiAgICBAb25VcGRhdGUoJ2FjdGl2ZScsIHsgd2FpdFVudGlsRmlyc3RVcGRhdGU6IHRydWUgfSlcbiAgICBwcml2YXRlIGhhbmRsZUFjdGl2ZUxpbmtDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5hbmNob3JFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICdwYWdlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG9uVXBkYXRlKFsnaHJlZicsICdpcmVmJywgJ3dpdGhBdXRvQWN0aXZlJ10sIHsgd2FpdFVudGlsRmlyc3RVcGRhdGU6IHRydWUgfSlcbiAgICBwcml2YXRlIGhhbmRsZUF1dG9BY3RpdmVDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5ocmVmIHx8IHRoaXNbJ2lyZWYnXSkge1xuICAgICAgICBpZiAodGhpcy53aXRob3V0QXV0b0FjdGl2ZSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgICB0aGlzLmhhbmRsZVVybENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVBdXRvQWN0aXZlQ2hhbmdlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRMaXN0ZW5lcigpIHtcbiAgICAgIGlmICghdGhpcy51bnN1Yikge1xuICAgICAgICB0aGlzLnVuc3ViID0gTXRlSGlzdG9yeUFwaVNlcnZpY2Uuc3RhdGVDaGFuZ2VzKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVVybENoYW5nZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgdGhpcy51bnN1Yj8uKCk7XG4gICAgICB0aGlzLnVuc3ViID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVVybENoYW5nZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlID0gaXNMaW5rQWN0aXZlKFxuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQ/LmhyZWYsXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICB0aGlzLmFjdGl2ZUxpbmtPcHRpb25zXG4gICAgICApO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIEF1dG9BY3RpdmVMaW5rRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxBdXRvQWN0aXZlTGlua0ludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50LCBTbG90Q29udHJvbGxlciB9IGZyb20gJy4uJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2xvdE9ic2VydmVySW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIFByb3AgdXNlZCB0byBkZWNsYXJlIHdoaWNoIHNsb3RzIGFyZSBiZWluZyB1c2VkIGR1cmluZyBTU1IgdG8gbWFrZSB0aGVtIHZpc2libGUgaW4gY2VydGFpbiBlZGdlLWNhc2VzLlxuICAgKi9cbiAgc3NyU2xvdHM6IHN0cmluZztcblxuICBzbG90Q29udHJvbGxlcjogU2xvdENvbnRyb2xsZXI7XG5cbiAgaGFzU2xvdDogKHNsb3Q6IHN0cmluZywgb3JWYWx1ZT86IGFueSkgPT4gYm9vbGVhbjtcblxuICBzc3JTbG90Q2hlY2s6IChzbG90czogc3RyaW5nKSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgU2xvdE9ic2VydmVyTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIFNsb3RPYnNlcnZlckVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBQcm9wIHVzZWQgdG8gZGVjbGFyZSB3aGljaCBzbG90cyBhcmUgYmVpbmcgdXNlZCBkdXJpbmcgU1NSIHRvIG1ha2UgdGhlbSB2aXNpYmxlIGluIGNlcnRhaW4gZWRnZS1jYXNlcy5cbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pXG4gICAgc2V0IHNzclNsb3RzKHZhbDogc3RyaW5nKSB7XG4gICAgICBsZXQgb2xkVmFsID0gdGhpcy5fc3NyU2xvdHM7XG4gICAgICB0aGlzLl9zc3JTbG90cyA9IHZhbDtcbiAgICAgIC8vIFBhcnNlIGFuZCBjYWNoZSBzc3Igc2xvdCBzZXRcbiAgICAgIGNvbnN0IHNsb3RzID0gKHRoaXMuX3NzclNsb3RzID8/ICcnKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5tYXAoKHNsb3QpID0+IHNsb3QudHJpbSgpKTtcbiAgICAgIHRoaXMuX3NzclNsb3RTZXQgPSBuZXcgU2V0PHN0cmluZz4oc2xvdHMpO1xuICAgICAgLy8gTm9ybWFsIHVwZGF0ZVxuICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCdzc3JTbG90cycsIG9sZFZhbCk7XG4gICAgfVxuICAgIGdldCBzc3JTbG90cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zc3JTbG90cztcbiAgICB9XG4gICAgcHJpdmF0ZSBfc3NyU2xvdHM/OiBzdHJpbmc7XG5cbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIF9zc3JTbG90U2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICBzbG90Q29udHJvbGxlciA9IG5ldyBTbG90Q29udHJvbGxlcih0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gc2xvdCBoYXMgY29udGVudCwgb3IgaWYgaXQgd2FzIHNwZWNpZmllZCBhcyBleGlzdGluZyBkdXJpbmcgU1NSLlxuICAgICAqIE9uY2UgY2FsbGVkLCB0aGUgY29tcG9uZW50IHdpbGwgbm93IGF1dG9tYXRpY2FsbHkgdXBkYXRlIGlmIHRoZSBjb250ZW50cyBvZiB0aGlzIHNsb3QgY2hhbmdlLlxuICAgICAqL1xuICAgIGhhc1Nsb3Qoc2xvdDogc3RyaW5nLCBvclZhbHVlPzogYW55KTogYm9vbGVhbiB7XG4gICAgICB0aGlzLnNsb3RDb250cm9sbGVyLnVwZGF0ZU9uQ2hhbmdlKHNsb3QpO1xuICAgICAgLy8gVE9ETyhyZWVjZSk6IHJlY29uc2lkZXIgd2hlbiBhIHNvbHV0aW9uIGV4aXN0cyBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzE0MzRcbiAgICAgIC8vIFdlIGhhdmUgdG8gYXNzdW1lIGFsaWdubWVudCB3aXRoIHNzclNsb3RDaGVjayB1bnRpbCB0aGUgZmlyc3QgdXBkYXRlIGhlcmUgb3RoZXJ3aXNlIHBhcnQgbWlzbWF0Y2hlcyBjYW4gb2NjdXJcbiAgICAgIGlmICghdGhpcy5fX2ZpcnN0VXBkYXRlZCkge1xuICAgICAgICByZXR1cm4gb3JWYWx1ZSB8fCB0aGlzLnNzclNsb3RDaGVjayhzbG90KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvclZhbHVlIHx8IHRoaXMuc2xvdENvbnRyb2xsZXIuY2hlY2soc2xvdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIHJlcXVlc3RlZCBzbG90IHdhcyBzcGVjaWZpZWQgaW4gdGhlIGxpc3Qgb2YgYHNzci1zbG90c2AuICovXG4gICAgc3NyU2xvdENoZWNrKHNsb3Q6IHN0cmluZykge1xuICAgICAgaWYgKHRoaXMuX19maXJzdFVwZGF0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NzclNsb3RTZXQuaGFzKHNsb3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gU2xvdE9ic2VydmVyRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxTbG90T2JzZXJ2ZXJJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgRm9ybUNvbnRyb2xNaXhpbiwgRm9ybUNvbnRyb2xJbnRlcmZhY2UgfSBmcm9tICdAb3Blbi13Yy9mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHsgcHJvcGVydHksIHF1ZXJ5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtcbiAgQ29uc3RydWN0b3IsXG4gIERpc2FibGVkTWl4aW4sXG4gIFRhYkluZGV4TWl4aW4sXG4gIE10ZUVsZW1lbnQsXG4gIGlubmVySW5wdXRWYWxpZGF0b3JzLFxuICBUYWJJbmRleEludGVyZmFjZSxcbiAgRGlzYWJsZWRJbnRlcmZhY2UsXG4gIG9uVXBkYXRlLFxuICBldmVudEVtaXR0ZXIsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnLi4nO1xuXG4vLyBSZXF1aXJlZCBwb2x5ZmlsbCBmb3Igbm93XG5pbXBvcnQgJy4uLy4uL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL2luZGV4JztcblxuZXhwb3J0IGludGVyZmFjZSBNdGVDaGVja2JveENoYW5nZURldGFpbCB7XG4gIC8qKiBUaGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wgY2hhbmdlZCAqL1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCBjaGFuZ2VkICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKiogV2hldGhlciBvciBub3QgdGhlIGVsZW1lbnQgaXMgY2hlY2tlZCAqL1xuICBjaGVja2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94SW50ZXJmYWNlIHtcbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgbGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBlcnJvciB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICBlcnJvcj86IHN0cmluZztcblxuICAvKiogVGhlIGhpbnQgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgaGludD86IHN0cmluZztcblxuICAvKiogQW4gYXJpYSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgdG8gdGhlIGlucHV0IGVsZW1lbnQgKi9cbiAgYXJpYUxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKiBUaGUgbmFtZSBmb3IgdGhlIGVsZW1lbnQuIFVzZWQgd2hlbiBzdWJtaXR0aW5nIGEgZm9ybSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50ICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKiogVGhlIHZhbHVlIGZvciB0aGUgZWxlbWVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgZWxlbWVudCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgICovXG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFsdGVycyB0aGUgYmVoYXZpb3Igb2YgdGhpcyBjb250cm9sLiBXaGVuIFwiY29udHJvbGxlZFwiLCBhIGNvbnRyb2xzIHZhbHVlIGlzIGRyaXZlbiBleHBsaWNpdGx5IGJ5IGV4dGVybmFsIHN0YXRlXG4gICAqIHZpYSB0aGUgYHZhbHVlYCBwcm9wLiBDaGFuZ2UgZXZlbnRzIHdpbGwgZmlyZSBidXQgdGhlIGNvbnRyb2wgdmFsdWUgd2lsbCBub3QgY2hhbmdlIHVudGlsIGl0IGlzIGFsdGVyZWQgZGlyZWN0bHkuXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIGNvbnRyb2xsZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGNoZWNrZWQgYnkgZGVmYXVsdC4gVXNlZnVsIGZvciB3aGVuIHJlc2V0dGluZyBmb3JtIGNvbnRyb2xzIG9yIHVzaW5nIGEgc3RhdGVsZXNzIGNvbXBvbmVudCAqL1xuICBkZWZhdWx0Q2hlY2tlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBpcyBjaGVja2VkIG9yIG5vdCAqL1xuICBjaGVja2VkOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBiZSByZWFkb25seSAqL1xuICByZWFkb25seTogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgc2VsZWN0aW5nIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIG9yIG5vdCAqL1xuICByZXF1aXJlZDogYm9vbGVhbjtcblxuICAvKiogUmVuZGVycyB0aGUgcmVxdWlyZWQgaW5kaWNhdG9yIGZvciB0aGlzIGlucHV0cyBsYWJlbCB3aXRob3V0IGVuYWJsaW5nIG5hdGl2ZSBgcmVxdWlyZWRgIHZhbGlkYXRpb24gKi9cbiAgc2hvd1JlcXVpcmVkOiBib29sZWFuO1xuXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGlucHV0IGJsdXJzICAqL1xuICBoYW5kbGVCbHVyKCk6IHZvaWQ7XG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZCBvbiAgKi9cbiAgaGFuZGxlRm9jdXMoKTogdm9pZDtcblxuICAvKiogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgY2hhbmdlcyAgKi9cbiAgaGFuZGxlQ2hhbmdlKCk6IHZvaWQ7XG5cbiAgLyoqIEEgc2V0IG9mIGF0dHJpYnV0ZXMgdG8gYmUgZm9yd2FyZGVkIHRvIGFuIGVsZW1lbnQgd2l0aGluIHJlbmRlciBhbmQgcmVtb3ZlZCBmcm9tIHRoZSBlbGVtZW50ICovXG4gIGluaGVyaXRlZEF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBjb25zdCBDaGVja2JveE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBDaGVja2JveEVsZW1lbnQgZXh0ZW5kcyBUYWJJbmRleE1peGluKEZvcm1Db250cm9sTWl4aW4oRGlzYWJsZWRNaXhpbihzdXBlckNsYXNzKSksIHtcbiAgICBpbml0aWFsVGFiSW5kZXg6IDAsXG4gIH0pIHtcbiAgICBpbmhlcml0ZWRBdHRyaWJ1dGVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIHN0YXRpYyBmb3JtQ29udHJvbFZhbGlkYXRvcnMgPSBpbm5lcklucHV0VmFsaWRhdG9ycztcblxuICAgIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KCkgbGFiZWw/OiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIGVycm9yIHRleHQgZm9yIHRoZSBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KCkgZXJyb3I/OiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIGhpbnQgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoKSBoaW50Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQWx0ZXJzIHRoZSBiZWhhdmlvciBvZiB0aGlzIGNvbnRyb2wuIFdoZW4gXCJjb250cm9sbGVkXCIsIGEgY29udHJvbHMgdmFsdWUgaXMgZHJpdmVuIGV4cGxpY2l0bHkgYnkgZXh0ZXJuYWwgc3RhdGVcbiAgICAgKiB2aWEgdGhlIGB2YWx1ZWAgcHJvcC4gQ2hhbmdlIGV2ZW50cyB3aWxsIGZpcmUgYnV0IHRoZSBjb250cm9sIHZhbHVlIHdpbGwgbm90IGNoYW5nZSB1bnRpbCBpdCBpcyBhbHRlcmVkIGRpcmVjdGx5LlxuICAgICAqIEBleHBlcmltZW50YWxcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIGNvbnRyb2xsZWQ6IGJvb2xlYW47XG5cbiAgICAvKiogQW4gYXJpYSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgdG8gdGhlIGlucHV0IGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6ICdhcmlhLWxhYmVsJywgcmVmbGVjdDogdHJ1ZSB9KSBhcmlhTGFiZWw6IHN0cmluZztcblxuICAgIC8qKiBUaGUgbmFtZSBmb3IgdGhlIGVsZW1lbnQuIFVzZWQgd2hlbiBzdWJtaXR0aW5nIGEgZm9ybSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBuYW1lOiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIHZhbHVlIGZvciB0aGUgZWxlbWVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgZWxlbWVudCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgICovXG4gICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSB2YWx1ZT8gPSAnb24nO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGNoZWNrZWQgYnkgZGVmYXVsdC4gVXNlZnVsIGZvciB3aGVuIHJlc2V0dGluZyBmb3JtIGNvbnRyb2xzIG9yIHVzaW5nIGEgc3RhdGVsZXNzIGNvbXBvbmVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgZGVmYXVsdENoZWNrZWQgPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGNoZWNrZWQgb3Igbm90ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBjaGVja2VkID0gZmFsc2U7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgcmVhZG9ubHkgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHJlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAvKiogV2hldGhlciB0aGUgc2VsZWN0aW5nIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIG9yIG5vdCAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcmVxdWlyZWQgPSBmYWxzZTtcblxuICAgIC8qKiBSZW5kZXJzIHRoZSByZXF1aXJlZCBpbmRpY2F0b3IgZm9yIHRoaXMgaW5wdXRzIGxhYmVsIHdpdGhvdXQgZW5hYmxpbmcgbmF0aXZlIGByZXF1aXJlZGAgdmFsaWRhdGlvbiAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgc2hvd1JlcXVpcmVkPztcblxuICAgIC8qKiBUaGUgaW5wdXQgZWxlbWVudCB1c2VkIHdpdGhpbiB0aGUgZm9ybSBjb250cm9sIG1peGluICovXG4gICAgQHF1ZXJ5KCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSB2YWxpZGF0aW9uVGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgLyoqIEVtaXR0ZWQgd2hlbiB0aGUgZWxlbWVudCdzIHN0YXRlIGlzIGFib3V0IHRvIGNoYW5nZS4gSWYgZGVmYXVsdCBpcyBwcmV2ZW50ZWQsIGl0IHdpbGwgcmV2ZXJ0IHRoZSBjaGVja2JveCB0byBpdCdzIG9yaWdpbmFsIGNoZWNrZWQgc3RhdGUgcHJpb3IgdG8gc2VsZWN0aW5nLiAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfd2lsbENoYW5nZTogRXZlbnRFbWl0dGVyPE10ZUNoZWNrYm94Q2hhbmdlRGV0YWlsPjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhlIGVsZW1lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZC4gKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TXRlQ2hlY2tib3hDaGFuZ2VEZXRhaWw+O1xuXG4gICAgLyoqIEVtaXRzIHdoZW4gdGhpcyBlbGVtZW50IGlzIGZvY3VzZWQgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uRm9jdXM6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0cyB3aGVuIHRoaXMgZWxlbWVudCBsb3NlcyBmb2N1cyAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25CbHVyOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBAb25VcGRhdGUoJ2RlZmF1bHRDaGVja2VkJylcbiAgICBwcm90ZWN0ZWQgb25EZWZhdWx0Q2hlY2tlZENoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRyb2xsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCAmJiB0aGlzLmRlZmF1bHRDaGVja2VkICYmICF0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAb25VcGRhdGUoWyd2YWx1ZScsICdjaGVja2VkJ10sIHsgb246ICdib3RoJyB9KVxuICAgIHByb3RlY3RlZCB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgQG9uVXBkYXRlKCdhcmlhTGFiZWwnLCB7IG9uOiAnYm90aCcgfSlcbiAgICBwcm90ZWN0ZWQgdXBkYXRlTGFiZWwoKSB7XG4gICAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIC4uLnRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyxcbiAgICAgICAgYXJpYUxhYmVsOiB0aGlzLmFyaWFMYWJlbCxcbiAgICAgIH07XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIC0tIEZvcm0gY29udHJvbCB2YWxpZGF0aW9uIG92ZXJyaWRlcyAtLSAqL1xuICAgIHNob3VsZEZvcm1WYWx1ZVVwZGF0ZSgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0Rm9ybUNvbnRyb2woKTogdm9pZCB7XG4gICAgICBzdXBlci5yZXNldEZvcm1Db250cm9sPy4oKTtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRyb2xsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmRlZmF1bHRDaGVja2VkO1xuICAgIH1cblxuICAgIHZhbGlkaXR5Q2FsbGJhY2soKTogc3RyaW5nIHwgdm9pZCB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvciB8fCB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIH1cblxuICAgIC8qKiAtLSBUYWJJbmRleCBvdmVycmlkZXMgLS0gKi9cbiAgICBnZXRUYWJJbmRleEFkYXB0ZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uVGFyZ2V0Py5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgc2V0VGFiSW5kZXhBZGFwdGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0Py5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdmFsdWUpO1xuICAgIH1cblxuICAgIHJlbW92ZVRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0Py5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vdFByZXZlbnRlZCA9IHRoaXMuX3dpbGxDaGFuZ2UuZW1pdChcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBjaGVja2VkOiAhdGhpcy5jaGVja2VkLFxuICAgICAgICB9LFxuICAgICAgICB7IGNhbmNlbGFibGU6IHRydWUgfVxuICAgICAgKTtcblxuICAgICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgY2hlY2tlZDogIXRoaXMuY2hlY2tlZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChub3RQcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIGNoZWNrZWQ6IHRoaXMuY2hlY2tlZCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICAgIHRoaXMuX29uQmx1ci5lbWl0KCk7XG4gICAgfTtcblxuICAgIGhhbmRsZUZvY3VzID0gKCkgPT4ge1xuICAgICAgdGhpcy5fb25Gb2N1cy5lbWl0KCk7XG4gICAgfTtcblxuICAgIC8qKiBDbGlja3MgdGhlIGVsZW1lbnQgKi9cbiAgICBwdWJsaWMgY2xpY2soKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQuY2xpY2soKTtcbiAgICB9XG5cbiAgICAvKiogRm9jdXNlcyB0aGUgZWxlbWVudCAqL1xuICAgIHB1YmxpYyBmb2N1cygpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblRhcmdldC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKiBCbHVycyB0aGUgZWxlbWVudCAqL1xuICAgIHB1YmxpYyBibHVyKCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0LmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gQ2hlY2tib3hFbGVtZW50IGFzIENvbnN0cnVjdG9yPFxuICAgIENoZWNrYm94SW50ZXJmYWNlICYgVGFiSW5kZXhJbnRlcmZhY2UgJiBGb3JtQ29udHJvbEludGVyZmFjZSAmIERpc2FibGVkSW50ZXJmYWNlXG4gID4gJlxuICAgIFQ7XG59O1xuIiwgIi8qKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBXZWFrTWFwcyB1c2VkIHRocm91Z2hvdXQgdGhpcyBwcm9qZWN0LiBUaGUgV2Vha01hcHMgZXhpc3QgdG8gdGllXG4gKiBvYmplY3RzIHRvZ2V0aGVyIHdpdGhvdXQgcG9sbHV0aW5nIHRoZSBvYmplY3RzIHRoZW1zZWx2ZXMgd2l0aCByZWZlcmVuY2VzIHdlJ2QgcmF0aGVyIGtlZXBcbiAqIGhpZGRlbi4gVGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIHdvcmsgYXMgdHJhbnNwYXJlbnRseSBhcyBwb3NzaWJsZS5cbiAqL1xuaW1wb3J0IHsgSUVsZW1lbnRJbnRlcm5hbHMsIElDdXN0b21FbGVtZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgaXQgaXMgYXR0YWNoZWQgdG8gKi9cbmV4cG9ydCBjb25zdCByZWZNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgSUN1c3RvbUVsZW1lbnQ+KCk7XG5cbi8qKiBVc2VlIGFuIEVsZW1lbnRzSW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBpdHMgVmFsaWRpdHlTdGF0ZSBvYmplY3QgKi9cbmV4cG9ydCBjb25zdCB2YWxpZGl0eU1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBWYWxpZGl0eVN0YXRlPigpO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGl0cyBhdHRhY2hlZCBpbnB1dFt0eXBlPVwiaGlkZGVuXCJdICovXG5leHBvcnQgY29uc3QgaGlkZGVuSW5wdXRNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgSFRNTElucHV0RWxlbWVudFtdPigpO1xuXG4vKiogVXNlIGEgY3VzdG9tIGVsZW1lbnQgdG8gZ2V0IGl0cyBhdHRhY2hlZCBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlICovXG5leHBvcnQgY29uc3QgaW50ZXJuYWxzTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzPigpO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IHRoZSBhdHRhY2hlZCB2YWxpZGF0aW9uIG1lc3NhZ2UgKi9cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uTWVzc2FnZU1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBzdHJpbmc+KCk7XG5cbi8qKiBVc2UgYSBmb3JtIGVsZW1lbnQgdG8gZ2V0IGF0dGFjaGVkIGN1c3RvbSBlbGVtZW50cyBhbmQgRWxlbWVudEludGVybmFscyBpbnN0YW5jZXMgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5leHBvcnQgY29uc3QgZm9ybXNNYXAgPSBuZXcgV2Vha01hcDxIVE1MRm9ybUVsZW1lbnQsIE9iamVjdD4oKTtcblxuLyoqIFVzZSBhIGN1c3RvbSBlbGVtZW50IG9yIG90aGVyIG9iamVjdCB0byBnZXQgdGhlaXIgYXNzb2NpYXRlZCBNdXRhdGlvbk9ic2VydmVycyAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd0hvc3RzTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIE11dGF0aW9uT2JzZXJ2ZXI+KCk7XG5cbi8qKiBVc2UgYSBmb3JtIGVsZW1lbnQgdG8gZ2V0IGEgc2V0IG9mIGF0dGFjaGVkIGN1c3RvbSBlbGVtZW50cyAqL1xuZXhwb3J0IGNvbnN0IGZvcm1FbGVtZW50c01hcCA9IG5ldyBXZWFrTWFwPEhUTUxGb3JtRWxlbWVudCwgU2V0PElDdXN0b21FbGVtZW50Pj4oKTtcblxuLyoqIFVzZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBhIHJlZmVyZW5jZSB0byBhbiBlbGVtZW50J3MgdmFsdWUgKi9cbmV4cG9ydCBjb25zdCByZWZWYWx1ZU1hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBhbnk+KCk7XG5cbi8qKiBFbGVtZW50cyB0aGF0IG5lZWQgdG8gYmUgdXBncmFkZWQgb25jZSBhZGRlZCB0byB0aGUgRE9NICovXG5leHBvcnQgY29uc3QgdXBncmFkZU1hcCA9IG5ldyBXZWFrTWFwPEVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzPigpO1xuXG4vKiogU2F2ZSByZWZlcmVuY2VzIHRvIHNoYWRvdyByb290cyBmb3IgaW5jbHVzaW9uIGluIGludGVybmFscyBpbnN0YW5jZSAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd1Jvb3RNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgU2hhZG93Um9vdD4oKTtcblxuLyoqIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIGludGVybmFscycgdmFsaWRhdGlvbiBhbmNob3IgKi9cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uQW5jaG9yTWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIEhUTUxFbGVtZW50PigpO1xuXG4vKiogTWFwIERvY3VtZW50RnJhZ21lbnRzIHRvIHRoZWlyIE11dGF0aW9uT2JzZXJ2ZXJzIHNvIHdlIGNhbiBkaXNjb25uZWN0IG9uY2UgZWxlbWVudHMgYXJlIHJlbW92ZWQgKi9cbmV4cG9ydCBjb25zdCBkb2N1bWVudEZyYWdtZW50TWFwID0gbmV3IFdlYWtNYXA8RG9jdW1lbnRGcmFnbWVudCwgTXV0YXRpb25PYnNlcnZlcj4oKTtcblxuLyoqIFdoZXRoZXIgY29ubmVjdGVkQ2FsbGJhY2sgaGFzIGFscmVhZHkgYmVlbiBjYWxsZWQuICovXG5leHBvcnQgY29uc3QgY29ubmVjdGVkQ2FsbGJhY2tNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgYm9vbGVhbj4oKTtcblxuLyoqIFNhdmUgYSByZWZlcmVuY2UgdG8gdmFsaWRpdHkgc3RhdGUgZm9yIGVsZW1lbnRzIHRoYXQgbmVlZCB0byB1cGdyYWRlIGFmdGVyIGJlaW5nIGNvbm5lY3RlZCAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkaXR5VXBncmFkZU1hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBJRWxlbWVudEludGVybmFscz4oKTtcbiIsICJpbXBvcnQgeyB1cGdyYWRlTWFwIH0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IElBb20sIElFbGVtZW50SW50ZXJuYWxzIH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbmV4cG9ydCBjb25zdCBhb206IElBb20gPSB7XG4gIGFyaWFBdG9taWM6ICdhcmlhLWF0b21pYycsXG4gIGFyaWFBdXRvQ29tcGxldGU6ICdhcmlhLWF1dG9jb21wbGV0ZScsXG4gIGFyaWFCdXN5OiAnYXJpYS1idXN5JyxcbiAgYXJpYUNoZWNrZWQ6ICdhcmlhLWNoZWNrZWQnLFxuICBhcmlhQ29sQ291bnQ6ICdhcmlhLWNvbGNvdW50JyxcbiAgYXJpYUNvbEluZGV4OiAnYXJpYS1jb2xpbmRleCcsXG4gIGFyaWFDb2xJbmRleFRleHQ6ICdhcmlhLWNvbGluZGV4dGV4dCcsXG4gIGFyaWFDb2xTcGFuOiAnYXJpYS1jb2xzcGFuJyxcbiAgYXJpYUN1cnJlbnQ6ICdhcmlhLWN1cnJlbnQnLFxuICBhcmlhRGlzYWJsZWQ6ICdhcmlhLWRpc2FibGVkJyxcbiAgYXJpYUV4cGFuZGVkOiAnYXJpYS1leHBhbmRlZCcsXG4gIGFyaWFIYXNQb3B1cDogJ2FyaWEtaGFzcG9wdXAnLFxuICBhcmlhSGlkZGVuOiAnYXJpYS1oaWRkZW4nLFxuICBhcmlhSW52YWxpZDogJ2FyaWEtaW52YWxpZCcsXG4gIGFyaWFLZXlTaG9ydGN1dHM6ICdhcmlhLWtleXNob3J0Y3V0cycsXG4gIGFyaWFMYWJlbDogJ2FyaWEtbGFiZWwnLFxuICBhcmlhTGV2ZWw6ICdhcmlhLWxldmVsJyxcbiAgYXJpYUxpdmU6ICdhcmlhLWxpdmUnLFxuICBhcmlhTW9kYWw6ICdhcmlhLW1vZGFsJyxcbiAgYXJpYU11bHRpTGluZTogJ2FyaWEtbXVsdGlsaW5lJyxcbiAgYXJpYU11bHRpU2VsZWN0YWJsZTogJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJyxcbiAgYXJpYU9yaWVudGF0aW9uOiAnYXJpYS1vcmllbnRhdGlvbicsXG4gIGFyaWFQbGFjZWhvbGRlcjogJ2FyaWEtcGxhY2Vob2xkZXInLFxuICBhcmlhUG9zSW5TZXQ6ICdhcmlhLXBvc2luc2V0JyxcbiAgYXJpYVByZXNzZWQ6ICdhcmlhLXByZXNzZWQnLFxuICBhcmlhUmVhZE9ubHk6ICdhcmlhLXJlYWRvbmx5JyxcbiAgYXJpYVJlbGV2YW50OiAnYXJpYS1yZWxldmFudCcsXG4gIGFyaWFSZXF1aXJlZDogJ2FyaWEtcmVxdWlyZWQnLFxuICBhcmlhUm9sZURlc2NyaXB0aW9uOiAnYXJpYS1yb2xlZGVzY3JpcHRpb24nLFxuICBhcmlhUm93Q291bnQ6ICdhcmlhLXJvd2NvdW50JyxcbiAgYXJpYVJvd0luZGV4OiAnYXJpYS1yb3dpbmRleCcsXG4gIGFyaWFSb3dJbmRleFRleHQ6ICdhcmlhLXJvd2luZGV4dGV4dCcsXG4gIGFyaWFSb3dTcGFuOiAnYXJpYS1yb3dzcGFuJyxcbiAgYXJpYVNlbGVjdGVkOiAnYXJpYS1zZWxlY3RlZCcsXG4gIGFyaWFTZXRTaXplOiAnYXJpYS1zZXRzaXplJyxcbiAgYXJpYVNvcnQ6ICdhcmlhLXNvcnQnLFxuICBhcmlhVmFsdWVNYXg6ICdhcmlhLXZhbHVlbWF4JyxcbiAgYXJpYVZhbHVlTWluOiAnYXJpYS12YWx1ZW1pbicsXG4gIGFyaWFWYWx1ZU5vdzogJ2FyaWEtdmFsdWVub3cnLFxuICBhcmlhVmFsdWVUZXh0OiAnYXJpYS12YWx1ZXRleHQnLFxuICByb2xlOiAncm9sZScsXG59O1xuXG5leHBvcnQgY29uc3QgaW5pdEFvbSA9IChyZWY6IEVsZW1lbnQsIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHMpID0+IHtcbiAgZm9yIChsZXQga2V5IGluIGFvbSkge1xuICAgIGludGVybmFsc1trZXldID0gbnVsbDtcblxuICAgIGxldCBjbG9zdXJlVmFsdWUgPSBudWxsO1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBhb21ba2V5XTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW50ZXJuYWxzLCBrZXksIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGNsb3N1cmVWYWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgY2xvc3VyZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICByZWYuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGdyYWRlTWFwLnNldChyZWYsIGludGVybmFscyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHtcbiAgaW50ZXJuYWxzTWFwLFxuICBzaGFkb3dIb3N0c01hcCxcbiAgdXBncmFkZU1hcCxcbiAgaGlkZGVuSW5wdXRNYXAsXG4gIGRvY3VtZW50RnJhZ21lbnRNYXAsXG4gIGZvcm1FbGVtZW50c01hcCxcbiAgdmFsaWRpdHlVcGdyYWRlTWFwLFxuICByZWZWYWx1ZU1hcCxcbn0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IGFvbSB9IGZyb20gJy4vYW9tLmpzJztcbmltcG9ydCB7XG4gIHJlbW92ZUhpZGRlbklucHV0cyxcbiAgaW5pdEZvcm0sXG4gIGluaXRMYWJlbHMsXG4gIHVwZ3JhZGVJbnRlcm5hbHMsXG4gIHNldERpc2FibGVkLFxuICBtdXRhdGlvbk9ic2VydmVyRXhpc3RzLFxufSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IElDdXN0b21FbGVtZW50IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbmZ1bmN0aW9uIGluaXROb2RlKG5vZGU6IElDdXN0b21FbGVtZW50KTogdm9pZCB7XG4gIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQobm9kZSk7XG4gIGNvbnN0IHsgZm9ybSB9ID0gaW50ZXJuYWxzO1xuICBpbml0Rm9ybShub2RlLCBmb3JtLCBpbnRlcm5hbHMpO1xuICBpbml0TGFiZWxzKG5vZGUsIGludGVybmFscy5sYWJlbHMpO1xufVxuXG4vKipcbiAqIElmIGEgZmllbGRzZXQncyBkaXNhYmxlZCBzdGF0ZSBpcyB0b2dnbGVkLCB0aGUgZm9ybURpc2FibGVkQ2FsbGJhY2tcbiAqIG9uIGFueSBjaGlsZCBmb3JtLWFzc29jaWF0ZWQgY3Vzb3RtIGVsZW1lbnRzLlxuICovXG5leHBvcnQgY29uc3Qgd2Fsa0ZpZWxkc2V0ID0gKG5vZGU6IEhUTUxGaWVsZFNldEVsZW1lbnQsIGZpcnN0UmVuZGVyID0gZmFsc2UpOiB2b2lkID0+IHtcbiAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihub2RlLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwge1xuICAgIGFjY2VwdE5vZGUobm9kZTogSUN1c3RvbUVsZW1lbnQpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIGludGVybmFsc01hcC5oYXMobm9kZSkgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9TS0lQO1xuICAgIH0sXG4gIH0pO1xuXG4gIGxldCBjdXJyZW50ID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgSUN1c3RvbUVsZW1lbnQ7XG4gIC8qKlxuICAgKiBXZSBkb24ndCBuZWVkIHRvIGNhbGwgYW55dGhpbmcgb24gZmlyc3QgcmVuZGVyIGlmXG4gICAqIHRoZSBlbGVtZW50IGlzbid0IGRpc2FibGVkXG4gICAqL1xuICBjb25zdCBpc0NhbGxOZWNlc3NhcnkgPSAhZmlyc3RSZW5kZXIgfHwgbm9kZS5kaXNhYmxlZDtcblxuICB3aGlsZSAoY3VycmVudCkge1xuICAgIGlmIChjdXJyZW50LmZvcm1EaXNhYmxlZENhbGxiYWNrICYmIGlzQ2FsbE5lY2Vzc2FyeSkge1xuICAgICAgc2V0RGlzYWJsZWQoY3VycmVudCwgbm9kZS5kaXNhYmxlZCk7XG4gICAgfVxuICAgIGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWc6IE11dGF0aW9uT2JzZXJ2ZXJJbml0ID0ge1xuICBhdHRyaWJ1dGVzOiB0cnVlLFxuICBhdHRyaWJ1dGVGaWx0ZXI6IFsnZGlzYWJsZWQnLCAnbmFtZSddLFxufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIgPSBtdXRhdGlvbk9ic2VydmVyRXhpc3RzKClcbiAgPyBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zTGlzdDogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xuICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldCBhcyBJQ3VzdG9tRWxlbWVudDtcblxuICAgICAgICAvKiogTWFuYWdlIGNoYW5nZXMgdG8gdGhlIHJlZidzIGRpc2FibGVkIHN0YXRlICovXG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgICAgICAgc2V0RGlzYWJsZWQodGFyZ2V0LCB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5sb2NhbE5hbWUgPT09ICdmaWVsZHNldCcpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVwdXJwb3NlIHRoZSBvYnNlcnZlciBmb3IgZmllbGRzZXRzIHdoaWNoIG5lZWRcbiAgICAgICAgICAgICAqIHRvIGJlIHdhbGtlZCB3aGVuZXZlciB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIGlzIHNldFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB3YWxrRmllbGRzZXQodGFyZ2V0IGFzIHVua25vd24gYXMgSFRNTEZpZWxkU2V0RWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKiBNYW5hZ2UgY2hhbmdlcyB0byB0aGUgcmVmJ3MgbmFtZSAqL1xuICAgICAgICBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ25hbWUnKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZWZWYWx1ZU1hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIGludGVybmFscy5zZXRGb3JtVmFsdWUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIDogKHt9IGFzIE11dGF0aW9uT2JzZXJ2ZXIpO1xuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZXJDYWxsYmFjayhtdXRhdGlvbkxpc3Q6IE11dGF0aW9uUmVjb3JkW10pIHtcbiAgbXV0YXRpb25MaXN0LmZvckVhY2goKG11dGF0aW9uUmVjb3JkKSA9PiB7XG4gICAgY29uc3QgeyBhZGRlZE5vZGVzLCByZW1vdmVkTm9kZXMgfSA9IG11dGF0aW9uUmVjb3JkO1xuICAgIGNvbnN0IGFkZGVkID0gQXJyYXkuZnJvbShhZGRlZE5vZGVzKSBhcyBJQ3VzdG9tRWxlbWVudFtdO1xuICAgIGNvbnN0IHJlbW92ZWQgPSBBcnJheS5mcm9tKHJlbW92ZWROb2RlcykgYXMgSUN1c3RvbUVsZW1lbnRbXTtcblxuICAgIGFkZGVkLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIC8qKiBBbGxvd3MgZm9yIGR5bmFtaWMgYWRkaXRpb24gb2YgZWxlbWVudHMgdG8gZm9ybXMgKi9cbiAgICAgIGlmIChpbnRlcm5hbHNNYXAuaGFzKG5vZGUpICYmIG5vZGUuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICAgICAgaW5pdE5vZGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKiBVcGdyYWRlIHRoZSBhY2Nlc3NpYmlsaXR5IGluZm9ybWF0aW9uIG9uIGFueSBwcmV2aW91c2x5IGNvbm5lY3RlZCAqL1xuICAgICAgaWYgKHVwZ3JhZGVNYXAuaGFzKG5vZGUpKSB7XG4gICAgICAgIGNvbnN0IGludGVybmFscyA9IHVwZ3JhZGVNYXAuZ2V0KG5vZGUpO1xuICAgICAgICBjb25zdCBhb21LZXlzID0gT2JqZWN0LmtleXMoYW9tKTtcbiAgICAgICAgYW9tS2V5c1xuICAgICAgICAgIC5maWx0ZXIoKGtleSkgPT4gaW50ZXJuYWxzW2tleV0gIT09IG51bGwpXG4gICAgICAgICAgLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYW9tW2tleV0sIGludGVybmFsc1trZXldKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgdXBncmFkZU1hcC5kZWxldGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKiBVcGdyYWRlIHRoZSB2YWxpZGl0eSBzdGF0ZSB3aGVuIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCAqL1xuICAgICAgaWYgKHZhbGlkaXR5VXBncmFkZU1hcC5oYXMobm9kZSkpIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gdmFsaWRpdHlVcGdyYWRlTWFwLmdldChub2RlKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2ludGVybmFscy12YWxpZCcsIGludGVybmFscy52YWxpZGl0eS52YWxpZC50b1N0cmluZygpKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2ludGVybmFscy1pbnZhbGlkJywgKCFpbnRlcm5hbHMudmFsaWRpdHkudmFsaWQpLnRvU3RyaW5nKCkpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgKCFpbnRlcm5hbHMudmFsaWRpdHkudmFsaWQpLnRvU3RyaW5nKCkpO1xuICAgICAgICB2YWxpZGl0eVVwZ3JhZGVNYXAuZGVsZXRlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvKiogSWYgdGhlIG5vZGUgdGhhdCdzIGFkZGVkIGlzIGEgZm9ybSwgY2hlY2sgdGhlIHZhbGlkaXR5ICovXG4gICAgICBpZiAobm9kZS5sb2NhbE5hbWUgPT09ICdmb3JtJykge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KG5vZGUgYXMgdW5rbm93biBhcyBIVE1MRm9ybUVsZW1lbnQpO1xuICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKG5vZGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCB7XG4gICAgICAgICAgYWNjZXB0Tm9kZShub2RlOiBJQ3VzdG9tRWxlbWVudCk6IG51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gaW50ZXJuYWxzTWFwLmhhcyhub2RlKSAmJiAhKGZvcm1FbGVtZW50cyAmJiBmb3JtRWxlbWVudHMuaGFzKG5vZGUpKVxuICAgICAgICAgICAgICA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVFxuICAgICAgICAgICAgICA6IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVA7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcblxuICAgICAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICAgIGluaXROb2RlKGN1cnJlbnQpO1xuICAgICAgICAgIGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5sb2NhbE5hbWUgPT09ICdmaWVsZHNldCcpIHtcbiAgICAgICAgZGlzYWJsZWRPck5hbWVPYnNlcnZlci5vYnNlcnZlPy4obm9kZSwgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZyk7XG4gICAgICAgIHdhbGtGaWVsZHNldChub2RlIGFzIHVua25vd24gYXMgSFRNTEZpZWxkU2V0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZW1vdmVkLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQobm9kZSk7XG4gICAgICAvKiogQ2xlYW4gdXAgYW55IGhpZGRlbiBpbnB1dCBlbGVtZW50cyBsZWZ0IGFmdGVyIGFuIGVsZW1lbnQgaXMgZGlzY29ubmVjdGVkICovXG4gICAgICBpZiAoaW50ZXJuYWxzICYmIGhpZGRlbklucHV0TWFwLmdldChpbnRlcm5hbHMpKSB7XG4gICAgICAgIHJlbW92ZUhpZGRlbklucHV0cyhpbnRlcm5hbHMpO1xuICAgICAgfVxuICAgICAgLyoqIERpc2Nvbm5lY3QgYW55IHVubmVlZGVkIE11dGF0aW9uT2JzZXJ2ZXJzICovXG4gICAgICBpZiAoc2hhZG93SG9zdHNNYXAuaGFzKG5vZGUpKSB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gc2hhZG93SG9zdHNNYXAuZ2V0KG5vZGUpO1xuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRoaXMgb2JzZXJ2ZXIgY2FsbGJhY2sgaXMganVzdCBmb3IgZG9jdW1lbnQgZnJhZ21lbnRzXG4gKiBpdCB3aWxsIHVwZ3JhZGUgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSBpZiB3YXMgYXBwZW5kZWRcbiAqIGZyb20gYSBkb2N1bWVudCBmcmFnbWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyYWdtZW50T2JzZXJ2ZXJDYWxsYmFjayhtdXRhdGlvbkxpc3Q6IE11dGF0aW9uUmVjb3JkW10pOiB2b2lkIHtcbiAgbXV0YXRpb25MaXN0LmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgY29uc3QgeyByZW1vdmVkTm9kZXMgfSA9IG11dGF0aW9uO1xuXG4gICAgcmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gZG9jdW1lbnRGcmFnbWVudE1hcC5nZXQobXV0YXRpb24udGFyZ2V0IGFzIERvY3VtZW50RnJhZ21lbnQpO1xuICAgICAgaWYgKGludGVybmFsc01hcC5oYXMobm9kZSBhcyBJQ3VzdG9tRWxlbWVudCkpIHtcbiAgICAgICAgdXBncmFkZUludGVybmFscyhub2RlIGFzIElDdXN0b21FbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogRGVmZXIgdGhlIHVwZ3JhZGUgb2Ygbm9kZXMgd2l0aGluZyBhIERvY3VtZW50RnJhZ21lbnRcbiAqIEBwYXJhbSBmcmFnbWVudCB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmVyVXBncmFkZSA9IChmcmFnbWVudDogRG9jdW1lbnRGcmFnbWVudCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZyYWdtZW50T2JzZXJ2ZXJDYWxsYmFjayk7XG4gIG9ic2VydmVyLm9ic2VydmU/LihmcmFnbWVudCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gIGRvY3VtZW50RnJhZ21lbnRNYXAuc2V0KGZyYWdtZW50LCBvYnNlcnZlcik7XG59O1xuXG5leHBvcnQgY29uc3Qgb2JzZXJ2ZXIgPSBtdXRhdGlvbk9ic2VydmVyRXhpc3RzKClcbiAgPyBuZXcgTXV0YXRpb25PYnNlcnZlcihvYnNlcnZlckNhbGxiYWNrKVxuICA6ICh7fSBhcyBNdXRhdGlvbk9ic2VydmVyKTtcbmV4cG9ydCBjb25zdCBvYnNlcnZlckNvbmZpZzogTXV0YXRpb25PYnNlcnZlckluaXQgPSB7XG4gIGNoaWxkTGlzdDogdHJ1ZSxcbiAgc3VidHJlZTogdHJ1ZSxcbn07XG4iLCAiaW1wb3J0IHsgaGlkZGVuSW5wdXRNYXAsIGZvcm1zTWFwLCBmb3JtRWxlbWVudHNNYXAsIGludGVybmFsc01hcCB9IGZyb20gJy4vbWFwcy5qcyc7XG5pbXBvcnQgeyBkaXNhYmxlZE9yTmFtZU9ic2VydmVyLCBkaXNhYmxlZE9yTmFtZU9ic2VydmVyQ29uZmlnIH0gZnJvbSAnLi9tdXRhdGlvbi1vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgSUN1c3RvbUVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzLCBMYWJlbHNMaXN0IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbi8qKlxuICogVG9nZ2xlJ3MgdGhlIGRpc2FibGVkIHN0YXRlIChhdHRyaWJ1dGVzICYgY2FsbGJhY2spIG9uIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAcGFyYW0ge0lDdXN0b21FbGVtZW50fSByZWYgLSBUaGUgY3VzdG9tIGVsZW1lbnQgaW5zdGFuY2VcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzYWJsZWQgLSBUaGUgZGlzYWJsZWQgc3RhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHNldERpc2FibGVkID0gKHJlZjogSUN1c3RvbUVsZW1lbnQsIGRpc2FibGVkOiBib29sZWFuKTogdm9pZCA9PiB7XG4gIHJlZi50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy1kaXNhYmxlZCcsIGRpc2FibGVkKTtcblxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICByZWYuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgfSBlbHNlIHtcbiAgICByZWYucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XG4gIH1cblxuICBpZiAocmVmLmZvcm1EaXNhYmxlZENhbGxiYWNrKSB7XG4gICAgcmVmLmZvcm1EaXNhYmxlZENhbGxiYWNrLmFwcGx5KHJlZiwgW2Rpc2FibGVkXSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgaGlkZGVuIGlucHV0cyBmb3IgdGhlIGdpdmVuIGVsZW1lbnQgaW50ZXJuYWxzIGluc3RhbmNlXG4gKiBAcGFyYW0ge0lFbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHMgLSBUaGUgZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2VcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVIaWRkZW5JbnB1dHMgPSAoaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscyk6IHZvaWQgPT4ge1xuICBjb25zdCBoaWRkZW5JbnB1dHMgPSBoaWRkZW5JbnB1dE1hcC5nZXQoaW50ZXJuYWxzKTtcbiAgaGlkZGVuSW5wdXRzLmZvckVhY2goKGhpZGRlbklucHV0KSA9PiB7XG4gICAgaGlkZGVuSW5wdXQucmVtb3ZlKCk7XG4gIH0pO1xuICBoaWRkZW5JbnB1dE1hcC5zZXQoaW50ZXJuYWxzLCBbXSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoaWRkZW4gaW5wdXQgZm9yIHRoZSBnaXZlbiByZWZcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSBlbGVtZW50IHRvIHdhdGNoXG4gKiBAcGFyYW0ge0lFbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHMgLSBUaGUgZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2UgZm9yIHRoZSByZWZcbiAqIEByZXR1cm4ge0hUTUxJbnB1dEVsZW1lbnR9IFRoZSBoaWRkZW4gaW5wdXRcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUhpZGRlbklucHV0ID0gKFxuICByZWY6IElDdXN0b21FbGVtZW50LFxuICBpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzXG4pOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9ICdoaWRkZW4nO1xuICBpbnB1dC5uYW1lID0gcmVmLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICByZWYuYWZ0ZXIoaW5wdXQpO1xuICBoaWRkZW5JbnB1dE1hcC5nZXQoaW50ZXJuYWxzKS5wdXNoKGlucHV0KTtcbiAgcmV0dXJuIGlucHV0O1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgcmVmIGJ5IHNldHRpbmcgdXAgYW4gYXR0cmlidXRlIG9ic2VydmUgb24gaXRcbiAqIGxvb2tpbmcgZm9yIGNoYW5nZXMgdG8gZGlzYWJsZWRcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSBlbGVtZW50IHRvIHdhdGNoXG4gKiBAcGFyYW0ge0lFbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHMgLSBUaGUgZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2UgZm9yIHRoZSByZWZcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBpbml0UmVmID0gKHJlZjogSUN1c3RvbUVsZW1lbnQsIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHMpOiB2b2lkID0+IHtcbiAgaGlkZGVuSW5wdXRNYXAuc2V0KGludGVybmFscywgW10pO1xuICBkaXNhYmxlZE9yTmFtZU9ic2VydmVyLm9ic2VydmU/LihyZWYsIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWcpO1xufTtcblxuLyoqXG4gKiBTZXQgdXAgbGFiZWxzIGZvciB0aGUgcmVmXG4gKiBAcGFyYW0ge0lDdXN0b21FbGVtZW50fSByZWYgLSBUaGUgcmVmIHRvIGFkZCBsYWJlbHMgdG9cbiAqIEBwYXJhbSB7TGFiZWxzTGlzdH0gbGFiZWxzIC0gQSBsaXN0IG9mIHRoZSBsYWJlbHNcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBpbml0TGFiZWxzID0gKHJlZjogSUN1c3RvbUVsZW1lbnQsIGxhYmVsczogTGFiZWxzTGlzdCk6IHZvaWQgPT4ge1xuICBpZiAobGFiZWxzLmxlbmd0aCkge1xuICAgIEFycmF5LmZyb20obGFiZWxzKS5mb3JFYWNoKChsYWJlbCkgPT4gbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWYuY2xpY2suYmluZChyZWYpKSk7XG4gICAgbGV0IGZpcnN0TGFiZWxJZCA9IGxhYmVsc1swXS5pZDtcbiAgICBpZiAoIWxhYmVsc1swXS5pZCkge1xuICAgICAgZmlyc3RMYWJlbElkID0gYCR7bGFiZWxzWzBdLmh0bWxGb3J9X0xhYmVsYDtcbiAgICAgIGxhYmVsc1swXS5pZCA9IGZpcnN0TGFiZWxJZDtcbiAgICB9XG4gICAgcmVmLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgZmlyc3RMYWJlbElkKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBpbnRlcm5hbHMtdmFsaWQgYW5kIGludGVybmFscy1pbnZhbGlkIGF0dHJpYnV0ZXNcbiAqIGJhc2VkIG9uIGZvcm0gdmFsaWRpdHkuXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gLSBUaGUgdGFyZ2V0IGZvcm1cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBzZXRGb3JtVmFsaWRpdHkgPSAoZm9ybTogSFRNTEZvcm1FbGVtZW50KSA9PiB7XG4gIGNvbnN0IG5hdGl2ZUNvbnRyb2xWYWxpZGl0eSA9IEFycmF5LmZyb20oZm9ybS5lbGVtZW50cylcbiAgICAuZmlsdGVyKFxuICAgICAgKGVsZW1lbnQ6IEVsZW1lbnQgJiB7IHZhbGlkaXR5OiBWYWxpZGl0eVN0YXRlIH0pID0+XG4gICAgICAgICFlbGVtZW50LnRhZ05hbWUuaW5jbHVkZXMoJy0nKSAmJiBlbGVtZW50LnZhbGlkaXR5XG4gICAgKVxuICAgIC5tYXAoKGVsZW1lbnQ6IEVsZW1lbnQgJiB7IHZhbGlkaXR5OiBWYWxpZGl0eVN0YXRlIH0pID0+IGVsZW1lbnQudmFsaWRpdHkudmFsaWQpO1xuICBjb25zdCBwb2x5ZmlsbGVkRWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGZvcm0pIHx8IFtdO1xuICBjb25zdCBwb2x5ZmlsbGVkVmFsaWRpdHkgPSBBcnJheS5mcm9tKHBvbHlmaWxsZWRFbGVtZW50cylcbiAgICAuZmlsdGVyKChjb250cm9sKSA9PiBjb250cm9sLmlzQ29ubmVjdGVkKVxuICAgIC5tYXAoKGNvbnRyb2w6IElDdXN0b21FbGVtZW50KSA9PiBpbnRlcm5hbHNNYXAuZ2V0KGNvbnRyb2wpLnZhbGlkaXR5LnZhbGlkKTtcbiAgY29uc3QgaGFzSW52YWxpZCA9IFsuLi5uYXRpdmVDb250cm9sVmFsaWRpdHksIC4uLnBvbHlmaWxsZWRWYWxpZGl0eV0uaW5jbHVkZXMoZmFsc2UpO1xuICBmb3JtLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLWludmFsaWQnLCBoYXNJbnZhbGlkKTtcbiAgZm9ybS50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy12YWxpZCcsICFoYXNJbnZhbGlkKTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIGlucHV0IGNhbGxiYWNrLiBVcGRhdGVzIHRoZSBmb3JtJ3MgdmFsaWRpdHlcbiAqIGF0dHJpYnV0ZXMgb24gaW5wdXQuXG4gKiBAcGFyYW0ge0V2ZW50fSAtIFRoZSBmb3JtIGlucHV0IGV2ZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZm9ybUlucHV0Q2FsbGJhY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIHNldEZvcm1WYWxpZGl0eShmaW5kUGFyZW50Rm9ybShldmVudC50YXJnZXQpKTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIGNoYW5nZSBjYWxsYmFjay4gVXBkYXRlcyB0aGUgZm9ybSdzIHZhbGlkaXR5XG4gKiBhdHRyaWJ1dGVzIG9uIGNoYW5nZS5cbiAqIEBwYXJhbSB7RXZlbnR9IC0gVGhlIGZvcm0gY2hhbmdlIGV2ZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZm9ybUNoYW5nZUNhbGxiYWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICBzZXRGb3JtVmFsaWRpdHkoZmluZFBhcmVudEZvcm0oZXZlbnQudGFyZ2V0KSk7XG59O1xuXG4vKipcbiAqIFRoZSBnbG9iYWwgZm9ybSBzdWJtaXQgY2FsbGJhY2suIFdlIG5lZWQgdG8gY2FuY2VsIGFueSBzdWJtaXNzaW9uXG4gKiBpZiBhIG5lc3RlZCBpbnRlcm5hbHMgaXMgaW52YWxpZC5cbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSAtIFRoZSBmb3JtIGVsZW1lbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCB3aXJlU3VibWl0TG9naWMgPSAoZm9ybTogSFRNTEZvcm1FbGVtZW50KSA9PiB7XG4gIGNvbnN0IFNVQk1JVF9CVVRUT05fU0VMRUNUT1IgPVxuICAgICc6aXMoYnV0dG9uW3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBidXR0b246bm90KFt0eXBlXSkpOm5vdChbZGlzYWJsZWRdKSc7XG4gIGxldCBzdWJtaXRCdXR0b25TZWxlY3RvciA9IGAke1NVQk1JVF9CVVRUT05fU0VMRUNUT1J9Om5vdChbZm9ybV0pYDtcblxuICBpZiAoZm9ybS5pZCkge1xuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yICs9IGAsJHtTVUJNSVRfQlVUVE9OX1NFTEVDVE9SfVtmb3JtPScke2Zvcm0uaWR9J11gO1xuICB9XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBFbGVtZW50O1xuICAgIGlmICh0YXJnZXQuY2xvc2VzdChzdWJtaXRCdXR0b25TZWxlY3RvcikpIHtcbiAgICAgIC8vIHZhbGlkYXRlXG4gICAgICBjb25zdCBlbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhpcyBmb3JtIGRvZXMgbm90IHZhbGlkYXRlIHRoZW4gd2UncmUgZG9uZVxuICAgICAgICovXG4gICAgICBpZiAoZm9ybS5ub1ZhbGlkYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLyoqIElmIHRoZSBTZXQgaGFzIGl0ZW1zLCBjb250aW51ZSAqL1xuICAgICAgaWYgKGVsZW1lbnRzLnNpemUpIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKTtcbiAgICAgICAgLyoqIENoZWNrIHRoZSBpbnRlcm5hbHMuY2hlY2tWYWxpZGl0eSgpIG9mIGFsbCBub2RlcyAqL1xuICAgICAgICBjb25zdCB2YWxpZGl0eUxpc3QgPSBub2Rlcy5yZXZlcnNlKCkubWFwKChub2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChub2RlKTtcbiAgICAgICAgICByZXR1cm4gaW50ZXJuYWxzLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKiBJZiBhbnkgbm9kZSBpcyBmYWxzZSwgc3RvcCB0aGUgZXZlbnQgKi9cbiAgICAgICAgaWYgKHZhbGlkaXR5TGlzdC5pbmNsdWRlcyhmYWxzZSkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIHJlc2V0IGNhbGxiYWNrLiBUaGlzIHdpbGwgbG9vcCBvdmVyIGFkZGVkXG4gKiBpbnB1dHMgYW5kIGNhbGwgZm9ybVJlc2V0Q2FsbGJhY2sgaWYgYXBwbGljYWJsZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1SZXNldENhbGxiYWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAvKiogR2V0IHRoZSBTZXQgb2YgZWxlbWVudHMgYXR0YWNoZWQgdG8gdGhpcyBmb3JtICovXG4gIGNvbnN0IGVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50KTtcblxuICAvKiogU29tZSBmb3JtcyB3b24ndCBjb250YWluIGZvcm0gYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudHMgKi9cbiAgaWYgKGVsZW1lbnRzICYmIGVsZW1lbnRzLnNpemUpIHtcbiAgICAvKiogTG9vcCBvdmVyIHRoZSBlbGVtZW50cyBhbmQgY2FsbCBmb3JtUmVzZXRDYWxsYmFjayBpZiBhcHBsaWNhYmxlICovXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKChlbGVtZW50LmNvbnN0cnVjdG9yIGFzIGFueSkuZm9ybUFzc29jaWF0ZWQgJiYgZWxlbWVudC5mb3JtUmVzZXRDYWxsYmFjaykge1xuICAgICAgICBlbGVtZW50LmZvcm1SZXNldENhbGxiYWNrLmFwcGx5KGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGZvcm0uIFdlIHdpbGwgbmVlZCB0byBhZGQgc3VibWl0IGFuZCByZXNldCBsaXN0ZW5lcnNcbiAqIGlmIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdC4gSWYgdGhleSBkbywganVzdCBhZGQgdGhlIG5ldyByZWYgdG8gdGhlIGZvcm0uXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWYgLSBUaGUgZWxlbWVudCByZWYgdGhhdCBpbmNsdWRlcyBpbnRlcm5hbHNcbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtIC0gVGhlIGZvcm0gdGhlIHJlZiBiZWxvbmdzIHRvXG4gKiBAcGFyYW0ge0VsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBpbnRlcm5hbHMgZm9yIHJlZlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRGb3JtID0gKFxuICByZWY6IElDdXN0b21FbGVtZW50LFxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnQsXG4gIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHNcbikgPT4ge1xuICBpZiAoZm9ybSkge1xuICAgIC8qKiBUaGlzIHdpbGwgYmUgYSBXZWFrTWFwPEhUTUxGb3JtRWxlbWVudCwgU2V0PEhUTUxFbGVtZW50PiAqL1xuICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSk7XG5cbiAgICBpZiAoZm9ybUVsZW1lbnRzKSB7XG4gICAgICAvKiogSWYgZm9ybUVsZW1lbnRzIGV4aXN0cywgYWRkIHRvIGl0ICovXG4gICAgICBmb3JtRWxlbWVudHMuYWRkKHJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKiBJZiBmb3JtRWxlbWVudHMgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0IGFuZCBhZGQgdG8gaXQgKi9cbiAgICAgIGNvbnN0IGluaXRTZXQgPSBuZXcgU2V0PElDdXN0b21FbGVtZW50PigpO1xuICAgICAgaW5pdFNldC5hZGQocmVmKTtcbiAgICAgIGZvcm1FbGVtZW50c01hcC5zZXQoZm9ybSwgaW5pdFNldCk7XG5cbiAgICAgIC8qKiBBZGQgbGlzdGVuZXJzIHRvIGVtdWxhdGUgdmFsaWRhdGlvbiBhbmQgcmVzZXQgYmVoYXZpb3IgKi9cbiAgICAgIHdpcmVTdWJtaXRMb2dpYyhmb3JtKTtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCBmb3JtUmVzZXRDYWxsYmFjayk7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZm9ybUlucHV0Q2FsbGJhY2spO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmb3JtQ2hhbmdlQ2FsbGJhY2spO1xuICAgIH1cblxuICAgIGZvcm1zTWFwLnNldChmb3JtLCB7IHJlZiwgaW50ZXJuYWxzIH0pO1xuXG4gICAgLyoqIENhbGwgZm9ybUFzc29jaWF0ZWRDYWxsYmFjayBpZiBhcHBsaWNhYmxlICovXG4gICAgaWYgKHJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSAmJiByZWYuZm9ybUFzc29jaWF0ZWRDYWxsYmFjaykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlZi5mb3JtQXNzb2NpYXRlZENhbGxiYWNrLmFwcGx5KHJlZiwgW2Zvcm1dKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgICBzZXRGb3JtVmFsaWRpdHkoZm9ybSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgbG9vayBmb3IgYW4gZWxlbWVudCdzIHBhcmVudCBmb3JtXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBsb29rIGZvciBhIHBhcmVudCBmb3JtXG4gKiBAcmV0dXJuIHtIVE1MRm9ybUVsZW1lbnR8bnVsbH0gLSBUaGUgcGFyZW50IGZvcm0sIGlmIG9uZSBleGlzdHNcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbmRQYXJlbnRGb3JtID0gKGVsZW0pID0+IHtcbiAgbGV0IHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgaWYgKHBhcmVudCAmJiBwYXJlbnQudGFnTmFtZSAhPT0gJ0ZPUk0nKSB7XG4gICAgcGFyZW50ID0gZmluZFBhcmVudEZvcm0ocGFyZW50KTtcbiAgfVxuICByZXR1cm4gcGFyZW50O1xufTtcblxuLyoqXG4gKiBUaHJvdyBhbiBlcnJvciBpZiB0aGUgZWxlbWVudCByZWYgaXMgbm90IGZvcm0gYXNzb2NpYXRlZFxuICogQHBhcmFtIHJlZiB7SUN1c3RvbUVsZW1lbnR9IC0gVGhlIGVsZW1lbnQgdG8gY2hlY2sgaWYgaXQgaXMgZm9ybSBhc3NvY2lhdGVkXG4gKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSAtIFRoZSBlcnJvciBtZXNzYWdlIHRvIHRocm93XG4gKiBAcGFyYW0gRXJyb3JUeXBlIHthbnl9IC0gVGhlIGVycm9yIHR5cGUgdG8gdGhyb3csIGRlZmF1bHRzIHRvIERPTUV4Y2VwdGlvblxuICovXG5leHBvcnQgY29uc3QgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkID0gKFxuICByZWY6IElDdXN0b21FbGVtZW50LFxuICBtZXNzYWdlOiBzdHJpbmcsXG4gIEVycm9yVHlwZTogYW55ID0gRE9NRXhjZXB0aW9uXG4pOiB2b2lkID0+IHtcbiAgaWYgKCFyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3JUeXBlKG1lc3NhZ2UpO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCBmb3IgZWFjaCBIVE1MRm9ybUVsZW1lbnQuY2hlY2tWYWxpZGl0eXxyZXBvcnRWYWxpZGl0eVxuICogd2lsbCBsb29wIG92ZXIgYSBmb3JtJ3MgYWRkZWQgY29tcG9uZW50cyBhbmQgY2FsbCB0aGUgcmVzcGVjdGl2ZVxuICogbWV0aG9kIG1vZGlmeWluZyB0aGUgZGVmYXVsdCByZXR1cm4gdmFsdWUgaWYgbmVlZGVkXG4gKiBAcGFyYW0gZm9ybSB7SFRNTEZvcm1FbGVtZW50fSAtIFRoZSBmb3JtIGVsZW1lbnQgdG8gcnVuIHRoZSBtZXRob2Qgb25cbiAqIEBwYXJhbSByZXR1cm5WYWx1ZSB7Ym9vbGVhbn0gLSBUaGUgaW5pdGlhbCByZXN1bHQgb2YgdGhlIG9yaWdpbmFsIG1ldGhvZFxuICogQHBhcmFtIG1ldGhvZCB7J2NoZWNrVmFsaWRpdHknfCdyZXBvcnRWYWxpZGl0eSd9IC0gVGhlIG9yaWdpbmFsIG1ldGhvZFxuICogQHJldHVybnMge2Jvb2xlYW59IFRoZSBmb3JtJ3MgdmFsaWRpdHkgc3RhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG92ZXJyaWRlRm9ybU1ldGhvZCA9IChcbiAgZm9ybTogSFRNTEZvcm1FbGVtZW50LFxuICByZXR1cm5WYWx1ZTogYm9vbGVhbixcbiAgbWV0aG9kOiAnY2hlY2tWYWxpZGl0eScgfCAncmVwb3J0VmFsaWRpdHknXG4pOiBib29sZWFuID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGZvcm0pO1xuXG4gIC8qKiBTb21lIGZvcm1zIHdvbid0IGNvbnRhaW4gZm9ybSBhc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50cyAqL1xuICBpZiAoZWxlbWVudHMgJiYgZWxlbWVudHMuc2l6ZSkge1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQoZWxlbWVudCk7XG4gICAgICBjb25zdCB2YWxpZCA9IGludGVybmFsc1ttZXRob2RdKCk7XG4gICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIHJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufTtcblxuLyoqXG4gKiBXaWxsIHVwZ3JhZGUgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSBieSBpbml0aWFsaXppbmcgdGhlXG4gKiBpbnN0YW5jZSdzIGZvcm0gYW5kIGxhYmVscy4gVGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpc1xuICogZWl0aGVyIGNvbnN0cnVjdGVkIG9yIGFwcGVuZGVkIGZyb20gYSBEb2N1bWVudEZyYWdtZW50XG4gKiBAcGFyYW0gcmVmIHtJQ3VzdG9tRWxlbWVudH0gLSBUaGUgY3VzdG9tIGVsZW1lbnQgdG8gdXBncmFkZVxuICovXG5leHBvcnQgY29uc3QgdXBncmFkZUludGVybmFscyA9IChyZWY6IElDdXN0b21FbGVtZW50KSA9PiB7XG4gIGlmIChyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KHJlZik7XG4gICAgY29uc3QgeyBsYWJlbHMsIGZvcm0gfSA9IGludGVybmFscztcbiAgICBpbml0TGFiZWxzKHJlZiwgbGFiZWxzKTtcbiAgICBpbml0Rm9ybShyZWYsIGZvcm0sIGludGVybmFscyk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgdG8gc2VlIGlmIE11dGF0aW9uT2JzZXJ2ZXIgZXhpc3RzIGluIHRoZSBjdXJyZW50XG4gKiBleGVjdXRpb24gY29udGV4dC4gV2lsbCBsaWtlbHkgcmV0dXJuIGZhbHNlIG9uIHRoZSBzZXJ2ZXJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbXV0YXRpb25PYnNlcnZlckV4aXN0cygpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbn1cbiIsICJpbXBvcnQgeyBzZXRGb3JtVmFsaWRpdHkgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqIEVtdWxhdGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IFZhbGlkaXR5U3RhdGUgb2JqZWN0ICovXG5leHBvcnQgY2xhc3MgVmFsaWRpdHlTdGF0ZSBpbXBsZW1lbnRzIGdsb2JhbFRoaXMuVmFsaWRpdHlTdGF0ZSB7XG4gIGJhZElucHV0ID0gZmFsc2U7XG4gIGN1c3RvbUVycm9yID0gZmFsc2U7XG4gIHBhdHRlcm5NaXNtYXRjaCA9IGZhbHNlO1xuICByYW5nZU92ZXJmbG93ID0gZmFsc2U7XG4gIHJhbmdlVW5kZXJmbG93ID0gZmFsc2U7XG4gIHN0ZXBNaXNtYXRjaCA9IGZhbHNlO1xuICB0b29Mb25nID0gZmFsc2U7XG4gIHRvb1Nob3J0ID0gZmFsc2U7XG4gIHR5cGVNaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZCA9IHRydWU7XG4gIHZhbHVlTWlzc2luZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIE9iamVjdC5zZWFsKHRoaXMpO1xuICB9XG59XG5cbi8qKlxuICogUmVzZXQgYSBWYWxpZGl0eVN0YXRlIG9iamVjdCBiYWNrIHRvIHZhbGlkXG4gKiBAcGFyYW0ge1ZhbGlkaXR5U3RhdGV9IHZhbGlkaXR5T2JqZWN0IC0gVGhlIG9iamVjdCB0byBtb2RpZnlcbiAqIEByZXR1cm4ge1ZhbGlkaXR5U3RhdGV9IC0gVGhlIG1vZGlmaWVkIFZhbGlkaXR5U3RhdGVPYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IHNldFZhbGlkID0gKHZhbGlkaXR5T2JqZWN0OiBWYWxpZGl0eVN0YXRlKTogVmFsaWRpdHlTdGF0ZSA9PiB7XG4gIHZhbGlkaXR5T2JqZWN0LmJhZElucHV0ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LmN1c3RvbUVycm9yID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnBhdHRlcm5NaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC5yYW5nZU92ZXJmbG93ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnJhbmdlVW5kZXJmbG93ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnN0ZXBNaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC50b29Mb25nID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnRvb1Nob3J0ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnR5cGVNaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC52YWxpZCA9IHRydWU7XG4gIHZhbGlkaXR5T2JqZWN0LnZhbHVlTWlzc2luZyA9IGZhbHNlO1xuICByZXR1cm4gdmFsaWRpdHlPYmplY3Q7XG59O1xuXG4vKipcbiAqIFJlY29uY2lsZSBhIFZhbGlkaXR5U3RhdGUgb2JqZWN0IHdpdGggYSBuZXcgc3RhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge1ZhbGlkaXR5U3RhdGV9IC0gVGhlIGJhc2Ugb2JqZWN0IHRvIHJlY29uY2lsZSB3aXRoIG5ldyBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IC0gQSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0IHRvIG92ZXJyaWRlIHRoZSBvcmlnaW5hbFxuICogQHJldHVybiB7VmFsaWRpdHlTdGF0ZX0gLSBUaGUgdXBkYXRlZCBWYWxpZGl0eVN0YXRlIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgcmVjb25jaWxlVmFsaWRpdHkgPSAoXG4gIHZhbGlkaXR5T2JqZWN0OiBWYWxpZGl0eVN0YXRlLFxuICBuZXdTdGF0ZTogUGFydGlhbDxWYWxpZGl0eVN0YXRlPixcbiAgZm9ybTogSFRNTEZvcm1FbGVtZW50XG4pOiBWYWxpZGl0eVN0YXRlID0+IHtcbiAgdmFsaWRpdHlPYmplY3QudmFsaWQgPSBpc1ZhbGlkKG5ld1N0YXRlKTtcbiAgT2JqZWN0LmtleXMobmV3U3RhdGUpLmZvckVhY2goKGtleSkgPT4gKHZhbGlkaXR5T2JqZWN0W2tleV0gPSBuZXdTdGF0ZVtrZXldKSk7XG4gIGlmIChmb3JtKSB7XG4gICAgc2V0Rm9ybVZhbGlkaXR5KGZvcm0pO1xuICB9XG4gIHJldHVybiB2YWxpZGl0eU9iamVjdDtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0IHNob3VsZCBiZSB2YWxpZFxuICogQHBhcmFtIHtPYmplY3R9IC0gQSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSAtIFNob3VsZCB0aGUgbmV3IG9iamVjdCBiZSB2YWxpZFxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZCA9ICh2YWxpZGl0eVN0YXRlOiBQYXJ0aWFsPFZhbGlkaXR5U3RhdGU+KTogYm9vbGVhbiA9PiB7XG4gIGxldCB2YWxpZCA9IHRydWU7XG4gIGZvciAobGV0IGtleSBpbiB2YWxpZGl0eVN0YXRlKSB7XG4gICAgaWYgKGtleSAhPT0gJ3ZhbGlkJyAmJiB2YWxpZGl0eVN0YXRlW2tleV0gIT09IGZhbHNlKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsaWQ7XG59O1xuIiwgImltcG9ydCB7IElDdXN0b21FbGVtZW50IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbi8qKiBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSByZWYgZm9yIHRlaCBDdXN0b21TdGF0ZVNldCAqL1xuY29uc3QgY3VzdG9tU3RhdGVNYXAgPSBuZXcgV2Vha01hcDxDdXN0b21TdGF0ZVNldCwgSUN1c3RvbUVsZW1lbnQ+KCk7XG5cbmZ1bmN0aW9uIGFkZFN0YXRlKHJlZjogSUN1c3RvbUVsZW1lbnQsIHN0YXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gIHJlZi50b2dnbGVBdHRyaWJ1dGUoc3RhdGVOYW1lLCB0cnVlKTtcbiAgaWYgKHJlZi5wYXJ0KSB7XG4gICAgcmVmLnBhcnQuYWRkKHN0YXRlTmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ3VzdG9tU3RhdGUgPSBgLS0ke3N0cmluZ31gO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tU3RhdGVTZXQgZXh0ZW5kcyBTZXQ8Q3VzdG9tU3RhdGU+IHtcbiAgc3RhdGljIGdldCBpc1BvbHlmaWxsZWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyZWY6IElDdXN0b21FbGVtZW50KSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoIXJlZiB8fCAhcmVmLnRhZ05hbWUgfHwgcmVmLnRhZ05hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSWxsZWdhbCBjb25zdHJ1Y3RvcicpO1xuICAgIH1cblxuICAgIGN1c3RvbVN0YXRlTWFwLnNldCh0aGlzLCByZWYpO1xuICB9XG5cbiAgYWRkKHN0YXRlOiBDdXN0b21TdGF0ZSkge1xuICAgIGlmICghL14tLS8udGVzdChzdGF0ZSkgfHwgdHlwZW9mIHN0YXRlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdhZGQnIG9uICdDdXN0b21TdGF0ZVNldCc6IFRoZSBzcGVjaWZpZWQgdmFsdWUgJHtzdGF0ZX0gbXVzdCBzdGFydCB3aXRoICctLScuYFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuYWRkKHN0YXRlKTtcbiAgICBjb25zdCByZWYgPSBjdXN0b21TdGF0ZU1hcC5nZXQodGhpcyk7XG4gICAgY29uc3Qgc3RhdGVOYW1lID0gYHN0YXRlJHtzdGF0ZX1gO1xuXG4gICAgLyoqXG4gICAgICogT25seSBhZGQgdGhlIHN0YXRlIGltbWVkaWF0ZWx5IGlmIHRoZSByZWYgaXMgY29ubmVjdGVkIHRvIHRoZSBET007XG4gICAgICogb3RoZXJ3aXNlLCB3YWl0IGEgdGljayBiZWNhdXNlIHRoZSBlbGVtZW50IGlzIGxpa2VseSBiZWluZyBjb25zdHJ1Y3RlZFxuICAgICAqIGJ5IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgYW5kIHdvdWxkIHRocm93IG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBpZiAocmVmLmlzQ29ubmVjdGVkKSB7XG4gICAgICBhZGRTdGF0ZShyZWYsIHN0YXRlTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhZGRTdGF0ZShyZWYsIHN0YXRlTmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgZm9yIChsZXQgW2VudHJ5XSBvZiB0aGlzLmVudHJpZXMoKSkge1xuICAgICAgdGhpcy5kZWxldGUoZW50cnkpO1xuICAgIH1cbiAgICBzdXBlci5jbGVhcigpO1xuICB9XG5cbiAgZGVsZXRlKHN0YXRlOiBDdXN0b21TdGF0ZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLmRlbGV0ZShzdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gY3VzdG9tU3RhdGVNYXAuZ2V0KHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogT25seSB0b2dnbGUgdGhlIHN0YXRlL2F0dHIgaW1tZWRpYXRlbHkgaWYgdGhlIHJlZiBpcyBjb25uZWN0ZWQgdG8gdGhlIERPTTtcbiAgICAgKiBvdGhlcndpc2UsIHdhaXQgYSB0aWNrIGJlY2F1c2UgdGhlIGVsZW1lbnQgaXMgbGlrZWx5IGJlaW5nIGNvbnN0cnVjdGVkXG4gICAgICogYnkgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBhbmQgd291bGQgdGhyb3cgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoYHN0YXRlJHtzdGF0ZX1gLCBmYWxzZSk7XG4gICAgICBpZiAocmVmLnBhcnQpIHtcbiAgICAgICAgcmVmLnBhcnQucmVtb3ZlKGBzdGF0ZSR7c3RhdGV9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZWYudG9nZ2xlQXR0cmlidXRlKGBzdGF0ZSR7c3RhdGV9YCwgZmFsc2UpO1xuICAgICAgICBpZiAocmVmLnBhcnQpIHtcbiAgICAgICAgICByZWYucGFydC5yZW1vdmUoYHN0YXRlJHtzdGF0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwgImV4cG9ydCBjbGFzcyBIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbiBpbXBsZW1lbnRzIGdsb2JhbFRoaXMuSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24ge1xuICByZWFkb25seSAjZWxlbWVudHM7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICB0aGlzLiNlbGVtZW50cyA9IGVsZW1lbnRzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcblxuICAgICAgdGhpc1tpXSA9IGVsZW1lbnQ7XG4gICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICB0aGlzW2VsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJyldID0gZWxlbWVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgW2luZGV4OiBudW1iZXJdOiBFbGVtZW50O1xuXG4gIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy4jZWxlbWVudHMubGVuZ3RoO1xuICB9XG5cbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2VsZW1lbnRzW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgfVxuXG4gIGl0ZW0oaSk6IEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzW2ldID09IG51bGwgPyBudWxsIDogdGhpc1tpXTtcbiAgfVxuXG4gIG5hbWVkSXRlbShuYW1lKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXNbbmFtZV0gPT0gbnVsbCA/IG51bGwgOiB0aGlzW25hbWVdO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24gfSBmcm9tICcuL0hUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uLmpzJztcbmltcG9ydCB7IGZvcm1FbGVtZW50c01hcCB9IGZyb20gJy4vbWFwcy5qcyc7XG5pbXBvcnQgeyBvdmVycmlkZUZvcm1NZXRob2QgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBQYXRjaCB0aGUgSFRNTEVsZW1lbnQgcHJvdG90eXBlXG4gKlxuICogVGhpcyBmdW5jdGlvbiBwYXRjaGVzIGNoZWNrVmFsaWRpdHksIHJlcG9ydFZhbGlkaXR5IGFuZCBlbGVtZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hGb3JtUHJvdG90eXBlKCk6IHZvaWQge1xuICBjb25zdCBjaGVja1ZhbGlkaXR5ID0gSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5jaGVja1ZhbGlkaXR5O1xuICBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmNoZWNrVmFsaWRpdHkgPSBjaGVja1ZhbGlkaXR5T3ZlcnJpZGU7XG5cbiAgY29uc3QgcmVwb3J0VmFsaWRpdHkgPSBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLnJlcG9ydFZhbGlkaXR5O1xuICBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLnJlcG9ydFZhbGlkaXR5ID0gcmVwb3J0VmFsaWRpdHlPdmVycmlkZTtcblxuICBmdW5jdGlvbiBjaGVja1ZhbGlkaXR5T3ZlcnJpZGUoLi4uYXJncyk6IGJvb2xlYW4ge1xuICAgIGxldCByZXR1cm5WYWx1ZSA9IGNoZWNrVmFsaWRpdHkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgcmV0dXJuIG92ZXJyaWRlRm9ybU1ldGhvZCh0aGlzLCByZXR1cm5WYWx1ZSwgJ2NoZWNrVmFsaWRpdHknKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcG9ydFZhbGlkaXR5T3ZlcnJpZGUoLi4uYXJncyk6IGJvb2xlYW4ge1xuICAgIGxldCByZXR1cm5WYWx1ZSA9IHJlcG9ydFZhbGlkaXR5LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHJldHVybiBvdmVycmlkZUZvcm1NZXRob2QodGhpcywgcmV0dXJuVmFsdWUsICdyZXBvcnRWYWxpZGl0eScpO1xuICB9XG5cbiAgY29uc3QgeyBnZXQgfSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZSwgJ2VsZW1lbnRzJyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLCAnZWxlbWVudHMnLCB7XG4gICAgZ2V0KC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZ2V0LmNhbGwodGhpcywgLi4uYXJncyk7XG4gICAgICBjb25zdCBwb2x5ZmlsbGVkRWxlbWVudHMgPSBBcnJheS5mcm9tKGZvcm1FbGVtZW50c01hcC5nZXQodGhpcykgfHwgW10pO1xuXG4gICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gcG9seWZpbGxlZCBlbGVtZW50cywgcmV0dXJuIHRoZSBuYXRpdmUgZWxlbWVudHMgY29sbGVjdGlvblxuICAgICAgaWYgKHBvbHlmaWxsZWRFbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgICAgfVxuXG4gICAgICAvLyBNZXJnZSB0aGUgbmF0aXZlIGVsZW1lbnRzIHdpdGggdGhlIHBvbHlmaWxsZWQgZWxlbWVudHNcbiAgICAgIC8vIGFuZCBvcmRlciB0aGVtIGJ5IHRoZWlyIHBvc2l0aW9uIGluIHRoZSBET01cbiAgICAgIGNvbnN0IG9yZGVyZWRFbGVtZW50cyA9IEFycmF5LmZyb20oZWxlbWVudHMpXG4gICAgICAgIC5jb25jYXQocG9seWZpbGxlZEVsZW1lbnRzKVxuICAgICAgICAuc29ydCgoYTogRWxlbWVudCwgYjogRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKSAmIDIgPyAxIDogLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ldyBIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbihvcmRlcmVkRWxlbWVudHMpO1xuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIGNvbm5lY3RlZENhbGxiYWNrTWFwLFxuICBpbnRlcm5hbHNNYXAsXG4gIHJlZk1hcCxcbiAgcmVmVmFsdWVNYXAsXG4gIHNoYWRvd0hvc3RzTWFwLFxuICBzaGFkb3dSb290TWFwLFxuICB2YWxpZGF0aW9uQW5jaG9yTWFwLFxuICB2YWxpZGl0eU1hcCxcbiAgdmFsaWRhdGlvbk1lc3NhZ2VNYXAsXG4gIHZhbGlkaXR5VXBncmFkZU1hcCxcbn0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7XG4gIGNyZWF0ZUhpZGRlbklucHV0LFxuICBmaW5kUGFyZW50Rm9ybSxcbiAgaW5pdFJlZixcbiAgbXV0YXRpb25PYnNlcnZlckV4aXN0cyxcbiAgcmVtb3ZlSGlkZGVuSW5wdXRzLFxuICBzZXREaXNhYmxlZCxcbiAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkLFxuICB1cGdyYWRlSW50ZXJuYWxzLFxufSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IGluaXRBb20gfSBmcm9tICcuL2FvbS5qcyc7XG5pbXBvcnQgeyBWYWxpZGl0eVN0YXRlLCByZWNvbmNpbGVWYWxpZGl0eSwgc2V0VmFsaWQgfSBmcm9tICcuL1ZhbGlkaXR5U3RhdGUuanMnO1xuaW1wb3J0IHsgZGVmZXJVcGdyYWRlLCBvYnNlcnZlckNhbGxiYWNrLCBvYnNlcnZlckNvbmZpZyB9IGZyb20gJy4vbXV0YXRpb24tb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IElFbGVtZW50SW50ZXJuYWxzLCBJQ3VzdG9tRWxlbWVudCwgTGFiZWxzTGlzdCB9IGZyb20gJy4vdHlwZXMuanMnO1xuaW1wb3J0IHsgQ3VzdG9tU3RhdGVTZXQgfSBmcm9tICcuL0N1c3RvbVN0YXRlU2V0LmpzJztcbmltcG9ydCB7IHBhdGNoRm9ybVByb3RvdHlwZSB9IGZyb20gJy4vcGF0Y2gtZm9ybS1wcm90b3R5cGUuanMnO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICdsaXQtaHRtbC9pcy1zZXJ2ZXIuanMnO1xuXG5leHBvcnQgY2xhc3MgRWxlbWVudEludGVybmFscyBpbXBsZW1lbnRzIElFbGVtZW50SW50ZXJuYWxzIHtcbiAgYXJpYUF0b21pYzogc3RyaW5nO1xuICBhcmlhQXV0b0NvbXBsZXRlOiBzdHJpbmc7XG4gIGFyaWFCdXN5OiBzdHJpbmc7XG4gIGFyaWFDaGVja2VkOiBzdHJpbmc7XG4gIGFyaWFDb2xDb3VudDogc3RyaW5nO1xuICBhcmlhQ29sSW5kZXg6IHN0cmluZztcbiAgYXJpYUNvbEluZGV4VGV4dDogc3RyaW5nO1xuICBhcmlhQ29sU3Bhbjogc3RyaW5nO1xuICBhcmlhQ3VycmVudDogc3RyaW5nO1xuICBhcmlhRGlzYWJsZWQ6IHN0cmluZztcbiAgYXJpYUV4cGFuZGVkOiBzdHJpbmc7XG4gIGFyaWFIYXNQb3B1cDogc3RyaW5nO1xuICBhcmlhSGlkZGVuOiBzdHJpbmc7XG4gIGFyaWFJbnZhbGlkOiBzdHJpbmc7XG4gIGFyaWFLZXlTaG9ydGN1dHM6IHN0cmluZztcbiAgYXJpYUxhYmVsOiBzdHJpbmc7XG4gIGFyaWFMZXZlbDogc3RyaW5nO1xuICBhcmlhTGl2ZTogc3RyaW5nO1xuICBhcmlhTW9kYWw6IHN0cmluZztcbiAgYXJpYU11bHRpTGluZTogc3RyaW5nO1xuICBhcmlhTXVsdGlTZWxlY3RhYmxlOiBzdHJpbmc7XG4gIGFyaWFPcmllbnRhdGlvbjogc3RyaW5nO1xuICBhcmlhUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgYXJpYVBvc0luU2V0OiBzdHJpbmc7XG4gIGFyaWFQcmVzc2VkOiBzdHJpbmc7XG4gIGFyaWFSZWFkT25seTogc3RyaW5nO1xuICBhcmlhUmVsZXZhbnQ6IHN0cmluZztcbiAgYXJpYVJlcXVpcmVkOiBzdHJpbmc7XG4gIGFyaWFSb2xlRGVzY3JpcHRpb246IHN0cmluZztcbiAgYXJpYVJvd0NvdW50OiBzdHJpbmc7XG4gIGFyaWFSb3dJbmRleDogc3RyaW5nO1xuICBhcmlhUm93SW5kZXhUZXh0OiBzdHJpbmc7XG4gIGFyaWFSb3dTcGFuOiBzdHJpbmc7XG4gIGFyaWFTZWxlY3RlZDogc3RyaW5nO1xuICBhcmlhU2V0U2l6ZTogc3RyaW5nO1xuICBhcmlhU29ydDogc3RyaW5nO1xuICBhcmlhVmFsdWVNYXg6IHN0cmluZztcbiAgYXJpYVZhbHVlTWluOiBzdHJpbmc7XG4gIGFyaWFWYWx1ZU5vdzogc3RyaW5nO1xuICBhcmlhVmFsdWVUZXh0OiBzdHJpbmc7XG4gIHJvbGU6IHN0cmluZztcblxuICBzdGF0ZXM6IEN1c3RvbVN0YXRlU2V0O1xuXG4gIHN0YXRpYyBnZXQgaXNQb2x5ZmlsbGVkKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocmVmOiBJQ3VzdG9tRWxlbWVudCkge1xuICAgIGlmICghcmVmIHx8ICFyZWYudGFnTmFtZSB8fCByZWYudGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbGxlZ2FsIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuICAgIGNvbnN0IHJvb3ROb2RlID0gcmVmLmdldFJvb3ROb2RlKCk7XG4gICAgY29uc3QgdmFsaWRpdHkgPSBuZXcgVmFsaWRpdHlTdGF0ZSgpO1xuICAgIHRoaXMuc3RhdGVzID0gbmV3IEN1c3RvbVN0YXRlU2V0KHJlZik7XG4gICAgcmVmTWFwLnNldCh0aGlzLCByZWYpO1xuICAgIHZhbGlkaXR5TWFwLnNldCh0aGlzLCB2YWxpZGl0eSk7XG4gICAgaW50ZXJuYWxzTWFwLnNldChyZWYsIHRoaXMpO1xuICAgIGluaXRBb20ocmVmLCB0aGlzKTtcbiAgICBpbml0UmVmKHJlZiwgdGhpcyk7XG4gICAgT2JqZWN0LnNlYWwodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBJZiBhcHBlbmRlZCBmcm9tIGEgRG9jdW1lbnRGcmFnbWVudCwgd2FpdCB1bnRpbCBpdCBpcyBjb25uZWN0ZWRcbiAgICAgKiBiZWZvcmUgYXR0ZW1wdGluZyB0byB1cGdyYWRlIHRoZSBpbnRlcm5hbHMgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBpZiAocm9vdE5vZGUgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICBkZWZlclVwZ3JhZGUocm9vdE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaWxsIHJldHVybiB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGluIGEgdmFsaWQgc3RhdGVcbiAgICovXG4gIGNoZWNrVmFsaWRpdHkoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ2NoZWNrVmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICAvKiogSWYgdGhlIGVsZW1lbnQgd2lsbCBub3QgdmFsaWRhdGUsIGl0IGlzIG5lY2Vzc2FyaWx5IHZhbGlkIGJ5IGRlZmF1bHQgKi9cbiAgICBpZiAoIXRoaXMud2lsbFZhbGlkYXRlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcC5nZXQodGhpcyk7XG4gICAgaWYgKCF2YWxpZGl0eS52YWxpZCkge1xuICAgICAgY29uc3QgdmFsaWRpdHlFdmVudCA9IG5ldyBFdmVudCgnaW52YWxpZCcsIHtcbiAgICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgIGNvbXBvc2VkOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgcmVmLmRpc3BhdGNoRXZlbnQodmFsaWRpdHlFdmVudCk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZGl0eS52YWxpZDtcbiAgfVxuXG4gIC8qKiBUaGUgZm9ybSBlbGVtZW50IHRoZSBjdXN0b20gZWxlbWVudCBpcyBhc3NvY2lhdGVkIHdpdGggKi9cbiAgZ2V0IGZvcm0oKTogSFRNTEZvcm1FbGVtZW50IHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ2Zvcm0nIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGxldCBmb3JtO1xuICAgIGlmIChyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10gPT09IHRydWUpIHtcbiAgICAgIGZvcm0gPSBmaW5kUGFyZW50Rm9ybShyZWYpO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIC8qKiBBIGxpc3Qgb2YgYWxsIHJlbGF0aXZlIGZvcm0gbGFiZWxzIGZvciB0aGlzIGVsZW1lbnQgKi9cbiAgZ2V0IGxhYmVscygpOiBMYWJlbHNMaXN0IHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ2xhYmVscycgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgY29uc3QgaWQgPSByZWYuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGNvbnN0IGhvc3RSb290ID0gcmVmLmdldFJvb3ROb2RlKCkgYXMgRWxlbWVudDtcbiAgICBpZiAoaG9zdFJvb3QgJiYgaWQpIHtcbiAgICAgIHJldHVybiBob3N0Um9vdC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxMYWJlbEVsZW1lbnQ+KGBbZm9yPVwiJHtpZH1cIl1gKSBhcyB1bmtub3duIGFzIExhYmVsc0xpc3Q7XG4gICAgfVxuICAgIHJldHVybiBbXSBhcyB1bmtub3duIGFzIExhYmVsc0xpc3Q7XG4gIH1cblxuICAvKiogV2lsbCByZXBvcnQgdGhlIGVsZW1lbnRzIHZhbGlkaXR5IHN0YXRlICovXG4gIHJlcG9ydFZhbGlkaXR5KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdyZXBvcnRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIC8qKiBJZiB0aGUgZWxlbWVudCB3aWxsIG5vdCB2YWxpZGF0ZSwgaXQgaXMgdmFsaWQgYnkgZGVmYXVsdCAqL1xuICAgIGlmICghdGhpcy53aWxsVmFsaWRhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB2YWxpZCA9IHRoaXMuY2hlY2tWYWxpZGl0eSgpO1xuICAgIGNvbnN0IGFuY2hvciA9IHZhbGlkYXRpb25BbmNob3JNYXAuZ2V0KHRoaXMpO1xuICAgIGlmIChhbmNob3IgJiYgIXJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdyZXBvcnRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghdmFsaWQgJiYgYW5jaG9yKSB7XG4gICAgICByZWYuZm9jdXMoKTtcbiAgICAgIGFuY2hvci5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgZWxlbWVudCdzIHZhbHVlIHdpdGhpbiB0aGUgZm9ybSAqL1xuICBzZXRGb3JtVmFsdWUodmFsdWU6IHN0cmluZyB8IEZvcm1EYXRhIHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdzZXRGb3JtVmFsdWUnIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICByZW1vdmVIaWRkZW5JbnB1dHModGhpcyk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1EYXRhKSkge1xuICAgICAgaWYgKHJlZi5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICBjb25zdCBoaWRkZW5JbnB1dCA9IGNyZWF0ZUhpZGRlbklucHV0KHJlZiwgdGhpcyk7XG4gICAgICAgIGhpZGRlbklucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgIEFycmF5LmZyb20odmFsdWUpXG4gICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgLmZvckVhY2goKFtmb3JtRGF0YUtleSwgZm9ybURhdGFWYWx1ZV0pID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGZvcm1EYXRhVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBoaWRkZW5JbnB1dCA9IGNyZWF0ZUhpZGRlbklucHV0KHJlZiwgdGhpcyk7XG4gICAgICAgICAgICBoaWRkZW5JbnB1dC5uYW1lID0gZm9ybURhdGFLZXk7XG4gICAgICAgICAgICBoaWRkZW5JbnB1dC52YWx1ZSA9IGZvcm1EYXRhVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVmVmFsdWVNYXAuc2V0KHJlZiwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGVsZW1lbnQncyB2YWxpZGl0eS4gVGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgcGFydGlhbCBWYWxpZGl0eVN0YXRlIG9iamVjdFxuICAgKiByZWZsZWN0aW5nIHRoZSBjaGFuZ2VzIHRvIGJlIG1hZGUgdG8gdGhlIGVsZW1lbnQncyB2YWxpZGl0eS4gSWYgdGhlIGVsZW1lbnQgaXMgaW52YWxpZCxcbiAgICogdGhlIHNlY29uZCBhcmd1bWVudCBzZXRzIHRoZSBlbGVtZW50J3MgdmFsaWRhdGlvbiBtZXNzYWdlLlxuICAgKlxuICAgKiBJZiB0aGUgZmllbGQgaXMgdmFsaWQgYW5kIGEgbWVzc2FnZSBpcyBzcGVjaWZpZWQsIHRoZSBtZXRob2Qgd2lsbCB0aHJvdyBhIFR5cGVFcnJvci5cbiAgICovXG4gIHNldFZhbGlkaXR5KFxuICAgIHZhbGlkaXR5Q2hhbmdlczogUGFydGlhbDxnbG9iYWxUaGlzLlZhbGlkaXR5U3RhdGU+LFxuICAgIHZhbGlkYXRpb25NZXNzYWdlPzogc3RyaW5nLFxuICAgIGFuY2hvcj86IEhUTUxFbGVtZW50XG4gICkge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdzZXRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGlmICghdmFsaWRpdHlDaGFuZ2VzKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBcIkZhaWxlZCB0byBleGVjdXRlICdzZXRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIHZhbGlkYXRpb25BbmNob3JNYXAuc2V0KHRoaXMsIGFuY2hvcik7XG4gICAgY29uc3QgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcC5nZXQodGhpcyk7XG4gICAgY29uc3QgdmFsaWRpdHlDaGFuZ2VzT2JqOiBQYXJ0aWFsPFZhbGlkaXR5U3RhdGU+ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsaWRpdHlDaGFuZ2VzKSB7XG4gICAgICB2YWxpZGl0eUNoYW5nZXNPYmpba2V5XSA9IHZhbGlkaXR5Q2hhbmdlc1trZXldO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LmtleXModmFsaWRpdHlDaGFuZ2VzT2JqKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldFZhbGlkKHZhbGlkaXR5KTtcbiAgICB9XG4gICAgY29uc3QgY2hlY2sgPSB7IC4uLnZhbGlkaXR5LCAuLi52YWxpZGl0eUNoYW5nZXNPYmogfTtcbiAgICBkZWxldGUgY2hlY2sudmFsaWQ7XG4gICAgY29uc3QgeyB2YWxpZCB9ID0gcmVjb25jaWxlVmFsaWRpdHkodmFsaWRpdHksIGNoZWNrLCB0aGlzLmZvcm0pO1xuXG4gICAgaWYgKCF2YWxpZCAmJiAhdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnc2V0VmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHNlY29uZCBhcmd1bWVudCBzaG91bGQgbm90IGJlIGVtcHR5IGlmIG9uZSBvciBtb3JlIGZsYWdzIGluIHRoZSBmaXJzdCBhcmd1bWVudCBhcmUgdHJ1ZS5gXG4gICAgICApO1xuICAgIH1cbiAgICB2YWxpZGF0aW9uTWVzc2FnZU1hcC5zZXQodGhpcywgdmFsaWQgPyAnJyA6IHZhbGlkYXRpb25NZXNzYWdlKTtcblxuICAgIC8vIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgaG9zdCBlbGVtZW50IGlzIGNvbm5lY3RlZCBiZWZvcmUgYWRkaW5nIGF0dHJpYnV0ZXNcbiAgICAvLyBiZWNhdXNlIHNhZmFyaSBkb2VzbnQgYWxsb3cgZWxlbWVudHMgdG8gaGF2ZSBhdHRyaWJ1dGVzIGFkZGVkIGluIHRoZSBjb25zdHJ1Y3RvclxuICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy1pbnZhbGlkJywgIXZhbGlkKTtcbiAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy12YWxpZCcsIHZhbGlkKTtcbiAgICAgIHJlZi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIGAkeyF2YWxpZH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRpdHlVcGdyYWRlTWFwLnNldChyZWYsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzaGFkb3dSb290KCk6IFNoYWRvd1Jvb3QgfCBudWxsIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBzaGFkb3dSb290TWFwLmdldChyZWYpO1xuICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICByZXR1cm4gc2hhZG93Um9vdDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiogVGhlIGVsZW1lbnQncyB2YWxpZGF0aW9uIG1lc3NhZ2Ugc2V0IGR1cmluZyBhIGNhbGwgdG8gRWxlbWVudEludGVybmFscy5zZXRWYWxpZGl0eSAqL1xuICBnZXQgdmFsaWRhdGlvbk1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ3ZhbGlkYXRpb25NZXNzYWdlJyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICByZXR1cm4gdmFsaWRhdGlvbk1lc3NhZ2VNYXAuZ2V0KHRoaXMpO1xuICB9XG5cbiAgLyoqIFRoZSBjdXJyZW50IHZhbGlkaXR5IHN0YXRlIG9mIHRoZSBvYmplY3QgKi9cbiAgZ2V0IHZhbGlkaXR5KCk6IGdsb2JhbFRoaXMuVmFsaWRpdHlTdGF0ZSB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIHJlYWQgdGhlICd2YWxpZGl0eScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgY29uc3QgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcC5nZXQodGhpcyk7XG4gICAgcmV0dXJuIHZhbGlkaXR5O1xuICB9XG5cbiAgLyoqIElmIHRydWUgdGhlIGVsZW1lbnQgd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhIGZvcm0ncyBjb25zdHJhaW50IHZhbGlkYXRpb24uICovXG4gIGdldCB3aWxsVmFsaWRhdGUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIHJlYWQgdGhlICd3aWxsVmFsaWRhdGUnIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGlmIChyZWYuZGlzYWJsZWQgfHwgcmVmLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fCByZWYuaGFzQXR0cmlidXRlKCdyZWFkb25seScpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8vIC0tLSBEaXNhYmxpbmcgdGhpcyB0eXBlIGRlY2xhcmF0aW9uIHRvIGF2b2lkIGNvbmZsaWN0IHdpdGggZXh0ZXJuYWwgZWxlbWVudC1pbnRlcm5hbHMtcG9seWZpbGwgdHlwZXMgLS0tXG4vLyBkZWNsYXJlIGdsb2JhbCB7XG4vLyAgIGludGVyZmFjZSBDdXN0b21FbGVtZW50Q29uc3RydWN0b3Ige1xuLy8gICAgIGZvcm1Bc3NvY2lhdGVkPzogYm9vbGVhbjtcbi8vICAgfVxuXG4vLyAgIGludGVyZmFjZSBXaW5kb3cge1xuLy8gICAgIEVsZW1lbnRJbnRlcm5hbHM6IHR5cGVvZiBFbGVtZW50SW50ZXJuYWxzO1xuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnRJbnRlcm5hbHNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gIGlmIChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICF3aW5kb3cuRWxlbWVudEludGVybmFscyB8fFxuICAgICFIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNsYXNzIEVsZW1lbnRJbnRlcm5hbHNGZWF0dXJlRGV0ZWN0aW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLmludGVybmFscyA9IHRoaXMuYXR0YWNoSW50ZXJuYWxzKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHJhbmRvbU5hbWUgPSBgZWxlbWVudC1pbnRlcm5hbHMtZmVhdHVyZS1kZXRlY3Rpb24tJHtNYXRoLnJhbmRvbSgpXG4gICAgLnRvU3RyaW5nKDM2KVxuICAgIC5yZXBsYWNlKC9bXmEtel0rL2csICcnKX1gO1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUocmFuZG9tTmFtZSwgRWxlbWVudEludGVybmFsc0ZlYXR1cmVEZXRlY3Rpb24pO1xuICBjb25zdCBmZWF0dXJlRGV0ZWN0aW9uRWxlbWVudCA9IG5ldyBFbGVtZW50SW50ZXJuYWxzRmVhdHVyZURldGVjdGlvbigpO1xuICByZXR1cm4gW1xuICAgICdzaGFkb3dSb290JyxcbiAgICAnZm9ybScsXG4gICAgJ3dpbGxWYWxpZGF0ZScsXG4gICAgJ3ZhbGlkaXR5JyxcbiAgICAndmFsaWRhdGlvbk1lc3NhZ2UnLFxuICAgICdsYWJlbHMnLFxuICAgICdzZXRGb3JtVmFsdWUnLFxuICAgICdzZXRWYWxpZGl0eScsXG4gICAgJ2NoZWNrVmFsaWRpdHknLFxuICAgICdyZXBvcnRWYWxpZGl0eScsXG4gIF0uZXZlcnkoKHByb3ApID0+IHByb3AgaW4gZmVhdHVyZURldGVjdGlvbkVsZW1lbnQuaW50ZXJuYWxzKTtcbn1cblxuLy8gT25seSBpbmNsdWRlcyB0aGlzIHBvbHlmaWxsIGlmIHdlIGFyZSBpbiBhIGplc3QgcnVubmVyIG9yIG5vdCBpbiBTU1JcbmlmIChcbiAgIWlzU2VydmVyIHx8XG4gICgocHJvY2VzcyBhcyBhbnkpPy5lbnYuSkVTVF9XT1JLRVJfSUQgIT09IHVuZGVmaW5lZCAmJiAocHJvY2VzcyBhcyBhbnkpPy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0Jylcbikge1xuICBpZiAoIWlzRWxlbWVudEludGVybmFsc1N1cHBvcnRlZCgpKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvKiogQHRzLWV4cGVjdC1lcnJvcjogd2UgbmVlZCB0byByZXBsYWNlIHRoZSBkZWZhdWx0IEVsZW1lbnRJbnRlcm5hbHMgKi9cbiAgICAgIHdpbmRvdy5FbGVtZW50SW50ZXJuYWxzID0gRWxlbWVudEludGVybmFscztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGRlZmluZSA9IEN1c3RvbUVsZW1lbnRSZWdpc3RyeS5wcm90b3R5cGUuZGVmaW5lO1xuICAgICAgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5kZWZpbmUgPSBmdW5jdGlvbiAobmFtZSwgY29uc3RydWN0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9yLmZvcm1Bc3NvY2lhdGVkKSB7XG4gICAgICAgICAgY29uc3QgY29ubmVjdGVkQ2FsbGJhY2sgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2s7XG4gICAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFjb25uZWN0ZWRDYWxsYmFja01hcC5oYXModGhpcykpIHtcbiAgICAgICAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2tNYXAuc2V0KHRoaXMsIHRydWUpO1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgIHNldERpc2FibGVkKHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25uZWN0ZWRDYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbm5lY3RlZENhbGxiYWNrLmFwcGx5KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWx3YXlzIHVwZ3JhZGVJbnRlcm5hbHMgaW4gY29ubmVjdGVkQ2FsbGJhY2sgaW5zdGVhZCBvZiBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgdXBncmFkZUludGVybmFscyh0aGlzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmaW5lLmNhbGwodGhpcywgbmFtZSwgY29uc3RydWN0b3IsIG9wdGlvbnMpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGEgY3VzdG9tIGVsZW1lbnQuIENhbGxpbmcgdGhpcyBtZXRob2RcbiAgICAgKiBvbiBhIGJ1aWx0LWluIGVsZW1lbnQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgICAgKi9cbiAgICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEludGVybmFscyA9IGZ1bmN0aW9uICgpOiBJRWxlbWVudEludGVybmFscyB7XG4gICAgICAgIGlmICghdGhpcy50YWdOYW1lKSB7XG4gICAgICAgICAgLyoqIFRoaXMgaGFwcGVucyBpbiB0aGUgTGl0U1NSIGVudmlyb25tZW50LiBIZXJlIHdlIGNhbiBnZW5lcmFsbHkgaWdub3JlIGludGVybmFscyBmb3Igbm93ICovXG4gICAgICAgICAgcmV0dXJuIHt9IGFzIG9iamVjdCBhcyBJRWxlbWVudEludGVybmFscztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhZ05hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnYXR0YWNoSW50ZXJuYWxzJyBvbiAnSFRNTEVsZW1lbnQnOiBVbmFibGUgdG8gYXR0YWNoIEVsZW1lbnRJbnRlcm5hbHMgdG8gbm9uLWN1c3RvbSBlbGVtZW50cy5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW50ZXJuYWxzTWFwLmhhcyh0aGlzKSkge1xuICAgICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgICAgICBgRE9NRXhjZXB0aW9uOiBGYWlsZWQgdG8gZXhlY3V0ZSAnYXR0YWNoSW50ZXJuYWxzJyBvbiAnSFRNTEVsZW1lbnQnOiBFbGVtZW50SW50ZXJuYWxzIGZvciB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgd2FzIGFscmVhZHkgYXR0YWNoZWQuYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50SW50ZXJuYWxzKHRoaXMpIGFzIElFbGVtZW50SW50ZXJuYWxzO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8taW5uZXItZGVjbGFyYXRpb25zXG4gICAgICBmdW5jdGlvbiBhdHRhY2hTaGFkb3dPYnNlcnZlciguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBhdHRhY2hTaGFkb3cuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIHNoYWRvd1Jvb3RNYXAuc2V0KHRoaXMsIHNoYWRvd1Jvb3QpO1xuXG4gICAgICAgIGlmIChtdXRhdGlvbk9ic2VydmVyRXhpc3RzKCkpIHtcbiAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spO1xuICAgICAgICAgIGlmICh3aW5kb3cuU2hhZHlET00pIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGhpcywgb2JzZXJ2ZXJDb25maWcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNoYWRvd1Jvb3QsIG9ic2VydmVyQ29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2hhZG93SG9zdHNNYXAuc2V0KHRoaXMsIG9ic2VydmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hhZG93Um9vdDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYXR0YWNoU2hhZG93ID0gRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93O1xuICAgICAgRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93ID0gYXR0YWNoU2hhZG93T2JzZXJ2ZXI7XG4gICAgfVxuXG4gICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKSkge1xuICAgICAgY29uc3QgZG9jdW1lbnRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spO1xuICAgICAgZG9jdW1lbnRPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgb2JzZXJ2ZXJDb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEtlZXBzIHRoZSBwb2x5ZmlsbCBmcm9tIHRocm93aW5nIGluIGVudmlyb25tZW50cyB3aGVyZSBIVE1MRm9ybUVsZW1lbnRcbiAgICAgKiBpcyB1bmRlZmluZWQgbGlrZSBpbiBhIHNlcnZlciBlbnZpcm9ubWVudFxuICAgICAqL1xuICAgIGlmICh0eXBlb2YgSFRNTEZvcm1FbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcGF0Y2hGb3JtUHJvdG90eXBlKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3cuQ3VzdG9tU3RhdGVTZXQpIHtcbiAgICAgIHdpbmRvdy5DdXN0b21TdGF0ZVNldCA9IEN1c3RvbVN0YXRlU2V0O1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93LkN1c3RvbVN0YXRlU2V0KSB7XG4gICAgd2luZG93LkN1c3RvbVN0YXRlU2V0ID0gQ3VzdG9tU3RhdGVTZXQ7XG4gICAgY29uc3QgYXR0YWNoSW50ZXJuYWxzID0gSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEludGVybmFscztcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IGludGVybmFscyA9IGF0dGFjaEludGVybmFscy5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgICAgaW50ZXJuYWxzLnN0YXRlcyA9IG5ldyBDdXN0b21TdGF0ZVNldCh0aGlzKTtcbiAgICAgIHJldHVybiBpbnRlcm5hbHM7XG4gICAgfTtcbiAgfVxufVxuIiwgImltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50IH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMYW5nSW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIGxhbmcgdXNlZCB0byBmb3JtYXQgY29udGVudCByZW5kZXJlZCBieSB0aGlzIGVsZW1lbnRcbiAgICogQGF0dHIgbGFuZ1xuICAgKi9cbiAgbGFuZzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTGFuZ01peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBMYW5nRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIEFkanVzdHMgdGhlIGxhbmcgdXNlZCB0byBmb3JtYXQgY29udGVudCByZW5kZXJlZCBieSB0aGlzIGVsZW1lbnRcbiAgICAgKiBAYXR0ciBsYW5nXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBsYW5nOiBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIExhbmdFbGVtZW50IGFzIENvbnN0cnVjdG9yPExhbmdJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciwgTXRlRWxlbWVudCB9IGZyb20gJy4uLyc7XG5cbi8qKlxuICogU3BlY2lhbCBjbGFzcyB0aGF0IGhlbHBzIGZyYW1ld29yayB3cmFwcGVyIHN0eWxpbmcga25vdyB3aGVuIGEgd3JhcHBlciBmcmFtZXdvcmtcbiAqIGhhcyBmaW5pc2hlZCByZW5kZXJpbmcgYW5kIHRodXMgZWxlbWVudHMgY2FuIG5vdyBiZSBzaG93biB3aXRob3V0IGEgRk9VQy4gVGhpc1xuICogb2NjdXJzIGluIHRoZSBzY2VuYXJpbyB3aGVyZSBMaXQgZWxlbWVudHMgcmVnaXN0ZXIgYW5kIHJlbmRlciBiZWZvcmUgdGhlXG4gKiB3cmFwcGVyIGZyYW1ld29yayBwYXNzZXMgZWxlbWVudHMgdGhlaXIgcHJvcHMuXG4gKi9cbmV4cG9ydCBjb25zdCBXYWl0Rm9yRnJhbWV3b3JrTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIFdhaXRGb3JGcmFtZXdvcmtFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqIEBpZ25vcmUgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6ICdtdGUtZnctcmVuZGVyZWQnLCByZWZsZWN0OiB0cnVlIH0pIF9md1JlbmRlcmVkO1xuICB9XG4gIHJldHVybiBXYWl0Rm9yRnJhbWV3b3JrRWxlbWVudCBhcyBUO1xufTtcbiIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7Ym94LXNpemluZzpib3JkZXItYm94fWA7IiwgImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBiYXNlU3R5bGVzLCBkZWZpbmVFbGVtZW50LCBNdGVDb250ZW50QmFzZSwgb25VcGRhdGUgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vZGl2aWRlci5zdHlsZXMnO1xuXG4vKiogKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtZGl2aWRlcicpXG5leHBvcnQgY2xhc3MgTXRlRGl2aWRlciBleHRlbmRzIE10ZUNvbnRlbnRCYXNlIHtcbiAgc3RhdGljIHN0eWxlcyA9IFtiYXNlU3R5bGVzLCBzdHlsZXNdO1xuXG4gIC8qKiBMYWJlbCB0aGF0IHdpbGwgYXBwZWFyIGluIE10ZURpdmlkZXIgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBsYWJlbDogc3RyaW5nO1xuXG4gIC8qKiBEZWZpbmVzIHdoZXJlIHRvIGFsaWduIHRoZSBsYWJlbCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGFsaWduOiAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyA9ICdjZW50ZXInO1xuXG4gIC8qKiBEZWZpbmVzIG9yaWVudGF0aW9uIG9mIE10ZURpdmlkZXIgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJyA9ICdob3Jpem9udGFsJztcblxuICAvKiogU2V0cyB3ZWlnaHQgb3IgdGhpY2tuZXNzIG9mIE10ZURpdmlkZXIgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSB3ZWlnaHQ6ICd0aGluJyB8ICdyZWd1bGFyJyB8ICdib2xkJyA9ICdyZWd1bGFyJztcblxuICAvKiogRGVmaW5lcyByb2xlIG9mIE10ZURpdmlkZXIgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSByb2xlOiAnc2VwYXJhdG9yJyB8ICdwcmVzZW50YXRpb24nID0gJ3NlcGFyYXRvcic7XG5cbiAgLyoqIERlZmluZXMgYXJpYS1vcmllbnRhdGlvbiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBhdHRyaWJ1dGU6ICdhcmlhLW9yaWVudGF0aW9uJyB9KSBhcmlhT3JpZW50YXRpb246ICd2ZXJ0aWNhbCcgfCBudWxsO1xuXG4gIEBvblVwZGF0ZShbJ2xhYmVsJywgJ29yaWVudGF0aW9uJ10sIHsgb246ICdib3RoJyB9KVxuICBwcml2YXRlIGhhbmRsZUExMXlDaGFuZ2UoKSB7XG4gICAgdGhpcy5yb2xlID0gdGhpcy5sYWJlbCA/ICdwcmVzZW50YXRpb24nIDogJ3NlcGFyYXRvcic7XG4gICAgdGhpcy5hcmlhT3JpZW50YXRpb24gPSB0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnID8gdGhpcy5vcmllbnRhdGlvbiA6IG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgJHt0aGlzLmluc3RhbmNlU3R5bGVzfSR7dGhpcy5sYWJlbH1gO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS1kaXZpZGVyJzogTXRlRGl2aWRlcjtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWRpdmlkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0xKTstLWRpdmlkZXItd2lkdGg6MnB4O2Rpc3BsYXk6YmxvY2s7bGluZS1oZWlnaHQ6MTttYXJnaW46dmFyKC0tbXRlLXNwYWNlLW1kKSAwfTpob3N0KFt3ZWlnaHQ9dGhpbl0pey0tZGl2aWRlci13aWR0aDoxcHh9Omhvc3QoW3dlaWdodD1ib2xkXSl7LS1kaXZpZGVyLXdpZHRoOjNweH06aG9zdChbb3JpZW50YXRpb249dmVydGljYWxdKXttYXJnaW46MCB2YXIoLS1tdGUtc3BhY2UtbWQpfTpob3N0KFtsYWJlbF0pe2FsaWduLXNlbGY6c3RyZXRjaDtkaXNwbGF5OmZsZXg7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwfTpob3N0KFtsYWJlbF0pOmFmdGVyLDpob3N0KFtsYWJlbF0pOmJlZm9yZXtjb250ZW50OlwiXCI7cG9zaXRpb246cmVsYXRpdmV9Omhvc3QoOm5vdChbbGFiZWxdKSl7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1kaXZpZGVyLWNvbG9yKTtoZWlnaHQ6dmFyKC0tZGl2aWRlci13aWR0aCk7bWluLWhlaWdodDp2YXIoLS1kaXZpZGVyLXdpZHRoKTt3aWR0aDoxMDAlfTpob3N0KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF06bm90KFtsYWJlbF0pKXthbGlnbi1zZWxmOnN0cmV0Y2g7aGVpZ2h0OmF1dG87bWluLXdpZHRoOnZhcigtLWRpdmlkZXItd2lkdGgpO3dpZHRoOnZhcigtLWRpdmlkZXItd2lkdGgpfTpob3N0KFtsYWJlbF06bm90KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF0pKXtib3JkZXI6MDtmbGV4LXNocmluazowO2dhcDp2YXIoLS1tdGUtc3BhY2UtbWQpfTpob3N0KFtsYWJlbF06bm90KFtvcmllbnRhdGlvbj12ZXJ0aWNhbF0pKTphZnRlciw6aG9zdChbbGFiZWxdOm5vdChbb3JpZW50YXRpb249dmVydGljYWxdKSk6YmVmb3Jle2JvcmRlci10b3A6dmFyKC0tZGl2aWRlci13aWR0aCkgc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7aGVpZ2h0OmF1dG87dHJhbnNmb3JtOnRyYW5zbGF0ZVkoY2FsYyg1MCUgLSB2YXIoLS1kaXZpZGVyLXdpZHRoKS8yKSk7d2lkdGg6MTAwJX06aG9zdChbbGFiZWxdOm5vdChbb3JpZW50YXRpb249dmVydGljYWxdKVthbGlnbj1zdGFydF0pOmJlZm9yZXt3aWR0aDoxMCV9Omhvc3QoW2xhYmVsXTpub3QoW29yaWVudGF0aW9uPXZlcnRpY2FsXSlbYWxpZ249ZW5kXSk6YWZ0ZXJ7d2lkdGg6MTAlfTpob3N0KFtsYWJlbF1bb3JpZW50YXRpb249dmVydGljYWxdKXtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1zaHJpbms6MDtnYXA6dmFyKC0tbXRlLXNwYWNlLXNtKTtoZWlnaHQ6YXV0b306aG9zdChbbGFiZWxdW29yaWVudGF0aW9uPXZlcnRpY2FsXSk6YWZ0ZXIsOmhvc3QoW2xhYmVsXVtvcmllbnRhdGlvbj12ZXJ0aWNhbF0pOmJlZm9yZXtib3JkZXItbGVmdDp2YXIoLS1kaXZpZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtoZWlnaHQ6MTAwJTtsZWZ0OmNhbGMoNTAlIC0gdmFyKC0tZGl2aWRlci13aWR0aCkvMik7dG9wOjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCl9YDsiLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2Rpc3BsYXk6YmxvY2s7LS1tdGUtbW9kYWwtYmFja2dyb3VuZDp2YXIoLS1tdGUtc3VyZmFjZS0yKTstLW10ZS1tb2RhbC1jb2xvcjppbmhlcml0Oy0tbXRlLW1vZGFsLXBhZGRpbmc6dmFyKC0tbXRlLXNwYWNlLW1kKTstLW10ZS1tb2RhbC1oZWFkZXItZGl2aWRlcjpzb2xpZCAxcHggdmFyKC0tbXRlLWJvcmRlci0xKTstLW10ZS1tb2RhbC1mb290ZXItZGl2aWRlcjpzb2xpZCAxcHggdmFyKC0tbXRlLWJvcmRlci0xKTstLW10ZS1tb2RhbC1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXhsKTstLXRyYW5zaXRpb24tZHVyYXRpb246MjAwbXN9Omhvc3QoOm5vdChbb3BlbmVkXSk6bm90KFtvcGVuZWRGdWxsXSkpIC5tb2RhbHtoZWlnaHQ6MXB4IWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7d2lkdGg6MXB4IWltcG9ydGFudDtjbGlwOnJlY3QoMCAwIDAgMCkhaW1wb3J0YW50O2JvcmRlcjpub25lIWltcG9ydGFudDtjbGlwLXBhdGg6aW5zZXQoNTAlKSFpbXBvcnRhbnQ7b3ZlcmZsb3c6aGlkZGVuIWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50O3doaXRlLXNwYWNlOm5vd3JhcCFpbXBvcnRhbnR9Omhvc3QgLm1vZGFse2JhY2tncm91bmQ6dmFyKC0tbXRlLW1vZGFsLWJhY2tncm91bmQpO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOnZhcigtLW10ZS1tb2RhbC1ib3JkZXItcmFkaXVzKTtib3JkZXItd2lkdGg6MDtib3gtc2hhZG93OnZhcigtLW10ZS1lbGV2YXRpb24tejMpO2NvbG9yOnZhcigtLWNvbG9yKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2xlZnQ6NTAlO21heC1oZWlnaHQ6OTV2aDttYXgtd2lkdGg6OTV2dztvcGFjaXR5OjA7b3ZlcmZsb3c6aGlkZGVuO3BvaW50ZXItZXZlbnRzOmF1dG87cG9zaXRpb246Zml4ZWQ7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsY2FsYygtNTAlICsgMzBweCkpO3RyYW5zaXRpb246dmlzaWJpbGl0eSAwcyB2YXIoLS10cmFuc2l0aW9uLWR1cmF0aW9uKSx0cmFuc2Zvcm0gdmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbiksb3BhY2l0eSB2YXIoLS10cmFuc2l0aW9uLWR1cmF0aW9uKTt2aXNpYmlsaXR5OmhpZGRlbjt3aWR0aDphdXRvO3dpbGwtY2hhbmdlOnRyYW5zZm9ybTt6LWluZGV4OjF9Omhvc3QoW3NpemU9c21dKSAubW9kYWx7d2lkdGg6bWluKDQ0MHB4LDk1dncpfTpob3N0KFtzaXplPW1kXSkgLm1vZGFse3dpZHRoOm1pbig2MDBweCw5NXZ3KX06aG9zdChbc2l6ZT1sZ10pIC5tb2RhbHt3aWR0aDptaW4oOTYwcHgsOTV2dyl9Omhvc3QoW3JhZGl1cz1zbV0pIC5tb2RhbHstLW10ZS1tb2RhbC1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLW1kKX06aG9zdChbcmFkaXVzPW1kXSkgLm1vZGFsey0tbXRlLW1vZGFsLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbGcpfTpob3N0KFt3aXRob3V0SGVhZGVyRGl2aWRlcl0pey0tbXRlLW1vZGFsLWhlYWRlci1kaXZpZGVyOm5vbmV9Omhvc3QoW3dpdGhvdXRGb290ZXJEaXZpZGVyXSl7LS1tdGUtbW9kYWwtZm9vdGVyLWRpdmlkZXI6bm9uZX06aG9zdCAubW9kYWwub3BlbmVke29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNpdGlvbjp2aXNpYmlsaXR5IDBzLHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uLWR1cmF0aW9uKSxvcGFjaXR5IHZhcigtLXRyYW5zaXRpb24tZHVyYXRpb24pO3Zpc2liaWxpdHk6dmlzaWJsZX06aG9zdCA6OnNsb3R0ZWQobXRlLWNvbnRlbnQpLDpob3N0IDo6c2xvdHRlZChtdGUtZm9vdGVyKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWhlYWRlcil7LS1jb21wb3NpdGlvbi1wYWRkaW5nLXk6dmFyKC0tbXRlLW1vZGFsLXBhZGRpbmcpOy0tY29tcG9zaXRpb24tcGFkZGluZy14OnZhcigtLW10ZS1tb2RhbC1wYWRkaW5nKX06aG9zdCA6OnNsb3R0ZWQobXRlLWhlYWRlcil7LS1jb21wb3NpdGlvbi1kaXZpZGVyOnZhcigtLW10ZS1tb2RhbC1oZWFkZXItZGl2aWRlcil9Omhvc3QgOjpzbG90dGVkKG10ZS1mb290ZXIpey0tY29tcG9zaXRpb24tZGl2aWRlcjp2YXIoLS1tdGUtbW9kYWwtZm9vdGVyLWRpdmlkZXIpfS5jb250ZW50LWNvbnRhaW5lciwuaGVhZGVye2JhY2tncm91bmQ6dmFyKC0tbXRlLW1vZGFsLWJhY2tncm91bmQpfS5jb250ZW50LWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1ncm93OjE7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS5jb250ZW50e2ZsZXgtZ3JvdzoxO292ZXJmbG93OmF1dG87d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5jb250ZW50IDo6c2xvdHRlZChtdGUtY29udGVudCl7cGFkZGluZy1ib3R0b206dmFyKC0tY29tcG9zaXRpb24tcGFkZGluZy15KTtwYWRkaW5nLXRvcDp2YXIoLS1jb21wb3NpdGlvbi1wYWRkaW5nLXkpfS5mb290ZXJ7YmFja2dyb3VuZDp2YXIodmFyKC0tbXRlLW1vZGFsLWJhY2tncm91bmQpKX1AbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upezpob3N0IC5tb2RhbCw6aG9zdCAubW9kYWwub3BlbmVke3RyYW5zaXRpb246bm9uZX19YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmNvbnRlbnRzfXNsb3RbbmFtZT1vdmVybGF5XTo6c2xvdHRlZCgqKXtwb3NpdGlvbjphYnNvbHV0ZX1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUFBQSxlQUFxQjtBQUNyQixJQUFBQyxzQkFBdUQ7OztBQ0F2RCx3QkFBZ0M7QUFDaEMsaUJBQTJCO0FBQzNCLElBQUFDLGlCQUFpRDs7O0FDSGpELG9CQUF1QjtBQUd2QixJQUFNLGNBQWlEO0FBQUEsRUFDckQsR0FBRztBQUFBLEVBQ0gsSUFBSSxDQUFDLGNBQWMsYUFBYTtBQUFBLEVBQ2hDLElBQUksQ0FBQyxhQUFhLGNBQWM7QUFBQSxFQUNoQyxJQUFJO0FBQUEsRUFDSixJQUFJO0FBQUEsRUFDSixJQUFJO0FBQUEsRUFDSixJQUFJO0FBQUEsRUFDSixHQUFHO0FBQUEsRUFDSCxJQUFJLENBQUMsZUFBZSxjQUFjO0FBQUEsRUFDbEMsSUFBSSxDQUFDLGNBQWMsZUFBZTtBQUFBLEVBQ2xDLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLEdBQUc7QUFBQSxFQUNILEdBQUc7QUFBQSxFQUNILEdBQUc7QUFBQSxFQUNILFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLEdBQUc7QUFBQSxFQUNILE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLEdBQUc7QUFBQSxFQUNILE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLEdBQUc7QUFBQSxFQUNILFdBQVc7QUFDYjtBQUdPLElBQU0saUJBQWlDLENBQUMsVUFBMkI7QUFDeEUsU0FBTyxNQUFN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QUFBLFVBQ04sUUFBUTtBQUFBLFFBQ1Y7QUFBQSxNQUNGLEtBQUs7QUFDSCxlQUFPO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixRQUFRO0FBQUEsUUFDVjtBQUFBLE1BQ0YsS0FBSztBQUNILGVBQU87QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLFFBQVE7QUFBQSxVQUNSLGNBQWM7QUFBQSxRQUNoQjtBQUFBLE1BQ0YsS0FBSztBQUNILGVBQU87QUFBQSxVQUNMLFNBQVM7QUFBQSxVQUNULE9BQU87QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLFFBQVE7QUFBQSxVQUNSLGNBQWM7QUFBQSxRQUNoQjtBQUFBLE1BQ0YsS0FBSztBQUNILGVBQU87QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRixLQUFLO0FBQ0gsZUFBTztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGLEtBQUs7QUFDSCxlQUFPO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0YsS0FBSztBQUNILGVBQU87QUFBQSxVQUNMLFNBQVM7QUFBQSxVQUNULE9BQU87QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRixLQUFLO0FBQ0gsZUFBTztBQUFBLFVBQ0wsTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFFBQ1Y7QUFBQSxNQUNGLEtBQUs7QUFDSCxlQUFPO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixRQUFR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RSxTQUFTLE1BQU0sTUFBTSxRQUFRLENBQUM7R0F2Qi9CLFNBdUJpQztBQUdBO01BQTNDLDhCQUFTLEVBQUUsU0FBUyxNQUFNLE1BQU0sUUFBUSxDQUFDO0dBMUIvQixTQTBCaUM7QUFPNUM7TUFKQyw4QkFBUztJQUNSLFdBQVc7SUFDWCxTQUFTO0VBQ1gsQ0FBQztHQWhDVSxTQWlDWDtBQUc0RDtNQUEzRCw4QkFBUyxFQUFFLFdBQVcsb0JBQW9CLFNBQVMsS0FBSyxDQUFDO0dBcEMvQyxTQW9DaUQ7QUFHL0I7TUFBNUIsOEJBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQXZDaEIsU0F1Q2tCO0FBR0E7TUFBNUIsOEJBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQTFDaEIsU0EwQ2tCO0FBSTdCO01BREMsOEJBQVMsRUFBRSxXQUFXLG1CQUFtQixTQUFTLEtBQUssQ0FBQztHQTdDOUMsU0E4Q1g7QUFHMkM7TUFBMUMsOEJBQVMsRUFBRSxNQUFNLFFBQVEsU0FBUyxLQUFLLENBQUM7R0FqRDlCLFNBaURnQztBQVNsQjtNQUF4QiwyQkFBTSxRQUFRO0dBMURKLFNBMERjO0FBRUk7TUFBNUIsOEJBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQTVEaEIsU0E0RGtCO0FBRWM7TUFBMUMsMkNBQXNCLEVBQUUsTUFBTSxTQUFTLENBQUM7R0E5RDlCLFNBOERnQztBQXNCbkM7RUFEUCxTQUFTLENBQUMsd0JBQXdCLDRCQUE0QixDQUFDO0dBbkZyRCxTQW9GSDtBQXBGRyxXQUFOO0VBRE4sY0FBYyxXQUFXO0dBQ2I7IiwKICAibmFtZXMiOiBbImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X3N0eWxlcyIsICJpbXBvcnRfc3R5bGVzIiwgImFjYyIsICJwcm9wIiwgInZhbHVlIiwgInN0eWxlcyIsICJkZXAiLCAiaW1wb3J0X3N0eWxlcyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9zdHlsZXMiLCAiZ2V0dGVyQ29uZmlnIiwgIm9ic2VydmVyIiwgImUiLCAic2V0dGVyQ29uZmlnIiwgImNzc1ZhciIsICJvYnNlcnZlciIsICJwb3J0YWxDb250cm9sbGVyIiwgImVsZW1lbnQiLCAic2Nyb2xsWCIsICJzY3JvbGxZIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgInByZXNldCIsICJvcHRpb25zIiwgImltcG9ydF9jb250ZXh0IiwgImNvbnRleHQiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfc3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2lmX2RlZmluZWQiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfc3R5bGVzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9jbGFzc19tYXAiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJub2RlIiwgIm9ic2VydmVyIiwgInN0YXRlIiwgImltcG9ydF9pc19zZXJ2ZXIiLCAib2JzZXJ2ZXIiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgInN0eWxlcyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfaWZfZGVmaW5lZCIsICJpbXBvcnRfY2xhc3NfbWFwIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAibmV4dFVuaXF1ZUlkIiwgInN0eWxlcyIsICJpbXBvcnRfc3R5bGVzIiwgIm5leHRVbmlxdWVJZCIsICJzdHlsZXMiXQp9Cg==