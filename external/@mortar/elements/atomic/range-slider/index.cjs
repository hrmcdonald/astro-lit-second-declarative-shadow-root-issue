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

// src/atomic/range-slider/index.ts
var range_slider_exports = {};
__export(range_slider_exports, {
  MteRangeSlider: () => MteRangeSlider
});
module.exports = __toCommonJS(range_slider_exports);

// src/atomic/range-slider/range-slider.element.ts
var import_lit40 = require("lit");
var import_decorators31 = require("lit/decorators.js");

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
var parseSelectors = (styles22, selectors) => {
  if (!selectors) {
    return styles22;
  } else {
    return `${styles22}${selectors.reduce((acc, { selector, selectorWrapper, style }) => {
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
  let styles22 = "";
  [...instanceStylesMap.entries()].filter(([key, _]) => key !== "se" && key !== "sp").sort((a, b) => b[0] - a[0]).forEach(([_, selectors]) => {
    styles22 = parseSelectors(styles22, selectors);
  });
  styles22 = `${styles22}${parseSelectors("", instanceStylesMap.get("se"))}${parseSelectors(
    "",
    instanceStylesMap.get("sp")
  )}`;
  return styles22;
};

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
var FieldsetMixin = (superClass) => {
  class FieldsetElement extends superClass {
    constructor() {
      super(...arguments);
      this.labelPosition = "above";
      this.withFullWidth = false;
      this.withoutMargin = false;
      this.labelBeforeOffset = 0;
    }
    handleLabelPositionChange() {
      if (this.labelPosition === "before" && !this.resizeController) {
        this.resizeController = new import_resize_controller.ResizeController(this, {
          target: this.controlContainerElement,
          callback: (entries) => {
            entries.forEach((entry) => {
              this.labelBeforeOffset = entry.contentRect.height / 2 - this.labelElement.offsetHeight / 2;
            });
          }
        });
      } else if (this.labelPosition !== "before" && this.resizeController) {
        this.resizeController.hostDisconnected();
        this.resizeController = null;
      }
    }
    firstUpdated(changedProps) {
      super.firstUpdated(changedProps);
      this.handleLabelPositionChange();
    }
    updateInstanceStyles(changedProps) {
      super.updateInstanceStyles(changedProps);
      if (this.labelPosition === "before" && changedProps.has("labelBeforeOffset")) {
        this.setInstanceStyle("label-before-offset", (0, import_styles7.selectorFactory)(":host"), {
          "--label-before-offset": `${this.labelBeforeOffset}px`
        });
      }
      let shouldUpdateWidths = false;
      for (const key of changedProps.keys()) {
        if (["w", "minw", "maxw", "labelWidth", "labelMinWidth", "labelMaxWidth"].includes(key)) {
          shouldUpdateWidths = true;
          break;
        }
      }
      if (shouldUpdateWidths) {
        this.setInstanceStyle("label-widths", (0, import_styles7.selectorFactory)(":host:host:host:host:host:host"), {
          "--control-width": mapNumberToPx(this.w),
          "--control-min-width": mapNumberToPx(this.minw),
          "--control-max-width": mapNumberToPx(this.maxw),
          "--label-width": mapNumberToPx(this.labelWidth),
          "--label-min-width": mapNumberToPx(this.labelMinWidth) ?? mapNumberToPx(this.labelWidth),
          "--label-max-width": mapNumberToPx(this.labelMaxWidth) ?? mapNumberToPx(this.labelWidth)
        });
      }
    }
    renderFieldsetTemplate(fieldsetContents, {
      containerTemplate = (contents, classes = null) => import_lit8.html`<div class="${(0, import_if_defined2.ifDefined)(classes)}">${contents}</div>`,
      labelTemplate = (contents, classes = null) => import_lit8.html`<label for="input" class="${(0, import_if_defined2.ifDefined)(classes)}">${contents}</label>`
    } = {}, {
      label = this.label,
      description = this.description,
      hint = this.hint,
      error = this.error,
      hasLabel = this.hasSlot("label", this.label),
      hasDescription = this.hasSlot("description", this.description),
      hasHint = this.hasSlot("hint", this.hint),
      hasError = this.hasSlot("error", this.error),
      showRequired = this.showRequired,
      showError = this.hasSlot("error", this.error)
    } = {}) {
      return import_lit8.html`${this.instanceStyles} ${containerTemplate(
        import_lit8.html`<div class="label-container ${(0, import_class_map.classMap)({
          "has-content": hasLabel || hasDescription
        })}">${labelTemplate(import_lit8.html`<slot name="label" part="label" id="label" class="${(0, import_class_map.classMap)({
          "label": true,
          "has-description": hasDescription
        })}"><mte-label ?showRequired="${showRequired}">${label}</mte-label></slot>`)}<slot id="description" name="description" class="description" part="description"><mte-description>${description}</mte-description></slot></div><div class="control-outer-container ${(0, import_class_map.classMap)({
          "has-label-content": hasLabel || hasDescription
        })}"><div class="control-container">${fieldsetContents}</div><slot id="hint" name="hint" class="hint context ${(0, import_class_map.classMap)({
          "has-content": hasHint && !hasError && !showError
        })}" part="hint"><mte-hint>${hint}</mte-hint></slot><slot id="error" name="error" class="error context ${(0, import_class_map.classMap)({ "has-content": hasError || showError })}" part="error" aria-live="polite"><mte-error>${error}</mte-error></slot></div>`,
        "grid-container"
      )}`;
    }
  }
  __decorateClass([
    (0, import_decorators11.property)({ reflect: true })
  ], FieldsetElement.prototype, "label", 2);
  __decorateClass([
    (0, import_decorators11.property)({ reflect: true })
  ], FieldsetElement.prototype, "description", 2);
  __decorateClass([
    (0, import_decorators11.property)({ reflect: true })
  ], FieldsetElement.prototype, "hint", 2);
  __decorateClass([
    (0, import_decorators11.property)({ reflect: true })
  ], FieldsetElement.prototype, "error", 2);
  __decorateClass([
    (0, import_decorators11.property)({ reflect: true })
  ], FieldsetElement.prototype, "labelPosition", 2);
  __decorateClass([
    (0, import_decorators11.property)({ type: Boolean, reflect: true })
  ], FieldsetElement.prototype, "showRequired", 2);
  __decorateClass([
    (0, import_decorators11.property)({ reflect: true })
  ], FieldsetElement.prototype, "w", 2);
  __decorateClass([
    (0, import_decorators11.property)({ reflect: true })
  ], FieldsetElement.prototype, "maxw", 2);
  __decorateClass([
    (0, import_decorators11.property)({ reflect: true })
  ], FieldsetElement.prototype, "minw", 2);
  __decorateClass([
    (0, import_decorators11.property)({ reflect: true })
  ], FieldsetElement.prototype, "labelWidth", 2);
  __decorateClass([
    (0, import_decorators11.property)({ reflect: true })
  ], FieldsetElement.prototype, "labelMaxWidth", 2);
  __decorateClass([
    (0, import_decorators11.property)({ reflect: true })
  ], FieldsetElement.prototype, "labelMinWidth", 2);
  __decorateClass([
    (0, import_decorators11.property)({ type: Boolean, reflect: true })
  ], FieldsetElement.prototype, "withFullWidth", 2);
  __decorateClass([
    (0, import_decorators11.property)({ type: Boolean, reflect: true })
  ], FieldsetElement.prototype, "withoutMargin", 2);
  __decorateClass([
    (0, import_decorators11.query)(".control-container")
  ], FieldsetElement.prototype, "controlContainerElement", 2);
  __decorateClass([
    (0, import_decorators11.query)(".label")
  ], FieldsetElement.prototype, "labelElement", 2);
  __decorateClass([
    (0, import_decorators11.state)()
  ], FieldsetElement.prototype, "labelBeforeOffset", 2);
  __decorateClass([
    onUpdate("labelPosition", { waitUntilFirstUpdate: true })
  ], FieldsetElement.prototype, "handleLabelPositionChange", 1);
  return FieldsetElement;
};

// src/core/mixins/fieldset.mixin.styles.ts
var import_lit9 = require("lit");
var styles5 = import_lit9.css`:host{--full-width:max-content;--control-width:unset;--control-min-width:240px;--control-max-width:var(--control-width);--control-margin-y:var(--mte-space-sm);--control-margin-x:var(--mte-space-sm);--control-descriptor-margin:var(--mte-space-sm);--label-width:var(--control-width);--label-min-width:var(--control-min-width);--label-max-width:var(--control-max-width);--label-margin-y:var(--mte-space-xs);display:inline-block;width:var(--full-width)}.grid-container{display:inline-grid;grid-template-areas:"label" "control";grid-template-rows:1fr minmax(0,100%);width:inherit}:host([withFullWidth]){--full-width:100%;--control-width:100%}:host([withoutMargin]){--control-margin-y:0px}:host([withoutMargin]) .label-container.has-content{margin-bottom:var(--control-descriptor-margin)}.label-container{display:none;grid-area:label;max-width:var(--label-max-width);min-width:var(--label-min-width);width:var(--label-width)}.label-container.has-content{display:block;margin-top:var(--label-margin-y)}.label-container:not(.has-content){margin:0!important}.context{grid-area:context}.description,.error,.hint,.label{display:block}.description mte-description,.description mte-description-text,.label mte-label,.label mte-label-text,:host ::slotted(mte-description-text[slot=description]),:host ::slotted(mte-description[slot=description]),:host ::slotted(mte-label-text[slot=label]),:host ::slotted(mte-label[slot=label]){margin:0}:host([labelPosition=before]){--label-width:max-content;--label-min-width:max-content}:host([labelPosition=before]) .grid-container{grid-template-areas:"label control";grid-template-columns:minmax(auto,var(--label-width)) minmax(auto,var(--control-width))}:host([labelPosition=before]) .label-container{margin-bottom:var(--control-margin-y);margin-right:var(--control-margin-x);margin-top:calc(var(--control-margin-y) + var(--label-before-offset))}.description,.error,.hint{min-width:100%;width:-moz-min-content;width:min-content}.control-outer-container{grid-area:control;margin-top:var(--control-margin-y);max-width:var(--control-max-width);min-width:var(--control-min-width);width:var(--control-width)}:host(:not([labelPosition=before])) .control-outer-container.has-label-content{margin-top:calc(var(--control-margin-y)/2)}.control-container{display:flex;flex-direction:column;margin-bottom:var(--control-margin-y)}.error,.hint{display:none}.error.has-content,.hint.has-content{display:block;margin-top:var(--control-descriptor-margin)}`;

// src/core/mixins/form-field.mixin.ts
var import_class_map2 = require("lit/directives/class-map.js");
var import_lit10 = require("lit");
var import_decorators13 = require("lit/decorators.js");
var FormFieldMixin = (superClass) => {
  class FormFieldElement extends SizeMixin(RadiusMixin(superClass)) {
    constructor() {
      super(...arguments);
      this.focused = false;
    }
    renderFormFieldTemplate(formFieldContents, { showError = false, disabled = false, withoutSlots = false } = {}) {
      const hasPrepend = this.hasSlot("prepend");
      const hasAppend = this.hasSlot("append");
      const formField = withoutSlots ? import_lit10.html`<div id="form-field" part="form-field" class="form-field ${(0, import_class_map2.classMap)({ focused: this.focused, invalid: showError })}">${formFieldContents}</div>` : import_lit10.html`<div id="form-field" part="form-field" class="form-field ${(0, import_class_map2.classMap)({ focused: this.focused, invalid: showError })}"><div id="prepend" part="prepend" class="prepend ${(0, import_class_map2.classMap)({ "has-content": hasPrepend })}"><slot name="prepend"></slot></div><div id="prefix" class="prefix ${(0, import_class_map2.classMap)({ "has-prepend": hasPrepend })}" part="prefix"><slot name="prefix"></slot></div>${formFieldContents}<div id="suffix" class="suffix ${(0, import_class_map2.classMap)({ "has-append": hasAppend })}" part="suffix"><slot name="suffix"></slot></div><div id="append" part="append" class="append ${(0, import_class_map2.classMap)({ "has-content": hasAppend })}"><slot name="append"></slot></div></div>`;
      return formField;
    }
  }
  __decorateClass([
    (0, import_decorators13.state)()
  ], FormFieldElement.prototype, "focused", 2);
  return FormFieldElement;
};

// src/core/mixins/form-field.mixin.styles.ts
var import_lit11 = require("lit");
var styles6 = import_lit11.css`:host{--form-field-internal-padding:var(--mte-space-sm);--form-field-internal-gap:var(--mte-space-sm);--form-field-radius:var(--mte-border-radius-md);--form-field-border-color:var(--mte-border-2);--form-field-background:var(--mte-surface-2);--prepend-background:var(--mte-grey-1);--prepend-padding-x:var(--mte-space-sm);--prepend-border-color:var(--mte-border-2)}:host([radius=sm]){--form-field-radius:var(--mte-border-radius-xs)}:host([radius=lg]){--form-field-radius:var(--mte-border-radius-xxl)}:host([size=sm]){--prepend-padding-x:calc(var(--mte-space-xs) + var(--mte-space-xxs));--form-field-internal-padding:calc(var(--mte-space-xs) + var(--mte-space-xxs));--form-field-internal-gap:calc(var(--mte-space-xs) + var(--mte-space-xxs))}:host([size=lg]){--prepend-padding-x:calc(var(--mte-space-sm) + var(--mte-space-xs));--form-field-internal-padding:calc(var(--mte-space-sm) + var(--mte-space-xs));--form-field-internal-gap:calc(var(--mte-space-sm) + var(--mte-space-xs))}.form-field{align-items:center;background:var(--form-field-background);border:1px solid var(--form-field-border-color);border-radius:var(--form-field-radius);display:flex;flex-direction:row;gap:var(--form-field-internal-gap);position:relative}:host([disabled]) .form-field{background:var(--mte-disabled-1);border:1px solid var(--mte-disabled-1)}.append,.prepend{align-items:center;align-self:stretch;background:var(--prepend-background);display:none;font-size:var(--font-size);justify-content:center;padding:0 var(--prepend-padding-x)}.prepend{border-bottom-left-radius:var(--form-field-radius);border-right:1px solid var(--prepend-border-color);border-top-left-radius:var(--form-field-radius)}.append{border-bottom-right-radius:var(--form-field-radius);border-left:1px solid var(--prepend-border-color);border-top-right-radius:var(--form-field-radius)}.append.has-content,.prepend.has-content{display:flex}.prefix,.suffix{align-items:center;align-self:stretch;display:flex;font-size:var(--font-size);justify-content:center}.prefix:not(.has-prepend){padding-left:var(--prepend-padding-x)}.suffix:not(.has-append){padding-right:var(--prepend-padding-x)}.form-field.focused:not(.disabled):not([disabled]):not(:disabled):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--form-field-radius);border-bottom-right-radius:var(--form-field-radius);border-top-left-radius:var(--form-field-radius);border-top-right-radius:var(--form-field-radius);bottom:-1px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-1px;pointer-events:none;position:absolute;right:-1px;top:-1px;z-index:9}.form-field.invalid{--form-field-border-color:rgb(var(--mte-core-danger-base-rgb))}:host([withoutBorder]) :is(.form-field,.prepend,.append){--form-field-border-color:transparent}`;

// src/core/mixins/auto-active-link.mixin.ts
var import_decorators14 = require("lit/decorators.js");

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
  add(state10) {
    if (!/^--/.test(state10) || typeof state10 !== "string") {
      throw new DOMException(
        `Failed to execute 'add' on 'CustomStateSet': The specified value ${state10} must start with '--'.`
      );
    }
    const result = super.add(state10);
    const ref = customStateMap.get(this);
    const stateName = `state${state10}`;
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
  delete(state10) {
    const result = super.delete(state10);
    const ref = customStateMap.get(this);
    if (ref.isConnected) {
      ref.toggleAttribute(`state${state10}`, false);
      if (ref.part) {
        ref.part.remove(`state${state10}`);
      }
    } else {
      setTimeout(() => {
        ref.toggleAttribute(`state${state10}`, false);
        if (ref.part) {
          ref.part.remove(`state${state10}`);
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

// src/atomic/slider/slider.styles.ts
var import_lit14 = require("lit");
var styles8 = import_lit14.css`:host{--thumb-size:16px;--thumb-color:rgb(var(--mte-core-primary-base-rgb));--track-height:4px;--track-color:var(--mte-border-1);--track-color-filled:rgb(var(--mte-core-primary-base-rgb));--thumb-outline-focus:2px solid rgb(var(--mte-core-primary-base-rgb));--thumb-outline-hover:2px solid rgb(var(--mte-core-primary-dark-rgb));--thumb-active-color:rgb(var(--mte-core-primary-dark-rgb));--thumb-hover-color:rgb(var(--mte-core-primary-dark-rgb));--label-z-index:var(--mte-z-index-20);display:flex;flex-wrap:nowrap;justify-content:center;position:relative}:host([withFullWidth]){width:100%}:host([withFullWidth]) .range{width:auto}:host([hideValueLabel]) .range{margin-bottom:0}.range-wrapper{display:flex}.range-wrapper .prefix,.range-wrapper .suffix{align-items:normal}.range-wrapper .prefix{padding-right:var(--mte-space-sm)}.range-wrapper .suffix{padding-left:var(--mte-space-sm)}.range-wrapper .prefix:not(.has-prepend){padding-left:0}.range-wrapper .suffix:not(.has-append){padding-right:0}.range{display:flex;flex-direction:column;flex-grow:1;margin-bottom:var(--mte-space-md);min-height:24px;position:relative;width:240px;z-index:1}.range:before{background-image:linear-gradient(to right,var(--track-color-filled) 0,var(--track-color-filled) var(--first-value-position),var(--track-color) var(--first-value-position),var(--track-color) 100%);content:"";height:var(--track-height);left:0;position:absolute;top:50%;transform:translateY(-50%);width:100%}.range-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;cursor:pointer;height:100%;margin:0;max-width:calc(100% + var(--thumb-size));min-height:24px;min-width:calc(100% + var(--thumb-size));position:relative;transform:translateX(calc(var(--thumb-size)*-1/2))}.range-input:focus-visible{outline:none}.range-input::-webkit-slider-thumb{visibility:hidden}.range-input::-moz-focus-outer{border:0}.thumb-container{align-items:center;display:flex;flex-direction:column;justify-content:center;left:var(--first-value-position);pointer-events:none;position:absolute;top:calc(50% - var(--thumb-size) + var(--track-height) + 2px);transform:translateX(-50%)}.thumb{background-color:var(--thumb-color);border:2px solid var(--mte-ink-5);border-radius:50%;cursor:pointer;height:var(--thumb-size);width:var(--thumb-size)}.range-input:enabled:focus-visible+.thumb-container .thumb{outline:var(--thumb-outline-focus)}.range-input:enabled:focus-visible:hover+.thumb-container .thumb{outline:var(--thumb-outline-hover)}.range-input:enabled+.thumb-container .thumb:hover{background-color:var(--thumb-hover-color)}.range-input:enabled:active+.thumb-container .thumb{background-color:var(--thumb-active-color)}.value-label{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;background-color:var(--mte-dark);border:0 solid;border-radius:var(--mte-border-radius-full);color:var(--mte-light);font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);left:0;line-height:var(--mte-font-set-caption-line-height);line-height:1;margin-top:var(--mte-space-xs);padding:var(--mte-space-xs) var(--mte-space-sm);text-decoration:inherit;text-transform:inherit;white-space:nowrap;z-index:var(--label-z-index)}.number-input{flex-shrink:0;margin-left:var(--mte-space-lg)}.number-input.with-label{margin-top:var(--mte-space-lg)}.number-input.with-description{margin-top:var(--mte-space-md)}.number-input.with-label.with-description{margin-top:calc(var(--mte-space-lg) + var(--mte-space-md) + 2px)}.marks{display:inline-block;height:0;pointer-events:none;top:50%;width:calc(100% - 1px)}.mark,.marks{position:absolute}.mark{align-items:center;color:var(--mte-ink-1);display:flex;flex-direction:column;font-family:var(--mte-font-family-sans);gap:var(--mte-space-sm);transform:translateX(-50%);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);text-decoration:inherit;text-transform:inherit;top:2px;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1px}.mark:before{background:var(--mte-border-3);content:"";height:6px;transform:translateX(50%);width:1px}:host([readonly]){--track-color-filled:var(--mte-readonly-2);--thumb-color:var(--mte-readonly-4);--thumb-active-color:var(--mte-readonly-4);--thumb-hover-color:var(--mte-readonly-4)}:host([readonly]:not(:disabled)) .thumb{border:0 solid transparent;margin-bottom:2px;outline:none}:host([readonly]:not(:disabled)) .thumb-container{transform:translate(-50%,2px)}:host(:disabled){--track-color-filled:var(--mte-disabled-2);--thumb-color:var(--mte-disabled-3)}input[type=range]::-moz-slider-thumb{-moz-appearance:none}`;

// src/atomic/range-slider/range-slider.styles.ts
var import_lit15 = require("lit");
var styles9 = import_lit15.css`.range:before{background-image:linear-gradient(to right,var(--track-color) 0,var(--track-color) var(--first-value-position),var(--track-color-filled) var(--first-value-position),var(--track-color-filled) var(--last-value-position),var(--track-color) var(--last-value-position),var(--track-color) 100%)}.range-input:first-of-type{clip-path:inset(0 var(--first-value-clip) 0 0);left:0;overflow:hidden;position:absolute}.range-input:last-of-type{clip-path:inset(0 0 0 var(--last-value-clip));left:0;overflow:hidden;position:absolute}.thumb-container.first-thumb{left:var(--first-value-position)}.thumb-container.last-thumb{left:var(--last-value-position)}.range-input:enabled:active+.thumb-container,.range-input:enabled:focus+.thumb-container{z-index:1}`;

// src/atomic/range-slider/range-slider.element.ts
var import_form_control3 = require("@open-wc/form-control");

// src/atomic/input/input.element.ts
var import_if_defined5 = require("lit-html/directives/if-defined.js");
var import_form_control2 = require("@open-wc/form-control");
var import_form_helpers2 = require("@open-wc/form-helpers");
var import_lit37 = require("lit");
var import_decorators30 = require("lit/decorators.js");
var import_live = require("lit/directives/live.js");

// src/atomic/input/input.styles.ts
var import_lit16 = require("lit");
var styles10 = import_lit16.css`:host{--placeholder-color:var(--mte-ink-2);--input-padding-y:calc(var(--mte-space-sm) + var(--mte-space-xxs));--icon-size:20px;--color:var(--mte-ink-1);--font-size:1rem;color:var(--color);line-height:0}:host([size=sm]){--input-padding-y:calc(var(--mte-space-xs) + var(--mte-space-xxs));--icon-size:18px;--font-size:0.875rem}:host([size=lg]){--input-padding-y:calc(var(--mte-space-sm) + var(--mte-space-xs));--icon-size:22px;--font-size:1.25rem}.input{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:none;border-radius:0;color:var(--color);font-size:var(--mte-font-set-body1-font-size);font-size:var(--font-size);font-weight:var(--mte-font-set-body1-font-weight);height:calc(1em + var(--input-padding-y)*2);line-height:var(--mte-font-set-body1-line-height);line-height:1;margin:0;outline:none;padding:0;text-align:inherit;text-decoration:inherit;text-transform:inherit;vertical-align:middle;width:100%}.input::-webkit-date-and-time-value{text-align:left}.clear{margin-left:calc(var(--form-field-internal-gap)*-1/2);margin-right:calc(var(--form-field-internal-gap)*-1)}.input::-moz-placeholder{color:var(--placeholder-color)}.input::placeholder{color:var(--placeholder-color)}:host(:focus){outline:none}:host([readonly]){--form-field-border-color:var(--mte-readonly-3);--form-field-background:var(--mte-readonly-1)}:host([readonly]) .input{color:var(--mte-readonly-4)}:host([disabled]){--form-field-border-color:var(--mte-disabled-1);--form-field-background:var(--mte-disabled-1)}:host([disabled]) .input{color:var(--mte-disabled-4);cursor:not-allowed}:host([disabled]) .input::-moz-placeholder,:host([readonly]) .input::-moz-placeholder{color:var(--mte-disabled-4)}:host([disabled]) .input::placeholder,:host([readonly]) .input::placeholder{color:var(--mte-disabled-4)}:host ::slotted(mte-icon[slot=append]),:host ::slotted(mte-icon[slot=prefix]),:host ::slotted(mte-icon[slot=prepend]),:host ::slotted(mte-icon[slot=suffix]){height:var(--icon-size);min-height:var(--icon-size);min-width:var(--icon-size);width:var(--icon-size)}`;

// src/atomic/button/button.element.ts
var import_if_defined3 = require("lit-html/directives/if-defined.js");
var import_lit22 = require("lit");
var import_decorators22 = require("lit/decorators.js");

// src/atomic/button/button.styles.ts
var import_lit17 = require("lit");
var styles11 = import_lit17.css`:host{--background:transparent;--color:inherit;--padding-y:var(--mte-space-sm);--padding-x:calc(var(--mte-space-md) + var(--mte-space-xs));--border-width:1px;--border-style:solid;--border-radius:var(--group-radius,var(--mte-border-radius-xl));--focus-radius:var(--group-focus-radius,var(--mte-border-radius-full));--border-color:transparent;--border-alt-color:var(--border-color);--icon-size:16px;--focus-offset:-5px;--final-y:var(--padding-y);--final-x:var(--padding-x);align-items:center;-webkit-appearance:none;background:var(--background);border:var(--border-style) var(--border-width) var(--border-color);border-bottom-left-radius:var(--group-border-bottom-left-radius,var(--border-radius));border-bottom-right-radius:var(--group-border-bottom-right-radius,var(--border-radius));border-color:var(--group-border-top-color,var(--border-color)) var(--group-border-right-color,var(--border-color)) var(--group-border-bottom-color,var(--border-color)) var(--group-border-left-color,var(--border-color));border-top-left-radius:var(--group-border-top-left-radius,var(--border-radius));border-top-right-radius:var(--group-border-top-right-radius,var(--border-radius));color:var(--color);cursor:pointer;display:inline-flex;flex-wrap:nowrap;font-family:var(--mte-font-family-sans);justify-content:center;outline:none!important;overflow:visible;padding:var(--final-y) var(--final-x);-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;width:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-button-font-size);font-weight:var(--mte-font-set-button-font-weight);line-height:var(--mte-font-set-button-line-height);line-height:1;text-decoration:inherit;text-transform:inherit}:host(:focus-visible:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--group-focus-bottom-left-radius,var(--focus-radius));border-bottom-right-radius:var(--group-focus-bottom-right-radius,var(--focus-radius));border-top-left-radius:var(--group-focus-top-left-radius,var(--focus-radius));border-top-right-radius:var(--group-focus-top-right-radius,var(--focus-radius));bottom:var(--focus-offset);box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:var(--focus-offset);pointer-events:none;position:absolute;right:var(--focus-offset);top:var(--focus-offset);z-index:9}:host(::-moz-focus-inner){border:0;padding:0}:host(:hover),:host([activestate]){outline:none;--color:inherit}:host(:hover){--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)))}:host(:active),:host([activestate]){--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)))}:host([outlined]){--border-style:solid;--border-color:var(--mte-border-2)}:host([filled]){--border-style:solid;--border-color:transparent;--background:var(--button-filled-bg,var(--mte-grey-10));--color:var(--button-filled-ink,var(--mte-ink-5))}:host([filled]:hover){--background:var(--button-filled-active-bg,var(--mte-grey-9));--color:var(--button-filled-active-ink,var(--mte-ink-5))}:host([filled]:active),:host([filled][activestate]){--background:var(--button-filled-active-bg,var(--mte-darker));--color:var(--button-filled-active-ink,var(--mte-ink-5))}:host([color=primary]:not([disabled])){--border-color:transparent;--background:transparent;--color:rgb(var(--mte-core-primary-base-rgb))}:host([color=primary]:not([disabled]):focus),:host([color=primary]:not([disabled]):hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));--color:rgb(var(--mte-core-primary-dark-rgb))}:host([color=primary]:not([disabled])[activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a));--color:rgb(var(--mte-core-primary-darker-rgb))}:host([color=primary][outlined]:not([disabled])){--background:transparent;--border-color:var(--mte-border-2);--color:rgb(var(--mte-core-primary-base-rgb))}:host([color=primary][outlined]:not([disabled]):focus),:host([color=primary][outlined]:not([disabled]):hover){--border-color:var(--mte-border-2);--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)));--color:rgb(var(--mte-core-primary-dark-rgb))}:host([color=primary][outlined]:not([disabled])[activestate]){--border-color:var(--mte-border-2);--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)));--color:rgb(var(--mte-core-primary-darker-rgb))}:host([color=primary][filled]:not([disabled])){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-primary-dark-rgb));--background:rgb(var(--mte-core-primary-base-rgb));--color:rgb(var(--mte-core-primary-base-c-rgb))}:host([color=primary][filled]:not([disabled]):focus),:host([color=primary][filled]:not([disabled]):hover){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-primary-dark-rgb));--background:rgb(var(--mte-core-primary-dark-rgb));--color:rgb(var(--mte-core-primary-dark-c-rgb))}:host([color=primary][filled]:not([disabled])[activestate]){--border-color:transparent;--background:rgb(var(--mte-core-primary-darker-rgb));--color:rgb(var(--mte-core-primary-darker-c-rgb))}:host([color=secondary]:not([disabled])){--border-color:transparent;--background:transparent;--color:rgb(var(--mte-core-secondary-base-rgb))}:host([color=secondary]:not([disabled]):focus),:host([color=secondary]:not([disabled]):hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));--color:rgb(var(--mte-core-secondary-dark-rgb))}:host([color=secondary]:not([disabled])[activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a));--color:rgb(var(--mte-core-secondary-darker-rgb))}:host([color=secondary][outlined]:not([disabled])){--background:transparent;--border-color:var(--mte-border-2);--color:rgb(var(--mte-core-secondary-base-rgb))}:host([color=secondary][outlined]:not([disabled]):focus),:host([color=secondary][outlined]:not([disabled]):hover){--border-color:var(--mte-border-2);--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)));--color:rgb(var(--mte-core-secondary-dark-rgb))}:host([color=secondary][outlined]:not([disabled])[activestate]){--border-color:var(--mte-border-2);--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)));--color:rgb(var(--mte-core-secondary-darker-rgb))}:host([color=secondary][filled]:not([disabled])){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-secondary-dark-rgb));--background:rgb(var(--mte-core-secondary-base-rgb));--color:rgb(var(--mte-core-secondary-base-c-rgb))}:host([color=secondary][filled]:not([disabled]):focus),:host([color=secondary][filled]:not([disabled]):hover){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-secondary-dark-rgb));--background:rgb(var(--mte-core-secondary-dark-rgb));--color:rgb(var(--mte-core-secondary-dark-c-rgb))}:host([color=secondary][filled]:not([disabled])[activestate]){--border-color:transparent;--background:rgb(var(--mte-core-secondary-darker-rgb));--color:rgb(var(--mte-core-secondary-darker-c-rgb))}:host([color=tertiary]:not([disabled])){--border-color:transparent;--background:transparent;--color:rgb(var(--mte-core-tertiary-base-rgb))}:host([color=tertiary]:not([disabled]):focus),:host([color=tertiary]:not([disabled]):hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));--color:rgb(var(--mte-core-tertiary-dark-rgb))}:host([color=tertiary]:not([disabled])[activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a));--color:rgb(var(--mte-core-tertiary-darker-rgb))}:host([color=tertiary][outlined]:not([disabled])){--background:transparent;--border-color:var(--mte-border-2);--color:rgb(var(--mte-core-tertiary-base-rgb))}:host([color=tertiary][outlined]:not([disabled]):focus),:host([color=tertiary][outlined]:not([disabled]):hover){--border-color:var(--mte-border-2);--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)));--color:rgb(var(--mte-core-tertiary-dark-rgb))}:host([color=tertiary][outlined]:not([disabled])[activestate]){--border-color:var(--mte-border-2);--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)));--color:rgb(var(--mte-core-tertiary-darker-rgb))}:host([color=tertiary][filled]:not([disabled])){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-tertiary-dark-rgb));--background:rgb(var(--mte-core-tertiary-base-rgb));--color:rgb(var(--mte-core-tertiary-base-c-rgb))}:host([color=tertiary][filled]:not([disabled]):focus),:host([color=tertiary][filled]:not([disabled]):hover){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-tertiary-dark-rgb));--background:rgb(var(--mte-core-tertiary-dark-rgb));--color:rgb(var(--mte-core-tertiary-dark-c-rgb))}:host([color=tertiary][filled]:not([disabled])[activestate]){--border-color:transparent;--background:rgb(var(--mte-core-tertiary-darker-rgb));--color:rgb(var(--mte-core-tertiary-darker-c-rgb))}:host([color=danger]:not([disabled])){--border-color:transparent;--background:transparent;--color:rgb(var(--mte-core-danger-base-rgb))}:host([color=danger]:not([disabled]):focus),:host([color=danger]:not([disabled]):hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));--color:rgb(var(--mte-core-danger-dark-rgb))}:host([color=danger]:not([disabled])[activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a));--color:rgb(var(--mte-core-danger-darker-rgb))}:host([color=danger][outlined]:not([disabled])){--background:transparent;--border-color:var(--mte-border-2);--color:rgb(var(--mte-core-danger-base-rgb))}:host([color=danger][outlined]:not([disabled]):focus),:host([color=danger][outlined]:not([disabled]):hover){--border-color:var(--mte-border-2);--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)));--color:rgb(var(--mte-core-danger-dark-rgb))}:host([color=danger][outlined]:not([disabled])[activestate]){--border-color:var(--mte-border-2);--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)));--color:rgb(var(--mte-core-danger-darker-rgb))}:host([color=danger][filled]:not([disabled])){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-danger-dark-rgb));--background:rgb(var(--mte-core-danger-base-rgb));--color:rgb(var(--mte-core-danger-base-c-rgb))}:host([color=danger][filled]:not([disabled]):focus),:host([color=danger][filled]:not([disabled]):hover){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-danger-dark-rgb));--background:rgb(var(--mte-core-danger-dark-rgb));--color:rgb(var(--mte-core-danger-dark-c-rgb))}:host([color=danger][filled]:not([disabled])[activestate]){--border-color:transparent;--background:rgb(var(--mte-core-danger-darker-rgb));--color:rgb(var(--mte-core-danger-darker-c-rgb))}:host([disabled]),:host([disabled]) a{cursor:not-allowed!important;--color:var(--mte-disabled-4)!important;box-shadow:none!important;text-shadow:none!important}:host([disabled]:hover),:host([disabled][activestate]){--background:transparent!important}:host([disabled][filled]),:host([disabled][outlined]){--border-color:var(--mte-disabled-2)!important;--background:var(--mte-disabled-1)!important;--color:var(--mte-disabled-4)!important}:host([disabled][filled]:hover),:host([disabled][filled][activestate]),:host([disabled][outlined]:hover),:host([disabled][outlined][activestate]){--background:var(--mte-disabled-1)!important}:host([size=sm]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:calc(var(--mte-font-set-button-font-size)*.8);font-weight:var(--mte-font-set-button-font-weight);line-height:var(--mte-font-set-button-line-height);text-decoration:inherit;text-transform:inherit;--final-y:calc(var(--padding-y)*var(--mte-size-scale-sm));--final-x:calc(var(--padding-x)*var(--mte-size-scale-sm))}:host([size=lg]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:calc(var(--mte-font-set-button-font-size)*1.2);font-weight:var(--mte-font-set-button-font-weight);line-height:var(--mte-font-set-button-line-height);text-decoration:inherit;text-transform:inherit;--border-radius:var(--mte-border-radius-full);--final-y:calc(var(--padding-y)*var(--mte-size-scale-lg));--final-x:calc(var(--padding-x)*var(--mte-size-scale-lg))}:host([radius=sm]){--border-radius:var(--mte-border-radius-sm);--focus-radius:var(--mte-border-radius-md)}.prefix,.prefix>span{align-items:center;display:flex;justify-content:center}.prefix{margin-left:calc(var(--mte-space-sm)*-1);padding-right:var(--mte-space-sm)}:host([size=sm]) .prefix{margin-left:calc(var(--mte-space-xs)*-1);padding-right:var(--mte-space-xs)}.suffix,.suffix>span{align-items:center;display:flex;justify-content:center}.suffix{margin-right:calc(var(--mte-space-sm)*-1);padding-left:var(--mte-space-sm)}:host([size=sm]) .suffix{margin-right:calc(var(--mte-space-xs)*-1);padding-left:var(--mte-space-xs)}:host>:not(.label) mte-icon{height:var(--icon-size);min-height:var(--icon-size);min-width:var(--icon-size);width:var(--icon-size)}:host([size=sm])>:not(.label) mte-icon{--icon-size:12px}:host([size=lg])>:not(.label) mte-icon{--icon-size:20px}`;

// src/atomic/icon/icon.element.ts
var import_lit19 = require("lit");
var import_decorators19 = require("lit/decorators.js");

// src/atomic/icon/icon.styles.ts
var import_lit18 = require("lit");
var styles12 = import_lit18.css`:host{box-sizing:content-box!important;color:var(--icon-color,inherit);display:inline-block;line-height:0;width:24px}:host([autosize]){vertical-align:middle}:host([muted]){--icon-color:var(--mte-ink-2)}svg{display:block;height:100%;width:100%}:host(:not([withColor])) svg *{color:inherit;fill:currentColor!important}:host([color=primary])>svg *{color:rgb(var(--mte-status-primary-base-rgb))}:host([color=secondary])>svg *{color:rgb(var(--mte-status-secondary-base-rgb))}:host([color=tertiary])>svg *{color:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=success])>svg *{color:rgb(var(--mte-status-success-base-rgb))}:host([color=warning])>svg *{color:rgb(var(--mte-status-warning-base-rgb))}:host([color=danger])>svg *{color:rgb(var(--mte-status-danger-base-rgb))}`;

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
var import_styles8 = require("@mortar/styles");
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
        this.setInstanceStyle("mte-icon-sizing", (0, import_styles8.selectorFactory)(":host:host"), {
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
    return import_lit19.html`${this.instanceStyles}${(0, import_unsafe_svg2.unsafeSVG)(this.iconSvg)}`;
  }
};
MteIcon.styles = [styles12];
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteIcon.prototype, "name", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteIcon.prototype, "library", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Number, reflect: true })
], MteIcon.prototype, "size", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteIcon.prototype, "autosize", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteIcon.prototype, "role", 2);
__decorateClass([
  (0, import_decorators19.property)({ attribute: "aria-label", reflect: true })
], MteIcon.prototype, "ariaLabel", 2);
__decorateClass([
  (0, import_decorators19.property)({ attribute: "aria-hidden", reflect: true })
], MteIcon.prototype, "ariaHidden", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteIcon.prototype, "muted", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteIcon.prototype, "withColor", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteIcon.prototype, "_loaded", 2);
__decorateClass([
  (0, import_decorators19.state)()
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
var import_lit21 = require("lit");
var import_decorators20 = require("lit/decorators.js");

// src/atomic/progress-spinner/progress-spinner.styles.ts
var import_lit20 = require("lit");
var styles13 = import_lit20.css`@keyframes progress-spinner-animation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}:host{display:inline-block;height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content;will-change:transform}.container{align-items:center;display:flex;justify-content:center;overflow:visible;position:relative;vertical-align:middle}.container svg{display:block;overflow:visible}.container path{fill-opacity:0}.track{stroke:rgb(var(--mte-border-1-rgb))}.bar{left:0;position:absolute;top:0;stroke:rgb(var(--mte-status-primary-base-rgb))}.bar path{transform-origin:center;transition:stroke-dashoffset .2s cubic-bezier(.4,0,.2,1) 0ms;will-change:stroke-dashoffset}:host([withoutAnimation]) .bar path{transition:none!important}:host([indeterminate]){animation:progress-spinner-animation .5s linear infinite}:host([indeterminate]) .bar path{transition:none}:host([color=primary]) .bar{stroke:rgb(var(--mte-status-primary-base-rgb))}:host([color=secondary]) .bar{stroke:rgb(var(--mte-status-secondary-base-rgb))}:host([color=tertiary]) .bar{stroke:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=success]) .bar{stroke:rgb(var(--mte-status-success-base-rgb))}:host([color=warning]) .bar{stroke:rgb(var(--mte-status-warning-base-rgb))}:host([color=danger]) .bar{stroke:rgb(var(--mte-status-danger-base-rgb))}@media screen and (prefers-reduced-motion:reduce){.bar path{transition:none}:host([indeterminate]){animation:none}}`;

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
    return import_lit21.html`${this.instanceStyles}<div class="container" part="container" style="${containerStyles}"><svg class="track" part="track" style="${trackStyles}" viewBox="${this.viewBox}" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="${this.trackShape}"></path></svg> <svg class="bar" part="bar" style="${barStyles}" viewBox="${this.viewBox}" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="${this.trackShape}" pathLength="${this.PATH_LENGTH - 1}" stroke-dasharray="${this.strokeDashArray}" stroke-dashoffset="${this.strokeDashOffset}"></path></svg></div>`;
  }
};
MteProgressSpinner.styles = styles13;
__decorateClass([
  (0, import_decorators20.property)({ type: Number, reflect: true })
], MteProgressSpinner.prototype, "diameter", 2);
__decorateClass([
  (0, import_decorators20.property)({ type: Number, reflect: true })
], MteProgressSpinner.prototype, "d", 2);
__decorateClass([
  (0, import_decorators20.property)({ type: Boolean, reflect: true })
], MteProgressSpinner.prototype, "indeterminate", 2);
__decorateClass([
  (0, import_decorators20.property)({ type: Number, reflect: true })
], MteProgressSpinner.prototype, "value", 1);
__decorateClass([
  (0, import_decorators20.property)({ type: Boolean, reflect: true })
], MteProgressSpinner.prototype, "withoutAnimation", 2);
__decorateClass([
  (0, import_decorators20.property)({ reflect: true })
], MteProgressSpinner.prototype, "role", 2);
__decorateClass([
  (0, import_decorators20.property)({ attribute: "aria-valuenow", reflect: true })
], MteProgressSpinner.prototype, "ariaValueNow", 2);
__decorateClass([
  (0, import_decorators20.property)({ attribute: "aria-valuemin", reflect: true })
], MteProgressSpinner.prototype, "ariaValueMin", 2);
__decorateClass([
  (0, import_decorators20.property)({ attribute: "aria-valuemax", reflect: true })
], MteProgressSpinner.prototype, "ariaValueMax", 2);
__decorateClass([
  (0, import_decorators20.state)()
], MteProgressSpinner.prototype, "strokeWidth", 2);
__decorateClass([
  (0, import_decorators20.state)()
], MteProgressSpinner.prototype, "viewBox", 2);
__decorateClass([
  (0, import_decorators20.state)()
], MteProgressSpinner.prototype, "strokeDashOffset", 2);
__decorateClass([
  onUpdate(["value"], { on: "both" })
], MteProgressSpinner.prototype, "handleValueChange", 1);
MteProgressSpinner = __decorateClass([
  defineElement("mte-progress-spinner")
], MteProgressSpinner);

// src/atomic/progress-spinner/spinner.element.ts
var import_decorators21 = require("lit/decorators.js");
var MteSpinner = class extends MteProgressSpinner {
  constructor() {
    super(...arguments);
    this.indeterminate = true;
  }
};
__decorateClass([
  (0, import_decorators21.property)({ reflect: true })
], MteSpinner.prototype, "indeterminate", 2);
MteSpinner = __decorateClass([
  defineElement("mte-spinner")
], MteSpinner);

// src/atomic/button/button.element.ts
var import_styles10 = require("@mortar/styles");

// src/atomic/button/button-common.ts
var import_styles9 = require("@mortar/styles");
var defaultButtonBorderFactory = (width, color, style) => `${style ?? "solid"} ${borderWidthValShorthands([
  { prop: "borderWidth", value: dotStringToConfigValue(width ?? "1px") }
])[0]?.value} ${dotStringToConfigValue(color) ?? import_styles9.config.color.border1}`;

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
      this.setInstanceStyle("content-base", (0, import_styles10.selectorFactory)(":host:host:host:host:host:host"), {
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
    return this.renderButtonTemplate(import_lit22.html`${this.icon && !this.iconHidden || this.loading ? import_lit22.html`<span class="prefix"><span part="prefix">${this.loading ? import_lit22.html`<mte-spinner diameter="${loadingDiameter}"></mte-spinner>` : import_lit22.html`<mte-icon size="${iconSize}" name="${this.icon}" library="${(0, import_if_defined3.ifDefined)(this.iconLibrary)}"></mte-icon>`}</span></span>` : null}<slot part="label" class="label"></slot>${this.rightIcon && !this.rightIconHidden ? import_lit22.html`<span class="suffix"><span part="suffix"><mte-icon size="${iconSize}" name="${this.rightIcon}" library="${(0, import_if_defined3.ifDefined)(this.rightIconLibrary)}"></mte-icon></span></span>` : null}`);
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
  (0, import_decorators22.property)({ type: Boolean, reflect: true })
], MteButton.prototype, "filled", 2);
__decorateClass([
  (0, import_decorators22.property)({ type: Boolean, reflect: true })
], MteButton.prototype, "outlined", 2);
__decorateClass([
  (0, import_decorators22.property)()
], MteButton.prototype, "icon", 2);
__decorateClass([
  (0, import_decorators22.property)()
], MteButton.prototype, "iconLibrary", 2);
__decorateClass([
  (0, import_decorators22.property)({ type: Boolean })
], MteButton.prototype, "iconHidden", 2);
__decorateClass([
  (0, import_decorators22.property)()
], MteButton.prototype, "rightIcon", 2);
__decorateClass([
  (0, import_decorators22.property)()
], MteButton.prototype, "rightIconLibrary", 2);
__decorateClass([
  (0, import_decorators22.property)({ type: Boolean })
], MteButton.prototype, "rightIconHidden", 2);
__decorateClass([
  (0, import_decorators22.property)({ type: Boolean })
], MteButton.prototype, "loading", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "m", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "mx", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "my", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "mt", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "mr", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "mb", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "ml", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "w", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "maxw", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "minw", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "borderColor", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "borderWidth", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "borderStyle", 2);
__decorateClass([
  (0, import_decorators22.property)({ type: Boolean, reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "border", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteButton.prototype, "elevation", 2);
MteButton = __decorateClass([
  defineElement("mte-button")
], MteButton);

// src/atomic/button/icon-button.element.ts
var import_lit28 = require("lit");
var import_decorators25 = require("lit/decorators.js");

// src/atomic/button/icon-button.styles.ts
var import_lit23 = require("lit");
var styles14 = import_lit23.css`:host{--padding-y:var(--mte-space-sm);--padding-x:var(--padding-y);--border-radius:var(--group-radius,var(--mte-border-radius-full));--focus-radius:var(--group-focus-radius,var(--mte-border-radius-full));--icon-size:16px;--color:inherit}:host([radius=sm]){--border-radius:var(--mte-border-radius-sm);--focus-radius:var(--mte-border-radius-md)}:host mte-icon{height:var(--icon-size);min-height:var(--icon-size);min-width:var(--icon-size);width:var(--icon-size)}:host([size=sm]) mte-icon{--icon-size:12px}:host([size=lg]) mte-icon{--icon-size:20px}`;

// src/atomic/tooltip/tooltip.element.ts
var import_dom = require("@floating-ui/dom");
var import_styles11 = require("@mortar/styles");
var import_lit25 = require("lit");
var import_decorators23 = require("lit/decorators.js");

// src/atomic/tooltip/tooltip.styles.ts
var import_lit24 = require("lit");
var styles15 = import_lit24.css`:host{--color:var(--mte-light);--background:var(--mte-dark);--z-index:var(--mte-z-index-20);--radius:var(--mte-border-radius-xl);--padding-x:var(--mte-space-md);--padding-y:var(--mte-space-sm);pointer-events:auto}.tooltip{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;border-radius:var(--radius);color:var(--color);display:none;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);max-width:250px;opacity:0;padding:var(--padding-y) var(--padding-x);position:fixed;text-decoration:inherit;text-overflow:ellipsis;text-transform:inherit;z-index:var(--z-index)}.arrow,.tooltip{background:var(--background)}.arrow{height:10px;position:absolute;transform:rotate(45deg);width:10px}`;

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
    this.animationDuration = import_styles11.config.animation.transitionDurationJs.short * 1e3;
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
    return import_lit25.html`${this.instanceStyles}<div part="tooltip" class="tooltip"><slot></slot><div part="arrow" class="arrow"></div></div>`;
  }
};
MteTooltip.styles = [styles7, styles15];
__decorateClass([
  (0, import_decorators23.property)({ reflect: true })
], MteTooltip.prototype, "id", 2);
__decorateClass([
  (0, import_decorators23.property)()
], MteTooltip.prototype, "position", 2);
__decorateClass([
  (0, import_decorators23.property)()
], MteTooltip.prototype, "placement", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Number, reflect: true })
], MteTooltip.prototype, "openDelay", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Number, reflect: true })
], MteTooltip.prototype, "closeDelay", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true })
], MteTooltip.prototype, "role", 2);
__decorateClass([
  (0, import_decorators23.property)({ attribute: "aria-hidden", reflect: true })
], MteTooltip.prototype, "ariaHidden", 2);
__decorateClass([
  (0, import_decorators23.property)({ attribute: "aria-live", reflect: true })
], MteTooltip.prototype, "ariaLive", 2);
__decorateClass([
  (0, import_decorators23.property)({ reflect: true })
], MteTooltip.prototype, "triggerOn", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Boolean, reflect: true })
], MteTooltip.prototype, "withoutPortal", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Number })
], MteTooltip.prototype, "animationDuration", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Boolean, reflect: true })
], MteTooltip.prototype, "asAriaLabel", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Boolean, reflect: true })
], MteTooltip.prototype, "withoutAutoLabel", 2);
__decorateClass([
  (0, import_decorators23.state)()
], MteTooltip.prototype, "opened", 2);
__decorateClass([
  (0, import_decorators23.state)()
], MteTooltip.prototype, "assumeLabel", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Object })
], MteTooltip.prototype, "targetElement", 2);
__decorateClass([
  (0, import_decorators23.property)()
], MteTooltip.prototype, "portalAdapter", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Boolean })
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
  (0, import_decorators23.state)()
], MteTooltip.prototype, "visible", 2);
__decorateClass([
  (0, import_decorators23.state)()
], MteTooltip.prototype, "renderedPosition", 2);
__decorateClass([
  (0, import_decorators23.query)(".tooltip")
], MteTooltip.prototype, "tooltipElem", 2);
__decorateClass([
  (0, import_decorators23.query)(".arrow")
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
var import_lit27 = require("lit");
var import_decorators24 = require("lit/decorators.js");

// src/utilities/overlay-trigger/overlay-trigger.styles.ts
var import_lit26 = require("lit");
var styles16 = import_lit26.css`:host{box-sizing:border-box;display:contents}slot[name=overlay]::slotted(*){position:absolute}`;

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
    return import_lit27.html`<slot name="overlay"></slot><slot name="trigger"></slot>`;
  }
};
MteOverlayTrigger.styles = [styles16];
__decorateClass([
  (0, import_decorators24.property)({ type: Boolean, reflect: true })
], MteOverlayTrigger.prototype, "opened", 2);
__decorateClass([
  (0, import_decorators24.property)({ attribute: false })
], MteOverlayTrigger.prototype, "triggerElement", 2);
__decorateClass([
  (0, import_decorators24.property)({ attribute: false })
], MteOverlayTrigger.prototype, "overlayElement", 2);
__decorateClass([
  (0, import_decorators24.queryAssignedElements)({ slot: "trigger" })
], MteOverlayTrigger.prototype, "triggerElements", 2);
__decorateClass([
  (0, import_decorators24.queryAssignedElements)({ slot: "overlay" })
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
var import_styles12 = require("@mortar/styles");
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
      this.setInstanceStyle("content-base", (0, import_styles12.selectorFactory)(":host:host:host:host:host:host"), {
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
    return import_lit28.html`${this.renderButtonTemplate(
      this.loading ? import_lit28.html`<mte-spinner diameter="${loadingDiameter}"></mte-spinner>` : import_lit28.html`<mte-icon name="${this.icon}" library="${this.iconLibrary}" part="icon"></mte-icon>`
    )} ${this.label ? import_lit28.html`<mte-overlay-trigger id="trigger"></mte-overlay-trigger><mte-tooltip id="tooltip" position="${this.labelPosition}" asAriaLabel ?disabled="${this.disabled}" withoutA11y>${this.label}</mte-tooltip>` : null}`;
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
  (0, import_decorators25.property)({ type: Boolean, reflect: true })
], MteIconButton.prototype, "filled", 2);
__decorateClass([
  (0, import_decorators25.property)({ type: Boolean, reflect: true })
], MteIconButton.prototype, "outlined", 2);
__decorateClass([
  (0, import_decorators25.property)()
], MteIconButton.prototype, "icon", 2);
__decorateClass([
  (0, import_decorators25.property)()
], MteIconButton.prototype, "iconLibrary", 2);
__decorateClass([
  (0, import_decorators25.property)({ type: Boolean })
], MteIconButton.prototype, "loading", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true })
], MteIconButton.prototype, "label", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true })
], MteIconButton.prototype, "labelPosition", 2);
__decorateClass([
  (0, import_decorators25.property)({ attribute: "aria-label", reflect: true })
], MteIconButton.prototype, "ariaLabel", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "m", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "mx", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "my", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "mt", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "mr", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "mb", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "ml", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "borderColor", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "borderWidth", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "borderStyle", 2);
__decorateClass([
  (0, import_decorators25.property)({ type: Boolean, reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "border", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, converter: ResponsiveValueConverter })
], MteIconButton.prototype, "elevation", 2);
__decorateClass([
  (0, import_decorators25.query)("#tooltip")
], MteIconButton.prototype, "tooltipElement", 2);
__decorateClass([
  (0, import_decorators25.query)("#trigger")
], MteIconButton.prototype, "overlayTriggerElement", 2);
__decorateClass([
  onUpdate(["label", "ariaLabel"], { on: "both" })
], MteIconButton.prototype, "handleLabelChange", 1);
MteIconButton = __decorateClass([
  defineElement("mte-icon-button")
], MteIconButton);

// src/atomic/form-elements/description.element.ts
var import_lit30 = require("lit");
var import_decorators26 = require("lit/decorators.js");

// src/atomic/form-elements/description.styles.ts
var import_lit29 = require("lit");
var styles17 = import_lit29.css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mte-ink-2);display:block;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);margin:var(--mte-space-xs) 0;text-decoration:inherit;text-transform:inherit;width:100%}`;

// src/atomic/form-elements/description.element.ts
var nextUniqueId4 = 0;
var MteDescription = class extends MteElement {
  constructor() {
    super(...arguments);
    this.id = `mte-description--${nextUniqueId4++}`;
  }
  render() {
    return import_lit30.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteDescription.styles = [styles7, styles17];
__decorateClass([
  (0, import_decorators26.property)({ reflect: true })
], MteDescription.prototype, "id", 2);
MteDescription = __decorateClass([
  defineElement("mte-description")
], MteDescription);
var MteDescriptionText = class extends MteDescription {
};
MteDescriptionText = __decorateClass([
  defineElement("mte-description-text")
], MteDescriptionText);

// src/atomic/form-elements/error.element.ts
var import_lit32 = require("lit");
var import_decorators27 = require("lit/decorators.js");
var import_if_defined4 = require("lit-html/directives/if-defined.js");
var import_when = require("lit-html/directives/when.js");
var import_icons2 = require("@mortar/icons");

// src/atomic/form-elements/error.styles.ts
var import_lit31 = require("lit");
var styles18 = import_lit31.css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;align-items:center;background:rgb(var(--mte-core-danger-lighter-rgb));border-radius:var(--mte-border-radius-xs);color:rgb(var(--mte-core-danger-base-rgb));display:flex;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);font-weight:var(--mte-font-weight-medium);gap:var(--mte-space-xs);line-height:var(--mte-font-set-caption-line-height);margin:var(--mte-space-xs) 0;overflow:hidden;padding:0 var(--mte-space-xs);text-decoration:inherit;text-transform:inherit;width:100%}`;

// src/atomic/form-elements/error.element.ts
MteIconRegistryService.registerIcons([import_icons2.mtrIconAlertCircle]);
var nextUniqueId5 = 0;
var MteError = class extends MteElement {
  constructor() {
    super(...arguments);
    this.iconLibrary = "_default";
    this.hideIcon = false;
    this.id = `mte-error--${nextUniqueId5++}`;
  }
  render() {
    return import_lit32.html`${this.instanceStyles} ${(0, import_when.when)(
      !this.hideIcon,
      () => import_lit32.html`<mte-icon autosize part="icon" aria-hidden="true" name="${this.icon || "alert-circle"}" library="${(0, import_if_defined4.ifDefined)(this.iconLibrary)}"></mte-icon>`
    )}<slot></slot>`;
  }
};
MteError.styles = [styles7, styles18];
__decorateClass([
  (0, import_decorators27.property)()
], MteError.prototype, "iconLibrary", 2);
__decorateClass([
  (0, import_decorators27.property)()
], MteError.prototype, "icon", 2);
__decorateClass([
  (0, import_decorators27.property)({ type: Boolean })
], MteError.prototype, "hideIcon", 2);
__decorateClass([
  (0, import_decorators27.property)({ reflect: true })
], MteError.prototype, "id", 2);
MteError = __decorateClass([
  defineElement("mte-error")
], MteError);
var MteErrorText = class extends MteError {
};
MteErrorText = __decorateClass([
  defineElement("mte-error-text")
], MteErrorText);

// src/atomic/form-elements/hint.element.ts
var import_lit34 = require("lit");
var import_decorators28 = require("lit/decorators.js");

// src/atomic/form-elements/hint.styles.ts
var import_lit33 = require("lit");
var styles19 = import_lit33.css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mte-ink-2);display:block;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);font-weight:var(--mte-font-weight-medium);line-height:var(--mte-font-set-caption-line-height);margin:var(--mte-space-xs) 0;overflow:hidden;text-decoration:inherit;text-transform:inherit;width:100%}`;

// src/atomic/form-elements/hint.element.ts
var nextUniqueId6 = 0;
var MteHint = class extends MteElement {
  constructor() {
    super(...arguments);
    this.id = `mte-hint--${nextUniqueId6++}`;
  }
  render() {
    return import_lit34.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteHint.styles = [styles7, styles19];
__decorateClass([
  (0, import_decorators28.property)({ reflect: true })
], MteHint.prototype, "id", 2);
MteHint = __decorateClass([
  defineElement("mte-hint")
], MteHint);
var MteHintText = class extends MteHint {
};
MteHintText = __decorateClass([
  defineElement("mte-hint-text")
], MteHintText);

// src/atomic/form-elements/label.element.ts
var import_lit36 = require("lit");
var import_decorators29 = require("lit/decorators.js");

// src/atomic/form-elements/label.styles.ts
var import_lit35 = require("lit");
var styles20 = import_lit35.css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;align-items:center;color:inherit;cursor:inherit;display:block;font-size:var(--mte-font-set-body2-font-size);font-weight:var(--mte-font-set-body2-font-weight);font-weight:var(--mte-font-weight-bold);line-height:var(--mte-font-set-body2-line-height);margin:var(--mte-space-xs) 0;text-decoration:inherit;text-transform:inherit}:host([disabled]){color:var(--mte-disabled-4);cursor:not-allowed}.required{color:rgb(var(--mte-core-danger-base-rgb));padding-left:var(--mte-space-xs)}`;

// src/atomic/form-elements/label.element.ts
var nextUniqueId7 = 0;
var MteLabel = class extends DisabledMixin(MteElement) {
  constructor() {
    super(...arguments);
    this.id = `mte-label--${nextUniqueId7++}`;
  }
  render() {
    return import_lit36.html`${this.instanceStyles}<slot></slot>${this.showRequired ? import_lit36.html`<span class="required" aria-hidden="true">*</span>` : null}`;
  }
};
MteLabel.styles = [styles7, styles20];
__decorateClass([
  (0, import_decorators29.property)({ reflect: true })
], MteLabel.prototype, "id", 2);
__decorateClass([
  (0, import_decorators29.property)({ type: Boolean, reflect: true })
], MteLabel.prototype, "showRequired", 2);
MteLabel = __decorateClass([
  defineElement("mte-label")
], MteLabel);
var MteLabelText = class extends MteLabel {
};
MteLabelText = __decorateClass([
  defineElement("mte-label-text")
], MteLabelText);

// src/atomic/input/input.element.ts
var import_icons3 = require("@mortar/icons");
MteIconRegistryService.registerIcons([import_icons3.mtrIconClose]);
var nextUniqueId8 = 0;
var MteInput = class extends TabIndexMixin(
  DisabledMixin(
    DensityMixin(
      (0, import_form_control2.FormControlMixin)(
        FormFieldMixin(
          FieldsetMixin(
            SlotObserverMixin(
              PresetMixinFactory("MteInput")(
                StylePartsMixin(MteElement)
              )
            )
          )
        )
      )
    )
  ),
  { initialTabIndex: 0 }
) {
  constructor() {
    super(...arguments);
    this.id = `mte-input--${nextUniqueId8++}`;
    this.type = "text";
    this.name = "";
    this.controlled = false;
    this._value = "";
    this._currentSelection = { start: 0, end: 0 };
    this.placeholder = "";
    this.readonly = false;
    this.required = false;
    this.spellcheck = null;
    this.spellcheckFallback = false;
    this.withoutBorder = false;
    this.dirty = false;
    this.touched = false;
    this.initialized = false;
    /** @ignore */
    this.slotController = new SlotController(this, {
      updateOnChange: ["label", "description", "hint", "error", "prepend", "append"]
    });
    this.handleKeydown = (event) => {
      const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
      if (event.key === "Enter" && !hasModifier && this.form) {
        this.dirty = true;
        (0, import_form_helpers2.submit)(this.form);
      }
      this._onKeydown.emit(event);
    };
  }
  set value(value) {
    if (this.controlled) {
      this._value = value;
      if (this.controlElement) {
        this.controlElement.value = value;
        this.controlElement.selectionStart = this.controlElement.selectionEnd = this._pendingSelectionStart ?? value.length;
      }
    } else {
      this._value = value;
    }
  }
  get value() {
    return this._value;
  }
  handleValueChange() {
    this.setValue(this.value);
  }
  handleControlled() {
    if (this.controlled) {
      this.addEventListener("keydown", this.updateCursorPosition);
    } else {
      this.removeEventListener("keydown", this.updateCursorPosition);
    }
  }
  handleType() {
    if (this.type === "text" || this.type === "search") {
      this.spellcheckFallback = true;
      if (this.type === "search") {
        this.addEventListener("keydown", this.handleClearOnEscape);
      }
    } else {
      this.removeEventListener("keydown", this.handleClearOnEscape);
      this.spellcheckFallback = false;
    }
  }
  /** Updates the latest cursorSelection positions used while controlled */
  updateCursorPosition() {
    this._currentSelection = {
      start: this.validationTarget.selectionStart,
      end: this.validationTarget.selectionEnd
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("keydown", this.handleKeydown);
    this.addEventListener("invalid", this.handleInvalid);
    this.internals.form?.addEventListener("submit", (e) => {
      this.reportValidity();
    });
  }
  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this.handleType();
    if (document.readyState === "complete") {
      this.setValue(this.value);
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        this.setValue(this.value);
      });
    }
    this.initialized = true;
  }
  /** -- Form control validation overrides -- */
  validityCallback() {
    if (this.initialized) {
      this.dirty = true;
    }
    return this.error || this.validationTarget?.validationMessage;
  }
  reportValidity() {
    this.dirty = true;
    return this.checkValidity();
  }
  valueChangedCallback(value) {
    this.value = value;
  }
  resetFormControl() {
    this.value = "";
    this.dirty = false;
    this.touched = false;
  }
  /** -- TabIndex overrides -- */
  getTabIndexAdapter() {
    return this.validationTarget?.getAttribute("tabindex");
  }
  setTabIndexAdapter(value) {
    this.removeAttribute("tabindex");
    this.validationTarget?.setAttribute("tabindex", value);
  }
  removeTabIndexAdapter() {
    this.removeAttribute("tabindex");
    this.validationTarget?.removeAttribute("tabindex");
  }
  /**
   * Clicks this input
   */
  click() {
    this.validationTarget.click();
  }
  /**
   * Focuses this input
   */
  focus() {
    this.validationTarget.focus();
  }
  /**
   * Blurs this input
   */
  blur() {
    this.validationTarget.blur();
  }
  /**
   * Selects all the text.
   */
  select() {
    this.validationTarget.select();
  }
  /**
   * Sets the start and end positions of the current selection.
   *
   * @param selectionStart The 0-based index of the first selected character. An index greater than the length of the
   *  element's value is treated as pointing to the end of the value.
   * @param selectionEnd The 0-based index of the character after the last selected character. An index greater than
   *  the length of the element's value is treated as pointing to the end of the value.
   * @param [selectionDirection="none"] A string indicating the direction in which the selection is considered to
   *  have been performed.
   */
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    this.validationTarget.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  handleFocus(event) {
    this.focused = !this.readonly && true;
    this._onFocus.emit();
  }
  handleBlur(event) {
    this.touched = true;
    this.focused = !this.readonly && false;
    this._onBlur.emit();
  }
  handleInvalid(event) {
    this.value = event.target.value;
    this._onInvalid.emit({
      value: this.value,
      name: this.name
    });
  }
  handleBeforeInput(event) {
    this._onBeforeInput.emit({
      value: this.value,
      name: this.name,
      data: event.data,
      dataTransfer: event.dataTransfer,
      inputType: event.inputType,
      isComposing: event.isComposing
    });
    if (this.controlled) {
      event.preventDefault();
      const inputType = event.inputType;
      const currentValue = event.target.value;
      const inputText = event.data || "";
      const { start, end } = this._currentSelection;
      let newValue;
      let newStart;
      if (start !== end) {
        newValue = currentValue.slice(0, start) + (inputText || "") + currentValue.slice(end);
        newStart = start;
        if (inputType.startsWith("insert"))
          newStart += inputText.length;
      } else if (inputType.startsWith("insert")) {
        newValue = currentValue.slice(0, start) + inputText + currentValue.slice(end);
        newStart = start + inputText.length;
      } else if (inputType === "deleteContentBackward") {
        newStart = Math.max(0, start - 1);
        newValue = currentValue.slice(0, newStart) + currentValue.slice(start);
      } else if (inputType === "deleteContentForward") {
        newValue = currentValue.slice(0, start) + currentValue.slice(start + 1);
        newStart = start;
      } else {
        newValue = currentValue;
        newStart = start;
      }
      this._pendingSelectionStart = newStart;
      this._onInput.emit({
        value: newValue,
        name: this.name,
        data: event.data,
        dataTransfer: event.dataTransfer,
        inputType: event.inputType,
        isComposing: event.isComposing
      });
    }
  }
  handleInput(event) {
    if (!this.controlled) {
      this.value = event.target.value;
      this._onInput.emit({
        value: this.value,
        name: this.name,
        data: event.data,
        dataTransfer: event.dataTransfer,
        inputType: event.inputType,
        isComposing: event.isComposing
      });
    }
  }
  /** Handles the internal input's change events */
  handleChange(event) {
    this.value = event.target.value;
    this.dirty = true;
    this._onChange.emit({
      value: this.value,
      name: this.name
    });
  }
  /** Handles `keydown` events to clear while type="search" */
  handleClearOnEscape(e) {
    if (e.key === "Escape") {
      this.handleClear();
    }
  }
  /** Handles clear events while type="search" */
  handleClear(e) {
    if (e) {
      e.preventDefault();
    }
    const notPrevented = this._onSearchClear.emit(void 0, { cancelable: true });
    if (notPrevented) {
      if (!this.controlled) {
        this.value = "";
      }
      this._onInput.emit({
        value: "",
        name: this.name,
        data: "",
        dataTransfer: null,
        inputType: "",
        isComposing: false
      });
    }
  }
  render() {
    const validity = isSsr() ? true : this.checkValidity();
    const nativeErrorMessage = !validity ? this.validationMessage : null;
    const hasDescription = this.hasSlot("description", this.description);
    const hasHint = this.hasSlot("hint", this.hint);
    const hasError = this.hasSlot("error", this.error);
    const showError = hasError || nativeErrorMessage && this.dirty && this.touched;
    const describedBy = `${hasDescription ? "description" : ""} ${!hasError && hasHint ? "hint" : ""}${hasError ? "error" : ""}`.trim();
    const spellcheck = this.spellcheck ?? this.spellcheckFallback;
    return this.renderFieldsetTemplate(
      this.renderFormFieldTemplate(
        import_lit37.html`<input part="input" id="input" class="input" ?disabled="${this.disabled}" ?readonly="${this.readonly}" ?required="${this.required}" ?autofocus="${this.autofocus}" type="${this.type === "search" ? "text" : this.type}" title="${this.title}" name="${(0, import_if_defined5.ifDefined)(this.name)}" placeholder="${(0, import_if_defined5.ifDefined)(this.readonly ? null : this.placeholder)}" minlength="${(0, import_if_defined5.ifDefined)(this.minlength)}" maxlength="${(0, import_if_defined5.ifDefined)(this.maxlength)}" min="${(0, import_if_defined5.ifDefined)(this.min)}" max="${(0, import_if_defined5.ifDefined)(this.max)}" step="${(0, import_if_defined5.ifDefined)(this.step)}" .value="${(0, import_live.live)(this.value)}" autocapitalize="${(0, import_if_defined5.ifDefined)(this.type === "password" ? "off" : this.autocapitalize)}" autocomplete="${(0, import_if_defined5.ifDefined)(this.type === "password" ? "off" : this.autocomplete)}" autocorrect="${(0, import_if_defined5.ifDefined)(this.type === "password" ? "off" : this.autocorrect)}" spellcheck="${spellcheck}" pattern="${(0, import_if_defined5.ifDefined)(this.pattern)}" enterkeyhint="${(0, import_if_defined5.ifDefined)(this.enterkeyhint)}" inputmode="${(0, import_if_defined5.ifDefined)(this.inputmode)}" aria-describedby="${(0, import_if_defined5.ifDefined)(describedBy === "" ? void 0 : describedBy)}" aria-invalid="${showError ? "true" : "false"}" @change="${this.handleChange}" @beforeinput="${this.handleBeforeInput}" @input="${this.handleInput}" @focus="${this.handleFocus}" @blur="${this.handleBlur}"> ${this.type === "search" && this.value ? import_lit37.html`<mte-icon-button tabindex="-1" class="clear" icon="close" size="sm" density="compact" @mousedown="${this.handleClear}" aria-hidden="true"></mte-icon-button>` : null}`,
        { disabled: this.disabled, showError: hasError }
      ),
      {},
      { showRequired: this.showRequired ?? this.required }
    );
  }
};
MteInput.styles = [styles7, styles, styles6, styles5, styles10];
/** @ignore */
MteInput.formControlValidators = innerInputValidators;
__decorateClass([
  (0, import_decorators30.property)({ reflect: true })
], MteInput.prototype, "id", 2);
__decorateClass([
  (0, import_decorators30.property)({ reflect: true })
], MteInput.prototype, "type", 2);
__decorateClass([
  (0, import_decorators30.property)({ reflect: true })
], MteInput.prototype, "name", 2);
__decorateClass([
  (0, import_decorators30.property)({ type: Boolean })
], MteInput.prototype, "controlled", 2);
__decorateClass([
  (0, import_decorators30.query)("#input")
], MteInput.prototype, "controlElement", 2);
__decorateClass([
  (0, import_decorators30.property)()
], MteInput.prototype, "value", 1);
__decorateClass([
  (0, import_decorators30.property)()
], MteInput.prototype, "placeholder", 2);
__decorateClass([
  (0, import_decorators30.property)({ type: Boolean, reflect: true })
], MteInput.prototype, "readonly", 2);
__decorateClass([
  (0, import_decorators30.property)({ type: Boolean, reflect: true })
], MteInput.prototype, "required", 2);
__decorateClass([
  (0, import_decorators30.property)()
], MteInput.prototype, "pattern", 2);
__decorateClass([
  (0, import_decorators30.property)({ type: Number })
], MteInput.prototype, "minlength", 2);
__decorateClass([
  (0, import_decorators30.property)({ type: Number })
], MteInput.prototype, "maxlength", 2);
__decorateClass([
  (0, import_decorators30.property)({ type: Number })
], MteInput.prototype, "min", 2);
__decorateClass([
  (0, import_decorators30.property)({ type: Number })
], MteInput.prototype, "max", 2);
__decorateClass([
  (0, import_decorators30.property)()
], MteInput.prototype, "step", 2);
__decorateClass([
  (0, import_decorators30.property)()
], MteInput.prototype, "autocapitalize", 2);
__decorateClass([
  (0, import_decorators30.property)()
], MteInput.prototype, "autocorrect", 2);
__decorateClass([
  (0, import_decorators30.property)()
], MteInput.prototype, "autocomplete", 2);
__decorateClass([
  (0, import_decorators30.property)({ type: Boolean })
], MteInput.prototype, "autofocus", 2);
__decorateClass([
  (0, import_decorators30.property)()
], MteInput.prototype, "enterkeyhint", 2);
__decorateClass([
  (0, import_decorators30.property)({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (value) => !value || value === "false" ? false : true,
      toAttribute: (value) => {
        if (value) {
          return "true";
        } else if (value === false) {
          return "false";
        } else {
          return null;
        }
      }
    }
  })
], MteInput.prototype, "spellcheck", 2);
__decorateClass([
  (0, import_decorators30.property)()
], MteInput.prototype, "inputmode", 2);
__decorateClass([
  (0, import_decorators30.property)({ type: Boolean, reflect: true })
], MteInput.prototype, "withoutBorder", 2);
__decorateClass([
  eventEmitter()
], MteInput.prototype, "_onInput", 2);
__decorateClass([
  eventEmitter()
], MteInput.prototype, "_onBeforeInput", 2);
__decorateClass([
  eventEmitter()
], MteInput.prototype, "_onChange", 2);
__decorateClass([
  eventEmitter()
], MteInput.prototype, "_onInvalid", 2);
__decorateClass([
  eventEmitter()
], MteInput.prototype, "_onFocus", 2);
__decorateClass([
  eventEmitter()
], MteInput.prototype, "_onBlur", 2);
__decorateClass([
  eventEmitter()
], MteInput.prototype, "_onKeydown", 2);
__decorateClass([
  eventEmitter()
], MteInput.prototype, "_onSearchClear", 2);
__decorateClass([
  (0, import_decorators30.state)()
], MteInput.prototype, "dirty", 2);
__decorateClass([
  (0, import_decorators30.state)()
], MteInput.prototype, "touched", 2);
__decorateClass([
  (0, import_decorators30.query)("#input")
], MteInput.prototype, "validationTarget", 2);
__decorateClass([
  onUpdate("value")
], MteInput.prototype, "handleValueChange", 1);
__decorateClass([
  onUpdate("controlled")
], MteInput.prototype, "handleControlled", 1);
__decorateClass([
  onUpdate("type")
], MteInput.prototype, "handleType", 1);
MteInput = __decorateClass([
  defineElement("mte-input")
], MteInput);

// src/utilities/visually-hidden/visually-hidden.element.ts
var import_lit39 = require("lit");

// src/utilities/visually-hidden/visually-hidden.styles.ts
var import_lit38 = require("lit");
var styles21 = import_lit38.css`:host(:not(:focus-within)){height:1px!important;position:absolute!important;width:1px!important;clip:rect(0 0 0 0)!important;border:none!important;clip-path:inset(50%)!important;overflow:hidden!important;padding:0!important;white-space:nowrap!important}`;

// src/utilities/visually-hidden/visually-hidden.element.ts
var MteVisuallyHidden = class extends MteElement {
  render() {
    return import_lit39.html`<slot></slot>`;
  }
};
MteVisuallyHidden.styles = [styles7, styles21];
MteVisuallyHidden = __decorateClass([
  defineElement("mte-visually-hidden")
], MteVisuallyHidden);

// src/atomic/range-slider/range-slider.element.ts
var import_when2 = require("lit-html/directives/when.js");
var import_styles13 = require("@mortar/styles");
var import_class_map3 = require("lit-html/directives/class-map.js");
var MteRangeSlider = class extends TabIndexMixin(
  DisabledMixin(
    (0, import_form_control3.FormControlMixin)(
      FieldsetMixin(
        SlotObserverMixin(
          PresetMixinFactory("MteRangeSlider")(
            StylePartsMixin(MteElement)
          )
        )
      )
    )
  )
) {
  constructor() {
    super(...arguments);
    this.min = 0;
    this.max = 100;
    this.value = [0, 100];
    this.step = 1;
    this.name = "";
    this.readonly = false;
    this.hideValueLabel = false;
    this.withNumberInput = false;
    this.marks = null;
    this.withMarkLabels = false;
    this.numberInputMinWidth = null;
    this.labelFormatter = (value) => `${value}`;
    this.numberAriaLabelMin = "Start";
    this.numberAriaValueLabelMax = "End";
    this.startInputAriaLabel = "Start";
    this.endInputAriaLabel = "End";
    this.stepFixedDigits = 0;
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.value) {
      this.value = this.defaultValue || [this.min, this.max];
    }
    this.setValue(JSON.stringify(this.value));
    this.addEventListener("invalid", this.handleInvalid);
  }
  onValueChange() {
    const nextValues = [this.getNearestStep(this.value[0]), this.getNearestStep(this.value[1])];
    if (this.value[0] < this.min) {
      nextValues[0] = this.min;
    }
    if (this.value[1] < this.min) {
      nextValues[1] = this.min;
    }
    if (this.value[0] > this.max) {
      nextValues[0] = this.max;
    }
    if (this.value[1] > this.max) {
      nextValues[1] = this.max;
    }
    if (isNaN(this.value[0]) || typeof this.value[0] !== "number") {
      nextValues[0] = this.getNearestStep(this.defaultValue[0] | this.min);
    }
    if (isNaN(this.value[1]) || typeof this.value[1] !== "number") {
      nextValues[1] = this.getNearestStep(this.defaultValue[1] | this.max);
    }
    this.value = nextValues;
    this.setNumericInputValue(this.value[0], 0);
    this.setNumericInputValue(this.value[1], 1);
    this.updateValueStyles();
    this.setValue(JSON.stringify(this.value));
  }
  async onWithNumberInputChange() {
    await this.updateComplete;
    if (this.withNumberInput) {
      this.setNumericInputValue(this.value[0], 0);
      this.setNumericInputValue(this.value[1], 1);
    }
  }
  onStepIncrementChange() {
    if (this.step === 0) {
      this.step = 1;
    }
    const stringStepIncrement = this.step.toString();
    if (stringStepIncrement.includes(".")) {
      this.stepFixedDigits = stringStepIncrement.split(".")[1].length;
    } else {
      this.stepFixedDigits = 0;
    }
    this.value = [this.getNearestStep(this.value[0]), this.getNearestStep(this.value[1])];
    if (this.withNumberInput) {
      this.setNumericInputValue(this.value[0], 0);
      this.setNumericInputValue(this.value[1], 1);
    }
    this.setValue(JSON.stringify(this.value));
  }
  resetFormControl() {
    if (this.defaultValue) {
      this.value = this.defaultValue;
    }
    this.setValue(JSON.stringify(this.value));
  }
  validityCallback() {
    return this.error || this.validationTarget?.validationMessage;
  }
  getFixedPointValue(value) {
    return Number.parseFloat(Number(value).toFixed(this.stepFixedDigits));
  }
  getNearestStep(nextValue) {
    const numericValue = this.getFixedPointValue(nextValue);
    return this.getFixedPointValue(Math.round(numericValue / this.step) * this.step);
  }
  handleInput(e) {
    const target = e.target;
    const index = Number(target.dataset.index);
    const nextValue = [...this.value];
    nextValue[index] = this.getFixedPointValue(target.value);
    if (this.readonly) {
      target.value = this.value[target.dataset.index];
      return;
    }
    if (index === 0 && nextValue[index] > this.value[1]) {
      nextValue[0] = this.value[1];
    }
    if (index === 1 && nextValue[index] < this.value[0]) {
      nextValue[1] = this.value[0];
    }
    this.value = nextValue;
    this.setValue(JSON.stringify(this.value));
    if (this.withNumberInput) {
      this.setNumericInputValue(nextValue[0], 0);
      this.setNumericInputValue(nextValue[1], 1);
    }
    this._onInput.emit({ value: this.value, name: this.name });
  }
  handleNumberInput(e) {
    e.stopPropagation();
    const nextValue = [...this.value];
    const index = Number(e.target.dataset.index);
    const numericValue = this.getFixedPointValue(e.detail.value);
    nextValue[index] = numericValue;
    this.value = nextValue;
    this.setValue(JSON.stringify(this.value));
    this._onInput.emit({ value: this.value, name: this.name });
  }
  handleNumericChange(e) {
    e.stopPropagation();
    const nextValue = [...this.value];
    const index = Number(e.target.dataset.index);
    const numericValue = this.getFixedPointValue(e.detail.value);
    nextValue[index] = this.getNearestStep(numericValue);
    const minValue = index === 0 ? this.min : this.value[0];
    const maxValue = index === 1 ? this.max : this.value[1];
    if (numericValue >= minValue && numericValue <= maxValue) {
      nextValue[index] = numericValue;
    }
    if (numericValue <= minValue && index === 1) {
      nextValue[index] = minValue;
    }
    if (numericValue >= maxValue && index === 0) {
      nextValue[index] = maxValue;
    }
    this.value = nextValue;
    this.setValue(JSON.stringify(this.value));
    this.setNumericInputValue(this.value[index], index);
    this.handleChange();
  }
  handleChange() {
    this._onChange.emit({ value: this.value, name: this.name });
  }
  setNumericInputValue(value, index) {
    const id = index === 0 ? "#number-input-start" : "#number-input-end";
    const inputElement = this.shadowRoot?.querySelector(id);
    if (inputElement) {
      inputElement.value = value.toString();
    }
  }
  handleInvalid() {
    this._onInvalid.emit({
      value: this.value,
      name: this.name
    });
  }
  updateValueStyles() {
    const leftThumbPosition = Math.round(
      (this.value[0] - this.min) / (this.max - this.min) * 100
    );
    const rightThumbPosition = Math.round(
      (this.value[1] - this.min) / (this.max - this.min) * 100
    );
    this.setInstanceStyle("input-value-styles", (0, import_styles13.selectorFactory)(this.instanceStyleSelectorRoot), {
      "--first-value-clip": `${this.min + (rightThumbPosition - leftThumbPosition) / 2}%`,
      "--last-value-clip": `${leftThumbPosition + (rightThumbPosition - leftThumbPosition) / 2}%`,
      "--first-value-position": `${leftThumbPosition}%`,
      "--last-value-position": `${rightThumbPosition}%`
    });
  }
  render() {
    const hasHint = !!this.hasSlot("hint", this.hint);
    const hasError = !!this.hasSlot("error", this.error);
    const hasDescription = !!this.hasSlot("description", this.description);
    return import_lit40.html`${this.instanceStyles}${this.renderFieldsetTemplate(
      import_lit40.html`<div class="range-wrapper"><div id="prefix" class="prefix" part="prefix"><slot name="prefix"></slot></div><div class="range" part="range"><input id="range-value-start" data-index="0" type="range" multiple="multiple" class="range-input" part="rangeInputStart" value="${`${this.value?.[0]}`}" @input="${this.handleInput}" @change="${this.handleChange}" part="rangeInputStart" aria-valuetext="${this.labelFormatter(this.value?.[0])}" ?disabled="${this.disabled}" min="${this.min}" max="${this.max}" step="${this.step}" aria-label="start" aria-labelledby="range-value-start label" aria-describedby="${`${hasHint ? "hint " : ""}${hasError ? "error " : ""}${hasDescription ? "description" : ""}`}"> ${this.marks && this.marks.length > 0 ? import_lit40.html`<div role="listbox" class="marks" part="marks" id="marks">${this.marks.map(
        ({ value, label }) => import_lit40.html`<span role="option" class="mark" part="markLabel" value="${value}" style="${`left: ${value}%;`}" data-option-percent="${`${value}%`}">${this.withMarkLabels ? label : null}</span>`
      )}</div>` : null}<div class="thumb-container first-thumb" part="thumb-container-start"><div class="thumb" part="thumb-start"></div>${(0, import_when2.when)(
        !this.hideValueLabel,
        () => import_lit40.html`<output part="value-label" for="range" aria-hidden="true" class="value-label">${this.labelFormatter(this.value?.[0])}</output>`
      )}</div><input id="range-value-end" type="range" data-index="1" class="range-input" part="rangeInputEnd" value="${`${this.value?.[1]}`}" @input="${this.handleInput}" @change="${this.handleChange}" aria-valuetext="${this.labelFormatter(this.value?.[1])}" ?disabled="${this.disabled}" min="${this.min}" max="${this.max}" step="${this.step}" aria-label="end" aria-labelledby="range-value-end label" aria-describedby="${`${hasHint ? "hint " : ""}${hasError ? "error" : ""}`}"><div class="thumb-container last-thumb" part="thumb-container-end"><div class="thumb" part="thumb-end"></div>${(0, import_when2.when)(
        !this.hideValueLabel,
        () => import_lit40.html`<output aria-hidden="true" part="value-label" for="range-value-end" class="value-label">${this.labelFormatter(this.value?.[1])}</output>`
      )}</div></div><div id="suffix" class="suffix" part="suffix"><slot name="suffix"></slot></div></div>`
    )} ${this.withNumberInput ? import_lit40.html`<mte-visually-hidden><label id="number-input-start-label" for="number-input-start">${this.numberAriaLabelMin || this.startInputAriaLabel} ${this.label}</label></mte-visually-hidden><mte-input class="${(0, import_class_map3.classMap)({
      ["number-input"]: true,
      ["with-description"]: !!this.description,
      ["with-label"]: !!this.label
    })}" id="number-input-start" aria-labelledby="number-input-start-label" data-index="0" ?disabled="${this.disabled}" ?readonly="${this.readonly}" part="numberInputStart" type="number" density="compact" min="${this.min}" step="${this.step}" max="${this.max}" w="min-content" .se="${{
      "--control-min-width": this.numberInputMinWidth || (this.max.toString().length > 2 ? `calc(${this.max.toString().length - 2}ch + 100px)` : "100px")
    }}" @onInput="${this.handleNumberInput}" @onChange="${this.handleNumericChange}"></mte-input>` : null} ${this.withNumberInput ? import_lit40.html`<mte-visually-hidden><label id="number-input-end-label" for="number-input-end">${this.numberAriaValueLabelMax || this.endInputAriaLabel} ${this.label}</label></mte-visually-hidden><mte-input id="number-input-end" class="${(0, import_class_map3.classMap)({
      ["number-input"]: true,
      ["with-description"]: !!this.description,
      ["with-label"]: !!this.label
    })}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" data-index="1" part="numberInputEnd" density="compact" type="number" min="${this.min}" step="${this.step}" max="${this.max}" w="min-content" aria-labelledby="number-input-end-label" .se="${{
      "--control-min-width": this.numberInputMinWidth || (this.max.toString().length > 2 ? `calc(${this.max.toString().length - 2}ch + 100px)` : "100px")
    }}" @onInput="${this.handleNumberInput}" @onChange="${this.handleNumericChange}"></mte-input>` : null}`;
  }
};
MteRangeSlider.styles = [styles7, styles6, styles5, styles8, styles9];
__decorateClass([
  (0, import_decorators31.property)({ type: Number, reflect: true })
], MteRangeSlider.prototype, "min", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Number, reflect: true })
], MteRangeSlider.prototype, "max", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Array })
], MteRangeSlider.prototype, "defaultValue", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Array, reflect: true })
], MteRangeSlider.prototype, "value", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Number, reflect: true })
], MteRangeSlider.prototype, "step", 2);
__decorateClass([
  (0, import_decorators31.property)({ reflect: true })
], MteRangeSlider.prototype, "name", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Boolean, reflect: true })
], MteRangeSlider.prototype, "readonly", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Boolean })
], MteRangeSlider.prototype, "hideValueLabel", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Boolean })
], MteRangeSlider.prototype, "withNumberInput", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Array })
], MteRangeSlider.prototype, "marks", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Boolean })
], MteRangeSlider.prototype, "withMarkLabels", 2);
__decorateClass([
  (0, import_decorators31.property)()
], MteRangeSlider.prototype, "numberInputMinWidth", 2);
__decorateClass([
  (0, import_decorators31.property)({ attribute: false })
], MteRangeSlider.prototype, "labelFormatter", 2);
__decorateClass([
  (0, import_decorators31.property)()
], MteRangeSlider.prototype, "numberAriaLabelMin", 2);
__decorateClass([
  (0, import_decorators31.property)()
], MteRangeSlider.prototype, "numberAriaValueLabelMax", 2);
__decorateClass([
  (0, import_decorators31.property)()
], MteRangeSlider.prototype, "startInputAriaLabel", 2);
__decorateClass([
  (0, import_decorators31.property)()
], MteRangeSlider.prototype, "endInputAriaLabel", 2);
__decorateClass([
  eventEmitter()
], MteRangeSlider.prototype, "_onChange", 2);
__decorateClass([
  eventEmitter()
], MteRangeSlider.prototype, "_onInput", 2);
__decorateClass([
  eventEmitter()
], MteRangeSlider.prototype, "_onInvalid", 2);
__decorateClass([
  (0, import_decorators31.query)("#range-value-start")
], MteRangeSlider.prototype, "validationTarget", 2);
__decorateClass([
  onUpdate(["value", "min", "max"], { on: "both" })
], MteRangeSlider.prototype, "onValueChange", 1);
__decorateClass([
  onUpdate(["withNumberInput"], { on: "both" })
], MteRangeSlider.prototype, "onWithNumberInputChange", 1);
__decorateClass([
  onUpdate(["step"])
], MteRangeSlider.prototype, "onStepIncrementChange", 1);
MteRangeSlider = __decorateClass([
  defineElement("mte-range-slider")
], MteRangeSlider);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9yYW5nZS1zbGlkZXIvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9yYW5nZS1zbGlkZXIiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYmFzZS1jbGFzc2VzL210ZS5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9jc3MtaW4tanMvY3NzLWluLWpzLnByb3BlcnR5LW1hcHBlcnMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Nzcy1pbi1qcy9jc3MtaW4tanMudXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9lbnZpcm9ubWVudC51dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Zvcm0udXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9yZWFjdGl2ZS1zaWduYWwudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYmFzZS1jbGFzc2VzL2NvbnRlbnQuYmFzZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9hdHRyaWJ1dGUtY29udmVydGVyL3Jlc3BvbnNpdmUtYXR0cmlidXRlLmNvbnZlcnRlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb25zdGFudHMvaGViLWxvZ28udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29udHJvbGxlcnMvc2xvdC5jb250cm9sbGVyLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZpY2VzL3RoZW1lLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc2VydmljZXMvcG9ydGFsLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc2VydmljZXMvaGlzdG9yeS1hcGkuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy9sb2NhbGl6ZS5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbnRyb2xsZXJzL3BvcnRhbC5jb250cm9sbGVyLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYnV0dG9uL2J1dHRvbi5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvaWNvbi9pY29uLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Rvb2xiYXIvdG9vbGJhci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvY2FyZC9jYXJkLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90cmVlL3RyZWUucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RhZy90YWcucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2JhZGdlL2JhZGdlLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9saW5rL2xpbmsucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2FsZXJ0L2FsZXJ0LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pbnB1dC9pbnB1dC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZHJhd2VyL2RyYXdlci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYXNpZGUvYXNpZGUucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWItaXRlbS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbW9kYWwvbW9kYWwucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2NoZWNrYm94L2NoZWNrYm94LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9yYWRpby9yYWRpby5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbmF2L25hdi5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc3dpdGNoL3N3aXRjaC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbmF0aXZlLXNlbGVjdC9uYXRpdmUtc2VsZWN0LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90ZXh0YXJlYS90ZXh0YXJlYS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc2tlbGV0b24vc2tlbGV0b24ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3NsaWRlci9zbGlkZXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3JhbmdlLXNsaWRlci9yYW5nZS1zbGlkZXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3NlZ21lbnRlZC1jb250cm9sL3NlZ21lbnRlZC1jb250cm9sLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0LnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXQubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXQuZGVjb3JhdG9yLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0LmNvbnRleHQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29udHJvbGxlcnMvYXBwbGllZC1wcmVzZXQtY29udGV4dC5jb250cm9sbGVyLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2RlY29yYXRvcnMvb24tdXBkYXRlLmRlY29yYXRvci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9kZWNvcmF0b3JzL2V2ZW50LWVtaXR0ZXIuZGVjb3JhdG9yLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2RlY29yYXRvcnMvZGVmaW5lLWVsZW1lbnQuZGVjb3JhdG9yLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9jb2xvci5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZGVuc2l0eS5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZGVuc2l0eS5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2Rpc2FibGVkLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9pbnZlcnNlLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9pbnZlcnNlLm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvc2l6ZS5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvdGFiaW5kZXgubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3JhZGl1cy5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvc3R5bGUtcGFydHMubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9idXR0b24ubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9vdmVybGF5Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9vdmVybGF5Lm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2ZpZWxkc2V0Lm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2Zvcm0tZmllbGQubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9hdXRvLWFjdGl2ZS1saW5rLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9zbG90LW9ic2VydmVyLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9jaGVja2JveC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvbWFwcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvYW9tLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9tdXRhdGlvbi1vYnNlcnZlcnMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL3V0aWxzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9WYWxpZGl0eVN0YXRlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9DdXN0b21TdGF0ZVNldC50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL3BhdGNoLWZvcm0tcHJvdG90eXBlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9lbGVtZW50LWludGVybmFscy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvbGFuZy5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvd2FpdC1mb3ItZncubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc3R5bGVzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3N0eWxlcy9iYXNlLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3NsaWRlci9zbGlkZXIuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcmFuZ2Utc2xpZGVyL3JhbmdlLXNsaWRlci5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pbnB1dCIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2lucHV0L2lucHV0LnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2J1dHRvbiIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2J1dHRvbi9idXR0b24uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvaWNvbi9pY29uLmVsZW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pY29uL2ljb24uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvaWNvbi9pY29uLXJlZ2lzdHJ5LnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9wcm9ncmVzcy1zcGlubmVyIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5jb21tb24udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9wcm9ncmVzcy1zcGlubmVyL3NwaW5uZXIuZWxlbWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2J1dHRvbi9idXR0b24tY29tbW9uLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYnV0dG9uIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYnV0dG9uL2ljb24tYnV0dG9uLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Rvb2x0aXAiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90b29sdGlwL3Rvb2x0aXAuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9vdmVybGF5LnV0aWxpdGllcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvdXRpbGl0aWVzL292ZXJsYXktdHJpZ2dlciIsICIuLi8uLi8uLi8uLi9zcmMvdXRpbGl0aWVzL292ZXJsYXktdHJpZ2dlci9vdmVybGF5LXRyaWdnZXIuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZm9ybS1lbGVtZW50cy9kZXNjcmlwdGlvbi5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZm9ybS1lbGVtZW50cy9kZXNjcmlwdGlvbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9mb3JtLWVsZW1lbnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZm9ybS1lbGVtZW50cy9lcnJvci5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9mb3JtLWVsZW1lbnRzL2hpbnQuZWxlbWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2Zvcm0tZWxlbWVudHMvaGludC5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9mb3JtLWVsZW1lbnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZm9ybS1lbGVtZW50cy9sYWJlbC5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL3V0aWxpdGllcy92aXN1YWxseS1oaWRkZW4vdmlzdWFsbHktaGlkZGVuLmVsZW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL3V0aWxpdGllcy92aXN1YWxseS1oaWRkZW4vdmlzdWFsbHktaGlkZGVuLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0ICogZnJvbSAnLi9yYW5nZS1zbGlkZXIuZWxlbWVudCc7XG4iLCBudWxsLCAiLyogZXNsaW50LWRpc2FibGUgd2Mvbm8tc2VsZi1jbGFzcyAqL1xuaW1wb3J0IHsgcHJvcGVydHksIHN0YXRlIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBzZWxlY3RvckZhY3RvcnksIFNlbGVjdG9yRmFjdG9yeSB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7XG4gIGNvbnN0cnVjdEluc3RhbmNlU3R5bGVzLFxuICBnZW5lcmF0ZVNlbGVjdG9yc0Zyb21TdHlsZU1hcCxcbiAgU2VsZWN0b3JTdHlsZXMsXG4gIFN0eWxlTWFwLFxuICBVbnN1YnNjcmliZXIsXG59IGZyb20gJy4uL3V0aWxpdGllcyc7XG5pbXBvcnQgeyB1bnNhZmVIVE1MIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy91bnNhZmUtaHRtbC5qcyc7XG5pbXBvcnQgeyBNb3J0YXJQcmVzZXRUaGVtZSB9IGZyb20gJy4uL3ByZXNldHMnO1xuXG4vLyBEaXNhYmxlIHRoaXMgd2FybmluZyBmb3Igbm93IGJ5IHByZS1tYXJraW5nIGl0IGFzIGlzc3VlZCBzbyB1c2VycyBkb24ndCBoYXZlIHRvIHNlZSBpdFxuLy8gVE9ETzogQXNrIGxpdCB0ZWFtIHdoeSB0aGlzIGlzIHRocm93biBldmVyeXdoZXJlIGFuZCB3aGF0IGFsdGVybmF0aXZlcyBhcmUgZm9yIHByZXNldCBzb2x1dGlvblxuZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncyA/Pz0gbmV3IFNldCgpO1xuZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncy5hZGQoXG4gICdPdmVycmlkaW5nIFJlYWN0aXZlRWxlbWVudC5nZXRQcm9wZXJ0eURlc2NyaXB0b3IoKSBpcyBkZXByZWNhdGVkLiBUaGUgb3ZlcnJpZGUgd2lsbCBub3QgYmUgY2FsbGVkIHdpdGggc3RhbmRhcmQgZGVjb3JhdG9ycyBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy9uby1vdmVycmlkZS1nZXQtcHJvcGVydHktZGVzY3JpcHRvciBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nXG4pO1xuXG5leHBvcnQgY2xhc3MgTXRlRWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwcml2YXRlIF9faW5zdGFuY2VTdHlsZVNoZWV0TWFwID0gbmV3IE1hcDxzdHJpbmcsIFNlbGVjdG9yU3R5bGVzW10+KCk7XG4gIHByaXZhdGUgX19pbnN0YW5jZVN0eWxlU2hlZXROZWVkc1VwZGF0ZSA9IGZhbHNlO1xuXG4gIC8qKiBTZXQgdG8gdHJ1ZSB3aGVuIGZpcnN0VXBkYXRlZCBpcyBmaXJzdCBjYWxsZWQgKi9cbiAgcHJvdGVjdGVkIF9fZmlyc3RVcGRhdGVkID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIGluc3RhbmNlU3R5bGVzO1xuXG4gIC8qKlxuICAgKiBBbGwgc3VicyBwdXNoZWQgdG8gdGhpcyBhcnJheSB3aWxsIGJlIGNsZWFyZWQgaW4gdGhlIGRpc2Nvbm5lY3RlZENhbGxiYWNrXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN1YnM6IFVuc3Vic2NyaWJlcltdID0gW107XG5cbiAgLyoqIFN0eWxlIG1hcHBpbmdzIHRoYXQgYXJlIGFwcGxpZWQgdG8gdGhlIGhvc3QgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCByZWZsZWN0OiB0cnVlIH0pIHNlPzogU3R5bGVNYXA7XG5cbiAgLyoqXG4gICAqIFRoZSB0aGVtZSB0byB1c2UgZm9yIHN0eWxpbmcgdGhpcyBjb21wb25lbnQuIE92ZXJyaWRlcyB0aGUgZ2xvYmFsIHByZXNldCBmb3IgdGhpcyBpbnN0YW5jZSBvZiB0aGlzIGNvbXBvbmVudC5cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgYXR0cmlidXRlOiAnZGF0YS1tdGUtdGhlbWUnIH0pXG4gIHNldCB0aGVtZSh0aGVtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLl90aGVtZTtcbiAgICB0aGlzLl90aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBvbGRWYWx1ZSk7XG4gICAgLy8gVE9ETzogZmlndXJlIG91dCBhIGJldHRlciB3YXkgdG8gc29sdmUgdGhpcyBmb3IgYWxsIHByZXNldHNcbiAgICBpZiAodGhpcy5fX2xvY2FsUHJlc2V0VGhlbWUpIHtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXF1ZXN0VXBkYXRlKCd0aGVtZScsIG51bGwpKTtcbiAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB0aGlzLnJlcXVlc3RVcGRhdGUoJ3RoZW1lJywgbnVsbCkpO1xuICAgIH1cbiAgfVxuICBnZXQgdGhlbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWUgPz8gdGhpcy5fX2xvY2FsUHJlc2V0VGhlbWU/Lm5hbWU7XG4gIH1cbiAgcHJpdmF0ZSBfdGhlbWU6IHN0cmluZztcblxuICAvKiogVXNlZCB0byBkZWNsYXJlIGEgbG9jYWwgdGhlbWUgdmFsdWUgZGV0ZXJtaW5lZCBieSB0aGUgbG9jYWwgcHJlc2V0IGlmIGl0IGlzIHNldC4gKi9cbiAgQHN0YXRlKCkgcHJvdGVjdGVkIF9fbG9jYWxQcmVzZXRUaGVtZTogTW9ydGFyUHJlc2V0VGhlbWU7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgc2VsZWN0b3IgdG8gaGF2ZSBpbnN0YW5jZSBzdHlsZXMgdGFyZ2V0IGEgc3BlY2lmaWMgaW5uZXIgZWxlbWVudC5cbiAgICogVXNlZnVsIGluIHNwZWNpZmljIHNjZW5hcmlvcyB3aGVyZSBmb2N1cyBpcyBkZWxlZ2F0ZWQgbGlrZSBidXR0b25zLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0IHRoaXMgcmVwZWF0cyBgOmhvc3RgIHNpeCB0aW1lcyB0byBwcm92aWRlIGEgc3BlY2lmaWNpdHkgb2YgNlxuICAgKi9cbiAgcHJvdGVjdGVkIGluc3RhbmNlU3R5bGVTZWxlY3RvclJvb3QgPSAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0JztcblxuICAvKipcbiAgICogQ2FuIGJlIGNhbGxlZCBieSBkZXJpdmVkIGNsYXNzZXMgdG8gcmVnaXN0ZXIgbmV3IGluc3RhbmNlIGxldmVsIGR5bmFtaWMgc3R5bGVzLlxuICAgKiBXaGVuIGNhbGxlZCB0aGUgaW5zdGFuY2Ugc3R5bGVzaGVldCB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIGxhdGVzdCBzdHlsZXMgdGhpcyB1cGRhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgc2V0SW5zdGFuY2VTdHlsZShpZDogc3RyaW5nLCBzZWxlY3RvcjogU2VsZWN0b3JGYWN0b3J5LCBzdHlsZU1hcDogU3R5bGVNYXApIHtcbiAgICAvLyBXZSBwYXJzZSBhbGwgc3R5bGUgaW5mb3JtYXRpb24gaGVyZSBhbmQgc2NvcGUgaXQgdG8gdGhlIGdpdmVuIGlkLiBUaGlzIGVuc3VyZXMgd2VcbiAgICAvLyBvbmx5IGV2ZXIgbmVlZCB0byByZS1wYXJzZSB0aGlzIHBvcnRpb24gb2Ygc3R5bGUgaW5mb3JtYXRpb24gd2hlbiBpdHMgYXNzb2NpYXRlZFxuICAgIC8vIGlkIGlzIHVwZGF0ZWQgYWdhaW4uXG4gICAgdGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE1hcC5zZXQoaWQsIGdlbmVyYXRlU2VsZWN0b3JzRnJvbVN0eWxlTWFwKHNlbGVjdG9yLCBzdHlsZU1hcCkpO1xuICAgIHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXROZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICAvKiogQSBjdXN0b20gaG9vayB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIGluIGRlcml2ZWQgY2xhc3NlcyB0byBzZXQgaW5zdGFuY2Ugc3R5bGVzIGFzIG5lZWRlZCAqL1xuICBwcm90ZWN0ZWQgdXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKSB7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ3NlJykpIHtcbiAgICAgIHRoaXMuc2V0SW5zdGFuY2VTdHlsZSgnc2UnLCBzZWxlY3RvckZhY3RvcnkodGhpcy5pbnN0YW5jZVN0eWxlU2VsZWN0b3JSb290KSwgdGhpcy5zZSA/PyB7fSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHdpbGxVcGRhdGUoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIud2lsbFVwZGF0ZShjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gQ2FsbCB0aGUgdXBkYXRlSW5zdGFuY2VTdHlsZXMgaG9va1xuICAgIHRoaXMudXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKTtcblxuICAgIC8vIENoZWNrIGlmIGluc3RhbmNlIHN0eWxlcyBuZWVkIHRvIGJlIHJlcmVuZGVyZWRcbiAgICBpZiAodGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlU3R5bGVzID0gdW5zYWZlSFRNTChcbiAgICAgICAgYDxzdHlsZSBpZD1cIl9faW5zdGFuY2Utc3R5bGVzXCI+JHtjb25zdHJ1Y3RJbnN0YW5jZVN0eWxlcyhcbiAgICAgICAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TWFwXG4gICAgICAgICl9PC9zdHlsZT5gXG4gICAgICApO1xuICAgICAgdGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICB0aGlzLl9fZmlyc3RVcGRhdGVkID0gdHJ1ZTtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICB0aGlzLnN1YnMuZm9yRWFjaCgodW5zdWIpID0+IHVuc3ViKCkpO1xuICAgIHRoaXMuc3VicyA9IFtdO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgUHJvcGVydHlNYXBwZXIsIFN0eWxlUHJvcGVydHkgfSBmcm9tICcuL2Nzcy1pbi1qcy50eXBlcyc7XG5cbmNvbnN0IHByb3BlcnR5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBzdHJpbmdbXT4gPSB7XG4gIG06ICdtYXJnaW4nLFxuICBteDogWydtYXJnaW5MZWZ0JywgJ21hcmdpblJpZ2h0J10sXG4gIG15OiBbJ21hcmdpblRvcCcsICdtYXJnaW5Cb3R0b20nXSxcbiAgbXQ6ICdtYXJnaW5Ub3AnLFxuICBtcjogJ21hcmdpblJpZ2h0JyxcbiAgbWI6ICdtYXJnaW5Cb3R0b20nLFxuICBtbDogJ21hcmdpbkxlZnQnLFxuICBwOiAncGFkZGluZycsXG4gIHB4OiBbJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCddLFxuICBweTogWydwYWRkaW5nVG9wJywgJ3BhZGRpbmdCb3R0b20nXSxcbiAgcHQ6ICdwYWRkaW5nVG9wJyxcbiAgcHI6ICdwYWRkaW5nUmlnaHQnLFxuICBwYjogJ3BhZGRpbmdCb3R0b20nLFxuICBwbDogJ3BhZGRpbmdMZWZ0JyxcbiAgZDogJ2Rpc3BsYXknLFxuICBhOiAnYWxpZ25JdGVtcycsXG4gIGo6ICdqdXN0aWZ5Q29udGVudCcsXG4gIGRpcmVjdGlvbjogJ2ZsZXhEaXJlY3Rpb24nLFxuICBzaHJpbms6ICdmbGV4U2hyaW5rJyxcbiAgZ3JvdzogJ2ZsZXhHcm93JyxcbiAgd3JhcDogJ2ZsZXhXcmFwJyxcbiAgdzogJ3dpZHRoJyxcbiAgbWF4dzogJ21heFdpZHRoJyxcbiAgbWludzogJ21pbldpZHRoJyxcbiAgaDogJ2hlaWdodCcsXG4gIG1heGg6ICdtYXhIZWlnaHQnLFxuICBtaW5oOiAnbWluSGVpZ2h0JyxcbiAgZnM6ICdmb250U2l6ZScsXG4gIGZ3OiAnZm9udFdlaWdodCcsXG4gIGJnOiAnYmFja2dyb3VuZCcsXG4gIGM6ICdjb2xvcicsXG4gIGVsZXZhdGlvbjogJ2JveFNoYWRvdycsXG59O1xuXG4vKiogTWFwcyBwcm9wZXJ0eSBzaG9ydGhhbmQgdmFsdWVzIHRvIG9uZSBvciBtYW55IGZ1bGwgY3NzIHByb3BlcnRpZXMgKi9cbmV4cG9ydCBjb25zdCBwcm9wU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMucmVkdWNlKChhY2MsIHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRQcm9wcyA9IHByb3BlcnR5TWFwW3Byb3BNYXAucHJvcF0gPz8gcHJvcE1hcC5wcm9wO1xuICAgIHJldHVybiBbXG4gICAgICAuLi5hY2MsXG4gICAgICAuLi4oQXJyYXkuaXNBcnJheShtYXBwZWRQcm9wcylcbiAgICAgICAgPyBtYXBwZWRQcm9wcy5tYXAoKHByb3ApID0+ICh7IHByb3AsIHZhbHVlOiBwcm9wTWFwLnZhbHVlIH0pKVxuICAgICAgICA6IFt7IHByb3A6IG1hcHBlZFByb3BzLCB2YWx1ZTogcHJvcE1hcC52YWx1ZSB9XSksXG4gICAgXTtcbiAgfSwgW10pO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBAbW9ydGFyL3N0eWxlcyBjb25maWcgdmFsdWUgZm9yIGEgZ2l2ZW4gZG90IG5vdGF0ZWQgc3RyaW5nLlxuICogTnVtYmVycyBhbmQgbm9uLWRvdCBub3RhdGVkIHN0cmluZyB3aWxsIGp1c3QgYmUgcmV0dXJuZWQgYXMgaXMuXG4gKi9cbmV4cG9ydCBjb25zdCBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlID0gKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIgPT4ge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbmZpZ1BhdGggPSB2YWx1ZS5zcGxpdCgnLicpO1xuICAgICAgY29uc3QgY29uZmlnVmFsdWUgPSBjb25maWdQYXRoLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGFjY1trZXldO1xuICAgICAgfSwgY29uZmlnKTtcbiAgICAgIHJldHVybiBjb25maWdWYWx1ZSA/PyB2YWx1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufTtcblxuLyoqIE1hcHMgZG90IG5vdGF0ZWQgc3RyaW5nIHZhbHVlcyB0byB0aGVtZSBjb25maWcgdmFyaWFibGVzICovXG5leHBvcnQgY29uc3QgZG90U3RyaW5nVG9Db25maWdWYWx1ZU1hcHBlcjogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMucmVkdWNlKChhY2MsIHByb3BNYXApID0+IHtcbiAgICBjb25zdCBjb25maWdWYWx1ZSA9IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUocHJvcE1hcC52YWx1ZSk7XG4gICAgaWYgKGNvbmZpZ1ZhbHVlKSB7XG4gICAgICBwcm9wTWFwLnZhbHVlID0gY29uZmlnVmFsdWUgPz8gcHJvcE1hcC52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi5hY2MsIHByb3BNYXBdO1xuICB9LCBbXSk7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwTnVtYmVyVG9QeCA9ICh2YWw6IHN0cmluZyB8IG51bWJlciB8IG51bGwpID0+IHtcbiAgaWYgKCF2YWwpIHtcbiAgICByZXR1cm4gdmFsIGFzIG51bGw7XG4gIH1cbiAgcmV0dXJuICFpc05hTihOdW1iZXIodmFsKSkgPyBgJHt2YWx9cHhgIDogKHZhbCBhcyBzdHJpbmcpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcFB4VG9OdW1iZXIgPSAodmFsOiBzdHJpbmcgfCBudWxsKSA9PiB7XG4gIGlmICghdmFsKSB7XG4gICAgcmV0dXJuIHZhbCBhcyBudWxsO1xuICB9XG4gIHJldHVybiBOdW1iZXIodmFsLnJlcGxhY2UoJ3B4JywgJycpKTtcbn07XG5cbi8qKiBNYXBzIHRoZSB2YWx1ZXMgb2YgYW55IGdpdmVuIHByb3BzIHRvIHB4IHVuaXRzIGlmIGl0IGlzIGEgbnVtYmVyICovXG5leHBvcnQgY29uc3QgbnVtYmVyVG9QeDogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBtYXBOdW1iZXJUb1B4KHByb3BNYXAudmFsdWUpO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3Qgc3BhY2luZ01hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgJzAnOiBjb25maWcuc3BhY2Uubm9uZSxcbiAgJzEnOiBjb25maWcuc3BhY2UueHMsXG4gICcyJzogY29uZmlnLnNwYWNlLnNtLFxuICAnMyc6IGNvbmZpZy5zcGFjZS5tZCxcbiAgJzQnOiBjb25maWcuc3BhY2UubGcsXG4gICc1JzogY29uZmlnLnNwYWNlLnhsLFxuICAnNic6IGNvbmZpZy5zcGFjZS54eGwsXG4gICc3JzogY29uZmlnLnNwYWNlLnh4eGwsXG4gICdub25lJzogY29uZmlnLnNwYWNlLm5vbmUsXG4gICd4eHMnOiBjb25maWcuc3BhY2UueHhzLFxuICAneHMnOiBjb25maWcuc3BhY2UueHMsXG4gICdzbSc6IGNvbmZpZy5zcGFjZS5zbSxcbiAgJ21kJzogY29uZmlnLnNwYWNlLm1kLFxuICAnbGcnOiBjb25maWcuc3BhY2UubGcsXG4gICd4bCc6IGNvbmZpZy5zcGFjZS54bCxcbiAgJ3h4bCc6IGNvbmZpZy5zcGFjZS54eGwsXG4gICd4eHhsJzogY29uZmlnLnNwYWNlLnh4eGwsXG59O1xuXG4vKiogTWFwcyBzcGFjaW5nIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgc3BhY2luZyBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3Qgc3BhY2luZ1ZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gc3BhY2luZ01hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgYm9yZGVyUmFkaXVzTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBub25lOiBjb25maWcuYm9yZGVyLnJhZGl1cy5ub25lLFxuICB4czogY29uZmlnLmJvcmRlci5yYWRpdXMueHMsXG4gIHNtOiBjb25maWcuYm9yZGVyLnJhZGl1cy5zbSxcbiAgbWQ6IGNvbmZpZy5ib3JkZXIucmFkaXVzLm1kLFxuICBsZzogY29uZmlnLmJvcmRlci5yYWRpdXMubGcsXG4gIHhsOiBjb25maWcuYm9yZGVyLnJhZGl1cy54bCxcbiAgeHhsOiBjb25maWcuYm9yZGVyLnJhZGl1cy54eGwsXG4gIGZ1bGw6IGNvbmZpZy5ib3JkZXIucmFkaXVzLmZ1bGwsXG59O1xuXG4vKiogTWFwcyBib3JkZXIgcmFkaXVzIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgYm9yZGVyIHJhZGl1cyBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBib3JkZXJSYWRpdXNNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGJvcmRlcldpZHRoTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBub25lOiBjb25maWcuYm9yZGVyLndpZHRoLm5vbmUsXG4gIHNtOiBjb25maWcuYm9yZGVyLndpZHRoLnNtLFxuICBtZDogY29uZmlnLmJvcmRlci53aWR0aC5tZCxcbiAgbGc6IGNvbmZpZy5ib3JkZXIud2lkdGgubGcsXG59O1xuXG4vKiogTWFwcyBib3JkZXIgd2lkdGggdmFsdWVzIGZyb20gZGVzaWduYXRlZCBib3JkZXIgd2lkdGggc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBib3JkZXJXaWR0aE1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3Qgb3BhY2l0eU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgeHhsOiBjb25maWcub3BhY2l0eS54eGwsXG4gIHhsOiBjb25maWcub3BhY2l0eS54bCxcbiAgbGc6IGNvbmZpZy5vcGFjaXR5LmxnLFxuICBtZDogY29uZmlnLm9wYWNpdHkubWQsXG4gIHNtOiBjb25maWcub3BhY2l0eS5zbSxcbiAgeHM6IGNvbmZpZy5vcGFjaXR5LnhzLFxuICB4eHM6IGNvbmZpZy5vcGFjaXR5Lnh4cyxcbiAgeHh4czogY29uZmlnLm9wYWNpdHkueHh4cyxcbn07XG5cbi8qKiBNYXBzIG9wYWNpdHkgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBvcGFjaXR5IHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBvcGFjaXR5VmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBvcGFjaXR5TWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBmb250V2VpZ2h0TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBsaWdodDogY29uZmlnLmZvbnQud2VpZ2h0LmxpZ2h0LFxuICByZWd1bGFyOiBjb25maWcuZm9udC53ZWlnaHQucmVndWxhcixcbiAgbWVkaXVtOiBjb25maWcuZm9udC53ZWlnaHQubWVkaXVtLFxuICBib2xkOiBjb25maWcuZm9udC53ZWlnaHQuYm9sZCxcbn07XG5cbi8qKiBNYXBzIGZvbnQtd2VpZ2h0IHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgc3BhY2luZyBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgZm9udFdlaWdodFZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZm9udFdlaWdodE1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZm9udFNpemVNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHh4czogJzAuNjI1cmVtJyxcbiAgeHM6ICcwLjc1cmVtJyxcbiAgc206ICcwLjg3NXJlbScsXG4gIG1kOiAnMXJlbScsXG4gIGxnOiAnMS4yNXJlbScsXG4gIHhsOiAnMS41cmVtJyxcbiAgeHhsOiAnMS43NXJlbScsXG59O1xuXG4vKiogTWFwcyBmb250LXNpemUgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBzcGFjaW5nIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBmb250U2l6ZVZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZm9udFNpemVNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGZvbnRGYW1pbHlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHNhbnM6IGNvbmZpZy5mb250LmZhbWlseS5zYW5zLFxuICBzZXJpZjogY29uZmlnLmZvbnQuZmFtaWx5LnNlcmlmLFxuICBtb25vOiBjb25maWcuZm9udC5mYW1pbHkubW9ubyxcbn07XG5cbi8qKiBNYXBzIGZvbnQtZmFtaWx5IHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgZm9udC1mYW1pbHkgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGZvbnRGYW1pbHlWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGZvbnRGYW1pbHlNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGVsZXZhdGlvbk1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgejA6IGNvbmZpZy5lbGV2YXRpb24uejAsXG4gIHoxOiBjb25maWcuZWxldmF0aW9uLnoxLFxuICB6MjogY29uZmlnLmVsZXZhdGlvbi56MixcbiAgejM6IGNvbmZpZy5lbGV2YXRpb24uejMsXG4gIHo0OiBjb25maWcuZWxldmF0aW9uLno0LFxufTtcblxuLyoqIE1hcHMgZWxldmF0aW9uIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgZWxldmF0aW9uIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBlbGV2YXRpb25WYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGVsZXZhdGlvbk1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcbiIsICJpbXBvcnQgeyBjb25maWcsIFNlbGVjdG9yT3B0aW9ucyB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7XG4gIFNlbGVjdG9yTWV0YWRhdGEsXG4gIFNlbGVjdG9yU3R5bGVzLFxuICBTdHlsZU1hcCxcbiAgU3R5bGVNYXBDYWxsYmFjayxcbiAgU3R5bGVQcm9wZXJ0eSxcbn0gZnJvbSAnLi9jc3MtaW4tanMudHlwZXMnO1xuaW1wb3J0IHtcbiAgcHJvcFNob3J0aGFuZHMsXG4gIHNwYWNpbmdWYWxTaG9ydGhhbmRzLFxuICBudW1iZXJUb1B4LFxuICBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlTWFwcGVyLFxuICBib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLFxuICBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMsXG4gIG9wYWNpdHlWYWxTaG9ydGhhbmRzLFxuICBmb250V2VpZ2h0VmFsU2hvcnRoYW5kcyxcbiAgZm9udEZhbWlseVZhbFNob3J0aGFuZHMsXG4gIGVsZXZhdGlvblZhbFNob3J0aGFuZHMsXG4gIGZvbnRTaXplVmFsU2hvcnRoYW5kcyxcbn0gZnJvbSAnLi9jc3MtaW4tanMucHJvcGVydHktbWFwcGVycyc7XG5cbi8qKiBTcGVjaWZpZXMgd2hpY2ggcHJvcGVydHkgbWFwcGVycyBzaG91bGQgYmUgY2FsbGVkIGFuZCBpbiB3aGF0IG9yZGVyIGZvciBhIGdpdmVuIHByb3AgKi9cbmNvbnN0IHByb3BNYXBwZXJzID0ge1xuICBoZWlnaHQ6IFtudW1iZXJUb1B4XSxcbiAgbWluSGVpZ2h0OiBbbnVtYmVyVG9QeF0sXG4gIG1heEhlaWdodDogW251bWJlclRvUHhdLFxuICB3aWR0aDogW251bWJlclRvUHhdLFxuICBtaW5XaWR0aDogW251bWJlclRvUHhdLFxuICBtYXhXaWR0aDogW251bWJlclRvUHhdLFxuICB0b3A6IFtudW1iZXJUb1B4XSxcbiAgcmlnaHQ6IFtudW1iZXJUb1B4XSxcbiAgYm90dG9tOiBbbnVtYmVyVG9QeF0sXG4gIGxlZnQ6IFtudW1iZXJUb1B4XSxcbiAgbWFyZ2luOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBtYXJnaW5Ub3A6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpblJpZ2h0OiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBtYXJnaW5Cb3R0b206IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpbkxlZnQ6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmc6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmdUb3A6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmdSaWdodDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ0JvdHRvbTogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ0xlZnQ6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGdhcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcm93R2FwOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBjb2x1bW5HYXA6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGZvbnRTaXplOiBbZm9udFNpemVWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgZm9udFdlaWdodDogW2ZvbnRXZWlnaHRWYWxTaG9ydGhhbmRzXSxcbiAgZm9udEZhbWlseTogW2ZvbnRGYW1pbHlWYWxTaG9ydGhhbmRzXSxcbiAgYm9yZGVyUmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlcldpZHRoOiBbYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyVG9wTGVmdFJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG9wYWNpdHk6IFtvcGFjaXR5VmFsU2hvcnRoYW5kc10sXG4gIGJveFNoYWRvdzogW2VsZXZhdGlvblZhbFNob3J0aGFuZHNdLFxufTtcblxuLyoqXG4gKiBQYXJzZXMgcHJvcGVydGllcyB0byB0aGVpciBhY3R1YWwgcHJvcGVydHkgbWFwcGluZ3MgYWNjb3JkaW5nIHRvIHRoZVxuICogbWFwcGluZyBmdW5jdGlvbiBwaXBlbGluZXMgZGVmaW5lZCBhYm92ZVxuICovXG5leHBvcnQgY29uc3QgcGFyc2VQcm9wU2hvcnRoYW5kcyA9IChwcm9wOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBTdHlsZVByb3BlcnR5W10gPT4ge1xuICAvLyBDYXN0IHRvIHN0cmluZyB2YWx1ZXNcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB2YWx1ZSA9IGAke3ZhbHVlfWA7XG4gIH1cbiAgLy8gRXhlYyBwcm9wIHRyYW5zZm9ybXNcbiAgLy8gVGhlIHByb3Agc2hvcnRoYW5kcyBtYXBwZXIgaXMgcnVuIGFnYWluc3QgZXZlcnkgcHJvcFxuICBjb25zdCBtYXBwZWRQcm9wcyA9IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWVNYXBwZXIocHJvcFNob3J0aGFuZHMoW3sgcHJvcCwgdmFsdWUgfV0pKTtcbiAgcmV0dXJuIG1hcHBlZFByb3BzLnJlZHVjZSgoYWNjLCBwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVycyA9IHByb3BNYXBwZXJzW3Byb3BNYXAucHJvcF07XG4gICAgaWYgKG1hcHBlcnMpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgLi4ubWFwcGVycy5yZWR1Y2UoXG4gICAgICAgICAgKGFjYywgbWFwcGVyKSA9PiBtYXBwZXIoYWNjKSxcbiAgICAgICAgICBbeyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBwcm9wTWFwLnZhbHVlIH1dXG4gICAgICAgICksXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY2MucHVzaChwcm9wTWFwKTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICB9LCBbXSk7XG59O1xuXG4vKipcbiAqIFBhcnNlcyBzdHlsZU1hcCB2YWx1ZXMgdG8gc2VsZWN0b3IgKyBzdHlsZSBpbmZvIHVzZWQgZm9yXG4gKiB1cGRhdGluZyBDU1NTdHlsZVNoZWV0cyBvciA8c3R5bGU+IHRhZ3MuXG4gKi9cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVNlbGVjdG9yc0Zyb21TdHlsZU1hcCA9IChcbiAgc2VsZWN0b3JGbjogKG9wdGlvbnM/OiBTZWxlY3Rvck9wdGlvbnMpID0+IHN0cmluZyxcbiAgc3R5bGVNYXA6IFN0eWxlTWFwXG4pID0+IHtcbiAgY29uc3QgcGFyc2VkU2VsZWN0b3JzOiBTZWxlY3RvclN0eWxlc1tdID0gW107XG4gIGNvbnN0IHNlbGVjdG9yUXVldWU6IFNlbGVjdG9yTWV0YWRhdGFbXSA9IFt7IHNlbGVjdG9yOiBzZWxlY3RvckZuKCksIHN0eWxlTWFwIH1dO1xuICBjb25zdCBicmVha3BvaW50S2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZy5ncmlkLmJyZWFrcG9pbnQpO1xuXG4gIC8vIExvb3AgdGhyb3VnaCBzZWxlY3RvciBxdWV1ZSB1bnRpbCB0aGV5IGhhdmUgYWxsIGJlZW4gZXhoYXVzdGVkXG4gIHdoaWxlIChzZWxlY3RvclF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBzZWxlY3Rvck1hcCA9IHNlbGVjdG9yUXVldWUuc2hpZnQoKTtcblxuICAgIC8vIFB1c2ggcGFyc2VkIHNlbGVjdG9ycyBvbnRvIHRoZSByZXR1cm4gbGlzdFxuICAgIHBhcnNlZFNlbGVjdG9ycy5wdXNoKHtcbiAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvck1hcC5zZWxlY3RvcixcbiAgICAgIHNlbGVjdG9yV3JhcHBlcjogc2VsZWN0b3JNYXAuc2VsZWN0b3JXcmFwcGVyLFxuICAgICAgc3R5bGU6IE9iamVjdC5rZXlzKHNlbGVjdG9yTWFwLnN0eWxlTWFwKS5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBzZWxlY3Rvck1hcC5zdHlsZU1hcFtwcm9wXTtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2UgY2FsbGJhY2sgdmFsdWVzXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhbHVlID0gKHZhbHVlIGFzIFN0eWxlTWFwQ2FsbGJhY2spKGNvbmZpZyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXJzZSBvYmplY3QgdmFsdWVzXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIHBzZXVkby1jbGFzc2VzXG4gICAgICAgICAgaWYgKHByb3Auc3RhcnRzV2l0aCgnJjonKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yRm4oeyBpbmZpeDogcHJvcC5yZXBsYWNlKCcmJywgJycpIH0pLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogc2VsZWN0b3JNYXAuc2VsZWN0b3JXcmFwcGVyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBicmVha3BvaW50IHNlbGVjdG9yIHNob3J0aGFuZHNcbiAgICAgICAgICBlbHNlIGlmIChicmVha3BvaW50S2V5cy5pbmNsdWRlcyhwcm9wKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogYEBtZWRpYSAobWluLXdpZHRoOiR7Y29uZmlnLmdyaWQuYnJlYWtwb2ludFtwcm9wXX0pYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUXVldWUgdXAgc2VsZWN0b3JzIGZvciBtZWRpYS9jb250YWluZXIgcXVlcmllc1xuICAgICAgICAgIGVsc2UgaWYgKHByb3Auc3RhcnRzV2l0aCgnQG1lZGlhJykgfHwgcHJvcC5zdGFydHNXaXRoKCdAY29udGFpbmVyJykpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvck1hcC5zZWxlY3RvcixcbiAgICAgICAgICAgICAgc3R5bGVNYXA6IHZhbHVlLFxuICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IHByb3AsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFF1ZXVlIHVwIHNlbGVjdG9ycyBmb3Igc2xvdHRlZCBxdWVyaWVzXG4gICAgICAgICAgZWxzZSBpZiAocHJvcC5zdGFydHNXaXRoKCc6OnNsb3R0ZWQnKSB8fCBwcm9wLnN0YXJ0c1dpdGgoJyYgOjpzbG90dGVkJykpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvckZuKHsgcG9zdGZpeDogJyAnICsgcHJvcC5yZXBsYWNlKCcmICcsICcnKSB9KSxcbiAgICAgICAgICAgICAgc3R5bGVNYXA6IHZhbHVlLFxuICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IHNlbGVjdG9yTWFwLnNlbGVjdG9yV3JhcHBlcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUXVldWUgdXAgc2VsZWN0b3JzIGZvciB2YWx1ZSBicmVha3BvaW50IG9iamVjdHNcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIExvb3AgaW4gb3JkZXIgaGVyZSBzbyB0aGV5IG92ZXJyaWRlIGVhY2ggb3RoZXIgY29ycmVjdGx5XG4gICAgICAgICAgICBicmVha3BvaW50S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlW2tleV0pIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLCAvLyBpbmhlcml0IHRoZSBzZWxlY3RvciBoZXJlIGluIGNhc2Ugd2UgYXJlIHdpdGhpbiBhIHBzZXVkby1jbGFzc1xuICAgICAgICAgICAgICAgICAgc3R5bGVNYXA6IHsgW3Byb3BdOiB2YWx1ZVtrZXldIH0sXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IGBAbWVkaWEgKG1pbi13aWR0aDoke2NvbmZpZy5ncmlkLmJyZWFrcG9pbnRba2V5XX0pYCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIG5vcm1hbCBwcm9wc1xuICAgICAgICBjb25zdCBwcm9wcyA9IHBhcnNlUHJvcFNob3J0aGFuZHMocHJvcCwgdmFsdWUgYXMgc3RyaW5nIHwgbnVtYmVyKTtcbiAgICAgICAgcmV0dXJuIGAke2FjY30ke3Byb3BzLnJlZHVjZSgoYWNjMiwgeyBwcm9wLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgLy8gQ29udmVydCBwcm9wZXJ0eSBuYW1lcyBmcm9tIGNhbWVsLWNhc2UgdG8gZGFzaC1jYXNlLCBpLmUuOlxuICAgICAgICAgIC8vICBgYmFja2dyb3VuZENvbG9yYCAtPiBgYmFja2dyb3VuZC1jb2xvcmBcbiAgICAgICAgICAvLyBWZW5kb3ItcHJlZml4ZWQgbmFtZXMgbmVlZCBhbiBleHRyYSBgLWAgYXBwZW5kZWQgdG8gZnJvbnQ6XG4gICAgICAgICAgLy8gIGB3ZWJraXRBcHBlYXJhbmNlYCAtPiBgLXdlYmtpdC1hcHBlYXJhbmNlYFxuICAgICAgICAgIC8vIEV4Y2VwdGlvbiBpcyBhbnkgcHJvcGVydHkgbmFtZSBjb250YWluaW5nIGEgZGFzaCwgaW5jbHVkaW5nXG4gICAgICAgICAgLy8gY3VzdG9tIHByb3BlcnRpZXM7IHdlIGFzc3VtZSB0aGVzZSBhcmUgYWxyZWFkeSBkYXNoLWNhc2VkIGkuZS46XG4gICAgICAgICAgLy8gIGAtLW15LWJ1dHRvbi1jb2xvcmAgLS0+IGAtLW15LWJ1dHRvbi1jb2xvcmBcbiAgICAgICAgICBwcm9wID0gcHJvcC5yZXBsYWNlKC8oPzpeKHdlYmtpdHxtb3p8bXN8byl8KSg/PVtBLVpdKS9nLCAnLSQmJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICByZXR1cm4gYCR7YWNjMn0ke3Byb3B9OiR7dmFsdWV9O2A7XG4gICAgICAgIH0sICcnKX1gO1xuICAgICAgfSwgJycpLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZFNlbGVjdG9ycztcbn07XG5cbmNvbnN0IHBhcnNlU2VsZWN0b3JzID0gKHN0eWxlcywgc2VsZWN0b3JzPzogYW55KSA9PiB7XG4gIGlmICghc2VsZWN0b3JzKSB7XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYCR7c3R5bGVzfSR7c2VsZWN0b3JzLnJlZHVjZSgoYWNjLCB7IHNlbGVjdG9yLCBzZWxlY3RvcldyYXBwZXIsIHN0eWxlIH0pID0+IHtcbiAgICAgIGlmIChzdHlsZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJhc2UgPSBgJHtzZWxlY3Rvcn17JHtzdHlsZX19YDtcbiAgICAgIGNvbnN0IHdyYXBwZWQgPSBzZWxlY3RvcldyYXBwZXIgPyBgJHtzZWxlY3RvcldyYXBwZXJ9eyR7YmFzZX19YCA6IGJhc2U7XG4gICAgICByZXR1cm4gYCR7YWNjfSR7d3JhcHBlZH1gO1xuICAgIH0sICcnKX1gO1xuICB9XG59O1xuXG4vKipcbiAqIENvbWJpbmVzIGFsbCBpbnN0YW5jZSBzdHlsZU1hcCBzZWxlY3RvcnMgKyBzdHlsZSBpbmZvIGludG8gb25lIGNzc1RleHRcbiAqIHVzZWQgZm9yIHVwZGF0aW5nIENTU1N0eWxlU2hlZXRzIG9yIDxzdHlsZT4gdGFncy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdEluc3RhbmNlU3R5bGVzID0gKGluc3RhbmNlU3R5bGVzTWFwKSA9PiB7XG4gIGxldCBzdHlsZXMgPSAnJztcblxuICAvLyBTb3J0IGtleXMgaW4gYWxwaGFiZXRpY2FsIG9yZGVyIHRvIGhlbHAgYXZvaWQgaHlkcmF0aW9uIG1pc21hdGNoIGVycm9yc1xuICBbLi4uaW5zdGFuY2VTdHlsZXNNYXAuZW50cmllcygpXVxuICAgIC5maWx0ZXIoKFtrZXksIF9dKSA9PiBrZXkgIT09ICdzZScgJiYga2V5ICE9PSAnc3AnKVxuICAgIC5zb3J0KChhLCBiKSA9PiBiWzBdIC0gYVswXSlcbiAgICAuZm9yRWFjaCgoW18sIHNlbGVjdG9yc10pID0+IHtcbiAgICAgIHN0eWxlcyA9IHBhcnNlU2VsZWN0b3JzKHN0eWxlcywgc2VsZWN0b3JzKTtcbiAgICB9KTtcblxuICAvLyBBbHdheXMgcGFyc2UgYHNlYCBhbmQgYHNwYCBzZWxlY3RvcnMgbGFzdCB0byBoZWxwIGF2b2lkIGh5ZHJhdGlvbiBtaXNtYXRjaCBlcnJvcnNcbiAgLy8gYW5kIGVuc3VyZSB0aGV5IG92ZXJyaWRlIGFueSBjb21wb25lbnQgbGV2ZWwgZHluYW1pYyBzdHlsZXMuXG4gIHN0eWxlcyA9IGAke3N0eWxlc30ke3BhcnNlU2VsZWN0b3JzKCcnLCBpbnN0YW5jZVN0eWxlc01hcC5nZXQoJ3NlJykpfSR7cGFyc2VTZWxlY3RvcnMoXG4gICAgJycsXG4gICAgaW5zdGFuY2VTdHlsZXNNYXAuZ2V0KCdzcCcpXG4gICl9YDtcbiAgcmV0dXJuIHN0eWxlcztcbn07XG4iLCAiaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICdsaXQtaHRtbC9pcy1zZXJ2ZXIuanMnO1xuXG5leHBvcnQgY29uc3QgaXNTc3IgPSAoKSA9PiBpc1NlcnZlcjtcblxuZXhwb3J0IGNvbnN0IGlzQnJvd3Nlckxpa2UgPSAoKSA9PiBnbG9iYWxUaGlzICE9PSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkUmVzaXplQ29udHJvbGxlciA9IChyZXNpemVDb250cm9sbGVyKSA9PlxuICByZXNpemVDb250cm9sbGVyPy5bJ19vYnNlcnZlciddPy5bJ3Vub2JzZXJ2ZSddO1xuXG5pbnRlcmZhY2UgTmF2aWdhdG9yVUFEYXRhIHtcbiAgYnJhbmRzOiBBcnJheTx7IGJyYW5kOiBzdHJpbmc7IHZlcnNpb246IHN0cmluZyB9PjtcbiAgbW9iaWxlOiBib29sZWFuO1xuICBwbGF0Zm9ybTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxhdGZvcm0oKTogc3RyaW5nIHtcbiAgY29uc3QgdWFEYXRhID0gKG5hdmlnYXRvciBhcyBhbnkpLnVzZXJBZ2VudERhdGEgYXMgTmF2aWdhdG9yVUFEYXRhIHwgdW5kZWZpbmVkO1xuXG4gIGlmICh1YURhdGE/LnBsYXRmb3JtKSB7XG4gICAgcmV0dXJuIHVhRGF0YS5wbGF0Zm9ybTtcbiAgfVxuXG4gIHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm07XG59XG5cbmV4cG9ydCBjb25zdCBpc1BsYXRmb3JtID0gKHBsYXRmb3JtOiAnSU9TJykgPT4ge1xuICBpZiAoIWlzU3NyKCkpIHtcbiAgICBpZiAocGxhdGZvcm0gPT09ICdJT1MnKSB7XG4gICAgICByZXR1cm4gL2lQKGhvbmV8YWR8b2QpfGlPUy8udGVzdChnZXRQbGF0Zm9ybSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4iLCAiY29uc3QgbmF0aXZlVmFsaWRpdHlTdGF0ZXM6IEFycmF5PGtleW9mIFZhbGlkaXR5U3RhdGU+ID0gW1xuICAnYmFkSW5wdXQnLFxuICAnY3VzdG9tRXJyb3InLFxuICAncGF0dGVybk1pc21hdGNoJyxcbiAgJ3JhbmdlT3ZlcmZsb3cnLFxuICAncmFuZ2VVbmRlcmZsb3cnLFxuICAnc3RlcE1pc21hdGNoJyxcbiAgJ3Rvb0xvbmcnLFxuICAndG9vU2hvcnQnLFxuICAndHlwZU1pc21hdGNoJyxcbiAgJ3ZhbHVlTWlzc2luZycsXG5dO1xuXG4vKipcbiAqIEN1c3RvbSB2YWxpZGF0b3IgZm9yIHRoZSBgQG9wZW4td2MvZm9ybS1jb250cm9sYCB0aGF0IGxlYW5zIG9uIGFuIGludGVybmFsXG4gKiBpbnB1dCB0byBmb3J3YXJkIG5hdGl2ZSB2YWxpZGF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBpbm5lcklucHV0VmFsaWRhdG9ycyA9IG5hdGl2ZVZhbGlkaXR5U3RhdGVzLm1hcCgoa2V5KSA9PiAoe1xuICBrZXksXG4gIGlzVmFsaWQoaW5zdGFuY2U6IEhUTUxFbGVtZW50ICYgeyB2YWxpZGF0aW9uVGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50IH0pIHtcbiAgICBpZiAoaW5zdGFuY2UudmFsaWRhdGlvblRhcmdldCkge1xuICAgICAgcmV0dXJuICFpbnN0YW5jZS52YWxpZGF0aW9uVGFyZ2V0LnZhbGlkaXR5W2tleV07XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxufSkpO1xuIiwgIi8qKlxuICogTk9URTpcbiAqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgaW1wbGVtZW50YXRpb24gZm9yIGFuIGV4dHJlbWVseSBzaW1wbGUgYW5kIGxpZ2h0d2VpZ2h0XG4gKiByZWFjdGl2ZSBzb2x1dGlvbiBsb29zZWx5IGJhc2VkIG9uIHNvbGlkLWpzIHN0eWxlIHNpZ25hbHMuIEl0IGVuYWJsZXMgYmFzaWNcbiAqIHJlYWN0aXZlIHN1YnNjcmlwdGlvbnMgYW5kIGNvbXB1dGVkIHNpZ25hbHMgb2Ygb25lIG9yIG1vcmUgb3RoZXIgZGVwZW5kZW5jeSBzaWduYWxzLlxuICpcbiAqIEluIGl0cyBjdXJyZW50IHN0YXRlLCBpdCBpcyBub3QgcGVyZmVjdCBhbmQgZG9lcyBub3QgaGFuZGxlIGFsbCBlZGdlIGNhc2VzLiBGb3JcbiAqIGV4YW1wbGUsIGlmIHlvdSBoYXZlIG11bHRpcGxlIGxheWVycyBvZiBjb21wdXRlZCBzdGF0ZSB3aXRoIGEgc2luZ2xlIGRlcGVuZGVuY3lcbiAqIHNoYXJlZCBtb3JlIHRoYW4gb25jZSBhY3Jvc3MgdGhvc2UgbGF5ZXJzLCB0aGUgc2FtZSBjaGFuZ2Ugd2lsbCBwb3RlbnRpYWxseSBiZVxuICogZW1pdHRlZCB0d2ljZS4gT3VyIGV4cGVjdGF0aW9uIGF0bSwgaXMgdGhhdCB3ZSB3b24ndCBlbmNvdW50ZXIgdGhvc2Ugc2NlbmFyaW9zXG4gKiBpbiB0aGlzIGxpYnJhcnkuXG4gKi9cblxuLyoqIFVuc3Vic2NyaWJlcyBmcm9tIHZhbHVlIHVwZGF0ZXMuICovXG5leHBvcnQgdHlwZSBVbnN1YnNjcmliZXIgPSAoKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25hbDxUPiB7XG4gIC8qKiBHZXQgdGhlIGN1cnJlbnQgdmFsdWUgKi9cbiAgZ2V0KCk6IFQ7XG5cbiAgLyoqIFNldCByZWFjdGl2ZSB2YWx1ZSAqL1xuICBzZXQodmFsdWU6IFQpO1xuXG4gIC8qKiBVcGRhdGUgcmVhY3RpdmUgdmFsdWUgdXNpbmcgY2FsbGJhY2sgKi9cbiAgdXBkYXRlKGZuOiAodmFsdWU6IFQpID0+IFQpO1xuXG4gIC8qKiBTdWJzY3JpYmUgdG8gcmVhY3RpdmUgdmFsdWUgY2hhbmdlcyAqL1xuICBzdWJzY3JpYmUoZm46ICh2YWx1ZTogVCwgdW5zdWJzY3JpYmU/OiBVbnN1YnNjcmliZXIpID0+IHZvaWQpOiBVbnN1YnNjcmliZXI7XG59XG5cbmNvbnN0IGNvbnRleHQgPSBbXTtcblxuZnVuY3Rpb24gX3N1YnNjcmliZShydW5uaW5nLCBzdWJzY3JpcHRpb25zKSB7XG4gIHN1YnNjcmlwdGlvbnMuYWRkKHJ1bm5pbmcpO1xuICBydW5uaW5nLmRlcGVuZGVuY2llcy5hZGQoc3Vic2NyaXB0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFudXAocnVubmluZykge1xuICBmb3IgKGNvbnN0IGRlcCBvZiBydW5uaW5nLmRlcGVuZGVuY2llcykge1xuICAgIGRlcC5kZWxldGUocnVubmluZyk7XG4gIH1cbiAgcnVubmluZy5kZXBlbmRlbmNpZXMuY2xlYXIoKTtcbn1cblxuLyoqIENyZWF0ZSBhIHNpZ25hbCB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IGdldHRlciBvciBzdWJzY3JpcHRpb24uICovXG5leHBvcnQgZnVuY3Rpb24gc2lnbmFsPFQ+KHZhbHVlPzogVCkge1xuICBjb25zdCBzdWJzY3JpcHRpb25zID0gbmV3IFNldDxhbnk+KCk7XG5cbiAgY29uc3QgZ2V0ID0gKCk6IFQgPT4ge1xuICAgIGNvbnN0IHJ1bm5pbmcgPSBjb250ZXh0W2NvbnRleHQubGVuZ3RoIC0gMV07XG4gICAgaWYgKHJ1bm5pbmcpIF9zdWJzY3JpYmUocnVubmluZywgc3Vic2NyaXB0aW9ucyk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHNldCA9IChuZXh0VmFsdWU6IFQpID0+IHtcbiAgICB2YWx1ZSA9IG5leHRWYWx1ZTtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiBbLi4uc3Vic2NyaXB0aW9uc10pIHtcbiAgICAgIHN1Yi5leGVjdXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZSA9IChmbjogKHZhbHVlOiBUKSA9PiBUKSA9PiB7XG4gICAgdmFsdWUgPSBmbih2YWx1ZSk7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgWy4uLnN1YnNjcmlwdGlvbnNdKSB7XG4gICAgICBzdWIuZXhlY3V0ZSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBUaGlzIGlzIGVzc2VudGlhbGx5IGEgdXNlRWZmZWN0IG1hc3F1ZXJhZGluZyBhcyBhIHN1YnNjcmliZSBmdW5jdGlvblxuICBjb25zdCBzdWJzY3JpYmUgPSAoZm46ICh2YWx1ZTogVCwgdW5zdWJzY3JpYmU/OiBVbnN1YnNjcmliZXIpID0+IHZvaWQpOiBVbnN1YnNjcmliZXIgPT4ge1xuICAgIGNvbnN0IGV4ZWN1dGUgPSAoKSA9PiB7XG4gICAgICBjbGVhbnVwKHJ1bm5pbmcpO1xuICAgICAgY29udGV4dC5wdXNoKHJ1bm5pbmcpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4ocnVubmluZy5nZXQoKSwgKCkgPT4gY2xlYW51cChydW5uaW5nKSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjb250ZXh0LnBvcCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICgpID0+IGNsZWFudXAocnVubmluZyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJ1bm5pbmcgPSB7XG4gICAgICBleGVjdXRlLFxuICAgICAgZGVwZW5kZW5jaWVzOiBuZXcgU2V0KCksXG4gICAgICBnZXQsXG4gICAgfTtcblxuICAgIHJldHVybiBleGVjdXRlKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQsXG4gICAgc2V0LFxuICAgIHVwZGF0ZSxcbiAgICBzdWJzY3JpYmUsXG4gIH0gYXMgU2lnbmFsPFQ+O1xufVxuXG4vKiogT25lIG9yIG1vcmUgYFNpZ25hbGBzICovXG50eXBlIFNpZ25hbHMgPSBTaWduYWw8YW55PiB8IFtTaWduYWw8YW55PiwgLi4uQXJyYXk8U2lnbmFsPGFueT4+XSB8IFNpZ25hbDxhbnk+W107XG5cbi8qKiBPbmUgb3IgbW9yZSB2YWx1ZXMgZnJvbSBzaWduYWxzICovXG5leHBvcnQgdHlwZSBTaWduYWxWYWx1ZXM8VD4gPSBUIGV4dGVuZHMgU2lnbmFsPGluZmVyIFU+XG4gID8gVVxuICA6IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gZXh0ZW5kcyBTaWduYWw8aW5mZXIgVT4gPyBVIDogbmV2ZXIgfTtcblxuLyoqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCBzaWduYWwgZnJvbSBvbmUgb3IgbW9yZSBzaWduYWwgZGVwZW5kZW5jaWVzICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQ8RCBleHRlbmRzIFNpZ25hbHMsIFQ+KFxuICBkZXBlbmRlbmNpZXM6IEQsXG4gIGZuOiAodmFsdWVzOiBTaWduYWxWYWx1ZXM8RD4pID0+IFRcbik6IFNpZ25hbDxUPjtcblxuLyoqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCBzaWduYWwgZnJvbSBvbmUgb3IgbW9yZSBzaWduYWwgZGVwZW5kZW5jaWVzICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQ8RCBleHRlbmRzIFNpZ25hbHMsIFQ+KFxuICBkZXBlbmRlbmNpZXM6IEQsXG4gIGZuPzogKHZhbHVlczogU2lnbmFsVmFsdWVzPEQ+LCBzZXQ/OiAodmFsdWU6IGFueSkgPT4gdm9pZCkgPT4gVFxuKTogU2lnbmFsPHVua25vd24+O1xuXG4vKiogQ3JlYXRlIGEgbmV3IGNvbXB1dGVkIHNpZ25hbCBmcm9tIG9uZSBvciBtb3JlIHNpZ25hbCBkZXBlbmRlbmNpZXMgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZDxEIGV4dGVuZHMgU2lnbmFscz4oXG4gIGRlcGVuZGVuY2llczogRCxcbiAgZm4/OiAoLi4ucGFyYW1zOiBhbnlbXSkgPT4gYW55XG4pOiBTaWduYWw8YW55PiB7XG4gIGNvbnN0IGF1dG8gPSBmbi5sZW5ndGggPCAyO1xuICBjb25zdCBzID0gc2lnbmFsPGFueT4oKTtcbiAgY29uc3Qgc2luZ2xlID0gIUFycmF5LmlzQXJyYXkoZGVwZW5kZW5jaWVzKTtcbiAgY29uc3QgZGVwcyA9IHNpbmdsZVxuICAgID8gKFtkZXBlbmRlbmNpZXNdIGFzIFNpZ25hbDxTaWduYWxWYWx1ZXM8RD4+W10pXG4gICAgOiAoZGVwZW5kZW5jaWVzIGFzIFNpZ25hbDxTaWduYWxWYWx1ZXM8RD4+W10pO1xuXG4gIC8vIFdlIG9ubHkgbmVlZCB0byBzdWJzY3JpYmUgdG8gdGhlIGZpcnN0IGl0ZW0gYmVjYXVzZVxuICAvLyB0aGUgYWN0IG9mIHJldHJpZXZpbmcgYWxsIGRlcGVuZGVuY3kgdmFsdWVzIHdpbGwgYWRkIHRoZW1cbiAgLy8gdG8gdGhlIGNvbnRleHQgc3RhY2sgYXBwcm9wcmlhdGVseVxuICBjb25zdCBkZXAgPSBkZXBzWzBdO1xuICBkZXAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgPSBkZXBzLm1hcCgoZGVwKSA9PiBkZXAuZ2V0KCkpO1xuICAgIGNvbnN0IHJldCA9IHNpbmdsZSA/IHZhbHVlc1swXSA6ICh2YWx1ZXMgYXMgU2lnbmFsVmFsdWVzPEQ+KTtcbiAgICBpZiAoYXV0bykge1xuICAgICAgcy5zZXQoZm4ocmV0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKHJldCwgcy5zZXQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzO1xufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIHdjL25vLXNlbGYtY2xhc3MgKi9cbmltcG9ydCB7IGNvbmZpZywgc2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMsIGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgTXRlRWxlbWVudCB9IGZyb20gJy4vbXRlLmVsZW1lbnQnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0gZnJvbSAnLi4vYXR0cmlidXRlLWNvbnZlcnRlcic7XG5cbmV4cG9ydCB0eXBlIFNwYWNpbmdWYWx1ZSA9XG4gIHwgbnVtYmVyXG4gIHwgc3RyaW5nXG4gIHwgMVxuICB8IDJcbiAgfCAzXG4gIHwgNFxuICB8IDVcbiAgfCA2XG4gIHwgJ25vbmUnXG4gIHwgJ3hzJ1xuICB8ICdzbSdcbiAgfCAnbWQnXG4gIHwgJ2xnJ1xuICB8ICd4bCdcbiAgfCAneHhsJ1xuICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgVW5pdFZhbHVlID0gbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBCb3JkZXJSYWRpdXNWYWx1ZSA9XG4gIHwgJ25vbmUnXG4gIHwgJ3hzJ1xuICB8ICdzbSdcbiAgfCAnbWQnXG4gIHwgJ2xnJ1xuICB8ICd4bCdcbiAgfCAneHhsJ1xuICB8ICdmdWxsJ1xuICB8IHN0cmluZ1xuICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgQm9yZGVyV2lkdGhWYWx1ZSA9ICdub25lJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgT3BhY2l0eVZhbHVlID1cbiAgfCAneHh4cydcbiAgfCAneHhzJ1xuICB8ICd4cydcbiAgfCAnc20nXG4gIHwgJ21kJ1xuICB8ICdsZydcbiAgfCAneGwnXG4gIHwgJ3h4bCdcbiAgfCBzdHJpbmdcbiAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFJlc3BvbnNpdmVWYWx1ZTxUPiA9IFQgfCBQYXJ0aWFsPFJlY29yZDwneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnLCBUPj47XG5cbmNvbnN0IGRlZmF1bHRCb3JkZXJGYWN0b3J5ID0gKHdpZHRoPywgY29sb3I/LCBzdHlsZT8pID0+XG4gIGAke3N0eWxlID8/ICdzb2xpZCd9ICR7XG4gICAgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzKFtcbiAgICAgIHsgcHJvcDogJ2JvcmRlcldpZHRoJywgdmFsdWU6IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUod2lkdGggPz8gJzFweCcpIH0sXG4gICAgXSlbMF0/LnZhbHVlXG4gIH0gJHtkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKGNvbG9yKSA/PyBjb25maWcuY29sb3IuYm9yZGVyMX1gO1xuXG5leHBvcnQgY2xhc3MgTXRlQ29udGVudEJhc2UgZXh0ZW5kcyBNdGVFbGVtZW50IHtcbiAgLy8gLS0gU3BhY2luZyBQcm9wcyAtLVxuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG0/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi1yaWdodGAgYW5kIGBtYXJnaW4tbGVmdGAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG14PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tdG9wYCBhbmQgYG1hcmdpbi1ib3R0b21gIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBteT86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXRvcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtdD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXJpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1yPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tYm90dG9tYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1iPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tbGVmdGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtbD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZ2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXJpZ2h0YCBhbmQgYHBhZGRpbmctbGVmdGAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHB4PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXRvcGAgYW5kIGBwYWRkaW5nLWJvdHRvbWAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHB5PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXRvcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwdD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1yaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwcj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1ib3R0b21gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcGI/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctbGVmdGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwbD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8vIC0tIFBvc2l0aW9uaW5nIFByb3BzIC0tXG5cbiAgLyoqIFNldHMgdGhlIGBkaXNwbGF5YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdibG9jaydcbiAgICB8ICdpbmxpbmUtYmxvY2snXG4gICAgfCAnZmxleCdcbiAgICB8ICdpbmxpbmUtZmxleCdcbiAgICB8ICdncmlkJ1xuICAgIHwgJ2lubGluZS1ncmlkJ1xuICAgIHwgJ2lubGluZSdcbiAgICB8ICdsaXN0LWl0ZW0nXG4gICAgfCAnbm9uZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1pdGVtc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBhPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZW5kJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnYmFzZWxpbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24taXRlbXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYWxpZ25JdGVtcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2Jhc2VsaW5lJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGFsaWduLXNlbGZgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYWxpZ25TZWxmPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnYXV0bydcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdiYXNlbGluZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1jb250ZW50YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGFsaWduQ29udGVudD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ3NwYWNlLWJldHdlZW4nXG4gICAgfCAnc3BhY2UtYXJvdW5kJ1xuICAgIHwgJ3NwYWNlLWV2ZW5seSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LWNvbnRlbnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgaj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIHwgJ3NwYWNlLWFyb3VuZCdcbiAgICB8ICdzcGFjZS1ldmVubHknXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1jb250ZW50YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGp1c3RpZnlDb250ZW50PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3NwYWNlLWJldHdlZW4nXG4gICAgfCAnc3BhY2UtYXJvdW5kJ1xuICAgIHwgJ3NwYWNlLWV2ZW5seSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LWl0ZW1zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGp1c3RpZnlJdGVtcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnbGVmdCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGp1c3RpZnktc2VsZmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBqdXN0aWZ5U2VsZj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnbGVmdCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZmxleDogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWRpcmVjdGlvbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBkaXJlY3Rpb24/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3JvdycgfCAncm93UmV2ZXJzZScgfCAnY29sdW1uJyB8ICdjb2x1bW5SZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1kaXJlY3Rpb25gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleERpcmVjdGlvbj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAncm93JyB8ICdyb3dSZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtblJldmVyc2UnIHwgJ2luaXRpYWwnIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWJhc2lzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJhc2lzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1iYXNpc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4QmFzaXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWdyb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3Jvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtZ3Jvd2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4R3Jvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtc2hyaW5rYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIHNocmluaz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtc2hyaW5rYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhTaHJpbms/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXdyYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgd3JhcD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAnbm93cmFwJyB8ICd3cmFwJyB8ICd3cmFwLXJldmVyc2UnIHwgJ2luaXRpYWwnIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXdyYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleFdyYXA/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ25vd3JhcCcgfCAnd3JhcCcgfCAnd3JhcC1yZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgb3JkZXJgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgb3JkZXI/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBnYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ2FwPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBjb2x1bW4tZ2FwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGNvbHVtbkdhcD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcm93LWdhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICByb3dHYXA/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtY29sdW1uYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRDb2x1bW4/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXJvd2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkUm93PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1hdXRvLWZsb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZEF1dG9GbG93PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdyb3cnIHwgJ2NvbHVtbicgfCAnZGVuc2UnIHwgJ3JvdyBkZW5zZScgfCAnY29sdW1uIGRlbnNlJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1hdXRvLWNvbHVtbnNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZEF1dG9Db2x1bW5zPzogUmVzcG9uc2l2ZVZhbHVlPCdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXV0by1yb3dzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRBdXRvUm93cz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICAnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZVxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgJ25vbmUnIHwgJ2F1dG8nIHwgJ21heC1jb250ZW50JyB8ICdtaW4tY29udGVudCcgfCBVbml0VmFsdWVcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtdGVtcGxhdGUtcm93c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBncmlkVGVtcGxhdGVSb3dzPzogUmVzcG9uc2l2ZVZhbHVlPCdub25lJyB8ICdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtdGVtcGxhdGUtYXJlYXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZFRlbXBsYXRlQXJlYXM/OiBSZXNwb25zaXZlVmFsdWU8J25vbmUnIHwgc3RyaW5nIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXJlYWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQXJlYT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvLyAtLSBTaXppbmcgUHJvcHMgLS1cblxuICAvKiogU2V0cyB0aGUgYHdpZHRoYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIHc/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1heC13aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtYXh3PzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtaW4td2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWludz86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgaGVpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGg/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1heC1oZWlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWF4aD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWluLWhlaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtaW5oPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBiYWNrZ3JvdW5kYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiBDYW4gYmUgcGFzc2VkIGRvdCBub3RhdGVkIHRoZW1lIGNvbmZpZyBzdHJpbmdzIHRvIHNlbGVjdCBjb2xvciB0b2tlbiB2YWx1ZXMuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJnPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgY29sb3JgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuIENhbiBiZSBwYXNzZWQgZG90IG5vdGF0ZWQgdGhlbWUgY29uZmlnIHN0cmluZ3MgdG8gc2VsZWN0IGNvbG9yIHRva2VuIHZhbHVlcy4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1jb2xvcmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gQ2FuIGJlIHBhc3NlZCBkb3Qgbm90YXRlZCB0aGVtZSBjb25maWcgc3RyaW5ncyB0byBzZWxlY3QgY29sb3IgdG9rZW4gdmFsdWVzLiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBib3JkZXJDb2xvcj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci13aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyV2lkdGg/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyV2lkdGhWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItc3R5bGVgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJvcmRlclN0eWxlPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdzb2xpZCcgfCAnZG90dGVkJyB8ICdkYXNoZWQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXJgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlcj86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3BgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcD86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1yaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyUmlnaHQ/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJCb3R0b20/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItbGVmdGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyTGVmdD86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyVG9wUmlnaHRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyVG9wTGVmdFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tTGVmdFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1c2AgYW5kIGBib3JkZXItdG9wLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1c2AgYW5kIGBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJSaWdodFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c2AgYW5kIGBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbVJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLWxlZnQtcmFkaXVzYCBhbmQgYGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyTGVmdFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBsaW5lLWhlaWdodGAgY3NzIHByb3BlcnR5ICAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBsaW5lSGVpZ2h0PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IG51bWJlclxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZm9udC13ZWlnaHRgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmb250V2VpZ2h0PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnbGlnaHQnXG4gICAgfCAncmVndWxhcidcbiAgICB8ICdtZWRpdW0nXG4gICAgfCAnbGlnaHRlcidcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnYm9sZCdcbiAgICB8ICdib2xkZXInXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICAgIHwgJzEwMCdcbiAgICB8ICcyMDAnXG4gICAgfCAnMzAwJ1xuICAgIHwgJzQwMCdcbiAgICB8ICc1MDAnXG4gICAgfCAnNjAwJ1xuICAgIHwgJzcwMCdcbiAgICB8ICc4MDAnXG4gICAgfCAnOTAwJ1xuICA+O1xuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIGBmb250V2VpZ2h0YC4gU2V0cyB0aGUgYGZvbnQtd2VpZ2h0YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZnc/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdsaWdodCdcbiAgICB8ICdyZWd1bGFyJ1xuICAgIHwgJ21lZGl1bSdcbiAgICB8ICdsaWdodGVyJ1xuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdib2xkJ1xuICAgIHwgJ2JvbGRlcidcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gICAgfCAnMTAwJ1xuICAgIHwgJzIwMCdcbiAgICB8ICczMDAnXG4gICAgfCAnNDAwJ1xuICAgIHwgJzUwMCdcbiAgICB8ICc2MDAnXG4gICAgfCAnNzAwJ1xuICAgIHwgJzgwMCdcbiAgICB8ICc5MDAnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmb250LXNpemVgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmb250U2l6ZT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCBVbml0VmFsdWUgfCAneHhzJyB8ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCdcbiAgPjtcblxuICAvKiogU2hvcnRoYW5kIGZvciBgZm9udFNpemVgLiBTZXRzIHRoZSBgZm9udC1zaXplYCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZnM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgVW5pdFZhbHVlIHwgJ3h4cycgfCAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmb250LWZhbWlseWAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZvbnRGYW1pbHk/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3NhbnMnIHwgJ3NlcmlmJyB8ICdtb25vJyB8IHN0cmluZ1xuICA+O1xuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIGBvcGFjaXR5YC4gU2V0cyB0aGUgYG9wYWNpdHlgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBvcGFjaXR5PzogUmVzcG9uc2l2ZVZhbHVlPE9wYWNpdHlWYWx1ZT47XG5cbiAgLyoqIEFwcGxpZXMgTW9ydGFyIHN0YW5kYXJkIGJveC1zaGFkb3cgdmFsdWVzICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGVsZXZhdGlvbj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICAnejAnIHwgJ3oxJyB8ICd6MicgfCAnejMnIHwgJ3o0J1xuICA+O1xuXG4gIC8qKiBBZGp1c3QgdGhpcyBlbGVtZW50cyBibGVlZCBpZiBpdCBpcyBhIGRpcmVjdCBkZXNjZW5kYW50IG9mIGFuIG10ZS1sYXlvdXQtY29udGFpbmVyICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbGF5b3V0QmxlZWQ/OiAnZnVsbCcgfCAncG9wb3V0JyB8ICdjb250ZW50JyB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogUmVuZGVycyB0aGlzIGVsZW1lbnQgYXMgYSBzdWJncmlkIHdoZW4gc2V0LiBgZGlzcGxheWAgaXMgc2V0IHRvIGBncmlkYCBhbmQgYGdyaWQtdGVtcGxhdGUtY29sdW1uc2AgaXMgc2V0IHRvIGBzdWJncmlkYC5cbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBzdWJncmlkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgc2VsZWN0b3IgdG8gaGF2ZSBpbnN0YW5jZSBzdHlsZXMgdGFyZ2V0IGEgc3BlY2lmaWMgaW5uZXIgZWxlbWVudC5cbiAgICogVXNlZnVsIGluIHNwZWNpZmljIHNjZW5hcmlvcyB3aGVyZSB0aGUgcHJpbWFyeSBjb250ZW50L3Nsb3Qgd3JhcHBlZCB3aXRoaW4gdGhlIHRlbXBsYXRlXG4gICAqIGxpa2Ugd2l0aCB0aGUgbW9kYWwgY29tcG9uZW50LlxuICAgKi9cbiAgcHJvdGVjdGVkIGNvbnRlbnRTdHlsZVNlbGVjdG9yUm9vdCA9ICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnO1xuXG4gIC8vIExpc3Qgb2YgcHJvcHMgZm9yIG9wdGltYWwgc3R5bGUgdXBkYXRlIGNoZWNraW5nXG4gIHByaXZhdGUgc3RhdGljIGNvbnRlbnRQcm9wcyA9IG5ldyBTZXQoW1xuICAgICdtJyxcbiAgICAnbXgnLFxuICAgICdteScsXG4gICAgJ210JyxcbiAgICAnbXInLFxuICAgICdtYicsXG4gICAgJ21sJyxcbiAgICAncCcsXG4gICAgJ3B4JyxcbiAgICAncHknLFxuICAgICdwdCcsXG4gICAgJ3ByJyxcbiAgICAncGInLFxuICAgICdwbCcsXG4gICAgJ2QnLFxuICAgICdhJyxcbiAgICAnaicsXG4gICAgJ2Jhc2lzJyxcbiAgICAnc2hyaW5rJyxcbiAgICAnZ3JvdycsXG4gICAgJ2RpcmVjdGlvbicsXG4gICAgJ3dyYXAnLFxuICAgICdhbGlnbkl0ZW1zJyxcbiAgICAnYWxpZ25TZWxmJyxcbiAgICAnYWxpZ25Db250ZW50JyxcbiAgICAnanVzdGlmeUNvbnRlbnQnLFxuICAgICdqdXN0aWZ5SXRlbXMnLFxuICAgICdqdXN0aWZ5U2VsZicsXG4gICAgJ2ZsZXgnLFxuICAgICdmbGV4RGlyZWN0aW9uJyxcbiAgICAnZmxleEJhc2lzJyxcbiAgICAnZmxleFNocmluaycsXG4gICAgJ2ZsZXhHcm93JyxcbiAgICAnZmxleFdyYXAnLFxuICAgICdvcmRlcicsXG4gICAgJ2dhcCcsXG4gICAgJ2NvbHVtbkdhcCcsXG4gICAgJ3Jvd0dhcCcsXG4gICAgJ2dyaWRDb2x1bW4nLFxuICAgICdncmlkUm93JyxcbiAgICAnZ3JpZEF1dG9GbG93JyxcbiAgICAnZ3JpZEF1dG9Db2x1bW5zJyxcbiAgICAnZ3JpZEF1dG9Sb3dzJyxcbiAgICAnZ3JpZFRlbXBsYXRlQ29sdW1ucycsXG4gICAgJ2dyaWRUZW1wbGF0ZVJvd3MnLFxuICAgICdncmlkVGVtcGxhdGVBcmVhcycsXG4gICAgJ2dyaWRBcmVhJyxcbiAgICAndycsXG4gICAgJ21heHcnLFxuICAgICdtaW53JyxcbiAgICAnaCcsXG4gICAgJ21heGgnLFxuICAgICdtaW5oJyxcbiAgICAnYmcnLFxuICAgICdjJyxcbiAgICAnYm9yZGVyQ29sb3InLFxuICAgICdib3JkZXJXaWR0aCcsXG4gICAgJ2JvcmRlclN0eWxlJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnYm9yZGVyVG9wJyxcbiAgICAnYm9yZGVyUmlnaHQnLFxuICAgICdib3JkZXJCb3R0b20nLFxuICAgICdib3JkZXJMZWZ0JyxcbiAgICAnYm9yZGVyUmFkaXVzJyxcbiAgICAnYm9yZGVyVG9wUmlnaHRSYWRpdXMnLFxuICAgICdib3JkZXJUb3BMZWZ0UmFkaXVzJyxcbiAgICAnYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMnLFxuICAgICdib3JkZXJCb3R0b21MZWZ0UmFkaXVzJyxcbiAgICAnYm9yZGVyVG9wUmFkaXVzJyxcbiAgICAnYm9yZGVyUmlnaHRSYWRpdXMnLFxuICAgICdib3JkZXJCb3R0b21SYWRpdXMnLFxuICAgICdib3JkZXJMZWZ0UmFkaXVzJyxcbiAgICAnbGluZUhlaWdodCcsXG4gICAgJ2ZvbnRXZWlnaHQnLFxuICAgICdmdycsXG4gICAgJ2ZvbnRTaXplJyxcbiAgICAnZnMnLFxuICAgICdmb250RmFtaWx5JyxcbiAgICAnb3BhY2l0eScsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ2xheW91dEJsZWVkJyxcbiAgICAnc3ViZ3JpZCcsXG4gIF0pO1xuXG4gIHByb3RlY3RlZCB1cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHM6IE1hcDxzdHJpbmcsIGFueT4pIHtcbiAgICBzdXBlci51cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gQ2hlY2sgaWYgYW55IGNvbnRlbnQgcHJvcCBoYXMgY2hhbmdlZCB0byBkZXRlcm1pbmUgaWYgd2UgbmVlZCB0byB1cGRhdGUgdGhlIGluc3RhbmNlIHN0eWxlc1xuICAgIGxldCBzaG91bGRVcGRhdGVTdHlsZXMgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBjaGFuZ2VkUHJvcHMua2V5cygpKSB7XG4gICAgICBpZiAoTXRlQ29udGVudEJhc2UuY29udGVudFByb3BzLmhhcyhrZXkpKSB7XG4gICAgICAgIHNob3VsZFVwZGF0ZVN0eWxlcyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaG91bGRVcGRhdGVTdHlsZXMpIHtcbiAgICAgIC8vIERvdWJsZSB0aGUgYDpob3N0YCBzZWxlY3RvciB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSBiZXlvbmQgbW9zdCBjb21wb25lbnQgbGV2ZWwgc3R5bGVzIGJ5IGRlZmF1bHRcbiAgICAgIHRoaXMuc2V0SW5zdGFuY2VTdHlsZSgnY29udGVudC1iYXNlJywgc2VsZWN0b3JGYWN0b3J5KHRoaXMuY29udGVudFN0eWxlU2VsZWN0b3JSb290KSwge1xuICAgICAgICAvLyBTcGFjaW5nXG4gICAgICAgIG06IHRoaXMubSxcbiAgICAgICAgbXg6IHRoaXMubXgsXG4gICAgICAgIG15OiB0aGlzLm15LFxuICAgICAgICBtdDogdGhpcy5tdCxcbiAgICAgICAgbXI6IHRoaXMubXIsXG4gICAgICAgIG1iOiB0aGlzLm1iLFxuICAgICAgICBtbDogdGhpcy5tbCxcbiAgICAgICAgcDogdGhpcy5wLFxuICAgICAgICBweDogdGhpcy5weCxcbiAgICAgICAgcHk6IHRoaXMucHksXG4gICAgICAgIHB0OiB0aGlzLnB0LFxuICAgICAgICBwcjogdGhpcy5wcixcbiAgICAgICAgcGI6IHRoaXMucGIsXG4gICAgICAgIHBsOiB0aGlzLnBsLFxuICAgICAgICAvLyBQb3NpdGlvbmluZ1xuICAgICAgICBkOiB0aGlzLnN1YmdyaWQgPyAnZ3JpZCcgOiB0aGlzLmQsXG4gICAgICAgIGFsaWduSXRlbXM6IHRoaXMuYSA/PyB0aGlzLmFsaWduSXRlbXMsXG4gICAgICAgIGFsaWduU2VsZjogdGhpcy5hbGlnblNlbGYsXG4gICAgICAgIGFsaWduQ29udGVudDogdGhpcy5hbGlnbkNvbnRlbnQsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiB0aGlzLmogPz8gdGhpcy5qdXN0aWZ5Q29udGVudCxcbiAgICAgICAganVzdGlmeUl0ZW1zOiB0aGlzLmp1c3RpZnlJdGVtcyxcbiAgICAgICAganVzdGlmeVNlbGY6IHRoaXMuanVzdGlmeVNlbGYsXG4gICAgICAgIGZsZXg6IHRoaXMuZmxleCxcbiAgICAgICAgZmxleERpcmVjdGlvbjogdGhpcy5kaXJlY3Rpb24gPz8gdGhpcy5mbGV4RGlyZWN0aW9uLFxuICAgICAgICBmbGV4QmFzaXM6IHRoaXMuYmFzaXMgPz8gdGhpcy5mbGV4QmFzaXMsXG4gICAgICAgIGZsZXhTaHJpbms6IHRoaXMuc2hyaW5rID8/IHRoaXMuZmxleFNocmluayxcbiAgICAgICAgZmxleEdyb3c6IHRoaXMuZ3JvdyA/PyB0aGlzLmZsZXhHcm93LFxuICAgICAgICBmbGV4V3JhcDogdGhpcy53cmFwID8/IHRoaXMuZmxleFdyYXAsXG4gICAgICAgIG9yZGVyOiB0aGlzLm9yZGVyLFxuICAgICAgICBnYXA6IHRoaXMuZ2FwLFxuICAgICAgICBjb2x1bW5HYXA6IHRoaXMuY29sdW1uR2FwLFxuICAgICAgICByb3dHYXA6IHRoaXMucm93R2FwLFxuICAgICAgICBncmlkQ29sdW1uOiB0aGlzLmxheW91dEJsZWVkID8gdGhpcy5sYXlvdXRCbGVlZCA6IHRoaXMuZ3JpZENvbHVtbixcbiAgICAgICAgZ3JpZFJvdzogdGhpcy5ncmlkUm93LFxuICAgICAgICBncmlkQXV0b0Zsb3c6IHRoaXMuZ3JpZEF1dG9GbG93LFxuICAgICAgICBncmlkQXV0b0NvbHVtbnM6IHRoaXMuZ3JpZEF1dG9Db2x1bW5zLFxuICAgICAgICBncmlkQXV0b1Jvd3M6IHRoaXMuZ3JpZEF1dG9Sb3dzLFxuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiB0aGlzLnN1YmdyaWQgPyAnc3ViZ3JpZCcgOiB0aGlzLmdyaWRUZW1wbGF0ZUNvbHVtbnMsXG4gICAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6IHRoaXMuZ3JpZFRlbXBsYXRlUm93cyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlQXJlYXM6IHRoaXMuZ3JpZFRlbXBsYXRlQXJlYXMsXG4gICAgICAgIGdyaWRBcmVhOiB0aGlzLmdyaWRBcmVhLFxuICAgICAgICAvLyBTaXppbmdcbiAgICAgICAgdzogdGhpcy53LFxuICAgICAgICBtYXh3OiB0aGlzLm1heHcsXG4gICAgICAgIG1pbnc6IHRoaXMubWludyxcbiAgICAgICAgaDogdGhpcy5oLFxuICAgICAgICBtYXhoOiB0aGlzLm1heGgsXG4gICAgICAgIG1pbmg6IHRoaXMubWluaCxcbiAgICAgICAgLy8gQ29sb3JzXG4gICAgICAgIGJnOiB0aGlzLmJnLFxuICAgICAgICBjOiB0aGlzLmMsXG4gICAgICAgIC8vIEJvcmRlcnNcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuYm9yZGVyQ29sb3IsXG4gICAgICAgIGJvcmRlcldpZHRoOiB0aGlzLmJvcmRlcldpZHRoLFxuICAgICAgICBib3JkZXJTdHlsZTogdGhpcy5ib3JkZXJTdHlsZSxcbiAgICAgICAgYm9yZGVyOiB0aGlzLmJvcmRlclxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlclRvcDogdGhpcy5ib3JkZXJUb3BcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJSaWdodDogdGhpcy5ib3JkZXJSaWdodFxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlckxlZnQ6IHRoaXMuYm9yZGVyTGVmdFxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlckJvdHRvbTogdGhpcy5ib3JkZXJCb3R0b21cbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICAvLyBCb3JkZXIgUmFkaXVzXG4gICAgICAgIGJvcmRlclJhZGl1czogdGhpcy5ib3JkZXJSYWRpdXMsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOlxuICAgICAgICAgIHRoaXMuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPz8gdGhpcy5ib3JkZXJUb3BSYWRpdXMgPz8gdGhpcy5ib3JkZXJSaWdodFJhZGl1cyxcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlclRvcExlZnRSYWRpdXMgPz8gdGhpcy5ib3JkZXJUb3BSYWRpdXMgPz8gdGhpcy5ib3JkZXJMZWZ0UmFkaXVzLFxuICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID8/IHRoaXMuYm9yZGVyQm90dG9tUmFkaXVzID8/IHRoaXMuYm9yZGVyUmlnaHRSYWRpdXMsXG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID8/IHRoaXMuYm9yZGVyQm90dG9tUmFkaXVzID8/IHRoaXMuYm9yZGVyTGVmdFJhZGl1cyxcbiAgICAgICAgLy8gRm9udHNcbiAgICAgICAgbGluZUhlaWdodDogdGhpcy5saW5lSGVpZ2h0LFxuICAgICAgICBmb250V2VpZ2h0OiB0aGlzLmZ3ID8/IHRoaXMuZm9udFdlaWdodCxcbiAgICAgICAgZm9udFNpemU6IHRoaXMuZnMgPz8gdGhpcy5mb250U2l6ZSxcbiAgICAgICAgZm9udEZhbWlseTogdGhpcy5mb250RmFtaWx5LFxuICAgICAgICAvLyBPcGFjaXR5XG4gICAgICAgIG9wYWNpdHk6IHRoaXMub3BhY2l0eSxcbiAgICAgICAgLy8gRWxldmF0aW9uXG4gICAgICAgIGVsZXZhdGlvbjogdGhpcy5lbGV2YXRpb24sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBkZWZhdWx0Q29udmVydGVyIH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGNvbnN0IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciA9IHtcbiAgZnJvbUF0dHJpYnV0ZTogKHZhbHVlLCB0eXBlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh2YWx1ZT8uWzBdID09PSAneycpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgdHlwZSk7XG4gIH0sXG4gIHRvQXR0cmlidXRlOiAodmFsdWUsIHR5cGUpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIudG9BdHRyaWJ1dGUodmFsdWUsIE9iamVjdCk7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLnRvQXR0cmlidXRlKHZhbHVlLCB0eXBlKTtcbiAgfSxcbn07XG4iLCAiaW1wb3J0IHsgRGlyZWN0aXZlUmVzdWx0IH0gZnJvbSAnbGl0L2RpcmVjdGl2ZS5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTVkcsIFVuc2FmZVNWR0RpcmVjdGl2ZSB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL3Vuc2FmZS1zdmcuanMnO1xuXG5leHBvcnQgY29uc3QgaGViTG9nb1N2Z0NvbnRlbnRzOiBEaXJlY3RpdmVSZXN1bHQ8dHlwZW9mIFVuc2FmZVNWR0RpcmVjdGl2ZT4gPSB1bnNhZmVTVkcoXG4gIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIGlkPVwiTGF5ZXJfMVwiIHg9XCIwXCIgeT1cIjBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MzYuMjcgMTg2LjI0XCI+PHN0eWxlPi5zdDB7ZmlsbDojZTEyNTFifS5zdDF7ZmlsbDojZmZmfTwvc3R5bGU+PGcgaWQ9XCJfeDMxXy1IRUJfTUFJTl9MT0dPXzAwMDAwMDk2MDQzNDA0MjA2ODYxODgwODcwMDAwMDA0ODEzMjQwOTM4OTQ2ODU1MzU1X1wiPjxwYXRoIGQ9XCJNOTMuMTIgMTg2LjI0QzQxLjY5IDE4Ni4yNCAwIDE0NC41NSAwIDkzLjEyUzQxLjY5IDAgOTMuMTIgMGgzNTAuMDNjNTEuNDMgMCA5My4xMiA0MS42OSA5My4xMiA5My4xMnMtNDEuNjkgOTMuMTItOTMuMTIgOTMuMTJIOTMuMTJ6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk05My4xMiAxNzQuMTljLTQ0Ljc2IDAtODEuMDUtMzYuMjktODEuMDUtODEuMDVzMzYuMjktODEuMDUgODEuMDUtODEuMDVoMzUwLjAzYzQ0Ljc2IDAgODEuMDUgMzYuMjkgODEuMDUgODEuMDVzLTM2LjI5IDgxLjA1LTgxLjA1IDgxLjA1SDkzLjEyelwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJtNDQ0Ljk0IDI0LjExLTM1My42NC4wMmMtMzcuMDcgMC02Ny4yIDMwLjk1LTY3LjE2IDY5LjA3IDAgMzcuOTMgMzAuMTYgNjguODggNjcuMTYgNjguODhsMzUzLjYzLS4wN2MzNy4xLS4wMyA2Ny4xNS0zMC44OSA2Ny4yLTY4Ljg1LS4wNC0zOC4yLTMwLjA5LTY5LjA1LTY3LjE5LTY5LjA1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNMjI0LjIxIDEzMi4yM2g4OC4xbC43Ni0xMi45OGgtNTYuMTh2LTE0Ljg0aDQ0LjgxVjg5LjMzaC00NC44MVY3My4yNWw1OC45Mi0uMDEgMS4xNS0xOS4yOWgtOTcuNHpNMTMyLjQ2IDUzLjk1djM1LjM4SDEwOC42VjUzLjk1SDcxLjI3bDQuNjUgNzguMjhoMzIuNjh2LTI3LjgyaDIzLjg2djI3LjgyaDMyLjY4bDQuNjUtNzguMjh6TTQ0OC41MiA5Ny4wMmM5LjktMi44MyAxNi40OS04LjU5IDE2LjQ5LTIwLjY3LjAzLTEzLjgyLTExLjA2LTIyLjQtMjUuMjktMjIuNGgtNzMuMjhsNC42NSA3OC4yOWg2NC4wNmMyNy45OCAwIDI2LjM5LTE4LjggMjYuMzktMTguOCAwLTcuOTYtNS4zMy0xNC42MS0xMy4wMi0xNi40MnptLTMxLjAyIDIyLjIyaC0xMy43MXYtMTQuODNoMTMuMjJjNy4yMyAwIDExLjA5IDIuMzEgMTEuMDkgNy40OC4wMSA0Ljk0LTMuNDkgNy4zNS0xMC42IDcuMzV6bTEuMDYtMjkuOTFoLTE0Ljc3VjczLjI1aDE0LjI1YzcuODUgMCAxMi4wMyAyLjUgMTIuMDMgOC4xMSAwIDUuMzUtMy43OSA3Ljk3LTExLjUxIDcuOTd6TTE4Mi43NiA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpNMzI5LjY0IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4elwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJNNTMwLjM0IDE3Mi43N2MwLTIuNDYtMS40Ni0zLjU0LTQuNC0zLjU0aC00Ljc0djEyLjQ0aDEuODh2LTUuMzloMi4xN2wzLjI4IDUuMzloMi4xMWwtMy41NC01LjQ4YzEuODQtLjIyIDMuMjQtMS4xOSAzLjI0LTMuNDJ6bS03LjI1IDEuOTJ2LTMuODZoMi41N2MxLjMxIDAgMi43MS4yOSAyLjcxIDEuODMgMCAxLjkyLTEuNDMgMi4wMy0zLjAzIDIuMDNoLTIuMjV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk01MjUuMzcgMTY0LjY3Yy01LjkzIDAtMTAuOTYgNC41Ny0xMC45NiAxMC43NiAwIDYuMjQgNS4wMiAxMC44MSAxMC45NiAxMC44MSA1Ljg4IDAgMTAuOS00LjU3IDEwLjktMTAuODEgMC02LjItNS4wMi0xMC43Ni0xMC45LTEwLjc2em0wIDE5Ljc4Yy00LjkzIDAtOC43OS0zLjgzLTguNzktOS4wMiAwLTUuMTEgMy44NS04Ljk2IDguNzktOC45NiA0Ljg4IDAgOC43MyAzLjg1IDguNzMgOC45NiAwIDUuMTktMy44NSA5LjAyLTguNzMgOS4wMnpcIiBjbGFzcz1cInN0MFwiLz48L2c+PC9zdmc+YFxuKTtcblxuZXhwb3J0IGNvbnN0IGhlYkxvZ29XaGl0ZUNvcHlyaWdodFN2Z0NvbnRlbnRzOiBEaXJlY3RpdmVSZXN1bHQ8dHlwZW9mIFVuc2FmZVNWR0RpcmVjdGl2ZT4gPVxuICB1bnNhZmVTVkcoXG4gICAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgaWQ9XCJMYXllcl8xXCIgeD1cIjBcIiB5PVwiMFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDUzNi4yNyAxODYuMjRcIj48c3R5bGU+LnN0MHtmaWxsOiNlMTI1MWJ9LnN0MXtmaWxsOiNmZmZ9PC9zdHlsZT48ZyBpZD1cIl94MzFfLUhFQl9NQUlOX0xPR09fMDAwMDAwOTYwNDM0MDQyMDY4NjE4ODA4NzAwMDAwMDQ4MTMyNDA5Mzg5NDY4NTUzNTVfXCI+PHBhdGggZD1cIk05My4xMiAxODYuMjRDNDEuNjkgMTg2LjI0IDAgMTQ0LjU1IDAgOTMuMTJTNDEuNjkgMCA5My4xMiAwaDM1MC4wM2M1MS40MyAwIDkzLjEyIDQxLjY5IDkzLjEyIDkzLjEycy00MS42OSA5My4xMi05My4xMiA5My4xMkg5My4xMnpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTkzLjEyIDE3NC4xOWMtNDQuNzYgMC04MS4wNS0zNi4yOS04MS4wNS04MS4wNXMzNi4yOS04MS4wNSA4MS4wNS04MS4wNWgzNTAuMDNjNDQuNzYgMCA4MS4wNSAzNi4yOSA4MS4wNSA4MS4wNXMtMzYuMjkgODEuMDUtODEuMDUgODEuMDVIOTMuMTJ6XCIgY2xhc3M9XCJzdDFcIi8+PHBhdGggZD1cIm00NDQuOTQgMjQuMTEtMzUzLjY0LjAyYy0zNy4wNyAwLTY3LjIgMzAuOTUtNjcuMTYgNjkuMDcgMCAzNy45MyAzMC4xNiA2OC44OCA2Ny4xNiA2OC44OGwzNTMuNjMtLjA3YzM3LjEtLjAzIDY3LjE1LTMwLjg5IDY3LjItNjguODUtLjA0LTM4LjItMzAuMDktNjkuMDUtNjcuMTktNjkuMDV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk0yMjQuMjEgMTMyLjIzaDg4LjFsLjc2LTEyLjk4aC01Ni4xOHYtMTQuODRoNDQuODFWODkuMzNoLTQ0LjgxVjczLjI1bDU4LjkyLS4wMSAxLjE1LTE5LjI5aC05Ny40ek0xMzIuNDYgNTMuOTV2MzUuMzhIMTA4LjZWNTMuOTVINzEuMjdsNC42NSA3OC4yOGgzMi42OHYtMjcuODJoMjMuODZ2MjcuODJoMzIuNjhsNC42NS03OC4yOHpNNDQ4LjUyIDk3LjAyYzkuOS0yLjgzIDE2LjQ5LTguNTkgMTYuNDktMjAuNjcuMDMtMTMuODItMTEuMDYtMjIuNC0yNS4yOS0yMi40aC03My4yOGw0LjY1IDc4LjI5aDY0LjA2YzI3Ljk4IDAgMjYuMzktMTguOCAyNi4zOS0xOC44IDAtNy45Ni01LjMzLTE0LjYxLTEzLjAyLTE2LjQyem0tMzEuMDIgMjIuMjJoLTEzLjcxdi0xNC44M2gxMy4yMmM3LjIzIDAgMTEuMDkgMi4zMSAxMS4wOSA3LjQ4LjAxIDQuOTQtMy40OSA3LjM1LTEwLjYgNy4zNXptMS4wNi0yOS45MWgtMTQuNzdWNzMuMjVoMTQuMjVjNy44NSAwIDEyLjAzIDIuNSAxMi4wMyA4LjExIDAgNS4zNS0zLjc5IDcuOTctMTEuNTEgNy45N3pNMTgyLjc2IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4ek0zMjkuNjQgODkuMzNsLjkgMTUuMDhoMjIuMDNsLjktMTUuMDh6TTUyOC4zNCAxNzAuNzdjMC0yLjQ2LTEuNDYtMy41NC00LjQtMy41NGgtNC43NHYxMi40NGgxLjg4di01LjM5aDIuMTdsMy4yOCA1LjM5aDIuMTFsLTMuNTQtNS40OGMxLjg0LS4yMiAzLjI0LTEuMTkgMy4yNC0zLjQyem0tNy4yNSAxLjkydi0zLjg2aDIuNTdjMS4zMSAwIDIuNzEuMjkgMi43MSAxLjgzIDAgMS45Mi0xLjQzIDIuMDMtMy4wMyAyLjAzaC0yLjI1elwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJNNTIzLjM3IDE2Mi42N2MtNS45MyAwLTEwLjk2IDQuNTctMTAuOTYgMTAuNzYgMCA2LjI0IDUuMDIgMTAuODEgMTAuOTYgMTAuODEgNS44OCAwIDEwLjktNC41NyAxMC45LTEwLjgxIDAtNi4yLTUuMDItMTAuNzYtMTAuOS0xMC43NnptMCAxOS43OGMtNC45MyAwLTguNzktMy44My04Ljc5LTkuMDIgMC01LjExIDMuODUtOC45NiA4Ljc5LTguOTYgNC44OCAwIDguNzMgMy44NSA4LjczIDguOTYgMCA1LjE5LTMuODUgOS4wMi04LjczIDkuMDJ6XCIgY2xhc3M9XCJzdDFcIi8+PC9nPjwvc3ZnPmBcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGhlYkxvZ29JbnZlcnNlU3ZnQ29udGVudHM6IERpcmVjdGl2ZVJlc3VsdDx0eXBlb2YgVW5zYWZlU1ZHRGlyZWN0aXZlPiA9IHVuc2FmZVNWRyhcbiAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgaWQ9XCJMYXllcl8xXCIgeD1cIjBcIiB5PVwiMFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDUzNi4yNyAxODYuMjRcIj48c3R5bGU+LnN0MHtmaWxsOiNmZmZ9PC9zdHlsZT48cGF0aCBkPVwiTTQ0My4xNSAwSDkzLjEyQzQxLjY5IDAgMCA0MS42OSAwIDkzLjEyYzAgNTEuNDMgNDEuNjkgOTMuMTIgOTMuMTIgOTMuMTJoMzUwLjAzYzUxLjQzIDAgOTMuMTItNDEuNjkgOTMuMTItOTMuMTJDNTM2LjI3IDQxLjY5IDQ5NC41OCAwIDQ0My4xNSAwem0wIDE3NC4xOUg5My4xMmMtNDQuNzYgMC04MS4wNS0zNi4yOS04MS4wNS04MS4wNXMzNi4yOS04MS4wNSA4MS4wNS04MS4wNWgzNTAuMDNjNDQuNzYgMCA4MS4wNSAzNi4yOSA4MS4wNSA4MS4wNS4wMSA0NC43Ni0zNi4yOCA4MS4wNS04MS4wNSA4MS4wNXptLTEzLjA4LTkyLjgzYzAgNS4zNi0zLjc5IDcuOTgtMTEuNTEgNy45OGgtMTQuNzdWNzMuMjVoMTQuMjVjNy44NCAwIDEyLjAzIDIuNSAxMi4wMyA4LjExem0tMS45NiAzMC41M2MwIDQuOTQtMy41IDcuMzYtMTAuNjEgNy4zNmgtMTMuNzF2LTE0LjgzaDEzLjIyYzcuMjQtLjAxIDExLjEgMi4zIDExLjEgNy40N3ptMTYuODMtODcuNzgtMzUzLjY0LjAyYy0zNy4wNyAwLTY3LjIgMzAuOTUtNjcuMTYgNjkuMDcgMCAzNy45MiAzMC4xNiA2OC44OCA2Ny4xNiA2OC44OGwzNTMuNjMtLjA3YzM3LjEtLjAzIDY3LjE1LTMwLjg5IDY3LjItNjguODUtLjA0LTM4LjItMzAuMDktNjkuMDUtNjcuMTktNjkuMDV6bS0yNzkuOCAxMDguMTJoLTMyLjY4di0yNy44MkgxMDguNnYyNy44Mkg3NS45MmwtNC42NS03OC4yOGgzNy4zM3YzNS4zOGgyMy44NlY1My45NWgzNy4zM2wtNC42NSA3OC4yOHptNDAuNTUtMjcuODJoLTIyLjA0bC0uOS0xNS4wOGgyMy44M2wtLjg5IDE1LjA4em0xMTAuMTItMzEuMTctNTguOTIuMDF2MTYuMDhoNDQuODF2MTUuMDhoLTQ0LjgxdjE0LjgzaDU2LjE4bC0uNzYgMTIuOTloLTg4LjFsLTQuNjUtNzguMjhoOTcuNGwtMS4xNSAxOS4yOXptMzYuNzYgMzEuMTdoLTIyLjA0bC0uOS0xNS4wOGgyMy44M2wtLjg5IDE1LjA4em0xMDguOTcgOS4wM3MxLjU5IDE4LjgtMjYuMzkgMTguOGgtNjQuMDZsLTQuNjUtNzguMjloNzMuMjhjMTQuMjMgMCAyNS4zMSA4LjU4IDI1LjI5IDIyLjQgMCAxMi4wOC02LjU5IDE3Ljg1LTE2LjQ5IDIwLjY3IDcuNjkgMS44MSAxMy4wMiA4LjQ2IDEzLjAyIDE2LjQyek01MzAuMzQgMTcyLjc3YzAtMi40Ni0xLjQ2LTMuNTQtNC40LTMuNTRoLTQuNzR2MTIuNDRoMS44OHYtNS4zOWgyLjE3bDMuMjggNS4zOWgyLjExbC0zLjU0LTUuNDhjMS44NC0uMjIgMy4yNC0xLjE5IDMuMjQtMy40MnptLTcuMjUgMS45MnYtMy44NmgyLjU3YzEuMzEgMCAyLjcxLjI5IDIuNzEgMS44MyAwIDEuOTItMS40MyAyLjAzLTMuMDMgMi4wM2gtMi4yNXpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTUyNS4zNyAxNjQuNjdjLTUuOTMgMC0xMC45NiA0LjU3LTEwLjk2IDEwLjc2IDAgNi4yNCA1LjAyIDEwLjgxIDEwLjk2IDEwLjgxIDUuODggMCAxMC45LTQuNTcgMTAuOS0xMC44MSAwLTYuMi01LjAyLTEwLjc2LTEwLjktMTAuNzZ6bTAgMTkuNzhjLTQuOTMgMC04Ljc5LTMuODMtOC43OS05LjAyIDAtNS4xMSAzLjg1LTguOTYgOC43OS04Ljk2IDQuODggMCA4LjczIDMuODUgOC43MyA4Ljk2IDAgNS4xOS0zLjg1IDkuMDItOC43MyA5LjAyelwiIGNsYXNzPVwic3QwXCIvPjwvc3ZnPmBcbik7XG4iLCAiaW1wb3J0IHR5cGUgeyBSZWFjdGl2ZUNvbnRyb2xsZXIsIFJlYWN0aXZlQ29udHJvbGxlckhvc3QgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgU2lnbmFsLCBjb21wdXRlZCwgaXNTc3IsIHNpZ25hbCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdENvbnRyb2xsZXJPcHRpb25zIHtcbiAgLyoqIE5hbWVzIG9mIHNsb3RzIHRoYXQgc2hvdWxkIHRyaWdnZXIgYSBjb21wb25lbnQgdXBkYXRlIGlmIGNoYW5nZWQgKi9cbiAgdXBkYXRlT25DaGFuZ2U/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFNsb3RDb250cm9sbGVyIGltcGxlbWVudHMgUmVhY3RpdmVDb250cm9sbGVyIHtcbiAgcHVibGljIHNsb3RDaGFuZ2UgPSBzaWduYWw8U2V0PHN0cmluZz4+KG51bGwpO1xuICBwdWJsaWMgb25Db25uZWN0ZWQgPSBzaWduYWwoZmFsc2UpO1xuICBwdWJsaWMgY29ubmVjdGVkQ29tcGxldGUgPSBmYWxzZTtcblxuICBwcml2YXRlIHN1YnMgPSBbXTtcbiAgcHJpdmF0ZSB1cGRhdGVUcmlnZ2VyU2xvdHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaG9zdDogUmVhY3RpdmVDb250cm9sbGVySG9zdCAmIEVsZW1lbnQsXG4gICAgcHVibGljIG9wdGlvbnM6IFNsb3RDb250cm9sbGVyT3B0aW9ucyA9IG51bGxcbiAgKSB7XG4gICAgdGhpcy5ob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XG4gICAgdGhpcy51cGRhdGVPbkNoYW5nZShvcHRpb25zPy51cGRhdGVPbkNoYW5nZSk7XG4gIH1cblxuICAvKiogRW1pdHMgd2hlbiBvbmUgb2YgdGhlIHNwZWNpZmllZCBzbG90cyBoYXMgY2hhbmdlZCBhbmQgYWZ0ZXIgdGhlIGZpcnN0VXBkYXRlIGFmdGVyIGhvc3RDb25uZWN0ZWQgKi9cbiAgcHVibGljIHdhdGNoU2xvdHMoc2xvdHM6IHN0cmluZ1tdID0gW10sIHsgdXBkYXRlT25Db25uZWN0ZWQgfSA9IHsgdXBkYXRlT25Db25uZWN0ZWQ6IHRydWUgfSkge1xuICAgIGNvbnN0IHJldHVyblNpZ25hbCA9IHNpZ25hbDxTZXQ8c3RyaW5nPj4oKTtcbiAgICB0aGlzLnN1YnMucHVzaChcbiAgICAgIGNvbXB1dGVkKFxuICAgICAgICBbdGhpcy5vbkNvbm5lY3RlZCwgdGhpcy5zbG90Q2hhbmdlXSxcbiAgICAgICAgKFtjb25uZWN0ZWQsIGNoYW5nZXNdOiBbYm9vbGVhbiwgU2V0PHN0cmluZz5dLCBzZXQpID0+IHtcbiAgICAgICAgICBpZiAodXBkYXRlT25Db25uZWN0ZWQgJiYgY29ubmVjdGVkICYmICF0aGlzLmNvbm5lY3RlZENvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RlZENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldChuZXcgU2V0KHNsb3RzKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNoYW5nZXMgJiZcbiAgICAgICAgICAgIEFycmF5LmZyb20oY2hhbmdlcy5rZXlzKCkpLnNvbWUoKGtleSkgPT4gc2xvdHMubGVuZ3RoID09PSAwIHx8IHNsb3RzLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBzZXQoY2hhbmdlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApLnN1YnNjcmliZSgoY2hhbmdlczogU2V0PHN0cmluZz4pID0+IHtcbiAgICAgICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgICAgICByZXR1cm5TaWduYWwuc2V0KGNoYW5nZXMpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgcmV0dXJuIHJldHVyblNpZ25hbCBhcyBTaWduYWw8U2V0PHN0cmluZz4+O1xuICB9XG5cbiAgcHVibGljIGNoZWNrKHNsb3ROYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc2xvdE5hbWUgPT09ICdkZWZhdWx0JyA/IHRoaXMuaGFzRGVmYXVsdFNsb3QoKSA6IHRoaXMuaGFzTmFtZWRTbG90KHNsb3ROYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVPbkNoYW5nZShzbG90czogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzbG90cykpIHtcbiAgICAgIHNsb3RzLmZvckVhY2goKHNsb3QpID0+IHRoaXMudXBkYXRlVHJpZ2dlclNsb3RzLmFkZChzbG90KSk7XG4gICAgfSBlbHNlIGlmIChzbG90cykge1xuICAgICAgdGhpcy51cGRhdGVUcmlnZ2VyU2xvdHMuYWRkKHNsb3RzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhc0RlZmF1bHRTbG90KCkge1xuICAgIHJldHVybiBbLi4udGhpcy5ob3N0LmNoaWxkTm9kZXNdLnNvbWUoKG5vZGUpID0+IHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBub2RlLlRFWFRfTk9ERSAmJiBub2RlLnRleHRDb250ZW50Py50cmltKCkgIT09ICcnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgY29uc3QgZWwgPSBub2RlIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vIElnbm9yZSB2aXN1YWxseSBoaWRkZW4gZWxlbWVudHMgc2luY2UgdGhleSBhcmVuJ3QgcmVuZGVyZWRcbiAgICAgICAgaWYgKHRhZ05hbWUgPT09ICdtdGUtdmlzdWFsbHktaGlkZGVuJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGRvZXNuJ3QgaGF2ZSBhIHNsb3QgYXR0cmlidXRlLCBpdCdzIHBhcnQgb2YgdGhlIGRlZmF1bHQgc2xvdFxuICAgICAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgnc2xvdCcpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNOYW1lZFNsb3QobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LnF1ZXJ5U2VsZWN0b3IoYDpzY29wZSA+IFtzbG90PVwiJHtuYW1lfVwiXWApICE9PSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTbG90Q2hhbmdlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHNsb3QgPSBldmVudC50YXJnZXQgYXMgSFRNTFNsb3RFbGVtZW50O1xuXG4gICAgLy8gU2V0dXAgZXZlbnQgbWFwXG4gICAgY29uc3QgZXZlbnRTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICAvLyBBZGQgZHVwbGljYXRlIG1hcHBpbmcgZm9yIHNpbXBsaWZpZWQgZGVmYXVsdCBuYW1lXG4gICAgaWYgKHNsb3QubmFtZSA9PT0gJ1tkZWZhdWx0XScgfHwgc2xvdC5uYW1lID09PSAnJykge1xuICAgICAgZXZlbnRTZXQuYWRkKCdkZWZhdWx0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50U2V0LmFkZChzbG90Lm5hbWUpO1xuICAgIH1cblxuICAgIC8vIEVtaXQgc2xvdCBjaGFuZ2UgcmVhY3RpdmUgZXZlbnRcbiAgICB0aGlzLnNsb3RDaGFuZ2Uuc2V0KGV2ZW50U2V0KTtcblxuICAgIC8vIEF1dG9tYXRpY2FsbHkgcmVxdWVzdCBhIGNvbXBvbmVudCB1cGRhdGUgYXMgY29uZmlndXJhdGlvbiBkaWN0YXRlc1xuICAgIGlmIChcbiAgICAgICh0aGlzLnVwZGF0ZVRyaWdnZXJTbG90cy5oYXMoJ2RlZmF1bHQnKSAmJiAhc2xvdC5uYW1lKSB8fFxuICAgICAgKHNsb3QubmFtZSAmJiB0aGlzLnVwZGF0ZVRyaWdnZXJTbG90cy5oYXMoc2xvdC5uYW1lKSlcbiAgICApIHtcbiAgICAgIHRoaXMuaG9zdC5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIGhvc3RDb25uZWN0ZWQoKSB7XG4gICAgdGhpcy5ob3N0LnNoYWRvd1Jvb3Q/LmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCB0aGlzLmhhbmRsZVNsb3RDaGFuZ2UpO1xuXG4gICAgLy8gV2FpdCB1bnRpbCBmaXJzdCB1cGRhdGUgYWZ0ZXIgY29ubmVjdGVkXG4gICAgdGhpcy5ob3N0LnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5vbkNvbm5lY3RlZC5zZXQodHJ1ZSk7XG4gICAgICAvLyBUT0RPKHJlZWNlKTogcmVjb25zaWRlciB3aGVuIGEgc29sdXRpb24gZXhpc3RzIGZvciBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9pc3N1ZXMvMTQzNFxuICAgICAgLy8gSWYgYWZ0ZXIgdGhlIGZpcnN0VXBkYXRlIHdlJ3JlIHdhdGNoaW5nIHNsb3RzIHJlcXVlc3QgYW5vdGhlciBpbiBjYXNlIHNzci1zbG90cyB3YXMgbm90IHByb3Blcmx5IHNldCBieSB0aGUgdXNlclxuICAgICAgaWYgKHRoaXMudXBkYXRlVHJpZ2dlclNsb3RzLnNpemUgPiAwKSB7XG4gICAgICAgIHRoaXMuaG9zdC5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBob3N0RGlzY29ubmVjdGVkKCkge1xuICAgIHRoaXMuaG9zdC5zaGFkb3dSb290Py5yZW1vdmVFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgdGhpcy5oYW5kbGVTbG90Q2hhbmdlKTtcbiAgICB0aGlzLnN1YnMuZm9yRWFjaCgodW5zdWIpID0+IHVuc3ViKCkpO1xuICAgIHRoaXMuc3VicyA9IFtdO1xuICAgIHRoaXMuY29ubmVjdGVkQ29tcGxldGUgPSBmYWxzZTtcbiAgICB0aGlzLm9uQ29ubmVjdGVkLnNldChmYWxzZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIHNsb3QsIHRoaXMgZnVuY3Rpb24gaXRlcmF0ZXMgb3ZlciBhbGwgb2YgaXRzIGFzc2lnbmVkIGVsZW1lbnQgYW5kIHRleHQgbm9kZXMgYW5kIHJldHVybnMgdGhlIGNvbmNhdGVuYXRlZFxuICogSFRNTCBhcyBhIHN0cmluZy4gVGhpcyBpcyB1c2VmdWwgYmVjYXVzZSB3ZSBjYW4ndCB1c2Ugc2xvdC5pbm5lckhUTUwgYXMgYW4gYWx0ZXJuYXRpdmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbm5lckhUTUwoc2xvdDogSFRNTFNsb3RFbGVtZW50KTogc3RyaW5nIHtcbiAgY29uc3Qgbm9kZXMgPSBzbG90LmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pO1xuICBsZXQgaHRtbCA9ICcnO1xuXG4gIFsuLi5ub2Rlc10uZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgaHRtbCArPSAobm9kZSBhcyBIVE1MRWxlbWVudCkub3V0ZXJIVE1MO1xuICAgIH1cblxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgaHRtbCArPSBub2RlLnRleHRDb250ZW50O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGh0bWw7XG59XG5cbi8qKlxuICogR2l2ZW4gYSBzbG90LCB0aGlzIGZ1bmN0aW9uIGl0ZXJhdGVzIG92ZXIgYWxsIG9mIGl0cyBhc3NpZ25lZCB0ZXh0IG5vZGVzIGFuZCByZXR1cm5zIHRoZSBjb25jYXRlbmF0ZWQgdGV4dCBhcyBhXG4gKiBzdHJpbmcuIFRoaXMgaXMgdXNlZnVsIGJlY2F1c2Ugd2UgY2FuJ3QgdXNlIHNsb3QudGV4dENvbnRlbnQgYXMgYW4gYWx0ZXJuYXRpdmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0Q29udGVudChzbG90OiBIVE1MU2xvdEVsZW1lbnQgfCB1bmRlZmluZWQgfCBudWxsKTogc3RyaW5nIHtcbiAgaWYgKCFzbG90KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGNvbnN0IG5vZGVzID0gc2xvdC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KTtcbiAgbGV0IHRleHQgPSAnJztcblxuICBbLi4ubm9kZXNdLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIHRleHQgKz0gbm9kZS50ZXh0Q29udGVudDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG5pbXBvcnQge1xuICBjb25maWcgYXMgZ2V0dGVyQ29uZmlnLFxuICBzZXRDb25maWcgYXMgc2V0dGVyQ29uZmlnLFxuICBNb3J0YXJUaGVtZUNvbmZpZyxcbn0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgU3Vic2V0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNTc3IsIHNpZ25hbCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCB0eXBlIE10ZVRoZW1lID0gJ2RlZmF1bHQnIHwgJ3B4TGlnaHQnIHwgJ2N4TGlnaHQnIHwgJ3J4TGlnaHQnO1xuXG5leHBvcnQgdHlwZSBNdGVDb2xvclNjaGVtZSA9ICdsaWdodCcgfCAnZGFyaycgfCAnc3lzdGVtJztcblxuY29uc3QgQ0FDSEVfVE9fS0VZID0gJ210ZS50aGVtZS5jYWNoZS10byc7XG5jb25zdCBDT0xPUl9TQ0hFTUVfS0VZID0gJ210ZS50aGVtZS5nbG9iYWwtY29sb3Itc2NoZW1lJztcblxuY2xhc3MgX010ZVRoZW1lU2VydmljZSB7XG4gIGNvbmZpZyA9IGdldHRlckNvbmZpZztcblxuICBwcml2YXRlIHJvb3RPYnNlcnZlcj86IE11dGF0aW9uT2JzZXJ2ZXI7XG4gIHByaXZhdGUgdGhlbWVTaWduYWwgPSBzaWduYWw8TXRlVGhlbWUgfCBudWxsPih0aGlzLmdldEdsb2JhbFRoZW1lKCkpO1xuICBwcml2YXRlIGNvbG9yU2NoZW1lU2lnbmFsID0gc2lnbmFsPE10ZUNvbG9yU2NoZW1lIHwgbnVsbD4odGhpcy5nZXRHbG9iYWxDb2xvclNjaGVtZSgpID8/ICdsaWdodCcpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdENhY2hlKCk7XG4gIH1cblxuICAvKiogQ29uZmlndXJlcyB0aGUgYE10ZVRoZW1lU2VydmljZWAgdG8gY2FjaGUgY29sb3Itc2NoZW1lIGNoYW5nZXMgdG8gYGxvY2FsU3RvcmFnZWAsIGBzZXNzaW9uU3RvcmFnZWAsIG9yIG5laXRoZXIuICovXG4gIHB1YmxpYyBjYWNoZUNvbG9yU2NoZW1lVG8obWV0aG9kOiAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZScpIHtcbiAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBDbGVhciBhbGwga2V5cyBmcm9tIGFsbCBzdG9yYWdlIGxvY2F0aW9ucyBpZiBub25lXG4gICAgaWYgKG1ldGhvZCA9PT0gJ25vbmUnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShDT0xPUl9TQ0hFTUVfS0VZKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB0cnkge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oQ09MT1JfU0NIRU1FX0tFWSk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50U2NoZW1lID0gdGhpcy5jb2xvclNjaGVtZVNpZ25hbC5nZXQoKTtcbiAgICAvLyBTZXQgY2FjaGUgbWV0aG9kIGluIHN0b3JhZ2UgLSBUcnkgbG9jYWxTdG9yYWdlIGZpcnN0XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENBQ0hFX1RPX0tFWSwgbWV0aG9kKTtcbiAgICAgIGlmIChjdXJyZW50U2NoZW1lKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENPTE9SX1NDSEVNRV9LRVksIGN1cnJlbnRTY2hlbWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdNdGVUaGVtZVNlcnZpY2U6IENvdWxkIG5vdCBzZXQgY29sb3Igc2NoZW1lIGNhY2hlIG1ldGhvZCB0byBgbG9jYWxTdG9yYWdlYC4gQXR0ZW1wdGluZyBmYWxsYmFjayB0byBgc2Vzc2lvblN0b3JhZ2VgLiBDYWNoaW5nIHdpbGwgb25seSBoYXBwZW4gdG8gc2Vzc2lvblN0b3JhZ2UuJ1xuICAgICAgKTtcbiAgICAgIC8vIFRyeSBzZXNzaW9uU3RvcmFnZSBuZXh0XG4gICAgICB0cnkge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKENBQ0hFX1RPX0tFWSwgJ3Nlc3Npb25TdG9yYWdlJyk7XG4gICAgICAgIGlmIChjdXJyZW50U2NoZW1lKSB7XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShDT0xPUl9TQ0hFTUVfS0VZLCBjdXJyZW50U2NoZW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdNdGVUaGVtZVNlcnZpY2U6IENvdWxkIG5vdCBzZXQgY29sb3Igc2NoZW1lIGNhY2hlIG1ldGhvZCB0byBgbG9jYWxTdG9yYWdlYCBvciBgc2Vzc2lvblN0b3JhZ2VgLiBDYWNoaW5nIG5vdCBlbmFibGVkLidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgY3VycmVudCBnbG9iYWwgdGhlbWUgb24gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIHNldEdsb2JhbFRoZW1lKHRoZW1lOiBNdGVUaGVtZSkge1xuICAgIGlmICghdGhlbWUgfHwgdHlwZW9mIHRoZW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdGVUaGVtZVNlcnZpY2U6IEdsb2JhbCB0aGVtZSBwYXJhbSBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICAgIH1cbiAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgIGlmICh0aGVtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2RhdGEtbXRlLXRoZW1lJywgdGhlbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbXRlLXRoZW1lJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldHMgdGhlIGN1cnJlbnQgZ2xvYmFsIGNvbG9yLXNjaGVtZSBvbiB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgc2V0R2xvYmFsQ29sb3JTY2hlbWUoY29sb3JTY2hlbWU6IE10ZUNvbG9yU2NoZW1lKSB7XG4gICAgaWYgKCFjb2xvclNjaGVtZSB8fCB0eXBlb2YgY29sb3JTY2hlbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ010ZVRoZW1lU2VydmljZTogR2xvYmFsIGNvbG9yU2NoZW1lIHBhcmFtIG11c3QgYmUgYSBzdHJpbmcuJyk7XG4gICAgfVxuICAgIGNvbnN0IHNjaGVtZSA9IGNvbG9yU2NoZW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHNjaGVtZSA9PT0gJ2RhcmsnIHx8IHNjaGVtZSA9PT0gJ2xpZ2h0JyB8fCBzY2hlbWUgPT09ICdzeXN0ZW0nKSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZScsIHNjaGVtZSk7XG4gICAgICB0aGlzLnNldENhY2hlVmFsdWUoQ09MT1JfU0NIRU1FX0tFWSwgY29sb3JTY2hlbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBjdXJyZW50IGdsb2JhbCB0aGVtZSBmcm9tIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBnZXRHbG9iYWxUaGVtZSgpOiBNdGVUaGVtZSB8IG51bGwge1xuICAgIGNvbnN0IHZhbHVlID0gZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCdkYXRhLW10ZS10aGVtZScpIGFzIE10ZVRoZW1lO1xuICAgIGlmICghWydkZWZhdWx0JywgJ3B4TGlnaHQnLCAnY3hMaWdodCcsICdyeExpZ2h0J10uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlIGFzIE10ZVRoZW1lO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBjdXJyZW50IGdsb2JhbCBjb2xvci1zY2hlbWUgZnJvbSB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgZ2V0R2xvYmFsQ29sb3JTY2hlbWUoKTogTXRlQ29sb3JTY2hlbWUgfCBudWxsIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZShcbiAgICAgICdkYXRhLW10ZS1jb2xvci1zY2hlbWUnXG4gICAgKSBhcyBNdGVDb2xvclNjaGVtZTtcbiAgICBpZiAoIVsnbGlnaHQnLCAnZGFyaycsICdzeXN0ZW0nXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgYXMgTXRlQ29sb3JTY2hlbWU7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgYSByZWFjdGl2ZSBzaWduYWwgdGhhdCB3aWxsIHVwZGF0ZSBhbnkgdGltZSB0aGUgZ2xvYmFsIHRoZW1lIGNoYW5nZXMgKi9cbiAgcHVibGljIHNlbGVjdEdsb2JhbFRoZW1lKCkge1xuICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgcmV0dXJuIHRoaXMudGhlbWVTaWduYWw7XG4gIH1cblxuICAvKiogUmV0dXJucyBhIHJlYWN0aXZlIHNpZ25hbCB0aGF0IHdpbGwgdXBkYXRlIGFueSB0aW1lIHRoZSBnbG9iYWwgY29sb3Itc2NoZW1lIGNoYW5nZXMgKi9cbiAgcHVibGljIHNlbGVjdEdsb2JhbENvbG9yU2NoZW1lKCkge1xuICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgcmV0dXJuIHRoaXMuY29sb3JTY2hlbWVTaWduYWw7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgdmFsdWUgb2YgYWxsIG9mIHRoZSBnaXZlbiB0aGVtZSB2YXJpYWJsZXMgb24gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIHNldChcbiAgICBjb25maWdGbk9yT2JqOlxuICAgICAgfCBTdWJzZXQ8TW9ydGFyVGhlbWVDb25maWc+XG4gICAgICB8ICgoY29uZmlnOiBNb3J0YXJUaGVtZUNvbmZpZykgPT4gU3Vic2V0PE1vcnRhclRoZW1lQ29uZmlnPilcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWdGbk9yT2JqID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25maWdGbk9yT2JqID0gY29uZmlnRm5Pck9iaih0aGlzLmNvbmZpZyk7XG4gICAgfVxuICAgIGNvbnN0IG1hcHBpbmdzID0gdGhpcy5mbGF0dGVuUGF0aHMoY29uZmlnRm5Pck9iaik7XG4gICAgbWFwcGluZ3MuZm9yRWFjaCgoW3BhdGgsIHZhbF0pID0+IHtcbiAgICAgIGNvbnN0IGNzc1ZhciA9IHBhdGgucmVkdWNlKChhY2MsIHByb3ApID0+IHtcbiAgICAgICAgcmV0dXJuIGFjY1twcm9wXTtcbiAgICAgIH0sIHNldHRlckNvbmZpZyk7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5zdHlsZS5zZXRQcm9wZXJ0eShjc3NWYXIsIGAke3ZhbH1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciB0aGUgcmVxdWVzdGVkIHRoZW1lIHZhcmlhYmxlIGZyb20gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIGdldDxUPihrMTogKHRoZW1lQ29uZmlnOiBNb3J0YXJUaGVtZUNvbmZpZykgPT4gVCk6IFQ7XG4gIHB1YmxpYyBnZXQ8SzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZz4oazE6IEsxKTogTW9ydGFyVGhlbWVDb25maWdbSzFdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdPihcbiAgICBrMTogSzEsXG4gICAgazI6IEsyXG4gICk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1cbiAgPihrMTogSzEsIGsyOiBLMiwgazM6IEszKTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM107XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl0sXG4gICAgSzQgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVxuICA+KGsxOiBLMSwgazI6IEsyLCBrMzogSzMsIGs0OiBLNCk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXSxcbiAgICBLNCBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdLFxuICAgIEs1IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMywgazQ6IEs0LCBrNTogSzUpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM10sXG4gICAgSzUgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF0sXG4gICAgSzYgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMywgazQ6IEs0LCBrNTogSzUsIGs2OiBLNik6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVtLNV1bSzZdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM10sXG4gICAgSzUgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF0sXG4gICAgSzYgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdXG4gID4oXG4gICAgLi4ua2V5czpcbiAgICAgIHwgW0sxXVxuICAgICAgfCBbSzEsIEsyXVxuICAgICAgfCBbSzEsIEsyLCBLM11cbiAgICAgIHwgW0sxLCBLMiwgSzMsIEs0XVxuICAgICAgfCBbSzEsIEsyLCBLMywgSzQsIEs1XVxuICAgICAgfCBbSzEsIEsyLCBLMywgSzQsIEs1LCBLNl1cbiAgKTogYW55IHtcbiAgICBjb25zdCBbZm5dID0ga2V5cyA/PyBbbnVsbF07XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgY3NzVmFyID0gKGZuIGFzIGFueSkoc2V0dGVyQ29uZmlnKTtcbiAgICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGdsb2JhbFRoaXM/LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShjc3NWYXIpO1xuICAgIH1cbiAgICBjb25zdCBjc3NWYXIgPSBrZXlzLnJlZHVjZSgoYWNjOiBhbnksIGtleSkgPT4gYWNjW2tleV0sIHNldHRlckNvbmZpZyBhcyBhbnkpIGFzIHN0cmluZztcbiAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShnbG9iYWxUaGlzPy5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoY3NzVmFyKTtcbiAgfVxuXG4gIC8qKiBGbGF0dGVucyBhIGdpdmVuIG9iamVjdCB0byBhbiBhcnJheSBvZiBwYXRoIGtleXMgYW5kIGl0cyByZXN1bHRpbmcgdmFsdWUgKi9cbiAgcHJpdmF0ZSBmbGF0dGVuUGF0aHMob2JqOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBwYXRoOiBzdHJpbmdbXSA9IFtdKTogW3N0cmluZ1tdLCBhbnldW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IG5lc3RlZCA9IG9ialtrZXldO1xuICAgICAgaWYgKHR5cGVvZiBuZXN0ZWQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHBhdGgucHVzaChrZXkpO1xuICAgICAgICBPYmplY3QuYXNzaWduKGFjYywgdGhpcy5mbGF0dGVuUGF0aHMobmVzdGVkLCBwYXRoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoLnB1c2goa2V5KTtcbiAgICAgICAgYWNjLnB1c2goW3BhdGgsIG5lc3RlZF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU11dGF0aW9uRXZlbnQgPSAobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSB7XG4gICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGF0YS1tdGUtY29sb3Itc2NoZW1lJykge1xuICAgICAgICAgIHRoaXMuY29sb3JTY2hlbWVTaWduYWwuc2V0KHRoaXMuZ2V0R2xvYmFsQ29sb3JTY2hlbWUoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2RhdGEtbXRlLXRoZW1lJykge1xuICAgICAgICAgIHRoaXMudGhlbWVTaWduYWwuc2V0KHRoaXMuZ2V0R2xvYmFsVGhlbWUoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBpbml0Q2FjaGUoKSB7XG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2FjaGVDb2xvclNjaGVtZSA9IHRoaXMuZ2V0Q2FjaGVWYWx1ZShDT0xPUl9TQ0hFTUVfS0VZKTtcbiAgICAgICAgaWYgKGNhY2hlQ29sb3JTY2hlbWUgJiYgY2FjaGVDb2xvclNjaGVtZSAhPT0gJycpIHtcbiAgICAgICAgICB0aGlzLnNldEdsb2JhbENvbG9yU2NoZW1lKGNhY2hlQ29sb3JTY2hlbWUgYXMgTXRlQ29sb3JTY2hlbWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdE9ic2VydmVyKCkge1xuICAgIGlmICghaXNTc3IoKSAmJiAhdGhpcy5yb290T2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMucm9vdE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5oYW5kbGVNdXRhdGlvbkV2ZW50KTtcbiAgICAgIHRoaXMucm9vdE9ic2VydmVyLm9ic2VydmUoZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnZGF0YS1tdGUtdGhlbWUnLCAnZGF0YS1tdGUtY29sb3Itc2NoZW1lJ10sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENhY2hlTWV0aG9kKCk6ICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJyB8IG51bGwge1xuICAgIC8vIFJldHJpZXZlIGNhY2hlIG1ldGhvZFxuICAgIGxldCBjYWNoZU1ldGhvZDogJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnIHwgbnVsbCA9IG51bGw7XG4gICAgLy8gVHJ5IGxvY2FsU3RvcmFnZVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBjYWNoZU1ldGhvZCA9IHZhbCBhcyAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZSc7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gVHJ5IHNlc3Npb25TdG9yYWdlXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB2YWwgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICBjYWNoZU1ldGhvZCA9IHZhbCBhcyAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIHJldHVybiBjYWNoZU1ldGhvZDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2FjaGVWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGNhY2hlTWV0aG9kID0gdGhpcy5nZXRDYWNoZU1ldGhvZCgpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoY2FjaGVNZXRob2QgPT09ICdsb2NhbFN0b3JhZ2UnKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChjYWNoZU1ldGhvZCA9PT0gJ3Nlc3Npb25TdG9yYWdlJykge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cblxuICBwcml2YXRlIGdldENhY2hlVmFsdWUoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjYWNoZU1ldGhvZCA9IHRoaXMuZ2V0Q2FjaGVNZXRob2QoKTtcbiAgICB0cnkge1xuICAgICAgaWYgKGNhY2hlTWV0aG9kID09PSAnbG9jYWxTdG9yYWdlJykge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIH0gZWxzZSBpZiAoY2FjaGVNZXRob2QgPT09ICdzZXNzaW9uU3RvcmFnZScpIHtcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVUaGVtZVNlcnZpY2UgPSBuZXcgX010ZVRoZW1lU2VydmljZSgpO1xuIiwgImltcG9ydCB7IGlzU3NyLCBpc1BsYXRmb3JtIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IHR5cGUgUG9ydGFsU3RhY2sgPSAnb3ZlcmxheSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydGFsZWRFbGVtZW50TWV0YWRhdGEge1xuICBlbGVtZW50OiBFbGVtZW50O1xuICBzdGFjazogUG9ydGFsU3RhY2s7XG4gIGNoaWxkUG9ydGFsZWRFbGVtZW50czogU2V0PEVsZW1lbnQ+O1xuICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ/OiBFbGVtZW50O1xuICBiYWNrZHJvcD86IEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudFBvcnRhbENvbnRyb2xsZXIge1xuICBpZDogbnVtYmVyO1xuICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ6IEVsZW1lbnQ7XG4gIG9wdGlvbnM6IHsgc3RhY2s6IFBvcnRhbFN0YWNrIH07XG59XG5cbmV4cG9ydCB0eXBlIFBvcnRhbEFkYXB0ZXI8VCA9IGFueT4gPSAoXG4gIHBvcnRhbEVsZW1lbnQ6IFQsXG4gIG91dGxldEVsZW1lbnQ6IEVsZW1lbnRcbikgPT4gUHJvbWlzZTxhbnk+IHwgYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRhbE9wdGlvbnMge1xuICAvKiogUmVuZGVycyB0aGUgYmFja2Ryb3AgZGltbWVkICovXG4gIHdpdGhEaW1CYWNrZHJvcD86IGJvb2xlYW47XG5cbiAgLyoqIE1ha2VzIHRoZSBiYWNrZHJvcCBpZ25vcmUgcG9pbnRlciBldmVudHMuIFVzZWZ1bCBmb3IgdHJpZ2dlck9uIFwiaG92ZXJcIi4gKi9cbiAgd2l0aEluZXJ0QmFja2Ryb3A/OiBib29sZWFuO1xuXG4gIC8qKiBEaXNhYmxlcyB0aGUgYWJpbGl0eSB0byBzY3JvbGwgdGhlIHBhZ2UgYmVoaW5kIHRoZSBvdmVybGF5IHdoZW4gdHJ1ZSAqL1xuICB3aXRoU2Nyb2xsTG9jaz86IGJvb2xlYW47XG5cbiAgLyoqIENhbGxiYWNrIGZvciBoYW5kbGluZyBjbG9zZU9uQ2xpY2tPdXRzaWRlIGV2ZW50cyB3aGVuIHRoZSBwb3J0YWwncyBiYWNrZHJvcCBpcyBjbGlja2VkICovXG4gIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyPzogKCkgPT4gYW55O1xuXG4gIC8qKiBUaGUgYW5pbWF0aW9uIGR1cmF0aW9uIGZvciBmYWRpbmcgYSBzaGFkb3cgYmFja2Ryb3AgaW4vb3V0ICovXG4gIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuXG4gIC8qKiBBZGFwdGVyIGZvciBcInBvcnRhbGluZ1wiIGFuIGVsZW1lbnQgZnJvbSBvbmUgbG9jYXRpb24gaW4gdGhlIERPTSB0byBhbm90aGVyLiBMZXZlcmFnZWQgYnkgZnJhbWV3b3JrIHdyYXBwZXJzIGZvciBpbXByb3ZlZCBpbnRlcm9wLiAqL1xuICBwb3J0YWxBZGFwdGVyPzogUG9ydGFsQWRhcHRlcjtcbn1cblxuLyoqIERlZmF1bHQgbmF0aXZlIERPTSBhZGFwdGVyIGZvciBwb3J0YWxpbmcgYW4gZWxlbWVudCB0byBhbm90aGVyIHRhcmdldCBlbGVtZW50ICovXG5leHBvcnQgY29uc3QgZGVmYXVsdFBvcnRhbEFkYXB0ZXI6IFBvcnRhbEFkYXB0ZXIgPSAocG9ydGFsRWxlbSwgb3V0bGV0RWxlbSkgPT4ge1xuICBvdXRsZXRFbGVtPy5hcHBlbmRDaGlsZChwb3J0YWxFbGVtKTtcbn07XG5cbmNsYXNzIF9NdGVQb3J0YWxTZXJ2aWNlIHtcbiAgLyoqIFNoYXJlZCBnbG9iYWwgY29uc3QgZm9yIHN0YWNrIGVsZW1lbnQgcmVmcyAqL1xuICBwcml2YXRlIHN0YWNrRWxlbWVudHM6IHsgb3ZlcmxheTogRWxlbWVudCB9ID0ge1xuICAgIG92ZXJsYXk6IHVuZGVmaW5lZCxcbiAgfTtcblxuICAvKiogU2hhcmVkIGdsb2JhbCBjb25zdCBmb3IgcG9ydGFsZWQgZWxlbWVudHMgbWV0YWRhdGEgKi9cbiAgcHJpdmF0ZSBwb3J0YWxlZEVsZW1lbnRzID0gbmV3IE1hcDxudW1iZXIsIE1hcDxFbGVtZW50LCBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YT4+KCk7XG5cbiAgcHJpdmF0ZSBhY3RpdmVTY3JvbGxMb2NrcyA9IG5ldyBTZXQ8RWxlbWVudD4oKTtcblxuICBwcml2YXRlIHN0YWNrTXV0YXRpb25PYnNlcnZlcj86IE11dGF0aW9uT2JzZXJ2ZXI7XG5cbiAgLyoqXG4gICAqIFdoZW4gY2FsbGVkLCB0aGlzIHNlcnZpY2Ugd2lsbCBhdHRlbXB0IHRvIGxvY2F0ZSB0aGUgYEBhbmd1bGFyL2Nka2Agb3ZlcmxheSBzdGFjay5cbiAgICogSWYgZm91bmQgdGhpcyBzZXJ2aWNlIHdpbGwgYmUgY29uZmlndXJlZCB0byB1c2UgdGhhdCBlbGVtZW50IGFzIHRoZSBgb3ZlcmxheWAgc3RhY2sgaW5zdGVhZCBvZiBpbml0aWFsaXppbmcgaXRzIG93bi5cbiAgICovXG4gIHB1YmxpYyBjb25maWd1cmVDZGtJbnRlcm9wKCkge1xuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgY29uc3QgY2RrU3RhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2RrLW92ZXJsYXktY29udGFpbmVyJyk7XG4gICAgICBpZiAoY2RrU3RhY2spIHtcbiAgICAgICAgdGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkgPSBjZGtTdGFjaztcbiAgICAgICAgdGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCh0aGlzLmlkRmFjdG9yeSgnb3ZlcmxheScpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgcG9ydGFsIGNvbnRyb2xsZXIuIEFsbCBpdGVtcyBpdCByZXF1ZXN0ZWQgdG8gYmUgcG9ydGFsZWQgd2lsbCBiZSB0cmFjayBhZ2FpbnN0IGl0LlxuICAgKiBXaGVuIHRoZSBwb3J0YWwgaXMgcmVtb3ZlZCB3ZSBjYW4gdGhlbiByZW1vdmUgYW55IGVsZW1lbnRzIGl0IGN1cnJlbnRseSBoYXMgcG9ydGFsZWQgYW5kXG4gICAqIGFueSBvZiB0aGVpciBwb3J0YWxlZCBjaGlsZHJlbi5cbiAgICovXG4gIHB1YmxpYyBhZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyKSB7XG4gICAgaWYgKCF0aGlzLnBvcnRhbGVkRWxlbWVudHMuaGFzKHBvcnRhbENvbnRyb2xsZXI/LmlkKSkge1xuICAgICAgLy8gVHJhY2sgaW4gc2V0IGJ5IElEIHNvIHdlIGRvbid0IGtlZXAgYSBsaXZlIHJlZmVyZW5jZSB0byB0aGUgY29udHJvbGxlciBpdHNlbGZcbiAgICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5zZXQocG9ydGFsQ29udHJvbGxlci5pZCwgbmV3IE1hcDxFbGVtZW50LCBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YT4oKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlbW92ZXMgYWxsIG9mIGEgcG9ydGFsIGNvbnRyb2xsZXJzIHBvcnRhbGVkIGVsZW1lbnRzIGFuZCB0aGVpciByZWZlcmVuY2VzICovXG4gIHB1YmxpYyByZW1vdmVDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyKSB7XG4gICAgLy8gQXR0ZW1wdCB0byByZW1vdmUgYWxsIGl0ZW1zIGF0dGFjaGVkIGJ5IHRoaXMgY29udHJvbGxlciBmcm9tIHRoZSBjb25maWd1cmVkIHN0YWNrXG4gICAgY29uc3QgYXR0YWNoZWRFbGVtZW50cyA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCk7XG4gICAgaWYgKGF0dGFjaGVkRWxlbWVudHMpIHtcbiAgICAgIGF0dGFjaGVkRWxlbWVudHMuZm9yRWFjaCgoaXRlbSkgPT4gdGhpcy5yZW1vdmVGcm9tU3RhY2socG9ydGFsQ29udHJvbGxlciwgaXRlbS5lbGVtZW50KSk7XG4gICAgfVxuICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5kZWxldGUocG9ydGFsQ29udHJvbGxlci5pZCk7XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlcyBhIHJlZiB0byB0aGUgY29uZmlndXJlZCBzdGFjayBleGlzdHMuIElmIGl0IGRvZXMgbm90LCB0aGUgY29uZmlndXJlZCBzdGFjayB3aWxsXG4gICAqIGJlIGNyZWF0ZWQgYW5kIGFwcGVuZGVkIHRvIHRoZSBkb2N1bWVudC4gRG9lcyBub3RoaW5nIGR1cmluZyBTU1IuXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZVN0YWNrKHN0YWNrOiBQb3J0YWxTdGFjaykge1xuICAgIGlmIChzdGFjayAhPT0gJ292ZXJsYXknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3ZlcmxheSBTdGFjazogXCIke3N0YWNrfVwiIG11c3QgYmUgJ292ZXJsYXknIGF0IHRoaXMgdGltZS5gKTtcbiAgICB9XG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10pIHtcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWRGYWN0b3J5KHN0YWNrKSk7XG4gICAgICAgIHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10gPVxuICAgICAgICAgIGVsZW0gPz9cbiAgICAgICAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuaWRGYWN0b3J5KHN0YWNrKSxcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdICYmICF0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kU3RhY2tUb0RvbSh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdKTtcblxuICAgICAgICAvLyBJbml0IG11dGF0aW9uIG9ic2VydmVyXG4gICAgICAgIC8vIFRoaXMgd2lsbCB3YXRjaCBmb3IgYW55dGltZSB0aGUgc3RhY2sgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET00gZm9yIHNvbWUgcmVhc29uXG4gICAgICAgIC8vIElmIGl0IGlzLCBpdCB3aWxsIHJlLWF0dGFjaCBpdCB0byB0aGUgRE9NIGFmdGVyIHRoZSBuZXh0IHRpY2tcbiAgICAgICAgaWYgKCF0aGlzLnN0YWNrTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgIHRoaXMuc3RhY2tNdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG1sLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtbCkge1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJlbW92ZWROb2RlIG9mIG11dGF0aW9uLnJlbW92ZWROb2Rlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkTm9kZSA9PT0gdGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsSXRlbXNGcm9tU3RhY2tzKCk7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRTdGFja1RvRG9tKHRoaXMuc3RhY2tFbGVtZW50cy5vdmVybGF5KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdPy5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5zdGFja011dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdLnBhcmVudE5vZGUsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgc3VidHJlZTogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZFN0YWNrVG9Eb20oc3RhY2tFbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKHN0YWNrRWxlbWVudCAmJiAhc3RhY2tFbGVtZW50LmlzQ29ubmVjdGVkKSB7XG4gICAgICBjb25zdCB0b2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbXRlLXRvYXN0LWNvbnRhaW5lcicpO1xuICAgICAgaWYgKHRvYXN0Q29udGFpbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHN0YWNrRWxlbWVudCwgdG9hc3RDb250YWluZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoc3RhY2tFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogQXBwZW5kcyBhbiBpdGVtIHRvIHRoZSBjb25maWd1cmVkIHBvcnRhbCBzdGFjayAqL1xuICBwdWJsaWMgYXBwZW5kVG9TdGFjayhcbiAgICBwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlcixcbiAgICBlbGVtZW50OiBFbGVtZW50LFxuICAgIHtcbiAgICAgIHdpdGhEaW1CYWNrZHJvcCA9IGZhbHNlLFxuICAgICAgd2l0aEluZXJ0QmFja2Ryb3AgPSBmYWxzZSxcbiAgICAgIHdpdGhTY3JvbGxMb2NrID0gZmFsc2UsXG4gICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyLFxuICAgICAgcG9ydGFsQWRhcHRlciA9IGRlZmF1bHRQb3J0YWxBZGFwdGVyLFxuICAgIH06IFBvcnRhbE9wdGlvbnMgPSB7fVxuICApIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnRQb3J0YWxlZEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudFBvcnRhbGVkRWxlbWVudChwb3J0YWxDb250cm9sbGVyLCBlbGVtZW50KTtcbiAgICAgIGNvbnN0IHN0YWNrTmFtZSA9IHBvcnRhbENvbnRyb2xsZXIub3B0aW9ucy5zdGFjaztcbiAgICAgIGNvbnN0IHN0YWNrID0gdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrTmFtZV07XG4gICAgICBjb25zdCBhdHRhY2hlZEVsZW1lbnRzID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKTtcblxuICAgICAgY29uc3QgYmFja2Ryb3AgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ210ZS1wb3J0YWxfX2JhY2tkcm9wJyxcbiAgICAgICAgLi4uKGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uXG4gICAgICAgICAgPyB7IHN0eWxlOiBgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHtiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbn07YCB9XG4gICAgICAgICAgOiB7fSksXG4gICAgICB9KTtcblxuICAgICAgLy8gSGFuZGxlIGJhY2tkcm9wIHN0eWxpbmdcbiAgICAgIGlmICh3aXRoSW5lcnRCYWNrZHJvcCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0taW5lcnQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh3aXRoRGltQmFja2Ryb3ApIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXNoYWRvdycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXRyYW5zcGFyZW50Jyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGVuZCBiYWNrZHJvcFxuICAgICAgc3RhY2s/LmFwcGVuZENoaWxkKGJhY2tkcm9wKTtcblxuICAgICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICAgIC8vIEFkZCBsaXN0ZW5lciBpZiBjbGljayBoYW5kbGVyIGlzIHByZXNlbnRcbiAgICAgICAgaWYgKGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyKSB7XG4gICAgICAgICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXIpO1xuICAgICAgICAgIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYmFja2Ryb3Agc2hvdWxkIGJlIGRpbSwgYW5pbWF0ZSBpdCBhZnRlciBpdCBoYXMgYmVlbiBhcHBlbmRlZCB0byB0aGUgZG9tXG4gICAgICAgIGlmICh3aXRoRGltQmFja2Ryb3ApIHtcbiAgICAgICAgICBnbG9iYWxUaGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0tc2hvdycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGx5IHNjcm9sbCBsb2NrXG4gICAgICAgIGlmICh3aXRoU2Nyb2xsTG9jaykge1xuICAgICAgICAgIHRoaXMuYXBwbHlTY3JvbGxMb2NrKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFdhaXQgZm9yIFJlYWN0IChvciBvdGhlciBmdXR1cmUgZnJhbWV3b3JrIGFkYXB0ZXIpIHRvIGFwcGVuZCBlbGVtZW50IHRvIG5ld1xuICAgICAgLy8gbG9jYXRpb24gaW4gdGhlIERPTSBiZWZvcmUgYWRkaW5nIHRvIHN0YWNrLiBEb2luZyBzbyB0cmlnZ2VycyBgaG9zdERpc2Nvbm5lY3RlZGBcbiAgICAgIC8vIHdoaWNoIHdvdWxkIGluc3RhbnRseSByZW1vdmUgdGhlIGVsZW1lbnQgaWYgbm90IGZvciB0aGlzIGV4dHJhIHRpbWVvdXQgdG8gd2FpdCBhIHRpY2tcbiAgICAgIFByb21pc2UucmVzb2x2ZShwb3J0YWxBZGFwdGVyKGVsZW1lbnQsIHN0YWNrKSkudGhlbigoKSA9PiB7XG4gICAgICAgIGF0dGFjaGVkRWxlbWVudHMuc2V0KGVsZW1lbnQsIHtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIHN0YWNrOiBzdGFja05hbWUsXG4gICAgICAgICAgYmFja2Ryb3AsXG4gICAgICAgICAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzOiBuZXcgU2V0PEVsZW1lbnQ+KCksXG4gICAgICAgICAgcGFyZW50UG9ydGFsZWRFbGVtZW50LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJlbW92ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSBzdGFjayAqL1xuICBwdWJsaWMgcmVtb3ZlRnJvbVN0YWNrKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMucG9ydGFsZWRFbGVtZW50cy5oYXMocG9ydGFsQ29udHJvbGxlci5pZCkpIHtcbiAgICAgIGNvbnN0IGF0dGFjaGVkRWxlbWVudHMgPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpO1xuICAgICAgaWYgKGF0dGFjaGVkRWxlbWVudHMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudE1ldGFkYXRhID0gYXR0YWNoZWRFbGVtZW50cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIGlmIChlbGVtZW50TWV0YWRhdGEpIHtcbiAgICAgICAgICBhdHRhY2hlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplU3RhY2tSZW1vdmUoZWxlbWVudE1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNhZmVseSByZW1vdmVzIGFsbCBpdGVtcyBmcm9tIGFsbCBzdGFja3NcbiAgcHJpdmF0ZSByZW1vdmVBbGxJdGVtc0Zyb21TdGFja3MoKSB7XG4gICAgZm9yIChsZXQgW2lkLCBjb250cm9sbGVyTWFwXSBvZiB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZW50cmllcygpKSB7XG4gICAgICBmb3IgKGxldCBbZWxlbWVudCwgZWxlbWVudE1ldGFkYXRhXSBvZiBjb250cm9sbGVyTWFwLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoZWxlbWVudE1ldGFkYXRhKSB7XG4gICAgICAgICAgdGhpcy5maW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogTWFrZXMgYSBiYWNrZHJvcCBhc3NvY2lhdGVkIHdpdGggYSBwb3J0YWxlZCBlbGVtZW50IHZpc2libGUgaWYgaXQgZXhpc3RzICovXG4gIHB1YmxpYyBzaG93QmFja2Ryb3AocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgY29uc3QgeyBiYWNrZHJvcCB9ID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKS5nZXQoZWxlbWVudCkgPz8ge307XG4gICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1zaG93Jyk7XG4gIH1cblxuICAvKiogSGlkZXMgYSBiYWNrZHJvcCBhc3NvY2lhdGVkIHdpdGggYSBwb3J0YWxlZCBlbGVtZW50IGlmIGl0IGV4aXN0cyAqL1xuICBwdWJsaWMgaGlkZUJhY2tkcm9wKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIGNvbnN0IHsgYmFja2Ryb3AgfSA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuICAgIGJhY2tkcm9wPy5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrZHJvcC0tc2hvdycpO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIGludGVydG5lc3MgYSBiYWNrZHJvcCBpZiBpdCBleGlzdHMgKHdoZXRoZXIgb3Igbm90IHRoZSB1c2VyIGNhbiBjbGljayB0aHJvdWdoIGl0KSAqL1xuICBwdWJsaWMgc2V0QmFja2Ryb3BJbmVydG5lc3MoXG4gICAgcG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsXG4gICAgZWxlbWVudDogRWxlbWVudCxcbiAgICBpbmVydDogYm9vbGVhbiA9IHRydWVcbiAgKSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIGNvbnN0IHsgYmFja2Ryb3AgfSA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuICAgIGlmIChpbmVydCkge1xuICAgICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1pbmVydCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYWNrZHJvcD8uY2xhc3NMaXN0LnJlbW92ZSgnYmFja2Ryb3AtLWluZXJ0Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGlkIGZvciB0aGUgY29uZmlndXJlZCBzdGFjayBlbGVtZW50ICovXG4gIHByaXZhdGUgaWRGYWN0b3J5ID0gKHN0YWNrOiBQb3J0YWxTdGFjaykgPT4gYG10ZS1wb3J0YWxfXyR7c3RhY2t9LXN0YWNrYDtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGFuIGVsZW1lbnQgaXMgYmVpbmcgcG9ydGFsZWQgZnJvbSB3aXRoaW4gYW5vdGhlciBwb3J0YWxlZFxuICAgKiBlbGVtZW50IGFuZCByZXR1cm5zIHRoYXQgcGFyZW50IGlmIGl0IGlzXG4gICAqL1xuICBwcml2YXRlIGdldFBhcmVudFBvcnRhbGVkRWxlbWVudChwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgZWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmIChwb3J0YWxDb250cm9sbGVyLnBhcmVudFBvcnRhbGVkRWxlbWVudCkge1xuICAgICAgcmV0dXJuIHBvcnRhbENvbnRyb2xsZXIucGFyZW50UG9ydGFsZWRFbGVtZW50O1xuICAgIH1cbiAgICBsZXQgcGFyZW50UG9ydGFsZWRFbGVtZW50OiBFbGVtZW50O1xuICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChwb3J0YWxDb250cm9sbGVyKSA9PlxuICAgICAgcG9ydGFsQ29udHJvbGxlci5mb3JFYWNoKChwb3J0YWxlZEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKHBvcnRhbGVkRWxlbWVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgcG9ydGFsZWRFbGVtZW50LmNoaWxkUG9ydGFsZWRFbGVtZW50cy5hZGQoZWxlbWVudCk7XG4gICAgICAgICAgcGFyZW50UG9ydGFsZWRFbGVtZW50ID0gcG9ydGFsZWRFbGVtZW50LmVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICAvLyBDYWNoZSB0aGUgcGFyZW50UG9ydGFsZWRFbGVtZW50IGlmIGZvdW5kIG9uIHRoZSBjb250cm9sbGVyIHNvIHdlIGNhbiByZWZlcmVuY2VcbiAgICAvLyBpdCB3aGVuIG9wZW5lZCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgIGlmIChwYXJlbnRQb3J0YWxlZEVsZW1lbnQpIHtcbiAgICAgIHBvcnRhbENvbnRyb2xsZXIucGFyZW50UG9ydGFsZWRFbGVtZW50ID0gcGFyZW50UG9ydGFsZWRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50UG9ydGFsZWRFbGVtZW50O1xuICB9XG5cbiAgLyoqIEVuc3VyZXMgYW4gZWxlbWVudCBpcyByZW1vdmVkIGZyb20gdGhlIHN0YWNrIG5vIG1hdHRlciB3aGljaCBjb250cm9sbGVyIGhhcyBwb3J0YWxlZCBpdCAqL1xuICBwcml2YXRlIHJlbW92ZUZyb21TdGFja0dsb2JhbGx5KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZm9yRWFjaCgocG9ydGFsQ29udHJvbGxlcikgPT4ge1xuICAgICAgaWYgKHBvcnRhbENvbnRyb2xsZXIuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRNZXRhZGF0YSA9IHBvcnRhbENvbnRyb2xsZXIuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBwb3J0YWxDb250cm9sbGVyLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgdGhpcy5maW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogRmluYWxpemVzIHRoZSByZW1vdmUgb2YgYW4gZWxlbWVudCBmcm9tIGEgcG9ydGFsIHN0YWNrICovXG4gIHByaXZhdGUgZmluYWxpemVTdGFja1JlbW92ZShlbGVtZW50TWV0YWRhdGE6IFBvcnRhbGVkRWxlbWVudE1ldGFkYXRhKSB7XG4gICAgaWYgKGVsZW1lbnRNZXRhZGF0YSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBzdGFjazogc3RhY2tOYW1lLFxuICAgICAgICBiYWNrZHJvcCxcbiAgICAgICAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzLFxuICAgICAgICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQsXG4gICAgICB9ID0gZWxlbWVudE1ldGFkYXRhO1xuICAgICAgY29uc3Qgc3RhY2sgPSB0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tOYW1lXTtcblxuICAgICAgLy8gUmVtb3ZlIGFueSBzY3JvbGxMb2Nrc1xuICAgICAgdGhpcy5yZW1vdmVTY3JvbGxMb2NrKGVsZW1lbnQpO1xuXG4gICAgICAvLyBFbnN1cmVzIGFuIGVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIGFueSBwYXJlbnQgcG9ydGFsZWQgZWxlbWVudHMgY2hpbGRyZW4gbGlzdHNcbiAgICAgIGlmIChwYXJlbnRQb3J0YWxlZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmZvckVhY2goKHBvcnRhbENvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICBpZiAocG9ydGFsQ29udHJvbGxlci5oYXMocGFyZW50UG9ydGFsZWRFbGVtZW50KSkge1xuICAgICAgICAgICAgcG9ydGFsQ29udHJvbGxlci5nZXQocGFyZW50UG9ydGFsZWRFbGVtZW50KS5jaGlsZFBvcnRhbGVkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZXMgYW55IGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudCBhcmUgcmVtb3ZlZCBiZWZvcmUgdGhpcyBlbGVtZW50IGlzXG4gICAgICBpZiAoY2hpbGRQb3J0YWxlZEVsZW1lbnRzLnNpemUgPiAwKSB7XG4gICAgICAgIGNoaWxkUG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB0aGlzLnJlbW92ZUZyb21TdGFja0dsb2JhbGx5KGVsZW1lbnQpKTtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZXMgdGhpcyBlbGVtZW50cyBiYWNrZHJvcCBmcm9tIHRoZSBwb3J0YWwgc3RhY2tcbiAgICAgIGlmIChiYWNrZHJvcCAmJiBiYWNrZHJvcC5wYXJlbnRFbGVtZW50ID09PSBzdGFjaykge1xuICAgICAgICBzdGFjaz8ucmVtb3ZlQ2hpbGQoYmFja2Ryb3ApO1xuICAgICAgfVxuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyBhIHJlYWN0IHdyYXBwZWQgcG9ydGFsZWQgZWxlbWVudFxuICAgICAgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudD8uaGFzQXR0cmlidXRlKCdkYXRhLW92ZXJsYXktd3JhcHBlcicpKSB7XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCA9PT0gc3RhY2spIHtcbiAgICAgICAgICBzdGFjaz8ucmVtb3ZlQ2hpbGQoZWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQgPT09IHN0YWNrKSB7XG4gICAgICAgIHN0YWNrPy5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyBhIHNjcm9sbCBsb2NrIHRvIHRoZSBib2R5IGVsZW1lbnQgdG8gcHJldmVudCBzY3JvbGxpbmcgb2YgcGFnZSBjb250ZW50LlxuICAgKiBDYWxjdWxhdGVzIGFueSBib2R5IG9mZnNldHMgZHVlIHRvIHZpc2libGUgc2Nyb2xsYmFycyBhbmQgZHluYW1pY2FsbHkgYWRqdXN0cyBmb3IgdGhlbS5cbiAgICovXG4gIHByaXZhdGUgYXBwbHlTY3JvbGxMb2NrKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFjdGl2ZVNjcm9sbExvY2tzLmFkZChlbGVtZW50KTtcblxuICAgIGNvbnN0IGlzSU9TID0gaXNQbGF0Zm9ybSgnSU9TJyk7XG4gICAgY29uc3QgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcbiAgICBjb25zdCBzY3JvbGxiYXJYID1cbiAgICAgIE1hdGgucm91bmQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpICtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIGNvbnN0IHBhZGRpbmdQcm9wID0gc2Nyb2xsYmFyWCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IHNjcm9sbFggPSBib2R5U3R5bGUubGVmdCA/IHBhcnNlRmxvYXQoYm9keVN0eWxlLmxlZnQpIDogd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgIGNvbnN0IHNjcm9sbFkgPSBib2R5U3R5bGUudG9wID8gcGFyc2VGbG9hdChib2R5U3R5bGUudG9wKSA6IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgIGJvZHlTdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbXRlLXNjcm9sbC1sb2NrLS1hY3RpdmUnKTtcblxuICAgIGlmIChzY3JvbGxiYXJXaWR0aCkge1xuICAgICAgYm9keVN0eWxlW3BhZGRpbmdQcm9wXSA9IGAke3Njcm9sbGJhcldpZHRofXB4YDtcbiAgICB9XG5cbiAgICAvLyBPbmx5IGlPUyBkb2Vzbid0IHJlc3BlY3QgYG92ZXJmbG93OiBoaWRkZW5gIG9uIGRvY3VtZW50LmJvZHksIGFuZCB0aGlzXG4gICAgLy8gdGVjaG5pcXVlIGhhcyBmZXdlciBzaWRlIGVmZmVjdHMuXG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICAvLyBpT1MgMTIgZG9lcyBub3Qgc3VwcG9ydCBgdmlzdWFsVmlld3BvcnRgLlxuICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IGdsb2JhbFRoaXMudmlzdWFsVmlld3BvcnQ/Lm9mZnNldExlZnQgfHwgMDtcbiAgICAgIGNvbnN0IG9mZnNldFRvcCA9IGdsb2JhbFRoaXMudmlzdWFsVmlld3BvcnQ/Lm9mZnNldFRvcCB8fCAwO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGJvZHlTdHlsZSwge1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgdG9wOiBgJHstKHNjcm9sbFkgLSBNYXRoLmZsb29yKG9mZnNldFRvcCkpfXB4YCxcbiAgICAgICAgbGVmdDogYCR7LShzY3JvbGxYIC0gTWF0aC5mbG9vcihvZmZzZXRMZWZ0KSl9cHhgLFxuICAgICAgICByaWdodDogJzAnLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlbW92ZXMgYW4gYWN0aXZlIHNjcm9sbExvY2sgaWYgdGhlcmUgYXJlIG5vIHJlbWFpbmluZyBlbGVtZW50cyBwb3J0YWxlZCB0aGF0IHJlcXVlc3RlZCBpdCAqL1xuICBwcml2YXRlIHJlbW92ZVNjcm9sbExvY2soZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuYWN0aXZlU2Nyb2xsTG9ja3MuZGVsZXRlKGVsZW1lbnQpO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlU2Nyb2xsTG9ja3Muc2l6ZSA9PT0gMCkge1xuICAgICAgY29uc3QgaXNJT1MgPSBpc1BsYXRmb3JtKCdJT1MnKTtcbiAgICAgIGNvbnN0IGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG4gICAgICBjb25zdCBzY3JvbGxiYXJYID1cbiAgICAgICAgTWF0aC5yb3VuZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgK1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgIGNvbnN0IHBhZGRpbmdQcm9wID0gc2Nyb2xsYmFyWCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcblxuICAgICAgT2JqZWN0LmFzc2lnbihib2R5U3R5bGUsIHtcbiAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICBbcGFkZGluZ1Byb3BdOiAnJyxcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ210ZS1zY3JvbGwtbG9jay0tYWN0aXZlJyk7XG5cbiAgICAgIGlmIChpc0lPUykge1xuICAgICAgICBPYmplY3QuYXNzaWduKGJvZHlTdHlsZSwge1xuICAgICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgICB0b3A6ICcnLFxuICAgICAgICAgIGxlZnQ6ICcnLFxuICAgICAgICAgIHJpZ2h0OiAnJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGdsb2JhbFRoaXMuc2Nyb2xsVG8oc2Nyb2xsWCwgc2Nyb2xsWSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVQb3J0YWxTZXJ2aWNlID0gbmV3IF9NdGVQb3J0YWxTZXJ2aWNlKCk7XG4iLCAiaW1wb3J0IHsgc2lnbmFsIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuY2xhc3MgX010ZUhpc3RvcnlBcGlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xuICBwcml2YXRlIGNoYW5nZVNpZ25hbCA9IHNpZ25hbCgpO1xuICBwcml2YXRlIHByZXZIcmVmOiBzdHJpbmc7XG5cbiAgcHVibGljIHN0YXRlQ2hhbmdlcygpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VTaWduYWw7XG4gIH1cblxuICBwcml2YXRlIGZvcndhcmRBcHBseSA9ICh0YXJnZXQsIHRoaXNBcmcsIGFyZ0FycmF5KSA9PiB7XG4gICAgY29uc3QgcmVzID0gdGFyZ2V0LmFwcGx5KHRoaXNBcmcsIGFyZ0FycmF5KTtcbiAgICAvLyBPbmx5IGVtaXQgYSBzdGF0ZSBjaGFuZ2UgaWYgdGhlIGhyZWYgZGlmZmVycyBmcm9tIHRoZSBsYXN0IGVtaXNzaW9uXG4gICAgaWYgKHRoaXMucHJldkhyZWYgIT09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB7XG4gICAgICB0aGlzLnByZXZIcmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICB0aGlzLmNoYW5nZVNpZ25hbC5zZXQodGhpcy5wcmV2SHJlZik7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgIC8vIExpc3RlbiBmb3IgYmFjayBldmVudHMgd2l0aCBwb3BzdGF0ZSBldmVudFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZVNpZ25hbC5zZXQod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFBhdGNoIEhpc3RvcnkgQVBJIG1ldGhvZHMgdG8gZW5zdXJlIHdlIGVtaXQgYW55dGltZSB0aGVpciBzdGF0ZSBpcyBjaGFuZ2VkXG4gICAgICAvLyBUaGlzIGlzIG5lY2Nlc2FyeSBiZWNhaXNlIHRoZSBgcG9wc3RhdGVgIGV2ZW50IGlzIG5vdCByZWxpYWJseSBjYWxsZWQgYWNyb3NzIGJyb3dzZXJzIHdoZW5ldmVyIHRoZSBoaXN0b3J5IEFQSSBpcyB1c2VkXG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LmJhY2ssIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkuZm9yd2FyZCA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmdvID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LmdvLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUsIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSwge1xuICAgICAgICBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZUhpc3RvcnlBcGlTZXJ2aWNlID0gbmV3IF9NdGVIaXN0b3J5QXBpU2VydmljZSgpO1xuIiwgImltcG9ydCB7IGlzU3NyIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IHR5cGUgTXRlRGF0ZUZvcm1hdE9wdGlvbnMgPSBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyAmIHtcbiAgbGFuZz86IHN0cmluZztcbiAgZm9ybWF0PzpcbiAgICB8ICdzaG9ydCdcbiAgICB8ICdtZWRpdW0nXG4gICAgfCAnbG9uZydcbiAgICB8ICdmdWxsJ1xuICAgIHwgJ3Nob3J0RGF0ZSdcbiAgICB8ICdtZWRpdW1EYXRlJ1xuICAgIHwgJ2xvbmdEYXRlJ1xuICAgIHwgJ2Z1bGxEYXRlJ1xuICAgIHwgJ3Nob3J0VGltZSdcbiAgICB8ICdtZWRpdW1UaW1lJ1xuICAgIHwgJ2xvbmdUaW1lJ1xuICAgIHwgJ2Z1bGxUaW1lJztcbn07XG5cbmV4cG9ydCB0eXBlIE10ZU51bWJlckZvcm1hdE9wdGlvbnMgPSBJbnRsLk51bWJlckZvcm1hdE9wdGlvbnMgJiB7IGxhbmc/OiBzdHJpbmcgfTtcblxuY2xhc3MgX010ZUxvY2FsaXplU2VydmljZSB7XG4gIC8vIEFzc3VtZSBgZW5gIGxhbmcgZm9yIG5vdyBhcyBhIGZhbGxiYWNrIHVudGlsIHdlIHJvbGxiYWNrIHdpZGVyIHN1cHBvcnQgZm9yIGkxMW4gd2hlbiBuZWNlc3NhcnlcbiAgcHJpdmF0ZSBsYW5ndWFnZSA9ICdlbic7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgaWYgKCFpc1NzcigpICYmICF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubGFuZ3VhZ2UgPSBgJHtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2V9YC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXROdW1iZXIobnVtYmVyVG9Gb3JtYXQ6IG51bWJlciB8IHN0cmluZywgb3B0aW9ucz86IE10ZU51bWJlckZvcm1hdE9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIGNvbnN0IGxhbmcgPSBvcHRpb25zPy5sYW5nID8gb3B0aW9ucy5sYW5nIDogdGhpcy5sYW5ndWFnZTtcbiAgICBudW1iZXJUb0Zvcm1hdCA9IE51bWJlcihudW1iZXJUb0Zvcm1hdCk7XG4gICAgLy8gRW5zdXJlIG5vIG51bGwgb3B0aW9ucyBleGlzdFxuICAgIGNvbnN0IGZpbmFsT3B0aW9ucyA9IHtcbiAgICAgIGxhbmc6IG9wdGlvbnMubGFuZyA/PyB1bmRlZmluZWQsXG4gICAgICBzdHlsZTogb3B0aW9ucy5zdHlsZSA/PyB1bmRlZmluZWQsXG4gICAgICBjdXJyZW5jeTogb3B0aW9ucy5jdXJyZW5jeSA/PyB1bmRlZmluZWQsXG4gICAgICBjdXJyZW5jeURpc3BsYXk6IG9wdGlvbnMuY3VycmVuY3lEaXNwbGF5ID8/IHVuZGVmaW5lZCxcbiAgICAgIHVzZUdyb3VwaW5nOiBvcHRpb25zLnVzZUdyb3VwaW5nID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbmltdW1JbnRlZ2VyRGlnaXRzOiBvcHRpb25zLm1pbmltdW1JbnRlZ2VyRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogb3B0aW9ucy5taW5pbXVtRnJhY3Rpb25EaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBvcHRpb25zLm1heGltdW1GcmFjdGlvbkRpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICBtaW5pbXVtU2lnbmlmaWNhbnREaWdpdHM6IG9wdGlvbnMubWluaW11bVNpZ25pZmljYW50RGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1heGltdW1TaWduaWZpY2FudERpZ2l0czogb3B0aW9ucy5tYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgIH07XG4gICAgcmV0dXJuIGlzTmFOKG51bWJlclRvRm9ybWF0KVxuICAgICAgPyAnJ1xuICAgICAgOiBuZXcgSW50bC5OdW1iZXJGb3JtYXQobGFuZywgZmluYWxPcHRpb25zKS5mb3JtYXQobnVtYmVyVG9Gb3JtYXQpO1xuICB9XG5cbiAgcHVibGljIGZvcm1hdERhdGUoZGF0ZVRvRm9ybWF0OiBEYXRlIHwgc3RyaW5nLCBvcHRpb25zPzogTXRlRGF0ZUZvcm1hdE9wdGlvbnMpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICBjb25zdCBsYW5nID0gb3B0aW9ucz8ubGFuZyA/IG9wdGlvbnMubGFuZyA6IHRoaXMubGFuZ3VhZ2U7XG4gICAgY29uc3QgZm9ybWF0dGVkT3B0aW9ucyA9IHsgLi4uKG9wdGlvbnMgPz8ge30pLCAuLi50aGlzLmdldERlZmluZWREYXRlRm9ybWF0KG9wdGlvbnM/LmZvcm1hdCkgfTtcbiAgICAvLyBFbnN1cmUgbm8gbnVsbCBvcHRpb25zIGV4aXN0XG4gICAgY29uc3QgZmluYWxPcHRpb25zID0ge1xuICAgICAgbGFuZzogZm9ybWF0dGVkT3B0aW9ucy5sYW5nID8/IHVuZGVmaW5lZCxcbiAgICAgIHdlZWtkYXk6IGZvcm1hdHRlZE9wdGlvbnMud2Vla2RheSA/PyB1bmRlZmluZWQsXG4gICAgICBlcmE6IGZvcm1hdHRlZE9wdGlvbnMuZXJhID8/IHVuZGVmaW5lZCxcbiAgICAgIHllYXI6IGZvcm1hdHRlZE9wdGlvbnMueWVhciA/PyB1bmRlZmluZWQsXG4gICAgICBtb250aDogZm9ybWF0dGVkT3B0aW9ucy5tb250aCA/PyB1bmRlZmluZWQsXG4gICAgICBkYXk6IGZvcm1hdHRlZE9wdGlvbnMuZGF5ID8/IHVuZGVmaW5lZCxcbiAgICAgIGhvdXI6IGZvcm1hdHRlZE9wdGlvbnMuaG91ciA/PyB1bmRlZmluZWQsXG4gICAgICBtaW51dGU6IGZvcm1hdHRlZE9wdGlvbnMubWludXRlID8/IHVuZGVmaW5lZCxcbiAgICAgIHNlY29uZDogZm9ybWF0dGVkT3B0aW9ucy5zZWNvbmQgPz8gdW5kZWZpbmVkLFxuICAgICAgZnJhY3Rpb25hbFNlY29uZERpZ2l0czogZm9ybWF0dGVkT3B0aW9ucy5mcmFjdGlvbmFsU2Vjb25kRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIHRpbWVab25lTmFtZTogZm9ybWF0dGVkT3B0aW9ucy50aW1lWm9uZU5hbWUgPz8gdW5kZWZpbmVkLFxuICAgICAgdGltZVpvbmU6IGZvcm1hdHRlZE9wdGlvbnMudGltZVpvbmUgPz8gdW5kZWZpbmVkLFxuICAgICAgaG91cjEyOiBmb3JtYXR0ZWRPcHRpb25zLmhvdXIxMiA/PyB1bmRlZmluZWQsXG4gICAgICBmb3JtYXQ6IGZvcm1hdHRlZE9wdGlvbnMuZm9ybWF0ID8/IHVuZGVmaW5lZCxcbiAgICB9O1xuICAgIGRhdGVUb0Zvcm1hdCA9IG5ldyBEYXRlKGRhdGVUb0Zvcm1hdCk7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxhbmcsIGZpbmFsT3B0aW9ucykuZm9ybWF0KGRhdGVUb0Zvcm1hdCk7XG4gIH1cblxuICBwcml2YXRlIGdldERlZmluZWREYXRlRm9ybWF0KFxuICAgIGZvcm1hdDpcbiAgICAgIHwgJ3Nob3J0J1xuICAgICAgfCAnbWVkaXVtJ1xuICAgICAgfCAnbG9uZydcbiAgICAgIHwgJ2Z1bGwnXG4gICAgICB8ICdzaG9ydERhdGUnXG4gICAgICB8ICdtZWRpdW1EYXRlJ1xuICAgICAgfCAnbG9uZ0RhdGUnXG4gICAgICB8ICdmdWxsRGF0ZSdcbiAgICAgIHwgJ3Nob3J0VGltZSdcbiAgICAgIHwgJ21lZGl1bVRpbWUnXG4gICAgICB8ICdsb25nVGltZSdcbiAgICAgIHwgJ2Z1bGxUaW1lJ1xuICApOiBNdGVEYXRlRm9ybWF0T3B0aW9ucyB7XG4gICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgIGNhc2UgJ3Nob3J0JzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdsb25nJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnZnVsbCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdzaG9ydERhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbWVkaXVtRGF0ZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbG9uZ0RhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnZnVsbERhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ3Nob3J0VGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbWVkaXVtVGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbG9uZ1RpbWUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdmdWxsVGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgIGZyYWN0aW9uYWxTZWNvbmREaWdpdHM6IDIsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlTG9jYWxpemVTZXJ2aWNlID0gbmV3IF9NdGVMb2NhbGl6ZVNlcnZpY2UoKTtcbiIsICJpbXBvcnQgeyBSZWFjdGl2ZUNvbnRyb2xsZXIsIFJlYWN0aXZlQ29udHJvbGxlckhvc3QgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIE10ZVBvcnRhbFNlcnZpY2UsIFBvcnRhbE9wdGlvbnMsIFBvcnRhbFN0YWNrIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRhbENvbnRyb2xsZXJPcHRpb25zIHtcbiAgc3RhY2s6IFBvcnRhbFN0YWNrO1xufVxuXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuLyoqXG4gKiBDb250cm9sbGVyIHVzZWQgdG8gYXR0YWNoIGFueSBlbGVtZW50IHRvIGEgcG9ydGFsIHN0YWNrLlxuICpcbiAqIFVzZSB0aGlzIGNvbnRyb2xsZXIgd2hlbiB5b3UgbmVlZCB0byByZW5kZXIgYW4gb3ZlcmxheSBhdCB0aGUgcm9vdCBvZiB0aGUgRE9NLlxuICogVG8gYXZvaWQgcG9zaXRpb25pbmcgY29uZmxpY3RzIG9yIG92ZXJmbG93IGNsaXBwaW5nLlxuICovXG5leHBvcnQgY2xhc3MgUG9ydGFsQ29udHJvbGxlciBpbXBsZW1lbnRzIFJlYWN0aXZlQ29udHJvbGxlciwgRWxlbWVudFBvcnRhbENvbnRyb2xsZXIge1xuICAvKiogQGlnbm9yZSAqL1xuICBpZCA9IG5leHRVbmlxdWVJZCsrO1xuXG4gIC8qKlxuICAgKiBVc2VkIGJ5IHRoZSBNdGVQb3J0YWxTZXJ2aWNlIHRvIGNhY2hlIHRoaXMgZWxlbWVudHMgcG9ydGFsZWQgcGFyZW50IHJlZmVyZW5jZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ6IEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEZsYWcgdG8gaGVscCBjaGVjayBpZiBhIGRpc2Nvbm5lY3RlZCBjYWxsYmFjayBoYXMgYmVlbiBmaXJlZFxuICAgKiBiZWNhdXNlIG9mIGEgcG9ydGFsaW5nIG9wZXJhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgaWdub3JlTmV4dERpc2Nvbm5lY3QgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBob3N0OiBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0ICYgRWxlbWVudCxcbiAgICBwdWJsaWMgb3B0aW9uczogUG9ydGFsQ29udHJvbGxlck9wdGlvbnMgPSB7IHN0YWNrOiAnb3ZlcmxheScgfVxuICApIHtcbiAgICB0aGlzLmhvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcbiAgfVxuXG4gIC8qKiBSZXF1ZXN0cyB0aGUgcG9ydGFsIHNlcnZpY2UgYXBwZW5kIHRoaXMgaXRlbSB0byB0aGUgY29uZmlndXJlZCBzdGFjayAqL1xuICBwdWJsaWMgYXBwZW5kVG9TdGFjayhlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5ob3N0LCBvcHRpb25zOiBQb3J0YWxPcHRpb25zID0ge30pIHtcbiAgICAvLyBPbmx5IGlnbm9yZSB0aGUgbmV4dCBkaXNjb25uZWN0IGlmIHRoZSBlbGVtZW50IGJlaW5nIHBvcnRhbGVkIGlzIGN1cnJlbnRseSBjb25uZWN0ZWQgdG8gdGhlIERPTVxuICAgIGlmIChlbGVtZW50Py5pc0Nvbm5lY3RlZCkge1xuICAgICAgdGhpcy5pZ25vcmVOZXh0RGlzY29ubmVjdCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBNdGVQb3J0YWxTZXJ2aWNlLmFwcGVuZFRvU3RhY2sodGhpcywgZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKiogUmVxdWVzdHMgdGhlIHBvcnRhbCBzZXJ2aWNlIHJlbW92ZSB0aGlzIGVsZW1lbnQgZnJvbSB0aGUgY29uZmlndXJlZCBzdGFjayAqL1xuICBwdWJsaWMgcmVtb3ZlRnJvbVN0YWNrKGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLmhvc3QpIHtcbiAgICB0aGlzLmlnbm9yZU5leHREaXNjb25uZWN0ID0gZmFsc2U7XG4gICAgcmV0dXJuIE10ZVBvcnRhbFNlcnZpY2UucmVtb3ZlRnJvbVN0YWNrKHRoaXMsIGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqIE1ha2VzIGEgYmFja2Ryb3AgYXNzb2NpYXRlZCB3aXRoIGEgcG9ydGFsZWQgZWxlbWVudCB2aXNpYmxlIGlmIGl0IGV4aXN0cyAqL1xuICBwdWJsaWMgc2hvd0JhY2tkcm9wKGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLmhvc3QpIHtcbiAgICByZXR1cm4gTXRlUG9ydGFsU2VydmljZS5zaG93QmFja2Ryb3AodGhpcywgZWxlbWVudCk7XG4gIH1cblxuICAvKiogSGlkZXMgYSBiYWNrZHJvcCBhc3NvY2lhdGVkIHdpdGggYSBwb3J0YWxlZCBlbGVtZW50IGlmIGl0IGV4aXN0cyAqL1xuICBwdWJsaWMgaGlkZUJhY2tkcm9wKGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLmhvc3QpIHtcbiAgICByZXR1cm4gTXRlUG9ydGFsU2VydmljZS5oaWRlQmFja2Ryb3AodGhpcywgZWxlbWVudCk7XG4gIH1cblxuICAvKiogVXBkYXRlcyB0aGUgaW50ZXJ0bmVzcyBhIGJhY2tkcm9wIGlmIGl0IGV4aXN0cyAod2hldGhlciBvciBub3QgdGhlIHVzZXIgY2FuIGNsaWNrIHRocm91Z2ggaXQpICovXG4gIHB1YmxpYyBzZXRCYWNrZHJvcEluZXJ0bmVzcyhpbmVydDogYm9vbGVhbiwgZWxlbWVudDogRWxlbWVudCA9IHRoaXMuaG9zdCkge1xuICAgIHJldHVybiBNdGVQb3J0YWxTZXJ2aWNlLnNldEJhY2tkcm9wSW5lcnRuZXNzKHRoaXMsIGVsZW1lbnQsIGluZXJ0KTtcbiAgfVxuXG4gIGhvc3RDb25uZWN0ZWQoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdGFjaykge1xuICAgICAgTXRlUG9ydGFsU2VydmljZS5pbml0aWFsaXplU3RhY2sodGhpcy5vcHRpb25zLnN0YWNrKTtcbiAgICB9XG4gIH1cblxuICBob3N0RGlzY29ubmVjdGVkKCkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBuZXh0IGRpc2Nvbm5lY3Qgc2hvdWxkIGJlIGlnbm9yZWQgYmVjYXVzZSBpdCBpcyB0cmlnZ2VkXG4gICAgLy8gZnJvbSBhIHBvcnRhbGluZyBvcGVyYXRpb25cbiAgICBpZiAodGhpcy5pZ25vcmVOZXh0RGlzY29ubmVjdCkge1xuICAgICAgdGhpcy5pZ25vcmVOZXh0RGlzY29ubmVjdCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBNdGVQb3J0YWxTZXJ2aWNlLnJlbW92ZUNvbnRyb2xsZXIodGhpcyk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgQ29yZVBhbGV0dGUsIERlbnNpdHlPcHRpb25zLCBQcmVzZXRzLCBTaXplT3B0aW9ucywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByZXNldCB7XG4gIHNpemU/OiBTaXplT3B0aW9ucztcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgZGVuc2l0eT86IERlbnNpdHlPcHRpb25zO1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgYnV0dG9uUHJlc2V0czogUHJlc2V0czxCdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvbkJ1dHRvblByZXNldCB7XG4gIHNpemU/OiBTaXplT3B0aW9ucztcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgZGVuc2l0eT86IERlbnNpdHlPcHRpb25zO1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgaWNvbkJ1dHRvblByZXNldHM6IFByZXNldHM8SWNvbkJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBTdGF0dXNQYWxldHRlIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJY29uUHJlc2V0IHtcbiAgY29sb3I/OiBTdGF0dXNQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgaWNvblByZXNldHM6IFByZXNldHM8SWNvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBTdGF0dXNQYWxldHRlIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9ncmVzc0JhclByZXNldCB7XG4gIGNvbG9yPzogU3RhdHVzUGFsZXR0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzQmFyUHJlc2V0czogUHJlc2V0czxQcm9ncmVzc0JhclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFN0YXR1c1BhbGV0dGUgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzU3Bpbm5lclByZXNldCB7XG4gIGNvbG9yPzogU3RhdHVzUGFsZXR0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzU3Bpbm5lclByZXNldHM6IFByZXNldHM8UHJvZ3Jlc3NTcGlubmVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9vbGJhclByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgdG9vbGJhclByZXNldHM6IFByZXNldHM8VG9vbGJhclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYXJkUHJlc2V0IHtcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbiAgd2l0aFNoYWRvdz86IGJvb2xlYW47XG4gIHdpdGhvdXRTaGFkb3c/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRCdXR0b25QcmVzZXQgZXh0ZW5kcyBDYXJkUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBjYXJkUHJlc2V0czogUHJlc2V0czxDYXJkUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgd2l0aG91dFNoYWRvdzogdHJ1ZSxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgY29uc3QgY2FyZEJ1dHRvblByZXNldHM6IFByZXNldHM8Q2FyZEJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIHdpdGhvdXRTaGFkb3c6IHRydWUsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUcmVlUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCB0cmVlUHJlc2V0czogUHJlc2V0czxUcmVlUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IENvcmVQYWxldHRlLCBQcmVzZXRzLCBTaXplT3B0aW9ucywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ1ByZXNldHMge1xuICBzaXplPzogU2l6ZU9wdGlvbnM7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCB0YWdQcmVzZXRzOiBQcmVzZXRzPFRhZ1ByZXNldHM+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFkZ2VQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGJhZGdlUHJlc2V0czogUHJlc2V0czxCYWRnZVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBDb3JlUGFsZXR0ZSwgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlua1ByZXNldCB7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG4gIGZvbnRXZWlnaHQ/OiAncmVndWxhcicgfCAnYm9sZCc7XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rUHJlc2V0czogUHJlc2V0czxMaW5rUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGFsZXJ0UHJlc2V0czogUHJlc2V0czxBbGVydFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgaW5wdXRQcmVzZXRzOiBQcmVzZXRzPElucHV0UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdlclByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgZHJhd2VyUHJlc2V0czogUHJlc2V0czxEcmF3ZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXNpZGVQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGFzaWRlUHJlc2V0czogUHJlc2V0czxBc2lkZVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJlYWRjcnVtYkl0ZW1QcmVzZXQge1xuICBmb250V2VpZ2h0PzogJ3JlZ3VsYXInIHwgJ2JvbGQnO1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xuICB3aXRob3V0VW5kZXJsaW5lPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGJyZWFkY3J1bWJJdGVtUHJlc2V0czogUHJlc2V0czxCcmVhZGNydW1iSXRlbVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7XG4gICAgd2l0aG91dFVuZGVybGluZTogdHJ1ZSxcbiAgfSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbW9kYWxQcmVzZXRzOiBQcmVzZXRzPE1vZGFsUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIENvcmVQYWxldHRlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tib3hQcmVzZXQge1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgY2hlY2tib3hQcmVzZXRzOiBQcmVzZXRzPENoZWNrYm94UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhZGlvUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCByYWRpb1ByZXNldHM6IFByZXNldHM8UmFkaW9QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2Um9vdFByZXNldCB7XG4gIG1vYmlsZUJyZWFrcG9pbnQ/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnO1xuICBpbnZlcnNlPzogJ2hlYWRlcicgfCAnc2lkZWJhcic7XG4gIHByZWZlclNpZGViYXI/OiAnb3BlbmVkJyB8ICdjbG9zZWQnO1xufVxuXG5leHBvcnQgY29uc3QgbmF2Um9vdFByZXNldHM6IFByZXNldHM8TmF2Um9vdFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHtcbiAgICBpbnZlcnNlOiAnc2lkZWJhcicsXG4gIH0sXG4gIGN4OiB7XG4gICAgcHJlZmVyU2lkZWJhcjogJ2Nsb3NlZCcsXG4gIH0sXG4gIHB4OiB7XG4gICAgaW52ZXJzZTogJ3NpZGViYXInLFxuICB9LFxuICByeDoge1xuICAgIHByZWZlclNpZGViYXI6ICdjbG9zZWQnLFxuICB9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZIZWFkZXJQcmVzZXQge1xuICB3aXRoQ29udGFpbmVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IG5hdkhlYWRlclByZXNldHM6IFByZXNldHM8TmF2SGVhZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdlN1YkhlYWRlclByZXNldCB7XG4gIHdpdGhDb250YWluZXI/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbmF2U3ViSGVhZGVyUHJlc2V0czogUHJlc2V0czxOYXZTdWJIZWFkZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2U2lkZWJhclByZXNldCB7XG4gIGhpZGVVbnRpbFRyYW5zaXRpb24/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbmF2U2lkZWJhclByZXNldHM6IFByZXNldHM8TmF2U2lkZWJhclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGhpZGVVbnRpbFRyYW5zaXRpb246IHRydWUsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHtcbiAgICBoaWRlVW50aWxUcmFuc2l0aW9uOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZDb250ZW50UHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXZDb250ZW50UHJlc2V0czogUHJlc2V0czxOYXZDb250ZW50UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkZvb3RlclByZXNldCB7XG4gIHdpdGhDb250YWluZXI/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbmF2Rm9vdGVyUHJlc2V0czogUHJlc2V0czxOYXZGb290ZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2QnV0dG9uUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXZCdXR0b25QcmVzZXRzOiBQcmVzZXRzPE5hdkJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZJY29uQnV0dG9uUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXZJY29uQnV0dG9uUHJlc2V0czogUHJlc2V0czxOYXZJY29uQnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkl0ZW1QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkl0ZW1QcmVzZXRzOiBQcmVzZXRzPE5hdkl0ZW1QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvbkdyb3VwUHJlc2V0IHtcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGJ1dHRvbkdyb3VwUHJlc2V0czogUHJlc2V0czxCdXR0b25Hcm91cFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdGNoUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBzd2l0Y2hQcmVzZXRzOiBQcmVzZXRzPFN3aXRjaFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlU2VsZWN0UHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXRpdmVTZWxlY3RQcmVzZXRzOiBQcmVzZXRzPE5hdGl2ZVNlbGVjdFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dGFyZWFQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHRleHRhcmVhUHJlc2V0czogUHJlc2V0czxUZXh0YXJlYVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2tlbGV0b25QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHNrZWxldG9uUHJlc2V0czogUHJlc2V0czxTa2VsZXRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBzbGlkZXJQcmVzZXRzOiBQcmVzZXRzPFNsaWRlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFuZ2VTbGlkZXJQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHJhbmdlU2xpZGVyUHJlc2V0czogUHJlc2V0czxSYW5nZVNsaWRlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VnbWVudGVkQ29udHJvbFByZXNldCB7fVxuXG5leHBvcnQgY29uc3Qgc2VnbWVudGVkQ29udHJvbFByZXNldHM6IFByZXNldHM8U2VnbWVudGVkQ29udHJvbFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBidXR0b25QcmVzZXRzLCBpY29uQnV0dG9uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9idXR0b24vYnV0dG9uLnByZXNldHMnO1xuaW1wb3J0IHsgaWNvblByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvaWNvbi9pY29uLnByZXNldHMnO1xuaW1wb3J0IHsgcHJvZ3Jlc3NCYXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIucHJlc2V0cyc7XG5pbXBvcnQgeyBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5wcmVzZXRzJztcbmltcG9ydCB7IHRvb2xiYXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3Rvb2xiYXIvdG9vbGJhci5wcmVzZXRzJztcbmltcG9ydCB7IGNhcmRQcmVzZXRzLCBjYXJkQnV0dG9uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9jYXJkL2NhcmQucHJlc2V0cyc7XG5pbXBvcnQgeyB0cmVlUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy90cmVlL3RyZWUucHJlc2V0cyc7XG5pbXBvcnQgeyB0YWdQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3RhZy90YWcucHJlc2V0cyc7XG5pbXBvcnQgeyBiYWRnZVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYmFkZ2UvYmFkZ2UucHJlc2V0cyc7XG5pbXBvcnQgeyBsaW5rUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9saW5rL2xpbmsucHJlc2V0cyc7XG5pbXBvcnQgeyBhbGVydFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYWxlcnQvYWxlcnQucHJlc2V0cyc7XG5pbXBvcnQgeyBpbnB1dFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvaW5wdXQvaW5wdXQucHJlc2V0cyc7XG5pbXBvcnQgeyBkcmF3ZXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2RyYXdlci9kcmF3ZXIucHJlc2V0cyc7XG5pbXBvcnQgeyBhc2lkZVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYXNpZGUvYXNpZGUucHJlc2V0cyc7XG5pbXBvcnQgeyBicmVhZGNydW1iSXRlbVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi1pdGVtLnByZXNldHMnO1xuaW1wb3J0IHsgbW9kYWxQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL21vZGFsL21vZGFsLnByZXNldHMnO1xuaW1wb3J0IHsgY2hlY2tib3hQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2NoZWNrYm94L2NoZWNrYm94LnByZXNldHMnO1xuaW1wb3J0IHsgcmFkaW9QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3JhZGlvL3JhZGlvLnByZXNldHMnO1xuaW1wb3J0IHtcbiAgbmF2Um9vdFByZXNldHMsXG4gIG5hdkhlYWRlclByZXNldHMsXG4gIG5hdlN1YkhlYWRlclByZXNldHMsXG4gIG5hdlNpZGViYXJQcmVzZXRzLFxuICBuYXZDb250ZW50UHJlc2V0cyxcbiAgbmF2Rm9vdGVyUHJlc2V0cyxcbiAgbmF2QnV0dG9uUHJlc2V0cyxcbiAgbmF2SWNvbkJ1dHRvblByZXNldHMsXG4gIG5hdkl0ZW1QcmVzZXRzLFxufSBmcm9tICcuLi8uLi9hdG9taWMvbmF2L25hdi5wcmVzZXRzJztcbmltcG9ydCB7IGJ1dHRvbkdyb3VwUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLnByZXNldHMnO1xuaW1wb3J0IHsgc3dpdGNoUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9zd2l0Y2gvc3dpdGNoLnByZXNldHMnO1xuaW1wb3J0IHsgbmF0aXZlU2VsZWN0UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9uYXRpdmUtc2VsZWN0L25hdGl2ZS1zZWxlY3QucHJlc2V0cyc7XG5pbXBvcnQgeyB0ZXh0YXJlYVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdGV4dGFyZWEvdGV4dGFyZWEucHJlc2V0cyc7XG5pbXBvcnQgeyBza2VsZXRvblByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc2tlbGV0b24vc2tlbGV0b24ucHJlc2V0cyc7XG5pbXBvcnQgeyBzbGlkZXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3NsaWRlci9zbGlkZXIucHJlc2V0cyc7XG5pbXBvcnQgeyByYW5nZVNsaWRlclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcmFuZ2Utc2xpZGVyL3JhbmdlLXNsaWRlci5wcmVzZXRzJztcbmltcG9ydCB7IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3NlZ21lbnRlZC1jb250cm9sL3NlZ21lbnRlZC1jb250cm9sLnByZXNldHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vcnRhclByZXNldFRoZW1lIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb2xvclNjaGVtZTogJ3N5c3RlbScgfCAnbGlnaHQnIHwgJ2RhcmsnO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFByZXNldCA9IHtcbiAgcHJlc2V0OiAnZGVmYXVsdCcsXG4gIHRoZW1lOiB7XG4gICAgbmFtZTogJ3B4JyxcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSBhcyBNb3J0YXJQcmVzZXRUaGVtZSxcbiAgTXRlQnV0dG9uOiBidXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUljb25CdXR0b246IGljb25CdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUljb246IGljb25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVByb2dyZXNzQmFyOiBwcm9ncmVzc0JhclByZXNldHMuZGVmYXVsdCxcbiAgTXRlUHJvZ3Jlc3NTcGlubmVyOiBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVRvb2xiYXI6IHRvb2xiYXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUNhcmQ6IGNhcmRQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUNhcmRCdXR0b246IGNhcmRCdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVRyZWU6IHRyZWVQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVRhZzogdGFnUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVCYWRnZTogYmFkZ2VQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUxpbms6IGxpbmtQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUFsZXJ0OiBhbGVydFByZXNldHMuZGVmYXVsdCxcbiAgTXRlSW5wdXQ6IGlucHV0UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVEcmF3ZXI6IGRyYXdlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlQXNpZGU6IGFzaWRlUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVCcmVhZGNydW1iSXRlbTogYnJlYWRjcnVtYkl0ZW1QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU1vZGFsOiBtb2RhbFByZXNldHMuZGVmYXVsdCxcbiAgTXRlQ2hlY2tib3g6IGNoZWNrYm94UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVSYWRpbzogcmFkaW9QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdlJvb3Q6IG5hdlJvb3RQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkhlYWRlcjogbmF2SGVhZGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZTdWJIZWFkZXI6IG5hdlN1YkhlYWRlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2U2lkZWJhcjogbmF2U2lkZWJhclByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2Q29udGVudDogbmF2Q29udGVudFByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2Rm9vdGVyOiBuYXZGb290ZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkJ1dHRvbjogbmF2QnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZJY29uQnV0dG9uOiBuYXZJY29uQnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZJdGVtOiBuYXZJdGVtUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVCdXR0b25Hcm91cDogYnV0dG9uR3JvdXBQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVN3aXRjaDogc3dpdGNoUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXRpdmVTZWxlY3Q6IG5hdGl2ZVNlbGVjdFByZXNldHMuZGVmYXVsdCxcbiAgTXRlVGV4dGFyZWE6IHRleHRhcmVhUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVTa2VsZXRvbjogc2tlbGV0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVNsaWRlcjogc2xpZGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVSYW5nZVNsaWRlcjogcmFuZ2VTbGlkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVNlZ21lbnRlZENvbnRyb2w6IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzLmRlZmF1bHQsXG59O1xuXG5leHBvcnQgdHlwZSBNb3J0YXJQcmVzZXQgPSB0eXBlb2YgZGVmYXVsdFByZXNldDtcblxuZXhwb3J0IGNvbnN0IHB4UHJlc2V0OiBNb3J0YXJQcmVzZXQgPSB7XG4gIHByZXNldDogJ3B4JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAncHgnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9LFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMucHgsXG4gIE10ZUljb25CdXR0b246IGljb25CdXR0b25QcmVzZXRzLnB4LFxuICBNdGVJY29uOiBpY29uUHJlc2V0cy5weCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5weCxcbiAgTXRlUHJvZ3Jlc3NTcGlubmVyOiBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzLnB4LFxuICBNdGVUb29sYmFyOiB0b29sYmFyUHJlc2V0cy5weCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMucHgsXG4gIE10ZUNhcmRCdXR0b246IGNhcmRCdXR0b25QcmVzZXRzLnB4LFxuICBNdGVUcmVlOiB0cmVlUHJlc2V0cy5weCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLnB4LFxuICBNdGVCYWRnZTogYmFkZ2VQcmVzZXRzLnB4LFxuICBNdGVMaW5rOiBsaW5rUHJlc2V0cy5weCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5weCxcbiAgTXRlSW5wdXQ6IGlucHV0UHJlc2V0cy5weCxcbiAgTXRlRHJhd2VyOiBkcmF3ZXJQcmVzZXRzLnB4LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLnB4LFxuICBNdGVCcmVhZGNydW1iSXRlbTogYnJlYWRjcnVtYkl0ZW1QcmVzZXRzLnB4LFxuICBNdGVNb2RhbDogbW9kYWxQcmVzZXRzLnB4LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLnB4LFxuICBNdGVSYWRpbzogcmFkaW9QcmVzZXRzLnB4LFxuICBNdGVOYXZSb290OiBuYXZSb290UHJlc2V0cy5weCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLnB4LFxuICBNdGVOYXZTdWJIZWFkZXI6IG5hdlN1YkhlYWRlclByZXNldHMucHgsXG4gIE10ZU5hdlNpZGViYXI6IG5hdlNpZGViYXJQcmVzZXRzLnB4LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5weCxcbiAgTXRlTmF2Rm9vdGVyOiBuYXZGb290ZXJQcmVzZXRzLnB4LFxuICBNdGVOYXZCdXR0b246IG5hdkJ1dHRvblByZXNldHMucHgsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLnB4LFxuICBNdGVOYXZJdGVtOiBuYXZJdGVtUHJlc2V0cy5weCxcbiAgTXRlQnV0dG9uR3JvdXA6IGJ1dHRvbkdyb3VwUHJlc2V0cy5weCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLnB4LFxuICBNdGVOYXRpdmVTZWxlY3Q6IG5hdGl2ZVNlbGVjdFByZXNldHMucHgsXG4gIE10ZVRleHRhcmVhOiB0ZXh0YXJlYVByZXNldHMucHgsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMucHgsXG4gIE10ZVNsaWRlcjogc2xpZGVyUHJlc2V0cy5weCxcbiAgTXRlUmFuZ2VTbGlkZXI6IHJhbmdlU2xpZGVyUHJlc2V0cy5weCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMucHgsXG59O1xuXG5leHBvcnQgY29uc3QgY3hQcmVzZXQ6IE1vcnRhclByZXNldCA9IHtcbiAgcHJlc2V0OiAnY3gnLFxuICB0aGVtZToge1xuICAgIG5hbWU6ICdjeCcsXG4gICAgY29sb3JTY2hlbWU6ICdsaWdodCcsXG4gIH0sXG4gIE10ZUJ1dHRvbjogYnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMuY3gsXG4gIE10ZUljb246IGljb25QcmVzZXRzLmN4LFxuICBNdGVQcm9ncmVzc0JhcjogcHJvZ3Jlc3NCYXJQcmVzZXRzLmN4LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMuY3gsXG4gIE10ZVRvb2xiYXI6IHRvb2xiYXJQcmVzZXRzLmN4LFxuICBNdGVDYXJkOiBjYXJkUHJlc2V0cy5jeCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMuY3gsXG4gIE10ZVRyZWU6IHRyZWVQcmVzZXRzLmN4LFxuICBNdGVUYWc6IHRhZ1ByZXNldHMuY3gsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMuY3gsXG4gIE10ZUxpbms6IGxpbmtQcmVzZXRzLmN4LFxuICBNdGVBbGVydDogYWxlcnRQcmVzZXRzLmN4LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLmN4LFxuICBNdGVEcmF3ZXI6IGRyYXdlclByZXNldHMuY3gsXG4gIE10ZUFzaWRlOiBhc2lkZVByZXNldHMuY3gsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMuY3gsXG4gIE10ZU1vZGFsOiBtb2RhbFByZXNldHMuY3gsXG4gIE10ZUNoZWNrYm94OiBjaGVja2JveFByZXNldHMuY3gsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMuY3gsXG4gIE10ZU5hdlJvb3Q6IG5hdlJvb3RQcmVzZXRzLmN4LFxuICBNdGVOYXZIZWFkZXI6IG5hdkhlYWRlclByZXNldHMuY3gsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5jeCxcbiAgTXRlTmF2U2lkZWJhcjogbmF2U2lkZWJhclByZXNldHMuY3gsXG4gIE10ZU5hdkNvbnRlbnQ6IG5hdkNvbnRlbnRQcmVzZXRzLmN4LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMuY3gsXG4gIE10ZU5hdkJ1dHRvbjogbmF2QnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlTmF2SWNvbkJ1dHRvbjogbmF2SWNvbkJ1dHRvblByZXNldHMuY3gsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLmN4LFxuICBNdGVCdXR0b25Hcm91cDogYnV0dG9uR3JvdXBQcmVzZXRzLmN4LFxuICBNdGVTd2l0Y2g6IHN3aXRjaFByZXNldHMuY3gsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5jeCxcbiAgTXRlVGV4dGFyZWE6IHRleHRhcmVhUHJlc2V0cy5jeCxcbiAgTXRlU2tlbGV0b246IHNrZWxldG9uUHJlc2V0cy5jeCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLmN4LFxuICBNdGVSYW5nZVNsaWRlcjogcmFuZ2VTbGlkZXJQcmVzZXRzLmN4LFxuICBNdGVTZWdtZW50ZWRDb250cm9sOiBzZWdtZW50ZWRDb250cm9sUHJlc2V0cy5jeCxcbn07XG5cbmV4cG9ydCBjb25zdCByeFByZXNldDogTW9ydGFyUHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdyeCcsXG4gIHRoZW1lOiB7XG4gICAgbmFtZTogJ3J4JyxcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSxcbiAgTXRlQnV0dG9uOiBidXR0b25QcmVzZXRzLnJ4LFxuICBNdGVJY29uQnV0dG9uOiBpY29uQnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMucngsXG4gIE10ZVByb2dyZXNzQmFyOiBwcm9ncmVzc0JhclByZXNldHMucngsXG4gIE10ZVByb2dyZXNzU3Bpbm5lcjogcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cy5yeCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMucngsXG4gIE10ZUNhcmQ6IGNhcmRQcmVzZXRzLnJ4LFxuICBNdGVDYXJkQnV0dG9uOiBjYXJkQnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMucngsXG4gIE10ZVRhZzogdGFnUHJlc2V0cy5yeCxcbiAgTXRlQmFkZ2U6IGJhZGdlUHJlc2V0cy5yeCxcbiAgTXRlTGluazogbGlua1ByZXNldHMucngsXG4gIE10ZUFsZXJ0OiBhbGVydFByZXNldHMucngsXG4gIE10ZUlucHV0OiBpbnB1dFByZXNldHMucngsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5yeCxcbiAgTXRlQXNpZGU6IGFzaWRlUHJlc2V0cy5yeCxcbiAgTXRlQnJlYWRjcnVtYkl0ZW06IGJyZWFkY3J1bWJJdGVtUHJlc2V0cy5yeCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5yeCxcbiAgTXRlQ2hlY2tib3g6IGNoZWNrYm94UHJlc2V0cy5yeCxcbiAgTXRlUmFkaW86IHJhZGlvUHJlc2V0cy5yeCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMucngsXG4gIE10ZU5hdkhlYWRlcjogbmF2SGVhZGVyUHJlc2V0cy5yeCxcbiAgTXRlTmF2U3ViSGVhZGVyOiBuYXZTdWJIZWFkZXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5yeCxcbiAgTXRlTmF2Q29udGVudDogbmF2Q29udGVudFByZXNldHMucngsXG4gIE10ZU5hdkZvb3RlcjogbmF2Rm9vdGVyUHJlc2V0cy5yeCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVOYXZJY29uQnV0dG9uOiBuYXZJY29uQnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlTmF2SXRlbTogbmF2SXRlbVByZXNldHMucngsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMucngsXG4gIE10ZVN3aXRjaDogc3dpdGNoUHJlc2V0cy5yeCxcbiAgTXRlTmF0aXZlU2VsZWN0OiBuYXRpdmVTZWxlY3RQcmVzZXRzLnJ4LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLnJ4LFxuICBNdGVTa2VsZXRvbjogc2tlbGV0b25QcmVzZXRzLnJ4LFxuICBNdGVTbGlkZXI6IHNsaWRlclByZXNldHMucngsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMucngsXG4gIE10ZVNlZ21lbnRlZENvbnRyb2w6IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzLnJ4LFxufTtcbiIsICJpbXBvcnQgeyBjeFByZXNldCwgZGVmYXVsdFByZXNldCwgTW9ydGFyUHJlc2V0LCBweFByZXNldCwgcnhQcmVzZXQgfSBmcm9tICcuL3ByZXNldHMnO1xuaW1wb3J0IHsgY29tcHV0ZWQsIFNpZ25hbCwgc2lnbmFsIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuY2xhc3MgX010ZVByZXNldFNlcnZpY2Uge1xuICBwcml2YXRlIHByZXNldHMgPSBuZXcgTWFwPHN0cmluZywgTW9ydGFyUHJlc2V0PihbXG4gICAgWydnbG9iYWwnLCBkZWZhdWx0UHJlc2V0XSxcbiAgICBbJ2RlZmF1bHQnLCBkZWZhdWx0UHJlc2V0XSxcbiAgICBbJ3B4JywgcHhQcmVzZXRdLFxuICAgIFsnY3gnLCBjeFByZXNldF0sXG4gICAgWydyeCcsIHJ4UHJlc2V0XSxcbiAgXSk7XG5cbiAgcHJpdmF0ZSBwcmVzZXRDaGFuZ2VkU2lnbmFsID0gc2lnbmFsPHsgcHJlc2V0TmFtZTogc3RyaW5nOyBjb21wb25lbnROYW1lOiBzdHJpbmcgfT4oe1xuICAgIHByZXNldE5hbWU6IG51bGwsXG4gICAgY29tcG9uZW50TmFtZTogbnVsbCxcbiAgfSk7XG5cbiAgcHVibGljIHNldFByZXNldChwcmVzZXROYW1lOiBzdHJpbmcsIHByZXNldDogUGFydGlhbDxNb3J0YXJQcmVzZXQ+KSB7XG4gICAgdGhpcy5wcmVzZXRzLnNldChwcmVzZXROYW1lLCB7XG4gICAgICAuLi4odGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKSA/PyBkZWZhdWx0UHJlc2V0KSxcbiAgICAgIC4uLnByZXNldCxcbiAgICB9KTtcbiAgICB0aGlzLnByZXNldENoYW5nZWRTaWduYWwuc2V0KHsgcHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZTogbnVsbCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb21wb25lbnRQcmVzZXQ8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldD4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IEMsXG4gICAgY29tcG9uZW50UHJlc2V0OiBQYXJ0aWFsPE1vcnRhclByZXNldFtDXT5cbiAgKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpID8/IGRlZmF1bHRQcmVzZXQ7XG4gICAgdGhpcy5wcmVzZXRzLnNldChwcmVzZXROYW1lLCB7XG4gICAgICAuLi5zZWxlY3RlZFByZXNldCxcbiAgICAgIFtjb21wb25lbnROYW1lXToge1xuICAgICAgICAuLi4oc2VsZWN0ZWRQcmVzZXRbY29tcG9uZW50TmFtZV0gPz8gKHt9IGFzIGFueSkpLFxuICAgICAgICAuLi5jb21wb25lbnRQcmVzZXQsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbC5zZXQoeyBwcmVzZXROYW1lLCBjb21wb25lbnROYW1lIH0pO1xuICB9XG5cbiAgcHVibGljIHNldENvbXBvbmVudFByZXNldFByb3BlcnR5PEMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXQsIFAgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXRbQ10+KFxuICAgIHByZXNldE5hbWU6IHN0cmluZyxcbiAgICBjb21wb25lbnROYW1lOiBDLFxuICAgIHByb3BlcnR5TmFtZTogUCxcbiAgICB2YWx1ZTogTW9ydGFyUHJlc2V0W0NdW1BdIHwgUGFydGlhbDxNb3J0YXJQcmVzZXRbQ11bUF0+XG4gICkge1xuICAgIGNvbnN0IHNlbGVjdGVkUHJlc2V0ID0gdGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKSA/PyBkZWZhdWx0UHJlc2V0O1xuICAgIGNvbnN0IHNlbGVjdGVkQ29tcG9uZW50UHJlc2V0ID0gc2VsZWN0ZWRQcmVzZXRbY29tcG9uZW50TmFtZV0gYXMgYW55O1xuXG4gICAgLy8gSWYgc2V0dGluZyBhbiBvYmplY3QgdmFsdWUgYmUgc3VyZSB0byBzcHJlYWQgb3ZlciBleGlzdGluZyB2YWx1ZVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgICAgLi4uc2VsZWN0ZWRQcmVzZXQsXG4gICAgICAgIFtjb21wb25lbnROYW1lXToge1xuICAgICAgICAgIC4uLnNlbGVjdGVkQ29tcG9uZW50UHJlc2V0LFxuICAgICAgICAgIFtwcm9wZXJ0eU5hbWVdOiB7XG4gICAgICAgICAgICAuLi5zZWxlY3RlZENvbXBvbmVudFByZXNldFtwcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgICAgLi4udmFsdWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UganVzdCBzZXQgdGhlIHZhbHVlXG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgICAgLi4uc2VsZWN0ZWRQcmVzZXQsXG4gICAgICAgIFtjb21wb25lbnROYW1lXToge1xuICAgICAgICAgIC4uLnNlbGVjdGVkQ29tcG9uZW50UHJlc2V0LFxuICAgICAgICAgIFtwcm9wZXJ0eU5hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnByZXNldENoYW5nZWRTaWduYWwuc2V0KHsgcHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQcmVzZXQocHJlc2V0TmFtZTogc3RyaW5nKTogTW9ydGFyUHJlc2V0IHtcbiAgICBjb25zdCBwcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpO1xuICAgIGlmICghcHJlc2V0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBNdGVQcmVzZXRTZXJ2aWNlOiBBIHByZXNldCB3aXRoIHRoZSBuYW1lIFwiJHtwcmVzZXROYW1lfVwiIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgfVxuICAgIHJldHVybiBwcmVzZXQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29tcG9uZW50UHJlc2V0PEMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXQ+KFxuICAgIHByZXNldE5hbWU6IHN0cmluZyxcbiAgICBjb21wb25lbnROYW1lOiBDXG4gICk6IE1vcnRhclByZXNldFtDXSB7XG4gICAgY29uc3QgcHJlc2V0ID0gdGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKTtcbiAgICBjb25zdCBjb21wb25lbnRQcmVzZXQgPSBwcmVzZXRbY29tcG9uZW50TmFtZV07XG4gICAgaWYgKCFwcmVzZXQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE10ZVByZXNldFNlcnZpY2U6IEEgcHJlc2V0IHdpdGggdGhlIG5hbWUgXCIke3ByZXNldE5hbWV9XCIgZG9lcyBub3QgZXhpc3QuYCk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRQcmVzZXQ7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0UHJlc2V0KHByZXNldE5hbWU6IHN0cmluZyk6IFNpZ25hbDxNb3J0YXJQcmVzZXQ+IHtcbiAgICBsZXQgZmlyc3RFbWl0ID0gdHJ1ZTtcbiAgICByZXR1cm4gY29tcHV0ZWQodGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLCAoY2hhbmdlLCBzZXQpID0+IHtcbiAgICAgIGlmIChmaXJzdEVtaXQpIHtcbiAgICAgICAgc2V0KHRoaXMuZ2V0UHJlc2V0KHByZXNldE5hbWUpKTtcbiAgICAgICAgZmlyc3RFbWl0ID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5wcmVzZXROYW1lID09PSBwcmVzZXROYW1lKSB7XG4gICAgICAgIHNldCh0aGlzLmdldFByZXNldChwcmVzZXROYW1lKSk7XG4gICAgICB9XG4gICAgfSkgYXMgU2lnbmFsPE1vcnRhclByZXNldD47XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Q29tcG9uZW50UHJlc2V0PEMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXQ+KFxuICAgIHByZXNldE5hbWU6IHN0cmluZyxcbiAgICBjb21wb25lbnROYW1lOiBDXG4gICk6IFNpZ25hbDxNb3J0YXJQcmVzZXRbQ10+IHtcbiAgICBsZXQgZmlyc3RFbWl0ID0gdHJ1ZTtcbiAgICByZXR1cm4gY29tcHV0ZWQodGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLCAoY2hhbmdlLCBzZXQpID0+IHtcbiAgICAgIGlmIChmaXJzdEVtaXQpIHtcbiAgICAgICAgc2V0KHRoaXMuZ2V0Q29tcG9uZW50UHJlc2V0KHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWUpKTtcbiAgICAgICAgZmlyc3RFbWl0ID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAoY2hhbmdlLnByZXNldE5hbWUgPT09IHByZXNldE5hbWUgJiYgIWNoYW5nZS5jb21wb25lbnROYW1lKSB8fFxuICAgICAgICAoY2hhbmdlLnByZXNldE5hbWUgPT09IHByZXNldE5hbWUgJiYgY2hhbmdlLmNvbXBvbmVudE5hbWUgPT09IGNvbXBvbmVudE5hbWUpXG4gICAgICApIHtcbiAgICAgICAgc2V0KHRoaXMuZ2V0Q29tcG9uZW50UHJlc2V0KHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWUpKTtcbiAgICAgIH1cbiAgICB9KSBhcyBTaWduYWw8TW9ydGFyUHJlc2V0W0NdPjtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlUHJlc2V0U2VydmljZSA9IG5ldyBfTXRlUHJlc2V0U2VydmljZSgpO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXMgKi9cbmltcG9ydCB7IENvbnRleHRDb25zdW1lciB9IGZyb20gJ0BsaXQtbGFicy9jb250ZXh0JztcbmltcG9ydCB7IFByb3BlcnR5RGVjbGFyYXRpb24sIFJlYWN0aXZlRWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBDb25zdHJ1Y3RvcixcbiAgaXNTc3IsXG4gIE10ZUVsZW1lbnQsXG4gIE10ZVByZXNldFNlcnZpY2UsXG4gIHByZXNldENvbnRleHQsXG4gIHNpZ25hbCxcbiAgY29tcHV0ZWQsXG4gIFVuc3Vic2NyaWJlcixcbn0gZnJvbSAnLi4vJztcbmltcG9ydCB7IE1vcnRhclByZXNldCB9IGZyb20gJy4vcHJlc2V0cyc7XG5cbmV4cG9ydCB0eXBlIFByZXNldE9wdGlvbnMgPSAnbWQnIHwgJ3NtJyB8ICdsZycgfCBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByZXNldEVsZW1lbnRJbnRlcmZhY2U8UD4ge1xuICAvKiogQGlnbm9yZSAqL1xuICByZWFkb25seSBfX2NvbXBvbmVudE5hbWU6IGtleW9mIE1vcnRhclByZXNldDtcblxuICAvKiogU2VsZWN0cyB0aGUgcHJlc2V0IGZvciB0aGlzIGNvbXBvbmVudC4gT3ZlcnJpZGVzIHRoZSBnbG9iYWwgcHJlc2V0IGZvciB0aGlzIGluc3RhbmNlIG9mIHRoaXMgY29tcG9uZW50LiAqL1xuICBwcmVzZXQ6IHN0cmluZztcblxuICAvKiogQGlnbm9yZSAqL1xuICBhcHBsaWVkUHJlc2V0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJlc2V0TWl4aW5GYWN0b3J5T3B0aW9ucyB7XG4gIHJlZmxlY3RBcHBsaWVkUHJlc2V0OiBib29sZWFuO1xufVxuXG5jb25zdCB7XG4gIGlzLFxuICBkZWZpbmVQcm9wZXJ0eSxcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGdldFByb3RvdHlwZU9mLFxufSA9IE9iamVjdDtcblxuZXhwb3J0IGNvbnN0IFByZXNldE1peGluRmFjdG9yeSA9IDxQPihcbiAgY29tcG9uZW50TmFtZToga2V5b2YgTW9ydGFyUHJlc2V0LFxuICBvcHRpb25zOiBQcmVzZXRNaXhpbkZhY3RvcnlPcHRpb25zID0geyByZWZsZWN0QXBwbGllZFByZXNldDogZmFsc2UgfVxuKSA9PiB7XG4gIHJldHVybiA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gICAgY2xhc3MgUHJlc2V0RWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgcmVhZG9ubHkgX19jb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZTtcblxuICAgICAgLyoqIE1hcCB0aGF0IHN0b3JlcyBwcml2YXRlIHZhbHVlcyB0aGF0IHRha2UgcHJlY2VkZW5jZSBvdmVyIHByZXNldCB2YWx1ZXMgKi9cbiAgICAgIHByb3RlY3RlZCBfdmFsdWVNYXAgPSBuZXcgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPigpO1xuXG4gICAgICAvKiogTWFwIHRoYXQgc3RvcmVzIGZhbGxiYWNrIHByZXNldCB2YWx1ZXMgZW1pdHRlZCBieSB0aGUgcHJlc2V0Q29udHJvbGxlciAqL1xuICAgICAgcHJvdGVjdGVkIF9wcmVzZXRNYXAgPSBuZXcgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPigpO1xuXG4gICAgICAvKiogU2VsZWN0cyBhIHNwZWNpZmljIHByZXNldCBmb3IgdGhpcyBjb21wb25lbnQgaW5zdGFuY2UuIE92ZXJyaWRlcyB0aGUgY3VycmVudCBnbG9iYWwgcHJlc2V0LiAqL1xuICAgICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KVxuICAgICAgc2V0IHByZXNldChwcmVzZXQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcmVzZXQgPSBwcmVzZXQ7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVByZXNldFNpZ25hbC5zZXQocHJlc2V0KTtcbiAgICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgICAvLyBTdG9wIFNTUiBjb25zdHJ1Y3RvciBsaXN0ZW5lciBpZiBzdGlsbCBvcGVuLlxuICAgICAgICAgIHRoaXMuc3NyQ29uc3RydWN0b3JTdWI/LigpO1xuICAgICAgICAgIHRoaXMuc3NyQ29uc3RydWN0b3JTdWIgPSBudWxsO1xuICAgICAgICAgIGNvbnN0IHByZXNldCA9IE10ZVByZXNldFNlcnZpY2UuZ2V0UHJlc2V0KHRoaXMucHJlc2V0ID8/ICdnbG9iYWwnKTtcbiAgICAgICAgICB0aGlzLmhhbmRsZVNzclByZXNldENoYW5nZXMocHJlc2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZ2V0IHByZXNldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZXNldDtcbiAgICAgIH1cbiAgICAgIHByaXZhdGUgX3ByZXNldCA9ICdnbG9iYWwnO1xuXG4gICAgICBAcHJvcGVydHkoeyByZWZsZWN0OiBvcHRpb25zPy5yZWZsZWN0QXBwbGllZFByZXNldCA/PyBmYWxzZSB9KSBhcHBsaWVkUHJlc2V0ID0gJ2dsb2JhbCc7XG5cbiAgICAgIEBzdGF0ZSgpIHByaXZhdGUgX2FwcGxpZWRQcmVzZXQ/OiBzdHJpbmc7XG5cbiAgICAgIC8qKiBLZWVwcyBjb25zdHJ1Y3RvciBwcmVzZXQgc3Vic2NyaXB0aW9uIG9wZW4gdW50aWwgd2lsbFVwZGF0ZSAqL1xuICAgICAgcHJpdmF0ZSBzc3JDb25zdHJ1Y3RvclN1YjogVW5zdWJzY3JpYmVyO1xuICAgICAgcHJpdmF0ZSBwcmV2aW91c0NvbXBvbmVudFVuc3ViOiBVbnN1YnNjcmliZXI7XG5cbiAgICAgIC8qKiBFbWl0cyB3aGVuZXZlciB0aGUgbG9jYWwgcHJlc2V0IHZhbHVlIGNoYW5nZXMuICovXG4gICAgICBwcml2YXRlIF9hY3RpdmVQcmVzZXRTaWduYWwgPSBzaWduYWw8c3RyaW5nPihudWxsKTtcbiAgICAgIHByaXZhdGUgX3BhcmVudFByZXNldFNpZ25hbCA9IHNpZ25hbDxzdHJpbmc+KG51bGwpO1xuXG4gICAgICBwcml2YXRlIF9wcmVzZXRDb250ZXh0ID0gbmV3IENvbnRleHRDb25zdW1lcih0aGlzLCB7XG4gICAgICAgIGNvbnRleHQ6IHByZXNldENvbnRleHQsXG4gICAgICAgIHN1YnNjcmliZTogdHJ1ZSxcbiAgICAgICAgY2FsbGJhY2s6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3BhcmVudFByZXNldFNpZ25hbC5zZXQoKHZhbHVlID09PSAnJyA/IG51bGwgOiB2YWx1ZSkgPz8gJ2dsb2JhbCcpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGdldFByb3BlcnR5RGVzY3JpcHRvciBtZXRob2QgdG8gY2hlY2sgZm9yIHRoZSBjdXN0b21cbiAgICAgICAqIGBpc1ByZXNldGAgb3B0aW9uLiBEZXNjcmlwdG9ycyBvZiBwcm9wZXJ0aWVzIHRoYXQgYXJlIGRlY2xhcmVkIHdpdGggdGhlIGBpc1ByZXNldGBcbiAgICAgICAqIG9wdGlvbiBhcmUgZGVmaW5lZCB3aXRoIHNwZWNpYWwgZ2V0dGVyL3NldHRlciBsb2dpYyB0aGF0IHNldHMgdmFsdWUgdG8gdmFsdWVNYXBcbiAgICAgICAqIGFuZCBnZXRzIHZhbHVlcyBmcm9tIHRoZSB2YWx1ZU1hcCBidXQgdGhlbiBhbHNvIGZhbGxzIGJhY2sgdG8gYW55IHZhbHVlIGluIHRoZSBwcmVzZXRNYXBcbiAgICAgICAqXG4gICAgICAgKiBUaGUgcHJlc2V0TWFwIGlzIHBvcHVsYXRlZCBhYm92ZSBmcm9tIHZhbHVlcyBmcm9tIHRoZSBwcmVzZXRDb250cm9sbGVyIHdoZW5ldmVyIHRoZVxuICAgICAgICogcHJlc2V0IGZvciB0aGlzIGNvbXBvbmVudCBpcyBjaGFuZ2VkIGdsb2JhbGx5LlxuICAgICAgICovXG4gICAgICBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKFxuICAgICAgICBuYW1lOiBQcm9wZXJ0eUtleSxcbiAgICAgICAga2V5OiBzdHJpbmcgfCBzeW1ib2wsXG4gICAgICAgIG9wdGlvbnM6IFByb3BlcnR5RGVjbGFyYXRpb25cbiAgICAgICkge1xuICAgICAgICBjb25zdCB7IGdldCwgc2V0IH0gPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcy5wcm90b3R5cGUsIG5hbWUpID8/IHtcbiAgICAgICAgICBnZXQodGhpczogUmVhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1trZXkgYXMga2V5b2YgdHlwZW9mIHRoaXNdO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCwgdjogdW5rbm93bikge1xuICAgICAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nIHwgc3ltYm9sLCB1bmtub3duPilba2V5XSA9IHY7XG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBnZXQodGhpczogUmVhY3RpdmVFbGVtZW50KTogYW55IHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgZ2V0dGVyIGxvZ2ljIHRoYXQgZ2V0cyBmcm9tIHRoZSB2YWx1ZU1hcCBvciBwcmVzZXRNYXBcbiAgICAgICAgICAgIGlmIChvcHRpb25zWydpc1ByZXNldCddKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgKHRoaXMgYXMge30gYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pLl92YWx1ZU1hcCBhcyBNYXA8XG4gICAgICAgICAgICAgICAgICAgIFByb3BlcnR5S2V5LFxuICAgICAgICAgICAgICAgICAgICBQW2tleW9mIFBdXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgKS5nZXQobmFtZSkgfHxcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkuX3ByZXNldE1hcCBhcyBNYXA8XG4gICAgICAgICAgICAgICAgICAgIFByb3BlcnR5S2V5LFxuICAgICAgICAgICAgICAgICAgICBQW2tleW9mIFBdXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgKS5nZXQobmFtZSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlZmF1bHQgcHJvcGVydHkgZ2V0dGVyIGxvZ2ljXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGdldD8uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQsIHZhbHVlOiB1bmtub3duKSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIHNldHRlciBsb2dpYyB0aGF0IHNldHMgdG8gdGhlIHZhbHVlTWFwXG4gICAgICAgICAgICBpZiAob3B0aW9uc1snaXNQcmVzZXQnXSkge1xuICAgICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IChcbiAgICAgICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkuX3ZhbHVlTWFwIGFzIE1hcDxQcm9wZXJ0eUtleSwgUFtrZXlvZiBQXT5cbiAgICAgICAgICAgICAgKS5nZXQobmFtZSk7XG4gICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkuX3ZhbHVlTWFwIGFzIE1hcDxQcm9wZXJ0eUtleSwgUFtrZXlvZiBQXT5cbiAgICAgICAgICAgICAgKS5zZXQobmFtZSwgdmFsdWUgYXMgYW55KTtcbiAgICAgICAgICAgICAgLy8gRHVyaW5nIFNTUiB3ZSBuZWVkIHRvIHVwZGF0ZSBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgICAgICAgICh0aGlzIGFzIHVua25vd24gYXMgUmVhY3RpdmVFbGVtZW50KS5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBPbiB0aGUgY2xpZW50IHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGN1cnJlbnQgdXBkYXRlIHRvIGZpbmlzaFxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBSZWFjdGl2ZUVsZW1lbnQpLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEZWZhdWx0IHByb3BlcnR5IHNldHRlciBsb2dpY1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gZ2V0Py5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICBzZXQhLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlYWN0aXZlRWxlbWVudCkucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgICAgLy8gU3Vic2NyaWJlcyBmb3IgY2hhbmdlcyB0byB0aGlzIGNvbXBvbmVudHMgYWN0aXZlIHByZXNldCB0byB1cGRhdGUgYWxsIHJlbGV2YW50IHByb3BzIHByZXNldCB2YWx1ZXNcbiAgICAgICAgdGhpcy5zdWJzLnB1c2goXG4gICAgICAgICAgY29tcHV0ZWQoXG4gICAgICAgICAgICBbdGhpcy5fYWN0aXZlUHJlc2V0U2lnbmFsLCB0aGlzLl9wYXJlbnRQcmVzZXRTaWduYWxdLFxuICAgICAgICAgICAgKFthY3RpdmVQcmVzZXQsIHBhcmVudFByZXNldF0sIHNldCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoYWN0aXZlUHJlc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2xvY2FsUHJlc2V0VGhlbWUgPVxuICAgICAgICAgICAgICAgICAgYWN0aXZlUHJlc2V0ID09PSAnZ2xvYmFsJ1xuICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgOiBNdGVQcmVzZXRTZXJ2aWNlLmdldENvbXBvbmVudFByZXNldChhY3RpdmVQcmVzZXQsICd0aGVtZScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX19sb2NhbFByZXNldFRoZW1lID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ3RoZW1lJywgbnVsbCk7XG5cbiAgICAgICAgICAgICAgdGhpcy5fYXBwbGllZFByZXNldCA9IGFjdGl2ZVByZXNldCA/PyBwYXJlbnRQcmVzZXQgPz8gJ2dsb2JhbCc7XG4gICAgICAgICAgICAgIHRoaXMuYXBwbGllZFByZXNldCA9IE10ZVByZXNldFNlcnZpY2UuZ2V0Q29tcG9uZW50UHJlc2V0KFxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGxpZWRQcmVzZXQsXG4gICAgICAgICAgICAgICAgJ3ByZXNldCdcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAvLyBVbnN1YnNjcmliZSB0byBwcmV2aW91cyBjb21wb25lbnQgcHJlc2V0IGNoYW5nZXNcbiAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0NvbXBvbmVudFVuc3ViPy4oKTtcbiAgICAgICAgICAgICAgLy8gVXBkYXRlIHByb3BzIGlmIG5ldyBjb21wb25lbnQgcHJlc2V0IGVtaXRzXG4gICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDb21wb25lbnRVbnN1YiA9IE10ZVByZXNldFNlcnZpY2Uuc2VsZWN0Q29tcG9uZW50UHJlc2V0KFxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGxpZWRQcmVzZXQsXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NvbXBvbmVudE5hbWVcbiAgICAgICAgICAgICAgKS5zdWJzY3JpYmUoKG5ld1ByZXNldCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChuZXdQcmVzZXQpIHtcbiAgICAgICAgICAgICAgICAgIHNldChuZXdQcmVzZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKS5zdWJzY3JpYmUoKG5ld1ByZXNldHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlc01hcCA9IG5ldyBNYXAodGhpcy5fcHJlc2V0TWFwKTtcbiAgICAgICAgICAgIGNvbnN0IG9sZFByb3BzID0gQXJyYXkuZnJvbSh0aGlzLl9wcmVzZXRNYXAua2V5cygpKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gT2JqZWN0LmtleXMobmV3UHJlc2V0cyA/PyB7fSk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBrZXlzIGluIHRoZSBuZXcgcHJlc2V0cyBjbGVhciBhbGwgcHJlc2V0IHZhbHVlc1xuICAgICAgICAgICAgaWYgKG5ld1Byb3BzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBvbGQgc2V0IHByb3BzIGFuZCBuZXcgb25lc1xuICAgICAgICAgICAgLy8gUmVtb3ZlIG9sZCBvbmVzICYgc2V0IG5ldyBvbmVzXG4gICAgICAgICAgICAvLyBGaW5hbGx5IGZvcmNlIGFuIHVwZGF0ZSBmb3IgZWFjaCBwcm9wXG4gICAgICAgICAgICBbLi4ub2xkUHJvcHMsIC4uLm5ld1Byb3BzXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG5ld1ByZXNldHNba2V5XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5zZXQoa2V5LCBuZXdQcmVzZXRzW2tleV0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoa2V5LCBvbGRWYWx1ZXNNYXAuZ2V0KGtleSkgPz8gbnVsbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgICAgICB0aGlzLnByZXZpb3VzQ29tcG9uZW50VW5zdWI/LigpO1xuICAgICAgICB0aGlzLnNzckNvbnN0cnVjdG9yU3ViPy4oKTtcbiAgICAgIH1cblxuICAgICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgc3VwZXIoYXJncyk7XG5cbiAgICAgICAgLy8gVE9ETyhyZWVjZSk6IEVuc3VyZSB3ZSB1cGRhdGUgdGhpcyB0byBzdXBwb3J0IGNvbnRleHQgd2hlbiB0aGF0IGlzIFNTUiBGcmllbmRseTogaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzMzNjVcbiAgICAgICAgLy8gSGFuZGxlIHNldHRpbmcgcHJlc2V0IGRlZmF1bHRzIGluIFNTUlxuICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgIHRoaXMuc3NyQ29uc3RydWN0b3JTdWIgPSBNdGVQcmVzZXRTZXJ2aWNlLnNlbGVjdFByZXNldCh0aGlzLnByZXNldCA/PyAnZ2xvYmFsJykuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHByZXNldCkgPT4gdGhpcy5oYW5kbGVTc3JQcmVzZXRDaGFuZ2VzKHByZXNldClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByaXZhdGUgaGFuZGxlU3NyUHJlc2V0Q2hhbmdlcyhwcmVzZXQ6IE1vcnRhclByZXNldCkge1xuICAgICAgICBpZiAocHJlc2V0KSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50UHJlc2V0cyA9IHByZXNldFt0aGlzLl9fY29tcG9uZW50TmFtZV07XG4gICAgICAgICAgY29uc3Qgb2xkUHJvcHMgPSBBcnJheS5mcm9tKHRoaXMuX3ByZXNldE1hcC5rZXlzKCkpO1xuICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gT2JqZWN0LmtleXMoY29tcG9uZW50UHJlc2V0cyA/PyB7fSk7XG5cbiAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8ga2V5cyBpbiB0aGUgbmV3IHByZXNldHMgY2xlYXIgYWxsIHByZXNldCB2YWx1ZXNcbiAgICAgICAgICBpZiAobmV3UHJvcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuY2xlYXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG9sZCBzZXQgcHJvcHMgYW5kIG5ldyBvbmVzXG4gICAgICAgICAgLy8gUmVtb3ZlIG9sZCBvbmVzICYgc2V0IG5ldyBvbmVzXG4gICAgICAgICAgLy8gRmluYWxseSBmb3JjZSBhbiB1cGRhdGUgZm9yIGVhY2ggcHJvcFxuICAgICAgICAgIFsuLi5vbGRQcm9wcywgLi4ubmV3UHJvcHNdLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudFByZXNldHNba2V5XSkge1xuICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuc2V0KGtleSwgY29tcG9uZW50UHJlc2V0c1trZXldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShrZXksIG51bGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuYXBwbGllZFByZXNldCA9IHByZXNldFsncHJlc2V0J107XG4gICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCdhcHBsaWVkUHJlc2V0JywgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFByZXNldEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8UHJlc2V0RWxlbWVudEludGVyZmFjZTxQPj4gJiBUO1xuICB9O1xufTtcbiIsICJpbXBvcnQgeyBQcm9wZXJ0eURlY2xhcmF0aW9uIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcHJvcGVydHkuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlc2V0UHJvcGVydHk8VD4ob3B0aW9ucz86IFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgcmV0dXJuIHByb3BlcnR5KHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGlzUHJlc2V0OiB0cnVlLFxuICB9IGFzIGFueSk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ0BsaXQtbGFicy9jb250ZXh0JztcblxuZXhwb3J0IGNvbnN0IHByZXNldENvbnRleHQgPSBjcmVhdGVDb250ZXh0PHN0cmluZz4oJ01URV9QUkVTRVQnKTtcbiIsICJpbXBvcnQgeyBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IE10ZVByZXNldFNlcnZpY2UgfSBmcm9tICcuLi9wcmVzZXRzJztcbmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IE10ZUVsZW1lbnQgfSBmcm9tICcuLi9iYXNlLWNsYXNzZXMnO1xuXG5jb25zdCBnbG9iYWxQcmVzZXQkID0gTXRlUHJlc2V0U2VydmljZS5zZWxlY3RQcmVzZXQoJ2dsb2JhbCcpO1xuY29uc3QgZ2xvYmFsUHJlc2V0TmFtZSQgPSBjb21wdXRlZChnbG9iYWxQcmVzZXQkLCAocHJlc2V0KSA9PiBwcmVzZXQucHJlc2V0KTtcblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWVkUHJlc2V0Q29udGV4dCB7XG4gIHByZXNldE5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBQcmVzZXQgaXMgZGV0ZXJtaW5lZCBmcm9tIGVpdGhlciB0aGUgcGFyZW50IHByZXNldCBjb250ZXh0IG9yIGEgbG9jYWwgcHJlc2V0IHByb3BlcnR5LlxuICogVGhpcyBjb250cm9sbGVyIGtlZXBzIHRyYWNrIG9mIHRoZSBhY3R1YWwgYWN0aXZlIHByZXNldCBhcHBsaWVkIHRvIHRoZSBjdXJyZW50IGNvbXBvbmVudC5cbiAqIElmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4gaXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgdGhhdCBjb250ZXh0IGNoYW5nZXMuIE90aGVyd2lzZSBjb250cm9sbGVyXG4gKiBtZXRob2RzIGNhbiBiZSBjYWxsZWQgd2hlbiBuZWVkZWQuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZCBldmVuIHdpdGhpbiBlbGVtZW50cyB0aGF0IGRvIG5vdCBoYXZlIHRoZWlyIG93biBwcmVzZXRcbiAqIG9wdGlvbnMgKGFrYSBleHRlbmQgdGhlIHByZXNldE1peGluKS5cbiAqL1xuZXhwb3J0IGNsYXNzIEFwcGxpZWRQcmVzZXRDb250ZXh0Q29udHJvbGxlciB7XG4gIHByaXZhdGUgYXBwbGllZFByZXNldE5hbWUgPSAnZ2xvYmFsJztcbiAgcHJpdmF0ZSBhY3RpdmVHbG9iYWxQcmVzZXROYW1lID0gJ2RlZmF1bHQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaG9zdDogUmVhY3RpdmVDb250cm9sbGVySG9zdCAmIE10ZUVsZW1lbnQsXG4gICAgcHJpdmF0ZSBjYWxsYmFjaz86IChjb250ZXh0OiBBcHBsaWVkUHJlc2V0Q29udGV4dCkgPT4gdm9pZFxuICApIHtcbiAgICB0aGlzLmhvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gIH1cblxuICBob3N0Q29ubmVjdGVkKCkge1xuICAgIHRoaXMuaG9zdC5zdWJzLnB1c2goXG4gICAgICBnbG9iYWxQcmVzZXROYW1lJC5zdWJzY3JpYmUoKGdsb2JhbFByZXNldE5hbWUpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVHbG9iYWxQcmVzZXROYW1lID0gZ2xvYmFsUHJlc2V0TmFtZTtcbiAgICAgICAgdGhpcy51cGRhdGVBcHBsaWVkUHJlc2V0Q29udGV4dCgpO1xuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuZXhlY0NhbGxiYWNrKCk7XG4gIH1cblxuICBob3N0VXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlQXBwbGllZFByZXNldENvbnRleHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY0NhbGxiYWNrKCkge1xuICAgIHRoaXMuY2FsbGJhY2s/Lih7XG4gICAgICBwcmVzZXROYW1lOiB0aGlzLmFwcGxpZWRQcmVzZXROYW1lLFxuICAgIH0gYXMgQXBwbGllZFByZXNldENvbnRleHQpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVBcHBsaWVkUHJlc2V0Q29udGV4dCgpIHtcbiAgICBsZXQgdXBkYXRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IG5ld1ByZXNldE5hbWUgPSAodGhpcy5ob3N0IGFzIGFueSkuYXBwbGllZFByZXNldCA/PyB0aGlzLmFjdGl2ZUdsb2JhbFByZXNldE5hbWU7XG4gICAgaWYgKG5ld1ByZXNldE5hbWUgIT09IHRoaXMuYXBwbGllZFByZXNldE5hbWUpIHtcbiAgICAgIHRoaXMuYXBwbGllZFByZXNldE5hbWUgPSBuZXdQcmVzZXROYW1lO1xuICAgICAgdXBkYXRlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkKSB7XG4gICAgICB0aGlzLmV4ZWNDYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVQcmVzZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGxpZWRQcmVzZXROYW1lO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaXRFbGVtZW50LCBQcm9wZXJ0eVZhbHVlTWFwLCBSZWFjdGl2ZUVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgaXNTc3IgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG50eXBlIFVwZGF0ZUhhbmRsZXIgPSAoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlTWFwPGFueT4pID0+IHZvaWQ7XG5cbmludGVyZmFjZSBPblVwZGF0ZU9wdGlvbnMge1xuICAvKipcbiAgICogSWYgdHJ1ZSwgd2lsbCBvbmx5IHN0YXJ0IHdhdGNoaW5nIGFmdGVyIHRoZSBpbml0aWFsIHVwZGF0ZS9yZW5kZXJcbiAgICovXG4gIHdhaXRVbnRpbEZpcnN0VXBkYXRlPzogYm9vbGVhbjtcblxuICAvKiogRGV0ZXJtaW5lcyB3aGVyZSB0aGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZC4gRGVmYXVsdHMgdG8gYGNsaWVudGAuICovXG4gIG9uPzogJ2NsaWVudCcgfCAnc3NyJyB8ICdib3RoJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uVXBkYXRlKHByb3BOYW1lczogc3RyaW5nIHwgc3RyaW5nW10sIG9wdGlvbnM/OiBPblVwZGF0ZU9wdGlvbnMpIHtcbiAgY29uc3QgcmVzb2x2ZWRPcHRpb25zOiBSZXF1aXJlZDxPblVwZGF0ZU9wdGlvbnM+ID0ge1xuICAgIHdhaXRVbnRpbEZpcnN0VXBkYXRlOiBmYWxzZSxcbiAgICBvbjogJ2NsaWVudCcsXG4gICAgLi4ub3B0aW9ucyxcbiAgfTtcbiAgcmV0dXJuIDxFbGVtQ2xhc3MgZXh0ZW5kcyBMaXRFbGVtZW50Pihwcm90bzogRWxlbUNsYXNzLCBkZWNvcmF0ZWRGbk5hbWU6IFByb3BlcnR5S2V5KSA9PiB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtLSB1cGRhdGUgaXMgYSBwcm90ZWN0ZWQgcHJvcGVydHlcbiAgICBjb25zdCB7IHdpbGxVcGRhdGUgfSA9IHByb3RvO1xuICAgIGNvbnN0IF9wcm9wTmFtZXMgPSBBcnJheS5pc0FycmF5KHByb3BOYW1lcykgPyBwcm9wTmFtZXMgOiBbcHJvcE5hbWVzXTtcbiAgICBjb25zdCBwcm9wTmFtZUtleXMgPSBfcHJvcE5hbWVzIGFzIChrZXlvZiBFbGVtQ2xhc3MpW107XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtLSB1cGRhdGUgaXMgYSBwcm90ZWN0ZWQgcHJvcGVydHlcbiAgICBwcm90by53aWxsVXBkYXRlID0gZnVuY3Rpb24gKHRoaXM6IEVsZW1DbGFzcywgY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlTWFwPGFueT4pIHtcbiAgICAgIGlmIChwcm9wTmFtZUtleXMuc29tZSgoa2V5KSA9PiBjaGFuZ2VkUHJvcHMuaGFzKGtleSkpKSB7XG4gICAgICAgIGlmICghcmVzb2x2ZWRPcHRpb25zLndhaXRVbnRpbEZpcnN0VXBkYXRlIHx8ICh0aGlzIGFzIHVua25vd24gYXMgTGl0RWxlbWVudCkuaGFzVXBkYXRlZCkge1xuICAgICAgICAgIGNvbnN0IHNzciA9IGlzU3NyKCk7XG4gICAgICAgICAgaWYgKHJlc29sdmVkT3B0aW9ucy5vbiA9PT0gJ2NsaWVudCcgJiYgIXNzcikge1xuICAgICAgICAgICAgKHRoaXNbZGVjb3JhdGVkRm5OYW1lXSBhcyB1bmtub3duIGFzIFVwZGF0ZUhhbmRsZXIpKGNoYW5nZWRQcm9wcyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNvbHZlZE9wdGlvbnMub24gPT09ICdzc3InICYmIHNzcikge1xuICAgICAgICAgICAgKHRoaXNbZGVjb3JhdGVkRm5OYW1lXSBhcyB1bmtub3duIGFzIFVwZGF0ZUhhbmRsZXIpKGNoYW5nZWRQcm9wcyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNvbHZlZE9wdGlvbnMub24gPT09ICdib3RoJykge1xuICAgICAgICAgICAgKHRoaXNbZGVjb3JhdGVkRm5OYW1lXSBhcyB1bmtub3duIGFzIFVwZGF0ZUhhbmRsZXIpKGNoYW5nZWRQcm9wcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3aWxsVXBkYXRlLmNhbGwodGhpcywgY2hhbmdlZFByb3BzKTtcbiAgICB9O1xuICB9O1xufVxuIiwgImltcG9ydCB7IGlzU3NyIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudE9wdGlvbnMge1xuICAvKiogaW5kaWNhdGUgaWYgZXZlbnQgYnViYmxlcyB1cCB0aHJvdWdoIHRoZSBET00gb3Igbm90ICovXG4gIGJ1YmJsZXM/OiBib29sZWFuO1xuICAvKiogaW5kaWNhdGUgaWYgZXZlbnQgaXMgY2FuY2VsYWJsZSAqL1xuICBjYW5jZWxhYmxlPzogYm9vbGVhbjtcbiAgLyoqIGluZGljYXRlIGlmIGV2ZW50IGNhbiBidWJibGUgYWNyb3NzIHRoZSBib3VuZGFyeSBiZXR3ZWVuIHRoZSBzaGFkb3cgRE9NIGFuZCB0aGUgbGlnaHQgRE9NICovXG4gIGNvbXBvc2VkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50RW1pdHRlcjxUPiB7XG4gIHByaXZhdGUgZXZlbnROYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YXJnZXQ6IEhUTUxFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZykge1xuICAgIC8vIFNhbml0eSBjaGVjayB0byBjYWxsIG91dCBpbXByb3Blcmx5IHByZWZpeGVkIGV2ZW50IGVtaXR0ZXJzXG4gICAgdHJ5IHtcbiAgICAgIGlmIChldmVudE5hbWU/LlswXSAhPT0gJ18nKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYCR7dGFyZ2V0LnRhZ05hbWV9OiBFdmVudEVtaXR0ZXIgcHJvcGVydHkgZm9yIFwiJHtldmVudE5hbWV9XCIgbXVzdCBiZSBwcmVmaXhlZCB3aXRoIFwiX1wiYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH1cbiAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZS5yZXBsYWNlKC9eXy8sICcnKTtcbiAgfVxuXG4gIC8qKiBEaXNwYXRjaGVzIHRoZSBjdXN0b20gZXZlbnQuIElmIHRoZSBldmVudCBpcyBgY2FuY2VsYWJsZWAgYW5kIGlzIHByZXZlbnRlZCB0aGlzIHdpbGwgcmV0dXJuIGZhbHNlLiAqL1xuICBlbWl0KHZhbHVlOiBULCBvcHRpb25zPzogRXZlbnRPcHRpb25zKTogYm9vbGVhbiB7XG4gICAgLy8gVE9ETyhyZWVjZSk6IHJlbW92ZSB3aGVuIGV2ZW50cyBhcmUgc3VwcG9ydGVkIGR1cmluZyBTU1JcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhcmdldC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQ8VD4odGhpcy5ldmVudE5hbWUsIHtcbiAgICAgICAgICBkZXRhaWw6IHZhbHVlLFxuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG4vLyBMZWdhY3kgVFMgRGVjb3JhdG9yXG5mdW5jdGlvbiBsZWdhY3lFdmVudChcbiAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLFxuICBwcm90b09yRGVzY3JpcHRvcjogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gIG5hbWU6IFByb3BlcnR5S2V5XG4pIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lLCBkZXNjcmlwdG9yKTtcbn1cblxuLy8gVEMzOSBEZWNvcmF0b3JzIHByb3Bvc2FsXG5mdW5jdGlvbiBzdGFuZGFyZEV2ZW50KGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvciwgZWxlbWVudDogeyBrZXk6IHN0cmluZyB9KSB7XG4gIHJldHVybiB7XG4gICAga2luZDogJ21ldGhvZCcsXG4gICAgcGxhY2VtZW50OiAncHJvdG90eXBlJyxcbiAgICBrZXk6IGVsZW1lbnQua2V5LFxuICAgIGRlc2NyaXB0b3IsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudEVtaXR0ZXIoKSB7XG4gIHJldHVybiAocHJvdG9PckRlc2NyaXB0b3I6IGFueSwgbmFtZTogc3RyaW5nKTogYW55ID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0ge1xuICAgICAgZ2V0KHRoaXM6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgRXZlbnRFbWl0dGVyKHRoaXMsIG5hbWUgIT09IHVuZGVmaW5lZCA/IG5hbWUgOiBwcm90b09yRGVzY3JpcHRvci5rZXkpO1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgfTtcblxuICAgIHJldHVybiBuYW1lICE9PSB1bmRlZmluZWRcbiAgICAgID8gbGVnYWN5RXZlbnQoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IsIG5hbWUpXG4gICAgICA6IHN0YW5kYXJkRXZlbnQoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IpO1xuICB9O1xufVxuIiwgImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvYmFzZS5qcyc7XG4vKipcbiAqIEl0ZW1zIGluIHRoaXMgZmlsZSBhcmUgbW9kaWZpY2F0aW9ucyBvZiBvZiB0aGUgZGVjb3JhdG9ycyBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvYmxvYi9tYWluL3BhY2thZ2VzL3JlYWN0aXZlLWVsZW1lbnQvc3JjL2RlY29yYXRvcnMvY3VzdG9tLWVsZW1lbnQudHNcbiAqXG4gKiBXZSd2ZSBhZGRlZCBjaGVja3MgdG8gcHJldmVudCByZS1yZWdpc3RyYXRpb25zIGZyb20gdGhyb3dpbmcgaGFyZCBlcnJvcnMuXG4gKi9cblxuLyoqXG4gKiBBbGxvdyBmb3IgY3VzdG9tIGVsZW1lbnQgY2xhc3NlcyB3aXRoIHByaXZhdGUgY29uc3RydWN0b3JzXG4gKi9cbnR5cGUgQ3VzdG9tRWxlbWVudENsYXNzID0gT21pdDx0eXBlb2YgSFRNTEVsZW1lbnQsICduZXcnPjtcblxuZXhwb3J0IHR5cGUgQ3VzdG9tRWxlbWVudERlY29yYXRvciA9IHtcbiAgLy8gbGVnYWN5XG4gIChjbHM6IEN1c3RvbUVsZW1lbnRDbGFzcyk6IHZvaWQ7XG5cbiAgLy8gc3RhbmRhcmRcbiAgKHRhcmdldDogQ3VzdG9tRWxlbWVudENsYXNzLCBjb250ZXh0OiBDbGFzc0RlY29yYXRvckNvbnRleHQ8Q29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+Pik6IHZvaWQ7XG59O1xuXG4vKipcbiAqIENsYXNzIGRlY29yYXRvciBmYWN0b3J5IHRoYXQgZGVmaW5lcyB0aGUgZGVjb3JhdGVkIGNsYXNzIGFzIGEgY3VzdG9tIGVsZW1lbnQuXG4gKlxuICogYGBganNcbiAqIEBjdXN0b21FbGVtZW50KCdteS1lbGVtZW50JylcbiAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgYDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKiBAcGFyYW0gdGFnTmFtZSBUaGUgdGFnIG5hbWUgb2YgdGhlIGN1c3RvbSBlbGVtZW50IHRvIGRlZmluZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmluZUVsZW1lbnQgPVxuICAodGFnTmFtZTogc3RyaW5nKTogQ3VzdG9tRWxlbWVudERlY29yYXRvciA9PlxuICAoXG4gICAgY2xhc3NPclRhcmdldDogQ3VzdG9tRWxlbWVudENsYXNzIHwgQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+LFxuICAgIGNvbnRleHQ/OiBDbGFzc0RlY29yYXRvckNvbnRleHQ8Q29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+PlxuICApID0+IHtcbiAgICBpZiAoY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyKCgpID0+IHtcbiAgICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQ/Lih0YWdOYW1lKSkge1xuICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGFzc09yVGFyZ2V0IGFzIEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldD8uKHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGFzc09yVGFyZ2V0IGFzIEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3Rvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuIiwgImltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50LCBQcmVzZXRFbGVtZW50SW50ZXJmYWNlLCBwcmVzZXRQcm9wZXJ0eSB9IGZyb20gJy4uLyc7XG5cbi8qKiBQb3NzaWJsZSBjb3JlIHBhbGV0dGUgZ3JvdXAgY29sb3IgdmFsdWVzLiAqL1xuZXhwb3J0IHR5cGUgQ29yZVBhbGV0dGUgPSAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICd0ZXJ0aWFyeScgfCAnZGFuZ2VyJyB8IHVuZGVmaW5lZDtcblxuLyoqICBQb3NzaWJsZSBzdGF0dXMgcGFsZXR0ZSBncm91cCBjb2xvciB2YWx1ZXMuICovXG5leHBvcnQgdHlwZSBTdGF0dXNQYWxldHRlID1cbiAgfCAncHJpbWFyeSdcbiAgfCAnc2Vjb25kYXJ5J1xuICB8ICd0ZXJ0aWFyeSdcbiAgfCAnYWNjZW50J1xuICB8ICd3YXJuaW5nJ1xuICB8ICdzdWNjZXNzJ1xuICB8ICdkYW5nZXInXG4gIHwgdW5kZWZpbmVkO1xuXG4vKiogUG9zc2libGUgdml6IHBhbGV0dGUgZ3JvdXAgY29sb3IgdmFsdWVzLiAqL1xuZXhwb3J0IHR5cGUgVml6UGFsZXR0ZSA9ICcxJyB8ICcyJyB8ICczJyB8ICc0JyB8ICc1JyB8ICc2JyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgUGFsZXR0ZUdyb3VwQ29sb3IgPSBDb3JlUGFsZXR0ZSB8IFN0YXR1c1BhbGV0dGUgfCBWaXpQYWxldHRlO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb2xvckludGVyZmFjZTxQYWxldHRlR3JvdXA+IHtcbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIHByaW1hcnkgY29sb3IgcGFsZXR0ZSB1c2VkIHRvIHRoZW1lIHRoaXMgY29tcG9uZW50XG4gICAqIEBhdHRyIGNvbG9yXG4gICAqL1xuICBjb2xvcjogUGFsZXR0ZUdyb3VwO1xufVxuXG5leHBvcnQgZW51bSBQYWxldHRlR3JvdXBPcHRpb24ge1xuICBDb3JlID0gJ2NvcmUnLFxuICBTdGF0dXMgPSAnc3RhdHVzJyxcbiAgVml6ID0gJ3ZpeicsXG59XG5cbmV4cG9ydCBjb25zdCBDb3JlQ29sb3JNaXhpbiA9IDxcbiAgVCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQgJiBQYXJ0aWFsPFByZXNldEVsZW1lbnRJbnRlcmZhY2U8YW55Pj4+XG4+KFxuICBzdXBlckNsYXNzOiBUXG4pID0+IHtcbiAgY2xhc3MgQ29sb3JFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgcHJpbWFyeSBjb2xvciBwYWxldHRlIHVzZWQgdG8gdGhlbWUgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBjb2xvclxuICAgICAqL1xuICAgIEBwcmVzZXRQcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgY29sb3I6IENvcmVQYWxldHRlO1xuICB9XG5cbiAgcmV0dXJuIENvbG9yRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxDb2xvckludGVyZmFjZTxDb3JlUGFsZXR0ZT4+ICYgVDtcbn07XG5cbmV4cG9ydCBjb25zdCBTdGF0dXNDb2xvck1peGluID0gPFxuICBUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudCAmIFBhcnRpYWw8UHJlc2V0RWxlbWVudEludGVyZmFjZTxhbnk+Pj5cbj4oXG4gIHN1cGVyQ2xhc3M6IFRcbikgPT4ge1xuICBjbGFzcyBDb2xvckVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBwcmltYXJ5IGNvbG9yIHBhbGV0dGUgdXNlZCB0byB0aGVtZSB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBhdHRyIGNvbG9yXG4gICAgICovXG4gICAgQHByZXNldFByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBjb2xvcjogU3RhdHVzUGFsZXR0ZTtcbiAgfVxuXG4gIHJldHVybiBDb2xvckVsZW1lbnQgYXMgQ29uc3RydWN0b3I8Q29sb3JJbnRlcmZhY2U8U3RhdHVzUGFsZXR0ZT4+ICYgVDtcbn07XG5cbmV4cG9ydCBjb25zdCBWaXpDb2xvck1peGluID0gPFxuICBUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudCAmIFBhcnRpYWw8UHJlc2V0RWxlbWVudEludGVyZmFjZTxhbnk+Pj5cbj4oXG4gIHN1cGVyQ2xhc3M6IFRcbikgPT4ge1xuICBjbGFzcyBDb2xvckVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBwcmltYXJ5IGNvbG9yIHBhbGV0dGUgdXNlZCB0byB0aGVtZSB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBhdHRyIGNvbG9yXG4gICAgICovXG4gICAgQHByZXNldFByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBjb2xvcjogVml6UGFsZXR0ZTtcbiAgfVxuXG4gIHJldHVybiBDb2xvckVsZW1lbnQgYXMgQ29uc3RydWN0b3I8Q29sb3JJbnRlcmZhY2U8Vml6UGFsZXR0ZT4+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBwcmVzZXRQcm9wZXJ0eSB9IGZyb20gJy4uL3ByZXNldHMvcHJlc2V0LmRlY29yYXRvcic7XG5pbXBvcnQgeyBQcmVzZXRFbGVtZW50SW50ZXJmYWNlIH0gZnJvbSAnLi4vcHJlc2V0cy9wcmVzZXQubWl4aW4nO1xuXG5leHBvcnQgdHlwZSBEZW5zaXR5T3B0aW9ucyA9ICdjb21wYWN0JyB8ICdjb21meScgfCAncm9vbXknIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEZW5zaXR5SW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIGRhdGEgZGVuc2l0eSBvZiB0aGlzIGNvbXBvbmVudFxuICAgKiBAYXR0ciBkZW5zaXR5XG4gICAqL1xuICBkZW5zaXR5OiBEZW5zaXR5T3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IERlbnNpdHlNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudCAmIFByZXNldEVsZW1lbnRJbnRlcmZhY2U8YW55Pj4+KFxuICBzdXBlckNsYXNzOiBUXG4pID0+IHtcbiAgY2xhc3MgRGVuc2l0eUVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBkYXRhIGRlbnNpdHkgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBkZW5zaXR5XG4gICAgICovXG4gICAgQHByZXNldFByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBkZW5zaXR5OiBEZW5zaXR5T3B0aW9ucztcbiAgfVxuICByZXR1cm4gRGVuc2l0eUVsZW1lbnQgYXMgQ29uc3RydWN0b3I8RGVuc2l0eUludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3QoW2RlbnNpdHk9Y29tcGFjdF0pey0tbXRlLXNwYWNlLXh4czp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eHMpOy0tbXRlLXNwYWNlLXhzOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1zbSk7LS1tdGUtc3BhY2UtbWQ6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QtbWQpOy0tbXRlLXNwYWNlLWxnOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14bCk7LS1tdGUtc3BhY2UteHhsOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXh4bCk7LS1tdGUtc3BhY2UteHh4bDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eHhsKX06aG9zdChbZGVuc2l0eT1jb21meV0pey0tbXRlLXNwYWNlLXh4czp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHhzKTstLW10ZS1zcGFjZS14czp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHMpOy0tbXRlLXNwYWNlLXNtOnZhcigtLW10ZS1zcGFjZS1jb21meS1zbSk7LS1tdGUtc3BhY2UtbWQ6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LW1kKTstLW10ZS1zcGFjZS1sZzp2YXIoLS1tdGUtc3BhY2UtY29tZnktbGcpOy0tbXRlLXNwYWNlLXhsOnZhcigtLW10ZS1zcGFjZS1jb21meS14bCk7LS1tdGUtc3BhY2UteHhsOnZhcigtLW10ZS1zcGFjZS1jb21meS14eGwpOy0tbXRlLXNwYWNlLXh4eGw6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4eGwpfTpob3N0KFtkZW5zaXR5PXJvb215XSl7LS1tdGUtc3BhY2UteHhzOnZhcigtLW10ZS1zcGFjZS1yb29teS14eHMpOy0tbXRlLXNwYWNlLXhzOnZhcigtLW10ZS1zcGFjZS1yb29teS14cyk7LS1tdGUtc3BhY2Utc206dmFyKC0tbXRlLXNwYWNlLXJvb215LXNtKTstLW10ZS1zcGFjZS1tZDp2YXIoLS1tdGUtc3BhY2Utcm9vbXktbWQpOy0tbXRlLXNwYWNlLWxnOnZhcigtLW10ZS1zcGFjZS1yb29teS1sZyk7LS1tdGUtc3BhY2UteGw6dmFyKC0tbXRlLXNwYWNlLXJvb215LXhsKTstLW10ZS1zcGFjZS14eGw6dmFyKC0tbXRlLXNwYWNlLXJvb215LXh4bCk7LS1tdGUtc3BhY2UteHh4bDp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHh4bCl9YDsiLCAiaW1wb3J0IHsgTGl0RWxlbWVudCwgUHJvcGVydHlWYWx1ZXMgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uLyc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERpc2FibGVkSW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIERpc2FibGVzIHRoaXMgY29tcG9uZW50XG4gICAqIEBhdHRyIGRpc2FibGVkXG4gICAqL1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IERpc2FibGVkTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPExpdEVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIERpc2FibGVkRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIERpc2FibGVzIHRoaXMgY29tcG9uZW50XG4gICAgICogQGF0dHIgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvLyBCZWNhdXNlIGBhcmlhRGlzYWJsZWRgIGV4aXN0cyBhcyBhIHN0cmluZyBvbiBMaXRFbGVtZW50IHdlIGNhbm5vdCBkZWNsYXJlIHRoaXMgYSBwcm9wZXJ0eSBoZXJlXG4gICAgcHJvdGVjdGVkIHdpbGxVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlczxhbnk+KTogdm9pZCB7XG4gICAgICBzdXBlci53aWxsVXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChfY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCBgJHt0aGlzLmRpc2FibGVkfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIERpc2FibGVkRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxEaXNhYmxlZEludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgcHJlc2V0UHJvcGVydHkgfSBmcm9tICcuLi9wcmVzZXRzL3ByZXNldC5kZWNvcmF0b3InO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJbnZlcnNlSW50ZXJmYWNlIHtcbiAgLyoqIFJlbmRlcnMgdGhpcyBjb21wb25lbnQgd2l0aCBpbnZlcnNlIHRoZW1pbmcgKi9cbiAgaW52ZXJzZTogYm9vbGVhbjtcblxuICAvKiogU3BlY2lhbCBvcHRpb24gdG8gb3ZlcnJpZGUgaW52ZXJzZSB3aGVuIGl0IGlzIHNldCBieSBhIHByZXNldCAqL1xuICB3aXRob3V0SW52ZXJzZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IEludmVyc2VNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgSW52ZXJzZUVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKiogUmVuZGVycyB0aGlzIGNvbXBvbmVudCB3aXRoIGludmVyc2UgdGhlbWluZyAqL1xuICAgIEBwcmVzZXRQcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgaW52ZXJzZSA9IGZhbHNlO1xuXG4gICAgLyoqIFNwZWNpYWwgb3B0aW9uIHRvIG92ZXJyaWRlIGludmVyc2Ugd2hlbiBpdCBpcyBzZXQgYnkgYSBwcmVzZXQgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHdpdGhvdXRJbnZlcnNlID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIEludmVyc2VFbGVtZW50IGFzIENvbnN0cnVjdG9yPEludmVyc2VJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0KFtpbnZlcnNlXTpub3QoW3dpdGhvdXRJbnZlcnNlXSkpey0tbXRlLXN1cmZhY2UtMTp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlKTstLW10ZS1zdXJmYWNlLTEtcmdiOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UtcmdiKTstLW10ZS1zdXJmYWNlLTI6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS0yLXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtc3VyZmFjZS0zOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tbXRlLXN1cmZhY2UtMy1yZ2I6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpOy0tbXRlLXN1cmZhY2UtNDp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlKTstLW10ZS1zdXJmYWNlLTQtcmdiOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UtcmdiKTstLW10ZS1pbmstMTp2YXIoLS1tdGUtd2hpdGUpOy0tbXRlLWluay0xLXJnYjp2YXIoLS1tdGUtd2hpdGUtcmdiKTstLW10ZS1pbmstMjp2YXIoLS1tdGUtd2hpdGUpOy0tbXRlLWluay0yLXJnYjp2YXIoLS1tdGUtd2hpdGUtcmdiKTstLW10ZS1pbmstMzp2YXIoLS1tdGUtd2hpdGUpOy0tbXRlLWluay0zLXJnYjp2YXIoLS1tdGUtd2hpdGUtcmdiKTstLW10ZS1pbmstNDp2YXIoLS1tdGUtYmxhY2spOy0tbXRlLWluay00LXJnYjp2YXIoLS1tdGUtYmxhY2stcmdiKTstLW10ZS1pbmstNTp2YXIoLS1tdGUtYmxhY2spOy0tbXRlLWluay01LXJnYjp2YXIoLS1tdGUtYmxhY2stcmdiKTstLW10ZS1ib3JkZXItMTp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UpOy0tbXRlLWJvcmRlci0xLXJnYjp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UtcmdiKTstLW10ZS1ib3JkZXItMjp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UpOy0tbXRlLWJvcmRlci0yLXJnYjp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UtcmdiKTstLW10ZS1ib3JkZXItMzp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UpOy0tbXRlLWJvcmRlci0zLXJnYjp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UtcmdiKTstLW10ZS1kaXNhYmxlZC0xOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTEpOy0tbXRlLWRpc2FibGVkLTEtcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTEtcmdiKTstLW10ZS1kaXNhYmxlZC0yOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTIpOy0tbXRlLWRpc2FibGVkLTItcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTIpOy0tbXRlLWRpc2FibGVkLTM6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMyk7LS1tdGUtZGlzYWJsZWQtMy1yZ2I6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMy1yZ2IpOy0tbXRlLWRpc2FibGVkLTQ6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMyk7LS1tdGUtZGlzYWJsZWQtNC1yZ2I6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMy1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMS1kZWZhdWx0LXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTEtZGVmYXVsdC1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1hKTstLW10ZS1pdC1zdXJmYWNlLTEtaG92ZXItcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItcmdiKTstLW10ZS1pdC1zdXJmYWNlLTEtaG92ZXItYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLWEpOy0tbXRlLWl0LXN1cmZhY2UtMS1hY3RpdmUtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWFjdGl2ZS1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLWEpOy0tbXRlLWl0LXN1cmZhY2UtMi1kZWZhdWx0LXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1hKTstLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItcmdiKTstLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLWEpOy0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLWEpOy0tbXRlLWl0LXN1cmZhY2UtMy1kZWZhdWx0LXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTMtZGVmYXVsdC1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1hKTstLW10ZS1pdC1zdXJmYWNlLTMtaG92ZXItcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItcmdiKTstLW10ZS1pdC1zdXJmYWNlLTMtaG92ZXItYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLWEpOy0tbXRlLWl0LXN1cmZhY2UtMy1hY3RpdmUtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0zLWFjdGl2ZS1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLWEpOy0tbXRlLWxpZ2h0OnZhcigtLW10ZS13aGl0ZSk7LS1tdGUtbGlnaHQtcmdiOnZhcigtLW10ZS13aGl0ZS1yZ2IpOy0tbXRlLWRhcms6dmFyKC0tbXRlLWJsYWNrKTstLW10ZS1kYXJrLXJnYjp2YXIoLS1tdGUtYmxhY2stcmdiKTstLWJ1dHRvbi1maWxsZWQtYmc6dmFyKC0tbXRlLXdoaXRlKTstLWJ1dHRvbi1maWxsZWQtaW5rOnZhcigtLW10ZS1ibGFjayk7LS1idXR0b24tZmlsbGVkLWFjdGl2ZS1iZzp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UpOy0tYnV0dG9uLWZpbGxlZC1hY3RpdmUtaW5rOnZhcigtLW10ZS13aGl0ZSl9YDsiLCAiaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQgfSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgcHJlc2V0UHJvcGVydHkgfSBmcm9tICcuLi9wcmVzZXRzL3ByZXNldC5kZWNvcmF0b3InO1xuaW1wb3J0IHsgUHJlc2V0RWxlbWVudEludGVyZmFjZSB9IGZyb20gJy4uL3ByZXNldHMvcHJlc2V0Lm1peGluJztcblxuZXhwb3J0IHR5cGUgU2l6ZU9wdGlvbnMgPSAnbWQnIHwgJ3hzJyB8ICdzbScgfCAnbGcnIHwgJ3hsJyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2l6ZUludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBzY2FsZSBvZiB0aGlzIGNvbXBvbmVudFxuICAgKiBAYXR0ciBzaXplXG4gICAqL1xuICBzaXplOiBTaXplT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IFNpemVNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudCAmIFBhcnRpYWw8UHJlc2V0RWxlbWVudEludGVyZmFjZTxhbnk+Pj4+KFxuICBzdXBlckNsYXNzOiBUXG4pID0+IHtcbiAgY2xhc3MgU2l6ZUVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBzY2FsZSBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBhdHRyIHNpemVcbiAgICAgKi9cbiAgICBAcHJlc2V0UHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHNpemU6IFNpemVPcHRpb25zO1xuICB9XG4gIHJldHVybiBTaXplRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxTaXplSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBvblVwZGF0ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRGlzYWJsZWRJbnRlcmZhY2UgfSBmcm9tICcuL2Rpc2FibGVkLm1peGluJztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgaXNTc3IgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUYWJJbmRleEludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgdGFiaW5kZXggYXR0cmlidXRlIHZhbHVlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnRcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZ2V0VGFiSW5kZXhBZGFwdGVyKCk6IHN0cmluZztcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHNldCB0aGUgdGFiaW5kZXggYXR0cmlidXRlIG9uIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHNldFRhYkluZGV4QWRhcHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJlbW92ZSB0aGUgdGFiaW5kZXggYXR0cmlidXRlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnRcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCk6IHZvaWQ7XG59XG5cbi8qKlxuICogTWl4aW4gdG8gcHJvcGVybHkgbWFuYWdlIHRoZSB0YWJpbmRleCBpbiBhIG5vbi1pbnRydXNpdmUgd2F5LiBXaGVuIGRpc2FibGVkIGlzIHRydWUsXG4gKiB0aGUgdGFiaW5kZXggd2lsbCBBTFdBWVMgYmUgYC0xYC4gSG93ZXZlciwgYW55IGNoYW5nZXMgdG8gdGFiaW5kZXggd2lsbCBiZSBpbnRlcmNlcHRlZFxuICogYW5kIGNhY2hlZCBpbnRlcm5hbGx5IHVudGlsIGRpc2FibGVkIGlzIGZhbHNlLCB0aGVuIHRhYmluZGV4IHdpbGwgYmUgcmVzdG9yZWQgdG8gdGhlXG4gKiBjYWNoZWQgdmFsdWUsIG9yIHJlbW92ZWQgaWYgdGhhdCBpcyB1bmRlZmluZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBUYWJJbmRleE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50ICYgRGlzYWJsZWRJbnRlcmZhY2U+PihcbiAgc3VwZXJDbGFzczogVCxcbiAgb3B0aW9uczogeyBpbml0aWFsVGFiSW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCB9ID0geyBpbml0aWFsVGFiSW5kZXg6IHVuZGVmaW5lZCB9XG4pID0+IHtcbiAgY2xhc3MgVGFiSW5kZXhFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiAndGFiaW5kZXgnLCB0eXBlOiBOdW1iZXIsIG5vQWNjZXNzb3I6IHRydWUgfSlcbiAgICBwdWJsaWMgb3ZlcnJpZGUgc2V0IHRhYkluZGV4KHRhYkluZGV4OiBudW1iZXIpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIC8vIFdoZW4gc2V0dGluZyB0aGUgdGFiSW5kZXggb24gdGhlIGN1cnJlbnQgZWxlbWVudCB0byBgLTFgIGRpc2FibGVkLCB3ZSB3YW50IHRvIGtlZXAgdHJhY2sgb2Ygd2hhdCB0aGUgdGFiSW5kZXggdmFsdWUgYmVmb3JlIHRoYXQgd2FzXG4gICAgICAgIC8vIGFzIHRoZSBjYWNoZWRUYWJJbmRleC4gVG8gZG8gdGhpcyB3ZSBtdXN0IGlnbm9yZSB0aGUgaW5pdGlhbCBjaGFuZ2UgdG8gYC0xYCBhbmQgdGhlbiBjYWNoZSBhbnkgZnV0dXJlIHZhbHVlcyBiZWZvcmUga2VlcGluZyB0aGVcbiAgICAgICAgLy8gdGFiSW5kZXggYXMgYC0xYCB1bnRpbCBubyBsb25nZXIgZGlzYWJsZWQuIFRoZW4gd2UgY2FuIHJldHVybiB0aGUgdGFiSW5kZXggdG8gd2hhdGV2ZXIgdGhlIGxhc3Qgc2V0IHZhbHVlIHdhcyBmcm9tIHRoZSBjYWNoZWQgaW5kZXguXG4gICAgICAgIGlmICghdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKCctMScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90YWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl90YWJJbmRleH1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIG92ZXJyaWRlIGdldCB0YWJJbmRleCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90YWJJbmRleDtcbiAgICB9XG4gICAgcHJpdmF0ZSBfdGFiSW5kZXggPSBvcHRpb25zPy5pbml0aWFsVGFiSW5kZXg7XG4gICAgcHJpdmF0ZSBfY2FjaGVkVGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gZmFsc2U7XG5cbiAgICBAb25VcGRhdGUoWydkaXNhYmxlZCddLCB7IG9uOiAnYm90aCcgfSlcbiAgICBwcml2YXRlIGhhbmRsZVRhYmluZGV4Q2hhbmdlKGNoYW5nZWRQcm9wcykge1xuICAgICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgaWYgKGNoYW5nZWRQcm9wcy5nZXQoJ2Rpc2FibGVkJykgPT09IGZhbHNlICYmIHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jYWNoZWRUYWJJbmRleCA9IE51bWJlcih0aGlzLmdldFRhYkluZGV4QWRhcHRlcigpKTtcbiAgICAgICAgICB0aGlzLl90YWJJbmRleCA9IC0xO1xuICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKCctMScsIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYW5nZWRQcm9wcy5nZXQoJ2Rpc2FibGVkJykgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5fY2FjaGVkVGFiSW5kZXggIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9jYWNoZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fdGFiSW5kZXggPSB0aGlzLl9jYWNoZWRUYWJJbmRleDtcbiAgICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKGAke3RoaXMuX2NhY2hlZFRhYkluZGV4fWApO1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVUYWJJbmRleEFkYXB0ZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHRhYmluZGV4IGF0dHJpYnV0ZSB2YWx1ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50ICovXG4gICAgZ2V0VGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIH1cblxuICAgIC8qKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gc2V0IHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgb24gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgKi9cbiAgICBzZXRUYWJJbmRleEFkYXB0ZXIodmFsdWU6IHN0cmluZywgc2hvdWxkUHJldmVudFRhYkluZGV4Q2hhbmdlT25TZWxmID0gZmFsc2UpIHtcbiAgICAgIGlmIChzaG91bGRQcmV2ZW50VGFiSW5kZXhDaGFuZ2VPblNlbGYpIHtcbiAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJlbW92ZSB0aGUgdGFiaW5kZXggYXR0cmlidXRlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgKi9cbiAgICByZW1vdmVUYWJJbmRleEFkYXB0ZXIoKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICB3aWxsVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICBzdXBlci53aWxsVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKGlzU3NyKCkgJiYgdGhpcy5fdGFiSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl90YWJJbmRleH1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICAgIGlmICh0aGlzLl90YWJJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKGAke3RoaXMuX3RhYkluZGV4fWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gVGFiSW5kZXhFbGVtZW50IGFzIENvbnN0cnVjdG9yPFRhYkluZGV4SW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50IH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IHByZXNldFByb3BlcnR5IH0gZnJvbSAnLi4vcHJlc2V0cy9wcmVzZXQuZGVjb3JhdG9yJztcbmltcG9ydCB7IFByZXNldEVsZW1lbnRJbnRlcmZhY2UgfSBmcm9tICcuLi9wcmVzZXRzL3ByZXNldC5taXhpbic7XG5cbmV4cG9ydCB0eXBlIFJhZGl1c09wdGlvbnMgPSAnc20nIHwgJ21kJyB8ICdsZycgfCAnbm9uZScgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJhZGl1c0ludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBib3JkZXItcmFkaXVzIG9mIHRoaXMgY29tcG9uZW50XG4gICAqIEBhdHRyIHJhZGl1c1xuICAgKi9cbiAgcmFkaXVzOiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgUmFkaXVzTWl4aW4gPSA8XG4gIFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50ICYgUGFydGlhbDxQcmVzZXRFbGVtZW50SW50ZXJmYWNlPGFueT4+PlxuPihcbiAgc3VwZXJDbGFzczogVFxuKSA9PiB7XG4gIGNsYXNzIFJhZGl1c0VsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBib3JkZXItcmFkaXVzIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQGF0dHIgcmFkaXVzXG4gICAgICovXG4gICAgQHByZXNldFByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSByYWRpdXM6IFJhZGl1c09wdGlvbnM7XG4gIH1cbiAgcmV0dXJuIFJhZGl1c0VsZW1lbnQgYXMgQ29uc3RydWN0b3I8UmFkaXVzSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQsIFN0eWxlTWFwIH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgc2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE10ZUVsZW1lbnRQYXJ0cyB7XG4gIC8qKiBUaGUgaG9zdCBlbGVtZW50IFwicGFydFwiLiBPdmVycmlkZXMgdGhlIGBzZWAgcHJvcGVydHkgb2YgdGhpcyBlbGVtZW50ICovXG4gIGhvc3Q/OiBTdHlsZU1hcDtcbn1cblxuZXhwb3J0IHR5cGUgU3R5bGVQYXJ0c01hcDxUID0gc3RyaW5nIHwgbnVtYmVyPiA9IHtcbiAgW25hbWU6IHN0cmluZ106IFN0eWxlTWFwPFQ+O1xufTtcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3R5bGVQYXJ0c0ludGVyZmFjZTxTdHlsZVBhcnRzPiB7XG4gIC8qKlxuICAgKiBTdHlsZSBtYXBwaW5ncyB0aGF0IGFyZSBhcHBsaWVkIHRvIGVhY2ggY3NzIHBhcnQgYnkgbmFtZS4gU2V0IHRoZVxuICAgKiBwcm9wZXJ0eSBgaG9zdGAgdG8gYXBwbHkgYSBgU3R5bGVJbmZvYCBvYmplY3QgdG8gdGhlIGVsZW1lbnQgaG9zdCBpdHNlbGYuXG4gICAqL1xuICBzcD86IFN0eWxlUGFydHM7XG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZVBhcnRzTWl4aW4gPSA8U3R5bGVQYXJ0cywgVCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIFN0eWxlUGFydHNFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogU3R5bGUgbWFwcGluZ3MgdGhhdCBhcmUgYXBwbGllZCB0byBlYWNoIGNzcyBwYXJ0IGJ5IG5hbWUuIFNldCB0aGVcbiAgICAgKiBwcm9wZXJ0eSBgaG9zdGAgdG8gYXBwbHkgYSBgU3R5bGVJbmZvYCBvYmplY3QgdG8gdGhlIGVsZW1lbnQgaG9zdCBpdHNlbGYuXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCByZWZsZWN0OiB0cnVlIH0pIHNwOiBTdHlsZVBhcnRzO1xuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgICAgc3VwZXIudXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKTtcblxuICAgICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ3NwJykpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5zcCA/PyAoe30gYXMgU3R5bGVQYXJ0cykpLmZvckVhY2goKFtwYXJ0LCBzdHlsZU1hcF0pID0+IHtcbiAgICAgICAgICAvLyBEb3VibGUgdGhlIGA6aG9zdGAgc2VsZWN0b3IgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgYmV5b25kIG1vc3QgY29tcG9uZW50IGxldmVsIHN0eWxlcyBieSBkZWZhdWx0XG4gICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvckZhY3RvcnkoXG4gICAgICAgICAgICBwYXJ0ID09PSAnaG9zdCdcbiAgICAgICAgICAgICAgPyAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0J1xuICAgICAgICAgICAgICA6IGA6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6OnBhcnQoJHtwYXJ0fSlgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoYHNwLSR7cGFydH1gLCBzZWxlY3Rvciwgc3R5bGVNYXApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gU3R5bGVQYXJ0c0VsZW1lbnQgYXMgQ29uc3RydWN0b3I8U3R5bGVQYXJ0c0ludGVyZmFjZTxTdHlsZVBhcnRzPj4gJiBUO1xufTtcbiIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7cG9zaXRpb246cmVsYXRpdmV9I2FuY2hvcntpbnNldDowO3Bvc2l0aW9uOmFic29sdXRlfWA7IiwgImltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIENsaWNrT3V0c2lkZUNvbnRyb2xsZXIsXG4gIENvbnN0cnVjdG9yLFxuICBFdmVudEVtaXR0ZXIsXG4gIEZvY3VzVHJhcENvbnRyb2xsZXIsXG4gIE10ZUVsZW1lbnQsXG4gIFBvcnRhbEFkYXB0ZXIsXG4gIFBvcnRhbENvbnRyb2xsZXIsXG4gIGRlZmF1bHRQb3J0YWxBZGFwdGVyLFxuICBldmVudEVtaXR0ZXIsXG4gIGlzU3NyLFxufSBmcm9tICcuLic7XG5pbXBvcnQgeyBQcm9wZXJ0eVZhbHVlTWFwIH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3ZlcmxheUludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBvdmVybGF5IHN0YXRlIG9uIHRoZSBvdmVybGF5IG1peGluLiBCeSBkZWZhdWx0IGFsbCBvcHRpb25zIGFyZSBzZXQgdG8gdHJ1ZSBpbml0aWFsbHkuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBzZXRPdmVybGF5T3B0aW9ucyhvcHRpb25zOiB7XG4gICAgd2l0aENsb3NlT25DbGlja091dHNpZGU/OiBib29sZWFuO1xuICAgIHdpdGhDbG9zZU9uRXNjYXBlPzogYm9vbGVhbjtcbiAgICB3aXRoRm9jdXNUcmFwPzogYm9vbGVhbjtcbiAgICB3aXRoUG9ydGFsPzogYm9vbGVhbjtcbiAgICB3aXRoRGltQmFja2Ryb3A/OiBib29sZWFuO1xuICAgIHdpdGhJbmVydEJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICB3aXRoU2Nyb2xsTG9jaz86IGJvb2xlYW47XG4gICAgYW5pbWF0aW9uRHVyYXRpb24/OiBudW1iZXI7XG4gICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG4gICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlPzogYm9vbGVhbjtcbiAgICBmb2N1c1RyYXBUYXJnZXQ/OiBFbGVtZW50O1xuICB9KTogdW5rbm93bjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIG92ZXJsYXkgc2hvdWxkIG9wZW4uIENhbiBhZGQgYSBsaXN0ZW5lciBmb3Igb3V0c2lkZSBjbGlja3MsIHBvcnRhbCBhbiBlbGVtZW50LFxuICAgKiBhbmQgcHJldmVudCB0aGUgYm9keSBmcm9tIHNjcm9sbGluZyB1cG9uIG9wZW4uXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBoYW5kbGVPdmVybGF5T3BlbihvcHRpb25zPzoge1xuICAgIGNsaWNrT3V0c2lkZUVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcbiAgICB3aWxsT3Blbj86ICgpID0+IHZvaWQ7XG4gIH0pOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgYWZ0ZXIgdGhlIG92ZXJsYXkgaGFzIGJlZW4gb3B0aW9uYWxseSBwb3J0YWxlZCBhbmQvb3IgYWxsIGFuaW1hdGlvbnMgaGF2ZSBmaW5pc2hlZC5cbiAgICovXG4gIGhhbmRsZU92ZXJsYXlPcGVuRW5kKCk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBvdmVybGF5IGVsZW1lbnQgc2hvdWxkIGNsb3NlLiBDYW4gc3RvcCBsaXN0ZW5pbmcgZm9yIG91dHNpZGUgY2xpY2tzLCByZWxlYXNlIGEsXG4gICAqIGZvY3VzIHRyYXAsIGFuZCBhbGxvdyB0aGUgYm9keSBlbGVtZW50IHRvIHNjcm9sbCBhZ2Fpbi5cbiAgICovXG4gIGhhbmRsZU92ZXJsYXlDbG9zZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgb3ZlcmxheSBlbGVtZW50IGhhcyBmaW5pc2hlZCBjbG9zaW5nIGFuZC9vciBhbGwgYW5pbWF0aW9ucyBoYXZlIGNvbXBsZXRlZC4gQ2FuXG4gICAqIHJlbW92ZSBhbiBlbGVtZW50IGZyb20gdGhlIHBvcnRhbC5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIGhhbmRsZU92ZXJsYXlDbG9zZUVuZChvcHRpb25zPzogeyByZW1vdmVGcm9tRWxlbWVudD86IEhUTUxFbGVtZW50IH0pOiBQcm9taXNlPHZvaWQ+O1xuXG4gIG9wZW4oKTogUHJvbWlzZTx2b2lkPjtcblxuICBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBUaGUgdGFiIGluZGV4IGZvciB0aGlzIGVsZW1lbnRcbiAgICovXG4gIHRhYmluZGV4OiBudW1iZXI7XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaXMgaW5pdGlhbGx5IG9wZW5lZCAqL1xuICBfb25PcGVuOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEVtaXR0ZWQgYWZ0ZXIgdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBvcGVuaW5nICovXG4gIF9vbk9wZW5FbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgY2xvc2luZyAqL1xuICBfb25DbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBjbG9zaW5nICovXG4gIF9vbkNsb3NlRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgcG9ydGFsQWRhcHRlcjogUG9ydGFsQWRhcHRlcjtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBUaGUgb3BlbmVkIHN0YXRlIG9mIHRoZSBvdmVybGF5IHJlZ2FyZGxlc3Mgb2YgYW5pbWF0aW9uc1xuICAgKi9cbiAgb3BlbmVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEluZGljYXRlcyB0aGUgb3ZlcmxheSBoYXMgYmVlbiBwb3J0YWxlZCBhbmQgcmVhZHkgdG8gYW5pbWF0ZVxuICAgKi9cbiAgcmVhZHlGb3JBbmltYXRpb246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogSW5kaWNhdGVzIHRoZSBvdmVybGF5IGhhcyBiZWVuIGZ1bGx5IGFuaW1hdGVkIG9wZW5cbiAgICovXG4gIG9wZW5lZEZ1bGw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBPdmVybGF5TWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIE92ZXJsYXlFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqIFRoZSB0YWIgaW5kZXggb2YgdGhpcyBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiAndGFiaW5kZXgnLCB0eXBlOiBOdW1iZXIgfSkgdGFiaW5kZXggPSAtMTtcblxuICAgIC8qKlxuICAgICAqIEFkYXB0ZXIgZm9yIHBvcnRhbCBET00gb3BlcmF0aW9uIHRoYXQgY2FuIGJlIHN1cHBsZW1lbnRlZCBmb3IgZXh0ZXJuYWwtZnJhbWV3b3JrIGludGVncmF0aW9ucy5cbiAgICAgKiBOb3RhYmx5LWxldmVyYWdlZCBieSBvdmVybGF5cyBpbiBvdXIgZ2VuZXJhdGVkIHJlYWN0IHdyYXBwZXJzLlxuICAgICAqXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSgpIHBvcnRhbEFkYXB0ZXI6IFBvcnRhbEFkYXB0ZXIgPSBkZWZhdWx0UG9ydGFsQWRhcHRlcjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBvcGVuZWQgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uT3BlbjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIEVtaXR0ZWQgYWZ0ZXIgdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBvcGVuaW5nICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbk9wZW5FbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBjbG9zZWQgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBjbG9zaW5nICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkNsb3NlRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBlbGVtZW50IHNob3VsZCB1c2UgYSBmb2N1cyB0cmFwIG9yIG5vdCAqL1xuICAgIHByaXZhdGUgX3dpdGhGb2N1c1RyYXAgPSB0cnVlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgZWxlbWVudCBzaG91bGQgY2xvc2Ugd2hlbiBhIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgdGhlIGVsZW1lbnQgKi9cbiAgICBwcml2YXRlIF9jbG9zZU9uQ2xpY2tPdXRzaWRlID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBjbG9zZSB3aGVuIHRoZSBlc2NhcGUgYnV0dG9uIGlzIHByZXNzZWQgKi9cbiAgICBwcml2YXRlIF9jbG9zZU9uRXNjYXBlID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IHNob3VsZCB1c2UgYSBwb3J0YWwgb3Igbm90ICovXG4gICAgcHJpdmF0ZSBfd2l0aFBvcnRhbCA9IHRydWU7XG5cbiAgICAvKiogV2V0aGVyIHRoZSB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGNsaWNrIGJlaGluZCB0aGUgYmFja2Ryb3Agb3Igbm90ICovXG4gICAgcHJpdmF0ZSBfd2l0aEluZXJ0QmFja2Ryb3AgPSBmYWxzZTtcblxuICAgIC8qKiBXZXRoZXIgdGhlIG92ZXJsYXkncyBiYWNrZHJvcCBzaG91bGQgcmVuZGVyIGRpbW1lZCAqL1xuICAgIHByaXZhdGUgX3dpdGhEaW1CYWNrZHJvcCA9IGZhbHNlO1xuXG4gICAgLyoqIFdldGhlciBvciBub3QgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlLWFwcGVuZGVkIHRvIGl0J3Mgb3JpZ2luIHBhcmVudCBlbGVtZW50IG9uIGNsb3NlIF9pZl8gcG9ydGFsZWQuICovXG4gICAgcHJpdmF0ZSBfcmV0dXJuVG9PcmlnaW5PbkNsb3NlID0gZmFsc2U7XG5cbiAgICAvKiogT3B0aW9uYWwgYmFja2Ryb3AgdGltaW5nLiBJbXBvcnRhbnQgcGFydGljdWxhcmx5IGZvciBzbW9vdGggY2xvc2VzIHdpdGggYSB2aXNpYmxlIGJhY2tkcm9wICovXG4gICAgcHJpdmF0ZSBfYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBzaG91bGQgcHJldmVudCBzY3JvbGxpbmcgb24gdGhlIGJvZHkgKi9cbiAgICBwcml2YXRlIF93aXRoU2Nyb2xsTG9jayA9IHRydWU7XG5cbiAgICBwcm90ZWN0ZWQgZm9jdXNUcmFwQ29udHJvbGxlciA9IG5ldyBGb2N1c1RyYXBDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgcHJvdGVjdGVkIGNsaWNrT3V0c2lkZUNvbnRyb2xsZXIgPSBuZXcgQ2xpY2tPdXRzaWRlQ29udHJvbGxlcih0aGlzLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3dpdGhQb3J0YWwpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZU9uQ2xpY2tPdXRzaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwcm90ZWN0ZWQgcG9ydGFsQ29udHJvbGxlciA9IG5ldyBQb3J0YWxDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgcGFyZW50IGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdGlhbFBhcmVudDogRWxlbWVudCB8IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0byBkZXRlY3QgY2xpY2tzIG91dHNpZGUgb2YgdG8gY2xvc2UgdGhlIG92ZXJsYXkgZWxlbWVudC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG5cbiAgICBwcml2YXRlIF9vcmlnaW5QYXJlbnQ/OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIF9mb2N1c1RyYXBUYXJnZXQ/OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQgPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqIFRoZSBvcGVuZWQgc3RhdGUgb2YgdGhlIG92ZXJsYXkgcmVnYXJkbGVzcyBvZiBhbmltYXRpb25zXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBvcGVuZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBJbmRpY2F0ZXMgdGhlIG92ZXJsYXkgaGFzIGJlZW4gcG9ydGFsZWQgYW5kIHJlYWR5IHRvIGFuaW1hdGVcbiAgICAgKi9cbiAgICBAc3RhdGUoKVxuICAgIHNldCByZWFkeUZvckFuaW1hdGlvbihyZWFkeUZvckFuaW1hdGlvbjogYm9vbGVhbikge1xuICAgICAgdGhpcy5fcmVhZHlGb3JBbmltYXRpb24gPSByZWFkeUZvckFuaW1hdGlvbjtcbiAgICB9XG4gICAgZ2V0IHJlYWR5Rm9yQW5pbWF0aW9uKCkge1xuICAgICAgLy8gRHVyaW5nIFNTUiByZXR1cm4gdHJ1ZSBpbiBjYXNlIHNvbWV0aGluZyBuZWVkcyB0byBiZSBvcGVuZWQgaW5pdGlhbGx5LlxuICAgICAgcmV0dXJuIGlzU3NyKCkgPyB0cnVlIDogdGhpcy5fcmVhZHlGb3JBbmltYXRpb247XG4gICAgfVxuICAgIHByaXZhdGUgX3JlYWR5Rm9yQW5pbWF0aW9uID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogVGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgb3ZlcmxheSByZWdhcmRsZXNzIG9mIGFuaW1hdGlvbnMuIFRoaXMgaXMgcmVmbGVjdGVkIGFuZCB1c2VkIGJ5XG4gICAgICogc29tZSBvdmVybGF5cyB0byByZXN0cmljdCB0aGVpciBzaXplIHdoaWxlIGhpZGRlbi4gKHNpbmNlIGRpc3BsYXk6IG5vbmUgYnJlYWtzIGFuaW1hdGlvbnMpXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBvcGVuZWRGdWxsID0gZmFsc2U7XG5cbiAgICBzZXRPdmVybGF5T3B0aW9ucyhvcHRpb25zOiB7XG4gICAgICB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZT86IGJvb2xlYW47XG4gICAgICB3aXRoQ2xvc2VPbkVzY2FwZT86IGJvb2xlYW47XG4gICAgICB3aXRoRm9jdXNUcmFwPzogYm9vbGVhbjtcbiAgICAgIHdpdGhQb3J0YWw/OiBib29sZWFuO1xuICAgICAgd2l0aEluZXJ0QmFja2Ryb3A/OiBib29sZWFuO1xuICAgICAgd2l0aERpbUJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICAgIHdpdGhTY3JvbGxMb2NrPzogYm9vbGVhbjtcbiAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuICAgICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlPzogYm9vbGVhbjtcbiAgICAgIGZvY3VzVHJhcFRhcmdldD86IEVsZW1lbnQ7XG4gICAgfSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB3aXRoRm9jdXNUcmFwLFxuICAgICAgICB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZSxcbiAgICAgICAgd2l0aENsb3NlT25Fc2NhcGUsXG4gICAgICAgIHdpdGhQb3J0YWwsXG4gICAgICAgIHdpdGhTY3JvbGxMb2NrLFxuICAgICAgICB3aXRoSW5lcnRCYWNrZHJvcCxcbiAgICAgICAgd2l0aERpbUJhY2tkcm9wLFxuICAgICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlLFxuICAgICAgICBmb2N1c1RyYXBUYXJnZXQsXG4gICAgICB9ID0gb3B0aW9ucyA/PyB7fTtcblxuICAgICAgdGhpcy5fd2l0aEZvY3VzVHJhcCA9IHdpdGhGb2N1c1RyYXAgPz8gdGhpcy5fd2l0aEZvY3VzVHJhcDtcbiAgICAgIHRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUgPSB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZSA/PyB0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlO1xuICAgICAgdGhpcy5fd2l0aFNjcm9sbExvY2sgPSB3aXRoU2Nyb2xsTG9jayA/PyB0aGlzLl93aXRoU2Nyb2xsTG9jaztcbiAgICAgIHRoaXMuX3dpdGhQb3J0YWwgPSB3aXRoUG9ydGFsID8/IHRoaXMuX3dpdGhQb3J0YWw7XG4gICAgICB0aGlzLl93aXRoSW5lcnRCYWNrZHJvcCA9XG4gICAgICAgIHdpdGhJbmVydEJhY2tkcm9wID8/ICF0aGlzLl93aXRoRm9jdXNUcmFwID8/IHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wO1xuICAgICAgdGhpcy5fd2l0aERpbUJhY2tkcm9wID0gd2l0aERpbUJhY2tkcm9wID8/IHRoaXMuX3dpdGhEaW1CYWNrZHJvcDtcbiAgICAgIHRoaXMuX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID1cbiAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPz8gdGhpcy5fYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb247XG4gICAgICB0aGlzLl9yZXR1cm5Ub09yaWdpbk9uQ2xvc2UgPSByZXR1cm5Ub09yaWdpbk9uQ2xvc2UgPz8gdGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlO1xuICAgICAgdGhpcy5fZm9jdXNUcmFwVGFyZ2V0ID0gZm9jdXNUcmFwVGFyZ2V0ID8/IHRoaXMuX2ZvY3VzVHJhcFRhcmdldDtcblxuICAgICAgaWYgKHdpdGhDbG9zZU9uRXNjYXBlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fY2xvc2VPbkVzY2FwZSAhPT0gd2l0aENsb3NlT25Fc2NhcGUpIHtcbiAgICAgICAgaWYgKHdpdGhDbG9zZU9uRXNjYXBlID09PSB0cnVlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbG9zZU9uRXNjYXBlID0gd2l0aENsb3NlT25Fc2NhcGUgPz8gdGhpcy5fY2xvc2VPbkVzY2FwZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpdGhGb2N1c1RyYXAgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAod2l0aEZvY3VzVHJhcCA9PT0gdHJ1ZSAmJiB0aGlzLnRhYmluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gLTE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlT3ZlcmxheSgpO1xuICAgIH1cblxuICAgIGhhbmRsZU92ZXJsYXlPcGVuKG9wdGlvbnM/OiB7XG4gICAgICBjbGlja091dHNpZGVFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG4gICAgICB3aWxsT3Blbj86ICgpID0+IHZvaWQ7XG4gICAgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gSWdub3JlIGlmIGFscmVhZHkgb3BlblxuICAgICAgaWYgKHRoaXMub3BlbmVkIHx8IHRoaXMub3BlbmVkRnVsbCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgICBjb25zdCB7IGNsaWNrT3V0c2lkZUVsZW1lbnQsIHdpbGxPcGVuIH0gPSBvcHRpb25zID8/IHt9O1xuICAgICAgd2lsbE9wZW4/LigpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQgPSBjbGlja091dHNpZGVFbGVtZW50IHx8IHRoaXM7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5saXN0ZW5Gb3JDbGlja3NPdXRzaWRlT2YodGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCk7XG4gICAgICAgIGlmICh0aGlzLl93aXRoUG9ydGFsKSB7XG4gICAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyXG4gICAgICAgICAgICAuYXBwZW5kVG9TdGFjayh0aGlzLCB7XG4gICAgICAgICAgICAgIHdpdGhEaW1CYWNrZHJvcDogdGhpcy5fd2l0aERpbUJhY2tkcm9wLFxuICAgICAgICAgICAgICB3aXRoSW5lcnRCYWNrZHJvcDogdGhpcy5fd2l0aEluZXJ0QmFja2Ryb3AsXG4gICAgICAgICAgICAgIHdpdGhTY3JvbGxMb2NrOiB0aGlzLl93aXRoU2Nyb2xsTG9jayxcbiAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXI6IHRoaXMuaGFuZGxlQ2xvc2VPbkNsaWNrT3V0c2lkZSxcbiAgICAgICAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb246IHRoaXMuX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICAgICAgICBwb3J0YWxBZGFwdGVyOiB0aGlzLnBvcnRhbEFkYXB0ZXIsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAvLyBXYWl0IGZvciBhcHBlbmQgdG8gY29tcGxldGUgYmVmb3JlIGFuaW1hdGluZ1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5Rm9yQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBBZnRlciBhbmltYXRpb24gYmVnaW5zIHJlc29sdmVcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fb25PcGVuLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5fb3JpZ2luUGFyZW50ICYmXG4gICAgICAgICAgICB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSAmJlxuICAgICAgICAgICAgdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkgIT09IHRoaXMuX29yaWdpblBhcmVudFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIHRoaXMuX29yaWdpblBhcmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFdhaXQgZm9yIGFwcGVuZCB0byBjb21wbGV0ZSBiZWZvcmUgYW5pbWF0aW5nXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Rm9yQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIEFmdGVyIGFuaW1hdGlvbiBiZWdpbnMgcmVzb2x2ZVxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fb25PcGVuLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMjApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVPdmVybGF5T3BlbkVuZCgpIHtcbiAgICAgIC8vIENhbmNlbCBpZiBjbG9zZWQgYmVmb3JlIG9wZW4gZW5kZWRcbiAgICAgIGlmICghdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWRGdWxsID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLl93aXRoRm9jdXNUcmFwKSB7XG4gICAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci50cmFwRm9jdXModGhpcy5fZm9jdXNUcmFwVGFyZ2V0LCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29uT3BlbkVuZC5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlT3ZlcmxheUNsb3NlKCkge1xuICAgICAgLy8gSWdub3JlIGlmIGFscmVhZHkgY2xvc2VkXG4gICAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9vbkNsb3NlLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5yZWxlYXNlRm9jdXModHJ1ZSk7XG4gICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIuaGlkZUJhY2tkcm9wKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlT3ZlcmxheUNsb3NlRW5kKG9wdGlvbnM/OiB7IHJlbW92ZUZyb21FbGVtZW50PzogSFRNTEVsZW1lbnQgfSkge1xuICAgICAgLy8gQ2FuY2VsIGlmIG9wZW5lZCBiZWZvcmUgY2xvc2UgZW5kZWRcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZEZ1bGwgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVhZHlGb3JBbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5yZW1vdmVGcm9tU3RhY2sob3B0aW9ucz8ucmVtb3ZlRnJvbUVsZW1lbnQgfHwgdGhpcyk7XG4gICAgICBpZiAodGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlKSB7XG4gICAgICAgIGlmICh0aGlzLl9vcmlnaW5QYXJlbnQgJiYgdGhpcy5fb3JpZ2luUGFyZW50ICE9PSB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSkge1xuICAgICAgICAgIHRoaXMucG9ydGFsQWRhcHRlcih0aGlzLCB0aGlzLl9vcmlnaW5QYXJlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9vbkNsb3NlRW5kLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZU92ZXJsYXlLZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnRFbGVtZW50Py5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheS13cmFwcGVyJylcbiAgICAgICAgPyB0aGlzLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnRcbiAgICAgICAgOiB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGFyZW50IGVsZW1lbnQgdGhpcyBvdmVybGF5IHdpbGwgYmUgcmVhdHRhY2hlZCB0byBlaXRoZXI6XG4gICAgICogLSBXaGVuIGNvbmZpZ3VyZWQgdG8gZG8gc28gb24gY2xvc2VcbiAgICAgKiAtIFdoZW4gXCJwb3J0YWxpbmdcIiBpcyBkaXNhYmxlZFxuICAgICAqL1xuICAgIHNldE9yaWdpblBhcmVudChuZXdPcmlnaW46IEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG4gICAgICBpZiAoY3VycmVudFBhcmVudEVsZW1lbnQgPT09IHRoaXMuX29yaWdpblBhcmVudCkge1xuICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgbmV3T3JpZ2luKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29yaWdpblBhcmVudCA9IG5ld09yaWdpbjtcbiAgICB9XG5cbiAgICAvKiogVXBkYXRlcyB2YXJpb3VzIGJlaGF2aW9ycyB0byBhcHBseSB0aGUgbGF0ZXN0IG92ZXJsYXkgb3B0aW9ucyAqL1xuICAgIHVwZGF0ZU92ZXJsYXkoKSB7XG4gICAgICAvLyBVcGRhdGUgYmFja2Ryb3AgaW5lcnRuZXNzXG4gICAgICBpZiAodGhpcy5fd2l0aEluZXJ0QmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNldEJhY2tkcm9wSW5lcnRuZXNzKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNldEJhY2tkcm9wSW5lcnRuZXNzKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSBjbGljayBvdXRzaWRlIGNvbnRyb2xsZXJcbiAgICAgIGlmICh0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlICYmICF0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuaXNMaXN0ZW5pbmcoKSkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIubGlzdGVuRm9yQ2xpY2tzT3V0c2lkZU9mKHRoaXMpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZSAmJiB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuaXNMaXN0ZW5pbmcoKSkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuc3RvcExpc3RlbmluZygpO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIGZvY3VzIHRyYXAgY29udHJvbGxlclxuICAgICAgaWYgKHRoaXMuX3dpdGhGb2N1c1RyYXAgJiYgdGhpcy5vcGVuZWQgJiYgIXRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5pc1RyYXBwaW5nRm9jdXMoKSkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIudHJhcEZvY3VzKHRoaXMuX2ZvY3VzVHJhcFRhcmdldCwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl93aXRoRm9jdXNUcmFwICYmIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5pc1RyYXBwaW5nRm9jdXMoKSkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIucmVsZWFzZUZvY3VzKHRydWUpO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIGJhY2tkcm9wIGNvbnRyb2xsZXJcbiAgICAgIGlmICh0aGlzLl93aXRoRGltQmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNob3dCYWNrZHJvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLmhpZGVCYWNrZHJvcCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZSkge1xuICAgICAgICBpZiAodGhpcy5fb3JpZ2luUGFyZW50ICYmIHRoaXMuX29yaWdpblBhcmVudCAhPT0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgdGhpcy5fb3JpZ2luUGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIG9wZW4oKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09wZW4gbWV0aG9kIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbG9zZSBtZXRob2Qgbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55KSB7XG4gICAgICBzdXBlcihhcmdzKTtcbiAgICAgIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24gPSB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChcbiAgICAgIGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlTWFwPGFueT4gfCBNYXA8UHJvcGVydHlLZXksIHVua25vd24+XG4gICAgKTogdm9pZCB7XG4gICAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgdGhpcy5fb3JpZ2luUGFyZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVDbG9zZU9uQ2xpY2tPdXRzaWRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgIGlmICh0aGlzLl9jbG9zZU9uRXNjYXBlKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBldmVudCBsaXN0ZW5lciBpbiB0aGUgZXZlbnQgdGhlIG92ZXJsYXkgZWxlbWVudCB3YXMgcG9ydGFsZWQuXG4gICAgICBpZiAodGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIubGlzdGVuRm9yQ2xpY2tzT3V0c2lkZU9mKHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5yZWxlYXNlRm9jdXModHJ1ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE92ZXJsYXlFbGVtZW50IGFzIENvbnN0cnVjdG9yPE92ZXJsYXlJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2Rpc3BsYXk6YmxvY2s7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMDB9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tZnVsbC13aWR0aDptYXgtY29udGVudDstLWNvbnRyb2wtd2lkdGg6dW5zZXQ7LS1jb250cm9sLW1pbi13aWR0aDoyNDBweDstLWNvbnRyb2wtbWF4LXdpZHRoOnZhcigtLWNvbnRyb2wtd2lkdGgpOy0tY29udHJvbC1tYXJnaW4teTp2YXIoLS1tdGUtc3BhY2Utc20pOy0tY29udHJvbC1tYXJnaW4teDp2YXIoLS1tdGUtc3BhY2Utc20pOy0tY29udHJvbC1kZXNjcmlwdG9yLW1hcmdpbjp2YXIoLS1tdGUtc3BhY2Utc20pOy0tbGFiZWwtd2lkdGg6dmFyKC0tY29udHJvbC13aWR0aCk7LS1sYWJlbC1taW4td2lkdGg6dmFyKC0tY29udHJvbC1taW4td2lkdGgpOy0tbGFiZWwtbWF4LXdpZHRoOnZhcigtLWNvbnRyb2wtbWF4LXdpZHRoKTstLWxhYmVsLW1hcmdpbi15OnZhcigtLW10ZS1zcGFjZS14cyk7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6dmFyKC0tZnVsbC13aWR0aCl9LmdyaWQtY29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWdyaWQ7Z3JpZC10ZW1wbGF0ZS1hcmVhczpcImxhYmVsXCIgXCJjb250cm9sXCI7Z3JpZC10ZW1wbGF0ZS1yb3dzOjFmciBtaW5tYXgoMCwxMDAlKTt3aWR0aDppbmhlcml0fTpob3N0KFt3aXRoRnVsbFdpZHRoXSl7LS1mdWxsLXdpZHRoOjEwMCU7LS1jb250cm9sLXdpZHRoOjEwMCV9Omhvc3QoW3dpdGhvdXRNYXJnaW5dKXstLWNvbnRyb2wtbWFyZ2luLXk6MHB4fTpob3N0KFt3aXRob3V0TWFyZ2luXSkgLmxhYmVsLWNvbnRhaW5lci5oYXMtY29udGVudHttYXJnaW4tYm90dG9tOnZhcigtLWNvbnRyb2wtZGVzY3JpcHRvci1tYXJnaW4pfS5sYWJlbC1jb250YWluZXJ7ZGlzcGxheTpub25lO2dyaWQtYXJlYTpsYWJlbDttYXgtd2lkdGg6dmFyKC0tbGFiZWwtbWF4LXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbGFiZWwtbWluLXdpZHRoKTt3aWR0aDp2YXIoLS1sYWJlbC13aWR0aCl9LmxhYmVsLWNvbnRhaW5lci5oYXMtY29udGVudHtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6dmFyKC0tbGFiZWwtbWFyZ2luLXkpfS5sYWJlbC1jb250YWluZXI6bm90KC5oYXMtY29udGVudCl7bWFyZ2luOjAhaW1wb3J0YW50fS5jb250ZXh0e2dyaWQtYXJlYTpjb250ZXh0fS5kZXNjcmlwdGlvbiwuZXJyb3IsLmhpbnQsLmxhYmVse2Rpc3BsYXk6YmxvY2t9LmRlc2NyaXB0aW9uIG10ZS1kZXNjcmlwdGlvbiwuZGVzY3JpcHRpb24gbXRlLWRlc2NyaXB0aW9uLXRleHQsLmxhYmVsIG10ZS1sYWJlbCwubGFiZWwgbXRlLWxhYmVsLXRleHQsOmhvc3QgOjpzbG90dGVkKG10ZS1kZXNjcmlwdGlvbi10ZXh0W3Nsb3Q9ZGVzY3JpcHRpb25dKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWRlc2NyaXB0aW9uW3Nsb3Q9ZGVzY3JpcHRpb25dKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWxhYmVsLXRleHRbc2xvdD1sYWJlbF0pLDpob3N0IDo6c2xvdHRlZChtdGUtbGFiZWxbc2xvdD1sYWJlbF0pe21hcmdpbjowfTpob3N0KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pey0tbGFiZWwtd2lkdGg6bWF4LWNvbnRlbnQ7LS1sYWJlbC1taW4td2lkdGg6bWF4LWNvbnRlbnR9Omhvc3QoW2xhYmVsUG9zaXRpb249YmVmb3JlXSkgLmdyaWQtY29udGFpbmVye2dyaWQtdGVtcGxhdGUtYXJlYXM6XCJsYWJlbCBjb250cm9sXCI7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1pbm1heChhdXRvLHZhcigtLWxhYmVsLXdpZHRoKSkgbWlubWF4KGF1dG8sdmFyKC0tY29udHJvbC13aWR0aCkpfTpob3N0KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pIC5sYWJlbC1jb250YWluZXJ7bWFyZ2luLWJvdHRvbTp2YXIoLS1jb250cm9sLW1hcmdpbi15KTttYXJnaW4tcmlnaHQ6dmFyKC0tY29udHJvbC1tYXJnaW4teCk7bWFyZ2luLXRvcDpjYWxjKHZhcigtLWNvbnRyb2wtbWFyZ2luLXkpICsgdmFyKC0tbGFiZWwtYmVmb3JlLW9mZnNldCkpfS5kZXNjcmlwdGlvbiwuZXJyb3IsLmhpbnR7bWluLXdpZHRoOjEwMCU7d2lkdGg6LW1vei1taW4tY29udGVudDt3aWR0aDptaW4tY29udGVudH0uY29udHJvbC1vdXRlci1jb250YWluZXJ7Z3JpZC1hcmVhOmNvbnRyb2w7bWFyZ2luLXRvcDp2YXIoLS1jb250cm9sLW1hcmdpbi15KTttYXgtd2lkdGg6dmFyKC0tY29udHJvbC1tYXgtd2lkdGgpO21pbi13aWR0aDp2YXIoLS1jb250cm9sLW1pbi13aWR0aCk7d2lkdGg6dmFyKC0tY29udHJvbC13aWR0aCl9Omhvc3QoOm5vdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKSkgLmNvbnRyb2wtb3V0ZXItY29udGFpbmVyLmhhcy1sYWJlbC1jb250ZW50e21hcmdpbi10b3A6Y2FsYyh2YXIoLS1jb250cm9sLW1hcmdpbi15KS8yKX0uY29udHJvbC1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXJnaW4tYm90dG9tOnZhcigtLWNvbnRyb2wtbWFyZ2luLXkpfS5lcnJvciwuaGludHtkaXNwbGF5Om5vbmV9LmVycm9yLmhhcy1jb250ZW50LC5oaW50Lmhhcy1jb250ZW50e2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDp2YXIoLS1jb250cm9sLWRlc2NyaXB0b3ItbWFyZ2luKX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1mb3JtLWZpZWxkLWludGVybmFsLXBhZGRpbmc6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwOnZhcigtLW10ZS1zcGFjZS1zbSk7LS1mb3JtLWZpZWxkLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCk7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1zdXJmYWNlLTIpOy0tcHJlcGVuZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1ncmV5LTEpOy0tcHJlcGVuZC1wYWRkaW5nLXg6dmFyKC0tbXRlLXNwYWNlLXNtKTstLXByZXBlbmQtYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMil9Omhvc3QoW3JhZGl1cz1zbV0pey0tZm9ybS1maWVsZC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteHMpfTpob3N0KFtyYWRpdXM9bGddKXstLWZvcm0tZmllbGQtcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXh4bCl9Omhvc3QoW3NpemU9c21dKXstLXByZXBlbmQtcGFkZGluZy14OmNhbGModmFyKC0tbXRlLXNwYWNlLXhzKSArIHZhcigtLW10ZS1zcGFjZS14eHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtcGFkZGluZzpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1mb3JtLWZpZWxkLWludGVybmFsLWdhcDpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSl9Omhvc3QoW3NpemU9bGddKXstLXByZXBlbmQtcGFkZGluZy14OmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1wYWRkaW5nOmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXA6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXhzKSl9LmZvcm0tZmllbGR7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6dmFyKC0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2dhcDp2YXIoLS1mb3JtLWZpZWxkLWludGVybmFsLWdhcCk7cG9zaXRpb246cmVsYXRpdmV9Omhvc3QoW2Rpc2FibGVkXSkgLmZvcm0tZmllbGR7YmFja2dyb3VuZDp2YXIoLS1tdGUtZGlzYWJsZWQtMSk7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1tdGUtZGlzYWJsZWQtMSl9LmFwcGVuZCwucHJlcGVuZHthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpzdHJldGNoO2JhY2tncm91bmQ6dmFyKC0tcHJlcGVuZC1iYWNrZ3JvdW5kKTtkaXNwbGF5Om5vbmU7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOjAgdmFyKC0tcHJlcGVuZC1wYWRkaW5nLXgpfS5wcmVwZW5ke2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci1yaWdodDoxcHggc29saWQgdmFyKC0tcHJlcGVuZC1ib3JkZXItY29sb3IpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpfS5hcHBlbmR7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci1sZWZ0OjFweCBzb2xpZCB2YXIoLS1wcmVwZW5kLWJvcmRlci1jb2xvcik7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpfS5hcHBlbmQuaGFzLWNvbnRlbnQsLnByZXBlbmQuaGFzLWNvbnRlbnR7ZGlzcGxheTpmbGV4fS5wcmVmaXgsLnN1ZmZpeHthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpzdHJldGNoO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5wcmVmaXg6bm90KC5oYXMtcHJlcGVuZCl7cGFkZGluZy1sZWZ0OnZhcigtLXByZXBlbmQtcGFkZGluZy14KX0uc3VmZml4Om5vdCguaGFzLWFwcGVuZCl7cGFkZGluZy1yaWdodDp2YXIoLS1wcmVwZW5kLXBhZGRpbmcteCl9LmZvcm0tZmllbGQuZm9jdXNlZDpub3QoLmRpc2FibGVkKTpub3QoW2Rpc2FibGVkXSk6bm90KDpkaXNhYmxlZCk6YmVmb3Jle2JvcmRlcjoycHggc29saWQgcmdiKHZhcigtLW10ZS1mb2N1cy1yZ2IpKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvdHRvbTotMXB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDotMXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTFweDt0b3A6LTFweDt6LWluZGV4Ojl9LmZvcm0tZmllbGQuaW52YWxpZHstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKX06aG9zdChbd2l0aG91dEJvcmRlcl0pIDppcyguZm9ybS1maWVsZCwucHJlcGVuZCwuYXBwZW5kKXstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fWA7IiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtcbiAgQWN0aXZlTGlua09wdGlvbnMsXG4gIENvbnN0cnVjdG9yLFxuICBNdGVFbGVtZW50LFxuICBNdGVIaXN0b3J5QXBpU2VydmljZSxcbiAgVW5zdWJzY3JpYmVyLFxuICBpc0xpbmtBY3RpdmUsXG4gIG9uVXBkYXRlLFxufSBmcm9tICcuLi8nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMaW5rSW50ZXJmYWNlIHtcbiAgaHJlZj86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXV0b0FjdGl2ZUxpbmtJbnRlcmZhY2Uge1xuICAvKiogV2hldGhlciBvciBub3QgdGhpcyBsaW5rIGlzIHRoZSBhY3RpdmUgcGFnZSAqL1xuICBhY3RpdmU6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgbGluayBzaG91bGQgYXV0b21hdGljYWxseSB0cnkgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIHRoZSBhY3RpdmUgcGFnZSAqL1xuICB3aXRob3V0QXV0b0FjdGl2ZTogYm9vbGVhbjtcblxuICAvKiogT3B0aW9ucyB0byByZWZpbmUgaG93IHRoaXMgbGluayB3aWxsIGRldGVybWluZSBpZiBpdCBpcyB0aGUgYWN0aXZlIHBhZ2UgKi9cbiAgYWN0aXZlTGlua09wdGlvbnM/OiBQYXJ0aWFsPEFjdGl2ZUxpbmtPcHRpb25zPjtcblxuICAvKiogVGhlIGludGVybmFsIGFuY2hvciBlbGVtZW50IGZyb20gd2hpY2ggdG8gcHVsbCB0aGUgbG9jYXRpb24gZm9yIGNvbXBhcmlzb24gKi9cbiAgYW5jaG9yRWxlbWVudD86IEhUTUxBbmNob3JFbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgQXV0b0FjdGl2ZUxpbmtNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudCAmIExpbmtJbnRlcmZhY2U+PihcbiAgc3VwZXJDbGFzczogVFxuKSA9PiB7XG4gIGNsYXNzIEF1dG9BY3RpdmVMaW5rRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgYWN0aXZlID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHdpdGhvdXRBdXRvQWN0aXZlID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIHJlZmxlY3Q6IHRydWUgfSkgYWN0aXZlTGlua09wdGlvbnM/OiBQYXJ0aWFsPEFjdGl2ZUxpbmtPcHRpb25zPjtcblxuICAgIGFuY2hvckVsZW1lbnQ/OiBIVE1MQW5jaG9yRWxlbWVudDtcblxuICAgIHByaXZhdGUgdW5zdWI6IFVuc3Vic2NyaWJlcjtcblxuICAgIEBvblVwZGF0ZSgnYWN0aXZlJywgeyB3YWl0VW50aWxGaXJzdFVwZGF0ZTogdHJ1ZSB9KVxuICAgIHByaXZhdGUgaGFuZGxlQWN0aXZlTGlua0NoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3BhZ2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAb25VcGRhdGUoWydocmVmJywgJ2lyZWYnLCAnd2l0aEF1dG9BY3RpdmUnXSwgeyB3YWl0VW50aWxGaXJzdFVwZGF0ZTogdHJ1ZSB9KVxuICAgIHByaXZhdGUgaGFuZGxlQXV0b0FjdGl2ZUNoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmhyZWYgfHwgdGhpc1snaXJlZiddKSB7XG4gICAgICAgIGlmICh0aGlzLndpdGhvdXRBdXRvQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcigpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlVXJsQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUF1dG9BY3RpdmVDaGFuZ2UoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExpc3RlbmVyKCkge1xuICAgICAgaWYgKCF0aGlzLnVuc3ViKSB7XG4gICAgICAgIHRoaXMudW5zdWIgPSBNdGVIaXN0b3J5QXBpU2VydmljZS5zdGF0ZUNoYW5nZXMoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlVXJsQ2hhbmdlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLnVuc3ViPy4oKTtcbiAgICAgIHRoaXMudW5zdWIgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlVXJsQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmUgPSBpc0xpbmtBY3RpdmUoXG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudD8uaHJlZixcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIHRoaXMuYWN0aXZlTGlua09wdGlvbnNcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gQXV0b0FjdGl2ZUxpbmtFbGVtZW50IGFzIENvbnN0cnVjdG9yPEF1dG9BY3RpdmVMaW5rSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQsIFNsb3RDb250cm9sbGVyIH0gZnJvbSAnLi4nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTbG90T2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAvKipcbiAgICogUHJvcCB1c2VkIHRvIGRlY2xhcmUgd2hpY2ggc2xvdHMgYXJlIGJlaW5nIHVzZWQgZHVyaW5nIFNTUiB0byBtYWtlIHRoZW0gdmlzaWJsZSBpbiBjZXJ0YWluIGVkZ2UtY2FzZXMuXG4gICAqL1xuICBzc3JTbG90czogc3RyaW5nO1xuXG4gIHNsb3RDb250cm9sbGVyOiBTbG90Q29udHJvbGxlcjtcblxuICBoYXNTbG90OiAoc2xvdDogc3RyaW5nLCBvclZhbHVlPzogYW55KSA9PiBib29sZWFuO1xuXG4gIHNzclNsb3RDaGVjazogKHNsb3RzOiBzdHJpbmcpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBTbG90T2JzZXJ2ZXJNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgU2xvdE9ic2VydmVyRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIFByb3AgdXNlZCB0byBkZWNsYXJlIHdoaWNoIHNsb3RzIGFyZSBiZWluZyB1c2VkIGR1cmluZyBTU1IgdG8gbWFrZSB0aGVtIHZpc2libGUgaW4gY2VydGFpbiBlZGdlLWNhc2VzLlxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSlcbiAgICBzZXQgc3NyU2xvdHModmFsOiBzdHJpbmcpIHtcbiAgICAgIGxldCBvbGRWYWwgPSB0aGlzLl9zc3JTbG90cztcbiAgICAgIHRoaXMuX3NzclNsb3RzID0gdmFsO1xuICAgICAgLy8gUGFyc2UgYW5kIGNhY2hlIHNzciBzbG90IHNldFxuICAgICAgY29uc3Qgc2xvdHMgPSAodGhpcy5fc3NyU2xvdHMgPz8gJycpXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLm1hcCgoc2xvdCkgPT4gc2xvdC50cmltKCkpO1xuICAgICAgdGhpcy5fc3NyU2xvdFNldCA9IG5ldyBTZXQ8c3RyaW5nPihzbG90cyk7XG4gICAgICAvLyBOb3JtYWwgdXBkYXRlXG4gICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ3NzclNsb3RzJywgb2xkVmFsKTtcbiAgICB9XG4gICAgZ2V0IHNzclNsb3RzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NzclNsb3RzO1xuICAgIH1cbiAgICBwcml2YXRlIF9zc3JTbG90cz86IHN0cmluZztcblxuICAgIC8qKiBAaWdub3JlICovXG4gICAgX3NzclNsb3RTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIHNsb3RDb250cm9sbGVyID0gbmV3IFNsb3RDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBzbG90IGhhcyBjb250ZW50LCBvciBpZiBpdCB3YXMgc3BlY2lmaWVkIGFzIGV4aXN0aW5nIGR1cmluZyBTU1IuXG4gICAgICogT25jZSBjYWxsZWQsIHRoZSBjb21wb25lbnQgd2lsbCBub3cgYXV0b21hdGljYWxseSB1cGRhdGUgaWYgdGhlIGNvbnRlbnRzIG9mIHRoaXMgc2xvdCBjaGFuZ2UuXG4gICAgICovXG4gICAgaGFzU2xvdChzbG90OiBzdHJpbmcsIG9yVmFsdWU/OiBhbnkpOiBib29sZWFuIHtcbiAgICAgIHRoaXMuc2xvdENvbnRyb2xsZXIudXBkYXRlT25DaGFuZ2Uoc2xvdCk7XG4gICAgICAvLyBUT0RPKHJlZWNlKTogcmVjb25zaWRlciB3aGVuIGEgc29sdXRpb24gZXhpc3RzIGZvciBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9pc3N1ZXMvMTQzNFxuICAgICAgLy8gV2UgaGF2ZSB0byBhc3N1bWUgYWxpZ25tZW50IHdpdGggc3NyU2xvdENoZWNrIHVudGlsIHRoZSBmaXJzdCB1cGRhdGUgaGVyZSBvdGhlcndpc2UgcGFydCBtaXNtYXRjaGVzIGNhbiBvY2N1clxuICAgICAgaWYgKCF0aGlzLl9fZmlyc3RVcGRhdGVkKSB7XG4gICAgICAgIHJldHVybiBvclZhbHVlIHx8IHRoaXMuc3NyU2xvdENoZWNrKHNsb3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9yVmFsdWUgfHwgdGhpcy5zbG90Q29udHJvbGxlci5jaGVjayhzbG90KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogV2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGUgcmVxdWVzdGVkIHNsb3Qgd2FzIHNwZWNpZmllZCBpbiB0aGUgbGlzdCBvZiBgc3NyLXNsb3RzYC4gKi9cbiAgICBzc3JTbG90Q2hlY2soc2xvdDogc3RyaW5nKSB7XG4gICAgICBpZiAodGhpcy5fX2ZpcnN0VXBkYXRlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3NyU2xvdFNldC5oYXMoc2xvdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBTbG90T2JzZXJ2ZXJFbGVtZW50IGFzIENvbnN0cnVjdG9yPFNsb3RPYnNlcnZlckludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBGb3JtQ29udHJvbE1peGluLCBGb3JtQ29udHJvbEludGVyZmFjZSB9IGZyb20gJ0BvcGVuLXdjL2Zvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgcXVlcnkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBDb25zdHJ1Y3RvcixcbiAgRGlzYWJsZWRNaXhpbixcbiAgVGFiSW5kZXhNaXhpbixcbiAgTXRlRWxlbWVudCxcbiAgaW5uZXJJbnB1dFZhbGlkYXRvcnMsXG4gIFRhYkluZGV4SW50ZXJmYWNlLFxuICBEaXNhYmxlZEludGVyZmFjZSxcbiAgb25VcGRhdGUsXG4gIGV2ZW50RW1pdHRlcixcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICcuLic7XG5cbi8vIFJlcXVpcmVkIHBvbHlmaWxsIGZvciBub3dcbmltcG9ydCAnLi4vLi4vY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvaW5kZXgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE10ZUNoZWNrYm94Q2hhbmdlRGV0YWlsIHtcbiAgLyoqIFRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCBjaGFuZ2VkICovXG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sIGNoYW5nZWQgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgZWxlbWVudCBpcyBjaGVja2VkICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tib3hJbnRlcmZhY2Uge1xuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgZWxlbWVudCAqL1xuICBsYWJlbD86IHN0cmluZztcblxuICAvKiogVGhlIGVycm9yIHRleHQgZm9yIHRoZSBlbGVtZW50ICovXG4gIGVycm9yPzogc3RyaW5nO1xuXG4gIC8qKiBUaGUgaGludCB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICBoaW50Pzogc3RyaW5nO1xuXG4gIC8qKiBBbiBhcmlhIGxhYmVsIHRoYXQgd2lsbCBiZSBwcm92aWRlZCB0byB0aGUgaW5wdXQgZWxlbWVudCAqL1xuICBhcmlhTGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBuYW1lIGZvciB0aGUgZWxlbWVudC4gVXNlZCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgdmFsdWUgZm9yIHRoZSBlbGVtZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSBlbGVtZW50IHdoZW4gc3VibWl0dGluZyBhIGZvcm0gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudCAgKi9cbiAgdmFsdWU6IHN0cmluZztcblxuICAvKipcbiAgICogQWx0ZXJzIHRoZSBiZWhhdmlvciBvZiB0aGlzIGNvbnRyb2wuIFdoZW4gXCJjb250cm9sbGVkXCIsIGEgY29udHJvbHMgdmFsdWUgaXMgZHJpdmVuIGV4cGxpY2l0bHkgYnkgZXh0ZXJuYWwgc3RhdGVcbiAgICogdmlhIHRoZSBgdmFsdWVgIHByb3AuIENoYW5nZSBldmVudHMgd2lsbCBmaXJlIGJ1dCB0aGUgY29udHJvbCB2YWx1ZSB3aWxsIG5vdCBjaGFuZ2UgdW50aWwgaXQgaXMgYWx0ZXJlZCBkaXJlY3RseS5cbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgY29udHJvbGxlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgY2hlY2tlZCBieSBkZWZhdWx0LiBVc2VmdWwgZm9yIHdoZW4gcmVzZXR0aW5nIGZvcm0gY29udHJvbHMgb3IgdXNpbmcgYSBzdGF0ZWxlc3MgY29tcG9uZW50ICovXG4gIGRlZmF1bHRDaGVja2VkOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGNoZWNrZWQgb3Igbm90ICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlYWRvbmx5ICovXG4gIHJlYWRvbmx5OiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBzZWxlY3RpbmcgdGhlIGVsZW1lbnQgaXMgcmVxdWlyZWQgb3Igbm90ICovXG4gIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gIC8qKiBSZW5kZXJzIHRoZSByZXF1aXJlZCBpbmRpY2F0b3IgZm9yIHRoaXMgaW5wdXRzIGxhYmVsIHdpdGhvdXQgZW5hYmxpbmcgbmF0aXZlIGByZXF1aXJlZGAgdmFsaWRhdGlvbiAqL1xuICBzaG93UmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgaW5wdXQgYmx1cnMgICovXG4gIGhhbmRsZUJsdXIoKTogdm9pZDtcblxuICAvKiogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBpbnB1dCBpcyBmb2N1c2VkIG9uICAqL1xuICBoYW5kbGVGb2N1cygpOiB2b2lkO1xuXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCBjaGFuZ2VzICAqL1xuICBoYW5kbGVDaGFuZ2UoKTogdm9pZDtcblxuICAvKiogQSBzZXQgb2YgYXR0cmlidXRlcyB0byBiZSBmb3J3YXJkZWQgdG8gYW4gZWxlbWVudCB3aXRoaW4gcmVuZGVyIGFuZCByZW1vdmVkIGZyb20gdGhlIGVsZW1lbnQgKi9cbiAgaW5oZXJpdGVkQXR0cmlidXRlczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGNvbnN0IENoZWNrYm94TWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIENoZWNrYm94RWxlbWVudCBleHRlbmRzIFRhYkluZGV4TWl4aW4oRm9ybUNvbnRyb2xNaXhpbihEaXNhYmxlZE1peGluKHN1cGVyQ2xhc3MpKSwge1xuICAgIGluaXRpYWxUYWJJbmRleDogMCxcbiAgfSkge1xuICAgIGluaGVyaXRlZEF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICAgIC8qKiBAaWdub3JlICovXG4gICAgc3RhdGljIGZvcm1Db250cm9sVmFsaWRhdG9ycyA9IGlubmVySW5wdXRWYWxpZGF0b3JzO1xuXG4gICAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoKSBsYWJlbD86IHN0cmluZztcblxuICAgIC8qKiBUaGUgZXJyb3IgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoKSBlcnJvcj86IHN0cmluZztcblxuICAgIC8qKiBUaGUgaGludCB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSgpIGhpbnQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBbHRlcnMgdGhlIGJlaGF2aW9yIG9mIHRoaXMgY29udHJvbC4gV2hlbiBcImNvbnRyb2xsZWRcIiwgYSBjb250cm9scyB2YWx1ZSBpcyBkcml2ZW4gZXhwbGljaXRseSBieSBleHRlcm5hbCBzdGF0ZVxuICAgICAqIHZpYSB0aGUgYHZhbHVlYCBwcm9wLiBDaGFuZ2UgZXZlbnRzIHdpbGwgZmlyZSBidXQgdGhlIGNvbnRyb2wgdmFsdWUgd2lsbCBub3QgY2hhbmdlIHVudGlsIGl0IGlzIGFsdGVyZWQgZGlyZWN0bHkuXG4gICAgICogQGV4cGVyaW1lbnRhbFxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgY29udHJvbGxlZDogYm9vbGVhbjtcblxuICAgIC8qKiBBbiBhcmlhIGxhYmVsIHRoYXQgd2lsbCBiZSBwcm92aWRlZCB0byB0aGUgaW5wdXQgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ2FyaWEtbGFiZWwnLCByZWZsZWN0OiB0cnVlIH0pIGFyaWFMYWJlbDogc3RyaW5nO1xuXG4gICAgLyoqIFRoZSBuYW1lIGZvciB0aGUgZWxlbWVudC4gVXNlZCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIG5hbWU6IHN0cmluZztcblxuICAgIC8qKiBUaGUgdmFsdWUgZm9yIHRoZSBlbGVtZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSBlbGVtZW50IHdoZW4gc3VibWl0dGluZyBhIGZvcm0gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudCAgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHZhbHVlPyA9ICdvbic7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgY2hlY2tlZCBieSBkZWZhdWx0LiBVc2VmdWwgZm9yIHdoZW4gcmVzZXR0aW5nIGZvcm0gY29udHJvbHMgb3IgdXNpbmcgYSBzdGF0ZWxlc3MgY29tcG9uZW50ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBkZWZhdWx0Q2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgY2hlY2tlZCBvciBub3QgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGNoZWNrZWQgPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBiZSByZWFkb25seSAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcmVhZG9ubHkgPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBzZWxlY3RpbmcgdGhlIGVsZW1lbnQgaXMgcmVxdWlyZWQgb3Igbm90ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSByZXF1aXJlZCA9IGZhbHNlO1xuXG4gICAgLyoqIFJlbmRlcnMgdGhlIHJlcXVpcmVkIGluZGljYXRvciBmb3IgdGhpcyBpbnB1dHMgbGFiZWwgd2l0aG91dCBlbmFibGluZyBuYXRpdmUgYHJlcXVpcmVkYCB2YWxpZGF0aW9uICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBzaG93UmVxdWlyZWQ/O1xuXG4gICAgLyoqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgd2l0aGluIHRoZSBmb3JtIGNvbnRyb2wgbWl4aW4gKi9cbiAgICBAcXVlcnkoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpIHZhbGlkYXRpb25UYXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoZSBlbGVtZW50J3Mgc3RhdGUgaXMgYWJvdXQgdG8gY2hhbmdlLiBJZiBkZWZhdWx0IGlzIHByZXZlbnRlZCwgaXQgd2lsbCByZXZlcnQgdGhlIGNoZWNrYm94IHRvIGl0J3Mgb3JpZ2luYWwgY2hlY2tlZCBzdGF0ZSBwcmlvciB0byBzZWxlY3RpbmcuICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF93aWxsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TXRlQ2hlY2tib3hDaGFuZ2VEZXRhaWw+O1xuXG4gICAgLyoqIEVtaXR0ZWQgd2hlbiB0aGUgZWxlbWVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkLiAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxNdGVDaGVja2JveENoYW5nZURldGFpbD47XG5cbiAgICAvKiogRW1pdHMgd2hlbiB0aGlzIGVsZW1lbnQgaXMgZm9jdXNlZCAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25Gb2N1czogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIEVtaXRzIHdoZW4gdGhpcyBlbGVtZW50IGxvc2VzIGZvY3VzICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkJsdXI6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBvblVwZGF0ZSgnZGVmYXVsdENoZWNrZWQnKVxuICAgIHByb3RlY3RlZCBvbkRlZmF1bHRDaGVja2VkQ2hhbmdlKCkge1xuICAgICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkICYmIHRoaXMuZGVmYXVsdENoZWNrZWQgJiYgIXRoaXMuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBvblVwZGF0ZShbJ3ZhbHVlJywgJ2NoZWNrZWQnXSwgeyBvbjogJ2JvdGgnIH0pXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBAb25VcGRhdGUoJ2FyaWFMYWJlbCcsIHsgb246ICdib3RoJyB9KVxuICAgIHByb3RlY3RlZCB1cGRhdGVMYWJlbCgpIHtcbiAgICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IHtcbiAgICAgICAgLi4udGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzLFxuICAgICAgICBhcmlhTGFiZWw6IHRoaXMuYXJpYUxhYmVsLFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogLS0gRm9ybSBjb250cm9sIHZhbGlkYXRpb24gb3ZlcnJpZGVzIC0tICovXG4gICAgc2hvdWxkRm9ybVZhbHVlVXBkYXRlKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRGb3JtQ29udHJvbCgpOiB2b2lkIHtcbiAgICAgIHN1cGVyLnJlc2V0Rm9ybUNvbnRyb2w/LigpO1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMuZGVmYXVsdENoZWNrZWQ7XG4gICAgfVxuXG4gICAgdmFsaWRpdHlDYWxsYmFjaygpOiBzdHJpbmcgfCB2b2lkIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9yIHx8IHRoaXMudmFsaWRhdGlvblRhcmdldD8udmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgfVxuXG4gICAgLyoqIC0tIFRhYkluZGV4IG92ZXJyaWRlcyAtLSAqL1xuICAgIGdldFRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICBzZXRUYWJJbmRleEFkYXB0ZXIodmFsdWU6IHN0cmluZykge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm90UHJldmVudGVkID0gdGhpcy5fd2lsbENoYW5nZS5lbWl0KFxuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIGNoZWNrZWQ6ICF0aGlzLmNoZWNrZWQsXG4gICAgICAgIH0sXG4gICAgICAgIHsgY2FuY2VsYWJsZTogdHJ1ZSB9XG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5jb250cm9sbGVkKSB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBjaGVja2VkOiAhdGhpcy5jaGVja2VkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG5vdFByZXZlbnRlZCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgY2hlY2tlZDogdGhpcy5jaGVja2VkLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5fb25CbHVyLmVtaXQoKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9vbkZvY3VzLmVtaXQoKTtcbiAgICB9O1xuXG4gICAgLyoqIENsaWNrcyB0aGUgZWxlbWVudCAqL1xuICAgIHB1YmxpYyBjbGljaygpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblRhcmdldC5jbGljaygpO1xuICAgIH1cblxuICAgIC8qKiBGb2N1c2VzIHRoZSBlbGVtZW50ICovXG4gICAgcHVibGljIGZvY3VzKCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqIEJsdXJzIHRoZSBlbGVtZW50ICovXG4gICAgcHVibGljIGJsdXIoKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBDaGVja2JveEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8XG4gICAgQ2hlY2tib3hJbnRlcmZhY2UgJiBUYWJJbmRleEludGVyZmFjZSAmIEZvcm1Db250cm9sSW50ZXJmYWNlICYgRGlzYWJsZWRJbnRlcmZhY2VcbiAgPiAmXG4gICAgVDtcbn07XG4iLCAiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgdGhlIFdlYWtNYXBzIHVzZWQgdGhyb3VnaG91dCB0aGlzIHByb2plY3QuIFRoZSBXZWFrTWFwcyBleGlzdCB0byB0aWVcbiAqIG9iamVjdHMgdG9nZXRoZXIgd2l0aG91dCBwb2xsdXRpbmcgdGhlIG9iamVjdHMgdGhlbXNlbHZlcyB3aXRoIHJlZmVyZW5jZXMgd2UnZCByYXRoZXIga2VlcFxuICogaGlkZGVuLiBUaGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gd29yayBhcyB0cmFuc3BhcmVudGx5IGFzIHBvc3NpYmxlLlxuICovXG5pbXBvcnQgeyBJRWxlbWVudEludGVybmFscywgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqIFVzZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBpdCBpcyBhdHRhY2hlZCB0byAqL1xuZXhwb3J0IGNvbnN0IHJlZk1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBJQ3VzdG9tRWxlbWVudD4oKTtcblxuLyoqIFVzZWUgYW4gRWxlbWVudHNJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGl0cyBWYWxpZGl0eVN0YXRlIG9iamVjdCAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkaXR5TWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIFZhbGlkaXR5U3RhdGU+KCk7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgaXRzIGF0dGFjaGVkIGlucHV0W3R5cGU9XCJoaWRkZW5cIl0gKi9cbmV4cG9ydCBjb25zdCBoaWRkZW5JbnB1dE1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBIVE1MSW5wdXRFbGVtZW50W10+KCk7XG5cbi8qKiBVc2UgYSBjdXN0b20gZWxlbWVudCB0byBnZXQgaXRzIGF0dGFjaGVkIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgKi9cbmV4cG9ydCBjb25zdCBpbnRlcm5hbHNNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHM+KCk7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgdGhlIGF0dGFjaGVkIHZhbGlkYXRpb24gbWVzc2FnZSAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25NZXNzYWdlTWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIHN0cmluZz4oKTtcblxuLyoqIFVzZSBhIGZvcm0gZWxlbWVudCB0byBnZXQgYXR0YWNoZWQgY3VzdG9tIGVsZW1lbnRzIGFuZCBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlcyAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmV4cG9ydCBjb25zdCBmb3Jtc01hcCA9IG5ldyBXZWFrTWFwPEhUTUxGb3JtRWxlbWVudCwgT2JqZWN0PigpO1xuXG4vKiogVXNlIGEgY3VzdG9tIGVsZW1lbnQgb3Igb3RoZXIgb2JqZWN0IHRvIGdldCB0aGVpciBhc3NvY2lhdGVkIE11dGF0aW9uT2JzZXJ2ZXJzICovXG5leHBvcnQgY29uc3Qgc2hhZG93SG9zdHNNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgTXV0YXRpb25PYnNlcnZlcj4oKTtcblxuLyoqIFVzZSBhIGZvcm0gZWxlbWVudCB0byBnZXQgYSBzZXQgb2YgYXR0YWNoZWQgY3VzdG9tIGVsZW1lbnRzICovXG5leHBvcnQgY29uc3QgZm9ybUVsZW1lbnRzTWFwID0gbmV3IFdlYWtNYXA8SFRNTEZvcm1FbGVtZW50LCBTZXQ8SUN1c3RvbUVsZW1lbnQ+PigpO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIGFuIGVsZW1lbnQncyB2YWx1ZSAqL1xuZXhwb3J0IGNvbnN0IHJlZlZhbHVlTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIGFueT4oKTtcblxuLyoqIEVsZW1lbnRzIHRoYXQgbmVlZCB0byBiZSB1cGdyYWRlZCBvbmNlIGFkZGVkIHRvIHRoZSBET00gKi9cbmV4cG9ydCBjb25zdCB1cGdyYWRlTWFwID0gbmV3IFdlYWtNYXA8RWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHM+KCk7XG5cbi8qKiBTYXZlIHJlZmVyZW5jZXMgdG8gc2hhZG93IHJvb3RzIGZvciBpbmNsdXNpb24gaW4gaW50ZXJuYWxzIGluc3RhbmNlICovXG5leHBvcnQgY29uc3Qgc2hhZG93Um9vdE1hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBTaGFkb3dSb290PigpO1xuXG4vKiogU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgaW50ZXJuYWxzJyB2YWxpZGF0aW9uIGFuY2hvciAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25BbmNob3JNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgSFRNTEVsZW1lbnQ+KCk7XG5cbi8qKiBNYXAgRG9jdW1lbnRGcmFnbWVudHMgdG8gdGhlaXIgTXV0YXRpb25PYnNlcnZlcnMgc28gd2UgY2FuIGRpc2Nvbm5lY3Qgb25jZSBlbGVtZW50cyBhcmUgcmVtb3ZlZCAqL1xuZXhwb3J0IGNvbnN0IGRvY3VtZW50RnJhZ21lbnRNYXAgPSBuZXcgV2Vha01hcDxEb2N1bWVudEZyYWdtZW50LCBNdXRhdGlvbk9ic2VydmVyPigpO1xuXG4vKiogV2hldGhlciBjb25uZWN0ZWRDYWxsYmFjayBoYXMgYWxyZWFkeSBiZWVuIGNhbGxlZC4gKi9cbmV4cG9ydCBjb25zdCBjb25uZWN0ZWRDYWxsYmFja01hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBib29sZWFuPigpO1xuXG4vKiogU2F2ZSBhIHJlZmVyZW5jZSB0byB2YWxpZGl0eSBzdGF0ZSBmb3IgZWxlbWVudHMgdGhhdCBuZWVkIHRvIHVwZ3JhZGUgYWZ0ZXIgYmVpbmcgY29ubmVjdGVkICovXG5leHBvcnQgY29uc3QgdmFsaWRpdHlVcGdyYWRlTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzPigpO1xuIiwgImltcG9ydCB7IHVwZ3JhZGVNYXAgfSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHsgSUFvbSwgSUVsZW1lbnRJbnRlcm5hbHMgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuZXhwb3J0IGNvbnN0IGFvbTogSUFvbSA9IHtcbiAgYXJpYUF0b21pYzogJ2FyaWEtYXRvbWljJyxcbiAgYXJpYUF1dG9Db21wbGV0ZTogJ2FyaWEtYXV0b2NvbXBsZXRlJyxcbiAgYXJpYUJ1c3k6ICdhcmlhLWJ1c3knLFxuICBhcmlhQ2hlY2tlZDogJ2FyaWEtY2hlY2tlZCcsXG4gIGFyaWFDb2xDb3VudDogJ2FyaWEtY29sY291bnQnLFxuICBhcmlhQ29sSW5kZXg6ICdhcmlhLWNvbGluZGV4JyxcbiAgYXJpYUNvbEluZGV4VGV4dDogJ2FyaWEtY29saW5kZXh0ZXh0JyxcbiAgYXJpYUNvbFNwYW46ICdhcmlhLWNvbHNwYW4nLFxuICBhcmlhQ3VycmVudDogJ2FyaWEtY3VycmVudCcsXG4gIGFyaWFEaXNhYmxlZDogJ2FyaWEtZGlzYWJsZWQnLFxuICBhcmlhRXhwYW5kZWQ6ICdhcmlhLWV4cGFuZGVkJyxcbiAgYXJpYUhhc1BvcHVwOiAnYXJpYS1oYXNwb3B1cCcsXG4gIGFyaWFIaWRkZW46ICdhcmlhLWhpZGRlbicsXG4gIGFyaWFJbnZhbGlkOiAnYXJpYS1pbnZhbGlkJyxcbiAgYXJpYUtleVNob3J0Y3V0czogJ2FyaWEta2V5c2hvcnRjdXRzJyxcbiAgYXJpYUxhYmVsOiAnYXJpYS1sYWJlbCcsXG4gIGFyaWFMZXZlbDogJ2FyaWEtbGV2ZWwnLFxuICBhcmlhTGl2ZTogJ2FyaWEtbGl2ZScsXG4gIGFyaWFNb2RhbDogJ2FyaWEtbW9kYWwnLFxuICBhcmlhTXVsdGlMaW5lOiAnYXJpYS1tdWx0aWxpbmUnLFxuICBhcmlhTXVsdGlTZWxlY3RhYmxlOiAnYXJpYS1tdWx0aXNlbGVjdGFibGUnLFxuICBhcmlhT3JpZW50YXRpb246ICdhcmlhLW9yaWVudGF0aW9uJyxcbiAgYXJpYVBsYWNlaG9sZGVyOiAnYXJpYS1wbGFjZWhvbGRlcicsXG4gIGFyaWFQb3NJblNldDogJ2FyaWEtcG9zaW5zZXQnLFxuICBhcmlhUHJlc3NlZDogJ2FyaWEtcHJlc3NlZCcsXG4gIGFyaWFSZWFkT25seTogJ2FyaWEtcmVhZG9ubHknLFxuICBhcmlhUmVsZXZhbnQ6ICdhcmlhLXJlbGV2YW50JyxcbiAgYXJpYVJlcXVpcmVkOiAnYXJpYS1yZXF1aXJlZCcsXG4gIGFyaWFSb2xlRGVzY3JpcHRpb246ICdhcmlhLXJvbGVkZXNjcmlwdGlvbicsXG4gIGFyaWFSb3dDb3VudDogJ2FyaWEtcm93Y291bnQnLFxuICBhcmlhUm93SW5kZXg6ICdhcmlhLXJvd2luZGV4JyxcbiAgYXJpYVJvd0luZGV4VGV4dDogJ2FyaWEtcm93aW5kZXh0ZXh0JyxcbiAgYXJpYVJvd1NwYW46ICdhcmlhLXJvd3NwYW4nLFxuICBhcmlhU2VsZWN0ZWQ6ICdhcmlhLXNlbGVjdGVkJyxcbiAgYXJpYVNldFNpemU6ICdhcmlhLXNldHNpemUnLFxuICBhcmlhU29ydDogJ2FyaWEtc29ydCcsXG4gIGFyaWFWYWx1ZU1heDogJ2FyaWEtdmFsdWVtYXgnLFxuICBhcmlhVmFsdWVNaW46ICdhcmlhLXZhbHVlbWluJyxcbiAgYXJpYVZhbHVlTm93OiAnYXJpYS12YWx1ZW5vdycsXG4gIGFyaWFWYWx1ZVRleHQ6ICdhcmlhLXZhbHVldGV4dCcsXG4gIHJvbGU6ICdyb2xlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0QW9tID0gKHJlZjogRWxlbWVudCwgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscykgPT4ge1xuICBmb3IgKGxldCBrZXkgaW4gYW9tKSB7XG4gICAgaW50ZXJuYWxzW2tleV0gPSBudWxsO1xuXG4gICAgbGV0IGNsb3N1cmVWYWx1ZSA9IG51bGw7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGFvbVtrZXldO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnRlcm5hbHMsIGtleSwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gY2xvc3VyZVZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICBjbG9zdXJlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgIHJlZi5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVwZ3JhZGVNYXAuc2V0KHJlZiwgaW50ZXJuYWxzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufTtcbiIsICJpbXBvcnQge1xuICBpbnRlcm5hbHNNYXAsXG4gIHNoYWRvd0hvc3RzTWFwLFxuICB1cGdyYWRlTWFwLFxuICBoaWRkZW5JbnB1dE1hcCxcbiAgZG9jdW1lbnRGcmFnbWVudE1hcCxcbiAgZm9ybUVsZW1lbnRzTWFwLFxuICB2YWxpZGl0eVVwZ3JhZGVNYXAsXG4gIHJlZlZhbHVlTWFwLFxufSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHsgYW9tIH0gZnJvbSAnLi9hb20uanMnO1xuaW1wb3J0IHtcbiAgcmVtb3ZlSGlkZGVuSW5wdXRzLFxuICBpbml0Rm9ybSxcbiAgaW5pdExhYmVscyxcbiAgdXBncmFkZUludGVybmFscyxcbiAgc2V0RGlzYWJsZWQsXG4gIG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuZnVuY3Rpb24gaW5pdE5vZGUobm9kZTogSUN1c3RvbUVsZW1lbnQpOiB2b2lkIHtcbiAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChub2RlKTtcbiAgY29uc3QgeyBmb3JtIH0gPSBpbnRlcm5hbHM7XG4gIGluaXRGb3JtKG5vZGUsIGZvcm0sIGludGVybmFscyk7XG4gIGluaXRMYWJlbHMobm9kZSwgaW50ZXJuYWxzLmxhYmVscyk7XG59XG5cbi8qKlxuICogSWYgYSBmaWVsZHNldCdzIGRpc2FibGVkIHN0YXRlIGlzIHRvZ2dsZWQsIHRoZSBmb3JtRGlzYWJsZWRDYWxsYmFja1xuICogb24gYW55IGNoaWxkIGZvcm0tYXNzb2NpYXRlZCBjdXNvdG0gZWxlbWVudHMuXG4gKi9cbmV4cG9ydCBjb25zdCB3YWxrRmllbGRzZXQgPSAobm9kZTogSFRNTEZpZWxkU2V0RWxlbWVudCwgZmlyc3RSZW5kZXIgPSBmYWxzZSk6IHZvaWQgPT4ge1xuICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKG5vZGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCB7XG4gICAgYWNjZXB0Tm9kZShub2RlOiBJQ3VzdG9tRWxlbWVudCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gaW50ZXJuYWxzTWFwLmhhcyhub2RlKSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVA7XG4gICAgfSxcbiAgfSk7XG5cbiAgbGV0IGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcbiAgLyoqXG4gICAqIFdlIGRvbid0IG5lZWQgdG8gY2FsbCBhbnl0aGluZyBvbiBmaXJzdCByZW5kZXIgaWZcbiAgICogdGhlIGVsZW1lbnQgaXNuJ3QgZGlzYWJsZWRcbiAgICovXG4gIGNvbnN0IGlzQ2FsbE5lY2Vzc2FyeSA9ICFmaXJzdFJlbmRlciB8fCBub2RlLmRpc2FibGVkO1xuXG4gIHdoaWxlIChjdXJyZW50KSB7XG4gICAgaWYgKGN1cnJlbnQuZm9ybURpc2FibGVkQ2FsbGJhY2sgJiYgaXNDYWxsTmVjZXNzYXJ5KSB7XG4gICAgICBzZXREaXNhYmxlZChjdXJyZW50LCBub2RlLmRpc2FibGVkKTtcbiAgICB9XG4gICAgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZzogTXV0YXRpb25PYnNlcnZlckluaXQgPSB7XG4gIGF0dHJpYnV0ZXM6IHRydWUsXG4gIGF0dHJpYnV0ZUZpbHRlcjogWydkaXNhYmxlZCcsICduYW1lJ10sXG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRPck5hbWVPYnNlcnZlciA9IG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKVxuICA/IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnNMaXN0OiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0IGFzIElDdXN0b21FbGVtZW50O1xuXG4gICAgICAgIC8qKiBNYW5hZ2UgY2hhbmdlcyB0byB0aGUgcmVmJ3MgZGlzYWJsZWQgc3RhdGUgKi9cbiAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0LmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICAgICAgICBzZXREaXNhYmxlZCh0YXJnZXQsIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmxvY2FsTmFtZSA9PT0gJ2ZpZWxkc2V0Jykge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXB1cnBvc2UgdGhlIG9ic2VydmVyIGZvciBmaWVsZHNldHMgd2hpY2ggbmVlZFxuICAgICAgICAgICAgICogdG8gYmUgd2Fsa2VkIHdoZW5ldmVyIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgaXMgc2V0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHdhbGtGaWVsZHNldCh0YXJnZXQgYXMgdW5rbm93biBhcyBIVE1MRmllbGRTZXRFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqIE1hbmFnZSBjaGFuZ2VzIHRvIHRoZSByZWYncyBuYW1lICovXG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnbmFtZScpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0LmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlZlZhbHVlTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgaW50ZXJuYWxzLnNldEZvcm1WYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgOiAoe30gYXMgTXV0YXRpb25PYnNlcnZlcik7XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlckNhbGxiYWNrKG11dGF0aW9uTGlzdDogTXV0YXRpb25SZWNvcmRbXSkge1xuICBtdXRhdGlvbkxpc3QuZm9yRWFjaCgobXV0YXRpb25SZWNvcmQpID0+IHtcbiAgICBjb25zdCB7IGFkZGVkTm9kZXMsIHJlbW92ZWROb2RlcyB9ID0gbXV0YXRpb25SZWNvcmQ7XG4gICAgY29uc3QgYWRkZWQgPSBBcnJheS5mcm9tKGFkZGVkTm9kZXMpIGFzIElDdXN0b21FbGVtZW50W107XG4gICAgY29uc3QgcmVtb3ZlZCA9IEFycmF5LmZyb20ocmVtb3ZlZE5vZGVzKSBhcyBJQ3VzdG9tRWxlbWVudFtdO1xuXG4gICAgYWRkZWQuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgLyoqIEFsbG93cyBmb3IgZHluYW1pYyBhZGRpdGlvbiBvZiBlbGVtZW50cyB0byBmb3JtcyAqL1xuICAgICAgaWYgKGludGVybmFsc01hcC5oYXMobm9kZSkgJiYgbm9kZS5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgICBpbml0Tm9kZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgLyoqIFVwZ3JhZGUgdGhlIGFjY2Vzc2liaWxpdHkgaW5mb3JtYXRpb24gb24gYW55IHByZXZpb3VzbHkgY29ubmVjdGVkICovXG4gICAgICBpZiAodXBncmFkZU1hcC5oYXMobm9kZSkpIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gdXBncmFkZU1hcC5nZXQobm9kZSk7XG4gICAgICAgIGNvbnN0IGFvbUtleXMgPSBPYmplY3Qua2V5cyhhb20pO1xuICAgICAgICBhb21LZXlzXG4gICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBpbnRlcm5hbHNba2V5XSAhPT0gbnVsbClcbiAgICAgICAgICAuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhb21ba2V5XSwgaW50ZXJuYWxzW2tleV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB1cGdyYWRlTWFwLmRlbGV0ZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgLyoqIFVwZ3JhZGUgdGhlIHZhbGlkaXR5IHN0YXRlIHdoZW4gdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkICovXG4gICAgICBpZiAodmFsaWRpdHlVcGdyYWRlTWFwLmhhcyhub2RlKSkge1xuICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSB2YWxpZGl0eVVwZ3JhZGVNYXAuZ2V0KG5vZGUpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgaW50ZXJuYWxzLnZhbGlkaXR5LnZhbGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnaW50ZXJuYWxzLWludmFsaWQnLCAoIWludGVybmFscy52YWxpZGl0eS52YWxpZCkudG9TdHJpbmcoKSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCAoIWludGVybmFscy52YWxpZGl0eS52YWxpZCkudG9TdHJpbmcoKSk7XG4gICAgICAgIHZhbGlkaXR5VXBncmFkZU1hcC5kZWxldGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKiBJZiB0aGUgbm9kZSB0aGF0J3MgYWRkZWQgaXMgYSBmb3JtLCBjaGVjayB0aGUgdmFsaWRpdHkgKi9cbiAgICAgIGlmIChub2RlLmxvY2FsTmFtZSA9PT0gJ2Zvcm0nKSB7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQobm9kZSBhcyB1bmtub3duIGFzIEhUTUxGb3JtRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIobm9kZSwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIHtcbiAgICAgICAgICBhY2NlcHROb2RlKG5vZGU6IElDdXN0b21FbGVtZW50KTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBpbnRlcm5hbHNNYXAuaGFzKG5vZGUpICYmICEoZm9ybUVsZW1lbnRzICYmIGZvcm1FbGVtZW50cy5oYXMobm9kZSkpXG4gICAgICAgICAgICAgID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUXG4gICAgICAgICAgICAgIDogTm9kZUZpbHRlci5GSUxURVJfU0tJUDtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgaW5pdE5vZGUoY3VycmVudCk7XG4gICAgICAgICAgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmxvY2FsTmFtZSA9PT0gJ2ZpZWxkc2V0Jykge1xuICAgICAgICBkaXNhYmxlZE9yTmFtZU9ic2VydmVyLm9ic2VydmU/Lihub2RlLCBkaXNhYmxlZE9yTmFtZU9ic2VydmVyQ29uZmlnKTtcbiAgICAgICAgd2Fsa0ZpZWxkc2V0KG5vZGUgYXMgdW5rbm93biBhcyBIVE1MRmllbGRTZXRFbGVtZW50LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlbW92ZWQuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChub2RlKTtcbiAgICAgIC8qKiBDbGVhbiB1cCBhbnkgaGlkZGVuIGlucHV0IGVsZW1lbnRzIGxlZnQgYWZ0ZXIgYW4gZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQgKi9cbiAgICAgIGlmIChpbnRlcm5hbHMgJiYgaGlkZGVuSW5wdXRNYXAuZ2V0KGludGVybmFscykpIHtcbiAgICAgICAgcmVtb3ZlSGlkZGVuSW5wdXRzKGludGVybmFscyk7XG4gICAgICB9XG4gICAgICAvKiogRGlzY29ubmVjdCBhbnkgdW5uZWVkZWQgTXV0YXRpb25PYnNlcnZlcnMgKi9cbiAgICAgIGlmIChzaGFkb3dIb3N0c01hcC5oYXMobm9kZSkpIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBzaGFkb3dIb3N0c01hcC5nZXQobm9kZSk7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhpcyBvYnNlcnZlciBjYWxsYmFjayBpcyBqdXN0IGZvciBkb2N1bWVudCBmcmFnbWVudHNcbiAqIGl0IHdpbGwgdXBncmFkZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIGlmIHdhcyBhcHBlbmRlZFxuICogZnJvbSBhIGRvY3VtZW50IGZyYWdtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJhZ21lbnRPYnNlcnZlckNhbGxiYWNrKG11dGF0aW9uTGlzdDogTXV0YXRpb25SZWNvcmRbXSk6IHZvaWQge1xuICBtdXRhdGlvbkxpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICBjb25zdCB7IHJlbW92ZWROb2RlcyB9ID0gbXV0YXRpb247XG5cbiAgICByZW1vdmVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBkb2N1bWVudEZyYWdtZW50TWFwLmdldChtdXRhdGlvbi50YXJnZXQgYXMgRG9jdW1lbnRGcmFnbWVudCk7XG4gICAgICBpZiAoaW50ZXJuYWxzTWFwLmhhcyhub2RlIGFzIElDdXN0b21FbGVtZW50KSkge1xuICAgICAgICB1cGdyYWRlSW50ZXJuYWxzKG5vZGUgYXMgSUN1c3RvbUVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBEZWZlciB0aGUgdXBncmFkZSBvZiBub2RlcyB3aXRoaW5nIGEgRG9jdW1lbnRGcmFnbWVudFxuICogQHBhcmFtIGZyYWdtZW50IHtEb2N1bWVudEZyYWdtZW50fVxuICovXG5leHBvcnQgY29uc3QgZGVmZXJVcGdyYWRlID0gKGZyYWdtZW50OiBEb2N1bWVudEZyYWdtZW50KSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnJhZ21lbnRPYnNlcnZlckNhbGxiYWNrKTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZT8uKGZyYWdtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgZG9jdW1lbnRGcmFnbWVudE1hcC5zZXQoZnJhZ21lbnQsIG9ic2VydmVyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvYnNlcnZlciA9IG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKVxuICA/IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spXG4gIDogKHt9IGFzIE11dGF0aW9uT2JzZXJ2ZXIpO1xuZXhwb3J0IGNvbnN0IG9ic2VydmVyQ29uZmlnOiBNdXRhdGlvbk9ic2VydmVySW5pdCA9IHtcbiAgY2hpbGRMaXN0OiB0cnVlLFxuICBzdWJ0cmVlOiB0cnVlLFxufTtcbiIsICJpbXBvcnQgeyBoaWRkZW5JbnB1dE1hcCwgZm9ybXNNYXAsIGZvcm1FbGVtZW50c01hcCwgaW50ZXJuYWxzTWFwIH0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIsIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWcgfSBmcm9tICcuL211dGF0aW9uLW9ic2VydmVycy5qcyc7XG5pbXBvcnQgeyBJQ3VzdG9tRWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHMsIExhYmVsc0xpc3QgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuLyoqXG4gKiBUb2dnbGUncyB0aGUgZGlzYWJsZWQgc3RhdGUgKGF0dHJpYnV0ZXMgJiBjYWxsYmFjaykgb24gdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSBjdXN0b20gZWxlbWVudCBpbnN0YW5jZVxuICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZCAtIFRoZSBkaXNhYmxlZCBzdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgc2V0RGlzYWJsZWQgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLWRpc2FibGVkJywgZGlzYWJsZWQpO1xuXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIHJlZi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICB9IGVsc2Uge1xuICAgIHJlZi5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKTtcbiAgfVxuXG4gIGlmIChyZWYuZm9ybURpc2FibGVkQ2FsbGJhY2spIHtcbiAgICByZWYuZm9ybURpc2FibGVkQ2FsbGJhY2suYXBwbHkocmVmLCBbZGlzYWJsZWRdKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBoaWRkZW4gaW5wdXRzIGZvciB0aGUgZ2l2ZW4gZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUhpZGRlbklucHV0cyA9IChpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzKTogdm9pZCA9PiB7XG4gIGNvbnN0IGhpZGRlbklucHV0cyA9IGhpZGRlbklucHV0TWFwLmdldChpbnRlcm5hbHMpO1xuICBoaWRkZW5JbnB1dHMuZm9yRWFjaCgoaGlkZGVuSW5wdXQpID0+IHtcbiAgICBoaWRkZW5JbnB1dC5yZW1vdmUoKTtcbiAgfSk7XG4gIGhpZGRlbklucHV0TWFwLnNldChpbnRlcm5hbHMsIFtdKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhpZGRlbiBpbnB1dCBmb3IgdGhlIGdpdmVuIHJlZlxuICogQHBhcmFtIHtJQ3VzdG9tRWxlbWVudH0gcmVmIC0gVGhlIGVsZW1lbnQgdG8gd2F0Y2hcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZSBmb3IgdGhlIHJlZlxuICogQHJldHVybiB7SFRNTElucHV0RWxlbWVudH0gVGhlIGhpZGRlbiBpbnB1dFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlSGlkZGVuSW5wdXQgPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHNcbik6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gJ2hpZGRlbic7XG4gIGlucHV0Lm5hbWUgPSByZWYuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gIHJlZi5hZnRlcihpbnB1dCk7XG4gIGhpZGRlbklucHV0TWFwLmdldChpbnRlcm5hbHMpLnB1c2goaW5wdXQpO1xuICByZXR1cm4gaW5wdXQ7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSByZWYgYnkgc2V0dGluZyB1cCBhbiBhdHRyaWJ1dGUgb2JzZXJ2ZSBvbiBpdFxuICogbG9va2luZyBmb3IgY2hhbmdlcyB0byBkaXNhYmxlZFxuICogQHBhcmFtIHtJQ3VzdG9tRWxlbWVudH0gcmVmIC0gVGhlIGVsZW1lbnQgdG8gd2F0Y2hcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZSBmb3IgdGhlIHJlZlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRSZWYgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscyk6IHZvaWQgPT4ge1xuICBoaWRkZW5JbnB1dE1hcC5zZXQoaW50ZXJuYWxzLCBbXSk7XG4gIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIub2JzZXJ2ZT8uKHJlZiwgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZyk7XG59O1xuXG4vKipcbiAqIFNldCB1cCBsYWJlbHMgZm9yIHRoZSByZWZcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSByZWYgdG8gYWRkIGxhYmVscyB0b1xuICogQHBhcmFtIHtMYWJlbHNMaXN0fSBsYWJlbHMgLSBBIGxpc3Qgb2YgdGhlIGxhYmVsc1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRMYWJlbHMgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgbGFiZWxzOiBMYWJlbHNMaXN0KTogdm9pZCA9PiB7XG4gIGlmIChsYWJlbHMubGVuZ3RoKSB7XG4gICAgQXJyYXkuZnJvbShsYWJlbHMpLmZvckVhY2goKGxhYmVsKSA9PiBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlZi5jbGljay5iaW5kKHJlZikpKTtcbiAgICBsZXQgZmlyc3RMYWJlbElkID0gbGFiZWxzWzBdLmlkO1xuICAgIGlmICghbGFiZWxzWzBdLmlkKSB7XG4gICAgICBmaXJzdExhYmVsSWQgPSBgJHtsYWJlbHNbMF0uaHRtbEZvcn1fTGFiZWxgO1xuICAgICAgbGFiZWxzWzBdLmlkID0gZmlyc3RMYWJlbElkO1xuICAgIH1cbiAgICByZWYuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBmaXJzdExhYmVsSWQpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGludGVybmFscy12YWxpZCBhbmQgaW50ZXJuYWxzLWludmFsaWQgYXR0cmlidXRlc1xuICogYmFzZWQgb24gZm9ybSB2YWxpZGl0eS5cbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSAtIFRoZSB0YXJnZXQgZm9ybVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHNldEZvcm1WYWxpZGl0eSA9IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgY29uc3QgbmF0aXZlQ29udHJvbFZhbGlkaXR5ID0gQXJyYXkuZnJvbShmb3JtLmVsZW1lbnRzKVxuICAgIC5maWx0ZXIoXG4gICAgICAoZWxlbWVudDogRWxlbWVudCAmIHsgdmFsaWRpdHk6IFZhbGlkaXR5U3RhdGUgfSkgPT5cbiAgICAgICAgIWVsZW1lbnQudGFnTmFtZS5pbmNsdWRlcygnLScpICYmIGVsZW1lbnQudmFsaWRpdHlcbiAgICApXG4gICAgLm1hcCgoZWxlbWVudDogRWxlbWVudCAmIHsgdmFsaWRpdHk6IFZhbGlkaXR5U3RhdGUgfSkgPT4gZWxlbWVudC52YWxpZGl0eS52YWxpZCk7XG4gIGNvbnN0IHBvbHlmaWxsZWRFbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSkgfHwgW107XG4gIGNvbnN0IHBvbHlmaWxsZWRWYWxpZGl0eSA9IEFycmF5LmZyb20ocG9seWZpbGxlZEVsZW1lbnRzKVxuICAgIC5maWx0ZXIoKGNvbnRyb2wpID0+IGNvbnRyb2wuaXNDb25uZWN0ZWQpXG4gICAgLm1hcCgoY29udHJvbDogSUN1c3RvbUVsZW1lbnQpID0+IGludGVybmFsc01hcC5nZXQoY29udHJvbCkudmFsaWRpdHkudmFsaWQpO1xuICBjb25zdCBoYXNJbnZhbGlkID0gWy4uLm5hdGl2ZUNvbnRyb2xWYWxpZGl0eSwgLi4ucG9seWZpbGxlZFZhbGlkaXR5XS5pbmNsdWRlcyhmYWxzZSk7XG4gIGZvcm0udG9nZ2xlQXR0cmlidXRlKCdpbnRlcm5hbHMtaW52YWxpZCcsIGhhc0ludmFsaWQpO1xuICBmb3JtLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgIWhhc0ludmFsaWQpO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gaW5wdXQgY2FsbGJhY2suIFVwZGF0ZXMgdGhlIGZvcm0ncyB2YWxpZGl0eVxuICogYXR0cmlidXRlcyBvbiBpbnB1dC5cbiAqIEBwYXJhbSB7RXZlbnR9IC0gVGhlIGZvcm0gaW5wdXQgZXZlbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtSW5wdXRDYWxsYmFjayA9IChldmVudDogRXZlbnQpID0+IHtcbiAgc2V0Rm9ybVZhbGlkaXR5KGZpbmRQYXJlbnRGb3JtKGV2ZW50LnRhcmdldCkpO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gY2hhbmdlIGNhbGxiYWNrLiBVcGRhdGVzIHRoZSBmb3JtJ3MgdmFsaWRpdHlcbiAqIGF0dHJpYnV0ZXMgb24gY2hhbmdlLlxuICogQHBhcmFtIHtFdmVudH0gLSBUaGUgZm9ybSBjaGFuZ2UgZXZlbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtQ2hhbmdlQ2FsbGJhY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIHNldEZvcm1WYWxpZGl0eShmaW5kUGFyZW50Rm9ybShldmVudC50YXJnZXQpKTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIHN1Ym1pdCBjYWxsYmFjay4gV2UgbmVlZCB0byBjYW5jZWwgYW55IHN1Ym1pc3Npb25cbiAqIGlmIGEgbmVzdGVkIGludGVybmFscyBpcyBpbnZhbGlkLlxuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IC0gVGhlIGZvcm0gZWxlbWVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHdpcmVTdWJtaXRMb2dpYyA9IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgY29uc3QgU1VCTUlUX0JVVFRPTl9TRUxFQ1RPUiA9XG4gICAgJzppcyhidXR0b25bdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGJ1dHRvbjpub3QoW3R5cGVdKSk6bm90KFtkaXNhYmxlZF0pJztcbiAgbGV0IHN1Ym1pdEJ1dHRvblNlbGVjdG9yID0gYCR7U1VCTUlUX0JVVFRPTl9TRUxFQ1RPUn06bm90KFtmb3JtXSlgO1xuXG4gIGlmIChmb3JtLmlkKSB7XG4gICAgc3VibWl0QnV0dG9uU2VsZWN0b3IgKz0gYCwke1NVQk1JVF9CVVRUT05fU0VMRUNUT1J9W2Zvcm09JyR7Zm9ybS5pZH0nXWA7XG4gIH1cblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgaWYgKHRhcmdldC5jbG9zZXN0KHN1Ym1pdEJ1dHRvblNlbGVjdG9yKSkge1xuICAgICAgLy8gdmFsaWRhdGVcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChmb3JtKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGlzIGZvcm0gZG9lcyBub3QgdmFsaWRhdGUgdGhlbiB3ZSdyZSBkb25lXG4gICAgICAgKi9cbiAgICAgIGlmIChmb3JtLm5vVmFsaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvKiogSWYgdGhlIFNldCBoYXMgaXRlbXMsIGNvbnRpbnVlICovXG4gICAgICBpZiAoZWxlbWVudHMuc2l6ZSkge1xuICAgICAgICBjb25zdCBub2RlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpO1xuICAgICAgICAvKiogQ2hlY2sgdGhlIGludGVybmFscy5jaGVja1ZhbGlkaXR5KCkgb2YgYWxsIG5vZGVzICovXG4gICAgICAgIGNvbnN0IHZhbGlkaXR5TGlzdCA9IG5vZGVzLnJldmVyc2UoKS5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KG5vZGUpO1xuICAgICAgICAgIHJldHVybiBpbnRlcm5hbHMucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqIElmIGFueSBub2RlIGlzIGZhbHNlLCBzdG9wIHRoZSBldmVudCAqL1xuICAgICAgICBpZiAodmFsaWRpdHlMaXN0LmluY2x1ZGVzKGZhbHNlKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gcmVzZXQgY2FsbGJhY2suIFRoaXMgd2lsbCBsb29wIG92ZXIgYWRkZWRcbiAqIGlucHV0cyBhbmQgY2FsbCBmb3JtUmVzZXRDYWxsYmFjayBpZiBhcHBsaWNhYmxlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZm9ybVJlc2V0Q2FsbGJhY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIC8qKiBHZXQgdGhlIFNldCBvZiBlbGVtZW50cyBhdHRhY2hlZCB0byB0aGlzIGZvcm0gKi9cbiAgY29uc3QgZWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQpO1xuXG4gIC8qKiBTb21lIGZvcm1zIHdvbid0IGNvbnRhaW4gZm9ybSBhc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50cyAqL1xuICBpZiAoZWxlbWVudHMgJiYgZWxlbWVudHMuc2l6ZSkge1xuICAgIC8qKiBMb29wIG92ZXIgdGhlIGVsZW1lbnRzIGFuZCBjYWxsIGZvcm1SZXNldENhbGxiYWNrIGlmIGFwcGxpY2FibGUgKi9cbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoKGVsZW1lbnQuY29uc3RydWN0b3IgYXMgYW55KS5mb3JtQXNzb2NpYXRlZCAmJiBlbGVtZW50LmZvcm1SZXNldENhbGxiYWNrKSB7XG4gICAgICAgIGVsZW1lbnQuZm9ybVJlc2V0Q2FsbGJhY2suYXBwbHkoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgZm9ybS4gV2Ugd2lsbCBuZWVkIHRvIGFkZCBzdWJtaXQgYW5kIHJlc2V0IGxpc3RlbmVyc1xuICogaWYgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0LiBJZiB0aGV5IGRvLCBqdXN0IGFkZCB0aGUgbmV3IHJlZiB0byB0aGUgZm9ybS5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZiAtIFRoZSBlbGVtZW50IHJlZiB0aGF0IGluY2x1ZGVzIGludGVybmFsc1xuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm0gLSBUaGUgZm9ybSB0aGUgcmVmIGJlbG9uZ3MgdG9cbiAqIEBwYXJhbSB7RWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzIC0gVGhlIGludGVybmFscyBmb3IgcmVmXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgaW5pdEZvcm0gPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIGZvcm06IEhUTUxGb3JtRWxlbWVudCxcbiAgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFsc1xuKSA9PiB7XG4gIGlmIChmb3JtKSB7XG4gICAgLyoqIFRoaXMgd2lsbCBiZSBhIFdlYWtNYXA8SFRNTEZvcm1FbGVtZW50LCBTZXQ8SFRNTEVsZW1lbnQ+ICovXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChmb3JtKTtcblxuICAgIGlmIChmb3JtRWxlbWVudHMpIHtcbiAgICAgIC8qKiBJZiBmb3JtRWxlbWVudHMgZXhpc3RzLCBhZGQgdG8gaXQgKi9cbiAgICAgIGZvcm1FbGVtZW50cy5hZGQocmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoqIElmIGZvcm1FbGVtZW50cyBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgaXQgYW5kIGFkZCB0byBpdCAqL1xuICAgICAgY29uc3QgaW5pdFNldCA9IG5ldyBTZXQ8SUN1c3RvbUVsZW1lbnQ+KCk7XG4gICAgICBpbml0U2V0LmFkZChyZWYpO1xuICAgICAgZm9ybUVsZW1lbnRzTWFwLnNldChmb3JtLCBpbml0U2V0KTtcblxuICAgICAgLyoqIEFkZCBsaXN0ZW5lcnMgdG8gZW11bGF0ZSB2YWxpZGF0aW9uIGFuZCByZXNldCBiZWhhdmlvciAqL1xuICAgICAgd2lyZVN1Ym1pdExvZ2ljKGZvcm0pO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIGZvcm1SZXNldENhbGxiYWNrKTtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmb3JtSW5wdXRDYWxsYmFjayk7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZvcm1DaGFuZ2VDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgZm9ybXNNYXAuc2V0KGZvcm0sIHsgcmVmLCBpbnRlcm5hbHMgfSk7XG5cbiAgICAvKiogQ2FsbCBmb3JtQXNzb2NpYXRlZENhbGxiYWNrIGlmIGFwcGxpY2FibGUgKi9cbiAgICBpZiAocmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddICYmIHJlZi5mb3JtQXNzb2NpYXRlZENhbGxiYWNrKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVmLmZvcm1Bc3NvY2lhdGVkQ2FsbGJhY2suYXBwbHkocmVmLCBbZm9ybV0pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIHNldEZvcm1WYWxpZGl0eShmb3JtKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSBsb29rIGZvciBhbiBlbGVtZW50J3MgcGFyZW50IGZvcm1cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbSAtIFRoZSBlbGVtZW50IHRvIGxvb2sgZm9yIGEgcGFyZW50IGZvcm1cbiAqIEByZXR1cm4ge0hUTUxGb3JtRWxlbWVudHxudWxsfSAtIFRoZSBwYXJlbnQgZm9ybSwgaWYgb25lIGV4aXN0c1xuICovXG5leHBvcnQgY29uc3QgZmluZFBhcmVudEZvcm0gPSAoZWxlbSkgPT4ge1xuICBsZXQgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuICBpZiAocGFyZW50ICYmIHBhcmVudC50YWdOYW1lICE9PSAnRk9STScpIHtcbiAgICBwYXJlbnQgPSBmaW5kUGFyZW50Rm9ybShwYXJlbnQpO1xuICB9XG4gIHJldHVybiBwYXJlbnQ7XG59O1xuXG4vKipcbiAqIFRocm93IGFuIGVycm9yIGlmIHRoZSBlbGVtZW50IHJlZiBpcyBub3QgZm9ybSBhc3NvY2lhdGVkXG4gKiBAcGFyYW0gcmVmIHtJQ3VzdG9tRWxlbWVudH0gLSBUaGUgZWxlbWVudCB0byBjaGVjayBpZiBpdCBpcyBmb3JtIGFzc29jaWF0ZWRcbiAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IC0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdGhyb3dcbiAqIEBwYXJhbSBFcnJvclR5cGUge2FueX0gLSBUaGUgZXJyb3IgdHlwZSB0byB0aHJvdywgZGVmYXVsdHMgdG8gRE9NRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQgPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIG1lc3NhZ2U6IHN0cmluZyxcbiAgRXJyb3JUeXBlOiBhbnkgPSBET01FeGNlcHRpb25cbik6IHZvaWQgPT4ge1xuICBpZiAoIXJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgIHRocm93IG5ldyBFcnJvclR5cGUobWVzc2FnZSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIGZvciBlYWNoIEhUTUxGb3JtRWxlbWVudC5jaGVja1ZhbGlkaXR5fHJlcG9ydFZhbGlkaXR5XG4gKiB3aWxsIGxvb3Agb3ZlciBhIGZvcm0ncyBhZGRlZCBjb21wb25lbnRzIGFuZCBjYWxsIHRoZSByZXNwZWN0aXZlXG4gKiBtZXRob2QgbW9kaWZ5aW5nIHRoZSBkZWZhdWx0IHJldHVybiB2YWx1ZSBpZiBuZWVkZWRcbiAqIEBwYXJhbSBmb3JtIHtIVE1MRm9ybUVsZW1lbnR9IC0gVGhlIGZvcm0gZWxlbWVudCB0byBydW4gdGhlIG1ldGhvZCBvblxuICogQHBhcmFtIHJldHVyblZhbHVlIHtib29sZWFufSAtIFRoZSBpbml0aWFsIHJlc3VsdCBvZiB0aGUgb3JpZ2luYWwgbWV0aG9kXG4gKiBAcGFyYW0gbWV0aG9kIHsnY2hlY2tWYWxpZGl0eSd8J3JlcG9ydFZhbGlkaXR5J30gLSBUaGUgb3JpZ2luYWwgbWV0aG9kXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVGhlIGZvcm0ncyB2YWxpZGl0eSBzdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgb3ZlcnJpZGVGb3JtTWV0aG9kID0gKFxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnQsXG4gIHJldHVyblZhbHVlOiBib29sZWFuLFxuICBtZXRob2Q6ICdjaGVja1ZhbGlkaXR5JyB8ICdyZXBvcnRWYWxpZGl0eSdcbik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSk7XG5cbiAgLyoqIFNvbWUgZm9ybXMgd29uJ3QgY29udGFpbiBmb3JtIGFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnRzICovXG4gIGlmIChlbGVtZW50cyAmJiBlbGVtZW50cy5zaXplKSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChlbGVtZW50KTtcbiAgICAgIGNvbnN0IHZhbGlkID0gaW50ZXJuYWxzW21ldGhvZF0oKTtcbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xuXG4vKipcbiAqIFdpbGwgdXBncmFkZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIGJ5IGluaXRpYWxpemluZyB0aGVcbiAqIGluc3RhbmNlJ3MgZm9ybSBhbmQgbGFiZWxzLiBUaGlzIGlzIGNhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGlzXG4gKiBlaXRoZXIgY29uc3RydWN0ZWQgb3IgYXBwZW5kZWQgZnJvbSBhIERvY3VtZW50RnJhZ21lbnRcbiAqIEBwYXJhbSByZWYge0lDdXN0b21FbGVtZW50fSAtIFRoZSBjdXN0b20gZWxlbWVudCB0byB1cGdyYWRlXG4gKi9cbmV4cG9ydCBjb25zdCB1cGdyYWRlSW50ZXJuYWxzID0gKHJlZjogSUN1c3RvbUVsZW1lbnQpID0+IHtcbiAgaWYgKHJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQocmVmKTtcbiAgICBjb25zdCB7IGxhYmVscywgZm9ybSB9ID0gaW50ZXJuYWxzO1xuICAgIGluaXRMYWJlbHMocmVmLCBsYWJlbHMpO1xuICAgIGluaXRGb3JtKHJlZiwgZm9ybSwgaW50ZXJuYWxzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayB0byBzZWUgaWYgTXV0YXRpb25PYnNlcnZlciBleGlzdHMgaW4gdGhlIGN1cnJlbnRcbiAqIGV4ZWN1dGlvbiBjb250ZXh0LiBXaWxsIGxpa2VseSByZXR1cm4gZmFsc2Ugb24gdGhlIHNlcnZlclxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdXRhdGlvbk9ic2VydmVyRXhpc3RzKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xufVxuIiwgImltcG9ydCB7IHNldEZvcm1WYWxpZGl0eSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKiogRW11bGF0ZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgVmFsaWRpdHlTdGF0ZSBvYmplY3QgKi9cbmV4cG9ydCBjbGFzcyBWYWxpZGl0eVN0YXRlIGltcGxlbWVudHMgZ2xvYmFsVGhpcy5WYWxpZGl0eVN0YXRlIHtcbiAgYmFkSW5wdXQgPSBmYWxzZTtcbiAgY3VzdG9tRXJyb3IgPSBmYWxzZTtcbiAgcGF0dGVybk1pc21hdGNoID0gZmFsc2U7XG4gIHJhbmdlT3ZlcmZsb3cgPSBmYWxzZTtcbiAgcmFuZ2VVbmRlcmZsb3cgPSBmYWxzZTtcbiAgc3RlcE1pc21hdGNoID0gZmFsc2U7XG4gIHRvb0xvbmcgPSBmYWxzZTtcbiAgdG9vU2hvcnQgPSBmYWxzZTtcbiAgdHlwZU1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkID0gdHJ1ZTtcbiAgdmFsdWVNaXNzaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgT2JqZWN0LnNlYWwodGhpcyk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldCBhIFZhbGlkaXR5U3RhdGUgb2JqZWN0IGJhY2sgdG8gdmFsaWRcbiAqIEBwYXJhbSB7VmFsaWRpdHlTdGF0ZX0gdmFsaWRpdHlPYmplY3QgLSBUaGUgb2JqZWN0IHRvIG1vZGlmeVxuICogQHJldHVybiB7VmFsaWRpdHlTdGF0ZX0gLSBUaGUgbW9kaWZpZWQgVmFsaWRpdHlTdGF0ZU9iamVjdFxuICovXG5leHBvcnQgY29uc3Qgc2V0VmFsaWQgPSAodmFsaWRpdHlPYmplY3Q6IFZhbGlkaXR5U3RhdGUpOiBWYWxpZGl0eVN0YXRlID0+IHtcbiAgdmFsaWRpdHlPYmplY3QuYmFkSW5wdXQgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QuY3VzdG9tRXJyb3IgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QucGF0dGVybk1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnJhbmdlT3ZlcmZsb3cgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QucmFuZ2VVbmRlcmZsb3cgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3Quc3RlcE1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnRvb0xvbmcgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QudG9vU2hvcnQgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QudHlwZU1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnZhbGlkID0gdHJ1ZTtcbiAgdmFsaWRpdHlPYmplY3QudmFsdWVNaXNzaW5nID0gZmFsc2U7XG4gIHJldHVybiB2YWxpZGl0eU9iamVjdDtcbn07XG5cbi8qKlxuICogUmVjb25jaWxlIGEgVmFsaWRpdHlTdGF0ZSBvYmplY3Qgd2l0aCBhIG5ldyBzdGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7VmFsaWRpdHlTdGF0ZX0gLSBUaGUgYmFzZSBvYmplY3QgdG8gcmVjb25jaWxlIHdpdGggbmV3IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gLSBBIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3QgdG8gb3ZlcnJpZGUgdGhlIG9yaWdpbmFsXG4gKiBAcmV0dXJuIHtWYWxpZGl0eVN0YXRlfSAtIFRoZSB1cGRhdGVkIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCByZWNvbmNpbGVWYWxpZGl0eSA9IChcbiAgdmFsaWRpdHlPYmplY3Q6IFZhbGlkaXR5U3RhdGUsXG4gIG5ld1N0YXRlOiBQYXJ0aWFsPFZhbGlkaXR5U3RhdGU+LFxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnRcbik6IFZhbGlkaXR5U3RhdGUgPT4ge1xuICB2YWxpZGl0eU9iamVjdC52YWxpZCA9IGlzVmFsaWQobmV3U3RhdGUpO1xuICBPYmplY3Qua2V5cyhuZXdTdGF0ZSkuZm9yRWFjaCgoa2V5KSA9PiAodmFsaWRpdHlPYmplY3Rba2V5XSA9IG5ld1N0YXRlW2tleV0pKTtcbiAgaWYgKGZvcm0pIHtcbiAgICBzZXRGb3JtVmFsaWRpdHkoZm9ybSk7XG4gIH1cbiAgcmV0dXJuIHZhbGlkaXR5T2JqZWN0O1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3Qgc2hvdWxkIGJlIHZhbGlkXG4gKiBAcGFyYW0ge09iamVjdH0gLSBBIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IC0gU2hvdWxkIHRoZSBuZXcgb2JqZWN0IGJlIHZhbGlkXG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkID0gKHZhbGlkaXR5U3RhdGU6IFBhcnRpYWw8VmFsaWRpdHlTdGF0ZT4pOiBib29sZWFuID0+IHtcbiAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgZm9yIChsZXQga2V5IGluIHZhbGlkaXR5U3RhdGUpIHtcbiAgICBpZiAoa2V5ICE9PSAndmFsaWQnICYmIHZhbGlkaXR5U3RhdGVba2V5XSAhPT0gZmFsc2UpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWxpZDtcbn07XG4iLCAiaW1wb3J0IHsgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuLyoqIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIHJlZiBmb3IgdGVoIEN1c3RvbVN0YXRlU2V0ICovXG5jb25zdCBjdXN0b21TdGF0ZU1hcCA9IG5ldyBXZWFrTWFwPEN1c3RvbVN0YXRlU2V0LCBJQ3VzdG9tRWxlbWVudD4oKTtcblxuZnVuY3Rpb24gYWRkU3RhdGUocmVmOiBJQ3VzdG9tRWxlbWVudCwgc3RhdGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgcmVmLnRvZ2dsZUF0dHJpYnV0ZShzdGF0ZU5hbWUsIHRydWUpO1xuICBpZiAocmVmLnBhcnQpIHtcbiAgICByZWYucGFydC5hZGQoc3RhdGVOYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDdXN0b21TdGF0ZSA9IGAtLSR7c3RyaW5nfWA7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21TdGF0ZVNldCBleHRlbmRzIFNldDxDdXN0b21TdGF0ZT4ge1xuICBzdGF0aWMgZ2V0IGlzUG9seWZpbGxlZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJlZjogSUN1c3RvbUVsZW1lbnQpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghcmVmIHx8ICFyZWYudGFnTmFtZSB8fCByZWYudGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbGxlZ2FsIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuXG4gICAgY3VzdG9tU3RhdGVNYXAuc2V0KHRoaXMsIHJlZik7XG4gIH1cblxuICBhZGQoc3RhdGU6IEN1c3RvbVN0YXRlKSB7XG4gICAgaWYgKCEvXi0tLy50ZXN0KHN0YXRlKSB8fCB0eXBlb2Ygc3RhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ2FkZCcgb24gJ0N1c3RvbVN0YXRlU2V0JzogVGhlIHNwZWNpZmllZCB2YWx1ZSAke3N0YXRlfSBtdXN0IHN0YXJ0IHdpdGggJy0tJy5gXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5hZGQoc3RhdGUpO1xuICAgIGNvbnN0IHJlZiA9IGN1c3RvbVN0YXRlTWFwLmdldCh0aGlzKTtcbiAgICBjb25zdCBzdGF0ZU5hbWUgPSBgc3RhdGUke3N0YXRlfWA7XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IGFkZCB0aGUgc3RhdGUgaW1tZWRpYXRlbHkgaWYgdGhlIHJlZiBpcyBjb25uZWN0ZWQgdG8gdGhlIERPTTtcbiAgICAgKiBvdGhlcndpc2UsIHdhaXQgYSB0aWNrIGJlY2F1c2UgdGhlIGVsZW1lbnQgaXMgbGlrZWx5IGJlaW5nIGNvbnN0cnVjdGVkXG4gICAgICogYnkgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBhbmQgd291bGQgdGhyb3cgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgIGFkZFN0YXRlKHJlZiwgc3RhdGVOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFkZFN0YXRlKHJlZiwgc3RhdGVOYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBmb3IgKGxldCBbZW50cnldIG9mIHRoaXMuZW50cmllcygpKSB7XG4gICAgICB0aGlzLmRlbGV0ZShlbnRyeSk7XG4gICAgfVxuICAgIHN1cGVyLmNsZWFyKCk7XG4gIH1cblxuICBkZWxldGUoc3RhdGU6IEN1c3RvbVN0YXRlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuZGVsZXRlKHN0YXRlKTtcbiAgICBjb25zdCByZWYgPSBjdXN0b21TdGF0ZU1hcC5nZXQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHRvZ2dsZSB0aGUgc3RhdGUvYXR0ciBpbW1lZGlhdGVseSBpZiB0aGUgcmVmIGlzIGNvbm5lY3RlZCB0byB0aGUgRE9NO1xuICAgICAqIG90aGVyd2lzZSwgd2FpdCBhIHRpY2sgYmVjYXVzZSB0aGUgZWxlbWVudCBpcyBsaWtlbHkgYmVpbmcgY29uc3RydWN0ZWRcbiAgICAgKiBieSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGFuZCB3b3VsZCB0aHJvdyBvdGhlcndpc2UuXG4gICAgICovXG4gICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZShgc3RhdGUke3N0YXRlfWAsIGZhbHNlKTtcbiAgICAgIGlmIChyZWYucGFydCkge1xuICAgICAgICByZWYucGFydC5yZW1vdmUoYHN0YXRlJHtzdGF0ZX1gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoYHN0YXRlJHtzdGF0ZX1gLCBmYWxzZSk7XG4gICAgICAgIGlmIChyZWYucGFydCkge1xuICAgICAgICAgIHJlZi5wYXJ0LnJlbW92ZShgc3RhdGUke3N0YXRlfWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCAiZXhwb3J0IGNsYXNzIEhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uIGltcGxlbWVudHMgZ2xvYmFsVGhpcy5IVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbiB7XG4gIHJlYWRvbmx5ICNlbGVtZW50cztcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgIHRoaXMuI2VsZW1lbnRzID0gZWxlbWVudHM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgICB0aGlzW2ldID0gZWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgIHRoaXNbZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKV0gPSBlbGVtZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBbaW5kZXg6IG51bWJlcl06IEVsZW1lbnQ7XG5cbiAgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLiNlbGVtZW50cy5sZW5ndGg7XG4gIH1cblxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gdGhpcy4jZWxlbWVudHNbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICB9XG5cbiAgaXRlbShpKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXNbaV0gPT0gbnVsbCA/IG51bGwgOiB0aGlzW2ldO1xuICB9XG5cbiAgbmFtZWRJdGVtKG5hbWUpOiBFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpc1tuYW1lXSA9PSBudWxsID8gbnVsbCA6IHRoaXNbbmFtZV07XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbiB9IGZyb20gJy4vSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24uanMnO1xuaW1wb3J0IHsgZm9ybUVsZW1lbnRzTWFwIH0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IG92ZXJyaWRlRm9ybU1ldGhvZCB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFBhdGNoIHRoZSBIVE1MRWxlbWVudCBwcm90b3R5cGVcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHBhdGNoZXMgY2hlY2tWYWxpZGl0eSwgcmVwb3J0VmFsaWRpdHkgYW5kIGVsZW1lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEZvcm1Qcm90b3R5cGUoKTogdm9pZCB7XG4gIGNvbnN0IGNoZWNrVmFsaWRpdHkgPSBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmNoZWNrVmFsaWRpdHk7XG4gIEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUuY2hlY2tWYWxpZGl0eSA9IGNoZWNrVmFsaWRpdHlPdmVycmlkZTtcblxuICBjb25zdCByZXBvcnRWYWxpZGl0eSA9IEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUucmVwb3J0VmFsaWRpdHk7XG4gIEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUucmVwb3J0VmFsaWRpdHkgPSByZXBvcnRWYWxpZGl0eU92ZXJyaWRlO1xuXG4gIGZ1bmN0aW9uIGNoZWNrVmFsaWRpdHlPdmVycmlkZSguLi5hcmdzKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldHVyblZhbHVlID0gY2hlY2tWYWxpZGl0eS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICByZXR1cm4gb3ZlcnJpZGVGb3JtTWV0aG9kKHRoaXMsIHJldHVyblZhbHVlLCAnY2hlY2tWYWxpZGl0eScpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwb3J0VmFsaWRpdHlPdmVycmlkZSguLi5hcmdzKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldHVyblZhbHVlID0gcmVwb3J0VmFsaWRpdHkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgcmV0dXJuIG92ZXJyaWRlRm9ybU1ldGhvZCh0aGlzLCByZXR1cm5WYWx1ZSwgJ3JlcG9ydFZhbGlkaXR5Jyk7XG4gIH1cblxuICBjb25zdCB7IGdldCB9ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLCAnZWxlbWVudHMnKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUsICdlbGVtZW50cycsIHtcbiAgICBnZXQoLi4uYXJncykge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBnZXQuY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgICAgIGNvbnN0IHBvbHlmaWxsZWRFbGVtZW50cyA9IEFycmF5LmZyb20oZm9ybUVsZW1lbnRzTWFwLmdldCh0aGlzKSB8fCBbXSk7XG5cbiAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBwb2x5ZmlsbGVkIGVsZW1lbnRzLCByZXR1cm4gdGhlIG5hdGl2ZSBlbGVtZW50cyBjb2xsZWN0aW9uXG4gICAgICBpZiAocG9seWZpbGxlZEVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgICB9XG5cbiAgICAgIC8vIE1lcmdlIHRoZSBuYXRpdmUgZWxlbWVudHMgd2l0aCB0aGUgcG9seWZpbGxlZCBlbGVtZW50c1xuICAgICAgLy8gYW5kIG9yZGVyIHRoZW0gYnkgdGhlaXIgcG9zaXRpb24gaW4gdGhlIERPTVxuICAgICAgY29uc3Qgb3JkZXJlZEVsZW1lbnRzID0gQXJyYXkuZnJvbShlbGVtZW50cylcbiAgICAgICAgLmNvbmNhdChwb2x5ZmlsbGVkRWxlbWVudHMpXG4gICAgICAgIC5zb3J0KChhOiBFbGVtZW50LCBiOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpICYgMiA/IDEgOiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmV3IEhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uKG9yZGVyZWRFbGVtZW50cyk7XG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgY29ubmVjdGVkQ2FsbGJhY2tNYXAsXG4gIGludGVybmFsc01hcCxcbiAgcmVmTWFwLFxuICByZWZWYWx1ZU1hcCxcbiAgc2hhZG93SG9zdHNNYXAsXG4gIHNoYWRvd1Jvb3RNYXAsXG4gIHZhbGlkYXRpb25BbmNob3JNYXAsXG4gIHZhbGlkaXR5TWFwLFxuICB2YWxpZGF0aW9uTWVzc2FnZU1hcCxcbiAgdmFsaWRpdHlVcGdyYWRlTWFwLFxufSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlSGlkZGVuSW5wdXQsXG4gIGZpbmRQYXJlbnRGb3JtLFxuICBpbml0UmVmLFxuICBtdXRhdGlvbk9ic2VydmVyRXhpc3RzLFxuICByZW1vdmVIaWRkZW5JbnB1dHMsXG4gIHNldERpc2FibGVkLFxuICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQsXG4gIHVwZ3JhZGVJbnRlcm5hbHMsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgaW5pdEFvbSB9IGZyb20gJy4vYW9tLmpzJztcbmltcG9ydCB7IFZhbGlkaXR5U3RhdGUsIHJlY29uY2lsZVZhbGlkaXR5LCBzZXRWYWxpZCB9IGZyb20gJy4vVmFsaWRpdHlTdGF0ZS5qcyc7XG5pbXBvcnQgeyBkZWZlclVwZ3JhZGUsIG9ic2VydmVyQ2FsbGJhY2ssIG9ic2VydmVyQ29uZmlnIH0gZnJvbSAnLi9tdXRhdGlvbi1vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgSUVsZW1lbnRJbnRlcm5hbHMsIElDdXN0b21FbGVtZW50LCBMYWJlbHNMaXN0IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5pbXBvcnQgeyBDdXN0b21TdGF0ZVNldCB9IGZyb20gJy4vQ3VzdG9tU3RhdGVTZXQuanMnO1xuaW1wb3J0IHsgcGF0Y2hGb3JtUHJvdG90eXBlIH0gZnJvbSAnLi9wYXRjaC1mb3JtLXByb3RvdHlwZS5qcyc7XG5pbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gJ2xpdC1odG1sL2lzLXNlcnZlci5qcyc7XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50SW50ZXJuYWxzIGltcGxlbWVudHMgSUVsZW1lbnRJbnRlcm5hbHMge1xuICBhcmlhQXRvbWljOiBzdHJpbmc7XG4gIGFyaWFBdXRvQ29tcGxldGU6IHN0cmluZztcbiAgYXJpYUJ1c3k6IHN0cmluZztcbiAgYXJpYUNoZWNrZWQ6IHN0cmluZztcbiAgYXJpYUNvbENvdW50OiBzdHJpbmc7XG4gIGFyaWFDb2xJbmRleDogc3RyaW5nO1xuICBhcmlhQ29sSW5kZXhUZXh0OiBzdHJpbmc7XG4gIGFyaWFDb2xTcGFuOiBzdHJpbmc7XG4gIGFyaWFDdXJyZW50OiBzdHJpbmc7XG4gIGFyaWFEaXNhYmxlZDogc3RyaW5nO1xuICBhcmlhRXhwYW5kZWQ6IHN0cmluZztcbiAgYXJpYUhhc1BvcHVwOiBzdHJpbmc7XG4gIGFyaWFIaWRkZW46IHN0cmluZztcbiAgYXJpYUludmFsaWQ6IHN0cmluZztcbiAgYXJpYUtleVNob3J0Y3V0czogc3RyaW5nO1xuICBhcmlhTGFiZWw6IHN0cmluZztcbiAgYXJpYUxldmVsOiBzdHJpbmc7XG4gIGFyaWFMaXZlOiBzdHJpbmc7XG4gIGFyaWFNb2RhbDogc3RyaW5nO1xuICBhcmlhTXVsdGlMaW5lOiBzdHJpbmc7XG4gIGFyaWFNdWx0aVNlbGVjdGFibGU6IHN0cmluZztcbiAgYXJpYU9yaWVudGF0aW9uOiBzdHJpbmc7XG4gIGFyaWFQbGFjZWhvbGRlcjogc3RyaW5nO1xuICBhcmlhUG9zSW5TZXQ6IHN0cmluZztcbiAgYXJpYVByZXNzZWQ6IHN0cmluZztcbiAgYXJpYVJlYWRPbmx5OiBzdHJpbmc7XG4gIGFyaWFSZWxldmFudDogc3RyaW5nO1xuICBhcmlhUmVxdWlyZWQ6IHN0cmluZztcbiAgYXJpYVJvbGVEZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhcmlhUm93Q291bnQ6IHN0cmluZztcbiAgYXJpYVJvd0luZGV4OiBzdHJpbmc7XG4gIGFyaWFSb3dJbmRleFRleHQ6IHN0cmluZztcbiAgYXJpYVJvd1NwYW46IHN0cmluZztcbiAgYXJpYVNlbGVjdGVkOiBzdHJpbmc7XG4gIGFyaWFTZXRTaXplOiBzdHJpbmc7XG4gIGFyaWFTb3J0OiBzdHJpbmc7XG4gIGFyaWFWYWx1ZU1heDogc3RyaW5nO1xuICBhcmlhVmFsdWVNaW46IHN0cmluZztcbiAgYXJpYVZhbHVlTm93OiBzdHJpbmc7XG4gIGFyaWFWYWx1ZVRleHQ6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuXG4gIHN0YXRlczogQ3VzdG9tU3RhdGVTZXQ7XG5cbiAgc3RhdGljIGdldCBpc1BvbHlmaWxsZWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyZWY6IElDdXN0b21FbGVtZW50KSB7XG4gICAgaWYgKCFyZWYgfHwgIXJlZi50YWdOYW1lIHx8IHJlZi50YWdOYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0lsbGVnYWwgY29uc3RydWN0b3InKTtcbiAgICB9XG4gICAgY29uc3Qgcm9vdE5vZGUgPSByZWYuZ2V0Um9vdE5vZGUoKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IG5ldyBWYWxpZGl0eVN0YXRlKCk7XG4gICAgdGhpcy5zdGF0ZXMgPSBuZXcgQ3VzdG9tU3RhdGVTZXQocmVmKTtcbiAgICByZWZNYXAuc2V0KHRoaXMsIHJlZik7XG4gICAgdmFsaWRpdHlNYXAuc2V0KHRoaXMsIHZhbGlkaXR5KTtcbiAgICBpbnRlcm5hbHNNYXAuc2V0KHJlZiwgdGhpcyk7XG4gICAgaW5pdEFvbShyZWYsIHRoaXMpO1xuICAgIGluaXRSZWYocmVmLCB0aGlzKTtcbiAgICBPYmplY3Quc2VhbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIElmIGFwcGVuZGVkIGZyb20gYSBEb2N1bWVudEZyYWdtZW50LCB3YWl0IHVudGlsIGl0IGlzIGNvbm5lY3RlZFxuICAgICAqIGJlZm9yZSBhdHRlbXB0aW5nIHRvIHVwZ3JhZGUgdGhlIGludGVybmFscyBpbnN0YW5jZVxuICAgICAqL1xuICAgIGlmIChyb290Tm9kZSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgIGRlZmVyVXBncmFkZShyb290Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgaW4gYSB2YWxpZCBzdGF0ZVxuICAgKi9cbiAgY2hlY2tWYWxpZGl0eSgpOiBib29sZWFuIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnY2hlY2tWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIC8qKiBJZiB0aGUgZWxlbWVudCB3aWxsIG5vdCB2YWxpZGF0ZSwgaXQgaXMgbmVjZXNzYXJpbHkgdmFsaWQgYnkgZGVmYXVsdCAqL1xuICAgIGlmICghdGhpcy53aWxsVmFsaWRhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICBpZiAoIXZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBjb25zdCB2YWxpZGl0eUV2ZW50ID0gbmV3IEV2ZW50KCdpbnZhbGlkJywge1xuICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgY29tcG9zZWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICByZWYuZGlzcGF0Y2hFdmVudCh2YWxpZGl0eUV2ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkaXR5LnZhbGlkO1xuICB9XG5cbiAgLyoqIFRoZSBmb3JtIGVsZW1lbnQgdGhlIGN1c3RvbSBlbGVtZW50IGlzIGFzc29jaWF0ZWQgd2l0aCAqL1xuICBnZXQgZm9ybSgpOiBIVE1MRm9ybUVsZW1lbnQge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAnZm9ybScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgbGV0IGZvcm07XG4gICAgaWYgKHJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSA9PT0gdHJ1ZSkge1xuICAgICAgZm9ybSA9IGZpbmRQYXJlbnRGb3JtKHJlZik7XG4gICAgfVxuICAgIHJldHVybiBmb3JtO1xuICB9XG5cbiAgLyoqIEEgbGlzdCBvZiBhbGwgcmVsYXRpdmUgZm9ybSBsYWJlbHMgZm9yIHRoaXMgZWxlbWVudCAqL1xuICBnZXQgbGFiZWxzKCk6IExhYmVsc0xpc3Qge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAnbGFiZWxzJyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBjb25zdCBpZCA9IHJlZi5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgY29uc3QgaG9zdFJvb3QgPSByZWYuZ2V0Um9vdE5vZGUoKSBhcyBFbGVtZW50O1xuICAgIGlmIChob3N0Um9vdCAmJiBpZCkge1xuICAgICAgcmV0dXJuIGhvc3RSb290LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTExhYmVsRWxlbWVudD4oYFtmb3I9XCIke2lkfVwiXWApIGFzIHVua25vd24gYXMgTGFiZWxzTGlzdDtcbiAgICB9XG4gICAgcmV0dXJuIFtdIGFzIHVua25vd24gYXMgTGFiZWxzTGlzdDtcbiAgfVxuXG4gIC8qKiBXaWxsIHJlcG9ydCB0aGUgZWxlbWVudHMgdmFsaWRpdHkgc3RhdGUgKi9cbiAgcmVwb3J0VmFsaWRpdHkoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3JlcG9ydFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgLyoqIElmIHRoZSBlbGVtZW50IHdpbGwgbm90IHZhbGlkYXRlLCBpdCBpcyB2YWxpZCBieSBkZWZhdWx0ICovXG4gICAgaWYgKCF0aGlzLndpbGxWYWxpZGF0ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHZhbGlkID0gdGhpcy5jaGVja1ZhbGlkaXR5KCk7XG4gICAgY29uc3QgYW5jaG9yID0gdmFsaWRhdGlvbkFuY2hvck1hcC5nZXQodGhpcyk7XG4gICAgaWYgKGFuY2hvciAmJiAhcmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3JlcG9ydFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCF2YWxpZCAmJiBhbmNob3IpIHtcbiAgICAgIHJlZi5mb2N1cygpO1xuICAgICAgYW5jaG9yLmZvY3VzKCk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBlbGVtZW50J3MgdmFsdWUgd2l0aGluIHRoZSBmb3JtICovXG4gIHNldEZvcm1WYWx1ZSh2YWx1ZTogc3RyaW5nIHwgRm9ybURhdGEgfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldEZvcm1WYWx1ZScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIHJlbW92ZUhpZGRlbklucHV0cyh0aGlzKTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpKSB7XG4gICAgICBpZiAocmVmLmdldEF0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgIGNvbnN0IGhpZGRlbklucHV0ID0gY3JlYXRlSGlkZGVuSW5wdXQocmVmLCB0aGlzKTtcbiAgICAgICAgaGlkZGVuSW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgQXJyYXkuZnJvbSh2YWx1ZSlcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAuZm9yRWFjaCgoW2Zvcm1EYXRhS2V5LCBmb3JtRGF0YVZhbHVlXSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgZm9ybURhdGFWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGhpZGRlbklucHV0ID0gY3JlYXRlSGlkZGVuSW5wdXQocmVmLCB0aGlzKTtcbiAgICAgICAgICAgIGhpZGRlbklucHV0Lm5hbWUgPSBmb3JtRGF0YUtleTtcbiAgICAgICAgICAgIGhpZGRlbklucHV0LnZhbHVlID0gZm9ybURhdGFWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWZWYWx1ZU1hcC5zZXQocmVmLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZWxlbWVudCdzIHZhbGlkaXR5LiBUaGUgZmlyc3QgYXJndW1lbnQgaXMgYSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gICAqIHJlZmxlY3RpbmcgdGhlIGNoYW5nZXMgdG8gYmUgbWFkZSB0byB0aGUgZWxlbWVudCdzIHZhbGlkaXR5LiBJZiB0aGUgZWxlbWVudCBpcyBpbnZhbGlkLFxuICAgKiB0aGUgc2Vjb25kIGFyZ3VtZW50IHNldHMgdGhlIGVsZW1lbnQncyB2YWxpZGF0aW9uIG1lc3NhZ2UuXG4gICAqXG4gICAqIElmIHRoZSBmaWVsZCBpcyB2YWxpZCBhbmQgYSBtZXNzYWdlIGlzIHNwZWNpZmllZCwgdGhlIG1ldGhvZCB3aWxsIHRocm93IGEgVHlwZUVycm9yLlxuICAgKi9cbiAgc2V0VmFsaWRpdHkoXG4gICAgdmFsaWRpdHlDaGFuZ2VzOiBQYXJ0aWFsPGdsb2JhbFRoaXMuVmFsaWRpdHlTdGF0ZT4sXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2U/OiBzdHJpbmcsXG4gICAgYW5jaG9yPzogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgaWYgKCF2YWxpZGl0eUNoYW5nZXMpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgdmFsaWRhdGlvbkFuY2hvck1hcC5zZXQodGhpcywgYW5jaG9yKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICBjb25zdCB2YWxpZGl0eUNoYW5nZXNPYmo6IFBhcnRpYWw8VmFsaWRpdHlTdGF0ZT4gPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWxpZGl0eUNoYW5nZXMpIHtcbiAgICAgIHZhbGlkaXR5Q2hhbmdlc09ialtrZXldID0gdmFsaWRpdHlDaGFuZ2VzW2tleV07XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyh2YWxpZGl0eUNoYW5nZXNPYmopLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0VmFsaWQodmFsaWRpdHkpO1xuICAgIH1cbiAgICBjb25zdCBjaGVjayA9IHsgLi4udmFsaWRpdHksIC4uLnZhbGlkaXR5Q2hhbmdlc09iaiB9O1xuICAgIGRlbGV0ZSBjaGVjay52YWxpZDtcbiAgICBjb25zdCB7IHZhbGlkIH0gPSByZWNvbmNpbGVWYWxpZGl0eSh2YWxpZGl0eSwgY2hlY2ssIHRoaXMuZm9ybSk7XG5cbiAgICBpZiAoIXZhbGlkICYmICF2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdzZXRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgc2Vjb25kIGFyZ3VtZW50IHNob3VsZCBub3QgYmUgZW1wdHkgaWYgb25lIG9yIG1vcmUgZmxhZ3MgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IGFyZSB0cnVlLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHZhbGlkYXRpb25NZXNzYWdlTWFwLnNldCh0aGlzLCB2YWxpZCA/ICcnIDogdmFsaWRhdGlvbk1lc3NhZ2UpO1xuXG4gICAgLy8gY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBob3N0IGVsZW1lbnQgaXMgY29ubmVjdGVkIGJlZm9yZSBhZGRpbmcgYXR0cmlidXRlc1xuICAgIC8vIGJlY2F1c2Ugc2FmYXJpIGRvZXNudCBhbGxvdyBlbGVtZW50cyB0byBoYXZlIGF0dHJpYnV0ZXMgYWRkZWQgaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLWludmFsaWQnLCAhdmFsaWQpO1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgdmFsaWQpO1xuICAgICAgcmVmLnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgYCR7IXZhbGlkfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGl0eVVwZ3JhZGVNYXAuc2V0KHJlZiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNoYWRvd1Jvb3QoKTogU2hhZG93Um9vdCB8IG51bGwge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IHNoYWRvd1Jvb3RNYXAuZ2V0KHJlZik7XG4gICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgIHJldHVybiBzaGFkb3dSb290O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBUaGUgZWxlbWVudCdzIHZhbGlkYXRpb24gbWVzc2FnZSBzZXQgZHVyaW5nIGEgY2FsbCB0byBFbGVtZW50SW50ZXJuYWxzLnNldFZhbGlkaXR5ICovXG4gIGdldCB2YWxpZGF0aW9uTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAndmFsaWRhdGlvbk1lc3NhZ2UnIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIHJldHVybiB2YWxpZGF0aW9uTWVzc2FnZU1hcC5nZXQodGhpcyk7XG4gIH1cblxuICAvKiogVGhlIGN1cnJlbnQgdmFsaWRpdHkgc3RhdGUgb2YgdGhlIG9iamVjdCAqL1xuICBnZXQgdmFsaWRpdHkoKTogZ2xvYmFsVGhpcy5WYWxpZGl0eVN0YXRlIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ3ZhbGlkaXR5JyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICByZXR1cm4gdmFsaWRpdHk7XG4gIH1cblxuICAvKiogSWYgdHJ1ZSB0aGUgZWxlbWVudCB3aWxsIHBhcnRpY2lwYXRlIGluIGEgZm9ybSdzIGNvbnN0cmFpbnQgdmFsaWRhdGlvbi4gKi9cbiAgZ2V0IHdpbGxWYWxpZGF0ZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ3dpbGxWYWxpZGF0ZScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgaWYgKHJlZi5kaXNhYmxlZCB8fCByZWYuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IHJlZi5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5JykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLy8gLS0tIERpc2FibGluZyB0aGlzIHR5cGUgZGVjbGFyYXRpb24gdG8gYXZvaWQgY29uZmxpY3Qgd2l0aCBleHRlcm5hbCBlbGVtZW50LWludGVybmFscy1wb2x5ZmlsbCB0eXBlcyAtLS1cbi8vIGRlY2xhcmUgZ2xvYmFsIHtcbi8vICAgaW50ZXJmYWNlIEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3RvciB7XG4vLyAgICAgZm9ybUFzc29jaWF0ZWQ/OiBib29sZWFuO1xuLy8gICB9XG5cbi8vICAgaW50ZXJmYWNlIFdpbmRvdyB7XG4vLyAgICAgRWxlbWVudEludGVybmFsczogdHlwZW9mIEVsZW1lbnRJbnRlcm5hbHM7XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudEludGVybmFsc1N1cHBvcnRlZCgpOiBib29sZWFuIHtcbiAgaWYgKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgIXdpbmRvdy5FbGVtZW50SW50ZXJuYWxzIHx8XG4gICAgIUhUTUxFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hJbnRlcm5hbHNcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2xhc3MgRWxlbWVudEludGVybmFsc0ZlYXR1cmVEZXRlY3Rpb24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuaW50ZXJuYWxzID0gdGhpcy5hdHRhY2hJbnRlcm5hbHMoKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcmFuZG9tTmFtZSA9IGBlbGVtZW50LWludGVybmFscy1mZWF0dXJlLWRldGVjdGlvbi0ke01hdGgucmFuZG9tKClcbiAgICAudG9TdHJpbmcoMzYpXG4gICAgLnJlcGxhY2UoL1teYS16XSsvZywgJycpfWA7XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZShyYW5kb21OYW1lLCBFbGVtZW50SW50ZXJuYWxzRmVhdHVyZURldGVjdGlvbik7XG4gIGNvbnN0IGZlYXR1cmVEZXRlY3Rpb25FbGVtZW50ID0gbmV3IEVsZW1lbnRJbnRlcm5hbHNGZWF0dXJlRGV0ZWN0aW9uKCk7XG4gIHJldHVybiBbXG4gICAgJ3NoYWRvd1Jvb3QnLFxuICAgICdmb3JtJyxcbiAgICAnd2lsbFZhbGlkYXRlJyxcbiAgICAndmFsaWRpdHknLFxuICAgICd2YWxpZGF0aW9uTWVzc2FnZScsXG4gICAgJ2xhYmVscycsXG4gICAgJ3NldEZvcm1WYWx1ZScsXG4gICAgJ3NldFZhbGlkaXR5JyxcbiAgICAnY2hlY2tWYWxpZGl0eScsXG4gICAgJ3JlcG9ydFZhbGlkaXR5JyxcbiAgXS5ldmVyeSgocHJvcCkgPT4gcHJvcCBpbiBmZWF0dXJlRGV0ZWN0aW9uRWxlbWVudC5pbnRlcm5hbHMpO1xufVxuXG4vLyBPbmx5IGluY2x1ZGVzIHRoaXMgcG9seWZpbGwgaWYgd2UgYXJlIGluIGEgamVzdCBydW5uZXIgb3Igbm90IGluIFNTUlxuaWYgKFxuICAhaXNTZXJ2ZXIgfHxcbiAgKChwcm9jZXNzIGFzIGFueSk/LmVudi5KRVNUX1dPUktFUl9JRCAhPT0gdW5kZWZpbmVkICYmIChwcm9jZXNzIGFzIGFueSk/LmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKVxuKSB7XG4gIGlmICghaXNFbGVtZW50SW50ZXJuYWxzU3VwcG9ydGVkKCkpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8qKiBAdHMtZXhwZWN0LWVycm9yOiB3ZSBuZWVkIHRvIHJlcGxhY2UgdGhlIGRlZmF1bHQgRWxlbWVudEludGVybmFscyAqL1xuICAgICAgd2luZG93LkVsZW1lbnRJbnRlcm5hbHMgPSBFbGVtZW50SW50ZXJuYWxzO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgZGVmaW5lID0gQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5kZWZpbmU7XG4gICAgICBDdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlLmRlZmluZSA9IGZ1bmN0aW9uIChuYW1lLCBjb25zdHJ1Y3Rvciwgb3B0aW9ucykge1xuICAgICAgICBpZiAoY29uc3RydWN0b3IuZm9ybUFzc29jaWF0ZWQpIHtcbiAgICAgICAgICBjb25zdCBjb25uZWN0ZWRDYWxsYmFjayA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaztcbiAgICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWNvbm5lY3RlZENhbGxiYWNrTWFwLmhhcyh0aGlzKSkge1xuICAgICAgICAgICAgICBjb25uZWN0ZWRDYWxsYmFja01hcC5zZXQodGhpcywgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgc2V0RGlzYWJsZWQodGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbm5lY3RlZENhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2suYXBwbHkodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhbHdheXMgdXBncmFkZUludGVybmFscyBpbiBjb25uZWN0ZWRDYWxsYmFjayBpbnN0ZWFkIG9mIGNvbnN0cnVjdG9yXG4gICAgICAgICAgICB1cGdyYWRlSW50ZXJuYWxzKHRoaXMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBkZWZpbmUuY2FsbCh0aGlzLCBuYW1lLCBjb25zdHJ1Y3Rvciwgb3B0aW9ucyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gYSBjdXN0b20gZWxlbWVudC4gQ2FsbGluZyB0aGlzIG1ldGhvZFxuICAgICAqIG9uIGEgYnVpbHQtaW4gZWxlbWVudCB3aWxsIHRocm93IGFuIGVycm9yLlxuICAgICAqL1xuICAgIGlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzID0gZnVuY3Rpb24gKCk6IElFbGVtZW50SW50ZXJuYWxzIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhZ05hbWUpIHtcbiAgICAgICAgICAvKiogVGhpcyBoYXBwZW5zIGluIHRoZSBMaXRTU1IgZW52aXJvbm1lbnQuIEhlcmUgd2UgY2FuIGdlbmVyYWxseSBpZ25vcmUgaW50ZXJuYWxzIGZvciBub3cgKi9cbiAgICAgICAgICByZXR1cm4ge30gYXMgb2JqZWN0IGFzIElFbGVtZW50SW50ZXJuYWxzO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdhdHRhY2hJbnRlcm5hbHMnIG9uICdIVE1MRWxlbWVudCc6IFVuYWJsZSB0byBhdHRhY2ggRWxlbWVudEludGVybmFscyB0byBub24tY3VzdG9tIGVsZW1lbnRzLmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnRlcm5hbHNNYXAuaGFzKHRoaXMpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgICAgIGBET01FeGNlcHRpb246IEZhaWxlZCB0byBleGVjdXRlICdhdHRhY2hJbnRlcm5hbHMnIG9uICdIVE1MRWxlbWVudCc6IEVsZW1lbnRJbnRlcm5hbHMgZm9yIHRoZSBzcGVjaWZpZWQgZWxlbWVudCB3YXMgYWxyZWFkeSBhdHRhY2hlZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnRJbnRlcm5hbHModGhpcykgYXMgSUVsZW1lbnRJbnRlcm5hbHM7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbm5lci1kZWNsYXJhdGlvbnNcbiAgICAgIGZ1bmN0aW9uIGF0dGFjaFNoYWRvd09ic2VydmVyKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGF0dGFjaFNoYWRvdy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgc2hhZG93Um9vdE1hcC5zZXQodGhpcywgc2hhZG93Um9vdCk7XG5cbiAgICAgICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKSkge1xuICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG4gICAgICAgICAgaWYgKHdpbmRvdy5TaGFkeURPTSkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCBvYnNlcnZlckNvbmZpZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2hhZG93Um9vdCwgb2JzZXJ2ZXJDb25maWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzaGFkb3dIb3N0c01hcC5zZXQodGhpcywgb2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGFkb3dSb290O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhdHRhY2hTaGFkb3cgPSBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3c7XG4gICAgICBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3cgPSBhdHRhY2hTaGFkb3dPYnNlcnZlcjtcbiAgICB9XG5cbiAgICBpZiAobXV0YXRpb25PYnNlcnZlckV4aXN0cygpKSB7XG4gICAgICBjb25zdCBkb2N1bWVudE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG4gICAgICBkb2N1bWVudE9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBvYnNlcnZlckNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogS2VlcHMgdGhlIHBvbHlmaWxsIGZyb20gdGhyb3dpbmcgaW4gZW52aXJvbm1lbnRzIHdoZXJlIEhUTUxGb3JtRWxlbWVudFxuICAgICAqIGlzIHVuZGVmaW5lZCBsaWtlIGluIGEgc2VydmVyIGVudmlyb25tZW50XG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBIVE1MRm9ybUVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwYXRjaEZvcm1Qcm90b3R5cGUoKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXdpbmRvdy5DdXN0b21TdGF0ZVNldCkge1xuICAgICAgd2luZG93LkN1c3RvbVN0YXRlU2V0ID0gQ3VzdG9tU3RhdGVTZXQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3cuQ3VzdG9tU3RhdGVTZXQpIHtcbiAgICB3aW5kb3cuQ3VzdG9tU3RhdGVTZXQgPSBDdXN0b21TdGF0ZVNldDtcbiAgICBjb25zdCBhdHRhY2hJbnRlcm5hbHMgPSBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzO1xuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hJbnRlcm5hbHMgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gYXR0YWNoSW50ZXJuYWxzLmNhbGwodGhpcywgYXJncyk7XG4gICAgICBpbnRlcm5hbHMuc3RhdGVzID0gbmV3IEN1c3RvbVN0YXRlU2V0KHRoaXMpO1xuICAgICAgcmV0dXJuIGludGVybmFscztcbiAgICB9O1xuICB9XG59XG4iLCAiaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQgfSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExhbmdJbnRlcmZhY2Uge1xuICAvKipcbiAgICogQWRqdXN0cyB0aGUgbGFuZyB1c2VkIHRvIGZvcm1hdCBjb250ZW50IHJlbmRlcmVkIGJ5IHRoaXMgZWxlbWVudFxuICAgKiBAYXR0ciBsYW5nXG4gICAqL1xuICBsYW5nOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBMYW5nTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIExhbmdFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgbGFuZyB1c2VkIHRvIGZvcm1hdCBjb250ZW50IHJlbmRlcmVkIGJ5IHRoaXMgZWxlbWVudFxuICAgICAqIEBhdHRyIGxhbmdcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGxhbmc6IHN0cmluZztcbiAgfVxuICByZXR1cm4gTGFuZ0VsZW1lbnQgYXMgQ29uc3RydWN0b3I8TGFuZ0ludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50IH0gZnJvbSAnLi4vJztcblxuLyoqXG4gKiBTcGVjaWFsIGNsYXNzIHRoYXQgaGVscHMgZnJhbWV3b3JrIHdyYXBwZXIgc3R5bGluZyBrbm93IHdoZW4gYSB3cmFwcGVyIGZyYW1ld29ya1xuICogaGFzIGZpbmlzaGVkIHJlbmRlcmluZyBhbmQgdGh1cyBlbGVtZW50cyBjYW4gbm93IGJlIHNob3duIHdpdGhvdXQgYSBGT1VDLiBUaGlzXG4gKiBvY2N1cnMgaW4gdGhlIHNjZW5hcmlvIHdoZXJlIExpdCBlbGVtZW50cyByZWdpc3RlciBhbmQgcmVuZGVyIGJlZm9yZSB0aGVcbiAqIHdyYXBwZXIgZnJhbWV3b3JrIHBhc3NlcyBlbGVtZW50cyB0aGVpciBwcm9wcy5cbiAqL1xuZXhwb3J0IGNvbnN0IFdhaXRGb3JGcmFtZXdvcmtNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgV2FpdEZvckZyYW1ld29ya0VsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogJ210ZS1mdy1yZW5kZXJlZCcsIHJlZmxlY3Q6IHRydWUgfSkgX2Z3UmVuZGVyZWQ7XG4gIH1cbiAgcmV0dXJuIFdhaXRGb3JGcmFtZXdvcmtFbGVtZW50IGFzIFQ7XG59O1xuIiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3h9YDsiLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tdGh1bWItc2l6ZToxNnB4Oy0tdGh1bWItY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktYmFzZS1yZ2IpKTstLXRyYWNrLWhlaWdodDo0cHg7LS10cmFjay1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTEpOy0tdHJhY2stY29sb3ItZmlsbGVkOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtcmdiKSk7LS10aHVtYi1vdXRsaW5lLWZvY3VzOjJweCBzb2xpZCByZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLXJnYikpOy0tdGh1bWItb3V0bGluZS1ob3ZlcjoycHggc29saWQgcmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFyay1yZ2IpKTstLXRodW1iLWFjdGl2ZS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLXJnYikpOy0tdGh1bWItaG92ZXItY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFyay1yZ2IpKTstLWxhYmVsLXotaW5kZXg6dmFyKC0tbXRlLXotaW5kZXgtMjApO2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6bm93cmFwO2p1c3RpZnktY29udGVudDpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmV9Omhvc3QoW3dpdGhGdWxsV2lkdGhdKXt3aWR0aDoxMDAlfTpob3N0KFt3aXRoRnVsbFdpZHRoXSkgLnJhbmdle3dpZHRoOmF1dG99Omhvc3QoW2hpZGVWYWx1ZUxhYmVsXSkgLnJhbmdle21hcmdpbi1ib3R0b206MH0ucmFuZ2Utd3JhcHBlcntkaXNwbGF5OmZsZXh9LnJhbmdlLXdyYXBwZXIgLnByZWZpeCwucmFuZ2Utd3JhcHBlciAuc3VmZml4e2FsaWduLWl0ZW1zOm5vcm1hbH0ucmFuZ2Utd3JhcHBlciAucHJlZml4e3BhZGRpbmctcmlnaHQ6dmFyKC0tbXRlLXNwYWNlLXNtKX0ucmFuZ2Utd3JhcHBlciAuc3VmZml4e3BhZGRpbmctbGVmdDp2YXIoLS1tdGUtc3BhY2Utc20pfS5yYW5nZS13cmFwcGVyIC5wcmVmaXg6bm90KC5oYXMtcHJlcGVuZCl7cGFkZGluZy1sZWZ0OjB9LnJhbmdlLXdyYXBwZXIgLnN1ZmZpeDpub3QoLmhhcy1hcHBlbmQpe3BhZGRpbmctcmlnaHQ6MH0ucmFuZ2V7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWdyb3c6MTttYXJnaW4tYm90dG9tOnZhcigtLW10ZS1zcGFjZS1tZCk7bWluLWhlaWdodDoyNHB4O3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjI0MHB4O3otaW5kZXg6MX0ucmFuZ2U6YmVmb3Jle2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHZhcigtLXRyYWNrLWNvbG9yLWZpbGxlZCkgMCx2YXIoLS10cmFjay1jb2xvci1maWxsZWQpIHZhcigtLWZpcnN0LXZhbHVlLXBvc2l0aW9uKSx2YXIoLS10cmFjay1jb2xvcikgdmFyKC0tZmlyc3QtdmFsdWUtcG9zaXRpb24pLHZhcigtLXRyYWNrLWNvbG9yKSAxMDAlKTtjb250ZW50OlwiXCI7aGVpZ2h0OnZhcigtLXRyYWNrLWhlaWdodCk7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7d2lkdGg6MTAwJX0ucmFuZ2UtaW5wdXR7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXI7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7bWF4LXdpZHRoOmNhbGMoMTAwJSArIHZhcigtLXRodW1iLXNpemUpKTttaW4taGVpZ2h0OjI0cHg7bWluLXdpZHRoOmNhbGMoMTAwJSArIHZhcigtLXRodW1iLXNpemUpKTtwb3NpdGlvbjpyZWxhdGl2ZTt0cmFuc2Zvcm06dHJhbnNsYXRlWChjYWxjKHZhcigtLXRodW1iLXNpemUpKi0xLzIpKX0ucmFuZ2UtaW5wdXQ6Zm9jdXMtdmlzaWJsZXtvdXRsaW5lOm5vbmV9LnJhbmdlLWlucHV0Ojotd2Via2l0LXNsaWRlci10aHVtYnt2aXNpYmlsaXR5OmhpZGRlbn0ucmFuZ2UtaW5wdXQ6Oi1tb3otZm9jdXMtb3V0ZXJ7Ym9yZGVyOjB9LnRodW1iLWNvbnRhaW5lcnthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2xlZnQ6dmFyKC0tZmlyc3QtdmFsdWUtcG9zaXRpb24pO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7dG9wOmNhbGMoNTAlIC0gdmFyKC0tdGh1bWItc2l6ZSkgKyB2YXIoLS10cmFjay1oZWlnaHQpICsgMnB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX0udGh1bWJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS10aHVtYi1jb2xvcik7Ym9yZGVyOjJweCBzb2xpZCB2YXIoLS1tdGUtaW5rLTUpO2JvcmRlci1yYWRpdXM6NTAlO2N1cnNvcjpwb2ludGVyO2hlaWdodDp2YXIoLS10aHVtYi1zaXplKTt3aWR0aDp2YXIoLS10aHVtYi1zaXplKX0ucmFuZ2UtaW5wdXQ6ZW5hYmxlZDpmb2N1cy12aXNpYmxlKy50aHVtYi1jb250YWluZXIgLnRodW1ie291dGxpbmU6dmFyKC0tdGh1bWItb3V0bGluZS1mb2N1cyl9LnJhbmdlLWlucHV0OmVuYWJsZWQ6Zm9jdXMtdmlzaWJsZTpob3ZlcisudGh1bWItY29udGFpbmVyIC50aHVtYntvdXRsaW5lOnZhcigtLXRodW1iLW91dGxpbmUtaG92ZXIpfS5yYW5nZS1pbnB1dDplbmFibGVkKy50aHVtYi1jb250YWluZXIgLnRodW1iOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tdGh1bWItaG92ZXItY29sb3IpfS5yYW5nZS1pbnB1dDplbmFibGVkOmFjdGl2ZSsudGh1bWItY29udGFpbmVyIC50aHVtYntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXRodW1iLWFjdGl2ZS1jb2xvcil9LnZhbHVlLWxhYmVse2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW10ZS1kYXJrKTtib3JkZXI6MCBzb2xpZDtib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLWZ1bGwpO2NvbG9yOnZhcigtLW10ZS1saWdodCk7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC13ZWlnaHQpO2xlZnQ6MDtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1saW5lLWhlaWdodCk7bGluZS1oZWlnaHQ6MTttYXJnaW4tdG9wOnZhcigtLW10ZS1zcGFjZS14cyk7cGFkZGluZzp2YXIoLS1tdGUtc3BhY2UteHMpIHZhcigtLW10ZS1zcGFjZS1zbSk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3dyYXA7ei1pbmRleDp2YXIoLS1sYWJlbC16LWluZGV4KX0ubnVtYmVyLWlucHV0e2ZsZXgtc2hyaW5rOjA7bWFyZ2luLWxlZnQ6dmFyKC0tbXRlLXNwYWNlLWxnKX0ubnVtYmVyLWlucHV0LndpdGgtbGFiZWx7bWFyZ2luLXRvcDp2YXIoLS1tdGUtc3BhY2UtbGcpfS5udW1iZXItaW5wdXQud2l0aC1kZXNjcmlwdGlvbnttYXJnaW4tdG9wOnZhcigtLW10ZS1zcGFjZS1tZCl9Lm51bWJlci1pbnB1dC53aXRoLWxhYmVsLndpdGgtZGVzY3JpcHRpb257bWFyZ2luLXRvcDpjYWxjKHZhcigtLW10ZS1zcGFjZS1sZykgKyB2YXIoLS1tdGUtc3BhY2UtbWQpICsgMnB4KX0ubWFya3N7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjA7cG9pbnRlci1ldmVudHM6bm9uZTt0b3A6NTAlO3dpZHRoOmNhbGMoMTAwJSAtIDFweCl9Lm1hcmssLm1hcmtze3Bvc2l0aW9uOmFic29sdXRlfS5tYXJre2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjp2YXIoLS1tdGUtaW5rLTEpO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpO2dhcDp2YXIoLS1tdGUtc3BhY2Utc20pO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtd2VpZ2h0KTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1saW5lLWhlaWdodCk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0b3A6MnB4Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt3aWR0aDoxcHh9Lm1hcms6YmVmb3Jle2JhY2tncm91bmQ6dmFyKC0tbXRlLWJvcmRlci0zKTtjb250ZW50OlwiXCI7aGVpZ2h0OjZweDt0cmFuc2Zvcm06dHJhbnNsYXRlWCg1MCUpO3dpZHRoOjFweH06aG9zdChbcmVhZG9ubHldKXstLXRyYWNrLWNvbG9yLWZpbGxlZDp2YXIoLS1tdGUtcmVhZG9ubHktMik7LS10aHVtYi1jb2xvcjp2YXIoLS1tdGUtcmVhZG9ubHktNCk7LS10aHVtYi1hY3RpdmUtY29sb3I6dmFyKC0tbXRlLXJlYWRvbmx5LTQpOy0tdGh1bWItaG92ZXItY29sb3I6dmFyKC0tbXRlLXJlYWRvbmx5LTQpfTpob3N0KFtyZWFkb25seV06bm90KDpkaXNhYmxlZCkpIC50aHVtYntib3JkZXI6MCBzb2xpZCB0cmFuc3BhcmVudDttYXJnaW4tYm90dG9tOjJweDtvdXRsaW5lOm5vbmV9Omhvc3QoW3JlYWRvbmx5XTpub3QoOmRpc2FibGVkKSkgLnRodW1iLWNvbnRhaW5lcnt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsMnB4KX06aG9zdCg6ZGlzYWJsZWQpey0tdHJhY2stY29sb3ItZmlsbGVkOnZhcigtLW10ZS1kaXNhYmxlZC0yKTstLXRodW1iLWNvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC0zKX1pbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1zbGlkZXItdGh1bWJ7LW1vei1hcHBlYXJhbmNlOm5vbmV9YDsiLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYC5yYW5nZTpiZWZvcmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsdmFyKC0tdHJhY2stY29sb3IpIDAsdmFyKC0tdHJhY2stY29sb3IpIHZhcigtLWZpcnN0LXZhbHVlLXBvc2l0aW9uKSx2YXIoLS10cmFjay1jb2xvci1maWxsZWQpIHZhcigtLWZpcnN0LXZhbHVlLXBvc2l0aW9uKSx2YXIoLS10cmFjay1jb2xvci1maWxsZWQpIHZhcigtLWxhc3QtdmFsdWUtcG9zaXRpb24pLHZhcigtLXRyYWNrLWNvbG9yKSB2YXIoLS1sYXN0LXZhbHVlLXBvc2l0aW9uKSx2YXIoLS10cmFjay1jb2xvcikgMTAwJSl9LnJhbmdlLWlucHV0OmZpcnN0LW9mLXR5cGV7Y2xpcC1wYXRoOmluc2V0KDAgdmFyKC0tZmlyc3QtdmFsdWUtY2xpcCkgMCAwKTtsZWZ0OjA7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlfS5yYW5nZS1pbnB1dDpsYXN0LW9mLXR5cGV7Y2xpcC1wYXRoOmluc2V0KDAgMCAwIHZhcigtLWxhc3QtdmFsdWUtY2xpcCkpO2xlZnQ6MDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGV9LnRodW1iLWNvbnRhaW5lci5maXJzdC10aHVtYntsZWZ0OnZhcigtLWZpcnN0LXZhbHVlLXBvc2l0aW9uKX0udGh1bWItY29udGFpbmVyLmxhc3QtdGh1bWJ7bGVmdDp2YXIoLS1sYXN0LXZhbHVlLXBvc2l0aW9uKX0ucmFuZ2UtaW5wdXQ6ZW5hYmxlZDphY3RpdmUrLnRodW1iLWNvbnRhaW5lciwucmFuZ2UtaW5wdXQ6ZW5hYmxlZDpmb2N1cysudGh1bWItY29udGFpbmVye3otaW5kZXg6MX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1wbGFjZWhvbGRlci1jb2xvcjp2YXIoLS1tdGUtaW5rLTIpOy0taW5wdXQtcGFkZGluZy15OmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14eHMpKTstLWljb24tc2l6ZToyMHB4Oy0tY29sb3I6dmFyKC0tbXRlLWluay0xKTstLWZvbnQtc2l6ZToxcmVtO2NvbG9yOnZhcigtLWNvbG9yKTtsaW5lLWhlaWdodDowfTpob3N0KFtzaXplPXNtXSl7LS1pbnB1dC1wYWRkaW5nLXk6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpOy0taWNvbi1zaXplOjE4cHg7LS1mb250LXNpemU6MC44NzVyZW19Omhvc3QoW3NpemU9bGddKXstLWlucHV0LXBhZGRpbmcteTpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKTstLWljb24tc2l6ZToyMnB4Oy0tZm9udC1zaXplOjEuMjVyZW19LmlucHV0e2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjA7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTEtZm9udC1zaXplKTtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTEtZm9udC13ZWlnaHQpO2hlaWdodDpjYWxjKDFlbSArIHZhcigtLWlucHV0LXBhZGRpbmcteSkqMik7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWxpbmUtaGVpZ2h0KTtsaW5lLWhlaWdodDoxO21hcmdpbjowO291dGxpbmU6bm9uZTtwYWRkaW5nOjA7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dmVydGljYWwtYWxpZ246bWlkZGxlO3dpZHRoOjEwMCV9LmlucHV0Ojotd2Via2l0LWRhdGUtYW5kLXRpbWUtdmFsdWV7dGV4dC1hbGlnbjpsZWZ0fS5jbGVhcnttYXJnaW4tbGVmdDpjYWxjKHZhcigtLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwKSotMS8yKTttYXJnaW4tcmlnaHQ6Y2FsYyh2YXIoLS1mb3JtLWZpZWxkLWludGVybmFsLWdhcCkqLTEpfS5pbnB1dDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcil9LmlucHV0OjpwbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcil9Omhvc3QoOmZvY3VzKXtvdXRsaW5lOm5vbmV9Omhvc3QoW3JlYWRvbmx5XSl7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtcmVhZG9ubHktMyk7LS1mb3JtLWZpZWxkLWJhY2tncm91bmQ6dmFyKC0tbXRlLXJlYWRvbmx5LTEpfTpob3N0KFtyZWFkb25seV0pIC5pbnB1dHtjb2xvcjp2YXIoLS1tdGUtcmVhZG9ubHktNCl9Omhvc3QoW2Rpc2FibGVkXSl7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtMSk7LS1mb3JtLWZpZWxkLWJhY2tncm91bmQ6dmFyKC0tbXRlLWRpc2FibGVkLTEpfTpob3N0KFtkaXNhYmxlZF0pIC5pbnB1dHtjb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtNCk7Y3Vyc29yOm5vdC1hbGxvd2VkfTpob3N0KFtkaXNhYmxlZF0pIC5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciw6aG9zdChbcmVhZG9ubHldKSAuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTQpfTpob3N0KFtkaXNhYmxlZF0pIC5pbnB1dDo6cGxhY2Vob2xkZXIsOmhvc3QoW3JlYWRvbmx5XSkgLmlucHV0OjpwbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtNCl9Omhvc3QgOjpzbG90dGVkKG10ZS1pY29uW3Nsb3Q9YXBwZW5kXSksOmhvc3QgOjpzbG90dGVkKG10ZS1pY29uW3Nsb3Q9cHJlZml4XSksOmhvc3QgOjpzbG90dGVkKG10ZS1pY29uW3Nsb3Q9cHJlcGVuZF0pLDpob3N0IDo6c2xvdHRlZChtdGUtaWNvbltzbG90PXN1ZmZpeF0pe2hlaWdodDp2YXIoLS1pY29uLXNpemUpO21pbi1oZWlnaHQ6dmFyKC0taWNvbi1zaXplKTttaW4td2lkdGg6dmFyKC0taWNvbi1zaXplKTt3aWR0aDp2YXIoLS1pY29uLXNpemUpfWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvcjppbmhlcml0Oy0tcGFkZGluZy15OnZhcigtLW10ZS1zcGFjZS1zbSk7LS1wYWRkaW5nLXg6Y2FsYyh2YXIoLS1tdGUtc3BhY2UtbWQpICsgdmFyKC0tbXRlLXNwYWNlLXhzKSk7LS1ib3JkZXItd2lkdGg6MXB4Oy0tYm9yZGVyLXN0eWxlOnNvbGlkOy0tYm9yZGVyLXJhZGl1czp2YXIoLS1ncm91cC1yYWRpdXMsdmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteGwpKTstLWZvY3VzLXJhZGl1czp2YXIoLS1ncm91cC1mb2N1cy1yYWRpdXMsdmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtZnVsbCkpOy0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYm9yZGVyLWFsdC1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpOy0taWNvbi1zaXplOjE2cHg7LS1mb2N1cy1vZmZzZXQ6LTVweDstLWZpbmFsLXk6dmFyKC0tcGFkZGluZy15KTstLWZpbmFsLXg6dmFyKC0tcGFkZGluZy14KTthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtib3JkZXI6dmFyKC0tYm9yZGVyLXN0eWxlKSB2YXIoLS1ib3JkZXItd2lkdGgpIHZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1ncm91cC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzLHZhcigtLWJvcmRlci1yYWRpdXMpKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1ncm91cC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyx2YXIoLS1ib3JkZXItcmFkaXVzKSk7Ym9yZGVyLWNvbG9yOnZhcigtLWdyb3VwLWJvcmRlci10b3AtY29sb3IsdmFyKC0tYm9yZGVyLWNvbG9yKSkgdmFyKC0tZ3JvdXAtYm9yZGVyLXJpZ2h0LWNvbG9yLHZhcigtLWJvcmRlci1jb2xvcikpIHZhcigtLWdyb3VwLWJvcmRlci1ib3R0b20tY29sb3IsdmFyKC0tYm9yZGVyLWNvbG9yKSkgdmFyKC0tZ3JvdXAtYm9yZGVyLWxlZnQtY29sb3IsdmFyKC0tYm9yZGVyLWNvbG9yKSk7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1ncm91cC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzLHZhcigtLWJvcmRlci1yYWRpdXMpKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1ncm91cC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyx2YXIoLS1ib3JkZXItcmFkaXVzKSk7Y29sb3I6dmFyKC0tY29sb3IpO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWZsZXg7ZmxleC13cmFwOm5vd3JhcDtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7anVzdGlmeS1jb250ZW50OmNlbnRlcjtvdXRsaW5lOm5vbmUhaW1wb3J0YW50O292ZXJmbG93OnZpc2libGU7cGFkZGluZzp2YXIoLS1maW5hbC15KSB2YXIoLS1maW5hbC14KTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7dmVydGljYWwtYWxpZ246bWlkZGxlO3dpZHRoOmF1dG87LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1idXR0b24tZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYnV0dG9uLWZvbnQtd2VpZ2h0KTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYnV0dG9uLWxpbmUtaGVpZ2h0KTtsaW5lLWhlaWdodDoxO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXR9Omhvc3QoOmZvY3VzLXZpc2libGU6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpKTpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCByZ2IodmFyKC0tbXRlLWZvY3VzLXJnYikpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tZ3JvdXAtZm9jdXMtYm90dG9tLWxlZnQtcmFkaXVzLHZhcigtLWZvY3VzLXJhZGl1cykpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWdyb3VwLWZvY3VzLWJvdHRvbS1yaWdodC1yYWRpdXMsdmFyKC0tZm9jdXMtcmFkaXVzKSk7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1ncm91cC1mb2N1cy10b3AtbGVmdC1yYWRpdXMsdmFyKC0tZm9jdXMtcmFkaXVzKSk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tZ3JvdXAtZm9jdXMtdG9wLXJpZ2h0LXJhZGl1cyx2YXIoLS1mb2N1cy1yYWRpdXMpKTtib3R0b206dmFyKC0tZm9jdXMtb2Zmc2V0KTtib3gtc2hhZG93OjAgMCAwIDFweCB2YXIoLS1tdGUtbGlnaHQpO2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO2xlZnQ6dmFyKC0tZm9jdXMtb2Zmc2V0KTtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OnZhcigtLWZvY3VzLW9mZnNldCk7dG9wOnZhcigtLWZvY3VzLW9mZnNldCk7ei1pbmRleDo5fTpob3N0KDo6LW1vei1mb2N1cy1pbm5lcil7Ym9yZGVyOjA7cGFkZGluZzowfTpob3N0KDpob3ZlciksOmhvc3QoW2FjdGl2ZXN0YXRlXSl7b3V0bGluZTpub25lOy0tY29sb3I6aW5oZXJpdH06aG9zdCg6aG92ZXIpey0tYmFja2dyb3VuZDp2YXIoLS1pbnRlcmFjdGl2ZS1ob3Zlci1iZyxyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWEpKSl9Omhvc3QoOmFjdGl2ZSksOmhvc3QoW2FjdGl2ZXN0YXRlXSl7LS1iYWNrZ3JvdW5kOnZhcigtLWludGVyYWN0aXZlLWFjdGl2ZS1iZyxyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYSkpKX06aG9zdChbb3V0bGluZWRdKXstLWJvcmRlci1zdHlsZTpzb2xpZDstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpfTpob3N0KFtmaWxsZWRdKXstLWJvcmRlci1zdHlsZTpzb2xpZDstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJhY2tncm91bmQ6dmFyKC0tYnV0dG9uLWZpbGxlZC1iZyx2YXIoLS1tdGUtZ3JleS0xMCkpOy0tY29sb3I6dmFyKC0tYnV0dG9uLWZpbGxlZC1pbmssdmFyKC0tbXRlLWluay01KSl9Omhvc3QoW2ZpbGxlZF06aG92ZXIpey0tYmFja2dyb3VuZDp2YXIoLS1idXR0b24tZmlsbGVkLWFjdGl2ZS1iZyx2YXIoLS1tdGUtZ3JleS05KSk7LS1jb2xvcjp2YXIoLS1idXR0b24tZmlsbGVkLWFjdGl2ZS1pbmssdmFyKC0tbXRlLWluay01KSl9Omhvc3QoW2ZpbGxlZF06YWN0aXZlKSw6aG9zdChbZmlsbGVkXVthY3RpdmVzdGF0ZV0pey0tYmFja2dyb3VuZDp2YXIoLS1idXR0b24tZmlsbGVkLWFjdGl2ZS1iZyx2YXIoLS1tdGUtZGFya2VyKSk7LS1jb2xvcjp2YXIoLS1idXR0b24tZmlsbGVkLWFjdGl2ZS1pbmssdmFyKC0tbXRlLWluay01KSl9Omhvc3QoW2NvbG9yPXByaW1hcnldOm5vdChbZGlzYWJsZWRdKSl7LS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9cHJpbWFyeV06bm90KFtkaXNhYmxlZF0pOmZvY3VzKSw6aG9zdChbY29sb3I9cHJpbWFyeV06bm90KFtkaXNhYmxlZF0pOmhvdmVyKXstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLXJnYikpfTpob3N0KFtjb2xvcj1wcmltYXJ5XTpub3QoW2Rpc2FibGVkXSlbYWN0aXZlc3RhdGVdKXstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWEpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWRhcmtlci1yZ2IpKX06aG9zdChbY29sb3I9cHJpbWFyeV1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKSl7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMik7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1wcmltYXJ5XVtvdXRsaW5lZF06bm90KFtkaXNhYmxlZF0pOmZvY3VzKSw6aG9zdChbY29sb3I9cHJpbWFyeV1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKTpob3Zlcil7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWJhY2tncm91bmQ6dmFyKC0taW50ZXJhY3RpdmUtaG92ZXItYmcscmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hKSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFyay1yZ2IpKX06aG9zdChbY29sb3I9cHJpbWFyeV1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKVthY3RpdmVzdGF0ZV0pey0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMik7LS1iYWNrZ3JvdW5kOnZhcigtLWludGVyYWN0aXZlLWFjdGl2ZS1iZyxyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYSkpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWRhcmtlci1yZ2IpKX06aG9zdChbY29sb3I9cHJpbWFyeV1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSkpey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYm9yZGVyLWFsdC1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLXJnYikpOy0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktYmFzZS1jLXJnYikpfTpob3N0KFtjb2xvcj1wcmltYXJ5XVtmaWxsZWRdOm5vdChbZGlzYWJsZWRdKTpmb2N1cyksOmhvc3QoW2NvbG9yPXByaW1hcnldW2ZpbGxlZF06bm90KFtkaXNhYmxlZF0pOmhvdmVyKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJvcmRlci1hbHQtY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFyay1yZ2IpKTstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFyay1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWRhcmstYy1yZ2IpKX06aG9zdChbY29sb3I9cHJpbWFyeV1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSlbYWN0aXZlc3RhdGVdKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFya2VyLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFya2VyLWMtcmdiKSl9Omhvc3QoW2NvbG9yPXNlY29uZGFyeV06bm90KFtkaXNhYmxlZF0pKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXNlY29uZGFyeV06bm90KFtkaXNhYmxlZF0pOmZvY3VzKSw6aG9zdChbY29sb3I9c2Vjb25kYXJ5XTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWEpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktZGFyay1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XTpub3QoW2Rpc2FibGVkXSlbYWN0aXZlc3RhdGVdKXstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWEpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktZGFya2VyLXJnYikpfTpob3N0KFtjb2xvcj1zZWNvbmRhcnldW291dGxpbmVkXTpub3QoW2Rpc2FibGVkXSkpey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1zZWNvbmRhcnldW291dGxpbmVkXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMpLDpob3N0KFtjb2xvcj1zZWNvbmRhcnldW291dGxpbmVkXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpey0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMik7LS1iYWNrZ3JvdW5kOnZhcigtLWludGVyYWN0aXZlLWhvdmVyLWJnLHJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYSkpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktZGFyay1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XVtvdXRsaW5lZF06bm90KFtkaXNhYmxlZF0pW2FjdGl2ZXN0YXRlXSl7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWJhY2tncm91bmQ6dmFyKC0taW50ZXJhY3RpdmUtYWN0aXZlLWJnLHJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hKSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrZXItcmdiKSl9Omhvc3QoW2NvbG9yPXNlY29uZGFyeV1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSkpey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYm9yZGVyLWFsdC1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmstcmdiKSk7LS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1jLXJnYikpfTpob3N0KFtjb2xvcj1zZWNvbmRhcnldW2ZpbGxlZF06bm90KFtkaXNhYmxlZF0pOmZvY3VzKSw6aG9zdChbY29sb3I9c2Vjb25kYXJ5XVtmaWxsZWRdOm5vdChbZGlzYWJsZWRdKTpob3Zlcil7LS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1ib3JkZXItYWx0LWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktZGFyay1yZ2IpKTstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrLWMtcmdiKSl9Omhvc3QoW2NvbG9yPXNlY29uZGFyeV1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSlbYWN0aXZlc3RhdGVdKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrZXItcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmtlci1jLXJnYikpfTpob3N0KFtjb2xvcj10ZXJ0aWFyeV06bm90KFtkaXNhYmxlZF0pKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9dGVydGlhcnldOm5vdChbZGlzYWJsZWRdKTpmb2N1cyksOmhvc3QoW2NvbG9yPXRlcnRpYXJ5XTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWEpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1kYXJrLXJnYikpfTpob3N0KFtjb2xvcj10ZXJ0aWFyeV06bm90KFtkaXNhYmxlZF0pW2FjdGl2ZXN0YXRlXSl7LS1iYWNrZ3JvdW5kOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFya2VyLXJnYikpfTpob3N0KFtjb2xvcj10ZXJ0aWFyeV1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKSl7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMik7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9dGVydGlhcnldW291dGxpbmVkXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMpLDpob3N0KFtjb2xvcj10ZXJ0aWFyeV1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKTpob3Zlcil7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWJhY2tncm91bmQ6dmFyKC0taW50ZXJhY3RpdmUtaG92ZXItYmcscmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hKSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmstcmdiKSl9Omhvc3QoW2NvbG9yPXRlcnRpYXJ5XVtvdXRsaW5lZF06bm90KFtkaXNhYmxlZF0pW2FjdGl2ZXN0YXRlXSl7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWJhY2tncm91bmQ6dmFyKC0taW50ZXJhY3RpdmUtYWN0aXZlLWJnLHJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hKSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmtlci1yZ2IpKX06aG9zdChbY29sb3I9dGVydGlhcnldW2ZpbGxlZF06bm90KFtkaXNhYmxlZF0pKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJvcmRlci1hbHQtY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmstcmdiKSk7LS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWJhc2UtYy1yZ2IpKX06aG9zdChbY29sb3I9dGVydGlhcnldW2ZpbGxlZF06bm90KFtkaXNhYmxlZF0pOmZvY3VzKSw6aG9zdChbY29sb3I9dGVydGlhcnldW2ZpbGxlZF06bm90KFtkaXNhYmxlZF0pOmhvdmVyKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJvcmRlci1hbHQtY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmstcmdiKSk7LS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1kYXJrLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmstYy1yZ2IpKX06aG9zdChbY29sb3I9dGVydGlhcnldW2ZpbGxlZF06bm90KFtkaXNhYmxlZF0pW2FjdGl2ZXN0YXRlXSl7LS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1kYXJrZXItcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFya2VyLWMtcmdiKSl9Omhvc3QoW2NvbG9yPWRhbmdlcl06bm90KFtkaXNhYmxlZF0pKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPWRhbmdlcl06bm90KFtkaXNhYmxlZF0pOmZvY3VzKSw6aG9zdChbY29sb3I9ZGFuZ2VyXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWEpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItZGFyay1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXTpub3QoW2Rpc2FibGVkXSlbYWN0aXZlc3RhdGVdKXstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWEpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItZGFya2VyLXJnYikpfTpob3N0KFtjb2xvcj1kYW5nZXJdW291dGxpbmVkXTpub3QoW2Rpc2FibGVkXSkpey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1kYW5nZXJdW291dGxpbmVkXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMpLDpob3N0KFtjb2xvcj1kYW5nZXJdW291dGxpbmVkXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpey0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMik7LS1iYWNrZ3JvdW5kOnZhcigtLWludGVyYWN0aXZlLWhvdmVyLWJnLHJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYSkpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItZGFyay1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXVtvdXRsaW5lZF06bm90KFtkaXNhYmxlZF0pW2FjdGl2ZXN0YXRlXSl7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWJhY2tncm91bmQ6dmFyKC0taW50ZXJhY3RpdmUtYWN0aXZlLWJnLHJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hKSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrZXItcmdiKSl9Omhvc3QoW2NvbG9yPWRhbmdlcl1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSkpey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYm9yZGVyLWFsdC1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWRhcmstcmdiKSk7LS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1jLXJnYikpfTpob3N0KFtjb2xvcj1kYW5nZXJdW2ZpbGxlZF06bm90KFtkaXNhYmxlZF0pOmZvY3VzKSw6aG9zdChbY29sb3I9ZGFuZ2VyXVtmaWxsZWRdOm5vdChbZGlzYWJsZWRdKTpob3Zlcil7LS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1ib3JkZXItYWx0LWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItZGFyay1yZ2IpKTstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrLWMtcmdiKSl9Omhvc3QoW2NvbG9yPWRhbmdlcl1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSlbYWN0aXZlc3RhdGVdKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrZXItcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWRhcmtlci1jLXJnYikpfTpob3N0KFtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIGF7Y3Vyc29yOm5vdC1hbGxvd2VkIWltcG9ydGFudDstLWNvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC00KSFpbXBvcnRhbnQ7Ym94LXNoYWRvdzpub25lIWltcG9ydGFudDt0ZXh0LXNoYWRvdzpub25lIWltcG9ydGFudH06aG9zdChbZGlzYWJsZWRdOmhvdmVyKSw6aG9zdChbZGlzYWJsZWRdW2FjdGl2ZXN0YXRlXSl7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50IWltcG9ydGFudH06aG9zdChbZGlzYWJsZWRdW2ZpbGxlZF0pLDpob3N0KFtkaXNhYmxlZF1bb3V0bGluZWRdKXstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtMikhaW1wb3J0YW50Oy0tYmFja2dyb3VuZDp2YXIoLS1tdGUtZGlzYWJsZWQtMSkhaW1wb3J0YW50Oy0tY29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTQpIWltcG9ydGFudH06aG9zdChbZGlzYWJsZWRdW2ZpbGxlZF06aG92ZXIpLDpob3N0KFtkaXNhYmxlZF1bZmlsbGVkXVthY3RpdmVzdGF0ZV0pLDpob3N0KFtkaXNhYmxlZF1bb3V0bGluZWRdOmhvdmVyKSw6aG9zdChbZGlzYWJsZWRdW291dGxpbmVkXVthY3RpdmVzdGF0ZV0pey0tYmFja2dyb3VuZDp2YXIoLS1tdGUtZGlzYWJsZWQtMSkhaW1wb3J0YW50fTpob3N0KFtzaXplPXNtXSl7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2ZvbnQtc2l6ZTpjYWxjKHZhcigtLW10ZS1mb250LXNldC1idXR0b24tZm9udC1zaXplKSouOCk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1saW5lLWhlaWdodCk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDstLWZpbmFsLXk6Y2FsYyh2YXIoLS1wYWRkaW5nLXkpKnZhcigtLW10ZS1zaXplLXNjYWxlLXNtKSk7LS1maW5hbC14OmNhbGModmFyKC0tcGFkZGluZy14KSp2YXIoLS1tdGUtc2l6ZS1zY2FsZS1zbSkpfTpob3N0KFtzaXplPWxnXSl7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2ZvbnQtc2l6ZTpjYWxjKHZhcigtLW10ZS1mb250LXNldC1idXR0b24tZm9udC1zaXplKSoxLjIpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1idXR0b24tZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1idXR0b24tbGluZS1oZWlnaHQpO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLWZ1bGwpOy0tZmluYWwteTpjYWxjKHZhcigtLXBhZGRpbmcteSkqdmFyKC0tbXRlLXNpemUtc2NhbGUtbGcpKTstLWZpbmFsLXg6Y2FsYyh2YXIoLS1wYWRkaW5nLXgpKnZhcigtLW10ZS1zaXplLXNjYWxlLWxnKSl9Omhvc3QoW3JhZGl1cz1zbV0pey0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1zbSk7LS1mb2N1cy1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpfS5wcmVmaXgsLnByZWZpeD5zcGFue2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ucHJlZml4e21hcmdpbi1sZWZ0OmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSotMSk7cGFkZGluZy1yaWdodDp2YXIoLS1tdGUtc3BhY2Utc20pfTpob3N0KFtzaXplPXNtXSkgLnByZWZpeHttYXJnaW4tbGVmdDpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykqLTEpO3BhZGRpbmctcmlnaHQ6dmFyKC0tbXRlLXNwYWNlLXhzKX0uc3VmZml4LC5zdWZmaXg+c3BhbnthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN1ZmZpeHttYXJnaW4tcmlnaHQ6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pKi0xKTtwYWRkaW5nLWxlZnQ6dmFyKC0tbXRlLXNwYWNlLXNtKX06aG9zdChbc2l6ZT1zbV0pIC5zdWZmaXh7bWFyZ2luLXJpZ2h0OmNhbGModmFyKC0tbXRlLXNwYWNlLXhzKSotMSk7cGFkZGluZy1sZWZ0OnZhcigtLW10ZS1zcGFjZS14cyl9Omhvc3Q+Om5vdCgubGFiZWwpIG10ZS1pY29ue2hlaWdodDp2YXIoLS1pY29uLXNpemUpO21pbi1oZWlnaHQ6dmFyKC0taWNvbi1zaXplKTttaW4td2lkdGg6dmFyKC0taWNvbi1zaXplKTt3aWR0aDp2YXIoLS1pY29uLXNpemUpfTpob3N0KFtzaXplPXNtXSk+Om5vdCgubGFiZWwpIG10ZS1pY29uey0taWNvbi1zaXplOjEycHh9Omhvc3QoW3NpemU9bGddKT46bm90KC5sYWJlbCkgbXRlLWljb257LS1pY29uLXNpemU6MjBweH1gOyIsICJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vaWNvbi5zdHlsZXMnO1xuaW1wb3J0IHtcbiAgZGVmaW5lRWxlbWVudCxcbiAgU3RhdHVzQ29sb3JNaXhpbixcbiAgTXRlRWxlbWVudCxcbiAgUHJlc2V0TWl4aW5GYWN0b3J5LFxuICBvblVwZGF0ZSxcbiAgVW5zdWJzY3JpYmVyLFxuICBpc1Nzcixcbn0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBtdHJJY29uIH0gZnJvbSAnQG1vcnRhci9pY29ucyc7XG5pbXBvcnQgeyBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSAnLi9pY29uLXJlZ2lzdHJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgSWNvblByZXNldCB9IGZyb20gJy4vaWNvbi5wcmVzZXRzJztcbmltcG9ydCB7IHVuc2FmZVNWRyB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL3Vuc2FmZS1zdmcuanMnO1xuaW1wb3J0IHsgc2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuXG4vKipcbiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS1pY29uJylcbmV4cG9ydCBjbGFzcyBNdGVJY29uIGV4dGVuZHMgU3RhdHVzQ29sb3JNaXhpbihcbiAgUHJlc2V0TWl4aW5GYWN0b3J5PEljb25QcmVzZXQ+KCdNdGVJY29uJykoTXRlRWxlbWVudClcbikge1xuICBzdGF0aWMgc3R5bGVzID0gW3N0eWxlc107XG5cbiAgLyoqIFRoZSBuYW1lIG9mIHRoZSBpY29uIHRvIHJlbmRlciAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIG5hbWU6IG10ckljb24gfCBzdHJpbmc7XG5cbiAgLyoqIFRoZSBsaWJyYXJ5IHRvIGxvYWQgdGhlIGljb24gZnJvbS4gVGhlIGRlZmF1bHQgbGlicmFyeSBpcyBgX2RlZmF1bHRgLiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGxpYnJhcnkgPSAnX2RlZmF1bHQnO1xuXG4gIC8qKiBUaGUgc2l6ZSBvZiB0aGlzIGljb24uIE1hdGNoZXMgYSBnaXZlbiBmb250LXNpemUgaW4gcHguICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciwgcmVmbGVjdDogdHJ1ZSB9KSBzaXplOiBzdHJpbmcgfCBudW1iZXIgPSAyNDtcblxuICAvKiogU2NhbGUgdGhpcyBpY29uIHJlbGF0aXZlIHRvIHRoZSBjb21wdXRlZCBmb250LXNpemUgb2YgdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGF1dG9zaXplID0gZmFsc2U7XG5cbiAgLyoqIEFuIGljb24ncyByb2xlIGlzIGRlZmF1bHRzIHRvIGBpbWdgIHRvIGVuc3VyZSB0aGV5IGRvIG5vdCBpbnRlcnJ1cHQgdGV4dC4gICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgcm9sZSA9ICdpbWcnO1xuXG4gIC8qKiBMYWJlbCBmb3IgaWNvbiB0byBiZSByZWFkIHRvIHNjcmVlbnJlYWRlciB0ZWNobm9sb2dpZXMgKi9cbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiAnYXJpYS1sYWJlbCcsIHJlZmxlY3Q6IHRydWUgfSkgYXJpYUxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqIExhYmVsIGZvciBpY29uIHRvIGJlIHJlYWQgdG8gc2NyZWVucmVhZGVyIHRlY2hub2xvZ2llcyAqL1xuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6ICdhcmlhLWhpZGRlbicsIHJlZmxlY3Q6IHRydWUgfSkgYXJpYUhpZGRlbiA9ICd0cnVlJztcblxuICAvKiogUmVuZGVycyB0aGUgaWNvbiBpbiB0aGUgZGVmYXVsdCBtdXRlZCBpbmsgY29sb3IuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgbXV0ZWQgPSBmYWxzZTtcblxuICAvKiogUmVuZGVycyB0aGlzIGljb24gd2l0aCBjb2xvcnMgZGVmaW5lZCBpbiB0aGUgU1ZHIGluc3RlYWQgb2YgaW5oZXJpdGluZyBmcm9tIENTUyBwYXJlbnRzICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgd2l0aENvbG9yID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICogVHJhY2tzIHRoZSBsb2FkZWQgaWNvbiBzbyB3ZSBkb24ndCBuZWVkIHRvIHJlZmV0Y2ggaXQgZHVyaW5nIGh5ZHJhdGlvblxuICAgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBfbG9hZGVkPzogc3RyaW5nO1xuXG4gIEBzdGF0ZSgpIHByaXZhdGUgaWNvblN2Zzogc3RyaW5nO1xuXG4gIHByaXZhdGUgZmV0Y2hBYm9ydENvbnRyb2xsZXI/OiBBYm9ydENvbnRyb2xsZXI7XG5cbiAgcHJpdmF0ZSBwcmV2aW91c0ljb25TdWJzY3JpcHRpb246IFVuc3Vic2NyaWJlcjtcblxuICBAb25VcGRhdGUoWyduYW1lJywgJ2xpYnJhcnknXSwgeyBvbjogJ2JvdGgnIH0pXG4gIHByaXZhdGUgaGFuZGxlTmFtZVVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5uYW1lKSB7XG4gICAgICBpZiAodGhpcy5uZWVkc0ljb25VcGRhdGUoKSkge1xuICAgICAgICB0aGlzLmZldGNoQWJvcnRDb250cm9sbGVyPy5hYm9ydCgpO1xuICAgICAgICB0aGlzLmZldGNoQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLnByZXZpb3VzSWNvblN1YnNjcmlwdGlvbj8uKCk7XG4gICAgICAgIHRoaXMucHJldmlvdXNJY29uU3Vic2NyaXB0aW9uID0gTXRlSWNvblJlZ2lzdHJ5U2VydmljZS5nZXRJY29uKFxuICAgICAgICAgIHRoaXMubmFtZSxcbiAgICAgICAgICB0aGlzLmxpYnJhcnksXG4gICAgICAgICAgdGhpcy5mZXRjaEFib3J0Q29udHJvbGxlci5zaWduYWxcbiAgICAgICAgKS5zdWJzY3JpYmUoKGljb24sIHVuc3ViKSA9PiB7XG4gICAgICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgICAgIGNvbnN0IG9sZFN2ZyA9IHRoaXMuaWNvblN2ZztcbiAgICAgICAgICAgIGNvbnN0IG9sZExvYWRlZCA9IHRoaXMuX2xvYWRlZDtcblxuICAgICAgICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5pY29uU3ZnID0gaWNvbjtcbiAgICAgICAgICAgICAgdGhpcy5fbG9hZGVkID0gYCR7dGhpcy5saWJyYXJ5fX4ke3RoaXMubmFtZX1gO1xuICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ2ljb25TdmcnLCBvbGRTdmcpO1xuICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ19sb2FkZWQnLCBvbGRMb2FkZWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TdmcgPSBpY29uO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlZCA9IGAke3RoaXMubGlicmFyeX1+JHt0aGlzLm5hbWV9YDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ2ljb25TdmcnLCBvbGRTdmcpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnX2xvYWRlZCcsIG9sZExvYWRlZCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGUgcmVzdWx0IHdhcyBub3QgbnVsbCBvciB0aGUgZmFsbGJhY2sgaWNvbiB0aGVuIHdlIGxlYXZlIHRoaXMgc3Vic2NyaXB0aW9uXG4gICAgICAgICAgICAvLyBvcGVuIGluIGNhc2UgaXQgbG9hZHMgbGF0ZXIgb3IgbGF6eSBsb2FkaW5nIGlzIHJlLWVuYWJsZWQuXG4gICAgICAgICAgICBpZiAodGhpcy5pY29uU3ZnICE9PSBudWxsICYmIHRoaXMuaWNvblN2ZyAhPT0gTXRlSWNvblJlZ2lzdHJ5U2VydmljZVsnZmFsbGJhY2tJY29uJ10pIHtcbiAgICAgICAgICAgICAgdW5zdWIoKTtcbiAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0ljb25TdWJzY3JpcHRpb24/LigpO1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzSWNvblN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIER1cmluZyBTU1IgYWx3YXlzIHVuc3ViXG4gICAgICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgICAgIHVuc3ViKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaWNvblN2Zykge1xuICAgICAgICAvLyBJZiB0aGUgaWNvbiBkb2Vzbid0IG5lZWQgYW4gdXBkYXRlIGJ1dCB3ZSBkb24ndCBrbm93IHdoYXQgdGhlIGljb25TdmcgaXMgKGh5ZHJhdGluZyBmcm9tIFNTUiksIGdldCBpdCBmcm9tIHRoZSBET01cbiAgICAgICAgY29uc3Qgc3ZnID0gdGhpcy5yZW5kZXJSb290Py5xdWVyeVNlbGVjdG9yKCdzdmcnKT8ub3V0ZXJIVE1MID8/IG51bGw7XG4gICAgICAgIC8vIFdhaXQgZm9yIHVwZGF0ZSB0byBjb21wbGV0ZSB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaWNvblN2ZyA9IHN2ZztcbiAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ2ljb25TdmcnLCBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xvYWRlZCA9IG51bGw7XG4gICAgICB0aGlzLmljb25TdmcgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgQG9uVXBkYXRlKFsnYXJpYUxhYmVsJ10sIHsgb246ICdib3RoJyB9KVxuICBwcml2YXRlIGhhbmRsZUFyaWFMYWJlbENoYW5nZSgpIHtcbiAgICBpZiAoIXRoaXMuYXJpYUxhYmVsKSB7XG4gICAgICB0aGlzLmFyaWFIaWRkZW4gPSAndHJ1ZSc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXJpYUxhYmVsICYmIHRoaXMuYXJpYUhpZGRlbiA9PT0gJ3RydWUnKSB7XG4gICAgICB0aGlzLmFyaWFIaWRkZW4gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci51cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ3NpemUnKSB8fCBjaGFuZ2VkUHJvcHMuaGFzKCdpY29uU3ZnJykgfHwgY2hhbmdlZFByb3BzLmhhcygnYXV0b3NpemUnKSkge1xuICAgICAgaWYgKHRoaXMuYXV0b3NpemUgfHwgdGhpcy5zaXplKSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmF1dG9zaXplID8gJ2NhbGMoMWVtICsgMnB4KScgOiBgJHt0aGlzLnNpemV9cHhgO1xuICAgICAgICAvLyBTcGVjaWZpY2l0eSBpcyBvbmUgbGVzcyB0aGF0IHNlL3NwIHByb3BzIHNvIHRob3NlIHN0aWxsIG92ZXJyaWRlIGRlZmF1bHQgc2l6ZSBjYWxjdWxhdGlvbnNcbiAgICAgICAgdGhpcy5zZXRJbnN0YW5jZVN0eWxlKCdtdGUtaWNvbi1zaXppbmcnLCBzZWxlY3RvckZhY3RvcnkoJzpob3N0Omhvc3QnKSwge1xuICAgICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICAgIG1pbldpZHRoOiBzaXplLFxuICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgICBtaW5IZWlnaHQ6IHNpemUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICB0aGlzLnByZXZpb3VzSWNvblN1YnNjcmlwdGlvbj8uKCk7XG4gIH1cblxuICBwcml2YXRlIG5lZWRzSWNvblVwZGF0ZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuX2xvYWRlZCB8fCB0aGlzLl9sb2FkZWQgIT09IGAke3RoaXMubGlicmFyeX1+JHt0aGlzLm5hbWV9YDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGAke3RoaXMuaW5zdGFuY2VTdHlsZXN9JHt1bnNhZmVTVkcodGhpcy5pY29uU3ZnKX1gO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS1pY29uJzogTXRlSWNvbjtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtib3gtc2l6aW5nOmNvbnRlbnQtYm94IWltcG9ydGFudDtjb2xvcjp2YXIoLS1pY29uLWNvbG9yLGluaGVyaXQpO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2xpbmUtaGVpZ2h0OjA7d2lkdGg6MjRweH06aG9zdChbYXV0b3NpemVdKXt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Omhvc3QoW211dGVkXSl7LS1pY29uLWNvbG9yOnZhcigtLW10ZS1pbmstMil9c3Zne2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX06aG9zdCg6bm90KFt3aXRoQ29sb3JdKSkgc3ZnICp7Y29sb3I6aW5oZXJpdDtmaWxsOmN1cnJlbnRDb2xvciFpbXBvcnRhbnR9Omhvc3QoW2NvbG9yPXByaW1hcnldKT5zdmcgKntjb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXNlY29uZGFyeV0pPnN2ZyAqe2NvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj10ZXJ0aWFyeV0pPnN2ZyAqe2NvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXN1Y2Nlc3NdKT5zdmcgKntjb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXdhcm5pbmddKT5zdmcgKntjb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPWRhbmdlcl0pPnN2ZyAqe2NvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1iYXNlLXJnYikpfWA7IiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1pbmZlcnJhYmxlLXR5cGVzICovXG5pbXBvcnQgeyBTaWduYWwsIHNpZ25hbCwgaXNTc3IsIGNvbXB1dGVkIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBNb3J0YXJJY29uLCBtdHJJY29uSGVscFJob21idXMgfSBmcm9tICdAbW9ydGFyL2ljb25zJztcblxuZXhwb3J0IHR5cGUgSWNvbkRhdGEgPSB7IGRhdGE/OiBzdHJpbmc7IGZldGNoZWQ/OiBib29sZWFuIH07XG5cbi8qKlxuICogU2VydmljZSB1c2VkIHRvIHJlZ2lzdGVyIHN2ZyBzdHJpbmdzIGZvciBhIGdpdmVuIGljb24gbmFtZSBhbmQgdGhlbiBsb29rIHRoZW1cbiAqIHVwIGJ5IHRoYXQgc2FtZSBuYW1lIG9yIGZldGNoIHRoZW0gZnJvbSBhIENETi4gVGhlIGBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlYCBpc1xuICogYSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcy4gWW91IHNob3VsZCBhbHdheXMgdXNlIHRoYXQgZXhwb3J0IGluc3RlYWRcbiAqIG9mIGluaXRpYWxpemluZyBhIG5ldyBpbnN0YW5jZS5cbiAqL1xuZXhwb3J0IGNsYXNzIF9NdGVJY29uUmVnaXN0cnlTZXJ2aWNlIHtcbiAgLyoqIE1hcCB3aGVyZSBsb2FkZWQgaWNvbiBzdmdzIGFyZSBjYWNoZWQgKi9cbiAgcHJpdmF0ZSBpY29uUmVnaXN0cnkgPSBuZXcgTWFwPHN0cmluZywgU2lnbmFsPEljb25EYXRhPj4oKTtcblxuICAvKiogTWFwIG9mIHJlZ2lzdGVyZWQgbGF6eSBsb2FkaW5nIHJlc29sdmVyIGZ1bmN0aW9ucyBwZXIgaWNvbiBsaWJyYXJ5ICovXG4gIHByaXZhdGUgaWNvblVybFJlc29sdmVycyA9IG5ldyBNYXA8c3RyaW5nLCAoaWNvbk5hbWU6IHN0cmluZykgPT4gc3RyaW5nPigpO1xuXG4gIC8qKiBEZWZpbmVzIHRoZSBzdmcgdXNlZCB3aGVuIGFuIGljb24gY2Fubm90IGJlIGxvYWRlZCAqL1xuICBwcml2YXRlIGZhbGxiYWNrSWNvbiA9IG10ckljb25IZWxwUmhvbWJ1cz8uZGF0YTtcblxuICAvKiogVHJhY2tzIGlmIGljb25zIHNob3VsZCBiZSBsYXp5IGxvYWRlZCBpbnRlcm5hbGx5ICovXG4gIHByaXZhdGUgbGF6eUxvYWRFbmFibGVkID0gdHJ1ZTtcblxuICAvKiogUHJldmVudHMgbG9ncyBhbmQgZmV0Y2hlcyB3aGVuIHRydWUgKi9cbiAgcHJpdmF0ZSB0ZXN0TW9kZUVuYWJsZWQgPSBmYWxzZTtcblxuICAvKiogRGVsaW1pdGVyIHVzZWQgd2hlbiBjcmVhdGluZyBsaWJyYXJ5ICsgaWNvbiBuYW1lIGtleXMgKi9cbiAgcHJpdmF0ZSBkZWxpbWl0ZXIgPSAnfic7XG5cbiAgLyoqIElmIGV4ZWN1dGluZyBzZXJ2ZXItc2lkZSBhbGwgbW9ydGFyIGljb25zIHdpbGwgYmUgbG9hZGVkIGhlcmUgKi9cbiAgcHJpdmF0ZSBzZXJ2ZXJJY29uQ2FjaGU/OiBSZWNvcmQ8c3RyaW5nLCBNb3J0YXJJY29uPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmljb25VcmxSZXNvbHZlcnMuc2V0KCdfZGVmYXVsdCcsIChpY29uTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gYGh0dHBzOi8vbW9ydGFyLWNkbi5oZWIuY29tL2ljb25zL21kaS83LjIvJHtpY29uTmFtZX0uc3ZnYDtcbiAgICB9KTtcbiAgICB0aGlzLmljb25VcmxSZXNvbHZlcnMuc2V0KCdjeCcsIChpY29uTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gYGh0dHBzOi8vbW9ydGFyLWNkbi5oZWIuY29tL2ljb25zL2N4LzEuMS8ke2ljb25OYW1lfS5zdmdgO1xuICAgIH0pO1xuICAgIHRoaXMuc3NySW5pdCgpLnRoZW4oKCkgPT4ge30pO1xuICB9XG5cbiAgLyoqIEBoaWRkZW4gKi9cbiAgYXN5bmMgc3NySW5pdCgpIHtcbiAgICAvKipcbiAgICAgKiBUaGlzIG1vbnN0cm9zaXR5IGVuYWJsZXMgbG9jYWwgaWNvbiByZW5kZXJpbmcgZHVyaW5nIFNTUiBfV0lUSE9VVF8gYWxzbyByZXN1bHRpbmcgaW5cbiAgICAgKiBidW5kbGVycyBwdWxsaW5nIGluIHRoZSBlbnRpcmUgaWNvbiBsaWJyYXJ5IGVsc2V3aGVyZS4gVGhpcyBjYW4gYWxzbyBiZSBhY2hpZXZlZCB3aXRoIGp1c3RcbiAgICAgKiB0aGUgbWFnaWMgY29tbWVudHMgYmVsb3cuLi5idXQgbm90IGFsbCBidW5kbGVycyBzdXBwb3J0IHRoYXQga2luZCBvZiBmZWF0dXJlIHNvIHRoaXMgaXMgYW5cbiAgICAgKiBleHRyYSBwcmVjYXV0aW9uLlxuICAgICAqXG4gICAgICogRm9yIHRoaXMgdG8gd29yazpcbiAgICAgKiAtIFRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBgTU9SVEFSX0RZTkFNSUNfU1NSX0lDT05fSU1QT1JUU2AgbXVzdCBiZSB0cnVlXG4gICAgICogLSBUaGUgYEBtb3J0YXIvaWNvbnNgIHBhY2thZ2UgbXVzdCBiZSBhdmFpbGFibGVcbiAgICAgKi9cbiAgICB0cnkge1xuICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgY29uc3QgaWNvbkltcG9ydCA9XG4gICAgICAgICAgKHByb2Nlc3MgYXMgYW55KT8uZW52Lk1PUlRBUl9EWU5BTUlDX1NTUl9JQ09OX0lNUE9SVFMgPT09ICd0cnVlJyA/ICdAbW9ydGFyL2ljb25zJyA6IG51bGw7XG4gICAgICAgIGlmIChpY29uSW1wb3J0KSB7XG4gICAgICAgICAgLy8gQXR0ZW1wdCB0byBsb2FkIGFsbCBpY29ucyBsb2NhbGx5IGlmIHJ1biBzZXJ2ZXIgc2lkZS4gVGhlIGlnbm9yZVxuICAgICAgICAgIC8vIGNvbW1lbnRzIGhlcmUgcHJldmVudCB3ZWJwYWNrICYgdml0ZSBmcm9tIHRocm93aW5nIGEgd2FybmluZ1xuICAgICAgICAgIC8vIHNpbmNlIHRoZWlyIGluYWJpbGl0eSB0byBvcHRpbWl6ZSB0aGlzIGlzIGludGVudGlvbmFsIGhlcmUuXG4gICAgICAgICAgY29uc3QgaWNvbnMgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqLyAvKiBAdml0ZS1pZ25vcmUgKi8gaWNvbkltcG9ydCk7XG4gICAgICAgICAgdGhpcy5zZXJ2ZXJJY29uQ2FjaGUgPSBpY29ucz8uZGVmYXVsdCA/PyBpY29ucztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGVtcHR5ICovXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgdGhlIHJvb3QgdXJsIGZyb20gd2hpY2ggdGhpcyBzZXJ2aWNlIHdpbGwgYXR0ZW1wdCB0byBmZXRjaCBpY29ucyBmcm9tIGZvciB0aGUgZ2l2ZW4gXCJsaWJyYXJ5XCIuXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJJY29uTGlicmFyeShcbiAgICBpY29uTGlicmFyeSA9ICdfZGVmYXVsdCcsXG4gICAgaWNvblVybFJlc29sdmVyPzogKGljb25OYW1lOiBzdHJpbmcpID0+IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLmxhenlMb2FkRW5hYmxlZCA9IHRydWU7XG4gICAgaWYgKGljb25VcmxSZXNvbHZlcikge1xuICAgICAgdGhpcy5pY29uVXJsUmVzb2x2ZXJzLnNldChpY29uTGlicmFyeSA/PyAnX2RlZmF1bHQnLCBpY29uVXJsUmVzb2x2ZXIpO1xuICAgIH1cblxuICAgIC8vIEZldGNoIGFueSBpY29ucyByZXF1ZXN0ZWQgYmVmb3JlIHRoaXMgd2FzIGNhbGxlZCB0aGF0IGhhdmUgbm90IHlldCBiZWVuIGZldGNoZWRcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBpY29uU2lnbmFsXSBvZiB0aGlzLmljb25SZWdpc3RyeSkge1xuICAgICAgaWYgKCFpY29uU2lnbmFsIHx8ICFpY29uU2lnbmFsLmdldCgpPy5mZXRjaGVkKSB7XG4gICAgICAgIGNvbnN0IFtpY29uTGlicmFyeSwgcGF0aE5hbWVdID0gbmFtZS5zcGxpdCh0aGlzLmRlbGltaXRlcik7XG4gICAgICAgIHRoaXMuZmV0Y2hJY29uKHBhdGhOYW1lLCBpY29uTGlicmFyeSkudGhlbigoaWNvbikgPT4ge1xuICAgICAgICAgIGljb25TaWduYWwuc2V0KHsgZmV0Y2hlZDogdHJ1ZSwgZGF0YTogaWNvbiB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIE1hbnVhbGx5IHJlZ2lzdGVycyBuZXcgaWNvbnMgKi9cbiAgcHVibGljIHJlZ2lzdGVySWNvbnMoaWNvbnM6IE1vcnRhckljb25bXSwgaWNvbkxpYnJhcnkgPSAnX2RlZmF1bHQnKSB7XG4gICAgaWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgY29uc3QgaWNvblNpZ25hbCA9IHRoaXMuaWNvblJlZ2lzdHJ5LmdldChgJHtpY29uTGlicmFyeX0ke3RoaXMuZGVsaW1pdGVyfSR7aWNvbi5uYW1lfWApO1xuICAgICAgaWYgKCFpY29uU2lnbmFsKSB7XG4gICAgICAgIHRoaXMuaWNvblJlZ2lzdHJ5LnNldChcbiAgICAgICAgICBgJHtpY29uTGlicmFyeX0ke3RoaXMuZGVsaW1pdGVyfSR7aWNvbi5uYW1lfWAsXG4gICAgICAgICAgc2lnbmFsKHsgZmV0Y2hlZDogdHJ1ZSwgZGF0YTogaWNvbi5kYXRhIH0pXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGljb25TaWduYWwgJiYgIWljb25TaWduYWwuZ2V0KCk/LmZldGNoZWQpIHtcbiAgICAgICAgaWNvblNpZ25hbC5zZXQoeyBmZXRjaGVkOiB0cnVlLCBkYXRhOiBpY29uLmRhdGEgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIHlvdSB0byBvdmVycmlkZSB0aGUgbGF6eSBsb2FkaW5nLiBEZWZhdWx0cyB0byBgdHJ1ZWAuXG4gICAqIFdoZW4gYGZhbHNlYCBpY29ucyB3aWxsIG5vdCBiZSBmZXRjaGVkIGZyb20gcmVtb3RlIGxvY2F0aW9ucy5cbiAgICovXG4gIHB1YmxpYyBzZXRMYXp5TG9hZGluZyh2YWx1ZTogYm9vbGVhbiA9IHRydWUpIHtcbiAgICB0aGlzLmxhenlMb2FkRW5hYmxlZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB5b3UgdG8gb3ZlcnJpZGUgdGhlIHRlc3QgbW9kZS4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICogV2hlbiB0cnVlIHdhcm5pbmdzIHdpbGwgbm90IGJlIHRocm93biBhbmQgbm8gZmV0Y2hlcyB3aWxsIGJlIG1hZGUuXG4gICAqL1xuICBwdWJsaWMgc2V0VGVzdE1vZGUodmFsdWU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIHRoaXMudGVzdE1vZGVFbmFibGVkID0gdmFsdWU7XG4gIH1cblxuICAvKiogU2V0cyBhIG5ldyBjdXN0b20gZmFsbGJhY2sgaWNvbiAqL1xuICBwdWJsaWMgc2V0RmFsbGJhY2tJY29uKGZhbGxiYWNrSWNvbjogc3RyaW5nIHwgbnVsbCkge1xuICAgIHRoaXMuZmFsbGJhY2tJY29uID0gZmFsbGJhY2tJY29uO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIHJldHJpZXZlIGFuIGljb24gZnJvbSB0aGUgcmVnaXN0cnkuXG4gICAqXG4gICAqIElmIGEgcm9vdFN2Z0ljb25VcmwgaGFzIGJlZW4gc2V0LCB0aGlzIG1ldGhvZCB3aWxsXG4gICAqIGF0dGVtcHQgdG8gbG9hZCB0aGUgaWNvbiBmcm9tIHRoZXJlLiBJZiBzdWNjZXNzZnVsLFxuICAgKiB0aGF0IHN2ZyB3aWxsIGJlIHJlZ2lzdGVyZWQgZm9yIHJldXNlLlxuICAgKi9cbiAgcHVibGljIGdldEljb24oXG4gICAgcGF0aE5hbWU6IHN0cmluZyxcbiAgICBpY29uTGlicmFyeSA9ICdfZGVmYXVsdCcsXG4gICAgYWJvcnRTaWduYWw/OiBBYm9ydFNpZ25hbFxuICApOiBTaWduYWw8c3RyaW5nIHwgbnVsbD4ge1xuICAgIC8vIElmIGljb24gaXMgdW5kZWZpbmVkIGluc3RhbnRseSByZXR1cm4gdGhlIGZhbGxiYWNrIGljb25cbiAgICBpZiAocGF0aE5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHNpZ25hbCh0aGlzLmZhbGxiYWNrSWNvbik7XG4gICAgfVxuICAgIGNvbnN0IHJlZ2lzdGVyZWRTaWduYWwgPSB0aGlzLmljb25SZWdpc3RyeS5nZXQoYCR7aWNvbkxpYnJhcnl9JHt0aGlzLmRlbGltaXRlcn0ke3BhdGhOYW1lfWApO1xuICAgIGNvbnN0IGljb25SZWdpc3RlcmVkID0gISFyZWdpc3RlcmVkU2lnbmFsO1xuICAgIC8vIElmIHRoZSBpY29uIGlzIHJlZ2lzdGVyZWQganVzdCByZXR1cm4gaXRcbiAgICBpZiAoaWNvblJlZ2lzdGVyZWQpIHtcbiAgICAgIHJldHVybiBjb21wdXRlZChyZWdpc3RlcmVkU2lnbmFsLCAoZW50cnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGVudHJ5Py5kYXRhO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgaWYgbGF6eUxvYWRFbmFibGVkIHRoZW4gYXR0ZW1wdCB0byBmZXRjaCBhbmQgcmVnaXN0ZXIgdGhlIGljb25cbiAgICBlbHNlIGlmICghaWNvblJlZ2lzdGVyZWQgJiYgdGhpcy5sYXp5TG9hZEVuYWJsZWQpIHtcbiAgICAgIGxldCBpY29uU2lnbmFsOiBTaWduYWw8SWNvbkRhdGE+O1xuXG4gICAgICAvLyBMb2FkIGZyb20gbG9jYWwgc2VydmVyIGljb24gY2FjaGUgZHVyaW5nIHNzciBpZiBpdCBleGlzdHNcbiAgICAgIGlmIChpc1NzcigpKSB7XG4gICAgICAgIGlmICh0aGlzLnNlcnZlckljb25DYWNoZSkge1xuICAgICAgICAgIGNvbnN0IGNhbWVsTmFtZSA9IHBhdGhOYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIChnKSA9PiBnWzFdLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgIGNvbnN0IGljb25OYW1lID0gYCR7aWNvbkxpYnJhcnkgPT09ICdjeCcgPyAnY3gnIDogJ210cid9SWNvbiR7Y2FtZWxOYW1lXG4gICAgICAgICAgICAuY2hhckF0KDApXG4gICAgICAgICAgICAudG9VcHBlckNhc2UoKX0ke2NhbWVsTmFtZS5zbGljZSgxKX1gO1xuXG4gICAgICAgICAgaWYgKHRoaXMuc2VydmVySWNvbkNhY2hlW2ljb25OYW1lXSBhcyBhbnkpIHtcbiAgICAgICAgICAgIGljb25TaWduYWwgPSBzaWduYWw8SWNvbkRhdGE+KHtcbiAgICAgICAgICAgICAgZGF0YTogKHRoaXMuc2VydmVySWNvbkNhY2hlW2ljb25OYW1lXSBhcyBhbnkpPy5kYXRhLFxuICAgICAgICAgICAgICBmZXRjaGVkOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZWRGYWlsZWRMb2FkKGljb25MaWJyYXJ5LCBwYXRoTmFtZSwgaWNvblNpZ25hbCkgYXMgU2lnbmFsPFxuICAgICAgICAgICAgICBzdHJpbmcgfCBudWxsXG4gICAgICAgICAgICA+O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBJZiB0aGUgaWNvbiBjYWNoZSBkb2Vzbid0IGV4aXN0IGp1c3QgZG8gbm90aGluZyBiZWNhdXNlIHRoZSBpY29uIHdpbGwgYmUgbG9hZGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBpY29uU2lnbmFsID0gc2lnbmFsPEljb25EYXRhPih7XG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgZmV0Y2hlZDogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIElmIG5vdCBvbiB0aGUgc2VydmVyIHRoZW4gZmV0Y2ggdGhlIGljb25cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBTZXQgdGhlIGljb24gYXMgdGhlIHJlc3VsdCBvZiB0aGUgYXdhaXQgcmlnaHQgbm93LCBiZWZvcmUgdGhlIGZldGNoXG4gICAgICAgIC8vIGlzIGluaXRpYXRlZCwgdG8gcHJldmVudCByZWR1bmRhbnQgaW5pdGlhbCBxdWVyaWVzIG9uIHBhZ2UgbG9hZFxuICAgICAgICBpY29uU2lnbmFsID0gc2lnbmFsPEljb25EYXRhPih7XG4gICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICBmZXRjaGVkOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaWNvblJlZ2lzdHJ5LnNldChgJHtpY29uTGlicmFyeX0ke3RoaXMuZGVsaW1pdGVyfSR7cGF0aE5hbWV9YCwgaWNvblNpZ25hbCk7XG5cbiAgICAgICAgdGhpcy5mZXRjaEljb24ocGF0aE5hbWUsIGljb25MaWJyYXJ5LCBhYm9ydFNpZ25hbCkudGhlbigoaWNvbikgPT4ge1xuICAgICAgICAgIGljb25TaWduYWwuc2V0KHsgZGF0YTogaWNvbiwgZmV0Y2hlZDogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb21wdXRlZChpY29uU2lnbmFsLCAoZW50cnkpID0+IGVudHJ5Py5kYXRhKTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCBqdXN0IGFsZXJ0IHRoYXQgdGhlIGljb24gaXNuJ3QgcmVnaXN0ZXJlZCBhbmQgcmV0dXJuIHRoZSBmYWxsYmFja1xuICAgIGVsc2UgaWYgKCFpY29uUmVnaXN0ZXJlZCAmJiAhdGhpcy5sYXp5TG9hZEVuYWJsZWQpIHtcbiAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLmhhbmRsZWRGYWlsZWRMb2FkKGljb25MaWJyYXJ5LCBwYXRoTmFtZSk7XG4gICAgICByZXR1cm4gdGVtcDtcbiAgICB9XG4gIH1cblxuICAvKiogTG9ncyBhIHdhcm5pbmcgYW5kIHJldHVybnMgZmFsbGJhY2sgaWNvbi4gQ2FsbCB3aGVuIGF0dGVtcHQgdG8gbG9hZCBpY29uIGhhcyBmYWlsZWQuICovXG4gIHByaXZhdGUgaGFuZGxlZEZhaWxlZExvYWQoaWNvbkxpYnJhcnksIHBhdGhOYW1lLCBpY29uU2lnbmFsPzogU2lnbmFsPEljb25EYXRhPikge1xuICAgIC8vIENyZWF0ZSByZXR1cm4gc3ViaiBpZiBvbmUgaXNuJ3QgcGFzc2VkXG4gICAgaWYgKCFpY29uU2lnbmFsKSB7XG4gICAgICBpY29uU2lnbmFsID0gc2lnbmFsPEljb25EYXRhPih7XG4gICAgICAgIGRhdGE6IHRoaXMuZmFsbGJhY2tJY29uLFxuICAgICAgICBmZXRjaGVkOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmljb25SZWdpc3RyeS5zZXQoYCR7aWNvbkxpYnJhcnl9JHt0aGlzLmRlbGltaXRlcn0ke3BhdGhOYW1lfWAsIGljb25TaWduYWwpO1xuICAgIGlmICghdGhpcy50ZXN0TW9kZUVuYWJsZWQpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYE1vcnRhcjogTm8gaWNvbiBpcyByZWdpc3RlcmVkIGZvciB0aGUgcGF0aCBuYW1lIFwiJHtwYXRoTmFtZX1cIi4gRGlkIHlvdSBhZGQgaXQgdG8gdGhlIG1vcnRhciBpY29uIHJlZ2lzdHJ5P2BcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBjb21wdXRlZChpY29uU2lnbmFsLCAoZW50cnkpID0+IGVudHJ5Py5kYXRhKTtcbiAgfVxuXG4gIC8qKiBGZXRjaGVzIGFuIGljb24gZm9yIHRoZSBnaXZlbiBsaWJyYXJ5IGJ5IG5hbWUgKi9cbiAgcHJpdmF0ZSBhc3luYyBmZXRjaEljb24ocGF0aE5hbWU6IHN0cmluZywgaWNvbkxpYnJhcnkgPSAnX2RlZmF1bHQnLCBhYm9ydFNpZ25hbD86IEFib3J0U2lnbmFsKSB7XG4gICAgaWYgKCF0aGlzLnRlc3RNb2RlRW5hYmxlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZXIgPSB0aGlzLmljb25VcmxSZXNvbHZlcnMuZ2V0KGljb25MaWJyYXJ5KTtcbiAgICAgICAgLy8gSWYgbm8gcmVzb2x2ZXIgaXMgcmVnaXN0ZXJlZCBmb3IgdGhlIHJlcXVlc3RlZCBsaWJyYXJ5XG4gICAgICAgIGlmICghcmVzb2x2ZXIpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgTXRlSWNvblJlZ2lzdHJ5U2VydmljZTogTm8gaWNvblVybFJlc29sdmVyIHJlZ2lzdGVyZWQgZm9yIGxpYnJhcnk6IFwiJHtpY29uTGlicmFyeX1cImBcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiB0aGlzLmZhbGxiYWNrSWNvbjtcbiAgICAgICAgfVxuICAgICAgICAvLyBDcmVhdGUgdGhlIGZldGNoIHJlcXVlc3QgYnV0IHRvIG5vdCBhd2FpdCB5ZXRcbiAgICAgICAgY29uc3QgcmVxID0gZmV0Y2gocmVzb2x2ZXIocGF0aE5hbWUpLCB7IG1ldGhvZDogJ2dldCcsIHNpZ25hbDogYWJvcnRTaWduYWwgfSk7XG4gICAgICAgIGNvbnN0IHJlcyA9IHRoaXMucGFyc2VJY29uRGF0YShwYXRoTmFtZSwgcmVxKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlcztcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIGZldGNoIGZhaWxlZCBsb2cgYW5kIHJldHVybiBmYWxsYmFja1xuICAgICAgICBpZiAocGF0aE5hbWUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlOiBmYWlsZWQgdG8gbG9hZCBpY29uOiAke3BhdGhOYW1lfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmZhbGxiYWNrSWNvbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tJY29uO1xuICB9XG5cbiAgLyoqIEFzeW5jaHJvbm91c2x5IHBhcnNlIGljb24gZmV0Y2ggcmVzcG9uc2UgZGF0YSAqL1xuICBwcml2YXRlIHBhcnNlSWNvbkRhdGEocGF0aE5hbWU6IHN0cmluZywgcmVxOiBQcm9taXNlPFJlc3BvbnNlPik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlcVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzLnRleHQoKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwYXRoTmFtZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlOiBmYWlsZWQgdG8gbG9hZCBpY29uOiAke3BhdGhOYW1lfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gR3JhY2VmdWxseSByZXNvbHZlIHdpdGggZmFsbGJhY2sgaWNvbiBvbiBmYWlsZWQgbG9hZFxuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZhbGxiYWNrSWNvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAvLyBHcmFjZWZ1bGx5IHJlc29sdmUgd2l0aCBmYWxsYmFjayBpY29uIG9uIGVycm9yXG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLmZhbGxiYWNrSWNvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IE10ZUljb25SZWdpc3RyeVNlcnZpY2UgPSBuZXcgX010ZUljb25SZWdpc3RyeVNlcnZpY2UoKTtcblxuLyoqXG4gKiBJbnN0YW5jZSBvZiBfTXRlSWNvblJlZ2lzdHJ5U2VydmljZSBleHBvcnRlZCBhcyBhIHNpbmdsZXRvbi5cbiAqXG4gKiBTZXJ2aWNlIHVzZWQgdG8gcmVnaXN0ZXIgc3ZnIHN0cmluZ3MgZm9yIGEgZ2l2ZW4gaWNvbiBuYW1lIGFuZCB0aGVuIGxvb2sgdGhlbSB1cCBieSB0aGF0IHNhbWUgbmFtZS5cbiAqL1xuZXhwb3J0IHsgTXRlSWNvblJlZ2lzdHJ5U2VydmljZSB9O1xuIiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2BAa2V5ZnJhbWVzIHByb2dyZXNzLXNwaW5uZXItYW5pbWF0aW9uezAle3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9dG97dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fTpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDotbW96LWZpdC1jb250ZW50O2hlaWdodDpmaXQtY29udGVudDt3aWR0aDotbW96LWZpdC1jb250ZW50O3dpZHRoOmZpdC1jb250ZW50O3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0uY29udGFpbmVye2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjtvdmVyZmxvdzp2aXNpYmxlO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uY29udGFpbmVyIHN2Z3tkaXNwbGF5OmJsb2NrO292ZXJmbG93OnZpc2libGV9LmNvbnRhaW5lciBwYXRoe2ZpbGwtb3BhY2l0eTowfS50cmFja3tzdHJva2U6cmdiKHZhcigtLW10ZS1ib3JkZXItMS1yZ2IpKX0uYmFye2xlZnQ6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtzdHJva2U6cmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1iYXNlLXJnYikpfS5iYXIgcGF0aHt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2l0aW9uOnN0cm9rZS1kYXNob2Zmc2V0IC4ycyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKSAwbXM7d2lsbC1jaGFuZ2U6c3Ryb2tlLWRhc2hvZmZzZXR9Omhvc3QoW3dpdGhvdXRBbmltYXRpb25dKSAuYmFyIHBhdGh7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH06aG9zdChbaW5kZXRlcm1pbmF0ZV0pe2FuaW1hdGlvbjpwcm9ncmVzcy1zcGlubmVyLWFuaW1hdGlvbiAuNXMgbGluZWFyIGluZmluaXRlfTpob3N0KFtpbmRldGVybWluYXRlXSkgLmJhciBwYXRoe3RyYW5zaXRpb246bm9uZX06aG9zdChbY29sb3I9cHJpbWFyeV0pIC5iYXJ7c3Ryb2tlOnJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XSkgLmJhcntzdHJva2U6cmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXRlcnRpYXJ5XSkgLmJhcntzdHJva2U6cmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c3VjY2Vzc10pIC5iYXJ7c3Ryb2tlOnJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9d2FybmluZ10pIC5iYXJ7c3Ryb2tlOnJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXSkgLmJhcntzdHJva2U6cmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtcmdiKSl9QG1lZGlhIHNjcmVlbiBhbmQgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKXsuYmFyIHBhdGh7dHJhbnNpdGlvbjpub25lfTpob3N0KFtpbmRldGVybWluYXRlXSl7YW5pbWF0aW9uOm5vbmV9fWA7IiwgIi8qKlxuICogQmFzZSByZWZlcmVuY2Ugc2l6ZSBvZiB0aGUgc3Bpbm5lci5cbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IFNQSU5ORVJfQkFTRV9TSVpFID0gMTAwO1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgZGVmaW5lRWxlbWVudCB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgTXRlUHJvZ3Jlc3NTcGlubmVyIH0gZnJvbSAnLi9wcm9ncmVzcy1zcGlubmVyLmVsZW1lbnQnO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBjb21wb25lbnQgZGVmaW5pdGlvbiB0byBiZSB1c2VkIGFzIGEgY29udmVuaWVuY2UgcmVmZXJlbmNlIHRvIGNyZWF0ZSBhblxuICogaW5kZXRlcm1pbmF0ZSBgPG10ci1wcm9ncmVzcy1zcGlubmVyPmAgaW5zdGFuY2UuXG4gKlxuICogQGNzc3BhcnQgY29udGFpbmVyIC0gSW5uZXIgY29udGFpbmVyIGVsZW1lbnQgdGhhdCBob3VzZXMgdGhlIHRyYWNrIGFuZCBiYXJcbiAqIEBjc3NwYXJ0IHRyYWNrIC0gVGhlIHRyYWNrIGJlaGluZCB0aGUgZmlsbGVkIGJhclxuICogQGNzc3BhcnQgYmFyIC0gVGhlIGZpbGxlZCBwb3J0aW9uIG9mIHRoZSBzcGlubmVyXG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtc3Bpbm5lcicpXG5leHBvcnQgY2xhc3MgTXRlU3Bpbm5lciBleHRlbmRzIE10ZVByb2dyZXNzU3Bpbm5lciB7XG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgb3ZlcnJpZGUgaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS1zcGlubmVyJzogTXRlUHJvZ3Jlc3NTcGlubmVyO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzLCBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0QnV0dG9uQm9yZGVyRmFjdG9yeSA9ICh3aWR0aD8sIGNvbG9yPywgc3R5bGU/KSA9PlxuICBgJHtzdHlsZSA/PyAnc29saWQnfSAke1xuICAgIGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kcyhbXG4gICAgICB7IHByb3A6ICdib3JkZXJXaWR0aCcsIHZhbHVlOiBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKHdpZHRoID8/ICcxcHgnKSB9LFxuICAgIF0pWzBdPy52YWx1ZVxuICB9ICR7ZG90U3RyaW5nVG9Db25maWdWYWx1ZShjb2xvcikgPz8gY29uZmlnLmNvbG9yLmJvcmRlcjF9YDtcbiIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1wYWRkaW5nLXk6dmFyKC0tbXRlLXNwYWNlLXNtKTstLXBhZGRpbmcteDp2YXIoLS1wYWRkaW5nLXkpOy0tYm9yZGVyLXJhZGl1czp2YXIoLS1ncm91cC1yYWRpdXMsdmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtZnVsbCkpOy0tZm9jdXMtcmFkaXVzOnZhcigtLWdyb3VwLWZvY3VzLXJhZGl1cyx2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1mdWxsKSk7LS1pY29uLXNpemU6MTZweDstLWNvbG9yOmluaGVyaXR9Omhvc3QoW3JhZGl1cz1zbV0pey0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1zbSk7LS1mb2N1cy1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpfTpob3N0IG10ZS1pY29ue2hlaWdodDp2YXIoLS1pY29uLXNpemUpO21pbi1oZWlnaHQ6dmFyKC0taWNvbi1zaXplKTttaW4td2lkdGg6dmFyKC0taWNvbi1zaXplKTt3aWR0aDp2YXIoLS1pY29uLXNpemUpfTpob3N0KFtzaXplPXNtXSkgbXRlLWljb257LS1pY29uLXNpemU6MTJweH06aG9zdChbc2l6ZT1sZ10pIG10ZS1pY29uey0taWNvbi1zaXplOjIwcHh9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tY29sb3I6dmFyKC0tbXRlLWxpZ2h0KTstLWJhY2tncm91bmQ6dmFyKC0tbXRlLWRhcmspOy0tei1pbmRleDp2YXIoLS1tdGUtei1pbmRleC0yMCk7LS1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteGwpOy0tcGFkZGluZy14OnZhcigtLW10ZS1zcGFjZS1tZCk7LS1wYWRkaW5nLXk6dmFyKC0tbXRlLXNwYWNlLXNtKTtwb2ludGVyLWV2ZW50czphdXRvfS50b29sdGlwe2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtib3JkZXItcmFkaXVzOnZhcigtLXJhZGl1cyk7Y29sb3I6dmFyKC0tY29sb3IpO2Rpc3BsYXk6bm9uZTtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tbGluZS1oZWlnaHQpO21heC13aWR0aDoyNTBweDtvcGFjaXR5OjA7cGFkZGluZzp2YXIoLS1wYWRkaW5nLXkpIHZhcigtLXBhZGRpbmcteCk7cG9zaXRpb246Zml4ZWQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3otaW5kZXg6dmFyKC0tei1pbmRleCl9LmFycm93LC50b29sdGlwe2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCl9LmFycm93e2hlaWdodDoxMHB4O3Bvc2l0aW9uOmFic29sdXRlO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3dpZHRoOjEwcHh9YDsiLCAiaW1wb3J0IHsgTXRlT3ZlcmxheVBsYWNlbWVudCwgTXRlT3ZlcmxheVBvc2l0aW9uIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gJ0BmbG9hdGluZy11aS9kb20nO1xuXG4vKiogQ2FsY3VsYXRlcyBvcHRpbWFsIGZsb2F0aW5nLXVpIG92ZXJsYXlzIGZvciB0aGUgY3VycmVudCBwb3NpdGlvbiAqL1xuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZU92ZXJsYXlQbGFjZW1lbnRzID0gKFxuICBwb3NpdGlvbjogTXRlT3ZlcmxheVBvc2l0aW9uLFxuICBwbGFjZW1lbnQ6IE10ZU92ZXJsYXlQbGFjZW1lbnQgPSAnY2VudGVyJ1xuKTogW1BsYWNlbWVudCwgUGxhY2VtZW50W11dID0+IHtcbiAgY29uc3QgZ2V0RmFsbGJhY2tHcm91cCA9IChcbiAgICBwb3NpdGlvbjogTXRlT3ZlcmxheVBvc2l0aW9uLFxuICAgIHByZWZlcnJlZFBsYWNlbWVudDogTXRlT3ZlcmxheVBsYWNlbWVudCxcbiAgICBwcmltYXJ5UG9zaXRpb246IHN0cmluZ1xuICApOiBQbGFjZW1lbnRbXSA9PiB7XG4gICAgaWYgKHByaW1hcnlQb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09ICd0b3AnIHx8IHBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgICBwcmVmZXJyZWRQbGFjZW1lbnQgPSAnc3RhcnQnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJpbWFyeVBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09ICd0b3AnIHx8IHBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgICBwcmVmZXJyZWRQbGFjZW1lbnQgPSAnZW5kJztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYWxpZ25PcmRlciA9XG4gICAgICBwcmVmZXJyZWRQbGFjZW1lbnQgPT09ICdjZW50ZXInXG4gICAgICAgID8gWycnLCAnLWVuZCcsICctc3RhcnQnXVxuICAgICAgICA6IHByZWZlcnJlZFBsYWNlbWVudCA9PT0gJ3N0YXJ0J1xuICAgICAgICA/IFsnLXN0YXJ0JywgJycsICctZW5kJ11cbiAgICAgICAgOiBbJy1lbmQnLCAnJywgJy1zdGFydCddO1xuICAgIHJldHVybiBhbGlnbk9yZGVyXG4gICAgICAubWFwKChhbGlnbikgPT4gYCR7cG9zaXRpb259JHthbGlnbn1gIGFzIFBsYWNlbWVudClcbiAgICAgIC5maWx0ZXIoKHBsYWNlbWVudCkgPT4gcGxhY2VtZW50ICE9PSBwcmltYXJ5UG9zaXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IHByZWZlcnJlZCA9IGAke3Bvc2l0aW9ufSR7XG4gICAgcGxhY2VtZW50ID09PSAnZW5kJyA/ICctZW5kJyA6IHBsYWNlbWVudCA9PT0gJ3N0YXJ0JyA/ICctc3RhcnQnIDogJydcbiAgfWAgYXMgUGxhY2VtZW50O1xuXG4gIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgcHJlZmVycmVkLFxuICAgICAgICBbXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgnYm90dG9tJywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ3RvcCcsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCdyaWdodCcsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCdsZWZ0JywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICBdLFxuICAgICAgXTtcbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHByZWZlcnJlZCxcbiAgICAgICAgW1xuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ2xlZnQnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgncmlnaHQnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgndG9wJywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ2JvdHRvbScsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgXSxcbiAgICAgIF07XG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgcHJlZmVycmVkLFxuICAgICAgICBbXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgncmlnaHQnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgnbGVmdCcsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCd0b3AnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgnYm90dG9tJywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICBdLFxuICAgICAgXTtcbiAgICBjYXNlICd0b3AnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW1xuICAgICAgICBwcmVmZXJyZWQsXG4gICAgICAgIFtcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCd0b3AnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgnYm90dG9tJywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ3JpZ2h0JywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ2xlZnQnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgIF0sXG4gICAgICBdO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlRGVmYXVsdFBhbmVsQW5pbWF0aW9uID0gKFxuICByZW5kZXJlZFBsYWNlbWVudDogUGxhY2VtZW50LFxuICBvcHRpb25zOiB7XG4gICAgZmFsbGJhY2tQb3NpdGlvbjogc3RyaW5nO1xuICAgIGZhbGxiYWNrUGxhY2VtZW50OiBzdHJpbmc7XG4gICAgYWN0aW9uOiAnb3BlbicgfCAnY2xvc2UnO1xuICAgIHNjYWxlWD86IG51bWJlcjtcbiAgICBzY2FsZVk/OiBudW1iZXI7XG4gIH1cbikgPT4ge1xuICBjb25zdCBzY2FsZVggPSBvcHRpb25zLnNjYWxlWCA/PyAwLjk7XG4gIGNvbnN0IHNjYWxlWSA9IG9wdGlvbnMuc2NhbGVZID8/IG51bGw7XG4gIGxldCBwb3NpdGlvbiA9IG9wdGlvbnMuZmFsbGJhY2tQb3NpdGlvbjtcbiAgbGV0IHBsYWNlbWVudCA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnQ7XG4gIGlmIChyZW5kZXJlZFBsYWNlbWVudCkge1xuICAgIGNvbnN0IFtwYSwgcGJdID0gcmVuZGVyZWRQbGFjZW1lbnQuc3BsaXQoJy0nKTtcbiAgICBwb3NpdGlvbiA9IHBhO1xuICAgIHBsYWNlbWVudCA9IHBiO1xuICB9XG5cbiAgbGV0IHRyYW5zbGF0ZVkgPSBudWxsO1xuICBpZiAocG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgdHJhbnNsYXRlWSA9ICcxMCUnO1xuICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgIHRyYW5zbGF0ZVkgPSAnLTEwJSc7XG4gIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdyaWdodCcgfHwgcG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgIGlmIChwbGFjZW1lbnQgPT09ICdzdGFydCcpIHtcbiAgICAgIHRyYW5zbGF0ZVkgPSAnLTUlJztcbiAgICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gJ2VuZCcpIHtcbiAgICAgIHRyYW5zbGF0ZVkgPSAnNSUnO1xuICAgIH1cbiAgfVxuXG4gIGxldCB0cmFuc2xhdGVYID0gJyc7XG4gIGlmIChwb3NpdGlvbiA9PT0gJ3RvcCcgfHwgcG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgaWYgKHBsYWNlbWVudCA9PT0gJ3N0YXJ0Jykge1xuICAgICAgdHJhbnNsYXRlWCA9ICctNSUnO1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSAnZW5kJykge1xuICAgICAgdHJhbnNsYXRlWCA9ICc1JSc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChwb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdHJhbnNsYXRlWCA9ICctMTAlJztcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHRyYW5zbGF0ZVggPSAnMTAlJztcbiAgICB9XG4gIH1cbiAgaWYgKG9wdGlvbnMuYWN0aW9uID09PSAnb3BlbicpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NhbGVYOiBbc2NhbGVYLCAxXSxcbiAgICAgIHNjYWxlWTogc2NhbGVZID8gW3NjYWxlWSwgMV0gOiB1bmRlZmluZWQsXG4gICAgICB0cmFuc2xhdGVYOiBbdHJhbnNsYXRlWCwgJzAlJ10sXG4gICAgICB0cmFuc2xhdGVZOiB0cmFuc2xhdGVZID8gW3RyYW5zbGF0ZVksICcwJSddIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjYWxlWDogWzEsIHNjYWxlWF0sXG4gICAgICBzY2FsZVk6IHNjYWxlWSA/IFsxLCBzY2FsZVldIDogdW5kZWZpbmVkLFxuICAgICAgdHJhbnNsYXRlWDogWycwJScsIHRyYW5zbGF0ZVhdLFxuICAgICAgdHJhbnNsYXRlWTogdHJhbnNsYXRlWSA/IFsnMCUnLCB0cmFuc2xhdGVZXSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9XG59O1xuIiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpjb250ZW50c31zbG90W25hbWU9b3ZlcmxheV06OnNsb3R0ZWQoKil7cG9zaXRpb246YWJzb2x1dGV9YDsiLCAiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IGJhc2VTdHlsZXMsIGRlZmluZUVsZW1lbnQsIE10ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vZGVzY3JpcHRpb24uc3R5bGVzJztcblxubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbi8qKlxuICogRWxlbWVudCB1c2VkIHRvIHJlcHJlc2VudCBkZXNjcmlwdGlvbiBtZXNzYWdpbmcgdGV4dFxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLWRlc2NyaXB0aW9uJylcbmV4cG9ydCBjbGFzcyBNdGVEZXNjcmlwdGlvbiBleHRlbmRzIE10ZUVsZW1lbnQge1xuICBzdGF0aWMgc3R5bGVzID0gW2Jhc2VTdHlsZXMsIHN0eWxlc107XG5cbiAgLyoqIERlZmF1bHQgdW5pcXVlIElEIGZvciB0aGlzIGhpbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBpZCA9IGBtdGUtZGVzY3JpcHRpb24tLSR7bmV4dFVuaXF1ZUlkKyt9YDtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgJHt0aGlzLmluc3RhbmNlU3R5bGVzfTxzbG90Pjwvc2xvdD5gO1xuICB9XG59XG5cbi8qKlxuICogRWxlbWVudCB1c2VkIHRvIHJlcHJlc2VudCBkZXNjcmlwdGlvbiBtZXNzYWdpbmcgdGV4dFxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLWRlc2NyaXB0aW9uLXRleHQnKVxuZXhwb3J0IGNsYXNzIE10ZURlc2NyaXB0aW9uVGV4dCBleHRlbmRzIE10ZURlc2NyaXB0aW9uIHt9XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS1kZXNjcmlwdGlvbic6IE10ZURlc2NyaXB0aW9uO1xuICAgICdtdGUtZGVzY3JpcHRpb24tdGV4dCc6IE10ZURlc2NyaXB0aW9uVGV4dDtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Y29sb3I6dmFyKC0tbXRlLWluay0yKTtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtd2VpZ2h0KTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1saW5lLWhlaWdodCk7bWFyZ2luOnZhcigtLW10ZS1zcGFjZS14cykgMDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3dpZHRoOjEwMCV9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWxpZ2h0ZXItcmdiKSk7Ym9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14cyk7Y29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1iYXNlLXJnYikpO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXdlaWdodCk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7Z2FwOnZhcigtLW10ZS1zcGFjZS14cyk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tbGluZS1oZWlnaHQpO21hcmdpbjp2YXIoLS1tdGUtc3BhY2UteHMpIDA7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MCB2YXIoLS1tdGUtc3BhY2UteHMpO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7d2lkdGg6MTAwJX1gOyIsICJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgYmFzZVN0eWxlcywgZGVmaW5lRWxlbWVudCwgTXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL2NvcmUvJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vaGludC5zdHlsZXMnO1xuXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuLyoqXG4gKiBFbGVtZW50IHVzZWQgdG8gcmVwcmVzZW50IGhpbnQgbWVzc2FnaW5nIHRleHRcbiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS1oaW50JylcbmV4cG9ydCBjbGFzcyBNdGVIaW50IGV4dGVuZHMgTXRlRWxlbWVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbYmFzZVN0eWxlcywgc3R5bGVzXTtcblxuICAvKiogRGVmYXVsdCB1bmlxdWUgSUQgZm9yIHRoaXMgaGludCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGlkID0gYG10ZS1oaW50LS0ke25leHRVbmlxdWVJZCsrfWA7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYCR7dGhpcy5pbnN0YW5jZVN0eWxlc308c2xvdD48L3Nsb3Q+YDtcbiAgfVxufVxuXG4vKipcbiAqIEVsZW1lbnQgdXNlZCB0byByZXByZXNlbnQgaGludCBtZXNzYWdpbmcgdGV4dFxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLWhpbnQtdGV4dCcpXG5leHBvcnQgY2xhc3MgTXRlSGludFRleHQgZXh0ZW5kcyBNdGVIaW50IHt9XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS1oaW50JzogTXRlSGludDtcbiAgICAnbXRlLWhpbnQtdGV4dCc6IE10ZUhpbnRUZXh0O1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtjb2xvcjp2YXIoLS1tdGUtaW5rLTIpO2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC13ZWlnaHQpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXdlaWdodC1tZWRpdW0pO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWxpbmUtaGVpZ2h0KTttYXJnaW46dmFyKC0tbXRlLXNwYWNlLXhzKSAwO292ZXJmbG93OmhpZGRlbjt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3dpZHRoOjEwMCV9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDthbGlnbi1pdGVtczpjZW50ZXI7Y29sb3I6aW5oZXJpdDtjdXJzb3I6aW5oZXJpdDtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC13ZWlnaHQpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXdlaWdodC1ib2xkKTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItbGluZS1oZWlnaHQpO21hcmdpbjp2YXIoLS1tdGUtc3BhY2UteHMpIDA7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdH06aG9zdChbZGlzYWJsZWRdKXtjb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtNCk7Y3Vyc29yOm5vdC1hbGxvd2VkfS5yZXF1aXJlZHtjb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtcmdiKSk7cGFkZGluZy1sZWZ0OnZhcigtLW10ZS1zcGFjZS14cyl9YDsiLCAiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBNdGVFbGVtZW50LCBkZWZpbmVFbGVtZW50LCBNdGVFbGVtZW50UGFydHMsIGJhc2VTdHlsZXMgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vdmlzdWFsbHktaGlkZGVuLnN0eWxlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXRlVmlzdWFsbHlIaWRkZW5QYXJ0cyBleHRlbmRzIE10ZUVsZW1lbnRQYXJ0cyB7fVxuXG4vKipcbiAqIEBzbG90IC0gVGhlIGNvbnRlbnQgdG8gYmUgdmlzdWFsbHkgaGlkZGVuLlxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLXZpc3VhbGx5LWhpZGRlbicpXG5leHBvcnQgY2xhc3MgTXRlVmlzdWFsbHlIaWRkZW4gZXh0ZW5kcyBNdGVFbGVtZW50IHtcbiAgc3RhdGljIHN0eWxlcyA9IFtiYXNlU3R5bGVzLCBzdHlsZXNdO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGA8c2xvdD48L3Nsb3Q+YDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdtdGUtdmlzdWFsbHktaGlkZGVuJzogTXRlVmlzdWFsbHlIaWRkZW47XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3QoOm5vdCg6Zm9jdXMtd2l0aGluKSl7aGVpZ2h0OjFweCFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50O3dpZHRoOjFweCFpbXBvcnRhbnQ7Y2xpcDpyZWN0KDAgMCAwIDApIWltcG9ydGFudDtib3JkZXI6bm9uZSFpbXBvcnRhbnQ7Y2xpcC1wYXRoOmluc2V0KDUwJSkhaW1wb3J0YW50O292ZXJmbG93OmhpZGRlbiFpbXBvcnRhbnQ7cGFkZGluZzowIWltcG9ydGFudDt3aGl0ZS1zcGFjZTpub3dyYXAhaW1wb3J0YW50fWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUFBQSxlQUFxQjtBQUNyQixJQUFBQyxzQkFB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QVgsOEJBQVM7R0FsRUMsZUFrRUM7QUFHQTtNQUFYLDhCQUFTO0dBckVDLGVBcUVDO0FBR0k7RUFBZixhQUFhO0dBeEVILGVBd0VLO0FBR0E7RUFBZixhQUFhO0dBM0VILGVBMkVLO0FBR0E7RUFBZixhQUFhO0dBOUVILGVBOEVLO0FBRWE7TUFBNUIsMkJBQU0sb0JBQW9CO0dBaEZoQixlQWdGa0I7QUFjN0I7RUFEQyxTQUFTLENBQUMsU0FBUyxPQUFPLEtBQUssR0FBRyxFQUFFLElBQUksT0FBTyxDQUFDO0dBN0Z0QyxlQThGWDtBQW9DTTtFQURMLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLElBQUksT0FBTyxDQUFDO0dBaklsQyxlQWtJTDtBQVNOO0VBREMsU0FBUyxDQUFDLE1BQU0sQ0FBQztHQTFJUCxlQTJJWDtBQTNJVyxpQkFBTjtFQUROLGNBQWMsa0JBQWtCO0dBQ3BCOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X3N0eWxlcyIsICJhY2MiLCAic3R5bGVNYXAiLCAicHJvcCIsICJ2YWx1ZSIsICJzdHlsZXMiLCAiZGVwIiwgInN0eWxlTWFwIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfc3R5bGVzIiwgImdldHRlckNvbmZpZyIsICJvYnNlcnZlciIsICJlIiwgInNldHRlckNvbmZpZyIsICJjc3NWYXIiLCAib2JzZXJ2ZXIiLCAicG9ydGFsQ29udHJvbGxlciIsICJlbGVtZW50IiwgInNjcm9sbFgiLCAic2Nyb2xsWSIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJwcmVzZXQiLCAib3B0aW9ucyIsICJpbXBvcnRfY29udGV4dCIsICJjb250ZXh0IiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X3N0eWxlcyIsICJzdHlsZU1hcCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9pZl9kZWZpbmVkIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X3N0eWxlcyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfY2xhc3NfbWFwIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAibm9kZSIsICJvYnNlcnZlciIsICJzdGF0ZSIsICJpbXBvcnRfaXNfc2VydmVyIiwgIm9ic2VydmVyIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2Zvcm1fY29udHJvbCIsICJpbXBvcnRfaWZfZGVmaW5lZCIsICJpbXBvcnRfZm9ybV9jb250cm9sIiwgImltcG9ydF9mb3JtX2hlbHBlcnMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfaWZfZGVmaW5lZCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaWNvbkxpYnJhcnkiLCAiaW1wb3J0X3Vuc2FmZV9zdmciLCAiaW1wb3J0X3N0eWxlcyIsICJzdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJzdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X3N0eWxlcyIsICJpbXBvcnRfc3R5bGVzIiwgInN0eWxlcyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJwb3NpdGlvbiIsICJwbGFjZW1lbnQiLCAibmV4dFVuaXF1ZUlkIiwgInBsYWNlbWVudCIsICJhbmltZSIsICJzdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJuZXh0VW5pcXVlSWQiLCAic3R5bGVzIiwgImltcG9ydF9zdHlsZXMiLCAic3R5bGVzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAibmV4dFVuaXF1ZUlkIiwgInN0eWxlcyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9pZl9kZWZpbmVkIiwgImltcG9ydF9pY29ucyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJuZXh0VW5pcXVlSWQiLCAic3R5bGVzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAibmV4dFVuaXF1ZUlkIiwgInN0eWxlcyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgIm5leHRVbmlxdWVJZCIsICJzdHlsZXMiLCAiaW1wb3J0X2ljb25zIiwgIm5leHRVbmlxdWVJZCIsICJzdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJzdHlsZXMiLCAiaW1wb3J0X3doZW4iLCAiaW1wb3J0X3N0eWxlcyIsICJpbXBvcnRfY2xhc3NfbWFwIiwgInN0eWxlcyJdCn0K
