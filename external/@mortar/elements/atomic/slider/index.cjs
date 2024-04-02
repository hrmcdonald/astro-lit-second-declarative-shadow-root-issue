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

// src/atomic/slider/index.ts
var slider_exports = {};
__export(slider_exports, {
  MteSlider: () => MteSlider
});
module.exports = __toCommonJS(slider_exports);

// src/atomic/slider/slider.element.ts
var import_lit39 = require("lit");
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
var parseSelectors = (styles21, selectors) => {
  if (!selectors) {
    return styles21;
  } else {
    return `${styles21}${selectors.reduce((acc, { selector, selectorWrapper, style }) => {
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
  let styles21 = "";
  [...instanceStylesMap.entries()].filter(([key, _]) => key !== "se" && key !== "sp").sort((a, b) => b[0] - a[0]).forEach(([_, selectors]) => {
    styles21 = parseSelectors(styles21, selectors);
  });
  styles21 = `${styles21}${parseSelectors("", instanceStylesMap.get("se"))}${parseSelectors(
    "",
    instanceStylesMap.get("sp")
  )}`;
  return styles21;
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

// src/atomic/slider/slider.element.ts
var import_form_control3 = require("@open-wc/form-control");

// src/atomic/input/input.element.ts
var import_if_defined5 = require("lit-html/directives/if-defined.js");
var import_form_control2 = require("@open-wc/form-control");
var import_form_helpers2 = require("@open-wc/form-helpers");
var import_lit36 = require("lit");
var import_decorators30 = require("lit/decorators.js");
var import_live = require("lit/directives/live.js");

// src/atomic/input/input.styles.ts
var import_lit15 = require("lit");
var styles9 = import_lit15.css`:host{--placeholder-color:var(--mte-ink-2);--input-padding-y:calc(var(--mte-space-sm) + var(--mte-space-xxs));--icon-size:20px;--color:var(--mte-ink-1);--font-size:1rem;color:var(--color);line-height:0}:host([size=sm]){--input-padding-y:calc(var(--mte-space-xs) + var(--mte-space-xxs));--icon-size:18px;--font-size:0.875rem}:host([size=lg]){--input-padding-y:calc(var(--mte-space-sm) + var(--mte-space-xs));--icon-size:22px;--font-size:1.25rem}.input{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:none;border-radius:0;color:var(--color);font-size:var(--mte-font-set-body1-font-size);font-size:var(--font-size);font-weight:var(--mte-font-set-body1-font-weight);height:calc(1em + var(--input-padding-y)*2);line-height:var(--mte-font-set-body1-line-height);line-height:1;margin:0;outline:none;padding:0;text-align:inherit;text-decoration:inherit;text-transform:inherit;vertical-align:middle;width:100%}.input::-webkit-date-and-time-value{text-align:left}.clear{margin-left:calc(var(--form-field-internal-gap)*-1/2);margin-right:calc(var(--form-field-internal-gap)*-1)}.input::-moz-placeholder{color:var(--placeholder-color)}.input::placeholder{color:var(--placeholder-color)}:host(:focus){outline:none}:host([readonly]){--form-field-border-color:var(--mte-readonly-3);--form-field-background:var(--mte-readonly-1)}:host([readonly]) .input{color:var(--mte-readonly-4)}:host([disabled]){--form-field-border-color:var(--mte-disabled-1);--form-field-background:var(--mte-disabled-1)}:host([disabled]) .input{color:var(--mte-disabled-4);cursor:not-allowed}:host([disabled]) .input::-moz-placeholder,:host([readonly]) .input::-moz-placeholder{color:var(--mte-disabled-4)}:host([disabled]) .input::placeholder,:host([readonly]) .input::placeholder{color:var(--mte-disabled-4)}:host ::slotted(mte-icon[slot=append]),:host ::slotted(mte-icon[slot=prefix]),:host ::slotted(mte-icon[slot=prepend]),:host ::slotted(mte-icon[slot=suffix]){height:var(--icon-size);min-height:var(--icon-size);min-width:var(--icon-size);width:var(--icon-size)}`;

// src/atomic/button/button.element.ts
var import_if_defined3 = require("lit-html/directives/if-defined.js");
var import_lit21 = require("lit");
var import_decorators22 = require("lit/decorators.js");

// src/atomic/button/button.styles.ts
var import_lit16 = require("lit");
var styles10 = import_lit16.css`:host{--background:transparent;--color:inherit;--padding-y:var(--mte-space-sm);--padding-x:calc(var(--mte-space-md) + var(--mte-space-xs));--border-width:1px;--border-style:solid;--border-radius:var(--group-radius,var(--mte-border-radius-xl));--focus-radius:var(--group-focus-radius,var(--mte-border-radius-full));--border-color:transparent;--border-alt-color:var(--border-color);--icon-size:16px;--focus-offset:-5px;--final-y:var(--padding-y);--final-x:var(--padding-x);align-items:center;-webkit-appearance:none;background:var(--background);border:var(--border-style) var(--border-width) var(--border-color);border-bottom-left-radius:var(--group-border-bottom-left-radius,var(--border-radius));border-bottom-right-radius:var(--group-border-bottom-right-radius,var(--border-radius));border-color:var(--group-border-top-color,var(--border-color)) var(--group-border-right-color,var(--border-color)) var(--group-border-bottom-color,var(--border-color)) var(--group-border-left-color,var(--border-color));border-top-left-radius:var(--group-border-top-left-radius,var(--border-radius));border-top-right-radius:var(--group-border-top-right-radius,var(--border-radius));color:var(--color);cursor:pointer;display:inline-flex;flex-wrap:nowrap;font-family:var(--mte-font-family-sans);justify-content:center;outline:none!important;overflow:visible;padding:var(--final-y) var(--final-x);-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;width:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-button-font-size);font-weight:var(--mte-font-set-button-font-weight);line-height:var(--mte-font-set-button-line-height);line-height:1;text-decoration:inherit;text-transform:inherit}:host(:focus-visible:not(.disabled):not([disabled]):not(:disabled)):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--group-focus-bottom-left-radius,var(--focus-radius));border-bottom-right-radius:var(--group-focus-bottom-right-radius,var(--focus-radius));border-top-left-radius:var(--group-focus-top-left-radius,var(--focus-radius));border-top-right-radius:var(--group-focus-top-right-radius,var(--focus-radius));bottom:var(--focus-offset);box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:var(--focus-offset);pointer-events:none;position:absolute;right:var(--focus-offset);top:var(--focus-offset);z-index:9}:host(::-moz-focus-inner){border:0;padding:0}:host(:hover),:host([activestate]){outline:none;--color:inherit}:host(:hover){--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)))}:host(:active),:host([activestate]){--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)))}:host([outlined]){--border-style:solid;--border-color:var(--mte-border-2)}:host([filled]){--border-style:solid;--border-color:transparent;--background:var(--button-filled-bg,var(--mte-grey-10));--color:var(--button-filled-ink,var(--mte-ink-5))}:host([filled]:hover){--background:var(--button-filled-active-bg,var(--mte-grey-9));--color:var(--button-filled-active-ink,var(--mte-ink-5))}:host([filled]:active),:host([filled][activestate]){--background:var(--button-filled-active-bg,var(--mte-darker));--color:var(--button-filled-active-ink,var(--mte-ink-5))}:host([color=primary]:not([disabled])){--border-color:transparent;--background:transparent;--color:rgb(var(--mte-core-primary-base-rgb))}:host([color=primary]:not([disabled]):focus),:host([color=primary]:not([disabled]):hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));--color:rgb(var(--mte-core-primary-dark-rgb))}:host([color=primary]:not([disabled])[activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a));--color:rgb(var(--mte-core-primary-darker-rgb))}:host([color=primary][outlined]:not([disabled])){--background:transparent;--border-color:var(--mte-border-2);--color:rgb(var(--mte-core-primary-base-rgb))}:host([color=primary][outlined]:not([disabled]):focus),:host([color=primary][outlined]:not([disabled]):hover){--border-color:var(--mte-border-2);--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)));--color:rgb(var(--mte-core-primary-dark-rgb))}:host([color=primary][outlined]:not([disabled])[activestate]){--border-color:var(--mte-border-2);--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)));--color:rgb(var(--mte-core-primary-darker-rgb))}:host([color=primary][filled]:not([disabled])){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-primary-dark-rgb));--background:rgb(var(--mte-core-primary-base-rgb));--color:rgb(var(--mte-core-primary-base-c-rgb))}:host([color=primary][filled]:not([disabled]):focus),:host([color=primary][filled]:not([disabled]):hover){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-primary-dark-rgb));--background:rgb(var(--mte-core-primary-dark-rgb));--color:rgb(var(--mte-core-primary-dark-c-rgb))}:host([color=primary][filled]:not([disabled])[activestate]){--border-color:transparent;--background:rgb(var(--mte-core-primary-darker-rgb));--color:rgb(var(--mte-core-primary-darker-c-rgb))}:host([color=secondary]:not([disabled])){--border-color:transparent;--background:transparent;--color:rgb(var(--mte-core-secondary-base-rgb))}:host([color=secondary]:not([disabled]):focus),:host([color=secondary]:not([disabled]):hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));--color:rgb(var(--mte-core-secondary-dark-rgb))}:host([color=secondary]:not([disabled])[activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a));--color:rgb(var(--mte-core-secondary-darker-rgb))}:host([color=secondary][outlined]:not([disabled])){--background:transparent;--border-color:var(--mte-border-2);--color:rgb(var(--mte-core-secondary-base-rgb))}:host([color=secondary][outlined]:not([disabled]):focus),:host([color=secondary][outlined]:not([disabled]):hover){--border-color:var(--mte-border-2);--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)));--color:rgb(var(--mte-core-secondary-dark-rgb))}:host([color=secondary][outlined]:not([disabled])[activestate]){--border-color:var(--mte-border-2);--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)));--color:rgb(var(--mte-core-secondary-darker-rgb))}:host([color=secondary][filled]:not([disabled])){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-secondary-dark-rgb));--background:rgb(var(--mte-core-secondary-base-rgb));--color:rgb(var(--mte-core-secondary-base-c-rgb))}:host([color=secondary][filled]:not([disabled]):focus),:host([color=secondary][filled]:not([disabled]):hover){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-secondary-dark-rgb));--background:rgb(var(--mte-core-secondary-dark-rgb));--color:rgb(var(--mte-core-secondary-dark-c-rgb))}:host([color=secondary][filled]:not([disabled])[activestate]){--border-color:transparent;--background:rgb(var(--mte-core-secondary-darker-rgb));--color:rgb(var(--mte-core-secondary-darker-c-rgb))}:host([color=tertiary]:not([disabled])){--border-color:transparent;--background:transparent;--color:rgb(var(--mte-core-tertiary-base-rgb))}:host([color=tertiary]:not([disabled]):focus),:host([color=tertiary]:not([disabled]):hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));--color:rgb(var(--mte-core-tertiary-dark-rgb))}:host([color=tertiary]:not([disabled])[activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a));--color:rgb(var(--mte-core-tertiary-darker-rgb))}:host([color=tertiary][outlined]:not([disabled])){--background:transparent;--border-color:var(--mte-border-2);--color:rgb(var(--mte-core-tertiary-base-rgb))}:host([color=tertiary][outlined]:not([disabled]):focus),:host([color=tertiary][outlined]:not([disabled]):hover){--border-color:var(--mte-border-2);--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)));--color:rgb(var(--mte-core-tertiary-dark-rgb))}:host([color=tertiary][outlined]:not([disabled])[activestate]){--border-color:var(--mte-border-2);--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)));--color:rgb(var(--mte-core-tertiary-darker-rgb))}:host([color=tertiary][filled]:not([disabled])){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-tertiary-dark-rgb));--background:rgb(var(--mte-core-tertiary-base-rgb));--color:rgb(var(--mte-core-tertiary-base-c-rgb))}:host([color=tertiary][filled]:not([disabled]):focus),:host([color=tertiary][filled]:not([disabled]):hover){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-tertiary-dark-rgb));--background:rgb(var(--mte-core-tertiary-dark-rgb));--color:rgb(var(--mte-core-tertiary-dark-c-rgb))}:host([color=tertiary][filled]:not([disabled])[activestate]){--border-color:transparent;--background:rgb(var(--mte-core-tertiary-darker-rgb));--color:rgb(var(--mte-core-tertiary-darker-c-rgb))}:host([color=danger]:not([disabled])){--border-color:transparent;--background:transparent;--color:rgb(var(--mte-core-danger-base-rgb))}:host([color=danger]:not([disabled]):focus),:host([color=danger]:not([disabled]):hover){--background:rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a));--color:rgb(var(--mte-core-danger-dark-rgb))}:host([color=danger]:not([disabled])[activestate]){--background:rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a));--color:rgb(var(--mte-core-danger-darker-rgb))}:host([color=danger][outlined]:not([disabled])){--background:transparent;--border-color:var(--mte-border-2);--color:rgb(var(--mte-core-danger-base-rgb))}:host([color=danger][outlined]:not([disabled]):focus),:host([color=danger][outlined]:not([disabled]):hover){--border-color:var(--mte-border-2);--background:var(--interactive-hover-bg,rgba(var(--mte-it-surface-2-hover-rgb),var(--mte-it-surface-2-hover-a)));--color:rgb(var(--mte-core-danger-dark-rgb))}:host([color=danger][outlined]:not([disabled])[activestate]){--border-color:var(--mte-border-2);--background:var(--interactive-active-bg,rgba(var(--mte-it-surface-2-active-rgb),var(--mte-it-surface-2-active-a)));--color:rgb(var(--mte-core-danger-darker-rgb))}:host([color=danger][filled]:not([disabled])){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-danger-dark-rgb));--background:rgb(var(--mte-core-danger-base-rgb));--color:rgb(var(--mte-core-danger-base-c-rgb))}:host([color=danger][filled]:not([disabled]):focus),:host([color=danger][filled]:not([disabled]):hover){--border-color:transparent;--border-alt-color:rgb(var(--mte-core-danger-dark-rgb));--background:rgb(var(--mte-core-danger-dark-rgb));--color:rgb(var(--mte-core-danger-dark-c-rgb))}:host([color=danger][filled]:not([disabled])[activestate]){--border-color:transparent;--background:rgb(var(--mte-core-danger-darker-rgb));--color:rgb(var(--mte-core-danger-darker-c-rgb))}:host([disabled]),:host([disabled]) a{cursor:not-allowed!important;--color:var(--mte-disabled-4)!important;box-shadow:none!important;text-shadow:none!important}:host([disabled]:hover),:host([disabled][activestate]){--background:transparent!important}:host([disabled][filled]),:host([disabled][outlined]){--border-color:var(--mte-disabled-2)!important;--background:var(--mte-disabled-1)!important;--color:var(--mte-disabled-4)!important}:host([disabled][filled]:hover),:host([disabled][filled][activestate]),:host([disabled][outlined]:hover),:host([disabled][outlined][activestate]){--background:var(--mte-disabled-1)!important}:host([size=sm]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:calc(var(--mte-font-set-button-font-size)*.8);font-weight:var(--mte-font-set-button-font-weight);line-height:var(--mte-font-set-button-line-height);text-decoration:inherit;text-transform:inherit;--final-y:calc(var(--padding-y)*var(--mte-size-scale-sm));--final-x:calc(var(--padding-x)*var(--mte-size-scale-sm))}:host([size=lg]){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:calc(var(--mte-font-set-button-font-size)*1.2);font-weight:var(--mte-font-set-button-font-weight);line-height:var(--mte-font-set-button-line-height);text-decoration:inherit;text-transform:inherit;--border-radius:var(--mte-border-radius-full);--final-y:calc(var(--padding-y)*var(--mte-size-scale-lg));--final-x:calc(var(--padding-x)*var(--mte-size-scale-lg))}:host([radius=sm]){--border-radius:var(--mte-border-radius-sm);--focus-radius:var(--mte-border-radius-md)}.prefix,.prefix>span{align-items:center;display:flex;justify-content:center}.prefix{margin-left:calc(var(--mte-space-sm)*-1);padding-right:var(--mte-space-sm)}:host([size=sm]) .prefix{margin-left:calc(var(--mte-space-xs)*-1);padding-right:var(--mte-space-xs)}.suffix,.suffix>span{align-items:center;display:flex;justify-content:center}.suffix{margin-right:calc(var(--mte-space-sm)*-1);padding-left:var(--mte-space-sm)}:host([size=sm]) .suffix{margin-right:calc(var(--mte-space-xs)*-1);padding-left:var(--mte-space-xs)}:host>:not(.label) mte-icon{height:var(--icon-size);min-height:var(--icon-size);min-width:var(--icon-size);width:var(--icon-size)}:host([size=sm])>:not(.label) mte-icon{--icon-size:12px}:host([size=lg])>:not(.label) mte-icon{--icon-size:20px}`;

// src/atomic/icon/icon.element.ts
var import_lit18 = require("lit");
var import_decorators19 = require("lit/decorators.js");

// src/atomic/icon/icon.styles.ts
var import_lit17 = require("lit");
var styles11 = import_lit17.css`:host{box-sizing:content-box!important;color:var(--icon-color,inherit);display:inline-block;line-height:0;width:24px}:host([autosize]){vertical-align:middle}:host([muted]){--icon-color:var(--mte-ink-2)}svg{display:block;height:100%;width:100%}:host(:not([withColor])) svg *{color:inherit;fill:currentColor!important}:host([color=primary])>svg *{color:rgb(var(--mte-status-primary-base-rgb))}:host([color=secondary])>svg *{color:rgb(var(--mte-status-secondary-base-rgb))}:host([color=tertiary])>svg *{color:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=success])>svg *{color:rgb(var(--mte-status-success-base-rgb))}:host([color=warning])>svg *{color:rgb(var(--mte-status-warning-base-rgb))}:host([color=danger])>svg *{color:rgb(var(--mte-status-danger-base-rgb))}`;

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
    return import_lit18.html`${this.instanceStyles}${(0, import_unsafe_svg2.unsafeSVG)(this.iconSvg)}`;
  }
};
MteIcon.styles = [styles11];
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
var import_lit20 = require("lit");
var import_decorators20 = require("lit/decorators.js");

// src/atomic/progress-spinner/progress-spinner.styles.ts
var import_lit19 = require("lit");
var styles12 = import_lit19.css`@keyframes progress-spinner-animation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}:host{display:inline-block;height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content;will-change:transform}.container{align-items:center;display:flex;justify-content:center;overflow:visible;position:relative;vertical-align:middle}.container svg{display:block;overflow:visible}.container path{fill-opacity:0}.track{stroke:rgb(var(--mte-border-1-rgb))}.bar{left:0;position:absolute;top:0;stroke:rgb(var(--mte-status-primary-base-rgb))}.bar path{transform-origin:center;transition:stroke-dashoffset .2s cubic-bezier(.4,0,.2,1) 0ms;will-change:stroke-dashoffset}:host([withoutAnimation]) .bar path{transition:none!important}:host([indeterminate]){animation:progress-spinner-animation .5s linear infinite}:host([indeterminate]) .bar path{transition:none}:host([color=primary]) .bar{stroke:rgb(var(--mte-status-primary-base-rgb))}:host([color=secondary]) .bar{stroke:rgb(var(--mte-status-secondary-base-rgb))}:host([color=tertiary]) .bar{stroke:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=success]) .bar{stroke:rgb(var(--mte-status-success-base-rgb))}:host([color=warning]) .bar{stroke:rgb(var(--mte-status-warning-base-rgb))}:host([color=danger]) .bar{stroke:rgb(var(--mte-status-danger-base-rgb))}@media screen and (prefers-reduced-motion:reduce){.bar path{transition:none}:host([indeterminate]){animation:none}}`;

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
    return import_lit20.html`${this.instanceStyles}<div class="container" part="container" style="${containerStyles}"><svg class="track" part="track" style="${trackStyles}" viewBox="${this.viewBox}" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="${this.trackShape}"></path></svg> <svg class="bar" part="bar" style="${barStyles}" viewBox="${this.viewBox}" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="${this.trackShape}" pathLength="${this.PATH_LENGTH - 1}" stroke-dasharray="${this.strokeDashArray}" stroke-dashoffset="${this.strokeDashOffset}"></path></svg></div>`;
  }
};
MteProgressSpinner.styles = styles12;
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
    return this.renderButtonTemplate(import_lit21.html`${this.icon && !this.iconHidden || this.loading ? import_lit21.html`<span class="prefix"><span part="prefix">${this.loading ? import_lit21.html`<mte-spinner diameter="${loadingDiameter}"></mte-spinner>` : import_lit21.html`<mte-icon size="${iconSize}" name="${this.icon}" library="${(0, import_if_defined3.ifDefined)(this.iconLibrary)}"></mte-icon>`}</span></span>` : null}<slot part="label" class="label"></slot>${this.rightIcon && !this.rightIconHidden ? import_lit21.html`<span class="suffix"><span part="suffix"><mte-icon size="${iconSize}" name="${this.rightIcon}" library="${(0, import_if_defined3.ifDefined)(this.rightIconLibrary)}"></mte-icon></span></span>` : null}`);
  }
};
MteButton.styles = [styles7, styles, styles3, styles10];
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
var import_lit27 = require("lit");
var import_decorators25 = require("lit/decorators.js");

// src/atomic/button/icon-button.styles.ts
var import_lit22 = require("lit");
var styles13 = import_lit22.css`:host{--padding-y:var(--mte-space-sm);--padding-x:var(--padding-y);--border-radius:var(--group-radius,var(--mte-border-radius-full));--focus-radius:var(--group-focus-radius,var(--mte-border-radius-full));--icon-size:16px;--color:inherit}:host([radius=sm]){--border-radius:var(--mte-border-radius-sm);--focus-radius:var(--mte-border-radius-md)}:host mte-icon{height:var(--icon-size);min-height:var(--icon-size);min-width:var(--icon-size);width:var(--icon-size)}:host([size=sm]) mte-icon{--icon-size:12px}:host([size=lg]) mte-icon{--icon-size:20px}`;

// src/atomic/tooltip/tooltip.element.ts
var import_dom = require("@floating-ui/dom");
var import_styles11 = require("@mortar/styles");
var import_lit24 = require("lit");
var import_decorators23 = require("lit/decorators.js");

// src/atomic/tooltip/tooltip.styles.ts
var import_lit23 = require("lit");
var styles14 = import_lit23.css`:host{--color:var(--mte-light);--background:var(--mte-dark);--z-index:var(--mte-z-index-20);--radius:var(--mte-border-radius-xl);--padding-x:var(--mte-space-md);--padding-y:var(--mte-space-sm);pointer-events:auto}.tooltip{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;border-radius:var(--radius);color:var(--color);display:none;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);max-width:250px;opacity:0;padding:var(--padding-y) var(--padding-x);position:fixed;text-decoration:inherit;text-overflow:ellipsis;text-transform:inherit;z-index:var(--z-index)}.arrow,.tooltip{background:var(--background)}.arrow{height:10px;position:absolute;transform:rotate(45deg);width:10px}`;

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
    return import_lit24.html`${this.instanceStyles}<div part="tooltip" class="tooltip"><slot></slot><div part="arrow" class="arrow"></div></div>`;
  }
};
MteTooltip.styles = [styles7, styles14];
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
var import_lit26 = require("lit");
var import_decorators24 = require("lit/decorators.js");

// src/utilities/overlay-trigger/overlay-trigger.styles.ts
var import_lit25 = require("lit");
var styles15 = import_lit25.css`:host{box-sizing:border-box;display:contents}slot[name=overlay]::slotted(*){position:absolute}`;

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
    return import_lit26.html`<slot name="overlay"></slot><slot name="trigger"></slot>`;
  }
};
MteOverlayTrigger.styles = [styles15];
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
    return import_lit27.html`${this.renderButtonTemplate(
      this.loading ? import_lit27.html`<mte-spinner diameter="${loadingDiameter}"></mte-spinner>` : import_lit27.html`<mte-icon name="${this.icon}" library="${this.iconLibrary}" part="icon"></mte-icon>`
    )} ${this.label ? import_lit27.html`<mte-overlay-trigger id="trigger"></mte-overlay-trigger><mte-tooltip id="tooltip" position="${this.labelPosition}" asAriaLabel ?disabled="${this.disabled}" withoutA11y>${this.label}</mte-tooltip>` : null}`;
  }
};
MteIconButton.styles = [styles7, styles, styles3, styles10, styles13];
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
var import_lit29 = require("lit");
var import_decorators26 = require("lit/decorators.js");

// src/atomic/form-elements/description.styles.ts
var import_lit28 = require("lit");
var styles16 = import_lit28.css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mte-ink-2);display:block;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);margin:var(--mte-space-xs) 0;text-decoration:inherit;text-transform:inherit;width:100%}`;

// src/atomic/form-elements/description.element.ts
var nextUniqueId4 = 0;
var MteDescription = class extends MteElement {
  constructor() {
    super(...arguments);
    this.id = `mte-description--${nextUniqueId4++}`;
  }
  render() {
    return import_lit29.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteDescription.styles = [styles7, styles16];
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
var import_lit31 = require("lit");
var import_decorators27 = require("lit/decorators.js");
var import_if_defined4 = require("lit-html/directives/if-defined.js");
var import_when = require("lit-html/directives/when.js");
var import_icons2 = require("@mortar/icons");

// src/atomic/form-elements/error.styles.ts
var import_lit30 = require("lit");
var styles17 = import_lit30.css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;align-items:center;background:rgb(var(--mte-core-danger-lighter-rgb));border-radius:var(--mte-border-radius-xs);color:rgb(var(--mte-core-danger-base-rgb));display:flex;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);font-weight:var(--mte-font-weight-medium);gap:var(--mte-space-xs);line-height:var(--mte-font-set-caption-line-height);margin:var(--mte-space-xs) 0;overflow:hidden;padding:0 var(--mte-space-xs);text-decoration:inherit;text-transform:inherit;width:100%}`;

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
    return import_lit31.html`${this.instanceStyles} ${(0, import_when.when)(
      !this.hideIcon,
      () => import_lit31.html`<mte-icon autosize part="icon" aria-hidden="true" name="${this.icon || "alert-circle"}" library="${(0, import_if_defined4.ifDefined)(this.iconLibrary)}"></mte-icon>`
    )}<slot></slot>`;
  }
};
MteError.styles = [styles7, styles17];
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
var import_lit33 = require("lit");
var import_decorators28 = require("lit/decorators.js");

// src/atomic/form-elements/hint.styles.ts
var import_lit32 = require("lit");
var styles18 = import_lit32.css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mte-ink-2);display:block;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);font-weight:var(--mte-font-weight-medium);line-height:var(--mte-font-set-caption-line-height);margin:var(--mte-space-xs) 0;overflow:hidden;text-decoration:inherit;text-transform:inherit;width:100%}`;

// src/atomic/form-elements/hint.element.ts
var nextUniqueId6 = 0;
var MteHint = class extends MteElement {
  constructor() {
    super(...arguments);
    this.id = `mte-hint--${nextUniqueId6++}`;
  }
  render() {
    return import_lit33.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteHint.styles = [styles7, styles18];
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
var import_lit35 = require("lit");
var import_decorators29 = require("lit/decorators.js");

// src/atomic/form-elements/label.styles.ts
var import_lit34 = require("lit");
var styles19 = import_lit34.css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;align-items:center;color:inherit;cursor:inherit;display:block;font-size:var(--mte-font-set-body2-font-size);font-weight:var(--mte-font-set-body2-font-weight);font-weight:var(--mte-font-weight-bold);line-height:var(--mte-font-set-body2-line-height);margin:var(--mte-space-xs) 0;text-decoration:inherit;text-transform:inherit}:host([disabled]){color:var(--mte-disabled-4);cursor:not-allowed}.required{color:rgb(var(--mte-core-danger-base-rgb));padding-left:var(--mte-space-xs)}`;

// src/atomic/form-elements/label.element.ts
var nextUniqueId7 = 0;
var MteLabel = class extends DisabledMixin(MteElement) {
  constructor() {
    super(...arguments);
    this.id = `mte-label--${nextUniqueId7++}`;
  }
  render() {
    return import_lit35.html`${this.instanceStyles}<slot></slot>${this.showRequired ? import_lit35.html`<span class="required" aria-hidden="true">*</span>` : null}`;
  }
};
MteLabel.styles = [styles7, styles19];
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
        import_lit36.html`<input part="input" id="input" class="input" ?disabled="${this.disabled}" ?readonly="${this.readonly}" ?required="${this.required}" ?autofocus="${this.autofocus}" type="${this.type === "search" ? "text" : this.type}" title="${this.title}" name="${(0, import_if_defined5.ifDefined)(this.name)}" placeholder="${(0, import_if_defined5.ifDefined)(this.readonly ? null : this.placeholder)}" minlength="${(0, import_if_defined5.ifDefined)(this.minlength)}" maxlength="${(0, import_if_defined5.ifDefined)(this.maxlength)}" min="${(0, import_if_defined5.ifDefined)(this.min)}" max="${(0, import_if_defined5.ifDefined)(this.max)}" step="${(0, import_if_defined5.ifDefined)(this.step)}" .value="${(0, import_live.live)(this.value)}" autocapitalize="${(0, import_if_defined5.ifDefined)(this.type === "password" ? "off" : this.autocapitalize)}" autocomplete="${(0, import_if_defined5.ifDefined)(this.type === "password" ? "off" : this.autocomplete)}" autocorrect="${(0, import_if_defined5.ifDefined)(this.type === "password" ? "off" : this.autocorrect)}" spellcheck="${spellcheck}" pattern="${(0, import_if_defined5.ifDefined)(this.pattern)}" enterkeyhint="${(0, import_if_defined5.ifDefined)(this.enterkeyhint)}" inputmode="${(0, import_if_defined5.ifDefined)(this.inputmode)}" aria-describedby="${(0, import_if_defined5.ifDefined)(describedBy === "" ? void 0 : describedBy)}" aria-invalid="${showError ? "true" : "false"}" @change="${this.handleChange}" @beforeinput="${this.handleBeforeInput}" @input="${this.handleInput}" @focus="${this.handleFocus}" @blur="${this.handleBlur}"> ${this.type === "search" && this.value ? import_lit36.html`<mte-icon-button tabindex="-1" class="clear" icon="close" size="sm" density="compact" @mousedown="${this.handleClear}" aria-hidden="true"></mte-icon-button>` : null}`,
        { disabled: this.disabled, showError: hasError }
      ),
      {},
      { showRequired: this.showRequired ?? this.required }
    );
  }
};
MteInput.styles = [styles7, styles, styles6, styles5, styles9];
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
var import_lit38 = require("lit");

// src/utilities/visually-hidden/visually-hidden.styles.ts
var import_lit37 = require("lit");
var styles20 = import_lit37.css`:host(:not(:focus-within)){height:1px!important;position:absolute!important;width:1px!important;clip:rect(0 0 0 0)!important;border:none!important;clip-path:inset(50%)!important;overflow:hidden!important;padding:0!important;white-space:nowrap!important}`;

// src/utilities/visually-hidden/visually-hidden.element.ts
var MteVisuallyHidden = class extends MteElement {
  render() {
    return import_lit38.html`<slot></slot>`;
  }
};
MteVisuallyHidden.styles = [styles7, styles20];
MteVisuallyHidden = __decorateClass([
  defineElement("mte-visually-hidden")
], MteVisuallyHidden);

// src/atomic/slider/slider.element.ts
var import_when2 = require("lit-html/directives/when.js");
var import_styles13 = require("@mortar/styles");
var import_class_map3 = require("lit-html/directives/class-map.js");
var MteSlider = class extends TabIndexMixin(
  DisabledMixin(
    (0, import_form_control3.FormControlMixin)(
      FieldsetMixin(
        SlotObserverMixin(
          PresetMixinFactory("MteSlider")(
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
    this.step = 1;
    this.name = "";
    this.numberValueLabel = "Value";
    this.marks = null;
    this.withMarkLabels = false;
    this.readonly = false;
    this.hideValueLabel = false;
    this.withoutValueLabel = false;
    this.withNumberInput = false;
    this.numberInputMinWidth = null;
    this.labelFormatter = (value) => `${value}`;
    this.stepFixedDigits = 0;
  }
  async connectedCallback() {
    super.connectedCallback();
    this.addEventListener("invalid", this.handleInvalid);
  }
  onValueChange() {
    if (this.value < this.min) {
      this.setAllValues(this.getNearestStep(this.min));
      this.updateValueStyles();
      return;
    }
    if (this.value > this.max) {
      this.setAllValues(this.getNearestStep(this.max));
      this.updateValueStyles();
      return;
    }
    if (isNaN(this.value) || typeof this.value !== "number") {
      this.setAllValues(this.getNearestStep(this.defaultValue | this.min));
      this.updateValueStyles();
      return;
    }
    this.setAllValues(this.getNearestStep(this.value));
    this.updateValueStyles();
  }
  async onWithNumberInputChange() {
    await this.updateComplete;
    if (this.withNumberInput) {
      this.setAllValues(this.value);
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
    this.setAllValues(this.getNearestStep(this.value));
  }
  validityCallback() {
    return this.error || this.validationTarget?.validationMessage;
  }
  resetFormControl() {
    if (this.defaultValue) {
      this.setAllValues(this.defaultValue);
    }
  }
  getFixedPointValue(value) {
    return Number.parseFloat(Number(value).toFixed(this.stepFixedDigits));
  }
  getNearestStep(nextValue) {
    const numericValue = this.getFixedPointValue(nextValue);
    return this.getFixedPointValue(Math.round(numericValue / this.step) * this.step);
  }
  setAllValues(value) {
    this.value = value;
    this.setValue(value.toString());
    if (this.withNumberInput) {
      this.setNumericInputValue(this.value);
    }
  }
  handleInput(e) {
    const target = e.target;
    if (this.readonly) {
      target.value = this.value.toString();
      return;
    }
    this.setAllValues(this.getFixedPointValue(target.value));
    this._onInput.emit({ value: this.value, name: this.name });
  }
  handleNumberInput(e) {
    const numericValue = this.getFixedPointValue(e.detail.value);
    if (numericValue < this.min) {
      this.value = this.min;
    } else if (numericValue > this.max) {
      this.value = this.max;
    } else {
      this.value = numericValue;
    }
    this.setValue(this.value.toString());
    this._onInput.emit({ value: this.value, name: this.name });
  }
  handleNumericChange(e) {
    this.value = this.getNearestStep(e.target.value);
    this.setValue(this.value.toString());
    this.setNumericInputValue(this.value);
    this.handleChange();
  }
  handleChange() {
    this._onChange.emit({ value: this.value, name: this.name });
  }
  setNumericInputValue(value) {
    const input = this.shadowRoot?.querySelector("#number-input");
    if (input) {
      input.value = value.toString();
    }
  }
  handleInvalid() {
    this._onInvalid.emit({
      value: this.value,
      name: this.name
    });
  }
  updateValueStyles() {
    const thumbPosition = Math.round((this.value - this.min) / (this.max - this.min) * 100);
    this.setInstanceStyle("input-value-styles", (0, import_styles13.selectorFactory)(this.instanceStyleSelectorRoot), {
      "--first-value-position": `${thumbPosition}%`
    });
  }
  render() {
    const hasHint = !!this.hasSlot("hint", this.hint);
    const hasError = !!this.hasSlot("error", this.error);
    const hasDescription = !!this.hasSlot("description", this.description);
    let shouldHideLabel = false;
    if (this.hideValueLabel || this.withoutValueLabel) {
      shouldHideLabel = true;
    }
    return import_lit39.html`${this.instanceStyles}${this.renderFieldsetTemplate(
      import_lit39.html`<div class="range-wrapper"><div id="prefix" class="prefix" part="prefix"><slot name="prefix"></slot></div><div class="range" part="range"><input id="range-value" type="range" list="${this.marks && this.marks.length > 0 ? "marks" : null}" class="range-input" part="rangeInput" @input="${this.handleInput}" @change="${this.handleChange}" value="${this.value}" aria-valuetext="${this.labelFormatter(this.value)}" min="${this.min}" max="${this.max}" step="${this.step}" aria-labelledby="label" aria-describedby="${`${hasHint ? "hint " : ""}${hasError ? "error " : ""}${hasDescription ? "description" : ""}`}" ?disabled="${this.disabled}"> ${this.marks && this.marks.length > 0 ? import_lit39.html`<div role="listbox" class="marks" part="marks" id="marks">${this.marks.map(
        ({ value, label }) => import_lit39.html`<span role="option" class="mark" part="markLabel" value="${value}" style="${`left: ${value}%;`}" data-option-percent="${`${value}%`}">${this.withMarkLabels ? label : null}</span>`
      )}</div>` : null}<div class="thumb-container" part="thumb-container" aria-hidden="true"><div class="thumb first-thumb" part="thumb"></div>${(0, import_when2.when)(
        !shouldHideLabel,
        () => import_lit39.html`<output id="value-input-label" part="value-label" class="value-label">${this.labelFormatter(this.value)}</output>`
      )}</div></div><div id="suffix" class="suffix" part="suffix"><slot name="suffix"></slot></div></div>`
    )} ${this.withNumberInput ? import_lit39.html`<mte-input id="number-input" class="${(0, import_class_map3.classMap)({
      ["number-input"]: true,
      ["with-description"]: !!this.description,
      ["with-label"]: !!this.label
    })}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" part="numberInput" density="compact" type="number" min="${this.min}" step="${this.step}" max="${this.max}" w="min-content" aria-label="${this.label}" .se="${{
      "--control-min-width": this.numberInputMinWidth || (this.max.toString().length > 2 ? `calc(${this.max.toString().length - 2}ch + 100px)` : "100px")
    }}" @onInput="${this.handleNumberInput}" @onChange="${this.handleNumericChange}">` : null}`;
  }
};
MteSlider.styles = [styles7, styles6, styles5, styles8];
__decorateClass([
  (0, import_decorators31.property)({ type: Number, reflect: true })
], MteSlider.prototype, "min", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Number, reflect: true })
], MteSlider.prototype, "max", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Number })
], MteSlider.prototype, "defaultValue", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Number, reflect: true })
], MteSlider.prototype, "value", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Number, reflect: true })
], MteSlider.prototype, "step", 2);
__decorateClass([
  (0, import_decorators31.property)({ reflect: true })
], MteSlider.prototype, "name", 2);
__decorateClass([
  (0, import_decorators31.property)()
], MteSlider.prototype, "numberValueLabel", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Array })
], MteSlider.prototype, "marks", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Boolean })
], MteSlider.prototype, "withMarkLabels", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Boolean, reflect: true })
], MteSlider.prototype, "readonly", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Boolean })
], MteSlider.prototype, "hideValueLabel", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Boolean })
], MteSlider.prototype, "withoutValueLabel", 2);
__decorateClass([
  (0, import_decorators31.property)({ type: Boolean })
], MteSlider.prototype, "withNumberInput", 2);
__decorateClass([
  (0, import_decorators31.property)()
], MteSlider.prototype, "numberInputMinWidth", 2);
__decorateClass([
  (0, import_decorators31.property)({ attribute: false })
], MteSlider.prototype, "labelFormatter", 2);
__decorateClass([
  eventEmitter()
], MteSlider.prototype, "_onChange", 2);
__decorateClass([
  eventEmitter()
], MteSlider.prototype, "_onInput", 2);
__decorateClass([
  eventEmitter()
], MteSlider.prototype, "_onInvalid", 2);
__decorateClass([
  (0, import_decorators31.query)("#input")
], MteSlider.prototype, "validationTarget", 2);
__decorateClass([
  onUpdate(["value", "min", "max", "defaultValue"], { on: "both" })
], MteSlider.prototype, "onValueChange", 1);
__decorateClass([
  onUpdate(["withNumberInput"], { on: "both" })
], MteSlider.prototype, "onWithNumberInputChange", 1);
__decorateClass([
  onUpdate(["step"], { on: "both" })
], MteSlider.prototype, "onStepIncrementChange", 1);
MteSlider = __decorateClass([
  defineElement("mte-slider")
], MteSlider);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zbGlkZXIvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zbGlkZXIiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYmFzZS1jbGFzc2VzL210ZS5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9jc3MtaW4tanMvY3NzLWluLWpzLnByb3BlcnR5LW1hcHBlcnMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Nzcy1pbi1qcy9jc3MtaW4tanMudXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9lbnZpcm9ubWVudC51dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Zvcm0udXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9yZWFjdGl2ZS1zaWduYWwudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYmFzZS1jbGFzc2VzL2NvbnRlbnQuYmFzZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9hdHRyaWJ1dGUtY29udmVydGVyL3Jlc3BvbnNpdmUtYXR0cmlidXRlLmNvbnZlcnRlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb25zdGFudHMvaGViLWxvZ28udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29udHJvbGxlcnMvc2xvdC5jb250cm9sbGVyLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZpY2VzL3RoZW1lLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc2VydmljZXMvcG9ydGFsLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc2VydmljZXMvaGlzdG9yeS1hcGkuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy9sb2NhbGl6ZS5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbnRyb2xsZXJzL3BvcnRhbC5jb250cm9sbGVyLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYnV0dG9uL2J1dHRvbi5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvaWNvbi9pY29uLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Rvb2xiYXIvdG9vbGJhci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvY2FyZC9jYXJkLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90cmVlL3RyZWUucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RhZy90YWcucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2JhZGdlL2JhZGdlLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9saW5rL2xpbmsucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2FsZXJ0L2FsZXJ0LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pbnB1dC9pbnB1dC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZHJhd2VyL2RyYXdlci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYXNpZGUvYXNpZGUucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWItaXRlbS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbW9kYWwvbW9kYWwucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2NoZWNrYm94L2NoZWNrYm94LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9yYWRpby9yYWRpby5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbmF2L25hdi5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc3dpdGNoL3N3aXRjaC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbmF0aXZlLXNlbGVjdC9uYXRpdmUtc2VsZWN0LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90ZXh0YXJlYS90ZXh0YXJlYS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc2tlbGV0b24vc2tlbGV0b24ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3NsaWRlci9zbGlkZXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3JhbmdlLXNsaWRlci9yYW5nZS1zbGlkZXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3NlZ21lbnRlZC1jb250cm9sL3NlZ21lbnRlZC1jb250cm9sLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0LnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXQubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXQuZGVjb3JhdG9yLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0LmNvbnRleHQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29udHJvbGxlcnMvYXBwbGllZC1wcmVzZXQtY29udGV4dC5jb250cm9sbGVyLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2RlY29yYXRvcnMvb24tdXBkYXRlLmRlY29yYXRvci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9kZWNvcmF0b3JzL2V2ZW50LWVtaXR0ZXIuZGVjb3JhdG9yLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2RlY29yYXRvcnMvZGVmaW5lLWVsZW1lbnQuZGVjb3JhdG9yLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9jb2xvci5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZGVuc2l0eS5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZGVuc2l0eS5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2Rpc2FibGVkLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9pbnZlcnNlLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9pbnZlcnNlLm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvc2l6ZS5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvdGFiaW5kZXgubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3JhZGl1cy5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvc3R5bGUtcGFydHMubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9idXR0b24ubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9vdmVybGF5Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9vdmVybGF5Lm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2ZpZWxkc2V0Lm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2Zvcm0tZmllbGQubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9hdXRvLWFjdGl2ZS1saW5rLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9zbG90LW9ic2VydmVyLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9jaGVja2JveC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvbWFwcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvYW9tLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9tdXRhdGlvbi1vYnNlcnZlcnMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL3V0aWxzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9WYWxpZGl0eVN0YXRlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9DdXN0b21TdGF0ZVNldC50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL3BhdGNoLWZvcm0tcHJvdG90eXBlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9lbGVtZW50LWludGVybmFscy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvbGFuZy5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvd2FpdC1mb3ItZncubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc3R5bGVzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3N0eWxlcy9iYXNlLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3NsaWRlci9zbGlkZXIuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvaW5wdXQiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pbnB1dC9pbnB1dC5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24iLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24vYnV0dG9uLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2ljb24vaWNvbi5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvaWNvbi9pY29uLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2ljb24vaWNvbi1yZWdpc3RyeS5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcHJvZ3Jlc3Mtc3Bpbm5lciIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXIuY29tbW9uLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcHJvZ3Jlc3Mtc3Bpbm5lci9zcGlubmVyLmVsZW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24vYnV0dG9uLWNvbW1vbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2J1dHRvbiIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2J1dHRvbi9pY29uLWJ1dHRvbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90b29sdGlwIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdG9vbHRpcC90b29sdGlwLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS91dGlsaXRpZXMvb3ZlcmxheS51dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL3V0aWxpdGllcy9vdmVybGF5LXRyaWdnZXIiLCAiLi4vLi4vLi4vLi4vc3JjL3V0aWxpdGllcy9vdmVybGF5LXRyaWdnZXIvb3ZlcmxheS10cmlnZ2VyLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2Zvcm0tZWxlbWVudHMvZGVzY3JpcHRpb24uZWxlbWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2Zvcm0tZWxlbWVudHMvZGVzY3JpcHRpb24uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZm9ybS1lbGVtZW50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2Zvcm0tZWxlbWVudHMvZXJyb3Iuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZm9ybS1lbGVtZW50cy9oaW50LmVsZW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9mb3JtLWVsZW1lbnRzL2hpbnQuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZm9ybS1lbGVtZW50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2Zvcm0tZWxlbWVudHMvbGFiZWwuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy91dGlsaXRpZXMvdmlzdWFsbHktaGlkZGVuL3Zpc3VhbGx5LWhpZGRlbi5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy91dGlsaXRpZXMvdmlzdWFsbHktaGlkZGVuL3Zpc3VhbGx5LWhpZGRlbi5zdHlsZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCAqIGZyb20gJy4vc2xpZGVyLmVsZW1lbnQnO1xuIiwgbnVsbCwgIi8qIGVzbGludC1kaXNhYmxlIHdjL25vLXNlbGYtY2xhc3MgKi9cbmltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgc2VsZWN0b3JGYWN0b3J5LCBTZWxlY3RvckZhY3RvcnkgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQge1xuICBjb25zdHJ1Y3RJbnN0YW5jZVN0eWxlcyxcbiAgZ2VuZXJhdGVTZWxlY3RvcnNGcm9tU3R5bGVNYXAsXG4gIFNlbGVjdG9yU3R5bGVzLFxuICBTdHlsZU1hcCxcbiAgVW5zdWJzY3JpYmVyLFxufSBmcm9tICcuLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgdW5zYWZlSFRNTCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvdW5zYWZlLWh0bWwuanMnO1xuaW1wb3J0IHsgTW9ydGFyUHJlc2V0VGhlbWUgfSBmcm9tICcuLi9wcmVzZXRzJztcblxuLy8gRGlzYWJsZSB0aGlzIHdhcm5pbmcgZm9yIG5vdyBieSBwcmUtbWFya2luZyBpdCBhcyBpc3N1ZWQgc28gdXNlcnMgZG9uJ3QgaGF2ZSB0byBzZWUgaXRcbi8vIFRPRE86IEFzayBsaXQgdGVhbSB3aHkgdGhpcyBpcyB0aHJvd24gZXZlcnl3aGVyZSBhbmQgd2hhdCBhbHRlcm5hdGl2ZXMgYXJlIGZvciBwcmVzZXQgc29sdXRpb25cbmdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MgPz89IG5ldyBTZXQoKTtcbmdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MuYWRkKFxuICAnT3ZlcnJpZGluZyBSZWFjdGl2ZUVsZW1lbnQuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKCkgaXMgZGVwcmVjYXRlZC4gVGhlIG92ZXJyaWRlIHdpbGwgbm90IGJlIGNhbGxlZCB3aXRoIHN0YW5kYXJkIGRlY29yYXRvcnMgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvbm8tb3ZlcnJpZGUtZ2V0LXByb3BlcnR5LWRlc2NyaXB0b3IgZm9yIG1vcmUgaW5mb3JtYXRpb24uJ1xuKTtcblxuZXhwb3J0IGNsYXNzIE10ZUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHJpdmF0ZSBfX2luc3RhbmNlU3R5bGVTaGVldE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBTZWxlY3RvclN0eWxlc1tdPigpO1xuICBwcml2YXRlIF9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUgPSBmYWxzZTtcblxuICAvKiogU2V0IHRvIHRydWUgd2hlbiBmaXJzdFVwZGF0ZWQgaXMgZmlyc3QgY2FsbGVkICovXG4gIHByb3RlY3RlZCBfX2ZpcnN0VXBkYXRlZCA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBpbnN0YW5jZVN0eWxlcztcblxuICAvKipcbiAgICogQWxsIHN1YnMgcHVzaGVkIHRvIHRoaXMgYXJyYXkgd2lsbCBiZSBjbGVhcmVkIGluIHRoZSBkaXNjb25uZWN0ZWRDYWxsYmFja1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdWJzOiBVbnN1YnNjcmliZXJbXSA9IFtdO1xuXG4gIC8qKiBTdHlsZSBtYXBwaW5ncyB0aGF0IGFyZSBhcHBsaWVkIHRvIHRoZSBob3N0IGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgcmVmbGVjdDogdHJ1ZSB9KSBzZT86IFN0eWxlTWFwO1xuXG4gIC8qKlxuICAgKiBUaGUgdGhlbWUgdG8gdXNlIGZvciBzdHlsaW5nIHRoaXMgY29tcG9uZW50LiBPdmVycmlkZXMgdGhlIGdsb2JhbCBwcmVzZXQgZm9yIHRoaXMgaW5zdGFuY2Ugb2YgdGhpcyBjb21wb25lbnQuXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGF0dHJpYnV0ZTogJ2RhdGEtbXRlLXRoZW1lJyB9KVxuICBzZXQgdGhlbWUodGhlbWU6IHN0cmluZykge1xuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5fdGhlbWU7XG4gICAgdGhpcy5fdGhlbWUgPSB0aGVtZTtcbiAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ3RoZW1lJywgb2xkVmFsdWUpO1xuICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgYSBiZXR0ZXIgd2F5IHRvIHNvbHZlIHRoaXMgZm9yIGFsbCBwcmVzZXRzXG4gICAgaWYgKHRoaXMuX19sb2NhbFByZXNldFRoZW1lKSB7XG4gICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBudWxsKSk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4gdGhpcy5yZXF1ZXN0VXBkYXRlKCd0aGVtZScsIG51bGwpKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHRoZW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lID8/IHRoaXMuX19sb2NhbFByZXNldFRoZW1lPy5uYW1lO1xuICB9XG4gIHByaXZhdGUgX3RoZW1lOiBzdHJpbmc7XG5cbiAgLyoqIFVzZWQgdG8gZGVjbGFyZSBhIGxvY2FsIHRoZW1lIHZhbHVlIGRldGVybWluZWQgYnkgdGhlIGxvY2FsIHByZXNldCBpZiBpdCBpcyBzZXQuICovXG4gIEBzdGF0ZSgpIHByb3RlY3RlZCBfX2xvY2FsUHJlc2V0VGhlbWU6IE1vcnRhclByZXNldFRoZW1lO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIHNlbGVjdG9yIHRvIGhhdmUgaW5zdGFuY2Ugc3R5bGVzIHRhcmdldCBhIHNwZWNpZmljIGlubmVyIGVsZW1lbnQuXG4gICAqIFVzZWZ1bCBpbiBzcGVjaWZpYyBzY2VuYXJpb3Mgd2hlcmUgZm9jdXMgaXMgZGVsZWdhdGVkIGxpa2UgYnV0dG9ucy5cbiAgICpcbiAgICogQnkgZGVmYXVsdCB0aGlzIHJlcGVhdHMgYDpob3N0YCBzaXggdGltZXMgdG8gcHJvdmlkZSBhIHNwZWNpZmljaXR5IG9mIDZcbiAgICovXG4gIHByb3RlY3RlZCBpbnN0YW5jZVN0eWxlU2VsZWN0b3JSb290ID0gJzpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCc7XG5cbiAgLyoqXG4gICAqIENhbiBiZSBjYWxsZWQgYnkgZGVyaXZlZCBjbGFzc2VzIHRvIHJlZ2lzdGVyIG5ldyBpbnN0YW5jZSBsZXZlbCBkeW5hbWljIHN0eWxlcy5cbiAgICogV2hlbiBjYWxsZWQgdGhlIGluc3RhbmNlIHN0eWxlc2hlZXQgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZSBsYXRlc3Qgc3R5bGVzIHRoaXMgdXBkYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIHNldEluc3RhbmNlU3R5bGUoaWQ6IHN0cmluZywgc2VsZWN0b3I6IFNlbGVjdG9yRmFjdG9yeSwgc3R5bGVNYXA6IFN0eWxlTWFwKSB7XG4gICAgLy8gV2UgcGFyc2UgYWxsIHN0eWxlIGluZm9ybWF0aW9uIGhlcmUgYW5kIHNjb3BlIGl0IHRvIHRoZSBnaXZlbiBpZC4gVGhpcyBlbnN1cmVzIHdlXG4gICAgLy8gb25seSBldmVyIG5lZWQgdG8gcmUtcGFyc2UgdGhpcyBwb3J0aW9uIG9mIHN0eWxlIGluZm9ybWF0aW9uIHdoZW4gaXRzIGFzc29jaWF0ZWRcbiAgICAvLyBpZCBpcyB1cGRhdGVkIGFnYWluLlxuICAgIHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXRNYXAuc2V0KGlkLCBnZW5lcmF0ZVNlbGVjdG9yc0Zyb21TdHlsZU1hcChzZWxlY3Rvciwgc3R5bGVNYXApKTtcbiAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgLyoqIEEgY3VzdG9tIGhvb2sgdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBpbiBkZXJpdmVkIGNsYXNzZXMgdG8gc2V0IGluc3RhbmNlIHN0eWxlcyBhcyBuZWVkZWQgKi9cbiAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKCdzZScpKSB7XG4gICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoJ3NlJywgc2VsZWN0b3JGYWN0b3J5KHRoaXMuaW5zdGFuY2VTdHlsZVNlbGVjdG9yUm9vdCksIHRoaXMuc2UgPz8ge30pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCB3aWxsVXBkYXRlKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLndpbGxVcGRhdGUoY2hhbmdlZFByb3BzKTtcblxuICAgIC8vIENhbGwgdGhlIHVwZGF0ZUluc3RhbmNlU3R5bGVzIGhvb2tcbiAgICB0aGlzLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBDaGVjayBpZiBpbnN0YW5jZSBzdHlsZXMgbmVlZCB0byBiZSByZXJlbmRlcmVkXG4gICAgaWYgKHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXROZWVkc1VwZGF0ZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZVN0eWxlcyA9IHVuc2FmZUhUTUwoXG4gICAgICAgIGA8c3R5bGUgaWQ9XCJfX2luc3RhbmNlLXN0eWxlc1wiPiR7Y29uc3RydWN0SW5zdGFuY2VTdHlsZXMoXG4gICAgICAgICAgdGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE1hcFxuICAgICAgICApfTwvc3R5bGU+YFxuICAgICAgKTtcbiAgICAgIHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXROZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgdGhpcy5fX2ZpcnN0VXBkYXRlZCA9IHRydWU7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgdGhpcy5zdWJzLmZvckVhY2goKHVuc3ViKSA9PiB1bnN1YigpKTtcbiAgICB0aGlzLnN1YnMgPSBbXTtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7IFByb3BlcnR5TWFwcGVyLCBTdHlsZVByb3BlcnR5IH0gZnJvbSAnLi9jc3MtaW4tanMudHlwZXMnO1xuXG5jb25zdCBwcm9wZXJ0eU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgc3RyaW5nW10+ID0ge1xuICBtOiAnbWFyZ2luJyxcbiAgbXg6IFsnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCddLFxuICBteTogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gIG10OiAnbWFyZ2luVG9wJyxcbiAgbXI6ICdtYXJnaW5SaWdodCcsXG4gIG1iOiAnbWFyZ2luQm90dG9tJyxcbiAgbWw6ICdtYXJnaW5MZWZ0JyxcbiAgcDogJ3BhZGRpbmcnLFxuICBweDogWydwYWRkaW5nTGVmdCcsICdwYWRkaW5nUmlnaHQnXSxcbiAgcHk6IFsncGFkZGluZ1RvcCcsICdwYWRkaW5nQm90dG9tJ10sXG4gIHB0OiAncGFkZGluZ1RvcCcsXG4gIHByOiAncGFkZGluZ1JpZ2h0JyxcbiAgcGI6ICdwYWRkaW5nQm90dG9tJyxcbiAgcGw6ICdwYWRkaW5nTGVmdCcsXG4gIGQ6ICdkaXNwbGF5JyxcbiAgYTogJ2FsaWduSXRlbXMnLFxuICBqOiAnanVzdGlmeUNvbnRlbnQnLFxuICBkaXJlY3Rpb246ICdmbGV4RGlyZWN0aW9uJyxcbiAgc2hyaW5rOiAnZmxleFNocmluaycsXG4gIGdyb3c6ICdmbGV4R3JvdycsXG4gIHdyYXA6ICdmbGV4V3JhcCcsXG4gIHc6ICd3aWR0aCcsXG4gIG1heHc6ICdtYXhXaWR0aCcsXG4gIG1pbnc6ICdtaW5XaWR0aCcsXG4gIGg6ICdoZWlnaHQnLFxuICBtYXhoOiAnbWF4SGVpZ2h0JyxcbiAgbWluaDogJ21pbkhlaWdodCcsXG4gIGZzOiAnZm9udFNpemUnLFxuICBmdzogJ2ZvbnRXZWlnaHQnLFxuICBiZzogJ2JhY2tncm91bmQnLFxuICBjOiAnY29sb3InLFxuICBlbGV2YXRpb246ICdib3hTaGFkb3cnLFxufTtcblxuLyoqIE1hcHMgcHJvcGVydHkgc2hvcnRoYW5kIHZhbHVlcyB0byBvbmUgb3IgbWFueSBmdWxsIGNzcyBwcm9wZXJ0aWVzICovXG5leHBvcnQgY29uc3QgcHJvcFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLnJlZHVjZSgoYWNjLCBwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkUHJvcHMgPSBwcm9wZXJ0eU1hcFtwcm9wTWFwLnByb3BdID8/IHByb3BNYXAucHJvcDtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uYWNjLFxuICAgICAgLi4uKEFycmF5LmlzQXJyYXkobWFwcGVkUHJvcHMpXG4gICAgICAgID8gbWFwcGVkUHJvcHMubWFwKChwcm9wKSA9PiAoeyBwcm9wLCB2YWx1ZTogcHJvcE1hcC52YWx1ZSB9KSlcbiAgICAgICAgOiBbeyBwcm9wOiBtYXBwZWRQcm9wcywgdmFsdWU6IHByb3BNYXAudmFsdWUgfV0pLFxuICAgIF07XG4gIH0sIFtdKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgQG1vcnRhci9zdHlsZXMgY29uZmlnIHZhbHVlIGZvciBhIGdpdmVuIGRvdCBub3RhdGVkIHN0cmluZy5cbiAqIE51bWJlcnMgYW5kIG5vbi1kb3Qgbm90YXRlZCBzdHJpbmcgd2lsbCBqdXN0IGJlIHJldHVybmVkIGFzIGlzLlxuICovXG5leHBvcnQgY29uc3QgZG90U3RyaW5nVG9Db25maWdWYWx1ZSA9ICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb25maWdQYXRoID0gdmFsdWUuc3BsaXQoJy4nKTtcbiAgICAgIGNvbnN0IGNvbmZpZ1ZhbHVlID0gY29uZmlnUGF0aC5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBhY2Nba2V5XTtcbiAgICAgIH0sIGNvbmZpZyk7XG4gICAgICByZXR1cm4gY29uZmlnVmFsdWUgPz8gdmFsdWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn07XG5cbi8qKiBNYXBzIGRvdCBub3RhdGVkIHN0cmluZyB2YWx1ZXMgdG8gdGhlbWUgY29uZmlnIHZhcmlhYmxlcyAqL1xuZXhwb3J0IGNvbnN0IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWVNYXBwZXI6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLnJlZHVjZSgoYWNjLCBwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgY29uZmlnVmFsdWUgPSBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKHByb3BNYXAudmFsdWUpO1xuICAgIGlmIChjb25maWdWYWx1ZSkge1xuICAgICAgcHJvcE1hcC52YWx1ZSA9IGNvbmZpZ1ZhbHVlID8/IHByb3BNYXAudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBbLi4uYWNjLCBwcm9wTWFwXTtcbiAgfSwgW10pO1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcE51bWJlclRvUHggPSAodmFsOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsKSA9PiB7XG4gIGlmICghdmFsKSB7XG4gICAgcmV0dXJuIHZhbCBhcyBudWxsO1xuICB9XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKHZhbCkpID8gYCR7dmFsfXB4YCA6ICh2YWwgYXMgc3RyaW5nKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBQeFRvTnVtYmVyID0gKHZhbDogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICBpZiAoIXZhbCkge1xuICAgIHJldHVybiB2YWwgYXMgbnVsbDtcbiAgfVxuICByZXR1cm4gTnVtYmVyKHZhbC5yZXBsYWNlKCdweCcsICcnKSk7XG59O1xuXG4vKiogTWFwcyB0aGUgdmFsdWVzIG9mIGFueSBnaXZlbiBwcm9wcyB0byBweCB1bml0cyBpZiBpdCBpcyBhIG51bWJlciAqL1xuZXhwb3J0IGNvbnN0IG51bWJlclRvUHg6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gbWFwTnVtYmVyVG9QeChwcm9wTWFwLnZhbHVlKTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IHNwYWNpbmdNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICcwJzogY29uZmlnLnNwYWNlLm5vbmUsXG4gICcxJzogY29uZmlnLnNwYWNlLnhzLFxuICAnMic6IGNvbmZpZy5zcGFjZS5zbSxcbiAgJzMnOiBjb25maWcuc3BhY2UubWQsXG4gICc0JzogY29uZmlnLnNwYWNlLmxnLFxuICAnNSc6IGNvbmZpZy5zcGFjZS54bCxcbiAgJzYnOiBjb25maWcuc3BhY2UueHhsLFxuICAnNyc6IGNvbmZpZy5zcGFjZS54eHhsLFxuICAnbm9uZSc6IGNvbmZpZy5zcGFjZS5ub25lLFxuICAneHhzJzogY29uZmlnLnNwYWNlLnh4cyxcbiAgJ3hzJzogY29uZmlnLnNwYWNlLnhzLFxuICAnc20nOiBjb25maWcuc3BhY2Uuc20sXG4gICdtZCc6IGNvbmZpZy5zcGFjZS5tZCxcbiAgJ2xnJzogY29uZmlnLnNwYWNlLmxnLFxuICAneGwnOiBjb25maWcuc3BhY2UueGwsXG4gICd4eGwnOiBjb25maWcuc3BhY2UueHhsLFxuICAneHh4bCc6IGNvbmZpZy5zcGFjZS54eHhsLFxufTtcblxuLyoqIE1hcHMgc3BhY2luZyB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIHNwYWNpbmcgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IHNwYWNpbmdWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IHNwYWNpbmdNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGJvcmRlclJhZGl1c01hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgbm9uZTogY29uZmlnLmJvcmRlci5yYWRpdXMubm9uZSxcbiAgeHM6IGNvbmZpZy5ib3JkZXIucmFkaXVzLnhzLFxuICBzbTogY29uZmlnLmJvcmRlci5yYWRpdXMuc20sXG4gIG1kOiBjb25maWcuYm9yZGVyLnJhZGl1cy5tZCxcbiAgbGc6IGNvbmZpZy5ib3JkZXIucmFkaXVzLmxnLFxuICB4bDogY29uZmlnLmJvcmRlci5yYWRpdXMueGwsXG4gIHh4bDogY29uZmlnLmJvcmRlci5yYWRpdXMueHhsLFxuICBmdWxsOiBjb25maWcuYm9yZGVyLnJhZGl1cy5mdWxsLFxufTtcblxuLyoqIE1hcHMgYm9yZGVyIHJhZGl1cyB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIGJvcmRlciByYWRpdXMgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGJvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gYm9yZGVyUmFkaXVzTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBib3JkZXJXaWR0aE1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgbm9uZTogY29uZmlnLmJvcmRlci53aWR0aC5ub25lLFxuICBzbTogY29uZmlnLmJvcmRlci53aWR0aC5zbSxcbiAgbWQ6IGNvbmZpZy5ib3JkZXIud2lkdGgubWQsXG4gIGxnOiBjb25maWcuYm9yZGVyLndpZHRoLmxnLFxufTtcblxuLyoqIE1hcHMgYm9yZGVyIHdpZHRoIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgYm9yZGVyIHdpZHRoIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gYm9yZGVyV2lkdGhNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IG9wYWNpdHlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHh4bDogY29uZmlnLm9wYWNpdHkueHhsLFxuICB4bDogY29uZmlnLm9wYWNpdHkueGwsXG4gIGxnOiBjb25maWcub3BhY2l0eS5sZyxcbiAgbWQ6IGNvbmZpZy5vcGFjaXR5Lm1kLFxuICBzbTogY29uZmlnLm9wYWNpdHkuc20sXG4gIHhzOiBjb25maWcub3BhY2l0eS54cyxcbiAgeHhzOiBjb25maWcub3BhY2l0eS54eHMsXG4gIHh4eHM6IGNvbmZpZy5vcGFjaXR5Lnh4eHMsXG59O1xuXG4vKiogTWFwcyBvcGFjaXR5IHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgb3BhY2l0eSBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3Qgb3BhY2l0eVZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gb3BhY2l0eU1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZm9udFdlaWdodE1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgbGlnaHQ6IGNvbmZpZy5mb250LndlaWdodC5saWdodCxcbiAgcmVndWxhcjogY29uZmlnLmZvbnQud2VpZ2h0LnJlZ3VsYXIsXG4gIG1lZGl1bTogY29uZmlnLmZvbnQud2VpZ2h0Lm1lZGl1bSxcbiAgYm9sZDogY29uZmlnLmZvbnQud2VpZ2h0LmJvbGQsXG59O1xuXG4vKiogTWFwcyBmb250LXdlaWdodCB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIHNwYWNpbmcgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGZvbnRXZWlnaHRWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGZvbnRXZWlnaHRNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGZvbnRTaXplTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB4eHM6ICcwLjYyNXJlbScsXG4gIHhzOiAnMC43NXJlbScsXG4gIHNtOiAnMC44NzVyZW0nLFxuICBtZDogJzFyZW0nLFxuICBsZzogJzEuMjVyZW0nLFxuICB4bDogJzEuNXJlbScsXG4gIHh4bDogJzEuNzVyZW0nLFxufTtcblxuLyoqIE1hcHMgZm9udC1zaXplIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgc3BhY2luZyBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgZm9udFNpemVWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGZvbnRTaXplTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBmb250RmFtaWx5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBzYW5zOiBjb25maWcuZm9udC5mYW1pbHkuc2FucyxcbiAgc2VyaWY6IGNvbmZpZy5mb250LmZhbWlseS5zZXJpZixcbiAgbW9ubzogY29uZmlnLmZvbnQuZmFtaWx5Lm1vbm8sXG59O1xuXG4vKiogTWFwcyBmb250LWZhbWlseSB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIGZvbnQtZmFtaWx5IHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBmb250RmFtaWx5VmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBmb250RmFtaWx5TWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBlbGV2YXRpb25NYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHowOiBjb25maWcuZWxldmF0aW9uLnowLFxuICB6MTogY29uZmlnLmVsZXZhdGlvbi56MSxcbiAgejI6IGNvbmZpZy5lbGV2YXRpb24uejIsXG4gIHozOiBjb25maWcuZWxldmF0aW9uLnozLFxuICB6NDogY29uZmlnLmVsZXZhdGlvbi56NCxcbn07XG5cbi8qKiBNYXBzIGVsZXZhdGlvbiB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIGVsZXZhdGlvbiBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgZWxldmF0aW9uVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBlbGV2YXRpb25NYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG4iLCAiaW1wb3J0IHsgY29uZmlnLCBTZWxlY3Rvck9wdGlvbnMgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQge1xuICBTZWxlY3Rvck1ldGFkYXRhLFxuICBTZWxlY3RvclN0eWxlcyxcbiAgU3R5bGVNYXAsXG4gIFN0eWxlTWFwQ2FsbGJhY2ssXG4gIFN0eWxlUHJvcGVydHksXG59IGZyb20gJy4vY3NzLWluLWpzLnR5cGVzJztcbmltcG9ydCB7XG4gIHByb3BTaG9ydGhhbmRzLFxuICBzcGFjaW5nVmFsU2hvcnRoYW5kcyxcbiAgbnVtYmVyVG9QeCxcbiAgZG90U3RyaW5nVG9Db25maWdWYWx1ZU1hcHBlcixcbiAgYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcyxcbiAgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzLFxuICBvcGFjaXR5VmFsU2hvcnRoYW5kcyxcbiAgZm9udFdlaWdodFZhbFNob3J0aGFuZHMsXG4gIGZvbnRGYW1pbHlWYWxTaG9ydGhhbmRzLFxuICBlbGV2YXRpb25WYWxTaG9ydGhhbmRzLFxuICBmb250U2l6ZVZhbFNob3J0aGFuZHMsXG59IGZyb20gJy4vY3NzLWluLWpzLnByb3BlcnR5LW1hcHBlcnMnO1xuXG4vKiogU3BlY2lmaWVzIHdoaWNoIHByb3BlcnR5IG1hcHBlcnMgc2hvdWxkIGJlIGNhbGxlZCBhbmQgaW4gd2hhdCBvcmRlciBmb3IgYSBnaXZlbiBwcm9wICovXG5jb25zdCBwcm9wTWFwcGVycyA9IHtcbiAgaGVpZ2h0OiBbbnVtYmVyVG9QeF0sXG4gIG1pbkhlaWdodDogW251bWJlclRvUHhdLFxuICBtYXhIZWlnaHQ6IFtudW1iZXJUb1B4XSxcbiAgd2lkdGg6IFtudW1iZXJUb1B4XSxcbiAgbWluV2lkdGg6IFtudW1iZXJUb1B4XSxcbiAgbWF4V2lkdGg6IFtudW1iZXJUb1B4XSxcbiAgdG9wOiBbbnVtYmVyVG9QeF0sXG4gIHJpZ2h0OiBbbnVtYmVyVG9QeF0sXG4gIGJvdHRvbTogW251bWJlclRvUHhdLFxuICBsZWZ0OiBbbnVtYmVyVG9QeF0sXG4gIG1hcmdpbjogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luVG9wOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBtYXJnaW5SaWdodDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luQm90dG9tOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBtYXJnaW5MZWZ0OiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nVG9wOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nUmlnaHQ6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmdCb3R0b206IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmdMZWZ0OiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBnYXA6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHJvd0dhcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgY29sdW1uR2FwOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBmb250U2l6ZTogW2ZvbnRTaXplVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGZvbnRXZWlnaHQ6IFtmb250V2VpZ2h0VmFsU2hvcnRoYW5kc10sXG4gIGZvbnRGYW1pbHk6IFtmb250RmFtaWx5VmFsU2hvcnRoYW5kc10sXG4gIGJvcmRlclJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJXaWR0aDogW2JvcmRlcldpZHRoVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlclRvcExlZnRSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBvcGFjaXR5OiBbb3BhY2l0eVZhbFNob3J0aGFuZHNdLFxuICBib3hTaGFkb3c6IFtlbGV2YXRpb25WYWxTaG9ydGhhbmRzXSxcbn07XG5cbi8qKlxuICogUGFyc2VzIHByb3BlcnRpZXMgdG8gdGhlaXIgYWN0dWFsIHByb3BlcnR5IG1hcHBpbmdzIGFjY29yZGluZyB0byB0aGVcbiAqIG1hcHBpbmcgZnVuY3Rpb24gcGlwZWxpbmVzIGRlZmluZWQgYWJvdmVcbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnNlUHJvcFNob3J0aGFuZHMgPSAocHJvcDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogU3R5bGVQcm9wZXJ0eVtdID0+IHtcbiAgLy8gQ2FzdCB0byBzdHJpbmcgdmFsdWVzXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdmFsdWUgPSBgJHt2YWx1ZX1gO1xuICB9XG4gIC8vIEV4ZWMgcHJvcCB0cmFuc2Zvcm1zXG4gIC8vIFRoZSBwcm9wIHNob3J0aGFuZHMgbWFwcGVyIGlzIHJ1biBhZ2FpbnN0IGV2ZXJ5IHByb3BcbiAgY29uc3QgbWFwcGVkUHJvcHMgPSBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlTWFwcGVyKHByb3BTaG9ydGhhbmRzKFt7IHByb3AsIHZhbHVlIH1dKSk7XG4gIHJldHVybiBtYXBwZWRQcm9wcy5yZWR1Y2UoKGFjYywgcHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlcnMgPSBwcm9wTWFwcGVyc1twcm9wTWFwLnByb3BdO1xuICAgIGlmIChtYXBwZXJzKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIC4uLm1hcHBlcnMucmVkdWNlKFxuICAgICAgICAgIChhY2MsIG1hcHBlcikgPT4gbWFwcGVyKGFjYyksXG4gICAgICAgICAgW3sgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogcHJvcE1hcC52YWx1ZSB9XVxuICAgICAgICApLFxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWNjLnB1c2gocHJvcE1hcCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgfSwgW10pO1xufTtcblxuLyoqXG4gKiBQYXJzZXMgc3R5bGVNYXAgdmFsdWVzIHRvIHNlbGVjdG9yICsgc3R5bGUgaW5mbyB1c2VkIGZvclxuICogdXBkYXRpbmcgQ1NTU3R5bGVTaGVldHMgb3IgPHN0eWxlPiB0YWdzLlxuICovXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVTZWxlY3RvcnNGcm9tU3R5bGVNYXAgPSAoXG4gIHNlbGVjdG9yRm46IChvcHRpb25zPzogU2VsZWN0b3JPcHRpb25zKSA9PiBzdHJpbmcsXG4gIHN0eWxlTWFwOiBTdHlsZU1hcFxuKSA9PiB7XG4gIGNvbnN0IHBhcnNlZFNlbGVjdG9yczogU2VsZWN0b3JTdHlsZXNbXSA9IFtdO1xuICBjb25zdCBzZWxlY3RvclF1ZXVlOiBTZWxlY3Rvck1ldGFkYXRhW10gPSBbeyBzZWxlY3Rvcjogc2VsZWN0b3JGbigpLCBzdHlsZU1hcCB9XTtcbiAgY29uc3QgYnJlYWtwb2ludEtleXMgPSBPYmplY3Qua2V5cyhjb25maWcuZ3JpZC5icmVha3BvaW50KTtcblxuICAvLyBMb29wIHRocm91Z2ggc2VsZWN0b3IgcXVldWUgdW50aWwgdGhleSBoYXZlIGFsbCBiZWVuIGV4aGF1c3RlZFxuICB3aGlsZSAoc2VsZWN0b3JRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JNYXAgPSBzZWxlY3RvclF1ZXVlLnNoaWZ0KCk7XG5cbiAgICAvLyBQdXNoIHBhcnNlZCBzZWxlY3RvcnMgb250byB0aGUgcmV0dXJuIGxpc3RcbiAgICBwYXJzZWRTZWxlY3RvcnMucHVzaCh7XG4gICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsXG4gICAgICBzZWxlY3RvcldyYXBwZXI6IHNlbGVjdG9yTWFwLnNlbGVjdG9yV3JhcHBlcixcbiAgICAgIHN0eWxlOiBPYmplY3Qua2V5cyhzZWxlY3Rvck1hcC5zdHlsZU1hcCkucmVkdWNlKChhY2MsIHByb3ApID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gc2VsZWN0b3JNYXAuc3R5bGVNYXBbcHJvcF07XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIGNhbGxiYWNrIHZhbHVlc1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YWx1ZSA9ICh2YWx1ZSBhcyBTdHlsZU1hcENhbGxiYWNrKShjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2Ugb2JqZWN0IHZhbHVlc1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgLy8gUXVldWUgdXAgc2VsZWN0b3JzIGZvciBwc2V1ZG8tY2xhc3Nlc1xuICAgICAgICAgIGlmIChwcm9wLnN0YXJ0c1dpdGgoJyY6JykpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvckZuKHsgaW5maXg6IHByb3AucmVwbGFjZSgnJicsICcnKSB9KSxcbiAgICAgICAgICAgICAgc3R5bGVNYXA6IHZhbHVlLFxuICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IHNlbGVjdG9yTWFwLnNlbGVjdG9yV3JhcHBlcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUXVldWUgdXAgYnJlYWtwb2ludCBzZWxlY3RvciBzaG9ydGhhbmRzXG4gICAgICAgICAgZWxzZSBpZiAoYnJlYWtwb2ludEtleXMuaW5jbHVkZXMocHJvcCkpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvck1hcC5zZWxlY3RvcixcbiAgICAgICAgICAgICAgc3R5bGVNYXA6IHZhbHVlLFxuICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IGBAbWVkaWEgKG1pbi13aWR0aDoke2NvbmZpZy5ncmlkLmJyZWFrcG9pbnRbcHJvcF19KWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFF1ZXVlIHVwIHNlbGVjdG9ycyBmb3IgbWVkaWEvY29udGFpbmVyIHF1ZXJpZXNcbiAgICAgICAgICBlbHNlIGlmIChwcm9wLnN0YXJ0c1dpdGgoJ0BtZWRpYScpIHx8IHByb3Auc3RhcnRzV2l0aCgnQGNvbnRhaW5lcicpKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBwcm9wLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIHNsb3R0ZWQgcXVlcmllc1xuICAgICAgICAgIGVsc2UgaWYgKHByb3Auc3RhcnRzV2l0aCgnOjpzbG90dGVkJykgfHwgcHJvcC5zdGFydHNXaXRoKCcmIDo6c2xvdHRlZCcpKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JGbih7IHBvc3RmaXg6ICcgJyArIHByb3AucmVwbGFjZSgnJiAnLCAnJykgfSksXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBzZWxlY3Rvck1hcC5zZWxlY3RvcldyYXBwZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFF1ZXVlIHVwIHNlbGVjdG9ycyBmb3IgdmFsdWUgYnJlYWtwb2ludCBvYmplY3RzXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBMb29wIGluIG9yZGVyIGhlcmUgc28gdGhleSBvdmVycmlkZSBlYWNoIG90aGVyIGNvcnJlY3RseVxuICAgICAgICAgICAgYnJlYWtwb2ludEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvck1hcC5zZWxlY3RvciwgLy8gaW5oZXJpdCB0aGUgc2VsZWN0b3IgaGVyZSBpbiBjYXNlIHdlIGFyZSB3aXRoaW4gYSBwc2V1ZG8tY2xhc3NcbiAgICAgICAgICAgICAgICAgIHN0eWxlTWFwOiB7IFtwcm9wXTogdmFsdWVba2V5XSB9LFxuICAgICAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBgQG1lZGlhIChtaW4td2lkdGg6JHtjb25maWcuZ3JpZC5icmVha3BvaW50W2tleV19KWAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXJzZSBub3JtYWwgcHJvcHNcbiAgICAgICAgY29uc3QgcHJvcHMgPSBwYXJzZVByb3BTaG9ydGhhbmRzKHByb3AsIHZhbHVlIGFzIHN0cmluZyB8IG51bWJlcik7XG4gICAgICAgIHJldHVybiBgJHthY2N9JHtwcm9wcy5yZWR1Y2UoKGFjYzIsIHsgcHJvcCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgIC8vIENvbnZlcnQgcHJvcGVydHkgbmFtZXMgZnJvbSBjYW1lbC1jYXNlIHRvIGRhc2gtY2FzZSwgaS5lLjpcbiAgICAgICAgICAvLyAgYGJhY2tncm91bmRDb2xvcmAgLT4gYGJhY2tncm91bmQtY29sb3JgXG4gICAgICAgICAgLy8gVmVuZG9yLXByZWZpeGVkIG5hbWVzIG5lZWQgYW4gZXh0cmEgYC1gIGFwcGVuZGVkIHRvIGZyb250OlxuICAgICAgICAgIC8vICBgd2Via2l0QXBwZWFyYW5jZWAgLT4gYC13ZWJraXQtYXBwZWFyYW5jZWBcbiAgICAgICAgICAvLyBFeGNlcHRpb24gaXMgYW55IHByb3BlcnR5IG5hbWUgY29udGFpbmluZyBhIGRhc2gsIGluY2x1ZGluZ1xuICAgICAgICAgIC8vIGN1c3RvbSBwcm9wZXJ0aWVzOyB3ZSBhc3N1bWUgdGhlc2UgYXJlIGFscmVhZHkgZGFzaC1jYXNlZCBpLmUuOlxuICAgICAgICAgIC8vICBgLS1teS1idXR0b24tY29sb3JgIC0tPiBgLS1teS1idXR0b24tY29sb3JgXG4gICAgICAgICAgcHJvcCA9IHByb3AucmVwbGFjZSgvKD86Xih3ZWJraXR8bW96fG1zfG8pfCkoPz1bQS1aXSkvZywgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgcmV0dXJuIGAke2FjYzJ9JHtwcm9wfToke3ZhbHVlfTtgO1xuICAgICAgICB9LCAnJyl9YDtcbiAgICAgIH0sICcnKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWRTZWxlY3RvcnM7XG59O1xuXG5jb25zdCBwYXJzZVNlbGVjdG9ycyA9IChzdHlsZXMsIHNlbGVjdG9ycz86IGFueSkgPT4ge1xuICBpZiAoIXNlbGVjdG9ycykge1xuICAgIHJldHVybiBzdHlsZXM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGAke3N0eWxlc30ke3NlbGVjdG9ycy5yZWR1Y2UoKGFjYywgeyBzZWxlY3Rvciwgc2VsZWN0b3JXcmFwcGVyLCBzdHlsZSB9KSA9PiB7XG4gICAgICBpZiAoc3R5bGUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgICBjb25zdCBiYXNlID0gYCR7c2VsZWN0b3J9eyR7c3R5bGV9fWA7XG4gICAgICBjb25zdCB3cmFwcGVkID0gc2VsZWN0b3JXcmFwcGVyID8gYCR7c2VsZWN0b3JXcmFwcGVyfXske2Jhc2V9fWAgOiBiYXNlO1xuICAgICAgcmV0dXJuIGAke2FjY30ke3dyYXBwZWR9YDtcbiAgICB9LCAnJyl9YDtcbiAgfVxufTtcblxuLyoqXG4gKiBDb21iaW5lcyBhbGwgaW5zdGFuY2Ugc3R5bGVNYXAgc2VsZWN0b3JzICsgc3R5bGUgaW5mbyBpbnRvIG9uZSBjc3NUZXh0XG4gKiB1c2VkIGZvciB1cGRhdGluZyBDU1NTdHlsZVNoZWV0cyBvciA8c3R5bGU+IHRhZ3MuXG4gKi9cbmV4cG9ydCBjb25zdCBjb25zdHJ1Y3RJbnN0YW5jZVN0eWxlcyA9IChpbnN0YW5jZVN0eWxlc01hcCkgPT4ge1xuICBsZXQgc3R5bGVzID0gJyc7XG5cbiAgLy8gU29ydCBrZXlzIGluIGFscGhhYmV0aWNhbCBvcmRlciB0byBoZWxwIGF2b2lkIGh5ZHJhdGlvbiBtaXNtYXRjaCBlcnJvcnNcbiAgWy4uLmluc3RhbmNlU3R5bGVzTWFwLmVudHJpZXMoKV1cbiAgICAuZmlsdGVyKChba2V5LCBfXSkgPT4ga2V5ICE9PSAnc2UnICYmIGtleSAhPT0gJ3NwJylcbiAgICAuc29ydCgoYSwgYikgPT4gYlswXSAtIGFbMF0pXG4gICAgLmZvckVhY2goKFtfLCBzZWxlY3RvcnNdKSA9PiB7XG4gICAgICBzdHlsZXMgPSBwYXJzZVNlbGVjdG9ycyhzdHlsZXMsIHNlbGVjdG9ycyk7XG4gICAgfSk7XG5cbiAgLy8gQWx3YXlzIHBhcnNlIGBzZWAgYW5kIGBzcGAgc2VsZWN0b3JzIGxhc3QgdG8gaGVscCBhdm9pZCBoeWRyYXRpb24gbWlzbWF0Y2ggZXJyb3JzXG4gIC8vIGFuZCBlbnN1cmUgdGhleSBvdmVycmlkZSBhbnkgY29tcG9uZW50IGxldmVsIGR5bmFtaWMgc3R5bGVzLlxuICBzdHlsZXMgPSBgJHtzdHlsZXN9JHtwYXJzZVNlbGVjdG9ycygnJywgaW5zdGFuY2VTdHlsZXNNYXAuZ2V0KCdzZScpKX0ke3BhcnNlU2VsZWN0b3JzKFxuICAgICcnLFxuICAgIGluc3RhbmNlU3R5bGVzTWFwLmdldCgnc3AnKVxuICApfWA7XG4gIHJldHVybiBzdHlsZXM7XG59O1xuIiwgImltcG9ydCB7IGlzU2VydmVyIH0gZnJvbSAnbGl0LWh0bWwvaXMtc2VydmVyLmpzJztcblxuZXhwb3J0IGNvbnN0IGlzU3NyID0gKCkgPT4gaXNTZXJ2ZXI7XG5cbmV4cG9ydCBjb25zdCBpc0Jyb3dzZXJMaWtlID0gKCkgPT4gZ2xvYmFsVGhpcyAhPT0gdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgaXNWYWxpZFJlc2l6ZUNvbnRyb2xsZXIgPSAocmVzaXplQ29udHJvbGxlcikgPT5cbiAgcmVzaXplQ29udHJvbGxlcj8uWydfb2JzZXJ2ZXInXT8uWyd1bm9ic2VydmUnXTtcblxuaW50ZXJmYWNlIE5hdmlnYXRvclVBRGF0YSB7XG4gIGJyYW5kczogQXJyYXk8eyBicmFuZDogc3RyaW5nOyB2ZXJzaW9uOiBzdHJpbmcgfT47XG4gIG1vYmlsZTogYm9vbGVhbjtcbiAgcGxhdGZvcm06IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXRmb3JtKCk6IHN0cmluZyB7XG4gIGNvbnN0IHVhRGF0YSA9IChuYXZpZ2F0b3IgYXMgYW55KS51c2VyQWdlbnREYXRhIGFzIE5hdmlnYXRvclVBRGF0YSB8IHVuZGVmaW5lZDtcblxuICBpZiAodWFEYXRhPy5wbGF0Zm9ybSkge1xuICAgIHJldHVybiB1YURhdGEucGxhdGZvcm07XG4gIH1cblxuICByZXR1cm4gbmF2aWdhdG9yLnBsYXRmb3JtO1xufVxuXG5leHBvcnQgY29uc3QgaXNQbGF0Zm9ybSA9IChwbGF0Zm9ybTogJ0lPUycpID0+IHtcbiAgaWYgKCFpc1NzcigpKSB7XG4gICAgaWYgKHBsYXRmb3JtID09PSAnSU9TJykge1xuICAgICAgcmV0dXJuIC9pUChob25lfGFkfG9kKXxpT1MvLnRlc3QoZ2V0UGxhdGZvcm0oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuIiwgImNvbnN0IG5hdGl2ZVZhbGlkaXR5U3RhdGVzOiBBcnJheTxrZXlvZiBWYWxpZGl0eVN0YXRlPiA9IFtcbiAgJ2JhZElucHV0JyxcbiAgJ2N1c3RvbUVycm9yJyxcbiAgJ3BhdHRlcm5NaXNtYXRjaCcsXG4gICdyYW5nZU92ZXJmbG93JyxcbiAgJ3JhbmdlVW5kZXJmbG93JyxcbiAgJ3N0ZXBNaXNtYXRjaCcsXG4gICd0b29Mb25nJyxcbiAgJ3Rvb1Nob3J0JyxcbiAgJ3R5cGVNaXNtYXRjaCcsXG4gICd2YWx1ZU1pc3NpbmcnLFxuXTtcblxuLyoqXG4gKiBDdXN0b20gdmFsaWRhdG9yIGZvciB0aGUgYEBvcGVuLXdjL2Zvcm0tY29udHJvbGAgdGhhdCBsZWFucyBvbiBhbiBpbnRlcm5hbFxuICogaW5wdXQgdG8gZm9yd2FyZCBuYXRpdmUgdmFsaWRhdGlvblxuICovXG5leHBvcnQgY29uc3QgaW5uZXJJbnB1dFZhbGlkYXRvcnMgPSBuYXRpdmVWYWxpZGl0eVN0YXRlcy5tYXAoKGtleSkgPT4gKHtcbiAga2V5LFxuICBpc1ZhbGlkKGluc3RhbmNlOiBIVE1MRWxlbWVudCAmIHsgdmFsaWRhdGlvblRhcmdldDogSFRNTElucHV0RWxlbWVudCB9KSB7XG4gICAgaWYgKGluc3RhbmNlLnZhbGlkYXRpb25UYXJnZXQpIHtcbiAgICAgIHJldHVybiAhaW5zdGFuY2UudmFsaWRhdGlvblRhcmdldC52YWxpZGl0eVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbn0pKTtcbiIsICIvKipcbiAqIE5PVEU6XG4gKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGltcGxlbWVudGF0aW9uIGZvciBhbiBleHRyZW1lbHkgc2ltcGxlIGFuZCBsaWdodHdlaWdodFxuICogcmVhY3RpdmUgc29sdXRpb24gbG9vc2VseSBiYXNlZCBvbiBzb2xpZC1qcyBzdHlsZSBzaWduYWxzLiBJdCBlbmFibGVzIGJhc2ljXG4gKiByZWFjdGl2ZSBzdWJzY3JpcHRpb25zIGFuZCBjb21wdXRlZCBzaWduYWxzIG9mIG9uZSBvciBtb3JlIG90aGVyIGRlcGVuZGVuY3kgc2lnbmFscy5cbiAqXG4gKiBJbiBpdHMgY3VycmVudCBzdGF0ZSwgaXQgaXMgbm90IHBlcmZlY3QgYW5kIGRvZXMgbm90IGhhbmRsZSBhbGwgZWRnZSBjYXNlcy4gRm9yXG4gKiBleGFtcGxlLCBpZiB5b3UgaGF2ZSBtdWx0aXBsZSBsYXllcnMgb2YgY29tcHV0ZWQgc3RhdGUgd2l0aCBhIHNpbmdsZSBkZXBlbmRlbmN5XG4gKiBzaGFyZWQgbW9yZSB0aGFuIG9uY2UgYWNyb3NzIHRob3NlIGxheWVycywgdGhlIHNhbWUgY2hhbmdlIHdpbGwgcG90ZW50aWFsbHkgYmVcbiAqIGVtaXR0ZWQgdHdpY2UuIE91ciBleHBlY3RhdGlvbiBhdG0sIGlzIHRoYXQgd2Ugd29uJ3QgZW5jb3VudGVyIHRob3NlIHNjZW5hcmlvc1xuICogaW4gdGhpcyBsaWJyYXJ5LlxuICovXG5cbi8qKiBVbnN1YnNjcmliZXMgZnJvbSB2YWx1ZSB1cGRhdGVzLiAqL1xuZXhwb3J0IHR5cGUgVW5zdWJzY3JpYmVyID0gKCkgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBTaWduYWw8VD4ge1xuICAvKiogR2V0IHRoZSBjdXJyZW50IHZhbHVlICovXG4gIGdldCgpOiBUO1xuXG4gIC8qKiBTZXQgcmVhY3RpdmUgdmFsdWUgKi9cbiAgc2V0KHZhbHVlOiBUKTtcblxuICAvKiogVXBkYXRlIHJlYWN0aXZlIHZhbHVlIHVzaW5nIGNhbGxiYWNrICovXG4gIHVwZGF0ZShmbjogKHZhbHVlOiBUKSA9PiBUKTtcblxuICAvKiogU3Vic2NyaWJlIHRvIHJlYWN0aXZlIHZhbHVlIGNoYW5nZXMgKi9cbiAgc3Vic2NyaWJlKGZuOiAodmFsdWU6IFQsIHVuc3Vic2NyaWJlPzogVW5zdWJzY3JpYmVyKSA9PiB2b2lkKTogVW5zdWJzY3JpYmVyO1xufVxuXG5jb25zdCBjb250ZXh0ID0gW107XG5cbmZ1bmN0aW9uIF9zdWJzY3JpYmUocnVubmluZywgc3Vic2NyaXB0aW9ucykge1xuICBzdWJzY3JpcHRpb25zLmFkZChydW5uaW5nKTtcbiAgcnVubmluZy5kZXBlbmRlbmNpZXMuYWRkKHN1YnNjcmlwdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjbGVhbnVwKHJ1bm5pbmcpIHtcbiAgZm9yIChjb25zdCBkZXAgb2YgcnVubmluZy5kZXBlbmRlbmNpZXMpIHtcbiAgICBkZXAuZGVsZXRlKHJ1bm5pbmcpO1xuICB9XG4gIHJ1bm5pbmcuZGVwZW5kZW5jaWVzLmNsZWFyKCk7XG59XG5cbi8qKiBDcmVhdGUgYSBzaWduYWwgdGhhdCBhbGxvd3MgYm90aCB1cGRhdGluZyBhbmQgcmVhZGluZyBieSBnZXR0ZXIgb3Igc3Vic2NyaXB0aW9uLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hbDxUPih2YWx1ZT86IFQpIHtcbiAgY29uc3Qgc3Vic2NyaXB0aW9ucyA9IG5ldyBTZXQ8YW55PigpO1xuXG4gIGNvbnN0IGdldCA9ICgpOiBUID0+IHtcbiAgICBjb25zdCBydW5uaW5nID0gY29udGV4dFtjb250ZXh0Lmxlbmd0aCAtIDFdO1xuICAgIGlmIChydW5uaW5nKSBfc3Vic2NyaWJlKHJ1bm5pbmcsIHN1YnNjcmlwdGlvbnMpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCBzZXQgPSAobmV4dFZhbHVlOiBUKSA9PiB7XG4gICAgdmFsdWUgPSBuZXh0VmFsdWU7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgWy4uLnN1YnNjcmlwdGlvbnNdKSB7XG4gICAgICBzdWIuZXhlY3V0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGUgPSAoZm46ICh2YWx1ZTogVCkgPT4gVCkgPT4ge1xuICAgIHZhbHVlID0gZm4odmFsdWUpO1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIFsuLi5zdWJzY3JpcHRpb25zXSkge1xuICAgICAgc3ViLmV4ZWN1dGUoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVGhpcyBpcyBlc3NlbnRpYWxseSBhIHVzZUVmZmVjdCBtYXNxdWVyYWRpbmcgYXMgYSBzdWJzY3JpYmUgZnVuY3Rpb25cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGZuOiAodmFsdWU6IFQsIHVuc3Vic2NyaWJlPzogVW5zdWJzY3JpYmVyKSA9PiB2b2lkKTogVW5zdWJzY3JpYmVyID0+IHtcbiAgICBjb25zdCBleGVjdXRlID0gKCkgPT4ge1xuICAgICAgY2xlYW51cChydW5uaW5nKTtcbiAgICAgIGNvbnRleHQucHVzaChydW5uaW5nKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKHJ1bm5pbmcuZ2V0KCksICgpID0+IGNsZWFudXAocnVubmluZykpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgY29udGV4dC5wb3AoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoKSA9PiBjbGVhbnVwKHJ1bm5pbmcpO1xuICAgIH07XG5cbiAgICBjb25zdCBydW5uaW5nID0ge1xuICAgICAgZXhlY3V0ZSxcbiAgICAgIGRlcGVuZGVuY2llczogbmV3IFNldCgpLFxuICAgICAgZ2V0LFxuICAgIH07XG5cbiAgICByZXR1cm4gZXhlY3V0ZSgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0LFxuICAgIHNldCxcbiAgICB1cGRhdGUsXG4gICAgc3Vic2NyaWJlLFxuICB9IGFzIFNpZ25hbDxUPjtcbn1cblxuLyoqIE9uZSBvciBtb3JlIGBTaWduYWxgcyAqL1xudHlwZSBTaWduYWxzID0gU2lnbmFsPGFueT4gfCBbU2lnbmFsPGFueT4sIC4uLkFycmF5PFNpZ25hbDxhbnk+Pl0gfCBTaWduYWw8YW55PltdO1xuXG4vKiogT25lIG9yIG1vcmUgdmFsdWVzIGZyb20gc2lnbmFscyAqL1xuZXhwb3J0IHR5cGUgU2lnbmFsVmFsdWVzPFQ+ID0gVCBleHRlbmRzIFNpZ25hbDxpbmZlciBVPlxuICA/IFVcbiAgOiB7IFtLIGluIGtleW9mIFRdOiBUW0tdIGV4dGVuZHMgU2lnbmFsPGluZmVyIFU+ID8gVSA6IG5ldmVyIH07XG5cbi8qKiBDcmVhdGUgYSBuZXcgY29tcHV0ZWQgc2lnbmFsIGZyb20gb25lIG9yIG1vcmUgc2lnbmFsIGRlcGVuZGVuY2llcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkPEQgZXh0ZW5kcyBTaWduYWxzLCBUPihcbiAgZGVwZW5kZW5jaWVzOiBELFxuICBmbjogKHZhbHVlczogU2lnbmFsVmFsdWVzPEQ+KSA9PiBUXG4pOiBTaWduYWw8VD47XG5cbi8qKiBDcmVhdGUgYSBuZXcgY29tcHV0ZWQgc2lnbmFsIGZyb20gb25lIG9yIG1vcmUgc2lnbmFsIGRlcGVuZGVuY2llcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkPEQgZXh0ZW5kcyBTaWduYWxzLCBUPihcbiAgZGVwZW5kZW5jaWVzOiBELFxuICBmbj86ICh2YWx1ZXM6IFNpZ25hbFZhbHVlczxEPiwgc2V0PzogKHZhbHVlOiBhbnkpID0+IHZvaWQpID0+IFRcbik6IFNpZ25hbDx1bmtub3duPjtcblxuLyoqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCBzaWduYWwgZnJvbSBvbmUgb3IgbW9yZSBzaWduYWwgZGVwZW5kZW5jaWVzICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQ8RCBleHRlbmRzIFNpZ25hbHM+KFxuICBkZXBlbmRlbmNpZXM6IEQsXG4gIGZuPzogKC4uLnBhcmFtczogYW55W10pID0+IGFueVxuKTogU2lnbmFsPGFueT4ge1xuICBjb25zdCBhdXRvID0gZm4ubGVuZ3RoIDwgMjtcbiAgY29uc3QgcyA9IHNpZ25hbDxhbnk+KCk7XG4gIGNvbnN0IHNpbmdsZSA9ICFBcnJheS5pc0FycmF5KGRlcGVuZGVuY2llcyk7XG4gIGNvbnN0IGRlcHMgPSBzaW5nbGVcbiAgICA/IChbZGVwZW5kZW5jaWVzXSBhcyBTaWduYWw8U2lnbmFsVmFsdWVzPEQ+PltdKVxuICAgIDogKGRlcGVuZGVuY2llcyBhcyBTaWduYWw8U2lnbmFsVmFsdWVzPEQ+PltdKTtcblxuICAvLyBXZSBvbmx5IG5lZWQgdG8gc3Vic2NyaWJlIHRvIHRoZSBmaXJzdCBpdGVtIGJlY2F1c2VcbiAgLy8gdGhlIGFjdCBvZiByZXRyaWV2aW5nIGFsbCBkZXBlbmRlbmN5IHZhbHVlcyB3aWxsIGFkZCB0aGVtXG4gIC8vIHRvIHRoZSBjb250ZXh0IHN0YWNrIGFwcHJvcHJpYXRlbHlcbiAgY29uc3QgZGVwID0gZGVwc1swXTtcbiAgZGVwLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgY29uc3QgdmFsdWVzID0gZGVwcy5tYXAoKGRlcCkgPT4gZGVwLmdldCgpKTtcbiAgICBjb25zdCByZXQgPSBzaW5nbGUgPyB2YWx1ZXNbMF0gOiAodmFsdWVzIGFzIFNpZ25hbFZhbHVlczxEPik7XG4gICAgaWYgKGF1dG8pIHtcbiAgICAgIHMuc2V0KGZuKHJldCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbihyZXQsIHMuc2V0KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcztcbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSB3Yy9uby1zZWxmLWNsYXNzICovXG5pbXBvcnQgeyBjb25maWcsIHNlbGVjdG9yRmFjdG9yeSB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzLCBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IE10ZUVsZW1lbnQgfSBmcm9tICcuL210ZS5lbGVtZW50JztcbmltcG9ydCB7IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9IGZyb20gJy4uL2F0dHJpYnV0ZS1jb252ZXJ0ZXInO1xuXG5leHBvcnQgdHlwZSBTcGFjaW5nVmFsdWUgPVxuICB8IG51bWJlclxuICB8IHN0cmluZ1xuICB8IDFcbiAgfCAyXG4gIHwgM1xuICB8IDRcbiAgfCA1XG4gIHwgNlxuICB8ICdub25lJ1xuICB8ICd4cydcbiAgfCAnc20nXG4gIHwgJ21kJ1xuICB8ICdsZydcbiAgfCAneGwnXG4gIHwgJ3h4bCdcbiAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFVuaXRWYWx1ZSA9IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgQm9yZGVyUmFkaXVzVmFsdWUgPVxuICB8ICdub25lJ1xuICB8ICd4cydcbiAgfCAnc20nXG4gIHwgJ21kJ1xuICB8ICdsZydcbiAgfCAneGwnXG4gIHwgJ3h4bCdcbiAgfCAnZnVsbCdcbiAgfCBzdHJpbmdcbiAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIEJvcmRlcldpZHRoVmFsdWUgPSAnbm9uZScgfCAnc20nIHwgJ21kJyB8ICdsZycgfCBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIE9wYWNpdHlWYWx1ZSA9XG4gIHwgJ3h4eHMnXG4gIHwgJ3h4cydcbiAgfCAneHMnXG4gIHwgJ3NtJ1xuICB8ICdtZCdcbiAgfCAnbGcnXG4gIHwgJ3hsJ1xuICB8ICd4eGwnXG4gIHwgc3RyaW5nXG4gIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBSZXNwb25zaXZlVmFsdWU8VD4gPSBUIHwgUGFydGlhbDxSZWNvcmQ8J3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJywgVD4+O1xuXG5jb25zdCBkZWZhdWx0Qm9yZGVyRmFjdG9yeSA9ICh3aWR0aD8sIGNvbG9yPywgc3R5bGU/KSA9PlxuICBgJHtzdHlsZSA/PyAnc29saWQnfSAke1xuICAgIGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kcyhbXG4gICAgICB7IHByb3A6ICdib3JkZXJXaWR0aCcsIHZhbHVlOiBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKHdpZHRoID8/ICcxcHgnKSB9LFxuICAgIF0pWzBdPy52YWx1ZVxuICB9ICR7ZG90U3RyaW5nVG9Db25maWdWYWx1ZShjb2xvcikgPz8gY29uZmlnLmNvbG9yLmJvcmRlcjF9YDtcblxuZXhwb3J0IGNsYXNzIE10ZUNvbnRlbnRCYXNlIGV4dGVuZHMgTXRlRWxlbWVudCB7XG4gIC8vIC0tIFNwYWNpbmcgUHJvcHMgLS1cblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tcmlnaHRgIGFuZCBgbWFyZ2luLWxlZnRgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBteD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXRvcGAgYW5kIGBtYXJnaW4tYm90dG9tYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbXk/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi10b3BgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbXQ/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi1yaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtcj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLWJvdHRvbWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtYj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLWxlZnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWw/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmdgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1yaWdodGAgYW5kIGBwYWRkaW5nLWxlZnRgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBweD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy10b3BgIGFuZCBgcGFkZGluZy1ib3R0b21gIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBweT86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy10b3BgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcHQ/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctcmlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcHI/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctYm90dG9tYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHBiPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLWxlZnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcGw/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvLyAtLSBQb3NpdGlvbmluZyBQcm9wcyAtLVxuXG4gIC8qKiBTZXRzIHRoZSBgZGlzcGxheWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBkPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnYmxvY2snXG4gICAgfCAnaW5saW5lLWJsb2NrJ1xuICAgIHwgJ2ZsZXgnXG4gICAgfCAnaW5saW5lLWZsZXgnXG4gICAgfCAnZ3JpZCdcbiAgICB8ICdpbmxpbmUtZ3JpZCdcbiAgICB8ICdpbmxpbmUnXG4gICAgfCAnbGlzdC1pdGVtJ1xuICAgIHwgJ25vbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24taXRlbXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2Jhc2VsaW5lJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGFsaWduLWl0ZW1zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGFsaWduSXRlbXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdiYXNlbGluZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1zZWxmYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGFsaWduU2VsZj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2F1dG8nXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnYmFzZWxpbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24tY29udGVudGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBhbGlnbkNvbnRlbnQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIHwgJ3NwYWNlLWFyb3VuZCdcbiAgICB8ICdzcGFjZS1ldmVubHknXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1jb250ZW50YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGo/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3BhY2UtYmV0d2VlbidcbiAgICB8ICdzcGFjZS1hcm91bmQnXG4gICAgfCAnc3BhY2UtZXZlbmx5J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGp1c3RpZnktY29udGVudGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBqdXN0aWZ5Q29udGVudD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIHwgJ3NwYWNlLWFyb3VuZCdcbiAgICB8ICdzcGFjZS1ldmVubHknXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1pdGVtc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBqdXN0aWZ5SXRlbXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2xlZnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdyaWdodCdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LXNlbGZgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkganVzdGlmeVNlbGY/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ2xlZnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdyaWdodCdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGZsZXg6IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1kaXJlY3Rpb25gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZGlyZWN0aW9uPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdyb3cnIHwgJ3Jvd1JldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uUmV2ZXJzZScgfCAnaW5pdGlhbCcgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtZGlyZWN0aW9uYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhEaXJlY3Rpb24/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3JvdycgfCAncm93UmV2ZXJzZScgfCAnY29sdW1uJyB8ICdjb2x1bW5SZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1iYXNpc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBiYXNpcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtYmFzaXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleEJhc2lzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1ncm93YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyb3c/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWdyb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleEdyb3c/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXNocmlua2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBzaHJpbms/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXNocmlua2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4U2hyaW5rPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC13cmFwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIHdyYXA/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ25vd3JhcCcgfCAnd3JhcCcgfCAnd3JhcC1yZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC13cmFwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhXcmFwPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdub3dyYXAnIHwgJ3dyYXAnIHwgJ3dyYXAtcmV2ZXJzZScgfCAnaW5pdGlhbCcgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYG9yZGVyYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIG9yZGVyPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ2FwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdhcD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgY29sdW1uLWdhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBjb2x1bW5HYXA/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHJvdy1nYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcm93R2FwPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWNvbHVtbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQ29sdW1uPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1yb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZFJvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXV0by1mbG93YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRBdXRvRmxvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAncm93JyB8ICdjb2x1bW4nIHwgJ2RlbnNlJyB8ICdyb3cgZGVuc2UnIHwgJ2NvbHVtbiBkZW5zZSdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXV0by1jb2x1bW5zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRBdXRvQ29sdW1ucz86IFJlc3BvbnNpdmVWYWx1ZTwnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWF1dG8tcm93c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQXV0b1Jvd3M/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgJ2F1dG8nIHwgJ21heC1jb250ZW50JyB8ICdtaW4tY29udGVudCcgfCBVbml0VmFsdWVcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtdGVtcGxhdGUtY29sdW1uc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBncmlkVGVtcGxhdGVDb2x1bW5zPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgICdub25lJyB8ICdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXRlbXBsYXRlLXJvd3NgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZFRlbXBsYXRlUm93cz86IFJlc3BvbnNpdmVWYWx1ZTwnbm9uZScgfCAnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXRlbXBsYXRlLWFyZWFzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRUZW1wbGF0ZUFyZWFzPzogUmVzcG9uc2l2ZVZhbHVlPCdub25lJyB8IHN0cmluZyB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWFyZWFgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZEFyZWE/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLy8gLS0gU2l6aW5nIFByb3BzIC0tXG5cbiAgLyoqIFNldHMgdGhlIGB3aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSB3PzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXgtd2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWF4dz86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWluLXdpZHRoYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1pbnc/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGhlaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBoPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXgtaGVpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1heGg/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1pbi1oZWlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWluaD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYmFja2dyb3VuZGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gQ2FuIGJlIHBhc3NlZCBkb3Qgbm90YXRlZCB0aGVtZSBjb25maWcgc3RyaW5ncyB0byBzZWxlY3QgY29sb3IgdG9rZW4gdmFsdWVzLiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBiZz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGNvbG9yYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiBDYW4gYmUgcGFzc2VkIGRvdCBub3RhdGVkIHRoZW1lIGNvbmZpZyBzdHJpbmdzIHRvIHNlbGVjdCBjb2xvciB0b2tlbiB2YWx1ZXMuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItY29sb3JgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuIENhbiBiZSBwYXNzZWQgZG90IG5vdGF0ZWQgdGhlbWUgY29uZmlnIHN0cmluZ3MgdG8gc2VsZWN0IGNvbG9yIHRva2VuIHZhbHVlcy4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYm9yZGVyQ29sb3I/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItd2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlcldpZHRoPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlcldpZHRoVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXN0eWxlYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBib3JkZXJTdHlsZT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAnc29saWQnIHwgJ2RvdHRlZCcgfCAnZGFzaGVkJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXI/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJUb3A/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItcmlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclJpZ2h0PzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tPzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWxlZnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckxlZnQ/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItcmFkaXVzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcFJpZ2h0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3AtbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcExlZnRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNgIGFuZCBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJUb3BSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNgIGFuZCBgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyUmlnaHRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNgIGFuZCBgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJCb3R0b21SYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c2AgYW5kIGBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckxlZnRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbGluZS1oZWlnaHRgIGNzcyBwcm9wZXJ0eSAgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgbGluZUhlaWdodD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCBudW1iZXJcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZvbnQtd2VpZ2h0YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZm9udFdlaWdodD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2xpZ2h0J1xuICAgIHwgJ3JlZ3VsYXInXG4gICAgfCAnbWVkaXVtJ1xuICAgIHwgJ2xpZ2h0ZXInXG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ2JvbGQnXG4gICAgfCAnYm9sZGVyJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgICB8ICcxMDAnXG4gICAgfCAnMjAwJ1xuICAgIHwgJzMwMCdcbiAgICB8ICc0MDAnXG4gICAgfCAnNTAwJ1xuICAgIHwgJzYwMCdcbiAgICB8ICc3MDAnXG4gICAgfCAnODAwJ1xuICAgIHwgJzkwMCdcbiAgPjtcblxuICAvKiogU2hvcnRoYW5kIGZvciBgZm9udFdlaWdodGAuIFNldHMgdGhlIGBmb250LXdlaWdodGAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZ3PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnbGlnaHQnXG4gICAgfCAncmVndWxhcidcbiAgICB8ICdtZWRpdW0nXG4gICAgfCAnbGlnaHRlcidcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnYm9sZCdcbiAgICB8ICdib2xkZXInXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICAgIHwgJzEwMCdcbiAgICB8ICcyMDAnXG4gICAgfCAnMzAwJ1xuICAgIHwgJzQwMCdcbiAgICB8ICc1MDAnXG4gICAgfCAnNjAwJ1xuICAgIHwgJzcwMCdcbiAgICB8ICc4MDAnXG4gICAgfCAnOTAwJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZm9udC1zaXplYCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZm9udFNpemU/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgVW5pdFZhbHVlIHwgJ3h4cycgfCAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnXG4gID47XG5cbiAgLyoqIFNob3J0aGFuZCBmb3IgYGZvbnRTaXplYC4gU2V0cyB0aGUgYGZvbnQtc2l6ZWAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8IFVuaXRWYWx1ZSB8ICd4eHMnIHwgJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZm9udC1mYW1pbHlgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmb250RmFtaWx5PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdzYW5zJyB8ICdzZXJpZicgfCAnbW9ubycgfCBzdHJpbmdcbiAgPjtcblxuICAvKiogU2hvcnRoYW5kIGZvciBgb3BhY2l0eWAuIFNldHMgdGhlIGBvcGFjaXR5YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgb3BhY2l0eT86IFJlc3BvbnNpdmVWYWx1ZTxPcGFjaXR5VmFsdWU+O1xuXG4gIC8qKiBBcHBsaWVzIE1vcnRhciBzdGFuZGFyZCBib3gtc2hhZG93IHZhbHVlcyAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBlbGV2YXRpb24/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgJ3owJyB8ICd6MScgfCAnejInIHwgJ3ozJyB8ICd6NCdcbiAgPjtcblxuICAvKiogQWRqdXN0IHRoaXMgZWxlbWVudHMgYmxlZWQgaWYgaXQgaXMgYSBkaXJlY3QgZGVzY2VuZGFudCBvZiBhbiBtdGUtbGF5b3V0LWNvbnRhaW5lciAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGxheW91dEJsZWVkPzogJ2Z1bGwnIHwgJ3BvcG91dCcgfCAnY29udGVudCcgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhpcyBlbGVtZW50IGFzIGEgc3ViZ3JpZCB3aGVuIHNldC4gYGRpc3BsYXlgIGlzIHNldCB0byBgZ3JpZGAgYW5kIGBncmlkLXRlbXBsYXRlLWNvbHVtbnNgIGlzIHNldCB0byBgc3ViZ3JpZGAuXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgc3ViZ3JpZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIHNlbGVjdG9yIHRvIGhhdmUgaW5zdGFuY2Ugc3R5bGVzIHRhcmdldCBhIHNwZWNpZmljIGlubmVyIGVsZW1lbnQuXG4gICAqIFVzZWZ1bCBpbiBzcGVjaWZpYyBzY2VuYXJpb3Mgd2hlcmUgdGhlIHByaW1hcnkgY29udGVudC9zbG90IHdyYXBwZWQgd2l0aGluIHRoZSB0ZW1wbGF0ZVxuICAgKiBsaWtlIHdpdGggdGhlIG1vZGFsIGNvbXBvbmVudC5cbiAgICovXG4gIHByb3RlY3RlZCBjb250ZW50U3R5bGVTZWxlY3RvclJvb3QgPSAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0JztcblxuICAvLyBMaXN0IG9mIHByb3BzIGZvciBvcHRpbWFsIHN0eWxlIHVwZGF0ZSBjaGVja2luZ1xuICBwcml2YXRlIHN0YXRpYyBjb250ZW50UHJvcHMgPSBuZXcgU2V0KFtcbiAgICAnbScsXG4gICAgJ214JyxcbiAgICAnbXknLFxuICAgICdtdCcsXG4gICAgJ21yJyxcbiAgICAnbWInLFxuICAgICdtbCcsXG4gICAgJ3AnLFxuICAgICdweCcsXG4gICAgJ3B5JyxcbiAgICAncHQnLFxuICAgICdwcicsXG4gICAgJ3BiJyxcbiAgICAncGwnLFxuICAgICdkJyxcbiAgICAnYScsXG4gICAgJ2onLFxuICAgICdiYXNpcycsXG4gICAgJ3NocmluaycsXG4gICAgJ2dyb3cnLFxuICAgICdkaXJlY3Rpb24nLFxuICAgICd3cmFwJyxcbiAgICAnYWxpZ25JdGVtcycsXG4gICAgJ2FsaWduU2VsZicsXG4gICAgJ2FsaWduQ29udGVudCcsXG4gICAgJ2p1c3RpZnlDb250ZW50JyxcbiAgICAnanVzdGlmeUl0ZW1zJyxcbiAgICAnanVzdGlmeVNlbGYnLFxuICAgICdmbGV4JyxcbiAgICAnZmxleERpcmVjdGlvbicsXG4gICAgJ2ZsZXhCYXNpcycsXG4gICAgJ2ZsZXhTaHJpbmsnLFxuICAgICdmbGV4R3JvdycsXG4gICAgJ2ZsZXhXcmFwJyxcbiAgICAnb3JkZXInLFxuICAgICdnYXAnLFxuICAgICdjb2x1bW5HYXAnLFxuICAgICdyb3dHYXAnLFxuICAgICdncmlkQ29sdW1uJyxcbiAgICAnZ3JpZFJvdycsXG4gICAgJ2dyaWRBdXRvRmxvdycsXG4gICAgJ2dyaWRBdXRvQ29sdW1ucycsXG4gICAgJ2dyaWRBdXRvUm93cycsXG4gICAgJ2dyaWRUZW1wbGF0ZUNvbHVtbnMnLFxuICAgICdncmlkVGVtcGxhdGVSb3dzJyxcbiAgICAnZ3JpZFRlbXBsYXRlQXJlYXMnLFxuICAgICdncmlkQXJlYScsXG4gICAgJ3cnLFxuICAgICdtYXh3JyxcbiAgICAnbWludycsXG4gICAgJ2gnLFxuICAgICdtYXhoJyxcbiAgICAnbWluaCcsXG4gICAgJ2JnJyxcbiAgICAnYycsXG4gICAgJ2JvcmRlckNvbG9yJyxcbiAgICAnYm9yZGVyV2lkdGgnLFxuICAgICdib3JkZXJTdHlsZScsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvcmRlclRvcCcsXG4gICAgJ2JvcmRlclJpZ2h0JyxcbiAgICAnYm9yZGVyQm90dG9tJyxcbiAgICAnYm9yZGVyTGVmdCcsXG4gICAgJ2JvcmRlclJhZGl1cycsXG4gICAgJ2JvcmRlclRvcFJpZ2h0UmFkaXVzJyxcbiAgICAnYm9yZGVyVG9wTGVmdFJhZGl1cycsXG4gICAgJ2JvcmRlckJvdHRvbVJpZ2h0UmFkaXVzJyxcbiAgICAnYm9yZGVyQm90dG9tTGVmdFJhZGl1cycsXG4gICAgJ2JvcmRlclRvcFJhZGl1cycsXG4gICAgJ2JvcmRlclJpZ2h0UmFkaXVzJyxcbiAgICAnYm9yZGVyQm90dG9tUmFkaXVzJyxcbiAgICAnYm9yZGVyTGVmdFJhZGl1cycsXG4gICAgJ2xpbmVIZWlnaHQnLFxuICAgICdmb250V2VpZ2h0JyxcbiAgICAnZncnLFxuICAgICdmb250U2l6ZScsXG4gICAgJ2ZzJyxcbiAgICAnZm9udEZhbWlseScsXG4gICAgJ29wYWNpdHknLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdsYXlvdXRCbGVlZCcsXG4gICAgJ3N1YmdyaWQnLFxuICBdKTtcblxuICBwcm90ZWN0ZWQgdXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzOiBNYXA8c3RyaW5nLCBhbnk+KSB7XG4gICAgc3VwZXIudXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKTtcblxuICAgIC8vIENoZWNrIGlmIGFueSBjb250ZW50IHByb3AgaGFzIGNoYW5nZWQgdG8gZGV0ZXJtaW5lIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBpbnN0YW5jZSBzdHlsZXNcbiAgICBsZXQgc2hvdWxkVXBkYXRlU3R5bGVzID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgY2hhbmdlZFByb3BzLmtleXMoKSkge1xuICAgICAgaWYgKE10ZUNvbnRlbnRCYXNlLmNvbnRlbnRQcm9wcy5oYXMoa2V5KSkge1xuICAgICAgICBzaG91bGRVcGRhdGVTdHlsZXMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkVXBkYXRlU3R5bGVzKSB7XG4gICAgICAvLyBEb3VibGUgdGhlIGA6aG9zdGAgc2VsZWN0b3IgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgYmV5b25kIG1vc3QgY29tcG9uZW50IGxldmVsIHN0eWxlcyBieSBkZWZhdWx0XG4gICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoJ2NvbnRlbnQtYmFzZScsIHNlbGVjdG9yRmFjdG9yeSh0aGlzLmNvbnRlbnRTdHlsZVNlbGVjdG9yUm9vdCksIHtcbiAgICAgICAgLy8gU3BhY2luZ1xuICAgICAgICBtOiB0aGlzLm0sXG4gICAgICAgIG14OiB0aGlzLm14LFxuICAgICAgICBteTogdGhpcy5teSxcbiAgICAgICAgbXQ6IHRoaXMubXQsXG4gICAgICAgIG1yOiB0aGlzLm1yLFxuICAgICAgICBtYjogdGhpcy5tYixcbiAgICAgICAgbWw6IHRoaXMubWwsXG4gICAgICAgIHA6IHRoaXMucCxcbiAgICAgICAgcHg6IHRoaXMucHgsXG4gICAgICAgIHB5OiB0aGlzLnB5LFxuICAgICAgICBwdDogdGhpcy5wdCxcbiAgICAgICAgcHI6IHRoaXMucHIsXG4gICAgICAgIHBiOiB0aGlzLnBiLFxuICAgICAgICBwbDogdGhpcy5wbCxcbiAgICAgICAgLy8gUG9zaXRpb25pbmdcbiAgICAgICAgZDogdGhpcy5zdWJncmlkID8gJ2dyaWQnIDogdGhpcy5kLFxuICAgICAgICBhbGlnbkl0ZW1zOiB0aGlzLmEgPz8gdGhpcy5hbGlnbkl0ZW1zLFxuICAgICAgICBhbGlnblNlbGY6IHRoaXMuYWxpZ25TZWxmLFxuICAgICAgICBhbGlnbkNvbnRlbnQ6IHRoaXMuYWxpZ25Db250ZW50LFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogdGhpcy5qID8/IHRoaXMuanVzdGlmeUNvbnRlbnQsXG4gICAgICAgIGp1c3RpZnlJdGVtczogdGhpcy5qdXN0aWZ5SXRlbXMsXG4gICAgICAgIGp1c3RpZnlTZWxmOiB0aGlzLmp1c3RpZnlTZWxmLFxuICAgICAgICBmbGV4OiB0aGlzLmZsZXgsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uID8/IHRoaXMuZmxleERpcmVjdGlvbixcbiAgICAgICAgZmxleEJhc2lzOiB0aGlzLmJhc2lzID8/IHRoaXMuZmxleEJhc2lzLFxuICAgICAgICBmbGV4U2hyaW5rOiB0aGlzLnNocmluayA/PyB0aGlzLmZsZXhTaHJpbmssXG4gICAgICAgIGZsZXhHcm93OiB0aGlzLmdyb3cgPz8gdGhpcy5mbGV4R3JvdyxcbiAgICAgICAgZmxleFdyYXA6IHRoaXMud3JhcCA/PyB0aGlzLmZsZXhXcmFwLFxuICAgICAgICBvcmRlcjogdGhpcy5vcmRlcixcbiAgICAgICAgZ2FwOiB0aGlzLmdhcCxcbiAgICAgICAgY29sdW1uR2FwOiB0aGlzLmNvbHVtbkdhcCxcbiAgICAgICAgcm93R2FwOiB0aGlzLnJvd0dhcCxcbiAgICAgICAgZ3JpZENvbHVtbjogdGhpcy5sYXlvdXRCbGVlZCA/IHRoaXMubGF5b3V0QmxlZWQgOiB0aGlzLmdyaWRDb2x1bW4sXG4gICAgICAgIGdyaWRSb3c6IHRoaXMuZ3JpZFJvdyxcbiAgICAgICAgZ3JpZEF1dG9GbG93OiB0aGlzLmdyaWRBdXRvRmxvdyxcbiAgICAgICAgZ3JpZEF1dG9Db2x1bW5zOiB0aGlzLmdyaWRBdXRvQ29sdW1ucyxcbiAgICAgICAgZ3JpZEF1dG9Sb3dzOiB0aGlzLmdyaWRBdXRvUm93cyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogdGhpcy5zdWJncmlkID8gJ3N1YmdyaWQnIDogdGhpcy5ncmlkVGVtcGxhdGVDb2x1bW5zLFxuICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiB0aGlzLmdyaWRUZW1wbGF0ZVJvd3MsXG4gICAgICAgIGdyaWRUZW1wbGF0ZUFyZWFzOiB0aGlzLmdyaWRUZW1wbGF0ZUFyZWFzLFxuICAgICAgICBncmlkQXJlYTogdGhpcy5ncmlkQXJlYSxcbiAgICAgICAgLy8gU2l6aW5nXG4gICAgICAgIHc6IHRoaXMudyxcbiAgICAgICAgbWF4dzogdGhpcy5tYXh3LFxuICAgICAgICBtaW53OiB0aGlzLm1pbncsXG4gICAgICAgIGg6IHRoaXMuaCxcbiAgICAgICAgbWF4aDogdGhpcy5tYXhoLFxuICAgICAgICBtaW5oOiB0aGlzLm1pbmgsXG4gICAgICAgIC8vIENvbG9yc1xuICAgICAgICBiZzogdGhpcy5iZyxcbiAgICAgICAgYzogdGhpcy5jLFxuICAgICAgICAvLyBCb3JkZXJzXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGlzLmJvcmRlckNvbG9yLFxuICAgICAgICBib3JkZXJXaWR0aDogdGhpcy5ib3JkZXJXaWR0aCxcbiAgICAgICAgYm9yZGVyU3R5bGU6IHRoaXMuYm9yZGVyU3R5bGUsXG4gICAgICAgIGJvcmRlcjogdGhpcy5ib3JkZXJcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJUb3A6IHRoaXMuYm9yZGVyVG9wXG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm9yZGVyUmlnaHQ6IHRoaXMuYm9yZGVyUmlnaHRcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJMZWZ0OiB0aGlzLmJvcmRlckxlZnRcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJCb3R0b206IHRoaXMuYm9yZGVyQm90dG9tXG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgLy8gQm9yZGVyIFJhZGl1c1xuICAgICAgICBib3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyUmFkaXVzLFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlclRvcFJpZ2h0UmFkaXVzID8/IHRoaXMuYm9yZGVyVG9wUmFkaXVzID8/IHRoaXMuYm9yZGVyUmlnaHRSYWRpdXMsXG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJUb3BMZWZ0UmFkaXVzID8/IHRoaXMuYm9yZGVyVG9wUmFkaXVzID8/IHRoaXMuYm9yZGVyTGVmdFJhZGl1cyxcbiAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA/PyB0aGlzLmJvcmRlckJvdHRvbVJhZGl1cyA/PyB0aGlzLmJvcmRlclJpZ2h0UmFkaXVzLFxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOlxuICAgICAgICAgIHRoaXMuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA/PyB0aGlzLmJvcmRlckJvdHRvbVJhZGl1cyA/PyB0aGlzLmJvcmRlckxlZnRSYWRpdXMsXG4gICAgICAgIC8vIEZvbnRzXG4gICAgICAgIGxpbmVIZWlnaHQ6IHRoaXMubGluZUhlaWdodCxcbiAgICAgICAgZm9udFdlaWdodDogdGhpcy5mdyA/PyB0aGlzLmZvbnRXZWlnaHQsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLmZzID8/IHRoaXMuZm9udFNpemUsXG4gICAgICAgIGZvbnRGYW1pbHk6IHRoaXMuZm9udEZhbWlseSxcbiAgICAgICAgLy8gT3BhY2l0eVxuICAgICAgICBvcGFjaXR5OiB0aGlzLm9wYWNpdHksXG4gICAgICAgIC8vIEVsZXZhdGlvblxuICAgICAgICBlbGV2YXRpb246IHRoaXMuZWxldmF0aW9uLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgZGVmYXVsdENvbnZlcnRlciB9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBjb25zdCBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgPSB7XG4gIGZyb21BdHRyaWJ1dGU6ICh2YWx1ZSwgdHlwZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAodmFsdWU/LlswXSA9PT0gJ3snKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLmZyb21BdHRyaWJ1dGUodmFsdWUsIE9iamVjdCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLmZyb21BdHRyaWJ1dGUodmFsdWUsIHR5cGUpO1xuICB9LFxuICB0b0F0dHJpYnV0ZTogKHZhbHVlLCB0eXBlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLnRvQXR0cmlidXRlKHZhbHVlLCBPYmplY3QpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdENvbnZlcnRlci50b0F0dHJpYnV0ZSh2YWx1ZSwgdHlwZSk7XG4gIH0sXG59O1xuIiwgImltcG9ydCB7IERpcmVjdGl2ZVJlc3VsdCB9IGZyb20gJ2xpdC9kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHsgdW5zYWZlU1ZHLCBVbnNhZmVTVkdEaXJlY3RpdmUgfSBmcm9tICdsaXQvZGlyZWN0aXZlcy91bnNhZmUtc3ZnLmpzJztcblxuZXhwb3J0IGNvbnN0IGhlYkxvZ29TdmdDb250ZW50czogRGlyZWN0aXZlUmVzdWx0PHR5cGVvZiBVbnNhZmVTVkdEaXJlY3RpdmU+ID0gdW5zYWZlU1ZHKFxuICBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiBpZD1cIkxheWVyXzFcIiB4PVwiMFwiIHk9XCIwXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgNTM2LjI3IDE4Ni4yNFwiPjxzdHlsZT4uc3Qwe2ZpbGw6I2UxMjUxYn0uc3Qxe2ZpbGw6I2ZmZn08L3N0eWxlPjxnIGlkPVwiX3gzMV8tSEVCX01BSU5fTE9HT18wMDAwMDA5NjA0MzQwNDIwNjg2MTg4MDg3MDAwMDAwNDgxMzI0MDkzODk0Njg1NTM1NV9cIj48cGF0aCBkPVwiTTkzLjEyIDE4Ni4yNEM0MS42OSAxODYuMjQgMCAxNDQuNTUgMCA5My4xMlM0MS42OSAwIDkzLjEyIDBoMzUwLjAzYzUxLjQzIDAgOTMuMTIgNDEuNjkgOTMuMTIgOTMuMTJzLTQxLjY5IDkzLjEyLTkzLjEyIDkzLjEySDkzLjEyelwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNOTMuMTIgMTc0LjE5Yy00NC43NiAwLTgxLjA1LTM2LjI5LTgxLjA1LTgxLjA1czM2LjI5LTgxLjA1IDgxLjA1LTgxLjA1aDM1MC4wM2M0NC43NiAwIDgxLjA1IDM2LjI5IDgxLjA1IDgxLjA1cy0zNi4yOSA4MS4wNS04MS4wNSA4MS4wNUg5My4xMnpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwibTQ0NC45NCAyNC4xMS0zNTMuNjQuMDJjLTM3LjA3IDAtNjcuMiAzMC45NS02Ny4xNiA2OS4wNyAwIDM3LjkzIDMwLjE2IDY4Ljg4IDY3LjE2IDY4Ljg4bDM1My42My0uMDdjMzcuMS0uMDMgNjcuMTUtMzAuODkgNjcuMi02OC44NS0uMDQtMzguMi0zMC4wOS02OS4wNS02Ny4xOS02OS4wNXpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTIyNC4yMSAxMzIuMjNoODguMWwuNzYtMTIuOThoLTU2LjE4di0xNC44NGg0NC44MVY4OS4zM2gtNDQuODFWNzMuMjVsNTguOTItLjAxIDEuMTUtMTkuMjloLTk3LjR6TTEzMi40NiA1My45NXYzNS4zOEgxMDguNlY1My45NUg3MS4yN2w0LjY1IDc4LjI4aDMyLjY4di0yNy44MmgyMy44NnYyNy44MmgzMi42OGw0LjY1LTc4LjI4ek00NDguNTIgOTcuMDJjOS45LTIuODMgMTYuNDktOC41OSAxNi40OS0yMC42Ny4wMy0xMy44Mi0xMS4wNi0yMi40LTI1LjI5LTIyLjRoLTczLjI4bDQuNjUgNzguMjloNjQuMDZjMjcuOTggMCAyNi4zOS0xOC44IDI2LjM5LTE4LjggMC03Ljk2LTUuMzMtMTQuNjEtMTMuMDItMTYuNDJ6bS0zMS4wMiAyMi4yMmgtMTMuNzF2LTE0LjgzaDEzLjIyYzcuMjMgMCAxMS4wOSAyLjMxIDExLjA5IDcuNDguMDEgNC45NC0zLjQ5IDcuMzUtMTAuNiA3LjM1em0xLjA2LTI5LjkxaC0xNC43N1Y3My4yNWgxNC4yNWM3Ljg1IDAgMTIuMDMgMi41IDEyLjAzIDguMTEgMCA1LjM1LTMuNzkgNy45Ny0xMS41MSA3Ljk3ek0xODIuNzYgODkuMzNsLjkgMTUuMDhoMjIuMDNsLjktMTUuMDh6TTMyOS42NCA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwiTTUzMC4zNCAxNzIuNzdjMC0yLjQ2LTEuNDYtMy41NC00LjQtMy41NGgtNC43NHYxMi40NGgxLjg4di01LjM5aDIuMTdsMy4yOCA1LjM5aDIuMTFsLTMuNTQtNS40OGMxLjg0LS4yMiAzLjI0LTEuMTkgMy4yNC0zLjQyem0tNy4yNSAxLjkydi0zLjg2aDIuNTdjMS4zMSAwIDIuNzEuMjkgMi43MSAxLjgzIDAgMS45Mi0xLjQzIDIuMDMtMy4wMyAyLjAzaC0yLjI1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNNTI1LjM3IDE2NC42N2MtNS45MyAwLTEwLjk2IDQuNTctMTAuOTYgMTAuNzYgMCA2LjI0IDUuMDIgMTAuODEgMTAuOTYgMTAuODEgNS44OCAwIDEwLjktNC41NyAxMC45LTEwLjgxIDAtNi4yLTUuMDItMTAuNzYtMTAuOS0xMC43NnptMCAxOS43OGMtNC45MyAwLTguNzktMy44My04Ljc5LTkuMDIgMC01LjExIDMuODUtOC45NiA4Ljc5LTguOTYgNC44OCAwIDguNzMgMy44NSA4LjczIDguOTYgMCA1LjE5LTMuODUgOS4wMi04LjczIDkuMDJ6XCIgY2xhc3M9XCJzdDBcIi8+PC9nPjwvc3ZnPmBcbik7XG5cbmV4cG9ydCBjb25zdCBoZWJMb2dvV2hpdGVDb3B5cmlnaHRTdmdDb250ZW50czogRGlyZWN0aXZlUmVzdWx0PHR5cGVvZiBVbnNhZmVTVkdEaXJlY3RpdmU+ID1cbiAgdW5zYWZlU1ZHKFxuICAgIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIGlkPVwiTGF5ZXJfMVwiIHg9XCIwXCIgeT1cIjBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MzYuMjcgMTg2LjI0XCI+PHN0eWxlPi5zdDB7ZmlsbDojZTEyNTFifS5zdDF7ZmlsbDojZmZmfTwvc3R5bGU+PGcgaWQ9XCJfeDMxXy1IRUJfTUFJTl9MT0dPXzAwMDAwMDk2MDQzNDA0MjA2ODYxODgwODcwMDAwMDA0ODEzMjQwOTM4OTQ2ODU1MzU1X1wiPjxwYXRoIGQ9XCJNOTMuMTIgMTg2LjI0QzQxLjY5IDE4Ni4yNCAwIDE0NC41NSAwIDkzLjEyUzQxLjY5IDAgOTMuMTIgMGgzNTAuMDNjNTEuNDMgMCA5My4xMiA0MS42OSA5My4xMiA5My4xMnMtNDEuNjkgOTMuMTItOTMuMTIgOTMuMTJIOTMuMTJ6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk05My4xMiAxNzQuMTljLTQ0Ljc2IDAtODEuMDUtMzYuMjktODEuMDUtODEuMDVzMzYuMjktODEuMDUgODEuMDUtODEuMDVoMzUwLjAzYzQ0Ljc2IDAgODEuMDUgMzYuMjkgODEuMDUgODEuMDVzLTM2LjI5IDgxLjA1LTgxLjA1IDgxLjA1SDkzLjEyelwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJtNDQ0Ljk0IDI0LjExLTM1My42NC4wMmMtMzcuMDcgMC02Ny4yIDMwLjk1LTY3LjE2IDY5LjA3IDAgMzcuOTMgMzAuMTYgNjguODggNjcuMTYgNjguODhsMzUzLjYzLS4wN2MzNy4xLS4wMyA2Ny4xNS0zMC44OSA2Ny4yLTY4Ljg1LS4wNC0zOC4yLTMwLjA5LTY5LjA1LTY3LjE5LTY5LjA1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNMjI0LjIxIDEzMi4yM2g4OC4xbC43Ni0xMi45OGgtNTYuMTh2LTE0Ljg0aDQ0LjgxVjg5LjMzaC00NC44MVY3My4yNWw1OC45Mi0uMDEgMS4xNS0xOS4yOWgtOTcuNHpNMTMyLjQ2IDUzLjk1djM1LjM4SDEwOC42VjUzLjk1SDcxLjI3bDQuNjUgNzguMjhoMzIuNjh2LTI3LjgyaDIzLjg2djI3LjgyaDMyLjY4bDQuNjUtNzguMjh6TTQ0OC41MiA5Ny4wMmM5LjktMi44MyAxNi40OS04LjU5IDE2LjQ5LTIwLjY3LjAzLTEzLjgyLTExLjA2LTIyLjQtMjUuMjktMjIuNGgtNzMuMjhsNC42NSA3OC4yOWg2NC4wNmMyNy45OCAwIDI2LjM5LTE4LjggMjYuMzktMTguOCAwLTcuOTYtNS4zMy0xNC42MS0xMy4wMi0xNi40MnptLTMxLjAyIDIyLjIyaC0xMy43MXYtMTQuODNoMTMuMjJjNy4yMyAwIDExLjA5IDIuMzEgMTEuMDkgNy40OC4wMSA0Ljk0LTMuNDkgNy4zNS0xMC42IDcuMzV6bTEuMDYtMjkuOTFoLTE0Ljc3VjczLjI1aDE0LjI1YzcuODUgMCAxMi4wMyAyLjUgMTIuMDMgOC4xMSAwIDUuMzUtMy43OSA3Ljk3LTExLjUxIDcuOTd6TTE4Mi43NiA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpNMzI5LjY0IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4ek01MjguMzQgMTcwLjc3YzAtMi40Ni0xLjQ2LTMuNTQtNC40LTMuNTRoLTQuNzR2MTIuNDRoMS44OHYtNS4zOWgyLjE3bDMuMjggNS4zOWgyLjExbC0zLjU0LTUuNDhjMS44NC0uMjIgMy4yNC0xLjE5IDMuMjQtMy40MnptLTcuMjUgMS45MnYtMy44NmgyLjU3YzEuMzEgMCAyLjcxLjI5IDIuNzEgMS44MyAwIDEuOTItMS40MyAyLjAzLTMuMDMgMi4wM2gtMi4yNXpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwiTTUyMy4zNyAxNjIuNjdjLTUuOTMgMC0xMC45NiA0LjU3LTEwLjk2IDEwLjc2IDAgNi4yNCA1LjAyIDEwLjgxIDEwLjk2IDEwLjgxIDUuODggMCAxMC45LTQuNTcgMTAuOS0xMC44MSAwLTYuMi01LjAyLTEwLjc2LTEwLjktMTAuNzZ6bTAgMTkuNzhjLTQuOTMgMC04Ljc5LTMuODMtOC43OS05LjAyIDAtNS4xMSAzLjg1LTguOTYgOC43OS04Ljk2IDQuODggMCA4LjczIDMuODUgOC43MyA4Ljk2IDAgNS4xOS0zLjg1IDkuMDItOC43MyA5LjAyelwiIGNsYXNzPVwic3QxXCIvPjwvZz48L3N2Zz5gXG4gICk7XG5cbmV4cG9ydCBjb25zdCBoZWJMb2dvSW52ZXJzZVN2Z0NvbnRlbnRzOiBEaXJlY3RpdmVSZXN1bHQ8dHlwZW9mIFVuc2FmZVNWR0RpcmVjdGl2ZT4gPSB1bnNhZmVTVkcoXG4gIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIGlkPVwiTGF5ZXJfMVwiIHg9XCIwXCIgeT1cIjBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MzYuMjcgMTg2LjI0XCI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggZD1cIk00NDMuMTUgMEg5My4xMkM0MS42OSAwIDAgNDEuNjkgMCA5My4xMmMwIDUxLjQzIDQxLjY5IDkzLjEyIDkzLjEyIDkzLjEyaDM1MC4wM2M1MS40MyAwIDkzLjEyLTQxLjY5IDkzLjEyLTkzLjEyQzUzNi4yNyA0MS42OSA0OTQuNTggMCA0NDMuMTUgMHptMCAxNzQuMTlIOTMuMTJjLTQ0Ljc2IDAtODEuMDUtMzYuMjktODEuMDUtODEuMDVzMzYuMjktODEuMDUgODEuMDUtODEuMDVoMzUwLjAzYzQ0Ljc2IDAgODEuMDUgMzYuMjkgODEuMDUgODEuMDUuMDEgNDQuNzYtMzYuMjggODEuMDUtODEuMDUgODEuMDV6bS0xMy4wOC05Mi44M2MwIDUuMzYtMy43OSA3Ljk4LTExLjUxIDcuOThoLTE0Ljc3VjczLjI1aDE0LjI1YzcuODQgMCAxMi4wMyAyLjUgMTIuMDMgOC4xMXptLTEuOTYgMzAuNTNjMCA0Ljk0LTMuNSA3LjM2LTEwLjYxIDcuMzZoLTEzLjcxdi0xNC44M2gxMy4yMmM3LjI0LS4wMSAxMS4xIDIuMyAxMS4xIDcuNDd6bTE2LjgzLTg3Ljc4LTM1My42NC4wMmMtMzcuMDcgMC02Ny4yIDMwLjk1LTY3LjE2IDY5LjA3IDAgMzcuOTIgMzAuMTYgNjguODggNjcuMTYgNjguODhsMzUzLjYzLS4wN2MzNy4xLS4wMyA2Ny4xNS0zMC44OSA2Ny4yLTY4Ljg1LS4wNC0zOC4yLTMwLjA5LTY5LjA1LTY3LjE5LTY5LjA1em0tMjc5LjggMTA4LjEyaC0zMi42OHYtMjcuODJIMTA4LjZ2MjcuODJINzUuOTJsLTQuNjUtNzguMjhoMzcuMzN2MzUuMzhoMjMuODZWNTMuOTVoMzcuMzNsLTQuNjUgNzguMjh6bTQwLjU1LTI3LjgyaC0yMi4wNGwtLjktMTUuMDhoMjMuODNsLS44OSAxNS4wOHptMTEwLjEyLTMxLjE3LTU4LjkyLjAxdjE2LjA4aDQ0LjgxdjE1LjA4aC00NC44MXYxNC44M2g1Ni4xOGwtLjc2IDEyLjk5aC04OC4xbC00LjY1LTc4LjI4aDk3LjRsLTEuMTUgMTkuMjl6bTM2Ljc2IDMxLjE3aC0yMi4wNGwtLjktMTUuMDhoMjMuODNsLS44OSAxNS4wOHptMTA4Ljk3IDkuMDNzMS41OSAxOC44LTI2LjM5IDE4LjhoLTY0LjA2bC00LjY1LTc4LjI5aDczLjI4YzE0LjIzIDAgMjUuMzEgOC41OCAyNS4yOSAyMi40IDAgMTIuMDgtNi41OSAxNy44NS0xNi40OSAyMC42NyA3LjY5IDEuODEgMTMuMDIgOC40NiAxMy4wMiAxNi40MnpNNTMwLjM0IDE3Mi43N2MwLTIuNDYtMS40Ni0zLjU0LTQuNC0zLjU0aC00Ljc0djEyLjQ0aDEuODh2LTUuMzloMi4xN2wzLjI4IDUuMzloMi4xMWwtMy41NC01LjQ4YzEuODQtLjIyIDMuMjQtMS4xOSAzLjI0LTMuNDJ6bS03LjI1IDEuOTJ2LTMuODZoMi41N2MxLjMxIDAgMi43MS4yOSAyLjcxIDEuODMgMCAxLjkyLTEuNDMgMi4wMy0zLjAzIDIuMDNoLTIuMjV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk01MjUuMzcgMTY0LjY3Yy01LjkzIDAtMTAuOTYgNC41Ny0xMC45NiAxMC43NiAwIDYuMjQgNS4wMiAxMC44MSAxMC45NiAxMC44MSA1Ljg4IDAgMTAuOS00LjU3IDEwLjktMTAuODEgMC02LjItNS4wMi0xMC43Ni0xMC45LTEwLjc2em0wIDE5Ljc4Yy00LjkzIDAtOC43OS0zLjgzLTguNzktOS4wMiAwLTUuMTEgMy44NS04Ljk2IDguNzktOC45NiA0Ljg4IDAgOC43MyAzLjg1IDguNzMgOC45NiAwIDUuMTktMy44NSA5LjAyLTguNzMgOS4wMnpcIiBjbGFzcz1cInN0MFwiLz48L3N2Zz5gXG4pO1xuIiwgImltcG9ydCB0eXBlIHsgUmVhY3RpdmVDb250cm9sbGVyLCBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IFNpZ25hbCwgY29tcHV0ZWQsIGlzU3NyLCBzaWduYWwgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3RDb250cm9sbGVyT3B0aW9ucyB7XG4gIC8qKiBOYW1lcyBvZiBzbG90cyB0aGF0IHNob3VsZCB0cmlnZ2VyIGEgY29tcG9uZW50IHVwZGF0ZSBpZiBjaGFuZ2VkICovXG4gIHVwZGF0ZU9uQ2hhbmdlPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjbGFzcyBTbG90Q29udHJvbGxlciBpbXBsZW1lbnRzIFJlYWN0aXZlQ29udHJvbGxlciB7XG4gIHB1YmxpYyBzbG90Q2hhbmdlID0gc2lnbmFsPFNldDxzdHJpbmc+PihudWxsKTtcbiAgcHVibGljIG9uQ29ubmVjdGVkID0gc2lnbmFsKGZhbHNlKTtcbiAgcHVibGljIGNvbm5lY3RlZENvbXBsZXRlID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBzdWJzID0gW107XG4gIHByaXZhdGUgdXBkYXRlVHJpZ2dlclNsb3RzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGhvc3Q6IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgJiBFbGVtZW50LFxuICAgIHB1YmxpYyBvcHRpb25zOiBTbG90Q29udHJvbGxlck9wdGlvbnMgPSBudWxsXG4gICkge1xuICAgIHRoaXMuaG9zdC5hZGRDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlT25DaGFuZ2Uob3B0aW9ucz8udXBkYXRlT25DaGFuZ2UpO1xuICB9XG5cbiAgLyoqIEVtaXRzIHdoZW4gb25lIG9mIHRoZSBzcGVjaWZpZWQgc2xvdHMgaGFzIGNoYW5nZWQgYW5kIGFmdGVyIHRoZSBmaXJzdFVwZGF0ZSBhZnRlciBob3N0Q29ubmVjdGVkICovXG4gIHB1YmxpYyB3YXRjaFNsb3RzKHNsb3RzOiBzdHJpbmdbXSA9IFtdLCB7IHVwZGF0ZU9uQ29ubmVjdGVkIH0gPSB7IHVwZGF0ZU9uQ29ubmVjdGVkOiB0cnVlIH0pIHtcbiAgICBjb25zdCByZXR1cm5TaWduYWwgPSBzaWduYWw8U2V0PHN0cmluZz4+KCk7XG4gICAgdGhpcy5zdWJzLnB1c2goXG4gICAgICBjb21wdXRlZChcbiAgICAgICAgW3RoaXMub25Db25uZWN0ZWQsIHRoaXMuc2xvdENoYW5nZV0sXG4gICAgICAgIChbY29ubmVjdGVkLCBjaGFuZ2VzXTogW2Jvb2xlYW4sIFNldDxzdHJpbmc+XSwgc2V0KSA9PiB7XG4gICAgICAgICAgaWYgKHVwZGF0ZU9uQ29ubmVjdGVkICYmIGNvbm5lY3RlZCAmJiAhdGhpcy5jb25uZWN0ZWRDb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICBzZXQobmV3IFNldChzbG90cykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjaGFuZ2VzICYmXG4gICAgICAgICAgICBBcnJheS5mcm9tKGNoYW5nZXMua2V5cygpKS5zb21lKChrZXkpID0+IHNsb3RzLmxlbmd0aCA9PT0gMCB8fCBzbG90cy5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc2V0KGNoYW5nZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKS5zdWJzY3JpYmUoKGNoYW5nZXM6IFNldDxzdHJpbmc+KSA9PiB7XG4gICAgICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgICAgcmV0dXJuU2lnbmFsLnNldChjaGFuZ2VzKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybiByZXR1cm5TaWduYWwgYXMgU2lnbmFsPFNldDxzdHJpbmc+PjtcbiAgfVxuXG4gIHB1YmxpYyBjaGVjayhzbG90TmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHNsb3ROYW1lID09PSAnZGVmYXVsdCcgPyB0aGlzLmhhc0RlZmF1bHRTbG90KCkgOiB0aGlzLmhhc05hbWVkU2xvdChzbG90TmFtZSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlT25DaGFuZ2Uoc2xvdHM6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2xvdHMpKSB7XG4gICAgICBzbG90cy5mb3JFYWNoKChzbG90KSA9PiB0aGlzLnVwZGF0ZVRyaWdnZXJTbG90cy5hZGQoc2xvdCkpO1xuICAgIH0gZWxzZSBpZiAoc2xvdHMpIHtcbiAgICAgIHRoaXMudXBkYXRlVHJpZ2dlclNsb3RzLmFkZChzbG90cyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYXNEZWZhdWx0U2xvdCgpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuaG9zdC5jaGlsZE5vZGVzXS5zb21lKChub2RlKSA9PiB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5URVhUX05PREUgJiYgbm9kZS50ZXh0Q29udGVudD8udHJpbSgpICE9PSAnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGNvbnN0IGVsID0gbm9kZSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvLyBJZ25vcmUgdmlzdWFsbHkgaGlkZGVuIGVsZW1lbnRzIHNpbmNlIHRoZXkgYXJlbid0IHJlbmRlcmVkXG4gICAgICAgIGlmICh0YWdOYW1lID09PSAnbXRlLXZpc3VhbGx5LWhpZGRlbicpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBkb2Vzbid0IGhhdmUgYSBzbG90IGF0dHJpYnV0ZSwgaXQncyBwYXJ0IG9mIHRoZSBkZWZhdWx0IHNsb3RcbiAgICAgICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoJ3Nsb3QnKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzTmFtZWRTbG90KG5hbWU6IHN0cmluZykge1xuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5xdWVyeVNlbGVjdG9yKGA6c2NvcGUgPiBbc2xvdD1cIiR7bmFtZX1cIl1gKSAhPT0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2xvdENoYW5nZSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBjb25zdCBzbG90ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxTbG90RWxlbWVudDtcblxuICAgIC8vIFNldHVwIGV2ZW50IG1hcFxuICAgIGNvbnN0IGV2ZW50U2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgLy8gQWRkIGR1cGxpY2F0ZSBtYXBwaW5nIGZvciBzaW1wbGlmaWVkIGRlZmF1bHQgbmFtZVxuICAgIGlmIChzbG90Lm5hbWUgPT09ICdbZGVmYXVsdF0nIHx8IHNsb3QubmFtZSA9PT0gJycpIHtcbiAgICAgIGV2ZW50U2V0LmFkZCgnZGVmYXVsdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudFNldC5hZGQoc2xvdC5uYW1lKTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IHNsb3QgY2hhbmdlIHJlYWN0aXZlIGV2ZW50XG4gICAgdGhpcy5zbG90Q2hhbmdlLnNldChldmVudFNldCk7XG5cbiAgICAvLyBBdXRvbWF0aWNhbGx5IHJlcXVlc3QgYSBjb21wb25lbnQgdXBkYXRlIGFzIGNvbmZpZ3VyYXRpb24gZGljdGF0ZXNcbiAgICBpZiAoXG4gICAgICAodGhpcy51cGRhdGVUcmlnZ2VyU2xvdHMuaGFzKCdkZWZhdWx0JykgJiYgIXNsb3QubmFtZSkgfHxcbiAgICAgIChzbG90Lm5hbWUgJiYgdGhpcy51cGRhdGVUcmlnZ2VyU2xvdHMuaGFzKHNsb3QubmFtZSkpXG4gICAgKSB7XG4gICAgICB0aGlzLmhvc3QucmVxdWVzdFVwZGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBob3N0Q29ubmVjdGVkKCkge1xuICAgIHRoaXMuaG9zdC5zaGFkb3dSb290Py5hZGRFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgdGhpcy5oYW5kbGVTbG90Q2hhbmdlKTtcblxuICAgIC8vIFdhaXQgdW50aWwgZmlyc3QgdXBkYXRlIGFmdGVyIGNvbm5lY3RlZFxuICAgIHRoaXMuaG9zdC51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMub25Db25uZWN0ZWQuc2V0KHRydWUpO1xuICAgICAgLy8gVE9ETyhyZWVjZSk6IHJlY29uc2lkZXIgd2hlbiBhIHNvbHV0aW9uIGV4aXN0cyBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzE0MzRcbiAgICAgIC8vIElmIGFmdGVyIHRoZSBmaXJzdFVwZGF0ZSB3ZSdyZSB3YXRjaGluZyBzbG90cyByZXF1ZXN0IGFub3RoZXIgaW4gY2FzZSBzc3Itc2xvdHMgd2FzIG5vdCBwcm9wZXJseSBzZXQgYnkgdGhlIHVzZXJcbiAgICAgIGlmICh0aGlzLnVwZGF0ZVRyaWdnZXJTbG90cy5zaXplID4gMCkge1xuICAgICAgICB0aGlzLmhvc3QucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaG9zdERpc2Nvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmhvc3Quc2hhZG93Um9vdD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsIHRoaXMuaGFuZGxlU2xvdENoYW5nZSk7XG4gICAgdGhpcy5zdWJzLmZvckVhY2goKHVuc3ViKSA9PiB1bnN1YigpKTtcbiAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICB0aGlzLmNvbm5lY3RlZENvbXBsZXRlID0gZmFsc2U7XG4gICAgdGhpcy5vbkNvbm5lY3RlZC5zZXQoZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYSBzbG90LCB0aGlzIGZ1bmN0aW9uIGl0ZXJhdGVzIG92ZXIgYWxsIG9mIGl0cyBhc3NpZ25lZCBlbGVtZW50IGFuZCB0ZXh0IG5vZGVzIGFuZCByZXR1cm5zIHRoZSBjb25jYXRlbmF0ZWRcbiAqIEhUTUwgYXMgYSBzdHJpbmcuIFRoaXMgaXMgdXNlZnVsIGJlY2F1c2Ugd2UgY2FuJ3QgdXNlIHNsb3QuaW5uZXJIVE1MIGFzIGFuIGFsdGVybmF0aXZlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5uZXJIVE1MKHNsb3Q6IEhUTUxTbG90RWxlbWVudCk6IHN0cmluZyB7XG4gIGNvbnN0IG5vZGVzID0gc2xvdC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KTtcbiAgbGV0IGh0bWwgPSAnJztcblxuICBbLi4ubm9kZXNdLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIGh0bWwgKz0gKG5vZGUgYXMgSFRNTEVsZW1lbnQpLm91dGVySFRNTDtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIGh0bWwgKz0gbm9kZS50ZXh0Q29udGVudDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBodG1sO1xufVxuXG4vKipcbiAqIEdpdmVuIGEgc2xvdCwgdGhpcyBmdW5jdGlvbiBpdGVyYXRlcyBvdmVyIGFsbCBvZiBpdHMgYXNzaWduZWQgdGV4dCBub2RlcyBhbmQgcmV0dXJucyB0aGUgY29uY2F0ZW5hdGVkIHRleHQgYXMgYVxuICogc3RyaW5nLiBUaGlzIGlzIHVzZWZ1bCBiZWNhdXNlIHdlIGNhbid0IHVzZSBzbG90LnRleHRDb250ZW50IGFzIGFuIGFsdGVybmF0aXZlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQoc2xvdDogSFRNTFNsb3RFbGVtZW50IHwgdW5kZWZpbmVkIHwgbnVsbCk6IHN0cmluZyB7XG4gIGlmICghc2xvdCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBjb25zdCBub2RlcyA9IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gIGxldCB0ZXh0ID0gJyc7XG5cbiAgWy4uLm5vZGVzXS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICB0ZXh0ICs9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdGV4dDtcbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuaW1wb3J0IHtcbiAgY29uZmlnIGFzIGdldHRlckNvbmZpZyxcbiAgc2V0Q29uZmlnIGFzIHNldHRlckNvbmZpZyxcbiAgTW9ydGFyVGhlbWVDb25maWcsXG59IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7IFN1YnNldCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzU3NyLCBzaWduYWwgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgdHlwZSBNdGVUaGVtZSA9ICdkZWZhdWx0JyB8ICdweExpZ2h0JyB8ICdjeExpZ2h0JyB8ICdyeExpZ2h0JztcblxuZXhwb3J0IHR5cGUgTXRlQ29sb3JTY2hlbWUgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgJ3N5c3RlbSc7XG5cbmNvbnN0IENBQ0hFX1RPX0tFWSA9ICdtdGUudGhlbWUuY2FjaGUtdG8nO1xuY29uc3QgQ09MT1JfU0NIRU1FX0tFWSA9ICdtdGUudGhlbWUuZ2xvYmFsLWNvbG9yLXNjaGVtZSc7XG5cbmNsYXNzIF9NdGVUaGVtZVNlcnZpY2Uge1xuICBjb25maWcgPSBnZXR0ZXJDb25maWc7XG5cbiAgcHJpdmF0ZSByb290T2JzZXJ2ZXI/OiBNdXRhdGlvbk9ic2VydmVyO1xuICBwcml2YXRlIHRoZW1lU2lnbmFsID0gc2lnbmFsPE10ZVRoZW1lIHwgbnVsbD4odGhpcy5nZXRHbG9iYWxUaGVtZSgpKTtcbiAgcHJpdmF0ZSBjb2xvclNjaGVtZVNpZ25hbCA9IHNpZ25hbDxNdGVDb2xvclNjaGVtZSB8IG51bGw+KHRoaXMuZ2V0R2xvYmFsQ29sb3JTY2hlbWUoKSA/PyAnbGlnaHQnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRDYWNoZSgpO1xuICB9XG5cbiAgLyoqIENvbmZpZ3VyZXMgdGhlIGBNdGVUaGVtZVNlcnZpY2VgIHRvIGNhY2hlIGNvbG9yLXNjaGVtZSBjaGFuZ2VzIHRvIGBsb2NhbFN0b3JhZ2VgLCBgc2Vzc2lvblN0b3JhZ2VgLCBvciBuZWl0aGVyLiAqL1xuICBwdWJsaWMgY2FjaGVDb2xvclNjaGVtZVRvKG1ldGhvZDogJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnKSB7XG4gICAgaWYgKCFtZXRob2QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQ2xlYXIgYWxsIGtleXMgZnJvbSBhbGwgc3RvcmFnZSBsb2NhdGlvbnMgaWYgbm9uZVxuICAgIGlmIChtZXRob2QgPT09ICdub25lJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ0FDSEVfVE9fS0VZKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ09MT1JfU0NIRU1FX0tFWSk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgdHJ5IHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKENPTE9SX1NDSEVNRV9LRVkpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFNjaGVtZSA9IHRoaXMuY29sb3JTY2hlbWVTaWduYWwuZ2V0KCk7XG4gICAgLy8gU2V0IGNhY2hlIG1ldGhvZCBpbiBzdG9yYWdlIC0gVHJ5IGxvY2FsU3RvcmFnZSBmaXJzdFxuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQUNIRV9UT19LRVksIG1ldGhvZCk7XG4gICAgICBpZiAoY3VycmVudFNjaGVtZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDT0xPUl9TQ0hFTUVfS0VZLCBjdXJyZW50U2NoZW1lKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnTXRlVGhlbWVTZXJ2aWNlOiBDb3VsZCBub3Qgc2V0IGNvbG9yIHNjaGVtZSBjYWNoZSBtZXRob2QgdG8gYGxvY2FsU3RvcmFnZWAuIEF0dGVtcHRpbmcgZmFsbGJhY2sgdG8gYHNlc3Npb25TdG9yYWdlYC4gQ2FjaGluZyB3aWxsIG9ubHkgaGFwcGVuIHRvIHNlc3Npb25TdG9yYWdlLidcbiAgICAgICk7XG4gICAgICAvLyBUcnkgc2Vzc2lvblN0b3JhZ2UgbmV4dFxuICAgICAgdHJ5IHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShDQUNIRV9UT19LRVksICdzZXNzaW9uU3RvcmFnZScpO1xuICAgICAgICBpZiAoY3VycmVudFNjaGVtZSkge1xuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oQ09MT1JfU0NIRU1FX0tFWSwgY3VycmVudFNjaGVtZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnTXRlVGhlbWVTZXJ2aWNlOiBDb3VsZCBub3Qgc2V0IGNvbG9yIHNjaGVtZSBjYWNoZSBtZXRob2QgdG8gYGxvY2FsU3RvcmFnZWAgb3IgYHNlc3Npb25TdG9yYWdlYC4gQ2FjaGluZyBub3QgZW5hYmxlZC4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldHMgdGhlIGN1cnJlbnQgZ2xvYmFsIHRoZW1lIG9uIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBzZXRHbG9iYWxUaGVtZSh0aGVtZTogTXRlVGhlbWUpIHtcbiAgICBpZiAoIXRoZW1lIHx8IHR5cGVvZiB0aGVtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXRlVGhlbWVTZXJ2aWNlOiBHbG9iYWwgdGhlbWUgcGFyYW0gbXVzdCBiZSBhIHN0cmluZy4nKTtcbiAgICB9XG4gICAgdGhpcy5pbml0T2JzZXJ2ZXIoKTtcbiAgICBpZiAodGhlbWUgIT09ICdkZWZhdWx0Jykge1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uc2V0QXR0cmlidXRlKCdkYXRhLW10ZS10aGVtZScsIHRoZW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW10ZS10aGVtZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBjdXJyZW50IGdsb2JhbCBjb2xvci1zY2hlbWUgb24gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIHNldEdsb2JhbENvbG9yU2NoZW1lKGNvbG9yU2NoZW1lOiBNdGVDb2xvclNjaGVtZSkge1xuICAgIGlmICghY29sb3JTY2hlbWUgfHwgdHlwZW9mIGNvbG9yU2NoZW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdGVUaGVtZVNlcnZpY2U6IEdsb2JhbCBjb2xvclNjaGVtZSBwYXJhbSBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICAgIH1cbiAgICBjb25zdCBzY2hlbWUgPSBjb2xvclNjaGVtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzY2hlbWUgPT09ICdkYXJrJyB8fCBzY2hlbWUgPT09ICdsaWdodCcgfHwgc2NoZW1lID09PSAnc3lzdGVtJykge1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uc2V0QXR0cmlidXRlKCdkYXRhLW10ZS1jb2xvci1zY2hlbWUnLCBzY2hlbWUpO1xuICAgICAgdGhpcy5zZXRDYWNoZVZhbHVlKENPTE9SX1NDSEVNRV9LRVksIGNvbG9yU2NoZW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW10ZS1jb2xvci1zY2hlbWUnKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgY3VycmVudCBnbG9iYWwgdGhlbWUgZnJvbSB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgZ2V0R2xvYmFsVGhlbWUoKTogTXRlVGhlbWUgfCBudWxsIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1tdGUtdGhlbWUnKSBhcyBNdGVUaGVtZTtcbiAgICBpZiAoIVsnZGVmYXVsdCcsICdweExpZ2h0JywgJ2N4TGlnaHQnLCAncnhMaWdodCddLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZSBhcyBNdGVUaGVtZTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgY3VycmVudCBnbG9iYWwgY29sb3Itc2NoZW1lIGZyb20gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIGdldEdsb2JhbENvbG9yU2NoZW1lKCk6IE10ZUNvbG9yU2NoZW1lIHwgbnVsbCB7XG4gICAgY29uc3QgdmFsdWUgPSBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoXG4gICAgICAnZGF0YS1tdGUtY29sb3Itc2NoZW1lJ1xuICAgICkgYXMgTXRlQ29sb3JTY2hlbWU7XG4gICAgaWYgKCFbJ2xpZ2h0JywgJ2RhcmsnLCAnc3lzdGVtJ10uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlIGFzIE10ZUNvbG9yU2NoZW1lO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIGEgcmVhY3RpdmUgc2lnbmFsIHRoYXQgd2lsbCB1cGRhdGUgYW55IHRpbWUgdGhlIGdsb2JhbCB0aGVtZSBjaGFuZ2VzICovXG4gIHB1YmxpYyBzZWxlY3RHbG9iYWxUaGVtZSgpIHtcbiAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgIHJldHVybiB0aGlzLnRoZW1lU2lnbmFsO1xuICB9XG5cbiAgLyoqIFJldHVybnMgYSByZWFjdGl2ZSBzaWduYWwgdGhhdCB3aWxsIHVwZGF0ZSBhbnkgdGltZSB0aGUgZ2xvYmFsIGNvbG9yLXNjaGVtZSBjaGFuZ2VzICovXG4gIHB1YmxpYyBzZWxlY3RHbG9iYWxDb2xvclNjaGVtZSgpIHtcbiAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgIHJldHVybiB0aGlzLmNvbG9yU2NoZW1lU2lnbmFsO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIHZhbHVlIG9mIGFsbCBvZiB0aGUgZ2l2ZW4gdGhlbWUgdmFyaWFibGVzIG9uIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBzZXQoXG4gICAgY29uZmlnRm5Pck9iajpcbiAgICAgIHwgU3Vic2V0PE1vcnRhclRoZW1lQ29uZmlnPlxuICAgICAgfCAoKGNvbmZpZzogTW9ydGFyVGhlbWVDb25maWcpID0+IFN1YnNldDxNb3J0YXJUaGVtZUNvbmZpZz4pXG4gICkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnRm5Pck9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uZmlnRm5Pck9iaiA9IGNvbmZpZ0ZuT3JPYmoodGhpcy5jb25maWcpO1xuICAgIH1cbiAgICBjb25zdCBtYXBwaW5ncyA9IHRoaXMuZmxhdHRlblBhdGhzKGNvbmZpZ0ZuT3JPYmopO1xuICAgIG1hcHBpbmdzLmZvckVhY2goKFtwYXRoLCB2YWxdKSA9PiB7XG4gICAgICBjb25zdCBjc3NWYXIgPSBwYXRoLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiB7XG4gICAgICAgIHJldHVybiBhY2NbcHJvcF07XG4gICAgICB9LCBzZXR0ZXJDb25maWcpO1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uc3R5bGUuc2V0UHJvcGVydHkoY3NzVmFyLCBgJHt2YWx9YCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgdGhlIHJlcXVlc3RlZCB0aGVtZSB2YXJpYWJsZSBmcm9tIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBnZXQ8VD4oazE6ICh0aGVtZUNvbmZpZzogTW9ydGFyVGhlbWVDb25maWcpID0+IFQpOiBUO1xuICBwdWJsaWMgZ2V0PEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWc+KGsxOiBLMSk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLCBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXT4oXG4gICAgazE6IEsxLFxuICAgIGsyOiBLMlxuICApOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMyk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11cbiAgPihrMTogSzEsIGsyOiBLMiwgazM6IEszLCBrNDogSzQpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl0sXG4gICAgSzQgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXSxcbiAgICBLNSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVxuICA+KGsxOiBLMSwgazI6IEsyLCBrMzogSzMsIGs0OiBLNCwgazU6IEs1KTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdW0s1XTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXSxcbiAgICBLNCBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdLFxuICAgIEs1IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdLFxuICAgIEs2IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdW0s1XVxuICA+KGsxOiBLMSwgazI6IEsyLCBrMzogSzMsIGs0OiBLNCwgazU6IEs1LCBrNjogSzYpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdW0s2XTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXSxcbiAgICBLNCBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdLFxuICAgIEs1IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdLFxuICAgIEs2IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdW0s1XVxuICA+KFxuICAgIC4uLmtleXM6XG4gICAgICB8IFtLMV1cbiAgICAgIHwgW0sxLCBLMl1cbiAgICAgIHwgW0sxLCBLMiwgSzNdXG4gICAgICB8IFtLMSwgSzIsIEszLCBLNF1cbiAgICAgIHwgW0sxLCBLMiwgSzMsIEs0LCBLNV1cbiAgICAgIHwgW0sxLCBLMiwgSzMsIEs0LCBLNSwgSzZdXG4gICk6IGFueSB7XG4gICAgY29uc3QgW2ZuXSA9IGtleXMgPz8gW251bGxdO1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGNzc1ZhciA9IChmbiBhcyBhbnkpKHNldHRlckNvbmZpZyk7XG4gICAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShnbG9iYWxUaGlzPy5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoY3NzVmFyKTtcbiAgICB9XG4gICAgY29uc3QgY3NzVmFyID0ga2V5cy5yZWR1Y2UoKGFjYzogYW55LCBrZXkpID0+IGFjY1trZXldLCBzZXR0ZXJDb25maWcgYXMgYW55KSBhcyBzdHJpbmc7XG4gICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZ2xvYmFsVGhpcz8uZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Zhcik7XG4gIH1cblxuICAvKiogRmxhdHRlbnMgYSBnaXZlbiBvYmplY3QgdG8gYW4gYXJyYXkgb2YgcGF0aCBrZXlzIGFuZCBpdHMgcmVzdWx0aW5nIHZhbHVlICovXG4gIHByaXZhdGUgZmxhdHRlblBhdGhzKG9iajogUmVjb3JkPHN0cmluZywgYW55PiwgcGF0aDogc3RyaW5nW10gPSBbXSk6IFtzdHJpbmdbXSwgYW55XVtdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICBjb25zdCBuZXN0ZWQgPSBvYmpba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgbmVzdGVkID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwYXRoLnB1c2goa2V5KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihhY2MsIHRoaXMuZmxhdHRlblBhdGhzKG5lc3RlZCwgcGF0aCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aC5wdXNoKGtleSk7XG4gICAgICAgIGFjYy5wdXNoKFtwYXRoLCBuZXN0ZWRdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNdXRhdGlvbkV2ZW50ID0gKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcbiAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkge1xuICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZScpIHtcbiAgICAgICAgICB0aGlzLmNvbG9yU2NoZW1lU2lnbmFsLnNldCh0aGlzLmdldEdsb2JhbENvbG9yU2NoZW1lKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkYXRhLW10ZS10aGVtZScpIHtcbiAgICAgICAgICB0aGlzLnRoZW1lU2lnbmFsLnNldCh0aGlzLmdldEdsb2JhbFRoZW1lKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgaW5pdENhY2hlKCkge1xuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgdGhpcy5pbml0T2JzZXJ2ZXIoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNhY2hlQ29sb3JTY2hlbWUgPSB0aGlzLmdldENhY2hlVmFsdWUoQ09MT1JfU0NIRU1FX0tFWSk7XG4gICAgICAgIGlmIChjYWNoZUNvbG9yU2NoZW1lICYmIGNhY2hlQ29sb3JTY2hlbWUgIT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5zZXRHbG9iYWxDb2xvclNjaGVtZShjYWNoZUNvbG9yU2NoZW1lIGFzIE10ZUNvbG9yU2NoZW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXRPYnNlcnZlcigpIHtcbiAgICBpZiAoIWlzU3NyKCkgJiYgIXRoaXMucm9vdE9ic2VydmVyKSB7XG4gICAgICB0aGlzLnJvb3RPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuaGFuZGxlTXV0YXRpb25FdmVudCk7XG4gICAgICB0aGlzLnJvb3RPYnNlcnZlci5vYnNlcnZlKGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbJ2RhdGEtbXRlLXRoZW1lJywgJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZSddLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYWNoZU1ldGhvZCgpOiAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZScgfCBudWxsIHtcbiAgICAvLyBSZXRyaWV2ZSBjYWNoZSBtZXRob2RcbiAgICBsZXQgY2FjaGVNZXRob2Q6ICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJyB8IG51bGwgPSBudWxsO1xuICAgIC8vIFRyeSBsb2NhbFN0b3JhZ2VcbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ0FDSEVfVE9fS0VZKTtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgY2FjaGVNZXRob2QgPSB2YWwgYXMgJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRyeSBzZXNzaW9uU3RvcmFnZVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdmFsID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgY2FjaGVNZXRob2QgPSB2YWwgYXMgJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICByZXR1cm4gY2FjaGVNZXRob2Q7XG4gIH1cblxuICBwcml2YXRlIHNldENhY2hlVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjYWNoZU1ldGhvZCA9IHRoaXMuZ2V0Q2FjaGVNZXRob2QoKTtcbiAgICB0cnkge1xuICAgICAgaWYgKGNhY2hlTWV0aG9kID09PSAnbG9jYWxTdG9yYWdlJykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoY2FjaGVNZXRob2QgPT09ICdzZXNzaW9uU3RvcmFnZScpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYWNoZVZhbHVlKGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2FjaGVNZXRob2QgPSB0aGlzLmdldENhY2hlTWV0aG9kKCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChjYWNoZU1ldGhvZCA9PT0gJ2xvY2FsU3RvcmFnZScpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICB9IGVsc2UgaWYgKGNhY2hlTWV0aG9kID09PSAnc2Vzc2lvblN0b3JhZ2UnKSB7XG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlVGhlbWVTZXJ2aWNlID0gbmV3IF9NdGVUaGVtZVNlcnZpY2UoKTtcbiIsICJpbXBvcnQgeyBpc1NzciwgaXNQbGF0Zm9ybSB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCB0eXBlIFBvcnRhbFN0YWNrID0gJ292ZXJsYXknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRhbGVkRWxlbWVudE1ldGFkYXRhIHtcbiAgZWxlbWVudDogRWxlbWVudDtcbiAgc3RhY2s6IFBvcnRhbFN0YWNrO1xuICBjaGlsZFBvcnRhbGVkRWxlbWVudHM6IFNldDxFbGVtZW50PjtcbiAgcGFyZW50UG9ydGFsZWRFbGVtZW50PzogRWxlbWVudDtcbiAgYmFja2Ryb3A/OiBFbGVtZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRQb3J0YWxDb250cm9sbGVyIHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFyZW50UG9ydGFsZWRFbGVtZW50OiBFbGVtZW50O1xuICBvcHRpb25zOiB7IHN0YWNrOiBQb3J0YWxTdGFjayB9O1xufVxuXG5leHBvcnQgdHlwZSBQb3J0YWxBZGFwdGVyPFQgPSBhbnk+ID0gKFxuICBwb3J0YWxFbGVtZW50OiBULFxuICBvdXRsZXRFbGVtZW50OiBFbGVtZW50XG4pID0+IFByb21pc2U8YW55PiB8IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0YWxPcHRpb25zIHtcbiAgLyoqIFJlbmRlcnMgdGhlIGJhY2tkcm9wIGRpbW1lZCAqL1xuICB3aXRoRGltQmFja2Ryb3A/OiBib29sZWFuO1xuXG4gIC8qKiBNYWtlcyB0aGUgYmFja2Ryb3AgaWdub3JlIHBvaW50ZXIgZXZlbnRzLiBVc2VmdWwgZm9yIHRyaWdnZXJPbiBcImhvdmVyXCIuICovXG4gIHdpdGhJbmVydEJhY2tkcm9wPzogYm9vbGVhbjtcblxuICAvKiogRGlzYWJsZXMgdGhlIGFiaWxpdHkgdG8gc2Nyb2xsIHRoZSBwYWdlIGJlaGluZCB0aGUgb3ZlcmxheSB3aGVuIHRydWUgKi9cbiAgd2l0aFNjcm9sbExvY2s/OiBib29sZWFuO1xuXG4gIC8qKiBDYWxsYmFjayBmb3IgaGFuZGxpbmcgY2xvc2VPbkNsaWNrT3V0c2lkZSBldmVudHMgd2hlbiB0aGUgcG9ydGFsJ3MgYmFja2Ryb3AgaXMgY2xpY2tlZCAqL1xuICBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcj86ICgpID0+IGFueTtcblxuICAvKiogVGhlIGFuaW1hdGlvbiBkdXJhdGlvbiBmb3IgZmFkaW5nIGEgc2hhZG93IGJhY2tkcm9wIGluL291dCAqL1xuICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbj86IHN0cmluZztcblxuICAvKiogQWRhcHRlciBmb3IgXCJwb3J0YWxpbmdcIiBhbiBlbGVtZW50IGZyb20gb25lIGxvY2F0aW9uIGluIHRoZSBET00gdG8gYW5vdGhlci4gTGV2ZXJhZ2VkIGJ5IGZyYW1ld29yayB3cmFwcGVycyBmb3IgaW1wcm92ZWQgaW50ZXJvcC4gKi9cbiAgcG9ydGFsQWRhcHRlcj86IFBvcnRhbEFkYXB0ZXI7XG59XG5cbi8qKiBEZWZhdWx0IG5hdGl2ZSBET00gYWRhcHRlciBmb3IgcG9ydGFsaW5nIGFuIGVsZW1lbnQgdG8gYW5vdGhlciB0YXJnZXQgZWxlbWVudCAqL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRQb3J0YWxBZGFwdGVyOiBQb3J0YWxBZGFwdGVyID0gKHBvcnRhbEVsZW0sIG91dGxldEVsZW0pID0+IHtcbiAgb3V0bGV0RWxlbT8uYXBwZW5kQ2hpbGQocG9ydGFsRWxlbSk7XG59O1xuXG5jbGFzcyBfTXRlUG9ydGFsU2VydmljZSB7XG4gIC8qKiBTaGFyZWQgZ2xvYmFsIGNvbnN0IGZvciBzdGFjayBlbGVtZW50IHJlZnMgKi9cbiAgcHJpdmF0ZSBzdGFja0VsZW1lbnRzOiB7IG92ZXJsYXk6IEVsZW1lbnQgfSA9IHtcbiAgICBvdmVybGF5OiB1bmRlZmluZWQsXG4gIH07XG5cbiAgLyoqIFNoYXJlZCBnbG9iYWwgY29uc3QgZm9yIHBvcnRhbGVkIGVsZW1lbnRzIG1ldGFkYXRhICovXG4gIHByaXZhdGUgcG9ydGFsZWRFbGVtZW50cyA9IG5ldyBNYXA8bnVtYmVyLCBNYXA8RWxlbWVudCwgUG9ydGFsZWRFbGVtZW50TWV0YWRhdGE+PigpO1xuXG4gIHByaXZhdGUgYWN0aXZlU2Nyb2xsTG9ja3MgPSBuZXcgU2V0PEVsZW1lbnQ+KCk7XG5cbiAgcHJpdmF0ZSBzdGFja011dGF0aW9uT2JzZXJ2ZXI/OiBNdXRhdGlvbk9ic2VydmVyO1xuXG4gIC8qKlxuICAgKiBXaGVuIGNhbGxlZCwgdGhpcyBzZXJ2aWNlIHdpbGwgYXR0ZW1wdCB0byBsb2NhdGUgdGhlIGBAYW5ndWxhci9jZGtgIG92ZXJsYXkgc3RhY2suXG4gICAqIElmIGZvdW5kIHRoaXMgc2VydmljZSB3aWxsIGJlIGNvbmZpZ3VyZWQgdG8gdXNlIHRoYXQgZWxlbWVudCBhcyB0aGUgYG92ZXJsYXlgIHN0YWNrIGluc3RlYWQgb2YgaW5pdGlhbGl6aW5nIGl0cyBvd24uXG4gICAqL1xuICBwdWJsaWMgY29uZmlndXJlQ2RrSW50ZXJvcCgpIHtcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIGNvbnN0IGNka1N0YWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNkay1vdmVybGF5LWNvbnRhaW5lcicpO1xuICAgICAgaWYgKGNka1N0YWNrKSB7XG4gICAgICAgIHRoaXMuc3RhY2tFbGVtZW50cy5vdmVybGF5ID0gY2RrU3RhY2s7XG4gICAgICAgIHRoaXMuc3RhY2tFbGVtZW50cy5vdmVybGF5LmNsYXNzTGlzdC5hZGQodGhpcy5pZEZhY3RvcnkoJ292ZXJsYXknKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIHBvcnRhbCBjb250cm9sbGVyLiBBbGwgaXRlbXMgaXQgcmVxdWVzdGVkIHRvIGJlIHBvcnRhbGVkIHdpbGwgYmUgdHJhY2sgYWdhaW5zdCBpdC5cbiAgICogV2hlbiB0aGUgcG9ydGFsIGlzIHJlbW92ZWQgd2UgY2FuIHRoZW4gcmVtb3ZlIGFueSBlbGVtZW50cyBpdCBjdXJyZW50bHkgaGFzIHBvcnRhbGVkIGFuZFxuICAgKiBhbnkgb2YgdGhlaXIgcG9ydGFsZWQgY2hpbGRyZW4uXG4gICAqL1xuICBwdWJsaWMgYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlcikge1xuICAgIGlmICghdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmhhcyhwb3J0YWxDb250cm9sbGVyPy5pZCkpIHtcbiAgICAgIC8vIFRyYWNrIGluIHNldCBieSBJRCBzbyB3ZSBkb24ndCBrZWVwIGEgbGl2ZSByZWZlcmVuY2UgdG8gdGhlIGNvbnRyb2xsZXIgaXRzZWxmXG4gICAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuc2V0KHBvcnRhbENvbnRyb2xsZXIuaWQsIG5ldyBNYXA8RWxlbWVudCwgUG9ydGFsZWRFbGVtZW50TWV0YWRhdGE+KCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGFsbCBvZiBhIHBvcnRhbCBjb250cm9sbGVycyBwb3J0YWxlZCBlbGVtZW50cyBhbmQgdGhlaXIgcmVmZXJlbmNlcyAqL1xuICBwdWJsaWMgcmVtb3ZlQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlcikge1xuICAgIC8vIEF0dGVtcHQgdG8gcmVtb3ZlIGFsbCBpdGVtcyBhdHRhY2hlZCBieSB0aGlzIGNvbnRyb2xsZXIgZnJvbSB0aGUgY29uZmlndXJlZCBzdGFja1xuICAgIGNvbnN0IGF0dGFjaGVkRWxlbWVudHMgPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpO1xuICAgIGlmIChhdHRhY2hlZEVsZW1lbnRzKSB7XG4gICAgICBhdHRhY2hlZEVsZW1lbnRzLmZvckVhY2goKGl0ZW0pID0+IHRoaXMucmVtb3ZlRnJvbVN0YWNrKHBvcnRhbENvbnRyb2xsZXIsIGl0ZW0uZWxlbWVudCkpO1xuICAgIH1cbiAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZGVsZXRlKHBvcnRhbENvbnRyb2xsZXIuaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgYSByZWYgdG8gdGhlIGNvbmZpZ3VyZWQgc3RhY2sgZXhpc3RzLiBJZiBpdCBkb2VzIG5vdCwgdGhlIGNvbmZpZ3VyZWQgc3RhY2sgd2lsbFxuICAgKiBiZSBjcmVhdGVkIGFuZCBhcHBlbmRlZCB0byB0aGUgZG9jdW1lbnQuIERvZXMgbm90aGluZyBkdXJpbmcgU1NSLlxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVTdGFjayhzdGFjazogUG9ydGFsU3RhY2spIHtcbiAgICBpZiAoc3RhY2sgIT09ICdvdmVybGF5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE92ZXJsYXkgU3RhY2s6IFwiJHtzdGFja31cIiBtdXN0IGJlICdvdmVybGF5JyBhdCB0aGlzIHRpbWUuYCk7XG4gICAgfVxuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgaWYgKCF0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdKSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkRmFjdG9yeShzdGFjaykpO1xuICAgICAgICB0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdID1cbiAgICAgICAgICBlbGVtID8/XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmlkRmFjdG9yeShzdGFjayksXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXSAmJiAhdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXS5pc0Nvbm5lY3RlZCkge1xuICAgICAgICB0aGlzLmFwcGVuZFN0YWNrVG9Eb20odGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXSk7XG5cbiAgICAgICAgLy8gSW5pdCBtdXRhdGlvbiBvYnNlcnZlclxuICAgICAgICAvLyBUaGlzIHdpbGwgd2F0Y2ggZm9yIGFueXRpbWUgdGhlIHN0YWNrIGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NIGZvciBzb21lIHJlYXNvblxuICAgICAgICAvLyBJZiBpdCBpcywgaXQgd2lsbCByZS1hdHRhY2ggaXQgdG8gdGhlIERPTSBhZnRlciB0aGUgbmV4dCB0aWNrXG4gICAgICAgIGlmICghdGhpcy5zdGFja011dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICB0aGlzLnN0YWNrTXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtbCwgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbWwpIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCByZW1vdmVkTm9kZSBvZiBtdXRhdGlvbi5yZW1vdmVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZE5vZGUgPT09IHRoaXMuc3RhY2tFbGVtZW50cy5vdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUFsbEl0ZW1zRnJvbVN0YWNrcygpO1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kU3RhY2tUb0RvbSh0aGlzLnN0YWNrRWxlbWVudHMub3ZlcmxheSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXT8ucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuc3RhY2tNdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXS5wYXJlbnROb2RlLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1YnRyZWU6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhcHBlbmRTdGFja1RvRG9tKHN0YWNrRWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmIChzdGFja0VsZW1lbnQgJiYgIXN0YWNrRWxlbWVudC5pc0Nvbm5lY3RlZCkge1xuICAgICAgY29uc3QgdG9hc3RDb250YWluZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ210ZS10b2FzdC1jb250YWluZXInKTtcbiAgICAgIGlmICh0b2FzdENvbnRhaW5lcikge1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShzdGFja0VsZW1lbnQsIHRvYXN0Q29udGFpbmVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHN0YWNrRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIEFwcGVuZHMgYW4gaXRlbSB0byB0aGUgY29uZmlndXJlZCBwb3J0YWwgc3RhY2sgKi9cbiAgcHVibGljIGFwcGVuZFRvU3RhY2soXG4gICAgcG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsXG4gICAgZWxlbWVudDogRWxlbWVudCxcbiAgICB7XG4gICAgICB3aXRoRGltQmFja2Ryb3AgPSBmYWxzZSxcbiAgICAgIHdpdGhJbmVydEJhY2tkcm9wID0gZmFsc2UsXG4gICAgICB3aXRoU2Nyb2xsTG9jayA9IGZhbHNlLFxuICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcixcbiAgICAgIHBvcnRhbEFkYXB0ZXIgPSBkZWZhdWx0UG9ydGFsQWRhcHRlcixcbiAgICB9OiBQb3J0YWxPcHRpb25zID0ge31cbiAgKSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50UG9ydGFsZWRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRQb3J0YWxlZEVsZW1lbnQocG9ydGFsQ29udHJvbGxlciwgZWxlbWVudCk7XG4gICAgICBjb25zdCBzdGFja05hbWUgPSBwb3J0YWxDb250cm9sbGVyLm9wdGlvbnMuc3RhY2s7XG4gICAgICBjb25zdCBzdGFjayA9IHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja05hbWVdO1xuICAgICAgY29uc3QgYXR0YWNoZWRFbGVtZW50cyA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCk7XG5cbiAgICAgIGNvbnN0IGJhY2tkcm9wID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgICBjbGFzc05hbWU6ICdtdGUtcG9ydGFsX19iYWNrZHJvcCcsXG4gICAgICAgIC4uLihiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvblxuICAgICAgICAgID8geyBzdHlsZTogYHRyYW5zaXRpb24tZHVyYXRpb246ICR7YmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb259O2AgfVxuICAgICAgICAgIDoge30pLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIEhhbmRsZSBiYWNrZHJvcCBzdHlsaW5nXG4gICAgICBpZiAod2l0aEluZXJ0QmFja2Ryb3ApIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLWluZXJ0Jyk7XG4gICAgICB9XG4gICAgICBpZiAod2l0aERpbUJhY2tkcm9wKSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1zaGFkb3cnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS10cmFuc3BhcmVudCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBBcHBlbmQgYmFja2Ryb3BcbiAgICAgIHN0YWNrPy5hcHBlbmRDaGlsZChiYWNrZHJvcCk7XG5cbiAgICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgICAvLyBBZGQgbGlzdGVuZXIgaWYgY2xpY2sgaGFuZGxlciBpcyBwcmVzZW50XG4gICAgICAgIGlmIChjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcikge1xuICAgICAgICAgIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyKTtcbiAgICAgICAgICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGJhY2tkcm9wIHNob3VsZCBiZSBkaW0sIGFuaW1hdGUgaXQgYWZ0ZXIgaXQgaGFzIGJlZW4gYXBwZW5kZWQgdG8gdGhlIGRvbVxuICAgICAgICBpZiAod2l0aERpbUJhY2tkcm9wKSB7XG4gICAgICAgICAgZ2xvYmFsVGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXNob3cnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBseSBzY3JvbGwgbG9ja1xuICAgICAgICBpZiAod2l0aFNjcm9sbExvY2spIHtcbiAgICAgICAgICB0aGlzLmFwcGx5U2Nyb2xsTG9jayhlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBXYWl0IGZvciBSZWFjdCAob3Igb3RoZXIgZnV0dXJlIGZyYW1ld29yayBhZGFwdGVyKSB0byBhcHBlbmQgZWxlbWVudCB0byBuZXdcbiAgICAgIC8vIGxvY2F0aW9uIGluIHRoZSBET00gYmVmb3JlIGFkZGluZyB0byBzdGFjay4gRG9pbmcgc28gdHJpZ2dlcnMgYGhvc3REaXNjb25uZWN0ZWRgXG4gICAgICAvLyB3aGljaCB3b3VsZCBpbnN0YW50bHkgcmVtb3ZlIHRoZSBlbGVtZW50IGlmIG5vdCBmb3IgdGhpcyBleHRyYSB0aW1lb3V0IHRvIHdhaXQgYSB0aWNrXG4gICAgICBQcm9taXNlLnJlc29sdmUocG9ydGFsQWRhcHRlcihlbGVtZW50LCBzdGFjaykpLnRoZW4oKCkgPT4ge1xuICAgICAgICBhdHRhY2hlZEVsZW1lbnRzLnNldChlbGVtZW50LCB7XG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICBzdGFjazogc3RhY2tOYW1lLFxuICAgICAgICAgIGJhY2tkcm9wLFxuICAgICAgICAgIGNoaWxkUG9ydGFsZWRFbGVtZW50czogbmV3IFNldDxFbGVtZW50PigpLFxuICAgICAgICAgIHBhcmVudFBvcnRhbGVkRWxlbWVudCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGFuIGVsZW1lbnQgZnJvbSB0aGUgc3RhY2sgKi9cbiAgcHVibGljIHJlbW92ZUZyb21TdGFjayhwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgZWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmICh0aGlzLnBvcnRhbGVkRWxlbWVudHMuaGFzKHBvcnRhbENvbnRyb2xsZXIuaWQpKSB7XG4gICAgICBjb25zdCBhdHRhY2hlZEVsZW1lbnRzID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKTtcbiAgICAgIGlmIChhdHRhY2hlZEVsZW1lbnRzKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRNZXRhZGF0YSA9IGF0dGFjaGVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBpZiAoZWxlbWVudE1ldGFkYXRhKSB7XG4gICAgICAgICAgYXR0YWNoZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgdGhpcy5maW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTYWZlbHkgcmVtb3ZlcyBhbGwgaXRlbXMgZnJvbSBhbGwgc3RhY2tzXG4gIHByaXZhdGUgcmVtb3ZlQWxsSXRlbXNGcm9tU3RhY2tzKCkge1xuICAgIGZvciAobGV0IFtpZCwgY29udHJvbGxlck1hcF0gb2YgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmVudHJpZXMoKSkge1xuICAgICAgZm9yIChsZXQgW2VsZW1lbnQsIGVsZW1lbnRNZXRhZGF0YV0gb2YgY29udHJvbGxlck1hcC5lbnRyaWVzKCkpIHtcbiAgICAgICAgaWYgKGVsZW1lbnRNZXRhZGF0YSkge1xuICAgICAgICAgIHRoaXMuZmluYWxpemVTdGFja1JlbW92ZShlbGVtZW50TWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIE1ha2VzIGEgYmFja2Ryb3AgYXNzb2NpYXRlZCB3aXRoIGEgcG9ydGFsZWQgZWxlbWVudCB2aXNpYmxlIGlmIGl0IGV4aXN0cyAqL1xuICBwdWJsaWMgc2hvd0JhY2tkcm9wKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIGNvbnN0IHsgYmFja2Ryb3AgfSA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuICAgIGJhY2tkcm9wPy5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0tc2hvdycpO1xuICB9XG5cbiAgLyoqIEhpZGVzIGEgYmFja2Ryb3AgYXNzb2NpYXRlZCB3aXRoIGEgcG9ydGFsZWQgZWxlbWVudCBpZiBpdCBleGlzdHMgKi9cbiAgcHVibGljIGhpZGVCYWNrZHJvcChwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyKTtcbiAgICBjb25zdCB7IGJhY2tkcm9wIH0gPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpLmdldChlbGVtZW50KSA/PyB7fTtcbiAgICBiYWNrZHJvcD8uY2xhc3NMaXN0LnJlbW92ZSgnYmFja2Ryb3AtLXNob3cnKTtcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIHRoZSBpbnRlcnRuZXNzIGEgYmFja2Ryb3AgaWYgaXQgZXhpc3RzICh3aGV0aGVyIG9yIG5vdCB0aGUgdXNlciBjYW4gY2xpY2sgdGhyb3VnaCBpdCkgKi9cbiAgcHVibGljIHNldEJhY2tkcm9wSW5lcnRuZXNzKFxuICAgIHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLFxuICAgIGVsZW1lbnQ6IEVsZW1lbnQsXG4gICAgaW5lcnQ6IGJvb2xlYW4gPSB0cnVlXG4gICkge1xuICAgIHRoaXMuYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyKTtcbiAgICBjb25zdCB7IGJhY2tkcm9wIH0gPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpLmdldChlbGVtZW50KSA/PyB7fTtcbiAgICBpZiAoaW5lcnQpIHtcbiAgICAgIGJhY2tkcm9wPy5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0taW5lcnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tkcm9wLS1pbmVydCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBpZCBmb3IgdGhlIGNvbmZpZ3VyZWQgc3RhY2sgZWxlbWVudCAqL1xuICBwcml2YXRlIGlkRmFjdG9yeSA9IChzdGFjazogUG9ydGFsU3RhY2spID0+IGBtdGUtcG9ydGFsX18ke3N0YWNrfS1zdGFja2A7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhbiBlbGVtZW50IGlzIGJlaW5nIHBvcnRhbGVkIGZyb20gd2l0aGluIGFub3RoZXIgcG9ydGFsZWRcbiAgICogZWxlbWVudCBhbmQgcmV0dXJucyB0aGF0IHBhcmVudCBpZiBpdCBpc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRQYXJlbnRQb3J0YWxlZEVsZW1lbnQocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAocG9ydGFsQ29udHJvbGxlci5wYXJlbnRQb3J0YWxlZEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBwb3J0YWxDb250cm9sbGVyLnBhcmVudFBvcnRhbGVkRWxlbWVudDtcbiAgICB9XG4gICAgbGV0IHBhcmVudFBvcnRhbGVkRWxlbWVudDogRWxlbWVudDtcbiAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZm9yRWFjaCgocG9ydGFsQ29udHJvbGxlcikgPT5cbiAgICAgIHBvcnRhbENvbnRyb2xsZXIuZm9yRWFjaCgocG9ydGFsZWRFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChwb3J0YWxlZEVsZW1lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgIHBvcnRhbGVkRWxlbWVudC5jaGlsZFBvcnRhbGVkRWxlbWVudHMuYWRkKGVsZW1lbnQpO1xuICAgICAgICAgIHBhcmVudFBvcnRhbGVkRWxlbWVudCA9IHBvcnRhbGVkRWxlbWVudC5lbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgLy8gQ2FjaGUgdGhlIHBhcmVudFBvcnRhbGVkRWxlbWVudCBpZiBmb3VuZCBvbiB0aGUgY29udHJvbGxlciBzbyB3ZSBjYW4gcmVmZXJlbmNlXG4gICAgLy8gaXQgd2hlbiBvcGVuZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBET01cbiAgICBpZiAocGFyZW50UG9ydGFsZWRFbGVtZW50KSB7XG4gICAgICBwb3J0YWxDb250cm9sbGVyLnBhcmVudFBvcnRhbGVkRWxlbWVudCA9IHBhcmVudFBvcnRhbGVkRWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudFBvcnRhbGVkRWxlbWVudDtcbiAgfVxuXG4gIC8qKiBFbnN1cmVzIGFuIGVsZW1lbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBzdGFjayBubyBtYXR0ZXIgd2hpY2ggY29udHJvbGxlciBoYXMgcG9ydGFsZWQgaXQgKi9cbiAgcHJpdmF0ZSByZW1vdmVGcm9tU3RhY2tHbG9iYWxseShlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmZvckVhY2goKHBvcnRhbENvbnRyb2xsZXIpID0+IHtcbiAgICAgIGlmIChwb3J0YWxDb250cm9sbGVyLmhhcyhlbGVtZW50KSkge1xuICAgICAgICBjb25zdCBlbGVtZW50TWV0YWRhdGEgPSBwb3J0YWxDb250cm9sbGVyLmdldChlbGVtZW50KTtcbiAgICAgICAgcG9ydGFsQ29udHJvbGxlci5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIHRoaXMuZmluYWxpemVTdGFja1JlbW92ZShlbGVtZW50TWV0YWRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEZpbmFsaXplcyB0aGUgcmVtb3ZlIG9mIGFuIGVsZW1lbnQgZnJvbSBhIHBvcnRhbCBzdGFjayAqL1xuICBwcml2YXRlIGZpbmFsaXplU3RhY2tSZW1vdmUoZWxlbWVudE1ldGFkYXRhOiBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YSkge1xuICAgIGlmIChlbGVtZW50TWV0YWRhdGEpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgc3RhY2s6IHN0YWNrTmFtZSxcbiAgICAgICAgYmFja2Ryb3AsXG4gICAgICAgIGNoaWxkUG9ydGFsZWRFbGVtZW50cyxcbiAgICAgICAgcGFyZW50UG9ydGFsZWRFbGVtZW50LFxuICAgICAgfSA9IGVsZW1lbnRNZXRhZGF0YTtcbiAgICAgIGNvbnN0IHN0YWNrID0gdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrTmFtZV07XG5cbiAgICAgIC8vIFJlbW92ZSBhbnkgc2Nyb2xsTG9ja3NcbiAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsTG9jayhlbGVtZW50KTtcblxuICAgICAgLy8gRW5zdXJlcyBhbiBlbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSBhbnkgcGFyZW50IHBvcnRhbGVkIGVsZW1lbnRzIGNoaWxkcmVuIGxpc3RzXG4gICAgICBpZiAocGFyZW50UG9ydGFsZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChwb3J0YWxDb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgaWYgKHBvcnRhbENvbnRyb2xsZXIuaGFzKHBhcmVudFBvcnRhbGVkRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHBvcnRhbENvbnRyb2xsZXIuZ2V0KHBhcmVudFBvcnRhbGVkRWxlbWVudCkuY2hpbGRQb3J0YWxlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBFbnN1cmVzIGFueSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQgYXJlIHJlbW92ZWQgYmVmb3JlIHRoaXMgZWxlbWVudCBpc1xuICAgICAgaWYgKGNoaWxkUG9ydGFsZWRFbGVtZW50cy5zaXplID4gMCkge1xuICAgICAgICBjaGlsZFBvcnRhbGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gdGhpcy5yZW1vdmVGcm9tU3RhY2tHbG9iYWxseShlbGVtZW50KSk7XG4gICAgICB9XG4gICAgICAvLyBSZW1vdmVzIHRoaXMgZWxlbWVudHMgYmFja2Ryb3AgZnJvbSB0aGUgcG9ydGFsIHN0YWNrXG4gICAgICBpZiAoYmFja2Ryb3AgJiYgYmFja2Ryb3AucGFyZW50RWxlbWVudCA9PT0gc3RhY2spIHtcbiAgICAgICAgc3RhY2s/LnJlbW92ZUNoaWxkKGJhY2tkcm9wKTtcbiAgICAgIH1cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgYSByZWFjdCB3cmFwcGVkIHBvcnRhbGVkIGVsZW1lbnRcbiAgICAgIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQ/Lmhhc0F0dHJpYnV0ZSgnZGF0YS1vdmVybGF5LXdyYXBwZXInKSkge1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgPT09IHN0YWNrKSB7XG4gICAgICAgICAgc3RhY2s/LnJlbW92ZUNoaWxkKGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50ID09PSBzdGFjaykge1xuICAgICAgICBzdGFjaz8ucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgYSBzY3JvbGwgbG9jayB0byB0aGUgYm9keSBlbGVtZW50IHRvIHByZXZlbnQgc2Nyb2xsaW5nIG9mIHBhZ2UgY29udGVudC5cbiAgICogQ2FsY3VsYXRlcyBhbnkgYm9keSBvZmZzZXRzIGR1ZSB0byB2aXNpYmxlIHNjcm9sbGJhcnMgYW5kIGR5bmFtaWNhbGx5IGFkanVzdHMgZm9yIHRoZW0uXG4gICAqL1xuICBwcml2YXRlIGFwcGx5U2Nyb2xsTG9jayhlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5hY3RpdmVTY3JvbGxMb2Nrcy5hZGQoZWxlbWVudCk7XG5cbiAgICBjb25zdCBpc0lPUyA9IGlzUGxhdGZvcm0oJ0lPUycpO1xuICAgIGNvbnN0IGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG4gICAgY29uc3Qgc2Nyb2xsYmFyWCA9XG4gICAgICBNYXRoLnJvdW5kKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSArXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICBjb25zdCBwYWRkaW5nUHJvcCA9IHNjcm9sbGJhclggPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBzY3JvbGxYID0gYm9keVN0eWxlLmxlZnQgPyBwYXJzZUZsb2F0KGJvZHlTdHlsZS5sZWZ0KSA6IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICBjb25zdCBzY3JvbGxZID0gYm9keVN0eWxlLnRvcCA/IHBhcnNlRmxvYXQoYm9keVN0eWxlLnRvcCkgOiB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cbiAgICBib2R5U3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ210ZS1zY3JvbGwtbG9jay0tYWN0aXZlJyk7XG5cbiAgICBpZiAoc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgIGJvZHlTdHlsZVtwYWRkaW5nUHJvcF0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGA7XG4gICAgfVxuXG4gICAgLy8gT25seSBpT1MgZG9lc24ndCByZXNwZWN0IGBvdmVyZmxvdzogaGlkZGVuYCBvbiBkb2N1bWVudC5ib2R5LCBhbmQgdGhpc1xuICAgIC8vIHRlY2huaXF1ZSBoYXMgZmV3ZXIgc2lkZSBlZmZlY3RzLlxuICAgIGlmIChpc0lPUykge1xuICAgICAgLy8gaU9TIDEyIGRvZXMgbm90IHN1cHBvcnQgYHZpc3VhbFZpZXdwb3J0YC5cbiAgICAgIGNvbnN0IG9mZnNldExlZnQgPSBnbG9iYWxUaGlzLnZpc3VhbFZpZXdwb3J0Py5vZmZzZXRMZWZ0IHx8IDA7XG4gICAgICBjb25zdCBvZmZzZXRUb3AgPSBnbG9iYWxUaGlzLnZpc3VhbFZpZXdwb3J0Py5vZmZzZXRUb3AgfHwgMDtcblxuICAgICAgT2JqZWN0LmFzc2lnbihib2R5U3R5bGUsIHtcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIHRvcDogYCR7LShzY3JvbGxZIC0gTWF0aC5mbG9vcihvZmZzZXRUb3ApKX1weGAsXG4gICAgICAgIGxlZnQ6IGAkey0oc2Nyb2xsWCAtIE1hdGguZmxvb3Iob2Zmc2V0TGVmdCkpfXB4YCxcbiAgICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGFuIGFjdGl2ZSBzY3JvbGxMb2NrIGlmIHRoZXJlIGFyZSBubyByZW1haW5pbmcgZWxlbWVudHMgcG9ydGFsZWQgdGhhdCByZXF1ZXN0ZWQgaXQgKi9cbiAgcHJpdmF0ZSByZW1vdmVTY3JvbGxMb2NrKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFjdGl2ZVNjcm9sbExvY2tzLmRlbGV0ZShlbGVtZW50KTtcblxuICAgIGlmICh0aGlzLmFjdGl2ZVNjcm9sbExvY2tzLnNpemUgPT09IDApIHtcbiAgICAgIGNvbnN0IGlzSU9TID0gaXNQbGF0Zm9ybSgnSU9TJyk7XG4gICAgICBjb25zdCBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuICAgICAgY29uc3Qgc2Nyb2xsYmFyWCA9XG4gICAgICAgIE1hdGgucm91bmQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpICtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICBjb25zdCBwYWRkaW5nUHJvcCA9IHNjcm9sbGJhclggPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oYm9keVN0eWxlLCB7XG4gICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgW3BhZGRpbmdQcm9wXTogJycsXG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtdGUtc2Nyb2xsLWxvY2stLWFjdGl2ZScpO1xuXG4gICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5U3R5bGUsIHtcbiAgICAgICAgICBwb3NpdGlvbjogJycsXG4gICAgICAgICAgdG9wOiAnJyxcbiAgICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgICByaWdodDogJycsXG4gICAgICAgIH0pO1xuICAgICAgICBnbG9iYWxUaGlzLnNjcm9sbFRvKHNjcm9sbFgsIHNjcm9sbFkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlUG9ydGFsU2VydmljZSA9IG5ldyBfTXRlUG9ydGFsU2VydmljZSgpO1xuIiwgImltcG9ydCB7IHNpZ25hbCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmNsYXNzIF9NdGVIaXN0b3J5QXBpU2VydmljZSB7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjaGFuZ2VTaWduYWwgPSBzaWduYWwoKTtcbiAgcHJpdmF0ZSBwcmV2SHJlZjogc3RyaW5nO1xuXG4gIHB1YmxpYyBzdGF0ZUNoYW5nZXMoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlU2lnbmFsO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3J3YXJkQXBwbHkgPSAodGFyZ2V0LCB0aGlzQXJnLCBhcmdBcnJheSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IHRhcmdldC5hcHBseSh0aGlzQXJnLCBhcmdBcnJheSk7XG4gICAgLy8gT25seSBlbWl0IGEgc3RhdGUgY2hhbmdlIGlmIHRoZSBocmVmIGRpZmZlcnMgZnJvbSB0aGUgbGFzdCBlbWlzc2lvblxuICAgIGlmICh0aGlzLnByZXZIcmVmICE9PSB3aW5kb3cubG9jYXRpb24uaHJlZikge1xuICAgICAgdGhpcy5wcmV2SHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgdGhpcy5jaGFuZ2VTaWduYWwuc2V0KHRoaXMucHJldkhyZWYpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAvLyBMaXN0ZW4gZm9yIGJhY2sgZXZlbnRzIHdpdGggcG9wc3RhdGUgZXZlbnRcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VTaWduYWwuc2V0KHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBQYXRjaCBIaXN0b3J5IEFQSSBtZXRob2RzIHRvIGVuc3VyZSB3ZSBlbWl0IGFueXRpbWUgdGhlaXIgc3RhdGUgaXMgY2hhbmdlZFxuICAgICAgLy8gVGhpcyBpcyBuZWNjZXNhcnkgYmVjYWlzZSB0aGUgYHBvcHN0YXRlYCBldmVudCBpcyBub3QgcmVsaWFibHkgY2FsbGVkIGFjcm9zcyBicm93c2VycyB3aGVuZXZlciB0aGUgaGlzdG9yeSBBUEkgaXMgdXNlZFxuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjayA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5iYWNrLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQgPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkuZm9yd2FyZCwgeyBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHkgfSk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5nbyA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5nbywgeyBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHkgfSk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUsIHtcbiAgICAgICAgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVIaXN0b3J5QXBpU2VydmljZSA9IG5ldyBfTXRlSGlzdG9yeUFwaVNlcnZpY2UoKTtcbiIsICJpbXBvcnQgeyBpc1NzciB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCB0eXBlIE10ZURhdGVGb3JtYXRPcHRpb25zID0gSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnMgJiB7XG4gIGxhbmc/OiBzdHJpbmc7XG4gIGZvcm1hdD86XG4gICAgfCAnc2hvcnQnXG4gICAgfCAnbWVkaXVtJ1xuICAgIHwgJ2xvbmcnXG4gICAgfCAnZnVsbCdcbiAgICB8ICdzaG9ydERhdGUnXG4gICAgfCAnbWVkaXVtRGF0ZSdcbiAgICB8ICdsb25nRGF0ZSdcbiAgICB8ICdmdWxsRGF0ZSdcbiAgICB8ICdzaG9ydFRpbWUnXG4gICAgfCAnbWVkaXVtVGltZSdcbiAgICB8ICdsb25nVGltZSdcbiAgICB8ICdmdWxsVGltZSc7XG59O1xuXG5leHBvcnQgdHlwZSBNdGVOdW1iZXJGb3JtYXRPcHRpb25zID0gSW50bC5OdW1iZXJGb3JtYXRPcHRpb25zICYgeyBsYW5nPzogc3RyaW5nIH07XG5cbmNsYXNzIF9NdGVMb2NhbGl6ZVNlcnZpY2Uge1xuICAvLyBBc3N1bWUgYGVuYCBsYW5nIGZvciBub3cgYXMgYSBmYWxsYmFjayB1bnRpbCB3ZSByb2xsYmFjayB3aWRlciBzdXBwb3J0IGZvciBpMTFuIHdoZW4gbmVjZXNzYXJ5XG4gIHByaXZhdGUgbGFuZ3VhZ2UgPSAnZW4nO1xuICBwcml2YXRlIGluaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIGlmICghaXNTc3IoKSAmJiAhdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0aGlzLmxhbmd1YWdlID0gYCR7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgfHwgbmF2aWdhdG9yLmxhbmd1YWdlfWAudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0TnVtYmVyKG51bWJlclRvRm9ybWF0OiBudW1iZXIgfCBzdHJpbmcsIG9wdGlvbnM/OiBNdGVOdW1iZXJGb3JtYXRPcHRpb25zKTogc3RyaW5nIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICBjb25zdCBsYW5nID0gb3B0aW9ucz8ubGFuZyA/IG9wdGlvbnMubGFuZyA6IHRoaXMubGFuZ3VhZ2U7XG4gICAgbnVtYmVyVG9Gb3JtYXQgPSBOdW1iZXIobnVtYmVyVG9Gb3JtYXQpO1xuICAgIC8vIEVuc3VyZSBubyBudWxsIG9wdGlvbnMgZXhpc3RcbiAgICBjb25zdCBmaW5hbE9wdGlvbnMgPSB7XG4gICAgICBsYW5nOiBvcHRpb25zLmxhbmcgPz8gdW5kZWZpbmVkLFxuICAgICAgc3R5bGU6IG9wdGlvbnMuc3R5bGUgPz8gdW5kZWZpbmVkLFxuICAgICAgY3VycmVuY3k6IG9wdGlvbnMuY3VycmVuY3kgPz8gdW5kZWZpbmVkLFxuICAgICAgY3VycmVuY3lEaXNwbGF5OiBvcHRpb25zLmN1cnJlbmN5RGlzcGxheSA/PyB1bmRlZmluZWQsXG4gICAgICB1c2VHcm91cGluZzogb3B0aW9ucy51c2VHcm91cGluZyA/PyB1bmRlZmluZWQsXG4gICAgICBtaW5pbXVtSW50ZWdlckRpZ2l0czogb3B0aW9ucy5taW5pbXVtSW50ZWdlckRpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IG9wdGlvbnMubWluaW11bUZyYWN0aW9uRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogb3B0aW9ucy5tYXhpbXVtRnJhY3Rpb25EaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgbWluaW11bVNpZ25pZmljYW50RGlnaXRzOiBvcHRpb25zLm1pbmltdW1TaWduaWZpY2FudERpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICBtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHM6IG9wdGlvbnMubWF4aW11bVNpZ25pZmljYW50RGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICB9O1xuICAgIHJldHVybiBpc05hTihudW1iZXJUb0Zvcm1hdClcbiAgICAgID8gJydcbiAgICAgIDogbmV3IEludGwuTnVtYmVyRm9ybWF0KGxhbmcsIGZpbmFsT3B0aW9ucykuZm9ybWF0KG51bWJlclRvRm9ybWF0KTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXREYXRlKGRhdGVUb0Zvcm1hdDogRGF0ZSB8IHN0cmluZywgb3B0aW9ucz86IE10ZURhdGVGb3JtYXRPcHRpb25zKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgY29uc3QgbGFuZyA9IG9wdGlvbnM/LmxhbmcgPyBvcHRpb25zLmxhbmcgOiB0aGlzLmxhbmd1YWdlO1xuICAgIGNvbnN0IGZvcm1hdHRlZE9wdGlvbnMgPSB7IC4uLihvcHRpb25zID8/IHt9KSwgLi4udGhpcy5nZXREZWZpbmVkRGF0ZUZvcm1hdChvcHRpb25zPy5mb3JtYXQpIH07XG4gICAgLy8gRW5zdXJlIG5vIG51bGwgb3B0aW9ucyBleGlzdFxuICAgIGNvbnN0IGZpbmFsT3B0aW9ucyA9IHtcbiAgICAgIGxhbmc6IGZvcm1hdHRlZE9wdGlvbnMubGFuZyA/PyB1bmRlZmluZWQsXG4gICAgICB3ZWVrZGF5OiBmb3JtYXR0ZWRPcHRpb25zLndlZWtkYXkgPz8gdW5kZWZpbmVkLFxuICAgICAgZXJhOiBmb3JtYXR0ZWRPcHRpb25zLmVyYSA/PyB1bmRlZmluZWQsXG4gICAgICB5ZWFyOiBmb3JtYXR0ZWRPcHRpb25zLnllYXIgPz8gdW5kZWZpbmVkLFxuICAgICAgbW9udGg6IGZvcm1hdHRlZE9wdGlvbnMubW9udGggPz8gdW5kZWZpbmVkLFxuICAgICAgZGF5OiBmb3JtYXR0ZWRPcHRpb25zLmRheSA/PyB1bmRlZmluZWQsXG4gICAgICBob3VyOiBmb3JtYXR0ZWRPcHRpb25zLmhvdXIgPz8gdW5kZWZpbmVkLFxuICAgICAgbWludXRlOiBmb3JtYXR0ZWRPcHRpb25zLm1pbnV0ZSA/PyB1bmRlZmluZWQsXG4gICAgICBzZWNvbmQ6IGZvcm1hdHRlZE9wdGlvbnMuc2Vjb25kID8/IHVuZGVmaW5lZCxcbiAgICAgIGZyYWN0aW9uYWxTZWNvbmREaWdpdHM6IGZvcm1hdHRlZE9wdGlvbnMuZnJhY3Rpb25hbFNlY29uZERpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICB0aW1lWm9uZU5hbWU6IGZvcm1hdHRlZE9wdGlvbnMudGltZVpvbmVOYW1lID8/IHVuZGVmaW5lZCxcbiAgICAgIHRpbWVab25lOiBmb3JtYXR0ZWRPcHRpb25zLnRpbWVab25lID8/IHVuZGVmaW5lZCxcbiAgICAgIGhvdXIxMjogZm9ybWF0dGVkT3B0aW9ucy5ob3VyMTIgPz8gdW5kZWZpbmVkLFxuICAgICAgZm9ybWF0OiBmb3JtYXR0ZWRPcHRpb25zLmZvcm1hdCA/PyB1bmRlZmluZWQsXG4gICAgfTtcbiAgICBkYXRlVG9Gb3JtYXQgPSBuZXcgRGF0ZShkYXRlVG9Gb3JtYXQpO1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsYW5nLCBmaW5hbE9wdGlvbnMpLmZvcm1hdChkYXRlVG9Gb3JtYXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZpbmVkRGF0ZUZvcm1hdChcbiAgICBmb3JtYXQ6XG4gICAgICB8ICdzaG9ydCdcbiAgICAgIHwgJ21lZGl1bSdcbiAgICAgIHwgJ2xvbmcnXG4gICAgICB8ICdmdWxsJ1xuICAgICAgfCAnc2hvcnREYXRlJ1xuICAgICAgfCAnbWVkaXVtRGF0ZSdcbiAgICAgIHwgJ2xvbmdEYXRlJ1xuICAgICAgfCAnZnVsbERhdGUnXG4gICAgICB8ICdzaG9ydFRpbWUnXG4gICAgICB8ICdtZWRpdW1UaW1lJ1xuICAgICAgfCAnbG9uZ1RpbWUnXG4gICAgICB8ICdmdWxsVGltZSdcbiAgKTogTXRlRGF0ZUZvcm1hdE9wdGlvbnMge1xuICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICBjYXNlICdzaG9ydCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbG9uZyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2Z1bGwnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnc2hvcnREYXRlJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ21lZGl1bURhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2xvbmdEYXRlJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2Z1bGxEYXRlJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdzaG9ydFRpbWUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ21lZGl1bVRpbWUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2xvbmdUaW1lJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnZnVsbFRpbWUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICBmcmFjdGlvbmFsU2Vjb25kRGlnaXRzOiAyLFxuICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZUxvY2FsaXplU2VydmljZSA9IG5ldyBfTXRlTG9jYWxpemVTZXJ2aWNlKCk7XG4iLCAiaW1wb3J0IHsgUmVhY3RpdmVDb250cm9sbGVyLCBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBNdGVQb3J0YWxTZXJ2aWNlLCBQb3J0YWxPcHRpb25zLCBQb3J0YWxTdGFjayB9IGZyb20gJy4uL3NlcnZpY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0YWxDb250cm9sbGVyT3B0aW9ucyB7XG4gIHN0YWNrOiBQb3J0YWxTdGFjaztcbn1cblxubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbi8qKlxuICogQ29udHJvbGxlciB1c2VkIHRvIGF0dGFjaCBhbnkgZWxlbWVudCB0byBhIHBvcnRhbCBzdGFjay5cbiAqXG4gKiBVc2UgdGhpcyBjb250cm9sbGVyIHdoZW4geW91IG5lZWQgdG8gcmVuZGVyIGFuIG92ZXJsYXkgYXQgdGhlIHJvb3Qgb2YgdGhlIERPTS5cbiAqIFRvIGF2b2lkIHBvc2l0aW9uaW5nIGNvbmZsaWN0cyBvciBvdmVyZmxvdyBjbGlwcGluZy5cbiAqL1xuZXhwb3J0IGNsYXNzIFBvcnRhbENvbnRyb2xsZXIgaW1wbGVtZW50cyBSZWFjdGl2ZUNvbnRyb2xsZXIsIEVsZW1lbnRQb3J0YWxDb250cm9sbGVyIHtcbiAgLyoqIEBpZ25vcmUgKi9cbiAgaWQgPSBuZXh0VW5pcXVlSWQrKztcblxuICAvKipcbiAgICogVXNlZCBieSB0aGUgTXRlUG9ydGFsU2VydmljZSB0byBjYWNoZSB0aGlzIGVsZW1lbnRzIHBvcnRhbGVkIHBhcmVudCByZWZlcmVuY2VcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcGFyZW50UG9ydGFsZWRFbGVtZW50OiBFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBGbGFnIHRvIGhlbHAgY2hlY2sgaWYgYSBkaXNjb25uZWN0ZWQgY2FsbGJhY2sgaGFzIGJlZW4gZmlyZWRcbiAgICogYmVjYXVzZSBvZiBhIHBvcnRhbGluZyBvcGVyYXRpb24uXG4gICAqL1xuICBwcml2YXRlIGlnbm9yZU5leHREaXNjb25uZWN0ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaG9zdDogUmVhY3RpdmVDb250cm9sbGVySG9zdCAmIEVsZW1lbnQsXG4gICAgcHVibGljIG9wdGlvbnM6IFBvcnRhbENvbnRyb2xsZXJPcHRpb25zID0geyBzdGFjazogJ292ZXJsYXknIH1cbiAgKSB7XG4gICAgdGhpcy5ob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XG4gIH1cblxuICAvKiogUmVxdWVzdHMgdGhlIHBvcnRhbCBzZXJ2aWNlIGFwcGVuZCB0aGlzIGl0ZW0gdG8gdGhlIGNvbmZpZ3VyZWQgc3RhY2sgKi9cbiAgcHVibGljIGFwcGVuZFRvU3RhY2soZWxlbWVudDogRWxlbWVudCA9IHRoaXMuaG9zdCwgb3B0aW9uczogUG9ydGFsT3B0aW9ucyA9IHt9KSB7XG4gICAgLy8gT25seSBpZ25vcmUgdGhlIG5leHQgZGlzY29ubmVjdCBpZiB0aGUgZWxlbWVudCBiZWluZyBwb3J0YWxlZCBpcyBjdXJyZW50bHkgY29ubmVjdGVkIHRvIHRoZSBET01cbiAgICBpZiAoZWxlbWVudD8uaXNDb25uZWN0ZWQpIHtcbiAgICAgIHRoaXMuaWdub3JlTmV4dERpc2Nvbm5lY3QgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gTXRlUG9ydGFsU2VydmljZS5hcHBlbmRUb1N0YWNrKHRoaXMsIGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqIFJlcXVlc3RzIHRoZSBwb3J0YWwgc2VydmljZSByZW1vdmUgdGhpcyBlbGVtZW50IGZyb20gdGhlIGNvbmZpZ3VyZWQgc3RhY2sgKi9cbiAgcHVibGljIHJlbW92ZUZyb21TdGFjayhlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5ob3N0KSB7XG4gICAgdGhpcy5pZ25vcmVOZXh0RGlzY29ubmVjdCA9IGZhbHNlO1xuICAgIHJldHVybiBNdGVQb3J0YWxTZXJ2aWNlLnJlbW92ZUZyb21TdGFjayh0aGlzLCBlbGVtZW50KTtcbiAgfVxuXG4gIC8qKiBNYWtlcyBhIGJhY2tkcm9wIGFzc29jaWF0ZWQgd2l0aCBhIHBvcnRhbGVkIGVsZW1lbnQgdmlzaWJsZSBpZiBpdCBleGlzdHMgKi9cbiAgcHVibGljIHNob3dCYWNrZHJvcChlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5ob3N0KSB7XG4gICAgcmV0dXJuIE10ZVBvcnRhbFNlcnZpY2Uuc2hvd0JhY2tkcm9wKHRoaXMsIGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqIEhpZGVzIGEgYmFja2Ryb3AgYXNzb2NpYXRlZCB3aXRoIGEgcG9ydGFsZWQgZWxlbWVudCBpZiBpdCBleGlzdHMgKi9cbiAgcHVibGljIGhpZGVCYWNrZHJvcChlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5ob3N0KSB7XG4gICAgcmV0dXJuIE10ZVBvcnRhbFNlcnZpY2UuaGlkZUJhY2tkcm9wKHRoaXMsIGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIGludGVydG5lc3MgYSBiYWNrZHJvcCBpZiBpdCBleGlzdHMgKHdoZXRoZXIgb3Igbm90IHRoZSB1c2VyIGNhbiBjbGljayB0aHJvdWdoIGl0KSAqL1xuICBwdWJsaWMgc2V0QmFja2Ryb3BJbmVydG5lc3MoaW5lcnQ6IGJvb2xlYW4sIGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLmhvc3QpIHtcbiAgICByZXR1cm4gTXRlUG9ydGFsU2VydmljZS5zZXRCYWNrZHJvcEluZXJ0bmVzcyh0aGlzLCBlbGVtZW50LCBpbmVydCk7XG4gIH1cblxuICBob3N0Q29ubmVjdGVkKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhY2spIHtcbiAgICAgIE10ZVBvcnRhbFNlcnZpY2UuaW5pdGlhbGl6ZVN0YWNrKHRoaXMub3B0aW9ucy5zdGFjayk7XG4gICAgfVxuICB9XG5cbiAgaG9zdERpc2Nvbm5lY3RlZCgpIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgbmV4dCBkaXNjb25uZWN0IHNob3VsZCBiZSBpZ25vcmVkIGJlY2F1c2UgaXQgaXMgdHJpZ2dlZFxuICAgIC8vIGZyb20gYSBwb3J0YWxpbmcgb3BlcmF0aW9uXG4gICAgaWYgKHRoaXMuaWdub3JlTmV4dERpc2Nvbm5lY3QpIHtcbiAgICAgIHRoaXMuaWdub3JlTmV4dERpc2Nvbm5lY3QgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgTXRlUG9ydGFsU2VydmljZS5yZW1vdmVDb250cm9sbGVyKHRoaXMpO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IENvcmVQYWxldHRlLCBEZW5zaXR5T3B0aW9ucywgUHJlc2V0cywgU2l6ZU9wdGlvbnMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25QcmVzZXQge1xuICBzaXplPzogU2l6ZU9wdGlvbnM7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG4gIGRlbnNpdHk/OiBEZW5zaXR5T3B0aW9ucztcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGJ1dHRvblByZXNldHM6IFByZXNldHM8QnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25CdXR0b25QcmVzZXQge1xuICBzaXplPzogU2l6ZU9wdGlvbnM7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG4gIGRlbnNpdHk/OiBEZW5zaXR5T3B0aW9ucztcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGljb25CdXR0b25QcmVzZXRzOiBQcmVzZXRzPEljb25CdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgU3RhdHVzUGFsZXR0ZSB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvblByZXNldCB7XG4gIGNvbG9yPzogU3RhdHVzUGFsZXR0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGljb25QcmVzZXRzOiBQcmVzZXRzPEljb25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgU3RhdHVzUGFsZXR0ZSB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NCYXJQcmVzZXQge1xuICBjb2xvcj86IFN0YXR1c1BhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBwcm9ncmVzc0JhclByZXNldHM6IFByZXNldHM8UHJvZ3Jlc3NCYXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBTdGF0dXNQYWxldHRlIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9ncmVzc1NwaW5uZXJQcmVzZXQge1xuICBjb2xvcj86IFN0YXR1c1BhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzOiBQcmVzZXRzPFByb2dyZXNzU3Bpbm5lclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvb2xiYXJQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHRvb2xiYXJQcmVzZXRzOiBQcmVzZXRzPFRvb2xiYXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZFByZXNldCB7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG4gIHdpdGhTaGFkb3c/OiBib29sZWFuO1xuICB3aXRob3V0U2hhZG93PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJkQnV0dG9uUHJlc2V0IGV4dGVuZHMgQ2FyZFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgY2FyZFByZXNldHM6IFByZXNldHM8Q2FyZFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIHdpdGhvdXRTaGFkb3c6IHRydWUsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IGNhcmRCdXR0b25QcmVzZXRzOiBQcmVzZXRzPENhcmRCdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICB3aXRob3V0U2hhZG93OiB0cnVlLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJlZVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgdHJlZVByZXNldHM6IFByZXNldHM8VHJlZVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBDb3JlUGFsZXR0ZSwgUHJlc2V0cywgU2l6ZU9wdGlvbnMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUYWdQcmVzZXRzIHtcbiAgc2l6ZT86IFNpemVPcHRpb25zO1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgdGFnUHJlc2V0czogUHJlc2V0czxUYWdQcmVzZXRzPiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhZGdlUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBiYWRnZVByZXNldHM6IFByZXNldHM8QmFkZ2VQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgQ29yZVBhbGV0dGUsIFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmtQcmVzZXQge1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICBmb250V2VpZ2h0PzogJ3JlZ3VsYXInIHwgJ2JvbGQnO1xufVxuXG5leHBvcnQgY29uc3QgbGlua1ByZXNldHM6IFByZXNldHM8TGlua1ByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0UHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBhbGVydFByZXNldHM6IFByZXNldHM8QWxlcnRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGlucHV0UHJlc2V0czogUHJlc2V0czxJbnB1dFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBEcmF3ZXJQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGRyYXdlclByZXNldHM6IFByZXNldHM8RHJhd2VyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFzaWRlUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBhc2lkZVByZXNldHM6IFByZXNldHM8QXNpZGVQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFkY3J1bWJJdGVtUHJlc2V0IHtcbiAgZm9udFdlaWdodD86ICdyZWd1bGFyJyB8ICdib2xkJztcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbiAgd2l0aG91dFVuZGVybGluZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBicmVhZGNydW1iSXRlbVByZXNldHM6IFByZXNldHM8QnJlYWRjcnVtYkl0ZW1QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge1xuICAgIHdpdGhvdXRVbmRlcmxpbmU6IHRydWUsXG4gIH0sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG1vZGFsUHJlc2V0czogUHJlc2V0czxNb2RhbFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBDb3JlUGFsZXR0ZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94UHJlc2V0IHtcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGNoZWNrYm94UHJlc2V0czogUHJlc2V0czxDaGVja2JveFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBSYWRpb1ByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgcmFkaW9QcmVzZXRzOiBQcmVzZXRzPFJhZGlvUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdlJvb3RQcmVzZXQge1xuICBtb2JpbGVCcmVha3BvaW50PzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJztcbiAgaW52ZXJzZT86ICdoZWFkZXInIHwgJ3NpZGViYXInO1xuICBwcmVmZXJTaWRlYmFyPzogJ29wZW5lZCcgfCAnY2xvc2VkJztcbn1cblxuZXhwb3J0IGNvbnN0IG5hdlJvb3RQcmVzZXRzOiBQcmVzZXRzPE5hdlJvb3RQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7XG4gICAgaW52ZXJzZTogJ3NpZGViYXInLFxuICB9LFxuICBjeDoge1xuICAgIHByZWZlclNpZGViYXI6ICdjbG9zZWQnLFxuICB9LFxuICBweDoge1xuICAgIGludmVyc2U6ICdzaWRlYmFyJyxcbiAgfSxcbiAgcng6IHtcbiAgICBwcmVmZXJTaWRlYmFyOiAnY2xvc2VkJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2SGVhZGVyUHJlc2V0IHtcbiAgd2l0aENvbnRhaW5lcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZIZWFkZXJQcmVzZXRzOiBQcmVzZXRzPE5hdkhlYWRlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZTdWJIZWFkZXJQcmVzZXQge1xuICB3aXRoQ29udGFpbmVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IG5hdlN1YkhlYWRlclByZXNldHM6IFByZXNldHM8TmF2U3ViSGVhZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdlNpZGViYXJQcmVzZXQge1xuICBoaWRlVW50aWxUcmFuc2l0aW9uPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IG5hdlNpZGViYXJQcmVzZXRzOiBQcmVzZXRzPE5hdlNpZGViYXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBoaWRlVW50aWxUcmFuc2l0aW9uOiB0cnVlLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7XG4gICAgaGlkZVVudGlsVHJhbnNpdGlvbjogdHJ1ZSxcbiAgfSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2Q29udGVudFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF2Q29udGVudFByZXNldHM6IFByZXNldHM8TmF2Q29udGVudFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZGb290ZXJQcmVzZXQge1xuICB3aXRoQ29udGFpbmVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IG5hdkZvb3RlclByZXNldHM6IFByZXNldHM8TmF2Rm9vdGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkJ1dHRvblByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF2QnV0dG9uUHJlc2V0czogUHJlc2V0czxOYXZCdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2SWNvbkJ1dHRvblByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF2SWNvbkJ1dHRvblByZXNldHM6IFByZXNldHM8TmF2SWNvbkJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZJdGVtUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXZJdGVtUHJlc2V0czogUHJlc2V0czxOYXZJdGVtUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Hcm91cFByZXNldCB7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBidXR0b25Hcm91cFByZXNldHM6IFByZXNldHM8QnV0dG9uR3JvdXBQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXRjaFByZXNldCB7fVxuXG5leHBvcnQgY29uc3Qgc3dpdGNoUHJlc2V0czogUHJlc2V0czxTd2l0Y2hQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZVNlbGVjdFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF0aXZlU2VsZWN0UHJlc2V0czogUHJlc2V0czxOYXRpdmVTZWxlY3RQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRleHRhcmVhUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCB0ZXh0YXJlYVByZXNldHM6IFByZXNldHM8VGV4dGFyZWFQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNrZWxldG9uUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBza2VsZXRvblByZXNldHM6IFByZXNldHM8U2tlbGV0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlclByZXNldCB7fVxuXG5leHBvcnQgY29uc3Qgc2xpZGVyUHJlc2V0czogUHJlc2V0czxTbGlkZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhbmdlU2xpZGVyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCByYW5nZVNsaWRlclByZXNldHM6IFByZXNldHM8UmFuZ2VTbGlkZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlZ21lbnRlZENvbnRyb2xQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzOiBQcmVzZXRzPFNlZ21lbnRlZENvbnRyb2xQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgYnV0dG9uUHJlc2V0cywgaWNvbkJ1dHRvblByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYnV0dG9uL2J1dHRvbi5wcmVzZXRzJztcbmltcG9ydCB7IGljb25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2ljb24vaWNvbi5wcmVzZXRzJztcbmltcG9ydCB7IHByb2dyZXNzQmFyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLnByZXNldHMnO1xuaW1wb3J0IHsgcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXIucHJlc2V0cyc7XG5pbXBvcnQgeyB0b29sYmFyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy90b29sYmFyL3Rvb2xiYXIucHJlc2V0cyc7XG5pbXBvcnQgeyBjYXJkUHJlc2V0cywgY2FyZEJ1dHRvblByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvY2FyZC9jYXJkLnByZXNldHMnO1xuaW1wb3J0IHsgdHJlZVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdHJlZS90cmVlLnByZXNldHMnO1xuaW1wb3J0IHsgdGFnUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy90YWcvdGFnLnByZXNldHMnO1xuaW1wb3J0IHsgYmFkZ2VQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2JhZGdlL2JhZGdlLnByZXNldHMnO1xuaW1wb3J0IHsgbGlua1ByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvbGluay9saW5rLnByZXNldHMnO1xuaW1wb3J0IHsgYWxlcnRQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2FsZXJ0L2FsZXJ0LnByZXNldHMnO1xuaW1wb3J0IHsgaW5wdXRQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2lucHV0L2lucHV0LnByZXNldHMnO1xuaW1wb3J0IHsgZHJhd2VyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9kcmF3ZXIvZHJhd2VyLnByZXNldHMnO1xuaW1wb3J0IHsgYXNpZGVQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2FzaWRlL2FzaWRlLnByZXNldHMnO1xuaW1wb3J0IHsgYnJlYWRjcnVtYkl0ZW1QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWItaXRlbS5wcmVzZXRzJztcbmltcG9ydCB7IG1vZGFsUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9tb2RhbC9tb2RhbC5wcmVzZXRzJztcbmltcG9ydCB7IGNoZWNrYm94UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9jaGVja2JveC9jaGVja2JveC5wcmVzZXRzJztcbmltcG9ydCB7IHJhZGlvUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9yYWRpby9yYWRpby5wcmVzZXRzJztcbmltcG9ydCB7XG4gIG5hdlJvb3RQcmVzZXRzLFxuICBuYXZIZWFkZXJQcmVzZXRzLFxuICBuYXZTdWJIZWFkZXJQcmVzZXRzLFxuICBuYXZTaWRlYmFyUHJlc2V0cyxcbiAgbmF2Q29udGVudFByZXNldHMsXG4gIG5hdkZvb3RlclByZXNldHMsXG4gIG5hdkJ1dHRvblByZXNldHMsXG4gIG5hdkljb25CdXR0b25QcmVzZXRzLFxuICBuYXZJdGVtUHJlc2V0cyxcbn0gZnJvbSAnLi4vLi4vYXRvbWljL25hdi9uYXYucHJlc2V0cyc7XG5pbXBvcnQgeyBidXR0b25Hcm91cFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC5wcmVzZXRzJztcbmltcG9ydCB7IHN3aXRjaFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc3dpdGNoL3N3aXRjaC5wcmVzZXRzJztcbmltcG9ydCB7IG5hdGl2ZVNlbGVjdFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvbmF0aXZlLXNlbGVjdC9uYXRpdmUtc2VsZWN0LnByZXNldHMnO1xuaW1wb3J0IHsgdGV4dGFyZWFQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3RleHRhcmVhL3RleHRhcmVhLnByZXNldHMnO1xuaW1wb3J0IHsgc2tlbGV0b25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3NrZWxldG9uL3NrZWxldG9uLnByZXNldHMnO1xuaW1wb3J0IHsgc2xpZGVyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9zbGlkZXIvc2xpZGVyLnByZXNldHMnO1xuaW1wb3J0IHsgcmFuZ2VTbGlkZXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3JhbmdlLXNsaWRlci9yYW5nZS1zbGlkZXIucHJlc2V0cyc7XG5pbXBvcnQgeyBzZWdtZW50ZWRDb250cm9sUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9zZWdtZW50ZWQtY29udHJvbC9zZWdtZW50ZWQtY29udHJvbC5wcmVzZXRzJztcblxuZXhwb3J0IGludGVyZmFjZSBNb3J0YXJQcmVzZXRUaGVtZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29sb3JTY2hlbWU6ICdzeXN0ZW0nIHwgJ2xpZ2h0JyB8ICdkYXJrJztcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcmVzZXQgPSB7XG4gIHByZXNldDogJ2RlZmF1bHQnLFxuICB0aGVtZToge1xuICAgIG5hbWU6ICdweCcsXG4gICAgY29sb3JTY2hlbWU6ICdsaWdodCcsXG4gIH0gYXMgTW9ydGFyUHJlc2V0VGhlbWUsXG4gIE10ZUJ1dHRvbjogYnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVJY29uQnV0dG9uOiBpY29uQnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVJY29uOiBpY29uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVQcm9ncmVzc0JhcjogcHJvZ3Jlc3NCYXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVByb2dyZXNzU3Bpbm5lcjogcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVUb29sYmFyOiB0b29sYmFyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVDYXJkOiBjYXJkUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVDYXJkQnV0dG9uOiBjYXJkQnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVUcmVlOiB0cmVlUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVUYWc6IHRhZ1ByZXNldHMuZGVmYXVsdCxcbiAgTXRlQmFkZ2U6IGJhZGdlUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVMaW5rOiBsaW5rUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVBbGVydDogYWxlcnRQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUlucHV0OiBpbnB1dFByZXNldHMuZGVmYXVsdCxcbiAgTXRlRHJhd2VyOiBkcmF3ZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUFzaWRlOiBhc2lkZVByZXNldHMuZGVmYXVsdCxcbiAgTXRlQnJlYWRjcnVtYkl0ZW06IGJyZWFkY3J1bWJJdGVtUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVNb2RhbDogbW9kYWxQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUNoZWNrYm94OiBjaGVja2JveFByZXNldHMuZGVmYXVsdCxcbiAgTXRlUmFkaW86IHJhZGlvUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZSb290OiBuYXZSb290UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZIZWFkZXI6IG5hdkhlYWRlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2U3ViSGVhZGVyOiBuYXZTdWJIZWFkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdlNpZGViYXI6IG5hdlNpZGViYXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkNvbnRlbnQ6IG5hdkNvbnRlbnRQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkZvb3RlcjogbmF2Rm9vdGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZCdXR0b246IG5hdkJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2SWNvbkJ1dHRvbjogbmF2SWNvbkJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2SXRlbTogbmF2SXRlbVByZXNldHMuZGVmYXVsdCxcbiAgTXRlQnV0dG9uR3JvdXA6IGJ1dHRvbkdyb3VwUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVTd2l0Y2g6IHN3aXRjaFByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF0aXZlU2VsZWN0OiBuYXRpdmVTZWxlY3RQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVRleHRhcmVhOiB0ZXh0YXJlYVByZXNldHMuZGVmYXVsdCxcbiAgTXRlU2tlbGV0b246IHNrZWxldG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVTbGlkZXI6IHNsaWRlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlUmFuZ2VTbGlkZXI6IHJhbmdlU2xpZGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVTZWdtZW50ZWRDb250cm9sOiBzZWdtZW50ZWRDb250cm9sUHJlc2V0cy5kZWZhdWx0LFxufTtcblxuZXhwb3J0IHR5cGUgTW9ydGFyUHJlc2V0ID0gdHlwZW9mIGRlZmF1bHRQcmVzZXQ7XG5cbmV4cG9ydCBjb25zdCBweFByZXNldDogTW9ydGFyUHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdweCcsXG4gIHRoZW1lOiB7XG4gICAgbmFtZTogJ3B4JyxcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSxcbiAgTXRlQnV0dG9uOiBidXR0b25QcmVzZXRzLnB4LFxuICBNdGVJY29uQnV0dG9uOiBpY29uQnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMucHgsXG4gIE10ZVByb2dyZXNzQmFyOiBwcm9ncmVzc0JhclByZXNldHMucHgsXG4gIE10ZVByb2dyZXNzU3Bpbm5lcjogcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cy5weCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMucHgsXG4gIE10ZUNhcmQ6IGNhcmRQcmVzZXRzLnB4LFxuICBNdGVDYXJkQnV0dG9uOiBjYXJkQnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMucHgsXG4gIE10ZVRhZzogdGFnUHJlc2V0cy5weCxcbiAgTXRlQmFkZ2U6IGJhZGdlUHJlc2V0cy5weCxcbiAgTXRlTGluazogbGlua1ByZXNldHMucHgsXG4gIE10ZUFsZXJ0OiBhbGVydFByZXNldHMucHgsXG4gIE10ZUlucHV0OiBpbnB1dFByZXNldHMucHgsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5weCxcbiAgTXRlQXNpZGU6IGFzaWRlUHJlc2V0cy5weCxcbiAgTXRlQnJlYWRjcnVtYkl0ZW06IGJyZWFkY3J1bWJJdGVtUHJlc2V0cy5weCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5weCxcbiAgTXRlQ2hlY2tib3g6IGNoZWNrYm94UHJlc2V0cy5weCxcbiAgTXRlUmFkaW86IHJhZGlvUHJlc2V0cy5weCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMucHgsXG4gIE10ZU5hdkhlYWRlcjogbmF2SGVhZGVyUHJlc2V0cy5weCxcbiAgTXRlTmF2U3ViSGVhZGVyOiBuYXZTdWJIZWFkZXJQcmVzZXRzLnB4LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5weCxcbiAgTXRlTmF2Q29udGVudDogbmF2Q29udGVudFByZXNldHMucHgsXG4gIE10ZU5hdkZvb3RlcjogbmF2Rm9vdGVyUHJlc2V0cy5weCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLnB4LFxuICBNdGVOYXZJY29uQnV0dG9uOiBuYXZJY29uQnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlTmF2SXRlbTogbmF2SXRlbVByZXNldHMucHgsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMucHgsXG4gIE10ZVN3aXRjaDogc3dpdGNoUHJlc2V0cy5weCxcbiAgTXRlTmF0aXZlU2VsZWN0OiBuYXRpdmVTZWxlY3RQcmVzZXRzLnB4LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLnB4LFxuICBNdGVTa2VsZXRvbjogc2tlbGV0b25QcmVzZXRzLnB4LFxuICBNdGVTbGlkZXI6IHNsaWRlclByZXNldHMucHgsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMucHgsXG4gIE10ZVNlZ21lbnRlZENvbnRyb2w6IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzLnB4LFxufTtcblxuZXhwb3J0IGNvbnN0IGN4UHJlc2V0OiBNb3J0YXJQcmVzZXQgPSB7XG4gIHByZXNldDogJ2N4JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAnY3gnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9LFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMuY3gsXG4gIE10ZUljb25CdXR0b246IGljb25CdXR0b25QcmVzZXRzLmN4LFxuICBNdGVJY29uOiBpY29uUHJlc2V0cy5jeCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5jeCxcbiAgTXRlUHJvZ3Jlc3NTcGlubmVyOiBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzLmN4LFxuICBNdGVUb29sYmFyOiB0b29sYmFyUHJlc2V0cy5jeCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMuY3gsXG4gIE10ZUNhcmRCdXR0b246IGNhcmRCdXR0b25QcmVzZXRzLmN4LFxuICBNdGVUcmVlOiB0cmVlUHJlc2V0cy5jeCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLmN4LFxuICBNdGVCYWRnZTogYmFkZ2VQcmVzZXRzLmN4LFxuICBNdGVMaW5rOiBsaW5rUHJlc2V0cy5jeCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5jeCxcbiAgTXRlSW5wdXQ6IGlucHV0UHJlc2V0cy5jeCxcbiAgTXRlRHJhd2VyOiBkcmF3ZXJQcmVzZXRzLmN4LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLmN4LFxuICBNdGVCcmVhZGNydW1iSXRlbTogYnJlYWRjcnVtYkl0ZW1QcmVzZXRzLmN4LFxuICBNdGVNb2RhbDogbW9kYWxQcmVzZXRzLmN4LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLmN4LFxuICBNdGVSYWRpbzogcmFkaW9QcmVzZXRzLmN4LFxuICBNdGVOYXZSb290OiBuYXZSb290UHJlc2V0cy5jeCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLmN4LFxuICBNdGVOYXZTdWJIZWFkZXI6IG5hdlN1YkhlYWRlclByZXNldHMuY3gsXG4gIE10ZU5hdlNpZGViYXI6IG5hdlNpZGViYXJQcmVzZXRzLmN4LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5jeCxcbiAgTXRlTmF2Rm9vdGVyOiBuYXZGb290ZXJQcmVzZXRzLmN4LFxuICBNdGVOYXZCdXR0b246IG5hdkJ1dHRvblByZXNldHMuY3gsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLmN4LFxuICBNdGVOYXZJdGVtOiBuYXZJdGVtUHJlc2V0cy5jeCxcbiAgTXRlQnV0dG9uR3JvdXA6IGJ1dHRvbkdyb3VwUHJlc2V0cy5jeCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLmN4LFxuICBNdGVOYXRpdmVTZWxlY3Q6IG5hdGl2ZVNlbGVjdFByZXNldHMuY3gsXG4gIE10ZVRleHRhcmVhOiB0ZXh0YXJlYVByZXNldHMuY3gsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMuY3gsXG4gIE10ZVNsaWRlcjogc2xpZGVyUHJlc2V0cy5jeCxcbiAgTXRlUmFuZ2VTbGlkZXI6IHJhbmdlU2xpZGVyUHJlc2V0cy5jeCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMuY3gsXG59O1xuXG5leHBvcnQgY29uc3QgcnhQcmVzZXQ6IE1vcnRhclByZXNldCA9IHtcbiAgcHJlc2V0OiAncngnLFxuICB0aGVtZToge1xuICAgIG5hbWU6ICdyeCcsXG4gICAgY29sb3JTY2hlbWU6ICdsaWdodCcsXG4gIH0sXG4gIE10ZUJ1dHRvbjogYnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMucngsXG4gIE10ZUljb246IGljb25QcmVzZXRzLnJ4LFxuICBNdGVQcm9ncmVzc0JhcjogcHJvZ3Jlc3NCYXJQcmVzZXRzLnJ4LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMucngsXG4gIE10ZVRvb2xiYXI6IHRvb2xiYXJQcmVzZXRzLnJ4LFxuICBNdGVDYXJkOiBjYXJkUHJlc2V0cy5yeCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMucngsXG4gIE10ZVRyZWU6IHRyZWVQcmVzZXRzLnJ4LFxuICBNdGVUYWc6IHRhZ1ByZXNldHMucngsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMucngsXG4gIE10ZUxpbms6IGxpbmtQcmVzZXRzLnJ4LFxuICBNdGVBbGVydDogYWxlcnRQcmVzZXRzLnJ4LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLnJ4LFxuICBNdGVEcmF3ZXI6IGRyYXdlclByZXNldHMucngsXG4gIE10ZUFzaWRlOiBhc2lkZVByZXNldHMucngsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMucngsXG4gIE10ZU1vZGFsOiBtb2RhbFByZXNldHMucngsXG4gIE10ZUNoZWNrYm94OiBjaGVja2JveFByZXNldHMucngsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMucngsXG4gIE10ZU5hdlJvb3Q6IG5hdlJvb3RQcmVzZXRzLnJ4LFxuICBNdGVOYXZIZWFkZXI6IG5hdkhlYWRlclByZXNldHMucngsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5yeCxcbiAgTXRlTmF2U2lkZWJhcjogbmF2U2lkZWJhclByZXNldHMucngsXG4gIE10ZU5hdkNvbnRlbnQ6IG5hdkNvbnRlbnRQcmVzZXRzLnJ4LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMucngsXG4gIE10ZU5hdkJ1dHRvbjogbmF2QnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlTmF2SWNvbkJ1dHRvbjogbmF2SWNvbkJ1dHRvblByZXNldHMucngsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLnJ4LFxuICBNdGVCdXR0b25Hcm91cDogYnV0dG9uR3JvdXBQcmVzZXRzLnJ4LFxuICBNdGVTd2l0Y2g6IHN3aXRjaFByZXNldHMucngsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5yeCxcbiAgTXRlVGV4dGFyZWE6IHRleHRhcmVhUHJlc2V0cy5yeCxcbiAgTXRlU2tlbGV0b246IHNrZWxldG9uUHJlc2V0cy5yeCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLnJ4LFxuICBNdGVSYW5nZVNsaWRlcjogcmFuZ2VTbGlkZXJQcmVzZXRzLnJ4LFxuICBNdGVTZWdtZW50ZWRDb250cm9sOiBzZWdtZW50ZWRDb250cm9sUHJlc2V0cy5yeCxcbn07XG4iLCAiaW1wb3J0IHsgY3hQcmVzZXQsIGRlZmF1bHRQcmVzZXQsIE1vcnRhclByZXNldCwgcHhQcmVzZXQsIHJ4UHJlc2V0IH0gZnJvbSAnLi9wcmVzZXRzJztcbmltcG9ydCB7IGNvbXB1dGVkLCBTaWduYWwsIHNpZ25hbCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmNsYXNzIF9NdGVQcmVzZXRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBwcmVzZXRzID0gbmV3IE1hcDxzdHJpbmcsIE1vcnRhclByZXNldD4oW1xuICAgIFsnZ2xvYmFsJywgZGVmYXVsdFByZXNldF0sXG4gICAgWydkZWZhdWx0JywgZGVmYXVsdFByZXNldF0sXG4gICAgWydweCcsIHB4UHJlc2V0XSxcbiAgICBbJ2N4JywgY3hQcmVzZXRdLFxuICAgIFsncngnLCByeFByZXNldF0sXG4gIF0pO1xuXG4gIHByaXZhdGUgcHJlc2V0Q2hhbmdlZFNpZ25hbCA9IHNpZ25hbDx7IHByZXNldE5hbWU6IHN0cmluZzsgY29tcG9uZW50TmFtZTogc3RyaW5nIH0+KHtcbiAgICBwcmVzZXROYW1lOiBudWxsLFxuICAgIGNvbXBvbmVudE5hbWU6IG51bGwsXG4gIH0pO1xuXG4gIHB1YmxpYyBzZXRQcmVzZXQocHJlc2V0TmFtZTogc3RyaW5nLCBwcmVzZXQ6IFBhcnRpYWw8TW9ydGFyUHJlc2V0Pikge1xuICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgLi4uKHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSkgPz8gZGVmYXVsdFByZXNldCksXG4gICAgICAuLi5wcmVzZXQsXG4gICAgfSk7XG4gICAgdGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLnNldCh7IHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWU6IG51bGwgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29tcG9uZW50UHJlc2V0PEMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXQ+KFxuICAgIHByZXNldE5hbWU6IHN0cmluZyxcbiAgICBjb21wb25lbnROYW1lOiBDLFxuICAgIGNvbXBvbmVudFByZXNldDogUGFydGlhbDxNb3J0YXJQcmVzZXRbQ10+XG4gICkge1xuICAgIGNvbnN0IHNlbGVjdGVkUHJlc2V0ID0gdGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKSA/PyBkZWZhdWx0UHJlc2V0O1xuICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgLi4uc2VsZWN0ZWRQcmVzZXQsXG4gICAgICBbY29tcG9uZW50TmFtZV06IHtcbiAgICAgICAgLi4uKHNlbGVjdGVkUHJlc2V0W2NvbXBvbmVudE5hbWVdID8/ICh7fSBhcyBhbnkpKSxcbiAgICAgICAgLi4uY29tcG9uZW50UHJlc2V0LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLnByZXNldENoYW5nZWRTaWduYWwuc2V0KHsgcHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb21wb25lbnRQcmVzZXRQcm9wZXJ0eTxDIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0LCBQIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0W0NdPihcbiAgICBwcmVzZXROYW1lOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogQyxcbiAgICBwcm9wZXJ0eU5hbWU6IFAsXG4gICAgdmFsdWU6IE1vcnRhclByZXNldFtDXVtQXSB8IFBhcnRpYWw8TW9ydGFyUHJlc2V0W0NdW1BdPlxuICApIHtcbiAgICBjb25zdCBzZWxlY3RlZFByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSkgPz8gZGVmYXVsdFByZXNldDtcbiAgICBjb25zdCBzZWxlY3RlZENvbXBvbmVudFByZXNldCA9IHNlbGVjdGVkUHJlc2V0W2NvbXBvbmVudE5hbWVdIGFzIGFueTtcblxuICAgIC8vIElmIHNldHRpbmcgYW4gb2JqZWN0IHZhbHVlIGJlIHN1cmUgdG8gc3ByZWFkIG92ZXIgZXhpc3RpbmcgdmFsdWVcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5wcmVzZXRzLnNldChwcmVzZXROYW1lLCB7XG4gICAgICAgIC4uLnNlbGVjdGVkUHJlc2V0LFxuICAgICAgICBbY29tcG9uZW50TmFtZV06IHtcbiAgICAgICAgICAuLi5zZWxlY3RlZENvbXBvbmVudFByZXNldCxcbiAgICAgICAgICBbcHJvcGVydHlOYW1lXToge1xuICAgICAgICAgICAgLi4uc2VsZWN0ZWRDb21wb25lbnRQcmVzZXRbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICAgIC4uLnZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlIGp1c3Qgc2V0IHRoZSB2YWx1ZVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5wcmVzZXRzLnNldChwcmVzZXROYW1lLCB7XG4gICAgICAgIC4uLnNlbGVjdGVkUHJlc2V0LFxuICAgICAgICBbY29tcG9uZW50TmFtZV06IHtcbiAgICAgICAgICAuLi5zZWxlY3RlZENvbXBvbmVudFByZXNldCxcbiAgICAgICAgICBbcHJvcGVydHlOYW1lXTogdmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLnNldCh7IHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWUgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJlc2V0KHByZXNldE5hbWU6IHN0cmluZyk6IE1vcnRhclByZXNldCB7XG4gICAgY29uc3QgcHJlc2V0ID0gdGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKTtcbiAgICBpZiAoIXByZXNldCkge1xuICAgICAgY29uc29sZS5lcnJvcihgTXRlUHJlc2V0U2VydmljZTogQSBwcmVzZXQgd2l0aCB0aGUgbmFtZSBcIiR7cHJlc2V0TmFtZX1cIiBkb2VzIG5vdCBleGlzdGApO1xuICAgIH1cbiAgICByZXR1cm4gcHJlc2V0O1xuICB9XG5cbiAgcHVibGljIGdldENvbXBvbmVudFByZXNldDxDIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0PihcbiAgICBwcmVzZXROYW1lOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogQ1xuICApOiBNb3J0YXJQcmVzZXRbQ10ge1xuICAgIGNvbnN0IHByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSk7XG4gICAgY29uc3QgY29tcG9uZW50UHJlc2V0ID0gcHJlc2V0W2NvbXBvbmVudE5hbWVdO1xuICAgIGlmICghcHJlc2V0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBNdGVQcmVzZXRTZXJ2aWNlOiBBIHByZXNldCB3aXRoIHRoZSBuYW1lIFwiJHtwcmVzZXROYW1lfVwiIGRvZXMgbm90IGV4aXN0LmApO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50UHJlc2V0O1xuICB9XG5cbiAgcHVibGljIHNlbGVjdFByZXNldChwcmVzZXROYW1lOiBzdHJpbmcpOiBTaWduYWw8TW9ydGFyUHJlc2V0PiB7XG4gICAgbGV0IGZpcnN0RW1pdCA9IHRydWU7XG4gICAgcmV0dXJuIGNvbXB1dGVkKHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbCwgKGNoYW5nZSwgc2V0KSA9PiB7XG4gICAgICBpZiAoZmlyc3RFbWl0KSB7XG4gICAgICAgIHNldCh0aGlzLmdldFByZXNldChwcmVzZXROYW1lKSk7XG4gICAgICAgIGZpcnN0RW1pdCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChjaGFuZ2UucHJlc2V0TmFtZSA9PT0gcHJlc2V0TmFtZSkge1xuICAgICAgICBzZXQodGhpcy5nZXRQcmVzZXQocHJlc2V0TmFtZSkpO1xuICAgICAgfVxuICAgIH0pIGFzIFNpZ25hbDxNb3J0YXJQcmVzZXQ+O1xuICB9XG5cbiAgcHVibGljIHNlbGVjdENvbXBvbmVudFByZXNldDxDIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0PihcbiAgICBwcmVzZXROYW1lOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogQ1xuICApOiBTaWduYWw8TW9ydGFyUHJlc2V0W0NdPiB7XG4gICAgbGV0IGZpcnN0RW1pdCA9IHRydWU7XG4gICAgcmV0dXJuIGNvbXB1dGVkKHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbCwgKGNoYW5nZSwgc2V0KSA9PiB7XG4gICAgICBpZiAoZmlyc3RFbWl0KSB7XG4gICAgICAgIHNldCh0aGlzLmdldENvbXBvbmVudFByZXNldChwcmVzZXROYW1lLCBjb21wb25lbnROYW1lKSk7XG4gICAgICAgIGZpcnN0RW1pdCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKGNoYW5nZS5wcmVzZXROYW1lID09PSBwcmVzZXROYW1lICYmICFjaGFuZ2UuY29tcG9uZW50TmFtZSkgfHxcbiAgICAgICAgKGNoYW5nZS5wcmVzZXROYW1lID09PSBwcmVzZXROYW1lICYmIGNoYW5nZS5jb21wb25lbnROYW1lID09PSBjb21wb25lbnROYW1lKVxuICAgICAgKSB7XG4gICAgICAgIHNldCh0aGlzLmdldENvbXBvbmVudFByZXNldChwcmVzZXROYW1lLCBjb21wb25lbnROYW1lKSk7XG4gICAgICB9XG4gICAgfSkgYXMgU2lnbmFsPE1vcnRhclByZXNldFtDXT47XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZVByZXNldFNlcnZpY2UgPSBuZXcgX010ZVByZXNldFNlcnZpY2UoKTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzICovXG5pbXBvcnQgeyBDb250ZXh0Q29uc3VtZXIgfSBmcm9tICdAbGl0LWxhYnMvY29udGV4dCc7XG5pbXBvcnQgeyBQcm9wZXJ0eURlY2xhcmF0aW9uLCBSZWFjdGl2ZUVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHksIHN0YXRlIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtcbiAgQ29uc3RydWN0b3IsXG4gIGlzU3NyLFxuICBNdGVFbGVtZW50LFxuICBNdGVQcmVzZXRTZXJ2aWNlLFxuICBwcmVzZXRDb250ZXh0LFxuICBzaWduYWwsXG4gIGNvbXB1dGVkLFxuICBVbnN1YnNjcmliZXIsXG59IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBNb3J0YXJQcmVzZXQgfSBmcm9tICcuL3ByZXNldHMnO1xuXG5leHBvcnQgdHlwZSBQcmVzZXRPcHRpb25zID0gJ21kJyB8ICdzbScgfCAnbGcnIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcmVzZXRFbGVtZW50SW50ZXJmYWNlPFA+IHtcbiAgLyoqIEBpZ25vcmUgKi9cbiAgcmVhZG9ubHkgX19jb21wb25lbnROYW1lOiBrZXlvZiBNb3J0YXJQcmVzZXQ7XG5cbiAgLyoqIFNlbGVjdHMgdGhlIHByZXNldCBmb3IgdGhpcyBjb21wb25lbnQuIE92ZXJyaWRlcyB0aGUgZ2xvYmFsIHByZXNldCBmb3IgdGhpcyBpbnN0YW5jZSBvZiB0aGlzIGNvbXBvbmVudC4gKi9cbiAgcHJlc2V0OiBzdHJpbmc7XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgYXBwbGllZFByZXNldDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByZXNldE1peGluRmFjdG9yeU9wdGlvbnMge1xuICByZWZsZWN0QXBwbGllZFByZXNldDogYm9vbGVhbjtcbn1cblxuY29uc3Qge1xuICBpcyxcbiAgZGVmaW5lUHJvcGVydHksXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBnZXRQcm90b3R5cGVPZixcbn0gPSBPYmplY3Q7XG5cbmV4cG9ydCBjb25zdCBQcmVzZXRNaXhpbkZhY3RvcnkgPSA8UD4oXG4gIGNvbXBvbmVudE5hbWU6IGtleW9mIE1vcnRhclByZXNldCxcbiAgb3B0aW9uczogUHJlc2V0TWl4aW5GYWN0b3J5T3B0aW9ucyA9IHsgcmVmbGVjdEFwcGxpZWRQcmVzZXQ6IGZhbHNlIH1cbikgPT4ge1xuICByZXR1cm4gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICAgIGNsYXNzIFByZXNldEVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHJlYWRvbmx5IF9fY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWU7XG5cbiAgICAgIC8qKiBNYXAgdGhhdCBzdG9yZXMgcHJpdmF0ZSB2YWx1ZXMgdGhhdCB0YWtlIHByZWNlZGVuY2Ugb3ZlciBwcmVzZXQgdmFsdWVzICovXG4gICAgICBwcm90ZWN0ZWQgX3ZhbHVlTWFwID0gbmV3IE1hcDxQcm9wZXJ0eUtleSwgUFtrZXlvZiBQXT4oKTtcblxuICAgICAgLyoqIE1hcCB0aGF0IHN0b3JlcyBmYWxsYmFjayBwcmVzZXQgdmFsdWVzIGVtaXR0ZWQgYnkgdGhlIHByZXNldENvbnRyb2xsZXIgKi9cbiAgICAgIHByb3RlY3RlZCBfcHJlc2V0TWFwID0gbmV3IE1hcDxQcm9wZXJ0eUtleSwgUFtrZXlvZiBQXT4oKTtcblxuICAgICAgLyoqIFNlbGVjdHMgYSBzcGVjaWZpYyBwcmVzZXQgZm9yIHRoaXMgY29tcG9uZW50IGluc3RhbmNlLiBPdmVycmlkZXMgdGhlIGN1cnJlbnQgZ2xvYmFsIHByZXNldC4gKi9cbiAgICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSlcbiAgICAgIHNldCBwcmVzZXQocHJlc2V0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJlc2V0ID0gcHJlc2V0O1xuICAgICAgICB0aGlzLl9hY3RpdmVQcmVzZXRTaWduYWwuc2V0KHByZXNldCk7XG4gICAgICAgIGlmIChpc1NzcigpKSB7XG4gICAgICAgICAgLy8gU3RvcCBTU1IgY29uc3RydWN0b3IgbGlzdGVuZXIgaWYgc3RpbGwgb3Blbi5cbiAgICAgICAgICB0aGlzLnNzckNvbnN0cnVjdG9yU3ViPy4oKTtcbiAgICAgICAgICB0aGlzLnNzckNvbnN0cnVjdG9yU3ViID0gbnVsbDtcbiAgICAgICAgICBjb25zdCBwcmVzZXQgPSBNdGVQcmVzZXRTZXJ2aWNlLmdldFByZXNldCh0aGlzLnByZXNldCA/PyAnZ2xvYmFsJyk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVTc3JQcmVzZXRDaGFuZ2VzKHByZXNldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGdldCBwcmVzZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVzZXQ7XG4gICAgICB9XG4gICAgICBwcml2YXRlIF9wcmVzZXQgPSAnZ2xvYmFsJztcblxuICAgICAgQHByb3BlcnR5KHsgcmVmbGVjdDogb3B0aW9ucz8ucmVmbGVjdEFwcGxpZWRQcmVzZXQgPz8gZmFsc2UgfSkgYXBwbGllZFByZXNldCA9ICdnbG9iYWwnO1xuXG4gICAgICBAc3RhdGUoKSBwcml2YXRlIF9hcHBsaWVkUHJlc2V0Pzogc3RyaW5nO1xuXG4gICAgICAvKiogS2VlcHMgY29uc3RydWN0b3IgcHJlc2V0IHN1YnNjcmlwdGlvbiBvcGVuIHVudGlsIHdpbGxVcGRhdGUgKi9cbiAgICAgIHByaXZhdGUgc3NyQ29uc3RydWN0b3JTdWI6IFVuc3Vic2NyaWJlcjtcbiAgICAgIHByaXZhdGUgcHJldmlvdXNDb21wb25lbnRVbnN1YjogVW5zdWJzY3JpYmVyO1xuXG4gICAgICAvKiogRW1pdHMgd2hlbmV2ZXIgdGhlIGxvY2FsIHByZXNldCB2YWx1ZSBjaGFuZ2VzLiAqL1xuICAgICAgcHJpdmF0ZSBfYWN0aXZlUHJlc2V0U2lnbmFsID0gc2lnbmFsPHN0cmluZz4obnVsbCk7XG4gICAgICBwcml2YXRlIF9wYXJlbnRQcmVzZXRTaWduYWwgPSBzaWduYWw8c3RyaW5nPihudWxsKTtcblxuICAgICAgcHJpdmF0ZSBfcHJlc2V0Q29udGV4dCA9IG5ldyBDb250ZXh0Q29uc3VtZXIodGhpcywge1xuICAgICAgICBjb250ZXh0OiBwcmVzZXRDb250ZXh0LFxuICAgICAgICBzdWJzY3JpYmU6IHRydWUsXG4gICAgICAgIGNhbGxiYWNrOiAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLl9wYXJlbnRQcmVzZXRTaWduYWwuc2V0KCh2YWx1ZSA9PT0gJycgPyBudWxsIDogdmFsdWUpID8/ICdnbG9iYWwnKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvKipcbiAgICAgICAqIE92ZXJyaWRlcyB0aGUgZGVmYXVsdCBnZXRQcm9wZXJ0eURlc2NyaXB0b3IgbWV0aG9kIHRvIGNoZWNrIGZvciB0aGUgY3VzdG9tXG4gICAgICAgKiBgaXNQcmVzZXRgIG9wdGlvbi4gRGVzY3JpcHRvcnMgb2YgcHJvcGVydGllcyB0aGF0IGFyZSBkZWNsYXJlZCB3aXRoIHRoZSBgaXNQcmVzZXRgXG4gICAgICAgKiBvcHRpb24gYXJlIGRlZmluZWQgd2l0aCBzcGVjaWFsIGdldHRlci9zZXR0ZXIgbG9naWMgdGhhdCBzZXRzIHZhbHVlIHRvIHZhbHVlTWFwXG4gICAgICAgKiBhbmQgZ2V0cyB2YWx1ZXMgZnJvbSB0aGUgdmFsdWVNYXAgYnV0IHRoZW4gYWxzbyBmYWxscyBiYWNrIHRvIGFueSB2YWx1ZSBpbiB0aGUgcHJlc2V0TWFwXG4gICAgICAgKlxuICAgICAgICogVGhlIHByZXNldE1hcCBpcyBwb3B1bGF0ZWQgYWJvdmUgZnJvbSB2YWx1ZXMgZnJvbSB0aGUgcHJlc2V0Q29udHJvbGxlciB3aGVuZXZlciB0aGVcbiAgICAgICAqIHByZXNldCBmb3IgdGhpcyBjb21wb25lbnQgaXMgY2hhbmdlZCBnbG9iYWxseS5cbiAgICAgICAqL1xuICAgICAgc3RhdGljIGdldFByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgICAgbmFtZTogUHJvcGVydHlLZXksXG4gICAgICAgIGtleTogc3RyaW5nIHwgc3ltYm9sLFxuICAgICAgICBvcHRpb25zOiBQcm9wZXJ0eURlY2xhcmF0aW9uXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgeyBnZXQsIHNldCB9ID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMucHJvdG90eXBlLCBuYW1lKSA/PyB7XG4gICAgICAgICAgZ2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNba2V5IGFzIGtleW9mIHR5cGVvZiB0aGlzXTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQsIHY6IHVua25vd24pIHtcbiAgICAgICAgICAgICh0aGlzIGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZyB8IHN5bWJvbCwgdW5rbm93bj4pW2tleV0gPSB2O1xuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZ2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCk6IGFueSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGdldHRlciBsb2dpYyB0aGF0IGdldHMgZnJvbSB0aGUgdmFsdWVNYXAgb3IgcHJlc2V0TWFwXG4gICAgICAgICAgICBpZiAob3B0aW9uc1snaXNQcmVzZXQnXSkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fdmFsdWVNYXAgYXMgTWFwPFxuICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eUtleSxcbiAgICAgICAgICAgICAgICAgICAgUFtrZXlvZiBQXVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICkuZ2V0KG5hbWUpIHx8XG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgKHRoaXMgYXMge30gYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pLl9wcmVzZXRNYXAgYXMgTWFwPFxuICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eUtleSxcbiAgICAgICAgICAgICAgICAgICAgUFtrZXlvZiBQXVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICkuZ2V0KG5hbWUpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEZWZhdWx0IHByb3BlcnR5IGdldHRlciBsb2dpY1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBnZXQ/LmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQodGhpczogUmVhY3RpdmVFbGVtZW50LCB2YWx1ZTogdW5rbm93bikge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBzZXR0ZXIgbG9naWMgdGhhdCBzZXRzIHRvIHRoZSB2YWx1ZU1hcFxuICAgICAgICAgICAgaWYgKG9wdGlvbnNbJ2lzUHJlc2V0J10pIHtcbiAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSAoXG4gICAgICAgICAgICAgICAgKHRoaXMgYXMge30gYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pLl92YWx1ZU1hcCBhcyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+XG4gICAgICAgICAgICAgICkuZ2V0KG5hbWUpO1xuICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKHRoaXMgYXMge30gYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pLl92YWx1ZU1hcCBhcyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+XG4gICAgICAgICAgICAgICkuc2V0KG5hbWUsIHZhbHVlIGFzIGFueSk7XG4gICAgICAgICAgICAgIC8vIER1cmluZyBTU1Igd2UgbmVlZCB0byB1cGRhdGUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlYWN0aXZlRWxlbWVudCkucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gT24gdGhlIGNsaWVudCB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBjdXJyZW50IHVwZGF0ZSB0byBmaW5pc2hcbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICh0aGlzIGFzIHVua25vd24gYXMgUmVhY3RpdmVFbGVtZW50KS5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVmYXVsdCBwcm9wZXJ0eSBzZXR0ZXIgbG9naWNcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGdldD8uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgc2V0IS5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBSZWFjdGl2ZUVsZW1lbnQpLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgICAgIC8vIFN1YnNjcmliZXMgZm9yIGNoYW5nZXMgdG8gdGhpcyBjb21wb25lbnRzIGFjdGl2ZSBwcmVzZXQgdG8gdXBkYXRlIGFsbCByZWxldmFudCBwcm9wcyBwcmVzZXQgdmFsdWVzXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKFxuICAgICAgICAgIGNvbXB1dGVkKFxuICAgICAgICAgICAgW3RoaXMuX2FjdGl2ZVByZXNldFNpZ25hbCwgdGhpcy5fcGFyZW50UHJlc2V0U2lnbmFsXSxcbiAgICAgICAgICAgIChbYWN0aXZlUHJlc2V0LCBwYXJlbnRQcmVzZXRdLCBzZXQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGFjdGl2ZVByZXNldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19sb2NhbFByZXNldFRoZW1lID1cbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVByZXNldCA9PT0gJ2dsb2JhbCdcbiAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgIDogTXRlUHJlc2V0U2VydmljZS5nZXRDb21wb25lbnRQcmVzZXQoYWN0aXZlUHJlc2V0LCAndGhlbWUnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZSA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCd0aGVtZScsIG51bGwpO1xuXG4gICAgICAgICAgICAgIHRoaXMuX2FwcGxpZWRQcmVzZXQgPSBhY3RpdmVQcmVzZXQgPz8gcGFyZW50UHJlc2V0ID8/ICdnbG9iYWwnO1xuICAgICAgICAgICAgICB0aGlzLmFwcGxpZWRQcmVzZXQgPSBNdGVQcmVzZXRTZXJ2aWNlLmdldENvbXBvbmVudFByZXNldChcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBsaWVkUHJlc2V0LFxuICAgICAgICAgICAgICAgICdwcmVzZXQnXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgLy8gVW5zdWJzY3JpYmUgdG8gcHJldmlvdXMgY29tcG9uZW50IHByZXNldCBjaGFuZ2VzXG4gICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDb21wb25lbnRVbnN1Yj8uKCk7XG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSBwcm9wcyBpZiBuZXcgY29tcG9uZW50IHByZXNldCBlbWl0c1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ29tcG9uZW50VW5zdWIgPSBNdGVQcmVzZXRTZXJ2aWNlLnNlbGVjdENvbXBvbmVudFByZXNldChcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBsaWVkUHJlc2V0LFxuICAgICAgICAgICAgICAgIHRoaXMuX19jb21wb25lbnROYW1lXG4gICAgICAgICAgICAgICkuc3Vic2NyaWJlKChuZXdQcmVzZXQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobmV3UHJlc2V0KSB7XG4gICAgICAgICAgICAgICAgICBzZXQobmV3UHJlc2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICkuc3Vic2NyaWJlKChuZXdQcmVzZXRzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvbGRWYWx1ZXNNYXAgPSBuZXcgTWFwKHRoaXMuX3ByZXNldE1hcCk7XG4gICAgICAgICAgICBjb25zdCBvbGRQcm9wcyA9IEFycmF5LmZyb20odGhpcy5fcHJlc2V0TWFwLmtleXMoKSk7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IE9iamVjdC5rZXlzKG5ld1ByZXNldHMgPz8ge30pO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8ga2V5cyBpbiB0aGUgbmV3IHByZXNldHMgY2xlYXIgYWxsIHByZXNldCB2YWx1ZXNcbiAgICAgICAgICAgIGlmIChuZXdQcm9wcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggb2xkIHNldCBwcm9wcyBhbmQgbmV3IG9uZXNcbiAgICAgICAgICAgIC8vIFJlbW92ZSBvbGQgb25lcyAmIHNldCBuZXcgb25lc1xuICAgICAgICAgICAgLy8gRmluYWxseSBmb3JjZSBhbiB1cGRhdGUgZm9yIGVhY2ggcHJvcFxuICAgICAgICAgICAgWy4uLm9sZFByb3BzLCAuLi5uZXdQcm9wc10uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChuZXdQcmVzZXRzW2tleV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuc2V0KGtleSwgbmV3UHJlc2V0c1trZXldKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKGtleSwgb2xkVmFsdWVzTWFwLmdldChrZXkpID8/IG51bGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c0NvbXBvbmVudFVuc3ViPy4oKTtcbiAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1Yj8uKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHN1cGVyKGFyZ3MpO1xuXG4gICAgICAgIC8vIFRPRE8ocmVlY2UpOiBFbnN1cmUgd2UgdXBkYXRlIHRoaXMgdG8gc3VwcG9ydCBjb250ZXh0IHdoZW4gdGhhdCBpcyBTU1IgRnJpZW5kbHk6IGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8zMzY1XG4gICAgICAgIC8vIEhhbmRsZSBzZXR0aW5nIHByZXNldCBkZWZhdWx0cyBpbiBTU1JcbiAgICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgICB0aGlzLnNzckNvbnN0cnVjdG9yU3ViID0gTXRlUHJlc2V0U2VydmljZS5zZWxlY3RQcmVzZXQodGhpcy5wcmVzZXQgPz8gJ2dsb2JhbCcpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChwcmVzZXQpID0+IHRoaXMuaGFuZGxlU3NyUHJlc2V0Q2hhbmdlcyhwcmVzZXQpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcml2YXRlIGhhbmRsZVNzclByZXNldENoYW5nZXMocHJlc2V0OiBNb3J0YXJQcmVzZXQpIHtcbiAgICAgICAgaWYgKHByZXNldCkge1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFByZXNldHMgPSBwcmVzZXRbdGhpcy5fX2NvbXBvbmVudE5hbWVdO1xuICAgICAgICAgIGNvbnN0IG9sZFByb3BzID0gQXJyYXkuZnJvbSh0aGlzLl9wcmVzZXRNYXAua2V5cygpKTtcbiAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudFByZXNldHMgPz8ge30pO1xuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGtleXMgaW4gdGhlIG5ldyBwcmVzZXRzIGNsZWFyIGFsbCBwcmVzZXQgdmFsdWVzXG4gICAgICAgICAgaWYgKG5ld1Byb3BzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmNsZWFyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBvbGQgc2V0IHByb3BzIGFuZCBuZXcgb25lc1xuICAgICAgICAgIC8vIFJlbW92ZSBvbGQgb25lcyAmIHNldCBuZXcgb25lc1xuICAgICAgICAgIC8vIEZpbmFsbHkgZm9yY2UgYW4gdXBkYXRlIGZvciBlYWNoIHByb3BcbiAgICAgICAgICBbLi4ub2xkUHJvcHMsIC4uLm5ld1Byb3BzXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRQcmVzZXRzW2tleV0pIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLnNldChrZXksIGNvbXBvbmVudFByZXNldHNba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoa2V5LCBudWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmFwcGxpZWRQcmVzZXQgPSBwcmVzZXRbJ3ByZXNldCddO1xuICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnYXBwbGllZFByZXNldCcsIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBQcmVzZXRFbGVtZW50IGFzIENvbnN0cnVjdG9yPFByZXNldEVsZW1lbnRJbnRlcmZhY2U8UD4+ICYgVDtcbiAgfTtcbn07XG4iLCAiaW1wb3J0IHsgUHJvcGVydHlEZWNsYXJhdGlvbiB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByZXNldFByb3BlcnR5PFQ+KG9wdGlvbnM/OiBQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gIHJldHVybiBwcm9wZXJ0eSh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBpc1ByZXNldDogdHJ1ZSxcbiAgfSBhcyBhbnkpO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdAbGl0LWxhYnMvY29udGV4dCc7XG5cbmV4cG9ydCBjb25zdCBwcmVzZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxzdHJpbmc+KCdNVEVfUFJFU0VUJyk7XG4iLCAiaW1wb3J0IHsgUmVhY3RpdmVDb250cm9sbGVySG9zdCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBNdGVQcmVzZXRTZXJ2aWNlIH0gZnJvbSAnLi4vcHJlc2V0cyc7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBNdGVFbGVtZW50IH0gZnJvbSAnLi4vYmFzZS1jbGFzc2VzJztcblxuY29uc3QgZ2xvYmFsUHJlc2V0JCA9IE10ZVByZXNldFNlcnZpY2Uuc2VsZWN0UHJlc2V0KCdnbG9iYWwnKTtcbmNvbnN0IGdsb2JhbFByZXNldE5hbWUkID0gY29tcHV0ZWQoZ2xvYmFsUHJlc2V0JCwgKHByZXNldCkgPT4gcHJlc2V0LnByZXNldCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGllZFByZXNldENvbnRleHQge1xuICBwcmVzZXROYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUHJlc2V0IGlzIGRldGVybWluZWQgZnJvbSBlaXRoZXIgdGhlIHBhcmVudCBwcmVzZXQgY29udGV4dCBvciBhIGxvY2FsIHByZXNldCBwcm9wZXJ0eS5cbiAqIFRoaXMgY29udHJvbGxlciBrZWVwcyB0cmFjayBvZiB0aGUgYWN0dWFsIGFjdGl2ZSBwcmVzZXQgYXBwbGllZCB0byB0aGUgY3VycmVudCBjb21wb25lbnQuXG4gKiBJZiBhIGNhbGxiYWNrIGlzIGdpdmVuIGl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIHRoYXQgY29udGV4dCBjaGFuZ2VzLiBPdGhlcndpc2UgY29udHJvbGxlclxuICogbWV0aG9kcyBjYW4gYmUgY2FsbGVkIHdoZW4gbmVlZGVkLlxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgZXZlbiB3aXRoaW4gZWxlbWVudHMgdGhhdCBkbyBub3QgaGF2ZSB0aGVpciBvd24gcHJlc2V0XG4gKiBvcHRpb25zIChha2EgZXh0ZW5kIHRoZSBwcmVzZXRNaXhpbikuXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWVkUHJlc2V0Q29udGV4dENvbnRyb2xsZXIge1xuICBwcml2YXRlIGFwcGxpZWRQcmVzZXROYW1lID0gJ2dsb2JhbCc7XG4gIHByaXZhdGUgYWN0aXZlR2xvYmFsUHJlc2V0TmFtZSA9ICdkZWZhdWx0JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGhvc3Q6IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgJiBNdGVFbGVtZW50LFxuICAgIHByaXZhdGUgY2FsbGJhY2s/OiAoY29udGV4dDogQXBwbGllZFByZXNldENvbnRleHQpID0+IHZvaWRcbiAgKSB7XG4gICAgdGhpcy5ob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICB9XG5cbiAgaG9zdENvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmhvc3Quc3Vicy5wdXNoKFxuICAgICAgZ2xvYmFsUHJlc2V0TmFtZSQuc3Vic2NyaWJlKChnbG9iYWxQcmVzZXROYW1lKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlR2xvYmFsUHJlc2V0TmFtZSA9IGdsb2JhbFByZXNldE5hbWU7XG4gICAgICAgIHRoaXMudXBkYXRlQXBwbGllZFByZXNldENvbnRleHQoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLmV4ZWNDYWxsYmFjaygpO1xuICB9XG5cbiAgaG9zdFVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUFwcGxpZWRQcmVzZXRDb250ZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIGV4ZWNDYWxsYmFjaygpIHtcbiAgICB0aGlzLmNhbGxiYWNrPy4oe1xuICAgICAgcHJlc2V0TmFtZTogdGhpcy5hcHBsaWVkUHJlc2V0TmFtZSxcbiAgICB9IGFzIEFwcGxpZWRQcmVzZXRDb250ZXh0KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQXBwbGllZFByZXNldENvbnRleHQoKSB7XG4gICAgbGV0IHVwZGF0ZWQgPSBmYWxzZTtcbiAgICBjb25zdCBuZXdQcmVzZXROYW1lID0gKHRoaXMuaG9zdCBhcyBhbnkpLmFwcGxpZWRQcmVzZXQgPz8gdGhpcy5hY3RpdmVHbG9iYWxQcmVzZXROYW1lO1xuICAgIGlmIChuZXdQcmVzZXROYW1lICE9PSB0aGlzLmFwcGxpZWRQcmVzZXROYW1lKSB7XG4gICAgICB0aGlzLmFwcGxpZWRQcmVzZXROYW1lID0gbmV3UHJlc2V0TmFtZTtcbiAgICAgIHVwZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZCkge1xuICAgICAgdGhpcy5leGVjQ2FsbGJhY2soKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlUHJlc2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBsaWVkUHJlc2V0TmFtZTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgTGl0RWxlbWVudCwgUHJvcGVydHlWYWx1ZU1hcCwgUmVhY3RpdmVFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IGlzU3NyIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxudHlwZSBVcGRhdGVIYW5kbGVyID0gKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZU1hcDxhbnk+KSA9PiB2b2lkO1xuXG5pbnRlcmZhY2UgT25VcGRhdGVPcHRpb25zIHtcbiAgLyoqXG4gICAqIElmIHRydWUsIHdpbGwgb25seSBzdGFydCB3YXRjaGluZyBhZnRlciB0aGUgaW5pdGlhbCB1cGRhdGUvcmVuZGVyXG4gICAqL1xuICB3YWl0VW50aWxGaXJzdFVwZGF0ZT86IGJvb2xlYW47XG5cbiAgLyoqIERldGVybWluZXMgd2hlcmUgdGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQuIERlZmF1bHRzIHRvIGBjbGllbnRgLiAqL1xuICBvbj86ICdjbGllbnQnIHwgJ3NzcicgfCAnYm90aCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblVwZGF0ZShwcm9wTmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBvcHRpb25zPzogT25VcGRhdGVPcHRpb25zKSB7XG4gIGNvbnN0IHJlc29sdmVkT3B0aW9uczogUmVxdWlyZWQ8T25VcGRhdGVPcHRpb25zPiA9IHtcbiAgICB3YWl0VW50aWxGaXJzdFVwZGF0ZTogZmFsc2UsXG4gICAgb246ICdjbGllbnQnLFxuICAgIC4uLm9wdGlvbnMsXG4gIH07XG4gIHJldHVybiA8RWxlbUNsYXNzIGV4dGVuZHMgTGl0RWxlbWVudD4ocHJvdG86IEVsZW1DbGFzcywgZGVjb3JhdGVkRm5OYW1lOiBQcm9wZXJ0eUtleSkgPT4ge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLS0gdXBkYXRlIGlzIGEgcHJvdGVjdGVkIHByb3BlcnR5XG4gICAgY29uc3QgeyB3aWxsVXBkYXRlIH0gPSBwcm90bztcbiAgICBjb25zdCBfcHJvcE5hbWVzID0gQXJyYXkuaXNBcnJheShwcm9wTmFtZXMpID8gcHJvcE5hbWVzIDogW3Byb3BOYW1lc107XG4gICAgY29uc3QgcHJvcE5hbWVLZXlzID0gX3Byb3BOYW1lcyBhcyAoa2V5b2YgRWxlbUNsYXNzKVtdO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLS0gdXBkYXRlIGlzIGEgcHJvdGVjdGVkIHByb3BlcnR5XG4gICAgcHJvdG8ud2lsbFVwZGF0ZSA9IGZ1bmN0aW9uICh0aGlzOiBFbGVtQ2xhc3MsIGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZU1hcDxhbnk+KSB7XG4gICAgICBpZiAocHJvcE5hbWVLZXlzLnNvbWUoKGtleSkgPT4gY2hhbmdlZFByb3BzLmhhcyhrZXkpKSkge1xuICAgICAgICBpZiAoIXJlc29sdmVkT3B0aW9ucy53YWl0VW50aWxGaXJzdFVwZGF0ZSB8fCAodGhpcyBhcyB1bmtub3duIGFzIExpdEVsZW1lbnQpLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICBjb25zdCBzc3IgPSBpc1NzcigpO1xuICAgICAgICAgIGlmIChyZXNvbHZlZE9wdGlvbnMub24gPT09ICdjbGllbnQnICYmICFzc3IpIHtcbiAgICAgICAgICAgICh0aGlzW2RlY29yYXRlZEZuTmFtZV0gYXMgdW5rbm93biBhcyBVcGRhdGVIYW5kbGVyKShjaGFuZ2VkUHJvcHMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzb2x2ZWRPcHRpb25zLm9uID09PSAnc3NyJyAmJiBzc3IpIHtcbiAgICAgICAgICAgICh0aGlzW2RlY29yYXRlZEZuTmFtZV0gYXMgdW5rbm93biBhcyBVcGRhdGVIYW5kbGVyKShjaGFuZ2VkUHJvcHMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzb2x2ZWRPcHRpb25zLm9uID09PSAnYm90aCcpIHtcbiAgICAgICAgICAgICh0aGlzW2RlY29yYXRlZEZuTmFtZV0gYXMgdW5rbm93biBhcyBVcGRhdGVIYW5kbGVyKShjaGFuZ2VkUHJvcHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2lsbFVwZGF0ZS5jYWxsKHRoaXMsIGNoYW5nZWRQcm9wcyk7XG4gICAgfTtcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBpc1NzciB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRPcHRpb25zIHtcbiAgLyoqIGluZGljYXRlIGlmIGV2ZW50IGJ1YmJsZXMgdXAgdGhyb3VnaCB0aGUgRE9NIG9yIG5vdCAqL1xuICBidWJibGVzPzogYm9vbGVhbjtcbiAgLyoqIGluZGljYXRlIGlmIGV2ZW50IGlzIGNhbmNlbGFibGUgKi9cbiAgY2FuY2VsYWJsZT86IGJvb2xlYW47XG4gIC8qKiBpbmRpY2F0ZSBpZiBldmVudCBjYW4gYnViYmxlIGFjcm9zcyB0aGUgYm91bmRhcnkgYmV0d2VlbiB0aGUgc2hhZG93IERPTSBhbmQgdGhlIGxpZ2h0IERPTSAqL1xuICBjb21wb3NlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBFdmVudEVtaXR0ZXI8VD4ge1xuICBwcml2YXRlIGV2ZW50TmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFyZ2V0OiBIVE1MRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcpIHtcbiAgICAvLyBTYW5pdHkgY2hlY2sgdG8gY2FsbCBvdXQgaW1wcm9wZXJseSBwcmVmaXhlZCBldmVudCBlbWl0dGVyc1xuICAgIHRyeSB7XG4gICAgICBpZiAoZXZlbnROYW1lPy5bMF0gIT09ICdfJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGAke3RhcmdldC50YWdOYW1lfTogRXZlbnRFbWl0dGVyIHByb3BlcnR5IGZvciBcIiR7ZXZlbnROYW1lfVwiIG11c3QgYmUgcHJlZml4ZWQgd2l0aCBcIl9cImBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9XG4gICAgdGhpcy5ldmVudE5hbWUgPSBldmVudE5hbWUucmVwbGFjZSgvXl8vLCAnJyk7XG4gIH1cblxuICAvKiogRGlzcGF0Y2hlcyB0aGUgY3VzdG9tIGV2ZW50LiBJZiB0aGUgZXZlbnQgaXMgYGNhbmNlbGFibGVgIGFuZCBpcyBwcmV2ZW50ZWQgdGhpcyB3aWxsIHJldHVybiBmYWxzZS4gKi9cbiAgZW1pdCh2YWx1ZTogVCwgb3B0aW9ucz86IEV2ZW50T3B0aW9ucyk6IGJvb2xlYW4ge1xuICAgIC8vIFRPRE8ocmVlY2UpOiByZW1vdmUgd2hlbiBldmVudHMgYXJlIHN1cHBvcnRlZCBkdXJpbmcgU1NSXG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXJnZXQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50PFQ+KHRoaXMuZXZlbnROYW1lLCB7XG4gICAgICAgICAgZGV0YWlsOiB2YWx1ZSxcbiAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgICAgIGNvbXBvc2VkOiB0cnVlLFxuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gTGVnYWN5IFRTIERlY29yYXRvclxuZnVuY3Rpb24gbGVnYWN5RXZlbnQoXG4gIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcixcbiAgcHJvdG9PckRlc2NyaXB0b3I6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBuYW1lOiBQcm9wZXJ0eUtleVxuKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b09yRGVzY3JpcHRvciwgbmFtZSwgZGVzY3JpcHRvcik7XG59XG5cbi8vIFRDMzkgRGVjb3JhdG9ycyBwcm9wb3NhbFxuZnVuY3Rpb24gc3RhbmRhcmRFdmVudChkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IsIGVsZW1lbnQ6IHsga2V5OiBzdHJpbmcgfSkge1xuICByZXR1cm4ge1xuICAgIGtpbmQ6ICdtZXRob2QnLFxuICAgIHBsYWNlbWVudDogJ3Byb3RvdHlwZScsXG4gICAga2V5OiBlbGVtZW50LmtleSxcbiAgICBkZXNjcmlwdG9yLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRFbWl0dGVyKCkge1xuICByZXR1cm4gKHByb3RvT3JEZXNjcmlwdG9yOiBhbnksIG5hbWU6IHN0cmluZyk6IGFueSA9PiB7XG4gICAgY29uc3QgZGVzY3JpcHRvciA9IHtcbiAgICAgIGdldCh0aGlzOiBIVE1MRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbmV3IEV2ZW50RW1pdHRlcih0aGlzLCBuYW1lICE9PSB1bmRlZmluZWQgPyBuYW1lIDogcHJvdG9PckRlc2NyaXB0b3Iua2V5KTtcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH07XG5cbiAgICByZXR1cm4gbmFtZSAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGxlZ2FjeUV2ZW50KGRlc2NyaXB0b3IsIHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lKVxuICAgICAgOiBzdGFuZGFyZEV2ZW50KGRlc2NyaXB0b3IsIHByb3RvT3JEZXNjcmlwdG9yKTtcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2Jhc2UuanMnO1xuLyoqXG4gKiBJdGVtcyBpbiB0aGlzIGZpbGUgYXJlIG1vZGlmaWNhdGlvbnMgb2Ygb2YgdGhlIGRlY29yYXRvcnMgaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2Jsb2IvbWFpbi9wYWNrYWdlcy9yZWFjdGl2ZS1lbGVtZW50L3NyYy9kZWNvcmF0b3JzL2N1c3RvbS1lbGVtZW50LnRzXG4gKlxuICogV2UndmUgYWRkZWQgY2hlY2tzIHRvIHByZXZlbnQgcmUtcmVnaXN0cmF0aW9ucyBmcm9tIHRocm93aW5nIGhhcmQgZXJyb3JzLlxuICovXG5cbi8qKlxuICogQWxsb3cgZm9yIGN1c3RvbSBlbGVtZW50IGNsYXNzZXMgd2l0aCBwcml2YXRlIGNvbnN0cnVjdG9yc1xuICovXG50eXBlIEN1c3RvbUVsZW1lbnRDbGFzcyA9IE9taXQ8dHlwZW9mIEhUTUxFbGVtZW50LCAnbmV3Jz47XG5cbmV4cG9ydCB0eXBlIEN1c3RvbUVsZW1lbnREZWNvcmF0b3IgPSB7XG4gIC8vIGxlZ2FjeVxuICAoY2xzOiBDdXN0b21FbGVtZW50Q2xhc3MpOiB2b2lkO1xuXG4gIC8vIHN0YW5kYXJkXG4gICh0YXJnZXQ6IEN1c3RvbUVsZW1lbnRDbGFzcywgY29udGV4dDogQ2xhc3NEZWNvcmF0b3JDb250ZXh0PENvbnN0cnVjdG9yPEhUTUxFbGVtZW50Pj4pOiB2b2lkO1xufTtcblxuLyoqXG4gKiBDbGFzcyBkZWNvcmF0b3IgZmFjdG9yeSB0aGF0IGRlZmluZXMgdGhlIGRlY29yYXRlZCBjbGFzcyBhcyBhIGN1c3RvbSBlbGVtZW50LlxuICpcbiAqIGBgYGpzXG4gKiBAY3VzdG9tRWxlbWVudCgnbXktZWxlbWVudCcpXG4gKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYGA7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICogQHBhcmFtIHRhZ05hbWUgVGhlIHRhZyBuYW1lIG9mIHRoZSBjdXN0b20gZWxlbWVudCB0byBkZWZpbmUuXG4gKi9cbmV4cG9ydCBjb25zdCBkZWZpbmVFbGVtZW50ID1cbiAgKHRhZ05hbWU6IHN0cmluZyk6IEN1c3RvbUVsZW1lbnREZWNvcmF0b3IgPT5cbiAgKFxuICAgIGNsYXNzT3JUYXJnZXQ6IEN1c3RvbUVsZW1lbnRDbGFzcyB8IENvbnN0cnVjdG9yPEhUTUxFbGVtZW50PixcbiAgICBjb250ZXh0PzogQ2xhc3NEZWNvcmF0b3JDb250ZXh0PENvbnN0cnVjdG9yPEhUTUxFbGVtZW50Pj5cbiAgKSA9PiB7XG4gICAgaWYgKGNvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplcigoKSA9PiB7XG4gICAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0Py4odGFnTmFtZSkpIHtcbiAgICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY2xhc3NPclRhcmdldCBhcyBDdXN0b21FbGVtZW50Q29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQ/Lih0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY2xhc3NPclRhcmdldCBhcyBDdXN0b21FbGVtZW50Q29uc3RydWN0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiIsICJpbXBvcnQgeyBDb25zdHJ1Y3RvciwgTXRlRWxlbWVudCwgUHJlc2V0RWxlbWVudEludGVyZmFjZSwgcHJlc2V0UHJvcGVydHkgfSBmcm9tICcuLi8nO1xuXG4vKiogUG9zc2libGUgY29yZSBwYWxldHRlIGdyb3VwIGNvbG9yIHZhbHVlcy4gKi9cbmV4cG9ydCB0eXBlIENvcmVQYWxldHRlID0gJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGVydGlhcnknIHwgJ2RhbmdlcicgfCB1bmRlZmluZWQ7XG5cbi8qKiAgUG9zc2libGUgc3RhdHVzIHBhbGV0dGUgZ3JvdXAgY29sb3IgdmFsdWVzLiAqL1xuZXhwb3J0IHR5cGUgU3RhdHVzUGFsZXR0ZSA9XG4gIHwgJ3ByaW1hcnknXG4gIHwgJ3NlY29uZGFyeSdcbiAgfCAndGVydGlhcnknXG4gIHwgJ2FjY2VudCdcbiAgfCAnd2FybmluZydcbiAgfCAnc3VjY2VzcydcbiAgfCAnZGFuZ2VyJ1xuICB8IHVuZGVmaW5lZDtcblxuLyoqIFBvc3NpYmxlIHZpeiBwYWxldHRlIGdyb3VwIGNvbG9yIHZhbHVlcy4gKi9cbmV4cG9ydCB0eXBlIFZpelBhbGV0dGUgPSAnMScgfCAnMicgfCAnMycgfCAnNCcgfCAnNScgfCAnNicgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFBhbGV0dGVHcm91cENvbG9yID0gQ29yZVBhbGV0dGUgfCBTdGF0dXNQYWxldHRlIHwgVml6UGFsZXR0ZTtcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29sb3JJbnRlcmZhY2U8UGFsZXR0ZUdyb3VwPiB7XG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBwcmltYXJ5IGNvbG9yIHBhbGV0dGUgdXNlZCB0byB0aGVtZSB0aGlzIGNvbXBvbmVudFxuICAgKiBAYXR0ciBjb2xvclxuICAgKi9cbiAgY29sb3I6IFBhbGV0dGVHcm91cDtcbn1cblxuZXhwb3J0IGVudW0gUGFsZXR0ZUdyb3VwT3B0aW9uIHtcbiAgQ29yZSA9ICdjb3JlJyxcbiAgU3RhdHVzID0gJ3N0YXR1cycsXG4gIFZpeiA9ICd2aXonLFxufVxuXG5leHBvcnQgY29uc3QgQ29yZUNvbG9yTWl4aW4gPSA8XG4gIFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50ICYgUGFydGlhbDxQcmVzZXRFbGVtZW50SW50ZXJmYWNlPGFueT4+PlxuPihcbiAgc3VwZXJDbGFzczogVFxuKSA9PiB7XG4gIGNsYXNzIENvbG9yRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIEFkanVzdHMgdGhlIHByaW1hcnkgY29sb3IgcGFsZXR0ZSB1c2VkIHRvIHRoZW1lIHRoaXMgY29tcG9uZW50XG4gICAgICogQGF0dHIgY29sb3JcbiAgICAgKi9cbiAgICBAcHJlc2V0UHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGNvbG9yOiBDb3JlUGFsZXR0ZTtcbiAgfVxuXG4gIHJldHVybiBDb2xvckVsZW1lbnQgYXMgQ29uc3RydWN0b3I8Q29sb3JJbnRlcmZhY2U8Q29yZVBhbGV0dGU+PiAmIFQ7XG59O1xuXG5leHBvcnQgY29uc3QgU3RhdHVzQ29sb3JNaXhpbiA9IDxcbiAgVCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQgJiBQYXJ0aWFsPFByZXNldEVsZW1lbnRJbnRlcmZhY2U8YW55Pj4+XG4+KFxuICBzdXBlckNsYXNzOiBUXG4pID0+IHtcbiAgY2xhc3MgQ29sb3JFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgcHJpbWFyeSBjb2xvciBwYWxldHRlIHVzZWQgdG8gdGhlbWUgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBjb2xvclxuICAgICAqL1xuICAgIEBwcmVzZXRQcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgY29sb3I6IFN0YXR1c1BhbGV0dGU7XG4gIH1cblxuICByZXR1cm4gQ29sb3JFbGVtZW50IGFzIENvbnN0cnVjdG9yPENvbG9ySW50ZXJmYWNlPFN0YXR1c1BhbGV0dGU+PiAmIFQ7XG59O1xuXG5leHBvcnQgY29uc3QgVml6Q29sb3JNaXhpbiA9IDxcbiAgVCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQgJiBQYXJ0aWFsPFByZXNldEVsZW1lbnRJbnRlcmZhY2U8YW55Pj4+XG4+KFxuICBzdXBlckNsYXNzOiBUXG4pID0+IHtcbiAgY2xhc3MgQ29sb3JFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgcHJpbWFyeSBjb2xvciBwYWxldHRlIHVzZWQgdG8gdGhlbWUgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBjb2xvclxuICAgICAqL1xuICAgIEBwcmVzZXRQcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgY29sb3I6IFZpelBhbGV0dGU7XG4gIH1cblxuICByZXR1cm4gQ29sb3JFbGVtZW50IGFzIENvbnN0cnVjdG9yPENvbG9ySW50ZXJmYWNlPFZpelBhbGV0dGU+PiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgcHJlc2V0UHJvcGVydHkgfSBmcm9tICcuLi9wcmVzZXRzL3ByZXNldC5kZWNvcmF0b3InO1xuaW1wb3J0IHsgUHJlc2V0RWxlbWVudEludGVyZmFjZSB9IGZyb20gJy4uL3ByZXNldHMvcHJlc2V0Lm1peGluJztcblxuZXhwb3J0IHR5cGUgRGVuc2l0eU9wdGlvbnMgPSAnY29tcGFjdCcgfCAnY29tZnknIHwgJ3Jvb215JyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRGVuc2l0eUludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBkYXRhIGRlbnNpdHkgb2YgdGhpcyBjb21wb25lbnRcbiAgICogQGF0dHIgZGVuc2l0eVxuICAgKi9cbiAgZGVuc2l0eTogRGVuc2l0eU9wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBEZW5zaXR5TWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPExpdEVsZW1lbnQgJiBQcmVzZXRFbGVtZW50SW50ZXJmYWNlPGFueT4+PihcbiAgc3VwZXJDbGFzczogVFxuKSA9PiB7XG4gIGNsYXNzIERlbnNpdHlFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgZGF0YSBkZW5zaXR5IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQGF0dHIgZGVuc2l0eVxuICAgICAqL1xuICAgIEBwcmVzZXRQcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgZGVuc2l0eTogRGVuc2l0eU9wdGlvbnM7XG4gIH1cbiAgcmV0dXJuIERlbnNpdHlFbGVtZW50IGFzIENvbnN0cnVjdG9yPERlbnNpdHlJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0KFtkZW5zaXR5PWNvbXBhY3RdKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHhzKTstLW10ZS1zcGFjZS14czp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14cyk7LS1tdGUtc3BhY2Utc206dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3Qtc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LW1kKTstLW10ZS1zcGFjZS1sZzp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1sZyk7LS1tdGUtc3BhY2UteGw6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eGwpOy0tbXRlLXNwYWNlLXh4eGw6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHh4bCl9Omhvc3QoW2RlbnNpdHk9Y29tZnldKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2UtY29tZnktc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1jb21meS1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1jb21meS14eHhsKX06aG9zdChbZGVuc2l0eT1yb29teV0pey0tbXRlLXNwYWNlLXh4czp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHhzKTstLW10ZS1zcGFjZS14czp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHMpOy0tbXRlLXNwYWNlLXNtOnZhcigtLW10ZS1zcGFjZS1yb29teS1zbSk7LS1tdGUtc3BhY2UtbWQ6dmFyKC0tbXRlLXNwYWNlLXJvb215LW1kKTstLW10ZS1zcGFjZS1sZzp2YXIoLS1tdGUtc3BhY2Utcm9vbXktbGcpOy0tbXRlLXNwYWNlLXhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14bCk7LS1tdGUtc3BhY2UteHhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14eGwpOy0tbXRlLXNwYWNlLXh4eGw6dmFyKC0tbXRlLXNwYWNlLXJvb215LXh4eGwpfWA7IiwgImltcG9ydCB7IExpdEVsZW1lbnQsIFByb3BlcnR5VmFsdWVzIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi8nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEaXNhYmxlZEludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGlzIGNvbXBvbmVudFxuICAgKiBAYXR0ciBkaXNhYmxlZFxuICAgKi9cbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBEaXNhYmxlZE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBEaXNhYmxlZEVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBhdHRyIGRpc2FibGVkXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLy8gQmVjYXVzZSBgYXJpYURpc2FibGVkYCBleGlzdHMgYXMgYSBzdHJpbmcgb24gTGl0RWxlbWVudCB3ZSBjYW5ub3QgZGVjbGFyZSB0aGlzIGEgcHJvcGVydHkgaGVyZVxuICAgIHByb3RlY3RlZCB3aWxsVXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXM8YW55Pik6IHZvaWQge1xuICAgICAgc3VwZXIud2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAoX2NoYW5nZWRQcm9wZXJ0aWVzLmhhcygnZGlzYWJsZWQnKSkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgYCR7dGhpcy5kaXNhYmxlZH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBEaXNhYmxlZEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8RGlzYWJsZWRJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IHByZXNldFByb3BlcnR5IH0gZnJvbSAnLi4vcHJlc2V0cy9wcmVzZXQuZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW52ZXJzZUludGVyZmFjZSB7XG4gIC8qKiBSZW5kZXJzIHRoaXMgY29tcG9uZW50IHdpdGggaW52ZXJzZSB0aGVtaW5nICovXG4gIGludmVyc2U6IGJvb2xlYW47XG5cbiAgLyoqIFNwZWNpYWwgb3B0aW9uIHRvIG92ZXJyaWRlIGludmVyc2Ugd2hlbiBpdCBpcyBzZXQgYnkgYSBwcmVzZXQgKi9cbiAgd2l0aG91dEludmVyc2U6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBJbnZlcnNlTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPExpdEVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIEludmVyc2VFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqIFJlbmRlcnMgdGhpcyBjb21wb25lbnQgd2l0aCBpbnZlcnNlIHRoZW1pbmcgKi9cbiAgICBAcHJlc2V0UHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGludmVyc2UgPSBmYWxzZTtcblxuICAgIC8qKiBTcGVjaWFsIG9wdGlvbiB0byBvdmVycmlkZSBpbnZlcnNlIHdoZW4gaXQgaXMgc2V0IGJ5IGEgcHJlc2V0ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRob3V0SW52ZXJzZSA9IGZhbHNlO1xuICB9XG4gIHJldHVybiBJbnZlcnNlRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxJbnZlcnNlSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdChbaW52ZXJzZV06bm90KFt3aXRob3V0SW52ZXJzZV0pKXstLW10ZS1zdXJmYWNlLTE6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS0xLXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtc3VyZmFjZS0yOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tbXRlLXN1cmZhY2UtMi1yZ2I6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpOy0tbXRlLXN1cmZhY2UtMzp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlKTstLW10ZS1zdXJmYWNlLTMtcmdiOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UtcmdiKTstLW10ZS1zdXJmYWNlLTQ6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS00LXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtaW5rLTE6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMS1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTI6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMi1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTM6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMy1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTQ6dmFyKC0tbXRlLWJsYWNrKTstLW10ZS1pbmstNC1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1tdGUtaW5rLTU6dmFyKC0tbXRlLWJsYWNrKTstLW10ZS1pbmstNS1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1tdGUtYm9yZGVyLTE6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMS1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtYm9yZGVyLTI6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMi1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtYm9yZGVyLTM6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMy1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtZGlzYWJsZWQtMTp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0xKTstLW10ZS1kaXNhYmxlZC0xLXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0xLXJnYik7LS1tdGUtZGlzYWJsZWQtMjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0yKTstLW10ZS1kaXNhYmxlZC0yLXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0yKTstLW10ZS1kaXNhYmxlZC0zOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMpOy0tbXRlLWRpc2FibGVkLTMtcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMtcmdiKTstLW10ZS1kaXNhYmxlZC00OnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMpOy0tbXRlLWRpc2FibGVkLTQtcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTEtZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMS1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0yLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1pdC1zdXJmYWNlLTMtZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0zLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTMtYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMy1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1saWdodDp2YXIoLS1tdGUtd2hpdGUpOy0tbXRlLWxpZ2h0LXJnYjp2YXIoLS1tdGUtd2hpdGUtcmdiKTstLW10ZS1kYXJrOnZhcigtLW10ZS1ibGFjayk7LS1tdGUtZGFyay1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1idXR0b24tZmlsbGVkLWJnOnZhcigtLW10ZS13aGl0ZSk7LS1idXR0b24tZmlsbGVkLWluazp2YXIoLS1tdGUtYmxhY2spOy0tYnV0dG9uLWZpbGxlZC1hY3RpdmUtYmc6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWluazp2YXIoLS1tdGUtd2hpdGUpfWA7IiwgImltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50IH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IHByZXNldFByb3BlcnR5IH0gZnJvbSAnLi4vcHJlc2V0cy9wcmVzZXQuZGVjb3JhdG9yJztcbmltcG9ydCB7IFByZXNldEVsZW1lbnRJbnRlcmZhY2UgfSBmcm9tICcuLi9wcmVzZXRzL3ByZXNldC5taXhpbic7XG5cbmV4cG9ydCB0eXBlIFNpemVPcHRpb25zID0gJ21kJyB8ICd4cycgfCAnc20nIHwgJ2xnJyB8ICd4bCcgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNpemVJbnRlcmZhY2Uge1xuICAvKipcbiAgICogQWRqdXN0cyB0aGUgc2NhbGUgb2YgdGhpcyBjb21wb25lbnRcbiAgICogQGF0dHIgc2l6ZVxuICAgKi9cbiAgc2l6ZTogU2l6ZU9wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBTaXplTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQgJiBQYXJ0aWFsPFByZXNldEVsZW1lbnRJbnRlcmZhY2U8YW55Pj4+PihcbiAgc3VwZXJDbGFzczogVFxuKSA9PiB7XG4gIGNsYXNzIFNpemVFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgc2NhbGUgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBzaXplXG4gICAgICovXG4gICAgQHByZXNldFByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBzaXplOiBTaXplT3B0aW9ucztcbiAgfVxuICByZXR1cm4gU2l6ZUVsZW1lbnQgYXMgQ29uc3RydWN0b3I8U2l6ZUludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgb25VcGRhdGUgfSBmcm9tICcuLi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IERpc2FibGVkSW50ZXJmYWNlIH0gZnJvbSAnLi9kaXNhYmxlZC5taXhpbic7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IGlzU3NyIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGFiSW5kZXhJbnRlcmZhY2Uge1xuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHRhYmluZGV4IGF0dHJpYnV0ZSB2YWx1ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGdldFRhYkluZGV4QWRhcHRlcigpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byBzZXQgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBvbiBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzZXRUYWJJbmRleEFkYXB0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byByZW1vdmUgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlbW92ZVRhYkluZGV4QWRhcHRlcigpOiB2b2lkO1xufVxuXG4vKipcbiAqIE1peGluIHRvIHByb3Blcmx5IG1hbmFnZSB0aGUgdGFiaW5kZXggaW4gYSBub24taW50cnVzaXZlIHdheS4gV2hlbiBkaXNhYmxlZCBpcyB0cnVlLFxuICogdGhlIHRhYmluZGV4IHdpbGwgQUxXQVlTIGJlIGAtMWAuIEhvd2V2ZXIsIGFueSBjaGFuZ2VzIHRvIHRhYmluZGV4IHdpbGwgYmUgaW50ZXJjZXB0ZWRcbiAqIGFuZCBjYWNoZWQgaW50ZXJuYWxseSB1bnRpbCBkaXNhYmxlZCBpcyBmYWxzZSwgdGhlbiB0YWJpbmRleCB3aWxsIGJlIHJlc3RvcmVkIHRvIHRoZVxuICogY2FjaGVkIHZhbHVlLCBvciByZW1vdmVkIGlmIHRoYXQgaXMgdW5kZWZpbmVkLlxuICovXG5leHBvcnQgY29uc3QgVGFiSW5kZXhNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudCAmIERpc2FibGVkSW50ZXJmYWNlPj4oXG4gIHN1cGVyQ2xhc3M6IFQsXG4gIG9wdGlvbnM6IHsgaW5pdGlhbFRhYkluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQgfSA9IHsgaW5pdGlhbFRhYkluZGV4OiB1bmRlZmluZWQgfVxuKSA9PiB7XG4gIGNsYXNzIFRhYkluZGV4RWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ3RhYmluZGV4JywgdHlwZTogTnVtYmVyLCBub0FjY2Vzc29yOiB0cnVlIH0pXG4gICAgcHVibGljIG92ZXJyaWRlIHNldCB0YWJJbmRleCh0YWJJbmRleDogbnVtYmVyKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAvLyBXaGVuIHNldHRpbmcgdGhlIHRhYkluZGV4IG9uIHRoZSBjdXJyZW50IGVsZW1lbnQgdG8gYC0xYCBkaXNhYmxlZCwgd2Ugd2FudCB0byBrZWVwIHRyYWNrIG9mIHdoYXQgdGhlIHRhYkluZGV4IHZhbHVlIGJlZm9yZSB0aGF0IHdhc1xuICAgICAgICAvLyBhcyB0aGUgY2FjaGVkVGFiSW5kZXguIFRvIGRvIHRoaXMgd2UgbXVzdCBpZ25vcmUgdGhlIGluaXRpYWwgY2hhbmdlIHRvIGAtMWAgYW5kIHRoZW4gY2FjaGUgYW55IGZ1dHVyZSB2YWx1ZXMgYmVmb3JlIGtlZXBpbmcgdGhlXG4gICAgICAgIC8vIHRhYkluZGV4IGFzIGAtMWAgdW50aWwgbm8gbG9uZ2VyIGRpc2FibGVkLiBUaGVuIHdlIGNhbiByZXR1cm4gdGhlIHRhYkluZGV4IHRvIHdoYXRldmVyIHRoZSBsYXN0IHNldCB2YWx1ZSB3YXMgZnJvbSB0aGUgY2FjaGVkIGluZGV4LlxuICAgICAgICBpZiAoIXRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSkge1xuICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcignLTEnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoYCR7dGhpcy5fdGFiSW5kZXh9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgdGFiSW5kZXgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGFiSW5kZXg7XG4gICAgfVxuICAgIHByaXZhdGUgX3RhYkluZGV4ID0gb3B0aW9ucz8uaW5pdGlhbFRhYkluZGV4O1xuICAgIHByaXZhdGUgX2NhY2hlZFRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IGZhbHNlO1xuXG4gICAgQG9uVXBkYXRlKFsnZGlzYWJsZWQnXSwgeyBvbjogJ2JvdGgnIH0pXG4gICAgcHJpdmF0ZSBoYW5kbGVUYWJpbmRleENoYW5nZShjaGFuZ2VkUHJvcHMpIHtcbiAgICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIGlmIChjaGFuZ2VkUHJvcHMuZ2V0KCdkaXNhYmxlZCcpID09PSBmYWxzZSAmJiB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSBOdW1iZXIodGhpcy5nZXRUYWJJbmRleEFkYXB0ZXIoKSk7XG4gICAgICAgICAgdGhpcy5fdGFiSW5kZXggPSAtMTtcbiAgICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcignLTEnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2VkUHJvcHMuZ2V0KCdkaXNhYmxlZCcpID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2NhY2hlZFRhYkluZGV4ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fY2FjaGVkVGFiSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYkluZGV4ID0gdGhpcy5fY2FjaGVkVGFiSW5kZXg7XG4gICAgICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl9jYWNoZWRUYWJJbmRleH1gKTtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZWRUYWJJbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byByZXRyaWV2ZSB0aGUgY3VycmVudCB0YWJpbmRleCBhdHRyaWJ1dGUgdmFsdWUgZnJvbSBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudCAqL1xuICAgIGdldFRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHNldCB0aGUgdGFiaW5kZXggYXR0cmlidXRlIG9uIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50ICovXG4gICAgc2V0VGFiSW5kZXhBZGFwdGVyKHZhbHVlOiBzdHJpbmcsIHNob3VsZFByZXZlbnRUYWJJbmRleENoYW5nZU9uU2VsZiA9IGZhbHNlKSB7XG4gICAgICBpZiAoc2hvdWxkUHJldmVudFRhYkluZGV4Q2hhbmdlT25TZWxmKSB7XG4gICAgICAgIHRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byByZW1vdmUgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50ICovXG4gICAgcmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgd2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgc3VwZXIud2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChpc1NzcigpICYmIHRoaXMuX3RhYkluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoYCR7dGhpcy5fdGFiSW5kZXh9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAodGhpcy5fdGFiSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl90YWJJbmRleH1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFRhYkluZGV4RWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxUYWJJbmRleEludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBDb25zdHJ1Y3RvciwgTXRlRWxlbWVudCB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBwcmVzZXRQcm9wZXJ0eSB9IGZyb20gJy4uL3ByZXNldHMvcHJlc2V0LmRlY29yYXRvcic7XG5pbXBvcnQgeyBQcmVzZXRFbGVtZW50SW50ZXJmYWNlIH0gZnJvbSAnLi4vcHJlc2V0cy9wcmVzZXQubWl4aW4nO1xuXG5leHBvcnQgdHlwZSBSYWRpdXNPcHRpb25zID0gJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ25vbmUnIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSYWRpdXNJbnRlcmZhY2Uge1xuICAvKipcbiAgICogQWRqdXN0cyB0aGUgYm9yZGVyLXJhZGl1cyBvZiB0aGlzIGNvbXBvbmVudFxuICAgKiBAYXR0ciByYWRpdXNcbiAgICovXG4gIHJhZGl1czogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IFJhZGl1c01peGluID0gPFxuICBUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudCAmIFBhcnRpYWw8UHJlc2V0RWxlbWVudEludGVyZmFjZTxhbnk+Pj5cbj4oXG4gIHN1cGVyQ2xhc3M6IFRcbikgPT4ge1xuICBjbGFzcyBSYWRpdXNFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgYm9yZGVyLXJhZGl1cyBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBhdHRyIHJhZGl1c1xuICAgICAqL1xuICAgIEBwcmVzZXRQcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgcmFkaXVzOiBSYWRpdXNPcHRpb25zO1xuICB9XG4gIHJldHVybiBSYWRpdXNFbGVtZW50IGFzIENvbnN0cnVjdG9yPFJhZGl1c0ludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50LCBTdHlsZU1hcCB9IGZyb20gJy4uJztcbmltcG9ydCB7IHNlbGVjdG9yRmFjdG9yeSB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBNdGVFbGVtZW50UGFydHMge1xuICAvKiogVGhlIGhvc3QgZWxlbWVudCBcInBhcnRcIi4gT3ZlcnJpZGVzIHRoZSBgc2VgIHByb3BlcnR5IG9mIHRoaXMgZWxlbWVudCAqL1xuICBob3N0PzogU3R5bGVNYXA7XG59XG5cbmV4cG9ydCB0eXBlIFN0eWxlUGFydHNNYXA8VCA9IHN0cmluZyB8IG51bWJlcj4gPSB7XG4gIFtuYW1lOiBzdHJpbmddOiBTdHlsZU1hcDxUPjtcbn07XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0eWxlUGFydHNJbnRlcmZhY2U8U3R5bGVQYXJ0cz4ge1xuICAvKipcbiAgICogU3R5bGUgbWFwcGluZ3MgdGhhdCBhcmUgYXBwbGllZCB0byBlYWNoIGNzcyBwYXJ0IGJ5IG5hbWUuIFNldCB0aGVcbiAgICogcHJvcGVydHkgYGhvc3RgIHRvIGFwcGx5IGEgYFN0eWxlSW5mb2Agb2JqZWN0IHRvIHRoZSBlbGVtZW50IGhvc3QgaXRzZWxmLlxuICAgKi9cbiAgc3A/OiBTdHlsZVBhcnRzO1xufVxuXG5leHBvcnQgY29uc3QgU3R5bGVQYXJ0c01peGluID0gPFN0eWxlUGFydHMsIFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBTdHlsZVBhcnRzRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIFN0eWxlIG1hcHBpbmdzIHRoYXQgYXJlIGFwcGxpZWQgdG8gZWFjaCBjc3MgcGFydCBieSBuYW1lLiBTZXQgdGhlXG4gICAgICogcHJvcGVydHkgYGhvc3RgIHRvIGFwcGx5IGEgYFN0eWxlSW5mb2Agb2JqZWN0IHRvIHRoZSBlbGVtZW50IGhvc3QgaXRzZWxmLlxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgcmVmbGVjdDogdHJ1ZSB9KSBzcDogU3R5bGVQYXJ0cztcblxuICAgIHByb3RlY3RlZCB1cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpIHtcbiAgICAgIHN1cGVyLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKCdzcCcpKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuc3AgPz8gKHt9IGFzIFN0eWxlUGFydHMpKS5mb3JFYWNoKChbcGFydCwgc3R5bGVNYXBdKSA9PiB7XG4gICAgICAgICAgLy8gRG91YmxlIHRoZSBgOmhvc3RgIHNlbGVjdG9yIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5IGJleW9uZCBtb3N0IGNvbXBvbmVudCBsZXZlbCBzdHlsZXMgYnkgZGVmYXVsdFxuICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0b3JGYWN0b3J5KFxuICAgICAgICAgICAgcGFydCA9PT0gJ2hvc3QnXG4gICAgICAgICAgICAgID8gJzpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCdcbiAgICAgICAgICAgICAgOiBgOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0OjpwYXJ0KCR7cGFydH0pYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zZXRJbnN0YW5jZVN0eWxlKGBzcC0ke3BhcnR9YCwgc2VsZWN0b3IsIHN0eWxlTWFwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFN0eWxlUGFydHNFbGVtZW50IGFzIENvbnN0cnVjdG9yPFN0eWxlUGFydHNJbnRlcmZhY2U8U3R5bGVQYXJ0cz4+ICYgVDtcbn07XG4iLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlfSNhbmNob3J7aW5zZXQ6MDtwb3NpdGlvbjphYnNvbHV0ZX1gOyIsICJpbXBvcnQgeyBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBDbGlja091dHNpZGVDb250cm9sbGVyLFxuICBDb25zdHJ1Y3RvcixcbiAgRXZlbnRFbWl0dGVyLFxuICBGb2N1c1RyYXBDb250cm9sbGVyLFxuICBNdGVFbGVtZW50LFxuICBQb3J0YWxBZGFwdGVyLFxuICBQb3J0YWxDb250cm9sbGVyLFxuICBkZWZhdWx0UG9ydGFsQWRhcHRlcixcbiAgZXZlbnRFbWl0dGVyLFxuICBpc1Nzcixcbn0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgUHJvcGVydHlWYWx1ZU1hcCB9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE92ZXJsYXlJbnRlcmZhY2Uge1xuICAvKipcbiAgICogVXBkYXRlcyB0aGUgb3ZlcmxheSBzdGF0ZSBvbiB0aGUgb3ZlcmxheSBtaXhpbi4gQnkgZGVmYXVsdCBhbGwgb3B0aW9ucyBhcmUgc2V0IHRvIHRydWUgaW5pdGlhbGx5LlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgc2V0T3ZlcmxheU9wdGlvbnMob3B0aW9uczoge1xuICAgIHdpdGhDbG9zZU9uQ2xpY2tPdXRzaWRlPzogYm9vbGVhbjtcbiAgICB3aXRoQ2xvc2VPbkVzY2FwZT86IGJvb2xlYW47XG4gICAgd2l0aEZvY3VzVHJhcD86IGJvb2xlYW47XG4gICAgd2l0aFBvcnRhbD86IGJvb2xlYW47XG4gICAgd2l0aERpbUJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICB3aXRoSW5lcnRCYWNrZHJvcD86IGJvb2xlYW47XG4gICAgd2l0aFNjcm9sbExvY2s/OiBib29sZWFuO1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uPzogbnVtYmVyO1xuICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuICAgIHJldHVyblRvT3JpZ2luT25DbG9zZT86IGJvb2xlYW47XG4gICAgZm9jdXNUcmFwVGFyZ2V0PzogRWxlbWVudDtcbiAgfSk6IHVua25vd247XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBvdmVybGF5IHNob3VsZCBvcGVuLiBDYW4gYWRkIGEgbGlzdGVuZXIgZm9yIG91dHNpZGUgY2xpY2tzLCBwb3J0YWwgYW4gZWxlbWVudCxcbiAgICogYW5kIHByZXZlbnQgdGhlIGJvZHkgZnJvbSBzY3JvbGxpbmcgdXBvbiBvcGVuLlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgaGFuZGxlT3ZlcmxheU9wZW4ob3B0aW9ucz86IHtcbiAgICBjbGlja091dHNpZGVFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG4gICAgd2lsbE9wZW4/OiAoKSA9PiB2b2lkO1xuICB9KTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIGFmdGVyIHRoZSBvdmVybGF5IGhhcyBiZWVuIG9wdGlvbmFsbHkgcG9ydGFsZWQgYW5kL29yIGFsbCBhbmltYXRpb25zIGhhdmUgZmluaXNoZWQuXG4gICAqL1xuICBoYW5kbGVPdmVybGF5T3BlbkVuZCgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgb3ZlcmxheSBlbGVtZW50IHNob3VsZCBjbG9zZS4gQ2FuIHN0b3AgbGlzdGVuaW5nIGZvciBvdXRzaWRlIGNsaWNrcywgcmVsZWFzZSBhLFxuICAgKiBmb2N1cyB0cmFwLCBhbmQgYWxsb3cgdGhlIGJvZHkgZWxlbWVudCB0byBzY3JvbGwgYWdhaW4uXG4gICAqL1xuICBoYW5kbGVPdmVybGF5Q2xvc2UoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIG92ZXJsYXkgZWxlbWVudCBoYXMgZmluaXNoZWQgY2xvc2luZyBhbmQvb3IgYWxsIGFuaW1hdGlvbnMgaGF2ZSBjb21wbGV0ZWQuIENhblxuICAgKiByZW1vdmUgYW4gZWxlbWVudCBmcm9tIHRoZSBwb3J0YWwuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBoYW5kbGVPdmVybGF5Q2xvc2VFbmQob3B0aW9ucz86IHsgcmVtb3ZlRnJvbUVsZW1lbnQ/OiBIVE1MRWxlbWVudCB9KTogUHJvbWlzZTx2b2lkPjtcblxuICBvcGVuKCk6IFByb21pc2U8dm9pZD47XG5cbiAgY2xvc2UoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogVGhlIHRhYiBpbmRleCBmb3IgdGhpcyBlbGVtZW50XG4gICAqL1xuICB0YWJpbmRleDogbnVtYmVyO1xuXG4gIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBvcGVuZWQgKi9cbiAgX29uT3BlbjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBFbWl0dGVkIGFmdGVyIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgb3BlbmluZyAqL1xuICBfb25PcGVuRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaXMgaW5pdGlhbGx5IGNsb3NpbmcgKi9cbiAgX29uQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgY2xvc2luZyAqL1xuICBfb25DbG9zZUVuZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBAaWdub3JlICovXG4gIHBvcnRhbEFkYXB0ZXI6IFBvcnRhbEFkYXB0ZXI7XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogVGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgb3ZlcmxheSByZWdhcmRsZXNzIG9mIGFuaW1hdGlvbnNcbiAgICovXG4gIG9wZW5lZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBJbmRpY2F0ZXMgdGhlIG92ZXJsYXkgaGFzIGJlZW4gcG9ydGFsZWQgYW5kIHJlYWR5IHRvIGFuaW1hdGVcbiAgICovXG4gIHJlYWR5Rm9yQW5pbWF0aW9uOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEluZGljYXRlcyB0aGUgb3ZlcmxheSBoYXMgYmVlbiBmdWxseSBhbmltYXRlZCBvcGVuXG4gICAqL1xuICBvcGVuZWRGdWxsOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgT3ZlcmxheU1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBPdmVybGF5RWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKiBUaGUgdGFiIGluZGV4IG9mIHRoaXMgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ3RhYmluZGV4JywgdHlwZTogTnVtYmVyIH0pIHRhYmluZGV4ID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBBZGFwdGVyIGZvciBwb3J0YWwgRE9NIG9wZXJhdGlvbiB0aGF0IGNhbiBiZSBzdXBwbGVtZW50ZWQgZm9yIGV4dGVybmFsLWZyYW1ld29yayBpbnRlZ3JhdGlvbnMuXG4gICAgICogTm90YWJseS1sZXZlcmFnZWQgYnkgb3ZlcmxheXMgaW4gb3VyIGdlbmVyYXRlZCByZWFjdCB3cmFwcGVycy5cbiAgICAgKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoKSBwb3J0YWxBZGFwdGVyOiBQb3J0YWxBZGFwdGVyID0gZGVmYXVsdFBvcnRhbEFkYXB0ZXI7XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgb3BlbmVkICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbk9wZW46IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0dGVkIGFmdGVyIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgb3BlbmluZyAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25PcGVuRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgY2xvc2VkICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgY2xvc2luZyAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25DbG9zZUVuZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgZWxlbWVudCBzaG91bGQgdXNlIGEgZm9jdXMgdHJhcCBvciBub3QgKi9cbiAgICBwcml2YXRlIF93aXRoRm9jdXNUcmFwID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IGVsZW1lbnQgc2hvdWxkIGNsb3NlIHdoZW4gYSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBlbGVtZW50ICovXG4gICAgcHJpdmF0ZSBfY2xvc2VPbkNsaWNrT3V0c2lkZSA9IHRydWU7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgY2xvc2Ugd2hlbiB0aGUgZXNjYXBlIGJ1dHRvbiBpcyBwcmVzc2VkICovXG4gICAgcHJpdmF0ZSBfY2xvc2VPbkVzY2FwZSA9IHRydWU7XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBzaG91bGQgdXNlIGEgcG9ydGFsIG9yIG5vdCAqL1xuICAgIHByaXZhdGUgX3dpdGhQb3J0YWwgPSB0cnVlO1xuXG4gICAgLyoqIFdldGhlciB0aGUgdXNlciBzaG91bGQgYmUgYWJsZSB0byBjbGljayBiZWhpbmQgdGhlIGJhY2tkcm9wIG9yIG5vdCAqL1xuICAgIHByaXZhdGUgX3dpdGhJbmVydEJhY2tkcm9wID0gZmFsc2U7XG5cbiAgICAvKiogV2V0aGVyIHRoZSBvdmVybGF5J3MgYmFja2Ryb3Agc2hvdWxkIHJlbmRlciBkaW1tZWQgKi9cbiAgICBwcml2YXRlIF93aXRoRGltQmFja2Ryb3AgPSBmYWxzZTtcblxuICAgIC8qKiBXZXRoZXIgb3Igbm90IHRoZSBlbGVtZW50IHNob3VsZCBiZSByZS1hcHBlbmRlZCB0byBpdCdzIG9yaWdpbiBwYXJlbnQgZWxlbWVudCBvbiBjbG9zZSBfaWZfIHBvcnRhbGVkLiAqL1xuICAgIHByaXZhdGUgX3JldHVyblRvT3JpZ2luT25DbG9zZSA9IGZhbHNlO1xuXG4gICAgLyoqIE9wdGlvbmFsIGJhY2tkcm9wIHRpbWluZy4gSW1wb3J0YW50IHBhcnRpY3VsYXJseSBmb3Igc21vb3RoIGNsb3NlcyB3aXRoIGEgdmlzaWJsZSBiYWNrZHJvcCAqL1xuICAgIHByaXZhdGUgX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgc2hvdWxkIHByZXZlbnQgc2Nyb2xsaW5nIG9uIHRoZSBib2R5ICovXG4gICAgcHJpdmF0ZSBfd2l0aFNjcm9sbExvY2sgPSB0cnVlO1xuXG4gICAgcHJvdGVjdGVkIGZvY3VzVHJhcENvbnRyb2xsZXIgPSBuZXcgRm9jdXNUcmFwQ29udHJvbGxlcih0aGlzKTtcblxuICAgIHByb3RlY3RlZCBjbGlja091dHNpZGVDb250cm9sbGVyID0gbmV3IENsaWNrT3V0c2lkZUNvbnRyb2xsZXIodGhpcywgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl93aXRoUG9ydGFsKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2VPbkNsaWNrT3V0c2lkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcHJvdGVjdGVkIHBvcnRhbENvbnRyb2xsZXIgPSBuZXcgUG9ydGFsQ29udHJvbGxlcih0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHBhcmVudCBlbGVtZW50XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRpYWxQYXJlbnQ6IEVsZW1lbnQgfCBIVE1MRWxlbWVudCA9IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgdG8gZGV0ZWN0IGNsaWNrcyBvdXRzaWRlIG9mIHRvIGNsb3NlIHRoZSBvdmVybGF5IGVsZW1lbnQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjbGlja091dHNpZGVPdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xuXG4gICAgcHJpdmF0ZSBfb3JpZ2luUGFyZW50PzogRWxlbWVudCB8IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBfZm9jdXNUcmFwVGFyZ2V0PzogRWxlbWVudCB8IEhUTUxFbGVtZW50ID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBUaGUgb3BlbmVkIHN0YXRlIG9mIHRoZSBvdmVybGF5IHJlZ2FyZGxlc3Mgb2YgYW5pbWF0aW9uc1xuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgb3BlbmVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogSW5kaWNhdGVzIHRoZSBvdmVybGF5IGhhcyBiZWVuIHBvcnRhbGVkIGFuZCByZWFkeSB0byBhbmltYXRlXG4gICAgICovXG4gICAgQHN0YXRlKClcbiAgICBzZXQgcmVhZHlGb3JBbmltYXRpb24ocmVhZHlGb3JBbmltYXRpb246IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuX3JlYWR5Rm9yQW5pbWF0aW9uID0gcmVhZHlGb3JBbmltYXRpb247XG4gICAgfVxuICAgIGdldCByZWFkeUZvckFuaW1hdGlvbigpIHtcbiAgICAgIC8vIER1cmluZyBTU1IgcmV0dXJuIHRydWUgaW4gY2FzZSBzb21ldGhpbmcgbmVlZHMgdG8gYmUgb3BlbmVkIGluaXRpYWxseS5cbiAgICAgIHJldHVybiBpc1NzcigpID8gdHJ1ZSA6IHRoaXMuX3JlYWR5Rm9yQW5pbWF0aW9uO1xuICAgIH1cbiAgICBwcml2YXRlIF9yZWFkeUZvckFuaW1hdGlvbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqIFRoZSBvcGVuZWQgc3RhdGUgb2YgdGhlIG92ZXJsYXkgcmVnYXJkbGVzcyBvZiBhbmltYXRpb25zLiBUaGlzIGlzIHJlZmxlY3RlZCBhbmQgdXNlZCBieVxuICAgICAqIHNvbWUgb3ZlcmxheXMgdG8gcmVzdHJpY3QgdGhlaXIgc2l6ZSB3aGlsZSBoaWRkZW4uIChzaW5jZSBkaXNwbGF5OiBub25lIGJyZWFrcyBhbmltYXRpb25zKVxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgb3BlbmVkRnVsbCA9IGZhbHNlO1xuXG4gICAgc2V0T3ZlcmxheU9wdGlvbnMob3B0aW9uczoge1xuICAgICAgd2l0aENsb3NlT25DbGlja091dHNpZGU/OiBib29sZWFuO1xuICAgICAgd2l0aENsb3NlT25Fc2NhcGU/OiBib29sZWFuO1xuICAgICAgd2l0aEZvY3VzVHJhcD86IGJvb2xlYW47XG4gICAgICB3aXRoUG9ydGFsPzogYm9vbGVhbjtcbiAgICAgIHdpdGhJbmVydEJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICAgIHdpdGhEaW1CYWNrZHJvcD86IGJvb2xlYW47XG4gICAgICB3aXRoU2Nyb2xsTG9jaz86IGJvb2xlYW47XG4gICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbj86IHN0cmluZztcbiAgICAgIHJldHVyblRvT3JpZ2luT25DbG9zZT86IGJvb2xlYW47XG4gICAgICBmb2N1c1RyYXBUYXJnZXQ/OiBFbGVtZW50O1xuICAgIH0pIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgd2l0aEZvY3VzVHJhcCxcbiAgICAgICAgd2l0aENsb3NlT25DbGlja091dHNpZGUsXG4gICAgICAgIHdpdGhDbG9zZU9uRXNjYXBlLFxuICAgICAgICB3aXRoUG9ydGFsLFxuICAgICAgICB3aXRoU2Nyb2xsTG9jayxcbiAgICAgICAgd2l0aEluZXJ0QmFja2Ryb3AsXG4gICAgICAgIHdpdGhEaW1CYWNrZHJvcCxcbiAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgIHJldHVyblRvT3JpZ2luT25DbG9zZSxcbiAgICAgICAgZm9jdXNUcmFwVGFyZ2V0LFxuICAgICAgfSA9IG9wdGlvbnMgPz8ge307XG5cbiAgICAgIHRoaXMuX3dpdGhGb2N1c1RyYXAgPSB3aXRoRm9jdXNUcmFwID8/IHRoaXMuX3dpdGhGb2N1c1RyYXA7XG4gICAgICB0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlID0gd2l0aENsb3NlT25DbGlja091dHNpZGUgPz8gdGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZTtcbiAgICAgIHRoaXMuX3dpdGhTY3JvbGxMb2NrID0gd2l0aFNjcm9sbExvY2sgPz8gdGhpcy5fd2l0aFNjcm9sbExvY2s7XG4gICAgICB0aGlzLl93aXRoUG9ydGFsID0gd2l0aFBvcnRhbCA/PyB0aGlzLl93aXRoUG9ydGFsO1xuICAgICAgdGhpcy5fd2l0aEluZXJ0QmFja2Ryb3AgPVxuICAgICAgICB3aXRoSW5lcnRCYWNrZHJvcCA/PyAhdGhpcy5fd2l0aEZvY3VzVHJhcCA/PyB0aGlzLl93aXRoSW5lcnRCYWNrZHJvcDtcbiAgICAgIHRoaXMuX3dpdGhEaW1CYWNrZHJvcCA9IHdpdGhEaW1CYWNrZHJvcCA/PyB0aGlzLl93aXRoRGltQmFja2Ryb3A7XG4gICAgICB0aGlzLl9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9XG4gICAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID8/IHRoaXMuX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgdGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlID0gcmV0dXJuVG9PcmlnaW5PbkNsb3NlID8/IHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZTtcbiAgICAgIHRoaXMuX2ZvY3VzVHJhcFRhcmdldCA9IGZvY3VzVHJhcFRhcmdldCA/PyB0aGlzLl9mb2N1c1RyYXBUYXJnZXQ7XG5cbiAgICAgIGlmICh3aXRoQ2xvc2VPbkVzY2FwZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX2Nsb3NlT25Fc2NhcGUgIT09IHdpdGhDbG9zZU9uRXNjYXBlKSB7XG4gICAgICAgIGlmICh3aXRoQ2xvc2VPbkVzY2FwZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xvc2VPbkVzY2FwZSA9IHdpdGhDbG9zZU9uRXNjYXBlID8/IHRoaXMuX2Nsb3NlT25Fc2NhcGU7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aXRoRm9jdXNUcmFwID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpdGhGb2N1c1RyYXAgPT09IHRydWUgJiYgdGhpcy50YWJpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy50YWJpbmRleCA9IC0xO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZU92ZXJsYXkoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVPdmVybGF5T3BlbihvcHRpb25zPzoge1xuICAgICAgY2xpY2tPdXRzaWRlRWxlbWVudD86IEhUTUxFbGVtZW50O1xuICAgICAgd2lsbE9wZW4/OiAoKSA9PiB2b2lkO1xuICAgIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIElnbm9yZSBpZiBhbHJlYWR5IG9wZW5cbiAgICAgIGlmICh0aGlzLm9wZW5lZCB8fCB0aGlzLm9wZW5lZEZ1bGwpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgICAgY29uc3QgeyBjbGlja091dHNpZGVFbGVtZW50LCB3aWxsT3BlbiB9ID0gb3B0aW9ucyA/PyB7fTtcbiAgICAgIHdpbGxPcGVuPy4oKTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50ID0gY2xpY2tPdXRzaWRlRWxlbWVudCB8fCB0aGlzO1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIubGlzdGVuRm9yQ2xpY2tzT3V0c2lkZU9mKHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQpO1xuICAgICAgICBpZiAodGhpcy5fd2l0aFBvcnRhbCkge1xuICAgICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlclxuICAgICAgICAgICAgLmFwcGVuZFRvU3RhY2sodGhpcywge1xuICAgICAgICAgICAgICB3aXRoRGltQmFja2Ryb3A6IHRoaXMuX3dpdGhEaW1CYWNrZHJvcCxcbiAgICAgICAgICAgICAgd2l0aEluZXJ0QmFja2Ryb3A6IHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wLFxuICAgICAgICAgICAgICB3aXRoU2Nyb2xsTG9jazogdGhpcy5fd2l0aFNjcm9sbExvY2ssXG4gICAgICAgICAgICAgIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyOiB0aGlzLmhhbmRsZUNsb3NlT25DbGlja091dHNpZGUsXG4gICAgICAgICAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLl9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgICAgcG9ydGFsQWRhcHRlcjogdGhpcy5wb3J0YWxBZGFwdGVyLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgLy8gV2FpdCBmb3IgYXBwZW5kIHRvIGNvbXBsZXRlIGJlZm9yZSBhbmltYXRpbmdcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkeUZvckFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gQWZ0ZXIgYW5pbWF0aW9uIGJlZ2lucyByZXNvbHZlXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX29uT3Blbi5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuX29yaWdpblBhcmVudCAmJlxuICAgICAgICAgICAgdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkgJiZcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpICE9PSB0aGlzLl9vcmlnaW5QYXJlbnRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMucG9ydGFsQWRhcHRlcih0aGlzLCB0aGlzLl9vcmlnaW5QYXJlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBXYWl0IGZvciBhcHBlbmQgdG8gY29tcGxldGUgYmVmb3JlIGFuaW1hdGluZ1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUZvckFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAvLyBBZnRlciBhbmltYXRpb24gYmVnaW5zIHJlc29sdmVcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX29uT3Blbi5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlT3ZlcmxheU9wZW5FbmQoKSB7XG4gICAgICAvLyBDYW5jZWwgaWYgY2xvc2VkIGJlZm9yZSBvcGVuIGVuZGVkXG4gICAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbmVkRnVsbCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5fd2l0aEZvY3VzVHJhcCkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIudHJhcEZvY3VzKHRoaXMuX2ZvY3VzVHJhcFRhcmdldCwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vbk9wZW5FbmQuZW1pdChudWxsLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZU92ZXJsYXlDbG9zZSgpIHtcbiAgICAgIC8vIElnbm9yZSBpZiBhbHJlYWR5IGNsb3NlZFxuICAgICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fb25DbG9zZS5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5zdG9wTGlzdGVuaW5nKCk7XG4gICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIucmVsZWFzZUZvY3VzKHRydWUpO1xuICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLmhpZGVCYWNrZHJvcCgpO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZU92ZXJsYXlDbG9zZUVuZChvcHRpb25zPzogeyByZW1vdmVGcm9tRWxlbWVudD86IEhUTUxFbGVtZW50IH0pIHtcbiAgICAgIC8vIENhbmNlbCBpZiBvcGVuZWQgYmVmb3JlIGNsb3NlIGVuZGVkXG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWRGdWxsID0gZmFsc2U7XG4gICAgICB0aGlzLnJlYWR5Rm9yQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIucmVtb3ZlRnJvbVN0YWNrKG9wdGlvbnM/LnJlbW92ZUZyb21FbGVtZW50IHx8IHRoaXMpO1xuICAgICAgaWYgKHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZSkge1xuICAgICAgICBpZiAodGhpcy5fb3JpZ2luUGFyZW50ICYmIHRoaXMuX29yaWdpblBhcmVudCAhPT0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgdGhpcy5fb3JpZ2luUGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fb25DbG9zZUVuZC5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVPdmVybGF5S2V5RG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudD8uaGFzQXR0cmlidXRlKCdkYXRhLW92ZXJsYXktd3JhcHBlcicpXG4gICAgICAgID8gdGhpcy5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50XG4gICAgICAgIDogdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHBhcmVudCBlbGVtZW50IHRoaXMgb3ZlcmxheSB3aWxsIGJlIHJlYXR0YWNoZWQgdG8gZWl0aGVyOlxuICAgICAqIC0gV2hlbiBjb25maWd1cmVkIHRvIGRvIHNvIG9uIGNsb3NlXG4gICAgICogLSBXaGVuIFwicG9ydGFsaW5nXCIgaXMgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBzZXRPcmlnaW5QYXJlbnQobmV3T3JpZ2luOiBFbGVtZW50KSB7XG4gICAgICBjb25zdCBjdXJyZW50UGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpO1xuICAgICAgaWYgKGN1cnJlbnRQYXJlbnRFbGVtZW50ID09PSB0aGlzLl9vcmlnaW5QYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIG5ld09yaWdpbik7XG4gICAgICB9XG4gICAgICB0aGlzLl9vcmlnaW5QYXJlbnQgPSBuZXdPcmlnaW47XG4gICAgfVxuXG4gICAgLyoqIFVwZGF0ZXMgdmFyaW91cyBiZWhhdmlvcnMgdG8gYXBwbHkgdGhlIGxhdGVzdCBvdmVybGF5IG9wdGlvbnMgKi9cbiAgICB1cGRhdGVPdmVybGF5KCkge1xuICAgICAgLy8gVXBkYXRlIGJhY2tkcm9wIGluZXJ0bmVzc1xuICAgICAgaWYgKHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5zZXRCYWNrZHJvcEluZXJ0bmVzcyh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5zZXRCYWNrZHJvcEluZXJ0bmVzcyhmYWxzZSk7XG4gICAgICB9XG4gICAgICAvLyBVcGRhdGUgY2xpY2sgb3V0c2lkZSBjb250cm9sbGVyXG4gICAgICBpZiAodGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZSAmJiAhdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmlzTGlzdGVuaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmxpc3RlbkZvckNsaWNrc091dHNpZGVPZih0aGlzKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUgJiYgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmlzTGlzdGVuaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSBmb2N1cyB0cmFwIGNvbnRyb2xsZXJcbiAgICAgIGlmICh0aGlzLl93aXRoRm9jdXNUcmFwICYmIHRoaXMub3BlbmVkICYmICF0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIuaXNUcmFwcGluZ0ZvY3VzKCkpIHtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLnRyYXBGb2N1cyh0aGlzLl9mb2N1c1RyYXBUYXJnZXQsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5fd2l0aEZvY3VzVHJhcCAmJiB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIuaXNUcmFwcGluZ0ZvY3VzKCkpIHtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLnJlbGVhc2VGb2N1cyh0cnVlKTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSBiYWNrZHJvcCBjb250cm9sbGVyXG4gICAgICBpZiAodGhpcy5fd2l0aERpbUJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5zaG93QmFja2Ryb3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5oaWRlQmFja2Ryb3AoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9yZXR1cm5Ub09yaWdpbk9uQ2xvc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuX29yaWdpblBhcmVudCAmJiB0aGlzLl9vcmlnaW5QYXJlbnQgIT09IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpKSB7XG4gICAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIHRoaXMuX29yaWdpblBhcmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBvcGVuKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPcGVuIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2xvc2UgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueSkge1xuICAgICAgc3VwZXIoYXJncyk7XG4gICAgICB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duID0gdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoXG4gICAgICBjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZU1hcDxhbnk+IHwgTWFwPFByb3BlcnR5S2V5LCB1bmtub3duPlxuICAgICk6IHZvaWQge1xuICAgICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgIHRoaXMuX29yaWdpblBhcmVudCA9IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlQ2xvc2VPbkNsaWNrT3V0c2lkZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgICBpZiAodGhpcy5fY2xvc2VPbkVzY2FwZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgaW4gdGhlIGV2ZW50IHRoZSBvdmVybGF5IGVsZW1lbnQgd2FzIHBvcnRhbGVkLlxuICAgICAgaWYgKHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmxpc3RlbkZvckNsaWNrc091dHNpZGVPZih0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIucmVsZWFzZUZvY3VzKHRydWUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPdmVybGF5RWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxPdmVybGF5SW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtkaXNwbGF5OmJsb2NrO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWZ1bGwtd2lkdGg6bWF4LWNvbnRlbnQ7LS1jb250cm9sLXdpZHRoOnVuc2V0Oy0tY29udHJvbC1taW4td2lkdGg6MjQwcHg7LS1jb250cm9sLW1heC13aWR0aDp2YXIoLS1jb250cm9sLXdpZHRoKTstLWNvbnRyb2wtbWFyZ2luLXk6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWNvbnRyb2wtbWFyZ2luLXg6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWNvbnRyb2wtZGVzY3JpcHRvci1tYXJnaW46dmFyKC0tbXRlLXNwYWNlLXNtKTstLWxhYmVsLXdpZHRoOnZhcigtLWNvbnRyb2wtd2lkdGgpOy0tbGFiZWwtbWluLXdpZHRoOnZhcigtLWNvbnRyb2wtbWluLXdpZHRoKTstLWxhYmVsLW1heC13aWR0aDp2YXIoLS1jb250cm9sLW1heC13aWR0aCk7LS1sYWJlbC1tYXJnaW4teTp2YXIoLS1tdGUtc3BhY2UteHMpO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOnZhcigtLWZ1bGwtd2lkdGgpfS5ncmlkLWNvbnRhaW5lcntkaXNwbGF5OmlubGluZS1ncmlkO2dyaWQtdGVtcGxhdGUtYXJlYXM6XCJsYWJlbFwiIFwiY29udHJvbFwiO2dyaWQtdGVtcGxhdGUtcm93czoxZnIgbWlubWF4KDAsMTAwJSk7d2lkdGg6aW5oZXJpdH06aG9zdChbd2l0aEZ1bGxXaWR0aF0pey0tZnVsbC13aWR0aDoxMDAlOy0tY29udHJvbC13aWR0aDoxMDAlfTpob3N0KFt3aXRob3V0TWFyZ2luXSl7LS1jb250cm9sLW1hcmdpbi15OjBweH06aG9zdChbd2l0aG91dE1hcmdpbl0pIC5sYWJlbC1jb250YWluZXIuaGFzLWNvbnRlbnR7bWFyZ2luLWJvdHRvbTp2YXIoLS1jb250cm9sLWRlc2NyaXB0b3ItbWFyZ2luKX0ubGFiZWwtY29udGFpbmVye2Rpc3BsYXk6bm9uZTtncmlkLWFyZWE6bGFiZWw7bWF4LXdpZHRoOnZhcigtLWxhYmVsLW1heC13aWR0aCk7bWluLXdpZHRoOnZhcigtLWxhYmVsLW1pbi13aWR0aCk7d2lkdGg6dmFyKC0tbGFiZWwtd2lkdGgpfS5sYWJlbC1jb250YWluZXIuaGFzLWNvbnRlbnR7ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOnZhcigtLWxhYmVsLW1hcmdpbi15KX0ubGFiZWwtY29udGFpbmVyOm5vdCguaGFzLWNvbnRlbnQpe21hcmdpbjowIWltcG9ydGFudH0uY29udGV4dHtncmlkLWFyZWE6Y29udGV4dH0uZGVzY3JpcHRpb24sLmVycm9yLC5oaW50LC5sYWJlbHtkaXNwbGF5OmJsb2NrfS5kZXNjcmlwdGlvbiBtdGUtZGVzY3JpcHRpb24sLmRlc2NyaXB0aW9uIG10ZS1kZXNjcmlwdGlvbi10ZXh0LC5sYWJlbCBtdGUtbGFiZWwsLmxhYmVsIG10ZS1sYWJlbC10ZXh0LDpob3N0IDo6c2xvdHRlZChtdGUtZGVzY3JpcHRpb24tdGV4dFtzbG90PWRlc2NyaXB0aW9uXSksOmhvc3QgOjpzbG90dGVkKG10ZS1kZXNjcmlwdGlvbltzbG90PWRlc2NyaXB0aW9uXSksOmhvc3QgOjpzbG90dGVkKG10ZS1sYWJlbC10ZXh0W3Nsb3Q9bGFiZWxdKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWxhYmVsW3Nsb3Q9bGFiZWxdKXttYXJnaW46MH06aG9zdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKXstLWxhYmVsLXdpZHRoOm1heC1jb250ZW50Oy0tbGFiZWwtbWluLXdpZHRoOm1heC1jb250ZW50fTpob3N0KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pIC5ncmlkLWNvbnRhaW5lcntncmlkLXRlbXBsYXRlLWFyZWFzOlwibGFiZWwgY29udHJvbFwiO2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoYXV0byx2YXIoLS1sYWJlbC13aWR0aCkpIG1pbm1heChhdXRvLHZhcigtLWNvbnRyb2wtd2lkdGgpKX06aG9zdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKSAubGFiZWwtY29udGFpbmVye21hcmdpbi1ib3R0b206dmFyKC0tY29udHJvbC1tYXJnaW4teSk7bWFyZ2luLXJpZ2h0OnZhcigtLWNvbnRyb2wtbWFyZ2luLXgpO21hcmdpbi10b3A6Y2FsYyh2YXIoLS1jb250cm9sLW1hcmdpbi15KSArIHZhcigtLWxhYmVsLWJlZm9yZS1vZmZzZXQpKX0uZGVzY3JpcHRpb24sLmVycm9yLC5oaW50e21pbi13aWR0aDoxMDAlO3dpZHRoOi1tb3otbWluLWNvbnRlbnQ7d2lkdGg6bWluLWNvbnRlbnR9LmNvbnRyb2wtb3V0ZXItY29udGFpbmVye2dyaWQtYXJlYTpjb250cm9sO21hcmdpbi10b3A6dmFyKC0tY29udHJvbC1tYXJnaW4teSk7bWF4LXdpZHRoOnZhcigtLWNvbnRyb2wtbWF4LXdpZHRoKTttaW4td2lkdGg6dmFyKC0tY29udHJvbC1taW4td2lkdGgpO3dpZHRoOnZhcigtLWNvbnRyb2wtd2lkdGgpfTpob3N0KDpub3QoW2xhYmVsUG9zaXRpb249YmVmb3JlXSkpIC5jb250cm9sLW91dGVyLWNvbnRhaW5lci5oYXMtbGFiZWwtY29udGVudHttYXJnaW4tdG9wOmNhbGModmFyKC0tY29udHJvbC1tYXJnaW4teSkvMil9LmNvbnRyb2wtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWFyZ2luLWJvdHRvbTp2YXIoLS1jb250cm9sLW1hcmdpbi15KX0uZXJyb3IsLmhpbnR7ZGlzcGxheTpub25lfS5lcnJvci5oYXMtY29udGVudCwuaGludC5oYXMtY29udGVudHtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6dmFyKC0tY29udHJvbC1kZXNjcmlwdG9yLW1hcmdpbil9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tZm9ybS1maWVsZC1pbnRlcm5hbC1wYWRkaW5nOnZhcigtLW10ZS1zcGFjZS1zbSk7LS1mb3JtLWZpZWxkLWludGVybmFsLWdhcDp2YXIoLS1tdGUtc3BhY2Utc20pOy0tZm9ybS1maWVsZC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpOy0tZm9ybS1maWVsZC1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWZvcm0tZmllbGQtYmFja2dyb3VuZDp2YXIoLS1tdGUtc3VyZmFjZS0yKTstLXByZXBlbmQtYmFja2dyb3VuZDp2YXIoLS1tdGUtZ3JleS0xKTstLXByZXBlbmQtcGFkZGluZy14OnZhcigtLW10ZS1zcGFjZS1zbSk7LS1wcmVwZW5kLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpfTpob3N0KFtyYWRpdXM9c21dKXstLWZvcm0tZmllbGQtcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXhzKX06aG9zdChbcmFkaXVzPWxnXSl7LS1mb3JtLWZpZWxkLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14eGwpfTpob3N0KFtzaXplPXNtXSl7LS1wcmVwZW5kLXBhZGRpbmcteDpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1mb3JtLWZpZWxkLWludGVybmFsLXBhZGRpbmc6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXA6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpfTpob3N0KFtzaXplPWxnXSl7LS1wcmVwZW5kLXBhZGRpbmcteDpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtcGFkZGluZzpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwOmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpfS5mb3JtLWZpZWxke2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnZhcigtLWZvcm0tZmllbGQtYmFja2dyb3VuZCk7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztnYXA6dmFyKC0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXApO3Bvc2l0aW9uOnJlbGF0aXZlfTpob3N0KFtkaXNhYmxlZF0pIC5mb3JtLWZpZWxke2JhY2tncm91bmQ6dmFyKC0tbXRlLWRpc2FibGVkLTEpO2JvcmRlcjoxcHggc29saWQgdmFyKC0tbXRlLWRpc2FibGVkLTEpfS5hcHBlbmQsLnByZXBlbmR7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLXNlbGY6c3RyZXRjaDtiYWNrZ3JvdW5kOnZhcigtLXByZXBlbmQtYmFja2dyb3VuZCk7ZGlzcGxheTpub25lO2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUpO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzowIHZhcigtLXByZXBlbmQtcGFkZGluZy14KX0ucHJlcGVuZHtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItcmlnaHQ6MXB4IHNvbGlkIHZhcigtLXByZXBlbmQtYm9yZGVyLWNvbG9yKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKX0uYXBwZW5ke2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItbGVmdDoxcHggc29saWQgdmFyKC0tcHJlcGVuZC1ib3JkZXItY29sb3IpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKX0uYXBwZW5kLmhhcy1jb250ZW50LC5wcmVwZW5kLmhhcy1jb250ZW50e2Rpc3BsYXk6ZmxleH0ucHJlZml4LC5zdWZmaXh7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLXNlbGY6c3RyZXRjaDtkaXNwbGF5OmZsZXg7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ucHJlZml4Om5vdCguaGFzLXByZXBlbmQpe3BhZGRpbmctbGVmdDp2YXIoLS1wcmVwZW5kLXBhZGRpbmcteCl9LnN1ZmZpeDpub3QoLmhhcy1hcHBlbmQpe3BhZGRpbmctcmlnaHQ6dmFyKC0tcHJlcGVuZC1wYWRkaW5nLXgpfS5mb3JtLWZpZWxkLmZvY3VzZWQ6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3R0b206LTFweDtib3gtc2hhZG93OjAgMCAwIDFweCB2YXIoLS1tdGUtbGlnaHQpO2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO2xlZnQ6LTFweDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0Oi0xcHg7dG9wOi0xcHg7ei1pbmRleDo5fS5mb3JtLWZpZWxkLmludmFsaWR7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtcmdiKSl9Omhvc3QoW3dpdGhvdXRCb3JkZXJdKSA6aXMoLmZvcm0tZmllbGQsLnByZXBlbmQsLmFwcGVuZCl7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudH1gOyIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIEFjdGl2ZUxpbmtPcHRpb25zLFxuICBDb25zdHJ1Y3RvcixcbiAgTXRlRWxlbWVudCxcbiAgTXRlSGlzdG9yeUFwaVNlcnZpY2UsXG4gIFVuc3Vic2NyaWJlcixcbiAgaXNMaW5rQWN0aXZlLFxuICBvblVwZGF0ZSxcbn0gZnJvbSAnLi4vJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTGlua0ludGVyZmFjZSB7XG4gIGhyZWY/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEF1dG9BY3RpdmVMaW5rSW50ZXJmYWNlIHtcbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgbGluayBpcyB0aGUgYWN0aXZlIHBhZ2UgKi9cbiAgYWN0aXZlOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGxpbmsgc2hvdWxkIGF1dG9tYXRpY2FsbHkgdHJ5IHRvIGRldGVybWluZSBpZiBpdCBpcyB0aGUgYWN0aXZlIHBhZ2UgKi9cbiAgd2l0aG91dEF1dG9BY3RpdmU6IGJvb2xlYW47XG5cbiAgLyoqIE9wdGlvbnMgdG8gcmVmaW5lIGhvdyB0aGlzIGxpbmsgd2lsbCBkZXRlcm1pbmUgaWYgaXQgaXMgdGhlIGFjdGl2ZSBwYWdlICovXG4gIGFjdGl2ZUxpbmtPcHRpb25zPzogUGFydGlhbDxBY3RpdmVMaW5rT3B0aW9ucz47XG5cbiAgLyoqIFRoZSBpbnRlcm5hbCBhbmNob3IgZWxlbWVudCBmcm9tIHdoaWNoIHRvIHB1bGwgdGhlIGxvY2F0aW9uIGZvciBjb21wYXJpc29uICovXG4gIGFuY2hvckVsZW1lbnQ/OiBIVE1MQW5jaG9yRWxlbWVudDtcbn1cblxuZXhwb3J0IGNvbnN0IEF1dG9BY3RpdmVMaW5rTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQgJiBMaW5rSW50ZXJmYWNlPj4oXG4gIHN1cGVyQ2xhc3M6IFRcbikgPT4ge1xuICBjbGFzcyBBdXRvQWN0aXZlTGlua0VsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRob3V0QXV0b0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCByZWZsZWN0OiB0cnVlIH0pIGFjdGl2ZUxpbmtPcHRpb25zPzogUGFydGlhbDxBY3RpdmVMaW5rT3B0aW9ucz47XG5cbiAgICBhbmNob3JFbGVtZW50PzogSFRNTEFuY2hvckVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHVuc3ViOiBVbnN1YnNjcmliZXI7XG5cbiAgICBAb25VcGRhdGUoJ2FjdGl2ZScsIHsgd2FpdFVudGlsRmlyc3RVcGRhdGU6IHRydWUgfSlcbiAgICBwcml2YXRlIGhhbmRsZUFjdGl2ZUxpbmtDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5hbmNob3JFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICdwYWdlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG9uVXBkYXRlKFsnaHJlZicsICdpcmVmJywgJ3dpdGhBdXRvQWN0aXZlJ10sIHsgd2FpdFVudGlsRmlyc3RVcGRhdGU6IHRydWUgfSlcbiAgICBwcml2YXRlIGhhbmRsZUF1dG9BY3RpdmVDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5ocmVmIHx8IHRoaXNbJ2lyZWYnXSkge1xuICAgICAgICBpZiAodGhpcy53aXRob3V0QXV0b0FjdGl2ZSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgICB0aGlzLmhhbmRsZVVybENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVBdXRvQWN0aXZlQ2hhbmdlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRMaXN0ZW5lcigpIHtcbiAgICAgIGlmICghdGhpcy51bnN1Yikge1xuICAgICAgICB0aGlzLnVuc3ViID0gTXRlSGlzdG9yeUFwaVNlcnZpY2Uuc3RhdGVDaGFuZ2VzKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVVybENoYW5nZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgdGhpcy51bnN1Yj8uKCk7XG4gICAgICB0aGlzLnVuc3ViID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVVybENoYW5nZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlID0gaXNMaW5rQWN0aXZlKFxuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQ/LmhyZWYsXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICB0aGlzLmFjdGl2ZUxpbmtPcHRpb25zXG4gICAgICApO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIEF1dG9BY3RpdmVMaW5rRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxBdXRvQWN0aXZlTGlua0ludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50LCBTbG90Q29udHJvbGxlciB9IGZyb20gJy4uJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2xvdE9ic2VydmVySW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIFByb3AgdXNlZCB0byBkZWNsYXJlIHdoaWNoIHNsb3RzIGFyZSBiZWluZyB1c2VkIGR1cmluZyBTU1IgdG8gbWFrZSB0aGVtIHZpc2libGUgaW4gY2VydGFpbiBlZGdlLWNhc2VzLlxuICAgKi9cbiAgc3NyU2xvdHM6IHN0cmluZztcblxuICBzbG90Q29udHJvbGxlcjogU2xvdENvbnRyb2xsZXI7XG5cbiAgaGFzU2xvdDogKHNsb3Q6IHN0cmluZywgb3JWYWx1ZT86IGFueSkgPT4gYm9vbGVhbjtcblxuICBzc3JTbG90Q2hlY2s6IChzbG90czogc3RyaW5nKSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgU2xvdE9ic2VydmVyTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIFNsb3RPYnNlcnZlckVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBQcm9wIHVzZWQgdG8gZGVjbGFyZSB3aGljaCBzbG90cyBhcmUgYmVpbmcgdXNlZCBkdXJpbmcgU1NSIHRvIG1ha2UgdGhlbSB2aXNpYmxlIGluIGNlcnRhaW4gZWRnZS1jYXNlcy5cbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pXG4gICAgc2V0IHNzclNsb3RzKHZhbDogc3RyaW5nKSB7XG4gICAgICBsZXQgb2xkVmFsID0gdGhpcy5fc3NyU2xvdHM7XG4gICAgICB0aGlzLl9zc3JTbG90cyA9IHZhbDtcbiAgICAgIC8vIFBhcnNlIGFuZCBjYWNoZSBzc3Igc2xvdCBzZXRcbiAgICAgIGNvbnN0IHNsb3RzID0gKHRoaXMuX3NzclNsb3RzID8/ICcnKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5tYXAoKHNsb3QpID0+IHNsb3QudHJpbSgpKTtcbiAgICAgIHRoaXMuX3NzclNsb3RTZXQgPSBuZXcgU2V0PHN0cmluZz4oc2xvdHMpO1xuICAgICAgLy8gTm9ybWFsIHVwZGF0ZVxuICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCdzc3JTbG90cycsIG9sZFZhbCk7XG4gICAgfVxuICAgIGdldCBzc3JTbG90cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zc3JTbG90cztcbiAgICB9XG4gICAgcHJpdmF0ZSBfc3NyU2xvdHM/OiBzdHJpbmc7XG5cbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIF9zc3JTbG90U2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICBzbG90Q29udHJvbGxlciA9IG5ldyBTbG90Q29udHJvbGxlcih0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gc2xvdCBoYXMgY29udGVudCwgb3IgaWYgaXQgd2FzIHNwZWNpZmllZCBhcyBleGlzdGluZyBkdXJpbmcgU1NSLlxuICAgICAqIE9uY2UgY2FsbGVkLCB0aGUgY29tcG9uZW50IHdpbGwgbm93IGF1dG9tYXRpY2FsbHkgdXBkYXRlIGlmIHRoZSBjb250ZW50cyBvZiB0aGlzIHNsb3QgY2hhbmdlLlxuICAgICAqL1xuICAgIGhhc1Nsb3Qoc2xvdDogc3RyaW5nLCBvclZhbHVlPzogYW55KTogYm9vbGVhbiB7XG4gICAgICB0aGlzLnNsb3RDb250cm9sbGVyLnVwZGF0ZU9uQ2hhbmdlKHNsb3QpO1xuICAgICAgLy8gVE9ETyhyZWVjZSk6IHJlY29uc2lkZXIgd2hlbiBhIHNvbHV0aW9uIGV4aXN0cyBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzE0MzRcbiAgICAgIC8vIFdlIGhhdmUgdG8gYXNzdW1lIGFsaWdubWVudCB3aXRoIHNzclNsb3RDaGVjayB1bnRpbCB0aGUgZmlyc3QgdXBkYXRlIGhlcmUgb3RoZXJ3aXNlIHBhcnQgbWlzbWF0Y2hlcyBjYW4gb2NjdXJcbiAgICAgIGlmICghdGhpcy5fX2ZpcnN0VXBkYXRlZCkge1xuICAgICAgICByZXR1cm4gb3JWYWx1ZSB8fCB0aGlzLnNzclNsb3RDaGVjayhzbG90KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvclZhbHVlIHx8IHRoaXMuc2xvdENvbnRyb2xsZXIuY2hlY2soc2xvdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIHJlcXVlc3RlZCBzbG90IHdhcyBzcGVjaWZpZWQgaW4gdGhlIGxpc3Qgb2YgYHNzci1zbG90c2AuICovXG4gICAgc3NyU2xvdENoZWNrKHNsb3Q6IHN0cmluZykge1xuICAgICAgaWYgKHRoaXMuX19maXJzdFVwZGF0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NzclNsb3RTZXQuaGFzKHNsb3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gU2xvdE9ic2VydmVyRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxTbG90T2JzZXJ2ZXJJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgRm9ybUNvbnRyb2xNaXhpbiwgRm9ybUNvbnRyb2xJbnRlcmZhY2UgfSBmcm9tICdAb3Blbi13Yy9mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHsgcHJvcGVydHksIHF1ZXJ5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtcbiAgQ29uc3RydWN0b3IsXG4gIERpc2FibGVkTWl4aW4sXG4gIFRhYkluZGV4TWl4aW4sXG4gIE10ZUVsZW1lbnQsXG4gIGlubmVySW5wdXRWYWxpZGF0b3JzLFxuICBUYWJJbmRleEludGVyZmFjZSxcbiAgRGlzYWJsZWRJbnRlcmZhY2UsXG4gIG9uVXBkYXRlLFxuICBldmVudEVtaXR0ZXIsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnLi4nO1xuXG4vLyBSZXF1aXJlZCBwb2x5ZmlsbCBmb3Igbm93XG5pbXBvcnQgJy4uLy4uL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL2luZGV4JztcblxuZXhwb3J0IGludGVyZmFjZSBNdGVDaGVja2JveENoYW5nZURldGFpbCB7XG4gIC8qKiBUaGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wgY2hhbmdlZCAqL1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCBjaGFuZ2VkICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKiogV2hldGhlciBvciBub3QgdGhlIGVsZW1lbnQgaXMgY2hlY2tlZCAqL1xuICBjaGVja2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94SW50ZXJmYWNlIHtcbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgbGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBlcnJvciB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICBlcnJvcj86IHN0cmluZztcblxuICAvKiogVGhlIGhpbnQgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgaGludD86IHN0cmluZztcblxuICAvKiogQW4gYXJpYSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgdG8gdGhlIGlucHV0IGVsZW1lbnQgKi9cbiAgYXJpYUxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKiBUaGUgbmFtZSBmb3IgdGhlIGVsZW1lbnQuIFVzZWQgd2hlbiBzdWJtaXR0aW5nIGEgZm9ybSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50ICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKiogVGhlIHZhbHVlIGZvciB0aGUgZWxlbWVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgZWxlbWVudCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgICovXG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFsdGVycyB0aGUgYmVoYXZpb3Igb2YgdGhpcyBjb250cm9sLiBXaGVuIFwiY29udHJvbGxlZFwiLCBhIGNvbnRyb2xzIHZhbHVlIGlzIGRyaXZlbiBleHBsaWNpdGx5IGJ5IGV4dGVybmFsIHN0YXRlXG4gICAqIHZpYSB0aGUgYHZhbHVlYCBwcm9wLiBDaGFuZ2UgZXZlbnRzIHdpbGwgZmlyZSBidXQgdGhlIGNvbnRyb2wgdmFsdWUgd2lsbCBub3QgY2hhbmdlIHVudGlsIGl0IGlzIGFsdGVyZWQgZGlyZWN0bHkuXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIGNvbnRyb2xsZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGNoZWNrZWQgYnkgZGVmYXVsdC4gVXNlZnVsIGZvciB3aGVuIHJlc2V0dGluZyBmb3JtIGNvbnRyb2xzIG9yIHVzaW5nIGEgc3RhdGVsZXNzIGNvbXBvbmVudCAqL1xuICBkZWZhdWx0Q2hlY2tlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBpcyBjaGVja2VkIG9yIG5vdCAqL1xuICBjaGVja2VkOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBiZSByZWFkb25seSAqL1xuICByZWFkb25seTogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgc2VsZWN0aW5nIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIG9yIG5vdCAqL1xuICByZXF1aXJlZDogYm9vbGVhbjtcblxuICAvKiogUmVuZGVycyB0aGUgcmVxdWlyZWQgaW5kaWNhdG9yIGZvciB0aGlzIGlucHV0cyBsYWJlbCB3aXRob3V0IGVuYWJsaW5nIG5hdGl2ZSBgcmVxdWlyZWRgIHZhbGlkYXRpb24gKi9cbiAgc2hvd1JlcXVpcmVkOiBib29sZWFuO1xuXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGlucHV0IGJsdXJzICAqL1xuICBoYW5kbGVCbHVyKCk6IHZvaWQ7XG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZCBvbiAgKi9cbiAgaGFuZGxlRm9jdXMoKTogdm9pZDtcblxuICAvKiogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgY2hhbmdlcyAgKi9cbiAgaGFuZGxlQ2hhbmdlKCk6IHZvaWQ7XG5cbiAgLyoqIEEgc2V0IG9mIGF0dHJpYnV0ZXMgdG8gYmUgZm9yd2FyZGVkIHRvIGFuIGVsZW1lbnQgd2l0aGluIHJlbmRlciBhbmQgcmVtb3ZlZCBmcm9tIHRoZSBlbGVtZW50ICovXG4gIGluaGVyaXRlZEF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBjb25zdCBDaGVja2JveE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBDaGVja2JveEVsZW1lbnQgZXh0ZW5kcyBUYWJJbmRleE1peGluKEZvcm1Db250cm9sTWl4aW4oRGlzYWJsZWRNaXhpbihzdXBlckNsYXNzKSksIHtcbiAgICBpbml0aWFsVGFiSW5kZXg6IDAsXG4gIH0pIHtcbiAgICBpbmhlcml0ZWRBdHRyaWJ1dGVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIHN0YXRpYyBmb3JtQ29udHJvbFZhbGlkYXRvcnMgPSBpbm5lcklucHV0VmFsaWRhdG9ycztcblxuICAgIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KCkgbGFiZWw/OiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIGVycm9yIHRleHQgZm9yIHRoZSBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KCkgZXJyb3I/OiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIGhpbnQgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoKSBoaW50Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQWx0ZXJzIHRoZSBiZWhhdmlvciBvZiB0aGlzIGNvbnRyb2wuIFdoZW4gXCJjb250cm9sbGVkXCIsIGEgY29udHJvbHMgdmFsdWUgaXMgZHJpdmVuIGV4cGxpY2l0bHkgYnkgZXh0ZXJuYWwgc3RhdGVcbiAgICAgKiB2aWEgdGhlIGB2YWx1ZWAgcHJvcC4gQ2hhbmdlIGV2ZW50cyB3aWxsIGZpcmUgYnV0IHRoZSBjb250cm9sIHZhbHVlIHdpbGwgbm90IGNoYW5nZSB1bnRpbCBpdCBpcyBhbHRlcmVkIGRpcmVjdGx5LlxuICAgICAqIEBleHBlcmltZW50YWxcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIGNvbnRyb2xsZWQ6IGJvb2xlYW47XG5cbiAgICAvKiogQW4gYXJpYSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgdG8gdGhlIGlucHV0IGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6ICdhcmlhLWxhYmVsJywgcmVmbGVjdDogdHJ1ZSB9KSBhcmlhTGFiZWw6IHN0cmluZztcblxuICAgIC8qKiBUaGUgbmFtZSBmb3IgdGhlIGVsZW1lbnQuIFVzZWQgd2hlbiBzdWJtaXR0aW5nIGEgZm9ybSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBuYW1lOiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIHZhbHVlIGZvciB0aGUgZWxlbWVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgZWxlbWVudCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgICovXG4gICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSB2YWx1ZT8gPSAnb24nO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGNoZWNrZWQgYnkgZGVmYXVsdC4gVXNlZnVsIGZvciB3aGVuIHJlc2V0dGluZyBmb3JtIGNvbnRyb2xzIG9yIHVzaW5nIGEgc3RhdGVsZXNzIGNvbXBvbmVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgZGVmYXVsdENoZWNrZWQgPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGNoZWNrZWQgb3Igbm90ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBjaGVja2VkID0gZmFsc2U7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgcmVhZG9ubHkgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHJlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAvKiogV2hldGhlciB0aGUgc2VsZWN0aW5nIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIG9yIG5vdCAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcmVxdWlyZWQgPSBmYWxzZTtcblxuICAgIC8qKiBSZW5kZXJzIHRoZSByZXF1aXJlZCBpbmRpY2F0b3IgZm9yIHRoaXMgaW5wdXRzIGxhYmVsIHdpdGhvdXQgZW5hYmxpbmcgbmF0aXZlIGByZXF1aXJlZGAgdmFsaWRhdGlvbiAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgc2hvd1JlcXVpcmVkPztcblxuICAgIC8qKiBUaGUgaW5wdXQgZWxlbWVudCB1c2VkIHdpdGhpbiB0aGUgZm9ybSBjb250cm9sIG1peGluICovXG4gICAgQHF1ZXJ5KCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSB2YWxpZGF0aW9uVGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgLyoqIEVtaXR0ZWQgd2hlbiB0aGUgZWxlbWVudCdzIHN0YXRlIGlzIGFib3V0IHRvIGNoYW5nZS4gSWYgZGVmYXVsdCBpcyBwcmV2ZW50ZWQsIGl0IHdpbGwgcmV2ZXJ0IHRoZSBjaGVja2JveCB0byBpdCdzIG9yaWdpbmFsIGNoZWNrZWQgc3RhdGUgcHJpb3IgdG8gc2VsZWN0aW5nLiAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfd2lsbENoYW5nZTogRXZlbnRFbWl0dGVyPE10ZUNoZWNrYm94Q2hhbmdlRGV0YWlsPjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhlIGVsZW1lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZC4gKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TXRlQ2hlY2tib3hDaGFuZ2VEZXRhaWw+O1xuXG4gICAgLyoqIEVtaXRzIHdoZW4gdGhpcyBlbGVtZW50IGlzIGZvY3VzZWQgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uRm9jdXM6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0cyB3aGVuIHRoaXMgZWxlbWVudCBsb3NlcyBmb2N1cyAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25CbHVyOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBAb25VcGRhdGUoJ2RlZmF1bHRDaGVja2VkJylcbiAgICBwcm90ZWN0ZWQgb25EZWZhdWx0Q2hlY2tlZENoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRyb2xsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCAmJiB0aGlzLmRlZmF1bHRDaGVja2VkICYmICF0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAb25VcGRhdGUoWyd2YWx1ZScsICdjaGVja2VkJ10sIHsgb246ICdib3RoJyB9KVxuICAgIHByb3RlY3RlZCB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgQG9uVXBkYXRlKCdhcmlhTGFiZWwnLCB7IG9uOiAnYm90aCcgfSlcbiAgICBwcm90ZWN0ZWQgdXBkYXRlTGFiZWwoKSB7XG4gICAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIC4uLnRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyxcbiAgICAgICAgYXJpYUxhYmVsOiB0aGlzLmFyaWFMYWJlbCxcbiAgICAgIH07XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIC0tIEZvcm0gY29udHJvbCB2YWxpZGF0aW9uIG92ZXJyaWRlcyAtLSAqL1xuICAgIHNob3VsZEZvcm1WYWx1ZVVwZGF0ZSgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0Rm9ybUNvbnRyb2woKTogdm9pZCB7XG4gICAgICBzdXBlci5yZXNldEZvcm1Db250cm9sPy4oKTtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRyb2xsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmRlZmF1bHRDaGVja2VkO1xuICAgIH1cblxuICAgIHZhbGlkaXR5Q2FsbGJhY2soKTogc3RyaW5nIHwgdm9pZCB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvciB8fCB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIH1cblxuICAgIC8qKiAtLSBUYWJJbmRleCBvdmVycmlkZXMgLS0gKi9cbiAgICBnZXRUYWJJbmRleEFkYXB0ZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uVGFyZ2V0Py5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgc2V0VGFiSW5kZXhBZGFwdGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0Py5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdmFsdWUpO1xuICAgIH1cblxuICAgIHJlbW92ZVRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0Py5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vdFByZXZlbnRlZCA9IHRoaXMuX3dpbGxDaGFuZ2UuZW1pdChcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBjaGVja2VkOiAhdGhpcy5jaGVja2VkLFxuICAgICAgICB9LFxuICAgICAgICB7IGNhbmNlbGFibGU6IHRydWUgfVxuICAgICAgKTtcblxuICAgICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgY2hlY2tlZDogIXRoaXMuY2hlY2tlZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChub3RQcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIGNoZWNrZWQ6IHRoaXMuY2hlY2tlZCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICAgIHRoaXMuX29uQmx1ci5lbWl0KCk7XG4gICAgfTtcblxuICAgIGhhbmRsZUZvY3VzID0gKCkgPT4ge1xuICAgICAgdGhpcy5fb25Gb2N1cy5lbWl0KCk7XG4gICAgfTtcblxuICAgIC8qKiBDbGlja3MgdGhlIGVsZW1lbnQgKi9cbiAgICBwdWJsaWMgY2xpY2soKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQuY2xpY2soKTtcbiAgICB9XG5cbiAgICAvKiogRm9jdXNlcyB0aGUgZWxlbWVudCAqL1xuICAgIHB1YmxpYyBmb2N1cygpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblRhcmdldC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKiBCbHVycyB0aGUgZWxlbWVudCAqL1xuICAgIHB1YmxpYyBibHVyKCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0LmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gQ2hlY2tib3hFbGVtZW50IGFzIENvbnN0cnVjdG9yPFxuICAgIENoZWNrYm94SW50ZXJmYWNlICYgVGFiSW5kZXhJbnRlcmZhY2UgJiBGb3JtQ29udHJvbEludGVyZmFjZSAmIERpc2FibGVkSW50ZXJmYWNlXG4gID4gJlxuICAgIFQ7XG59O1xuIiwgIi8qKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBXZWFrTWFwcyB1c2VkIHRocm91Z2hvdXQgdGhpcyBwcm9qZWN0LiBUaGUgV2Vha01hcHMgZXhpc3QgdG8gdGllXG4gKiBvYmplY3RzIHRvZ2V0aGVyIHdpdGhvdXQgcG9sbHV0aW5nIHRoZSBvYmplY3RzIHRoZW1zZWx2ZXMgd2l0aCByZWZlcmVuY2VzIHdlJ2QgcmF0aGVyIGtlZXBcbiAqIGhpZGRlbi4gVGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIHdvcmsgYXMgdHJhbnNwYXJlbnRseSBhcyBwb3NzaWJsZS5cbiAqL1xuaW1wb3J0IHsgSUVsZW1lbnRJbnRlcm5hbHMsIElDdXN0b21FbGVtZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgaXQgaXMgYXR0YWNoZWQgdG8gKi9cbmV4cG9ydCBjb25zdCByZWZNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgSUN1c3RvbUVsZW1lbnQ+KCk7XG5cbi8qKiBVc2VlIGFuIEVsZW1lbnRzSW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBpdHMgVmFsaWRpdHlTdGF0ZSBvYmplY3QgKi9cbmV4cG9ydCBjb25zdCB2YWxpZGl0eU1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBWYWxpZGl0eVN0YXRlPigpO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGl0cyBhdHRhY2hlZCBpbnB1dFt0eXBlPVwiaGlkZGVuXCJdICovXG5leHBvcnQgY29uc3QgaGlkZGVuSW5wdXRNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgSFRNTElucHV0RWxlbWVudFtdPigpO1xuXG4vKiogVXNlIGEgY3VzdG9tIGVsZW1lbnQgdG8gZ2V0IGl0cyBhdHRhY2hlZCBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlICovXG5leHBvcnQgY29uc3QgaW50ZXJuYWxzTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzPigpO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IHRoZSBhdHRhY2hlZCB2YWxpZGF0aW9uIG1lc3NhZ2UgKi9cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uTWVzc2FnZU1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBzdHJpbmc+KCk7XG5cbi8qKiBVc2UgYSBmb3JtIGVsZW1lbnQgdG8gZ2V0IGF0dGFjaGVkIGN1c3RvbSBlbGVtZW50cyBhbmQgRWxlbWVudEludGVybmFscyBpbnN0YW5jZXMgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5leHBvcnQgY29uc3QgZm9ybXNNYXAgPSBuZXcgV2Vha01hcDxIVE1MRm9ybUVsZW1lbnQsIE9iamVjdD4oKTtcblxuLyoqIFVzZSBhIGN1c3RvbSBlbGVtZW50IG9yIG90aGVyIG9iamVjdCB0byBnZXQgdGhlaXIgYXNzb2NpYXRlZCBNdXRhdGlvbk9ic2VydmVycyAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd0hvc3RzTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIE11dGF0aW9uT2JzZXJ2ZXI+KCk7XG5cbi8qKiBVc2UgYSBmb3JtIGVsZW1lbnQgdG8gZ2V0IGEgc2V0IG9mIGF0dGFjaGVkIGN1c3RvbSBlbGVtZW50cyAqL1xuZXhwb3J0IGNvbnN0IGZvcm1FbGVtZW50c01hcCA9IG5ldyBXZWFrTWFwPEhUTUxGb3JtRWxlbWVudCwgU2V0PElDdXN0b21FbGVtZW50Pj4oKTtcblxuLyoqIFVzZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBhIHJlZmVyZW5jZSB0byBhbiBlbGVtZW50J3MgdmFsdWUgKi9cbmV4cG9ydCBjb25zdCByZWZWYWx1ZU1hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBhbnk+KCk7XG5cbi8qKiBFbGVtZW50cyB0aGF0IG5lZWQgdG8gYmUgdXBncmFkZWQgb25jZSBhZGRlZCB0byB0aGUgRE9NICovXG5leHBvcnQgY29uc3QgdXBncmFkZU1hcCA9IG5ldyBXZWFrTWFwPEVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzPigpO1xuXG4vKiogU2F2ZSByZWZlcmVuY2VzIHRvIHNoYWRvdyByb290cyBmb3IgaW5jbHVzaW9uIGluIGludGVybmFscyBpbnN0YW5jZSAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd1Jvb3RNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgU2hhZG93Um9vdD4oKTtcblxuLyoqIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIGludGVybmFscycgdmFsaWRhdGlvbiBhbmNob3IgKi9cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uQW5jaG9yTWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIEhUTUxFbGVtZW50PigpO1xuXG4vKiogTWFwIERvY3VtZW50RnJhZ21lbnRzIHRvIHRoZWlyIE11dGF0aW9uT2JzZXJ2ZXJzIHNvIHdlIGNhbiBkaXNjb25uZWN0IG9uY2UgZWxlbWVudHMgYXJlIHJlbW92ZWQgKi9cbmV4cG9ydCBjb25zdCBkb2N1bWVudEZyYWdtZW50TWFwID0gbmV3IFdlYWtNYXA8RG9jdW1lbnRGcmFnbWVudCwgTXV0YXRpb25PYnNlcnZlcj4oKTtcblxuLyoqIFdoZXRoZXIgY29ubmVjdGVkQ2FsbGJhY2sgaGFzIGFscmVhZHkgYmVlbiBjYWxsZWQuICovXG5leHBvcnQgY29uc3QgY29ubmVjdGVkQ2FsbGJhY2tNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgYm9vbGVhbj4oKTtcblxuLyoqIFNhdmUgYSByZWZlcmVuY2UgdG8gdmFsaWRpdHkgc3RhdGUgZm9yIGVsZW1lbnRzIHRoYXQgbmVlZCB0byB1cGdyYWRlIGFmdGVyIGJlaW5nIGNvbm5lY3RlZCAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkaXR5VXBncmFkZU1hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBJRWxlbWVudEludGVybmFscz4oKTtcbiIsICJpbXBvcnQgeyB1cGdyYWRlTWFwIH0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IElBb20sIElFbGVtZW50SW50ZXJuYWxzIH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbmV4cG9ydCBjb25zdCBhb206IElBb20gPSB7XG4gIGFyaWFBdG9taWM6ICdhcmlhLWF0b21pYycsXG4gIGFyaWFBdXRvQ29tcGxldGU6ICdhcmlhLWF1dG9jb21wbGV0ZScsXG4gIGFyaWFCdXN5OiAnYXJpYS1idXN5JyxcbiAgYXJpYUNoZWNrZWQ6ICdhcmlhLWNoZWNrZWQnLFxuICBhcmlhQ29sQ291bnQ6ICdhcmlhLWNvbGNvdW50JyxcbiAgYXJpYUNvbEluZGV4OiAnYXJpYS1jb2xpbmRleCcsXG4gIGFyaWFDb2xJbmRleFRleHQ6ICdhcmlhLWNvbGluZGV4dGV4dCcsXG4gIGFyaWFDb2xTcGFuOiAnYXJpYS1jb2xzcGFuJyxcbiAgYXJpYUN1cnJlbnQ6ICdhcmlhLWN1cnJlbnQnLFxuICBhcmlhRGlzYWJsZWQ6ICdhcmlhLWRpc2FibGVkJyxcbiAgYXJpYUV4cGFuZGVkOiAnYXJpYS1leHBhbmRlZCcsXG4gIGFyaWFIYXNQb3B1cDogJ2FyaWEtaGFzcG9wdXAnLFxuICBhcmlhSGlkZGVuOiAnYXJpYS1oaWRkZW4nLFxuICBhcmlhSW52YWxpZDogJ2FyaWEtaW52YWxpZCcsXG4gIGFyaWFLZXlTaG9ydGN1dHM6ICdhcmlhLWtleXNob3J0Y3V0cycsXG4gIGFyaWFMYWJlbDogJ2FyaWEtbGFiZWwnLFxuICBhcmlhTGV2ZWw6ICdhcmlhLWxldmVsJyxcbiAgYXJpYUxpdmU6ICdhcmlhLWxpdmUnLFxuICBhcmlhTW9kYWw6ICdhcmlhLW1vZGFsJyxcbiAgYXJpYU11bHRpTGluZTogJ2FyaWEtbXVsdGlsaW5lJyxcbiAgYXJpYU11bHRpU2VsZWN0YWJsZTogJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJyxcbiAgYXJpYU9yaWVudGF0aW9uOiAnYXJpYS1vcmllbnRhdGlvbicsXG4gIGFyaWFQbGFjZWhvbGRlcjogJ2FyaWEtcGxhY2Vob2xkZXInLFxuICBhcmlhUG9zSW5TZXQ6ICdhcmlhLXBvc2luc2V0JyxcbiAgYXJpYVByZXNzZWQ6ICdhcmlhLXByZXNzZWQnLFxuICBhcmlhUmVhZE9ubHk6ICdhcmlhLXJlYWRvbmx5JyxcbiAgYXJpYVJlbGV2YW50OiAnYXJpYS1yZWxldmFudCcsXG4gIGFyaWFSZXF1aXJlZDogJ2FyaWEtcmVxdWlyZWQnLFxuICBhcmlhUm9sZURlc2NyaXB0aW9uOiAnYXJpYS1yb2xlZGVzY3JpcHRpb24nLFxuICBhcmlhUm93Q291bnQ6ICdhcmlhLXJvd2NvdW50JyxcbiAgYXJpYVJvd0luZGV4OiAnYXJpYS1yb3dpbmRleCcsXG4gIGFyaWFSb3dJbmRleFRleHQ6ICdhcmlhLXJvd2luZGV4dGV4dCcsXG4gIGFyaWFSb3dTcGFuOiAnYXJpYS1yb3dzcGFuJyxcbiAgYXJpYVNlbGVjdGVkOiAnYXJpYS1zZWxlY3RlZCcsXG4gIGFyaWFTZXRTaXplOiAnYXJpYS1zZXRzaXplJyxcbiAgYXJpYVNvcnQ6ICdhcmlhLXNvcnQnLFxuICBhcmlhVmFsdWVNYXg6ICdhcmlhLXZhbHVlbWF4JyxcbiAgYXJpYVZhbHVlTWluOiAnYXJpYS12YWx1ZW1pbicsXG4gIGFyaWFWYWx1ZU5vdzogJ2FyaWEtdmFsdWVub3cnLFxuICBhcmlhVmFsdWVUZXh0OiAnYXJpYS12YWx1ZXRleHQnLFxuICByb2xlOiAncm9sZScsXG59O1xuXG5leHBvcnQgY29uc3QgaW5pdEFvbSA9IChyZWY6IEVsZW1lbnQsIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHMpID0+IHtcbiAgZm9yIChsZXQga2V5IGluIGFvbSkge1xuICAgIGludGVybmFsc1trZXldID0gbnVsbDtcblxuICAgIGxldCBjbG9zdXJlVmFsdWUgPSBudWxsO1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBhb21ba2V5XTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW50ZXJuYWxzLCBrZXksIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGNsb3N1cmVWYWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgY2xvc3VyZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICByZWYuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGdyYWRlTWFwLnNldChyZWYsIGludGVybmFscyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHtcbiAgaW50ZXJuYWxzTWFwLFxuICBzaGFkb3dIb3N0c01hcCxcbiAgdXBncmFkZU1hcCxcbiAgaGlkZGVuSW5wdXRNYXAsXG4gIGRvY3VtZW50RnJhZ21lbnRNYXAsXG4gIGZvcm1FbGVtZW50c01hcCxcbiAgdmFsaWRpdHlVcGdyYWRlTWFwLFxuICByZWZWYWx1ZU1hcCxcbn0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IGFvbSB9IGZyb20gJy4vYW9tLmpzJztcbmltcG9ydCB7XG4gIHJlbW92ZUhpZGRlbklucHV0cyxcbiAgaW5pdEZvcm0sXG4gIGluaXRMYWJlbHMsXG4gIHVwZ3JhZGVJbnRlcm5hbHMsXG4gIHNldERpc2FibGVkLFxuICBtdXRhdGlvbk9ic2VydmVyRXhpc3RzLFxufSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IElDdXN0b21FbGVtZW50IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbmZ1bmN0aW9uIGluaXROb2RlKG5vZGU6IElDdXN0b21FbGVtZW50KTogdm9pZCB7XG4gIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQobm9kZSk7XG4gIGNvbnN0IHsgZm9ybSB9ID0gaW50ZXJuYWxzO1xuICBpbml0Rm9ybShub2RlLCBmb3JtLCBpbnRlcm5hbHMpO1xuICBpbml0TGFiZWxzKG5vZGUsIGludGVybmFscy5sYWJlbHMpO1xufVxuXG4vKipcbiAqIElmIGEgZmllbGRzZXQncyBkaXNhYmxlZCBzdGF0ZSBpcyB0b2dnbGVkLCB0aGUgZm9ybURpc2FibGVkQ2FsbGJhY2tcbiAqIG9uIGFueSBjaGlsZCBmb3JtLWFzc29jaWF0ZWQgY3Vzb3RtIGVsZW1lbnRzLlxuICovXG5leHBvcnQgY29uc3Qgd2Fsa0ZpZWxkc2V0ID0gKG5vZGU6IEhUTUxGaWVsZFNldEVsZW1lbnQsIGZpcnN0UmVuZGVyID0gZmFsc2UpOiB2b2lkID0+IHtcbiAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihub2RlLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwge1xuICAgIGFjY2VwdE5vZGUobm9kZTogSUN1c3RvbUVsZW1lbnQpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIGludGVybmFsc01hcC5oYXMobm9kZSkgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9TS0lQO1xuICAgIH0sXG4gIH0pO1xuXG4gIGxldCBjdXJyZW50ID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgSUN1c3RvbUVsZW1lbnQ7XG4gIC8qKlxuICAgKiBXZSBkb24ndCBuZWVkIHRvIGNhbGwgYW55dGhpbmcgb24gZmlyc3QgcmVuZGVyIGlmXG4gICAqIHRoZSBlbGVtZW50IGlzbid0IGRpc2FibGVkXG4gICAqL1xuICBjb25zdCBpc0NhbGxOZWNlc3NhcnkgPSAhZmlyc3RSZW5kZXIgfHwgbm9kZS5kaXNhYmxlZDtcblxuICB3aGlsZSAoY3VycmVudCkge1xuICAgIGlmIChjdXJyZW50LmZvcm1EaXNhYmxlZENhbGxiYWNrICYmIGlzQ2FsbE5lY2Vzc2FyeSkge1xuICAgICAgc2V0RGlzYWJsZWQoY3VycmVudCwgbm9kZS5kaXNhYmxlZCk7XG4gICAgfVxuICAgIGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWc6IE11dGF0aW9uT2JzZXJ2ZXJJbml0ID0ge1xuICBhdHRyaWJ1dGVzOiB0cnVlLFxuICBhdHRyaWJ1dGVGaWx0ZXI6IFsnZGlzYWJsZWQnLCAnbmFtZSddLFxufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIgPSBtdXRhdGlvbk9ic2VydmVyRXhpc3RzKClcbiAgPyBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zTGlzdDogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xuICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldCBhcyBJQ3VzdG9tRWxlbWVudDtcblxuICAgICAgICAvKiogTWFuYWdlIGNoYW5nZXMgdG8gdGhlIHJlZidzIGRpc2FibGVkIHN0YXRlICovXG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgICAgICAgc2V0RGlzYWJsZWQodGFyZ2V0LCB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5sb2NhbE5hbWUgPT09ICdmaWVsZHNldCcpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVwdXJwb3NlIHRoZSBvYnNlcnZlciBmb3IgZmllbGRzZXRzIHdoaWNoIG5lZWRcbiAgICAgICAgICAgICAqIHRvIGJlIHdhbGtlZCB3aGVuZXZlciB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIGlzIHNldFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB3YWxrRmllbGRzZXQodGFyZ2V0IGFzIHVua25vd24gYXMgSFRNTEZpZWxkU2V0RWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKiBNYW5hZ2UgY2hhbmdlcyB0byB0aGUgcmVmJ3MgbmFtZSAqL1xuICAgICAgICBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ25hbWUnKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZWZWYWx1ZU1hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIGludGVybmFscy5zZXRGb3JtVmFsdWUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIDogKHt9IGFzIE11dGF0aW9uT2JzZXJ2ZXIpO1xuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZXJDYWxsYmFjayhtdXRhdGlvbkxpc3Q6IE11dGF0aW9uUmVjb3JkW10pIHtcbiAgbXV0YXRpb25MaXN0LmZvckVhY2goKG11dGF0aW9uUmVjb3JkKSA9PiB7XG4gICAgY29uc3QgeyBhZGRlZE5vZGVzLCByZW1vdmVkTm9kZXMgfSA9IG11dGF0aW9uUmVjb3JkO1xuICAgIGNvbnN0IGFkZGVkID0gQXJyYXkuZnJvbShhZGRlZE5vZGVzKSBhcyBJQ3VzdG9tRWxlbWVudFtdO1xuICAgIGNvbnN0IHJlbW92ZWQgPSBBcnJheS5mcm9tKHJlbW92ZWROb2RlcykgYXMgSUN1c3RvbUVsZW1lbnRbXTtcblxuICAgIGFkZGVkLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIC8qKiBBbGxvd3MgZm9yIGR5bmFtaWMgYWRkaXRpb24gb2YgZWxlbWVudHMgdG8gZm9ybXMgKi9cbiAgICAgIGlmIChpbnRlcm5hbHNNYXAuaGFzKG5vZGUpICYmIG5vZGUuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICAgICAgaW5pdE5vZGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKiBVcGdyYWRlIHRoZSBhY2Nlc3NpYmlsaXR5IGluZm9ybWF0aW9uIG9uIGFueSBwcmV2aW91c2x5IGNvbm5lY3RlZCAqL1xuICAgICAgaWYgKHVwZ3JhZGVNYXAuaGFzKG5vZGUpKSB7XG4gICAgICAgIGNvbnN0IGludGVybmFscyA9IHVwZ3JhZGVNYXAuZ2V0KG5vZGUpO1xuICAgICAgICBjb25zdCBhb21LZXlzID0gT2JqZWN0LmtleXMoYW9tKTtcbiAgICAgICAgYW9tS2V5c1xuICAgICAgICAgIC5maWx0ZXIoKGtleSkgPT4gaW50ZXJuYWxzW2tleV0gIT09IG51bGwpXG4gICAgICAgICAgLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYW9tW2tleV0sIGludGVybmFsc1trZXldKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgdXBncmFkZU1hcC5kZWxldGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKiBVcGdyYWRlIHRoZSB2YWxpZGl0eSBzdGF0ZSB3aGVuIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCAqL1xuICAgICAgaWYgKHZhbGlkaXR5VXBncmFkZU1hcC5oYXMobm9kZSkpIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gdmFsaWRpdHlVcGdyYWRlTWFwLmdldChub2RlKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2ludGVybmFscy12YWxpZCcsIGludGVybmFscy52YWxpZGl0eS52YWxpZC50b1N0cmluZygpKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2ludGVybmFscy1pbnZhbGlkJywgKCFpbnRlcm5hbHMudmFsaWRpdHkudmFsaWQpLnRvU3RyaW5nKCkpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgKCFpbnRlcm5hbHMudmFsaWRpdHkudmFsaWQpLnRvU3RyaW5nKCkpO1xuICAgICAgICB2YWxpZGl0eVVwZ3JhZGVNYXAuZGVsZXRlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvKiogSWYgdGhlIG5vZGUgdGhhdCdzIGFkZGVkIGlzIGEgZm9ybSwgY2hlY2sgdGhlIHZhbGlkaXR5ICovXG4gICAgICBpZiAobm9kZS5sb2NhbE5hbWUgPT09ICdmb3JtJykge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KG5vZGUgYXMgdW5rbm93biBhcyBIVE1MRm9ybUVsZW1lbnQpO1xuICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKG5vZGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCB7XG4gICAgICAgICAgYWNjZXB0Tm9kZShub2RlOiBJQ3VzdG9tRWxlbWVudCk6IG51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gaW50ZXJuYWxzTWFwLmhhcyhub2RlKSAmJiAhKGZvcm1FbGVtZW50cyAmJiBmb3JtRWxlbWVudHMuaGFzKG5vZGUpKVxuICAgICAgICAgICAgICA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVFxuICAgICAgICAgICAgICA6IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVA7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcblxuICAgICAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICAgIGluaXROb2RlKGN1cnJlbnQpO1xuICAgICAgICAgIGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5sb2NhbE5hbWUgPT09ICdmaWVsZHNldCcpIHtcbiAgICAgICAgZGlzYWJsZWRPck5hbWVPYnNlcnZlci5vYnNlcnZlPy4obm9kZSwgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZyk7XG4gICAgICAgIHdhbGtGaWVsZHNldChub2RlIGFzIHVua25vd24gYXMgSFRNTEZpZWxkU2V0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZW1vdmVkLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQobm9kZSk7XG4gICAgICAvKiogQ2xlYW4gdXAgYW55IGhpZGRlbiBpbnB1dCBlbGVtZW50cyBsZWZ0IGFmdGVyIGFuIGVsZW1lbnQgaXMgZGlzY29ubmVjdGVkICovXG4gICAgICBpZiAoaW50ZXJuYWxzICYmIGhpZGRlbklucHV0TWFwLmdldChpbnRlcm5hbHMpKSB7XG4gICAgICAgIHJlbW92ZUhpZGRlbklucHV0cyhpbnRlcm5hbHMpO1xuICAgICAgfVxuICAgICAgLyoqIERpc2Nvbm5lY3QgYW55IHVubmVlZGVkIE11dGF0aW9uT2JzZXJ2ZXJzICovXG4gICAgICBpZiAoc2hhZG93SG9zdHNNYXAuaGFzKG5vZGUpKSB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gc2hhZG93SG9zdHNNYXAuZ2V0KG5vZGUpO1xuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRoaXMgb2JzZXJ2ZXIgY2FsbGJhY2sgaXMganVzdCBmb3IgZG9jdW1lbnQgZnJhZ21lbnRzXG4gKiBpdCB3aWxsIHVwZ3JhZGUgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSBpZiB3YXMgYXBwZW5kZWRcbiAqIGZyb20gYSBkb2N1bWVudCBmcmFnbWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyYWdtZW50T2JzZXJ2ZXJDYWxsYmFjayhtdXRhdGlvbkxpc3Q6IE11dGF0aW9uUmVjb3JkW10pOiB2b2lkIHtcbiAgbXV0YXRpb25MaXN0LmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgY29uc3QgeyByZW1vdmVkTm9kZXMgfSA9IG11dGF0aW9uO1xuXG4gICAgcmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gZG9jdW1lbnRGcmFnbWVudE1hcC5nZXQobXV0YXRpb24udGFyZ2V0IGFzIERvY3VtZW50RnJhZ21lbnQpO1xuICAgICAgaWYgKGludGVybmFsc01hcC5oYXMobm9kZSBhcyBJQ3VzdG9tRWxlbWVudCkpIHtcbiAgICAgICAgdXBncmFkZUludGVybmFscyhub2RlIGFzIElDdXN0b21FbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogRGVmZXIgdGhlIHVwZ3JhZGUgb2Ygbm9kZXMgd2l0aGluZyBhIERvY3VtZW50RnJhZ21lbnRcbiAqIEBwYXJhbSBmcmFnbWVudCB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmVyVXBncmFkZSA9IChmcmFnbWVudDogRG9jdW1lbnRGcmFnbWVudCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZyYWdtZW50T2JzZXJ2ZXJDYWxsYmFjayk7XG4gIG9ic2VydmVyLm9ic2VydmU/LihmcmFnbWVudCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gIGRvY3VtZW50RnJhZ21lbnRNYXAuc2V0KGZyYWdtZW50LCBvYnNlcnZlcik7XG59O1xuXG5leHBvcnQgY29uc3Qgb2JzZXJ2ZXIgPSBtdXRhdGlvbk9ic2VydmVyRXhpc3RzKClcbiAgPyBuZXcgTXV0YXRpb25PYnNlcnZlcihvYnNlcnZlckNhbGxiYWNrKVxuICA6ICh7fSBhcyBNdXRhdGlvbk9ic2VydmVyKTtcbmV4cG9ydCBjb25zdCBvYnNlcnZlckNvbmZpZzogTXV0YXRpb25PYnNlcnZlckluaXQgPSB7XG4gIGNoaWxkTGlzdDogdHJ1ZSxcbiAgc3VidHJlZTogdHJ1ZSxcbn07XG4iLCAiaW1wb3J0IHsgaGlkZGVuSW5wdXRNYXAsIGZvcm1zTWFwLCBmb3JtRWxlbWVudHNNYXAsIGludGVybmFsc01hcCB9IGZyb20gJy4vbWFwcy5qcyc7XG5pbXBvcnQgeyBkaXNhYmxlZE9yTmFtZU9ic2VydmVyLCBkaXNhYmxlZE9yTmFtZU9ic2VydmVyQ29uZmlnIH0gZnJvbSAnLi9tdXRhdGlvbi1vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgSUN1c3RvbUVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzLCBMYWJlbHNMaXN0IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbi8qKlxuICogVG9nZ2xlJ3MgdGhlIGRpc2FibGVkIHN0YXRlIChhdHRyaWJ1dGVzICYgY2FsbGJhY2spIG9uIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAcGFyYW0ge0lDdXN0b21FbGVtZW50fSByZWYgLSBUaGUgY3VzdG9tIGVsZW1lbnQgaW5zdGFuY2VcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzYWJsZWQgLSBUaGUgZGlzYWJsZWQgc3RhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHNldERpc2FibGVkID0gKHJlZjogSUN1c3RvbUVsZW1lbnQsIGRpc2FibGVkOiBib29sZWFuKTogdm9pZCA9PiB7XG4gIHJlZi50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy1kaXNhYmxlZCcsIGRpc2FibGVkKTtcblxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICByZWYuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgfSBlbHNlIHtcbiAgICByZWYucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XG4gIH1cblxuICBpZiAocmVmLmZvcm1EaXNhYmxlZENhbGxiYWNrKSB7XG4gICAgcmVmLmZvcm1EaXNhYmxlZENhbGxiYWNrLmFwcGx5KHJlZiwgW2Rpc2FibGVkXSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgaGlkZGVuIGlucHV0cyBmb3IgdGhlIGdpdmVuIGVsZW1lbnQgaW50ZXJuYWxzIGluc3RhbmNlXG4gKiBAcGFyYW0ge0lFbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHMgLSBUaGUgZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2VcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVIaWRkZW5JbnB1dHMgPSAoaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscyk6IHZvaWQgPT4ge1xuICBjb25zdCBoaWRkZW5JbnB1dHMgPSBoaWRkZW5JbnB1dE1hcC5nZXQoaW50ZXJuYWxzKTtcbiAgaGlkZGVuSW5wdXRzLmZvckVhY2goKGhpZGRlbklucHV0KSA9PiB7XG4gICAgaGlkZGVuSW5wdXQucmVtb3ZlKCk7XG4gIH0pO1xuICBoaWRkZW5JbnB1dE1hcC5zZXQoaW50ZXJuYWxzLCBbXSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoaWRkZW4gaW5wdXQgZm9yIHRoZSBnaXZlbiByZWZcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSBlbGVtZW50IHRvIHdhdGNoXG4gKiBAcGFyYW0ge0lFbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHMgLSBUaGUgZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2UgZm9yIHRoZSByZWZcbiAqIEByZXR1cm4ge0hUTUxJbnB1dEVsZW1lbnR9IFRoZSBoaWRkZW4gaW5wdXRcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUhpZGRlbklucHV0ID0gKFxuICByZWY6IElDdXN0b21FbGVtZW50LFxuICBpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzXG4pOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9ICdoaWRkZW4nO1xuICBpbnB1dC5uYW1lID0gcmVmLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICByZWYuYWZ0ZXIoaW5wdXQpO1xuICBoaWRkZW5JbnB1dE1hcC5nZXQoaW50ZXJuYWxzKS5wdXNoKGlucHV0KTtcbiAgcmV0dXJuIGlucHV0O1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgcmVmIGJ5IHNldHRpbmcgdXAgYW4gYXR0cmlidXRlIG9ic2VydmUgb24gaXRcbiAqIGxvb2tpbmcgZm9yIGNoYW5nZXMgdG8gZGlzYWJsZWRcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSBlbGVtZW50IHRvIHdhdGNoXG4gKiBAcGFyYW0ge0lFbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHMgLSBUaGUgZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2UgZm9yIHRoZSByZWZcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBpbml0UmVmID0gKHJlZjogSUN1c3RvbUVsZW1lbnQsIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHMpOiB2b2lkID0+IHtcbiAgaGlkZGVuSW5wdXRNYXAuc2V0KGludGVybmFscywgW10pO1xuICBkaXNhYmxlZE9yTmFtZU9ic2VydmVyLm9ic2VydmU/LihyZWYsIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWcpO1xufTtcblxuLyoqXG4gKiBTZXQgdXAgbGFiZWxzIGZvciB0aGUgcmVmXG4gKiBAcGFyYW0ge0lDdXN0b21FbGVtZW50fSByZWYgLSBUaGUgcmVmIHRvIGFkZCBsYWJlbHMgdG9cbiAqIEBwYXJhbSB7TGFiZWxzTGlzdH0gbGFiZWxzIC0gQSBsaXN0IG9mIHRoZSBsYWJlbHNcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBpbml0TGFiZWxzID0gKHJlZjogSUN1c3RvbUVsZW1lbnQsIGxhYmVsczogTGFiZWxzTGlzdCk6IHZvaWQgPT4ge1xuICBpZiAobGFiZWxzLmxlbmd0aCkge1xuICAgIEFycmF5LmZyb20obGFiZWxzKS5mb3JFYWNoKChsYWJlbCkgPT4gbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWYuY2xpY2suYmluZChyZWYpKSk7XG4gICAgbGV0IGZpcnN0TGFiZWxJZCA9IGxhYmVsc1swXS5pZDtcbiAgICBpZiAoIWxhYmVsc1swXS5pZCkge1xuICAgICAgZmlyc3RMYWJlbElkID0gYCR7bGFiZWxzWzBdLmh0bWxGb3J9X0xhYmVsYDtcbiAgICAgIGxhYmVsc1swXS5pZCA9IGZpcnN0TGFiZWxJZDtcbiAgICB9XG4gICAgcmVmLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgZmlyc3RMYWJlbElkKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBpbnRlcm5hbHMtdmFsaWQgYW5kIGludGVybmFscy1pbnZhbGlkIGF0dHJpYnV0ZXNcbiAqIGJhc2VkIG9uIGZvcm0gdmFsaWRpdHkuXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gLSBUaGUgdGFyZ2V0IGZvcm1cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBzZXRGb3JtVmFsaWRpdHkgPSAoZm9ybTogSFRNTEZvcm1FbGVtZW50KSA9PiB7XG4gIGNvbnN0IG5hdGl2ZUNvbnRyb2xWYWxpZGl0eSA9IEFycmF5LmZyb20oZm9ybS5lbGVtZW50cylcbiAgICAuZmlsdGVyKFxuICAgICAgKGVsZW1lbnQ6IEVsZW1lbnQgJiB7IHZhbGlkaXR5OiBWYWxpZGl0eVN0YXRlIH0pID0+XG4gICAgICAgICFlbGVtZW50LnRhZ05hbWUuaW5jbHVkZXMoJy0nKSAmJiBlbGVtZW50LnZhbGlkaXR5XG4gICAgKVxuICAgIC5tYXAoKGVsZW1lbnQ6IEVsZW1lbnQgJiB7IHZhbGlkaXR5OiBWYWxpZGl0eVN0YXRlIH0pID0+IGVsZW1lbnQudmFsaWRpdHkudmFsaWQpO1xuICBjb25zdCBwb2x5ZmlsbGVkRWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGZvcm0pIHx8IFtdO1xuICBjb25zdCBwb2x5ZmlsbGVkVmFsaWRpdHkgPSBBcnJheS5mcm9tKHBvbHlmaWxsZWRFbGVtZW50cylcbiAgICAuZmlsdGVyKChjb250cm9sKSA9PiBjb250cm9sLmlzQ29ubmVjdGVkKVxuICAgIC5tYXAoKGNvbnRyb2w6IElDdXN0b21FbGVtZW50KSA9PiBpbnRlcm5hbHNNYXAuZ2V0KGNvbnRyb2wpLnZhbGlkaXR5LnZhbGlkKTtcbiAgY29uc3QgaGFzSW52YWxpZCA9IFsuLi5uYXRpdmVDb250cm9sVmFsaWRpdHksIC4uLnBvbHlmaWxsZWRWYWxpZGl0eV0uaW5jbHVkZXMoZmFsc2UpO1xuICBmb3JtLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLWludmFsaWQnLCBoYXNJbnZhbGlkKTtcbiAgZm9ybS50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy12YWxpZCcsICFoYXNJbnZhbGlkKTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIGlucHV0IGNhbGxiYWNrLiBVcGRhdGVzIHRoZSBmb3JtJ3MgdmFsaWRpdHlcbiAqIGF0dHJpYnV0ZXMgb24gaW5wdXQuXG4gKiBAcGFyYW0ge0V2ZW50fSAtIFRoZSBmb3JtIGlucHV0IGV2ZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZm9ybUlucHV0Q2FsbGJhY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIHNldEZvcm1WYWxpZGl0eShmaW5kUGFyZW50Rm9ybShldmVudC50YXJnZXQpKTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIGNoYW5nZSBjYWxsYmFjay4gVXBkYXRlcyB0aGUgZm9ybSdzIHZhbGlkaXR5XG4gKiBhdHRyaWJ1dGVzIG9uIGNoYW5nZS5cbiAqIEBwYXJhbSB7RXZlbnR9IC0gVGhlIGZvcm0gY2hhbmdlIGV2ZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZm9ybUNoYW5nZUNhbGxiYWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICBzZXRGb3JtVmFsaWRpdHkoZmluZFBhcmVudEZvcm0oZXZlbnQudGFyZ2V0KSk7XG59O1xuXG4vKipcbiAqIFRoZSBnbG9iYWwgZm9ybSBzdWJtaXQgY2FsbGJhY2suIFdlIG5lZWQgdG8gY2FuY2VsIGFueSBzdWJtaXNzaW9uXG4gKiBpZiBhIG5lc3RlZCBpbnRlcm5hbHMgaXMgaW52YWxpZC5cbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSAtIFRoZSBmb3JtIGVsZW1lbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCB3aXJlU3VibWl0TG9naWMgPSAoZm9ybTogSFRNTEZvcm1FbGVtZW50KSA9PiB7XG4gIGNvbnN0IFNVQk1JVF9CVVRUT05fU0VMRUNUT1IgPVxuICAgICc6aXMoYnV0dG9uW3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBidXR0b246bm90KFt0eXBlXSkpOm5vdChbZGlzYWJsZWRdKSc7XG4gIGxldCBzdWJtaXRCdXR0b25TZWxlY3RvciA9IGAke1NVQk1JVF9CVVRUT05fU0VMRUNUT1J9Om5vdChbZm9ybV0pYDtcblxuICBpZiAoZm9ybS5pZCkge1xuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yICs9IGAsJHtTVUJNSVRfQlVUVE9OX1NFTEVDVE9SfVtmb3JtPScke2Zvcm0uaWR9J11gO1xuICB9XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBFbGVtZW50O1xuICAgIGlmICh0YXJnZXQuY2xvc2VzdChzdWJtaXRCdXR0b25TZWxlY3RvcikpIHtcbiAgICAgIC8vIHZhbGlkYXRlXG4gICAgICBjb25zdCBlbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhpcyBmb3JtIGRvZXMgbm90IHZhbGlkYXRlIHRoZW4gd2UncmUgZG9uZVxuICAgICAgICovXG4gICAgICBpZiAoZm9ybS5ub1ZhbGlkYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLyoqIElmIHRoZSBTZXQgaGFzIGl0ZW1zLCBjb250aW51ZSAqL1xuICAgICAgaWYgKGVsZW1lbnRzLnNpemUpIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKTtcbiAgICAgICAgLyoqIENoZWNrIHRoZSBpbnRlcm5hbHMuY2hlY2tWYWxpZGl0eSgpIG9mIGFsbCBub2RlcyAqL1xuICAgICAgICBjb25zdCB2YWxpZGl0eUxpc3QgPSBub2Rlcy5yZXZlcnNlKCkubWFwKChub2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChub2RlKTtcbiAgICAgICAgICByZXR1cm4gaW50ZXJuYWxzLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKiBJZiBhbnkgbm9kZSBpcyBmYWxzZSwgc3RvcCB0aGUgZXZlbnQgKi9cbiAgICAgICAgaWYgKHZhbGlkaXR5TGlzdC5pbmNsdWRlcyhmYWxzZSkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIHJlc2V0IGNhbGxiYWNrLiBUaGlzIHdpbGwgbG9vcCBvdmVyIGFkZGVkXG4gKiBpbnB1dHMgYW5kIGNhbGwgZm9ybVJlc2V0Q2FsbGJhY2sgaWYgYXBwbGljYWJsZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1SZXNldENhbGxiYWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAvKiogR2V0IHRoZSBTZXQgb2YgZWxlbWVudHMgYXR0YWNoZWQgdG8gdGhpcyBmb3JtICovXG4gIGNvbnN0IGVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50KTtcblxuICAvKiogU29tZSBmb3JtcyB3b24ndCBjb250YWluIGZvcm0gYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudHMgKi9cbiAgaWYgKGVsZW1lbnRzICYmIGVsZW1lbnRzLnNpemUpIHtcbiAgICAvKiogTG9vcCBvdmVyIHRoZSBlbGVtZW50cyBhbmQgY2FsbCBmb3JtUmVzZXRDYWxsYmFjayBpZiBhcHBsaWNhYmxlICovXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKChlbGVtZW50LmNvbnN0cnVjdG9yIGFzIGFueSkuZm9ybUFzc29jaWF0ZWQgJiYgZWxlbWVudC5mb3JtUmVzZXRDYWxsYmFjaykge1xuICAgICAgICBlbGVtZW50LmZvcm1SZXNldENhbGxiYWNrLmFwcGx5KGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGZvcm0uIFdlIHdpbGwgbmVlZCB0byBhZGQgc3VibWl0IGFuZCByZXNldCBsaXN0ZW5lcnNcbiAqIGlmIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdC4gSWYgdGhleSBkbywganVzdCBhZGQgdGhlIG5ldyByZWYgdG8gdGhlIGZvcm0uXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWYgLSBUaGUgZWxlbWVudCByZWYgdGhhdCBpbmNsdWRlcyBpbnRlcm5hbHNcbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtIC0gVGhlIGZvcm0gdGhlIHJlZiBiZWxvbmdzIHRvXG4gKiBAcGFyYW0ge0VsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBpbnRlcm5hbHMgZm9yIHJlZlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRGb3JtID0gKFxuICByZWY6IElDdXN0b21FbGVtZW50LFxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnQsXG4gIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHNcbikgPT4ge1xuICBpZiAoZm9ybSkge1xuICAgIC8qKiBUaGlzIHdpbGwgYmUgYSBXZWFrTWFwPEhUTUxGb3JtRWxlbWVudCwgU2V0PEhUTUxFbGVtZW50PiAqL1xuICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSk7XG5cbiAgICBpZiAoZm9ybUVsZW1lbnRzKSB7XG4gICAgICAvKiogSWYgZm9ybUVsZW1lbnRzIGV4aXN0cywgYWRkIHRvIGl0ICovXG4gICAgICBmb3JtRWxlbWVudHMuYWRkKHJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKiBJZiBmb3JtRWxlbWVudHMgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0IGFuZCBhZGQgdG8gaXQgKi9cbiAgICAgIGNvbnN0IGluaXRTZXQgPSBuZXcgU2V0PElDdXN0b21FbGVtZW50PigpO1xuICAgICAgaW5pdFNldC5hZGQocmVmKTtcbiAgICAgIGZvcm1FbGVtZW50c01hcC5zZXQoZm9ybSwgaW5pdFNldCk7XG5cbiAgICAgIC8qKiBBZGQgbGlzdGVuZXJzIHRvIGVtdWxhdGUgdmFsaWRhdGlvbiBhbmQgcmVzZXQgYmVoYXZpb3IgKi9cbiAgICAgIHdpcmVTdWJtaXRMb2dpYyhmb3JtKTtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCBmb3JtUmVzZXRDYWxsYmFjayk7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZm9ybUlucHV0Q2FsbGJhY2spO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmb3JtQ2hhbmdlQ2FsbGJhY2spO1xuICAgIH1cblxuICAgIGZvcm1zTWFwLnNldChmb3JtLCB7IHJlZiwgaW50ZXJuYWxzIH0pO1xuXG4gICAgLyoqIENhbGwgZm9ybUFzc29jaWF0ZWRDYWxsYmFjayBpZiBhcHBsaWNhYmxlICovXG4gICAgaWYgKHJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSAmJiByZWYuZm9ybUFzc29jaWF0ZWRDYWxsYmFjaykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlZi5mb3JtQXNzb2NpYXRlZENhbGxiYWNrLmFwcGx5KHJlZiwgW2Zvcm1dKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgICBzZXRGb3JtVmFsaWRpdHkoZm9ybSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgbG9vayBmb3IgYW4gZWxlbWVudCdzIHBhcmVudCBmb3JtXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBsb29rIGZvciBhIHBhcmVudCBmb3JtXG4gKiBAcmV0dXJuIHtIVE1MRm9ybUVsZW1lbnR8bnVsbH0gLSBUaGUgcGFyZW50IGZvcm0sIGlmIG9uZSBleGlzdHNcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbmRQYXJlbnRGb3JtID0gKGVsZW0pID0+IHtcbiAgbGV0IHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgaWYgKHBhcmVudCAmJiBwYXJlbnQudGFnTmFtZSAhPT0gJ0ZPUk0nKSB7XG4gICAgcGFyZW50ID0gZmluZFBhcmVudEZvcm0ocGFyZW50KTtcbiAgfVxuICByZXR1cm4gcGFyZW50O1xufTtcblxuLyoqXG4gKiBUaHJvdyBhbiBlcnJvciBpZiB0aGUgZWxlbWVudCByZWYgaXMgbm90IGZvcm0gYXNzb2NpYXRlZFxuICogQHBhcmFtIHJlZiB7SUN1c3RvbUVsZW1lbnR9IC0gVGhlIGVsZW1lbnQgdG8gY2hlY2sgaWYgaXQgaXMgZm9ybSBhc3NvY2lhdGVkXG4gKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSAtIFRoZSBlcnJvciBtZXNzYWdlIHRvIHRocm93XG4gKiBAcGFyYW0gRXJyb3JUeXBlIHthbnl9IC0gVGhlIGVycm9yIHR5cGUgdG8gdGhyb3csIGRlZmF1bHRzIHRvIERPTUV4Y2VwdGlvblxuICovXG5leHBvcnQgY29uc3QgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkID0gKFxuICByZWY6IElDdXN0b21FbGVtZW50LFxuICBtZXNzYWdlOiBzdHJpbmcsXG4gIEVycm9yVHlwZTogYW55ID0gRE9NRXhjZXB0aW9uXG4pOiB2b2lkID0+IHtcbiAgaWYgKCFyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3JUeXBlKG1lc3NhZ2UpO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCBmb3IgZWFjaCBIVE1MRm9ybUVsZW1lbnQuY2hlY2tWYWxpZGl0eXxyZXBvcnRWYWxpZGl0eVxuICogd2lsbCBsb29wIG92ZXIgYSBmb3JtJ3MgYWRkZWQgY29tcG9uZW50cyBhbmQgY2FsbCB0aGUgcmVzcGVjdGl2ZVxuICogbWV0aG9kIG1vZGlmeWluZyB0aGUgZGVmYXVsdCByZXR1cm4gdmFsdWUgaWYgbmVlZGVkXG4gKiBAcGFyYW0gZm9ybSB7SFRNTEZvcm1FbGVtZW50fSAtIFRoZSBmb3JtIGVsZW1lbnQgdG8gcnVuIHRoZSBtZXRob2Qgb25cbiAqIEBwYXJhbSByZXR1cm5WYWx1ZSB7Ym9vbGVhbn0gLSBUaGUgaW5pdGlhbCByZXN1bHQgb2YgdGhlIG9yaWdpbmFsIG1ldGhvZFxuICogQHBhcmFtIG1ldGhvZCB7J2NoZWNrVmFsaWRpdHknfCdyZXBvcnRWYWxpZGl0eSd9IC0gVGhlIG9yaWdpbmFsIG1ldGhvZFxuICogQHJldHVybnMge2Jvb2xlYW59IFRoZSBmb3JtJ3MgdmFsaWRpdHkgc3RhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG92ZXJyaWRlRm9ybU1ldGhvZCA9IChcbiAgZm9ybTogSFRNTEZvcm1FbGVtZW50LFxuICByZXR1cm5WYWx1ZTogYm9vbGVhbixcbiAgbWV0aG9kOiAnY2hlY2tWYWxpZGl0eScgfCAncmVwb3J0VmFsaWRpdHknXG4pOiBib29sZWFuID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGZvcm0pO1xuXG4gIC8qKiBTb21lIGZvcm1zIHdvbid0IGNvbnRhaW4gZm9ybSBhc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50cyAqL1xuICBpZiAoZWxlbWVudHMgJiYgZWxlbWVudHMuc2l6ZSkge1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQoZWxlbWVudCk7XG4gICAgICBjb25zdCB2YWxpZCA9IGludGVybmFsc1ttZXRob2RdKCk7XG4gICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIHJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufTtcblxuLyoqXG4gKiBXaWxsIHVwZ3JhZGUgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSBieSBpbml0aWFsaXppbmcgdGhlXG4gKiBpbnN0YW5jZSdzIGZvcm0gYW5kIGxhYmVscy4gVGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpc1xuICogZWl0aGVyIGNvbnN0cnVjdGVkIG9yIGFwcGVuZGVkIGZyb20gYSBEb2N1bWVudEZyYWdtZW50XG4gKiBAcGFyYW0gcmVmIHtJQ3VzdG9tRWxlbWVudH0gLSBUaGUgY3VzdG9tIGVsZW1lbnQgdG8gdXBncmFkZVxuICovXG5leHBvcnQgY29uc3QgdXBncmFkZUludGVybmFscyA9IChyZWY6IElDdXN0b21FbGVtZW50KSA9PiB7XG4gIGlmIChyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KHJlZik7XG4gICAgY29uc3QgeyBsYWJlbHMsIGZvcm0gfSA9IGludGVybmFscztcbiAgICBpbml0TGFiZWxzKHJlZiwgbGFiZWxzKTtcbiAgICBpbml0Rm9ybShyZWYsIGZvcm0sIGludGVybmFscyk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgdG8gc2VlIGlmIE11dGF0aW9uT2JzZXJ2ZXIgZXhpc3RzIGluIHRoZSBjdXJyZW50XG4gKiBleGVjdXRpb24gY29udGV4dC4gV2lsbCBsaWtlbHkgcmV0dXJuIGZhbHNlIG9uIHRoZSBzZXJ2ZXJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbXV0YXRpb25PYnNlcnZlckV4aXN0cygpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbn1cbiIsICJpbXBvcnQgeyBzZXRGb3JtVmFsaWRpdHkgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqIEVtdWxhdGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IFZhbGlkaXR5U3RhdGUgb2JqZWN0ICovXG5leHBvcnQgY2xhc3MgVmFsaWRpdHlTdGF0ZSBpbXBsZW1lbnRzIGdsb2JhbFRoaXMuVmFsaWRpdHlTdGF0ZSB7XG4gIGJhZElucHV0ID0gZmFsc2U7XG4gIGN1c3RvbUVycm9yID0gZmFsc2U7XG4gIHBhdHRlcm5NaXNtYXRjaCA9IGZhbHNlO1xuICByYW5nZU92ZXJmbG93ID0gZmFsc2U7XG4gIHJhbmdlVW5kZXJmbG93ID0gZmFsc2U7XG4gIHN0ZXBNaXNtYXRjaCA9IGZhbHNlO1xuICB0b29Mb25nID0gZmFsc2U7XG4gIHRvb1Nob3J0ID0gZmFsc2U7XG4gIHR5cGVNaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZCA9IHRydWU7XG4gIHZhbHVlTWlzc2luZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIE9iamVjdC5zZWFsKHRoaXMpO1xuICB9XG59XG5cbi8qKlxuICogUmVzZXQgYSBWYWxpZGl0eVN0YXRlIG9iamVjdCBiYWNrIHRvIHZhbGlkXG4gKiBAcGFyYW0ge1ZhbGlkaXR5U3RhdGV9IHZhbGlkaXR5T2JqZWN0IC0gVGhlIG9iamVjdCB0byBtb2RpZnlcbiAqIEByZXR1cm4ge1ZhbGlkaXR5U3RhdGV9IC0gVGhlIG1vZGlmaWVkIFZhbGlkaXR5U3RhdGVPYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IHNldFZhbGlkID0gKHZhbGlkaXR5T2JqZWN0OiBWYWxpZGl0eVN0YXRlKTogVmFsaWRpdHlTdGF0ZSA9PiB7XG4gIHZhbGlkaXR5T2JqZWN0LmJhZElucHV0ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LmN1c3RvbUVycm9yID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnBhdHRlcm5NaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC5yYW5nZU92ZXJmbG93ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnJhbmdlVW5kZXJmbG93ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnN0ZXBNaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC50b29Mb25nID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnRvb1Nob3J0ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnR5cGVNaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC52YWxpZCA9IHRydWU7XG4gIHZhbGlkaXR5T2JqZWN0LnZhbHVlTWlzc2luZyA9IGZhbHNlO1xuICByZXR1cm4gdmFsaWRpdHlPYmplY3Q7XG59O1xuXG4vKipcbiAqIFJlY29uY2lsZSBhIFZhbGlkaXR5U3RhdGUgb2JqZWN0IHdpdGggYSBuZXcgc3RhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge1ZhbGlkaXR5U3RhdGV9IC0gVGhlIGJhc2Ugb2JqZWN0IHRvIHJlY29uY2lsZSB3aXRoIG5ldyBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IC0gQSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0IHRvIG92ZXJyaWRlIHRoZSBvcmlnaW5hbFxuICogQHJldHVybiB7VmFsaWRpdHlTdGF0ZX0gLSBUaGUgdXBkYXRlZCBWYWxpZGl0eVN0YXRlIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgcmVjb25jaWxlVmFsaWRpdHkgPSAoXG4gIHZhbGlkaXR5T2JqZWN0OiBWYWxpZGl0eVN0YXRlLFxuICBuZXdTdGF0ZTogUGFydGlhbDxWYWxpZGl0eVN0YXRlPixcbiAgZm9ybTogSFRNTEZvcm1FbGVtZW50XG4pOiBWYWxpZGl0eVN0YXRlID0+IHtcbiAgdmFsaWRpdHlPYmplY3QudmFsaWQgPSBpc1ZhbGlkKG5ld1N0YXRlKTtcbiAgT2JqZWN0LmtleXMobmV3U3RhdGUpLmZvckVhY2goKGtleSkgPT4gKHZhbGlkaXR5T2JqZWN0W2tleV0gPSBuZXdTdGF0ZVtrZXldKSk7XG4gIGlmIChmb3JtKSB7XG4gICAgc2V0Rm9ybVZhbGlkaXR5KGZvcm0pO1xuICB9XG4gIHJldHVybiB2YWxpZGl0eU9iamVjdDtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0IHNob3VsZCBiZSB2YWxpZFxuICogQHBhcmFtIHtPYmplY3R9IC0gQSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSAtIFNob3VsZCB0aGUgbmV3IG9iamVjdCBiZSB2YWxpZFxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZCA9ICh2YWxpZGl0eVN0YXRlOiBQYXJ0aWFsPFZhbGlkaXR5U3RhdGU+KTogYm9vbGVhbiA9PiB7XG4gIGxldCB2YWxpZCA9IHRydWU7XG4gIGZvciAobGV0IGtleSBpbiB2YWxpZGl0eVN0YXRlKSB7XG4gICAgaWYgKGtleSAhPT0gJ3ZhbGlkJyAmJiB2YWxpZGl0eVN0YXRlW2tleV0gIT09IGZhbHNlKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsaWQ7XG59O1xuIiwgImltcG9ydCB7IElDdXN0b21FbGVtZW50IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbi8qKiBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSByZWYgZm9yIHRlaCBDdXN0b21TdGF0ZVNldCAqL1xuY29uc3QgY3VzdG9tU3RhdGVNYXAgPSBuZXcgV2Vha01hcDxDdXN0b21TdGF0ZVNldCwgSUN1c3RvbUVsZW1lbnQ+KCk7XG5cbmZ1bmN0aW9uIGFkZFN0YXRlKHJlZjogSUN1c3RvbUVsZW1lbnQsIHN0YXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gIHJlZi50b2dnbGVBdHRyaWJ1dGUoc3RhdGVOYW1lLCB0cnVlKTtcbiAgaWYgKHJlZi5wYXJ0KSB7XG4gICAgcmVmLnBhcnQuYWRkKHN0YXRlTmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ3VzdG9tU3RhdGUgPSBgLS0ke3N0cmluZ31gO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tU3RhdGVTZXQgZXh0ZW5kcyBTZXQ8Q3VzdG9tU3RhdGU+IHtcbiAgc3RhdGljIGdldCBpc1BvbHlmaWxsZWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyZWY6IElDdXN0b21FbGVtZW50KSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoIXJlZiB8fCAhcmVmLnRhZ05hbWUgfHwgcmVmLnRhZ05hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSWxsZWdhbCBjb25zdHJ1Y3RvcicpO1xuICAgIH1cblxuICAgIGN1c3RvbVN0YXRlTWFwLnNldCh0aGlzLCByZWYpO1xuICB9XG5cbiAgYWRkKHN0YXRlOiBDdXN0b21TdGF0ZSkge1xuICAgIGlmICghL14tLS8udGVzdChzdGF0ZSkgfHwgdHlwZW9mIHN0YXRlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdhZGQnIG9uICdDdXN0b21TdGF0ZVNldCc6IFRoZSBzcGVjaWZpZWQgdmFsdWUgJHtzdGF0ZX0gbXVzdCBzdGFydCB3aXRoICctLScuYFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuYWRkKHN0YXRlKTtcbiAgICBjb25zdCByZWYgPSBjdXN0b21TdGF0ZU1hcC5nZXQodGhpcyk7XG4gICAgY29uc3Qgc3RhdGVOYW1lID0gYHN0YXRlJHtzdGF0ZX1gO1xuXG4gICAgLyoqXG4gICAgICogT25seSBhZGQgdGhlIHN0YXRlIGltbWVkaWF0ZWx5IGlmIHRoZSByZWYgaXMgY29ubmVjdGVkIHRvIHRoZSBET007XG4gICAgICogb3RoZXJ3aXNlLCB3YWl0IGEgdGljayBiZWNhdXNlIHRoZSBlbGVtZW50IGlzIGxpa2VseSBiZWluZyBjb25zdHJ1Y3RlZFxuICAgICAqIGJ5IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgYW5kIHdvdWxkIHRocm93IG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBpZiAocmVmLmlzQ29ubmVjdGVkKSB7XG4gICAgICBhZGRTdGF0ZShyZWYsIHN0YXRlTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhZGRTdGF0ZShyZWYsIHN0YXRlTmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgZm9yIChsZXQgW2VudHJ5XSBvZiB0aGlzLmVudHJpZXMoKSkge1xuICAgICAgdGhpcy5kZWxldGUoZW50cnkpO1xuICAgIH1cbiAgICBzdXBlci5jbGVhcigpO1xuICB9XG5cbiAgZGVsZXRlKHN0YXRlOiBDdXN0b21TdGF0ZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLmRlbGV0ZShzdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gY3VzdG9tU3RhdGVNYXAuZ2V0KHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogT25seSB0b2dnbGUgdGhlIHN0YXRlL2F0dHIgaW1tZWRpYXRlbHkgaWYgdGhlIHJlZiBpcyBjb25uZWN0ZWQgdG8gdGhlIERPTTtcbiAgICAgKiBvdGhlcndpc2UsIHdhaXQgYSB0aWNrIGJlY2F1c2UgdGhlIGVsZW1lbnQgaXMgbGlrZWx5IGJlaW5nIGNvbnN0cnVjdGVkXG4gICAgICogYnkgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBhbmQgd291bGQgdGhyb3cgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoYHN0YXRlJHtzdGF0ZX1gLCBmYWxzZSk7XG4gICAgICBpZiAocmVmLnBhcnQpIHtcbiAgICAgICAgcmVmLnBhcnQucmVtb3ZlKGBzdGF0ZSR7c3RhdGV9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZWYudG9nZ2xlQXR0cmlidXRlKGBzdGF0ZSR7c3RhdGV9YCwgZmFsc2UpO1xuICAgICAgICBpZiAocmVmLnBhcnQpIHtcbiAgICAgICAgICByZWYucGFydC5yZW1vdmUoYHN0YXRlJHtzdGF0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwgImV4cG9ydCBjbGFzcyBIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbiBpbXBsZW1lbnRzIGdsb2JhbFRoaXMuSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24ge1xuICByZWFkb25seSAjZWxlbWVudHM7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICB0aGlzLiNlbGVtZW50cyA9IGVsZW1lbnRzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcblxuICAgICAgdGhpc1tpXSA9IGVsZW1lbnQ7XG4gICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICB0aGlzW2VsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJyldID0gZWxlbWVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgW2luZGV4OiBudW1iZXJdOiBFbGVtZW50O1xuXG4gIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy4jZWxlbWVudHMubGVuZ3RoO1xuICB9XG5cbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2VsZW1lbnRzW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgfVxuXG4gIGl0ZW0oaSk6IEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzW2ldID09IG51bGwgPyBudWxsIDogdGhpc1tpXTtcbiAgfVxuXG4gIG5hbWVkSXRlbShuYW1lKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXNbbmFtZV0gPT0gbnVsbCA/IG51bGwgOiB0aGlzW25hbWVdO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24gfSBmcm9tICcuL0hUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uLmpzJztcbmltcG9ydCB7IGZvcm1FbGVtZW50c01hcCB9IGZyb20gJy4vbWFwcy5qcyc7XG5pbXBvcnQgeyBvdmVycmlkZUZvcm1NZXRob2QgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBQYXRjaCB0aGUgSFRNTEVsZW1lbnQgcHJvdG90eXBlXG4gKlxuICogVGhpcyBmdW5jdGlvbiBwYXRjaGVzIGNoZWNrVmFsaWRpdHksIHJlcG9ydFZhbGlkaXR5IGFuZCBlbGVtZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hGb3JtUHJvdG90eXBlKCk6IHZvaWQge1xuICBjb25zdCBjaGVja1ZhbGlkaXR5ID0gSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5jaGVja1ZhbGlkaXR5O1xuICBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmNoZWNrVmFsaWRpdHkgPSBjaGVja1ZhbGlkaXR5T3ZlcnJpZGU7XG5cbiAgY29uc3QgcmVwb3J0VmFsaWRpdHkgPSBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLnJlcG9ydFZhbGlkaXR5O1xuICBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLnJlcG9ydFZhbGlkaXR5ID0gcmVwb3J0VmFsaWRpdHlPdmVycmlkZTtcblxuICBmdW5jdGlvbiBjaGVja1ZhbGlkaXR5T3ZlcnJpZGUoLi4uYXJncyk6IGJvb2xlYW4ge1xuICAgIGxldCByZXR1cm5WYWx1ZSA9IGNoZWNrVmFsaWRpdHkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgcmV0dXJuIG92ZXJyaWRlRm9ybU1ldGhvZCh0aGlzLCByZXR1cm5WYWx1ZSwgJ2NoZWNrVmFsaWRpdHknKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcG9ydFZhbGlkaXR5T3ZlcnJpZGUoLi4uYXJncyk6IGJvb2xlYW4ge1xuICAgIGxldCByZXR1cm5WYWx1ZSA9IHJlcG9ydFZhbGlkaXR5LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHJldHVybiBvdmVycmlkZUZvcm1NZXRob2QodGhpcywgcmV0dXJuVmFsdWUsICdyZXBvcnRWYWxpZGl0eScpO1xuICB9XG5cbiAgY29uc3QgeyBnZXQgfSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZSwgJ2VsZW1lbnRzJyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLCAnZWxlbWVudHMnLCB7XG4gICAgZ2V0KC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZ2V0LmNhbGwodGhpcywgLi4uYXJncyk7XG4gICAgICBjb25zdCBwb2x5ZmlsbGVkRWxlbWVudHMgPSBBcnJheS5mcm9tKGZvcm1FbGVtZW50c01hcC5nZXQodGhpcykgfHwgW10pO1xuXG4gICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gcG9seWZpbGxlZCBlbGVtZW50cywgcmV0dXJuIHRoZSBuYXRpdmUgZWxlbWVudHMgY29sbGVjdGlvblxuICAgICAgaWYgKHBvbHlmaWxsZWRFbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgICAgfVxuXG4gICAgICAvLyBNZXJnZSB0aGUgbmF0aXZlIGVsZW1lbnRzIHdpdGggdGhlIHBvbHlmaWxsZWQgZWxlbWVudHNcbiAgICAgIC8vIGFuZCBvcmRlciB0aGVtIGJ5IHRoZWlyIHBvc2l0aW9uIGluIHRoZSBET01cbiAgICAgIGNvbnN0IG9yZGVyZWRFbGVtZW50cyA9IEFycmF5LmZyb20oZWxlbWVudHMpXG4gICAgICAgIC5jb25jYXQocG9seWZpbGxlZEVsZW1lbnRzKVxuICAgICAgICAuc29ydCgoYTogRWxlbWVudCwgYjogRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKSAmIDIgPyAxIDogLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ldyBIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbihvcmRlcmVkRWxlbWVudHMpO1xuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIGNvbm5lY3RlZENhbGxiYWNrTWFwLFxuICBpbnRlcm5hbHNNYXAsXG4gIHJlZk1hcCxcbiAgcmVmVmFsdWVNYXAsXG4gIHNoYWRvd0hvc3RzTWFwLFxuICBzaGFkb3dSb290TWFwLFxuICB2YWxpZGF0aW9uQW5jaG9yTWFwLFxuICB2YWxpZGl0eU1hcCxcbiAgdmFsaWRhdGlvbk1lc3NhZ2VNYXAsXG4gIHZhbGlkaXR5VXBncmFkZU1hcCxcbn0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7XG4gIGNyZWF0ZUhpZGRlbklucHV0LFxuICBmaW5kUGFyZW50Rm9ybSxcbiAgaW5pdFJlZixcbiAgbXV0YXRpb25PYnNlcnZlckV4aXN0cyxcbiAgcmVtb3ZlSGlkZGVuSW5wdXRzLFxuICBzZXREaXNhYmxlZCxcbiAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkLFxuICB1cGdyYWRlSW50ZXJuYWxzLFxufSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IGluaXRBb20gfSBmcm9tICcuL2FvbS5qcyc7XG5pbXBvcnQgeyBWYWxpZGl0eVN0YXRlLCByZWNvbmNpbGVWYWxpZGl0eSwgc2V0VmFsaWQgfSBmcm9tICcuL1ZhbGlkaXR5U3RhdGUuanMnO1xuaW1wb3J0IHsgZGVmZXJVcGdyYWRlLCBvYnNlcnZlckNhbGxiYWNrLCBvYnNlcnZlckNvbmZpZyB9IGZyb20gJy4vbXV0YXRpb24tb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IElFbGVtZW50SW50ZXJuYWxzLCBJQ3VzdG9tRWxlbWVudCwgTGFiZWxzTGlzdCB9IGZyb20gJy4vdHlwZXMuanMnO1xuaW1wb3J0IHsgQ3VzdG9tU3RhdGVTZXQgfSBmcm9tICcuL0N1c3RvbVN0YXRlU2V0LmpzJztcbmltcG9ydCB7IHBhdGNoRm9ybVByb3RvdHlwZSB9IGZyb20gJy4vcGF0Y2gtZm9ybS1wcm90b3R5cGUuanMnO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICdsaXQtaHRtbC9pcy1zZXJ2ZXIuanMnO1xuXG5leHBvcnQgY2xhc3MgRWxlbWVudEludGVybmFscyBpbXBsZW1lbnRzIElFbGVtZW50SW50ZXJuYWxzIHtcbiAgYXJpYUF0b21pYzogc3RyaW5nO1xuICBhcmlhQXV0b0NvbXBsZXRlOiBzdHJpbmc7XG4gIGFyaWFCdXN5OiBzdHJpbmc7XG4gIGFyaWFDaGVja2VkOiBzdHJpbmc7XG4gIGFyaWFDb2xDb3VudDogc3RyaW5nO1xuICBhcmlhQ29sSW5kZXg6IHN0cmluZztcbiAgYXJpYUNvbEluZGV4VGV4dDogc3RyaW5nO1xuICBhcmlhQ29sU3Bhbjogc3RyaW5nO1xuICBhcmlhQ3VycmVudDogc3RyaW5nO1xuICBhcmlhRGlzYWJsZWQ6IHN0cmluZztcbiAgYXJpYUV4cGFuZGVkOiBzdHJpbmc7XG4gIGFyaWFIYXNQb3B1cDogc3RyaW5nO1xuICBhcmlhSGlkZGVuOiBzdHJpbmc7XG4gIGFyaWFJbnZhbGlkOiBzdHJpbmc7XG4gIGFyaWFLZXlTaG9ydGN1dHM6IHN0cmluZztcbiAgYXJpYUxhYmVsOiBzdHJpbmc7XG4gIGFyaWFMZXZlbDogc3RyaW5nO1xuICBhcmlhTGl2ZTogc3RyaW5nO1xuICBhcmlhTW9kYWw6IHN0cmluZztcbiAgYXJpYU11bHRpTGluZTogc3RyaW5nO1xuICBhcmlhTXVsdGlTZWxlY3RhYmxlOiBzdHJpbmc7XG4gIGFyaWFPcmllbnRhdGlvbjogc3RyaW5nO1xuICBhcmlhUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgYXJpYVBvc0luU2V0OiBzdHJpbmc7XG4gIGFyaWFQcmVzc2VkOiBzdHJpbmc7XG4gIGFyaWFSZWFkT25seTogc3RyaW5nO1xuICBhcmlhUmVsZXZhbnQ6IHN0cmluZztcbiAgYXJpYVJlcXVpcmVkOiBzdHJpbmc7XG4gIGFyaWFSb2xlRGVzY3JpcHRpb246IHN0cmluZztcbiAgYXJpYVJvd0NvdW50OiBzdHJpbmc7XG4gIGFyaWFSb3dJbmRleDogc3RyaW5nO1xuICBhcmlhUm93SW5kZXhUZXh0OiBzdHJpbmc7XG4gIGFyaWFSb3dTcGFuOiBzdHJpbmc7XG4gIGFyaWFTZWxlY3RlZDogc3RyaW5nO1xuICBhcmlhU2V0U2l6ZTogc3RyaW5nO1xuICBhcmlhU29ydDogc3RyaW5nO1xuICBhcmlhVmFsdWVNYXg6IHN0cmluZztcbiAgYXJpYVZhbHVlTWluOiBzdHJpbmc7XG4gIGFyaWFWYWx1ZU5vdzogc3RyaW5nO1xuICBhcmlhVmFsdWVUZXh0OiBzdHJpbmc7XG4gIHJvbGU6IHN0cmluZztcblxuICBzdGF0ZXM6IEN1c3RvbVN0YXRlU2V0O1xuXG4gIHN0YXRpYyBnZXQgaXNQb2x5ZmlsbGVkKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocmVmOiBJQ3VzdG9tRWxlbWVudCkge1xuICAgIGlmICghcmVmIHx8ICFyZWYudGFnTmFtZSB8fCByZWYudGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbGxlZ2FsIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuICAgIGNvbnN0IHJvb3ROb2RlID0gcmVmLmdldFJvb3ROb2RlKCk7XG4gICAgY29uc3QgdmFsaWRpdHkgPSBuZXcgVmFsaWRpdHlTdGF0ZSgpO1xuICAgIHRoaXMuc3RhdGVzID0gbmV3IEN1c3RvbVN0YXRlU2V0KHJlZik7XG4gICAgcmVmTWFwLnNldCh0aGlzLCByZWYpO1xuICAgIHZhbGlkaXR5TWFwLnNldCh0aGlzLCB2YWxpZGl0eSk7XG4gICAgaW50ZXJuYWxzTWFwLnNldChyZWYsIHRoaXMpO1xuICAgIGluaXRBb20ocmVmLCB0aGlzKTtcbiAgICBpbml0UmVmKHJlZiwgdGhpcyk7XG4gICAgT2JqZWN0LnNlYWwodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBJZiBhcHBlbmRlZCBmcm9tIGEgRG9jdW1lbnRGcmFnbWVudCwgd2FpdCB1bnRpbCBpdCBpcyBjb25uZWN0ZWRcbiAgICAgKiBiZWZvcmUgYXR0ZW1wdGluZyB0byB1cGdyYWRlIHRoZSBpbnRlcm5hbHMgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBpZiAocm9vdE5vZGUgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICBkZWZlclVwZ3JhZGUocm9vdE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaWxsIHJldHVybiB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGluIGEgdmFsaWQgc3RhdGVcbiAgICovXG4gIGNoZWNrVmFsaWRpdHkoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ2NoZWNrVmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICAvKiogSWYgdGhlIGVsZW1lbnQgd2lsbCBub3QgdmFsaWRhdGUsIGl0IGlzIG5lY2Vzc2FyaWx5IHZhbGlkIGJ5IGRlZmF1bHQgKi9cbiAgICBpZiAoIXRoaXMud2lsbFZhbGlkYXRlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcC5nZXQodGhpcyk7XG4gICAgaWYgKCF2YWxpZGl0eS52YWxpZCkge1xuICAgICAgY29uc3QgdmFsaWRpdHlFdmVudCA9IG5ldyBFdmVudCgnaW52YWxpZCcsIHtcbiAgICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgIGNvbXBvc2VkOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgcmVmLmRpc3BhdGNoRXZlbnQodmFsaWRpdHlFdmVudCk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZGl0eS52YWxpZDtcbiAgfVxuXG4gIC8qKiBUaGUgZm9ybSBlbGVtZW50IHRoZSBjdXN0b20gZWxlbWVudCBpcyBhc3NvY2lhdGVkIHdpdGggKi9cbiAgZ2V0IGZvcm0oKTogSFRNTEZvcm1FbGVtZW50IHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ2Zvcm0nIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGxldCBmb3JtO1xuICAgIGlmIChyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10gPT09IHRydWUpIHtcbiAgICAgIGZvcm0gPSBmaW5kUGFyZW50Rm9ybShyZWYpO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIC8qKiBBIGxpc3Qgb2YgYWxsIHJlbGF0aXZlIGZvcm0gbGFiZWxzIGZvciB0aGlzIGVsZW1lbnQgKi9cbiAgZ2V0IGxhYmVscygpOiBMYWJlbHNMaXN0IHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ2xhYmVscycgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgY29uc3QgaWQgPSByZWYuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGNvbnN0IGhvc3RSb290ID0gcmVmLmdldFJvb3ROb2RlKCkgYXMgRWxlbWVudDtcbiAgICBpZiAoaG9zdFJvb3QgJiYgaWQpIHtcbiAgICAgIHJldHVybiBob3N0Um9vdC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxMYWJlbEVsZW1lbnQ+KGBbZm9yPVwiJHtpZH1cIl1gKSBhcyB1bmtub3duIGFzIExhYmVsc0xpc3Q7XG4gICAgfVxuICAgIHJldHVybiBbXSBhcyB1bmtub3duIGFzIExhYmVsc0xpc3Q7XG4gIH1cblxuICAvKiogV2lsbCByZXBvcnQgdGhlIGVsZW1lbnRzIHZhbGlkaXR5IHN0YXRlICovXG4gIHJlcG9ydFZhbGlkaXR5KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdyZXBvcnRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIC8qKiBJZiB0aGUgZWxlbWVudCB3aWxsIG5vdCB2YWxpZGF0ZSwgaXQgaXMgdmFsaWQgYnkgZGVmYXVsdCAqL1xuICAgIGlmICghdGhpcy53aWxsVmFsaWRhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB2YWxpZCA9IHRoaXMuY2hlY2tWYWxpZGl0eSgpO1xuICAgIGNvbnN0IGFuY2hvciA9IHZhbGlkYXRpb25BbmNob3JNYXAuZ2V0KHRoaXMpO1xuICAgIGlmIChhbmNob3IgJiYgIXJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdyZXBvcnRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghdmFsaWQgJiYgYW5jaG9yKSB7XG4gICAgICByZWYuZm9jdXMoKTtcbiAgICAgIGFuY2hvci5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgZWxlbWVudCdzIHZhbHVlIHdpdGhpbiB0aGUgZm9ybSAqL1xuICBzZXRGb3JtVmFsdWUodmFsdWU6IHN0cmluZyB8IEZvcm1EYXRhIHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdzZXRGb3JtVmFsdWUnIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICByZW1vdmVIaWRkZW5JbnB1dHModGhpcyk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1EYXRhKSkge1xuICAgICAgaWYgKHJlZi5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICBjb25zdCBoaWRkZW5JbnB1dCA9IGNyZWF0ZUhpZGRlbklucHV0KHJlZiwgdGhpcyk7XG4gICAgICAgIGhpZGRlbklucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgIEFycmF5LmZyb20odmFsdWUpXG4gICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgLmZvckVhY2goKFtmb3JtRGF0YUtleSwgZm9ybURhdGFWYWx1ZV0pID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGZvcm1EYXRhVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBoaWRkZW5JbnB1dCA9IGNyZWF0ZUhpZGRlbklucHV0KHJlZiwgdGhpcyk7XG4gICAgICAgICAgICBoaWRkZW5JbnB1dC5uYW1lID0gZm9ybURhdGFLZXk7XG4gICAgICAgICAgICBoaWRkZW5JbnB1dC52YWx1ZSA9IGZvcm1EYXRhVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVmVmFsdWVNYXAuc2V0KHJlZiwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGVsZW1lbnQncyB2YWxpZGl0eS4gVGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgcGFydGlhbCBWYWxpZGl0eVN0YXRlIG9iamVjdFxuICAgKiByZWZsZWN0aW5nIHRoZSBjaGFuZ2VzIHRvIGJlIG1hZGUgdG8gdGhlIGVsZW1lbnQncyB2YWxpZGl0eS4gSWYgdGhlIGVsZW1lbnQgaXMgaW52YWxpZCxcbiAgICogdGhlIHNlY29uZCBhcmd1bWVudCBzZXRzIHRoZSBlbGVtZW50J3MgdmFsaWRhdGlvbiBtZXNzYWdlLlxuICAgKlxuICAgKiBJZiB0aGUgZmllbGQgaXMgdmFsaWQgYW5kIGEgbWVzc2FnZSBpcyBzcGVjaWZpZWQsIHRoZSBtZXRob2Qgd2lsbCB0aHJvdyBhIFR5cGVFcnJvci5cbiAgICovXG4gIHNldFZhbGlkaXR5KFxuICAgIHZhbGlkaXR5Q2hhbmdlczogUGFydGlhbDxnbG9iYWxUaGlzLlZhbGlkaXR5U3RhdGU+LFxuICAgIHZhbGlkYXRpb25NZXNzYWdlPzogc3RyaW5nLFxuICAgIGFuY2hvcj86IEhUTUxFbGVtZW50XG4gICkge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdzZXRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGlmICghdmFsaWRpdHlDaGFuZ2VzKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBcIkZhaWxlZCB0byBleGVjdXRlICdzZXRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIHZhbGlkYXRpb25BbmNob3JNYXAuc2V0KHRoaXMsIGFuY2hvcik7XG4gICAgY29uc3QgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcC5nZXQodGhpcyk7XG4gICAgY29uc3QgdmFsaWRpdHlDaGFuZ2VzT2JqOiBQYXJ0aWFsPFZhbGlkaXR5U3RhdGU+ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsaWRpdHlDaGFuZ2VzKSB7XG4gICAgICB2YWxpZGl0eUNoYW5nZXNPYmpba2V5XSA9IHZhbGlkaXR5Q2hhbmdlc1trZXldO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LmtleXModmFsaWRpdHlDaGFuZ2VzT2JqKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldFZhbGlkKHZhbGlkaXR5KTtcbiAgICB9XG4gICAgY29uc3QgY2hlY2sgPSB7IC4uLnZhbGlkaXR5LCAuLi52YWxpZGl0eUNoYW5nZXNPYmogfTtcbiAgICBkZWxldGUgY2hlY2sudmFsaWQ7XG4gICAgY29uc3QgeyB2YWxpZCB9ID0gcmVjb25jaWxlVmFsaWRpdHkodmFsaWRpdHksIGNoZWNrLCB0aGlzLmZvcm0pO1xuXG4gICAgaWYgKCF2YWxpZCAmJiAhdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnc2V0VmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHNlY29uZCBhcmd1bWVudCBzaG91bGQgbm90IGJlIGVtcHR5IGlmIG9uZSBvciBtb3JlIGZsYWdzIGluIHRoZSBmaXJzdCBhcmd1bWVudCBhcmUgdHJ1ZS5gXG4gICAgICApO1xuICAgIH1cbiAgICB2YWxpZGF0aW9uTWVzc2FnZU1hcC5zZXQodGhpcywgdmFsaWQgPyAnJyA6IHZhbGlkYXRpb25NZXNzYWdlKTtcblxuICAgIC8vIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgaG9zdCBlbGVtZW50IGlzIGNvbm5lY3RlZCBiZWZvcmUgYWRkaW5nIGF0dHJpYnV0ZXNcbiAgICAvLyBiZWNhdXNlIHNhZmFyaSBkb2VzbnQgYWxsb3cgZWxlbWVudHMgdG8gaGF2ZSBhdHRyaWJ1dGVzIGFkZGVkIGluIHRoZSBjb25zdHJ1Y3RvclxuICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy1pbnZhbGlkJywgIXZhbGlkKTtcbiAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy12YWxpZCcsIHZhbGlkKTtcbiAgICAgIHJlZi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIGAkeyF2YWxpZH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRpdHlVcGdyYWRlTWFwLnNldChyZWYsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzaGFkb3dSb290KCk6IFNoYWRvd1Jvb3QgfCBudWxsIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBzaGFkb3dSb290TWFwLmdldChyZWYpO1xuICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICByZXR1cm4gc2hhZG93Um9vdDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiogVGhlIGVsZW1lbnQncyB2YWxpZGF0aW9uIG1lc3NhZ2Ugc2V0IGR1cmluZyBhIGNhbGwgdG8gRWxlbWVudEludGVybmFscy5zZXRWYWxpZGl0eSAqL1xuICBnZXQgdmFsaWRhdGlvbk1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ3ZhbGlkYXRpb25NZXNzYWdlJyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICByZXR1cm4gdmFsaWRhdGlvbk1lc3NhZ2VNYXAuZ2V0KHRoaXMpO1xuICB9XG5cbiAgLyoqIFRoZSBjdXJyZW50IHZhbGlkaXR5IHN0YXRlIG9mIHRoZSBvYmplY3QgKi9cbiAgZ2V0IHZhbGlkaXR5KCk6IGdsb2JhbFRoaXMuVmFsaWRpdHlTdGF0ZSB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIHJlYWQgdGhlICd2YWxpZGl0eScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgY29uc3QgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcC5nZXQodGhpcyk7XG4gICAgcmV0dXJuIHZhbGlkaXR5O1xuICB9XG5cbiAgLyoqIElmIHRydWUgdGhlIGVsZW1lbnQgd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhIGZvcm0ncyBjb25zdHJhaW50IHZhbGlkYXRpb24uICovXG4gIGdldCB3aWxsVmFsaWRhdGUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIHJlYWQgdGhlICd3aWxsVmFsaWRhdGUnIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGlmIChyZWYuZGlzYWJsZWQgfHwgcmVmLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fCByZWYuaGFzQXR0cmlidXRlKCdyZWFkb25seScpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8vIC0tLSBEaXNhYmxpbmcgdGhpcyB0eXBlIGRlY2xhcmF0aW9uIHRvIGF2b2lkIGNvbmZsaWN0IHdpdGggZXh0ZXJuYWwgZWxlbWVudC1pbnRlcm5hbHMtcG9seWZpbGwgdHlwZXMgLS0tXG4vLyBkZWNsYXJlIGdsb2JhbCB7XG4vLyAgIGludGVyZmFjZSBDdXN0b21FbGVtZW50Q29uc3RydWN0b3Ige1xuLy8gICAgIGZvcm1Bc3NvY2lhdGVkPzogYm9vbGVhbjtcbi8vICAgfVxuXG4vLyAgIGludGVyZmFjZSBXaW5kb3cge1xuLy8gICAgIEVsZW1lbnRJbnRlcm5hbHM6IHR5cGVvZiBFbGVtZW50SW50ZXJuYWxzO1xuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnRJbnRlcm5hbHNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gIGlmIChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICF3aW5kb3cuRWxlbWVudEludGVybmFscyB8fFxuICAgICFIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNsYXNzIEVsZW1lbnRJbnRlcm5hbHNGZWF0dXJlRGV0ZWN0aW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLmludGVybmFscyA9IHRoaXMuYXR0YWNoSW50ZXJuYWxzKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHJhbmRvbU5hbWUgPSBgZWxlbWVudC1pbnRlcm5hbHMtZmVhdHVyZS1kZXRlY3Rpb24tJHtNYXRoLnJhbmRvbSgpXG4gICAgLnRvU3RyaW5nKDM2KVxuICAgIC5yZXBsYWNlKC9bXmEtel0rL2csICcnKX1gO1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUocmFuZG9tTmFtZSwgRWxlbWVudEludGVybmFsc0ZlYXR1cmVEZXRlY3Rpb24pO1xuICBjb25zdCBmZWF0dXJlRGV0ZWN0aW9uRWxlbWVudCA9IG5ldyBFbGVtZW50SW50ZXJuYWxzRmVhdHVyZURldGVjdGlvbigpO1xuICByZXR1cm4gW1xuICAgICdzaGFkb3dSb290JyxcbiAgICAnZm9ybScsXG4gICAgJ3dpbGxWYWxpZGF0ZScsXG4gICAgJ3ZhbGlkaXR5JyxcbiAgICAndmFsaWRhdGlvbk1lc3NhZ2UnLFxuICAgICdsYWJlbHMnLFxuICAgICdzZXRGb3JtVmFsdWUnLFxuICAgICdzZXRWYWxpZGl0eScsXG4gICAgJ2NoZWNrVmFsaWRpdHknLFxuICAgICdyZXBvcnRWYWxpZGl0eScsXG4gIF0uZXZlcnkoKHByb3ApID0+IHByb3AgaW4gZmVhdHVyZURldGVjdGlvbkVsZW1lbnQuaW50ZXJuYWxzKTtcbn1cblxuLy8gT25seSBpbmNsdWRlcyB0aGlzIHBvbHlmaWxsIGlmIHdlIGFyZSBpbiBhIGplc3QgcnVubmVyIG9yIG5vdCBpbiBTU1JcbmlmIChcbiAgIWlzU2VydmVyIHx8XG4gICgocHJvY2VzcyBhcyBhbnkpPy5lbnYuSkVTVF9XT1JLRVJfSUQgIT09IHVuZGVmaW5lZCAmJiAocHJvY2VzcyBhcyBhbnkpPy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0Jylcbikge1xuICBpZiAoIWlzRWxlbWVudEludGVybmFsc1N1cHBvcnRlZCgpKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvKiogQHRzLWV4cGVjdC1lcnJvcjogd2UgbmVlZCB0byByZXBsYWNlIHRoZSBkZWZhdWx0IEVsZW1lbnRJbnRlcm5hbHMgKi9cbiAgICAgIHdpbmRvdy5FbGVtZW50SW50ZXJuYWxzID0gRWxlbWVudEludGVybmFscztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGRlZmluZSA9IEN1c3RvbUVsZW1lbnRSZWdpc3RyeS5wcm90b3R5cGUuZGVmaW5lO1xuICAgICAgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5kZWZpbmUgPSBmdW5jdGlvbiAobmFtZSwgY29uc3RydWN0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9yLmZvcm1Bc3NvY2lhdGVkKSB7XG4gICAgICAgICAgY29uc3QgY29ubmVjdGVkQ2FsbGJhY2sgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2s7XG4gICAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFjb25uZWN0ZWRDYWxsYmFja01hcC5oYXModGhpcykpIHtcbiAgICAgICAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2tNYXAuc2V0KHRoaXMsIHRydWUpO1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgIHNldERpc2FibGVkKHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25uZWN0ZWRDYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbm5lY3RlZENhbGxiYWNrLmFwcGx5KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWx3YXlzIHVwZ3JhZGVJbnRlcm5hbHMgaW4gY29ubmVjdGVkQ2FsbGJhY2sgaW5zdGVhZCBvZiBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgdXBncmFkZUludGVybmFscyh0aGlzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmaW5lLmNhbGwodGhpcywgbmFtZSwgY29uc3RydWN0b3IsIG9wdGlvbnMpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGEgY3VzdG9tIGVsZW1lbnQuIENhbGxpbmcgdGhpcyBtZXRob2RcbiAgICAgKiBvbiBhIGJ1aWx0LWluIGVsZW1lbnQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgICAgKi9cbiAgICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEludGVybmFscyA9IGZ1bmN0aW9uICgpOiBJRWxlbWVudEludGVybmFscyB7XG4gICAgICAgIGlmICghdGhpcy50YWdOYW1lKSB7XG4gICAgICAgICAgLyoqIFRoaXMgaGFwcGVucyBpbiB0aGUgTGl0U1NSIGVudmlyb25tZW50LiBIZXJlIHdlIGNhbiBnZW5lcmFsbHkgaWdub3JlIGludGVybmFscyBmb3Igbm93ICovXG4gICAgICAgICAgcmV0dXJuIHt9IGFzIG9iamVjdCBhcyBJRWxlbWVudEludGVybmFscztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhZ05hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnYXR0YWNoSW50ZXJuYWxzJyBvbiAnSFRNTEVsZW1lbnQnOiBVbmFibGUgdG8gYXR0YWNoIEVsZW1lbnRJbnRlcm5hbHMgdG8gbm9uLWN1c3RvbSBlbGVtZW50cy5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW50ZXJuYWxzTWFwLmhhcyh0aGlzKSkge1xuICAgICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgICAgICBgRE9NRXhjZXB0aW9uOiBGYWlsZWQgdG8gZXhlY3V0ZSAnYXR0YWNoSW50ZXJuYWxzJyBvbiAnSFRNTEVsZW1lbnQnOiBFbGVtZW50SW50ZXJuYWxzIGZvciB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgd2FzIGFscmVhZHkgYXR0YWNoZWQuYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50SW50ZXJuYWxzKHRoaXMpIGFzIElFbGVtZW50SW50ZXJuYWxzO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8taW5uZXItZGVjbGFyYXRpb25zXG4gICAgICBmdW5jdGlvbiBhdHRhY2hTaGFkb3dPYnNlcnZlciguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBhdHRhY2hTaGFkb3cuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIHNoYWRvd1Jvb3RNYXAuc2V0KHRoaXMsIHNoYWRvd1Jvb3QpO1xuXG4gICAgICAgIGlmIChtdXRhdGlvbk9ic2VydmVyRXhpc3RzKCkpIHtcbiAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spO1xuICAgICAgICAgIGlmICh3aW5kb3cuU2hhZHlET00pIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGhpcywgb2JzZXJ2ZXJDb25maWcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNoYWRvd1Jvb3QsIG9ic2VydmVyQ29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2hhZG93SG9zdHNNYXAuc2V0KHRoaXMsIG9ic2VydmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hhZG93Um9vdDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYXR0YWNoU2hhZG93ID0gRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93O1xuICAgICAgRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93ID0gYXR0YWNoU2hhZG93T2JzZXJ2ZXI7XG4gICAgfVxuXG4gICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKSkge1xuICAgICAgY29uc3QgZG9jdW1lbnRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spO1xuICAgICAgZG9jdW1lbnRPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgb2JzZXJ2ZXJDb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEtlZXBzIHRoZSBwb2x5ZmlsbCBmcm9tIHRocm93aW5nIGluIGVudmlyb25tZW50cyB3aGVyZSBIVE1MRm9ybUVsZW1lbnRcbiAgICAgKiBpcyB1bmRlZmluZWQgbGlrZSBpbiBhIHNlcnZlciBlbnZpcm9ubWVudFxuICAgICAqL1xuICAgIGlmICh0eXBlb2YgSFRNTEZvcm1FbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcGF0Y2hGb3JtUHJvdG90eXBlKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3cuQ3VzdG9tU3RhdGVTZXQpIHtcbiAgICAgIHdpbmRvdy5DdXN0b21TdGF0ZVNldCA9IEN1c3RvbVN0YXRlU2V0O1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93LkN1c3RvbVN0YXRlU2V0KSB7XG4gICAgd2luZG93LkN1c3RvbVN0YXRlU2V0ID0gQ3VzdG9tU3RhdGVTZXQ7XG4gICAgY29uc3QgYXR0YWNoSW50ZXJuYWxzID0gSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEludGVybmFscztcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IGludGVybmFscyA9IGF0dGFjaEludGVybmFscy5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgICAgaW50ZXJuYWxzLnN0YXRlcyA9IG5ldyBDdXN0b21TdGF0ZVNldCh0aGlzKTtcbiAgICAgIHJldHVybiBpbnRlcm5hbHM7XG4gICAgfTtcbiAgfVxufVxuIiwgImltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50IH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMYW5nSW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIGxhbmcgdXNlZCB0byBmb3JtYXQgY29udGVudCByZW5kZXJlZCBieSB0aGlzIGVsZW1lbnRcbiAgICogQGF0dHIgbGFuZ1xuICAgKi9cbiAgbGFuZzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTGFuZ01peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBMYW5nRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIEFkanVzdHMgdGhlIGxhbmcgdXNlZCB0byBmb3JtYXQgY29udGVudCByZW5kZXJlZCBieSB0aGlzIGVsZW1lbnRcbiAgICAgKiBAYXR0ciBsYW5nXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBsYW5nOiBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIExhbmdFbGVtZW50IGFzIENvbnN0cnVjdG9yPExhbmdJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciwgTXRlRWxlbWVudCB9IGZyb20gJy4uLyc7XG5cbi8qKlxuICogU3BlY2lhbCBjbGFzcyB0aGF0IGhlbHBzIGZyYW1ld29yayB3cmFwcGVyIHN0eWxpbmcga25vdyB3aGVuIGEgd3JhcHBlciBmcmFtZXdvcmtcbiAqIGhhcyBmaW5pc2hlZCByZW5kZXJpbmcgYW5kIHRodXMgZWxlbWVudHMgY2FuIG5vdyBiZSBzaG93biB3aXRob3V0IGEgRk9VQy4gVGhpc1xuICogb2NjdXJzIGluIHRoZSBzY2VuYXJpbyB3aGVyZSBMaXQgZWxlbWVudHMgcmVnaXN0ZXIgYW5kIHJlbmRlciBiZWZvcmUgdGhlXG4gKiB3cmFwcGVyIGZyYW1ld29yayBwYXNzZXMgZWxlbWVudHMgdGhlaXIgcHJvcHMuXG4gKi9cbmV4cG9ydCBjb25zdCBXYWl0Rm9yRnJhbWV3b3JrTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIFdhaXRGb3JGcmFtZXdvcmtFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqIEBpZ25vcmUgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6ICdtdGUtZnctcmVuZGVyZWQnLCByZWZsZWN0OiB0cnVlIH0pIF9md1JlbmRlcmVkO1xuICB9XG4gIHJldHVybiBXYWl0Rm9yRnJhbWV3b3JrRWxlbWVudCBhcyBUO1xufTtcbiIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7Ym94LXNpemluZzpib3JkZXItYm94fWA7IiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLXRodW1iLXNpemU6MTZweDstLXRodW1iLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtcmdiKSk7LS10cmFjay1oZWlnaHQ6NHB4Oy0tdHJhY2stY29sb3I6dmFyKC0tbXRlLWJvcmRlci0xKTstLXRyYWNrLWNvbG9yLWZpbGxlZDpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLXJnYikpOy0tdGh1bWItb3V0bGluZS1mb2N1czoycHggc29saWQgcmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktYmFzZS1yZ2IpKTstLXRodW1iLW91dGxpbmUtaG92ZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWRhcmstcmdiKSk7LS10aHVtYi1hY3RpdmUtY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFyay1yZ2IpKTstLXRodW1iLWhvdmVyLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWRhcmstcmdiKSk7LS1sYWJlbC16LWluZGV4OnZhcigtLW10ZS16LWluZGV4LTIwKTtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOm5vd3JhcDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlfTpob3N0KFt3aXRoRnVsbFdpZHRoXSl7d2lkdGg6MTAwJX06aG9zdChbd2l0aEZ1bGxXaWR0aF0pIC5yYW5nZXt3aWR0aDphdXRvfTpob3N0KFtoaWRlVmFsdWVMYWJlbF0pIC5yYW5nZXttYXJnaW4tYm90dG9tOjB9LnJhbmdlLXdyYXBwZXJ7ZGlzcGxheTpmbGV4fS5yYW5nZS13cmFwcGVyIC5wcmVmaXgsLnJhbmdlLXdyYXBwZXIgLnN1ZmZpeHthbGlnbi1pdGVtczpub3JtYWx9LnJhbmdlLXdyYXBwZXIgLnByZWZpeHtwYWRkaW5nLXJpZ2h0OnZhcigtLW10ZS1zcGFjZS1zbSl9LnJhbmdlLXdyYXBwZXIgLnN1ZmZpeHtwYWRkaW5nLWxlZnQ6dmFyKC0tbXRlLXNwYWNlLXNtKX0ucmFuZ2Utd3JhcHBlciAucHJlZml4Om5vdCguaGFzLXByZXBlbmQpe3BhZGRpbmctbGVmdDowfS5yYW5nZS13cmFwcGVyIC5zdWZmaXg6bm90KC5oYXMtYXBwZW5kKXtwYWRkaW5nLXJpZ2h0OjB9LnJhbmdle2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1ncm93OjE7bWFyZ2luLWJvdHRvbTp2YXIoLS1tdGUtc3BhY2UtbWQpO21pbi1oZWlnaHQ6MjRweDtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoyNDBweDt6LWluZGV4OjF9LnJhbmdlOmJlZm9yZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCx2YXIoLS10cmFjay1jb2xvci1maWxsZWQpIDAsdmFyKC0tdHJhY2stY29sb3ItZmlsbGVkKSB2YXIoLS1maXJzdC12YWx1ZS1wb3NpdGlvbiksdmFyKC0tdHJhY2stY29sb3IpIHZhcigtLWZpcnN0LXZhbHVlLXBvc2l0aW9uKSx2YXIoLS10cmFjay1jb2xvcikgMTAwJSk7Y29udGVudDpcIlwiO2hlaWdodDp2YXIoLS10cmFjay1oZWlnaHQpO2xlZnQ6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3dpZHRoOjEwMCV9LnJhbmdlLWlucHV0ey13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2N1cnNvcjpwb2ludGVyO2hlaWdodDoxMDAlO21hcmdpbjowO21heC13aWR0aDpjYWxjKDEwMCUgKyB2YXIoLS10aHVtYi1zaXplKSk7bWluLWhlaWdodDoyNHB4O21pbi13aWR0aDpjYWxjKDEwMCUgKyB2YXIoLS10aHVtYi1zaXplKSk7cG9zaXRpb246cmVsYXRpdmU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoY2FsYyh2YXIoLS10aHVtYi1zaXplKSotMS8yKSl9LnJhbmdlLWlucHV0OmZvY3VzLXZpc2libGV7b3V0bGluZTpub25lfS5yYW5nZS1pbnB1dDo6LXdlYmtpdC1zbGlkZXItdGh1bWJ7dmlzaWJpbGl0eTpoaWRkZW59LnJhbmdlLWlucHV0OjotbW96LWZvY3VzLW91dGVye2JvcmRlcjowfS50aHVtYi1jb250YWluZXJ7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmNlbnRlcjtsZWZ0OnZhcigtLWZpcnN0LXZhbHVlLXBvc2l0aW9uKTtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3RvcDpjYWxjKDUwJSAtIHZhcigtLXRodW1iLXNpemUpICsgdmFyKC0tdHJhY2staGVpZ2h0KSArIDJweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9LnRodW1ie2JhY2tncm91bmQtY29sb3I6dmFyKC0tdGh1bWItY29sb3IpO2JvcmRlcjoycHggc29saWQgdmFyKC0tbXRlLWluay01KTtib3JkZXItcmFkaXVzOjUwJTtjdXJzb3I6cG9pbnRlcjtoZWlnaHQ6dmFyKC0tdGh1bWItc2l6ZSk7d2lkdGg6dmFyKC0tdGh1bWItc2l6ZSl9LnJhbmdlLWlucHV0OmVuYWJsZWQ6Zm9jdXMtdmlzaWJsZSsudGh1bWItY29udGFpbmVyIC50aHVtYntvdXRsaW5lOnZhcigtLXRodW1iLW91dGxpbmUtZm9jdXMpfS5yYW5nZS1pbnB1dDplbmFibGVkOmZvY3VzLXZpc2libGU6aG92ZXIrLnRodW1iLWNvbnRhaW5lciAudGh1bWJ7b3V0bGluZTp2YXIoLS10aHVtYi1vdXRsaW5lLWhvdmVyKX0ucmFuZ2UtaW5wdXQ6ZW5hYmxlZCsudGh1bWItY29udGFpbmVyIC50aHVtYjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXRodW1iLWhvdmVyLWNvbG9yKX0ucmFuZ2UtaW5wdXQ6ZW5hYmxlZDphY3RpdmUrLnRodW1iLWNvbnRhaW5lciAudGh1bWJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS10aHVtYi1hY3RpdmUtY29sb3IpfS52YWx1ZS1sYWJlbHtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tdGUtZGFyayk7Ym9yZGVyOjAgc29saWQ7Ym9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1mdWxsKTtjb2xvcjp2YXIoLS1tdGUtbGlnaHQpO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtd2VpZ2h0KTtsZWZ0OjA7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tbGluZS1oZWlnaHQpO2xpbmUtaGVpZ2h0OjE7bWFyZ2luLXRvcDp2YXIoLS1tdGUtc3BhY2UteHMpO3BhZGRpbmc6dmFyKC0tbXRlLXNwYWNlLXhzKSB2YXIoLS1tdGUtc3BhY2Utc20pO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm93cmFwO3otaW5kZXg6dmFyKC0tbGFiZWwtei1pbmRleCl9Lm51bWJlci1pbnB1dHtmbGV4LXNocmluazowO21hcmdpbi1sZWZ0OnZhcigtLW10ZS1zcGFjZS1sZyl9Lm51bWJlci1pbnB1dC53aXRoLWxhYmVse21hcmdpbi10b3A6dmFyKC0tbXRlLXNwYWNlLWxnKX0ubnVtYmVyLWlucHV0LndpdGgtZGVzY3JpcHRpb257bWFyZ2luLXRvcDp2YXIoLS1tdGUtc3BhY2UtbWQpfS5udW1iZXItaW5wdXQud2l0aC1sYWJlbC53aXRoLWRlc2NyaXB0aW9ue21hcmdpbi10b3A6Y2FsYyh2YXIoLS1tdGUtc3BhY2UtbGcpICsgdmFyKC0tbXRlLXNwYWNlLW1kKSArIDJweCl9Lm1hcmtze2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDowO3BvaW50ZXItZXZlbnRzOm5vbmU7dG9wOjUwJTt3aWR0aDpjYWxjKDEwMCUgLSAxcHgpfS5tYXJrLC5tYXJrc3twb3NpdGlvbjphYnNvbHV0ZX0ubWFya3thbGlnbi1pdGVtczpjZW50ZXI7Y29sb3I6dmFyKC0tbXRlLWluay0xKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTtnYXA6dmFyKC0tbXRlLXNwYWNlLXNtKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tbGluZS1oZWlnaHQpO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dG9wOjJweDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7d2lkdGg6MXB4fS5tYXJrOmJlZm9yZXtiYWNrZ3JvdW5kOnZhcigtLW10ZS1ib3JkZXItMyk7Y29udGVudDpcIlwiO2hlaWdodDo2cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoNTAlKTt3aWR0aDoxcHh9Omhvc3QoW3JlYWRvbmx5XSl7LS10cmFjay1jb2xvci1maWxsZWQ6dmFyKC0tbXRlLXJlYWRvbmx5LTIpOy0tdGh1bWItY29sb3I6dmFyKC0tbXRlLXJlYWRvbmx5LTQpOy0tdGh1bWItYWN0aXZlLWNvbG9yOnZhcigtLW10ZS1yZWFkb25seS00KTstLXRodW1iLWhvdmVyLWNvbG9yOnZhcigtLW10ZS1yZWFkb25seS00KX06aG9zdChbcmVhZG9ubHldOm5vdCg6ZGlzYWJsZWQpKSAudGh1bWJ7Ym9yZGVyOjAgc29saWQgdHJhbnNwYXJlbnQ7bWFyZ2luLWJvdHRvbToycHg7b3V0bGluZTpub25lfTpob3N0KFtyZWFkb25seV06bm90KDpkaXNhYmxlZCkpIC50aHVtYi1jb250YWluZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLDJweCl9Omhvc3QoOmRpc2FibGVkKXstLXRyYWNrLWNvbG9yLWZpbGxlZDp2YXIoLS1tdGUtZGlzYWJsZWQtMik7LS10aHVtYi1jb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtMyl9aW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otc2xpZGVyLXRodW1iey1tb3otYXBwZWFyYW5jZTpub25lfWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLXBsYWNlaG9sZGVyLWNvbG9yOnZhcigtLW10ZS1pbmstMik7LS1pbnB1dC1wYWRkaW5nLXk6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpOy0taWNvbi1zaXplOjIwcHg7LS1jb2xvcjp2YXIoLS1tdGUtaW5rLTEpOy0tZm9udC1zaXplOjFyZW07Y29sb3I6dmFyKC0tY29sb3IpO2xpbmUtaGVpZ2h0OjB9Omhvc3QoW3NpemU9c21dKXstLWlucHV0LXBhZGRpbmcteTpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1pY29uLXNpemU6MThweDstLWZvbnQtc2l6ZTowLjg3NXJlbX06aG9zdChbc2l6ZT1sZ10pey0taW5wdXQtcGFkZGluZy15OmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpOy0taWNvbi1zaXplOjIycHg7LS1mb250LXNpemU6MS4yNXJlbX0uaW5wdXR7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MDtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1mb250LXNpemUpO2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1mb250LXdlaWdodCk7aGVpZ2h0OmNhbGMoMWVtICsgdmFyKC0taW5wdXQtcGFkZGluZy15KSoyKTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTEtbGluZS1oZWlnaHQpO2xpbmUtaGVpZ2h0OjE7bWFyZ2luOjA7b3V0bGluZTpub25lO3BhZGRpbmc6MDt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7d2lkdGg6MTAwJX0uaW5wdXQ6Oi13ZWJraXQtZGF0ZS1hbmQtdGltZS12YWx1ZXt0ZXh0LWFsaWduOmxlZnR9LmNsZWFye21hcmdpbi1sZWZ0OmNhbGModmFyKC0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXApKi0xLzIpO21hcmdpbi1yaWdodDpjYWxjKHZhcigtLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwKSotMSl9LmlucHV0OjotbW96LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKX0uaW5wdXQ6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKX06aG9zdCg6Zm9jdXMpe291dGxpbmU6bm9uZX06aG9zdChbcmVhZG9ubHldKXstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1yZWFkb25seS0zKTstLWZvcm0tZmllbGQtYmFja2dyb3VuZDp2YXIoLS1tdGUtcmVhZG9ubHktMSl9Omhvc3QoW3JlYWRvbmx5XSkgLmlucHV0e2NvbG9yOnZhcigtLW10ZS1yZWFkb25seS00KX06aG9zdChbZGlzYWJsZWRdKXstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC0xKTstLWZvcm0tZmllbGQtYmFja2dyb3VuZDp2YXIoLS1tdGUtZGlzYWJsZWQtMSl9Omhvc3QoW2Rpc2FibGVkXSkgLmlucHV0e2NvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC00KTtjdXJzb3I6bm90LWFsbG93ZWR9Omhvc3QoW2Rpc2FibGVkXSkgLmlucHV0OjotbW96LXBsYWNlaG9sZGVyLDpob3N0KFtyZWFkb25seV0pIC5pbnB1dDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtNCl9Omhvc3QoW2Rpc2FibGVkXSkgLmlucHV0OjpwbGFjZWhvbGRlciw6aG9zdChbcmVhZG9ubHldKSAuaW5wdXQ6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC00KX06aG9zdCA6OnNsb3R0ZWQobXRlLWljb25bc2xvdD1hcHBlbmRdKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWljb25bc2xvdD1wcmVmaXhdKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWljb25bc2xvdD1wcmVwZW5kXSksOmhvc3QgOjpzbG90dGVkKG10ZS1pY29uW3Nsb3Q9c3VmZml4XSl7aGVpZ2h0OnZhcigtLWljb24tc2l6ZSk7bWluLWhlaWdodDp2YXIoLS1pY29uLXNpemUpO21pbi13aWR0aDp2YXIoLS1pY29uLXNpemUpO3dpZHRoOnZhcigtLWljb24tc2l6ZSl9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOmluaGVyaXQ7LS1wYWRkaW5nLXk6dmFyKC0tbXRlLXNwYWNlLXNtKTstLXBhZGRpbmcteDpjYWxjKHZhcigtLW10ZS1zcGFjZS1tZCkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKTstLWJvcmRlci13aWR0aDoxcHg7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1ib3JkZXItcmFkaXVzOnZhcigtLWdyb3VwLXJhZGl1cyx2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14bCkpOy0tZm9jdXMtcmFkaXVzOnZhcigtLWdyb3VwLWZvY3VzLXJhZGl1cyx2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1mdWxsKSk7LS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1ib3JkZXItYWx0LWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7LS1pY29uLXNpemU6MTZweDstLWZvY3VzLW9mZnNldDotNXB4Oy0tZmluYWwteTp2YXIoLS1wYWRkaW5nLXkpOy0tZmluYWwteDp2YXIoLS1wYWRkaW5nLXgpO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2JvcmRlcjp2YXIoLS1ib3JkZXItc3R5bGUpIHZhcigtLWJvcmRlci13aWR0aCkgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWdyb3VwLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsdmFyKC0tYm9yZGVyLXJhZGl1cykpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWdyb3VwLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLHZhcigtLWJvcmRlci1yYWRpdXMpKTtib3JkZXItY29sb3I6dmFyKC0tZ3JvdXAtYm9yZGVyLXRvcC1jb2xvcix2YXIoLS1ib3JkZXItY29sb3IpKSB2YXIoLS1ncm91cC1ib3JkZXItcmlnaHQtY29sb3IsdmFyKC0tYm9yZGVyLWNvbG9yKSkgdmFyKC0tZ3JvdXAtYm9yZGVyLWJvdHRvbS1jb2xvcix2YXIoLS1ib3JkZXItY29sb3IpKSB2YXIoLS1ncm91cC1ib3JkZXItbGVmdC1jb2xvcix2YXIoLS1ib3JkZXItY29sb3IpKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWdyb3VwLWJvcmRlci10b3AtbGVmdC1yYWRpdXMsdmFyKC0tYm9yZGVyLXJhZGl1cykpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWdyb3VwLWJvcmRlci10b3AtcmlnaHQtcmFkaXVzLHZhcigtLWJvcmRlci1yYWRpdXMpKTtjb2xvcjp2YXIoLS1jb2xvcik7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTppbmxpbmUtZmxleDtmbGV4LXdyYXA6bm93cmFwO2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO291dGxpbmU6bm9uZSFpbXBvcnRhbnQ7b3ZlcmZsb3c6dmlzaWJsZTtwYWRkaW5nOnZhcigtLWZpbmFsLXkpIHZhcigtLWZpbmFsLXgpOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7d2lkdGg6YXV0bzstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1idXR0b24tZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1idXR0b24tbGluZS1oZWlnaHQpO2xpbmUtaGVpZ2h0OjE7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdH06aG9zdCg6Zm9jdXMtdmlzaWJsZTpub3QoLmRpc2FibGVkKTpub3QoW2Rpc2FibGVkXSk6bm90KDpkaXNhYmxlZCkpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1ncm91cC1mb2N1cy1ib3R0b20tbGVmdC1yYWRpdXMsdmFyKC0tZm9jdXMtcmFkaXVzKSk7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tZ3JvdXAtZm9jdXMtYm90dG9tLXJpZ2h0LXJhZGl1cyx2YXIoLS1mb2N1cy1yYWRpdXMpKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWdyb3VwLWZvY3VzLXRvcC1sZWZ0LXJhZGl1cyx2YXIoLS1mb2N1cy1yYWRpdXMpKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1ncm91cC1mb2N1cy10b3AtcmlnaHQtcmFkaXVzLHZhcigtLWZvY3VzLXJhZGl1cykpO2JvdHRvbTp2YXIoLS1mb2N1cy1vZmZzZXQpO2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDp2YXIoLS1mb2N1cy1vZmZzZXQpO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6dmFyKC0tZm9jdXMtb2Zmc2V0KTt0b3A6dmFyKC0tZm9jdXMtb2Zmc2V0KTt6LWluZGV4Ojl9Omhvc3QoOjotbW96LWZvY3VzLWlubmVyKXtib3JkZXI6MDtwYWRkaW5nOjB9Omhvc3QoOmhvdmVyKSw6aG9zdChbYWN0aXZlc3RhdGVdKXtvdXRsaW5lOm5vbmU7LS1jb2xvcjppbmhlcml0fTpob3N0KDpob3Zlcil7LS1iYWNrZ3JvdW5kOnZhcigtLWludGVyYWN0aXZlLWhvdmVyLWJnLHJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYSkpKX06aG9zdCg6YWN0aXZlKSw6aG9zdChbYWN0aXZlc3RhdGVdKXstLWJhY2tncm91bmQ6dmFyKC0taW50ZXJhY3RpdmUtYWN0aXZlLWJnLHJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hKSkpfTpob3N0KFtvdXRsaW5lZF0pey0tYm9yZGVyLXN0eWxlOnNvbGlkOy0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMil9Omhvc3QoW2ZpbGxlZF0pey0tYm9yZGVyLXN0eWxlOnNvbGlkOy0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZDp2YXIoLS1idXR0b24tZmlsbGVkLWJnLHZhcigtLW10ZS1ncmV5LTEwKSk7LS1jb2xvcjp2YXIoLS1idXR0b24tZmlsbGVkLWluayx2YXIoLS1tdGUtaW5rLTUpKX06aG9zdChbZmlsbGVkXTpob3Zlcil7LS1iYWNrZ3JvdW5kOnZhcigtLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWJnLHZhcigtLW10ZS1ncmV5LTkpKTstLWNvbG9yOnZhcigtLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWluayx2YXIoLS1tdGUtaW5rLTUpKX06aG9zdChbZmlsbGVkXTphY3RpdmUpLDpob3N0KFtmaWxsZWRdW2FjdGl2ZXN0YXRlXSl7LS1iYWNrZ3JvdW5kOnZhcigtLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWJnLHZhcigtLW10ZS1kYXJrZXIpKTstLWNvbG9yOnZhcigtLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWluayx2YXIoLS1tdGUtaW5rLTUpKX06aG9zdChbY29sb3I9cHJpbWFyeV06bm90KFtkaXNhYmxlZF0pKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1wcmltYXJ5XTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMpLDpob3N0KFtjb2xvcj1wcmltYXJ5XTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWEpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWRhcmstcmdiKSl9Omhvc3QoW2NvbG9yPXByaW1hcnldOm5vdChbZGlzYWJsZWRdKVthY3RpdmVzdGF0ZV0pey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFya2VyLXJnYikpfTpob3N0KFtjb2xvcj1wcmltYXJ5XVtvdXRsaW5lZF06bm90KFtkaXNhYmxlZF0pKXstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXByaW1hcnldW291dGxpbmVkXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMpLDpob3N0KFtjb2xvcj1wcmltYXJ5XVtvdXRsaW5lZF06bm90KFtkaXNhYmxlZF0pOmhvdmVyKXstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tYmFja2dyb3VuZDp2YXIoLS1pbnRlcmFjdGl2ZS1ob3Zlci1iZyxyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWEpKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLXJnYikpfTpob3N0KFtjb2xvcj1wcmltYXJ5XVtvdXRsaW5lZF06bm90KFtkaXNhYmxlZF0pW2FjdGl2ZXN0YXRlXSl7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWJhY2tncm91bmQ6dmFyKC0taW50ZXJhY3RpdmUtYWN0aXZlLWJnLHJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hKSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFya2VyLXJnYikpfTpob3N0KFtjb2xvcj1wcmltYXJ5XVtmaWxsZWRdOm5vdChbZGlzYWJsZWRdKSl7LS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1ib3JkZXItYWx0LWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWRhcmstcmdiKSk7LS1iYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLWMtcmdiKSl9Omhvc3QoW2NvbG9yPXByaW1hcnldW2ZpbGxlZF06bm90KFtkaXNhYmxlZF0pOmZvY3VzKSw6aG9zdChbY29sb3I9cHJpbWFyeV1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYm9yZGVyLWFsdC1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLXJnYikpOy0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFyay1jLXJnYikpfTpob3N0KFtjb2xvcj1wcmltYXJ5XVtmaWxsZWRdOm5vdChbZGlzYWJsZWRdKVthY3RpdmVzdGF0ZV0pey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrZXItcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrZXItYy1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XTpub3QoW2Rpc2FibGVkXSkpey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMpLDpob3N0KFtjb2xvcj1zZWNvbmRhcnldOm5vdChbZGlzYWJsZWRdKTpob3Zlcil7LS1iYWNrZ3JvdW5kOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrLXJnYikpfTpob3N0KFtjb2xvcj1zZWNvbmRhcnldOm5vdChbZGlzYWJsZWRdKVthY3RpdmVzdGF0ZV0pey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrZXItcmdiKSl9Omhvc3QoW2NvbG9yPXNlY29uZGFyeV1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKSl7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMik7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXNlY29uZGFyeV1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKTpmb2N1cyksOmhvc3QoW2NvbG9yPXNlY29uZGFyeV1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKTpob3Zlcil7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWJhY2tncm91bmQ6dmFyKC0taW50ZXJhY3RpdmUtaG92ZXItYmcscmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hKSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrLXJnYikpfTpob3N0KFtjb2xvcj1zZWNvbmRhcnldW291dGxpbmVkXTpub3QoW2Rpc2FibGVkXSlbYWN0aXZlc3RhdGVdKXstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tYmFja2dyb3VuZDp2YXIoLS1pbnRlcmFjdGl2ZS1hY3RpdmUtYmcscmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWEpKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmtlci1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XVtmaWxsZWRdOm5vdChbZGlzYWJsZWRdKSl7LS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1ib3JkZXItYWx0LWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktZGFyay1yZ2IpKTstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1iYXNlLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1iYXNlLWMtcmdiKSl9Omhvc3QoW2NvbG9yPXNlY29uZGFyeV1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMpLDpob3N0KFtjb2xvcj1zZWNvbmRhcnldW2ZpbGxlZF06bm90KFtkaXNhYmxlZF0pOmhvdmVyKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJvcmRlci1hbHQtY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrLXJnYikpOy0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmstcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmstYy1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XVtmaWxsZWRdOm5vdChbZGlzYWJsZWRdKVthY3RpdmVzdGF0ZV0pey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmtlci1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktZGFya2VyLWMtcmdiKSl9Omhvc3QoW2NvbG9yPXRlcnRpYXJ5XTpub3QoW2Rpc2FibGVkXSkpey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj10ZXJ0aWFyeV06bm90KFtkaXNhYmxlZF0pOmZvY3VzKSw6aG9zdChbY29sb3I9dGVydGlhcnldOm5vdChbZGlzYWJsZWRdKTpob3Zlcil7LS1iYWNrZ3JvdW5kOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmstcmdiKSl9Omhvc3QoW2NvbG9yPXRlcnRpYXJ5XTpub3QoW2Rpc2FibGVkXSlbYWN0aXZlc3RhdGVdKXstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWEpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1kYXJrZXItcmdiKSl9Omhvc3QoW2NvbG9yPXRlcnRpYXJ5XVtvdXRsaW5lZF06bm90KFtkaXNhYmxlZF0pKXstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj10ZXJ0aWFyeV1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKTpmb2N1cyksOmhvc3QoW2NvbG9yPXRlcnRpYXJ5XVtvdXRsaW5lZF06bm90KFtkaXNhYmxlZF0pOmhvdmVyKXstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tYmFja2dyb3VuZDp2YXIoLS1pbnRlcmFjdGl2ZS1ob3Zlci1iZyxyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiKSx2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWEpKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFyay1yZ2IpKX06aG9zdChbY29sb3I9dGVydGlhcnldW291dGxpbmVkXTpub3QoW2Rpc2FibGVkXSlbYWN0aXZlc3RhdGVdKXstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tYmFja2dyb3VuZDp2YXIoLS1pbnRlcmFjdGl2ZS1hY3RpdmUtYmcscmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWEpKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFya2VyLXJnYikpfTpob3N0KFtjb2xvcj10ZXJ0aWFyeV1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSkpey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYm9yZGVyLWFsdC1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFyay1yZ2IpKTstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWJhc2UtcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktYmFzZS1jLXJnYikpfTpob3N0KFtjb2xvcj10ZXJ0aWFyeV1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMpLDpob3N0KFtjb2xvcj10ZXJ0aWFyeV1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYm9yZGVyLWFsdC1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFyay1yZ2IpKTstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmstcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFyay1jLXJnYikpfTpob3N0KFtjb2xvcj10ZXJ0aWFyeV1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSlbYWN0aXZlc3RhdGVdKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmtlci1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1kYXJrZXItYy1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXTpub3QoW2Rpc2FibGVkXSkpey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMpLDpob3N0KFtjb2xvcj1kYW5nZXJdOm5vdChbZGlzYWJsZWRdKTpob3Zlcil7LS1iYWNrZ3JvdW5kOnJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrLXJnYikpfTpob3N0KFtjb2xvcj1kYW5nZXJdOm5vdChbZGlzYWJsZWRdKVthY3RpdmVzdGF0ZV0pey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrZXItcmdiKSl9Omhvc3QoW2NvbG9yPWRhbmdlcl1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKSl7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMik7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPWRhbmdlcl1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKTpmb2N1cyksOmhvc3QoW2NvbG9yPWRhbmdlcl1bb3V0bGluZWRdOm5vdChbZGlzYWJsZWRdKTpob3Zlcil7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWJhY2tncm91bmQ6dmFyKC0taW50ZXJhY3RpdmUtaG92ZXItYmcscmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYiksdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hKSkpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrLXJnYikpfTpob3N0KFtjb2xvcj1kYW5nZXJdW291dGxpbmVkXTpub3QoW2Rpc2FibGVkXSlbYWN0aXZlc3RhdGVdKXstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tYmFja2dyb3VuZDp2YXIoLS1pbnRlcmFjdGl2ZS1hY3RpdmUtYmcscmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2IpLHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWEpKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWRhcmtlci1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXVtmaWxsZWRdOm5vdChbZGlzYWJsZWRdKSl7LS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1ib3JkZXItYWx0LWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItZGFyay1yZ2IpKTstLWJhY2tncm91bmQ6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1iYXNlLXJnYikpOy0tY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1iYXNlLWMtcmdiKSl9Omhvc3QoW2NvbG9yPWRhbmdlcl1bZmlsbGVkXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMpLDpob3N0KFtjb2xvcj1kYW5nZXJdW2ZpbGxlZF06bm90KFtkaXNhYmxlZF0pOmhvdmVyKXstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJvcmRlci1hbHQtY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrLXJnYikpOy0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWRhcmstcmdiKSk7LS1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWRhcmstYy1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXVtmaWxsZWRdOm5vdChbZGlzYWJsZWRdKVthY3RpdmVzdGF0ZV0pey0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWRhcmtlci1yZ2IpKTstLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItZGFya2VyLWMtcmdiKSl9Omhvc3QoW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgYXtjdXJzb3I6bm90LWFsbG93ZWQhaW1wb3J0YW50Oy0tY29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTQpIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50O3RleHQtc2hhZG93Om5vbmUhaW1wb3J0YW50fTpob3N0KFtkaXNhYmxlZF06aG92ZXIpLDpob3N0KFtkaXNhYmxlZF1bYWN0aXZlc3RhdGVdKXstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQhaW1wb3J0YW50fTpob3N0KFtkaXNhYmxlZF1bZmlsbGVkXSksOmhvc3QoW2Rpc2FibGVkXVtvdXRsaW5lZF0pey0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC0yKSFpbXBvcnRhbnQ7LS1iYWNrZ3JvdW5kOnZhcigtLW10ZS1kaXNhYmxlZC0xKSFpbXBvcnRhbnQ7LS1jb2xvcjp2YXIoLS1tdGUtZGlzYWJsZWQtNCkhaW1wb3J0YW50fTpob3N0KFtkaXNhYmxlZF1bZmlsbGVkXTpob3ZlciksOmhvc3QoW2Rpc2FibGVkXVtmaWxsZWRdW2FjdGl2ZXN0YXRlXSksOmhvc3QoW2Rpc2FibGVkXVtvdXRsaW5lZF06aG92ZXIpLDpob3N0KFtkaXNhYmxlZF1bb3V0bGluZWRdW2FjdGl2ZXN0YXRlXSl7LS1iYWNrZ3JvdW5kOnZhcigtLW10ZS1kaXNhYmxlZC0xKSFpbXBvcnRhbnR9Omhvc3QoW3NpemU9c21dKXtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Zm9udC1zaXplOmNhbGModmFyKC0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1mb250LXNpemUpKi44KTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYnV0dG9uLWZvbnQtd2VpZ2h0KTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYnV0dG9uLWxpbmUtaGVpZ2h0KTt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0Oy0tZmluYWwteTpjYWxjKHZhcigtLXBhZGRpbmcteSkqdmFyKC0tbXRlLXNpemUtc2NhbGUtc20pKTstLWZpbmFsLXg6Y2FsYyh2YXIoLS1wYWRkaW5nLXgpKnZhcigtLW10ZS1zaXplLXNjYWxlLXNtKSl9Omhvc3QoW3NpemU9bGddKXtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Zm9udC1zaXplOmNhbGModmFyKC0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1mb250LXNpemUpKjEuMik7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1saW5lLWhlaWdodCk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtZnVsbCk7LS1maW5hbC15OmNhbGModmFyKC0tcGFkZGluZy15KSp2YXIoLS1tdGUtc2l6ZS1zY2FsZS1sZykpOy0tZmluYWwteDpjYWxjKHZhcigtLXBhZGRpbmcteCkqdmFyKC0tbXRlLXNpemUtc2NhbGUtbGcpKX06aG9zdChbcmFkaXVzPXNtXSl7LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXNtKTstLWZvY3VzLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCl9LnByZWZpeCwucHJlZml4PnNwYW57YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5wcmVmaXh7bWFyZ2luLWxlZnQ6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pKi0xKTtwYWRkaW5nLXJpZ2h0OnZhcigtLW10ZS1zcGFjZS1zbSl9Omhvc3QoW3NpemU9c21dKSAucHJlZml4e21hcmdpbi1sZWZ0OmNhbGModmFyKC0tbXRlLXNwYWNlLXhzKSotMSk7cGFkZGluZy1yaWdodDp2YXIoLS1tdGUtc3BhY2UteHMpfS5zdWZmaXgsLnN1ZmZpeD5zcGFue2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uc3VmZml4e21hcmdpbi1yaWdodDpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkqLTEpO3BhZGRpbmctbGVmdDp2YXIoLS1tdGUtc3BhY2Utc20pfTpob3N0KFtzaXplPXNtXSkgLnN1ZmZpeHttYXJnaW4tcmlnaHQ6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpKi0xKTtwYWRkaW5nLWxlZnQ6dmFyKC0tbXRlLXNwYWNlLXhzKX06aG9zdD46bm90KC5sYWJlbCkgbXRlLWljb257aGVpZ2h0OnZhcigtLWljb24tc2l6ZSk7bWluLWhlaWdodDp2YXIoLS1pY29uLXNpemUpO21pbi13aWR0aDp2YXIoLS1pY29uLXNpemUpO3dpZHRoOnZhcigtLWljb24tc2l6ZSl9Omhvc3QoW3NpemU9c21dKT46bm90KC5sYWJlbCkgbXRlLWljb257LS1pY29uLXNpemU6MTJweH06aG9zdChbc2l6ZT1sZ10pPjpub3QoLmxhYmVsKSBtdGUtaWNvbnstLWljb24tc2l6ZToyMHB4fWA7IiwgImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHksIHN0YXRlIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9pY29uLnN0eWxlcyc7XG5pbXBvcnQge1xuICBkZWZpbmVFbGVtZW50LFxuICBTdGF0dXNDb2xvck1peGluLFxuICBNdGVFbGVtZW50LFxuICBQcmVzZXRNaXhpbkZhY3RvcnksXG4gIG9uVXBkYXRlLFxuICBVbnN1YnNjcmliZXIsXG4gIGlzU3NyLFxufSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IG10ckljb24gfSBmcm9tICdAbW9ydGFyL2ljb25zJztcbmltcG9ydCB7IE10ZUljb25SZWdpc3RyeVNlcnZpY2UgfSBmcm9tICcuL2ljb24tcmVnaXN0cnkuc2VydmljZSc7XG5pbXBvcnQgeyBJY29uUHJlc2V0IH0gZnJvbSAnLi9pY29uLnByZXNldHMnO1xuaW1wb3J0IHsgdW5zYWZlU1ZHIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvdW5zYWZlLXN2Zy5qcyc7XG5pbXBvcnQgeyBzZWxlY3RvckZhY3RvcnkgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5cbi8qKlxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLWljb24nKVxuZXhwb3J0IGNsYXNzIE10ZUljb24gZXh0ZW5kcyBTdGF0dXNDb2xvck1peGluKFxuICBQcmVzZXRNaXhpbkZhY3Rvcnk8SWNvblByZXNldD4oJ010ZUljb24nKShNdGVFbGVtZW50KVxuKSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbc3R5bGVzXTtcblxuICAvKiogVGhlIG5hbWUgb2YgdGhlIGljb24gdG8gcmVuZGVyICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbmFtZTogbXRySWNvbiB8IHN0cmluZztcblxuICAvKiogVGhlIGxpYnJhcnkgdG8gbG9hZCB0aGUgaWNvbiBmcm9tLiBUaGUgZGVmYXVsdCBsaWJyYXJ5IGlzIGBfZGVmYXVsdGAuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbGlicmFyeSA9ICdfZGVmYXVsdCc7XG5cbiAgLyoqIFRoZSBzaXplIG9mIHRoaXMgaWNvbi4gTWF0Y2hlcyBhIGdpdmVuIGZvbnQtc2l6ZSBpbiBweC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0OiB0cnVlIH0pIHNpemU6IHN0cmluZyB8IG51bWJlciA9IDI0O1xuXG4gIC8qKiBTY2FsZSB0aGlzIGljb24gcmVsYXRpdmUgdG8gdGhlIGNvbXB1dGVkIGZvbnQtc2l6ZSBvZiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgYXV0b3NpemUgPSBmYWxzZTtcblxuICAvKiogQW4gaWNvbidzIHJvbGUgaXMgZGVmYXVsdHMgdG8gYGltZ2AgdG8gZW5zdXJlIHRoZXkgZG8gbm90IGludGVycnVwdCB0ZXh0LiAgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSByb2xlID0gJ2ltZyc7XG5cbiAgLyoqIExhYmVsIGZvciBpY29uIHRvIGJlIHJlYWQgdG8gc2NyZWVucmVhZGVyIHRlY2hub2xvZ2llcyAqL1xuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6ICdhcmlhLWxhYmVsJywgcmVmbGVjdDogdHJ1ZSB9KSBhcmlhTGFiZWw6IHN0cmluZztcblxuICAvKiogTGFiZWwgZm9yIGljb24gdG8gYmUgcmVhZCB0byBzY3JlZW5yZWFkZXIgdGVjaG5vbG9naWVzICovXG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ2FyaWEtaGlkZGVuJywgcmVmbGVjdDogdHJ1ZSB9KSBhcmlhSGlkZGVuID0gJ3RydWUnO1xuXG4gIC8qKiBSZW5kZXJzIHRoZSBpY29uIGluIHRoZSBkZWZhdWx0IG11dGVkIGluayBjb2xvci4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBtdXRlZCA9IGZhbHNlO1xuXG4gIC8qKiBSZW5kZXJzIHRoaXMgaWNvbiB3aXRoIGNvbG9ycyBkZWZpbmVkIGluIHRoZSBTVkcgaW5zdGVhZCBvZiBpbmhlcml0aW5nIGZyb20gQ1NTIHBhcmVudHMgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRoQ29sb3IgPSBmYWxzZTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBUcmFja3MgdGhlIGxvYWRlZCBpY29uIHNvIHdlIGRvbid0IG5lZWQgdG8gcmVmZXRjaCBpdCBkdXJpbmcgaHlkcmF0aW9uXG4gICAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIF9sb2FkZWQ/OiBzdHJpbmc7XG5cbiAgQHN0YXRlKCkgcHJpdmF0ZSBpY29uU3ZnOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBmZXRjaEFib3J0Q29udHJvbGxlcj86IEFib3J0Q29udHJvbGxlcjtcblxuICBwcml2YXRlIHByZXZpb3VzSWNvblN1YnNjcmlwdGlvbjogVW5zdWJzY3JpYmVyO1xuXG4gIEBvblVwZGF0ZShbJ25hbWUnLCAnbGlicmFyeSddLCB7IG9uOiAnYm90aCcgfSlcbiAgcHJpdmF0ZSBoYW5kbGVOYW1lVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLm5hbWUpIHtcbiAgICAgIGlmICh0aGlzLm5lZWRzSWNvblVwZGF0ZSgpKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hBYm9ydENvbnRyb2xsZXI/LmFib3J0KCk7XG4gICAgICAgIHRoaXMuZmV0Y2hBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMucHJldmlvdXNJY29uU3Vic2NyaXB0aW9uPy4oKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0ljb25TdWJzY3JpcHRpb24gPSBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlLmdldEljb24oXG4gICAgICAgICAgdGhpcy5uYW1lLFxuICAgICAgICAgIHRoaXMubGlicmFyeSxcbiAgICAgICAgICB0aGlzLmZldGNoQWJvcnRDb250cm9sbGVyLnNpZ25hbFxuICAgICAgICApLnN1YnNjcmliZSgoaWNvbiwgdW5zdWIpID0+IHtcbiAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgY29uc3Qgb2xkU3ZnID0gdGhpcy5pY29uU3ZnO1xuICAgICAgICAgICAgY29uc3Qgb2xkTG9hZGVkID0gdGhpcy5fbG9hZGVkO1xuXG4gICAgICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgICAgICB0aGlzLmljb25TdmcgPSBpY29uO1xuICAgICAgICAgICAgICB0aGlzLl9sb2FkZWQgPSBgJHt0aGlzLmxpYnJhcnl9fiR7dGhpcy5uYW1lfWA7XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnaWNvblN2ZycsIG9sZFN2Zyk7XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnX2xvYWRlZCcsIG9sZExvYWRlZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvblN2ZyA9IGljb247XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVkID0gYCR7dGhpcy5saWJyYXJ5fX4ke3RoaXMubmFtZX1gO1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnaWNvblN2ZycsIG9sZFN2Zyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCdfbG9hZGVkJywgb2xkTG9hZGVkKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSByZXN1bHQgd2FzIG5vdCBudWxsIG9yIHRoZSBmYWxsYmFjayBpY29uIHRoZW4gd2UgbGVhdmUgdGhpcyBzdWJzY3JpcHRpb25cbiAgICAgICAgICAgIC8vIG9wZW4gaW4gY2FzZSBpdCBsb2FkcyBsYXRlciBvciBsYXp5IGxvYWRpbmcgaXMgcmUtZW5hYmxlZC5cbiAgICAgICAgICAgIGlmICh0aGlzLmljb25TdmcgIT09IG51bGwgJiYgdGhpcy5pY29uU3ZnICE9PSBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlWydmYWxsYmFja0ljb24nXSkge1xuICAgICAgICAgICAgICB1bnN1YigpO1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzSWNvblN1YnNjcmlwdGlvbj8uKCk7XG4gICAgICAgICAgICAgIHRoaXMucHJldmlvdXNJY29uU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRHVyaW5nIFNTUiBhbHdheXMgdW5zdWJcbiAgICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgICAgdW5zdWIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5pY29uU3ZnKSB7XG4gICAgICAgIC8vIElmIHRoZSBpY29uIGRvZXNuJ3QgbmVlZCBhbiB1cGRhdGUgYnV0IHdlIGRvbid0IGtub3cgd2hhdCB0aGUgaWNvblN2ZyBpcyAoaHlkcmF0aW5nIGZyb20gU1NSKSwgZ2V0IGl0IGZyb20gdGhlIERPTVxuICAgICAgICBjb25zdCBzdmcgPSB0aGlzLnJlbmRlclJvb3Q/LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpPy5vdXRlckhUTUwgPz8gbnVsbDtcbiAgICAgICAgLy8gV2FpdCBmb3IgdXBkYXRlIHRvIGNvbXBsZXRlIHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pY29uU3ZnID0gc3ZnO1xuICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnaWNvblN2ZycsIG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbG9hZGVkID0gbnVsbDtcbiAgICAgIHRoaXMuaWNvblN2ZyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBAb25VcGRhdGUoWydhcmlhTGFiZWwnXSwgeyBvbjogJ2JvdGgnIH0pXG4gIHByaXZhdGUgaGFuZGxlQXJpYUxhYmVsQ2hhbmdlKCkge1xuICAgIGlmICghdGhpcy5hcmlhTGFiZWwpIHtcbiAgICAgIHRoaXMuYXJpYUhpZGRlbiA9ICd0cnVlJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hcmlhTGFiZWwgJiYgdGhpcy5hcmlhSGlkZGVuID09PSAndHJ1ZScpIHtcbiAgICAgIHRoaXMuYXJpYUhpZGRlbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcygnc2l6ZScpIHx8IGNoYW5nZWRQcm9wcy5oYXMoJ2ljb25TdmcnKSB8fCBjaGFuZ2VkUHJvcHMuaGFzKCdhdXRvc2l6ZScpKSB7XG4gICAgICBpZiAodGhpcy5hdXRvc2l6ZSB8fCB0aGlzLnNpemUpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuYXV0b3NpemUgPyAnY2FsYygxZW0gKyAycHgpJyA6IGAke3RoaXMuc2l6ZX1weGA7XG4gICAgICAgIC8vIFNwZWNpZmljaXR5IGlzIG9uZSBsZXNzIHRoYXQgc2Uvc3AgcHJvcHMgc28gdGhvc2Ugc3RpbGwgb3ZlcnJpZGUgZGVmYXVsdCBzaXplIGNhbGN1bGF0aW9uc1xuICAgICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoJ210ZS1pY29uLXNpemluZycsIHNlbGVjdG9yRmFjdG9yeSgnOmhvc3Q6aG9zdCcpLCB7XG4gICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgbWluV2lkdGg6IHNpemUsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICAgIG1pbkhlaWdodDogc2l6ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIHRoaXMucHJldmlvdXNJY29uU3Vic2NyaXB0aW9uPy4oKTtcbiAgfVxuXG4gIHByaXZhdGUgbmVlZHNJY29uVXBkYXRlKCkge1xuICAgIHJldHVybiAhdGhpcy5fbG9hZGVkIHx8IHRoaXMuX2xvYWRlZCAhPT0gYCR7dGhpcy5saWJyYXJ5fX4ke3RoaXMubmFtZX1gO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYCR7dGhpcy5pbnN0YW5jZVN0eWxlc30ke3Vuc2FmZVNWRyh0aGlzLmljb25TdmcpfWA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLWljb24nOiBNdGVJY29uO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2JveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50O2NvbG9yOnZhcigtLWljb24tY29sb3IsaW5oZXJpdCk7ZGlzcGxheTppbmxpbmUtYmxvY2s7bGluZS1oZWlnaHQ6MDt3aWR0aDoyNHB4fTpob3N0KFthdXRvc2l6ZV0pe3ZlcnRpY2FsLWFsaWduOm1pZGRsZX06aG9zdChbbXV0ZWRdKXstLWljb24tY29sb3I6dmFyKC0tbXRlLWluay0yKX1zdmd7ZGlzcGxheTpibG9jaztoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfTpob3N0KDpub3QoW3dpdGhDb2xvcl0pKSBzdmcgKntjb2xvcjppbmhlcml0O2ZpbGw6Y3VycmVudENvbG9yIWltcG9ydGFudH06aG9zdChbY29sb3I9cHJpbWFyeV0pPnN2ZyAqe2NvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XSk+c3ZnICp7Y29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXRlcnRpYXJ5XSk+c3ZnICp7Y29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c3VjY2Vzc10pPnN2ZyAqe2NvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9d2FybmluZ10pPnN2ZyAqe2NvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXSk+c3ZnICp7Y29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtcmdiKSl9YDsiLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWluZmVycmFibGUtdHlwZXMgKi9cbmltcG9ydCB7IFNpZ25hbCwgc2lnbmFsLCBpc1NzciwgY29tcHV0ZWQgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IE1vcnRhckljb24sIG10ckljb25IZWxwUmhvbWJ1cyB9IGZyb20gJ0Btb3J0YXIvaWNvbnMnO1xuXG5leHBvcnQgdHlwZSBJY29uRGF0YSA9IHsgZGF0YT86IHN0cmluZzsgZmV0Y2hlZD86IGJvb2xlYW4gfTtcblxuLyoqXG4gKiBTZXJ2aWNlIHVzZWQgdG8gcmVnaXN0ZXIgc3ZnIHN0cmluZ3MgZm9yIGEgZ2l2ZW4gaWNvbiBuYW1lIGFuZCB0aGVuIGxvb2sgdGhlbVxuICogdXAgYnkgdGhhdCBzYW1lIG5hbWUgb3IgZmV0Y2ggdGhlbSBmcm9tIGEgQ0ROLiBUaGUgYE10ZUljb25SZWdpc3RyeVNlcnZpY2VgIGlzXG4gKiBhIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzLiBZb3Ugc2hvdWxkIGFsd2F5cyB1c2UgdGhhdCBleHBvcnQgaW5zdGVhZFxuICogb2YgaW5pdGlhbGl6aW5nIGEgbmV3IGluc3RhbmNlLlxuICovXG5leHBvcnQgY2xhc3MgX010ZUljb25SZWdpc3RyeVNlcnZpY2Uge1xuICAvKiogTWFwIHdoZXJlIGxvYWRlZCBpY29uIHN2Z3MgYXJlIGNhY2hlZCAqL1xuICBwcml2YXRlIGljb25SZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBTaWduYWw8SWNvbkRhdGE+PigpO1xuXG4gIC8qKiBNYXAgb2YgcmVnaXN0ZXJlZCBsYXp5IGxvYWRpbmcgcmVzb2x2ZXIgZnVuY3Rpb25zIHBlciBpY29uIGxpYnJhcnkgKi9cbiAgcHJpdmF0ZSBpY29uVXJsUmVzb2x2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIChpY29uTmFtZTogc3RyaW5nKSA9PiBzdHJpbmc+KCk7XG5cbiAgLyoqIERlZmluZXMgdGhlIHN2ZyB1c2VkIHdoZW4gYW4gaWNvbiBjYW5ub3QgYmUgbG9hZGVkICovXG4gIHByaXZhdGUgZmFsbGJhY2tJY29uID0gbXRySWNvbkhlbHBSaG9tYnVzPy5kYXRhO1xuXG4gIC8qKiBUcmFja3MgaWYgaWNvbnMgc2hvdWxkIGJlIGxhenkgbG9hZGVkIGludGVybmFsbHkgKi9cbiAgcHJpdmF0ZSBsYXp5TG9hZEVuYWJsZWQgPSB0cnVlO1xuXG4gIC8qKiBQcmV2ZW50cyBsb2dzIGFuZCBmZXRjaGVzIHdoZW4gdHJ1ZSAqL1xuICBwcml2YXRlIHRlc3RNb2RlRW5hYmxlZCA9IGZhbHNlO1xuXG4gIC8qKiBEZWxpbWl0ZXIgdXNlZCB3aGVuIGNyZWF0aW5nIGxpYnJhcnkgKyBpY29uIG5hbWUga2V5cyAqL1xuICBwcml2YXRlIGRlbGltaXRlciA9ICd+JztcblxuICAvKiogSWYgZXhlY3V0aW5nIHNlcnZlci1zaWRlIGFsbCBtb3J0YXIgaWNvbnMgd2lsbCBiZSBsb2FkZWQgaGVyZSAqL1xuICBwcml2YXRlIHNlcnZlckljb25DYWNoZT86IFJlY29yZDxzdHJpbmcsIE1vcnRhckljb24+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaWNvblVybFJlc29sdmVycy5zZXQoJ19kZWZhdWx0JywgKGljb25OYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBgaHR0cHM6Ly9tb3J0YXItY2RuLmhlYi5jb20vaWNvbnMvbWRpLzcuMi8ke2ljb25OYW1lfS5zdmdgO1xuICAgIH0pO1xuICAgIHRoaXMuaWNvblVybFJlc29sdmVycy5zZXQoJ2N4JywgKGljb25OYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBgaHR0cHM6Ly9tb3J0YXItY2RuLmhlYi5jb20vaWNvbnMvY3gvMS4xLyR7aWNvbk5hbWV9LnN2Z2A7XG4gICAgfSk7XG4gICAgdGhpcy5zc3JJbml0KCkudGhlbigoKSA9PiB7fSk7XG4gIH1cblxuICAvKiogQGhpZGRlbiAqL1xuICBhc3luYyBzc3JJbml0KCkge1xuICAgIC8qKlxuICAgICAqIFRoaXMgbW9uc3Ryb3NpdHkgZW5hYmxlcyBsb2NhbCBpY29uIHJlbmRlcmluZyBkdXJpbmcgU1NSIF9XSVRIT1VUXyBhbHNvIHJlc3VsdGluZyBpblxuICAgICAqIGJ1bmRsZXJzIHB1bGxpbmcgaW4gdGhlIGVudGlyZSBpY29uIGxpYnJhcnkgZWxzZXdoZXJlLiBUaGlzIGNhbiBhbHNvIGJlIGFjaGlldmVkIHdpdGgganVzdFxuICAgICAqIHRoZSBtYWdpYyBjb21tZW50cyBiZWxvdy4uLmJ1dCBub3QgYWxsIGJ1bmRsZXJzIHN1cHBvcnQgdGhhdCBraW5kIG9mIGZlYXR1cmUgc28gdGhpcyBpcyBhblxuICAgICAqIGV4dHJhIHByZWNhdXRpb24uXG4gICAgICpcbiAgICAgKiBGb3IgdGhpcyB0byB3b3JrOlxuICAgICAqIC0gVGhlIGVudmlyb25tZW50IHZhcmlhYmxlIGBNT1JUQVJfRFlOQU1JQ19TU1JfSUNPTl9JTVBPUlRTYCBtdXN0IGJlIHRydWVcbiAgICAgKiAtIFRoZSBgQG1vcnRhci9pY29uc2AgcGFja2FnZSBtdXN0IGJlIGF2YWlsYWJsZVxuICAgICAqL1xuICAgIHRyeSB7XG4gICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICBjb25zdCBpY29uSW1wb3J0ID1cbiAgICAgICAgICAocHJvY2VzcyBhcyBhbnkpPy5lbnYuTU9SVEFSX0RZTkFNSUNfU1NSX0lDT05fSU1QT1JUUyA9PT0gJ3RydWUnID8gJ0Btb3J0YXIvaWNvbnMnIDogbnVsbDtcbiAgICAgICAgaWYgKGljb25JbXBvcnQpIHtcbiAgICAgICAgICAvLyBBdHRlbXB0IHRvIGxvYWQgYWxsIGljb25zIGxvY2FsbHkgaWYgcnVuIHNlcnZlciBzaWRlLiBUaGUgaWdub3JlXG4gICAgICAgICAgLy8gY29tbWVudHMgaGVyZSBwcmV2ZW50IHdlYnBhY2sgJiB2aXRlIGZyb20gdGhyb3dpbmcgYSB3YXJuaW5nXG4gICAgICAgICAgLy8gc2luY2UgdGhlaXIgaW5hYmlsaXR5IHRvIG9wdGltaXplIHRoaXMgaXMgaW50ZW50aW9uYWwgaGVyZS5cbiAgICAgICAgICBjb25zdCBpY29ucyA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovIC8qIEB2aXRlLWlnbm9yZSAqLyBpY29uSW1wb3J0KTtcbiAgICAgICAgICB0aGlzLnNlcnZlckljb25DYWNoZSA9IGljb25zPy5kZWZhdWx0ID8/IGljb25zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLyogZW1wdHkgKi9cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgcm9vdCB1cmwgZnJvbSB3aGljaCB0aGlzIHNlcnZpY2Ugd2lsbCBhdHRlbXB0IHRvIGZldGNoIGljb25zIGZyb20gZm9yIHRoZSBnaXZlbiBcImxpYnJhcnlcIi5cbiAgICovXG4gIHB1YmxpYyByZWdpc3Rlckljb25MaWJyYXJ5KFxuICAgIGljb25MaWJyYXJ5ID0gJ19kZWZhdWx0JyxcbiAgICBpY29uVXJsUmVzb2x2ZXI/OiAoaWNvbk5hbWU6IHN0cmluZykgPT4gc3RyaW5nXG4gICkge1xuICAgIHRoaXMubGF6eUxvYWRFbmFibGVkID0gdHJ1ZTtcbiAgICBpZiAoaWNvblVybFJlc29sdmVyKSB7XG4gICAgICB0aGlzLmljb25VcmxSZXNvbHZlcnMuc2V0KGljb25MaWJyYXJ5ID8/ICdfZGVmYXVsdCcsIGljb25VcmxSZXNvbHZlcik7XG4gICAgfVxuXG4gICAgLy8gRmV0Y2ggYW55IGljb25zIHJlcXVlc3RlZCBiZWZvcmUgdGhpcyB3YXMgY2FsbGVkIHRoYXQgaGF2ZSBub3QgeWV0IGJlZW4gZmV0Y2hlZFxuICAgIGZvciAoY29uc3QgW25hbWUsIGljb25TaWduYWxdIG9mIHRoaXMuaWNvblJlZ2lzdHJ5KSB7XG4gICAgICBpZiAoIWljb25TaWduYWwgfHwgIWljb25TaWduYWwuZ2V0KCk/LmZldGNoZWQpIHtcbiAgICAgICAgY29uc3QgW2ljb25MaWJyYXJ5LCBwYXRoTmFtZV0gPSBuYW1lLnNwbGl0KHRoaXMuZGVsaW1pdGVyKTtcbiAgICAgICAgdGhpcy5mZXRjaEljb24ocGF0aE5hbWUsIGljb25MaWJyYXJ5KS50aGVuKChpY29uKSA9PiB7XG4gICAgICAgICAgaWNvblNpZ25hbC5zZXQoeyBmZXRjaGVkOiB0cnVlLCBkYXRhOiBpY29uIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogTWFudWFsbHkgcmVnaXN0ZXJzIG5ldyBpY29ucyAqL1xuICBwdWJsaWMgcmVnaXN0ZXJJY29ucyhpY29uczogTW9ydGFySWNvbltdLCBpY29uTGlicmFyeSA9ICdfZGVmYXVsdCcpIHtcbiAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICBjb25zdCBpY29uU2lnbmFsID0gdGhpcy5pY29uUmVnaXN0cnkuZ2V0KGAke2ljb25MaWJyYXJ5fSR7dGhpcy5kZWxpbWl0ZXJ9JHtpY29uLm5hbWV9YCk7XG4gICAgICBpZiAoIWljb25TaWduYWwpIHtcbiAgICAgICAgdGhpcy5pY29uUmVnaXN0cnkuc2V0KFxuICAgICAgICAgIGAke2ljb25MaWJyYXJ5fSR7dGhpcy5kZWxpbWl0ZXJ9JHtpY29uLm5hbWV9YCxcbiAgICAgICAgICBzaWduYWwoeyBmZXRjaGVkOiB0cnVlLCBkYXRhOiBpY29uLmRhdGEgfSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoaWNvblNpZ25hbCAmJiAhaWNvblNpZ25hbC5nZXQoKT8uZmV0Y2hlZCkge1xuICAgICAgICBpY29uU2lnbmFsLnNldCh7IGZldGNoZWQ6IHRydWUsIGRhdGE6IGljb24uZGF0YSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgeW91IHRvIG92ZXJyaWRlIHRoZSBsYXp5IGxvYWRpbmcuIERlZmF1bHRzIHRvIGB0cnVlYC5cbiAgICogV2hlbiBgZmFsc2VgIGljb25zIHdpbGwgbm90IGJlIGZldGNoZWQgZnJvbSByZW1vdGUgbG9jYXRpb25zLlxuICAgKi9cbiAgcHVibGljIHNldExhenlMb2FkaW5nKHZhbHVlOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIHRoaXMubGF6eUxvYWRFbmFibGVkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIHlvdSB0byBvdmVycmlkZSB0aGUgdGVzdCBtb2RlLiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgKiBXaGVuIHRydWUgd2FybmluZ3Mgd2lsbCBub3QgYmUgdGhyb3duIGFuZCBubyBmZXRjaGVzIHdpbGwgYmUgbWFkZS5cbiAgICovXG4gIHB1YmxpYyBzZXRUZXN0TW9kZSh2YWx1ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgdGhpcy50ZXN0TW9kZUVuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBTZXRzIGEgbmV3IGN1c3RvbSBmYWxsYmFjayBpY29uICovXG4gIHB1YmxpYyBzZXRGYWxsYmFja0ljb24oZmFsbGJhY2tJY29uOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5mYWxsYmFja0ljb24gPSBmYWxsYmFja0ljb247XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gcmV0cmlldmUgYW4gaWNvbiBmcm9tIHRoZSByZWdpc3RyeS5cbiAgICpcbiAgICogSWYgYSByb290U3ZnSWNvblVybCBoYXMgYmVlbiBzZXQsIHRoaXMgbWV0aG9kIHdpbGxcbiAgICogYXR0ZW1wdCB0byBsb2FkIHRoZSBpY29uIGZyb20gdGhlcmUuIElmIHN1Y2Nlc3NmdWwsXG4gICAqIHRoYXQgc3ZnIHdpbGwgYmUgcmVnaXN0ZXJlZCBmb3IgcmV1c2UuXG4gICAqL1xuICBwdWJsaWMgZ2V0SWNvbihcbiAgICBwYXRoTmFtZTogc3RyaW5nLFxuICAgIGljb25MaWJyYXJ5ID0gJ19kZWZhdWx0JyxcbiAgICBhYm9ydFNpZ25hbD86IEFib3J0U2lnbmFsXG4gICk6IFNpZ25hbDxzdHJpbmcgfCBudWxsPiB7XG4gICAgLy8gSWYgaWNvbiBpcyB1bmRlZmluZWQgaW5zdGFudGx5IHJldHVybiB0aGUgZmFsbGJhY2sgaWNvblxuICAgIGlmIChwYXRoTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gc2lnbmFsKHRoaXMuZmFsbGJhY2tJY29uKTtcbiAgICB9XG4gICAgY29uc3QgcmVnaXN0ZXJlZFNpZ25hbCA9IHRoaXMuaWNvblJlZ2lzdHJ5LmdldChgJHtpY29uTGlicmFyeX0ke3RoaXMuZGVsaW1pdGVyfSR7cGF0aE5hbWV9YCk7XG4gICAgY29uc3QgaWNvblJlZ2lzdGVyZWQgPSAhIXJlZ2lzdGVyZWRTaWduYWw7XG4gICAgLy8gSWYgdGhlIGljb24gaXMgcmVnaXN0ZXJlZCBqdXN0IHJldHVybiBpdFxuICAgIGlmIChpY29uUmVnaXN0ZXJlZCkge1xuICAgICAgcmV0dXJuIGNvbXB1dGVkKHJlZ2lzdGVyZWRTaWduYWwsIChlbnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4gZW50cnk/LmRhdGE7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCBpZiBsYXp5TG9hZEVuYWJsZWQgdGhlbiBhdHRlbXB0IHRvIGZldGNoIGFuZCByZWdpc3RlciB0aGUgaWNvblxuICAgIGVsc2UgaWYgKCFpY29uUmVnaXN0ZXJlZCAmJiB0aGlzLmxhenlMb2FkRW5hYmxlZCkge1xuICAgICAgbGV0IGljb25TaWduYWw6IFNpZ25hbDxJY29uRGF0YT47XG5cbiAgICAgIC8vIExvYWQgZnJvbSBsb2NhbCBzZXJ2ZXIgaWNvbiBjYWNoZSBkdXJpbmcgc3NyIGlmIGl0IGV4aXN0c1xuICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VydmVySWNvbkNhY2hlKSB7XG4gICAgICAgICAgY29uc3QgY2FtZWxOYW1lID0gcGF0aE5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgKGcpID0+IGdbMV0udG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgY29uc3QgaWNvbk5hbWUgPSBgJHtpY29uTGlicmFyeSA9PT0gJ2N4JyA/ICdjeCcgOiAnbXRyJ31JY29uJHtjYW1lbE5hbWVcbiAgICAgICAgICAgIC5jaGFyQXQoMClcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpfSR7Y2FtZWxOYW1lLnNsaWNlKDEpfWA7XG5cbiAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJJY29uQ2FjaGVbaWNvbk5hbWVdIGFzIGFueSkge1xuICAgICAgICAgICAgaWNvblNpZ25hbCA9IHNpZ25hbDxJY29uRGF0YT4oe1xuICAgICAgICAgICAgICBkYXRhOiAodGhpcy5zZXJ2ZXJJY29uQ2FjaGVbaWNvbk5hbWVdIGFzIGFueSk/LmRhdGEsXG4gICAgICAgICAgICAgIGZldGNoZWQ6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlZEZhaWxlZExvYWQoaWNvbkxpYnJhcnksIHBhdGhOYW1lLCBpY29uU2lnbmFsKSBhcyBTaWduYWw8XG4gICAgICAgICAgICAgIHN0cmluZyB8IG51bGxcbiAgICAgICAgICAgID47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIElmIHRoZSBpY29uIGNhY2hlIGRvZXNuJ3QgZXhpc3QganVzdCBkbyBub3RoaW5nIGJlY2F1c2UgdGhlIGljb24gd2lsbCBiZSBsb2FkZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGljb25TaWduYWwgPSBzaWduYWw8SWNvbkRhdGE+KHtcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBmZXRjaGVkOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gSWYgbm90IG9uIHRoZSBzZXJ2ZXIgdGhlbiBmZXRjaCB0aGUgaWNvblxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIFNldCB0aGUgaWNvbiBhcyB0aGUgcmVzdWx0IG9mIHRoZSBhd2FpdCByaWdodCBub3csIGJlZm9yZSB0aGUgZmV0Y2hcbiAgICAgICAgLy8gaXMgaW5pdGlhdGVkLCB0byBwcmV2ZW50IHJlZHVuZGFudCBpbml0aWFsIHF1ZXJpZXMgb24gcGFnZSBsb2FkXG4gICAgICAgIGljb25TaWduYWwgPSBzaWduYWw8SWNvbkRhdGE+KHtcbiAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgIGZldGNoZWQ6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pY29uUmVnaXN0cnkuc2V0KGAke2ljb25MaWJyYXJ5fSR7dGhpcy5kZWxpbWl0ZXJ9JHtwYXRoTmFtZX1gLCBpY29uU2lnbmFsKTtcblxuICAgICAgICB0aGlzLmZldGNoSWNvbihwYXRoTmFtZSwgaWNvbkxpYnJhcnksIGFib3J0U2lnbmFsKS50aGVuKChpY29uKSA9PiB7XG4gICAgICAgICAgaWNvblNpZ25hbC5zZXQoeyBkYXRhOiBpY29uLCBmZXRjaGVkOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXB1dGVkKGljb25TaWduYWwsIChlbnRyeSkgPT4gZW50cnk/LmRhdGEpO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIGp1c3QgYWxlcnQgdGhhdCB0aGUgaWNvbiBpc24ndCByZWdpc3RlcmVkIGFuZCByZXR1cm4gdGhlIGZhbGxiYWNrXG4gICAgZWxzZSBpZiAoIWljb25SZWdpc3RlcmVkICYmICF0aGlzLmxhenlMb2FkRW5hYmxlZCkge1xuICAgICAgY29uc3QgdGVtcCA9IHRoaXMuaGFuZGxlZEZhaWxlZExvYWQoaWNvbkxpYnJhcnksIHBhdGhOYW1lKTtcbiAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBMb2dzIGEgd2FybmluZyBhbmQgcmV0dXJucyBmYWxsYmFjayBpY29uLiBDYWxsIHdoZW4gYXR0ZW1wdCB0byBsb2FkIGljb24gaGFzIGZhaWxlZC4gKi9cbiAgcHJpdmF0ZSBoYW5kbGVkRmFpbGVkTG9hZChpY29uTGlicmFyeSwgcGF0aE5hbWUsIGljb25TaWduYWw/OiBTaWduYWw8SWNvbkRhdGE+KSB7XG4gICAgLy8gQ3JlYXRlIHJldHVybiBzdWJqIGlmIG9uZSBpc24ndCBwYXNzZWRcbiAgICBpZiAoIWljb25TaWduYWwpIHtcbiAgICAgIGljb25TaWduYWwgPSBzaWduYWw8SWNvbkRhdGE+KHtcbiAgICAgICAgZGF0YTogdGhpcy5mYWxsYmFja0ljb24sXG4gICAgICAgIGZldGNoZWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuaWNvblJlZ2lzdHJ5LnNldChgJHtpY29uTGlicmFyeX0ke3RoaXMuZGVsaW1pdGVyfSR7cGF0aE5hbWV9YCwgaWNvblNpZ25hbCk7XG4gICAgaWYgKCF0aGlzLnRlc3RNb2RlRW5hYmxlZCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgTW9ydGFyOiBObyBpY29uIGlzIHJlZ2lzdGVyZWQgZm9yIHRoZSBwYXRoIG5hbWUgXCIke3BhdGhOYW1lfVwiLiBEaWQgeW91IGFkZCBpdCB0byB0aGUgbW9ydGFyIGljb24gcmVnaXN0cnk/YFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXB1dGVkKGljb25TaWduYWwsIChlbnRyeSkgPT4gZW50cnk/LmRhdGEpO1xuICB9XG5cbiAgLyoqIEZldGNoZXMgYW4gaWNvbiBmb3IgdGhlIGdpdmVuIGxpYnJhcnkgYnkgbmFtZSAqL1xuICBwcml2YXRlIGFzeW5jIGZldGNoSWNvbihwYXRoTmFtZTogc3RyaW5nLCBpY29uTGlicmFyeSA9ICdfZGVmYXVsdCcsIGFib3J0U2lnbmFsPzogQWJvcnRTaWduYWwpIHtcbiAgICBpZiAoIXRoaXMudGVzdE1vZGVFbmFibGVkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNvbHZlciA9IHRoaXMuaWNvblVybFJlc29sdmVycy5nZXQoaWNvbkxpYnJhcnkpO1xuICAgICAgICAvLyBJZiBubyByZXNvbHZlciBpcyByZWdpc3RlcmVkIGZvciB0aGUgcmVxdWVzdGVkIGxpYnJhcnlcbiAgICAgICAgaWYgKCFyZXNvbHZlcikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlOiBObyBpY29uVXJsUmVzb2x2ZXIgcmVnaXN0ZXJlZCBmb3IgbGlicmFyeTogXCIke2ljb25MaWJyYXJ5fVwiYFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tJY29uO1xuICAgICAgICB9XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgZmV0Y2ggcmVxdWVzdCBidXQgdG8gbm90IGF3YWl0IHlldFxuICAgICAgICBjb25zdCByZXEgPSBmZXRjaChyZXNvbHZlcihwYXRoTmFtZSksIHsgbWV0aG9kOiAnZ2V0Jywgc2lnbmFsOiBhYm9ydFNpZ25hbCB9KTtcbiAgICAgICAgY29uc3QgcmVzID0gdGhpcy5wYXJzZUljb25EYXRhKHBhdGhOYW1lLCByZXEpO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBJZiB0aGUgZmV0Y2ggZmFpbGVkIGxvZyBhbmQgcmV0dXJuIGZhbGxiYWNrXG4gICAgICAgIGlmIChwYXRoTmFtZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYE10ZUljb25SZWdpc3RyeVNlcnZpY2U6IGZhaWxlZCB0byBsb2FkIGljb246ICR7cGF0aE5hbWV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tJY29uO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mYWxsYmFja0ljb247XG4gIH1cblxuICAvKiogQXN5bmNocm9ub3VzbHkgcGFyc2UgaWNvbiBmZXRjaCByZXNwb25zZSBkYXRhICovXG4gIHByaXZhdGUgcGFyc2VJY29uRGF0YShwYXRoTmFtZTogc3RyaW5nLCByZXE6IFByb21pc2U8UmVzcG9uc2U+KTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVxXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMudGV4dCgpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBhdGhOYW1lKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYE10ZUljb25SZWdpc3RyeVNlcnZpY2U6IGZhaWxlZCB0byBsb2FkIGljb246ICR7cGF0aE5hbWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBHcmFjZWZ1bGx5IHJlc29sdmUgd2l0aCBmYWxsYmFjayBpY29uIG9uIGZhaWxlZCBsb2FkXG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuZmFsbGJhY2tJY29uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIC8vIEdyYWNlZnVsbHkgcmVzb2x2ZSB3aXRoIGZhbGxiYWNrIGljb24gb24gZXJyb3JcbiAgICAgICAgICByZXNvbHZlKHRoaXMuZmFsbGJhY2tJY29uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgTXRlSWNvblJlZ2lzdHJ5U2VydmljZSA9IG5ldyBfTXRlSWNvblJlZ2lzdHJ5U2VydmljZSgpO1xuXG4vKipcbiAqIEluc3RhbmNlIG9mIF9NdGVJY29uUmVnaXN0cnlTZXJ2aWNlIGV4cG9ydGVkIGFzIGEgc2luZ2xldG9uLlxuICpcbiAqIFNlcnZpY2UgdXNlZCB0byByZWdpc3RlciBzdmcgc3RyaW5ncyBmb3IgYSBnaXZlbiBpY29uIG5hbWUgYW5kIHRoZW4gbG9vayB0aGVtIHVwIGJ5IHRoYXQgc2FtZSBuYW1lLlxuICovXG5leHBvcnQgeyBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlIH07XG4iLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYEBrZXlmcmFtZXMgcHJvZ3Jlc3Mtc3Bpbm5lci1hbmltYXRpb257MCV7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX10b3t0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19Omhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0Oi1tb3otZml0LWNvbnRlbnQ7aGVpZ2h0OmZpdC1jb250ZW50O3dpZHRoOi1tb3otZml0LWNvbnRlbnQ7d2lkdGg6Zml0LWNvbnRlbnQ7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5jb250YWluZXJ7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO292ZXJmbG93OnZpc2libGU7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246bWlkZGxlfS5jb250YWluZXIgc3Zne2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6dmlzaWJsZX0uY29udGFpbmVyIHBhdGh7ZmlsbC1vcGFjaXR5OjB9LnRyYWNre3N0cm9rZTpyZ2IodmFyKC0tbXRlLWJvcmRlci0xLXJnYikpfS5iYXJ7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3N0cm9rZTpyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWJhc2UtcmdiKSl9LmJhciBwYXRoe3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zaXRpb246c3Ryb2tlLWRhc2hvZmZzZXQgLjJzIGN1YmljLWJlemllciguNCwwLC4yLDEpIDBtczt3aWxsLWNoYW5nZTpzdHJva2UtZGFzaG9mZnNldH06aG9zdChbd2l0aG91dEFuaW1hdGlvbl0pIC5iYXIgcGF0aHt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fTpob3N0KFtpbmRldGVybWluYXRlXSl7YW5pbWF0aW9uOnByb2dyZXNzLXNwaW5uZXItYW5pbWF0aW9uIC41cyBsaW5lYXIgaW5maW5pdGV9Omhvc3QoW2luZGV0ZXJtaW5hdGVdKSAuYmFyIHBhdGh7dHJhbnNpdGlvbjpub25lfTpob3N0KFtjb2xvcj1wcmltYXJ5XSkgLmJhcntzdHJva2U6cmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1zZWNvbmRhcnldKSAuYmFye3N0cm9rZTpyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9dGVydGlhcnldKSAuYmFye3N0cm9rZTpyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1zdWNjZXNzXSkgLmJhcntzdHJva2U6cmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj13YXJuaW5nXSkgLmJhcntzdHJva2U6cmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1iYXNlLXJnYikpfTpob3N0KFtjb2xvcj1kYW5nZXJdKSAuYmFye3N0cm9rZTpyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItYmFzZS1yZ2IpKX1AbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey5iYXIgcGF0aHt0cmFuc2l0aW9uOm5vbmV9Omhvc3QoW2luZGV0ZXJtaW5hdGVdKXthbmltYXRpb246bm9uZX19YDsiLCAiLyoqXG4gKiBCYXNlIHJlZmVyZW5jZSBzaXplIG9mIHRoZSBzcGlubmVyLlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgU1BJTk5FUl9CQVNFX1NJWkUgPSAxMDA7XG4iLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBkZWZpbmVFbGVtZW50IH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBNdGVQcm9ncmVzc1NwaW5uZXIgfSBmcm9tICcuL3Byb2dyZXNzLXNwaW5uZXIuZWxlbWVudCc7XG5cbi8qKlxuICogVGhpcyBpcyBhIGNvbXBvbmVudCBkZWZpbml0aW9uIHRvIGJlIHVzZWQgYXMgYSBjb252ZW5pZW5jZSByZWZlcmVuY2UgdG8gY3JlYXRlIGFuXG4gKiBpbmRldGVybWluYXRlIGA8bXRyLXByb2dyZXNzLXNwaW5uZXI+YCBpbnN0YW5jZS5cbiAqXG4gKiBAY3NzcGFydCBjb250YWluZXIgLSBJbm5lciBjb250YWluZXIgZWxlbWVudCB0aGF0IGhvdXNlcyB0aGUgdHJhY2sgYW5kIGJhclxuICogQGNzc3BhcnQgdHJhY2sgLSBUaGUgdHJhY2sgYmVoaW5kIHRoZSBmaWxsZWQgYmFyXG4gKiBAY3NzcGFydCBiYXIgLSBUaGUgZmlsbGVkIHBvcnRpb24gb2YgdGhlIHNwaW5uZXJcbiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS1zcGlubmVyJylcbmV4cG9ydCBjbGFzcyBNdGVTcGlubmVyIGV4dGVuZHMgTXRlUHJvZ3Jlc3NTcGlubmVyIHtcbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBvdmVycmlkZSBpbmRldGVybWluYXRlID0gdHJ1ZTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLXNwaW5uZXInOiBNdGVQcm9ncmVzc1NwaW5uZXI7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQgeyBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMsIGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRCdXR0b25Cb3JkZXJGYWN0b3J5ID0gKHdpZHRoPywgY29sb3I/LCBzdHlsZT8pID0+XG4gIGAke3N0eWxlID8/ICdzb2xpZCd9ICR7XG4gICAgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzKFtcbiAgICAgIHsgcHJvcDogJ2JvcmRlcldpZHRoJywgdmFsdWU6IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUod2lkdGggPz8gJzFweCcpIH0sXG4gICAgXSlbMF0/LnZhbHVlXG4gIH0gJHtkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKGNvbG9yKSA/PyBjb25maWcuY29sb3IuYm9yZGVyMX1gO1xuIiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLXBhZGRpbmcteTp2YXIoLS1tdGUtc3BhY2Utc20pOy0tcGFkZGluZy14OnZhcigtLXBhZGRpbmcteSk7LS1ib3JkZXItcmFkaXVzOnZhcigtLWdyb3VwLXJhZGl1cyx2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1mdWxsKSk7LS1mb2N1cy1yYWRpdXM6dmFyKC0tZ3JvdXAtZm9jdXMtcmFkaXVzLHZhcigtLW10ZS1ib3JkZXItcmFkaXVzLWZ1bGwpKTstLWljb24tc2l6ZToxNnB4Oy0tY29sb3I6aW5oZXJpdH06aG9zdChbcmFkaXVzPXNtXSl7LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXNtKTstLWZvY3VzLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCl9Omhvc3QgbXRlLWljb257aGVpZ2h0OnZhcigtLWljb24tc2l6ZSk7bWluLWhlaWdodDp2YXIoLS1pY29uLXNpemUpO21pbi13aWR0aDp2YXIoLS1pY29uLXNpemUpO3dpZHRoOnZhcigtLWljb24tc2l6ZSl9Omhvc3QoW3NpemU9c21dKSBtdGUtaWNvbnstLWljb24tc2l6ZToxMnB4fTpob3N0KFtzaXplPWxnXSkgbXRlLWljb257LS1pY29uLXNpemU6MjBweH1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1jb2xvcjp2YXIoLS1tdGUtbGlnaHQpOy0tYmFja2dyb3VuZDp2YXIoLS1tdGUtZGFyayk7LS16LWluZGV4OnZhcigtLW10ZS16LWluZGV4LTIwKTstLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14bCk7LS1wYWRkaW5nLXg6dmFyKC0tbXRlLXNwYWNlLW1kKTstLXBhZGRpbmcteTp2YXIoLS1tdGUtc3BhY2Utc20pO3BvaW50ZXItZXZlbnRzOmF1dG99LnRvb2x0aXB7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2JvcmRlci1yYWRpdXM6dmFyKC0tcmFkaXVzKTtjb2xvcjp2YXIoLS1jb2xvcik7ZGlzcGxheTpub25lO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtd2VpZ2h0KTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1saW5lLWhlaWdodCk7bWF4LXdpZHRoOjI1MHB4O29wYWNpdHk6MDtwYWRkaW5nOnZhcigtLXBhZGRpbmcteSkgdmFyKC0tcGFkZGluZy14KTtwb3NpdGlvbjpmaXhlZDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7ei1pbmRleDp2YXIoLS16LWluZGV4KX0uYXJyb3csLnRvb2x0aXB7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKX0uYXJyb3d7aGVpZ2h0OjEwcHg7cG9zaXRpb246YWJzb2x1dGU7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7d2lkdGg6MTBweH1gOyIsICJpbXBvcnQgeyBNdGVPdmVybGF5UGxhY2VtZW50LCBNdGVPdmVybGF5UG9zaXRpb24gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSAnQGZsb2F0aW5nLXVpL2RvbSc7XG5cbi8qKiBDYWxjdWxhdGVzIG9wdGltYWwgZmxvYXRpbmctdWkgb3ZlcmxheXMgZm9yIHRoZSBjdXJyZW50IHBvc2l0aW9uICovXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlT3ZlcmxheVBsYWNlbWVudHMgPSAoXG4gIHBvc2l0aW9uOiBNdGVPdmVybGF5UG9zaXRpb24sXG4gIHBsYWNlbWVudDogTXRlT3ZlcmxheVBsYWNlbWVudCA9ICdjZW50ZXInXG4pOiBbUGxhY2VtZW50LCBQbGFjZW1lbnRbXV0gPT4ge1xuICBjb25zdCBnZXRGYWxsYmFja0dyb3VwID0gKFxuICAgIHBvc2l0aW9uOiBNdGVPdmVybGF5UG9zaXRpb24sXG4gICAgcHJlZmVycmVkUGxhY2VtZW50OiBNdGVPdmVybGF5UGxhY2VtZW50LFxuICAgIHByaW1hcnlQb3NpdGlvbjogc3RyaW5nXG4gICk6IFBsYWNlbWVudFtdID0+IHtcbiAgICBpZiAocHJpbWFyeVBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ3RvcCcgfHwgcG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgIHByZWZlcnJlZFBsYWNlbWVudCA9ICdzdGFydCc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcmltYXJ5UG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ3RvcCcgfHwgcG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgIHByZWZlcnJlZFBsYWNlbWVudCA9ICdlbmQnO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBhbGlnbk9yZGVyID1cbiAgICAgIHByZWZlcnJlZFBsYWNlbWVudCA9PT0gJ2NlbnRlcidcbiAgICAgICAgPyBbJycsICctZW5kJywgJy1zdGFydCddXG4gICAgICAgIDogcHJlZmVycmVkUGxhY2VtZW50ID09PSAnc3RhcnQnXG4gICAgICAgID8gWyctc3RhcnQnLCAnJywgJy1lbmQnXVxuICAgICAgICA6IFsnLWVuZCcsICcnLCAnLXN0YXJ0J107XG4gICAgcmV0dXJuIGFsaWduT3JkZXJcbiAgICAgIC5tYXAoKGFsaWduKSA9PiBgJHtwb3NpdGlvbn0ke2FsaWdufWAgYXMgUGxhY2VtZW50KVxuICAgICAgLmZpbHRlcigocGxhY2VtZW50KSA9PiBwbGFjZW1lbnQgIT09IHByaW1hcnlQb3NpdGlvbik7XG4gIH07XG5cbiAgY29uc3QgcHJlZmVycmVkID0gYCR7cG9zaXRpb259JHtcbiAgICBwbGFjZW1lbnQgPT09ICdlbmQnID8gJy1lbmQnIDogcGxhY2VtZW50ID09PSAnc3RhcnQnID8gJy1zdGFydCcgOiAnJ1xuICB9YCBhcyBQbGFjZW1lbnQ7XG5cbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICByZXR1cm4gW1xuICAgICAgICBwcmVmZXJyZWQsXG4gICAgICAgIFtcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCdib3R0b20nLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgndG9wJywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ3JpZ2h0JywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ2xlZnQnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgIF0sXG4gICAgICBdO1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgcHJlZmVycmVkLFxuICAgICAgICBbXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgnbGVmdCcsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCdyaWdodCcsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCd0b3AnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgnYm90dG9tJywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICBdLFxuICAgICAgXTtcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICByZXR1cm4gW1xuICAgICAgICBwcmVmZXJyZWQsXG4gICAgICAgIFtcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCdyaWdodCcsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCdsZWZ0JywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ3RvcCcsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCdib3R0b20nLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgIF0sXG4gICAgICBdO1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHByZWZlcnJlZCxcbiAgICAgICAgW1xuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ3RvcCcsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCdib3R0b20nLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgncmlnaHQnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgnbGVmdCcsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgXSxcbiAgICAgIF07XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVEZWZhdWx0UGFuZWxBbmltYXRpb24gPSAoXG4gIHJlbmRlcmVkUGxhY2VtZW50OiBQbGFjZW1lbnQsXG4gIG9wdGlvbnM6IHtcbiAgICBmYWxsYmFja1Bvc2l0aW9uOiBzdHJpbmc7XG4gICAgZmFsbGJhY2tQbGFjZW1lbnQ6IHN0cmluZztcbiAgICBhY3Rpb246ICdvcGVuJyB8ICdjbG9zZSc7XG4gICAgc2NhbGVYPzogbnVtYmVyO1xuICAgIHNjYWxlWT86IG51bWJlcjtcbiAgfVxuKSA9PiB7XG4gIGNvbnN0IHNjYWxlWCA9IG9wdGlvbnMuc2NhbGVYID8/IDAuOTtcbiAgY29uc3Qgc2NhbGVZID0gb3B0aW9ucy5zY2FsZVkgPz8gbnVsbDtcbiAgbGV0IHBvc2l0aW9uID0gb3B0aW9ucy5mYWxsYmFja1Bvc2l0aW9uO1xuICBsZXQgcGxhY2VtZW50ID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudDtcbiAgaWYgKHJlbmRlcmVkUGxhY2VtZW50KSB7XG4gICAgY29uc3QgW3BhLCBwYl0gPSByZW5kZXJlZFBsYWNlbWVudC5zcGxpdCgnLScpO1xuICAgIHBvc2l0aW9uID0gcGE7XG4gICAgcGxhY2VtZW50ID0gcGI7XG4gIH1cblxuICBsZXQgdHJhbnNsYXRlWSA9IG51bGw7XG4gIGlmIChwb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICB0cmFuc2xhdGVZID0gJzEwJSc7XG4gIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgdHJhbnNsYXRlWSA9ICctMTAlJztcbiAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gJ3JpZ2h0JyB8fCBwb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgaWYgKHBsYWNlbWVudCA9PT0gJ3N0YXJ0Jykge1xuICAgICAgdHJhbnNsYXRlWSA9ICctNSUnO1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSAnZW5kJykge1xuICAgICAgdHJhbnNsYXRlWSA9ICc1JSc7XG4gICAgfVxuICB9XG5cbiAgbGV0IHRyYW5zbGF0ZVggPSAnJztcbiAgaWYgKHBvc2l0aW9uID09PSAndG9wJyB8fCBwb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICBpZiAocGxhY2VtZW50ID09PSAnc3RhcnQnKSB7XG4gICAgICB0cmFuc2xhdGVYID0gJy01JSc7XG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09ICdlbmQnKSB7XG4gICAgICB0cmFuc2xhdGVYID0gJzUlJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICB0cmFuc2xhdGVYID0gJy0xMCUnO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgdHJhbnNsYXRlWCA9ICcxMCUnO1xuICAgIH1cbiAgfVxuICBpZiAob3B0aW9ucy5hY3Rpb24gPT09ICdvcGVuJykge1xuICAgIHJldHVybiB7XG4gICAgICBzY2FsZVg6IFtzY2FsZVgsIDFdLFxuICAgICAgc2NhbGVZOiBzY2FsZVkgPyBbc2NhbGVZLCAxXSA6IHVuZGVmaW5lZCxcbiAgICAgIHRyYW5zbGF0ZVg6IFt0cmFuc2xhdGVYLCAnMCUnXSxcbiAgICAgIHRyYW5zbGF0ZVk6IHRyYW5zbGF0ZVkgPyBbdHJhbnNsYXRlWSwgJzAlJ10gOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NhbGVYOiBbMSwgc2NhbGVYXSxcbiAgICAgIHNjYWxlWTogc2NhbGVZID8gWzEsIHNjYWxlWV0gOiB1bmRlZmluZWQsXG4gICAgICB0cmFuc2xhdGVYOiBbJzAlJywgdHJhbnNsYXRlWF0sXG4gICAgICB0cmFuc2xhdGVZOiB0cmFuc2xhdGVZID8gWycwJScsIHRyYW5zbGF0ZVldIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cbn07XG4iLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmNvbnRlbnRzfXNsb3RbbmFtZT1vdmVybGF5XTo6c2xvdHRlZCgqKXtwb3NpdGlvbjphYnNvbHV0ZX1gOyIsICJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgYmFzZVN0eWxlcywgZGVmaW5lRWxlbWVudCwgTXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9kZXNjcmlwdGlvbi5zdHlsZXMnO1xuXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuLyoqXG4gKiBFbGVtZW50IHVzZWQgdG8gcmVwcmVzZW50IGRlc2NyaXB0aW9uIG1lc3NhZ2luZyB0ZXh0XG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtZGVzY3JpcHRpb24nKVxuZXhwb3J0IGNsYXNzIE10ZURlc2NyaXB0aW9uIGV4dGVuZHMgTXRlRWxlbWVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbYmFzZVN0eWxlcywgc3R5bGVzXTtcblxuICAvKiogRGVmYXVsdCB1bmlxdWUgSUQgZm9yIHRoaXMgaGludCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGlkID0gYG10ZS1kZXNjcmlwdGlvbi0tJHtuZXh0VW5pcXVlSWQrK31gO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGAke3RoaXMuaW5zdGFuY2VTdHlsZXN9PHNsb3Q+PC9zbG90PmA7XG4gIH1cbn1cblxuLyoqXG4gKiBFbGVtZW50IHVzZWQgdG8gcmVwcmVzZW50IGRlc2NyaXB0aW9uIG1lc3NhZ2luZyB0ZXh0XG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtZGVzY3JpcHRpb24tdGV4dCcpXG5leHBvcnQgY2xhc3MgTXRlRGVzY3JpcHRpb25UZXh0IGV4dGVuZHMgTXRlRGVzY3JpcHRpb24ge31cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLWRlc2NyaXB0aW9uJzogTXRlRGVzY3JpcHRpb247XG4gICAgJ210ZS1kZXNjcmlwdGlvbi10ZXh0JzogTXRlRGVzY3JpcHRpb25UZXh0O1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtjb2xvcjp2YXIoLS1tdGUtaW5rLTIpO2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWxpbmUtaGVpZ2h0KTttYXJnaW46dmFyKC0tbXRlLXNwYWNlLXhzKSAwO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7d2lkdGg6MTAwJX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItbGlnaHRlci1yZ2IpKTtib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXhzKTtjb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtcmdiKSk7ZGlzcGxheTpmbGV4O2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtd2VpZ2h0KTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtnYXA6dmFyKC0tbXRlLXNwYWNlLXhzKTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1saW5lLWhlaWdodCk7bWFyZ2luOnZhcigtLW10ZS1zcGFjZS14cykgMDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowIHZhcigtLW10ZS1zcGFjZS14cyk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt3aWR0aDoxMDAlfWA7IiwgImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBiYXNlU3R5bGVzLCBkZWZpbmVFbGVtZW50LCBNdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vY29yZS8nO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9oaW50LnN0eWxlcyc7XG5cbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG4vKipcbiAqIEVsZW1lbnQgdXNlZCB0byByZXByZXNlbnQgaGludCBtZXNzYWdpbmcgdGV4dFxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLWhpbnQnKVxuZXhwb3J0IGNsYXNzIE10ZUhpbnQgZXh0ZW5kcyBNdGVFbGVtZW50IHtcbiAgc3RhdGljIHN0eWxlcyA9IFtiYXNlU3R5bGVzLCBzdHlsZXNdO1xuXG4gIC8qKiBEZWZhdWx0IHVuaXF1ZSBJRCBmb3IgdGhpcyBoaW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgaWQgPSBgbXRlLWhpbnQtLSR7bmV4dFVuaXF1ZUlkKyt9YDtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgJHt0aGlzLmluc3RhbmNlU3R5bGVzfTxzbG90Pjwvc2xvdD5gO1xuICB9XG59XG5cbi8qKlxuICogRWxlbWVudCB1c2VkIHRvIHJlcHJlc2VudCBoaW50IG1lc3NhZ2luZyB0ZXh0XG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtaGludC10ZXh0JylcbmV4cG9ydCBjbGFzcyBNdGVIaW50VGV4dCBleHRlbmRzIE10ZUhpbnQge31cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLWhpbnQnOiBNdGVIaW50O1xuICAgICdtdGUtaGludC10ZXh0JzogTXRlSGludFRleHQ7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2NvbG9yOnZhcigtLW10ZS1pbmstMik7ZGlzcGxheTpibG9jaztmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXdlaWdodCk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tbGluZS1oZWlnaHQpO21hcmdpbjp2YXIoLS1tdGUtc3BhY2UteHMpIDA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7d2lkdGg6MTAwJX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjppbmhlcml0O2N1cnNvcjppbmhlcml0O2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXdlaWdodCk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtd2VpZ2h0LWJvbGQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1saW5lLWhlaWdodCk7bWFyZ2luOnZhcigtLW10ZS1zcGFjZS14cykgMDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0fTpob3N0KFtkaXNhYmxlZF0pe2NvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC00KTtjdXJzb3I6bm90LWFsbG93ZWR9LnJlcXVpcmVke2NvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKTtwYWRkaW5nLWxlZnQ6dmFyKC0tbXRlLXNwYWNlLXhzKX1gOyIsICJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IE10ZUVsZW1lbnQsIGRlZmluZUVsZW1lbnQsIE10ZUVsZW1lbnRQYXJ0cywgYmFzZVN0eWxlcyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi92aXN1YWxseS1oaWRkZW4uc3R5bGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBNdGVWaXN1YWxseUhpZGRlblBhcnRzIGV4dGVuZHMgTXRlRWxlbWVudFBhcnRzIHt9XG5cbi8qKlxuICogQHNsb3QgLSBUaGUgY29udGVudCB0byBiZSB2aXN1YWxseSBoaWRkZW4uXG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtdmlzdWFsbHktaGlkZGVuJylcbmV4cG9ydCBjbGFzcyBNdGVWaXN1YWxseUhpZGRlbiBleHRlbmRzIE10ZUVsZW1lbnQge1xuICBzdGF0aWMgc3R5bGVzID0gW2Jhc2VTdHlsZXMsIHN0eWxlc107XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxzbG90Pjwvc2xvdD5gO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS12aXN1YWxseS1oaWRkZW4nOiBNdGVWaXN1YWxseUhpZGRlbjtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdCg6bm90KDpmb2N1cy13aXRoaW4pKXtoZWlnaHQ6MXB4IWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7d2lkdGg6MXB4IWltcG9ydGFudDtjbGlwOnJlY3QoMCAwIDAgMCkhaW1wb3J0YW50O2JvcmRlcjpub25lIWltcG9ydGFudDtjbGlwLXBhdGg6aW5zZXQoNTAlKSFpbXBvcnRhbnQ7b3ZlcmZsb3c6aGlkZGVuIWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50O3doaXRlLXNwYWNlOm5vd3JhcCFpbXBvcnRhbnR9YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLElBQUFBLGVBQXFCO0FBQ3JC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REMsVUEwREM7QUFHb0I7TUFBL0IsOEJBQVMsRUFBRSxXQUFXLE1BQU0sQ0FBQztHQTdEbkIsVUE2RHFCO0FBR2hCO0VBQWYsYUFBYTtHQWhFSCxVQWdFSztBQUdBO0VBQWYsYUFBYTtHQW5FSCxVQW1FSztBQUdBO0VBQWYsYUFBYTtHQXRFSCxVQXNFSztBQUVDO01BQWhCLDJCQUFNLFFBQVE7R0F4RUosVUF3RU07QUFVakI7RUFEQyxTQUFTLENBQUMsU0FBUyxPQUFPLE9BQU8sY0FBYyxHQUFHLEVBQUUsSUFBSSxPQUFPLENBQUM7R0FqRnRELFVBa0ZYO0FBd0JNO0VBREwsU0FBUyxDQUFDLGlCQUFpQixHQUFHLEVBQUUsSUFBSSxPQUFPLENBQUM7R0F6R2xDLFVBMEdMO0FBUU47RUFEQyxTQUFTLENBQUMsTUFBTSxHQUFHLEVBQUUsSUFBSSxPQUFPLENBQUM7R0FqSHZCLFVBa0hYO0FBbEhXLFlBQU47RUFETixjQUFjLFlBQVk7R0FDZDsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfc3R5bGVzIiwgImltcG9ydF9zdHlsZXMiLCAiYWNjIiwgInN0eWxlTWFwIiwgInByb3AiLCAidmFsdWUiLCAic3R5bGVzIiwgImRlcCIsICJzdHlsZU1hcCIsICJpbXBvcnRfc3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X3N0eWxlcyIsICJnZXR0ZXJDb25maWciLCAib2JzZXJ2ZXIiLCAiZSIsICJzZXR0ZXJDb25maWciLCAiY3NzVmFyIiwgIm9ic2VydmVyIiwgInBvcnRhbENvbnRyb2xsZXIiLCAiZWxlbWVudCIsICJzY3JvbGxYIiwgInNjcm9sbFkiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAicHJlc2V0IiwgIm9wdGlvbnMiLCAiaW1wb3J0X2NvbnRleHQiLCAiY29udGV4dCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9zdHlsZXMiLCAic3R5bGVNYXAiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfaWZfZGVmaW5lZCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2NsYXNzX21hcCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgIm5vZGUiLCAib2JzZXJ2ZXIiLCAic3RhdGUiLCAiaW1wb3J0X2lzX3NlcnZlciIsICJvYnNlcnZlciIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9mb3JtX2NvbnRyb2wiLCAiaW1wb3J0X2lmX2RlZmluZWQiLCAiaW1wb3J0X2Zvcm1fY29udHJvbCIsICJpbXBvcnRfZm9ybV9oZWxwZXJzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2lmX2RlZmluZWQiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImljb25MaWJyYXJ5IiwgImltcG9ydF91bnNhZmVfc3ZnIiwgImltcG9ydF9zdHlsZXMiLCAic3R5bGVzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAic3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X3N0eWxlcyIsICJzdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfc3R5bGVzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAicG9zaXRpb24iLCAicGxhY2VtZW50IiwgIm5leHRVbmlxdWVJZCIsICJwbGFjZW1lbnQiLCAiYW5pbWUiLCAic3R5bGVzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAibmV4dFVuaXF1ZUlkIiwgInN0eWxlcyIsICJpbXBvcnRfc3R5bGVzIiwgInN0eWxlcyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgIm5leHRVbmlxdWVJZCIsICJzdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfaWZfZGVmaW5lZCIsICJpbXBvcnRfaWNvbnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAibmV4dFVuaXF1ZUlkIiwgInN0eWxlcyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgIm5leHRVbmlxdWVJZCIsICJzdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJuZXh0VW5pcXVlSWQiLCAic3R5bGVzIiwgImltcG9ydF9pY29ucyIsICJuZXh0VW5pcXVlSWQiLCAic3R5bGVzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAic3R5bGVzIiwgImltcG9ydF93aGVuIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X2NsYXNzX21hcCIsICJzdHlsZXMiXQp9Cg==
