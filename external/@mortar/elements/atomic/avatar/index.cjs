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

// src/atomic/avatar/index.ts
var avatar_exports = {};
__export(avatar_exports, {
  MteAvatar: () => MteAvatar,
  MteAvatarGroup: () => MteAvatarGroup
});
module.exports = __toCommonJS(avatar_exports);

// src/atomic/avatar/avatar.element.ts
var import_lit21 = require("lit");
var import_decorators22 = require("lit/decorators.js");
var import_class_map3 = require("lit/directives/class-map.js");

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
var parseSelectors = (styles25, selectors) => {
  if (!selectors) {
    return styles25;
  } else {
    return `${styles25}${selectors.reduce((acc, { selector, selectorWrapper, style }) => {
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
  let styles25 = "";
  [...instanceStylesMap.entries()].filter(([key, _]) => key !== "se" && key !== "sp").sort((a, b) => b[0] - a[0]).forEach(([_, selectors]) => {
    styles25 = parseSelectors(styles25, selectors);
  });
  styles25 = `${styles25}${parseSelectors("", instanceStylesMap.get("se"))}${parseSelectors(
    "",
    instanceStylesMap.get("sp")
  )}`;
  return styles25;
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
  add(state11) {
    if (!/^--/.test(state11) || typeof state11 !== "string") {
      throw new DOMException(
        `Failed to execute 'add' on 'CustomStateSet': The specified value ${state11} must start with '--'.`
      );
    }
    const result = super.add(state11);
    const ref = customStateMap.get(this);
    const stateName = `state${state11}`;
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
  delete(state11) {
    const result = super.delete(state11);
    const ref = customStateMap.get(this);
    if (ref.isConnected) {
      ref.toggleAttribute(`state${state11}`, false);
      if (ref.part) {
        ref.part.remove(`state${state11}`);
      }
    } else {
      setTimeout(() => {
        ref.toggleAttribute(`state${state11}`, false);
        if (ref.part) {
          ref.part.remove(`state${state11}`);
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
var css7 = (strings, ...values) => (0, import_lit12.css)(strings, ...values.map((value) => (0, import_lit12.unsafeCSS)(value)));

// src/core/styles/base.styles.ts
var import_lit13 = require("lit");
var styles7 = import_lit13.css`:host{box-sizing:border-box}`;

// src/atomic/avatar/avatar.element.ts
var import_styles10 = require("@mortar/styles");

// src/atomic/avatar/avatar.styles.ts
var import_lit14 = require("lit");
var styles8 = import_lit14.css`:host{--size:2rem;--border-radius:var(--mte-border-radius-full);--border-color:transparent;--border-width:0px;--font-size:0.8rem;--weight:var(--mte-font-weight-medium);--frame-width:1px;--frame-color:var(--mte-surface-2);--elevation:var(--mte-elevation-z1);align-items:center;border:solid var(--border-width) var(--border-color);border-radius:var(--border-radius);box-shadow:var(--elevation);display:flex;height:var(--size);justify-content:center;outline:none;position:relative;width:var(--size)}:host([href]){cursor:pointer}:host([size=md]){--size:3rem;--font-size:1.25rem;--frame-width:2px}:host([size=lg]){--size:8rem;--font-size:3.2rem;--frame-width:4px;--weight:var(--mte-font-weight-regular)}:host([radius=md]){--border-radius:var(--mte-border-radius-full)}:host([radius=sm]){--border-radius:var(--mte-border-radius-lg)}:host([withoutElevation]){--elevation:var(--mte-elevation-z0)}:host([withBorder]){--border-color:var(--mte-border-1);--border-width:1px}.image-container{color:var(--color);display:grid;font-size:var(--font-size);font-weight:var(--weight);grid-template-areas:"image";height:calc(var(--size) - var(--border-width)*2);width:calc(var(--size) - var(--border-width)*2)}.fallback,.image-container{align-items:center;justify-content:center}.fallback{background-color:var(--background-color);border-radius:var(--border-radius);box-shadow:var(--elevation);display:flex}.fallback,.image{border:var(--frame-width) solid var(--frame-color);grid-area:image;height:calc(var(--size) - var(--frame-width)*2 - var(--border-width)*2);width:calc(var(--size) - var(--frame-width)*2 - var(--border-width)*2)}.image{border-radius:var(--border-radius)}.not-visible{display:none}:host(:focus-visible:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);bottom:-2px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-2px;pointer-events:none;position:absolute;right:-2px;top:-2px;z-index:9}`;

// src/utilities/overlay-trigger/overlay-trigger.element.ts
var import_lit16 = require("lit");
var import_decorators19 = require("lit/decorators.js");

// src/utilities/overlay-trigger/overlay-trigger.styles.ts
var import_lit15 = require("lit");
var styles9 = import_lit15.css`:host{box-sizing:border-box;display:contents}slot[name=overlay]::slotted(*){position:absolute}`;

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
    return import_lit16.html`<slot name="overlay"></slot><slot name="trigger"></slot>`;
  }
};
MteOverlayTrigger.styles = [styles9];
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteOverlayTrigger.prototype, "opened", 2);
__decorateClass([
  (0, import_decorators19.property)({ attribute: false })
], MteOverlayTrigger.prototype, "triggerElement", 2);
__decorateClass([
  (0, import_decorators19.property)({ attribute: false })
], MteOverlayTrigger.prototype, "overlayElement", 2);
__decorateClass([
  (0, import_decorators19.queryAssignedElements)({ slot: "trigger" })
], MteOverlayTrigger.prototype, "triggerElements", 2);
__decorateClass([
  (0, import_decorators19.queryAssignedElements)({ slot: "overlay" })
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

// src/atomic/tooltip/tooltip.element.ts
var import_dom = require("@floating-ui/dom");
var import_styles8 = require("@mortar/styles");
var import_lit18 = require("lit");
var import_decorators20 = require("lit/decorators.js");

// src/atomic/tooltip/tooltip.styles.ts
var import_lit17 = require("lit");
var styles10 = import_lit17.css`:host{--color:var(--mte-light);--background:var(--mte-dark);--z-index:var(--mte-z-index-20);--radius:var(--mte-border-radius-xl);--padding-x:var(--mte-space-md);--padding-y:var(--mte-space-sm);pointer-events:auto}.tooltip{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;border-radius:var(--radius);color:var(--color);display:none;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);max-width:250px;opacity:0;padding:var(--padding-y) var(--padding-x);position:fixed;text-decoration:inherit;text-overflow:ellipsis;text-transform:inherit;z-index:var(--z-index)}.arrow,.tooltip{background:var(--background)}.arrow{height:10px;position:absolute;transform:rotate(45deg);width:10px}`;

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
var nextUniqueId3 = 0;
var MteTooltip = class extends DisabledMixin(StylePartsMixin(MteElement)) {
  constructor() {
    super();
    this.id = `mte-tooltip--${nextUniqueId3++}`;
    this.position = "top";
    this.placement = "center";
    this.openDelay = 0;
    this.closeDelay = 0;
    this.role = "tooltip";
    this.ariaHidden = "true";
    this.ariaLive = "off";
    this.triggerOn = "hover";
    this.withoutPortal = false;
    this.animationDuration = import_styles8.config.animation.transitionDurationJs.short * 1e3;
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
    return import_lit18.html`${this.instanceStyles}<div part="tooltip" class="tooltip"><slot></slot><div part="arrow" class="arrow"></div></div>`;
  }
};
MteTooltip.styles = [styles7, styles10];
__decorateClass([
  (0, import_decorators20.property)({ reflect: true })
], MteTooltip.prototype, "id", 2);
__decorateClass([
  (0, import_decorators20.property)()
], MteTooltip.prototype, "position", 2);
__decorateClass([
  (0, import_decorators20.property)()
], MteTooltip.prototype, "placement", 2);
__decorateClass([
  (0, import_decorators20.property)({ type: Number, reflect: true })
], MteTooltip.prototype, "openDelay", 2);
__decorateClass([
  (0, import_decorators20.property)({ type: Number, reflect: true })
], MteTooltip.prototype, "closeDelay", 2);
__decorateClass([
  (0, import_decorators20.property)({ reflect: true })
], MteTooltip.prototype, "role", 2);
__decorateClass([
  (0, import_decorators20.property)({ attribute: "aria-hidden", reflect: true })
], MteTooltip.prototype, "ariaHidden", 2);
__decorateClass([
  (0, import_decorators20.property)({ attribute: "aria-live", reflect: true })
], MteTooltip.prototype, "ariaLive", 2);
__decorateClass([
  (0, import_decorators20.property)({ reflect: true })
], MteTooltip.prototype, "triggerOn", 2);
__decorateClass([
  (0, import_decorators20.property)({ type: Boolean, reflect: true })
], MteTooltip.prototype, "withoutPortal", 2);
__decorateClass([
  (0, import_decorators20.property)({ type: Number })
], MteTooltip.prototype, "animationDuration", 2);
__decorateClass([
  (0, import_decorators20.property)({ type: Boolean, reflect: true })
], MteTooltip.prototype, "asAriaLabel", 2);
__decorateClass([
  (0, import_decorators20.property)({ type: Boolean, reflect: true })
], MteTooltip.prototype, "withoutAutoLabel", 2);
__decorateClass([
  (0, import_decorators20.state)()
], MteTooltip.prototype, "opened", 2);
__decorateClass([
  (0, import_decorators20.state)()
], MteTooltip.prototype, "assumeLabel", 2);
__decorateClass([
  (0, import_decorators20.property)({ type: Object })
], MteTooltip.prototype, "targetElement", 2);
__decorateClass([
  (0, import_decorators20.property)()
], MteTooltip.prototype, "portalAdapter", 2);
__decorateClass([
  (0, import_decorators20.property)({ type: Boolean })
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
  (0, import_decorators20.state)()
], MteTooltip.prototype, "visible", 2);
__decorateClass([
  (0, import_decorators20.state)()
], MteTooltip.prototype, "renderedPosition", 2);
__decorateClass([
  (0, import_decorators20.query)(".tooltip")
], MteTooltip.prototype, "tooltipElem", 2);
__decorateClass([
  (0, import_decorators20.query)(".arrow")
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

// src/atomic/icon/icon.element.ts
var import_lit20 = require("lit");
var import_decorators21 = require("lit/decorators.js");

// src/atomic/icon/icon.styles.ts
var import_lit19 = require("lit");
var styles11 = import_lit19.css`:host{box-sizing:content-box!important;color:var(--icon-color,inherit);display:inline-block;line-height:0;width:24px}:host([autosize]){vertical-align:middle}:host([muted]){--icon-color:var(--mte-ink-2)}svg{display:block;height:100%;width:100%}:host(:not([withColor])) svg *{color:inherit;fill:currentColor!important}:host([color=primary])>svg *{color:rgb(var(--mte-status-primary-base-rgb))}:host([color=secondary])>svg *{color:rgb(var(--mte-status-secondary-base-rgb))}:host([color=tertiary])>svg *{color:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=success])>svg *{color:rgb(var(--mte-status-success-base-rgb))}:host([color=warning])>svg *{color:rgb(var(--mte-status-warning-base-rgb))}:host([color=danger])>svg *{color:rgb(var(--mte-status-danger-base-rgb))}`;

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
var import_styles9 = require("@mortar/styles");
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
        this.setInstanceStyle("mte-icon-sizing", (0, import_styles9.selectorFactory)(":host:host"), {
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
MteIcon.styles = [styles11];
__decorateClass([
  (0, import_decorators21.property)({ reflect: true })
], MteIcon.prototype, "name", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true })
], MteIcon.prototype, "library", 2);
__decorateClass([
  (0, import_decorators21.property)({ type: Number, reflect: true })
], MteIcon.prototype, "size", 2);
__decorateClass([
  (0, import_decorators21.property)({ type: Boolean, reflect: true })
], MteIcon.prototype, "autosize", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true })
], MteIcon.prototype, "role", 2);
__decorateClass([
  (0, import_decorators21.property)({ attribute: "aria-label", reflect: true })
], MteIcon.prototype, "ariaLabel", 2);
__decorateClass([
  (0, import_decorators21.property)({ attribute: "aria-hidden", reflect: true })
], MteIcon.prototype, "ariaHidden", 2);
__decorateClass([
  (0, import_decorators21.property)({ type: Boolean, reflect: true })
], MteIcon.prototype, "muted", 2);
__decorateClass([
  (0, import_decorators21.property)({ type: Boolean, reflect: true })
], MteIcon.prototype, "withColor", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true })
], MteIcon.prototype, "_loaded", 2);
__decorateClass([
  (0, import_decorators21.state)()
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

// src/atomic/avatar/avatar.element.ts
var import_if_defined3 = require("lit-html/directives/if-defined.js");
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
    const color2 = this.c ?? this.paletteColor?.contrast;
    this.style.setProperty("--color", color2);
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
      this.setInstanceStyle("avatar", (0, import_styles10.selectorFactory)(this.instanceStyleSelectorRoot), {
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
      import_styles10.config.palette.green.base,
      import_styles10.config.palette.teal.base,
      import_styles10.config.palette.cyan.base,
      import_styles10.config.palette.blue.base,
      import_styles10.config.palette.purple.base,
      import_styles10.config.palette.magenta.base,
      import_styles10.config.palette.red.base
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
      import_lit21.html`<div class="image-container"><img class="image ${(0, import_class_map3.classMap)({ "not-visible": this.showFallback })}" alt="${this.label}" src="${(0, import_if_defined3.ifDefined)(this.src)}" srcset="${(0, import_if_defined3.ifDefined)(this.srcSet)}"><div role="img" aria-label="${this.label}" class="fallback ${(0, import_class_map3.classMap)({ "not-visible": !this.showFallback })}">${this.initials ? import_lit21.html`${this.initials}` : null}</div></div>${this.withTooltip ? import_lit21.html`<mte-overlay-trigger id="trigger"></mte-overlay-trigger><mte-tooltip id="tooltip" asAriaLabel>${this.label}</mte-tooltip>` : null}`
    );
  }
};
MteAvatar.styles = [styles7, styles3, styles8];
__decorateClass([
  (0, import_decorators22.property)({ reflect: true })
], MteAvatar.prototype, "label", 2);
__decorateClass([
  (0, import_decorators22.property)({ type: Boolean })
], MteAvatar.prototype, "withTooltip", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true })
], MteAvatar.prototype, "src", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true })
], MteAvatar.prototype, "srcSet", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true })
], MteAvatar.prototype, "size", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true })
], MteAvatar.prototype, "bg", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true })
], MteAvatar.prototype, "c", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true, type: Boolean })
], MteAvatar.prototype, "withoutElevation", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true, type: Boolean })
], MteAvatar.prototype, "withBorder", 2);
__decorateClass([
  (0, import_decorators22.property)()
], MteAvatar.prototype, "initialsFormatter", 2);
__decorateClass([
  (0, import_decorators22.property)()
], MteAvatar.prototype, "colorFormatter", 2);
__decorateClass([
  (0, import_decorators22.query)("#tooltip")
], MteAvatar.prototype, "tooltipElement", 2);
__decorateClass([
  (0, import_decorators22.query)("#trigger")
], MteAvatar.prototype, "overlayTriggerElement", 2);
__decorateClass([
  (0, import_decorators22.state)()
], MteAvatar.prototype, "showFallback", 2);
__decorateClass([
  (0, import_decorators22.state)()
], MteAvatar.prototype, "initials", 2);
MteAvatar = __decorateClass([
  defineElement("mte-avatar")
], MteAvatar);

// src/atomic/avatar/avatar-group.element.ts
var import_class_map6 = require("lit-html/directives/class-map.js");
var import_lit48 = require("lit");
var import_decorators33 = require("lit/decorators.js");

// src/atomic/avatar/avatar-group.styles.ts
var import_lit22 = require("lit");
var styles12 = import_lit22.css`:host{--size:2rem;--border-radius:var(--mte-border-radius-full);--font-size:0.8rem;--color:var(--mte-ink-inverse);--weight:var(--mte-font-weight-medium);--gap:-0.75rem;--frame-width:1px;--border-width:0px;--border-color:transparent;--background-color:var(--mte-ink-2);--frame-color:var(--mte-surface-2);display:block;padding-left:calc(var(--gap)*-1)}.avatar-list{align-items:flex-start;display:flex}.avatar-list .avatar-excess-container,.avatar-list .avatar-list-item{margin-inline-start:var(--gap)}.avatar-list mte-avatar:focus-visible{z-index:1}button{all:unset}li,ul{padding:0}ul{list-style:none}.avatar-excess-container{align-items:center;border:solid var(--border-width) var(--border-color);border-radius:var(--border-radius);display:flex;height:calc(var(--size) - var(--border-width)*2);justify-content:center;position:relative;width:calc(var(--size) - var(--border-width)*2)}.avatar-excess-container.is-popover{cursor:pointer}.avatar-excess{align-items:center;background-color:var(--background-color);border:var(--frame-width) solid var(--frame-color);border-radius:var(--border-radius);color:var(--color);display:flex;font-size:var(--font-size);font-weight:var(--weight);height:calc(var(--size) - var(--frame-width)*2 - var(--border-width)*2);justify-content:center;width:calc(var(--size) - var(--frame-width)*2 - var(--border-width)*2)}:host([size=md]){--gap:-0.625rem;--size:3rem;--font-size:1.25rem;--frame-width:2px}:host([size=lg]){--gap:-1.5rem;--size:8rem;--font-size:3.2rem;--frame-width:4px;--weight:var(--mte-font-weight-regular)}:host([radius=md]){--border-radius:var(--mte-border-radius-full)}:host([radius=sm]){--border-radius:var(--mte-border-radius-lg)}.avatar-excess-container:focus-visible:not(.disabled):not([disabled]):not(:disabled):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);bottom:-2px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-2px;pointer-events:none;position:absolute;right:-2px;top:-2px;z-index:9}`;

// src/atomic/avatar/avatar-group.element.ts
var import_if_defined6 = require("lit-html/directives/if-defined.js");

// src/atomic/link/link.element.ts
var import_lit27 = require("lit");

// src/atomic/text/text.element.ts
var import_styles11 = require("@mortar/styles");
var import_lit24 = require("lit");
var import_decorators23 = require("lit/decorators.js");

// src/atomic/text/text.styles.ts
var import_lit23 = require("lit");
var styles13 = import_lit23.css`:host{--color:inherit;color:var(--color);display:inline-block}:host([lineClamp]){display:-webkit-inline-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}:host([lineClamp][block]){display:-webkit-box}:host([noWrap]){display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([size=xxs]){font-size:.625rem}:host([size=xs]){font-size:.75rem}:host([size=sm]){font-size:.875rem}:host([size=md]){font-size:1rem}:host([size=lg]){font-size:1.25rem}:host([size=xl]){font-size:1.5rem}:host([size=xxl]){font-size:1.75rem}:host([muted]){--color:var(--mte-ink-2)}`;

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
      this.setInstanceStyle("text", (0, import_styles11.selectorFactory)(":host:host:host:host:host"), {
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
    return import_lit24.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteText.styles = [styles7, styles13];
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
  (0, import_decorators23.property)({ reflect: true })
], MteText.prototype, "align", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true })
], MteText.prototype, "size", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true })
], MteText.prototype, "transform", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true })
], MteText.prototype, "wordBreak", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true })
], MteText.prototype, "wordSpacing", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true })
], MteText.prototype, "letterSpacing", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true })
], MteText.prototype, "whiteSpace", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Boolean, reflect: true })
], MteText.prototype, "underline", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Boolean, reflect: true })
], MteText.prototype, "italic", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Boolean, reflect: true })
], MteText.prototype, "strikethrough", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Boolean, reflect: true })
], MteText.prototype, "muted", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true })
], MteText.prototype, "lineClamp", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true })
], MteText.prototype, "textWrap", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Boolean, reflect: true })
], MteText.prototype, "noWrap", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Number, reflect: true })
], MteText.prototype, "maxCharWidth", 2);
MteText = __decorateClass([
  defineElement("mte-text")
], MteText);

// src/atomic/text/mark.element.ts
var import_styles12 = require("@mortar/styles");
var import_lit25 = require("lit");
var MteMark = class extends StatusColorMixin(MteElement) {
  connectedCallback() {
    super.connectedCallback();
    if (!this.color) {
      this.color = "warning";
    }
  }
  render() {
    return import_lit25.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteMark.styles = [
  styles7,
  css7` :host { display: inline-block; margin-right: -2px; margin-left: -2px; padding-right: 2px; padding-left: 2px; } /** Status PG Variants */ ${(0, import_styles12.forEachPGVariant)(
    "status",
    (g, p) => css7` :host([color='${p}']) { background: ${(0, import_styles12.color)({ g, p, c: "light", o: "sm" })}; color: inherit; } `
  )} `
];
MteMark = __decorateClass([
  defineElement("mte-mark")
], MteMark);

// src/atomic/link/link.styles.ts
var import_lit26 = require("lit");
var styles14 = import_lit26.css`:host{--color:rgba(var(--mte-it-link-default-rgb),var(--mte-it-link-default-a));--focus-radius:var(--mte-border-radius-sm);-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;color:var(--color);cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;font-weight:inherit;margin:0;outline:none;padding:0;text-decoration:none}:host(:focus-visible:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--focus-radius);border-bottom-right-radius:var(--focus-radius);border-top-left-radius:var(--focus-radius);border-top-right-radius:var(--focus-radius);bottom:-2px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-6px;pointer-events:none;position:absolute;right:-6px;top:-2px;z-index:9}:host .anchor:visited{--color:rgba(var(--mte-it-link-visited-rgb),var(--mte-it-link-visited-a))}:host(:not([disabled]):focus),:host(:not([disabled]):hover){text-decoration:underline}:host([disabled]),:host([disabled]) a{--color:var(--mte-disabled-4);cursor:not-allowed}:host([color=primary]){--color:rgb(var(--mte-core-primary-base-rgb))}:host([color=secondary]){--color:rgb(var(--mte-core-secondary-base-rgb))}:host([color=tertiary]){--color:rgb(var(--mte-core-tertiary-base-rgb))}:host([color=danger]){--color:rgb(var(--mte-core-danger-base-rgb))}`;

// src/atomic/link/link.element.ts
var import_class_map4 = require("lit/directives/class-map.js");
var MteLink = class extends CoreColorMixin(
  PresetMixinFactory("MteLink")(ButtonMixin(MteText))
) {
  getButtonClasses() {
    return (0, import_class_map4.classMap)({ link: true });
  }
  render() {
    return this.renderButtonTemplate(import_lit27.html`<slot></slot>`);
  }
};
MteLink.styles = [...MteText.styles, styles3, styles14];
__decorateClass([
  presetProperty({ reflect: true })
], MteLink.prototype, "fontWeight", 2);
MteLink = __decorateClass([
  defineElement("mte-link")
], MteLink);

// src/atomic/popover/popover.element.ts
var import_lit47 = require("lit");
var import_decorators32 = require("lit/decorators.js");
var import_class_map5 = require("lit/directives/class-map.js");

// src/atomic/popover/popover.styles.ts
var import_lit28 = require("lit");
var styles15 = import_lit28.css`:host{--padding-y:12px;--padding-x:var(--mte-space-comfy-md);--radius:var(--mte-border-radius-md);--background:var(--mte-surface-2);--border-color:var(--mte-border-2)}:host{display:block;pointer-events:none;position:absolute;z-index:1000}:host ::slotted(mte-content),:host ::slotted(mte-footer),:host ::slotted(mte-header){--composition-padding-y:0px;--composition-padding-x:0px}.trigger-container{display:inline-block}.popover-container{display:none;position:fixed;z-index:var(--mte-z-index-20)}.popover-container.visible{border-radius:var(--radius);box-shadow:var(--mte-elevation-z1)}.popover{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;background:var(--background);border:1px solid var(--border-color);border-radius:var(--radius);display:flex;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);overflow:hidden;pointer-events:auto;position:relative;text-decoration:inherit;text-overflow:ellipsis;text-transform:inherit}.content{display:flex;flex-direction:column;padding:var(--padding-y) var(--padding-x) var(--padding-y) var(--padding-x);z-index:2}#header{align-items:center;display:flex}#header.has-content{padding-bottom:var(--padding-y)}slot[name=header]{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;flex-direction:row;flex-grow:1;font-size:var(--mte-font-set-body2-font-size);font-weight:var(--mte-font-set-body2-font-weight);font-weight:var(--mte-font-weight-bold);line-height:var(--mte-font-set-body2-line-height);text-decoration:inherit;text-transform:inherit}:host ::slotted(mte-title){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-body2-font-size);font-weight:var(--mte-font-set-body2-font-weight);font-weight:var(--mte-font-weight-bold);line-height:var(--mte-font-set-body2-line-height);text-decoration:inherit;text-transform:inherit}#body{display:block;flex-grow:1}#footer.has-content{padding-top:var(--padding-y)}.arrow{background:var(--background);display:none;height:8px;opacity:0;position:absolute;transform:rotate(45deg);width:8px;z-index:1}.arrow.top,.arrow.top-end,.arrow.top-start{border-bottom:1px solid var(--border-color);border-right:1px solid var(--border-color)}.arrow.right,.arrow.right-end,.arrow.right-start{border-bottom:1px solid var(--border-color);border-left:1px solid var(--border-color)}.arrow.bottom,.arrow.bottom-end,.arrow.bottom-start{border-left:1px solid var(--border-color);border-top:1px solid var(--border-color)}.arrow.left,.arrow.left-end,.arrow.left-start{border-right:1px solid var(--border-color);border-top:1px solid var(--border-color)}.arrow.visible{display:block;opacity:1}`;

// src/atomic/button/button.element.ts
var import_if_defined4 = require("lit-html/directives/if-defined.js");
var import_lit32 = require("lit");
var import_decorators26 = require("lit/decorators.js");

// src/atomic/button/button.styles.ts
var import_lit29 = require("lit");
var styles16 = import_lit29.css`:host{--background:transparent;--color:inherit;--padding-y:var(--mte-space-sm);--padding-x:calc(var(--mte-space-md) + var(--mte-space-xs));--border-width:1px;--border-style:solid;--border-radius:var(--group-radius,var(--mte-border-radius-xl));--focus-radius:var(--group-focus-radius,var(--mte-border-radius-full));--border-color:transparent;--border-alt-color:var(--border-color);--icon-size:16px;--focus-offset:-5px;--final-y:var(--padding-y);--final-x:var(--padding-x);align-items:center;-webkit-appearance:none;background:var(--background);border:var(--border-style) var(--border-width) var(--border-color);border-bottom-left-radius:var(--group-border-bottom-left-radius,var(--border-radius));border-bottom-right-radius:var(--group-border-bottom-right-radius,var(--border-radius));border-color:var(--group-border-top-color,var(--border-color)) var(--group-border-right-color,var(--border-color)) var(--group-border-bottom-color,var(--border-color)) var(--group-border-left-color,var(--border-color));border-top-left-radius:var(--group-border-top-left-radius,var(--border-radius));border-top-right-radius:var(--group-border-top-right-radius,var(--border-radius));color:var(--color);cursor:pointer;display:inline-flex;flex-wrap:nowrap;font-family:var(--mte-font-family-sans);justify-content:center;outline:none!important;overflow:visible;padding:var(--final-y) var(--final-x);-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;width:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-button-font-size);font-weight:var(--mte-font-set-button-font-weight);line-height:var(--mte-font-set-button-line-height);line-height:1;text-decoration:inherit;text-transform:inherit}:host(:focus-visible:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--group-focus-bottom-left-radius,var(--focus-radius));border-bottom-right-radius:var(--group-focus-bottom-right-radius,var(--focus-radius));border-top-left-radius:var(--group-focus-top-left-radius,var(--focus-radius));border-top-right-radius:var(--group-focus-top-right-radius,var(--focus-radius));bottom:var(--focus-offset);box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:var(--focus-offset);pointer-events:none;position:absolute;right:var(--focus-offset);top:var(--focus-offset);z-index:9}:host(::-moz-focus-inner){border:0;padding:0}:host(:hover),:host([activestate]){outline:none;--color:inherit}:host(:hover){--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)))}:host(:active),:host([activestate]){--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)))}:host([outlined]){--border-style:solid;--border-color:var(--mte-border-2)}:host([filled]){--border-style:solid;--border-color:transparent;--background:var(--button-filled-bg,var(--mte-grey-10));--color:var(--button-filled-ink,var(--mte-ink-5))}:host([filled]:hover){--background:var(--button-filled-active-bg,var(--mte-grey-9));--color:var(--button-filled-active-ink,var(--mte-ink-5))}:host([filled]:active),:host([filled][activestate]){--background:var(--button-filled-active-bg,var(--mte-darker));--color:var(--button-filled-active-ink,var(--mte-ink-5))}:host([color=primary]:not([disabled])){--border-color:transparent;--background:transparent;--color:rgb(var(--mte-core-primary-base-rgb))}:host([color=primary]:not([disabled]):focus),:host([color=primary]:not([disabled]):hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));--color:rgb(var(--mte-core-primary-dark-rgb))}:host([color=primary]:not([disabled])[activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a));--color:rgb(var(--mte-core-primary-darker-rgb))}:host([color=primary][outlined]:not([disabled])){--background:transparent;--border-color:var(--mte-border-2);--color:rgb(var(--mte-core-primary-base-rgb))}:host([color=primary][outlined]:not([disabled]):focus),:host([color=primary][outlined]:not([disabled]):hover){--border-color:var(--mte-border-2);--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)));--color:rgb(var(--mte-core-primary-dark-rgb))}:host([color=primary][outlined]:not([disabled])[activestate]){--border-color:var(--mte-border-2);--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)));--color:rgb(var(--mte-core-primary-darker-rgb))}:host([color=primary][filled]:not([disabled])){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-primary-dark-rgb));--background:rgb(var(--mte-core-primary-base-rgb));--color:rgb(var(--mte-core-primary-base-c-rgb))}:host([color=primary][filled]:not([disabled]):focus),:host([color=primary][filled]:not([disabled]):hover){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-primary-dark-rgb));--background:rgb(var(--mte-core-primary-dark-rgb));--color:rgb(var(--mte-core-primary-dark-c-rgb))}:host([color=primary][filled]:not([disabled])[activestate]){--border-color:transparent;--background:rgb(var(--mte-core-primary-darker-rgb));--color:rgb(var(--mte-core-primary-darker-c-rgb))}:host([color=secondary]:not([disabled])){--border-color:transparent;--background:transparent;--color:rgb(var(--mte-core-secondary-base-rgb))}:host([color=secondary]:not([disabled]):focus),:host([color=secondary]:not([disabled]):hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));--color:rgb(var(--mte-core-secondary-dark-rgb))}:host([color=secondary]:not([disabled])[activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a));--color:rgb(var(--mte-core-secondary-darker-rgb))}:host([color=secondary][outlined]:not([disabled])){--background:transparent;--border-color:var(--mte-border-2);--color:rgb(var(--mte-core-secondary-base-rgb))}:host([color=secondary][outlined]:not([disabled]):focus),:host([color=secondary][outlined]:not([disabled]):hover){--border-color:var(--mte-border-2);--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)));--color:rgb(var(--mte-core-secondary-dark-rgb))}:host([color=secondary][outlined]:not([disabled])[activestate]){--border-color:var(--mte-border-2);--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)));--color:rgb(var(--mte-core-secondary-darker-rgb))}:host([color=secondary][filled]:not([disabled])){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-secondary-dark-rgb));--background:rgb(var(--mte-core-secondary-base-rgb));--color:rgb(var(--mte-core-secondary-base-c-rgb))}:host([color=secondary][filled]:not([disabled]):focus),:host([color=secondary][filled]:not([disabled]):hover){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-secondary-dark-rgb));--background:rgb(var(--mte-core-secondary-dark-rgb));--color:rgb(var(--mte-core-secondary-dark-c-rgb))}:host([color=secondary][filled]:not([disabled])[activestate]){--border-color:transparent;--background:rgb(var(--mte-core-secondary-darker-rgb));--color:rgb(var(--mte-core-secondary-darker-c-rgb))}:host([color=tertiary]:not([disabled])){--border-color:transparent;--background:transparent;--color:rgb(var(--mte-core-tertiary-base-rgb))}:host([color=tertiary]:not([disabled]):focus),:host([color=tertiary]:not([disabled]):hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));--color:rgb(var(--mte-core-tertiary-dark-rgb))}:host([color=tertiary]:not([disabled])[activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a));--color:rgb(var(--mte-core-tertiary-darker-rgb))}:host([color=tertiary][outlined]:not([disabled])){--background:transparent;--border-color:var(--mte-border-2);--color:rgb(var(--mte-core-tertiary-base-rgb))}:host([color=tertiary][outlined]:not([disabled]):focus),:host([color=tertiary][outlined]:not([disabled]):hover){--border-color:var(--mte-border-2);--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)));--color:rgb(var(--mte-core-tertiary-dark-rgb))}:host([color=tertiary][outlined]:not([disabled])[activestate]){--border-color:var(--mte-border-2);--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)));--color:rgb(var(--mte-core-tertiary-darker-rgb))}:host([color=tertiary][filled]:not([disabled])){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-tertiary-dark-rgb));--background:rgb(var(--mte-core-tertiary-base-rgb));--color:rgb(var(--mte-core-tertiary-base-c-rgb))}:host([color=tertiary][filled]:not([disabled]):focus),:host([color=tertiary][filled]:not([disabled]):hover){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-tertiary-dark-rgb));--background:rgb(var(--mte-core-tertiary-dark-rgb));--color:rgb(var(--mte-core-tertiary-dark-c-rgb))}:host([color=tertiary][filled]:not([disabled])[activestate]){--border-color:transparent;--background:rgb(var(--mte-core-tertiary-darker-rgb));--color:rgb(var(--mte-core-tertiary-darker-c-rgb))}:host([color=danger]:not([disabled])){--border-color:transparent;--background:transparent;--color:rgb(var(--mte-core-danger-base-rgb))}:host([color=danger]:not([disabled]):focus),:host([color=danger]:not([disabled]):hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));--color:rgb(var(--mte-core-danger-dark-rgb))}:host([color=danger]:not([disabled])[activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a));--color:rgb(var(--mte-core-danger-darker-rgb))}:host([color=danger][outlined]:not([disabled])){--background:transparent;--border-color:var(--mte-border-2);--color:rgb(var(--mte-core-danger-base-rgb))}:host([color=danger][outlined]:not([disabled]):focus),:host([color=danger][outlined]:not([disabled]):hover){--border-color:var(--mte-border-2);--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)));--color:rgb(var(--mte-core-danger-dark-rgb))}:host([color=danger][outlined]:not([disabled])[activestate]){--border-color:var(--mte-border-2);--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)));--color:rgb(var(--mte-core-danger-darker-rgb))}:host([color=danger][filled]:not([disabled])){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-danger-dark-rgb));--background:rgb(var(--mte-core-danger-base-rgb));--color:rgb(var(--mte-core-danger-base-c-rgb))}:host([color=danger][filled]:not([disabled]):focus),:host([color=danger][filled]:not([disabled]):hover){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-danger-dark-rgb));--background:rgb(var(--mte-core-danger-dark-rgb));--color:rgb(var(--mte-core-danger-dark-c-rgb))}:host([color=danger][filled]:not([disabled])[activestate]){--border-color:transparent;--background:rgb(var(--mte-core-danger-darker-rgb));--color:rgb(var(--mte-core-danger-darker-c-rgb))}:host([disabled]),:host([disabled]) a{cursor:not-allowed!important;--color:var(--mte-disabled-4)!important;box-shadow:none!important;text-shadow:none!important}:host([disabled]:hover),:host([disabled][activestate]){--background:transparent!important}:host([disabled][filled]),:host([disabled][outlined]){--border-color:var(--mte-disabled-2)!important;--background:var(--mte-disabled-1)!important;--color:var(--mte-disabled-4)!important}:host([disabled][filled]:hover),:host([disabled][filled][activestate]),:host([disabled][outlined]:hover),:host([disabled][outlined][activestate]){--background:var(--mte-disabled-1)!important}:host([size=sm]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:calc(var(--mte-font-set-button-font-size)*.8);font-weight:var(--mte-font-set-button-font-weight);line-height:var(--mte-font-set-button-line-height);text-decoration:inherit;text-transform:inherit;--final-y:calc(var(--padding-y)*var(--mte-size-scale-sm));--final-x:calc(var(--padding-x)*var(--mte-size-scale-sm))}:host([size=lg]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:calc(var(--mte-font-set-button-font-size)*1.2);font-weight:var(--mte-font-set-button-font-weight);line-height:var(--mte-font-set-button-line-height);text-decoration:inherit;text-transform:inherit;--border-radius:var(--mte-border-radius-full);--final-y:calc(var(--padding-y)*var(--mte-size-scale-lg));--final-x:calc(var(--padding-x)*var(--mte-size-scale-lg))}:host([radius=sm]){--border-radius:var(--mte-border-radius-sm);--focus-radius:var(--mte-border-radius-md)}.prefix,.prefix>span{align-items:center;display:flex;justify-content:center}.prefix{margin-left:calc(var(--mte-space-sm)*-1);padding-right:var(--mte-space-sm)}:host([size=sm]) .prefix{margin-left:calc(var(--mte-space-xs)*-1);padding-right:var(--mte-space-xs)}.suffix,.suffix>span{align-items:center;display:flex;justify-content:center}.suffix{margin-right:calc(var(--mte-space-sm)*-1);padding-left:var(--mte-space-sm)}:host([size=sm]) .suffix{margin-right:calc(var(--mte-space-xs)*-1);padding-left:var(--mte-space-xs)}:host>:not(.label) mte-icon{height:var(--icon-size);min-height:var(--icon-size);min-width:var(--icon-size);width:var(--icon-size)}:host([size=sm])>:not(.label) mte-icon{--icon-size:12px}:host([size=lg])>:not(.label) mte-icon{--icon-size:20px}`;

// src/atomic/progress-spinner/progress-spinner.element.ts
var import_lit31 = require("lit");
var import_decorators24 = require("lit/decorators.js");

// src/atomic/progress-spinner/progress-spinner.styles.ts
var import_lit30 = require("lit");
var styles17 = import_lit30.css`@keyframes progress-spinner-animation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}:host{display:inline-block;height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content;will-change:transform}.container{align-items:center;display:flex;justify-content:center;overflow:visible;position:relative;vertical-align:middle}.container svg{display:block;overflow:visible}.container path{fill-opacity:0}.track{stroke:rgb(var(--mte-border-1-rgb))}.bar{left:0;position:absolute;top:0;stroke:rgb(var(--mte-status-primary-base-rgb))}.bar path{transform-origin:center;transition:stroke-dashoffset .2s cubic-bezier(.4,0,.2,1) 0ms;will-change:stroke-dashoffset}:host([withoutAnimation]) .bar path{transition:none!important}:host([indeterminate]){animation:progress-spinner-animation .5s linear infinite}:host([indeterminate]) .bar path{transition:none}:host([color=primary]) .bar{stroke:rgb(var(--mte-status-primary-base-rgb))}:host([color=secondary]) .bar{stroke:rgb(var(--mte-status-secondary-base-rgb))}:host([color=tertiary]) .bar{stroke:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=success]) .bar{stroke:rgb(var(--mte-status-success-base-rgb))}:host([color=warning]) .bar{stroke:rgb(var(--mte-status-warning-base-rgb))}:host([color=danger]) .bar{stroke:rgb(var(--mte-status-danger-base-rgb))}@media screen and (prefers-reduced-motion:reduce){.bar path{transition:none}:host([indeterminate]){animation:none}}`;

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
    return import_lit31.html`${this.instanceStyles}<div class="container" part="container" style="${containerStyles}"><svg class="track" part="track" style="${trackStyles}" viewBox="${this.viewBox}" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="${this.trackShape}"></path></svg> <svg class="bar" part="bar" style="${barStyles}" viewBox="${this.viewBox}" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="${this.trackShape}" pathLength="${this.PATH_LENGTH - 1}" stroke-dasharray="${this.strokeDashArray}" stroke-dashoffset="${this.strokeDashOffset}"></path></svg></div>`;
  }
};
MteProgressSpinner.styles = styles17;
__decorateClass([
  (0, import_decorators24.property)({ type: Number, reflect: true })
], MteProgressSpinner.prototype, "diameter", 2);
__decorateClass([
  (0, import_decorators24.property)({ type: Number, reflect: true })
], MteProgressSpinner.prototype, "d", 2);
__decorateClass([
  (0, import_decorators24.property)({ type: Boolean, reflect: true })
], MteProgressSpinner.prototype, "indeterminate", 2);
__decorateClass([
  (0, import_decorators24.property)({ type: Number, reflect: true })
], MteProgressSpinner.prototype, "value", 1);
__decorateClass([
  (0, import_decorators24.property)({ type: Boolean, reflect: true })
], MteProgressSpinner.prototype, "withoutAnimation", 2);
__decorateClass([
  (0, import_decorators24.property)({ reflect: true })
], MteProgressSpinner.prototype, "role", 2);
__decorateClass([
  (0, import_decorators24.property)({ attribute: "aria-valuenow", reflect: true })
], MteProgressSpinner.prototype, "ariaValueNow", 2);
__decorateClass([
  (0, import_decorators24.property)({ attribute: "aria-valuemin", reflect: true })
], MteProgressSpinner.prototype, "ariaValueMin", 2);
__decorateClass([
  (0, import_decorators24.property)({ attribute: "aria-valuemax", reflect: true })
], MteProgressSpinner.prototype, "ariaValueMax", 2);
__decorateClass([
  (0, import_decorators24.state)()
], MteProgressSpinner.prototype, "strokeWidth", 2);
__decorateClass([
  (0, import_decorators24.state)()
], MteProgressSpinner.prototype, "viewBox", 2);
__decorateClass([
  (0, import_decorators24.state)()
], MteProgressSpinner.prototype, "strokeDashOffset", 2);
__decorateClass([
  onUpdate(["value"], { on: "both" })
], MteProgressSpinner.prototype, "handleValueChange", 1);
MteProgressSpinner = __decorateClass([
  defineElement("mte-progress-spinner")
], MteProgressSpinner);

// src/atomic/progress-spinner/spinner.element.ts
var import_decorators25 = require("lit/decorators.js");
var MteSpinner = class extends MteProgressSpinner {
  constructor() {
    super(...arguments);
    this.indeterminate = true;
  }
};
__decorateClass([
  (0, import_decorators25.property)({ reflect: true })
], MteSpinner.prototype, "indeterminate", 2);
MteSpinner = __decorateClass([
  defineElement("mte-spinner")
], MteSpinner);

// src/atomic/button/button.element.ts
var import_styles14 = require("@mortar/styles");

// src/atomic/button/button-common.ts
var import_styles13 = require("@mortar/styles");
var defaultButtonBorderFactory = (width, color2, style) => `${style ?? "solid"} ${borderWidthValShorthands([
  { prop: "borderWidth", value: dotStringToConfigValue(width ?? "1px") }
])[0]?.value} ${dotStringToConfigValue(color2) ?? import_styles13.config.color.border1}`;

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
      this.setInstanceStyle("content-base", (0, import_styles14.selectorFactory)(":host:host:host:host:host:host"), {
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
    return this.renderButtonTemplate(import_lit32.html`${this.icon && !this.iconHidden || this.loading ? import_lit32.html`<span class="prefix"><span part="prefix">${this.loading ? import_lit32.html`<mte-spinner diameter="${loadingDiameter}"></mte-spinner>` : import_lit32.html`<mte-icon size="${iconSize}" name="${this.icon}" library="${(0, import_if_defined4.ifDefined)(this.iconLibrary)}"></mte-icon>`}</span></span>` : null}<slot part="label" class="label"></slot>${this.rightIcon && !this.rightIconHidden ? import_lit32.html`<span class="suffix"><span part="suffix"><mte-icon size="${iconSize}" name="${this.rightIcon}" library="${(0, import_if_defined4.ifDefined)(this.rightIconLibrary)}"></mte-icon></span></span>` : null}`);
  }
};
MteButton.styles = [styles7, styles, styles3, styles16];
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
  (0, import_decorators26.property)({ type: Boolean, reflect: true })
], MteButton.prototype, "filled", 2);
__decorateClass([
  (0, import_decorators26.property)({ type: Boolean, reflect: true })
], MteButton.prototype, "outlined", 2);
__decorateClass([
  (0, import_decorators26.property)()
], MteButton.prototype, "icon", 2);
__decorateClass([
  (0, import_decorators26.property)()
], MteButton.prototype, "iconLibrary", 2);
__decorateClass([
  (0, import_decorators26.property)({ type: Boolean })
], MteButton.prototype, "iconHidden", 2);
__decorateClass([
  (0, import_decorators26.property)()
], MteButton.prototype, "rightIcon", 2);
__decorateClass([
  (0, import_decorators26.property)()
], MteButton.prototype, "rightIconLibrary", 2);
__decorateClass([
  (0, import_decorators26.property)({ type: Boolean })
], MteButton.prototype, "rightIconHidden", 2);
__decorateClass([
  (0, import_decorators26.property)({ type: Boolean })
], MteButton.prototype, "loading", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "m", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "mx", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "my", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "mt", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "mr", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "mb", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "ml", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "w", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "maxw", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "minw", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "borderColor", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "borderWidth", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "borderStyle", 2);
__decorateClass([
  (0, import_decorators26.property)({ type: Boolean, reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "border", 2);
__decorateClass([
  (0, import_decorators26.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "elevation", 2);
MteButton = __decorateClass([
  defineElement("mte-button")
], MteButton);

// src/atomic/button/icon-button.element.ts
var import_lit34 = require("lit");
var import_decorators27 = require("lit/decorators.js");

// src/atomic/button/icon-button.styles.ts
var import_lit33 = require("lit");
var styles18 = import_lit33.css`:host{--padding-y:var(--mte-space-sm);--padding-x:var(--padding-y);--border-radius:var(--group-radius,var(--mte-border-radius-full));--focus-radius:var(--group-focus-radius,var(--mte-border-radius-full));--icon-size:16px;--color:inherit}:host([radius=sm]){--border-radius:var(--mte-border-radius-sm);--focus-radius:var(--mte-border-radius-md)}:host mte-icon{height:var(--icon-size);min-height:var(--icon-size);min-width:var(--icon-size);width:var(--icon-size)}:host([size=sm]) mte-icon{--icon-size:12px}:host([size=lg]) mte-icon{--icon-size:20px}`;

// src/atomic/button/icon-button.element.ts
var import_styles15 = require("@mortar/styles");
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
      this.setInstanceStyle("content-base", (0, import_styles15.selectorFactory)(":host:host:host:host:host:host"), {
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
    return import_lit34.html`${this.renderButtonTemplate(
      this.loading ? import_lit34.html`<mte-spinner diameter="${loadingDiameter}"></mte-spinner>` : import_lit34.html`<mte-icon name="${this.icon}" library="${this.iconLibrary}" part="icon"></mte-icon>`
    )} ${this.label ? import_lit34.html`<mte-overlay-trigger id="trigger"></mte-overlay-trigger><mte-tooltip id="tooltip" position="${this.labelPosition}" asAriaLabel ?disabled="${this.disabled}" withoutA11y>${this.label}</mte-tooltip>` : null}`;
  }
};
MteIconButton.styles = [styles7, styles, styles3, styles16, styles18];
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
  (0, import_decorators27.property)({ type: Boolean, reflect: true })
], MteIconButton.prototype, "filled", 2);
__decorateClass([
  (0, import_decorators27.property)({ type: Boolean, reflect: true })
], MteIconButton.prototype, "outlined", 2);
__decorateClass([
  (0, import_decorators27.property)()
], MteIconButton.prototype, "icon", 2);
__decorateClass([
  (0, import_decorators27.property)()
], MteIconButton.prototype, "iconLibrary", 2);
__decorateClass([
  (0, import_decorators27.property)({ type: Boolean })
], MteIconButton.prototype, "loading", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true })
], MteIconButton.prototype, "label", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true })
], MteIconButton.prototype, "labelPosition", 2);
__decorateClass([
  (0, import_decorators27.property)({ attribute: "aria-label", reflect: true })
], MteIconButton.prototype, "ariaLabel", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "m", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "mx", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "my", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "mt", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "mr", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "mb", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "ml", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "borderColor", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "borderWidth", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "borderStyle", 2);
__decorateClass([
  (0, import_decorators27.property)({ type: Boolean, reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "border", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "elevation", 2);
__decorateClass([
  (0, import_decorators27.query)("#tooltip")
], MteIconButton.prototype, "tooltipElement", 2);
__decorateClass([
  (0, import_decorators27.query)("#trigger")
], MteIconButton.prototype, "overlayTriggerElement", 2);
__decorateClass([
  onUpdate(["label", "ariaLabel"], { on: "both" })
], MteIconButton.prototype, "handleLabelChange", 1);
MteIconButton = __decorateClass([
  defineElement("mte-icon-button")
], MteIconButton);

// src/atomic/popover/popover.element.ts
var import_dom2 = require("@floating-ui/dom");
var import_styles17 = require("@mortar/styles");
var import_icons3 = require("@mortar/icons");

// src/atomic/composition/header.element.ts
var import_lit38 = require("lit");
var import_decorators29 = require("lit/decorators.js");

// src/atomic/title/title.element.ts
var import_styles16 = require("@mortar/styles");
var import_lit36 = require("lit");
var import_decorators28 = require("lit/decorators.js");

// src/atomic/title/title.styles.ts
var import_lit35 = require("lit");
var styles19 = import_lit35.css`:host{display:block;text-wrap:balance}:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-subtitle-font-size);font-weight:var(--mte-font-set-subtitle-font-weight);line-height:var(--mte-font-set-subtitle-line-height);text-decoration:inherit;text-transform:inherit}:host([subtitle]){font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height)}:host([heading="1"]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-h1-font-size);font-weight:var(--mte-font-set-h1-font-weight);line-height:var(--mte-font-set-h1-line-height);text-decoration:inherit;text-transform:inherit}:host([heading="2"]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-h2-font-size);font-weight:var(--mte-font-set-h2-font-weight);line-height:var(--mte-font-set-h2-line-height);text-decoration:inherit;text-transform:inherit}:host([heading="3"]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-h3-font-size);font-weight:var(--mte-font-set-h3-font-weight);line-height:var(--mte-font-set-h3-line-height);text-decoration:inherit;text-transform:inherit}:host([heading="4"]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-h4-font-size);font-weight:var(--mte-font-set-h4-font-weight);line-height:var(--mte-font-set-h4-line-height);text-decoration:inherit;text-transform:inherit}:host([heading="5"]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-h5-font-size);font-weight:var(--mte-font-set-h5-font-weight);line-height:var(--mte-font-set-h5-line-height);text-decoration:inherit;text-transform:inherit}:host([heading="6"]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-h6-font-size);font-weight:var(--mte-font-set-h6-font-weight);line-height:var(--mte-font-set-h6-line-height);text-decoration:inherit;text-transform:inherit}:host([heading=caption]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);text-decoration:inherit;text-transform:inherit}:host([heading=subtitle]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-subtitle-font-size);font-weight:var(--mte-font-set-subtitle-font-weight);line-height:var(--mte-font-set-subtitle-line-height);text-decoration:inherit;text-transform:inherit}:host([subtitle]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-body1-font-size);font-weight:var(--mte-font-set-body1-font-weight);line-height:var(--mte-font-set-body1-line-height);text-decoration:inherit;text-transform:inherit}:host([inCard]:not([heading])){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-subtitle-font-size);font-weight:var(--mte-font-set-subtitle-font-weight);line-height:var(--mte-font-set-subtitle-line-height);text-decoration:inherit;text-transform:inherit}:host([inCard][subtitle]:not([heading])){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);text-decoration:inherit;text-transform:inherit}:host([subtitle]){color:var(--mte-ink-2)!important}`;

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
      this.setInstanceStyle("text", (0, import_styles16.selectorFactory)(":host:host:host"), {
        textAlign: this.align
      });
    }
  }
  render() {
    return import_lit36.html`${this.instanceStyles}<slot></slot>`;
  }
  isInHeader() {
    return this.parentElement?.tagName === "MTE-HEADER";
  }
};
MteTitle.styles = [...MteText.styles, styles19];
__decorateClass([
  (0, import_decorators28.property)()
], MteTitle.prototype, "align", 2);
__decorateClass([
  (0, import_decorators28.property)({ reflect: true })
], MteTitle.prototype, "heading", 2);
__decorateClass([
  (0, import_decorators28.property)({ type: Boolean, reflect: true })
], MteTitle.prototype, "subtitle", 2);
__decorateClass([
  (0, import_decorators28.property)({ type: Boolean, reflect: true })
], MteTitle.prototype, "muted", 2);
__decorateClass([
  (0, import_decorators28.property)({ type: Boolean, reflect: true })
], MteTitle.prototype, "inCard", 2);
__decorateClass([
  (0, import_decorators28.property)({ reflect: true })
], MteTitle.prototype, "role", 2);
__decorateClass([
  (0, import_decorators28.property)({ attribute: "aria-level", reflect: true })
], MteTitle.prototype, "ariaLevel", 2);
__decorateClass([
  onUpdate("heading", { on: "both" })
], MteTitle.prototype, "handleHeadingChange", 1);
MteTitle = __decorateClass([
  defineElement("mte-title")
], MteTitle);

// src/atomic/composition/header.styles.ts
var import_lit37 = require("lit");
var styles20 = import_lit37.css`:host{--composition-padding-y:var(--mte-space-md);--composition-padding-x:var(--mte-space-md);--composition-divider:none;--action-margin:var(--mte-space-md);align-items:center;border-bottom:var(--composition-divider);direction:row;display:flex;padding:var(--composition-padding-y) var(--composition-padding-x)}:host([withBorder]){--composition-divider:solid 1px var(--mte-border-1)}.title{display:flex;flex-direction:column;justify-content:center}.content{align-items:center;direction:row;display:flex;flex-grow:1}.action{align-self:flex-start;display:block;flex-grow:0;flex-shrink:0;margin-left:var(--action-margin)}`;

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
    return import_lit38.html`${this.instanceStyles}<slot name="title" class="title" part="title"><mte-title>${this.label}</mte-title></slot><slot class="content" part="content"></slot><slot name="action" class="action" part="action">${this.withClose ? import_lit38.html`<mte-icon-button class="close-button" icon="close" density="compact" type="${this.closeType}" aria-label="${this.closeAriaLabel}" @click="${(e) => {
      this._onClose.emit(e);
      this._doClose.emit(e);
    }}"></mte-icon-button>` : null}</slot>`;
  }
};
MteHeader.styles = [styles7, styles20];
__decorateClass([
  (0, import_decorators29.property)()
], MteHeader.prototype, "label", 2);
__decorateClass([
  (0, import_decorators29.property)({ type: Boolean, reflect: true })
], MteHeader.prototype, "withClose", 2);
__decorateClass([
  (0, import_decorators29.property)({ reflect: true })
], MteHeader.prototype, "closeAriaLabel", 2);
__decorateClass([
  (0, import_decorators29.property)({ reflect: true })
], MteHeader.prototype, "closeType", 2);
__decorateClass([
  (0, import_decorators29.property)({ type: Boolean, reflect: true })
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
var import_lit40 = require("lit");

// src/atomic/composition/content.styles.ts
var import_lit39 = require("lit");
var styles21 = import_lit39.css`:host{--composition-padding-y:var(--mte-space-md);--composition-padding-x:var(--mte-space-md);display:block;padding-left:var(--composition-padding-x);padding-right:var(--composition-padding-x);position:relative}:not(mte-header)+:host{padding-top:var(--composition-padding-y)}:host+:not(mte-footer){padding-bottom:var(--composition-padding-y)}`;

// src/atomic/composition/content.element.ts
var MteContent = class extends MteContentBase {
  render() {
    return import_lit40.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteContent.styles = [styles7, styles21];
MteContent = __decorateClass([
  defineElement("mte-content")
], MteContent);

// src/atomic/composition/footer.element.ts
var import_lit42 = require("lit");
var import_decorators30 = require("lit/decorators.js");

// src/atomic/composition/footer.styles.ts
var import_lit41 = require("lit");
var styles22 = import_lit41.css`:host{--composition-padding-y:var(--mte-space-md);--composition-padding-x:var(--mte-space-md);--composition-divider:none;border-top:var(--composition-divider);display:block;padding:var(--composition-padding-y) var(--composition-padding-x)}:host([actions]){align-items:center;display:flex;flex-direction:row;gap:var(--mte-space-sm);justify-content:flex-end}:host([withBorder]){--composition-divider:solid 1px var(--mte-border-1)}`;

// src/atomic/composition/footer.element.ts
var MteFooter = class extends MteContentBase {
  constructor() {
    super(...arguments);
    this.actions = false;
    this.withBorder = false;
  }
  render() {
    return import_lit42.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteFooter.styles = [styles7, styles22];
__decorateClass([
  (0, import_decorators30.property)({ type: Boolean, reflect: true })
], MteFooter.prototype, "actions", 2);
__decorateClass([
  (0, import_decorators30.property)({ type: Boolean, reflect: true })
], MteFooter.prototype, "withBorder", 2);
MteFooter = __decorateClass([
  defineElement("mte-footer")
], MteFooter);

// src/atomic/composition/condition.element.ts
var import_if_defined5 = require("lit/directives/if-defined.js");
var import_lit44 = require("lit");
var import_decorators31 = require("lit/decorators.js");

// src/atomic/composition/condition.styles.ts
var import_lit43 = require("lit");
var styles23 = import_lit43.css`:host{align-items:center;color:var(--mte-ink-3);display:flex;justify-content:center;padding:var(--mte-space-sm);text-align:center;width:100%}`;

// src/atomic/composition/condition.element.ts
var import_icons2 = require("@mortar/icons");
MteIconRegistryService.registerIcons([
  import_icons2.mtrIconCheckCircle,
  import_icons2.mtrIconAlertCircle,
  import_icons2.mtrIconAlert,
  import_icons2.mtrIconInformation
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
    return import_lit44.html`${this.instanceStyles} ${this.loading ? import_lit44.html`<mte-spinner diameter="${Number(this.size)}"></mte-spinner>` : icon ? import_lit44.html`<mte-icon name="${icon}" color="${(0, import_if_defined5.ifDefined)(this.getColor(this.color, this.muted, this.type))}" size="${this.size}"></mte-icon>` : null}`;
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
MteCondition.styles = [styles7, styles23];
__decorateClass([
  (0, import_decorators31.property)({ reflect: true })
], MteCondition.prototype, "type", 2);
__decorateClass([
  (0, import_decorators31.property)({ reflect: true })
], MteCondition.prototype, "icon", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Boolean, reflect: true })
], MteCondition.prototype, "muted", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Boolean, reflect: true })
], MteCondition.prototype, "loading", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Number, reflect: true })
], MteCondition.prototype, "size", 2);
MteCondition = __decorateClass([
  defineElement("mte-condition")
], MteCondition);

// src/atomic/composition/section.element.ts
var import_lit46 = require("lit");

// src/atomic/composition/section.styles.ts
var import_lit45 = require("lit");
var styles24 = import_lit45.css`:host{display:block;position:relative}`;

// src/atomic/composition/section.element.ts
var MteSection = class extends MteContentBase {
  render() {
    return import_lit46.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteSection.styles = [styles7, styles24];
MteSection = __decorateClass([
  defineElement("mte-section")
], MteSection);

// src/atomic/popover/popover.element.ts
var import_animejs2 = __toESM(require("animejs"), 1);
MteIconRegistryService.registerIcons([import_icons3.mtrIconClose]);
var nextUniqueId4 = 0;
var nextUniqueChildId = 0;
var MtePopover = class extends DisabledMixin(StylePartsMixin(MteElement)) {
  constructor() {
    super();
    this.id = `mte-popover--${nextUniqueId4++}`;
    this.position = "top";
    this.placement = "center";
    this.openDelay = 0;
    this.closeDelay = 0;
    this.offset = 8;
    this.withoutArrow = false;
    this.withoutFocusTrap = false;
    this.withoutCloseOnClickOutside = false;
    this.withoutCloseOnEscape = false;
    this.withoutPortal = false;
    this.ariaHidden = "true";
    this.ariaLive = "off";
    this.role = "dialog";
    this.isFocusFallback = true;
    this.tabindex = "-1";
    this.triggerOn = "click";
    this.animationDuration = import_styles17.config.animation.transitionDurationJs.short * 1e3;
    this.portalAdapter = defaultPortalAdapter;
    this.visible = false;
    this.opened = false;
    this.renderedPosition = null;
    /** Subscription callback to clear hover listeners */
    this.cleanupUpdateListeners = null;
    this.focusTrapController = new FocusTrapController(this);
    this.clickOutsideController = new ClickOutsideController(this, () => {
      if (this.withoutPortal) {
        this.handleCloseOnClickOutside();
      }
    });
    this.portalController = new PortalController(this);
    this.detectChildCloseController = new DetectChildCloseController(this);
    this.slotController = new SlotController(this, {
      updateOnChange: ["default", "header", "footer"]
    });
    this.hasHeader = false;
    this.hasFooter = false;
    /** Triggers a floating-ui position recompute */
    this.updatePosition = () => {
      if (this.targetElement) {
        const [placement, fallbackPlacements] = calculateOverlayPlacements(
          this.position,
          this.placement
        );
        (0, import_dom2.computePosition)(this.targetElement, this.popoverContainerElem, {
          placement,
          strategy: "fixed",
          middleware: [
            (0, import_dom2.shift)({ padding: 16 }),
            (0, import_dom2.offset)(this.offset),
            (0, import_dom2.flip)({ fallbackPlacements }),
            (0, import_dom2.arrow)({ element: this.arrowElem }),
            (0, import_dom2.hide)()
          ].filter((item) => item !== null)
        }).then(({ x, y, placement: placement2, middlewareData }) => {
          this.renderedPosition = placement2;
          const { referenceHidden } = middlewareData.hide;
          Object.assign(this.popoverContainerElem.style, {
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
              [staticSide]: "-4px"
            });
          }
        });
      }
    };
    this.handleCloseOnClickOutside = () => {
      if (this.opened && !this.withoutCloseOnClickOutside) {
        this.close();
      }
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  /** The first element currently in the header slot */
  get headerElementRef() {
    return this._headerElementRef;
  }
  set headerElementRef(newElem) {
    this._headerElementRef = newElem;
    if (newElem) {
      const existingId = this._headerElementRef?.getAttribute("id");
      const headerId = existingId ?? `${this.id}-${nextUniqueChildId++}`;
      this._headerElementRef?.setAttribute("id", headerId);
      this.ariaLabelledBy = headerId;
    } else {
      this.ariaLabelledBy = null;
    }
  }
  /** The first element currently in the content slot */
  get contentElementRef() {
    return this._contentElementRef;
  }
  set contentElementRef(newElem) {
    this._contentElementRef = newElem;
    if (newElem) {
      const existingId = this._contentElementRef?.getAttribute("id");
      const contentId = existingId ?? `${this.id}-${nextUniqueChildId++}`;
      this._contentElementRef?.setAttribute("id", contentId);
      this.ariaDescribedBy = contentId;
    } else {
      this.ariaDescribedBy = null;
    }
  }
  handleTriggerOnChange() {
    this.role = this.triggerOn === "click" || this.triggerOn === "none" ? "dialog" : "tooltip";
    this.isFocusFallback = this.role === "dialog" ? true : false;
    this._onTriggerChange.emit(this.triggerOn);
    this.updateTriggerAriaIds();
  }
  handleIdChange() {
    this.updateTriggerAriaIds();
  }
  handleDisabledChange() {
    if (this.visible) {
      this.close();
    }
  }
  handleWithoutCloseOnEscape() {
    if (!this.withoutCloseOnEscape && this.visible) {
      document.addEventListener("keydown", this.handleKeyDown);
    } else if (this.visible) {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }
  handlePositionChange() {
    this.updatePosition();
    this.renderedPosition = null;
  }
  handleTargetChange() {
    this.updateTriggerAriaIds();
    this.updatePosition();
  }
  firstUpdated() {
    if (!this.opened) {
      this.ariaHidden = "true";
    }
    this.updateTriggerAriaIds();
  }
  connectedCallback() {
    super.connectedCallback();
    this.slotController.watchSlots(["default", "header", "footer"]).subscribe((changes) => {
      if (changes?.has("header")) {
        this.hasHeader = this.slotController.check("header");
        if (this.headerElements?.length > 0) {
          this.headerElementRef = this.headerElements?.[0];
        }
      }
      if (changes?.has("footer")) {
        this.hasFooter = this.slotController.check("footer");
      }
      if (changes?.has("default")) {
        if (this.contentElements?.length > 0) {
          this.contentElementRef = this.contentElements?.[0];
        }
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanupUpdateListeners?.();
    this.cleanupUpdateListeners = null;
    this.openAnimationRef?.remove();
    this.closeAnimationRef?.remove();
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  /** Toggles the popover between openn and hidden states */
  toggle() {
    return this.visible ? this.close() : this.open();
  }
  /** Opens the popover with any defined delays */
  open() {
    return new Promise((resolve) => {
      if (!this.disabled && !this.visible && this.targetElement) {
        if (this.closeTimeoutId) {
          clearTimeout(this.closeTimeoutId);
          this.closeTimeoutId = null;
        }
        this.openTimeoutId = setTimeout(() => {
          const openPromise = this.withoutPortal ? Promise.resolve() : this.portalController.appendToStack(this, {
            withInertBackdrop: this.triggerOn !== "click" || this.withoutCloseOnClickOutside && this.withoutFocusTrap,
            portalAdapter: this.portalAdapter,
            closeOnClickOutsideHandler: this.handleCloseOnClickOutside
          });
          openPromise.then(() => {
            if (!this.cleanupUpdateListeners) {
              setTimeout(() => {
                this.cleanupUpdateListeners = (0, import_dom2.autoUpdate)(
                  this.targetElement,
                  this.popoverContainerElem,
                  this.updatePosition
                );
              });
            }
            if (!this.opened) {
              this._onOpen.emit(null, { bubbles: false });
            }
            this.opened = true;
            this.ariaHidden = "false";
            this.ariaLive = this.triggerOn === "click" || this.triggerOn === "none" ? "off" : "polite";
            this.targetElement?.setAttribute("aria-expanded", "true");
            this.openTimeoutId = null;
            if (this.popoverContainerElem) {
              this.popoverContainerElem.style.display = "block";
              this.closeAnimationRef?.pause();
              this.openAnimationRef?.remove();
              this.openAnimationRef = (0, import_animejs2.default)({
                targets: this.popoverContainerElem,
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
                easing: "easeOutElastic(.5, .75)",
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
      this.clickOutsideController.listenForClicksOutsideOf(this.popoverContainerElem);
      if (!this.withoutCloseOnEscape) {
        document.addEventListener("keydown", this.handleKeyDown);
      }
      if (this.triggerOn === "click" && !this.withoutFocusTrap) {
        setTimeout(() => {
          this.updateComplete.then(() => {
            this.focusTrapController.trapFocus(this, document.activeElement);
          });
        }, 50);
      }
    });
  }
  /** Closes the popover with any defined delays */
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
        this.targetElement?.setAttribute("aria-expanded", "false");
        this.closeTimeoutId = null;
        this.cleanupUpdateListeners?.();
        this.cleanupUpdateListeners = null;
        if (this.popoverContainerElem) {
          this.openAnimationRef?.pause();
          this.closeAnimationRef?.remove();
          this.closeAnimationRef = (0, import_animejs2.default)({
            targets: this.popoverContainerElem,
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
            easing: "easeOutElastic(.5, .75)",
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
      this.popoverContainerElem.style.display = "";
      this.closeAnimationRef?.remove();
      this.closeAnimationRef = null;
      this.portalController.removeFromStack();
      this.clickOutsideController.stopListening();
      if (!this.withoutCloseOnEscape) {
        document.removeEventListener("keydown", this.handleKeyDown);
      }
      if (!this.withoutFocusTrap) {
        this.focusTrapController.releaseFocus(true);
      }
    });
  }
  handleKeyDown(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }
  updateTriggerAriaIds() {
    if (this.targetElement) {
      if (this.triggerOn === "click") {
        this.targetElement.removeAttribute("aria-describedby");
        this.targetElement.setAttribute("aria-haspopup", "true");
        this.targetElement.setAttribute("aria-controls", this.id);
      } else {
        this.targetElement.setAttribute("aria-describedby", this.id);
        this.targetElement.removeAttribute("aria-haspopup");
        this.targetElement.removeAttribute("aria-controls");
      }
    }
    if (this.opened) {
      this.ariaLive = this.triggerOn === "click" || this.triggerOn === "none" ? "off" : "polite";
    }
  }
  render() {
    const containerClasses = (0, import_class_map5.classMap)({ visible: this.visible });
    const arrowClasses = (0, import_class_map5.classMap)({
      visible: !this.withoutArrow,
      [this.renderedPosition]: true
    });
    return import_lit47.html`${this.instanceStyles}<div class="popover-container ${containerClasses}"><div class="popover"><div class="content" part="content"><div id="header" part="header" class="${(0, import_class_map5.classMap)({ "has-content": this.hasHeader })}"><slot name="header"></slot></div><span id="body" part="body"><slot></slot></span><div id="footer" part="footer" class="${(0, import_class_map5.classMap)({ "has-content": this.hasFooter })}"><slot name="footer"></slot></div></div></div><div part="arrow" class="arrow ${arrowClasses}"></div></div>`;
  }
};
MtePopover.styles = [styles7, styles15];
MtePopover.shadowRootOptions = { ...MteElement.shadowRootOptions, delegatesFocus: false };
__decorateClass([
  (0, import_decorators32.property)({ reflect: true })
], MtePopover.prototype, "id", 2);
__decorateClass([
  (0, import_decorators32.property)({ reflect: true })
], MtePopover.prototype, "position", 2);
__decorateClass([
  (0, import_decorators32.property)({ reflect: true })
], MtePopover.prototype, "placement", 2);
__decorateClass([
  (0, import_decorators32.property)({ type: Number, reflect: true })
], MtePopover.prototype, "openDelay", 2);
__decorateClass([
  (0, import_decorators32.property)({ type: Number, reflect: true })
], MtePopover.prototype, "closeDelay", 2);
__decorateClass([
  (0, import_decorators32.property)({ type: Number, reflect: true })
], MtePopover.prototype, "offset", 2);
__decorateClass([
  (0, import_decorators32.property)({ type: Boolean, reflect: true })
], MtePopover.prototype, "withoutArrow", 2);
__decorateClass([
  (0, import_decorators32.property)({ type: Boolean, reflect: true })
], MtePopover.prototype, "withoutFocusTrap", 2);
__decorateClass([
  (0, import_decorators32.property)({ type: Boolean, reflect: true })
], MtePopover.prototype, "withoutCloseOnClickOutside", 2);
__decorateClass([
  (0, import_decorators32.property)({ type: Boolean, reflect: true })
], MtePopover.prototype, "withoutCloseOnEscape", 2);
__decorateClass([
  (0, import_decorators32.property)({ type: Boolean, reflect: true })
], MtePopover.prototype, "withoutPortal", 2);
__decorateClass([
  (0, import_decorators32.property)({ attribute: "aria-hidden", reflect: true })
], MtePopover.prototype, "ariaHidden", 2);
__decorateClass([
  (0, import_decorators32.property)({ attribute: "aria-live", reflect: true })
], MtePopover.prototype, "ariaLive", 2);
__decorateClass([
  (0, import_decorators32.property)({ attribute: "aria-labelledby", reflect: true })
], MtePopover.prototype, "ariaLabelledBy", 2);
__decorateClass([
  (0, import_decorators32.property)({ attribute: "aria-describedby", reflect: true })
], MtePopover.prototype, "ariaDescribedBy", 2);
__decorateClass([
  (0, import_decorators32.property)({ reflect: true })
], MtePopover.prototype, "role", 2);
__decorateClass([
  (0, import_decorators32.property)({ attribute: "data-focus-fallback", type: Boolean, reflect: true })
], MtePopover.prototype, "isFocusFallback", 2);
__decorateClass([
  (0, import_decorators32.property)({ reflect: true })
], MtePopover.prototype, "tabindex", 2);
__decorateClass([
  (0, import_decorators32.property)({ reflect: true })
], MtePopover.prototype, "triggerOn", 2);
__decorateClass([
  (0, import_decorators32.property)({ attribute: false })
], MtePopover.prototype, "targetElement", 2);
__decorateClass([
  (0, import_decorators32.property)({ type: Number })
], MtePopover.prototype, "animationDuration", 2);
__decorateClass([
  (0, import_decorators32.property)()
], MtePopover.prototype, "portalAdapter", 2);
__decorateClass([
  (0, import_decorators32.state)()
], MtePopover.prototype, "visible", 2);
__decorateClass([
  (0, import_decorators32.state)()
], MtePopover.prototype, "opened", 2);
__decorateClass([
  (0, import_decorators32.state)()
], MtePopover.prototype, "renderedPosition", 2);
__decorateClass([
  eventEmitter()
], MtePopover.prototype, "_onTriggerChange", 2);
__decorateClass([
  eventEmitter()
], MtePopover.prototype, "_onOpen", 2);
__decorateClass([
  eventEmitter()
], MtePopover.prototype, "_onClose", 2);
__decorateClass([
  (0, import_decorators32.queryAssignedElements)({ slot: "header" })
], MtePopover.prototype, "headerElements", 2);
__decorateClass([
  (0, import_decorators32.queryAssignedElements)()
], MtePopover.prototype, "contentElements", 2);
__decorateClass([
  (0, import_decorators32.query)(".popover-container")
], MtePopover.prototype, "popoverContainerElem", 2);
__decorateClass([
  (0, import_decorators32.query)(".arrow")
], MtePopover.prototype, "arrowElem", 2);
__decorateClass([
  (0, import_decorators32.state)()
], MtePopover.prototype, "hasHeader", 2);
__decorateClass([
  (0, import_decorators32.state)()
], MtePopover.prototype, "hasFooter", 2);
__decorateClass([
  onUpdate("triggerOn")
], MtePopover.prototype, "handleTriggerOnChange", 1);
__decorateClass([
  onUpdate("id", { waitUntilFirstUpdate: true })
], MtePopover.prototype, "handleIdChange", 1);
__decorateClass([
  onUpdate("disabled", { waitUntilFirstUpdate: true })
], MtePopover.prototype, "handleDisabledChange", 1);
__decorateClass([
  onUpdate("withoutCloseOnEscape")
], MtePopover.prototype, "handleWithoutCloseOnEscape", 1);
__decorateClass([
  onUpdate(["position", "placement", "se", "sp", "offset"], { waitUntilFirstUpdate: true })
], MtePopover.prototype, "handlePositionChange", 1);
__decorateClass([
  onUpdate(["targetElement"], { waitUntilFirstUpdate: true })
], MtePopover.prototype, "handleTargetChange", 1);
MtePopover = __decorateClass([
  defineElement("mte-popover")
], MtePopover);

// src/atomic/avatar/avatar-group.element.ts
var import_styles18 = require("@mortar/styles");
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
      this.setInstanceStyle("avatar-group", (0, import_styles18.selectorFactory)(this.instanceStyleSelectorRoot), {
        "--gap": this.gap
      });
    }
  }
  renderItem(item) {
    return import_lit48.html`<li class="avatar-list-item"><mte-avatar href="${(0, import_if_defined6.ifDefined)(item.href)}" src="${(0, import_if_defined6.ifDefined)(item.src)}" srcSet="${(0, import_if_defined6.ifDefined)(item.srcSet)}" label="${item.label}" c="${(0, import_if_defined6.ifDefined)(item.c)}" bg="${(0, import_if_defined6.ifDefined)(item.bg)}" size="${(0, import_if_defined6.ifDefined)(this.size)}" radius="${(0, import_if_defined6.ifDefined)(this.radius)}" .colorFormatter="${item.colorFormatter}" .initialsFormatter="${item.initialsFormatter}" ?withoutElevation="${true}" ?withTooltip="${item.withTooltip}"></mte-avatar></li>`;
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
      return import_lit48.html`${allItems}<li><mte-overlay-trigger><button id="trigger" type="button" slot="trigger" class="avatar-excess-container ${(0, import_class_map6.classMap)({ "is-popover": !!hasLink })}"><div class="avatar-excess">+${excessItems.length}</div></button> ${hasLink ? import_lit48.html`<mte-popover withoutPortal @onClose="${() => this.triggerElem.focus()}" id="popover" slot="overlay"><ul>${excessItems.map((item) => {
        return item.href ? import_lit48.html`<li><mte-link href="${(0, import_if_defined6.ifDefined)(item.href)}">${item.label}</mte-link></li>` : import_lit48.html`<li>${item.label}</li>`;
      })}</ul></mte-popover>` : import_lit48.html`<mte-tooltip slot="overlay">${names.map((name) => {
        return import_lit48.html`<div>${name}</div>`;
      })}</mte-tooltip>`}</mte-overlay-trigger></li>`;
    }
    if (this.items) {
      return this.items.map((item) => this.renderItem(item));
    }
  }
  render() {
    return import_lit48.html`${this.instanceStyles}<ul class="avatar-list">${this.renderItems()}</ul>`;
  }
};
MteAvatarGroup.styles = [styles7, styles12];
__decorateClass([
  (0, import_decorators33.property)({ type: Number })
], MteAvatarGroup.prototype, "limit", 2);
__decorateClass([
  (0, import_decorators33.property)({ reflect: true })
], MteAvatarGroup.prototype, "size", 2);
__decorateClass([
  (0, import_decorators33.property)()
], MteAvatarGroup.prototype, "gap", 2);
__decorateClass([
  (0, import_decorators33.property)({ type: Array })
], MteAvatarGroup.prototype, "items", 2);
__decorateClass([
  (0, import_decorators33.query)("#trigger")
], MteAvatarGroup.prototype, "triggerElem", 2);
MteAvatarGroup = __decorateClass([
  defineElement("mte-avatar-group")
], MteAvatarGroup);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hdmF0YXIvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hdmF0YXIiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYmFzZS1jbGFzc2VzL210ZS5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9jc3MtaW4tanMvY3NzLWluLWpzLnByb3BlcnR5LW1hcHBlcnMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Nzcy1pbi1qcy9jc3MtaW4tanMudXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9mb2N1cy51dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Vudmlyb25tZW50LnV0aWxpdGllcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS91dGlsaXRpZXMvZm9ybS51dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL3JlYWN0aXZlLXNpZ25hbC50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9iYXNlLWNsYXNzZXMvY29udGVudC5iYXNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2F0dHJpYnV0ZS1jb252ZXJ0ZXIvcmVzcG9uc2l2ZS1hdHRyaWJ1dGUuY29udmVydGVyLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbnN0YW50cy9oZWItbG9nby50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb250cm9sbGVycy9jbGljay1vdXRzaWRlLmNvbnRyb2xsZXIudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29udHJvbGxlcnMvZm9jdXMtdHJhcC5jb250cm9sbGVyLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbnRyb2xsZXJzL3Nsb3QuY29udHJvbGxlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy90aGVtZS5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZpY2VzL3BvcnRhbC5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZpY2VzL2hpc3RvcnktYXBpLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc2VydmljZXMvbG9jYWxpemUuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb250cm9sbGVycy9wb3J0YWwuY29udHJvbGxlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb250cm9sbGVycy9kZXRlY3QtY2hpbGQtY2xvc2UuY29udHJvbGxlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2J1dHRvbi9idXR0b24ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2ljb24vaWNvbi5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90b29sYmFyL3Rvb2xiYXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2NhcmQvY2FyZC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdHJlZS90cmVlLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90YWcvdGFnLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9iYWRnZS9iYWRnZS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbGluay9saW5rLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hbGVydC9hbGVydC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvaW5wdXQvaW5wdXQucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2RyYXdlci9kcmF3ZXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2FzaWRlL2FzaWRlLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9icmVhZGNydW1icy9icmVhZGNydW1iLWl0ZW0ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL21vZGFsL21vZGFsLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jaGVja2JveC9jaGVja2JveC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcmFkaW8vcmFkaW8ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdi9uYXYucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3N3aXRjaC9zd2l0Y2gucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdGl2ZS1zZWxlY3QvbmF0aXZlLXNlbGVjdC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGV4dGFyZWEvdGV4dGFyZWEucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3NrZWxldG9uL3NrZWxldG9uLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zbGlkZXIvc2xpZGVyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zZWdtZW50ZWQtY29udHJvbC9zZWdtZW50ZWQtY29udHJvbC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0LmRlY29yYXRvci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5jb250ZXh0LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbnRyb2xsZXJzL2FwcGxpZWQtcHJlc2V0LWNvbnRleHQuY29udHJvbGxlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9kZWNvcmF0b3JzL29uLXVwZGF0ZS5kZWNvcmF0b3IudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvZGVjb3JhdG9ycy9ldmVudC1lbWl0dGVyLmRlY29yYXRvci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9kZWNvcmF0b3JzL2RlZmluZS1lbGVtZW50LmRlY29yYXRvci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvY29sb3IubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2RlbnNpdHkubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2RlbnNpdHkubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9kaXNhYmxlZC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvaW52ZXJzZS5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvaW52ZXJzZS5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3NpemUubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3RhYmluZGV4Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9yYWRpdXMubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3N0eWxlLXBhcnRzLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvYnV0dG9uLm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvb3ZlcmxheS5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvb3ZlcmxheS5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9maWVsZHNldC5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9mb3JtLWZpZWxkLm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvYXV0by1hY3RpdmUtbGluay5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvc2xvdC1vYnNlcnZlci5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvY2hlY2tib3gubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL21hcHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL2FvbS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvbXV0YXRpb24tb2JzZXJ2ZXJzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy91dGlscy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvVmFsaWRpdHlTdGF0ZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvQ3VzdG9tU3RhdGVTZXQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL0hUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9wYXRjaC1mb3JtLXByb3RvdHlwZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvZWxlbWVudC1pbnRlcm5hbHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2xhbmcubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3dhaXQtZm9yLWZ3Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3N0eWxlcyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zdHlsZXMvYmFzZS5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hdmF0YXIvYXZhdGFyLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvdXRpbGl0aWVzL292ZXJsYXktdHJpZ2dlciIsICIuLi8uLi8uLi8uLi9zcmMvdXRpbGl0aWVzL292ZXJsYXktdHJpZ2dlci9vdmVybGF5LXRyaWdnZXIuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdG9vbHRpcCIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Rvb2x0aXAvdG9vbHRpcC5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL292ZXJsYXkudXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvaWNvbi9pY29uLmVsZW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pY29uL2ljb24uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvaWNvbi9pY29uLXJlZ2lzdHJ5LnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hdmF0YXIiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hdmF0YXIvYXZhdGFyLWdyb3VwLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2xpbmsvbGluay5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGV4dC90ZXh0LmVsZW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90ZXh0L3RleHQuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGV4dCIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2xpbmsvbGluay5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9wb3BvdmVyIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcG9wb3Zlci9wb3BvdmVyLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2J1dHRvbiIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2J1dHRvbi9idXR0b24uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcHJvZ3Jlc3Mtc3Bpbm5lciIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXIuY29tbW9uLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcHJvZ3Jlc3Mtc3Bpbm5lci9zcGlubmVyLmVsZW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24vYnV0dG9uLWNvbW1vbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2J1dHRvbiIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2J1dHRvbi9pY29uLWJ1dHRvbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jb21wb3NpdGlvbiIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RpdGxlIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGl0bGUvdGl0bGUuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvY29tcG9zaXRpb24vaGVhZGVyLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2NvbXBvc2l0aW9uL2NvbnRlbnQuZWxlbWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2NvbXBvc2l0aW9uL2NvbnRlbnQuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvY29tcG9zaXRpb24vZm9vdGVyLmVsZW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jb21wb3NpdGlvbi9mb290ZXIuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvY29tcG9zaXRpb24iLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jb21wb3NpdGlvbi9jb25kaXRpb24uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvY29tcG9zaXRpb24vc2VjdGlvbi5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvY29tcG9zaXRpb24vc2VjdGlvbi5zdHlsZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCAqIGZyb20gJy4vYXZhdGFyLmVsZW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hdmF0YXItZ3JvdXAuZWxlbWVudCc7XG4iLCBudWxsLCAiLyogZXNsaW50LWRpc2FibGUgd2Mvbm8tc2VsZi1jbGFzcyAqL1xuaW1wb3J0IHsgcHJvcGVydHksIHN0YXRlIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBzZWxlY3RvckZhY3RvcnksIFNlbGVjdG9yRmFjdG9yeSB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7XG4gIGNvbnN0cnVjdEluc3RhbmNlU3R5bGVzLFxuICBnZW5lcmF0ZVNlbGVjdG9yc0Zyb21TdHlsZU1hcCxcbiAgU2VsZWN0b3JTdHlsZXMsXG4gIFN0eWxlTWFwLFxuICBVbnN1YnNjcmliZXIsXG59IGZyb20gJy4uL3V0aWxpdGllcyc7XG5pbXBvcnQgeyB1bnNhZmVIVE1MIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy91bnNhZmUtaHRtbC5qcyc7XG5pbXBvcnQgeyBNb3J0YXJQcmVzZXRUaGVtZSB9IGZyb20gJy4uL3ByZXNldHMnO1xuXG4vLyBEaXNhYmxlIHRoaXMgd2FybmluZyBmb3Igbm93IGJ5IHByZS1tYXJraW5nIGl0IGFzIGlzc3VlZCBzbyB1c2VycyBkb24ndCBoYXZlIHRvIHNlZSBpdFxuLy8gVE9ETzogQXNrIGxpdCB0ZWFtIHdoeSB0aGlzIGlzIHRocm93biBldmVyeXdoZXJlIGFuZCB3aGF0IGFsdGVybmF0aXZlcyBhcmUgZm9yIHByZXNldCBzb2x1dGlvblxuZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncyA/Pz0gbmV3IFNldCgpO1xuZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncy5hZGQoXG4gICdPdmVycmlkaW5nIFJlYWN0aXZlRWxlbWVudC5nZXRQcm9wZXJ0eURlc2NyaXB0b3IoKSBpcyBkZXByZWNhdGVkLiBUaGUgb3ZlcnJpZGUgd2lsbCBub3QgYmUgY2FsbGVkIHdpdGggc3RhbmRhcmQgZGVjb3JhdG9ycyBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy9uby1vdmVycmlkZS1nZXQtcHJvcGVydHktZGVzY3JpcHRvciBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nXG4pO1xuXG5leHBvcnQgY2xhc3MgTXRlRWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwcml2YXRlIF9faW5zdGFuY2VTdHlsZVNoZWV0TWFwID0gbmV3IE1hcDxzdHJpbmcsIFNlbGVjdG9yU3R5bGVzW10+KCk7XG4gIHByaXZhdGUgX19pbnN0YW5jZVN0eWxlU2hlZXROZWVkc1VwZGF0ZSA9IGZhbHNlO1xuXG4gIC8qKiBTZXQgdG8gdHJ1ZSB3aGVuIGZpcnN0VXBkYXRlZCBpcyBmaXJzdCBjYWxsZWQgKi9cbiAgcHJvdGVjdGVkIF9fZmlyc3RVcGRhdGVkID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIGluc3RhbmNlU3R5bGVzO1xuXG4gIC8qKlxuICAgKiBBbGwgc3VicyBwdXNoZWQgdG8gdGhpcyBhcnJheSB3aWxsIGJlIGNsZWFyZWQgaW4gdGhlIGRpc2Nvbm5lY3RlZENhbGxiYWNrXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN1YnM6IFVuc3Vic2NyaWJlcltdID0gW107XG5cbiAgLyoqIFN0eWxlIG1hcHBpbmdzIHRoYXQgYXJlIGFwcGxpZWQgdG8gdGhlIGhvc3QgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCByZWZsZWN0OiB0cnVlIH0pIHNlPzogU3R5bGVNYXA7XG5cbiAgLyoqXG4gICAqIFRoZSB0aGVtZSB0byB1c2UgZm9yIHN0eWxpbmcgdGhpcyBjb21wb25lbnQuIE92ZXJyaWRlcyB0aGUgZ2xvYmFsIHByZXNldCBmb3IgdGhpcyBpbnN0YW5jZSBvZiB0aGlzIGNvbXBvbmVudC5cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgYXR0cmlidXRlOiAnZGF0YS1tdGUtdGhlbWUnIH0pXG4gIHNldCB0aGVtZSh0aGVtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLl90aGVtZTtcbiAgICB0aGlzLl90aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBvbGRWYWx1ZSk7XG4gICAgLy8gVE9ETzogZmlndXJlIG91dCBhIGJldHRlciB3YXkgdG8gc29sdmUgdGhpcyBmb3IgYWxsIHByZXNldHNcbiAgICBpZiAodGhpcy5fX2xvY2FsUHJlc2V0VGhlbWUpIHtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXF1ZXN0VXBkYXRlKCd0aGVtZScsIG51bGwpKTtcbiAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB0aGlzLnJlcXVlc3RVcGRhdGUoJ3RoZW1lJywgbnVsbCkpO1xuICAgIH1cbiAgfVxuICBnZXQgdGhlbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWUgPz8gdGhpcy5fX2xvY2FsUHJlc2V0VGhlbWU/Lm5hbWU7XG4gIH1cbiAgcHJpdmF0ZSBfdGhlbWU6IHN0cmluZztcblxuICAvKiogVXNlZCB0byBkZWNsYXJlIGEgbG9jYWwgdGhlbWUgdmFsdWUgZGV0ZXJtaW5lZCBieSB0aGUgbG9jYWwgcHJlc2V0IGlmIGl0IGlzIHNldC4gKi9cbiAgQHN0YXRlKCkgcHJvdGVjdGVkIF9fbG9jYWxQcmVzZXRUaGVtZTogTW9ydGFyUHJlc2V0VGhlbWU7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgc2VsZWN0b3IgdG8gaGF2ZSBpbnN0YW5jZSBzdHlsZXMgdGFyZ2V0IGEgc3BlY2lmaWMgaW5uZXIgZWxlbWVudC5cbiAgICogVXNlZnVsIGluIHNwZWNpZmljIHNjZW5hcmlvcyB3aGVyZSBmb2N1cyBpcyBkZWxlZ2F0ZWQgbGlrZSBidXR0b25zLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0IHRoaXMgcmVwZWF0cyBgOmhvc3RgIHNpeCB0aW1lcyB0byBwcm92aWRlIGEgc3BlY2lmaWNpdHkgb2YgNlxuICAgKi9cbiAgcHJvdGVjdGVkIGluc3RhbmNlU3R5bGVTZWxlY3RvclJvb3QgPSAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0JztcblxuICAvKipcbiAgICogQ2FuIGJlIGNhbGxlZCBieSBkZXJpdmVkIGNsYXNzZXMgdG8gcmVnaXN0ZXIgbmV3IGluc3RhbmNlIGxldmVsIGR5bmFtaWMgc3R5bGVzLlxuICAgKiBXaGVuIGNhbGxlZCB0aGUgaW5zdGFuY2Ugc3R5bGVzaGVldCB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIGxhdGVzdCBzdHlsZXMgdGhpcyB1cGRhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgc2V0SW5zdGFuY2VTdHlsZShpZDogc3RyaW5nLCBzZWxlY3RvcjogU2VsZWN0b3JGYWN0b3J5LCBzdHlsZU1hcDogU3R5bGVNYXApIHtcbiAgICAvLyBXZSBwYXJzZSBhbGwgc3R5bGUgaW5mb3JtYXRpb24gaGVyZSBhbmQgc2NvcGUgaXQgdG8gdGhlIGdpdmVuIGlkLiBUaGlzIGVuc3VyZXMgd2VcbiAgICAvLyBvbmx5IGV2ZXIgbmVlZCB0byByZS1wYXJzZSB0aGlzIHBvcnRpb24gb2Ygc3R5bGUgaW5mb3JtYXRpb24gd2hlbiBpdHMgYXNzb2NpYXRlZFxuICAgIC8vIGlkIGlzIHVwZGF0ZWQgYWdhaW4uXG4gICAgdGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE1hcC5zZXQoaWQsIGdlbmVyYXRlU2VsZWN0b3JzRnJvbVN0eWxlTWFwKHNlbGVjdG9yLCBzdHlsZU1hcCkpO1xuICAgIHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXROZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICAvKiogQSBjdXN0b20gaG9vayB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIGluIGRlcml2ZWQgY2xhc3NlcyB0byBzZXQgaW5zdGFuY2Ugc3R5bGVzIGFzIG5lZWRlZCAqL1xuICBwcm90ZWN0ZWQgdXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKSB7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ3NlJykpIHtcbiAgICAgIHRoaXMuc2V0SW5zdGFuY2VTdHlsZSgnc2UnLCBzZWxlY3RvckZhY3RvcnkodGhpcy5pbnN0YW5jZVN0eWxlU2VsZWN0b3JSb290KSwgdGhpcy5zZSA/PyB7fSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHdpbGxVcGRhdGUoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIud2lsbFVwZGF0ZShjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gQ2FsbCB0aGUgdXBkYXRlSW5zdGFuY2VTdHlsZXMgaG9va1xuICAgIHRoaXMudXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKTtcblxuICAgIC8vIENoZWNrIGlmIGluc3RhbmNlIHN0eWxlcyBuZWVkIHRvIGJlIHJlcmVuZGVyZWRcbiAgICBpZiAodGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlU3R5bGVzID0gdW5zYWZlSFRNTChcbiAgICAgICAgYDxzdHlsZSBpZD1cIl9faW5zdGFuY2Utc3R5bGVzXCI+JHtjb25zdHJ1Y3RJbnN0YW5jZVN0eWxlcyhcbiAgICAgICAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TWFwXG4gICAgICAgICl9PC9zdHlsZT5gXG4gICAgICApO1xuICAgICAgdGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICB0aGlzLl9fZmlyc3RVcGRhdGVkID0gdHJ1ZTtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICB0aGlzLnN1YnMuZm9yRWFjaCgodW5zdWIpID0+IHVuc3ViKCkpO1xuICAgIHRoaXMuc3VicyA9IFtdO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgUHJvcGVydHlNYXBwZXIsIFN0eWxlUHJvcGVydHkgfSBmcm9tICcuL2Nzcy1pbi1qcy50eXBlcyc7XG5cbmNvbnN0IHByb3BlcnR5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBzdHJpbmdbXT4gPSB7XG4gIG06ICdtYXJnaW4nLFxuICBteDogWydtYXJnaW5MZWZ0JywgJ21hcmdpblJpZ2h0J10sXG4gIG15OiBbJ21hcmdpblRvcCcsICdtYXJnaW5Cb3R0b20nXSxcbiAgbXQ6ICdtYXJnaW5Ub3AnLFxuICBtcjogJ21hcmdpblJpZ2h0JyxcbiAgbWI6ICdtYXJnaW5Cb3R0b20nLFxuICBtbDogJ21hcmdpbkxlZnQnLFxuICBwOiAncGFkZGluZycsXG4gIHB4OiBbJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCddLFxuICBweTogWydwYWRkaW5nVG9wJywgJ3BhZGRpbmdCb3R0b20nXSxcbiAgcHQ6ICdwYWRkaW5nVG9wJyxcbiAgcHI6ICdwYWRkaW5nUmlnaHQnLFxuICBwYjogJ3BhZGRpbmdCb3R0b20nLFxuICBwbDogJ3BhZGRpbmdMZWZ0JyxcbiAgZDogJ2Rpc3BsYXknLFxuICBhOiAnYWxpZ25JdGVtcycsXG4gIGo6ICdqdXN0aWZ5Q29udGVudCcsXG4gIGRpcmVjdGlvbjogJ2ZsZXhEaXJlY3Rpb24nLFxuICBzaHJpbms6ICdmbGV4U2hyaW5rJyxcbiAgZ3JvdzogJ2ZsZXhHcm93JyxcbiAgd3JhcDogJ2ZsZXhXcmFwJyxcbiAgdzogJ3dpZHRoJyxcbiAgbWF4dzogJ21heFdpZHRoJyxcbiAgbWludzogJ21pbldpZHRoJyxcbiAgaDogJ2hlaWdodCcsXG4gIG1heGg6ICdtYXhIZWlnaHQnLFxuICBtaW5oOiAnbWluSGVpZ2h0JyxcbiAgZnM6ICdmb250U2l6ZScsXG4gIGZ3OiAnZm9udFdlaWdodCcsXG4gIGJnOiAnYmFja2dyb3VuZCcsXG4gIGM6ICdjb2xvcicsXG4gIGVsZXZhdGlvbjogJ2JveFNoYWRvdycsXG59O1xuXG4vKiogTWFwcyBwcm9wZXJ0eSBzaG9ydGhhbmQgdmFsdWVzIHRvIG9uZSBvciBtYW55IGZ1bGwgY3NzIHByb3BlcnRpZXMgKi9cbmV4cG9ydCBjb25zdCBwcm9wU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMucmVkdWNlKChhY2MsIHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRQcm9wcyA9IHByb3BlcnR5TWFwW3Byb3BNYXAucHJvcF0gPz8gcHJvcE1hcC5wcm9wO1xuICAgIHJldHVybiBbXG4gICAgICAuLi5hY2MsXG4gICAgICAuLi4oQXJyYXkuaXNBcnJheShtYXBwZWRQcm9wcylcbiAgICAgICAgPyBtYXBwZWRQcm9wcy5tYXAoKHByb3ApID0+ICh7IHByb3AsIHZhbHVlOiBwcm9wTWFwLnZhbHVlIH0pKVxuICAgICAgICA6IFt7IHByb3A6IG1hcHBlZFByb3BzLCB2YWx1ZTogcHJvcE1hcC52YWx1ZSB9XSksXG4gICAgXTtcbiAgfSwgW10pO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBAbW9ydGFyL3N0eWxlcyBjb25maWcgdmFsdWUgZm9yIGEgZ2l2ZW4gZG90IG5vdGF0ZWQgc3RyaW5nLlxuICogTnVtYmVycyBhbmQgbm9uLWRvdCBub3RhdGVkIHN0cmluZyB3aWxsIGp1c3QgYmUgcmV0dXJuZWQgYXMgaXMuXG4gKi9cbmV4cG9ydCBjb25zdCBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlID0gKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIgPT4ge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbmZpZ1BhdGggPSB2YWx1ZS5zcGxpdCgnLicpO1xuICAgICAgY29uc3QgY29uZmlnVmFsdWUgPSBjb25maWdQYXRoLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGFjY1trZXldO1xuICAgICAgfSwgY29uZmlnKTtcbiAgICAgIHJldHVybiBjb25maWdWYWx1ZSA/PyB2YWx1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufTtcblxuLyoqIE1hcHMgZG90IG5vdGF0ZWQgc3RyaW5nIHZhbHVlcyB0byB0aGVtZSBjb25maWcgdmFyaWFibGVzICovXG5leHBvcnQgY29uc3QgZG90U3RyaW5nVG9Db25maWdWYWx1ZU1hcHBlcjogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMucmVkdWNlKChhY2MsIHByb3BNYXApID0+IHtcbiAgICBjb25zdCBjb25maWdWYWx1ZSA9IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUocHJvcE1hcC52YWx1ZSk7XG4gICAgaWYgKGNvbmZpZ1ZhbHVlKSB7XG4gICAgICBwcm9wTWFwLnZhbHVlID0gY29uZmlnVmFsdWUgPz8gcHJvcE1hcC52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi5hY2MsIHByb3BNYXBdO1xuICB9LCBbXSk7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwTnVtYmVyVG9QeCA9ICh2YWw6IHN0cmluZyB8IG51bWJlciB8IG51bGwpID0+IHtcbiAgaWYgKCF2YWwpIHtcbiAgICByZXR1cm4gdmFsIGFzIG51bGw7XG4gIH1cbiAgcmV0dXJuICFpc05hTihOdW1iZXIodmFsKSkgPyBgJHt2YWx9cHhgIDogKHZhbCBhcyBzdHJpbmcpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcFB4VG9OdW1iZXIgPSAodmFsOiBzdHJpbmcgfCBudWxsKSA9PiB7XG4gIGlmICghdmFsKSB7XG4gICAgcmV0dXJuIHZhbCBhcyBudWxsO1xuICB9XG4gIHJldHVybiBOdW1iZXIodmFsLnJlcGxhY2UoJ3B4JywgJycpKTtcbn07XG5cbi8qKiBNYXBzIHRoZSB2YWx1ZXMgb2YgYW55IGdpdmVuIHByb3BzIHRvIHB4IHVuaXRzIGlmIGl0IGlzIGEgbnVtYmVyICovXG5leHBvcnQgY29uc3QgbnVtYmVyVG9QeDogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBtYXBOdW1iZXJUb1B4KHByb3BNYXAudmFsdWUpO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3Qgc3BhY2luZ01hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgJzAnOiBjb25maWcuc3BhY2Uubm9uZSxcbiAgJzEnOiBjb25maWcuc3BhY2UueHMsXG4gICcyJzogY29uZmlnLnNwYWNlLnNtLFxuICAnMyc6IGNvbmZpZy5zcGFjZS5tZCxcbiAgJzQnOiBjb25maWcuc3BhY2UubGcsXG4gICc1JzogY29uZmlnLnNwYWNlLnhsLFxuICAnNic6IGNvbmZpZy5zcGFjZS54eGwsXG4gICc3JzogY29uZmlnLnNwYWNlLnh4eGwsXG4gICdub25lJzogY29uZmlnLnNwYWNlLm5vbmUsXG4gICd4eHMnOiBjb25maWcuc3BhY2UueHhzLFxuICAneHMnOiBjb25maWcuc3BhY2UueHMsXG4gICdzbSc6IGNvbmZpZy5zcGFjZS5zbSxcbiAgJ21kJzogY29uZmlnLnNwYWNlLm1kLFxuICAnbGcnOiBjb25maWcuc3BhY2UubGcsXG4gICd4bCc6IGNvbmZpZy5zcGFjZS54bCxcbiAgJ3h4bCc6IGNvbmZpZy5zcGFjZS54eGwsXG4gICd4eHhsJzogY29uZmlnLnNwYWNlLnh4eGwsXG59O1xuXG4vKiogTWFwcyBzcGFjaW5nIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgc3BhY2luZyBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3Qgc3BhY2luZ1ZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gc3BhY2luZ01hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgYm9yZGVyUmFkaXVzTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBub25lOiBjb25maWcuYm9yZGVyLnJhZGl1cy5ub25lLFxuICB4czogY29uZmlnLmJvcmRlci5yYWRpdXMueHMsXG4gIHNtOiBjb25maWcuYm9yZGVyLnJhZGl1cy5zbSxcbiAgbWQ6IGNvbmZpZy5ib3JkZXIucmFkaXVzLm1kLFxuICBsZzogY29uZmlnLmJvcmRlci5yYWRpdXMubGcsXG4gIHhsOiBjb25maWcuYm9yZGVyLnJhZGl1cy54bCxcbiAgeHhsOiBjb25maWcuYm9yZGVyLnJhZGl1cy54eGwsXG4gIGZ1bGw6IGNvbmZpZy5ib3JkZXIucmFkaXVzLmZ1bGwsXG59O1xuXG4vKiogTWFwcyBib3JkZXIgcmFkaXVzIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgYm9yZGVyIHJhZGl1cyBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBib3JkZXJSYWRpdXNNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGJvcmRlcldpZHRoTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBub25lOiBjb25maWcuYm9yZGVyLndpZHRoLm5vbmUsXG4gIHNtOiBjb25maWcuYm9yZGVyLndpZHRoLnNtLFxuICBtZDogY29uZmlnLmJvcmRlci53aWR0aC5tZCxcbiAgbGc6IGNvbmZpZy5ib3JkZXIud2lkdGgubGcsXG59O1xuXG4vKiogTWFwcyBib3JkZXIgd2lkdGggdmFsdWVzIGZyb20gZGVzaWduYXRlZCBib3JkZXIgd2lkdGggc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBib3JkZXJXaWR0aE1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3Qgb3BhY2l0eU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgeHhsOiBjb25maWcub3BhY2l0eS54eGwsXG4gIHhsOiBjb25maWcub3BhY2l0eS54bCxcbiAgbGc6IGNvbmZpZy5vcGFjaXR5LmxnLFxuICBtZDogY29uZmlnLm9wYWNpdHkubWQsXG4gIHNtOiBjb25maWcub3BhY2l0eS5zbSxcbiAgeHM6IGNvbmZpZy5vcGFjaXR5LnhzLFxuICB4eHM6IGNvbmZpZy5vcGFjaXR5Lnh4cyxcbiAgeHh4czogY29uZmlnLm9wYWNpdHkueHh4cyxcbn07XG5cbi8qKiBNYXBzIG9wYWNpdHkgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBvcGFjaXR5IHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBvcGFjaXR5VmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBvcGFjaXR5TWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBmb250V2VpZ2h0TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBsaWdodDogY29uZmlnLmZvbnQud2VpZ2h0LmxpZ2h0LFxuICByZWd1bGFyOiBjb25maWcuZm9udC53ZWlnaHQucmVndWxhcixcbiAgbWVkaXVtOiBjb25maWcuZm9udC53ZWlnaHQubWVkaXVtLFxuICBib2xkOiBjb25maWcuZm9udC53ZWlnaHQuYm9sZCxcbn07XG5cbi8qKiBNYXBzIGZvbnQtd2VpZ2h0IHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgc3BhY2luZyBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgZm9udFdlaWdodFZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZm9udFdlaWdodE1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZm9udFNpemVNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHh4czogJzAuNjI1cmVtJyxcbiAgeHM6ICcwLjc1cmVtJyxcbiAgc206ICcwLjg3NXJlbScsXG4gIG1kOiAnMXJlbScsXG4gIGxnOiAnMS4yNXJlbScsXG4gIHhsOiAnMS41cmVtJyxcbiAgeHhsOiAnMS43NXJlbScsXG59O1xuXG4vKiogTWFwcyBmb250LXNpemUgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBzcGFjaW5nIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBmb250U2l6ZVZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZm9udFNpemVNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGZvbnRGYW1pbHlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHNhbnM6IGNvbmZpZy5mb250LmZhbWlseS5zYW5zLFxuICBzZXJpZjogY29uZmlnLmZvbnQuZmFtaWx5LnNlcmlmLFxuICBtb25vOiBjb25maWcuZm9udC5mYW1pbHkubW9ubyxcbn07XG5cbi8qKiBNYXBzIGZvbnQtZmFtaWx5IHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgZm9udC1mYW1pbHkgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGZvbnRGYW1pbHlWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGZvbnRGYW1pbHlNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGVsZXZhdGlvbk1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgejA6IGNvbmZpZy5lbGV2YXRpb24uejAsXG4gIHoxOiBjb25maWcuZWxldmF0aW9uLnoxLFxuICB6MjogY29uZmlnLmVsZXZhdGlvbi56MixcbiAgejM6IGNvbmZpZy5lbGV2YXRpb24uejMsXG4gIHo0OiBjb25maWcuZWxldmF0aW9uLno0LFxufTtcblxuLyoqIE1hcHMgZWxldmF0aW9uIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgZWxldmF0aW9uIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBlbGV2YXRpb25WYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGVsZXZhdGlvbk1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcbiIsICJpbXBvcnQgeyBjb25maWcsIFNlbGVjdG9yT3B0aW9ucyB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7XG4gIFNlbGVjdG9yTWV0YWRhdGEsXG4gIFNlbGVjdG9yU3R5bGVzLFxuICBTdHlsZU1hcCxcbiAgU3R5bGVNYXBDYWxsYmFjayxcbiAgU3R5bGVQcm9wZXJ0eSxcbn0gZnJvbSAnLi9jc3MtaW4tanMudHlwZXMnO1xuaW1wb3J0IHtcbiAgcHJvcFNob3J0aGFuZHMsXG4gIHNwYWNpbmdWYWxTaG9ydGhhbmRzLFxuICBudW1iZXJUb1B4LFxuICBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlTWFwcGVyLFxuICBib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLFxuICBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMsXG4gIG9wYWNpdHlWYWxTaG9ydGhhbmRzLFxuICBmb250V2VpZ2h0VmFsU2hvcnRoYW5kcyxcbiAgZm9udEZhbWlseVZhbFNob3J0aGFuZHMsXG4gIGVsZXZhdGlvblZhbFNob3J0aGFuZHMsXG4gIGZvbnRTaXplVmFsU2hvcnRoYW5kcyxcbn0gZnJvbSAnLi9jc3MtaW4tanMucHJvcGVydHktbWFwcGVycyc7XG5cbi8qKiBTcGVjaWZpZXMgd2hpY2ggcHJvcGVydHkgbWFwcGVycyBzaG91bGQgYmUgY2FsbGVkIGFuZCBpbiB3aGF0IG9yZGVyIGZvciBhIGdpdmVuIHByb3AgKi9cbmNvbnN0IHByb3BNYXBwZXJzID0ge1xuICBoZWlnaHQ6IFtudW1iZXJUb1B4XSxcbiAgbWluSGVpZ2h0OiBbbnVtYmVyVG9QeF0sXG4gIG1heEhlaWdodDogW251bWJlclRvUHhdLFxuICB3aWR0aDogW251bWJlclRvUHhdLFxuICBtaW5XaWR0aDogW251bWJlclRvUHhdLFxuICBtYXhXaWR0aDogW251bWJlclRvUHhdLFxuICB0b3A6IFtudW1iZXJUb1B4XSxcbiAgcmlnaHQ6IFtudW1iZXJUb1B4XSxcbiAgYm90dG9tOiBbbnVtYmVyVG9QeF0sXG4gIGxlZnQ6IFtudW1iZXJUb1B4XSxcbiAgbWFyZ2luOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBtYXJnaW5Ub3A6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpblJpZ2h0OiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBtYXJnaW5Cb3R0b206IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpbkxlZnQ6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmc6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmdUb3A6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmdSaWdodDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ0JvdHRvbTogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ0xlZnQ6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGdhcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcm93R2FwOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBjb2x1bW5HYXA6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGZvbnRTaXplOiBbZm9udFNpemVWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgZm9udFdlaWdodDogW2ZvbnRXZWlnaHRWYWxTaG9ydGhhbmRzXSxcbiAgZm9udEZhbWlseTogW2ZvbnRGYW1pbHlWYWxTaG9ydGhhbmRzXSxcbiAgYm9yZGVyUmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlcldpZHRoOiBbYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyVG9wTGVmdFJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG9wYWNpdHk6IFtvcGFjaXR5VmFsU2hvcnRoYW5kc10sXG4gIGJveFNoYWRvdzogW2VsZXZhdGlvblZhbFNob3J0aGFuZHNdLFxufTtcblxuLyoqXG4gKiBQYXJzZXMgcHJvcGVydGllcyB0byB0aGVpciBhY3R1YWwgcHJvcGVydHkgbWFwcGluZ3MgYWNjb3JkaW5nIHRvIHRoZVxuICogbWFwcGluZyBmdW5jdGlvbiBwaXBlbGluZXMgZGVmaW5lZCBhYm92ZVxuICovXG5leHBvcnQgY29uc3QgcGFyc2VQcm9wU2hvcnRoYW5kcyA9IChwcm9wOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBTdHlsZVByb3BlcnR5W10gPT4ge1xuICAvLyBDYXN0IHRvIHN0cmluZyB2YWx1ZXNcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB2YWx1ZSA9IGAke3ZhbHVlfWA7XG4gIH1cbiAgLy8gRXhlYyBwcm9wIHRyYW5zZm9ybXNcbiAgLy8gVGhlIHByb3Agc2hvcnRoYW5kcyBtYXBwZXIgaXMgcnVuIGFnYWluc3QgZXZlcnkgcHJvcFxuICBjb25zdCBtYXBwZWRQcm9wcyA9IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWVNYXBwZXIocHJvcFNob3J0aGFuZHMoW3sgcHJvcCwgdmFsdWUgfV0pKTtcbiAgcmV0dXJuIG1hcHBlZFByb3BzLnJlZHVjZSgoYWNjLCBwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVycyA9IHByb3BNYXBwZXJzW3Byb3BNYXAucHJvcF07XG4gICAgaWYgKG1hcHBlcnMpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgLi4ubWFwcGVycy5yZWR1Y2UoXG4gICAgICAgICAgKGFjYywgbWFwcGVyKSA9PiBtYXBwZXIoYWNjKSxcbiAgICAgICAgICBbeyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBwcm9wTWFwLnZhbHVlIH1dXG4gICAgICAgICksXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY2MucHVzaChwcm9wTWFwKTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICB9LCBbXSk7XG59O1xuXG4vKipcbiAqIFBhcnNlcyBzdHlsZU1hcCB2YWx1ZXMgdG8gc2VsZWN0b3IgKyBzdHlsZSBpbmZvIHVzZWQgZm9yXG4gKiB1cGRhdGluZyBDU1NTdHlsZVNoZWV0cyBvciA8c3R5bGU+IHRhZ3MuXG4gKi9cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVNlbGVjdG9yc0Zyb21TdHlsZU1hcCA9IChcbiAgc2VsZWN0b3JGbjogKG9wdGlvbnM/OiBTZWxlY3Rvck9wdGlvbnMpID0+IHN0cmluZyxcbiAgc3R5bGVNYXA6IFN0eWxlTWFwXG4pID0+IHtcbiAgY29uc3QgcGFyc2VkU2VsZWN0b3JzOiBTZWxlY3RvclN0eWxlc1tdID0gW107XG4gIGNvbnN0IHNlbGVjdG9yUXVldWU6IFNlbGVjdG9yTWV0YWRhdGFbXSA9IFt7IHNlbGVjdG9yOiBzZWxlY3RvckZuKCksIHN0eWxlTWFwIH1dO1xuICBjb25zdCBicmVha3BvaW50S2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZy5ncmlkLmJyZWFrcG9pbnQpO1xuXG4gIC8vIExvb3AgdGhyb3VnaCBzZWxlY3RvciBxdWV1ZSB1bnRpbCB0aGV5IGhhdmUgYWxsIGJlZW4gZXhoYXVzdGVkXG4gIHdoaWxlIChzZWxlY3RvclF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBzZWxlY3Rvck1hcCA9IHNlbGVjdG9yUXVldWUuc2hpZnQoKTtcblxuICAgIC8vIFB1c2ggcGFyc2VkIHNlbGVjdG9ycyBvbnRvIHRoZSByZXR1cm4gbGlzdFxuICAgIHBhcnNlZFNlbGVjdG9ycy5wdXNoKHtcbiAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvck1hcC5zZWxlY3RvcixcbiAgICAgIHNlbGVjdG9yV3JhcHBlcjogc2VsZWN0b3JNYXAuc2VsZWN0b3JXcmFwcGVyLFxuICAgICAgc3R5bGU6IE9iamVjdC5rZXlzKHNlbGVjdG9yTWFwLnN0eWxlTWFwKS5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBzZWxlY3Rvck1hcC5zdHlsZU1hcFtwcm9wXTtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2UgY2FsbGJhY2sgdmFsdWVzXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhbHVlID0gKHZhbHVlIGFzIFN0eWxlTWFwQ2FsbGJhY2spKGNvbmZpZyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXJzZSBvYmplY3QgdmFsdWVzXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIHBzZXVkby1jbGFzc2VzXG4gICAgICAgICAgaWYgKHByb3Auc3RhcnRzV2l0aCgnJjonKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yRm4oeyBpbmZpeDogcHJvcC5yZXBsYWNlKCcmJywgJycpIH0pLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogc2VsZWN0b3JNYXAuc2VsZWN0b3JXcmFwcGVyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBicmVha3BvaW50IHNlbGVjdG9yIHNob3J0aGFuZHNcbiAgICAgICAgICBlbHNlIGlmIChicmVha3BvaW50S2V5cy5pbmNsdWRlcyhwcm9wKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogYEBtZWRpYSAobWluLXdpZHRoOiR7Y29uZmlnLmdyaWQuYnJlYWtwb2ludFtwcm9wXX0pYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUXVldWUgdXAgc2VsZWN0b3JzIGZvciBtZWRpYS9jb250YWluZXIgcXVlcmllc1xuICAgICAgICAgIGVsc2UgaWYgKHByb3Auc3RhcnRzV2l0aCgnQG1lZGlhJykgfHwgcHJvcC5zdGFydHNXaXRoKCdAY29udGFpbmVyJykpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvck1hcC5zZWxlY3RvcixcbiAgICAgICAgICAgICAgc3R5bGVNYXA6IHZhbHVlLFxuICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IHByb3AsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFF1ZXVlIHVwIHNlbGVjdG9ycyBmb3Igc2xvdHRlZCBxdWVyaWVzXG4gICAgICAgICAgZWxzZSBpZiAocHJvcC5zdGFydHNXaXRoKCc6OnNsb3R0ZWQnKSB8fCBwcm9wLnN0YXJ0c1dpdGgoJyYgOjpzbG90dGVkJykpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvckZuKHsgcG9zdGZpeDogJyAnICsgcHJvcC5yZXBsYWNlKCcmICcsICcnKSB9KSxcbiAgICAgICAgICAgICAgc3R5bGVNYXA6IHZhbHVlLFxuICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IHNlbGVjdG9yTWFwLnNlbGVjdG9yV3JhcHBlcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUXVldWUgdXAgc2VsZWN0b3JzIGZvciB2YWx1ZSBicmVha3BvaW50IG9iamVjdHNcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIExvb3AgaW4gb3JkZXIgaGVyZSBzbyB0aGV5IG92ZXJyaWRlIGVhY2ggb3RoZXIgY29ycmVjdGx5XG4gICAgICAgICAgICBicmVha3BvaW50S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlW2tleV0pIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLCAvLyBpbmhlcml0IHRoZSBzZWxlY3RvciBoZXJlIGluIGNhc2Ugd2UgYXJlIHdpdGhpbiBhIHBzZXVkby1jbGFzc1xuICAgICAgICAgICAgICAgICAgc3R5bGVNYXA6IHsgW3Byb3BdOiB2YWx1ZVtrZXldIH0sXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IGBAbWVkaWEgKG1pbi13aWR0aDoke2NvbmZpZy5ncmlkLmJyZWFrcG9pbnRba2V5XX0pYCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIG5vcm1hbCBwcm9wc1xuICAgICAgICBjb25zdCBwcm9wcyA9IHBhcnNlUHJvcFNob3J0aGFuZHMocHJvcCwgdmFsdWUgYXMgc3RyaW5nIHwgbnVtYmVyKTtcbiAgICAgICAgcmV0dXJuIGAke2FjY30ke3Byb3BzLnJlZHVjZSgoYWNjMiwgeyBwcm9wLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgLy8gQ29udmVydCBwcm9wZXJ0eSBuYW1lcyBmcm9tIGNhbWVsLWNhc2UgdG8gZGFzaC1jYXNlLCBpLmUuOlxuICAgICAgICAgIC8vICBgYmFja2dyb3VuZENvbG9yYCAtPiBgYmFja2dyb3VuZC1jb2xvcmBcbiAgICAgICAgICAvLyBWZW5kb3ItcHJlZml4ZWQgbmFtZXMgbmVlZCBhbiBleHRyYSBgLWAgYXBwZW5kZWQgdG8gZnJvbnQ6XG4gICAgICAgICAgLy8gIGB3ZWJraXRBcHBlYXJhbmNlYCAtPiBgLXdlYmtpdC1hcHBlYXJhbmNlYFxuICAgICAgICAgIC8vIEV4Y2VwdGlvbiBpcyBhbnkgcHJvcGVydHkgbmFtZSBjb250YWluaW5nIGEgZGFzaCwgaW5jbHVkaW5nXG4gICAgICAgICAgLy8gY3VzdG9tIHByb3BlcnRpZXM7IHdlIGFzc3VtZSB0aGVzZSBhcmUgYWxyZWFkeSBkYXNoLWNhc2VkIGkuZS46XG4gICAgICAgICAgLy8gIGAtLW15LWJ1dHRvbi1jb2xvcmAgLS0+IGAtLW15LWJ1dHRvbi1jb2xvcmBcbiAgICAgICAgICBwcm9wID0gcHJvcC5yZXBsYWNlKC8oPzpeKHdlYmtpdHxtb3p8bXN8byl8KSg/PVtBLVpdKS9nLCAnLSQmJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICByZXR1cm4gYCR7YWNjMn0ke3Byb3B9OiR7dmFsdWV9O2A7XG4gICAgICAgIH0sICcnKX1gO1xuICAgICAgfSwgJycpLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZFNlbGVjdG9ycztcbn07XG5cbmNvbnN0IHBhcnNlU2VsZWN0b3JzID0gKHN0eWxlcywgc2VsZWN0b3JzPzogYW55KSA9PiB7XG4gIGlmICghc2VsZWN0b3JzKSB7XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYCR7c3R5bGVzfSR7c2VsZWN0b3JzLnJlZHVjZSgoYWNjLCB7IHNlbGVjdG9yLCBzZWxlY3RvcldyYXBwZXIsIHN0eWxlIH0pID0+IHtcbiAgICAgIGlmIChzdHlsZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJhc2UgPSBgJHtzZWxlY3Rvcn17JHtzdHlsZX19YDtcbiAgICAgIGNvbnN0IHdyYXBwZWQgPSBzZWxlY3RvcldyYXBwZXIgPyBgJHtzZWxlY3RvcldyYXBwZXJ9eyR7YmFzZX19YCA6IGJhc2U7XG4gICAgICByZXR1cm4gYCR7YWNjfSR7d3JhcHBlZH1gO1xuICAgIH0sICcnKX1gO1xuICB9XG59O1xuXG4vKipcbiAqIENvbWJpbmVzIGFsbCBpbnN0YW5jZSBzdHlsZU1hcCBzZWxlY3RvcnMgKyBzdHlsZSBpbmZvIGludG8gb25lIGNzc1RleHRcbiAqIHVzZWQgZm9yIHVwZGF0aW5nIENTU1N0eWxlU2hlZXRzIG9yIDxzdHlsZT4gdGFncy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdEluc3RhbmNlU3R5bGVzID0gKGluc3RhbmNlU3R5bGVzTWFwKSA9PiB7XG4gIGxldCBzdHlsZXMgPSAnJztcblxuICAvLyBTb3J0IGtleXMgaW4gYWxwaGFiZXRpY2FsIG9yZGVyIHRvIGhlbHAgYXZvaWQgaHlkcmF0aW9uIG1pc21hdGNoIGVycm9yc1xuICBbLi4uaW5zdGFuY2VTdHlsZXNNYXAuZW50cmllcygpXVxuICAgIC5maWx0ZXIoKFtrZXksIF9dKSA9PiBrZXkgIT09ICdzZScgJiYga2V5ICE9PSAnc3AnKVxuICAgIC5zb3J0KChhLCBiKSA9PiBiWzBdIC0gYVswXSlcbiAgICAuZm9yRWFjaCgoW18sIHNlbGVjdG9yc10pID0+IHtcbiAgICAgIHN0eWxlcyA9IHBhcnNlU2VsZWN0b3JzKHN0eWxlcywgc2VsZWN0b3JzKTtcbiAgICB9KTtcblxuICAvLyBBbHdheXMgcGFyc2UgYHNlYCBhbmQgYHNwYCBzZWxlY3RvcnMgbGFzdCB0byBoZWxwIGF2b2lkIGh5ZHJhdGlvbiBtaXNtYXRjaCBlcnJvcnNcbiAgLy8gYW5kIGVuc3VyZSB0aGV5IG92ZXJyaWRlIGFueSBjb21wb25lbnQgbGV2ZWwgZHluYW1pYyBzdHlsZXMuXG4gIHN0eWxlcyA9IGAke3N0eWxlc30ke3BhcnNlU2VsZWN0b3JzKCcnLCBpbnN0YW5jZVN0eWxlc01hcC5nZXQoJ3NlJykpfSR7cGFyc2VTZWxlY3RvcnMoXG4gICAgJycsXG4gICAgaW5zdGFuY2VTdHlsZXNNYXAuZ2V0KCdzcCcpXG4gICl9YDtcbiAgcmV0dXJuIHN0eWxlcztcbn07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDIxIC0gMjAyMiBWYWFkaW4gTHRkLlxuICogVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuICovXG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGhpZGRlbiBkaXJlY3RseSB3aXRoIGBkaXNwbGF5OiBub25lYCBvciBgdmlzaWJpbGl0eTogaGlkZGVuYCxcbiAqIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBUaGUgbWV0aG9kIGRvZXNuJ3QgdHJhdmVyc2UgdGhlIGVsZW1lbnQncyBhbmNlc3RvcnMsIGl0IG9ubHkgY2hlY2tzIGZvciB0aGUgQ1NTIHByb3BlcnRpZXNcbiAqIHNldCBkaXJlY3RseSB0byBvciBpbmhlcml0ZWQgYnkgdGhlIGVsZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIGlzRWxlbWVudEhpZGRlbkRpcmVjdGx5KGVsZW1lbnQpIHtcbiAgLy8gQ2hlY2sgaW5saW5lIHN0eWxlIGZpcnN0IHRvIHNhdmUgYSByZS1mbG93LlxuICBjb25zdCBzdHlsZSA9IGVsZW1lbnQuc3R5bGU7XG4gIGlmIChcbiAgICBzdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJyB8fFxuICAgIHN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fFxuICAgIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWF1dG9mb2N1cy1pZ25vcmUnKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICBpZiAoY29tcHV0ZWRTdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJyB8fCBjb21wdXRlZFN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5vcm1hbGl6ZWQgZWxlbWVudCB0YWJpbmRleC4gSWYgbm90IGZvY3VzYWJsZSwgcmV0dXJucyAtMS5cbiAqIEl0IGNoZWNrcyBmb3IgdGhlIGF0dHJpYnV0ZSBcInRhYmluZGV4XCIgaW5zdGVhZCBvZiB0aGUgZWxlbWVudCBwcm9wZXJ0eVxuICogYHRhYkluZGV4YCBzaW5jZSBicm93c2VycyBhc3NpZ24gZGlmZmVyZW50IHZhbHVlcyB0byBpdC5cbiAqIGUuZy4gaW4gRmlyZWZveCBgPGRpdiBjb250ZW50ZWRpdGFibGU+YCBoYXMgYHRhYkluZGV4ID0gLTFgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVUYWJJbmRleChlbGVtZW50KSB7XG4gIGlmICghaXNFbGVtZW50Rm9jdXNhYmxlKGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgY29uc3QgdGFiSW5kZXggPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSB8fCAwO1xuICByZXR1cm4gTnVtYmVyKHRhYkluZGV4KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGlmIGVsZW1lbnQgYGFgIGhhcyBsb3dlciB0YWIgb3JkZXIgY29tcGFyZWQgdG8gZWxlbWVudCBgYmBcbiAqIChib3RoIGVsZW1lbnRzIGFyZSBhc3N1bWVkIHRvIGJlIGZvY3VzYWJsZSBhbmQgdGFiYmFibGUpLlxuICogRWxlbWVudHMgd2l0aCB0YWJpbmRleCA9IDAgaGF2ZSBsb3dlciB0YWIgb3JkZXIgY29tcGFyZWQgdG8gZWxlbWVudHNcbiAqIHdpdGggdGFiaW5kZXggPiAwLlxuICogSWYgYm90aCBoYXZlIHNhbWUgdGFiaW5kZXgsIGl0IHJldHVybnMgZmFsc2UuXG4gKi9cbmZ1bmN0aW9uIGhhc0xvd2VyVGFiT3JkZXIoYSwgYikge1xuICAvLyBOb3JtYWxpemUgdGFiSW5kZXhlc1xuICAvLyBlLmcuIGluIEZpcmVmb3ggYDxkaXYgY29udGVudGVkaXRhYmxlPmAgaGFzIGB0YWJJbmRleCA9IC0xYFxuICBjb25zdCBhdGkgPSBNYXRoLm1heChhLnRhYkluZGV4LCAwKTtcbiAgY29uc3QgYnRpID0gTWF0aC5tYXgoYi50YWJJbmRleCwgMCk7XG4gIHJldHVybiBhdGkgPT09IDAgfHwgYnRpID09PSAwID8gYnRpID4gYXRpIDogYXRpID4gYnRpO1xufVxuXG4vKipcbiAqIE1lcmdlIHNvcnQgaXRlcmF0b3IsIG1lcmdlcyB0aGUgdHdvIGFycmF5cyBpbnRvIG9uZSwgc29ydGVkIGJ5IHRhYmluZGV4LlxuICovXG5mdW5jdGlvbiBtZXJnZVNvcnRCeVRhYkluZGV4KGxlZnQsIHJpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICB3aGlsZSAobGVmdC5sZW5ndGggPiAwICYmIHJpZ2h0Lmxlbmd0aCA+IDApIHtcbiAgICBpZiAoaGFzTG93ZXJUYWJPcmRlcihsZWZ0WzBdLCByaWdodFswXSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHJpZ2h0LnNoaWZ0KCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaChsZWZ0LnNoaWZ0KCkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQuY29uY2F0KGxlZnQsIHJpZ2h0KTtcbn1cblxuLyoqIFNvcnRzIGFuIGFycmF5IG9mIGVsZW1lbnRzIGJ5IHRhYmluZGV4LiBSZXR1cm5zIGEgbmV3IGFycmF5LiAqL1xuZnVuY3Rpb24gc29ydEVsZW1lbnRzQnlUYWJJbmRleChlbGVtZW50cykge1xuICAvLyBJbXBsZW1lbnQgYSBtZXJnZSBzb3J0IGFzIEFycmF5LnByb3RvdHlwZS5zb3J0IGRvZXMgYSBub24tc3RhYmxlIHNvcnRcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc29ydFxuICBjb25zdCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7XG4gIGlmIChsZW4gPCAyKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG4gIGNvbnN0IHBpdm90ID0gTWF0aC5jZWlsKGxlbiAvIDIpO1xuICBjb25zdCBsZWZ0ID0gc29ydEVsZW1lbnRzQnlUYWJJbmRleChlbGVtZW50cy5zbGljZSgwLCBwaXZvdCkpO1xuICBjb25zdCByaWdodCA9IHNvcnRFbGVtZW50c0J5VGFiSW5kZXgoZWxlbWVudHMuc2xpY2UocGl2b3QpKTtcblxuICByZXR1cm4gbWVyZ2VTb3J0QnlUYWJJbmRleChsZWZ0LCByaWdodCk7XG59XG5cbi8qKlxuICogU2VhcmNoZXMgZm9yIG5vZGVzIHRoYXQgYXJlIHRhYmJhYmxlIGFuZCBhZGRzIHRoZW0gdG8gdGhlIGByZXN1bHRgIGFycmF5LlxuICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICovXG5mdW5jdGlvbiBjb2xsZWN0Rm9jdXNhYmxlTm9kZXMobm9kZSwgcmVzdWx0KSB7XG4gIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fCBpc0VsZW1lbnRIaWRkZW5EaXJlY3RseShub2RlKSkge1xuICAgIC8vIERvbid0IHRyYXZlcnNlIGNoaWxkcmVuIGlmIHRoZSBub2RlIGlzIG5vdCBhbiBIVE1MIGVsZW1lbnQgb3Igbm90IHZpc2libGUuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZWxlbWVudCA9IG5vZGU7XG4gIGNvbnN0IHRhYkluZGV4ID0gbm9ybWFsaXplVGFiSW5kZXgoZWxlbWVudCk7XG4gIGxldCBuZWVkc1NvcnQgPSB0YWJJbmRleCA+IDA7XG4gIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICBsZXQgY2hpbGRyZW4gPSBbXTtcbiAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09PSAnc2xvdCcpIHtcbiAgICBjaGlsZHJlbiA9IGVsZW1lbnQuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVXNlIHNoYWRvdyByb290IGlmIHBvc3NpYmxlLCB3aWxsIGNoZWNrIGZvciBkaXN0cmlidXRlZCBub2Rlcy5cbiAgICBjaGlsZHJlbiA9IChlbGVtZW50LnNoYWRvd1Jvb3QgfHwgZWxlbWVudCkuY2hpbGRyZW47XG4gIH1cbiAgWy4uLmNoaWxkcmVuXS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIC8vIEVuc3VyZSBtZXRob2QgaXMgYWx3YXlzIGludm9rZWQgdG8gY29sbGVjdCBmb2N1c2FibGUgY2hpbGRyZW4uXG4gICAgbmVlZHNTb3J0ID0gY29sbGVjdEZvY3VzYWJsZU5vZGVzKGNoaWxkLCByZXN1bHQpIHx8IG5lZWRzU29ydDtcbiAgfSk7XG4gIHJldHVybiBuZWVkc1NvcnQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGhpZGRlbiwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEFuIGVsZW1lbnQgaXMgdHJlYXRlZCBhcyBoaWRkZW4gd2hlbiBhbnkgb2YgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiAtIHRoZSBlbGVtZW50IGl0c2VsZiBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyBoYXMgYGRpc3BsYXk6IG5vbmVgLlxuICogLSB0aGUgZWxlbWVudCBoYXMgb3IgaW5oZXJpdHMgYHZpc2liaWxpdHk6IGhpZGRlbmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnRIaWRkZW4oZWxlbWVudCkge1xuICAvLyBgb2Zmc2V0UGFyZW50YCBpcyBgbnVsbGAgd2hlbiB0aGUgZWxlbWVudCBpdHNlbGZcbiAgLy8gb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaXMgaGlkZGVuIHdpdGggYGRpc3BsYXk6IG5vbmVgLlxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnQvb2Zmc2V0UGFyZW50XG4gIGlmIChlbGVtZW50Lm9mZnNldFBhcmVudCA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGlzRWxlbWVudEhpZGRlbkRpcmVjdGx5KGVsZW1lbnQpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBmb2N1c2FibGUsIG90aGVyd2lzZSBmYWxzZS5cbiAqXG4gKiBUaGUgbGlzdCBvZiBmb2N1c2FibGUgZWxlbWVudHMgaXMgdGFrZW4gZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjAwMTk0LzQyMjg3MDMuXG4gKiBIb3dldmVyLCB0aGVyZSBpc24ndCBhIGRlZmluaXRlIGxpc3QsIGl0J3MgdXAgdG8gdGhlIGJyb3dzZXIuXG4gKiBUaGUgb25seSBzdGFuZGFyZCB3ZSBoYXZlIGlzIERPTSBMZXZlbCAyIEhUTUwgaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLUhUTUwvaHRtbC5odG1sLFxuICogYWNjb3JkaW5nIHRvIHdoaWNoIHRoZSBvbmx5IGVsZW1lbnRzIHRoYXQgaGF2ZSBhIGBmb2N1cygpYCBtZXRob2QgYXJlOlxuICogLSBIVE1MSW5wdXRFbGVtZW50XG4gKiAtIEhUTUxTZWxlY3RFbGVtZW50XG4gKiAtIEhUTUxUZXh0QXJlYUVsZW1lbnRcbiAqIC0gSFRNTEFuY2hvckVsZW1lbnRcbiAqXG4gKiBUaGlzIG5vdGFibHkgb21pdHMgSFRNTEJ1dHRvbkVsZW1lbnQgYW5kIEhUTUxBcmVhRWxlbWVudC5cbiAqIFJlZmVycmluZyB0byB0aGVzZSB0ZXN0cyB3aXRoIHRhYmJhYmxlcyBpbiBkaWZmZXJlbnQgYnJvd3NlcnNcbiAqIGh0dHA6Ly9hbGx5anMuaW8vZGF0YS10YWJsZXMvZm9jdXNhYmxlLmh0bWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudEZvY3VzYWJsZShlbGVtZW50KSB7XG4gIC8vIFRoZSBlbGVtZW50IGNhbm5vdCBiZSBmb2N1c2VkIGlmIGl0cyBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBpcyBzZXQgdG8gYC0xYC5cbiAgaWYgKGVsZW1lbnQubWF0Y2hlcygnW3RhYmluZGV4PVwiLTFcIl0nKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVsZW1lbnRzIHRoYXQgY2Fubm90IGJlIGZvY3VzZWQgaWYgdGhleSBoYXZlIGEgYGRpc2FibGVkYCBhdHRyaWJ1dGUuXG4gIGlmIChlbGVtZW50Lm1hdGNoZXMoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBidXR0b24sIG9iamVjdCcpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQubWF0Y2hlcygnOm5vdChbZGlzYWJsZWRdKScpO1xuICB9XG5cbiAgLy8gRWxlbWVudHMgdGhhdCBjYW4gYmUgZm9jdXNlZCBldmVuIGlmIHRoZXkgaGF2ZSBhIGBkaXNhYmxlZGAgYXR0cmlidXRlLlxuICByZXR1cm4gZWxlbWVudC5tYXRjaGVzKCdhW2hyZWZdLCBhcmVhW2hyZWZdLCBpZnJhbWUsIFt0YWJpbmRleF0sIFtjb250ZW50RWRpdGFibGVdJyk7XG59XG5cbi8qKiBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgZm9jdXNlZCwgZmFsc2Ugb3RoZXJ3aXNlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudEZvY3VzZWQoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5nZXRSb290Tm9kZSgpLmFjdGl2ZUVsZW1lbnQgPT09IGVsZW1lbnQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHRhYi1vcmRlcmVkIGFycmF5IG9mIGZvY3VzYWJsZSBlbGVtZW50cyBmb3IgYSByb290IGVsZW1lbnQuXG4gKiBUaGUgcmVzdWx0aW5nIGFycmF5IHdpbGwgaW5jbHVkZSB0aGUgcm9vdCBlbGVtZW50IGlmIGl0IGlzIGZvY3VzYWJsZS5cbiAqXG4gKiBUaGUgbWV0aG9kIHRyYXZlcnNlcyBub2RlcyBpbiBzaGFkb3cgRE9NIHRyZWVzIHRvbyBpZiBhbnkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb2N1c2FibGVFbGVtZW50cyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gW107XG4gIGNvbnN0IG5lZWRzU29ydEJ5VGFiSW5kZXggPSBjb2xsZWN0Rm9jdXNhYmxlTm9kZXMoZWxlbWVudCwgZm9jdXNhYmxlRWxlbWVudHMpO1xuICAvLyBJZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgZWxlbWVudCB3aXRoIHRhYmluZGV4ID4gMCwgd2UgbmVlZCB0byBzb3J0XG4gIC8vIHRoZSBmaW5hbCBhcnJheSBieSB0YWJpbmRleC5cdTIyNDhcbiAgaWYgKG5lZWRzU29ydEJ5VGFiSW5kZXgpIHtcbiAgICByZXR1cm4gc29ydEVsZW1lbnRzQnlUYWJJbmRleChmb2N1c2FibGVFbGVtZW50cyk7XG4gIH1cbiAgcmV0dXJuIGZvY3VzYWJsZUVsZW1lbnRzO1xufVxuIiwgImltcG9ydCB7IGlzU2VydmVyIH0gZnJvbSAnbGl0LWh0bWwvaXMtc2VydmVyLmpzJztcblxuZXhwb3J0IGNvbnN0IGlzU3NyID0gKCkgPT4gaXNTZXJ2ZXI7XG5cbmV4cG9ydCBjb25zdCBpc0Jyb3dzZXJMaWtlID0gKCkgPT4gZ2xvYmFsVGhpcyAhPT0gdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgaXNWYWxpZFJlc2l6ZUNvbnRyb2xsZXIgPSAocmVzaXplQ29udHJvbGxlcikgPT5cbiAgcmVzaXplQ29udHJvbGxlcj8uWydfb2JzZXJ2ZXInXT8uWyd1bm9ic2VydmUnXTtcblxuaW50ZXJmYWNlIE5hdmlnYXRvclVBRGF0YSB7XG4gIGJyYW5kczogQXJyYXk8eyBicmFuZDogc3RyaW5nOyB2ZXJzaW9uOiBzdHJpbmcgfT47XG4gIG1vYmlsZTogYm9vbGVhbjtcbiAgcGxhdGZvcm06IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXRmb3JtKCk6IHN0cmluZyB7XG4gIGNvbnN0IHVhRGF0YSA9IChuYXZpZ2F0b3IgYXMgYW55KS51c2VyQWdlbnREYXRhIGFzIE5hdmlnYXRvclVBRGF0YSB8IHVuZGVmaW5lZDtcblxuICBpZiAodWFEYXRhPy5wbGF0Zm9ybSkge1xuICAgIHJldHVybiB1YURhdGEucGxhdGZvcm07XG4gIH1cblxuICByZXR1cm4gbmF2aWdhdG9yLnBsYXRmb3JtO1xufVxuXG5leHBvcnQgY29uc3QgaXNQbGF0Zm9ybSA9IChwbGF0Zm9ybTogJ0lPUycpID0+IHtcbiAgaWYgKCFpc1NzcigpKSB7XG4gICAgaWYgKHBsYXRmb3JtID09PSAnSU9TJykge1xuICAgICAgcmV0dXJuIC9pUChob25lfGFkfG9kKXxpT1MvLnRlc3QoZ2V0UGxhdGZvcm0oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuIiwgImNvbnN0IG5hdGl2ZVZhbGlkaXR5U3RhdGVzOiBBcnJheTxrZXlvZiBWYWxpZGl0eVN0YXRlPiA9IFtcbiAgJ2JhZElucHV0JyxcbiAgJ2N1c3RvbUVycm9yJyxcbiAgJ3BhdHRlcm5NaXNtYXRjaCcsXG4gICdyYW5nZU92ZXJmbG93JyxcbiAgJ3JhbmdlVW5kZXJmbG93JyxcbiAgJ3N0ZXBNaXNtYXRjaCcsXG4gICd0b29Mb25nJyxcbiAgJ3Rvb1Nob3J0JyxcbiAgJ3R5cGVNaXNtYXRjaCcsXG4gICd2YWx1ZU1pc3NpbmcnLFxuXTtcblxuLyoqXG4gKiBDdXN0b20gdmFsaWRhdG9yIGZvciB0aGUgYEBvcGVuLXdjL2Zvcm0tY29udHJvbGAgdGhhdCBsZWFucyBvbiBhbiBpbnRlcm5hbFxuICogaW5wdXQgdG8gZm9yd2FyZCBuYXRpdmUgdmFsaWRhdGlvblxuICovXG5leHBvcnQgY29uc3QgaW5uZXJJbnB1dFZhbGlkYXRvcnMgPSBuYXRpdmVWYWxpZGl0eVN0YXRlcy5tYXAoKGtleSkgPT4gKHtcbiAga2V5LFxuICBpc1ZhbGlkKGluc3RhbmNlOiBIVE1MRWxlbWVudCAmIHsgdmFsaWRhdGlvblRhcmdldDogSFRNTElucHV0RWxlbWVudCB9KSB7XG4gICAgaWYgKGluc3RhbmNlLnZhbGlkYXRpb25UYXJnZXQpIHtcbiAgICAgIHJldHVybiAhaW5zdGFuY2UudmFsaWRhdGlvblRhcmdldC52YWxpZGl0eVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbn0pKTtcbiIsICIvKipcbiAqIE5PVEU6XG4gKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGltcGxlbWVudGF0aW9uIGZvciBhbiBleHRyZW1lbHkgc2ltcGxlIGFuZCBsaWdodHdlaWdodFxuICogcmVhY3RpdmUgc29sdXRpb24gbG9vc2VseSBiYXNlZCBvbiBzb2xpZC1qcyBzdHlsZSBzaWduYWxzLiBJdCBlbmFibGVzIGJhc2ljXG4gKiByZWFjdGl2ZSBzdWJzY3JpcHRpb25zIGFuZCBjb21wdXRlZCBzaWduYWxzIG9mIG9uZSBvciBtb3JlIG90aGVyIGRlcGVuZGVuY3kgc2lnbmFscy5cbiAqXG4gKiBJbiBpdHMgY3VycmVudCBzdGF0ZSwgaXQgaXMgbm90IHBlcmZlY3QgYW5kIGRvZXMgbm90IGhhbmRsZSBhbGwgZWRnZSBjYXNlcy4gRm9yXG4gKiBleGFtcGxlLCBpZiB5b3UgaGF2ZSBtdWx0aXBsZSBsYXllcnMgb2YgY29tcHV0ZWQgc3RhdGUgd2l0aCBhIHNpbmdsZSBkZXBlbmRlbmN5XG4gKiBzaGFyZWQgbW9yZSB0aGFuIG9uY2UgYWNyb3NzIHRob3NlIGxheWVycywgdGhlIHNhbWUgY2hhbmdlIHdpbGwgcG90ZW50aWFsbHkgYmVcbiAqIGVtaXR0ZWQgdHdpY2UuIE91ciBleHBlY3RhdGlvbiBhdG0sIGlzIHRoYXQgd2Ugd29uJ3QgZW5jb3VudGVyIHRob3NlIHNjZW5hcmlvc1xuICogaW4gdGhpcyBsaWJyYXJ5LlxuICovXG5cbi8qKiBVbnN1YnNjcmliZXMgZnJvbSB2YWx1ZSB1cGRhdGVzLiAqL1xuZXhwb3J0IHR5cGUgVW5zdWJzY3JpYmVyID0gKCkgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBTaWduYWw8VD4ge1xuICAvKiogR2V0IHRoZSBjdXJyZW50IHZhbHVlICovXG4gIGdldCgpOiBUO1xuXG4gIC8qKiBTZXQgcmVhY3RpdmUgdmFsdWUgKi9cbiAgc2V0KHZhbHVlOiBUKTtcblxuICAvKiogVXBkYXRlIHJlYWN0aXZlIHZhbHVlIHVzaW5nIGNhbGxiYWNrICovXG4gIHVwZGF0ZShmbjogKHZhbHVlOiBUKSA9PiBUKTtcblxuICAvKiogU3Vic2NyaWJlIHRvIHJlYWN0aXZlIHZhbHVlIGNoYW5nZXMgKi9cbiAgc3Vic2NyaWJlKGZuOiAodmFsdWU6IFQsIHVuc3Vic2NyaWJlPzogVW5zdWJzY3JpYmVyKSA9PiB2b2lkKTogVW5zdWJzY3JpYmVyO1xufVxuXG5jb25zdCBjb250ZXh0ID0gW107XG5cbmZ1bmN0aW9uIF9zdWJzY3JpYmUocnVubmluZywgc3Vic2NyaXB0aW9ucykge1xuICBzdWJzY3JpcHRpb25zLmFkZChydW5uaW5nKTtcbiAgcnVubmluZy5kZXBlbmRlbmNpZXMuYWRkKHN1YnNjcmlwdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjbGVhbnVwKHJ1bm5pbmcpIHtcbiAgZm9yIChjb25zdCBkZXAgb2YgcnVubmluZy5kZXBlbmRlbmNpZXMpIHtcbiAgICBkZXAuZGVsZXRlKHJ1bm5pbmcpO1xuICB9XG4gIHJ1bm5pbmcuZGVwZW5kZW5jaWVzLmNsZWFyKCk7XG59XG5cbi8qKiBDcmVhdGUgYSBzaWduYWwgdGhhdCBhbGxvd3MgYm90aCB1cGRhdGluZyBhbmQgcmVhZGluZyBieSBnZXR0ZXIgb3Igc3Vic2NyaXB0aW9uLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hbDxUPih2YWx1ZT86IFQpIHtcbiAgY29uc3Qgc3Vic2NyaXB0aW9ucyA9IG5ldyBTZXQ8YW55PigpO1xuXG4gIGNvbnN0IGdldCA9ICgpOiBUID0+IHtcbiAgICBjb25zdCBydW5uaW5nID0gY29udGV4dFtjb250ZXh0Lmxlbmd0aCAtIDFdO1xuICAgIGlmIChydW5uaW5nKSBfc3Vic2NyaWJlKHJ1bm5pbmcsIHN1YnNjcmlwdGlvbnMpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCBzZXQgPSAobmV4dFZhbHVlOiBUKSA9PiB7XG4gICAgdmFsdWUgPSBuZXh0VmFsdWU7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgWy4uLnN1YnNjcmlwdGlvbnNdKSB7XG4gICAgICBzdWIuZXhlY3V0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGUgPSAoZm46ICh2YWx1ZTogVCkgPT4gVCkgPT4ge1xuICAgIHZhbHVlID0gZm4odmFsdWUpO1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIFsuLi5zdWJzY3JpcHRpb25zXSkge1xuICAgICAgc3ViLmV4ZWN1dGUoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVGhpcyBpcyBlc3NlbnRpYWxseSBhIHVzZUVmZmVjdCBtYXNxdWVyYWRpbmcgYXMgYSBzdWJzY3JpYmUgZnVuY3Rpb25cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGZuOiAodmFsdWU6IFQsIHVuc3Vic2NyaWJlPzogVW5zdWJzY3JpYmVyKSA9PiB2b2lkKTogVW5zdWJzY3JpYmVyID0+IHtcbiAgICBjb25zdCBleGVjdXRlID0gKCkgPT4ge1xuICAgICAgY2xlYW51cChydW5uaW5nKTtcbiAgICAgIGNvbnRleHQucHVzaChydW5uaW5nKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKHJ1bm5pbmcuZ2V0KCksICgpID0+IGNsZWFudXAocnVubmluZykpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgY29udGV4dC5wb3AoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoKSA9PiBjbGVhbnVwKHJ1bm5pbmcpO1xuICAgIH07XG5cbiAgICBjb25zdCBydW5uaW5nID0ge1xuICAgICAgZXhlY3V0ZSxcbiAgICAgIGRlcGVuZGVuY2llczogbmV3IFNldCgpLFxuICAgICAgZ2V0LFxuICAgIH07XG5cbiAgICByZXR1cm4gZXhlY3V0ZSgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0LFxuICAgIHNldCxcbiAgICB1cGRhdGUsXG4gICAgc3Vic2NyaWJlLFxuICB9IGFzIFNpZ25hbDxUPjtcbn1cblxuLyoqIE9uZSBvciBtb3JlIGBTaWduYWxgcyAqL1xudHlwZSBTaWduYWxzID0gU2lnbmFsPGFueT4gfCBbU2lnbmFsPGFueT4sIC4uLkFycmF5PFNpZ25hbDxhbnk+Pl0gfCBTaWduYWw8YW55PltdO1xuXG4vKiogT25lIG9yIG1vcmUgdmFsdWVzIGZyb20gc2lnbmFscyAqL1xuZXhwb3J0IHR5cGUgU2lnbmFsVmFsdWVzPFQ+ID0gVCBleHRlbmRzIFNpZ25hbDxpbmZlciBVPlxuICA/IFVcbiAgOiB7IFtLIGluIGtleW9mIFRdOiBUW0tdIGV4dGVuZHMgU2lnbmFsPGluZmVyIFU+ID8gVSA6IG5ldmVyIH07XG5cbi8qKiBDcmVhdGUgYSBuZXcgY29tcHV0ZWQgc2lnbmFsIGZyb20gb25lIG9yIG1vcmUgc2lnbmFsIGRlcGVuZGVuY2llcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkPEQgZXh0ZW5kcyBTaWduYWxzLCBUPihcbiAgZGVwZW5kZW5jaWVzOiBELFxuICBmbjogKHZhbHVlczogU2lnbmFsVmFsdWVzPEQ+KSA9PiBUXG4pOiBTaWduYWw8VD47XG5cbi8qKiBDcmVhdGUgYSBuZXcgY29tcHV0ZWQgc2lnbmFsIGZyb20gb25lIG9yIG1vcmUgc2lnbmFsIGRlcGVuZGVuY2llcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkPEQgZXh0ZW5kcyBTaWduYWxzLCBUPihcbiAgZGVwZW5kZW5jaWVzOiBELFxuICBmbj86ICh2YWx1ZXM6IFNpZ25hbFZhbHVlczxEPiwgc2V0PzogKHZhbHVlOiBhbnkpID0+IHZvaWQpID0+IFRcbik6IFNpZ25hbDx1bmtub3duPjtcblxuLyoqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCBzaWduYWwgZnJvbSBvbmUgb3IgbW9yZSBzaWduYWwgZGVwZW5kZW5jaWVzICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQ8RCBleHRlbmRzIFNpZ25hbHM+KFxuICBkZXBlbmRlbmNpZXM6IEQsXG4gIGZuPzogKC4uLnBhcmFtczogYW55W10pID0+IGFueVxuKTogU2lnbmFsPGFueT4ge1xuICBjb25zdCBhdXRvID0gZm4ubGVuZ3RoIDwgMjtcbiAgY29uc3QgcyA9IHNpZ25hbDxhbnk+KCk7XG4gIGNvbnN0IHNpbmdsZSA9ICFBcnJheS5pc0FycmF5KGRlcGVuZGVuY2llcyk7XG4gIGNvbnN0IGRlcHMgPSBzaW5nbGVcbiAgICA/IChbZGVwZW5kZW5jaWVzXSBhcyBTaWduYWw8U2lnbmFsVmFsdWVzPEQ+PltdKVxuICAgIDogKGRlcGVuZGVuY2llcyBhcyBTaWduYWw8U2lnbmFsVmFsdWVzPEQ+PltdKTtcblxuICAvLyBXZSBvbmx5IG5lZWQgdG8gc3Vic2NyaWJlIHRvIHRoZSBmaXJzdCBpdGVtIGJlY2F1c2VcbiAgLy8gdGhlIGFjdCBvZiByZXRyaWV2aW5nIGFsbCBkZXBlbmRlbmN5IHZhbHVlcyB3aWxsIGFkZCB0aGVtXG4gIC8vIHRvIHRoZSBjb250ZXh0IHN0YWNrIGFwcHJvcHJpYXRlbHlcbiAgY29uc3QgZGVwID0gZGVwc1swXTtcbiAgZGVwLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgY29uc3QgdmFsdWVzID0gZGVwcy5tYXAoKGRlcCkgPT4gZGVwLmdldCgpKTtcbiAgICBjb25zdCByZXQgPSBzaW5nbGUgPyB2YWx1ZXNbMF0gOiAodmFsdWVzIGFzIFNpZ25hbFZhbHVlczxEPik7XG4gICAgaWYgKGF1dG8pIHtcbiAgICAgIHMuc2V0KGZuKHJldCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbihyZXQsIHMuc2V0KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcztcbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSB3Yy9uby1zZWxmLWNsYXNzICovXG5pbXBvcnQgeyBjb25maWcsIHNlbGVjdG9yRmFjdG9yeSB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzLCBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IE10ZUVsZW1lbnQgfSBmcm9tICcuL210ZS5lbGVtZW50JztcbmltcG9ydCB7IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9IGZyb20gJy4uL2F0dHJpYnV0ZS1jb252ZXJ0ZXInO1xuXG5leHBvcnQgdHlwZSBTcGFjaW5nVmFsdWUgPVxuICB8IG51bWJlclxuICB8IHN0cmluZ1xuICB8IDFcbiAgfCAyXG4gIHwgM1xuICB8IDRcbiAgfCA1XG4gIHwgNlxuICB8ICdub25lJ1xuICB8ICd4cydcbiAgfCAnc20nXG4gIHwgJ21kJ1xuICB8ICdsZydcbiAgfCAneGwnXG4gIHwgJ3h4bCdcbiAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFVuaXRWYWx1ZSA9IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgQm9yZGVyUmFkaXVzVmFsdWUgPVxuICB8ICdub25lJ1xuICB8ICd4cydcbiAgfCAnc20nXG4gIHwgJ21kJ1xuICB8ICdsZydcbiAgfCAneGwnXG4gIHwgJ3h4bCdcbiAgfCAnZnVsbCdcbiAgfCBzdHJpbmdcbiAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIEJvcmRlcldpZHRoVmFsdWUgPSAnbm9uZScgfCAnc20nIHwgJ21kJyB8ICdsZycgfCBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIE9wYWNpdHlWYWx1ZSA9XG4gIHwgJ3h4eHMnXG4gIHwgJ3h4cydcbiAgfCAneHMnXG4gIHwgJ3NtJ1xuICB8ICdtZCdcbiAgfCAnbGcnXG4gIHwgJ3hsJ1xuICB8ICd4eGwnXG4gIHwgc3RyaW5nXG4gIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBSZXNwb25zaXZlVmFsdWU8VD4gPSBUIHwgUGFydGlhbDxSZWNvcmQ8J3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJywgVD4+O1xuXG5jb25zdCBkZWZhdWx0Qm9yZGVyRmFjdG9yeSA9ICh3aWR0aD8sIGNvbG9yPywgc3R5bGU/KSA9PlxuICBgJHtzdHlsZSA/PyAnc29saWQnfSAke1xuICAgIGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kcyhbXG4gICAgICB7IHByb3A6ICdib3JkZXJXaWR0aCcsIHZhbHVlOiBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKHdpZHRoID8/ICcxcHgnKSB9LFxuICAgIF0pWzBdPy52YWx1ZVxuICB9ICR7ZG90U3RyaW5nVG9Db25maWdWYWx1ZShjb2xvcikgPz8gY29uZmlnLmNvbG9yLmJvcmRlcjF9YDtcblxuZXhwb3J0IGNsYXNzIE10ZUNvbnRlbnRCYXNlIGV4dGVuZHMgTXRlRWxlbWVudCB7XG4gIC8vIC0tIFNwYWNpbmcgUHJvcHMgLS1cblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tcmlnaHRgIGFuZCBgbWFyZ2luLWxlZnRgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBteD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXRvcGAgYW5kIGBtYXJnaW4tYm90dG9tYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbXk/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi10b3BgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbXQ/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi1yaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtcj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLWJvdHRvbWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtYj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLWxlZnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWw/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmdgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1yaWdodGAgYW5kIGBwYWRkaW5nLWxlZnRgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBweD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy10b3BgIGFuZCBgcGFkZGluZy1ib3R0b21gIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBweT86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy10b3BgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcHQ/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctcmlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcHI/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctYm90dG9tYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHBiPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLWxlZnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcGw/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvLyAtLSBQb3NpdGlvbmluZyBQcm9wcyAtLVxuXG4gIC8qKiBTZXRzIHRoZSBgZGlzcGxheWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBkPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnYmxvY2snXG4gICAgfCAnaW5saW5lLWJsb2NrJ1xuICAgIHwgJ2ZsZXgnXG4gICAgfCAnaW5saW5lLWZsZXgnXG4gICAgfCAnZ3JpZCdcbiAgICB8ICdpbmxpbmUtZ3JpZCdcbiAgICB8ICdpbmxpbmUnXG4gICAgfCAnbGlzdC1pdGVtJ1xuICAgIHwgJ25vbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24taXRlbXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2Jhc2VsaW5lJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGFsaWduLWl0ZW1zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGFsaWduSXRlbXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdiYXNlbGluZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1zZWxmYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGFsaWduU2VsZj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2F1dG8nXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnYmFzZWxpbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24tY29udGVudGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBhbGlnbkNvbnRlbnQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIHwgJ3NwYWNlLWFyb3VuZCdcbiAgICB8ICdzcGFjZS1ldmVubHknXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1jb250ZW50YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGo/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3BhY2UtYmV0d2VlbidcbiAgICB8ICdzcGFjZS1hcm91bmQnXG4gICAgfCAnc3BhY2UtZXZlbmx5J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGp1c3RpZnktY29udGVudGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBqdXN0aWZ5Q29udGVudD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIHwgJ3NwYWNlLWFyb3VuZCdcbiAgICB8ICdzcGFjZS1ldmVubHknXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1pdGVtc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBqdXN0aWZ5SXRlbXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2xlZnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdyaWdodCdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LXNlbGZgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkganVzdGlmeVNlbGY/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ2xlZnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdyaWdodCdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGZsZXg6IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1kaXJlY3Rpb25gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZGlyZWN0aW9uPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdyb3cnIHwgJ3Jvd1JldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uUmV2ZXJzZScgfCAnaW5pdGlhbCcgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtZGlyZWN0aW9uYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhEaXJlY3Rpb24/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3JvdycgfCAncm93UmV2ZXJzZScgfCAnY29sdW1uJyB8ICdjb2x1bW5SZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1iYXNpc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBiYXNpcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtYmFzaXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleEJhc2lzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1ncm93YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyb3c/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWdyb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleEdyb3c/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXNocmlua2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBzaHJpbms/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXNocmlua2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4U2hyaW5rPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC13cmFwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIHdyYXA/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ25vd3JhcCcgfCAnd3JhcCcgfCAnd3JhcC1yZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC13cmFwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhXcmFwPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdub3dyYXAnIHwgJ3dyYXAnIHwgJ3dyYXAtcmV2ZXJzZScgfCAnaW5pdGlhbCcgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYG9yZGVyYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIG9yZGVyPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ2FwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdhcD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgY29sdW1uLWdhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBjb2x1bW5HYXA/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHJvdy1nYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcm93R2FwPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWNvbHVtbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQ29sdW1uPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1yb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZFJvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXV0by1mbG93YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRBdXRvRmxvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAncm93JyB8ICdjb2x1bW4nIHwgJ2RlbnNlJyB8ICdyb3cgZGVuc2UnIHwgJ2NvbHVtbiBkZW5zZSdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXV0by1jb2x1bW5zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRBdXRvQ29sdW1ucz86IFJlc3BvbnNpdmVWYWx1ZTwnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWF1dG8tcm93c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQXV0b1Jvd3M/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgJ2F1dG8nIHwgJ21heC1jb250ZW50JyB8ICdtaW4tY29udGVudCcgfCBVbml0VmFsdWVcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtdGVtcGxhdGUtY29sdW1uc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBncmlkVGVtcGxhdGVDb2x1bW5zPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgICdub25lJyB8ICdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXRlbXBsYXRlLXJvd3NgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZFRlbXBsYXRlUm93cz86IFJlc3BvbnNpdmVWYWx1ZTwnbm9uZScgfCAnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXRlbXBsYXRlLWFyZWFzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRUZW1wbGF0ZUFyZWFzPzogUmVzcG9uc2l2ZVZhbHVlPCdub25lJyB8IHN0cmluZyB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWFyZWFgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZEFyZWE/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLy8gLS0gU2l6aW5nIFByb3BzIC0tXG5cbiAgLyoqIFNldHMgdGhlIGB3aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSB3PzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXgtd2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWF4dz86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWluLXdpZHRoYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1pbnc/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGhlaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBoPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXgtaGVpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1heGg/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1pbi1oZWlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWluaD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYmFja2dyb3VuZGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gQ2FuIGJlIHBhc3NlZCBkb3Qgbm90YXRlZCB0aGVtZSBjb25maWcgc3RyaW5ncyB0byBzZWxlY3QgY29sb3IgdG9rZW4gdmFsdWVzLiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBiZz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGNvbG9yYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiBDYW4gYmUgcGFzc2VkIGRvdCBub3RhdGVkIHRoZW1lIGNvbmZpZyBzdHJpbmdzIHRvIHNlbGVjdCBjb2xvciB0b2tlbiB2YWx1ZXMuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItY29sb3JgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuIENhbiBiZSBwYXNzZWQgZG90IG5vdGF0ZWQgdGhlbWUgY29uZmlnIHN0cmluZ3MgdG8gc2VsZWN0IGNvbG9yIHRva2VuIHZhbHVlcy4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYm9yZGVyQ29sb3I/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItd2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlcldpZHRoPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlcldpZHRoVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXN0eWxlYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBib3JkZXJTdHlsZT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAnc29saWQnIHwgJ2RvdHRlZCcgfCAnZGFzaGVkJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXI/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJUb3A/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItcmlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclJpZ2h0PzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tPzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWxlZnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckxlZnQ/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItcmFkaXVzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcFJpZ2h0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3AtbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcExlZnRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNgIGFuZCBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJUb3BSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNgIGFuZCBgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyUmlnaHRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNgIGFuZCBgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJCb3R0b21SYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c2AgYW5kIGBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckxlZnRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbGluZS1oZWlnaHRgIGNzcyBwcm9wZXJ0eSAgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgbGluZUhlaWdodD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCBudW1iZXJcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZvbnQtd2VpZ2h0YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZm9udFdlaWdodD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2xpZ2h0J1xuICAgIHwgJ3JlZ3VsYXInXG4gICAgfCAnbWVkaXVtJ1xuICAgIHwgJ2xpZ2h0ZXInXG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ2JvbGQnXG4gICAgfCAnYm9sZGVyJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgICB8ICcxMDAnXG4gICAgfCAnMjAwJ1xuICAgIHwgJzMwMCdcbiAgICB8ICc0MDAnXG4gICAgfCAnNTAwJ1xuICAgIHwgJzYwMCdcbiAgICB8ICc3MDAnXG4gICAgfCAnODAwJ1xuICAgIHwgJzkwMCdcbiAgPjtcblxuICAvKiogU2hvcnRoYW5kIGZvciBgZm9udFdlaWdodGAuIFNldHMgdGhlIGBmb250LXdlaWdodGAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZ3PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnbGlnaHQnXG4gICAgfCAncmVndWxhcidcbiAgICB8ICdtZWRpdW0nXG4gICAgfCAnbGlnaHRlcidcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnYm9sZCdcbiAgICB8ICdib2xkZXInXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICAgIHwgJzEwMCdcbiAgICB8ICcyMDAnXG4gICAgfCAnMzAwJ1xuICAgIHwgJzQwMCdcbiAgICB8ICc1MDAnXG4gICAgfCAnNjAwJ1xuICAgIHwgJzcwMCdcbiAgICB8ICc4MDAnXG4gICAgfCAnOTAwJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZm9udC1zaXplYCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZm9udFNpemU/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgVW5pdFZhbHVlIHwgJ3h4cycgfCAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnXG4gID47XG5cbiAgLyoqIFNob3J0aGFuZCBmb3IgYGZvbnRTaXplYC4gU2V0cyB0aGUgYGZvbnQtc2l6ZWAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8IFVuaXRWYWx1ZSB8ICd4eHMnIHwgJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZm9udC1mYW1pbHlgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmb250RmFtaWx5PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdzYW5zJyB8ICdzZXJpZicgfCAnbW9ubycgfCBzdHJpbmdcbiAgPjtcblxuICAvKiogU2hvcnRoYW5kIGZvciBgb3BhY2l0eWAuIFNldHMgdGhlIGBvcGFjaXR5YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgb3BhY2l0eT86IFJlc3BvbnNpdmVWYWx1ZTxPcGFjaXR5VmFsdWU+O1xuXG4gIC8qKiBBcHBsaWVzIE1vcnRhciBzdGFuZGFyZCBib3gtc2hhZG93IHZhbHVlcyAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBlbGV2YXRpb24/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgJ3owJyB8ICd6MScgfCAnejInIHwgJ3ozJyB8ICd6NCdcbiAgPjtcblxuICAvKiogQWRqdXN0IHRoaXMgZWxlbWVudHMgYmxlZWQgaWYgaXQgaXMgYSBkaXJlY3QgZGVzY2VuZGFudCBvZiBhbiBtdGUtbGF5b3V0LWNvbnRhaW5lciAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGxheW91dEJsZWVkPzogJ2Z1bGwnIHwgJ3BvcG91dCcgfCAnY29udGVudCcgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhpcyBlbGVtZW50IGFzIGEgc3ViZ3JpZCB3aGVuIHNldC4gYGRpc3BsYXlgIGlzIHNldCB0byBgZ3JpZGAgYW5kIGBncmlkLXRlbXBsYXRlLWNvbHVtbnNgIGlzIHNldCB0byBgc3ViZ3JpZGAuXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgc3ViZ3JpZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIHNlbGVjdG9yIHRvIGhhdmUgaW5zdGFuY2Ugc3R5bGVzIHRhcmdldCBhIHNwZWNpZmljIGlubmVyIGVsZW1lbnQuXG4gICAqIFVzZWZ1bCBpbiBzcGVjaWZpYyBzY2VuYXJpb3Mgd2hlcmUgdGhlIHByaW1hcnkgY29udGVudC9zbG90IHdyYXBwZWQgd2l0aGluIHRoZSB0ZW1wbGF0ZVxuICAgKiBsaWtlIHdpdGggdGhlIG1vZGFsIGNvbXBvbmVudC5cbiAgICovXG4gIHByb3RlY3RlZCBjb250ZW50U3R5bGVTZWxlY3RvclJvb3QgPSAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0JztcblxuICAvLyBMaXN0IG9mIHByb3BzIGZvciBvcHRpbWFsIHN0eWxlIHVwZGF0ZSBjaGVja2luZ1xuICBwcml2YXRlIHN0YXRpYyBjb250ZW50UHJvcHMgPSBuZXcgU2V0KFtcbiAgICAnbScsXG4gICAgJ214JyxcbiAgICAnbXknLFxuICAgICdtdCcsXG4gICAgJ21yJyxcbiAgICAnbWInLFxuICAgICdtbCcsXG4gICAgJ3AnLFxuICAgICdweCcsXG4gICAgJ3B5JyxcbiAgICAncHQnLFxuICAgICdwcicsXG4gICAgJ3BiJyxcbiAgICAncGwnLFxuICAgICdkJyxcbiAgICAnYScsXG4gICAgJ2onLFxuICAgICdiYXNpcycsXG4gICAgJ3NocmluaycsXG4gICAgJ2dyb3cnLFxuICAgICdkaXJlY3Rpb24nLFxuICAgICd3cmFwJyxcbiAgICAnYWxpZ25JdGVtcycsXG4gICAgJ2FsaWduU2VsZicsXG4gICAgJ2FsaWduQ29udGVudCcsXG4gICAgJ2p1c3RpZnlDb250ZW50JyxcbiAgICAnanVzdGlmeUl0ZW1zJyxcbiAgICAnanVzdGlmeVNlbGYnLFxuICAgICdmbGV4JyxcbiAgICAnZmxleERpcmVjdGlvbicsXG4gICAgJ2ZsZXhCYXNpcycsXG4gICAgJ2ZsZXhTaHJpbmsnLFxuICAgICdmbGV4R3JvdycsXG4gICAgJ2ZsZXhXcmFwJyxcbiAgICAnb3JkZXInLFxuICAgICdnYXAnLFxuICAgICdjb2x1bW5HYXAnLFxuICAgICdyb3dHYXAnLFxuICAgICdncmlkQ29sdW1uJyxcbiAgICAnZ3JpZFJvdycsXG4gICAgJ2dyaWRBdXRvRmxvdycsXG4gICAgJ2dyaWRBdXRvQ29sdW1ucycsXG4gICAgJ2dyaWRBdXRvUm93cycsXG4gICAgJ2dyaWRUZW1wbGF0ZUNvbHVtbnMnLFxuICAgICdncmlkVGVtcGxhdGVSb3dzJyxcbiAgICAnZ3JpZFRlbXBsYXRlQXJlYXMnLFxuICAgICdncmlkQXJlYScsXG4gICAgJ3cnLFxuICAgICdtYXh3JyxcbiAgICAnbWludycsXG4gICAgJ2gnLFxuICAgICdtYXhoJyxcbiAgICAnbWluaCcsXG4gICAgJ2JnJyxcbiAgICAnYycsXG4gICAgJ2JvcmRlckNvbG9yJyxcbiAgICAnYm9yZGVyV2lkdGgnLFxuICAgICdib3JkZXJTdHlsZScsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvcmRlclRvcCcsXG4gICAgJ2JvcmRlclJpZ2h0JyxcbiAgICAnYm9yZGVyQm90dG9tJyxcbiAgICAnYm9yZGVyTGVmdCcsXG4gICAgJ2JvcmRlclJhZGl1cycsXG4gICAgJ2JvcmRlclRvcFJpZ2h0UmFkaXVzJyxcbiAgICAnYm9yZGVyVG9wTGVmdFJhZGl1cycsXG4gICAgJ2JvcmRlckJvdHRvbVJpZ2h0UmFkaXVzJyxcbiAgICAnYm9yZGVyQm90dG9tTGVmdFJhZGl1cycsXG4gICAgJ2JvcmRlclRvcFJhZGl1cycsXG4gICAgJ2JvcmRlclJpZ2h0UmFkaXVzJyxcbiAgICAnYm9yZGVyQm90dG9tUmFkaXVzJyxcbiAgICAnYm9yZGVyTGVmdFJhZGl1cycsXG4gICAgJ2xpbmVIZWlnaHQnLFxuICAgICdmb250V2VpZ2h0JyxcbiAgICAnZncnLFxuICAgICdmb250U2l6ZScsXG4gICAgJ2ZzJyxcbiAgICAnZm9udEZhbWlseScsXG4gICAgJ29wYWNpdHknLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdsYXlvdXRCbGVlZCcsXG4gICAgJ3N1YmdyaWQnLFxuICBdKTtcblxuICBwcm90ZWN0ZWQgdXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzOiBNYXA8c3RyaW5nLCBhbnk+KSB7XG4gICAgc3VwZXIudXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKTtcblxuICAgIC8vIENoZWNrIGlmIGFueSBjb250ZW50IHByb3AgaGFzIGNoYW5nZWQgdG8gZGV0ZXJtaW5lIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBpbnN0YW5jZSBzdHlsZXNcbiAgICBsZXQgc2hvdWxkVXBkYXRlU3R5bGVzID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgY2hhbmdlZFByb3BzLmtleXMoKSkge1xuICAgICAgaWYgKE10ZUNvbnRlbnRCYXNlLmNvbnRlbnRQcm9wcy5oYXMoa2V5KSkge1xuICAgICAgICBzaG91bGRVcGRhdGVTdHlsZXMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkVXBkYXRlU3R5bGVzKSB7XG4gICAgICAvLyBEb3VibGUgdGhlIGA6aG9zdGAgc2VsZWN0b3IgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgYmV5b25kIG1vc3QgY29tcG9uZW50IGxldmVsIHN0eWxlcyBieSBkZWZhdWx0XG4gICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoJ2NvbnRlbnQtYmFzZScsIHNlbGVjdG9yRmFjdG9yeSh0aGlzLmNvbnRlbnRTdHlsZVNlbGVjdG9yUm9vdCksIHtcbiAgICAgICAgLy8gU3BhY2luZ1xuICAgICAgICBtOiB0aGlzLm0sXG4gICAgICAgIG14OiB0aGlzLm14LFxuICAgICAgICBteTogdGhpcy5teSxcbiAgICAgICAgbXQ6IHRoaXMubXQsXG4gICAgICAgIG1yOiB0aGlzLm1yLFxuICAgICAgICBtYjogdGhpcy5tYixcbiAgICAgICAgbWw6IHRoaXMubWwsXG4gICAgICAgIHA6IHRoaXMucCxcbiAgICAgICAgcHg6IHRoaXMucHgsXG4gICAgICAgIHB5OiB0aGlzLnB5LFxuICAgICAgICBwdDogdGhpcy5wdCxcbiAgICAgICAgcHI6IHRoaXMucHIsXG4gICAgICAgIHBiOiB0aGlzLnBiLFxuICAgICAgICBwbDogdGhpcy5wbCxcbiAgICAgICAgLy8gUG9zaXRpb25pbmdcbiAgICAgICAgZDogdGhpcy5zdWJncmlkID8gJ2dyaWQnIDogdGhpcy5kLFxuICAgICAgICBhbGlnbkl0ZW1zOiB0aGlzLmEgPz8gdGhpcy5hbGlnbkl0ZW1zLFxuICAgICAgICBhbGlnblNlbGY6IHRoaXMuYWxpZ25TZWxmLFxuICAgICAgICBhbGlnbkNvbnRlbnQ6IHRoaXMuYWxpZ25Db250ZW50LFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogdGhpcy5qID8/IHRoaXMuanVzdGlmeUNvbnRlbnQsXG4gICAgICAgIGp1c3RpZnlJdGVtczogdGhpcy5qdXN0aWZ5SXRlbXMsXG4gICAgICAgIGp1c3RpZnlTZWxmOiB0aGlzLmp1c3RpZnlTZWxmLFxuICAgICAgICBmbGV4OiB0aGlzLmZsZXgsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uID8/IHRoaXMuZmxleERpcmVjdGlvbixcbiAgICAgICAgZmxleEJhc2lzOiB0aGlzLmJhc2lzID8/IHRoaXMuZmxleEJhc2lzLFxuICAgICAgICBmbGV4U2hyaW5rOiB0aGlzLnNocmluayA/PyB0aGlzLmZsZXhTaHJpbmssXG4gICAgICAgIGZsZXhHcm93OiB0aGlzLmdyb3cgPz8gdGhpcy5mbGV4R3JvdyxcbiAgICAgICAgZmxleFdyYXA6IHRoaXMud3JhcCA/PyB0aGlzLmZsZXhXcmFwLFxuICAgICAgICBvcmRlcjogdGhpcy5vcmRlcixcbiAgICAgICAgZ2FwOiB0aGlzLmdhcCxcbiAgICAgICAgY29sdW1uR2FwOiB0aGlzLmNvbHVtbkdhcCxcbiAgICAgICAgcm93R2FwOiB0aGlzLnJvd0dhcCxcbiAgICAgICAgZ3JpZENvbHVtbjogdGhpcy5sYXlvdXRCbGVlZCA/IHRoaXMubGF5b3V0QmxlZWQgOiB0aGlzLmdyaWRDb2x1bW4sXG4gICAgICAgIGdyaWRSb3c6IHRoaXMuZ3JpZFJvdyxcbiAgICAgICAgZ3JpZEF1dG9GbG93OiB0aGlzLmdyaWRBdXRvRmxvdyxcbiAgICAgICAgZ3JpZEF1dG9Db2x1bW5zOiB0aGlzLmdyaWRBdXRvQ29sdW1ucyxcbiAgICAgICAgZ3JpZEF1dG9Sb3dzOiB0aGlzLmdyaWRBdXRvUm93cyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogdGhpcy5zdWJncmlkID8gJ3N1YmdyaWQnIDogdGhpcy5ncmlkVGVtcGxhdGVDb2x1bW5zLFxuICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiB0aGlzLmdyaWRUZW1wbGF0ZVJvd3MsXG4gICAgICAgIGdyaWRUZW1wbGF0ZUFyZWFzOiB0aGlzLmdyaWRUZW1wbGF0ZUFyZWFzLFxuICAgICAgICBncmlkQXJlYTogdGhpcy5ncmlkQXJlYSxcbiAgICAgICAgLy8gU2l6aW5nXG4gICAgICAgIHc6IHRoaXMudyxcbiAgICAgICAgbWF4dzogdGhpcy5tYXh3LFxuICAgICAgICBtaW53OiB0aGlzLm1pbncsXG4gICAgICAgIGg6IHRoaXMuaCxcbiAgICAgICAgbWF4aDogdGhpcy5tYXhoLFxuICAgICAgICBtaW5oOiB0aGlzLm1pbmgsXG4gICAgICAgIC8vIENvbG9yc1xuICAgICAgICBiZzogdGhpcy5iZyxcbiAgICAgICAgYzogdGhpcy5jLFxuICAgICAgICAvLyBCb3JkZXJzXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGlzLmJvcmRlckNvbG9yLFxuICAgICAgICBib3JkZXJXaWR0aDogdGhpcy5ib3JkZXJXaWR0aCxcbiAgICAgICAgYm9yZGVyU3R5bGU6IHRoaXMuYm9yZGVyU3R5bGUsXG4gICAgICAgIGJvcmRlcjogdGhpcy5ib3JkZXJcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJUb3A6IHRoaXMuYm9yZGVyVG9wXG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm9yZGVyUmlnaHQ6IHRoaXMuYm9yZGVyUmlnaHRcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJMZWZ0OiB0aGlzLmJvcmRlckxlZnRcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJCb3R0b206IHRoaXMuYm9yZGVyQm90dG9tXG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgLy8gQm9yZGVyIFJhZGl1c1xuICAgICAgICBib3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyUmFkaXVzLFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlclRvcFJpZ2h0UmFkaXVzID8/IHRoaXMuYm9yZGVyVG9wUmFkaXVzID8/IHRoaXMuYm9yZGVyUmlnaHRSYWRpdXMsXG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJUb3BMZWZ0UmFkaXVzID8/IHRoaXMuYm9yZGVyVG9wUmFkaXVzID8/IHRoaXMuYm9yZGVyTGVmdFJhZGl1cyxcbiAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA/PyB0aGlzLmJvcmRlckJvdHRvbVJhZGl1cyA/PyB0aGlzLmJvcmRlclJpZ2h0UmFkaXVzLFxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOlxuICAgICAgICAgIHRoaXMuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA/PyB0aGlzLmJvcmRlckJvdHRvbVJhZGl1cyA/PyB0aGlzLmJvcmRlckxlZnRSYWRpdXMsXG4gICAgICAgIC8vIEZvbnRzXG4gICAgICAgIGxpbmVIZWlnaHQ6IHRoaXMubGluZUhlaWdodCxcbiAgICAgICAgZm9udFdlaWdodDogdGhpcy5mdyA/PyB0aGlzLmZvbnRXZWlnaHQsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLmZzID8/IHRoaXMuZm9udFNpemUsXG4gICAgICAgIGZvbnRGYW1pbHk6IHRoaXMuZm9udEZhbWlseSxcbiAgICAgICAgLy8gT3BhY2l0eVxuICAgICAgICBvcGFjaXR5OiB0aGlzLm9wYWNpdHksXG4gICAgICAgIC8vIEVsZXZhdGlvblxuICAgICAgICBlbGV2YXRpb246IHRoaXMuZWxldmF0aW9uLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgZGVmYXVsdENvbnZlcnRlciB9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBjb25zdCBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgPSB7XG4gIGZyb21BdHRyaWJ1dGU6ICh2YWx1ZSwgdHlwZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAodmFsdWU/LlswXSA9PT0gJ3snKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLmZyb21BdHRyaWJ1dGUodmFsdWUsIE9iamVjdCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLmZyb21BdHRyaWJ1dGUodmFsdWUsIHR5cGUpO1xuICB9LFxuICB0b0F0dHJpYnV0ZTogKHZhbHVlLCB0eXBlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLnRvQXR0cmlidXRlKHZhbHVlLCBPYmplY3QpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdENvbnZlcnRlci50b0F0dHJpYnV0ZSh2YWx1ZSwgdHlwZSk7XG4gIH0sXG59O1xuIiwgImltcG9ydCB7IERpcmVjdGl2ZVJlc3VsdCB9IGZyb20gJ2xpdC9kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHsgdW5zYWZlU1ZHLCBVbnNhZmVTVkdEaXJlY3RpdmUgfSBmcm9tICdsaXQvZGlyZWN0aXZlcy91bnNhZmUtc3ZnLmpzJztcblxuZXhwb3J0IGNvbnN0IGhlYkxvZ29TdmdDb250ZW50czogRGlyZWN0aXZlUmVzdWx0PHR5cGVvZiBVbnNhZmVTVkdEaXJlY3RpdmU+ID0gdW5zYWZlU1ZHKFxuICBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiBpZD1cIkxheWVyXzFcIiB4PVwiMFwiIHk9XCIwXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgNTM2LjI3IDE4Ni4yNFwiPjxzdHlsZT4uc3Qwe2ZpbGw6I2UxMjUxYn0uc3Qxe2ZpbGw6I2ZmZn08L3N0eWxlPjxnIGlkPVwiX3gzMV8tSEVCX01BSU5fTE9HT18wMDAwMDA5NjA0MzQwNDIwNjg2MTg4MDg3MDAwMDAwNDgxMzI0MDkzODk0Njg1NTM1NV9cIj48cGF0aCBkPVwiTTkzLjEyIDE4Ni4yNEM0MS42OSAxODYuMjQgMCAxNDQuNTUgMCA5My4xMlM0MS42OSAwIDkzLjEyIDBoMzUwLjAzYzUxLjQzIDAgOTMuMTIgNDEuNjkgOTMuMTIgOTMuMTJzLTQxLjY5IDkzLjEyLTkzLjEyIDkzLjEySDkzLjEyelwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNOTMuMTIgMTc0LjE5Yy00NC43NiAwLTgxLjA1LTM2LjI5LTgxLjA1LTgxLjA1czM2LjI5LTgxLjA1IDgxLjA1LTgxLjA1aDM1MC4wM2M0NC43NiAwIDgxLjA1IDM2LjI5IDgxLjA1IDgxLjA1cy0zNi4yOSA4MS4wNS04MS4wNSA4MS4wNUg5My4xMnpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwibTQ0NC45NCAyNC4xMS0zNTMuNjQuMDJjLTM3LjA3IDAtNjcuMiAzMC45NS02Ny4xNiA2OS4wNyAwIDM3LjkzIDMwLjE2IDY4Ljg4IDY3LjE2IDY4Ljg4bDM1My42My0uMDdjMzcuMS0uMDMgNjcuMTUtMzAuODkgNjcuMi02OC44NS0uMDQtMzguMi0zMC4wOS02OS4wNS02Ny4xOS02OS4wNXpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTIyNC4yMSAxMzIuMjNoODguMWwuNzYtMTIuOThoLTU2LjE4di0xNC44NGg0NC44MVY4OS4zM2gtNDQuODFWNzMuMjVsNTguOTItLjAxIDEuMTUtMTkuMjloLTk3LjR6TTEzMi40NiA1My45NXYzNS4zOEgxMDguNlY1My45NUg3MS4yN2w0LjY1IDc4LjI4aDMyLjY4di0yNy44MmgyMy44NnYyNy44MmgzMi42OGw0LjY1LTc4LjI4ek00NDguNTIgOTcuMDJjOS45LTIuODMgMTYuNDktOC41OSAxNi40OS0yMC42Ny4wMy0xMy44Mi0xMS4wNi0yMi40LTI1LjI5LTIyLjRoLTczLjI4bDQuNjUgNzguMjloNjQuMDZjMjcuOTggMCAyNi4zOS0xOC44IDI2LjM5LTE4LjggMC03Ljk2LTUuMzMtMTQuNjEtMTMuMDItMTYuNDJ6bS0zMS4wMiAyMi4yMmgtMTMuNzF2LTE0LjgzaDEzLjIyYzcuMjMgMCAxMS4wOSAyLjMxIDExLjA5IDcuNDguMDEgNC45NC0zLjQ5IDcuMzUtMTAuNiA3LjM1em0xLjA2LTI5LjkxaC0xNC43N1Y3My4yNWgxNC4yNWM3Ljg1IDAgMTIuMDMgMi41IDEyLjAzIDguMTEgMCA1LjM1LTMuNzkgNy45Ny0xMS41MSA3Ljk3ek0xODIuNzYgODkuMzNsLjkgMTUuMDhoMjIuMDNsLjktMTUuMDh6TTMyOS42NCA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwiTTUzMC4zNCAxNzIuNzdjMC0yLjQ2LTEuNDYtMy41NC00LjQtMy41NGgtNC43NHYxMi40NGgxLjg4di01LjM5aDIuMTdsMy4yOCA1LjM5aDIuMTFsLTMuNTQtNS40OGMxLjg0LS4yMiAzLjI0LTEuMTkgMy4yNC0zLjQyem0tNy4yNSAxLjkydi0zLjg2aDIuNTdjMS4zMSAwIDIuNzEuMjkgMi43MSAxLjgzIDAgMS45Mi0xLjQzIDIuMDMtMy4wMyAyLjAzaC0yLjI1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNNTI1LjM3IDE2NC42N2MtNS45MyAwLTEwLjk2IDQuNTctMTAuOTYgMTAuNzYgMCA2LjI0IDUuMDIgMTAuODEgMTAuOTYgMTAuODEgNS44OCAwIDEwLjktNC41NyAxMC45LTEwLjgxIDAtNi4yLTUuMDItMTAuNzYtMTAuOS0xMC43NnptMCAxOS43OGMtNC45MyAwLTguNzktMy44My04Ljc5LTkuMDIgMC01LjExIDMuODUtOC45NiA4Ljc5LTguOTYgNC44OCAwIDguNzMgMy44NSA4LjczIDguOTYgMCA1LjE5LTMuODUgOS4wMi04LjczIDkuMDJ6XCIgY2xhc3M9XCJzdDBcIi8+PC9nPjwvc3ZnPmBcbik7XG5cbmV4cG9ydCBjb25zdCBoZWJMb2dvV2hpdGVDb3B5cmlnaHRTdmdDb250ZW50czogRGlyZWN0aXZlUmVzdWx0PHR5cGVvZiBVbnNhZmVTVkdEaXJlY3RpdmU+ID1cbiAgdW5zYWZlU1ZHKFxuICAgIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIGlkPVwiTGF5ZXJfMVwiIHg9XCIwXCIgeT1cIjBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MzYuMjcgMTg2LjI0XCI+PHN0eWxlPi5zdDB7ZmlsbDojZTEyNTFifS5zdDF7ZmlsbDojZmZmfTwvc3R5bGU+PGcgaWQ9XCJfeDMxXy1IRUJfTUFJTl9MT0dPXzAwMDAwMDk2MDQzNDA0MjA2ODYxODgwODcwMDAwMDA0ODEzMjQwOTM4OTQ2ODU1MzU1X1wiPjxwYXRoIGQ9XCJNOTMuMTIgMTg2LjI0QzQxLjY5IDE4Ni4yNCAwIDE0NC41NSAwIDkzLjEyUzQxLjY5IDAgOTMuMTIgMGgzNTAuMDNjNTEuNDMgMCA5My4xMiA0MS42OSA5My4xMiA5My4xMnMtNDEuNjkgOTMuMTItOTMuMTIgOTMuMTJIOTMuMTJ6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk05My4xMiAxNzQuMTljLTQ0Ljc2IDAtODEuMDUtMzYuMjktODEuMDUtODEuMDVzMzYuMjktODEuMDUgODEuMDUtODEuMDVoMzUwLjAzYzQ0Ljc2IDAgODEuMDUgMzYuMjkgODEuMDUgODEuMDVzLTM2LjI5IDgxLjA1LTgxLjA1IDgxLjA1SDkzLjEyelwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJtNDQ0Ljk0IDI0LjExLTM1My42NC4wMmMtMzcuMDcgMC02Ny4yIDMwLjk1LTY3LjE2IDY5LjA3IDAgMzcuOTMgMzAuMTYgNjguODggNjcuMTYgNjguODhsMzUzLjYzLS4wN2MzNy4xLS4wMyA2Ny4xNS0zMC44OSA2Ny4yLTY4Ljg1LS4wNC0zOC4yLTMwLjA5LTY5LjA1LTY3LjE5LTY5LjA1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNMjI0LjIxIDEzMi4yM2g4OC4xbC43Ni0xMi45OGgtNTYuMTh2LTE0Ljg0aDQ0LjgxVjg5LjMzaC00NC44MVY3My4yNWw1OC45Mi0uMDEgMS4xNS0xOS4yOWgtOTcuNHpNMTMyLjQ2IDUzLjk1djM1LjM4SDEwOC42VjUzLjk1SDcxLjI3bDQuNjUgNzguMjhoMzIuNjh2LTI3LjgyaDIzLjg2djI3LjgyaDMyLjY4bDQuNjUtNzguMjh6TTQ0OC41MiA5Ny4wMmM5LjktMi44MyAxNi40OS04LjU5IDE2LjQ5LTIwLjY3LjAzLTEzLjgyLTExLjA2LTIyLjQtMjUuMjktMjIuNGgtNzMuMjhsNC42NSA3OC4yOWg2NC4wNmMyNy45OCAwIDI2LjM5LTE4LjggMjYuMzktMTguOCAwLTcuOTYtNS4zMy0xNC42MS0xMy4wMi0xNi40MnptLTMxLjAyIDIyLjIyaC0xMy43MXYtMTQuODNoMTMuMjJjNy4yMyAwIDExLjA5IDIuMzEgMTEuMDkgNy40OC4wMSA0Ljk0LTMuNDkgNy4zNS0xMC42IDcuMzV6bTEuMDYtMjkuOTFoLTE0Ljc3VjczLjI1aDE0LjI1YzcuODUgMCAxMi4wMyAyLjUgMTIuMDMgOC4xMSAwIDUuMzUtMy43OSA3Ljk3LTExLjUxIDcuOTd6TTE4Mi43NiA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpNMzI5LjY0IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4ek01MjguMzQgMTcwLjc3YzAtMi40Ni0xLjQ2LTMuNTQtNC40LTMuNTRoLTQuNzR2MTIuNDRoMS44OHYtNS4zOWgyLjE3bDMuMjggNS4zOWgyLjExbC0zLjU0LTUuNDhjMS44NC0uMjIgMy4yNC0xLjE5IDMuMjQtMy40MnptLTcuMjUgMS45MnYtMy44NmgyLjU3YzEuMzEgMCAyLjcxLjI5IDIuNzEgMS44MyAwIDEuOTItMS40MyAyLjAzLTMuMDMgMi4wM2gtMi4yNXpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwiTTUyMy4zNyAxNjIuNjdjLTUuOTMgMC0xMC45NiA0LjU3LTEwLjk2IDEwLjc2IDAgNi4yNCA1LjAyIDEwLjgxIDEwLjk2IDEwLjgxIDUuODggMCAxMC45LTQuNTcgMTAuOS0xMC44MSAwLTYuMi01LjAyLTEwLjc2LTEwLjktMTAuNzZ6bTAgMTkuNzhjLTQuOTMgMC04Ljc5LTMuODMtOC43OS05LjAyIDAtNS4xMSAzLjg1LTguOTYgOC43OS04Ljk2IDQuODggMCA4LjczIDMuODUgOC43MyA4Ljk2IDAgNS4xOS0zLjg1IDkuMDItOC43MyA5LjAyelwiIGNsYXNzPVwic3QxXCIvPjwvZz48L3N2Zz5gXG4gICk7XG5cbmV4cG9ydCBjb25zdCBoZWJMb2dvSW52ZXJzZVN2Z0NvbnRlbnRzOiBEaXJlY3RpdmVSZXN1bHQ8dHlwZW9mIFVuc2FmZVNWR0RpcmVjdGl2ZT4gPSB1bnNhZmVTVkcoXG4gIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIGlkPVwiTGF5ZXJfMVwiIHg9XCIwXCIgeT1cIjBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MzYuMjcgMTg2LjI0XCI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggZD1cIk00NDMuMTUgMEg5My4xMkM0MS42OSAwIDAgNDEuNjkgMCA5My4xMmMwIDUxLjQzIDQxLjY5IDkzLjEyIDkzLjEyIDkzLjEyaDM1MC4wM2M1MS40MyAwIDkzLjEyLTQxLjY5IDkzLjEyLTkzLjEyQzUzNi4yNyA0MS42OSA0OTQuNTggMCA0NDMuMTUgMHptMCAxNzQuMTlIOTMuMTJjLTQ0Ljc2IDAtODEuMDUtMzYuMjktODEuMDUtODEuMDVzMzYuMjktODEuMDUgODEuMDUtODEuMDVoMzUwLjAzYzQ0Ljc2IDAgODEuMDUgMzYuMjkgODEuMDUgODEuMDUuMDEgNDQuNzYtMzYuMjggODEuMDUtODEuMDUgODEuMDV6bS0xMy4wOC05Mi44M2MwIDUuMzYtMy43OSA3Ljk4LTExLjUxIDcuOThoLTE0Ljc3VjczLjI1aDE0LjI1YzcuODQgMCAxMi4wMyAyLjUgMTIuMDMgOC4xMXptLTEuOTYgMzAuNTNjMCA0Ljk0LTMuNSA3LjM2LTEwLjYxIDcuMzZoLTEzLjcxdi0xNC44M2gxMy4yMmM3LjI0LS4wMSAxMS4xIDIuMyAxMS4xIDcuNDd6bTE2LjgzLTg3Ljc4LTM1My42NC4wMmMtMzcuMDcgMC02Ny4yIDMwLjk1LTY3LjE2IDY5LjA3IDAgMzcuOTIgMzAuMTYgNjguODggNjcuMTYgNjguODhsMzUzLjYzLS4wN2MzNy4xLS4wMyA2Ny4xNS0zMC44OSA2Ny4yLTY4Ljg1LS4wNC0zOC4yLTMwLjA5LTY5LjA1LTY3LjE5LTY5LjA1em0tMjc5LjggMTA4LjEyaC0zMi42OHYtMjcuODJIMTA4LjZ2MjcuODJINzUuOTJsLTQuNjUtNzguMjhoMzcuMzN2MzUuMzhoMjMuODZWNTMuOTVoMzcuMzNsLTQuNjUgNzguMjh6bTQwLjU1LTI3LjgyaC0yMi4wNGwtLjktMTUuMDhoMjMuODNsLS44OSAxNS4wOHptMTEwLjEyLTMxLjE3LTU4LjkyLjAxdjE2LjA4aDQ0LjgxdjE1LjA4aC00NC44MXYxNC44M2g1Ni4xOGwtLjc2IDEyLjk5aC04OC4xbC00LjY1LTc4LjI4aDk3LjRsLTEuMTUgMTkuMjl6bTM2Ljc2IDMxLjE3aC0yMi4wNGwtLjktMTUuMDhoMjMuODNsLS44OSAxNS4wOHptMTA4Ljk3IDkuMDNzMS41OSAxOC44LTI2LjM5IDE4LjhoLTY0LjA2bC00LjY1LTc4LjI5aDczLjI4YzE0LjIzIDAgMjUuMzEgOC41OCAyNS4yOSAyMi40IDAgMTIuMDgtNi41OSAxNy44NS0xNi40OSAyMC42NyA3LjY5IDEuODEgMTMuMDIgOC40NiAxMy4wMiAxNi40MnpNNTMwLjM0IDE3Mi43N2MwLTIuNDYtMS40Ni0zLjU0LTQuNC0zLjU0aC00Ljc0djEyLjQ0aDEuODh2LTUuMzloMi4xN2wzLjI4IDUuMzloMi4xMWwtMy41NC01LjQ4YzEuODQtLjIyIDMuMjQtMS4xOSAzLjI0LTMuNDJ6bS03LjI1IDEuOTJ2LTMuODZoMi41N2MxLjMxIDAgMi43MS4yOSAyLjcxIDEuODMgMCAxLjkyLTEuNDMgMi4wMy0zLjAzIDIuMDNoLTIuMjV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk01MjUuMzcgMTY0LjY3Yy01LjkzIDAtMTAuOTYgNC41Ny0xMC45NiAxMC43NiAwIDYuMjQgNS4wMiAxMC44MSAxMC45NiAxMC44MSA1Ljg4IDAgMTAuOS00LjU3IDEwLjktMTAuODEgMC02LjItNS4wMi0xMC43Ni0xMC45LTEwLjc2em0wIDE5Ljc4Yy00LjkzIDAtOC43OS0zLjgzLTguNzktOS4wMiAwLTUuMTEgMy44NS04Ljk2IDguNzktOC45NiA0Ljg4IDAgOC43MyAzLjg1IDguNzMgOC45NiAwIDUuMTktMy44NSA5LjAyLTguNzMgOS4wMnpcIiBjbGFzcz1cInN0MFwiLz48L3N2Zz5gXG4pO1xuIiwgImltcG9ydCB7IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgY2xhc3MgQ2xpY2tPdXRzaWRlQ29udHJvbGxlciB7XG4gIHByaXZhdGUgdGFyZ2V0cyA9IG5ldyBTZXQ8SFRNTEVsZW1lbnQ+KCk7XG4gIHByaXZhdGUgbGlzdGVuaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0ICYgRWxlbWVudCwgcHJpdmF0ZSBjYWxsYmFjazogKCkgPT4gYW55KSB7XG4gICAgdGhpcy5ob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XG5cbiAgICB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSA9IHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBob3N0Q29ubmVjdGVkKCkge31cblxuICBob3N0RGlzY29ubmVjdGVkKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBsaXN0ZW5Gb3JDbGlja3NPdXRzaWRlT2YoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnRhcmdldHMuYWRkKGVsZW1lbnQpO1xuICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gIH1cblxuICBhZGRUYXJnZXQoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnRhcmdldHMuYWRkKGVsZW1lbnQpO1xuICB9XG5cbiAgcmVtb3ZlVGFyZ2V0KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy50YXJnZXRzLmRlbGV0ZShlbGVtZW50KTtcbiAgfVxuXG4gIHN0b3BMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnRhcmdldHMuY2xlYXIoKTtcbiAgfVxuXG4gIGlzTGlzdGVuaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMuc2l6ZSA+IDA7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudDogYW55KSB7XG4gICAgY29uc3Qgc2hvdWxkSWdub3JlID0gZXZlbnQ/LnRhcmdldD8uaGFzQXR0cmlidXRlKCdkYXRhLWlnbm9yZS1vdXRzaWRlLWNsaWNrcycpO1xuICAgIGxldCBzaG91bGRUcmlnZ2VyID0gdHJ1ZTtcbiAgICBjb25zdCB0YXJnZXRzSXQgPSB0aGlzLnRhcmdldHMuZW50cmllcygpO1xuICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRhcmdldHNJdCkge1xuICAgICAgaWYgKGV2ZW50LmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKHRhcmdldFswXSkpIHtcbiAgICAgICAgc2hvdWxkVHJpZ2dlciA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNob3VsZFRyaWdnZXIgJiYgIXNob3VsZElnbm9yZSkge1xuICAgICAgdGhpcy5jYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmICghdGhpcy5saXN0ZW5pbmcpIHtcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5saXN0ZW5pbmcgPSBmYWxzZTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHtcbiAgZ2V0Rm9jdXNhYmxlRWxlbWVudHMsXG4gIGlzRWxlbWVudEZvY3VzZWQsXG4gIG5vcm1hbGl6ZVRhYkluZGV4LFxufSBmcm9tICcuLi91dGlsaXRpZXMvZm9jdXMudXRpbGl0aWVzJztcblxuY29uc3QgaW5zdGFuY2VzID0gW107XG5cbi8qKiBSZXR1cm5zIHRydWUgaWYgYW55IGZvY3VzIHRyYXAgaXMgYWN0aXZlICovXG5leHBvcnQgY29uc3QgaXNGb2N1c1RyYXBBY3RpdmUgPSAoKSA9PiB7XG4gIHJldHVybiBpbnN0YW5jZXMubGVuZ3RoID4gMDtcbn07XG5cbi8qKiBBIGNvbnRyb2xsZXIgZm9yIHRyYXBwaW5nIGZvY3VzIHdpdGhpbiBhIERPTSBub2RlLiovXG5leHBvcnQgY2xhc3MgRm9jdXNUcmFwQ29udHJvbGxlciB7XG4gIHByaXZhdGUgdHJhcE5vZGU/OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQgPSBudWxsO1xuICBwcml2YXRlIHJlc3RvcmVUYXJnZXQ/OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQ7XG5cbiAgLyoqIEFuIGFycmF5IG9mIHRhYi1vcmRlcmVkIGZvY3VzYWJsZSBlbGVtZW50cyBpbnNpZGUgdGhlIHRyYXAgbm9kZS4gKi9cbiAgcHJpdmF0ZSBnZXQgZm9jdXNhYmxlRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIGdldEZvY3VzYWJsZUVsZW1lbnRzKHRoaXMudHJhcE5vZGUpO1xuICB9XG5cbiAgLyoqIFRoZSBpbmRleCBvZiB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIHRyYXAgbm9kZSB0aGF0IGN1cnJlbnRseSBoYXMgZm9jdXMuICovXG4gIHByaXZhdGUgZ2V0IGZvY3VzZWRFbGVtZW50SW5kZXgoKSB7XG4gICAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSB0aGlzLmZvY3VzYWJsZUVsZW1lbnRzO1xuICAgIHJldHVybiBmb2N1c2FibGVFbGVtZW50cz8uaW5kZXhPZihmb2N1c2FibGVFbGVtZW50cz8uZmlsdGVyKGlzRWxlbWVudEZvY3VzZWQpLnBvcCgpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdDogUmVhY3RpdmVDb250cm9sbGVySG9zdCAmIEVsZW1lbnQpIHtcbiAgICB0aGlzLmhvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcbiAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XG4gIH1cblxuICBob3N0Q29ubmVjdGVkKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XG4gIH1cblxuICBob3N0RGlzY29ubmVjdGVkKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGVzIGEgZm9jdXMgdHJhcCBmb3IgYSBET00gbm9kZSB0aGF0IHdpbGwgcHJldmVudCBmb2N1cyBmcm9tIGVzY2FwaW5nIHRoZSBub2RlLlxuICAgKiBUaGUgdHJhcCBjYW4gYmUgZGVhY3RpdmF0ZWQgd2l0aCB0aGUgYC5yZWxlYXNlRm9jdXMoKWAgbWV0aG9kLlxuICAgKlxuICAgKiBJZiBmb2N1cyBpcyBpbml0aWFsbHkgb3V0c2lkZSB0aGUgdHJhcCwgdGhlIG1ldGhvZCB3aWxsIG1vdmUgZm9jdXMgaW5zaWRlLFxuICAgKiBvbiB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgb2YgdGhlIHRyYXAgaW4gdGhlIHRhYiBvcmRlci5cbiAgICogVGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGNhbiBiZSB0aGUgdHJhcCBub2RlIGl0c2VsZiBpZiBpdCBpcyBmb2N1c2FibGVcbiAgICogYW5kIGNvbWVzIGZpcnN0IGluIHRoZSB0YWIgb3JkZXIuXG4gICAqXG4gICAqIElmIHRoZXJlIGFyZSBubyBmb2N1c2FibGUgZWxlbWVudHMsIHRoZSBtZXRob2Qgd2lsbCB0aHJvdyBhbiBleGNlcHRpb25cbiAgICogYW5kIHRoZSB0cmFwIHdpbGwgbm90IGJlIHNldC5cbiAgICpcbiAgICogSWYgYW4gZWxlbWVudCBpcyBwYXNzZWQgdG8gYHJlc3RvcmVGb2N1c09uRG9uZWAgdGhhdCBlbGVtZW50IHdpbGwgYmUgZm9jdXNlZCB1cG9uXG4gICAqIHJlbGVhc2Ugb2YgdGhlIGZvY3VzIHRyYXAuXG4gICAqL1xuICB0cmFwRm9jdXModHJhcE5vZGU6IEVsZW1lbnQgfCBIVE1MRWxlbWVudCwgcmVzdG9yZUZvY3VzT25SZWxlYXNlPzogRWxlbWVudCB8IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy50cmFwTm9kZSA9IHRyYXBOb2RlO1xuICAgIHRoaXMucmVzdG9yZVRhcmdldCA9IHJlc3RvcmVGb2N1c09uUmVsZWFzZSA/PyBudWxsO1xuXG4gICAgaWYgKHRoaXMuZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBBbGxvd3MgdXMgdG8gZm9jdXMgdGhpbmdzIGxpa2UgcG9wb3ZlcnMgaWYgdGhleSBjb250YWluIG5vdCBmb2N1c2FibGUgY2hpbGRyZW5cbiAgICAgIGlmICh0aGlzLnRyYXBOb2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS1mb2N1cy1mYWxsYmFjaycpKSB7XG4gICAgICAgICh0aGlzLnRyYXBOb2RlIGFzIEhUTUxFbGVtZW50KS5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50cmFwTm9kZSA9IG51bGw7XG4gICAgICB9XG4gICAgICAvLyBUT0RPKFJlZWNlKTogRGVjaWRlIGlmIHdlIHdhbnQgdG8gdGhyb3cgZXJyb3Igb3Igd2FybiBhdCBhbGwgaGVyZVxuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFxuICAgICAgLy8gICAnVGhlIHRyYXAgbm9kZSBzaG91bGQgaGF2ZSBhdCBsZWFzdCBvbmUgZm9jdXNhYmxlIGRlc2NlbmRhbnQgb3IgYmUgZm9jdXNhYmxlIGl0c2VsZi4nXG4gICAgICAvLyApO1xuICAgIH1cblxuICAgIGluc3RhbmNlcy5wdXNoKHRoaXMpO1xuXG4gICAgY29uc3QgZWxlbSA9IHRoaXMudHJhcE5vZGU/LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWF1dG9mb2N1c10nKSBhcyBhbnk7XG4gICAgaWYgKGVsZW0gJiYgbm9ybWFsaXplVGFiSW5kZXgoZWxlbSkgIT09IC0xKSB7XG4gICAgICBlbGVtLmZvY3VzKCk7XG4gICAgICBpZiAoZWxlbS5zaG93Rm9jdXNSaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZWxlbS5zaG93Rm9jdXNSaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9jdXNlZEVsZW1lbnRJbmRleCA9PT0gLTEgJiYgdGhpcy5mb2N1c2FibGVFbGVtZW50cz8ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5mb2N1c2FibGVFbGVtZW50c1swXS5mb2N1cygpO1xuICAgICAgaWYgKHRoaXMuZm9jdXNhYmxlRWxlbWVudHNbMF0uc2hvd0ZvY3VzUmluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuZm9jdXNhYmxlRWxlbWVudHNbMF0uc2hvd0ZvY3VzUmluZyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzVHJhcHBpbmdGb2N1cygpIHtcbiAgICByZXR1cm4gdGhpcy50cmFwTm9kZSAhPT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgZm9jdXMgdHJhcCBzZXQgd2l0aCB0aGUgYC50cmFwRm9jdXMoKWAgbWV0aG9kXG4gICAqIHNvIHRoYXQgaXQgYmVjb21lcyBwb3NzaWJsZSB0byB0YWIgb3V0c2lkZSB0aGUgdHJhcCBub2RlLlxuICAgKi9cbiAgcmVsZWFzZUZvY3VzKHByZXZlbnRTY3JvbGwgPSBmYWxzZSkge1xuICAgIHRoaXMudHJhcE5vZGUgPSBudWxsO1xuICAgIGluc3RhbmNlcy5wb3AoKTtcbiAgICAodGhpcy5yZXN0b3JlVGFyZ2V0IGFzIGFueSk/LmZvY3VzPy4oeyBwcmV2ZW50U2Nyb2xsOiBwcmV2ZW50U2Nyb2xsIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgYGtleWRvd25gIGV2ZW50IGhhbmRsZXIgdGhhdCBtYW5hZ2VzIHRhYmJpbmcgbmF2aWdhdGlvbiB3aGVuIHRoZSB0cmFwIGlzIGVuYWJsZWQuXG4gICAqXG4gICAqIC0gTW92ZXMgZm9jdXMgdG8gdGhlIG5leHQgZm9jdXNhYmxlIGVsZW1lbnQgb2YgdGhlIHRyYXAgb24gYFRhYmAgcHJlc3MuXG4gICAqIFdoZW4gbm8gbmV4dCBlbGVtZW50IHRvIGZvY3VzLCB0aGUgbWV0aG9kIG1vdmVzIGZvY3VzIHRvIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC5cbiAgICogLSBNb3ZlcyBmb2N1cyB0byB0aGUgcHJldiBmb2N1c2FibGUgZWxlbWVudCBvZiB0aGUgdHJhcCBvbiBgU2hpZnQrVGFiYCBwcmVzcy5cbiAgICogV2hlbiBubyBwcmV2IGVsZW1lbnQgdG8gZm9jdXMsIHRoZSBtZXRob2QgbW92ZXMgZm9jdXMgdG8gdGhlIGxhc3QgZm9jdXNhYmxlIGVsZW1lbnQuXG4gICAqL1xuICBwcml2YXRlIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmICghdGhpcy50cmFwTm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE9ubHkgaGFuZGxlIGV2ZW50cyBmb3IgdGhlIGxhc3QgaW5zdGFuY2VcbiAgICBpZiAodGhpcyAhPT0gQXJyYXkuZnJvbShpbnN0YW5jZXMpLnBvcCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IGJhY2t3YXJkID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICB0aGlzLmZvY3VzTmV4dEVsZW1lbnQoYmFja3dhcmQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAtIE1vdmVzIGZvY3VzIHRvIHRoZSBuZXh0IGZvY3VzYWJsZSBlbGVtZW50IGlmIGBiYWNrd2FyZCA9PT0gZmFsc2VgLlxuICAgKiBXaGVuIG5vIG5leHQgZWxlbWVudCB0byBmb2N1cywgdGhlIG1ldGhvZCBtb3ZlcyBmb2N1cyB0byB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQuXG4gICAqIC0gTW92ZXMgZm9jdXMgdG8gdGhlIHByZXYgZm9jdXNhYmxlIGVsZW1lbnQgaWYgYGJhY2t3YXJkID09PSB0cnVlYC5cbiAgICogV2hlbiBubyBwcmV2IGVsZW1lbnQgdG8gZm9jdXMgdGhlIG1ldGhvZCBtb3ZlcyBmb2N1cyB0byB0aGUgbGFzdCBmb2N1c2FibGUgZWxlbWVudC5cbiAgICpcbiAgICogSWYgbm8gZm9jdXNhYmxlIGVsZW1lbnRzLCB0aGUgbWV0aG9kIHJldHVybnMgaW1tZWRpYXRlbHkuXG4gICAqL1xuICBwcml2YXRlIGZvY3VzTmV4dEVsZW1lbnQoYmFja3dhcmQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gdGhpcy5mb2N1c2FibGVFbGVtZW50cztcbiAgICBpZiAoZm9jdXNhYmxlRWxlbWVudHM/Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSBiYWNrd2FyZCA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuZm9jdXNlZEVsZW1lbnRJbmRleDtcbiAgICAgIGNvbnN0IG5leHRJbmRleCA9IChmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggKyBjdXJyZW50SW5kZXggKyBzdGVwKSAlIGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aDtcbiAgICAgIGZvY3VzYWJsZUVsZW1lbnRzW25leHRJbmRleF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IFJlYWN0aXZlQ29udHJvbGxlciwgUmVhY3RpdmVDb250cm9sbGVySG9zdCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBTaWduYWwsIGNvbXB1dGVkLCBpc1Nzciwgc2lnbmFsIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IGludGVyZmFjZSBTbG90Q29udHJvbGxlck9wdGlvbnMge1xuICAvKiogTmFtZXMgb2Ygc2xvdHMgdGhhdCBzaG91bGQgdHJpZ2dlciBhIGNvbXBvbmVudCB1cGRhdGUgaWYgY2hhbmdlZCAqL1xuICB1cGRhdGVPbkNoYW5nZT86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY2xhc3MgU2xvdENvbnRyb2xsZXIgaW1wbGVtZW50cyBSZWFjdGl2ZUNvbnRyb2xsZXIge1xuICBwdWJsaWMgc2xvdENoYW5nZSA9IHNpZ25hbDxTZXQ8c3RyaW5nPj4obnVsbCk7XG4gIHB1YmxpYyBvbkNvbm5lY3RlZCA9IHNpZ25hbChmYWxzZSk7XG4gIHB1YmxpYyBjb25uZWN0ZWRDb21wbGV0ZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc3VicyA9IFtdO1xuICBwcml2YXRlIHVwZGF0ZVRyaWdnZXJTbG90cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBob3N0OiBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0ICYgRWxlbWVudCxcbiAgICBwdWJsaWMgb3B0aW9uczogU2xvdENvbnRyb2xsZXJPcHRpb25zID0gbnVsbFxuICApIHtcbiAgICB0aGlzLmhvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZU9uQ2hhbmdlKG9wdGlvbnM/LnVwZGF0ZU9uQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyB3aGVuIG9uZSBvZiB0aGUgc3BlY2lmaWVkIHNsb3RzIGhhcyBjaGFuZ2VkIGFuZCBhZnRlciB0aGUgZmlyc3RVcGRhdGUgYWZ0ZXIgaG9zdENvbm5lY3RlZCAqL1xuICBwdWJsaWMgd2F0Y2hTbG90cyhzbG90czogc3RyaW5nW10gPSBbXSwgeyB1cGRhdGVPbkNvbm5lY3RlZCB9ID0geyB1cGRhdGVPbkNvbm5lY3RlZDogdHJ1ZSB9KSB7XG4gICAgY29uc3QgcmV0dXJuU2lnbmFsID0gc2lnbmFsPFNldDxzdHJpbmc+PigpO1xuICAgIHRoaXMuc3Vicy5wdXNoKFxuICAgICAgY29tcHV0ZWQoXG4gICAgICAgIFt0aGlzLm9uQ29ubmVjdGVkLCB0aGlzLnNsb3RDaGFuZ2VdLFxuICAgICAgICAoW2Nvbm5lY3RlZCwgY2hhbmdlc106IFtib29sZWFuLCBTZXQ8c3RyaW5nPl0sIHNldCkgPT4ge1xuICAgICAgICAgIGlmICh1cGRhdGVPbkNvbm5lY3RlZCAmJiBjb25uZWN0ZWQgJiYgIXRoaXMuY29ubmVjdGVkQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGVkQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgc2V0KG5ldyBTZXQoc2xvdHMpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2hhbmdlcyAmJlxuICAgICAgICAgICAgQXJyYXkuZnJvbShjaGFuZ2VzLmtleXMoKSkuc29tZSgoa2V5KSA9PiBzbG90cy5sZW5ndGggPT09IDAgfHwgc2xvdHMuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNldChjaGFuZ2VzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICkuc3Vic2NyaWJlKChjaGFuZ2VzOiBTZXQ8c3RyaW5nPikgPT4ge1xuICAgICAgICBpZiAoY2hhbmdlcykge1xuICAgICAgICAgIHJldHVyblNpZ25hbC5zZXQoY2hhbmdlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gcmV0dXJuU2lnbmFsIGFzIFNpZ25hbDxTZXQ8c3RyaW5nPj47XG4gIH1cblxuICBwdWJsaWMgY2hlY2soc2xvdE5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBzbG90TmFtZSA9PT0gJ2RlZmF1bHQnID8gdGhpcy5oYXNEZWZhdWx0U2xvdCgpIDogdGhpcy5oYXNOYW1lZFNsb3Qoc2xvdE5hbWUpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZU9uQ2hhbmdlKHNsb3RzOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNsb3RzKSkge1xuICAgICAgc2xvdHMuZm9yRWFjaCgoc2xvdCkgPT4gdGhpcy51cGRhdGVUcmlnZ2VyU2xvdHMuYWRkKHNsb3QpKTtcbiAgICB9IGVsc2UgaWYgKHNsb3RzKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRyaWdnZXJTbG90cy5hZGQoc2xvdHMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFzRGVmYXVsdFNsb3QoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmhvc3QuY2hpbGROb2Rlc10uc29tZSgobm9kZSkgPT4ge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IG5vZGUuVEVYVF9OT0RFICYmIG5vZGUudGV4dENvbnRlbnQ/LnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBub2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBjb25zdCBlbCA9IG5vZGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gSWdub3JlIHZpc3VhbGx5IGhpZGRlbiBlbGVtZW50cyBzaW5jZSB0aGV5IGFyZW4ndCByZW5kZXJlZFxuICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ210ZS12aXN1YWxseS1oaWRkZW4nKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgZG9lc24ndCBoYXZlIGEgc2xvdCBhdHRyaWJ1dGUsIGl0J3MgcGFydCBvZiB0aGUgZGVmYXVsdCBzbG90XG4gICAgICAgIGlmICghZWwuaGFzQXR0cmlidXRlKCdzbG90JykpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhc05hbWVkU2xvdChuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QucXVlcnlTZWxlY3RvcihgOnNjb3BlID4gW3Nsb3Q9XCIke25hbWV9XCJdYCkgIT09IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNsb3RDaGFuZ2UgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2xvdCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MU2xvdEVsZW1lbnQ7XG5cbiAgICAvLyBTZXR1cCBldmVudCBtYXBcbiAgICBjb25zdCBldmVudFNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIC8vIEFkZCBkdXBsaWNhdGUgbWFwcGluZyBmb3Igc2ltcGxpZmllZCBkZWZhdWx0IG5hbWVcbiAgICBpZiAoc2xvdC5uYW1lID09PSAnW2RlZmF1bHRdJyB8fCBzbG90Lm5hbWUgPT09ICcnKSB7XG4gICAgICBldmVudFNldC5hZGQoJ2RlZmF1bHQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnRTZXQuYWRkKHNsb3QubmFtZSk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBzbG90IGNoYW5nZSByZWFjdGl2ZSBldmVudFxuICAgIHRoaXMuc2xvdENoYW5nZS5zZXQoZXZlbnRTZXQpO1xuXG4gICAgLy8gQXV0b21hdGljYWxseSByZXF1ZXN0IGEgY29tcG9uZW50IHVwZGF0ZSBhcyBjb25maWd1cmF0aW9uIGRpY3RhdGVzXG4gICAgaWYgKFxuICAgICAgKHRoaXMudXBkYXRlVHJpZ2dlclNsb3RzLmhhcygnZGVmYXVsdCcpICYmICFzbG90Lm5hbWUpIHx8XG4gICAgICAoc2xvdC5uYW1lICYmIHRoaXMudXBkYXRlVHJpZ2dlclNsb3RzLmhhcyhzbG90Lm5hbWUpKVxuICAgICkge1xuICAgICAgdGhpcy5ob3N0LnJlcXVlc3RVcGRhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgaG9zdENvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmhvc3Quc2hhZG93Um9vdD8uYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsIHRoaXMuaGFuZGxlU2xvdENoYW5nZSk7XG5cbiAgICAvLyBXYWl0IHVudGlsIGZpcnN0IHVwZGF0ZSBhZnRlciBjb25uZWN0ZWRcbiAgICB0aGlzLmhvc3QudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLm9uQ29ubmVjdGVkLnNldCh0cnVlKTtcbiAgICAgIC8vIFRPRE8ocmVlY2UpOiByZWNvbnNpZGVyIHdoZW4gYSBzb2x1dGlvbiBleGlzdHMgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8xNDM0XG4gICAgICAvLyBJZiBhZnRlciB0aGUgZmlyc3RVcGRhdGUgd2UncmUgd2F0Y2hpbmcgc2xvdHMgcmVxdWVzdCBhbm90aGVyIGluIGNhc2Ugc3NyLXNsb3RzIHdhcyBub3QgcHJvcGVybHkgc2V0IGJ5IHRoZSB1c2VyXG4gICAgICBpZiAodGhpcy51cGRhdGVUcmlnZ2VyU2xvdHMuc2l6ZSA+IDApIHtcbiAgICAgICAgdGhpcy5ob3N0LnJlcXVlc3RVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhvc3REaXNjb25uZWN0ZWQoKSB7XG4gICAgdGhpcy5ob3N0LnNoYWRvd1Jvb3Q/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCB0aGlzLmhhbmRsZVNsb3RDaGFuZ2UpO1xuICAgIHRoaXMuc3Vicy5mb3JFYWNoKCh1bnN1YikgPT4gdW5zdWIoKSk7XG4gICAgdGhpcy5zdWJzID0gW107XG4gICAgdGhpcy5jb25uZWN0ZWRDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMub25Db25uZWN0ZWQuc2V0KGZhbHNlKTtcbiAgfVxufVxuXG4vKipcbiAqIEdpdmVuIGEgc2xvdCwgdGhpcyBmdW5jdGlvbiBpdGVyYXRlcyBvdmVyIGFsbCBvZiBpdHMgYXNzaWduZWQgZWxlbWVudCBhbmQgdGV4dCBub2RlcyBhbmQgcmV0dXJucyB0aGUgY29uY2F0ZW5hdGVkXG4gKiBIVE1MIGFzIGEgc3RyaW5nLiBUaGlzIGlzIHVzZWZ1bCBiZWNhdXNlIHdlIGNhbid0IHVzZSBzbG90LmlubmVySFRNTCBhcyBhbiBhbHRlcm5hdGl2ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElubmVySFRNTChzbG90OiBIVE1MU2xvdEVsZW1lbnQpOiBzdHJpbmcge1xuICBjb25zdCBub2RlcyA9IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gIGxldCBodG1sID0gJyc7XG5cbiAgWy4uLm5vZGVzXS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICBodG1sICs9IChub2RlIGFzIEhUTUxFbGVtZW50KS5vdXRlckhUTUw7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICBodG1sICs9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaHRtbDtcbn1cblxuLyoqXG4gKiBHaXZlbiBhIHNsb3QsIHRoaXMgZnVuY3Rpb24gaXRlcmF0ZXMgb3ZlciBhbGwgb2YgaXRzIGFzc2lnbmVkIHRleHQgbm9kZXMgYW5kIHJldHVybnMgdGhlIGNvbmNhdGVuYXRlZCB0ZXh0IGFzIGFcbiAqIHN0cmluZy4gVGhpcyBpcyB1c2VmdWwgYmVjYXVzZSB3ZSBjYW4ndCB1c2Ugc2xvdC50ZXh0Q29udGVudCBhcyBhbiBhbHRlcm5hdGl2ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHRDb250ZW50KHNsb3Q6IEhUTUxTbG90RWxlbWVudCB8IHVuZGVmaW5lZCB8IG51bGwpOiBzdHJpbmcge1xuICBpZiAoIXNsb3QpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgY29uc3Qgbm9kZXMgPSBzbG90LmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pO1xuICBsZXQgdGV4dCA9ICcnO1xuXG4gIFsuLi5ub2Rlc10uZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgdGV4dCArPSBub2RlLnRleHRDb250ZW50O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbmltcG9ydCB7XG4gIGNvbmZpZyBhcyBnZXR0ZXJDb25maWcsXG4gIHNldENvbmZpZyBhcyBzZXR0ZXJDb25maWcsXG4gIE1vcnRhclRoZW1lQ29uZmlnLFxufSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQgeyBTdWJzZXQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc1Nzciwgc2lnbmFsIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IHR5cGUgTXRlVGhlbWUgPSAnZGVmYXVsdCcgfCAncHhMaWdodCcgfCAnY3hMaWdodCcgfCAncnhMaWdodCc7XG5cbmV4cG9ydCB0eXBlIE10ZUNvbG9yU2NoZW1lID0gJ2xpZ2h0JyB8ICdkYXJrJyB8ICdzeXN0ZW0nO1xuXG5jb25zdCBDQUNIRV9UT19LRVkgPSAnbXRlLnRoZW1lLmNhY2hlLXRvJztcbmNvbnN0IENPTE9SX1NDSEVNRV9LRVkgPSAnbXRlLnRoZW1lLmdsb2JhbC1jb2xvci1zY2hlbWUnO1xuXG5jbGFzcyBfTXRlVGhlbWVTZXJ2aWNlIHtcbiAgY29uZmlnID0gZ2V0dGVyQ29uZmlnO1xuXG4gIHByaXZhdGUgcm9vdE9ic2VydmVyPzogTXV0YXRpb25PYnNlcnZlcjtcbiAgcHJpdmF0ZSB0aGVtZVNpZ25hbCA9IHNpZ25hbDxNdGVUaGVtZSB8IG51bGw+KHRoaXMuZ2V0R2xvYmFsVGhlbWUoKSk7XG4gIHByaXZhdGUgY29sb3JTY2hlbWVTaWduYWwgPSBzaWduYWw8TXRlQ29sb3JTY2hlbWUgfCBudWxsPih0aGlzLmdldEdsb2JhbENvbG9yU2NoZW1lKCkgPz8gJ2xpZ2h0Jyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0Q2FjaGUoKTtcbiAgfVxuXG4gIC8qKiBDb25maWd1cmVzIHRoZSBgTXRlVGhlbWVTZXJ2aWNlYCB0byBjYWNoZSBjb2xvci1zY2hlbWUgY2hhbmdlcyB0byBgbG9jYWxTdG9yYWdlYCwgYHNlc3Npb25TdG9yYWdlYCwgb3IgbmVpdGhlci4gKi9cbiAgcHVibGljIGNhY2hlQ29sb3JTY2hlbWVUbyhtZXRob2Q6ICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJykge1xuICAgIGlmICghbWV0aG9kKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENsZWFyIGFsbCBrZXlzIGZyb20gYWxsIHN0b3JhZ2UgbG9jYXRpb25zIGlmIG5vbmVcbiAgICBpZiAobWV0aG9kID09PSAnbm9uZScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKENPTE9SX1NDSEVNRV9LRVkpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIHRyeSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oQ0FDSEVfVE9fS0VZKTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShDT0xPUl9TQ0hFTUVfS0VZKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRTY2hlbWUgPSB0aGlzLmNvbG9yU2NoZW1lU2lnbmFsLmdldCgpO1xuICAgIC8vIFNldCBjYWNoZSBtZXRob2QgaW4gc3RvcmFnZSAtIFRyeSBsb2NhbFN0b3JhZ2UgZmlyc3RcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ0FDSEVfVE9fS0VZLCBtZXRob2QpO1xuICAgICAgaWYgKGN1cnJlbnRTY2hlbWUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ09MT1JfU0NIRU1FX0tFWSwgY3VycmVudFNjaGVtZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ010ZVRoZW1lU2VydmljZTogQ291bGQgbm90IHNldCBjb2xvciBzY2hlbWUgY2FjaGUgbWV0aG9kIHRvIGBsb2NhbFN0b3JhZ2VgLiBBdHRlbXB0aW5nIGZhbGxiYWNrIHRvIGBzZXNzaW9uU3RvcmFnZWAuIENhY2hpbmcgd2lsbCBvbmx5IGhhcHBlbiB0byBzZXNzaW9uU3RvcmFnZS4nXG4gICAgICApO1xuICAgICAgLy8gVHJ5IHNlc3Npb25TdG9yYWdlIG5leHRcbiAgICAgIHRyeSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oQ0FDSEVfVE9fS0VZLCAnc2Vzc2lvblN0b3JhZ2UnKTtcbiAgICAgICAgaWYgKGN1cnJlbnRTY2hlbWUpIHtcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKENPTE9SX1NDSEVNRV9LRVksIGN1cnJlbnRTY2hlbWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ010ZVRoZW1lU2VydmljZTogQ291bGQgbm90IHNldCBjb2xvciBzY2hlbWUgY2FjaGUgbWV0aG9kIHRvIGBsb2NhbFN0b3JhZ2VgIG9yIGBzZXNzaW9uU3RvcmFnZWAuIENhY2hpbmcgbm90IGVuYWJsZWQuJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBjdXJyZW50IGdsb2JhbCB0aGVtZSBvbiB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgc2V0R2xvYmFsVGhlbWUodGhlbWU6IE10ZVRoZW1lKSB7XG4gICAgaWYgKCF0aGVtZSB8fCB0eXBlb2YgdGhlbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ010ZVRoZW1lU2VydmljZTogR2xvYmFsIHRoZW1lIHBhcmFtIG11c3QgYmUgYSBzdHJpbmcuJyk7XG4gICAgfVxuICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgaWYgKHRoZW1lICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnZGF0YS1tdGUtdGhlbWUnLCB0aGVtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1tdGUtdGhlbWUnKTtcbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgY3VycmVudCBnbG9iYWwgY29sb3Itc2NoZW1lIG9uIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBzZXRHbG9iYWxDb2xvclNjaGVtZShjb2xvclNjaGVtZTogTXRlQ29sb3JTY2hlbWUpIHtcbiAgICBpZiAoIWNvbG9yU2NoZW1lIHx8IHR5cGVvZiBjb2xvclNjaGVtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXRlVGhlbWVTZXJ2aWNlOiBHbG9iYWwgY29sb3JTY2hlbWUgcGFyYW0gbXVzdCBiZSBhIHN0cmluZy4nKTtcbiAgICB9XG4gICAgY29uc3Qgc2NoZW1lID0gY29sb3JTY2hlbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoc2NoZW1lID09PSAnZGFyaycgfHwgc2NoZW1lID09PSAnbGlnaHQnIHx8IHNjaGVtZSA9PT0gJ3N5c3RlbScpIHtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnZGF0YS1tdGUtY29sb3Itc2NoZW1lJywgc2NoZW1lKTtcbiAgICAgIHRoaXMuc2V0Q2FjaGVWYWx1ZShDT0xPUl9TQ0hFTUVfS0VZLCBjb2xvclNjaGVtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1tdGUtY29sb3Itc2NoZW1lJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGN1cnJlbnQgZ2xvYmFsIHRoZW1lIGZyb20gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIGdldEdsb2JhbFRoZW1lKCk6IE10ZVRoZW1lIHwgbnVsbCB7XG4gICAgY29uc3QgdmFsdWUgPSBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtbXRlLXRoZW1lJykgYXMgTXRlVGhlbWU7XG4gICAgaWYgKCFbJ2RlZmF1bHQnLCAncHhMaWdodCcsICdjeExpZ2h0JywgJ3J4TGlnaHQnXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgYXMgTXRlVGhlbWU7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGN1cnJlbnQgZ2xvYmFsIGNvbG9yLXNjaGVtZSBmcm9tIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBnZXRHbG9iYWxDb2xvclNjaGVtZSgpOiBNdGVDb2xvclNjaGVtZSB8IG51bGwge1xuICAgIGNvbnN0IHZhbHVlID0gZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKFxuICAgICAgJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZSdcbiAgICApIGFzIE10ZUNvbG9yU2NoZW1lO1xuICAgIGlmICghWydsaWdodCcsICdkYXJrJywgJ3N5c3RlbSddLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZSBhcyBNdGVDb2xvclNjaGVtZTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyBhIHJlYWN0aXZlIHNpZ25hbCB0aGF0IHdpbGwgdXBkYXRlIGFueSB0aW1lIHRoZSBnbG9iYWwgdGhlbWUgY2hhbmdlcyAqL1xuICBwdWJsaWMgc2VsZWN0R2xvYmFsVGhlbWUoKSB7XG4gICAgdGhpcy5pbml0T2JzZXJ2ZXIoKTtcbiAgICByZXR1cm4gdGhpcy50aGVtZVNpZ25hbDtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIGEgcmVhY3RpdmUgc2lnbmFsIHRoYXQgd2lsbCB1cGRhdGUgYW55IHRpbWUgdGhlIGdsb2JhbCBjb2xvci1zY2hlbWUgY2hhbmdlcyAqL1xuICBwdWJsaWMgc2VsZWN0R2xvYmFsQ29sb3JTY2hlbWUoKSB7XG4gICAgdGhpcy5pbml0T2JzZXJ2ZXIoKTtcbiAgICByZXR1cm4gdGhpcy5jb2xvclNjaGVtZVNpZ25hbDtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSB2YWx1ZSBvZiBhbGwgb2YgdGhlIGdpdmVuIHRoZW1lIHZhcmlhYmxlcyBvbiB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgc2V0KFxuICAgIGNvbmZpZ0ZuT3JPYmo6XG4gICAgICB8IFN1YnNldDxNb3J0YXJUaGVtZUNvbmZpZz5cbiAgICAgIHwgKChjb25maWc6IE1vcnRhclRoZW1lQ29uZmlnKSA9PiBTdWJzZXQ8TW9ydGFyVGhlbWVDb25maWc+KVxuICApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZ0ZuT3JPYmogPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbmZpZ0ZuT3JPYmogPSBjb25maWdGbk9yT2JqKHRoaXMuY29uZmlnKTtcbiAgICB9XG4gICAgY29uc3QgbWFwcGluZ3MgPSB0aGlzLmZsYXR0ZW5QYXRocyhjb25maWdGbk9yT2JqKTtcbiAgICBtYXBwaW5ncy5mb3JFYWNoKChbcGF0aCwgdmFsXSkgPT4ge1xuICAgICAgY29uc3QgY3NzVmFyID0gcGF0aC5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjW3Byb3BdO1xuICAgICAgfSwgc2V0dGVyQ29uZmlnKTtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnN0eWxlLnNldFByb3BlcnR5KGNzc1ZhciwgYCR7dmFsfWApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJldHJpZXZlcyB0aGUgdmFsdWUgZm9yIHRoZSByZXF1ZXN0ZWQgdGhlbWUgdmFyaWFibGUgZnJvbSB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgZ2V0PFQ+KGsxOiAodGhlbWVDb25maWc6IE1vcnRhclRoZW1lQ29uZmlnKSA9PiBUKTogVDtcbiAgcHVibGljIGdldDxLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnPihrMTogSzEpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8SzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZywgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0+KFxuICAgIGsxOiBLMSxcbiAgICBrMjogSzJcbiAgKTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVxuICA+KGsxOiBLMSwgazI6IEsyLCBrMzogSzMpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXSxcbiAgICBLNCBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMywgazQ6IEs0KTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM10sXG4gICAgSzUgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1cbiAgPihrMTogSzEsIGsyOiBLMiwgazM6IEszLCBrNDogSzQsIGs1OiBLNSk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVtLNV07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl0sXG4gICAgSzQgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXSxcbiAgICBLNSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XSxcbiAgICBLNiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVtLNV1cbiAgPihrMTogSzEsIGsyOiBLMiwgazM6IEszLCBrNDogSzQsIGs1OiBLNSwgazY6IEs2KTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdW0s1XVtLNl07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl0sXG4gICAgSzQgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXSxcbiAgICBLNSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XSxcbiAgICBLNiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVtLNV1cbiAgPihcbiAgICAuLi5rZXlzOlxuICAgICAgfCBbSzFdXG4gICAgICB8IFtLMSwgSzJdXG4gICAgICB8IFtLMSwgSzIsIEszXVxuICAgICAgfCBbSzEsIEsyLCBLMywgSzRdXG4gICAgICB8IFtLMSwgSzIsIEszLCBLNCwgSzVdXG4gICAgICB8IFtLMSwgSzIsIEszLCBLNCwgSzUsIEs2XVxuICApOiBhbnkge1xuICAgIGNvbnN0IFtmbl0gPSBrZXlzID8/IFtudWxsXTtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBjc3NWYXIgPSAoZm4gYXMgYW55KShzZXR0ZXJDb25maWcpO1xuICAgICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZ2xvYmFsVGhpcz8uZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Zhcik7XG4gICAgfVxuICAgIGNvbnN0IGNzc1ZhciA9IGtleXMucmVkdWNlKChhY2M6IGFueSwga2V5KSA9PiBhY2Nba2V5XSwgc2V0dGVyQ29uZmlnIGFzIGFueSkgYXMgc3RyaW5nO1xuICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGdsb2JhbFRoaXM/LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShjc3NWYXIpO1xuICB9XG5cbiAgLyoqIEZsYXR0ZW5zIGEgZ2l2ZW4gb2JqZWN0IHRvIGFuIGFycmF5IG9mIHBhdGgga2V5cyBhbmQgaXRzIHJlc3VsdGluZyB2YWx1ZSAqL1xuICBwcml2YXRlIGZsYXR0ZW5QYXRocyhvYmo6IFJlY29yZDxzdHJpbmcsIGFueT4sIHBhdGg6IHN0cmluZ1tdID0gW10pOiBbc3RyaW5nW10sIGFueV1bXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgY29uc3QgbmVzdGVkID0gb2JqW2tleV07XG4gICAgICBpZiAodHlwZW9mIG5lc3RlZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcGF0aC5wdXNoKGtleSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYWNjLCB0aGlzLmZsYXR0ZW5QYXRocyhuZXN0ZWQsIHBhdGgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGgucHVzaChrZXkpO1xuICAgICAgICBhY2MucHVzaChbcGF0aCwgbmVzdGVkXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTXV0YXRpb25FdmVudCA9IChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG4gICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIHtcbiAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkYXRhLW10ZS1jb2xvci1zY2hlbWUnKSB7XG4gICAgICAgICAgdGhpcy5jb2xvclNjaGVtZVNpZ25hbC5zZXQodGhpcy5nZXRHbG9iYWxDb2xvclNjaGVtZSgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGF0YS1tdGUtdGhlbWUnKSB7XG4gICAgICAgICAgdGhpcy50aGVtZVNpZ25hbC5zZXQodGhpcy5nZXRHbG9iYWxUaGVtZSgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGluaXRDYWNoZSgpIHtcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjYWNoZUNvbG9yU2NoZW1lID0gdGhpcy5nZXRDYWNoZVZhbHVlKENPTE9SX1NDSEVNRV9LRVkpO1xuICAgICAgICBpZiAoY2FjaGVDb2xvclNjaGVtZSAmJiBjYWNoZUNvbG9yU2NoZW1lICE9PSAnJykge1xuICAgICAgICAgIHRoaXMuc2V0R2xvYmFsQ29sb3JTY2hlbWUoY2FjaGVDb2xvclNjaGVtZSBhcyBNdGVDb2xvclNjaGVtZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0T2JzZXJ2ZXIoKSB7XG4gICAgaWYgKCFpc1NzcigpICYmICF0aGlzLnJvb3RPYnNlcnZlcikge1xuICAgICAgdGhpcy5yb290T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmhhbmRsZU11dGF0aW9uRXZlbnQpO1xuICAgICAgdGhpcy5yb290T2JzZXJ2ZXIub2JzZXJ2ZShnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogWydkYXRhLW10ZS10aGVtZScsICdkYXRhLW10ZS1jb2xvci1zY2hlbWUnXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FjaGVNZXRob2QoKTogJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnIHwgbnVsbCB7XG4gICAgLy8gUmV0cmlldmUgY2FjaGUgbWV0aG9kXG4gICAgbGV0IGNhY2hlTWV0aG9kOiAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZScgfCBudWxsID0gbnVsbDtcbiAgICAvLyBUcnkgbG9jYWxTdG9yYWdlXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGNhY2hlTWV0aG9kID0gdmFsIGFzICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBUcnkgc2Vzc2lvblN0b3JhZ2VcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oQ0FDSEVfVE9fS0VZKTtcbiAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgIGNhY2hlTWV0aG9kID0gdmFsIGFzICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlTWV0aG9kO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDYWNoZVZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2FjaGVNZXRob2QgPSB0aGlzLmdldENhY2hlTWV0aG9kKCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChjYWNoZU1ldGhvZCA9PT0gJ2xvY2FsU3RvcmFnZScpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGNhY2hlTWV0aG9kID09PSAnc2Vzc2lvblN0b3JhZ2UnKSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FjaGVWYWx1ZShrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IGNhY2hlTWV0aG9kID0gdGhpcy5nZXRDYWNoZU1ldGhvZCgpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoY2FjaGVNZXRob2QgPT09ICdsb2NhbFN0b3JhZ2UnKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgfSBlbHNlIGlmIChjYWNoZU1ldGhvZCA9PT0gJ3Nlc3Npb25TdG9yYWdlJykge1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZVRoZW1lU2VydmljZSA9IG5ldyBfTXRlVGhlbWVTZXJ2aWNlKCk7XG4iLCAiaW1wb3J0IHsgaXNTc3IsIGlzUGxhdGZvcm0gfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgdHlwZSBQb3J0YWxTdGFjayA9ICdvdmVybGF5JztcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YSB7XG4gIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHN0YWNrOiBQb3J0YWxTdGFjaztcbiAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzOiBTZXQ8RWxlbWVudD47XG4gIHBhcmVudFBvcnRhbGVkRWxlbWVudD86IEVsZW1lbnQ7XG4gIGJhY2tkcm9wPzogRWxlbWVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50UG9ydGFsQ29udHJvbGxlciB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcmVudFBvcnRhbGVkRWxlbWVudDogRWxlbWVudDtcbiAgb3B0aW9uczogeyBzdGFjazogUG9ydGFsU3RhY2sgfTtcbn1cblxuZXhwb3J0IHR5cGUgUG9ydGFsQWRhcHRlcjxUID0gYW55PiA9IChcbiAgcG9ydGFsRWxlbWVudDogVCxcbiAgb3V0bGV0RWxlbWVudDogRWxlbWVudFxuKSA9PiBQcm9taXNlPGFueT4gfCBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydGFsT3B0aW9ucyB7XG4gIC8qKiBSZW5kZXJzIHRoZSBiYWNrZHJvcCBkaW1tZWQgKi9cbiAgd2l0aERpbUJhY2tkcm9wPzogYm9vbGVhbjtcblxuICAvKiogTWFrZXMgdGhlIGJhY2tkcm9wIGlnbm9yZSBwb2ludGVyIGV2ZW50cy4gVXNlZnVsIGZvciB0cmlnZ2VyT24gXCJob3ZlclwiLiAqL1xuICB3aXRoSW5lcnRCYWNrZHJvcD86IGJvb2xlYW47XG5cbiAgLyoqIERpc2FibGVzIHRoZSBhYmlsaXR5IHRvIHNjcm9sbCB0aGUgcGFnZSBiZWhpbmQgdGhlIG92ZXJsYXkgd2hlbiB0cnVlICovXG4gIHdpdGhTY3JvbGxMb2NrPzogYm9vbGVhbjtcblxuICAvKiogQ2FsbGJhY2sgZm9yIGhhbmRsaW5nIGNsb3NlT25DbGlja091dHNpZGUgZXZlbnRzIHdoZW4gdGhlIHBvcnRhbCdzIGJhY2tkcm9wIGlzIGNsaWNrZWQgKi9cbiAgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXI/OiAoKSA9PiBhbnk7XG5cbiAgLyoqIFRoZSBhbmltYXRpb24gZHVyYXRpb24gZm9yIGZhZGluZyBhIHNoYWRvdyBiYWNrZHJvcCBpbi9vdXQgKi9cbiAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG5cbiAgLyoqIEFkYXB0ZXIgZm9yIFwicG9ydGFsaW5nXCIgYW4gZWxlbWVudCBmcm9tIG9uZSBsb2NhdGlvbiBpbiB0aGUgRE9NIHRvIGFub3RoZXIuIExldmVyYWdlZCBieSBmcmFtZXdvcmsgd3JhcHBlcnMgZm9yIGltcHJvdmVkIGludGVyb3AuICovXG4gIHBvcnRhbEFkYXB0ZXI/OiBQb3J0YWxBZGFwdGVyO1xufVxuXG4vKiogRGVmYXVsdCBuYXRpdmUgRE9NIGFkYXB0ZXIgZm9yIHBvcnRhbGluZyBhbiBlbGVtZW50IHRvIGFub3RoZXIgdGFyZ2V0IGVsZW1lbnQgKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0UG9ydGFsQWRhcHRlcjogUG9ydGFsQWRhcHRlciA9IChwb3J0YWxFbGVtLCBvdXRsZXRFbGVtKSA9PiB7XG4gIG91dGxldEVsZW0/LmFwcGVuZENoaWxkKHBvcnRhbEVsZW0pO1xufTtcblxuY2xhc3MgX010ZVBvcnRhbFNlcnZpY2Uge1xuICAvKiogU2hhcmVkIGdsb2JhbCBjb25zdCBmb3Igc3RhY2sgZWxlbWVudCByZWZzICovXG4gIHByaXZhdGUgc3RhY2tFbGVtZW50czogeyBvdmVybGF5OiBFbGVtZW50IH0gPSB7XG4gICAgb3ZlcmxheTogdW5kZWZpbmVkLFxuICB9O1xuXG4gIC8qKiBTaGFyZWQgZ2xvYmFsIGNvbnN0IGZvciBwb3J0YWxlZCBlbGVtZW50cyBtZXRhZGF0YSAqL1xuICBwcml2YXRlIHBvcnRhbGVkRWxlbWVudHMgPSBuZXcgTWFwPG51bWJlciwgTWFwPEVsZW1lbnQsIFBvcnRhbGVkRWxlbWVudE1ldGFkYXRhPj4oKTtcblxuICBwcml2YXRlIGFjdGl2ZVNjcm9sbExvY2tzID0gbmV3IFNldDxFbGVtZW50PigpO1xuXG4gIHByaXZhdGUgc3RhY2tNdXRhdGlvbk9ic2VydmVyPzogTXV0YXRpb25PYnNlcnZlcjtcblxuICAvKipcbiAgICogV2hlbiBjYWxsZWQsIHRoaXMgc2VydmljZSB3aWxsIGF0dGVtcHQgdG8gbG9jYXRlIHRoZSBgQGFuZ3VsYXIvY2RrYCBvdmVybGF5IHN0YWNrLlxuICAgKiBJZiBmb3VuZCB0aGlzIHNlcnZpY2Ugd2lsbCBiZSBjb25maWd1cmVkIHRvIHVzZSB0aGF0IGVsZW1lbnQgYXMgdGhlIGBvdmVybGF5YCBzdGFjayBpbnN0ZWFkIG9mIGluaXRpYWxpemluZyBpdHMgb3duLlxuICAgKi9cbiAgcHVibGljIGNvbmZpZ3VyZUNka0ludGVyb3AoKSB7XG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICBjb25zdCBjZGtTdGFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZGstb3ZlcmxheS1jb250YWluZXInKTtcbiAgICAgIGlmIChjZGtTdGFjaykge1xuICAgICAgICB0aGlzLnN0YWNrRWxlbWVudHMub3ZlcmxheSA9IGNka1N0YWNrO1xuICAgICAgICB0aGlzLnN0YWNrRWxlbWVudHMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKHRoaXMuaWRGYWN0b3J5KCdvdmVybGF5JykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBwb3J0YWwgY29udHJvbGxlci4gQWxsIGl0ZW1zIGl0IHJlcXVlc3RlZCB0byBiZSBwb3J0YWxlZCB3aWxsIGJlIHRyYWNrIGFnYWluc3QgaXQuXG4gICAqIFdoZW4gdGhlIHBvcnRhbCBpcyByZW1vdmVkIHdlIGNhbiB0aGVuIHJlbW92ZSBhbnkgZWxlbWVudHMgaXQgY3VycmVudGx5IGhhcyBwb3J0YWxlZCBhbmRcbiAgICogYW55IG9mIHRoZWlyIHBvcnRhbGVkIGNoaWxkcmVuLlxuICAgKi9cbiAgcHVibGljIGFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIpIHtcbiAgICBpZiAoIXRoaXMucG9ydGFsZWRFbGVtZW50cy5oYXMocG9ydGFsQ29udHJvbGxlcj8uaWQpKSB7XG4gICAgICAvLyBUcmFjayBpbiBzZXQgYnkgSUQgc28gd2UgZG9uJ3Qga2VlcCBhIGxpdmUgcmVmZXJlbmNlIHRvIHRoZSBjb250cm9sbGVyIGl0c2VsZlxuICAgICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLnNldChwb3J0YWxDb250cm9sbGVyLmlkLCBuZXcgTWFwPEVsZW1lbnQsIFBvcnRhbGVkRWxlbWVudE1ldGFkYXRhPigpKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVtb3ZlcyBhbGwgb2YgYSBwb3J0YWwgY29udHJvbGxlcnMgcG9ydGFsZWQgZWxlbWVudHMgYW5kIHRoZWlyIHJlZmVyZW5jZXMgKi9cbiAgcHVibGljIHJlbW92ZUNvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIpIHtcbiAgICAvLyBBdHRlbXB0IHRvIHJlbW92ZSBhbGwgaXRlbXMgYXR0YWNoZWQgYnkgdGhpcyBjb250cm9sbGVyIGZyb20gdGhlIGNvbmZpZ3VyZWQgc3RhY2tcbiAgICBjb25zdCBhdHRhY2hlZEVsZW1lbnRzID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKTtcbiAgICBpZiAoYXR0YWNoZWRFbGVtZW50cykge1xuICAgICAgYXR0YWNoZWRFbGVtZW50cy5mb3JFYWNoKChpdGVtKSA9PiB0aGlzLnJlbW92ZUZyb21TdGFjayhwb3J0YWxDb250cm9sbGVyLCBpdGVtLmVsZW1lbnQpKTtcbiAgICB9XG4gICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmRlbGV0ZShwb3J0YWxDb250cm9sbGVyLmlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnN1cmVzIGEgcmVmIHRvIHRoZSBjb25maWd1cmVkIHN0YWNrIGV4aXN0cy4gSWYgaXQgZG9lcyBub3QsIHRoZSBjb25maWd1cmVkIHN0YWNrIHdpbGxcbiAgICogYmUgY3JlYXRlZCBhbmQgYXBwZW5kZWQgdG8gdGhlIGRvY3VtZW50LiBEb2VzIG5vdGhpbmcgZHVyaW5nIFNTUi5cbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplU3RhY2soc3RhY2s6IFBvcnRhbFN0YWNrKSB7XG4gICAgaWYgKHN0YWNrICE9PSAnb3ZlcmxheScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPdmVybGF5IFN0YWNrOiBcIiR7c3RhY2t9XCIgbXVzdCBiZSAnb3ZlcmxheScgYXQgdGhpcyB0aW1lLmApO1xuICAgIH1cbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIGlmICghdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXSkge1xuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZEZhY3Rvcnkoc3RhY2spKTtcbiAgICAgICAgdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXSA9XG4gICAgICAgICAgZWxlbSA/P1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5pZEZhY3Rvcnkoc3RhY2spLFxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10gJiYgIXRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10uaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRTdGFja1RvRG9tKHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10pO1xuXG4gICAgICAgIC8vIEluaXQgbXV0YXRpb24gb2JzZXJ2ZXJcbiAgICAgICAgLy8gVGhpcyB3aWxsIHdhdGNoIGZvciBhbnl0aW1lIHRoZSBzdGFjayBpcyByZW1vdmVkIGZyb20gdGhlIERPTSBmb3Igc29tZSByZWFzb25cbiAgICAgICAgLy8gSWYgaXQgaXMsIGl0IHdpbGwgcmUtYXR0YWNoIGl0IHRvIHRoZSBET00gYWZ0ZXIgdGhlIG5leHQgdGlja1xuICAgICAgICBpZiAoIXRoaXMuc3RhY2tNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgdGhpcy5zdGFja011dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobWwsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG1sKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgcmVtb3ZlZE5vZGUgb2YgbXV0YXRpb24ucmVtb3ZlZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZWROb2RlID09PSB0aGlzLnN0YWNrRWxlbWVudHMub3ZlcmxheSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxJdGVtc0Zyb21TdGFja3MoKTtcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZFN0YWNrVG9Eb20odGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10/LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLnN0YWNrTXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10ucGFyZW50Tm9kZSwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogZmFsc2UsXG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICBzdWJ0cmVlOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBwZW5kU3RhY2tUb0RvbShzdGFja0VsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAoc3RhY2tFbGVtZW50ICYmICFzdGFja0VsZW1lbnQuaXNDb25uZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHRvYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdtdGUtdG9hc3QtY29udGFpbmVyJyk7XG4gICAgICBpZiAodG9hc3RDb250YWluZXIpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoc3RhY2tFbGVtZW50LCB0b2FzdENvbnRhaW5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChzdGFja0VsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBBcHBlbmRzIGFuIGl0ZW0gdG8gdGhlIGNvbmZpZ3VyZWQgcG9ydGFsIHN0YWNrICovXG4gIHB1YmxpYyBhcHBlbmRUb1N0YWNrKFxuICAgIHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLFxuICAgIGVsZW1lbnQ6IEVsZW1lbnQsXG4gICAge1xuICAgICAgd2l0aERpbUJhY2tkcm9wID0gZmFsc2UsXG4gICAgICB3aXRoSW5lcnRCYWNrZHJvcCA9IGZhbHNlLFxuICAgICAgd2l0aFNjcm9sbExvY2sgPSBmYWxzZSxcbiAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXIsXG4gICAgICBwb3J0YWxBZGFwdGVyID0gZGVmYXVsdFBvcnRhbEFkYXB0ZXIsXG4gICAgfTogUG9ydGFsT3B0aW9ucyA9IHt9XG4gICkge1xuICAgIHRoaXMuYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudFBvcnRhbGVkRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50UG9ydGFsZWRFbGVtZW50KHBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQpO1xuICAgICAgY29uc3Qgc3RhY2tOYW1lID0gcG9ydGFsQ29udHJvbGxlci5vcHRpb25zLnN0YWNrO1xuICAgICAgY29uc3Qgc3RhY2sgPSB0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tOYW1lXTtcbiAgICAgIGNvbnN0IGF0dGFjaGVkRWxlbWVudHMgPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpO1xuXG4gICAgICBjb25zdCBiYWNrZHJvcCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbXRlLXBvcnRhbF9fYmFja2Ryb3AnLFxuICAgICAgICAuLi4oYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb25cbiAgICAgICAgICA/IHsgc3R5bGU6IGB0cmFuc2l0aW9uLWR1cmF0aW9uOiAke2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9ufTtgIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBIYW5kbGUgYmFja2Ryb3Agc3R5bGluZ1xuICAgICAgaWYgKHdpdGhJbmVydEJhY2tkcm9wKSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1pbmVydCcpO1xuICAgICAgfVxuICAgICAgaWYgKHdpdGhEaW1CYWNrZHJvcCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0tc2hhZG93Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0tdHJhbnNwYXJlbnQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwZW5kIGJhY2tkcm9wXG4gICAgICBzdGFjaz8uYXBwZW5kQ2hpbGQoYmFja2Ryb3ApO1xuXG4gICAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgICAgLy8gQWRkIGxpc3RlbmVyIGlmIGNsaWNrIGhhbmRsZXIgaXMgcHJlc2VudFxuICAgICAgICBpZiAoY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgICAgICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcik7XG4gICAgICAgICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBiYWNrZHJvcCBzaG91bGQgYmUgZGltLCBhbmltYXRlIGl0IGFmdGVyIGl0IGhhcyBiZWVuIGFwcGVuZGVkIHRvIHRoZSBkb21cbiAgICAgICAgaWYgKHdpdGhEaW1CYWNrZHJvcCkge1xuICAgICAgICAgIGdsb2JhbFRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1zaG93Jyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwbHkgc2Nyb2xsIGxvY2tcbiAgICAgICAgaWYgKHdpdGhTY3JvbGxMb2NrKSB7XG4gICAgICAgICAgdGhpcy5hcHBseVNjcm9sbExvY2soZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gV2FpdCBmb3IgUmVhY3QgKG9yIG90aGVyIGZ1dHVyZSBmcmFtZXdvcmsgYWRhcHRlcikgdG8gYXBwZW5kIGVsZW1lbnQgdG8gbmV3XG4gICAgICAvLyBsb2NhdGlvbiBpbiB0aGUgRE9NIGJlZm9yZSBhZGRpbmcgdG8gc3RhY2suIERvaW5nIHNvIHRyaWdnZXJzIGBob3N0RGlzY29ubmVjdGVkYFxuICAgICAgLy8gd2hpY2ggd291bGQgaW5zdGFudGx5IHJlbW92ZSB0aGUgZWxlbWVudCBpZiBub3QgZm9yIHRoaXMgZXh0cmEgdGltZW91dCB0byB3YWl0IGEgdGlja1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHBvcnRhbEFkYXB0ZXIoZWxlbWVudCwgc3RhY2spKS50aGVuKCgpID0+IHtcbiAgICAgICAgYXR0YWNoZWRFbGVtZW50cy5zZXQoZWxlbWVudCwge1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgc3RhY2s6IHN0YWNrTmFtZSxcbiAgICAgICAgICBiYWNrZHJvcCxcbiAgICAgICAgICBjaGlsZFBvcnRhbGVkRWxlbWVudHM6IG5ldyBTZXQ8RWxlbWVudD4oKSxcbiAgICAgICAgICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogUmVtb3ZlcyBhbiBlbGVtZW50IGZyb20gdGhlIHN0YWNrICovXG4gIHB1YmxpYyByZW1vdmVGcm9tU3RhY2socG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5wb3J0YWxlZEVsZW1lbnRzLmhhcyhwb3J0YWxDb250cm9sbGVyLmlkKSkge1xuICAgICAgY29uc3QgYXR0YWNoZWRFbGVtZW50cyA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCk7XG4gICAgICBpZiAoYXR0YWNoZWRFbGVtZW50cykge1xuICAgICAgICBjb25zdCBlbGVtZW50TWV0YWRhdGEgPSBhdHRhY2hlZEVsZW1lbnRzLmdldChlbGVtZW50KTtcbiAgICAgICAgaWYgKGVsZW1lbnRNZXRhZGF0YSkge1xuICAgICAgICAgIGF0dGFjaGVkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgIHRoaXMuZmluYWxpemVTdGFja1JlbW92ZShlbGVtZW50TWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU2FmZWx5IHJlbW92ZXMgYWxsIGl0ZW1zIGZyb20gYWxsIHN0YWNrc1xuICBwcml2YXRlIHJlbW92ZUFsbEl0ZW1zRnJvbVN0YWNrcygpIHtcbiAgICBmb3IgKGxldCBbaWQsIGNvbnRyb2xsZXJNYXBdIG9mIHRoaXMucG9ydGFsZWRFbGVtZW50cy5lbnRyaWVzKCkpIHtcbiAgICAgIGZvciAobGV0IFtlbGVtZW50LCBlbGVtZW50TWV0YWRhdGFdIG9mIGNvbnRyb2xsZXJNYXAuZW50cmllcygpKSB7XG4gICAgICAgIGlmIChlbGVtZW50TWV0YWRhdGEpIHtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplU3RhY2tSZW1vdmUoZWxlbWVudE1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBNYWtlcyBhIGJhY2tkcm9wIGFzc29jaWF0ZWQgd2l0aCBhIHBvcnRhbGVkIGVsZW1lbnQgdmlzaWJsZSBpZiBpdCBleGlzdHMgKi9cbiAgcHVibGljIHNob3dCYWNrZHJvcChwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyKTtcbiAgICBjb25zdCB7IGJhY2tkcm9wIH0gPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpLmdldChlbGVtZW50KSA/PyB7fTtcbiAgICBiYWNrZHJvcD8uY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXNob3cnKTtcbiAgfVxuXG4gIC8qKiBIaWRlcyBhIGJhY2tkcm9wIGFzc29jaWF0ZWQgd2l0aCBhIHBvcnRhbGVkIGVsZW1lbnQgaWYgaXQgZXhpc3RzICovXG4gIHB1YmxpYyBoaWRlQmFja2Ryb3AocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgY29uc3QgeyBiYWNrZHJvcCB9ID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKS5nZXQoZWxlbWVudCkgPz8ge307XG4gICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tkcm9wLS1zaG93Jyk7XG4gIH1cblxuICAvKiogVXBkYXRlcyB0aGUgaW50ZXJ0bmVzcyBhIGJhY2tkcm9wIGlmIGl0IGV4aXN0cyAod2hldGhlciBvciBub3QgdGhlIHVzZXIgY2FuIGNsaWNrIHRocm91Z2ggaXQpICovXG4gIHB1YmxpYyBzZXRCYWNrZHJvcEluZXJ0bmVzcyhcbiAgICBwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlcixcbiAgICBlbGVtZW50OiBFbGVtZW50LFxuICAgIGluZXJ0OiBib29sZWFuID0gdHJ1ZVxuICApIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgY29uc3QgeyBiYWNrZHJvcCB9ID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKS5nZXQoZWxlbWVudCkgPz8ge307XG4gICAgaWYgKGluZXJ0KSB7XG4gICAgICBiYWNrZHJvcD8uY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLWluZXJ0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhY2tkcm9wPy5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrZHJvcC0taW5lcnQnKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgaWQgZm9yIHRoZSBjb25maWd1cmVkIHN0YWNrIGVsZW1lbnQgKi9cbiAgcHJpdmF0ZSBpZEZhY3RvcnkgPSAoc3RhY2s6IFBvcnRhbFN0YWNrKSA9PiBgbXRlLXBvcnRhbF9fJHtzdGFja30tc3RhY2tgO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYW4gZWxlbWVudCBpcyBiZWluZyBwb3J0YWxlZCBmcm9tIHdpdGhpbiBhbm90aGVyIHBvcnRhbGVkXG4gICAqIGVsZW1lbnQgYW5kIHJldHVybnMgdGhhdCBwYXJlbnQgaWYgaXQgaXNcbiAgICovXG4gIHByaXZhdGUgZ2V0UGFyZW50UG9ydGFsZWRFbGVtZW50KHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKHBvcnRhbENvbnRyb2xsZXIucGFyZW50UG9ydGFsZWRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gcG9ydGFsQ29udHJvbGxlci5wYXJlbnRQb3J0YWxlZEVsZW1lbnQ7XG4gICAgfVxuICAgIGxldCBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ6IEVsZW1lbnQ7XG4gICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmZvckVhY2goKHBvcnRhbENvbnRyb2xsZXIpID0+XG4gICAgICBwb3J0YWxDb250cm9sbGVyLmZvckVhY2goKHBvcnRhbGVkRWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAocG9ydGFsZWRFbGVtZW50LmVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgICBwb3J0YWxlZEVsZW1lbnQuY2hpbGRQb3J0YWxlZEVsZW1lbnRzLmFkZChlbGVtZW50KTtcbiAgICAgICAgICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQgPSBwb3J0YWxlZEVsZW1lbnQuZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIC8vIENhY2hlIHRoZSBwYXJlbnRQb3J0YWxlZEVsZW1lbnQgaWYgZm91bmQgb24gdGhlIGNvbnRyb2xsZXIgc28gd2UgY2FuIHJlZmVyZW5jZVxuICAgIC8vIGl0IHdoZW4gb3BlbmVkIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4gICAgaWYgKHBhcmVudFBvcnRhbGVkRWxlbWVudCkge1xuICAgICAgcG9ydGFsQ29udHJvbGxlci5wYXJlbnRQb3J0YWxlZEVsZW1lbnQgPSBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ7XG4gIH1cblxuICAvKiogRW5zdXJlcyBhbiBlbGVtZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgc3RhY2sgbm8gbWF0dGVyIHdoaWNoIGNvbnRyb2xsZXIgaGFzIHBvcnRhbGVkIGl0ICovXG4gIHByaXZhdGUgcmVtb3ZlRnJvbVN0YWNrR2xvYmFsbHkoZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChwb3J0YWxDb250cm9sbGVyKSA9PiB7XG4gICAgICBpZiAocG9ydGFsQ29udHJvbGxlci5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudE1ldGFkYXRhID0gcG9ydGFsQ29udHJvbGxlci5nZXQoZWxlbWVudCk7XG4gICAgICAgIHBvcnRhbENvbnRyb2xsZXIuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmZpbmFsaXplU3RhY2tSZW1vdmUoZWxlbWVudE1ldGFkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBGaW5hbGl6ZXMgdGhlIHJlbW92ZSBvZiBhbiBlbGVtZW50IGZyb20gYSBwb3J0YWwgc3RhY2sgKi9cbiAgcHJpdmF0ZSBmaW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YTogUG9ydGFsZWRFbGVtZW50TWV0YWRhdGEpIHtcbiAgICBpZiAoZWxlbWVudE1ldGFkYXRhKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIHN0YWNrOiBzdGFja05hbWUsXG4gICAgICAgIGJhY2tkcm9wLFxuICAgICAgICBjaGlsZFBvcnRhbGVkRWxlbWVudHMsXG4gICAgICAgIHBhcmVudFBvcnRhbGVkRWxlbWVudCxcbiAgICAgIH0gPSBlbGVtZW50TWV0YWRhdGE7XG4gICAgICBjb25zdCBzdGFjayA9IHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja05hbWVdO1xuXG4gICAgICAvLyBSZW1vdmUgYW55IHNjcm9sbExvY2tzXG4gICAgICB0aGlzLnJlbW92ZVNjcm9sbExvY2soZWxlbWVudCk7XG5cbiAgICAgIC8vIEVuc3VyZXMgYW4gZWxlbWVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gYW55IHBhcmVudCBwb3J0YWxlZCBlbGVtZW50cyBjaGlsZHJlbiBsaXN0c1xuICAgICAgaWYgKHBhcmVudFBvcnRhbGVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZm9yRWFjaCgocG9ydGFsQ29udHJvbGxlcikgPT4ge1xuICAgICAgICAgIGlmIChwb3J0YWxDb250cm9sbGVyLmhhcyhwYXJlbnRQb3J0YWxlZEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBwb3J0YWxDb250cm9sbGVyLmdldChwYXJlbnRQb3J0YWxlZEVsZW1lbnQpLmNoaWxkUG9ydGFsZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gRW5zdXJlcyBhbnkgY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50IGFyZSByZW1vdmVkIGJlZm9yZSB0aGlzIGVsZW1lbnQgaXNcbiAgICAgIGlmIChjaGlsZFBvcnRhbGVkRWxlbWVudHMuc2l6ZSA+IDApIHtcbiAgICAgICAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHRoaXMucmVtb3ZlRnJvbVN0YWNrR2xvYmFsbHkoZWxlbWVudCkpO1xuICAgICAgfVxuICAgICAgLy8gUmVtb3ZlcyB0aGlzIGVsZW1lbnRzIGJhY2tkcm9wIGZyb20gdGhlIHBvcnRhbCBzdGFja1xuICAgICAgaWYgKGJhY2tkcm9wICYmIGJhY2tkcm9wLnBhcmVudEVsZW1lbnQgPT09IHN0YWNrKSB7XG4gICAgICAgIHN0YWNrPy5yZW1vdmVDaGlsZChiYWNrZHJvcCk7XG4gICAgICB9XG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGEgcmVhY3Qgd3JhcHBlZCBwb3J0YWxlZCBlbGVtZW50XG4gICAgICBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50Py5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheS13cmFwcGVyJykpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ID09PSBzdGFjaykge1xuICAgICAgICAgIHN0YWNrPy5yZW1vdmVDaGlsZChlbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCA9PT0gc3RhY2spIHtcbiAgICAgICAgc3RhY2s/LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGEgc2Nyb2xsIGxvY2sgdG8gdGhlIGJvZHkgZWxlbWVudCB0byBwcmV2ZW50IHNjcm9sbGluZyBvZiBwYWdlIGNvbnRlbnQuXG4gICAqIENhbGN1bGF0ZXMgYW55IGJvZHkgb2Zmc2V0cyBkdWUgdG8gdmlzaWJsZSBzY3JvbGxiYXJzIGFuZCBkeW5hbWljYWxseSBhZGp1c3RzIGZvciB0aGVtLlxuICAgKi9cbiAgcHJpdmF0ZSBhcHBseVNjcm9sbExvY2soZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuYWN0aXZlU2Nyb2xsTG9ja3MuYWRkKGVsZW1lbnQpO1xuXG4gICAgY29uc3QgaXNJT1MgPSBpc1BsYXRmb3JtKCdJT1MnKTtcbiAgICBjb25zdCBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuICAgIGNvbnN0IHNjcm9sbGJhclggPVxuICAgICAgTWF0aC5yb3VuZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgK1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgY29uc3QgcGFkZGluZ1Byb3AgPSBzY3JvbGxiYXJYID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnO1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgY29uc3Qgc2Nyb2xsWCA9IGJvZHlTdHlsZS5sZWZ0ID8gcGFyc2VGbG9hdChib2R5U3R5bGUubGVmdCkgOiB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgY29uc3Qgc2Nyb2xsWSA9IGJvZHlTdHlsZS50b3AgPyBwYXJzZUZsb2F0KGJvZHlTdHlsZS50b3ApIDogd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gICAgYm9keVN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtdGUtc2Nyb2xsLWxvY2stLWFjdGl2ZScpO1xuXG4gICAgaWYgKHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICBib2R5U3R5bGVbcGFkZGluZ1Byb3BdID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgO1xuICAgIH1cblxuICAgIC8vIE9ubHkgaU9TIGRvZXNuJ3QgcmVzcGVjdCBgb3ZlcmZsb3c6IGhpZGRlbmAgb24gZG9jdW1lbnQuYm9keSwgYW5kIHRoaXNcbiAgICAvLyB0ZWNobmlxdWUgaGFzIGZld2VyIHNpZGUgZWZmZWN0cy5cbiAgICBpZiAoaXNJT1MpIHtcbiAgICAgIC8vIGlPUyAxMiBkb2VzIG5vdCBzdXBwb3J0IGB2aXN1YWxWaWV3cG9ydGAuXG4gICAgICBjb25zdCBvZmZzZXRMZWZ0ID0gZ2xvYmFsVGhpcy52aXN1YWxWaWV3cG9ydD8ub2Zmc2V0TGVmdCB8fCAwO1xuICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gZ2xvYmFsVGhpcy52aXN1YWxWaWV3cG9ydD8ub2Zmc2V0VG9wIHx8IDA7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oYm9keVN0eWxlLCB7XG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICB0b3A6IGAkey0oc2Nyb2xsWSAtIE1hdGguZmxvb3Iob2Zmc2V0VG9wKSl9cHhgLFxuICAgICAgICBsZWZ0OiBgJHstKHNjcm9sbFggLSBNYXRoLmZsb29yKG9mZnNldExlZnQpKX1weGAsXG4gICAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVtb3ZlcyBhbiBhY3RpdmUgc2Nyb2xsTG9jayBpZiB0aGVyZSBhcmUgbm8gcmVtYWluaW5nIGVsZW1lbnRzIHBvcnRhbGVkIHRoYXQgcmVxdWVzdGVkIGl0ICovXG4gIHByaXZhdGUgcmVtb3ZlU2Nyb2xsTG9jayhlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5hY3RpdmVTY3JvbGxMb2Nrcy5kZWxldGUoZWxlbWVudCk7XG5cbiAgICBpZiAodGhpcy5hY3RpdmVTY3JvbGxMb2Nrcy5zaXplID09PSAwKSB7XG4gICAgICBjb25zdCBpc0lPUyA9IGlzUGxhdGZvcm0oJ0lPUycpO1xuICAgICAgY29uc3QgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcbiAgICAgIGNvbnN0IHNjcm9sbGJhclggPVxuICAgICAgICBNYXRoLnJvdW5kKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSArXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgY29uc3QgcGFkZGluZ1Byb3AgPSBzY3JvbGxiYXJYID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGJvZHlTdHlsZSwge1xuICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgIFtwYWRkaW5nUHJvcF06ICcnLFxuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbXRlLXNjcm9sbC1sb2NrLS1hY3RpdmUnKTtcblxuICAgICAgaWYgKGlzSU9TKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYm9keVN0eWxlLCB7XG4gICAgICAgICAgcG9zaXRpb246ICcnLFxuICAgICAgICAgIHRvcDogJycsXG4gICAgICAgICAgbGVmdDogJycsXG4gICAgICAgICAgcmlnaHQ6ICcnLFxuICAgICAgICB9KTtcbiAgICAgICAgZ2xvYmFsVGhpcy5zY3JvbGxUbyhzY3JvbGxYLCBzY3JvbGxZKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZVBvcnRhbFNlcnZpY2UgPSBuZXcgX010ZVBvcnRhbFNlcnZpY2UoKTtcbiIsICJpbXBvcnQgeyBzaWduYWwgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5jbGFzcyBfTXRlSGlzdG9yeUFwaVNlcnZpY2Uge1xuICBwcml2YXRlIGluaXRpYWxpemVkID0gZmFsc2U7XG4gIHByaXZhdGUgY2hhbmdlU2lnbmFsID0gc2lnbmFsKCk7XG4gIHByaXZhdGUgcHJldkhyZWY6IHN0cmluZztcblxuICBwdWJsaWMgc3RhdGVDaGFuZ2VzKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHJldHVybiB0aGlzLmNoYW5nZVNpZ25hbDtcbiAgfVxuXG4gIHByaXZhdGUgZm9yd2FyZEFwcGx5ID0gKHRhcmdldCwgdGhpc0FyZywgYXJnQXJyYXkpID0+IHtcbiAgICBjb25zdCByZXMgPSB0YXJnZXQuYXBwbHkodGhpc0FyZywgYXJnQXJyYXkpO1xuICAgIC8vIE9ubHkgZW1pdCBhIHN0YXRlIGNoYW5nZSBpZiB0aGUgaHJlZiBkaWZmZXJzIGZyb20gdGhlIGxhc3QgZW1pc3Npb25cbiAgICBpZiAodGhpcy5wcmV2SHJlZiAhPT0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcbiAgICAgIHRoaXMucHJldkhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgIHRoaXMuY2hhbmdlU2lnbmFsLnNldCh0aGlzLnByZXZIcmVmKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgLy8gTGlzdGVuIGZvciBiYWNrIGV2ZW50cyB3aXRoIHBvcHN0YXRlIGV2ZW50XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlU2lnbmFsLnNldCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICB9KTtcblxuICAgICAgLy8gUGF0Y2ggSGlzdG9yeSBBUEkgbWV0aG9kcyB0byBlbnN1cmUgd2UgZW1pdCBhbnl0aW1lIHRoZWlyIHN0YXRlIGlzIGNoYW5nZWRcbiAgICAgIC8vIFRoaXMgaXMgbmVjY2VzYXJ5IGJlY2Fpc2UgdGhlIGBwb3BzdGF0ZWAgZXZlbnQgaXMgbm90IHJlbGlhYmx5IGNhbGxlZCBhY3Jvc3MgYnJvd3NlcnMgd2hlbmV2ZXIgdGhlIGhpc3RvcnkgQVBJIGlzIHVzZWRcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2sgPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkuYmFjaywgeyBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHkgfSk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5mb3J3YXJkID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LmZvcndhcmQsIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkuZ28gPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkuZ28sIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSwgeyBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHkgfSk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlLCB7XG4gICAgICAgIGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlSGlzdG9yeUFwaVNlcnZpY2UgPSBuZXcgX010ZUhpc3RvcnlBcGlTZXJ2aWNlKCk7XG4iLCAiaW1wb3J0IHsgaXNTc3IgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgdHlwZSBNdGVEYXRlRm9ybWF0T3B0aW9ucyA9IEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zICYge1xuICBsYW5nPzogc3RyaW5nO1xuICBmb3JtYXQ/OlxuICAgIHwgJ3Nob3J0J1xuICAgIHwgJ21lZGl1bSdcbiAgICB8ICdsb25nJ1xuICAgIHwgJ2Z1bGwnXG4gICAgfCAnc2hvcnREYXRlJ1xuICAgIHwgJ21lZGl1bURhdGUnXG4gICAgfCAnbG9uZ0RhdGUnXG4gICAgfCAnZnVsbERhdGUnXG4gICAgfCAnc2hvcnRUaW1lJ1xuICAgIHwgJ21lZGl1bVRpbWUnXG4gICAgfCAnbG9uZ1RpbWUnXG4gICAgfCAnZnVsbFRpbWUnO1xufTtcblxuZXhwb3J0IHR5cGUgTXRlTnVtYmVyRm9ybWF0T3B0aW9ucyA9IEludGwuTnVtYmVyRm9ybWF0T3B0aW9ucyAmIHsgbGFuZz86IHN0cmluZyB9O1xuXG5jbGFzcyBfTXRlTG9jYWxpemVTZXJ2aWNlIHtcbiAgLy8gQXNzdW1lIGBlbmAgbGFuZyBmb3Igbm93IGFzIGEgZmFsbGJhY2sgdW50aWwgd2Ugcm9sbGJhY2sgd2lkZXIgc3VwcG9ydCBmb3IgaTExbiB3aGVuIG5lY2Vzc2FyeVxuICBwcml2YXRlIGxhbmd1YWdlID0gJ2VuJztcbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICBpZiAoIWlzU3NyKCkgJiYgIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5sYW5ndWFnZSA9IGAke2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nIHx8IG5hdmlnYXRvci5sYW5ndWFnZX1gLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvcm1hdE51bWJlcihudW1iZXJUb0Zvcm1hdDogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogTXRlTnVtYmVyRm9ybWF0T3B0aW9ucyk6IHN0cmluZyB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgY29uc3QgbGFuZyA9IG9wdGlvbnM/LmxhbmcgPyBvcHRpb25zLmxhbmcgOiB0aGlzLmxhbmd1YWdlO1xuICAgIG51bWJlclRvRm9ybWF0ID0gTnVtYmVyKG51bWJlclRvRm9ybWF0KTtcbiAgICAvLyBFbnN1cmUgbm8gbnVsbCBvcHRpb25zIGV4aXN0XG4gICAgY29uc3QgZmluYWxPcHRpb25zID0ge1xuICAgICAgbGFuZzogb3B0aW9ucy5sYW5nID8/IHVuZGVmaW5lZCxcbiAgICAgIHN0eWxlOiBvcHRpb25zLnN0eWxlID8/IHVuZGVmaW5lZCxcbiAgICAgIGN1cnJlbmN5OiBvcHRpb25zLmN1cnJlbmN5ID8/IHVuZGVmaW5lZCxcbiAgICAgIGN1cnJlbmN5RGlzcGxheTogb3B0aW9ucy5jdXJyZW5jeURpc3BsYXkgPz8gdW5kZWZpbmVkLFxuICAgICAgdXNlR3JvdXBpbmc6IG9wdGlvbnMudXNlR3JvdXBpbmcgPz8gdW5kZWZpbmVkLFxuICAgICAgbWluaW11bUludGVnZXJEaWdpdHM6IG9wdGlvbnMubWluaW11bUludGVnZXJEaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBvcHRpb25zLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IG9wdGlvbnMubWF4aW11bUZyYWN0aW9uRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbmltdW1TaWduaWZpY2FudERpZ2l0czogb3B0aW9ucy5taW5pbXVtU2lnbmlmaWNhbnREaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzOiBvcHRpb25zLm1heGltdW1TaWduaWZpY2FudERpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgfTtcbiAgICByZXR1cm4gaXNOYU4obnVtYmVyVG9Gb3JtYXQpXG4gICAgICA/ICcnXG4gICAgICA6IG5ldyBJbnRsLk51bWJlckZvcm1hdChsYW5nLCBmaW5hbE9wdGlvbnMpLmZvcm1hdChudW1iZXJUb0Zvcm1hdCk7XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0RGF0ZShkYXRlVG9Gb3JtYXQ6IERhdGUgfCBzdHJpbmcsIG9wdGlvbnM/OiBNdGVEYXRlRm9ybWF0T3B0aW9ucykge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIGNvbnN0IGxhbmcgPSBvcHRpb25zPy5sYW5nID8gb3B0aW9ucy5sYW5nIDogdGhpcy5sYW5ndWFnZTtcbiAgICBjb25zdCBmb3JtYXR0ZWRPcHRpb25zID0geyAuLi4ob3B0aW9ucyA/PyB7fSksIC4uLnRoaXMuZ2V0RGVmaW5lZERhdGVGb3JtYXQob3B0aW9ucz8uZm9ybWF0KSB9O1xuICAgIC8vIEVuc3VyZSBubyBudWxsIG9wdGlvbnMgZXhpc3RcbiAgICBjb25zdCBmaW5hbE9wdGlvbnMgPSB7XG4gICAgICBsYW5nOiBmb3JtYXR0ZWRPcHRpb25zLmxhbmcgPz8gdW5kZWZpbmVkLFxuICAgICAgd2Vla2RheTogZm9ybWF0dGVkT3B0aW9ucy53ZWVrZGF5ID8/IHVuZGVmaW5lZCxcbiAgICAgIGVyYTogZm9ybWF0dGVkT3B0aW9ucy5lcmEgPz8gdW5kZWZpbmVkLFxuICAgICAgeWVhcjogZm9ybWF0dGVkT3B0aW9ucy55ZWFyID8/IHVuZGVmaW5lZCxcbiAgICAgIG1vbnRoOiBmb3JtYXR0ZWRPcHRpb25zLm1vbnRoID8/IHVuZGVmaW5lZCxcbiAgICAgIGRheTogZm9ybWF0dGVkT3B0aW9ucy5kYXkgPz8gdW5kZWZpbmVkLFxuICAgICAgaG91cjogZm9ybWF0dGVkT3B0aW9ucy5ob3VyID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbnV0ZTogZm9ybWF0dGVkT3B0aW9ucy5taW51dGUgPz8gdW5kZWZpbmVkLFxuICAgICAgc2Vjb25kOiBmb3JtYXR0ZWRPcHRpb25zLnNlY29uZCA/PyB1bmRlZmluZWQsXG4gICAgICBmcmFjdGlvbmFsU2Vjb25kRGlnaXRzOiBmb3JtYXR0ZWRPcHRpb25zLmZyYWN0aW9uYWxTZWNvbmREaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgdGltZVpvbmVOYW1lOiBmb3JtYXR0ZWRPcHRpb25zLnRpbWVab25lTmFtZSA/PyB1bmRlZmluZWQsXG4gICAgICB0aW1lWm9uZTogZm9ybWF0dGVkT3B0aW9ucy50aW1lWm9uZSA/PyB1bmRlZmluZWQsXG4gICAgICBob3VyMTI6IGZvcm1hdHRlZE9wdGlvbnMuaG91cjEyID8/IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1hdDogZm9ybWF0dGVkT3B0aW9ucy5mb3JtYXQgPz8gdW5kZWZpbmVkLFxuICAgIH07XG4gICAgZGF0ZVRvRm9ybWF0ID0gbmV3IERhdGUoZGF0ZVRvRm9ybWF0KTtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobGFuZywgZmluYWxPcHRpb25zKS5mb3JtYXQoZGF0ZVRvRm9ybWF0KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmaW5lZERhdGVGb3JtYXQoXG4gICAgZm9ybWF0OlxuICAgICAgfCAnc2hvcnQnXG4gICAgICB8ICdtZWRpdW0nXG4gICAgICB8ICdsb25nJ1xuICAgICAgfCAnZnVsbCdcbiAgICAgIHwgJ3Nob3J0RGF0ZSdcbiAgICAgIHwgJ21lZGl1bURhdGUnXG4gICAgICB8ICdsb25nRGF0ZSdcbiAgICAgIHwgJ2Z1bGxEYXRlJ1xuICAgICAgfCAnc2hvcnRUaW1lJ1xuICAgICAgfCAnbWVkaXVtVGltZSdcbiAgICAgIHwgJ2xvbmdUaW1lJ1xuICAgICAgfCAnZnVsbFRpbWUnXG4gICk6IE10ZURhdGVGb3JtYXRPcHRpb25zIHtcbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgY2FzZSAnc2hvcnQnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2xvbmcnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdmdWxsJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ3Nob3J0RGF0ZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdtZWRpdW1EYXRlJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdsb25nRGF0ZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdmdWxsRGF0ZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnc2hvcnRUaW1lJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdtZWRpdW1UaW1lJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdsb25nVGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2Z1bGxUaW1lJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgZnJhY3Rpb25hbFNlY29uZERpZ2l0czogMixcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVMb2NhbGl6ZVNlcnZpY2UgPSBuZXcgX010ZUxvY2FsaXplU2VydmljZSgpO1xuIiwgImltcG9ydCB7IFJlYWN0aXZlQ29udHJvbGxlciwgUmVhY3RpdmVDb250cm9sbGVySG9zdCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgTXRlUG9ydGFsU2VydmljZSwgUG9ydGFsT3B0aW9ucywgUG9ydGFsU3RhY2sgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydGFsQ29udHJvbGxlck9wdGlvbnMge1xuICBzdGFjazogUG9ydGFsU3RhY2s7XG59XG5cbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG4vKipcbiAqIENvbnRyb2xsZXIgdXNlZCB0byBhdHRhY2ggYW55IGVsZW1lbnQgdG8gYSBwb3J0YWwgc3RhY2suXG4gKlxuICogVXNlIHRoaXMgY29udHJvbGxlciB3aGVuIHlvdSBuZWVkIHRvIHJlbmRlciBhbiBvdmVybGF5IGF0IHRoZSByb290IG9mIHRoZSBET00uXG4gKiBUbyBhdm9pZCBwb3NpdGlvbmluZyBjb25mbGljdHMgb3Igb3ZlcmZsb3cgY2xpcHBpbmcuXG4gKi9cbmV4cG9ydCBjbGFzcyBQb3J0YWxDb250cm9sbGVyIGltcGxlbWVudHMgUmVhY3RpdmVDb250cm9sbGVyLCBFbGVtZW50UG9ydGFsQ29udHJvbGxlciB7XG4gIC8qKiBAaWdub3JlICovXG4gIGlkID0gbmV4dFVuaXF1ZUlkKys7XG5cbiAgLyoqXG4gICAqIFVzZWQgYnkgdGhlIE10ZVBvcnRhbFNlcnZpY2UgdG8gY2FjaGUgdGhpcyBlbGVtZW50cyBwb3J0YWxlZCBwYXJlbnQgcmVmZXJlbmNlXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHBhcmVudFBvcnRhbGVkRWxlbWVudDogRWxlbWVudDtcblxuICAvKipcbiAgICogRmxhZyB0byBoZWxwIGNoZWNrIGlmIGEgZGlzY29ubmVjdGVkIGNhbGxiYWNrIGhhcyBiZWVuIGZpcmVkXG4gICAqIGJlY2F1c2Ugb2YgYSBwb3J0YWxpbmcgb3BlcmF0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBpZ25vcmVOZXh0RGlzY29ubmVjdCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGhvc3Q6IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgJiBFbGVtZW50LFxuICAgIHB1YmxpYyBvcHRpb25zOiBQb3J0YWxDb250cm9sbGVyT3B0aW9ucyA9IHsgc3RhY2s6ICdvdmVybGF5JyB9XG4gICkge1xuICAgIHRoaXMuaG9zdC5hZGRDb250cm9sbGVyKHRoaXMpO1xuICB9XG5cbiAgLyoqIFJlcXVlc3RzIHRoZSBwb3J0YWwgc2VydmljZSBhcHBlbmQgdGhpcyBpdGVtIHRvIHRoZSBjb25maWd1cmVkIHN0YWNrICovXG4gIHB1YmxpYyBhcHBlbmRUb1N0YWNrKGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLmhvc3QsIG9wdGlvbnM6IFBvcnRhbE9wdGlvbnMgPSB7fSkge1xuICAgIC8vIE9ubHkgaWdub3JlIHRoZSBuZXh0IGRpc2Nvbm5lY3QgaWYgdGhlIGVsZW1lbnQgYmVpbmcgcG9ydGFsZWQgaXMgY3VycmVudGx5IGNvbm5lY3RlZCB0byB0aGUgRE9NXG4gICAgaWYgKGVsZW1lbnQ/LmlzQ29ubmVjdGVkKSB7XG4gICAgICB0aGlzLmlnbm9yZU5leHREaXNjb25uZWN0ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIE10ZVBvcnRhbFNlcnZpY2UuYXBwZW5kVG9TdGFjayh0aGlzLCBlbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKiBSZXF1ZXN0cyB0aGUgcG9ydGFsIHNlcnZpY2UgcmVtb3ZlIHRoaXMgZWxlbWVudCBmcm9tIHRoZSBjb25maWd1cmVkIHN0YWNrICovXG4gIHB1YmxpYyByZW1vdmVGcm9tU3RhY2soZWxlbWVudDogRWxlbWVudCA9IHRoaXMuaG9zdCkge1xuICAgIHRoaXMuaWdub3JlTmV4dERpc2Nvbm5lY3QgPSBmYWxzZTtcbiAgICByZXR1cm4gTXRlUG9ydGFsU2VydmljZS5yZW1vdmVGcm9tU3RhY2sodGhpcywgZWxlbWVudCk7XG4gIH1cblxuICAvKiogTWFrZXMgYSBiYWNrZHJvcCBhc3NvY2lhdGVkIHdpdGggYSBwb3J0YWxlZCBlbGVtZW50IHZpc2libGUgaWYgaXQgZXhpc3RzICovXG4gIHB1YmxpYyBzaG93QmFja2Ryb3AoZWxlbWVudDogRWxlbWVudCA9IHRoaXMuaG9zdCkge1xuICAgIHJldHVybiBNdGVQb3J0YWxTZXJ2aWNlLnNob3dCYWNrZHJvcCh0aGlzLCBlbGVtZW50KTtcbiAgfVxuXG4gIC8qKiBIaWRlcyBhIGJhY2tkcm9wIGFzc29jaWF0ZWQgd2l0aCBhIHBvcnRhbGVkIGVsZW1lbnQgaWYgaXQgZXhpc3RzICovXG4gIHB1YmxpYyBoaWRlQmFja2Ryb3AoZWxlbWVudDogRWxlbWVudCA9IHRoaXMuaG9zdCkge1xuICAgIHJldHVybiBNdGVQb3J0YWxTZXJ2aWNlLmhpZGVCYWNrZHJvcCh0aGlzLCBlbGVtZW50KTtcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIHRoZSBpbnRlcnRuZXNzIGEgYmFja2Ryb3AgaWYgaXQgZXhpc3RzICh3aGV0aGVyIG9yIG5vdCB0aGUgdXNlciBjYW4gY2xpY2sgdGhyb3VnaCBpdCkgKi9cbiAgcHVibGljIHNldEJhY2tkcm9wSW5lcnRuZXNzKGluZXJ0OiBib29sZWFuLCBlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5ob3N0KSB7XG4gICAgcmV0dXJuIE10ZVBvcnRhbFNlcnZpY2Uuc2V0QmFja2Ryb3BJbmVydG5lc3ModGhpcywgZWxlbWVudCwgaW5lcnQpO1xuICB9XG5cbiAgaG9zdENvbm5lY3RlZCgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnN0YWNrKSB7XG4gICAgICBNdGVQb3J0YWxTZXJ2aWNlLmluaXRpYWxpemVTdGFjayh0aGlzLm9wdGlvbnMuc3RhY2spO1xuICAgIH1cbiAgfVxuXG4gIGhvc3REaXNjb25uZWN0ZWQoKSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIG5leHQgZGlzY29ubmVjdCBzaG91bGQgYmUgaWdub3JlZCBiZWNhdXNlIGl0IGlzIHRyaWdnZWRcbiAgICAvLyBmcm9tIGEgcG9ydGFsaW5nIG9wZXJhdGlvblxuICAgIGlmICh0aGlzLmlnbm9yZU5leHREaXNjb25uZWN0KSB7XG4gICAgICB0aGlzLmlnbm9yZU5leHREaXNjb25uZWN0ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIE10ZVBvcnRhbFNlcnZpY2UucmVtb3ZlQ29udHJvbGxlcih0aGlzKTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0IH0gZnJvbSAnbGl0JztcblxuaW50ZXJmYWNlIENsb3NhYmxlRWxlbWVudCB7XG4gIGNsb3NlOiAoKSA9PiBhbnkgfCBQcm9taXNlPGFueT47XG59XG5cbi8qKlxuICogVGhpcyBjb250cm9sbGVyIHdhdGNoZXMgZm9yIGEgYGRvQ2xvc2VgIGV2ZW50IHRvIGJlIHRocm93biBieSBhbnkgY2hpbGQgZWxlbWVudHMuXG4gKiBXaGVuIGEgYGRvQ2xvc2VgIGV2ZW50IGlzIGVtaXR0ZWQgaXQgd2lsbCBhdHRlbXB0IHRvIGNsb3NlIHRoZSBob3N0LlxuICovXG5leHBvcnQgY2xhc3MgRGV0ZWN0Q2hpbGRDbG9zZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgJiBFbGVtZW50ICYgQ2xvc2FibGVFbGVtZW50KSB7XG4gICAgdGhpcy5ob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogT25seSB0cmlnZ2VyIGEgY2xvc2UgaWYgdGhlIHRhcmdldCBpcyBub3QgdGhpcyBlbGVtZW50XG4gICAqIGFzIHRoaXMgaW1wbGllcyB0aGUgY2xvc2Ugd2FzIHRyaWdnZXJlZCBmcm9tIGEgY2hpbGQgZWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBjaGlsZE9ubHlDbG9zZSA9IChlOiBDdXN0b21FdmVudDxhbnk+KSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzLmhvc3QpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmhvc3QuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgaG9zdENvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcignZG9DbG9zZScsIHRoaXMuY2hpbGRPbmx5Q2xvc2UsIHRydWUpO1xuICB9XG5cbiAgaG9zdERpc2Nvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmhvc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignZG9DbG9zZScsIHRoaXMuY2hpbGRPbmx5Q2xvc2UsIHRydWUpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgQ29yZVBhbGV0dGUsIERlbnNpdHlPcHRpb25zLCBQcmVzZXRzLCBTaXplT3B0aW9ucywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByZXNldCB7XG4gIHNpemU/OiBTaXplT3B0aW9ucztcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgZGVuc2l0eT86IERlbnNpdHlPcHRpb25zO1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgYnV0dG9uUHJlc2V0czogUHJlc2V0czxCdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvbkJ1dHRvblByZXNldCB7XG4gIHNpemU/OiBTaXplT3B0aW9ucztcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgZGVuc2l0eT86IERlbnNpdHlPcHRpb25zO1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgaWNvbkJ1dHRvblByZXNldHM6IFByZXNldHM8SWNvbkJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBTdGF0dXNQYWxldHRlIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJY29uUHJlc2V0IHtcbiAgY29sb3I/OiBTdGF0dXNQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgaWNvblByZXNldHM6IFByZXNldHM8SWNvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBTdGF0dXNQYWxldHRlIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9ncmVzc0JhclByZXNldCB7XG4gIGNvbG9yPzogU3RhdHVzUGFsZXR0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzQmFyUHJlc2V0czogUHJlc2V0czxQcm9ncmVzc0JhclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFN0YXR1c1BhbGV0dGUgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzU3Bpbm5lclByZXNldCB7XG4gIGNvbG9yPzogU3RhdHVzUGFsZXR0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzU3Bpbm5lclByZXNldHM6IFByZXNldHM8UHJvZ3Jlc3NTcGlubmVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9vbGJhclByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgdG9vbGJhclByZXNldHM6IFByZXNldHM8VG9vbGJhclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYXJkUHJlc2V0IHtcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbiAgd2l0aFNoYWRvdz86IGJvb2xlYW47XG4gIHdpdGhvdXRTaGFkb3c/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRCdXR0b25QcmVzZXQgZXh0ZW5kcyBDYXJkUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBjYXJkUHJlc2V0czogUHJlc2V0czxDYXJkUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgd2l0aG91dFNoYWRvdzogdHJ1ZSxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgY29uc3QgY2FyZEJ1dHRvblByZXNldHM6IFByZXNldHM8Q2FyZEJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIHdpdGhvdXRTaGFkb3c6IHRydWUsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUcmVlUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCB0cmVlUHJlc2V0czogUHJlc2V0czxUcmVlUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IENvcmVQYWxldHRlLCBQcmVzZXRzLCBTaXplT3B0aW9ucywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ1ByZXNldHMge1xuICBzaXplPzogU2l6ZU9wdGlvbnM7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCB0YWdQcmVzZXRzOiBQcmVzZXRzPFRhZ1ByZXNldHM+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFkZ2VQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGJhZGdlUHJlc2V0czogUHJlc2V0czxCYWRnZVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBDb3JlUGFsZXR0ZSwgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlua1ByZXNldCB7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG4gIGZvbnRXZWlnaHQ/OiAncmVndWxhcicgfCAnYm9sZCc7XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rUHJlc2V0czogUHJlc2V0czxMaW5rUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGFsZXJ0UHJlc2V0czogUHJlc2V0czxBbGVydFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgaW5wdXRQcmVzZXRzOiBQcmVzZXRzPElucHV0UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdlclByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgZHJhd2VyUHJlc2V0czogUHJlc2V0czxEcmF3ZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXNpZGVQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGFzaWRlUHJlc2V0czogUHJlc2V0czxBc2lkZVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJlYWRjcnVtYkl0ZW1QcmVzZXQge1xuICBmb250V2VpZ2h0PzogJ3JlZ3VsYXInIHwgJ2JvbGQnO1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xuICB3aXRob3V0VW5kZXJsaW5lPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGJyZWFkY3J1bWJJdGVtUHJlc2V0czogUHJlc2V0czxCcmVhZGNydW1iSXRlbVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7XG4gICAgd2l0aG91dFVuZGVybGluZTogdHJ1ZSxcbiAgfSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbW9kYWxQcmVzZXRzOiBQcmVzZXRzPE1vZGFsUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIENvcmVQYWxldHRlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tib3hQcmVzZXQge1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgY2hlY2tib3hQcmVzZXRzOiBQcmVzZXRzPENoZWNrYm94UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhZGlvUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCByYWRpb1ByZXNldHM6IFByZXNldHM8UmFkaW9QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2Um9vdFByZXNldCB7XG4gIG1vYmlsZUJyZWFrcG9pbnQ/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnO1xuICBpbnZlcnNlPzogJ2hlYWRlcicgfCAnc2lkZWJhcic7XG4gIHByZWZlclNpZGViYXI/OiAnb3BlbmVkJyB8ICdjbG9zZWQnO1xufVxuXG5leHBvcnQgY29uc3QgbmF2Um9vdFByZXNldHM6IFByZXNldHM8TmF2Um9vdFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHtcbiAgICBpbnZlcnNlOiAnc2lkZWJhcicsXG4gIH0sXG4gIGN4OiB7XG4gICAgcHJlZmVyU2lkZWJhcjogJ2Nsb3NlZCcsXG4gIH0sXG4gIHB4OiB7XG4gICAgaW52ZXJzZTogJ3NpZGViYXInLFxuICB9LFxuICByeDoge1xuICAgIHByZWZlclNpZGViYXI6ICdjbG9zZWQnLFxuICB9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZIZWFkZXJQcmVzZXQge1xuICB3aXRoQ29udGFpbmVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IG5hdkhlYWRlclByZXNldHM6IFByZXNldHM8TmF2SGVhZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdlN1YkhlYWRlclByZXNldCB7XG4gIHdpdGhDb250YWluZXI/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbmF2U3ViSGVhZGVyUHJlc2V0czogUHJlc2V0czxOYXZTdWJIZWFkZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2U2lkZWJhclByZXNldCB7XG4gIGhpZGVVbnRpbFRyYW5zaXRpb24/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbmF2U2lkZWJhclByZXNldHM6IFByZXNldHM8TmF2U2lkZWJhclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGhpZGVVbnRpbFRyYW5zaXRpb246IHRydWUsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHtcbiAgICBoaWRlVW50aWxUcmFuc2l0aW9uOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZDb250ZW50UHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXZDb250ZW50UHJlc2V0czogUHJlc2V0czxOYXZDb250ZW50UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkZvb3RlclByZXNldCB7XG4gIHdpdGhDb250YWluZXI/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbmF2Rm9vdGVyUHJlc2V0czogUHJlc2V0czxOYXZGb290ZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2QnV0dG9uUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXZCdXR0b25QcmVzZXRzOiBQcmVzZXRzPE5hdkJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZJY29uQnV0dG9uUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXZJY29uQnV0dG9uUHJlc2V0czogUHJlc2V0czxOYXZJY29uQnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkl0ZW1QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkl0ZW1QcmVzZXRzOiBQcmVzZXRzPE5hdkl0ZW1QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvbkdyb3VwUHJlc2V0IHtcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGJ1dHRvbkdyb3VwUHJlc2V0czogUHJlc2V0czxCdXR0b25Hcm91cFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdGNoUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBzd2l0Y2hQcmVzZXRzOiBQcmVzZXRzPFN3aXRjaFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlU2VsZWN0UHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXRpdmVTZWxlY3RQcmVzZXRzOiBQcmVzZXRzPE5hdGl2ZVNlbGVjdFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dGFyZWFQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHRleHRhcmVhUHJlc2V0czogUHJlc2V0czxUZXh0YXJlYVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2tlbGV0b25QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHNrZWxldG9uUHJlc2V0czogUHJlc2V0czxTa2VsZXRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBzbGlkZXJQcmVzZXRzOiBQcmVzZXRzPFNsaWRlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFuZ2VTbGlkZXJQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHJhbmdlU2xpZGVyUHJlc2V0czogUHJlc2V0czxSYW5nZVNsaWRlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VnbWVudGVkQ29udHJvbFByZXNldCB7fVxuXG5leHBvcnQgY29uc3Qgc2VnbWVudGVkQ29udHJvbFByZXNldHM6IFByZXNldHM8U2VnbWVudGVkQ29udHJvbFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBidXR0b25QcmVzZXRzLCBpY29uQnV0dG9uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9idXR0b24vYnV0dG9uLnByZXNldHMnO1xuaW1wb3J0IHsgaWNvblByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvaWNvbi9pY29uLnByZXNldHMnO1xuaW1wb3J0IHsgcHJvZ3Jlc3NCYXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIucHJlc2V0cyc7XG5pbXBvcnQgeyBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5wcmVzZXRzJztcbmltcG9ydCB7IHRvb2xiYXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3Rvb2xiYXIvdG9vbGJhci5wcmVzZXRzJztcbmltcG9ydCB7IGNhcmRQcmVzZXRzLCBjYXJkQnV0dG9uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9jYXJkL2NhcmQucHJlc2V0cyc7XG5pbXBvcnQgeyB0cmVlUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy90cmVlL3RyZWUucHJlc2V0cyc7XG5pbXBvcnQgeyB0YWdQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3RhZy90YWcucHJlc2V0cyc7XG5pbXBvcnQgeyBiYWRnZVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYmFkZ2UvYmFkZ2UucHJlc2V0cyc7XG5pbXBvcnQgeyBsaW5rUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9saW5rL2xpbmsucHJlc2V0cyc7XG5pbXBvcnQgeyBhbGVydFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYWxlcnQvYWxlcnQucHJlc2V0cyc7XG5pbXBvcnQgeyBpbnB1dFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvaW5wdXQvaW5wdXQucHJlc2V0cyc7XG5pbXBvcnQgeyBkcmF3ZXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2RyYXdlci9kcmF3ZXIucHJlc2V0cyc7XG5pbXBvcnQgeyBhc2lkZVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYXNpZGUvYXNpZGUucHJlc2V0cyc7XG5pbXBvcnQgeyBicmVhZGNydW1iSXRlbVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi1pdGVtLnByZXNldHMnO1xuaW1wb3J0IHsgbW9kYWxQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL21vZGFsL21vZGFsLnByZXNldHMnO1xuaW1wb3J0IHsgY2hlY2tib3hQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2NoZWNrYm94L2NoZWNrYm94LnByZXNldHMnO1xuaW1wb3J0IHsgcmFkaW9QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3JhZGlvL3JhZGlvLnByZXNldHMnO1xuaW1wb3J0IHtcbiAgbmF2Um9vdFByZXNldHMsXG4gIG5hdkhlYWRlclByZXNldHMsXG4gIG5hdlN1YkhlYWRlclByZXNldHMsXG4gIG5hdlNpZGViYXJQcmVzZXRzLFxuICBuYXZDb250ZW50UHJlc2V0cyxcbiAgbmF2Rm9vdGVyUHJlc2V0cyxcbiAgbmF2QnV0dG9uUHJlc2V0cyxcbiAgbmF2SWNvbkJ1dHRvblByZXNldHMsXG4gIG5hdkl0ZW1QcmVzZXRzLFxufSBmcm9tICcuLi8uLi9hdG9taWMvbmF2L25hdi5wcmVzZXRzJztcbmltcG9ydCB7IGJ1dHRvbkdyb3VwUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLnByZXNldHMnO1xuaW1wb3J0IHsgc3dpdGNoUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9zd2l0Y2gvc3dpdGNoLnByZXNldHMnO1xuaW1wb3J0IHsgbmF0aXZlU2VsZWN0UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9uYXRpdmUtc2VsZWN0L25hdGl2ZS1zZWxlY3QucHJlc2V0cyc7XG5pbXBvcnQgeyB0ZXh0YXJlYVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdGV4dGFyZWEvdGV4dGFyZWEucHJlc2V0cyc7XG5pbXBvcnQgeyBza2VsZXRvblByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc2tlbGV0b24vc2tlbGV0b24ucHJlc2V0cyc7XG5pbXBvcnQgeyBzbGlkZXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3NsaWRlci9zbGlkZXIucHJlc2V0cyc7XG5pbXBvcnQgeyByYW5nZVNsaWRlclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcmFuZ2Utc2xpZGVyL3JhbmdlLXNsaWRlci5wcmVzZXRzJztcbmltcG9ydCB7IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3NlZ21lbnRlZC1jb250cm9sL3NlZ21lbnRlZC1jb250cm9sLnByZXNldHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vcnRhclByZXNldFRoZW1lIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb2xvclNjaGVtZTogJ3N5c3RlbScgfCAnbGlnaHQnIHwgJ2RhcmsnO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFByZXNldCA9IHtcbiAgcHJlc2V0OiAnZGVmYXVsdCcsXG4gIHRoZW1lOiB7XG4gICAgbmFtZTogJ3B4JyxcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSBhcyBNb3J0YXJQcmVzZXRUaGVtZSxcbiAgTXRlQnV0dG9uOiBidXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUljb25CdXR0b246IGljb25CdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUljb246IGljb25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVByb2dyZXNzQmFyOiBwcm9ncmVzc0JhclByZXNldHMuZGVmYXVsdCxcbiAgTXRlUHJvZ3Jlc3NTcGlubmVyOiBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVRvb2xiYXI6IHRvb2xiYXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUNhcmQ6IGNhcmRQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUNhcmRCdXR0b246IGNhcmRCdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVRyZWU6IHRyZWVQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVRhZzogdGFnUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVCYWRnZTogYmFkZ2VQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUxpbms6IGxpbmtQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUFsZXJ0OiBhbGVydFByZXNldHMuZGVmYXVsdCxcbiAgTXRlSW5wdXQ6IGlucHV0UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVEcmF3ZXI6IGRyYXdlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlQXNpZGU6IGFzaWRlUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVCcmVhZGNydW1iSXRlbTogYnJlYWRjcnVtYkl0ZW1QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU1vZGFsOiBtb2RhbFByZXNldHMuZGVmYXVsdCxcbiAgTXRlQ2hlY2tib3g6IGNoZWNrYm94UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVSYWRpbzogcmFkaW9QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdlJvb3Q6IG5hdlJvb3RQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkhlYWRlcjogbmF2SGVhZGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZTdWJIZWFkZXI6IG5hdlN1YkhlYWRlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2U2lkZWJhcjogbmF2U2lkZWJhclByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2Q29udGVudDogbmF2Q29udGVudFByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2Rm9vdGVyOiBuYXZGb290ZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkJ1dHRvbjogbmF2QnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZJY29uQnV0dG9uOiBuYXZJY29uQnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZJdGVtOiBuYXZJdGVtUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVCdXR0b25Hcm91cDogYnV0dG9uR3JvdXBQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVN3aXRjaDogc3dpdGNoUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXRpdmVTZWxlY3Q6IG5hdGl2ZVNlbGVjdFByZXNldHMuZGVmYXVsdCxcbiAgTXRlVGV4dGFyZWE6IHRleHRhcmVhUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVTa2VsZXRvbjogc2tlbGV0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVNsaWRlcjogc2xpZGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVSYW5nZVNsaWRlcjogcmFuZ2VTbGlkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVNlZ21lbnRlZENvbnRyb2w6IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzLmRlZmF1bHQsXG59O1xuXG5leHBvcnQgdHlwZSBNb3J0YXJQcmVzZXQgPSB0eXBlb2YgZGVmYXVsdFByZXNldDtcblxuZXhwb3J0IGNvbnN0IHB4UHJlc2V0OiBNb3J0YXJQcmVzZXQgPSB7XG4gIHByZXNldDogJ3B4JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAncHgnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9LFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMucHgsXG4gIE10ZUljb25CdXR0b246IGljb25CdXR0b25QcmVzZXRzLnB4LFxuICBNdGVJY29uOiBpY29uUHJlc2V0cy5weCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5weCxcbiAgTXRlUHJvZ3Jlc3NTcGlubmVyOiBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzLnB4LFxuICBNdGVUb29sYmFyOiB0b29sYmFyUHJlc2V0cy5weCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMucHgsXG4gIE10ZUNhcmRCdXR0b246IGNhcmRCdXR0b25QcmVzZXRzLnB4LFxuICBNdGVUcmVlOiB0cmVlUHJlc2V0cy5weCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLnB4LFxuICBNdGVCYWRnZTogYmFkZ2VQcmVzZXRzLnB4LFxuICBNdGVMaW5rOiBsaW5rUHJlc2V0cy5weCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5weCxcbiAgTXRlSW5wdXQ6IGlucHV0UHJlc2V0cy5weCxcbiAgTXRlRHJhd2VyOiBkcmF3ZXJQcmVzZXRzLnB4LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLnB4LFxuICBNdGVCcmVhZGNydW1iSXRlbTogYnJlYWRjcnVtYkl0ZW1QcmVzZXRzLnB4LFxuICBNdGVNb2RhbDogbW9kYWxQcmVzZXRzLnB4LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLnB4LFxuICBNdGVSYWRpbzogcmFkaW9QcmVzZXRzLnB4LFxuICBNdGVOYXZSb290OiBuYXZSb290UHJlc2V0cy5weCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLnB4LFxuICBNdGVOYXZTdWJIZWFkZXI6IG5hdlN1YkhlYWRlclByZXNldHMucHgsXG4gIE10ZU5hdlNpZGViYXI6IG5hdlNpZGViYXJQcmVzZXRzLnB4LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5weCxcbiAgTXRlTmF2Rm9vdGVyOiBuYXZGb290ZXJQcmVzZXRzLnB4LFxuICBNdGVOYXZCdXR0b246IG5hdkJ1dHRvblByZXNldHMucHgsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLnB4LFxuICBNdGVOYXZJdGVtOiBuYXZJdGVtUHJlc2V0cy5weCxcbiAgTXRlQnV0dG9uR3JvdXA6IGJ1dHRvbkdyb3VwUHJlc2V0cy5weCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLnB4LFxuICBNdGVOYXRpdmVTZWxlY3Q6IG5hdGl2ZVNlbGVjdFByZXNldHMucHgsXG4gIE10ZVRleHRhcmVhOiB0ZXh0YXJlYVByZXNldHMucHgsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMucHgsXG4gIE10ZVNsaWRlcjogc2xpZGVyUHJlc2V0cy5weCxcbiAgTXRlUmFuZ2VTbGlkZXI6IHJhbmdlU2xpZGVyUHJlc2V0cy5weCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMucHgsXG59O1xuXG5leHBvcnQgY29uc3QgY3hQcmVzZXQ6IE1vcnRhclByZXNldCA9IHtcbiAgcHJlc2V0OiAnY3gnLFxuICB0aGVtZToge1xuICAgIG5hbWU6ICdjeCcsXG4gICAgY29sb3JTY2hlbWU6ICdsaWdodCcsXG4gIH0sXG4gIE10ZUJ1dHRvbjogYnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMuY3gsXG4gIE10ZUljb246IGljb25QcmVzZXRzLmN4LFxuICBNdGVQcm9ncmVzc0JhcjogcHJvZ3Jlc3NCYXJQcmVzZXRzLmN4LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMuY3gsXG4gIE10ZVRvb2xiYXI6IHRvb2xiYXJQcmVzZXRzLmN4LFxuICBNdGVDYXJkOiBjYXJkUHJlc2V0cy5jeCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMuY3gsXG4gIE10ZVRyZWU6IHRyZWVQcmVzZXRzLmN4LFxuICBNdGVUYWc6IHRhZ1ByZXNldHMuY3gsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMuY3gsXG4gIE10ZUxpbms6IGxpbmtQcmVzZXRzLmN4LFxuICBNdGVBbGVydDogYWxlcnRQcmVzZXRzLmN4LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLmN4LFxuICBNdGVEcmF3ZXI6IGRyYXdlclByZXNldHMuY3gsXG4gIE10ZUFzaWRlOiBhc2lkZVByZXNldHMuY3gsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMuY3gsXG4gIE10ZU1vZGFsOiBtb2RhbFByZXNldHMuY3gsXG4gIE10ZUNoZWNrYm94OiBjaGVja2JveFByZXNldHMuY3gsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMuY3gsXG4gIE10ZU5hdlJvb3Q6IG5hdlJvb3RQcmVzZXRzLmN4LFxuICBNdGVOYXZIZWFkZXI6IG5hdkhlYWRlclByZXNldHMuY3gsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5jeCxcbiAgTXRlTmF2U2lkZWJhcjogbmF2U2lkZWJhclByZXNldHMuY3gsXG4gIE10ZU5hdkNvbnRlbnQ6IG5hdkNvbnRlbnRQcmVzZXRzLmN4LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMuY3gsXG4gIE10ZU5hdkJ1dHRvbjogbmF2QnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlTmF2SWNvbkJ1dHRvbjogbmF2SWNvbkJ1dHRvblByZXNldHMuY3gsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLmN4LFxuICBNdGVCdXR0b25Hcm91cDogYnV0dG9uR3JvdXBQcmVzZXRzLmN4LFxuICBNdGVTd2l0Y2g6IHN3aXRjaFByZXNldHMuY3gsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5jeCxcbiAgTXRlVGV4dGFyZWE6IHRleHRhcmVhUHJlc2V0cy5jeCxcbiAgTXRlU2tlbGV0b246IHNrZWxldG9uUHJlc2V0cy5jeCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLmN4LFxuICBNdGVSYW5nZVNsaWRlcjogcmFuZ2VTbGlkZXJQcmVzZXRzLmN4LFxuICBNdGVTZWdtZW50ZWRDb250cm9sOiBzZWdtZW50ZWRDb250cm9sUHJlc2V0cy5jeCxcbn07XG5cbmV4cG9ydCBjb25zdCByeFByZXNldDogTW9ydGFyUHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdyeCcsXG4gIHRoZW1lOiB7XG4gICAgbmFtZTogJ3J4JyxcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSxcbiAgTXRlQnV0dG9uOiBidXR0b25QcmVzZXRzLnJ4LFxuICBNdGVJY29uQnV0dG9uOiBpY29uQnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMucngsXG4gIE10ZVByb2dyZXNzQmFyOiBwcm9ncmVzc0JhclByZXNldHMucngsXG4gIE10ZVByb2dyZXNzU3Bpbm5lcjogcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cy5yeCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMucngsXG4gIE10ZUNhcmQ6IGNhcmRQcmVzZXRzLnJ4LFxuICBNdGVDYXJkQnV0dG9uOiBjYXJkQnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMucngsXG4gIE10ZVRhZzogdGFnUHJlc2V0cy5yeCxcbiAgTXRlQmFkZ2U6IGJhZGdlUHJlc2V0cy5yeCxcbiAgTXRlTGluazogbGlua1ByZXNldHMucngsXG4gIE10ZUFsZXJ0OiBhbGVydFByZXNldHMucngsXG4gIE10ZUlucHV0OiBpbnB1dFByZXNldHMucngsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5yeCxcbiAgTXRlQXNpZGU6IGFzaWRlUHJlc2V0cy5yeCxcbiAgTXRlQnJlYWRjcnVtYkl0ZW06IGJyZWFkY3J1bWJJdGVtUHJlc2V0cy5yeCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5yeCxcbiAgTXRlQ2hlY2tib3g6IGNoZWNrYm94UHJlc2V0cy5yeCxcbiAgTXRlUmFkaW86IHJhZGlvUHJlc2V0cy5yeCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMucngsXG4gIE10ZU5hdkhlYWRlcjogbmF2SGVhZGVyUHJlc2V0cy5yeCxcbiAgTXRlTmF2U3ViSGVhZGVyOiBuYXZTdWJIZWFkZXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5yeCxcbiAgTXRlTmF2Q29udGVudDogbmF2Q29udGVudFByZXNldHMucngsXG4gIE10ZU5hdkZvb3RlcjogbmF2Rm9vdGVyUHJlc2V0cy5yeCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVOYXZJY29uQnV0dG9uOiBuYXZJY29uQnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlTmF2SXRlbTogbmF2SXRlbVByZXNldHMucngsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMucngsXG4gIE10ZVN3aXRjaDogc3dpdGNoUHJlc2V0cy5yeCxcbiAgTXRlTmF0aXZlU2VsZWN0OiBuYXRpdmVTZWxlY3RQcmVzZXRzLnJ4LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLnJ4LFxuICBNdGVTa2VsZXRvbjogc2tlbGV0b25QcmVzZXRzLnJ4LFxuICBNdGVTbGlkZXI6IHNsaWRlclByZXNldHMucngsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMucngsXG4gIE10ZVNlZ21lbnRlZENvbnRyb2w6IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzLnJ4LFxufTtcbiIsICJpbXBvcnQgeyBjeFByZXNldCwgZGVmYXVsdFByZXNldCwgTW9ydGFyUHJlc2V0LCBweFByZXNldCwgcnhQcmVzZXQgfSBmcm9tICcuL3ByZXNldHMnO1xuaW1wb3J0IHsgY29tcHV0ZWQsIFNpZ25hbCwgc2lnbmFsIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuY2xhc3MgX010ZVByZXNldFNlcnZpY2Uge1xuICBwcml2YXRlIHByZXNldHMgPSBuZXcgTWFwPHN0cmluZywgTW9ydGFyUHJlc2V0PihbXG4gICAgWydnbG9iYWwnLCBkZWZhdWx0UHJlc2V0XSxcbiAgICBbJ2RlZmF1bHQnLCBkZWZhdWx0UHJlc2V0XSxcbiAgICBbJ3B4JywgcHhQcmVzZXRdLFxuICAgIFsnY3gnLCBjeFByZXNldF0sXG4gICAgWydyeCcsIHJ4UHJlc2V0XSxcbiAgXSk7XG5cbiAgcHJpdmF0ZSBwcmVzZXRDaGFuZ2VkU2lnbmFsID0gc2lnbmFsPHsgcHJlc2V0TmFtZTogc3RyaW5nOyBjb21wb25lbnROYW1lOiBzdHJpbmcgfT4oe1xuICAgIHByZXNldE5hbWU6IG51bGwsXG4gICAgY29tcG9uZW50TmFtZTogbnVsbCxcbiAgfSk7XG5cbiAgcHVibGljIHNldFByZXNldChwcmVzZXROYW1lOiBzdHJpbmcsIHByZXNldDogUGFydGlhbDxNb3J0YXJQcmVzZXQ+KSB7XG4gICAgdGhpcy5wcmVzZXRzLnNldChwcmVzZXROYW1lLCB7XG4gICAgICAuLi4odGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKSA/PyBkZWZhdWx0UHJlc2V0KSxcbiAgICAgIC4uLnByZXNldCxcbiAgICB9KTtcbiAgICB0aGlzLnByZXNldENoYW5nZWRTaWduYWwuc2V0KHsgcHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZTogbnVsbCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb21wb25lbnRQcmVzZXQ8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldD4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IEMsXG4gICAgY29tcG9uZW50UHJlc2V0OiBQYXJ0aWFsPE1vcnRhclByZXNldFtDXT5cbiAgKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpID8/IGRlZmF1bHRQcmVzZXQ7XG4gICAgdGhpcy5wcmVzZXRzLnNldChwcmVzZXROYW1lLCB7XG4gICAgICAuLi5zZWxlY3RlZFByZXNldCxcbiAgICAgIFtjb21wb25lbnROYW1lXToge1xuICAgICAgICAuLi4oc2VsZWN0ZWRQcmVzZXRbY29tcG9uZW50TmFtZV0gPz8gKHt9IGFzIGFueSkpLFxuICAgICAgICAuLi5jb21wb25lbnRQcmVzZXQsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbC5zZXQoeyBwcmVzZXROYW1lLCBjb21wb25lbnROYW1lIH0pO1xuICB9XG5cbiAgcHVibGljIHNldENvbXBvbmVudFByZXNldFByb3BlcnR5PEMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXQsIFAgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXRbQ10+KFxuICAgIHByZXNldE5hbWU6IHN0cmluZyxcbiAgICBjb21wb25lbnROYW1lOiBDLFxuICAgIHByb3BlcnR5TmFtZTogUCxcbiAgICB2YWx1ZTogTW9ydGFyUHJlc2V0W0NdW1BdIHwgUGFydGlhbDxNb3J0YXJQcmVzZXRbQ11bUF0+XG4gICkge1xuICAgIGNvbnN0IHNlbGVjdGVkUHJlc2V0ID0gdGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKSA/PyBkZWZhdWx0UHJlc2V0O1xuICAgIGNvbnN0IHNlbGVjdGVkQ29tcG9uZW50UHJlc2V0ID0gc2VsZWN0ZWRQcmVzZXRbY29tcG9uZW50TmFtZV0gYXMgYW55O1xuXG4gICAgLy8gSWYgc2V0dGluZyBhbiBvYmplY3QgdmFsdWUgYmUgc3VyZSB0byBzcHJlYWQgb3ZlciBleGlzdGluZyB2YWx1ZVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgICAgLi4uc2VsZWN0ZWRQcmVzZXQsXG4gICAgICAgIFtjb21wb25lbnROYW1lXToge1xuICAgICAgICAgIC4uLnNlbGVjdGVkQ29tcG9uZW50UHJlc2V0LFxuICAgICAgICAgIFtwcm9wZXJ0eU5hbWVdOiB7XG4gICAgICAgICAgICAuLi5zZWxlY3RlZENvbXBvbmVudFByZXNldFtwcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgICAgLi4udmFsdWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UganVzdCBzZXQgdGhlIHZhbHVlXG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgICAgLi4uc2VsZWN0ZWRQcmVzZXQsXG4gICAgICAgIFtjb21wb25lbnROYW1lXToge1xuICAgICAgICAgIC4uLnNlbGVjdGVkQ29tcG9uZW50UHJlc2V0LFxuICAgICAgICAgIFtwcm9wZXJ0eU5hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnByZXNldENoYW5nZWRTaWduYWwuc2V0KHsgcHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQcmVzZXQocHJlc2V0TmFtZTogc3RyaW5nKTogTW9ydGFyUHJlc2V0IHtcbiAgICBjb25zdCBwcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpO1xuICAgIGlmICghcHJlc2V0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBNdGVQcmVzZXRTZXJ2aWNlOiBBIHByZXNldCB3aXRoIHRoZSBuYW1lIFwiJHtwcmVzZXROYW1lfVwiIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgfVxuICAgIHJldHVybiBwcmVzZXQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29tcG9uZW50UHJlc2V0PEMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXQ+KFxuICAgIHByZXNldE5hbWU6IHN0cmluZyxcbiAgICBjb21wb25lbnROYW1lOiBDXG4gICk6IE1vcnRhclByZXNldFtDXSB7XG4gICAgY29uc3QgcHJlc2V0ID0gdGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKTtcbiAgICBjb25zdCBjb21wb25lbnRQcmVzZXQgPSBwcmVzZXRbY29tcG9uZW50TmFtZV07XG4gICAgaWYgKCFwcmVzZXQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE10ZVByZXNldFNlcnZpY2U6IEEgcHJlc2V0IHdpdGggdGhlIG5hbWUgXCIke3ByZXNldE5hbWV9XCIgZG9lcyBub3QgZXhpc3QuYCk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRQcmVzZXQ7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0UHJlc2V0KHByZXNldE5hbWU6IHN0cmluZyk6IFNpZ25hbDxNb3J0YXJQcmVzZXQ+IHtcbiAgICBsZXQgZmlyc3RFbWl0ID0gdHJ1ZTtcbiAgICByZXR1cm4gY29tcHV0ZWQodGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLCAoY2hhbmdlLCBzZXQpID0+IHtcbiAgICAgIGlmIChmaXJzdEVtaXQpIHtcbiAgICAgICAgc2V0KHRoaXMuZ2V0UHJlc2V0KHByZXNldE5hbWUpKTtcbiAgICAgICAgZmlyc3RFbWl0ID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5wcmVzZXROYW1lID09PSBwcmVzZXROYW1lKSB7XG4gICAgICAgIHNldCh0aGlzLmdldFByZXNldChwcmVzZXROYW1lKSk7XG4gICAgICB9XG4gICAgfSkgYXMgU2lnbmFsPE1vcnRhclByZXNldD47XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Q29tcG9uZW50UHJlc2V0PEMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXQ+KFxuICAgIHByZXNldE5hbWU6IHN0cmluZyxcbiAgICBjb21wb25lbnROYW1lOiBDXG4gICk6IFNpZ25hbDxNb3J0YXJQcmVzZXRbQ10+IHtcbiAgICBsZXQgZmlyc3RFbWl0ID0gdHJ1ZTtcbiAgICByZXR1cm4gY29tcHV0ZWQodGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLCAoY2hhbmdlLCBzZXQpID0+IHtcbiAgICAgIGlmIChmaXJzdEVtaXQpIHtcbiAgICAgICAgc2V0KHRoaXMuZ2V0Q29tcG9uZW50UHJlc2V0KHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWUpKTtcbiAgICAgICAgZmlyc3RFbWl0ID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAoY2hhbmdlLnByZXNldE5hbWUgPT09IHByZXNldE5hbWUgJiYgIWNoYW5nZS5jb21wb25lbnROYW1lKSB8fFxuICAgICAgICAoY2hhbmdlLnByZXNldE5hbWUgPT09IHByZXNldE5hbWUgJiYgY2hhbmdlLmNvbXBvbmVudE5hbWUgPT09IGNvbXBvbmVudE5hbWUpXG4gICAgICApIHtcbiAgICAgICAgc2V0KHRoaXMuZ2V0Q29tcG9uZW50UHJlc2V0KHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWUpKTtcbiAgICAgIH1cbiAgICB9KSBhcyBTaWduYWw8TW9ydGFyUHJlc2V0W0NdPjtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlUHJlc2V0U2VydmljZSA9IG5ldyBfTXRlUHJlc2V0U2VydmljZSgpO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXMgKi9cbmltcG9ydCB7IENvbnRleHRDb25zdW1lciB9IGZyb20gJ0BsaXQtbGFicy9jb250ZXh0JztcbmltcG9ydCB7IFByb3BlcnR5RGVjbGFyYXRpb24sIFJlYWN0aXZlRWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBDb25zdHJ1Y3RvcixcbiAgaXNTc3IsXG4gIE10ZUVsZW1lbnQsXG4gIE10ZVByZXNldFNlcnZpY2UsXG4gIHByZXNldENvbnRleHQsXG4gIHNpZ25hbCxcbiAgY29tcHV0ZWQsXG4gIFVuc3Vic2NyaWJlcixcbn0gZnJvbSAnLi4vJztcbmltcG9ydCB7IE1vcnRhclByZXNldCB9IGZyb20gJy4vcHJlc2V0cyc7XG5cbmV4cG9ydCB0eXBlIFByZXNldE9wdGlvbnMgPSAnbWQnIHwgJ3NtJyB8ICdsZycgfCBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByZXNldEVsZW1lbnRJbnRlcmZhY2U8UD4ge1xuICAvKiogQGlnbm9yZSAqL1xuICByZWFkb25seSBfX2NvbXBvbmVudE5hbWU6IGtleW9mIE1vcnRhclByZXNldDtcblxuICAvKiogU2VsZWN0cyB0aGUgcHJlc2V0IGZvciB0aGlzIGNvbXBvbmVudC4gT3ZlcnJpZGVzIHRoZSBnbG9iYWwgcHJlc2V0IGZvciB0aGlzIGluc3RhbmNlIG9mIHRoaXMgY29tcG9uZW50LiAqL1xuICBwcmVzZXQ6IHN0cmluZztcblxuICAvKiogQGlnbm9yZSAqL1xuICBhcHBsaWVkUHJlc2V0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJlc2V0TWl4aW5GYWN0b3J5T3B0aW9ucyB7XG4gIHJlZmxlY3RBcHBsaWVkUHJlc2V0OiBib29sZWFuO1xufVxuXG5jb25zdCB7XG4gIGlzLFxuICBkZWZpbmVQcm9wZXJ0eSxcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGdldFByb3RvdHlwZU9mLFxufSA9IE9iamVjdDtcblxuZXhwb3J0IGNvbnN0IFByZXNldE1peGluRmFjdG9yeSA9IDxQPihcbiAgY29tcG9uZW50TmFtZToga2V5b2YgTW9ydGFyUHJlc2V0LFxuICBvcHRpb25zOiBQcmVzZXRNaXhpbkZhY3RvcnlPcHRpb25zID0geyByZWZsZWN0QXBwbGllZFByZXNldDogZmFsc2UgfVxuKSA9PiB7XG4gIHJldHVybiA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gICAgY2xhc3MgUHJlc2V0RWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgcmVhZG9ubHkgX19jb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZTtcblxuICAgICAgLyoqIE1hcCB0aGF0IHN0b3JlcyBwcml2YXRlIHZhbHVlcyB0aGF0IHRha2UgcHJlY2VkZW5jZSBvdmVyIHByZXNldCB2YWx1ZXMgKi9cbiAgICAgIHByb3RlY3RlZCBfdmFsdWVNYXAgPSBuZXcgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPigpO1xuXG4gICAgICAvKiogTWFwIHRoYXQgc3RvcmVzIGZhbGxiYWNrIHByZXNldCB2YWx1ZXMgZW1pdHRlZCBieSB0aGUgcHJlc2V0Q29udHJvbGxlciAqL1xuICAgICAgcHJvdGVjdGVkIF9wcmVzZXRNYXAgPSBuZXcgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPigpO1xuXG4gICAgICAvKiogU2VsZWN0cyBhIHNwZWNpZmljIHByZXNldCBmb3IgdGhpcyBjb21wb25lbnQgaW5zdGFuY2UuIE92ZXJyaWRlcyB0aGUgY3VycmVudCBnbG9iYWwgcHJlc2V0LiAqL1xuICAgICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KVxuICAgICAgc2V0IHByZXNldChwcmVzZXQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcmVzZXQgPSBwcmVzZXQ7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVByZXNldFNpZ25hbC5zZXQocHJlc2V0KTtcbiAgICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgICAvLyBTdG9wIFNTUiBjb25zdHJ1Y3RvciBsaXN0ZW5lciBpZiBzdGlsbCBvcGVuLlxuICAgICAgICAgIHRoaXMuc3NyQ29uc3RydWN0b3JTdWI/LigpO1xuICAgICAgICAgIHRoaXMuc3NyQ29uc3RydWN0b3JTdWIgPSBudWxsO1xuICAgICAgICAgIGNvbnN0IHByZXNldCA9IE10ZVByZXNldFNlcnZpY2UuZ2V0UHJlc2V0KHRoaXMucHJlc2V0ID8/ICdnbG9iYWwnKTtcbiAgICAgICAgICB0aGlzLmhhbmRsZVNzclByZXNldENoYW5nZXMocHJlc2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZ2V0IHByZXNldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZXNldDtcbiAgICAgIH1cbiAgICAgIHByaXZhdGUgX3ByZXNldCA9ICdnbG9iYWwnO1xuXG4gICAgICBAcHJvcGVydHkoeyByZWZsZWN0OiBvcHRpb25zPy5yZWZsZWN0QXBwbGllZFByZXNldCA/PyBmYWxzZSB9KSBhcHBsaWVkUHJlc2V0ID0gJ2dsb2JhbCc7XG5cbiAgICAgIEBzdGF0ZSgpIHByaXZhdGUgX2FwcGxpZWRQcmVzZXQ/OiBzdHJpbmc7XG5cbiAgICAgIC8qKiBLZWVwcyBjb25zdHJ1Y3RvciBwcmVzZXQgc3Vic2NyaXB0aW9uIG9wZW4gdW50aWwgd2lsbFVwZGF0ZSAqL1xuICAgICAgcHJpdmF0ZSBzc3JDb25zdHJ1Y3RvclN1YjogVW5zdWJzY3JpYmVyO1xuICAgICAgcHJpdmF0ZSBwcmV2aW91c0NvbXBvbmVudFVuc3ViOiBVbnN1YnNjcmliZXI7XG5cbiAgICAgIC8qKiBFbWl0cyB3aGVuZXZlciB0aGUgbG9jYWwgcHJlc2V0IHZhbHVlIGNoYW5nZXMuICovXG4gICAgICBwcml2YXRlIF9hY3RpdmVQcmVzZXRTaWduYWwgPSBzaWduYWw8c3RyaW5nPihudWxsKTtcbiAgICAgIHByaXZhdGUgX3BhcmVudFByZXNldFNpZ25hbCA9IHNpZ25hbDxzdHJpbmc+KG51bGwpO1xuXG4gICAgICBwcml2YXRlIF9wcmVzZXRDb250ZXh0ID0gbmV3IENvbnRleHRDb25zdW1lcih0aGlzLCB7XG4gICAgICAgIGNvbnRleHQ6IHByZXNldENvbnRleHQsXG4gICAgICAgIHN1YnNjcmliZTogdHJ1ZSxcbiAgICAgICAgY2FsbGJhY2s6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3BhcmVudFByZXNldFNpZ25hbC5zZXQoKHZhbHVlID09PSAnJyA/IG51bGwgOiB2YWx1ZSkgPz8gJ2dsb2JhbCcpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGdldFByb3BlcnR5RGVzY3JpcHRvciBtZXRob2QgdG8gY2hlY2sgZm9yIHRoZSBjdXN0b21cbiAgICAgICAqIGBpc1ByZXNldGAgb3B0aW9uLiBEZXNjcmlwdG9ycyBvZiBwcm9wZXJ0aWVzIHRoYXQgYXJlIGRlY2xhcmVkIHdpdGggdGhlIGBpc1ByZXNldGBcbiAgICAgICAqIG9wdGlvbiBhcmUgZGVmaW5lZCB3aXRoIHNwZWNpYWwgZ2V0dGVyL3NldHRlciBsb2dpYyB0aGF0IHNldHMgdmFsdWUgdG8gdmFsdWVNYXBcbiAgICAgICAqIGFuZCBnZXRzIHZhbHVlcyBmcm9tIHRoZSB2YWx1ZU1hcCBidXQgdGhlbiBhbHNvIGZhbGxzIGJhY2sgdG8gYW55IHZhbHVlIGluIHRoZSBwcmVzZXRNYXBcbiAgICAgICAqXG4gICAgICAgKiBUaGUgcHJlc2V0TWFwIGlzIHBvcHVsYXRlZCBhYm92ZSBmcm9tIHZhbHVlcyBmcm9tIHRoZSBwcmVzZXRDb250cm9sbGVyIHdoZW5ldmVyIHRoZVxuICAgICAgICogcHJlc2V0IGZvciB0aGlzIGNvbXBvbmVudCBpcyBjaGFuZ2VkIGdsb2JhbGx5LlxuICAgICAgICovXG4gICAgICBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKFxuICAgICAgICBuYW1lOiBQcm9wZXJ0eUtleSxcbiAgICAgICAga2V5OiBzdHJpbmcgfCBzeW1ib2wsXG4gICAgICAgIG9wdGlvbnM6IFByb3BlcnR5RGVjbGFyYXRpb25cbiAgICAgICkge1xuICAgICAgICBjb25zdCB7IGdldCwgc2V0IH0gPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcy5wcm90b3R5cGUsIG5hbWUpID8/IHtcbiAgICAgICAgICBnZXQodGhpczogUmVhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1trZXkgYXMga2V5b2YgdHlwZW9mIHRoaXNdO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCwgdjogdW5rbm93bikge1xuICAgICAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nIHwgc3ltYm9sLCB1bmtub3duPilba2V5XSA9IHY7XG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBnZXQodGhpczogUmVhY3RpdmVFbGVtZW50KTogYW55IHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgZ2V0dGVyIGxvZ2ljIHRoYXQgZ2V0cyBmcm9tIHRoZSB2YWx1ZU1hcCBvciBwcmVzZXRNYXBcbiAgICAgICAgICAgIGlmIChvcHRpb25zWydpc1ByZXNldCddKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgKHRoaXMgYXMge30gYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pLl92YWx1ZU1hcCBhcyBNYXA8XG4gICAgICAgICAgICAgICAgICAgIFByb3BlcnR5S2V5LFxuICAgICAgICAgICAgICAgICAgICBQW2tleW9mIFBdXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgKS5nZXQobmFtZSkgfHxcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkuX3ByZXNldE1hcCBhcyBNYXA8XG4gICAgICAgICAgICAgICAgICAgIFByb3BlcnR5S2V5LFxuICAgICAgICAgICAgICAgICAgICBQW2tleW9mIFBdXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgKS5nZXQobmFtZSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlZmF1bHQgcHJvcGVydHkgZ2V0dGVyIGxvZ2ljXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGdldD8uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQsIHZhbHVlOiB1bmtub3duKSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIHNldHRlciBsb2dpYyB0aGF0IHNldHMgdG8gdGhlIHZhbHVlTWFwXG4gICAgICAgICAgICBpZiAob3B0aW9uc1snaXNQcmVzZXQnXSkge1xuICAgICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IChcbiAgICAgICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkuX3ZhbHVlTWFwIGFzIE1hcDxQcm9wZXJ0eUtleSwgUFtrZXlvZiBQXT5cbiAgICAgICAgICAgICAgKS5nZXQobmFtZSk7XG4gICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkuX3ZhbHVlTWFwIGFzIE1hcDxQcm9wZXJ0eUtleSwgUFtrZXlvZiBQXT5cbiAgICAgICAgICAgICAgKS5zZXQobmFtZSwgdmFsdWUgYXMgYW55KTtcbiAgICAgICAgICAgICAgLy8gRHVyaW5nIFNTUiB3ZSBuZWVkIHRvIHVwZGF0ZSBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgICAgICAgICh0aGlzIGFzIHVua25vd24gYXMgUmVhY3RpdmVFbGVtZW50KS5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBPbiB0aGUgY2xpZW50IHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGN1cnJlbnQgdXBkYXRlIHRvIGZpbmlzaFxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBSZWFjdGl2ZUVsZW1lbnQpLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEZWZhdWx0IHByb3BlcnR5IHNldHRlciBsb2dpY1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gZ2V0Py5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICBzZXQhLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlYWN0aXZlRWxlbWVudCkucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgICAgLy8gU3Vic2NyaWJlcyBmb3IgY2hhbmdlcyB0byB0aGlzIGNvbXBvbmVudHMgYWN0aXZlIHByZXNldCB0byB1cGRhdGUgYWxsIHJlbGV2YW50IHByb3BzIHByZXNldCB2YWx1ZXNcbiAgICAgICAgdGhpcy5zdWJzLnB1c2goXG4gICAgICAgICAgY29tcHV0ZWQoXG4gICAgICAgICAgICBbdGhpcy5fYWN0aXZlUHJlc2V0U2lnbmFsLCB0aGlzLl9wYXJlbnRQcmVzZXRTaWduYWxdLFxuICAgICAgICAgICAgKFthY3RpdmVQcmVzZXQsIHBhcmVudFByZXNldF0sIHNldCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoYWN0aXZlUHJlc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2xvY2FsUHJlc2V0VGhlbWUgPVxuICAgICAgICAgICAgICAgICAgYWN0aXZlUHJlc2V0ID09PSAnZ2xvYmFsJ1xuICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgOiBNdGVQcmVzZXRTZXJ2aWNlLmdldENvbXBvbmVudFByZXNldChhY3RpdmVQcmVzZXQsICd0aGVtZScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX19sb2NhbFByZXNldFRoZW1lID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ3RoZW1lJywgbnVsbCk7XG5cbiAgICAgICAgICAgICAgdGhpcy5fYXBwbGllZFByZXNldCA9IGFjdGl2ZVByZXNldCA/PyBwYXJlbnRQcmVzZXQgPz8gJ2dsb2JhbCc7XG4gICAgICAgICAgICAgIHRoaXMuYXBwbGllZFByZXNldCA9IE10ZVByZXNldFNlcnZpY2UuZ2V0Q29tcG9uZW50UHJlc2V0KFxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGxpZWRQcmVzZXQsXG4gICAgICAgICAgICAgICAgJ3ByZXNldCdcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAvLyBVbnN1YnNjcmliZSB0byBwcmV2aW91cyBjb21wb25lbnQgcHJlc2V0IGNoYW5nZXNcbiAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0NvbXBvbmVudFVuc3ViPy4oKTtcbiAgICAgICAgICAgICAgLy8gVXBkYXRlIHByb3BzIGlmIG5ldyBjb21wb25lbnQgcHJlc2V0IGVtaXRzXG4gICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDb21wb25lbnRVbnN1YiA9IE10ZVByZXNldFNlcnZpY2Uuc2VsZWN0Q29tcG9uZW50UHJlc2V0KFxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGxpZWRQcmVzZXQsXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NvbXBvbmVudE5hbWVcbiAgICAgICAgICAgICAgKS5zdWJzY3JpYmUoKG5ld1ByZXNldCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChuZXdQcmVzZXQpIHtcbiAgICAgICAgICAgICAgICAgIHNldChuZXdQcmVzZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKS5zdWJzY3JpYmUoKG5ld1ByZXNldHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlc01hcCA9IG5ldyBNYXAodGhpcy5fcHJlc2V0TWFwKTtcbiAgICAgICAgICAgIGNvbnN0IG9sZFByb3BzID0gQXJyYXkuZnJvbSh0aGlzLl9wcmVzZXRNYXAua2V5cygpKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gT2JqZWN0LmtleXMobmV3UHJlc2V0cyA/PyB7fSk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBrZXlzIGluIHRoZSBuZXcgcHJlc2V0cyBjbGVhciBhbGwgcHJlc2V0IHZhbHVlc1xuICAgICAgICAgICAgaWYgKG5ld1Byb3BzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBvbGQgc2V0IHByb3BzIGFuZCBuZXcgb25lc1xuICAgICAgICAgICAgLy8gUmVtb3ZlIG9sZCBvbmVzICYgc2V0IG5ldyBvbmVzXG4gICAgICAgICAgICAvLyBGaW5hbGx5IGZvcmNlIGFuIHVwZGF0ZSBmb3IgZWFjaCBwcm9wXG4gICAgICAgICAgICBbLi4ub2xkUHJvcHMsIC4uLm5ld1Byb3BzXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG5ld1ByZXNldHNba2V5XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5zZXQoa2V5LCBuZXdQcmVzZXRzW2tleV0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoa2V5LCBvbGRWYWx1ZXNNYXAuZ2V0KGtleSkgPz8gbnVsbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgICAgICB0aGlzLnByZXZpb3VzQ29tcG9uZW50VW5zdWI/LigpO1xuICAgICAgICB0aGlzLnNzckNvbnN0cnVjdG9yU3ViPy4oKTtcbiAgICAgIH1cblxuICAgICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgc3VwZXIoYXJncyk7XG5cbiAgICAgICAgLy8gVE9ETyhyZWVjZSk6IEVuc3VyZSB3ZSB1cGRhdGUgdGhpcyB0byBzdXBwb3J0IGNvbnRleHQgd2hlbiB0aGF0IGlzIFNTUiBGcmllbmRseTogaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzMzNjVcbiAgICAgICAgLy8gSGFuZGxlIHNldHRpbmcgcHJlc2V0IGRlZmF1bHRzIGluIFNTUlxuICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgIHRoaXMuc3NyQ29uc3RydWN0b3JTdWIgPSBNdGVQcmVzZXRTZXJ2aWNlLnNlbGVjdFByZXNldCh0aGlzLnByZXNldCA/PyAnZ2xvYmFsJykuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHByZXNldCkgPT4gdGhpcy5oYW5kbGVTc3JQcmVzZXRDaGFuZ2VzKHByZXNldClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByaXZhdGUgaGFuZGxlU3NyUHJlc2V0Q2hhbmdlcyhwcmVzZXQ6IE1vcnRhclByZXNldCkge1xuICAgICAgICBpZiAocHJlc2V0KSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50UHJlc2V0cyA9IHByZXNldFt0aGlzLl9fY29tcG9uZW50TmFtZV07XG4gICAgICAgICAgY29uc3Qgb2xkUHJvcHMgPSBBcnJheS5mcm9tKHRoaXMuX3ByZXNldE1hcC5rZXlzKCkpO1xuICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gT2JqZWN0LmtleXMoY29tcG9uZW50UHJlc2V0cyA/PyB7fSk7XG5cbiAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8ga2V5cyBpbiB0aGUgbmV3IHByZXNldHMgY2xlYXIgYWxsIHByZXNldCB2YWx1ZXNcbiAgICAgICAgICBpZiAobmV3UHJvcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuY2xlYXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG9sZCBzZXQgcHJvcHMgYW5kIG5ldyBvbmVzXG4gICAgICAgICAgLy8gUmVtb3ZlIG9sZCBvbmVzICYgc2V0IG5ldyBvbmVzXG4gICAgICAgICAgLy8gRmluYWxseSBmb3JjZSBhbiB1cGRhdGUgZm9yIGVhY2ggcHJvcFxuICAgICAgICAgIFsuLi5vbGRQcm9wcywgLi4ubmV3UHJvcHNdLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudFByZXNldHNba2V5XSkge1xuICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuc2V0KGtleSwgY29tcG9uZW50UHJlc2V0c1trZXldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShrZXksIG51bGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuYXBwbGllZFByZXNldCA9IHByZXNldFsncHJlc2V0J107XG4gICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCdhcHBsaWVkUHJlc2V0JywgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFByZXNldEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8UHJlc2V0RWxlbWVudEludGVyZmFjZTxQPj4gJiBUO1xuICB9O1xufTtcbiIsICJpbXBvcnQgeyBQcm9wZXJ0eURlY2xhcmF0aW9uIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcHJvcGVydHkuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlc2V0UHJvcGVydHk8VD4ob3B0aW9ucz86IFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgcmV0dXJuIHByb3BlcnR5KHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGlzUHJlc2V0OiB0cnVlLFxuICB9IGFzIGFueSk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ0BsaXQtbGFicy9jb250ZXh0JztcblxuZXhwb3J0IGNvbnN0IHByZXNldENvbnRleHQgPSBjcmVhdGVDb250ZXh0PHN0cmluZz4oJ01URV9QUkVTRVQnKTtcbiIsICJpbXBvcnQgeyBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IE10ZVByZXNldFNlcnZpY2UgfSBmcm9tICcuLi9wcmVzZXRzJztcbmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IE10ZUVsZW1lbnQgfSBmcm9tICcuLi9iYXNlLWNsYXNzZXMnO1xuXG5jb25zdCBnbG9iYWxQcmVzZXQkID0gTXRlUHJlc2V0U2VydmljZS5zZWxlY3RQcmVzZXQoJ2dsb2JhbCcpO1xuY29uc3QgZ2xvYmFsUHJlc2V0TmFtZSQgPSBjb21wdXRlZChnbG9iYWxQcmVzZXQkLCAocHJlc2V0KSA9PiBwcmVzZXQucHJlc2V0KTtcblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWVkUHJlc2V0Q29udGV4dCB7XG4gIHByZXNldE5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBQcmVzZXQgaXMgZGV0ZXJtaW5lZCBmcm9tIGVpdGhlciB0aGUgcGFyZW50IHByZXNldCBjb250ZXh0IG9yIGEgbG9jYWwgcHJlc2V0IHByb3BlcnR5LlxuICogVGhpcyBjb250cm9sbGVyIGtlZXBzIHRyYWNrIG9mIHRoZSBhY3R1YWwgYWN0aXZlIHByZXNldCBhcHBsaWVkIHRvIHRoZSBjdXJyZW50IGNvbXBvbmVudC5cbiAqIElmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4gaXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgdGhhdCBjb250ZXh0IGNoYW5nZXMuIE90aGVyd2lzZSBjb250cm9sbGVyXG4gKiBtZXRob2RzIGNhbiBiZSBjYWxsZWQgd2hlbiBuZWVkZWQuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZCBldmVuIHdpdGhpbiBlbGVtZW50cyB0aGF0IGRvIG5vdCBoYXZlIHRoZWlyIG93biBwcmVzZXRcbiAqIG9wdGlvbnMgKGFrYSBleHRlbmQgdGhlIHByZXNldE1peGluKS5cbiAqL1xuZXhwb3J0IGNsYXNzIEFwcGxpZWRQcmVzZXRDb250ZXh0Q29udHJvbGxlciB7XG4gIHByaXZhdGUgYXBwbGllZFByZXNldE5hbWUgPSAnZ2xvYmFsJztcbiAgcHJpdmF0ZSBhY3RpdmVHbG9iYWxQcmVzZXROYW1lID0gJ2RlZmF1bHQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaG9zdDogUmVhY3RpdmVDb250cm9sbGVySG9zdCAmIE10ZUVsZW1lbnQsXG4gICAgcHJpdmF0ZSBjYWxsYmFjaz86IChjb250ZXh0OiBBcHBsaWVkUHJlc2V0Q29udGV4dCkgPT4gdm9pZFxuICApIHtcbiAgICB0aGlzLmhvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gIH1cblxuICBob3N0Q29ubmVjdGVkKCkge1xuICAgIHRoaXMuaG9zdC5zdWJzLnB1c2goXG4gICAgICBnbG9iYWxQcmVzZXROYW1lJC5zdWJzY3JpYmUoKGdsb2JhbFByZXNldE5hbWUpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVHbG9iYWxQcmVzZXROYW1lID0gZ2xvYmFsUHJlc2V0TmFtZTtcbiAgICAgICAgdGhpcy51cGRhdGVBcHBsaWVkUHJlc2V0Q29udGV4dCgpO1xuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuZXhlY0NhbGxiYWNrKCk7XG4gIH1cblxuICBob3N0VXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlQXBwbGllZFByZXNldENvbnRleHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY0NhbGxiYWNrKCkge1xuICAgIHRoaXMuY2FsbGJhY2s/Lih7XG4gICAgICBwcmVzZXROYW1lOiB0aGlzLmFwcGxpZWRQcmVzZXROYW1lLFxuICAgIH0gYXMgQXBwbGllZFByZXNldENvbnRleHQpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVBcHBsaWVkUHJlc2V0Q29udGV4dCgpIHtcbiAgICBsZXQgdXBkYXRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IG5ld1ByZXNldE5hbWUgPSAodGhpcy5ob3N0IGFzIGFueSkuYXBwbGllZFByZXNldCA/PyB0aGlzLmFjdGl2ZUdsb2JhbFByZXNldE5hbWU7XG4gICAgaWYgKG5ld1ByZXNldE5hbWUgIT09IHRoaXMuYXBwbGllZFByZXNldE5hbWUpIHtcbiAgICAgIHRoaXMuYXBwbGllZFByZXNldE5hbWUgPSBuZXdQcmVzZXROYW1lO1xuICAgICAgdXBkYXRlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkKSB7XG4gICAgICB0aGlzLmV4ZWNDYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVQcmVzZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGxpZWRQcmVzZXROYW1lO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaXRFbGVtZW50LCBQcm9wZXJ0eVZhbHVlTWFwLCBSZWFjdGl2ZUVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgaXNTc3IgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG50eXBlIFVwZGF0ZUhhbmRsZXIgPSAoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlTWFwPGFueT4pID0+IHZvaWQ7XG5cbmludGVyZmFjZSBPblVwZGF0ZU9wdGlvbnMge1xuICAvKipcbiAgICogSWYgdHJ1ZSwgd2lsbCBvbmx5IHN0YXJ0IHdhdGNoaW5nIGFmdGVyIHRoZSBpbml0aWFsIHVwZGF0ZS9yZW5kZXJcbiAgICovXG4gIHdhaXRVbnRpbEZpcnN0VXBkYXRlPzogYm9vbGVhbjtcblxuICAvKiogRGV0ZXJtaW5lcyB3aGVyZSB0aGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZC4gRGVmYXVsdHMgdG8gYGNsaWVudGAuICovXG4gIG9uPzogJ2NsaWVudCcgfCAnc3NyJyB8ICdib3RoJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uVXBkYXRlKHByb3BOYW1lczogc3RyaW5nIHwgc3RyaW5nW10sIG9wdGlvbnM/OiBPblVwZGF0ZU9wdGlvbnMpIHtcbiAgY29uc3QgcmVzb2x2ZWRPcHRpb25zOiBSZXF1aXJlZDxPblVwZGF0ZU9wdGlvbnM+ID0ge1xuICAgIHdhaXRVbnRpbEZpcnN0VXBkYXRlOiBmYWxzZSxcbiAgICBvbjogJ2NsaWVudCcsXG4gICAgLi4ub3B0aW9ucyxcbiAgfTtcbiAgcmV0dXJuIDxFbGVtQ2xhc3MgZXh0ZW5kcyBMaXRFbGVtZW50Pihwcm90bzogRWxlbUNsYXNzLCBkZWNvcmF0ZWRGbk5hbWU6IFByb3BlcnR5S2V5KSA9PiB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtLSB1cGRhdGUgaXMgYSBwcm90ZWN0ZWQgcHJvcGVydHlcbiAgICBjb25zdCB7IHdpbGxVcGRhdGUgfSA9IHByb3RvO1xuICAgIGNvbnN0IF9wcm9wTmFtZXMgPSBBcnJheS5pc0FycmF5KHByb3BOYW1lcykgPyBwcm9wTmFtZXMgOiBbcHJvcE5hbWVzXTtcbiAgICBjb25zdCBwcm9wTmFtZUtleXMgPSBfcHJvcE5hbWVzIGFzIChrZXlvZiBFbGVtQ2xhc3MpW107XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtLSB1cGRhdGUgaXMgYSBwcm90ZWN0ZWQgcHJvcGVydHlcbiAgICBwcm90by53aWxsVXBkYXRlID0gZnVuY3Rpb24gKHRoaXM6IEVsZW1DbGFzcywgY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlTWFwPGFueT4pIHtcbiAgICAgIGlmIChwcm9wTmFtZUtleXMuc29tZSgoa2V5KSA9PiBjaGFuZ2VkUHJvcHMuaGFzKGtleSkpKSB7XG4gICAgICAgIGlmICghcmVzb2x2ZWRPcHRpb25zLndhaXRVbnRpbEZpcnN0VXBkYXRlIHx8ICh0aGlzIGFzIHVua25vd24gYXMgTGl0RWxlbWVudCkuaGFzVXBkYXRlZCkge1xuICAgICAgICAgIGNvbnN0IHNzciA9IGlzU3NyKCk7XG4gICAgICAgICAgaWYgKHJlc29sdmVkT3B0aW9ucy5vbiA9PT0gJ2NsaWVudCcgJiYgIXNzcikge1xuICAgICAgICAgICAgKHRoaXNbZGVjb3JhdGVkRm5OYW1lXSBhcyB1bmtub3duIGFzIFVwZGF0ZUhhbmRsZXIpKGNoYW5nZWRQcm9wcyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNvbHZlZE9wdGlvbnMub24gPT09ICdzc3InICYmIHNzcikge1xuICAgICAgICAgICAgKHRoaXNbZGVjb3JhdGVkRm5OYW1lXSBhcyB1bmtub3duIGFzIFVwZGF0ZUhhbmRsZXIpKGNoYW5nZWRQcm9wcyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNvbHZlZE9wdGlvbnMub24gPT09ICdib3RoJykge1xuICAgICAgICAgICAgKHRoaXNbZGVjb3JhdGVkRm5OYW1lXSBhcyB1bmtub3duIGFzIFVwZGF0ZUhhbmRsZXIpKGNoYW5nZWRQcm9wcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3aWxsVXBkYXRlLmNhbGwodGhpcywgY2hhbmdlZFByb3BzKTtcbiAgICB9O1xuICB9O1xufVxuIiwgImltcG9ydCB7IGlzU3NyIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudE9wdGlvbnMge1xuICAvKiogaW5kaWNhdGUgaWYgZXZlbnQgYnViYmxlcyB1cCB0aHJvdWdoIHRoZSBET00gb3Igbm90ICovXG4gIGJ1YmJsZXM/OiBib29sZWFuO1xuICAvKiogaW5kaWNhdGUgaWYgZXZlbnQgaXMgY2FuY2VsYWJsZSAqL1xuICBjYW5jZWxhYmxlPzogYm9vbGVhbjtcbiAgLyoqIGluZGljYXRlIGlmIGV2ZW50IGNhbiBidWJibGUgYWNyb3NzIHRoZSBib3VuZGFyeSBiZXR3ZWVuIHRoZSBzaGFkb3cgRE9NIGFuZCB0aGUgbGlnaHQgRE9NICovXG4gIGNvbXBvc2VkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50RW1pdHRlcjxUPiB7XG4gIHByaXZhdGUgZXZlbnROYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YXJnZXQ6IEhUTUxFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZykge1xuICAgIC8vIFNhbml0eSBjaGVjayB0byBjYWxsIG91dCBpbXByb3Blcmx5IHByZWZpeGVkIGV2ZW50IGVtaXR0ZXJzXG4gICAgdHJ5IHtcbiAgICAgIGlmIChldmVudE5hbWU/LlswXSAhPT0gJ18nKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYCR7dGFyZ2V0LnRhZ05hbWV9OiBFdmVudEVtaXR0ZXIgcHJvcGVydHkgZm9yIFwiJHtldmVudE5hbWV9XCIgbXVzdCBiZSBwcmVmaXhlZCB3aXRoIFwiX1wiYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH1cbiAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZS5yZXBsYWNlKC9eXy8sICcnKTtcbiAgfVxuXG4gIC8qKiBEaXNwYXRjaGVzIHRoZSBjdXN0b20gZXZlbnQuIElmIHRoZSBldmVudCBpcyBgY2FuY2VsYWJsZWAgYW5kIGlzIHByZXZlbnRlZCB0aGlzIHdpbGwgcmV0dXJuIGZhbHNlLiAqL1xuICBlbWl0KHZhbHVlOiBULCBvcHRpb25zPzogRXZlbnRPcHRpb25zKTogYm9vbGVhbiB7XG4gICAgLy8gVE9ETyhyZWVjZSk6IHJlbW92ZSB3aGVuIGV2ZW50cyBhcmUgc3VwcG9ydGVkIGR1cmluZyBTU1JcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhcmdldC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQ8VD4odGhpcy5ldmVudE5hbWUsIHtcbiAgICAgICAgICBkZXRhaWw6IHZhbHVlLFxuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG4vLyBMZWdhY3kgVFMgRGVjb3JhdG9yXG5mdW5jdGlvbiBsZWdhY3lFdmVudChcbiAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLFxuICBwcm90b09yRGVzY3JpcHRvcjogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gIG5hbWU6IFByb3BlcnR5S2V5XG4pIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lLCBkZXNjcmlwdG9yKTtcbn1cblxuLy8gVEMzOSBEZWNvcmF0b3JzIHByb3Bvc2FsXG5mdW5jdGlvbiBzdGFuZGFyZEV2ZW50KGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvciwgZWxlbWVudDogeyBrZXk6IHN0cmluZyB9KSB7XG4gIHJldHVybiB7XG4gICAga2luZDogJ21ldGhvZCcsXG4gICAgcGxhY2VtZW50OiAncHJvdG90eXBlJyxcbiAgICBrZXk6IGVsZW1lbnQua2V5LFxuICAgIGRlc2NyaXB0b3IsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudEVtaXR0ZXIoKSB7XG4gIHJldHVybiAocHJvdG9PckRlc2NyaXB0b3I6IGFueSwgbmFtZTogc3RyaW5nKTogYW55ID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0ge1xuICAgICAgZ2V0KHRoaXM6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgRXZlbnRFbWl0dGVyKHRoaXMsIG5hbWUgIT09IHVuZGVmaW5lZCA/IG5hbWUgOiBwcm90b09yRGVzY3JpcHRvci5rZXkpO1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgfTtcblxuICAgIHJldHVybiBuYW1lICE9PSB1bmRlZmluZWRcbiAgICAgID8gbGVnYWN5RXZlbnQoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IsIG5hbWUpXG4gICAgICA6IHN0YW5kYXJkRXZlbnQoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IpO1xuICB9O1xufVxuIiwgImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvYmFzZS5qcyc7XG4vKipcbiAqIEl0ZW1zIGluIHRoaXMgZmlsZSBhcmUgbW9kaWZpY2F0aW9ucyBvZiBvZiB0aGUgZGVjb3JhdG9ycyBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvYmxvYi9tYWluL3BhY2thZ2VzL3JlYWN0aXZlLWVsZW1lbnQvc3JjL2RlY29yYXRvcnMvY3VzdG9tLWVsZW1lbnQudHNcbiAqXG4gKiBXZSd2ZSBhZGRlZCBjaGVja3MgdG8gcHJldmVudCByZS1yZWdpc3RyYXRpb25zIGZyb20gdGhyb3dpbmcgaGFyZCBlcnJvcnMuXG4gKi9cblxuLyoqXG4gKiBBbGxvdyBmb3IgY3VzdG9tIGVsZW1lbnQgY2xhc3NlcyB3aXRoIHByaXZhdGUgY29uc3RydWN0b3JzXG4gKi9cbnR5cGUgQ3VzdG9tRWxlbWVudENsYXNzID0gT21pdDx0eXBlb2YgSFRNTEVsZW1lbnQsICduZXcnPjtcblxuZXhwb3J0IHR5cGUgQ3VzdG9tRWxlbWVudERlY29yYXRvciA9IHtcbiAgLy8gbGVnYWN5XG4gIChjbHM6IEN1c3RvbUVsZW1lbnRDbGFzcyk6IHZvaWQ7XG5cbiAgLy8gc3RhbmRhcmRcbiAgKHRhcmdldDogQ3VzdG9tRWxlbWVudENsYXNzLCBjb250ZXh0OiBDbGFzc0RlY29yYXRvckNvbnRleHQ8Q29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+Pik6IHZvaWQ7XG59O1xuXG4vKipcbiAqIENsYXNzIGRlY29yYXRvciBmYWN0b3J5IHRoYXQgZGVmaW5lcyB0aGUgZGVjb3JhdGVkIGNsYXNzIGFzIGEgY3VzdG9tIGVsZW1lbnQuXG4gKlxuICogYGBganNcbiAqIEBjdXN0b21FbGVtZW50KCdteS1lbGVtZW50JylcbiAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgYDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKiBAcGFyYW0gdGFnTmFtZSBUaGUgdGFnIG5hbWUgb2YgdGhlIGN1c3RvbSBlbGVtZW50IHRvIGRlZmluZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmluZUVsZW1lbnQgPVxuICAodGFnTmFtZTogc3RyaW5nKTogQ3VzdG9tRWxlbWVudERlY29yYXRvciA9PlxuICAoXG4gICAgY2xhc3NPclRhcmdldDogQ3VzdG9tRWxlbWVudENsYXNzIHwgQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+LFxuICAgIGNvbnRleHQ/OiBDbGFzc0RlY29yYXRvckNvbnRleHQ8Q29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+PlxuICApID0+IHtcbiAgICBpZiAoY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyKCgpID0+IHtcbiAgICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQ/Lih0YWdOYW1lKSkge1xuICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGFzc09yVGFyZ2V0IGFzIEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldD8uKHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGFzc09yVGFyZ2V0IGFzIEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3Rvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuIiwgImltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50LCBQcmVzZXRFbGVtZW50SW50ZXJmYWNlLCBwcmVzZXRQcm9wZXJ0eSB9IGZyb20gJy4uLyc7XG5cbi8qKiBQb3NzaWJsZSBjb3JlIHBhbGV0dGUgZ3JvdXAgY29sb3IgdmFsdWVzLiAqL1xuZXhwb3J0IHR5cGUgQ29yZVBhbGV0dGUgPSAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICd0ZXJ0aWFyeScgfCAnZGFuZ2VyJyB8IHVuZGVmaW5lZDtcblxuLyoqICBQb3NzaWJsZSBzdGF0dXMgcGFsZXR0ZSBncm91cCBjb2xvciB2YWx1ZXMuICovXG5leHBvcnQgdHlwZSBTdGF0dXNQYWxldHRlID1cbiAgfCAncHJpbWFyeSdcbiAgfCAnc2Vjb25kYXJ5J1xuICB8ICd0ZXJ0aWFyeSdcbiAgfCAnYWNjZW50J1xuICB8ICd3YXJuaW5nJ1xuICB8ICdzdWNjZXNzJ1xuICB8ICdkYW5nZXInXG4gIHwgdW5kZWZpbmVkO1xuXG4vKiogUG9zc2libGUgdml6IHBhbGV0dGUgZ3JvdXAgY29sb3IgdmFsdWVzLiAqL1xuZXhwb3J0IHR5cGUgVml6UGFsZXR0ZSA9ICcxJyB8ICcyJyB8ICczJyB8ICc0JyB8ICc1JyB8ICc2JyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgUGFsZXR0ZUdyb3VwQ29sb3IgPSBDb3JlUGFsZXR0ZSB8IFN0YXR1c1BhbGV0dGUgfCBWaXpQYWxldHRlO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb2xvckludGVyZmFjZTxQYWxldHRlR3JvdXA+IHtcbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIHByaW1hcnkgY29sb3IgcGFsZXR0ZSB1c2VkIHRvIHRoZW1lIHRoaXMgY29tcG9uZW50XG4gICAqIEBhdHRyIGNvbG9yXG4gICAqL1xuICBjb2xvcjogUGFsZXR0ZUdyb3VwO1xufVxuXG5leHBvcnQgZW51bSBQYWxldHRlR3JvdXBPcHRpb24ge1xuICBDb3JlID0gJ2NvcmUnLFxuICBTdGF0dXMgPSAnc3RhdHVzJyxcbiAgVml6ID0gJ3ZpeicsXG59XG5cbmV4cG9ydCBjb25zdCBDb3JlQ29sb3JNaXhpbiA9IDxcbiAgVCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQgJiBQYXJ0aWFsPFByZXNldEVsZW1lbnRJbnRlcmZhY2U8YW55Pj4+XG4+KFxuICBzdXBlckNsYXNzOiBUXG4pID0+IHtcbiAgY2xhc3MgQ29sb3JFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgcHJpbWFyeSBjb2xvciBwYWxldHRlIHVzZWQgdG8gdGhlbWUgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBjb2xvclxuICAgICAqL1xuICAgIEBwcmVzZXRQcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgY29sb3I6IENvcmVQYWxldHRlO1xuICB9XG5cbiAgcmV0dXJuIENvbG9yRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxDb2xvckludGVyZmFjZTxDb3JlUGFsZXR0ZT4+ICYgVDtcbn07XG5cbmV4cG9ydCBjb25zdCBTdGF0dXNDb2xvck1peGluID0gPFxuICBUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudCAmIFBhcnRpYWw8UHJlc2V0RWxlbWVudEludGVyZmFjZTxhbnk+Pj5cbj4oXG4gIHN1cGVyQ2xhc3M6IFRcbikgPT4ge1xuICBjbGFzcyBDb2xvckVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBwcmltYXJ5IGNvbG9yIHBhbGV0dGUgdXNlZCB0byB0aGVtZSB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBhdHRyIGNvbG9yXG4gICAgICovXG4gICAgQHByZXNldFByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBjb2xvcjogU3RhdHVzUGFsZXR0ZTtcbiAgfVxuXG4gIHJldHVybiBDb2xvckVsZW1lbnQgYXMgQ29uc3RydWN0b3I8Q29sb3JJbnRlcmZhY2U8U3RhdHVzUGFsZXR0ZT4+ICYgVDtcbn07XG5cbmV4cG9ydCBjb25zdCBWaXpDb2xvck1peGluID0gPFxuICBUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudCAmIFBhcnRpYWw8UHJlc2V0RWxlbWVudEludGVyZmFjZTxhbnk+Pj5cbj4oXG4gIHN1cGVyQ2xhc3M6IFRcbikgPT4ge1xuICBjbGFzcyBDb2xvckVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBwcmltYXJ5IGNvbG9yIHBhbGV0dGUgdXNlZCB0byB0aGVtZSB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBhdHRyIGNvbG9yXG4gICAgICovXG4gICAgQHByZXNldFByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBjb2xvcjogVml6UGFsZXR0ZTtcbiAgfVxuXG4gIHJldHVybiBDb2xvckVsZW1lbnQgYXMgQ29uc3RydWN0b3I8Q29sb3JJbnRlcmZhY2U8Vml6UGFsZXR0ZT4+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBwcmVzZXRQcm9wZXJ0eSB9IGZyb20gJy4uL3ByZXNldHMvcHJlc2V0LmRlY29yYXRvcic7XG5pbXBvcnQgeyBQcmVzZXRFbGVtZW50SW50ZXJmYWNlIH0gZnJvbSAnLi4vcHJlc2V0cy9wcmVzZXQubWl4aW4nO1xuXG5leHBvcnQgdHlwZSBEZW5zaXR5T3B0aW9ucyA9ICdjb21wYWN0JyB8ICdjb21meScgfCAncm9vbXknIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEZW5zaXR5SW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIGRhdGEgZGVuc2l0eSBvZiB0aGlzIGNvbXBvbmVudFxuICAgKiBAYXR0ciBkZW5zaXR5XG4gICAqL1xuICBkZW5zaXR5OiBEZW5zaXR5T3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IERlbnNpdHlNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudCAmIFByZXNldEVsZW1lbnRJbnRlcmZhY2U8YW55Pj4+KFxuICBzdXBlckNsYXNzOiBUXG4pID0+IHtcbiAgY2xhc3MgRGVuc2l0eUVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBkYXRhIGRlbnNpdHkgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBkZW5zaXR5XG4gICAgICovXG4gICAgQHByZXNldFByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBkZW5zaXR5OiBEZW5zaXR5T3B0aW9ucztcbiAgfVxuICByZXR1cm4gRGVuc2l0eUVsZW1lbnQgYXMgQ29uc3RydWN0b3I8RGVuc2l0eUludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3QoW2RlbnNpdHk9Y29tcGFjdF0pey0tbXRlLXNwYWNlLXh4czp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eHMpOy0tbXRlLXNwYWNlLXhzOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1zbSk7LS1tdGUtc3BhY2UtbWQ6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QtbWQpOy0tbXRlLXNwYWNlLWxnOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14bCk7LS1tdGUtc3BhY2UteHhsOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXh4bCk7LS1tdGUtc3BhY2UteHh4bDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eHhsKX06aG9zdChbZGVuc2l0eT1jb21meV0pey0tbXRlLXNwYWNlLXh4czp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHhzKTstLW10ZS1zcGFjZS14czp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHMpOy0tbXRlLXNwYWNlLXNtOnZhcigtLW10ZS1zcGFjZS1jb21meS1zbSk7LS1tdGUtc3BhY2UtbWQ6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LW1kKTstLW10ZS1zcGFjZS1sZzp2YXIoLS1tdGUtc3BhY2UtY29tZnktbGcpOy0tbXRlLXNwYWNlLXhsOnZhcigtLW10ZS1zcGFjZS1jb21meS14bCk7LS1tdGUtc3BhY2UteHhsOnZhcigtLW10ZS1zcGFjZS1jb21meS14eGwpOy0tbXRlLXNwYWNlLXh4eGw6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4eGwpfTpob3N0KFtkZW5zaXR5PXJvb215XSl7LS1tdGUtc3BhY2UteHhzOnZhcigtLW10ZS1zcGFjZS1yb29teS14eHMpOy0tbXRlLXNwYWNlLXhzOnZhcigtLW10ZS1zcGFjZS1yb29teS14cyk7LS1tdGUtc3BhY2Utc206dmFyKC0tbXRlLXNwYWNlLXJvb215LXNtKTstLW10ZS1zcGFjZS1tZDp2YXIoLS1tdGUtc3BhY2Utcm9vbXktbWQpOy0tbXRlLXNwYWNlLWxnOnZhcigtLW10ZS1zcGFjZS1yb29teS1sZyk7LS1tdGUtc3BhY2UteGw6dmFyKC0tbXRlLXNwYWNlLXJvb215LXhsKTstLW10ZS1zcGFjZS14eGw6dmFyKC0tbXRlLXNwYWNlLXJvb215LXh4bCk7LS1tdGUtc3BhY2UteHh4bDp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHh4bCl9YDsiLCAiaW1wb3J0IHsgTGl0RWxlbWVudCwgUHJvcGVydHlWYWx1ZXMgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uLyc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERpc2FibGVkSW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIERpc2FibGVzIHRoaXMgY29tcG9uZW50XG4gICAqIEBhdHRyIGRpc2FibGVkXG4gICAqL1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IERpc2FibGVkTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPExpdEVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIERpc2FibGVkRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIERpc2FibGVzIHRoaXMgY29tcG9uZW50XG4gICAgICogQGF0dHIgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvLyBCZWNhdXNlIGBhcmlhRGlzYWJsZWRgIGV4aXN0cyBhcyBhIHN0cmluZyBvbiBMaXRFbGVtZW50IHdlIGNhbm5vdCBkZWNsYXJlIHRoaXMgYSBwcm9wZXJ0eSBoZXJlXG4gICAgcHJvdGVjdGVkIHdpbGxVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlczxhbnk+KTogdm9pZCB7XG4gICAgICBzdXBlci53aWxsVXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChfY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCBgJHt0aGlzLmRpc2FibGVkfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIERpc2FibGVkRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxEaXNhYmxlZEludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgcHJlc2V0UHJvcGVydHkgfSBmcm9tICcuLi9wcmVzZXRzL3ByZXNldC5kZWNvcmF0b3InO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJbnZlcnNlSW50ZXJmYWNlIHtcbiAgLyoqIFJlbmRlcnMgdGhpcyBjb21wb25lbnQgd2l0aCBpbnZlcnNlIHRoZW1pbmcgKi9cbiAgaW52ZXJzZTogYm9vbGVhbjtcblxuICAvKiogU3BlY2lhbCBvcHRpb24gdG8gb3ZlcnJpZGUgaW52ZXJzZSB3aGVuIGl0IGlzIHNldCBieSBhIHByZXNldCAqL1xuICB3aXRob3V0SW52ZXJzZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IEludmVyc2VNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgSW52ZXJzZUVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKiogUmVuZGVycyB0aGlzIGNvbXBvbmVudCB3aXRoIGludmVyc2UgdGhlbWluZyAqL1xuICAgIEBwcmVzZXRQcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgaW52ZXJzZSA9IGZhbHNlO1xuXG4gICAgLyoqIFNwZWNpYWwgb3B0aW9uIHRvIG92ZXJyaWRlIGludmVyc2Ugd2hlbiBpdCBpcyBzZXQgYnkgYSBwcmVzZXQgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHdpdGhvdXRJbnZlcnNlID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIEludmVyc2VFbGVtZW50IGFzIENvbnN0cnVjdG9yPEludmVyc2VJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0KFtpbnZlcnNlXTpub3QoW3dpdGhvdXRJbnZlcnNlXSkpey0tbXRlLXN1cmZhY2UtMTp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlKTstLW10ZS1zdXJmYWNlLTEtcmdiOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UtcmdiKTstLW10ZS1zdXJmYWNlLTI6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS0yLXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtc3VyZmFjZS0zOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tbXRlLXN1cmZhY2UtMy1yZ2I6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpOy0tbXRlLXN1cmZhY2UtNDp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlKTstLW10ZS1zdXJmYWNlLTQtcmdiOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UtcmdiKTstLW10ZS1pbmstMTp2YXIoLS1tdGUtd2hpdGUpOy0tbXRlLWluay0xLXJnYjp2YXIoLS1tdGUtd2hpdGUtcmdiKTstLW10ZS1pbmstMjp2YXIoLS1tdGUtd2hpdGUpOy0tbXRlLWluay0yLXJnYjp2YXIoLS1tdGUtd2hpdGUtcmdiKTstLW10ZS1pbmstMzp2YXIoLS1tdGUtd2hpdGUpOy0tbXRlLWluay0zLXJnYjp2YXIoLS1tdGUtd2hpdGUtcmdiKTstLW10ZS1pbmstNDp2YXIoLS1tdGUtYmxhY2spOy0tbXRlLWluay00LXJnYjp2YXIoLS1tdGUtYmxhY2stcmdiKTstLW10ZS1pbmstNTp2YXIoLS1tdGUtYmxhY2spOy0tbXRlLWluay01LXJnYjp2YXIoLS1tdGUtYmxhY2stcmdiKTstLW10ZS1ib3JkZXItMTp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UpOy0tbXRlLWJvcmRlci0xLXJnYjp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UtcmdiKTstLW10ZS1ib3JkZXItMjp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UpOy0tbXRlLWJvcmRlci0yLXJnYjp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UtcmdiKTstLW10ZS1ib3JkZXItMzp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UpOy0tbXRlLWJvcmRlci0zLXJnYjp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UtcmdiKTstLW10ZS1kaXNhYmxlZC0xOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTEpOy0tbXRlLWRpc2FibGVkLTEtcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTEtcmdiKTstLW10ZS1kaXNhYmxlZC0yOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTIpOy0tbXRlLWRpc2FibGVkLTItcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTIpOy0tbXRlLWRpc2FibGVkLTM6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMyk7LS1tdGUtZGlzYWJsZWQtMy1yZ2I6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMy1yZ2IpOy0tbXRlLWRpc2FibGVkLTQ6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMyk7LS1tdGUtZGlzYWJsZWQtNC1yZ2I6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMy1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMS1kZWZhdWx0LXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTEtZGVmYXVsdC1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1hKTstLW10ZS1pdC1zdXJmYWNlLTEtaG92ZXItcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItcmdiKTstLW10ZS1pdC1zdXJmYWNlLTEtaG92ZXItYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLWEpOy0tbXRlLWl0LXN1cmZhY2UtMS1hY3RpdmUtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWFjdGl2ZS1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLWEpOy0tbXRlLWl0LXN1cmZhY2UtMi1kZWZhdWx0LXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1hKTstLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItcmdiKTstLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLWEpOy0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLWEpOy0tbXRlLWl0LXN1cmZhY2UtMy1kZWZhdWx0LXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTMtZGVmYXVsdC1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1hKTstLW10ZS1pdC1zdXJmYWNlLTMtaG92ZXItcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItcmdiKTstLW10ZS1pdC1zdXJmYWNlLTMtaG92ZXItYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLWEpOy0tbXRlLWl0LXN1cmZhY2UtMy1hY3RpdmUtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0zLWFjdGl2ZS1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLWEpOy0tbXRlLWxpZ2h0OnZhcigtLW10ZS13aGl0ZSk7LS1tdGUtbGlnaHQtcmdiOnZhcigtLW10ZS13aGl0ZS1yZ2IpOy0tbXRlLWRhcms6dmFyKC0tbXRlLWJsYWNrKTstLW10ZS1kYXJrLXJnYjp2YXIoLS1tdGUtYmxhY2stcmdiKTstLWJ1dHRvbi1maWxsZWQtYmc6dmFyKC0tbXRlLXdoaXRlKTstLWJ1dHRvbi1maWxsZWQtaW5rOnZhcigtLW10ZS1ibGFjayk7LS1idXR0b24tZmlsbGVkLWFjdGl2ZS1iZzp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UpOy0tYnV0dG9uLWZpbGxlZC1hY3RpdmUtaW5rOnZhcigtLW10ZS13aGl0ZSl9YDsiLCAiaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQgfSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgcHJlc2V0UHJvcGVydHkgfSBmcm9tICcuLi9wcmVzZXRzL3ByZXNldC5kZWNvcmF0b3InO1xuaW1wb3J0IHsgUHJlc2V0RWxlbWVudEludGVyZmFjZSB9IGZyb20gJy4uL3ByZXNldHMvcHJlc2V0Lm1peGluJztcblxuZXhwb3J0IHR5cGUgU2l6ZU9wdGlvbnMgPSAnbWQnIHwgJ3hzJyB8ICdzbScgfCAnbGcnIHwgJ3hsJyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2l6ZUludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBzY2FsZSBvZiB0aGlzIGNvbXBvbmVudFxuICAgKiBAYXR0ciBzaXplXG4gICAqL1xuICBzaXplOiBTaXplT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IFNpemVNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudCAmIFBhcnRpYWw8UHJlc2V0RWxlbWVudEludGVyZmFjZTxhbnk+Pj4+KFxuICBzdXBlckNsYXNzOiBUXG4pID0+IHtcbiAgY2xhc3MgU2l6ZUVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBzY2FsZSBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBhdHRyIHNpemVcbiAgICAgKi9cbiAgICBAcHJlc2V0UHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHNpemU6IFNpemVPcHRpb25zO1xuICB9XG4gIHJldHVybiBTaXplRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxTaXplSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBvblVwZGF0ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRGlzYWJsZWRJbnRlcmZhY2UgfSBmcm9tICcuL2Rpc2FibGVkLm1peGluJztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgaXNTc3IgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUYWJJbmRleEludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgdGFiaW5kZXggYXR0cmlidXRlIHZhbHVlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnRcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZ2V0VGFiSW5kZXhBZGFwdGVyKCk6IHN0cmluZztcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHNldCB0aGUgdGFiaW5kZXggYXR0cmlidXRlIG9uIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHNldFRhYkluZGV4QWRhcHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJlbW92ZSB0aGUgdGFiaW5kZXggYXR0cmlidXRlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnRcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCk6IHZvaWQ7XG59XG5cbi8qKlxuICogTWl4aW4gdG8gcHJvcGVybHkgbWFuYWdlIHRoZSB0YWJpbmRleCBpbiBhIG5vbi1pbnRydXNpdmUgd2F5LiBXaGVuIGRpc2FibGVkIGlzIHRydWUsXG4gKiB0aGUgdGFiaW5kZXggd2lsbCBBTFdBWVMgYmUgYC0xYC4gSG93ZXZlciwgYW55IGNoYW5nZXMgdG8gdGFiaW5kZXggd2lsbCBiZSBpbnRlcmNlcHRlZFxuICogYW5kIGNhY2hlZCBpbnRlcm5hbGx5IHVudGlsIGRpc2FibGVkIGlzIGZhbHNlLCB0aGVuIHRhYmluZGV4IHdpbGwgYmUgcmVzdG9yZWQgdG8gdGhlXG4gKiBjYWNoZWQgdmFsdWUsIG9yIHJlbW92ZWQgaWYgdGhhdCBpcyB1bmRlZmluZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBUYWJJbmRleE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50ICYgRGlzYWJsZWRJbnRlcmZhY2U+PihcbiAgc3VwZXJDbGFzczogVCxcbiAgb3B0aW9uczogeyBpbml0aWFsVGFiSW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCB9ID0geyBpbml0aWFsVGFiSW5kZXg6IHVuZGVmaW5lZCB9XG4pID0+IHtcbiAgY2xhc3MgVGFiSW5kZXhFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiAndGFiaW5kZXgnLCB0eXBlOiBOdW1iZXIsIG5vQWNjZXNzb3I6IHRydWUgfSlcbiAgICBwdWJsaWMgb3ZlcnJpZGUgc2V0IHRhYkluZGV4KHRhYkluZGV4OiBudW1iZXIpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIC8vIFdoZW4gc2V0dGluZyB0aGUgdGFiSW5kZXggb24gdGhlIGN1cnJlbnQgZWxlbWVudCB0byBgLTFgIGRpc2FibGVkLCB3ZSB3YW50IHRvIGtlZXAgdHJhY2sgb2Ygd2hhdCB0aGUgdGFiSW5kZXggdmFsdWUgYmVmb3JlIHRoYXQgd2FzXG4gICAgICAgIC8vIGFzIHRoZSBjYWNoZWRUYWJJbmRleC4gVG8gZG8gdGhpcyB3ZSBtdXN0IGlnbm9yZSB0aGUgaW5pdGlhbCBjaGFuZ2UgdG8gYC0xYCBhbmQgdGhlbiBjYWNoZSBhbnkgZnV0dXJlIHZhbHVlcyBiZWZvcmUga2VlcGluZyB0aGVcbiAgICAgICAgLy8gdGFiSW5kZXggYXMgYC0xYCB1bnRpbCBubyBsb25nZXIgZGlzYWJsZWQuIFRoZW4gd2UgY2FuIHJldHVybiB0aGUgdGFiSW5kZXggdG8gd2hhdGV2ZXIgdGhlIGxhc3Qgc2V0IHZhbHVlIHdhcyBmcm9tIHRoZSBjYWNoZWQgaW5kZXguXG4gICAgICAgIGlmICghdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKCctMScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90YWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl90YWJJbmRleH1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIG92ZXJyaWRlIGdldCB0YWJJbmRleCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90YWJJbmRleDtcbiAgICB9XG4gICAgcHJpdmF0ZSBfdGFiSW5kZXggPSBvcHRpb25zPy5pbml0aWFsVGFiSW5kZXg7XG4gICAgcHJpdmF0ZSBfY2FjaGVkVGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gZmFsc2U7XG5cbiAgICBAb25VcGRhdGUoWydkaXNhYmxlZCddLCB7IG9uOiAnYm90aCcgfSlcbiAgICBwcml2YXRlIGhhbmRsZVRhYmluZGV4Q2hhbmdlKGNoYW5nZWRQcm9wcykge1xuICAgICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgaWYgKGNoYW5nZWRQcm9wcy5nZXQoJ2Rpc2FibGVkJykgPT09IGZhbHNlICYmIHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jYWNoZWRUYWJJbmRleCA9IE51bWJlcih0aGlzLmdldFRhYkluZGV4QWRhcHRlcigpKTtcbiAgICAgICAgICB0aGlzLl90YWJJbmRleCA9IC0xO1xuICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKCctMScsIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYW5nZWRQcm9wcy5nZXQoJ2Rpc2FibGVkJykgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5fY2FjaGVkVGFiSW5kZXggIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9jYWNoZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fdGFiSW5kZXggPSB0aGlzLl9jYWNoZWRUYWJJbmRleDtcbiAgICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKGAke3RoaXMuX2NhY2hlZFRhYkluZGV4fWApO1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVUYWJJbmRleEFkYXB0ZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHRhYmluZGV4IGF0dHJpYnV0ZSB2YWx1ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50ICovXG4gICAgZ2V0VGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIH1cblxuICAgIC8qKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gc2V0IHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgb24gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgKi9cbiAgICBzZXRUYWJJbmRleEFkYXB0ZXIodmFsdWU6IHN0cmluZywgc2hvdWxkUHJldmVudFRhYkluZGV4Q2hhbmdlT25TZWxmID0gZmFsc2UpIHtcbiAgICAgIGlmIChzaG91bGRQcmV2ZW50VGFiSW5kZXhDaGFuZ2VPblNlbGYpIHtcbiAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJlbW92ZSB0aGUgdGFiaW5kZXggYXR0cmlidXRlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgKi9cbiAgICByZW1vdmVUYWJJbmRleEFkYXB0ZXIoKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICB3aWxsVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICBzdXBlci53aWxsVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKGlzU3NyKCkgJiYgdGhpcy5fdGFiSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl90YWJJbmRleH1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICAgIGlmICh0aGlzLl90YWJJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKGAke3RoaXMuX3RhYkluZGV4fWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gVGFiSW5kZXhFbGVtZW50IGFzIENvbnN0cnVjdG9yPFRhYkluZGV4SW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50IH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IHByZXNldFByb3BlcnR5IH0gZnJvbSAnLi4vcHJlc2V0cy9wcmVzZXQuZGVjb3JhdG9yJztcbmltcG9ydCB7IFByZXNldEVsZW1lbnRJbnRlcmZhY2UgfSBmcm9tICcuLi9wcmVzZXRzL3ByZXNldC5taXhpbic7XG5cbmV4cG9ydCB0eXBlIFJhZGl1c09wdGlvbnMgPSAnc20nIHwgJ21kJyB8ICdsZycgfCAnbm9uZScgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJhZGl1c0ludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBib3JkZXItcmFkaXVzIG9mIHRoaXMgY29tcG9uZW50XG4gICAqIEBhdHRyIHJhZGl1c1xuICAgKi9cbiAgcmFkaXVzOiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgUmFkaXVzTWl4aW4gPSA8XG4gIFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50ICYgUGFydGlhbDxQcmVzZXRFbGVtZW50SW50ZXJmYWNlPGFueT4+PlxuPihcbiAgc3VwZXJDbGFzczogVFxuKSA9PiB7XG4gIGNsYXNzIFJhZGl1c0VsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBib3JkZXItcmFkaXVzIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQGF0dHIgcmFkaXVzXG4gICAgICovXG4gICAgQHByZXNldFByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSByYWRpdXM6IFJhZGl1c09wdGlvbnM7XG4gIH1cbiAgcmV0dXJuIFJhZGl1c0VsZW1lbnQgYXMgQ29uc3RydWN0b3I8UmFkaXVzSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQsIFN0eWxlTWFwIH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgc2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE10ZUVsZW1lbnRQYXJ0cyB7XG4gIC8qKiBUaGUgaG9zdCBlbGVtZW50IFwicGFydFwiLiBPdmVycmlkZXMgdGhlIGBzZWAgcHJvcGVydHkgb2YgdGhpcyBlbGVtZW50ICovXG4gIGhvc3Q/OiBTdHlsZU1hcDtcbn1cblxuZXhwb3J0IHR5cGUgU3R5bGVQYXJ0c01hcDxUID0gc3RyaW5nIHwgbnVtYmVyPiA9IHtcbiAgW25hbWU6IHN0cmluZ106IFN0eWxlTWFwPFQ+O1xufTtcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3R5bGVQYXJ0c0ludGVyZmFjZTxTdHlsZVBhcnRzPiB7XG4gIC8qKlxuICAgKiBTdHlsZSBtYXBwaW5ncyB0aGF0IGFyZSBhcHBsaWVkIHRvIGVhY2ggY3NzIHBhcnQgYnkgbmFtZS4gU2V0IHRoZVxuICAgKiBwcm9wZXJ0eSBgaG9zdGAgdG8gYXBwbHkgYSBgU3R5bGVJbmZvYCBvYmplY3QgdG8gdGhlIGVsZW1lbnQgaG9zdCBpdHNlbGYuXG4gICAqL1xuICBzcD86IFN0eWxlUGFydHM7XG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZVBhcnRzTWl4aW4gPSA8U3R5bGVQYXJ0cywgVCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIFN0eWxlUGFydHNFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogU3R5bGUgbWFwcGluZ3MgdGhhdCBhcmUgYXBwbGllZCB0byBlYWNoIGNzcyBwYXJ0IGJ5IG5hbWUuIFNldCB0aGVcbiAgICAgKiBwcm9wZXJ0eSBgaG9zdGAgdG8gYXBwbHkgYSBgU3R5bGVJbmZvYCBvYmplY3QgdG8gdGhlIGVsZW1lbnQgaG9zdCBpdHNlbGYuXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCByZWZsZWN0OiB0cnVlIH0pIHNwOiBTdHlsZVBhcnRzO1xuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgICAgc3VwZXIudXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKTtcblxuICAgICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ3NwJykpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5zcCA/PyAoe30gYXMgU3R5bGVQYXJ0cykpLmZvckVhY2goKFtwYXJ0LCBzdHlsZU1hcF0pID0+IHtcbiAgICAgICAgICAvLyBEb3VibGUgdGhlIGA6aG9zdGAgc2VsZWN0b3IgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgYmV5b25kIG1vc3QgY29tcG9uZW50IGxldmVsIHN0eWxlcyBieSBkZWZhdWx0XG4gICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvckZhY3RvcnkoXG4gICAgICAgICAgICBwYXJ0ID09PSAnaG9zdCdcbiAgICAgICAgICAgICAgPyAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0J1xuICAgICAgICAgICAgICA6IGA6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6OnBhcnQoJHtwYXJ0fSlgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoYHNwLSR7cGFydH1gLCBzZWxlY3Rvciwgc3R5bGVNYXApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gU3R5bGVQYXJ0c0VsZW1lbnQgYXMgQ29uc3RydWN0b3I8U3R5bGVQYXJ0c0ludGVyZmFjZTxTdHlsZVBhcnRzPj4gJiBUO1xufTtcbiIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7cG9zaXRpb246cmVsYXRpdmV9I2FuY2hvcntpbnNldDowO3Bvc2l0aW9uOmFic29sdXRlfWA7IiwgImltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIENsaWNrT3V0c2lkZUNvbnRyb2xsZXIsXG4gIENvbnN0cnVjdG9yLFxuICBFdmVudEVtaXR0ZXIsXG4gIEZvY3VzVHJhcENvbnRyb2xsZXIsXG4gIE10ZUVsZW1lbnQsXG4gIFBvcnRhbEFkYXB0ZXIsXG4gIFBvcnRhbENvbnRyb2xsZXIsXG4gIGRlZmF1bHRQb3J0YWxBZGFwdGVyLFxuICBldmVudEVtaXR0ZXIsXG4gIGlzU3NyLFxufSBmcm9tICcuLic7XG5pbXBvcnQgeyBQcm9wZXJ0eVZhbHVlTWFwIH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3ZlcmxheUludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBvdmVybGF5IHN0YXRlIG9uIHRoZSBvdmVybGF5IG1peGluLiBCeSBkZWZhdWx0IGFsbCBvcHRpb25zIGFyZSBzZXQgdG8gdHJ1ZSBpbml0aWFsbHkuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBzZXRPdmVybGF5T3B0aW9ucyhvcHRpb25zOiB7XG4gICAgd2l0aENsb3NlT25DbGlja091dHNpZGU/OiBib29sZWFuO1xuICAgIHdpdGhDbG9zZU9uRXNjYXBlPzogYm9vbGVhbjtcbiAgICB3aXRoRm9jdXNUcmFwPzogYm9vbGVhbjtcbiAgICB3aXRoUG9ydGFsPzogYm9vbGVhbjtcbiAgICB3aXRoRGltQmFja2Ryb3A/OiBib29sZWFuO1xuICAgIHdpdGhJbmVydEJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICB3aXRoU2Nyb2xsTG9jaz86IGJvb2xlYW47XG4gICAgYW5pbWF0aW9uRHVyYXRpb24/OiBudW1iZXI7XG4gICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG4gICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlPzogYm9vbGVhbjtcbiAgICBmb2N1c1RyYXBUYXJnZXQ/OiBFbGVtZW50O1xuICB9KTogdW5rbm93bjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIG92ZXJsYXkgc2hvdWxkIG9wZW4uIENhbiBhZGQgYSBsaXN0ZW5lciBmb3Igb3V0c2lkZSBjbGlja3MsIHBvcnRhbCBhbiBlbGVtZW50LFxuICAgKiBhbmQgcHJldmVudCB0aGUgYm9keSBmcm9tIHNjcm9sbGluZyB1cG9uIG9wZW4uXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBoYW5kbGVPdmVybGF5T3BlbihvcHRpb25zPzoge1xuICAgIGNsaWNrT3V0c2lkZUVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcbiAgICB3aWxsT3Blbj86ICgpID0+IHZvaWQ7XG4gIH0pOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgYWZ0ZXIgdGhlIG92ZXJsYXkgaGFzIGJlZW4gb3B0aW9uYWxseSBwb3J0YWxlZCBhbmQvb3IgYWxsIGFuaW1hdGlvbnMgaGF2ZSBmaW5pc2hlZC5cbiAgICovXG4gIGhhbmRsZU92ZXJsYXlPcGVuRW5kKCk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBvdmVybGF5IGVsZW1lbnQgc2hvdWxkIGNsb3NlLiBDYW4gc3RvcCBsaXN0ZW5pbmcgZm9yIG91dHNpZGUgY2xpY2tzLCByZWxlYXNlIGEsXG4gICAqIGZvY3VzIHRyYXAsIGFuZCBhbGxvdyB0aGUgYm9keSBlbGVtZW50IHRvIHNjcm9sbCBhZ2Fpbi5cbiAgICovXG4gIGhhbmRsZU92ZXJsYXlDbG9zZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgb3ZlcmxheSBlbGVtZW50IGhhcyBmaW5pc2hlZCBjbG9zaW5nIGFuZC9vciBhbGwgYW5pbWF0aW9ucyBoYXZlIGNvbXBsZXRlZC4gQ2FuXG4gICAqIHJlbW92ZSBhbiBlbGVtZW50IGZyb20gdGhlIHBvcnRhbC5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIGhhbmRsZU92ZXJsYXlDbG9zZUVuZChvcHRpb25zPzogeyByZW1vdmVGcm9tRWxlbWVudD86IEhUTUxFbGVtZW50IH0pOiBQcm9taXNlPHZvaWQ+O1xuXG4gIG9wZW4oKTogUHJvbWlzZTx2b2lkPjtcblxuICBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBUaGUgdGFiIGluZGV4IGZvciB0aGlzIGVsZW1lbnRcbiAgICovXG4gIHRhYmluZGV4OiBudW1iZXI7XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaXMgaW5pdGlhbGx5IG9wZW5lZCAqL1xuICBfb25PcGVuOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEVtaXR0ZWQgYWZ0ZXIgdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBvcGVuaW5nICovXG4gIF9vbk9wZW5FbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgY2xvc2luZyAqL1xuICBfb25DbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBjbG9zaW5nICovXG4gIF9vbkNsb3NlRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgcG9ydGFsQWRhcHRlcjogUG9ydGFsQWRhcHRlcjtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBUaGUgb3BlbmVkIHN0YXRlIG9mIHRoZSBvdmVybGF5IHJlZ2FyZGxlc3Mgb2YgYW5pbWF0aW9uc1xuICAgKi9cbiAgb3BlbmVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEluZGljYXRlcyB0aGUgb3ZlcmxheSBoYXMgYmVlbiBwb3J0YWxlZCBhbmQgcmVhZHkgdG8gYW5pbWF0ZVxuICAgKi9cbiAgcmVhZHlGb3JBbmltYXRpb246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogSW5kaWNhdGVzIHRoZSBvdmVybGF5IGhhcyBiZWVuIGZ1bGx5IGFuaW1hdGVkIG9wZW5cbiAgICovXG4gIG9wZW5lZEZ1bGw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBPdmVybGF5TWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIE92ZXJsYXlFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqIFRoZSB0YWIgaW5kZXggb2YgdGhpcyBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiAndGFiaW5kZXgnLCB0eXBlOiBOdW1iZXIgfSkgdGFiaW5kZXggPSAtMTtcblxuICAgIC8qKlxuICAgICAqIEFkYXB0ZXIgZm9yIHBvcnRhbCBET00gb3BlcmF0aW9uIHRoYXQgY2FuIGJlIHN1cHBsZW1lbnRlZCBmb3IgZXh0ZXJuYWwtZnJhbWV3b3JrIGludGVncmF0aW9ucy5cbiAgICAgKiBOb3RhYmx5LWxldmVyYWdlZCBieSBvdmVybGF5cyBpbiBvdXIgZ2VuZXJhdGVkIHJlYWN0IHdyYXBwZXJzLlxuICAgICAqXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSgpIHBvcnRhbEFkYXB0ZXI6IFBvcnRhbEFkYXB0ZXIgPSBkZWZhdWx0UG9ydGFsQWRhcHRlcjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBvcGVuZWQgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uT3BlbjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIEVtaXR0ZWQgYWZ0ZXIgdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBvcGVuaW5nICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbk9wZW5FbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBjbG9zZWQgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBjbG9zaW5nICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkNsb3NlRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBlbGVtZW50IHNob3VsZCB1c2UgYSBmb2N1cyB0cmFwIG9yIG5vdCAqL1xuICAgIHByaXZhdGUgX3dpdGhGb2N1c1RyYXAgPSB0cnVlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgZWxlbWVudCBzaG91bGQgY2xvc2Ugd2hlbiBhIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgdGhlIGVsZW1lbnQgKi9cbiAgICBwcml2YXRlIF9jbG9zZU9uQ2xpY2tPdXRzaWRlID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBjbG9zZSB3aGVuIHRoZSBlc2NhcGUgYnV0dG9uIGlzIHByZXNzZWQgKi9cbiAgICBwcml2YXRlIF9jbG9zZU9uRXNjYXBlID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IHNob3VsZCB1c2UgYSBwb3J0YWwgb3Igbm90ICovXG4gICAgcHJpdmF0ZSBfd2l0aFBvcnRhbCA9IHRydWU7XG5cbiAgICAvKiogV2V0aGVyIHRoZSB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGNsaWNrIGJlaGluZCB0aGUgYmFja2Ryb3Agb3Igbm90ICovXG4gICAgcHJpdmF0ZSBfd2l0aEluZXJ0QmFja2Ryb3AgPSBmYWxzZTtcblxuICAgIC8qKiBXZXRoZXIgdGhlIG92ZXJsYXkncyBiYWNrZHJvcCBzaG91bGQgcmVuZGVyIGRpbW1lZCAqL1xuICAgIHByaXZhdGUgX3dpdGhEaW1CYWNrZHJvcCA9IGZhbHNlO1xuXG4gICAgLyoqIFdldGhlciBvciBub3QgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlLWFwcGVuZGVkIHRvIGl0J3Mgb3JpZ2luIHBhcmVudCBlbGVtZW50IG9uIGNsb3NlIF9pZl8gcG9ydGFsZWQuICovXG4gICAgcHJpdmF0ZSBfcmV0dXJuVG9PcmlnaW5PbkNsb3NlID0gZmFsc2U7XG5cbiAgICAvKiogT3B0aW9uYWwgYmFja2Ryb3AgdGltaW5nLiBJbXBvcnRhbnQgcGFydGljdWxhcmx5IGZvciBzbW9vdGggY2xvc2VzIHdpdGggYSB2aXNpYmxlIGJhY2tkcm9wICovXG4gICAgcHJpdmF0ZSBfYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBzaG91bGQgcHJldmVudCBzY3JvbGxpbmcgb24gdGhlIGJvZHkgKi9cbiAgICBwcml2YXRlIF93aXRoU2Nyb2xsTG9jayA9IHRydWU7XG5cbiAgICBwcm90ZWN0ZWQgZm9jdXNUcmFwQ29udHJvbGxlciA9IG5ldyBGb2N1c1RyYXBDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgcHJvdGVjdGVkIGNsaWNrT3V0c2lkZUNvbnRyb2xsZXIgPSBuZXcgQ2xpY2tPdXRzaWRlQ29udHJvbGxlcih0aGlzLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3dpdGhQb3J0YWwpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZU9uQ2xpY2tPdXRzaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwcm90ZWN0ZWQgcG9ydGFsQ29udHJvbGxlciA9IG5ldyBQb3J0YWxDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgcGFyZW50IGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdGlhbFBhcmVudDogRWxlbWVudCB8IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0byBkZXRlY3QgY2xpY2tzIG91dHNpZGUgb2YgdG8gY2xvc2UgdGhlIG92ZXJsYXkgZWxlbWVudC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG5cbiAgICBwcml2YXRlIF9vcmlnaW5QYXJlbnQ/OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIF9mb2N1c1RyYXBUYXJnZXQ/OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQgPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqIFRoZSBvcGVuZWQgc3RhdGUgb2YgdGhlIG92ZXJsYXkgcmVnYXJkbGVzcyBvZiBhbmltYXRpb25zXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBvcGVuZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBJbmRpY2F0ZXMgdGhlIG92ZXJsYXkgaGFzIGJlZW4gcG9ydGFsZWQgYW5kIHJlYWR5IHRvIGFuaW1hdGVcbiAgICAgKi9cbiAgICBAc3RhdGUoKVxuICAgIHNldCByZWFkeUZvckFuaW1hdGlvbihyZWFkeUZvckFuaW1hdGlvbjogYm9vbGVhbikge1xuICAgICAgdGhpcy5fcmVhZHlGb3JBbmltYXRpb24gPSByZWFkeUZvckFuaW1hdGlvbjtcbiAgICB9XG4gICAgZ2V0IHJlYWR5Rm9yQW5pbWF0aW9uKCkge1xuICAgICAgLy8gRHVyaW5nIFNTUiByZXR1cm4gdHJ1ZSBpbiBjYXNlIHNvbWV0aGluZyBuZWVkcyB0byBiZSBvcGVuZWQgaW5pdGlhbGx5LlxuICAgICAgcmV0dXJuIGlzU3NyKCkgPyB0cnVlIDogdGhpcy5fcmVhZHlGb3JBbmltYXRpb247XG4gICAgfVxuICAgIHByaXZhdGUgX3JlYWR5Rm9yQW5pbWF0aW9uID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogVGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgb3ZlcmxheSByZWdhcmRsZXNzIG9mIGFuaW1hdGlvbnMuIFRoaXMgaXMgcmVmbGVjdGVkIGFuZCB1c2VkIGJ5XG4gICAgICogc29tZSBvdmVybGF5cyB0byByZXN0cmljdCB0aGVpciBzaXplIHdoaWxlIGhpZGRlbi4gKHNpbmNlIGRpc3BsYXk6IG5vbmUgYnJlYWtzIGFuaW1hdGlvbnMpXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBvcGVuZWRGdWxsID0gZmFsc2U7XG5cbiAgICBzZXRPdmVybGF5T3B0aW9ucyhvcHRpb25zOiB7XG4gICAgICB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZT86IGJvb2xlYW47XG4gICAgICB3aXRoQ2xvc2VPbkVzY2FwZT86IGJvb2xlYW47XG4gICAgICB3aXRoRm9jdXNUcmFwPzogYm9vbGVhbjtcbiAgICAgIHdpdGhQb3J0YWw/OiBib29sZWFuO1xuICAgICAgd2l0aEluZXJ0QmFja2Ryb3A/OiBib29sZWFuO1xuICAgICAgd2l0aERpbUJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICAgIHdpdGhTY3JvbGxMb2NrPzogYm9vbGVhbjtcbiAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuICAgICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlPzogYm9vbGVhbjtcbiAgICAgIGZvY3VzVHJhcFRhcmdldD86IEVsZW1lbnQ7XG4gICAgfSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB3aXRoRm9jdXNUcmFwLFxuICAgICAgICB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZSxcbiAgICAgICAgd2l0aENsb3NlT25Fc2NhcGUsXG4gICAgICAgIHdpdGhQb3J0YWwsXG4gICAgICAgIHdpdGhTY3JvbGxMb2NrLFxuICAgICAgICB3aXRoSW5lcnRCYWNrZHJvcCxcbiAgICAgICAgd2l0aERpbUJhY2tkcm9wLFxuICAgICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlLFxuICAgICAgICBmb2N1c1RyYXBUYXJnZXQsXG4gICAgICB9ID0gb3B0aW9ucyA/PyB7fTtcblxuICAgICAgdGhpcy5fd2l0aEZvY3VzVHJhcCA9IHdpdGhGb2N1c1RyYXAgPz8gdGhpcy5fd2l0aEZvY3VzVHJhcDtcbiAgICAgIHRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUgPSB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZSA/PyB0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlO1xuICAgICAgdGhpcy5fd2l0aFNjcm9sbExvY2sgPSB3aXRoU2Nyb2xsTG9jayA/PyB0aGlzLl93aXRoU2Nyb2xsTG9jaztcbiAgICAgIHRoaXMuX3dpdGhQb3J0YWwgPSB3aXRoUG9ydGFsID8/IHRoaXMuX3dpdGhQb3J0YWw7XG4gICAgICB0aGlzLl93aXRoSW5lcnRCYWNrZHJvcCA9XG4gICAgICAgIHdpdGhJbmVydEJhY2tkcm9wID8/ICF0aGlzLl93aXRoRm9jdXNUcmFwID8/IHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wO1xuICAgICAgdGhpcy5fd2l0aERpbUJhY2tkcm9wID0gd2l0aERpbUJhY2tkcm9wID8/IHRoaXMuX3dpdGhEaW1CYWNrZHJvcDtcbiAgICAgIHRoaXMuX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID1cbiAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPz8gdGhpcy5fYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb247XG4gICAgICB0aGlzLl9yZXR1cm5Ub09yaWdpbk9uQ2xvc2UgPSByZXR1cm5Ub09yaWdpbk9uQ2xvc2UgPz8gdGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlO1xuICAgICAgdGhpcy5fZm9jdXNUcmFwVGFyZ2V0ID0gZm9jdXNUcmFwVGFyZ2V0ID8/IHRoaXMuX2ZvY3VzVHJhcFRhcmdldDtcblxuICAgICAgaWYgKHdpdGhDbG9zZU9uRXNjYXBlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fY2xvc2VPbkVzY2FwZSAhPT0gd2l0aENsb3NlT25Fc2NhcGUpIHtcbiAgICAgICAgaWYgKHdpdGhDbG9zZU9uRXNjYXBlID09PSB0cnVlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbG9zZU9uRXNjYXBlID0gd2l0aENsb3NlT25Fc2NhcGUgPz8gdGhpcy5fY2xvc2VPbkVzY2FwZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpdGhGb2N1c1RyYXAgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAod2l0aEZvY3VzVHJhcCA9PT0gdHJ1ZSAmJiB0aGlzLnRhYmluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gLTE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlT3ZlcmxheSgpO1xuICAgIH1cblxuICAgIGhhbmRsZU92ZXJsYXlPcGVuKG9wdGlvbnM/OiB7XG4gICAgICBjbGlja091dHNpZGVFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG4gICAgICB3aWxsT3Blbj86ICgpID0+IHZvaWQ7XG4gICAgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gSWdub3JlIGlmIGFscmVhZHkgb3BlblxuICAgICAgaWYgKHRoaXMub3BlbmVkIHx8IHRoaXMub3BlbmVkRnVsbCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgICBjb25zdCB7IGNsaWNrT3V0c2lkZUVsZW1lbnQsIHdpbGxPcGVuIH0gPSBvcHRpb25zID8/IHt9O1xuICAgICAgd2lsbE9wZW4/LigpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQgPSBjbGlja091dHNpZGVFbGVtZW50IHx8IHRoaXM7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5saXN0ZW5Gb3JDbGlja3NPdXRzaWRlT2YodGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCk7XG4gICAgICAgIGlmICh0aGlzLl93aXRoUG9ydGFsKSB7XG4gICAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyXG4gICAgICAgICAgICAuYXBwZW5kVG9TdGFjayh0aGlzLCB7XG4gICAgICAgICAgICAgIHdpdGhEaW1CYWNrZHJvcDogdGhpcy5fd2l0aERpbUJhY2tkcm9wLFxuICAgICAgICAgICAgICB3aXRoSW5lcnRCYWNrZHJvcDogdGhpcy5fd2l0aEluZXJ0QmFja2Ryb3AsXG4gICAgICAgICAgICAgIHdpdGhTY3JvbGxMb2NrOiB0aGlzLl93aXRoU2Nyb2xsTG9jayxcbiAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXI6IHRoaXMuaGFuZGxlQ2xvc2VPbkNsaWNrT3V0c2lkZSxcbiAgICAgICAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb246IHRoaXMuX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICAgICAgICBwb3J0YWxBZGFwdGVyOiB0aGlzLnBvcnRhbEFkYXB0ZXIsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAvLyBXYWl0IGZvciBhcHBlbmQgdG8gY29tcGxldGUgYmVmb3JlIGFuaW1hdGluZ1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5Rm9yQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBBZnRlciBhbmltYXRpb24gYmVnaW5zIHJlc29sdmVcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fb25PcGVuLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5fb3JpZ2luUGFyZW50ICYmXG4gICAgICAgICAgICB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSAmJlxuICAgICAgICAgICAgdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkgIT09IHRoaXMuX29yaWdpblBhcmVudFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIHRoaXMuX29yaWdpblBhcmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFdhaXQgZm9yIGFwcGVuZCB0byBjb21wbGV0ZSBiZWZvcmUgYW5pbWF0aW5nXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Rm9yQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIEFmdGVyIGFuaW1hdGlvbiBiZWdpbnMgcmVzb2x2ZVxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fb25PcGVuLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMjApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVPdmVybGF5T3BlbkVuZCgpIHtcbiAgICAgIC8vIENhbmNlbCBpZiBjbG9zZWQgYmVmb3JlIG9wZW4gZW5kZWRcbiAgICAgIGlmICghdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWRGdWxsID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLl93aXRoRm9jdXNUcmFwKSB7XG4gICAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci50cmFwRm9jdXModGhpcy5fZm9jdXNUcmFwVGFyZ2V0LCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29uT3BlbkVuZC5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlT3ZlcmxheUNsb3NlKCkge1xuICAgICAgLy8gSWdub3JlIGlmIGFscmVhZHkgY2xvc2VkXG4gICAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9vbkNsb3NlLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5yZWxlYXNlRm9jdXModHJ1ZSk7XG4gICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIuaGlkZUJhY2tkcm9wKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlT3ZlcmxheUNsb3NlRW5kKG9wdGlvbnM/OiB7IHJlbW92ZUZyb21FbGVtZW50PzogSFRNTEVsZW1lbnQgfSkge1xuICAgICAgLy8gQ2FuY2VsIGlmIG9wZW5lZCBiZWZvcmUgY2xvc2UgZW5kZWRcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZEZ1bGwgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVhZHlGb3JBbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5yZW1vdmVGcm9tU3RhY2sob3B0aW9ucz8ucmVtb3ZlRnJvbUVsZW1lbnQgfHwgdGhpcyk7XG4gICAgICBpZiAodGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlKSB7XG4gICAgICAgIGlmICh0aGlzLl9vcmlnaW5QYXJlbnQgJiYgdGhpcy5fb3JpZ2luUGFyZW50ICE9PSB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSkge1xuICAgICAgICAgIHRoaXMucG9ydGFsQWRhcHRlcih0aGlzLCB0aGlzLl9vcmlnaW5QYXJlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9vbkNsb3NlRW5kLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZU92ZXJsYXlLZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnRFbGVtZW50Py5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheS13cmFwcGVyJylcbiAgICAgICAgPyB0aGlzLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnRcbiAgICAgICAgOiB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGFyZW50IGVsZW1lbnQgdGhpcyBvdmVybGF5IHdpbGwgYmUgcmVhdHRhY2hlZCB0byBlaXRoZXI6XG4gICAgICogLSBXaGVuIGNvbmZpZ3VyZWQgdG8gZG8gc28gb24gY2xvc2VcbiAgICAgKiAtIFdoZW4gXCJwb3J0YWxpbmdcIiBpcyBkaXNhYmxlZFxuICAgICAqL1xuICAgIHNldE9yaWdpblBhcmVudChuZXdPcmlnaW46IEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG4gICAgICBpZiAoY3VycmVudFBhcmVudEVsZW1lbnQgPT09IHRoaXMuX29yaWdpblBhcmVudCkge1xuICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgbmV3T3JpZ2luKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29yaWdpblBhcmVudCA9IG5ld09yaWdpbjtcbiAgICB9XG5cbiAgICAvKiogVXBkYXRlcyB2YXJpb3VzIGJlaGF2aW9ycyB0byBhcHBseSB0aGUgbGF0ZXN0IG92ZXJsYXkgb3B0aW9ucyAqL1xuICAgIHVwZGF0ZU92ZXJsYXkoKSB7XG4gICAgICAvLyBVcGRhdGUgYmFja2Ryb3AgaW5lcnRuZXNzXG4gICAgICBpZiAodGhpcy5fd2l0aEluZXJ0QmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNldEJhY2tkcm9wSW5lcnRuZXNzKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNldEJhY2tkcm9wSW5lcnRuZXNzKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSBjbGljayBvdXRzaWRlIGNvbnRyb2xsZXJcbiAgICAgIGlmICh0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlICYmICF0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuaXNMaXN0ZW5pbmcoKSkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIubGlzdGVuRm9yQ2xpY2tzT3V0c2lkZU9mKHRoaXMpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZSAmJiB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuaXNMaXN0ZW5pbmcoKSkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuc3RvcExpc3RlbmluZygpO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIGZvY3VzIHRyYXAgY29udHJvbGxlclxuICAgICAgaWYgKHRoaXMuX3dpdGhGb2N1c1RyYXAgJiYgdGhpcy5vcGVuZWQgJiYgIXRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5pc1RyYXBwaW5nRm9jdXMoKSkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIudHJhcEZvY3VzKHRoaXMuX2ZvY3VzVHJhcFRhcmdldCwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl93aXRoRm9jdXNUcmFwICYmIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5pc1RyYXBwaW5nRm9jdXMoKSkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIucmVsZWFzZUZvY3VzKHRydWUpO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIGJhY2tkcm9wIGNvbnRyb2xsZXJcbiAgICAgIGlmICh0aGlzLl93aXRoRGltQmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNob3dCYWNrZHJvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLmhpZGVCYWNrZHJvcCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZSkge1xuICAgICAgICBpZiAodGhpcy5fb3JpZ2luUGFyZW50ICYmIHRoaXMuX29yaWdpblBhcmVudCAhPT0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgdGhpcy5fb3JpZ2luUGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIG9wZW4oKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09wZW4gbWV0aG9kIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbG9zZSBtZXRob2Qgbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55KSB7XG4gICAgICBzdXBlcihhcmdzKTtcbiAgICAgIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24gPSB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChcbiAgICAgIGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlTWFwPGFueT4gfCBNYXA8UHJvcGVydHlLZXksIHVua25vd24+XG4gICAgKTogdm9pZCB7XG4gICAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgdGhpcy5fb3JpZ2luUGFyZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVDbG9zZU9uQ2xpY2tPdXRzaWRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgIGlmICh0aGlzLl9jbG9zZU9uRXNjYXBlKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBldmVudCBsaXN0ZW5lciBpbiB0aGUgZXZlbnQgdGhlIG92ZXJsYXkgZWxlbWVudCB3YXMgcG9ydGFsZWQuXG4gICAgICBpZiAodGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIubGlzdGVuRm9yQ2xpY2tzT3V0c2lkZU9mKHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5yZWxlYXNlRm9jdXModHJ1ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE92ZXJsYXlFbGVtZW50IGFzIENvbnN0cnVjdG9yPE92ZXJsYXlJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2Rpc3BsYXk6YmxvY2s7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMDB9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tZnVsbC13aWR0aDptYXgtY29udGVudDstLWNvbnRyb2wtd2lkdGg6dW5zZXQ7LS1jb250cm9sLW1pbi13aWR0aDoyNDBweDstLWNvbnRyb2wtbWF4LXdpZHRoOnZhcigtLWNvbnRyb2wtd2lkdGgpOy0tY29udHJvbC1tYXJnaW4teTp2YXIoLS1tdGUtc3BhY2Utc20pOy0tY29udHJvbC1tYXJnaW4teDp2YXIoLS1tdGUtc3BhY2Utc20pOy0tY29udHJvbC1kZXNjcmlwdG9yLW1hcmdpbjp2YXIoLS1tdGUtc3BhY2Utc20pOy0tbGFiZWwtd2lkdGg6dmFyKC0tY29udHJvbC13aWR0aCk7LS1sYWJlbC1taW4td2lkdGg6dmFyKC0tY29udHJvbC1taW4td2lkdGgpOy0tbGFiZWwtbWF4LXdpZHRoOnZhcigtLWNvbnRyb2wtbWF4LXdpZHRoKTstLWxhYmVsLW1hcmdpbi15OnZhcigtLW10ZS1zcGFjZS14cyk7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6dmFyKC0tZnVsbC13aWR0aCl9LmdyaWQtY29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWdyaWQ7Z3JpZC10ZW1wbGF0ZS1hcmVhczpcImxhYmVsXCIgXCJjb250cm9sXCI7Z3JpZC10ZW1wbGF0ZS1yb3dzOjFmciBtaW5tYXgoMCwxMDAlKTt3aWR0aDppbmhlcml0fTpob3N0KFt3aXRoRnVsbFdpZHRoXSl7LS1mdWxsLXdpZHRoOjEwMCU7LS1jb250cm9sLXdpZHRoOjEwMCV9Omhvc3QoW3dpdGhvdXRNYXJnaW5dKXstLWNvbnRyb2wtbWFyZ2luLXk6MHB4fTpob3N0KFt3aXRob3V0TWFyZ2luXSkgLmxhYmVsLWNvbnRhaW5lci5oYXMtY29udGVudHttYXJnaW4tYm90dG9tOnZhcigtLWNvbnRyb2wtZGVzY3JpcHRvci1tYXJnaW4pfS5sYWJlbC1jb250YWluZXJ7ZGlzcGxheTpub25lO2dyaWQtYXJlYTpsYWJlbDttYXgtd2lkdGg6dmFyKC0tbGFiZWwtbWF4LXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbGFiZWwtbWluLXdpZHRoKTt3aWR0aDp2YXIoLS1sYWJlbC13aWR0aCl9LmxhYmVsLWNvbnRhaW5lci5oYXMtY29udGVudHtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6dmFyKC0tbGFiZWwtbWFyZ2luLXkpfS5sYWJlbC1jb250YWluZXI6bm90KC5oYXMtY29udGVudCl7bWFyZ2luOjAhaW1wb3J0YW50fS5jb250ZXh0e2dyaWQtYXJlYTpjb250ZXh0fS5kZXNjcmlwdGlvbiwuZXJyb3IsLmhpbnQsLmxhYmVse2Rpc3BsYXk6YmxvY2t9LmRlc2NyaXB0aW9uIG10ZS1kZXNjcmlwdGlvbiwuZGVzY3JpcHRpb24gbXRlLWRlc2NyaXB0aW9uLXRleHQsLmxhYmVsIG10ZS1sYWJlbCwubGFiZWwgbXRlLWxhYmVsLXRleHQsOmhvc3QgOjpzbG90dGVkKG10ZS1kZXNjcmlwdGlvbi10ZXh0W3Nsb3Q9ZGVzY3JpcHRpb25dKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWRlc2NyaXB0aW9uW3Nsb3Q9ZGVzY3JpcHRpb25dKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWxhYmVsLXRleHRbc2xvdD1sYWJlbF0pLDpob3N0IDo6c2xvdHRlZChtdGUtbGFiZWxbc2xvdD1sYWJlbF0pe21hcmdpbjowfTpob3N0KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pey0tbGFiZWwtd2lkdGg6bWF4LWNvbnRlbnQ7LS1sYWJlbC1taW4td2lkdGg6bWF4LWNvbnRlbnR9Omhvc3QoW2xhYmVsUG9zaXRpb249YmVmb3JlXSkgLmdyaWQtY29udGFpbmVye2dyaWQtdGVtcGxhdGUtYXJlYXM6XCJsYWJlbCBjb250cm9sXCI7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1pbm1heChhdXRvLHZhcigtLWxhYmVsLXdpZHRoKSkgbWlubWF4KGF1dG8sdmFyKC0tY29udHJvbC13aWR0aCkpfTpob3N0KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pIC5sYWJlbC1jb250YWluZXJ7bWFyZ2luLWJvdHRvbTp2YXIoLS1jb250cm9sLW1hcmdpbi15KTttYXJnaW4tcmlnaHQ6dmFyKC0tY29udHJvbC1tYXJnaW4teCk7bWFyZ2luLXRvcDpjYWxjKHZhcigtLWNvbnRyb2wtbWFyZ2luLXkpICsgdmFyKC0tbGFiZWwtYmVmb3JlLW9mZnNldCkpfS5kZXNjcmlwdGlvbiwuZXJyb3IsLmhpbnR7bWluLXdpZHRoOjEwMCU7d2lkdGg6LW1vei1taW4tY29udGVudDt3aWR0aDptaW4tY29udGVudH0uY29udHJvbC1vdXRlci1jb250YWluZXJ7Z3JpZC1hcmVhOmNvbnRyb2w7bWFyZ2luLXRvcDp2YXIoLS1jb250cm9sLW1hcmdpbi15KTttYXgtd2lkdGg6dmFyKC0tY29udHJvbC1tYXgtd2lkdGgpO21pbi13aWR0aDp2YXIoLS1jb250cm9sLW1pbi13aWR0aCk7d2lkdGg6dmFyKC0tY29udHJvbC13aWR0aCl9Omhvc3QoOm5vdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKSkgLmNvbnRyb2wtb3V0ZXItY29udGFpbmVyLmhhcy1sYWJlbC1jb250ZW50e21hcmdpbi10b3A6Y2FsYyh2YXIoLS1jb250cm9sLW1hcmdpbi15KS8yKX0uY29udHJvbC1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXJnaW4tYm90dG9tOnZhcigtLWNvbnRyb2wtbWFyZ2luLXkpfS5lcnJvciwuaGludHtkaXNwbGF5Om5vbmV9LmVycm9yLmhhcy1jb250ZW50LC5oaW50Lmhhcy1jb250ZW50e2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDp2YXIoLS1jb250cm9sLWRlc2NyaXB0b3ItbWFyZ2luKX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1mb3JtLWZpZWxkLWludGVybmFsLXBhZGRpbmc6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwOnZhcigtLW10ZS1zcGFjZS1zbSk7LS1mb3JtLWZpZWxkLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCk7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1zdXJmYWNlLTIpOy0tcHJlcGVuZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1ncmV5LTEpOy0tcHJlcGVuZC1wYWRkaW5nLXg6dmFyKC0tbXRlLXNwYWNlLXNtKTstLXByZXBlbmQtYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMil9Omhvc3QoW3JhZGl1cz1zbV0pey0tZm9ybS1maWVsZC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteHMpfTpob3N0KFtyYWRpdXM9bGddKXstLWZvcm0tZmllbGQtcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXh4bCl9Omhvc3QoW3NpemU9c21dKXstLXByZXBlbmQtcGFkZGluZy14OmNhbGModmFyKC0tbXRlLXNwYWNlLXhzKSArIHZhcigtLW10ZS1zcGFjZS14eHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtcGFkZGluZzpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1mb3JtLWZpZWxkLWludGVybmFsLWdhcDpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSl9Omhvc3QoW3NpemU9bGddKXstLXByZXBlbmQtcGFkZGluZy14OmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1wYWRkaW5nOmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXA6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXhzKSl9LmZvcm0tZmllbGR7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6dmFyKC0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2dhcDp2YXIoLS1mb3JtLWZpZWxkLWludGVybmFsLWdhcCk7cG9zaXRpb246cmVsYXRpdmV9Omhvc3QoW2Rpc2FibGVkXSkgLmZvcm0tZmllbGR7YmFja2dyb3VuZDp2YXIoLS1tdGUtZGlzYWJsZWQtMSk7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1tdGUtZGlzYWJsZWQtMSl9LmFwcGVuZCwucHJlcGVuZHthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpzdHJldGNoO2JhY2tncm91bmQ6dmFyKC0tcHJlcGVuZC1iYWNrZ3JvdW5kKTtkaXNwbGF5Om5vbmU7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOjAgdmFyKC0tcHJlcGVuZC1wYWRkaW5nLXgpfS5wcmVwZW5ke2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci1yaWdodDoxcHggc29saWQgdmFyKC0tcHJlcGVuZC1ib3JkZXItY29sb3IpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpfS5hcHBlbmR7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci1sZWZ0OjFweCBzb2xpZCB2YXIoLS1wcmVwZW5kLWJvcmRlci1jb2xvcik7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpfS5hcHBlbmQuaGFzLWNvbnRlbnQsLnByZXBlbmQuaGFzLWNvbnRlbnR7ZGlzcGxheTpmbGV4fS5wcmVmaXgsLnN1ZmZpeHthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpzdHJldGNoO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5wcmVmaXg6bm90KC5oYXMtcHJlcGVuZCl7cGFkZGluZy1sZWZ0OnZhcigtLXByZXBlbmQtcGFkZGluZy14KX0uc3VmZml4Om5vdCguaGFzLWFwcGVuZCl7cGFkZGluZy1yaWdodDp2YXIoLS1wcmVwZW5kLXBhZGRpbmcteCl9LmZvcm0tZmllbGQuZm9jdXNlZDpub3QoLmRpc2FibGVkKTpub3QoW2Rpc2FibGVkXSk6bm90KDpkaXNhYmxlZCk6YmVmb3Jle2JvcmRlcjoycHggc29saWQgcmdiKHZhcigtLW10ZS1mb2N1cy1yZ2IpKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvdHRvbTotMXB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDotMXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTFweDt0b3A6LTFweDt6LWluZGV4Ojl9LmZvcm0tZmllbGQuaW52YWxpZHstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKX06aG9zdChbd2l0aG91dEJvcmRlcl0pIDppcyguZm9ybS1maWVsZCwucHJlcGVuZCwuYXBwZW5kKXstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fWA7IiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtcbiAgQWN0aXZlTGlua09wdGlvbnMsXG4gIENvbnN0cnVjdG9yLFxuICBNdGVFbGVtZW50LFxuICBNdGVIaXN0b3J5QXBpU2VydmljZSxcbiAgVW5zdWJzY3JpYmVyLFxuICBpc0xpbmtBY3RpdmUsXG4gIG9uVXBkYXRlLFxufSBmcm9tICcuLi8nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMaW5rSW50ZXJmYWNlIHtcbiAgaHJlZj86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXV0b0FjdGl2ZUxpbmtJbnRlcmZhY2Uge1xuICAvKiogV2hldGhlciBvciBub3QgdGhpcyBsaW5rIGlzIHRoZSBhY3RpdmUgcGFnZSAqL1xuICBhY3RpdmU6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgbGluayBzaG91bGQgYXV0b21hdGljYWxseSB0cnkgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIHRoZSBhY3RpdmUgcGFnZSAqL1xuICB3aXRob3V0QXV0b0FjdGl2ZTogYm9vbGVhbjtcblxuICAvKiogT3B0aW9ucyB0byByZWZpbmUgaG93IHRoaXMgbGluayB3aWxsIGRldGVybWluZSBpZiBpdCBpcyB0aGUgYWN0aXZlIHBhZ2UgKi9cbiAgYWN0aXZlTGlua09wdGlvbnM/OiBQYXJ0aWFsPEFjdGl2ZUxpbmtPcHRpb25zPjtcblxuICAvKiogVGhlIGludGVybmFsIGFuY2hvciBlbGVtZW50IGZyb20gd2hpY2ggdG8gcHVsbCB0aGUgbG9jYXRpb24gZm9yIGNvbXBhcmlzb24gKi9cbiAgYW5jaG9yRWxlbWVudD86IEhUTUxBbmNob3JFbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgQXV0b0FjdGl2ZUxpbmtNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudCAmIExpbmtJbnRlcmZhY2U+PihcbiAgc3VwZXJDbGFzczogVFxuKSA9PiB7XG4gIGNsYXNzIEF1dG9BY3RpdmVMaW5rRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgYWN0aXZlID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHdpdGhvdXRBdXRvQWN0aXZlID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIHJlZmxlY3Q6IHRydWUgfSkgYWN0aXZlTGlua09wdGlvbnM/OiBQYXJ0aWFsPEFjdGl2ZUxpbmtPcHRpb25zPjtcblxuICAgIGFuY2hvckVsZW1lbnQ/OiBIVE1MQW5jaG9yRWxlbWVudDtcblxuICAgIHByaXZhdGUgdW5zdWI6IFVuc3Vic2NyaWJlcjtcblxuICAgIEBvblVwZGF0ZSgnYWN0aXZlJywgeyB3YWl0VW50aWxGaXJzdFVwZGF0ZTogdHJ1ZSB9KVxuICAgIHByaXZhdGUgaGFuZGxlQWN0aXZlTGlua0NoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3BhZ2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAb25VcGRhdGUoWydocmVmJywgJ2lyZWYnLCAnd2l0aEF1dG9BY3RpdmUnXSwgeyB3YWl0VW50aWxGaXJzdFVwZGF0ZTogdHJ1ZSB9KVxuICAgIHByaXZhdGUgaGFuZGxlQXV0b0FjdGl2ZUNoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmhyZWYgfHwgdGhpc1snaXJlZiddKSB7XG4gICAgICAgIGlmICh0aGlzLndpdGhvdXRBdXRvQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcigpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlVXJsQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUF1dG9BY3RpdmVDaGFuZ2UoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExpc3RlbmVyKCkge1xuICAgICAgaWYgKCF0aGlzLnVuc3ViKSB7XG4gICAgICAgIHRoaXMudW5zdWIgPSBNdGVIaXN0b3J5QXBpU2VydmljZS5zdGF0ZUNoYW5nZXMoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlVXJsQ2hhbmdlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLnVuc3ViPy4oKTtcbiAgICAgIHRoaXMudW5zdWIgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlVXJsQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmUgPSBpc0xpbmtBY3RpdmUoXG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudD8uaHJlZixcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIHRoaXMuYWN0aXZlTGlua09wdGlvbnNcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gQXV0b0FjdGl2ZUxpbmtFbGVtZW50IGFzIENvbnN0cnVjdG9yPEF1dG9BY3RpdmVMaW5rSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQsIFNsb3RDb250cm9sbGVyIH0gZnJvbSAnLi4nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTbG90T2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAvKipcbiAgICogUHJvcCB1c2VkIHRvIGRlY2xhcmUgd2hpY2ggc2xvdHMgYXJlIGJlaW5nIHVzZWQgZHVyaW5nIFNTUiB0byBtYWtlIHRoZW0gdmlzaWJsZSBpbiBjZXJ0YWluIGVkZ2UtY2FzZXMuXG4gICAqL1xuICBzc3JTbG90czogc3RyaW5nO1xuXG4gIHNsb3RDb250cm9sbGVyOiBTbG90Q29udHJvbGxlcjtcblxuICBoYXNTbG90OiAoc2xvdDogc3RyaW5nLCBvclZhbHVlPzogYW55KSA9PiBib29sZWFuO1xuXG4gIHNzclNsb3RDaGVjazogKHNsb3RzOiBzdHJpbmcpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBTbG90T2JzZXJ2ZXJNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgU2xvdE9ic2VydmVyRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIFByb3AgdXNlZCB0byBkZWNsYXJlIHdoaWNoIHNsb3RzIGFyZSBiZWluZyB1c2VkIGR1cmluZyBTU1IgdG8gbWFrZSB0aGVtIHZpc2libGUgaW4gY2VydGFpbiBlZGdlLWNhc2VzLlxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSlcbiAgICBzZXQgc3NyU2xvdHModmFsOiBzdHJpbmcpIHtcbiAgICAgIGxldCBvbGRWYWwgPSB0aGlzLl9zc3JTbG90cztcbiAgICAgIHRoaXMuX3NzclNsb3RzID0gdmFsO1xuICAgICAgLy8gUGFyc2UgYW5kIGNhY2hlIHNzciBzbG90IHNldFxuICAgICAgY29uc3Qgc2xvdHMgPSAodGhpcy5fc3NyU2xvdHMgPz8gJycpXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLm1hcCgoc2xvdCkgPT4gc2xvdC50cmltKCkpO1xuICAgICAgdGhpcy5fc3NyU2xvdFNldCA9IG5ldyBTZXQ8c3RyaW5nPihzbG90cyk7XG4gICAgICAvLyBOb3JtYWwgdXBkYXRlXG4gICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ3NzclNsb3RzJywgb2xkVmFsKTtcbiAgICB9XG4gICAgZ2V0IHNzclNsb3RzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NzclNsb3RzO1xuICAgIH1cbiAgICBwcml2YXRlIF9zc3JTbG90cz86IHN0cmluZztcblxuICAgIC8qKiBAaWdub3JlICovXG4gICAgX3NzclNsb3RTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIHNsb3RDb250cm9sbGVyID0gbmV3IFNsb3RDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBzbG90IGhhcyBjb250ZW50LCBvciBpZiBpdCB3YXMgc3BlY2lmaWVkIGFzIGV4aXN0aW5nIGR1cmluZyBTU1IuXG4gICAgICogT25jZSBjYWxsZWQsIHRoZSBjb21wb25lbnQgd2lsbCBub3cgYXV0b21hdGljYWxseSB1cGRhdGUgaWYgdGhlIGNvbnRlbnRzIG9mIHRoaXMgc2xvdCBjaGFuZ2UuXG4gICAgICovXG4gICAgaGFzU2xvdChzbG90OiBzdHJpbmcsIG9yVmFsdWU/OiBhbnkpOiBib29sZWFuIHtcbiAgICAgIHRoaXMuc2xvdENvbnRyb2xsZXIudXBkYXRlT25DaGFuZ2Uoc2xvdCk7XG4gICAgICAvLyBUT0RPKHJlZWNlKTogcmVjb25zaWRlciB3aGVuIGEgc29sdXRpb24gZXhpc3RzIGZvciBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9pc3N1ZXMvMTQzNFxuICAgICAgLy8gV2UgaGF2ZSB0byBhc3N1bWUgYWxpZ25tZW50IHdpdGggc3NyU2xvdENoZWNrIHVudGlsIHRoZSBmaXJzdCB1cGRhdGUgaGVyZSBvdGhlcndpc2UgcGFydCBtaXNtYXRjaGVzIGNhbiBvY2N1clxuICAgICAgaWYgKCF0aGlzLl9fZmlyc3RVcGRhdGVkKSB7XG4gICAgICAgIHJldHVybiBvclZhbHVlIHx8IHRoaXMuc3NyU2xvdENoZWNrKHNsb3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9yVmFsdWUgfHwgdGhpcy5zbG90Q29udHJvbGxlci5jaGVjayhzbG90KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogV2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGUgcmVxdWVzdGVkIHNsb3Qgd2FzIHNwZWNpZmllZCBpbiB0aGUgbGlzdCBvZiBgc3NyLXNsb3RzYC4gKi9cbiAgICBzc3JTbG90Q2hlY2soc2xvdDogc3RyaW5nKSB7XG4gICAgICBpZiAodGhpcy5fX2ZpcnN0VXBkYXRlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3NyU2xvdFNldC5oYXMoc2xvdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBTbG90T2JzZXJ2ZXJFbGVtZW50IGFzIENvbnN0cnVjdG9yPFNsb3RPYnNlcnZlckludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBGb3JtQ29udHJvbE1peGluLCBGb3JtQ29udHJvbEludGVyZmFjZSB9IGZyb20gJ0BvcGVuLXdjL2Zvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgcXVlcnkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBDb25zdHJ1Y3RvcixcbiAgRGlzYWJsZWRNaXhpbixcbiAgVGFiSW5kZXhNaXhpbixcbiAgTXRlRWxlbWVudCxcbiAgaW5uZXJJbnB1dFZhbGlkYXRvcnMsXG4gIFRhYkluZGV4SW50ZXJmYWNlLFxuICBEaXNhYmxlZEludGVyZmFjZSxcbiAgb25VcGRhdGUsXG4gIGV2ZW50RW1pdHRlcixcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICcuLic7XG5cbi8vIFJlcXVpcmVkIHBvbHlmaWxsIGZvciBub3dcbmltcG9ydCAnLi4vLi4vY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvaW5kZXgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE10ZUNoZWNrYm94Q2hhbmdlRGV0YWlsIHtcbiAgLyoqIFRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCBjaGFuZ2VkICovXG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sIGNoYW5nZWQgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgZWxlbWVudCBpcyBjaGVja2VkICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tib3hJbnRlcmZhY2Uge1xuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgZWxlbWVudCAqL1xuICBsYWJlbD86IHN0cmluZztcblxuICAvKiogVGhlIGVycm9yIHRleHQgZm9yIHRoZSBlbGVtZW50ICovXG4gIGVycm9yPzogc3RyaW5nO1xuXG4gIC8qKiBUaGUgaGludCB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICBoaW50Pzogc3RyaW5nO1xuXG4gIC8qKiBBbiBhcmlhIGxhYmVsIHRoYXQgd2lsbCBiZSBwcm92aWRlZCB0byB0aGUgaW5wdXQgZWxlbWVudCAqL1xuICBhcmlhTGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBuYW1lIGZvciB0aGUgZWxlbWVudC4gVXNlZCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgdmFsdWUgZm9yIHRoZSBlbGVtZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSBlbGVtZW50IHdoZW4gc3VibWl0dGluZyBhIGZvcm0gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudCAgKi9cbiAgdmFsdWU6IHN0cmluZztcblxuICAvKipcbiAgICogQWx0ZXJzIHRoZSBiZWhhdmlvciBvZiB0aGlzIGNvbnRyb2wuIFdoZW4gXCJjb250cm9sbGVkXCIsIGEgY29udHJvbHMgdmFsdWUgaXMgZHJpdmVuIGV4cGxpY2l0bHkgYnkgZXh0ZXJuYWwgc3RhdGVcbiAgICogdmlhIHRoZSBgdmFsdWVgIHByb3AuIENoYW5nZSBldmVudHMgd2lsbCBmaXJlIGJ1dCB0aGUgY29udHJvbCB2YWx1ZSB3aWxsIG5vdCBjaGFuZ2UgdW50aWwgaXQgaXMgYWx0ZXJlZCBkaXJlY3RseS5cbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgY29udHJvbGxlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgY2hlY2tlZCBieSBkZWZhdWx0LiBVc2VmdWwgZm9yIHdoZW4gcmVzZXR0aW5nIGZvcm0gY29udHJvbHMgb3IgdXNpbmcgYSBzdGF0ZWxlc3MgY29tcG9uZW50ICovXG4gIGRlZmF1bHRDaGVja2VkOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGNoZWNrZWQgb3Igbm90ICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlYWRvbmx5ICovXG4gIHJlYWRvbmx5OiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBzZWxlY3RpbmcgdGhlIGVsZW1lbnQgaXMgcmVxdWlyZWQgb3Igbm90ICovXG4gIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gIC8qKiBSZW5kZXJzIHRoZSByZXF1aXJlZCBpbmRpY2F0b3IgZm9yIHRoaXMgaW5wdXRzIGxhYmVsIHdpdGhvdXQgZW5hYmxpbmcgbmF0aXZlIGByZXF1aXJlZGAgdmFsaWRhdGlvbiAqL1xuICBzaG93UmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgaW5wdXQgYmx1cnMgICovXG4gIGhhbmRsZUJsdXIoKTogdm9pZDtcblxuICAvKiogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBpbnB1dCBpcyBmb2N1c2VkIG9uICAqL1xuICBoYW5kbGVGb2N1cygpOiB2b2lkO1xuXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCBjaGFuZ2VzICAqL1xuICBoYW5kbGVDaGFuZ2UoKTogdm9pZDtcblxuICAvKiogQSBzZXQgb2YgYXR0cmlidXRlcyB0byBiZSBmb3J3YXJkZWQgdG8gYW4gZWxlbWVudCB3aXRoaW4gcmVuZGVyIGFuZCByZW1vdmVkIGZyb20gdGhlIGVsZW1lbnQgKi9cbiAgaW5oZXJpdGVkQXR0cmlidXRlczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGNvbnN0IENoZWNrYm94TWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIENoZWNrYm94RWxlbWVudCBleHRlbmRzIFRhYkluZGV4TWl4aW4oRm9ybUNvbnRyb2xNaXhpbihEaXNhYmxlZE1peGluKHN1cGVyQ2xhc3MpKSwge1xuICAgIGluaXRpYWxUYWJJbmRleDogMCxcbiAgfSkge1xuICAgIGluaGVyaXRlZEF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICAgIC8qKiBAaWdub3JlICovXG4gICAgc3RhdGljIGZvcm1Db250cm9sVmFsaWRhdG9ycyA9IGlubmVySW5wdXRWYWxpZGF0b3JzO1xuXG4gICAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoKSBsYWJlbD86IHN0cmluZztcblxuICAgIC8qKiBUaGUgZXJyb3IgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoKSBlcnJvcj86IHN0cmluZztcblxuICAgIC8qKiBUaGUgaGludCB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSgpIGhpbnQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBbHRlcnMgdGhlIGJlaGF2aW9yIG9mIHRoaXMgY29udHJvbC4gV2hlbiBcImNvbnRyb2xsZWRcIiwgYSBjb250cm9scyB2YWx1ZSBpcyBkcml2ZW4gZXhwbGljaXRseSBieSBleHRlcm5hbCBzdGF0ZVxuICAgICAqIHZpYSB0aGUgYHZhbHVlYCBwcm9wLiBDaGFuZ2UgZXZlbnRzIHdpbGwgZmlyZSBidXQgdGhlIGNvbnRyb2wgdmFsdWUgd2lsbCBub3QgY2hhbmdlIHVudGlsIGl0IGlzIGFsdGVyZWQgZGlyZWN0bHkuXG4gICAgICogQGV4cGVyaW1lbnRhbFxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgY29udHJvbGxlZDogYm9vbGVhbjtcblxuICAgIC8qKiBBbiBhcmlhIGxhYmVsIHRoYXQgd2lsbCBiZSBwcm92aWRlZCB0byB0aGUgaW5wdXQgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ2FyaWEtbGFiZWwnLCByZWZsZWN0OiB0cnVlIH0pIGFyaWFMYWJlbDogc3RyaW5nO1xuXG4gICAgLyoqIFRoZSBuYW1lIGZvciB0aGUgZWxlbWVudC4gVXNlZCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIG5hbWU6IHN0cmluZztcblxuICAgIC8qKiBUaGUgdmFsdWUgZm9yIHRoZSBlbGVtZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSBlbGVtZW50IHdoZW4gc3VibWl0dGluZyBhIGZvcm0gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudCAgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHZhbHVlPyA9ICdvbic7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgY2hlY2tlZCBieSBkZWZhdWx0LiBVc2VmdWwgZm9yIHdoZW4gcmVzZXR0aW5nIGZvcm0gY29udHJvbHMgb3IgdXNpbmcgYSBzdGF0ZWxlc3MgY29tcG9uZW50ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBkZWZhdWx0Q2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgY2hlY2tlZCBvciBub3QgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGNoZWNrZWQgPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBiZSByZWFkb25seSAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcmVhZG9ubHkgPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBzZWxlY3RpbmcgdGhlIGVsZW1lbnQgaXMgcmVxdWlyZWQgb3Igbm90ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSByZXF1aXJlZCA9IGZhbHNlO1xuXG4gICAgLyoqIFJlbmRlcnMgdGhlIHJlcXVpcmVkIGluZGljYXRvciBmb3IgdGhpcyBpbnB1dHMgbGFiZWwgd2l0aG91dCBlbmFibGluZyBuYXRpdmUgYHJlcXVpcmVkYCB2YWxpZGF0aW9uICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBzaG93UmVxdWlyZWQ/O1xuXG4gICAgLyoqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgd2l0aGluIHRoZSBmb3JtIGNvbnRyb2wgbWl4aW4gKi9cbiAgICBAcXVlcnkoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpIHZhbGlkYXRpb25UYXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoZSBlbGVtZW50J3Mgc3RhdGUgaXMgYWJvdXQgdG8gY2hhbmdlLiBJZiBkZWZhdWx0IGlzIHByZXZlbnRlZCwgaXQgd2lsbCByZXZlcnQgdGhlIGNoZWNrYm94IHRvIGl0J3Mgb3JpZ2luYWwgY2hlY2tlZCBzdGF0ZSBwcmlvciB0byBzZWxlY3RpbmcuICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF93aWxsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TXRlQ2hlY2tib3hDaGFuZ2VEZXRhaWw+O1xuXG4gICAgLyoqIEVtaXR0ZWQgd2hlbiB0aGUgZWxlbWVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkLiAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxNdGVDaGVja2JveENoYW5nZURldGFpbD47XG5cbiAgICAvKiogRW1pdHMgd2hlbiB0aGlzIGVsZW1lbnQgaXMgZm9jdXNlZCAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25Gb2N1czogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIEVtaXRzIHdoZW4gdGhpcyBlbGVtZW50IGxvc2VzIGZvY3VzICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkJsdXI6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBvblVwZGF0ZSgnZGVmYXVsdENoZWNrZWQnKVxuICAgIHByb3RlY3RlZCBvbkRlZmF1bHRDaGVja2VkQ2hhbmdlKCkge1xuICAgICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkICYmIHRoaXMuZGVmYXVsdENoZWNrZWQgJiYgIXRoaXMuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBvblVwZGF0ZShbJ3ZhbHVlJywgJ2NoZWNrZWQnXSwgeyBvbjogJ2JvdGgnIH0pXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBAb25VcGRhdGUoJ2FyaWFMYWJlbCcsIHsgb246ICdib3RoJyB9KVxuICAgIHByb3RlY3RlZCB1cGRhdGVMYWJlbCgpIHtcbiAgICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IHtcbiAgICAgICAgLi4udGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzLFxuICAgICAgICBhcmlhTGFiZWw6IHRoaXMuYXJpYUxhYmVsLFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogLS0gRm9ybSBjb250cm9sIHZhbGlkYXRpb24gb3ZlcnJpZGVzIC0tICovXG4gICAgc2hvdWxkRm9ybVZhbHVlVXBkYXRlKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRGb3JtQ29udHJvbCgpOiB2b2lkIHtcbiAgICAgIHN1cGVyLnJlc2V0Rm9ybUNvbnRyb2w/LigpO1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMuZGVmYXVsdENoZWNrZWQ7XG4gICAgfVxuXG4gICAgdmFsaWRpdHlDYWxsYmFjaygpOiBzdHJpbmcgfCB2b2lkIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9yIHx8IHRoaXMudmFsaWRhdGlvblRhcmdldD8udmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgfVxuXG4gICAgLyoqIC0tIFRhYkluZGV4IG92ZXJyaWRlcyAtLSAqL1xuICAgIGdldFRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICBzZXRUYWJJbmRleEFkYXB0ZXIodmFsdWU6IHN0cmluZykge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm90UHJldmVudGVkID0gdGhpcy5fd2lsbENoYW5nZS5lbWl0KFxuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIGNoZWNrZWQ6ICF0aGlzLmNoZWNrZWQsXG4gICAgICAgIH0sXG4gICAgICAgIHsgY2FuY2VsYWJsZTogdHJ1ZSB9XG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5jb250cm9sbGVkKSB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBjaGVja2VkOiAhdGhpcy5jaGVja2VkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG5vdFByZXZlbnRlZCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgY2hlY2tlZDogdGhpcy5jaGVja2VkLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5fb25CbHVyLmVtaXQoKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9vbkZvY3VzLmVtaXQoKTtcbiAgICB9O1xuXG4gICAgLyoqIENsaWNrcyB0aGUgZWxlbWVudCAqL1xuICAgIHB1YmxpYyBjbGljaygpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblRhcmdldC5jbGljaygpO1xuICAgIH1cblxuICAgIC8qKiBGb2N1c2VzIHRoZSBlbGVtZW50ICovXG4gICAgcHVibGljIGZvY3VzKCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqIEJsdXJzIHRoZSBlbGVtZW50ICovXG4gICAgcHVibGljIGJsdXIoKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBDaGVja2JveEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8XG4gICAgQ2hlY2tib3hJbnRlcmZhY2UgJiBUYWJJbmRleEludGVyZmFjZSAmIEZvcm1Db250cm9sSW50ZXJmYWNlICYgRGlzYWJsZWRJbnRlcmZhY2VcbiAgPiAmXG4gICAgVDtcbn07XG4iLCAiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgdGhlIFdlYWtNYXBzIHVzZWQgdGhyb3VnaG91dCB0aGlzIHByb2plY3QuIFRoZSBXZWFrTWFwcyBleGlzdCB0byB0aWVcbiAqIG9iamVjdHMgdG9nZXRoZXIgd2l0aG91dCBwb2xsdXRpbmcgdGhlIG9iamVjdHMgdGhlbXNlbHZlcyB3aXRoIHJlZmVyZW5jZXMgd2UnZCByYXRoZXIga2VlcFxuICogaGlkZGVuLiBUaGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gd29yayBhcyB0cmFuc3BhcmVudGx5IGFzIHBvc3NpYmxlLlxuICovXG5pbXBvcnQgeyBJRWxlbWVudEludGVybmFscywgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqIFVzZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBpdCBpcyBhdHRhY2hlZCB0byAqL1xuZXhwb3J0IGNvbnN0IHJlZk1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBJQ3VzdG9tRWxlbWVudD4oKTtcblxuLyoqIFVzZWUgYW4gRWxlbWVudHNJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGl0cyBWYWxpZGl0eVN0YXRlIG9iamVjdCAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkaXR5TWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIFZhbGlkaXR5U3RhdGU+KCk7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgaXRzIGF0dGFjaGVkIGlucHV0W3R5cGU9XCJoaWRkZW5cIl0gKi9cbmV4cG9ydCBjb25zdCBoaWRkZW5JbnB1dE1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBIVE1MSW5wdXRFbGVtZW50W10+KCk7XG5cbi8qKiBVc2UgYSBjdXN0b20gZWxlbWVudCB0byBnZXQgaXRzIGF0dGFjaGVkIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgKi9cbmV4cG9ydCBjb25zdCBpbnRlcm5hbHNNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHM+KCk7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgdGhlIGF0dGFjaGVkIHZhbGlkYXRpb24gbWVzc2FnZSAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25NZXNzYWdlTWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIHN0cmluZz4oKTtcblxuLyoqIFVzZSBhIGZvcm0gZWxlbWVudCB0byBnZXQgYXR0YWNoZWQgY3VzdG9tIGVsZW1lbnRzIGFuZCBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlcyAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmV4cG9ydCBjb25zdCBmb3Jtc01hcCA9IG5ldyBXZWFrTWFwPEhUTUxGb3JtRWxlbWVudCwgT2JqZWN0PigpO1xuXG4vKiogVXNlIGEgY3VzdG9tIGVsZW1lbnQgb3Igb3RoZXIgb2JqZWN0IHRvIGdldCB0aGVpciBhc3NvY2lhdGVkIE11dGF0aW9uT2JzZXJ2ZXJzICovXG5leHBvcnQgY29uc3Qgc2hhZG93SG9zdHNNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgTXV0YXRpb25PYnNlcnZlcj4oKTtcblxuLyoqIFVzZSBhIGZvcm0gZWxlbWVudCB0byBnZXQgYSBzZXQgb2YgYXR0YWNoZWQgY3VzdG9tIGVsZW1lbnRzICovXG5leHBvcnQgY29uc3QgZm9ybUVsZW1lbnRzTWFwID0gbmV3IFdlYWtNYXA8SFRNTEZvcm1FbGVtZW50LCBTZXQ8SUN1c3RvbUVsZW1lbnQ+PigpO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIGFuIGVsZW1lbnQncyB2YWx1ZSAqL1xuZXhwb3J0IGNvbnN0IHJlZlZhbHVlTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIGFueT4oKTtcblxuLyoqIEVsZW1lbnRzIHRoYXQgbmVlZCB0byBiZSB1cGdyYWRlZCBvbmNlIGFkZGVkIHRvIHRoZSBET00gKi9cbmV4cG9ydCBjb25zdCB1cGdyYWRlTWFwID0gbmV3IFdlYWtNYXA8RWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHM+KCk7XG5cbi8qKiBTYXZlIHJlZmVyZW5jZXMgdG8gc2hhZG93IHJvb3RzIGZvciBpbmNsdXNpb24gaW4gaW50ZXJuYWxzIGluc3RhbmNlICovXG5leHBvcnQgY29uc3Qgc2hhZG93Um9vdE1hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBTaGFkb3dSb290PigpO1xuXG4vKiogU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgaW50ZXJuYWxzJyB2YWxpZGF0aW9uIGFuY2hvciAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25BbmNob3JNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgSFRNTEVsZW1lbnQ+KCk7XG5cbi8qKiBNYXAgRG9jdW1lbnRGcmFnbWVudHMgdG8gdGhlaXIgTXV0YXRpb25PYnNlcnZlcnMgc28gd2UgY2FuIGRpc2Nvbm5lY3Qgb25jZSBlbGVtZW50cyBhcmUgcmVtb3ZlZCAqL1xuZXhwb3J0IGNvbnN0IGRvY3VtZW50RnJhZ21lbnRNYXAgPSBuZXcgV2Vha01hcDxEb2N1bWVudEZyYWdtZW50LCBNdXRhdGlvbk9ic2VydmVyPigpO1xuXG4vKiogV2hldGhlciBjb25uZWN0ZWRDYWxsYmFjayBoYXMgYWxyZWFkeSBiZWVuIGNhbGxlZC4gKi9cbmV4cG9ydCBjb25zdCBjb25uZWN0ZWRDYWxsYmFja01hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBib29sZWFuPigpO1xuXG4vKiogU2F2ZSBhIHJlZmVyZW5jZSB0byB2YWxpZGl0eSBzdGF0ZSBmb3IgZWxlbWVudHMgdGhhdCBuZWVkIHRvIHVwZ3JhZGUgYWZ0ZXIgYmVpbmcgY29ubmVjdGVkICovXG5leHBvcnQgY29uc3QgdmFsaWRpdHlVcGdyYWRlTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzPigpO1xuIiwgImltcG9ydCB7IHVwZ3JhZGVNYXAgfSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHsgSUFvbSwgSUVsZW1lbnRJbnRlcm5hbHMgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuZXhwb3J0IGNvbnN0IGFvbTogSUFvbSA9IHtcbiAgYXJpYUF0b21pYzogJ2FyaWEtYXRvbWljJyxcbiAgYXJpYUF1dG9Db21wbGV0ZTogJ2FyaWEtYXV0b2NvbXBsZXRlJyxcbiAgYXJpYUJ1c3k6ICdhcmlhLWJ1c3knLFxuICBhcmlhQ2hlY2tlZDogJ2FyaWEtY2hlY2tlZCcsXG4gIGFyaWFDb2xDb3VudDogJ2FyaWEtY29sY291bnQnLFxuICBhcmlhQ29sSW5kZXg6ICdhcmlhLWNvbGluZGV4JyxcbiAgYXJpYUNvbEluZGV4VGV4dDogJ2FyaWEtY29saW5kZXh0ZXh0JyxcbiAgYXJpYUNvbFNwYW46ICdhcmlhLWNvbHNwYW4nLFxuICBhcmlhQ3VycmVudDogJ2FyaWEtY3VycmVudCcsXG4gIGFyaWFEaXNhYmxlZDogJ2FyaWEtZGlzYWJsZWQnLFxuICBhcmlhRXhwYW5kZWQ6ICdhcmlhLWV4cGFuZGVkJyxcbiAgYXJpYUhhc1BvcHVwOiAnYXJpYS1oYXNwb3B1cCcsXG4gIGFyaWFIaWRkZW46ICdhcmlhLWhpZGRlbicsXG4gIGFyaWFJbnZhbGlkOiAnYXJpYS1pbnZhbGlkJyxcbiAgYXJpYUtleVNob3J0Y3V0czogJ2FyaWEta2V5c2hvcnRjdXRzJyxcbiAgYXJpYUxhYmVsOiAnYXJpYS1sYWJlbCcsXG4gIGFyaWFMZXZlbDogJ2FyaWEtbGV2ZWwnLFxuICBhcmlhTGl2ZTogJ2FyaWEtbGl2ZScsXG4gIGFyaWFNb2RhbDogJ2FyaWEtbW9kYWwnLFxuICBhcmlhTXVsdGlMaW5lOiAnYXJpYS1tdWx0aWxpbmUnLFxuICBhcmlhTXVsdGlTZWxlY3RhYmxlOiAnYXJpYS1tdWx0aXNlbGVjdGFibGUnLFxuICBhcmlhT3JpZW50YXRpb246ICdhcmlhLW9yaWVudGF0aW9uJyxcbiAgYXJpYVBsYWNlaG9sZGVyOiAnYXJpYS1wbGFjZWhvbGRlcicsXG4gIGFyaWFQb3NJblNldDogJ2FyaWEtcG9zaW5zZXQnLFxuICBhcmlhUHJlc3NlZDogJ2FyaWEtcHJlc3NlZCcsXG4gIGFyaWFSZWFkT25seTogJ2FyaWEtcmVhZG9ubHknLFxuICBhcmlhUmVsZXZhbnQ6ICdhcmlhLXJlbGV2YW50JyxcbiAgYXJpYVJlcXVpcmVkOiAnYXJpYS1yZXF1aXJlZCcsXG4gIGFyaWFSb2xlRGVzY3JpcHRpb246ICdhcmlhLXJvbGVkZXNjcmlwdGlvbicsXG4gIGFyaWFSb3dDb3VudDogJ2FyaWEtcm93Y291bnQnLFxuICBhcmlhUm93SW5kZXg6ICdhcmlhLXJvd2luZGV4JyxcbiAgYXJpYVJvd0luZGV4VGV4dDogJ2FyaWEtcm93aW5kZXh0ZXh0JyxcbiAgYXJpYVJvd1NwYW46ICdhcmlhLXJvd3NwYW4nLFxuICBhcmlhU2VsZWN0ZWQ6ICdhcmlhLXNlbGVjdGVkJyxcbiAgYXJpYVNldFNpemU6ICdhcmlhLXNldHNpemUnLFxuICBhcmlhU29ydDogJ2FyaWEtc29ydCcsXG4gIGFyaWFWYWx1ZU1heDogJ2FyaWEtdmFsdWVtYXgnLFxuICBhcmlhVmFsdWVNaW46ICdhcmlhLXZhbHVlbWluJyxcbiAgYXJpYVZhbHVlTm93OiAnYXJpYS12YWx1ZW5vdycsXG4gIGFyaWFWYWx1ZVRleHQ6ICdhcmlhLXZhbHVldGV4dCcsXG4gIHJvbGU6ICdyb2xlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0QW9tID0gKHJlZjogRWxlbWVudCwgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscykgPT4ge1xuICBmb3IgKGxldCBrZXkgaW4gYW9tKSB7XG4gICAgaW50ZXJuYWxzW2tleV0gPSBudWxsO1xuXG4gICAgbGV0IGNsb3N1cmVWYWx1ZSA9IG51bGw7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGFvbVtrZXldO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnRlcm5hbHMsIGtleSwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gY2xvc3VyZVZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICBjbG9zdXJlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgIHJlZi5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVwZ3JhZGVNYXAuc2V0KHJlZiwgaW50ZXJuYWxzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufTtcbiIsICJpbXBvcnQge1xuICBpbnRlcm5hbHNNYXAsXG4gIHNoYWRvd0hvc3RzTWFwLFxuICB1cGdyYWRlTWFwLFxuICBoaWRkZW5JbnB1dE1hcCxcbiAgZG9jdW1lbnRGcmFnbWVudE1hcCxcbiAgZm9ybUVsZW1lbnRzTWFwLFxuICB2YWxpZGl0eVVwZ3JhZGVNYXAsXG4gIHJlZlZhbHVlTWFwLFxufSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHsgYW9tIH0gZnJvbSAnLi9hb20uanMnO1xuaW1wb3J0IHtcbiAgcmVtb3ZlSGlkZGVuSW5wdXRzLFxuICBpbml0Rm9ybSxcbiAgaW5pdExhYmVscyxcbiAgdXBncmFkZUludGVybmFscyxcbiAgc2V0RGlzYWJsZWQsXG4gIG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuZnVuY3Rpb24gaW5pdE5vZGUobm9kZTogSUN1c3RvbUVsZW1lbnQpOiB2b2lkIHtcbiAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChub2RlKTtcbiAgY29uc3QgeyBmb3JtIH0gPSBpbnRlcm5hbHM7XG4gIGluaXRGb3JtKG5vZGUsIGZvcm0sIGludGVybmFscyk7XG4gIGluaXRMYWJlbHMobm9kZSwgaW50ZXJuYWxzLmxhYmVscyk7XG59XG5cbi8qKlxuICogSWYgYSBmaWVsZHNldCdzIGRpc2FibGVkIHN0YXRlIGlzIHRvZ2dsZWQsIHRoZSBmb3JtRGlzYWJsZWRDYWxsYmFja1xuICogb24gYW55IGNoaWxkIGZvcm0tYXNzb2NpYXRlZCBjdXNvdG0gZWxlbWVudHMuXG4gKi9cbmV4cG9ydCBjb25zdCB3YWxrRmllbGRzZXQgPSAobm9kZTogSFRNTEZpZWxkU2V0RWxlbWVudCwgZmlyc3RSZW5kZXIgPSBmYWxzZSk6IHZvaWQgPT4ge1xuICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKG5vZGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCB7XG4gICAgYWNjZXB0Tm9kZShub2RlOiBJQ3VzdG9tRWxlbWVudCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gaW50ZXJuYWxzTWFwLmhhcyhub2RlKSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVA7XG4gICAgfSxcbiAgfSk7XG5cbiAgbGV0IGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcbiAgLyoqXG4gICAqIFdlIGRvbid0IG5lZWQgdG8gY2FsbCBhbnl0aGluZyBvbiBmaXJzdCByZW5kZXIgaWZcbiAgICogdGhlIGVsZW1lbnQgaXNuJ3QgZGlzYWJsZWRcbiAgICovXG4gIGNvbnN0IGlzQ2FsbE5lY2Vzc2FyeSA9ICFmaXJzdFJlbmRlciB8fCBub2RlLmRpc2FibGVkO1xuXG4gIHdoaWxlIChjdXJyZW50KSB7XG4gICAgaWYgKGN1cnJlbnQuZm9ybURpc2FibGVkQ2FsbGJhY2sgJiYgaXNDYWxsTmVjZXNzYXJ5KSB7XG4gICAgICBzZXREaXNhYmxlZChjdXJyZW50LCBub2RlLmRpc2FibGVkKTtcbiAgICB9XG4gICAgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZzogTXV0YXRpb25PYnNlcnZlckluaXQgPSB7XG4gIGF0dHJpYnV0ZXM6IHRydWUsXG4gIGF0dHJpYnV0ZUZpbHRlcjogWydkaXNhYmxlZCcsICduYW1lJ10sXG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRPck5hbWVPYnNlcnZlciA9IG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKVxuICA/IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnNMaXN0OiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0IGFzIElDdXN0b21FbGVtZW50O1xuXG4gICAgICAgIC8qKiBNYW5hZ2UgY2hhbmdlcyB0byB0aGUgcmVmJ3MgZGlzYWJsZWQgc3RhdGUgKi9cbiAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0LmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICAgICAgICBzZXREaXNhYmxlZCh0YXJnZXQsIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmxvY2FsTmFtZSA9PT0gJ2ZpZWxkc2V0Jykge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXB1cnBvc2UgdGhlIG9ic2VydmVyIGZvciBmaWVsZHNldHMgd2hpY2ggbmVlZFxuICAgICAgICAgICAgICogdG8gYmUgd2Fsa2VkIHdoZW5ldmVyIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgaXMgc2V0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHdhbGtGaWVsZHNldCh0YXJnZXQgYXMgdW5rbm93biBhcyBIVE1MRmllbGRTZXRFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqIE1hbmFnZSBjaGFuZ2VzIHRvIHRoZSByZWYncyBuYW1lICovXG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnbmFtZScpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0LmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlZlZhbHVlTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgaW50ZXJuYWxzLnNldEZvcm1WYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgOiAoe30gYXMgTXV0YXRpb25PYnNlcnZlcik7XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlckNhbGxiYWNrKG11dGF0aW9uTGlzdDogTXV0YXRpb25SZWNvcmRbXSkge1xuICBtdXRhdGlvbkxpc3QuZm9yRWFjaCgobXV0YXRpb25SZWNvcmQpID0+IHtcbiAgICBjb25zdCB7IGFkZGVkTm9kZXMsIHJlbW92ZWROb2RlcyB9ID0gbXV0YXRpb25SZWNvcmQ7XG4gICAgY29uc3QgYWRkZWQgPSBBcnJheS5mcm9tKGFkZGVkTm9kZXMpIGFzIElDdXN0b21FbGVtZW50W107XG4gICAgY29uc3QgcmVtb3ZlZCA9IEFycmF5LmZyb20ocmVtb3ZlZE5vZGVzKSBhcyBJQ3VzdG9tRWxlbWVudFtdO1xuXG4gICAgYWRkZWQuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgLyoqIEFsbG93cyBmb3IgZHluYW1pYyBhZGRpdGlvbiBvZiBlbGVtZW50cyB0byBmb3JtcyAqL1xuICAgICAgaWYgKGludGVybmFsc01hcC5oYXMobm9kZSkgJiYgbm9kZS5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgICBpbml0Tm9kZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgLyoqIFVwZ3JhZGUgdGhlIGFjY2Vzc2liaWxpdHkgaW5mb3JtYXRpb24gb24gYW55IHByZXZpb3VzbHkgY29ubmVjdGVkICovXG4gICAgICBpZiAodXBncmFkZU1hcC5oYXMobm9kZSkpIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gdXBncmFkZU1hcC5nZXQobm9kZSk7XG4gICAgICAgIGNvbnN0IGFvbUtleXMgPSBPYmplY3Qua2V5cyhhb20pO1xuICAgICAgICBhb21LZXlzXG4gICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBpbnRlcm5hbHNba2V5XSAhPT0gbnVsbClcbiAgICAgICAgICAuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhb21ba2V5XSwgaW50ZXJuYWxzW2tleV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB1cGdyYWRlTWFwLmRlbGV0ZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgLyoqIFVwZ3JhZGUgdGhlIHZhbGlkaXR5IHN0YXRlIHdoZW4gdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkICovXG4gICAgICBpZiAodmFsaWRpdHlVcGdyYWRlTWFwLmhhcyhub2RlKSkge1xuICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSB2YWxpZGl0eVVwZ3JhZGVNYXAuZ2V0KG5vZGUpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgaW50ZXJuYWxzLnZhbGlkaXR5LnZhbGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnaW50ZXJuYWxzLWludmFsaWQnLCAoIWludGVybmFscy52YWxpZGl0eS52YWxpZCkudG9TdHJpbmcoKSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCAoIWludGVybmFscy52YWxpZGl0eS52YWxpZCkudG9TdHJpbmcoKSk7XG4gICAgICAgIHZhbGlkaXR5VXBncmFkZU1hcC5kZWxldGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKiBJZiB0aGUgbm9kZSB0aGF0J3MgYWRkZWQgaXMgYSBmb3JtLCBjaGVjayB0aGUgdmFsaWRpdHkgKi9cbiAgICAgIGlmIChub2RlLmxvY2FsTmFtZSA9PT0gJ2Zvcm0nKSB7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQobm9kZSBhcyB1bmtub3duIGFzIEhUTUxGb3JtRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIobm9kZSwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIHtcbiAgICAgICAgICBhY2NlcHROb2RlKG5vZGU6IElDdXN0b21FbGVtZW50KTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBpbnRlcm5hbHNNYXAuaGFzKG5vZGUpICYmICEoZm9ybUVsZW1lbnRzICYmIGZvcm1FbGVtZW50cy5oYXMobm9kZSkpXG4gICAgICAgICAgICAgID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUXG4gICAgICAgICAgICAgIDogTm9kZUZpbHRlci5GSUxURVJfU0tJUDtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgaW5pdE5vZGUoY3VycmVudCk7XG4gICAgICAgICAgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmxvY2FsTmFtZSA9PT0gJ2ZpZWxkc2V0Jykge1xuICAgICAgICBkaXNhYmxlZE9yTmFtZU9ic2VydmVyLm9ic2VydmU/Lihub2RlLCBkaXNhYmxlZE9yTmFtZU9ic2VydmVyQ29uZmlnKTtcbiAgICAgICAgd2Fsa0ZpZWxkc2V0KG5vZGUgYXMgdW5rbm93biBhcyBIVE1MRmllbGRTZXRFbGVtZW50LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlbW92ZWQuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChub2RlKTtcbiAgICAgIC8qKiBDbGVhbiB1cCBhbnkgaGlkZGVuIGlucHV0IGVsZW1lbnRzIGxlZnQgYWZ0ZXIgYW4gZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQgKi9cbiAgICAgIGlmIChpbnRlcm5hbHMgJiYgaGlkZGVuSW5wdXRNYXAuZ2V0KGludGVybmFscykpIHtcbiAgICAgICAgcmVtb3ZlSGlkZGVuSW5wdXRzKGludGVybmFscyk7XG4gICAgICB9XG4gICAgICAvKiogRGlzY29ubmVjdCBhbnkgdW5uZWVkZWQgTXV0YXRpb25PYnNlcnZlcnMgKi9cbiAgICAgIGlmIChzaGFkb3dIb3N0c01hcC5oYXMobm9kZSkpIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBzaGFkb3dIb3N0c01hcC5nZXQobm9kZSk7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhpcyBvYnNlcnZlciBjYWxsYmFjayBpcyBqdXN0IGZvciBkb2N1bWVudCBmcmFnbWVudHNcbiAqIGl0IHdpbGwgdXBncmFkZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIGlmIHdhcyBhcHBlbmRlZFxuICogZnJvbSBhIGRvY3VtZW50IGZyYWdtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJhZ21lbnRPYnNlcnZlckNhbGxiYWNrKG11dGF0aW9uTGlzdDogTXV0YXRpb25SZWNvcmRbXSk6IHZvaWQge1xuICBtdXRhdGlvbkxpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICBjb25zdCB7IHJlbW92ZWROb2RlcyB9ID0gbXV0YXRpb247XG5cbiAgICByZW1vdmVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBkb2N1bWVudEZyYWdtZW50TWFwLmdldChtdXRhdGlvbi50YXJnZXQgYXMgRG9jdW1lbnRGcmFnbWVudCk7XG4gICAgICBpZiAoaW50ZXJuYWxzTWFwLmhhcyhub2RlIGFzIElDdXN0b21FbGVtZW50KSkge1xuICAgICAgICB1cGdyYWRlSW50ZXJuYWxzKG5vZGUgYXMgSUN1c3RvbUVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBEZWZlciB0aGUgdXBncmFkZSBvZiBub2RlcyB3aXRoaW5nIGEgRG9jdW1lbnRGcmFnbWVudFxuICogQHBhcmFtIGZyYWdtZW50IHtEb2N1bWVudEZyYWdtZW50fVxuICovXG5leHBvcnQgY29uc3QgZGVmZXJVcGdyYWRlID0gKGZyYWdtZW50OiBEb2N1bWVudEZyYWdtZW50KSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnJhZ21lbnRPYnNlcnZlckNhbGxiYWNrKTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZT8uKGZyYWdtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgZG9jdW1lbnRGcmFnbWVudE1hcC5zZXQoZnJhZ21lbnQsIG9ic2VydmVyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvYnNlcnZlciA9IG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKVxuICA/IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spXG4gIDogKHt9IGFzIE11dGF0aW9uT2JzZXJ2ZXIpO1xuZXhwb3J0IGNvbnN0IG9ic2VydmVyQ29uZmlnOiBNdXRhdGlvbk9ic2VydmVySW5pdCA9IHtcbiAgY2hpbGRMaXN0OiB0cnVlLFxuICBzdWJ0cmVlOiB0cnVlLFxufTtcbiIsICJpbXBvcnQgeyBoaWRkZW5JbnB1dE1hcCwgZm9ybXNNYXAsIGZvcm1FbGVtZW50c01hcCwgaW50ZXJuYWxzTWFwIH0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIsIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWcgfSBmcm9tICcuL211dGF0aW9uLW9ic2VydmVycy5qcyc7XG5pbXBvcnQgeyBJQ3VzdG9tRWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHMsIExhYmVsc0xpc3QgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuLyoqXG4gKiBUb2dnbGUncyB0aGUgZGlzYWJsZWQgc3RhdGUgKGF0dHJpYnV0ZXMgJiBjYWxsYmFjaykgb24gdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSBjdXN0b20gZWxlbWVudCBpbnN0YW5jZVxuICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZCAtIFRoZSBkaXNhYmxlZCBzdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgc2V0RGlzYWJsZWQgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLWRpc2FibGVkJywgZGlzYWJsZWQpO1xuXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIHJlZi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICB9IGVsc2Uge1xuICAgIHJlZi5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKTtcbiAgfVxuXG4gIGlmIChyZWYuZm9ybURpc2FibGVkQ2FsbGJhY2spIHtcbiAgICByZWYuZm9ybURpc2FibGVkQ2FsbGJhY2suYXBwbHkocmVmLCBbZGlzYWJsZWRdKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBoaWRkZW4gaW5wdXRzIGZvciB0aGUgZ2l2ZW4gZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUhpZGRlbklucHV0cyA9IChpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzKTogdm9pZCA9PiB7XG4gIGNvbnN0IGhpZGRlbklucHV0cyA9IGhpZGRlbklucHV0TWFwLmdldChpbnRlcm5hbHMpO1xuICBoaWRkZW5JbnB1dHMuZm9yRWFjaCgoaGlkZGVuSW5wdXQpID0+IHtcbiAgICBoaWRkZW5JbnB1dC5yZW1vdmUoKTtcbiAgfSk7XG4gIGhpZGRlbklucHV0TWFwLnNldChpbnRlcm5hbHMsIFtdKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhpZGRlbiBpbnB1dCBmb3IgdGhlIGdpdmVuIHJlZlxuICogQHBhcmFtIHtJQ3VzdG9tRWxlbWVudH0gcmVmIC0gVGhlIGVsZW1lbnQgdG8gd2F0Y2hcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZSBmb3IgdGhlIHJlZlxuICogQHJldHVybiB7SFRNTElucHV0RWxlbWVudH0gVGhlIGhpZGRlbiBpbnB1dFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlSGlkZGVuSW5wdXQgPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHNcbik6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gJ2hpZGRlbic7XG4gIGlucHV0Lm5hbWUgPSByZWYuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gIHJlZi5hZnRlcihpbnB1dCk7XG4gIGhpZGRlbklucHV0TWFwLmdldChpbnRlcm5hbHMpLnB1c2goaW5wdXQpO1xuICByZXR1cm4gaW5wdXQ7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSByZWYgYnkgc2V0dGluZyB1cCBhbiBhdHRyaWJ1dGUgb2JzZXJ2ZSBvbiBpdFxuICogbG9va2luZyBmb3IgY2hhbmdlcyB0byBkaXNhYmxlZFxuICogQHBhcmFtIHtJQ3VzdG9tRWxlbWVudH0gcmVmIC0gVGhlIGVsZW1lbnQgdG8gd2F0Y2hcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZSBmb3IgdGhlIHJlZlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRSZWYgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscyk6IHZvaWQgPT4ge1xuICBoaWRkZW5JbnB1dE1hcC5zZXQoaW50ZXJuYWxzLCBbXSk7XG4gIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIub2JzZXJ2ZT8uKHJlZiwgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZyk7XG59O1xuXG4vKipcbiAqIFNldCB1cCBsYWJlbHMgZm9yIHRoZSByZWZcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSByZWYgdG8gYWRkIGxhYmVscyB0b1xuICogQHBhcmFtIHtMYWJlbHNMaXN0fSBsYWJlbHMgLSBBIGxpc3Qgb2YgdGhlIGxhYmVsc1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRMYWJlbHMgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgbGFiZWxzOiBMYWJlbHNMaXN0KTogdm9pZCA9PiB7XG4gIGlmIChsYWJlbHMubGVuZ3RoKSB7XG4gICAgQXJyYXkuZnJvbShsYWJlbHMpLmZvckVhY2goKGxhYmVsKSA9PiBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlZi5jbGljay5iaW5kKHJlZikpKTtcbiAgICBsZXQgZmlyc3RMYWJlbElkID0gbGFiZWxzWzBdLmlkO1xuICAgIGlmICghbGFiZWxzWzBdLmlkKSB7XG4gICAgICBmaXJzdExhYmVsSWQgPSBgJHtsYWJlbHNbMF0uaHRtbEZvcn1fTGFiZWxgO1xuICAgICAgbGFiZWxzWzBdLmlkID0gZmlyc3RMYWJlbElkO1xuICAgIH1cbiAgICByZWYuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBmaXJzdExhYmVsSWQpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGludGVybmFscy12YWxpZCBhbmQgaW50ZXJuYWxzLWludmFsaWQgYXR0cmlidXRlc1xuICogYmFzZWQgb24gZm9ybSB2YWxpZGl0eS5cbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSAtIFRoZSB0YXJnZXQgZm9ybVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHNldEZvcm1WYWxpZGl0eSA9IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgY29uc3QgbmF0aXZlQ29udHJvbFZhbGlkaXR5ID0gQXJyYXkuZnJvbShmb3JtLmVsZW1lbnRzKVxuICAgIC5maWx0ZXIoXG4gICAgICAoZWxlbWVudDogRWxlbWVudCAmIHsgdmFsaWRpdHk6IFZhbGlkaXR5U3RhdGUgfSkgPT5cbiAgICAgICAgIWVsZW1lbnQudGFnTmFtZS5pbmNsdWRlcygnLScpICYmIGVsZW1lbnQudmFsaWRpdHlcbiAgICApXG4gICAgLm1hcCgoZWxlbWVudDogRWxlbWVudCAmIHsgdmFsaWRpdHk6IFZhbGlkaXR5U3RhdGUgfSkgPT4gZWxlbWVudC52YWxpZGl0eS52YWxpZCk7XG4gIGNvbnN0IHBvbHlmaWxsZWRFbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSkgfHwgW107XG4gIGNvbnN0IHBvbHlmaWxsZWRWYWxpZGl0eSA9IEFycmF5LmZyb20ocG9seWZpbGxlZEVsZW1lbnRzKVxuICAgIC5maWx0ZXIoKGNvbnRyb2wpID0+IGNvbnRyb2wuaXNDb25uZWN0ZWQpXG4gICAgLm1hcCgoY29udHJvbDogSUN1c3RvbUVsZW1lbnQpID0+IGludGVybmFsc01hcC5nZXQoY29udHJvbCkudmFsaWRpdHkudmFsaWQpO1xuICBjb25zdCBoYXNJbnZhbGlkID0gWy4uLm5hdGl2ZUNvbnRyb2xWYWxpZGl0eSwgLi4ucG9seWZpbGxlZFZhbGlkaXR5XS5pbmNsdWRlcyhmYWxzZSk7XG4gIGZvcm0udG9nZ2xlQXR0cmlidXRlKCdpbnRlcm5hbHMtaW52YWxpZCcsIGhhc0ludmFsaWQpO1xuICBmb3JtLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgIWhhc0ludmFsaWQpO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gaW5wdXQgY2FsbGJhY2suIFVwZGF0ZXMgdGhlIGZvcm0ncyB2YWxpZGl0eVxuICogYXR0cmlidXRlcyBvbiBpbnB1dC5cbiAqIEBwYXJhbSB7RXZlbnR9IC0gVGhlIGZvcm0gaW5wdXQgZXZlbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtSW5wdXRDYWxsYmFjayA9IChldmVudDogRXZlbnQpID0+IHtcbiAgc2V0Rm9ybVZhbGlkaXR5KGZpbmRQYXJlbnRGb3JtKGV2ZW50LnRhcmdldCkpO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gY2hhbmdlIGNhbGxiYWNrLiBVcGRhdGVzIHRoZSBmb3JtJ3MgdmFsaWRpdHlcbiAqIGF0dHJpYnV0ZXMgb24gY2hhbmdlLlxuICogQHBhcmFtIHtFdmVudH0gLSBUaGUgZm9ybSBjaGFuZ2UgZXZlbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtQ2hhbmdlQ2FsbGJhY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIHNldEZvcm1WYWxpZGl0eShmaW5kUGFyZW50Rm9ybShldmVudC50YXJnZXQpKTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIHN1Ym1pdCBjYWxsYmFjay4gV2UgbmVlZCB0byBjYW5jZWwgYW55IHN1Ym1pc3Npb25cbiAqIGlmIGEgbmVzdGVkIGludGVybmFscyBpcyBpbnZhbGlkLlxuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IC0gVGhlIGZvcm0gZWxlbWVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHdpcmVTdWJtaXRMb2dpYyA9IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgY29uc3QgU1VCTUlUX0JVVFRPTl9TRUxFQ1RPUiA9XG4gICAgJzppcyhidXR0b25bdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGJ1dHRvbjpub3QoW3R5cGVdKSk6bm90KFtkaXNhYmxlZF0pJztcbiAgbGV0IHN1Ym1pdEJ1dHRvblNlbGVjdG9yID0gYCR7U1VCTUlUX0JVVFRPTl9TRUxFQ1RPUn06bm90KFtmb3JtXSlgO1xuXG4gIGlmIChmb3JtLmlkKSB7XG4gICAgc3VibWl0QnV0dG9uU2VsZWN0b3IgKz0gYCwke1NVQk1JVF9CVVRUT05fU0VMRUNUT1J9W2Zvcm09JyR7Zm9ybS5pZH0nXWA7XG4gIH1cblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgaWYgKHRhcmdldC5jbG9zZXN0KHN1Ym1pdEJ1dHRvblNlbGVjdG9yKSkge1xuICAgICAgLy8gdmFsaWRhdGVcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChmb3JtKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGlzIGZvcm0gZG9lcyBub3QgdmFsaWRhdGUgdGhlbiB3ZSdyZSBkb25lXG4gICAgICAgKi9cbiAgICAgIGlmIChmb3JtLm5vVmFsaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvKiogSWYgdGhlIFNldCBoYXMgaXRlbXMsIGNvbnRpbnVlICovXG4gICAgICBpZiAoZWxlbWVudHMuc2l6ZSkge1xuICAgICAgICBjb25zdCBub2RlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpO1xuICAgICAgICAvKiogQ2hlY2sgdGhlIGludGVybmFscy5jaGVja1ZhbGlkaXR5KCkgb2YgYWxsIG5vZGVzICovXG4gICAgICAgIGNvbnN0IHZhbGlkaXR5TGlzdCA9IG5vZGVzLnJldmVyc2UoKS5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KG5vZGUpO1xuICAgICAgICAgIHJldHVybiBpbnRlcm5hbHMucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqIElmIGFueSBub2RlIGlzIGZhbHNlLCBzdG9wIHRoZSBldmVudCAqL1xuICAgICAgICBpZiAodmFsaWRpdHlMaXN0LmluY2x1ZGVzKGZhbHNlKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gcmVzZXQgY2FsbGJhY2suIFRoaXMgd2lsbCBsb29wIG92ZXIgYWRkZWRcbiAqIGlucHV0cyBhbmQgY2FsbCBmb3JtUmVzZXRDYWxsYmFjayBpZiBhcHBsaWNhYmxlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZm9ybVJlc2V0Q2FsbGJhY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIC8qKiBHZXQgdGhlIFNldCBvZiBlbGVtZW50cyBhdHRhY2hlZCB0byB0aGlzIGZvcm0gKi9cbiAgY29uc3QgZWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQpO1xuXG4gIC8qKiBTb21lIGZvcm1zIHdvbid0IGNvbnRhaW4gZm9ybSBhc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50cyAqL1xuICBpZiAoZWxlbWVudHMgJiYgZWxlbWVudHMuc2l6ZSkge1xuICAgIC8qKiBMb29wIG92ZXIgdGhlIGVsZW1lbnRzIGFuZCBjYWxsIGZvcm1SZXNldENhbGxiYWNrIGlmIGFwcGxpY2FibGUgKi9cbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoKGVsZW1lbnQuY29uc3RydWN0b3IgYXMgYW55KS5mb3JtQXNzb2NpYXRlZCAmJiBlbGVtZW50LmZvcm1SZXNldENhbGxiYWNrKSB7XG4gICAgICAgIGVsZW1lbnQuZm9ybVJlc2V0Q2FsbGJhY2suYXBwbHkoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgZm9ybS4gV2Ugd2lsbCBuZWVkIHRvIGFkZCBzdWJtaXQgYW5kIHJlc2V0IGxpc3RlbmVyc1xuICogaWYgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0LiBJZiB0aGV5IGRvLCBqdXN0IGFkZCB0aGUgbmV3IHJlZiB0byB0aGUgZm9ybS5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZiAtIFRoZSBlbGVtZW50IHJlZiB0aGF0IGluY2x1ZGVzIGludGVybmFsc1xuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm0gLSBUaGUgZm9ybSB0aGUgcmVmIGJlbG9uZ3MgdG9cbiAqIEBwYXJhbSB7RWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzIC0gVGhlIGludGVybmFscyBmb3IgcmVmXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgaW5pdEZvcm0gPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIGZvcm06IEhUTUxGb3JtRWxlbWVudCxcbiAgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFsc1xuKSA9PiB7XG4gIGlmIChmb3JtKSB7XG4gICAgLyoqIFRoaXMgd2lsbCBiZSBhIFdlYWtNYXA8SFRNTEZvcm1FbGVtZW50LCBTZXQ8SFRNTEVsZW1lbnQ+ICovXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChmb3JtKTtcblxuICAgIGlmIChmb3JtRWxlbWVudHMpIHtcbiAgICAgIC8qKiBJZiBmb3JtRWxlbWVudHMgZXhpc3RzLCBhZGQgdG8gaXQgKi9cbiAgICAgIGZvcm1FbGVtZW50cy5hZGQocmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoqIElmIGZvcm1FbGVtZW50cyBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgaXQgYW5kIGFkZCB0byBpdCAqL1xuICAgICAgY29uc3QgaW5pdFNldCA9IG5ldyBTZXQ8SUN1c3RvbUVsZW1lbnQ+KCk7XG4gICAgICBpbml0U2V0LmFkZChyZWYpO1xuICAgICAgZm9ybUVsZW1lbnRzTWFwLnNldChmb3JtLCBpbml0U2V0KTtcblxuICAgICAgLyoqIEFkZCBsaXN0ZW5lcnMgdG8gZW11bGF0ZSB2YWxpZGF0aW9uIGFuZCByZXNldCBiZWhhdmlvciAqL1xuICAgICAgd2lyZVN1Ym1pdExvZ2ljKGZvcm0pO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIGZvcm1SZXNldENhbGxiYWNrKTtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmb3JtSW5wdXRDYWxsYmFjayk7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZvcm1DaGFuZ2VDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgZm9ybXNNYXAuc2V0KGZvcm0sIHsgcmVmLCBpbnRlcm5hbHMgfSk7XG5cbiAgICAvKiogQ2FsbCBmb3JtQXNzb2NpYXRlZENhbGxiYWNrIGlmIGFwcGxpY2FibGUgKi9cbiAgICBpZiAocmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddICYmIHJlZi5mb3JtQXNzb2NpYXRlZENhbGxiYWNrKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVmLmZvcm1Bc3NvY2lhdGVkQ2FsbGJhY2suYXBwbHkocmVmLCBbZm9ybV0pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIHNldEZvcm1WYWxpZGl0eShmb3JtKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSBsb29rIGZvciBhbiBlbGVtZW50J3MgcGFyZW50IGZvcm1cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbSAtIFRoZSBlbGVtZW50IHRvIGxvb2sgZm9yIGEgcGFyZW50IGZvcm1cbiAqIEByZXR1cm4ge0hUTUxGb3JtRWxlbWVudHxudWxsfSAtIFRoZSBwYXJlbnQgZm9ybSwgaWYgb25lIGV4aXN0c1xuICovXG5leHBvcnQgY29uc3QgZmluZFBhcmVudEZvcm0gPSAoZWxlbSkgPT4ge1xuICBsZXQgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuICBpZiAocGFyZW50ICYmIHBhcmVudC50YWdOYW1lICE9PSAnRk9STScpIHtcbiAgICBwYXJlbnQgPSBmaW5kUGFyZW50Rm9ybShwYXJlbnQpO1xuICB9XG4gIHJldHVybiBwYXJlbnQ7XG59O1xuXG4vKipcbiAqIFRocm93IGFuIGVycm9yIGlmIHRoZSBlbGVtZW50IHJlZiBpcyBub3QgZm9ybSBhc3NvY2lhdGVkXG4gKiBAcGFyYW0gcmVmIHtJQ3VzdG9tRWxlbWVudH0gLSBUaGUgZWxlbWVudCB0byBjaGVjayBpZiBpdCBpcyBmb3JtIGFzc29jaWF0ZWRcbiAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IC0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdGhyb3dcbiAqIEBwYXJhbSBFcnJvclR5cGUge2FueX0gLSBUaGUgZXJyb3IgdHlwZSB0byB0aHJvdywgZGVmYXVsdHMgdG8gRE9NRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQgPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIG1lc3NhZ2U6IHN0cmluZyxcbiAgRXJyb3JUeXBlOiBhbnkgPSBET01FeGNlcHRpb25cbik6IHZvaWQgPT4ge1xuICBpZiAoIXJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgIHRocm93IG5ldyBFcnJvclR5cGUobWVzc2FnZSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIGZvciBlYWNoIEhUTUxGb3JtRWxlbWVudC5jaGVja1ZhbGlkaXR5fHJlcG9ydFZhbGlkaXR5XG4gKiB3aWxsIGxvb3Agb3ZlciBhIGZvcm0ncyBhZGRlZCBjb21wb25lbnRzIGFuZCBjYWxsIHRoZSByZXNwZWN0aXZlXG4gKiBtZXRob2QgbW9kaWZ5aW5nIHRoZSBkZWZhdWx0IHJldHVybiB2YWx1ZSBpZiBuZWVkZWRcbiAqIEBwYXJhbSBmb3JtIHtIVE1MRm9ybUVsZW1lbnR9IC0gVGhlIGZvcm0gZWxlbWVudCB0byBydW4gdGhlIG1ldGhvZCBvblxuICogQHBhcmFtIHJldHVyblZhbHVlIHtib29sZWFufSAtIFRoZSBpbml0aWFsIHJlc3VsdCBvZiB0aGUgb3JpZ2luYWwgbWV0aG9kXG4gKiBAcGFyYW0gbWV0aG9kIHsnY2hlY2tWYWxpZGl0eSd8J3JlcG9ydFZhbGlkaXR5J30gLSBUaGUgb3JpZ2luYWwgbWV0aG9kXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVGhlIGZvcm0ncyB2YWxpZGl0eSBzdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgb3ZlcnJpZGVGb3JtTWV0aG9kID0gKFxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnQsXG4gIHJldHVyblZhbHVlOiBib29sZWFuLFxuICBtZXRob2Q6ICdjaGVja1ZhbGlkaXR5JyB8ICdyZXBvcnRWYWxpZGl0eSdcbik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSk7XG5cbiAgLyoqIFNvbWUgZm9ybXMgd29uJ3QgY29udGFpbiBmb3JtIGFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnRzICovXG4gIGlmIChlbGVtZW50cyAmJiBlbGVtZW50cy5zaXplKSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChlbGVtZW50KTtcbiAgICAgIGNvbnN0IHZhbGlkID0gaW50ZXJuYWxzW21ldGhvZF0oKTtcbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xuXG4vKipcbiAqIFdpbGwgdXBncmFkZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIGJ5IGluaXRpYWxpemluZyB0aGVcbiAqIGluc3RhbmNlJ3MgZm9ybSBhbmQgbGFiZWxzLiBUaGlzIGlzIGNhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGlzXG4gKiBlaXRoZXIgY29uc3RydWN0ZWQgb3IgYXBwZW5kZWQgZnJvbSBhIERvY3VtZW50RnJhZ21lbnRcbiAqIEBwYXJhbSByZWYge0lDdXN0b21FbGVtZW50fSAtIFRoZSBjdXN0b20gZWxlbWVudCB0byB1cGdyYWRlXG4gKi9cbmV4cG9ydCBjb25zdCB1cGdyYWRlSW50ZXJuYWxzID0gKHJlZjogSUN1c3RvbUVsZW1lbnQpID0+IHtcbiAgaWYgKHJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQocmVmKTtcbiAgICBjb25zdCB7IGxhYmVscywgZm9ybSB9ID0gaW50ZXJuYWxzO1xuICAgIGluaXRMYWJlbHMocmVmLCBsYWJlbHMpO1xuICAgIGluaXRGb3JtKHJlZiwgZm9ybSwgaW50ZXJuYWxzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayB0byBzZWUgaWYgTXV0YXRpb25PYnNlcnZlciBleGlzdHMgaW4gdGhlIGN1cnJlbnRcbiAqIGV4ZWN1dGlvbiBjb250ZXh0LiBXaWxsIGxpa2VseSByZXR1cm4gZmFsc2Ugb24gdGhlIHNlcnZlclxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdXRhdGlvbk9ic2VydmVyRXhpc3RzKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xufVxuIiwgImltcG9ydCB7IHNldEZvcm1WYWxpZGl0eSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKiogRW11bGF0ZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgVmFsaWRpdHlTdGF0ZSBvYmplY3QgKi9cbmV4cG9ydCBjbGFzcyBWYWxpZGl0eVN0YXRlIGltcGxlbWVudHMgZ2xvYmFsVGhpcy5WYWxpZGl0eVN0YXRlIHtcbiAgYmFkSW5wdXQgPSBmYWxzZTtcbiAgY3VzdG9tRXJyb3IgPSBmYWxzZTtcbiAgcGF0dGVybk1pc21hdGNoID0gZmFsc2U7XG4gIHJhbmdlT3ZlcmZsb3cgPSBmYWxzZTtcbiAgcmFuZ2VVbmRlcmZsb3cgPSBmYWxzZTtcbiAgc3RlcE1pc21hdGNoID0gZmFsc2U7XG4gIHRvb0xvbmcgPSBmYWxzZTtcbiAgdG9vU2hvcnQgPSBmYWxzZTtcbiAgdHlwZU1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkID0gdHJ1ZTtcbiAgdmFsdWVNaXNzaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgT2JqZWN0LnNlYWwodGhpcyk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldCBhIFZhbGlkaXR5U3RhdGUgb2JqZWN0IGJhY2sgdG8gdmFsaWRcbiAqIEBwYXJhbSB7VmFsaWRpdHlTdGF0ZX0gdmFsaWRpdHlPYmplY3QgLSBUaGUgb2JqZWN0IHRvIG1vZGlmeVxuICogQHJldHVybiB7VmFsaWRpdHlTdGF0ZX0gLSBUaGUgbW9kaWZpZWQgVmFsaWRpdHlTdGF0ZU9iamVjdFxuICovXG5leHBvcnQgY29uc3Qgc2V0VmFsaWQgPSAodmFsaWRpdHlPYmplY3Q6IFZhbGlkaXR5U3RhdGUpOiBWYWxpZGl0eVN0YXRlID0+IHtcbiAgdmFsaWRpdHlPYmplY3QuYmFkSW5wdXQgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QuY3VzdG9tRXJyb3IgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QucGF0dGVybk1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnJhbmdlT3ZlcmZsb3cgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QucmFuZ2VVbmRlcmZsb3cgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3Quc3RlcE1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnRvb0xvbmcgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QudG9vU2hvcnQgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QudHlwZU1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnZhbGlkID0gdHJ1ZTtcbiAgdmFsaWRpdHlPYmplY3QudmFsdWVNaXNzaW5nID0gZmFsc2U7XG4gIHJldHVybiB2YWxpZGl0eU9iamVjdDtcbn07XG5cbi8qKlxuICogUmVjb25jaWxlIGEgVmFsaWRpdHlTdGF0ZSBvYmplY3Qgd2l0aCBhIG5ldyBzdGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7VmFsaWRpdHlTdGF0ZX0gLSBUaGUgYmFzZSBvYmplY3QgdG8gcmVjb25jaWxlIHdpdGggbmV3IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gLSBBIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3QgdG8gb3ZlcnJpZGUgdGhlIG9yaWdpbmFsXG4gKiBAcmV0dXJuIHtWYWxpZGl0eVN0YXRlfSAtIFRoZSB1cGRhdGVkIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCByZWNvbmNpbGVWYWxpZGl0eSA9IChcbiAgdmFsaWRpdHlPYmplY3Q6IFZhbGlkaXR5U3RhdGUsXG4gIG5ld1N0YXRlOiBQYXJ0aWFsPFZhbGlkaXR5U3RhdGU+LFxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnRcbik6IFZhbGlkaXR5U3RhdGUgPT4ge1xuICB2YWxpZGl0eU9iamVjdC52YWxpZCA9IGlzVmFsaWQobmV3U3RhdGUpO1xuICBPYmplY3Qua2V5cyhuZXdTdGF0ZSkuZm9yRWFjaCgoa2V5KSA9PiAodmFsaWRpdHlPYmplY3Rba2V5XSA9IG5ld1N0YXRlW2tleV0pKTtcbiAgaWYgKGZvcm0pIHtcbiAgICBzZXRGb3JtVmFsaWRpdHkoZm9ybSk7XG4gIH1cbiAgcmV0dXJuIHZhbGlkaXR5T2JqZWN0O1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3Qgc2hvdWxkIGJlIHZhbGlkXG4gKiBAcGFyYW0ge09iamVjdH0gLSBBIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IC0gU2hvdWxkIHRoZSBuZXcgb2JqZWN0IGJlIHZhbGlkXG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkID0gKHZhbGlkaXR5U3RhdGU6IFBhcnRpYWw8VmFsaWRpdHlTdGF0ZT4pOiBib29sZWFuID0+IHtcbiAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgZm9yIChsZXQga2V5IGluIHZhbGlkaXR5U3RhdGUpIHtcbiAgICBpZiAoa2V5ICE9PSAndmFsaWQnICYmIHZhbGlkaXR5U3RhdGVba2V5XSAhPT0gZmFsc2UpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWxpZDtcbn07XG4iLCAiaW1wb3J0IHsgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuLyoqIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIHJlZiBmb3IgdGVoIEN1c3RvbVN0YXRlU2V0ICovXG5jb25zdCBjdXN0b21TdGF0ZU1hcCA9IG5ldyBXZWFrTWFwPEN1c3RvbVN0YXRlU2V0LCBJQ3VzdG9tRWxlbWVudD4oKTtcblxuZnVuY3Rpb24gYWRkU3RhdGUocmVmOiBJQ3VzdG9tRWxlbWVudCwgc3RhdGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgcmVmLnRvZ2dsZUF0dHJpYnV0ZShzdGF0ZU5hbWUsIHRydWUpO1xuICBpZiAocmVmLnBhcnQpIHtcbiAgICByZWYucGFydC5hZGQoc3RhdGVOYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDdXN0b21TdGF0ZSA9IGAtLSR7c3RyaW5nfWA7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21TdGF0ZVNldCBleHRlbmRzIFNldDxDdXN0b21TdGF0ZT4ge1xuICBzdGF0aWMgZ2V0IGlzUG9seWZpbGxlZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJlZjogSUN1c3RvbUVsZW1lbnQpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghcmVmIHx8ICFyZWYudGFnTmFtZSB8fCByZWYudGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbGxlZ2FsIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuXG4gICAgY3VzdG9tU3RhdGVNYXAuc2V0KHRoaXMsIHJlZik7XG4gIH1cblxuICBhZGQoc3RhdGU6IEN1c3RvbVN0YXRlKSB7XG4gICAgaWYgKCEvXi0tLy50ZXN0KHN0YXRlKSB8fCB0eXBlb2Ygc3RhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ2FkZCcgb24gJ0N1c3RvbVN0YXRlU2V0JzogVGhlIHNwZWNpZmllZCB2YWx1ZSAke3N0YXRlfSBtdXN0IHN0YXJ0IHdpdGggJy0tJy5gXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5hZGQoc3RhdGUpO1xuICAgIGNvbnN0IHJlZiA9IGN1c3RvbVN0YXRlTWFwLmdldCh0aGlzKTtcbiAgICBjb25zdCBzdGF0ZU5hbWUgPSBgc3RhdGUke3N0YXRlfWA7XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IGFkZCB0aGUgc3RhdGUgaW1tZWRpYXRlbHkgaWYgdGhlIHJlZiBpcyBjb25uZWN0ZWQgdG8gdGhlIERPTTtcbiAgICAgKiBvdGhlcndpc2UsIHdhaXQgYSB0aWNrIGJlY2F1c2UgdGhlIGVsZW1lbnQgaXMgbGlrZWx5IGJlaW5nIGNvbnN0cnVjdGVkXG4gICAgICogYnkgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBhbmQgd291bGQgdGhyb3cgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgIGFkZFN0YXRlKHJlZiwgc3RhdGVOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFkZFN0YXRlKHJlZiwgc3RhdGVOYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBmb3IgKGxldCBbZW50cnldIG9mIHRoaXMuZW50cmllcygpKSB7XG4gICAgICB0aGlzLmRlbGV0ZShlbnRyeSk7XG4gICAgfVxuICAgIHN1cGVyLmNsZWFyKCk7XG4gIH1cblxuICBkZWxldGUoc3RhdGU6IEN1c3RvbVN0YXRlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuZGVsZXRlKHN0YXRlKTtcbiAgICBjb25zdCByZWYgPSBjdXN0b21TdGF0ZU1hcC5nZXQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHRvZ2dsZSB0aGUgc3RhdGUvYXR0ciBpbW1lZGlhdGVseSBpZiB0aGUgcmVmIGlzIGNvbm5lY3RlZCB0byB0aGUgRE9NO1xuICAgICAqIG90aGVyd2lzZSwgd2FpdCBhIHRpY2sgYmVjYXVzZSB0aGUgZWxlbWVudCBpcyBsaWtlbHkgYmVpbmcgY29uc3RydWN0ZWRcbiAgICAgKiBieSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGFuZCB3b3VsZCB0aHJvdyBvdGhlcndpc2UuXG4gICAgICovXG4gICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZShgc3RhdGUke3N0YXRlfWAsIGZhbHNlKTtcbiAgICAgIGlmIChyZWYucGFydCkge1xuICAgICAgICByZWYucGFydC5yZW1vdmUoYHN0YXRlJHtzdGF0ZX1gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoYHN0YXRlJHtzdGF0ZX1gLCBmYWxzZSk7XG4gICAgICAgIGlmIChyZWYucGFydCkge1xuICAgICAgICAgIHJlZi5wYXJ0LnJlbW92ZShgc3RhdGUke3N0YXRlfWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCAiZXhwb3J0IGNsYXNzIEhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uIGltcGxlbWVudHMgZ2xvYmFsVGhpcy5IVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbiB7XG4gIHJlYWRvbmx5ICNlbGVtZW50cztcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgIHRoaXMuI2VsZW1lbnRzID0gZWxlbWVudHM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgICB0aGlzW2ldID0gZWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgIHRoaXNbZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKV0gPSBlbGVtZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBbaW5kZXg6IG51bWJlcl06IEVsZW1lbnQ7XG5cbiAgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLiNlbGVtZW50cy5sZW5ndGg7XG4gIH1cblxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gdGhpcy4jZWxlbWVudHNbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICB9XG5cbiAgaXRlbShpKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXNbaV0gPT0gbnVsbCA/IG51bGwgOiB0aGlzW2ldO1xuICB9XG5cbiAgbmFtZWRJdGVtKG5hbWUpOiBFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpc1tuYW1lXSA9PSBudWxsID8gbnVsbCA6IHRoaXNbbmFtZV07XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbiB9IGZyb20gJy4vSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24uanMnO1xuaW1wb3J0IHsgZm9ybUVsZW1lbnRzTWFwIH0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IG92ZXJyaWRlRm9ybU1ldGhvZCB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFBhdGNoIHRoZSBIVE1MRWxlbWVudCBwcm90b3R5cGVcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHBhdGNoZXMgY2hlY2tWYWxpZGl0eSwgcmVwb3J0VmFsaWRpdHkgYW5kIGVsZW1lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEZvcm1Qcm90b3R5cGUoKTogdm9pZCB7XG4gIGNvbnN0IGNoZWNrVmFsaWRpdHkgPSBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmNoZWNrVmFsaWRpdHk7XG4gIEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUuY2hlY2tWYWxpZGl0eSA9IGNoZWNrVmFsaWRpdHlPdmVycmlkZTtcblxuICBjb25zdCByZXBvcnRWYWxpZGl0eSA9IEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUucmVwb3J0VmFsaWRpdHk7XG4gIEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUucmVwb3J0VmFsaWRpdHkgPSByZXBvcnRWYWxpZGl0eU92ZXJyaWRlO1xuXG4gIGZ1bmN0aW9uIGNoZWNrVmFsaWRpdHlPdmVycmlkZSguLi5hcmdzKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldHVyblZhbHVlID0gY2hlY2tWYWxpZGl0eS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICByZXR1cm4gb3ZlcnJpZGVGb3JtTWV0aG9kKHRoaXMsIHJldHVyblZhbHVlLCAnY2hlY2tWYWxpZGl0eScpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwb3J0VmFsaWRpdHlPdmVycmlkZSguLi5hcmdzKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldHVyblZhbHVlID0gcmVwb3J0VmFsaWRpdHkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgcmV0dXJuIG92ZXJyaWRlRm9ybU1ldGhvZCh0aGlzLCByZXR1cm5WYWx1ZSwgJ3JlcG9ydFZhbGlkaXR5Jyk7XG4gIH1cblxuICBjb25zdCB7IGdldCB9ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLCAnZWxlbWVudHMnKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUsICdlbGVtZW50cycsIHtcbiAgICBnZXQoLi4uYXJncykge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBnZXQuY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgICAgIGNvbnN0IHBvbHlmaWxsZWRFbGVtZW50cyA9IEFycmF5LmZyb20oZm9ybUVsZW1lbnRzTWFwLmdldCh0aGlzKSB8fCBbXSk7XG5cbiAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBwb2x5ZmlsbGVkIGVsZW1lbnRzLCByZXR1cm4gdGhlIG5hdGl2ZSBlbGVtZW50cyBjb2xsZWN0aW9uXG4gICAgICBpZiAocG9seWZpbGxlZEVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgICB9XG5cbiAgICAgIC8vIE1lcmdlIHRoZSBuYXRpdmUgZWxlbWVudHMgd2l0aCB0aGUgcG9seWZpbGxlZCBlbGVtZW50c1xuICAgICAgLy8gYW5kIG9yZGVyIHRoZW0gYnkgdGhlaXIgcG9zaXRpb24gaW4gdGhlIERPTVxuICAgICAgY29uc3Qgb3JkZXJlZEVsZW1lbnRzID0gQXJyYXkuZnJvbShlbGVtZW50cylcbiAgICAgICAgLmNvbmNhdChwb2x5ZmlsbGVkRWxlbWVudHMpXG4gICAgICAgIC5zb3J0KChhOiBFbGVtZW50LCBiOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpICYgMiA/IDEgOiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmV3IEhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uKG9yZGVyZWRFbGVtZW50cyk7XG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgY29ubmVjdGVkQ2FsbGJhY2tNYXAsXG4gIGludGVybmFsc01hcCxcbiAgcmVmTWFwLFxuICByZWZWYWx1ZU1hcCxcbiAgc2hhZG93SG9zdHNNYXAsXG4gIHNoYWRvd1Jvb3RNYXAsXG4gIHZhbGlkYXRpb25BbmNob3JNYXAsXG4gIHZhbGlkaXR5TWFwLFxuICB2YWxpZGF0aW9uTWVzc2FnZU1hcCxcbiAgdmFsaWRpdHlVcGdyYWRlTWFwLFxufSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlSGlkZGVuSW5wdXQsXG4gIGZpbmRQYXJlbnRGb3JtLFxuICBpbml0UmVmLFxuICBtdXRhdGlvbk9ic2VydmVyRXhpc3RzLFxuICByZW1vdmVIaWRkZW5JbnB1dHMsXG4gIHNldERpc2FibGVkLFxuICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQsXG4gIHVwZ3JhZGVJbnRlcm5hbHMsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgaW5pdEFvbSB9IGZyb20gJy4vYW9tLmpzJztcbmltcG9ydCB7IFZhbGlkaXR5U3RhdGUsIHJlY29uY2lsZVZhbGlkaXR5LCBzZXRWYWxpZCB9IGZyb20gJy4vVmFsaWRpdHlTdGF0ZS5qcyc7XG5pbXBvcnQgeyBkZWZlclVwZ3JhZGUsIG9ic2VydmVyQ2FsbGJhY2ssIG9ic2VydmVyQ29uZmlnIH0gZnJvbSAnLi9tdXRhdGlvbi1vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgSUVsZW1lbnRJbnRlcm5hbHMsIElDdXN0b21FbGVtZW50LCBMYWJlbHNMaXN0IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5pbXBvcnQgeyBDdXN0b21TdGF0ZVNldCB9IGZyb20gJy4vQ3VzdG9tU3RhdGVTZXQuanMnO1xuaW1wb3J0IHsgcGF0Y2hGb3JtUHJvdG90eXBlIH0gZnJvbSAnLi9wYXRjaC1mb3JtLXByb3RvdHlwZS5qcyc7XG5pbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gJ2xpdC1odG1sL2lzLXNlcnZlci5qcyc7XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50SW50ZXJuYWxzIGltcGxlbWVudHMgSUVsZW1lbnRJbnRlcm5hbHMge1xuICBhcmlhQXRvbWljOiBzdHJpbmc7XG4gIGFyaWFBdXRvQ29tcGxldGU6IHN0cmluZztcbiAgYXJpYUJ1c3k6IHN0cmluZztcbiAgYXJpYUNoZWNrZWQ6IHN0cmluZztcbiAgYXJpYUNvbENvdW50OiBzdHJpbmc7XG4gIGFyaWFDb2xJbmRleDogc3RyaW5nO1xuICBhcmlhQ29sSW5kZXhUZXh0OiBzdHJpbmc7XG4gIGFyaWFDb2xTcGFuOiBzdHJpbmc7XG4gIGFyaWFDdXJyZW50OiBzdHJpbmc7XG4gIGFyaWFEaXNhYmxlZDogc3RyaW5nO1xuICBhcmlhRXhwYW5kZWQ6IHN0cmluZztcbiAgYXJpYUhhc1BvcHVwOiBzdHJpbmc7XG4gIGFyaWFIaWRkZW46IHN0cmluZztcbiAgYXJpYUludmFsaWQ6IHN0cmluZztcbiAgYXJpYUtleVNob3J0Y3V0czogc3RyaW5nO1xuICBhcmlhTGFiZWw6IHN0cmluZztcbiAgYXJpYUxldmVsOiBzdHJpbmc7XG4gIGFyaWFMaXZlOiBzdHJpbmc7XG4gIGFyaWFNb2RhbDogc3RyaW5nO1xuICBhcmlhTXVsdGlMaW5lOiBzdHJpbmc7XG4gIGFyaWFNdWx0aVNlbGVjdGFibGU6IHN0cmluZztcbiAgYXJpYU9yaWVudGF0aW9uOiBzdHJpbmc7XG4gIGFyaWFQbGFjZWhvbGRlcjogc3RyaW5nO1xuICBhcmlhUG9zSW5TZXQ6IHN0cmluZztcbiAgYXJpYVByZXNzZWQ6IHN0cmluZztcbiAgYXJpYVJlYWRPbmx5OiBzdHJpbmc7XG4gIGFyaWFSZWxldmFudDogc3RyaW5nO1xuICBhcmlhUmVxdWlyZWQ6IHN0cmluZztcbiAgYXJpYVJvbGVEZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhcmlhUm93Q291bnQ6IHN0cmluZztcbiAgYXJpYVJvd0luZGV4OiBzdHJpbmc7XG4gIGFyaWFSb3dJbmRleFRleHQ6IHN0cmluZztcbiAgYXJpYVJvd1NwYW46IHN0cmluZztcbiAgYXJpYVNlbGVjdGVkOiBzdHJpbmc7XG4gIGFyaWFTZXRTaXplOiBzdHJpbmc7XG4gIGFyaWFTb3J0OiBzdHJpbmc7XG4gIGFyaWFWYWx1ZU1heDogc3RyaW5nO1xuICBhcmlhVmFsdWVNaW46IHN0cmluZztcbiAgYXJpYVZhbHVlTm93OiBzdHJpbmc7XG4gIGFyaWFWYWx1ZVRleHQ6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuXG4gIHN0YXRlczogQ3VzdG9tU3RhdGVTZXQ7XG5cbiAgc3RhdGljIGdldCBpc1BvbHlmaWxsZWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyZWY6IElDdXN0b21FbGVtZW50KSB7XG4gICAgaWYgKCFyZWYgfHwgIXJlZi50YWdOYW1lIHx8IHJlZi50YWdOYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0lsbGVnYWwgY29uc3RydWN0b3InKTtcbiAgICB9XG4gICAgY29uc3Qgcm9vdE5vZGUgPSByZWYuZ2V0Um9vdE5vZGUoKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IG5ldyBWYWxpZGl0eVN0YXRlKCk7XG4gICAgdGhpcy5zdGF0ZXMgPSBuZXcgQ3VzdG9tU3RhdGVTZXQocmVmKTtcbiAgICByZWZNYXAuc2V0KHRoaXMsIHJlZik7XG4gICAgdmFsaWRpdHlNYXAuc2V0KHRoaXMsIHZhbGlkaXR5KTtcbiAgICBpbnRlcm5hbHNNYXAuc2V0KHJlZiwgdGhpcyk7XG4gICAgaW5pdEFvbShyZWYsIHRoaXMpO1xuICAgIGluaXRSZWYocmVmLCB0aGlzKTtcbiAgICBPYmplY3Quc2VhbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIElmIGFwcGVuZGVkIGZyb20gYSBEb2N1bWVudEZyYWdtZW50LCB3YWl0IHVudGlsIGl0IGlzIGNvbm5lY3RlZFxuICAgICAqIGJlZm9yZSBhdHRlbXB0aW5nIHRvIHVwZ3JhZGUgdGhlIGludGVybmFscyBpbnN0YW5jZVxuICAgICAqL1xuICAgIGlmIChyb290Tm9kZSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgIGRlZmVyVXBncmFkZShyb290Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgaW4gYSB2YWxpZCBzdGF0ZVxuICAgKi9cbiAgY2hlY2tWYWxpZGl0eSgpOiBib29sZWFuIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnY2hlY2tWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIC8qKiBJZiB0aGUgZWxlbWVudCB3aWxsIG5vdCB2YWxpZGF0ZSwgaXQgaXMgbmVjZXNzYXJpbHkgdmFsaWQgYnkgZGVmYXVsdCAqL1xuICAgIGlmICghdGhpcy53aWxsVmFsaWRhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICBpZiAoIXZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBjb25zdCB2YWxpZGl0eUV2ZW50ID0gbmV3IEV2ZW50KCdpbnZhbGlkJywge1xuICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgY29tcG9zZWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICByZWYuZGlzcGF0Y2hFdmVudCh2YWxpZGl0eUV2ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkaXR5LnZhbGlkO1xuICB9XG5cbiAgLyoqIFRoZSBmb3JtIGVsZW1lbnQgdGhlIGN1c3RvbSBlbGVtZW50IGlzIGFzc29jaWF0ZWQgd2l0aCAqL1xuICBnZXQgZm9ybSgpOiBIVE1MRm9ybUVsZW1lbnQge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAnZm9ybScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgbGV0IGZvcm07XG4gICAgaWYgKHJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSA9PT0gdHJ1ZSkge1xuICAgICAgZm9ybSA9IGZpbmRQYXJlbnRGb3JtKHJlZik7XG4gICAgfVxuICAgIHJldHVybiBmb3JtO1xuICB9XG5cbiAgLyoqIEEgbGlzdCBvZiBhbGwgcmVsYXRpdmUgZm9ybSBsYWJlbHMgZm9yIHRoaXMgZWxlbWVudCAqL1xuICBnZXQgbGFiZWxzKCk6IExhYmVsc0xpc3Qge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAnbGFiZWxzJyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBjb25zdCBpZCA9IHJlZi5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgY29uc3QgaG9zdFJvb3QgPSByZWYuZ2V0Um9vdE5vZGUoKSBhcyBFbGVtZW50O1xuICAgIGlmIChob3N0Um9vdCAmJiBpZCkge1xuICAgICAgcmV0dXJuIGhvc3RSb290LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTExhYmVsRWxlbWVudD4oYFtmb3I9XCIke2lkfVwiXWApIGFzIHVua25vd24gYXMgTGFiZWxzTGlzdDtcbiAgICB9XG4gICAgcmV0dXJuIFtdIGFzIHVua25vd24gYXMgTGFiZWxzTGlzdDtcbiAgfVxuXG4gIC8qKiBXaWxsIHJlcG9ydCB0aGUgZWxlbWVudHMgdmFsaWRpdHkgc3RhdGUgKi9cbiAgcmVwb3J0VmFsaWRpdHkoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3JlcG9ydFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgLyoqIElmIHRoZSBlbGVtZW50IHdpbGwgbm90IHZhbGlkYXRlLCBpdCBpcyB2YWxpZCBieSBkZWZhdWx0ICovXG4gICAgaWYgKCF0aGlzLndpbGxWYWxpZGF0ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHZhbGlkID0gdGhpcy5jaGVja1ZhbGlkaXR5KCk7XG4gICAgY29uc3QgYW5jaG9yID0gdmFsaWRhdGlvbkFuY2hvck1hcC5nZXQodGhpcyk7XG4gICAgaWYgKGFuY2hvciAmJiAhcmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3JlcG9ydFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCF2YWxpZCAmJiBhbmNob3IpIHtcbiAgICAgIHJlZi5mb2N1cygpO1xuICAgICAgYW5jaG9yLmZvY3VzKCk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBlbGVtZW50J3MgdmFsdWUgd2l0aGluIHRoZSBmb3JtICovXG4gIHNldEZvcm1WYWx1ZSh2YWx1ZTogc3RyaW5nIHwgRm9ybURhdGEgfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldEZvcm1WYWx1ZScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIHJlbW92ZUhpZGRlbklucHV0cyh0aGlzKTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpKSB7XG4gICAgICBpZiAocmVmLmdldEF0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgIGNvbnN0IGhpZGRlbklucHV0ID0gY3JlYXRlSGlkZGVuSW5wdXQocmVmLCB0aGlzKTtcbiAgICAgICAgaGlkZGVuSW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgQXJyYXkuZnJvbSh2YWx1ZSlcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAuZm9yRWFjaCgoW2Zvcm1EYXRhS2V5LCBmb3JtRGF0YVZhbHVlXSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgZm9ybURhdGFWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGhpZGRlbklucHV0ID0gY3JlYXRlSGlkZGVuSW5wdXQocmVmLCB0aGlzKTtcbiAgICAgICAgICAgIGhpZGRlbklucHV0Lm5hbWUgPSBmb3JtRGF0YUtleTtcbiAgICAgICAgICAgIGhpZGRlbklucHV0LnZhbHVlID0gZm9ybURhdGFWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWZWYWx1ZU1hcC5zZXQocmVmLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZWxlbWVudCdzIHZhbGlkaXR5LiBUaGUgZmlyc3QgYXJndW1lbnQgaXMgYSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gICAqIHJlZmxlY3RpbmcgdGhlIGNoYW5nZXMgdG8gYmUgbWFkZSB0byB0aGUgZWxlbWVudCdzIHZhbGlkaXR5LiBJZiB0aGUgZWxlbWVudCBpcyBpbnZhbGlkLFxuICAgKiB0aGUgc2Vjb25kIGFyZ3VtZW50IHNldHMgdGhlIGVsZW1lbnQncyB2YWxpZGF0aW9uIG1lc3NhZ2UuXG4gICAqXG4gICAqIElmIHRoZSBmaWVsZCBpcyB2YWxpZCBhbmQgYSBtZXNzYWdlIGlzIHNwZWNpZmllZCwgdGhlIG1ldGhvZCB3aWxsIHRocm93IGEgVHlwZUVycm9yLlxuICAgKi9cbiAgc2V0VmFsaWRpdHkoXG4gICAgdmFsaWRpdHlDaGFuZ2VzOiBQYXJ0aWFsPGdsb2JhbFRoaXMuVmFsaWRpdHlTdGF0ZT4sXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2U/OiBzdHJpbmcsXG4gICAgYW5jaG9yPzogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgaWYgKCF2YWxpZGl0eUNoYW5nZXMpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgdmFsaWRhdGlvbkFuY2hvck1hcC5zZXQodGhpcywgYW5jaG9yKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICBjb25zdCB2YWxpZGl0eUNoYW5nZXNPYmo6IFBhcnRpYWw8VmFsaWRpdHlTdGF0ZT4gPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWxpZGl0eUNoYW5nZXMpIHtcbiAgICAgIHZhbGlkaXR5Q2hhbmdlc09ialtrZXldID0gdmFsaWRpdHlDaGFuZ2VzW2tleV07XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyh2YWxpZGl0eUNoYW5nZXNPYmopLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0VmFsaWQodmFsaWRpdHkpO1xuICAgIH1cbiAgICBjb25zdCBjaGVjayA9IHsgLi4udmFsaWRpdHksIC4uLnZhbGlkaXR5Q2hhbmdlc09iaiB9O1xuICAgIGRlbGV0ZSBjaGVjay52YWxpZDtcbiAgICBjb25zdCB7IHZhbGlkIH0gPSByZWNvbmNpbGVWYWxpZGl0eSh2YWxpZGl0eSwgY2hlY2ssIHRoaXMuZm9ybSk7XG5cbiAgICBpZiAoIXZhbGlkICYmICF2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdzZXRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgc2Vjb25kIGFyZ3VtZW50IHNob3VsZCBub3QgYmUgZW1wdHkgaWYgb25lIG9yIG1vcmUgZmxhZ3MgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IGFyZSB0cnVlLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHZhbGlkYXRpb25NZXNzYWdlTWFwLnNldCh0aGlzLCB2YWxpZCA/ICcnIDogdmFsaWRhdGlvbk1lc3NhZ2UpO1xuXG4gICAgLy8gY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBob3N0IGVsZW1lbnQgaXMgY29ubmVjdGVkIGJlZm9yZSBhZGRpbmcgYXR0cmlidXRlc1xuICAgIC8vIGJlY2F1c2Ugc2FmYXJpIGRvZXNudCBhbGxvdyBlbGVtZW50cyB0byBoYXZlIGF0dHJpYnV0ZXMgYWRkZWQgaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLWludmFsaWQnLCAhdmFsaWQpO1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgdmFsaWQpO1xuICAgICAgcmVmLnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgYCR7IXZhbGlkfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGl0eVVwZ3JhZGVNYXAuc2V0KHJlZiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNoYWRvd1Jvb3QoKTogU2hhZG93Um9vdCB8IG51bGwge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IHNoYWRvd1Jvb3RNYXAuZ2V0KHJlZik7XG4gICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgIHJldHVybiBzaGFkb3dSb290O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBUaGUgZWxlbWVudCdzIHZhbGlkYXRpb24gbWVzc2FnZSBzZXQgZHVyaW5nIGEgY2FsbCB0byBFbGVtZW50SW50ZXJuYWxzLnNldFZhbGlkaXR5ICovXG4gIGdldCB2YWxpZGF0aW9uTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAndmFsaWRhdGlvbk1lc3NhZ2UnIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIHJldHVybiB2YWxpZGF0aW9uTWVzc2FnZU1hcC5nZXQodGhpcyk7XG4gIH1cblxuICAvKiogVGhlIGN1cnJlbnQgdmFsaWRpdHkgc3RhdGUgb2YgdGhlIG9iamVjdCAqL1xuICBnZXQgdmFsaWRpdHkoKTogZ2xvYmFsVGhpcy5WYWxpZGl0eVN0YXRlIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ3ZhbGlkaXR5JyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICByZXR1cm4gdmFsaWRpdHk7XG4gIH1cblxuICAvKiogSWYgdHJ1ZSB0aGUgZWxlbWVudCB3aWxsIHBhcnRpY2lwYXRlIGluIGEgZm9ybSdzIGNvbnN0cmFpbnQgdmFsaWRhdGlvbi4gKi9cbiAgZ2V0IHdpbGxWYWxpZGF0ZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ3dpbGxWYWxpZGF0ZScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgaWYgKHJlZi5kaXNhYmxlZCB8fCByZWYuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IHJlZi5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5JykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLy8gLS0tIERpc2FibGluZyB0aGlzIHR5cGUgZGVjbGFyYXRpb24gdG8gYXZvaWQgY29uZmxpY3Qgd2l0aCBleHRlcm5hbCBlbGVtZW50LWludGVybmFscy1wb2x5ZmlsbCB0eXBlcyAtLS1cbi8vIGRlY2xhcmUgZ2xvYmFsIHtcbi8vICAgaW50ZXJmYWNlIEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3RvciB7XG4vLyAgICAgZm9ybUFzc29jaWF0ZWQ/OiBib29sZWFuO1xuLy8gICB9XG5cbi8vICAgaW50ZXJmYWNlIFdpbmRvdyB7XG4vLyAgICAgRWxlbWVudEludGVybmFsczogdHlwZW9mIEVsZW1lbnRJbnRlcm5hbHM7XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudEludGVybmFsc1N1cHBvcnRlZCgpOiBib29sZWFuIHtcbiAgaWYgKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgIXdpbmRvdy5FbGVtZW50SW50ZXJuYWxzIHx8XG4gICAgIUhUTUxFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hJbnRlcm5hbHNcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2xhc3MgRWxlbWVudEludGVybmFsc0ZlYXR1cmVEZXRlY3Rpb24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuaW50ZXJuYWxzID0gdGhpcy5hdHRhY2hJbnRlcm5hbHMoKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcmFuZG9tTmFtZSA9IGBlbGVtZW50LWludGVybmFscy1mZWF0dXJlLWRldGVjdGlvbi0ke01hdGgucmFuZG9tKClcbiAgICAudG9TdHJpbmcoMzYpXG4gICAgLnJlcGxhY2UoL1teYS16XSsvZywgJycpfWA7XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZShyYW5kb21OYW1lLCBFbGVtZW50SW50ZXJuYWxzRmVhdHVyZURldGVjdGlvbik7XG4gIGNvbnN0IGZlYXR1cmVEZXRlY3Rpb25FbGVtZW50ID0gbmV3IEVsZW1lbnRJbnRlcm5hbHNGZWF0dXJlRGV0ZWN0aW9uKCk7XG4gIHJldHVybiBbXG4gICAgJ3NoYWRvd1Jvb3QnLFxuICAgICdmb3JtJyxcbiAgICAnd2lsbFZhbGlkYXRlJyxcbiAgICAndmFsaWRpdHknLFxuICAgICd2YWxpZGF0aW9uTWVzc2FnZScsXG4gICAgJ2xhYmVscycsXG4gICAgJ3NldEZvcm1WYWx1ZScsXG4gICAgJ3NldFZhbGlkaXR5JyxcbiAgICAnY2hlY2tWYWxpZGl0eScsXG4gICAgJ3JlcG9ydFZhbGlkaXR5JyxcbiAgXS5ldmVyeSgocHJvcCkgPT4gcHJvcCBpbiBmZWF0dXJlRGV0ZWN0aW9uRWxlbWVudC5pbnRlcm5hbHMpO1xufVxuXG4vLyBPbmx5IGluY2x1ZGVzIHRoaXMgcG9seWZpbGwgaWYgd2UgYXJlIGluIGEgamVzdCBydW5uZXIgb3Igbm90IGluIFNTUlxuaWYgKFxuICAhaXNTZXJ2ZXIgfHxcbiAgKChwcm9jZXNzIGFzIGFueSk/LmVudi5KRVNUX1dPUktFUl9JRCAhPT0gdW5kZWZpbmVkICYmIChwcm9jZXNzIGFzIGFueSk/LmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKVxuKSB7XG4gIGlmICghaXNFbGVtZW50SW50ZXJuYWxzU3VwcG9ydGVkKCkpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8qKiBAdHMtZXhwZWN0LWVycm9yOiB3ZSBuZWVkIHRvIHJlcGxhY2UgdGhlIGRlZmF1bHQgRWxlbWVudEludGVybmFscyAqL1xuICAgICAgd2luZG93LkVsZW1lbnRJbnRlcm5hbHMgPSBFbGVtZW50SW50ZXJuYWxzO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgZGVmaW5lID0gQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5kZWZpbmU7XG4gICAgICBDdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlLmRlZmluZSA9IGZ1bmN0aW9uIChuYW1lLCBjb25zdHJ1Y3Rvciwgb3B0aW9ucykge1xuICAgICAgICBpZiAoY29uc3RydWN0b3IuZm9ybUFzc29jaWF0ZWQpIHtcbiAgICAgICAgICBjb25zdCBjb25uZWN0ZWRDYWxsYmFjayA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaztcbiAgICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWNvbm5lY3RlZENhbGxiYWNrTWFwLmhhcyh0aGlzKSkge1xuICAgICAgICAgICAgICBjb25uZWN0ZWRDYWxsYmFja01hcC5zZXQodGhpcywgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgc2V0RGlzYWJsZWQodGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbm5lY3RlZENhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2suYXBwbHkodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhbHdheXMgdXBncmFkZUludGVybmFscyBpbiBjb25uZWN0ZWRDYWxsYmFjayBpbnN0ZWFkIG9mIGNvbnN0cnVjdG9yXG4gICAgICAgICAgICB1cGdyYWRlSW50ZXJuYWxzKHRoaXMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBkZWZpbmUuY2FsbCh0aGlzLCBuYW1lLCBjb25zdHJ1Y3Rvciwgb3B0aW9ucyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gYSBjdXN0b20gZWxlbWVudC4gQ2FsbGluZyB0aGlzIG1ldGhvZFxuICAgICAqIG9uIGEgYnVpbHQtaW4gZWxlbWVudCB3aWxsIHRocm93IGFuIGVycm9yLlxuICAgICAqL1xuICAgIGlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzID0gZnVuY3Rpb24gKCk6IElFbGVtZW50SW50ZXJuYWxzIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhZ05hbWUpIHtcbiAgICAgICAgICAvKiogVGhpcyBoYXBwZW5zIGluIHRoZSBMaXRTU1IgZW52aXJvbm1lbnQuIEhlcmUgd2UgY2FuIGdlbmVyYWxseSBpZ25vcmUgaW50ZXJuYWxzIGZvciBub3cgKi9cbiAgICAgICAgICByZXR1cm4ge30gYXMgb2JqZWN0IGFzIElFbGVtZW50SW50ZXJuYWxzO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdhdHRhY2hJbnRlcm5hbHMnIG9uICdIVE1MRWxlbWVudCc6IFVuYWJsZSB0byBhdHRhY2ggRWxlbWVudEludGVybmFscyB0byBub24tY3VzdG9tIGVsZW1lbnRzLmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnRlcm5hbHNNYXAuaGFzKHRoaXMpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgICAgIGBET01FeGNlcHRpb246IEZhaWxlZCB0byBleGVjdXRlICdhdHRhY2hJbnRlcm5hbHMnIG9uICdIVE1MRWxlbWVudCc6IEVsZW1lbnRJbnRlcm5hbHMgZm9yIHRoZSBzcGVjaWZpZWQgZWxlbWVudCB3YXMgYWxyZWFkeSBhdHRhY2hlZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnRJbnRlcm5hbHModGhpcykgYXMgSUVsZW1lbnRJbnRlcm5hbHM7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbm5lci1kZWNsYXJhdGlvbnNcbiAgICAgIGZ1bmN0aW9uIGF0dGFjaFNoYWRvd09ic2VydmVyKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGF0dGFjaFNoYWRvdy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgc2hhZG93Um9vdE1hcC5zZXQodGhpcywgc2hhZG93Um9vdCk7XG5cbiAgICAgICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKSkge1xuICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG4gICAgICAgICAgaWYgKHdpbmRvdy5TaGFkeURPTSkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCBvYnNlcnZlckNvbmZpZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2hhZG93Um9vdCwgb2JzZXJ2ZXJDb25maWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzaGFkb3dIb3N0c01hcC5zZXQodGhpcywgb2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGFkb3dSb290O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhdHRhY2hTaGFkb3cgPSBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3c7XG4gICAgICBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3cgPSBhdHRhY2hTaGFkb3dPYnNlcnZlcjtcbiAgICB9XG5cbiAgICBpZiAobXV0YXRpb25PYnNlcnZlckV4aXN0cygpKSB7XG4gICAgICBjb25zdCBkb2N1bWVudE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG4gICAgICBkb2N1bWVudE9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBvYnNlcnZlckNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogS2VlcHMgdGhlIHBvbHlmaWxsIGZyb20gdGhyb3dpbmcgaW4gZW52aXJvbm1lbnRzIHdoZXJlIEhUTUxGb3JtRWxlbWVudFxuICAgICAqIGlzIHVuZGVmaW5lZCBsaWtlIGluIGEgc2VydmVyIGVudmlyb25tZW50XG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBIVE1MRm9ybUVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwYXRjaEZvcm1Qcm90b3R5cGUoKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXdpbmRvdy5DdXN0b21TdGF0ZVNldCkge1xuICAgICAgd2luZG93LkN1c3RvbVN0YXRlU2V0ID0gQ3VzdG9tU3RhdGVTZXQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3cuQ3VzdG9tU3RhdGVTZXQpIHtcbiAgICB3aW5kb3cuQ3VzdG9tU3RhdGVTZXQgPSBDdXN0b21TdGF0ZVNldDtcbiAgICBjb25zdCBhdHRhY2hJbnRlcm5hbHMgPSBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzO1xuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hJbnRlcm5hbHMgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gYXR0YWNoSW50ZXJuYWxzLmNhbGwodGhpcywgYXJncyk7XG4gICAgICBpbnRlcm5hbHMuc3RhdGVzID0gbmV3IEN1c3RvbVN0YXRlU2V0KHRoaXMpO1xuICAgICAgcmV0dXJuIGludGVybmFscztcbiAgICB9O1xuICB9XG59XG4iLCAiaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQgfSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExhbmdJbnRlcmZhY2Uge1xuICAvKipcbiAgICogQWRqdXN0cyB0aGUgbGFuZyB1c2VkIHRvIGZvcm1hdCBjb250ZW50IHJlbmRlcmVkIGJ5IHRoaXMgZWxlbWVudFxuICAgKiBAYXR0ciBsYW5nXG4gICAqL1xuICBsYW5nOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBMYW5nTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIExhbmdFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgbGFuZyB1c2VkIHRvIGZvcm1hdCBjb250ZW50IHJlbmRlcmVkIGJ5IHRoaXMgZWxlbWVudFxuICAgICAqIEBhdHRyIGxhbmdcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGxhbmc6IHN0cmluZztcbiAgfVxuICByZXR1cm4gTGFuZ0VsZW1lbnQgYXMgQ29uc3RydWN0b3I8TGFuZ0ludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50IH0gZnJvbSAnLi4vJztcblxuLyoqXG4gKiBTcGVjaWFsIGNsYXNzIHRoYXQgaGVscHMgZnJhbWV3b3JrIHdyYXBwZXIgc3R5bGluZyBrbm93IHdoZW4gYSB3cmFwcGVyIGZyYW1ld29ya1xuICogaGFzIGZpbmlzaGVkIHJlbmRlcmluZyBhbmQgdGh1cyBlbGVtZW50cyBjYW4gbm93IGJlIHNob3duIHdpdGhvdXQgYSBGT1VDLiBUaGlzXG4gKiBvY2N1cnMgaW4gdGhlIHNjZW5hcmlvIHdoZXJlIExpdCBlbGVtZW50cyByZWdpc3RlciBhbmQgcmVuZGVyIGJlZm9yZSB0aGVcbiAqIHdyYXBwZXIgZnJhbWV3b3JrIHBhc3NlcyBlbGVtZW50cyB0aGVpciBwcm9wcy5cbiAqL1xuZXhwb3J0IGNvbnN0IFdhaXRGb3JGcmFtZXdvcmtNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgV2FpdEZvckZyYW1ld29ya0VsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogJ210ZS1mdy1yZW5kZXJlZCcsIHJlZmxlY3Q6IHRydWUgfSkgX2Z3UmVuZGVyZWQ7XG4gIH1cbiAgcmV0dXJuIFdhaXRGb3JGcmFtZXdvcmtFbGVtZW50IGFzIFQ7XG59O1xuIiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3h9YDsiLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tc2l6ZToycmVtOy0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1mdWxsKTstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJvcmRlci13aWR0aDowcHg7LS1mb250LXNpemU6MC44cmVtOy0td2VpZ2h0OnZhcigtLW10ZS1mb250LXdlaWdodC1tZWRpdW0pOy0tZnJhbWUtd2lkdGg6MXB4Oy0tZnJhbWUtY29sb3I6dmFyKC0tbXRlLXN1cmZhY2UtMik7LS1lbGV2YXRpb246dmFyKC0tbXRlLWVsZXZhdGlvbi16MSk7YWxpZ24taXRlbXM6Y2VudGVyO2JvcmRlcjpzb2xpZCB2YXIoLS1ib3JkZXItd2lkdGgpIHZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3gtc2hhZG93OnZhcigtLWVsZXZhdGlvbik7ZGlzcGxheTpmbGV4O2hlaWdodDp2YXIoLS1zaXplKTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO291dGxpbmU6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDp2YXIoLS1zaXplKX06aG9zdChbaHJlZl0pe2N1cnNvcjpwb2ludGVyfTpob3N0KFtzaXplPW1kXSl7LS1zaXplOjNyZW07LS1mb250LXNpemU6MS4yNXJlbTstLWZyYW1lLXdpZHRoOjJweH06aG9zdChbc2l6ZT1sZ10pey0tc2l6ZTo4cmVtOy0tZm9udC1zaXplOjMuMnJlbTstLWZyYW1lLXdpZHRoOjRweDstLXdlaWdodDp2YXIoLS1tdGUtZm9udC13ZWlnaHQtcmVndWxhcil9Omhvc3QoW3JhZGl1cz1tZF0pey0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1mdWxsKX06aG9zdChbcmFkaXVzPXNtXSl7LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLWxnKX06aG9zdChbd2l0aG91dEVsZXZhdGlvbl0pey0tZWxldmF0aW9uOnZhcigtLW10ZS1lbGV2YXRpb24tejApfTpob3N0KFt3aXRoQm9yZGVyXSl7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0xKTstLWJvcmRlci13aWR0aDoxcHh9LmltYWdlLWNvbnRhaW5lcntjb2xvcjp2YXIoLS1jb2xvcik7ZGlzcGxheTpncmlkO2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLXdlaWdodCk7Z3JpZC10ZW1wbGF0ZS1hcmVhczpcImltYWdlXCI7aGVpZ2h0OmNhbGModmFyKC0tc2l6ZSkgLSB2YXIoLS1ib3JkZXItd2lkdGgpKjIpO3dpZHRoOmNhbGModmFyKC0tc2l6ZSkgLSB2YXIoLS1ib3JkZXItd2lkdGgpKjIpfS5mYWxsYmFjaywuaW1hZ2UtY29udGFpbmVye2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5mYWxsYmFja3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJhY2tncm91bmQtY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym94LXNoYWRvdzp2YXIoLS1lbGV2YXRpb24pO2Rpc3BsYXk6ZmxleH0uZmFsbGJhY2ssLmltYWdle2JvcmRlcjp2YXIoLS1mcmFtZS13aWR0aCkgc29saWQgdmFyKC0tZnJhbWUtY29sb3IpO2dyaWQtYXJlYTppbWFnZTtoZWlnaHQ6Y2FsYyh2YXIoLS1zaXplKSAtIHZhcigtLWZyYW1lLXdpZHRoKSoyIC0gdmFyKC0tYm9yZGVyLXdpZHRoKSoyKTt3aWR0aDpjYWxjKHZhcigtLXNpemUpIC0gdmFyKC0tZnJhbWUtd2lkdGgpKjIgLSB2YXIoLS1ib3JkZXItd2lkdGgpKjIpfS5pbWFnZXtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpfS5ub3QtdmlzaWJsZXtkaXNwbGF5Om5vbmV9Omhvc3QoOmZvY3VzLXZpc2libGU6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpKTpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCByZ2IodmFyKC0tbXRlLWZvY3VzLXJnYikpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3R0b206LTJweDtib3gtc2hhZG93OjAgMCAwIDFweCB2YXIoLS1tdGUtbGlnaHQpO2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO2xlZnQ6LTJweDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0Oi0ycHg7dG9wOi0ycHg7ei1pbmRleDo5fWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpjb250ZW50c31zbG90W25hbWU9b3ZlcmxheV06OnNsb3R0ZWQoKil7cG9zaXRpb246YWJzb2x1dGV9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tY29sb3I6dmFyKC0tbXRlLWxpZ2h0KTstLWJhY2tncm91bmQ6dmFyKC0tbXRlLWRhcmspOy0tei1pbmRleDp2YXIoLS1tdGUtei1pbmRleC0yMCk7LS1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteGwpOy0tcGFkZGluZy14OnZhcigtLW10ZS1zcGFjZS1tZCk7LS1wYWRkaW5nLXk6dmFyKC0tbXRlLXNwYWNlLXNtKTtwb2ludGVyLWV2ZW50czphdXRvfS50b29sdGlwe2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtib3JkZXItcmFkaXVzOnZhcigtLXJhZGl1cyk7Y29sb3I6dmFyKC0tY29sb3IpO2Rpc3BsYXk6bm9uZTtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tbGluZS1oZWlnaHQpO21heC13aWR0aDoyNTBweDtvcGFjaXR5OjA7cGFkZGluZzp2YXIoLS1wYWRkaW5nLXkpIHZhcigtLXBhZGRpbmcteCk7cG9zaXRpb246Zml4ZWQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3otaW5kZXg6dmFyKC0tei1pbmRleCl9LmFycm93LC50b29sdGlwe2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCl9LmFycm93e2hlaWdodDoxMHB4O3Bvc2l0aW9uOmFic29sdXRlO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3dpZHRoOjEwcHh9YDsiLCAiaW1wb3J0IHsgTXRlT3ZlcmxheVBsYWNlbWVudCwgTXRlT3ZlcmxheVBvc2l0aW9uIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gJ0BmbG9hdGluZy11aS9kb20nO1xuXG4vKiogQ2FsY3VsYXRlcyBvcHRpbWFsIGZsb2F0aW5nLXVpIG92ZXJsYXlzIGZvciB0aGUgY3VycmVudCBwb3NpdGlvbiAqL1xuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZU92ZXJsYXlQbGFjZW1lbnRzID0gKFxuICBwb3NpdGlvbjogTXRlT3ZlcmxheVBvc2l0aW9uLFxuICBwbGFjZW1lbnQ6IE10ZU92ZXJsYXlQbGFjZW1lbnQgPSAnY2VudGVyJ1xuKTogW1BsYWNlbWVudCwgUGxhY2VtZW50W11dID0+IHtcbiAgY29uc3QgZ2V0RmFsbGJhY2tHcm91cCA9IChcbiAgICBwb3NpdGlvbjogTXRlT3ZlcmxheVBvc2l0aW9uLFxuICAgIHByZWZlcnJlZFBsYWNlbWVudDogTXRlT3ZlcmxheVBsYWNlbWVudCxcbiAgICBwcmltYXJ5UG9zaXRpb246IHN0cmluZ1xuICApOiBQbGFjZW1lbnRbXSA9PiB7XG4gICAgaWYgKHByaW1hcnlQb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09ICd0b3AnIHx8IHBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgICBwcmVmZXJyZWRQbGFjZW1lbnQgPSAnc3RhcnQnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJpbWFyeVBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09ICd0b3AnIHx8IHBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgICBwcmVmZXJyZWRQbGFjZW1lbnQgPSAnZW5kJztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYWxpZ25PcmRlciA9XG4gICAgICBwcmVmZXJyZWRQbGFjZW1lbnQgPT09ICdjZW50ZXInXG4gICAgICAgID8gWycnLCAnLWVuZCcsICctc3RhcnQnXVxuICAgICAgICA6IHByZWZlcnJlZFBsYWNlbWVudCA9PT0gJ3N0YXJ0J1xuICAgICAgICA/IFsnLXN0YXJ0JywgJycsICctZW5kJ11cbiAgICAgICAgOiBbJy1lbmQnLCAnJywgJy1zdGFydCddO1xuICAgIHJldHVybiBhbGlnbk9yZGVyXG4gICAgICAubWFwKChhbGlnbikgPT4gYCR7cG9zaXRpb259JHthbGlnbn1gIGFzIFBsYWNlbWVudClcbiAgICAgIC5maWx0ZXIoKHBsYWNlbWVudCkgPT4gcGxhY2VtZW50ICE9PSBwcmltYXJ5UG9zaXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IHByZWZlcnJlZCA9IGAke3Bvc2l0aW9ufSR7XG4gICAgcGxhY2VtZW50ID09PSAnZW5kJyA/ICctZW5kJyA6IHBsYWNlbWVudCA9PT0gJ3N0YXJ0JyA/ICctc3RhcnQnIDogJydcbiAgfWAgYXMgUGxhY2VtZW50O1xuXG4gIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgcHJlZmVycmVkLFxuICAgICAgICBbXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgnYm90dG9tJywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ3RvcCcsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCdyaWdodCcsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCdsZWZ0JywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICBdLFxuICAgICAgXTtcbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHByZWZlcnJlZCxcbiAgICAgICAgW1xuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ2xlZnQnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgncmlnaHQnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgndG9wJywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ2JvdHRvbScsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgXSxcbiAgICAgIF07XG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgcHJlZmVycmVkLFxuICAgICAgICBbXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgncmlnaHQnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgnbGVmdCcsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCd0b3AnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgnYm90dG9tJywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICBdLFxuICAgICAgXTtcbiAgICBjYXNlICd0b3AnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW1xuICAgICAgICBwcmVmZXJyZWQsXG4gICAgICAgIFtcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCd0b3AnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgnYm90dG9tJywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ3JpZ2h0JywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ2xlZnQnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgIF0sXG4gICAgICBdO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlRGVmYXVsdFBhbmVsQW5pbWF0aW9uID0gKFxuICByZW5kZXJlZFBsYWNlbWVudDogUGxhY2VtZW50LFxuICBvcHRpb25zOiB7XG4gICAgZmFsbGJhY2tQb3NpdGlvbjogc3RyaW5nO1xuICAgIGZhbGxiYWNrUGxhY2VtZW50OiBzdHJpbmc7XG4gICAgYWN0aW9uOiAnb3BlbicgfCAnY2xvc2UnO1xuICAgIHNjYWxlWD86IG51bWJlcjtcbiAgICBzY2FsZVk/OiBudW1iZXI7XG4gIH1cbikgPT4ge1xuICBjb25zdCBzY2FsZVggPSBvcHRpb25zLnNjYWxlWCA/PyAwLjk7XG4gIGNvbnN0IHNjYWxlWSA9IG9wdGlvbnMuc2NhbGVZID8/IG51bGw7XG4gIGxldCBwb3NpdGlvbiA9IG9wdGlvbnMuZmFsbGJhY2tQb3NpdGlvbjtcbiAgbGV0IHBsYWNlbWVudCA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnQ7XG4gIGlmIChyZW5kZXJlZFBsYWNlbWVudCkge1xuICAgIGNvbnN0IFtwYSwgcGJdID0gcmVuZGVyZWRQbGFjZW1lbnQuc3BsaXQoJy0nKTtcbiAgICBwb3NpdGlvbiA9IHBhO1xuICAgIHBsYWNlbWVudCA9IHBiO1xuICB9XG5cbiAgbGV0IHRyYW5zbGF0ZVkgPSBudWxsO1xuICBpZiAocG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgdHJhbnNsYXRlWSA9ICcxMCUnO1xuICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgIHRyYW5zbGF0ZVkgPSAnLTEwJSc7XG4gIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdyaWdodCcgfHwgcG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgIGlmIChwbGFjZW1lbnQgPT09ICdzdGFydCcpIHtcbiAgICAgIHRyYW5zbGF0ZVkgPSAnLTUlJztcbiAgICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gJ2VuZCcpIHtcbiAgICAgIHRyYW5zbGF0ZVkgPSAnNSUnO1xuICAgIH1cbiAgfVxuXG4gIGxldCB0cmFuc2xhdGVYID0gJyc7XG4gIGlmIChwb3NpdGlvbiA9PT0gJ3RvcCcgfHwgcG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgaWYgKHBsYWNlbWVudCA9PT0gJ3N0YXJ0Jykge1xuICAgICAgdHJhbnNsYXRlWCA9ICctNSUnO1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSAnZW5kJykge1xuICAgICAgdHJhbnNsYXRlWCA9ICc1JSc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChwb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdHJhbnNsYXRlWCA9ICctMTAlJztcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHRyYW5zbGF0ZVggPSAnMTAlJztcbiAgICB9XG4gIH1cbiAgaWYgKG9wdGlvbnMuYWN0aW9uID09PSAnb3BlbicpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NhbGVYOiBbc2NhbGVYLCAxXSxcbiAgICAgIHNjYWxlWTogc2NhbGVZID8gW3NjYWxlWSwgMV0gOiB1bmRlZmluZWQsXG4gICAgICB0cmFuc2xhdGVYOiBbdHJhbnNsYXRlWCwgJzAlJ10sXG4gICAgICB0cmFuc2xhdGVZOiB0cmFuc2xhdGVZID8gW3RyYW5zbGF0ZVksICcwJSddIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjYWxlWDogWzEsIHNjYWxlWF0sXG4gICAgICBzY2FsZVk6IHNjYWxlWSA/IFsxLCBzY2FsZVldIDogdW5kZWZpbmVkLFxuICAgICAgdHJhbnNsYXRlWDogWycwJScsIHRyYW5zbGF0ZVhdLFxuICAgICAgdHJhbnNsYXRlWTogdHJhbnNsYXRlWSA/IFsnMCUnLCB0cmFuc2xhdGVZXSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9XG59O1xuIiwgImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHksIHN0YXRlIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9pY29uLnN0eWxlcyc7XG5pbXBvcnQge1xuICBkZWZpbmVFbGVtZW50LFxuICBTdGF0dXNDb2xvck1peGluLFxuICBNdGVFbGVtZW50LFxuICBQcmVzZXRNaXhpbkZhY3RvcnksXG4gIG9uVXBkYXRlLFxuICBVbnN1YnNjcmliZXIsXG4gIGlzU3NyLFxufSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IG10ckljb24gfSBmcm9tICdAbW9ydGFyL2ljb25zJztcbmltcG9ydCB7IE10ZUljb25SZWdpc3RyeVNlcnZpY2UgfSBmcm9tICcuL2ljb24tcmVnaXN0cnkuc2VydmljZSc7XG5pbXBvcnQgeyBJY29uUHJlc2V0IH0gZnJvbSAnLi9pY29uLnByZXNldHMnO1xuaW1wb3J0IHsgdW5zYWZlU1ZHIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvdW5zYWZlLXN2Zy5qcyc7XG5pbXBvcnQgeyBzZWxlY3RvckZhY3RvcnkgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5cbi8qKlxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLWljb24nKVxuZXhwb3J0IGNsYXNzIE10ZUljb24gZXh0ZW5kcyBTdGF0dXNDb2xvck1peGluKFxuICBQcmVzZXRNaXhpbkZhY3Rvcnk8SWNvblByZXNldD4oJ010ZUljb24nKShNdGVFbGVtZW50KVxuKSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbc3R5bGVzXTtcblxuICAvKiogVGhlIG5hbWUgb2YgdGhlIGljb24gdG8gcmVuZGVyICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbmFtZTogbXRySWNvbiB8IHN0cmluZztcblxuICAvKiogVGhlIGxpYnJhcnkgdG8gbG9hZCB0aGUgaWNvbiBmcm9tLiBUaGUgZGVmYXVsdCBsaWJyYXJ5IGlzIGBfZGVmYXVsdGAuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbGlicmFyeSA9ICdfZGVmYXVsdCc7XG5cbiAgLyoqIFRoZSBzaXplIG9mIHRoaXMgaWNvbi4gTWF0Y2hlcyBhIGdpdmVuIGZvbnQtc2l6ZSBpbiBweC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0OiB0cnVlIH0pIHNpemU6IHN0cmluZyB8IG51bWJlciA9IDI0O1xuXG4gIC8qKiBTY2FsZSB0aGlzIGljb24gcmVsYXRpdmUgdG8gdGhlIGNvbXB1dGVkIGZvbnQtc2l6ZSBvZiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgYXV0b3NpemUgPSBmYWxzZTtcblxuICAvKiogQW4gaWNvbidzIHJvbGUgaXMgZGVmYXVsdHMgdG8gYGltZ2AgdG8gZW5zdXJlIHRoZXkgZG8gbm90IGludGVycnVwdCB0ZXh0LiAgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSByb2xlID0gJ2ltZyc7XG5cbiAgLyoqIExhYmVsIGZvciBpY29uIHRvIGJlIHJlYWQgdG8gc2NyZWVucmVhZGVyIHRlY2hub2xvZ2llcyAqL1xuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6ICdhcmlhLWxhYmVsJywgcmVmbGVjdDogdHJ1ZSB9KSBhcmlhTGFiZWw6IHN0cmluZztcblxuICAvKiogTGFiZWwgZm9yIGljb24gdG8gYmUgcmVhZCB0byBzY3JlZW5yZWFkZXIgdGVjaG5vbG9naWVzICovXG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ2FyaWEtaGlkZGVuJywgcmVmbGVjdDogdHJ1ZSB9KSBhcmlhSGlkZGVuID0gJ3RydWUnO1xuXG4gIC8qKiBSZW5kZXJzIHRoZSBpY29uIGluIHRoZSBkZWZhdWx0IG11dGVkIGluayBjb2xvci4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBtdXRlZCA9IGZhbHNlO1xuXG4gIC8qKiBSZW5kZXJzIHRoaXMgaWNvbiB3aXRoIGNvbG9ycyBkZWZpbmVkIGluIHRoZSBTVkcgaW5zdGVhZCBvZiBpbmhlcml0aW5nIGZyb20gQ1NTIHBhcmVudHMgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRoQ29sb3IgPSBmYWxzZTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBUcmFja3MgdGhlIGxvYWRlZCBpY29uIHNvIHdlIGRvbid0IG5lZWQgdG8gcmVmZXRjaCBpdCBkdXJpbmcgaHlkcmF0aW9uXG4gICAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIF9sb2FkZWQ/OiBzdHJpbmc7XG5cbiAgQHN0YXRlKCkgcHJpdmF0ZSBpY29uU3ZnOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBmZXRjaEFib3J0Q29udHJvbGxlcj86IEFib3J0Q29udHJvbGxlcjtcblxuICBwcml2YXRlIHByZXZpb3VzSWNvblN1YnNjcmlwdGlvbjogVW5zdWJzY3JpYmVyO1xuXG4gIEBvblVwZGF0ZShbJ25hbWUnLCAnbGlicmFyeSddLCB7IG9uOiAnYm90aCcgfSlcbiAgcHJpdmF0ZSBoYW5kbGVOYW1lVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLm5hbWUpIHtcbiAgICAgIGlmICh0aGlzLm5lZWRzSWNvblVwZGF0ZSgpKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hBYm9ydENvbnRyb2xsZXI/LmFib3J0KCk7XG4gICAgICAgIHRoaXMuZmV0Y2hBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMucHJldmlvdXNJY29uU3Vic2NyaXB0aW9uPy4oKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0ljb25TdWJzY3JpcHRpb24gPSBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlLmdldEljb24oXG4gICAgICAgICAgdGhpcy5uYW1lLFxuICAgICAgICAgIHRoaXMubGlicmFyeSxcbiAgICAgICAgICB0aGlzLmZldGNoQWJvcnRDb250cm9sbGVyLnNpZ25hbFxuICAgICAgICApLnN1YnNjcmliZSgoaWNvbiwgdW5zdWIpID0+IHtcbiAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgY29uc3Qgb2xkU3ZnID0gdGhpcy5pY29uU3ZnO1xuICAgICAgICAgICAgY29uc3Qgb2xkTG9hZGVkID0gdGhpcy5fbG9hZGVkO1xuXG4gICAgICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgICAgICB0aGlzLmljb25TdmcgPSBpY29uO1xuICAgICAgICAgICAgICB0aGlzLl9sb2FkZWQgPSBgJHt0aGlzLmxpYnJhcnl9fiR7dGhpcy5uYW1lfWA7XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnaWNvblN2ZycsIG9sZFN2Zyk7XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnX2xvYWRlZCcsIG9sZExvYWRlZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvblN2ZyA9IGljb247XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVkID0gYCR7dGhpcy5saWJyYXJ5fX4ke3RoaXMubmFtZX1gO1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnaWNvblN2ZycsIG9sZFN2Zyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCdfbG9hZGVkJywgb2xkTG9hZGVkKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSByZXN1bHQgd2FzIG5vdCBudWxsIG9yIHRoZSBmYWxsYmFjayBpY29uIHRoZW4gd2UgbGVhdmUgdGhpcyBzdWJzY3JpcHRpb25cbiAgICAgICAgICAgIC8vIG9wZW4gaW4gY2FzZSBpdCBsb2FkcyBsYXRlciBvciBsYXp5IGxvYWRpbmcgaXMgcmUtZW5hYmxlZC5cbiAgICAgICAgICAgIGlmICh0aGlzLmljb25TdmcgIT09IG51bGwgJiYgdGhpcy5pY29uU3ZnICE9PSBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlWydmYWxsYmFja0ljb24nXSkge1xuICAgICAgICAgICAgICB1bnN1YigpO1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzSWNvblN1YnNjcmlwdGlvbj8uKCk7XG4gICAgICAgICAgICAgIHRoaXMucHJldmlvdXNJY29uU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRHVyaW5nIFNTUiBhbHdheXMgdW5zdWJcbiAgICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgICAgdW5zdWIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5pY29uU3ZnKSB7XG4gICAgICAgIC8vIElmIHRoZSBpY29uIGRvZXNuJ3QgbmVlZCBhbiB1cGRhdGUgYnV0IHdlIGRvbid0IGtub3cgd2hhdCB0aGUgaWNvblN2ZyBpcyAoaHlkcmF0aW5nIGZyb20gU1NSKSwgZ2V0IGl0IGZyb20gdGhlIERPTVxuICAgICAgICBjb25zdCBzdmcgPSB0aGlzLnJlbmRlclJvb3Q/LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpPy5vdXRlckhUTUwgPz8gbnVsbDtcbiAgICAgICAgLy8gV2FpdCBmb3IgdXBkYXRlIHRvIGNvbXBsZXRlIHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pY29uU3ZnID0gc3ZnO1xuICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnaWNvblN2ZycsIG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbG9hZGVkID0gbnVsbDtcbiAgICAgIHRoaXMuaWNvblN2ZyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBAb25VcGRhdGUoWydhcmlhTGFiZWwnXSwgeyBvbjogJ2JvdGgnIH0pXG4gIHByaXZhdGUgaGFuZGxlQXJpYUxhYmVsQ2hhbmdlKCkge1xuICAgIGlmICghdGhpcy5hcmlhTGFiZWwpIHtcbiAgICAgIHRoaXMuYXJpYUhpZGRlbiA9ICd0cnVlJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hcmlhTGFiZWwgJiYgdGhpcy5hcmlhSGlkZGVuID09PSAndHJ1ZScpIHtcbiAgICAgIHRoaXMuYXJpYUhpZGRlbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcygnc2l6ZScpIHx8IGNoYW5nZWRQcm9wcy5oYXMoJ2ljb25TdmcnKSB8fCBjaGFuZ2VkUHJvcHMuaGFzKCdhdXRvc2l6ZScpKSB7XG4gICAgICBpZiAodGhpcy5hdXRvc2l6ZSB8fCB0aGlzLnNpemUpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuYXV0b3NpemUgPyAnY2FsYygxZW0gKyAycHgpJyA6IGAke3RoaXMuc2l6ZX1weGA7XG4gICAgICAgIC8vIFNwZWNpZmljaXR5IGlzIG9uZSBsZXNzIHRoYXQgc2Uvc3AgcHJvcHMgc28gdGhvc2Ugc3RpbGwgb3ZlcnJpZGUgZGVmYXVsdCBzaXplIGNhbGN1bGF0aW9uc1xuICAgICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoJ210ZS1pY29uLXNpemluZycsIHNlbGVjdG9yRmFjdG9yeSgnOmhvc3Q6aG9zdCcpLCB7XG4gICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgbWluV2lkdGg6IHNpemUsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICAgIG1pbkhlaWdodDogc2l6ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIHRoaXMucHJldmlvdXNJY29uU3Vic2NyaXB0aW9uPy4oKTtcbiAgfVxuXG4gIHByaXZhdGUgbmVlZHNJY29uVXBkYXRlKCkge1xuICAgIHJldHVybiAhdGhpcy5fbG9hZGVkIHx8IHRoaXMuX2xvYWRlZCAhPT0gYCR7dGhpcy5saWJyYXJ5fX4ke3RoaXMubmFtZX1gO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYCR7dGhpcy5pbnN0YW5jZVN0eWxlc30ke3Vuc2FmZVNWRyh0aGlzLmljb25TdmcpfWA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLWljb24nOiBNdGVJY29uO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2JveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50O2NvbG9yOnZhcigtLWljb24tY29sb3IsaW5oZXJpdCk7ZGlzcGxheTppbmxpbmUtYmxvY2s7bGluZS1oZWlnaHQ6MDt3aWR0aDoyNHB4fTpob3N0KFthdXRvc2l6ZV0pe3ZlcnRpY2FsLWFsaWduOm1pZGRsZX06aG9zdChbbXV0ZWRdKXstLWljb24tY29sb3I6dmFyKC0tbXRlLWluay0yKX1zdmd7ZGlzcGxheTpibG9jaztoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfTpob3N0KDpub3QoW3dpdGhDb2xvcl0pKSBzdmcgKntjb2xvcjppbmhlcml0O2ZpbGw6Y3VycmVudENvbG9yIWltcG9ydGFudH06aG9zdChbY29sb3I9cHJpbWFyeV0pPnN2ZyAqe2NvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XSk+c3ZnICp7Y29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXRlcnRpYXJ5XSk+c3ZnICp7Y29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c3VjY2Vzc10pPnN2ZyAqe2NvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9d2FybmluZ10pPnN2ZyAqe2NvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXSk+c3ZnICp7Y29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtcmdiKSl9YDsiLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWluZmVycmFibGUtdHlwZXMgKi9cbmltcG9ydCB7IFNpZ25hbCwgc2lnbmFsLCBpc1NzciwgY29tcHV0ZWQgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IE1vcnRhckljb24sIG10ckljb25IZWxwUmhvbWJ1cyB9IGZyb20gJ0Btb3J0YXIvaWNvbnMnO1xuXG5leHBvcnQgdHlwZSBJY29uRGF0YSA9IHsgZGF0YT86IHN0cmluZzsgZmV0Y2hlZD86IGJvb2xlYW4gfTtcblxuLyoqXG4gKiBTZXJ2aWNlIHVzZWQgdG8gcmVnaXN0ZXIgc3ZnIHN0cmluZ3MgZm9yIGEgZ2l2ZW4gaWNvbiBuYW1lIGFuZCB0aGVuIGxvb2sgdGhlbVxuICogdXAgYnkgdGhhdCBzYW1lIG5hbWUgb3IgZmV0Y2ggdGhlbSBmcm9tIGEgQ0ROLiBUaGUgYE10ZUljb25SZWdpc3RyeVNlcnZpY2VgIGlzXG4gKiBhIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzLiBZb3Ugc2hvdWxkIGFsd2F5cyB1c2UgdGhhdCBleHBvcnQgaW5zdGVhZFxuICogb2YgaW5pdGlhbGl6aW5nIGEgbmV3IGluc3RhbmNlLlxuICovXG5leHBvcnQgY2xhc3MgX010ZUljb25SZWdpc3RyeVNlcnZpY2Uge1xuICAvKiogTWFwIHdoZXJlIGxvYWRlZCBpY29uIHN2Z3MgYXJlIGNhY2hlZCAqL1xuICBwcml2YXRlIGljb25SZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBTaWduYWw8SWNvbkRhdGE+PigpO1xuXG4gIC8qKiBNYXAgb2YgcmVnaXN0ZXJlZCBsYXp5IGxvYWRpbmcgcmVzb2x2ZXIgZnVuY3Rpb25zIHBlciBpY29uIGxpYnJhcnkgKi9cbiAgcHJpdmF0ZSBpY29uVXJsUmVzb2x2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIChpY29uTmFtZTogc3RyaW5nKSA9PiBzdHJpbmc+KCk7XG5cbiAgLyoqIERlZmluZXMgdGhlIHN2ZyB1c2VkIHdoZW4gYW4gaWNvbiBjYW5ub3QgYmUgbG9hZGVkICovXG4gIHByaXZhdGUgZmFsbGJhY2tJY29uID0gbXRySWNvbkhlbHBSaG9tYnVzPy5kYXRhO1xuXG4gIC8qKiBUcmFja3MgaWYgaWNvbnMgc2hvdWxkIGJlIGxhenkgbG9hZGVkIGludGVybmFsbHkgKi9cbiAgcHJpdmF0ZSBsYXp5TG9hZEVuYWJsZWQgPSB0cnVlO1xuXG4gIC8qKiBQcmV2ZW50cyBsb2dzIGFuZCBmZXRjaGVzIHdoZW4gdHJ1ZSAqL1xuICBwcml2YXRlIHRlc3RNb2RlRW5hYmxlZCA9IGZhbHNlO1xuXG4gIC8qKiBEZWxpbWl0ZXIgdXNlZCB3aGVuIGNyZWF0aW5nIGxpYnJhcnkgKyBpY29uIG5hbWUga2V5cyAqL1xuICBwcml2YXRlIGRlbGltaXRlciA9ICd+JztcblxuICAvKiogSWYgZXhlY3V0aW5nIHNlcnZlci1zaWRlIGFsbCBtb3J0YXIgaWNvbnMgd2lsbCBiZSBsb2FkZWQgaGVyZSAqL1xuICBwcml2YXRlIHNlcnZlckljb25DYWNoZT86IFJlY29yZDxzdHJpbmcsIE1vcnRhckljb24+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaWNvblVybFJlc29sdmVycy5zZXQoJ19kZWZhdWx0JywgKGljb25OYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBgaHR0cHM6Ly9tb3J0YXItY2RuLmhlYi5jb20vaWNvbnMvbWRpLzcuMi8ke2ljb25OYW1lfS5zdmdgO1xuICAgIH0pO1xuICAgIHRoaXMuaWNvblVybFJlc29sdmVycy5zZXQoJ2N4JywgKGljb25OYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBgaHR0cHM6Ly9tb3J0YXItY2RuLmhlYi5jb20vaWNvbnMvY3gvMS4xLyR7aWNvbk5hbWV9LnN2Z2A7XG4gICAgfSk7XG4gICAgdGhpcy5zc3JJbml0KCkudGhlbigoKSA9PiB7fSk7XG4gIH1cblxuICAvKiogQGhpZGRlbiAqL1xuICBhc3luYyBzc3JJbml0KCkge1xuICAgIC8qKlxuICAgICAqIFRoaXMgbW9uc3Ryb3NpdHkgZW5hYmxlcyBsb2NhbCBpY29uIHJlbmRlcmluZyBkdXJpbmcgU1NSIF9XSVRIT1VUXyBhbHNvIHJlc3VsdGluZyBpblxuICAgICAqIGJ1bmRsZXJzIHB1bGxpbmcgaW4gdGhlIGVudGlyZSBpY29uIGxpYnJhcnkgZWxzZXdoZXJlLiBUaGlzIGNhbiBhbHNvIGJlIGFjaGlldmVkIHdpdGgganVzdFxuICAgICAqIHRoZSBtYWdpYyBjb21tZW50cyBiZWxvdy4uLmJ1dCBub3QgYWxsIGJ1bmRsZXJzIHN1cHBvcnQgdGhhdCBraW5kIG9mIGZlYXR1cmUgc28gdGhpcyBpcyBhblxuICAgICAqIGV4dHJhIHByZWNhdXRpb24uXG4gICAgICpcbiAgICAgKiBGb3IgdGhpcyB0byB3b3JrOlxuICAgICAqIC0gVGhlIGVudmlyb25tZW50IHZhcmlhYmxlIGBNT1JUQVJfRFlOQU1JQ19TU1JfSUNPTl9JTVBPUlRTYCBtdXN0IGJlIHRydWVcbiAgICAgKiAtIFRoZSBgQG1vcnRhci9pY29uc2AgcGFja2FnZSBtdXN0IGJlIGF2YWlsYWJsZVxuICAgICAqL1xuICAgIHRyeSB7XG4gICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICBjb25zdCBpY29uSW1wb3J0ID1cbiAgICAgICAgICAocHJvY2VzcyBhcyBhbnkpPy5lbnYuTU9SVEFSX0RZTkFNSUNfU1NSX0lDT05fSU1QT1JUUyA9PT0gJ3RydWUnID8gJ0Btb3J0YXIvaWNvbnMnIDogbnVsbDtcbiAgICAgICAgaWYgKGljb25JbXBvcnQpIHtcbiAgICAgICAgICAvLyBBdHRlbXB0IHRvIGxvYWQgYWxsIGljb25zIGxvY2FsbHkgaWYgcnVuIHNlcnZlciBzaWRlLiBUaGUgaWdub3JlXG4gICAgICAgICAgLy8gY29tbWVudHMgaGVyZSBwcmV2ZW50IHdlYnBhY2sgJiB2aXRlIGZyb20gdGhyb3dpbmcgYSB3YXJuaW5nXG4gICAgICAgICAgLy8gc2luY2UgdGhlaXIgaW5hYmlsaXR5IHRvIG9wdGltaXplIHRoaXMgaXMgaW50ZW50aW9uYWwgaGVyZS5cbiAgICAgICAgICBjb25zdCBpY29ucyA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovIC8qIEB2aXRlLWlnbm9yZSAqLyBpY29uSW1wb3J0KTtcbiAgICAgICAgICB0aGlzLnNlcnZlckljb25DYWNoZSA9IGljb25zPy5kZWZhdWx0ID8/IGljb25zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLyogZW1wdHkgKi9cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgcm9vdCB1cmwgZnJvbSB3aGljaCB0aGlzIHNlcnZpY2Ugd2lsbCBhdHRlbXB0IHRvIGZldGNoIGljb25zIGZyb20gZm9yIHRoZSBnaXZlbiBcImxpYnJhcnlcIi5cbiAgICovXG4gIHB1YmxpYyByZWdpc3Rlckljb25MaWJyYXJ5KFxuICAgIGljb25MaWJyYXJ5ID0gJ19kZWZhdWx0JyxcbiAgICBpY29uVXJsUmVzb2x2ZXI/OiAoaWNvbk5hbWU6IHN0cmluZykgPT4gc3RyaW5nXG4gICkge1xuICAgIHRoaXMubGF6eUxvYWRFbmFibGVkID0gdHJ1ZTtcbiAgICBpZiAoaWNvblVybFJlc29sdmVyKSB7XG4gICAgICB0aGlzLmljb25VcmxSZXNvbHZlcnMuc2V0KGljb25MaWJyYXJ5ID8/ICdfZGVmYXVsdCcsIGljb25VcmxSZXNvbHZlcik7XG4gICAgfVxuXG4gICAgLy8gRmV0Y2ggYW55IGljb25zIHJlcXVlc3RlZCBiZWZvcmUgdGhpcyB3YXMgY2FsbGVkIHRoYXQgaGF2ZSBub3QgeWV0IGJlZW4gZmV0Y2hlZFxuICAgIGZvciAoY29uc3QgW25hbWUsIGljb25TaWduYWxdIG9mIHRoaXMuaWNvblJlZ2lzdHJ5KSB7XG4gICAgICBpZiAoIWljb25TaWduYWwgfHwgIWljb25TaWduYWwuZ2V0KCk/LmZldGNoZWQpIHtcbiAgICAgICAgY29uc3QgW2ljb25MaWJyYXJ5LCBwYXRoTmFtZV0gPSBuYW1lLnNwbGl0KHRoaXMuZGVsaW1pdGVyKTtcbiAgICAgICAgdGhpcy5mZXRjaEljb24ocGF0aE5hbWUsIGljb25MaWJyYXJ5KS50aGVuKChpY29uKSA9PiB7XG4gICAgICAgICAgaWNvblNpZ25hbC5zZXQoeyBmZXRjaGVkOiB0cnVlLCBkYXRhOiBpY29uIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogTWFudWFsbHkgcmVnaXN0ZXJzIG5ldyBpY29ucyAqL1xuICBwdWJsaWMgcmVnaXN0ZXJJY29ucyhpY29uczogTW9ydGFySWNvbltdLCBpY29uTGlicmFyeSA9ICdfZGVmYXVsdCcpIHtcbiAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICBjb25zdCBpY29uU2lnbmFsID0gdGhpcy5pY29uUmVnaXN0cnkuZ2V0KGAke2ljb25MaWJyYXJ5fSR7dGhpcy5kZWxpbWl0ZXJ9JHtpY29uLm5hbWV9YCk7XG4gICAgICBpZiAoIWljb25TaWduYWwpIHtcbiAgICAgICAgdGhpcy5pY29uUmVnaXN0cnkuc2V0KFxuICAgICAgICAgIGAke2ljb25MaWJyYXJ5fSR7dGhpcy5kZWxpbWl0ZXJ9JHtpY29uLm5hbWV9YCxcbiAgICAgICAgICBzaWduYWwoeyBmZXRjaGVkOiB0cnVlLCBkYXRhOiBpY29uLmRhdGEgfSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoaWNvblNpZ25hbCAmJiAhaWNvblNpZ25hbC5nZXQoKT8uZmV0Y2hlZCkge1xuICAgICAgICBpY29uU2lnbmFsLnNldCh7IGZldGNoZWQ6IHRydWUsIGRhdGE6IGljb24uZGF0YSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgeW91IHRvIG92ZXJyaWRlIHRoZSBsYXp5IGxvYWRpbmcuIERlZmF1bHRzIHRvIGB0cnVlYC5cbiAgICogV2hlbiBgZmFsc2VgIGljb25zIHdpbGwgbm90IGJlIGZldGNoZWQgZnJvbSByZW1vdGUgbG9jYXRpb25zLlxuICAgKi9cbiAgcHVibGljIHNldExhenlMb2FkaW5nKHZhbHVlOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIHRoaXMubGF6eUxvYWRFbmFibGVkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIHlvdSB0byBvdmVycmlkZSB0aGUgdGVzdCBtb2RlLiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgKiBXaGVuIHRydWUgd2FybmluZ3Mgd2lsbCBub3QgYmUgdGhyb3duIGFuZCBubyBmZXRjaGVzIHdpbGwgYmUgbWFkZS5cbiAgICovXG4gIHB1YmxpYyBzZXRUZXN0TW9kZSh2YWx1ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgdGhpcy50ZXN0TW9kZUVuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBTZXRzIGEgbmV3IGN1c3RvbSBmYWxsYmFjayBpY29uICovXG4gIHB1YmxpYyBzZXRGYWxsYmFja0ljb24oZmFsbGJhY2tJY29uOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5mYWxsYmFja0ljb24gPSBmYWxsYmFja0ljb247XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gcmV0cmlldmUgYW4gaWNvbiBmcm9tIHRoZSByZWdpc3RyeS5cbiAgICpcbiAgICogSWYgYSByb290U3ZnSWNvblVybCBoYXMgYmVlbiBzZXQsIHRoaXMgbWV0aG9kIHdpbGxcbiAgICogYXR0ZW1wdCB0byBsb2FkIHRoZSBpY29uIGZyb20gdGhlcmUuIElmIHN1Y2Nlc3NmdWwsXG4gICAqIHRoYXQgc3ZnIHdpbGwgYmUgcmVnaXN0ZXJlZCBmb3IgcmV1c2UuXG4gICAqL1xuICBwdWJsaWMgZ2V0SWNvbihcbiAgICBwYXRoTmFtZTogc3RyaW5nLFxuICAgIGljb25MaWJyYXJ5ID0gJ19kZWZhdWx0JyxcbiAgICBhYm9ydFNpZ25hbD86IEFib3J0U2lnbmFsXG4gICk6IFNpZ25hbDxzdHJpbmcgfCBudWxsPiB7XG4gICAgLy8gSWYgaWNvbiBpcyB1bmRlZmluZWQgaW5zdGFudGx5IHJldHVybiB0aGUgZmFsbGJhY2sgaWNvblxuICAgIGlmIChwYXRoTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gc2lnbmFsKHRoaXMuZmFsbGJhY2tJY29uKTtcbiAgICB9XG4gICAgY29uc3QgcmVnaXN0ZXJlZFNpZ25hbCA9IHRoaXMuaWNvblJlZ2lzdHJ5LmdldChgJHtpY29uTGlicmFyeX0ke3RoaXMuZGVsaW1pdGVyfSR7cGF0aE5hbWV9YCk7XG4gICAgY29uc3QgaWNvblJlZ2lzdGVyZWQgPSAhIXJlZ2lzdGVyZWRTaWduYWw7XG4gICAgLy8gSWYgdGhlIGljb24gaXMgcmVnaXN0ZXJlZCBqdXN0IHJldHVybiBpdFxuICAgIGlmIChpY29uUmVnaXN0ZXJlZCkge1xuICAgICAgcmV0dXJuIGNvbXB1dGVkKHJlZ2lzdGVyZWRTaWduYWwsIChlbnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4gZW50cnk/LmRhdGE7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCBpZiBsYXp5TG9hZEVuYWJsZWQgdGhlbiBhdHRlbXB0IHRvIGZldGNoIGFuZCByZWdpc3RlciB0aGUgaWNvblxuICAgIGVsc2UgaWYgKCFpY29uUmVnaXN0ZXJlZCAmJiB0aGlzLmxhenlMb2FkRW5hYmxlZCkge1xuICAgICAgbGV0IGljb25TaWduYWw6IFNpZ25hbDxJY29uRGF0YT47XG5cbiAgICAgIC8vIExvYWQgZnJvbSBsb2NhbCBzZXJ2ZXIgaWNvbiBjYWNoZSBkdXJpbmcgc3NyIGlmIGl0IGV4aXN0c1xuICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VydmVySWNvbkNhY2hlKSB7XG4gICAgICAgICAgY29uc3QgY2FtZWxOYW1lID0gcGF0aE5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgKGcpID0+IGdbMV0udG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgY29uc3QgaWNvbk5hbWUgPSBgJHtpY29uTGlicmFyeSA9PT0gJ2N4JyA/ICdjeCcgOiAnbXRyJ31JY29uJHtjYW1lbE5hbWVcbiAgICAgICAgICAgIC5jaGFyQXQoMClcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpfSR7Y2FtZWxOYW1lLnNsaWNlKDEpfWA7XG5cbiAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJJY29uQ2FjaGVbaWNvbk5hbWVdIGFzIGFueSkge1xuICAgICAgICAgICAgaWNvblNpZ25hbCA9IHNpZ25hbDxJY29uRGF0YT4oe1xuICAgICAgICAgICAgICBkYXRhOiAodGhpcy5zZXJ2ZXJJY29uQ2FjaGVbaWNvbk5hbWVdIGFzIGFueSk/LmRhdGEsXG4gICAgICAgICAgICAgIGZldGNoZWQ6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlZEZhaWxlZExvYWQoaWNvbkxpYnJhcnksIHBhdGhOYW1lLCBpY29uU2lnbmFsKSBhcyBTaWduYWw8XG4gICAgICAgICAgICAgIHN0cmluZyB8IG51bGxcbiAgICAgICAgICAgID47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIElmIHRoZSBpY29uIGNhY2hlIGRvZXNuJ3QgZXhpc3QganVzdCBkbyBub3RoaW5nIGJlY2F1c2UgdGhlIGljb24gd2lsbCBiZSBsb2FkZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGljb25TaWduYWwgPSBzaWduYWw8SWNvbkRhdGE+KHtcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBmZXRjaGVkOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gSWYgbm90IG9uIHRoZSBzZXJ2ZXIgdGhlbiBmZXRjaCB0aGUgaWNvblxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIFNldCB0aGUgaWNvbiBhcyB0aGUgcmVzdWx0IG9mIHRoZSBhd2FpdCByaWdodCBub3csIGJlZm9yZSB0aGUgZmV0Y2hcbiAgICAgICAgLy8gaXMgaW5pdGlhdGVkLCB0byBwcmV2ZW50IHJlZHVuZGFudCBpbml0aWFsIHF1ZXJpZXMgb24gcGFnZSBsb2FkXG4gICAgICAgIGljb25TaWduYWwgPSBzaWduYWw8SWNvbkRhdGE+KHtcbiAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgIGZldGNoZWQ6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pY29uUmVnaXN0cnkuc2V0KGAke2ljb25MaWJyYXJ5fSR7dGhpcy5kZWxpbWl0ZXJ9JHtwYXRoTmFtZX1gLCBpY29uU2lnbmFsKTtcblxuICAgICAgICB0aGlzLmZldGNoSWNvbihwYXRoTmFtZSwgaWNvbkxpYnJhcnksIGFib3J0U2lnbmFsKS50aGVuKChpY29uKSA9PiB7XG4gICAgICAgICAgaWNvblNpZ25hbC5zZXQoeyBkYXRhOiBpY29uLCBmZXRjaGVkOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXB1dGVkKGljb25TaWduYWwsIChlbnRyeSkgPT4gZW50cnk/LmRhdGEpO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIGp1c3QgYWxlcnQgdGhhdCB0aGUgaWNvbiBpc24ndCByZWdpc3RlcmVkIGFuZCByZXR1cm4gdGhlIGZhbGxiYWNrXG4gICAgZWxzZSBpZiAoIWljb25SZWdpc3RlcmVkICYmICF0aGlzLmxhenlMb2FkRW5hYmxlZCkge1xuICAgICAgY29uc3QgdGVtcCA9IHRoaXMuaGFuZGxlZEZhaWxlZExvYWQoaWNvbkxpYnJhcnksIHBhdGhOYW1lKTtcbiAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBMb2dzIGEgd2FybmluZyBhbmQgcmV0dXJucyBmYWxsYmFjayBpY29uLiBDYWxsIHdoZW4gYXR0ZW1wdCB0byBsb2FkIGljb24gaGFzIGZhaWxlZC4gKi9cbiAgcHJpdmF0ZSBoYW5kbGVkRmFpbGVkTG9hZChpY29uTGlicmFyeSwgcGF0aE5hbWUsIGljb25TaWduYWw/OiBTaWduYWw8SWNvbkRhdGE+KSB7XG4gICAgLy8gQ3JlYXRlIHJldHVybiBzdWJqIGlmIG9uZSBpc24ndCBwYXNzZWRcbiAgICBpZiAoIWljb25TaWduYWwpIHtcbiAgICAgIGljb25TaWduYWwgPSBzaWduYWw8SWNvbkRhdGE+KHtcbiAgICAgICAgZGF0YTogdGhpcy5mYWxsYmFja0ljb24sXG4gICAgICAgIGZldGNoZWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuaWNvblJlZ2lzdHJ5LnNldChgJHtpY29uTGlicmFyeX0ke3RoaXMuZGVsaW1pdGVyfSR7cGF0aE5hbWV9YCwgaWNvblNpZ25hbCk7XG4gICAgaWYgKCF0aGlzLnRlc3RNb2RlRW5hYmxlZCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgTW9ydGFyOiBObyBpY29uIGlzIHJlZ2lzdGVyZWQgZm9yIHRoZSBwYXRoIG5hbWUgXCIke3BhdGhOYW1lfVwiLiBEaWQgeW91IGFkZCBpdCB0byB0aGUgbW9ydGFyIGljb24gcmVnaXN0cnk/YFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXB1dGVkKGljb25TaWduYWwsIChlbnRyeSkgPT4gZW50cnk/LmRhdGEpO1xuICB9XG5cbiAgLyoqIEZldGNoZXMgYW4gaWNvbiBmb3IgdGhlIGdpdmVuIGxpYnJhcnkgYnkgbmFtZSAqL1xuICBwcml2YXRlIGFzeW5jIGZldGNoSWNvbihwYXRoTmFtZTogc3RyaW5nLCBpY29uTGlicmFyeSA9ICdfZGVmYXVsdCcsIGFib3J0U2lnbmFsPzogQWJvcnRTaWduYWwpIHtcbiAgICBpZiAoIXRoaXMudGVzdE1vZGVFbmFibGVkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNvbHZlciA9IHRoaXMuaWNvblVybFJlc29sdmVycy5nZXQoaWNvbkxpYnJhcnkpO1xuICAgICAgICAvLyBJZiBubyByZXNvbHZlciBpcyByZWdpc3RlcmVkIGZvciB0aGUgcmVxdWVzdGVkIGxpYnJhcnlcbiAgICAgICAgaWYgKCFyZXNvbHZlcikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlOiBObyBpY29uVXJsUmVzb2x2ZXIgcmVnaXN0ZXJlZCBmb3IgbGlicmFyeTogXCIke2ljb25MaWJyYXJ5fVwiYFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tJY29uO1xuICAgICAgICB9XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgZmV0Y2ggcmVxdWVzdCBidXQgdG8gbm90IGF3YWl0IHlldFxuICAgICAgICBjb25zdCByZXEgPSBmZXRjaChyZXNvbHZlcihwYXRoTmFtZSksIHsgbWV0aG9kOiAnZ2V0Jywgc2lnbmFsOiBhYm9ydFNpZ25hbCB9KTtcbiAgICAgICAgY29uc3QgcmVzID0gdGhpcy5wYXJzZUljb25EYXRhKHBhdGhOYW1lLCByZXEpO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBJZiB0aGUgZmV0Y2ggZmFpbGVkIGxvZyBhbmQgcmV0dXJuIGZhbGxiYWNrXG4gICAgICAgIGlmIChwYXRoTmFtZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYE10ZUljb25SZWdpc3RyeVNlcnZpY2U6IGZhaWxlZCB0byBsb2FkIGljb246ICR7cGF0aE5hbWV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tJY29uO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mYWxsYmFja0ljb247XG4gIH1cblxuICAvKiogQXN5bmNocm9ub3VzbHkgcGFyc2UgaWNvbiBmZXRjaCByZXNwb25zZSBkYXRhICovXG4gIHByaXZhdGUgcGFyc2VJY29uRGF0YShwYXRoTmFtZTogc3RyaW5nLCByZXE6IFByb21pc2U8UmVzcG9uc2U+KTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVxXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMudGV4dCgpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBhdGhOYW1lKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYE10ZUljb25SZWdpc3RyeVNlcnZpY2U6IGZhaWxlZCB0byBsb2FkIGljb246ICR7cGF0aE5hbWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBHcmFjZWZ1bGx5IHJlc29sdmUgd2l0aCBmYWxsYmFjayBpY29uIG9uIGZhaWxlZCBsb2FkXG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuZmFsbGJhY2tJY29uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIC8vIEdyYWNlZnVsbHkgcmVzb2x2ZSB3aXRoIGZhbGxiYWNrIGljb24gb24gZXJyb3JcbiAgICAgICAgICByZXNvbHZlKHRoaXMuZmFsbGJhY2tJY29uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgTXRlSWNvblJlZ2lzdHJ5U2VydmljZSA9IG5ldyBfTXRlSWNvblJlZ2lzdHJ5U2VydmljZSgpO1xuXG4vKipcbiAqIEluc3RhbmNlIG9mIF9NdGVJY29uUmVnaXN0cnlTZXJ2aWNlIGV4cG9ydGVkIGFzIGEgc2luZ2xldG9uLlxuICpcbiAqIFNlcnZpY2UgdXNlZCB0byByZWdpc3RlciBzdmcgc3RyaW5ncyBmb3IgYSBnaXZlbiBpY29uIG5hbWUgYW5kIHRoZW4gbG9vayB0aGVtIHVwIGJ5IHRoYXQgc2FtZSBuYW1lLlxuICovXG5leHBvcnQgeyBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlIH07XG4iLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tc2l6ZToycmVtOy0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1mdWxsKTstLWZvbnQtc2l6ZTowLjhyZW07LS1jb2xvcjp2YXIoLS1tdGUtaW5rLWludmVyc2UpOy0td2VpZ2h0OnZhcigtLW10ZS1mb250LXdlaWdodC1tZWRpdW0pOy0tZ2FwOi0wLjc1cmVtOy0tZnJhbWUtd2lkdGg6MXB4Oy0tYm9yZGVyLXdpZHRoOjBweDstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtY29sb3I6dmFyKC0tbXRlLWluay0yKTstLWZyYW1lLWNvbG9yOnZhcigtLW10ZS1zdXJmYWNlLTIpO2Rpc3BsYXk6YmxvY2s7cGFkZGluZy1sZWZ0OmNhbGModmFyKC0tZ2FwKSotMSl9LmF2YXRhci1saXN0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7ZGlzcGxheTpmbGV4fS5hdmF0YXItbGlzdCAuYXZhdGFyLWV4Y2Vzcy1jb250YWluZXIsLmF2YXRhci1saXN0IC5hdmF0YXItbGlzdC1pdGVte21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0tZ2FwKX0uYXZhdGFyLWxpc3QgbXRlLWF2YXRhcjpmb2N1cy12aXNpYmxle3otaW5kZXg6MX1idXR0b257YWxsOnVuc2V0fWxpLHVse3BhZGRpbmc6MH11bHtsaXN0LXN0eWxlOm5vbmV9LmF2YXRhci1leGNlc3MtY29udGFpbmVye2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXI6c29saWQgdmFyKC0tYm9yZGVyLXdpZHRoKSB2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7ZGlzcGxheTpmbGV4O2hlaWdodDpjYWxjKHZhcigtLXNpemUpIC0gdmFyKC0tYm9yZGVyLXdpZHRoKSoyKTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOmNhbGModmFyKC0tc2l6ZSkgLSB2YXIoLS1ib3JkZXItd2lkdGgpKjIpfS5hdmF0YXItZXhjZXNzLWNvbnRhaW5lci5pcy1wb3BvdmVye2N1cnNvcjpwb2ludGVyfS5hdmF0YXItZXhjZXNze2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJhY2tncm91bmQtY29sb3IpO2JvcmRlcjp2YXIoLS1mcmFtZS13aWR0aCkgc29saWQgdmFyKC0tZnJhbWUtY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Y29sb3I6dmFyKC0tY29sb3IpO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS13ZWlnaHQpO2hlaWdodDpjYWxjKHZhcigtLXNpemUpIC0gdmFyKC0tZnJhbWUtd2lkdGgpKjIgLSB2YXIoLS1ib3JkZXItd2lkdGgpKjIpO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6Y2FsYyh2YXIoLS1zaXplKSAtIHZhcigtLWZyYW1lLXdpZHRoKSoyIC0gdmFyKC0tYm9yZGVyLXdpZHRoKSoyKX06aG9zdChbc2l6ZT1tZF0pey0tZ2FwOi0wLjYyNXJlbTstLXNpemU6M3JlbTstLWZvbnQtc2l6ZToxLjI1cmVtOy0tZnJhbWUtd2lkdGg6MnB4fTpob3N0KFtzaXplPWxnXSl7LS1nYXA6LTEuNXJlbTstLXNpemU6OHJlbTstLWZvbnQtc2l6ZTozLjJyZW07LS1mcmFtZS13aWR0aDo0cHg7LS13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpfTpob3N0KFtyYWRpdXM9bWRdKXstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtZnVsbCl9Omhvc3QoW3JhZGl1cz1zbV0pey0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1sZyl9LmF2YXRhci1leGNlc3MtY29udGFpbmVyOmZvY3VzLXZpc2libGU6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvdHRvbTotMnB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDotMnB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTJweDt0b3A6LTJweDt6LWluZGV4Ojl9YDsiLCAiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5cbmltcG9ydCB7XG4gIHByZXNldFByb3BlcnR5LFxuICBDb3JlQ29sb3JNaXhpbixcbiAgUHJlc2V0TWl4aW5GYWN0b3J5LFxuICBkZWZpbmVFbGVtZW50LFxuICBidXR0b25TdHlsZXMsXG59IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgTXRlVGV4dCB9IGZyb20gJy4uL3RleHQnO1xuaW1wb3J0IHsgQnV0dG9uTWl4aW4gfSBmcm9tICcuLi8uLi9jb3JlL21peGlucy9idXR0b24ubWl4aW4nO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9saW5rLnN0eWxlcyc7XG5pbXBvcnQgeyBMaW5rUHJlc2V0IH0gZnJvbSAnLi9saW5rLnByZXNldHMnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQvZGlyZWN0aXZlcy9jbGFzcy1tYXAuanMnO1xuXG4vKipcbiAqIEBzbG90IC0gRGVmYXVsdCBzbG90dGVkIGNvbnRlbnRcbiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS1saW5rJylcbmV4cG9ydCBjbGFzcyBNdGVMaW5rIGV4dGVuZHMgQ29yZUNvbG9yTWl4aW4oXG4gIFByZXNldE1peGluRmFjdG9yeTxMaW5rUHJlc2V0PignTXRlTGluaycpKEJ1dHRvbk1peGluKE10ZVRleHQpKVxuKSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbLi4uTXRlVGV4dC5zdHlsZXMsIGJ1dHRvblN0eWxlcywgc3R5bGVzXTtcblxuICBAcHJlc2V0UHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGZvbnRXZWlnaHQ6ICdyZWd1bGFyJyB8ICdib2xkJztcblxuICBnZXRCdXR0b25DbGFzc2VzKCkge1xuICAgIHJldHVybiBjbGFzc01hcCh7IGxpbms6IHRydWUgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyQnV0dG9uVGVtcGxhdGUoaHRtbGA8c2xvdD48L3Nsb3Q+YCk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLWxpbmsnOiBNdGVMaW5rO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgc2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IGJhc2VTdHlsZXMsIGRlZmluZUVsZW1lbnQsIE10ZUNvbnRlbnRCYXNlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL3RleHQuc3R5bGVzJztcbmltcG9ydCB7IHRleHQgfSBmcm9tICdzdHJlYW0vY29uc3VtZXJzJztcblxuLyoqXG4gKiBAc2xvdCAtIERlZmF1bHQgc2xvdHRlZCBjb250ZW50XG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtdGV4dCcpXG5leHBvcnQgY2xhc3MgTXRlVGV4dCBleHRlbmRzIE10ZUNvbnRlbnRCYXNlIHtcbiAgc3RhdGljIHN0eWxlcyA9IFtiYXNlU3R5bGVzLCBzdHlsZXNdO1xuXG4gIC8qKiBTZXRzIHRoZSBgdGV4dC1hbGlnbm1lbnRgIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgYWxpZ24/OlxuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdlbmQnXG4gICAgfCAncmlnaHQnXG4gICAgfCAnbGVmdCdcbiAgICB8ICdqdXN0aWZ5J1xuICAgIHwgJ2p1c3RpZnktYWxsJ1xuICAgIHwgJ21hdGNoLXBhcmVudCdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gICAgfCAncmV2ZXJ0J1xuICAgIHwgJ3JldmVydC1sYXllcidcbiAgICB8ICd1bnNldCc7XG5cbiAgLyoqIEFkanVzdHMgdGhlIGZvbnQgc2l6ZSBvZiB0aGlzIHRleHQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBzaXplPzogJ3h4cycgfCAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnO1xuXG4gIC8qKiBTZXRzIHRoZSBgdGV4dC10cmFuc2Zvcm1gIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgdHJhbnNmb3JtPzpcbiAgICB8ICd1cHBlcmNhc2UnXG4gICAgfCAnbG93ZXJjYXNlJ1xuICAgIHwgJ2NhcGl0YWxpemUnXG4gICAgfCAnZnVsbC13aWR0aCdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gICAgfCAncmV2ZXJ0J1xuICAgIHwgJ3JldmVydC1sYXllcidcbiAgICB8ICd1bnNldCc7XG5cbiAgLyoqIFNldHMgdGhlIGB3b3JkLWJyZWFrYCBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHdvcmRCcmVhaz86XG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ2JyZWFrLWFsbCdcbiAgICB8ICdrZWVwLWFsbCdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gICAgfCAncmV2ZXJ0J1xuICAgIHwgJ3JldmVydC1sYXllcidcbiAgICB8ICd1bnNldCc7XG5cbiAgLyoqIFNldHMgdGhlIGB3b3JkLXNwYWNpbmdgIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgd29yZFNwYWNpbmc/OiAnc20nIHwgJ21kJyB8ICdsZyc7XG5cbiAgLyoqIFNldHMgdGhlIGBsZXR0ZXItc3BhY2luZ2AgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBsZXR0ZXJTcGFjaW5nPzogJ3NtJyB8ICdtZCcgfCAnbGcnO1xuXG4gIC8qKiBTZXRzIHRoZSBgd2hpdGUtc3BhY2VgIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgd2hpdGVTcGFjZT86XG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ25vd3JhcCdcbiAgICB8ICdwcmUnXG4gICAgfCAncHJlLXdyYXAnXG4gICAgfCAncHJlLWxpbmUnXG4gICAgfCAnYnJlYWstc3BhY2VzJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgICB8ICdyZXZlcnQnXG4gICAgfCAncmV2ZXJ0LWxheWVyJ1xuICAgIHwgJ3Vuc2V0JztcblxuICAvKiogV2hldGhlciBvciBub3QgdGhlIHRleHQgc2hvdWxkIGJlIHVuZGVybGluZWQgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB1bmRlcmxpbmU/OiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgdGV4dCBzaG91bGQgYmUgaXRhbGljICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgaXRhbGljPzogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciBvciBub3QgdGhlIHRleHQgc2hvdWxkIGJlIHN0cmlrZWQgdGhyb3VnaCAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHN0cmlrZXRocm91Z2g/OiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGlzIHRleHQgc2hvdWxkIHJlbmRlciBtdXRlZCAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIG11dGVkPzogYm9vbGVhbjtcblxuICAvKiogTGltaXRzIHRoZSBhbW91bnQgb2YgdmlzaWJsZSBsaW5lcy4gU2V0cyB0aGUgYC13ZWJraXQtbGluZS1jbGFtcGAgcHJvcGVydHkuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbGluZUNsYW1wPzogc3RyaW5nO1xuXG4gIC8qKiBBZGp1c3RzIGlmIHRleHQgaXMgd3JhcHBlZCBhbmQgaWYgc28sIHdoYXQgYWxnb3JpdGhtIGRldGVybWluZXMgdGhlIHdyYXBwaW5nIGJlaGF2aW9yLiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHRleHRXcmFwPzpcbiAgICB8ICd3cmFwJ1xuICAgIHwgJ25vd3JhcCdcbiAgICB8ICdiYWxhbmNlJ1xuICAgIHwgJ3ByZXR0eSdcbiAgICB8ICdpbmhlcml0J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAncmV2ZXJ0J1xuICAgIHwgJ3JldmVydC1sYXllcidcbiAgICB8ICd1bnNldCdcbiAgICB8IHVuZGVmaW5lZDtcblxuICAvKiogV2VhdGhlciBvciBub3QgdGhlIHRleHQgc2hvdWxkIHdyYXAgdG8gdGhlIG5leHQgbGluZSAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIG5vV3JhcD86IGJvb2xlYW47XG5cbiAgLyoqIExpbWl0cyB0aGUgd2lkdGggdG8gYSBzcGVjaWZpZWQgbnVtYmVyIG9mIDAgZ2x5cGggY2hhcmFjdGVycyBhbmQgaXMgdHlwaWNhbGx5IHVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBub1dyYXAgb3IgbGluZUNsYW1wICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciwgcmVmbGVjdDogdHJ1ZSB9KSBtYXhDaGFyV2lkdGg/OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX3N0eWxlUHJvcHMgPSBuZXcgU2V0KFtcbiAgICAnYWxpZ24nLFxuICAgICdpdGFsaWMnLFxuICAgICdsaW5lQ2xhbXAnLFxuICAgICdtYXhDaGFyV2lkdGgnLFxuICAgICdzdHJpa2V0aHJvdWdoJyxcbiAgICAndHJhbnNmb3JtJyxcbiAgICAndW5kZXJsaW5lJyxcbiAgICAnd2hpdGVTcGFjZScsXG4gICAgJ3dvcmRCcmVhaycsXG4gICAgJ3dvcmRTcGFjaW5nJyxcbiAgICAnbGV0dGVyU3BhY2luZycsXG4gICAgJ3RleHRXcmFwJyxcbiAgXSk7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBDaGVjayBpZiBhbnkgY29udGVudCBwcm9wIGhhcyBjaGFuZ2VkIHRvIGRldGVybWluZSBpZiB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaW5zdGFuY2Ugc3R5bGVzXG4gICAgbGV0IHNob3VsZFVwZGF0ZVN0eWxlcyA9IGZhbHNlO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGNoYW5nZWRQcm9wcy5rZXlzKCkpIHtcbiAgICAgIGlmIChNdGVUZXh0Ll9zdHlsZVByb3BzLmhhcyhrZXkpKSB7XG4gICAgICAgIHNob3VsZFVwZGF0ZVN0eWxlcyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaG91bGRVcGRhdGVTdHlsZXMpIHtcbiAgICAgIC8vIENhbGMgdGV4dC1kZWNvcmF0aW9uXG4gICAgICBsZXQgdGV4dERlY29yYXRpb247XG4gICAgICBpZiAodGhpcy51bmRlcmxpbmUpIHtcbiAgICAgICAgdGV4dERlY29yYXRpb24gPSBgdW5kZXJsaW5lJHt0aGlzLnN0cmlrZXRocm91Z2ggPyAnIGxpbmUtdGhyb3VnaCcgOiAnJ31gO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0cmlrZXRocm91Z2gpIHtcbiAgICAgICAgdGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgIH1cbiAgICAgIC8vIENhbGMgd29yZC1zcGFjaW5nXG4gICAgICBsZXQgd29yZFNwYWNpbmc7XG4gICAgICBpZiAodGhpcy53b3JkU3BhY2luZyA9PT0gJ3NtJykge1xuICAgICAgICB3b3JkU3BhY2luZyA9ICctMC4wNWVtJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy53b3JkU3BhY2luZyA9PT0gJ2xnJykge1xuICAgICAgICB3b3JkU3BhY2luZyA9ICcwLjA1ZW0nO1xuICAgICAgfVxuICAgICAgLy8gQ2FsYyBsZXR0ZXItc3BhY2luZ1xuICAgICAgbGV0IGxldHRlclNwYWNpbmc7XG4gICAgICBpZiAodGhpcy5sZXR0ZXJTcGFjaW5nID09PSAnc20nKSB7XG4gICAgICAgIGxldHRlclNwYWNpbmcgPSAnLTAuMDJlbSc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubGV0dGVyU3BhY2luZyA9PT0gJ2xnJykge1xuICAgICAgICBsZXR0ZXJTcGFjaW5nID0gJzAuMDJlbSc7XG4gICAgICB9XG5cbiAgICAgIC8vIERvdWJsZSB0aGUgYDpob3N0YCBzZWxlY3RvciB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSBiZXlvbmQgbW9zdCBjb21wb25lbnQgbGV2ZWwgc3R5bGVzIGJ5IGRlZmF1bHRcbiAgICAgIHRoaXMuc2V0SW5zdGFuY2VTdHlsZSgndGV4dCcsIHNlbGVjdG9yRmFjdG9yeSgnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCcpLCB7XG4gICAgICAgICctd2Via2l0LWxpbmUtY2xhbXAnOiB0aGlzLmxpbmVDbGFtcCxcbiAgICAgICAgJ21heFdpZHRoJzogTnVtYmVyLmlzRmluaXRlKHRoaXMubWF4Q2hhcldpZHRoKVxuICAgICAgICAgID8gYCR7TWF0aC5yb3VuZCh0aGlzLm1heENoYXJXaWR0aCA8IDAgPyAwIDogdGhpcy5tYXhDaGFyV2lkdGgpfWNoYFxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgJ3dvcmQtYnJlYWsnOiB0aGlzLndvcmRCcmVhayxcbiAgICAgICAgJ3dvcmQtc3BhY2luZyc6IHdvcmRTcGFjaW5nLFxuICAgICAgICAnbGV0dGVyLXNwYWNpbmcnOiBsZXR0ZXJTcGFjaW5nLFxuICAgICAgICAnd2hpdGUtc3BhY2UnOiB0aGlzLndoaXRlU3BhY2UsXG4gICAgICAgICdmb250LXN0eWxlJzogdGhpcy5pdGFsaWMgPyAnaXRhbGljJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiB0aGlzLmFsaWduLFxuICAgICAgICAndGV4dC1kZWNvcmF0aW9uJzogdGV4dERlY29yYXRpb24sXG4gICAgICAgICd0ZXh0LXRyYW5zZm9ybSc6IHRoaXMudHJhbnNmb3JtLFxuICAgICAgICAndGV4dC13cmFwJzogdGhpcy50ZXh0V3JhcCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGAke3RoaXMuaW5zdGFuY2VTdHlsZXN9PHNsb3Q+PC9zbG90PmA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLXRleHQnOiBNdGVUZXh0O1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tY29sb3I6aW5oZXJpdDtjb2xvcjp2YXIoLS1jb2xvcik7ZGlzcGxheTppbmxpbmUtYmxvY2t9Omhvc3QoW2xpbmVDbGFtcF0pe2Rpc3BsYXk6LXdlYmtpdC1pbmxpbmUtYm94O292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzOy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbH06aG9zdChbbGluZUNsYW1wXVtibG9ja10pe2Rpc3BsYXk6LXdlYmtpdC1ib3h9Omhvc3QoW25vV3JhcF0pe2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfTpob3N0KFtzaXplPXh4c10pe2ZvbnQtc2l6ZTouNjI1cmVtfTpob3N0KFtzaXplPXhzXSl7Zm9udC1zaXplOi43NXJlbX06aG9zdChbc2l6ZT1zbV0pe2ZvbnQtc2l6ZTouODc1cmVtfTpob3N0KFtzaXplPW1kXSl7Zm9udC1zaXplOjFyZW19Omhvc3QoW3NpemU9bGddKXtmb250LXNpemU6MS4yNXJlbX06aG9zdChbc2l6ZT14bF0pe2ZvbnQtc2l6ZToxLjVyZW19Omhvc3QoW3NpemU9eHhsXSl7Zm9udC1zaXplOjEuNzVyZW19Omhvc3QoW211dGVkXSl7LS1jb2xvcjp2YXIoLS1tdGUtaW5rLTIpfWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWNvbG9yOnJnYmEodmFyKC0tbXRlLWl0LWxpbmstZGVmYXVsdC1yZ2IpLHZhcigtLW10ZS1pdC1saW5rLWRlZmF1bHQtYSkpOy0tZm9jdXMtcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXNtKTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7YmFja2dyb3VuZDpub25lO2JvcmRlcjowO2NvbG9yOnZhcigtLWNvbG9yKTtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxMDAlO2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bWFyZ2luOjA7b3V0bGluZTpub25lO3BhZGRpbmc6MDt0ZXh0LWRlY29yYXRpb246bm9uZX06aG9zdCg6Zm9jdXMtdmlzaWJsZTpub3QoLmRpc2FibGVkKTpub3QoW2Rpc2FibGVkXSk6bm90KDpkaXNhYmxlZCkpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1mb2N1cy1yYWRpdXMpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWZvY3VzLXJhZGl1cyk7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1mb2N1cy1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWZvY3VzLXJhZGl1cyk7Ym90dG9tOi0ycHg7Ym94LXNoYWRvdzowIDAgMCAxcHggdmFyKC0tbXRlLWxpZ2h0KTtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jaztsZWZ0Oi02cHg7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDotNnB4O3RvcDotMnB4O3otaW5kZXg6OX06aG9zdCAuYW5jaG9yOnZpc2l0ZWR7LS1jb2xvcjpyZ2JhKHZhcigtLW10ZS1pdC1saW5rLXZpc2l0ZWQtcmdiKSx2YXIoLS1tdGUtaXQtbGluay12aXNpdGVkLWEpKX06aG9zdCg6bm90KFtkaXNhYmxlZF0pOmZvY3VzKSw6aG9zdCg6bm90KFtkaXNhYmxlZF0pOmhvdmVyKXt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfTpob3N0KFtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIGF7LS1jb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtNCk7Y3Vyc29yOm5vdC1hbGxvd2VkfTpob3N0KFtjb2xvcj1wcmltYXJ5XSl7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1zZWNvbmRhcnldKXstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9dGVydGlhcnldKXstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1kYW5nZXJdKXstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1wYWRkaW5nLXk6MTJweDstLXBhZGRpbmcteDp2YXIoLS1tdGUtc3BhY2UtY29tZnktbWQpOy0tcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLW1kKTstLWJhY2tncm91bmQ6dmFyKC0tbXRlLXN1cmZhY2UtMik7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKX06aG9zdHtkaXNwbGF5OmJsb2NrO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfTpob3N0IDo6c2xvdHRlZChtdGUtY29udGVudCksOmhvc3QgOjpzbG90dGVkKG10ZS1mb290ZXIpLDpob3N0IDo6c2xvdHRlZChtdGUtaGVhZGVyKXstLWNvbXBvc2l0aW9uLXBhZGRpbmcteTowcHg7LS1jb21wb3NpdGlvbi1wYWRkaW5nLXg6MHB4fS50cmlnZ2VyLWNvbnRhaW5lcntkaXNwbGF5OmlubGluZS1ibG9ja30ucG9wb3Zlci1jb250YWluZXJ7ZGlzcGxheTpub25lO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6dmFyKC0tbXRlLXotaW5kZXgtMjApfS5wb3BvdmVyLWNvbnRhaW5lci52aXNpYmxle2JvcmRlci1yYWRpdXM6dmFyKC0tcmFkaXVzKTtib3gtc2hhZG93OnZhcigtLW10ZS1lbGV2YXRpb24tejEpfS5wb3BvdmVye2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2JvcmRlcjoxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLXJhZGl1cyk7ZGlzcGxheTpmbGV4O2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtd2VpZ2h0KTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1saW5lLWhlaWdodCk7b3ZlcmZsb3c6aGlkZGVuO3BvaW50ZXItZXZlbnRzOmF1dG87cG9zaXRpb246cmVsYXRpdmU7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt0ZXh0LXRyYW5zZm9ybTppbmhlcml0fS5jb250ZW50e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cGFkZGluZzp2YXIoLS1wYWRkaW5nLXkpIHZhcigtLXBhZGRpbmcteCkgdmFyKC0tcGFkZGluZy15KSB2YXIoLS1wYWRkaW5nLXgpO3otaW5kZXg6Mn0jaGVhZGVye2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXh9I2hlYWRlci5oYXMtY29udGVudHtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLXkpfXNsb3RbbmFtZT1oZWFkZXJde2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtkaXNwbGF5OmJsb2NrO2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWdyb3c6MTtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWZvbnQtd2VpZ2h0KTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC13ZWlnaHQtYm9sZCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWxpbmUtaGVpZ2h0KTt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0fTpob3N0IDo6c2xvdHRlZChtdGUtdGl0bGUpe2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWZvbnQtd2VpZ2h0KTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC13ZWlnaHQtYm9sZCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWxpbmUtaGVpZ2h0KTt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0fSNib2R5e2Rpc3BsYXk6YmxvY2s7ZmxleC1ncm93OjF9I2Zvb3Rlci5oYXMtY29udGVudHtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXkpfS5hcnJvd3tiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2Rpc3BsYXk6bm9uZTtoZWlnaHQ6OHB4O29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt3aWR0aDo4cHg7ei1pbmRleDoxfS5hcnJvdy50b3AsLmFycm93LnRvcC1lbmQsLmFycm93LnRvcC1zdGFydHtib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1yaWdodDoxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKX0uYXJyb3cucmlnaHQsLmFycm93LnJpZ2h0LWVuZCwuYXJyb3cucmlnaHQtc3RhcnR7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItbGVmdDoxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKX0uYXJyb3cuYm90dG9tLC5hcnJvdy5ib3R0b20tZW5kLC5hcnJvdy5ib3R0b20tc3RhcnR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKX0uYXJyb3cubGVmdCwuYXJyb3cubGVmdC1lbmQsLmFycm93LmxlZnQtc3RhcnR7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcil9LmFycm93LnZpc2libGV7ZGlzcGxheTpibG9jaztvcGFjaXR5OjF9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOmluaGVyaXQ7LS1wYWRkaW5nLXk6dmFyKC0tbXRlLXNwYWNlLXNtKTstLXBhZGRpbmcteDpjYWxjKHZhcigtLW10ZS1zcGFjZS1tZCkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKTstLWJvcmRlci13aWR0aDoxcHg7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1ib3JkZXItcmFkaXVzOnZhcigtLWdyb3VwLXJhZGl1cyx2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14bCkpOy0tZm9jdXMtcmFkaXVzOnZhcigtLWdyb3VwLWZvY3VzLXJhZGl1cyx2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1mdWxsKSk7LS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1ib3JkZXItYWx0LWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7LS1pY29uLXNpemU6MTZweDstLWZvY3VzLW9mZnNldDotNXB4Oy0tZmluYWwteTp2YXIoLS1wYWRkaW5nLXkpOy0tZmluYWwteDp2YXIoLS1wYWRkaW5nLXgpO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2JvcmRlcjp2YXIoLS1ib3JkZXItc3R5bGUpIHZhcigtLWJvcmRlci13aWR0aCkgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWdyb3VwLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsdmFyKC0tYm9yZGVyLXJhZGl1cykpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWdyb3VwLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLHZhcigtLWJvcmRlci1yYWRpdXMpKTtib3JkZXItY29sb3I6dmFyKC0tZ3JvdXAtYm9yZGVyLXRvcC1jb2xvcix2YXIoLS1ib3JkZXItY29sb3IpKSB2YXIoLS1ncm91cC1ib3JkZXItcmlnaHQtY29sb3IsdmFyKC0tYm9yZGVyLWNvbG9yKSkgdmFyKC0tZ3JvdXAtYm9yZGVyLWJvdHRvbS1jb2xvcix2YXIoLS1ib3JkZXItY29sb3IpKSB2YXIoLS1ncm91cC1ib3JkZXItbGVmdC1jb2xvcix2YXIoLS1ib3JkZXItY29sb3IpKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWdyb3VwLWJvcmRlci10b3AtbGVmdC1yYWRpdXMsdmFyKC0tYm9yZGVyLXJhZGl1cykpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWdyb3VwLWJvcmRlci10b3AtcmlnaHQtcmFkaXVzLHZhcigtLWJvcmRlci1yYWRpdXMpKTtjb2xvcjp2YXIoLS1jb2xvcik7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTppbmxpbmUtZmxleDtmbGV4LXdyYXA6bm93cmFwO2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO291dGxpbmU6bm9uZSFpbXBvcnRhbnQ7b3ZlcmZsb3c6dmlzaWJsZTtwYWRkaW5nOnZhcigtLWZpbmFsLXkpIHZhcigtLWZpbmFsLXgpOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7d2lkdGg6YXV0bzstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1idXR0b24tZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1idXR0b24tbGluZS1oZWlnaHQpO2xpbmUtaGVpZ2h0OjE7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdH06aG9zdCg6Zm9jdXMtdmlzaWJsZTpub3QoLmRpc2FibGVkKTpub3QoW2Rpc2FibGVkXSk6bm90KDpkaXNhYmxlZCkpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1ncm91cC1mb2N1cy1ib3R0b20tbGVmdC1yYWRpdXMsdmFyKC0tZm9jdXMtcmFkaXVzKSk7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tZ3JvdXAtZm9jdXMtYm90dG9tLXJpZ2h0LXJhZGl1cyx2YXIoLS1mb2N1cy1yYWRpdXMpKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWdyb3VwLWZvY3VzLXRvcC1sZWZ0LXJhZGl1cyx2YXIoLS1mb2N1cy1yYWRpdXMpKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1ncm91cC1mb2N1cy10b3AtcmlnaHQtcmFkaXVzLHZhcigtLWZvY3VzLXJhZGl1cykpO2JvdHRvbTp2YXIoLS1mb2N1cy1vZmZzZXQpO2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDp2YXIoLS1mb2N1cy1vZmZzZXQpO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6dmFyKC0tZm9jdXMtb2Zmc2V0KTt0b3A6dmFyKC0tZm9jdXMtb2Zmc2V0KTt6LWluZGV4Ojl9Omhvc3QoOjotbW96LWZvY3VzLWlubmVyKXtib3JkZXI6MDtwYWRkaW5nOjB9Omhvc3QoOmhvdmVyKSw6aG9zdChbYWN0aXZlc3RhdGVdKXtvdXRsaW5lOm5vbmU7LS1jb2xvcjppbmhlcml0fTpob3N0KDpob3Zlcil7LS1iYWNrZ3JvdW5kOnZhcigtLWludGVyYWN0aXZlLWhvdmVyLWJnLHJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYSkpKX06aG9zdCg6YWN0aXZlKSw6aG9zdChbYWN0aXZlc3RhdGVdKXstLWJhY2tncm91bmQ6dmFyKC0taW50ZXJhY3RpdmUtYWN0aXZlLWJnLHJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hKSkpfTpob3N0KFtvdXRsaW5lZF0pey0tYm9yZGVyLXN0eWxlOnNvbGlkOy0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMil9Omhvc3QoW2ZpbGxlZF0pey0tYm9yZGVyLXN0eWxlOnNvbGlkOy0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZDp2YXIoLS1idXR0b24tZmlsbGVkLWJnLHZhcigtLW10ZS1ncmV5LTEwKSk7LS1jb2xvcjp2YXIoLS1idXR0b24tZmlsbGVkLWluayx2YXIoLS1tdGUtaW5rLTUpKX06aG9zdChbZmlsbGVkXTpob3Zlcil7LS1iYWNrZ3JvdW5kOnZhcigtLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWJnLHZhcigtLW10ZS1ncmV5LTkpKTstLWNvbG9yOnZhcigtLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWluayx2YXIoLS1tdGUtaW5rLTUpKX06aG9zdChbZmlsbGVkXTphY3RpdmUpLDpob3N0KFtmaWxsZWRdW2FjdGl2ZXN0YXRlXSl7LS1iYWNrZ3JvdW5kOnZhcigtLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWJnLHZhcigtLW10ZS1kYXJrZXIpKTstLWNvbG9yOnZhcigtLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWluayx2YXIoLS1tdGUtaW5rLTUpKX06aG9zdChbY29sb3I9cHJpbWFyeV06bm90KFtkaXNhYmxlZF0pKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1wcmltYXJ5XTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMpLDpob3N0KFtjb2xvcj1wcmltYXJ5XTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWEpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWRhcmstcmdiKSl9Omhvc3QoW2NvbG9yPXByaW1hcnldOm5vdChbZGlzYWJsZWRdKVthY3RpdmVzdGF0ZV0pey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFya2VyLXJnYikpfTpob3N0KFtjb2xvcj1wcmltYXJ5XVtvdXRsaW5lZF06bm90KFtkaXNhYmxlZF0pKXstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXByaW1hcnldW291dGxpbmVkXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMpLDpob3N0KFtjb2xvcj1wcmltYXJ5XVtvdXRsaW5lZF06bm90KFtkaXNhYmxlZF0pOmhvdmVyKXstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tYmFja2dyb3VuZDp2YXIoLS1pbnRlcmFjdGl2ZS1ob3Zlci1iZyxyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWEpKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLXJnYikpfTpob3N0KFtjb2xvcj1wcmltYXJ5XVtvdXRsaW5lZF06bm90KFtkaXNhYmxlZF0pW2FjdGl2ZXN0YXRlXSl7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWJhY2tncm91bmQ6dmFyKC0taW50ZXJhY3RpdmUtYWN0aXZlLWJnLHJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hKSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFya2VyLXJnYikpfTpob3N0KFtjb2xvcj1wcmltYXJ5XVtmaWxsZWRdOm5vdChbZGlzYWJsZWRdKSl7LS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1ib3JkZXItYWx0LWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWRhcmstcmdiKSk7LS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLWMtcmdiKSl9Omhvc3QoW2NvbG9yPXByaW1hcnldW2ZpbGxlZF06bm90KFtkaXNhYmxlZF0pOmZvY3VzKSw6aG9zdChbY29sb3I9cHJpbWFyeV1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYm9yZGVyLWFsdC1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLXJnYikpOy0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFyay1jLXJnYikpfTpob3N0KFtjb2xvcj1wcmltYXJ5XVtmaWxsZWRdOm5vdChbZGlzYWJsZWRdKVthY3RpdmVzdGF0ZV0pey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrZXItcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrZXItYy1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XTpub3QoW2Rpc2FibGVkXSkpey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMpLDpob3N0KFtjb2xvcj1zZWNvbmRhcnldOm5vdChbZGlzYWJsZWRdKTpob3Zlcil7LS1iYWNrZ3JvdW5kOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrLXJnYikpfTpob3N0KFtjb2xvcj1zZWNvbmRhcnldOm5vdChbZGlzYWJsZWRdKVthY3RpdmVzdGF0ZV0pey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrZXItcmdiKSl9Omhvc3QoW2NvbG9yPXNlY29uZGFyeV1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKSl7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMik7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXNlY29uZGFyeV1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKTpmb2N1cyksOmhvc3QoW2NvbG9yPXNlY29uZGFyeV1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKTpob3Zlcil7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWJhY2tncm91bmQ6dmFyKC0taW50ZXJhY3RpdmUtaG92ZXItYmcscmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hKSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrLXJnYikpfTpob3N0KFtjb2xvcj1zZWNvbmRhcnldW291dGxpbmVkXTpub3QoW2Rpc2FibGVkXSlbYWN0aXZlc3RhdGVdKXstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tYmFja2dyb3VuZDp2YXIoLS1pbnRlcmFjdGl2ZS1hY3RpdmUtYmcscmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWEpKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmtlci1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XVtmaWxsZWRdOm5vdChbZGlzYWJsZWRdKSl7LS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1ib3JkZXItYWx0LWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktZGFyay1yZ2IpKTstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1iYXNlLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1iYXNlLWMtcmdiKSl9Omhvc3QoW2NvbG9yPXNlY29uZGFyeV1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMpLDpob3N0KFtjb2xvcj1zZWNvbmRhcnldW2ZpbGxlZF06bm90KFtkaXNhYmxlZF0pOmhvdmVyKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJvcmRlci1hbHQtY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrLXJnYikpOy0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmstcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmstYy1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XVtmaWxsZWRdOm5vdChbZGlzYWJsZWRdKVthY3RpdmVzdGF0ZV0pey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmtlci1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktZGFya2VyLWMtcmdiKSl9Omhvc3QoW2NvbG9yPXRlcnRpYXJ5XTpub3QoW2Rpc2FibGVkXSkpey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj10ZXJ0aWFyeV06bm90KFtkaXNhYmxlZF0pOmZvY3VzKSw6aG9zdChbY29sb3I9dGVydGlhcnldOm5vdChbZGlzYWJsZWRdKTpob3Zlcil7LS1iYWNrZ3JvdW5kOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmstcmdiKSl9Omhvc3QoW2NvbG9yPXRlcnRpYXJ5XTpub3QoW2Rpc2FibGVkXSlbYWN0aXZlc3RhdGVdKXstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWEpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1kYXJrZXItcmdiKSl9Omhvc3QoW2NvbG9yPXRlcnRpYXJ5XVtvdXRsaW5lZF06bm90KFtkaXNhYmxlZF0pKXstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj10ZXJ0aWFyeV1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKTpmb2N1cyksOmhvc3QoW2NvbG9yPXRlcnRpYXJ5XVtvdXRsaW5lZF06bm90KFtkaXNhYmxlZF0pOmhvdmVyKXstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tYmFja2dyb3VuZDp2YXIoLS1pbnRlcmFjdGl2ZS1ob3Zlci1iZyxyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWEpKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFyay1yZ2IpKX06aG9zdChbY29sb3I9dGVydGlhcnldW291dGxpbmVkXTpub3QoW2Rpc2FibGVkXSlbYWN0aXZlc3RhdGVdKXstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tYmFja2dyb3VuZDp2YXIoLS1pbnRlcmFjdGl2ZS1hY3RpdmUtYmcscmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWEpKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFya2VyLXJnYikpfTpob3N0KFtjb2xvcj10ZXJ0aWFyeV1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSkpey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYm9yZGVyLWFsdC1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFyay1yZ2IpKTstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWJhc2UtcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktYmFzZS1jLXJnYikpfTpob3N0KFtjb2xvcj10ZXJ0aWFyeV1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMpLDpob3N0KFtjb2xvcj10ZXJ0aWFyeV1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYm9yZGVyLWFsdC1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFyay1yZ2IpKTstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmstcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFyay1jLXJnYikpfTpob3N0KFtjb2xvcj10ZXJ0aWFyeV1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSlbYWN0aXZlc3RhdGVdKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmtlci1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1kYXJrZXItYy1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXTpub3QoW2Rpc2FibGVkXSkpey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMpLDpob3N0KFtjb2xvcj1kYW5nZXJdOm5vdChbZGlzYWJsZWRdKTpob3Zlcil7LS1iYWNrZ3JvdW5kOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrLXJnYikpfTpob3N0KFtjb2xvcj1kYW5nZXJdOm5vdChbZGlzYWJsZWRdKVthY3RpdmVzdGF0ZV0pey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrZXItcmdiKSl9Omhvc3QoW2NvbG9yPWRhbmdlcl1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKSl7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMik7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPWRhbmdlcl1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKTpmb2N1cyksOmhvc3QoW2NvbG9yPWRhbmdlcl1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKTpob3Zlcil7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWJhY2tncm91bmQ6dmFyKC0taW50ZXJhY3RpdmUtaG92ZXItYmcscmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hKSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrLXJnYikpfTpob3N0KFtjb2xvcj1kYW5nZXJdW291dGxpbmVkXTpub3QoW2Rpc2FibGVkXSlbYWN0aXZlc3RhdGVdKXstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tYmFja2dyb3VuZDp2YXIoLS1pbnRlcmFjdGl2ZS1hY3RpdmUtYmcscmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWEpKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWRhcmtlci1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXVtmaWxsZWRdOm5vdChbZGlzYWJsZWRdKSl7LS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1ib3JkZXItYWx0LWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItZGFyay1yZ2IpKTstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1iYXNlLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1iYXNlLWMtcmdiKSl9Omhvc3QoW2NvbG9yPWRhbmdlcl1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMpLDpob3N0KFtjb2xvcj1kYW5nZXJdW2ZpbGxlZF06bm90KFtkaXNhYmxlZF0pOmhvdmVyKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJvcmRlci1hbHQtY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrLXJnYikpOy0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWRhcmstcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWRhcmstYy1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXVtmaWxsZWRdOm5vdChbZGlzYWJsZWRdKVthY3RpdmVzdGF0ZV0pey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWRhcmtlci1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItZGFya2VyLWMtcmdiKSl9Omhvc3QoW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgYXtjdXJzb3I6bm90LWFsbG93ZWQhaW1wb3J0YW50Oy0tY29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTQpIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50O3RleHQtc2hhZG93Om5vbmUhaW1wb3J0YW50fTpob3N0KFtkaXNhYmxlZF06aG92ZXIpLDpob3N0KFtkaXNhYmxlZF1bYWN0aXZlc3RhdGVdKXstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQhaW1wb3J0YW50fTpob3N0KFtkaXNhYmxlZF1bZmlsbGVkXSksOmhvc3QoW2Rpc2FibGVkXVtvdXRsaW5lZF0pey0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC0yKSFpbXBvcnRhbnQ7LS1iYWNrZ3JvdW5kOnZhcigtLW10ZS1kaXNhYmxlZC0xKSFpbXBvcnRhbnQ7LS1jb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtNCkhaW1wb3J0YW50fTpob3N0KFtkaXNhYmxlZF1bZmlsbGVkXTpob3ZlciksOmhvc3QoW2Rpc2FibGVkXVtmaWxsZWRdW2FjdGl2ZXN0YXRlXSksOmhvc3QoW2Rpc2FibGVkXVtvdXRsaW5lZF06aG92ZXIpLDpob3N0KFtkaXNhYmxlZF1bb3V0bGluZWRdW2FjdGl2ZXN0YXRlXSl7LS1iYWNrZ3JvdW5kOnZhcigtLW10ZS1kaXNhYmxlZC0xKSFpbXBvcnRhbnR9Omhvc3QoW3NpemU9c21dKXtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Zm9udC1zaXplOmNhbGModmFyKC0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1mb250LXNpemUpKi44KTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYnV0dG9uLWZvbnQtd2VpZ2h0KTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYnV0dG9uLWxpbmUtaGVpZ2h0KTt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0Oy0tZmluYWwteTpjYWxjKHZhcigtLXBhZGRpbmcteSkqdmFyKC0tbXRlLXNpemUtc2NhbGUtc20pKTstLWZpbmFsLXg6Y2FsYyh2YXIoLS1wYWRkaW5nLXgpKnZhcigtLW10ZS1zaXplLXNjYWxlLXNtKSl9Omhvc3QoW3NpemU9bGddKXtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Zm9udC1zaXplOmNhbGModmFyKC0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1mb250LXNpemUpKjEuMik7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1saW5lLWhlaWdodCk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtZnVsbCk7LS1maW5hbC15OmNhbGModmFyKC0tcGFkZGluZy15KSp2YXIoLS1tdGUtc2l6ZS1zY2FsZS1sZykpOy0tZmluYWwteDpjYWxjKHZhcigtLXBhZGRpbmcteCkqdmFyKC0tbXRlLXNpemUtc2NhbGUtbGcpKX06aG9zdChbcmFkaXVzPXNtXSl7LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXNtKTstLWZvY3VzLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCl9LnByZWZpeCwucHJlZml4PnNwYW57YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5wcmVmaXh7bWFyZ2luLWxlZnQ6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pKi0xKTtwYWRkaW5nLXJpZ2h0OnZhcigtLW10ZS1zcGFjZS1zbSl9Omhvc3QoW3NpemU9c21dKSAucHJlZml4e21hcmdpbi1sZWZ0OmNhbGModmFyKC0tbXRlLXNwYWNlLXhzKSotMSk7cGFkZGluZy1yaWdodDp2YXIoLS1tdGUtc3BhY2UteHMpfS5zdWZmaXgsLnN1ZmZpeD5zcGFue2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uc3VmZml4e21hcmdpbi1yaWdodDpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkqLTEpO3BhZGRpbmctbGVmdDp2YXIoLS1tdGUtc3BhY2Utc20pfTpob3N0KFtzaXplPXNtXSkgLnN1ZmZpeHttYXJnaW4tcmlnaHQ6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpKi0xKTtwYWRkaW5nLWxlZnQ6dmFyKC0tbXRlLXNwYWNlLXhzKX06aG9zdD46bm90KC5sYWJlbCkgbXRlLWljb257aGVpZ2h0OnZhcigtLWljb24tc2l6ZSk7bWluLWhlaWdodDp2YXIoLS1pY29uLXNpemUpO21pbi13aWR0aDp2YXIoLS1pY29uLXNpemUpO3dpZHRoOnZhcigtLWljb24tc2l6ZSl9Omhvc3QoW3NpemU9c21dKT46bm90KC5sYWJlbCkgbXRlLWljb257LS1pY29uLXNpemU6MTJweH06aG9zdChbc2l6ZT1sZ10pPjpub3QoLmxhYmVsKSBtdGUtaWNvbnstLWljb24tc2l6ZToyMHB4fWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2BAa2V5ZnJhbWVzIHByb2dyZXNzLXNwaW5uZXItYW5pbWF0aW9uezAle3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9dG97dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fTpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDotbW96LWZpdC1jb250ZW50O2hlaWdodDpmaXQtY29udGVudDt3aWR0aDotbW96LWZpdC1jb250ZW50O3dpZHRoOmZpdC1jb250ZW50O3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0uY29udGFpbmVye2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjtvdmVyZmxvdzp2aXNpYmxlO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uY29udGFpbmVyIHN2Z3tkaXNwbGF5OmJsb2NrO292ZXJmbG93OnZpc2libGV9LmNvbnRhaW5lciBwYXRoe2ZpbGwtb3BhY2l0eTowfS50cmFja3tzdHJva2U6cmdiKHZhcigtLW10ZS1ib3JkZXItMS1yZ2IpKX0uYmFye2xlZnQ6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtzdHJva2U6cmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1iYXNlLXJnYikpfS5iYXIgcGF0aHt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2l0aW9uOnN0cm9rZS1kYXNob2Zmc2V0IC4ycyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKSAwbXM7d2lsbC1jaGFuZ2U6c3Ryb2tlLWRhc2hvZmZzZXR9Omhvc3QoW3dpdGhvdXRBbmltYXRpb25dKSAuYmFyIHBhdGh7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH06aG9zdChbaW5kZXRlcm1pbmF0ZV0pe2FuaW1hdGlvbjpwcm9ncmVzcy1zcGlubmVyLWFuaW1hdGlvbiAuNXMgbGluZWFyIGluZmluaXRlfTpob3N0KFtpbmRldGVybWluYXRlXSkgLmJhciBwYXRoe3RyYW5zaXRpb246bm9uZX06aG9zdChbY29sb3I9cHJpbWFyeV0pIC5iYXJ7c3Ryb2tlOnJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XSkgLmJhcntzdHJva2U6cmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXRlcnRpYXJ5XSkgLmJhcntzdHJva2U6cmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c3VjY2Vzc10pIC5iYXJ7c3Ryb2tlOnJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9d2FybmluZ10pIC5iYXJ7c3Ryb2tlOnJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXSkgLmJhcntzdHJva2U6cmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtcmdiKSl9QG1lZGlhIHNjcmVlbiBhbmQgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKXsuYmFyIHBhdGh7dHJhbnNpdGlvbjpub25lfTpob3N0KFtpbmRldGVybWluYXRlXSl7YW5pbWF0aW9uOm5vbmV9fWA7IiwgIi8qKlxuICogQmFzZSByZWZlcmVuY2Ugc2l6ZSBvZiB0aGUgc3Bpbm5lci5cbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IFNQSU5ORVJfQkFTRV9TSVpFID0gMTAwO1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgZGVmaW5lRWxlbWVudCB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgTXRlUHJvZ3Jlc3NTcGlubmVyIH0gZnJvbSAnLi9wcm9ncmVzcy1zcGlubmVyLmVsZW1lbnQnO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBjb21wb25lbnQgZGVmaW5pdGlvbiB0byBiZSB1c2VkIGFzIGEgY29udmVuaWVuY2UgcmVmZXJlbmNlIHRvIGNyZWF0ZSBhblxuICogaW5kZXRlcm1pbmF0ZSBgPG10ci1wcm9ncmVzcy1zcGlubmVyPmAgaW5zdGFuY2UuXG4gKlxuICogQGNzc3BhcnQgY29udGFpbmVyIC0gSW5uZXIgY29udGFpbmVyIGVsZW1lbnQgdGhhdCBob3VzZXMgdGhlIHRyYWNrIGFuZCBiYXJcbiAqIEBjc3NwYXJ0IHRyYWNrIC0gVGhlIHRyYWNrIGJlaGluZCB0aGUgZmlsbGVkIGJhclxuICogQGNzc3BhcnQgYmFyIC0gVGhlIGZpbGxlZCBwb3J0aW9uIG9mIHRoZSBzcGlubmVyXG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtc3Bpbm5lcicpXG5leHBvcnQgY2xhc3MgTXRlU3Bpbm5lciBleHRlbmRzIE10ZVByb2dyZXNzU3Bpbm5lciB7XG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgb3ZlcnJpZGUgaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS1zcGlubmVyJzogTXRlUHJvZ3Jlc3NTcGlubmVyO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzLCBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0QnV0dG9uQm9yZGVyRmFjdG9yeSA9ICh3aWR0aD8sIGNvbG9yPywgc3R5bGU/KSA9PlxuICBgJHtzdHlsZSA/PyAnc29saWQnfSAke1xuICAgIGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kcyhbXG4gICAgICB7IHByb3A6ICdib3JkZXJXaWR0aCcsIHZhbHVlOiBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKHdpZHRoID8/ICcxcHgnKSB9LFxuICAgIF0pWzBdPy52YWx1ZVxuICB9ICR7ZG90U3RyaW5nVG9Db25maWdWYWx1ZShjb2xvcikgPz8gY29uZmlnLmNvbG9yLmJvcmRlcjF9YDtcbiIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1wYWRkaW5nLXk6dmFyKC0tbXRlLXNwYWNlLXNtKTstLXBhZGRpbmcteDp2YXIoLS1wYWRkaW5nLXkpOy0tYm9yZGVyLXJhZGl1czp2YXIoLS1ncm91cC1yYWRpdXMsdmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtZnVsbCkpOy0tZm9jdXMtcmFkaXVzOnZhcigtLWdyb3VwLWZvY3VzLXJhZGl1cyx2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1mdWxsKSk7LS1pY29uLXNpemU6MTZweDstLWNvbG9yOmluaGVyaXR9Omhvc3QoW3JhZGl1cz1zbV0pey0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1zbSk7LS1mb2N1cy1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpfTpob3N0IG10ZS1pY29ue2hlaWdodDp2YXIoLS1pY29uLXNpemUpO21pbi1oZWlnaHQ6dmFyKC0taWNvbi1zaXplKTttaW4td2lkdGg6dmFyKC0taWNvbi1zaXplKTt3aWR0aDp2YXIoLS1pY29uLXNpemUpfTpob3N0KFtzaXplPXNtXSkgbXRlLWljb257LS1pY29uLXNpemU6MTJweH06aG9zdChbc2l6ZT1sZ10pIG10ZS1pY29uey0taWNvbi1zaXplOjIwcHh9YDsiLCBudWxsLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2Rpc3BsYXk6YmxvY2s7dGV4dC13cmFwOmJhbGFuY2V9Omhvc3R7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtc3VidGl0bGUtZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtc3VidGl0bGUtZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1zdWJ0aXRsZS1saW5lLWhlaWdodCk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdH06aG9zdChbc3VidGl0bGVdKXtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tbGluZS1oZWlnaHQpfTpob3N0KFtoZWFkaW5nPVwiMVwiXSl7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtaDEtZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtaDEtZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1oMS1saW5lLWhlaWdodCk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdH06aG9zdChbaGVhZGluZz1cIjJcIl0pe2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWgyLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWgyLWZvbnQtd2VpZ2h0KTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtaDItbGluZS1oZWlnaHQpO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXR9Omhvc3QoW2hlYWRpbmc9XCIzXCJdKXtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1oMy1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1oMy1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWgzLWxpbmUtaGVpZ2h0KTt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0fTpob3N0KFtoZWFkaW5nPVwiNFwiXSl7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtaDQtZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtaDQtZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1oNC1saW5lLWhlaWdodCk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdH06aG9zdChbaGVhZGluZz1cIjVcIl0pe2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWg1LWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWg1LWZvbnQtd2VpZ2h0KTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtaDUtbGluZS1oZWlnaHQpO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXR9Omhvc3QoW2hlYWRpbmc9XCI2XCJdKXtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1oNi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1oNi1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWg2LWxpbmUtaGVpZ2h0KTt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0fTpob3N0KFtoZWFkaW5nPWNhcHRpb25dKXtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWxpbmUtaGVpZ2h0KTt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0fTpob3N0KFtoZWFkaW5nPXN1YnRpdGxlXSl7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtc3VidGl0bGUtZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtc3VidGl0bGUtZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1zdWJ0aXRsZS1saW5lLWhlaWdodCk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdH06aG9zdChbc3VidGl0bGVdKXtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWxpbmUtaGVpZ2h0KTt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0fTpob3N0KFtpbkNhcmRdOm5vdChbaGVhZGluZ10pKXtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1zdWJ0aXRsZS1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1zdWJ0aXRsZS1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0KTt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0fTpob3N0KFtpbkNhcmRdW3N1YnRpdGxlXTpub3QoW2hlYWRpbmddKSl7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtd2VpZ2h0KTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1saW5lLWhlaWdodCk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdH06aG9zdChbc3VidGl0bGVdKXtjb2xvcjp2YXIoLS1tdGUtaW5rLTIpIWltcG9ydGFudH1gOyIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1jb21wb3NpdGlvbi1wYWRkaW5nLXk6dmFyKC0tbXRlLXNwYWNlLW1kKTstLWNvbXBvc2l0aW9uLXBhZGRpbmcteDp2YXIoLS1tdGUtc3BhY2UtbWQpOy0tY29tcG9zaXRpb24tZGl2aWRlcjpub25lOy0tYWN0aW9uLW1hcmdpbjp2YXIoLS1tdGUtc3BhY2UtbWQpO2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXItYm90dG9tOnZhcigtLWNvbXBvc2l0aW9uLWRpdmlkZXIpO2RpcmVjdGlvbjpyb3c7ZGlzcGxheTpmbGV4O3BhZGRpbmc6dmFyKC0tY29tcG9zaXRpb24tcGFkZGluZy15KSB2YXIoLS1jb21wb3NpdGlvbi1wYWRkaW5nLXgpfTpob3N0KFt3aXRoQm9yZGVyXSl7LS1jb21wb3NpdGlvbi1kaXZpZGVyOnNvbGlkIDFweCB2YXIoLS1tdGUtYm9yZGVyLTEpfS50aXRsZXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmNvbnRlbnR7YWxpZ24taXRlbXM6Y2VudGVyO2RpcmVjdGlvbjpyb3c7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzoxfS5hY3Rpb257YWxpZ24tc2VsZjpmbGV4LXN0YXJ0O2Rpc3BsYXk6YmxvY2s7ZmxleC1ncm93OjA7ZmxleC1zaHJpbms6MDttYXJnaW4tbGVmdDp2YXIoLS1hY3Rpb24tbWFyZ2luKX1gOyIsICJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IGJhc2VTdHlsZXMsIGRlZmluZUVsZW1lbnQsIE10ZUNvbnRlbnRCYXNlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL2NvbnRlbnQuc3R5bGVzJztcblxuLyoqXG4gKlxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLWNvbnRlbnQnKVxuZXhwb3J0IGNsYXNzIE10ZUNvbnRlbnQgZXh0ZW5kcyBNdGVDb250ZW50QmFzZSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbYmFzZVN0eWxlcywgc3R5bGVzXTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgJHt0aGlzLmluc3RhbmNlU3R5bGVzfTxzbG90Pjwvc2xvdD5gO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS1jb250ZW50JzogTXRlQ29udGVudDtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWNvbXBvc2l0aW9uLXBhZGRpbmcteTp2YXIoLS1tdGUtc3BhY2UtbWQpOy0tY29tcG9zaXRpb24tcGFkZGluZy14OnZhcigtLW10ZS1zcGFjZS1tZCk7ZGlzcGxheTpibG9jaztwYWRkaW5nLWxlZnQ6dmFyKC0tY29tcG9zaXRpb24tcGFkZGluZy14KTtwYWRkaW5nLXJpZ2h0OnZhcigtLWNvbXBvc2l0aW9uLXBhZGRpbmcteCk7cG9zaXRpb246cmVsYXRpdmV9Om5vdChtdGUtaGVhZGVyKSs6aG9zdHtwYWRkaW5nLXRvcDp2YXIoLS1jb21wb3NpdGlvbi1wYWRkaW5nLXkpfTpob3N0Kzpub3QobXRlLWZvb3Rlcil7cGFkZGluZy1ib3R0b206dmFyKC0tY29tcG9zaXRpb24tcGFkZGluZy15KX1gOyIsICJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgYmFzZVN0eWxlcywgZGVmaW5lRWxlbWVudCwgTXRlQ29udGVudEJhc2UgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vZm9vdGVyLnN0eWxlcyc7XG5cbi8qKlxuICpcbiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS1mb290ZXInKVxuZXhwb3J0IGNsYXNzIE10ZUZvb3RlciBleHRlbmRzIE10ZUNvbnRlbnRCYXNlIHtcbiAgc3RhdGljIHN0eWxlcyA9IFtiYXNlU3R5bGVzLCBzdHlsZXNdO1xuXG4gIC8qKiBSZW5kZXJzIGNvbnRlbnRzIGluIGEgZW5kIGFsaWduZWQgZmxleCByb3cgd2l0aCBhIGdhcCAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGFjdGlvbnMgPSBmYWxzZTtcblxuICAvKiogQWRkcyBhIGJvdHRvbSBib3JkZXIgdG8gdGhpcyBoZWFkZXIgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRoQm9yZGVyID0gZmFsc2U7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYCR7dGhpcy5pbnN0YW5jZVN0eWxlc308c2xvdD48L3Nsb3Q+YDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdtdGUtZm9vdGVyJzogTXRlRm9vdGVyO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tY29tcG9zaXRpb24tcGFkZGluZy15OnZhcigtLW10ZS1zcGFjZS1tZCk7LS1jb21wb3NpdGlvbi1wYWRkaW5nLXg6dmFyKC0tbXRlLXNwYWNlLW1kKTstLWNvbXBvc2l0aW9uLWRpdmlkZXI6bm9uZTtib3JkZXItdG9wOnZhcigtLWNvbXBvc2l0aW9uLWRpdmlkZXIpO2Rpc3BsYXk6YmxvY2s7cGFkZGluZzp2YXIoLS1jb21wb3NpdGlvbi1wYWRkaW5nLXkpIHZhcigtLWNvbXBvc2l0aW9uLXBhZGRpbmcteCl9Omhvc3QoW2FjdGlvbnNdKXthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztnYXA6dmFyKC0tbXRlLXNwYWNlLXNtKTtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Omhvc3QoW3dpdGhCb3JkZXJdKXstLWNvbXBvc2l0aW9uLWRpdmlkZXI6c29saWQgMXB4IHZhcigtLW10ZS1ib3JkZXItMSl9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjp2YXIoLS1tdGUtaW5rLTMpO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6dmFyKC0tbXRlLXNwYWNlLXNtKTt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDAlfWA7IiwgImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgYmFzZVN0eWxlcywgZGVmaW5lRWxlbWVudCwgTXRlQ29udGVudEJhc2UgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vc2VjdGlvbi5zdHlsZXMnO1xuXG4vKipcbiAqXG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtc2VjdGlvbicpXG5leHBvcnQgY2xhc3MgTXRlU2VjdGlvbiBleHRlbmRzIE10ZUNvbnRlbnRCYXNlIHtcbiAgc3RhdGljIHN0eWxlcyA9IFtiYXNlU3R5bGVzLCBzdHlsZXNdO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGAke3RoaXMuaW5zdGFuY2VTdHlsZXN9PHNsb3Q+PC9zbG90PmA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLXNlY3Rpb24nOiBNdGVTZWN0aW9uO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmV9YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEsSUFBQUEsZUFBcUI7QUFDckIsSUFBQUMsc0JBQXVDO0FBQ3ZDLElBQUFDLG9C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TUFBTSxPQUFPLENBQUM7R0FOZixlQU1pQjtBQUdDO01BQTVCLDhCQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0FUaEIsZUFTa0I7QUFHakI7TUFBWCw4QkFBUztHQVpDLGVBWUM7QUFHZTtNQUExQiw4QkFBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0dBZmQsZUFlZ0I7QUFFUjtNQUFsQiwyQkFBTSxVQUFVO0dBakJOLGVBaUJRO0FBakJSLGlCQUFOO0VBRE4sY0FBYyxrQkFBa0I7R0FDcEI7IiwKICAibmFtZXMiOiBbImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2NsYXNzX21hcCIsICJpbXBvcnRfc3R5bGVzIiwgImltcG9ydF9zdHlsZXMiLCAiYWNjIiwgInN0eWxlTWFwIiwgInByb3AiLCAidmFsdWUiLCAic3R5bGVzIiwgImRlcCIsICJzdHlsZU1hcCIsICJpbXBvcnRfc3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAiY29sb3IiLCAiaW1wb3J0X3N0eWxlcyIsICJnZXR0ZXJDb25maWciLCAib2JzZXJ2ZXIiLCAiZSIsICJzZXR0ZXJDb25maWciLCAiY3NzVmFyIiwgIm9ic2VydmVyIiwgInBvcnRhbENvbnRyb2xsZXIiLCAiZWxlbWVudCIsICJzY3JvbGxYIiwgInNjcm9sbFkiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAicHJlc2V0IiwgIm9wdGlvbnMiLCAiaW1wb3J0X2NvbnRleHQiLCAiY29udGV4dCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9zdHlsZXMiLCAic3R5bGVNYXAiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfaWZfZGVmaW5lZCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2NsYXNzX21hcCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgIm5vZGUiLCAib2JzZXJ2ZXIiLCAic3RhdGUiLCAiaW1wb3J0X2lzX3NlcnZlciIsICJvYnNlcnZlciIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgImNzcyIsICJfY3NzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJuZXh0VW5pcXVlSWQiLCAic3R5bGVzIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJwb3NpdGlvbiIsICJwbGFjZW1lbnQiLCAibmV4dFVuaXF1ZUlkIiwgInBsYWNlbWVudCIsICJhbmltZSIsICJzdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpY29uTGlicmFyeSIsICJpbXBvcnRfdW5zYWZlX3N2ZyIsICJpbXBvcnRfc3R5bGVzIiwgInN0eWxlcyIsICJpbXBvcnRfaWZfZGVmaW5lZCIsICJjb2xvciIsICJuYW1lIiwgInN0eWxlcyIsICJpbXBvcnRfY2xhc3NfbWFwIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2lmX2RlZmluZWQiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfc3R5bGVzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAic3R5bGVzIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiY3NzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9jbGFzc19tYXAiLCAic3R5bGVzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2NsYXNzX21hcCIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfaWZfZGVmaW5lZCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAic3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X3N0eWxlcyIsICJjb2xvciIsICJzdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfc3R5bGVzIiwgInN0eWxlcyIsICJpbXBvcnRfZG9tIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X2ljb25zIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X3N0eWxlcyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgInN0eWxlcyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJzdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJzdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJzdHlsZXMiLCAiaW1wb3J0X2lmX2RlZmluZWQiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfaWNvbnMiLCAiY29sb3IiLCAic3R5bGVzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAic3R5bGVzIiwgImltcG9ydF9hbmltZWpzIiwgIm5leHRVbmlxdWVJZCIsICJwbGFjZW1lbnQiLCAiYW5pbWUiLCAic3R5bGVzIiwgImltcG9ydF9zdHlsZXMiLCAic3R5bGVzIl0KfQo=
