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

// src/atomic/statistic/index.ts
var statistic_exports = {};
__export(statistic_exports, {
  MteStatistic: () => MteStatistic
});
module.exports = __toCommonJS(statistic_exports);

// src/atomic/statistic/statistic.element.ts
var import_lit30 = require("lit");
var import_decorators25 = require("lit/decorators.js");

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
var parseSelectors = (styles16, selectors) => {
  if (!selectors) {
    return styles16;
  } else {
    return `${styles16}${selectors.reduce((acc, { selector, selectorWrapper, style }) => {
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
  let styles16 = "";
  [...instanceStylesMap.entries()].filter(([key, _]) => key !== "se" && key !== "sp").sort((a, b) => b[0] - a[0]).forEach(([_, selectors]) => {
    styles16 = parseSelectors(styles16, selectors);
  });
  styles16 = `${styles16}${parseSelectors("", instanceStylesMap.get("se"))}${parseSelectors(
    "",
    instanceStylesMap.get("sp")
  )}`;
  return styles16;
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
var StatusColorMixin = (superClass) => {
  class ColorElement extends superClass {
  }
  __decorateClass([
    presetProperty({ reflect: true })
  ], ColorElement.prototype, "color", 2);
  return ColorElement;
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
  add(state8) {
    if (!/^--/.test(state8) || typeof state8 !== "string") {
      throw new DOMException(
        `Failed to execute 'add' on 'CustomStateSet': The specified value ${state8} must start with '--'.`
      );
    }
    const result = super.add(state8);
    const ref = customStateMap.get(this);
    const stateName = `state${state8}`;
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
  delete(state8) {
    const result = super.delete(state8);
    const ref = customStateMap.get(this);
    if (ref.isConnected) {
      ref.toggleAttribute(`state${state8}`, false);
      if (ref.part) {
        ref.part.remove(`state${state8}`);
      }
    } else {
      setTimeout(() => {
        ref.toggleAttribute(`state${state8}`, false);
        if (ref.part) {
          ref.part.remove(`state${state8}`);
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

// src/atomic/text/text.element.ts
var import_styles8 = require("@mortar/styles");
var import_lit15 = require("lit");
var import_decorators19 = require("lit/decorators.js");

// src/atomic/text/text.styles.ts
var import_lit14 = require("lit");
var styles8 = import_lit14.css`:host{--color:inherit;color:var(--color);display:inline-block}:host([lineClamp]){display:-webkit-inline-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}:host([lineClamp][block]){display:-webkit-box}:host([noWrap]){display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([size=xxs]){font-size:.625rem}:host([size=xs]){font-size:.75rem}:host([size=sm]){font-size:.875rem}:host([size=md]){font-size:1rem}:host([size=lg]){font-size:1.25rem}:host([size=xl]){font-size:1.5rem}:host([size=xxl]){font-size:1.75rem}:host([muted]){--color:var(--mte-ink-2)}`;

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
      this.setInstanceStyle("text", (0, import_styles8.selectorFactory)(":host:host:host:host:host"), {
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
    return import_lit15.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteText.styles = [styles7, styles8];
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
  (0, import_decorators19.property)({ reflect: true })
], MteText.prototype, "align", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteText.prototype, "size", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteText.prototype, "transform", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteText.prototype, "wordBreak", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteText.prototype, "wordSpacing", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteText.prototype, "letterSpacing", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteText.prototype, "whiteSpace", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteText.prototype, "underline", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteText.prototype, "italic", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteText.prototype, "strikethrough", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteText.prototype, "muted", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteText.prototype, "lineClamp", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteText.prototype, "textWrap", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteText.prototype, "noWrap", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Number, reflect: true })
], MteText.prototype, "maxCharWidth", 2);
MteText = __decorateClass([
  defineElement("mte-text")
], MteText);

// src/atomic/text/mark.element.ts
var import_styles9 = require("@mortar/styles");
var import_lit16 = require("lit");
var MteMark = class extends StatusColorMixin(MteElement) {
  connectedCallback() {
    super.connectedCallback();
    if (!this.color) {
      this.color = "warning";
    }
  }
  render() {
    return import_lit16.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteMark.styles = [
  styles7,
  css7` :host { display: inline-block; margin-right: -2px; margin-left: -2px; padding-right: 2px; padding-left: 2px; } /** Status PG Variants */ ${(0, import_styles9.forEachPGVariant)(
    "status",
    (g, p) => css7` :host([color='${p}']) { background: ${(0, import_styles9.color)({ g, p, c: "light", o: "sm" })}; color: inherit; } `
  )} `
];
MteMark = __decorateClass([
  defineElement("mte-mark")
], MteMark);

// src/atomic/form-elements/description.element.ts
var import_lit18 = require("lit");
var import_decorators20 = require("lit/decorators.js");

// src/atomic/form-elements/description.styles.ts
var import_lit17 = require("lit");
var styles9 = import_lit17.css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mte-ink-2);display:block;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);margin:var(--mte-space-xs) 0;text-decoration:inherit;text-transform:inherit;width:100%}`;

// src/atomic/form-elements/description.element.ts
var nextUniqueId = 0;
var MteDescription = class extends MteElement {
  constructor() {
    super(...arguments);
    this.id = `mte-description--${nextUniqueId++}`;
  }
  render() {
    return import_lit18.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteDescription.styles = [styles7, styles9];
__decorateClass([
  (0, import_decorators20.property)({ reflect: true })
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
var import_lit22 = require("lit");
var import_decorators22 = require("lit/decorators.js");
var import_if_defined3 = require("lit-html/directives/if-defined.js");
var import_when = require("lit-html/directives/when.js");
var import_icons2 = require("@mortar/icons");

// src/atomic/form-elements/error.styles.ts
var import_lit19 = require("lit");
var styles10 = import_lit19.css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;align-items:center;background:rgb(var(--mte-core-danger-lighter-rgb));border-radius:var(--mte-border-radius-xs);color:rgb(var(--mte-core-danger-base-rgb));display:flex;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);font-weight:var(--mte-font-weight-medium);gap:var(--mte-space-xs);line-height:var(--mte-font-set-caption-line-height);margin:var(--mte-space-xs) 0;overflow:hidden;padding:0 var(--mte-space-xs);text-decoration:inherit;text-transform:inherit;width:100%}`;

// src/atomic/icon/icon.element.ts
var import_lit21 = require("lit");
var import_decorators21 = require("lit/decorators.js");

// src/atomic/icon/icon.styles.ts
var import_lit20 = require("lit");
var styles11 = import_lit20.css`:host{box-sizing:content-box!important;color:var(--icon-color,inherit);display:inline-block;line-height:0;width:24px}:host([autosize]){vertical-align:middle}:host([muted]){--icon-color:var(--mte-ink-2)}svg{display:block;height:100%;width:100%}:host(:not([withColor])) svg *{color:inherit;fill:currentColor!important}:host([color=primary])>svg *{color:rgb(var(--mte-status-primary-base-rgb))}:host([color=secondary])>svg *{color:rgb(var(--mte-status-secondary-base-rgb))}:host([color=tertiary])>svg *{color:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=success])>svg *{color:rgb(var(--mte-status-success-base-rgb))}:host([color=warning])>svg *{color:rgb(var(--mte-status-warning-base-rgb))}:host([color=danger])>svg *{color:rgb(var(--mte-status-danger-base-rgb))}`;

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
    return import_lit21.html`${this.instanceStyles}${(0, import_unsafe_svg2.unsafeSVG)(this.iconSvg)}`;
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

// src/atomic/form-elements/error.element.ts
MteIconRegistryService.registerIcons([import_icons2.mtrIconAlertCircle]);
var nextUniqueId2 = 0;
var MteError = class extends MteElement {
  constructor() {
    super(...arguments);
    this.iconLibrary = "_default";
    this.hideIcon = false;
    this.id = `mte-error--${nextUniqueId2++}`;
  }
  render() {
    return import_lit22.html`${this.instanceStyles} ${(0, import_when.when)(
      !this.hideIcon,
      () => import_lit22.html`<mte-icon autosize part="icon" aria-hidden="true" name="${this.icon || "alert-circle"}" library="${(0, import_if_defined3.ifDefined)(this.iconLibrary)}"></mte-icon>`
    )}<slot></slot>`;
  }
};
MteError.styles = [styles7, styles10];
__decorateClass([
  (0, import_decorators22.property)()
], MteError.prototype, "iconLibrary", 2);
__decorateClass([
  (0, import_decorators22.property)()
], MteError.prototype, "icon", 2);
__decorateClass([
  (0, import_decorators22.property)({ type: Boolean })
], MteError.prototype, "hideIcon", 2);
__decorateClass([
  (0, import_decorators22.property)({ reflect: true })
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
var import_lit24 = require("lit");
var import_decorators23 = require("lit/decorators.js");

// src/atomic/form-elements/hint.styles.ts
var import_lit23 = require("lit");
var styles12 = import_lit23.css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mte-ink-2);display:block;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);font-weight:var(--mte-font-weight-medium);line-height:var(--mte-font-set-caption-line-height);margin:var(--mte-space-xs) 0;overflow:hidden;text-decoration:inherit;text-transform:inherit;width:100%}`;

// src/atomic/form-elements/hint.element.ts
var nextUniqueId3 = 0;
var MteHint = class extends MteElement {
  constructor() {
    super(...arguments);
    this.id = `mte-hint--${nextUniqueId3++}`;
  }
  render() {
    return import_lit24.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteHint.styles = [styles7, styles12];
__decorateClass([
  (0, import_decorators23.property)({ reflect: true })
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
var import_lit26 = require("lit");
var import_decorators24 = require("lit/decorators.js");

// src/atomic/form-elements/label.styles.ts
var import_lit25 = require("lit");
var styles13 = import_lit25.css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;align-items:center;color:inherit;cursor:inherit;display:block;font-size:var(--mte-font-set-body2-font-size);font-weight:var(--mte-font-set-body2-font-weight);font-weight:var(--mte-font-weight-bold);line-height:var(--mte-font-set-body2-line-height);margin:var(--mte-space-xs) 0;text-decoration:inherit;text-transform:inherit}:host([disabled]){color:var(--mte-disabled-4);cursor:not-allowed}.required{color:rgb(var(--mte-core-danger-base-rgb));padding-left:var(--mte-space-xs)}`;

// src/atomic/form-elements/label.element.ts
var nextUniqueId4 = 0;
var MteLabel = class extends DisabledMixin(MteElement) {
  constructor() {
    super(...arguments);
    this.id = `mte-label--${nextUniqueId4++}`;
  }
  render() {
    return import_lit26.html`${this.instanceStyles}<slot></slot>${this.showRequired ? import_lit26.html`<span class="required" aria-hidden="true">*</span>` : null}`;
  }
};
MteLabel.styles = [styles7, styles13];
__decorateClass([
  (0, import_decorators24.property)({ reflect: true })
], MteLabel.prototype, "id", 2);
__decorateClass([
  (0, import_decorators24.property)({ type: Boolean, reflect: true })
], MteLabel.prototype, "showRequired", 2);
MteLabel = __decorateClass([
  defineElement("mte-label")
], MteLabel);
var MteLabelText = class extends MteLabel {
};
MteLabelText = __decorateClass([
  defineElement("mte-label-text")
], MteLabelText);

// src/atomic/statistic/statistic.styles.ts
var import_lit27 = require("lit");
var styles14 = import_lit27.css`:host{--color:inherit;--gap:var(--mte-space-xxs);font-weight:var(--mte-font-weight-medium)}.content{align-items:center;color:var(--color);display:flex;flex-direction:row;gap:var(--gap)}:host([lineClamp]) .content{display:-webkit-inline-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}:host([lineClamp][block]) .content{display:-webkit-box}:host([noWrap]) .content{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([size=xxs]) .content{font-size:.625rem}:host([size=xs]) .content{font-size:.75rem}:host([size=sm]) .content{font-size:.875rem}:host([size=md]) .content{font-size:1rem}:host([size=lg]) .content{font-size:1.25rem}:host([size=xl]) .content{font-size:1.5rem}:host([size=xxl]) .content{font-size:1.75rem}:host([italic]) .content{font-style:italic}:host([underline]) .content{text-decoration:underline}:host([strikethrough]) .content{text-decoration:line-through}:host([underline][strikethrough]) .content{text-decoration:underline line-through}:host([transform=lowercase]) .content{text-transform:lowercase}:host([transform=uppercase]) .content{text-transform:uppercase}:host([transform=capitalize]) .content{text-transform:capitalize}:host([muted]) .content{--color:var(--mte-ink-2)}:host([color=primary]) .content{--color:rgb(var(--mte-status-primary-base-rgb))}:host([color=secondary]) .content{--color:rgb(var(--mte-status-secondary-base-rgb))}:host([color=tertiary]) .content{--color:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=success]) .content{--color:rgb(var(--mte-status-success-base-rgb))}:host([color=warning]) .content{--color:rgb(var(--mte-status-warning-base-rgb))}:host([color=danger]) .content{--color:rgb(var(--mte-status-danger-base-rgb))}`;

// src/atomic/statistic/statistic.element.ts
var import_when2 = require("lit-html/directives/when.js");
var import_class_map3 = require("lit-html/directives/class-map.js");

// src/utilities/visually-hidden/visually-hidden.element.ts
var import_lit29 = require("lit");

// src/utilities/visually-hidden/visually-hidden.styles.ts
var import_lit28 = require("lit");
var styles15 = import_lit28.css`:host(:not(:focus-within)){height:1px!important;position:absolute!important;width:1px!important;clip:rect(0 0 0 0)!important;border:none!important;clip-path:inset(50%)!important;overflow:hidden!important;padding:0!important;white-space:nowrap!important}`;

// src/utilities/visually-hidden/visually-hidden.element.ts
var MteVisuallyHidden = class extends MteElement {
  render() {
    return import_lit29.html`<slot></slot>`;
  }
};
MteVisuallyHidden.styles = [styles7, styles15];
MteVisuallyHidden = __decorateClass([
  defineElement("mte-visually-hidden")
], MteVisuallyHidden);

// src/atomic/statistic/statistic.element.ts
var import_animejs = __toESM(require("animejs"), 1);
var MteStatistic = class extends SlotObserverMixin(
  StatusColorMixin(StylePartsMixin(MteText))
) {
  constructor() {
    super(...arguments);
    this.value = 0;
    this.animationDuration = 1e3;
    this.easing = "linear";
    this.withoutAnimation = false;
    this.withoutFormatting = false;
    this.type = "decimal";
    this.noGrouping = false;
    this.currency = "USD";
    this.currencyDisplay = "symbol";
    this.size = "lg";
    this.labelSize = "sm";
    this.labelFontWeight = "normal";
    this.isDecimalValue = true;
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      requestAnimationFrame(() => {
        this.animateFromTo(0, this.value);
      });
    });
  }
  handleIsDecimalUpdate() {
    this.isDecimalValue = this.type === "currency" ? true : this.value % 1 !== 0;
  }
  // Hook into `update` for manual value formatting
  update(changedProps) {
    super.update(changedProps);
    if (!isSsr() && this.__firstUpdated) {
      if (changedProps.has("value")) {
        this.animateFromTo(changedProps.get("value"), this.value);
      } else if (changedProps.size > 0) {
        this.outputNode.innerText = `${this.formatAnimatedValue(this.value)}`;
      }
    }
  }
  animateFromTo(from, to) {
    if (this.reduceMotion()) {
      this.outputNode.innerText = `${this.formatAnimatedValue(this.value)}`;
    } else {
      const animationState = { val: from };
      this.animationRef = (0, import_animejs.default)({
        targets: animationState,
        val: to,
        duration: this.animationDuration,
        easing: "easeInOutSine",
        update: () => {
          this.outputNode.innerText = `${this.formatAnimatedValue(animationState.val)}`;
        }
      });
    }
  }
  formatAnimatedValue(value) {
    if (this.withoutFormatting) {
      return this.isDecimalValue ? Math.round(value * 100) / 100 : Math.round(value);
    } else {
      return this.format(value, this.isDecimalValue);
    }
  }
  reduceMotion() {
    if (this.withoutAnimation || globalThis?.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return true;
    }
    return false;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.animationRef?.remove();
  }
  format(value, isDecimalValue = true) {
    return MteLocalizeService.formatNumber(value, {
      lang: this.lang,
      style: this.type,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      // If not set and decimal value was given, ignore. If not set and min is set, must be >= min.
      maximumFractionDigits: this.maximumFractionDigits ?? isDecimalValue ? null : this.minimumFractionDigits ?? 0,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits
    });
  }
  render() {
    const hasLabel = !!this.hasSlot("label", this.label);
    const hasSuffix = !!this.hasSlot("suffix", this.suffix);
    return import_lit30.html`${this.instanceStyles}<div class="container ${(0, import_class_map3.classMap)({ "has-content": hasLabel || hasSuffix })}"><slot name="label">${(0, import_when2.when)(
      this.label,
      () => import_lit30.html`<mte-text muted size="${this.labelSize}" fw="${this.labelFontWeight}" class="label" part="label">${this.label}</mte-text>`
    )}</slot><div class="content"><slot name="prefix"></slot><mte-visually-hidden>${this.withoutFormatting ? this.value : this.format(this.value, this.isDecimalValue)}</mte-visually-hidden><div id="output" aria-hidden="true"> </div><slot name="suffix">${(0, import_when2.when)(this.suffix, () => import_lit30.html`<div class="suffix" part="suffix">${this.suffix}</div>`)}</slot></div></div>`;
  }
};
MteStatistic.styles = [styles7, styles14];
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, type: Number })
], MteStatistic.prototype, "value", 2);
__decorateClass([
  (0, import_decorators25.query)("#output")
], MteStatistic.prototype, "outputNode", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, type: Number })
], MteStatistic.prototype, "animationDuration", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, type: String })
], MteStatistic.prototype, "easing", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, type: Boolean })
], MteStatistic.prototype, "withoutAnimation", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, type: Boolean })
], MteStatistic.prototype, "withoutFormatting", 2);
__decorateClass([
  (0, import_decorators25.property)()
], MteStatistic.prototype, "type", 2);
__decorateClass([
  (0, import_decorators25.property)({ type: Boolean })
], MteStatistic.prototype, "noGrouping", 2);
__decorateClass([
  (0, import_decorators25.property)()
], MteStatistic.prototype, "currency", 2);
__decorateClass([
  (0, import_decorators25.property)()
], MteStatistic.prototype, "currencyDisplay", 2);
__decorateClass([
  (0, import_decorators25.property)({ type: Number })
], MteStatistic.prototype, "minimumIntegerDigits", 2);
__decorateClass([
  (0, import_decorators25.property)({ type: Number })
], MteStatistic.prototype, "minimumFractionDigits", 2);
__decorateClass([
  (0, import_decorators25.property)({ type: Number })
], MteStatistic.prototype, "maximumFractionDigits", 2);
__decorateClass([
  (0, import_decorators25.property)({ type: Number })
], MteStatistic.prototype, "minimumSignificantDigits", 2);
__decorateClass([
  (0, import_decorators25.property)({ type: Number })
], MteStatistic.prototype, "maximumSignificantDigits", 2);
__decorateClass([
  (0, import_decorators25.property)({ attribute: "aria-label", reflect: true })
], MteStatistic.prototype, "ariaLabel", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, type: String })
], MteStatistic.prototype, "label", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true, type: String })
], MteStatistic.prototype, "suffix", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true })
], MteStatistic.prototype, "size", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true })
], MteStatistic.prototype, "labelSize", 2);
__decorateClass([
  (0, import_decorators25.property)({ reflect: true })
], MteStatistic.prototype, "labelFontWeight", 2);
__decorateClass([
  (0, import_decorators25.state)()
], MteStatistic.prototype, "isDecimalValue", 2);
__decorateClass([
  onUpdate(["value", "type"])
], MteStatistic.prototype, "handleIsDecimalUpdate", 1);
MteStatistic = __decorateClass([
  defineElement("mte-statistic")
], MteStatistic);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zdGF0aXN0aWMvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zdGF0aXN0aWMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYmFzZS1jbGFzc2VzL210ZS5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9jc3MtaW4tanMvY3NzLWluLWpzLnByb3BlcnR5LW1hcHBlcnMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Nzcy1pbi1qcy9jc3MtaW4tanMudXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9lbnZpcm9ubWVudC51dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Zvcm0udXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9yZWFjdGl2ZS1zaWduYWwudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYmFzZS1jbGFzc2VzL2NvbnRlbnQuYmFzZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9hdHRyaWJ1dGUtY29udmVydGVyL3Jlc3BvbnNpdmUtYXR0cmlidXRlLmNvbnZlcnRlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb25zdGFudHMvaGViLWxvZ28udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29udHJvbGxlcnMvc2xvdC5jb250cm9sbGVyLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZpY2VzL3RoZW1lLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc2VydmljZXMvcG9ydGFsLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc2VydmljZXMvaGlzdG9yeS1hcGkuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy9sb2NhbGl6ZS5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYnV0dG9uL2J1dHRvbi5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvaWNvbi9pY29uLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Rvb2xiYXIvdG9vbGJhci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvY2FyZC9jYXJkLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90cmVlL3RyZWUucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RhZy90YWcucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2JhZGdlL2JhZGdlLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9saW5rL2xpbmsucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2FsZXJ0L2FsZXJ0LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pbnB1dC9pbnB1dC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZHJhd2VyL2RyYXdlci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYXNpZGUvYXNpZGUucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWItaXRlbS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbW9kYWwvbW9kYWwucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2NoZWNrYm94L2NoZWNrYm94LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9yYWRpby9yYWRpby5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbmF2L25hdi5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc3dpdGNoL3N3aXRjaC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbmF0aXZlLXNlbGVjdC9uYXRpdmUtc2VsZWN0LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90ZXh0YXJlYS90ZXh0YXJlYS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc2tlbGV0b24vc2tlbGV0b24ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3NsaWRlci9zbGlkZXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3JhbmdlLXNsaWRlci9yYW5nZS1zbGlkZXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3NlZ21lbnRlZC1jb250cm9sL3NlZ21lbnRlZC1jb250cm9sLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0LnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXQubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXQuZGVjb3JhdG9yLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0LmNvbnRleHQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29udHJvbGxlcnMvYXBwbGllZC1wcmVzZXQtY29udGV4dC5jb250cm9sbGVyLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2RlY29yYXRvcnMvb24tdXBkYXRlLmRlY29yYXRvci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9kZWNvcmF0b3JzL2RlZmluZS1lbGVtZW50LmRlY29yYXRvci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvY29sb3IubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2RlbnNpdHkubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9kaXNhYmxlZC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvaW52ZXJzZS5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvaW52ZXJzZS5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3RhYmluZGV4Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9zdHlsZS1wYXJ0cy5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2J1dHRvbi5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL292ZXJsYXkubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL292ZXJsYXkubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZmllbGRzZXQubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZm9ybS1maWVsZC5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2F1dG8tYWN0aXZlLWxpbmsubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3Nsb3Qtb2JzZXJ2ZXIubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2NoZWNrYm94Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9tYXBzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9hb20udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL211dGF0aW9uLW9ic2VydmVycy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvdXRpbHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL1ZhbGlkaXR5U3RhdGUudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL0N1c3RvbVN0YXRlU2V0LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9IVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvcGF0Y2gtZm9ybS1wcm90b3R5cGUudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL2VsZW1lbnQtaW50ZXJuYWxzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9sYW5nLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy93YWl0LWZvci1mdy5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zdHlsZXMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc3R5bGVzL2Jhc2Uuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGV4dC90ZXh0LmVsZW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90ZXh0L3RleHQuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGV4dCIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2Zvcm0tZWxlbWVudHMvZGVzY3JpcHRpb24uZWxlbWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2Zvcm0tZWxlbWVudHMvZGVzY3JpcHRpb24uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZm9ybS1lbGVtZW50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2Zvcm0tZWxlbWVudHMvZXJyb3Iuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvaWNvbi9pY29uLmVsZW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pY29uL2ljb24uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvaWNvbi9pY29uLXJlZ2lzdHJ5LnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9mb3JtLWVsZW1lbnRzL2hpbnQuZWxlbWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2Zvcm0tZWxlbWVudHMvaGludC5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9mb3JtLWVsZW1lbnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZm9ybS1lbGVtZW50cy9sYWJlbC5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zdGF0aXN0aWMvc3RhdGlzdGljLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvdXRpbGl0aWVzL3Zpc3VhbGx5LWhpZGRlbi92aXN1YWxseS1oaWRkZW4uZWxlbWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvdXRpbGl0aWVzL3Zpc3VhbGx5LWhpZGRlbi92aXN1YWxseS1oaWRkZW4uc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3N0YXRpc3RpYy5lbGVtZW50JztcbiIsIG51bGwsICIvKiBlc2xpbnQtZGlzYWJsZSB3Yy9uby1zZWxmLWNsYXNzICovXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHNlbGVjdG9yRmFjdG9yeSwgU2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgY29uc3RydWN0SW5zdGFuY2VTdHlsZXMsXG4gIGdlbmVyYXRlU2VsZWN0b3JzRnJvbVN0eWxlTWFwLFxuICBTZWxlY3RvclN0eWxlcyxcbiAgU3R5bGVNYXAsXG4gIFVuc3Vic2NyaWJlcixcbn0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IHVuc2FmZUhUTUwgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3Vuc2FmZS1odG1sLmpzJztcbmltcG9ydCB7IE1vcnRhclByZXNldFRoZW1lIH0gZnJvbSAnLi4vcHJlc2V0cyc7XG5cbi8vIERpc2FibGUgdGhpcyB3YXJuaW5nIGZvciBub3cgYnkgcHJlLW1hcmtpbmcgaXQgYXMgaXNzdWVkIHNvIHVzZXJzIGRvbid0IGhhdmUgdG8gc2VlIGl0XG4vLyBUT0RPOiBBc2sgbGl0IHRlYW0gd2h5IHRoaXMgaXMgdGhyb3duIGV2ZXJ5d2hlcmUgYW5kIHdoYXQgYWx0ZXJuYXRpdmVzIGFyZSBmb3IgcHJlc2V0IHNvbHV0aW9uXG5nbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzID8/PSBuZXcgU2V0KCk7XG5nbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzLmFkZChcbiAgJ092ZXJyaWRpbmcgUmVhY3RpdmVFbGVtZW50LmdldFByb3BlcnR5RGVzY3JpcHRvcigpIGlzIGRlcHJlY2F0ZWQuIFRoZSBvdmVycmlkZSB3aWxsIG5vdCBiZSBjYWxsZWQgd2l0aCBzdGFuZGFyZCBkZWNvcmF0b3JzIFNlZSBodHRwczovL2xpdC5kZXYvbXNnL25vLW92ZXJyaWRlLWdldC1wcm9wZXJ0eS1kZXNjcmlwdG9yIGZvciBtb3JlIGluZm9ybWF0aW9uLidcbik7XG5cbmV4cG9ydCBjbGFzcyBNdGVFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHByaXZhdGUgX19pbnN0YW5jZVN0eWxlU2hlZXRNYXAgPSBuZXcgTWFwPHN0cmluZywgU2VsZWN0b3JTdHlsZXNbXT4oKTtcbiAgcHJpdmF0ZSBfX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlID0gZmFsc2U7XG5cbiAgLyoqIFNldCB0byB0cnVlIHdoZW4gZmlyc3RVcGRhdGVkIGlzIGZpcnN0IGNhbGxlZCAqL1xuICBwcm90ZWN0ZWQgX19maXJzdFVwZGF0ZWQgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgaW5zdGFuY2VTdHlsZXM7XG5cbiAgLyoqXG4gICAqIEFsbCBzdWJzIHB1c2hlZCB0byB0aGlzIGFycmF5IHdpbGwgYmUgY2xlYXJlZCBpbiB0aGUgZGlzY29ubmVjdGVkQ2FsbGJhY2tcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc3ViczogVW5zdWJzY3JpYmVyW10gPSBbXTtcblxuICAvKiogU3R5bGUgbWFwcGluZ3MgdGhhdCBhcmUgYXBwbGllZCB0byB0aGUgaG9zdCBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIHJlZmxlY3Q6IHRydWUgfSkgc2U/OiBTdHlsZU1hcDtcblxuICAvKipcbiAgICogVGhlIHRoZW1lIHRvIHVzZSBmb3Igc3R5bGluZyB0aGlzIGNvbXBvbmVudC4gT3ZlcnJpZGVzIHRoZSBnbG9iYWwgcHJlc2V0IGZvciB0aGlzIGluc3RhbmNlIG9mIHRoaXMgY29tcG9uZW50LlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBhdHRyaWJ1dGU6ICdkYXRhLW10ZS10aGVtZScgfSlcbiAgc2V0IHRoZW1lKHRoZW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuX3RoZW1lO1xuICAgIHRoaXMuX3RoZW1lID0gdGhlbWU7XG4gICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCd0aGVtZScsIG9sZFZhbHVlKTtcbiAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IGEgYmV0dGVyIHdheSB0byBzb2x2ZSB0aGlzIGZvciBhbGwgcHJlc2V0c1xuICAgIGlmICh0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZSkge1xuICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlcXVlc3RVcGRhdGUoJ3RoZW1lJywgbnVsbCkpO1xuICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBudWxsKSk7XG4gICAgfVxuICB9XG4gIGdldCB0aGVtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aGVtZSA/PyB0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZT8ubmFtZTtcbiAgfVxuICBwcml2YXRlIF90aGVtZTogc3RyaW5nO1xuXG4gIC8qKiBVc2VkIHRvIGRlY2xhcmUgYSBsb2NhbCB0aGVtZSB2YWx1ZSBkZXRlcm1pbmVkIGJ5IHRoZSBsb2NhbCBwcmVzZXQgaWYgaXQgaXMgc2V0LiAqL1xuICBAc3RhdGUoKSBwcm90ZWN0ZWQgX19sb2NhbFByZXNldFRoZW1lOiBNb3J0YXJQcmVzZXRUaGVtZTtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBzZWxlY3RvciB0byBoYXZlIGluc3RhbmNlIHN0eWxlcyB0YXJnZXQgYSBzcGVjaWZpYyBpbm5lciBlbGVtZW50LlxuICAgKiBVc2VmdWwgaW4gc3BlY2lmaWMgc2NlbmFyaW9zIHdoZXJlIGZvY3VzIGlzIGRlbGVnYXRlZCBsaWtlIGJ1dHRvbnMuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQgdGhpcyByZXBlYXRzIGA6aG9zdGAgc2l4IHRpbWVzIHRvIHByb3ZpZGUgYSBzcGVjaWZpY2l0eSBvZiA2XG4gICAqL1xuICBwcm90ZWN0ZWQgaW5zdGFuY2VTdHlsZVNlbGVjdG9yUm9vdCA9ICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnO1xuXG4gIC8qKlxuICAgKiBDYW4gYmUgY2FsbGVkIGJ5IGRlcml2ZWQgY2xhc3NlcyB0byByZWdpc3RlciBuZXcgaW5zdGFuY2UgbGV2ZWwgZHluYW1pYyBzdHlsZXMuXG4gICAqIFdoZW4gY2FsbGVkIHRoZSBpbnN0YW5jZSBzdHlsZXNoZWV0IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGUgbGF0ZXN0IHN0eWxlcyB0aGlzIHVwZGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBzZXRJbnN0YW5jZVN0eWxlKGlkOiBzdHJpbmcsIHNlbGVjdG9yOiBTZWxlY3RvckZhY3RvcnksIHN0eWxlTWFwOiBTdHlsZU1hcCkge1xuICAgIC8vIFdlIHBhcnNlIGFsbCBzdHlsZSBpbmZvcm1hdGlvbiBoZXJlIGFuZCBzY29wZSBpdCB0byB0aGUgZ2l2ZW4gaWQuIFRoaXMgZW5zdXJlcyB3ZVxuICAgIC8vIG9ubHkgZXZlciBuZWVkIHRvIHJlLXBhcnNlIHRoaXMgcG9ydGlvbiBvZiBzdHlsZSBpbmZvcm1hdGlvbiB3aGVuIGl0cyBhc3NvY2lhdGVkXG4gICAgLy8gaWQgaXMgdXBkYXRlZCBhZ2Fpbi5cbiAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TWFwLnNldChpZCwgZ2VuZXJhdGVTZWxlY3RvcnNGcm9tU3R5bGVNYXAoc2VsZWN0b3IsIHN0eWxlTWFwKSk7XG4gICAgdGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBBIGN1c3RvbSBob29rIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gaW4gZGVyaXZlZCBjbGFzc2VzIHRvIHNldCBpbnN0YW5jZSBzdHlsZXMgYXMgbmVlZGVkICovXG4gIHByb3RlY3RlZCB1cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpIHtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcygnc2UnKSkge1xuICAgICAgdGhpcy5zZXRJbnN0YW5jZVN0eWxlKCdzZScsIHNlbGVjdG9yRmFjdG9yeSh0aGlzLmluc3RhbmNlU3R5bGVTZWxlY3RvclJvb3QpLCB0aGlzLnNlID8/IHt9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgd2lsbFVwZGF0ZShjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci53aWxsVXBkYXRlKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBDYWxsIHRoZSB1cGRhdGVJbnN0YW5jZVN0eWxlcyBob29rXG4gICAgdGhpcy51cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaW5zdGFuY2Ugc3R5bGVzIG5lZWQgdG8gYmUgcmVyZW5kZXJlZFxuICAgIGlmICh0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2VTdHlsZXMgPSB1bnNhZmVIVE1MKFxuICAgICAgICBgPHN0eWxlIGlkPVwiX19pbnN0YW5jZS1zdHlsZXNcIj4ke2NvbnN0cnVjdEluc3RhbmNlU3R5bGVzKFxuICAgICAgICAgIHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXRNYXBcbiAgICAgICAgKX08L3N0eWxlPmBcbiAgICAgICk7XG4gICAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHRoaXMuX19maXJzdFVwZGF0ZWQgPSB0cnVlO1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIHRoaXMuc3Vicy5mb3JFYWNoKCh1bnN1YikgPT4gdW5zdWIoKSk7XG4gICAgdGhpcy5zdWJzID0gW107XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQgeyBQcm9wZXJ0eU1hcHBlciwgU3R5bGVQcm9wZXJ0eSB9IGZyb20gJy4vY3NzLWluLWpzLnR5cGVzJztcblxuY29uc3QgcHJvcGVydHlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IHN0cmluZ1tdPiA9IHtcbiAgbTogJ21hcmdpbicsXG4gIG14OiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXSxcbiAgbXk6IFsnbWFyZ2luVG9wJywgJ21hcmdpbkJvdHRvbSddLFxuICBtdDogJ21hcmdpblRvcCcsXG4gIG1yOiAnbWFyZ2luUmlnaHQnLFxuICBtYjogJ21hcmdpbkJvdHRvbScsXG4gIG1sOiAnbWFyZ2luTGVmdCcsXG4gIHA6ICdwYWRkaW5nJyxcbiAgcHg6IFsncGFkZGluZ0xlZnQnLCAncGFkZGluZ1JpZ2h0J10sXG4gIHB5OiBbJ3BhZGRpbmdUb3AnLCAncGFkZGluZ0JvdHRvbSddLFxuICBwdDogJ3BhZGRpbmdUb3AnLFxuICBwcjogJ3BhZGRpbmdSaWdodCcsXG4gIHBiOiAncGFkZGluZ0JvdHRvbScsXG4gIHBsOiAncGFkZGluZ0xlZnQnLFxuICBkOiAnZGlzcGxheScsXG4gIGE6ICdhbGlnbkl0ZW1zJyxcbiAgajogJ2p1c3RpZnlDb250ZW50JyxcbiAgZGlyZWN0aW9uOiAnZmxleERpcmVjdGlvbicsXG4gIHNocmluazogJ2ZsZXhTaHJpbmsnLFxuICBncm93OiAnZmxleEdyb3cnLFxuICB3cmFwOiAnZmxleFdyYXAnLFxuICB3OiAnd2lkdGgnLFxuICBtYXh3OiAnbWF4V2lkdGgnLFxuICBtaW53OiAnbWluV2lkdGgnLFxuICBoOiAnaGVpZ2h0JyxcbiAgbWF4aDogJ21heEhlaWdodCcsXG4gIG1pbmg6ICdtaW5IZWlnaHQnLFxuICBmczogJ2ZvbnRTaXplJyxcbiAgZnc6ICdmb250V2VpZ2h0JyxcbiAgYmc6ICdiYWNrZ3JvdW5kJyxcbiAgYzogJ2NvbG9yJyxcbiAgZWxldmF0aW9uOiAnYm94U2hhZG93Jyxcbn07XG5cbi8qKiBNYXBzIHByb3BlcnR5IHNob3J0aGFuZCB2YWx1ZXMgdG8gb25lIG9yIG1hbnkgZnVsbCBjc3MgcHJvcGVydGllcyAqL1xuZXhwb3J0IGNvbnN0IHByb3BTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5yZWR1Y2UoKGFjYywgcHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFByb3BzID0gcHJvcGVydHlNYXBbcHJvcE1hcC5wcm9wXSA/PyBwcm9wTWFwLnByb3A7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLmFjYyxcbiAgICAgIC4uLihBcnJheS5pc0FycmF5KG1hcHBlZFByb3BzKVxuICAgICAgICA/IG1hcHBlZFByb3BzLm1hcCgocHJvcCkgPT4gKHsgcHJvcCwgdmFsdWU6IHByb3BNYXAudmFsdWUgfSkpXG4gICAgICAgIDogW3sgcHJvcDogbWFwcGVkUHJvcHMsIHZhbHVlOiBwcm9wTWFwLnZhbHVlIH1dKSxcbiAgICBdO1xuICB9LCBbXSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIEBtb3J0YXIvc3R5bGVzIGNvbmZpZyB2YWx1ZSBmb3IgYSBnaXZlbiBkb3Qgbm90YXRlZCBzdHJpbmcuXG4gKiBOdW1iZXJzIGFuZCBub24tZG90IG5vdGF0ZWQgc3RyaW5nIHdpbGwganVzdCBiZSByZXR1cm5lZCBhcyBpcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUgPSAodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29uZmlnUGF0aCA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gICAgICBjb25zdCBjb25maWdWYWx1ZSA9IGNvbmZpZ1BhdGgucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjW2tleV07XG4gICAgICB9LCBjb25maWcpO1xuICAgICAgcmV0dXJuIGNvbmZpZ1ZhbHVlID8/IHZhbHVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59O1xuXG4vKiogTWFwcyBkb3Qgbm90YXRlZCBzdHJpbmcgdmFsdWVzIHRvIHRoZW1lIGNvbmZpZyB2YXJpYWJsZXMgKi9cbmV4cG9ydCBjb25zdCBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlTWFwcGVyOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5yZWR1Y2UoKGFjYywgcHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZ1ZhbHVlID0gZG90U3RyaW5nVG9Db25maWdWYWx1ZShwcm9wTWFwLnZhbHVlKTtcbiAgICBpZiAoY29uZmlnVmFsdWUpIHtcbiAgICAgIHByb3BNYXAudmFsdWUgPSBjb25maWdWYWx1ZSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gWy4uLmFjYywgcHJvcE1hcF07XG4gIH0sIFtdKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBOdW1iZXJUb1B4ID0gKHZhbDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCkgPT4ge1xuICBpZiAoIXZhbCkge1xuICAgIHJldHVybiB2YWwgYXMgbnVsbDtcbiAgfVxuICByZXR1cm4gIWlzTmFOKE51bWJlcih2YWwpKSA/IGAke3ZhbH1weGAgOiAodmFsIGFzIHN0cmluZyk7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwUHhUb051bWJlciA9ICh2YWw6IHN0cmluZyB8IG51bGwpID0+IHtcbiAgaWYgKCF2YWwpIHtcbiAgICByZXR1cm4gdmFsIGFzIG51bGw7XG4gIH1cbiAgcmV0dXJuIE51bWJlcih2YWwucmVwbGFjZSgncHgnLCAnJykpO1xufTtcblxuLyoqIE1hcHMgdGhlIHZhbHVlcyBvZiBhbnkgZ2l2ZW4gcHJvcHMgdG8gcHggdW5pdHMgaWYgaXQgaXMgYSBudW1iZXIgKi9cbmV4cG9ydCBjb25zdCBudW1iZXJUb1B4OiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IG1hcE51bWJlclRvUHgocHJvcE1hcC52YWx1ZSk7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBzcGFjaW5nTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAnMCc6IGNvbmZpZy5zcGFjZS5ub25lLFxuICAnMSc6IGNvbmZpZy5zcGFjZS54cyxcbiAgJzInOiBjb25maWcuc3BhY2Uuc20sXG4gICczJzogY29uZmlnLnNwYWNlLm1kLFxuICAnNCc6IGNvbmZpZy5zcGFjZS5sZyxcbiAgJzUnOiBjb25maWcuc3BhY2UueGwsXG4gICc2JzogY29uZmlnLnNwYWNlLnh4bCxcbiAgJzcnOiBjb25maWcuc3BhY2UueHh4bCxcbiAgJ25vbmUnOiBjb25maWcuc3BhY2Uubm9uZSxcbiAgJ3h4cyc6IGNvbmZpZy5zcGFjZS54eHMsXG4gICd4cyc6IGNvbmZpZy5zcGFjZS54cyxcbiAgJ3NtJzogY29uZmlnLnNwYWNlLnNtLFxuICAnbWQnOiBjb25maWcuc3BhY2UubWQsXG4gICdsZyc6IGNvbmZpZy5zcGFjZS5sZyxcbiAgJ3hsJzogY29uZmlnLnNwYWNlLnhsLFxuICAneHhsJzogY29uZmlnLnNwYWNlLnh4bCxcbiAgJ3h4eGwnOiBjb25maWcuc3BhY2UueHh4bCxcbn07XG5cbi8qKiBNYXBzIHNwYWNpbmcgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBzcGFjaW5nIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBzcGFjaW5nVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBzcGFjaW5nTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBib3JkZXJSYWRpdXNNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIG5vbmU6IGNvbmZpZy5ib3JkZXIucmFkaXVzLm5vbmUsXG4gIHhzOiBjb25maWcuYm9yZGVyLnJhZGl1cy54cyxcbiAgc206IGNvbmZpZy5ib3JkZXIucmFkaXVzLnNtLFxuICBtZDogY29uZmlnLmJvcmRlci5yYWRpdXMubWQsXG4gIGxnOiBjb25maWcuYm9yZGVyLnJhZGl1cy5sZyxcbiAgeGw6IGNvbmZpZy5ib3JkZXIucmFkaXVzLnhsLFxuICB4eGw6IGNvbmZpZy5ib3JkZXIucmFkaXVzLnh4bCxcbiAgZnVsbDogY29uZmlnLmJvcmRlci5yYWRpdXMuZnVsbCxcbn07XG5cbi8qKiBNYXBzIGJvcmRlciByYWRpdXMgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBib3JkZXIgcmFkaXVzIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGJvcmRlclJhZGl1c01hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgYm9yZGVyV2lkdGhNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIG5vbmU6IGNvbmZpZy5ib3JkZXIud2lkdGgubm9uZSxcbiAgc206IGNvbmZpZy5ib3JkZXIud2lkdGguc20sXG4gIG1kOiBjb25maWcuYm9yZGVyLndpZHRoLm1kLFxuICBsZzogY29uZmlnLmJvcmRlci53aWR0aC5sZyxcbn07XG5cbi8qKiBNYXBzIGJvcmRlciB3aWR0aCB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIGJvcmRlciB3aWR0aCBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGJvcmRlcldpZHRoTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBvcGFjaXR5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB4eGw6IGNvbmZpZy5vcGFjaXR5Lnh4bCxcbiAgeGw6IGNvbmZpZy5vcGFjaXR5LnhsLFxuICBsZzogY29uZmlnLm9wYWNpdHkubGcsXG4gIG1kOiBjb25maWcub3BhY2l0eS5tZCxcbiAgc206IGNvbmZpZy5vcGFjaXR5LnNtLFxuICB4czogY29uZmlnLm9wYWNpdHkueHMsXG4gIHh4czogY29uZmlnLm9wYWNpdHkueHhzLFxuICB4eHhzOiBjb25maWcub3BhY2l0eS54eHhzLFxufTtcblxuLyoqIE1hcHMgb3BhY2l0eSB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIG9wYWNpdHkgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IG9wYWNpdHlWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IG9wYWNpdHlNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGZvbnRXZWlnaHRNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIGxpZ2h0OiBjb25maWcuZm9udC53ZWlnaHQubGlnaHQsXG4gIHJlZ3VsYXI6IGNvbmZpZy5mb250LndlaWdodC5yZWd1bGFyLFxuICBtZWRpdW06IGNvbmZpZy5mb250LndlaWdodC5tZWRpdW0sXG4gIGJvbGQ6IGNvbmZpZy5mb250LndlaWdodC5ib2xkLFxufTtcblxuLyoqIE1hcHMgZm9udC13ZWlnaHQgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBzcGFjaW5nIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBmb250V2VpZ2h0VmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBmb250V2VpZ2h0TWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBmb250U2l6ZU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgeHhzOiAnMC42MjVyZW0nLFxuICB4czogJzAuNzVyZW0nLFxuICBzbTogJzAuODc1cmVtJyxcbiAgbWQ6ICcxcmVtJyxcbiAgbGc6ICcxLjI1cmVtJyxcbiAgeGw6ICcxLjVyZW0nLFxuICB4eGw6ICcxLjc1cmVtJyxcbn07XG5cbi8qKiBNYXBzIGZvbnQtc2l6ZSB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIHNwYWNpbmcgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGZvbnRTaXplVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBmb250U2l6ZU1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZm9udEZhbWlseU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgc2FuczogY29uZmlnLmZvbnQuZmFtaWx5LnNhbnMsXG4gIHNlcmlmOiBjb25maWcuZm9udC5mYW1pbHkuc2VyaWYsXG4gIG1vbm86IGNvbmZpZy5mb250LmZhbWlseS5tb25vLFxufTtcblxuLyoqIE1hcHMgZm9udC1mYW1pbHkgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBmb250LWZhbWlseSBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgZm9udEZhbWlseVZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZm9udEZhbWlseU1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZWxldmF0aW9uTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB6MDogY29uZmlnLmVsZXZhdGlvbi56MCxcbiAgejE6IGNvbmZpZy5lbGV2YXRpb24uejEsXG4gIHoyOiBjb25maWcuZWxldmF0aW9uLnoyLFxuICB6MzogY29uZmlnLmVsZXZhdGlvbi56MyxcbiAgejQ6IGNvbmZpZy5lbGV2YXRpb24uejQsXG59O1xuXG4vKiogTWFwcyBlbGV2YXRpb24gdmFsdWVzIGZyb20gZGVzaWduYXRlZCBlbGV2YXRpb24gc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGVsZXZhdGlvblZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZWxldmF0aW9uTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuIiwgImltcG9ydCB7IGNvbmZpZywgU2VsZWN0b3JPcHRpb25zIH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgU2VsZWN0b3JNZXRhZGF0YSxcbiAgU2VsZWN0b3JTdHlsZXMsXG4gIFN0eWxlTWFwLFxuICBTdHlsZU1hcENhbGxiYWNrLFxuICBTdHlsZVByb3BlcnR5LFxufSBmcm9tICcuL2Nzcy1pbi1qcy50eXBlcyc7XG5pbXBvcnQge1xuICBwcm9wU2hvcnRoYW5kcyxcbiAgc3BhY2luZ1ZhbFNob3J0aGFuZHMsXG4gIG51bWJlclRvUHgsXG4gIGRvdFN0cmluZ1RvQ29uZmlnVmFsdWVNYXBwZXIsXG4gIGJvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsXG4gIGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kcyxcbiAgb3BhY2l0eVZhbFNob3J0aGFuZHMsXG4gIGZvbnRXZWlnaHRWYWxTaG9ydGhhbmRzLFxuICBmb250RmFtaWx5VmFsU2hvcnRoYW5kcyxcbiAgZWxldmF0aW9uVmFsU2hvcnRoYW5kcyxcbiAgZm9udFNpemVWYWxTaG9ydGhhbmRzLFxufSBmcm9tICcuL2Nzcy1pbi1qcy5wcm9wZXJ0eS1tYXBwZXJzJztcblxuLyoqIFNwZWNpZmllcyB3aGljaCBwcm9wZXJ0eSBtYXBwZXJzIHNob3VsZCBiZSBjYWxsZWQgYW5kIGluIHdoYXQgb3JkZXIgZm9yIGEgZ2l2ZW4gcHJvcCAqL1xuY29uc3QgcHJvcE1hcHBlcnMgPSB7XG4gIGhlaWdodDogW251bWJlclRvUHhdLFxuICBtaW5IZWlnaHQ6IFtudW1iZXJUb1B4XSxcbiAgbWF4SGVpZ2h0OiBbbnVtYmVyVG9QeF0sXG4gIHdpZHRoOiBbbnVtYmVyVG9QeF0sXG4gIG1pbldpZHRoOiBbbnVtYmVyVG9QeF0sXG4gIG1heFdpZHRoOiBbbnVtYmVyVG9QeF0sXG4gIHRvcDogW251bWJlclRvUHhdLFxuICByaWdodDogW251bWJlclRvUHhdLFxuICBib3R0b206IFtudW1iZXJUb1B4XSxcbiAgbGVmdDogW251bWJlclRvUHhdLFxuICBtYXJnaW46IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpblRvcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luUmlnaHQ6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpbkJvdHRvbTogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luTGVmdDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZzogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ1RvcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ1JpZ2h0OiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nQm90dG9tOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nTGVmdDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgZ2FwOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICByb3dHYXA6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGNvbHVtbkdhcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgZm9udFNpemU6IFtmb250U2l6ZVZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBmb250V2VpZ2h0OiBbZm9udFdlaWdodFZhbFNob3J0aGFuZHNdLFxuICBmb250RmFtaWx5OiBbZm9udEZhbWlseVZhbFNob3J0aGFuZHNdLFxuICBib3JkZXJSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyV2lkdGg6IFtib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJUb3BSaWdodFJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgb3BhY2l0eTogW29wYWNpdHlWYWxTaG9ydGhhbmRzXSxcbiAgYm94U2hhZG93OiBbZWxldmF0aW9uVmFsU2hvcnRoYW5kc10sXG59O1xuXG4vKipcbiAqIFBhcnNlcyBwcm9wZXJ0aWVzIHRvIHRoZWlyIGFjdHVhbCBwcm9wZXJ0eSBtYXBwaW5ncyBhY2NvcmRpbmcgdG8gdGhlXG4gKiBtYXBwaW5nIGZ1bmN0aW9uIHBpcGVsaW5lcyBkZWZpbmVkIGFib3ZlXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJzZVByb3BTaG9ydGhhbmRzID0gKHByb3A6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlcik6IFN0eWxlUHJvcGVydHlbXSA9PiB7XG4gIC8vIENhc3QgdG8gc3RyaW5nIHZhbHVlc1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHZhbHVlID0gYCR7dmFsdWV9YDtcbiAgfVxuICAvLyBFeGVjIHByb3AgdHJhbnNmb3Jtc1xuICAvLyBUaGUgcHJvcCBzaG9ydGhhbmRzIG1hcHBlciBpcyBydW4gYWdhaW5zdCBldmVyeSBwcm9wXG4gIGNvbnN0IG1hcHBlZFByb3BzID0gZG90U3RyaW5nVG9Db25maWdWYWx1ZU1hcHBlcihwcm9wU2hvcnRoYW5kcyhbeyBwcm9wLCB2YWx1ZSB9XSkpO1xuICByZXR1cm4gbWFwcGVkUHJvcHMucmVkdWNlKChhY2MsIHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZXJzID0gcHJvcE1hcHBlcnNbcHJvcE1hcC5wcm9wXTtcbiAgICBpZiAobWFwcGVycykge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICAuLi5tYXBwZXJzLnJlZHVjZShcbiAgICAgICAgICAoYWNjLCBtYXBwZXIpID0+IG1hcHBlcihhY2MpLFxuICAgICAgICAgIFt7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IHByb3BNYXAudmFsdWUgfV1cbiAgICAgICAgKSxcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjYy5wdXNoKHByb3BNYXApO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gIH0sIFtdKTtcbn07XG5cbi8qKlxuICogUGFyc2VzIHN0eWxlTWFwIHZhbHVlcyB0byBzZWxlY3RvciArIHN0eWxlIGluZm8gdXNlZCBmb3JcbiAqIHVwZGF0aW5nIENTU1N0eWxlU2hlZXRzIG9yIDxzdHlsZT4gdGFncy5cbiAqL1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlU2VsZWN0b3JzRnJvbVN0eWxlTWFwID0gKFxuICBzZWxlY3RvckZuOiAob3B0aW9ucz86IFNlbGVjdG9yT3B0aW9ucykgPT4gc3RyaW5nLFxuICBzdHlsZU1hcDogU3R5bGVNYXBcbikgPT4ge1xuICBjb25zdCBwYXJzZWRTZWxlY3RvcnM6IFNlbGVjdG9yU3R5bGVzW10gPSBbXTtcbiAgY29uc3Qgc2VsZWN0b3JRdWV1ZTogU2VsZWN0b3JNZXRhZGF0YVtdID0gW3sgc2VsZWN0b3I6IHNlbGVjdG9yRm4oKSwgc3R5bGVNYXAgfV07XG4gIGNvbnN0IGJyZWFrcG9pbnRLZXlzID0gT2JqZWN0LmtleXMoY29uZmlnLmdyaWQuYnJlYWtwb2ludCk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHNlbGVjdG9yIHF1ZXVlIHVudGlsIHRoZXkgaGF2ZSBhbGwgYmVlbiBleGhhdXN0ZWRcbiAgd2hpbGUgKHNlbGVjdG9yUXVldWUubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHNlbGVjdG9yTWFwID0gc2VsZWN0b3JRdWV1ZS5zaGlmdCgpO1xuXG4gICAgLy8gUHVzaCBwYXJzZWQgc2VsZWN0b3JzIG9udG8gdGhlIHJldHVybiBsaXN0XG4gICAgcGFyc2VkU2VsZWN0b3JzLnB1c2goe1xuICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLFxuICAgICAgc2VsZWN0b3JXcmFwcGVyOiBzZWxlY3Rvck1hcC5zZWxlY3RvcldyYXBwZXIsXG4gICAgICBzdHlsZTogT2JqZWN0LmtleXMoc2VsZWN0b3JNYXAuc3R5bGVNYXApLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHNlbGVjdG9yTWFwLnN0eWxlTWFwW3Byb3BdO1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXJzZSBjYWxsYmFjayB2YWx1ZXNcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFsdWUgPSAodmFsdWUgYXMgU3R5bGVNYXBDYWxsYmFjaykoY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIG9iamVjdCB2YWx1ZXNcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIFF1ZXVlIHVwIHNlbGVjdG9ycyBmb3IgcHNldWRvLWNsYXNzZXNcbiAgICAgICAgICBpZiAocHJvcC5zdGFydHNXaXRoKCcmOicpKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JGbih7IGluZml4OiBwcm9wLnJlcGxhY2UoJyYnLCAnJykgfSksXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBzZWxlY3Rvck1hcC5zZWxlY3RvcldyYXBwZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFF1ZXVlIHVwIGJyZWFrcG9pbnQgc2VsZWN0b3Igc2hvcnRoYW5kc1xuICAgICAgICAgIGVsc2UgaWYgKGJyZWFrcG9pbnRLZXlzLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBgQG1lZGlhIChtaW4td2lkdGg6JHtjb25maWcuZ3JpZC5icmVha3BvaW50W3Byb3BdfSlgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIG1lZGlhL2NvbnRhaW5lciBxdWVyaWVzXG4gICAgICAgICAgZWxzZSBpZiAocHJvcC5zdGFydHNXaXRoKCdAbWVkaWEnKSB8fCBwcm9wLnN0YXJ0c1dpdGgoJ0Bjb250YWluZXInKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogcHJvcCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUXVldWUgdXAgc2VsZWN0b3JzIGZvciBzbG90dGVkIHF1ZXJpZXNcbiAgICAgICAgICBlbHNlIGlmIChwcm9wLnN0YXJ0c1dpdGgoJzo6c2xvdHRlZCcpIHx8IHByb3Auc3RhcnRzV2l0aCgnJiA6OnNsb3R0ZWQnKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yRm4oeyBwb3N0Zml4OiAnICcgKyBwcm9wLnJlcGxhY2UoJyYgJywgJycpIH0pLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogc2VsZWN0b3JNYXAuc2VsZWN0b3JXcmFwcGVyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIHZhbHVlIGJyZWFrcG9pbnQgb2JqZWN0c1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTG9vcCBpbiBvcmRlciBoZXJlIHNvIHRoZXkgb3ZlcnJpZGUgZWFjaCBvdGhlciBjb3JyZWN0bHlcbiAgICAgICAgICAgIGJyZWFrcG9pbnRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAodmFsdWVba2V5XSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsIC8vIGluaGVyaXQgdGhlIHNlbGVjdG9yIGhlcmUgaW4gY2FzZSB3ZSBhcmUgd2l0aGluIGEgcHNldWRvLWNsYXNzXG4gICAgICAgICAgICAgICAgICBzdHlsZU1hcDogeyBbcHJvcF06IHZhbHVlW2tleV0gfSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogYEBtZWRpYSAobWluLXdpZHRoOiR7Y29uZmlnLmdyaWQuYnJlYWtwb2ludFtrZXldfSlgLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2Ugbm9ybWFsIHByb3BzXG4gICAgICAgIGNvbnN0IHByb3BzID0gcGFyc2VQcm9wU2hvcnRoYW5kcyhwcm9wLCB2YWx1ZSBhcyBzdHJpbmcgfCBudW1iZXIpO1xuICAgICAgICByZXR1cm4gYCR7YWNjfSR7cHJvcHMucmVkdWNlKChhY2MyLCB7IHByb3AsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAvLyBDb252ZXJ0IHByb3BlcnR5IG5hbWVzIGZyb20gY2FtZWwtY2FzZSB0byBkYXNoLWNhc2UsIGkuZS46XG4gICAgICAgICAgLy8gIGBiYWNrZ3JvdW5kQ29sb3JgIC0+IGBiYWNrZ3JvdW5kLWNvbG9yYFxuICAgICAgICAgIC8vIFZlbmRvci1wcmVmaXhlZCBuYW1lcyBuZWVkIGFuIGV4dHJhIGAtYCBhcHBlbmRlZCB0byBmcm9udDpcbiAgICAgICAgICAvLyAgYHdlYmtpdEFwcGVhcmFuY2VgIC0+IGAtd2Via2l0LWFwcGVhcmFuY2VgXG4gICAgICAgICAgLy8gRXhjZXB0aW9uIGlzIGFueSBwcm9wZXJ0eSBuYW1lIGNvbnRhaW5pbmcgYSBkYXNoLCBpbmNsdWRpbmdcbiAgICAgICAgICAvLyBjdXN0b20gcHJvcGVydGllczsgd2UgYXNzdW1lIHRoZXNlIGFyZSBhbHJlYWR5IGRhc2gtY2FzZWQgaS5lLjpcbiAgICAgICAgICAvLyAgYC0tbXktYnV0dG9uLWNvbG9yYCAtLT4gYC0tbXktYnV0dG9uLWNvbG9yYFxuICAgICAgICAgIHByb3AgPSBwcm9wLnJlcGxhY2UoLyg/Ol4od2Via2l0fG1venxtc3xvKXwpKD89W0EtWl0pL2csICctJCYnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHJldHVybiBgJHthY2MyfSR7cHJvcH06JHt2YWx1ZX07YDtcbiAgICAgICAgfSwgJycpfWA7XG4gICAgICB9LCAnJyksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VkU2VsZWN0b3JzO1xufTtcblxuY29uc3QgcGFyc2VTZWxlY3RvcnMgPSAoc3R5bGVzLCBzZWxlY3RvcnM/OiBhbnkpID0+IHtcbiAgaWYgKCFzZWxlY3RvcnMpIHtcbiAgICByZXR1cm4gc3R5bGVzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgJHtzdHlsZXN9JHtzZWxlY3RvcnMucmVkdWNlKChhY2MsIHsgc2VsZWN0b3IsIHNlbGVjdG9yV3JhcHBlciwgc3R5bGUgfSkgPT4ge1xuICAgICAgaWYgKHN0eWxlID09PSAnJykge1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuICAgICAgY29uc3QgYmFzZSA9IGAke3NlbGVjdG9yfXske3N0eWxlfX1gO1xuICAgICAgY29uc3Qgd3JhcHBlZCA9IHNlbGVjdG9yV3JhcHBlciA/IGAke3NlbGVjdG9yV3JhcHBlcn17JHtiYXNlfX1gIDogYmFzZTtcbiAgICAgIHJldHVybiBgJHthY2N9JHt3cmFwcGVkfWA7XG4gICAgfSwgJycpfWA7XG4gIH1cbn07XG5cbi8qKlxuICogQ29tYmluZXMgYWxsIGluc3RhbmNlIHN0eWxlTWFwIHNlbGVjdG9ycyArIHN0eWxlIGluZm8gaW50byBvbmUgY3NzVGV4dFxuICogdXNlZCBmb3IgdXBkYXRpbmcgQ1NTU3R5bGVTaGVldHMgb3IgPHN0eWxlPiB0YWdzLlxuICovXG5leHBvcnQgY29uc3QgY29uc3RydWN0SW5zdGFuY2VTdHlsZXMgPSAoaW5zdGFuY2VTdHlsZXNNYXApID0+IHtcbiAgbGV0IHN0eWxlcyA9ICcnO1xuXG4gIC8vIFNvcnQga2V5cyBpbiBhbHBoYWJldGljYWwgb3JkZXIgdG8gaGVscCBhdm9pZCBoeWRyYXRpb24gbWlzbWF0Y2ggZXJyb3JzXG4gIFsuLi5pbnN0YW5jZVN0eWxlc01hcC5lbnRyaWVzKCldXG4gICAgLmZpbHRlcigoW2tleSwgX10pID0+IGtleSAhPT0gJ3NlJyAmJiBrZXkgIT09ICdzcCcpXG4gICAgLnNvcnQoKGEsIGIpID0+IGJbMF0gLSBhWzBdKVxuICAgIC5mb3JFYWNoKChbXywgc2VsZWN0b3JzXSkgPT4ge1xuICAgICAgc3R5bGVzID0gcGFyc2VTZWxlY3RvcnMoc3R5bGVzLCBzZWxlY3RvcnMpO1xuICAgIH0pO1xuXG4gIC8vIEFsd2F5cyBwYXJzZSBgc2VgIGFuZCBgc3BgIHNlbGVjdG9ycyBsYXN0IHRvIGhlbHAgYXZvaWQgaHlkcmF0aW9uIG1pc21hdGNoIGVycm9yc1xuICAvLyBhbmQgZW5zdXJlIHRoZXkgb3ZlcnJpZGUgYW55IGNvbXBvbmVudCBsZXZlbCBkeW5hbWljIHN0eWxlcy5cbiAgc3R5bGVzID0gYCR7c3R5bGVzfSR7cGFyc2VTZWxlY3RvcnMoJycsIGluc3RhbmNlU3R5bGVzTWFwLmdldCgnc2UnKSl9JHtwYXJzZVNlbGVjdG9ycyhcbiAgICAnJyxcbiAgICBpbnN0YW5jZVN0eWxlc01hcC5nZXQoJ3NwJylcbiAgKX1gO1xuICByZXR1cm4gc3R5bGVzO1xufTtcbiIsICJpbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gJ2xpdC1odG1sL2lzLXNlcnZlci5qcyc7XG5cbmV4cG9ydCBjb25zdCBpc1NzciA9ICgpID0+IGlzU2VydmVyO1xuXG5leHBvcnQgY29uc3QgaXNCcm93c2VyTGlrZSA9ICgpID0+IGdsb2JhbFRoaXMgIT09IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IGlzVmFsaWRSZXNpemVDb250cm9sbGVyID0gKHJlc2l6ZUNvbnRyb2xsZXIpID0+XG4gIHJlc2l6ZUNvbnRyb2xsZXI/LlsnX29ic2VydmVyJ10/LlsndW5vYnNlcnZlJ107XG5cbmludGVyZmFjZSBOYXZpZ2F0b3JVQURhdGEge1xuICBicmFuZHM6IEFycmF5PHsgYnJhbmQ6IHN0cmluZzsgdmVyc2lvbjogc3RyaW5nIH0+O1xuICBtb2JpbGU6IGJvb2xlYW47XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGF0Zm9ybSgpOiBzdHJpbmcge1xuICBjb25zdCB1YURhdGEgPSAobmF2aWdhdG9yIGFzIGFueSkudXNlckFnZW50RGF0YSBhcyBOYXZpZ2F0b3JVQURhdGEgfCB1bmRlZmluZWQ7XG5cbiAgaWYgKHVhRGF0YT8ucGxhdGZvcm0pIHtcbiAgICByZXR1cm4gdWFEYXRhLnBsYXRmb3JtO1xuICB9XG5cbiAgcmV0dXJuIG5hdmlnYXRvci5wbGF0Zm9ybTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzUGxhdGZvcm0gPSAocGxhdGZvcm06ICdJT1MnKSA9PiB7XG4gIGlmICghaXNTc3IoKSkge1xuICAgIGlmIChwbGF0Zm9ybSA9PT0gJ0lPUycpIHtcbiAgICAgIHJldHVybiAvaVAoaG9uZXxhZHxvZCl8aU9TLy50ZXN0KGdldFBsYXRmb3JtKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiIsICJjb25zdCBuYXRpdmVWYWxpZGl0eVN0YXRlczogQXJyYXk8a2V5b2YgVmFsaWRpdHlTdGF0ZT4gPSBbXG4gICdiYWRJbnB1dCcsXG4gICdjdXN0b21FcnJvcicsXG4gICdwYXR0ZXJuTWlzbWF0Y2gnLFxuICAncmFuZ2VPdmVyZmxvdycsXG4gICdyYW5nZVVuZGVyZmxvdycsXG4gICdzdGVwTWlzbWF0Y2gnLFxuICAndG9vTG9uZycsXG4gICd0b29TaG9ydCcsXG4gICd0eXBlTWlzbWF0Y2gnLFxuICAndmFsdWVNaXNzaW5nJyxcbl07XG5cbi8qKlxuICogQ3VzdG9tIHZhbGlkYXRvciBmb3IgdGhlIGBAb3Blbi13Yy9mb3JtLWNvbnRyb2xgIHRoYXQgbGVhbnMgb24gYW4gaW50ZXJuYWxcbiAqIGlucHV0IHRvIGZvcndhcmQgbmF0aXZlIHZhbGlkYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGlubmVySW5wdXRWYWxpZGF0b3JzID0gbmF0aXZlVmFsaWRpdHlTdGF0ZXMubWFwKChrZXkpID0+ICh7XG4gIGtleSxcbiAgaXNWYWxpZChpbnN0YW5jZTogSFRNTEVsZW1lbnQgJiB7IHZhbGlkYXRpb25UYXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQgfSkge1xuICAgIGlmIChpbnN0YW5jZS52YWxpZGF0aW9uVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gIWluc3RhbmNlLnZhbGlkYXRpb25UYXJnZXQudmFsaWRpdHlba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG59KSk7XG4iLCAiLyoqXG4gKiBOT1RFOlxuICpcbiAqIFRoaXMgZmlsZSBjb250YWlucyBpbXBsZW1lbnRhdGlvbiBmb3IgYW4gZXh0cmVtZWx5IHNpbXBsZSBhbmQgbGlnaHR3ZWlnaHRcbiAqIHJlYWN0aXZlIHNvbHV0aW9uIGxvb3NlbHkgYmFzZWQgb24gc29saWQtanMgc3R5bGUgc2lnbmFscy4gSXQgZW5hYmxlcyBiYXNpY1xuICogcmVhY3RpdmUgc3Vic2NyaXB0aW9ucyBhbmQgY29tcHV0ZWQgc2lnbmFscyBvZiBvbmUgb3IgbW9yZSBvdGhlciBkZXBlbmRlbmN5IHNpZ25hbHMuXG4gKlxuICogSW4gaXRzIGN1cnJlbnQgc3RhdGUsIGl0IGlzIG5vdCBwZXJmZWN0IGFuZCBkb2VzIG5vdCBoYW5kbGUgYWxsIGVkZ2UgY2FzZXMuIEZvclxuICogZXhhbXBsZSwgaWYgeW91IGhhdmUgbXVsdGlwbGUgbGF5ZXJzIG9mIGNvbXB1dGVkIHN0YXRlIHdpdGggYSBzaW5nbGUgZGVwZW5kZW5jeVxuICogc2hhcmVkIG1vcmUgdGhhbiBvbmNlIGFjcm9zcyB0aG9zZSBsYXllcnMsIHRoZSBzYW1lIGNoYW5nZSB3aWxsIHBvdGVudGlhbGx5IGJlXG4gKiBlbWl0dGVkIHR3aWNlLiBPdXIgZXhwZWN0YXRpb24gYXRtLCBpcyB0aGF0IHdlIHdvbid0IGVuY291bnRlciB0aG9zZSBzY2VuYXJpb3NcbiAqIGluIHRoaXMgbGlicmFyeS5cbiAqL1xuXG4vKiogVW5zdWJzY3JpYmVzIGZyb20gdmFsdWUgdXBkYXRlcy4gKi9cbmV4cG9ydCB0eXBlIFVuc3Vic2NyaWJlciA9ICgpID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmFsPFQ+IHtcbiAgLyoqIEdldCB0aGUgY3VycmVudCB2YWx1ZSAqL1xuICBnZXQoKTogVDtcblxuICAvKiogU2V0IHJlYWN0aXZlIHZhbHVlICovXG4gIHNldCh2YWx1ZTogVCk7XG5cbiAgLyoqIFVwZGF0ZSByZWFjdGl2ZSB2YWx1ZSB1c2luZyBjYWxsYmFjayAqL1xuICB1cGRhdGUoZm46ICh2YWx1ZTogVCkgPT4gVCk7XG5cbiAgLyoqIFN1YnNjcmliZSB0byByZWFjdGl2ZSB2YWx1ZSBjaGFuZ2VzICovXG4gIHN1YnNjcmliZShmbjogKHZhbHVlOiBULCB1bnN1YnNjcmliZT86IFVuc3Vic2NyaWJlcikgPT4gdm9pZCk6IFVuc3Vic2NyaWJlcjtcbn1cblxuY29uc3QgY29udGV4dCA9IFtdO1xuXG5mdW5jdGlvbiBfc3Vic2NyaWJlKHJ1bm5pbmcsIHN1YnNjcmlwdGlvbnMpIHtcbiAgc3Vic2NyaXB0aW9ucy5hZGQocnVubmluZyk7XG4gIHJ1bm5pbmcuZGVwZW5kZW5jaWVzLmFkZChzdWJzY3JpcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gY2xlYW51cChydW5uaW5nKSB7XG4gIGZvciAoY29uc3QgZGVwIG9mIHJ1bm5pbmcuZGVwZW5kZW5jaWVzKSB7XG4gICAgZGVwLmRlbGV0ZShydW5uaW5nKTtcbiAgfVxuICBydW5uaW5nLmRlcGVuZGVuY2llcy5jbGVhcigpO1xufVxuXG4vKiogQ3JlYXRlIGEgc2lnbmFsIHRoYXQgYWxsb3dzIGJvdGggdXBkYXRpbmcgYW5kIHJlYWRpbmcgYnkgZ2V0dGVyIG9yIHN1YnNjcmlwdGlvbi4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaWduYWw8VD4odmFsdWU/OiBUKSB7XG4gIGNvbnN0IHN1YnNjcmlwdGlvbnMgPSBuZXcgU2V0PGFueT4oKTtcblxuICBjb25zdCBnZXQgPSAoKTogVCA9PiB7XG4gICAgY29uc3QgcnVubmluZyA9IGNvbnRleHRbY29udGV4dC5sZW5ndGggLSAxXTtcbiAgICBpZiAocnVubmluZykgX3N1YnNjcmliZShydW5uaW5nLCBzdWJzY3JpcHRpb25zKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0ID0gKG5leHRWYWx1ZTogVCkgPT4ge1xuICAgIHZhbHVlID0gbmV4dFZhbHVlO1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIFsuLi5zdWJzY3JpcHRpb25zXSkge1xuICAgICAgc3ViLmV4ZWN1dGUoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlID0gKGZuOiAodmFsdWU6IFQpID0+IFQpID0+IHtcbiAgICB2YWx1ZSA9IGZuKHZhbHVlKTtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiBbLi4uc3Vic2NyaXB0aW9uc10pIHtcbiAgICAgIHN1Yi5leGVjdXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRoaXMgaXMgZXNzZW50aWFsbHkgYSB1c2VFZmZlY3QgbWFzcXVlcmFkaW5nIGFzIGEgc3Vic2NyaWJlIGZ1bmN0aW9uXG4gIGNvbnN0IHN1YnNjcmliZSA9IChmbjogKHZhbHVlOiBULCB1bnN1YnNjcmliZT86IFVuc3Vic2NyaWJlcikgPT4gdm9pZCk6IFVuc3Vic2NyaWJlciA9PiB7XG4gICAgY29uc3QgZXhlY3V0ZSA9ICgpID0+IHtcbiAgICAgIGNsZWFudXAocnVubmluZyk7XG4gICAgICBjb250ZXh0LnB1c2gocnVubmluZyk7XG4gICAgICB0cnkge1xuICAgICAgICBmbihydW5uaW5nLmdldCgpLCAoKSA9PiBjbGVhbnVwKHJ1bm5pbmcpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGNvbnRleHQucG9wKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKCkgPT4gY2xlYW51cChydW5uaW5nKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcnVubmluZyA9IHtcbiAgICAgIGV4ZWN1dGUsXG4gICAgICBkZXBlbmRlbmNpZXM6IG5ldyBTZXQoKSxcbiAgICAgIGdldCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGV4ZWN1dGUoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCxcbiAgICBzZXQsXG4gICAgdXBkYXRlLFxuICAgIHN1YnNjcmliZSxcbiAgfSBhcyBTaWduYWw8VD47XG59XG5cbi8qKiBPbmUgb3IgbW9yZSBgU2lnbmFsYHMgKi9cbnR5cGUgU2lnbmFscyA9IFNpZ25hbDxhbnk+IHwgW1NpZ25hbDxhbnk+LCAuLi5BcnJheTxTaWduYWw8YW55Pj5dIHwgU2lnbmFsPGFueT5bXTtcblxuLyoqIE9uZSBvciBtb3JlIHZhbHVlcyBmcm9tIHNpZ25hbHMgKi9cbmV4cG9ydCB0eXBlIFNpZ25hbFZhbHVlczxUPiA9IFQgZXh0ZW5kcyBTaWduYWw8aW5mZXIgVT5cbiAgPyBVXG4gIDogeyBbSyBpbiBrZXlvZiBUXTogVFtLXSBleHRlbmRzIFNpZ25hbDxpbmZlciBVPiA/IFUgOiBuZXZlciB9O1xuXG4vKiogQ3JlYXRlIGEgbmV3IGNvbXB1dGVkIHNpZ25hbCBmcm9tIG9uZSBvciBtb3JlIHNpZ25hbCBkZXBlbmRlbmNpZXMgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZDxEIGV4dGVuZHMgU2lnbmFscywgVD4oXG4gIGRlcGVuZGVuY2llczogRCxcbiAgZm46ICh2YWx1ZXM6IFNpZ25hbFZhbHVlczxEPikgPT4gVFxuKTogU2lnbmFsPFQ+O1xuXG4vKiogQ3JlYXRlIGEgbmV3IGNvbXB1dGVkIHNpZ25hbCBmcm9tIG9uZSBvciBtb3JlIHNpZ25hbCBkZXBlbmRlbmNpZXMgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZDxEIGV4dGVuZHMgU2lnbmFscywgVD4oXG4gIGRlcGVuZGVuY2llczogRCxcbiAgZm4/OiAodmFsdWVzOiBTaWduYWxWYWx1ZXM8RD4sIHNldD86ICh2YWx1ZTogYW55KSA9PiB2b2lkKSA9PiBUXG4pOiBTaWduYWw8dW5rbm93bj47XG5cbi8qKiBDcmVhdGUgYSBuZXcgY29tcHV0ZWQgc2lnbmFsIGZyb20gb25lIG9yIG1vcmUgc2lnbmFsIGRlcGVuZGVuY2llcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkPEQgZXh0ZW5kcyBTaWduYWxzPihcbiAgZGVwZW5kZW5jaWVzOiBELFxuICBmbj86ICguLi5wYXJhbXM6IGFueVtdKSA9PiBhbnlcbik6IFNpZ25hbDxhbnk+IHtcbiAgY29uc3QgYXV0byA9IGZuLmxlbmd0aCA8IDI7XG4gIGNvbnN0IHMgPSBzaWduYWw8YW55PigpO1xuICBjb25zdCBzaW5nbGUgPSAhQXJyYXkuaXNBcnJheShkZXBlbmRlbmNpZXMpO1xuICBjb25zdCBkZXBzID0gc2luZ2xlXG4gICAgPyAoW2RlcGVuZGVuY2llc10gYXMgU2lnbmFsPFNpZ25hbFZhbHVlczxEPj5bXSlcbiAgICA6IChkZXBlbmRlbmNpZXMgYXMgU2lnbmFsPFNpZ25hbFZhbHVlczxEPj5bXSk7XG5cbiAgLy8gV2Ugb25seSBuZWVkIHRvIHN1YnNjcmliZSB0byB0aGUgZmlyc3QgaXRlbSBiZWNhdXNlXG4gIC8vIHRoZSBhY3Qgb2YgcmV0cmlldmluZyBhbGwgZGVwZW5kZW5jeSB2YWx1ZXMgd2lsbCBhZGQgdGhlbVxuICAvLyB0byB0aGUgY29udGV4dCBzdGFjayBhcHByb3ByaWF0ZWx5XG4gIGNvbnN0IGRlcCA9IGRlcHNbMF07XG4gIGRlcC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlcyA9IGRlcHMubWFwKChkZXApID0+IGRlcC5nZXQoKSk7XG4gICAgY29uc3QgcmV0ID0gc2luZ2xlID8gdmFsdWVzWzBdIDogKHZhbHVlcyBhcyBTaWduYWxWYWx1ZXM8RD4pO1xuICAgIGlmIChhdXRvKSB7XG4gICAgICBzLnNldChmbihyZXQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4ocmV0LCBzLnNldCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHM7XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgd2Mvbm8tc2VsZi1jbGFzcyAqL1xuaW1wb3J0IHsgY29uZmlnLCBzZWxlY3RvckZhY3RvcnkgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kcywgZG90U3RyaW5nVG9Db25maWdWYWx1ZSB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBNdGVFbGVtZW50IH0gZnJvbSAnLi9tdGUuZWxlbWVudCc7XG5pbXBvcnQgeyBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSBmcm9tICcuLi9hdHRyaWJ1dGUtY29udmVydGVyJztcblxuZXhwb3J0IHR5cGUgU3BhY2luZ1ZhbHVlID1cbiAgfCBudW1iZXJcbiAgfCBzdHJpbmdcbiAgfCAxXG4gIHwgMlxuICB8IDNcbiAgfCA0XG4gIHwgNVxuICB8IDZcbiAgfCAnbm9uZSdcbiAgfCAneHMnXG4gIHwgJ3NtJ1xuICB8ICdtZCdcbiAgfCAnbGcnXG4gIHwgJ3hsJ1xuICB8ICd4eGwnXG4gIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBVbml0VmFsdWUgPSBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIEJvcmRlclJhZGl1c1ZhbHVlID1cbiAgfCAnbm9uZSdcbiAgfCAneHMnXG4gIHwgJ3NtJ1xuICB8ICdtZCdcbiAgfCAnbGcnXG4gIHwgJ3hsJ1xuICB8ICd4eGwnXG4gIHwgJ2Z1bGwnXG4gIHwgc3RyaW5nXG4gIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBCb3JkZXJXaWR0aFZhbHVlID0gJ25vbmUnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBPcGFjaXR5VmFsdWUgPVxuICB8ICd4eHhzJ1xuICB8ICd4eHMnXG4gIHwgJ3hzJ1xuICB8ICdzbSdcbiAgfCAnbWQnXG4gIHwgJ2xnJ1xuICB8ICd4bCdcbiAgfCAneHhsJ1xuICB8IHN0cmluZ1xuICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgUmVzcG9uc2l2ZVZhbHVlPFQ+ID0gVCB8IFBhcnRpYWw8UmVjb3JkPCd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCcsIFQ+PjtcblxuY29uc3QgZGVmYXVsdEJvcmRlckZhY3RvcnkgPSAod2lkdGg/LCBjb2xvcj8sIHN0eWxlPykgPT5cbiAgYCR7c3R5bGUgPz8gJ3NvbGlkJ30gJHtcbiAgICBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMoW1xuICAgICAgeyBwcm9wOiAnYm9yZGVyV2lkdGgnLCB2YWx1ZTogZG90U3RyaW5nVG9Db25maWdWYWx1ZSh3aWR0aCA/PyAnMXB4JykgfSxcbiAgICBdKVswXT8udmFsdWVcbiAgfSAke2RvdFN0cmluZ1RvQ29uZmlnVmFsdWUoY29sb3IpID8/IGNvbmZpZy5jb2xvci5ib3JkZXIxfWA7XG5cbmV4cG9ydCBjbGFzcyBNdGVDb250ZW50QmFzZSBleHRlbmRzIE10ZUVsZW1lbnQge1xuICAvLyAtLSBTcGFjaW5nIFByb3BzIC0tXG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW5gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbT86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXJpZ2h0YCBhbmQgYG1hcmdpbi1sZWZ0YCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbXg/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi10b3BgIGFuZCBgbWFyZ2luLWJvdHRvbWAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG15PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tdG9wYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG10PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tcmlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbXI/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi1ib3R0b21gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWI/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi1sZWZ0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1sPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHA/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctcmlnaHRgIGFuZCBgcGFkZGluZy1sZWZ0YCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcHg/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctdG9wYCBhbmQgYHBhZGRpbmctYm90dG9tYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcHk/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctdG9wYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHB0PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXJpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHByPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLWJvdHRvbWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwYj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1sZWZ0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHBsPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLy8gLS0gUG9zaXRpb25pbmcgUHJvcHMgLS1cblxuICAvKiogU2V0cyB0aGUgYGRpc3BsYXlgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2Jsb2NrJ1xuICAgIHwgJ2lubGluZS1ibG9jaydcbiAgICB8ICdmbGV4J1xuICAgIHwgJ2lubGluZS1mbGV4J1xuICAgIHwgJ2dyaWQnXG4gICAgfCAnaW5saW5lLWdyaWQnXG4gICAgfCAnaW5saW5lJ1xuICAgIHwgJ2xpc3QtaXRlbSdcbiAgICB8ICdub25lJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGFsaWduLWl0ZW1zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGE/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdlbmQnXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdiYXNlbGluZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1pdGVtc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBhbGlnbkl0ZW1zPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnYmFzZWxpbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24tc2VsZmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBhbGlnblNlbGY/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdhdXRvJ1xuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2Jhc2VsaW5lJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGFsaWduLWNvbnRlbnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYWxpZ25Db250ZW50PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnc3BhY2UtYmV0d2VlbidcbiAgICB8ICdzcGFjZS1hcm91bmQnXG4gICAgfCAnc3BhY2UtZXZlbmx5J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGp1c3RpZnktY29udGVudGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBqPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3NwYWNlLWJldHdlZW4nXG4gICAgfCAnc3BhY2UtYXJvdW5kJ1xuICAgIHwgJ3NwYWNlLWV2ZW5seSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LWNvbnRlbnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAganVzdGlmeUNvbnRlbnQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3BhY2UtYmV0d2VlbidcbiAgICB8ICdzcGFjZS1hcm91bmQnXG4gICAgfCAnc3BhY2UtZXZlbmx5J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGp1c3RpZnktaXRlbXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkganVzdGlmeUl0ZW1zPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdsZWZ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAncmlnaHQnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1zZWxmYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGp1c3RpZnlTZWxmPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdsZWZ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAncmlnaHQnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBmbGV4OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtZGlyZWN0aW9uYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGRpcmVjdGlvbj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAncm93JyB8ICdyb3dSZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtblJldmVyc2UnIHwgJ2luaXRpYWwnIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWRpcmVjdGlvbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4RGlyZWN0aW9uPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdyb3cnIHwgJ3Jvd1JldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uUmV2ZXJzZScgfCAnaW5pdGlhbCcgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtYmFzaXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYmFzaXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWJhc2lzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhCYXNpcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtZ3Jvd2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncm93PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1ncm93YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhHcm93PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1zaHJpbmtgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgc2hyaW5rPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1zaHJpbmtgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleFNocmluaz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtd3JhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSB3cmFwPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdub3dyYXAnIHwgJ3dyYXAnIHwgJ3dyYXAtcmV2ZXJzZScgfCAnaW5pdGlhbCcgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtd3JhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4V3JhcD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAnbm93cmFwJyB8ICd3cmFwJyB8ICd3cmFwLXJldmVyc2UnIHwgJ2luaXRpYWwnIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBvcmRlcmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBvcmRlcj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBnYXA/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGNvbHVtbi1nYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgY29sdW1uR2FwPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGByb3ctZ2FwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHJvd0dhcD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1jb2x1bW5gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZENvbHVtbj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtcm93YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRSb3c/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWF1dG8tZmxvd2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQXV0b0Zsb3c/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3JvdycgfCAnY29sdW1uJyB8ICdkZW5zZScgfCAncm93IGRlbnNlJyB8ICdjb2x1bW4gZGVuc2UnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWF1dG8tY29sdW1uc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBncmlkQXV0b0NvbHVtbnM/OiBSZXNwb25zaXZlVmFsdWU8J2F1dG8nIHwgJ21heC1jb250ZW50JyB8ICdtaW4tY29udGVudCcgfCBVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1hdXRvLXJvd3NgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZEF1dG9Sb3dzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgICdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXRlbXBsYXRlLWNvbHVtbnNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZFRlbXBsYXRlQ29sdW1ucz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICAnbm9uZScgfCAnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZVxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC10ZW1wbGF0ZS1yb3dzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRUZW1wbGF0ZVJvd3M/OiBSZXNwb25zaXZlVmFsdWU8J25vbmUnIHwgJ2F1dG8nIHwgJ21heC1jb250ZW50JyB8ICdtaW4tY29udGVudCcgfCBVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC10ZW1wbGF0ZS1hcmVhc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBncmlkVGVtcGxhdGVBcmVhcz86IFJlc3BvbnNpdmVWYWx1ZTwnbm9uZScgfCBzdHJpbmcgfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1hcmVhYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRBcmVhPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8vIC0tIFNpemluZyBQcm9wcyAtLVxuXG4gIC8qKiBTZXRzIHRoZSBgd2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgdz86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWF4LXdpZHRoYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1heHc/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1pbi13aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtaW53PzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBoZWlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgaD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWF4LWhlaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtYXhoPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtaW4taGVpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1pbmg/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJhY2tncm91bmRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuIENhbiBiZSBwYXNzZWQgZG90IG5vdGF0ZWQgdGhlbWUgY29uZmlnIHN0cmluZ3MgdG8gc2VsZWN0IGNvbG9yIHRva2VuIHZhbHVlcy4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYmc/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBjb2xvcmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gQ2FuIGJlIHBhc3NlZCBkb3Qgbm90YXRlZCB0aGVtZSBjb25maWcgc3RyaW5ncyB0byBzZWxlY3QgY29sb3IgdG9rZW4gdmFsdWVzLiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBjPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWNvbG9yYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiBDYW4gYmUgcGFzc2VkIGRvdCBub3RhdGVkIHRoZW1lIGNvbmZpZyBzdHJpbmdzIHRvIHNlbGVjdCBjb2xvciB0b2tlbiB2YWx1ZXMuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJvcmRlckNvbG9yPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXdpZHRoYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJXaWR0aD86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJXaWR0aFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1zdHlsZWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYm9yZGVyU3R5bGU/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3NvbGlkJyB8ICdkb3R0ZWQnIHwgJ2Rhc2hlZCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlcmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyPzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyVG9wPzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXJpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJSaWdodD86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1ib3R0b21gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbT86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1sZWZ0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJMZWZ0PzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyUmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3AtcmlnaHQtcmFkaXVzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJUb3BSaWdodFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJUb3BMZWZ0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJCb3R0b21SaWdodFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3AtcmlnaHQtcmFkaXVzYCBhbmQgYGJvcmRlci10b3AtbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyVG9wUmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3AtcmlnaHQtcmFkaXVzYCBhbmQgYGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclJpZ2h0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzYCBhbmQgYGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tUmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3AtbGVmdC1yYWRpdXNgIGFuZCBgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJMZWZ0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGxpbmUtaGVpZ2h0YCBjc3MgcHJvcGVydHkgICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGxpbmVIZWlnaHQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgbnVtYmVyXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmb250LXdlaWdodGAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZvbnRXZWlnaHQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdsaWdodCdcbiAgICB8ICdyZWd1bGFyJ1xuICAgIHwgJ21lZGl1bSdcbiAgICB8ICdsaWdodGVyJ1xuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdib2xkJ1xuICAgIHwgJ2JvbGRlcidcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gICAgfCAnMTAwJ1xuICAgIHwgJzIwMCdcbiAgICB8ICczMDAnXG4gICAgfCAnNDAwJ1xuICAgIHwgJzUwMCdcbiAgICB8ICc2MDAnXG4gICAgfCAnNzAwJ1xuICAgIHwgJzgwMCdcbiAgICB8ICc5MDAnXG4gID47XG5cbiAgLyoqIFNob3J0aGFuZCBmb3IgYGZvbnRXZWlnaHRgLiBTZXRzIHRoZSBgZm9udC13ZWlnaHRgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2xpZ2h0J1xuICAgIHwgJ3JlZ3VsYXInXG4gICAgfCAnbWVkaXVtJ1xuICAgIHwgJ2xpZ2h0ZXInXG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ2JvbGQnXG4gICAgfCAnYm9sZGVyJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgICB8ICcxMDAnXG4gICAgfCAnMjAwJ1xuICAgIHwgJzMwMCdcbiAgICB8ICc0MDAnXG4gICAgfCAnNTAwJ1xuICAgIHwgJzYwMCdcbiAgICB8ICc3MDAnXG4gICAgfCAnODAwJ1xuICAgIHwgJzkwMCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZvbnQtc2l6ZWAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZvbnRTaXplPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8IFVuaXRWYWx1ZSB8ICd4eHMnIHwgJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJ1xuICA+O1xuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIGBmb250U2l6ZWAuIFNldHMgdGhlIGBmb250LXNpemVgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCBVbml0VmFsdWUgfCAneHhzJyB8ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZvbnQtZmFtaWx5YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZm9udEZhbWlseT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAnc2FucycgfCAnc2VyaWYnIHwgJ21vbm8nIHwgc3RyaW5nXG4gID47XG5cbiAgLyoqIFNob3J0aGFuZCBmb3IgYG9wYWNpdHlgLiBTZXRzIHRoZSBgb3BhY2l0eWAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG9wYWNpdHk/OiBSZXNwb25zaXZlVmFsdWU8T3BhY2l0eVZhbHVlPjtcblxuICAvKiogQXBwbGllcyBNb3J0YXIgc3RhbmRhcmQgYm94LXNoYWRvdyB2YWx1ZXMgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZWxldmF0aW9uPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgICd6MCcgfCAnejEnIHwgJ3oyJyB8ICd6MycgfCAnejQnXG4gID47XG5cbiAgLyoqIEFkanVzdCB0aGlzIGVsZW1lbnRzIGJsZWVkIGlmIGl0IGlzIGEgZGlyZWN0IGRlc2NlbmRhbnQgb2YgYW4gbXRlLWxheW91dC1jb250YWluZXIgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBsYXlvdXRCbGVlZD86ICdmdWxsJyB8ICdwb3BvdXQnIHwgJ2NvbnRlbnQnIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoaXMgZWxlbWVudCBhcyBhIHN1YmdyaWQgd2hlbiBzZXQuIGBkaXNwbGF5YCBpcyBzZXQgdG8gYGdyaWRgIGFuZCBgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zYCBpcyBzZXQgdG8gYHN1YmdyaWRgLlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHN1YmdyaWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBzZWxlY3RvciB0byBoYXZlIGluc3RhbmNlIHN0eWxlcyB0YXJnZXQgYSBzcGVjaWZpYyBpbm5lciBlbGVtZW50LlxuICAgKiBVc2VmdWwgaW4gc3BlY2lmaWMgc2NlbmFyaW9zIHdoZXJlIHRoZSBwcmltYXJ5IGNvbnRlbnQvc2xvdCB3cmFwcGVkIHdpdGhpbiB0aGUgdGVtcGxhdGVcbiAgICogbGlrZSB3aXRoIHRoZSBtb2RhbCBjb21wb25lbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgY29udGVudFN0eWxlU2VsZWN0b3JSb290ID0gJzpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCc7XG5cbiAgLy8gTGlzdCBvZiBwcm9wcyBmb3Igb3B0aW1hbCBzdHlsZSB1cGRhdGUgY2hlY2tpbmdcbiAgcHJpdmF0ZSBzdGF0aWMgY29udGVudFByb3BzID0gbmV3IFNldChbXG4gICAgJ20nLFxuICAgICdteCcsXG4gICAgJ215JyxcbiAgICAnbXQnLFxuICAgICdtcicsXG4gICAgJ21iJyxcbiAgICAnbWwnLFxuICAgICdwJyxcbiAgICAncHgnLFxuICAgICdweScsXG4gICAgJ3B0JyxcbiAgICAncHInLFxuICAgICdwYicsXG4gICAgJ3BsJyxcbiAgICAnZCcsXG4gICAgJ2EnLFxuICAgICdqJyxcbiAgICAnYmFzaXMnLFxuICAgICdzaHJpbmsnLFxuICAgICdncm93JyxcbiAgICAnZGlyZWN0aW9uJyxcbiAgICAnd3JhcCcsXG4gICAgJ2FsaWduSXRlbXMnLFxuICAgICdhbGlnblNlbGYnLFxuICAgICdhbGlnbkNvbnRlbnQnLFxuICAgICdqdXN0aWZ5Q29udGVudCcsXG4gICAgJ2p1c3RpZnlJdGVtcycsXG4gICAgJ2p1c3RpZnlTZWxmJyxcbiAgICAnZmxleCcsXG4gICAgJ2ZsZXhEaXJlY3Rpb24nLFxuICAgICdmbGV4QmFzaXMnLFxuICAgICdmbGV4U2hyaW5rJyxcbiAgICAnZmxleEdyb3cnLFxuICAgICdmbGV4V3JhcCcsXG4gICAgJ29yZGVyJyxcbiAgICAnZ2FwJyxcbiAgICAnY29sdW1uR2FwJyxcbiAgICAncm93R2FwJyxcbiAgICAnZ3JpZENvbHVtbicsXG4gICAgJ2dyaWRSb3cnLFxuICAgICdncmlkQXV0b0Zsb3cnLFxuICAgICdncmlkQXV0b0NvbHVtbnMnLFxuICAgICdncmlkQXV0b1Jvd3MnLFxuICAgICdncmlkVGVtcGxhdGVDb2x1bW5zJyxcbiAgICAnZ3JpZFRlbXBsYXRlUm93cycsXG4gICAgJ2dyaWRUZW1wbGF0ZUFyZWFzJyxcbiAgICAnZ3JpZEFyZWEnLFxuICAgICd3JyxcbiAgICAnbWF4dycsXG4gICAgJ21pbncnLFxuICAgICdoJyxcbiAgICAnbWF4aCcsXG4gICAgJ21pbmgnLFxuICAgICdiZycsXG4gICAgJ2MnLFxuICAgICdib3JkZXJDb2xvcicsXG4gICAgJ2JvcmRlcldpZHRoJyxcbiAgICAnYm9yZGVyU3R5bGUnLFxuICAgICdib3JkZXInLFxuICAgICdib3JkZXJUb3AnLFxuICAgICdib3JkZXJSaWdodCcsXG4gICAgJ2JvcmRlckJvdHRvbScsXG4gICAgJ2JvcmRlckxlZnQnLFxuICAgICdib3JkZXJSYWRpdXMnLFxuICAgICdib3JkZXJUb3BSaWdodFJhZGl1cycsXG4gICAgJ2JvcmRlclRvcExlZnRSYWRpdXMnLFxuICAgICdib3JkZXJCb3R0b21SaWdodFJhZGl1cycsXG4gICAgJ2JvcmRlckJvdHRvbUxlZnRSYWRpdXMnLFxuICAgICdib3JkZXJUb3BSYWRpdXMnLFxuICAgICdib3JkZXJSaWdodFJhZGl1cycsXG4gICAgJ2JvcmRlckJvdHRvbVJhZGl1cycsXG4gICAgJ2JvcmRlckxlZnRSYWRpdXMnLFxuICAgICdsaW5lSGVpZ2h0JyxcbiAgICAnZm9udFdlaWdodCcsXG4gICAgJ2Z3JyxcbiAgICAnZm9udFNpemUnLFxuICAgICdmcycsXG4gICAgJ2ZvbnRGYW1pbHknLFxuICAgICdvcGFjaXR5JyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnbGF5b3V0QmxlZWQnLFxuICAgICdzdWJncmlkJyxcbiAgXSk7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wczogTWFwPHN0cmluZywgYW55Pikge1xuICAgIHN1cGVyLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBDaGVjayBpZiBhbnkgY29udGVudCBwcm9wIGhhcyBjaGFuZ2VkIHRvIGRldGVybWluZSBpZiB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaW5zdGFuY2Ugc3R5bGVzXG4gICAgbGV0IHNob3VsZFVwZGF0ZVN0eWxlcyA9IGZhbHNlO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGNoYW5nZWRQcm9wcy5rZXlzKCkpIHtcbiAgICAgIGlmIChNdGVDb250ZW50QmFzZS5jb250ZW50UHJvcHMuaGFzKGtleSkpIHtcbiAgICAgICAgc2hvdWxkVXBkYXRlU3R5bGVzID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFVwZGF0ZVN0eWxlcykge1xuICAgICAgLy8gRG91YmxlIHRoZSBgOmhvc3RgIHNlbGVjdG9yIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5IGJleW9uZCBtb3N0IGNvbXBvbmVudCBsZXZlbCBzdHlsZXMgYnkgZGVmYXVsdFxuICAgICAgdGhpcy5zZXRJbnN0YW5jZVN0eWxlKCdjb250ZW50LWJhc2UnLCBzZWxlY3RvckZhY3RvcnkodGhpcy5jb250ZW50U3R5bGVTZWxlY3RvclJvb3QpLCB7XG4gICAgICAgIC8vIFNwYWNpbmdcbiAgICAgICAgbTogdGhpcy5tLFxuICAgICAgICBteDogdGhpcy5teCxcbiAgICAgICAgbXk6IHRoaXMubXksXG4gICAgICAgIG10OiB0aGlzLm10LFxuICAgICAgICBtcjogdGhpcy5tcixcbiAgICAgICAgbWI6IHRoaXMubWIsXG4gICAgICAgIG1sOiB0aGlzLm1sLFxuICAgICAgICBwOiB0aGlzLnAsXG4gICAgICAgIHB4OiB0aGlzLnB4LFxuICAgICAgICBweTogdGhpcy5weSxcbiAgICAgICAgcHQ6IHRoaXMucHQsXG4gICAgICAgIHByOiB0aGlzLnByLFxuICAgICAgICBwYjogdGhpcy5wYixcbiAgICAgICAgcGw6IHRoaXMucGwsXG4gICAgICAgIC8vIFBvc2l0aW9uaW5nXG4gICAgICAgIGQ6IHRoaXMuc3ViZ3JpZCA/ICdncmlkJyA6IHRoaXMuZCxcbiAgICAgICAgYWxpZ25JdGVtczogdGhpcy5hID8/IHRoaXMuYWxpZ25JdGVtcyxcbiAgICAgICAgYWxpZ25TZWxmOiB0aGlzLmFsaWduU2VsZixcbiAgICAgICAgYWxpZ25Db250ZW50OiB0aGlzLmFsaWduQ29udGVudCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IHRoaXMuaiA/PyB0aGlzLmp1c3RpZnlDb250ZW50LFxuICAgICAgICBqdXN0aWZ5SXRlbXM6IHRoaXMuanVzdGlmeUl0ZW1zLFxuICAgICAgICBqdXN0aWZ5U2VsZjogdGhpcy5qdXN0aWZ5U2VsZixcbiAgICAgICAgZmxleDogdGhpcy5mbGV4LFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiB0aGlzLmRpcmVjdGlvbiA/PyB0aGlzLmZsZXhEaXJlY3Rpb24sXG4gICAgICAgIGZsZXhCYXNpczogdGhpcy5iYXNpcyA/PyB0aGlzLmZsZXhCYXNpcyxcbiAgICAgICAgZmxleFNocmluazogdGhpcy5zaHJpbmsgPz8gdGhpcy5mbGV4U2hyaW5rLFxuICAgICAgICBmbGV4R3JvdzogdGhpcy5ncm93ID8/IHRoaXMuZmxleEdyb3csXG4gICAgICAgIGZsZXhXcmFwOiB0aGlzLndyYXAgPz8gdGhpcy5mbGV4V3JhcCxcbiAgICAgICAgb3JkZXI6IHRoaXMub3JkZXIsXG4gICAgICAgIGdhcDogdGhpcy5nYXAsXG4gICAgICAgIGNvbHVtbkdhcDogdGhpcy5jb2x1bW5HYXAsXG4gICAgICAgIHJvd0dhcDogdGhpcy5yb3dHYXAsXG4gICAgICAgIGdyaWRDb2x1bW46IHRoaXMubGF5b3V0QmxlZWQgPyB0aGlzLmxheW91dEJsZWVkIDogdGhpcy5ncmlkQ29sdW1uLFxuICAgICAgICBncmlkUm93OiB0aGlzLmdyaWRSb3csXG4gICAgICAgIGdyaWRBdXRvRmxvdzogdGhpcy5ncmlkQXV0b0Zsb3csXG4gICAgICAgIGdyaWRBdXRvQ29sdW1uczogdGhpcy5ncmlkQXV0b0NvbHVtbnMsXG4gICAgICAgIGdyaWRBdXRvUm93czogdGhpcy5ncmlkQXV0b1Jvd3MsXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHRoaXMuc3ViZ3JpZCA/ICdzdWJncmlkJyA6IHRoaXMuZ3JpZFRlbXBsYXRlQ29sdW1ucyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogdGhpcy5ncmlkVGVtcGxhdGVSb3dzLFxuICAgICAgICBncmlkVGVtcGxhdGVBcmVhczogdGhpcy5ncmlkVGVtcGxhdGVBcmVhcyxcbiAgICAgICAgZ3JpZEFyZWE6IHRoaXMuZ3JpZEFyZWEsXG4gICAgICAgIC8vIFNpemluZ1xuICAgICAgICB3OiB0aGlzLncsXG4gICAgICAgIG1heHc6IHRoaXMubWF4dyxcbiAgICAgICAgbWludzogdGhpcy5taW53LFxuICAgICAgICBoOiB0aGlzLmgsXG4gICAgICAgIG1heGg6IHRoaXMubWF4aCxcbiAgICAgICAgbWluaDogdGhpcy5taW5oLFxuICAgICAgICAvLyBDb2xvcnNcbiAgICAgICAgYmc6IHRoaXMuYmcsXG4gICAgICAgIGM6IHRoaXMuYyxcbiAgICAgICAgLy8gQm9yZGVyc1xuICAgICAgICBib3JkZXJDb2xvcjogdGhpcy5ib3JkZXJDb2xvcixcbiAgICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuYm9yZGVyV2lkdGgsXG4gICAgICAgIGJvcmRlclN0eWxlOiB0aGlzLmJvcmRlclN0eWxlLFxuICAgICAgICBib3JkZXI6IHRoaXMuYm9yZGVyXG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm9yZGVyVG9wOiB0aGlzLmJvcmRlclRvcFxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlclJpZ2h0OiB0aGlzLmJvcmRlclJpZ2h0XG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm9yZGVyTGVmdDogdGhpcy5ib3JkZXJMZWZ0XG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm9yZGVyQm90dG9tOiB0aGlzLmJvcmRlckJvdHRvbVxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIC8vIEJvcmRlciBSYWRpdXNcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLmJvcmRlclJhZGl1cyxcbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJUb3BSaWdodFJhZGl1cyA/PyB0aGlzLmJvcmRlclRvcFJhZGl1cyA/PyB0aGlzLmJvcmRlclJpZ2h0UmFkaXVzLFxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOlxuICAgICAgICAgIHRoaXMuYm9yZGVyVG9wTGVmdFJhZGl1cyA/PyB0aGlzLmJvcmRlclRvcFJhZGl1cyA/PyB0aGlzLmJvcmRlckxlZnRSYWRpdXMsXG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOlxuICAgICAgICAgIHRoaXMuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPz8gdGhpcy5ib3JkZXJCb3R0b21SYWRpdXMgPz8gdGhpcy5ib3JkZXJSaWdodFJhZGl1cyxcbiAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPz8gdGhpcy5ib3JkZXJCb3R0b21SYWRpdXMgPz8gdGhpcy5ib3JkZXJMZWZ0UmFkaXVzLFxuICAgICAgICAvLyBGb250c1xuICAgICAgICBsaW5lSGVpZ2h0OiB0aGlzLmxpbmVIZWlnaHQsXG4gICAgICAgIGZvbnRXZWlnaHQ6IHRoaXMuZncgPz8gdGhpcy5mb250V2VpZ2h0LFxuICAgICAgICBmb250U2l6ZTogdGhpcy5mcyA/PyB0aGlzLmZvbnRTaXplLFxuICAgICAgICBmb250RmFtaWx5OiB0aGlzLmZvbnRGYW1pbHksXG4gICAgICAgIC8vIE9wYWNpdHlcbiAgICAgICAgb3BhY2l0eTogdGhpcy5vcGFjaXR5LFxuICAgICAgICAvLyBFbGV2YXRpb25cbiAgICAgICAgZWxldmF0aW9uOiB0aGlzLmVsZXZhdGlvbixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IGRlZmF1bHRDb252ZXJ0ZXIgfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgY29uc3QgUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyID0ge1xuICBmcm9tQXR0cmlidXRlOiAodmFsdWUsIHR5cGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHZhbHVlPy5bMF0gPT09ICd7Jykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdENvbnZlcnRlci5mcm9tQXR0cmlidXRlKHZhbHVlLCBPYmplY3QpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdENvbnZlcnRlci5mcm9tQXR0cmlidXRlKHZhbHVlLCB0eXBlKTtcbiAgfSxcbiAgdG9BdHRyaWJ1dGU6ICh2YWx1ZSwgdHlwZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdENvbnZlcnRlci50b0F0dHJpYnV0ZSh2YWx1ZSwgT2JqZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIudG9BdHRyaWJ1dGUodmFsdWUsIHR5cGUpO1xuICB9LFxufTtcbiIsICJpbXBvcnQgeyBEaXJlY3RpdmVSZXN1bHQgfSBmcm9tICdsaXQvZGlyZWN0aXZlLmpzJztcbmltcG9ydCB7IHVuc2FmZVNWRywgVW5zYWZlU1ZHRGlyZWN0aXZlIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvdW5zYWZlLXN2Zy5qcyc7XG5cbmV4cG9ydCBjb25zdCBoZWJMb2dvU3ZnQ29udGVudHM6IERpcmVjdGl2ZVJlc3VsdDx0eXBlb2YgVW5zYWZlU1ZHRGlyZWN0aXZlPiA9IHVuc2FmZVNWRyhcbiAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgaWQ9XCJMYXllcl8xXCIgeD1cIjBcIiB5PVwiMFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDUzNi4yNyAxODYuMjRcIj48c3R5bGU+LnN0MHtmaWxsOiNlMTI1MWJ9LnN0MXtmaWxsOiNmZmZ9PC9zdHlsZT48ZyBpZD1cIl94MzFfLUhFQl9NQUlOX0xPR09fMDAwMDAwOTYwNDM0MDQyMDY4NjE4ODA4NzAwMDAwMDQ4MTMyNDA5Mzg5NDY4NTUzNTVfXCI+PHBhdGggZD1cIk05My4xMiAxODYuMjRDNDEuNjkgMTg2LjI0IDAgMTQ0LjU1IDAgOTMuMTJTNDEuNjkgMCA5My4xMiAwaDM1MC4wM2M1MS40MyAwIDkzLjEyIDQxLjY5IDkzLjEyIDkzLjEycy00MS42OSA5My4xMi05My4xMiA5My4xMkg5My4xMnpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTkzLjEyIDE3NC4xOWMtNDQuNzYgMC04MS4wNS0zNi4yOS04MS4wNS04MS4wNXMzNi4yOS04MS4wNSA4MS4wNS04MS4wNWgzNTAuMDNjNDQuNzYgMCA4MS4wNSAzNi4yOSA4MS4wNSA4MS4wNXMtMzYuMjkgODEuMDUtODEuMDUgODEuMDVIOTMuMTJ6XCIgY2xhc3M9XCJzdDFcIi8+PHBhdGggZD1cIm00NDQuOTQgMjQuMTEtMzUzLjY0LjAyYy0zNy4wNyAwLTY3LjIgMzAuOTUtNjcuMTYgNjkuMDcgMCAzNy45MyAzMC4xNiA2OC44OCA2Ny4xNiA2OC44OGwzNTMuNjMtLjA3YzM3LjEtLjAzIDY3LjE1LTMwLjg5IDY3LjItNjguODUtLjA0LTM4LjItMzAuMDktNjkuMDUtNjcuMTktNjkuMDV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk0yMjQuMjEgMTMyLjIzaDg4LjFsLjc2LTEyLjk4aC01Ni4xOHYtMTQuODRoNDQuODFWODkuMzNoLTQ0LjgxVjczLjI1bDU4LjkyLS4wMSAxLjE1LTE5LjI5aC05Ny40ek0xMzIuNDYgNTMuOTV2MzUuMzhIMTA4LjZWNTMuOTVINzEuMjdsNC42NSA3OC4yOGgzMi42OHYtMjcuODJoMjMuODZ2MjcuODJoMzIuNjhsNC42NS03OC4yOHpNNDQ4LjUyIDk3LjAyYzkuOS0yLjgzIDE2LjQ5LTguNTkgMTYuNDktMjAuNjcuMDMtMTMuODItMTEuMDYtMjIuNC0yNS4yOS0yMi40aC03My4yOGw0LjY1IDc4LjI5aDY0LjA2YzI3Ljk4IDAgMjYuMzktMTguOCAyNi4zOS0xOC44IDAtNy45Ni01LjMzLTE0LjYxLTEzLjAyLTE2LjQyem0tMzEuMDIgMjIuMjJoLTEzLjcxdi0xNC44M2gxMy4yMmM3LjIzIDAgMTEuMDkgMi4zMSAxMS4wOSA3LjQ4LjAxIDQuOTQtMy40OSA3LjM1LTEwLjYgNy4zNXptMS4wNi0yOS45MWgtMTQuNzdWNzMuMjVoMTQuMjVjNy44NSAwIDEyLjAzIDIuNSAxMi4wMyA4LjExIDAgNS4zNS0zLjc5IDcuOTctMTEuNTEgNy45N3pNMTgyLjc2IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4ek0zMjkuNjQgODkuMzNsLjkgMTUuMDhoMjIuMDNsLjktMTUuMDh6XCIgY2xhc3M9XCJzdDFcIi8+PHBhdGggZD1cIk01MzAuMzQgMTcyLjc3YzAtMi40Ni0xLjQ2LTMuNTQtNC40LTMuNTRoLTQuNzR2MTIuNDRoMS44OHYtNS4zOWgyLjE3bDMuMjggNS4zOWgyLjExbC0zLjU0LTUuNDhjMS44NC0uMjIgMy4yNC0xLjE5IDMuMjQtMy40MnptLTcuMjUgMS45MnYtMy44NmgyLjU3YzEuMzEgMCAyLjcxLjI5IDIuNzEgMS44MyAwIDEuOTItMS40MyAyLjAzLTMuMDMgMi4wM2gtMi4yNXpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTUyNS4zNyAxNjQuNjdjLTUuOTMgMC0xMC45NiA0LjU3LTEwLjk2IDEwLjc2IDAgNi4yNCA1LjAyIDEwLjgxIDEwLjk2IDEwLjgxIDUuODggMCAxMC45LTQuNTcgMTAuOS0xMC44MSAwLTYuMi01LjAyLTEwLjc2LTEwLjktMTAuNzZ6bTAgMTkuNzhjLTQuOTMgMC04Ljc5LTMuODMtOC43OS05LjAyIDAtNS4xMSAzLjg1LTguOTYgOC43OS04Ljk2IDQuODggMCA4LjczIDMuODUgOC43MyA4Ljk2IDAgNS4xOS0zLjg1IDkuMDItOC43MyA5LjAyelwiIGNsYXNzPVwic3QwXCIvPjwvZz48L3N2Zz5gXG4pO1xuXG5leHBvcnQgY29uc3QgaGViTG9nb1doaXRlQ29weXJpZ2h0U3ZnQ29udGVudHM6IERpcmVjdGl2ZVJlc3VsdDx0eXBlb2YgVW5zYWZlU1ZHRGlyZWN0aXZlPiA9XG4gIHVuc2FmZVNWRyhcbiAgICBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiBpZD1cIkxheWVyXzFcIiB4PVwiMFwiIHk9XCIwXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgNTM2LjI3IDE4Ni4yNFwiPjxzdHlsZT4uc3Qwe2ZpbGw6I2UxMjUxYn0uc3Qxe2ZpbGw6I2ZmZn08L3N0eWxlPjxnIGlkPVwiX3gzMV8tSEVCX01BSU5fTE9HT18wMDAwMDA5NjA0MzQwNDIwNjg2MTg4MDg3MDAwMDAwNDgxMzI0MDkzODk0Njg1NTM1NV9cIj48cGF0aCBkPVwiTTkzLjEyIDE4Ni4yNEM0MS42OSAxODYuMjQgMCAxNDQuNTUgMCA5My4xMlM0MS42OSAwIDkzLjEyIDBoMzUwLjAzYzUxLjQzIDAgOTMuMTIgNDEuNjkgOTMuMTIgOTMuMTJzLTQxLjY5IDkzLjEyLTkzLjEyIDkzLjEySDkzLjEyelwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNOTMuMTIgMTc0LjE5Yy00NC43NiAwLTgxLjA1LTM2LjI5LTgxLjA1LTgxLjA1czM2LjI5LTgxLjA1IDgxLjA1LTgxLjA1aDM1MC4wM2M0NC43NiAwIDgxLjA1IDM2LjI5IDgxLjA1IDgxLjA1cy0zNi4yOSA4MS4wNS04MS4wNSA4MS4wNUg5My4xMnpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwibTQ0NC45NCAyNC4xMS0zNTMuNjQuMDJjLTM3LjA3IDAtNjcuMiAzMC45NS02Ny4xNiA2OS4wNyAwIDM3LjkzIDMwLjE2IDY4Ljg4IDY3LjE2IDY4Ljg4bDM1My42My0uMDdjMzcuMS0uMDMgNjcuMTUtMzAuODkgNjcuMi02OC44NS0uMDQtMzguMi0zMC4wOS02OS4wNS02Ny4xOS02OS4wNXpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTIyNC4yMSAxMzIuMjNoODguMWwuNzYtMTIuOThoLTU2LjE4di0xNC44NGg0NC44MVY4OS4zM2gtNDQuODFWNzMuMjVsNTguOTItLjAxIDEuMTUtMTkuMjloLTk3LjR6TTEzMi40NiA1My45NXYzNS4zOEgxMDguNlY1My45NUg3MS4yN2w0LjY1IDc4LjI4aDMyLjY4di0yNy44MmgyMy44NnYyNy44MmgzMi42OGw0LjY1LTc4LjI4ek00NDguNTIgOTcuMDJjOS45LTIuODMgMTYuNDktOC41OSAxNi40OS0yMC42Ny4wMy0xMy44Mi0xMS4wNi0yMi40LTI1LjI5LTIyLjRoLTczLjI4bDQuNjUgNzguMjloNjQuMDZjMjcuOTggMCAyNi4zOS0xOC44IDI2LjM5LTE4LjggMC03Ljk2LTUuMzMtMTQuNjEtMTMuMDItMTYuNDJ6bS0zMS4wMiAyMi4yMmgtMTMuNzF2LTE0LjgzaDEzLjIyYzcuMjMgMCAxMS4wOSAyLjMxIDExLjA5IDcuNDguMDEgNC45NC0zLjQ5IDcuMzUtMTAuNiA3LjM1em0xLjA2LTI5LjkxaC0xNC43N1Y3My4yNWgxNC4yNWM3Ljg1IDAgMTIuMDMgMi41IDEyLjAzIDguMTEgMCA1LjM1LTMuNzkgNy45Ny0xMS41MSA3Ljk3ek0xODIuNzYgODkuMzNsLjkgMTUuMDhoMjIuMDNsLjktMTUuMDh6TTMyOS42NCA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpNNTI4LjM0IDE3MC43N2MwLTIuNDYtMS40Ni0zLjU0LTQuNC0zLjU0aC00Ljc0djEyLjQ0aDEuODh2LTUuMzloMi4xN2wzLjI4IDUuMzloMi4xMWwtMy41NC01LjQ4YzEuODQtLjIyIDMuMjQtMS4xOSAzLjI0LTMuNDJ6bS03LjI1IDEuOTJ2LTMuODZoMi41N2MxLjMxIDAgMi43MS4yOSAyLjcxIDEuODMgMCAxLjkyLTEuNDMgMi4wMy0zLjAzIDIuMDNoLTIuMjV6XCIgY2xhc3M9XCJzdDFcIi8+PHBhdGggZD1cIk01MjMuMzcgMTYyLjY3Yy01LjkzIDAtMTAuOTYgNC41Ny0xMC45NiAxMC43NiAwIDYuMjQgNS4wMiAxMC44MSAxMC45NiAxMC44MSA1Ljg4IDAgMTAuOS00LjU3IDEwLjktMTAuODEgMC02LjItNS4wMi0xMC43Ni0xMC45LTEwLjc2em0wIDE5Ljc4Yy00LjkzIDAtOC43OS0zLjgzLTguNzktOS4wMiAwLTUuMTEgMy44NS04Ljk2IDguNzktOC45NiA0Ljg4IDAgOC43MyAzLjg1IDguNzMgOC45NiAwIDUuMTktMy44NSA5LjAyLTguNzMgOS4wMnpcIiBjbGFzcz1cInN0MVwiLz48L2c+PC9zdmc+YFxuICApO1xuXG5leHBvcnQgY29uc3QgaGViTG9nb0ludmVyc2VTdmdDb250ZW50czogRGlyZWN0aXZlUmVzdWx0PHR5cGVvZiBVbnNhZmVTVkdEaXJlY3RpdmU+ID0gdW5zYWZlU1ZHKFxuICBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiBpZD1cIkxheWVyXzFcIiB4PVwiMFwiIHk9XCIwXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgNTM2LjI3IDE4Ni4yNFwiPjxzdHlsZT4uc3Qwe2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGQ9XCJNNDQzLjE1IDBIOTMuMTJDNDEuNjkgMCAwIDQxLjY5IDAgOTMuMTJjMCA1MS40MyA0MS42OSA5My4xMiA5My4xMiA5My4xMmgzNTAuMDNjNTEuNDMgMCA5My4xMi00MS42OSA5My4xMi05My4xMkM1MzYuMjcgNDEuNjkgNDk0LjU4IDAgNDQzLjE1IDB6bTAgMTc0LjE5SDkzLjEyYy00NC43NiAwLTgxLjA1LTM2LjI5LTgxLjA1LTgxLjA1czM2LjI5LTgxLjA1IDgxLjA1LTgxLjA1aDM1MC4wM2M0NC43NiAwIDgxLjA1IDM2LjI5IDgxLjA1IDgxLjA1LjAxIDQ0Ljc2LTM2LjI4IDgxLjA1LTgxLjA1IDgxLjA1em0tMTMuMDgtOTIuODNjMCA1LjM2LTMuNzkgNy45OC0xMS41MSA3Ljk4aC0xNC43N1Y3My4yNWgxNC4yNWM3Ljg0IDAgMTIuMDMgMi41IDEyLjAzIDguMTF6bS0xLjk2IDMwLjUzYzAgNC45NC0zLjUgNy4zNi0xMC42MSA3LjM2aC0xMy43MXYtMTQuODNoMTMuMjJjNy4yNC0uMDEgMTEuMSAyLjMgMTEuMSA3LjQ3em0xNi44My04Ny43OC0zNTMuNjQuMDJjLTM3LjA3IDAtNjcuMiAzMC45NS02Ny4xNiA2OS4wNyAwIDM3LjkyIDMwLjE2IDY4Ljg4IDY3LjE2IDY4Ljg4bDM1My42My0uMDdjMzcuMS0uMDMgNjcuMTUtMzAuODkgNjcuMi02OC44NS0uMDQtMzguMi0zMC4wOS02OS4wNS02Ny4xOS02OS4wNXptLTI3OS44IDEwOC4xMmgtMzIuNjh2LTI3LjgySDEwOC42djI3LjgySDc1LjkybC00LjY1LTc4LjI4aDM3LjMzdjM1LjM4aDIzLjg2VjUzLjk1aDM3LjMzbC00LjY1IDc4LjI4em00MC41NS0yNy44MmgtMjIuMDRsLS45LTE1LjA4aDIzLjgzbC0uODkgMTUuMDh6bTExMC4xMi0zMS4xNy01OC45Mi4wMXYxNi4wOGg0NC44MXYxNS4wOGgtNDQuODF2MTQuODNoNTYuMThsLS43NiAxMi45OWgtODguMWwtNC42NS03OC4yOGg5Ny40bC0xLjE1IDE5LjI5em0zNi43NiAzMS4xN2gtMjIuMDRsLS45LTE1LjA4aDIzLjgzbC0uODkgMTUuMDh6bTEwOC45NyA5LjAzczEuNTkgMTguOC0yNi4zOSAxOC44aC02NC4wNmwtNC42NS03OC4yOWg3My4yOGMxNC4yMyAwIDI1LjMxIDguNTggMjUuMjkgMjIuNCAwIDEyLjA4LTYuNTkgMTcuODUtMTYuNDkgMjAuNjcgNy42OSAxLjgxIDEzLjAyIDguNDYgMTMuMDIgMTYuNDJ6TTUzMC4zNCAxNzIuNzdjMC0yLjQ2LTEuNDYtMy41NC00LjQtMy41NGgtNC43NHYxMi40NGgxLjg4di01LjM5aDIuMTdsMy4yOCA1LjM5aDIuMTFsLTMuNTQtNS40OGMxLjg0LS4yMiAzLjI0LTEuMTkgMy4yNC0zLjQyem0tNy4yNSAxLjkydi0zLjg2aDIuNTdjMS4zMSAwIDIuNzEuMjkgMi43MSAxLjgzIDAgMS45Mi0xLjQzIDIuMDMtMy4wMyAyLjAzaC0yLjI1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNNTI1LjM3IDE2NC42N2MtNS45MyAwLTEwLjk2IDQuNTctMTAuOTYgMTAuNzYgMCA2LjI0IDUuMDIgMTAuODEgMTAuOTYgMTAuODEgNS44OCAwIDEwLjktNC41NyAxMC45LTEwLjgxIDAtNi4yLTUuMDItMTAuNzYtMTAuOS0xMC43NnptMCAxOS43OGMtNC45MyAwLTguNzktMy44My04Ljc5LTkuMDIgMC01LjExIDMuODUtOC45NiA4Ljc5LTguOTYgNC44OCAwIDguNzMgMy44NSA4LjczIDguOTYgMCA1LjE5LTMuODUgOS4wMi04LjczIDkuMDJ6XCIgY2xhc3M9XCJzdDBcIi8+PC9zdmc+YFxuKTtcbiIsICJpbXBvcnQgdHlwZSB7IFJlYWN0aXZlQ29udHJvbGxlciwgUmVhY3RpdmVDb250cm9sbGVySG9zdCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBTaWduYWwsIGNvbXB1dGVkLCBpc1Nzciwgc2lnbmFsIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IGludGVyZmFjZSBTbG90Q29udHJvbGxlck9wdGlvbnMge1xuICAvKiogTmFtZXMgb2Ygc2xvdHMgdGhhdCBzaG91bGQgdHJpZ2dlciBhIGNvbXBvbmVudCB1cGRhdGUgaWYgY2hhbmdlZCAqL1xuICB1cGRhdGVPbkNoYW5nZT86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY2xhc3MgU2xvdENvbnRyb2xsZXIgaW1wbGVtZW50cyBSZWFjdGl2ZUNvbnRyb2xsZXIge1xuICBwdWJsaWMgc2xvdENoYW5nZSA9IHNpZ25hbDxTZXQ8c3RyaW5nPj4obnVsbCk7XG4gIHB1YmxpYyBvbkNvbm5lY3RlZCA9IHNpZ25hbChmYWxzZSk7XG4gIHB1YmxpYyBjb25uZWN0ZWRDb21wbGV0ZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc3VicyA9IFtdO1xuICBwcml2YXRlIHVwZGF0ZVRyaWdnZXJTbG90cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBob3N0OiBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0ICYgRWxlbWVudCxcbiAgICBwdWJsaWMgb3B0aW9uczogU2xvdENvbnRyb2xsZXJPcHRpb25zID0gbnVsbFxuICApIHtcbiAgICB0aGlzLmhvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZU9uQ2hhbmdlKG9wdGlvbnM/LnVwZGF0ZU9uQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyB3aGVuIG9uZSBvZiB0aGUgc3BlY2lmaWVkIHNsb3RzIGhhcyBjaGFuZ2VkIGFuZCBhZnRlciB0aGUgZmlyc3RVcGRhdGUgYWZ0ZXIgaG9zdENvbm5lY3RlZCAqL1xuICBwdWJsaWMgd2F0Y2hTbG90cyhzbG90czogc3RyaW5nW10gPSBbXSwgeyB1cGRhdGVPbkNvbm5lY3RlZCB9ID0geyB1cGRhdGVPbkNvbm5lY3RlZDogdHJ1ZSB9KSB7XG4gICAgY29uc3QgcmV0dXJuU2lnbmFsID0gc2lnbmFsPFNldDxzdHJpbmc+PigpO1xuICAgIHRoaXMuc3Vicy5wdXNoKFxuICAgICAgY29tcHV0ZWQoXG4gICAgICAgIFt0aGlzLm9uQ29ubmVjdGVkLCB0aGlzLnNsb3RDaGFuZ2VdLFxuICAgICAgICAoW2Nvbm5lY3RlZCwgY2hhbmdlc106IFtib29sZWFuLCBTZXQ8c3RyaW5nPl0sIHNldCkgPT4ge1xuICAgICAgICAgIGlmICh1cGRhdGVPbkNvbm5lY3RlZCAmJiBjb25uZWN0ZWQgJiYgIXRoaXMuY29ubmVjdGVkQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGVkQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgc2V0KG5ldyBTZXQoc2xvdHMpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2hhbmdlcyAmJlxuICAgICAgICAgICAgQXJyYXkuZnJvbShjaGFuZ2VzLmtleXMoKSkuc29tZSgoa2V5KSA9PiBzbG90cy5sZW5ndGggPT09IDAgfHwgc2xvdHMuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNldChjaGFuZ2VzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICkuc3Vic2NyaWJlKChjaGFuZ2VzOiBTZXQ8c3RyaW5nPikgPT4ge1xuICAgICAgICBpZiAoY2hhbmdlcykge1xuICAgICAgICAgIHJldHVyblNpZ25hbC5zZXQoY2hhbmdlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gcmV0dXJuU2lnbmFsIGFzIFNpZ25hbDxTZXQ8c3RyaW5nPj47XG4gIH1cblxuICBwdWJsaWMgY2hlY2soc2xvdE5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBzbG90TmFtZSA9PT0gJ2RlZmF1bHQnID8gdGhpcy5oYXNEZWZhdWx0U2xvdCgpIDogdGhpcy5oYXNOYW1lZFNsb3Qoc2xvdE5hbWUpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZU9uQ2hhbmdlKHNsb3RzOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNsb3RzKSkge1xuICAgICAgc2xvdHMuZm9yRWFjaCgoc2xvdCkgPT4gdGhpcy51cGRhdGVUcmlnZ2VyU2xvdHMuYWRkKHNsb3QpKTtcbiAgICB9IGVsc2UgaWYgKHNsb3RzKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRyaWdnZXJTbG90cy5hZGQoc2xvdHMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFzRGVmYXVsdFNsb3QoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmhvc3QuY2hpbGROb2Rlc10uc29tZSgobm9kZSkgPT4ge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IG5vZGUuVEVYVF9OT0RFICYmIG5vZGUudGV4dENvbnRlbnQ/LnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBub2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBjb25zdCBlbCA9IG5vZGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gSWdub3JlIHZpc3VhbGx5IGhpZGRlbiBlbGVtZW50cyBzaW5jZSB0aGV5IGFyZW4ndCByZW5kZXJlZFxuICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ210ZS12aXN1YWxseS1oaWRkZW4nKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgZG9lc24ndCBoYXZlIGEgc2xvdCBhdHRyaWJ1dGUsIGl0J3MgcGFydCBvZiB0aGUgZGVmYXVsdCBzbG90XG4gICAgICAgIGlmICghZWwuaGFzQXR0cmlidXRlKCdzbG90JykpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhc05hbWVkU2xvdChuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QucXVlcnlTZWxlY3RvcihgOnNjb3BlID4gW3Nsb3Q9XCIke25hbWV9XCJdYCkgIT09IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNsb3RDaGFuZ2UgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2xvdCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MU2xvdEVsZW1lbnQ7XG5cbiAgICAvLyBTZXR1cCBldmVudCBtYXBcbiAgICBjb25zdCBldmVudFNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIC8vIEFkZCBkdXBsaWNhdGUgbWFwcGluZyBmb3Igc2ltcGxpZmllZCBkZWZhdWx0IG5hbWVcbiAgICBpZiAoc2xvdC5uYW1lID09PSAnW2RlZmF1bHRdJyB8fCBzbG90Lm5hbWUgPT09ICcnKSB7XG4gICAgICBldmVudFNldC5hZGQoJ2RlZmF1bHQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnRTZXQuYWRkKHNsb3QubmFtZSk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBzbG90IGNoYW5nZSByZWFjdGl2ZSBldmVudFxuICAgIHRoaXMuc2xvdENoYW5nZS5zZXQoZXZlbnRTZXQpO1xuXG4gICAgLy8gQXV0b21hdGljYWxseSByZXF1ZXN0IGEgY29tcG9uZW50IHVwZGF0ZSBhcyBjb25maWd1cmF0aW9uIGRpY3RhdGVzXG4gICAgaWYgKFxuICAgICAgKHRoaXMudXBkYXRlVHJpZ2dlclNsb3RzLmhhcygnZGVmYXVsdCcpICYmICFzbG90Lm5hbWUpIHx8XG4gICAgICAoc2xvdC5uYW1lICYmIHRoaXMudXBkYXRlVHJpZ2dlclNsb3RzLmhhcyhzbG90Lm5hbWUpKVxuICAgICkge1xuICAgICAgdGhpcy5ob3N0LnJlcXVlc3RVcGRhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgaG9zdENvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmhvc3Quc2hhZG93Um9vdD8uYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsIHRoaXMuaGFuZGxlU2xvdENoYW5nZSk7XG5cbiAgICAvLyBXYWl0IHVudGlsIGZpcnN0IHVwZGF0ZSBhZnRlciBjb25uZWN0ZWRcbiAgICB0aGlzLmhvc3QudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLm9uQ29ubmVjdGVkLnNldCh0cnVlKTtcbiAgICAgIC8vIFRPRE8ocmVlY2UpOiByZWNvbnNpZGVyIHdoZW4gYSBzb2x1dGlvbiBleGlzdHMgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8xNDM0XG4gICAgICAvLyBJZiBhZnRlciB0aGUgZmlyc3RVcGRhdGUgd2UncmUgd2F0Y2hpbmcgc2xvdHMgcmVxdWVzdCBhbm90aGVyIGluIGNhc2Ugc3NyLXNsb3RzIHdhcyBub3QgcHJvcGVybHkgc2V0IGJ5IHRoZSB1c2VyXG4gICAgICBpZiAodGhpcy51cGRhdGVUcmlnZ2VyU2xvdHMuc2l6ZSA+IDApIHtcbiAgICAgICAgdGhpcy5ob3N0LnJlcXVlc3RVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhvc3REaXNjb25uZWN0ZWQoKSB7XG4gICAgdGhpcy5ob3N0LnNoYWRvd1Jvb3Q/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCB0aGlzLmhhbmRsZVNsb3RDaGFuZ2UpO1xuICAgIHRoaXMuc3Vicy5mb3JFYWNoKCh1bnN1YikgPT4gdW5zdWIoKSk7XG4gICAgdGhpcy5zdWJzID0gW107XG4gICAgdGhpcy5jb25uZWN0ZWRDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMub25Db25uZWN0ZWQuc2V0KGZhbHNlKTtcbiAgfVxufVxuXG4vKipcbiAqIEdpdmVuIGEgc2xvdCwgdGhpcyBmdW5jdGlvbiBpdGVyYXRlcyBvdmVyIGFsbCBvZiBpdHMgYXNzaWduZWQgZWxlbWVudCBhbmQgdGV4dCBub2RlcyBhbmQgcmV0dXJucyB0aGUgY29uY2F0ZW5hdGVkXG4gKiBIVE1MIGFzIGEgc3RyaW5nLiBUaGlzIGlzIHVzZWZ1bCBiZWNhdXNlIHdlIGNhbid0IHVzZSBzbG90LmlubmVySFRNTCBhcyBhbiBhbHRlcm5hdGl2ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElubmVySFRNTChzbG90OiBIVE1MU2xvdEVsZW1lbnQpOiBzdHJpbmcge1xuICBjb25zdCBub2RlcyA9IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gIGxldCBodG1sID0gJyc7XG5cbiAgWy4uLm5vZGVzXS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICBodG1sICs9IChub2RlIGFzIEhUTUxFbGVtZW50KS5vdXRlckhUTUw7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICBodG1sICs9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaHRtbDtcbn1cblxuLyoqXG4gKiBHaXZlbiBhIHNsb3QsIHRoaXMgZnVuY3Rpb24gaXRlcmF0ZXMgb3ZlciBhbGwgb2YgaXRzIGFzc2lnbmVkIHRleHQgbm9kZXMgYW5kIHJldHVybnMgdGhlIGNvbmNhdGVuYXRlZCB0ZXh0IGFzIGFcbiAqIHN0cmluZy4gVGhpcyBpcyB1c2VmdWwgYmVjYXVzZSB3ZSBjYW4ndCB1c2Ugc2xvdC50ZXh0Q29udGVudCBhcyBhbiBhbHRlcm5hdGl2ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHRDb250ZW50KHNsb3Q6IEhUTUxTbG90RWxlbWVudCB8IHVuZGVmaW5lZCB8IG51bGwpOiBzdHJpbmcge1xuICBpZiAoIXNsb3QpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgY29uc3Qgbm9kZXMgPSBzbG90LmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pO1xuICBsZXQgdGV4dCA9ICcnO1xuXG4gIFsuLi5ub2Rlc10uZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgdGV4dCArPSBub2RlLnRleHRDb250ZW50O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbmltcG9ydCB7XG4gIGNvbmZpZyBhcyBnZXR0ZXJDb25maWcsXG4gIHNldENvbmZpZyBhcyBzZXR0ZXJDb25maWcsXG4gIE1vcnRhclRoZW1lQ29uZmlnLFxufSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQgeyBTdWJzZXQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc1Nzciwgc2lnbmFsIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IHR5cGUgTXRlVGhlbWUgPSAnZGVmYXVsdCcgfCAncHhMaWdodCcgfCAnY3hMaWdodCcgfCAncnhMaWdodCc7XG5cbmV4cG9ydCB0eXBlIE10ZUNvbG9yU2NoZW1lID0gJ2xpZ2h0JyB8ICdkYXJrJyB8ICdzeXN0ZW0nO1xuXG5jb25zdCBDQUNIRV9UT19LRVkgPSAnbXRlLnRoZW1lLmNhY2hlLXRvJztcbmNvbnN0IENPTE9SX1NDSEVNRV9LRVkgPSAnbXRlLnRoZW1lLmdsb2JhbC1jb2xvci1zY2hlbWUnO1xuXG5jbGFzcyBfTXRlVGhlbWVTZXJ2aWNlIHtcbiAgY29uZmlnID0gZ2V0dGVyQ29uZmlnO1xuXG4gIHByaXZhdGUgcm9vdE9ic2VydmVyPzogTXV0YXRpb25PYnNlcnZlcjtcbiAgcHJpdmF0ZSB0aGVtZVNpZ25hbCA9IHNpZ25hbDxNdGVUaGVtZSB8IG51bGw+KHRoaXMuZ2V0R2xvYmFsVGhlbWUoKSk7XG4gIHByaXZhdGUgY29sb3JTY2hlbWVTaWduYWwgPSBzaWduYWw8TXRlQ29sb3JTY2hlbWUgfCBudWxsPih0aGlzLmdldEdsb2JhbENvbG9yU2NoZW1lKCkgPz8gJ2xpZ2h0Jyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0Q2FjaGUoKTtcbiAgfVxuXG4gIC8qKiBDb25maWd1cmVzIHRoZSBgTXRlVGhlbWVTZXJ2aWNlYCB0byBjYWNoZSBjb2xvci1zY2hlbWUgY2hhbmdlcyB0byBgbG9jYWxTdG9yYWdlYCwgYHNlc3Npb25TdG9yYWdlYCwgb3IgbmVpdGhlci4gKi9cbiAgcHVibGljIGNhY2hlQ29sb3JTY2hlbWVUbyhtZXRob2Q6ICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJykge1xuICAgIGlmICghbWV0aG9kKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENsZWFyIGFsbCBrZXlzIGZyb20gYWxsIHN0b3JhZ2UgbG9jYXRpb25zIGlmIG5vbmVcbiAgICBpZiAobWV0aG9kID09PSAnbm9uZScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKENPTE9SX1NDSEVNRV9LRVkpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIHRyeSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oQ0FDSEVfVE9fS0VZKTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShDT0xPUl9TQ0hFTUVfS0VZKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRTY2hlbWUgPSB0aGlzLmNvbG9yU2NoZW1lU2lnbmFsLmdldCgpO1xuICAgIC8vIFNldCBjYWNoZSBtZXRob2QgaW4gc3RvcmFnZSAtIFRyeSBsb2NhbFN0b3JhZ2UgZmlyc3RcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ0FDSEVfVE9fS0VZLCBtZXRob2QpO1xuICAgICAgaWYgKGN1cnJlbnRTY2hlbWUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ09MT1JfU0NIRU1FX0tFWSwgY3VycmVudFNjaGVtZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ010ZVRoZW1lU2VydmljZTogQ291bGQgbm90IHNldCBjb2xvciBzY2hlbWUgY2FjaGUgbWV0aG9kIHRvIGBsb2NhbFN0b3JhZ2VgLiBBdHRlbXB0aW5nIGZhbGxiYWNrIHRvIGBzZXNzaW9uU3RvcmFnZWAuIENhY2hpbmcgd2lsbCBvbmx5IGhhcHBlbiB0byBzZXNzaW9uU3RvcmFnZS4nXG4gICAgICApO1xuICAgICAgLy8gVHJ5IHNlc3Npb25TdG9yYWdlIG5leHRcbiAgICAgIHRyeSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oQ0FDSEVfVE9fS0VZLCAnc2Vzc2lvblN0b3JhZ2UnKTtcbiAgICAgICAgaWYgKGN1cnJlbnRTY2hlbWUpIHtcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKENPTE9SX1NDSEVNRV9LRVksIGN1cnJlbnRTY2hlbWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ010ZVRoZW1lU2VydmljZTogQ291bGQgbm90IHNldCBjb2xvciBzY2hlbWUgY2FjaGUgbWV0aG9kIHRvIGBsb2NhbFN0b3JhZ2VgIG9yIGBzZXNzaW9uU3RvcmFnZWAuIENhY2hpbmcgbm90IGVuYWJsZWQuJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBjdXJyZW50IGdsb2JhbCB0aGVtZSBvbiB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgc2V0R2xvYmFsVGhlbWUodGhlbWU6IE10ZVRoZW1lKSB7XG4gICAgaWYgKCF0aGVtZSB8fCB0eXBlb2YgdGhlbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ010ZVRoZW1lU2VydmljZTogR2xvYmFsIHRoZW1lIHBhcmFtIG11c3QgYmUgYSBzdHJpbmcuJyk7XG4gICAgfVxuICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgaWYgKHRoZW1lICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnZGF0YS1tdGUtdGhlbWUnLCB0aGVtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1tdGUtdGhlbWUnKTtcbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgY3VycmVudCBnbG9iYWwgY29sb3Itc2NoZW1lIG9uIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBzZXRHbG9iYWxDb2xvclNjaGVtZShjb2xvclNjaGVtZTogTXRlQ29sb3JTY2hlbWUpIHtcbiAgICBpZiAoIWNvbG9yU2NoZW1lIHx8IHR5cGVvZiBjb2xvclNjaGVtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXRlVGhlbWVTZXJ2aWNlOiBHbG9iYWwgY29sb3JTY2hlbWUgcGFyYW0gbXVzdCBiZSBhIHN0cmluZy4nKTtcbiAgICB9XG4gICAgY29uc3Qgc2NoZW1lID0gY29sb3JTY2hlbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoc2NoZW1lID09PSAnZGFyaycgfHwgc2NoZW1lID09PSAnbGlnaHQnIHx8IHNjaGVtZSA9PT0gJ3N5c3RlbScpIHtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnZGF0YS1tdGUtY29sb3Itc2NoZW1lJywgc2NoZW1lKTtcbiAgICAgIHRoaXMuc2V0Q2FjaGVWYWx1ZShDT0xPUl9TQ0hFTUVfS0VZLCBjb2xvclNjaGVtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1tdGUtY29sb3Itc2NoZW1lJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGN1cnJlbnQgZ2xvYmFsIHRoZW1lIGZyb20gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIGdldEdsb2JhbFRoZW1lKCk6IE10ZVRoZW1lIHwgbnVsbCB7XG4gICAgY29uc3QgdmFsdWUgPSBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtbXRlLXRoZW1lJykgYXMgTXRlVGhlbWU7XG4gICAgaWYgKCFbJ2RlZmF1bHQnLCAncHhMaWdodCcsICdjeExpZ2h0JywgJ3J4TGlnaHQnXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgYXMgTXRlVGhlbWU7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGN1cnJlbnQgZ2xvYmFsIGNvbG9yLXNjaGVtZSBmcm9tIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBnZXRHbG9iYWxDb2xvclNjaGVtZSgpOiBNdGVDb2xvclNjaGVtZSB8IG51bGwge1xuICAgIGNvbnN0IHZhbHVlID0gZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKFxuICAgICAgJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZSdcbiAgICApIGFzIE10ZUNvbG9yU2NoZW1lO1xuICAgIGlmICghWydsaWdodCcsICdkYXJrJywgJ3N5c3RlbSddLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZSBhcyBNdGVDb2xvclNjaGVtZTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyBhIHJlYWN0aXZlIHNpZ25hbCB0aGF0IHdpbGwgdXBkYXRlIGFueSB0aW1lIHRoZSBnbG9iYWwgdGhlbWUgY2hhbmdlcyAqL1xuICBwdWJsaWMgc2VsZWN0R2xvYmFsVGhlbWUoKSB7XG4gICAgdGhpcy5pbml0T2JzZXJ2ZXIoKTtcbiAgICByZXR1cm4gdGhpcy50aGVtZVNpZ25hbDtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIGEgcmVhY3RpdmUgc2lnbmFsIHRoYXQgd2lsbCB1cGRhdGUgYW55IHRpbWUgdGhlIGdsb2JhbCBjb2xvci1zY2hlbWUgY2hhbmdlcyAqL1xuICBwdWJsaWMgc2VsZWN0R2xvYmFsQ29sb3JTY2hlbWUoKSB7XG4gICAgdGhpcy5pbml0T2JzZXJ2ZXIoKTtcbiAgICByZXR1cm4gdGhpcy5jb2xvclNjaGVtZVNpZ25hbDtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSB2YWx1ZSBvZiBhbGwgb2YgdGhlIGdpdmVuIHRoZW1lIHZhcmlhYmxlcyBvbiB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgc2V0KFxuICAgIGNvbmZpZ0ZuT3JPYmo6XG4gICAgICB8IFN1YnNldDxNb3J0YXJUaGVtZUNvbmZpZz5cbiAgICAgIHwgKChjb25maWc6IE1vcnRhclRoZW1lQ29uZmlnKSA9PiBTdWJzZXQ8TW9ydGFyVGhlbWVDb25maWc+KVxuICApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZ0ZuT3JPYmogPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbmZpZ0ZuT3JPYmogPSBjb25maWdGbk9yT2JqKHRoaXMuY29uZmlnKTtcbiAgICB9XG4gICAgY29uc3QgbWFwcGluZ3MgPSB0aGlzLmZsYXR0ZW5QYXRocyhjb25maWdGbk9yT2JqKTtcbiAgICBtYXBwaW5ncy5mb3JFYWNoKChbcGF0aCwgdmFsXSkgPT4ge1xuICAgICAgY29uc3QgY3NzVmFyID0gcGF0aC5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjW3Byb3BdO1xuICAgICAgfSwgc2V0dGVyQ29uZmlnKTtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnN0eWxlLnNldFByb3BlcnR5KGNzc1ZhciwgYCR7dmFsfWApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJldHJpZXZlcyB0aGUgdmFsdWUgZm9yIHRoZSByZXF1ZXN0ZWQgdGhlbWUgdmFyaWFibGUgZnJvbSB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgZ2V0PFQ+KGsxOiAodGhlbWVDb25maWc6IE1vcnRhclRoZW1lQ29uZmlnKSA9PiBUKTogVDtcbiAgcHVibGljIGdldDxLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnPihrMTogSzEpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8SzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZywgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0+KFxuICAgIGsxOiBLMSxcbiAgICBrMjogSzJcbiAgKTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVxuICA+KGsxOiBLMSwgazI6IEsyLCBrMzogSzMpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXSxcbiAgICBLNCBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMywgazQ6IEs0KTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM10sXG4gICAgSzUgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1cbiAgPihrMTogSzEsIGsyOiBLMiwgazM6IEszLCBrNDogSzQsIGs1OiBLNSk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVtLNV07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl0sXG4gICAgSzQgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXSxcbiAgICBLNSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XSxcbiAgICBLNiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVtLNV1cbiAgPihrMTogSzEsIGsyOiBLMiwgazM6IEszLCBrNDogSzQsIGs1OiBLNSwgazY6IEs2KTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdW0s1XVtLNl07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl0sXG4gICAgSzQgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXSxcbiAgICBLNSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XSxcbiAgICBLNiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVtLNV1cbiAgPihcbiAgICAuLi5rZXlzOlxuICAgICAgfCBbSzFdXG4gICAgICB8IFtLMSwgSzJdXG4gICAgICB8IFtLMSwgSzIsIEszXVxuICAgICAgfCBbSzEsIEsyLCBLMywgSzRdXG4gICAgICB8IFtLMSwgSzIsIEszLCBLNCwgSzVdXG4gICAgICB8IFtLMSwgSzIsIEszLCBLNCwgSzUsIEs2XVxuICApOiBhbnkge1xuICAgIGNvbnN0IFtmbl0gPSBrZXlzID8/IFtudWxsXTtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBjc3NWYXIgPSAoZm4gYXMgYW55KShzZXR0ZXJDb25maWcpO1xuICAgICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZ2xvYmFsVGhpcz8uZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Zhcik7XG4gICAgfVxuICAgIGNvbnN0IGNzc1ZhciA9IGtleXMucmVkdWNlKChhY2M6IGFueSwga2V5KSA9PiBhY2Nba2V5XSwgc2V0dGVyQ29uZmlnIGFzIGFueSkgYXMgc3RyaW5nO1xuICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGdsb2JhbFRoaXM/LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShjc3NWYXIpO1xuICB9XG5cbiAgLyoqIEZsYXR0ZW5zIGEgZ2l2ZW4gb2JqZWN0IHRvIGFuIGFycmF5IG9mIHBhdGgga2V5cyBhbmQgaXRzIHJlc3VsdGluZyB2YWx1ZSAqL1xuICBwcml2YXRlIGZsYXR0ZW5QYXRocyhvYmo6IFJlY29yZDxzdHJpbmcsIGFueT4sIHBhdGg6IHN0cmluZ1tdID0gW10pOiBbc3RyaW5nW10sIGFueV1bXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgY29uc3QgbmVzdGVkID0gb2JqW2tleV07XG4gICAgICBpZiAodHlwZW9mIG5lc3RlZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcGF0aC5wdXNoKGtleSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYWNjLCB0aGlzLmZsYXR0ZW5QYXRocyhuZXN0ZWQsIHBhdGgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGgucHVzaChrZXkpO1xuICAgICAgICBhY2MucHVzaChbcGF0aCwgbmVzdGVkXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTXV0YXRpb25FdmVudCA9IChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG4gICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIHtcbiAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkYXRhLW10ZS1jb2xvci1zY2hlbWUnKSB7XG4gICAgICAgICAgdGhpcy5jb2xvclNjaGVtZVNpZ25hbC5zZXQodGhpcy5nZXRHbG9iYWxDb2xvclNjaGVtZSgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGF0YS1tdGUtdGhlbWUnKSB7XG4gICAgICAgICAgdGhpcy50aGVtZVNpZ25hbC5zZXQodGhpcy5nZXRHbG9iYWxUaGVtZSgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGluaXRDYWNoZSgpIHtcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjYWNoZUNvbG9yU2NoZW1lID0gdGhpcy5nZXRDYWNoZVZhbHVlKENPTE9SX1NDSEVNRV9LRVkpO1xuICAgICAgICBpZiAoY2FjaGVDb2xvclNjaGVtZSAmJiBjYWNoZUNvbG9yU2NoZW1lICE9PSAnJykge1xuICAgICAgICAgIHRoaXMuc2V0R2xvYmFsQ29sb3JTY2hlbWUoY2FjaGVDb2xvclNjaGVtZSBhcyBNdGVDb2xvclNjaGVtZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0T2JzZXJ2ZXIoKSB7XG4gICAgaWYgKCFpc1NzcigpICYmICF0aGlzLnJvb3RPYnNlcnZlcikge1xuICAgICAgdGhpcy5yb290T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmhhbmRsZU11dGF0aW9uRXZlbnQpO1xuICAgICAgdGhpcy5yb290T2JzZXJ2ZXIub2JzZXJ2ZShnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogWydkYXRhLW10ZS10aGVtZScsICdkYXRhLW10ZS1jb2xvci1zY2hlbWUnXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FjaGVNZXRob2QoKTogJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnIHwgbnVsbCB7XG4gICAgLy8gUmV0cmlldmUgY2FjaGUgbWV0aG9kXG4gICAgbGV0IGNhY2hlTWV0aG9kOiAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZScgfCBudWxsID0gbnVsbDtcbiAgICAvLyBUcnkgbG9jYWxTdG9yYWdlXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGNhY2hlTWV0aG9kID0gdmFsIGFzICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBUcnkgc2Vzc2lvblN0b3JhZ2VcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oQ0FDSEVfVE9fS0VZKTtcbiAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgIGNhY2hlTWV0aG9kID0gdmFsIGFzICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlTWV0aG9kO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDYWNoZVZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2FjaGVNZXRob2QgPSB0aGlzLmdldENhY2hlTWV0aG9kKCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChjYWNoZU1ldGhvZCA9PT0gJ2xvY2FsU3RvcmFnZScpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGNhY2hlTWV0aG9kID09PSAnc2Vzc2lvblN0b3JhZ2UnKSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FjaGVWYWx1ZShrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IGNhY2hlTWV0aG9kID0gdGhpcy5nZXRDYWNoZU1ldGhvZCgpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoY2FjaGVNZXRob2QgPT09ICdsb2NhbFN0b3JhZ2UnKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgfSBlbHNlIGlmIChjYWNoZU1ldGhvZCA9PT0gJ3Nlc3Npb25TdG9yYWdlJykge1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZVRoZW1lU2VydmljZSA9IG5ldyBfTXRlVGhlbWVTZXJ2aWNlKCk7XG4iLCAiaW1wb3J0IHsgaXNTc3IsIGlzUGxhdGZvcm0gfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgdHlwZSBQb3J0YWxTdGFjayA9ICdvdmVybGF5JztcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YSB7XG4gIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHN0YWNrOiBQb3J0YWxTdGFjaztcbiAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzOiBTZXQ8RWxlbWVudD47XG4gIHBhcmVudFBvcnRhbGVkRWxlbWVudD86IEVsZW1lbnQ7XG4gIGJhY2tkcm9wPzogRWxlbWVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50UG9ydGFsQ29udHJvbGxlciB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcmVudFBvcnRhbGVkRWxlbWVudDogRWxlbWVudDtcbiAgb3B0aW9uczogeyBzdGFjazogUG9ydGFsU3RhY2sgfTtcbn1cblxuZXhwb3J0IHR5cGUgUG9ydGFsQWRhcHRlcjxUID0gYW55PiA9IChcbiAgcG9ydGFsRWxlbWVudDogVCxcbiAgb3V0bGV0RWxlbWVudDogRWxlbWVudFxuKSA9PiBQcm9taXNlPGFueT4gfCBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydGFsT3B0aW9ucyB7XG4gIC8qKiBSZW5kZXJzIHRoZSBiYWNrZHJvcCBkaW1tZWQgKi9cbiAgd2l0aERpbUJhY2tkcm9wPzogYm9vbGVhbjtcblxuICAvKiogTWFrZXMgdGhlIGJhY2tkcm9wIGlnbm9yZSBwb2ludGVyIGV2ZW50cy4gVXNlZnVsIGZvciB0cmlnZ2VyT24gXCJob3ZlclwiLiAqL1xuICB3aXRoSW5lcnRCYWNrZHJvcD86IGJvb2xlYW47XG5cbiAgLyoqIERpc2FibGVzIHRoZSBhYmlsaXR5IHRvIHNjcm9sbCB0aGUgcGFnZSBiZWhpbmQgdGhlIG92ZXJsYXkgd2hlbiB0cnVlICovXG4gIHdpdGhTY3JvbGxMb2NrPzogYm9vbGVhbjtcblxuICAvKiogQ2FsbGJhY2sgZm9yIGhhbmRsaW5nIGNsb3NlT25DbGlja091dHNpZGUgZXZlbnRzIHdoZW4gdGhlIHBvcnRhbCdzIGJhY2tkcm9wIGlzIGNsaWNrZWQgKi9cbiAgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXI/OiAoKSA9PiBhbnk7XG5cbiAgLyoqIFRoZSBhbmltYXRpb24gZHVyYXRpb24gZm9yIGZhZGluZyBhIHNoYWRvdyBiYWNrZHJvcCBpbi9vdXQgKi9cbiAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG5cbiAgLyoqIEFkYXB0ZXIgZm9yIFwicG9ydGFsaW5nXCIgYW4gZWxlbWVudCBmcm9tIG9uZSBsb2NhdGlvbiBpbiB0aGUgRE9NIHRvIGFub3RoZXIuIExldmVyYWdlZCBieSBmcmFtZXdvcmsgd3JhcHBlcnMgZm9yIGltcHJvdmVkIGludGVyb3AuICovXG4gIHBvcnRhbEFkYXB0ZXI/OiBQb3J0YWxBZGFwdGVyO1xufVxuXG4vKiogRGVmYXVsdCBuYXRpdmUgRE9NIGFkYXB0ZXIgZm9yIHBvcnRhbGluZyBhbiBlbGVtZW50IHRvIGFub3RoZXIgdGFyZ2V0IGVsZW1lbnQgKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0UG9ydGFsQWRhcHRlcjogUG9ydGFsQWRhcHRlciA9IChwb3J0YWxFbGVtLCBvdXRsZXRFbGVtKSA9PiB7XG4gIG91dGxldEVsZW0/LmFwcGVuZENoaWxkKHBvcnRhbEVsZW0pO1xufTtcblxuY2xhc3MgX010ZVBvcnRhbFNlcnZpY2Uge1xuICAvKiogU2hhcmVkIGdsb2JhbCBjb25zdCBmb3Igc3RhY2sgZWxlbWVudCByZWZzICovXG4gIHByaXZhdGUgc3RhY2tFbGVtZW50czogeyBvdmVybGF5OiBFbGVtZW50IH0gPSB7XG4gICAgb3ZlcmxheTogdW5kZWZpbmVkLFxuICB9O1xuXG4gIC8qKiBTaGFyZWQgZ2xvYmFsIGNvbnN0IGZvciBwb3J0YWxlZCBlbGVtZW50cyBtZXRhZGF0YSAqL1xuICBwcml2YXRlIHBvcnRhbGVkRWxlbWVudHMgPSBuZXcgTWFwPG51bWJlciwgTWFwPEVsZW1lbnQsIFBvcnRhbGVkRWxlbWVudE1ldGFkYXRhPj4oKTtcblxuICBwcml2YXRlIGFjdGl2ZVNjcm9sbExvY2tzID0gbmV3IFNldDxFbGVtZW50PigpO1xuXG4gIHByaXZhdGUgc3RhY2tNdXRhdGlvbk9ic2VydmVyPzogTXV0YXRpb25PYnNlcnZlcjtcblxuICAvKipcbiAgICogV2hlbiBjYWxsZWQsIHRoaXMgc2VydmljZSB3aWxsIGF0dGVtcHQgdG8gbG9jYXRlIHRoZSBgQGFuZ3VsYXIvY2RrYCBvdmVybGF5IHN0YWNrLlxuICAgKiBJZiBmb3VuZCB0aGlzIHNlcnZpY2Ugd2lsbCBiZSBjb25maWd1cmVkIHRvIHVzZSB0aGF0IGVsZW1lbnQgYXMgdGhlIGBvdmVybGF5YCBzdGFjayBpbnN0ZWFkIG9mIGluaXRpYWxpemluZyBpdHMgb3duLlxuICAgKi9cbiAgcHVibGljIGNvbmZpZ3VyZUNka0ludGVyb3AoKSB7XG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICBjb25zdCBjZGtTdGFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZGstb3ZlcmxheS1jb250YWluZXInKTtcbiAgICAgIGlmIChjZGtTdGFjaykge1xuICAgICAgICB0aGlzLnN0YWNrRWxlbWVudHMub3ZlcmxheSA9IGNka1N0YWNrO1xuICAgICAgICB0aGlzLnN0YWNrRWxlbWVudHMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKHRoaXMuaWRGYWN0b3J5KCdvdmVybGF5JykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBwb3J0YWwgY29udHJvbGxlci4gQWxsIGl0ZW1zIGl0IHJlcXVlc3RlZCB0byBiZSBwb3J0YWxlZCB3aWxsIGJlIHRyYWNrIGFnYWluc3QgaXQuXG4gICAqIFdoZW4gdGhlIHBvcnRhbCBpcyByZW1vdmVkIHdlIGNhbiB0aGVuIHJlbW92ZSBhbnkgZWxlbWVudHMgaXQgY3VycmVudGx5IGhhcyBwb3J0YWxlZCBhbmRcbiAgICogYW55IG9mIHRoZWlyIHBvcnRhbGVkIGNoaWxkcmVuLlxuICAgKi9cbiAgcHVibGljIGFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIpIHtcbiAgICBpZiAoIXRoaXMucG9ydGFsZWRFbGVtZW50cy5oYXMocG9ydGFsQ29udHJvbGxlcj8uaWQpKSB7XG4gICAgICAvLyBUcmFjayBpbiBzZXQgYnkgSUQgc28gd2UgZG9uJ3Qga2VlcCBhIGxpdmUgcmVmZXJlbmNlIHRvIHRoZSBjb250cm9sbGVyIGl0c2VsZlxuICAgICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLnNldChwb3J0YWxDb250cm9sbGVyLmlkLCBuZXcgTWFwPEVsZW1lbnQsIFBvcnRhbGVkRWxlbWVudE1ldGFkYXRhPigpKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVtb3ZlcyBhbGwgb2YgYSBwb3J0YWwgY29udHJvbGxlcnMgcG9ydGFsZWQgZWxlbWVudHMgYW5kIHRoZWlyIHJlZmVyZW5jZXMgKi9cbiAgcHVibGljIHJlbW92ZUNvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIpIHtcbiAgICAvLyBBdHRlbXB0IHRvIHJlbW92ZSBhbGwgaXRlbXMgYXR0YWNoZWQgYnkgdGhpcyBjb250cm9sbGVyIGZyb20gdGhlIGNvbmZpZ3VyZWQgc3RhY2tcbiAgICBjb25zdCBhdHRhY2hlZEVsZW1lbnRzID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKTtcbiAgICBpZiAoYXR0YWNoZWRFbGVtZW50cykge1xuICAgICAgYXR0YWNoZWRFbGVtZW50cy5mb3JFYWNoKChpdGVtKSA9PiB0aGlzLnJlbW92ZUZyb21TdGFjayhwb3J0YWxDb250cm9sbGVyLCBpdGVtLmVsZW1lbnQpKTtcbiAgICB9XG4gICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmRlbGV0ZShwb3J0YWxDb250cm9sbGVyLmlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnN1cmVzIGEgcmVmIHRvIHRoZSBjb25maWd1cmVkIHN0YWNrIGV4aXN0cy4gSWYgaXQgZG9lcyBub3QsIHRoZSBjb25maWd1cmVkIHN0YWNrIHdpbGxcbiAgICogYmUgY3JlYXRlZCBhbmQgYXBwZW5kZWQgdG8gdGhlIGRvY3VtZW50LiBEb2VzIG5vdGhpbmcgZHVyaW5nIFNTUi5cbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplU3RhY2soc3RhY2s6IFBvcnRhbFN0YWNrKSB7XG4gICAgaWYgKHN0YWNrICE9PSAnb3ZlcmxheScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPdmVybGF5IFN0YWNrOiBcIiR7c3RhY2t9XCIgbXVzdCBiZSAnb3ZlcmxheScgYXQgdGhpcyB0aW1lLmApO1xuICAgIH1cbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIGlmICghdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXSkge1xuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZEZhY3Rvcnkoc3RhY2spKTtcbiAgICAgICAgdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXSA9XG4gICAgICAgICAgZWxlbSA/P1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5pZEZhY3Rvcnkoc3RhY2spLFxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10gJiYgIXRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10uaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRTdGFja1RvRG9tKHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10pO1xuXG4gICAgICAgIC8vIEluaXQgbXV0YXRpb24gb2JzZXJ2ZXJcbiAgICAgICAgLy8gVGhpcyB3aWxsIHdhdGNoIGZvciBhbnl0aW1lIHRoZSBzdGFjayBpcyByZW1vdmVkIGZyb20gdGhlIERPTSBmb3Igc29tZSByZWFzb25cbiAgICAgICAgLy8gSWYgaXQgaXMsIGl0IHdpbGwgcmUtYXR0YWNoIGl0IHRvIHRoZSBET00gYWZ0ZXIgdGhlIG5leHQgdGlja1xuICAgICAgICBpZiAoIXRoaXMuc3RhY2tNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgdGhpcy5zdGFja011dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobWwsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG1sKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgcmVtb3ZlZE5vZGUgb2YgbXV0YXRpb24ucmVtb3ZlZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZWROb2RlID09PSB0aGlzLnN0YWNrRWxlbWVudHMub3ZlcmxheSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxJdGVtc0Zyb21TdGFja3MoKTtcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZFN0YWNrVG9Eb20odGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10/LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLnN0YWNrTXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10ucGFyZW50Tm9kZSwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogZmFsc2UsXG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICBzdWJ0cmVlOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBwZW5kU3RhY2tUb0RvbShzdGFja0VsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAoc3RhY2tFbGVtZW50ICYmICFzdGFja0VsZW1lbnQuaXNDb25uZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHRvYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdtdGUtdG9hc3QtY29udGFpbmVyJyk7XG4gICAgICBpZiAodG9hc3RDb250YWluZXIpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoc3RhY2tFbGVtZW50LCB0b2FzdENvbnRhaW5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChzdGFja0VsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBBcHBlbmRzIGFuIGl0ZW0gdG8gdGhlIGNvbmZpZ3VyZWQgcG9ydGFsIHN0YWNrICovXG4gIHB1YmxpYyBhcHBlbmRUb1N0YWNrKFxuICAgIHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLFxuICAgIGVsZW1lbnQ6IEVsZW1lbnQsXG4gICAge1xuICAgICAgd2l0aERpbUJhY2tkcm9wID0gZmFsc2UsXG4gICAgICB3aXRoSW5lcnRCYWNrZHJvcCA9IGZhbHNlLFxuICAgICAgd2l0aFNjcm9sbExvY2sgPSBmYWxzZSxcbiAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXIsXG4gICAgICBwb3J0YWxBZGFwdGVyID0gZGVmYXVsdFBvcnRhbEFkYXB0ZXIsXG4gICAgfTogUG9ydGFsT3B0aW9ucyA9IHt9XG4gICkge1xuICAgIHRoaXMuYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudFBvcnRhbGVkRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50UG9ydGFsZWRFbGVtZW50KHBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQpO1xuICAgICAgY29uc3Qgc3RhY2tOYW1lID0gcG9ydGFsQ29udHJvbGxlci5vcHRpb25zLnN0YWNrO1xuICAgICAgY29uc3Qgc3RhY2sgPSB0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tOYW1lXTtcbiAgICAgIGNvbnN0IGF0dGFjaGVkRWxlbWVudHMgPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpO1xuXG4gICAgICBjb25zdCBiYWNrZHJvcCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbXRlLXBvcnRhbF9fYmFja2Ryb3AnLFxuICAgICAgICAuLi4oYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb25cbiAgICAgICAgICA/IHsgc3R5bGU6IGB0cmFuc2l0aW9uLWR1cmF0aW9uOiAke2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9ufTtgIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBIYW5kbGUgYmFja2Ryb3Agc3R5bGluZ1xuICAgICAgaWYgKHdpdGhJbmVydEJhY2tkcm9wKSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1pbmVydCcpO1xuICAgICAgfVxuICAgICAgaWYgKHdpdGhEaW1CYWNrZHJvcCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0tc2hhZG93Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0tdHJhbnNwYXJlbnQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwZW5kIGJhY2tkcm9wXG4gICAgICBzdGFjaz8uYXBwZW5kQ2hpbGQoYmFja2Ryb3ApO1xuXG4gICAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgICAgLy8gQWRkIGxpc3RlbmVyIGlmIGNsaWNrIGhhbmRsZXIgaXMgcHJlc2VudFxuICAgICAgICBpZiAoY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgICAgICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcik7XG4gICAgICAgICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBiYWNrZHJvcCBzaG91bGQgYmUgZGltLCBhbmltYXRlIGl0IGFmdGVyIGl0IGhhcyBiZWVuIGFwcGVuZGVkIHRvIHRoZSBkb21cbiAgICAgICAgaWYgKHdpdGhEaW1CYWNrZHJvcCkge1xuICAgICAgICAgIGdsb2JhbFRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1zaG93Jyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwbHkgc2Nyb2xsIGxvY2tcbiAgICAgICAgaWYgKHdpdGhTY3JvbGxMb2NrKSB7XG4gICAgICAgICAgdGhpcy5hcHBseVNjcm9sbExvY2soZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gV2FpdCBmb3IgUmVhY3QgKG9yIG90aGVyIGZ1dHVyZSBmcmFtZXdvcmsgYWRhcHRlcikgdG8gYXBwZW5kIGVsZW1lbnQgdG8gbmV3XG4gICAgICAvLyBsb2NhdGlvbiBpbiB0aGUgRE9NIGJlZm9yZSBhZGRpbmcgdG8gc3RhY2suIERvaW5nIHNvIHRyaWdnZXJzIGBob3N0RGlzY29ubmVjdGVkYFxuICAgICAgLy8gd2hpY2ggd291bGQgaW5zdGFudGx5IHJlbW92ZSB0aGUgZWxlbWVudCBpZiBub3QgZm9yIHRoaXMgZXh0cmEgdGltZW91dCB0byB3YWl0IGEgdGlja1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHBvcnRhbEFkYXB0ZXIoZWxlbWVudCwgc3RhY2spKS50aGVuKCgpID0+IHtcbiAgICAgICAgYXR0YWNoZWRFbGVtZW50cy5zZXQoZWxlbWVudCwge1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgc3RhY2s6IHN0YWNrTmFtZSxcbiAgICAgICAgICBiYWNrZHJvcCxcbiAgICAgICAgICBjaGlsZFBvcnRhbGVkRWxlbWVudHM6IG5ldyBTZXQ8RWxlbWVudD4oKSxcbiAgICAgICAgICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogUmVtb3ZlcyBhbiBlbGVtZW50IGZyb20gdGhlIHN0YWNrICovXG4gIHB1YmxpYyByZW1vdmVGcm9tU3RhY2socG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5wb3J0YWxlZEVsZW1lbnRzLmhhcyhwb3J0YWxDb250cm9sbGVyLmlkKSkge1xuICAgICAgY29uc3QgYXR0YWNoZWRFbGVtZW50cyA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCk7XG4gICAgICBpZiAoYXR0YWNoZWRFbGVtZW50cykge1xuICAgICAgICBjb25zdCBlbGVtZW50TWV0YWRhdGEgPSBhdHRhY2hlZEVsZW1lbnRzLmdldChlbGVtZW50KTtcbiAgICAgICAgaWYgKGVsZW1lbnRNZXRhZGF0YSkge1xuICAgICAgICAgIGF0dGFjaGVkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgIHRoaXMuZmluYWxpemVTdGFja1JlbW92ZShlbGVtZW50TWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU2FmZWx5IHJlbW92ZXMgYWxsIGl0ZW1zIGZyb20gYWxsIHN0YWNrc1xuICBwcml2YXRlIHJlbW92ZUFsbEl0ZW1zRnJvbVN0YWNrcygpIHtcbiAgICBmb3IgKGxldCBbaWQsIGNvbnRyb2xsZXJNYXBdIG9mIHRoaXMucG9ydGFsZWRFbGVtZW50cy5lbnRyaWVzKCkpIHtcbiAgICAgIGZvciAobGV0IFtlbGVtZW50LCBlbGVtZW50TWV0YWRhdGFdIG9mIGNvbnRyb2xsZXJNYXAuZW50cmllcygpKSB7XG4gICAgICAgIGlmIChlbGVtZW50TWV0YWRhdGEpIHtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplU3RhY2tSZW1vdmUoZWxlbWVudE1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBNYWtlcyBhIGJhY2tkcm9wIGFzc29jaWF0ZWQgd2l0aCBhIHBvcnRhbGVkIGVsZW1lbnQgdmlzaWJsZSBpZiBpdCBleGlzdHMgKi9cbiAgcHVibGljIHNob3dCYWNrZHJvcChwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyKTtcbiAgICBjb25zdCB7IGJhY2tkcm9wIH0gPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpLmdldChlbGVtZW50KSA/PyB7fTtcbiAgICBiYWNrZHJvcD8uY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXNob3cnKTtcbiAgfVxuXG4gIC8qKiBIaWRlcyBhIGJhY2tkcm9wIGFzc29jaWF0ZWQgd2l0aCBhIHBvcnRhbGVkIGVsZW1lbnQgaWYgaXQgZXhpc3RzICovXG4gIHB1YmxpYyBoaWRlQmFja2Ryb3AocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgY29uc3QgeyBiYWNrZHJvcCB9ID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKS5nZXQoZWxlbWVudCkgPz8ge307XG4gICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tkcm9wLS1zaG93Jyk7XG4gIH1cblxuICAvKiogVXBkYXRlcyB0aGUgaW50ZXJ0bmVzcyBhIGJhY2tkcm9wIGlmIGl0IGV4aXN0cyAod2hldGhlciBvciBub3QgdGhlIHVzZXIgY2FuIGNsaWNrIHRocm91Z2ggaXQpICovXG4gIHB1YmxpYyBzZXRCYWNrZHJvcEluZXJ0bmVzcyhcbiAgICBwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlcixcbiAgICBlbGVtZW50OiBFbGVtZW50LFxuICAgIGluZXJ0OiBib29sZWFuID0gdHJ1ZVxuICApIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgY29uc3QgeyBiYWNrZHJvcCB9ID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKS5nZXQoZWxlbWVudCkgPz8ge307XG4gICAgaWYgKGluZXJ0KSB7XG4gICAgICBiYWNrZHJvcD8uY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLWluZXJ0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhY2tkcm9wPy5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrZHJvcC0taW5lcnQnKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgaWQgZm9yIHRoZSBjb25maWd1cmVkIHN0YWNrIGVsZW1lbnQgKi9cbiAgcHJpdmF0ZSBpZEZhY3RvcnkgPSAoc3RhY2s6IFBvcnRhbFN0YWNrKSA9PiBgbXRlLXBvcnRhbF9fJHtzdGFja30tc3RhY2tgO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYW4gZWxlbWVudCBpcyBiZWluZyBwb3J0YWxlZCBmcm9tIHdpdGhpbiBhbm90aGVyIHBvcnRhbGVkXG4gICAqIGVsZW1lbnQgYW5kIHJldHVybnMgdGhhdCBwYXJlbnQgaWYgaXQgaXNcbiAgICovXG4gIHByaXZhdGUgZ2V0UGFyZW50UG9ydGFsZWRFbGVtZW50KHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKHBvcnRhbENvbnRyb2xsZXIucGFyZW50UG9ydGFsZWRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gcG9ydGFsQ29udHJvbGxlci5wYXJlbnRQb3J0YWxlZEVsZW1lbnQ7XG4gICAgfVxuICAgIGxldCBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ6IEVsZW1lbnQ7XG4gICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmZvckVhY2goKHBvcnRhbENvbnRyb2xsZXIpID0+XG4gICAgICBwb3J0YWxDb250cm9sbGVyLmZvckVhY2goKHBvcnRhbGVkRWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAocG9ydGFsZWRFbGVtZW50LmVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgICBwb3J0YWxlZEVsZW1lbnQuY2hpbGRQb3J0YWxlZEVsZW1lbnRzLmFkZChlbGVtZW50KTtcbiAgICAgICAgICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQgPSBwb3J0YWxlZEVsZW1lbnQuZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIC8vIENhY2hlIHRoZSBwYXJlbnRQb3J0YWxlZEVsZW1lbnQgaWYgZm91bmQgb24gdGhlIGNvbnRyb2xsZXIgc28gd2UgY2FuIHJlZmVyZW5jZVxuICAgIC8vIGl0IHdoZW4gb3BlbmVkIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4gICAgaWYgKHBhcmVudFBvcnRhbGVkRWxlbWVudCkge1xuICAgICAgcG9ydGFsQ29udHJvbGxlci5wYXJlbnRQb3J0YWxlZEVsZW1lbnQgPSBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ7XG4gIH1cblxuICAvKiogRW5zdXJlcyBhbiBlbGVtZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgc3RhY2sgbm8gbWF0dGVyIHdoaWNoIGNvbnRyb2xsZXIgaGFzIHBvcnRhbGVkIGl0ICovXG4gIHByaXZhdGUgcmVtb3ZlRnJvbVN0YWNrR2xvYmFsbHkoZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChwb3J0YWxDb250cm9sbGVyKSA9PiB7XG4gICAgICBpZiAocG9ydGFsQ29udHJvbGxlci5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudE1ldGFkYXRhID0gcG9ydGFsQ29udHJvbGxlci5nZXQoZWxlbWVudCk7XG4gICAgICAgIHBvcnRhbENvbnRyb2xsZXIuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmZpbmFsaXplU3RhY2tSZW1vdmUoZWxlbWVudE1ldGFkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBGaW5hbGl6ZXMgdGhlIHJlbW92ZSBvZiBhbiBlbGVtZW50IGZyb20gYSBwb3J0YWwgc3RhY2sgKi9cbiAgcHJpdmF0ZSBmaW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YTogUG9ydGFsZWRFbGVtZW50TWV0YWRhdGEpIHtcbiAgICBpZiAoZWxlbWVudE1ldGFkYXRhKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIHN0YWNrOiBzdGFja05hbWUsXG4gICAgICAgIGJhY2tkcm9wLFxuICAgICAgICBjaGlsZFBvcnRhbGVkRWxlbWVudHMsXG4gICAgICAgIHBhcmVudFBvcnRhbGVkRWxlbWVudCxcbiAgICAgIH0gPSBlbGVtZW50TWV0YWRhdGE7XG4gICAgICBjb25zdCBzdGFjayA9IHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja05hbWVdO1xuXG4gICAgICAvLyBSZW1vdmUgYW55IHNjcm9sbExvY2tzXG4gICAgICB0aGlzLnJlbW92ZVNjcm9sbExvY2soZWxlbWVudCk7XG5cbiAgICAgIC8vIEVuc3VyZXMgYW4gZWxlbWVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gYW55IHBhcmVudCBwb3J0YWxlZCBlbGVtZW50cyBjaGlsZHJlbiBsaXN0c1xuICAgICAgaWYgKHBhcmVudFBvcnRhbGVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZm9yRWFjaCgocG9ydGFsQ29udHJvbGxlcikgPT4ge1xuICAgICAgICAgIGlmIChwb3J0YWxDb250cm9sbGVyLmhhcyhwYXJlbnRQb3J0YWxlZEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBwb3J0YWxDb250cm9sbGVyLmdldChwYXJlbnRQb3J0YWxlZEVsZW1lbnQpLmNoaWxkUG9ydGFsZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gRW5zdXJlcyBhbnkgY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50IGFyZSByZW1vdmVkIGJlZm9yZSB0aGlzIGVsZW1lbnQgaXNcbiAgICAgIGlmIChjaGlsZFBvcnRhbGVkRWxlbWVudHMuc2l6ZSA+IDApIHtcbiAgICAgICAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHRoaXMucmVtb3ZlRnJvbVN0YWNrR2xvYmFsbHkoZWxlbWVudCkpO1xuICAgICAgfVxuICAgICAgLy8gUmVtb3ZlcyB0aGlzIGVsZW1lbnRzIGJhY2tkcm9wIGZyb20gdGhlIHBvcnRhbCBzdGFja1xuICAgICAgaWYgKGJhY2tkcm9wICYmIGJhY2tkcm9wLnBhcmVudEVsZW1lbnQgPT09IHN0YWNrKSB7XG4gICAgICAgIHN0YWNrPy5yZW1vdmVDaGlsZChiYWNrZHJvcCk7XG4gICAgICB9XG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGEgcmVhY3Qgd3JhcHBlZCBwb3J0YWxlZCBlbGVtZW50XG4gICAgICBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50Py5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheS13cmFwcGVyJykpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ID09PSBzdGFjaykge1xuICAgICAgICAgIHN0YWNrPy5yZW1vdmVDaGlsZChlbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCA9PT0gc3RhY2spIHtcbiAgICAgICAgc3RhY2s/LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGEgc2Nyb2xsIGxvY2sgdG8gdGhlIGJvZHkgZWxlbWVudCB0byBwcmV2ZW50IHNjcm9sbGluZyBvZiBwYWdlIGNvbnRlbnQuXG4gICAqIENhbGN1bGF0ZXMgYW55IGJvZHkgb2Zmc2V0cyBkdWUgdG8gdmlzaWJsZSBzY3JvbGxiYXJzIGFuZCBkeW5hbWljYWxseSBhZGp1c3RzIGZvciB0aGVtLlxuICAgKi9cbiAgcHJpdmF0ZSBhcHBseVNjcm9sbExvY2soZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuYWN0aXZlU2Nyb2xsTG9ja3MuYWRkKGVsZW1lbnQpO1xuXG4gICAgY29uc3QgaXNJT1MgPSBpc1BsYXRmb3JtKCdJT1MnKTtcbiAgICBjb25zdCBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuICAgIGNvbnN0IHNjcm9sbGJhclggPVxuICAgICAgTWF0aC5yb3VuZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgK1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgY29uc3QgcGFkZGluZ1Byb3AgPSBzY3JvbGxiYXJYID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnO1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgY29uc3Qgc2Nyb2xsWCA9IGJvZHlTdHlsZS5sZWZ0ID8gcGFyc2VGbG9hdChib2R5U3R5bGUubGVmdCkgOiB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgY29uc3Qgc2Nyb2xsWSA9IGJvZHlTdHlsZS50b3AgPyBwYXJzZUZsb2F0KGJvZHlTdHlsZS50b3ApIDogd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gICAgYm9keVN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtdGUtc2Nyb2xsLWxvY2stLWFjdGl2ZScpO1xuXG4gICAgaWYgKHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICBib2R5U3R5bGVbcGFkZGluZ1Byb3BdID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgO1xuICAgIH1cblxuICAgIC8vIE9ubHkgaU9TIGRvZXNuJ3QgcmVzcGVjdCBgb3ZlcmZsb3c6IGhpZGRlbmAgb24gZG9jdW1lbnQuYm9keSwgYW5kIHRoaXNcbiAgICAvLyB0ZWNobmlxdWUgaGFzIGZld2VyIHNpZGUgZWZmZWN0cy5cbiAgICBpZiAoaXNJT1MpIHtcbiAgICAgIC8vIGlPUyAxMiBkb2VzIG5vdCBzdXBwb3J0IGB2aXN1YWxWaWV3cG9ydGAuXG4gICAgICBjb25zdCBvZmZzZXRMZWZ0ID0gZ2xvYmFsVGhpcy52aXN1YWxWaWV3cG9ydD8ub2Zmc2V0TGVmdCB8fCAwO1xuICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gZ2xvYmFsVGhpcy52aXN1YWxWaWV3cG9ydD8ub2Zmc2V0VG9wIHx8IDA7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oYm9keVN0eWxlLCB7XG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICB0b3A6IGAkey0oc2Nyb2xsWSAtIE1hdGguZmxvb3Iob2Zmc2V0VG9wKSl9cHhgLFxuICAgICAgICBsZWZ0OiBgJHstKHNjcm9sbFggLSBNYXRoLmZsb29yKG9mZnNldExlZnQpKX1weGAsXG4gICAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVtb3ZlcyBhbiBhY3RpdmUgc2Nyb2xsTG9jayBpZiB0aGVyZSBhcmUgbm8gcmVtYWluaW5nIGVsZW1lbnRzIHBvcnRhbGVkIHRoYXQgcmVxdWVzdGVkIGl0ICovXG4gIHByaXZhdGUgcmVtb3ZlU2Nyb2xsTG9jayhlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5hY3RpdmVTY3JvbGxMb2Nrcy5kZWxldGUoZWxlbWVudCk7XG5cbiAgICBpZiAodGhpcy5hY3RpdmVTY3JvbGxMb2Nrcy5zaXplID09PSAwKSB7XG4gICAgICBjb25zdCBpc0lPUyA9IGlzUGxhdGZvcm0oJ0lPUycpO1xuICAgICAgY29uc3QgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcbiAgICAgIGNvbnN0IHNjcm9sbGJhclggPVxuICAgICAgICBNYXRoLnJvdW5kKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSArXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgY29uc3QgcGFkZGluZ1Byb3AgPSBzY3JvbGxiYXJYID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGJvZHlTdHlsZSwge1xuICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgIFtwYWRkaW5nUHJvcF06ICcnLFxuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbXRlLXNjcm9sbC1sb2NrLS1hY3RpdmUnKTtcblxuICAgICAgaWYgKGlzSU9TKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYm9keVN0eWxlLCB7XG4gICAgICAgICAgcG9zaXRpb246ICcnLFxuICAgICAgICAgIHRvcDogJycsXG4gICAgICAgICAgbGVmdDogJycsXG4gICAgICAgICAgcmlnaHQ6ICcnLFxuICAgICAgICB9KTtcbiAgICAgICAgZ2xvYmFsVGhpcy5zY3JvbGxUbyhzY3JvbGxYLCBzY3JvbGxZKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZVBvcnRhbFNlcnZpY2UgPSBuZXcgX010ZVBvcnRhbFNlcnZpY2UoKTtcbiIsICJpbXBvcnQgeyBzaWduYWwgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5jbGFzcyBfTXRlSGlzdG9yeUFwaVNlcnZpY2Uge1xuICBwcml2YXRlIGluaXRpYWxpemVkID0gZmFsc2U7XG4gIHByaXZhdGUgY2hhbmdlU2lnbmFsID0gc2lnbmFsKCk7XG4gIHByaXZhdGUgcHJldkhyZWY6IHN0cmluZztcblxuICBwdWJsaWMgc3RhdGVDaGFuZ2VzKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHJldHVybiB0aGlzLmNoYW5nZVNpZ25hbDtcbiAgfVxuXG4gIHByaXZhdGUgZm9yd2FyZEFwcGx5ID0gKHRhcmdldCwgdGhpc0FyZywgYXJnQXJyYXkpID0+IHtcbiAgICBjb25zdCByZXMgPSB0YXJnZXQuYXBwbHkodGhpc0FyZywgYXJnQXJyYXkpO1xuICAgIC8vIE9ubHkgZW1pdCBhIHN0YXRlIGNoYW5nZSBpZiB0aGUgaHJlZiBkaWZmZXJzIGZyb20gdGhlIGxhc3QgZW1pc3Npb25cbiAgICBpZiAodGhpcy5wcmV2SHJlZiAhPT0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcbiAgICAgIHRoaXMucHJldkhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgIHRoaXMuY2hhbmdlU2lnbmFsLnNldCh0aGlzLnByZXZIcmVmKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgLy8gTGlzdGVuIGZvciBiYWNrIGV2ZW50cyB3aXRoIHBvcHN0YXRlIGV2ZW50XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlU2lnbmFsLnNldCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICB9KTtcblxuICAgICAgLy8gUGF0Y2ggSGlzdG9yeSBBUEkgbWV0aG9kcyB0byBlbnN1cmUgd2UgZW1pdCBhbnl0aW1lIHRoZWlyIHN0YXRlIGlzIGNoYW5nZWRcbiAgICAgIC8vIFRoaXMgaXMgbmVjY2VzYXJ5IGJlY2Fpc2UgdGhlIGBwb3BzdGF0ZWAgZXZlbnQgaXMgbm90IHJlbGlhYmx5IGNhbGxlZCBhY3Jvc3MgYnJvd3NlcnMgd2hlbmV2ZXIgdGhlIGhpc3RvcnkgQVBJIGlzIHVzZWRcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2sgPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkuYmFjaywgeyBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHkgfSk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5mb3J3YXJkID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LmZvcndhcmQsIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkuZ28gPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkuZ28sIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSwgeyBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHkgfSk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlLCB7XG4gICAgICAgIGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlSGlzdG9yeUFwaVNlcnZpY2UgPSBuZXcgX010ZUhpc3RvcnlBcGlTZXJ2aWNlKCk7XG4iLCAiaW1wb3J0IHsgaXNTc3IgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgdHlwZSBNdGVEYXRlRm9ybWF0T3B0aW9ucyA9IEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zICYge1xuICBsYW5nPzogc3RyaW5nO1xuICBmb3JtYXQ/OlxuICAgIHwgJ3Nob3J0J1xuICAgIHwgJ21lZGl1bSdcbiAgICB8ICdsb25nJ1xuICAgIHwgJ2Z1bGwnXG4gICAgfCAnc2hvcnREYXRlJ1xuICAgIHwgJ21lZGl1bURhdGUnXG4gICAgfCAnbG9uZ0RhdGUnXG4gICAgfCAnZnVsbERhdGUnXG4gICAgfCAnc2hvcnRUaW1lJ1xuICAgIHwgJ21lZGl1bVRpbWUnXG4gICAgfCAnbG9uZ1RpbWUnXG4gICAgfCAnZnVsbFRpbWUnO1xufTtcblxuZXhwb3J0IHR5cGUgTXRlTnVtYmVyRm9ybWF0T3B0aW9ucyA9IEludGwuTnVtYmVyRm9ybWF0T3B0aW9ucyAmIHsgbGFuZz86IHN0cmluZyB9O1xuXG5jbGFzcyBfTXRlTG9jYWxpemVTZXJ2aWNlIHtcbiAgLy8gQXNzdW1lIGBlbmAgbGFuZyBmb3Igbm93IGFzIGEgZmFsbGJhY2sgdW50aWwgd2Ugcm9sbGJhY2sgd2lkZXIgc3VwcG9ydCBmb3IgaTExbiB3aGVuIG5lY2Vzc2FyeVxuICBwcml2YXRlIGxhbmd1YWdlID0gJ2VuJztcbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICBpZiAoIWlzU3NyKCkgJiYgIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5sYW5ndWFnZSA9IGAke2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nIHx8IG5hdmlnYXRvci5sYW5ndWFnZX1gLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvcm1hdE51bWJlcihudW1iZXJUb0Zvcm1hdDogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogTXRlTnVtYmVyRm9ybWF0T3B0aW9ucyk6IHN0cmluZyB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgY29uc3QgbGFuZyA9IG9wdGlvbnM/LmxhbmcgPyBvcHRpb25zLmxhbmcgOiB0aGlzLmxhbmd1YWdlO1xuICAgIG51bWJlclRvRm9ybWF0ID0gTnVtYmVyKG51bWJlclRvRm9ybWF0KTtcbiAgICAvLyBFbnN1cmUgbm8gbnVsbCBvcHRpb25zIGV4aXN0XG4gICAgY29uc3QgZmluYWxPcHRpb25zID0ge1xuICAgICAgbGFuZzogb3B0aW9ucy5sYW5nID8/IHVuZGVmaW5lZCxcbiAgICAgIHN0eWxlOiBvcHRpb25zLnN0eWxlID8/IHVuZGVmaW5lZCxcbiAgICAgIGN1cnJlbmN5OiBvcHRpb25zLmN1cnJlbmN5ID8/IHVuZGVmaW5lZCxcbiAgICAgIGN1cnJlbmN5RGlzcGxheTogb3B0aW9ucy5jdXJyZW5jeURpc3BsYXkgPz8gdW5kZWZpbmVkLFxuICAgICAgdXNlR3JvdXBpbmc6IG9wdGlvbnMudXNlR3JvdXBpbmcgPz8gdW5kZWZpbmVkLFxuICAgICAgbWluaW11bUludGVnZXJEaWdpdHM6IG9wdGlvbnMubWluaW11bUludGVnZXJEaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBvcHRpb25zLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IG9wdGlvbnMubWF4aW11bUZyYWN0aW9uRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbmltdW1TaWduaWZpY2FudERpZ2l0czogb3B0aW9ucy5taW5pbXVtU2lnbmlmaWNhbnREaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzOiBvcHRpb25zLm1heGltdW1TaWduaWZpY2FudERpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgfTtcbiAgICByZXR1cm4gaXNOYU4obnVtYmVyVG9Gb3JtYXQpXG4gICAgICA/ICcnXG4gICAgICA6IG5ldyBJbnRsLk51bWJlckZvcm1hdChsYW5nLCBmaW5hbE9wdGlvbnMpLmZvcm1hdChudW1iZXJUb0Zvcm1hdCk7XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0RGF0ZShkYXRlVG9Gb3JtYXQ6IERhdGUgfCBzdHJpbmcsIG9wdGlvbnM/OiBNdGVEYXRlRm9ybWF0T3B0aW9ucykge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIGNvbnN0IGxhbmcgPSBvcHRpb25zPy5sYW5nID8gb3B0aW9ucy5sYW5nIDogdGhpcy5sYW5ndWFnZTtcbiAgICBjb25zdCBmb3JtYXR0ZWRPcHRpb25zID0geyAuLi4ob3B0aW9ucyA/PyB7fSksIC4uLnRoaXMuZ2V0RGVmaW5lZERhdGVGb3JtYXQob3B0aW9ucz8uZm9ybWF0KSB9O1xuICAgIC8vIEVuc3VyZSBubyBudWxsIG9wdGlvbnMgZXhpc3RcbiAgICBjb25zdCBmaW5hbE9wdGlvbnMgPSB7XG4gICAgICBsYW5nOiBmb3JtYXR0ZWRPcHRpb25zLmxhbmcgPz8gdW5kZWZpbmVkLFxuICAgICAgd2Vla2RheTogZm9ybWF0dGVkT3B0aW9ucy53ZWVrZGF5ID8/IHVuZGVmaW5lZCxcbiAgICAgIGVyYTogZm9ybWF0dGVkT3B0aW9ucy5lcmEgPz8gdW5kZWZpbmVkLFxuICAgICAgeWVhcjogZm9ybWF0dGVkT3B0aW9ucy55ZWFyID8/IHVuZGVmaW5lZCxcbiAgICAgIG1vbnRoOiBmb3JtYXR0ZWRPcHRpb25zLm1vbnRoID8/IHVuZGVmaW5lZCxcbiAgICAgIGRheTogZm9ybWF0dGVkT3B0aW9ucy5kYXkgPz8gdW5kZWZpbmVkLFxuICAgICAgaG91cjogZm9ybWF0dGVkT3B0aW9ucy5ob3VyID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbnV0ZTogZm9ybWF0dGVkT3B0aW9ucy5taW51dGUgPz8gdW5kZWZpbmVkLFxuICAgICAgc2Vjb25kOiBmb3JtYXR0ZWRPcHRpb25zLnNlY29uZCA/PyB1bmRlZmluZWQsXG4gICAgICBmcmFjdGlvbmFsU2Vjb25kRGlnaXRzOiBmb3JtYXR0ZWRPcHRpb25zLmZyYWN0aW9uYWxTZWNvbmREaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgdGltZVpvbmVOYW1lOiBmb3JtYXR0ZWRPcHRpb25zLnRpbWVab25lTmFtZSA/PyB1bmRlZmluZWQsXG4gICAgICB0aW1lWm9uZTogZm9ybWF0dGVkT3B0aW9ucy50aW1lWm9uZSA/PyB1bmRlZmluZWQsXG4gICAgICBob3VyMTI6IGZvcm1hdHRlZE9wdGlvbnMuaG91cjEyID8/IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1hdDogZm9ybWF0dGVkT3B0aW9ucy5mb3JtYXQgPz8gdW5kZWZpbmVkLFxuICAgIH07XG4gICAgZGF0ZVRvRm9ybWF0ID0gbmV3IERhdGUoZGF0ZVRvRm9ybWF0KTtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobGFuZywgZmluYWxPcHRpb25zKS5mb3JtYXQoZGF0ZVRvRm9ybWF0KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmaW5lZERhdGVGb3JtYXQoXG4gICAgZm9ybWF0OlxuICAgICAgfCAnc2hvcnQnXG4gICAgICB8ICdtZWRpdW0nXG4gICAgICB8ICdsb25nJ1xuICAgICAgfCAnZnVsbCdcbiAgICAgIHwgJ3Nob3J0RGF0ZSdcbiAgICAgIHwgJ21lZGl1bURhdGUnXG4gICAgICB8ICdsb25nRGF0ZSdcbiAgICAgIHwgJ2Z1bGxEYXRlJ1xuICAgICAgfCAnc2hvcnRUaW1lJ1xuICAgICAgfCAnbWVkaXVtVGltZSdcbiAgICAgIHwgJ2xvbmdUaW1lJ1xuICAgICAgfCAnZnVsbFRpbWUnXG4gICk6IE10ZURhdGVGb3JtYXRPcHRpb25zIHtcbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgY2FzZSAnc2hvcnQnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2xvbmcnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdmdWxsJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ3Nob3J0RGF0ZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdtZWRpdW1EYXRlJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdsb25nRGF0ZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdmdWxsRGF0ZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnc2hvcnRUaW1lJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdtZWRpdW1UaW1lJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdsb25nVGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2Z1bGxUaW1lJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgZnJhY3Rpb25hbFNlY29uZERpZ2l0czogMixcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVMb2NhbGl6ZVNlcnZpY2UgPSBuZXcgX010ZUxvY2FsaXplU2VydmljZSgpO1xuIiwgImltcG9ydCB7IENvcmVQYWxldHRlLCBEZW5zaXR5T3B0aW9ucywgUHJlc2V0cywgU2l6ZU9wdGlvbnMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25QcmVzZXQge1xuICBzaXplPzogU2l6ZU9wdGlvbnM7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG4gIGRlbnNpdHk/OiBEZW5zaXR5T3B0aW9ucztcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGJ1dHRvblByZXNldHM6IFByZXNldHM8QnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25CdXR0b25QcmVzZXQge1xuICBzaXplPzogU2l6ZU9wdGlvbnM7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG4gIGRlbnNpdHk/OiBEZW5zaXR5T3B0aW9ucztcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGljb25CdXR0b25QcmVzZXRzOiBQcmVzZXRzPEljb25CdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgU3RhdHVzUGFsZXR0ZSB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvblByZXNldCB7XG4gIGNvbG9yPzogU3RhdHVzUGFsZXR0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGljb25QcmVzZXRzOiBQcmVzZXRzPEljb25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgU3RhdHVzUGFsZXR0ZSB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NCYXJQcmVzZXQge1xuICBjb2xvcj86IFN0YXR1c1BhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBwcm9ncmVzc0JhclByZXNldHM6IFByZXNldHM8UHJvZ3Jlc3NCYXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBTdGF0dXNQYWxldHRlIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9ncmVzc1NwaW5uZXJQcmVzZXQge1xuICBjb2xvcj86IFN0YXR1c1BhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzOiBQcmVzZXRzPFByb2dyZXNzU3Bpbm5lclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvb2xiYXJQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHRvb2xiYXJQcmVzZXRzOiBQcmVzZXRzPFRvb2xiYXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZFByZXNldCB7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG4gIHdpdGhTaGFkb3c/OiBib29sZWFuO1xuICB3aXRob3V0U2hhZG93PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJkQnV0dG9uUHJlc2V0IGV4dGVuZHMgQ2FyZFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgY2FyZFByZXNldHM6IFByZXNldHM8Q2FyZFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIHdpdGhvdXRTaGFkb3c6IHRydWUsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IGNhcmRCdXR0b25QcmVzZXRzOiBQcmVzZXRzPENhcmRCdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICB3aXRob3V0U2hhZG93OiB0cnVlLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJlZVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgdHJlZVByZXNldHM6IFByZXNldHM8VHJlZVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBDb3JlUGFsZXR0ZSwgUHJlc2V0cywgU2l6ZU9wdGlvbnMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUYWdQcmVzZXRzIHtcbiAgc2l6ZT86IFNpemVPcHRpb25zO1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgdGFnUHJlc2V0czogUHJlc2V0czxUYWdQcmVzZXRzPiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhZGdlUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBiYWRnZVByZXNldHM6IFByZXNldHM8QmFkZ2VQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgQ29yZVBhbGV0dGUsIFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmtQcmVzZXQge1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICBmb250V2VpZ2h0PzogJ3JlZ3VsYXInIHwgJ2JvbGQnO1xufVxuXG5leHBvcnQgY29uc3QgbGlua1ByZXNldHM6IFByZXNldHM8TGlua1ByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0UHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBhbGVydFByZXNldHM6IFByZXNldHM8QWxlcnRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGlucHV0UHJlc2V0czogUHJlc2V0czxJbnB1dFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBEcmF3ZXJQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGRyYXdlclByZXNldHM6IFByZXNldHM8RHJhd2VyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFzaWRlUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBhc2lkZVByZXNldHM6IFByZXNldHM8QXNpZGVQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFkY3J1bWJJdGVtUHJlc2V0IHtcbiAgZm9udFdlaWdodD86ICdyZWd1bGFyJyB8ICdib2xkJztcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbiAgd2l0aG91dFVuZGVybGluZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBicmVhZGNydW1iSXRlbVByZXNldHM6IFByZXNldHM8QnJlYWRjcnVtYkl0ZW1QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge1xuICAgIHdpdGhvdXRVbmRlcmxpbmU6IHRydWUsXG4gIH0sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG1vZGFsUHJlc2V0czogUHJlc2V0czxNb2RhbFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBDb3JlUGFsZXR0ZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94UHJlc2V0IHtcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGNoZWNrYm94UHJlc2V0czogUHJlc2V0czxDaGVja2JveFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBSYWRpb1ByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgcmFkaW9QcmVzZXRzOiBQcmVzZXRzPFJhZGlvUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdlJvb3RQcmVzZXQge1xuICBtb2JpbGVCcmVha3BvaW50PzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJztcbiAgaW52ZXJzZT86ICdoZWFkZXInIHwgJ3NpZGViYXInO1xuICBwcmVmZXJTaWRlYmFyPzogJ29wZW5lZCcgfCAnY2xvc2VkJztcbn1cblxuZXhwb3J0IGNvbnN0IG5hdlJvb3RQcmVzZXRzOiBQcmVzZXRzPE5hdlJvb3RQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7XG4gICAgaW52ZXJzZTogJ3NpZGViYXInLFxuICB9LFxuICBjeDoge1xuICAgIHByZWZlclNpZGViYXI6ICdjbG9zZWQnLFxuICB9LFxuICBweDoge1xuICAgIGludmVyc2U6ICdzaWRlYmFyJyxcbiAgfSxcbiAgcng6IHtcbiAgICBwcmVmZXJTaWRlYmFyOiAnY2xvc2VkJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2SGVhZGVyUHJlc2V0IHtcbiAgd2l0aENvbnRhaW5lcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZIZWFkZXJQcmVzZXRzOiBQcmVzZXRzPE5hdkhlYWRlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZTdWJIZWFkZXJQcmVzZXQge1xuICB3aXRoQ29udGFpbmVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IG5hdlN1YkhlYWRlclByZXNldHM6IFByZXNldHM8TmF2U3ViSGVhZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdlNpZGViYXJQcmVzZXQge1xuICBoaWRlVW50aWxUcmFuc2l0aW9uPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IG5hdlNpZGViYXJQcmVzZXRzOiBQcmVzZXRzPE5hdlNpZGViYXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBoaWRlVW50aWxUcmFuc2l0aW9uOiB0cnVlLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7XG4gICAgaGlkZVVudGlsVHJhbnNpdGlvbjogdHJ1ZSxcbiAgfSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2Q29udGVudFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF2Q29udGVudFByZXNldHM6IFByZXNldHM8TmF2Q29udGVudFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZGb290ZXJQcmVzZXQge1xuICB3aXRoQ29udGFpbmVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IG5hdkZvb3RlclByZXNldHM6IFByZXNldHM8TmF2Rm9vdGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkJ1dHRvblByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF2QnV0dG9uUHJlc2V0czogUHJlc2V0czxOYXZCdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2SWNvbkJ1dHRvblByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF2SWNvbkJ1dHRvblByZXNldHM6IFByZXNldHM8TmF2SWNvbkJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZJdGVtUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXZJdGVtUHJlc2V0czogUHJlc2V0czxOYXZJdGVtUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Hcm91cFByZXNldCB7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBidXR0b25Hcm91cFByZXNldHM6IFByZXNldHM8QnV0dG9uR3JvdXBQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXRjaFByZXNldCB7fVxuXG5leHBvcnQgY29uc3Qgc3dpdGNoUHJlc2V0czogUHJlc2V0czxTd2l0Y2hQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZVNlbGVjdFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF0aXZlU2VsZWN0UHJlc2V0czogUHJlc2V0czxOYXRpdmVTZWxlY3RQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRleHRhcmVhUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCB0ZXh0YXJlYVByZXNldHM6IFByZXNldHM8VGV4dGFyZWFQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNrZWxldG9uUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBza2VsZXRvblByZXNldHM6IFByZXNldHM8U2tlbGV0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlclByZXNldCB7fVxuXG5leHBvcnQgY29uc3Qgc2xpZGVyUHJlc2V0czogUHJlc2V0czxTbGlkZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhbmdlU2xpZGVyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCByYW5nZVNsaWRlclByZXNldHM6IFByZXNldHM8UmFuZ2VTbGlkZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlZ21lbnRlZENvbnRyb2xQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzOiBQcmVzZXRzPFNlZ21lbnRlZENvbnRyb2xQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgYnV0dG9uUHJlc2V0cywgaWNvbkJ1dHRvblByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYnV0dG9uL2J1dHRvbi5wcmVzZXRzJztcbmltcG9ydCB7IGljb25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2ljb24vaWNvbi5wcmVzZXRzJztcbmltcG9ydCB7IHByb2dyZXNzQmFyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLnByZXNldHMnO1xuaW1wb3J0IHsgcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXIucHJlc2V0cyc7XG5pbXBvcnQgeyB0b29sYmFyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy90b29sYmFyL3Rvb2xiYXIucHJlc2V0cyc7XG5pbXBvcnQgeyBjYXJkUHJlc2V0cywgY2FyZEJ1dHRvblByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvY2FyZC9jYXJkLnByZXNldHMnO1xuaW1wb3J0IHsgdHJlZVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdHJlZS90cmVlLnByZXNldHMnO1xuaW1wb3J0IHsgdGFnUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy90YWcvdGFnLnByZXNldHMnO1xuaW1wb3J0IHsgYmFkZ2VQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2JhZGdlL2JhZGdlLnByZXNldHMnO1xuaW1wb3J0IHsgbGlua1ByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvbGluay9saW5rLnByZXNldHMnO1xuaW1wb3J0IHsgYWxlcnRQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2FsZXJ0L2FsZXJ0LnByZXNldHMnO1xuaW1wb3J0IHsgaW5wdXRQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2lucHV0L2lucHV0LnByZXNldHMnO1xuaW1wb3J0IHsgZHJhd2VyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9kcmF3ZXIvZHJhd2VyLnByZXNldHMnO1xuaW1wb3J0IHsgYXNpZGVQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2FzaWRlL2FzaWRlLnByZXNldHMnO1xuaW1wb3J0IHsgYnJlYWRjcnVtYkl0ZW1QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWItaXRlbS5wcmVzZXRzJztcbmltcG9ydCB7IG1vZGFsUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9tb2RhbC9tb2RhbC5wcmVzZXRzJztcbmltcG9ydCB7IGNoZWNrYm94UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9jaGVja2JveC9jaGVja2JveC5wcmVzZXRzJztcbmltcG9ydCB7IHJhZGlvUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9yYWRpby9yYWRpby5wcmVzZXRzJztcbmltcG9ydCB7XG4gIG5hdlJvb3RQcmVzZXRzLFxuICBuYXZIZWFkZXJQcmVzZXRzLFxuICBuYXZTdWJIZWFkZXJQcmVzZXRzLFxuICBuYXZTaWRlYmFyUHJlc2V0cyxcbiAgbmF2Q29udGVudFByZXNldHMsXG4gIG5hdkZvb3RlclByZXNldHMsXG4gIG5hdkJ1dHRvblByZXNldHMsXG4gIG5hdkljb25CdXR0b25QcmVzZXRzLFxuICBuYXZJdGVtUHJlc2V0cyxcbn0gZnJvbSAnLi4vLi4vYXRvbWljL25hdi9uYXYucHJlc2V0cyc7XG5pbXBvcnQgeyBidXR0b25Hcm91cFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC5wcmVzZXRzJztcbmltcG9ydCB7IHN3aXRjaFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc3dpdGNoL3N3aXRjaC5wcmVzZXRzJztcbmltcG9ydCB7IG5hdGl2ZVNlbGVjdFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvbmF0aXZlLXNlbGVjdC9uYXRpdmUtc2VsZWN0LnByZXNldHMnO1xuaW1wb3J0IHsgdGV4dGFyZWFQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3RleHRhcmVhL3RleHRhcmVhLnByZXNldHMnO1xuaW1wb3J0IHsgc2tlbGV0b25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3NrZWxldG9uL3NrZWxldG9uLnByZXNldHMnO1xuaW1wb3J0IHsgc2xpZGVyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9zbGlkZXIvc2xpZGVyLnByZXNldHMnO1xuaW1wb3J0IHsgcmFuZ2VTbGlkZXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3JhbmdlLXNsaWRlci9yYW5nZS1zbGlkZXIucHJlc2V0cyc7XG5pbXBvcnQgeyBzZWdtZW50ZWRDb250cm9sUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9zZWdtZW50ZWQtY29udHJvbC9zZWdtZW50ZWQtY29udHJvbC5wcmVzZXRzJztcblxuZXhwb3J0IGludGVyZmFjZSBNb3J0YXJQcmVzZXRUaGVtZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29sb3JTY2hlbWU6ICdzeXN0ZW0nIHwgJ2xpZ2h0JyB8ICdkYXJrJztcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcmVzZXQgPSB7XG4gIHByZXNldDogJ2RlZmF1bHQnLFxuICB0aGVtZToge1xuICAgIG5hbWU6ICdweCcsXG4gICAgY29sb3JTY2hlbWU6ICdsaWdodCcsXG4gIH0gYXMgTW9ydGFyUHJlc2V0VGhlbWUsXG4gIE10ZUJ1dHRvbjogYnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVJY29uQnV0dG9uOiBpY29uQnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVJY29uOiBpY29uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVQcm9ncmVzc0JhcjogcHJvZ3Jlc3NCYXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVByb2dyZXNzU3Bpbm5lcjogcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVUb29sYmFyOiB0b29sYmFyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVDYXJkOiBjYXJkUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVDYXJkQnV0dG9uOiBjYXJkQnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVUcmVlOiB0cmVlUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVUYWc6IHRhZ1ByZXNldHMuZGVmYXVsdCxcbiAgTXRlQmFkZ2U6IGJhZGdlUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVMaW5rOiBsaW5rUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVBbGVydDogYWxlcnRQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUlucHV0OiBpbnB1dFByZXNldHMuZGVmYXVsdCxcbiAgTXRlRHJhd2VyOiBkcmF3ZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUFzaWRlOiBhc2lkZVByZXNldHMuZGVmYXVsdCxcbiAgTXRlQnJlYWRjcnVtYkl0ZW06IGJyZWFkY3J1bWJJdGVtUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVNb2RhbDogbW9kYWxQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUNoZWNrYm94OiBjaGVja2JveFByZXNldHMuZGVmYXVsdCxcbiAgTXRlUmFkaW86IHJhZGlvUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZSb290OiBuYXZSb290UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZIZWFkZXI6IG5hdkhlYWRlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2U3ViSGVhZGVyOiBuYXZTdWJIZWFkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdlNpZGViYXI6IG5hdlNpZGViYXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkNvbnRlbnQ6IG5hdkNvbnRlbnRQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkZvb3RlcjogbmF2Rm9vdGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZCdXR0b246IG5hdkJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2SWNvbkJ1dHRvbjogbmF2SWNvbkJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2SXRlbTogbmF2SXRlbVByZXNldHMuZGVmYXVsdCxcbiAgTXRlQnV0dG9uR3JvdXA6IGJ1dHRvbkdyb3VwUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVTd2l0Y2g6IHN3aXRjaFByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF0aXZlU2VsZWN0OiBuYXRpdmVTZWxlY3RQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVRleHRhcmVhOiB0ZXh0YXJlYVByZXNldHMuZGVmYXVsdCxcbiAgTXRlU2tlbGV0b246IHNrZWxldG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVTbGlkZXI6IHNsaWRlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlUmFuZ2VTbGlkZXI6IHJhbmdlU2xpZGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVTZWdtZW50ZWRDb250cm9sOiBzZWdtZW50ZWRDb250cm9sUHJlc2V0cy5kZWZhdWx0LFxufTtcblxuZXhwb3J0IHR5cGUgTW9ydGFyUHJlc2V0ID0gdHlwZW9mIGRlZmF1bHRQcmVzZXQ7XG5cbmV4cG9ydCBjb25zdCBweFByZXNldDogTW9ydGFyUHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdweCcsXG4gIHRoZW1lOiB7XG4gICAgbmFtZTogJ3B4JyxcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSxcbiAgTXRlQnV0dG9uOiBidXR0b25QcmVzZXRzLnB4LFxuICBNdGVJY29uQnV0dG9uOiBpY29uQnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMucHgsXG4gIE10ZVByb2dyZXNzQmFyOiBwcm9ncmVzc0JhclByZXNldHMucHgsXG4gIE10ZVByb2dyZXNzU3Bpbm5lcjogcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cy5weCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMucHgsXG4gIE10ZUNhcmQ6IGNhcmRQcmVzZXRzLnB4LFxuICBNdGVDYXJkQnV0dG9uOiBjYXJkQnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMucHgsXG4gIE10ZVRhZzogdGFnUHJlc2V0cy5weCxcbiAgTXRlQmFkZ2U6IGJhZGdlUHJlc2V0cy5weCxcbiAgTXRlTGluazogbGlua1ByZXNldHMucHgsXG4gIE10ZUFsZXJ0OiBhbGVydFByZXNldHMucHgsXG4gIE10ZUlucHV0OiBpbnB1dFByZXNldHMucHgsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5weCxcbiAgTXRlQXNpZGU6IGFzaWRlUHJlc2V0cy5weCxcbiAgTXRlQnJlYWRjcnVtYkl0ZW06IGJyZWFkY3J1bWJJdGVtUHJlc2V0cy5weCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5weCxcbiAgTXRlQ2hlY2tib3g6IGNoZWNrYm94UHJlc2V0cy5weCxcbiAgTXRlUmFkaW86IHJhZGlvUHJlc2V0cy5weCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMucHgsXG4gIE10ZU5hdkhlYWRlcjogbmF2SGVhZGVyUHJlc2V0cy5weCxcbiAgTXRlTmF2U3ViSGVhZGVyOiBuYXZTdWJIZWFkZXJQcmVzZXRzLnB4LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5weCxcbiAgTXRlTmF2Q29udGVudDogbmF2Q29udGVudFByZXNldHMucHgsXG4gIE10ZU5hdkZvb3RlcjogbmF2Rm9vdGVyUHJlc2V0cy5weCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLnB4LFxuICBNdGVOYXZJY29uQnV0dG9uOiBuYXZJY29uQnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlTmF2SXRlbTogbmF2SXRlbVByZXNldHMucHgsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMucHgsXG4gIE10ZVN3aXRjaDogc3dpdGNoUHJlc2V0cy5weCxcbiAgTXRlTmF0aXZlU2VsZWN0OiBuYXRpdmVTZWxlY3RQcmVzZXRzLnB4LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLnB4LFxuICBNdGVTa2VsZXRvbjogc2tlbGV0b25QcmVzZXRzLnB4LFxuICBNdGVTbGlkZXI6IHNsaWRlclByZXNldHMucHgsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMucHgsXG4gIE10ZVNlZ21lbnRlZENvbnRyb2w6IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzLnB4LFxufTtcblxuZXhwb3J0IGNvbnN0IGN4UHJlc2V0OiBNb3J0YXJQcmVzZXQgPSB7XG4gIHByZXNldDogJ2N4JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAnY3gnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9LFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMuY3gsXG4gIE10ZUljb25CdXR0b246IGljb25CdXR0b25QcmVzZXRzLmN4LFxuICBNdGVJY29uOiBpY29uUHJlc2V0cy5jeCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5jeCxcbiAgTXRlUHJvZ3Jlc3NTcGlubmVyOiBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzLmN4LFxuICBNdGVUb29sYmFyOiB0b29sYmFyUHJlc2V0cy5jeCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMuY3gsXG4gIE10ZUNhcmRCdXR0b246IGNhcmRCdXR0b25QcmVzZXRzLmN4LFxuICBNdGVUcmVlOiB0cmVlUHJlc2V0cy5jeCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLmN4LFxuICBNdGVCYWRnZTogYmFkZ2VQcmVzZXRzLmN4LFxuICBNdGVMaW5rOiBsaW5rUHJlc2V0cy5jeCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5jeCxcbiAgTXRlSW5wdXQ6IGlucHV0UHJlc2V0cy5jeCxcbiAgTXRlRHJhd2VyOiBkcmF3ZXJQcmVzZXRzLmN4LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLmN4LFxuICBNdGVCcmVhZGNydW1iSXRlbTogYnJlYWRjcnVtYkl0ZW1QcmVzZXRzLmN4LFxuICBNdGVNb2RhbDogbW9kYWxQcmVzZXRzLmN4LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLmN4LFxuICBNdGVSYWRpbzogcmFkaW9QcmVzZXRzLmN4LFxuICBNdGVOYXZSb290OiBuYXZSb290UHJlc2V0cy5jeCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLmN4LFxuICBNdGVOYXZTdWJIZWFkZXI6IG5hdlN1YkhlYWRlclByZXNldHMuY3gsXG4gIE10ZU5hdlNpZGViYXI6IG5hdlNpZGViYXJQcmVzZXRzLmN4LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5jeCxcbiAgTXRlTmF2Rm9vdGVyOiBuYXZGb290ZXJQcmVzZXRzLmN4LFxuICBNdGVOYXZCdXR0b246IG5hdkJ1dHRvblByZXNldHMuY3gsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLmN4LFxuICBNdGVOYXZJdGVtOiBuYXZJdGVtUHJlc2V0cy5jeCxcbiAgTXRlQnV0dG9uR3JvdXA6IGJ1dHRvbkdyb3VwUHJlc2V0cy5jeCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLmN4LFxuICBNdGVOYXRpdmVTZWxlY3Q6IG5hdGl2ZVNlbGVjdFByZXNldHMuY3gsXG4gIE10ZVRleHRhcmVhOiB0ZXh0YXJlYVByZXNldHMuY3gsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMuY3gsXG4gIE10ZVNsaWRlcjogc2xpZGVyUHJlc2V0cy5jeCxcbiAgTXRlUmFuZ2VTbGlkZXI6IHJhbmdlU2xpZGVyUHJlc2V0cy5jeCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMuY3gsXG59O1xuXG5leHBvcnQgY29uc3QgcnhQcmVzZXQ6IE1vcnRhclByZXNldCA9IHtcbiAgcHJlc2V0OiAncngnLFxuICB0aGVtZToge1xuICAgIG5hbWU6ICdyeCcsXG4gICAgY29sb3JTY2hlbWU6ICdsaWdodCcsXG4gIH0sXG4gIE10ZUJ1dHRvbjogYnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMucngsXG4gIE10ZUljb246IGljb25QcmVzZXRzLnJ4LFxuICBNdGVQcm9ncmVzc0JhcjogcHJvZ3Jlc3NCYXJQcmVzZXRzLnJ4LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMucngsXG4gIE10ZVRvb2xiYXI6IHRvb2xiYXJQcmVzZXRzLnJ4LFxuICBNdGVDYXJkOiBjYXJkUHJlc2V0cy5yeCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMucngsXG4gIE10ZVRyZWU6IHRyZWVQcmVzZXRzLnJ4LFxuICBNdGVUYWc6IHRhZ1ByZXNldHMucngsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMucngsXG4gIE10ZUxpbms6IGxpbmtQcmVzZXRzLnJ4LFxuICBNdGVBbGVydDogYWxlcnRQcmVzZXRzLnJ4LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLnJ4LFxuICBNdGVEcmF3ZXI6IGRyYXdlclByZXNldHMucngsXG4gIE10ZUFzaWRlOiBhc2lkZVByZXNldHMucngsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMucngsXG4gIE10ZU1vZGFsOiBtb2RhbFByZXNldHMucngsXG4gIE10ZUNoZWNrYm94OiBjaGVja2JveFByZXNldHMucngsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMucngsXG4gIE10ZU5hdlJvb3Q6IG5hdlJvb3RQcmVzZXRzLnJ4LFxuICBNdGVOYXZIZWFkZXI6IG5hdkhlYWRlclByZXNldHMucngsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5yeCxcbiAgTXRlTmF2U2lkZWJhcjogbmF2U2lkZWJhclByZXNldHMucngsXG4gIE10ZU5hdkNvbnRlbnQ6IG5hdkNvbnRlbnRQcmVzZXRzLnJ4LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMucngsXG4gIE10ZU5hdkJ1dHRvbjogbmF2QnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlTmF2SWNvbkJ1dHRvbjogbmF2SWNvbkJ1dHRvblByZXNldHMucngsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLnJ4LFxuICBNdGVCdXR0b25Hcm91cDogYnV0dG9uR3JvdXBQcmVzZXRzLnJ4LFxuICBNdGVTd2l0Y2g6IHN3aXRjaFByZXNldHMucngsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5yeCxcbiAgTXRlVGV4dGFyZWE6IHRleHRhcmVhUHJlc2V0cy5yeCxcbiAgTXRlU2tlbGV0b246IHNrZWxldG9uUHJlc2V0cy5yeCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLnJ4LFxuICBNdGVSYW5nZVNsaWRlcjogcmFuZ2VTbGlkZXJQcmVzZXRzLnJ4LFxuICBNdGVTZWdtZW50ZWRDb250cm9sOiBzZWdtZW50ZWRDb250cm9sUHJlc2V0cy5yeCxcbn07XG4iLCAiaW1wb3J0IHsgY3hQcmVzZXQsIGRlZmF1bHRQcmVzZXQsIE1vcnRhclByZXNldCwgcHhQcmVzZXQsIHJ4UHJlc2V0IH0gZnJvbSAnLi9wcmVzZXRzJztcbmltcG9ydCB7IGNvbXB1dGVkLCBTaWduYWwsIHNpZ25hbCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmNsYXNzIF9NdGVQcmVzZXRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBwcmVzZXRzID0gbmV3IE1hcDxzdHJpbmcsIE1vcnRhclByZXNldD4oW1xuICAgIFsnZ2xvYmFsJywgZGVmYXVsdFByZXNldF0sXG4gICAgWydkZWZhdWx0JywgZGVmYXVsdFByZXNldF0sXG4gICAgWydweCcsIHB4UHJlc2V0XSxcbiAgICBbJ2N4JywgY3hQcmVzZXRdLFxuICAgIFsncngnLCByeFByZXNldF0sXG4gIF0pO1xuXG4gIHByaXZhdGUgcHJlc2V0Q2hhbmdlZFNpZ25hbCA9IHNpZ25hbDx7IHByZXNldE5hbWU6IHN0cmluZzsgY29tcG9uZW50TmFtZTogc3RyaW5nIH0+KHtcbiAgICBwcmVzZXROYW1lOiBudWxsLFxuICAgIGNvbXBvbmVudE5hbWU6IG51bGwsXG4gIH0pO1xuXG4gIHB1YmxpYyBzZXRQcmVzZXQocHJlc2V0TmFtZTogc3RyaW5nLCBwcmVzZXQ6IFBhcnRpYWw8TW9ydGFyUHJlc2V0Pikge1xuICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgLi4uKHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSkgPz8gZGVmYXVsdFByZXNldCksXG4gICAgICAuLi5wcmVzZXQsXG4gICAgfSk7XG4gICAgdGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLnNldCh7IHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWU6IG51bGwgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29tcG9uZW50UHJlc2V0PEMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXQ+KFxuICAgIHByZXNldE5hbWU6IHN0cmluZyxcbiAgICBjb21wb25lbnROYW1lOiBDLFxuICAgIGNvbXBvbmVudFByZXNldDogUGFydGlhbDxNb3J0YXJQcmVzZXRbQ10+XG4gICkge1xuICAgIGNvbnN0IHNlbGVjdGVkUHJlc2V0ID0gdGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKSA/PyBkZWZhdWx0UHJlc2V0O1xuICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgLi4uc2VsZWN0ZWRQcmVzZXQsXG4gICAgICBbY29tcG9uZW50TmFtZV06IHtcbiAgICAgICAgLi4uKHNlbGVjdGVkUHJlc2V0W2NvbXBvbmVudE5hbWVdID8/ICh7fSBhcyBhbnkpKSxcbiAgICAgICAgLi4uY29tcG9uZW50UHJlc2V0LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLnByZXNldENoYW5nZWRTaWduYWwuc2V0KHsgcHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb21wb25lbnRQcmVzZXRQcm9wZXJ0eTxDIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0LCBQIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0W0NdPihcbiAgICBwcmVzZXROYW1lOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogQyxcbiAgICBwcm9wZXJ0eU5hbWU6IFAsXG4gICAgdmFsdWU6IE1vcnRhclByZXNldFtDXVtQXSB8IFBhcnRpYWw8TW9ydGFyUHJlc2V0W0NdW1BdPlxuICApIHtcbiAgICBjb25zdCBzZWxlY3RlZFByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSkgPz8gZGVmYXVsdFByZXNldDtcbiAgICBjb25zdCBzZWxlY3RlZENvbXBvbmVudFByZXNldCA9IHNlbGVjdGVkUHJlc2V0W2NvbXBvbmVudE5hbWVdIGFzIGFueTtcblxuICAgIC8vIElmIHNldHRpbmcgYW4gb2JqZWN0IHZhbHVlIGJlIHN1cmUgdG8gc3ByZWFkIG92ZXIgZXhpc3RpbmcgdmFsdWVcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5wcmVzZXRzLnNldChwcmVzZXROYW1lLCB7XG4gICAgICAgIC4uLnNlbGVjdGVkUHJlc2V0LFxuICAgICAgICBbY29tcG9uZW50TmFtZV06IHtcbiAgICAgICAgICAuLi5zZWxlY3RlZENvbXBvbmVudFByZXNldCxcbiAgICAgICAgICBbcHJvcGVydHlOYW1lXToge1xuICAgICAgICAgICAgLi4uc2VsZWN0ZWRDb21wb25lbnRQcmVzZXRbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICAgIC4uLnZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlIGp1c3Qgc2V0IHRoZSB2YWx1ZVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5wcmVzZXRzLnNldChwcmVzZXROYW1lLCB7XG4gICAgICAgIC4uLnNlbGVjdGVkUHJlc2V0LFxuICAgICAgICBbY29tcG9uZW50TmFtZV06IHtcbiAgICAgICAgICAuLi5zZWxlY3RlZENvbXBvbmVudFByZXNldCxcbiAgICAgICAgICBbcHJvcGVydHlOYW1lXTogdmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLnNldCh7IHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWUgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJlc2V0KHByZXNldE5hbWU6IHN0cmluZyk6IE1vcnRhclByZXNldCB7XG4gICAgY29uc3QgcHJlc2V0ID0gdGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKTtcbiAgICBpZiAoIXByZXNldCkge1xuICAgICAgY29uc29sZS5lcnJvcihgTXRlUHJlc2V0U2VydmljZTogQSBwcmVzZXQgd2l0aCB0aGUgbmFtZSBcIiR7cHJlc2V0TmFtZX1cIiBkb2VzIG5vdCBleGlzdGApO1xuICAgIH1cbiAgICByZXR1cm4gcHJlc2V0O1xuICB9XG5cbiAgcHVibGljIGdldENvbXBvbmVudFByZXNldDxDIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0PihcbiAgICBwcmVzZXROYW1lOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogQ1xuICApOiBNb3J0YXJQcmVzZXRbQ10ge1xuICAgIGNvbnN0IHByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSk7XG4gICAgY29uc3QgY29tcG9uZW50UHJlc2V0ID0gcHJlc2V0W2NvbXBvbmVudE5hbWVdO1xuICAgIGlmICghcHJlc2V0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBNdGVQcmVzZXRTZXJ2aWNlOiBBIHByZXNldCB3aXRoIHRoZSBuYW1lIFwiJHtwcmVzZXROYW1lfVwiIGRvZXMgbm90IGV4aXN0LmApO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50UHJlc2V0O1xuICB9XG5cbiAgcHVibGljIHNlbGVjdFByZXNldChwcmVzZXROYW1lOiBzdHJpbmcpOiBTaWduYWw8TW9ydGFyUHJlc2V0PiB7XG4gICAgbGV0IGZpcnN0RW1pdCA9IHRydWU7XG4gICAgcmV0dXJuIGNvbXB1dGVkKHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbCwgKGNoYW5nZSwgc2V0KSA9PiB7XG4gICAgICBpZiAoZmlyc3RFbWl0KSB7XG4gICAgICAgIHNldCh0aGlzLmdldFByZXNldChwcmVzZXROYW1lKSk7XG4gICAgICAgIGZpcnN0RW1pdCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChjaGFuZ2UucHJlc2V0TmFtZSA9PT0gcHJlc2V0TmFtZSkge1xuICAgICAgICBzZXQodGhpcy5nZXRQcmVzZXQocHJlc2V0TmFtZSkpO1xuICAgICAgfVxuICAgIH0pIGFzIFNpZ25hbDxNb3J0YXJQcmVzZXQ+O1xuICB9XG5cbiAgcHVibGljIHNlbGVjdENvbXBvbmVudFByZXNldDxDIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0PihcbiAgICBwcmVzZXROYW1lOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogQ1xuICApOiBTaWduYWw8TW9ydGFyUHJlc2V0W0NdPiB7XG4gICAgbGV0IGZpcnN0RW1pdCA9IHRydWU7XG4gICAgcmV0dXJuIGNvbXB1dGVkKHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbCwgKGNoYW5nZSwgc2V0KSA9PiB7XG4gICAgICBpZiAoZmlyc3RFbWl0KSB7XG4gICAgICAgIHNldCh0aGlzLmdldENvbXBvbmVudFByZXNldChwcmVzZXROYW1lLCBjb21wb25lbnROYW1lKSk7XG4gICAgICAgIGZpcnN0RW1pdCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKGNoYW5nZS5wcmVzZXROYW1lID09PSBwcmVzZXROYW1lICYmICFjaGFuZ2UuY29tcG9uZW50TmFtZSkgfHxcbiAgICAgICAgKGNoYW5nZS5wcmVzZXROYW1lID09PSBwcmVzZXROYW1lICYmIGNoYW5nZS5jb21wb25lbnROYW1lID09PSBjb21wb25lbnROYW1lKVxuICAgICAgKSB7XG4gICAgICAgIHNldCh0aGlzLmdldENvbXBvbmVudFByZXNldChwcmVzZXROYW1lLCBjb21wb25lbnROYW1lKSk7XG4gICAgICB9XG4gICAgfSkgYXMgU2lnbmFsPE1vcnRhclByZXNldFtDXT47XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZVByZXNldFNlcnZpY2UgPSBuZXcgX010ZVByZXNldFNlcnZpY2UoKTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzICovXG5pbXBvcnQgeyBDb250ZXh0Q29uc3VtZXIgfSBmcm9tICdAbGl0LWxhYnMvY29udGV4dCc7XG5pbXBvcnQgeyBQcm9wZXJ0eURlY2xhcmF0aW9uLCBSZWFjdGl2ZUVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHksIHN0YXRlIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtcbiAgQ29uc3RydWN0b3IsXG4gIGlzU3NyLFxuICBNdGVFbGVtZW50LFxuICBNdGVQcmVzZXRTZXJ2aWNlLFxuICBwcmVzZXRDb250ZXh0LFxuICBzaWduYWwsXG4gIGNvbXB1dGVkLFxuICBVbnN1YnNjcmliZXIsXG59IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBNb3J0YXJQcmVzZXQgfSBmcm9tICcuL3ByZXNldHMnO1xuXG5leHBvcnQgdHlwZSBQcmVzZXRPcHRpb25zID0gJ21kJyB8ICdzbScgfCAnbGcnIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcmVzZXRFbGVtZW50SW50ZXJmYWNlPFA+IHtcbiAgLyoqIEBpZ25vcmUgKi9cbiAgcmVhZG9ubHkgX19jb21wb25lbnROYW1lOiBrZXlvZiBNb3J0YXJQcmVzZXQ7XG5cbiAgLyoqIFNlbGVjdHMgdGhlIHByZXNldCBmb3IgdGhpcyBjb21wb25lbnQuIE92ZXJyaWRlcyB0aGUgZ2xvYmFsIHByZXNldCBmb3IgdGhpcyBpbnN0YW5jZSBvZiB0aGlzIGNvbXBvbmVudC4gKi9cbiAgcHJlc2V0OiBzdHJpbmc7XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgYXBwbGllZFByZXNldDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByZXNldE1peGluRmFjdG9yeU9wdGlvbnMge1xuICByZWZsZWN0QXBwbGllZFByZXNldDogYm9vbGVhbjtcbn1cblxuY29uc3Qge1xuICBpcyxcbiAgZGVmaW5lUHJvcGVydHksXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBnZXRQcm90b3R5cGVPZixcbn0gPSBPYmplY3Q7XG5cbmV4cG9ydCBjb25zdCBQcmVzZXRNaXhpbkZhY3RvcnkgPSA8UD4oXG4gIGNvbXBvbmVudE5hbWU6IGtleW9mIE1vcnRhclByZXNldCxcbiAgb3B0aW9uczogUHJlc2V0TWl4aW5GYWN0b3J5T3B0aW9ucyA9IHsgcmVmbGVjdEFwcGxpZWRQcmVzZXQ6IGZhbHNlIH1cbikgPT4ge1xuICByZXR1cm4gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICAgIGNsYXNzIFByZXNldEVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHJlYWRvbmx5IF9fY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWU7XG5cbiAgICAgIC8qKiBNYXAgdGhhdCBzdG9yZXMgcHJpdmF0ZSB2YWx1ZXMgdGhhdCB0YWtlIHByZWNlZGVuY2Ugb3ZlciBwcmVzZXQgdmFsdWVzICovXG4gICAgICBwcm90ZWN0ZWQgX3ZhbHVlTWFwID0gbmV3IE1hcDxQcm9wZXJ0eUtleSwgUFtrZXlvZiBQXT4oKTtcblxuICAgICAgLyoqIE1hcCB0aGF0IHN0b3JlcyBmYWxsYmFjayBwcmVzZXQgdmFsdWVzIGVtaXR0ZWQgYnkgdGhlIHByZXNldENvbnRyb2xsZXIgKi9cbiAgICAgIHByb3RlY3RlZCBfcHJlc2V0TWFwID0gbmV3IE1hcDxQcm9wZXJ0eUtleSwgUFtrZXlvZiBQXT4oKTtcblxuICAgICAgLyoqIFNlbGVjdHMgYSBzcGVjaWZpYyBwcmVzZXQgZm9yIHRoaXMgY29tcG9uZW50IGluc3RhbmNlLiBPdmVycmlkZXMgdGhlIGN1cnJlbnQgZ2xvYmFsIHByZXNldC4gKi9cbiAgICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSlcbiAgICAgIHNldCBwcmVzZXQocHJlc2V0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJlc2V0ID0gcHJlc2V0O1xuICAgICAgICB0aGlzLl9hY3RpdmVQcmVzZXRTaWduYWwuc2V0KHByZXNldCk7XG4gICAgICAgIGlmIChpc1NzcigpKSB7XG4gICAgICAgICAgLy8gU3RvcCBTU1IgY29uc3RydWN0b3IgbGlzdGVuZXIgaWYgc3RpbGwgb3Blbi5cbiAgICAgICAgICB0aGlzLnNzckNvbnN0cnVjdG9yU3ViPy4oKTtcbiAgICAgICAgICB0aGlzLnNzckNvbnN0cnVjdG9yU3ViID0gbnVsbDtcbiAgICAgICAgICBjb25zdCBwcmVzZXQgPSBNdGVQcmVzZXRTZXJ2aWNlLmdldFByZXNldCh0aGlzLnByZXNldCA/PyAnZ2xvYmFsJyk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVTc3JQcmVzZXRDaGFuZ2VzKHByZXNldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGdldCBwcmVzZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVzZXQ7XG4gICAgICB9XG4gICAgICBwcml2YXRlIF9wcmVzZXQgPSAnZ2xvYmFsJztcblxuICAgICAgQHByb3BlcnR5KHsgcmVmbGVjdDogb3B0aW9ucz8ucmVmbGVjdEFwcGxpZWRQcmVzZXQgPz8gZmFsc2UgfSkgYXBwbGllZFByZXNldCA9ICdnbG9iYWwnO1xuXG4gICAgICBAc3RhdGUoKSBwcml2YXRlIF9hcHBsaWVkUHJlc2V0Pzogc3RyaW5nO1xuXG4gICAgICAvKiogS2VlcHMgY29uc3RydWN0b3IgcHJlc2V0IHN1YnNjcmlwdGlvbiBvcGVuIHVudGlsIHdpbGxVcGRhdGUgKi9cbiAgICAgIHByaXZhdGUgc3NyQ29uc3RydWN0b3JTdWI6IFVuc3Vic2NyaWJlcjtcbiAgICAgIHByaXZhdGUgcHJldmlvdXNDb21wb25lbnRVbnN1YjogVW5zdWJzY3JpYmVyO1xuXG4gICAgICAvKiogRW1pdHMgd2hlbmV2ZXIgdGhlIGxvY2FsIHByZXNldCB2YWx1ZSBjaGFuZ2VzLiAqL1xuICAgICAgcHJpdmF0ZSBfYWN0aXZlUHJlc2V0U2lnbmFsID0gc2lnbmFsPHN0cmluZz4obnVsbCk7XG4gICAgICBwcml2YXRlIF9wYXJlbnRQcmVzZXRTaWduYWwgPSBzaWduYWw8c3RyaW5nPihudWxsKTtcblxuICAgICAgcHJpdmF0ZSBfcHJlc2V0Q29udGV4dCA9IG5ldyBDb250ZXh0Q29uc3VtZXIodGhpcywge1xuICAgICAgICBjb250ZXh0OiBwcmVzZXRDb250ZXh0LFxuICAgICAgICBzdWJzY3JpYmU6IHRydWUsXG4gICAgICAgIGNhbGxiYWNrOiAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLl9wYXJlbnRQcmVzZXRTaWduYWwuc2V0KCh2YWx1ZSA9PT0gJycgPyBudWxsIDogdmFsdWUpID8/ICdnbG9iYWwnKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvKipcbiAgICAgICAqIE92ZXJyaWRlcyB0aGUgZGVmYXVsdCBnZXRQcm9wZXJ0eURlc2NyaXB0b3IgbWV0aG9kIHRvIGNoZWNrIGZvciB0aGUgY3VzdG9tXG4gICAgICAgKiBgaXNQcmVzZXRgIG9wdGlvbi4gRGVzY3JpcHRvcnMgb2YgcHJvcGVydGllcyB0aGF0IGFyZSBkZWNsYXJlZCB3aXRoIHRoZSBgaXNQcmVzZXRgXG4gICAgICAgKiBvcHRpb24gYXJlIGRlZmluZWQgd2l0aCBzcGVjaWFsIGdldHRlci9zZXR0ZXIgbG9naWMgdGhhdCBzZXRzIHZhbHVlIHRvIHZhbHVlTWFwXG4gICAgICAgKiBhbmQgZ2V0cyB2YWx1ZXMgZnJvbSB0aGUgdmFsdWVNYXAgYnV0IHRoZW4gYWxzbyBmYWxscyBiYWNrIHRvIGFueSB2YWx1ZSBpbiB0aGUgcHJlc2V0TWFwXG4gICAgICAgKlxuICAgICAgICogVGhlIHByZXNldE1hcCBpcyBwb3B1bGF0ZWQgYWJvdmUgZnJvbSB2YWx1ZXMgZnJvbSB0aGUgcHJlc2V0Q29udHJvbGxlciB3aGVuZXZlciB0aGVcbiAgICAgICAqIHByZXNldCBmb3IgdGhpcyBjb21wb25lbnQgaXMgY2hhbmdlZCBnbG9iYWxseS5cbiAgICAgICAqL1xuICAgICAgc3RhdGljIGdldFByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgICAgbmFtZTogUHJvcGVydHlLZXksXG4gICAgICAgIGtleTogc3RyaW5nIHwgc3ltYm9sLFxuICAgICAgICBvcHRpb25zOiBQcm9wZXJ0eURlY2xhcmF0aW9uXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgeyBnZXQsIHNldCB9ID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMucHJvdG90eXBlLCBuYW1lKSA/PyB7XG4gICAgICAgICAgZ2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNba2V5IGFzIGtleW9mIHR5cGVvZiB0aGlzXTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQsIHY6IHVua25vd24pIHtcbiAgICAgICAgICAgICh0aGlzIGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZyB8IHN5bWJvbCwgdW5rbm93bj4pW2tleV0gPSB2O1xuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZ2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCk6IGFueSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGdldHRlciBsb2dpYyB0aGF0IGdldHMgZnJvbSB0aGUgdmFsdWVNYXAgb3IgcHJlc2V0TWFwXG4gICAgICAgICAgICBpZiAob3B0aW9uc1snaXNQcmVzZXQnXSkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fdmFsdWVNYXAgYXMgTWFwPFxuICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eUtleSxcbiAgICAgICAgICAgICAgICAgICAgUFtrZXlvZiBQXVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICkuZ2V0KG5hbWUpIHx8XG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgKHRoaXMgYXMge30gYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pLl9wcmVzZXRNYXAgYXMgTWFwPFxuICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eUtleSxcbiAgICAgICAgICAgICAgICAgICAgUFtrZXlvZiBQXVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICkuZ2V0KG5hbWUpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEZWZhdWx0IHByb3BlcnR5IGdldHRlciBsb2dpY1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBnZXQ/LmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQodGhpczogUmVhY3RpdmVFbGVtZW50LCB2YWx1ZTogdW5rbm93bikge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBzZXR0ZXIgbG9naWMgdGhhdCBzZXRzIHRvIHRoZSB2YWx1ZU1hcFxuICAgICAgICAgICAgaWYgKG9wdGlvbnNbJ2lzUHJlc2V0J10pIHtcbiAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSAoXG4gICAgICAgICAgICAgICAgKHRoaXMgYXMge30gYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pLl92YWx1ZU1hcCBhcyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+XG4gICAgICAgICAgICAgICkuZ2V0KG5hbWUpO1xuICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKHRoaXMgYXMge30gYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pLl92YWx1ZU1hcCBhcyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+XG4gICAgICAgICAgICAgICkuc2V0KG5hbWUsIHZhbHVlIGFzIGFueSk7XG4gICAgICAgICAgICAgIC8vIER1cmluZyBTU1Igd2UgbmVlZCB0byB1cGRhdGUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlYWN0aXZlRWxlbWVudCkucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gT24gdGhlIGNsaWVudCB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBjdXJyZW50IHVwZGF0ZSB0byBmaW5pc2hcbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICh0aGlzIGFzIHVua25vd24gYXMgUmVhY3RpdmVFbGVtZW50KS5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVmYXVsdCBwcm9wZXJ0eSBzZXR0ZXIgbG9naWNcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGdldD8uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgc2V0IS5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBSZWFjdGl2ZUVsZW1lbnQpLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgICAgIC8vIFN1YnNjcmliZXMgZm9yIGNoYW5nZXMgdG8gdGhpcyBjb21wb25lbnRzIGFjdGl2ZSBwcmVzZXQgdG8gdXBkYXRlIGFsbCByZWxldmFudCBwcm9wcyBwcmVzZXQgdmFsdWVzXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKFxuICAgICAgICAgIGNvbXB1dGVkKFxuICAgICAgICAgICAgW3RoaXMuX2FjdGl2ZVByZXNldFNpZ25hbCwgdGhpcy5fcGFyZW50UHJlc2V0U2lnbmFsXSxcbiAgICAgICAgICAgIChbYWN0aXZlUHJlc2V0LCBwYXJlbnRQcmVzZXRdLCBzZXQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGFjdGl2ZVByZXNldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19sb2NhbFByZXNldFRoZW1lID1cbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVByZXNldCA9PT0gJ2dsb2JhbCdcbiAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgIDogTXRlUHJlc2V0U2VydmljZS5nZXRDb21wb25lbnRQcmVzZXQoYWN0aXZlUHJlc2V0LCAndGhlbWUnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZSA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCd0aGVtZScsIG51bGwpO1xuXG4gICAgICAgICAgICAgIHRoaXMuX2FwcGxpZWRQcmVzZXQgPSBhY3RpdmVQcmVzZXQgPz8gcGFyZW50UHJlc2V0ID8/ICdnbG9iYWwnO1xuICAgICAgICAgICAgICB0aGlzLmFwcGxpZWRQcmVzZXQgPSBNdGVQcmVzZXRTZXJ2aWNlLmdldENvbXBvbmVudFByZXNldChcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBsaWVkUHJlc2V0LFxuICAgICAgICAgICAgICAgICdwcmVzZXQnXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgLy8gVW5zdWJzY3JpYmUgdG8gcHJldmlvdXMgY29tcG9uZW50IHByZXNldCBjaGFuZ2VzXG4gICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDb21wb25lbnRVbnN1Yj8uKCk7XG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSBwcm9wcyBpZiBuZXcgY29tcG9uZW50IHByZXNldCBlbWl0c1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ29tcG9uZW50VW5zdWIgPSBNdGVQcmVzZXRTZXJ2aWNlLnNlbGVjdENvbXBvbmVudFByZXNldChcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBsaWVkUHJlc2V0LFxuICAgICAgICAgICAgICAgIHRoaXMuX19jb21wb25lbnROYW1lXG4gICAgICAgICAgICAgICkuc3Vic2NyaWJlKChuZXdQcmVzZXQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobmV3UHJlc2V0KSB7XG4gICAgICAgICAgICAgICAgICBzZXQobmV3UHJlc2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICkuc3Vic2NyaWJlKChuZXdQcmVzZXRzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvbGRWYWx1ZXNNYXAgPSBuZXcgTWFwKHRoaXMuX3ByZXNldE1hcCk7XG4gICAgICAgICAgICBjb25zdCBvbGRQcm9wcyA9IEFycmF5LmZyb20odGhpcy5fcHJlc2V0TWFwLmtleXMoKSk7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IE9iamVjdC5rZXlzKG5ld1ByZXNldHMgPz8ge30pO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8ga2V5cyBpbiB0aGUgbmV3IHByZXNldHMgY2xlYXIgYWxsIHByZXNldCB2YWx1ZXNcbiAgICAgICAgICAgIGlmIChuZXdQcm9wcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggb2xkIHNldCBwcm9wcyBhbmQgbmV3IG9uZXNcbiAgICAgICAgICAgIC8vIFJlbW92ZSBvbGQgb25lcyAmIHNldCBuZXcgb25lc1xuICAgICAgICAgICAgLy8gRmluYWxseSBmb3JjZSBhbiB1cGRhdGUgZm9yIGVhY2ggcHJvcFxuICAgICAgICAgICAgWy4uLm9sZFByb3BzLCAuLi5uZXdQcm9wc10uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChuZXdQcmVzZXRzW2tleV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuc2V0KGtleSwgbmV3UHJlc2V0c1trZXldKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKGtleSwgb2xkVmFsdWVzTWFwLmdldChrZXkpID8/IG51bGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c0NvbXBvbmVudFVuc3ViPy4oKTtcbiAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1Yj8uKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHN1cGVyKGFyZ3MpO1xuXG4gICAgICAgIC8vIFRPRE8ocmVlY2UpOiBFbnN1cmUgd2UgdXBkYXRlIHRoaXMgdG8gc3VwcG9ydCBjb250ZXh0IHdoZW4gdGhhdCBpcyBTU1IgRnJpZW5kbHk6IGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8zMzY1XG4gICAgICAgIC8vIEhhbmRsZSBzZXR0aW5nIHByZXNldCBkZWZhdWx0cyBpbiBTU1JcbiAgICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgICB0aGlzLnNzckNvbnN0cnVjdG9yU3ViID0gTXRlUHJlc2V0U2VydmljZS5zZWxlY3RQcmVzZXQodGhpcy5wcmVzZXQgPz8gJ2dsb2JhbCcpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChwcmVzZXQpID0+IHRoaXMuaGFuZGxlU3NyUHJlc2V0Q2hhbmdlcyhwcmVzZXQpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcml2YXRlIGhhbmRsZVNzclByZXNldENoYW5nZXMocHJlc2V0OiBNb3J0YXJQcmVzZXQpIHtcbiAgICAgICAgaWYgKHByZXNldCkge1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFByZXNldHMgPSBwcmVzZXRbdGhpcy5fX2NvbXBvbmVudE5hbWVdO1xuICAgICAgICAgIGNvbnN0IG9sZFByb3BzID0gQXJyYXkuZnJvbSh0aGlzLl9wcmVzZXRNYXAua2V5cygpKTtcbiAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudFByZXNldHMgPz8ge30pO1xuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGtleXMgaW4gdGhlIG5ldyBwcmVzZXRzIGNsZWFyIGFsbCBwcmVzZXQgdmFsdWVzXG4gICAgICAgICAgaWYgKG5ld1Byb3BzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmNsZWFyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBvbGQgc2V0IHByb3BzIGFuZCBuZXcgb25lc1xuICAgICAgICAgIC8vIFJlbW92ZSBvbGQgb25lcyAmIHNldCBuZXcgb25lc1xuICAgICAgICAgIC8vIEZpbmFsbHkgZm9yY2UgYW4gdXBkYXRlIGZvciBlYWNoIHByb3BcbiAgICAgICAgICBbLi4ub2xkUHJvcHMsIC4uLm5ld1Byb3BzXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRQcmVzZXRzW2tleV0pIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLnNldChrZXksIGNvbXBvbmVudFByZXNldHNba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoa2V5LCBudWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmFwcGxpZWRQcmVzZXQgPSBwcmVzZXRbJ3ByZXNldCddO1xuICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnYXBwbGllZFByZXNldCcsIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBQcmVzZXRFbGVtZW50IGFzIENvbnN0cnVjdG9yPFByZXNldEVsZW1lbnRJbnRlcmZhY2U8UD4+ICYgVDtcbiAgfTtcbn07XG4iLCAiaW1wb3J0IHsgUHJvcGVydHlEZWNsYXJhdGlvbiB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByZXNldFByb3BlcnR5PFQ+KG9wdGlvbnM/OiBQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gIHJldHVybiBwcm9wZXJ0eSh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBpc1ByZXNldDogdHJ1ZSxcbiAgfSBhcyBhbnkpO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdAbGl0LWxhYnMvY29udGV4dCc7XG5cbmV4cG9ydCBjb25zdCBwcmVzZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxzdHJpbmc+KCdNVEVfUFJFU0VUJyk7XG4iLCAiaW1wb3J0IHsgUmVhY3RpdmVDb250cm9sbGVySG9zdCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBNdGVQcmVzZXRTZXJ2aWNlIH0gZnJvbSAnLi4vcHJlc2V0cyc7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBNdGVFbGVtZW50IH0gZnJvbSAnLi4vYmFzZS1jbGFzc2VzJztcblxuY29uc3QgZ2xvYmFsUHJlc2V0JCA9IE10ZVByZXNldFNlcnZpY2Uuc2VsZWN0UHJlc2V0KCdnbG9iYWwnKTtcbmNvbnN0IGdsb2JhbFByZXNldE5hbWUkID0gY29tcHV0ZWQoZ2xvYmFsUHJlc2V0JCwgKHByZXNldCkgPT4gcHJlc2V0LnByZXNldCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGllZFByZXNldENvbnRleHQge1xuICBwcmVzZXROYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUHJlc2V0IGlzIGRldGVybWluZWQgZnJvbSBlaXRoZXIgdGhlIHBhcmVudCBwcmVzZXQgY29udGV4dCBvciBhIGxvY2FsIHByZXNldCBwcm9wZXJ0eS5cbiAqIFRoaXMgY29udHJvbGxlciBrZWVwcyB0cmFjayBvZiB0aGUgYWN0dWFsIGFjdGl2ZSBwcmVzZXQgYXBwbGllZCB0byB0aGUgY3VycmVudCBjb21wb25lbnQuXG4gKiBJZiBhIGNhbGxiYWNrIGlzIGdpdmVuIGl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIHRoYXQgY29udGV4dCBjaGFuZ2VzLiBPdGhlcndpc2UgY29udHJvbGxlclxuICogbWV0aG9kcyBjYW4gYmUgY2FsbGVkIHdoZW4gbmVlZGVkLlxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgZXZlbiB3aXRoaW4gZWxlbWVudHMgdGhhdCBkbyBub3QgaGF2ZSB0aGVpciBvd24gcHJlc2V0XG4gKiBvcHRpb25zIChha2EgZXh0ZW5kIHRoZSBwcmVzZXRNaXhpbikuXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWVkUHJlc2V0Q29udGV4dENvbnRyb2xsZXIge1xuICBwcml2YXRlIGFwcGxpZWRQcmVzZXROYW1lID0gJ2dsb2JhbCc7XG4gIHByaXZhdGUgYWN0aXZlR2xvYmFsUHJlc2V0TmFtZSA9ICdkZWZhdWx0JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGhvc3Q6IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgJiBNdGVFbGVtZW50LFxuICAgIHByaXZhdGUgY2FsbGJhY2s/OiAoY29udGV4dDogQXBwbGllZFByZXNldENvbnRleHQpID0+IHZvaWRcbiAgKSB7XG4gICAgdGhpcy5ob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICB9XG5cbiAgaG9zdENvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmhvc3Quc3Vicy5wdXNoKFxuICAgICAgZ2xvYmFsUHJlc2V0TmFtZSQuc3Vic2NyaWJlKChnbG9iYWxQcmVzZXROYW1lKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlR2xvYmFsUHJlc2V0TmFtZSA9IGdsb2JhbFByZXNldE5hbWU7XG4gICAgICAgIHRoaXMudXBkYXRlQXBwbGllZFByZXNldENvbnRleHQoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLmV4ZWNDYWxsYmFjaygpO1xuICB9XG5cbiAgaG9zdFVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUFwcGxpZWRQcmVzZXRDb250ZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIGV4ZWNDYWxsYmFjaygpIHtcbiAgICB0aGlzLmNhbGxiYWNrPy4oe1xuICAgICAgcHJlc2V0TmFtZTogdGhpcy5hcHBsaWVkUHJlc2V0TmFtZSxcbiAgICB9IGFzIEFwcGxpZWRQcmVzZXRDb250ZXh0KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQXBwbGllZFByZXNldENvbnRleHQoKSB7XG4gICAgbGV0IHVwZGF0ZWQgPSBmYWxzZTtcbiAgICBjb25zdCBuZXdQcmVzZXROYW1lID0gKHRoaXMuaG9zdCBhcyBhbnkpLmFwcGxpZWRQcmVzZXQgPz8gdGhpcy5hY3RpdmVHbG9iYWxQcmVzZXROYW1lO1xuICAgIGlmIChuZXdQcmVzZXROYW1lICE9PSB0aGlzLmFwcGxpZWRQcmVzZXROYW1lKSB7XG4gICAgICB0aGlzLmFwcGxpZWRQcmVzZXROYW1lID0gbmV3UHJlc2V0TmFtZTtcbiAgICAgIHVwZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZCkge1xuICAgICAgdGhpcy5leGVjQ2FsbGJhY2soKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlUHJlc2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBsaWVkUHJlc2V0TmFtZTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgTGl0RWxlbWVudCwgUHJvcGVydHlWYWx1ZU1hcCwgUmVhY3RpdmVFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IGlzU3NyIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxudHlwZSBVcGRhdGVIYW5kbGVyID0gKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZU1hcDxhbnk+KSA9PiB2b2lkO1xuXG5pbnRlcmZhY2UgT25VcGRhdGVPcHRpb25zIHtcbiAgLyoqXG4gICAqIElmIHRydWUsIHdpbGwgb25seSBzdGFydCB3YXRjaGluZyBhZnRlciB0aGUgaW5pdGlhbCB1cGRhdGUvcmVuZGVyXG4gICAqL1xuICB3YWl0VW50aWxGaXJzdFVwZGF0ZT86IGJvb2xlYW47XG5cbiAgLyoqIERldGVybWluZXMgd2hlcmUgdGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQuIERlZmF1bHRzIHRvIGBjbGllbnRgLiAqL1xuICBvbj86ICdjbGllbnQnIHwgJ3NzcicgfCAnYm90aCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblVwZGF0ZShwcm9wTmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBvcHRpb25zPzogT25VcGRhdGVPcHRpb25zKSB7XG4gIGNvbnN0IHJlc29sdmVkT3B0aW9uczogUmVxdWlyZWQ8T25VcGRhdGVPcHRpb25zPiA9IHtcbiAgICB3YWl0VW50aWxGaXJzdFVwZGF0ZTogZmFsc2UsXG4gICAgb246ICdjbGllbnQnLFxuICAgIC4uLm9wdGlvbnMsXG4gIH07XG4gIHJldHVybiA8RWxlbUNsYXNzIGV4dGVuZHMgTGl0RWxlbWVudD4ocHJvdG86IEVsZW1DbGFzcywgZGVjb3JhdGVkRm5OYW1lOiBQcm9wZXJ0eUtleSkgPT4ge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLS0gdXBkYXRlIGlzIGEgcHJvdGVjdGVkIHByb3BlcnR5XG4gICAgY29uc3QgeyB3aWxsVXBkYXRlIH0gPSBwcm90bztcbiAgICBjb25zdCBfcHJvcE5hbWVzID0gQXJyYXkuaXNBcnJheShwcm9wTmFtZXMpID8gcHJvcE5hbWVzIDogW3Byb3BOYW1lc107XG4gICAgY29uc3QgcHJvcE5hbWVLZXlzID0gX3Byb3BOYW1lcyBhcyAoa2V5b2YgRWxlbUNsYXNzKVtdO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLS0gdXBkYXRlIGlzIGEgcHJvdGVjdGVkIHByb3BlcnR5XG4gICAgcHJvdG8ud2lsbFVwZGF0ZSA9IGZ1bmN0aW9uICh0aGlzOiBFbGVtQ2xhc3MsIGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZU1hcDxhbnk+KSB7XG4gICAgICBpZiAocHJvcE5hbWVLZXlzLnNvbWUoKGtleSkgPT4gY2hhbmdlZFByb3BzLmhhcyhrZXkpKSkge1xuICAgICAgICBpZiAoIXJlc29sdmVkT3B0aW9ucy53YWl0VW50aWxGaXJzdFVwZGF0ZSB8fCAodGhpcyBhcyB1bmtub3duIGFzIExpdEVsZW1lbnQpLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICBjb25zdCBzc3IgPSBpc1NzcigpO1xuICAgICAgICAgIGlmIChyZXNvbHZlZE9wdGlvbnMub24gPT09ICdjbGllbnQnICYmICFzc3IpIHtcbiAgICAgICAgICAgICh0aGlzW2RlY29yYXRlZEZuTmFtZV0gYXMgdW5rbm93biBhcyBVcGRhdGVIYW5kbGVyKShjaGFuZ2VkUHJvcHMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzb2x2ZWRPcHRpb25zLm9uID09PSAnc3NyJyAmJiBzc3IpIHtcbiAgICAgICAgICAgICh0aGlzW2RlY29yYXRlZEZuTmFtZV0gYXMgdW5rbm93biBhcyBVcGRhdGVIYW5kbGVyKShjaGFuZ2VkUHJvcHMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzb2x2ZWRPcHRpb25zLm9uID09PSAnYm90aCcpIHtcbiAgICAgICAgICAgICh0aGlzW2RlY29yYXRlZEZuTmFtZV0gYXMgdW5rbm93biBhcyBVcGRhdGVIYW5kbGVyKShjaGFuZ2VkUHJvcHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2lsbFVwZGF0ZS5jYWxsKHRoaXMsIGNoYW5nZWRQcm9wcyk7XG4gICAgfTtcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2Jhc2UuanMnO1xuLyoqXG4gKiBJdGVtcyBpbiB0aGlzIGZpbGUgYXJlIG1vZGlmaWNhdGlvbnMgb2Ygb2YgdGhlIGRlY29yYXRvcnMgaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2Jsb2IvbWFpbi9wYWNrYWdlcy9yZWFjdGl2ZS1lbGVtZW50L3NyYy9kZWNvcmF0b3JzL2N1c3RvbS1lbGVtZW50LnRzXG4gKlxuICogV2UndmUgYWRkZWQgY2hlY2tzIHRvIHByZXZlbnQgcmUtcmVnaXN0cmF0aW9ucyBmcm9tIHRocm93aW5nIGhhcmQgZXJyb3JzLlxuICovXG5cbi8qKlxuICogQWxsb3cgZm9yIGN1c3RvbSBlbGVtZW50IGNsYXNzZXMgd2l0aCBwcml2YXRlIGNvbnN0cnVjdG9yc1xuICovXG50eXBlIEN1c3RvbUVsZW1lbnRDbGFzcyA9IE9taXQ8dHlwZW9mIEhUTUxFbGVtZW50LCAnbmV3Jz47XG5cbmV4cG9ydCB0eXBlIEN1c3RvbUVsZW1lbnREZWNvcmF0b3IgPSB7XG4gIC8vIGxlZ2FjeVxuICAoY2xzOiBDdXN0b21FbGVtZW50Q2xhc3MpOiB2b2lkO1xuXG4gIC8vIHN0YW5kYXJkXG4gICh0YXJnZXQ6IEN1c3RvbUVsZW1lbnRDbGFzcywgY29udGV4dDogQ2xhc3NEZWNvcmF0b3JDb250ZXh0PENvbnN0cnVjdG9yPEhUTUxFbGVtZW50Pj4pOiB2b2lkO1xufTtcblxuLyoqXG4gKiBDbGFzcyBkZWNvcmF0b3IgZmFjdG9yeSB0aGF0IGRlZmluZXMgdGhlIGRlY29yYXRlZCBjbGFzcyBhcyBhIGN1c3RvbSBlbGVtZW50LlxuICpcbiAqIGBgYGpzXG4gKiBAY3VzdG9tRWxlbWVudCgnbXktZWxlbWVudCcpXG4gKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYGA7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICogQHBhcmFtIHRhZ05hbWUgVGhlIHRhZyBuYW1lIG9mIHRoZSBjdXN0b20gZWxlbWVudCB0byBkZWZpbmUuXG4gKi9cbmV4cG9ydCBjb25zdCBkZWZpbmVFbGVtZW50ID1cbiAgKHRhZ05hbWU6IHN0cmluZyk6IEN1c3RvbUVsZW1lbnREZWNvcmF0b3IgPT5cbiAgKFxuICAgIGNsYXNzT3JUYXJnZXQ6IEN1c3RvbUVsZW1lbnRDbGFzcyB8IENvbnN0cnVjdG9yPEhUTUxFbGVtZW50PixcbiAgICBjb250ZXh0PzogQ2xhc3NEZWNvcmF0b3JDb250ZXh0PENvbnN0cnVjdG9yPEhUTUxFbGVtZW50Pj5cbiAgKSA9PiB7XG4gICAgaWYgKGNvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplcigoKSA9PiB7XG4gICAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0Py4odGFnTmFtZSkpIHtcbiAgICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY2xhc3NPclRhcmdldCBhcyBDdXN0b21FbGVtZW50Q29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQ/Lih0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY2xhc3NPclRhcmdldCBhcyBDdXN0b21FbGVtZW50Q29uc3RydWN0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiIsICJpbXBvcnQgeyBDb25zdHJ1Y3RvciwgTXRlRWxlbWVudCwgUHJlc2V0RWxlbWVudEludGVyZmFjZSwgcHJlc2V0UHJvcGVydHkgfSBmcm9tICcuLi8nO1xuXG4vKiogUG9zc2libGUgY29yZSBwYWxldHRlIGdyb3VwIGNvbG9yIHZhbHVlcy4gKi9cbmV4cG9ydCB0eXBlIENvcmVQYWxldHRlID0gJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGVydGlhcnknIHwgJ2RhbmdlcicgfCB1bmRlZmluZWQ7XG5cbi8qKiAgUG9zc2libGUgc3RhdHVzIHBhbGV0dGUgZ3JvdXAgY29sb3IgdmFsdWVzLiAqL1xuZXhwb3J0IHR5cGUgU3RhdHVzUGFsZXR0ZSA9XG4gIHwgJ3ByaW1hcnknXG4gIHwgJ3NlY29uZGFyeSdcbiAgfCAndGVydGlhcnknXG4gIHwgJ2FjY2VudCdcbiAgfCAnd2FybmluZydcbiAgfCAnc3VjY2VzcydcbiAgfCAnZGFuZ2VyJ1xuICB8IHVuZGVmaW5lZDtcblxuLyoqIFBvc3NpYmxlIHZpeiBwYWxldHRlIGdyb3VwIGNvbG9yIHZhbHVlcy4gKi9cbmV4cG9ydCB0eXBlIFZpelBhbGV0dGUgPSAnMScgfCAnMicgfCAnMycgfCAnNCcgfCAnNScgfCAnNicgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFBhbGV0dGVHcm91cENvbG9yID0gQ29yZVBhbGV0dGUgfCBTdGF0dXNQYWxldHRlIHwgVml6UGFsZXR0ZTtcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29sb3JJbnRlcmZhY2U8UGFsZXR0ZUdyb3VwPiB7XG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBwcmltYXJ5IGNvbG9yIHBhbGV0dGUgdXNlZCB0byB0aGVtZSB0aGlzIGNvbXBvbmVudFxuICAgKiBAYXR0ciBjb2xvclxuICAgKi9cbiAgY29sb3I6IFBhbGV0dGVHcm91cDtcbn1cblxuZXhwb3J0IGVudW0gUGFsZXR0ZUdyb3VwT3B0aW9uIHtcbiAgQ29yZSA9ICdjb3JlJyxcbiAgU3RhdHVzID0gJ3N0YXR1cycsXG4gIFZpeiA9ICd2aXonLFxufVxuXG5leHBvcnQgY29uc3QgQ29yZUNvbG9yTWl4aW4gPSA8XG4gIFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50ICYgUGFydGlhbDxQcmVzZXRFbGVtZW50SW50ZXJmYWNlPGFueT4+PlxuPihcbiAgc3VwZXJDbGFzczogVFxuKSA9PiB7XG4gIGNsYXNzIENvbG9yRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIEFkanVzdHMgdGhlIHByaW1hcnkgY29sb3IgcGFsZXR0ZSB1c2VkIHRvIHRoZW1lIHRoaXMgY29tcG9uZW50XG4gICAgICogQGF0dHIgY29sb3JcbiAgICAgKi9cbiAgICBAcHJlc2V0UHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGNvbG9yOiBDb3JlUGFsZXR0ZTtcbiAgfVxuXG4gIHJldHVybiBDb2xvckVsZW1lbnQgYXMgQ29uc3RydWN0b3I8Q29sb3JJbnRlcmZhY2U8Q29yZVBhbGV0dGU+PiAmIFQ7XG59O1xuXG5leHBvcnQgY29uc3QgU3RhdHVzQ29sb3JNaXhpbiA9IDxcbiAgVCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQgJiBQYXJ0aWFsPFByZXNldEVsZW1lbnRJbnRlcmZhY2U8YW55Pj4+XG4+KFxuICBzdXBlckNsYXNzOiBUXG4pID0+IHtcbiAgY2xhc3MgQ29sb3JFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgcHJpbWFyeSBjb2xvciBwYWxldHRlIHVzZWQgdG8gdGhlbWUgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBjb2xvclxuICAgICAqL1xuICAgIEBwcmVzZXRQcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgY29sb3I6IFN0YXR1c1BhbGV0dGU7XG4gIH1cblxuICByZXR1cm4gQ29sb3JFbGVtZW50IGFzIENvbnN0cnVjdG9yPENvbG9ySW50ZXJmYWNlPFN0YXR1c1BhbGV0dGU+PiAmIFQ7XG59O1xuXG5leHBvcnQgY29uc3QgVml6Q29sb3JNaXhpbiA9IDxcbiAgVCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQgJiBQYXJ0aWFsPFByZXNldEVsZW1lbnRJbnRlcmZhY2U8YW55Pj4+XG4+KFxuICBzdXBlckNsYXNzOiBUXG4pID0+IHtcbiAgY2xhc3MgQ29sb3JFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgcHJpbWFyeSBjb2xvciBwYWxldHRlIHVzZWQgdG8gdGhlbWUgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBjb2xvclxuICAgICAqL1xuICAgIEBwcmVzZXRQcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgY29sb3I6IFZpelBhbGV0dGU7XG4gIH1cblxuICByZXR1cm4gQ29sb3JFbGVtZW50IGFzIENvbnN0cnVjdG9yPENvbG9ySW50ZXJmYWNlPFZpelBhbGV0dGU+PiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdChbZGVuc2l0eT1jb21wYWN0XSl7LS1tdGUtc3BhY2UteHhzOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHMpOy0tbXRlLXNwYWNlLXNtOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXNtKTstLW10ZS1zcGFjZS1tZDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QtbGcpOy0tbXRlLXNwYWNlLXhsOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXhsKTstLW10ZS1zcGFjZS14eGw6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXh4eGwpfTpob3N0KFtkZW5zaXR5PWNvbWZ5XSl7LS1tdGUtc3BhY2UteHhzOnZhcigtLW10ZS1zcGFjZS1jb21meS14eHMpOy0tbXRlLXNwYWNlLXhzOnZhcigtLW10ZS1zcGFjZS1jb21meS14cyk7LS1tdGUtc3BhY2Utc206dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXNtKTstLW10ZS1zcGFjZS1tZDp2YXIoLS1tdGUtc3BhY2UtY29tZnktbWQpOy0tbXRlLXNwYWNlLWxnOnZhcigtLW10ZS1zcGFjZS1jb21meS1sZyk7LS1tdGUtc3BhY2UteGw6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXhsKTstLW10ZS1zcGFjZS14eGw6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4bCk7LS1tdGUtc3BhY2UteHh4bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHh4bCl9Omhvc3QoW2RlbnNpdHk9cm9vbXldKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLXJvb215LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLXJvb215LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2Utcm9vbXktc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1yb29teS1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLXJvb215LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14eHhsKX1gOyIsICJpbXBvcnQgeyBMaXRFbGVtZW50LCBQcm9wZXJ0eVZhbHVlcyB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRGlzYWJsZWRJbnRlcmZhY2Uge1xuICAvKipcbiAgICogRGlzYWJsZXMgdGhpcyBjb21wb25lbnRcbiAgICogQGF0dHIgZGlzYWJsZWRcbiAgICovXG4gIGRpc2FibGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgRGlzYWJsZWRNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgRGlzYWJsZWRFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBkaXNhYmxlZFxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8vIEJlY2F1c2UgYGFyaWFEaXNhYmxlZGAgZXhpc3RzIGFzIGEgc3RyaW5nIG9uIExpdEVsZW1lbnQgd2UgY2Fubm90IGRlY2xhcmUgdGhpcyBhIHByb3BlcnR5IGhlcmVcbiAgICBwcm90ZWN0ZWQgd2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzPGFueT4pOiB2b2lkIHtcbiAgICAgIHN1cGVyLndpbGxVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKF9jaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIGAke3RoaXMuZGlzYWJsZWR9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gRGlzYWJsZWRFbGVtZW50IGFzIENvbnN0cnVjdG9yPERpc2FibGVkSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBwcmVzZXRQcm9wZXJ0eSB9IGZyb20gJy4uL3ByZXNldHMvcHJlc2V0LmRlY29yYXRvcic7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEludmVyc2VJbnRlcmZhY2Uge1xuICAvKiogUmVuZGVycyB0aGlzIGNvbXBvbmVudCB3aXRoIGludmVyc2UgdGhlbWluZyAqL1xuICBpbnZlcnNlOiBib29sZWFuO1xuXG4gIC8qKiBTcGVjaWFsIG9wdGlvbiB0byBvdmVycmlkZSBpbnZlcnNlIHdoZW4gaXQgaXMgc2V0IGJ5IGEgcHJlc2V0ICovXG4gIHdpdGhvdXRJbnZlcnNlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgSW52ZXJzZU1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBJbnZlcnNlRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKiBSZW5kZXJzIHRoaXMgY29tcG9uZW50IHdpdGggaW52ZXJzZSB0aGVtaW5nICovXG4gICAgQHByZXNldFByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBpbnZlcnNlID0gZmFsc2U7XG5cbiAgICAvKiogU3BlY2lhbCBvcHRpb24gdG8gb3ZlcnJpZGUgaW52ZXJzZSB3aGVuIGl0IGlzIHNldCBieSBhIHByZXNldCAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgd2l0aG91dEludmVyc2UgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gSW52ZXJzZUVsZW1lbnQgYXMgQ29uc3RydWN0b3I8SW52ZXJzZUludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3QoW2ludmVyc2VdOm5vdChbd2l0aG91dEludmVyc2VdKSl7LS1tdGUtc3VyZmFjZS0xOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tbXRlLXN1cmZhY2UtMS1yZ2I6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpOy0tbXRlLXN1cmZhY2UtMjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlKTstLW10ZS1zdXJmYWNlLTItcmdiOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UtcmdiKTstLW10ZS1zdXJmYWNlLTM6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS0zLXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtc3VyZmFjZS00OnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tbXRlLXN1cmZhY2UtNC1yZ2I6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpOy0tbXRlLWluay0xOnZhcigtLW10ZS13aGl0ZSk7LS1tdGUtaW5rLTEtcmdiOnZhcigtLW10ZS13aGl0ZS1yZ2IpOy0tbXRlLWluay0yOnZhcigtLW10ZS13aGl0ZSk7LS1tdGUtaW5rLTItcmdiOnZhcigtLW10ZS13aGl0ZS1yZ2IpOy0tbXRlLWluay0zOnZhcigtLW10ZS13aGl0ZSk7LS1tdGUtaW5rLTMtcmdiOnZhcigtLW10ZS13aGl0ZS1yZ2IpOy0tbXRlLWluay00OnZhcigtLW10ZS1ibGFjayk7LS1tdGUtaW5rLTQtcmdiOnZhcigtLW10ZS1ibGFjay1yZ2IpOy0tbXRlLWluay01OnZhcigtLW10ZS1ibGFjayk7LS1tdGUtaW5rLTUtcmdiOnZhcigtLW10ZS1ibGFjay1yZ2IpOy0tbXRlLWJvcmRlci0xOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZSk7LS1tdGUtYm9yZGVyLTEtcmdiOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZS1yZ2IpOy0tbXRlLWJvcmRlci0yOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZSk7LS1tdGUtYm9yZGVyLTItcmdiOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZS1yZ2IpOy0tbXRlLWJvcmRlci0zOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZSk7LS1tdGUtYm9yZGVyLTMtcmdiOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZS1yZ2IpOy0tbXRlLWRpc2FibGVkLTE6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMSk7LS1tdGUtZGlzYWJsZWQtMS1yZ2I6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMS1yZ2IpOy0tbXRlLWRpc2FibGVkLTI6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMik7LS1tdGUtZGlzYWJsZWQtMi1yZ2I6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMik7LS1tdGUtZGlzYWJsZWQtMzp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zKTstLW10ZS1kaXNhYmxlZC0zLXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zLXJnYik7LS1tdGUtZGlzYWJsZWQtNDp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zKTstLW10ZS1kaXNhYmxlZC00LXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWRlZmF1bHQtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMS1kZWZhdWx0LWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LWEpOy0tbXRlLWl0LXN1cmZhY2UtMS1ob3Zlci1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMS1ob3Zlci1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItYSk7LS1tdGUtaXQtc3VyZmFjZS0xLWFjdGl2ZS1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtYSk7LS1tdGUtaXQtc3VyZmFjZS0yLWRlZmF1bHQtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMi1kZWZhdWx0LWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LWEpOy0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItYSk7LS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtYSk7LS1tdGUtaXQtc3VyZmFjZS0zLWRlZmF1bHQtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMy1kZWZhdWx0LWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LWEpOy0tbXRlLWl0LXN1cmZhY2UtMy1ob3Zlci1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMy1ob3Zlci1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItYSk7LS1tdGUtaXQtc3VyZmFjZS0zLWFjdGl2ZS1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTMtYWN0aXZlLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtYSk7LS1tdGUtbGlnaHQ6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1saWdodC1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtZGFyazp2YXIoLS1tdGUtYmxhY2spOy0tbXRlLWRhcmstcmdiOnZhcigtLW10ZS1ibGFjay1yZ2IpOy0tYnV0dG9uLWZpbGxlZC1iZzp2YXIoLS1tdGUtd2hpdGUpOy0tYnV0dG9uLWZpbGxlZC1pbms6dmFyKC0tbXRlLWJsYWNrKTstLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWJnOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZSk7LS1idXR0b24tZmlsbGVkLWFjdGl2ZS1pbms6dmFyKC0tbXRlLXdoaXRlKX1gOyIsICJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgb25VcGRhdGUgfSBmcm9tICcuLi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IERpc2FibGVkSW50ZXJmYWNlIH0gZnJvbSAnLi9kaXNhYmxlZC5taXhpbic7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IGlzU3NyIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGFiSW5kZXhJbnRlcmZhY2Uge1xuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHRhYmluZGV4IGF0dHJpYnV0ZSB2YWx1ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGdldFRhYkluZGV4QWRhcHRlcigpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byBzZXQgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBvbiBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzZXRUYWJJbmRleEFkYXB0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byByZW1vdmUgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlbW92ZVRhYkluZGV4QWRhcHRlcigpOiB2b2lkO1xufVxuXG4vKipcbiAqIE1peGluIHRvIHByb3Blcmx5IG1hbmFnZSB0aGUgdGFiaW5kZXggaW4gYSBub24taW50cnVzaXZlIHdheS4gV2hlbiBkaXNhYmxlZCBpcyB0cnVlLFxuICogdGhlIHRhYmluZGV4IHdpbGwgQUxXQVlTIGJlIGAtMWAuIEhvd2V2ZXIsIGFueSBjaGFuZ2VzIHRvIHRhYmluZGV4IHdpbGwgYmUgaW50ZXJjZXB0ZWRcbiAqIGFuZCBjYWNoZWQgaW50ZXJuYWxseSB1bnRpbCBkaXNhYmxlZCBpcyBmYWxzZSwgdGhlbiB0YWJpbmRleCB3aWxsIGJlIHJlc3RvcmVkIHRvIHRoZVxuICogY2FjaGVkIHZhbHVlLCBvciByZW1vdmVkIGlmIHRoYXQgaXMgdW5kZWZpbmVkLlxuICovXG5leHBvcnQgY29uc3QgVGFiSW5kZXhNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudCAmIERpc2FibGVkSW50ZXJmYWNlPj4oXG4gIHN1cGVyQ2xhc3M6IFQsXG4gIG9wdGlvbnM6IHsgaW5pdGlhbFRhYkluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQgfSA9IHsgaW5pdGlhbFRhYkluZGV4OiB1bmRlZmluZWQgfVxuKSA9PiB7XG4gIGNsYXNzIFRhYkluZGV4RWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ3RhYmluZGV4JywgdHlwZTogTnVtYmVyLCBub0FjY2Vzc29yOiB0cnVlIH0pXG4gICAgcHVibGljIG92ZXJyaWRlIHNldCB0YWJJbmRleCh0YWJJbmRleDogbnVtYmVyKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAvLyBXaGVuIHNldHRpbmcgdGhlIHRhYkluZGV4IG9uIHRoZSBjdXJyZW50IGVsZW1lbnQgdG8gYC0xYCBkaXNhYmxlZCwgd2Ugd2FudCB0byBrZWVwIHRyYWNrIG9mIHdoYXQgdGhlIHRhYkluZGV4IHZhbHVlIGJlZm9yZSB0aGF0IHdhc1xuICAgICAgICAvLyBhcyB0aGUgY2FjaGVkVGFiSW5kZXguIFRvIGRvIHRoaXMgd2UgbXVzdCBpZ25vcmUgdGhlIGluaXRpYWwgY2hhbmdlIHRvIGAtMWAgYW5kIHRoZW4gY2FjaGUgYW55IGZ1dHVyZSB2YWx1ZXMgYmVmb3JlIGtlZXBpbmcgdGhlXG4gICAgICAgIC8vIHRhYkluZGV4IGFzIGAtMWAgdW50aWwgbm8gbG9uZ2VyIGRpc2FibGVkLiBUaGVuIHdlIGNhbiByZXR1cm4gdGhlIHRhYkluZGV4IHRvIHdoYXRldmVyIHRoZSBsYXN0IHNldCB2YWx1ZSB3YXMgZnJvbSB0aGUgY2FjaGVkIGluZGV4LlxuICAgICAgICBpZiAoIXRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSkge1xuICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcignLTEnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoYCR7dGhpcy5fdGFiSW5kZXh9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgdGFiSW5kZXgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGFiSW5kZXg7XG4gICAgfVxuICAgIHByaXZhdGUgX3RhYkluZGV4ID0gb3B0aW9ucz8uaW5pdGlhbFRhYkluZGV4O1xuICAgIHByaXZhdGUgX2NhY2hlZFRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IGZhbHNlO1xuXG4gICAgQG9uVXBkYXRlKFsnZGlzYWJsZWQnXSwgeyBvbjogJ2JvdGgnIH0pXG4gICAgcHJpdmF0ZSBoYW5kbGVUYWJpbmRleENoYW5nZShjaGFuZ2VkUHJvcHMpIHtcbiAgICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIGlmIChjaGFuZ2VkUHJvcHMuZ2V0KCdkaXNhYmxlZCcpID09PSBmYWxzZSAmJiB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSBOdW1iZXIodGhpcy5nZXRUYWJJbmRleEFkYXB0ZXIoKSk7XG4gICAgICAgICAgdGhpcy5fdGFiSW5kZXggPSAtMTtcbiAgICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcignLTEnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2VkUHJvcHMuZ2V0KCdkaXNhYmxlZCcpID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2NhY2hlZFRhYkluZGV4ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fY2FjaGVkVGFiSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYkluZGV4ID0gdGhpcy5fY2FjaGVkVGFiSW5kZXg7XG4gICAgICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl9jYWNoZWRUYWJJbmRleH1gKTtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZWRUYWJJbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byByZXRyaWV2ZSB0aGUgY3VycmVudCB0YWJpbmRleCBhdHRyaWJ1dGUgdmFsdWUgZnJvbSBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudCAqL1xuICAgIGdldFRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHNldCB0aGUgdGFiaW5kZXggYXR0cmlidXRlIG9uIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50ICovXG4gICAgc2V0VGFiSW5kZXhBZGFwdGVyKHZhbHVlOiBzdHJpbmcsIHNob3VsZFByZXZlbnRUYWJJbmRleENoYW5nZU9uU2VsZiA9IGZhbHNlKSB7XG4gICAgICBpZiAoc2hvdWxkUHJldmVudFRhYkluZGV4Q2hhbmdlT25TZWxmKSB7XG4gICAgICAgIHRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byByZW1vdmUgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50ICovXG4gICAgcmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgd2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgc3VwZXIud2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChpc1NzcigpICYmIHRoaXMuX3RhYkluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoYCR7dGhpcy5fdGFiSW5kZXh9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAodGhpcy5fdGFiSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl90YWJJbmRleH1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFRhYkluZGV4RWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxUYWJJbmRleEludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50LCBTdHlsZU1hcCB9IGZyb20gJy4uJztcbmltcG9ydCB7IHNlbGVjdG9yRmFjdG9yeSB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBNdGVFbGVtZW50UGFydHMge1xuICAvKiogVGhlIGhvc3QgZWxlbWVudCBcInBhcnRcIi4gT3ZlcnJpZGVzIHRoZSBgc2VgIHByb3BlcnR5IG9mIHRoaXMgZWxlbWVudCAqL1xuICBob3N0PzogU3R5bGVNYXA7XG59XG5cbmV4cG9ydCB0eXBlIFN0eWxlUGFydHNNYXA8VCA9IHN0cmluZyB8IG51bWJlcj4gPSB7XG4gIFtuYW1lOiBzdHJpbmddOiBTdHlsZU1hcDxUPjtcbn07XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0eWxlUGFydHNJbnRlcmZhY2U8U3R5bGVQYXJ0cz4ge1xuICAvKipcbiAgICogU3R5bGUgbWFwcGluZ3MgdGhhdCBhcmUgYXBwbGllZCB0byBlYWNoIGNzcyBwYXJ0IGJ5IG5hbWUuIFNldCB0aGVcbiAgICogcHJvcGVydHkgYGhvc3RgIHRvIGFwcGx5IGEgYFN0eWxlSW5mb2Agb2JqZWN0IHRvIHRoZSBlbGVtZW50IGhvc3QgaXRzZWxmLlxuICAgKi9cbiAgc3A/OiBTdHlsZVBhcnRzO1xufVxuXG5leHBvcnQgY29uc3QgU3R5bGVQYXJ0c01peGluID0gPFN0eWxlUGFydHMsIFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBTdHlsZVBhcnRzRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIFN0eWxlIG1hcHBpbmdzIHRoYXQgYXJlIGFwcGxpZWQgdG8gZWFjaCBjc3MgcGFydCBieSBuYW1lLiBTZXQgdGhlXG4gICAgICogcHJvcGVydHkgYGhvc3RgIHRvIGFwcGx5IGEgYFN0eWxlSW5mb2Agb2JqZWN0IHRvIHRoZSBlbGVtZW50IGhvc3QgaXRzZWxmLlxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgcmVmbGVjdDogdHJ1ZSB9KSBzcDogU3R5bGVQYXJ0cztcblxuICAgIHByb3RlY3RlZCB1cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpIHtcbiAgICAgIHN1cGVyLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKCdzcCcpKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuc3AgPz8gKHt9IGFzIFN0eWxlUGFydHMpKS5mb3JFYWNoKChbcGFydCwgc3R5bGVNYXBdKSA9PiB7XG4gICAgICAgICAgLy8gRG91YmxlIHRoZSBgOmhvc3RgIHNlbGVjdG9yIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5IGJleW9uZCBtb3N0IGNvbXBvbmVudCBsZXZlbCBzdHlsZXMgYnkgZGVmYXVsdFxuICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0b3JGYWN0b3J5KFxuICAgICAgICAgICAgcGFydCA9PT0gJ2hvc3QnXG4gICAgICAgICAgICAgID8gJzpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCdcbiAgICAgICAgICAgICAgOiBgOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0OjpwYXJ0KCR7cGFydH0pYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zZXRJbnN0YW5jZVN0eWxlKGBzcC0ke3BhcnR9YCwgc2VsZWN0b3IsIHN0eWxlTWFwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFN0eWxlUGFydHNFbGVtZW50IGFzIENvbnN0cnVjdG9yPFN0eWxlUGFydHNJbnRlcmZhY2U8U3R5bGVQYXJ0cz4+ICYgVDtcbn07XG4iLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlfSNhbmNob3J7aW5zZXQ6MDtwb3NpdGlvbjphYnNvbHV0ZX1gOyIsICJpbXBvcnQgeyBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBDbGlja091dHNpZGVDb250cm9sbGVyLFxuICBDb25zdHJ1Y3RvcixcbiAgRXZlbnRFbWl0dGVyLFxuICBGb2N1c1RyYXBDb250cm9sbGVyLFxuICBNdGVFbGVtZW50LFxuICBQb3J0YWxBZGFwdGVyLFxuICBQb3J0YWxDb250cm9sbGVyLFxuICBkZWZhdWx0UG9ydGFsQWRhcHRlcixcbiAgZXZlbnRFbWl0dGVyLFxuICBpc1Nzcixcbn0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgUHJvcGVydHlWYWx1ZU1hcCB9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE92ZXJsYXlJbnRlcmZhY2Uge1xuICAvKipcbiAgICogVXBkYXRlcyB0aGUgb3ZlcmxheSBzdGF0ZSBvbiB0aGUgb3ZlcmxheSBtaXhpbi4gQnkgZGVmYXVsdCBhbGwgb3B0aW9ucyBhcmUgc2V0IHRvIHRydWUgaW5pdGlhbGx5LlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgc2V0T3ZlcmxheU9wdGlvbnMob3B0aW9uczoge1xuICAgIHdpdGhDbG9zZU9uQ2xpY2tPdXRzaWRlPzogYm9vbGVhbjtcbiAgICB3aXRoQ2xvc2VPbkVzY2FwZT86IGJvb2xlYW47XG4gICAgd2l0aEZvY3VzVHJhcD86IGJvb2xlYW47XG4gICAgd2l0aFBvcnRhbD86IGJvb2xlYW47XG4gICAgd2l0aERpbUJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICB3aXRoSW5lcnRCYWNrZHJvcD86IGJvb2xlYW47XG4gICAgd2l0aFNjcm9sbExvY2s/OiBib29sZWFuO1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uPzogbnVtYmVyO1xuICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuICAgIHJldHVyblRvT3JpZ2luT25DbG9zZT86IGJvb2xlYW47XG4gICAgZm9jdXNUcmFwVGFyZ2V0PzogRWxlbWVudDtcbiAgfSk6IHVua25vd247XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBvdmVybGF5IHNob3VsZCBvcGVuLiBDYW4gYWRkIGEgbGlzdGVuZXIgZm9yIG91dHNpZGUgY2xpY2tzLCBwb3J0YWwgYW4gZWxlbWVudCxcbiAgICogYW5kIHByZXZlbnQgdGhlIGJvZHkgZnJvbSBzY3JvbGxpbmcgdXBvbiBvcGVuLlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgaGFuZGxlT3ZlcmxheU9wZW4ob3B0aW9ucz86IHtcbiAgICBjbGlja091dHNpZGVFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG4gICAgd2lsbE9wZW4/OiAoKSA9PiB2b2lkO1xuICB9KTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIGFmdGVyIHRoZSBvdmVybGF5IGhhcyBiZWVuIG9wdGlvbmFsbHkgcG9ydGFsZWQgYW5kL29yIGFsbCBhbmltYXRpb25zIGhhdmUgZmluaXNoZWQuXG4gICAqL1xuICBoYW5kbGVPdmVybGF5T3BlbkVuZCgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgb3ZlcmxheSBlbGVtZW50IHNob3VsZCBjbG9zZS4gQ2FuIHN0b3AgbGlzdGVuaW5nIGZvciBvdXRzaWRlIGNsaWNrcywgcmVsZWFzZSBhLFxuICAgKiBmb2N1cyB0cmFwLCBhbmQgYWxsb3cgdGhlIGJvZHkgZWxlbWVudCB0byBzY3JvbGwgYWdhaW4uXG4gICAqL1xuICBoYW5kbGVPdmVybGF5Q2xvc2UoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIG92ZXJsYXkgZWxlbWVudCBoYXMgZmluaXNoZWQgY2xvc2luZyBhbmQvb3IgYWxsIGFuaW1hdGlvbnMgaGF2ZSBjb21wbGV0ZWQuIENhblxuICAgKiByZW1vdmUgYW4gZWxlbWVudCBmcm9tIHRoZSBwb3J0YWwuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBoYW5kbGVPdmVybGF5Q2xvc2VFbmQob3B0aW9ucz86IHsgcmVtb3ZlRnJvbUVsZW1lbnQ/OiBIVE1MRWxlbWVudCB9KTogUHJvbWlzZTx2b2lkPjtcblxuICBvcGVuKCk6IFByb21pc2U8dm9pZD47XG5cbiAgY2xvc2UoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogVGhlIHRhYiBpbmRleCBmb3IgdGhpcyBlbGVtZW50XG4gICAqL1xuICB0YWJpbmRleDogbnVtYmVyO1xuXG4gIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBvcGVuZWQgKi9cbiAgX29uT3BlbjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBFbWl0dGVkIGFmdGVyIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgb3BlbmluZyAqL1xuICBfb25PcGVuRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaXMgaW5pdGlhbGx5IGNsb3NpbmcgKi9cbiAgX29uQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgY2xvc2luZyAqL1xuICBfb25DbG9zZUVuZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBAaWdub3JlICovXG4gIHBvcnRhbEFkYXB0ZXI6IFBvcnRhbEFkYXB0ZXI7XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogVGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgb3ZlcmxheSByZWdhcmRsZXNzIG9mIGFuaW1hdGlvbnNcbiAgICovXG4gIG9wZW5lZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBJbmRpY2F0ZXMgdGhlIG92ZXJsYXkgaGFzIGJlZW4gcG9ydGFsZWQgYW5kIHJlYWR5IHRvIGFuaW1hdGVcbiAgICovXG4gIHJlYWR5Rm9yQW5pbWF0aW9uOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEluZGljYXRlcyB0aGUgb3ZlcmxheSBoYXMgYmVlbiBmdWxseSBhbmltYXRlZCBvcGVuXG4gICAqL1xuICBvcGVuZWRGdWxsOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgT3ZlcmxheU1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBPdmVybGF5RWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKiBUaGUgdGFiIGluZGV4IG9mIHRoaXMgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ3RhYmluZGV4JywgdHlwZTogTnVtYmVyIH0pIHRhYmluZGV4ID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBBZGFwdGVyIGZvciBwb3J0YWwgRE9NIG9wZXJhdGlvbiB0aGF0IGNhbiBiZSBzdXBwbGVtZW50ZWQgZm9yIGV4dGVybmFsLWZyYW1ld29yayBpbnRlZ3JhdGlvbnMuXG4gICAgICogTm90YWJseS1sZXZlcmFnZWQgYnkgb3ZlcmxheXMgaW4gb3VyIGdlbmVyYXRlZCByZWFjdCB3cmFwcGVycy5cbiAgICAgKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoKSBwb3J0YWxBZGFwdGVyOiBQb3J0YWxBZGFwdGVyID0gZGVmYXVsdFBvcnRhbEFkYXB0ZXI7XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgb3BlbmVkICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbk9wZW46IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0dGVkIGFmdGVyIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgb3BlbmluZyAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25PcGVuRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgY2xvc2VkICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgY2xvc2luZyAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25DbG9zZUVuZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgZWxlbWVudCBzaG91bGQgdXNlIGEgZm9jdXMgdHJhcCBvciBub3QgKi9cbiAgICBwcml2YXRlIF93aXRoRm9jdXNUcmFwID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IGVsZW1lbnQgc2hvdWxkIGNsb3NlIHdoZW4gYSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBlbGVtZW50ICovXG4gICAgcHJpdmF0ZSBfY2xvc2VPbkNsaWNrT3V0c2lkZSA9IHRydWU7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgY2xvc2Ugd2hlbiB0aGUgZXNjYXBlIGJ1dHRvbiBpcyBwcmVzc2VkICovXG4gICAgcHJpdmF0ZSBfY2xvc2VPbkVzY2FwZSA9IHRydWU7XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBzaG91bGQgdXNlIGEgcG9ydGFsIG9yIG5vdCAqL1xuICAgIHByaXZhdGUgX3dpdGhQb3J0YWwgPSB0cnVlO1xuXG4gICAgLyoqIFdldGhlciB0aGUgdXNlciBzaG91bGQgYmUgYWJsZSB0byBjbGljayBiZWhpbmQgdGhlIGJhY2tkcm9wIG9yIG5vdCAqL1xuICAgIHByaXZhdGUgX3dpdGhJbmVydEJhY2tkcm9wID0gZmFsc2U7XG5cbiAgICAvKiogV2V0aGVyIHRoZSBvdmVybGF5J3MgYmFja2Ryb3Agc2hvdWxkIHJlbmRlciBkaW1tZWQgKi9cbiAgICBwcml2YXRlIF93aXRoRGltQmFja2Ryb3AgPSBmYWxzZTtcblxuICAgIC8qKiBXZXRoZXIgb3Igbm90IHRoZSBlbGVtZW50IHNob3VsZCBiZSByZS1hcHBlbmRlZCB0byBpdCdzIG9yaWdpbiBwYXJlbnQgZWxlbWVudCBvbiBjbG9zZSBfaWZfIHBvcnRhbGVkLiAqL1xuICAgIHByaXZhdGUgX3JldHVyblRvT3JpZ2luT25DbG9zZSA9IGZhbHNlO1xuXG4gICAgLyoqIE9wdGlvbmFsIGJhY2tkcm9wIHRpbWluZy4gSW1wb3J0YW50IHBhcnRpY3VsYXJseSBmb3Igc21vb3RoIGNsb3NlcyB3aXRoIGEgdmlzaWJsZSBiYWNrZHJvcCAqL1xuICAgIHByaXZhdGUgX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgc2hvdWxkIHByZXZlbnQgc2Nyb2xsaW5nIG9uIHRoZSBib2R5ICovXG4gICAgcHJpdmF0ZSBfd2l0aFNjcm9sbExvY2sgPSB0cnVlO1xuXG4gICAgcHJvdGVjdGVkIGZvY3VzVHJhcENvbnRyb2xsZXIgPSBuZXcgRm9jdXNUcmFwQ29udHJvbGxlcih0aGlzKTtcblxuICAgIHByb3RlY3RlZCBjbGlja091dHNpZGVDb250cm9sbGVyID0gbmV3IENsaWNrT3V0c2lkZUNvbnRyb2xsZXIodGhpcywgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl93aXRoUG9ydGFsKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2VPbkNsaWNrT3V0c2lkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcHJvdGVjdGVkIHBvcnRhbENvbnRyb2xsZXIgPSBuZXcgUG9ydGFsQ29udHJvbGxlcih0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHBhcmVudCBlbGVtZW50XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRpYWxQYXJlbnQ6IEVsZW1lbnQgfCBIVE1MRWxlbWVudCA9IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgdG8gZGV0ZWN0IGNsaWNrcyBvdXRzaWRlIG9mIHRvIGNsb3NlIHRoZSBvdmVybGF5IGVsZW1lbnQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjbGlja091dHNpZGVPdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xuXG4gICAgcHJpdmF0ZSBfb3JpZ2luUGFyZW50PzogRWxlbWVudCB8IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBfZm9jdXNUcmFwVGFyZ2V0PzogRWxlbWVudCB8IEhUTUxFbGVtZW50ID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBUaGUgb3BlbmVkIHN0YXRlIG9mIHRoZSBvdmVybGF5IHJlZ2FyZGxlc3Mgb2YgYW5pbWF0aW9uc1xuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgb3BlbmVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogSW5kaWNhdGVzIHRoZSBvdmVybGF5IGhhcyBiZWVuIHBvcnRhbGVkIGFuZCByZWFkeSB0byBhbmltYXRlXG4gICAgICovXG4gICAgQHN0YXRlKClcbiAgICBzZXQgcmVhZHlGb3JBbmltYXRpb24ocmVhZHlGb3JBbmltYXRpb246IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuX3JlYWR5Rm9yQW5pbWF0aW9uID0gcmVhZHlGb3JBbmltYXRpb247XG4gICAgfVxuICAgIGdldCByZWFkeUZvckFuaW1hdGlvbigpIHtcbiAgICAgIC8vIER1cmluZyBTU1IgcmV0dXJuIHRydWUgaW4gY2FzZSBzb21ldGhpbmcgbmVlZHMgdG8gYmUgb3BlbmVkIGluaXRpYWxseS5cbiAgICAgIHJldHVybiBpc1NzcigpID8gdHJ1ZSA6IHRoaXMuX3JlYWR5Rm9yQW5pbWF0aW9uO1xuICAgIH1cbiAgICBwcml2YXRlIF9yZWFkeUZvckFuaW1hdGlvbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqIFRoZSBvcGVuZWQgc3RhdGUgb2YgdGhlIG92ZXJsYXkgcmVnYXJkbGVzcyBvZiBhbmltYXRpb25zLiBUaGlzIGlzIHJlZmxlY3RlZCBhbmQgdXNlZCBieVxuICAgICAqIHNvbWUgb3ZlcmxheXMgdG8gcmVzdHJpY3QgdGhlaXIgc2l6ZSB3aGlsZSBoaWRkZW4uIChzaW5jZSBkaXNwbGF5OiBub25lIGJyZWFrcyBhbmltYXRpb25zKVxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgb3BlbmVkRnVsbCA9IGZhbHNlO1xuXG4gICAgc2V0T3ZlcmxheU9wdGlvbnMob3B0aW9uczoge1xuICAgICAgd2l0aENsb3NlT25DbGlja091dHNpZGU/OiBib29sZWFuO1xuICAgICAgd2l0aENsb3NlT25Fc2NhcGU/OiBib29sZWFuO1xuICAgICAgd2l0aEZvY3VzVHJhcD86IGJvb2xlYW47XG4gICAgICB3aXRoUG9ydGFsPzogYm9vbGVhbjtcbiAgICAgIHdpdGhJbmVydEJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICAgIHdpdGhEaW1CYWNrZHJvcD86IGJvb2xlYW47XG4gICAgICB3aXRoU2Nyb2xsTG9jaz86IGJvb2xlYW47XG4gICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbj86IHN0cmluZztcbiAgICAgIHJldHVyblRvT3JpZ2luT25DbG9zZT86IGJvb2xlYW47XG4gICAgICBmb2N1c1RyYXBUYXJnZXQ/OiBFbGVtZW50O1xuICAgIH0pIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgd2l0aEZvY3VzVHJhcCxcbiAgICAgICAgd2l0aENsb3NlT25DbGlja091dHNpZGUsXG4gICAgICAgIHdpdGhDbG9zZU9uRXNjYXBlLFxuICAgICAgICB3aXRoUG9ydGFsLFxuICAgICAgICB3aXRoU2Nyb2xsTG9jayxcbiAgICAgICAgd2l0aEluZXJ0QmFja2Ryb3AsXG4gICAgICAgIHdpdGhEaW1CYWNrZHJvcCxcbiAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgIHJldHVyblRvT3JpZ2luT25DbG9zZSxcbiAgICAgICAgZm9jdXNUcmFwVGFyZ2V0LFxuICAgICAgfSA9IG9wdGlvbnMgPz8ge307XG5cbiAgICAgIHRoaXMuX3dpdGhGb2N1c1RyYXAgPSB3aXRoRm9jdXNUcmFwID8/IHRoaXMuX3dpdGhGb2N1c1RyYXA7XG4gICAgICB0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlID0gd2l0aENsb3NlT25DbGlja091dHNpZGUgPz8gdGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZTtcbiAgICAgIHRoaXMuX3dpdGhTY3JvbGxMb2NrID0gd2l0aFNjcm9sbExvY2sgPz8gdGhpcy5fd2l0aFNjcm9sbExvY2s7XG4gICAgICB0aGlzLl93aXRoUG9ydGFsID0gd2l0aFBvcnRhbCA/PyB0aGlzLl93aXRoUG9ydGFsO1xuICAgICAgdGhpcy5fd2l0aEluZXJ0QmFja2Ryb3AgPVxuICAgICAgICB3aXRoSW5lcnRCYWNrZHJvcCA/PyAhdGhpcy5fd2l0aEZvY3VzVHJhcCA/PyB0aGlzLl93aXRoSW5lcnRCYWNrZHJvcDtcbiAgICAgIHRoaXMuX3dpdGhEaW1CYWNrZHJvcCA9IHdpdGhEaW1CYWNrZHJvcCA/PyB0aGlzLl93aXRoRGltQmFja2Ryb3A7XG4gICAgICB0aGlzLl9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9XG4gICAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID8/IHRoaXMuX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgdGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlID0gcmV0dXJuVG9PcmlnaW5PbkNsb3NlID8/IHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZTtcbiAgICAgIHRoaXMuX2ZvY3VzVHJhcFRhcmdldCA9IGZvY3VzVHJhcFRhcmdldCA/PyB0aGlzLl9mb2N1c1RyYXBUYXJnZXQ7XG5cbiAgICAgIGlmICh3aXRoQ2xvc2VPbkVzY2FwZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX2Nsb3NlT25Fc2NhcGUgIT09IHdpdGhDbG9zZU9uRXNjYXBlKSB7XG4gICAgICAgIGlmICh3aXRoQ2xvc2VPbkVzY2FwZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xvc2VPbkVzY2FwZSA9IHdpdGhDbG9zZU9uRXNjYXBlID8/IHRoaXMuX2Nsb3NlT25Fc2NhcGU7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aXRoRm9jdXNUcmFwID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpdGhGb2N1c1RyYXAgPT09IHRydWUgJiYgdGhpcy50YWJpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy50YWJpbmRleCA9IC0xO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZU92ZXJsYXkoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVPdmVybGF5T3BlbihvcHRpb25zPzoge1xuICAgICAgY2xpY2tPdXRzaWRlRWxlbWVudD86IEhUTUxFbGVtZW50O1xuICAgICAgd2lsbE9wZW4/OiAoKSA9PiB2b2lkO1xuICAgIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIElnbm9yZSBpZiBhbHJlYWR5IG9wZW5cbiAgICAgIGlmICh0aGlzLm9wZW5lZCB8fCB0aGlzLm9wZW5lZEZ1bGwpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgICAgY29uc3QgeyBjbGlja091dHNpZGVFbGVtZW50LCB3aWxsT3BlbiB9ID0gb3B0aW9ucyA/PyB7fTtcbiAgICAgIHdpbGxPcGVuPy4oKTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50ID0gY2xpY2tPdXRzaWRlRWxlbWVudCB8fCB0aGlzO1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIubGlzdGVuRm9yQ2xpY2tzT3V0c2lkZU9mKHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQpO1xuICAgICAgICBpZiAodGhpcy5fd2l0aFBvcnRhbCkge1xuICAgICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlclxuICAgICAgICAgICAgLmFwcGVuZFRvU3RhY2sodGhpcywge1xuICAgICAgICAgICAgICB3aXRoRGltQmFja2Ryb3A6IHRoaXMuX3dpdGhEaW1CYWNrZHJvcCxcbiAgICAgICAgICAgICAgd2l0aEluZXJ0QmFja2Ryb3A6IHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wLFxuICAgICAgICAgICAgICB3aXRoU2Nyb2xsTG9jazogdGhpcy5fd2l0aFNjcm9sbExvY2ssXG4gICAgICAgICAgICAgIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyOiB0aGlzLmhhbmRsZUNsb3NlT25DbGlja091dHNpZGUsXG4gICAgICAgICAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLl9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgICAgcG9ydGFsQWRhcHRlcjogdGhpcy5wb3J0YWxBZGFwdGVyLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgLy8gV2FpdCBmb3IgYXBwZW5kIHRvIGNvbXBsZXRlIGJlZm9yZSBhbmltYXRpbmdcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkeUZvckFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gQWZ0ZXIgYW5pbWF0aW9uIGJlZ2lucyByZXNvbHZlXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX29uT3Blbi5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuX29yaWdpblBhcmVudCAmJlxuICAgICAgICAgICAgdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkgJiZcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpICE9PSB0aGlzLl9vcmlnaW5QYXJlbnRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMucG9ydGFsQWRhcHRlcih0aGlzLCB0aGlzLl9vcmlnaW5QYXJlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBXYWl0IGZvciBhcHBlbmQgdG8gY29tcGxldGUgYmVmb3JlIGFuaW1hdGluZ1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUZvckFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAvLyBBZnRlciBhbmltYXRpb24gYmVnaW5zIHJlc29sdmVcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX29uT3Blbi5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlT3ZlcmxheU9wZW5FbmQoKSB7XG4gICAgICAvLyBDYW5jZWwgaWYgY2xvc2VkIGJlZm9yZSBvcGVuIGVuZGVkXG4gICAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbmVkRnVsbCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5fd2l0aEZvY3VzVHJhcCkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIudHJhcEZvY3VzKHRoaXMuX2ZvY3VzVHJhcFRhcmdldCwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vbk9wZW5FbmQuZW1pdChudWxsLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZU92ZXJsYXlDbG9zZSgpIHtcbiAgICAgIC8vIElnbm9yZSBpZiBhbHJlYWR5IGNsb3NlZFxuICAgICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fb25DbG9zZS5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5zdG9wTGlzdGVuaW5nKCk7XG4gICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIucmVsZWFzZUZvY3VzKHRydWUpO1xuICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLmhpZGVCYWNrZHJvcCgpO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZU92ZXJsYXlDbG9zZUVuZChvcHRpb25zPzogeyByZW1vdmVGcm9tRWxlbWVudD86IEhUTUxFbGVtZW50IH0pIHtcbiAgICAgIC8vIENhbmNlbCBpZiBvcGVuZWQgYmVmb3JlIGNsb3NlIGVuZGVkXG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWRGdWxsID0gZmFsc2U7XG4gICAgICB0aGlzLnJlYWR5Rm9yQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIucmVtb3ZlRnJvbVN0YWNrKG9wdGlvbnM/LnJlbW92ZUZyb21FbGVtZW50IHx8IHRoaXMpO1xuICAgICAgaWYgKHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZSkge1xuICAgICAgICBpZiAodGhpcy5fb3JpZ2luUGFyZW50ICYmIHRoaXMuX29yaWdpblBhcmVudCAhPT0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgdGhpcy5fb3JpZ2luUGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fb25DbG9zZUVuZC5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVPdmVybGF5S2V5RG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudD8uaGFzQXR0cmlidXRlKCdkYXRhLW92ZXJsYXktd3JhcHBlcicpXG4gICAgICAgID8gdGhpcy5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50XG4gICAgICAgIDogdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHBhcmVudCBlbGVtZW50IHRoaXMgb3ZlcmxheSB3aWxsIGJlIHJlYXR0YWNoZWQgdG8gZWl0aGVyOlxuICAgICAqIC0gV2hlbiBjb25maWd1cmVkIHRvIGRvIHNvIG9uIGNsb3NlXG4gICAgICogLSBXaGVuIFwicG9ydGFsaW5nXCIgaXMgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBzZXRPcmlnaW5QYXJlbnQobmV3T3JpZ2luOiBFbGVtZW50KSB7XG4gICAgICBjb25zdCBjdXJyZW50UGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpO1xuICAgICAgaWYgKGN1cnJlbnRQYXJlbnRFbGVtZW50ID09PSB0aGlzLl9vcmlnaW5QYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIG5ld09yaWdpbik7XG4gICAgICB9XG4gICAgICB0aGlzLl9vcmlnaW5QYXJlbnQgPSBuZXdPcmlnaW47XG4gICAgfVxuXG4gICAgLyoqIFVwZGF0ZXMgdmFyaW91cyBiZWhhdmlvcnMgdG8gYXBwbHkgdGhlIGxhdGVzdCBvdmVybGF5IG9wdGlvbnMgKi9cbiAgICB1cGRhdGVPdmVybGF5KCkge1xuICAgICAgLy8gVXBkYXRlIGJhY2tkcm9wIGluZXJ0bmVzc1xuICAgICAgaWYgKHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5zZXRCYWNrZHJvcEluZXJ0bmVzcyh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5zZXRCYWNrZHJvcEluZXJ0bmVzcyhmYWxzZSk7XG4gICAgICB9XG4gICAgICAvLyBVcGRhdGUgY2xpY2sgb3V0c2lkZSBjb250cm9sbGVyXG4gICAgICBpZiAodGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZSAmJiAhdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmlzTGlzdGVuaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmxpc3RlbkZvckNsaWNrc091dHNpZGVPZih0aGlzKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUgJiYgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmlzTGlzdGVuaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSBmb2N1cyB0cmFwIGNvbnRyb2xsZXJcbiAgICAgIGlmICh0aGlzLl93aXRoRm9jdXNUcmFwICYmIHRoaXMub3BlbmVkICYmICF0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIuaXNUcmFwcGluZ0ZvY3VzKCkpIHtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLnRyYXBGb2N1cyh0aGlzLl9mb2N1c1RyYXBUYXJnZXQsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5fd2l0aEZvY3VzVHJhcCAmJiB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIuaXNUcmFwcGluZ0ZvY3VzKCkpIHtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLnJlbGVhc2VGb2N1cyh0cnVlKTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSBiYWNrZHJvcCBjb250cm9sbGVyXG4gICAgICBpZiAodGhpcy5fd2l0aERpbUJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5zaG93QmFja2Ryb3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5oaWRlQmFja2Ryb3AoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9yZXR1cm5Ub09yaWdpbk9uQ2xvc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuX29yaWdpblBhcmVudCAmJiB0aGlzLl9vcmlnaW5QYXJlbnQgIT09IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpKSB7XG4gICAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIHRoaXMuX29yaWdpblBhcmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBvcGVuKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPcGVuIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2xvc2UgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueSkge1xuICAgICAgc3VwZXIoYXJncyk7XG4gICAgICB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duID0gdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoXG4gICAgICBjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZU1hcDxhbnk+IHwgTWFwPFByb3BlcnR5S2V5LCB1bmtub3duPlxuICAgICk6IHZvaWQge1xuICAgICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgIHRoaXMuX29yaWdpblBhcmVudCA9IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlQ2xvc2VPbkNsaWNrT3V0c2lkZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgICBpZiAodGhpcy5fY2xvc2VPbkVzY2FwZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgaW4gdGhlIGV2ZW50IHRoZSBvdmVybGF5IGVsZW1lbnQgd2FzIHBvcnRhbGVkLlxuICAgICAgaWYgKHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmxpc3RlbkZvckNsaWNrc091dHNpZGVPZih0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIucmVsZWFzZUZvY3VzKHRydWUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPdmVybGF5RWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxPdmVybGF5SW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtkaXNwbGF5OmJsb2NrO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWZ1bGwtd2lkdGg6bWF4LWNvbnRlbnQ7LS1jb250cm9sLXdpZHRoOnVuc2V0Oy0tY29udHJvbC1taW4td2lkdGg6MjQwcHg7LS1jb250cm9sLW1heC13aWR0aDp2YXIoLS1jb250cm9sLXdpZHRoKTstLWNvbnRyb2wtbWFyZ2luLXk6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWNvbnRyb2wtbWFyZ2luLXg6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWNvbnRyb2wtZGVzY3JpcHRvci1tYXJnaW46dmFyKC0tbXRlLXNwYWNlLXNtKTstLWxhYmVsLXdpZHRoOnZhcigtLWNvbnRyb2wtd2lkdGgpOy0tbGFiZWwtbWluLXdpZHRoOnZhcigtLWNvbnRyb2wtbWluLXdpZHRoKTstLWxhYmVsLW1heC13aWR0aDp2YXIoLS1jb250cm9sLW1heC13aWR0aCk7LS1sYWJlbC1tYXJnaW4teTp2YXIoLS1tdGUtc3BhY2UteHMpO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOnZhcigtLWZ1bGwtd2lkdGgpfS5ncmlkLWNvbnRhaW5lcntkaXNwbGF5OmlubGluZS1ncmlkO2dyaWQtdGVtcGxhdGUtYXJlYXM6XCJsYWJlbFwiIFwiY29udHJvbFwiO2dyaWQtdGVtcGxhdGUtcm93czoxZnIgbWlubWF4KDAsMTAwJSk7d2lkdGg6aW5oZXJpdH06aG9zdChbd2l0aEZ1bGxXaWR0aF0pey0tZnVsbC13aWR0aDoxMDAlOy0tY29udHJvbC13aWR0aDoxMDAlfTpob3N0KFt3aXRob3V0TWFyZ2luXSl7LS1jb250cm9sLW1hcmdpbi15OjBweH06aG9zdChbd2l0aG91dE1hcmdpbl0pIC5sYWJlbC1jb250YWluZXIuaGFzLWNvbnRlbnR7bWFyZ2luLWJvdHRvbTp2YXIoLS1jb250cm9sLWRlc2NyaXB0b3ItbWFyZ2luKX0ubGFiZWwtY29udGFpbmVye2Rpc3BsYXk6bm9uZTtncmlkLWFyZWE6bGFiZWw7bWF4LXdpZHRoOnZhcigtLWxhYmVsLW1heC13aWR0aCk7bWluLXdpZHRoOnZhcigtLWxhYmVsLW1pbi13aWR0aCk7d2lkdGg6dmFyKC0tbGFiZWwtd2lkdGgpfS5sYWJlbC1jb250YWluZXIuaGFzLWNvbnRlbnR7ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOnZhcigtLWxhYmVsLW1hcmdpbi15KX0ubGFiZWwtY29udGFpbmVyOm5vdCguaGFzLWNvbnRlbnQpe21hcmdpbjowIWltcG9ydGFudH0uY29udGV4dHtncmlkLWFyZWE6Y29udGV4dH0uZGVzY3JpcHRpb24sLmVycm9yLC5oaW50LC5sYWJlbHtkaXNwbGF5OmJsb2NrfS5kZXNjcmlwdGlvbiBtdGUtZGVzY3JpcHRpb24sLmRlc2NyaXB0aW9uIG10ZS1kZXNjcmlwdGlvbi10ZXh0LC5sYWJlbCBtdGUtbGFiZWwsLmxhYmVsIG10ZS1sYWJlbC10ZXh0LDpob3N0IDo6c2xvdHRlZChtdGUtZGVzY3JpcHRpb24tdGV4dFtzbG90PWRlc2NyaXB0aW9uXSksOmhvc3QgOjpzbG90dGVkKG10ZS1kZXNjcmlwdGlvbltzbG90PWRlc2NyaXB0aW9uXSksOmhvc3QgOjpzbG90dGVkKG10ZS1sYWJlbC10ZXh0W3Nsb3Q9bGFiZWxdKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWxhYmVsW3Nsb3Q9bGFiZWxdKXttYXJnaW46MH06aG9zdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKXstLWxhYmVsLXdpZHRoOm1heC1jb250ZW50Oy0tbGFiZWwtbWluLXdpZHRoOm1heC1jb250ZW50fTpob3N0KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pIC5ncmlkLWNvbnRhaW5lcntncmlkLXRlbXBsYXRlLWFyZWFzOlwibGFiZWwgY29udHJvbFwiO2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoYXV0byx2YXIoLS1sYWJlbC13aWR0aCkpIG1pbm1heChhdXRvLHZhcigtLWNvbnRyb2wtd2lkdGgpKX06aG9zdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKSAubGFiZWwtY29udGFpbmVye21hcmdpbi1ib3R0b206dmFyKC0tY29udHJvbC1tYXJnaW4teSk7bWFyZ2luLXJpZ2h0OnZhcigtLWNvbnRyb2wtbWFyZ2luLXgpO21hcmdpbi10b3A6Y2FsYyh2YXIoLS1jb250cm9sLW1hcmdpbi15KSArIHZhcigtLWxhYmVsLWJlZm9yZS1vZmZzZXQpKX0uZGVzY3JpcHRpb24sLmVycm9yLC5oaW50e21pbi13aWR0aDoxMDAlO3dpZHRoOi1tb3otbWluLWNvbnRlbnQ7d2lkdGg6bWluLWNvbnRlbnR9LmNvbnRyb2wtb3V0ZXItY29udGFpbmVye2dyaWQtYXJlYTpjb250cm9sO21hcmdpbi10b3A6dmFyKC0tY29udHJvbC1tYXJnaW4teSk7bWF4LXdpZHRoOnZhcigtLWNvbnRyb2wtbWF4LXdpZHRoKTttaW4td2lkdGg6dmFyKC0tY29udHJvbC1taW4td2lkdGgpO3dpZHRoOnZhcigtLWNvbnRyb2wtd2lkdGgpfTpob3N0KDpub3QoW2xhYmVsUG9zaXRpb249YmVmb3JlXSkpIC5jb250cm9sLW91dGVyLWNvbnRhaW5lci5oYXMtbGFiZWwtY29udGVudHttYXJnaW4tdG9wOmNhbGModmFyKC0tY29udHJvbC1tYXJnaW4teSkvMil9LmNvbnRyb2wtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWFyZ2luLWJvdHRvbTp2YXIoLS1jb250cm9sLW1hcmdpbi15KX0uZXJyb3IsLmhpbnR7ZGlzcGxheTpub25lfS5lcnJvci5oYXMtY29udGVudCwuaGludC5oYXMtY29udGVudHtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6dmFyKC0tY29udHJvbC1kZXNjcmlwdG9yLW1hcmdpbil9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tZm9ybS1maWVsZC1pbnRlcm5hbC1wYWRkaW5nOnZhcigtLW10ZS1zcGFjZS1zbSk7LS1mb3JtLWZpZWxkLWludGVybmFsLWdhcDp2YXIoLS1tdGUtc3BhY2Utc20pOy0tZm9ybS1maWVsZC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpOy0tZm9ybS1maWVsZC1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWZvcm0tZmllbGQtYmFja2dyb3VuZDp2YXIoLS1tdGUtc3VyZmFjZS0yKTstLXByZXBlbmQtYmFja2dyb3VuZDp2YXIoLS1tdGUtZ3JleS0xKTstLXByZXBlbmQtcGFkZGluZy14OnZhcigtLW10ZS1zcGFjZS1zbSk7LS1wcmVwZW5kLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpfTpob3N0KFtyYWRpdXM9c21dKXstLWZvcm0tZmllbGQtcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXhzKX06aG9zdChbcmFkaXVzPWxnXSl7LS1mb3JtLWZpZWxkLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14eGwpfTpob3N0KFtzaXplPXNtXSl7LS1wcmVwZW5kLXBhZGRpbmcteDpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1mb3JtLWZpZWxkLWludGVybmFsLXBhZGRpbmc6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXA6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpfTpob3N0KFtzaXplPWxnXSl7LS1wcmVwZW5kLXBhZGRpbmcteDpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtcGFkZGluZzpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwOmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpfS5mb3JtLWZpZWxke2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnZhcigtLWZvcm0tZmllbGQtYmFja2dyb3VuZCk7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztnYXA6dmFyKC0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXApO3Bvc2l0aW9uOnJlbGF0aXZlfTpob3N0KFtkaXNhYmxlZF0pIC5mb3JtLWZpZWxke2JhY2tncm91bmQ6dmFyKC0tbXRlLWRpc2FibGVkLTEpO2JvcmRlcjoxcHggc29saWQgdmFyKC0tbXRlLWRpc2FibGVkLTEpfS5hcHBlbmQsLnByZXBlbmR7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLXNlbGY6c3RyZXRjaDtiYWNrZ3JvdW5kOnZhcigtLXByZXBlbmQtYmFja2dyb3VuZCk7ZGlzcGxheTpub25lO2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUpO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzowIHZhcigtLXByZXBlbmQtcGFkZGluZy14KX0ucHJlcGVuZHtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItcmlnaHQ6MXB4IHNvbGlkIHZhcigtLXByZXBlbmQtYm9yZGVyLWNvbG9yKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKX0uYXBwZW5ke2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItbGVmdDoxcHggc29saWQgdmFyKC0tcHJlcGVuZC1ib3JkZXItY29sb3IpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKX0uYXBwZW5kLmhhcy1jb250ZW50LC5wcmVwZW5kLmhhcy1jb250ZW50e2Rpc3BsYXk6ZmxleH0ucHJlZml4LC5zdWZmaXh7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLXNlbGY6c3RyZXRjaDtkaXNwbGF5OmZsZXg7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ucHJlZml4Om5vdCguaGFzLXByZXBlbmQpe3BhZGRpbmctbGVmdDp2YXIoLS1wcmVwZW5kLXBhZGRpbmcteCl9LnN1ZmZpeDpub3QoLmhhcy1hcHBlbmQpe3BhZGRpbmctcmlnaHQ6dmFyKC0tcHJlcGVuZC1wYWRkaW5nLXgpfS5mb3JtLWZpZWxkLmZvY3VzZWQ6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3R0b206LTFweDtib3gtc2hhZG93OjAgMCAwIDFweCB2YXIoLS1tdGUtbGlnaHQpO2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO2xlZnQ6LTFweDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0Oi0xcHg7dG9wOi0xcHg7ei1pbmRleDo5fS5mb3JtLWZpZWxkLmludmFsaWR7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtcmdiKSl9Omhvc3QoW3dpdGhvdXRCb3JkZXJdKSA6aXMoLmZvcm0tZmllbGQsLnByZXBlbmQsLmFwcGVuZCl7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudH1gOyIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIEFjdGl2ZUxpbmtPcHRpb25zLFxuICBDb25zdHJ1Y3RvcixcbiAgTXRlRWxlbWVudCxcbiAgTXRlSGlzdG9yeUFwaVNlcnZpY2UsXG4gIFVuc3Vic2NyaWJlcixcbiAgaXNMaW5rQWN0aXZlLFxuICBvblVwZGF0ZSxcbn0gZnJvbSAnLi4vJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTGlua0ludGVyZmFjZSB7XG4gIGhyZWY/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEF1dG9BY3RpdmVMaW5rSW50ZXJmYWNlIHtcbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgbGluayBpcyB0aGUgYWN0aXZlIHBhZ2UgKi9cbiAgYWN0aXZlOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGxpbmsgc2hvdWxkIGF1dG9tYXRpY2FsbHkgdHJ5IHRvIGRldGVybWluZSBpZiBpdCBpcyB0aGUgYWN0aXZlIHBhZ2UgKi9cbiAgd2l0aG91dEF1dG9BY3RpdmU6IGJvb2xlYW47XG5cbiAgLyoqIE9wdGlvbnMgdG8gcmVmaW5lIGhvdyB0aGlzIGxpbmsgd2lsbCBkZXRlcm1pbmUgaWYgaXQgaXMgdGhlIGFjdGl2ZSBwYWdlICovXG4gIGFjdGl2ZUxpbmtPcHRpb25zPzogUGFydGlhbDxBY3RpdmVMaW5rT3B0aW9ucz47XG5cbiAgLyoqIFRoZSBpbnRlcm5hbCBhbmNob3IgZWxlbWVudCBmcm9tIHdoaWNoIHRvIHB1bGwgdGhlIGxvY2F0aW9uIGZvciBjb21wYXJpc29uICovXG4gIGFuY2hvckVsZW1lbnQ/OiBIVE1MQW5jaG9yRWxlbWVudDtcbn1cblxuZXhwb3J0IGNvbnN0IEF1dG9BY3RpdmVMaW5rTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQgJiBMaW5rSW50ZXJmYWNlPj4oXG4gIHN1cGVyQ2xhc3M6IFRcbikgPT4ge1xuICBjbGFzcyBBdXRvQWN0aXZlTGlua0VsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRob3V0QXV0b0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCByZWZsZWN0OiB0cnVlIH0pIGFjdGl2ZUxpbmtPcHRpb25zPzogUGFydGlhbDxBY3RpdmVMaW5rT3B0aW9ucz47XG5cbiAgICBhbmNob3JFbGVtZW50PzogSFRNTEFuY2hvckVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHVuc3ViOiBVbnN1YnNjcmliZXI7XG5cbiAgICBAb25VcGRhdGUoJ2FjdGl2ZScsIHsgd2FpdFVudGlsRmlyc3RVcGRhdGU6IHRydWUgfSlcbiAgICBwcml2YXRlIGhhbmRsZUFjdGl2ZUxpbmtDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5hbmNob3JFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICdwYWdlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG9uVXBkYXRlKFsnaHJlZicsICdpcmVmJywgJ3dpdGhBdXRvQWN0aXZlJ10sIHsgd2FpdFVudGlsRmlyc3RVcGRhdGU6IHRydWUgfSlcbiAgICBwcml2YXRlIGhhbmRsZUF1dG9BY3RpdmVDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5ocmVmIHx8IHRoaXNbJ2lyZWYnXSkge1xuICAgICAgICBpZiAodGhpcy53aXRob3V0QXV0b0FjdGl2ZSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgICB0aGlzLmhhbmRsZVVybENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVBdXRvQWN0aXZlQ2hhbmdlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRMaXN0ZW5lcigpIHtcbiAgICAgIGlmICghdGhpcy51bnN1Yikge1xuICAgICAgICB0aGlzLnVuc3ViID0gTXRlSGlzdG9yeUFwaVNlcnZpY2Uuc3RhdGVDaGFuZ2VzKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVVybENoYW5nZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgdGhpcy51bnN1Yj8uKCk7XG4gICAgICB0aGlzLnVuc3ViID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVVybENoYW5nZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlID0gaXNMaW5rQWN0aXZlKFxuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQ/LmhyZWYsXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICB0aGlzLmFjdGl2ZUxpbmtPcHRpb25zXG4gICAgICApO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIEF1dG9BY3RpdmVMaW5rRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxBdXRvQWN0aXZlTGlua0ludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50LCBTbG90Q29udHJvbGxlciB9IGZyb20gJy4uJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2xvdE9ic2VydmVySW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIFByb3AgdXNlZCB0byBkZWNsYXJlIHdoaWNoIHNsb3RzIGFyZSBiZWluZyB1c2VkIGR1cmluZyBTU1IgdG8gbWFrZSB0aGVtIHZpc2libGUgaW4gY2VydGFpbiBlZGdlLWNhc2VzLlxuICAgKi9cbiAgc3NyU2xvdHM6IHN0cmluZztcblxuICBzbG90Q29udHJvbGxlcjogU2xvdENvbnRyb2xsZXI7XG5cbiAgaGFzU2xvdDogKHNsb3Q6IHN0cmluZywgb3JWYWx1ZT86IGFueSkgPT4gYm9vbGVhbjtcblxuICBzc3JTbG90Q2hlY2s6IChzbG90czogc3RyaW5nKSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgU2xvdE9ic2VydmVyTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIFNsb3RPYnNlcnZlckVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBQcm9wIHVzZWQgdG8gZGVjbGFyZSB3aGljaCBzbG90cyBhcmUgYmVpbmcgdXNlZCBkdXJpbmcgU1NSIHRvIG1ha2UgdGhlbSB2aXNpYmxlIGluIGNlcnRhaW4gZWRnZS1jYXNlcy5cbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pXG4gICAgc2V0IHNzclNsb3RzKHZhbDogc3RyaW5nKSB7XG4gICAgICBsZXQgb2xkVmFsID0gdGhpcy5fc3NyU2xvdHM7XG4gICAgICB0aGlzLl9zc3JTbG90cyA9IHZhbDtcbiAgICAgIC8vIFBhcnNlIGFuZCBjYWNoZSBzc3Igc2xvdCBzZXRcbiAgICAgIGNvbnN0IHNsb3RzID0gKHRoaXMuX3NzclNsb3RzID8/ICcnKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5tYXAoKHNsb3QpID0+IHNsb3QudHJpbSgpKTtcbiAgICAgIHRoaXMuX3NzclNsb3RTZXQgPSBuZXcgU2V0PHN0cmluZz4oc2xvdHMpO1xuICAgICAgLy8gTm9ybWFsIHVwZGF0ZVxuICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCdzc3JTbG90cycsIG9sZFZhbCk7XG4gICAgfVxuICAgIGdldCBzc3JTbG90cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zc3JTbG90cztcbiAgICB9XG4gICAgcHJpdmF0ZSBfc3NyU2xvdHM/OiBzdHJpbmc7XG5cbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIF9zc3JTbG90U2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICBzbG90Q29udHJvbGxlciA9IG5ldyBTbG90Q29udHJvbGxlcih0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gc2xvdCBoYXMgY29udGVudCwgb3IgaWYgaXQgd2FzIHNwZWNpZmllZCBhcyBleGlzdGluZyBkdXJpbmcgU1NSLlxuICAgICAqIE9uY2UgY2FsbGVkLCB0aGUgY29tcG9uZW50IHdpbGwgbm93IGF1dG9tYXRpY2FsbHkgdXBkYXRlIGlmIHRoZSBjb250ZW50cyBvZiB0aGlzIHNsb3QgY2hhbmdlLlxuICAgICAqL1xuICAgIGhhc1Nsb3Qoc2xvdDogc3RyaW5nLCBvclZhbHVlPzogYW55KTogYm9vbGVhbiB7XG4gICAgICB0aGlzLnNsb3RDb250cm9sbGVyLnVwZGF0ZU9uQ2hhbmdlKHNsb3QpO1xuICAgICAgLy8gVE9ETyhyZWVjZSk6IHJlY29uc2lkZXIgd2hlbiBhIHNvbHV0aW9uIGV4aXN0cyBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzE0MzRcbiAgICAgIC8vIFdlIGhhdmUgdG8gYXNzdW1lIGFsaWdubWVudCB3aXRoIHNzclNsb3RDaGVjayB1bnRpbCB0aGUgZmlyc3QgdXBkYXRlIGhlcmUgb3RoZXJ3aXNlIHBhcnQgbWlzbWF0Y2hlcyBjYW4gb2NjdXJcbiAgICAgIGlmICghdGhpcy5fX2ZpcnN0VXBkYXRlZCkge1xuICAgICAgICByZXR1cm4gb3JWYWx1ZSB8fCB0aGlzLnNzclNsb3RDaGVjayhzbG90KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvclZhbHVlIHx8IHRoaXMuc2xvdENvbnRyb2xsZXIuY2hlY2soc2xvdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIHJlcXVlc3RlZCBzbG90IHdhcyBzcGVjaWZpZWQgaW4gdGhlIGxpc3Qgb2YgYHNzci1zbG90c2AuICovXG4gICAgc3NyU2xvdENoZWNrKHNsb3Q6IHN0cmluZykge1xuICAgICAgaWYgKHRoaXMuX19maXJzdFVwZGF0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NzclNsb3RTZXQuaGFzKHNsb3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gU2xvdE9ic2VydmVyRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxTbG90T2JzZXJ2ZXJJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgRm9ybUNvbnRyb2xNaXhpbiwgRm9ybUNvbnRyb2xJbnRlcmZhY2UgfSBmcm9tICdAb3Blbi13Yy9mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHsgcHJvcGVydHksIHF1ZXJ5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtcbiAgQ29uc3RydWN0b3IsXG4gIERpc2FibGVkTWl4aW4sXG4gIFRhYkluZGV4TWl4aW4sXG4gIE10ZUVsZW1lbnQsXG4gIGlubmVySW5wdXRWYWxpZGF0b3JzLFxuICBUYWJJbmRleEludGVyZmFjZSxcbiAgRGlzYWJsZWRJbnRlcmZhY2UsXG4gIG9uVXBkYXRlLFxuICBldmVudEVtaXR0ZXIsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnLi4nO1xuXG4vLyBSZXF1aXJlZCBwb2x5ZmlsbCBmb3Igbm93XG5pbXBvcnQgJy4uLy4uL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL2luZGV4JztcblxuZXhwb3J0IGludGVyZmFjZSBNdGVDaGVja2JveENoYW5nZURldGFpbCB7XG4gIC8qKiBUaGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wgY2hhbmdlZCAqL1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCBjaGFuZ2VkICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKiogV2hldGhlciBvciBub3QgdGhlIGVsZW1lbnQgaXMgY2hlY2tlZCAqL1xuICBjaGVja2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94SW50ZXJmYWNlIHtcbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgbGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBlcnJvciB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICBlcnJvcj86IHN0cmluZztcblxuICAvKiogVGhlIGhpbnQgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgaGludD86IHN0cmluZztcblxuICAvKiogQW4gYXJpYSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgdG8gdGhlIGlucHV0IGVsZW1lbnQgKi9cbiAgYXJpYUxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKiBUaGUgbmFtZSBmb3IgdGhlIGVsZW1lbnQuIFVzZWQgd2hlbiBzdWJtaXR0aW5nIGEgZm9ybSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50ICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKiogVGhlIHZhbHVlIGZvciB0aGUgZWxlbWVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgZWxlbWVudCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgICovXG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFsdGVycyB0aGUgYmVoYXZpb3Igb2YgdGhpcyBjb250cm9sLiBXaGVuIFwiY29udHJvbGxlZFwiLCBhIGNvbnRyb2xzIHZhbHVlIGlzIGRyaXZlbiBleHBsaWNpdGx5IGJ5IGV4dGVybmFsIHN0YXRlXG4gICAqIHZpYSB0aGUgYHZhbHVlYCBwcm9wLiBDaGFuZ2UgZXZlbnRzIHdpbGwgZmlyZSBidXQgdGhlIGNvbnRyb2wgdmFsdWUgd2lsbCBub3QgY2hhbmdlIHVudGlsIGl0IGlzIGFsdGVyZWQgZGlyZWN0bHkuXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIGNvbnRyb2xsZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGNoZWNrZWQgYnkgZGVmYXVsdC4gVXNlZnVsIGZvciB3aGVuIHJlc2V0dGluZyBmb3JtIGNvbnRyb2xzIG9yIHVzaW5nIGEgc3RhdGVsZXNzIGNvbXBvbmVudCAqL1xuICBkZWZhdWx0Q2hlY2tlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBpcyBjaGVja2VkIG9yIG5vdCAqL1xuICBjaGVja2VkOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBiZSByZWFkb25seSAqL1xuICByZWFkb25seTogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgc2VsZWN0aW5nIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIG9yIG5vdCAqL1xuICByZXF1aXJlZDogYm9vbGVhbjtcblxuICAvKiogUmVuZGVycyB0aGUgcmVxdWlyZWQgaW5kaWNhdG9yIGZvciB0aGlzIGlucHV0cyBsYWJlbCB3aXRob3V0IGVuYWJsaW5nIG5hdGl2ZSBgcmVxdWlyZWRgIHZhbGlkYXRpb24gKi9cbiAgc2hvd1JlcXVpcmVkOiBib29sZWFuO1xuXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGlucHV0IGJsdXJzICAqL1xuICBoYW5kbGVCbHVyKCk6IHZvaWQ7XG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZCBvbiAgKi9cbiAgaGFuZGxlRm9jdXMoKTogdm9pZDtcblxuICAvKiogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgY2hhbmdlcyAgKi9cbiAgaGFuZGxlQ2hhbmdlKCk6IHZvaWQ7XG5cbiAgLyoqIEEgc2V0IG9mIGF0dHJpYnV0ZXMgdG8gYmUgZm9yd2FyZGVkIHRvIGFuIGVsZW1lbnQgd2l0aGluIHJlbmRlciBhbmQgcmVtb3ZlZCBmcm9tIHRoZSBlbGVtZW50ICovXG4gIGluaGVyaXRlZEF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBjb25zdCBDaGVja2JveE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBDaGVja2JveEVsZW1lbnQgZXh0ZW5kcyBUYWJJbmRleE1peGluKEZvcm1Db250cm9sTWl4aW4oRGlzYWJsZWRNaXhpbihzdXBlckNsYXNzKSksIHtcbiAgICBpbml0aWFsVGFiSW5kZXg6IDAsXG4gIH0pIHtcbiAgICBpbmhlcml0ZWRBdHRyaWJ1dGVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIHN0YXRpYyBmb3JtQ29udHJvbFZhbGlkYXRvcnMgPSBpbm5lcklucHV0VmFsaWRhdG9ycztcblxuICAgIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KCkgbGFiZWw/OiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIGVycm9yIHRleHQgZm9yIHRoZSBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KCkgZXJyb3I/OiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIGhpbnQgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoKSBoaW50Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQWx0ZXJzIHRoZSBiZWhhdmlvciBvZiB0aGlzIGNvbnRyb2wuIFdoZW4gXCJjb250cm9sbGVkXCIsIGEgY29udHJvbHMgdmFsdWUgaXMgZHJpdmVuIGV4cGxpY2l0bHkgYnkgZXh0ZXJuYWwgc3RhdGVcbiAgICAgKiB2aWEgdGhlIGB2YWx1ZWAgcHJvcC4gQ2hhbmdlIGV2ZW50cyB3aWxsIGZpcmUgYnV0IHRoZSBjb250cm9sIHZhbHVlIHdpbGwgbm90IGNoYW5nZSB1bnRpbCBpdCBpcyBhbHRlcmVkIGRpcmVjdGx5LlxuICAgICAqIEBleHBlcmltZW50YWxcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIGNvbnRyb2xsZWQ6IGJvb2xlYW47XG5cbiAgICAvKiogQW4gYXJpYSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgdG8gdGhlIGlucHV0IGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6ICdhcmlhLWxhYmVsJywgcmVmbGVjdDogdHJ1ZSB9KSBhcmlhTGFiZWw6IHN0cmluZztcblxuICAgIC8qKiBUaGUgbmFtZSBmb3IgdGhlIGVsZW1lbnQuIFVzZWQgd2hlbiBzdWJtaXR0aW5nIGEgZm9ybSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBuYW1lOiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIHZhbHVlIGZvciB0aGUgZWxlbWVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgZWxlbWVudCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgICovXG4gICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSB2YWx1ZT8gPSAnb24nO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGNoZWNrZWQgYnkgZGVmYXVsdC4gVXNlZnVsIGZvciB3aGVuIHJlc2V0dGluZyBmb3JtIGNvbnRyb2xzIG9yIHVzaW5nIGEgc3RhdGVsZXNzIGNvbXBvbmVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgZGVmYXVsdENoZWNrZWQgPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGNoZWNrZWQgb3Igbm90ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBjaGVja2VkID0gZmFsc2U7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgcmVhZG9ubHkgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHJlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAvKiogV2hldGhlciB0aGUgc2VsZWN0aW5nIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIG9yIG5vdCAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcmVxdWlyZWQgPSBmYWxzZTtcblxuICAgIC8qKiBSZW5kZXJzIHRoZSByZXF1aXJlZCBpbmRpY2F0b3IgZm9yIHRoaXMgaW5wdXRzIGxhYmVsIHdpdGhvdXQgZW5hYmxpbmcgbmF0aXZlIGByZXF1aXJlZGAgdmFsaWRhdGlvbiAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgc2hvd1JlcXVpcmVkPztcblxuICAgIC8qKiBUaGUgaW5wdXQgZWxlbWVudCB1c2VkIHdpdGhpbiB0aGUgZm9ybSBjb250cm9sIG1peGluICovXG4gICAgQHF1ZXJ5KCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSB2YWxpZGF0aW9uVGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgLyoqIEVtaXR0ZWQgd2hlbiB0aGUgZWxlbWVudCdzIHN0YXRlIGlzIGFib3V0IHRvIGNoYW5nZS4gSWYgZGVmYXVsdCBpcyBwcmV2ZW50ZWQsIGl0IHdpbGwgcmV2ZXJ0IHRoZSBjaGVja2JveCB0byBpdCdzIG9yaWdpbmFsIGNoZWNrZWQgc3RhdGUgcHJpb3IgdG8gc2VsZWN0aW5nLiAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfd2lsbENoYW5nZTogRXZlbnRFbWl0dGVyPE10ZUNoZWNrYm94Q2hhbmdlRGV0YWlsPjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhlIGVsZW1lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZC4gKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TXRlQ2hlY2tib3hDaGFuZ2VEZXRhaWw+O1xuXG4gICAgLyoqIEVtaXRzIHdoZW4gdGhpcyBlbGVtZW50IGlzIGZvY3VzZWQgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uRm9jdXM6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0cyB3aGVuIHRoaXMgZWxlbWVudCBsb3NlcyBmb2N1cyAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25CbHVyOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBAb25VcGRhdGUoJ2RlZmF1bHRDaGVja2VkJylcbiAgICBwcm90ZWN0ZWQgb25EZWZhdWx0Q2hlY2tlZENoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRyb2xsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCAmJiB0aGlzLmRlZmF1bHRDaGVja2VkICYmICF0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAb25VcGRhdGUoWyd2YWx1ZScsICdjaGVja2VkJ10sIHsgb246ICdib3RoJyB9KVxuICAgIHByb3RlY3RlZCB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgQG9uVXBkYXRlKCdhcmlhTGFiZWwnLCB7IG9uOiAnYm90aCcgfSlcbiAgICBwcm90ZWN0ZWQgdXBkYXRlTGFiZWwoKSB7XG4gICAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIC4uLnRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyxcbiAgICAgICAgYXJpYUxhYmVsOiB0aGlzLmFyaWFMYWJlbCxcbiAgICAgIH07XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIC0tIEZvcm0gY29udHJvbCB2YWxpZGF0aW9uIG92ZXJyaWRlcyAtLSAqL1xuICAgIHNob3VsZEZvcm1WYWx1ZVVwZGF0ZSgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0Rm9ybUNvbnRyb2woKTogdm9pZCB7XG4gICAgICBzdXBlci5yZXNldEZvcm1Db250cm9sPy4oKTtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRyb2xsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmRlZmF1bHRDaGVja2VkO1xuICAgIH1cblxuICAgIHZhbGlkaXR5Q2FsbGJhY2soKTogc3RyaW5nIHwgdm9pZCB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvciB8fCB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIH1cblxuICAgIC8qKiAtLSBUYWJJbmRleCBvdmVycmlkZXMgLS0gKi9cbiAgICBnZXRUYWJJbmRleEFkYXB0ZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uVGFyZ2V0Py5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgc2V0VGFiSW5kZXhBZGFwdGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0Py5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdmFsdWUpO1xuICAgIH1cblxuICAgIHJlbW92ZVRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0Py5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vdFByZXZlbnRlZCA9IHRoaXMuX3dpbGxDaGFuZ2UuZW1pdChcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBjaGVja2VkOiAhdGhpcy5jaGVja2VkLFxuICAgICAgICB9LFxuICAgICAgICB7IGNhbmNlbGFibGU6IHRydWUgfVxuICAgICAgKTtcblxuICAgICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgY2hlY2tlZDogIXRoaXMuY2hlY2tlZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChub3RQcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIGNoZWNrZWQ6IHRoaXMuY2hlY2tlZCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICAgIHRoaXMuX29uQmx1ci5lbWl0KCk7XG4gICAgfTtcblxuICAgIGhhbmRsZUZvY3VzID0gKCkgPT4ge1xuICAgICAgdGhpcy5fb25Gb2N1cy5lbWl0KCk7XG4gICAgfTtcblxuICAgIC8qKiBDbGlja3MgdGhlIGVsZW1lbnQgKi9cbiAgICBwdWJsaWMgY2xpY2soKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQuY2xpY2soKTtcbiAgICB9XG5cbiAgICAvKiogRm9jdXNlcyB0aGUgZWxlbWVudCAqL1xuICAgIHB1YmxpYyBmb2N1cygpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblRhcmdldC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKiBCbHVycyB0aGUgZWxlbWVudCAqL1xuICAgIHB1YmxpYyBibHVyKCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0LmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gQ2hlY2tib3hFbGVtZW50IGFzIENvbnN0cnVjdG9yPFxuICAgIENoZWNrYm94SW50ZXJmYWNlICYgVGFiSW5kZXhJbnRlcmZhY2UgJiBGb3JtQ29udHJvbEludGVyZmFjZSAmIERpc2FibGVkSW50ZXJmYWNlXG4gID4gJlxuICAgIFQ7XG59O1xuIiwgIi8qKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBXZWFrTWFwcyB1c2VkIHRocm91Z2hvdXQgdGhpcyBwcm9qZWN0LiBUaGUgV2Vha01hcHMgZXhpc3QgdG8gdGllXG4gKiBvYmplY3RzIHRvZ2V0aGVyIHdpdGhvdXQgcG9sbHV0aW5nIHRoZSBvYmplY3RzIHRoZW1zZWx2ZXMgd2l0aCByZWZlcmVuY2VzIHdlJ2QgcmF0aGVyIGtlZXBcbiAqIGhpZGRlbi4gVGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIHdvcmsgYXMgdHJhbnNwYXJlbnRseSBhcyBwb3NzaWJsZS5cbiAqL1xuaW1wb3J0IHsgSUVsZW1lbnRJbnRlcm5hbHMsIElDdXN0b21FbGVtZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgaXQgaXMgYXR0YWNoZWQgdG8gKi9cbmV4cG9ydCBjb25zdCByZWZNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgSUN1c3RvbUVsZW1lbnQ+KCk7XG5cbi8qKiBVc2VlIGFuIEVsZW1lbnRzSW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBpdHMgVmFsaWRpdHlTdGF0ZSBvYmplY3QgKi9cbmV4cG9ydCBjb25zdCB2YWxpZGl0eU1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBWYWxpZGl0eVN0YXRlPigpO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGl0cyBhdHRhY2hlZCBpbnB1dFt0eXBlPVwiaGlkZGVuXCJdICovXG5leHBvcnQgY29uc3QgaGlkZGVuSW5wdXRNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgSFRNTElucHV0RWxlbWVudFtdPigpO1xuXG4vKiogVXNlIGEgY3VzdG9tIGVsZW1lbnQgdG8gZ2V0IGl0cyBhdHRhY2hlZCBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlICovXG5leHBvcnQgY29uc3QgaW50ZXJuYWxzTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzPigpO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IHRoZSBhdHRhY2hlZCB2YWxpZGF0aW9uIG1lc3NhZ2UgKi9cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uTWVzc2FnZU1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBzdHJpbmc+KCk7XG5cbi8qKiBVc2UgYSBmb3JtIGVsZW1lbnQgdG8gZ2V0IGF0dGFjaGVkIGN1c3RvbSBlbGVtZW50cyBhbmQgRWxlbWVudEludGVybmFscyBpbnN0YW5jZXMgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5leHBvcnQgY29uc3QgZm9ybXNNYXAgPSBuZXcgV2Vha01hcDxIVE1MRm9ybUVsZW1lbnQsIE9iamVjdD4oKTtcblxuLyoqIFVzZSBhIGN1c3RvbSBlbGVtZW50IG9yIG90aGVyIG9iamVjdCB0byBnZXQgdGhlaXIgYXNzb2NpYXRlZCBNdXRhdGlvbk9ic2VydmVycyAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd0hvc3RzTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIE11dGF0aW9uT2JzZXJ2ZXI+KCk7XG5cbi8qKiBVc2UgYSBmb3JtIGVsZW1lbnQgdG8gZ2V0IGEgc2V0IG9mIGF0dGFjaGVkIGN1c3RvbSBlbGVtZW50cyAqL1xuZXhwb3J0IGNvbnN0IGZvcm1FbGVtZW50c01hcCA9IG5ldyBXZWFrTWFwPEhUTUxGb3JtRWxlbWVudCwgU2V0PElDdXN0b21FbGVtZW50Pj4oKTtcblxuLyoqIFVzZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBhIHJlZmVyZW5jZSB0byBhbiBlbGVtZW50J3MgdmFsdWUgKi9cbmV4cG9ydCBjb25zdCByZWZWYWx1ZU1hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBhbnk+KCk7XG5cbi8qKiBFbGVtZW50cyB0aGF0IG5lZWQgdG8gYmUgdXBncmFkZWQgb25jZSBhZGRlZCB0byB0aGUgRE9NICovXG5leHBvcnQgY29uc3QgdXBncmFkZU1hcCA9IG5ldyBXZWFrTWFwPEVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzPigpO1xuXG4vKiogU2F2ZSByZWZlcmVuY2VzIHRvIHNoYWRvdyByb290cyBmb3IgaW5jbHVzaW9uIGluIGludGVybmFscyBpbnN0YW5jZSAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd1Jvb3RNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgU2hhZG93Um9vdD4oKTtcblxuLyoqIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIGludGVybmFscycgdmFsaWRhdGlvbiBhbmNob3IgKi9cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uQW5jaG9yTWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIEhUTUxFbGVtZW50PigpO1xuXG4vKiogTWFwIERvY3VtZW50RnJhZ21lbnRzIHRvIHRoZWlyIE11dGF0aW9uT2JzZXJ2ZXJzIHNvIHdlIGNhbiBkaXNjb25uZWN0IG9uY2UgZWxlbWVudHMgYXJlIHJlbW92ZWQgKi9cbmV4cG9ydCBjb25zdCBkb2N1bWVudEZyYWdtZW50TWFwID0gbmV3IFdlYWtNYXA8RG9jdW1lbnRGcmFnbWVudCwgTXV0YXRpb25PYnNlcnZlcj4oKTtcblxuLyoqIFdoZXRoZXIgY29ubmVjdGVkQ2FsbGJhY2sgaGFzIGFscmVhZHkgYmVlbiBjYWxsZWQuICovXG5leHBvcnQgY29uc3QgY29ubmVjdGVkQ2FsbGJhY2tNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgYm9vbGVhbj4oKTtcblxuLyoqIFNhdmUgYSByZWZlcmVuY2UgdG8gdmFsaWRpdHkgc3RhdGUgZm9yIGVsZW1lbnRzIHRoYXQgbmVlZCB0byB1cGdyYWRlIGFmdGVyIGJlaW5nIGNvbm5lY3RlZCAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkaXR5VXBncmFkZU1hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBJRWxlbWVudEludGVybmFscz4oKTtcbiIsICJpbXBvcnQgeyB1cGdyYWRlTWFwIH0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IElBb20sIElFbGVtZW50SW50ZXJuYWxzIH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbmV4cG9ydCBjb25zdCBhb206IElBb20gPSB7XG4gIGFyaWFBdG9taWM6ICdhcmlhLWF0b21pYycsXG4gIGFyaWFBdXRvQ29tcGxldGU6ICdhcmlhLWF1dG9jb21wbGV0ZScsXG4gIGFyaWFCdXN5OiAnYXJpYS1idXN5JyxcbiAgYXJpYUNoZWNrZWQ6ICdhcmlhLWNoZWNrZWQnLFxuICBhcmlhQ29sQ291bnQ6ICdhcmlhLWNvbGNvdW50JyxcbiAgYXJpYUNvbEluZGV4OiAnYXJpYS1jb2xpbmRleCcsXG4gIGFyaWFDb2xJbmRleFRleHQ6ICdhcmlhLWNvbGluZGV4dGV4dCcsXG4gIGFyaWFDb2xTcGFuOiAnYXJpYS1jb2xzcGFuJyxcbiAgYXJpYUN1cnJlbnQ6ICdhcmlhLWN1cnJlbnQnLFxuICBhcmlhRGlzYWJsZWQ6ICdhcmlhLWRpc2FibGVkJyxcbiAgYXJpYUV4cGFuZGVkOiAnYXJpYS1leHBhbmRlZCcsXG4gIGFyaWFIYXNQb3B1cDogJ2FyaWEtaGFzcG9wdXAnLFxuICBhcmlhSGlkZGVuOiAnYXJpYS1oaWRkZW4nLFxuICBhcmlhSW52YWxpZDogJ2FyaWEtaW52YWxpZCcsXG4gIGFyaWFLZXlTaG9ydGN1dHM6ICdhcmlhLWtleXNob3J0Y3V0cycsXG4gIGFyaWFMYWJlbDogJ2FyaWEtbGFiZWwnLFxuICBhcmlhTGV2ZWw6ICdhcmlhLWxldmVsJyxcbiAgYXJpYUxpdmU6ICdhcmlhLWxpdmUnLFxuICBhcmlhTW9kYWw6ICdhcmlhLW1vZGFsJyxcbiAgYXJpYU11bHRpTGluZTogJ2FyaWEtbXVsdGlsaW5lJyxcbiAgYXJpYU11bHRpU2VsZWN0YWJsZTogJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJyxcbiAgYXJpYU9yaWVudGF0aW9uOiAnYXJpYS1vcmllbnRhdGlvbicsXG4gIGFyaWFQbGFjZWhvbGRlcjogJ2FyaWEtcGxhY2Vob2xkZXInLFxuICBhcmlhUG9zSW5TZXQ6ICdhcmlhLXBvc2luc2V0JyxcbiAgYXJpYVByZXNzZWQ6ICdhcmlhLXByZXNzZWQnLFxuICBhcmlhUmVhZE9ubHk6ICdhcmlhLXJlYWRvbmx5JyxcbiAgYXJpYVJlbGV2YW50OiAnYXJpYS1yZWxldmFudCcsXG4gIGFyaWFSZXF1aXJlZDogJ2FyaWEtcmVxdWlyZWQnLFxuICBhcmlhUm9sZURlc2NyaXB0aW9uOiAnYXJpYS1yb2xlZGVzY3JpcHRpb24nLFxuICBhcmlhUm93Q291bnQ6ICdhcmlhLXJvd2NvdW50JyxcbiAgYXJpYVJvd0luZGV4OiAnYXJpYS1yb3dpbmRleCcsXG4gIGFyaWFSb3dJbmRleFRleHQ6ICdhcmlhLXJvd2luZGV4dGV4dCcsXG4gIGFyaWFSb3dTcGFuOiAnYXJpYS1yb3dzcGFuJyxcbiAgYXJpYVNlbGVjdGVkOiAnYXJpYS1zZWxlY3RlZCcsXG4gIGFyaWFTZXRTaXplOiAnYXJpYS1zZXRzaXplJyxcbiAgYXJpYVNvcnQ6ICdhcmlhLXNvcnQnLFxuICBhcmlhVmFsdWVNYXg6ICdhcmlhLXZhbHVlbWF4JyxcbiAgYXJpYVZhbHVlTWluOiAnYXJpYS12YWx1ZW1pbicsXG4gIGFyaWFWYWx1ZU5vdzogJ2FyaWEtdmFsdWVub3cnLFxuICBhcmlhVmFsdWVUZXh0OiAnYXJpYS12YWx1ZXRleHQnLFxuICByb2xlOiAncm9sZScsXG59O1xuXG5leHBvcnQgY29uc3QgaW5pdEFvbSA9IChyZWY6IEVsZW1lbnQsIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHMpID0+IHtcbiAgZm9yIChsZXQga2V5IGluIGFvbSkge1xuICAgIGludGVybmFsc1trZXldID0gbnVsbDtcblxuICAgIGxldCBjbG9zdXJlVmFsdWUgPSBudWxsO1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBhb21ba2V5XTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW50ZXJuYWxzLCBrZXksIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGNsb3N1cmVWYWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgY2xvc3VyZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICByZWYuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGdyYWRlTWFwLnNldChyZWYsIGludGVybmFscyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHtcbiAgaW50ZXJuYWxzTWFwLFxuICBzaGFkb3dIb3N0c01hcCxcbiAgdXBncmFkZU1hcCxcbiAgaGlkZGVuSW5wdXRNYXAsXG4gIGRvY3VtZW50RnJhZ21lbnRNYXAsXG4gIGZvcm1FbGVtZW50c01hcCxcbiAgdmFsaWRpdHlVcGdyYWRlTWFwLFxuICByZWZWYWx1ZU1hcCxcbn0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IGFvbSB9IGZyb20gJy4vYW9tLmpzJztcbmltcG9ydCB7XG4gIHJlbW92ZUhpZGRlbklucHV0cyxcbiAgaW5pdEZvcm0sXG4gIGluaXRMYWJlbHMsXG4gIHVwZ3JhZGVJbnRlcm5hbHMsXG4gIHNldERpc2FibGVkLFxuICBtdXRhdGlvbk9ic2VydmVyRXhpc3RzLFxufSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IElDdXN0b21FbGVtZW50IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbmZ1bmN0aW9uIGluaXROb2RlKG5vZGU6IElDdXN0b21FbGVtZW50KTogdm9pZCB7XG4gIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQobm9kZSk7XG4gIGNvbnN0IHsgZm9ybSB9ID0gaW50ZXJuYWxzO1xuICBpbml0Rm9ybShub2RlLCBmb3JtLCBpbnRlcm5hbHMpO1xuICBpbml0TGFiZWxzKG5vZGUsIGludGVybmFscy5sYWJlbHMpO1xufVxuXG4vKipcbiAqIElmIGEgZmllbGRzZXQncyBkaXNhYmxlZCBzdGF0ZSBpcyB0b2dnbGVkLCB0aGUgZm9ybURpc2FibGVkQ2FsbGJhY2tcbiAqIG9uIGFueSBjaGlsZCBmb3JtLWFzc29jaWF0ZWQgY3Vzb3RtIGVsZW1lbnRzLlxuICovXG5leHBvcnQgY29uc3Qgd2Fsa0ZpZWxkc2V0ID0gKG5vZGU6IEhUTUxGaWVsZFNldEVsZW1lbnQsIGZpcnN0UmVuZGVyID0gZmFsc2UpOiB2b2lkID0+IHtcbiAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihub2RlLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwge1xuICAgIGFjY2VwdE5vZGUobm9kZTogSUN1c3RvbUVsZW1lbnQpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIGludGVybmFsc01hcC5oYXMobm9kZSkgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9TS0lQO1xuICAgIH0sXG4gIH0pO1xuXG4gIGxldCBjdXJyZW50ID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgSUN1c3RvbUVsZW1lbnQ7XG4gIC8qKlxuICAgKiBXZSBkb24ndCBuZWVkIHRvIGNhbGwgYW55dGhpbmcgb24gZmlyc3QgcmVuZGVyIGlmXG4gICAqIHRoZSBlbGVtZW50IGlzbid0IGRpc2FibGVkXG4gICAqL1xuICBjb25zdCBpc0NhbGxOZWNlc3NhcnkgPSAhZmlyc3RSZW5kZXIgfHwgbm9kZS5kaXNhYmxlZDtcblxuICB3aGlsZSAoY3VycmVudCkge1xuICAgIGlmIChjdXJyZW50LmZvcm1EaXNhYmxlZENhbGxiYWNrICYmIGlzQ2FsbE5lY2Vzc2FyeSkge1xuICAgICAgc2V0RGlzYWJsZWQoY3VycmVudCwgbm9kZS5kaXNhYmxlZCk7XG4gICAgfVxuICAgIGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWc6IE11dGF0aW9uT2JzZXJ2ZXJJbml0ID0ge1xuICBhdHRyaWJ1dGVzOiB0cnVlLFxuICBhdHRyaWJ1dGVGaWx0ZXI6IFsnZGlzYWJsZWQnLCAnbmFtZSddLFxufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIgPSBtdXRhdGlvbk9ic2VydmVyRXhpc3RzKClcbiAgPyBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zTGlzdDogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xuICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldCBhcyBJQ3VzdG9tRWxlbWVudDtcblxuICAgICAgICAvKiogTWFuYWdlIGNoYW5nZXMgdG8gdGhlIHJlZidzIGRpc2FibGVkIHN0YXRlICovXG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgICAgICAgc2V0RGlzYWJsZWQodGFyZ2V0LCB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5sb2NhbE5hbWUgPT09ICdmaWVsZHNldCcpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVwdXJwb3NlIHRoZSBvYnNlcnZlciBmb3IgZmllbGRzZXRzIHdoaWNoIG5lZWRcbiAgICAgICAgICAgICAqIHRvIGJlIHdhbGtlZCB3aGVuZXZlciB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIGlzIHNldFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB3YWxrRmllbGRzZXQodGFyZ2V0IGFzIHVua25vd24gYXMgSFRNTEZpZWxkU2V0RWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKiBNYW5hZ2UgY2hhbmdlcyB0byB0aGUgcmVmJ3MgbmFtZSAqL1xuICAgICAgICBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ25hbWUnKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZWZWYWx1ZU1hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIGludGVybmFscy5zZXRGb3JtVmFsdWUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIDogKHt9IGFzIE11dGF0aW9uT2JzZXJ2ZXIpO1xuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZXJDYWxsYmFjayhtdXRhdGlvbkxpc3Q6IE11dGF0aW9uUmVjb3JkW10pIHtcbiAgbXV0YXRpb25MaXN0LmZvckVhY2goKG11dGF0aW9uUmVjb3JkKSA9PiB7XG4gICAgY29uc3QgeyBhZGRlZE5vZGVzLCByZW1vdmVkTm9kZXMgfSA9IG11dGF0aW9uUmVjb3JkO1xuICAgIGNvbnN0IGFkZGVkID0gQXJyYXkuZnJvbShhZGRlZE5vZGVzKSBhcyBJQ3VzdG9tRWxlbWVudFtdO1xuICAgIGNvbnN0IHJlbW92ZWQgPSBBcnJheS5mcm9tKHJlbW92ZWROb2RlcykgYXMgSUN1c3RvbUVsZW1lbnRbXTtcblxuICAgIGFkZGVkLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIC8qKiBBbGxvd3MgZm9yIGR5bmFtaWMgYWRkaXRpb24gb2YgZWxlbWVudHMgdG8gZm9ybXMgKi9cbiAgICAgIGlmIChpbnRlcm5hbHNNYXAuaGFzKG5vZGUpICYmIG5vZGUuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICAgICAgaW5pdE5vZGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKiBVcGdyYWRlIHRoZSBhY2Nlc3NpYmlsaXR5IGluZm9ybWF0aW9uIG9uIGFueSBwcmV2aW91c2x5IGNvbm5lY3RlZCAqL1xuICAgICAgaWYgKHVwZ3JhZGVNYXAuaGFzKG5vZGUpKSB7XG4gICAgICAgIGNvbnN0IGludGVybmFscyA9IHVwZ3JhZGVNYXAuZ2V0KG5vZGUpO1xuICAgICAgICBjb25zdCBhb21LZXlzID0gT2JqZWN0LmtleXMoYW9tKTtcbiAgICAgICAgYW9tS2V5c1xuICAgICAgICAgIC5maWx0ZXIoKGtleSkgPT4gaW50ZXJuYWxzW2tleV0gIT09IG51bGwpXG4gICAgICAgICAgLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYW9tW2tleV0sIGludGVybmFsc1trZXldKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgdXBncmFkZU1hcC5kZWxldGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKiBVcGdyYWRlIHRoZSB2YWxpZGl0eSBzdGF0ZSB3aGVuIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCAqL1xuICAgICAgaWYgKHZhbGlkaXR5VXBncmFkZU1hcC5oYXMobm9kZSkpIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gdmFsaWRpdHlVcGdyYWRlTWFwLmdldChub2RlKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2ludGVybmFscy12YWxpZCcsIGludGVybmFscy52YWxpZGl0eS52YWxpZC50b1N0cmluZygpKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2ludGVybmFscy1pbnZhbGlkJywgKCFpbnRlcm5hbHMudmFsaWRpdHkudmFsaWQpLnRvU3RyaW5nKCkpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgKCFpbnRlcm5hbHMudmFsaWRpdHkudmFsaWQpLnRvU3RyaW5nKCkpO1xuICAgICAgICB2YWxpZGl0eVVwZ3JhZGVNYXAuZGVsZXRlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvKiogSWYgdGhlIG5vZGUgdGhhdCdzIGFkZGVkIGlzIGEgZm9ybSwgY2hlY2sgdGhlIHZhbGlkaXR5ICovXG4gICAgICBpZiAobm9kZS5sb2NhbE5hbWUgPT09ICdmb3JtJykge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KG5vZGUgYXMgdW5rbm93biBhcyBIVE1MRm9ybUVsZW1lbnQpO1xuICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKG5vZGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCB7XG4gICAgICAgICAgYWNjZXB0Tm9kZShub2RlOiBJQ3VzdG9tRWxlbWVudCk6IG51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gaW50ZXJuYWxzTWFwLmhhcyhub2RlKSAmJiAhKGZvcm1FbGVtZW50cyAmJiBmb3JtRWxlbWVudHMuaGFzKG5vZGUpKVxuICAgICAgICAgICAgICA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVFxuICAgICAgICAgICAgICA6IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVA7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcblxuICAgICAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICAgIGluaXROb2RlKGN1cnJlbnQpO1xuICAgICAgICAgIGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5sb2NhbE5hbWUgPT09ICdmaWVsZHNldCcpIHtcbiAgICAgICAgZGlzYWJsZWRPck5hbWVPYnNlcnZlci5vYnNlcnZlPy4obm9kZSwgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZyk7XG4gICAgICAgIHdhbGtGaWVsZHNldChub2RlIGFzIHVua25vd24gYXMgSFRNTEZpZWxkU2V0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZW1vdmVkLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQobm9kZSk7XG4gICAgICAvKiogQ2xlYW4gdXAgYW55IGhpZGRlbiBpbnB1dCBlbGVtZW50cyBsZWZ0IGFmdGVyIGFuIGVsZW1lbnQgaXMgZGlzY29ubmVjdGVkICovXG4gICAgICBpZiAoaW50ZXJuYWxzICYmIGhpZGRlbklucHV0TWFwLmdldChpbnRlcm5hbHMpKSB7XG4gICAgICAgIHJlbW92ZUhpZGRlbklucHV0cyhpbnRlcm5hbHMpO1xuICAgICAgfVxuICAgICAgLyoqIERpc2Nvbm5lY3QgYW55IHVubmVlZGVkIE11dGF0aW9uT2JzZXJ2ZXJzICovXG4gICAgICBpZiAoc2hhZG93SG9zdHNNYXAuaGFzKG5vZGUpKSB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gc2hhZG93SG9zdHNNYXAuZ2V0KG5vZGUpO1xuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRoaXMgb2JzZXJ2ZXIgY2FsbGJhY2sgaXMganVzdCBmb3IgZG9jdW1lbnQgZnJhZ21lbnRzXG4gKiBpdCB3aWxsIHVwZ3JhZGUgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSBpZiB3YXMgYXBwZW5kZWRcbiAqIGZyb20gYSBkb2N1bWVudCBmcmFnbWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyYWdtZW50T2JzZXJ2ZXJDYWxsYmFjayhtdXRhdGlvbkxpc3Q6IE11dGF0aW9uUmVjb3JkW10pOiB2b2lkIHtcbiAgbXV0YXRpb25MaXN0LmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgY29uc3QgeyByZW1vdmVkTm9kZXMgfSA9IG11dGF0aW9uO1xuXG4gICAgcmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gZG9jdW1lbnRGcmFnbWVudE1hcC5nZXQobXV0YXRpb24udGFyZ2V0IGFzIERvY3VtZW50RnJhZ21lbnQpO1xuICAgICAgaWYgKGludGVybmFsc01hcC5oYXMobm9kZSBhcyBJQ3VzdG9tRWxlbWVudCkpIHtcbiAgICAgICAgdXBncmFkZUludGVybmFscyhub2RlIGFzIElDdXN0b21FbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogRGVmZXIgdGhlIHVwZ3JhZGUgb2Ygbm9kZXMgd2l0aGluZyBhIERvY3VtZW50RnJhZ21lbnRcbiAqIEBwYXJhbSBmcmFnbWVudCB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmVyVXBncmFkZSA9IChmcmFnbWVudDogRG9jdW1lbnRGcmFnbWVudCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZyYWdtZW50T2JzZXJ2ZXJDYWxsYmFjayk7XG4gIG9ic2VydmVyLm9ic2VydmU/LihmcmFnbWVudCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gIGRvY3VtZW50RnJhZ21lbnRNYXAuc2V0KGZyYWdtZW50LCBvYnNlcnZlcik7XG59O1xuXG5leHBvcnQgY29uc3Qgb2JzZXJ2ZXIgPSBtdXRhdGlvbk9ic2VydmVyRXhpc3RzKClcbiAgPyBuZXcgTXV0YXRpb25PYnNlcnZlcihvYnNlcnZlckNhbGxiYWNrKVxuICA6ICh7fSBhcyBNdXRhdGlvbk9ic2VydmVyKTtcbmV4cG9ydCBjb25zdCBvYnNlcnZlckNvbmZpZzogTXV0YXRpb25PYnNlcnZlckluaXQgPSB7XG4gIGNoaWxkTGlzdDogdHJ1ZSxcbiAgc3VidHJlZTogdHJ1ZSxcbn07XG4iLCAiaW1wb3J0IHsgaGlkZGVuSW5wdXRNYXAsIGZvcm1zTWFwLCBmb3JtRWxlbWVudHNNYXAsIGludGVybmFsc01hcCB9IGZyb20gJy4vbWFwcy5qcyc7XG5pbXBvcnQgeyBkaXNhYmxlZE9yTmFtZU9ic2VydmVyLCBkaXNhYmxlZE9yTmFtZU9ic2VydmVyQ29uZmlnIH0gZnJvbSAnLi9tdXRhdGlvbi1vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgSUN1c3RvbUVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzLCBMYWJlbHNMaXN0IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbi8qKlxuICogVG9nZ2xlJ3MgdGhlIGRpc2FibGVkIHN0YXRlIChhdHRyaWJ1dGVzICYgY2FsbGJhY2spIG9uIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAcGFyYW0ge0lDdXN0b21FbGVtZW50fSByZWYgLSBUaGUgY3VzdG9tIGVsZW1lbnQgaW5zdGFuY2VcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzYWJsZWQgLSBUaGUgZGlzYWJsZWQgc3RhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHNldERpc2FibGVkID0gKHJlZjogSUN1c3RvbUVsZW1lbnQsIGRpc2FibGVkOiBib29sZWFuKTogdm9pZCA9PiB7XG4gIHJlZi50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy1kaXNhYmxlZCcsIGRpc2FibGVkKTtcblxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICByZWYuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgfSBlbHNlIHtcbiAgICByZWYucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XG4gIH1cblxuICBpZiAocmVmLmZvcm1EaXNhYmxlZENhbGxiYWNrKSB7XG4gICAgcmVmLmZvcm1EaXNhYmxlZENhbGxiYWNrLmFwcGx5KHJlZiwgW2Rpc2FibGVkXSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgaGlkZGVuIGlucHV0cyBmb3IgdGhlIGdpdmVuIGVsZW1lbnQgaW50ZXJuYWxzIGluc3RhbmNlXG4gKiBAcGFyYW0ge0lFbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHMgLSBUaGUgZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2VcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVIaWRkZW5JbnB1dHMgPSAoaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscyk6IHZvaWQgPT4ge1xuICBjb25zdCBoaWRkZW5JbnB1dHMgPSBoaWRkZW5JbnB1dE1hcC5nZXQoaW50ZXJuYWxzKTtcbiAgaGlkZGVuSW5wdXRzLmZvckVhY2goKGhpZGRlbklucHV0KSA9PiB7XG4gICAgaGlkZGVuSW5wdXQucmVtb3ZlKCk7XG4gIH0pO1xuICBoaWRkZW5JbnB1dE1hcC5zZXQoaW50ZXJuYWxzLCBbXSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoaWRkZW4gaW5wdXQgZm9yIHRoZSBnaXZlbiByZWZcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSBlbGVtZW50IHRvIHdhdGNoXG4gKiBAcGFyYW0ge0lFbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHMgLSBUaGUgZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2UgZm9yIHRoZSByZWZcbiAqIEByZXR1cm4ge0hUTUxJbnB1dEVsZW1lbnR9IFRoZSBoaWRkZW4gaW5wdXRcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUhpZGRlbklucHV0ID0gKFxuICByZWY6IElDdXN0b21FbGVtZW50LFxuICBpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzXG4pOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9ICdoaWRkZW4nO1xuICBpbnB1dC5uYW1lID0gcmVmLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICByZWYuYWZ0ZXIoaW5wdXQpO1xuICBoaWRkZW5JbnB1dE1hcC5nZXQoaW50ZXJuYWxzKS5wdXNoKGlucHV0KTtcbiAgcmV0dXJuIGlucHV0O1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgcmVmIGJ5IHNldHRpbmcgdXAgYW4gYXR0cmlidXRlIG9ic2VydmUgb24gaXRcbiAqIGxvb2tpbmcgZm9yIGNoYW5nZXMgdG8gZGlzYWJsZWRcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSBlbGVtZW50IHRvIHdhdGNoXG4gKiBAcGFyYW0ge0lFbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHMgLSBUaGUgZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2UgZm9yIHRoZSByZWZcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBpbml0UmVmID0gKHJlZjogSUN1c3RvbUVsZW1lbnQsIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHMpOiB2b2lkID0+IHtcbiAgaGlkZGVuSW5wdXRNYXAuc2V0KGludGVybmFscywgW10pO1xuICBkaXNhYmxlZE9yTmFtZU9ic2VydmVyLm9ic2VydmU/LihyZWYsIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWcpO1xufTtcblxuLyoqXG4gKiBTZXQgdXAgbGFiZWxzIGZvciB0aGUgcmVmXG4gKiBAcGFyYW0ge0lDdXN0b21FbGVtZW50fSByZWYgLSBUaGUgcmVmIHRvIGFkZCBsYWJlbHMgdG9cbiAqIEBwYXJhbSB7TGFiZWxzTGlzdH0gbGFiZWxzIC0gQSBsaXN0IG9mIHRoZSBsYWJlbHNcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBpbml0TGFiZWxzID0gKHJlZjogSUN1c3RvbUVsZW1lbnQsIGxhYmVsczogTGFiZWxzTGlzdCk6IHZvaWQgPT4ge1xuICBpZiAobGFiZWxzLmxlbmd0aCkge1xuICAgIEFycmF5LmZyb20obGFiZWxzKS5mb3JFYWNoKChsYWJlbCkgPT4gbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWYuY2xpY2suYmluZChyZWYpKSk7XG4gICAgbGV0IGZpcnN0TGFiZWxJZCA9IGxhYmVsc1swXS5pZDtcbiAgICBpZiAoIWxhYmVsc1swXS5pZCkge1xuICAgICAgZmlyc3RMYWJlbElkID0gYCR7bGFiZWxzWzBdLmh0bWxGb3J9X0xhYmVsYDtcbiAgICAgIGxhYmVsc1swXS5pZCA9IGZpcnN0TGFiZWxJZDtcbiAgICB9XG4gICAgcmVmLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgZmlyc3RMYWJlbElkKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBpbnRlcm5hbHMtdmFsaWQgYW5kIGludGVybmFscy1pbnZhbGlkIGF0dHJpYnV0ZXNcbiAqIGJhc2VkIG9uIGZvcm0gdmFsaWRpdHkuXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gLSBUaGUgdGFyZ2V0IGZvcm1cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBzZXRGb3JtVmFsaWRpdHkgPSAoZm9ybTogSFRNTEZvcm1FbGVtZW50KSA9PiB7XG4gIGNvbnN0IG5hdGl2ZUNvbnRyb2xWYWxpZGl0eSA9IEFycmF5LmZyb20oZm9ybS5lbGVtZW50cylcbiAgICAuZmlsdGVyKFxuICAgICAgKGVsZW1lbnQ6IEVsZW1lbnQgJiB7IHZhbGlkaXR5OiBWYWxpZGl0eVN0YXRlIH0pID0+XG4gICAgICAgICFlbGVtZW50LnRhZ05hbWUuaW5jbHVkZXMoJy0nKSAmJiBlbGVtZW50LnZhbGlkaXR5XG4gICAgKVxuICAgIC5tYXAoKGVsZW1lbnQ6IEVsZW1lbnQgJiB7IHZhbGlkaXR5OiBWYWxpZGl0eVN0YXRlIH0pID0+IGVsZW1lbnQudmFsaWRpdHkudmFsaWQpO1xuICBjb25zdCBwb2x5ZmlsbGVkRWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGZvcm0pIHx8IFtdO1xuICBjb25zdCBwb2x5ZmlsbGVkVmFsaWRpdHkgPSBBcnJheS5mcm9tKHBvbHlmaWxsZWRFbGVtZW50cylcbiAgICAuZmlsdGVyKChjb250cm9sKSA9PiBjb250cm9sLmlzQ29ubmVjdGVkKVxuICAgIC5tYXAoKGNvbnRyb2w6IElDdXN0b21FbGVtZW50KSA9PiBpbnRlcm5hbHNNYXAuZ2V0KGNvbnRyb2wpLnZhbGlkaXR5LnZhbGlkKTtcbiAgY29uc3QgaGFzSW52YWxpZCA9IFsuLi5uYXRpdmVDb250cm9sVmFsaWRpdHksIC4uLnBvbHlmaWxsZWRWYWxpZGl0eV0uaW5jbHVkZXMoZmFsc2UpO1xuICBmb3JtLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLWludmFsaWQnLCBoYXNJbnZhbGlkKTtcbiAgZm9ybS50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy12YWxpZCcsICFoYXNJbnZhbGlkKTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIGlucHV0IGNhbGxiYWNrLiBVcGRhdGVzIHRoZSBmb3JtJ3MgdmFsaWRpdHlcbiAqIGF0dHJpYnV0ZXMgb24gaW5wdXQuXG4gKiBAcGFyYW0ge0V2ZW50fSAtIFRoZSBmb3JtIGlucHV0IGV2ZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZm9ybUlucHV0Q2FsbGJhY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIHNldEZvcm1WYWxpZGl0eShmaW5kUGFyZW50Rm9ybShldmVudC50YXJnZXQpKTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIGNoYW5nZSBjYWxsYmFjay4gVXBkYXRlcyB0aGUgZm9ybSdzIHZhbGlkaXR5XG4gKiBhdHRyaWJ1dGVzIG9uIGNoYW5nZS5cbiAqIEBwYXJhbSB7RXZlbnR9IC0gVGhlIGZvcm0gY2hhbmdlIGV2ZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZm9ybUNoYW5nZUNhbGxiYWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICBzZXRGb3JtVmFsaWRpdHkoZmluZFBhcmVudEZvcm0oZXZlbnQudGFyZ2V0KSk7XG59O1xuXG4vKipcbiAqIFRoZSBnbG9iYWwgZm9ybSBzdWJtaXQgY2FsbGJhY2suIFdlIG5lZWQgdG8gY2FuY2VsIGFueSBzdWJtaXNzaW9uXG4gKiBpZiBhIG5lc3RlZCBpbnRlcm5hbHMgaXMgaW52YWxpZC5cbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSAtIFRoZSBmb3JtIGVsZW1lbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCB3aXJlU3VibWl0TG9naWMgPSAoZm9ybTogSFRNTEZvcm1FbGVtZW50KSA9PiB7XG4gIGNvbnN0IFNVQk1JVF9CVVRUT05fU0VMRUNUT1IgPVxuICAgICc6aXMoYnV0dG9uW3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBidXR0b246bm90KFt0eXBlXSkpOm5vdChbZGlzYWJsZWRdKSc7XG4gIGxldCBzdWJtaXRCdXR0b25TZWxlY3RvciA9IGAke1NVQk1JVF9CVVRUT05fU0VMRUNUT1J9Om5vdChbZm9ybV0pYDtcblxuICBpZiAoZm9ybS5pZCkge1xuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yICs9IGAsJHtTVUJNSVRfQlVUVE9OX1NFTEVDVE9SfVtmb3JtPScke2Zvcm0uaWR9J11gO1xuICB9XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBFbGVtZW50O1xuICAgIGlmICh0YXJnZXQuY2xvc2VzdChzdWJtaXRCdXR0b25TZWxlY3RvcikpIHtcbiAgICAgIC8vIHZhbGlkYXRlXG4gICAgICBjb25zdCBlbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhpcyBmb3JtIGRvZXMgbm90IHZhbGlkYXRlIHRoZW4gd2UncmUgZG9uZVxuICAgICAgICovXG4gICAgICBpZiAoZm9ybS5ub1ZhbGlkYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLyoqIElmIHRoZSBTZXQgaGFzIGl0ZW1zLCBjb250aW51ZSAqL1xuICAgICAgaWYgKGVsZW1lbnRzLnNpemUpIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKTtcbiAgICAgICAgLyoqIENoZWNrIHRoZSBpbnRlcm5hbHMuY2hlY2tWYWxpZGl0eSgpIG9mIGFsbCBub2RlcyAqL1xuICAgICAgICBjb25zdCB2YWxpZGl0eUxpc3QgPSBub2Rlcy5yZXZlcnNlKCkubWFwKChub2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChub2RlKTtcbiAgICAgICAgICByZXR1cm4gaW50ZXJuYWxzLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKiBJZiBhbnkgbm9kZSBpcyBmYWxzZSwgc3RvcCB0aGUgZXZlbnQgKi9cbiAgICAgICAgaWYgKHZhbGlkaXR5TGlzdC5pbmNsdWRlcyhmYWxzZSkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIHJlc2V0IGNhbGxiYWNrLiBUaGlzIHdpbGwgbG9vcCBvdmVyIGFkZGVkXG4gKiBpbnB1dHMgYW5kIGNhbGwgZm9ybVJlc2V0Q2FsbGJhY2sgaWYgYXBwbGljYWJsZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1SZXNldENhbGxiYWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAvKiogR2V0IHRoZSBTZXQgb2YgZWxlbWVudHMgYXR0YWNoZWQgdG8gdGhpcyBmb3JtICovXG4gIGNvbnN0IGVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50KTtcblxuICAvKiogU29tZSBmb3JtcyB3b24ndCBjb250YWluIGZvcm0gYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudHMgKi9cbiAgaWYgKGVsZW1lbnRzICYmIGVsZW1lbnRzLnNpemUpIHtcbiAgICAvKiogTG9vcCBvdmVyIHRoZSBlbGVtZW50cyBhbmQgY2FsbCBmb3JtUmVzZXRDYWxsYmFjayBpZiBhcHBsaWNhYmxlICovXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKChlbGVtZW50LmNvbnN0cnVjdG9yIGFzIGFueSkuZm9ybUFzc29jaWF0ZWQgJiYgZWxlbWVudC5mb3JtUmVzZXRDYWxsYmFjaykge1xuICAgICAgICBlbGVtZW50LmZvcm1SZXNldENhbGxiYWNrLmFwcGx5KGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGZvcm0uIFdlIHdpbGwgbmVlZCB0byBhZGQgc3VibWl0IGFuZCByZXNldCBsaXN0ZW5lcnNcbiAqIGlmIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdC4gSWYgdGhleSBkbywganVzdCBhZGQgdGhlIG5ldyByZWYgdG8gdGhlIGZvcm0uXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWYgLSBUaGUgZWxlbWVudCByZWYgdGhhdCBpbmNsdWRlcyBpbnRlcm5hbHNcbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtIC0gVGhlIGZvcm0gdGhlIHJlZiBiZWxvbmdzIHRvXG4gKiBAcGFyYW0ge0VsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBpbnRlcm5hbHMgZm9yIHJlZlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRGb3JtID0gKFxuICByZWY6IElDdXN0b21FbGVtZW50LFxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnQsXG4gIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHNcbikgPT4ge1xuICBpZiAoZm9ybSkge1xuICAgIC8qKiBUaGlzIHdpbGwgYmUgYSBXZWFrTWFwPEhUTUxGb3JtRWxlbWVudCwgU2V0PEhUTUxFbGVtZW50PiAqL1xuICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSk7XG5cbiAgICBpZiAoZm9ybUVsZW1lbnRzKSB7XG4gICAgICAvKiogSWYgZm9ybUVsZW1lbnRzIGV4aXN0cywgYWRkIHRvIGl0ICovXG4gICAgICBmb3JtRWxlbWVudHMuYWRkKHJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKiBJZiBmb3JtRWxlbWVudHMgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0IGFuZCBhZGQgdG8gaXQgKi9cbiAgICAgIGNvbnN0IGluaXRTZXQgPSBuZXcgU2V0PElDdXN0b21FbGVtZW50PigpO1xuICAgICAgaW5pdFNldC5hZGQocmVmKTtcbiAgICAgIGZvcm1FbGVtZW50c01hcC5zZXQoZm9ybSwgaW5pdFNldCk7XG5cbiAgICAgIC8qKiBBZGQgbGlzdGVuZXJzIHRvIGVtdWxhdGUgdmFsaWRhdGlvbiBhbmQgcmVzZXQgYmVoYXZpb3IgKi9cbiAgICAgIHdpcmVTdWJtaXRMb2dpYyhmb3JtKTtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCBmb3JtUmVzZXRDYWxsYmFjayk7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZm9ybUlucHV0Q2FsbGJhY2spO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmb3JtQ2hhbmdlQ2FsbGJhY2spO1xuICAgIH1cblxuICAgIGZvcm1zTWFwLnNldChmb3JtLCB7IHJlZiwgaW50ZXJuYWxzIH0pO1xuXG4gICAgLyoqIENhbGwgZm9ybUFzc29jaWF0ZWRDYWxsYmFjayBpZiBhcHBsaWNhYmxlICovXG4gICAgaWYgKHJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSAmJiByZWYuZm9ybUFzc29jaWF0ZWRDYWxsYmFjaykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlZi5mb3JtQXNzb2NpYXRlZENhbGxiYWNrLmFwcGx5KHJlZiwgW2Zvcm1dKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgICBzZXRGb3JtVmFsaWRpdHkoZm9ybSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgbG9vayBmb3IgYW4gZWxlbWVudCdzIHBhcmVudCBmb3JtXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBsb29rIGZvciBhIHBhcmVudCBmb3JtXG4gKiBAcmV0dXJuIHtIVE1MRm9ybUVsZW1lbnR8bnVsbH0gLSBUaGUgcGFyZW50IGZvcm0sIGlmIG9uZSBleGlzdHNcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbmRQYXJlbnRGb3JtID0gKGVsZW0pID0+IHtcbiAgbGV0IHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgaWYgKHBhcmVudCAmJiBwYXJlbnQudGFnTmFtZSAhPT0gJ0ZPUk0nKSB7XG4gICAgcGFyZW50ID0gZmluZFBhcmVudEZvcm0ocGFyZW50KTtcbiAgfVxuICByZXR1cm4gcGFyZW50O1xufTtcblxuLyoqXG4gKiBUaHJvdyBhbiBlcnJvciBpZiB0aGUgZWxlbWVudCByZWYgaXMgbm90IGZvcm0gYXNzb2NpYXRlZFxuICogQHBhcmFtIHJlZiB7SUN1c3RvbUVsZW1lbnR9IC0gVGhlIGVsZW1lbnQgdG8gY2hlY2sgaWYgaXQgaXMgZm9ybSBhc3NvY2lhdGVkXG4gKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSAtIFRoZSBlcnJvciBtZXNzYWdlIHRvIHRocm93XG4gKiBAcGFyYW0gRXJyb3JUeXBlIHthbnl9IC0gVGhlIGVycm9yIHR5cGUgdG8gdGhyb3csIGRlZmF1bHRzIHRvIERPTUV4Y2VwdGlvblxuICovXG5leHBvcnQgY29uc3QgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkID0gKFxuICByZWY6IElDdXN0b21FbGVtZW50LFxuICBtZXNzYWdlOiBzdHJpbmcsXG4gIEVycm9yVHlwZTogYW55ID0gRE9NRXhjZXB0aW9uXG4pOiB2b2lkID0+IHtcbiAgaWYgKCFyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3JUeXBlKG1lc3NhZ2UpO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCBmb3IgZWFjaCBIVE1MRm9ybUVsZW1lbnQuY2hlY2tWYWxpZGl0eXxyZXBvcnRWYWxpZGl0eVxuICogd2lsbCBsb29wIG92ZXIgYSBmb3JtJ3MgYWRkZWQgY29tcG9uZW50cyBhbmQgY2FsbCB0aGUgcmVzcGVjdGl2ZVxuICogbWV0aG9kIG1vZGlmeWluZyB0aGUgZGVmYXVsdCByZXR1cm4gdmFsdWUgaWYgbmVlZGVkXG4gKiBAcGFyYW0gZm9ybSB7SFRNTEZvcm1FbGVtZW50fSAtIFRoZSBmb3JtIGVsZW1lbnQgdG8gcnVuIHRoZSBtZXRob2Qgb25cbiAqIEBwYXJhbSByZXR1cm5WYWx1ZSB7Ym9vbGVhbn0gLSBUaGUgaW5pdGlhbCByZXN1bHQgb2YgdGhlIG9yaWdpbmFsIG1ldGhvZFxuICogQHBhcmFtIG1ldGhvZCB7J2NoZWNrVmFsaWRpdHknfCdyZXBvcnRWYWxpZGl0eSd9IC0gVGhlIG9yaWdpbmFsIG1ldGhvZFxuICogQHJldHVybnMge2Jvb2xlYW59IFRoZSBmb3JtJ3MgdmFsaWRpdHkgc3RhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG92ZXJyaWRlRm9ybU1ldGhvZCA9IChcbiAgZm9ybTogSFRNTEZvcm1FbGVtZW50LFxuICByZXR1cm5WYWx1ZTogYm9vbGVhbixcbiAgbWV0aG9kOiAnY2hlY2tWYWxpZGl0eScgfCAncmVwb3J0VmFsaWRpdHknXG4pOiBib29sZWFuID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGZvcm0pO1xuXG4gIC8qKiBTb21lIGZvcm1zIHdvbid0IGNvbnRhaW4gZm9ybSBhc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50cyAqL1xuICBpZiAoZWxlbWVudHMgJiYgZWxlbWVudHMuc2l6ZSkge1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQoZWxlbWVudCk7XG4gICAgICBjb25zdCB2YWxpZCA9IGludGVybmFsc1ttZXRob2RdKCk7XG4gICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIHJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufTtcblxuLyoqXG4gKiBXaWxsIHVwZ3JhZGUgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSBieSBpbml0aWFsaXppbmcgdGhlXG4gKiBpbnN0YW5jZSdzIGZvcm0gYW5kIGxhYmVscy4gVGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpc1xuICogZWl0aGVyIGNvbnN0cnVjdGVkIG9yIGFwcGVuZGVkIGZyb20gYSBEb2N1bWVudEZyYWdtZW50XG4gKiBAcGFyYW0gcmVmIHtJQ3VzdG9tRWxlbWVudH0gLSBUaGUgY3VzdG9tIGVsZW1lbnQgdG8gdXBncmFkZVxuICovXG5leHBvcnQgY29uc3QgdXBncmFkZUludGVybmFscyA9IChyZWY6IElDdXN0b21FbGVtZW50KSA9PiB7XG4gIGlmIChyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KHJlZik7XG4gICAgY29uc3QgeyBsYWJlbHMsIGZvcm0gfSA9IGludGVybmFscztcbiAgICBpbml0TGFiZWxzKHJlZiwgbGFiZWxzKTtcbiAgICBpbml0Rm9ybShyZWYsIGZvcm0sIGludGVybmFscyk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgdG8gc2VlIGlmIE11dGF0aW9uT2JzZXJ2ZXIgZXhpc3RzIGluIHRoZSBjdXJyZW50XG4gKiBleGVjdXRpb24gY29udGV4dC4gV2lsbCBsaWtlbHkgcmV0dXJuIGZhbHNlIG9uIHRoZSBzZXJ2ZXJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbXV0YXRpb25PYnNlcnZlckV4aXN0cygpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbn1cbiIsICJpbXBvcnQgeyBzZXRGb3JtVmFsaWRpdHkgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqIEVtdWxhdGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IFZhbGlkaXR5U3RhdGUgb2JqZWN0ICovXG5leHBvcnQgY2xhc3MgVmFsaWRpdHlTdGF0ZSBpbXBsZW1lbnRzIGdsb2JhbFRoaXMuVmFsaWRpdHlTdGF0ZSB7XG4gIGJhZElucHV0ID0gZmFsc2U7XG4gIGN1c3RvbUVycm9yID0gZmFsc2U7XG4gIHBhdHRlcm5NaXNtYXRjaCA9IGZhbHNlO1xuICByYW5nZU92ZXJmbG93ID0gZmFsc2U7XG4gIHJhbmdlVW5kZXJmbG93ID0gZmFsc2U7XG4gIHN0ZXBNaXNtYXRjaCA9IGZhbHNlO1xuICB0b29Mb25nID0gZmFsc2U7XG4gIHRvb1Nob3J0ID0gZmFsc2U7XG4gIHR5cGVNaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZCA9IHRydWU7XG4gIHZhbHVlTWlzc2luZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIE9iamVjdC5zZWFsKHRoaXMpO1xuICB9XG59XG5cbi8qKlxuICogUmVzZXQgYSBWYWxpZGl0eVN0YXRlIG9iamVjdCBiYWNrIHRvIHZhbGlkXG4gKiBAcGFyYW0ge1ZhbGlkaXR5U3RhdGV9IHZhbGlkaXR5T2JqZWN0IC0gVGhlIG9iamVjdCB0byBtb2RpZnlcbiAqIEByZXR1cm4ge1ZhbGlkaXR5U3RhdGV9IC0gVGhlIG1vZGlmaWVkIFZhbGlkaXR5U3RhdGVPYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IHNldFZhbGlkID0gKHZhbGlkaXR5T2JqZWN0OiBWYWxpZGl0eVN0YXRlKTogVmFsaWRpdHlTdGF0ZSA9PiB7XG4gIHZhbGlkaXR5T2JqZWN0LmJhZElucHV0ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LmN1c3RvbUVycm9yID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnBhdHRlcm5NaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC5yYW5nZU92ZXJmbG93ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnJhbmdlVW5kZXJmbG93ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnN0ZXBNaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC50b29Mb25nID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnRvb1Nob3J0ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnR5cGVNaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC52YWxpZCA9IHRydWU7XG4gIHZhbGlkaXR5T2JqZWN0LnZhbHVlTWlzc2luZyA9IGZhbHNlO1xuICByZXR1cm4gdmFsaWRpdHlPYmplY3Q7XG59O1xuXG4vKipcbiAqIFJlY29uY2lsZSBhIFZhbGlkaXR5U3RhdGUgb2JqZWN0IHdpdGggYSBuZXcgc3RhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge1ZhbGlkaXR5U3RhdGV9IC0gVGhlIGJhc2Ugb2JqZWN0IHRvIHJlY29uY2lsZSB3aXRoIG5ldyBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IC0gQSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0IHRvIG92ZXJyaWRlIHRoZSBvcmlnaW5hbFxuICogQHJldHVybiB7VmFsaWRpdHlTdGF0ZX0gLSBUaGUgdXBkYXRlZCBWYWxpZGl0eVN0YXRlIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgcmVjb25jaWxlVmFsaWRpdHkgPSAoXG4gIHZhbGlkaXR5T2JqZWN0OiBWYWxpZGl0eVN0YXRlLFxuICBuZXdTdGF0ZTogUGFydGlhbDxWYWxpZGl0eVN0YXRlPixcbiAgZm9ybTogSFRNTEZvcm1FbGVtZW50XG4pOiBWYWxpZGl0eVN0YXRlID0+IHtcbiAgdmFsaWRpdHlPYmplY3QudmFsaWQgPSBpc1ZhbGlkKG5ld1N0YXRlKTtcbiAgT2JqZWN0LmtleXMobmV3U3RhdGUpLmZvckVhY2goKGtleSkgPT4gKHZhbGlkaXR5T2JqZWN0W2tleV0gPSBuZXdTdGF0ZVtrZXldKSk7XG4gIGlmIChmb3JtKSB7XG4gICAgc2V0Rm9ybVZhbGlkaXR5KGZvcm0pO1xuICB9XG4gIHJldHVybiB2YWxpZGl0eU9iamVjdDtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0IHNob3VsZCBiZSB2YWxpZFxuICogQHBhcmFtIHtPYmplY3R9IC0gQSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSAtIFNob3VsZCB0aGUgbmV3IG9iamVjdCBiZSB2YWxpZFxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZCA9ICh2YWxpZGl0eVN0YXRlOiBQYXJ0aWFsPFZhbGlkaXR5U3RhdGU+KTogYm9vbGVhbiA9PiB7XG4gIGxldCB2YWxpZCA9IHRydWU7XG4gIGZvciAobGV0IGtleSBpbiB2YWxpZGl0eVN0YXRlKSB7XG4gICAgaWYgKGtleSAhPT0gJ3ZhbGlkJyAmJiB2YWxpZGl0eVN0YXRlW2tleV0gIT09IGZhbHNlKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsaWQ7XG59O1xuIiwgImltcG9ydCB7IElDdXN0b21FbGVtZW50IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbi8qKiBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSByZWYgZm9yIHRlaCBDdXN0b21TdGF0ZVNldCAqL1xuY29uc3QgY3VzdG9tU3RhdGVNYXAgPSBuZXcgV2Vha01hcDxDdXN0b21TdGF0ZVNldCwgSUN1c3RvbUVsZW1lbnQ+KCk7XG5cbmZ1bmN0aW9uIGFkZFN0YXRlKHJlZjogSUN1c3RvbUVsZW1lbnQsIHN0YXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gIHJlZi50b2dnbGVBdHRyaWJ1dGUoc3RhdGVOYW1lLCB0cnVlKTtcbiAgaWYgKHJlZi5wYXJ0KSB7XG4gICAgcmVmLnBhcnQuYWRkKHN0YXRlTmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ3VzdG9tU3RhdGUgPSBgLS0ke3N0cmluZ31gO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tU3RhdGVTZXQgZXh0ZW5kcyBTZXQ8Q3VzdG9tU3RhdGU+IHtcbiAgc3RhdGljIGdldCBpc1BvbHlmaWxsZWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyZWY6IElDdXN0b21FbGVtZW50KSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoIXJlZiB8fCAhcmVmLnRhZ05hbWUgfHwgcmVmLnRhZ05hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSWxsZWdhbCBjb25zdHJ1Y3RvcicpO1xuICAgIH1cblxuICAgIGN1c3RvbVN0YXRlTWFwLnNldCh0aGlzLCByZWYpO1xuICB9XG5cbiAgYWRkKHN0YXRlOiBDdXN0b21TdGF0ZSkge1xuICAgIGlmICghL14tLS8udGVzdChzdGF0ZSkgfHwgdHlwZW9mIHN0YXRlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdhZGQnIG9uICdDdXN0b21TdGF0ZVNldCc6IFRoZSBzcGVjaWZpZWQgdmFsdWUgJHtzdGF0ZX0gbXVzdCBzdGFydCB3aXRoICctLScuYFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuYWRkKHN0YXRlKTtcbiAgICBjb25zdCByZWYgPSBjdXN0b21TdGF0ZU1hcC5nZXQodGhpcyk7XG4gICAgY29uc3Qgc3RhdGVOYW1lID0gYHN0YXRlJHtzdGF0ZX1gO1xuXG4gICAgLyoqXG4gICAgICogT25seSBhZGQgdGhlIHN0YXRlIGltbWVkaWF0ZWx5IGlmIHRoZSByZWYgaXMgY29ubmVjdGVkIHRvIHRoZSBET007XG4gICAgICogb3RoZXJ3aXNlLCB3YWl0IGEgdGljayBiZWNhdXNlIHRoZSBlbGVtZW50IGlzIGxpa2VseSBiZWluZyBjb25zdHJ1Y3RlZFxuICAgICAqIGJ5IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgYW5kIHdvdWxkIHRocm93IG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBpZiAocmVmLmlzQ29ubmVjdGVkKSB7XG4gICAgICBhZGRTdGF0ZShyZWYsIHN0YXRlTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhZGRTdGF0ZShyZWYsIHN0YXRlTmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgZm9yIChsZXQgW2VudHJ5XSBvZiB0aGlzLmVudHJpZXMoKSkge1xuICAgICAgdGhpcy5kZWxldGUoZW50cnkpO1xuICAgIH1cbiAgICBzdXBlci5jbGVhcigpO1xuICB9XG5cbiAgZGVsZXRlKHN0YXRlOiBDdXN0b21TdGF0ZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLmRlbGV0ZShzdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gY3VzdG9tU3RhdGVNYXAuZ2V0KHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogT25seSB0b2dnbGUgdGhlIHN0YXRlL2F0dHIgaW1tZWRpYXRlbHkgaWYgdGhlIHJlZiBpcyBjb25uZWN0ZWQgdG8gdGhlIERPTTtcbiAgICAgKiBvdGhlcndpc2UsIHdhaXQgYSB0aWNrIGJlY2F1c2UgdGhlIGVsZW1lbnQgaXMgbGlrZWx5IGJlaW5nIGNvbnN0cnVjdGVkXG4gICAgICogYnkgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBhbmQgd291bGQgdGhyb3cgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoYHN0YXRlJHtzdGF0ZX1gLCBmYWxzZSk7XG4gICAgICBpZiAocmVmLnBhcnQpIHtcbiAgICAgICAgcmVmLnBhcnQucmVtb3ZlKGBzdGF0ZSR7c3RhdGV9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZWYudG9nZ2xlQXR0cmlidXRlKGBzdGF0ZSR7c3RhdGV9YCwgZmFsc2UpO1xuICAgICAgICBpZiAocmVmLnBhcnQpIHtcbiAgICAgICAgICByZWYucGFydC5yZW1vdmUoYHN0YXRlJHtzdGF0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwgImV4cG9ydCBjbGFzcyBIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbiBpbXBsZW1lbnRzIGdsb2JhbFRoaXMuSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24ge1xuICByZWFkb25seSAjZWxlbWVudHM7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICB0aGlzLiNlbGVtZW50cyA9IGVsZW1lbnRzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcblxuICAgICAgdGhpc1tpXSA9IGVsZW1lbnQ7XG4gICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICB0aGlzW2VsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJyldID0gZWxlbWVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgW2luZGV4OiBudW1iZXJdOiBFbGVtZW50O1xuXG4gIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy4jZWxlbWVudHMubGVuZ3RoO1xuICB9XG5cbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2VsZW1lbnRzW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgfVxuXG4gIGl0ZW0oaSk6IEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzW2ldID09IG51bGwgPyBudWxsIDogdGhpc1tpXTtcbiAgfVxuXG4gIG5hbWVkSXRlbShuYW1lKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXNbbmFtZV0gPT0gbnVsbCA/IG51bGwgOiB0aGlzW25hbWVdO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24gfSBmcm9tICcuL0hUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uLmpzJztcbmltcG9ydCB7IGZvcm1FbGVtZW50c01hcCB9IGZyb20gJy4vbWFwcy5qcyc7XG5pbXBvcnQgeyBvdmVycmlkZUZvcm1NZXRob2QgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBQYXRjaCB0aGUgSFRNTEVsZW1lbnQgcHJvdG90eXBlXG4gKlxuICogVGhpcyBmdW5jdGlvbiBwYXRjaGVzIGNoZWNrVmFsaWRpdHksIHJlcG9ydFZhbGlkaXR5IGFuZCBlbGVtZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hGb3JtUHJvdG90eXBlKCk6IHZvaWQge1xuICBjb25zdCBjaGVja1ZhbGlkaXR5ID0gSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5jaGVja1ZhbGlkaXR5O1xuICBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmNoZWNrVmFsaWRpdHkgPSBjaGVja1ZhbGlkaXR5T3ZlcnJpZGU7XG5cbiAgY29uc3QgcmVwb3J0VmFsaWRpdHkgPSBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLnJlcG9ydFZhbGlkaXR5O1xuICBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLnJlcG9ydFZhbGlkaXR5ID0gcmVwb3J0VmFsaWRpdHlPdmVycmlkZTtcblxuICBmdW5jdGlvbiBjaGVja1ZhbGlkaXR5T3ZlcnJpZGUoLi4uYXJncyk6IGJvb2xlYW4ge1xuICAgIGxldCByZXR1cm5WYWx1ZSA9IGNoZWNrVmFsaWRpdHkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgcmV0dXJuIG92ZXJyaWRlRm9ybU1ldGhvZCh0aGlzLCByZXR1cm5WYWx1ZSwgJ2NoZWNrVmFsaWRpdHknKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcG9ydFZhbGlkaXR5T3ZlcnJpZGUoLi4uYXJncyk6IGJvb2xlYW4ge1xuICAgIGxldCByZXR1cm5WYWx1ZSA9IHJlcG9ydFZhbGlkaXR5LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHJldHVybiBvdmVycmlkZUZvcm1NZXRob2QodGhpcywgcmV0dXJuVmFsdWUsICdyZXBvcnRWYWxpZGl0eScpO1xuICB9XG5cbiAgY29uc3QgeyBnZXQgfSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZSwgJ2VsZW1lbnRzJyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLCAnZWxlbWVudHMnLCB7XG4gICAgZ2V0KC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZ2V0LmNhbGwodGhpcywgLi4uYXJncyk7XG4gICAgICBjb25zdCBwb2x5ZmlsbGVkRWxlbWVudHMgPSBBcnJheS5mcm9tKGZvcm1FbGVtZW50c01hcC5nZXQodGhpcykgfHwgW10pO1xuXG4gICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gcG9seWZpbGxlZCBlbGVtZW50cywgcmV0dXJuIHRoZSBuYXRpdmUgZWxlbWVudHMgY29sbGVjdGlvblxuICAgICAgaWYgKHBvbHlmaWxsZWRFbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgICAgfVxuXG4gICAgICAvLyBNZXJnZSB0aGUgbmF0aXZlIGVsZW1lbnRzIHdpdGggdGhlIHBvbHlmaWxsZWQgZWxlbWVudHNcbiAgICAgIC8vIGFuZCBvcmRlciB0aGVtIGJ5IHRoZWlyIHBvc2l0aW9uIGluIHRoZSBET01cbiAgICAgIGNvbnN0IG9yZGVyZWRFbGVtZW50cyA9IEFycmF5LmZyb20oZWxlbWVudHMpXG4gICAgICAgIC5jb25jYXQocG9seWZpbGxlZEVsZW1lbnRzKVxuICAgICAgICAuc29ydCgoYTogRWxlbWVudCwgYjogRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKSAmIDIgPyAxIDogLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ldyBIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbihvcmRlcmVkRWxlbWVudHMpO1xuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIGNvbm5lY3RlZENhbGxiYWNrTWFwLFxuICBpbnRlcm5hbHNNYXAsXG4gIHJlZk1hcCxcbiAgcmVmVmFsdWVNYXAsXG4gIHNoYWRvd0hvc3RzTWFwLFxuICBzaGFkb3dSb290TWFwLFxuICB2YWxpZGF0aW9uQW5jaG9yTWFwLFxuICB2YWxpZGl0eU1hcCxcbiAgdmFsaWRhdGlvbk1lc3NhZ2VNYXAsXG4gIHZhbGlkaXR5VXBncmFkZU1hcCxcbn0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7XG4gIGNyZWF0ZUhpZGRlbklucHV0LFxuICBmaW5kUGFyZW50Rm9ybSxcbiAgaW5pdFJlZixcbiAgbXV0YXRpb25PYnNlcnZlckV4aXN0cyxcbiAgcmVtb3ZlSGlkZGVuSW5wdXRzLFxuICBzZXREaXNhYmxlZCxcbiAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkLFxuICB1cGdyYWRlSW50ZXJuYWxzLFxufSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IGluaXRBb20gfSBmcm9tICcuL2FvbS5qcyc7XG5pbXBvcnQgeyBWYWxpZGl0eVN0YXRlLCByZWNvbmNpbGVWYWxpZGl0eSwgc2V0VmFsaWQgfSBmcm9tICcuL1ZhbGlkaXR5U3RhdGUuanMnO1xuaW1wb3J0IHsgZGVmZXJVcGdyYWRlLCBvYnNlcnZlckNhbGxiYWNrLCBvYnNlcnZlckNvbmZpZyB9IGZyb20gJy4vbXV0YXRpb24tb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IElFbGVtZW50SW50ZXJuYWxzLCBJQ3VzdG9tRWxlbWVudCwgTGFiZWxzTGlzdCB9IGZyb20gJy4vdHlwZXMuanMnO1xuaW1wb3J0IHsgQ3VzdG9tU3RhdGVTZXQgfSBmcm9tICcuL0N1c3RvbVN0YXRlU2V0LmpzJztcbmltcG9ydCB7IHBhdGNoRm9ybVByb3RvdHlwZSB9IGZyb20gJy4vcGF0Y2gtZm9ybS1wcm90b3R5cGUuanMnO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICdsaXQtaHRtbC9pcy1zZXJ2ZXIuanMnO1xuXG5leHBvcnQgY2xhc3MgRWxlbWVudEludGVybmFscyBpbXBsZW1lbnRzIElFbGVtZW50SW50ZXJuYWxzIHtcbiAgYXJpYUF0b21pYzogc3RyaW5nO1xuICBhcmlhQXV0b0NvbXBsZXRlOiBzdHJpbmc7XG4gIGFyaWFCdXN5OiBzdHJpbmc7XG4gIGFyaWFDaGVja2VkOiBzdHJpbmc7XG4gIGFyaWFDb2xDb3VudDogc3RyaW5nO1xuICBhcmlhQ29sSW5kZXg6IHN0cmluZztcbiAgYXJpYUNvbEluZGV4VGV4dDogc3RyaW5nO1xuICBhcmlhQ29sU3Bhbjogc3RyaW5nO1xuICBhcmlhQ3VycmVudDogc3RyaW5nO1xuICBhcmlhRGlzYWJsZWQ6IHN0cmluZztcbiAgYXJpYUV4cGFuZGVkOiBzdHJpbmc7XG4gIGFyaWFIYXNQb3B1cDogc3RyaW5nO1xuICBhcmlhSGlkZGVuOiBzdHJpbmc7XG4gIGFyaWFJbnZhbGlkOiBzdHJpbmc7XG4gIGFyaWFLZXlTaG9ydGN1dHM6IHN0cmluZztcbiAgYXJpYUxhYmVsOiBzdHJpbmc7XG4gIGFyaWFMZXZlbDogc3RyaW5nO1xuICBhcmlhTGl2ZTogc3RyaW5nO1xuICBhcmlhTW9kYWw6IHN0cmluZztcbiAgYXJpYU11bHRpTGluZTogc3RyaW5nO1xuICBhcmlhTXVsdGlTZWxlY3RhYmxlOiBzdHJpbmc7XG4gIGFyaWFPcmllbnRhdGlvbjogc3RyaW5nO1xuICBhcmlhUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgYXJpYVBvc0luU2V0OiBzdHJpbmc7XG4gIGFyaWFQcmVzc2VkOiBzdHJpbmc7XG4gIGFyaWFSZWFkT25seTogc3RyaW5nO1xuICBhcmlhUmVsZXZhbnQ6IHN0cmluZztcbiAgYXJpYVJlcXVpcmVkOiBzdHJpbmc7XG4gIGFyaWFSb2xlRGVzY3JpcHRpb246IHN0cmluZztcbiAgYXJpYVJvd0NvdW50OiBzdHJpbmc7XG4gIGFyaWFSb3dJbmRleDogc3RyaW5nO1xuICBhcmlhUm93SW5kZXhUZXh0OiBzdHJpbmc7XG4gIGFyaWFSb3dTcGFuOiBzdHJpbmc7XG4gIGFyaWFTZWxlY3RlZDogc3RyaW5nO1xuICBhcmlhU2V0U2l6ZTogc3RyaW5nO1xuICBhcmlhU29ydDogc3RyaW5nO1xuICBhcmlhVmFsdWVNYXg6IHN0cmluZztcbiAgYXJpYVZhbHVlTWluOiBzdHJpbmc7XG4gIGFyaWFWYWx1ZU5vdzogc3RyaW5nO1xuICBhcmlhVmFsdWVUZXh0OiBzdHJpbmc7XG4gIHJvbGU6IHN0cmluZztcblxuICBzdGF0ZXM6IEN1c3RvbVN0YXRlU2V0O1xuXG4gIHN0YXRpYyBnZXQgaXNQb2x5ZmlsbGVkKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocmVmOiBJQ3VzdG9tRWxlbWVudCkge1xuICAgIGlmICghcmVmIHx8ICFyZWYudGFnTmFtZSB8fCByZWYudGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbGxlZ2FsIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuICAgIGNvbnN0IHJvb3ROb2RlID0gcmVmLmdldFJvb3ROb2RlKCk7XG4gICAgY29uc3QgdmFsaWRpdHkgPSBuZXcgVmFsaWRpdHlTdGF0ZSgpO1xuICAgIHRoaXMuc3RhdGVzID0gbmV3IEN1c3RvbVN0YXRlU2V0KHJlZik7XG4gICAgcmVmTWFwLnNldCh0aGlzLCByZWYpO1xuICAgIHZhbGlkaXR5TWFwLnNldCh0aGlzLCB2YWxpZGl0eSk7XG4gICAgaW50ZXJuYWxzTWFwLnNldChyZWYsIHRoaXMpO1xuICAgIGluaXRBb20ocmVmLCB0aGlzKTtcbiAgICBpbml0UmVmKHJlZiwgdGhpcyk7XG4gICAgT2JqZWN0LnNlYWwodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBJZiBhcHBlbmRlZCBmcm9tIGEgRG9jdW1lbnRGcmFnbWVudCwgd2FpdCB1bnRpbCBpdCBpcyBjb25uZWN0ZWRcbiAgICAgKiBiZWZvcmUgYXR0ZW1wdGluZyB0byB1cGdyYWRlIHRoZSBpbnRlcm5hbHMgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBpZiAocm9vdE5vZGUgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICBkZWZlclVwZ3JhZGUocm9vdE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaWxsIHJldHVybiB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGluIGEgdmFsaWQgc3RhdGVcbiAgICovXG4gIGNoZWNrVmFsaWRpdHkoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ2NoZWNrVmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICAvKiogSWYgdGhlIGVsZW1lbnQgd2lsbCBub3QgdmFsaWRhdGUsIGl0IGlzIG5lY2Vzc2FyaWx5IHZhbGlkIGJ5IGRlZmF1bHQgKi9cbiAgICBpZiAoIXRoaXMud2lsbFZhbGlkYXRlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcC5nZXQodGhpcyk7XG4gICAgaWYgKCF2YWxpZGl0eS52YWxpZCkge1xuICAgICAgY29uc3QgdmFsaWRpdHlFdmVudCA9IG5ldyBFdmVudCgnaW52YWxpZCcsIHtcbiAgICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgIGNvbXBvc2VkOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgcmVmLmRpc3BhdGNoRXZlbnQodmFsaWRpdHlFdmVudCk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZGl0eS52YWxpZDtcbiAgfVxuXG4gIC8qKiBUaGUgZm9ybSBlbGVtZW50IHRoZSBjdXN0b20gZWxlbWVudCBpcyBhc3NvY2lhdGVkIHdpdGggKi9cbiAgZ2V0IGZvcm0oKTogSFRNTEZvcm1FbGVtZW50IHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ2Zvcm0nIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGxldCBmb3JtO1xuICAgIGlmIChyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10gPT09IHRydWUpIHtcbiAgICAgIGZvcm0gPSBmaW5kUGFyZW50Rm9ybShyZWYpO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIC8qKiBBIGxpc3Qgb2YgYWxsIHJlbGF0aXZlIGZvcm0gbGFiZWxzIGZvciB0aGlzIGVsZW1lbnQgKi9cbiAgZ2V0IGxhYmVscygpOiBMYWJlbHNMaXN0IHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ2xhYmVscycgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgY29uc3QgaWQgPSByZWYuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGNvbnN0IGhvc3RSb290ID0gcmVmLmdldFJvb3ROb2RlKCkgYXMgRWxlbWVudDtcbiAgICBpZiAoaG9zdFJvb3QgJiYgaWQpIHtcbiAgICAgIHJldHVybiBob3N0Um9vdC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxMYWJlbEVsZW1lbnQ+KGBbZm9yPVwiJHtpZH1cIl1gKSBhcyB1bmtub3duIGFzIExhYmVsc0xpc3Q7XG4gICAgfVxuICAgIHJldHVybiBbXSBhcyB1bmtub3duIGFzIExhYmVsc0xpc3Q7XG4gIH1cblxuICAvKiogV2lsbCByZXBvcnQgdGhlIGVsZW1lbnRzIHZhbGlkaXR5IHN0YXRlICovXG4gIHJlcG9ydFZhbGlkaXR5KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdyZXBvcnRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIC8qKiBJZiB0aGUgZWxlbWVudCB3aWxsIG5vdCB2YWxpZGF0ZSwgaXQgaXMgdmFsaWQgYnkgZGVmYXVsdCAqL1xuICAgIGlmICghdGhpcy53aWxsVmFsaWRhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB2YWxpZCA9IHRoaXMuY2hlY2tWYWxpZGl0eSgpO1xuICAgIGNvbnN0IGFuY2hvciA9IHZhbGlkYXRpb25BbmNob3JNYXAuZ2V0KHRoaXMpO1xuICAgIGlmIChhbmNob3IgJiYgIXJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdyZXBvcnRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghdmFsaWQgJiYgYW5jaG9yKSB7XG4gICAgICByZWYuZm9jdXMoKTtcbiAgICAgIGFuY2hvci5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgZWxlbWVudCdzIHZhbHVlIHdpdGhpbiB0aGUgZm9ybSAqL1xuICBzZXRGb3JtVmFsdWUodmFsdWU6IHN0cmluZyB8IEZvcm1EYXRhIHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdzZXRGb3JtVmFsdWUnIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICByZW1vdmVIaWRkZW5JbnB1dHModGhpcyk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1EYXRhKSkge1xuICAgICAgaWYgKHJlZi5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICBjb25zdCBoaWRkZW5JbnB1dCA9IGNyZWF0ZUhpZGRlbklucHV0KHJlZiwgdGhpcyk7XG4gICAgICAgIGhpZGRlbklucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgIEFycmF5LmZyb20odmFsdWUpXG4gICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgLmZvckVhY2goKFtmb3JtRGF0YUtleSwgZm9ybURhdGFWYWx1ZV0pID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGZvcm1EYXRhVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBoaWRkZW5JbnB1dCA9IGNyZWF0ZUhpZGRlbklucHV0KHJlZiwgdGhpcyk7XG4gICAgICAgICAgICBoaWRkZW5JbnB1dC5uYW1lID0gZm9ybURhdGFLZXk7XG4gICAgICAgICAgICBoaWRkZW5JbnB1dC52YWx1ZSA9IGZvcm1EYXRhVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVmVmFsdWVNYXAuc2V0KHJlZiwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGVsZW1lbnQncyB2YWxpZGl0eS4gVGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgcGFydGlhbCBWYWxpZGl0eVN0YXRlIG9iamVjdFxuICAgKiByZWZsZWN0aW5nIHRoZSBjaGFuZ2VzIHRvIGJlIG1hZGUgdG8gdGhlIGVsZW1lbnQncyB2YWxpZGl0eS4gSWYgdGhlIGVsZW1lbnQgaXMgaW52YWxpZCxcbiAgICogdGhlIHNlY29uZCBhcmd1bWVudCBzZXRzIHRoZSBlbGVtZW50J3MgdmFsaWRhdGlvbiBtZXNzYWdlLlxuICAgKlxuICAgKiBJZiB0aGUgZmllbGQgaXMgdmFsaWQgYW5kIGEgbWVzc2FnZSBpcyBzcGVjaWZpZWQsIHRoZSBtZXRob2Qgd2lsbCB0aHJvdyBhIFR5cGVFcnJvci5cbiAgICovXG4gIHNldFZhbGlkaXR5KFxuICAgIHZhbGlkaXR5Q2hhbmdlczogUGFydGlhbDxnbG9iYWxUaGlzLlZhbGlkaXR5U3RhdGU+LFxuICAgIHZhbGlkYXRpb25NZXNzYWdlPzogc3RyaW5nLFxuICAgIGFuY2hvcj86IEhUTUxFbGVtZW50XG4gICkge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdzZXRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGlmICghdmFsaWRpdHlDaGFuZ2VzKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBcIkZhaWxlZCB0byBleGVjdXRlICdzZXRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIHZhbGlkYXRpb25BbmNob3JNYXAuc2V0KHRoaXMsIGFuY2hvcik7XG4gICAgY29uc3QgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcC5nZXQodGhpcyk7XG4gICAgY29uc3QgdmFsaWRpdHlDaGFuZ2VzT2JqOiBQYXJ0aWFsPFZhbGlkaXR5U3RhdGU+ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsaWRpdHlDaGFuZ2VzKSB7XG4gICAgICB2YWxpZGl0eUNoYW5nZXNPYmpba2V5XSA9IHZhbGlkaXR5Q2hhbmdlc1trZXldO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LmtleXModmFsaWRpdHlDaGFuZ2VzT2JqKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldFZhbGlkKHZhbGlkaXR5KTtcbiAgICB9XG4gICAgY29uc3QgY2hlY2sgPSB7IC4uLnZhbGlkaXR5LCAuLi52YWxpZGl0eUNoYW5nZXNPYmogfTtcbiAgICBkZWxldGUgY2hlY2sudmFsaWQ7XG4gICAgY29uc3QgeyB2YWxpZCB9ID0gcmVjb25jaWxlVmFsaWRpdHkodmFsaWRpdHksIGNoZWNrLCB0aGlzLmZvcm0pO1xuXG4gICAgaWYgKCF2YWxpZCAmJiAhdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnc2V0VmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHNlY29uZCBhcmd1bWVudCBzaG91bGQgbm90IGJlIGVtcHR5IGlmIG9uZSBvciBtb3JlIGZsYWdzIGluIHRoZSBmaXJzdCBhcmd1bWVudCBhcmUgdHJ1ZS5gXG4gICAgICApO1xuICAgIH1cbiAgICB2YWxpZGF0aW9uTWVzc2FnZU1hcC5zZXQodGhpcywgdmFsaWQgPyAnJyA6IHZhbGlkYXRpb25NZXNzYWdlKTtcblxuICAgIC8vIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgaG9zdCBlbGVtZW50IGlzIGNvbm5lY3RlZCBiZWZvcmUgYWRkaW5nIGF0dHJpYnV0ZXNcbiAgICAvLyBiZWNhdXNlIHNhZmFyaSBkb2VzbnQgYWxsb3cgZWxlbWVudHMgdG8gaGF2ZSBhdHRyaWJ1dGVzIGFkZGVkIGluIHRoZSBjb25zdHJ1Y3RvclxuICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy1pbnZhbGlkJywgIXZhbGlkKTtcbiAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy12YWxpZCcsIHZhbGlkKTtcbiAgICAgIHJlZi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIGAkeyF2YWxpZH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRpdHlVcGdyYWRlTWFwLnNldChyZWYsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzaGFkb3dSb290KCk6IFNoYWRvd1Jvb3QgfCBudWxsIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBzaGFkb3dSb290TWFwLmdldChyZWYpO1xuICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICByZXR1cm4gc2hhZG93Um9vdDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiogVGhlIGVsZW1lbnQncyB2YWxpZGF0aW9uIG1lc3NhZ2Ugc2V0IGR1cmluZyBhIGNhbGwgdG8gRWxlbWVudEludGVybmFscy5zZXRWYWxpZGl0eSAqL1xuICBnZXQgdmFsaWRhdGlvbk1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ3ZhbGlkYXRpb25NZXNzYWdlJyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICByZXR1cm4gdmFsaWRhdGlvbk1lc3NhZ2VNYXAuZ2V0KHRoaXMpO1xuICB9XG5cbiAgLyoqIFRoZSBjdXJyZW50IHZhbGlkaXR5IHN0YXRlIG9mIHRoZSBvYmplY3QgKi9cbiAgZ2V0IHZhbGlkaXR5KCk6IGdsb2JhbFRoaXMuVmFsaWRpdHlTdGF0ZSB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIHJlYWQgdGhlICd2YWxpZGl0eScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgY29uc3QgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcC5nZXQodGhpcyk7XG4gICAgcmV0dXJuIHZhbGlkaXR5O1xuICB9XG5cbiAgLyoqIElmIHRydWUgdGhlIGVsZW1lbnQgd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhIGZvcm0ncyBjb25zdHJhaW50IHZhbGlkYXRpb24uICovXG4gIGdldCB3aWxsVmFsaWRhdGUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIHJlYWQgdGhlICd3aWxsVmFsaWRhdGUnIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGlmIChyZWYuZGlzYWJsZWQgfHwgcmVmLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fCByZWYuaGFzQXR0cmlidXRlKCdyZWFkb25seScpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8vIC0tLSBEaXNhYmxpbmcgdGhpcyB0eXBlIGRlY2xhcmF0aW9uIHRvIGF2b2lkIGNvbmZsaWN0IHdpdGggZXh0ZXJuYWwgZWxlbWVudC1pbnRlcm5hbHMtcG9seWZpbGwgdHlwZXMgLS0tXG4vLyBkZWNsYXJlIGdsb2JhbCB7XG4vLyAgIGludGVyZmFjZSBDdXN0b21FbGVtZW50Q29uc3RydWN0b3Ige1xuLy8gICAgIGZvcm1Bc3NvY2lhdGVkPzogYm9vbGVhbjtcbi8vICAgfVxuXG4vLyAgIGludGVyZmFjZSBXaW5kb3cge1xuLy8gICAgIEVsZW1lbnRJbnRlcm5hbHM6IHR5cGVvZiBFbGVtZW50SW50ZXJuYWxzO1xuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnRJbnRlcm5hbHNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gIGlmIChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICF3aW5kb3cuRWxlbWVudEludGVybmFscyB8fFxuICAgICFIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNsYXNzIEVsZW1lbnRJbnRlcm5hbHNGZWF0dXJlRGV0ZWN0aW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLmludGVybmFscyA9IHRoaXMuYXR0YWNoSW50ZXJuYWxzKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHJhbmRvbU5hbWUgPSBgZWxlbWVudC1pbnRlcm5hbHMtZmVhdHVyZS1kZXRlY3Rpb24tJHtNYXRoLnJhbmRvbSgpXG4gICAgLnRvU3RyaW5nKDM2KVxuICAgIC5yZXBsYWNlKC9bXmEtel0rL2csICcnKX1gO1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUocmFuZG9tTmFtZSwgRWxlbWVudEludGVybmFsc0ZlYXR1cmVEZXRlY3Rpb24pO1xuICBjb25zdCBmZWF0dXJlRGV0ZWN0aW9uRWxlbWVudCA9IG5ldyBFbGVtZW50SW50ZXJuYWxzRmVhdHVyZURldGVjdGlvbigpO1xuICByZXR1cm4gW1xuICAgICdzaGFkb3dSb290JyxcbiAgICAnZm9ybScsXG4gICAgJ3dpbGxWYWxpZGF0ZScsXG4gICAgJ3ZhbGlkaXR5JyxcbiAgICAndmFsaWRhdGlvbk1lc3NhZ2UnLFxuICAgICdsYWJlbHMnLFxuICAgICdzZXRGb3JtVmFsdWUnLFxuICAgICdzZXRWYWxpZGl0eScsXG4gICAgJ2NoZWNrVmFsaWRpdHknLFxuICAgICdyZXBvcnRWYWxpZGl0eScsXG4gIF0uZXZlcnkoKHByb3ApID0+IHByb3AgaW4gZmVhdHVyZURldGVjdGlvbkVsZW1lbnQuaW50ZXJuYWxzKTtcbn1cblxuLy8gT25seSBpbmNsdWRlcyB0aGlzIHBvbHlmaWxsIGlmIHdlIGFyZSBpbiBhIGplc3QgcnVubmVyIG9yIG5vdCBpbiBTU1JcbmlmIChcbiAgIWlzU2VydmVyIHx8XG4gICgocHJvY2VzcyBhcyBhbnkpPy5lbnYuSkVTVF9XT1JLRVJfSUQgIT09IHVuZGVmaW5lZCAmJiAocHJvY2VzcyBhcyBhbnkpPy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0Jylcbikge1xuICBpZiAoIWlzRWxlbWVudEludGVybmFsc1N1cHBvcnRlZCgpKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvKiogQHRzLWV4cGVjdC1lcnJvcjogd2UgbmVlZCB0byByZXBsYWNlIHRoZSBkZWZhdWx0IEVsZW1lbnRJbnRlcm5hbHMgKi9cbiAgICAgIHdpbmRvdy5FbGVtZW50SW50ZXJuYWxzID0gRWxlbWVudEludGVybmFscztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGRlZmluZSA9IEN1c3RvbUVsZW1lbnRSZWdpc3RyeS5wcm90b3R5cGUuZGVmaW5lO1xuICAgICAgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5kZWZpbmUgPSBmdW5jdGlvbiAobmFtZSwgY29uc3RydWN0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9yLmZvcm1Bc3NvY2lhdGVkKSB7XG4gICAgICAgICAgY29uc3QgY29ubmVjdGVkQ2FsbGJhY2sgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2s7XG4gICAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFjb25uZWN0ZWRDYWxsYmFja01hcC5oYXModGhpcykpIHtcbiAgICAgICAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2tNYXAuc2V0KHRoaXMsIHRydWUpO1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgIHNldERpc2FibGVkKHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25uZWN0ZWRDYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbm5lY3RlZENhbGxiYWNrLmFwcGx5KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWx3YXlzIHVwZ3JhZGVJbnRlcm5hbHMgaW4gY29ubmVjdGVkQ2FsbGJhY2sgaW5zdGVhZCBvZiBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgdXBncmFkZUludGVybmFscyh0aGlzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmaW5lLmNhbGwodGhpcywgbmFtZSwgY29uc3RydWN0b3IsIG9wdGlvbnMpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGEgY3VzdG9tIGVsZW1lbnQuIENhbGxpbmcgdGhpcyBtZXRob2RcbiAgICAgKiBvbiBhIGJ1aWx0LWluIGVsZW1lbnQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgICAgKi9cbiAgICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEludGVybmFscyA9IGZ1bmN0aW9uICgpOiBJRWxlbWVudEludGVybmFscyB7XG4gICAgICAgIGlmICghdGhpcy50YWdOYW1lKSB7XG4gICAgICAgICAgLyoqIFRoaXMgaGFwcGVucyBpbiB0aGUgTGl0U1NSIGVudmlyb25tZW50LiBIZXJlIHdlIGNhbiBnZW5lcmFsbHkgaWdub3JlIGludGVybmFscyBmb3Igbm93ICovXG4gICAgICAgICAgcmV0dXJuIHt9IGFzIG9iamVjdCBhcyBJRWxlbWVudEludGVybmFscztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhZ05hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnYXR0YWNoSW50ZXJuYWxzJyBvbiAnSFRNTEVsZW1lbnQnOiBVbmFibGUgdG8gYXR0YWNoIEVsZW1lbnRJbnRlcm5hbHMgdG8gbm9uLWN1c3RvbSBlbGVtZW50cy5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW50ZXJuYWxzTWFwLmhhcyh0aGlzKSkge1xuICAgICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgICAgICBgRE9NRXhjZXB0aW9uOiBGYWlsZWQgdG8gZXhlY3V0ZSAnYXR0YWNoSW50ZXJuYWxzJyBvbiAnSFRNTEVsZW1lbnQnOiBFbGVtZW50SW50ZXJuYWxzIGZvciB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgd2FzIGFscmVhZHkgYXR0YWNoZWQuYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50SW50ZXJuYWxzKHRoaXMpIGFzIElFbGVtZW50SW50ZXJuYWxzO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8taW5uZXItZGVjbGFyYXRpb25zXG4gICAgICBmdW5jdGlvbiBhdHRhY2hTaGFkb3dPYnNlcnZlciguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBhdHRhY2hTaGFkb3cuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIHNoYWRvd1Jvb3RNYXAuc2V0KHRoaXMsIHNoYWRvd1Jvb3QpO1xuXG4gICAgICAgIGlmIChtdXRhdGlvbk9ic2VydmVyRXhpc3RzKCkpIHtcbiAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spO1xuICAgICAgICAgIGlmICh3aW5kb3cuU2hhZHlET00pIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGhpcywgb2JzZXJ2ZXJDb25maWcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNoYWRvd1Jvb3QsIG9ic2VydmVyQ29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2hhZG93SG9zdHNNYXAuc2V0KHRoaXMsIG9ic2VydmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hhZG93Um9vdDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYXR0YWNoU2hhZG93ID0gRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93O1xuICAgICAgRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93ID0gYXR0YWNoU2hhZG93T2JzZXJ2ZXI7XG4gICAgfVxuXG4gICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKSkge1xuICAgICAgY29uc3QgZG9jdW1lbnRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spO1xuICAgICAgZG9jdW1lbnRPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgb2JzZXJ2ZXJDb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEtlZXBzIHRoZSBwb2x5ZmlsbCBmcm9tIHRocm93aW5nIGluIGVudmlyb25tZW50cyB3aGVyZSBIVE1MRm9ybUVsZW1lbnRcbiAgICAgKiBpcyB1bmRlZmluZWQgbGlrZSBpbiBhIHNlcnZlciBlbnZpcm9ubWVudFxuICAgICAqL1xuICAgIGlmICh0eXBlb2YgSFRNTEZvcm1FbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcGF0Y2hGb3JtUHJvdG90eXBlKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3cuQ3VzdG9tU3RhdGVTZXQpIHtcbiAgICAgIHdpbmRvdy5DdXN0b21TdGF0ZVNldCA9IEN1c3RvbVN0YXRlU2V0O1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93LkN1c3RvbVN0YXRlU2V0KSB7XG4gICAgd2luZG93LkN1c3RvbVN0YXRlU2V0ID0gQ3VzdG9tU3RhdGVTZXQ7XG4gICAgY29uc3QgYXR0YWNoSW50ZXJuYWxzID0gSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEludGVybmFscztcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IGludGVybmFscyA9IGF0dGFjaEludGVybmFscy5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgICAgaW50ZXJuYWxzLnN0YXRlcyA9IG5ldyBDdXN0b21TdGF0ZVNldCh0aGlzKTtcbiAgICAgIHJldHVybiBpbnRlcm5hbHM7XG4gICAgfTtcbiAgfVxufVxuIiwgImltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50IH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMYW5nSW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIGxhbmcgdXNlZCB0byBmb3JtYXQgY29udGVudCByZW5kZXJlZCBieSB0aGlzIGVsZW1lbnRcbiAgICogQGF0dHIgbGFuZ1xuICAgKi9cbiAgbGFuZzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTGFuZ01peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBMYW5nRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIEFkanVzdHMgdGhlIGxhbmcgdXNlZCB0byBmb3JtYXQgY29udGVudCByZW5kZXJlZCBieSB0aGlzIGVsZW1lbnRcbiAgICAgKiBAYXR0ciBsYW5nXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBsYW5nOiBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIExhbmdFbGVtZW50IGFzIENvbnN0cnVjdG9yPExhbmdJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciwgTXRlRWxlbWVudCB9IGZyb20gJy4uLyc7XG5cbi8qKlxuICogU3BlY2lhbCBjbGFzcyB0aGF0IGhlbHBzIGZyYW1ld29yayB3cmFwcGVyIHN0eWxpbmcga25vdyB3aGVuIGEgd3JhcHBlciBmcmFtZXdvcmtcbiAqIGhhcyBmaW5pc2hlZCByZW5kZXJpbmcgYW5kIHRodXMgZWxlbWVudHMgY2FuIG5vdyBiZSBzaG93biB3aXRob3V0IGEgRk9VQy4gVGhpc1xuICogb2NjdXJzIGluIHRoZSBzY2VuYXJpbyB3aGVyZSBMaXQgZWxlbWVudHMgcmVnaXN0ZXIgYW5kIHJlbmRlciBiZWZvcmUgdGhlXG4gKiB3cmFwcGVyIGZyYW1ld29yayBwYXNzZXMgZWxlbWVudHMgdGhlaXIgcHJvcHMuXG4gKi9cbmV4cG9ydCBjb25zdCBXYWl0Rm9yRnJhbWV3b3JrTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIFdhaXRGb3JGcmFtZXdvcmtFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqIEBpZ25vcmUgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6ICdtdGUtZnctcmVuZGVyZWQnLCByZWZsZWN0OiB0cnVlIH0pIF9md1JlbmRlcmVkO1xuICB9XG4gIHJldHVybiBXYWl0Rm9yRnJhbWV3b3JrRWxlbWVudCBhcyBUO1xufTtcbiIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7Ym94LXNpemluZzpib3JkZXItYm94fWA7IiwgImltcG9ydCB7IHNlbGVjdG9yRmFjdG9yeSB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBiYXNlU3R5bGVzLCBkZWZpbmVFbGVtZW50LCBNdGVDb250ZW50QmFzZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi90ZXh0LnN0eWxlcyc7XG5pbXBvcnQgeyB0ZXh0IH0gZnJvbSAnc3RyZWFtL2NvbnN1bWVycyc7XG5cbi8qKlxuICogQHNsb3QgLSBEZWZhdWx0IHNsb3R0ZWQgY29udGVudFxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLXRleHQnKVxuZXhwb3J0IGNsYXNzIE10ZVRleHQgZXh0ZW5kcyBNdGVDb250ZW50QmFzZSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbYmFzZVN0eWxlcywgc3R5bGVzXTtcblxuICAvKiogU2V0cyB0aGUgYHRleHQtYWxpZ25tZW50YCBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGFsaWduPzpcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2xlZnQnXG4gICAgfCAnanVzdGlmeSdcbiAgICB8ICdqdXN0aWZ5LWFsbCdcbiAgICB8ICdtYXRjaC1wYXJlbnQnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICAgIHwgJ3JldmVydCdcbiAgICB8ICdyZXZlcnQtbGF5ZXInXG4gICAgfCAndW5zZXQnO1xuXG4gIC8qKiBBZGp1c3RzIHRoZSBmb250IHNpemUgb2YgdGhpcyB0ZXh0ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgc2l6ZT86ICd4eHMnIHwgJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJztcblxuICAvKiogU2V0cyB0aGUgYHRleHQtdHJhbnNmb3JtYCBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHRyYW5zZm9ybT86XG4gICAgfCAndXBwZXJjYXNlJ1xuICAgIHwgJ2xvd2VyY2FzZSdcbiAgICB8ICdjYXBpdGFsaXplJ1xuICAgIHwgJ2Z1bGwtd2lkdGgnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICAgIHwgJ3JldmVydCdcbiAgICB8ICdyZXZlcnQtbGF5ZXInXG4gICAgfCAndW5zZXQnO1xuXG4gIC8qKiBTZXRzIHRoZSBgd29yZC1icmVha2AgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSB3b3JkQnJlYWs/OlxuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdicmVhay1hbGwnXG4gICAgfCAna2VlcC1hbGwnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICAgIHwgJ3JldmVydCdcbiAgICB8ICdyZXZlcnQtbGF5ZXInXG4gICAgfCAndW5zZXQnO1xuXG4gIC8qKiBTZXRzIHRoZSBgd29yZC1zcGFjaW5nYCBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHdvcmRTcGFjaW5nPzogJ3NtJyB8ICdtZCcgfCAnbGcnO1xuXG4gIC8qKiBTZXRzIHRoZSBgbGV0dGVyLXNwYWNpbmdgIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbGV0dGVyU3BhY2luZz86ICdzbScgfCAnbWQnIHwgJ2xnJztcblxuICAvKiogU2V0cyB0aGUgYHdoaXRlLXNwYWNlYCBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHdoaXRlU3BhY2U/OlxuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdub3dyYXAnXG4gICAgfCAncHJlJ1xuICAgIHwgJ3ByZS13cmFwJ1xuICAgIHwgJ3ByZS1saW5lJ1xuICAgIHwgJ2JyZWFrLXNwYWNlcydcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gICAgfCAncmV2ZXJ0J1xuICAgIHwgJ3JldmVydC1sYXllcidcbiAgICB8ICd1bnNldCc7XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoZSB0ZXh0IHNob3VsZCBiZSB1bmRlcmxpbmVkICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgdW5kZXJsaW5lPzogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciBvciBub3QgdGhlIHRleHQgc2hvdWxkIGJlIGl0YWxpYyAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGl0YWxpYz86IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoZSB0ZXh0IHNob3VsZCBiZSBzdHJpa2VkIHRocm91Z2ggKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBzdHJpa2V0aHJvdWdoPzogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciBvciBub3QgdGhpcyB0ZXh0IHNob3VsZCByZW5kZXIgbXV0ZWQgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBtdXRlZD86IGJvb2xlYW47XG5cbiAgLyoqIExpbWl0cyB0aGUgYW1vdW50IG9mIHZpc2libGUgbGluZXMuIFNldHMgdGhlIGAtd2Via2l0LWxpbmUtY2xhbXBgIHByb3BlcnR5LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGxpbmVDbGFtcD86IHN0cmluZztcblxuICAvKiogQWRqdXN0cyBpZiB0ZXh0IGlzIHdyYXBwZWQgYW5kIGlmIHNvLCB3aGF0IGFsZ29yaXRobSBkZXRlcm1pbmVzIHRoZSB3cmFwcGluZyBiZWhhdmlvci4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSB0ZXh0V3JhcD86XG4gICAgfCAnd3JhcCdcbiAgICB8ICdub3dyYXAnXG4gICAgfCAnYmFsYW5jZSdcbiAgICB8ICdwcmV0dHknXG4gICAgfCAnaW5oZXJpdCdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ3JldmVydCdcbiAgICB8ICdyZXZlcnQtbGF5ZXInXG4gICAgfCAndW5zZXQnXG4gICAgfCB1bmRlZmluZWQ7XG5cbiAgLyoqIFdlYXRoZXIgb3Igbm90IHRoZSB0ZXh0IHNob3VsZCB3cmFwIHRvIHRoZSBuZXh0IGxpbmUgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBub1dyYXA/OiBib29sZWFuO1xuXG4gIC8qKiBMaW1pdHMgdGhlIHdpZHRoIHRvIGEgc3BlY2lmaWVkIG51bWJlciBvZiAwIGdseXBoIGNoYXJhY3RlcnMgYW5kIGlzIHR5cGljYWxseSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggbm9XcmFwIG9yIGxpbmVDbGFtcCAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIsIHJlZmxlY3Q6IHRydWUgfSkgbWF4Q2hhcldpZHRoPzogbnVtYmVyO1xuXG4gIHByaXZhdGUgc3RhdGljIF9zdHlsZVByb3BzID0gbmV3IFNldChbXG4gICAgJ2FsaWduJyxcbiAgICAnaXRhbGljJyxcbiAgICAnbGluZUNsYW1wJyxcbiAgICAnbWF4Q2hhcldpZHRoJyxcbiAgICAnc3RyaWtldGhyb3VnaCcsXG4gICAgJ3RyYW5zZm9ybScsXG4gICAgJ3VuZGVybGluZScsXG4gICAgJ3doaXRlU3BhY2UnLFxuICAgICd3b3JkQnJlYWsnLFxuICAgICd3b3JkU3BhY2luZycsXG4gICAgJ2xldHRlclNwYWNpbmcnLFxuICAgICd0ZXh0V3JhcCcsXG4gIF0pO1xuXG4gIHByb3RlY3RlZCB1cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci51cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gQ2hlY2sgaWYgYW55IGNvbnRlbnQgcHJvcCBoYXMgY2hhbmdlZCB0byBkZXRlcm1pbmUgaWYgd2UgbmVlZCB0byB1cGRhdGUgdGhlIGluc3RhbmNlIHN0eWxlc1xuICAgIGxldCBzaG91bGRVcGRhdGVTdHlsZXMgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBjaGFuZ2VkUHJvcHMua2V5cygpKSB7XG4gICAgICBpZiAoTXRlVGV4dC5fc3R5bGVQcm9wcy5oYXMoa2V5KSkge1xuICAgICAgICBzaG91bGRVcGRhdGVTdHlsZXMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkVXBkYXRlU3R5bGVzKSB7XG4gICAgICAvLyBDYWxjIHRleHQtZGVjb3JhdGlvblxuICAgICAgbGV0IHRleHREZWNvcmF0aW9uO1xuICAgICAgaWYgKHRoaXMudW5kZXJsaW5lKSB7XG4gICAgICAgIHRleHREZWNvcmF0aW9uID0gYHVuZGVybGluZSR7dGhpcy5zdHJpa2V0aHJvdWdoID8gJyBsaW5lLXRocm91Z2gnIDogJyd9YDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpa2V0aHJvdWdoKSB7XG4gICAgICAgIHRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICB9XG4gICAgICAvLyBDYWxjIHdvcmQtc3BhY2luZ1xuICAgICAgbGV0IHdvcmRTcGFjaW5nO1xuICAgICAgaWYgKHRoaXMud29yZFNwYWNpbmcgPT09ICdzbScpIHtcbiAgICAgICAgd29yZFNwYWNpbmcgPSAnLTAuMDVlbSc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMud29yZFNwYWNpbmcgPT09ICdsZycpIHtcbiAgICAgICAgd29yZFNwYWNpbmcgPSAnMC4wNWVtJztcbiAgICAgIH1cbiAgICAgIC8vIENhbGMgbGV0dGVyLXNwYWNpbmdcbiAgICAgIGxldCBsZXR0ZXJTcGFjaW5nO1xuICAgICAgaWYgKHRoaXMubGV0dGVyU3BhY2luZyA9PT0gJ3NtJykge1xuICAgICAgICBsZXR0ZXJTcGFjaW5nID0gJy0wLjAyZW0nO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmxldHRlclNwYWNpbmcgPT09ICdsZycpIHtcbiAgICAgICAgbGV0dGVyU3BhY2luZyA9ICcwLjAyZW0nO1xuICAgICAgfVxuXG4gICAgICAvLyBEb3VibGUgdGhlIGA6aG9zdGAgc2VsZWN0b3IgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgYmV5b25kIG1vc3QgY29tcG9uZW50IGxldmVsIHN0eWxlcyBieSBkZWZhdWx0XG4gICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoJ3RleHQnLCBzZWxlY3RvckZhY3RvcnkoJzpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnKSwge1xuICAgICAgICAnLXdlYmtpdC1saW5lLWNsYW1wJzogdGhpcy5saW5lQ2xhbXAsXG4gICAgICAgICdtYXhXaWR0aCc6IE51bWJlci5pc0Zpbml0ZSh0aGlzLm1heENoYXJXaWR0aClcbiAgICAgICAgICA/IGAke01hdGgucm91bmQodGhpcy5tYXhDaGFyV2lkdGggPCAwID8gMCA6IHRoaXMubWF4Q2hhcldpZHRoKX1jaGBcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgICd3b3JkLWJyZWFrJzogdGhpcy53b3JkQnJlYWssXG4gICAgICAgICd3b3JkLXNwYWNpbmcnOiB3b3JkU3BhY2luZyxcbiAgICAgICAgJ2xldHRlci1zcGFjaW5nJzogbGV0dGVyU3BhY2luZyxcbiAgICAgICAgJ3doaXRlLXNwYWNlJzogdGhpcy53aGl0ZVNwYWNlLFxuICAgICAgICAnZm9udC1zdHlsZSc6IHRoaXMuaXRhbGljID8gJ2l0YWxpYycgOiB1bmRlZmluZWQsXG4gICAgICAgICd0ZXh0LWFsaWduJzogdGhpcy5hbGlnbixcbiAgICAgICAgJ3RleHQtZGVjb3JhdGlvbic6IHRleHREZWNvcmF0aW9uLFxuICAgICAgICAndGV4dC10cmFuc2Zvcm0nOiB0aGlzLnRyYW5zZm9ybSxcbiAgICAgICAgJ3RleHQtd3JhcCc6IHRoaXMudGV4dFdyYXAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgJHt0aGlzLmluc3RhbmNlU3R5bGVzfTxzbG90Pjwvc2xvdD5gO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS10ZXh0JzogTXRlVGV4dDtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWNvbG9yOmluaGVyaXQ7Y29sb3I6dmFyKC0tY29sb3IpO2Rpc3BsYXk6aW5saW5lLWJsb2NrfTpob3N0KFtsaW5lQ2xhbXBdKXtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWx9Omhvc3QoW2xpbmVDbGFtcF1bYmxvY2tdKXtkaXNwbGF5Oi13ZWJraXQtYm94fTpob3N0KFtub1dyYXBdKXtkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH06aG9zdChbc2l6ZT14eHNdKXtmb250LXNpemU6LjYyNXJlbX06aG9zdChbc2l6ZT14c10pe2ZvbnQtc2l6ZTouNzVyZW19Omhvc3QoW3NpemU9c21dKXtmb250LXNpemU6Ljg3NXJlbX06aG9zdChbc2l6ZT1tZF0pe2ZvbnQtc2l6ZToxcmVtfTpob3N0KFtzaXplPWxnXSl7Zm9udC1zaXplOjEuMjVyZW19Omhvc3QoW3NpemU9eGxdKXtmb250LXNpemU6MS41cmVtfTpob3N0KFtzaXplPXh4bF0pe2ZvbnQtc2l6ZToxLjc1cmVtfTpob3N0KFttdXRlZF0pey0tY29sb3I6dmFyKC0tbXRlLWluay0yKX1gOyIsIG51bGwsICJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgYmFzZVN0eWxlcywgZGVmaW5lRWxlbWVudCwgTXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9kZXNjcmlwdGlvbi5zdHlsZXMnO1xuXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuLyoqXG4gKiBFbGVtZW50IHVzZWQgdG8gcmVwcmVzZW50IGRlc2NyaXB0aW9uIG1lc3NhZ2luZyB0ZXh0XG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtZGVzY3JpcHRpb24nKVxuZXhwb3J0IGNsYXNzIE10ZURlc2NyaXB0aW9uIGV4dGVuZHMgTXRlRWxlbWVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbYmFzZVN0eWxlcywgc3R5bGVzXTtcblxuICAvKiogRGVmYXVsdCB1bmlxdWUgSUQgZm9yIHRoaXMgaGludCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGlkID0gYG10ZS1kZXNjcmlwdGlvbi0tJHtuZXh0VW5pcXVlSWQrK31gO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGAke3RoaXMuaW5zdGFuY2VTdHlsZXN9PHNsb3Q+PC9zbG90PmA7XG4gIH1cbn1cblxuLyoqXG4gKiBFbGVtZW50IHVzZWQgdG8gcmVwcmVzZW50IGRlc2NyaXB0aW9uIG1lc3NhZ2luZyB0ZXh0XG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtZGVzY3JpcHRpb24tdGV4dCcpXG5leHBvcnQgY2xhc3MgTXRlRGVzY3JpcHRpb25UZXh0IGV4dGVuZHMgTXRlRGVzY3JpcHRpb24ge31cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLWRlc2NyaXB0aW9uJzogTXRlRGVzY3JpcHRpb247XG4gICAgJ210ZS1kZXNjcmlwdGlvbi10ZXh0JzogTXRlRGVzY3JpcHRpb25UZXh0O1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtjb2xvcjp2YXIoLS1tdGUtaW5rLTIpO2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWxpbmUtaGVpZ2h0KTttYXJnaW46dmFyKC0tbXRlLXNwYWNlLXhzKSAwO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7d2lkdGg6MTAwJX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItbGlnaHRlci1yZ2IpKTtib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXhzKTtjb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtcmdiKSk7ZGlzcGxheTpmbGV4O2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtd2VpZ2h0KTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtnYXA6dmFyKC0tbXRlLXNwYWNlLXhzKTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1saW5lLWhlaWdodCk7bWFyZ2luOnZhcigtLW10ZS1zcGFjZS14cykgMDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowIHZhcigtLW10ZS1zcGFjZS14cyk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt3aWR0aDoxMDAlfWA7IiwgImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHksIHN0YXRlIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9pY29uLnN0eWxlcyc7XG5pbXBvcnQge1xuICBkZWZpbmVFbGVtZW50LFxuICBTdGF0dXNDb2xvck1peGluLFxuICBNdGVFbGVtZW50LFxuICBQcmVzZXRNaXhpbkZhY3RvcnksXG4gIG9uVXBkYXRlLFxuICBVbnN1YnNjcmliZXIsXG4gIGlzU3NyLFxufSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IG10ckljb24gfSBmcm9tICdAbW9ydGFyL2ljb25zJztcbmltcG9ydCB7IE10ZUljb25SZWdpc3RyeVNlcnZpY2UgfSBmcm9tICcuL2ljb24tcmVnaXN0cnkuc2VydmljZSc7XG5pbXBvcnQgeyBJY29uUHJlc2V0IH0gZnJvbSAnLi9pY29uLnByZXNldHMnO1xuaW1wb3J0IHsgdW5zYWZlU1ZHIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvdW5zYWZlLXN2Zy5qcyc7XG5pbXBvcnQgeyBzZWxlY3RvckZhY3RvcnkgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5cbi8qKlxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLWljb24nKVxuZXhwb3J0IGNsYXNzIE10ZUljb24gZXh0ZW5kcyBTdGF0dXNDb2xvck1peGluKFxuICBQcmVzZXRNaXhpbkZhY3Rvcnk8SWNvblByZXNldD4oJ010ZUljb24nKShNdGVFbGVtZW50KVxuKSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbc3R5bGVzXTtcblxuICAvKiogVGhlIG5hbWUgb2YgdGhlIGljb24gdG8gcmVuZGVyICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbmFtZTogbXRySWNvbiB8IHN0cmluZztcblxuICAvKiogVGhlIGxpYnJhcnkgdG8gbG9hZCB0aGUgaWNvbiBmcm9tLiBUaGUgZGVmYXVsdCBsaWJyYXJ5IGlzIGBfZGVmYXVsdGAuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbGlicmFyeSA9ICdfZGVmYXVsdCc7XG5cbiAgLyoqIFRoZSBzaXplIG9mIHRoaXMgaWNvbi4gTWF0Y2hlcyBhIGdpdmVuIGZvbnQtc2l6ZSBpbiBweC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0OiB0cnVlIH0pIHNpemU6IHN0cmluZyB8IG51bWJlciA9IDI0O1xuXG4gIC8qKiBTY2FsZSB0aGlzIGljb24gcmVsYXRpdmUgdG8gdGhlIGNvbXB1dGVkIGZvbnQtc2l6ZSBvZiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgYXV0b3NpemUgPSBmYWxzZTtcblxuICAvKiogQW4gaWNvbidzIHJvbGUgaXMgZGVmYXVsdHMgdG8gYGltZ2AgdG8gZW5zdXJlIHRoZXkgZG8gbm90IGludGVycnVwdCB0ZXh0LiAgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSByb2xlID0gJ2ltZyc7XG5cbiAgLyoqIExhYmVsIGZvciBpY29uIHRvIGJlIHJlYWQgdG8gc2NyZWVucmVhZGVyIHRlY2hub2xvZ2llcyAqL1xuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6ICdhcmlhLWxhYmVsJywgcmVmbGVjdDogdHJ1ZSB9KSBhcmlhTGFiZWw6IHN0cmluZztcblxuICAvKiogTGFiZWwgZm9yIGljb24gdG8gYmUgcmVhZCB0byBzY3JlZW5yZWFkZXIgdGVjaG5vbG9naWVzICovXG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ2FyaWEtaGlkZGVuJywgcmVmbGVjdDogdHJ1ZSB9KSBhcmlhSGlkZGVuID0gJ3RydWUnO1xuXG4gIC8qKiBSZW5kZXJzIHRoZSBpY29uIGluIHRoZSBkZWZhdWx0IG11dGVkIGluayBjb2xvci4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBtdXRlZCA9IGZhbHNlO1xuXG4gIC8qKiBSZW5kZXJzIHRoaXMgaWNvbiB3aXRoIGNvbG9ycyBkZWZpbmVkIGluIHRoZSBTVkcgaW5zdGVhZCBvZiBpbmhlcml0aW5nIGZyb20gQ1NTIHBhcmVudHMgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRoQ29sb3IgPSBmYWxzZTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBUcmFja3MgdGhlIGxvYWRlZCBpY29uIHNvIHdlIGRvbid0IG5lZWQgdG8gcmVmZXRjaCBpdCBkdXJpbmcgaHlkcmF0aW9uXG4gICAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIF9sb2FkZWQ/OiBzdHJpbmc7XG5cbiAgQHN0YXRlKCkgcHJpdmF0ZSBpY29uU3ZnOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBmZXRjaEFib3J0Q29udHJvbGxlcj86IEFib3J0Q29udHJvbGxlcjtcblxuICBwcml2YXRlIHByZXZpb3VzSWNvblN1YnNjcmlwdGlvbjogVW5zdWJzY3JpYmVyO1xuXG4gIEBvblVwZGF0ZShbJ25hbWUnLCAnbGlicmFyeSddLCB7IG9uOiAnYm90aCcgfSlcbiAgcHJpdmF0ZSBoYW5kbGVOYW1lVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLm5hbWUpIHtcbiAgICAgIGlmICh0aGlzLm5lZWRzSWNvblVwZGF0ZSgpKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hBYm9ydENvbnRyb2xsZXI/LmFib3J0KCk7XG4gICAgICAgIHRoaXMuZmV0Y2hBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMucHJldmlvdXNJY29uU3Vic2NyaXB0aW9uPy4oKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0ljb25TdWJzY3JpcHRpb24gPSBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlLmdldEljb24oXG4gICAgICAgICAgdGhpcy5uYW1lLFxuICAgICAgICAgIHRoaXMubGlicmFyeSxcbiAgICAgICAgICB0aGlzLmZldGNoQWJvcnRDb250cm9sbGVyLnNpZ25hbFxuICAgICAgICApLnN1YnNjcmliZSgoaWNvbiwgdW5zdWIpID0+IHtcbiAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgY29uc3Qgb2xkU3ZnID0gdGhpcy5pY29uU3ZnO1xuICAgICAgICAgICAgY29uc3Qgb2xkTG9hZGVkID0gdGhpcy5fbG9hZGVkO1xuXG4gICAgICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgICAgICB0aGlzLmljb25TdmcgPSBpY29uO1xuICAgICAgICAgICAgICB0aGlzLl9sb2FkZWQgPSBgJHt0aGlzLmxpYnJhcnl9fiR7dGhpcy5uYW1lfWA7XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnaWNvblN2ZycsIG9sZFN2Zyk7XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnX2xvYWRlZCcsIG9sZExvYWRlZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvblN2ZyA9IGljb247XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVkID0gYCR7dGhpcy5saWJyYXJ5fX4ke3RoaXMubmFtZX1gO1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnaWNvblN2ZycsIG9sZFN2Zyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCdfbG9hZGVkJywgb2xkTG9hZGVkKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSByZXN1bHQgd2FzIG5vdCBudWxsIG9yIHRoZSBmYWxsYmFjayBpY29uIHRoZW4gd2UgbGVhdmUgdGhpcyBzdWJzY3JpcHRpb25cbiAgICAgICAgICAgIC8vIG9wZW4gaW4gY2FzZSBpdCBsb2FkcyBsYXRlciBvciBsYXp5IGxvYWRpbmcgaXMgcmUtZW5hYmxlZC5cbiAgICAgICAgICAgIGlmICh0aGlzLmljb25TdmcgIT09IG51bGwgJiYgdGhpcy5pY29uU3ZnICE9PSBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlWydmYWxsYmFja0ljb24nXSkge1xuICAgICAgICAgICAgICB1bnN1YigpO1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzSWNvblN1YnNjcmlwdGlvbj8uKCk7XG4gICAgICAgICAgICAgIHRoaXMucHJldmlvdXNJY29uU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRHVyaW5nIFNTUiBhbHdheXMgdW5zdWJcbiAgICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgICAgdW5zdWIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5pY29uU3ZnKSB7XG4gICAgICAgIC8vIElmIHRoZSBpY29uIGRvZXNuJ3QgbmVlZCBhbiB1cGRhdGUgYnV0IHdlIGRvbid0IGtub3cgd2hhdCB0aGUgaWNvblN2ZyBpcyAoaHlkcmF0aW5nIGZyb20gU1NSKSwgZ2V0IGl0IGZyb20gdGhlIERPTVxuICAgICAgICBjb25zdCBzdmcgPSB0aGlzLnJlbmRlclJvb3Q/LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpPy5vdXRlckhUTUwgPz8gbnVsbDtcbiAgICAgICAgLy8gV2FpdCBmb3IgdXBkYXRlIHRvIGNvbXBsZXRlIHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pY29uU3ZnID0gc3ZnO1xuICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnaWNvblN2ZycsIG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbG9hZGVkID0gbnVsbDtcbiAgICAgIHRoaXMuaWNvblN2ZyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBAb25VcGRhdGUoWydhcmlhTGFiZWwnXSwgeyBvbjogJ2JvdGgnIH0pXG4gIHByaXZhdGUgaGFuZGxlQXJpYUxhYmVsQ2hhbmdlKCkge1xuICAgIGlmICghdGhpcy5hcmlhTGFiZWwpIHtcbiAgICAgIHRoaXMuYXJpYUhpZGRlbiA9ICd0cnVlJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hcmlhTGFiZWwgJiYgdGhpcy5hcmlhSGlkZGVuID09PSAndHJ1ZScpIHtcbiAgICAgIHRoaXMuYXJpYUhpZGRlbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcygnc2l6ZScpIHx8IGNoYW5nZWRQcm9wcy5oYXMoJ2ljb25TdmcnKSB8fCBjaGFuZ2VkUHJvcHMuaGFzKCdhdXRvc2l6ZScpKSB7XG4gICAgICBpZiAodGhpcy5hdXRvc2l6ZSB8fCB0aGlzLnNpemUpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuYXV0b3NpemUgPyAnY2FsYygxZW0gKyAycHgpJyA6IGAke3RoaXMuc2l6ZX1weGA7XG4gICAgICAgIC8vIFNwZWNpZmljaXR5IGlzIG9uZSBsZXNzIHRoYXQgc2Uvc3AgcHJvcHMgc28gdGhvc2Ugc3RpbGwgb3ZlcnJpZGUgZGVmYXVsdCBzaXplIGNhbGN1bGF0aW9uc1xuICAgICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoJ210ZS1pY29uLXNpemluZycsIHNlbGVjdG9yRmFjdG9yeSgnOmhvc3Q6aG9zdCcpLCB7XG4gICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgbWluV2lkdGg6IHNpemUsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICAgIG1pbkhlaWdodDogc2l6ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIHRoaXMucHJldmlvdXNJY29uU3Vic2NyaXB0aW9uPy4oKTtcbiAgfVxuXG4gIHByaXZhdGUgbmVlZHNJY29uVXBkYXRlKCkge1xuICAgIHJldHVybiAhdGhpcy5fbG9hZGVkIHx8IHRoaXMuX2xvYWRlZCAhPT0gYCR7dGhpcy5saWJyYXJ5fX4ke3RoaXMubmFtZX1gO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYCR7dGhpcy5pbnN0YW5jZVN0eWxlc30ke3Vuc2FmZVNWRyh0aGlzLmljb25TdmcpfWA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLWljb24nOiBNdGVJY29uO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2JveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50O2NvbG9yOnZhcigtLWljb24tY29sb3IsaW5oZXJpdCk7ZGlzcGxheTppbmxpbmUtYmxvY2s7bGluZS1oZWlnaHQ6MDt3aWR0aDoyNHB4fTpob3N0KFthdXRvc2l6ZV0pe3ZlcnRpY2FsLWFsaWduOm1pZGRsZX06aG9zdChbbXV0ZWRdKXstLWljb24tY29sb3I6dmFyKC0tbXRlLWluay0yKX1zdmd7ZGlzcGxheTpibG9jaztoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfTpob3N0KDpub3QoW3dpdGhDb2xvcl0pKSBzdmcgKntjb2xvcjppbmhlcml0O2ZpbGw6Y3VycmVudENvbG9yIWltcG9ydGFudH06aG9zdChbY29sb3I9cHJpbWFyeV0pPnN2ZyAqe2NvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XSk+c3ZnICp7Y29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXRlcnRpYXJ5XSk+c3ZnICp7Y29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c3VjY2Vzc10pPnN2ZyAqe2NvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9d2FybmluZ10pPnN2ZyAqe2NvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXSk+c3ZnICp7Y29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtcmdiKSl9YDsiLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWluZmVycmFibGUtdHlwZXMgKi9cbmltcG9ydCB7IFNpZ25hbCwgc2lnbmFsLCBpc1NzciwgY29tcHV0ZWQgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IE1vcnRhckljb24sIG10ckljb25IZWxwUmhvbWJ1cyB9IGZyb20gJ0Btb3J0YXIvaWNvbnMnO1xuXG5leHBvcnQgdHlwZSBJY29uRGF0YSA9IHsgZGF0YT86IHN0cmluZzsgZmV0Y2hlZD86IGJvb2xlYW4gfTtcblxuLyoqXG4gKiBTZXJ2aWNlIHVzZWQgdG8gcmVnaXN0ZXIgc3ZnIHN0cmluZ3MgZm9yIGEgZ2l2ZW4gaWNvbiBuYW1lIGFuZCB0aGVuIGxvb2sgdGhlbVxuICogdXAgYnkgdGhhdCBzYW1lIG5hbWUgb3IgZmV0Y2ggdGhlbSBmcm9tIGEgQ0ROLiBUaGUgYE10ZUljb25SZWdpc3RyeVNlcnZpY2VgIGlzXG4gKiBhIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzLiBZb3Ugc2hvdWxkIGFsd2F5cyB1c2UgdGhhdCBleHBvcnQgaW5zdGVhZFxuICogb2YgaW5pdGlhbGl6aW5nIGEgbmV3IGluc3RhbmNlLlxuICovXG5leHBvcnQgY2xhc3MgX010ZUljb25SZWdpc3RyeVNlcnZpY2Uge1xuICAvKiogTWFwIHdoZXJlIGxvYWRlZCBpY29uIHN2Z3MgYXJlIGNhY2hlZCAqL1xuICBwcml2YXRlIGljb25SZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBTaWduYWw8SWNvbkRhdGE+PigpO1xuXG4gIC8qKiBNYXAgb2YgcmVnaXN0ZXJlZCBsYXp5IGxvYWRpbmcgcmVzb2x2ZXIgZnVuY3Rpb25zIHBlciBpY29uIGxpYnJhcnkgKi9cbiAgcHJpdmF0ZSBpY29uVXJsUmVzb2x2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIChpY29uTmFtZTogc3RyaW5nKSA9PiBzdHJpbmc+KCk7XG5cbiAgLyoqIERlZmluZXMgdGhlIHN2ZyB1c2VkIHdoZW4gYW4gaWNvbiBjYW5ub3QgYmUgbG9hZGVkICovXG4gIHByaXZhdGUgZmFsbGJhY2tJY29uID0gbXRySWNvbkhlbHBSaG9tYnVzPy5kYXRhO1xuXG4gIC8qKiBUcmFja3MgaWYgaWNvbnMgc2hvdWxkIGJlIGxhenkgbG9hZGVkIGludGVybmFsbHkgKi9cbiAgcHJpdmF0ZSBsYXp5TG9hZEVuYWJsZWQgPSB0cnVlO1xuXG4gIC8qKiBQcmV2ZW50cyBsb2dzIGFuZCBmZXRjaGVzIHdoZW4gdHJ1ZSAqL1xuICBwcml2YXRlIHRlc3RNb2RlRW5hYmxlZCA9IGZhbHNlO1xuXG4gIC8qKiBEZWxpbWl0ZXIgdXNlZCB3aGVuIGNyZWF0aW5nIGxpYnJhcnkgKyBpY29uIG5hbWUga2V5cyAqL1xuICBwcml2YXRlIGRlbGltaXRlciA9ICd+JztcblxuICAvKiogSWYgZXhlY3V0aW5nIHNlcnZlci1zaWRlIGFsbCBtb3J0YXIgaWNvbnMgd2lsbCBiZSBsb2FkZWQgaGVyZSAqL1xuICBwcml2YXRlIHNlcnZlckljb25DYWNoZT86IFJlY29yZDxzdHJpbmcsIE1vcnRhckljb24+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaWNvblVybFJlc29sdmVycy5zZXQoJ19kZWZhdWx0JywgKGljb25OYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBgaHR0cHM6Ly9tb3J0YXItY2RuLmhlYi5jb20vaWNvbnMvbWRpLzcuMi8ke2ljb25OYW1lfS5zdmdgO1xuICAgIH0pO1xuICAgIHRoaXMuaWNvblVybFJlc29sdmVycy5zZXQoJ2N4JywgKGljb25OYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBgaHR0cHM6Ly9tb3J0YXItY2RuLmhlYi5jb20vaWNvbnMvY3gvMS4xLyR7aWNvbk5hbWV9LnN2Z2A7XG4gICAgfSk7XG4gICAgdGhpcy5zc3JJbml0KCkudGhlbigoKSA9PiB7fSk7XG4gIH1cblxuICAvKiogQGhpZGRlbiAqL1xuICBhc3luYyBzc3JJbml0KCkge1xuICAgIC8qKlxuICAgICAqIFRoaXMgbW9uc3Ryb3NpdHkgZW5hYmxlcyBsb2NhbCBpY29uIHJlbmRlcmluZyBkdXJpbmcgU1NSIF9XSVRIT1VUXyBhbHNvIHJlc3VsdGluZyBpblxuICAgICAqIGJ1bmRsZXJzIHB1bGxpbmcgaW4gdGhlIGVudGlyZSBpY29uIGxpYnJhcnkgZWxzZXdoZXJlLiBUaGlzIGNhbiBhbHNvIGJlIGFjaGlldmVkIHdpdGgganVzdFxuICAgICAqIHRoZSBtYWdpYyBjb21tZW50cyBiZWxvdy4uLmJ1dCBub3QgYWxsIGJ1bmRsZXJzIHN1cHBvcnQgdGhhdCBraW5kIG9mIGZlYXR1cmUgc28gdGhpcyBpcyBhblxuICAgICAqIGV4dHJhIHByZWNhdXRpb24uXG4gICAgICpcbiAgICAgKiBGb3IgdGhpcyB0byB3b3JrOlxuICAgICAqIC0gVGhlIGVudmlyb25tZW50IHZhcmlhYmxlIGBNT1JUQVJfRFlOQU1JQ19TU1JfSUNPTl9JTVBPUlRTYCBtdXN0IGJlIHRydWVcbiAgICAgKiAtIFRoZSBgQG1vcnRhci9pY29uc2AgcGFja2FnZSBtdXN0IGJlIGF2YWlsYWJsZVxuICAgICAqL1xuICAgIHRyeSB7XG4gICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICBjb25zdCBpY29uSW1wb3J0ID1cbiAgICAgICAgICAocHJvY2VzcyBhcyBhbnkpPy5lbnYuTU9SVEFSX0RZTkFNSUNfU1NSX0lDT05fSU1QT1JUUyA9PT0gJ3RydWUnID8gJ0Btb3J0YXIvaWNvbnMnIDogbnVsbDtcbiAgICAgICAgaWYgKGljb25JbXBvcnQpIHtcbiAgICAgICAgICAvLyBBdHRlbXB0IHRvIGxvYWQgYWxsIGljb25zIGxvY2FsbHkgaWYgcnVuIHNlcnZlciBzaWRlLiBUaGUgaWdub3JlXG4gICAgICAgICAgLy8gY29tbWVudHMgaGVyZSBwcmV2ZW50IHdlYnBhY2sgJiB2aXRlIGZyb20gdGhyb3dpbmcgYSB3YXJuaW5nXG4gICAgICAgICAgLy8gc2luY2UgdGhlaXIgaW5hYmlsaXR5IHRvIG9wdGltaXplIHRoaXMgaXMgaW50ZW50aW9uYWwgaGVyZS5cbiAgICAgICAgICBjb25zdCBpY29ucyA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovIC8qIEB2aXRlLWlnbm9yZSAqLyBpY29uSW1wb3J0KTtcbiAgICAgICAgICB0aGlzLnNlcnZlckljb25DYWNoZSA9IGljb25zPy5kZWZhdWx0ID8/IGljb25zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLyogZW1wdHkgKi9cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgcm9vdCB1cmwgZnJvbSB3aGljaCB0aGlzIHNlcnZpY2Ugd2lsbCBhdHRlbXB0IHRvIGZldGNoIGljb25zIGZyb20gZm9yIHRoZSBnaXZlbiBcImxpYnJhcnlcIi5cbiAgICovXG4gIHB1YmxpYyByZWdpc3Rlckljb25MaWJyYXJ5KFxuICAgIGljb25MaWJyYXJ5ID0gJ19kZWZhdWx0JyxcbiAgICBpY29uVXJsUmVzb2x2ZXI/OiAoaWNvbk5hbWU6IHN0cmluZykgPT4gc3RyaW5nXG4gICkge1xuICAgIHRoaXMubGF6eUxvYWRFbmFibGVkID0gdHJ1ZTtcbiAgICBpZiAoaWNvblVybFJlc29sdmVyKSB7XG4gICAgICB0aGlzLmljb25VcmxSZXNvbHZlcnMuc2V0KGljb25MaWJyYXJ5ID8/ICdfZGVmYXVsdCcsIGljb25VcmxSZXNvbHZlcik7XG4gICAgfVxuXG4gICAgLy8gRmV0Y2ggYW55IGljb25zIHJlcXVlc3RlZCBiZWZvcmUgdGhpcyB3YXMgY2FsbGVkIHRoYXQgaGF2ZSBub3QgeWV0IGJlZW4gZmV0Y2hlZFxuICAgIGZvciAoY29uc3QgW25hbWUsIGljb25TaWduYWxdIG9mIHRoaXMuaWNvblJlZ2lzdHJ5KSB7XG4gICAgICBpZiAoIWljb25TaWduYWwgfHwgIWljb25TaWduYWwuZ2V0KCk/LmZldGNoZWQpIHtcbiAgICAgICAgY29uc3QgW2ljb25MaWJyYXJ5LCBwYXRoTmFtZV0gPSBuYW1lLnNwbGl0KHRoaXMuZGVsaW1pdGVyKTtcbiAgICAgICAgdGhpcy5mZXRjaEljb24ocGF0aE5hbWUsIGljb25MaWJyYXJ5KS50aGVuKChpY29uKSA9PiB7XG4gICAgICAgICAgaWNvblNpZ25hbC5zZXQoeyBmZXRjaGVkOiB0cnVlLCBkYXRhOiBpY29uIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogTWFudWFsbHkgcmVnaXN0ZXJzIG5ldyBpY29ucyAqL1xuICBwdWJsaWMgcmVnaXN0ZXJJY29ucyhpY29uczogTW9ydGFySWNvbltdLCBpY29uTGlicmFyeSA9ICdfZGVmYXVsdCcpIHtcbiAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICBjb25zdCBpY29uU2lnbmFsID0gdGhpcy5pY29uUmVnaXN0cnkuZ2V0KGAke2ljb25MaWJyYXJ5fSR7dGhpcy5kZWxpbWl0ZXJ9JHtpY29uLm5hbWV9YCk7XG4gICAgICBpZiAoIWljb25TaWduYWwpIHtcbiAgICAgICAgdGhpcy5pY29uUmVnaXN0cnkuc2V0KFxuICAgICAgICAgIGAke2ljb25MaWJyYXJ5fSR7dGhpcy5kZWxpbWl0ZXJ9JHtpY29uLm5hbWV9YCxcbiAgICAgICAgICBzaWduYWwoeyBmZXRjaGVkOiB0cnVlLCBkYXRhOiBpY29uLmRhdGEgfSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoaWNvblNpZ25hbCAmJiAhaWNvblNpZ25hbC5nZXQoKT8uZmV0Y2hlZCkge1xuICAgICAgICBpY29uU2lnbmFsLnNldCh7IGZldGNoZWQ6IHRydWUsIGRhdGE6IGljb24uZGF0YSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgeW91IHRvIG92ZXJyaWRlIHRoZSBsYXp5IGxvYWRpbmcuIERlZmF1bHRzIHRvIGB0cnVlYC5cbiAgICogV2hlbiBgZmFsc2VgIGljb25zIHdpbGwgbm90IGJlIGZldGNoZWQgZnJvbSByZW1vdGUgbG9jYXRpb25zLlxuICAgKi9cbiAgcHVibGljIHNldExhenlMb2FkaW5nKHZhbHVlOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIHRoaXMubGF6eUxvYWRFbmFibGVkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIHlvdSB0byBvdmVycmlkZSB0aGUgdGVzdCBtb2RlLiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgKiBXaGVuIHRydWUgd2FybmluZ3Mgd2lsbCBub3QgYmUgdGhyb3duIGFuZCBubyBmZXRjaGVzIHdpbGwgYmUgbWFkZS5cbiAgICovXG4gIHB1YmxpYyBzZXRUZXN0TW9kZSh2YWx1ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgdGhpcy50ZXN0TW9kZUVuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBTZXRzIGEgbmV3IGN1c3RvbSBmYWxsYmFjayBpY29uICovXG4gIHB1YmxpYyBzZXRGYWxsYmFja0ljb24oZmFsbGJhY2tJY29uOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5mYWxsYmFja0ljb24gPSBmYWxsYmFja0ljb247XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gcmV0cmlldmUgYW4gaWNvbiBmcm9tIHRoZSByZWdpc3RyeS5cbiAgICpcbiAgICogSWYgYSByb290U3ZnSWNvblVybCBoYXMgYmVlbiBzZXQsIHRoaXMgbWV0aG9kIHdpbGxcbiAgICogYXR0ZW1wdCB0byBsb2FkIHRoZSBpY29uIGZyb20gdGhlcmUuIElmIHN1Y2Nlc3NmdWwsXG4gICAqIHRoYXQgc3ZnIHdpbGwgYmUgcmVnaXN0ZXJlZCBmb3IgcmV1c2UuXG4gICAqL1xuICBwdWJsaWMgZ2V0SWNvbihcbiAgICBwYXRoTmFtZTogc3RyaW5nLFxuICAgIGljb25MaWJyYXJ5ID0gJ19kZWZhdWx0JyxcbiAgICBhYm9ydFNpZ25hbD86IEFib3J0U2lnbmFsXG4gICk6IFNpZ25hbDxzdHJpbmcgfCBudWxsPiB7XG4gICAgLy8gSWYgaWNvbiBpcyB1bmRlZmluZWQgaW5zdGFudGx5IHJldHVybiB0aGUgZmFsbGJhY2sgaWNvblxuICAgIGlmIChwYXRoTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gc2lnbmFsKHRoaXMuZmFsbGJhY2tJY29uKTtcbiAgICB9XG4gICAgY29uc3QgcmVnaXN0ZXJlZFNpZ25hbCA9IHRoaXMuaWNvblJlZ2lzdHJ5LmdldChgJHtpY29uTGlicmFyeX0ke3RoaXMuZGVsaW1pdGVyfSR7cGF0aE5hbWV9YCk7XG4gICAgY29uc3QgaWNvblJlZ2lzdGVyZWQgPSAhIXJlZ2lzdGVyZWRTaWduYWw7XG4gICAgLy8gSWYgdGhlIGljb24gaXMgcmVnaXN0ZXJlZCBqdXN0IHJldHVybiBpdFxuICAgIGlmIChpY29uUmVnaXN0ZXJlZCkge1xuICAgICAgcmV0dXJuIGNvbXB1dGVkKHJlZ2lzdGVyZWRTaWduYWwsIChlbnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4gZW50cnk/LmRhdGE7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCBpZiBsYXp5TG9hZEVuYWJsZWQgdGhlbiBhdHRlbXB0IHRvIGZldGNoIGFuZCByZWdpc3RlciB0aGUgaWNvblxuICAgIGVsc2UgaWYgKCFpY29uUmVnaXN0ZXJlZCAmJiB0aGlzLmxhenlMb2FkRW5hYmxlZCkge1xuICAgICAgbGV0IGljb25TaWduYWw6IFNpZ25hbDxJY29uRGF0YT47XG5cbiAgICAgIC8vIExvYWQgZnJvbSBsb2NhbCBzZXJ2ZXIgaWNvbiBjYWNoZSBkdXJpbmcgc3NyIGlmIGl0IGV4aXN0c1xuICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VydmVySWNvbkNhY2hlKSB7XG4gICAgICAgICAgY29uc3QgY2FtZWxOYW1lID0gcGF0aE5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgKGcpID0+IGdbMV0udG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgY29uc3QgaWNvbk5hbWUgPSBgJHtpY29uTGlicmFyeSA9PT0gJ2N4JyA/ICdjeCcgOiAnbXRyJ31JY29uJHtjYW1lbE5hbWVcbiAgICAgICAgICAgIC5jaGFyQXQoMClcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpfSR7Y2FtZWxOYW1lLnNsaWNlKDEpfWA7XG5cbiAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJJY29uQ2FjaGVbaWNvbk5hbWVdIGFzIGFueSkge1xuICAgICAgICAgICAgaWNvblNpZ25hbCA9IHNpZ25hbDxJY29uRGF0YT4oe1xuICAgICAgICAgICAgICBkYXRhOiAodGhpcy5zZXJ2ZXJJY29uQ2FjaGVbaWNvbk5hbWVdIGFzIGFueSk/LmRhdGEsXG4gICAgICAgICAgICAgIGZldGNoZWQ6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlZEZhaWxlZExvYWQoaWNvbkxpYnJhcnksIHBhdGhOYW1lLCBpY29uU2lnbmFsKSBhcyBTaWduYWw8XG4gICAgICAgICAgICAgIHN0cmluZyB8IG51bGxcbiAgICAgICAgICAgID47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIElmIHRoZSBpY29uIGNhY2hlIGRvZXNuJ3QgZXhpc3QganVzdCBkbyBub3RoaW5nIGJlY2F1c2UgdGhlIGljb24gd2lsbCBiZSBsb2FkZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGljb25TaWduYWwgPSBzaWduYWw8SWNvbkRhdGE+KHtcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBmZXRjaGVkOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gSWYgbm90IG9uIHRoZSBzZXJ2ZXIgdGhlbiBmZXRjaCB0aGUgaWNvblxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIFNldCB0aGUgaWNvbiBhcyB0aGUgcmVzdWx0IG9mIHRoZSBhd2FpdCByaWdodCBub3csIGJlZm9yZSB0aGUgZmV0Y2hcbiAgICAgICAgLy8gaXMgaW5pdGlhdGVkLCB0byBwcmV2ZW50IHJlZHVuZGFudCBpbml0aWFsIHF1ZXJpZXMgb24gcGFnZSBsb2FkXG4gICAgICAgIGljb25TaWduYWwgPSBzaWduYWw8SWNvbkRhdGE+KHtcbiAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgIGZldGNoZWQ6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pY29uUmVnaXN0cnkuc2V0KGAke2ljb25MaWJyYXJ5fSR7dGhpcy5kZWxpbWl0ZXJ9JHtwYXRoTmFtZX1gLCBpY29uU2lnbmFsKTtcblxuICAgICAgICB0aGlzLmZldGNoSWNvbihwYXRoTmFtZSwgaWNvbkxpYnJhcnksIGFib3J0U2lnbmFsKS50aGVuKChpY29uKSA9PiB7XG4gICAgICAgICAgaWNvblNpZ25hbC5zZXQoeyBkYXRhOiBpY29uLCBmZXRjaGVkOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXB1dGVkKGljb25TaWduYWwsIChlbnRyeSkgPT4gZW50cnk/LmRhdGEpO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIGp1c3QgYWxlcnQgdGhhdCB0aGUgaWNvbiBpc24ndCByZWdpc3RlcmVkIGFuZCByZXR1cm4gdGhlIGZhbGxiYWNrXG4gICAgZWxzZSBpZiAoIWljb25SZWdpc3RlcmVkICYmICF0aGlzLmxhenlMb2FkRW5hYmxlZCkge1xuICAgICAgY29uc3QgdGVtcCA9IHRoaXMuaGFuZGxlZEZhaWxlZExvYWQoaWNvbkxpYnJhcnksIHBhdGhOYW1lKTtcbiAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBMb2dzIGEgd2FybmluZyBhbmQgcmV0dXJucyBmYWxsYmFjayBpY29uLiBDYWxsIHdoZW4gYXR0ZW1wdCB0byBsb2FkIGljb24gaGFzIGZhaWxlZC4gKi9cbiAgcHJpdmF0ZSBoYW5kbGVkRmFpbGVkTG9hZChpY29uTGlicmFyeSwgcGF0aE5hbWUsIGljb25TaWduYWw/OiBTaWduYWw8SWNvbkRhdGE+KSB7XG4gICAgLy8gQ3JlYXRlIHJldHVybiBzdWJqIGlmIG9uZSBpc24ndCBwYXNzZWRcbiAgICBpZiAoIWljb25TaWduYWwpIHtcbiAgICAgIGljb25TaWduYWwgPSBzaWduYWw8SWNvbkRhdGE+KHtcbiAgICAgICAgZGF0YTogdGhpcy5mYWxsYmFja0ljb24sXG4gICAgICAgIGZldGNoZWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuaWNvblJlZ2lzdHJ5LnNldChgJHtpY29uTGlicmFyeX0ke3RoaXMuZGVsaW1pdGVyfSR7cGF0aE5hbWV9YCwgaWNvblNpZ25hbCk7XG4gICAgaWYgKCF0aGlzLnRlc3RNb2RlRW5hYmxlZCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgTW9ydGFyOiBObyBpY29uIGlzIHJlZ2lzdGVyZWQgZm9yIHRoZSBwYXRoIG5hbWUgXCIke3BhdGhOYW1lfVwiLiBEaWQgeW91IGFkZCBpdCB0byB0aGUgbW9ydGFyIGljb24gcmVnaXN0cnk/YFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXB1dGVkKGljb25TaWduYWwsIChlbnRyeSkgPT4gZW50cnk/LmRhdGEpO1xuICB9XG5cbiAgLyoqIEZldGNoZXMgYW4gaWNvbiBmb3IgdGhlIGdpdmVuIGxpYnJhcnkgYnkgbmFtZSAqL1xuICBwcml2YXRlIGFzeW5jIGZldGNoSWNvbihwYXRoTmFtZTogc3RyaW5nLCBpY29uTGlicmFyeSA9ICdfZGVmYXVsdCcsIGFib3J0U2lnbmFsPzogQWJvcnRTaWduYWwpIHtcbiAgICBpZiAoIXRoaXMudGVzdE1vZGVFbmFibGVkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNvbHZlciA9IHRoaXMuaWNvblVybFJlc29sdmVycy5nZXQoaWNvbkxpYnJhcnkpO1xuICAgICAgICAvLyBJZiBubyByZXNvbHZlciBpcyByZWdpc3RlcmVkIGZvciB0aGUgcmVxdWVzdGVkIGxpYnJhcnlcbiAgICAgICAgaWYgKCFyZXNvbHZlcikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlOiBObyBpY29uVXJsUmVzb2x2ZXIgcmVnaXN0ZXJlZCBmb3IgbGlicmFyeTogXCIke2ljb25MaWJyYXJ5fVwiYFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tJY29uO1xuICAgICAgICB9XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgZmV0Y2ggcmVxdWVzdCBidXQgdG8gbm90IGF3YWl0IHlldFxuICAgICAgICBjb25zdCByZXEgPSBmZXRjaChyZXNvbHZlcihwYXRoTmFtZSksIHsgbWV0aG9kOiAnZ2V0Jywgc2lnbmFsOiBhYm9ydFNpZ25hbCB9KTtcbiAgICAgICAgY29uc3QgcmVzID0gdGhpcy5wYXJzZUljb25EYXRhKHBhdGhOYW1lLCByZXEpO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBJZiB0aGUgZmV0Y2ggZmFpbGVkIGxvZyBhbmQgcmV0dXJuIGZhbGxiYWNrXG4gICAgICAgIGlmIChwYXRoTmFtZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYE10ZUljb25SZWdpc3RyeVNlcnZpY2U6IGZhaWxlZCB0byBsb2FkIGljb246ICR7cGF0aE5hbWV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tJY29uO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mYWxsYmFja0ljb247XG4gIH1cblxuICAvKiogQXN5bmNocm9ub3VzbHkgcGFyc2UgaWNvbiBmZXRjaCByZXNwb25zZSBkYXRhICovXG4gIHByaXZhdGUgcGFyc2VJY29uRGF0YShwYXRoTmFtZTogc3RyaW5nLCByZXE6IFByb21pc2U8UmVzcG9uc2U+KTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVxXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMudGV4dCgpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBhdGhOYW1lKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYE10ZUljb25SZWdpc3RyeVNlcnZpY2U6IGZhaWxlZCB0byBsb2FkIGljb246ICR7cGF0aE5hbWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBHcmFjZWZ1bGx5IHJlc29sdmUgd2l0aCBmYWxsYmFjayBpY29uIG9uIGZhaWxlZCBsb2FkXG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuZmFsbGJhY2tJY29uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIC8vIEdyYWNlZnVsbHkgcmVzb2x2ZSB3aXRoIGZhbGxiYWNrIGljb24gb24gZXJyb3JcbiAgICAgICAgICByZXNvbHZlKHRoaXMuZmFsbGJhY2tJY29uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgTXRlSWNvblJlZ2lzdHJ5U2VydmljZSA9IG5ldyBfTXRlSWNvblJlZ2lzdHJ5U2VydmljZSgpO1xuXG4vKipcbiAqIEluc3RhbmNlIG9mIF9NdGVJY29uUmVnaXN0cnlTZXJ2aWNlIGV4cG9ydGVkIGFzIGEgc2luZ2xldG9uLlxuICpcbiAqIFNlcnZpY2UgdXNlZCB0byByZWdpc3RlciBzdmcgc3RyaW5ncyBmb3IgYSBnaXZlbiBpY29uIG5hbWUgYW5kIHRoZW4gbG9vayB0aGVtIHVwIGJ5IHRoYXQgc2FtZSBuYW1lLlxuICovXG5leHBvcnQgeyBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlIH07XG4iLCAiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IGJhc2VTdHlsZXMsIGRlZmluZUVsZW1lbnQsIE10ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9jb3JlLyc7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL2hpbnQuc3R5bGVzJztcblxubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbi8qKlxuICogRWxlbWVudCB1c2VkIHRvIHJlcHJlc2VudCBoaW50IG1lc3NhZ2luZyB0ZXh0XG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtaGludCcpXG5leHBvcnQgY2xhc3MgTXRlSGludCBleHRlbmRzIE10ZUVsZW1lbnQge1xuICBzdGF0aWMgc3R5bGVzID0gW2Jhc2VTdHlsZXMsIHN0eWxlc107XG5cbiAgLyoqIERlZmF1bHQgdW5pcXVlIElEIGZvciB0aGlzIGhpbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBpZCA9IGBtdGUtaGludC0tJHtuZXh0VW5pcXVlSWQrK31gO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGAke3RoaXMuaW5zdGFuY2VTdHlsZXN9PHNsb3Q+PC9zbG90PmA7XG4gIH1cbn1cblxuLyoqXG4gKiBFbGVtZW50IHVzZWQgdG8gcmVwcmVzZW50IGhpbnQgbWVzc2FnaW5nIHRleHRcbiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS1oaW50LXRleHQnKVxuZXhwb3J0IGNsYXNzIE10ZUhpbnRUZXh0IGV4dGVuZHMgTXRlSGludCB7fVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdtdGUtaGludCc6IE10ZUhpbnQ7XG4gICAgJ210ZS1oaW50LXRleHQnOiBNdGVIaW50VGV4dDtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Y29sb3I6dmFyKC0tbXRlLWluay0yKTtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtd2VpZ2h0KTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1saW5lLWhlaWdodCk7bWFyZ2luOnZhcigtLW10ZS1zcGFjZS14cykgMDtvdmVyZmxvdzpoaWRkZW47dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt3aWR0aDoxMDAlfWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7YWxpZ24taXRlbXM6Y2VudGVyO2NvbG9yOmluaGVyaXQ7Y3Vyc29yOmluaGVyaXQ7ZGlzcGxheTpibG9jaztmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWZvbnQtd2VpZ2h0KTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC13ZWlnaHQtYm9sZCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWxpbmUtaGVpZ2h0KTttYXJnaW46dmFyKC0tbXRlLXNwYWNlLXhzKSAwO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXR9Omhvc3QoW2Rpc2FibGVkXSl7Y29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTQpO2N1cnNvcjpub3QtYWxsb3dlZH0ucmVxdWlyZWR7Y29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1iYXNlLXJnYikpO3BhZGRpbmctbGVmdDp2YXIoLS1tdGUtc3BhY2UteHMpfWA7IiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWNvbG9yOmluaGVyaXQ7LS1nYXA6dmFyKC0tbXRlLXNwYWNlLXh4cyk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSl9LmNvbnRlbnR7YWxpZ24taXRlbXM6Y2VudGVyO2NvbG9yOnZhcigtLWNvbG9yKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2dhcDp2YXIoLS1nYXApfTpob3N0KFtsaW5lQ2xhbXBdKSAuY29udGVudHtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWx9Omhvc3QoW2xpbmVDbGFtcF1bYmxvY2tdKSAuY29udGVudHtkaXNwbGF5Oi13ZWJraXQtYm94fTpob3N0KFtub1dyYXBdKSAuY29udGVudHtkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH06aG9zdChbc2l6ZT14eHNdKSAuY29udGVudHtmb250LXNpemU6LjYyNXJlbX06aG9zdChbc2l6ZT14c10pIC5jb250ZW50e2ZvbnQtc2l6ZTouNzVyZW19Omhvc3QoW3NpemU9c21dKSAuY29udGVudHtmb250LXNpemU6Ljg3NXJlbX06aG9zdChbc2l6ZT1tZF0pIC5jb250ZW50e2ZvbnQtc2l6ZToxcmVtfTpob3N0KFtzaXplPWxnXSkgLmNvbnRlbnR7Zm9udC1zaXplOjEuMjVyZW19Omhvc3QoW3NpemU9eGxdKSAuY29udGVudHtmb250LXNpemU6MS41cmVtfTpob3N0KFtzaXplPXh4bF0pIC5jb250ZW50e2ZvbnQtc2l6ZToxLjc1cmVtfTpob3N0KFtpdGFsaWNdKSAuY29udGVudHtmb250LXN0eWxlOml0YWxpY306aG9zdChbdW5kZXJsaW5lXSkgLmNvbnRlbnR7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX06aG9zdChbc3RyaWtldGhyb3VnaF0pIC5jb250ZW50e3RleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2h9Omhvc3QoW3VuZGVybGluZV1bc3RyaWtldGhyb3VnaF0pIC5jb250ZW50e3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgbGluZS10aHJvdWdofTpob3N0KFt0cmFuc2Zvcm09bG93ZXJjYXNlXSkgLmNvbnRlbnR7dGV4dC10cmFuc2Zvcm06bG93ZXJjYXNlfTpob3N0KFt0cmFuc2Zvcm09dXBwZXJjYXNlXSkgLmNvbnRlbnR7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfTpob3N0KFt0cmFuc2Zvcm09Y2FwaXRhbGl6ZV0pIC5jb250ZW50e3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemV9Omhvc3QoW211dGVkXSkgLmNvbnRlbnR7LS1jb2xvcjp2YXIoLS1tdGUtaW5rLTIpfTpob3N0KFtjb2xvcj1wcmltYXJ5XSkgLmNvbnRlbnR7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXNlY29uZGFyeV0pIC5jb250ZW50ey0tY29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXRlcnRpYXJ5XSkgLmNvbnRlbnR7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1zdWNjZXNzXSkgLmNvbnRlbnR7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXdhcm5pbmddKSAuY29udGVudHstLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXSkgLmNvbnRlbnR7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItYmFzZS1yZ2IpKX1gOyIsICJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IE10ZUVsZW1lbnQsIGRlZmluZUVsZW1lbnQsIE10ZUVsZW1lbnRQYXJ0cywgYmFzZVN0eWxlcyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi92aXN1YWxseS1oaWRkZW4uc3R5bGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBNdGVWaXN1YWxseUhpZGRlblBhcnRzIGV4dGVuZHMgTXRlRWxlbWVudFBhcnRzIHt9XG5cbi8qKlxuICogQHNsb3QgLSBUaGUgY29udGVudCB0byBiZSB2aXN1YWxseSBoaWRkZW4uXG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtdmlzdWFsbHktaGlkZGVuJylcbmV4cG9ydCBjbGFzcyBNdGVWaXN1YWxseUhpZGRlbiBleHRlbmRzIE10ZUVsZW1lbnQge1xuICBzdGF0aWMgc3R5bGVzID0gW2Jhc2VTdHlsZXMsIHN0eWxlc107XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxzbG90Pjwvc2xvdD5gO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS12aXN1YWxseS1oaWRkZW4nOiBNdGVWaXN1YWxseUhpZGRlbjtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdCg6bm90KDpmb2N1cy13aXRoaW4pKXtoZWlnaHQ6MXB4IWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7d2lkdGg6MXB4IWltcG9ydGFudDtjbGlwOnJlY3QoMCAwIDAgMCkhaW1wb3J0YW50O2JvcmRlcjpub25lIWltcG9ydGFudDtjbGlwLXBhdGg6aW5zZXQoNTAlKSFpbXBvcnRhbnQ7b3ZlcmZsb3c6aGlkZGVuIWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50O3doaXRlLXNwYWNlOm5vd3JhcCFpbXBvcnRhbnR9YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLElBQUFBLGVBQXFDO0FBQ3JDLElBQUFDLHNCQUF1Qzs7O0FDQXZDLHdCQUFnQztBQUNoQyxpQkFBMkI7QUFDM0IsSUFBQUMsaUJBQWlEOzs7QUNIakQsb0JBQXVCO0FBR3ZCLElBQU0sY0FBaUQ7QUFBQSxFQUNyRCxHQUFHO0FBQUEsRUFDSCxJQUFJLENBQUMsY0FBYyxhQUFhO0FBQUEsRUFDaEMsSUFBSSxDQUFDLGFBQWEsY0FBYztBQUFBLEVBQ2hDLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLEdBQUc7QUFBQSxFQUNILElBQUksQ0FBQyxlQUFlLGNBQWM7QUFBQSxFQUNsQyxJQUFJLENBQUMsY0FBYyxlQUFlO0FBQUEsRUFDbEMsSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sR0FBRztBQUFBLEVBQ0gsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sR0FBRztBQUFBLEVBQ0gsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osR0FBRztBQUFBLEVBQ0gsV0FBVztBQUNiO0FBR08sSUFBTSxpQkFBaUMsQ0FBQyxVQUEy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cG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X3N0eWxlcyIsICJhY2MiLCAicHJvcCIsICJ2YWx1ZSIsICJzdHlsZXMiLCAiZGVwIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJjb2xvciIsICJpbXBvcnRfc3R5bGVzIiwgImdldHRlckNvbmZpZyIsICJvYnNlcnZlciIsICJlIiwgInNldHRlckNvbmZpZyIsICJjc3NWYXIiLCAib2JzZXJ2ZXIiLCAicG9ydGFsQ29udHJvbGxlciIsICJlbGVtZW50IiwgInNjcm9sbFgiLCAic2Nyb2xsWSIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJwcmVzZXQiLCAib3B0aW9ucyIsICJpbXBvcnRfY29udGV4dCIsICJjb250ZXh0IiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X3N0eWxlcyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9pZl9kZWZpbmVkIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X3N0eWxlcyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfY2xhc3NfbWFwIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAibm9kZSIsICJvYnNlcnZlciIsICJzdGF0ZSIsICJpbXBvcnRfaXNfc2VydmVyIiwgIm9ic2VydmVyIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAiY3NzIiwgIl9jc3MiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X3N0eWxlcyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgInN0eWxlcyIsICJpbXBvcnRfc3R5bGVzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImNzcyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgInN0eWxlcyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9pZl9kZWZpbmVkIiwgImltcG9ydF9pY29ucyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImljb25MaWJyYXJ5IiwgImltcG9ydF91bnNhZmVfc3ZnIiwgImltcG9ydF9zdHlsZXMiLCAic3R5bGVzIiwgIm5leHRVbmlxdWVJZCIsICJzdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJuZXh0VW5pcXVlSWQiLCAic3R5bGVzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAibmV4dFVuaXF1ZUlkIiwgInN0eWxlcyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfd2hlbiIsICJpbXBvcnRfY2xhc3NfbWFwIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAic3R5bGVzIiwgImFuaW1lIiwgInN0eWxlcyJdCn0K
