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

// src/bespoke/heb/index.ts
var heb_exports = {};
__export(heb_exports, {
  MteHeb: () => MteHeb
});
module.exports = __toCommonJS(heb_exports);

// src/bespoke/heb/heb.element.ts
var import_lit14 = require("lit");

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
var parseSelectors = (styles8, selectors) => {
  if (!selectors) {
    return styles8;
  } else {
    return `${styles8}${selectors.reduce((acc, { selector, selectorWrapper, style }) => {
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
  let styles8 = "";
  [...instanceStylesMap.entries()].filter(([key, _]) => key !== "se" && key !== "sp").sort((a, b) => b[0] - a[0]).forEach(([_, selectors]) => {
    styles8 = parseSelectors(styles8, selectors);
  });
  styles8 = `${styles8}${parseSelectors("", instanceStylesMap.get("se"))}${parseSelectors(
    "",
    instanceStylesMap.get("sp")
  )}`;
  return styles8;
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

// src/core/presets/preset.decorator.ts
var import_property = require("@lit/reactive-element/decorators/property.js");

// src/core/presets/preset.context.ts
var import_context2 = require("@lit-labs/context");
var presetContext = (0, import_context2.createContext)("MTE_PRESET");

// src/core/controllers/applied-preset-context.controller.ts
var globalPreset$ = MtePresetService.selectPreset("global");
var globalPresetName$ = computed(globalPreset$, (preset) => preset.preset);

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

// src/core/mixins/tabindex.mixin.ts
var import_decorators7 = require("lit/decorators.js");

// src/core/mixins/style-parts.mixin.ts
var import_decorators8 = require("lit/decorators.js");
var import_styles6 = require("@mortar/styles");

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

// src/bespoke/heb/heb.element.ts
var MteHeb = class extends MteElement {
  render() {
    return import_lit14.html`${this.instanceStyles}H-E-B`;
  }
};
MteHeb.styles = [
  styles7,
  import_lit14.css` :host { white-space: nowrap; display: inline; } `
];
MteHeb = __decorateClass([
  defineElement("mte-heb")
], MteHeb);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2Jlc3Bva2UvaGViL2luZGV4LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9iZXNwb2tlL2hlYiIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9iYXNlLWNsYXNzZXMvbXRlLmVsZW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Nzcy1pbi1qcy9jc3MtaW4tanMucHJvcGVydHktbWFwcGVycy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS91dGlsaXRpZXMvY3NzLWluLWpzL2Nzcy1pbi1qcy51dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Vudmlyb25tZW50LnV0aWxpdGllcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS91dGlsaXRpZXMvZm9ybS51dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL3JlYWN0aXZlLXNpZ25hbC50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9iYXNlLWNsYXNzZXMvY29udGVudC5iYXNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2F0dHJpYnV0ZS1jb252ZXJ0ZXIvcmVzcG9uc2l2ZS1hdHRyaWJ1dGUuY29udmVydGVyLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbnN0YW50cy9oZWItbG9nby50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy90aGVtZS5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZpY2VzL3BvcnRhbC5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZpY2VzL2hpc3RvcnktYXBpLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc2VydmljZXMvbG9jYWxpemUuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2J1dHRvbi9idXR0b24ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2ljb24vaWNvbi5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90b29sYmFyL3Rvb2xiYXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2NhcmQvY2FyZC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdHJlZS90cmVlLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90YWcvdGFnLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9iYWRnZS9iYWRnZS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbGluay9saW5rLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hbGVydC9hbGVydC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvaW5wdXQvaW5wdXQucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2RyYXdlci9kcmF3ZXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2FzaWRlL2FzaWRlLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9icmVhZGNydW1icy9icmVhZGNydW1iLWl0ZW0ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL21vZGFsL21vZGFsLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jaGVja2JveC9jaGVja2JveC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcmFkaW8vcmFkaW8ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdi9uYXYucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3N3aXRjaC9zd2l0Y2gucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdGl2ZS1zZWxlY3QvbmF0aXZlLXNlbGVjdC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGV4dGFyZWEvdGV4dGFyZWEucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3NrZWxldG9uL3NrZWxldG9uLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zbGlkZXIvc2xpZGVyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zZWdtZW50ZWQtY29udHJvbC9zZWdtZW50ZWQtY29udHJvbC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0LmRlY29yYXRvci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5jb250ZXh0LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbnRyb2xsZXJzL2FwcGxpZWQtcHJlc2V0LWNvbnRleHQuY29udHJvbGxlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9kZWNvcmF0b3JzL2RlZmluZS1lbGVtZW50LmRlY29yYXRvci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZGVuc2l0eS5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2Rpc2FibGVkLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9pbnZlcnNlLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9pbnZlcnNlLm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvdGFiaW5kZXgubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3N0eWxlLXBhcnRzLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvYnV0dG9uLm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvb3ZlcmxheS5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvb3ZlcmxheS5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9maWVsZHNldC5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9mb3JtLWZpZWxkLm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvYXV0by1hY3RpdmUtbGluay5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvc2xvdC1vYnNlcnZlci5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvY2hlY2tib3gubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL21hcHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL2FvbS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvbXV0YXRpb24tb2JzZXJ2ZXJzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy91dGlscy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvVmFsaWRpdHlTdGF0ZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvQ3VzdG9tU3RhdGVTZXQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL0hUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9wYXRjaC1mb3JtLXByb3RvdHlwZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvZWxlbWVudC1pbnRlcm5hbHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2xhbmcubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3dhaXQtZm9yLWZ3Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3N0eWxlcyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zdHlsZXMvYmFzZS5zdHlsZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCAqIGZyb20gJy4vaGViLmVsZW1lbnQnO1xuIiwgbnVsbCwgIi8qIGVzbGludC1kaXNhYmxlIHdjL25vLXNlbGYtY2xhc3MgKi9cbmltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgc2VsZWN0b3JGYWN0b3J5LCBTZWxlY3RvckZhY3RvcnkgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQge1xuICBjb25zdHJ1Y3RJbnN0YW5jZVN0eWxlcyxcbiAgZ2VuZXJhdGVTZWxlY3RvcnNGcm9tU3R5bGVNYXAsXG4gIFNlbGVjdG9yU3R5bGVzLFxuICBTdHlsZU1hcCxcbiAgVW5zdWJzY3JpYmVyLFxufSBmcm9tICcuLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgdW5zYWZlSFRNTCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvdW5zYWZlLWh0bWwuanMnO1xuaW1wb3J0IHsgTW9ydGFyUHJlc2V0VGhlbWUgfSBmcm9tICcuLi9wcmVzZXRzJztcblxuLy8gRGlzYWJsZSB0aGlzIHdhcm5pbmcgZm9yIG5vdyBieSBwcmUtbWFya2luZyBpdCBhcyBpc3N1ZWQgc28gdXNlcnMgZG9uJ3QgaGF2ZSB0byBzZWUgaXRcbi8vIFRPRE86IEFzayBsaXQgdGVhbSB3aHkgdGhpcyBpcyB0aHJvd24gZXZlcnl3aGVyZSBhbmQgd2hhdCBhbHRlcm5hdGl2ZXMgYXJlIGZvciBwcmVzZXQgc29sdXRpb25cbmdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MgPz89IG5ldyBTZXQoKTtcbmdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MuYWRkKFxuICAnT3ZlcnJpZGluZyBSZWFjdGl2ZUVsZW1lbnQuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKCkgaXMgZGVwcmVjYXRlZC4gVGhlIG92ZXJyaWRlIHdpbGwgbm90IGJlIGNhbGxlZCB3aXRoIHN0YW5kYXJkIGRlY29yYXRvcnMgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvbm8tb3ZlcnJpZGUtZ2V0LXByb3BlcnR5LWRlc2NyaXB0b3IgZm9yIG1vcmUgaW5mb3JtYXRpb24uJ1xuKTtcblxuZXhwb3J0IGNsYXNzIE10ZUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHJpdmF0ZSBfX2luc3RhbmNlU3R5bGVTaGVldE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBTZWxlY3RvclN0eWxlc1tdPigpO1xuICBwcml2YXRlIF9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUgPSBmYWxzZTtcblxuICAvKiogU2V0IHRvIHRydWUgd2hlbiBmaXJzdFVwZGF0ZWQgaXMgZmlyc3QgY2FsbGVkICovXG4gIHByb3RlY3RlZCBfX2ZpcnN0VXBkYXRlZCA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBpbnN0YW5jZVN0eWxlcztcblxuICAvKipcbiAgICogQWxsIHN1YnMgcHVzaGVkIHRvIHRoaXMgYXJyYXkgd2lsbCBiZSBjbGVhcmVkIGluIHRoZSBkaXNjb25uZWN0ZWRDYWxsYmFja1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdWJzOiBVbnN1YnNjcmliZXJbXSA9IFtdO1xuXG4gIC8qKiBTdHlsZSBtYXBwaW5ncyB0aGF0IGFyZSBhcHBsaWVkIHRvIHRoZSBob3N0IGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgcmVmbGVjdDogdHJ1ZSB9KSBzZT86IFN0eWxlTWFwO1xuXG4gIC8qKlxuICAgKiBUaGUgdGhlbWUgdG8gdXNlIGZvciBzdHlsaW5nIHRoaXMgY29tcG9uZW50LiBPdmVycmlkZXMgdGhlIGdsb2JhbCBwcmVzZXQgZm9yIHRoaXMgaW5zdGFuY2Ugb2YgdGhpcyBjb21wb25lbnQuXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGF0dHJpYnV0ZTogJ2RhdGEtbXRlLXRoZW1lJyB9KVxuICBzZXQgdGhlbWUodGhlbWU6IHN0cmluZykge1xuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5fdGhlbWU7XG4gICAgdGhpcy5fdGhlbWUgPSB0aGVtZTtcbiAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ3RoZW1lJywgb2xkVmFsdWUpO1xuICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgYSBiZXR0ZXIgd2F5IHRvIHNvbHZlIHRoaXMgZm9yIGFsbCBwcmVzZXRzXG4gICAgaWYgKHRoaXMuX19sb2NhbFByZXNldFRoZW1lKSB7XG4gICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBudWxsKSk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4gdGhpcy5yZXF1ZXN0VXBkYXRlKCd0aGVtZScsIG51bGwpKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHRoZW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lID8/IHRoaXMuX19sb2NhbFByZXNldFRoZW1lPy5uYW1lO1xuICB9XG4gIHByaXZhdGUgX3RoZW1lOiBzdHJpbmc7XG5cbiAgLyoqIFVzZWQgdG8gZGVjbGFyZSBhIGxvY2FsIHRoZW1lIHZhbHVlIGRldGVybWluZWQgYnkgdGhlIGxvY2FsIHByZXNldCBpZiBpdCBpcyBzZXQuICovXG4gIEBzdGF0ZSgpIHByb3RlY3RlZCBfX2xvY2FsUHJlc2V0VGhlbWU6IE1vcnRhclByZXNldFRoZW1lO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIHNlbGVjdG9yIHRvIGhhdmUgaW5zdGFuY2Ugc3R5bGVzIHRhcmdldCBhIHNwZWNpZmljIGlubmVyIGVsZW1lbnQuXG4gICAqIFVzZWZ1bCBpbiBzcGVjaWZpYyBzY2VuYXJpb3Mgd2hlcmUgZm9jdXMgaXMgZGVsZWdhdGVkIGxpa2UgYnV0dG9ucy5cbiAgICpcbiAgICogQnkgZGVmYXVsdCB0aGlzIHJlcGVhdHMgYDpob3N0YCBzaXggdGltZXMgdG8gcHJvdmlkZSBhIHNwZWNpZmljaXR5IG9mIDZcbiAgICovXG4gIHByb3RlY3RlZCBpbnN0YW5jZVN0eWxlU2VsZWN0b3JSb290ID0gJzpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCc7XG5cbiAgLyoqXG4gICAqIENhbiBiZSBjYWxsZWQgYnkgZGVyaXZlZCBjbGFzc2VzIHRvIHJlZ2lzdGVyIG5ldyBpbnN0YW5jZSBsZXZlbCBkeW5hbWljIHN0eWxlcy5cbiAgICogV2hlbiBjYWxsZWQgdGhlIGluc3RhbmNlIHN0eWxlc2hlZXQgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZSBsYXRlc3Qgc3R5bGVzIHRoaXMgdXBkYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIHNldEluc3RhbmNlU3R5bGUoaWQ6IHN0cmluZywgc2VsZWN0b3I6IFNlbGVjdG9yRmFjdG9yeSwgc3R5bGVNYXA6IFN0eWxlTWFwKSB7XG4gICAgLy8gV2UgcGFyc2UgYWxsIHN0eWxlIGluZm9ybWF0aW9uIGhlcmUgYW5kIHNjb3BlIGl0IHRvIHRoZSBnaXZlbiBpZC4gVGhpcyBlbnN1cmVzIHdlXG4gICAgLy8gb25seSBldmVyIG5lZWQgdG8gcmUtcGFyc2UgdGhpcyBwb3J0aW9uIG9mIHN0eWxlIGluZm9ybWF0aW9uIHdoZW4gaXRzIGFzc29jaWF0ZWRcbiAgICAvLyBpZCBpcyB1cGRhdGVkIGFnYWluLlxuICAgIHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXRNYXAuc2V0KGlkLCBnZW5lcmF0ZVNlbGVjdG9yc0Zyb21TdHlsZU1hcChzZWxlY3Rvciwgc3R5bGVNYXApKTtcbiAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgLyoqIEEgY3VzdG9tIGhvb2sgdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBpbiBkZXJpdmVkIGNsYXNzZXMgdG8gc2V0IGluc3RhbmNlIHN0eWxlcyBhcyBuZWVkZWQgKi9cbiAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKCdzZScpKSB7XG4gICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoJ3NlJywgc2VsZWN0b3JGYWN0b3J5KHRoaXMuaW5zdGFuY2VTdHlsZVNlbGVjdG9yUm9vdCksIHRoaXMuc2UgPz8ge30pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCB3aWxsVXBkYXRlKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLndpbGxVcGRhdGUoY2hhbmdlZFByb3BzKTtcblxuICAgIC8vIENhbGwgdGhlIHVwZGF0ZUluc3RhbmNlU3R5bGVzIGhvb2tcbiAgICB0aGlzLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBDaGVjayBpZiBpbnN0YW5jZSBzdHlsZXMgbmVlZCB0byBiZSByZXJlbmRlcmVkXG4gICAgaWYgKHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXROZWVkc1VwZGF0ZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZVN0eWxlcyA9IHVuc2FmZUhUTUwoXG4gICAgICAgIGA8c3R5bGUgaWQ9XCJfX2luc3RhbmNlLXN0eWxlc1wiPiR7Y29uc3RydWN0SW5zdGFuY2VTdHlsZXMoXG4gICAgICAgICAgdGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE1hcFxuICAgICAgICApfTwvc3R5bGU+YFxuICAgICAgKTtcbiAgICAgIHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXROZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgdGhpcy5fX2ZpcnN0VXBkYXRlZCA9IHRydWU7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgdGhpcy5zdWJzLmZvckVhY2goKHVuc3ViKSA9PiB1bnN1YigpKTtcbiAgICB0aGlzLnN1YnMgPSBbXTtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7IFByb3BlcnR5TWFwcGVyLCBTdHlsZVByb3BlcnR5IH0gZnJvbSAnLi9jc3MtaW4tanMudHlwZXMnO1xuXG5jb25zdCBwcm9wZXJ0eU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgc3RyaW5nW10+ID0ge1xuICBtOiAnbWFyZ2luJyxcbiAgbXg6IFsnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCddLFxuICBteTogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gIG10OiAnbWFyZ2luVG9wJyxcbiAgbXI6ICdtYXJnaW5SaWdodCcsXG4gIG1iOiAnbWFyZ2luQm90dG9tJyxcbiAgbWw6ICdtYXJnaW5MZWZ0JyxcbiAgcDogJ3BhZGRpbmcnLFxuICBweDogWydwYWRkaW5nTGVmdCcsICdwYWRkaW5nUmlnaHQnXSxcbiAgcHk6IFsncGFkZGluZ1RvcCcsICdwYWRkaW5nQm90dG9tJ10sXG4gIHB0OiAncGFkZGluZ1RvcCcsXG4gIHByOiAncGFkZGluZ1JpZ2h0JyxcbiAgcGI6ICdwYWRkaW5nQm90dG9tJyxcbiAgcGw6ICdwYWRkaW5nTGVmdCcsXG4gIGQ6ICdkaXNwbGF5JyxcbiAgYTogJ2FsaWduSXRlbXMnLFxuICBqOiAnanVzdGlmeUNvbnRlbnQnLFxuICBkaXJlY3Rpb246ICdmbGV4RGlyZWN0aW9uJyxcbiAgc2hyaW5rOiAnZmxleFNocmluaycsXG4gIGdyb3c6ICdmbGV4R3JvdycsXG4gIHdyYXA6ICdmbGV4V3JhcCcsXG4gIHc6ICd3aWR0aCcsXG4gIG1heHc6ICdtYXhXaWR0aCcsXG4gIG1pbnc6ICdtaW5XaWR0aCcsXG4gIGg6ICdoZWlnaHQnLFxuICBtYXhoOiAnbWF4SGVpZ2h0JyxcbiAgbWluaDogJ21pbkhlaWdodCcsXG4gIGZzOiAnZm9udFNpemUnLFxuICBmdzogJ2ZvbnRXZWlnaHQnLFxuICBiZzogJ2JhY2tncm91bmQnLFxuICBjOiAnY29sb3InLFxuICBlbGV2YXRpb246ICdib3hTaGFkb3cnLFxufTtcblxuLyoqIE1hcHMgcHJvcGVydHkgc2hvcnRoYW5kIHZhbHVlcyB0byBvbmUgb3IgbWFueSBmdWxsIGNzcyBwcm9wZXJ0aWVzICovXG5leHBvcnQgY29uc3QgcHJvcFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLnJlZHVjZSgoYWNjLCBwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkUHJvcHMgPSBwcm9wZXJ0eU1hcFtwcm9wTWFwLnByb3BdID8/IHByb3BNYXAucHJvcDtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uYWNjLFxuICAgICAgLi4uKEFycmF5LmlzQXJyYXkobWFwcGVkUHJvcHMpXG4gICAgICAgID8gbWFwcGVkUHJvcHMubWFwKChwcm9wKSA9PiAoeyBwcm9wLCB2YWx1ZTogcHJvcE1hcC52YWx1ZSB9KSlcbiAgICAgICAgOiBbeyBwcm9wOiBtYXBwZWRQcm9wcywgdmFsdWU6IHByb3BNYXAudmFsdWUgfV0pLFxuICAgIF07XG4gIH0sIFtdKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgQG1vcnRhci9zdHlsZXMgY29uZmlnIHZhbHVlIGZvciBhIGdpdmVuIGRvdCBub3RhdGVkIHN0cmluZy5cbiAqIE51bWJlcnMgYW5kIG5vbi1kb3Qgbm90YXRlZCBzdHJpbmcgd2lsbCBqdXN0IGJlIHJldHVybmVkIGFzIGlzLlxuICovXG5leHBvcnQgY29uc3QgZG90U3RyaW5nVG9Db25maWdWYWx1ZSA9ICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb25maWdQYXRoID0gdmFsdWUuc3BsaXQoJy4nKTtcbiAgICAgIGNvbnN0IGNvbmZpZ1ZhbHVlID0gY29uZmlnUGF0aC5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBhY2Nba2V5XTtcbiAgICAgIH0sIGNvbmZpZyk7XG4gICAgICByZXR1cm4gY29uZmlnVmFsdWUgPz8gdmFsdWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn07XG5cbi8qKiBNYXBzIGRvdCBub3RhdGVkIHN0cmluZyB2YWx1ZXMgdG8gdGhlbWUgY29uZmlnIHZhcmlhYmxlcyAqL1xuZXhwb3J0IGNvbnN0IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWVNYXBwZXI6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLnJlZHVjZSgoYWNjLCBwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgY29uZmlnVmFsdWUgPSBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKHByb3BNYXAudmFsdWUpO1xuICAgIGlmIChjb25maWdWYWx1ZSkge1xuICAgICAgcHJvcE1hcC52YWx1ZSA9IGNvbmZpZ1ZhbHVlID8/IHByb3BNYXAudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBbLi4uYWNjLCBwcm9wTWFwXTtcbiAgfSwgW10pO1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcE51bWJlclRvUHggPSAodmFsOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsKSA9PiB7XG4gIGlmICghdmFsKSB7XG4gICAgcmV0dXJuIHZhbCBhcyBudWxsO1xuICB9XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKHZhbCkpID8gYCR7dmFsfXB4YCA6ICh2YWwgYXMgc3RyaW5nKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBQeFRvTnVtYmVyID0gKHZhbDogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICBpZiAoIXZhbCkge1xuICAgIHJldHVybiB2YWwgYXMgbnVsbDtcbiAgfVxuICByZXR1cm4gTnVtYmVyKHZhbC5yZXBsYWNlKCdweCcsICcnKSk7XG59O1xuXG4vKiogTWFwcyB0aGUgdmFsdWVzIG9mIGFueSBnaXZlbiBwcm9wcyB0byBweCB1bml0cyBpZiBpdCBpcyBhIG51bWJlciAqL1xuZXhwb3J0IGNvbnN0IG51bWJlclRvUHg6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gbWFwTnVtYmVyVG9QeChwcm9wTWFwLnZhbHVlKTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IHNwYWNpbmdNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICcwJzogY29uZmlnLnNwYWNlLm5vbmUsXG4gICcxJzogY29uZmlnLnNwYWNlLnhzLFxuICAnMic6IGNvbmZpZy5zcGFjZS5zbSxcbiAgJzMnOiBjb25maWcuc3BhY2UubWQsXG4gICc0JzogY29uZmlnLnNwYWNlLmxnLFxuICAnNSc6IGNvbmZpZy5zcGFjZS54bCxcbiAgJzYnOiBjb25maWcuc3BhY2UueHhsLFxuICAnNyc6IGNvbmZpZy5zcGFjZS54eHhsLFxuICAnbm9uZSc6IGNvbmZpZy5zcGFjZS5ub25lLFxuICAneHhzJzogY29uZmlnLnNwYWNlLnh4cyxcbiAgJ3hzJzogY29uZmlnLnNwYWNlLnhzLFxuICAnc20nOiBjb25maWcuc3BhY2Uuc20sXG4gICdtZCc6IGNvbmZpZy5zcGFjZS5tZCxcbiAgJ2xnJzogY29uZmlnLnNwYWNlLmxnLFxuICAneGwnOiBjb25maWcuc3BhY2UueGwsXG4gICd4eGwnOiBjb25maWcuc3BhY2UueHhsLFxuICAneHh4bCc6IGNvbmZpZy5zcGFjZS54eHhsLFxufTtcblxuLyoqIE1hcHMgc3BhY2luZyB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIHNwYWNpbmcgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IHNwYWNpbmdWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IHNwYWNpbmdNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGJvcmRlclJhZGl1c01hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgbm9uZTogY29uZmlnLmJvcmRlci5yYWRpdXMubm9uZSxcbiAgeHM6IGNvbmZpZy5ib3JkZXIucmFkaXVzLnhzLFxuICBzbTogY29uZmlnLmJvcmRlci5yYWRpdXMuc20sXG4gIG1kOiBjb25maWcuYm9yZGVyLnJhZGl1cy5tZCxcbiAgbGc6IGNvbmZpZy5ib3JkZXIucmFkaXVzLmxnLFxuICB4bDogY29uZmlnLmJvcmRlci5yYWRpdXMueGwsXG4gIHh4bDogY29uZmlnLmJvcmRlci5yYWRpdXMueHhsLFxuICBmdWxsOiBjb25maWcuYm9yZGVyLnJhZGl1cy5mdWxsLFxufTtcblxuLyoqIE1hcHMgYm9yZGVyIHJhZGl1cyB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIGJvcmRlciByYWRpdXMgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGJvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gYm9yZGVyUmFkaXVzTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBib3JkZXJXaWR0aE1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgbm9uZTogY29uZmlnLmJvcmRlci53aWR0aC5ub25lLFxuICBzbTogY29uZmlnLmJvcmRlci53aWR0aC5zbSxcbiAgbWQ6IGNvbmZpZy5ib3JkZXIud2lkdGgubWQsXG4gIGxnOiBjb25maWcuYm9yZGVyLndpZHRoLmxnLFxufTtcblxuLyoqIE1hcHMgYm9yZGVyIHdpZHRoIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgYm9yZGVyIHdpZHRoIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gYm9yZGVyV2lkdGhNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IG9wYWNpdHlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHh4bDogY29uZmlnLm9wYWNpdHkueHhsLFxuICB4bDogY29uZmlnLm9wYWNpdHkueGwsXG4gIGxnOiBjb25maWcub3BhY2l0eS5sZyxcbiAgbWQ6IGNvbmZpZy5vcGFjaXR5Lm1kLFxuICBzbTogY29uZmlnLm9wYWNpdHkuc20sXG4gIHhzOiBjb25maWcub3BhY2l0eS54cyxcbiAgeHhzOiBjb25maWcub3BhY2l0eS54eHMsXG4gIHh4eHM6IGNvbmZpZy5vcGFjaXR5Lnh4eHMsXG59O1xuXG4vKiogTWFwcyBvcGFjaXR5IHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgb3BhY2l0eSBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3Qgb3BhY2l0eVZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gb3BhY2l0eU1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZm9udFdlaWdodE1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgbGlnaHQ6IGNvbmZpZy5mb250LndlaWdodC5saWdodCxcbiAgcmVndWxhcjogY29uZmlnLmZvbnQud2VpZ2h0LnJlZ3VsYXIsXG4gIG1lZGl1bTogY29uZmlnLmZvbnQud2VpZ2h0Lm1lZGl1bSxcbiAgYm9sZDogY29uZmlnLmZvbnQud2VpZ2h0LmJvbGQsXG59O1xuXG4vKiogTWFwcyBmb250LXdlaWdodCB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIHNwYWNpbmcgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGZvbnRXZWlnaHRWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGZvbnRXZWlnaHRNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGZvbnRTaXplTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB4eHM6ICcwLjYyNXJlbScsXG4gIHhzOiAnMC43NXJlbScsXG4gIHNtOiAnMC44NzVyZW0nLFxuICBtZDogJzFyZW0nLFxuICBsZzogJzEuMjVyZW0nLFxuICB4bDogJzEuNXJlbScsXG4gIHh4bDogJzEuNzVyZW0nLFxufTtcblxuLyoqIE1hcHMgZm9udC1zaXplIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgc3BhY2luZyBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgZm9udFNpemVWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGZvbnRTaXplTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBmb250RmFtaWx5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBzYW5zOiBjb25maWcuZm9udC5mYW1pbHkuc2FucyxcbiAgc2VyaWY6IGNvbmZpZy5mb250LmZhbWlseS5zZXJpZixcbiAgbW9ubzogY29uZmlnLmZvbnQuZmFtaWx5Lm1vbm8sXG59O1xuXG4vKiogTWFwcyBmb250LWZhbWlseSB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIGZvbnQtZmFtaWx5IHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBmb250RmFtaWx5VmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBmb250RmFtaWx5TWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBlbGV2YXRpb25NYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHowOiBjb25maWcuZWxldmF0aW9uLnowLFxuICB6MTogY29uZmlnLmVsZXZhdGlvbi56MSxcbiAgejI6IGNvbmZpZy5lbGV2YXRpb24uejIsXG4gIHozOiBjb25maWcuZWxldmF0aW9uLnozLFxuICB6NDogY29uZmlnLmVsZXZhdGlvbi56NCxcbn07XG5cbi8qKiBNYXBzIGVsZXZhdGlvbiB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIGVsZXZhdGlvbiBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgZWxldmF0aW9uVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBlbGV2YXRpb25NYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG4iLCAiaW1wb3J0IHsgY29uZmlnLCBTZWxlY3Rvck9wdGlvbnMgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQge1xuICBTZWxlY3Rvck1ldGFkYXRhLFxuICBTZWxlY3RvclN0eWxlcyxcbiAgU3R5bGVNYXAsXG4gIFN0eWxlTWFwQ2FsbGJhY2ssXG4gIFN0eWxlUHJvcGVydHksXG59IGZyb20gJy4vY3NzLWluLWpzLnR5cGVzJztcbmltcG9ydCB7XG4gIHByb3BTaG9ydGhhbmRzLFxuICBzcGFjaW5nVmFsU2hvcnRoYW5kcyxcbiAgbnVtYmVyVG9QeCxcbiAgZG90U3RyaW5nVG9Db25maWdWYWx1ZU1hcHBlcixcbiAgYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcyxcbiAgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzLFxuICBvcGFjaXR5VmFsU2hvcnRoYW5kcyxcbiAgZm9udFdlaWdodFZhbFNob3J0aGFuZHMsXG4gIGZvbnRGYW1pbHlWYWxTaG9ydGhhbmRzLFxuICBlbGV2YXRpb25WYWxTaG9ydGhhbmRzLFxuICBmb250U2l6ZVZhbFNob3J0aGFuZHMsXG59IGZyb20gJy4vY3NzLWluLWpzLnByb3BlcnR5LW1hcHBlcnMnO1xuXG4vKiogU3BlY2lmaWVzIHdoaWNoIHByb3BlcnR5IG1hcHBlcnMgc2hvdWxkIGJlIGNhbGxlZCBhbmQgaW4gd2hhdCBvcmRlciBmb3IgYSBnaXZlbiBwcm9wICovXG5jb25zdCBwcm9wTWFwcGVycyA9IHtcbiAgaGVpZ2h0OiBbbnVtYmVyVG9QeF0sXG4gIG1pbkhlaWdodDogW251bWJlclRvUHhdLFxuICBtYXhIZWlnaHQ6IFtudW1iZXJUb1B4XSxcbiAgd2lkdGg6IFtudW1iZXJUb1B4XSxcbiAgbWluV2lkdGg6IFtudW1iZXJUb1B4XSxcbiAgbWF4V2lkdGg6IFtudW1iZXJUb1B4XSxcbiAgdG9wOiBbbnVtYmVyVG9QeF0sXG4gIHJpZ2h0OiBbbnVtYmVyVG9QeF0sXG4gIGJvdHRvbTogW251bWJlclRvUHhdLFxuICBsZWZ0OiBbbnVtYmVyVG9QeF0sXG4gIG1hcmdpbjogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luVG9wOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBtYXJnaW5SaWdodDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luQm90dG9tOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBtYXJnaW5MZWZ0OiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nVG9wOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nUmlnaHQ6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmdCb3R0b206IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmdMZWZ0OiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBnYXA6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHJvd0dhcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgY29sdW1uR2FwOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBmb250U2l6ZTogW2ZvbnRTaXplVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGZvbnRXZWlnaHQ6IFtmb250V2VpZ2h0VmFsU2hvcnRoYW5kc10sXG4gIGZvbnRGYW1pbHk6IFtmb250RmFtaWx5VmFsU2hvcnRoYW5kc10sXG4gIGJvcmRlclJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJXaWR0aDogW2JvcmRlcldpZHRoVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlclRvcExlZnRSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBvcGFjaXR5OiBbb3BhY2l0eVZhbFNob3J0aGFuZHNdLFxuICBib3hTaGFkb3c6IFtlbGV2YXRpb25WYWxTaG9ydGhhbmRzXSxcbn07XG5cbi8qKlxuICogUGFyc2VzIHByb3BlcnRpZXMgdG8gdGhlaXIgYWN0dWFsIHByb3BlcnR5IG1hcHBpbmdzIGFjY29yZGluZyB0byB0aGVcbiAqIG1hcHBpbmcgZnVuY3Rpb24gcGlwZWxpbmVzIGRlZmluZWQgYWJvdmVcbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnNlUHJvcFNob3J0aGFuZHMgPSAocHJvcDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogU3R5bGVQcm9wZXJ0eVtdID0+IHtcbiAgLy8gQ2FzdCB0byBzdHJpbmcgdmFsdWVzXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdmFsdWUgPSBgJHt2YWx1ZX1gO1xuICB9XG4gIC8vIEV4ZWMgcHJvcCB0cmFuc2Zvcm1zXG4gIC8vIFRoZSBwcm9wIHNob3J0aGFuZHMgbWFwcGVyIGlzIHJ1biBhZ2FpbnN0IGV2ZXJ5IHByb3BcbiAgY29uc3QgbWFwcGVkUHJvcHMgPSBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlTWFwcGVyKHByb3BTaG9ydGhhbmRzKFt7IHByb3AsIHZhbHVlIH1dKSk7XG4gIHJldHVybiBtYXBwZWRQcm9wcy5yZWR1Y2UoKGFjYywgcHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlcnMgPSBwcm9wTWFwcGVyc1twcm9wTWFwLnByb3BdO1xuICAgIGlmIChtYXBwZXJzKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIC4uLm1hcHBlcnMucmVkdWNlKFxuICAgICAgICAgIChhY2MsIG1hcHBlcikgPT4gbWFwcGVyKGFjYyksXG4gICAgICAgICAgW3sgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogcHJvcE1hcC52YWx1ZSB9XVxuICAgICAgICApLFxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWNjLnB1c2gocHJvcE1hcCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgfSwgW10pO1xufTtcblxuLyoqXG4gKiBQYXJzZXMgc3R5bGVNYXAgdmFsdWVzIHRvIHNlbGVjdG9yICsgc3R5bGUgaW5mbyB1c2VkIGZvclxuICogdXBkYXRpbmcgQ1NTU3R5bGVTaGVldHMgb3IgPHN0eWxlPiB0YWdzLlxuICovXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVTZWxlY3RvcnNGcm9tU3R5bGVNYXAgPSAoXG4gIHNlbGVjdG9yRm46IChvcHRpb25zPzogU2VsZWN0b3JPcHRpb25zKSA9PiBzdHJpbmcsXG4gIHN0eWxlTWFwOiBTdHlsZU1hcFxuKSA9PiB7XG4gIGNvbnN0IHBhcnNlZFNlbGVjdG9yczogU2VsZWN0b3JTdHlsZXNbXSA9IFtdO1xuICBjb25zdCBzZWxlY3RvclF1ZXVlOiBTZWxlY3Rvck1ldGFkYXRhW10gPSBbeyBzZWxlY3Rvcjogc2VsZWN0b3JGbigpLCBzdHlsZU1hcCB9XTtcbiAgY29uc3QgYnJlYWtwb2ludEtleXMgPSBPYmplY3Qua2V5cyhjb25maWcuZ3JpZC5icmVha3BvaW50KTtcblxuICAvLyBMb29wIHRocm91Z2ggc2VsZWN0b3IgcXVldWUgdW50aWwgdGhleSBoYXZlIGFsbCBiZWVuIGV4aGF1c3RlZFxuICB3aGlsZSAoc2VsZWN0b3JRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JNYXAgPSBzZWxlY3RvclF1ZXVlLnNoaWZ0KCk7XG5cbiAgICAvLyBQdXNoIHBhcnNlZCBzZWxlY3RvcnMgb250byB0aGUgcmV0dXJuIGxpc3RcbiAgICBwYXJzZWRTZWxlY3RvcnMucHVzaCh7XG4gICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsXG4gICAgICBzZWxlY3RvcldyYXBwZXI6IHNlbGVjdG9yTWFwLnNlbGVjdG9yV3JhcHBlcixcbiAgICAgIHN0eWxlOiBPYmplY3Qua2V5cyhzZWxlY3Rvck1hcC5zdHlsZU1hcCkucmVkdWNlKChhY2MsIHByb3ApID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gc2VsZWN0b3JNYXAuc3R5bGVNYXBbcHJvcF07XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIGNhbGxiYWNrIHZhbHVlc1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YWx1ZSA9ICh2YWx1ZSBhcyBTdHlsZU1hcENhbGxiYWNrKShjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2Ugb2JqZWN0IHZhbHVlc1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgLy8gUXVldWUgdXAgc2VsZWN0b3JzIGZvciBwc2V1ZG8tY2xhc3Nlc1xuICAgICAgICAgIGlmIChwcm9wLnN0YXJ0c1dpdGgoJyY6JykpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvckZuKHsgaW5maXg6IHByb3AucmVwbGFjZSgnJicsICcnKSB9KSxcbiAgICAgICAgICAgICAgc3R5bGVNYXA6IHZhbHVlLFxuICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IHNlbGVjdG9yTWFwLnNlbGVjdG9yV3JhcHBlcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUXVldWUgdXAgYnJlYWtwb2ludCBzZWxlY3RvciBzaG9ydGhhbmRzXG4gICAgICAgICAgZWxzZSBpZiAoYnJlYWtwb2ludEtleXMuaW5jbHVkZXMocHJvcCkpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvck1hcC5zZWxlY3RvcixcbiAgICAgICAgICAgICAgc3R5bGVNYXA6IHZhbHVlLFxuICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IGBAbWVkaWEgKG1pbi13aWR0aDoke2NvbmZpZy5ncmlkLmJyZWFrcG9pbnRbcHJvcF19KWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFF1ZXVlIHVwIHNlbGVjdG9ycyBmb3IgbWVkaWEvY29udGFpbmVyIHF1ZXJpZXNcbiAgICAgICAgICBlbHNlIGlmIChwcm9wLnN0YXJ0c1dpdGgoJ0BtZWRpYScpIHx8IHByb3Auc3RhcnRzV2l0aCgnQGNvbnRhaW5lcicpKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBwcm9wLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIHNsb3R0ZWQgcXVlcmllc1xuICAgICAgICAgIGVsc2UgaWYgKHByb3Auc3RhcnRzV2l0aCgnOjpzbG90dGVkJykgfHwgcHJvcC5zdGFydHNXaXRoKCcmIDo6c2xvdHRlZCcpKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JGbih7IHBvc3RmaXg6ICcgJyArIHByb3AucmVwbGFjZSgnJiAnLCAnJykgfSksXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBzZWxlY3Rvck1hcC5zZWxlY3RvcldyYXBwZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFF1ZXVlIHVwIHNlbGVjdG9ycyBmb3IgdmFsdWUgYnJlYWtwb2ludCBvYmplY3RzXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBMb29wIGluIG9yZGVyIGhlcmUgc28gdGhleSBvdmVycmlkZSBlYWNoIG90aGVyIGNvcnJlY3RseVxuICAgICAgICAgICAgYnJlYWtwb2ludEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvck1hcC5zZWxlY3RvciwgLy8gaW5oZXJpdCB0aGUgc2VsZWN0b3IgaGVyZSBpbiBjYXNlIHdlIGFyZSB3aXRoaW4gYSBwc2V1ZG8tY2xhc3NcbiAgICAgICAgICAgICAgICAgIHN0eWxlTWFwOiB7IFtwcm9wXTogdmFsdWVba2V5XSB9LFxuICAgICAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBgQG1lZGlhIChtaW4td2lkdGg6JHtjb25maWcuZ3JpZC5icmVha3BvaW50W2tleV19KWAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXJzZSBub3JtYWwgcHJvcHNcbiAgICAgICAgY29uc3QgcHJvcHMgPSBwYXJzZVByb3BTaG9ydGhhbmRzKHByb3AsIHZhbHVlIGFzIHN0cmluZyB8IG51bWJlcik7XG4gICAgICAgIHJldHVybiBgJHthY2N9JHtwcm9wcy5yZWR1Y2UoKGFjYzIsIHsgcHJvcCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgIC8vIENvbnZlcnQgcHJvcGVydHkgbmFtZXMgZnJvbSBjYW1lbC1jYXNlIHRvIGRhc2gtY2FzZSwgaS5lLjpcbiAgICAgICAgICAvLyAgYGJhY2tncm91bmRDb2xvcmAgLT4gYGJhY2tncm91bmQtY29sb3JgXG4gICAgICAgICAgLy8gVmVuZG9yLXByZWZpeGVkIG5hbWVzIG5lZWQgYW4gZXh0cmEgYC1gIGFwcGVuZGVkIHRvIGZyb250OlxuICAgICAgICAgIC8vICBgd2Via2l0QXBwZWFyYW5jZWAgLT4gYC13ZWJraXQtYXBwZWFyYW5jZWBcbiAgICAgICAgICAvLyBFeGNlcHRpb24gaXMgYW55IHByb3BlcnR5IG5hbWUgY29udGFpbmluZyBhIGRhc2gsIGluY2x1ZGluZ1xuICAgICAgICAgIC8vIGN1c3RvbSBwcm9wZXJ0aWVzOyB3ZSBhc3N1bWUgdGhlc2UgYXJlIGFscmVhZHkgZGFzaC1jYXNlZCBpLmUuOlxuICAgICAgICAgIC8vICBgLS1teS1idXR0b24tY29sb3JgIC0tPiBgLS1teS1idXR0b24tY29sb3JgXG4gICAgICAgICAgcHJvcCA9IHByb3AucmVwbGFjZSgvKD86Xih3ZWJraXR8bW96fG1zfG8pfCkoPz1bQS1aXSkvZywgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgcmV0dXJuIGAke2FjYzJ9JHtwcm9wfToke3ZhbHVlfTtgO1xuICAgICAgICB9LCAnJyl9YDtcbiAgICAgIH0sICcnKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWRTZWxlY3RvcnM7XG59O1xuXG5jb25zdCBwYXJzZVNlbGVjdG9ycyA9IChzdHlsZXMsIHNlbGVjdG9ycz86IGFueSkgPT4ge1xuICBpZiAoIXNlbGVjdG9ycykge1xuICAgIHJldHVybiBzdHlsZXM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGAke3N0eWxlc30ke3NlbGVjdG9ycy5yZWR1Y2UoKGFjYywgeyBzZWxlY3Rvciwgc2VsZWN0b3JXcmFwcGVyLCBzdHlsZSB9KSA9PiB7XG4gICAgICBpZiAoc3R5bGUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgICBjb25zdCBiYXNlID0gYCR7c2VsZWN0b3J9eyR7c3R5bGV9fWA7XG4gICAgICBjb25zdCB3cmFwcGVkID0gc2VsZWN0b3JXcmFwcGVyID8gYCR7c2VsZWN0b3JXcmFwcGVyfXske2Jhc2V9fWAgOiBiYXNlO1xuICAgICAgcmV0dXJuIGAke2FjY30ke3dyYXBwZWR9YDtcbiAgICB9LCAnJyl9YDtcbiAgfVxufTtcblxuLyoqXG4gKiBDb21iaW5lcyBhbGwgaW5zdGFuY2Ugc3R5bGVNYXAgc2VsZWN0b3JzICsgc3R5bGUgaW5mbyBpbnRvIG9uZSBjc3NUZXh0XG4gKiB1c2VkIGZvciB1cGRhdGluZyBDU1NTdHlsZVNoZWV0cyBvciA8c3R5bGU+IHRhZ3MuXG4gKi9cbmV4cG9ydCBjb25zdCBjb25zdHJ1Y3RJbnN0YW5jZVN0eWxlcyA9IChpbnN0YW5jZVN0eWxlc01hcCkgPT4ge1xuICBsZXQgc3R5bGVzID0gJyc7XG5cbiAgLy8gU29ydCBrZXlzIGluIGFscGhhYmV0aWNhbCBvcmRlciB0byBoZWxwIGF2b2lkIGh5ZHJhdGlvbiBtaXNtYXRjaCBlcnJvcnNcbiAgWy4uLmluc3RhbmNlU3R5bGVzTWFwLmVudHJpZXMoKV1cbiAgICAuZmlsdGVyKChba2V5LCBfXSkgPT4ga2V5ICE9PSAnc2UnICYmIGtleSAhPT0gJ3NwJylcbiAgICAuc29ydCgoYSwgYikgPT4gYlswXSAtIGFbMF0pXG4gICAgLmZvckVhY2goKFtfLCBzZWxlY3RvcnNdKSA9PiB7XG4gICAgICBzdHlsZXMgPSBwYXJzZVNlbGVjdG9ycyhzdHlsZXMsIHNlbGVjdG9ycyk7XG4gICAgfSk7XG5cbiAgLy8gQWx3YXlzIHBhcnNlIGBzZWAgYW5kIGBzcGAgc2VsZWN0b3JzIGxhc3QgdG8gaGVscCBhdm9pZCBoeWRyYXRpb24gbWlzbWF0Y2ggZXJyb3JzXG4gIC8vIGFuZCBlbnN1cmUgdGhleSBvdmVycmlkZSBhbnkgY29tcG9uZW50IGxldmVsIGR5bmFtaWMgc3R5bGVzLlxuICBzdHlsZXMgPSBgJHtzdHlsZXN9JHtwYXJzZVNlbGVjdG9ycygnJywgaW5zdGFuY2VTdHlsZXNNYXAuZ2V0KCdzZScpKX0ke3BhcnNlU2VsZWN0b3JzKFxuICAgICcnLFxuICAgIGluc3RhbmNlU3R5bGVzTWFwLmdldCgnc3AnKVxuICApfWA7XG4gIHJldHVybiBzdHlsZXM7XG59O1xuIiwgImltcG9ydCB7IGlzU2VydmVyIH0gZnJvbSAnbGl0LWh0bWwvaXMtc2VydmVyLmpzJztcblxuZXhwb3J0IGNvbnN0IGlzU3NyID0gKCkgPT4gaXNTZXJ2ZXI7XG5cbmV4cG9ydCBjb25zdCBpc0Jyb3dzZXJMaWtlID0gKCkgPT4gZ2xvYmFsVGhpcyAhPT0gdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgaXNWYWxpZFJlc2l6ZUNvbnRyb2xsZXIgPSAocmVzaXplQ29udHJvbGxlcikgPT5cbiAgcmVzaXplQ29udHJvbGxlcj8uWydfb2JzZXJ2ZXInXT8uWyd1bm9ic2VydmUnXTtcblxuaW50ZXJmYWNlIE5hdmlnYXRvclVBRGF0YSB7XG4gIGJyYW5kczogQXJyYXk8eyBicmFuZDogc3RyaW5nOyB2ZXJzaW9uOiBzdHJpbmcgfT47XG4gIG1vYmlsZTogYm9vbGVhbjtcbiAgcGxhdGZvcm06IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXRmb3JtKCk6IHN0cmluZyB7XG4gIGNvbnN0IHVhRGF0YSA9IChuYXZpZ2F0b3IgYXMgYW55KS51c2VyQWdlbnREYXRhIGFzIE5hdmlnYXRvclVBRGF0YSB8IHVuZGVmaW5lZDtcblxuICBpZiAodWFEYXRhPy5wbGF0Zm9ybSkge1xuICAgIHJldHVybiB1YURhdGEucGxhdGZvcm07XG4gIH1cblxuICByZXR1cm4gbmF2aWdhdG9yLnBsYXRmb3JtO1xufVxuXG5leHBvcnQgY29uc3QgaXNQbGF0Zm9ybSA9IChwbGF0Zm9ybTogJ0lPUycpID0+IHtcbiAgaWYgKCFpc1NzcigpKSB7XG4gICAgaWYgKHBsYXRmb3JtID09PSAnSU9TJykge1xuICAgICAgcmV0dXJuIC9pUChob25lfGFkfG9kKXxpT1MvLnRlc3QoZ2V0UGxhdGZvcm0oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuIiwgImNvbnN0IG5hdGl2ZVZhbGlkaXR5U3RhdGVzOiBBcnJheTxrZXlvZiBWYWxpZGl0eVN0YXRlPiA9IFtcbiAgJ2JhZElucHV0JyxcbiAgJ2N1c3RvbUVycm9yJyxcbiAgJ3BhdHRlcm5NaXNtYXRjaCcsXG4gICdyYW5nZU92ZXJmbG93JyxcbiAgJ3JhbmdlVW5kZXJmbG93JyxcbiAgJ3N0ZXBNaXNtYXRjaCcsXG4gICd0b29Mb25nJyxcbiAgJ3Rvb1Nob3J0JyxcbiAgJ3R5cGVNaXNtYXRjaCcsXG4gICd2YWx1ZU1pc3NpbmcnLFxuXTtcblxuLyoqXG4gKiBDdXN0b20gdmFsaWRhdG9yIGZvciB0aGUgYEBvcGVuLXdjL2Zvcm0tY29udHJvbGAgdGhhdCBsZWFucyBvbiBhbiBpbnRlcm5hbFxuICogaW5wdXQgdG8gZm9yd2FyZCBuYXRpdmUgdmFsaWRhdGlvblxuICovXG5leHBvcnQgY29uc3QgaW5uZXJJbnB1dFZhbGlkYXRvcnMgPSBuYXRpdmVWYWxpZGl0eVN0YXRlcy5tYXAoKGtleSkgPT4gKHtcbiAga2V5LFxuICBpc1ZhbGlkKGluc3RhbmNlOiBIVE1MRWxlbWVudCAmIHsgdmFsaWRhdGlvblRhcmdldDogSFRNTElucHV0RWxlbWVudCB9KSB7XG4gICAgaWYgKGluc3RhbmNlLnZhbGlkYXRpb25UYXJnZXQpIHtcbiAgICAgIHJldHVybiAhaW5zdGFuY2UudmFsaWRhdGlvblRhcmdldC52YWxpZGl0eVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbn0pKTtcbiIsICIvKipcbiAqIE5PVEU6XG4gKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGltcGxlbWVudGF0aW9uIGZvciBhbiBleHRyZW1lbHkgc2ltcGxlIGFuZCBsaWdodHdlaWdodFxuICogcmVhY3RpdmUgc29sdXRpb24gbG9vc2VseSBiYXNlZCBvbiBzb2xpZC1qcyBzdHlsZSBzaWduYWxzLiBJdCBlbmFibGVzIGJhc2ljXG4gKiByZWFjdGl2ZSBzdWJzY3JpcHRpb25zIGFuZCBjb21wdXRlZCBzaWduYWxzIG9mIG9uZSBvciBtb3JlIG90aGVyIGRlcGVuZGVuY3kgc2lnbmFscy5cbiAqXG4gKiBJbiBpdHMgY3VycmVudCBzdGF0ZSwgaXQgaXMgbm90IHBlcmZlY3QgYW5kIGRvZXMgbm90IGhhbmRsZSBhbGwgZWRnZSBjYXNlcy4gRm9yXG4gKiBleGFtcGxlLCBpZiB5b3UgaGF2ZSBtdWx0aXBsZSBsYXllcnMgb2YgY29tcHV0ZWQgc3RhdGUgd2l0aCBhIHNpbmdsZSBkZXBlbmRlbmN5XG4gKiBzaGFyZWQgbW9yZSB0aGFuIG9uY2UgYWNyb3NzIHRob3NlIGxheWVycywgdGhlIHNhbWUgY2hhbmdlIHdpbGwgcG90ZW50aWFsbHkgYmVcbiAqIGVtaXR0ZWQgdHdpY2UuIE91ciBleHBlY3RhdGlvbiBhdG0sIGlzIHRoYXQgd2Ugd29uJ3QgZW5jb3VudGVyIHRob3NlIHNjZW5hcmlvc1xuICogaW4gdGhpcyBsaWJyYXJ5LlxuICovXG5cbi8qKiBVbnN1YnNjcmliZXMgZnJvbSB2YWx1ZSB1cGRhdGVzLiAqL1xuZXhwb3J0IHR5cGUgVW5zdWJzY3JpYmVyID0gKCkgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBTaWduYWw8VD4ge1xuICAvKiogR2V0IHRoZSBjdXJyZW50IHZhbHVlICovXG4gIGdldCgpOiBUO1xuXG4gIC8qKiBTZXQgcmVhY3RpdmUgdmFsdWUgKi9cbiAgc2V0KHZhbHVlOiBUKTtcblxuICAvKiogVXBkYXRlIHJlYWN0aXZlIHZhbHVlIHVzaW5nIGNhbGxiYWNrICovXG4gIHVwZGF0ZShmbjogKHZhbHVlOiBUKSA9PiBUKTtcblxuICAvKiogU3Vic2NyaWJlIHRvIHJlYWN0aXZlIHZhbHVlIGNoYW5nZXMgKi9cbiAgc3Vic2NyaWJlKGZuOiAodmFsdWU6IFQsIHVuc3Vic2NyaWJlPzogVW5zdWJzY3JpYmVyKSA9PiB2b2lkKTogVW5zdWJzY3JpYmVyO1xufVxuXG5jb25zdCBjb250ZXh0ID0gW107XG5cbmZ1bmN0aW9uIF9zdWJzY3JpYmUocnVubmluZywgc3Vic2NyaXB0aW9ucykge1xuICBzdWJzY3JpcHRpb25zLmFkZChydW5uaW5nKTtcbiAgcnVubmluZy5kZXBlbmRlbmNpZXMuYWRkKHN1YnNjcmlwdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjbGVhbnVwKHJ1bm5pbmcpIHtcbiAgZm9yIChjb25zdCBkZXAgb2YgcnVubmluZy5kZXBlbmRlbmNpZXMpIHtcbiAgICBkZXAuZGVsZXRlKHJ1bm5pbmcpO1xuICB9XG4gIHJ1bm5pbmcuZGVwZW5kZW5jaWVzLmNsZWFyKCk7XG59XG5cbi8qKiBDcmVhdGUgYSBzaWduYWwgdGhhdCBhbGxvd3MgYm90aCB1cGRhdGluZyBhbmQgcmVhZGluZyBieSBnZXR0ZXIgb3Igc3Vic2NyaXB0aW9uLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hbDxUPih2YWx1ZT86IFQpIHtcbiAgY29uc3Qgc3Vic2NyaXB0aW9ucyA9IG5ldyBTZXQ8YW55PigpO1xuXG4gIGNvbnN0IGdldCA9ICgpOiBUID0+IHtcbiAgICBjb25zdCBydW5uaW5nID0gY29udGV4dFtjb250ZXh0Lmxlbmd0aCAtIDFdO1xuICAgIGlmIChydW5uaW5nKSBfc3Vic2NyaWJlKHJ1bm5pbmcsIHN1YnNjcmlwdGlvbnMpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCBzZXQgPSAobmV4dFZhbHVlOiBUKSA9PiB7XG4gICAgdmFsdWUgPSBuZXh0VmFsdWU7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgWy4uLnN1YnNjcmlwdGlvbnNdKSB7XG4gICAgICBzdWIuZXhlY3V0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGUgPSAoZm46ICh2YWx1ZTogVCkgPT4gVCkgPT4ge1xuICAgIHZhbHVlID0gZm4odmFsdWUpO1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIFsuLi5zdWJzY3JpcHRpb25zXSkge1xuICAgICAgc3ViLmV4ZWN1dGUoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVGhpcyBpcyBlc3NlbnRpYWxseSBhIHVzZUVmZmVjdCBtYXNxdWVyYWRpbmcgYXMgYSBzdWJzY3JpYmUgZnVuY3Rpb25cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGZuOiAodmFsdWU6IFQsIHVuc3Vic2NyaWJlPzogVW5zdWJzY3JpYmVyKSA9PiB2b2lkKTogVW5zdWJzY3JpYmVyID0+IHtcbiAgICBjb25zdCBleGVjdXRlID0gKCkgPT4ge1xuICAgICAgY2xlYW51cChydW5uaW5nKTtcbiAgICAgIGNvbnRleHQucHVzaChydW5uaW5nKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKHJ1bm5pbmcuZ2V0KCksICgpID0+IGNsZWFudXAocnVubmluZykpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgY29udGV4dC5wb3AoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoKSA9PiBjbGVhbnVwKHJ1bm5pbmcpO1xuICAgIH07XG5cbiAgICBjb25zdCBydW5uaW5nID0ge1xuICAgICAgZXhlY3V0ZSxcbiAgICAgIGRlcGVuZGVuY2llczogbmV3IFNldCgpLFxuICAgICAgZ2V0LFxuICAgIH07XG5cbiAgICByZXR1cm4gZXhlY3V0ZSgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0LFxuICAgIHNldCxcbiAgICB1cGRhdGUsXG4gICAgc3Vic2NyaWJlLFxuICB9IGFzIFNpZ25hbDxUPjtcbn1cblxuLyoqIE9uZSBvciBtb3JlIGBTaWduYWxgcyAqL1xudHlwZSBTaWduYWxzID0gU2lnbmFsPGFueT4gfCBbU2lnbmFsPGFueT4sIC4uLkFycmF5PFNpZ25hbDxhbnk+Pl0gfCBTaWduYWw8YW55PltdO1xuXG4vKiogT25lIG9yIG1vcmUgdmFsdWVzIGZyb20gc2lnbmFscyAqL1xuZXhwb3J0IHR5cGUgU2lnbmFsVmFsdWVzPFQ+ID0gVCBleHRlbmRzIFNpZ25hbDxpbmZlciBVPlxuICA/IFVcbiAgOiB7IFtLIGluIGtleW9mIFRdOiBUW0tdIGV4dGVuZHMgU2lnbmFsPGluZmVyIFU+ID8gVSA6IG5ldmVyIH07XG5cbi8qKiBDcmVhdGUgYSBuZXcgY29tcHV0ZWQgc2lnbmFsIGZyb20gb25lIG9yIG1vcmUgc2lnbmFsIGRlcGVuZGVuY2llcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkPEQgZXh0ZW5kcyBTaWduYWxzLCBUPihcbiAgZGVwZW5kZW5jaWVzOiBELFxuICBmbjogKHZhbHVlczogU2lnbmFsVmFsdWVzPEQ+KSA9PiBUXG4pOiBTaWduYWw8VD47XG5cbi8qKiBDcmVhdGUgYSBuZXcgY29tcHV0ZWQgc2lnbmFsIGZyb20gb25lIG9yIG1vcmUgc2lnbmFsIGRlcGVuZGVuY2llcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkPEQgZXh0ZW5kcyBTaWduYWxzLCBUPihcbiAgZGVwZW5kZW5jaWVzOiBELFxuICBmbj86ICh2YWx1ZXM6IFNpZ25hbFZhbHVlczxEPiwgc2V0PzogKHZhbHVlOiBhbnkpID0+IHZvaWQpID0+IFRcbik6IFNpZ25hbDx1bmtub3duPjtcblxuLyoqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCBzaWduYWwgZnJvbSBvbmUgb3IgbW9yZSBzaWduYWwgZGVwZW5kZW5jaWVzICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQ8RCBleHRlbmRzIFNpZ25hbHM+KFxuICBkZXBlbmRlbmNpZXM6IEQsXG4gIGZuPzogKC4uLnBhcmFtczogYW55W10pID0+IGFueVxuKTogU2lnbmFsPGFueT4ge1xuICBjb25zdCBhdXRvID0gZm4ubGVuZ3RoIDwgMjtcbiAgY29uc3QgcyA9IHNpZ25hbDxhbnk+KCk7XG4gIGNvbnN0IHNpbmdsZSA9ICFBcnJheS5pc0FycmF5KGRlcGVuZGVuY2llcyk7XG4gIGNvbnN0IGRlcHMgPSBzaW5nbGVcbiAgICA/IChbZGVwZW5kZW5jaWVzXSBhcyBTaWduYWw8U2lnbmFsVmFsdWVzPEQ+PltdKVxuICAgIDogKGRlcGVuZGVuY2llcyBhcyBTaWduYWw8U2lnbmFsVmFsdWVzPEQ+PltdKTtcblxuICAvLyBXZSBvbmx5IG5lZWQgdG8gc3Vic2NyaWJlIHRvIHRoZSBmaXJzdCBpdGVtIGJlY2F1c2VcbiAgLy8gdGhlIGFjdCBvZiByZXRyaWV2aW5nIGFsbCBkZXBlbmRlbmN5IHZhbHVlcyB3aWxsIGFkZCB0aGVtXG4gIC8vIHRvIHRoZSBjb250ZXh0IHN0YWNrIGFwcHJvcHJpYXRlbHlcbiAgY29uc3QgZGVwID0gZGVwc1swXTtcbiAgZGVwLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgY29uc3QgdmFsdWVzID0gZGVwcy5tYXAoKGRlcCkgPT4gZGVwLmdldCgpKTtcbiAgICBjb25zdCByZXQgPSBzaW5nbGUgPyB2YWx1ZXNbMF0gOiAodmFsdWVzIGFzIFNpZ25hbFZhbHVlczxEPik7XG4gICAgaWYgKGF1dG8pIHtcbiAgICAgIHMuc2V0KGZuKHJldCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbihyZXQsIHMuc2V0KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcztcbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSB3Yy9uby1zZWxmLWNsYXNzICovXG5pbXBvcnQgeyBjb25maWcsIHNlbGVjdG9yRmFjdG9yeSB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzLCBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IE10ZUVsZW1lbnQgfSBmcm9tICcuL210ZS5lbGVtZW50JztcbmltcG9ydCB7IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9IGZyb20gJy4uL2F0dHJpYnV0ZS1jb252ZXJ0ZXInO1xuXG5leHBvcnQgdHlwZSBTcGFjaW5nVmFsdWUgPVxuICB8IG51bWJlclxuICB8IHN0cmluZ1xuICB8IDFcbiAgfCAyXG4gIHwgM1xuICB8IDRcbiAgfCA1XG4gIHwgNlxuICB8ICdub25lJ1xuICB8ICd4cydcbiAgfCAnc20nXG4gIHwgJ21kJ1xuICB8ICdsZydcbiAgfCAneGwnXG4gIHwgJ3h4bCdcbiAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFVuaXRWYWx1ZSA9IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgQm9yZGVyUmFkaXVzVmFsdWUgPVxuICB8ICdub25lJ1xuICB8ICd4cydcbiAgfCAnc20nXG4gIHwgJ21kJ1xuICB8ICdsZydcbiAgfCAneGwnXG4gIHwgJ3h4bCdcbiAgfCAnZnVsbCdcbiAgfCBzdHJpbmdcbiAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIEJvcmRlcldpZHRoVmFsdWUgPSAnbm9uZScgfCAnc20nIHwgJ21kJyB8ICdsZycgfCBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIE9wYWNpdHlWYWx1ZSA9XG4gIHwgJ3h4eHMnXG4gIHwgJ3h4cydcbiAgfCAneHMnXG4gIHwgJ3NtJ1xuICB8ICdtZCdcbiAgfCAnbGcnXG4gIHwgJ3hsJ1xuICB8ICd4eGwnXG4gIHwgc3RyaW5nXG4gIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBSZXNwb25zaXZlVmFsdWU8VD4gPSBUIHwgUGFydGlhbDxSZWNvcmQ8J3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJywgVD4+O1xuXG5jb25zdCBkZWZhdWx0Qm9yZGVyRmFjdG9yeSA9ICh3aWR0aD8sIGNvbG9yPywgc3R5bGU/KSA9PlxuICBgJHtzdHlsZSA/PyAnc29saWQnfSAke1xuICAgIGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kcyhbXG4gICAgICB7IHByb3A6ICdib3JkZXJXaWR0aCcsIHZhbHVlOiBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKHdpZHRoID8/ICcxcHgnKSB9LFxuICAgIF0pWzBdPy52YWx1ZVxuICB9ICR7ZG90U3RyaW5nVG9Db25maWdWYWx1ZShjb2xvcikgPz8gY29uZmlnLmNvbG9yLmJvcmRlcjF9YDtcblxuZXhwb3J0IGNsYXNzIE10ZUNvbnRlbnRCYXNlIGV4dGVuZHMgTXRlRWxlbWVudCB7XG4gIC8vIC0tIFNwYWNpbmcgUHJvcHMgLS1cblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tcmlnaHRgIGFuZCBgbWFyZ2luLWxlZnRgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBteD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXRvcGAgYW5kIGBtYXJnaW4tYm90dG9tYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbXk/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi10b3BgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbXQ/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi1yaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtcj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLWJvdHRvbWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtYj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLWxlZnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWw/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmdgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1yaWdodGAgYW5kIGBwYWRkaW5nLWxlZnRgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBweD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy10b3BgIGFuZCBgcGFkZGluZy1ib3R0b21gIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBweT86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy10b3BgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcHQ/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctcmlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcHI/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctYm90dG9tYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHBiPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLWxlZnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcGw/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvLyAtLSBQb3NpdGlvbmluZyBQcm9wcyAtLVxuXG4gIC8qKiBTZXRzIHRoZSBgZGlzcGxheWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBkPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnYmxvY2snXG4gICAgfCAnaW5saW5lLWJsb2NrJ1xuICAgIHwgJ2ZsZXgnXG4gICAgfCAnaW5saW5lLWZsZXgnXG4gICAgfCAnZ3JpZCdcbiAgICB8ICdpbmxpbmUtZ3JpZCdcbiAgICB8ICdpbmxpbmUnXG4gICAgfCAnbGlzdC1pdGVtJ1xuICAgIHwgJ25vbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24taXRlbXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2Jhc2VsaW5lJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGFsaWduLWl0ZW1zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGFsaWduSXRlbXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdiYXNlbGluZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1zZWxmYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGFsaWduU2VsZj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2F1dG8nXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnYmFzZWxpbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24tY29udGVudGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBhbGlnbkNvbnRlbnQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIHwgJ3NwYWNlLWFyb3VuZCdcbiAgICB8ICdzcGFjZS1ldmVubHknXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1jb250ZW50YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGo/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3BhY2UtYmV0d2VlbidcbiAgICB8ICdzcGFjZS1hcm91bmQnXG4gICAgfCAnc3BhY2UtZXZlbmx5J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGp1c3RpZnktY29udGVudGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBqdXN0aWZ5Q29udGVudD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIHwgJ3NwYWNlLWFyb3VuZCdcbiAgICB8ICdzcGFjZS1ldmVubHknXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1pdGVtc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBqdXN0aWZ5SXRlbXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2xlZnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdyaWdodCdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LXNlbGZgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkganVzdGlmeVNlbGY/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ2xlZnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdyaWdodCdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGZsZXg6IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1kaXJlY3Rpb25gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZGlyZWN0aW9uPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdyb3cnIHwgJ3Jvd1JldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uUmV2ZXJzZScgfCAnaW5pdGlhbCcgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtZGlyZWN0aW9uYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhEaXJlY3Rpb24/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3JvdycgfCAncm93UmV2ZXJzZScgfCAnY29sdW1uJyB8ICdjb2x1bW5SZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1iYXNpc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBiYXNpcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtYmFzaXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleEJhc2lzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1ncm93YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyb3c/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWdyb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleEdyb3c/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXNocmlua2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBzaHJpbms/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXNocmlua2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4U2hyaW5rPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC13cmFwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIHdyYXA/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ25vd3JhcCcgfCAnd3JhcCcgfCAnd3JhcC1yZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC13cmFwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhXcmFwPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdub3dyYXAnIHwgJ3dyYXAnIHwgJ3dyYXAtcmV2ZXJzZScgfCAnaW5pdGlhbCcgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYG9yZGVyYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIG9yZGVyPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ2FwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdhcD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgY29sdW1uLWdhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBjb2x1bW5HYXA/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHJvdy1nYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcm93R2FwPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWNvbHVtbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQ29sdW1uPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1yb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZFJvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXV0by1mbG93YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRBdXRvRmxvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAncm93JyB8ICdjb2x1bW4nIHwgJ2RlbnNlJyB8ICdyb3cgZGVuc2UnIHwgJ2NvbHVtbiBkZW5zZSdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXV0by1jb2x1bW5zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRBdXRvQ29sdW1ucz86IFJlc3BvbnNpdmVWYWx1ZTwnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWF1dG8tcm93c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQXV0b1Jvd3M/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgJ2F1dG8nIHwgJ21heC1jb250ZW50JyB8ICdtaW4tY29udGVudCcgfCBVbml0VmFsdWVcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtdGVtcGxhdGUtY29sdW1uc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBncmlkVGVtcGxhdGVDb2x1bW5zPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgICdub25lJyB8ICdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXRlbXBsYXRlLXJvd3NgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZFRlbXBsYXRlUm93cz86IFJlc3BvbnNpdmVWYWx1ZTwnbm9uZScgfCAnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXRlbXBsYXRlLWFyZWFzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRUZW1wbGF0ZUFyZWFzPzogUmVzcG9uc2l2ZVZhbHVlPCdub25lJyB8IHN0cmluZyB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWFyZWFgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZEFyZWE/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLy8gLS0gU2l6aW5nIFByb3BzIC0tXG5cbiAgLyoqIFNldHMgdGhlIGB3aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSB3PzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXgtd2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWF4dz86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWluLXdpZHRoYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1pbnc/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGhlaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBoPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXgtaGVpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1heGg/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1pbi1oZWlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWluaD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYmFja2dyb3VuZGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gQ2FuIGJlIHBhc3NlZCBkb3Qgbm90YXRlZCB0aGVtZSBjb25maWcgc3RyaW5ncyB0byBzZWxlY3QgY29sb3IgdG9rZW4gdmFsdWVzLiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBiZz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGNvbG9yYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiBDYW4gYmUgcGFzc2VkIGRvdCBub3RhdGVkIHRoZW1lIGNvbmZpZyBzdHJpbmdzIHRvIHNlbGVjdCBjb2xvciB0b2tlbiB2YWx1ZXMuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItY29sb3JgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuIENhbiBiZSBwYXNzZWQgZG90IG5vdGF0ZWQgdGhlbWUgY29uZmlnIHN0cmluZ3MgdG8gc2VsZWN0IGNvbG9yIHRva2VuIHZhbHVlcy4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYm9yZGVyQ29sb3I/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItd2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlcldpZHRoPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlcldpZHRoVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXN0eWxlYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBib3JkZXJTdHlsZT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAnc29saWQnIHwgJ2RvdHRlZCcgfCAnZGFzaGVkJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXI/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJUb3A/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItcmlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclJpZ2h0PzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tPzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWxlZnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckxlZnQ/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItcmFkaXVzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcFJpZ2h0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3AtbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcExlZnRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNgIGFuZCBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJUb3BSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNgIGFuZCBgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyUmlnaHRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNgIGFuZCBgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJCb3R0b21SYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c2AgYW5kIGBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckxlZnRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbGluZS1oZWlnaHRgIGNzcyBwcm9wZXJ0eSAgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgbGluZUhlaWdodD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCBudW1iZXJcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZvbnQtd2VpZ2h0YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZm9udFdlaWdodD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2xpZ2h0J1xuICAgIHwgJ3JlZ3VsYXInXG4gICAgfCAnbWVkaXVtJ1xuICAgIHwgJ2xpZ2h0ZXInXG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ2JvbGQnXG4gICAgfCAnYm9sZGVyJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgICB8ICcxMDAnXG4gICAgfCAnMjAwJ1xuICAgIHwgJzMwMCdcbiAgICB8ICc0MDAnXG4gICAgfCAnNTAwJ1xuICAgIHwgJzYwMCdcbiAgICB8ICc3MDAnXG4gICAgfCAnODAwJ1xuICAgIHwgJzkwMCdcbiAgPjtcblxuICAvKiogU2hvcnRoYW5kIGZvciBgZm9udFdlaWdodGAuIFNldHMgdGhlIGBmb250LXdlaWdodGAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZ3PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnbGlnaHQnXG4gICAgfCAncmVndWxhcidcbiAgICB8ICdtZWRpdW0nXG4gICAgfCAnbGlnaHRlcidcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnYm9sZCdcbiAgICB8ICdib2xkZXInXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICAgIHwgJzEwMCdcbiAgICB8ICcyMDAnXG4gICAgfCAnMzAwJ1xuICAgIHwgJzQwMCdcbiAgICB8ICc1MDAnXG4gICAgfCAnNjAwJ1xuICAgIHwgJzcwMCdcbiAgICB8ICc4MDAnXG4gICAgfCAnOTAwJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZm9udC1zaXplYCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZm9udFNpemU/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgVW5pdFZhbHVlIHwgJ3h4cycgfCAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnXG4gID47XG5cbiAgLyoqIFNob3J0aGFuZCBmb3IgYGZvbnRTaXplYC4gU2V0cyB0aGUgYGZvbnQtc2l6ZWAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8IFVuaXRWYWx1ZSB8ICd4eHMnIHwgJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZm9udC1mYW1pbHlgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmb250RmFtaWx5PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdzYW5zJyB8ICdzZXJpZicgfCAnbW9ubycgfCBzdHJpbmdcbiAgPjtcblxuICAvKiogU2hvcnRoYW5kIGZvciBgb3BhY2l0eWAuIFNldHMgdGhlIGBvcGFjaXR5YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgb3BhY2l0eT86IFJlc3BvbnNpdmVWYWx1ZTxPcGFjaXR5VmFsdWU+O1xuXG4gIC8qKiBBcHBsaWVzIE1vcnRhciBzdGFuZGFyZCBib3gtc2hhZG93IHZhbHVlcyAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBlbGV2YXRpb24/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgJ3owJyB8ICd6MScgfCAnejInIHwgJ3ozJyB8ICd6NCdcbiAgPjtcblxuICAvKiogQWRqdXN0IHRoaXMgZWxlbWVudHMgYmxlZWQgaWYgaXQgaXMgYSBkaXJlY3QgZGVzY2VuZGFudCBvZiBhbiBtdGUtbGF5b3V0LWNvbnRhaW5lciAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGxheW91dEJsZWVkPzogJ2Z1bGwnIHwgJ3BvcG91dCcgfCAnY29udGVudCcgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhpcyBlbGVtZW50IGFzIGEgc3ViZ3JpZCB3aGVuIHNldC4gYGRpc3BsYXlgIGlzIHNldCB0byBgZ3JpZGAgYW5kIGBncmlkLXRlbXBsYXRlLWNvbHVtbnNgIGlzIHNldCB0byBgc3ViZ3JpZGAuXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgc3ViZ3JpZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIHNlbGVjdG9yIHRvIGhhdmUgaW5zdGFuY2Ugc3R5bGVzIHRhcmdldCBhIHNwZWNpZmljIGlubmVyIGVsZW1lbnQuXG4gICAqIFVzZWZ1bCBpbiBzcGVjaWZpYyBzY2VuYXJpb3Mgd2hlcmUgdGhlIHByaW1hcnkgY29udGVudC9zbG90IHdyYXBwZWQgd2l0aGluIHRoZSB0ZW1wbGF0ZVxuICAgKiBsaWtlIHdpdGggdGhlIG1vZGFsIGNvbXBvbmVudC5cbiAgICovXG4gIHByb3RlY3RlZCBjb250ZW50U3R5bGVTZWxlY3RvclJvb3QgPSAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0JztcblxuICAvLyBMaXN0IG9mIHByb3BzIGZvciBvcHRpbWFsIHN0eWxlIHVwZGF0ZSBjaGVja2luZ1xuICBwcml2YXRlIHN0YXRpYyBjb250ZW50UHJvcHMgPSBuZXcgU2V0KFtcbiAgICAnbScsXG4gICAgJ214JyxcbiAgICAnbXknLFxuICAgICdtdCcsXG4gICAgJ21yJyxcbiAgICAnbWInLFxuICAgICdtbCcsXG4gICAgJ3AnLFxuICAgICdweCcsXG4gICAgJ3B5JyxcbiAgICAncHQnLFxuICAgICdwcicsXG4gICAgJ3BiJyxcbiAgICAncGwnLFxuICAgICdkJyxcbiAgICAnYScsXG4gICAgJ2onLFxuICAgICdiYXNpcycsXG4gICAgJ3NocmluaycsXG4gICAgJ2dyb3cnLFxuICAgICdkaXJlY3Rpb24nLFxuICAgICd3cmFwJyxcbiAgICAnYWxpZ25JdGVtcycsXG4gICAgJ2FsaWduU2VsZicsXG4gICAgJ2FsaWduQ29udGVudCcsXG4gICAgJ2p1c3RpZnlDb250ZW50JyxcbiAgICAnanVzdGlmeUl0ZW1zJyxcbiAgICAnanVzdGlmeVNlbGYnLFxuICAgICdmbGV4JyxcbiAgICAnZmxleERpcmVjdGlvbicsXG4gICAgJ2ZsZXhCYXNpcycsXG4gICAgJ2ZsZXhTaHJpbmsnLFxuICAgICdmbGV4R3JvdycsXG4gICAgJ2ZsZXhXcmFwJyxcbiAgICAnb3JkZXInLFxuICAgICdnYXAnLFxuICAgICdjb2x1bW5HYXAnLFxuICAgICdyb3dHYXAnLFxuICAgICdncmlkQ29sdW1uJyxcbiAgICAnZ3JpZFJvdycsXG4gICAgJ2dyaWRBdXRvRmxvdycsXG4gICAgJ2dyaWRBdXRvQ29sdW1ucycsXG4gICAgJ2dyaWRBdXRvUm93cycsXG4gICAgJ2dyaWRUZW1wbGF0ZUNvbHVtbnMnLFxuICAgICdncmlkVGVtcGxhdGVSb3dzJyxcbiAgICAnZ3JpZFRlbXBsYXRlQXJlYXMnLFxuICAgICdncmlkQXJlYScsXG4gICAgJ3cnLFxuICAgICdtYXh3JyxcbiAgICAnbWludycsXG4gICAgJ2gnLFxuICAgICdtYXhoJyxcbiAgICAnbWluaCcsXG4gICAgJ2JnJyxcbiAgICAnYycsXG4gICAgJ2JvcmRlckNvbG9yJyxcbiAgICAnYm9yZGVyV2lkdGgnLFxuICAgICdib3JkZXJTdHlsZScsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvcmRlclRvcCcsXG4gICAgJ2JvcmRlclJpZ2h0JyxcbiAgICAnYm9yZGVyQm90dG9tJyxcbiAgICAnYm9yZGVyTGVmdCcsXG4gICAgJ2JvcmRlclJhZGl1cycsXG4gICAgJ2JvcmRlclRvcFJpZ2h0UmFkaXVzJyxcbiAgICAnYm9yZGVyVG9wTGVmdFJhZGl1cycsXG4gICAgJ2JvcmRlckJvdHRvbVJpZ2h0UmFkaXVzJyxcbiAgICAnYm9yZGVyQm90dG9tTGVmdFJhZGl1cycsXG4gICAgJ2JvcmRlclRvcFJhZGl1cycsXG4gICAgJ2JvcmRlclJpZ2h0UmFkaXVzJyxcbiAgICAnYm9yZGVyQm90dG9tUmFkaXVzJyxcbiAgICAnYm9yZGVyTGVmdFJhZGl1cycsXG4gICAgJ2xpbmVIZWlnaHQnLFxuICAgICdmb250V2VpZ2h0JyxcbiAgICAnZncnLFxuICAgICdmb250U2l6ZScsXG4gICAgJ2ZzJyxcbiAgICAnZm9udEZhbWlseScsXG4gICAgJ29wYWNpdHknLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdsYXlvdXRCbGVlZCcsXG4gICAgJ3N1YmdyaWQnLFxuICBdKTtcblxuICBwcm90ZWN0ZWQgdXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzOiBNYXA8c3RyaW5nLCBhbnk+KSB7XG4gICAgc3VwZXIudXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKTtcblxuICAgIC8vIENoZWNrIGlmIGFueSBjb250ZW50IHByb3AgaGFzIGNoYW5nZWQgdG8gZGV0ZXJtaW5lIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBpbnN0YW5jZSBzdHlsZXNcbiAgICBsZXQgc2hvdWxkVXBkYXRlU3R5bGVzID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgY2hhbmdlZFByb3BzLmtleXMoKSkge1xuICAgICAgaWYgKE10ZUNvbnRlbnRCYXNlLmNvbnRlbnRQcm9wcy5oYXMoa2V5KSkge1xuICAgICAgICBzaG91bGRVcGRhdGVTdHlsZXMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkVXBkYXRlU3R5bGVzKSB7XG4gICAgICAvLyBEb3VibGUgdGhlIGA6aG9zdGAgc2VsZWN0b3IgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgYmV5b25kIG1vc3QgY29tcG9uZW50IGxldmVsIHN0eWxlcyBieSBkZWZhdWx0XG4gICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoJ2NvbnRlbnQtYmFzZScsIHNlbGVjdG9yRmFjdG9yeSh0aGlzLmNvbnRlbnRTdHlsZVNlbGVjdG9yUm9vdCksIHtcbiAgICAgICAgLy8gU3BhY2luZ1xuICAgICAgICBtOiB0aGlzLm0sXG4gICAgICAgIG14OiB0aGlzLm14LFxuICAgICAgICBteTogdGhpcy5teSxcbiAgICAgICAgbXQ6IHRoaXMubXQsXG4gICAgICAgIG1yOiB0aGlzLm1yLFxuICAgICAgICBtYjogdGhpcy5tYixcbiAgICAgICAgbWw6IHRoaXMubWwsXG4gICAgICAgIHA6IHRoaXMucCxcbiAgICAgICAgcHg6IHRoaXMucHgsXG4gICAgICAgIHB5OiB0aGlzLnB5LFxuICAgICAgICBwdDogdGhpcy5wdCxcbiAgICAgICAgcHI6IHRoaXMucHIsXG4gICAgICAgIHBiOiB0aGlzLnBiLFxuICAgICAgICBwbDogdGhpcy5wbCxcbiAgICAgICAgLy8gUG9zaXRpb25pbmdcbiAgICAgICAgZDogdGhpcy5zdWJncmlkID8gJ2dyaWQnIDogdGhpcy5kLFxuICAgICAgICBhbGlnbkl0ZW1zOiB0aGlzLmEgPz8gdGhpcy5hbGlnbkl0ZW1zLFxuICAgICAgICBhbGlnblNlbGY6IHRoaXMuYWxpZ25TZWxmLFxuICAgICAgICBhbGlnbkNvbnRlbnQ6IHRoaXMuYWxpZ25Db250ZW50LFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogdGhpcy5qID8/IHRoaXMuanVzdGlmeUNvbnRlbnQsXG4gICAgICAgIGp1c3RpZnlJdGVtczogdGhpcy5qdXN0aWZ5SXRlbXMsXG4gICAgICAgIGp1c3RpZnlTZWxmOiB0aGlzLmp1c3RpZnlTZWxmLFxuICAgICAgICBmbGV4OiB0aGlzLmZsZXgsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uID8/IHRoaXMuZmxleERpcmVjdGlvbixcbiAgICAgICAgZmxleEJhc2lzOiB0aGlzLmJhc2lzID8/IHRoaXMuZmxleEJhc2lzLFxuICAgICAgICBmbGV4U2hyaW5rOiB0aGlzLnNocmluayA/PyB0aGlzLmZsZXhTaHJpbmssXG4gICAgICAgIGZsZXhHcm93OiB0aGlzLmdyb3cgPz8gdGhpcy5mbGV4R3JvdyxcbiAgICAgICAgZmxleFdyYXA6IHRoaXMud3JhcCA/PyB0aGlzLmZsZXhXcmFwLFxuICAgICAgICBvcmRlcjogdGhpcy5vcmRlcixcbiAgICAgICAgZ2FwOiB0aGlzLmdhcCxcbiAgICAgICAgY29sdW1uR2FwOiB0aGlzLmNvbHVtbkdhcCxcbiAgICAgICAgcm93R2FwOiB0aGlzLnJvd0dhcCxcbiAgICAgICAgZ3JpZENvbHVtbjogdGhpcy5sYXlvdXRCbGVlZCA/IHRoaXMubGF5b3V0QmxlZWQgOiB0aGlzLmdyaWRDb2x1bW4sXG4gICAgICAgIGdyaWRSb3c6IHRoaXMuZ3JpZFJvdyxcbiAgICAgICAgZ3JpZEF1dG9GbG93OiB0aGlzLmdyaWRBdXRvRmxvdyxcbiAgICAgICAgZ3JpZEF1dG9Db2x1bW5zOiB0aGlzLmdyaWRBdXRvQ29sdW1ucyxcbiAgICAgICAgZ3JpZEF1dG9Sb3dzOiB0aGlzLmdyaWRBdXRvUm93cyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogdGhpcy5zdWJncmlkID8gJ3N1YmdyaWQnIDogdGhpcy5ncmlkVGVtcGxhdGVDb2x1bW5zLFxuICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiB0aGlzLmdyaWRUZW1wbGF0ZVJvd3MsXG4gICAgICAgIGdyaWRUZW1wbGF0ZUFyZWFzOiB0aGlzLmdyaWRUZW1wbGF0ZUFyZWFzLFxuICAgICAgICBncmlkQXJlYTogdGhpcy5ncmlkQXJlYSxcbiAgICAgICAgLy8gU2l6aW5nXG4gICAgICAgIHc6IHRoaXMudyxcbiAgICAgICAgbWF4dzogdGhpcy5tYXh3LFxuICAgICAgICBtaW53OiB0aGlzLm1pbncsXG4gICAgICAgIGg6IHRoaXMuaCxcbiAgICAgICAgbWF4aDogdGhpcy5tYXhoLFxuICAgICAgICBtaW5oOiB0aGlzLm1pbmgsXG4gICAgICAgIC8vIENvbG9yc1xuICAgICAgICBiZzogdGhpcy5iZyxcbiAgICAgICAgYzogdGhpcy5jLFxuICAgICAgICAvLyBCb3JkZXJzXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGlzLmJvcmRlckNvbG9yLFxuICAgICAgICBib3JkZXJXaWR0aDogdGhpcy5ib3JkZXJXaWR0aCxcbiAgICAgICAgYm9yZGVyU3R5bGU6IHRoaXMuYm9yZGVyU3R5bGUsXG4gICAgICAgIGJvcmRlcjogdGhpcy5ib3JkZXJcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJUb3A6IHRoaXMuYm9yZGVyVG9wXG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm9yZGVyUmlnaHQ6IHRoaXMuYm9yZGVyUmlnaHRcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJMZWZ0OiB0aGlzLmJvcmRlckxlZnRcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJCb3R0b206IHRoaXMuYm9yZGVyQm90dG9tXG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgLy8gQm9yZGVyIFJhZGl1c1xuICAgICAgICBib3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyUmFkaXVzLFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlclRvcFJpZ2h0UmFkaXVzID8/IHRoaXMuYm9yZGVyVG9wUmFkaXVzID8/IHRoaXMuYm9yZGVyUmlnaHRSYWRpdXMsXG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJUb3BMZWZ0UmFkaXVzID8/IHRoaXMuYm9yZGVyVG9wUmFkaXVzID8/IHRoaXMuYm9yZGVyTGVmdFJhZGl1cyxcbiAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA/PyB0aGlzLmJvcmRlckJvdHRvbVJhZGl1cyA/PyB0aGlzLmJvcmRlclJpZ2h0UmFkaXVzLFxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOlxuICAgICAgICAgIHRoaXMuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA/PyB0aGlzLmJvcmRlckJvdHRvbVJhZGl1cyA/PyB0aGlzLmJvcmRlckxlZnRSYWRpdXMsXG4gICAgICAgIC8vIEZvbnRzXG4gICAgICAgIGxpbmVIZWlnaHQ6IHRoaXMubGluZUhlaWdodCxcbiAgICAgICAgZm9udFdlaWdodDogdGhpcy5mdyA/PyB0aGlzLmZvbnRXZWlnaHQsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLmZzID8/IHRoaXMuZm9udFNpemUsXG4gICAgICAgIGZvbnRGYW1pbHk6IHRoaXMuZm9udEZhbWlseSxcbiAgICAgICAgLy8gT3BhY2l0eVxuICAgICAgICBvcGFjaXR5OiB0aGlzLm9wYWNpdHksXG4gICAgICAgIC8vIEVsZXZhdGlvblxuICAgICAgICBlbGV2YXRpb246IHRoaXMuZWxldmF0aW9uLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgZGVmYXVsdENvbnZlcnRlciB9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBjb25zdCBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgPSB7XG4gIGZyb21BdHRyaWJ1dGU6ICh2YWx1ZSwgdHlwZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAodmFsdWU/LlswXSA9PT0gJ3snKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLmZyb21BdHRyaWJ1dGUodmFsdWUsIE9iamVjdCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLmZyb21BdHRyaWJ1dGUodmFsdWUsIHR5cGUpO1xuICB9LFxuICB0b0F0dHJpYnV0ZTogKHZhbHVlLCB0eXBlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLnRvQXR0cmlidXRlKHZhbHVlLCBPYmplY3QpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdENvbnZlcnRlci50b0F0dHJpYnV0ZSh2YWx1ZSwgdHlwZSk7XG4gIH0sXG59O1xuIiwgImltcG9ydCB7IERpcmVjdGl2ZVJlc3VsdCB9IGZyb20gJ2xpdC9kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHsgdW5zYWZlU1ZHLCBVbnNhZmVTVkdEaXJlY3RpdmUgfSBmcm9tICdsaXQvZGlyZWN0aXZlcy91bnNhZmUtc3ZnLmpzJztcblxuZXhwb3J0IGNvbnN0IGhlYkxvZ29TdmdDb250ZW50czogRGlyZWN0aXZlUmVzdWx0PHR5cGVvZiBVbnNhZmVTVkdEaXJlY3RpdmU+ID0gdW5zYWZlU1ZHKFxuICBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiBpZD1cIkxheWVyXzFcIiB4PVwiMFwiIHk9XCIwXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgNTM2LjI3IDE4Ni4yNFwiPjxzdHlsZT4uc3Qwe2ZpbGw6I2UxMjUxYn0uc3Qxe2ZpbGw6I2ZmZn08L3N0eWxlPjxnIGlkPVwiX3gzMV8tSEVCX01BSU5fTE9HT18wMDAwMDA5NjA0MzQwNDIwNjg2MTg4MDg3MDAwMDAwNDgxMzI0MDkzODk0Njg1NTM1NV9cIj48cGF0aCBkPVwiTTkzLjEyIDE4Ni4yNEM0MS42OSAxODYuMjQgMCAxNDQuNTUgMCA5My4xMlM0MS42OSAwIDkzLjEyIDBoMzUwLjAzYzUxLjQzIDAgOTMuMTIgNDEuNjkgOTMuMTIgOTMuMTJzLTQxLjY5IDkzLjEyLTkzLjEyIDkzLjEySDkzLjEyelwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNOTMuMTIgMTc0LjE5Yy00NC43NiAwLTgxLjA1LTM2LjI5LTgxLjA1LTgxLjA1czM2LjI5LTgxLjA1IDgxLjA1LTgxLjA1aDM1MC4wM2M0NC43NiAwIDgxLjA1IDM2LjI5IDgxLjA1IDgxLjA1cy0zNi4yOSA4MS4wNS04MS4wNSA4MS4wNUg5My4xMnpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwibTQ0NC45NCAyNC4xMS0zNTMuNjQuMDJjLTM3LjA3IDAtNjcuMiAzMC45NS02Ny4xNiA2OS4wNyAwIDM3LjkzIDMwLjE2IDY4Ljg4IDY3LjE2IDY4Ljg4bDM1My42My0uMDdjMzcuMS0uMDMgNjcuMTUtMzAuODkgNjcuMi02OC44NS0uMDQtMzguMi0zMC4wOS02OS4wNS02Ny4xOS02OS4wNXpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTIyNC4yMSAxMzIuMjNoODguMWwuNzYtMTIuOThoLTU2LjE4di0xNC44NGg0NC44MVY4OS4zM2gtNDQuODFWNzMuMjVsNTguOTItLjAxIDEuMTUtMTkuMjloLTk3LjR6TTEzMi40NiA1My45NXYzNS4zOEgxMDguNlY1My45NUg3MS4yN2w0LjY1IDc4LjI4aDMyLjY4di0yNy44MmgyMy44NnYyNy44MmgzMi42OGw0LjY1LTc4LjI4ek00NDguNTIgOTcuMDJjOS45LTIuODMgMTYuNDktOC41OSAxNi40OS0yMC42Ny4wMy0xMy44Mi0xMS4wNi0yMi40LTI1LjI5LTIyLjRoLTczLjI4bDQuNjUgNzguMjloNjQuMDZjMjcuOTggMCAyNi4zOS0xOC44IDI2LjM5LTE4LjggMC03Ljk2LTUuMzMtMTQuNjEtMTMuMDItMTYuNDJ6bS0zMS4wMiAyMi4yMmgtMTMuNzF2LTE0LjgzaDEzLjIyYzcuMjMgMCAxMS4wOSAyLjMxIDExLjA5IDcuNDguMDEgNC45NC0zLjQ5IDcuMzUtMTAuNiA3LjM1em0xLjA2LTI5LjkxaC0xNC43N1Y3My4yNWgxNC4yNWM3Ljg1IDAgMTIuMDMgMi41IDEyLjAzIDguMTEgMCA1LjM1LTMuNzkgNy45Ny0xMS41MSA3Ljk3ek0xODIuNzYgODkuMzNsLjkgMTUuMDhoMjIuMDNsLjktMTUuMDh6TTMyOS42NCA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwiTTUzMC4zNCAxNzIuNzdjMC0yLjQ2LTEuNDYtMy41NC00LjQtMy41NGgtNC43NHYxMi40NGgxLjg4di01LjM5aDIuMTdsMy4yOCA1LjM5aDIuMTFsLTMuNTQtNS40OGMxLjg0LS4yMiAzLjI0LTEuMTkgMy4yNC0zLjQyem0tNy4yNSAxLjkydi0zLjg2aDIuNTdjMS4zMSAwIDIuNzEuMjkgMi43MSAxLjgzIDAgMS45Mi0xLjQzIDIuMDMtMy4wMyAyLjAzaC0yLjI1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNNTI1LjM3IDE2NC42N2MtNS45MyAwLTEwLjk2IDQuNTctMTAuOTYgMTAuNzYgMCA2LjI0IDUuMDIgMTAuODEgMTAuOTYgMTAuODEgNS44OCAwIDEwLjktNC41NyAxMC45LTEwLjgxIDAtNi4yLTUuMDItMTAuNzYtMTAuOS0xMC43NnptMCAxOS43OGMtNC45MyAwLTguNzktMy44My04Ljc5LTkuMDIgMC01LjExIDMuODUtOC45NiA4Ljc5LTguOTYgNC44OCAwIDguNzMgMy44NSA4LjczIDguOTYgMCA1LjE5LTMuODUgOS4wMi04LjczIDkuMDJ6XCIgY2xhc3M9XCJzdDBcIi8+PC9nPjwvc3ZnPmBcbik7XG5cbmV4cG9ydCBjb25zdCBoZWJMb2dvV2hpdGVDb3B5cmlnaHRTdmdDb250ZW50czogRGlyZWN0aXZlUmVzdWx0PHR5cGVvZiBVbnNhZmVTVkdEaXJlY3RpdmU+ID1cbiAgdW5zYWZlU1ZHKFxuICAgIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIGlkPVwiTGF5ZXJfMVwiIHg9XCIwXCIgeT1cIjBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MzYuMjcgMTg2LjI0XCI+PHN0eWxlPi5zdDB7ZmlsbDojZTEyNTFifS5zdDF7ZmlsbDojZmZmfTwvc3R5bGU+PGcgaWQ9XCJfeDMxXy1IRUJfTUFJTl9MT0dPXzAwMDAwMDk2MDQzNDA0MjA2ODYxODgwODcwMDAwMDA0ODEzMjQwOTM4OTQ2ODU1MzU1X1wiPjxwYXRoIGQ9XCJNOTMuMTIgMTg2LjI0QzQxLjY5IDE4Ni4yNCAwIDE0NC41NSAwIDkzLjEyUzQxLjY5IDAgOTMuMTIgMGgzNTAuMDNjNTEuNDMgMCA5My4xMiA0MS42OSA5My4xMiA5My4xMnMtNDEuNjkgOTMuMTItOTMuMTIgOTMuMTJIOTMuMTJ6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk05My4xMiAxNzQuMTljLTQ0Ljc2IDAtODEuMDUtMzYuMjktODEuMDUtODEuMDVzMzYuMjktODEuMDUgODEuMDUtODEuMDVoMzUwLjAzYzQ0Ljc2IDAgODEuMDUgMzYuMjkgODEuMDUgODEuMDVzLTM2LjI5IDgxLjA1LTgxLjA1IDgxLjA1SDkzLjEyelwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJtNDQ0Ljk0IDI0LjExLTM1My42NC4wMmMtMzcuMDcgMC02Ny4yIDMwLjk1LTY3LjE2IDY5LjA3IDAgMzcuOTMgMzAuMTYgNjguODggNjcuMTYgNjguODhsMzUzLjYzLS4wN2MzNy4xLS4wMyA2Ny4xNS0zMC44OSA2Ny4yLTY4Ljg1LS4wNC0zOC4yLTMwLjA5LTY5LjA1LTY3LjE5LTY5LjA1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNMjI0LjIxIDEzMi4yM2g4OC4xbC43Ni0xMi45OGgtNTYuMTh2LTE0Ljg0aDQ0LjgxVjg5LjMzaC00NC44MVY3My4yNWw1OC45Mi0uMDEgMS4xNS0xOS4yOWgtOTcuNHpNMTMyLjQ2IDUzLjk1djM1LjM4SDEwOC42VjUzLjk1SDcxLjI3bDQuNjUgNzguMjhoMzIuNjh2LTI3LjgyaDIzLjg2djI3LjgyaDMyLjY4bDQuNjUtNzguMjh6TTQ0OC41MiA5Ny4wMmM5LjktMi44MyAxNi40OS04LjU5IDE2LjQ5LTIwLjY3LjAzLTEzLjgyLTExLjA2LTIyLjQtMjUuMjktMjIuNGgtNzMuMjhsNC42NSA3OC4yOWg2NC4wNmMyNy45OCAwIDI2LjM5LTE4LjggMjYuMzktMTguOCAwLTcuOTYtNS4zMy0xNC42MS0xMy4wMi0xNi40MnptLTMxLjAyIDIyLjIyaC0xMy43MXYtMTQuODNoMTMuMjJjNy4yMyAwIDExLjA5IDIuMzEgMTEuMDkgNy40OC4wMSA0Ljk0LTMuNDkgNy4zNS0xMC42IDcuMzV6bTEuMDYtMjkuOTFoLTE0Ljc3VjczLjI1aDE0LjI1YzcuODUgMCAxMi4wMyAyLjUgMTIuMDMgOC4xMSAwIDUuMzUtMy43OSA3Ljk3LTExLjUxIDcuOTd6TTE4Mi43NiA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpNMzI5LjY0IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4ek01MjguMzQgMTcwLjc3YzAtMi40Ni0xLjQ2LTMuNTQtNC40LTMuNTRoLTQuNzR2MTIuNDRoMS44OHYtNS4zOWgyLjE3bDMuMjggNS4zOWgyLjExbC0zLjU0LTUuNDhjMS44NC0uMjIgMy4yNC0xLjE5IDMuMjQtMy40MnptLTcuMjUgMS45MnYtMy44NmgyLjU3YzEuMzEgMCAyLjcxLjI5IDIuNzEgMS44MyAwIDEuOTItMS40MyAyLjAzLTMuMDMgMi4wM2gtMi4yNXpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwiTTUyMy4zNyAxNjIuNjdjLTUuOTMgMC0xMC45NiA0LjU3LTEwLjk2IDEwLjc2IDAgNi4yNCA1LjAyIDEwLjgxIDEwLjk2IDEwLjgxIDUuODggMCAxMC45LTQuNTcgMTAuOS0xMC44MSAwLTYuMi01LjAyLTEwLjc2LTEwLjktMTAuNzZ6bTAgMTkuNzhjLTQuOTMgMC04Ljc5LTMuODMtOC43OS05LjAyIDAtNS4xMSAzLjg1LTguOTYgOC43OS04Ljk2IDQuODggMCA4LjczIDMuODUgOC43MyA4Ljk2IDAgNS4xOS0zLjg1IDkuMDItOC43MyA5LjAyelwiIGNsYXNzPVwic3QxXCIvPjwvZz48L3N2Zz5gXG4gICk7XG5cbmV4cG9ydCBjb25zdCBoZWJMb2dvSW52ZXJzZVN2Z0NvbnRlbnRzOiBEaXJlY3RpdmVSZXN1bHQ8dHlwZW9mIFVuc2FmZVNWR0RpcmVjdGl2ZT4gPSB1bnNhZmVTVkcoXG4gIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIGlkPVwiTGF5ZXJfMVwiIHg9XCIwXCIgeT1cIjBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MzYuMjcgMTg2LjI0XCI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggZD1cIk00NDMuMTUgMEg5My4xMkM0MS42OSAwIDAgNDEuNjkgMCA5My4xMmMwIDUxLjQzIDQxLjY5IDkzLjEyIDkzLjEyIDkzLjEyaDM1MC4wM2M1MS40MyAwIDkzLjEyLTQxLjY5IDkzLjEyLTkzLjEyQzUzNi4yNyA0MS42OSA0OTQuNTggMCA0NDMuMTUgMHptMCAxNzQuMTlIOTMuMTJjLTQ0Ljc2IDAtODEuMDUtMzYuMjktODEuMDUtODEuMDVzMzYuMjktODEuMDUgODEuMDUtODEuMDVoMzUwLjAzYzQ0Ljc2IDAgODEuMDUgMzYuMjkgODEuMDUgODEuMDUuMDEgNDQuNzYtMzYuMjggODEuMDUtODEuMDUgODEuMDV6bS0xMy4wOC05Mi44M2MwIDUuMzYtMy43OSA3Ljk4LTExLjUxIDcuOThoLTE0Ljc3VjczLjI1aDE0LjI1YzcuODQgMCAxMi4wMyAyLjUgMTIuMDMgOC4xMXptLTEuOTYgMzAuNTNjMCA0Ljk0LTMuNSA3LjM2LTEwLjYxIDcuMzZoLTEzLjcxdi0xNC44M2gxMy4yMmM3LjI0LS4wMSAxMS4xIDIuMyAxMS4xIDcuNDd6bTE2LjgzLTg3Ljc4LTM1My42NC4wMmMtMzcuMDcgMC02Ny4yIDMwLjk1LTY3LjE2IDY5LjA3IDAgMzcuOTIgMzAuMTYgNjguODggNjcuMTYgNjguODhsMzUzLjYzLS4wN2MzNy4xLS4wMyA2Ny4xNS0zMC44OSA2Ny4yLTY4Ljg1LS4wNC0zOC4yLTMwLjA5LTY5LjA1LTY3LjE5LTY5LjA1em0tMjc5LjggMTA4LjEyaC0zMi42OHYtMjcuODJIMTA4LjZ2MjcuODJINzUuOTJsLTQuNjUtNzguMjhoMzcuMzN2MzUuMzhoMjMuODZWNTMuOTVoMzcuMzNsLTQuNjUgNzguMjh6bTQwLjU1LTI3LjgyaC0yMi4wNGwtLjktMTUuMDhoMjMuODNsLS44OSAxNS4wOHptMTEwLjEyLTMxLjE3LTU4LjkyLjAxdjE2LjA4aDQ0LjgxdjE1LjA4aC00NC44MXYxNC44M2g1Ni4xOGwtLjc2IDEyLjk5aC04OC4xbC00LjY1LTc4LjI4aDk3LjRsLTEuMTUgMTkuMjl6bTM2Ljc2IDMxLjE3aC0yMi4wNGwtLjktMTUuMDhoMjMuODNsLS44OSAxNS4wOHptMTA4Ljk3IDkuMDNzMS41OSAxOC44LTI2LjM5IDE4LjhoLTY0LjA2bC00LjY1LTc4LjI5aDczLjI4YzE0LjIzIDAgMjUuMzEgOC41OCAyNS4yOSAyMi40IDAgMTIuMDgtNi41OSAxNy44NS0xNi40OSAyMC42NyA3LjY5IDEuODEgMTMuMDIgOC40NiAxMy4wMiAxNi40MnpNNTMwLjM0IDE3Mi43N2MwLTIuNDYtMS40Ni0zLjU0LTQuNC0zLjU0aC00Ljc0djEyLjQ0aDEuODh2LTUuMzloMi4xN2wzLjI4IDUuMzloMi4xMWwtMy41NC01LjQ4YzEuODQtLjIyIDMuMjQtMS4xOSAzLjI0LTMuNDJ6bS03LjI1IDEuOTJ2LTMuODZoMi41N2MxLjMxIDAgMi43MS4yOSAyLjcxIDEuODMgMCAxLjkyLTEuNDMgMi4wMy0zLjAzIDIuMDNoLTIuMjV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk01MjUuMzcgMTY0LjY3Yy01LjkzIDAtMTAuOTYgNC41Ny0xMC45NiAxMC43NiAwIDYuMjQgNS4wMiAxMC44MSAxMC45NiAxMC44MSA1Ljg4IDAgMTAuOS00LjU3IDEwLjktMTAuODEgMC02LjItNS4wMi0xMC43Ni0xMC45LTEwLjc2em0wIDE5Ljc4Yy00LjkzIDAtOC43OS0zLjgzLTguNzktOS4wMiAwLTUuMTEgMy44NS04Ljk2IDguNzktOC45NiA0Ljg4IDAgOC43MyAzLjg1IDguNzMgOC45NiAwIDUuMTktMy44NSA5LjAyLTguNzMgOS4wMnpcIiBjbGFzcz1cInN0MFwiLz48L3N2Zz5gXG4pO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG5pbXBvcnQge1xuICBjb25maWcgYXMgZ2V0dGVyQ29uZmlnLFxuICBzZXRDb25maWcgYXMgc2V0dGVyQ29uZmlnLFxuICBNb3J0YXJUaGVtZUNvbmZpZyxcbn0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgU3Vic2V0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNTc3IsIHNpZ25hbCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCB0eXBlIE10ZVRoZW1lID0gJ2RlZmF1bHQnIHwgJ3B4TGlnaHQnIHwgJ2N4TGlnaHQnIHwgJ3J4TGlnaHQnO1xuXG5leHBvcnQgdHlwZSBNdGVDb2xvclNjaGVtZSA9ICdsaWdodCcgfCAnZGFyaycgfCAnc3lzdGVtJztcblxuY29uc3QgQ0FDSEVfVE9fS0VZID0gJ210ZS50aGVtZS5jYWNoZS10byc7XG5jb25zdCBDT0xPUl9TQ0hFTUVfS0VZID0gJ210ZS50aGVtZS5nbG9iYWwtY29sb3Itc2NoZW1lJztcblxuY2xhc3MgX010ZVRoZW1lU2VydmljZSB7XG4gIGNvbmZpZyA9IGdldHRlckNvbmZpZztcblxuICBwcml2YXRlIHJvb3RPYnNlcnZlcj86IE11dGF0aW9uT2JzZXJ2ZXI7XG4gIHByaXZhdGUgdGhlbWVTaWduYWwgPSBzaWduYWw8TXRlVGhlbWUgfCBudWxsPih0aGlzLmdldEdsb2JhbFRoZW1lKCkpO1xuICBwcml2YXRlIGNvbG9yU2NoZW1lU2lnbmFsID0gc2lnbmFsPE10ZUNvbG9yU2NoZW1lIHwgbnVsbD4odGhpcy5nZXRHbG9iYWxDb2xvclNjaGVtZSgpID8/ICdsaWdodCcpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdENhY2hlKCk7XG4gIH1cblxuICAvKiogQ29uZmlndXJlcyB0aGUgYE10ZVRoZW1lU2VydmljZWAgdG8gY2FjaGUgY29sb3Itc2NoZW1lIGNoYW5nZXMgdG8gYGxvY2FsU3RvcmFnZWAsIGBzZXNzaW9uU3RvcmFnZWAsIG9yIG5laXRoZXIuICovXG4gIHB1YmxpYyBjYWNoZUNvbG9yU2NoZW1lVG8obWV0aG9kOiAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZScpIHtcbiAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBDbGVhciBhbGwga2V5cyBmcm9tIGFsbCBzdG9yYWdlIGxvY2F0aW9ucyBpZiBub25lXG4gICAgaWYgKG1ldGhvZCA9PT0gJ25vbmUnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShDT0xPUl9TQ0hFTUVfS0VZKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB0cnkge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oQ09MT1JfU0NIRU1FX0tFWSk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50U2NoZW1lID0gdGhpcy5jb2xvclNjaGVtZVNpZ25hbC5nZXQoKTtcbiAgICAvLyBTZXQgY2FjaGUgbWV0aG9kIGluIHN0b3JhZ2UgLSBUcnkgbG9jYWxTdG9yYWdlIGZpcnN0XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENBQ0hFX1RPX0tFWSwgbWV0aG9kKTtcbiAgICAgIGlmIChjdXJyZW50U2NoZW1lKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENPTE9SX1NDSEVNRV9LRVksIGN1cnJlbnRTY2hlbWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdNdGVUaGVtZVNlcnZpY2U6IENvdWxkIG5vdCBzZXQgY29sb3Igc2NoZW1lIGNhY2hlIG1ldGhvZCB0byBgbG9jYWxTdG9yYWdlYC4gQXR0ZW1wdGluZyBmYWxsYmFjayB0byBgc2Vzc2lvblN0b3JhZ2VgLiBDYWNoaW5nIHdpbGwgb25seSBoYXBwZW4gdG8gc2Vzc2lvblN0b3JhZ2UuJ1xuICAgICAgKTtcbiAgICAgIC8vIFRyeSBzZXNzaW9uU3RvcmFnZSBuZXh0XG4gICAgICB0cnkge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKENBQ0hFX1RPX0tFWSwgJ3Nlc3Npb25TdG9yYWdlJyk7XG4gICAgICAgIGlmIChjdXJyZW50U2NoZW1lKSB7XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShDT0xPUl9TQ0hFTUVfS0VZLCBjdXJyZW50U2NoZW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdNdGVUaGVtZVNlcnZpY2U6IENvdWxkIG5vdCBzZXQgY29sb3Igc2NoZW1lIGNhY2hlIG1ldGhvZCB0byBgbG9jYWxTdG9yYWdlYCBvciBgc2Vzc2lvblN0b3JhZ2VgLiBDYWNoaW5nIG5vdCBlbmFibGVkLidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgY3VycmVudCBnbG9iYWwgdGhlbWUgb24gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIHNldEdsb2JhbFRoZW1lKHRoZW1lOiBNdGVUaGVtZSkge1xuICAgIGlmICghdGhlbWUgfHwgdHlwZW9mIHRoZW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdGVUaGVtZVNlcnZpY2U6IEdsb2JhbCB0aGVtZSBwYXJhbSBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICAgIH1cbiAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgIGlmICh0aGVtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2RhdGEtbXRlLXRoZW1lJywgdGhlbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbXRlLXRoZW1lJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldHMgdGhlIGN1cnJlbnQgZ2xvYmFsIGNvbG9yLXNjaGVtZSBvbiB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgc2V0R2xvYmFsQ29sb3JTY2hlbWUoY29sb3JTY2hlbWU6IE10ZUNvbG9yU2NoZW1lKSB7XG4gICAgaWYgKCFjb2xvclNjaGVtZSB8fCB0eXBlb2YgY29sb3JTY2hlbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ010ZVRoZW1lU2VydmljZTogR2xvYmFsIGNvbG9yU2NoZW1lIHBhcmFtIG11c3QgYmUgYSBzdHJpbmcuJyk7XG4gICAgfVxuICAgIGNvbnN0IHNjaGVtZSA9IGNvbG9yU2NoZW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHNjaGVtZSA9PT0gJ2RhcmsnIHx8IHNjaGVtZSA9PT0gJ2xpZ2h0JyB8fCBzY2hlbWUgPT09ICdzeXN0ZW0nKSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZScsIHNjaGVtZSk7XG4gICAgICB0aGlzLnNldENhY2hlVmFsdWUoQ09MT1JfU0NIRU1FX0tFWSwgY29sb3JTY2hlbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBjdXJyZW50IGdsb2JhbCB0aGVtZSBmcm9tIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBnZXRHbG9iYWxUaGVtZSgpOiBNdGVUaGVtZSB8IG51bGwge1xuICAgIGNvbnN0IHZhbHVlID0gZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCdkYXRhLW10ZS10aGVtZScpIGFzIE10ZVRoZW1lO1xuICAgIGlmICghWydkZWZhdWx0JywgJ3B4TGlnaHQnLCAnY3hMaWdodCcsICdyeExpZ2h0J10uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlIGFzIE10ZVRoZW1lO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBjdXJyZW50IGdsb2JhbCBjb2xvci1zY2hlbWUgZnJvbSB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgZ2V0R2xvYmFsQ29sb3JTY2hlbWUoKTogTXRlQ29sb3JTY2hlbWUgfCBudWxsIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZShcbiAgICAgICdkYXRhLW10ZS1jb2xvci1zY2hlbWUnXG4gICAgKSBhcyBNdGVDb2xvclNjaGVtZTtcbiAgICBpZiAoIVsnbGlnaHQnLCAnZGFyaycsICdzeXN0ZW0nXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgYXMgTXRlQ29sb3JTY2hlbWU7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgYSByZWFjdGl2ZSBzaWduYWwgdGhhdCB3aWxsIHVwZGF0ZSBhbnkgdGltZSB0aGUgZ2xvYmFsIHRoZW1lIGNoYW5nZXMgKi9cbiAgcHVibGljIHNlbGVjdEdsb2JhbFRoZW1lKCkge1xuICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgcmV0dXJuIHRoaXMudGhlbWVTaWduYWw7XG4gIH1cblxuICAvKiogUmV0dXJucyBhIHJlYWN0aXZlIHNpZ25hbCB0aGF0IHdpbGwgdXBkYXRlIGFueSB0aW1lIHRoZSBnbG9iYWwgY29sb3Itc2NoZW1lIGNoYW5nZXMgKi9cbiAgcHVibGljIHNlbGVjdEdsb2JhbENvbG9yU2NoZW1lKCkge1xuICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgcmV0dXJuIHRoaXMuY29sb3JTY2hlbWVTaWduYWw7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgdmFsdWUgb2YgYWxsIG9mIHRoZSBnaXZlbiB0aGVtZSB2YXJpYWJsZXMgb24gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIHNldChcbiAgICBjb25maWdGbk9yT2JqOlxuICAgICAgfCBTdWJzZXQ8TW9ydGFyVGhlbWVDb25maWc+XG4gICAgICB8ICgoY29uZmlnOiBNb3J0YXJUaGVtZUNvbmZpZykgPT4gU3Vic2V0PE1vcnRhclRoZW1lQ29uZmlnPilcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWdGbk9yT2JqID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25maWdGbk9yT2JqID0gY29uZmlnRm5Pck9iaih0aGlzLmNvbmZpZyk7XG4gICAgfVxuICAgIGNvbnN0IG1hcHBpbmdzID0gdGhpcy5mbGF0dGVuUGF0aHMoY29uZmlnRm5Pck9iaik7XG4gICAgbWFwcGluZ3MuZm9yRWFjaCgoW3BhdGgsIHZhbF0pID0+IHtcbiAgICAgIGNvbnN0IGNzc1ZhciA9IHBhdGgucmVkdWNlKChhY2MsIHByb3ApID0+IHtcbiAgICAgICAgcmV0dXJuIGFjY1twcm9wXTtcbiAgICAgIH0sIHNldHRlckNvbmZpZyk7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5zdHlsZS5zZXRQcm9wZXJ0eShjc3NWYXIsIGAke3ZhbH1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciB0aGUgcmVxdWVzdGVkIHRoZW1lIHZhcmlhYmxlIGZyb20gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIGdldDxUPihrMTogKHRoZW1lQ29uZmlnOiBNb3J0YXJUaGVtZUNvbmZpZykgPT4gVCk6IFQ7XG4gIHB1YmxpYyBnZXQ8SzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZz4oazE6IEsxKTogTW9ydGFyVGhlbWVDb25maWdbSzFdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdPihcbiAgICBrMTogSzEsXG4gICAgazI6IEsyXG4gICk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1cbiAgPihrMTogSzEsIGsyOiBLMiwgazM6IEszKTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM107XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl0sXG4gICAgSzQgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVxuICA+KGsxOiBLMSwgazI6IEsyLCBrMzogSzMsIGs0OiBLNCk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXSxcbiAgICBLNCBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdLFxuICAgIEs1IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMywgazQ6IEs0LCBrNTogSzUpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM10sXG4gICAgSzUgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF0sXG4gICAgSzYgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMywgazQ6IEs0LCBrNTogSzUsIGs2OiBLNik6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVtLNV1bSzZdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM10sXG4gICAgSzUgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF0sXG4gICAgSzYgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdXG4gID4oXG4gICAgLi4ua2V5czpcbiAgICAgIHwgW0sxXVxuICAgICAgfCBbSzEsIEsyXVxuICAgICAgfCBbSzEsIEsyLCBLM11cbiAgICAgIHwgW0sxLCBLMiwgSzMsIEs0XVxuICAgICAgfCBbSzEsIEsyLCBLMywgSzQsIEs1XVxuICAgICAgfCBbSzEsIEsyLCBLMywgSzQsIEs1LCBLNl1cbiAgKTogYW55IHtcbiAgICBjb25zdCBbZm5dID0ga2V5cyA/PyBbbnVsbF07XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgY3NzVmFyID0gKGZuIGFzIGFueSkoc2V0dGVyQ29uZmlnKTtcbiAgICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGdsb2JhbFRoaXM/LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShjc3NWYXIpO1xuICAgIH1cbiAgICBjb25zdCBjc3NWYXIgPSBrZXlzLnJlZHVjZSgoYWNjOiBhbnksIGtleSkgPT4gYWNjW2tleV0sIHNldHRlckNvbmZpZyBhcyBhbnkpIGFzIHN0cmluZztcbiAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShnbG9iYWxUaGlzPy5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoY3NzVmFyKTtcbiAgfVxuXG4gIC8qKiBGbGF0dGVucyBhIGdpdmVuIG9iamVjdCB0byBhbiBhcnJheSBvZiBwYXRoIGtleXMgYW5kIGl0cyByZXN1bHRpbmcgdmFsdWUgKi9cbiAgcHJpdmF0ZSBmbGF0dGVuUGF0aHMob2JqOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBwYXRoOiBzdHJpbmdbXSA9IFtdKTogW3N0cmluZ1tdLCBhbnldW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IG5lc3RlZCA9IG9ialtrZXldO1xuICAgICAgaWYgKHR5cGVvZiBuZXN0ZWQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHBhdGgucHVzaChrZXkpO1xuICAgICAgICBPYmplY3QuYXNzaWduKGFjYywgdGhpcy5mbGF0dGVuUGF0aHMobmVzdGVkLCBwYXRoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoLnB1c2goa2V5KTtcbiAgICAgICAgYWNjLnB1c2goW3BhdGgsIG5lc3RlZF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU11dGF0aW9uRXZlbnQgPSAobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSB7XG4gICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGF0YS1tdGUtY29sb3Itc2NoZW1lJykge1xuICAgICAgICAgIHRoaXMuY29sb3JTY2hlbWVTaWduYWwuc2V0KHRoaXMuZ2V0R2xvYmFsQ29sb3JTY2hlbWUoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2RhdGEtbXRlLXRoZW1lJykge1xuICAgICAgICAgIHRoaXMudGhlbWVTaWduYWwuc2V0KHRoaXMuZ2V0R2xvYmFsVGhlbWUoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBpbml0Q2FjaGUoKSB7XG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2FjaGVDb2xvclNjaGVtZSA9IHRoaXMuZ2V0Q2FjaGVWYWx1ZShDT0xPUl9TQ0hFTUVfS0VZKTtcbiAgICAgICAgaWYgKGNhY2hlQ29sb3JTY2hlbWUgJiYgY2FjaGVDb2xvclNjaGVtZSAhPT0gJycpIHtcbiAgICAgICAgICB0aGlzLnNldEdsb2JhbENvbG9yU2NoZW1lKGNhY2hlQ29sb3JTY2hlbWUgYXMgTXRlQ29sb3JTY2hlbWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdE9ic2VydmVyKCkge1xuICAgIGlmICghaXNTc3IoKSAmJiAhdGhpcy5yb290T2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMucm9vdE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5oYW5kbGVNdXRhdGlvbkV2ZW50KTtcbiAgICAgIHRoaXMucm9vdE9ic2VydmVyLm9ic2VydmUoZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnZGF0YS1tdGUtdGhlbWUnLCAnZGF0YS1tdGUtY29sb3Itc2NoZW1lJ10sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENhY2hlTWV0aG9kKCk6ICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJyB8IG51bGwge1xuICAgIC8vIFJldHJpZXZlIGNhY2hlIG1ldGhvZFxuICAgIGxldCBjYWNoZU1ldGhvZDogJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnIHwgbnVsbCA9IG51bGw7XG4gICAgLy8gVHJ5IGxvY2FsU3RvcmFnZVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBjYWNoZU1ldGhvZCA9IHZhbCBhcyAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZSc7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gVHJ5IHNlc3Npb25TdG9yYWdlXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB2YWwgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICBjYWNoZU1ldGhvZCA9IHZhbCBhcyAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIHJldHVybiBjYWNoZU1ldGhvZDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2FjaGVWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGNhY2hlTWV0aG9kID0gdGhpcy5nZXRDYWNoZU1ldGhvZCgpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoY2FjaGVNZXRob2QgPT09ICdsb2NhbFN0b3JhZ2UnKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChjYWNoZU1ldGhvZCA9PT0gJ3Nlc3Npb25TdG9yYWdlJykge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cblxuICBwcml2YXRlIGdldENhY2hlVmFsdWUoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjYWNoZU1ldGhvZCA9IHRoaXMuZ2V0Q2FjaGVNZXRob2QoKTtcbiAgICB0cnkge1xuICAgICAgaWYgKGNhY2hlTWV0aG9kID09PSAnbG9jYWxTdG9yYWdlJykge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIH0gZWxzZSBpZiAoY2FjaGVNZXRob2QgPT09ICdzZXNzaW9uU3RvcmFnZScpIHtcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVUaGVtZVNlcnZpY2UgPSBuZXcgX010ZVRoZW1lU2VydmljZSgpO1xuIiwgImltcG9ydCB7IGlzU3NyLCBpc1BsYXRmb3JtIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IHR5cGUgUG9ydGFsU3RhY2sgPSAnb3ZlcmxheSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydGFsZWRFbGVtZW50TWV0YWRhdGEge1xuICBlbGVtZW50OiBFbGVtZW50O1xuICBzdGFjazogUG9ydGFsU3RhY2s7XG4gIGNoaWxkUG9ydGFsZWRFbGVtZW50czogU2V0PEVsZW1lbnQ+O1xuICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ/OiBFbGVtZW50O1xuICBiYWNrZHJvcD86IEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudFBvcnRhbENvbnRyb2xsZXIge1xuICBpZDogbnVtYmVyO1xuICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ6IEVsZW1lbnQ7XG4gIG9wdGlvbnM6IHsgc3RhY2s6IFBvcnRhbFN0YWNrIH07XG59XG5cbmV4cG9ydCB0eXBlIFBvcnRhbEFkYXB0ZXI8VCA9IGFueT4gPSAoXG4gIHBvcnRhbEVsZW1lbnQ6IFQsXG4gIG91dGxldEVsZW1lbnQ6IEVsZW1lbnRcbikgPT4gUHJvbWlzZTxhbnk+IHwgYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRhbE9wdGlvbnMge1xuICAvKiogUmVuZGVycyB0aGUgYmFja2Ryb3AgZGltbWVkICovXG4gIHdpdGhEaW1CYWNrZHJvcD86IGJvb2xlYW47XG5cbiAgLyoqIE1ha2VzIHRoZSBiYWNrZHJvcCBpZ25vcmUgcG9pbnRlciBldmVudHMuIFVzZWZ1bCBmb3IgdHJpZ2dlck9uIFwiaG92ZXJcIi4gKi9cbiAgd2l0aEluZXJ0QmFja2Ryb3A/OiBib29sZWFuO1xuXG4gIC8qKiBEaXNhYmxlcyB0aGUgYWJpbGl0eSB0byBzY3JvbGwgdGhlIHBhZ2UgYmVoaW5kIHRoZSBvdmVybGF5IHdoZW4gdHJ1ZSAqL1xuICB3aXRoU2Nyb2xsTG9jaz86IGJvb2xlYW47XG5cbiAgLyoqIENhbGxiYWNrIGZvciBoYW5kbGluZyBjbG9zZU9uQ2xpY2tPdXRzaWRlIGV2ZW50cyB3aGVuIHRoZSBwb3J0YWwncyBiYWNrZHJvcCBpcyBjbGlja2VkICovXG4gIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyPzogKCkgPT4gYW55O1xuXG4gIC8qKiBUaGUgYW5pbWF0aW9uIGR1cmF0aW9uIGZvciBmYWRpbmcgYSBzaGFkb3cgYmFja2Ryb3AgaW4vb3V0ICovXG4gIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuXG4gIC8qKiBBZGFwdGVyIGZvciBcInBvcnRhbGluZ1wiIGFuIGVsZW1lbnQgZnJvbSBvbmUgbG9jYXRpb24gaW4gdGhlIERPTSB0byBhbm90aGVyLiBMZXZlcmFnZWQgYnkgZnJhbWV3b3JrIHdyYXBwZXJzIGZvciBpbXByb3ZlZCBpbnRlcm9wLiAqL1xuICBwb3J0YWxBZGFwdGVyPzogUG9ydGFsQWRhcHRlcjtcbn1cblxuLyoqIERlZmF1bHQgbmF0aXZlIERPTSBhZGFwdGVyIGZvciBwb3J0YWxpbmcgYW4gZWxlbWVudCB0byBhbm90aGVyIHRhcmdldCBlbGVtZW50ICovXG5leHBvcnQgY29uc3QgZGVmYXVsdFBvcnRhbEFkYXB0ZXI6IFBvcnRhbEFkYXB0ZXIgPSAocG9ydGFsRWxlbSwgb3V0bGV0RWxlbSkgPT4ge1xuICBvdXRsZXRFbGVtPy5hcHBlbmRDaGlsZChwb3J0YWxFbGVtKTtcbn07XG5cbmNsYXNzIF9NdGVQb3J0YWxTZXJ2aWNlIHtcbiAgLyoqIFNoYXJlZCBnbG9iYWwgY29uc3QgZm9yIHN0YWNrIGVsZW1lbnQgcmVmcyAqL1xuICBwcml2YXRlIHN0YWNrRWxlbWVudHM6IHsgb3ZlcmxheTogRWxlbWVudCB9ID0ge1xuICAgIG92ZXJsYXk6IHVuZGVmaW5lZCxcbiAgfTtcblxuICAvKiogU2hhcmVkIGdsb2JhbCBjb25zdCBmb3IgcG9ydGFsZWQgZWxlbWVudHMgbWV0YWRhdGEgKi9cbiAgcHJpdmF0ZSBwb3J0YWxlZEVsZW1lbnRzID0gbmV3IE1hcDxudW1iZXIsIE1hcDxFbGVtZW50LCBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YT4+KCk7XG5cbiAgcHJpdmF0ZSBhY3RpdmVTY3JvbGxMb2NrcyA9IG5ldyBTZXQ8RWxlbWVudD4oKTtcblxuICBwcml2YXRlIHN0YWNrTXV0YXRpb25PYnNlcnZlcj86IE11dGF0aW9uT2JzZXJ2ZXI7XG5cbiAgLyoqXG4gICAqIFdoZW4gY2FsbGVkLCB0aGlzIHNlcnZpY2Ugd2lsbCBhdHRlbXB0IHRvIGxvY2F0ZSB0aGUgYEBhbmd1bGFyL2Nka2Agb3ZlcmxheSBzdGFjay5cbiAgICogSWYgZm91bmQgdGhpcyBzZXJ2aWNlIHdpbGwgYmUgY29uZmlndXJlZCB0byB1c2UgdGhhdCBlbGVtZW50IGFzIHRoZSBgb3ZlcmxheWAgc3RhY2sgaW5zdGVhZCBvZiBpbml0aWFsaXppbmcgaXRzIG93bi5cbiAgICovXG4gIHB1YmxpYyBjb25maWd1cmVDZGtJbnRlcm9wKCkge1xuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgY29uc3QgY2RrU3RhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2RrLW92ZXJsYXktY29udGFpbmVyJyk7XG4gICAgICBpZiAoY2RrU3RhY2spIHtcbiAgICAgICAgdGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkgPSBjZGtTdGFjaztcbiAgICAgICAgdGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCh0aGlzLmlkRmFjdG9yeSgnb3ZlcmxheScpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgcG9ydGFsIGNvbnRyb2xsZXIuIEFsbCBpdGVtcyBpdCByZXF1ZXN0ZWQgdG8gYmUgcG9ydGFsZWQgd2lsbCBiZSB0cmFjayBhZ2FpbnN0IGl0LlxuICAgKiBXaGVuIHRoZSBwb3J0YWwgaXMgcmVtb3ZlZCB3ZSBjYW4gdGhlbiByZW1vdmUgYW55IGVsZW1lbnRzIGl0IGN1cnJlbnRseSBoYXMgcG9ydGFsZWQgYW5kXG4gICAqIGFueSBvZiB0aGVpciBwb3J0YWxlZCBjaGlsZHJlbi5cbiAgICovXG4gIHB1YmxpYyBhZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyKSB7XG4gICAgaWYgKCF0aGlzLnBvcnRhbGVkRWxlbWVudHMuaGFzKHBvcnRhbENvbnRyb2xsZXI/LmlkKSkge1xuICAgICAgLy8gVHJhY2sgaW4gc2V0IGJ5IElEIHNvIHdlIGRvbid0IGtlZXAgYSBsaXZlIHJlZmVyZW5jZSB0byB0aGUgY29udHJvbGxlciBpdHNlbGZcbiAgICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5zZXQocG9ydGFsQ29udHJvbGxlci5pZCwgbmV3IE1hcDxFbGVtZW50LCBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YT4oKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlbW92ZXMgYWxsIG9mIGEgcG9ydGFsIGNvbnRyb2xsZXJzIHBvcnRhbGVkIGVsZW1lbnRzIGFuZCB0aGVpciByZWZlcmVuY2VzICovXG4gIHB1YmxpYyByZW1vdmVDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyKSB7XG4gICAgLy8gQXR0ZW1wdCB0byByZW1vdmUgYWxsIGl0ZW1zIGF0dGFjaGVkIGJ5IHRoaXMgY29udHJvbGxlciBmcm9tIHRoZSBjb25maWd1cmVkIHN0YWNrXG4gICAgY29uc3QgYXR0YWNoZWRFbGVtZW50cyA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCk7XG4gICAgaWYgKGF0dGFjaGVkRWxlbWVudHMpIHtcbiAgICAgIGF0dGFjaGVkRWxlbWVudHMuZm9yRWFjaCgoaXRlbSkgPT4gdGhpcy5yZW1vdmVGcm9tU3RhY2socG9ydGFsQ29udHJvbGxlciwgaXRlbS5lbGVtZW50KSk7XG4gICAgfVxuICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5kZWxldGUocG9ydGFsQ29udHJvbGxlci5pZCk7XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlcyBhIHJlZiB0byB0aGUgY29uZmlndXJlZCBzdGFjayBleGlzdHMuIElmIGl0IGRvZXMgbm90LCB0aGUgY29uZmlndXJlZCBzdGFjayB3aWxsXG4gICAqIGJlIGNyZWF0ZWQgYW5kIGFwcGVuZGVkIHRvIHRoZSBkb2N1bWVudC4gRG9lcyBub3RoaW5nIGR1cmluZyBTU1IuXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZVN0YWNrKHN0YWNrOiBQb3J0YWxTdGFjaykge1xuICAgIGlmIChzdGFjayAhPT0gJ292ZXJsYXknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3ZlcmxheSBTdGFjazogXCIke3N0YWNrfVwiIG11c3QgYmUgJ292ZXJsYXknIGF0IHRoaXMgdGltZS5gKTtcbiAgICB9XG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10pIHtcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWRGYWN0b3J5KHN0YWNrKSk7XG4gICAgICAgIHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10gPVxuICAgICAgICAgIGVsZW0gPz9cbiAgICAgICAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuaWRGYWN0b3J5KHN0YWNrKSxcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdICYmICF0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kU3RhY2tUb0RvbSh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdKTtcblxuICAgICAgICAvLyBJbml0IG11dGF0aW9uIG9ic2VydmVyXG4gICAgICAgIC8vIFRoaXMgd2lsbCB3YXRjaCBmb3IgYW55dGltZSB0aGUgc3RhY2sgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET00gZm9yIHNvbWUgcmVhc29uXG4gICAgICAgIC8vIElmIGl0IGlzLCBpdCB3aWxsIHJlLWF0dGFjaCBpdCB0byB0aGUgRE9NIGFmdGVyIHRoZSBuZXh0IHRpY2tcbiAgICAgICAgaWYgKCF0aGlzLnN0YWNrTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgIHRoaXMuc3RhY2tNdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG1sLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtbCkge1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJlbW92ZWROb2RlIG9mIG11dGF0aW9uLnJlbW92ZWROb2Rlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkTm9kZSA9PT0gdGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsSXRlbXNGcm9tU3RhY2tzKCk7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRTdGFja1RvRG9tKHRoaXMuc3RhY2tFbGVtZW50cy5vdmVybGF5KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdPy5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5zdGFja011dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdLnBhcmVudE5vZGUsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgc3VidHJlZTogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZFN0YWNrVG9Eb20oc3RhY2tFbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKHN0YWNrRWxlbWVudCAmJiAhc3RhY2tFbGVtZW50LmlzQ29ubmVjdGVkKSB7XG4gICAgICBjb25zdCB0b2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbXRlLXRvYXN0LWNvbnRhaW5lcicpO1xuICAgICAgaWYgKHRvYXN0Q29udGFpbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHN0YWNrRWxlbWVudCwgdG9hc3RDb250YWluZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoc3RhY2tFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogQXBwZW5kcyBhbiBpdGVtIHRvIHRoZSBjb25maWd1cmVkIHBvcnRhbCBzdGFjayAqL1xuICBwdWJsaWMgYXBwZW5kVG9TdGFjayhcbiAgICBwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlcixcbiAgICBlbGVtZW50OiBFbGVtZW50LFxuICAgIHtcbiAgICAgIHdpdGhEaW1CYWNrZHJvcCA9IGZhbHNlLFxuICAgICAgd2l0aEluZXJ0QmFja2Ryb3AgPSBmYWxzZSxcbiAgICAgIHdpdGhTY3JvbGxMb2NrID0gZmFsc2UsXG4gICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyLFxuICAgICAgcG9ydGFsQWRhcHRlciA9IGRlZmF1bHRQb3J0YWxBZGFwdGVyLFxuICAgIH06IFBvcnRhbE9wdGlvbnMgPSB7fVxuICApIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnRQb3J0YWxlZEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudFBvcnRhbGVkRWxlbWVudChwb3J0YWxDb250cm9sbGVyLCBlbGVtZW50KTtcbiAgICAgIGNvbnN0IHN0YWNrTmFtZSA9IHBvcnRhbENvbnRyb2xsZXIub3B0aW9ucy5zdGFjaztcbiAgICAgIGNvbnN0IHN0YWNrID0gdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrTmFtZV07XG4gICAgICBjb25zdCBhdHRhY2hlZEVsZW1lbnRzID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKTtcblxuICAgICAgY29uc3QgYmFja2Ryb3AgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ210ZS1wb3J0YWxfX2JhY2tkcm9wJyxcbiAgICAgICAgLi4uKGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uXG4gICAgICAgICAgPyB7IHN0eWxlOiBgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHtiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbn07YCB9XG4gICAgICAgICAgOiB7fSksXG4gICAgICB9KTtcblxuICAgICAgLy8gSGFuZGxlIGJhY2tkcm9wIHN0eWxpbmdcbiAgICAgIGlmICh3aXRoSW5lcnRCYWNrZHJvcCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0taW5lcnQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh3aXRoRGltQmFja2Ryb3ApIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXNoYWRvdycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXRyYW5zcGFyZW50Jyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGVuZCBiYWNrZHJvcFxuICAgICAgc3RhY2s/LmFwcGVuZENoaWxkKGJhY2tkcm9wKTtcblxuICAgICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICAgIC8vIEFkZCBsaXN0ZW5lciBpZiBjbGljayBoYW5kbGVyIGlzIHByZXNlbnRcbiAgICAgICAgaWYgKGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyKSB7XG4gICAgICAgICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXIpO1xuICAgICAgICAgIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYmFja2Ryb3Agc2hvdWxkIGJlIGRpbSwgYW5pbWF0ZSBpdCBhZnRlciBpdCBoYXMgYmVlbiBhcHBlbmRlZCB0byB0aGUgZG9tXG4gICAgICAgIGlmICh3aXRoRGltQmFja2Ryb3ApIHtcbiAgICAgICAgICBnbG9iYWxUaGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0tc2hvdycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGx5IHNjcm9sbCBsb2NrXG4gICAgICAgIGlmICh3aXRoU2Nyb2xsTG9jaykge1xuICAgICAgICAgIHRoaXMuYXBwbHlTY3JvbGxMb2NrKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFdhaXQgZm9yIFJlYWN0IChvciBvdGhlciBmdXR1cmUgZnJhbWV3b3JrIGFkYXB0ZXIpIHRvIGFwcGVuZCBlbGVtZW50IHRvIG5ld1xuICAgICAgLy8gbG9jYXRpb24gaW4gdGhlIERPTSBiZWZvcmUgYWRkaW5nIHRvIHN0YWNrLiBEb2luZyBzbyB0cmlnZ2VycyBgaG9zdERpc2Nvbm5lY3RlZGBcbiAgICAgIC8vIHdoaWNoIHdvdWxkIGluc3RhbnRseSByZW1vdmUgdGhlIGVsZW1lbnQgaWYgbm90IGZvciB0aGlzIGV4dHJhIHRpbWVvdXQgdG8gd2FpdCBhIHRpY2tcbiAgICAgIFByb21pc2UucmVzb2x2ZShwb3J0YWxBZGFwdGVyKGVsZW1lbnQsIHN0YWNrKSkudGhlbigoKSA9PiB7XG4gICAgICAgIGF0dGFjaGVkRWxlbWVudHMuc2V0KGVsZW1lbnQsIHtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIHN0YWNrOiBzdGFja05hbWUsXG4gICAgICAgICAgYmFja2Ryb3AsXG4gICAgICAgICAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzOiBuZXcgU2V0PEVsZW1lbnQ+KCksXG4gICAgICAgICAgcGFyZW50UG9ydGFsZWRFbGVtZW50LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJlbW92ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSBzdGFjayAqL1xuICBwdWJsaWMgcmVtb3ZlRnJvbVN0YWNrKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMucG9ydGFsZWRFbGVtZW50cy5oYXMocG9ydGFsQ29udHJvbGxlci5pZCkpIHtcbiAgICAgIGNvbnN0IGF0dGFjaGVkRWxlbWVudHMgPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpO1xuICAgICAgaWYgKGF0dGFjaGVkRWxlbWVudHMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudE1ldGFkYXRhID0gYXR0YWNoZWRFbGVtZW50cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIGlmIChlbGVtZW50TWV0YWRhdGEpIHtcbiAgICAgICAgICBhdHRhY2hlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplU3RhY2tSZW1vdmUoZWxlbWVudE1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNhZmVseSByZW1vdmVzIGFsbCBpdGVtcyBmcm9tIGFsbCBzdGFja3NcbiAgcHJpdmF0ZSByZW1vdmVBbGxJdGVtc0Zyb21TdGFja3MoKSB7XG4gICAgZm9yIChsZXQgW2lkLCBjb250cm9sbGVyTWFwXSBvZiB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZW50cmllcygpKSB7XG4gICAgICBmb3IgKGxldCBbZWxlbWVudCwgZWxlbWVudE1ldGFkYXRhXSBvZiBjb250cm9sbGVyTWFwLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoZWxlbWVudE1ldGFkYXRhKSB7XG4gICAgICAgICAgdGhpcy5maW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogTWFrZXMgYSBiYWNrZHJvcCBhc3NvY2lhdGVkIHdpdGggYSBwb3J0YWxlZCBlbGVtZW50IHZpc2libGUgaWYgaXQgZXhpc3RzICovXG4gIHB1YmxpYyBzaG93QmFja2Ryb3AocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgY29uc3QgeyBiYWNrZHJvcCB9ID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKS5nZXQoZWxlbWVudCkgPz8ge307XG4gICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1zaG93Jyk7XG4gIH1cblxuICAvKiogSGlkZXMgYSBiYWNrZHJvcCBhc3NvY2lhdGVkIHdpdGggYSBwb3J0YWxlZCBlbGVtZW50IGlmIGl0IGV4aXN0cyAqL1xuICBwdWJsaWMgaGlkZUJhY2tkcm9wKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIGNvbnN0IHsgYmFja2Ryb3AgfSA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuICAgIGJhY2tkcm9wPy5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrZHJvcC0tc2hvdycpO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIGludGVydG5lc3MgYSBiYWNrZHJvcCBpZiBpdCBleGlzdHMgKHdoZXRoZXIgb3Igbm90IHRoZSB1c2VyIGNhbiBjbGljayB0aHJvdWdoIGl0KSAqL1xuICBwdWJsaWMgc2V0QmFja2Ryb3BJbmVydG5lc3MoXG4gICAgcG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsXG4gICAgZWxlbWVudDogRWxlbWVudCxcbiAgICBpbmVydDogYm9vbGVhbiA9IHRydWVcbiAgKSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIGNvbnN0IHsgYmFja2Ryb3AgfSA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuICAgIGlmIChpbmVydCkge1xuICAgICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1pbmVydCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYWNrZHJvcD8uY2xhc3NMaXN0LnJlbW92ZSgnYmFja2Ryb3AtLWluZXJ0Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGlkIGZvciB0aGUgY29uZmlndXJlZCBzdGFjayBlbGVtZW50ICovXG4gIHByaXZhdGUgaWRGYWN0b3J5ID0gKHN0YWNrOiBQb3J0YWxTdGFjaykgPT4gYG10ZS1wb3J0YWxfXyR7c3RhY2t9LXN0YWNrYDtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGFuIGVsZW1lbnQgaXMgYmVpbmcgcG9ydGFsZWQgZnJvbSB3aXRoaW4gYW5vdGhlciBwb3J0YWxlZFxuICAgKiBlbGVtZW50IGFuZCByZXR1cm5zIHRoYXQgcGFyZW50IGlmIGl0IGlzXG4gICAqL1xuICBwcml2YXRlIGdldFBhcmVudFBvcnRhbGVkRWxlbWVudChwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgZWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmIChwb3J0YWxDb250cm9sbGVyLnBhcmVudFBvcnRhbGVkRWxlbWVudCkge1xuICAgICAgcmV0dXJuIHBvcnRhbENvbnRyb2xsZXIucGFyZW50UG9ydGFsZWRFbGVtZW50O1xuICAgIH1cbiAgICBsZXQgcGFyZW50UG9ydGFsZWRFbGVtZW50OiBFbGVtZW50O1xuICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChwb3J0YWxDb250cm9sbGVyKSA9PlxuICAgICAgcG9ydGFsQ29udHJvbGxlci5mb3JFYWNoKChwb3J0YWxlZEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKHBvcnRhbGVkRWxlbWVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgcG9ydGFsZWRFbGVtZW50LmNoaWxkUG9ydGFsZWRFbGVtZW50cy5hZGQoZWxlbWVudCk7XG4gICAgICAgICAgcGFyZW50UG9ydGFsZWRFbGVtZW50ID0gcG9ydGFsZWRFbGVtZW50LmVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICAvLyBDYWNoZSB0aGUgcGFyZW50UG9ydGFsZWRFbGVtZW50IGlmIGZvdW5kIG9uIHRoZSBjb250cm9sbGVyIHNvIHdlIGNhbiByZWZlcmVuY2VcbiAgICAvLyBpdCB3aGVuIG9wZW5lZCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgIGlmIChwYXJlbnRQb3J0YWxlZEVsZW1lbnQpIHtcbiAgICAgIHBvcnRhbENvbnRyb2xsZXIucGFyZW50UG9ydGFsZWRFbGVtZW50ID0gcGFyZW50UG9ydGFsZWRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50UG9ydGFsZWRFbGVtZW50O1xuICB9XG5cbiAgLyoqIEVuc3VyZXMgYW4gZWxlbWVudCBpcyByZW1vdmVkIGZyb20gdGhlIHN0YWNrIG5vIG1hdHRlciB3aGljaCBjb250cm9sbGVyIGhhcyBwb3J0YWxlZCBpdCAqL1xuICBwcml2YXRlIHJlbW92ZUZyb21TdGFja0dsb2JhbGx5KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZm9yRWFjaCgocG9ydGFsQ29udHJvbGxlcikgPT4ge1xuICAgICAgaWYgKHBvcnRhbENvbnRyb2xsZXIuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRNZXRhZGF0YSA9IHBvcnRhbENvbnRyb2xsZXIuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBwb3J0YWxDb250cm9sbGVyLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgdGhpcy5maW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogRmluYWxpemVzIHRoZSByZW1vdmUgb2YgYW4gZWxlbWVudCBmcm9tIGEgcG9ydGFsIHN0YWNrICovXG4gIHByaXZhdGUgZmluYWxpemVTdGFja1JlbW92ZShlbGVtZW50TWV0YWRhdGE6IFBvcnRhbGVkRWxlbWVudE1ldGFkYXRhKSB7XG4gICAgaWYgKGVsZW1lbnRNZXRhZGF0YSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBzdGFjazogc3RhY2tOYW1lLFxuICAgICAgICBiYWNrZHJvcCxcbiAgICAgICAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzLFxuICAgICAgICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQsXG4gICAgICB9ID0gZWxlbWVudE1ldGFkYXRhO1xuICAgICAgY29uc3Qgc3RhY2sgPSB0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tOYW1lXTtcblxuICAgICAgLy8gUmVtb3ZlIGFueSBzY3JvbGxMb2Nrc1xuICAgICAgdGhpcy5yZW1vdmVTY3JvbGxMb2NrKGVsZW1lbnQpO1xuXG4gICAgICAvLyBFbnN1cmVzIGFuIGVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIGFueSBwYXJlbnQgcG9ydGFsZWQgZWxlbWVudHMgY2hpbGRyZW4gbGlzdHNcbiAgICAgIGlmIChwYXJlbnRQb3J0YWxlZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmZvckVhY2goKHBvcnRhbENvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICBpZiAocG9ydGFsQ29udHJvbGxlci5oYXMocGFyZW50UG9ydGFsZWRFbGVtZW50KSkge1xuICAgICAgICAgICAgcG9ydGFsQ29udHJvbGxlci5nZXQocGFyZW50UG9ydGFsZWRFbGVtZW50KS5jaGlsZFBvcnRhbGVkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZXMgYW55IGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudCBhcmUgcmVtb3ZlZCBiZWZvcmUgdGhpcyBlbGVtZW50IGlzXG4gICAgICBpZiAoY2hpbGRQb3J0YWxlZEVsZW1lbnRzLnNpemUgPiAwKSB7XG4gICAgICAgIGNoaWxkUG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB0aGlzLnJlbW92ZUZyb21TdGFja0dsb2JhbGx5KGVsZW1lbnQpKTtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZXMgdGhpcyBlbGVtZW50cyBiYWNrZHJvcCBmcm9tIHRoZSBwb3J0YWwgc3RhY2tcbiAgICAgIGlmIChiYWNrZHJvcCAmJiBiYWNrZHJvcC5wYXJlbnRFbGVtZW50ID09PSBzdGFjaykge1xuICAgICAgICBzdGFjaz8ucmVtb3ZlQ2hpbGQoYmFja2Ryb3ApO1xuICAgICAgfVxuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyBhIHJlYWN0IHdyYXBwZWQgcG9ydGFsZWQgZWxlbWVudFxuICAgICAgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudD8uaGFzQXR0cmlidXRlKCdkYXRhLW92ZXJsYXktd3JhcHBlcicpKSB7XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCA9PT0gc3RhY2spIHtcbiAgICAgICAgICBzdGFjaz8ucmVtb3ZlQ2hpbGQoZWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQgPT09IHN0YWNrKSB7XG4gICAgICAgIHN0YWNrPy5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyBhIHNjcm9sbCBsb2NrIHRvIHRoZSBib2R5IGVsZW1lbnQgdG8gcHJldmVudCBzY3JvbGxpbmcgb2YgcGFnZSBjb250ZW50LlxuICAgKiBDYWxjdWxhdGVzIGFueSBib2R5IG9mZnNldHMgZHVlIHRvIHZpc2libGUgc2Nyb2xsYmFycyBhbmQgZHluYW1pY2FsbHkgYWRqdXN0cyBmb3IgdGhlbS5cbiAgICovXG4gIHByaXZhdGUgYXBwbHlTY3JvbGxMb2NrKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFjdGl2ZVNjcm9sbExvY2tzLmFkZChlbGVtZW50KTtcblxuICAgIGNvbnN0IGlzSU9TID0gaXNQbGF0Zm9ybSgnSU9TJyk7XG4gICAgY29uc3QgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcbiAgICBjb25zdCBzY3JvbGxiYXJYID1cbiAgICAgIE1hdGgucm91bmQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpICtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIGNvbnN0IHBhZGRpbmdQcm9wID0gc2Nyb2xsYmFyWCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IHNjcm9sbFggPSBib2R5U3R5bGUubGVmdCA/IHBhcnNlRmxvYXQoYm9keVN0eWxlLmxlZnQpIDogd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgIGNvbnN0IHNjcm9sbFkgPSBib2R5U3R5bGUudG9wID8gcGFyc2VGbG9hdChib2R5U3R5bGUudG9wKSA6IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgIGJvZHlTdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbXRlLXNjcm9sbC1sb2NrLS1hY3RpdmUnKTtcblxuICAgIGlmIChzY3JvbGxiYXJXaWR0aCkge1xuICAgICAgYm9keVN0eWxlW3BhZGRpbmdQcm9wXSA9IGAke3Njcm9sbGJhcldpZHRofXB4YDtcbiAgICB9XG5cbiAgICAvLyBPbmx5IGlPUyBkb2Vzbid0IHJlc3BlY3QgYG92ZXJmbG93OiBoaWRkZW5gIG9uIGRvY3VtZW50LmJvZHksIGFuZCB0aGlzXG4gICAgLy8gdGVjaG5pcXVlIGhhcyBmZXdlciBzaWRlIGVmZmVjdHMuXG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICAvLyBpT1MgMTIgZG9lcyBub3Qgc3VwcG9ydCBgdmlzdWFsVmlld3BvcnRgLlxuICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IGdsb2JhbFRoaXMudmlzdWFsVmlld3BvcnQ/Lm9mZnNldExlZnQgfHwgMDtcbiAgICAgIGNvbnN0IG9mZnNldFRvcCA9IGdsb2JhbFRoaXMudmlzdWFsVmlld3BvcnQ/Lm9mZnNldFRvcCB8fCAwO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGJvZHlTdHlsZSwge1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgdG9wOiBgJHstKHNjcm9sbFkgLSBNYXRoLmZsb29yKG9mZnNldFRvcCkpfXB4YCxcbiAgICAgICAgbGVmdDogYCR7LShzY3JvbGxYIC0gTWF0aC5mbG9vcihvZmZzZXRMZWZ0KSl9cHhgLFxuICAgICAgICByaWdodDogJzAnLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlbW92ZXMgYW4gYWN0aXZlIHNjcm9sbExvY2sgaWYgdGhlcmUgYXJlIG5vIHJlbWFpbmluZyBlbGVtZW50cyBwb3J0YWxlZCB0aGF0IHJlcXVlc3RlZCBpdCAqL1xuICBwcml2YXRlIHJlbW92ZVNjcm9sbExvY2soZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuYWN0aXZlU2Nyb2xsTG9ja3MuZGVsZXRlKGVsZW1lbnQpO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlU2Nyb2xsTG9ja3Muc2l6ZSA9PT0gMCkge1xuICAgICAgY29uc3QgaXNJT1MgPSBpc1BsYXRmb3JtKCdJT1MnKTtcbiAgICAgIGNvbnN0IGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG4gICAgICBjb25zdCBzY3JvbGxiYXJYID1cbiAgICAgICAgTWF0aC5yb3VuZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgK1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgIGNvbnN0IHBhZGRpbmdQcm9wID0gc2Nyb2xsYmFyWCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcblxuICAgICAgT2JqZWN0LmFzc2lnbihib2R5U3R5bGUsIHtcbiAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICBbcGFkZGluZ1Byb3BdOiAnJyxcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ210ZS1zY3JvbGwtbG9jay0tYWN0aXZlJyk7XG5cbiAgICAgIGlmIChpc0lPUykge1xuICAgICAgICBPYmplY3QuYXNzaWduKGJvZHlTdHlsZSwge1xuICAgICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgICB0b3A6ICcnLFxuICAgICAgICAgIGxlZnQ6ICcnLFxuICAgICAgICAgIHJpZ2h0OiAnJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGdsb2JhbFRoaXMuc2Nyb2xsVG8oc2Nyb2xsWCwgc2Nyb2xsWSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVQb3J0YWxTZXJ2aWNlID0gbmV3IF9NdGVQb3J0YWxTZXJ2aWNlKCk7XG4iLCAiaW1wb3J0IHsgc2lnbmFsIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuY2xhc3MgX010ZUhpc3RvcnlBcGlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xuICBwcml2YXRlIGNoYW5nZVNpZ25hbCA9IHNpZ25hbCgpO1xuICBwcml2YXRlIHByZXZIcmVmOiBzdHJpbmc7XG5cbiAgcHVibGljIHN0YXRlQ2hhbmdlcygpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VTaWduYWw7XG4gIH1cblxuICBwcml2YXRlIGZvcndhcmRBcHBseSA9ICh0YXJnZXQsIHRoaXNBcmcsIGFyZ0FycmF5KSA9PiB7XG4gICAgY29uc3QgcmVzID0gdGFyZ2V0LmFwcGx5KHRoaXNBcmcsIGFyZ0FycmF5KTtcbiAgICAvLyBPbmx5IGVtaXQgYSBzdGF0ZSBjaGFuZ2UgaWYgdGhlIGhyZWYgZGlmZmVycyBmcm9tIHRoZSBsYXN0IGVtaXNzaW9uXG4gICAgaWYgKHRoaXMucHJldkhyZWYgIT09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB7XG4gICAgICB0aGlzLnByZXZIcmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICB0aGlzLmNoYW5nZVNpZ25hbC5zZXQodGhpcy5wcmV2SHJlZik7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgIC8vIExpc3RlbiBmb3IgYmFjayBldmVudHMgd2l0aCBwb3BzdGF0ZSBldmVudFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZVNpZ25hbC5zZXQod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFBhdGNoIEhpc3RvcnkgQVBJIG1ldGhvZHMgdG8gZW5zdXJlIHdlIGVtaXQgYW55dGltZSB0aGVpciBzdGF0ZSBpcyBjaGFuZ2VkXG4gICAgICAvLyBUaGlzIGlzIG5lY2Nlc2FyeSBiZWNhaXNlIHRoZSBgcG9wc3RhdGVgIGV2ZW50IGlzIG5vdCByZWxpYWJseSBjYWxsZWQgYWNyb3NzIGJyb3dzZXJzIHdoZW5ldmVyIHRoZSBoaXN0b3J5IEFQSSBpcyB1c2VkXG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LmJhY2ssIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkuZm9yd2FyZCA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmdvID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LmdvLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUsIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSwge1xuICAgICAgICBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZUhpc3RvcnlBcGlTZXJ2aWNlID0gbmV3IF9NdGVIaXN0b3J5QXBpU2VydmljZSgpO1xuIiwgImltcG9ydCB7IGlzU3NyIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IHR5cGUgTXRlRGF0ZUZvcm1hdE9wdGlvbnMgPSBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyAmIHtcbiAgbGFuZz86IHN0cmluZztcbiAgZm9ybWF0PzpcbiAgICB8ICdzaG9ydCdcbiAgICB8ICdtZWRpdW0nXG4gICAgfCAnbG9uZydcbiAgICB8ICdmdWxsJ1xuICAgIHwgJ3Nob3J0RGF0ZSdcbiAgICB8ICdtZWRpdW1EYXRlJ1xuICAgIHwgJ2xvbmdEYXRlJ1xuICAgIHwgJ2Z1bGxEYXRlJ1xuICAgIHwgJ3Nob3J0VGltZSdcbiAgICB8ICdtZWRpdW1UaW1lJ1xuICAgIHwgJ2xvbmdUaW1lJ1xuICAgIHwgJ2Z1bGxUaW1lJztcbn07XG5cbmV4cG9ydCB0eXBlIE10ZU51bWJlckZvcm1hdE9wdGlvbnMgPSBJbnRsLk51bWJlckZvcm1hdE9wdGlvbnMgJiB7IGxhbmc/OiBzdHJpbmcgfTtcblxuY2xhc3MgX010ZUxvY2FsaXplU2VydmljZSB7XG4gIC8vIEFzc3VtZSBgZW5gIGxhbmcgZm9yIG5vdyBhcyBhIGZhbGxiYWNrIHVudGlsIHdlIHJvbGxiYWNrIHdpZGVyIHN1cHBvcnQgZm9yIGkxMW4gd2hlbiBuZWNlc3NhcnlcbiAgcHJpdmF0ZSBsYW5ndWFnZSA9ICdlbic7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgaWYgKCFpc1NzcigpICYmICF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubGFuZ3VhZ2UgPSBgJHtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2V9YC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXROdW1iZXIobnVtYmVyVG9Gb3JtYXQ6IG51bWJlciB8IHN0cmluZywgb3B0aW9ucz86IE10ZU51bWJlckZvcm1hdE9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIGNvbnN0IGxhbmcgPSBvcHRpb25zPy5sYW5nID8gb3B0aW9ucy5sYW5nIDogdGhpcy5sYW5ndWFnZTtcbiAgICBudW1iZXJUb0Zvcm1hdCA9IE51bWJlcihudW1iZXJUb0Zvcm1hdCk7XG4gICAgLy8gRW5zdXJlIG5vIG51bGwgb3B0aW9ucyBleGlzdFxuICAgIGNvbnN0IGZpbmFsT3B0aW9ucyA9IHtcbiAgICAgIGxhbmc6IG9wdGlvbnMubGFuZyA/PyB1bmRlZmluZWQsXG4gICAgICBzdHlsZTogb3B0aW9ucy5zdHlsZSA/PyB1bmRlZmluZWQsXG4gICAgICBjdXJyZW5jeTogb3B0aW9ucy5jdXJyZW5jeSA/PyB1bmRlZmluZWQsXG4gICAgICBjdXJyZW5jeURpc3BsYXk6IG9wdGlvbnMuY3VycmVuY3lEaXNwbGF5ID8/IHVuZGVmaW5lZCxcbiAgICAgIHVzZUdyb3VwaW5nOiBvcHRpb25zLnVzZUdyb3VwaW5nID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbmltdW1JbnRlZ2VyRGlnaXRzOiBvcHRpb25zLm1pbmltdW1JbnRlZ2VyRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogb3B0aW9ucy5taW5pbXVtRnJhY3Rpb25EaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBvcHRpb25zLm1heGltdW1GcmFjdGlvbkRpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICBtaW5pbXVtU2lnbmlmaWNhbnREaWdpdHM6IG9wdGlvbnMubWluaW11bVNpZ25pZmljYW50RGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1heGltdW1TaWduaWZpY2FudERpZ2l0czogb3B0aW9ucy5tYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgIH07XG4gICAgcmV0dXJuIGlzTmFOKG51bWJlclRvRm9ybWF0KVxuICAgICAgPyAnJ1xuICAgICAgOiBuZXcgSW50bC5OdW1iZXJGb3JtYXQobGFuZywgZmluYWxPcHRpb25zKS5mb3JtYXQobnVtYmVyVG9Gb3JtYXQpO1xuICB9XG5cbiAgcHVibGljIGZvcm1hdERhdGUoZGF0ZVRvRm9ybWF0OiBEYXRlIHwgc3RyaW5nLCBvcHRpb25zPzogTXRlRGF0ZUZvcm1hdE9wdGlvbnMpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICBjb25zdCBsYW5nID0gb3B0aW9ucz8ubGFuZyA/IG9wdGlvbnMubGFuZyA6IHRoaXMubGFuZ3VhZ2U7XG4gICAgY29uc3QgZm9ybWF0dGVkT3B0aW9ucyA9IHsgLi4uKG9wdGlvbnMgPz8ge30pLCAuLi50aGlzLmdldERlZmluZWREYXRlRm9ybWF0KG9wdGlvbnM/LmZvcm1hdCkgfTtcbiAgICAvLyBFbnN1cmUgbm8gbnVsbCBvcHRpb25zIGV4aXN0XG4gICAgY29uc3QgZmluYWxPcHRpb25zID0ge1xuICAgICAgbGFuZzogZm9ybWF0dGVkT3B0aW9ucy5sYW5nID8/IHVuZGVmaW5lZCxcbiAgICAgIHdlZWtkYXk6IGZvcm1hdHRlZE9wdGlvbnMud2Vla2RheSA/PyB1bmRlZmluZWQsXG4gICAgICBlcmE6IGZvcm1hdHRlZE9wdGlvbnMuZXJhID8/IHVuZGVmaW5lZCxcbiAgICAgIHllYXI6IGZvcm1hdHRlZE9wdGlvbnMueWVhciA/PyB1bmRlZmluZWQsXG4gICAgICBtb250aDogZm9ybWF0dGVkT3B0aW9ucy5tb250aCA/PyB1bmRlZmluZWQsXG4gICAgICBkYXk6IGZvcm1hdHRlZE9wdGlvbnMuZGF5ID8/IHVuZGVmaW5lZCxcbiAgICAgIGhvdXI6IGZvcm1hdHRlZE9wdGlvbnMuaG91ciA/PyB1bmRlZmluZWQsXG4gICAgICBtaW51dGU6IGZvcm1hdHRlZE9wdGlvbnMubWludXRlID8/IHVuZGVmaW5lZCxcbiAgICAgIHNlY29uZDogZm9ybWF0dGVkT3B0aW9ucy5zZWNvbmQgPz8gdW5kZWZpbmVkLFxuICAgICAgZnJhY3Rpb25hbFNlY29uZERpZ2l0czogZm9ybWF0dGVkT3B0aW9ucy5mcmFjdGlvbmFsU2Vjb25kRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIHRpbWVab25lTmFtZTogZm9ybWF0dGVkT3B0aW9ucy50aW1lWm9uZU5hbWUgPz8gdW5kZWZpbmVkLFxuICAgICAgdGltZVpvbmU6IGZvcm1hdHRlZE9wdGlvbnMudGltZVpvbmUgPz8gdW5kZWZpbmVkLFxuICAgICAgaG91cjEyOiBmb3JtYXR0ZWRPcHRpb25zLmhvdXIxMiA/PyB1bmRlZmluZWQsXG4gICAgICBmb3JtYXQ6IGZvcm1hdHRlZE9wdGlvbnMuZm9ybWF0ID8/IHVuZGVmaW5lZCxcbiAgICB9O1xuICAgIGRhdGVUb0Zvcm1hdCA9IG5ldyBEYXRlKGRhdGVUb0Zvcm1hdCk7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxhbmcsIGZpbmFsT3B0aW9ucykuZm9ybWF0KGRhdGVUb0Zvcm1hdCk7XG4gIH1cblxuICBwcml2YXRlIGdldERlZmluZWREYXRlRm9ybWF0KFxuICAgIGZvcm1hdDpcbiAgICAgIHwgJ3Nob3J0J1xuICAgICAgfCAnbWVkaXVtJ1xuICAgICAgfCAnbG9uZydcbiAgICAgIHwgJ2Z1bGwnXG4gICAgICB8ICdzaG9ydERhdGUnXG4gICAgICB8ICdtZWRpdW1EYXRlJ1xuICAgICAgfCAnbG9uZ0RhdGUnXG4gICAgICB8ICdmdWxsRGF0ZSdcbiAgICAgIHwgJ3Nob3J0VGltZSdcbiAgICAgIHwgJ21lZGl1bVRpbWUnXG4gICAgICB8ICdsb25nVGltZSdcbiAgICAgIHwgJ2Z1bGxUaW1lJ1xuICApOiBNdGVEYXRlRm9ybWF0T3B0aW9ucyB7XG4gICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgIGNhc2UgJ3Nob3J0JzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdsb25nJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnZnVsbCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdzaG9ydERhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbWVkaXVtRGF0ZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbG9uZ0RhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnZnVsbERhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ3Nob3J0VGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbWVkaXVtVGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbG9uZ1RpbWUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdmdWxsVGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgIGZyYWN0aW9uYWxTZWNvbmREaWdpdHM6IDIsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlTG9jYWxpemVTZXJ2aWNlID0gbmV3IF9NdGVMb2NhbGl6ZVNlcnZpY2UoKTtcbiIsICJpbXBvcnQgeyBDb3JlUGFsZXR0ZSwgRGVuc2l0eU9wdGlvbnMsIFByZXNldHMsIFNpemVPcHRpb25zLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uUHJlc2V0IHtcbiAgc2l6ZT86IFNpemVPcHRpb25zO1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICBkZW5zaXR5PzogRGVuc2l0eU9wdGlvbnM7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBidXR0b25QcmVzZXRzOiBQcmVzZXRzPEJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJY29uQnV0dG9uUHJlc2V0IHtcbiAgc2l6ZT86IFNpemVPcHRpb25zO1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICBkZW5zaXR5PzogRGVuc2l0eU9wdGlvbnM7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBpY29uQnV0dG9uUHJlc2V0czogUHJlc2V0czxJY29uQnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFN0YXR1c1BhbGV0dGUgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25QcmVzZXQge1xuICBjb2xvcj86IFN0YXR1c1BhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBpY29uUHJlc2V0czogUHJlc2V0czxJY29uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFN0YXR1c1BhbGV0dGUgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzQmFyUHJlc2V0IHtcbiAgY29sb3I/OiBTdGF0dXNQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NCYXJQcmVzZXRzOiBQcmVzZXRzPFByb2dyZXNzQmFyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgU3RhdHVzUGFsZXR0ZSB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NTcGlubmVyUHJlc2V0IHtcbiAgY29sb3I/OiBTdGF0dXNQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NTcGlubmVyUHJlc2V0czogUHJlc2V0czxQcm9ncmVzc1NwaW5uZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUb29sYmFyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCB0b29sYmFyUHJlc2V0czogUHJlc2V0czxUb29sYmFyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRQcmVzZXQge1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xuICB3aXRoU2hhZG93PzogYm9vbGVhbjtcbiAgd2l0aG91dFNoYWRvdz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZEJ1dHRvblByZXNldCBleHRlbmRzIENhcmRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGNhcmRQcmVzZXRzOiBQcmVzZXRzPENhcmRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICB3aXRob3V0U2hhZG93OiB0cnVlLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBjYXJkQnV0dG9uUHJlc2V0czogUHJlc2V0czxDYXJkQnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgd2l0aG91dFNoYWRvdzogdHJ1ZSxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHRyZWVQcmVzZXRzOiBQcmVzZXRzPFRyZWVQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgQ29yZVBhbGV0dGUsIFByZXNldHMsIFNpemVPcHRpb25zLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnUHJlc2V0cyB7XG4gIHNpemU/OiBTaXplT3B0aW9ucztcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IHRhZ1ByZXNldHM6IFByZXNldHM8VGFnUHJlc2V0cz4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCYWRnZVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgYmFkZ2VQcmVzZXRzOiBQcmVzZXRzPEJhZGdlUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IENvcmVQYWxldHRlLCBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBMaW5rUHJlc2V0IHtcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgZm9udFdlaWdodD86ICdyZWd1bGFyJyB8ICdib2xkJztcbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtQcmVzZXRzOiBQcmVzZXRzPExpbmtQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBbGVydFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgYWxlcnRQcmVzZXRzOiBQcmVzZXRzPEFsZXJ0UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBpbnB1dFByZXNldHM6IFByZXNldHM8SW5wdXRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd2VyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBkcmF3ZXJQcmVzZXRzOiBQcmVzZXRzPERyYXdlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBc2lkZVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgYXNpZGVQcmVzZXRzOiBQcmVzZXRzPEFzaWRlUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCcmVhZGNydW1iSXRlbVByZXNldCB7XG4gIGZvbnRXZWlnaHQ/OiAncmVndWxhcicgfCAnYm9sZCc7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG4gIHdpdGhvdXRVbmRlcmxpbmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgYnJlYWRjcnVtYkl0ZW1QcmVzZXRzOiBQcmVzZXRzPEJyZWFkY3J1bWJJdGVtUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHtcbiAgICB3aXRob3V0VW5kZXJsaW5lOiB0cnVlLFxuICB9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBtb2RhbFByZXNldHM6IFByZXNldHM8TW9kYWxQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgQ29yZVBhbGV0dGUgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDaGVja2JveFByZXNldCB7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja2JveFByZXNldHM6IFByZXNldHM8Q2hlY2tib3hQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFkaW9QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHJhZGlvUHJlc2V0czogUHJlc2V0czxSYWRpb1ByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBOYXZSb290UHJlc2V0IHtcbiAgbW9iaWxlQnJlYWtwb2ludD86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCc7XG4gIGludmVyc2U/OiAnaGVhZGVyJyB8ICdzaWRlYmFyJztcbiAgcHJlZmVyU2lkZWJhcj86ICdvcGVuZWQnIHwgJ2Nsb3NlZCc7XG59XG5cbmV4cG9ydCBjb25zdCBuYXZSb290UHJlc2V0czogUHJlc2V0czxOYXZSb290UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge1xuICAgIGludmVyc2U6ICdzaWRlYmFyJyxcbiAgfSxcbiAgY3g6IHtcbiAgICBwcmVmZXJTaWRlYmFyOiAnY2xvc2VkJyxcbiAgfSxcbiAgcHg6IHtcbiAgICBpbnZlcnNlOiAnc2lkZWJhcicsXG4gIH0sXG4gIHJ4OiB7XG4gICAgcHJlZmVyU2lkZWJhcjogJ2Nsb3NlZCcsXG4gIH0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkhlYWRlclByZXNldCB7XG4gIHdpdGhDb250YWluZXI/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbmF2SGVhZGVyUHJlc2V0czogUHJlc2V0czxOYXZIZWFkZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2U3ViSGVhZGVyUHJlc2V0IHtcbiAgd2l0aENvbnRhaW5lcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZTdWJIZWFkZXJQcmVzZXRzOiBQcmVzZXRzPE5hdlN1YkhlYWRlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZTaWRlYmFyUHJlc2V0IHtcbiAgaGlkZVVudGlsVHJhbnNpdGlvbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZTaWRlYmFyUHJlc2V0czogUHJlc2V0czxOYXZTaWRlYmFyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgaGlkZVVudGlsVHJhbnNpdGlvbjogdHJ1ZSxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge1xuICAgIGhpZGVVbnRpbFRyYW5zaXRpb246IHRydWUsXG4gIH0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkNvbnRlbnRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkNvbnRlbnRQcmVzZXRzOiBQcmVzZXRzPE5hdkNvbnRlbnRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2Rm9vdGVyUHJlc2V0IHtcbiAgd2l0aENvbnRhaW5lcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZGb290ZXJQcmVzZXRzOiBQcmVzZXRzPE5hdkZvb3RlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZCdXR0b25QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkJ1dHRvblByZXNldHM6IFByZXNldHM8TmF2QnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkljb25CdXR0b25QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkljb25CdXR0b25QcmVzZXRzOiBQcmVzZXRzPE5hdkljb25CdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2SXRlbVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF2SXRlbVByZXNldHM6IFByZXNldHM8TmF2SXRlbVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uR3JvdXBQcmVzZXQge1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgYnV0dG9uR3JvdXBQcmVzZXRzOiBQcmVzZXRzPEJ1dHRvbkdyb3VwUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTd2l0Y2hQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHN3aXRjaFByZXNldHM6IFByZXNldHM8U3dpdGNoUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVTZWxlY3RQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdGl2ZVNlbGVjdFByZXNldHM6IFByZXNldHM8TmF0aXZlU2VsZWN0UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUZXh0YXJlYVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgdGV4dGFyZWFQcmVzZXRzOiBQcmVzZXRzPFRleHRhcmVhUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTa2VsZXRvblByZXNldCB7fVxuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25QcmVzZXRzOiBQcmVzZXRzPFNrZWxldG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHNsaWRlclByZXNldHM6IFByZXNldHM8U2xpZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBSYW5nZVNsaWRlclByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgcmFuZ2VTbGlkZXJQcmVzZXRzOiBQcmVzZXRzPFJhbmdlU2xpZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWdtZW50ZWRDb250cm9sUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBzZWdtZW50ZWRDb250cm9sUHJlc2V0czogUHJlc2V0czxTZWdtZW50ZWRDb250cm9sUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IGJ1dHRvblByZXNldHMsIGljb25CdXR0b25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2J1dHRvbi9idXR0b24ucHJlc2V0cyc7XG5pbXBvcnQgeyBpY29uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9pY29uL2ljb24ucHJlc2V0cyc7XG5pbXBvcnQgeyBwcm9ncmVzc0JhclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5wcmVzZXRzJztcbmltcG9ydCB7IHByb2dyZXNzU3Bpbm5lclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLnByZXNldHMnO1xuaW1wb3J0IHsgdG9vbGJhclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdG9vbGJhci90b29sYmFyLnByZXNldHMnO1xuaW1wb3J0IHsgY2FyZFByZXNldHMsIGNhcmRCdXR0b25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2NhcmQvY2FyZC5wcmVzZXRzJztcbmltcG9ydCB7IHRyZWVQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3RyZWUvdHJlZS5wcmVzZXRzJztcbmltcG9ydCB7IHRhZ1ByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdGFnL3RhZy5wcmVzZXRzJztcbmltcG9ydCB7IGJhZGdlUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9iYWRnZS9iYWRnZS5wcmVzZXRzJztcbmltcG9ydCB7IGxpbmtQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2xpbmsvbGluay5wcmVzZXRzJztcbmltcG9ydCB7IGFsZXJ0UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9hbGVydC9hbGVydC5wcmVzZXRzJztcbmltcG9ydCB7IGlucHV0UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9pbnB1dC9pbnB1dC5wcmVzZXRzJztcbmltcG9ydCB7IGRyYXdlclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvZHJhd2VyL2RyYXdlci5wcmVzZXRzJztcbmltcG9ydCB7IGFzaWRlUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9hc2lkZS9hc2lkZS5wcmVzZXRzJztcbmltcG9ydCB7IGJyZWFkY3J1bWJJdGVtUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9icmVhZGNydW1icy9icmVhZGNydW1iLWl0ZW0ucHJlc2V0cyc7XG5pbXBvcnQgeyBtb2RhbFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvbW9kYWwvbW9kYWwucHJlc2V0cyc7XG5pbXBvcnQgeyBjaGVja2JveFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvY2hlY2tib3gvY2hlY2tib3gucHJlc2V0cyc7XG5pbXBvcnQgeyByYWRpb1ByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcmFkaW8vcmFkaW8ucHJlc2V0cyc7XG5pbXBvcnQge1xuICBuYXZSb290UHJlc2V0cyxcbiAgbmF2SGVhZGVyUHJlc2V0cyxcbiAgbmF2U3ViSGVhZGVyUHJlc2V0cyxcbiAgbmF2U2lkZWJhclByZXNldHMsXG4gIG5hdkNvbnRlbnRQcmVzZXRzLFxuICBuYXZGb290ZXJQcmVzZXRzLFxuICBuYXZCdXR0b25QcmVzZXRzLFxuICBuYXZJY29uQnV0dG9uUHJlc2V0cyxcbiAgbmF2SXRlbVByZXNldHMsXG59IGZyb20gJy4uLy4uL2F0b21pYy9uYXYvbmF2LnByZXNldHMnO1xuaW1wb3J0IHsgYnV0dG9uR3JvdXBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAucHJlc2V0cyc7XG5pbXBvcnQgeyBzd2l0Y2hQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3N3aXRjaC9zd2l0Y2gucHJlc2V0cyc7XG5pbXBvcnQgeyBuYXRpdmVTZWxlY3RQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL25hdGl2ZS1zZWxlY3QvbmF0aXZlLXNlbGVjdC5wcmVzZXRzJztcbmltcG9ydCB7IHRleHRhcmVhUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy90ZXh0YXJlYS90ZXh0YXJlYS5wcmVzZXRzJztcbmltcG9ydCB7IHNrZWxldG9uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9za2VsZXRvbi9za2VsZXRvbi5wcmVzZXRzJztcbmltcG9ydCB7IHNsaWRlclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc2xpZGVyL3NsaWRlci5wcmVzZXRzJztcbmltcG9ydCB7IHJhbmdlU2xpZGVyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLnByZXNldHMnO1xuaW1wb3J0IHsgc2VnbWVudGVkQ29udHJvbFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc2VnbWVudGVkLWNvbnRyb2wvc2VnbWVudGVkLWNvbnRyb2wucHJlc2V0cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9ydGFyUHJlc2V0VGhlbWUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbG9yU2NoZW1lOiAnc3lzdGVtJyB8ICdsaWdodCcgfCAnZGFyayc7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdkZWZhdWx0JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAncHgnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9IGFzIE1vcnRhclByZXNldFRoZW1lLFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMuZGVmYXVsdCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMuZGVmYXVsdCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMuZGVmYXVsdCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMuZGVmYXVsdCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMuZGVmYXVsdCxcbiAgTXRlTGluazogbGlua1ByZXNldHMuZGVmYXVsdCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMuZGVmYXVsdCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMuZGVmYXVsdCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMuZGVmYXVsdCxcbn07XG5cbmV4cG9ydCB0eXBlIE1vcnRhclByZXNldCA9IHR5cGVvZiBkZWZhdWx0UHJlc2V0O1xuXG5leHBvcnQgY29uc3QgcHhQcmVzZXQ6IE1vcnRhclByZXNldCA9IHtcbiAgcHJlc2V0OiAncHgnLFxuICB0aGVtZToge1xuICAgIG5hbWU6ICdweCcsXG4gICAgY29sb3JTY2hlbWU6ICdsaWdodCcsXG4gIH0sXG4gIE10ZUJ1dHRvbjogYnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMucHgsXG4gIE10ZUljb246IGljb25QcmVzZXRzLnB4LFxuICBNdGVQcm9ncmVzc0JhcjogcHJvZ3Jlc3NCYXJQcmVzZXRzLnB4LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMucHgsXG4gIE10ZVRvb2xiYXI6IHRvb2xiYXJQcmVzZXRzLnB4LFxuICBNdGVDYXJkOiBjYXJkUHJlc2V0cy5weCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMucHgsXG4gIE10ZVRyZWU6IHRyZWVQcmVzZXRzLnB4LFxuICBNdGVUYWc6IHRhZ1ByZXNldHMucHgsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMucHgsXG4gIE10ZUxpbms6IGxpbmtQcmVzZXRzLnB4LFxuICBNdGVBbGVydDogYWxlcnRQcmVzZXRzLnB4LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLnB4LFxuICBNdGVEcmF3ZXI6IGRyYXdlclByZXNldHMucHgsXG4gIE10ZUFzaWRlOiBhc2lkZVByZXNldHMucHgsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMucHgsXG4gIE10ZU1vZGFsOiBtb2RhbFByZXNldHMucHgsXG4gIE10ZUNoZWNrYm94OiBjaGVja2JveFByZXNldHMucHgsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMucHgsXG4gIE10ZU5hdlJvb3Q6IG5hdlJvb3RQcmVzZXRzLnB4LFxuICBNdGVOYXZIZWFkZXI6IG5hdkhlYWRlclByZXNldHMucHgsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5weCxcbiAgTXRlTmF2U2lkZWJhcjogbmF2U2lkZWJhclByZXNldHMucHgsXG4gIE10ZU5hdkNvbnRlbnQ6IG5hdkNvbnRlbnRQcmVzZXRzLnB4LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMucHgsXG4gIE10ZU5hdkJ1dHRvbjogbmF2QnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlTmF2SWNvbkJ1dHRvbjogbmF2SWNvbkJ1dHRvblByZXNldHMucHgsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLnB4LFxuICBNdGVCdXR0b25Hcm91cDogYnV0dG9uR3JvdXBQcmVzZXRzLnB4LFxuICBNdGVTd2l0Y2g6IHN3aXRjaFByZXNldHMucHgsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5weCxcbiAgTXRlVGV4dGFyZWE6IHRleHRhcmVhUHJlc2V0cy5weCxcbiAgTXRlU2tlbGV0b246IHNrZWxldG9uUHJlc2V0cy5weCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLnB4LFxuICBNdGVSYW5nZVNsaWRlcjogcmFuZ2VTbGlkZXJQcmVzZXRzLnB4LFxuICBNdGVTZWdtZW50ZWRDb250cm9sOiBzZWdtZW50ZWRDb250cm9sUHJlc2V0cy5weCxcbn07XG5cbmV4cG9ydCBjb25zdCBjeFByZXNldDogTW9ydGFyUHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdjeCcsXG4gIHRoZW1lOiB7XG4gICAgbmFtZTogJ2N4JyxcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSxcbiAgTXRlQnV0dG9uOiBidXR0b25QcmVzZXRzLmN4LFxuICBNdGVJY29uQnV0dG9uOiBpY29uQnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMuY3gsXG4gIE10ZVByb2dyZXNzQmFyOiBwcm9ncmVzc0JhclByZXNldHMuY3gsXG4gIE10ZVByb2dyZXNzU3Bpbm5lcjogcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cy5jeCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMuY3gsXG4gIE10ZUNhcmQ6IGNhcmRQcmVzZXRzLmN4LFxuICBNdGVDYXJkQnV0dG9uOiBjYXJkQnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMuY3gsXG4gIE10ZVRhZzogdGFnUHJlc2V0cy5jeCxcbiAgTXRlQmFkZ2U6IGJhZGdlUHJlc2V0cy5jeCxcbiAgTXRlTGluazogbGlua1ByZXNldHMuY3gsXG4gIE10ZUFsZXJ0OiBhbGVydFByZXNldHMuY3gsXG4gIE10ZUlucHV0OiBpbnB1dFByZXNldHMuY3gsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5jeCxcbiAgTXRlQXNpZGU6IGFzaWRlUHJlc2V0cy5jeCxcbiAgTXRlQnJlYWRjcnVtYkl0ZW06IGJyZWFkY3J1bWJJdGVtUHJlc2V0cy5jeCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5jeCxcbiAgTXRlQ2hlY2tib3g6IGNoZWNrYm94UHJlc2V0cy5jeCxcbiAgTXRlUmFkaW86IHJhZGlvUHJlc2V0cy5jeCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMuY3gsXG4gIE10ZU5hdkhlYWRlcjogbmF2SGVhZGVyUHJlc2V0cy5jeCxcbiAgTXRlTmF2U3ViSGVhZGVyOiBuYXZTdWJIZWFkZXJQcmVzZXRzLmN4LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5jeCxcbiAgTXRlTmF2Q29udGVudDogbmF2Q29udGVudFByZXNldHMuY3gsXG4gIE10ZU5hdkZvb3RlcjogbmF2Rm9vdGVyUHJlc2V0cy5jeCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLmN4LFxuICBNdGVOYXZJY29uQnV0dG9uOiBuYXZJY29uQnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlTmF2SXRlbTogbmF2SXRlbVByZXNldHMuY3gsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMuY3gsXG4gIE10ZVN3aXRjaDogc3dpdGNoUHJlc2V0cy5jeCxcbiAgTXRlTmF0aXZlU2VsZWN0OiBuYXRpdmVTZWxlY3RQcmVzZXRzLmN4LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLmN4LFxuICBNdGVTa2VsZXRvbjogc2tlbGV0b25QcmVzZXRzLmN4LFxuICBNdGVTbGlkZXI6IHNsaWRlclByZXNldHMuY3gsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMuY3gsXG4gIE10ZVNlZ21lbnRlZENvbnRyb2w6IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzLmN4LFxufTtcblxuZXhwb3J0IGNvbnN0IHJ4UHJlc2V0OiBNb3J0YXJQcmVzZXQgPSB7XG4gIHByZXNldDogJ3J4JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAncngnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9LFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMucngsXG4gIE10ZUljb25CdXR0b246IGljb25CdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVJY29uOiBpY29uUHJlc2V0cy5yeCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5yeCxcbiAgTXRlUHJvZ3Jlc3NTcGlubmVyOiBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzLnJ4LFxuICBNdGVUb29sYmFyOiB0b29sYmFyUHJlc2V0cy5yeCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMucngsXG4gIE10ZUNhcmRCdXR0b246IGNhcmRCdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVUcmVlOiB0cmVlUHJlc2V0cy5yeCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLnJ4LFxuICBNdGVCYWRnZTogYmFkZ2VQcmVzZXRzLnJ4LFxuICBNdGVMaW5rOiBsaW5rUHJlc2V0cy5yeCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5yeCxcbiAgTXRlSW5wdXQ6IGlucHV0UHJlc2V0cy5yeCxcbiAgTXRlRHJhd2VyOiBkcmF3ZXJQcmVzZXRzLnJ4LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLnJ4LFxuICBNdGVCcmVhZGNydW1iSXRlbTogYnJlYWRjcnVtYkl0ZW1QcmVzZXRzLnJ4LFxuICBNdGVNb2RhbDogbW9kYWxQcmVzZXRzLnJ4LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLnJ4LFxuICBNdGVSYWRpbzogcmFkaW9QcmVzZXRzLnJ4LFxuICBNdGVOYXZSb290OiBuYXZSb290UHJlc2V0cy5yeCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZTdWJIZWFkZXI6IG5hdlN1YkhlYWRlclByZXNldHMucngsXG4gIE10ZU5hdlNpZGViYXI6IG5hdlNpZGViYXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5yeCxcbiAgTXRlTmF2Rm9vdGVyOiBuYXZGb290ZXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZCdXR0b246IG5hdkJ1dHRvblByZXNldHMucngsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVOYXZJdGVtOiBuYXZJdGVtUHJlc2V0cy5yeCxcbiAgTXRlQnV0dG9uR3JvdXA6IGJ1dHRvbkdyb3VwUHJlc2V0cy5yeCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLnJ4LFxuICBNdGVOYXRpdmVTZWxlY3Q6IG5hdGl2ZVNlbGVjdFByZXNldHMucngsXG4gIE10ZVRleHRhcmVhOiB0ZXh0YXJlYVByZXNldHMucngsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMucngsXG4gIE10ZVNsaWRlcjogc2xpZGVyUHJlc2V0cy5yeCxcbiAgTXRlUmFuZ2VTbGlkZXI6IHJhbmdlU2xpZGVyUHJlc2V0cy5yeCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMucngsXG59O1xuIiwgImltcG9ydCB7IGN4UHJlc2V0LCBkZWZhdWx0UHJlc2V0LCBNb3J0YXJQcmVzZXQsIHB4UHJlc2V0LCByeFByZXNldCB9IGZyb20gJy4vcHJlc2V0cyc7XG5pbXBvcnQgeyBjb21wdXRlZCwgU2lnbmFsLCBzaWduYWwgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5jbGFzcyBfTXRlUHJlc2V0U2VydmljZSB7XG4gIHByaXZhdGUgcHJlc2V0cyA9IG5ldyBNYXA8c3RyaW5nLCBNb3J0YXJQcmVzZXQ+KFtcbiAgICBbJ2dsb2JhbCcsIGRlZmF1bHRQcmVzZXRdLFxuICAgIFsnZGVmYXVsdCcsIGRlZmF1bHRQcmVzZXRdLFxuICAgIFsncHgnLCBweFByZXNldF0sXG4gICAgWydjeCcsIGN4UHJlc2V0XSxcbiAgICBbJ3J4JywgcnhQcmVzZXRdLFxuICBdKTtcblxuICBwcml2YXRlIHByZXNldENoYW5nZWRTaWduYWwgPSBzaWduYWw8eyBwcmVzZXROYW1lOiBzdHJpbmc7IGNvbXBvbmVudE5hbWU6IHN0cmluZyB9Pih7XG4gICAgcHJlc2V0TmFtZTogbnVsbCxcbiAgICBjb21wb25lbnROYW1lOiBudWxsLFxuICB9KTtcblxuICBwdWJsaWMgc2V0UHJlc2V0KHByZXNldE5hbWU6IHN0cmluZywgcHJlc2V0OiBQYXJ0aWFsPE1vcnRhclByZXNldD4pIHtcbiAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgIC4uLih0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpID8/IGRlZmF1bHRQcmVzZXQpLFxuICAgICAgLi4ucHJlc2V0LFxuICAgIH0pO1xuICAgIHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbC5zZXQoeyBwcmVzZXROYW1lLCBjb21wb25lbnROYW1lOiBudWxsIH0pO1xuICB9XG5cbiAgcHVibGljIHNldENvbXBvbmVudFByZXNldDxDIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0PihcbiAgICBwcmVzZXROYW1lOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogQyxcbiAgICBjb21wb25lbnRQcmVzZXQ6IFBhcnRpYWw8TW9ydGFyUHJlc2V0W0NdPlxuICApIHtcbiAgICBjb25zdCBzZWxlY3RlZFByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSkgPz8gZGVmYXVsdFByZXNldDtcbiAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgIC4uLnNlbGVjdGVkUHJlc2V0LFxuICAgICAgW2NvbXBvbmVudE5hbWVdOiB7XG4gICAgICAgIC4uLihzZWxlY3RlZFByZXNldFtjb21wb25lbnROYW1lXSA/PyAoe30gYXMgYW55KSksXG4gICAgICAgIC4uLmNvbXBvbmVudFByZXNldCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLnNldCh7IHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWUgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29tcG9uZW50UHJlc2V0UHJvcGVydHk8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldCwgUCBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldFtDXT4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IEMsXG4gICAgcHJvcGVydHlOYW1lOiBQLFxuICAgIHZhbHVlOiBNb3J0YXJQcmVzZXRbQ11bUF0gfCBQYXJ0aWFsPE1vcnRhclByZXNldFtDXVtQXT5cbiAgKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpID8/IGRlZmF1bHRQcmVzZXQ7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb21wb25lbnRQcmVzZXQgPSBzZWxlY3RlZFByZXNldFtjb21wb25lbnROYW1lXSBhcyBhbnk7XG5cbiAgICAvLyBJZiBzZXR0aW5nIGFuIG9iamVjdCB2YWx1ZSBiZSBzdXJlIHRvIHNwcmVhZCBvdmVyIGV4aXN0aW5nIHZhbHVlXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgICAuLi5zZWxlY3RlZFByZXNldCxcbiAgICAgICAgW2NvbXBvbmVudE5hbWVdOiB7XG4gICAgICAgICAgLi4uc2VsZWN0ZWRDb21wb25lbnRQcmVzZXQsXG4gICAgICAgICAgW3Byb3BlcnR5TmFtZV06IHtcbiAgICAgICAgICAgIC4uLnNlbGVjdGVkQ29tcG9uZW50UHJlc2V0W3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSBqdXN0IHNldCB0aGUgdmFsdWVcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgICAuLi5zZWxlY3RlZFByZXNldCxcbiAgICAgICAgW2NvbXBvbmVudE5hbWVdOiB7XG4gICAgICAgICAgLi4uc2VsZWN0ZWRDb21wb25lbnRQcmVzZXQsXG4gICAgICAgICAgW3Byb3BlcnR5TmFtZV06IHZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbC5zZXQoeyBwcmVzZXROYW1lLCBjb21wb25lbnROYW1lIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFByZXNldChwcmVzZXROYW1lOiBzdHJpbmcpOiBNb3J0YXJQcmVzZXQge1xuICAgIGNvbnN0IHByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSk7XG4gICAgaWYgKCFwcmVzZXQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE10ZVByZXNldFNlcnZpY2U6IEEgcHJlc2V0IHdpdGggdGhlIG5hbWUgXCIke3ByZXNldE5hbWV9XCIgZG9lcyBub3QgZXhpc3RgKTtcbiAgICB9XG4gICAgcmV0dXJuIHByZXNldDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb21wb25lbnRQcmVzZXQ8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldD4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IENcbiAgKTogTW9ydGFyUHJlc2V0W0NdIHtcbiAgICBjb25zdCBwcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpO1xuICAgIGNvbnN0IGNvbXBvbmVudFByZXNldCA9IHByZXNldFtjb21wb25lbnROYW1lXTtcbiAgICBpZiAoIXByZXNldCkge1xuICAgICAgY29uc29sZS5lcnJvcihgTXRlUHJlc2V0U2VydmljZTogQSBwcmVzZXQgd2l0aCB0aGUgbmFtZSBcIiR7cHJlc2V0TmFtZX1cIiBkb2VzIG5vdCBleGlzdC5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudFByZXNldDtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RQcmVzZXQocHJlc2V0TmFtZTogc3RyaW5nKTogU2lnbmFsPE1vcnRhclByZXNldD4ge1xuICAgIGxldCBmaXJzdEVtaXQgPSB0cnVlO1xuICAgIHJldHVybiBjb21wdXRlZCh0aGlzLnByZXNldENoYW5nZWRTaWduYWwsIChjaGFuZ2UsIHNldCkgPT4ge1xuICAgICAgaWYgKGZpcnN0RW1pdCkge1xuICAgICAgICBzZXQodGhpcy5nZXRQcmVzZXQocHJlc2V0TmFtZSkpO1xuICAgICAgICBmaXJzdEVtaXQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnByZXNldE5hbWUgPT09IHByZXNldE5hbWUpIHtcbiAgICAgICAgc2V0KHRoaXMuZ2V0UHJlc2V0KHByZXNldE5hbWUpKTtcbiAgICAgIH1cbiAgICB9KSBhcyBTaWduYWw8TW9ydGFyUHJlc2V0PjtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RDb21wb25lbnRQcmVzZXQ8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldD4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IENcbiAgKTogU2lnbmFsPE1vcnRhclByZXNldFtDXT4ge1xuICAgIGxldCBmaXJzdEVtaXQgPSB0cnVlO1xuICAgIHJldHVybiBjb21wdXRlZCh0aGlzLnByZXNldENoYW5nZWRTaWduYWwsIChjaGFuZ2UsIHNldCkgPT4ge1xuICAgICAgaWYgKGZpcnN0RW1pdCkge1xuICAgICAgICBzZXQodGhpcy5nZXRDb21wb25lbnRQcmVzZXQocHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSkpO1xuICAgICAgICBmaXJzdEVtaXQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIChjaGFuZ2UucHJlc2V0TmFtZSA9PT0gcHJlc2V0TmFtZSAmJiAhY2hhbmdlLmNvbXBvbmVudE5hbWUpIHx8XG4gICAgICAgIChjaGFuZ2UucHJlc2V0TmFtZSA9PT0gcHJlc2V0TmFtZSAmJiBjaGFuZ2UuY29tcG9uZW50TmFtZSA9PT0gY29tcG9uZW50TmFtZSlcbiAgICAgICkge1xuICAgICAgICBzZXQodGhpcy5nZXRDb21wb25lbnRQcmVzZXQocHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSkpO1xuICAgICAgfVxuICAgIH0pIGFzIFNpZ25hbDxNb3J0YXJQcmVzZXRbQ10+O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVQcmVzZXRTZXJ2aWNlID0gbmV3IF9NdGVQcmVzZXRTZXJ2aWNlKCk7XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlcyAqL1xuaW1wb3J0IHsgQ29udGV4dENvbnN1bWVyIH0gZnJvbSAnQGxpdC1sYWJzL2NvbnRleHQnO1xuaW1wb3J0IHsgUHJvcGVydHlEZWNsYXJhdGlvbiwgUmVhY3RpdmVFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIENvbnN0cnVjdG9yLFxuICBpc1NzcixcbiAgTXRlRWxlbWVudCxcbiAgTXRlUHJlc2V0U2VydmljZSxcbiAgcHJlc2V0Q29udGV4dCxcbiAgc2lnbmFsLFxuICBjb21wdXRlZCxcbiAgVW5zdWJzY3JpYmVyLFxufSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgTW9ydGFyUHJlc2V0IH0gZnJvbSAnLi9wcmVzZXRzJztcblxuZXhwb3J0IHR5cGUgUHJlc2V0T3B0aW9ucyA9ICdtZCcgfCAnc20nIHwgJ2xnJyB8IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJlc2V0RWxlbWVudEludGVyZmFjZTxQPiB7XG4gIC8qKiBAaWdub3JlICovXG4gIHJlYWRvbmx5IF9fY29tcG9uZW50TmFtZToga2V5b2YgTW9ydGFyUHJlc2V0O1xuXG4gIC8qKiBTZWxlY3RzIHRoZSBwcmVzZXQgZm9yIHRoaXMgY29tcG9uZW50LiBPdmVycmlkZXMgdGhlIGdsb2JhbCBwcmVzZXQgZm9yIHRoaXMgaW5zdGFuY2Ugb2YgdGhpcyBjb21wb25lbnQuICovXG4gIHByZXNldDogc3RyaW5nO1xuXG4gIC8qKiBAaWdub3JlICovXG4gIGFwcGxpZWRQcmVzZXQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmVzZXRNaXhpbkZhY3RvcnlPcHRpb25zIHtcbiAgcmVmbGVjdEFwcGxpZWRQcmVzZXQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IHtcbiAgaXMsXG4gIGRlZmluZVByb3BlcnR5LFxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIGdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZ2V0UHJvdG90eXBlT2YsXG59ID0gT2JqZWN0O1xuXG5leHBvcnQgY29uc3QgUHJlc2V0TWl4aW5GYWN0b3J5ID0gPFA+KFxuICBjb21wb25lbnROYW1lOiBrZXlvZiBNb3J0YXJQcmVzZXQsXG4gIG9wdGlvbnM6IFByZXNldE1peGluRmFjdG9yeU9wdGlvbnMgPSB7IHJlZmxlY3RBcHBsaWVkUHJlc2V0OiBmYWxzZSB9XG4pID0+IHtcbiAgcmV0dXJuIDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgICBjbGFzcyBQcmVzZXRFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICByZWFkb25seSBfX2NvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lO1xuXG4gICAgICAvKiogTWFwIHRoYXQgc3RvcmVzIHByaXZhdGUgdmFsdWVzIHRoYXQgdGFrZSBwcmVjZWRlbmNlIG92ZXIgcHJlc2V0IHZhbHVlcyAqL1xuICAgICAgcHJvdGVjdGVkIF92YWx1ZU1hcCA9IG5ldyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+KCk7XG5cbiAgICAgIC8qKiBNYXAgdGhhdCBzdG9yZXMgZmFsbGJhY2sgcHJlc2V0IHZhbHVlcyBlbWl0dGVkIGJ5IHRoZSBwcmVzZXRDb250cm9sbGVyICovXG4gICAgICBwcm90ZWN0ZWQgX3ByZXNldE1hcCA9IG5ldyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+KCk7XG5cbiAgICAgIC8qKiBTZWxlY3RzIGEgc3BlY2lmaWMgcHJlc2V0IGZvciB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZS4gT3ZlcnJpZGVzIHRoZSBjdXJyZW50IGdsb2JhbCBwcmVzZXQuICovXG4gICAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pXG4gICAgICBzZXQgcHJlc2V0KHByZXNldDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3ByZXNldCA9IHByZXNldDtcbiAgICAgICAgdGhpcy5fYWN0aXZlUHJlc2V0U2lnbmFsLnNldChwcmVzZXQpO1xuICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgIC8vIFN0b3AgU1NSIGNvbnN0cnVjdG9yIGxpc3RlbmVyIGlmIHN0aWxsIG9wZW4uXG4gICAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1Yj8uKCk7XG4gICAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1YiA9IG51bGw7XG4gICAgICAgICAgY29uc3QgcHJlc2V0ID0gTXRlUHJlc2V0U2VydmljZS5nZXRQcmVzZXQodGhpcy5wcmVzZXQgPz8gJ2dsb2JhbCcpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlU3NyUHJlc2V0Q2hhbmdlcyhwcmVzZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBnZXQgcHJlc2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJlc2V0O1xuICAgICAgfVxuICAgICAgcHJpdmF0ZSBfcHJlc2V0ID0gJ2dsb2JhbCc7XG5cbiAgICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IG9wdGlvbnM/LnJlZmxlY3RBcHBsaWVkUHJlc2V0ID8/IGZhbHNlIH0pIGFwcGxpZWRQcmVzZXQgPSAnZ2xvYmFsJztcblxuICAgICAgQHN0YXRlKCkgcHJpdmF0ZSBfYXBwbGllZFByZXNldD86IHN0cmluZztcblxuICAgICAgLyoqIEtlZXBzIGNvbnN0cnVjdG9yIHByZXNldCBzdWJzY3JpcHRpb24gb3BlbiB1bnRpbCB3aWxsVXBkYXRlICovXG4gICAgICBwcml2YXRlIHNzckNvbnN0cnVjdG9yU3ViOiBVbnN1YnNjcmliZXI7XG4gICAgICBwcml2YXRlIHByZXZpb3VzQ29tcG9uZW50VW5zdWI6IFVuc3Vic2NyaWJlcjtcblxuICAgICAgLyoqIEVtaXRzIHdoZW5ldmVyIHRoZSBsb2NhbCBwcmVzZXQgdmFsdWUgY2hhbmdlcy4gKi9cbiAgICAgIHByaXZhdGUgX2FjdGl2ZVByZXNldFNpZ25hbCA9IHNpZ25hbDxzdHJpbmc+KG51bGwpO1xuICAgICAgcHJpdmF0ZSBfcGFyZW50UHJlc2V0U2lnbmFsID0gc2lnbmFsPHN0cmluZz4obnVsbCk7XG5cbiAgICAgIHByaXZhdGUgX3ByZXNldENvbnRleHQgPSBuZXcgQ29udGV4dENvbnN1bWVyKHRoaXMsIHtcbiAgICAgICAgY29udGV4dDogcHJlc2V0Q29udGV4dCxcbiAgICAgICAgc3Vic2NyaWJlOiB0cnVlLFxuICAgICAgICBjYWxsYmFjazogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcGFyZW50UHJlc2V0U2lnbmFsLnNldCgodmFsdWUgPT09ICcnID8gbnVsbCA6IHZhbHVlKSA/PyAnZ2xvYmFsJyk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBPdmVycmlkZXMgdGhlIGRlZmF1bHQgZ2V0UHJvcGVydHlEZXNjcmlwdG9yIG1ldGhvZCB0byBjaGVjayBmb3IgdGhlIGN1c3RvbVxuICAgICAgICogYGlzUHJlc2V0YCBvcHRpb24uIERlc2NyaXB0b3JzIG9mIHByb3BlcnRpZXMgdGhhdCBhcmUgZGVjbGFyZWQgd2l0aCB0aGUgYGlzUHJlc2V0YFxuICAgICAgICogb3B0aW9uIGFyZSBkZWZpbmVkIHdpdGggc3BlY2lhbCBnZXR0ZXIvc2V0dGVyIGxvZ2ljIHRoYXQgc2V0cyB2YWx1ZSB0byB2YWx1ZU1hcFxuICAgICAgICogYW5kIGdldHMgdmFsdWVzIGZyb20gdGhlIHZhbHVlTWFwIGJ1dCB0aGVuIGFsc28gZmFsbHMgYmFjayB0byBhbnkgdmFsdWUgaW4gdGhlIHByZXNldE1hcFxuICAgICAgICpcbiAgICAgICAqIFRoZSBwcmVzZXRNYXAgaXMgcG9wdWxhdGVkIGFib3ZlIGZyb20gdmFsdWVzIGZyb20gdGhlIHByZXNldENvbnRyb2xsZXIgd2hlbmV2ZXIgdGhlXG4gICAgICAgKiBwcmVzZXQgZm9yIHRoaXMgY29tcG9uZW50IGlzIGNoYW5nZWQgZ2xvYmFsbHkuXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICAgIG5hbWU6IFByb3BlcnR5S2V5LFxuICAgICAgICBrZXk6IHN0cmluZyB8IHN5bWJvbCxcbiAgICAgICAgb3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvblxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHsgZ2V0LCBzZXQgfSA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLnByb3RvdHlwZSwgbmFtZSkgPz8ge1xuICAgICAgICAgIGdldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW2tleSBhcyBrZXlvZiB0eXBlb2YgdGhpc107XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQodGhpczogUmVhY3RpdmVFbGVtZW50LCB2OiB1bmtub3duKSB7XG4gICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcgfCBzeW1ib2wsIHVua25vd24+KVtrZXldID0gdjtcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGdldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQpOiBhbnkge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBnZXR0ZXIgbG9naWMgdGhhdCBnZXRzIGZyb20gdGhlIHZhbHVlTWFwIG9yIHByZXNldE1hcFxuICAgICAgICAgICAgaWYgKG9wdGlvbnNbJ2lzUHJlc2V0J10pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkuX3ZhbHVlTWFwIGFzIE1hcDxcbiAgICAgICAgICAgICAgICAgICAgUHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgICAgIFBba2V5b2YgUF1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICApLmdldChuYW1lKSB8fFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fcHJlc2V0TWFwIGFzIE1hcDxcbiAgICAgICAgICAgICAgICAgICAgUHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgICAgIFBba2V5b2YgUF1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICApLmdldChuYW1lKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVmYXVsdCBwcm9wZXJ0eSBnZXR0ZXIgbG9naWNcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gZ2V0Py5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCwgdmFsdWU6IHVua25vd24pIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgc2V0dGVyIGxvZ2ljIHRoYXQgc2V0cyB0byB0aGUgdmFsdWVNYXBcbiAgICAgICAgICAgIGlmIChvcHRpb25zWydpc1ByZXNldCddKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gKFxuICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fdmFsdWVNYXAgYXMgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPlxuICAgICAgICAgICAgICApLmdldChuYW1lKTtcbiAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fdmFsdWVNYXAgYXMgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPlxuICAgICAgICAgICAgICApLnNldChuYW1lLCB2YWx1ZSBhcyBhbnkpO1xuICAgICAgICAgICAgICAvLyBEdXJpbmcgU1NSIHdlIG5lZWQgdG8gdXBkYXRlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgIGlmIChpc1NzcigpKSB7XG4gICAgICAgICAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBSZWFjdGl2ZUVsZW1lbnQpLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIE9uIHRoZSBjbGllbnQgd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgY3VycmVudCB1cGRhdGUgdG8gZmluaXNoXG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlYWN0aXZlRWxlbWVudCkucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlZmF1bHQgcHJvcGVydHkgc2V0dGVyIGxvZ2ljXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBnZXQ/LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgIHNldCEuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICh0aGlzIGFzIHVua25vd24gYXMgUmVhY3RpdmVFbGVtZW50KS5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgICAgICAvLyBTdWJzY3JpYmVzIGZvciBjaGFuZ2VzIHRvIHRoaXMgY29tcG9uZW50cyBhY3RpdmUgcHJlc2V0IHRvIHVwZGF0ZSBhbGwgcmVsZXZhbnQgcHJvcHMgcHJlc2V0IHZhbHVlc1xuICAgICAgICB0aGlzLnN1YnMucHVzaChcbiAgICAgICAgICBjb21wdXRlZChcbiAgICAgICAgICAgIFt0aGlzLl9hY3RpdmVQcmVzZXRTaWduYWwsIHRoaXMuX3BhcmVudFByZXNldFNpZ25hbF0sXG4gICAgICAgICAgICAoW2FjdGl2ZVByZXNldCwgcGFyZW50UHJlc2V0XSwgc2V0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhY3RpdmVQcmVzZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZSA9XG4gICAgICAgICAgICAgICAgICBhY3RpdmVQcmVzZXQgPT09ICdnbG9iYWwnXG4gICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICA6IE10ZVByZXNldFNlcnZpY2UuZ2V0Q29tcG9uZW50UHJlc2V0KGFjdGl2ZVByZXNldCwgJ3RoZW1lJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2xvY2FsUHJlc2V0VGhlbWUgPSBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBudWxsKTtcblxuICAgICAgICAgICAgICB0aGlzLl9hcHBsaWVkUHJlc2V0ID0gYWN0aXZlUHJlc2V0ID8/IHBhcmVudFByZXNldCA/PyAnZ2xvYmFsJztcbiAgICAgICAgICAgICAgdGhpcy5hcHBsaWVkUHJlc2V0ID0gTXRlUHJlc2V0U2VydmljZS5nZXRDb21wb25lbnRQcmVzZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwbGllZFByZXNldCxcbiAgICAgICAgICAgICAgICAncHJlc2V0J1xuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIC8vIFVuc3Vic2NyaWJlIHRvIHByZXZpb3VzIGNvbXBvbmVudCBwcmVzZXQgY2hhbmdlc1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ29tcG9uZW50VW5zdWI/LigpO1xuICAgICAgICAgICAgICAvLyBVcGRhdGUgcHJvcHMgaWYgbmV3IGNvbXBvbmVudCBwcmVzZXQgZW1pdHNcbiAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0NvbXBvbmVudFVuc3ViID0gTXRlUHJlc2V0U2VydmljZS5zZWxlY3RDb21wb25lbnRQcmVzZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwbGllZFByZXNldCxcbiAgICAgICAgICAgICAgICB0aGlzLl9fY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgICApLnN1YnNjcmliZSgobmV3UHJlc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ByZXNldCkge1xuICAgICAgICAgICAgICAgICAgc2V0KG5ld1ByZXNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApLnN1YnNjcmliZSgobmV3UHJlc2V0cykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWVzTWFwID0gbmV3IE1hcCh0aGlzLl9wcmVzZXRNYXApO1xuICAgICAgICAgICAgY29uc3Qgb2xkUHJvcHMgPSBBcnJheS5mcm9tKHRoaXMuX3ByZXNldE1hcC5rZXlzKCkpO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSBPYmplY3Qua2V5cyhuZXdQcmVzZXRzID8/IHt9KTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGtleXMgaW4gdGhlIG5ldyBwcmVzZXRzIGNsZWFyIGFsbCBwcmVzZXQgdmFsdWVzXG4gICAgICAgICAgICBpZiAobmV3UHJvcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG9sZCBzZXQgcHJvcHMgYW5kIG5ldyBvbmVzXG4gICAgICAgICAgICAvLyBSZW1vdmUgb2xkIG9uZXMgJiBzZXQgbmV3IG9uZXNcbiAgICAgICAgICAgIC8vIEZpbmFsbHkgZm9yY2UgYW4gdXBkYXRlIGZvciBlYWNoIHByb3BcbiAgICAgICAgICAgIFsuLi5vbGRQcm9wcywgLi4ubmV3UHJvcHNdLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAobmV3UHJlc2V0c1trZXldKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLnNldChrZXksIG5ld1ByZXNldHNba2V5XSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShrZXksIG9sZFZhbHVlc01hcC5nZXQoa2V5KSA/PyBudWxsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgICAgIHRoaXMucHJldmlvdXNDb21wb25lbnRVbnN1Yj8uKCk7XG4gICAgICAgIHRoaXMuc3NyQ29uc3RydWN0b3JTdWI/LigpO1xuICAgICAgfVxuXG4gICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBzdXBlcihhcmdzKTtcblxuICAgICAgICAvLyBUT0RPKHJlZWNlKTogRW5zdXJlIHdlIHVwZGF0ZSB0aGlzIHRvIHN1cHBvcnQgY29udGV4dCB3aGVuIHRoYXQgaXMgU1NSIEZyaWVuZGx5OiBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9pc3N1ZXMvMzM2NVxuICAgICAgICAvLyBIYW5kbGUgc2V0dGluZyBwcmVzZXQgZGVmYXVsdHMgaW4gU1NSXG4gICAgICAgIGlmIChpc1NzcigpKSB7XG4gICAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1YiA9IE10ZVByZXNldFNlcnZpY2Uuc2VsZWN0UHJlc2V0KHRoaXMucHJlc2V0ID8/ICdnbG9iYWwnKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocHJlc2V0KSA9PiB0aGlzLmhhbmRsZVNzclByZXNldENoYW5nZXMocHJlc2V0KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBoYW5kbGVTc3JQcmVzZXRDaGFuZ2VzKHByZXNldDogTW9ydGFyUHJlc2V0KSB7XG4gICAgICAgIGlmIChwcmVzZXQpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRQcmVzZXRzID0gcHJlc2V0W3RoaXMuX19jb21wb25lbnROYW1lXTtcbiAgICAgICAgICBjb25zdCBvbGRQcm9wcyA9IEFycmF5LmZyb20odGhpcy5fcHJlc2V0TWFwLmtleXMoKSk7XG4gICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRQcmVzZXRzID8/IHt9KTtcblxuICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBrZXlzIGluIHRoZSBuZXcgcHJlc2V0cyBjbGVhciBhbGwgcHJlc2V0IHZhbHVlc1xuICAgICAgICAgIGlmIChuZXdQcm9wcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5jbGVhcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBMb29wIHRocm91Z2ggb2xkIHNldCBwcm9wcyBhbmQgbmV3IG9uZXNcbiAgICAgICAgICAvLyBSZW1vdmUgb2xkIG9uZXMgJiBzZXQgbmV3IG9uZXNcbiAgICAgICAgICAvLyBGaW5hbGx5IGZvcmNlIGFuIHVwZGF0ZSBmb3IgZWFjaCBwcm9wXG4gICAgICAgICAgWy4uLm9sZFByb3BzLCAuLi5uZXdQcm9wc10uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50UHJlc2V0c1trZXldKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5zZXQoa2V5LCBjb21wb25lbnRQcmVzZXRzW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKGtleSwgbnVsbCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5hcHBsaWVkUHJlc2V0ID0gcHJlc2V0WydwcmVzZXQnXTtcbiAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ2FwcGxpZWRQcmVzZXQnLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUHJlc2V0RWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxQcmVzZXRFbGVtZW50SW50ZXJmYWNlPFA+PiAmIFQ7XG4gIH07XG59O1xuIiwgImltcG9ydCB7IFByb3BlcnR5RGVjbGFyYXRpb24gfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVzZXRQcm9wZXJ0eTxUPihvcHRpb25zPzogUHJvcGVydHlEZWNsYXJhdGlvbikge1xuICByZXR1cm4gcHJvcGVydHkoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgaXNQcmVzZXQ6IHRydWUsXG4gIH0gYXMgYW55KTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAnQGxpdC1sYWJzL2NvbnRleHQnO1xuXG5leHBvcnQgY29uc3QgcHJlc2V0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8c3RyaW5nPignTVRFX1BSRVNFVCcpO1xuIiwgImltcG9ydCB7IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgTXRlUHJlc2V0U2VydmljZSB9IGZyb20gJy4uL3ByZXNldHMnO1xuaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgTXRlRWxlbWVudCB9IGZyb20gJy4uL2Jhc2UtY2xhc3Nlcyc7XG5cbmNvbnN0IGdsb2JhbFByZXNldCQgPSBNdGVQcmVzZXRTZXJ2aWNlLnNlbGVjdFByZXNldCgnZ2xvYmFsJyk7XG5jb25zdCBnbG9iYWxQcmVzZXROYW1lJCA9IGNvbXB1dGVkKGdsb2JhbFByZXNldCQsIChwcmVzZXQpID0+IHByZXNldC5wcmVzZXQpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpZWRQcmVzZXRDb250ZXh0IHtcbiAgcHJlc2V0TmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFByZXNldCBpcyBkZXRlcm1pbmVkIGZyb20gZWl0aGVyIHRoZSBwYXJlbnQgcHJlc2V0IGNvbnRleHQgb3IgYSBsb2NhbCBwcmVzZXQgcHJvcGVydHkuXG4gKiBUaGlzIGNvbnRyb2xsZXIga2VlcHMgdHJhY2sgb2YgdGhlIGFjdHVhbCBhY3RpdmUgcHJlc2V0IGFwcGxpZWQgdG8gdGhlIGN1cnJlbnQgY29tcG9uZW50LlxuICogSWYgYSBjYWxsYmFjayBpcyBnaXZlbiBpdCB3aWxsIGJlIGNhbGxlZCBhbnkgdGltZSB0aGF0IGNvbnRleHQgY2hhbmdlcy4gT3RoZXJ3aXNlIGNvbnRyb2xsZXJcbiAqIG1ldGhvZHMgY2FuIGJlIGNhbGxlZCB3aGVuIG5lZWRlZC5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIGV2ZW4gd2l0aGluIGVsZW1lbnRzIHRoYXQgZG8gbm90IGhhdmUgdGhlaXIgb3duIHByZXNldFxuICogb3B0aW9ucyAoYWthIGV4dGVuZCB0aGUgcHJlc2V0TWl4aW4pLlxuICovXG5leHBvcnQgY2xhc3MgQXBwbGllZFByZXNldENvbnRleHRDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBhcHBsaWVkUHJlc2V0TmFtZSA9ICdnbG9iYWwnO1xuICBwcml2YXRlIGFjdGl2ZUdsb2JhbFByZXNldE5hbWUgPSAnZGVmYXVsdCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBob3N0OiBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0ICYgTXRlRWxlbWVudCxcbiAgICBwcml2YXRlIGNhbGxiYWNrPzogKGNvbnRleHQ6IEFwcGxpZWRQcmVzZXRDb250ZXh0KSA9PiB2b2lkXG4gICkge1xuICAgIHRoaXMuaG9zdC5hZGRDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgfVxuXG4gIGhvc3RDb25uZWN0ZWQoKSB7XG4gICAgdGhpcy5ob3N0LnN1YnMucHVzaChcbiAgICAgIGdsb2JhbFByZXNldE5hbWUkLnN1YnNjcmliZSgoZ2xvYmFsUHJlc2V0TmFtZSkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZUdsb2JhbFByZXNldE5hbWUgPSBnbG9iYWxQcmVzZXROYW1lO1xuICAgICAgICB0aGlzLnVwZGF0ZUFwcGxpZWRQcmVzZXRDb250ZXh0KCk7XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5leGVjQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGhvc3RVcGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVBcHBsaWVkUHJlc2V0Q29udGV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBleGVjQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5jYWxsYmFjaz8uKHtcbiAgICAgIHByZXNldE5hbWU6IHRoaXMuYXBwbGllZFByZXNldE5hbWUsXG4gICAgfSBhcyBBcHBsaWVkUHJlc2V0Q29udGV4dCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUFwcGxpZWRQcmVzZXRDb250ZXh0KCkge1xuICAgIGxldCB1cGRhdGVkID0gZmFsc2U7XG4gICAgY29uc3QgbmV3UHJlc2V0TmFtZSA9ICh0aGlzLmhvc3QgYXMgYW55KS5hcHBsaWVkUHJlc2V0ID8/IHRoaXMuYWN0aXZlR2xvYmFsUHJlc2V0TmFtZTtcbiAgICBpZiAobmV3UHJlc2V0TmFtZSAhPT0gdGhpcy5hcHBsaWVkUHJlc2V0TmFtZSkge1xuICAgICAgdGhpcy5hcHBsaWVkUHJlc2V0TmFtZSA9IG5ld1ByZXNldE5hbWU7XG4gICAgICB1cGRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgIHRoaXMuZXhlY0NhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVByZXNldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGllZFByZXNldE5hbWU7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2Jhc2UuanMnO1xuLyoqXG4gKiBJdGVtcyBpbiB0aGlzIGZpbGUgYXJlIG1vZGlmaWNhdGlvbnMgb2Ygb2YgdGhlIGRlY29yYXRvcnMgaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2Jsb2IvbWFpbi9wYWNrYWdlcy9yZWFjdGl2ZS1lbGVtZW50L3NyYy9kZWNvcmF0b3JzL2N1c3RvbS1lbGVtZW50LnRzXG4gKlxuICogV2UndmUgYWRkZWQgY2hlY2tzIHRvIHByZXZlbnQgcmUtcmVnaXN0cmF0aW9ucyBmcm9tIHRocm93aW5nIGhhcmQgZXJyb3JzLlxuICovXG5cbi8qKlxuICogQWxsb3cgZm9yIGN1c3RvbSBlbGVtZW50IGNsYXNzZXMgd2l0aCBwcml2YXRlIGNvbnN0cnVjdG9yc1xuICovXG50eXBlIEN1c3RvbUVsZW1lbnRDbGFzcyA9IE9taXQ8dHlwZW9mIEhUTUxFbGVtZW50LCAnbmV3Jz47XG5cbmV4cG9ydCB0eXBlIEN1c3RvbUVsZW1lbnREZWNvcmF0b3IgPSB7XG4gIC8vIGxlZ2FjeVxuICAoY2xzOiBDdXN0b21FbGVtZW50Q2xhc3MpOiB2b2lkO1xuXG4gIC8vIHN0YW5kYXJkXG4gICh0YXJnZXQ6IEN1c3RvbUVsZW1lbnRDbGFzcywgY29udGV4dDogQ2xhc3NEZWNvcmF0b3JDb250ZXh0PENvbnN0cnVjdG9yPEhUTUxFbGVtZW50Pj4pOiB2b2lkO1xufTtcblxuLyoqXG4gKiBDbGFzcyBkZWNvcmF0b3IgZmFjdG9yeSB0aGF0IGRlZmluZXMgdGhlIGRlY29yYXRlZCBjbGFzcyBhcyBhIGN1c3RvbSBlbGVtZW50LlxuICpcbiAqIGBgYGpzXG4gKiBAY3VzdG9tRWxlbWVudCgnbXktZWxlbWVudCcpXG4gKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYGA7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICogQHBhcmFtIHRhZ05hbWUgVGhlIHRhZyBuYW1lIG9mIHRoZSBjdXN0b20gZWxlbWVudCB0byBkZWZpbmUuXG4gKi9cbmV4cG9ydCBjb25zdCBkZWZpbmVFbGVtZW50ID1cbiAgKHRhZ05hbWU6IHN0cmluZyk6IEN1c3RvbUVsZW1lbnREZWNvcmF0b3IgPT5cbiAgKFxuICAgIGNsYXNzT3JUYXJnZXQ6IEN1c3RvbUVsZW1lbnRDbGFzcyB8IENvbnN0cnVjdG9yPEhUTUxFbGVtZW50PixcbiAgICBjb250ZXh0PzogQ2xhc3NEZWNvcmF0b3JDb250ZXh0PENvbnN0cnVjdG9yPEhUTUxFbGVtZW50Pj5cbiAgKSA9PiB7XG4gICAgaWYgKGNvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplcigoKSA9PiB7XG4gICAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0Py4odGFnTmFtZSkpIHtcbiAgICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY2xhc3NPclRhcmdldCBhcyBDdXN0b21FbGVtZW50Q29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQ/Lih0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY2xhc3NPclRhcmdldCBhcyBDdXN0b21FbGVtZW50Q29uc3RydWN0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3QoW2RlbnNpdHk9Y29tcGFjdF0pey0tbXRlLXNwYWNlLXh4czp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eHMpOy0tbXRlLXNwYWNlLXhzOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1zbSk7LS1tdGUtc3BhY2UtbWQ6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QtbWQpOy0tbXRlLXNwYWNlLWxnOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14bCk7LS1tdGUtc3BhY2UteHhsOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXh4bCk7LS1tdGUtc3BhY2UteHh4bDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eHhsKX06aG9zdChbZGVuc2l0eT1jb21meV0pey0tbXRlLXNwYWNlLXh4czp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHhzKTstLW10ZS1zcGFjZS14czp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHMpOy0tbXRlLXNwYWNlLXNtOnZhcigtLW10ZS1zcGFjZS1jb21meS1zbSk7LS1tdGUtc3BhY2UtbWQ6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LW1kKTstLW10ZS1zcGFjZS1sZzp2YXIoLS1tdGUtc3BhY2UtY29tZnktbGcpOy0tbXRlLXNwYWNlLXhsOnZhcigtLW10ZS1zcGFjZS1jb21meS14bCk7LS1tdGUtc3BhY2UteHhsOnZhcigtLW10ZS1zcGFjZS1jb21meS14eGwpOy0tbXRlLXNwYWNlLXh4eGw6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4eGwpfTpob3N0KFtkZW5zaXR5PXJvb215XSl7LS1tdGUtc3BhY2UteHhzOnZhcigtLW10ZS1zcGFjZS1yb29teS14eHMpOy0tbXRlLXNwYWNlLXhzOnZhcigtLW10ZS1zcGFjZS1yb29teS14cyk7LS1tdGUtc3BhY2Utc206dmFyKC0tbXRlLXNwYWNlLXJvb215LXNtKTstLW10ZS1zcGFjZS1tZDp2YXIoLS1tdGUtc3BhY2Utcm9vbXktbWQpOy0tbXRlLXNwYWNlLWxnOnZhcigtLW10ZS1zcGFjZS1yb29teS1sZyk7LS1tdGUtc3BhY2UteGw6dmFyKC0tbXRlLXNwYWNlLXJvb215LXhsKTstLW10ZS1zcGFjZS14eGw6dmFyKC0tbXRlLXNwYWNlLXJvb215LXh4bCk7LS1tdGUtc3BhY2UteHh4bDp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHh4bCl9YDsiLCAiaW1wb3J0IHsgTGl0RWxlbWVudCwgUHJvcGVydHlWYWx1ZXMgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uLyc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERpc2FibGVkSW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIERpc2FibGVzIHRoaXMgY29tcG9uZW50XG4gICAqIEBhdHRyIGRpc2FibGVkXG4gICAqL1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IERpc2FibGVkTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPExpdEVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIERpc2FibGVkRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIERpc2FibGVzIHRoaXMgY29tcG9uZW50XG4gICAgICogQGF0dHIgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvLyBCZWNhdXNlIGBhcmlhRGlzYWJsZWRgIGV4aXN0cyBhcyBhIHN0cmluZyBvbiBMaXRFbGVtZW50IHdlIGNhbm5vdCBkZWNsYXJlIHRoaXMgYSBwcm9wZXJ0eSBoZXJlXG4gICAgcHJvdGVjdGVkIHdpbGxVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlczxhbnk+KTogdm9pZCB7XG4gICAgICBzdXBlci53aWxsVXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChfY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCBgJHt0aGlzLmRpc2FibGVkfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIERpc2FibGVkRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxEaXNhYmxlZEludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgcHJlc2V0UHJvcGVydHkgfSBmcm9tICcuLi9wcmVzZXRzL3ByZXNldC5kZWNvcmF0b3InO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJbnZlcnNlSW50ZXJmYWNlIHtcbiAgLyoqIFJlbmRlcnMgdGhpcyBjb21wb25lbnQgd2l0aCBpbnZlcnNlIHRoZW1pbmcgKi9cbiAgaW52ZXJzZTogYm9vbGVhbjtcblxuICAvKiogU3BlY2lhbCBvcHRpb24gdG8gb3ZlcnJpZGUgaW52ZXJzZSB3aGVuIGl0IGlzIHNldCBieSBhIHByZXNldCAqL1xuICB3aXRob3V0SW52ZXJzZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IEludmVyc2VNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgSW52ZXJzZUVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKiogUmVuZGVycyB0aGlzIGNvbXBvbmVudCB3aXRoIGludmVyc2UgdGhlbWluZyAqL1xuICAgIEBwcmVzZXRQcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgaW52ZXJzZSA9IGZhbHNlO1xuXG4gICAgLyoqIFNwZWNpYWwgb3B0aW9uIHRvIG92ZXJyaWRlIGludmVyc2Ugd2hlbiBpdCBpcyBzZXQgYnkgYSBwcmVzZXQgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHdpdGhvdXRJbnZlcnNlID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIEludmVyc2VFbGVtZW50IGFzIENvbnN0cnVjdG9yPEludmVyc2VJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0KFtpbnZlcnNlXTpub3QoW3dpdGhvdXRJbnZlcnNlXSkpey0tbXRlLXN1cmZhY2UtMTp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlKTstLW10ZS1zdXJmYWNlLTEtcmdiOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UtcmdiKTstLW10ZS1zdXJmYWNlLTI6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS0yLXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtc3VyZmFjZS0zOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tbXRlLXN1cmZhY2UtMy1yZ2I6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpOy0tbXRlLXN1cmZhY2UtNDp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlKTstLW10ZS1zdXJmYWNlLTQtcmdiOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UtcmdiKTstLW10ZS1pbmstMTp2YXIoLS1tdGUtd2hpdGUpOy0tbXRlLWluay0xLXJnYjp2YXIoLS1tdGUtd2hpdGUtcmdiKTstLW10ZS1pbmstMjp2YXIoLS1tdGUtd2hpdGUpOy0tbXRlLWluay0yLXJnYjp2YXIoLS1tdGUtd2hpdGUtcmdiKTstLW10ZS1pbmstMzp2YXIoLS1tdGUtd2hpdGUpOy0tbXRlLWluay0zLXJnYjp2YXIoLS1tdGUtd2hpdGUtcmdiKTstLW10ZS1pbmstNDp2YXIoLS1tdGUtYmxhY2spOy0tbXRlLWluay00LXJnYjp2YXIoLS1tdGUtYmxhY2stcmdiKTstLW10ZS1pbmstNTp2YXIoLS1tdGUtYmxhY2spOy0tbXRlLWluay01LXJnYjp2YXIoLS1tdGUtYmxhY2stcmdiKTstLW10ZS1ib3JkZXItMTp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UpOy0tbXRlLWJvcmRlci0xLXJnYjp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UtcmdiKTstLW10ZS1ib3JkZXItMjp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UpOy0tbXRlLWJvcmRlci0yLXJnYjp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UtcmdiKTstLW10ZS1ib3JkZXItMzp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UpOy0tbXRlLWJvcmRlci0zLXJnYjp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UtcmdiKTstLW10ZS1kaXNhYmxlZC0xOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTEpOy0tbXRlLWRpc2FibGVkLTEtcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTEtcmdiKTstLW10ZS1kaXNhYmxlZC0yOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTIpOy0tbXRlLWRpc2FibGVkLTItcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTIpOy0tbXRlLWRpc2FibGVkLTM6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMyk7LS1tdGUtZGlzYWJsZWQtMy1yZ2I6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMy1yZ2IpOy0tbXRlLWRpc2FibGVkLTQ6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMyk7LS1tdGUtZGlzYWJsZWQtNC1yZ2I6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMy1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMS1kZWZhdWx0LXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTEtZGVmYXVsdC1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1hKTstLW10ZS1pdC1zdXJmYWNlLTEtaG92ZXItcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItcmdiKTstLW10ZS1pdC1zdXJmYWNlLTEtaG92ZXItYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLWEpOy0tbXRlLWl0LXN1cmZhY2UtMS1hY3RpdmUtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWFjdGl2ZS1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLWEpOy0tbXRlLWl0LXN1cmZhY2UtMi1kZWZhdWx0LXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1hKTstLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItcmdiKTstLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLWEpOy0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLWEpOy0tbXRlLWl0LXN1cmZhY2UtMy1kZWZhdWx0LXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTMtZGVmYXVsdC1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1hKTstLW10ZS1pdC1zdXJmYWNlLTMtaG92ZXItcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItcmdiKTstLW10ZS1pdC1zdXJmYWNlLTMtaG92ZXItYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLWEpOy0tbXRlLWl0LXN1cmZhY2UtMy1hY3RpdmUtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0zLWFjdGl2ZS1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLWEpOy0tbXRlLWxpZ2h0OnZhcigtLW10ZS13aGl0ZSk7LS1tdGUtbGlnaHQtcmdiOnZhcigtLW10ZS13aGl0ZS1yZ2IpOy0tbXRlLWRhcms6dmFyKC0tbXRlLWJsYWNrKTstLW10ZS1kYXJrLXJnYjp2YXIoLS1tdGUtYmxhY2stcmdiKTstLWJ1dHRvbi1maWxsZWQtYmc6dmFyKC0tbXRlLXdoaXRlKTstLWJ1dHRvbi1maWxsZWQtaW5rOnZhcigtLW10ZS1ibGFjayk7LS1idXR0b24tZmlsbGVkLWFjdGl2ZS1iZzp2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UpOy0tYnV0dG9uLWZpbGxlZC1hY3RpdmUtaW5rOnZhcigtLW10ZS13aGl0ZSl9YDsiLCAiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IG9uVXBkYXRlIH0gZnJvbSAnLi4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBEaXNhYmxlZEludGVyZmFjZSB9IGZyb20gJy4vZGlzYWJsZWQubWl4aW4nO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBpc1NzciB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRhYkluZGV4SW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byByZXRyaWV2ZSB0aGUgY3VycmVudCB0YWJpbmRleCBhdHRyaWJ1dGUgdmFsdWUgZnJvbSBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBnZXRUYWJJbmRleEFkYXB0ZXIoKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gc2V0IHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgb24gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnRcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc2V0VGFiSW5kZXhBZGFwdGVyKHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gcmVtb3ZlIHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgZnJvbSBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudFxuICAgKiBAaWdub3JlXG4gICAqL1xuICByZW1vdmVUYWJJbmRleEFkYXB0ZXIoKTogdm9pZDtcbn1cblxuLyoqXG4gKiBNaXhpbiB0byBwcm9wZXJseSBtYW5hZ2UgdGhlIHRhYmluZGV4IGluIGEgbm9uLWludHJ1c2l2ZSB3YXkuIFdoZW4gZGlzYWJsZWQgaXMgdHJ1ZSxcbiAqIHRoZSB0YWJpbmRleCB3aWxsIEFMV0FZUyBiZSBgLTFgLiBIb3dldmVyLCBhbnkgY2hhbmdlcyB0byB0YWJpbmRleCB3aWxsIGJlIGludGVyY2VwdGVkXG4gKiBhbmQgY2FjaGVkIGludGVybmFsbHkgdW50aWwgZGlzYWJsZWQgaXMgZmFsc2UsIHRoZW4gdGFiaW5kZXggd2lsbCBiZSByZXN0b3JlZCB0byB0aGVcbiAqIGNhY2hlZCB2YWx1ZSwgb3IgcmVtb3ZlZCBpZiB0aGF0IGlzIHVuZGVmaW5lZC5cbiAqL1xuZXhwb3J0IGNvbnN0IFRhYkluZGV4TWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPExpdEVsZW1lbnQgJiBEaXNhYmxlZEludGVyZmFjZT4+KFxuICBzdXBlckNsYXNzOiBULFxuICBvcHRpb25zOiB7IGluaXRpYWxUYWJJbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkIH0gPSB7IGluaXRpYWxUYWJJbmRleDogdW5kZWZpbmVkIH1cbikgPT4ge1xuICBjbGFzcyBUYWJJbmRleEVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6ICd0YWJpbmRleCcsIHR5cGU6IE51bWJlciwgbm9BY2Nlc3NvcjogdHJ1ZSB9KVxuICAgIHB1YmxpYyBvdmVycmlkZSBzZXQgdGFiSW5kZXgodGFiSW5kZXg6IG51bWJlcikge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgLy8gV2hlbiBzZXR0aW5nIHRoZSB0YWJJbmRleCBvbiB0aGUgY3VycmVudCBlbGVtZW50IHRvIGAtMWAgZGlzYWJsZWQsIHdlIHdhbnQgdG8ga2VlcCB0cmFjayBvZiB3aGF0IHRoZSB0YWJJbmRleCB2YWx1ZSBiZWZvcmUgdGhhdCB3YXNcbiAgICAgICAgLy8gYXMgdGhlIGNhY2hlZFRhYkluZGV4LiBUbyBkbyB0aGlzIHdlIG11c3QgaWdub3JlIHRoZSBpbml0aWFsIGNoYW5nZSB0byBgLTFgIGFuZCB0aGVuIGNhY2hlIGFueSBmdXR1cmUgdmFsdWVzIGJlZm9yZSBrZWVwaW5nIHRoZVxuICAgICAgICAvLyB0YWJJbmRleCBhcyBgLTFgIHVudGlsIG5vIGxvbmdlciBkaXNhYmxlZC4gVGhlbiB3ZSBjYW4gcmV0dXJuIHRoZSB0YWJJbmRleCB0byB3aGF0ZXZlciB0aGUgbGFzdCBzZXQgdmFsdWUgd2FzIGZyb20gdGhlIGNhY2hlZCBpbmRleC5cbiAgICAgICAgaWYgKCF0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLl9jYWNoZWRUYWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICAgIHRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoJy0xJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3RhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKGAke3RoaXMuX3RhYkluZGV4fWApO1xuICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0IHRhYkluZGV4KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RhYkluZGV4O1xuICAgIH1cbiAgICBwcml2YXRlIF90YWJJbmRleCA9IG9wdGlvbnM/LmluaXRpYWxUYWJJbmRleDtcbiAgICBwcml2YXRlIF9jYWNoZWRUYWJJbmRleCA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSBmYWxzZTtcblxuICAgIEBvblVwZGF0ZShbJ2Rpc2FibGVkJ10sIHsgb246ICdib3RoJyB9KVxuICAgIHByaXZhdGUgaGFuZGxlVGFiaW5kZXhDaGFuZ2UoY2hhbmdlZFByb3BzKSB7XG4gICAgICBpZiAoY2hhbmdlZFByb3BzLmhhcygnZGlzYWJsZWQnKSkge1xuICAgICAgICBpZiAoY2hhbmdlZFByb3BzLmdldCgnZGlzYWJsZWQnKSA9PT0gZmFsc2UgJiYgdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gTnVtYmVyKHRoaXMuZ2V0VGFiSW5kZXhBZGFwdGVyKCkpO1xuICAgICAgICAgIHRoaXMuX3RhYkluZGV4ID0gLTE7XG4gICAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoJy0xJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlZFByb3BzLmdldCgnZGlzYWJsZWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLl9jYWNoZWRUYWJJbmRleCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX2NhY2hlZFRhYkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl90YWJJbmRleCA9IHRoaXMuX2NhY2hlZFRhYkluZGV4O1xuICAgICAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoYCR7dGhpcy5fY2FjaGVkVGFiSW5kZXh9YCk7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZWRUYWJJbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVRhYkluZGV4QWRhcHRlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgdGFiaW5kZXggYXR0cmlidXRlIHZhbHVlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgKi9cbiAgICBnZXRUYWJJbmRleEFkYXB0ZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgLyoqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byBzZXQgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBvbiBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudCAqL1xuICAgIHNldFRhYkluZGV4QWRhcHRlcih2YWx1ZTogc3RyaW5nLCBzaG91bGRQcmV2ZW50VGFiSW5kZXhDaGFuZ2VPblNlbGYgPSBmYWxzZSkge1xuICAgICAgaWYgKHNob3VsZFByZXZlbnRUYWJJbmRleENoYW5nZU9uU2VsZikge1xuICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gcmVtb3ZlIHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgZnJvbSBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudCAqL1xuICAgIHJlbW92ZVRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIH1cblxuICAgIHdpbGxVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgIHN1cGVyLndpbGxVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAoaXNTc3IoKSAmJiB0aGlzLl90YWJJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKGAke3RoaXMuX3RhYkluZGV4fWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKHRoaXMuX3RhYkluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoYCR7dGhpcy5fdGFiSW5kZXh9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBUYWJJbmRleEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8VGFiSW5kZXhJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciwgTXRlRWxlbWVudCwgU3R5bGVNYXAgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBzZWxlY3RvckZhY3RvcnkgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXRlRWxlbWVudFBhcnRzIHtcbiAgLyoqIFRoZSBob3N0IGVsZW1lbnQgXCJwYXJ0XCIuIE92ZXJyaWRlcyB0aGUgYHNlYCBwcm9wZXJ0eSBvZiB0aGlzIGVsZW1lbnQgKi9cbiAgaG9zdD86IFN0eWxlTWFwO1xufVxuXG5leHBvcnQgdHlwZSBTdHlsZVBhcnRzTWFwPFQgPSBzdHJpbmcgfCBudW1iZXI+ID0ge1xuICBbbmFtZTogc3RyaW5nXTogU3R5bGVNYXA8VD47XG59O1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdHlsZVBhcnRzSW50ZXJmYWNlPFN0eWxlUGFydHM+IHtcbiAgLyoqXG4gICAqIFN0eWxlIG1hcHBpbmdzIHRoYXQgYXJlIGFwcGxpZWQgdG8gZWFjaCBjc3MgcGFydCBieSBuYW1lLiBTZXQgdGhlXG4gICAqIHByb3BlcnR5IGBob3N0YCB0byBhcHBseSBhIGBTdHlsZUluZm9gIG9iamVjdCB0byB0aGUgZWxlbWVudCBob3N0IGl0c2VsZi5cbiAgICovXG4gIHNwPzogU3R5bGVQYXJ0cztcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlUGFydHNNaXhpbiA9IDxTdHlsZVBhcnRzLCBUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgU3R5bGVQYXJ0c0VsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBTdHlsZSBtYXBwaW5ncyB0aGF0IGFyZSBhcHBsaWVkIHRvIGVhY2ggY3NzIHBhcnQgYnkgbmFtZS4gU2V0IHRoZVxuICAgICAqIHByb3BlcnR5IGBob3N0YCB0byBhcHBseSBhIGBTdHlsZUluZm9gIG9iamVjdCB0byB0aGUgZWxlbWVudCBob3N0IGl0c2VsZi5cbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIHJlZmxlY3Q6IHRydWUgfSkgc3A6IFN0eWxlUGFydHM7XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKSB7XG4gICAgICBzdXBlci51cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpO1xuXG4gICAgICBpZiAoY2hhbmdlZFByb3BzLmhhcygnc3AnKSkge1xuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnNwID8/ICh7fSBhcyBTdHlsZVBhcnRzKSkuZm9yRWFjaCgoW3BhcnQsIHN0eWxlTWFwXSkgPT4ge1xuICAgICAgICAgIC8vIERvdWJsZSB0aGUgYDpob3N0YCBzZWxlY3RvciB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSBiZXlvbmQgbW9zdCBjb21wb25lbnQgbGV2ZWwgc3R5bGVzIGJ5IGRlZmF1bHRcbiAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9yRmFjdG9yeShcbiAgICAgICAgICAgIHBhcnQgPT09ICdob3N0J1xuICAgICAgICAgICAgICA/ICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnXG4gICAgICAgICAgICAgIDogYDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDo6cGFydCgke3BhcnR9KWBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuc2V0SW5zdGFuY2VTdHlsZShgc3AtJHtwYXJ0fWAsIHNlbGVjdG9yLCBzdHlsZU1hcCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBTdHlsZVBhcnRzRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxTdHlsZVBhcnRzSW50ZXJmYWNlPFN0eWxlUGFydHM+PiAmIFQ7XG59O1xuIiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZX0jYW5jaG9ye2luc2V0OjA7cG9zaXRpb246YWJzb2x1dGV9YDsiLCAiaW1wb3J0IHsgcHJvcGVydHksIHN0YXRlIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtcbiAgQ2xpY2tPdXRzaWRlQ29udHJvbGxlcixcbiAgQ29uc3RydWN0b3IsXG4gIEV2ZW50RW1pdHRlcixcbiAgRm9jdXNUcmFwQ29udHJvbGxlcixcbiAgTXRlRWxlbWVudCxcbiAgUG9ydGFsQWRhcHRlcixcbiAgUG9ydGFsQ29udHJvbGxlcixcbiAgZGVmYXVsdFBvcnRhbEFkYXB0ZXIsXG4gIGV2ZW50RW1pdHRlcixcbiAgaXNTc3IsXG59IGZyb20gJy4uJztcbmltcG9ydCB7IFByb3BlcnR5VmFsdWVNYXAgfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPdmVybGF5SW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIG92ZXJsYXkgc3RhdGUgb24gdGhlIG92ZXJsYXkgbWl4aW4uIEJ5IGRlZmF1bHQgYWxsIG9wdGlvbnMgYXJlIHNldCB0byB0cnVlIGluaXRpYWxseS5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIHNldE92ZXJsYXlPcHRpb25zKG9wdGlvbnM6IHtcbiAgICB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZT86IGJvb2xlYW47XG4gICAgd2l0aENsb3NlT25Fc2NhcGU/OiBib29sZWFuO1xuICAgIHdpdGhGb2N1c1RyYXA/OiBib29sZWFuO1xuICAgIHdpdGhQb3J0YWw/OiBib29sZWFuO1xuICAgIHdpdGhEaW1CYWNrZHJvcD86IGJvb2xlYW47XG4gICAgd2l0aEluZXJ0QmFja2Ryb3A/OiBib29sZWFuO1xuICAgIHdpdGhTY3JvbGxMb2NrPzogYm9vbGVhbjtcbiAgICBhbmltYXRpb25EdXJhdGlvbj86IG51bWJlcjtcbiAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbj86IHN0cmluZztcbiAgICByZXR1cm5Ub09yaWdpbk9uQ2xvc2U/OiBib29sZWFuO1xuICAgIGZvY3VzVHJhcFRhcmdldD86IEVsZW1lbnQ7XG4gIH0pOiB1bmtub3duO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgb3ZlcmxheSBzaG91bGQgb3Blbi4gQ2FuIGFkZCBhIGxpc3RlbmVyIGZvciBvdXRzaWRlIGNsaWNrcywgcG9ydGFsIGFuIGVsZW1lbnQsXG4gICAqIGFuZCBwcmV2ZW50IHRoZSBib2R5IGZyb20gc2Nyb2xsaW5nIHVwb24gb3Blbi5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIGhhbmRsZU92ZXJsYXlPcGVuKG9wdGlvbnM/OiB7XG4gICAgY2xpY2tPdXRzaWRlRWxlbWVudD86IEhUTUxFbGVtZW50O1xuICAgIHdpbGxPcGVuPzogKCkgPT4gdm9pZDtcbiAgfSk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gY2FsbCBhZnRlciB0aGUgb3ZlcmxheSBoYXMgYmVlbiBvcHRpb25hbGx5IHBvcnRhbGVkIGFuZC9vciBhbGwgYW5pbWF0aW9ucyBoYXZlIGZpbmlzaGVkLlxuICAgKi9cbiAgaGFuZGxlT3ZlcmxheU9wZW5FbmQoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIG92ZXJsYXkgZWxlbWVudCBzaG91bGQgY2xvc2UuIENhbiBzdG9wIGxpc3RlbmluZyBmb3Igb3V0c2lkZSBjbGlja3MsIHJlbGVhc2UgYSxcbiAgICogZm9jdXMgdHJhcCwgYW5kIGFsbG93IHRoZSBib2R5IGVsZW1lbnQgdG8gc2Nyb2xsIGFnYWluLlxuICAgKi9cbiAgaGFuZGxlT3ZlcmxheUNsb3NlKCk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBvdmVybGF5IGVsZW1lbnQgaGFzIGZpbmlzaGVkIGNsb3NpbmcgYW5kL29yIGFsbCBhbmltYXRpb25zIGhhdmUgY29tcGxldGVkLiBDYW5cbiAgICogcmVtb3ZlIGFuIGVsZW1lbnQgZnJvbSB0aGUgcG9ydGFsLlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgaGFuZGxlT3ZlcmxheUNsb3NlRW5kKG9wdGlvbnM/OiB7IHJlbW92ZUZyb21FbGVtZW50PzogSFRNTEVsZW1lbnQgfSk6IFByb21pc2U8dm9pZD47XG5cbiAgb3BlbigpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIGNsb3NlKCk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIFRoZSB0YWIgaW5kZXggZm9yIHRoaXMgZWxlbWVudFxuICAgKi9cbiAgdGFiaW5kZXg6IG51bWJlcjtcblxuICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgb3BlbmVkICovXG4gIF9vbk9wZW46IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAvKiogRW1pdHRlZCBhZnRlciB0aGlzIG92ZXJsYXkgaGFzIGZpbmlzaGVkIG9wZW5pbmcgKi9cbiAgX29uT3BlbkVuZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBjbG9zaW5nICovXG4gIF9vbkNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaGFzIGZpbmlzaGVkIGNsb3NpbmcgKi9cbiAgX29uQ2xvc2VFbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAvKiogQGlnbm9yZSAqL1xuICBwb3J0YWxBZGFwdGVyOiBQb3J0YWxBZGFwdGVyO1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFRoZSBvcGVuZWQgc3RhdGUgb2YgdGhlIG92ZXJsYXkgcmVnYXJkbGVzcyBvZiBhbmltYXRpb25zXG4gICAqL1xuICBvcGVuZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogSW5kaWNhdGVzIHRoZSBvdmVybGF5IGhhcyBiZWVuIHBvcnRhbGVkIGFuZCByZWFkeSB0byBhbmltYXRlXG4gICAqL1xuICByZWFkeUZvckFuaW1hdGlvbjogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBJbmRpY2F0ZXMgdGhlIG92ZXJsYXkgaGFzIGJlZW4gZnVsbHkgYW5pbWF0ZWQgb3BlblxuICAgKi9cbiAgb3BlbmVkRnVsbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE92ZXJsYXlNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgT3ZlcmxheUVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKiogVGhlIHRhYiBpbmRleCBvZiB0aGlzIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6ICd0YWJpbmRleCcsIHR5cGU6IE51bWJlciB9KSB0YWJpbmRleCA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogQWRhcHRlciBmb3IgcG9ydGFsIERPTSBvcGVyYXRpb24gdGhhdCBjYW4gYmUgc3VwcGxlbWVudGVkIGZvciBleHRlcm5hbC1mcmFtZXdvcmsgaW50ZWdyYXRpb25zLlxuICAgICAqIE5vdGFibHktbGV2ZXJhZ2VkIGJ5IG92ZXJsYXlzIGluIG91ciBnZW5lcmF0ZWQgcmVhY3Qgd3JhcHBlcnMuXG4gICAgICpcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgQHByb3BlcnR5KCkgcG9ydGFsQWRhcHRlcjogUG9ydGFsQWRhcHRlciA9IGRlZmF1bHRQb3J0YWxBZGFwdGVyO1xuXG4gICAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaXMgaW5pdGlhbGx5IG9wZW5lZCAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25PcGVuOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogRW1pdHRlZCBhZnRlciB0aGlzIG92ZXJsYXkgaGFzIGZpbmlzaGVkIG9wZW5pbmcgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uT3BlbkVuZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaXMgaW5pdGlhbGx5IGNsb3NlZCAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25DbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaGFzIGZpbmlzaGVkIGNsb3NpbmcgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uQ2xvc2VFbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IGVsZW1lbnQgc2hvdWxkIHVzZSBhIGZvY3VzIHRyYXAgb3Igbm90ICovXG4gICAgcHJpdmF0ZSBfd2l0aEZvY3VzVHJhcCA9IHRydWU7XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBlbGVtZW50IHNob3VsZCBjbG9zZSB3aGVuIGEgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgZWxlbWVudCAqL1xuICAgIHByaXZhdGUgX2Nsb3NlT25DbGlja091dHNpZGUgPSB0cnVlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGNsb3NlIHdoZW4gdGhlIGVzY2FwZSBidXR0b24gaXMgcHJlc3NlZCAqL1xuICAgIHByaXZhdGUgX2Nsb3NlT25Fc2NhcGUgPSB0cnVlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgc2hvdWxkIHVzZSBhIHBvcnRhbCBvciBub3QgKi9cbiAgICBwcml2YXRlIF93aXRoUG9ydGFsID0gdHJ1ZTtcblxuICAgIC8qKiBXZXRoZXIgdGhlIHVzZXIgc2hvdWxkIGJlIGFibGUgdG8gY2xpY2sgYmVoaW5kIHRoZSBiYWNrZHJvcCBvciBub3QgKi9cbiAgICBwcml2YXRlIF93aXRoSW5lcnRCYWNrZHJvcCA9IGZhbHNlO1xuXG4gICAgLyoqIFdldGhlciB0aGUgb3ZlcmxheSdzIGJhY2tkcm9wIHNob3VsZCByZW5kZXIgZGltbWVkICovXG4gICAgcHJpdmF0ZSBfd2l0aERpbUJhY2tkcm9wID0gZmFsc2U7XG5cbiAgICAvKiogV2V0aGVyIG9yIG5vdCB0aGUgZWxlbWVudCBzaG91bGQgYmUgcmUtYXBwZW5kZWQgdG8gaXQncyBvcmlnaW4gcGFyZW50IGVsZW1lbnQgb24gY2xvc2UgX2lmXyBwb3J0YWxlZC4gKi9cbiAgICBwcml2YXRlIF9yZXR1cm5Ub09yaWdpbk9uQ2xvc2UgPSBmYWxzZTtcblxuICAgIC8qKiBPcHRpb25hbCBiYWNrZHJvcCB0aW1pbmcuIEltcG9ydGFudCBwYXJ0aWN1bGFybHkgZm9yIHNtb290aCBjbG9zZXMgd2l0aCBhIHZpc2libGUgYmFja2Ryb3AgKi9cbiAgICBwcml2YXRlIF9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbj86IHN0cmluZztcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IHNob3VsZCBwcmV2ZW50IHNjcm9sbGluZyBvbiB0aGUgYm9keSAqL1xuICAgIHByaXZhdGUgX3dpdGhTY3JvbGxMb2NrID0gdHJ1ZTtcblxuICAgIHByb3RlY3RlZCBmb2N1c1RyYXBDb250cm9sbGVyID0gbmV3IEZvY3VzVHJhcENvbnRyb2xsZXIodGhpcyk7XG5cbiAgICBwcm90ZWN0ZWQgY2xpY2tPdXRzaWRlQ29udHJvbGxlciA9IG5ldyBDbGlja091dHNpZGVDb250cm9sbGVyKHRoaXMsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fd2l0aFBvcnRhbCkge1xuICAgICAgICB0aGlzLmhhbmRsZUNsb3NlT25DbGlja091dHNpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHByb3RlY3RlZCBwb3J0YWxDb250cm9sbGVyID0gbmV3IFBvcnRhbENvbnRyb2xsZXIodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCBwYXJlbnQgZWxlbWVudFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0aWFsUGFyZW50OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQgPSB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50IHRvIGRldGVjdCBjbGlja3Mgb3V0c2lkZSBvZiB0byBjbG9zZSB0aGUgb3ZlcmxheSBlbGVtZW50LlxuICAgICAqL1xuICAgIHByaXZhdGUgY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcblxuICAgIHByaXZhdGUgX29yaWdpblBhcmVudD86IEVsZW1lbnQgfCBIVE1MRWxlbWVudDtcblxuICAgIHByaXZhdGUgX2ZvY3VzVHJhcFRhcmdldD86IEVsZW1lbnQgfCBIVE1MRWxlbWVudCA9IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogVGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgb3ZlcmxheSByZWdhcmRsZXNzIG9mIGFuaW1hdGlvbnNcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIG9wZW5lZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqIEluZGljYXRlcyB0aGUgb3ZlcmxheSBoYXMgYmVlbiBwb3J0YWxlZCBhbmQgcmVhZHkgdG8gYW5pbWF0ZVxuICAgICAqL1xuICAgIEBzdGF0ZSgpXG4gICAgc2V0IHJlYWR5Rm9yQW5pbWF0aW9uKHJlYWR5Rm9yQW5pbWF0aW9uOiBib29sZWFuKSB7XG4gICAgICB0aGlzLl9yZWFkeUZvckFuaW1hdGlvbiA9IHJlYWR5Rm9yQW5pbWF0aW9uO1xuICAgIH1cbiAgICBnZXQgcmVhZHlGb3JBbmltYXRpb24oKSB7XG4gICAgICAvLyBEdXJpbmcgU1NSIHJldHVybiB0cnVlIGluIGNhc2Ugc29tZXRoaW5nIG5lZWRzIHRvIGJlIG9wZW5lZCBpbml0aWFsbHkuXG4gICAgICByZXR1cm4gaXNTc3IoKSA/IHRydWUgOiB0aGlzLl9yZWFkeUZvckFuaW1hdGlvbjtcbiAgICB9XG4gICAgcHJpdmF0ZSBfcmVhZHlGb3JBbmltYXRpb24gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBUaGUgb3BlbmVkIHN0YXRlIG9mIHRoZSBvdmVybGF5IHJlZ2FyZGxlc3Mgb2YgYW5pbWF0aW9ucy4gVGhpcyBpcyByZWZsZWN0ZWQgYW5kIHVzZWQgYnlcbiAgICAgKiBzb21lIG92ZXJsYXlzIHRvIHJlc3RyaWN0IHRoZWlyIHNpemUgd2hpbGUgaGlkZGVuLiAoc2luY2UgZGlzcGxheTogbm9uZSBicmVha3MgYW5pbWF0aW9ucylcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIG9wZW5lZEZ1bGwgPSBmYWxzZTtcblxuICAgIHNldE92ZXJsYXlPcHRpb25zKG9wdGlvbnM6IHtcbiAgICAgIHdpdGhDbG9zZU9uQ2xpY2tPdXRzaWRlPzogYm9vbGVhbjtcbiAgICAgIHdpdGhDbG9zZU9uRXNjYXBlPzogYm9vbGVhbjtcbiAgICAgIHdpdGhGb2N1c1RyYXA/OiBib29sZWFuO1xuICAgICAgd2l0aFBvcnRhbD86IGJvb2xlYW47XG4gICAgICB3aXRoSW5lcnRCYWNrZHJvcD86IGJvb2xlYW47XG4gICAgICB3aXRoRGltQmFja2Ryb3A/OiBib29sZWFuO1xuICAgICAgd2l0aFNjcm9sbExvY2s/OiBib29sZWFuO1xuICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG4gICAgICByZXR1cm5Ub09yaWdpbk9uQ2xvc2U/OiBib29sZWFuO1xuICAgICAgZm9jdXNUcmFwVGFyZ2V0PzogRWxlbWVudDtcbiAgICB9KSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHdpdGhGb2N1c1RyYXAsXG4gICAgICAgIHdpdGhDbG9zZU9uQ2xpY2tPdXRzaWRlLFxuICAgICAgICB3aXRoQ2xvc2VPbkVzY2FwZSxcbiAgICAgICAgd2l0aFBvcnRhbCxcbiAgICAgICAgd2l0aFNjcm9sbExvY2ssXG4gICAgICAgIHdpdGhJbmVydEJhY2tkcm9wLFxuICAgICAgICB3aXRoRGltQmFja2Ryb3AsXG4gICAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICByZXR1cm5Ub09yaWdpbk9uQ2xvc2UsXG4gICAgICAgIGZvY3VzVHJhcFRhcmdldCxcbiAgICAgIH0gPSBvcHRpb25zID8/IHt9O1xuXG4gICAgICB0aGlzLl93aXRoRm9jdXNUcmFwID0gd2l0aEZvY3VzVHJhcCA/PyB0aGlzLl93aXRoRm9jdXNUcmFwO1xuICAgICAgdGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZSA9IHdpdGhDbG9zZU9uQ2xpY2tPdXRzaWRlID8/IHRoaXMuX2Nsb3NlT25DbGlja091dHNpZGU7XG4gICAgICB0aGlzLl93aXRoU2Nyb2xsTG9jayA9IHdpdGhTY3JvbGxMb2NrID8/IHRoaXMuX3dpdGhTY3JvbGxMb2NrO1xuICAgICAgdGhpcy5fd2l0aFBvcnRhbCA9IHdpdGhQb3J0YWwgPz8gdGhpcy5fd2l0aFBvcnRhbDtcbiAgICAgIHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wID1cbiAgICAgICAgd2l0aEluZXJ0QmFja2Ryb3AgPz8gIXRoaXMuX3dpdGhGb2N1c1RyYXAgPz8gdGhpcy5fd2l0aEluZXJ0QmFja2Ryb3A7XG4gICAgICB0aGlzLl93aXRoRGltQmFja2Ryb3AgPSB3aXRoRGltQmFja2Ryb3AgPz8gdGhpcy5fd2l0aERpbUJhY2tkcm9wO1xuICAgICAgdGhpcy5fYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPVxuICAgICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA/PyB0aGlzLl9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgIHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZSA9IHJldHVyblRvT3JpZ2luT25DbG9zZSA/PyB0aGlzLl9yZXR1cm5Ub09yaWdpbk9uQ2xvc2U7XG4gICAgICB0aGlzLl9mb2N1c1RyYXBUYXJnZXQgPSBmb2N1c1RyYXBUYXJnZXQgPz8gdGhpcy5fZm9jdXNUcmFwVGFyZ2V0O1xuXG4gICAgICBpZiAod2l0aENsb3NlT25Fc2NhcGUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9jbG9zZU9uRXNjYXBlICE9PSB3aXRoQ2xvc2VPbkVzY2FwZSkge1xuICAgICAgICBpZiAod2l0aENsb3NlT25Fc2NhcGUgPT09IHRydWUpIHtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Nsb3NlT25Fc2NhcGUgPSB3aXRoQ2xvc2VPbkVzY2FwZSA/PyB0aGlzLl9jbG9zZU9uRXNjYXBlO1xuICAgICAgfVxuXG4gICAgICBpZiAod2l0aEZvY3VzVHJhcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy50YWJpbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aXRoRm9jdXNUcmFwID09PSB0cnVlICYmIHRoaXMudGFiaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAtMTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVPdmVybGF5KCk7XG4gICAgfVxuXG4gICAgaGFuZGxlT3ZlcmxheU9wZW4ob3B0aW9ucz86IHtcbiAgICAgIGNsaWNrT3V0c2lkZUVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcbiAgICAgIHdpbGxPcGVuPzogKCkgPT4gdm9pZDtcbiAgICB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBJZ25vcmUgaWYgYWxyZWFkeSBvcGVuXG4gICAgICBpZiAodGhpcy5vcGVuZWQgfHwgdGhpcy5vcGVuZWRGdWxsKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHsgY2xpY2tPdXRzaWRlRWxlbWVudCwgd2lsbE9wZW4gfSA9IG9wdGlvbnMgPz8ge307XG4gICAgICB3aWxsT3Blbj8uKCk7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCA9IGNsaWNrT3V0c2lkZUVsZW1lbnQgfHwgdGhpcztcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmxpc3RlbkZvckNsaWNrc091dHNpZGVPZih0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50KTtcbiAgICAgICAgaWYgKHRoaXMuX3dpdGhQb3J0YWwpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXJcbiAgICAgICAgICAgIC5hcHBlbmRUb1N0YWNrKHRoaXMsIHtcbiAgICAgICAgICAgICAgd2l0aERpbUJhY2tkcm9wOiB0aGlzLl93aXRoRGltQmFja2Ryb3AsXG4gICAgICAgICAgICAgIHdpdGhJbmVydEJhY2tkcm9wOiB0aGlzLl93aXRoSW5lcnRCYWNrZHJvcCxcbiAgICAgICAgICAgICAgd2l0aFNjcm9sbExvY2s6IHRoaXMuX3dpdGhTY3JvbGxMb2NrLFxuICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcjogdGhpcy5oYW5kbGVDbG9zZU9uQ2xpY2tPdXRzaWRlLFxuICAgICAgICAgICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbjogdGhpcy5fYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICAgIHBvcnRhbEFkYXB0ZXI6IHRoaXMucG9ydGFsQWRhcHRlcixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIFdhaXQgZm9yIGFwcGVuZCB0byBjb21wbGV0ZSBiZWZvcmUgYW5pbWF0aW5nXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZHlGb3JBbmltYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIEFmdGVyIGFuaW1hdGlvbiBiZWdpbnMgcmVzb2x2ZVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9vbk9wZW4uZW1pdChudWxsLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9LCAyMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLl9vcmlnaW5QYXJlbnQgJiZcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpICYmXG4gICAgICAgICAgICB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSAhPT0gdGhpcy5fb3JpZ2luUGFyZW50XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgdGhpcy5fb3JpZ2luUGFyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gV2FpdCBmb3IgYXBwZW5kIHRvIGNvbXBsZXRlIGJlZm9yZSBhbmltYXRpbmdcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlGb3JBbmltYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgLy8gQWZ0ZXIgYW5pbWF0aW9uIGJlZ2lucyByZXNvbHZlXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl9vbk9wZW4uZW1pdChudWxsLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCAyMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZU92ZXJsYXlPcGVuRW5kKCkge1xuICAgICAgLy8gQ2FuY2VsIGlmIGNsb3NlZCBiZWZvcmUgb3BlbiBlbmRlZFxuICAgICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZEZ1bGwgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuX3dpdGhGb2N1c1RyYXApIHtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLnRyYXBGb2N1cyh0aGlzLl9mb2N1c1RyYXBUYXJnZXQsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fb25PcGVuRW5kLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVPdmVybGF5Q2xvc2UoKSB7XG4gICAgICAvLyBJZ25vcmUgaWYgYWxyZWFkeSBjbG9zZWRcbiAgICAgIGlmICghdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX29uQ2xvc2UuZW1pdChudWxsLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuc3RvcExpc3RlbmluZygpO1xuICAgICAgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLnJlbGVhc2VGb2N1cyh0cnVlKTtcbiAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5oaWRlQmFja2Ryb3AoKTtcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVPdmVybGF5Q2xvc2VFbmQob3B0aW9ucz86IHsgcmVtb3ZlRnJvbUVsZW1lbnQ/OiBIVE1MRWxlbWVudCB9KSB7XG4gICAgICAvLyBDYW5jZWwgaWYgb3BlbmVkIGJlZm9yZSBjbG9zZSBlbmRlZFxuICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbmVkRnVsbCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWFkeUZvckFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnJlbW92ZUZyb21TdGFjayhvcHRpb25zPy5yZW1vdmVGcm9tRWxlbWVudCB8fCB0aGlzKTtcbiAgICAgIGlmICh0aGlzLl9yZXR1cm5Ub09yaWdpbk9uQ2xvc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuX29yaWdpblBhcmVudCAmJiB0aGlzLl9vcmlnaW5QYXJlbnQgIT09IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpKSB7XG4gICAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIHRoaXMuX29yaWdpblBhcmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX29uQ2xvc2VFbmQuZW1pdChudWxsLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlT3ZlcmxheUtleURvd24oZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudEVsZW1lbnQ/Lmhhc0F0dHJpYnV0ZSgnZGF0YS1vdmVybGF5LXdyYXBwZXInKVxuICAgICAgICA/IHRoaXMucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudFxuICAgICAgICA6IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwYXJlbnQgZWxlbWVudCB0aGlzIG92ZXJsYXkgd2lsbCBiZSByZWF0dGFjaGVkIHRvIGVpdGhlcjpcbiAgICAgKiAtIFdoZW4gY29uZmlndXJlZCB0byBkbyBzbyBvbiBjbG9zZVxuICAgICAqIC0gV2hlbiBcInBvcnRhbGluZ1wiIGlzIGRpc2FibGVkXG4gICAgICovXG4gICAgc2V0T3JpZ2luUGFyZW50KG5ld09yaWdpbjogRWxlbWVudCkge1xuICAgICAgY29uc3QgY3VycmVudFBhcmVudEVsZW1lbnQgPSB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKTtcbiAgICAgIGlmIChjdXJyZW50UGFyZW50RWxlbWVudCA9PT0gdGhpcy5fb3JpZ2luUGFyZW50KSB7XG4gICAgICAgIHRoaXMucG9ydGFsQWRhcHRlcih0aGlzLCBuZXdPcmlnaW4pO1xuICAgICAgfVxuICAgICAgdGhpcy5fb3JpZ2luUGFyZW50ID0gbmV3T3JpZ2luO1xuICAgIH1cblxuICAgIC8qKiBVcGRhdGVzIHZhcmlvdXMgYmVoYXZpb3JzIHRvIGFwcGx5IHRoZSBsYXRlc3Qgb3ZlcmxheSBvcHRpb25zICovXG4gICAgdXBkYXRlT3ZlcmxheSgpIHtcbiAgICAgIC8vIFVwZGF0ZSBiYWNrZHJvcCBpbmVydG5lc3NcbiAgICAgIGlmICh0aGlzLl93aXRoSW5lcnRCYWNrZHJvcCkge1xuICAgICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIuc2V0QmFja2Ryb3BJbmVydG5lc3ModHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIuc2V0QmFja2Ryb3BJbmVydG5lc3MoZmFsc2UpO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIGNsaWNrIG91dHNpZGUgY29udHJvbGxlclxuICAgICAgaWYgKHRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUgJiYgIXRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5pc0xpc3RlbmluZygpKSB7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5saXN0ZW5Gb3JDbGlja3NPdXRzaWRlT2YodGhpcyk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlICYmIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5pc0xpc3RlbmluZygpKSB7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5zdG9wTGlzdGVuaW5nKCk7XG4gICAgICB9XG4gICAgICAvLyBVcGRhdGUgZm9jdXMgdHJhcCBjb250cm9sbGVyXG4gICAgICBpZiAodGhpcy5fd2l0aEZvY3VzVHJhcCAmJiB0aGlzLm9wZW5lZCAmJiAhdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLmlzVHJhcHBpbmdGb2N1cygpKSB7XG4gICAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci50cmFwRm9jdXModGhpcy5fZm9jdXNUcmFwVGFyZ2V0LCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX3dpdGhGb2N1c1RyYXAgJiYgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLmlzVHJhcHBpbmdGb2N1cygpKSB7XG4gICAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5yZWxlYXNlRm9jdXModHJ1ZSk7XG4gICAgICB9XG4gICAgICAvLyBVcGRhdGUgYmFja2Ryb3AgY29udHJvbGxlclxuICAgICAgaWYgKHRoaXMuX3dpdGhEaW1CYWNrZHJvcCkge1xuICAgICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIuc2hvd0JhY2tkcm9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIuaGlkZUJhY2tkcm9wKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlKSB7XG4gICAgICAgIGlmICh0aGlzLl9vcmlnaW5QYXJlbnQgJiYgdGhpcy5fb3JpZ2luUGFyZW50ICE9PSB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSkge1xuICAgICAgICAgIHRoaXMucG9ydGFsQWRhcHRlcih0aGlzLCB0aGlzLl9vcmlnaW5QYXJlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgb3BlbigpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignT3BlbiBtZXRob2Qgbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2xvc2UoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nsb3NlIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnkpIHtcbiAgICAgIHN1cGVyKGFyZ3MpO1xuICAgICAgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93biA9IHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKFxuICAgICAgY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVNYXA8YW55PiB8IE1hcDxQcm9wZXJ0eUtleSwgdW5rbm93bj5cbiAgICApOiB2b2lkIHtcbiAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICB0aGlzLl9vcmlnaW5QYXJlbnQgPSB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUNsb3NlT25DbGlja091dHNpZGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgICAgaWYgKHRoaXMuX2Nsb3NlT25Fc2NhcGUpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24pO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyIGluIHRoZSBldmVudCB0aGUgb3ZlcmxheSBlbGVtZW50IHdhcyBwb3J0YWxlZC5cbiAgICAgIGlmICh0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5saXN0ZW5Gb3JDbGlja3NPdXRzaWRlT2YodGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLnJlbGVhc2VGb2N1cyh0cnVlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT3ZlcmxheUVsZW1lbnQgYXMgQ29uc3RydWN0b3I8T3ZlcmxheUludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7ZGlzcGxheTpibG9jaztwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMH1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1mdWxsLXdpZHRoOm1heC1jb250ZW50Oy0tY29udHJvbC13aWR0aDp1bnNldDstLWNvbnRyb2wtbWluLXdpZHRoOjI0MHB4Oy0tY29udHJvbC1tYXgtd2lkdGg6dmFyKC0tY29udHJvbC13aWR0aCk7LS1jb250cm9sLW1hcmdpbi15OnZhcigtLW10ZS1zcGFjZS1zbSk7LS1jb250cm9sLW1hcmdpbi14OnZhcigtLW10ZS1zcGFjZS1zbSk7LS1jb250cm9sLWRlc2NyaXB0b3ItbWFyZ2luOnZhcigtLW10ZS1zcGFjZS1zbSk7LS1sYWJlbC13aWR0aDp2YXIoLS1jb250cm9sLXdpZHRoKTstLWxhYmVsLW1pbi13aWR0aDp2YXIoLS1jb250cm9sLW1pbi13aWR0aCk7LS1sYWJlbC1tYXgtd2lkdGg6dmFyKC0tY29udHJvbC1tYXgtd2lkdGgpOy0tbGFiZWwtbWFyZ2luLXk6dmFyKC0tbXRlLXNwYWNlLXhzKTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDp2YXIoLS1mdWxsLXdpZHRoKX0uZ3JpZC1jb250YWluZXJ7ZGlzcGxheTppbmxpbmUtZ3JpZDtncmlkLXRlbXBsYXRlLWFyZWFzOlwibGFiZWxcIiBcImNvbnRyb2xcIjtncmlkLXRlbXBsYXRlLXJvd3M6MWZyIG1pbm1heCgwLDEwMCUpO3dpZHRoOmluaGVyaXR9Omhvc3QoW3dpdGhGdWxsV2lkdGhdKXstLWZ1bGwtd2lkdGg6MTAwJTstLWNvbnRyb2wtd2lkdGg6MTAwJX06aG9zdChbd2l0aG91dE1hcmdpbl0pey0tY29udHJvbC1tYXJnaW4teTowcHh9Omhvc3QoW3dpdGhvdXRNYXJnaW5dKSAubGFiZWwtY29udGFpbmVyLmhhcy1jb250ZW50e21hcmdpbi1ib3R0b206dmFyKC0tY29udHJvbC1kZXNjcmlwdG9yLW1hcmdpbil9LmxhYmVsLWNvbnRhaW5lcntkaXNwbGF5Om5vbmU7Z3JpZC1hcmVhOmxhYmVsO21heC13aWR0aDp2YXIoLS1sYWJlbC1tYXgtd2lkdGgpO21pbi13aWR0aDp2YXIoLS1sYWJlbC1taW4td2lkdGgpO3dpZHRoOnZhcigtLWxhYmVsLXdpZHRoKX0ubGFiZWwtY29udGFpbmVyLmhhcy1jb250ZW50e2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDp2YXIoLS1sYWJlbC1tYXJnaW4teSl9LmxhYmVsLWNvbnRhaW5lcjpub3QoLmhhcy1jb250ZW50KXttYXJnaW46MCFpbXBvcnRhbnR9LmNvbnRleHR7Z3JpZC1hcmVhOmNvbnRleHR9LmRlc2NyaXB0aW9uLC5lcnJvciwuaGludCwubGFiZWx7ZGlzcGxheTpibG9ja30uZGVzY3JpcHRpb24gbXRlLWRlc2NyaXB0aW9uLC5kZXNjcmlwdGlvbiBtdGUtZGVzY3JpcHRpb24tdGV4dCwubGFiZWwgbXRlLWxhYmVsLC5sYWJlbCBtdGUtbGFiZWwtdGV4dCw6aG9zdCA6OnNsb3R0ZWQobXRlLWRlc2NyaXB0aW9uLXRleHRbc2xvdD1kZXNjcmlwdGlvbl0pLDpob3N0IDo6c2xvdHRlZChtdGUtZGVzY3JpcHRpb25bc2xvdD1kZXNjcmlwdGlvbl0pLDpob3N0IDo6c2xvdHRlZChtdGUtbGFiZWwtdGV4dFtzbG90PWxhYmVsXSksOmhvc3QgOjpzbG90dGVkKG10ZS1sYWJlbFtzbG90PWxhYmVsXSl7bWFyZ2luOjB9Omhvc3QoW2xhYmVsUG9zaXRpb249YmVmb3JlXSl7LS1sYWJlbC13aWR0aDptYXgtY29udGVudDstLWxhYmVsLW1pbi13aWR0aDptYXgtY29udGVudH06aG9zdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKSAuZ3JpZC1jb250YWluZXJ7Z3JpZC10ZW1wbGF0ZS1hcmVhczpcImxhYmVsIGNvbnRyb2xcIjtncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWlubWF4KGF1dG8sdmFyKC0tbGFiZWwtd2lkdGgpKSBtaW5tYXgoYXV0byx2YXIoLS1jb250cm9sLXdpZHRoKSl9Omhvc3QoW2xhYmVsUG9zaXRpb249YmVmb3JlXSkgLmxhYmVsLWNvbnRhaW5lcnttYXJnaW4tYm90dG9tOnZhcigtLWNvbnRyb2wtbWFyZ2luLXkpO21hcmdpbi1yaWdodDp2YXIoLS1jb250cm9sLW1hcmdpbi14KTttYXJnaW4tdG9wOmNhbGModmFyKC0tY29udHJvbC1tYXJnaW4teSkgKyB2YXIoLS1sYWJlbC1iZWZvcmUtb2Zmc2V0KSl9LmRlc2NyaXB0aW9uLC5lcnJvciwuaGludHttaW4td2lkdGg6MTAwJTt3aWR0aDotbW96LW1pbi1jb250ZW50O3dpZHRoOm1pbi1jb250ZW50fS5jb250cm9sLW91dGVyLWNvbnRhaW5lcntncmlkLWFyZWE6Y29udHJvbDttYXJnaW4tdG9wOnZhcigtLWNvbnRyb2wtbWFyZ2luLXkpO21heC13aWR0aDp2YXIoLS1jb250cm9sLW1heC13aWR0aCk7bWluLXdpZHRoOnZhcigtLWNvbnRyb2wtbWluLXdpZHRoKTt3aWR0aDp2YXIoLS1jb250cm9sLXdpZHRoKX06aG9zdCg6bm90KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pKSAuY29udHJvbC1vdXRlci1jb250YWluZXIuaGFzLWxhYmVsLWNvbnRlbnR7bWFyZ2luLXRvcDpjYWxjKHZhcigtLWNvbnRyb2wtbWFyZ2luLXkpLzIpfS5jb250cm9sLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21hcmdpbi1ib3R0b206dmFyKC0tY29udHJvbC1tYXJnaW4teSl9LmVycm9yLC5oaW50e2Rpc3BsYXk6bm9uZX0uZXJyb3IuaGFzLWNvbnRlbnQsLmhpbnQuaGFzLWNvbnRlbnR7ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOnZhcigtLWNvbnRyb2wtZGVzY3JpcHRvci1tYXJnaW4pfWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWZvcm0tZmllbGQtaW50ZXJuYWwtcGFkZGluZzp2YXIoLS1tdGUtc3BhY2Utc20pOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXA6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWZvcm0tZmllbGQtcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLW1kKTstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMik7LS1mb3JtLWZpZWxkLWJhY2tncm91bmQ6dmFyKC0tbXRlLXN1cmZhY2UtMik7LS1wcmVwZW5kLWJhY2tncm91bmQ6dmFyKC0tbXRlLWdyZXktMSk7LS1wcmVwZW5kLXBhZGRpbmcteDp2YXIoLS1tdGUtc3BhY2Utc20pOy0tcHJlcGVuZC1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKX06aG9zdChbcmFkaXVzPXNtXSl7LS1mb3JtLWZpZWxkLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14cyl9Omhvc3QoW3JhZGl1cz1sZ10pey0tZm9ybS1maWVsZC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteHhsKX06aG9zdChbc2l6ZT1zbV0pey0tcHJlcGVuZC1wYWRkaW5nLXg6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1wYWRkaW5nOmNhbGModmFyKC0tbXRlLXNwYWNlLXhzKSArIHZhcigtLW10ZS1zcGFjZS14eHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwOmNhbGModmFyKC0tbXRlLXNwYWNlLXhzKSArIHZhcigtLW10ZS1zcGFjZS14eHMpKX06aG9zdChbc2l6ZT1sZ10pey0tcHJlcGVuZC1wYWRkaW5nLXg6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXhzKSk7LS1mb3JtLWZpZWxkLWludGVybmFsLXBhZGRpbmc6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXhzKSk7LS1mb3JtLWZpZWxkLWludGVybmFsLWdhcDpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKX0uZm9ybS1maWVsZHthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZDp2YXIoLS1mb3JtLWZpZWxkLWJhY2tncm91bmQpO2JvcmRlcjoxcHggc29saWQgdmFyKC0tZm9ybS1maWVsZC1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7Z2FwOnZhcigtLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwKTtwb3NpdGlvbjpyZWxhdGl2ZX06aG9zdChbZGlzYWJsZWRdKSAuZm9ybS1maWVsZHtiYWNrZ3JvdW5kOnZhcigtLW10ZS1kaXNhYmxlZC0xKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLW10ZS1kaXNhYmxlZC0xKX0uYXBwZW5kLC5wcmVwZW5ke2FsaWduLWl0ZW1zOmNlbnRlcjthbGlnbi1zZWxmOnN0cmV0Y2g7YmFja2dyb3VuZDp2YXIoLS1wcmVwZW5kLWJhY2tncm91bmQpO2Rpc3BsYXk6bm9uZTtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6MCB2YXIoLS1wcmVwZW5kLXBhZGRpbmcteCl9LnByZXBlbmR7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCB2YXIoLS1wcmVwZW5kLWJvcmRlci1jb2xvcik7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyl9LmFwcGVuZHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkIHZhcigtLXByZXBlbmQtYm9yZGVyLWNvbG9yKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyl9LmFwcGVuZC5oYXMtY29udGVudCwucHJlcGVuZC5oYXMtY29udGVudHtkaXNwbGF5OmZsZXh9LnByZWZpeCwuc3VmZml4e2FsaWduLWl0ZW1zOmNlbnRlcjthbGlnbi1zZWxmOnN0cmV0Y2g7ZGlzcGxheTpmbGV4O2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUpO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnByZWZpeDpub3QoLmhhcy1wcmVwZW5kKXtwYWRkaW5nLWxlZnQ6dmFyKC0tcHJlcGVuZC1wYWRkaW5nLXgpfS5zdWZmaXg6bm90KC5oYXMtYXBwZW5kKXtwYWRkaW5nLXJpZ2h0OnZhcigtLXByZXBlbmQtcGFkZGluZy14KX0uZm9ybS1maWVsZC5mb2N1c2VkOm5vdCguZGlzYWJsZWQpOm5vdChbZGlzYWJsZWRdKTpub3QoOmRpc2FibGVkKTpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCByZ2IodmFyKC0tbXRlLWZvY3VzLXJnYikpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym90dG9tOi0xcHg7Ym94LXNoYWRvdzowIDAgMCAxcHggdmFyKC0tbXRlLWxpZ2h0KTtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jaztsZWZ0Oi0xcHg7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDotMXB4O3RvcDotMXB4O3otaW5kZXg6OX0uZm9ybS1maWVsZC5pbnZhbGlkey0tZm9ybS1maWVsZC1ib3JkZXItY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1iYXNlLXJnYikpfTpob3N0KFt3aXRob3V0Qm9yZGVyXSkgOmlzKC5mb3JtLWZpZWxkLC5wcmVwZW5kLC5hcHBlbmQpey0tZm9ybS1maWVsZC1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9YDsiLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBBY3RpdmVMaW5rT3B0aW9ucyxcbiAgQ29uc3RydWN0b3IsXG4gIE10ZUVsZW1lbnQsXG4gIE10ZUhpc3RvcnlBcGlTZXJ2aWNlLFxuICBVbnN1YnNjcmliZXIsXG4gIGlzTGlua0FjdGl2ZSxcbiAgb25VcGRhdGUsXG59IGZyb20gJy4uLyc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExpbmtJbnRlcmZhY2Uge1xuICBocmVmPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBdXRvQWN0aXZlTGlua0ludGVyZmFjZSB7XG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGxpbmsgaXMgdGhlIGFjdGl2ZSBwYWdlICovXG4gIGFjdGl2ZTogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciBvciBub3QgdGhpcyBsaW5rIHNob3VsZCBhdXRvbWF0aWNhbGx5IHRyeSB0byBkZXRlcm1pbmUgaWYgaXQgaXMgdGhlIGFjdGl2ZSBwYWdlICovXG4gIHdpdGhvdXRBdXRvQWN0aXZlOiBib29sZWFuO1xuXG4gIC8qKiBPcHRpb25zIHRvIHJlZmluZSBob3cgdGhpcyBsaW5rIHdpbGwgZGV0ZXJtaW5lIGlmIGl0IGlzIHRoZSBhY3RpdmUgcGFnZSAqL1xuICBhY3RpdmVMaW5rT3B0aW9ucz86IFBhcnRpYWw8QWN0aXZlTGlua09wdGlvbnM+O1xuXG4gIC8qKiBUaGUgaW50ZXJuYWwgYW5jaG9yIGVsZW1lbnQgZnJvbSB3aGljaCB0byBwdWxsIHRoZSBsb2NhdGlvbiBmb3IgY29tcGFyaXNvbiAqL1xuICBhbmNob3JFbGVtZW50PzogSFRNTEFuY2hvckVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBBdXRvQWN0aXZlTGlua01peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50ICYgTGlua0ludGVyZmFjZT4+KFxuICBzdXBlckNsYXNzOiBUXG4pID0+IHtcbiAgY2xhc3MgQXV0b0FjdGl2ZUxpbmtFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBhY3RpdmUgPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgd2l0aG91dEF1dG9BY3RpdmUgPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgcmVmbGVjdDogdHJ1ZSB9KSBhY3RpdmVMaW5rT3B0aW9ucz86IFBhcnRpYWw8QWN0aXZlTGlua09wdGlvbnM+O1xuXG4gICAgYW5jaG9yRWxlbWVudD86IEhUTUxBbmNob3JFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB1bnN1YjogVW5zdWJzY3JpYmVyO1xuXG4gICAgQG9uVXBkYXRlKCdhY3RpdmUnLCB7IHdhaXRVbnRpbEZpcnN0VXBkYXRlOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBoYW5kbGVBY3RpdmVMaW5rQ2hhbmdlKCkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudD8uc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAncGFnZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbmNob3JFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBvblVwZGF0ZShbJ2hyZWYnLCAnaXJlZicsICd3aXRoQXV0b0FjdGl2ZSddLCB7IHdhaXRVbnRpbEZpcnN0VXBkYXRlOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBoYW5kbGVBdXRvQWN0aXZlQ2hhbmdlKCkge1xuICAgICAgaWYgKHRoaXMuaHJlZiB8fCB0aGlzWydpcmVmJ10pIHtcbiAgICAgICAgaWYgKHRoaXMud2l0aG91dEF1dG9BY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFkZExpc3RlbmVyKCk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVVcmxDaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlQXV0b0FjdGl2ZUNoYW5nZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkTGlzdGVuZXIoKSB7XG4gICAgICBpZiAoIXRoaXMudW5zdWIpIHtcbiAgICAgICAgdGhpcy51bnN1YiA9IE10ZUhpc3RvcnlBcGlTZXJ2aWNlLnN0YXRlQ2hhbmdlcygpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVVcmxDaGFuZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgIHRoaXMudW5zdWI/LigpO1xuICAgICAgdGhpcy51bnN1YiA9IG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVVcmxDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGlzTGlua0FjdGl2ZShcbiAgICAgICAgdGhpcy5hbmNob3JFbGVtZW50Py5ocmVmLFxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgdGhpcy5hY3RpdmVMaW5rT3B0aW9uc1xuICAgICAgKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBBdXRvQWN0aXZlTGlua0VsZW1lbnQgYXMgQ29uc3RydWN0b3I8QXV0b0FjdGl2ZUxpbmtJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciwgTXRlRWxlbWVudCwgU2xvdENvbnRyb2xsZXIgfSBmcm9tICcuLic7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNsb3RPYnNlcnZlckludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBQcm9wIHVzZWQgdG8gZGVjbGFyZSB3aGljaCBzbG90cyBhcmUgYmVpbmcgdXNlZCBkdXJpbmcgU1NSIHRvIG1ha2UgdGhlbSB2aXNpYmxlIGluIGNlcnRhaW4gZWRnZS1jYXNlcy5cbiAgICovXG4gIHNzclNsb3RzOiBzdHJpbmc7XG5cbiAgc2xvdENvbnRyb2xsZXI6IFNsb3RDb250cm9sbGVyO1xuXG4gIGhhc1Nsb3Q6IChzbG90OiBzdHJpbmcsIG9yVmFsdWU/OiBhbnkpID0+IGJvb2xlYW47XG5cbiAgc3NyU2xvdENoZWNrOiAoc2xvdHM6IHN0cmluZykgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFNsb3RPYnNlcnZlck1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBTbG90T2JzZXJ2ZXJFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogUHJvcCB1c2VkIHRvIGRlY2xhcmUgd2hpY2ggc2xvdHMgYXJlIGJlaW5nIHVzZWQgZHVyaW5nIFNTUiB0byBtYWtlIHRoZW0gdmlzaWJsZSBpbiBjZXJ0YWluIGVkZ2UtY2FzZXMuXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KVxuICAgIHNldCBzc3JTbG90cyh2YWw6IHN0cmluZykge1xuICAgICAgbGV0IG9sZFZhbCA9IHRoaXMuX3NzclNsb3RzO1xuICAgICAgdGhpcy5fc3NyU2xvdHMgPSB2YWw7XG4gICAgICAvLyBQYXJzZSBhbmQgY2FjaGUgc3NyIHNsb3Qgc2V0XG4gICAgICBjb25zdCBzbG90cyA9ICh0aGlzLl9zc3JTbG90cyA/PyAnJylcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAubWFwKChzbG90KSA9PiBzbG90LnRyaW0oKSk7XG4gICAgICB0aGlzLl9zc3JTbG90U2V0ID0gbmV3IFNldDxzdHJpbmc+KHNsb3RzKTtcbiAgICAgIC8vIE5vcm1hbCB1cGRhdGVcbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnc3NyU2xvdHMnLCBvbGRWYWwpO1xuICAgIH1cbiAgICBnZXQgc3NyU2xvdHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3NyU2xvdHM7XG4gICAgfVxuICAgIHByaXZhdGUgX3NzclNsb3RzPzogc3RyaW5nO1xuXG4gICAgLyoqIEBpZ25vcmUgKi9cbiAgICBfc3NyU2xvdFNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgc2xvdENvbnRyb2xsZXIgPSBuZXcgU2xvdENvbnRyb2xsZXIodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHNsb3QgaGFzIGNvbnRlbnQsIG9yIGlmIGl0IHdhcyBzcGVjaWZpZWQgYXMgZXhpc3RpbmcgZHVyaW5nIFNTUi5cbiAgICAgKiBPbmNlIGNhbGxlZCwgdGhlIGNvbXBvbmVudCB3aWxsIG5vdyBhdXRvbWF0aWNhbGx5IHVwZGF0ZSBpZiB0aGUgY29udGVudHMgb2YgdGhpcyBzbG90IGNoYW5nZS5cbiAgICAgKi9cbiAgICBoYXNTbG90KHNsb3Q6IHN0cmluZywgb3JWYWx1ZT86IGFueSk6IGJvb2xlYW4ge1xuICAgICAgdGhpcy5zbG90Q29udHJvbGxlci51cGRhdGVPbkNoYW5nZShzbG90KTtcbiAgICAgIC8vIFRPRE8ocmVlY2UpOiByZWNvbnNpZGVyIHdoZW4gYSBzb2x1dGlvbiBleGlzdHMgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8xNDM0XG4gICAgICAvLyBXZSBoYXZlIHRvIGFzc3VtZSBhbGlnbm1lbnQgd2l0aCBzc3JTbG90Q2hlY2sgdW50aWwgdGhlIGZpcnN0IHVwZGF0ZSBoZXJlIG90aGVyd2lzZSBwYXJ0IG1pc21hdGNoZXMgY2FuIG9jY3VyXG4gICAgICBpZiAoIXRoaXMuX19maXJzdFVwZGF0ZWQpIHtcbiAgICAgICAgcmV0dXJuIG9yVmFsdWUgfHwgdGhpcy5zc3JTbG90Q2hlY2soc2xvdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb3JWYWx1ZSB8fCB0aGlzLnNsb3RDb250cm9sbGVyLmNoZWNrKHNsb3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBXaWxsIHJldHVybiB0cnVlIGlmIHRoZSByZXF1ZXN0ZWQgc2xvdCB3YXMgc3BlY2lmaWVkIGluIHRoZSBsaXN0IG9mIGBzc3Itc2xvdHNgLiAqL1xuICAgIHNzclNsb3RDaGVjayhzbG90OiBzdHJpbmcpIHtcbiAgICAgIGlmICh0aGlzLl9fZmlyc3RVcGRhdGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zc3JTbG90U2V0LmhhcyhzbG90KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFNsb3RPYnNlcnZlckVsZW1lbnQgYXMgQ29uc3RydWN0b3I8U2xvdE9ic2VydmVySW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IEZvcm1Db250cm9sTWl4aW4sIEZvcm1Db250cm9sSW50ZXJmYWNlIH0gZnJvbSAnQG9wZW4td2MvZm9ybS1jb250cm9sJztcbmltcG9ydCB7IHByb3BlcnR5LCBxdWVyeSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIENvbnN0cnVjdG9yLFxuICBEaXNhYmxlZE1peGluLFxuICBUYWJJbmRleE1peGluLFxuICBNdGVFbGVtZW50LFxuICBpbm5lcklucHV0VmFsaWRhdG9ycyxcbiAgVGFiSW5kZXhJbnRlcmZhY2UsXG4gIERpc2FibGVkSW50ZXJmYWNlLFxuICBvblVwZGF0ZSxcbiAgZXZlbnRFbWl0dGVyLFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJy4uJztcblxuLy8gUmVxdWlyZWQgcG9seWZpbGwgZm9yIG5vd1xuaW1wb3J0ICcuLi8uLi9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9pbmRleCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXRlQ2hlY2tib3hDaGFuZ2VEZXRhaWwge1xuICAvKiogVGhlIHZhbHVlIG9mIHRoZSBjb250cm9sIGNoYW5nZWQgKi9cbiAgdmFsdWU6IHN0cmluZztcblxuICAvKiogVGhlIG5hbWUgb2YgdGhlIGNvbnRyb2wgY2hhbmdlZCAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoZSBlbGVtZW50IGlzIGNoZWNrZWQgKi9cbiAgY2hlY2tlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGVja2JveEludGVyZmFjZSB7XG4gIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSBlbGVtZW50ICovXG4gIGxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKiBUaGUgZXJyb3IgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgZXJyb3I/OiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBoaW50IHRleHQgZm9yIHRoZSBlbGVtZW50ICovXG4gIGhpbnQ/OiBzdHJpbmc7XG5cbiAgLyoqIEFuIGFyaWEgbGFiZWwgdGhhdCB3aWxsIGJlIHByb3ZpZGVkIHRvIHRoZSBpbnB1dCBlbGVtZW50ICovXG4gIGFyaWFMYWJlbD86IHN0cmluZztcblxuICAvKiogVGhlIG5hbWUgZm9yIHRoZSBlbGVtZW50LiBVc2VkIHdoZW4gc3VibWl0dGluZyBhIGZvcm0gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudCAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSB2YWx1ZSBmb3IgdGhlIGVsZW1lbnQuIFVzZWQgYXMgdGhlIHZhbHVlIGZvciBhIGVsZW1lbnQgd2hlbiBzdWJtaXR0aW5nIGEgZm9ybSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50ICAqL1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbHRlcnMgdGhlIGJlaGF2aW9yIG9mIHRoaXMgY29udHJvbC4gV2hlbiBcImNvbnRyb2xsZWRcIiwgYSBjb250cm9scyB2YWx1ZSBpcyBkcml2ZW4gZXhwbGljaXRseSBieSBleHRlcm5hbCBzdGF0ZVxuICAgKiB2aWEgdGhlIGB2YWx1ZWAgcHJvcC4gQ2hhbmdlIGV2ZW50cyB3aWxsIGZpcmUgYnV0IHRoZSBjb250cm9sIHZhbHVlIHdpbGwgbm90IGNoYW5nZSB1bnRpbCBpdCBpcyBhbHRlcmVkIGRpcmVjdGx5LlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBjb250cm9sbGVkOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBiZSBjaGVja2VkIGJ5IGRlZmF1bHQuIFVzZWZ1bCBmb3Igd2hlbiByZXNldHRpbmcgZm9ybSBjb250cm9scyBvciB1c2luZyBhIHN0YXRlbGVzcyBjb21wb25lbnQgKi9cbiAgZGVmYXVsdENoZWNrZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgY2hlY2tlZCBvciBub3QgKi9cbiAgY2hlY2tlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgcmVhZG9ubHkgKi9cbiAgcmVhZG9ubHk6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHNlbGVjdGluZyB0aGUgZWxlbWVudCBpcyByZXF1aXJlZCBvciBub3QgKi9cbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFJlbmRlcnMgdGhlIHJlcXVpcmVkIGluZGljYXRvciBmb3IgdGhpcyBpbnB1dHMgbGFiZWwgd2l0aG91dCBlbmFibGluZyBuYXRpdmUgYHJlcXVpcmVkYCB2YWxpZGF0aW9uICovXG4gIHNob3dSZXF1aXJlZDogYm9vbGVhbjtcblxuICAvKiogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBpbnB1dCBibHVycyAgKi9cbiAgaGFuZGxlQmx1cigpOiB2b2lkO1xuXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGlucHV0IGlzIGZvY3VzZWQgb24gICovXG4gIGhhbmRsZUZvY3VzKCk6IHZvaWQ7XG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IGNoYW5nZXMgICovXG4gIGhhbmRsZUNoYW5nZSgpOiB2b2lkO1xuXG4gIC8qKiBBIHNldCBvZiBhdHRyaWJ1dGVzIHRvIGJlIGZvcndhcmRlZCB0byBhbiBlbGVtZW50IHdpdGhpbiByZW5kZXIgYW5kIHJlbW92ZWQgZnJvbSB0aGUgZWxlbWVudCAqL1xuICBpbmhlcml0ZWRBdHRyaWJ1dGVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xufVxuXG5leHBvcnQgY29uc3QgQ2hlY2tib3hNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgQ2hlY2tib3hFbGVtZW50IGV4dGVuZHMgVGFiSW5kZXhNaXhpbihGb3JtQ29udHJvbE1peGluKERpc2FibGVkTWl4aW4oc3VwZXJDbGFzcykpLCB7XG4gICAgaW5pdGlhbFRhYkluZGV4OiAwLFxuICB9KSB7XG4gICAgaW5oZXJpdGVkQXR0cmlidXRlczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gICAgLyoqIEBpZ25vcmUgKi9cbiAgICBzdGF0aWMgZm9ybUNvbnRyb2xWYWxpZGF0b3JzID0gaW5uZXJJbnB1dFZhbGlkYXRvcnM7XG5cbiAgICAvKiogVGhlIGxhYmVsIGZvciB0aGUgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSgpIGxhYmVsPzogc3RyaW5nO1xuXG4gICAgLyoqIFRoZSBlcnJvciB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSgpIGVycm9yPzogc3RyaW5nO1xuXG4gICAgLyoqIFRoZSBoaW50IHRleHQgZm9yIHRoZSBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KCkgaGludD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEFsdGVycyB0aGUgYmVoYXZpb3Igb2YgdGhpcyBjb250cm9sLiBXaGVuIFwiY29udHJvbGxlZFwiLCBhIGNvbnRyb2xzIHZhbHVlIGlzIGRyaXZlbiBleHBsaWNpdGx5IGJ5IGV4dGVybmFsIHN0YXRlXG4gICAgICogdmlhIHRoZSBgdmFsdWVgIHByb3AuIENoYW5nZSBldmVudHMgd2lsbCBmaXJlIGJ1dCB0aGUgY29udHJvbCB2YWx1ZSB3aWxsIG5vdCBjaGFuZ2UgdW50aWwgaXQgaXMgYWx0ZXJlZCBkaXJlY3RseS5cbiAgICAgKiBAZXhwZXJpbWVudGFsXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBjb250cm9sbGVkOiBib29sZWFuO1xuXG4gICAgLyoqIEFuIGFyaWEgbGFiZWwgdGhhdCB3aWxsIGJlIHByb3ZpZGVkIHRvIHRoZSBpbnB1dCBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiAnYXJpYS1sYWJlbCcsIHJlZmxlY3Q6IHRydWUgfSkgYXJpYUxhYmVsOiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIG5hbWUgZm9yIHRoZSBlbGVtZW50LiBVc2VkIHdoZW4gc3VibWl0dGluZyBhIGZvcm0gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbmFtZTogc3RyaW5nO1xuXG4gICAgLyoqIFRoZSB2YWx1ZSBmb3IgdGhlIGVsZW1lbnQuIFVzZWQgYXMgdGhlIHZhbHVlIGZvciBhIGVsZW1lbnQgd2hlbiBzdWJtaXR0aW5nIGEgZm9ybSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50ICAqL1xuICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgdmFsdWU/ID0gJ29uJztcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBiZSBjaGVja2VkIGJ5IGRlZmF1bHQuIFVzZWZ1bCBmb3Igd2hlbiByZXNldHRpbmcgZm9ybSBjb250cm9scyBvciB1c2luZyBhIHN0YXRlbGVzcyBjb21wb25lbnQgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGRlZmF1bHRDaGVja2VkID0gZmFsc2U7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBpcyBjaGVja2VkIG9yIG5vdCAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlYWRvbmx5ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSByZWFkb25seSA9IGZhbHNlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIHNlbGVjdGluZyB0aGUgZWxlbWVudCBpcyByZXF1aXJlZCBvciBub3QgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHJlcXVpcmVkID0gZmFsc2U7XG5cbiAgICAvKiogUmVuZGVycyB0aGUgcmVxdWlyZWQgaW5kaWNhdG9yIGZvciB0aGlzIGlucHV0cyBsYWJlbCB3aXRob3V0IGVuYWJsaW5nIG5hdGl2ZSBgcmVxdWlyZWRgIHZhbGlkYXRpb24gKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHNob3dSZXF1aXJlZD87XG5cbiAgICAvKiogVGhlIGlucHV0IGVsZW1lbnQgdXNlZCB3aXRoaW4gdGhlIGZvcm0gY29udHJvbCBtaXhpbiAqL1xuICAgIEBxdWVyeSgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykgdmFsaWRhdGlvblRhcmdldDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhlIGVsZW1lbnQncyBzdGF0ZSBpcyBhYm91dCB0byBjaGFuZ2UuIElmIGRlZmF1bHQgaXMgcHJldmVudGVkLCBpdCB3aWxsIHJldmVydCB0aGUgY2hlY2tib3ggdG8gaXQncyBvcmlnaW5hbCBjaGVja2VkIHN0YXRlIHByaW9yIHRvIHNlbGVjdGluZy4gKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX3dpbGxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNdGVDaGVja2JveENoYW5nZURldGFpbD47XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoZSBlbGVtZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQuICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkNoYW5nZTogRXZlbnRFbWl0dGVyPE10ZUNoZWNrYm94Q2hhbmdlRGV0YWlsPjtcblxuICAgIC8qKiBFbWl0cyB3aGVuIHRoaXMgZWxlbWVudCBpcyBmb2N1c2VkICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkZvY3VzOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogRW1pdHMgd2hlbiB0aGlzIGVsZW1lbnQgbG9zZXMgZm9jdXMgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uQmx1cjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgQG9uVXBkYXRlKCdkZWZhdWx0Q2hlY2tlZCcpXG4gICAgcHJvdGVjdGVkIG9uRGVmYXVsdENoZWNrZWRDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5jb250cm9sbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQgJiYgdGhpcy5kZWZhdWx0Q2hlY2tlZCAmJiAhdGhpcy5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG9uVXBkYXRlKFsndmFsdWUnLCAnY2hlY2tlZCddLCB7IG9uOiAnYm90aCcgfSlcbiAgICBwcm90ZWN0ZWQgdXBkYXRlVmFsdWUoKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIEBvblVwZGF0ZSgnYXJpYUxhYmVsJywgeyBvbjogJ2JvdGgnIH0pXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUxhYmVsKCkge1xuICAgICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0ge1xuICAgICAgICAuLi50aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMsXG4gICAgICAgIGFyaWFMYWJlbDogdGhpcy5hcmlhTGFiZWwsXG4gICAgICB9O1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiAtLSBGb3JtIGNvbnRyb2wgdmFsaWRhdGlvbiBvdmVycmlkZXMgLS0gKi9cbiAgICBzaG91bGRGb3JtVmFsdWVVcGRhdGUoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja2VkO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldEZvcm1Db250cm9sKCk6IHZvaWQge1xuICAgICAgc3VwZXIucmVzZXRGb3JtQ29udHJvbD8uKCk7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuXG4gICAgICBpZiAodGhpcy5jb250cm9sbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5kZWZhdWx0Q2hlY2tlZDtcbiAgICB9XG5cbiAgICB2YWxpZGl0eUNhbGxiYWNrKCk6IHN0cmluZyB8IHZvaWQge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3IgfHwgdGhpcy52YWxpZGF0aW9uVGFyZ2V0Py52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICB9XG5cbiAgICAvKiogLS0gVGFiSW5kZXggb3ZlcnJpZGVzIC0tICovXG4gICAgZ2V0VGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblRhcmdldD8uZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIH1cblxuICAgIHNldFRhYkluZGV4QWRhcHRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgIHRoaXMudmFsaWRhdGlvblRhcmdldD8uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZW1vdmVUYWJJbmRleEFkYXB0ZXIoKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgIHRoaXMudmFsaWRhdGlvblRhcmdldD8ucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub3RQcmV2ZW50ZWQgPSB0aGlzLl93aWxsQ2hhbmdlLmVtaXQoXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgY2hlY2tlZDogIXRoaXMuY2hlY2tlZCxcbiAgICAgICAgfSxcbiAgICAgICAgeyBjYW5jZWxhYmxlOiB0cnVlIH1cbiAgICAgICk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRyb2xsZWQpIHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIGNoZWNrZWQ6ICF0aGlzLmNoZWNrZWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobm90UHJldmVudGVkKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBjaGVja2VkOiB0aGlzLmNoZWNrZWQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9vbkJsdXIuZW1pdCgpO1xuICAgIH07XG5cbiAgICBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICAgIHRoaXMuX29uRm9jdXMuZW1pdCgpO1xuICAgIH07XG5cbiAgICAvKiogQ2xpY2tzIHRoZSBlbGVtZW50ICovXG4gICAgcHVibGljIGNsaWNrKCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0LmNsaWNrKCk7XG4gICAgfVxuXG4gICAgLyoqIEZvY3VzZXMgdGhlIGVsZW1lbnQgKi9cbiAgICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKiogQmx1cnMgdGhlIGVsZW1lbnQgKi9cbiAgICBwdWJsaWMgYmx1cigpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblRhcmdldC5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIENoZWNrYm94RWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxcbiAgICBDaGVja2JveEludGVyZmFjZSAmIFRhYkluZGV4SW50ZXJmYWNlICYgRm9ybUNvbnRyb2xJbnRlcmZhY2UgJiBEaXNhYmxlZEludGVyZmFjZVxuICA+ICZcbiAgICBUO1xufTtcbiIsICIvKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyB0aGUgV2Vha01hcHMgdXNlZCB0aHJvdWdob3V0IHRoaXMgcHJvamVjdC4gVGhlIFdlYWtNYXBzIGV4aXN0IHRvIHRpZVxuICogb2JqZWN0cyB0b2dldGhlciB3aXRob3V0IHBvbGx1dGluZyB0aGUgb2JqZWN0cyB0aGVtc2VsdmVzIHdpdGggcmVmZXJlbmNlcyB3ZSdkIHJhdGhlciBrZWVwXG4gKiBoaWRkZW4uIFRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byB3b3JrIGFzIHRyYW5zcGFyZW50bHkgYXMgcG9zc2libGUuXG4gKi9cbmltcG9ydCB7IElFbGVtZW50SW50ZXJuYWxzLCBJQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGl0IGlzIGF0dGFjaGVkIHRvICovXG5leHBvcnQgY29uc3QgcmVmTWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIElDdXN0b21FbGVtZW50PigpO1xuXG4vKiogVXNlZSBhbiBFbGVtZW50c0ludGVybmFscyBpbnN0YW5jZSB0byBnZXQgaXRzIFZhbGlkaXR5U3RhdGUgb2JqZWN0ICovXG5leHBvcnQgY29uc3QgdmFsaWRpdHlNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgVmFsaWRpdHlTdGF0ZT4oKTtcblxuLyoqIFVzZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBpdHMgYXR0YWNoZWQgaW5wdXRbdHlwZT1cImhpZGRlblwiXSAqL1xuZXhwb3J0IGNvbnN0IGhpZGRlbklucHV0TWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIEhUTUxJbnB1dEVsZW1lbnRbXT4oKTtcblxuLyoqIFVzZSBhIGN1c3RvbSBlbGVtZW50IHRvIGdldCBpdHMgYXR0YWNoZWQgRWxlbWVudEludGVybmFscyBpbnN0YW5jZSAqL1xuZXhwb3J0IGNvbnN0IGludGVybmFsc01hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBJRWxlbWVudEludGVybmFscz4oKTtcblxuLyoqIFVzZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCB0aGUgYXR0YWNoZWQgdmFsaWRhdGlvbiBtZXNzYWdlICovXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvbk1lc3NhZ2VNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgc3RyaW5nPigpO1xuXG4vKiogVXNlIGEgZm9ybSBlbGVtZW50IHRvIGdldCBhdHRhY2hlZCBjdXN0b20gZWxlbWVudHMgYW5kIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2VzICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuZXhwb3J0IGNvbnN0IGZvcm1zTWFwID0gbmV3IFdlYWtNYXA8SFRNTEZvcm1FbGVtZW50LCBPYmplY3Q+KCk7XG5cbi8qKiBVc2UgYSBjdXN0b20gZWxlbWVudCBvciBvdGhlciBvYmplY3QgdG8gZ2V0IHRoZWlyIGFzc29jaWF0ZWQgTXV0YXRpb25PYnNlcnZlcnMgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dIb3N0c01hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBNdXRhdGlvbk9ic2VydmVyPigpO1xuXG4vKiogVXNlIGEgZm9ybSBlbGVtZW50IHRvIGdldCBhIHNldCBvZiBhdHRhY2hlZCBjdXN0b20gZWxlbWVudHMgKi9cbmV4cG9ydCBjb25zdCBmb3JtRWxlbWVudHNNYXAgPSBuZXcgV2Vha01hcDxIVE1MRm9ybUVsZW1lbnQsIFNldDxJQ3VzdG9tRWxlbWVudD4+KCk7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgYSByZWZlcmVuY2UgdG8gYW4gZWxlbWVudCdzIHZhbHVlICovXG5leHBvcnQgY29uc3QgcmVmVmFsdWVNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgYW55PigpO1xuXG4vKiogRWxlbWVudHMgdGhhdCBuZWVkIHRvIGJlIHVwZ3JhZGVkIG9uY2UgYWRkZWQgdG8gdGhlIERPTSAqL1xuZXhwb3J0IGNvbnN0IHVwZ3JhZGVNYXAgPSBuZXcgV2Vha01hcDxFbGVtZW50LCBJRWxlbWVudEludGVybmFscz4oKTtcblxuLyoqIFNhdmUgcmVmZXJlbmNlcyB0byBzaGFkb3cgcm9vdHMgZm9yIGluY2x1c2lvbiBpbiBpbnRlcm5hbHMgaW5zdGFuY2UgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dSb290TWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIFNoYWRvd1Jvb3Q+KCk7XG5cbi8qKiBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBpbnRlcm5hbHMnIHZhbGlkYXRpb24gYW5jaG9yICovXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvbkFuY2hvck1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBIVE1MRWxlbWVudD4oKTtcblxuLyoqIE1hcCBEb2N1bWVudEZyYWdtZW50cyB0byB0aGVpciBNdXRhdGlvbk9ic2VydmVycyBzbyB3ZSBjYW4gZGlzY29ubmVjdCBvbmNlIGVsZW1lbnRzIGFyZSByZW1vdmVkICovXG5leHBvcnQgY29uc3QgZG9jdW1lbnRGcmFnbWVudE1hcCA9IG5ldyBXZWFrTWFwPERvY3VtZW50RnJhZ21lbnQsIE11dGF0aW9uT2JzZXJ2ZXI+KCk7XG5cbi8qKiBXaGV0aGVyIGNvbm5lY3RlZENhbGxiYWNrIGhhcyBhbHJlYWR5IGJlZW4gY2FsbGVkLiAqL1xuZXhwb3J0IGNvbnN0IGNvbm5lY3RlZENhbGxiYWNrTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIGJvb2xlYW4+KCk7XG5cbi8qKiBTYXZlIGEgcmVmZXJlbmNlIHRvIHZhbGlkaXR5IHN0YXRlIGZvciBlbGVtZW50cyB0aGF0IG5lZWQgdG8gdXBncmFkZSBhZnRlciBiZWluZyBjb25uZWN0ZWQgKi9cbmV4cG9ydCBjb25zdCB2YWxpZGl0eVVwZ3JhZGVNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHM+KCk7XG4iLCAiaW1wb3J0IHsgdXBncmFkZU1hcCB9IGZyb20gJy4vbWFwcy5qcyc7XG5pbXBvcnQgeyBJQW9tLCBJRWxlbWVudEludGVybmFscyB9IGZyb20gJy4vdHlwZXMuanMnO1xuXG5leHBvcnQgY29uc3QgYW9tOiBJQW9tID0ge1xuICBhcmlhQXRvbWljOiAnYXJpYS1hdG9taWMnLFxuICBhcmlhQXV0b0NvbXBsZXRlOiAnYXJpYS1hdXRvY29tcGxldGUnLFxuICBhcmlhQnVzeTogJ2FyaWEtYnVzeScsXG4gIGFyaWFDaGVja2VkOiAnYXJpYS1jaGVja2VkJyxcbiAgYXJpYUNvbENvdW50OiAnYXJpYS1jb2xjb3VudCcsXG4gIGFyaWFDb2xJbmRleDogJ2FyaWEtY29saW5kZXgnLFxuICBhcmlhQ29sSW5kZXhUZXh0OiAnYXJpYS1jb2xpbmRleHRleHQnLFxuICBhcmlhQ29sU3BhbjogJ2FyaWEtY29sc3BhbicsXG4gIGFyaWFDdXJyZW50OiAnYXJpYS1jdXJyZW50JyxcbiAgYXJpYURpc2FibGVkOiAnYXJpYS1kaXNhYmxlZCcsXG4gIGFyaWFFeHBhbmRlZDogJ2FyaWEtZXhwYW5kZWQnLFxuICBhcmlhSGFzUG9wdXA6ICdhcmlhLWhhc3BvcHVwJyxcbiAgYXJpYUhpZGRlbjogJ2FyaWEtaGlkZGVuJyxcbiAgYXJpYUludmFsaWQ6ICdhcmlhLWludmFsaWQnLFxuICBhcmlhS2V5U2hvcnRjdXRzOiAnYXJpYS1rZXlzaG9ydGN1dHMnLFxuICBhcmlhTGFiZWw6ICdhcmlhLWxhYmVsJyxcbiAgYXJpYUxldmVsOiAnYXJpYS1sZXZlbCcsXG4gIGFyaWFMaXZlOiAnYXJpYS1saXZlJyxcbiAgYXJpYU1vZGFsOiAnYXJpYS1tb2RhbCcsXG4gIGFyaWFNdWx0aUxpbmU6ICdhcmlhLW11bHRpbGluZScsXG4gIGFyaWFNdWx0aVNlbGVjdGFibGU6ICdhcmlhLW11bHRpc2VsZWN0YWJsZScsXG4gIGFyaWFPcmllbnRhdGlvbjogJ2FyaWEtb3JpZW50YXRpb24nLFxuICBhcmlhUGxhY2Vob2xkZXI6ICdhcmlhLXBsYWNlaG9sZGVyJyxcbiAgYXJpYVBvc0luU2V0OiAnYXJpYS1wb3NpbnNldCcsXG4gIGFyaWFQcmVzc2VkOiAnYXJpYS1wcmVzc2VkJyxcbiAgYXJpYVJlYWRPbmx5OiAnYXJpYS1yZWFkb25seScsXG4gIGFyaWFSZWxldmFudDogJ2FyaWEtcmVsZXZhbnQnLFxuICBhcmlhUmVxdWlyZWQ6ICdhcmlhLXJlcXVpcmVkJyxcbiAgYXJpYVJvbGVEZXNjcmlwdGlvbjogJ2FyaWEtcm9sZWRlc2NyaXB0aW9uJyxcbiAgYXJpYVJvd0NvdW50OiAnYXJpYS1yb3djb3VudCcsXG4gIGFyaWFSb3dJbmRleDogJ2FyaWEtcm93aW5kZXgnLFxuICBhcmlhUm93SW5kZXhUZXh0OiAnYXJpYS1yb3dpbmRleHRleHQnLFxuICBhcmlhUm93U3BhbjogJ2FyaWEtcm93c3BhbicsXG4gIGFyaWFTZWxlY3RlZDogJ2FyaWEtc2VsZWN0ZWQnLFxuICBhcmlhU2V0U2l6ZTogJ2FyaWEtc2V0c2l6ZScsXG4gIGFyaWFTb3J0OiAnYXJpYS1zb3J0JyxcbiAgYXJpYVZhbHVlTWF4OiAnYXJpYS12YWx1ZW1heCcsXG4gIGFyaWFWYWx1ZU1pbjogJ2FyaWEtdmFsdWVtaW4nLFxuICBhcmlhVmFsdWVOb3c6ICdhcmlhLXZhbHVlbm93JyxcbiAgYXJpYVZhbHVlVGV4dDogJ2FyaWEtdmFsdWV0ZXh0JyxcbiAgcm9sZTogJ3JvbGUnLFxufTtcblxuZXhwb3J0IGNvbnN0IGluaXRBb20gPSAocmVmOiBFbGVtZW50LCBpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzKSA9PiB7XG4gIGZvciAobGV0IGtleSBpbiBhb20pIHtcbiAgICBpbnRlcm5hbHNba2V5XSA9IG51bGw7XG5cbiAgICBsZXQgY2xvc3VyZVZhbHVlID0gbnVsbDtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gYW9tW2tleV07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGludGVybmFscywga2V5LCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiBjbG9zdXJlVmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgIGNsb3N1cmVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBpZiAocmVmLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgcmVmLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXBncmFkZU1hcC5zZXQocmVmLCBpbnRlcm5hbHMpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59O1xuIiwgImltcG9ydCB7XG4gIGludGVybmFsc01hcCxcbiAgc2hhZG93SG9zdHNNYXAsXG4gIHVwZ3JhZGVNYXAsXG4gIGhpZGRlbklucHV0TWFwLFxuICBkb2N1bWVudEZyYWdtZW50TWFwLFxuICBmb3JtRWxlbWVudHNNYXAsXG4gIHZhbGlkaXR5VXBncmFkZU1hcCxcbiAgcmVmVmFsdWVNYXAsXG59IGZyb20gJy4vbWFwcy5qcyc7XG5pbXBvcnQgeyBhb20gfSBmcm9tICcuL2FvbS5qcyc7XG5pbXBvcnQge1xuICByZW1vdmVIaWRkZW5JbnB1dHMsXG4gIGluaXRGb3JtLFxuICBpbml0TGFiZWxzLFxuICB1cGdyYWRlSW50ZXJuYWxzLFxuICBzZXREaXNhYmxlZCxcbiAgbXV0YXRpb25PYnNlcnZlckV4aXN0cyxcbn0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBJQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4vdHlwZXMuanMnO1xuXG5mdW5jdGlvbiBpbml0Tm9kZShub2RlOiBJQ3VzdG9tRWxlbWVudCk6IHZvaWQge1xuICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KG5vZGUpO1xuICBjb25zdCB7IGZvcm0gfSA9IGludGVybmFscztcbiAgaW5pdEZvcm0obm9kZSwgZm9ybSwgaW50ZXJuYWxzKTtcbiAgaW5pdExhYmVscyhub2RlLCBpbnRlcm5hbHMubGFiZWxzKTtcbn1cblxuLyoqXG4gKiBJZiBhIGZpZWxkc2V0J3MgZGlzYWJsZWQgc3RhdGUgaXMgdG9nZ2xlZCwgdGhlIGZvcm1EaXNhYmxlZENhbGxiYWNrXG4gKiBvbiBhbnkgY2hpbGQgZm9ybS1hc3NvY2lhdGVkIGN1c290bSBlbGVtZW50cy5cbiAqL1xuZXhwb3J0IGNvbnN0IHdhbGtGaWVsZHNldCA9IChub2RlOiBIVE1MRmllbGRTZXRFbGVtZW50LCBmaXJzdFJlbmRlciA9IGZhbHNlKTogdm9pZCA9PiB7XG4gIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIobm9kZSwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIHtcbiAgICBhY2NlcHROb2RlKG5vZGU6IElDdXN0b21FbGVtZW50KTogbnVtYmVyIHtcbiAgICAgIHJldHVybiBpbnRlcm5hbHNNYXAuaGFzKG5vZGUpID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfU0tJUDtcbiAgICB9LFxuICB9KTtcblxuICBsZXQgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuICAvKipcbiAgICogV2UgZG9uJ3QgbmVlZCB0byBjYWxsIGFueXRoaW5nIG9uIGZpcnN0IHJlbmRlciBpZlxuICAgKiB0aGUgZWxlbWVudCBpc24ndCBkaXNhYmxlZFxuICAgKi9cbiAgY29uc3QgaXNDYWxsTmVjZXNzYXJ5ID0gIWZpcnN0UmVuZGVyIHx8IG5vZGUuZGlzYWJsZWQ7XG5cbiAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICBpZiAoY3VycmVudC5mb3JtRGlzYWJsZWRDYWxsYmFjayAmJiBpc0NhbGxOZWNlc3NhcnkpIHtcbiAgICAgIHNldERpc2FibGVkKGN1cnJlbnQsIG5vZGUuZGlzYWJsZWQpO1xuICAgIH1cbiAgICBjdXJyZW50ID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgSUN1c3RvbUVsZW1lbnQ7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZE9yTmFtZU9ic2VydmVyQ29uZmlnOiBNdXRhdGlvbk9ic2VydmVySW5pdCA9IHtcbiAgYXR0cmlidXRlczogdHJ1ZSxcbiAgYXR0cmlidXRlRmlsdGVyOiBbJ2Rpc2FibGVkJywgJ25hbWUnXSxcbn07XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZE9yTmFtZU9ic2VydmVyID0gbXV0YXRpb25PYnNlcnZlckV4aXN0cygpXG4gID8gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uc0xpc3Q6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcbiAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zTGlzdCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbi50YXJnZXQgYXMgSUN1c3RvbUVsZW1lbnQ7XG5cbiAgICAgICAgLyoqIE1hbmFnZSBjaGFuZ2VzIHRvIHRoZSByZWYncyBkaXNhYmxlZCBzdGF0ZSAqL1xuICAgICAgICBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2Rpc2FibGVkJykge1xuICAgICAgICAgIGlmICh0YXJnZXQuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICAgICAgICAgIHNldERpc2FibGVkKHRhcmdldCwgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQubG9jYWxOYW1lID09PSAnZmllbGRzZXQnKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJlcHVycG9zZSB0aGUgb2JzZXJ2ZXIgZm9yIGZpZWxkc2V0cyB3aGljaCBuZWVkXG4gICAgICAgICAgICAgKiB0byBiZSB3YWxrZWQgd2hlbmV2ZXIgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSBpcyBzZXRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgd2Fsa0ZpZWxkc2V0KHRhcmdldCBhcyB1bmtub3duIGFzIEhUTUxGaWVsZFNldEVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiogTWFuYWdlIGNoYW5nZXMgdG8gdGhlIHJlZidzIG5hbWUgKi9cbiAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICduYW1lJykge1xuICAgICAgICAgIGlmICh0YXJnZXQuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICAgICAgICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVmVmFsdWVNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICBpbnRlcm5hbHMuc2V0Rm9ybVZhbHVlKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICA6ICh7fSBhcyBNdXRhdGlvbk9ic2VydmVyKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVyQ2FsbGJhY2sobXV0YXRpb25MaXN0OiBNdXRhdGlvblJlY29yZFtdKSB7XG4gIG11dGF0aW9uTGlzdC5mb3JFYWNoKChtdXRhdGlvblJlY29yZCkgPT4ge1xuICAgIGNvbnN0IHsgYWRkZWROb2RlcywgcmVtb3ZlZE5vZGVzIH0gPSBtdXRhdGlvblJlY29yZDtcbiAgICBjb25zdCBhZGRlZCA9IEFycmF5LmZyb20oYWRkZWROb2RlcykgYXMgSUN1c3RvbUVsZW1lbnRbXTtcbiAgICBjb25zdCByZW1vdmVkID0gQXJyYXkuZnJvbShyZW1vdmVkTm9kZXMpIGFzIElDdXN0b21FbGVtZW50W107XG5cbiAgICBhZGRlZC5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAvKiogQWxsb3dzIGZvciBkeW5hbWljIGFkZGl0aW9uIG9mIGVsZW1lbnRzIHRvIGZvcm1zICovXG4gICAgICBpZiAoaW50ZXJuYWxzTWFwLmhhcyhub2RlKSAmJiBub2RlLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICAgIGluaXROb2RlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvKiogVXBncmFkZSB0aGUgYWNjZXNzaWJpbGl0eSBpbmZvcm1hdGlvbiBvbiBhbnkgcHJldmlvdXNseSBjb25uZWN0ZWQgKi9cbiAgICAgIGlmICh1cGdyYWRlTWFwLmhhcyhub2RlKSkge1xuICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSB1cGdyYWRlTWFwLmdldChub2RlKTtcbiAgICAgICAgY29uc3QgYW9tS2V5cyA9IE9iamVjdC5rZXlzKGFvbSk7XG4gICAgICAgIGFvbUtleXNcbiAgICAgICAgICAuZmlsdGVyKChrZXkpID0+IGludGVybmFsc1trZXldICE9PSBudWxsKVxuICAgICAgICAgIC5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGFvbVtrZXldLCBpbnRlcm5hbHNba2V5XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHVwZ3JhZGVNYXAuZGVsZXRlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvKiogVXBncmFkZSB0aGUgdmFsaWRpdHkgc3RhdGUgd2hlbiB0aGUgZWxlbWVudCBpcyBjb25uZWN0ZWQgKi9cbiAgICAgIGlmICh2YWxpZGl0eVVwZ3JhZGVNYXAuaGFzKG5vZGUpKSB7XG4gICAgICAgIGNvbnN0IGludGVybmFscyA9IHZhbGlkaXR5VXBncmFkZU1hcC5nZXQobm9kZSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdpbnRlcm5hbHMtdmFsaWQnLCBpbnRlcm5hbHMudmFsaWRpdHkudmFsaWQudG9TdHJpbmcoKSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdpbnRlcm5hbHMtaW52YWxpZCcsICghaW50ZXJuYWxzLnZhbGlkaXR5LnZhbGlkKS50b1N0cmluZygpKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsICghaW50ZXJuYWxzLnZhbGlkaXR5LnZhbGlkKS50b1N0cmluZygpKTtcbiAgICAgICAgdmFsaWRpdHlVcGdyYWRlTWFwLmRlbGV0ZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgLyoqIElmIHRoZSBub2RlIHRoYXQncyBhZGRlZCBpcyBhIGZvcm0sIGNoZWNrIHRoZSB2YWxpZGl0eSAqL1xuICAgICAgaWYgKG5vZGUubG9jYWxOYW1lID09PSAnZm9ybScpIHtcbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChub2RlIGFzIHVua25vd24gYXMgSFRNTEZvcm1FbGVtZW50KTtcbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihub2RlLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwge1xuICAgICAgICAgIGFjY2VwdE5vZGUobm9kZTogSUN1c3RvbUVsZW1lbnQpOiBudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIGludGVybmFsc01hcC5oYXMobm9kZSkgJiYgIShmb3JtRWxlbWVudHMgJiYgZm9ybUVsZW1lbnRzLmhhcyhub2RlKSlcbiAgICAgICAgICAgICAgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFRcbiAgICAgICAgICAgICAgOiBOb2RlRmlsdGVyLkZJTFRFUl9TS0lQO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjdXJyZW50ID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgSUN1c3RvbUVsZW1lbnQ7XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgICBpbml0Tm9kZShjdXJyZW50KTtcbiAgICAgICAgICBjdXJyZW50ID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgSUN1c3RvbUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUubG9jYWxOYW1lID09PSAnZmllbGRzZXQnKSB7XG4gICAgICAgIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIub2JzZXJ2ZT8uKG5vZGUsIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWcpO1xuICAgICAgICB3YWxrRmllbGRzZXQobm9kZSBhcyB1bmtub3duIGFzIEhUTUxGaWVsZFNldEVsZW1lbnQsIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVtb3ZlZC5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KG5vZGUpO1xuICAgICAgLyoqIENsZWFuIHVwIGFueSBoaWRkZW4gaW5wdXQgZWxlbWVudHMgbGVmdCBhZnRlciBhbiBlbGVtZW50IGlzIGRpc2Nvbm5lY3RlZCAqL1xuICAgICAgaWYgKGludGVybmFscyAmJiBoaWRkZW5JbnB1dE1hcC5nZXQoaW50ZXJuYWxzKSkge1xuICAgICAgICByZW1vdmVIaWRkZW5JbnB1dHMoaW50ZXJuYWxzKTtcbiAgICAgIH1cbiAgICAgIC8qKiBEaXNjb25uZWN0IGFueSB1bm5lZWRlZCBNdXRhdGlvbk9ic2VydmVycyAqL1xuICAgICAgaWYgKHNoYWRvd0hvc3RzTWFwLmhhcyhub2RlKSkge1xuICAgICAgICBjb25zdCBvYnNlcnZlciA9IHNoYWRvd0hvc3RzTWFwLmdldChub2RlKTtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaGlzIG9ic2VydmVyIGNhbGxiYWNrIGlzIGp1c3QgZm9yIGRvY3VtZW50IGZyYWdtZW50c1xuICogaXQgd2lsbCB1cGdyYWRlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgaWYgd2FzIGFwcGVuZGVkXG4gKiBmcm9tIGEgZG9jdW1lbnQgZnJhZ21lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcmFnbWVudE9ic2VydmVyQ2FsbGJhY2sobXV0YXRpb25MaXN0OiBNdXRhdGlvblJlY29yZFtdKTogdm9pZCB7XG4gIG11dGF0aW9uTGlzdC5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgcmVtb3ZlZE5vZGVzIH0gPSBtdXRhdGlvbjtcblxuICAgIHJlbW92ZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBjb25zdCBvYnNlcnZlciA9IGRvY3VtZW50RnJhZ21lbnRNYXAuZ2V0KG11dGF0aW9uLnRhcmdldCBhcyBEb2N1bWVudEZyYWdtZW50KTtcbiAgICAgIGlmIChpbnRlcm5hbHNNYXAuaGFzKG5vZGUgYXMgSUN1c3RvbUVsZW1lbnQpKSB7XG4gICAgICAgIHVwZ3JhZGVJbnRlcm5hbHMobm9kZSBhcyBJQ3VzdG9tRWxlbWVudCk7XG4gICAgICB9XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIERlZmVyIHRoZSB1cGdyYWRlIG9mIG5vZGVzIHdpdGhpbmcgYSBEb2N1bWVudEZyYWdtZW50XG4gKiBAcGFyYW0gZnJhZ21lbnQge0RvY3VtZW50RnJhZ21lbnR9XG4gKi9cbmV4cG9ydCBjb25zdCBkZWZlclVwZ3JhZGUgPSAoZnJhZ21lbnQ6IERvY3VtZW50RnJhZ21lbnQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmcmFnbWVudE9ic2VydmVyQ2FsbGJhY2spO1xuICBvYnNlcnZlci5vYnNlcnZlPy4oZnJhZ21lbnQsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICBkb2N1bWVudEZyYWdtZW50TWFwLnNldChmcmFnbWVudCwgb2JzZXJ2ZXIpO1xufTtcblxuZXhwb3J0IGNvbnN0IG9ic2VydmVyID0gbXV0YXRpb25PYnNlcnZlckV4aXN0cygpXG4gID8gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjaylcbiAgOiAoe30gYXMgTXV0YXRpb25PYnNlcnZlcik7XG5leHBvcnQgY29uc3Qgb2JzZXJ2ZXJDb25maWc6IE11dGF0aW9uT2JzZXJ2ZXJJbml0ID0ge1xuICBjaGlsZExpc3Q6IHRydWUsXG4gIHN1YnRyZWU6IHRydWUsXG59O1xuIiwgImltcG9ydCB7IGhpZGRlbklucHV0TWFwLCBmb3Jtc01hcCwgZm9ybUVsZW1lbnRzTWFwLCBpbnRlcm5hbHNNYXAgfSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHsgZGlzYWJsZWRPck5hbWVPYnNlcnZlciwgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZyB9IGZyb20gJy4vbXV0YXRpb24tb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IElDdXN0b21FbGVtZW50LCBJRWxlbWVudEludGVybmFscywgTGFiZWxzTGlzdCB9IGZyb20gJy4vdHlwZXMuanMnO1xuXG4vKipcbiAqIFRvZ2dsZSdzIHRoZSBkaXNhYmxlZCBzdGF0ZSAoYXR0cmlidXRlcyAmIGNhbGxiYWNrKSBvbiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQHBhcmFtIHtJQ3VzdG9tRWxlbWVudH0gcmVmIC0gVGhlIGN1c3RvbSBlbGVtZW50IGluc3RhbmNlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGRpc2FibGVkIC0gVGhlIGRpc2FibGVkIHN0YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBzZXREaXNhYmxlZCA9IChyZWY6IElDdXN0b21FbGVtZW50LCBkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQgPT4ge1xuICByZWYudG9nZ2xlQXR0cmlidXRlKCdpbnRlcm5hbHMtZGlzYWJsZWQnLCBkaXNhYmxlZCk7XG5cbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgcmVmLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gIH0gZWxzZSB7XG4gICAgcmVmLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xuICB9XG5cbiAgaWYgKHJlZi5mb3JtRGlzYWJsZWRDYWxsYmFjaykge1xuICAgIHJlZi5mb3JtRGlzYWJsZWRDYWxsYmFjay5hcHBseShyZWYsIFtkaXNhYmxlZF0pO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGhpZGRlbiBpbnB1dHMgZm9yIHRoZSBnaXZlbiBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZVxuICogQHBhcmFtIHtJRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzIC0gVGhlIGVsZW1lbnQgaW50ZXJuYWxzIGluc3RhbmNlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlSGlkZGVuSW5wdXRzID0gKGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHMpOiB2b2lkID0+IHtcbiAgY29uc3QgaGlkZGVuSW5wdXRzID0gaGlkZGVuSW5wdXRNYXAuZ2V0KGludGVybmFscyk7XG4gIGhpZGRlbklucHV0cy5mb3JFYWNoKChoaWRkZW5JbnB1dCkgPT4ge1xuICAgIGhpZGRlbklucHV0LnJlbW92ZSgpO1xuICB9KTtcbiAgaGlkZGVuSW5wdXRNYXAuc2V0KGludGVybmFscywgW10pO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGlkZGVuIGlucHV0IGZvciB0aGUgZ2l2ZW4gcmVmXG4gKiBAcGFyYW0ge0lDdXN0b21FbGVtZW50fSByZWYgLSBUaGUgZWxlbWVudCB0byB3YXRjaFxuICogQHBhcmFtIHtJRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzIC0gVGhlIGVsZW1lbnQgaW50ZXJuYWxzIGluc3RhbmNlIGZvciB0aGUgcmVmXG4gKiBAcmV0dXJuIHtIVE1MSW5wdXRFbGVtZW50fSBUaGUgaGlkZGVuIGlucHV0XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVIaWRkZW5JbnB1dCA9IChcbiAgcmVmOiBJQ3VzdG9tRWxlbWVudCxcbiAgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFsc1xuKTogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSAnaGlkZGVuJztcbiAgaW5wdXQubmFtZSA9IHJlZi5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgcmVmLmFmdGVyKGlucHV0KTtcbiAgaGlkZGVuSW5wdXRNYXAuZ2V0KGludGVybmFscykucHVzaChpbnB1dCk7XG4gIHJldHVybiBpbnB1dDtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIHJlZiBieSBzZXR0aW5nIHVwIGFuIGF0dHJpYnV0ZSBvYnNlcnZlIG9uIGl0XG4gKiBsb29raW5nIGZvciBjaGFuZ2VzIHRvIGRpc2FibGVkXG4gKiBAcGFyYW0ge0lDdXN0b21FbGVtZW50fSByZWYgLSBUaGUgZWxlbWVudCB0byB3YXRjaFxuICogQHBhcmFtIHtJRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzIC0gVGhlIGVsZW1lbnQgaW50ZXJuYWxzIGluc3RhbmNlIGZvciB0aGUgcmVmXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgaW5pdFJlZiA9IChyZWY6IElDdXN0b21FbGVtZW50LCBpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzKTogdm9pZCA9PiB7XG4gIGhpZGRlbklucHV0TWFwLnNldChpbnRlcm5hbHMsIFtdKTtcbiAgZGlzYWJsZWRPck5hbWVPYnNlcnZlci5vYnNlcnZlPy4ocmVmLCBkaXNhYmxlZE9yTmFtZU9ic2VydmVyQ29uZmlnKTtcbn07XG5cbi8qKlxuICogU2V0IHVwIGxhYmVscyBmb3IgdGhlIHJlZlxuICogQHBhcmFtIHtJQ3VzdG9tRWxlbWVudH0gcmVmIC0gVGhlIHJlZiB0byBhZGQgbGFiZWxzIHRvXG4gKiBAcGFyYW0ge0xhYmVsc0xpc3R9IGxhYmVscyAtIEEgbGlzdCBvZiB0aGUgbGFiZWxzXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgaW5pdExhYmVscyA9IChyZWY6IElDdXN0b21FbGVtZW50LCBsYWJlbHM6IExhYmVsc0xpc3QpOiB2b2lkID0+IHtcbiAgaWYgKGxhYmVscy5sZW5ndGgpIHtcbiAgICBBcnJheS5mcm9tKGxhYmVscykuZm9yRWFjaCgobGFiZWwpID0+IGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVmLmNsaWNrLmJpbmQocmVmKSkpO1xuICAgIGxldCBmaXJzdExhYmVsSWQgPSBsYWJlbHNbMF0uaWQ7XG4gICAgaWYgKCFsYWJlbHNbMF0uaWQpIHtcbiAgICAgIGZpcnN0TGFiZWxJZCA9IGAke2xhYmVsc1swXS5odG1sRm9yfV9MYWJlbGA7XG4gICAgICBsYWJlbHNbMF0uaWQgPSBmaXJzdExhYmVsSWQ7XG4gICAgfVxuICAgIHJlZi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGZpcnN0TGFiZWxJZCk7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0cyB0aGUgaW50ZXJuYWxzLXZhbGlkIGFuZCBpbnRlcm5hbHMtaW52YWxpZCBhdHRyaWJ1dGVzXG4gKiBiYXNlZCBvbiBmb3JtIHZhbGlkaXR5LlxuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IC0gVGhlIHRhcmdldCBmb3JtXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3Qgc2V0Rm9ybVZhbGlkaXR5ID0gKGZvcm06IEhUTUxGb3JtRWxlbWVudCkgPT4ge1xuICBjb25zdCBuYXRpdmVDb250cm9sVmFsaWRpdHkgPSBBcnJheS5mcm9tKGZvcm0uZWxlbWVudHMpXG4gICAgLmZpbHRlcihcbiAgICAgIChlbGVtZW50OiBFbGVtZW50ICYgeyB2YWxpZGl0eTogVmFsaWRpdHlTdGF0ZSB9KSA9PlxuICAgICAgICAhZWxlbWVudC50YWdOYW1lLmluY2x1ZGVzKCctJykgJiYgZWxlbWVudC52YWxpZGl0eVxuICAgIClcbiAgICAubWFwKChlbGVtZW50OiBFbGVtZW50ICYgeyB2YWxpZGl0eTogVmFsaWRpdHlTdGF0ZSB9KSA9PiBlbGVtZW50LnZhbGlkaXR5LnZhbGlkKTtcbiAgY29uc3QgcG9seWZpbGxlZEVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChmb3JtKSB8fCBbXTtcbiAgY29uc3QgcG9seWZpbGxlZFZhbGlkaXR5ID0gQXJyYXkuZnJvbShwb2x5ZmlsbGVkRWxlbWVudHMpXG4gICAgLmZpbHRlcigoY29udHJvbCkgPT4gY29udHJvbC5pc0Nvbm5lY3RlZClcbiAgICAubWFwKChjb250cm9sOiBJQ3VzdG9tRWxlbWVudCkgPT4gaW50ZXJuYWxzTWFwLmdldChjb250cm9sKS52YWxpZGl0eS52YWxpZCk7XG4gIGNvbnN0IGhhc0ludmFsaWQgPSBbLi4ubmF0aXZlQ29udHJvbFZhbGlkaXR5LCAuLi5wb2x5ZmlsbGVkVmFsaWRpdHldLmluY2x1ZGVzKGZhbHNlKTtcbiAgZm9ybS50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy1pbnZhbGlkJywgaGFzSW52YWxpZCk7XG4gIGZvcm0udG9nZ2xlQXR0cmlidXRlKCdpbnRlcm5hbHMtdmFsaWQnLCAhaGFzSW52YWxpZCk7XG59O1xuXG4vKipcbiAqIFRoZSBnbG9iYWwgZm9ybSBpbnB1dCBjYWxsYmFjay4gVXBkYXRlcyB0aGUgZm9ybSdzIHZhbGlkaXR5XG4gKiBhdHRyaWJ1dGVzIG9uIGlucHV0LlxuICogQHBhcmFtIHtFdmVudH0gLSBUaGUgZm9ybSBpbnB1dCBldmVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1JbnB1dENhbGxiYWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICBzZXRGb3JtVmFsaWRpdHkoZmluZFBhcmVudEZvcm0oZXZlbnQudGFyZ2V0KSk7XG59O1xuXG4vKipcbiAqIFRoZSBnbG9iYWwgZm9ybSBjaGFuZ2UgY2FsbGJhY2suIFVwZGF0ZXMgdGhlIGZvcm0ncyB2YWxpZGl0eVxuICogYXR0cmlidXRlcyBvbiBjaGFuZ2UuXG4gKiBAcGFyYW0ge0V2ZW50fSAtIFRoZSBmb3JtIGNoYW5nZSBldmVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1DaGFuZ2VDYWxsYmFjayA9IChldmVudDogRXZlbnQpID0+IHtcbiAgc2V0Rm9ybVZhbGlkaXR5KGZpbmRQYXJlbnRGb3JtKGV2ZW50LnRhcmdldCkpO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gc3VibWl0IGNhbGxiYWNrLiBXZSBuZWVkIHRvIGNhbmNlbCBhbnkgc3VibWlzc2lvblxuICogaWYgYSBuZXN0ZWQgaW50ZXJuYWxzIGlzIGludmFsaWQuXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gLSBUaGUgZm9ybSBlbGVtZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3Qgd2lyZVN1Ym1pdExvZ2ljID0gKGZvcm06IEhUTUxGb3JtRWxlbWVudCkgPT4ge1xuICBjb25zdCBTVUJNSVRfQlVUVE9OX1NFTEVDVE9SID1cbiAgICAnOmlzKGJ1dHRvblt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9c3VibWl0XSwgYnV0dG9uOm5vdChbdHlwZV0pKTpub3QoW2Rpc2FibGVkXSknO1xuICBsZXQgc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBgJHtTVUJNSVRfQlVUVE9OX1NFTEVDVE9SfTpub3QoW2Zvcm1dKWA7XG5cbiAgaWYgKGZvcm0uaWQpIHtcbiAgICBzdWJtaXRCdXR0b25TZWxlY3RvciArPSBgLCR7U1VCTUlUX0JVVFRPTl9TRUxFQ1RPUn1bZm9ybT0nJHtmb3JtLmlkfSddYDtcbiAgfVxuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgRWxlbWVudDtcbiAgICBpZiAodGFyZ2V0LmNsb3Nlc3Qoc3VibWl0QnV0dG9uU2VsZWN0b3IpKSB7XG4gICAgICAvLyB2YWxpZGF0ZVxuICAgICAgY29uc3QgZWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGZvcm0pO1xuXG4gICAgICAvKipcbiAgICAgICAqIElmIHRoaXMgZm9ybSBkb2VzIG5vdCB2YWxpZGF0ZSB0aGVuIHdlJ3JlIGRvbmVcbiAgICAgICAqL1xuICAgICAgaWYgKGZvcm0ubm9WYWxpZGF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8qKiBJZiB0aGUgU2V0IGhhcyBpdGVtcywgY29udGludWUgKi9cbiAgICAgIGlmIChlbGVtZW50cy5zaXplKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShlbGVtZW50cyk7XG4gICAgICAgIC8qKiBDaGVjayB0aGUgaW50ZXJuYWxzLmNoZWNrVmFsaWRpdHkoKSBvZiBhbGwgbm9kZXMgKi9cbiAgICAgICAgY29uc3QgdmFsaWRpdHlMaXN0ID0gbm9kZXMucmV2ZXJzZSgpLm1hcCgobm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQobm9kZSk7XG4gICAgICAgICAgcmV0dXJuIGludGVybmFscy5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKiogSWYgYW55IG5vZGUgaXMgZmFsc2UsIHN0b3AgdGhlIGV2ZW50ICovXG4gICAgICAgIGlmICh2YWxpZGl0eUxpc3QuaW5jbHVkZXMoZmFsc2UpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIFRoZSBnbG9iYWwgZm9ybSByZXNldCBjYWxsYmFjay4gVGhpcyB3aWxsIGxvb3Agb3ZlciBhZGRlZFxuICogaW5wdXRzIGFuZCBjYWxsIGZvcm1SZXNldENhbGxiYWNrIGlmIGFwcGxpY2FibGVcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtUmVzZXRDYWxsYmFjayA9IChldmVudDogRXZlbnQpID0+IHtcbiAgLyoqIEdldCB0aGUgU2V0IG9mIGVsZW1lbnRzIGF0dGFjaGVkIHRvIHRoaXMgZm9ybSAqL1xuICBjb25zdCBlbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZXZlbnQudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudCk7XG5cbiAgLyoqIFNvbWUgZm9ybXMgd29uJ3QgY29udGFpbiBmb3JtIGFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnRzICovXG4gIGlmIChlbGVtZW50cyAmJiBlbGVtZW50cy5zaXplKSB7XG4gICAgLyoqIExvb3Agb3ZlciB0aGUgZWxlbWVudHMgYW5kIGNhbGwgZm9ybVJlc2V0Q2FsbGJhY2sgaWYgYXBwbGljYWJsZSAqL1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmICgoZWxlbWVudC5jb25zdHJ1Y3RvciBhcyBhbnkpLmZvcm1Bc3NvY2lhdGVkICYmIGVsZW1lbnQuZm9ybVJlc2V0Q2FsbGJhY2spIHtcbiAgICAgICAgZWxlbWVudC5mb3JtUmVzZXRDYWxsYmFjay5hcHBseShlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBmb3JtLiBXZSB3aWxsIG5lZWQgdG8gYWRkIHN1Ym1pdCBhbmQgcmVzZXQgbGlzdGVuZXJzXG4gKiBpZiB0aGV5IGRvbid0IGFscmVhZHkgZXhpc3QuIElmIHRoZXkgZG8sIGp1c3QgYWRkIHRoZSBuZXcgcmVmIHRvIHRoZSBmb3JtLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmIC0gVGhlIGVsZW1lbnQgcmVmIHRoYXQgaW5jbHVkZXMgaW50ZXJuYWxzXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybSAtIFRoZSBmb3JtIHRoZSByZWYgYmVsb25ncyB0b1xuICogQHBhcmFtIHtFbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHMgLSBUaGUgaW50ZXJuYWxzIGZvciByZWZcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBpbml0Rm9ybSA9IChcbiAgcmVmOiBJQ3VzdG9tRWxlbWVudCxcbiAgZm9ybTogSFRNTEZvcm1FbGVtZW50LFxuICBpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzXG4pID0+IHtcbiAgaWYgKGZvcm0pIHtcbiAgICAvKiogVGhpcyB3aWxsIGJlIGEgV2Vha01hcDxIVE1MRm9ybUVsZW1lbnQsIFNldDxIVE1MRWxlbWVudD4gKi9cbiAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGZvcm0pO1xuXG4gICAgaWYgKGZvcm1FbGVtZW50cykge1xuICAgICAgLyoqIElmIGZvcm1FbGVtZW50cyBleGlzdHMsIGFkZCB0byBpdCAqL1xuICAgICAgZm9ybUVsZW1lbnRzLmFkZChyZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiogSWYgZm9ybUVsZW1lbnRzIGRvZXNuJ3QgZXhpc3QsIGNyZWF0ZSBpdCBhbmQgYWRkIHRvIGl0ICovXG4gICAgICBjb25zdCBpbml0U2V0ID0gbmV3IFNldDxJQ3VzdG9tRWxlbWVudD4oKTtcbiAgICAgIGluaXRTZXQuYWRkKHJlZik7XG4gICAgICBmb3JtRWxlbWVudHNNYXAuc2V0KGZvcm0sIGluaXRTZXQpO1xuXG4gICAgICAvKiogQWRkIGxpc3RlbmVycyB0byBlbXVsYXRlIHZhbGlkYXRpb24gYW5kIHJlc2V0IGJlaGF2aW9yICovXG4gICAgICB3aXJlU3VibWl0TG9naWMoZm9ybSk7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgZm9ybVJlc2V0Q2FsbGJhY2spO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZvcm1JbnB1dENhbGxiYWNrKTtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZm9ybUNoYW5nZUNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBmb3Jtc01hcC5zZXQoZm9ybSwgeyByZWYsIGludGVybmFscyB9KTtcblxuICAgIC8qKiBDYWxsIGZvcm1Bc3NvY2lhdGVkQ2FsbGJhY2sgaWYgYXBwbGljYWJsZSAqL1xuICAgIGlmIChyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10gJiYgcmVmLmZvcm1Bc3NvY2lhdGVkQ2FsbGJhY2spIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZWYuZm9ybUFzc29jaWF0ZWRDYWxsYmFjay5hcHBseShyZWYsIFtmb3JtXSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gICAgc2V0Rm9ybVZhbGlkaXR5KGZvcm0pO1xuICB9XG59O1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IGxvb2sgZm9yIGFuIGVsZW1lbnQncyBwYXJlbnQgZm9ybVxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtIC0gVGhlIGVsZW1lbnQgdG8gbG9vayBmb3IgYSBwYXJlbnQgZm9ybVxuICogQHJldHVybiB7SFRNTEZvcm1FbGVtZW50fG51bGx9IC0gVGhlIHBhcmVudCBmb3JtLCBpZiBvbmUgZXhpc3RzXG4gKi9cbmV4cG9ydCBjb25zdCBmaW5kUGFyZW50Rm9ybSA9IChlbGVtKSA9PiB7XG4gIGxldCBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG4gIGlmIChwYXJlbnQgJiYgcGFyZW50LnRhZ05hbWUgIT09ICdGT1JNJykge1xuICAgIHBhcmVudCA9IGZpbmRQYXJlbnRGb3JtKHBhcmVudCk7XG4gIH1cbiAgcmV0dXJuIHBhcmVudDtcbn07XG5cbi8qKlxuICogVGhyb3cgYW4gZXJyb3IgaWYgdGhlIGVsZW1lbnQgcmVmIGlzIG5vdCBmb3JtIGFzc29jaWF0ZWRcbiAqIEBwYXJhbSByZWYge0lDdXN0b21FbGVtZW50fSAtIFRoZSBlbGVtZW50IHRvIGNoZWNrIGlmIGl0IGlzIGZvcm0gYXNzb2NpYXRlZFxuICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gLSBUaGUgZXJyb3IgbWVzc2FnZSB0byB0aHJvd1xuICogQHBhcmFtIEVycm9yVHlwZSB7YW55fSAtIFRoZSBlcnJvciB0eXBlIHRvIHRocm93LCBkZWZhdWx0cyB0byBET01FeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZCA9IChcbiAgcmVmOiBJQ3VzdG9tRWxlbWVudCxcbiAgbWVzc2FnZTogc3RyaW5nLFxuICBFcnJvclR5cGU6IGFueSA9IERPTUV4Y2VwdGlvblxuKTogdm9pZCA9PiB7XG4gIGlmICghcmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yVHlwZShtZXNzYWdlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgZm9yIGVhY2ggSFRNTEZvcm1FbGVtZW50LmNoZWNrVmFsaWRpdHl8cmVwb3J0VmFsaWRpdHlcbiAqIHdpbGwgbG9vcCBvdmVyIGEgZm9ybSdzIGFkZGVkIGNvbXBvbmVudHMgYW5kIGNhbGwgdGhlIHJlc3BlY3RpdmVcbiAqIG1ldGhvZCBtb2RpZnlpbmcgdGhlIGRlZmF1bHQgcmV0dXJuIHZhbHVlIGlmIG5lZWRlZFxuICogQHBhcmFtIGZvcm0ge0hUTUxGb3JtRWxlbWVudH0gLSBUaGUgZm9ybSBlbGVtZW50IHRvIHJ1biB0aGUgbWV0aG9kIG9uXG4gKiBAcGFyYW0gcmV0dXJuVmFsdWUge2Jvb2xlYW59IC0gVGhlIGluaXRpYWwgcmVzdWx0IG9mIHRoZSBvcmlnaW5hbCBtZXRob2RcbiAqIEBwYXJhbSBtZXRob2QgeydjaGVja1ZhbGlkaXR5J3wncmVwb3J0VmFsaWRpdHknfSAtIFRoZSBvcmlnaW5hbCBtZXRob2RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUaGUgZm9ybSdzIHZhbGlkaXR5IHN0YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBvdmVycmlkZUZvcm1NZXRob2QgPSAoXG4gIGZvcm06IEhUTUxGb3JtRWxlbWVudCxcbiAgcmV0dXJuVmFsdWU6IGJvb2xlYW4sXG4gIG1ldGhvZDogJ2NoZWNrVmFsaWRpdHknIHwgJ3JlcG9ydFZhbGlkaXR5J1xuKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChmb3JtKTtcblxuICAvKiogU29tZSBmb3JtcyB3b24ndCBjb250YWluIGZvcm0gYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudHMgKi9cbiAgaWYgKGVsZW1lbnRzICYmIGVsZW1lbnRzLnNpemUpIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KGVsZW1lbnQpO1xuICAgICAgY29uc3QgdmFsaWQgPSBpbnRlcm5hbHNbbWV0aG9kXSgpO1xuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICByZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXR1cm5WYWx1ZTtcbn07XG5cbi8qKlxuICogV2lsbCB1cGdyYWRlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgYnkgaW5pdGlhbGl6aW5nIHRoZVxuICogaW5zdGFuY2UncyBmb3JtIGFuZCBsYWJlbHMuIFRoaXMgaXMgY2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgaXNcbiAqIGVpdGhlciBjb25zdHJ1Y3RlZCBvciBhcHBlbmRlZCBmcm9tIGEgRG9jdW1lbnRGcmFnbWVudFxuICogQHBhcmFtIHJlZiB7SUN1c3RvbUVsZW1lbnR9IC0gVGhlIGN1c3RvbSBlbGVtZW50IHRvIHVwZ3JhZGVcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZ3JhZGVJbnRlcm5hbHMgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCkgPT4ge1xuICBpZiAocmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChyZWYpO1xuICAgIGNvbnN0IHsgbGFiZWxzLCBmb3JtIH0gPSBpbnRlcm5hbHM7XG4gICAgaW5pdExhYmVscyhyZWYsIGxhYmVscyk7XG4gICAgaW5pdEZvcm0ocmVmLCBmb3JtLCBpbnRlcm5hbHMpO1xuICB9XG59O1xuXG4vKipcbiAqIENoZWNrIHRvIHNlZSBpZiBNdXRhdGlvbk9ic2VydmVyIGV4aXN0cyBpbiB0aGUgY3VycmVudFxuICogZXhlY3V0aW9uIGNvbnRleHQuIFdpbGwgbGlrZWx5IHJldHVybiBmYWxzZSBvbiB0aGUgc2VydmVyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG59XG4iLCAiaW1wb3J0IHsgc2V0Rm9ybVZhbGlkaXR5IH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKiBFbXVsYXRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBWYWxpZGl0eVN0YXRlIG9iamVjdCAqL1xuZXhwb3J0IGNsYXNzIFZhbGlkaXR5U3RhdGUgaW1wbGVtZW50cyBnbG9iYWxUaGlzLlZhbGlkaXR5U3RhdGUge1xuICBiYWRJbnB1dCA9IGZhbHNlO1xuICBjdXN0b21FcnJvciA9IGZhbHNlO1xuICBwYXR0ZXJuTWlzbWF0Y2ggPSBmYWxzZTtcbiAgcmFuZ2VPdmVyZmxvdyA9IGZhbHNlO1xuICByYW5nZVVuZGVyZmxvdyA9IGZhbHNlO1xuICBzdGVwTWlzbWF0Y2ggPSBmYWxzZTtcbiAgdG9vTG9uZyA9IGZhbHNlO1xuICB0b29TaG9ydCA9IGZhbHNlO1xuICB0eXBlTWlzbWF0Y2ggPSBmYWxzZTtcbiAgdmFsaWQgPSB0cnVlO1xuICB2YWx1ZU1pc3NpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBPYmplY3Quc2VhbCh0aGlzKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0IGEgVmFsaWRpdHlTdGF0ZSBvYmplY3QgYmFjayB0byB2YWxpZFxuICogQHBhcmFtIHtWYWxpZGl0eVN0YXRlfSB2YWxpZGl0eU9iamVjdCAtIFRoZSBvYmplY3QgdG8gbW9kaWZ5XG4gKiBAcmV0dXJuIHtWYWxpZGl0eVN0YXRlfSAtIFRoZSBtb2RpZmllZCBWYWxpZGl0eVN0YXRlT2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBzZXRWYWxpZCA9ICh2YWxpZGl0eU9iamVjdDogVmFsaWRpdHlTdGF0ZSk6IFZhbGlkaXR5U3RhdGUgPT4ge1xuICB2YWxpZGl0eU9iamVjdC5iYWRJbnB1dCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC5jdXN0b21FcnJvciA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC5wYXR0ZXJuTWlzbWF0Y2ggPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QucmFuZ2VPdmVyZmxvdyA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC5yYW5nZVVuZGVyZmxvdyA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC5zdGVwTWlzbWF0Y2ggPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QudG9vTG9uZyA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC50b29TaG9ydCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC50eXBlTWlzbWF0Y2ggPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QudmFsaWQgPSB0cnVlO1xuICB2YWxpZGl0eU9iamVjdC52YWx1ZU1pc3NpbmcgPSBmYWxzZTtcbiAgcmV0dXJuIHZhbGlkaXR5T2JqZWN0O1xufTtcblxuLyoqXG4gKiBSZWNvbmNpbGUgYSBWYWxpZGl0eVN0YXRlIG9iamVjdCB3aXRoIGEgbmV3IHN0YXRlIG9iamVjdFxuICogQHBhcmFtIHtWYWxpZGl0eVN0YXRlfSAtIFRoZSBiYXNlIG9iamVjdCB0byByZWNvbmNpbGUgd2l0aCBuZXcgc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSAtIEEgcGFydGlhbCBWYWxpZGl0eVN0YXRlIG9iamVjdCB0byBvdmVycmlkZSB0aGUgb3JpZ2luYWxcbiAqIEByZXR1cm4ge1ZhbGlkaXR5U3RhdGV9IC0gVGhlIHVwZGF0ZWQgVmFsaWRpdHlTdGF0ZSBvYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IHJlY29uY2lsZVZhbGlkaXR5ID0gKFxuICB2YWxpZGl0eU9iamVjdDogVmFsaWRpdHlTdGF0ZSxcbiAgbmV3U3RhdGU6IFBhcnRpYWw8VmFsaWRpdHlTdGF0ZT4sXG4gIGZvcm06IEhUTUxGb3JtRWxlbWVudFxuKTogVmFsaWRpdHlTdGF0ZSA9PiB7XG4gIHZhbGlkaXR5T2JqZWN0LnZhbGlkID0gaXNWYWxpZChuZXdTdGF0ZSk7XG4gIE9iamVjdC5rZXlzKG5ld1N0YXRlKS5mb3JFYWNoKChrZXkpID0+ICh2YWxpZGl0eU9iamVjdFtrZXldID0gbmV3U3RhdGVba2V5XSkpO1xuICBpZiAoZm9ybSkge1xuICAgIHNldEZvcm1WYWxpZGl0eShmb3JtKTtcbiAgfVxuICByZXR1cm4gdmFsaWRpdHlPYmplY3Q7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGEgcGFydGlhbCBWYWxpZGl0eVN0YXRlIG9iamVjdCBzaG91bGQgYmUgdmFsaWRcbiAqIEBwYXJhbSB7T2JqZWN0fSAtIEEgcGFydGlhbCBWYWxpZGl0eVN0YXRlIG9iamVjdFxuICogQHJldHVybiB7Qm9vbGVhbn0gLSBTaG91bGQgdGhlIG5ldyBvYmplY3QgYmUgdmFsaWRcbiAqL1xuZXhwb3J0IGNvbnN0IGlzVmFsaWQgPSAodmFsaWRpdHlTdGF0ZTogUGFydGlhbDxWYWxpZGl0eVN0YXRlPik6IGJvb2xlYW4gPT4ge1xuICBsZXQgdmFsaWQgPSB0cnVlO1xuICBmb3IgKGxldCBrZXkgaW4gdmFsaWRpdHlTdGF0ZSkge1xuICAgIGlmIChrZXkgIT09ICd2YWxpZCcgJiYgdmFsaWRpdHlTdGF0ZVtrZXldICE9PSBmYWxzZSkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbGlkO1xufTtcbiIsICJpbXBvcnQgeyBJQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4vdHlwZXMuanMnO1xuXG4vKiogU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgcmVmIGZvciB0ZWggQ3VzdG9tU3RhdGVTZXQgKi9cbmNvbnN0IGN1c3RvbVN0YXRlTWFwID0gbmV3IFdlYWtNYXA8Q3VzdG9tU3RhdGVTZXQsIElDdXN0b21FbGVtZW50PigpO1xuXG5mdW5jdGlvbiBhZGRTdGF0ZShyZWY6IElDdXN0b21FbGVtZW50LCBzdGF0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICByZWYudG9nZ2xlQXR0cmlidXRlKHN0YXRlTmFtZSwgdHJ1ZSk7XG4gIGlmIChyZWYucGFydCkge1xuICAgIHJlZi5wYXJ0LmFkZChzdGF0ZU5hbWUpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEN1c3RvbVN0YXRlID0gYC0tJHtzdHJpbmd9YDtcblxuZXhwb3J0IGNsYXNzIEN1c3RvbVN0YXRlU2V0IGV4dGVuZHMgU2V0PEN1c3RvbVN0YXRlPiB7XG4gIHN0YXRpYyBnZXQgaXNQb2x5ZmlsbGVkKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocmVmOiBJQ3VzdG9tRWxlbWVudCkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKCFyZWYgfHwgIXJlZi50YWdOYW1lIHx8IHJlZi50YWdOYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0lsbGVnYWwgY29uc3RydWN0b3InKTtcbiAgICB9XG5cbiAgICBjdXN0b21TdGF0ZU1hcC5zZXQodGhpcywgcmVmKTtcbiAgfVxuXG4gIGFkZChzdGF0ZTogQ3VzdG9tU3RhdGUpIHtcbiAgICBpZiAoIS9eLS0vLnRlc3Qoc3RhdGUpIHx8IHR5cGVvZiBzdGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnYWRkJyBvbiAnQ3VzdG9tU3RhdGVTZXQnOiBUaGUgc3BlY2lmaWVkIHZhbHVlICR7c3RhdGV9IG11c3Qgc3RhcnQgd2l0aCAnLS0nLmBcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLmFkZChzdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gY3VzdG9tU3RhdGVNYXAuZ2V0KHRoaXMpO1xuICAgIGNvbnN0IHN0YXRlTmFtZSA9IGBzdGF0ZSR7c3RhdGV9YDtcblxuICAgIC8qKlxuICAgICAqIE9ubHkgYWRkIHRoZSBzdGF0ZSBpbW1lZGlhdGVseSBpZiB0aGUgcmVmIGlzIGNvbm5lY3RlZCB0byB0aGUgRE9NO1xuICAgICAqIG90aGVyd2lzZSwgd2FpdCBhIHRpY2sgYmVjYXVzZSB0aGUgZWxlbWVudCBpcyBsaWtlbHkgYmVpbmcgY29uc3RydWN0ZWRcbiAgICAgKiBieSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGFuZCB3b3VsZCB0aHJvdyBvdGhlcndpc2UuXG4gICAgICovXG4gICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgYWRkU3RhdGUocmVmLCBzdGF0ZU5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYWRkU3RhdGUocmVmLCBzdGF0ZU5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGZvciAobGV0IFtlbnRyeV0gb2YgdGhpcy5lbnRyaWVzKCkpIHtcbiAgICAgIHRoaXMuZGVsZXRlKGVudHJ5KTtcbiAgICB9XG4gICAgc3VwZXIuY2xlYXIoKTtcbiAgfVxuXG4gIGRlbGV0ZShzdGF0ZTogQ3VzdG9tU3RhdGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5kZWxldGUoc3RhdGUpO1xuICAgIGNvbnN0IHJlZiA9IGN1c3RvbVN0YXRlTWFwLmdldCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIE9ubHkgdG9nZ2xlIHRoZSBzdGF0ZS9hdHRyIGltbWVkaWF0ZWx5IGlmIHRoZSByZWYgaXMgY29ubmVjdGVkIHRvIHRoZSBET007XG4gICAgICogb3RoZXJ3aXNlLCB3YWl0IGEgdGljayBiZWNhdXNlIHRoZSBlbGVtZW50IGlzIGxpa2VseSBiZWluZyBjb25zdHJ1Y3RlZFxuICAgICAqIGJ5IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgYW5kIHdvdWxkIHRocm93IG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBpZiAocmVmLmlzQ29ubmVjdGVkKSB7XG4gICAgICByZWYudG9nZ2xlQXR0cmlidXRlKGBzdGF0ZSR7c3RhdGV9YCwgZmFsc2UpO1xuICAgICAgaWYgKHJlZi5wYXJ0KSB7XG4gICAgICAgIHJlZi5wYXJ0LnJlbW92ZShgc3RhdGUke3N0YXRlfWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZShgc3RhdGUke3N0YXRlfWAsIGZhbHNlKTtcbiAgICAgICAgaWYgKHJlZi5wYXJ0KSB7XG4gICAgICAgICAgcmVmLnBhcnQucmVtb3ZlKGBzdGF0ZSR7c3RhdGV9YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsICJleHBvcnQgY2xhc3MgSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24gaW1wbGVtZW50cyBnbG9iYWxUaGlzLkhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uIHtcbiAgcmVhZG9ubHkgI2VsZW1lbnRzO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRzKSB7XG4gICAgdGhpcy4jZWxlbWVudHMgPSBlbGVtZW50cztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG5cbiAgICAgIHRoaXNbaV0gPSBlbGVtZW50O1xuICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCduYW1lJykpIHtcbiAgICAgICAgdGhpc1tlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpXSA9IGVsZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIFtpbmRleDogbnVtYmVyXTogRWxlbWVudDtcblxuICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuI2VsZW1lbnRzLmxlbmd0aDtcbiAgfVxuXG4gIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgIHJldHVybiB0aGlzLiNlbGVtZW50c1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gIH1cblxuICBpdGVtKGkpOiBFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpc1tpXSA9PSBudWxsID8gbnVsbCA6IHRoaXNbaV07XG4gIH1cblxuICBuYW1lZEl0ZW0obmFtZSk6IEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzW25hbWVdID09IG51bGwgPyBudWxsIDogdGhpc1tuYW1lXTtcbiAgfVxufVxuIiwgImltcG9ydCB7IEhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uIH0gZnJvbSAnLi9IVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbi5qcyc7XG5pbXBvcnQgeyBmb3JtRWxlbWVudHNNYXAgfSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHsgb3ZlcnJpZGVGb3JtTWV0aG9kIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogUGF0Y2ggdGhlIEhUTUxFbGVtZW50IHByb3RvdHlwZVxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcGF0Y2hlcyBjaGVja1ZhbGlkaXR5LCByZXBvcnRWYWxpZGl0eSBhbmQgZWxlbWVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoRm9ybVByb3RvdHlwZSgpOiB2b2lkIHtcbiAgY29uc3QgY2hlY2tWYWxpZGl0eSA9IEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUuY2hlY2tWYWxpZGl0eTtcbiAgSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5jaGVja1ZhbGlkaXR5ID0gY2hlY2tWYWxpZGl0eU92ZXJyaWRlO1xuXG4gIGNvbnN0IHJlcG9ydFZhbGlkaXR5ID0gSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5yZXBvcnRWYWxpZGl0eTtcbiAgSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5yZXBvcnRWYWxpZGl0eSA9IHJlcG9ydFZhbGlkaXR5T3ZlcnJpZGU7XG5cbiAgZnVuY3Rpb24gY2hlY2tWYWxpZGl0eU92ZXJyaWRlKC4uLmFyZ3MpOiBib29sZWFuIHtcbiAgICBsZXQgcmV0dXJuVmFsdWUgPSBjaGVja1ZhbGlkaXR5LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHJldHVybiBvdmVycmlkZUZvcm1NZXRob2QodGhpcywgcmV0dXJuVmFsdWUsICdjaGVja1ZhbGlkaXR5Jyk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBvcnRWYWxpZGl0eU92ZXJyaWRlKC4uLmFyZ3MpOiBib29sZWFuIHtcbiAgICBsZXQgcmV0dXJuVmFsdWUgPSByZXBvcnRWYWxpZGl0eS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICByZXR1cm4gb3ZlcnJpZGVGb3JtTWV0aG9kKHRoaXMsIHJldHVyblZhbHVlLCAncmVwb3J0VmFsaWRpdHknKTtcbiAgfVxuXG4gIGNvbnN0IHsgZ2V0IH0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUsICdlbGVtZW50cycpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZSwgJ2VsZW1lbnRzJywge1xuICAgIGdldCguLi5hcmdzKSB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IGdldC5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuICAgICAgY29uc3QgcG9seWZpbGxlZEVsZW1lbnRzID0gQXJyYXkuZnJvbShmb3JtRWxlbWVudHNNYXAuZ2V0KHRoaXMpIHx8IFtdKTtcblxuICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHBvbHlmaWxsZWQgZWxlbWVudHMsIHJldHVybiB0aGUgbmF0aXZlIGVsZW1lbnRzIGNvbGxlY3Rpb25cbiAgICAgIGlmIChwb2x5ZmlsbGVkRWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50cztcbiAgICAgIH1cblxuICAgICAgLy8gTWVyZ2UgdGhlIG5hdGl2ZSBlbGVtZW50cyB3aXRoIHRoZSBwb2x5ZmlsbGVkIGVsZW1lbnRzXG4gICAgICAvLyBhbmQgb3JkZXIgdGhlbSBieSB0aGVpciBwb3NpdGlvbiBpbiB0aGUgRE9NXG4gICAgICBjb25zdCBvcmRlcmVkRWxlbWVudHMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKVxuICAgICAgICAuY29uY2F0KHBvbHlmaWxsZWRFbGVtZW50cylcbiAgICAgICAgLnNvcnQoKGE6IEVsZW1lbnQsIGI6IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICBpZiAoYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYikgJiAyID8gMSA6IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBuZXcgSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24ob3JkZXJlZEVsZW1lbnRzKTtcbiAgICB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBjb25uZWN0ZWRDYWxsYmFja01hcCxcbiAgaW50ZXJuYWxzTWFwLFxuICByZWZNYXAsXG4gIHJlZlZhbHVlTWFwLFxuICBzaGFkb3dIb3N0c01hcCxcbiAgc2hhZG93Um9vdE1hcCxcbiAgdmFsaWRhdGlvbkFuY2hvck1hcCxcbiAgdmFsaWRpdHlNYXAsXG4gIHZhbGlkYXRpb25NZXNzYWdlTWFwLFxuICB2YWxpZGl0eVVwZ3JhZGVNYXAsXG59IGZyb20gJy4vbWFwcy5qcyc7XG5pbXBvcnQge1xuICBjcmVhdGVIaWRkZW5JbnB1dCxcbiAgZmluZFBhcmVudEZvcm0sXG4gIGluaXRSZWYsXG4gIG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMsXG4gIHJlbW92ZUhpZGRlbklucHV0cyxcbiAgc2V0RGlzYWJsZWQsXG4gIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZCxcbiAgdXBncmFkZUludGVybmFscyxcbn0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBpbml0QW9tIH0gZnJvbSAnLi9hb20uanMnO1xuaW1wb3J0IHsgVmFsaWRpdHlTdGF0ZSwgcmVjb25jaWxlVmFsaWRpdHksIHNldFZhbGlkIH0gZnJvbSAnLi9WYWxpZGl0eVN0YXRlLmpzJztcbmltcG9ydCB7IGRlZmVyVXBncmFkZSwgb2JzZXJ2ZXJDYWxsYmFjaywgb2JzZXJ2ZXJDb25maWcgfSBmcm9tICcuL211dGF0aW9uLW9ic2VydmVycy5qcyc7XG5pbXBvcnQgeyBJRWxlbWVudEludGVybmFscywgSUN1c3RvbUVsZW1lbnQsIExhYmVsc0xpc3QgfSBmcm9tICcuL3R5cGVzLmpzJztcbmltcG9ydCB7IEN1c3RvbVN0YXRlU2V0IH0gZnJvbSAnLi9DdXN0b21TdGF0ZVNldC5qcyc7XG5pbXBvcnQgeyBwYXRjaEZvcm1Qcm90b3R5cGUgfSBmcm9tICcuL3BhdGNoLWZvcm0tcHJvdG90eXBlLmpzJztcbmltcG9ydCB7IGlzU2VydmVyIH0gZnJvbSAnbGl0LWh0bWwvaXMtc2VydmVyLmpzJztcblxuZXhwb3J0IGNsYXNzIEVsZW1lbnRJbnRlcm5hbHMgaW1wbGVtZW50cyBJRWxlbWVudEludGVybmFscyB7XG4gIGFyaWFBdG9taWM6IHN0cmluZztcbiAgYXJpYUF1dG9Db21wbGV0ZTogc3RyaW5nO1xuICBhcmlhQnVzeTogc3RyaW5nO1xuICBhcmlhQ2hlY2tlZDogc3RyaW5nO1xuICBhcmlhQ29sQ291bnQ6IHN0cmluZztcbiAgYXJpYUNvbEluZGV4OiBzdHJpbmc7XG4gIGFyaWFDb2xJbmRleFRleHQ6IHN0cmluZztcbiAgYXJpYUNvbFNwYW46IHN0cmluZztcbiAgYXJpYUN1cnJlbnQ6IHN0cmluZztcbiAgYXJpYURpc2FibGVkOiBzdHJpbmc7XG4gIGFyaWFFeHBhbmRlZDogc3RyaW5nO1xuICBhcmlhSGFzUG9wdXA6IHN0cmluZztcbiAgYXJpYUhpZGRlbjogc3RyaW5nO1xuICBhcmlhSW52YWxpZDogc3RyaW5nO1xuICBhcmlhS2V5U2hvcnRjdXRzOiBzdHJpbmc7XG4gIGFyaWFMYWJlbDogc3RyaW5nO1xuICBhcmlhTGV2ZWw6IHN0cmluZztcbiAgYXJpYUxpdmU6IHN0cmluZztcbiAgYXJpYU1vZGFsOiBzdHJpbmc7XG4gIGFyaWFNdWx0aUxpbmU6IHN0cmluZztcbiAgYXJpYU11bHRpU2VsZWN0YWJsZTogc3RyaW5nO1xuICBhcmlhT3JpZW50YXRpb246IHN0cmluZztcbiAgYXJpYVBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIGFyaWFQb3NJblNldDogc3RyaW5nO1xuICBhcmlhUHJlc3NlZDogc3RyaW5nO1xuICBhcmlhUmVhZE9ubHk6IHN0cmluZztcbiAgYXJpYVJlbGV2YW50OiBzdHJpbmc7XG4gIGFyaWFSZXF1aXJlZDogc3RyaW5nO1xuICBhcmlhUm9sZURlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFyaWFSb3dDb3VudDogc3RyaW5nO1xuICBhcmlhUm93SW5kZXg6IHN0cmluZztcbiAgYXJpYVJvd0luZGV4VGV4dDogc3RyaW5nO1xuICBhcmlhUm93U3Bhbjogc3RyaW5nO1xuICBhcmlhU2VsZWN0ZWQ6IHN0cmluZztcbiAgYXJpYVNldFNpemU6IHN0cmluZztcbiAgYXJpYVNvcnQ6IHN0cmluZztcbiAgYXJpYVZhbHVlTWF4OiBzdHJpbmc7XG4gIGFyaWFWYWx1ZU1pbjogc3RyaW5nO1xuICBhcmlhVmFsdWVOb3c6IHN0cmluZztcbiAgYXJpYVZhbHVlVGV4dDogc3RyaW5nO1xuICByb2xlOiBzdHJpbmc7XG5cbiAgc3RhdGVzOiBDdXN0b21TdGF0ZVNldDtcblxuICBzdGF0aWMgZ2V0IGlzUG9seWZpbGxlZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJlZjogSUN1c3RvbUVsZW1lbnQpIHtcbiAgICBpZiAoIXJlZiB8fCAhcmVmLnRhZ05hbWUgfHwgcmVmLnRhZ05hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSWxsZWdhbCBjb25zdHJ1Y3RvcicpO1xuICAgIH1cbiAgICBjb25zdCByb290Tm9kZSA9IHJlZi5nZXRSb290Tm9kZSgpO1xuICAgIGNvbnN0IHZhbGlkaXR5ID0gbmV3IFZhbGlkaXR5U3RhdGUoKTtcbiAgICB0aGlzLnN0YXRlcyA9IG5ldyBDdXN0b21TdGF0ZVNldChyZWYpO1xuICAgIHJlZk1hcC5zZXQodGhpcywgcmVmKTtcbiAgICB2YWxpZGl0eU1hcC5zZXQodGhpcywgdmFsaWRpdHkpO1xuICAgIGludGVybmFsc01hcC5zZXQocmVmLCB0aGlzKTtcbiAgICBpbml0QW9tKHJlZiwgdGhpcyk7XG4gICAgaW5pdFJlZihyZWYsIHRoaXMpO1xuICAgIE9iamVjdC5zZWFsKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogSWYgYXBwZW5kZWQgZnJvbSBhIERvY3VtZW50RnJhZ21lbnQsIHdhaXQgdW50aWwgaXQgaXMgY29ubmVjdGVkXG4gICAgICogYmVmb3JlIGF0dGVtcHRpbmcgdG8gdXBncmFkZSB0aGUgaW50ZXJuYWxzIGluc3RhbmNlXG4gICAgICovXG4gICAgaWYgKHJvb3ROb2RlIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgZGVmZXJVcGdyYWRlKHJvb3ROb2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBpbiBhIHZhbGlkIHN0YXRlXG4gICAqL1xuICBjaGVja1ZhbGlkaXR5KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdjaGVja1ZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgLyoqIElmIHRoZSBlbGVtZW50IHdpbGwgbm90IHZhbGlkYXRlLCBpdCBpcyBuZWNlc3NhcmlseSB2YWxpZCBieSBkZWZhdWx0ICovXG4gICAgaWYgKCF0aGlzLndpbGxWYWxpZGF0ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHZhbGlkaXR5ID0gdmFsaWRpdHlNYXAuZ2V0KHRoaXMpO1xuICAgIGlmICghdmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGNvbnN0IHZhbGlkaXR5RXZlbnQgPSBuZXcgRXZlbnQoJ2ludmFsaWQnLCB7XG4gICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICBjb21wb3NlZDogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIHJlZi5kaXNwYXRjaEV2ZW50KHZhbGlkaXR5RXZlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWRpdHkudmFsaWQ7XG4gIH1cblxuICAvKiogVGhlIGZvcm0gZWxlbWVudCB0aGUgY3VzdG9tIGVsZW1lbnQgaXMgYXNzb2NpYXRlZCB3aXRoICovXG4gIGdldCBmb3JtKCk6IEhUTUxGb3JtRWxlbWVudCB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIHJlYWQgdGhlICdmb3JtJyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBsZXQgZm9ybTtcbiAgICBpZiAocmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddID09PSB0cnVlKSB7XG4gICAgICBmb3JtID0gZmluZFBhcmVudEZvcm0ocmVmKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm07XG4gIH1cblxuICAvKiogQSBsaXN0IG9mIGFsbCByZWxhdGl2ZSBmb3JtIGxhYmVscyBmb3IgdGhpcyBlbGVtZW50ICovXG4gIGdldCBsYWJlbHMoKTogTGFiZWxzTGlzdCB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIHJlYWQgdGhlICdsYWJlbHMnIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGNvbnN0IGlkID0gcmVmLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBjb25zdCBob3N0Um9vdCA9IHJlZi5nZXRSb290Tm9kZSgpIGFzIEVsZW1lbnQ7XG4gICAgaWYgKGhvc3RSb290ICYmIGlkKSB7XG4gICAgICByZXR1cm4gaG9zdFJvb3QucXVlcnlTZWxlY3RvckFsbDxIVE1MTGFiZWxFbGVtZW50PihgW2Zvcj1cIiR7aWR9XCJdYCkgYXMgdW5rbm93biBhcyBMYWJlbHNMaXN0O1xuICAgIH1cbiAgICByZXR1cm4gW10gYXMgdW5rbm93biBhcyBMYWJlbHNMaXN0O1xuICB9XG5cbiAgLyoqIFdpbGwgcmVwb3J0IHRoZSBlbGVtZW50cyB2YWxpZGl0eSBzdGF0ZSAqL1xuICByZXBvcnRWYWxpZGl0eSgpOiBib29sZWFuIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAncmVwb3J0VmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICAvKiogSWYgdGhlIGVsZW1lbnQgd2lsbCBub3QgdmFsaWRhdGUsIGl0IGlzIHZhbGlkIGJ5IGRlZmF1bHQgKi9cbiAgICBpZiAoIXRoaXMud2lsbFZhbGlkYXRlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgdmFsaWQgPSB0aGlzLmNoZWNrVmFsaWRpdHkoKTtcbiAgICBjb25zdCBhbmNob3IgPSB2YWxpZGF0aW9uQW5jaG9yTWFwLmdldCh0aGlzKTtcbiAgICBpZiAoYW5jaG9yICYmICFyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAncmVwb3J0VmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIXZhbGlkICYmIGFuY2hvcikge1xuICAgICAgcmVmLmZvY3VzKCk7XG4gICAgICBhbmNob3IuZm9jdXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIGVsZW1lbnQncyB2YWx1ZSB3aXRoaW4gdGhlIGZvcm0gKi9cbiAgc2V0Rm9ybVZhbHVlKHZhbHVlOiBzdHJpbmcgfCBGb3JtRGF0YSB8IG51bGwpOiB2b2lkIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnc2V0Rm9ybVZhbHVlJyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgcmVtb3ZlSGlkZGVuSW5wdXRzKHRoaXMpO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmICEodmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSkpIHtcbiAgICAgIGlmIChyZWYuZ2V0QXR0cmlidXRlKCduYW1lJykpIHtcbiAgICAgICAgY29uc3QgaGlkZGVuSW5wdXQgPSBjcmVhdGVIaWRkZW5JbnB1dChyZWYsIHRoaXMpO1xuICAgICAgICBoaWRkZW5JbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICBBcnJheS5mcm9tKHZhbHVlKVxuICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgIC5mb3JFYWNoKChbZm9ybURhdGFLZXksIGZvcm1EYXRhVmFsdWVdKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBmb3JtRGF0YVZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgaGlkZGVuSW5wdXQgPSBjcmVhdGVIaWRkZW5JbnB1dChyZWYsIHRoaXMpO1xuICAgICAgICAgICAgaGlkZGVuSW5wdXQubmFtZSA9IGZvcm1EYXRhS2V5O1xuICAgICAgICAgICAgaGlkZGVuSW5wdXQudmFsdWUgPSBmb3JtRGF0YVZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlZlZhbHVlTWFwLnNldChyZWYsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBlbGVtZW50J3MgdmFsaWRpdHkuIFRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3RcbiAgICogcmVmbGVjdGluZyB0aGUgY2hhbmdlcyB0byBiZSBtYWRlIHRvIHRoZSBlbGVtZW50J3MgdmFsaWRpdHkuIElmIHRoZSBlbGVtZW50IGlzIGludmFsaWQsXG4gICAqIHRoZSBzZWNvbmQgYXJndW1lbnQgc2V0cyB0aGUgZWxlbWVudCdzIHZhbGlkYXRpb24gbWVzc2FnZS5cbiAgICpcbiAgICogSWYgdGhlIGZpZWxkIGlzIHZhbGlkIGFuZCBhIG1lc3NhZ2UgaXMgc3BlY2lmaWVkLCB0aGUgbWV0aG9kIHdpbGwgdGhyb3cgYSBUeXBlRXJyb3IuXG4gICAqL1xuICBzZXRWYWxpZGl0eShcbiAgICB2YWxpZGl0eUNoYW5nZXM6IFBhcnRpYWw8Z2xvYmFsVGhpcy5WYWxpZGl0eVN0YXRlPixcbiAgICB2YWxpZGF0aW9uTWVzc2FnZT86IHN0cmluZyxcbiAgICBhbmNob3I/OiBIVE1MRWxlbWVudFxuICApIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnc2V0VmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBpZiAoIXZhbGlkaXR5Q2hhbmdlcykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgXCJGYWlsZWQgdG8gZXhlY3V0ZSAnc2V0VmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiXG4gICAgICApO1xuICAgIH1cbiAgICB2YWxpZGF0aW9uQW5jaG9yTWFwLnNldCh0aGlzLCBhbmNob3IpO1xuICAgIGNvbnN0IHZhbGlkaXR5ID0gdmFsaWRpdHlNYXAuZ2V0KHRoaXMpO1xuICAgIGNvbnN0IHZhbGlkaXR5Q2hhbmdlc09iajogUGFydGlhbDxWYWxpZGl0eVN0YXRlPiA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIHZhbGlkaXR5Q2hhbmdlcykge1xuICAgICAgdmFsaWRpdHlDaGFuZ2VzT2JqW2tleV0gPSB2YWxpZGl0eUNoYW5nZXNba2V5XTtcbiAgICB9XG4gICAgaWYgKE9iamVjdC5rZXlzKHZhbGlkaXR5Q2hhbmdlc09iaikubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRWYWxpZCh2YWxpZGl0eSk7XG4gICAgfVxuICAgIGNvbnN0IGNoZWNrID0geyAuLi52YWxpZGl0eSwgLi4udmFsaWRpdHlDaGFuZ2VzT2JqIH07XG4gICAgZGVsZXRlIGNoZWNrLnZhbGlkO1xuICAgIGNvbnN0IHsgdmFsaWQgfSA9IHJlY29uY2lsZVZhbGlkaXR5KHZhbGlkaXR5LCBjaGVjaywgdGhpcy5mb3JtKTtcblxuICAgIGlmICghdmFsaWQgJiYgIXZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSBzZWNvbmQgYXJndW1lbnQgc2hvdWxkIG5vdCBiZSBlbXB0eSBpZiBvbmUgb3IgbW9yZSBmbGFncyBpbiB0aGUgZmlyc3QgYXJndW1lbnQgYXJlIHRydWUuYFxuICAgICAgKTtcbiAgICB9XG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VNYXAuc2V0KHRoaXMsIHZhbGlkID8gJycgOiB2YWxpZGF0aW9uTWVzc2FnZSk7XG5cbiAgICAvLyBjaGVjayB0byBtYWtlIHN1cmUgdGhlIGhvc3QgZWxlbWVudCBpcyBjb25uZWN0ZWQgYmVmb3JlIGFkZGluZyBhdHRyaWJ1dGVzXG4gICAgLy8gYmVjYXVzZSBzYWZhcmkgZG9lc250IGFsbG93IGVsZW1lbnRzIHRvIGhhdmUgYXR0cmlidXRlcyBhZGRlZCBpbiB0aGUgY29uc3RydWN0b3JcbiAgICBpZiAocmVmLmlzQ29ubmVjdGVkKSB7XG4gICAgICByZWYudG9nZ2xlQXR0cmlidXRlKCdpbnRlcm5hbHMtaW52YWxpZCcsICF2YWxpZCk7XG4gICAgICByZWYudG9nZ2xlQXR0cmlidXRlKCdpbnRlcm5hbHMtdmFsaWQnLCB2YWxpZCk7XG4gICAgICByZWYuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCBgJHshdmFsaWR9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkaXR5VXBncmFkZU1hcC5zZXQocmVmLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2hhZG93Um9vdCgpOiBTaGFkb3dSb290IHwgbnVsbCB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICBjb25zdCBzaGFkb3dSb290ID0gc2hhZG93Um9vdE1hcC5nZXQocmVmKTtcbiAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgcmV0dXJuIHNoYWRvd1Jvb3Q7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqIFRoZSBlbGVtZW50J3MgdmFsaWRhdGlvbiBtZXNzYWdlIHNldCBkdXJpbmcgYSBjYWxsIHRvIEVsZW1lbnRJbnRlcm5hbHMuc2V0VmFsaWRpdHkgKi9cbiAgZ2V0IHZhbGlkYXRpb25NZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIHJlYWQgdGhlICd2YWxpZGF0aW9uTWVzc2FnZScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgcmV0dXJuIHZhbGlkYXRpb25NZXNzYWdlTWFwLmdldCh0aGlzKTtcbiAgfVxuXG4gIC8qKiBUaGUgY3VycmVudCB2YWxpZGl0eSBzdGF0ZSBvZiB0aGUgb2JqZWN0ICovXG4gIGdldCB2YWxpZGl0eSgpOiBnbG9iYWxUaGlzLlZhbGlkaXR5U3RhdGUge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAndmFsaWRpdHknIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGNvbnN0IHZhbGlkaXR5ID0gdmFsaWRpdHlNYXAuZ2V0KHRoaXMpO1xuICAgIHJldHVybiB2YWxpZGl0eTtcbiAgfVxuXG4gIC8qKiBJZiB0cnVlIHRoZSBlbGVtZW50IHdpbGwgcGFydGljaXBhdGUgaW4gYSBmb3JtJ3MgY29uc3RyYWludCB2YWxpZGF0aW9uLiAqL1xuICBnZXQgd2lsbFZhbGlkYXRlKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAnd2lsbFZhbGlkYXRlJyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBpZiAocmVmLmRpc2FibGVkIHx8IHJlZi5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHwgcmVmLmhhc0F0dHJpYnV0ZSgncmVhZG9ubHknKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vLyAtLS0gRGlzYWJsaW5nIHRoaXMgdHlwZSBkZWNsYXJhdGlvbiB0byBhdm9pZCBjb25mbGljdCB3aXRoIGV4dGVybmFsIGVsZW1lbnQtaW50ZXJuYWxzLXBvbHlmaWxsIHR5cGVzIC0tLVxuLy8gZGVjbGFyZSBnbG9iYWwge1xuLy8gICBpbnRlcmZhY2UgQ3VzdG9tRWxlbWVudENvbnN0cnVjdG9yIHtcbi8vICAgICBmb3JtQXNzb2NpYXRlZD86IGJvb2xlYW47XG4vLyAgIH1cblxuLy8gICBpbnRlcmZhY2UgV2luZG93IHtcbi8vICAgICBFbGVtZW50SW50ZXJuYWxzOiB0eXBlb2YgRWxlbWVudEludGVybmFscztcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50SW50ZXJuYWxzU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICBpZiAoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAhd2luZG93LkVsZW1lbnRJbnRlcm5hbHMgfHxcbiAgICAhSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEludGVybmFsc1xuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjbGFzcyBFbGVtZW50SW50ZXJuYWxzRmVhdHVyZURldGVjdGlvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5pbnRlcm5hbHMgPSB0aGlzLmF0dGFjaEludGVybmFscygpO1xuICAgIH1cbiAgfVxuICBjb25zdCByYW5kb21OYW1lID0gYGVsZW1lbnQtaW50ZXJuYWxzLWZlYXR1cmUtZGV0ZWN0aW9uLSR7TWF0aC5yYW5kb20oKVxuICAgIC50b1N0cmluZygzNilcbiAgICAucmVwbGFjZSgvW15hLXpdKy9nLCAnJyl9YDtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHJhbmRvbU5hbWUsIEVsZW1lbnRJbnRlcm5hbHNGZWF0dXJlRGV0ZWN0aW9uKTtcbiAgY29uc3QgZmVhdHVyZURldGVjdGlvbkVsZW1lbnQgPSBuZXcgRWxlbWVudEludGVybmFsc0ZlYXR1cmVEZXRlY3Rpb24oKTtcbiAgcmV0dXJuIFtcbiAgICAnc2hhZG93Um9vdCcsXG4gICAgJ2Zvcm0nLFxuICAgICd3aWxsVmFsaWRhdGUnLFxuICAgICd2YWxpZGl0eScsXG4gICAgJ3ZhbGlkYXRpb25NZXNzYWdlJyxcbiAgICAnbGFiZWxzJyxcbiAgICAnc2V0Rm9ybVZhbHVlJyxcbiAgICAnc2V0VmFsaWRpdHknLFxuICAgICdjaGVja1ZhbGlkaXR5JyxcbiAgICAncmVwb3J0VmFsaWRpdHknLFxuICBdLmV2ZXJ5KChwcm9wKSA9PiBwcm9wIGluIGZlYXR1cmVEZXRlY3Rpb25FbGVtZW50LmludGVybmFscyk7XG59XG5cbi8vIE9ubHkgaW5jbHVkZXMgdGhpcyBwb2x5ZmlsbCBpZiB3ZSBhcmUgaW4gYSBqZXN0IHJ1bm5lciBvciBub3QgaW4gU1NSXG5pZiAoXG4gICFpc1NlcnZlciB8fFxuICAoKHByb2Nlc3MgYXMgYW55KT8uZW52LkpFU1RfV09SS0VSX0lEICE9PSB1bmRlZmluZWQgJiYgKHByb2Nlc3MgYXMgYW55KT8uZW52Lk5PREVfRU5WID09PSAndGVzdCcpXG4pIHtcbiAgaWYgKCFpc0VsZW1lbnRJbnRlcm5hbHNTdXBwb3J0ZWQoKSkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLyoqIEB0cy1leHBlY3QtZXJyb3I6IHdlIG5lZWQgdG8gcmVwbGFjZSB0aGUgZGVmYXVsdCBFbGVtZW50SW50ZXJuYWxzICovXG4gICAgICB3aW5kb3cuRWxlbWVudEludGVybmFscyA9IEVsZW1lbnRJbnRlcm5hbHM7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBDdXN0b21FbGVtZW50UmVnaXN0cnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBkZWZpbmUgPSBDdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlLmRlZmluZTtcbiAgICAgIEN1c3RvbUVsZW1lbnRSZWdpc3RyeS5wcm90b3R5cGUuZGVmaW5lID0gZnVuY3Rpb24gKG5hbWUsIGNvbnN0cnVjdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChjb25zdHJ1Y3Rvci5mb3JtQXNzb2NpYXRlZCkge1xuICAgICAgICAgIGNvbnN0IGNvbm5lY3RlZENhbGxiYWNrID0gY29uc3RydWN0b3IucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrO1xuICAgICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghY29ubmVjdGVkQ2FsbGJhY2tNYXAuaGFzKHRoaXMpKSB7XG4gICAgICAgICAgICAgIGNvbm5lY3RlZENhbGxiYWNrTWFwLnNldCh0aGlzLCB0cnVlKTtcblxuICAgICAgICAgICAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICBzZXREaXNhYmxlZCh0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29ubmVjdGVkQ2FsbGJhY2sgIT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25uZWN0ZWRDYWxsYmFjay5hcHBseSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFsd2F5cyB1cGdyYWRlSW50ZXJuYWxzIGluIGNvbm5lY3RlZENhbGxiYWNrIGluc3RlYWQgb2YgY29uc3RydWN0b3JcbiAgICAgICAgICAgIHVwZ3JhZGVJbnRlcm5hbHModGhpcyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmluZS5jYWxsKHRoaXMsIG5hbWUsIGNvbnN0cnVjdG9yLCBvcHRpb25zKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBhIGN1c3RvbSBlbGVtZW50LiBDYWxsaW5nIHRoaXMgbWV0aG9kXG4gICAgICogb24gYSBidWlsdC1pbiBlbGVtZW50IHdpbGwgdGhyb3cgYW4gZXJyb3IuXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hJbnRlcm5hbHMgPSBmdW5jdGlvbiAoKTogSUVsZW1lbnRJbnRlcm5hbHMge1xuICAgICAgICBpZiAoIXRoaXMudGFnTmFtZSkge1xuICAgICAgICAgIC8qKiBUaGlzIGhhcHBlbnMgaW4gdGhlIExpdFNTUiBlbnZpcm9ubWVudC4gSGVyZSB3ZSBjYW4gZ2VuZXJhbGx5IGlnbm9yZSBpbnRlcm5hbHMgZm9yIG5vdyAqL1xuICAgICAgICAgIHJldHVybiB7fSBhcyBvYmplY3QgYXMgSUVsZW1lbnRJbnRlcm5hbHM7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50YWdOYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ2F0dGFjaEludGVybmFscycgb24gJ0hUTUxFbGVtZW50JzogVW5hYmxlIHRvIGF0dGFjaCBFbGVtZW50SW50ZXJuYWxzIHRvIG5vbi1jdXN0b20gZWxlbWVudHMuYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGludGVybmFsc01hcC5oYXModGhpcykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICAgICAgYERPTUV4Y2VwdGlvbjogRmFpbGVkIHRvIGV4ZWN1dGUgJ2F0dGFjaEludGVybmFscycgb24gJ0hUTUxFbGVtZW50JzogRWxlbWVudEludGVybmFscyBmb3IgdGhlIHNwZWNpZmllZCBlbGVtZW50IHdhcyBhbHJlYWR5IGF0dGFjaGVkLmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudEludGVybmFscyh0aGlzKSBhcyBJRWxlbWVudEludGVybmFscztcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWlubmVyLWRlY2xhcmF0aW9uc1xuICAgICAgZnVuY3Rpb24gYXR0YWNoU2hhZG93T2JzZXJ2ZXIoLi4uYXJncykge1xuICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gYXR0YWNoU2hhZG93LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICBzaGFkb3dSb290TWFwLnNldCh0aGlzLCBzaGFkb3dSb290KTtcblxuICAgICAgICBpZiAobXV0YXRpb25PYnNlcnZlckV4aXN0cygpKSB7XG4gICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvYnNlcnZlckNhbGxiYWNrKTtcbiAgICAgICAgICBpZiAod2luZG93LlNoYWR5RE9NKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMsIG9ic2VydmVyQ29uZmlnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzaGFkb3dSb290LCBvYnNlcnZlckNvbmZpZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNoYWRvd0hvc3RzTWFwLnNldCh0aGlzLCBvYnNlcnZlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoYWRvd1Jvb3Q7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGF0dGFjaFNoYWRvdyA9IEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFNoYWRvdztcbiAgICAgIEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFNoYWRvdyA9IGF0dGFjaFNoYWRvd09ic2VydmVyO1xuICAgIH1cblxuICAgIGlmIChtdXRhdGlvbk9ic2VydmVyRXhpc3RzKCkpIHtcbiAgICAgIGNvbnN0IGRvY3VtZW50T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvYnNlcnZlckNhbGxiYWNrKTtcbiAgICAgIGRvY3VtZW50T2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIG9ic2VydmVyQ29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBLZWVwcyB0aGUgcG9seWZpbGwgZnJvbSB0aHJvd2luZyBpbiBlbnZpcm9ubWVudHMgd2hlcmUgSFRNTEZvcm1FbGVtZW50XG4gICAgICogaXMgdW5kZWZpbmVkIGxpa2UgaW4gYSBzZXJ2ZXIgZW52aXJvbm1lbnRcbiAgICAgKi9cbiAgICBpZiAodHlwZW9mIEhUTUxGb3JtRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHBhdGNoRm9ybVByb3RvdHlwZSgpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93LkN1c3RvbVN0YXRlU2V0KSB7XG4gICAgICB3aW5kb3cuQ3VzdG9tU3RhdGVTZXQgPSBDdXN0b21TdGF0ZVNldDtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXdpbmRvdy5DdXN0b21TdGF0ZVNldCkge1xuICAgIHdpbmRvdy5DdXN0b21TdGF0ZVNldCA9IEN1c3RvbVN0YXRlU2V0O1xuICAgIGNvbnN0IGF0dGFjaEludGVybmFscyA9IEhUTUxFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hJbnRlcm5hbHM7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEludGVybmFscyA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICBjb25zdCBpbnRlcm5hbHMgPSBhdHRhY2hJbnRlcm5hbHMuY2FsbCh0aGlzLCBhcmdzKTtcbiAgICAgIGludGVybmFscy5zdGF0ZXMgPSBuZXcgQ3VzdG9tU3RhdGVTZXQodGhpcyk7XG4gICAgICByZXR1cm4gaW50ZXJuYWxzO1xuICAgIH07XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBDb25zdHJ1Y3RvciwgTXRlRWxlbWVudCB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTGFuZ0ludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBsYW5nIHVzZWQgdG8gZm9ybWF0IGNvbnRlbnQgcmVuZGVyZWQgYnkgdGhpcyBlbGVtZW50XG4gICAqIEBhdHRyIGxhbmdcbiAgICovXG4gIGxhbmc6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IExhbmdNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgTGFuZ0VsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBsYW5nIHVzZWQgdG8gZm9ybWF0IGNvbnRlbnQgcmVuZGVyZWQgYnkgdGhpcyBlbGVtZW50XG4gICAgICogQGF0dHIgbGFuZ1xuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbGFuZzogc3RyaW5nO1xuICB9XG4gIHJldHVybiBMYW5nRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxMYW5nSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQgfSBmcm9tICcuLi8nO1xuXG4vKipcbiAqIFNwZWNpYWwgY2xhc3MgdGhhdCBoZWxwcyBmcmFtZXdvcmsgd3JhcHBlciBzdHlsaW5nIGtub3cgd2hlbiBhIHdyYXBwZXIgZnJhbWV3b3JrXG4gKiBoYXMgZmluaXNoZWQgcmVuZGVyaW5nIGFuZCB0aHVzIGVsZW1lbnRzIGNhbiBub3cgYmUgc2hvd24gd2l0aG91dCBhIEZPVUMuIFRoaXNcbiAqIG9jY3VycyBpbiB0aGUgc2NlbmFyaW8gd2hlcmUgTGl0IGVsZW1lbnRzIHJlZ2lzdGVyIGFuZCByZW5kZXIgYmVmb3JlIHRoZVxuICogd3JhcHBlciBmcmFtZXdvcmsgcGFzc2VzIGVsZW1lbnRzIHRoZWlyIHByb3BzLlxuICovXG5leHBvcnQgY29uc3QgV2FpdEZvckZyYW1ld29ya01peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBXYWl0Rm9yRnJhbWV3b3JrRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKiBAaWdub3JlICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgYXR0cmlidXRlOiAnbXRlLWZ3LXJlbmRlcmVkJywgcmVmbGVjdDogdHJ1ZSB9KSBfZndSZW5kZXJlZDtcbiAgfVxuICByZXR1cm4gV2FpdEZvckZyYW1ld29ya0VsZW1lbnQgYXMgVDtcbn07XG4iLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2JveC1zaXppbmc6Ym9yZGVyLWJveH1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUFBQSxlQUEwQjs7O0FDQzFCLHdCQUFnQztBQUNoQyxpQkFBMkI7QUFDM0IsSUFBQUMsaUJBQWlEOzs7QUNIakQsb0JBQXVCO0FBR3ZCLElBQU0sY0FBaUQ7QUFBQSxFQUNyRCxHQUFHO0FBQUEsRUFDSCxJQUFJLENBQUMsY0FBYyxhQUFhO0FBQUEsRUFDaEMsSUFBSSxDQUFDLGFBQWEsY0FBYztBQUFBLEVBQ2hDLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLEdBQUc7QUFBQSxFQUNILElBQUksQ0FBQyxlQUFlLGNBQWM7QUFBQSxFQUNsQyxJQUFJLENBQUMsY0FBYyxlQUFlO0FBQUEsRUFDbEMsSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sR0FBRztBQUFB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bkU7QUFNQSxRQUFJLE9BQU8sb0JBQW9CLGFBQWE7QUFDMUMseUJBQW1CO0FBQUEsSUFDckI7QUFFQSxRQUFJLE9BQU8sV0FBVyxlQUFlLENBQUMsT0FBTyxnQkFBZ0I7QUFDM0QsYUFBTyxpQkFBaUI7QUFBQSxJQUMxQjtBQUFBLEVBQ0YsV0FBVyxPQUFPLFdBQVcsZUFBZSxDQUFDLE9BQU8sZ0JBQWdCO0FBQ2xFLFdBQU8saUJBQWlCO0FBQ3hCLFVBQU0sa0JBQWtCLFlBQVksVUFBVTtBQUM5QyxnQkFBWSxVQUFVLGtCQUFrQixZQUFhLE1BQU07QUFDekQsWUFBTSxZQUFZLGdCQUFnQixLQUFLLE1BQU0sSUFBSTtBQUNqRCxnQkFBVSxTQUFTLElBQUksZUFBZSxJQUFJO0FBQzFDLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNGOzs7QUMxY0EsSUFBQUMsc0JBQXlCOzs7QUNEekIsSUFBQUMsc0JBQXlCOzs7QUNBekIsSUFBQUMsZUFBdUQ7OztBQ0F2RCxJQUFBQyxlQUFvQjtBQUFhLElBQU1DLFVBQVM7OztBN0VPekMsSUFBTSxTQUFOLGNBQXFCLFdBQVc7RUFXckMsU0FBUztBQUNQLFdBQU8sb0JBQU8sS0FBSyxjQUFjO0VBQ25DO0FBQ0Y7QUFkYSxPQUNKLFNBQVM7RUFDZEM7RUFDQTtBQU1GO0FBVFcsU0FBTjtFQUROLGNBQWMsU0FBUztHQUNYOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfbGl0IiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X3N0eWxlcyIsICJhY2MiLCAicHJvcCIsICJ2YWx1ZSIsICJzdHlsZXMiLCAiZGVwIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfc3R5bGVzIiwgImdldHRlckNvbmZpZyIsICJvYnNlcnZlciIsICJlIiwgInNldHRlckNvbmZpZyIsICJjc3NWYXIiLCAib2JzZXJ2ZXIiLCAicG9ydGFsQ29udHJvbGxlciIsICJlbGVtZW50IiwgInNjcm9sbFgiLCAic2Nyb2xsWSIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfY29udGV4dCIsICJjb250ZXh0IiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X3N0eWxlcyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9pZl9kZWZpbmVkIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X3N0eWxlcyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfY2xhc3NfbWFwIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAibm9kZSIsICJvYnNlcnZlciIsICJzdGF0ZSIsICJpbXBvcnRfaXNfc2VydmVyIiwgIm9ic2VydmVyIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAic3R5bGVzIl0KfQo=