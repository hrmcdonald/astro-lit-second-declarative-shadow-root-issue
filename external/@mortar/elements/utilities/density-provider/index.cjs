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

// src/utilities/density-provider/index.ts
var density_provider_exports = {};
__export(density_provider_exports, {
  MteDensityProvider: () => MteDensityProvider,
  densityContext: () => densityContext
});
module.exports = __toCommonJS(density_provider_exports);

// src/utilities/density-provider/density-provider.element.ts
var import_decorators19 = require("lit/decorators.js");
var import_context4 = require("@lit-labs/context");
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
var parseSelectors = (styles9, selectors) => {
  if (!selectors) {
    return styles9;
  } else {
    return `${styles9}${selectors.reduce((acc, { selector, selectorWrapper, style }) => {
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
  let styles9 = "";
  [...instanceStylesMap.entries()].filter(([key, _]) => key !== "se" && key !== "sp").sort((a, b) => b[0] - a[0]).forEach(([_, selectors]) => {
    styles9 = parseSelectors(styles9, selectors);
  });
  styles9 = `${styles9}${parseSelectors("", instanceStylesMap.get("se"))}${parseSelectors(
    "",
    instanceStylesMap.get("sp")
  )}`;
  return styles9;
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

// src/utilities/density-provider/density.context.ts
var import_context3 = require("@lit-labs/context");
var densityContext = (0, import_context3.createContext)("MTE_DENSITY");

// src/utilities/density-provider/density-provider.styles.ts
var import_lit14 = require("lit");
var styles8 = import_lit14.css`:host{box-sizing:border-box;display:contents}:host([_density=compact]){--mte-space-xxs:var(--mte-space-compact-xxs);--mte-space-xs:var(--mte-space-compact-xs);--mte-space-sm:var(--mte-space-compact-sm);--mte-space-md:var(--mte-space-compact-md);--mte-space-lg:var(--mte-space-compact-lg);--mte-space-xl:var(--mte-space-compact-xl);--mte-space-xxl:var(--mte-space-compact-xxl);--mte-space-xxxl:var(--mte-space-compact-xxxl)}:host([_density=comfy]){--mte-space-xxs:var(--mte-space-comfy-xxs);--mte-space-xs:var(--mte-space-comfy-xs);--mte-space-sm:var(--mte-space-comfy-sm);--mte-space-md:var(--mte-space-comfy-md);--mte-space-lg:var(--mte-space-comfy-lg);--mte-space-xl:var(--mte-space-comfy-xl);--mte-space-xxl:var(--mte-space-comfy-xxl);--mte-space-xxxl:var(--mte-space-comfy-xxxl)}:host([_density=roomy]){--mte-space-xxs:var(--mte-space-roomy-xxs);--mte-space-xs:var(--mte-space-roomy-xs);--mte-space-sm:var(--mte-space-roomy-sm);--mte-space-md:var(--mte-space-roomy-md);--mte-space-lg:var(--mte-space-roomy-lg);--mte-space-xl:var(--mte-space-roomy-xl);--mte-space-xxl:var(--mte-space-roomy-xxl);--mte-space-xxxl:var(--mte-space-roomy-xxxl)}`;

// src/utilities/density-provider/density-provider.element.ts
var MteDensityProvider = class extends MteElement {
  handleDensityChange() {
    if (this.density === void 0) {
      this.requestUpdate("density", null);
    }
    this.densityContextProvider?.setValue(this.density);
    if (this.density) {
      this.setAttribute("_density", this.density);
    } else {
      this.removeAttribute("_density");
    }
  }
  constructor() {
    super();
    if (!isSsr()) {
      this.densityContextProvider = new import_context4.ContextProvider(this, {
        context: densityContext,
        initialValue: void 0
      });
    }
  }
  render() {
    return import_lit15.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteDensityProvider.styles = [styles8];
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteDensityProvider.prototype, "density", 2);
__decorateClass([
  onUpdate("density", { on: "both" })
], MteDensityProvider.prototype, "handleDensityChange", 1);
MteDensityProvider = __decorateClass([
  defineElement("mte-density-provider")
], MteDensityProvider);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL3V0aWxpdGllcy9kZW5zaXR5LXByb3ZpZGVyL2luZGV4LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZGVuc2l0eS1wcm92aWRlci9kZW5zaXR5LXByb3ZpZGVyLmVsZW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYmFzZS1jbGFzc2VzL210ZS5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9jc3MtaW4tanMvY3NzLWluLWpzLnByb3BlcnR5LW1hcHBlcnMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Nzcy1pbi1qcy9jc3MtaW4tanMudXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9lbnZpcm9ubWVudC51dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Zvcm0udXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9yZWFjdGl2ZS1zaWduYWwudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYmFzZS1jbGFzc2VzL2NvbnRlbnQuYmFzZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9hdHRyaWJ1dGUtY29udmVydGVyL3Jlc3BvbnNpdmUtYXR0cmlidXRlLmNvbnZlcnRlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb25zdGFudHMvaGViLWxvZ28udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc2VydmljZXMvdGhlbWUuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy9wb3J0YWwuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy9oaXN0b3J5LWFwaS5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZpY2VzL2xvY2FsaXplLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24vYnV0dG9uLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pY29uL2ljb24ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdG9vbGJhci90b29sYmFyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jYXJkL2NhcmQucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RyZWUvdHJlZS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGFnL3RhZy5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYmFkZ2UvYmFkZ2UucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2xpbmsvbGluay5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYWxlcnQvYWxlcnQucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2lucHV0L2lucHV0LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9kcmF3ZXIvZHJhd2VyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hc2lkZS9hc2lkZS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi1pdGVtLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9tb2RhbC9tb2RhbC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvY2hlY2tib3gvY2hlY2tib3gucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3JhZGlvL3JhZGlvLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXYvbmF2LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zd2l0Y2gvc3dpdGNoLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXRpdmUtc2VsZWN0L25hdGl2ZS1zZWxlY3QucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RleHRhcmVhL3RleHRhcmVhLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9za2VsZXRvbi9za2VsZXRvbi5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc2xpZGVyL3NsaWRlci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcmFuZ2Utc2xpZGVyL3JhbmdlLXNsaWRlci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc2VnbWVudGVkLWNvbnRyb2wvc2VnbWVudGVkLWNvbnRyb2wucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXQuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5kZWNvcmF0b3IudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXQuY29udGV4dC50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb250cm9sbGVycy9hcHBsaWVkLXByZXNldC1jb250ZXh0LmNvbnRyb2xsZXIudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvZGVjb3JhdG9ycy9vbi11cGRhdGUuZGVjb3JhdG9yLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2RlY29yYXRvcnMvZGVmaW5lLWVsZW1lbnQuZGVjb3JhdG9yLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9kZW5zaXR5Lm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZGlzYWJsZWQubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2ludmVyc2UubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2ludmVyc2UubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy90YWJpbmRleC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvc3R5bGUtcGFydHMubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9idXR0b24ubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9vdmVybGF5Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9vdmVybGF5Lm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2ZpZWxkc2V0Lm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2Zvcm0tZmllbGQubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9hdXRvLWFjdGl2ZS1saW5rLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9zbG90LW9ic2VydmVyLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9jaGVja2JveC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvbWFwcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvYW9tLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9tdXRhdGlvbi1vYnNlcnZlcnMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL3V0aWxzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9WYWxpZGl0eVN0YXRlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9DdXN0b21TdGF0ZVNldC50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL3BhdGNoLWZvcm0tcHJvdG90eXBlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9lbGVtZW50LWludGVybmFscy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvbGFuZy5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvd2FpdC1mb3ItZncubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc3R5bGVzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3N0eWxlcy9iYXNlLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvdXRpbGl0aWVzL2RlbnNpdHktcHJvdmlkZXIvZGVuc2l0eS5jb250ZXh0LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZGVuc2l0eS1wcm92aWRlci9kZW5zaXR5LXByb3ZpZGVyLnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0ICogZnJvbSAnLi9kZW5zaXR5LXByb3ZpZGVyLmVsZW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kZW5zaXR5LmNvbnRleHQnO1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnQGxpdC1sYWJzL2NvbnRleHQnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBkZWZpbmVFbGVtZW50LCBEZW5zaXR5T3B0aW9ucywgaXNTc3IsIE10ZUVsZW1lbnQsIG9uVXBkYXRlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBkZW5zaXR5Q29udGV4dCB9IGZyb20gJy4vZGVuc2l0eS5jb250ZXh0JztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vZGVuc2l0eS1wcm92aWRlci5zdHlsZXMnO1xuXG4vKipcbiAqIEBzbG90IC0gRGVmYXVsdCBzbG90dGVkIGNvbnRlbnRcbiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS1kZW5zaXR5LXByb3ZpZGVyJylcbmV4cG9ydCBjbGFzcyBNdGVEZW5zaXR5UHJvdmlkZXIgZXh0ZW5kcyBNdGVFbGVtZW50IHtcbiAgc3RhdGljIHN0eWxlcyA9IFtzdHlsZXNdO1xuXG4gIC8qKiBUaGUgZGVuc2l0eSB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHRvIGFsbCBjaGlsZCBlbGVtZW50cyAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGRlbnNpdHk6IERlbnNpdHlPcHRpb25zO1xuXG4gIHByaXZhdGUgZGVuc2l0eUNvbnRleHRQcm92aWRlcjogQ29udGV4dFByb3ZpZGVyPHsgX19jb250ZXh0X186IERlbnNpdHlPcHRpb25zIH0+O1xuXG4gIEBvblVwZGF0ZSgnZGVuc2l0eScsIHsgb246ICdib3RoJyB9KVxuICBwcml2YXRlIGhhbmRsZURlbnNpdHlDaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuZGVuc2l0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ2RlbnNpdHknLCBudWxsKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgY29udGV4dFxuICAgIHRoaXMuZGVuc2l0eUNvbnRleHRQcm92aWRlcj8uc2V0VmFsdWUodGhpcy5kZW5zaXR5KTtcblxuICAgIC8vIEhhbmRsZSBhdHRyaWJ1dGUgZm9yIHN0eWxpbmcgcHVycG9zZXNcbiAgICBpZiAodGhpcy5kZW5zaXR5KSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnX2RlbnNpdHknLCB0aGlzLmRlbnNpdHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnX2RlbnNpdHknKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gV2FpdCB0byBpbml0IGNvbnRleHQgcHJvdmlkZXIgdW50aWwgaGVyZSBzbyB3ZSBjYW4gYXZvaWQgZG9pbmcgc28gZHVyaW5nIFNTUiBmb3Igbm93XG4gICAgLy8gVE9ETyhyZWVjZSk6IGluaXQgbm9ybWFsbHkgd2hlbiBldmVudHMgYXJlIHN1cHBvcnRlZCBieSBTU1I6IGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8zMzY1XG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICB0aGlzLmRlbnNpdHlDb250ZXh0UHJvdmlkZXIgPSBuZXcgQ29udGV4dFByb3ZpZGVyKHRoaXMsIHtcbiAgICAgICAgY29udGV4dDogZGVuc2l0eUNvbnRleHQsXG4gICAgICAgIGluaXRpYWxWYWx1ZTogdW5kZWZpbmVkLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYCR7dGhpcy5pbnN0YW5jZVN0eWxlc308c2xvdD48L3Nsb3Q+YDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdtdGUtZGVuc2l0eS1wcm92aWRlcic6IE10ZURlbnNpdHlQcm92aWRlcjtcbiAgfVxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIHdjL25vLXNlbGYtY2xhc3MgKi9cbmltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgc2VsZWN0b3JGYWN0b3J5LCBTZWxlY3RvckZhY3RvcnkgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQge1xuICBjb25zdHJ1Y3RJbnN0YW5jZVN0eWxlcyxcbiAgZ2VuZXJhdGVTZWxlY3RvcnNGcm9tU3R5bGVNYXAsXG4gIFNlbGVjdG9yU3R5bGVzLFxuICBTdHlsZU1hcCxcbiAgVW5zdWJzY3JpYmVyLFxufSBmcm9tICcuLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgdW5zYWZlSFRNTCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvdW5zYWZlLWh0bWwuanMnO1xuaW1wb3J0IHsgTW9ydGFyUHJlc2V0VGhlbWUgfSBmcm9tICcuLi9wcmVzZXRzJztcblxuLy8gRGlzYWJsZSB0aGlzIHdhcm5pbmcgZm9yIG5vdyBieSBwcmUtbWFya2luZyBpdCBhcyBpc3N1ZWQgc28gdXNlcnMgZG9uJ3QgaGF2ZSB0byBzZWUgaXRcbi8vIFRPRE86IEFzayBsaXQgdGVhbSB3aHkgdGhpcyBpcyB0aHJvd24gZXZlcnl3aGVyZSBhbmQgd2hhdCBhbHRlcm5hdGl2ZXMgYXJlIGZvciBwcmVzZXQgc29sdXRpb25cbmdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MgPz89IG5ldyBTZXQoKTtcbmdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MuYWRkKFxuICAnT3ZlcnJpZGluZyBSZWFjdGl2ZUVsZW1lbnQuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKCkgaXMgZGVwcmVjYXRlZC4gVGhlIG92ZXJyaWRlIHdpbGwgbm90IGJlIGNhbGxlZCB3aXRoIHN0YW5kYXJkIGRlY29yYXRvcnMgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvbm8tb3ZlcnJpZGUtZ2V0LXByb3BlcnR5LWRlc2NyaXB0b3IgZm9yIG1vcmUgaW5mb3JtYXRpb24uJ1xuKTtcblxuZXhwb3J0IGNsYXNzIE10ZUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHJpdmF0ZSBfX2luc3RhbmNlU3R5bGVTaGVldE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBTZWxlY3RvclN0eWxlc1tdPigpO1xuICBwcml2YXRlIF9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUgPSBmYWxzZTtcblxuICAvKiogU2V0IHRvIHRydWUgd2hlbiBmaXJzdFVwZGF0ZWQgaXMgZmlyc3QgY2FsbGVkICovXG4gIHByb3RlY3RlZCBfX2ZpcnN0VXBkYXRlZCA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBpbnN0YW5jZVN0eWxlcztcblxuICAvKipcbiAgICogQWxsIHN1YnMgcHVzaGVkIHRvIHRoaXMgYXJyYXkgd2lsbCBiZSBjbGVhcmVkIGluIHRoZSBkaXNjb25uZWN0ZWRDYWxsYmFja1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdWJzOiBVbnN1YnNjcmliZXJbXSA9IFtdO1xuXG4gIC8qKiBTdHlsZSBtYXBwaW5ncyB0aGF0IGFyZSBhcHBsaWVkIHRvIHRoZSBob3N0IGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgcmVmbGVjdDogdHJ1ZSB9KSBzZT86IFN0eWxlTWFwO1xuXG4gIC8qKlxuICAgKiBUaGUgdGhlbWUgdG8gdXNlIGZvciBzdHlsaW5nIHRoaXMgY29tcG9uZW50LiBPdmVycmlkZXMgdGhlIGdsb2JhbCBwcmVzZXQgZm9yIHRoaXMgaW5zdGFuY2Ugb2YgdGhpcyBjb21wb25lbnQuXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGF0dHJpYnV0ZTogJ2RhdGEtbXRlLXRoZW1lJyB9KVxuICBzZXQgdGhlbWUodGhlbWU6IHN0cmluZykge1xuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5fdGhlbWU7XG4gICAgdGhpcy5fdGhlbWUgPSB0aGVtZTtcbiAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ3RoZW1lJywgb2xkVmFsdWUpO1xuICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgYSBiZXR0ZXIgd2F5IHRvIHNvbHZlIHRoaXMgZm9yIGFsbCBwcmVzZXRzXG4gICAgaWYgKHRoaXMuX19sb2NhbFByZXNldFRoZW1lKSB7XG4gICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBudWxsKSk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4gdGhpcy5yZXF1ZXN0VXBkYXRlKCd0aGVtZScsIG51bGwpKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHRoZW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lID8/IHRoaXMuX19sb2NhbFByZXNldFRoZW1lPy5uYW1lO1xuICB9XG4gIHByaXZhdGUgX3RoZW1lOiBzdHJpbmc7XG5cbiAgLyoqIFVzZWQgdG8gZGVjbGFyZSBhIGxvY2FsIHRoZW1lIHZhbHVlIGRldGVybWluZWQgYnkgdGhlIGxvY2FsIHByZXNldCBpZiBpdCBpcyBzZXQuICovXG4gIEBzdGF0ZSgpIHByb3RlY3RlZCBfX2xvY2FsUHJlc2V0VGhlbWU6IE1vcnRhclByZXNldFRoZW1lO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIHNlbGVjdG9yIHRvIGhhdmUgaW5zdGFuY2Ugc3R5bGVzIHRhcmdldCBhIHNwZWNpZmljIGlubmVyIGVsZW1lbnQuXG4gICAqIFVzZWZ1bCBpbiBzcGVjaWZpYyBzY2VuYXJpb3Mgd2hlcmUgZm9jdXMgaXMgZGVsZWdhdGVkIGxpa2UgYnV0dG9ucy5cbiAgICpcbiAgICogQnkgZGVmYXVsdCB0aGlzIHJlcGVhdHMgYDpob3N0YCBzaXggdGltZXMgdG8gcHJvdmlkZSBhIHNwZWNpZmljaXR5IG9mIDZcbiAgICovXG4gIHByb3RlY3RlZCBpbnN0YW5jZVN0eWxlU2VsZWN0b3JSb290ID0gJzpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCc7XG5cbiAgLyoqXG4gICAqIENhbiBiZSBjYWxsZWQgYnkgZGVyaXZlZCBjbGFzc2VzIHRvIHJlZ2lzdGVyIG5ldyBpbnN0YW5jZSBsZXZlbCBkeW5hbWljIHN0eWxlcy5cbiAgICogV2hlbiBjYWxsZWQgdGhlIGluc3RhbmNlIHN0eWxlc2hlZXQgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZSBsYXRlc3Qgc3R5bGVzIHRoaXMgdXBkYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIHNldEluc3RhbmNlU3R5bGUoaWQ6IHN0cmluZywgc2VsZWN0b3I6IFNlbGVjdG9yRmFjdG9yeSwgc3R5bGVNYXA6IFN0eWxlTWFwKSB7XG4gICAgLy8gV2UgcGFyc2UgYWxsIHN0eWxlIGluZm9ybWF0aW9uIGhlcmUgYW5kIHNjb3BlIGl0IHRvIHRoZSBnaXZlbiBpZC4gVGhpcyBlbnN1cmVzIHdlXG4gICAgLy8gb25seSBldmVyIG5lZWQgdG8gcmUtcGFyc2UgdGhpcyBwb3J0aW9uIG9mIHN0eWxlIGluZm9ybWF0aW9uIHdoZW4gaXRzIGFzc29jaWF0ZWRcbiAgICAvLyBpZCBpcyB1cGRhdGVkIGFnYWluLlxuICAgIHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXRNYXAuc2V0KGlkLCBnZW5lcmF0ZVNlbGVjdG9yc0Zyb21TdHlsZU1hcChzZWxlY3Rvciwgc3R5bGVNYXApKTtcbiAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgLyoqIEEgY3VzdG9tIGhvb2sgdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBpbiBkZXJpdmVkIGNsYXNzZXMgdG8gc2V0IGluc3RhbmNlIHN0eWxlcyBhcyBuZWVkZWQgKi9cbiAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKCdzZScpKSB7XG4gICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoJ3NlJywgc2VsZWN0b3JGYWN0b3J5KHRoaXMuaW5zdGFuY2VTdHlsZVNlbGVjdG9yUm9vdCksIHRoaXMuc2UgPz8ge30pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCB3aWxsVXBkYXRlKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLndpbGxVcGRhdGUoY2hhbmdlZFByb3BzKTtcblxuICAgIC8vIENhbGwgdGhlIHVwZGF0ZUluc3RhbmNlU3R5bGVzIGhvb2tcbiAgICB0aGlzLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBDaGVjayBpZiBpbnN0YW5jZSBzdHlsZXMgbmVlZCB0byBiZSByZXJlbmRlcmVkXG4gICAgaWYgKHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXROZWVkc1VwZGF0ZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZVN0eWxlcyA9IHVuc2FmZUhUTUwoXG4gICAgICAgIGA8c3R5bGUgaWQ9XCJfX2luc3RhbmNlLXN0eWxlc1wiPiR7Y29uc3RydWN0SW5zdGFuY2VTdHlsZXMoXG4gICAgICAgICAgdGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE1hcFxuICAgICAgICApfTwvc3R5bGU+YFxuICAgICAgKTtcbiAgICAgIHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXROZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgdGhpcy5fX2ZpcnN0VXBkYXRlZCA9IHRydWU7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgdGhpcy5zdWJzLmZvckVhY2goKHVuc3ViKSA9PiB1bnN1YigpKTtcbiAgICB0aGlzLnN1YnMgPSBbXTtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7IFByb3BlcnR5TWFwcGVyLCBTdHlsZVByb3BlcnR5IH0gZnJvbSAnLi9jc3MtaW4tanMudHlwZXMnO1xuXG5jb25zdCBwcm9wZXJ0eU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgc3RyaW5nW10+ID0ge1xuICBtOiAnbWFyZ2luJyxcbiAgbXg6IFsnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCddLFxuICBteTogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gIG10OiAnbWFyZ2luVG9wJyxcbiAgbXI6ICdtYXJnaW5SaWdodCcsXG4gIG1iOiAnbWFyZ2luQm90dG9tJyxcbiAgbWw6ICdtYXJnaW5MZWZ0JyxcbiAgcDogJ3BhZGRpbmcnLFxuICBweDogWydwYWRkaW5nTGVmdCcsICdwYWRkaW5nUmlnaHQnXSxcbiAgcHk6IFsncGFkZGluZ1RvcCcsICdwYWRkaW5nQm90dG9tJ10sXG4gIHB0OiAncGFkZGluZ1RvcCcsXG4gIHByOiAncGFkZGluZ1JpZ2h0JyxcbiAgcGI6ICdwYWRkaW5nQm90dG9tJyxcbiAgcGw6ICdwYWRkaW5nTGVmdCcsXG4gIGQ6ICdkaXNwbGF5JyxcbiAgYTogJ2FsaWduSXRlbXMnLFxuICBqOiAnanVzdGlmeUNvbnRlbnQnLFxuICBkaXJlY3Rpb246ICdmbGV4RGlyZWN0aW9uJyxcbiAgc2hyaW5rOiAnZmxleFNocmluaycsXG4gIGdyb3c6ICdmbGV4R3JvdycsXG4gIHdyYXA6ICdmbGV4V3JhcCcsXG4gIHc6ICd3aWR0aCcsXG4gIG1heHc6ICdtYXhXaWR0aCcsXG4gIG1pbnc6ICdtaW5XaWR0aCcsXG4gIGg6ICdoZWlnaHQnLFxuICBtYXhoOiAnbWF4SGVpZ2h0JyxcbiAgbWluaDogJ21pbkhlaWdodCcsXG4gIGZzOiAnZm9udFNpemUnLFxuICBmdzogJ2ZvbnRXZWlnaHQnLFxuICBiZzogJ2JhY2tncm91bmQnLFxuICBjOiAnY29sb3InLFxuICBlbGV2YXRpb246ICdib3hTaGFkb3cnLFxufTtcblxuLyoqIE1hcHMgcHJvcGVydHkgc2hvcnRoYW5kIHZhbHVlcyB0byBvbmUgb3IgbWFueSBmdWxsIGNzcyBwcm9wZXJ0aWVzICovXG5leHBvcnQgY29uc3QgcHJvcFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLnJlZHVjZSgoYWNjLCBwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkUHJvcHMgPSBwcm9wZXJ0eU1hcFtwcm9wTWFwLnByb3BdID8/IHByb3BNYXAucHJvcDtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uYWNjLFxuICAgICAgLi4uKEFycmF5LmlzQXJyYXkobWFwcGVkUHJvcHMpXG4gICAgICAgID8gbWFwcGVkUHJvcHMubWFwKChwcm9wKSA9PiAoeyBwcm9wLCB2YWx1ZTogcHJvcE1hcC52YWx1ZSB9KSlcbiAgICAgICAgOiBbeyBwcm9wOiBtYXBwZWRQcm9wcywgdmFsdWU6IHByb3BNYXAudmFsdWUgfV0pLFxuICAgIF07XG4gIH0sIFtdKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgQG1vcnRhci9zdHlsZXMgY29uZmlnIHZhbHVlIGZvciBhIGdpdmVuIGRvdCBub3RhdGVkIHN0cmluZy5cbiAqIE51bWJlcnMgYW5kIG5vbi1kb3Qgbm90YXRlZCBzdHJpbmcgd2lsbCBqdXN0IGJlIHJldHVybmVkIGFzIGlzLlxuICovXG5leHBvcnQgY29uc3QgZG90U3RyaW5nVG9Db25maWdWYWx1ZSA9ICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb25maWdQYXRoID0gdmFsdWUuc3BsaXQoJy4nKTtcbiAgICAgIGNvbnN0IGNvbmZpZ1ZhbHVlID0gY29uZmlnUGF0aC5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBhY2Nba2V5XTtcbiAgICAgIH0sIGNvbmZpZyk7XG4gICAgICByZXR1cm4gY29uZmlnVmFsdWUgPz8gdmFsdWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn07XG5cbi8qKiBNYXBzIGRvdCBub3RhdGVkIHN0cmluZyB2YWx1ZXMgdG8gdGhlbWUgY29uZmlnIHZhcmlhYmxlcyAqL1xuZXhwb3J0IGNvbnN0IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWVNYXBwZXI6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLnJlZHVjZSgoYWNjLCBwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgY29uZmlnVmFsdWUgPSBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKHByb3BNYXAudmFsdWUpO1xuICAgIGlmIChjb25maWdWYWx1ZSkge1xuICAgICAgcHJvcE1hcC52YWx1ZSA9IGNvbmZpZ1ZhbHVlID8/IHByb3BNYXAudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBbLi4uYWNjLCBwcm9wTWFwXTtcbiAgfSwgW10pO1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcE51bWJlclRvUHggPSAodmFsOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsKSA9PiB7XG4gIGlmICghdmFsKSB7XG4gICAgcmV0dXJuIHZhbCBhcyBudWxsO1xuICB9XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKHZhbCkpID8gYCR7dmFsfXB4YCA6ICh2YWwgYXMgc3RyaW5nKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBQeFRvTnVtYmVyID0gKHZhbDogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICBpZiAoIXZhbCkge1xuICAgIHJldHVybiB2YWwgYXMgbnVsbDtcbiAgfVxuICByZXR1cm4gTnVtYmVyKHZhbC5yZXBsYWNlKCdweCcsICcnKSk7XG59O1xuXG4vKiogTWFwcyB0aGUgdmFsdWVzIG9mIGFueSBnaXZlbiBwcm9wcyB0byBweCB1bml0cyBpZiBpdCBpcyBhIG51bWJlciAqL1xuZXhwb3J0IGNvbnN0IG51bWJlclRvUHg6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gbWFwTnVtYmVyVG9QeChwcm9wTWFwLnZhbHVlKTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IHNwYWNpbmdNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICcwJzogY29uZmlnLnNwYWNlLm5vbmUsXG4gICcxJzogY29uZmlnLnNwYWNlLnhzLFxuICAnMic6IGNvbmZpZy5zcGFjZS5zbSxcbiAgJzMnOiBjb25maWcuc3BhY2UubWQsXG4gICc0JzogY29uZmlnLnNwYWNlLmxnLFxuICAnNSc6IGNvbmZpZy5zcGFjZS54bCxcbiAgJzYnOiBjb25maWcuc3BhY2UueHhsLFxuICAnNyc6IGNvbmZpZy5zcGFjZS54eHhsLFxuICAnbm9uZSc6IGNvbmZpZy5zcGFjZS5ub25lLFxuICAneHhzJzogY29uZmlnLnNwYWNlLnh4cyxcbiAgJ3hzJzogY29uZmlnLnNwYWNlLnhzLFxuICAnc20nOiBjb25maWcuc3BhY2Uuc20sXG4gICdtZCc6IGNvbmZpZy5zcGFjZS5tZCxcbiAgJ2xnJzogY29uZmlnLnNwYWNlLmxnLFxuICAneGwnOiBjb25maWcuc3BhY2UueGwsXG4gICd4eGwnOiBjb25maWcuc3BhY2UueHhsLFxuICAneHh4bCc6IGNvbmZpZy5zcGFjZS54eHhsLFxufTtcblxuLyoqIE1hcHMgc3BhY2luZyB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIHNwYWNpbmcgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IHNwYWNpbmdWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IHNwYWNpbmdNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGJvcmRlclJhZGl1c01hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgbm9uZTogY29uZmlnLmJvcmRlci5yYWRpdXMubm9uZSxcbiAgeHM6IGNvbmZpZy5ib3JkZXIucmFkaXVzLnhzLFxuICBzbTogY29uZmlnLmJvcmRlci5yYWRpdXMuc20sXG4gIG1kOiBjb25maWcuYm9yZGVyLnJhZGl1cy5tZCxcbiAgbGc6IGNvbmZpZy5ib3JkZXIucmFkaXVzLmxnLFxuICB4bDogY29uZmlnLmJvcmRlci5yYWRpdXMueGwsXG4gIHh4bDogY29uZmlnLmJvcmRlci5yYWRpdXMueHhsLFxuICBmdWxsOiBjb25maWcuYm9yZGVyLnJhZGl1cy5mdWxsLFxufTtcblxuLyoqIE1hcHMgYm9yZGVyIHJhZGl1cyB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIGJvcmRlciByYWRpdXMgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGJvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gYm9yZGVyUmFkaXVzTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBib3JkZXJXaWR0aE1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgbm9uZTogY29uZmlnLmJvcmRlci53aWR0aC5ub25lLFxuICBzbTogY29uZmlnLmJvcmRlci53aWR0aC5zbSxcbiAgbWQ6IGNvbmZpZy5ib3JkZXIud2lkdGgubWQsXG4gIGxnOiBjb25maWcuYm9yZGVyLndpZHRoLmxnLFxufTtcblxuLyoqIE1hcHMgYm9yZGVyIHdpZHRoIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgYm9yZGVyIHdpZHRoIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gYm9yZGVyV2lkdGhNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IG9wYWNpdHlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHh4bDogY29uZmlnLm9wYWNpdHkueHhsLFxuICB4bDogY29uZmlnLm9wYWNpdHkueGwsXG4gIGxnOiBjb25maWcub3BhY2l0eS5sZyxcbiAgbWQ6IGNvbmZpZy5vcGFjaXR5Lm1kLFxuICBzbTogY29uZmlnLm9wYWNpdHkuc20sXG4gIHhzOiBjb25maWcub3BhY2l0eS54cyxcbiAgeHhzOiBjb25maWcub3BhY2l0eS54eHMsXG4gIHh4eHM6IGNvbmZpZy5vcGFjaXR5Lnh4eHMsXG59O1xuXG4vKiogTWFwcyBvcGFjaXR5IHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgb3BhY2l0eSBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3Qgb3BhY2l0eVZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gb3BhY2l0eU1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZm9udFdlaWdodE1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgbGlnaHQ6IGNvbmZpZy5mb250LndlaWdodC5saWdodCxcbiAgcmVndWxhcjogY29uZmlnLmZvbnQud2VpZ2h0LnJlZ3VsYXIsXG4gIG1lZGl1bTogY29uZmlnLmZvbnQud2VpZ2h0Lm1lZGl1bSxcbiAgYm9sZDogY29uZmlnLmZvbnQud2VpZ2h0LmJvbGQsXG59O1xuXG4vKiogTWFwcyBmb250LXdlaWdodCB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIHNwYWNpbmcgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGZvbnRXZWlnaHRWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGZvbnRXZWlnaHRNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGZvbnRTaXplTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB4eHM6ICcwLjYyNXJlbScsXG4gIHhzOiAnMC43NXJlbScsXG4gIHNtOiAnMC44NzVyZW0nLFxuICBtZDogJzFyZW0nLFxuICBsZzogJzEuMjVyZW0nLFxuICB4bDogJzEuNXJlbScsXG4gIHh4bDogJzEuNzVyZW0nLFxufTtcblxuLyoqIE1hcHMgZm9udC1zaXplIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgc3BhY2luZyBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgZm9udFNpemVWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGZvbnRTaXplTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBmb250RmFtaWx5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBzYW5zOiBjb25maWcuZm9udC5mYW1pbHkuc2FucyxcbiAgc2VyaWY6IGNvbmZpZy5mb250LmZhbWlseS5zZXJpZixcbiAgbW9ubzogY29uZmlnLmZvbnQuZmFtaWx5Lm1vbm8sXG59O1xuXG4vKiogTWFwcyBmb250LWZhbWlseSB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIGZvbnQtZmFtaWx5IHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBmb250RmFtaWx5VmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBmb250RmFtaWx5TWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBlbGV2YXRpb25NYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHowOiBjb25maWcuZWxldmF0aW9uLnowLFxuICB6MTogY29uZmlnLmVsZXZhdGlvbi56MSxcbiAgejI6IGNvbmZpZy5lbGV2YXRpb24uejIsXG4gIHozOiBjb25maWcuZWxldmF0aW9uLnozLFxuICB6NDogY29uZmlnLmVsZXZhdGlvbi56NCxcbn07XG5cbi8qKiBNYXBzIGVsZXZhdGlvbiB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIGVsZXZhdGlvbiBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgZWxldmF0aW9uVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBlbGV2YXRpb25NYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG4iLCAiaW1wb3J0IHsgY29uZmlnLCBTZWxlY3Rvck9wdGlvbnMgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQge1xuICBTZWxlY3Rvck1ldGFkYXRhLFxuICBTZWxlY3RvclN0eWxlcyxcbiAgU3R5bGVNYXAsXG4gIFN0eWxlTWFwQ2FsbGJhY2ssXG4gIFN0eWxlUHJvcGVydHksXG59IGZyb20gJy4vY3NzLWluLWpzLnR5cGVzJztcbmltcG9ydCB7XG4gIHByb3BTaG9ydGhhbmRzLFxuICBzcGFjaW5nVmFsU2hvcnRoYW5kcyxcbiAgbnVtYmVyVG9QeCxcbiAgZG90U3RyaW5nVG9Db25maWdWYWx1ZU1hcHBlcixcbiAgYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcyxcbiAgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzLFxuICBvcGFjaXR5VmFsU2hvcnRoYW5kcyxcbiAgZm9udFdlaWdodFZhbFNob3J0aGFuZHMsXG4gIGZvbnRGYW1pbHlWYWxTaG9ydGhhbmRzLFxuICBlbGV2YXRpb25WYWxTaG9ydGhhbmRzLFxuICBmb250U2l6ZVZhbFNob3J0aGFuZHMsXG59IGZyb20gJy4vY3NzLWluLWpzLnByb3BlcnR5LW1hcHBlcnMnO1xuXG4vKiogU3BlY2lmaWVzIHdoaWNoIHByb3BlcnR5IG1hcHBlcnMgc2hvdWxkIGJlIGNhbGxlZCBhbmQgaW4gd2hhdCBvcmRlciBmb3IgYSBnaXZlbiBwcm9wICovXG5jb25zdCBwcm9wTWFwcGVycyA9IHtcbiAgaGVpZ2h0OiBbbnVtYmVyVG9QeF0sXG4gIG1pbkhlaWdodDogW251bWJlclRvUHhdLFxuICBtYXhIZWlnaHQ6IFtudW1iZXJUb1B4XSxcbiAgd2lkdGg6IFtudW1iZXJUb1B4XSxcbiAgbWluV2lkdGg6IFtudW1iZXJUb1B4XSxcbiAgbWF4V2lkdGg6IFtudW1iZXJUb1B4XSxcbiAgdG9wOiBbbnVtYmVyVG9QeF0sXG4gIHJpZ2h0OiBbbnVtYmVyVG9QeF0sXG4gIGJvdHRvbTogW251bWJlclRvUHhdLFxuICBsZWZ0OiBbbnVtYmVyVG9QeF0sXG4gIG1hcmdpbjogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luVG9wOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBtYXJnaW5SaWdodDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luQm90dG9tOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBtYXJnaW5MZWZ0OiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nVG9wOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nUmlnaHQ6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmdCb3R0b206IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmdMZWZ0OiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBnYXA6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHJvd0dhcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgY29sdW1uR2FwOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBmb250U2l6ZTogW2ZvbnRTaXplVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGZvbnRXZWlnaHQ6IFtmb250V2VpZ2h0VmFsU2hvcnRoYW5kc10sXG4gIGZvbnRGYW1pbHk6IFtmb250RmFtaWx5VmFsU2hvcnRoYW5kc10sXG4gIGJvcmRlclJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJXaWR0aDogW2JvcmRlcldpZHRoVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlclRvcExlZnRSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBvcGFjaXR5OiBbb3BhY2l0eVZhbFNob3J0aGFuZHNdLFxuICBib3hTaGFkb3c6IFtlbGV2YXRpb25WYWxTaG9ydGhhbmRzXSxcbn07XG5cbi8qKlxuICogUGFyc2VzIHByb3BlcnRpZXMgdG8gdGhlaXIgYWN0dWFsIHByb3BlcnR5IG1hcHBpbmdzIGFjY29yZGluZyB0byB0aGVcbiAqIG1hcHBpbmcgZnVuY3Rpb24gcGlwZWxpbmVzIGRlZmluZWQgYWJvdmVcbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnNlUHJvcFNob3J0aGFuZHMgPSAocHJvcDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogU3R5bGVQcm9wZXJ0eVtdID0+IHtcbiAgLy8gQ2FzdCB0byBzdHJpbmcgdmFsdWVzXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdmFsdWUgPSBgJHt2YWx1ZX1gO1xuICB9XG4gIC8vIEV4ZWMgcHJvcCB0cmFuc2Zvcm1zXG4gIC8vIFRoZSBwcm9wIHNob3J0aGFuZHMgbWFwcGVyIGlzIHJ1biBhZ2FpbnN0IGV2ZXJ5IHByb3BcbiAgY29uc3QgbWFwcGVkUHJvcHMgPSBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlTWFwcGVyKHByb3BTaG9ydGhhbmRzKFt7IHByb3AsIHZhbHVlIH1dKSk7XG4gIHJldHVybiBtYXBwZWRQcm9wcy5yZWR1Y2UoKGFjYywgcHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlcnMgPSBwcm9wTWFwcGVyc1twcm9wTWFwLnByb3BdO1xuICAgIGlmIChtYXBwZXJzKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIC4uLm1hcHBlcnMucmVkdWNlKFxuICAgICAgICAgIChhY2MsIG1hcHBlcikgPT4gbWFwcGVyKGFjYyksXG4gICAgICAgICAgW3sgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogcHJvcE1hcC52YWx1ZSB9XVxuICAgICAgICApLFxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWNjLnB1c2gocHJvcE1hcCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgfSwgW10pO1xufTtcblxuLyoqXG4gKiBQYXJzZXMgc3R5bGVNYXAgdmFsdWVzIHRvIHNlbGVjdG9yICsgc3R5bGUgaW5mbyB1c2VkIGZvclxuICogdXBkYXRpbmcgQ1NTU3R5bGVTaGVldHMgb3IgPHN0eWxlPiB0YWdzLlxuICovXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVTZWxlY3RvcnNGcm9tU3R5bGVNYXAgPSAoXG4gIHNlbGVjdG9yRm46IChvcHRpb25zPzogU2VsZWN0b3JPcHRpb25zKSA9PiBzdHJpbmcsXG4gIHN0eWxlTWFwOiBTdHlsZU1hcFxuKSA9PiB7XG4gIGNvbnN0IHBhcnNlZFNlbGVjdG9yczogU2VsZWN0b3JTdHlsZXNbXSA9IFtdO1xuICBjb25zdCBzZWxlY3RvclF1ZXVlOiBTZWxlY3Rvck1ldGFkYXRhW10gPSBbeyBzZWxlY3Rvcjogc2VsZWN0b3JGbigpLCBzdHlsZU1hcCB9XTtcbiAgY29uc3QgYnJlYWtwb2ludEtleXMgPSBPYmplY3Qua2V5cyhjb25maWcuZ3JpZC5icmVha3BvaW50KTtcblxuICAvLyBMb29wIHRocm91Z2ggc2VsZWN0b3IgcXVldWUgdW50aWwgdGhleSBoYXZlIGFsbCBiZWVuIGV4aGF1c3RlZFxuICB3aGlsZSAoc2VsZWN0b3JRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JNYXAgPSBzZWxlY3RvclF1ZXVlLnNoaWZ0KCk7XG5cbiAgICAvLyBQdXNoIHBhcnNlZCBzZWxlY3RvcnMgb250byB0aGUgcmV0dXJuIGxpc3RcbiAgICBwYXJzZWRTZWxlY3RvcnMucHVzaCh7XG4gICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsXG4gICAgICBzZWxlY3RvcldyYXBwZXI6IHNlbGVjdG9yTWFwLnNlbGVjdG9yV3JhcHBlcixcbiAgICAgIHN0eWxlOiBPYmplY3Qua2V5cyhzZWxlY3Rvck1hcC5zdHlsZU1hcCkucmVkdWNlKChhY2MsIHByb3ApID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gc2VsZWN0b3JNYXAuc3R5bGVNYXBbcHJvcF07XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIGNhbGxiYWNrIHZhbHVlc1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YWx1ZSA9ICh2YWx1ZSBhcyBTdHlsZU1hcENhbGxiYWNrKShjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2Ugb2JqZWN0IHZhbHVlc1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgLy8gUXVldWUgdXAgc2VsZWN0b3JzIGZvciBwc2V1ZG8tY2xhc3Nlc1xuICAgICAgICAgIGlmIChwcm9wLnN0YXJ0c1dpdGgoJyY6JykpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvckZuKHsgaW5maXg6IHByb3AucmVwbGFjZSgnJicsICcnKSB9KSxcbiAgICAgICAgICAgICAgc3R5bGVNYXA6IHZhbHVlLFxuICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IHNlbGVjdG9yTWFwLnNlbGVjdG9yV3JhcHBlcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUXVldWUgdXAgYnJlYWtwb2ludCBzZWxlY3RvciBzaG9ydGhhbmRzXG4gICAgICAgICAgZWxzZSBpZiAoYnJlYWtwb2ludEtleXMuaW5jbHVkZXMocHJvcCkpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvck1hcC5zZWxlY3RvcixcbiAgICAgICAgICAgICAgc3R5bGVNYXA6IHZhbHVlLFxuICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IGBAbWVkaWEgKG1pbi13aWR0aDoke2NvbmZpZy5ncmlkLmJyZWFrcG9pbnRbcHJvcF19KWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFF1ZXVlIHVwIHNlbGVjdG9ycyBmb3IgbWVkaWEvY29udGFpbmVyIHF1ZXJpZXNcbiAgICAgICAgICBlbHNlIGlmIChwcm9wLnN0YXJ0c1dpdGgoJ0BtZWRpYScpIHx8IHByb3Auc3RhcnRzV2l0aCgnQGNvbnRhaW5lcicpKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBwcm9wLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIHNsb3R0ZWQgcXVlcmllc1xuICAgICAgICAgIGVsc2UgaWYgKHByb3Auc3RhcnRzV2l0aCgnOjpzbG90dGVkJykgfHwgcHJvcC5zdGFydHNXaXRoKCcmIDo6c2xvdHRlZCcpKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JGbih7IHBvc3RmaXg6ICcgJyArIHByb3AucmVwbGFjZSgnJiAnLCAnJykgfSksXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBzZWxlY3Rvck1hcC5zZWxlY3RvcldyYXBwZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFF1ZXVlIHVwIHNlbGVjdG9ycyBmb3IgdmFsdWUgYnJlYWtwb2ludCBvYmplY3RzXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBMb29wIGluIG9yZGVyIGhlcmUgc28gdGhleSBvdmVycmlkZSBlYWNoIG90aGVyIGNvcnJlY3RseVxuICAgICAgICAgICAgYnJlYWtwb2ludEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvck1hcC5zZWxlY3RvciwgLy8gaW5oZXJpdCB0aGUgc2VsZWN0b3IgaGVyZSBpbiBjYXNlIHdlIGFyZSB3aXRoaW4gYSBwc2V1ZG8tY2xhc3NcbiAgICAgICAgICAgICAgICAgIHN0eWxlTWFwOiB7IFtwcm9wXTogdmFsdWVba2V5XSB9LFxuICAgICAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBgQG1lZGlhIChtaW4td2lkdGg6JHtjb25maWcuZ3JpZC5icmVha3BvaW50W2tleV19KWAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXJzZSBub3JtYWwgcHJvcHNcbiAgICAgICAgY29uc3QgcHJvcHMgPSBwYXJzZVByb3BTaG9ydGhhbmRzKHByb3AsIHZhbHVlIGFzIHN0cmluZyB8IG51bWJlcik7XG4gICAgICAgIHJldHVybiBgJHthY2N9JHtwcm9wcy5yZWR1Y2UoKGFjYzIsIHsgcHJvcCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgIC8vIENvbnZlcnQgcHJvcGVydHkgbmFtZXMgZnJvbSBjYW1lbC1jYXNlIHRvIGRhc2gtY2FzZSwgaS5lLjpcbiAgICAgICAgICAvLyAgYGJhY2tncm91bmRDb2xvcmAgLT4gYGJhY2tncm91bmQtY29sb3JgXG4gICAgICAgICAgLy8gVmVuZG9yLXByZWZpeGVkIG5hbWVzIG5lZWQgYW4gZXh0cmEgYC1gIGFwcGVuZGVkIHRvIGZyb250OlxuICAgICAgICAgIC8vICBgd2Via2l0QXBwZWFyYW5jZWAgLT4gYC13ZWJraXQtYXBwZWFyYW5jZWBcbiAgICAgICAgICAvLyBFeGNlcHRpb24gaXMgYW55IHByb3BlcnR5IG5hbWUgY29udGFpbmluZyBhIGRhc2gsIGluY2x1ZGluZ1xuICAgICAgICAgIC8vIGN1c3RvbSBwcm9wZXJ0aWVzOyB3ZSBhc3N1bWUgdGhlc2UgYXJlIGFscmVhZHkgZGFzaC1jYXNlZCBpLmUuOlxuICAgICAgICAgIC8vICBgLS1teS1idXR0b24tY29sb3JgIC0tPiBgLS1teS1idXR0b24tY29sb3JgXG4gICAgICAgICAgcHJvcCA9IHByb3AucmVwbGFjZSgvKD86Xih3ZWJraXR8bW96fG1zfG8pfCkoPz1bQS1aXSkvZywgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgcmV0dXJuIGAke2FjYzJ9JHtwcm9wfToke3ZhbHVlfTtgO1xuICAgICAgICB9LCAnJyl9YDtcbiAgICAgIH0sICcnKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWRTZWxlY3RvcnM7XG59O1xuXG5jb25zdCBwYXJzZVNlbGVjdG9ycyA9IChzdHlsZXMsIHNlbGVjdG9ycz86IGFueSkgPT4ge1xuICBpZiAoIXNlbGVjdG9ycykge1xuICAgIHJldHVybiBzdHlsZXM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGAke3N0eWxlc30ke3NlbGVjdG9ycy5yZWR1Y2UoKGFjYywgeyBzZWxlY3Rvciwgc2VsZWN0b3JXcmFwcGVyLCBzdHlsZSB9KSA9PiB7XG4gICAgICBpZiAoc3R5bGUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgICBjb25zdCBiYXNlID0gYCR7c2VsZWN0b3J9eyR7c3R5bGV9fWA7XG4gICAgICBjb25zdCB3cmFwcGVkID0gc2VsZWN0b3JXcmFwcGVyID8gYCR7c2VsZWN0b3JXcmFwcGVyfXske2Jhc2V9fWAgOiBiYXNlO1xuICAgICAgcmV0dXJuIGAke2FjY30ke3dyYXBwZWR9YDtcbiAgICB9LCAnJyl9YDtcbiAgfVxufTtcblxuLyoqXG4gKiBDb21iaW5lcyBhbGwgaW5zdGFuY2Ugc3R5bGVNYXAgc2VsZWN0b3JzICsgc3R5bGUgaW5mbyBpbnRvIG9uZSBjc3NUZXh0XG4gKiB1c2VkIGZvciB1cGRhdGluZyBDU1NTdHlsZVNoZWV0cyBvciA8c3R5bGU+IHRhZ3MuXG4gKi9cbmV4cG9ydCBjb25zdCBjb25zdHJ1Y3RJbnN0YW5jZVN0eWxlcyA9IChpbnN0YW5jZVN0eWxlc01hcCkgPT4ge1xuICBsZXQgc3R5bGVzID0gJyc7XG5cbiAgLy8gU29ydCBrZXlzIGluIGFscGhhYmV0aWNhbCBvcmRlciB0byBoZWxwIGF2b2lkIGh5ZHJhdGlvbiBtaXNtYXRjaCBlcnJvcnNcbiAgWy4uLmluc3RhbmNlU3R5bGVzTWFwLmVudHJpZXMoKV1cbiAgICAuZmlsdGVyKChba2V5LCBfXSkgPT4ga2V5ICE9PSAnc2UnICYmIGtleSAhPT0gJ3NwJylcbiAgICAuc29ydCgoYSwgYikgPT4gYlswXSAtIGFbMF0pXG4gICAgLmZvckVhY2goKFtfLCBzZWxlY3RvcnNdKSA9PiB7XG4gICAgICBzdHlsZXMgPSBwYXJzZVNlbGVjdG9ycyhzdHlsZXMsIHNlbGVjdG9ycyk7XG4gICAgfSk7XG5cbiAgLy8gQWx3YXlzIHBhcnNlIGBzZWAgYW5kIGBzcGAgc2VsZWN0b3JzIGxhc3QgdG8gaGVscCBhdm9pZCBoeWRyYXRpb24gbWlzbWF0Y2ggZXJyb3JzXG4gIC8vIGFuZCBlbnN1cmUgdGhleSBvdmVycmlkZSBhbnkgY29tcG9uZW50IGxldmVsIGR5bmFtaWMgc3R5bGVzLlxuICBzdHlsZXMgPSBgJHtzdHlsZXN9JHtwYXJzZVNlbGVjdG9ycygnJywgaW5zdGFuY2VTdHlsZXNNYXAuZ2V0KCdzZScpKX0ke3BhcnNlU2VsZWN0b3JzKFxuICAgICcnLFxuICAgIGluc3RhbmNlU3R5bGVzTWFwLmdldCgnc3AnKVxuICApfWA7XG4gIHJldHVybiBzdHlsZXM7XG59O1xuIiwgImltcG9ydCB7IGlzU2VydmVyIH0gZnJvbSAnbGl0LWh0bWwvaXMtc2VydmVyLmpzJztcblxuZXhwb3J0IGNvbnN0IGlzU3NyID0gKCkgPT4gaXNTZXJ2ZXI7XG5cbmV4cG9ydCBjb25zdCBpc0Jyb3dzZXJMaWtlID0gKCkgPT4gZ2xvYmFsVGhpcyAhPT0gdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgaXNWYWxpZFJlc2l6ZUNvbnRyb2xsZXIgPSAocmVzaXplQ29udHJvbGxlcikgPT5cbiAgcmVzaXplQ29udHJvbGxlcj8uWydfb2JzZXJ2ZXInXT8uWyd1bm9ic2VydmUnXTtcblxuaW50ZXJmYWNlIE5hdmlnYXRvclVBRGF0YSB7XG4gIGJyYW5kczogQXJyYXk8eyBicmFuZDogc3RyaW5nOyB2ZXJzaW9uOiBzdHJpbmcgfT47XG4gIG1vYmlsZTogYm9vbGVhbjtcbiAgcGxhdGZvcm06IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXRmb3JtKCk6IHN0cmluZyB7XG4gIGNvbnN0IHVhRGF0YSA9IChuYXZpZ2F0b3IgYXMgYW55KS51c2VyQWdlbnREYXRhIGFzIE5hdmlnYXRvclVBRGF0YSB8IHVuZGVmaW5lZDtcblxuICBpZiAodWFEYXRhPy5wbGF0Zm9ybSkge1xuICAgIHJldHVybiB1YURhdGEucGxhdGZvcm07XG4gIH1cblxuICByZXR1cm4gbmF2aWdhdG9yLnBsYXRmb3JtO1xufVxuXG5leHBvcnQgY29uc3QgaXNQbGF0Zm9ybSA9IChwbGF0Zm9ybTogJ0lPUycpID0+IHtcbiAgaWYgKCFpc1NzcigpKSB7XG4gICAgaWYgKHBsYXRmb3JtID09PSAnSU9TJykge1xuICAgICAgcmV0dXJuIC9pUChob25lfGFkfG9kKXxpT1MvLnRlc3QoZ2V0UGxhdGZvcm0oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuIiwgImNvbnN0IG5hdGl2ZVZhbGlkaXR5U3RhdGVzOiBBcnJheTxrZXlvZiBWYWxpZGl0eVN0YXRlPiA9IFtcbiAgJ2JhZElucHV0JyxcbiAgJ2N1c3RvbUVycm9yJyxcbiAgJ3BhdHRlcm5NaXNtYXRjaCcsXG4gICdyYW5nZU92ZXJmbG93JyxcbiAgJ3JhbmdlVW5kZXJmbG93JyxcbiAgJ3N0ZXBNaXNtYXRjaCcsXG4gICd0b29Mb25nJyxcbiAgJ3Rvb1Nob3J0JyxcbiAgJ3R5cGVNaXNtYXRjaCcsXG4gICd2YWx1ZU1pc3NpbmcnLFxuXTtcblxuLyoqXG4gKiBDdXN0b20gdmFsaWRhdG9yIGZvciB0aGUgYEBvcGVuLXdjL2Zvcm0tY29udHJvbGAgdGhhdCBsZWFucyBvbiBhbiBpbnRlcm5hbFxuICogaW5wdXQgdG8gZm9yd2FyZCBuYXRpdmUgdmFsaWRhdGlvblxuICovXG5leHBvcnQgY29uc3QgaW5uZXJJbnB1dFZhbGlkYXRvcnMgPSBuYXRpdmVWYWxpZGl0eVN0YXRlcy5tYXAoKGtleSkgPT4gKHtcbiAga2V5LFxuICBpc1ZhbGlkKGluc3RhbmNlOiBIVE1MRWxlbWVudCAmIHsgdmFsaWRhdGlvblRhcmdldDogSFRNTElucHV0RWxlbWVudCB9KSB7XG4gICAgaWYgKGluc3RhbmNlLnZhbGlkYXRpb25UYXJnZXQpIHtcbiAgICAgIHJldHVybiAhaW5zdGFuY2UudmFsaWRhdGlvblRhcmdldC52YWxpZGl0eVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbn0pKTtcbiIsICIvKipcbiAqIE5PVEU6XG4gKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGltcGxlbWVudGF0aW9uIGZvciBhbiBleHRyZW1lbHkgc2ltcGxlIGFuZCBsaWdodHdlaWdodFxuICogcmVhY3RpdmUgc29sdXRpb24gbG9vc2VseSBiYXNlZCBvbiBzb2xpZC1qcyBzdHlsZSBzaWduYWxzLiBJdCBlbmFibGVzIGJhc2ljXG4gKiByZWFjdGl2ZSBzdWJzY3JpcHRpb25zIGFuZCBjb21wdXRlZCBzaWduYWxzIG9mIG9uZSBvciBtb3JlIG90aGVyIGRlcGVuZGVuY3kgc2lnbmFscy5cbiAqXG4gKiBJbiBpdHMgY3VycmVudCBzdGF0ZSwgaXQgaXMgbm90IHBlcmZlY3QgYW5kIGRvZXMgbm90IGhhbmRsZSBhbGwgZWRnZSBjYXNlcy4gRm9yXG4gKiBleGFtcGxlLCBpZiB5b3UgaGF2ZSBtdWx0aXBsZSBsYXllcnMgb2YgY29tcHV0ZWQgc3RhdGUgd2l0aCBhIHNpbmdsZSBkZXBlbmRlbmN5XG4gKiBzaGFyZWQgbW9yZSB0aGFuIG9uY2UgYWNyb3NzIHRob3NlIGxheWVycywgdGhlIHNhbWUgY2hhbmdlIHdpbGwgcG90ZW50aWFsbHkgYmVcbiAqIGVtaXR0ZWQgdHdpY2UuIE91ciBleHBlY3RhdGlvbiBhdG0sIGlzIHRoYXQgd2Ugd29uJ3QgZW5jb3VudGVyIHRob3NlIHNjZW5hcmlvc1xuICogaW4gdGhpcyBsaWJyYXJ5LlxuICovXG5cbi8qKiBVbnN1YnNjcmliZXMgZnJvbSB2YWx1ZSB1cGRhdGVzLiAqL1xuZXhwb3J0IHR5cGUgVW5zdWJzY3JpYmVyID0gKCkgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBTaWduYWw8VD4ge1xuICAvKiogR2V0IHRoZSBjdXJyZW50IHZhbHVlICovXG4gIGdldCgpOiBUO1xuXG4gIC8qKiBTZXQgcmVhY3RpdmUgdmFsdWUgKi9cbiAgc2V0KHZhbHVlOiBUKTtcblxuICAvKiogVXBkYXRlIHJlYWN0aXZlIHZhbHVlIHVzaW5nIGNhbGxiYWNrICovXG4gIHVwZGF0ZShmbjogKHZhbHVlOiBUKSA9PiBUKTtcblxuICAvKiogU3Vic2NyaWJlIHRvIHJlYWN0aXZlIHZhbHVlIGNoYW5nZXMgKi9cbiAgc3Vic2NyaWJlKGZuOiAodmFsdWU6IFQsIHVuc3Vic2NyaWJlPzogVW5zdWJzY3JpYmVyKSA9PiB2b2lkKTogVW5zdWJzY3JpYmVyO1xufVxuXG5jb25zdCBjb250ZXh0ID0gW107XG5cbmZ1bmN0aW9uIF9zdWJzY3JpYmUocnVubmluZywgc3Vic2NyaXB0aW9ucykge1xuICBzdWJzY3JpcHRpb25zLmFkZChydW5uaW5nKTtcbiAgcnVubmluZy5kZXBlbmRlbmNpZXMuYWRkKHN1YnNjcmlwdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjbGVhbnVwKHJ1bm5pbmcpIHtcbiAgZm9yIChjb25zdCBkZXAgb2YgcnVubmluZy5kZXBlbmRlbmNpZXMpIHtcbiAgICBkZXAuZGVsZXRlKHJ1bm5pbmcpO1xuICB9XG4gIHJ1bm5pbmcuZGVwZW5kZW5jaWVzLmNsZWFyKCk7XG59XG5cbi8qKiBDcmVhdGUgYSBzaWduYWwgdGhhdCBhbGxvd3MgYm90aCB1cGRhdGluZyBhbmQgcmVhZGluZyBieSBnZXR0ZXIgb3Igc3Vic2NyaXB0aW9uLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hbDxUPih2YWx1ZT86IFQpIHtcbiAgY29uc3Qgc3Vic2NyaXB0aW9ucyA9IG5ldyBTZXQ8YW55PigpO1xuXG4gIGNvbnN0IGdldCA9ICgpOiBUID0+IHtcbiAgICBjb25zdCBydW5uaW5nID0gY29udGV4dFtjb250ZXh0Lmxlbmd0aCAtIDFdO1xuICAgIGlmIChydW5uaW5nKSBfc3Vic2NyaWJlKHJ1bm5pbmcsIHN1YnNjcmlwdGlvbnMpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCBzZXQgPSAobmV4dFZhbHVlOiBUKSA9PiB7XG4gICAgdmFsdWUgPSBuZXh0VmFsdWU7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgWy4uLnN1YnNjcmlwdGlvbnNdKSB7XG4gICAgICBzdWIuZXhlY3V0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGUgPSAoZm46ICh2YWx1ZTogVCkgPT4gVCkgPT4ge1xuICAgIHZhbHVlID0gZm4odmFsdWUpO1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIFsuLi5zdWJzY3JpcHRpb25zXSkge1xuICAgICAgc3ViLmV4ZWN1dGUoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVGhpcyBpcyBlc3NlbnRpYWxseSBhIHVzZUVmZmVjdCBtYXNxdWVyYWRpbmcgYXMgYSBzdWJzY3JpYmUgZnVuY3Rpb25cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGZuOiAodmFsdWU6IFQsIHVuc3Vic2NyaWJlPzogVW5zdWJzY3JpYmVyKSA9PiB2b2lkKTogVW5zdWJzY3JpYmVyID0+IHtcbiAgICBjb25zdCBleGVjdXRlID0gKCkgPT4ge1xuICAgICAgY2xlYW51cChydW5uaW5nKTtcbiAgICAgIGNvbnRleHQucHVzaChydW5uaW5nKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKHJ1bm5pbmcuZ2V0KCksICgpID0+IGNsZWFudXAocnVubmluZykpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgY29udGV4dC5wb3AoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoKSA9PiBjbGVhbnVwKHJ1bm5pbmcpO1xuICAgIH07XG5cbiAgICBjb25zdCBydW5uaW5nID0ge1xuICAgICAgZXhlY3V0ZSxcbiAgICAgIGRlcGVuZGVuY2llczogbmV3IFNldCgpLFxuICAgICAgZ2V0LFxuICAgIH07XG5cbiAgICByZXR1cm4gZXhlY3V0ZSgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0LFxuICAgIHNldCxcbiAgICB1cGRhdGUsXG4gICAgc3Vic2NyaWJlLFxuICB9IGFzIFNpZ25hbDxUPjtcbn1cblxuLyoqIE9uZSBvciBtb3JlIGBTaWduYWxgcyAqL1xudHlwZSBTaWduYWxzID0gU2lnbmFsPGFueT4gfCBbU2lnbmFsPGFueT4sIC4uLkFycmF5PFNpZ25hbDxhbnk+Pl0gfCBTaWduYWw8YW55PltdO1xuXG4vKiogT25lIG9yIG1vcmUgdmFsdWVzIGZyb20gc2lnbmFscyAqL1xuZXhwb3J0IHR5cGUgU2lnbmFsVmFsdWVzPFQ+ID0gVCBleHRlbmRzIFNpZ25hbDxpbmZlciBVPlxuICA/IFVcbiAgOiB7IFtLIGluIGtleW9mIFRdOiBUW0tdIGV4dGVuZHMgU2lnbmFsPGluZmVyIFU+ID8gVSA6IG5ldmVyIH07XG5cbi8qKiBDcmVhdGUgYSBuZXcgY29tcHV0ZWQgc2lnbmFsIGZyb20gb25lIG9yIG1vcmUgc2lnbmFsIGRlcGVuZGVuY2llcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkPEQgZXh0ZW5kcyBTaWduYWxzLCBUPihcbiAgZGVwZW5kZW5jaWVzOiBELFxuICBmbjogKHZhbHVlczogU2lnbmFsVmFsdWVzPEQ+KSA9PiBUXG4pOiBTaWduYWw8VD47XG5cbi8qKiBDcmVhdGUgYSBuZXcgY29tcHV0ZWQgc2lnbmFsIGZyb20gb25lIG9yIG1vcmUgc2lnbmFsIGRlcGVuZGVuY2llcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkPEQgZXh0ZW5kcyBTaWduYWxzLCBUPihcbiAgZGVwZW5kZW5jaWVzOiBELFxuICBmbj86ICh2YWx1ZXM6IFNpZ25hbFZhbHVlczxEPiwgc2V0PzogKHZhbHVlOiBhbnkpID0+IHZvaWQpID0+IFRcbik6IFNpZ25hbDx1bmtub3duPjtcblxuLyoqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCBzaWduYWwgZnJvbSBvbmUgb3IgbW9yZSBzaWduYWwgZGVwZW5kZW5jaWVzICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQ8RCBleHRlbmRzIFNpZ25hbHM+KFxuICBkZXBlbmRlbmNpZXM6IEQsXG4gIGZuPzogKC4uLnBhcmFtczogYW55W10pID0+IGFueVxuKTogU2lnbmFsPGFueT4ge1xuICBjb25zdCBhdXRvID0gZm4ubGVuZ3RoIDwgMjtcbiAgY29uc3QgcyA9IHNpZ25hbDxhbnk+KCk7XG4gIGNvbnN0IHNpbmdsZSA9ICFBcnJheS5pc0FycmF5KGRlcGVuZGVuY2llcyk7XG4gIGNvbnN0IGRlcHMgPSBzaW5nbGVcbiAgICA/IChbZGVwZW5kZW5jaWVzXSBhcyBTaWduYWw8U2lnbmFsVmFsdWVzPEQ+PltdKVxuICAgIDogKGRlcGVuZGVuY2llcyBhcyBTaWduYWw8U2lnbmFsVmFsdWVzPEQ+PltdKTtcblxuICAvLyBXZSBvbmx5IG5lZWQgdG8gc3Vic2NyaWJlIHRvIHRoZSBmaXJzdCBpdGVtIGJlY2F1c2VcbiAgLy8gdGhlIGFjdCBvZiByZXRyaWV2aW5nIGFsbCBkZXBlbmRlbmN5IHZhbHVlcyB3aWxsIGFkZCB0aGVtXG4gIC8vIHRvIHRoZSBjb250ZXh0IHN0YWNrIGFwcHJvcHJpYXRlbHlcbiAgY29uc3QgZGVwID0gZGVwc1swXTtcbiAgZGVwLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgY29uc3QgdmFsdWVzID0gZGVwcy5tYXAoKGRlcCkgPT4gZGVwLmdldCgpKTtcbiAgICBjb25zdCByZXQgPSBzaW5nbGUgPyB2YWx1ZXNbMF0gOiAodmFsdWVzIGFzIFNpZ25hbFZhbHVlczxEPik7XG4gICAgaWYgKGF1dG8pIHtcbiAgICAgIHMuc2V0KGZuKHJldCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbihyZXQsIHMuc2V0KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcztcbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSB3Yy9uby1zZWxmLWNsYXNzICovXG5pbXBvcnQgeyBjb25maWcsIHNlbGVjdG9yRmFjdG9yeSB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzLCBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IE10ZUVsZW1lbnQgfSBmcm9tICcuL210ZS5lbGVtZW50JztcbmltcG9ydCB7IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9IGZyb20gJy4uL2F0dHJpYnV0ZS1jb252ZXJ0ZXInO1xuXG5leHBvcnQgdHlwZSBTcGFjaW5nVmFsdWUgPVxuICB8IG51bWJlclxuICB8IHN0cmluZ1xuICB8IDFcbiAgfCAyXG4gIHwgM1xuICB8IDRcbiAgfCA1XG4gIHwgNlxuICB8ICdub25lJ1xuICB8ICd4cydcbiAgfCAnc20nXG4gIHwgJ21kJ1xuICB8ICdsZydcbiAgfCAneGwnXG4gIHwgJ3h4bCdcbiAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFVuaXRWYWx1ZSA9IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgQm9yZGVyUmFkaXVzVmFsdWUgPVxuICB8ICdub25lJ1xuICB8ICd4cydcbiAgfCAnc20nXG4gIHwgJ21kJ1xuICB8ICdsZydcbiAgfCAneGwnXG4gIHwgJ3h4bCdcbiAgfCAnZnVsbCdcbiAgfCBzdHJpbmdcbiAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIEJvcmRlcldpZHRoVmFsdWUgPSAnbm9uZScgfCAnc20nIHwgJ21kJyB8ICdsZycgfCBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIE9wYWNpdHlWYWx1ZSA9XG4gIHwgJ3h4eHMnXG4gIHwgJ3h4cydcbiAgfCAneHMnXG4gIHwgJ3NtJ1xuICB8ICdtZCdcbiAgfCAnbGcnXG4gIHwgJ3hsJ1xuICB8ICd4eGwnXG4gIHwgc3RyaW5nXG4gIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBSZXNwb25zaXZlVmFsdWU8VD4gPSBUIHwgUGFydGlhbDxSZWNvcmQ8J3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJywgVD4+O1xuXG5jb25zdCBkZWZhdWx0Qm9yZGVyRmFjdG9yeSA9ICh3aWR0aD8sIGNvbG9yPywgc3R5bGU/KSA9PlxuICBgJHtzdHlsZSA/PyAnc29saWQnfSAke1xuICAgIGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kcyhbXG4gICAgICB7IHByb3A6ICdib3JkZXJXaWR0aCcsIHZhbHVlOiBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKHdpZHRoID8/ICcxcHgnKSB9LFxuICAgIF0pWzBdPy52YWx1ZVxuICB9ICR7ZG90U3RyaW5nVG9Db25maWdWYWx1ZShjb2xvcikgPz8gY29uZmlnLmNvbG9yLmJvcmRlcjF9YDtcblxuZXhwb3J0IGNsYXNzIE10ZUNvbnRlbnRCYXNlIGV4dGVuZHMgTXRlRWxlbWVudCB7XG4gIC8vIC0tIFNwYWNpbmcgUHJvcHMgLS1cblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tcmlnaHRgIGFuZCBgbWFyZ2luLWxlZnRgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBteD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXRvcGAgYW5kIGBtYXJnaW4tYm90dG9tYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbXk/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi10b3BgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbXQ/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi1yaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtcj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLWJvdHRvbWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtYj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLWxlZnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWw/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmdgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1yaWdodGAgYW5kIGBwYWRkaW5nLWxlZnRgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBweD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy10b3BgIGFuZCBgcGFkZGluZy1ib3R0b21gIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBweT86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy10b3BgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcHQ/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctcmlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcHI/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctYm90dG9tYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHBiPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLWxlZnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcGw/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvLyAtLSBQb3NpdGlvbmluZyBQcm9wcyAtLVxuXG4gIC8qKiBTZXRzIHRoZSBgZGlzcGxheWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBkPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnYmxvY2snXG4gICAgfCAnaW5saW5lLWJsb2NrJ1xuICAgIHwgJ2ZsZXgnXG4gICAgfCAnaW5saW5lLWZsZXgnXG4gICAgfCAnZ3JpZCdcbiAgICB8ICdpbmxpbmUtZ3JpZCdcbiAgICB8ICdpbmxpbmUnXG4gICAgfCAnbGlzdC1pdGVtJ1xuICAgIHwgJ25vbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24taXRlbXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2Jhc2VsaW5lJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGFsaWduLWl0ZW1zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGFsaWduSXRlbXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdiYXNlbGluZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1zZWxmYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGFsaWduU2VsZj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2F1dG8nXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnYmFzZWxpbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24tY29udGVudGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBhbGlnbkNvbnRlbnQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIHwgJ3NwYWNlLWFyb3VuZCdcbiAgICB8ICdzcGFjZS1ldmVubHknXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1jb250ZW50YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGo/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3BhY2UtYmV0d2VlbidcbiAgICB8ICdzcGFjZS1hcm91bmQnXG4gICAgfCAnc3BhY2UtZXZlbmx5J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGp1c3RpZnktY29udGVudGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBqdXN0aWZ5Q29udGVudD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIHwgJ3NwYWNlLWFyb3VuZCdcbiAgICB8ICdzcGFjZS1ldmVubHknXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1pdGVtc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBqdXN0aWZ5SXRlbXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2xlZnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdyaWdodCdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LXNlbGZgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkganVzdGlmeVNlbGY/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ2xlZnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdyaWdodCdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGZsZXg6IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1kaXJlY3Rpb25gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZGlyZWN0aW9uPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdyb3cnIHwgJ3Jvd1JldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uUmV2ZXJzZScgfCAnaW5pdGlhbCcgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtZGlyZWN0aW9uYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhEaXJlY3Rpb24/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3JvdycgfCAncm93UmV2ZXJzZScgfCAnY29sdW1uJyB8ICdjb2x1bW5SZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1iYXNpc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBiYXNpcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtYmFzaXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleEJhc2lzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1ncm93YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyb3c/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWdyb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleEdyb3c/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXNocmlua2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBzaHJpbms/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXNocmlua2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4U2hyaW5rPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC13cmFwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIHdyYXA/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ25vd3JhcCcgfCAnd3JhcCcgfCAnd3JhcC1yZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC13cmFwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhXcmFwPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdub3dyYXAnIHwgJ3dyYXAnIHwgJ3dyYXAtcmV2ZXJzZScgfCAnaW5pdGlhbCcgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYG9yZGVyYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIG9yZGVyPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ2FwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdhcD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgY29sdW1uLWdhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBjb2x1bW5HYXA/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHJvdy1nYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcm93R2FwPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWNvbHVtbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQ29sdW1uPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1yb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZFJvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXV0by1mbG93YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRBdXRvRmxvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAncm93JyB8ICdjb2x1bW4nIHwgJ2RlbnNlJyB8ICdyb3cgZGVuc2UnIHwgJ2NvbHVtbiBkZW5zZSdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXV0by1jb2x1bW5zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRBdXRvQ29sdW1ucz86IFJlc3BvbnNpdmVWYWx1ZTwnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWF1dG8tcm93c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQXV0b1Jvd3M/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgJ2F1dG8nIHwgJ21heC1jb250ZW50JyB8ICdtaW4tY29udGVudCcgfCBVbml0VmFsdWVcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtdGVtcGxhdGUtY29sdW1uc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBncmlkVGVtcGxhdGVDb2x1bW5zPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgICdub25lJyB8ICdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXRlbXBsYXRlLXJvd3NgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZFRlbXBsYXRlUm93cz86IFJlc3BvbnNpdmVWYWx1ZTwnbm9uZScgfCAnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXRlbXBsYXRlLWFyZWFzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRUZW1wbGF0ZUFyZWFzPzogUmVzcG9uc2l2ZVZhbHVlPCdub25lJyB8IHN0cmluZyB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWFyZWFgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZEFyZWE/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLy8gLS0gU2l6aW5nIFByb3BzIC0tXG5cbiAgLyoqIFNldHMgdGhlIGB3aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSB3PzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXgtd2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWF4dz86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWluLXdpZHRoYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1pbnc/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGhlaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBoPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXgtaGVpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1heGg/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1pbi1oZWlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWluaD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYmFja2dyb3VuZGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gQ2FuIGJlIHBhc3NlZCBkb3Qgbm90YXRlZCB0aGVtZSBjb25maWcgc3RyaW5ncyB0byBzZWxlY3QgY29sb3IgdG9rZW4gdmFsdWVzLiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBiZz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGNvbG9yYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiBDYW4gYmUgcGFzc2VkIGRvdCBub3RhdGVkIHRoZW1lIGNvbmZpZyBzdHJpbmdzIHRvIHNlbGVjdCBjb2xvciB0b2tlbiB2YWx1ZXMuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItY29sb3JgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuIENhbiBiZSBwYXNzZWQgZG90IG5vdGF0ZWQgdGhlbWUgY29uZmlnIHN0cmluZ3MgdG8gc2VsZWN0IGNvbG9yIHRva2VuIHZhbHVlcy4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYm9yZGVyQ29sb3I/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItd2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlcldpZHRoPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlcldpZHRoVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXN0eWxlYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBib3JkZXJTdHlsZT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAnc29saWQnIHwgJ2RvdHRlZCcgfCAnZGFzaGVkJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXI/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJUb3A/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItcmlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclJpZ2h0PzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tPzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWxlZnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckxlZnQ/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItcmFkaXVzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcFJpZ2h0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3AtbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcExlZnRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNgIGFuZCBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJUb3BSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNgIGFuZCBgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyUmlnaHRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNgIGFuZCBgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJCb3R0b21SYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c2AgYW5kIGBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckxlZnRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbGluZS1oZWlnaHRgIGNzcyBwcm9wZXJ0eSAgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgbGluZUhlaWdodD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCBudW1iZXJcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZvbnQtd2VpZ2h0YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZm9udFdlaWdodD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2xpZ2h0J1xuICAgIHwgJ3JlZ3VsYXInXG4gICAgfCAnbWVkaXVtJ1xuICAgIHwgJ2xpZ2h0ZXInXG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ2JvbGQnXG4gICAgfCAnYm9sZGVyJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgICB8ICcxMDAnXG4gICAgfCAnMjAwJ1xuICAgIHwgJzMwMCdcbiAgICB8ICc0MDAnXG4gICAgfCAnNTAwJ1xuICAgIHwgJzYwMCdcbiAgICB8ICc3MDAnXG4gICAgfCAnODAwJ1xuICAgIHwgJzkwMCdcbiAgPjtcblxuICAvKiogU2hvcnRoYW5kIGZvciBgZm9udFdlaWdodGAuIFNldHMgdGhlIGBmb250LXdlaWdodGAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZ3PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnbGlnaHQnXG4gICAgfCAncmVndWxhcidcbiAgICB8ICdtZWRpdW0nXG4gICAgfCAnbGlnaHRlcidcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnYm9sZCdcbiAgICB8ICdib2xkZXInXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICAgIHwgJzEwMCdcbiAgICB8ICcyMDAnXG4gICAgfCAnMzAwJ1xuICAgIHwgJzQwMCdcbiAgICB8ICc1MDAnXG4gICAgfCAnNjAwJ1xuICAgIHwgJzcwMCdcbiAgICB8ICc4MDAnXG4gICAgfCAnOTAwJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZm9udC1zaXplYCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZm9udFNpemU/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgVW5pdFZhbHVlIHwgJ3h4cycgfCAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnXG4gID47XG5cbiAgLyoqIFNob3J0aGFuZCBmb3IgYGZvbnRTaXplYC4gU2V0cyB0aGUgYGZvbnQtc2l6ZWAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8IFVuaXRWYWx1ZSB8ICd4eHMnIHwgJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZm9udC1mYW1pbHlgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmb250RmFtaWx5PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdzYW5zJyB8ICdzZXJpZicgfCAnbW9ubycgfCBzdHJpbmdcbiAgPjtcblxuICAvKiogU2hvcnRoYW5kIGZvciBgb3BhY2l0eWAuIFNldHMgdGhlIGBvcGFjaXR5YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgb3BhY2l0eT86IFJlc3BvbnNpdmVWYWx1ZTxPcGFjaXR5VmFsdWU+O1xuXG4gIC8qKiBBcHBsaWVzIE1vcnRhciBzdGFuZGFyZCBib3gtc2hhZG93IHZhbHVlcyAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBlbGV2YXRpb24/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgJ3owJyB8ICd6MScgfCAnejInIHwgJ3ozJyB8ICd6NCdcbiAgPjtcblxuICAvKiogQWRqdXN0IHRoaXMgZWxlbWVudHMgYmxlZWQgaWYgaXQgaXMgYSBkaXJlY3QgZGVzY2VuZGFudCBvZiBhbiBtdGUtbGF5b3V0LWNvbnRhaW5lciAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGxheW91dEJsZWVkPzogJ2Z1bGwnIHwgJ3BvcG91dCcgfCAnY29udGVudCcgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhpcyBlbGVtZW50IGFzIGEgc3ViZ3JpZCB3aGVuIHNldC4gYGRpc3BsYXlgIGlzIHNldCB0byBgZ3JpZGAgYW5kIGBncmlkLXRlbXBsYXRlLWNvbHVtbnNgIGlzIHNldCB0byBgc3ViZ3JpZGAuXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgc3ViZ3JpZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIHNlbGVjdG9yIHRvIGhhdmUgaW5zdGFuY2Ugc3R5bGVzIHRhcmdldCBhIHNwZWNpZmljIGlubmVyIGVsZW1lbnQuXG4gICAqIFVzZWZ1bCBpbiBzcGVjaWZpYyBzY2VuYXJpb3Mgd2hlcmUgdGhlIHByaW1hcnkgY29udGVudC9zbG90IHdyYXBwZWQgd2l0aGluIHRoZSB0ZW1wbGF0ZVxuICAgKiBsaWtlIHdpdGggdGhlIG1vZGFsIGNvbXBvbmVudC5cbiAgICovXG4gIHByb3RlY3RlZCBjb250ZW50U3R5bGVTZWxlY3RvclJvb3QgPSAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0JztcblxuICAvLyBMaXN0IG9mIHByb3BzIGZvciBvcHRpbWFsIHN0eWxlIHVwZGF0ZSBjaGVja2luZ1xuICBwcml2YXRlIHN0YXRpYyBjb250ZW50UHJvcHMgPSBuZXcgU2V0KFtcbiAgICAnbScsXG4gICAgJ214JyxcbiAgICAnbXknLFxuICAgICdtdCcsXG4gICAgJ21yJyxcbiAgICAnbWInLFxuICAgICdtbCcsXG4gICAgJ3AnLFxuICAgICdweCcsXG4gICAgJ3B5JyxcbiAgICAncHQnLFxuICAgICdwcicsXG4gICAgJ3BiJyxcbiAgICAncGwnLFxuICAgICdkJyxcbiAgICAnYScsXG4gICAgJ2onLFxuICAgICdiYXNpcycsXG4gICAgJ3NocmluaycsXG4gICAgJ2dyb3cnLFxuICAgICdkaXJlY3Rpb24nLFxuICAgICd3cmFwJyxcbiAgICAnYWxpZ25JdGVtcycsXG4gICAgJ2FsaWduU2VsZicsXG4gICAgJ2FsaWduQ29udGVudCcsXG4gICAgJ2p1c3RpZnlDb250ZW50JyxcbiAgICAnanVzdGlmeUl0ZW1zJyxcbiAgICAnanVzdGlmeVNlbGYnLFxuICAgICdmbGV4JyxcbiAgICAnZmxleERpcmVjdGlvbicsXG4gICAgJ2ZsZXhCYXNpcycsXG4gICAgJ2ZsZXhTaHJpbmsnLFxuICAgICdmbGV4R3JvdycsXG4gICAgJ2ZsZXhXcmFwJyxcbiAgICAnb3JkZXInLFxuICAgICdnYXAnLFxuICAgICdjb2x1bW5HYXAnLFxuICAgICdyb3dHYXAnLFxuICAgICdncmlkQ29sdW1uJyxcbiAgICAnZ3JpZFJvdycsXG4gICAgJ2dyaWRBdXRvRmxvdycsXG4gICAgJ2dyaWRBdXRvQ29sdW1ucycsXG4gICAgJ2dyaWRBdXRvUm93cycsXG4gICAgJ2dyaWRUZW1wbGF0ZUNvbHVtbnMnLFxuICAgICdncmlkVGVtcGxhdGVSb3dzJyxcbiAgICAnZ3JpZFRlbXBsYXRlQXJlYXMnLFxuICAgICdncmlkQXJlYScsXG4gICAgJ3cnLFxuICAgICdtYXh3JyxcbiAgICAnbWludycsXG4gICAgJ2gnLFxuICAgICdtYXhoJyxcbiAgICAnbWluaCcsXG4gICAgJ2JnJyxcbiAgICAnYycsXG4gICAgJ2JvcmRlckNvbG9yJyxcbiAgICAnYm9yZGVyV2lkdGgnLFxuICAgICdib3JkZXJTdHlsZScsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvcmRlclRvcCcsXG4gICAgJ2JvcmRlclJpZ2h0JyxcbiAgICAnYm9yZGVyQm90dG9tJyxcbiAgICAnYm9yZGVyTGVmdCcsXG4gICAgJ2JvcmRlclJhZGl1cycsXG4gICAgJ2JvcmRlclRvcFJpZ2h0UmFkaXVzJyxcbiAgICAnYm9yZGVyVG9wTGVmdFJhZGl1cycsXG4gICAgJ2JvcmRlckJvdHRvbVJpZ2h0UmFkaXVzJyxcbiAgICAnYm9yZGVyQm90dG9tTGVmdFJhZGl1cycsXG4gICAgJ2JvcmRlclRvcFJhZGl1cycsXG4gICAgJ2JvcmRlclJpZ2h0UmFkaXVzJyxcbiAgICAnYm9yZGVyQm90dG9tUmFkaXVzJyxcbiAgICAnYm9yZGVyTGVmdFJhZGl1cycsXG4gICAgJ2xpbmVIZWlnaHQnLFxuICAgICdmb250V2VpZ2h0JyxcbiAgICAnZncnLFxuICAgICdmb250U2l6ZScsXG4gICAgJ2ZzJyxcbiAgICAnZm9udEZhbWlseScsXG4gICAgJ29wYWNpdHknLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdsYXlvdXRCbGVlZCcsXG4gICAgJ3N1YmdyaWQnLFxuICBdKTtcblxuICBwcm90ZWN0ZWQgdXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzOiBNYXA8c3RyaW5nLCBhbnk+KSB7XG4gICAgc3VwZXIudXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKTtcblxuICAgIC8vIENoZWNrIGlmIGFueSBjb250ZW50IHByb3AgaGFzIGNoYW5nZWQgdG8gZGV0ZXJtaW5lIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBpbnN0YW5jZSBzdHlsZXNcbiAgICBsZXQgc2hvdWxkVXBkYXRlU3R5bGVzID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgY2hhbmdlZFByb3BzLmtleXMoKSkge1xuICAgICAgaWYgKE10ZUNvbnRlbnRCYXNlLmNvbnRlbnRQcm9wcy5oYXMoa2V5KSkge1xuICAgICAgICBzaG91bGRVcGRhdGVTdHlsZXMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkVXBkYXRlU3R5bGVzKSB7XG4gICAgICAvLyBEb3VibGUgdGhlIGA6aG9zdGAgc2VsZWN0b3IgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgYmV5b25kIG1vc3QgY29tcG9uZW50IGxldmVsIHN0eWxlcyBieSBkZWZhdWx0XG4gICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoJ2NvbnRlbnQtYmFzZScsIHNlbGVjdG9yRmFjdG9yeSh0aGlzLmNvbnRlbnRTdHlsZVNlbGVjdG9yUm9vdCksIHtcbiAgICAgICAgLy8gU3BhY2luZ1xuICAgICAgICBtOiB0aGlzLm0sXG4gICAgICAgIG14OiB0aGlzLm14LFxuICAgICAgICBteTogdGhpcy5teSxcbiAgICAgICAgbXQ6IHRoaXMubXQsXG4gICAgICAgIG1yOiB0aGlzLm1yLFxuICAgICAgICBtYjogdGhpcy5tYixcbiAgICAgICAgbWw6IHRoaXMubWwsXG4gICAgICAgIHA6IHRoaXMucCxcbiAgICAgICAgcHg6IHRoaXMucHgsXG4gICAgICAgIHB5OiB0aGlzLnB5LFxuICAgICAgICBwdDogdGhpcy5wdCxcbiAgICAgICAgcHI6IHRoaXMucHIsXG4gICAgICAgIHBiOiB0aGlzLnBiLFxuICAgICAgICBwbDogdGhpcy5wbCxcbiAgICAgICAgLy8gUG9zaXRpb25pbmdcbiAgICAgICAgZDogdGhpcy5zdWJncmlkID8gJ2dyaWQnIDogdGhpcy5kLFxuICAgICAgICBhbGlnbkl0ZW1zOiB0aGlzLmEgPz8gdGhpcy5hbGlnbkl0ZW1zLFxuICAgICAgICBhbGlnblNlbGY6IHRoaXMuYWxpZ25TZWxmLFxuICAgICAgICBhbGlnbkNvbnRlbnQ6IHRoaXMuYWxpZ25Db250ZW50LFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogdGhpcy5qID8/IHRoaXMuanVzdGlmeUNvbnRlbnQsXG4gICAgICAgIGp1c3RpZnlJdGVtczogdGhpcy5qdXN0aWZ5SXRlbXMsXG4gICAgICAgIGp1c3RpZnlTZWxmOiB0aGlzLmp1c3RpZnlTZWxmLFxuICAgICAgICBmbGV4OiB0aGlzLmZsZXgsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uID8/IHRoaXMuZmxleERpcmVjdGlvbixcbiAgICAgICAgZmxleEJhc2lzOiB0aGlzLmJhc2lzID8/IHRoaXMuZmxleEJhc2lzLFxuICAgICAgICBmbGV4U2hyaW5rOiB0aGlzLnNocmluayA/PyB0aGlzLmZsZXhTaHJpbmssXG4gICAgICAgIGZsZXhHcm93OiB0aGlzLmdyb3cgPz8gdGhpcy5mbGV4R3JvdyxcbiAgICAgICAgZmxleFdyYXA6IHRoaXMud3JhcCA/PyB0aGlzLmZsZXhXcmFwLFxuICAgICAgICBvcmRlcjogdGhpcy5vcmRlcixcbiAgICAgICAgZ2FwOiB0aGlzLmdhcCxcbiAgICAgICAgY29sdW1uR2FwOiB0aGlzLmNvbHVtbkdhcCxcbiAgICAgICAgcm93R2FwOiB0aGlzLnJvd0dhcCxcbiAgICAgICAgZ3JpZENvbHVtbjogdGhpcy5sYXlvdXRCbGVlZCA/IHRoaXMubGF5b3V0QmxlZWQgOiB0aGlzLmdyaWRDb2x1bW4sXG4gICAgICAgIGdyaWRSb3c6IHRoaXMuZ3JpZFJvdyxcbiAgICAgICAgZ3JpZEF1dG9GbG93OiB0aGlzLmdyaWRBdXRvRmxvdyxcbiAgICAgICAgZ3JpZEF1dG9Db2x1bW5zOiB0aGlzLmdyaWRBdXRvQ29sdW1ucyxcbiAgICAgICAgZ3JpZEF1dG9Sb3dzOiB0aGlzLmdyaWRBdXRvUm93cyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogdGhpcy5zdWJncmlkID8gJ3N1YmdyaWQnIDogdGhpcy5ncmlkVGVtcGxhdGVDb2x1bW5zLFxuICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiB0aGlzLmdyaWRUZW1wbGF0ZVJvd3MsXG4gICAgICAgIGdyaWRUZW1wbGF0ZUFyZWFzOiB0aGlzLmdyaWRUZW1wbGF0ZUFyZWFzLFxuICAgICAgICBncmlkQXJlYTogdGhpcy5ncmlkQXJlYSxcbiAgICAgICAgLy8gU2l6aW5nXG4gICAgICAgIHc6IHRoaXMudyxcbiAgICAgICAgbWF4dzogdGhpcy5tYXh3LFxuICAgICAgICBtaW53OiB0aGlzLm1pbncsXG4gICAgICAgIGg6IHRoaXMuaCxcbiAgICAgICAgbWF4aDogdGhpcy5tYXhoLFxuICAgICAgICBtaW5oOiB0aGlzLm1pbmgsXG4gICAgICAgIC8vIENvbG9yc1xuICAgICAgICBiZzogdGhpcy5iZyxcbiAgICAgICAgYzogdGhpcy5jLFxuICAgICAgICAvLyBCb3JkZXJzXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGlzLmJvcmRlckNvbG9yLFxuICAgICAgICBib3JkZXJXaWR0aDogdGhpcy5ib3JkZXJXaWR0aCxcbiAgICAgICAgYm9yZGVyU3R5bGU6IHRoaXMuYm9yZGVyU3R5bGUsXG4gICAgICAgIGJvcmRlcjogdGhpcy5ib3JkZXJcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJUb3A6IHRoaXMuYm9yZGVyVG9wXG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm9yZGVyUmlnaHQ6IHRoaXMuYm9yZGVyUmlnaHRcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJMZWZ0OiB0aGlzLmJvcmRlckxlZnRcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJCb3R0b206IHRoaXMuYm9yZGVyQm90dG9tXG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgLy8gQm9yZGVyIFJhZGl1c1xuICAgICAgICBib3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyUmFkaXVzLFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlclRvcFJpZ2h0UmFkaXVzID8/IHRoaXMuYm9yZGVyVG9wUmFkaXVzID8/IHRoaXMuYm9yZGVyUmlnaHRSYWRpdXMsXG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJUb3BMZWZ0UmFkaXVzID8/IHRoaXMuYm9yZGVyVG9wUmFkaXVzID8/IHRoaXMuYm9yZGVyTGVmdFJhZGl1cyxcbiAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA/PyB0aGlzLmJvcmRlckJvdHRvbVJhZGl1cyA/PyB0aGlzLmJvcmRlclJpZ2h0UmFkaXVzLFxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOlxuICAgICAgICAgIHRoaXMuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA/PyB0aGlzLmJvcmRlckJvdHRvbVJhZGl1cyA/PyB0aGlzLmJvcmRlckxlZnRSYWRpdXMsXG4gICAgICAgIC8vIEZvbnRzXG4gICAgICAgIGxpbmVIZWlnaHQ6IHRoaXMubGluZUhlaWdodCxcbiAgICAgICAgZm9udFdlaWdodDogdGhpcy5mdyA/PyB0aGlzLmZvbnRXZWlnaHQsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLmZzID8/IHRoaXMuZm9udFNpemUsXG4gICAgICAgIGZvbnRGYW1pbHk6IHRoaXMuZm9udEZhbWlseSxcbiAgICAgICAgLy8gT3BhY2l0eVxuICAgICAgICBvcGFjaXR5OiB0aGlzLm9wYWNpdHksXG4gICAgICAgIC8vIEVsZXZhdGlvblxuICAgICAgICBlbGV2YXRpb246IHRoaXMuZWxldmF0aW9uLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgZGVmYXVsdENvbnZlcnRlciB9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBjb25zdCBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgPSB7XG4gIGZyb21BdHRyaWJ1dGU6ICh2YWx1ZSwgdHlwZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAodmFsdWU/LlswXSA9PT0gJ3snKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLmZyb21BdHRyaWJ1dGUodmFsdWUsIE9iamVjdCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLmZyb21BdHRyaWJ1dGUodmFsdWUsIHR5cGUpO1xuICB9LFxuICB0b0F0dHJpYnV0ZTogKHZhbHVlLCB0eXBlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLnRvQXR0cmlidXRlKHZhbHVlLCBPYmplY3QpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdENvbnZlcnRlci50b0F0dHJpYnV0ZSh2YWx1ZSwgdHlwZSk7XG4gIH0sXG59O1xuIiwgImltcG9ydCB7IERpcmVjdGl2ZVJlc3VsdCB9IGZyb20gJ2xpdC9kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHsgdW5zYWZlU1ZHLCBVbnNhZmVTVkdEaXJlY3RpdmUgfSBmcm9tICdsaXQvZGlyZWN0aXZlcy91bnNhZmUtc3ZnLmpzJztcblxuZXhwb3J0IGNvbnN0IGhlYkxvZ29TdmdDb250ZW50czogRGlyZWN0aXZlUmVzdWx0PHR5cGVvZiBVbnNhZmVTVkdEaXJlY3RpdmU+ID0gdW5zYWZlU1ZHKFxuICBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiBpZD1cIkxheWVyXzFcIiB4PVwiMFwiIHk9XCIwXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgNTM2LjI3IDE4Ni4yNFwiPjxzdHlsZT4uc3Qwe2ZpbGw6I2UxMjUxYn0uc3Qxe2ZpbGw6I2ZmZn08L3N0eWxlPjxnIGlkPVwiX3gzMV8tSEVCX01BSU5fTE9HT18wMDAwMDA5NjA0MzQwNDIwNjg2MTg4MDg3MDAwMDAwNDgxMzI0MDkzODk0Njg1NTM1NV9cIj48cGF0aCBkPVwiTTkzLjEyIDE4Ni4yNEM0MS42OSAxODYuMjQgMCAxNDQuNTUgMCA5My4xMlM0MS42OSAwIDkzLjEyIDBoMzUwLjAzYzUxLjQzIDAgOTMuMTIgNDEuNjkgOTMuMTIgOTMuMTJzLTQxLjY5IDkzLjEyLTkzLjEyIDkzLjEySDkzLjEyelwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNOTMuMTIgMTc0LjE5Yy00NC43NiAwLTgxLjA1LTM2LjI5LTgxLjA1LTgxLjA1czM2LjI5LTgxLjA1IDgxLjA1LTgxLjA1aDM1MC4wM2M0NC43NiAwIDgxLjA1IDM2LjI5IDgxLjA1IDgxLjA1cy0zNi4yOSA4MS4wNS04MS4wNSA4MS4wNUg5My4xMnpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwibTQ0NC45NCAyNC4xMS0zNTMuNjQuMDJjLTM3LjA3IDAtNjcuMiAzMC45NS02Ny4xNiA2OS4wNyAwIDM3LjkzIDMwLjE2IDY4Ljg4IDY3LjE2IDY4Ljg4bDM1My42My0uMDdjMzcuMS0uMDMgNjcuMTUtMzAuODkgNjcuMi02OC44NS0uMDQtMzguMi0zMC4wOS02OS4wNS02Ny4xOS02OS4wNXpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTIyNC4yMSAxMzIuMjNoODguMWwuNzYtMTIuOThoLTU2LjE4di0xNC44NGg0NC44MVY4OS4zM2gtNDQuODFWNzMuMjVsNTguOTItLjAxIDEuMTUtMTkuMjloLTk3LjR6TTEzMi40NiA1My45NXYzNS4zOEgxMDguNlY1My45NUg3MS4yN2w0LjY1IDc4LjI4aDMyLjY4di0yNy44MmgyMy44NnYyNy44MmgzMi42OGw0LjY1LTc4LjI4ek00NDguNTIgOTcuMDJjOS45LTIuODMgMTYuNDktOC41OSAxNi40OS0yMC42Ny4wMy0xMy44Mi0xMS4wNi0yMi40LTI1LjI5LTIyLjRoLTczLjI4bDQuNjUgNzguMjloNjQuMDZjMjcuOTggMCAyNi4zOS0xOC44IDI2LjM5LTE4LjggMC03Ljk2LTUuMzMtMTQuNjEtMTMuMDItMTYuNDJ6bS0zMS4wMiAyMi4yMmgtMTMuNzF2LTE0LjgzaDEzLjIyYzcuMjMgMCAxMS4wOSAyLjMxIDExLjA5IDcuNDguMDEgNC45NC0zLjQ5IDcuMzUtMTAuNiA3LjM1em0xLjA2LTI5LjkxaC0xNC43N1Y3My4yNWgxNC4yNWM3Ljg1IDAgMTIuMDMgMi41IDEyLjAzIDguMTEgMCA1LjM1LTMuNzkgNy45Ny0xMS41MSA3Ljk3ek0xODIuNzYgODkuMzNsLjkgMTUuMDhoMjIuMDNsLjktMTUuMDh6TTMyOS42NCA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwiTTUzMC4zNCAxNzIuNzdjMC0yLjQ2LTEuNDYtMy41NC00LjQtMy41NGgtNC43NHYxMi40NGgxLjg4di01LjM5aDIuMTdsMy4yOCA1LjM5aDIuMTFsLTMuNTQtNS40OGMxLjg0LS4yMiAzLjI0LTEuMTkgMy4yNC0zLjQyem0tNy4yNSAxLjkydi0zLjg2aDIuNTdjMS4zMSAwIDIuNzEuMjkgMi43MSAxLjgzIDAgMS45Mi0xLjQzIDIuMDMtMy4wMyAyLjAzaC0yLjI1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNNTI1LjM3IDE2NC42N2MtNS45MyAwLTEwLjk2IDQuNTctMTAuOTYgMTAuNzYgMCA2LjI0IDUuMDIgMTAuODEgMTAuOTYgMTAuODEgNS44OCAwIDEwLjktNC41NyAxMC45LTEwLjgxIDAtNi4yLTUuMDItMTAuNzYtMTAuOS0xMC43NnptMCAxOS43OGMtNC45MyAwLTguNzktMy44My04Ljc5LTkuMDIgMC01LjExIDMuODUtOC45NiA4Ljc5LTguOTYgNC44OCAwIDguNzMgMy44NSA4LjczIDguOTYgMCA1LjE5LTMuODUgOS4wMi04LjczIDkuMDJ6XCIgY2xhc3M9XCJzdDBcIi8+PC9nPjwvc3ZnPmBcbik7XG5cbmV4cG9ydCBjb25zdCBoZWJMb2dvV2hpdGVDb3B5cmlnaHRTdmdDb250ZW50czogRGlyZWN0aXZlUmVzdWx0PHR5cGVvZiBVbnNhZmVTVkdEaXJlY3RpdmU+ID1cbiAgdW5zYWZlU1ZHKFxuICAgIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIGlkPVwiTGF5ZXJfMVwiIHg9XCIwXCIgeT1cIjBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MzYuMjcgMTg2LjI0XCI+PHN0eWxlPi5zdDB7ZmlsbDojZTEyNTFifS5zdDF7ZmlsbDojZmZmfTwvc3R5bGU+PGcgaWQ9XCJfeDMxXy1IRUJfTUFJTl9MT0dPXzAwMDAwMDk2MDQzNDA0MjA2ODYxODgwODcwMDAwMDA0ODEzMjQwOTM4OTQ2ODU1MzU1X1wiPjxwYXRoIGQ9XCJNOTMuMTIgMTg2LjI0QzQxLjY5IDE4Ni4yNCAwIDE0NC41NSAwIDkzLjEyUzQxLjY5IDAgOTMuMTIgMGgzNTAuMDNjNTEuNDMgMCA5My4xMiA0MS42OSA5My4xMiA5My4xMnMtNDEuNjkgOTMuMTItOTMuMTIgOTMuMTJIOTMuMTJ6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk05My4xMiAxNzQuMTljLTQ0Ljc2IDAtODEuMDUtMzYuMjktODEuMDUtODEuMDVzMzYuMjktODEuMDUgODEuMDUtODEuMDVoMzUwLjAzYzQ0Ljc2IDAgODEuMDUgMzYuMjkgODEuMDUgODEuMDVzLTM2LjI5IDgxLjA1LTgxLjA1IDgxLjA1SDkzLjEyelwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJtNDQ0Ljk0IDI0LjExLTM1My42NC4wMmMtMzcuMDcgMC02Ny4yIDMwLjk1LTY3LjE2IDY5LjA3IDAgMzcuOTMgMzAuMTYgNjguODggNjcuMTYgNjguODhsMzUzLjYzLS4wN2MzNy4xLS4wMyA2Ny4xNS0zMC44OSA2Ny4yLTY4Ljg1LS4wNC0zOC4yLTMwLjA5LTY5LjA1LTY3LjE5LTY5LjA1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNMjI0LjIxIDEzMi4yM2g4OC4xbC43Ni0xMi45OGgtNTYuMTh2LTE0Ljg0aDQ0LjgxVjg5LjMzaC00NC44MVY3My4yNWw1OC45Mi0uMDEgMS4xNS0xOS4yOWgtOTcuNHpNMTMyLjQ2IDUzLjk1djM1LjM4SDEwOC42VjUzLjk1SDcxLjI3bDQuNjUgNzguMjhoMzIuNjh2LTI3LjgyaDIzLjg2djI3LjgyaDMyLjY4bDQuNjUtNzguMjh6TTQ0OC41MiA5Ny4wMmM5LjktMi44MyAxNi40OS04LjU5IDE2LjQ5LTIwLjY3LjAzLTEzLjgyLTExLjA2LTIyLjQtMjUuMjktMjIuNGgtNzMuMjhsNC42NSA3OC4yOWg2NC4wNmMyNy45OCAwIDI2LjM5LTE4LjggMjYuMzktMTguOCAwLTcuOTYtNS4zMy0xNC42MS0xMy4wMi0xNi40MnptLTMxLjAyIDIyLjIyaC0xMy43MXYtMTQuODNoMTMuMjJjNy4yMyAwIDExLjA5IDIuMzEgMTEuMDkgNy40OC4wMSA0Ljk0LTMuNDkgNy4zNS0xMC42IDcuMzV6bTEuMDYtMjkuOTFoLTE0Ljc3VjczLjI1aDE0LjI1YzcuODUgMCAxMi4wMyAyLjUgMTIuMDMgOC4xMSAwIDUuMzUtMy43OSA3Ljk3LTExLjUxIDcuOTd6TTE4Mi43NiA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpNMzI5LjY0IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4ek01MjguMzQgMTcwLjc3YzAtMi40Ni0xLjQ2LTMuNTQtNC40LTMuNTRoLTQuNzR2MTIuNDRoMS44OHYtNS4zOWgyLjE3bDMuMjggNS4zOWgyLjExbC0zLjU0LTUuNDhjMS44NC0uMjIgMy4yNC0xLjE5IDMuMjQtMy40MnptLTcuMjUgMS45MnYtMy44NmgyLjU3YzEuMzEgMCAyLjcxLjI5IDIuNzEgMS44MyAwIDEuOTItMS40MyAyLjAzLTMuMDMgMi4wM2gtMi4yNXpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwiTTUyMy4zNyAxNjIuNjdjLTUuOTMgMC0xMC45NiA0LjU3LTEwLjk2IDEwLjc2IDAgNi4yNCA1LjAyIDEwLjgxIDEwLjk2IDEwLjgxIDUuODggMCAxMC45LTQuNTcgMTAuOS0xMC44MSAwLTYuMi01LjAyLTEwLjc2LTEwLjktMTAuNzZ6bTAgMTkuNzhjLTQuOTMgMC04Ljc5LTMuODMtOC43OS05LjAyIDAtNS4xMSAzLjg1LTguOTYgOC43OS04Ljk2IDQuODggMCA4LjczIDMuODUgOC43MyA4Ljk2IDAgNS4xOS0zLjg1IDkuMDItOC43MyA5LjAyelwiIGNsYXNzPVwic3QxXCIvPjwvZz48L3N2Zz5gXG4gICk7XG5cbmV4cG9ydCBjb25zdCBoZWJMb2dvSW52ZXJzZVN2Z0NvbnRlbnRzOiBEaXJlY3RpdmVSZXN1bHQ8dHlwZW9mIFVuc2FmZVNWR0RpcmVjdGl2ZT4gPSB1bnNhZmVTVkcoXG4gIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIGlkPVwiTGF5ZXJfMVwiIHg9XCIwXCIgeT1cIjBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MzYuMjcgMTg2LjI0XCI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggZD1cIk00NDMuMTUgMEg5My4xMkM0MS42OSAwIDAgNDEuNjkgMCA5My4xMmMwIDUxLjQzIDQxLjY5IDkzLjEyIDkzLjEyIDkzLjEyaDM1MC4wM2M1MS40MyAwIDkzLjEyLTQxLjY5IDkzLjEyLTkzLjEyQzUzNi4yNyA0MS42OSA0OTQuNTggMCA0NDMuMTUgMHptMCAxNzQuMTlIOTMuMTJjLTQ0Ljc2IDAtODEuMDUtMzYuMjktODEuMDUtODEuMDVzMzYuMjktODEuMDUgODEuMDUtODEuMDVoMzUwLjAzYzQ0Ljc2IDAgODEuMDUgMzYuMjkgODEuMDUgODEuMDUuMDEgNDQuNzYtMzYuMjggODEuMDUtODEuMDUgODEuMDV6bS0xMy4wOC05Mi44M2MwIDUuMzYtMy43OSA3Ljk4LTExLjUxIDcuOThoLTE0Ljc3VjczLjI1aDE0LjI1YzcuODQgMCAxMi4wMyAyLjUgMTIuMDMgOC4xMXptLTEuOTYgMzAuNTNjMCA0Ljk0LTMuNSA3LjM2LTEwLjYxIDcuMzZoLTEzLjcxdi0xNC44M2gxMy4yMmM3LjI0LS4wMSAxMS4xIDIuMyAxMS4xIDcuNDd6bTE2LjgzLTg3Ljc4LTM1My42NC4wMmMtMzcuMDcgMC02Ny4yIDMwLjk1LTY3LjE2IDY5LjA3IDAgMzcuOTIgMzAuMTYgNjguODggNjcuMTYgNjguODhsMzUzLjYzLS4wN2MzNy4xLS4wMyA2Ny4xNS0zMC44OSA2Ny4yLTY4Ljg1LS4wNC0zOC4yLTMwLjA5LTY5LjA1LTY3LjE5LTY5LjA1em0tMjc5LjggMTA4LjEyaC0zMi42OHYtMjcuODJIMTA4LjZ2MjcuODJINzUuOTJsLTQuNjUtNzguMjhoMzcuMzN2MzUuMzhoMjMuODZWNTMuOTVoMzcuMzNsLTQuNjUgNzguMjh6bTQwLjU1LTI3LjgyaC0yMi4wNGwtLjktMTUuMDhoMjMuODNsLS44OSAxNS4wOHptMTEwLjEyLTMxLjE3LTU4LjkyLjAxdjE2LjA4aDQ0LjgxdjE1LjA4aC00NC44MXYxNC44M2g1Ni4xOGwtLjc2IDEyLjk5aC04OC4xbC00LjY1LTc4LjI4aDk3LjRsLTEuMTUgMTkuMjl6bTM2Ljc2IDMxLjE3aC0yMi4wNGwtLjktMTUuMDhoMjMuODNsLS44OSAxNS4wOHptMTA4Ljk3IDkuMDNzMS41OSAxOC44LTI2LjM5IDE4LjhoLTY0LjA2bC00LjY1LTc4LjI5aDczLjI4YzE0LjIzIDAgMjUuMzEgOC41OCAyNS4yOSAyMi40IDAgMTIuMDgtNi41OSAxNy44NS0xNi40OSAyMC42NyA3LjY5IDEuODEgMTMuMDIgOC40NiAxMy4wMiAxNi40MnpNNTMwLjM0IDE3Mi43N2MwLTIuNDYtMS40Ni0zLjU0LTQuNC0zLjU0aC00Ljc0djEyLjQ0aDEuODh2LTUuMzloMi4xN2wzLjI4IDUuMzloMi4xMWwtMy41NC01LjQ4YzEuODQtLjIyIDMuMjQtMS4xOSAzLjI0LTMuNDJ6bS03LjI1IDEuOTJ2LTMuODZoMi41N2MxLjMxIDAgMi43MS4yOSAyLjcxIDEuODMgMCAxLjkyLTEuNDMgMi4wMy0zLjAzIDIuMDNoLTIuMjV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk01MjUuMzcgMTY0LjY3Yy01LjkzIDAtMTAuOTYgNC41Ny0xMC45NiAxMC43NiAwIDYuMjQgNS4wMiAxMC44MSAxMC45NiAxMC44MSA1Ljg4IDAgMTAuOS00LjU3IDEwLjktMTAuODEgMC02LjItNS4wMi0xMC43Ni0xMC45LTEwLjc2em0wIDE5Ljc4Yy00LjkzIDAtOC43OS0zLjgzLTguNzktOS4wMiAwLTUuMTEgMy44NS04Ljk2IDguNzktOC45NiA0Ljg4IDAgOC43MyAzLjg1IDguNzMgOC45NiAwIDUuMTktMy44NSA5LjAyLTguNzMgOS4wMnpcIiBjbGFzcz1cInN0MFwiLz48L3N2Zz5gXG4pO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG5pbXBvcnQge1xuICBjb25maWcgYXMgZ2V0dGVyQ29uZmlnLFxuICBzZXRDb25maWcgYXMgc2V0dGVyQ29uZmlnLFxuICBNb3J0YXJUaGVtZUNvbmZpZyxcbn0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgU3Vic2V0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNTc3IsIHNpZ25hbCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCB0eXBlIE10ZVRoZW1lID0gJ2RlZmF1bHQnIHwgJ3B4TGlnaHQnIHwgJ2N4TGlnaHQnIHwgJ3J4TGlnaHQnO1xuXG5leHBvcnQgdHlwZSBNdGVDb2xvclNjaGVtZSA9ICdsaWdodCcgfCAnZGFyaycgfCAnc3lzdGVtJztcblxuY29uc3QgQ0FDSEVfVE9fS0VZID0gJ210ZS50aGVtZS5jYWNoZS10byc7XG5jb25zdCBDT0xPUl9TQ0hFTUVfS0VZID0gJ210ZS50aGVtZS5nbG9iYWwtY29sb3Itc2NoZW1lJztcblxuY2xhc3MgX010ZVRoZW1lU2VydmljZSB7XG4gIGNvbmZpZyA9IGdldHRlckNvbmZpZztcblxuICBwcml2YXRlIHJvb3RPYnNlcnZlcj86IE11dGF0aW9uT2JzZXJ2ZXI7XG4gIHByaXZhdGUgdGhlbWVTaWduYWwgPSBzaWduYWw8TXRlVGhlbWUgfCBudWxsPih0aGlzLmdldEdsb2JhbFRoZW1lKCkpO1xuICBwcml2YXRlIGNvbG9yU2NoZW1lU2lnbmFsID0gc2lnbmFsPE10ZUNvbG9yU2NoZW1lIHwgbnVsbD4odGhpcy5nZXRHbG9iYWxDb2xvclNjaGVtZSgpID8/ICdsaWdodCcpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdENhY2hlKCk7XG4gIH1cblxuICAvKiogQ29uZmlndXJlcyB0aGUgYE10ZVRoZW1lU2VydmljZWAgdG8gY2FjaGUgY29sb3Itc2NoZW1lIGNoYW5nZXMgdG8gYGxvY2FsU3RvcmFnZWAsIGBzZXNzaW9uU3RvcmFnZWAsIG9yIG5laXRoZXIuICovXG4gIHB1YmxpYyBjYWNoZUNvbG9yU2NoZW1lVG8obWV0aG9kOiAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZScpIHtcbiAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBDbGVhciBhbGwga2V5cyBmcm9tIGFsbCBzdG9yYWdlIGxvY2F0aW9ucyBpZiBub25lXG4gICAgaWYgKG1ldGhvZCA9PT0gJ25vbmUnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShDT0xPUl9TQ0hFTUVfS0VZKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB0cnkge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oQ09MT1JfU0NIRU1FX0tFWSk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50U2NoZW1lID0gdGhpcy5jb2xvclNjaGVtZVNpZ25hbC5nZXQoKTtcbiAgICAvLyBTZXQgY2FjaGUgbWV0aG9kIGluIHN0b3JhZ2UgLSBUcnkgbG9jYWxTdG9yYWdlIGZpcnN0XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENBQ0hFX1RPX0tFWSwgbWV0aG9kKTtcbiAgICAgIGlmIChjdXJyZW50U2NoZW1lKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENPTE9SX1NDSEVNRV9LRVksIGN1cnJlbnRTY2hlbWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdNdGVUaGVtZVNlcnZpY2U6IENvdWxkIG5vdCBzZXQgY29sb3Igc2NoZW1lIGNhY2hlIG1ldGhvZCB0byBgbG9jYWxTdG9yYWdlYC4gQXR0ZW1wdGluZyBmYWxsYmFjayB0byBgc2Vzc2lvblN0b3JhZ2VgLiBDYWNoaW5nIHdpbGwgb25seSBoYXBwZW4gdG8gc2Vzc2lvblN0b3JhZ2UuJ1xuICAgICAgKTtcbiAgICAgIC8vIFRyeSBzZXNzaW9uU3RvcmFnZSBuZXh0XG4gICAgICB0cnkge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKENBQ0hFX1RPX0tFWSwgJ3Nlc3Npb25TdG9yYWdlJyk7XG4gICAgICAgIGlmIChjdXJyZW50U2NoZW1lKSB7XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShDT0xPUl9TQ0hFTUVfS0VZLCBjdXJyZW50U2NoZW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdNdGVUaGVtZVNlcnZpY2U6IENvdWxkIG5vdCBzZXQgY29sb3Igc2NoZW1lIGNhY2hlIG1ldGhvZCB0byBgbG9jYWxTdG9yYWdlYCBvciBgc2Vzc2lvblN0b3JhZ2VgLiBDYWNoaW5nIG5vdCBlbmFibGVkLidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgY3VycmVudCBnbG9iYWwgdGhlbWUgb24gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIHNldEdsb2JhbFRoZW1lKHRoZW1lOiBNdGVUaGVtZSkge1xuICAgIGlmICghdGhlbWUgfHwgdHlwZW9mIHRoZW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdGVUaGVtZVNlcnZpY2U6IEdsb2JhbCB0aGVtZSBwYXJhbSBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICAgIH1cbiAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgIGlmICh0aGVtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2RhdGEtbXRlLXRoZW1lJywgdGhlbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbXRlLXRoZW1lJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldHMgdGhlIGN1cnJlbnQgZ2xvYmFsIGNvbG9yLXNjaGVtZSBvbiB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgc2V0R2xvYmFsQ29sb3JTY2hlbWUoY29sb3JTY2hlbWU6IE10ZUNvbG9yU2NoZW1lKSB7XG4gICAgaWYgKCFjb2xvclNjaGVtZSB8fCB0eXBlb2YgY29sb3JTY2hlbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ010ZVRoZW1lU2VydmljZTogR2xvYmFsIGNvbG9yU2NoZW1lIHBhcmFtIG11c3QgYmUgYSBzdHJpbmcuJyk7XG4gICAgfVxuICAgIGNvbnN0IHNjaGVtZSA9IGNvbG9yU2NoZW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHNjaGVtZSA9PT0gJ2RhcmsnIHx8IHNjaGVtZSA9PT0gJ2xpZ2h0JyB8fCBzY2hlbWUgPT09ICdzeXN0ZW0nKSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZScsIHNjaGVtZSk7XG4gICAgICB0aGlzLnNldENhY2hlVmFsdWUoQ09MT1JfU0NIRU1FX0tFWSwgY29sb3JTY2hlbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBjdXJyZW50IGdsb2JhbCB0aGVtZSBmcm9tIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBnZXRHbG9iYWxUaGVtZSgpOiBNdGVUaGVtZSB8IG51bGwge1xuICAgIGNvbnN0IHZhbHVlID0gZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCdkYXRhLW10ZS10aGVtZScpIGFzIE10ZVRoZW1lO1xuICAgIGlmICghWydkZWZhdWx0JywgJ3B4TGlnaHQnLCAnY3hMaWdodCcsICdyeExpZ2h0J10uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlIGFzIE10ZVRoZW1lO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBjdXJyZW50IGdsb2JhbCBjb2xvci1zY2hlbWUgZnJvbSB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgZ2V0R2xvYmFsQ29sb3JTY2hlbWUoKTogTXRlQ29sb3JTY2hlbWUgfCBudWxsIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZShcbiAgICAgICdkYXRhLW10ZS1jb2xvci1zY2hlbWUnXG4gICAgKSBhcyBNdGVDb2xvclNjaGVtZTtcbiAgICBpZiAoIVsnbGlnaHQnLCAnZGFyaycsICdzeXN0ZW0nXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgYXMgTXRlQ29sb3JTY2hlbWU7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgYSByZWFjdGl2ZSBzaWduYWwgdGhhdCB3aWxsIHVwZGF0ZSBhbnkgdGltZSB0aGUgZ2xvYmFsIHRoZW1lIGNoYW5nZXMgKi9cbiAgcHVibGljIHNlbGVjdEdsb2JhbFRoZW1lKCkge1xuICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgcmV0dXJuIHRoaXMudGhlbWVTaWduYWw7XG4gIH1cblxuICAvKiogUmV0dXJucyBhIHJlYWN0aXZlIHNpZ25hbCB0aGF0IHdpbGwgdXBkYXRlIGFueSB0aW1lIHRoZSBnbG9iYWwgY29sb3Itc2NoZW1lIGNoYW5nZXMgKi9cbiAgcHVibGljIHNlbGVjdEdsb2JhbENvbG9yU2NoZW1lKCkge1xuICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgcmV0dXJuIHRoaXMuY29sb3JTY2hlbWVTaWduYWw7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgdmFsdWUgb2YgYWxsIG9mIHRoZSBnaXZlbiB0aGVtZSB2YXJpYWJsZXMgb24gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIHNldChcbiAgICBjb25maWdGbk9yT2JqOlxuICAgICAgfCBTdWJzZXQ8TW9ydGFyVGhlbWVDb25maWc+XG4gICAgICB8ICgoY29uZmlnOiBNb3J0YXJUaGVtZUNvbmZpZykgPT4gU3Vic2V0PE1vcnRhclRoZW1lQ29uZmlnPilcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWdGbk9yT2JqID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25maWdGbk9yT2JqID0gY29uZmlnRm5Pck9iaih0aGlzLmNvbmZpZyk7XG4gICAgfVxuICAgIGNvbnN0IG1hcHBpbmdzID0gdGhpcy5mbGF0dGVuUGF0aHMoY29uZmlnRm5Pck9iaik7XG4gICAgbWFwcGluZ3MuZm9yRWFjaCgoW3BhdGgsIHZhbF0pID0+IHtcbiAgICAgIGNvbnN0IGNzc1ZhciA9IHBhdGgucmVkdWNlKChhY2MsIHByb3ApID0+IHtcbiAgICAgICAgcmV0dXJuIGFjY1twcm9wXTtcbiAgICAgIH0sIHNldHRlckNvbmZpZyk7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5zdHlsZS5zZXRQcm9wZXJ0eShjc3NWYXIsIGAke3ZhbH1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciB0aGUgcmVxdWVzdGVkIHRoZW1lIHZhcmlhYmxlIGZyb20gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIGdldDxUPihrMTogKHRoZW1lQ29uZmlnOiBNb3J0YXJUaGVtZUNvbmZpZykgPT4gVCk6IFQ7XG4gIHB1YmxpYyBnZXQ8SzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZz4oazE6IEsxKTogTW9ydGFyVGhlbWVDb25maWdbSzFdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdPihcbiAgICBrMTogSzEsXG4gICAgazI6IEsyXG4gICk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1cbiAgPihrMTogSzEsIGsyOiBLMiwgazM6IEszKTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM107XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl0sXG4gICAgSzQgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVxuICA+KGsxOiBLMSwgazI6IEsyLCBrMzogSzMsIGs0OiBLNCk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXSxcbiAgICBLNCBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdLFxuICAgIEs1IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMywgazQ6IEs0LCBrNTogSzUpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM10sXG4gICAgSzUgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF0sXG4gICAgSzYgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMywgazQ6IEs0LCBrNTogSzUsIGs2OiBLNik6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVtLNV1bSzZdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM10sXG4gICAgSzUgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF0sXG4gICAgSzYgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdXG4gID4oXG4gICAgLi4ua2V5czpcbiAgICAgIHwgW0sxXVxuICAgICAgfCBbSzEsIEsyXVxuICAgICAgfCBbSzEsIEsyLCBLM11cbiAgICAgIHwgW0sxLCBLMiwgSzMsIEs0XVxuICAgICAgfCBbSzEsIEsyLCBLMywgSzQsIEs1XVxuICAgICAgfCBbSzEsIEsyLCBLMywgSzQsIEs1LCBLNl1cbiAgKTogYW55IHtcbiAgICBjb25zdCBbZm5dID0ga2V5cyA/PyBbbnVsbF07XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgY3NzVmFyID0gKGZuIGFzIGFueSkoc2V0dGVyQ29uZmlnKTtcbiAgICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGdsb2JhbFRoaXM/LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShjc3NWYXIpO1xuICAgIH1cbiAgICBjb25zdCBjc3NWYXIgPSBrZXlzLnJlZHVjZSgoYWNjOiBhbnksIGtleSkgPT4gYWNjW2tleV0sIHNldHRlckNvbmZpZyBhcyBhbnkpIGFzIHN0cmluZztcbiAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShnbG9iYWxUaGlzPy5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoY3NzVmFyKTtcbiAgfVxuXG4gIC8qKiBGbGF0dGVucyBhIGdpdmVuIG9iamVjdCB0byBhbiBhcnJheSBvZiBwYXRoIGtleXMgYW5kIGl0cyByZXN1bHRpbmcgdmFsdWUgKi9cbiAgcHJpdmF0ZSBmbGF0dGVuUGF0aHMob2JqOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBwYXRoOiBzdHJpbmdbXSA9IFtdKTogW3N0cmluZ1tdLCBhbnldW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IG5lc3RlZCA9IG9ialtrZXldO1xuICAgICAgaWYgKHR5cGVvZiBuZXN0ZWQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHBhdGgucHVzaChrZXkpO1xuICAgICAgICBPYmplY3QuYXNzaWduKGFjYywgdGhpcy5mbGF0dGVuUGF0aHMobmVzdGVkLCBwYXRoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoLnB1c2goa2V5KTtcbiAgICAgICAgYWNjLnB1c2goW3BhdGgsIG5lc3RlZF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU11dGF0aW9uRXZlbnQgPSAobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSB7XG4gICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGF0YS1tdGUtY29sb3Itc2NoZW1lJykge1xuICAgICAgICAgIHRoaXMuY29sb3JTY2hlbWVTaWduYWwuc2V0KHRoaXMuZ2V0R2xvYmFsQ29sb3JTY2hlbWUoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2RhdGEtbXRlLXRoZW1lJykge1xuICAgICAgICAgIHRoaXMudGhlbWVTaWduYWwuc2V0KHRoaXMuZ2V0R2xvYmFsVGhlbWUoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBpbml0Q2FjaGUoKSB7XG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2FjaGVDb2xvclNjaGVtZSA9IHRoaXMuZ2V0Q2FjaGVWYWx1ZShDT0xPUl9TQ0hFTUVfS0VZKTtcbiAgICAgICAgaWYgKGNhY2hlQ29sb3JTY2hlbWUgJiYgY2FjaGVDb2xvclNjaGVtZSAhPT0gJycpIHtcbiAgICAgICAgICB0aGlzLnNldEdsb2JhbENvbG9yU2NoZW1lKGNhY2hlQ29sb3JTY2hlbWUgYXMgTXRlQ29sb3JTY2hlbWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdE9ic2VydmVyKCkge1xuICAgIGlmICghaXNTc3IoKSAmJiAhdGhpcy5yb290T2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMucm9vdE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5oYW5kbGVNdXRhdGlvbkV2ZW50KTtcbiAgICAgIHRoaXMucm9vdE9ic2VydmVyLm9ic2VydmUoZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnZGF0YS1tdGUtdGhlbWUnLCAnZGF0YS1tdGUtY29sb3Itc2NoZW1lJ10sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENhY2hlTWV0aG9kKCk6ICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJyB8IG51bGwge1xuICAgIC8vIFJldHJpZXZlIGNhY2hlIG1ldGhvZFxuICAgIGxldCBjYWNoZU1ldGhvZDogJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnIHwgbnVsbCA9IG51bGw7XG4gICAgLy8gVHJ5IGxvY2FsU3RvcmFnZVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBjYWNoZU1ldGhvZCA9IHZhbCBhcyAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZSc7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gVHJ5IHNlc3Npb25TdG9yYWdlXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB2YWwgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICBjYWNoZU1ldGhvZCA9IHZhbCBhcyAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIHJldHVybiBjYWNoZU1ldGhvZDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2FjaGVWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGNhY2hlTWV0aG9kID0gdGhpcy5nZXRDYWNoZU1ldGhvZCgpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoY2FjaGVNZXRob2QgPT09ICdsb2NhbFN0b3JhZ2UnKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChjYWNoZU1ldGhvZCA9PT0gJ3Nlc3Npb25TdG9yYWdlJykge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cblxuICBwcml2YXRlIGdldENhY2hlVmFsdWUoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjYWNoZU1ldGhvZCA9IHRoaXMuZ2V0Q2FjaGVNZXRob2QoKTtcbiAgICB0cnkge1xuICAgICAgaWYgKGNhY2hlTWV0aG9kID09PSAnbG9jYWxTdG9yYWdlJykge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIH0gZWxzZSBpZiAoY2FjaGVNZXRob2QgPT09ICdzZXNzaW9uU3RvcmFnZScpIHtcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVUaGVtZVNlcnZpY2UgPSBuZXcgX010ZVRoZW1lU2VydmljZSgpO1xuIiwgImltcG9ydCB7IGlzU3NyLCBpc1BsYXRmb3JtIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IHR5cGUgUG9ydGFsU3RhY2sgPSAnb3ZlcmxheSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydGFsZWRFbGVtZW50TWV0YWRhdGEge1xuICBlbGVtZW50OiBFbGVtZW50O1xuICBzdGFjazogUG9ydGFsU3RhY2s7XG4gIGNoaWxkUG9ydGFsZWRFbGVtZW50czogU2V0PEVsZW1lbnQ+O1xuICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ/OiBFbGVtZW50O1xuICBiYWNrZHJvcD86IEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudFBvcnRhbENvbnRyb2xsZXIge1xuICBpZDogbnVtYmVyO1xuICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ6IEVsZW1lbnQ7XG4gIG9wdGlvbnM6IHsgc3RhY2s6IFBvcnRhbFN0YWNrIH07XG59XG5cbmV4cG9ydCB0eXBlIFBvcnRhbEFkYXB0ZXI8VCA9IGFueT4gPSAoXG4gIHBvcnRhbEVsZW1lbnQ6IFQsXG4gIG91dGxldEVsZW1lbnQ6IEVsZW1lbnRcbikgPT4gUHJvbWlzZTxhbnk+IHwgYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRhbE9wdGlvbnMge1xuICAvKiogUmVuZGVycyB0aGUgYmFja2Ryb3AgZGltbWVkICovXG4gIHdpdGhEaW1CYWNrZHJvcD86IGJvb2xlYW47XG5cbiAgLyoqIE1ha2VzIHRoZSBiYWNrZHJvcCBpZ25vcmUgcG9pbnRlciBldmVudHMuIFVzZWZ1bCBmb3IgdHJpZ2dlck9uIFwiaG92ZXJcIi4gKi9cbiAgd2l0aEluZXJ0QmFja2Ryb3A/OiBib29sZWFuO1xuXG4gIC8qKiBEaXNhYmxlcyB0aGUgYWJpbGl0eSB0byBzY3JvbGwgdGhlIHBhZ2UgYmVoaW5kIHRoZSBvdmVybGF5IHdoZW4gdHJ1ZSAqL1xuICB3aXRoU2Nyb2xsTG9jaz86IGJvb2xlYW47XG5cbiAgLyoqIENhbGxiYWNrIGZvciBoYW5kbGluZyBjbG9zZU9uQ2xpY2tPdXRzaWRlIGV2ZW50cyB3aGVuIHRoZSBwb3J0YWwncyBiYWNrZHJvcCBpcyBjbGlja2VkICovXG4gIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyPzogKCkgPT4gYW55O1xuXG4gIC8qKiBUaGUgYW5pbWF0aW9uIGR1cmF0aW9uIGZvciBmYWRpbmcgYSBzaGFkb3cgYmFja2Ryb3AgaW4vb3V0ICovXG4gIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuXG4gIC8qKiBBZGFwdGVyIGZvciBcInBvcnRhbGluZ1wiIGFuIGVsZW1lbnQgZnJvbSBvbmUgbG9jYXRpb24gaW4gdGhlIERPTSB0byBhbm90aGVyLiBMZXZlcmFnZWQgYnkgZnJhbWV3b3JrIHdyYXBwZXJzIGZvciBpbXByb3ZlZCBpbnRlcm9wLiAqL1xuICBwb3J0YWxBZGFwdGVyPzogUG9ydGFsQWRhcHRlcjtcbn1cblxuLyoqIERlZmF1bHQgbmF0aXZlIERPTSBhZGFwdGVyIGZvciBwb3J0YWxpbmcgYW4gZWxlbWVudCB0byBhbm90aGVyIHRhcmdldCBlbGVtZW50ICovXG5leHBvcnQgY29uc3QgZGVmYXVsdFBvcnRhbEFkYXB0ZXI6IFBvcnRhbEFkYXB0ZXIgPSAocG9ydGFsRWxlbSwgb3V0bGV0RWxlbSkgPT4ge1xuICBvdXRsZXRFbGVtPy5hcHBlbmRDaGlsZChwb3J0YWxFbGVtKTtcbn07XG5cbmNsYXNzIF9NdGVQb3J0YWxTZXJ2aWNlIHtcbiAgLyoqIFNoYXJlZCBnbG9iYWwgY29uc3QgZm9yIHN0YWNrIGVsZW1lbnQgcmVmcyAqL1xuICBwcml2YXRlIHN0YWNrRWxlbWVudHM6IHsgb3ZlcmxheTogRWxlbWVudCB9ID0ge1xuICAgIG92ZXJsYXk6IHVuZGVmaW5lZCxcbiAgfTtcblxuICAvKiogU2hhcmVkIGdsb2JhbCBjb25zdCBmb3IgcG9ydGFsZWQgZWxlbWVudHMgbWV0YWRhdGEgKi9cbiAgcHJpdmF0ZSBwb3J0YWxlZEVsZW1lbnRzID0gbmV3IE1hcDxudW1iZXIsIE1hcDxFbGVtZW50LCBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YT4+KCk7XG5cbiAgcHJpdmF0ZSBhY3RpdmVTY3JvbGxMb2NrcyA9IG5ldyBTZXQ8RWxlbWVudD4oKTtcblxuICBwcml2YXRlIHN0YWNrTXV0YXRpb25PYnNlcnZlcj86IE11dGF0aW9uT2JzZXJ2ZXI7XG5cbiAgLyoqXG4gICAqIFdoZW4gY2FsbGVkLCB0aGlzIHNlcnZpY2Ugd2lsbCBhdHRlbXB0IHRvIGxvY2F0ZSB0aGUgYEBhbmd1bGFyL2Nka2Agb3ZlcmxheSBzdGFjay5cbiAgICogSWYgZm91bmQgdGhpcyBzZXJ2aWNlIHdpbGwgYmUgY29uZmlndXJlZCB0byB1c2UgdGhhdCBlbGVtZW50IGFzIHRoZSBgb3ZlcmxheWAgc3RhY2sgaW5zdGVhZCBvZiBpbml0aWFsaXppbmcgaXRzIG93bi5cbiAgICovXG4gIHB1YmxpYyBjb25maWd1cmVDZGtJbnRlcm9wKCkge1xuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgY29uc3QgY2RrU3RhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2RrLW92ZXJsYXktY29udGFpbmVyJyk7XG4gICAgICBpZiAoY2RrU3RhY2spIHtcbiAgICAgICAgdGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkgPSBjZGtTdGFjaztcbiAgICAgICAgdGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCh0aGlzLmlkRmFjdG9yeSgnb3ZlcmxheScpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgcG9ydGFsIGNvbnRyb2xsZXIuIEFsbCBpdGVtcyBpdCByZXF1ZXN0ZWQgdG8gYmUgcG9ydGFsZWQgd2lsbCBiZSB0cmFjayBhZ2FpbnN0IGl0LlxuICAgKiBXaGVuIHRoZSBwb3J0YWwgaXMgcmVtb3ZlZCB3ZSBjYW4gdGhlbiByZW1vdmUgYW55IGVsZW1lbnRzIGl0IGN1cnJlbnRseSBoYXMgcG9ydGFsZWQgYW5kXG4gICAqIGFueSBvZiB0aGVpciBwb3J0YWxlZCBjaGlsZHJlbi5cbiAgICovXG4gIHB1YmxpYyBhZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyKSB7XG4gICAgaWYgKCF0aGlzLnBvcnRhbGVkRWxlbWVudHMuaGFzKHBvcnRhbENvbnRyb2xsZXI/LmlkKSkge1xuICAgICAgLy8gVHJhY2sgaW4gc2V0IGJ5IElEIHNvIHdlIGRvbid0IGtlZXAgYSBsaXZlIHJlZmVyZW5jZSB0byB0aGUgY29udHJvbGxlciBpdHNlbGZcbiAgICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5zZXQocG9ydGFsQ29udHJvbGxlci5pZCwgbmV3IE1hcDxFbGVtZW50LCBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YT4oKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlbW92ZXMgYWxsIG9mIGEgcG9ydGFsIGNvbnRyb2xsZXJzIHBvcnRhbGVkIGVsZW1lbnRzIGFuZCB0aGVpciByZWZlcmVuY2VzICovXG4gIHB1YmxpYyByZW1vdmVDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyKSB7XG4gICAgLy8gQXR0ZW1wdCB0byByZW1vdmUgYWxsIGl0ZW1zIGF0dGFjaGVkIGJ5IHRoaXMgY29udHJvbGxlciBmcm9tIHRoZSBjb25maWd1cmVkIHN0YWNrXG4gICAgY29uc3QgYXR0YWNoZWRFbGVtZW50cyA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCk7XG4gICAgaWYgKGF0dGFjaGVkRWxlbWVudHMpIHtcbiAgICAgIGF0dGFjaGVkRWxlbWVudHMuZm9yRWFjaCgoaXRlbSkgPT4gdGhpcy5yZW1vdmVGcm9tU3RhY2socG9ydGFsQ29udHJvbGxlciwgaXRlbS5lbGVtZW50KSk7XG4gICAgfVxuICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5kZWxldGUocG9ydGFsQ29udHJvbGxlci5pZCk7XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlcyBhIHJlZiB0byB0aGUgY29uZmlndXJlZCBzdGFjayBleGlzdHMuIElmIGl0IGRvZXMgbm90LCB0aGUgY29uZmlndXJlZCBzdGFjayB3aWxsXG4gICAqIGJlIGNyZWF0ZWQgYW5kIGFwcGVuZGVkIHRvIHRoZSBkb2N1bWVudC4gRG9lcyBub3RoaW5nIGR1cmluZyBTU1IuXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZVN0YWNrKHN0YWNrOiBQb3J0YWxTdGFjaykge1xuICAgIGlmIChzdGFjayAhPT0gJ292ZXJsYXknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3ZlcmxheSBTdGFjazogXCIke3N0YWNrfVwiIG11c3QgYmUgJ292ZXJsYXknIGF0IHRoaXMgdGltZS5gKTtcbiAgICB9XG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10pIHtcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWRGYWN0b3J5KHN0YWNrKSk7XG4gICAgICAgIHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10gPVxuICAgICAgICAgIGVsZW0gPz9cbiAgICAgICAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuaWRGYWN0b3J5KHN0YWNrKSxcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdICYmICF0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kU3RhY2tUb0RvbSh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdKTtcblxuICAgICAgICAvLyBJbml0IG11dGF0aW9uIG9ic2VydmVyXG4gICAgICAgIC8vIFRoaXMgd2lsbCB3YXRjaCBmb3IgYW55dGltZSB0aGUgc3RhY2sgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET00gZm9yIHNvbWUgcmVhc29uXG4gICAgICAgIC8vIElmIGl0IGlzLCBpdCB3aWxsIHJlLWF0dGFjaCBpdCB0byB0aGUgRE9NIGFmdGVyIHRoZSBuZXh0IHRpY2tcbiAgICAgICAgaWYgKCF0aGlzLnN0YWNrTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgIHRoaXMuc3RhY2tNdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG1sLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtbCkge1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJlbW92ZWROb2RlIG9mIG11dGF0aW9uLnJlbW92ZWROb2Rlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkTm9kZSA9PT0gdGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsSXRlbXNGcm9tU3RhY2tzKCk7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRTdGFja1RvRG9tKHRoaXMuc3RhY2tFbGVtZW50cy5vdmVybGF5KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdPy5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5zdGFja011dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdLnBhcmVudE5vZGUsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgc3VidHJlZTogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZFN0YWNrVG9Eb20oc3RhY2tFbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKHN0YWNrRWxlbWVudCAmJiAhc3RhY2tFbGVtZW50LmlzQ29ubmVjdGVkKSB7XG4gICAgICBjb25zdCB0b2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbXRlLXRvYXN0LWNvbnRhaW5lcicpO1xuICAgICAgaWYgKHRvYXN0Q29udGFpbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHN0YWNrRWxlbWVudCwgdG9hc3RDb250YWluZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoc3RhY2tFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogQXBwZW5kcyBhbiBpdGVtIHRvIHRoZSBjb25maWd1cmVkIHBvcnRhbCBzdGFjayAqL1xuICBwdWJsaWMgYXBwZW5kVG9TdGFjayhcbiAgICBwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlcixcbiAgICBlbGVtZW50OiBFbGVtZW50LFxuICAgIHtcbiAgICAgIHdpdGhEaW1CYWNrZHJvcCA9IGZhbHNlLFxuICAgICAgd2l0aEluZXJ0QmFja2Ryb3AgPSBmYWxzZSxcbiAgICAgIHdpdGhTY3JvbGxMb2NrID0gZmFsc2UsXG4gICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyLFxuICAgICAgcG9ydGFsQWRhcHRlciA9IGRlZmF1bHRQb3J0YWxBZGFwdGVyLFxuICAgIH06IFBvcnRhbE9wdGlvbnMgPSB7fVxuICApIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnRQb3J0YWxlZEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudFBvcnRhbGVkRWxlbWVudChwb3J0YWxDb250cm9sbGVyLCBlbGVtZW50KTtcbiAgICAgIGNvbnN0IHN0YWNrTmFtZSA9IHBvcnRhbENvbnRyb2xsZXIub3B0aW9ucy5zdGFjaztcbiAgICAgIGNvbnN0IHN0YWNrID0gdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrTmFtZV07XG4gICAgICBjb25zdCBhdHRhY2hlZEVsZW1lbnRzID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKTtcblxuICAgICAgY29uc3QgYmFja2Ryb3AgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ210ZS1wb3J0YWxfX2JhY2tkcm9wJyxcbiAgICAgICAgLi4uKGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uXG4gICAgICAgICAgPyB7IHN0eWxlOiBgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHtiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbn07YCB9XG4gICAgICAgICAgOiB7fSksXG4gICAgICB9KTtcblxuICAgICAgLy8gSGFuZGxlIGJhY2tkcm9wIHN0eWxpbmdcbiAgICAgIGlmICh3aXRoSW5lcnRCYWNrZHJvcCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0taW5lcnQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh3aXRoRGltQmFja2Ryb3ApIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXNoYWRvdycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXRyYW5zcGFyZW50Jyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGVuZCBiYWNrZHJvcFxuICAgICAgc3RhY2s/LmFwcGVuZENoaWxkKGJhY2tkcm9wKTtcblxuICAgICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICAgIC8vIEFkZCBsaXN0ZW5lciBpZiBjbGljayBoYW5kbGVyIGlzIHByZXNlbnRcbiAgICAgICAgaWYgKGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyKSB7XG4gICAgICAgICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXIpO1xuICAgICAgICAgIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYmFja2Ryb3Agc2hvdWxkIGJlIGRpbSwgYW5pbWF0ZSBpdCBhZnRlciBpdCBoYXMgYmVlbiBhcHBlbmRlZCB0byB0aGUgZG9tXG4gICAgICAgIGlmICh3aXRoRGltQmFja2Ryb3ApIHtcbiAgICAgICAgICBnbG9iYWxUaGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0tc2hvdycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGx5IHNjcm9sbCBsb2NrXG4gICAgICAgIGlmICh3aXRoU2Nyb2xsTG9jaykge1xuICAgICAgICAgIHRoaXMuYXBwbHlTY3JvbGxMb2NrKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFdhaXQgZm9yIFJlYWN0IChvciBvdGhlciBmdXR1cmUgZnJhbWV3b3JrIGFkYXB0ZXIpIHRvIGFwcGVuZCBlbGVtZW50IHRvIG5ld1xuICAgICAgLy8gbG9jYXRpb24gaW4gdGhlIERPTSBiZWZvcmUgYWRkaW5nIHRvIHN0YWNrLiBEb2luZyBzbyB0cmlnZ2VycyBgaG9zdERpc2Nvbm5lY3RlZGBcbiAgICAgIC8vIHdoaWNoIHdvdWxkIGluc3RhbnRseSByZW1vdmUgdGhlIGVsZW1lbnQgaWYgbm90IGZvciB0aGlzIGV4dHJhIHRpbWVvdXQgdG8gd2FpdCBhIHRpY2tcbiAgICAgIFByb21pc2UucmVzb2x2ZShwb3J0YWxBZGFwdGVyKGVsZW1lbnQsIHN0YWNrKSkudGhlbigoKSA9PiB7XG4gICAgICAgIGF0dGFjaGVkRWxlbWVudHMuc2V0KGVsZW1lbnQsIHtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIHN0YWNrOiBzdGFja05hbWUsXG4gICAgICAgICAgYmFja2Ryb3AsXG4gICAgICAgICAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzOiBuZXcgU2V0PEVsZW1lbnQ+KCksXG4gICAgICAgICAgcGFyZW50UG9ydGFsZWRFbGVtZW50LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJlbW92ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSBzdGFjayAqL1xuICBwdWJsaWMgcmVtb3ZlRnJvbVN0YWNrKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMucG9ydGFsZWRFbGVtZW50cy5oYXMocG9ydGFsQ29udHJvbGxlci5pZCkpIHtcbiAgICAgIGNvbnN0IGF0dGFjaGVkRWxlbWVudHMgPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpO1xuICAgICAgaWYgKGF0dGFjaGVkRWxlbWVudHMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudE1ldGFkYXRhID0gYXR0YWNoZWRFbGVtZW50cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIGlmIChlbGVtZW50TWV0YWRhdGEpIHtcbiAgICAgICAgICBhdHRhY2hlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplU3RhY2tSZW1vdmUoZWxlbWVudE1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNhZmVseSByZW1vdmVzIGFsbCBpdGVtcyBmcm9tIGFsbCBzdGFja3NcbiAgcHJpdmF0ZSByZW1vdmVBbGxJdGVtc0Zyb21TdGFja3MoKSB7XG4gICAgZm9yIChsZXQgW2lkLCBjb250cm9sbGVyTWFwXSBvZiB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZW50cmllcygpKSB7XG4gICAgICBmb3IgKGxldCBbZWxlbWVudCwgZWxlbWVudE1ldGFkYXRhXSBvZiBjb250cm9sbGVyTWFwLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoZWxlbWVudE1ldGFkYXRhKSB7XG4gICAgICAgICAgdGhpcy5maW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogTWFrZXMgYSBiYWNrZHJvcCBhc3NvY2lhdGVkIHdpdGggYSBwb3J0YWxlZCBlbGVtZW50IHZpc2libGUgaWYgaXQgZXhpc3RzICovXG4gIHB1YmxpYyBzaG93QmFja2Ryb3AocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgY29uc3QgeyBiYWNrZHJvcCB9ID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKS5nZXQoZWxlbWVudCkgPz8ge307XG4gICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1zaG93Jyk7XG4gIH1cblxuICAvKiogSGlkZXMgYSBiYWNrZHJvcCBhc3NvY2lhdGVkIHdpdGggYSBwb3J0YWxlZCBlbGVtZW50IGlmIGl0IGV4aXN0cyAqL1xuICBwdWJsaWMgaGlkZUJhY2tkcm9wKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIGNvbnN0IHsgYmFja2Ryb3AgfSA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuICAgIGJhY2tkcm9wPy5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrZHJvcC0tc2hvdycpO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIGludGVydG5lc3MgYSBiYWNrZHJvcCBpZiBpdCBleGlzdHMgKHdoZXRoZXIgb3Igbm90IHRoZSB1c2VyIGNhbiBjbGljayB0aHJvdWdoIGl0KSAqL1xuICBwdWJsaWMgc2V0QmFja2Ryb3BJbmVydG5lc3MoXG4gICAgcG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsXG4gICAgZWxlbWVudDogRWxlbWVudCxcbiAgICBpbmVydDogYm9vbGVhbiA9IHRydWVcbiAgKSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIGNvbnN0IHsgYmFja2Ryb3AgfSA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuICAgIGlmIChpbmVydCkge1xuICAgICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1pbmVydCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYWNrZHJvcD8uY2xhc3NMaXN0LnJlbW92ZSgnYmFja2Ryb3AtLWluZXJ0Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGlkIGZvciB0aGUgY29uZmlndXJlZCBzdGFjayBlbGVtZW50ICovXG4gIHByaXZhdGUgaWRGYWN0b3J5ID0gKHN0YWNrOiBQb3J0YWxTdGFjaykgPT4gYG10ZS1wb3J0YWxfXyR7c3RhY2t9LXN0YWNrYDtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGFuIGVsZW1lbnQgaXMgYmVpbmcgcG9ydGFsZWQgZnJvbSB3aXRoaW4gYW5vdGhlciBwb3J0YWxlZFxuICAgKiBlbGVtZW50IGFuZCByZXR1cm5zIHRoYXQgcGFyZW50IGlmIGl0IGlzXG4gICAqL1xuICBwcml2YXRlIGdldFBhcmVudFBvcnRhbGVkRWxlbWVudChwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgZWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmIChwb3J0YWxDb250cm9sbGVyLnBhcmVudFBvcnRhbGVkRWxlbWVudCkge1xuICAgICAgcmV0dXJuIHBvcnRhbENvbnRyb2xsZXIucGFyZW50UG9ydGFsZWRFbGVtZW50O1xuICAgIH1cbiAgICBsZXQgcGFyZW50UG9ydGFsZWRFbGVtZW50OiBFbGVtZW50O1xuICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChwb3J0YWxDb250cm9sbGVyKSA9PlxuICAgICAgcG9ydGFsQ29udHJvbGxlci5mb3JFYWNoKChwb3J0YWxlZEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKHBvcnRhbGVkRWxlbWVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgcG9ydGFsZWRFbGVtZW50LmNoaWxkUG9ydGFsZWRFbGVtZW50cy5hZGQoZWxlbWVudCk7XG4gICAgICAgICAgcGFyZW50UG9ydGFsZWRFbGVtZW50ID0gcG9ydGFsZWRFbGVtZW50LmVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICAvLyBDYWNoZSB0aGUgcGFyZW50UG9ydGFsZWRFbGVtZW50IGlmIGZvdW5kIG9uIHRoZSBjb250cm9sbGVyIHNvIHdlIGNhbiByZWZlcmVuY2VcbiAgICAvLyBpdCB3aGVuIG9wZW5lZCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgIGlmIChwYXJlbnRQb3J0YWxlZEVsZW1lbnQpIHtcbiAgICAgIHBvcnRhbENvbnRyb2xsZXIucGFyZW50UG9ydGFsZWRFbGVtZW50ID0gcGFyZW50UG9ydGFsZWRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50UG9ydGFsZWRFbGVtZW50O1xuICB9XG5cbiAgLyoqIEVuc3VyZXMgYW4gZWxlbWVudCBpcyByZW1vdmVkIGZyb20gdGhlIHN0YWNrIG5vIG1hdHRlciB3aGljaCBjb250cm9sbGVyIGhhcyBwb3J0YWxlZCBpdCAqL1xuICBwcml2YXRlIHJlbW92ZUZyb21TdGFja0dsb2JhbGx5KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZm9yRWFjaCgocG9ydGFsQ29udHJvbGxlcikgPT4ge1xuICAgICAgaWYgKHBvcnRhbENvbnRyb2xsZXIuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRNZXRhZGF0YSA9IHBvcnRhbENvbnRyb2xsZXIuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBwb3J0YWxDb250cm9sbGVyLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgdGhpcy5maW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogRmluYWxpemVzIHRoZSByZW1vdmUgb2YgYW4gZWxlbWVudCBmcm9tIGEgcG9ydGFsIHN0YWNrICovXG4gIHByaXZhdGUgZmluYWxpemVTdGFja1JlbW92ZShlbGVtZW50TWV0YWRhdGE6IFBvcnRhbGVkRWxlbWVudE1ldGFkYXRhKSB7XG4gICAgaWYgKGVsZW1lbnRNZXRhZGF0YSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBzdGFjazogc3RhY2tOYW1lLFxuICAgICAgICBiYWNrZHJvcCxcbiAgICAgICAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzLFxuICAgICAgICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQsXG4gICAgICB9ID0gZWxlbWVudE1ldGFkYXRhO1xuICAgICAgY29uc3Qgc3RhY2sgPSB0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tOYW1lXTtcblxuICAgICAgLy8gUmVtb3ZlIGFueSBzY3JvbGxMb2Nrc1xuICAgICAgdGhpcy5yZW1vdmVTY3JvbGxMb2NrKGVsZW1lbnQpO1xuXG4gICAgICAvLyBFbnN1cmVzIGFuIGVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIGFueSBwYXJlbnQgcG9ydGFsZWQgZWxlbWVudHMgY2hpbGRyZW4gbGlzdHNcbiAgICAgIGlmIChwYXJlbnRQb3J0YWxlZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmZvckVhY2goKHBvcnRhbENvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICBpZiAocG9ydGFsQ29udHJvbGxlci5oYXMocGFyZW50UG9ydGFsZWRFbGVtZW50KSkge1xuICAgICAgICAgICAgcG9ydGFsQ29udHJvbGxlci5nZXQocGFyZW50UG9ydGFsZWRFbGVtZW50KS5jaGlsZFBvcnRhbGVkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZXMgYW55IGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudCBhcmUgcmVtb3ZlZCBiZWZvcmUgdGhpcyBlbGVtZW50IGlzXG4gICAgICBpZiAoY2hpbGRQb3J0YWxlZEVsZW1lbnRzLnNpemUgPiAwKSB7XG4gICAgICAgIGNoaWxkUG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB0aGlzLnJlbW92ZUZyb21TdGFja0dsb2JhbGx5KGVsZW1lbnQpKTtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZXMgdGhpcyBlbGVtZW50cyBiYWNrZHJvcCBmcm9tIHRoZSBwb3J0YWwgc3RhY2tcbiAgICAgIGlmIChiYWNrZHJvcCAmJiBiYWNrZHJvcC5wYXJlbnRFbGVtZW50ID09PSBzdGFjaykge1xuICAgICAgICBzdGFjaz8ucmVtb3ZlQ2hpbGQoYmFja2Ryb3ApO1xuICAgICAgfVxuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyBhIHJlYWN0IHdyYXBwZWQgcG9ydGFsZWQgZWxlbWVudFxuICAgICAgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudD8uaGFzQXR0cmlidXRlKCdkYXRhLW92ZXJsYXktd3JhcHBlcicpKSB7XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCA9PT0gc3RhY2spIHtcbiAgICAgICAgICBzdGFjaz8ucmVtb3ZlQ2hpbGQoZWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQgPT09IHN0YWNrKSB7XG4gICAgICAgIHN0YWNrPy5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyBhIHNjcm9sbCBsb2NrIHRvIHRoZSBib2R5IGVsZW1lbnQgdG8gcHJldmVudCBzY3JvbGxpbmcgb2YgcGFnZSBjb250ZW50LlxuICAgKiBDYWxjdWxhdGVzIGFueSBib2R5IG9mZnNldHMgZHVlIHRvIHZpc2libGUgc2Nyb2xsYmFycyBhbmQgZHluYW1pY2FsbHkgYWRqdXN0cyBmb3IgdGhlbS5cbiAgICovXG4gIHByaXZhdGUgYXBwbHlTY3JvbGxMb2NrKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFjdGl2ZVNjcm9sbExvY2tzLmFkZChlbGVtZW50KTtcblxuICAgIGNvbnN0IGlzSU9TID0gaXNQbGF0Zm9ybSgnSU9TJyk7XG4gICAgY29uc3QgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcbiAgICBjb25zdCBzY3JvbGxiYXJYID1cbiAgICAgIE1hdGgucm91bmQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpICtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIGNvbnN0IHBhZGRpbmdQcm9wID0gc2Nyb2xsYmFyWCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IHNjcm9sbFggPSBib2R5U3R5bGUubGVmdCA/IHBhcnNlRmxvYXQoYm9keVN0eWxlLmxlZnQpIDogd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgIGNvbnN0IHNjcm9sbFkgPSBib2R5U3R5bGUudG9wID8gcGFyc2VGbG9hdChib2R5U3R5bGUudG9wKSA6IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgIGJvZHlTdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbXRlLXNjcm9sbC1sb2NrLS1hY3RpdmUnKTtcblxuICAgIGlmIChzY3JvbGxiYXJXaWR0aCkge1xuICAgICAgYm9keVN0eWxlW3BhZGRpbmdQcm9wXSA9IGAke3Njcm9sbGJhcldpZHRofXB4YDtcbiAgICB9XG5cbiAgICAvLyBPbmx5IGlPUyBkb2Vzbid0IHJlc3BlY3QgYG92ZXJmbG93OiBoaWRkZW5gIG9uIGRvY3VtZW50LmJvZHksIGFuZCB0aGlzXG4gICAgLy8gdGVjaG5pcXVlIGhhcyBmZXdlciBzaWRlIGVmZmVjdHMuXG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICAvLyBpT1MgMTIgZG9lcyBub3Qgc3VwcG9ydCBgdmlzdWFsVmlld3BvcnRgLlxuICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IGdsb2JhbFRoaXMudmlzdWFsVmlld3BvcnQ/Lm9mZnNldExlZnQgfHwgMDtcbiAgICAgIGNvbnN0IG9mZnNldFRvcCA9IGdsb2JhbFRoaXMudmlzdWFsVmlld3BvcnQ/Lm9mZnNldFRvcCB8fCAwO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGJvZHlTdHlsZSwge1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgdG9wOiBgJHstKHNjcm9sbFkgLSBNYXRoLmZsb29yKG9mZnNldFRvcCkpfXB4YCxcbiAgICAgICAgbGVmdDogYCR7LShzY3JvbGxYIC0gTWF0aC5mbG9vcihvZmZzZXRMZWZ0KSl9cHhgLFxuICAgICAgICByaWdodDogJzAnLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlbW92ZXMgYW4gYWN0aXZlIHNjcm9sbExvY2sgaWYgdGhlcmUgYXJlIG5vIHJlbWFpbmluZyBlbGVtZW50cyBwb3J0YWxlZCB0aGF0IHJlcXVlc3RlZCBpdCAqL1xuICBwcml2YXRlIHJlbW92ZVNjcm9sbExvY2soZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuYWN0aXZlU2Nyb2xsTG9ja3MuZGVsZXRlKGVsZW1lbnQpO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlU2Nyb2xsTG9ja3Muc2l6ZSA9PT0gMCkge1xuICAgICAgY29uc3QgaXNJT1MgPSBpc1BsYXRmb3JtKCdJT1MnKTtcbiAgICAgIGNvbnN0IGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG4gICAgICBjb25zdCBzY3JvbGxiYXJYID1cbiAgICAgICAgTWF0aC5yb3VuZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgK1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgIGNvbnN0IHBhZGRpbmdQcm9wID0gc2Nyb2xsYmFyWCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcblxuICAgICAgT2JqZWN0LmFzc2lnbihib2R5U3R5bGUsIHtcbiAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICBbcGFkZGluZ1Byb3BdOiAnJyxcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ210ZS1zY3JvbGwtbG9jay0tYWN0aXZlJyk7XG5cbiAgICAgIGlmIChpc0lPUykge1xuICAgICAgICBPYmplY3QuYXNzaWduKGJvZHlTdHlsZSwge1xuICAgICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgICB0b3A6ICcnLFxuICAgICAgICAgIGxlZnQ6ICcnLFxuICAgICAgICAgIHJpZ2h0OiAnJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGdsb2JhbFRoaXMuc2Nyb2xsVG8oc2Nyb2xsWCwgc2Nyb2xsWSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVQb3J0YWxTZXJ2aWNlID0gbmV3IF9NdGVQb3J0YWxTZXJ2aWNlKCk7XG4iLCAiaW1wb3J0IHsgc2lnbmFsIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuY2xhc3MgX010ZUhpc3RvcnlBcGlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xuICBwcml2YXRlIGNoYW5nZVNpZ25hbCA9IHNpZ25hbCgpO1xuICBwcml2YXRlIHByZXZIcmVmOiBzdHJpbmc7XG5cbiAgcHVibGljIHN0YXRlQ2hhbmdlcygpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VTaWduYWw7XG4gIH1cblxuICBwcml2YXRlIGZvcndhcmRBcHBseSA9ICh0YXJnZXQsIHRoaXNBcmcsIGFyZ0FycmF5KSA9PiB7XG4gICAgY29uc3QgcmVzID0gdGFyZ2V0LmFwcGx5KHRoaXNBcmcsIGFyZ0FycmF5KTtcbiAgICAvLyBPbmx5IGVtaXQgYSBzdGF0ZSBjaGFuZ2UgaWYgdGhlIGhyZWYgZGlmZmVycyBmcm9tIHRoZSBsYXN0IGVtaXNzaW9uXG4gICAgaWYgKHRoaXMucHJldkhyZWYgIT09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB7XG4gICAgICB0aGlzLnByZXZIcmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICB0aGlzLmNoYW5nZVNpZ25hbC5zZXQodGhpcy5wcmV2SHJlZik7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgIC8vIExpc3RlbiBmb3IgYmFjayBldmVudHMgd2l0aCBwb3BzdGF0ZSBldmVudFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZVNpZ25hbC5zZXQod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFBhdGNoIEhpc3RvcnkgQVBJIG1ldGhvZHMgdG8gZW5zdXJlIHdlIGVtaXQgYW55dGltZSB0aGVpciBzdGF0ZSBpcyBjaGFuZ2VkXG4gICAgICAvLyBUaGlzIGlzIG5lY2Nlc2FyeSBiZWNhaXNlIHRoZSBgcG9wc3RhdGVgIGV2ZW50IGlzIG5vdCByZWxpYWJseSBjYWxsZWQgYWNyb3NzIGJyb3dzZXJzIHdoZW5ldmVyIHRoZSBoaXN0b3J5IEFQSSBpcyB1c2VkXG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LmJhY2ssIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkuZm9yd2FyZCA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmdvID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LmdvLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUsIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSwge1xuICAgICAgICBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZUhpc3RvcnlBcGlTZXJ2aWNlID0gbmV3IF9NdGVIaXN0b3J5QXBpU2VydmljZSgpO1xuIiwgImltcG9ydCB7IGlzU3NyIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IHR5cGUgTXRlRGF0ZUZvcm1hdE9wdGlvbnMgPSBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyAmIHtcbiAgbGFuZz86IHN0cmluZztcbiAgZm9ybWF0PzpcbiAgICB8ICdzaG9ydCdcbiAgICB8ICdtZWRpdW0nXG4gICAgfCAnbG9uZydcbiAgICB8ICdmdWxsJ1xuICAgIHwgJ3Nob3J0RGF0ZSdcbiAgICB8ICdtZWRpdW1EYXRlJ1xuICAgIHwgJ2xvbmdEYXRlJ1xuICAgIHwgJ2Z1bGxEYXRlJ1xuICAgIHwgJ3Nob3J0VGltZSdcbiAgICB8ICdtZWRpdW1UaW1lJ1xuICAgIHwgJ2xvbmdUaW1lJ1xuICAgIHwgJ2Z1bGxUaW1lJztcbn07XG5cbmV4cG9ydCB0eXBlIE10ZU51bWJlckZvcm1hdE9wdGlvbnMgPSBJbnRsLk51bWJlckZvcm1hdE9wdGlvbnMgJiB7IGxhbmc/OiBzdHJpbmcgfTtcblxuY2xhc3MgX010ZUxvY2FsaXplU2VydmljZSB7XG4gIC8vIEFzc3VtZSBgZW5gIGxhbmcgZm9yIG5vdyBhcyBhIGZhbGxiYWNrIHVudGlsIHdlIHJvbGxiYWNrIHdpZGVyIHN1cHBvcnQgZm9yIGkxMW4gd2hlbiBuZWNlc3NhcnlcbiAgcHJpdmF0ZSBsYW5ndWFnZSA9ICdlbic7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgaWYgKCFpc1NzcigpICYmICF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubGFuZ3VhZ2UgPSBgJHtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2V9YC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXROdW1iZXIobnVtYmVyVG9Gb3JtYXQ6IG51bWJlciB8IHN0cmluZywgb3B0aW9ucz86IE10ZU51bWJlckZvcm1hdE9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIGNvbnN0IGxhbmcgPSBvcHRpb25zPy5sYW5nID8gb3B0aW9ucy5sYW5nIDogdGhpcy5sYW5ndWFnZTtcbiAgICBudW1iZXJUb0Zvcm1hdCA9IE51bWJlcihudW1iZXJUb0Zvcm1hdCk7XG4gICAgLy8gRW5zdXJlIG5vIG51bGwgb3B0aW9ucyBleGlzdFxuICAgIGNvbnN0IGZpbmFsT3B0aW9ucyA9IHtcbiAgICAgIGxhbmc6IG9wdGlvbnMubGFuZyA/PyB1bmRlZmluZWQsXG4gICAgICBzdHlsZTogb3B0aW9ucy5zdHlsZSA/PyB1bmRlZmluZWQsXG4gICAgICBjdXJyZW5jeTogb3B0aW9ucy5jdXJyZW5jeSA/PyB1bmRlZmluZWQsXG4gICAgICBjdXJyZW5jeURpc3BsYXk6IG9wdGlvbnMuY3VycmVuY3lEaXNwbGF5ID8/IHVuZGVmaW5lZCxcbiAgICAgIHVzZUdyb3VwaW5nOiBvcHRpb25zLnVzZUdyb3VwaW5nID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbmltdW1JbnRlZ2VyRGlnaXRzOiBvcHRpb25zLm1pbmltdW1JbnRlZ2VyRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogb3B0aW9ucy5taW5pbXVtRnJhY3Rpb25EaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBvcHRpb25zLm1heGltdW1GcmFjdGlvbkRpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICBtaW5pbXVtU2lnbmlmaWNhbnREaWdpdHM6IG9wdGlvbnMubWluaW11bVNpZ25pZmljYW50RGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1heGltdW1TaWduaWZpY2FudERpZ2l0czogb3B0aW9ucy5tYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgIH07XG4gICAgcmV0dXJuIGlzTmFOKG51bWJlclRvRm9ybWF0KVxuICAgICAgPyAnJ1xuICAgICAgOiBuZXcgSW50bC5OdW1iZXJGb3JtYXQobGFuZywgZmluYWxPcHRpb25zKS5mb3JtYXQobnVtYmVyVG9Gb3JtYXQpO1xuICB9XG5cbiAgcHVibGljIGZvcm1hdERhdGUoZGF0ZVRvRm9ybWF0OiBEYXRlIHwgc3RyaW5nLCBvcHRpb25zPzogTXRlRGF0ZUZvcm1hdE9wdGlvbnMpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICBjb25zdCBsYW5nID0gb3B0aW9ucz8ubGFuZyA/IG9wdGlvbnMubGFuZyA6IHRoaXMubGFuZ3VhZ2U7XG4gICAgY29uc3QgZm9ybWF0dGVkT3B0aW9ucyA9IHsgLi4uKG9wdGlvbnMgPz8ge30pLCAuLi50aGlzLmdldERlZmluZWREYXRlRm9ybWF0KG9wdGlvbnM/LmZvcm1hdCkgfTtcbiAgICAvLyBFbnN1cmUgbm8gbnVsbCBvcHRpb25zIGV4aXN0XG4gICAgY29uc3QgZmluYWxPcHRpb25zID0ge1xuICAgICAgbGFuZzogZm9ybWF0dGVkT3B0aW9ucy5sYW5nID8/IHVuZGVmaW5lZCxcbiAgICAgIHdlZWtkYXk6IGZvcm1hdHRlZE9wdGlvbnMud2Vla2RheSA/PyB1bmRlZmluZWQsXG4gICAgICBlcmE6IGZvcm1hdHRlZE9wdGlvbnMuZXJhID8/IHVuZGVmaW5lZCxcbiAgICAgIHllYXI6IGZvcm1hdHRlZE9wdGlvbnMueWVhciA/PyB1bmRlZmluZWQsXG4gICAgICBtb250aDogZm9ybWF0dGVkT3B0aW9ucy5tb250aCA/PyB1bmRlZmluZWQsXG4gICAgICBkYXk6IGZvcm1hdHRlZE9wdGlvbnMuZGF5ID8/IHVuZGVmaW5lZCxcbiAgICAgIGhvdXI6IGZvcm1hdHRlZE9wdGlvbnMuaG91ciA/PyB1bmRlZmluZWQsXG4gICAgICBtaW51dGU6IGZvcm1hdHRlZE9wdGlvbnMubWludXRlID8/IHVuZGVmaW5lZCxcbiAgICAgIHNlY29uZDogZm9ybWF0dGVkT3B0aW9ucy5zZWNvbmQgPz8gdW5kZWZpbmVkLFxuICAgICAgZnJhY3Rpb25hbFNlY29uZERpZ2l0czogZm9ybWF0dGVkT3B0aW9ucy5mcmFjdGlvbmFsU2Vjb25kRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIHRpbWVab25lTmFtZTogZm9ybWF0dGVkT3B0aW9ucy50aW1lWm9uZU5hbWUgPz8gdW5kZWZpbmVkLFxuICAgICAgdGltZVpvbmU6IGZvcm1hdHRlZE9wdGlvbnMudGltZVpvbmUgPz8gdW5kZWZpbmVkLFxuICAgICAgaG91cjEyOiBmb3JtYXR0ZWRPcHRpb25zLmhvdXIxMiA/PyB1bmRlZmluZWQsXG4gICAgICBmb3JtYXQ6IGZvcm1hdHRlZE9wdGlvbnMuZm9ybWF0ID8/IHVuZGVmaW5lZCxcbiAgICB9O1xuICAgIGRhdGVUb0Zvcm1hdCA9IG5ldyBEYXRlKGRhdGVUb0Zvcm1hdCk7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxhbmcsIGZpbmFsT3B0aW9ucykuZm9ybWF0KGRhdGVUb0Zvcm1hdCk7XG4gIH1cblxuICBwcml2YXRlIGdldERlZmluZWREYXRlRm9ybWF0KFxuICAgIGZvcm1hdDpcbiAgICAgIHwgJ3Nob3J0J1xuICAgICAgfCAnbWVkaXVtJ1xuICAgICAgfCAnbG9uZydcbiAgICAgIHwgJ2Z1bGwnXG4gICAgICB8ICdzaG9ydERhdGUnXG4gICAgICB8ICdtZWRpdW1EYXRlJ1xuICAgICAgfCAnbG9uZ0RhdGUnXG4gICAgICB8ICdmdWxsRGF0ZSdcbiAgICAgIHwgJ3Nob3J0VGltZSdcbiAgICAgIHwgJ21lZGl1bVRpbWUnXG4gICAgICB8ICdsb25nVGltZSdcbiAgICAgIHwgJ2Z1bGxUaW1lJ1xuICApOiBNdGVEYXRlRm9ybWF0T3B0aW9ucyB7XG4gICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgIGNhc2UgJ3Nob3J0JzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdsb25nJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnZnVsbCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdzaG9ydERhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbWVkaXVtRGF0ZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbG9uZ0RhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnZnVsbERhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ3Nob3J0VGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbWVkaXVtVGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbG9uZ1RpbWUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdmdWxsVGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgIGZyYWN0aW9uYWxTZWNvbmREaWdpdHM6IDIsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlTG9jYWxpemVTZXJ2aWNlID0gbmV3IF9NdGVMb2NhbGl6ZVNlcnZpY2UoKTtcbiIsICJpbXBvcnQgeyBDb3JlUGFsZXR0ZSwgRGVuc2l0eU9wdGlvbnMsIFByZXNldHMsIFNpemVPcHRpb25zLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uUHJlc2V0IHtcbiAgc2l6ZT86IFNpemVPcHRpb25zO1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICBkZW5zaXR5PzogRGVuc2l0eU9wdGlvbnM7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBidXR0b25QcmVzZXRzOiBQcmVzZXRzPEJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJY29uQnV0dG9uUHJlc2V0IHtcbiAgc2l6ZT86IFNpemVPcHRpb25zO1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICBkZW5zaXR5PzogRGVuc2l0eU9wdGlvbnM7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBpY29uQnV0dG9uUHJlc2V0czogUHJlc2V0czxJY29uQnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFN0YXR1c1BhbGV0dGUgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25QcmVzZXQge1xuICBjb2xvcj86IFN0YXR1c1BhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBpY29uUHJlc2V0czogUHJlc2V0czxJY29uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFN0YXR1c1BhbGV0dGUgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzQmFyUHJlc2V0IHtcbiAgY29sb3I/OiBTdGF0dXNQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NCYXJQcmVzZXRzOiBQcmVzZXRzPFByb2dyZXNzQmFyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgU3RhdHVzUGFsZXR0ZSB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NTcGlubmVyUHJlc2V0IHtcbiAgY29sb3I/OiBTdGF0dXNQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NTcGlubmVyUHJlc2V0czogUHJlc2V0czxQcm9ncmVzc1NwaW5uZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUb29sYmFyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCB0b29sYmFyUHJlc2V0czogUHJlc2V0czxUb29sYmFyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRQcmVzZXQge1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xuICB3aXRoU2hhZG93PzogYm9vbGVhbjtcbiAgd2l0aG91dFNoYWRvdz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZEJ1dHRvblByZXNldCBleHRlbmRzIENhcmRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGNhcmRQcmVzZXRzOiBQcmVzZXRzPENhcmRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICB3aXRob3V0U2hhZG93OiB0cnVlLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBjYXJkQnV0dG9uUHJlc2V0czogUHJlc2V0czxDYXJkQnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgd2l0aG91dFNoYWRvdzogdHJ1ZSxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHRyZWVQcmVzZXRzOiBQcmVzZXRzPFRyZWVQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgQ29yZVBhbGV0dGUsIFByZXNldHMsIFNpemVPcHRpb25zLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnUHJlc2V0cyB7XG4gIHNpemU/OiBTaXplT3B0aW9ucztcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IHRhZ1ByZXNldHM6IFByZXNldHM8VGFnUHJlc2V0cz4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCYWRnZVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgYmFkZ2VQcmVzZXRzOiBQcmVzZXRzPEJhZGdlUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IENvcmVQYWxldHRlLCBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBMaW5rUHJlc2V0IHtcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgZm9udFdlaWdodD86ICdyZWd1bGFyJyB8ICdib2xkJztcbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtQcmVzZXRzOiBQcmVzZXRzPExpbmtQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBbGVydFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgYWxlcnRQcmVzZXRzOiBQcmVzZXRzPEFsZXJ0UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBpbnB1dFByZXNldHM6IFByZXNldHM8SW5wdXRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd2VyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBkcmF3ZXJQcmVzZXRzOiBQcmVzZXRzPERyYXdlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBc2lkZVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgYXNpZGVQcmVzZXRzOiBQcmVzZXRzPEFzaWRlUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCcmVhZGNydW1iSXRlbVByZXNldCB7XG4gIGZvbnRXZWlnaHQ/OiAncmVndWxhcicgfCAnYm9sZCc7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG4gIHdpdGhvdXRVbmRlcmxpbmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgYnJlYWRjcnVtYkl0ZW1QcmVzZXRzOiBQcmVzZXRzPEJyZWFkY3J1bWJJdGVtUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHtcbiAgICB3aXRob3V0VW5kZXJsaW5lOiB0cnVlLFxuICB9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBtb2RhbFByZXNldHM6IFByZXNldHM8TW9kYWxQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgQ29yZVBhbGV0dGUgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDaGVja2JveFByZXNldCB7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja2JveFByZXNldHM6IFByZXNldHM8Q2hlY2tib3hQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFkaW9QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHJhZGlvUHJlc2V0czogUHJlc2V0czxSYWRpb1ByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBOYXZSb290UHJlc2V0IHtcbiAgbW9iaWxlQnJlYWtwb2ludD86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCc7XG4gIGludmVyc2U/OiAnaGVhZGVyJyB8ICdzaWRlYmFyJztcbiAgcHJlZmVyU2lkZWJhcj86ICdvcGVuZWQnIHwgJ2Nsb3NlZCc7XG59XG5cbmV4cG9ydCBjb25zdCBuYXZSb290UHJlc2V0czogUHJlc2V0czxOYXZSb290UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge1xuICAgIGludmVyc2U6ICdzaWRlYmFyJyxcbiAgfSxcbiAgY3g6IHtcbiAgICBwcmVmZXJTaWRlYmFyOiAnY2xvc2VkJyxcbiAgfSxcbiAgcHg6IHtcbiAgICBpbnZlcnNlOiAnc2lkZWJhcicsXG4gIH0sXG4gIHJ4OiB7XG4gICAgcHJlZmVyU2lkZWJhcjogJ2Nsb3NlZCcsXG4gIH0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkhlYWRlclByZXNldCB7XG4gIHdpdGhDb250YWluZXI/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbmF2SGVhZGVyUHJlc2V0czogUHJlc2V0czxOYXZIZWFkZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2U3ViSGVhZGVyUHJlc2V0IHtcbiAgd2l0aENvbnRhaW5lcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZTdWJIZWFkZXJQcmVzZXRzOiBQcmVzZXRzPE5hdlN1YkhlYWRlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZTaWRlYmFyUHJlc2V0IHtcbiAgaGlkZVVudGlsVHJhbnNpdGlvbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZTaWRlYmFyUHJlc2V0czogUHJlc2V0czxOYXZTaWRlYmFyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgaGlkZVVudGlsVHJhbnNpdGlvbjogdHJ1ZSxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge1xuICAgIGhpZGVVbnRpbFRyYW5zaXRpb246IHRydWUsXG4gIH0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkNvbnRlbnRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkNvbnRlbnRQcmVzZXRzOiBQcmVzZXRzPE5hdkNvbnRlbnRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2Rm9vdGVyUHJlc2V0IHtcbiAgd2l0aENvbnRhaW5lcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZGb290ZXJQcmVzZXRzOiBQcmVzZXRzPE5hdkZvb3RlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZCdXR0b25QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkJ1dHRvblByZXNldHM6IFByZXNldHM8TmF2QnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkljb25CdXR0b25QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkljb25CdXR0b25QcmVzZXRzOiBQcmVzZXRzPE5hdkljb25CdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2SXRlbVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF2SXRlbVByZXNldHM6IFByZXNldHM8TmF2SXRlbVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uR3JvdXBQcmVzZXQge1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgYnV0dG9uR3JvdXBQcmVzZXRzOiBQcmVzZXRzPEJ1dHRvbkdyb3VwUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTd2l0Y2hQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHN3aXRjaFByZXNldHM6IFByZXNldHM8U3dpdGNoUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVTZWxlY3RQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdGl2ZVNlbGVjdFByZXNldHM6IFByZXNldHM8TmF0aXZlU2VsZWN0UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUZXh0YXJlYVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgdGV4dGFyZWFQcmVzZXRzOiBQcmVzZXRzPFRleHRhcmVhUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTa2VsZXRvblByZXNldCB7fVxuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25QcmVzZXRzOiBQcmVzZXRzPFNrZWxldG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHNsaWRlclByZXNldHM6IFByZXNldHM8U2xpZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBSYW5nZVNsaWRlclByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgcmFuZ2VTbGlkZXJQcmVzZXRzOiBQcmVzZXRzPFJhbmdlU2xpZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWdtZW50ZWRDb250cm9sUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBzZWdtZW50ZWRDb250cm9sUHJlc2V0czogUHJlc2V0czxTZWdtZW50ZWRDb250cm9sUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IGJ1dHRvblByZXNldHMsIGljb25CdXR0b25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2J1dHRvbi9idXR0b24ucHJlc2V0cyc7XG5pbXBvcnQgeyBpY29uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9pY29uL2ljb24ucHJlc2V0cyc7XG5pbXBvcnQgeyBwcm9ncmVzc0JhclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5wcmVzZXRzJztcbmltcG9ydCB7IHByb2dyZXNzU3Bpbm5lclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLnByZXNldHMnO1xuaW1wb3J0IHsgdG9vbGJhclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdG9vbGJhci90b29sYmFyLnByZXNldHMnO1xuaW1wb3J0IHsgY2FyZFByZXNldHMsIGNhcmRCdXR0b25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2NhcmQvY2FyZC5wcmVzZXRzJztcbmltcG9ydCB7IHRyZWVQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3RyZWUvdHJlZS5wcmVzZXRzJztcbmltcG9ydCB7IHRhZ1ByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdGFnL3RhZy5wcmVzZXRzJztcbmltcG9ydCB7IGJhZGdlUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9iYWRnZS9iYWRnZS5wcmVzZXRzJztcbmltcG9ydCB7IGxpbmtQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2xpbmsvbGluay5wcmVzZXRzJztcbmltcG9ydCB7IGFsZXJ0UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9hbGVydC9hbGVydC5wcmVzZXRzJztcbmltcG9ydCB7IGlucHV0UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9pbnB1dC9pbnB1dC5wcmVzZXRzJztcbmltcG9ydCB7IGRyYXdlclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvZHJhd2VyL2RyYXdlci5wcmVzZXRzJztcbmltcG9ydCB7IGFzaWRlUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9hc2lkZS9hc2lkZS5wcmVzZXRzJztcbmltcG9ydCB7IGJyZWFkY3J1bWJJdGVtUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9icmVhZGNydW1icy9icmVhZGNydW1iLWl0ZW0ucHJlc2V0cyc7XG5pbXBvcnQgeyBtb2RhbFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvbW9kYWwvbW9kYWwucHJlc2V0cyc7XG5pbXBvcnQgeyBjaGVja2JveFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvY2hlY2tib3gvY2hlY2tib3gucHJlc2V0cyc7XG5pbXBvcnQgeyByYWRpb1ByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcmFkaW8vcmFkaW8ucHJlc2V0cyc7XG5pbXBvcnQge1xuICBuYXZSb290UHJlc2V0cyxcbiAgbmF2SGVhZGVyUHJlc2V0cyxcbiAgbmF2U3ViSGVhZGVyUHJlc2V0cyxcbiAgbmF2U2lkZWJhclByZXNldHMsXG4gIG5hdkNvbnRlbnRQcmVzZXRzLFxuICBuYXZGb290ZXJQcmVzZXRzLFxuICBuYXZCdXR0b25QcmVzZXRzLFxuICBuYXZJY29uQnV0dG9uUHJlc2V0cyxcbiAgbmF2SXRlbVByZXNldHMsXG59IGZyb20gJy4uLy4uL2F0b21pYy9uYXYvbmF2LnByZXNldHMnO1xuaW1wb3J0IHsgYnV0dG9uR3JvdXBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAucHJlc2V0cyc7XG5pbXBvcnQgeyBzd2l0Y2hQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3N3aXRjaC9zd2l0Y2gucHJlc2V0cyc7XG5pbXBvcnQgeyBuYXRpdmVTZWxlY3RQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL25hdGl2ZS1zZWxlY3QvbmF0aXZlLXNlbGVjdC5wcmVzZXRzJztcbmltcG9ydCB7IHRleHRhcmVhUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy90ZXh0YXJlYS90ZXh0YXJlYS5wcmVzZXRzJztcbmltcG9ydCB7IHNrZWxldG9uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9za2VsZXRvbi9za2VsZXRvbi5wcmVzZXRzJztcbmltcG9ydCB7IHNsaWRlclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc2xpZGVyL3NsaWRlci5wcmVzZXRzJztcbmltcG9ydCB7IHJhbmdlU2xpZGVyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLnByZXNldHMnO1xuaW1wb3J0IHsgc2VnbWVudGVkQ29udHJvbFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc2VnbWVudGVkLWNvbnRyb2wvc2VnbWVudGVkLWNvbnRyb2wucHJlc2V0cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9ydGFyUHJlc2V0VGhlbWUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbG9yU2NoZW1lOiAnc3lzdGVtJyB8ICdsaWdodCcgfCAnZGFyayc7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdkZWZhdWx0JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAncHgnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9IGFzIE1vcnRhclByZXNldFRoZW1lLFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMuZGVmYXVsdCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMuZGVmYXVsdCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMuZGVmYXVsdCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMuZGVmYXVsdCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMuZGVmYXVsdCxcbiAgTXRlTGluazogbGlua1ByZXNldHMuZGVmYXVsdCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMuZGVmYXVsdCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMuZGVmYXVsdCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMuZGVmYXVsdCxcbn07XG5cbmV4cG9ydCB0eXBlIE1vcnRhclByZXNldCA9IHR5cGVvZiBkZWZhdWx0UHJlc2V0O1xuXG5leHBvcnQgY29uc3QgcHhQcmVzZXQ6IE1vcnRhclByZXNldCA9IHtcbiAgcHJlc2V0OiAncHgnLFxuICB0aGVtZToge1xuICAgIG5hbWU6ICdweCcsXG4gICAgY29sb3JTY2hlbWU6ICdsaWdodCcsXG4gIH0sXG4gIE10ZUJ1dHRvbjogYnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMucHgsXG4gIE10ZUljb246IGljb25QcmVzZXRzLnB4LFxuICBNdGVQcm9ncmVzc0JhcjogcHJvZ3Jlc3NCYXJQcmVzZXRzLnB4LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMucHgsXG4gIE10ZVRvb2xiYXI6IHRvb2xiYXJQcmVzZXRzLnB4LFxuICBNdGVDYXJkOiBjYXJkUHJlc2V0cy5weCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMucHgsXG4gIE10ZVRyZWU6IHRyZWVQcmVzZXRzLnB4LFxuICBNdGVUYWc6IHRhZ1ByZXNldHMucHgsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMucHgsXG4gIE10ZUxpbms6IGxpbmtQcmVzZXRzLnB4LFxuICBNdGVBbGVydDogYWxlcnRQcmVzZXRzLnB4LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLnB4LFxuICBNdGVEcmF3ZXI6IGRyYXdlclByZXNldHMucHgsXG4gIE10ZUFzaWRlOiBhc2lkZVByZXNldHMucHgsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMucHgsXG4gIE10ZU1vZGFsOiBtb2RhbFByZXNldHMucHgsXG4gIE10ZUNoZWNrYm94OiBjaGVja2JveFByZXNldHMucHgsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMucHgsXG4gIE10ZU5hdlJvb3Q6IG5hdlJvb3RQcmVzZXRzLnB4LFxuICBNdGVOYXZIZWFkZXI6IG5hdkhlYWRlclByZXNldHMucHgsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5weCxcbiAgTXRlTmF2U2lkZWJhcjogbmF2U2lkZWJhclByZXNldHMucHgsXG4gIE10ZU5hdkNvbnRlbnQ6IG5hdkNvbnRlbnRQcmVzZXRzLnB4LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMucHgsXG4gIE10ZU5hdkJ1dHRvbjogbmF2QnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlTmF2SWNvbkJ1dHRvbjogbmF2SWNvbkJ1dHRvblByZXNldHMucHgsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLnB4LFxuICBNdGVCdXR0b25Hcm91cDogYnV0dG9uR3JvdXBQcmVzZXRzLnB4LFxuICBNdGVTd2l0Y2g6IHN3aXRjaFByZXNldHMucHgsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5weCxcbiAgTXRlVGV4dGFyZWE6IHRleHRhcmVhUHJlc2V0cy5weCxcbiAgTXRlU2tlbGV0b246IHNrZWxldG9uUHJlc2V0cy5weCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLnB4LFxuICBNdGVSYW5nZVNsaWRlcjogcmFuZ2VTbGlkZXJQcmVzZXRzLnB4LFxuICBNdGVTZWdtZW50ZWRDb250cm9sOiBzZWdtZW50ZWRDb250cm9sUHJlc2V0cy5weCxcbn07XG5cbmV4cG9ydCBjb25zdCBjeFByZXNldDogTW9ydGFyUHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdjeCcsXG4gIHRoZW1lOiB7XG4gICAgbmFtZTogJ2N4JyxcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSxcbiAgTXRlQnV0dG9uOiBidXR0b25QcmVzZXRzLmN4LFxuICBNdGVJY29uQnV0dG9uOiBpY29uQnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMuY3gsXG4gIE10ZVByb2dyZXNzQmFyOiBwcm9ncmVzc0JhclByZXNldHMuY3gsXG4gIE10ZVByb2dyZXNzU3Bpbm5lcjogcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cy5jeCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMuY3gsXG4gIE10ZUNhcmQ6IGNhcmRQcmVzZXRzLmN4LFxuICBNdGVDYXJkQnV0dG9uOiBjYXJkQnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMuY3gsXG4gIE10ZVRhZzogdGFnUHJlc2V0cy5jeCxcbiAgTXRlQmFkZ2U6IGJhZGdlUHJlc2V0cy5jeCxcbiAgTXRlTGluazogbGlua1ByZXNldHMuY3gsXG4gIE10ZUFsZXJ0OiBhbGVydFByZXNldHMuY3gsXG4gIE10ZUlucHV0OiBpbnB1dFByZXNldHMuY3gsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5jeCxcbiAgTXRlQXNpZGU6IGFzaWRlUHJlc2V0cy5jeCxcbiAgTXRlQnJlYWRjcnVtYkl0ZW06IGJyZWFkY3J1bWJJdGVtUHJlc2V0cy5jeCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5jeCxcbiAgTXRlQ2hlY2tib3g6IGNoZWNrYm94UHJlc2V0cy5jeCxcbiAgTXRlUmFkaW86IHJhZGlvUHJlc2V0cy5jeCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMuY3gsXG4gIE10ZU5hdkhlYWRlcjogbmF2SGVhZGVyUHJlc2V0cy5jeCxcbiAgTXRlTmF2U3ViSGVhZGVyOiBuYXZTdWJIZWFkZXJQcmVzZXRzLmN4LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5jeCxcbiAgTXRlTmF2Q29udGVudDogbmF2Q29udGVudFByZXNldHMuY3gsXG4gIE10ZU5hdkZvb3RlcjogbmF2Rm9vdGVyUHJlc2V0cy5jeCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLmN4LFxuICBNdGVOYXZJY29uQnV0dG9uOiBuYXZJY29uQnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlTmF2SXRlbTogbmF2SXRlbVByZXNldHMuY3gsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMuY3gsXG4gIE10ZVN3aXRjaDogc3dpdGNoUHJlc2V0cy5jeCxcbiAgTXRlTmF0aXZlU2VsZWN0OiBuYXRpdmVTZWxlY3RQcmVzZXRzLmN4LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLmN4LFxuICBNdGVTa2VsZXRvbjogc2tlbGV0b25QcmVzZXRzLmN4LFxuICBNdGVTbGlkZXI6IHNsaWRlclByZXNldHMuY3gsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMuY3gsXG4gIE10ZVNlZ21lbnRlZENvbnRyb2w6IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzLmN4LFxufTtcblxuZXhwb3J0IGNvbnN0IHJ4UHJlc2V0OiBNb3J0YXJQcmVzZXQgPSB7XG4gIHByZXNldDogJ3J4JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAncngnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9LFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMucngsXG4gIE10ZUljb25CdXR0b246IGljb25CdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVJY29uOiBpY29uUHJlc2V0cy5yeCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5yeCxcbiAgTXRlUHJvZ3Jlc3NTcGlubmVyOiBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzLnJ4LFxuICBNdGVUb29sYmFyOiB0b29sYmFyUHJlc2V0cy5yeCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMucngsXG4gIE10ZUNhcmRCdXR0b246IGNhcmRCdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVUcmVlOiB0cmVlUHJlc2V0cy5yeCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLnJ4LFxuICBNdGVCYWRnZTogYmFkZ2VQcmVzZXRzLnJ4LFxuICBNdGVMaW5rOiBsaW5rUHJlc2V0cy5yeCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5yeCxcbiAgTXRlSW5wdXQ6IGlucHV0UHJlc2V0cy5yeCxcbiAgTXRlRHJhd2VyOiBkcmF3ZXJQcmVzZXRzLnJ4LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLnJ4LFxuICBNdGVCcmVhZGNydW1iSXRlbTogYnJlYWRjcnVtYkl0ZW1QcmVzZXRzLnJ4LFxuICBNdGVNb2RhbDogbW9kYWxQcmVzZXRzLnJ4LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLnJ4LFxuICBNdGVSYWRpbzogcmFkaW9QcmVzZXRzLnJ4LFxuICBNdGVOYXZSb290OiBuYXZSb290UHJlc2V0cy5yeCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZTdWJIZWFkZXI6IG5hdlN1YkhlYWRlclByZXNldHMucngsXG4gIE10ZU5hdlNpZGViYXI6IG5hdlNpZGViYXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5yeCxcbiAgTXRlTmF2Rm9vdGVyOiBuYXZGb290ZXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZCdXR0b246IG5hdkJ1dHRvblByZXNldHMucngsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVOYXZJdGVtOiBuYXZJdGVtUHJlc2V0cy5yeCxcbiAgTXRlQnV0dG9uR3JvdXA6IGJ1dHRvbkdyb3VwUHJlc2V0cy5yeCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLnJ4LFxuICBNdGVOYXRpdmVTZWxlY3Q6IG5hdGl2ZVNlbGVjdFByZXNldHMucngsXG4gIE10ZVRleHRhcmVhOiB0ZXh0YXJlYVByZXNldHMucngsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMucngsXG4gIE10ZVNsaWRlcjogc2xpZGVyUHJlc2V0cy5yeCxcbiAgTXRlUmFuZ2VTbGlkZXI6IHJhbmdlU2xpZGVyUHJlc2V0cy5yeCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMucngsXG59O1xuIiwgImltcG9ydCB7IGN4UHJlc2V0LCBkZWZhdWx0UHJlc2V0LCBNb3J0YXJQcmVzZXQsIHB4UHJlc2V0LCByeFByZXNldCB9IGZyb20gJy4vcHJlc2V0cyc7XG5pbXBvcnQgeyBjb21wdXRlZCwgU2lnbmFsLCBzaWduYWwgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5jbGFzcyBfTXRlUHJlc2V0U2VydmljZSB7XG4gIHByaXZhdGUgcHJlc2V0cyA9IG5ldyBNYXA8c3RyaW5nLCBNb3J0YXJQcmVzZXQ+KFtcbiAgICBbJ2dsb2JhbCcsIGRlZmF1bHRQcmVzZXRdLFxuICAgIFsnZGVmYXVsdCcsIGRlZmF1bHRQcmVzZXRdLFxuICAgIFsncHgnLCBweFByZXNldF0sXG4gICAgWydjeCcsIGN4UHJlc2V0XSxcbiAgICBbJ3J4JywgcnhQcmVzZXRdLFxuICBdKTtcblxuICBwcml2YXRlIHByZXNldENoYW5nZWRTaWduYWwgPSBzaWduYWw8eyBwcmVzZXROYW1lOiBzdHJpbmc7IGNvbXBvbmVudE5hbWU6IHN0cmluZyB9Pih7XG4gICAgcHJlc2V0TmFtZTogbnVsbCxcbiAgICBjb21wb25lbnROYW1lOiBudWxsLFxuICB9KTtcblxuICBwdWJsaWMgc2V0UHJlc2V0KHByZXNldE5hbWU6IHN0cmluZywgcHJlc2V0OiBQYXJ0aWFsPE1vcnRhclByZXNldD4pIHtcbiAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgIC4uLih0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpID8/IGRlZmF1bHRQcmVzZXQpLFxuICAgICAgLi4ucHJlc2V0LFxuICAgIH0pO1xuICAgIHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbC5zZXQoeyBwcmVzZXROYW1lLCBjb21wb25lbnROYW1lOiBudWxsIH0pO1xuICB9XG5cbiAgcHVibGljIHNldENvbXBvbmVudFByZXNldDxDIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0PihcbiAgICBwcmVzZXROYW1lOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogQyxcbiAgICBjb21wb25lbnRQcmVzZXQ6IFBhcnRpYWw8TW9ydGFyUHJlc2V0W0NdPlxuICApIHtcbiAgICBjb25zdCBzZWxlY3RlZFByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSkgPz8gZGVmYXVsdFByZXNldDtcbiAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgIC4uLnNlbGVjdGVkUHJlc2V0LFxuICAgICAgW2NvbXBvbmVudE5hbWVdOiB7XG4gICAgICAgIC4uLihzZWxlY3RlZFByZXNldFtjb21wb25lbnROYW1lXSA/PyAoe30gYXMgYW55KSksXG4gICAgICAgIC4uLmNvbXBvbmVudFByZXNldCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLnNldCh7IHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWUgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29tcG9uZW50UHJlc2V0UHJvcGVydHk8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldCwgUCBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldFtDXT4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IEMsXG4gICAgcHJvcGVydHlOYW1lOiBQLFxuICAgIHZhbHVlOiBNb3J0YXJQcmVzZXRbQ11bUF0gfCBQYXJ0aWFsPE1vcnRhclByZXNldFtDXVtQXT5cbiAgKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpID8/IGRlZmF1bHRQcmVzZXQ7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb21wb25lbnRQcmVzZXQgPSBzZWxlY3RlZFByZXNldFtjb21wb25lbnROYW1lXSBhcyBhbnk7XG5cbiAgICAvLyBJZiBzZXR0aW5nIGFuIG9iamVjdCB2YWx1ZSBiZSBzdXJlIHRvIHNwcmVhZCBvdmVyIGV4aXN0aW5nIHZhbHVlXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgICAuLi5zZWxlY3RlZFByZXNldCxcbiAgICAgICAgW2NvbXBvbmVudE5hbWVdOiB7XG4gICAgICAgICAgLi4uc2VsZWN0ZWRDb21wb25lbnRQcmVzZXQsXG4gICAgICAgICAgW3Byb3BlcnR5TmFtZV06IHtcbiAgICAgICAgICAgIC4uLnNlbGVjdGVkQ29tcG9uZW50UHJlc2V0W3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSBqdXN0IHNldCB0aGUgdmFsdWVcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgICAuLi5zZWxlY3RlZFByZXNldCxcbiAgICAgICAgW2NvbXBvbmVudE5hbWVdOiB7XG4gICAgICAgICAgLi4uc2VsZWN0ZWRDb21wb25lbnRQcmVzZXQsXG4gICAgICAgICAgW3Byb3BlcnR5TmFtZV06IHZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbC5zZXQoeyBwcmVzZXROYW1lLCBjb21wb25lbnROYW1lIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFByZXNldChwcmVzZXROYW1lOiBzdHJpbmcpOiBNb3J0YXJQcmVzZXQge1xuICAgIGNvbnN0IHByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSk7XG4gICAgaWYgKCFwcmVzZXQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE10ZVByZXNldFNlcnZpY2U6IEEgcHJlc2V0IHdpdGggdGhlIG5hbWUgXCIke3ByZXNldE5hbWV9XCIgZG9lcyBub3QgZXhpc3RgKTtcbiAgICB9XG4gICAgcmV0dXJuIHByZXNldDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb21wb25lbnRQcmVzZXQ8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldD4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IENcbiAgKTogTW9ydGFyUHJlc2V0W0NdIHtcbiAgICBjb25zdCBwcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpO1xuICAgIGNvbnN0IGNvbXBvbmVudFByZXNldCA9IHByZXNldFtjb21wb25lbnROYW1lXTtcbiAgICBpZiAoIXByZXNldCkge1xuICAgICAgY29uc29sZS5lcnJvcihgTXRlUHJlc2V0U2VydmljZTogQSBwcmVzZXQgd2l0aCB0aGUgbmFtZSBcIiR7cHJlc2V0TmFtZX1cIiBkb2VzIG5vdCBleGlzdC5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudFByZXNldDtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RQcmVzZXQocHJlc2V0TmFtZTogc3RyaW5nKTogU2lnbmFsPE1vcnRhclByZXNldD4ge1xuICAgIGxldCBmaXJzdEVtaXQgPSB0cnVlO1xuICAgIHJldHVybiBjb21wdXRlZCh0aGlzLnByZXNldENoYW5nZWRTaWduYWwsIChjaGFuZ2UsIHNldCkgPT4ge1xuICAgICAgaWYgKGZpcnN0RW1pdCkge1xuICAgICAgICBzZXQodGhpcy5nZXRQcmVzZXQocHJlc2V0TmFtZSkpO1xuICAgICAgICBmaXJzdEVtaXQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnByZXNldE5hbWUgPT09IHByZXNldE5hbWUpIHtcbiAgICAgICAgc2V0KHRoaXMuZ2V0UHJlc2V0KHByZXNldE5hbWUpKTtcbiAgICAgIH1cbiAgICB9KSBhcyBTaWduYWw8TW9ydGFyUHJlc2V0PjtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RDb21wb25lbnRQcmVzZXQ8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldD4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IENcbiAgKTogU2lnbmFsPE1vcnRhclByZXNldFtDXT4ge1xuICAgIGxldCBmaXJzdEVtaXQgPSB0cnVlO1xuICAgIHJldHVybiBjb21wdXRlZCh0aGlzLnByZXNldENoYW5nZWRTaWduYWwsIChjaGFuZ2UsIHNldCkgPT4ge1xuICAgICAgaWYgKGZpcnN0RW1pdCkge1xuICAgICAgICBzZXQodGhpcy5nZXRDb21wb25lbnRQcmVzZXQocHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSkpO1xuICAgICAgICBmaXJzdEVtaXQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIChjaGFuZ2UucHJlc2V0TmFtZSA9PT0gcHJlc2V0TmFtZSAmJiAhY2hhbmdlLmNvbXBvbmVudE5hbWUpIHx8XG4gICAgICAgIChjaGFuZ2UucHJlc2V0TmFtZSA9PT0gcHJlc2V0TmFtZSAmJiBjaGFuZ2UuY29tcG9uZW50TmFtZSA9PT0gY29tcG9uZW50TmFtZSlcbiAgICAgICkge1xuICAgICAgICBzZXQodGhpcy5nZXRDb21wb25lbnRQcmVzZXQocHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSkpO1xuICAgICAgfVxuICAgIH0pIGFzIFNpZ25hbDxNb3J0YXJQcmVzZXRbQ10+O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVQcmVzZXRTZXJ2aWNlID0gbmV3IF9NdGVQcmVzZXRTZXJ2aWNlKCk7XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlcyAqL1xuaW1wb3J0IHsgQ29udGV4dENvbnN1bWVyIH0gZnJvbSAnQGxpdC1sYWJzL2NvbnRleHQnO1xuaW1wb3J0IHsgUHJvcGVydHlEZWNsYXJhdGlvbiwgUmVhY3RpdmVFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIENvbnN0cnVjdG9yLFxuICBpc1NzcixcbiAgTXRlRWxlbWVudCxcbiAgTXRlUHJlc2V0U2VydmljZSxcbiAgcHJlc2V0Q29udGV4dCxcbiAgc2lnbmFsLFxuICBjb21wdXRlZCxcbiAgVW5zdWJzY3JpYmVyLFxufSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgTW9ydGFyUHJlc2V0IH0gZnJvbSAnLi9wcmVzZXRzJztcblxuZXhwb3J0IHR5cGUgUHJlc2V0T3B0aW9ucyA9ICdtZCcgfCAnc20nIHwgJ2xnJyB8IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJlc2V0RWxlbWVudEludGVyZmFjZTxQPiB7XG4gIC8qKiBAaWdub3JlICovXG4gIHJlYWRvbmx5IF9fY29tcG9uZW50TmFtZToga2V5b2YgTW9ydGFyUHJlc2V0O1xuXG4gIC8qKiBTZWxlY3RzIHRoZSBwcmVzZXQgZm9yIHRoaXMgY29tcG9uZW50LiBPdmVycmlkZXMgdGhlIGdsb2JhbCBwcmVzZXQgZm9yIHRoaXMgaW5zdGFuY2Ugb2YgdGhpcyBjb21wb25lbnQuICovXG4gIHByZXNldDogc3RyaW5nO1xuXG4gIC8qKiBAaWdub3JlICovXG4gIGFwcGxpZWRQcmVzZXQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmVzZXRNaXhpbkZhY3RvcnlPcHRpb25zIHtcbiAgcmVmbGVjdEFwcGxpZWRQcmVzZXQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IHtcbiAgaXMsXG4gIGRlZmluZVByb3BlcnR5LFxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIGdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZ2V0UHJvdG90eXBlT2YsXG59ID0gT2JqZWN0O1xuXG5leHBvcnQgY29uc3QgUHJlc2V0TWl4aW5GYWN0b3J5ID0gPFA+KFxuICBjb21wb25lbnROYW1lOiBrZXlvZiBNb3J0YXJQcmVzZXQsXG4gIG9wdGlvbnM6IFByZXNldE1peGluRmFjdG9yeU9wdGlvbnMgPSB7IHJlZmxlY3RBcHBsaWVkUHJlc2V0OiBmYWxzZSB9XG4pID0+IHtcbiAgcmV0dXJuIDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgICBjbGFzcyBQcmVzZXRFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICByZWFkb25seSBfX2NvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lO1xuXG4gICAgICAvKiogTWFwIHRoYXQgc3RvcmVzIHByaXZhdGUgdmFsdWVzIHRoYXQgdGFrZSBwcmVjZWRlbmNlIG92ZXIgcHJlc2V0IHZhbHVlcyAqL1xuICAgICAgcHJvdGVjdGVkIF92YWx1ZU1hcCA9IG5ldyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+KCk7XG5cbiAgICAgIC8qKiBNYXAgdGhhdCBzdG9yZXMgZmFsbGJhY2sgcHJlc2V0IHZhbHVlcyBlbWl0dGVkIGJ5IHRoZSBwcmVzZXRDb250cm9sbGVyICovXG4gICAgICBwcm90ZWN0ZWQgX3ByZXNldE1hcCA9IG5ldyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+KCk7XG5cbiAgICAgIC8qKiBTZWxlY3RzIGEgc3BlY2lmaWMgcHJlc2V0IGZvciB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZS4gT3ZlcnJpZGVzIHRoZSBjdXJyZW50IGdsb2JhbCBwcmVzZXQuICovXG4gICAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pXG4gICAgICBzZXQgcHJlc2V0KHByZXNldDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3ByZXNldCA9IHByZXNldDtcbiAgICAgICAgdGhpcy5fYWN0aXZlUHJlc2V0U2lnbmFsLnNldChwcmVzZXQpO1xuICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgIC8vIFN0b3AgU1NSIGNvbnN0cnVjdG9yIGxpc3RlbmVyIGlmIHN0aWxsIG9wZW4uXG4gICAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1Yj8uKCk7XG4gICAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1YiA9IG51bGw7XG4gICAgICAgICAgY29uc3QgcHJlc2V0ID0gTXRlUHJlc2V0U2VydmljZS5nZXRQcmVzZXQodGhpcy5wcmVzZXQgPz8gJ2dsb2JhbCcpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlU3NyUHJlc2V0Q2hhbmdlcyhwcmVzZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBnZXQgcHJlc2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJlc2V0O1xuICAgICAgfVxuICAgICAgcHJpdmF0ZSBfcHJlc2V0ID0gJ2dsb2JhbCc7XG5cbiAgICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IG9wdGlvbnM/LnJlZmxlY3RBcHBsaWVkUHJlc2V0ID8/IGZhbHNlIH0pIGFwcGxpZWRQcmVzZXQgPSAnZ2xvYmFsJztcblxuICAgICAgQHN0YXRlKCkgcHJpdmF0ZSBfYXBwbGllZFByZXNldD86IHN0cmluZztcblxuICAgICAgLyoqIEtlZXBzIGNvbnN0cnVjdG9yIHByZXNldCBzdWJzY3JpcHRpb24gb3BlbiB1bnRpbCB3aWxsVXBkYXRlICovXG4gICAgICBwcml2YXRlIHNzckNvbnN0cnVjdG9yU3ViOiBVbnN1YnNjcmliZXI7XG4gICAgICBwcml2YXRlIHByZXZpb3VzQ29tcG9uZW50VW5zdWI6IFVuc3Vic2NyaWJlcjtcblxuICAgICAgLyoqIEVtaXRzIHdoZW5ldmVyIHRoZSBsb2NhbCBwcmVzZXQgdmFsdWUgY2hhbmdlcy4gKi9cbiAgICAgIHByaXZhdGUgX2FjdGl2ZVByZXNldFNpZ25hbCA9IHNpZ25hbDxzdHJpbmc+KG51bGwpO1xuICAgICAgcHJpdmF0ZSBfcGFyZW50UHJlc2V0U2lnbmFsID0gc2lnbmFsPHN0cmluZz4obnVsbCk7XG5cbiAgICAgIHByaXZhdGUgX3ByZXNldENvbnRleHQgPSBuZXcgQ29udGV4dENvbnN1bWVyKHRoaXMsIHtcbiAgICAgICAgY29udGV4dDogcHJlc2V0Q29udGV4dCxcbiAgICAgICAgc3Vic2NyaWJlOiB0cnVlLFxuICAgICAgICBjYWxsYmFjazogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcGFyZW50UHJlc2V0U2lnbmFsLnNldCgodmFsdWUgPT09ICcnID8gbnVsbCA6IHZhbHVlKSA/PyAnZ2xvYmFsJyk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBPdmVycmlkZXMgdGhlIGRlZmF1bHQgZ2V0UHJvcGVydHlEZXNjcmlwdG9yIG1ldGhvZCB0byBjaGVjayBmb3IgdGhlIGN1c3RvbVxuICAgICAgICogYGlzUHJlc2V0YCBvcHRpb24uIERlc2NyaXB0b3JzIG9mIHByb3BlcnRpZXMgdGhhdCBhcmUgZGVjbGFyZWQgd2l0aCB0aGUgYGlzUHJlc2V0YFxuICAgICAgICogb3B0aW9uIGFyZSBkZWZpbmVkIHdpdGggc3BlY2lhbCBnZXR0ZXIvc2V0dGVyIGxvZ2ljIHRoYXQgc2V0cyB2YWx1ZSB0byB2YWx1ZU1hcFxuICAgICAgICogYW5kIGdldHMgdmFsdWVzIGZyb20gdGhlIHZhbHVlTWFwIGJ1dCB0aGVuIGFsc28gZmFsbHMgYmFjayB0byBhbnkgdmFsdWUgaW4gdGhlIHByZXNldE1hcFxuICAgICAgICpcbiAgICAgICAqIFRoZSBwcmVzZXRNYXAgaXMgcG9wdWxhdGVkIGFib3ZlIGZyb20gdmFsdWVzIGZyb20gdGhlIHByZXNldENvbnRyb2xsZXIgd2hlbmV2ZXIgdGhlXG4gICAgICAgKiBwcmVzZXQgZm9yIHRoaXMgY29tcG9uZW50IGlzIGNoYW5nZWQgZ2xvYmFsbHkuXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICAgIG5hbWU6IFByb3BlcnR5S2V5LFxuICAgICAgICBrZXk6IHN0cmluZyB8IHN5bWJvbCxcbiAgICAgICAgb3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvblxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHsgZ2V0LCBzZXQgfSA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLnByb3RvdHlwZSwgbmFtZSkgPz8ge1xuICAgICAgICAgIGdldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW2tleSBhcyBrZXlvZiB0eXBlb2YgdGhpc107XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQodGhpczogUmVhY3RpdmVFbGVtZW50LCB2OiB1bmtub3duKSB7XG4gICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcgfCBzeW1ib2wsIHVua25vd24+KVtrZXldID0gdjtcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGdldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQpOiBhbnkge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBnZXR0ZXIgbG9naWMgdGhhdCBnZXRzIGZyb20gdGhlIHZhbHVlTWFwIG9yIHByZXNldE1hcFxuICAgICAgICAgICAgaWYgKG9wdGlvbnNbJ2lzUHJlc2V0J10pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkuX3ZhbHVlTWFwIGFzIE1hcDxcbiAgICAgICAgICAgICAgICAgICAgUHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgICAgIFBba2V5b2YgUF1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICApLmdldChuYW1lKSB8fFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fcHJlc2V0TWFwIGFzIE1hcDxcbiAgICAgICAgICAgICAgICAgICAgUHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgICAgIFBba2V5b2YgUF1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICApLmdldChuYW1lKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVmYXVsdCBwcm9wZXJ0eSBnZXR0ZXIgbG9naWNcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gZ2V0Py5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCwgdmFsdWU6IHVua25vd24pIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgc2V0dGVyIGxvZ2ljIHRoYXQgc2V0cyB0byB0aGUgdmFsdWVNYXBcbiAgICAgICAgICAgIGlmIChvcHRpb25zWydpc1ByZXNldCddKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gKFxuICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fdmFsdWVNYXAgYXMgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPlxuICAgICAgICAgICAgICApLmdldChuYW1lKTtcbiAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fdmFsdWVNYXAgYXMgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPlxuICAgICAgICAgICAgICApLnNldChuYW1lLCB2YWx1ZSBhcyBhbnkpO1xuICAgICAgICAgICAgICAvLyBEdXJpbmcgU1NSIHdlIG5lZWQgdG8gdXBkYXRlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgIGlmIChpc1NzcigpKSB7XG4gICAgICAgICAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBSZWFjdGl2ZUVsZW1lbnQpLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIE9uIHRoZSBjbGllbnQgd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgY3VycmVudCB1cGRhdGUgdG8gZmluaXNoXG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlYWN0aXZlRWxlbWVudCkucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlZmF1bHQgcHJvcGVydHkgc2V0dGVyIGxvZ2ljXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBnZXQ/LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgIHNldCEuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICh0aGlzIGFzIHVua25vd24gYXMgUmVhY3RpdmVFbGVtZW50KS5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgICAgICAvLyBTdWJzY3JpYmVzIGZvciBjaGFuZ2VzIHRvIHRoaXMgY29tcG9uZW50cyBhY3RpdmUgcHJlc2V0IHRvIHVwZGF0ZSBhbGwgcmVsZXZhbnQgcHJvcHMgcHJlc2V0IHZhbHVlc1xuICAgICAgICB0aGlzLnN1YnMucHVzaChcbiAgICAgICAgICBjb21wdXRlZChcbiAgICAgICAgICAgIFt0aGlzLl9hY3RpdmVQcmVzZXRTaWduYWwsIHRoaXMuX3BhcmVudFByZXNldFNpZ25hbF0sXG4gICAgICAgICAgICAoW2FjdGl2ZVByZXNldCwgcGFyZW50UHJlc2V0XSwgc2V0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhY3RpdmVQcmVzZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZSA9XG4gICAgICAgICAgICAgICAgICBhY3RpdmVQcmVzZXQgPT09ICdnbG9iYWwnXG4gICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICA6IE10ZVByZXNldFNlcnZpY2UuZ2V0Q29tcG9uZW50UHJlc2V0KGFjdGl2ZVByZXNldCwgJ3RoZW1lJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2xvY2FsUHJlc2V0VGhlbWUgPSBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBudWxsKTtcblxuICAgICAgICAgICAgICB0aGlzLl9hcHBsaWVkUHJlc2V0ID0gYWN0aXZlUHJlc2V0ID8/IHBhcmVudFByZXNldCA/PyAnZ2xvYmFsJztcbiAgICAgICAgICAgICAgdGhpcy5hcHBsaWVkUHJlc2V0ID0gTXRlUHJlc2V0U2VydmljZS5nZXRDb21wb25lbnRQcmVzZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwbGllZFByZXNldCxcbiAgICAgICAgICAgICAgICAncHJlc2V0J1xuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIC8vIFVuc3Vic2NyaWJlIHRvIHByZXZpb3VzIGNvbXBvbmVudCBwcmVzZXQgY2hhbmdlc1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ29tcG9uZW50VW5zdWI/LigpO1xuICAgICAgICAgICAgICAvLyBVcGRhdGUgcHJvcHMgaWYgbmV3IGNvbXBvbmVudCBwcmVzZXQgZW1pdHNcbiAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0NvbXBvbmVudFVuc3ViID0gTXRlUHJlc2V0U2VydmljZS5zZWxlY3RDb21wb25lbnRQcmVzZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwbGllZFByZXNldCxcbiAgICAgICAgICAgICAgICB0aGlzLl9fY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgICApLnN1YnNjcmliZSgobmV3UHJlc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ByZXNldCkge1xuICAgICAgICAgICAgICAgICAgc2V0KG5ld1ByZXNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApLnN1YnNjcmliZSgobmV3UHJlc2V0cykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWVzTWFwID0gbmV3IE1hcCh0aGlzLl9wcmVzZXRNYXApO1xuICAgICAgICAgICAgY29uc3Qgb2xkUHJvcHMgPSBBcnJheS5mcm9tKHRoaXMuX3ByZXNldE1hcC5rZXlzKCkpO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSBPYmplY3Qua2V5cyhuZXdQcmVzZXRzID8/IHt9KTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGtleXMgaW4gdGhlIG5ldyBwcmVzZXRzIGNsZWFyIGFsbCBwcmVzZXQgdmFsdWVzXG4gICAgICAgICAgICBpZiAobmV3UHJvcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG9sZCBzZXQgcHJvcHMgYW5kIG5ldyBvbmVzXG4gICAgICAgICAgICAvLyBSZW1vdmUgb2xkIG9uZXMgJiBzZXQgbmV3IG9uZXNcbiAgICAgICAgICAgIC8vIEZpbmFsbHkgZm9yY2UgYW4gdXBkYXRlIGZvciBlYWNoIHByb3BcbiAgICAgICAgICAgIFsuLi5vbGRQcm9wcywgLi4ubmV3UHJvcHNdLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAobmV3UHJlc2V0c1trZXldKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLnNldChrZXksIG5ld1ByZXNldHNba2V5XSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShrZXksIG9sZFZhbHVlc01hcC5nZXQoa2V5KSA/PyBudWxsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgICAgIHRoaXMucHJldmlvdXNDb21wb25lbnRVbnN1Yj8uKCk7XG4gICAgICAgIHRoaXMuc3NyQ29uc3RydWN0b3JTdWI/LigpO1xuICAgICAgfVxuXG4gICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBzdXBlcihhcmdzKTtcblxuICAgICAgICAvLyBUT0RPKHJlZWNlKTogRW5zdXJlIHdlIHVwZGF0ZSB0aGlzIHRvIHN1cHBvcnQgY29udGV4dCB3aGVuIHRoYXQgaXMgU1NSIEZyaWVuZGx5OiBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9pc3N1ZXMvMzM2NVxuICAgICAgICAvLyBIYW5kbGUgc2V0dGluZyBwcmVzZXQgZGVmYXVsdHMgaW4gU1NSXG4gICAgICAgIGlmIChpc1NzcigpKSB7XG4gICAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1YiA9IE10ZVByZXNldFNlcnZpY2Uuc2VsZWN0UHJlc2V0KHRoaXMucHJlc2V0ID8/ICdnbG9iYWwnKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocHJlc2V0KSA9PiB0aGlzLmhhbmRsZVNzclByZXNldENoYW5nZXMocHJlc2V0KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBoYW5kbGVTc3JQcmVzZXRDaGFuZ2VzKHByZXNldDogTW9ydGFyUHJlc2V0KSB7XG4gICAgICAgIGlmIChwcmVzZXQpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRQcmVzZXRzID0gcHJlc2V0W3RoaXMuX19jb21wb25lbnROYW1lXTtcbiAgICAgICAgICBjb25zdCBvbGRQcm9wcyA9IEFycmF5LmZyb20odGhpcy5fcHJlc2V0TWFwLmtleXMoKSk7XG4gICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRQcmVzZXRzID8/IHt9KTtcblxuICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBrZXlzIGluIHRoZSBuZXcgcHJlc2V0cyBjbGVhciBhbGwgcHJlc2V0IHZhbHVlc1xuICAgICAgICAgIGlmIChuZXdQcm9wcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5jbGVhcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBMb29wIHRocm91Z2ggb2xkIHNldCBwcm9wcyBhbmQgbmV3IG9uZXNcbiAgICAgICAgICAvLyBSZW1vdmUgb2xkIG9uZXMgJiBzZXQgbmV3IG9uZXNcbiAgICAgICAgICAvLyBGaW5hbGx5IGZvcmNlIGFuIHVwZGF0ZSBmb3IgZWFjaCBwcm9wXG4gICAgICAgICAgWy4uLm9sZFByb3BzLCAuLi5uZXdQcm9wc10uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50UHJlc2V0c1trZXldKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5zZXQoa2V5LCBjb21wb25lbnRQcmVzZXRzW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKGtleSwgbnVsbCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5hcHBsaWVkUHJlc2V0ID0gcHJlc2V0WydwcmVzZXQnXTtcbiAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ2FwcGxpZWRQcmVzZXQnLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUHJlc2V0RWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxQcmVzZXRFbGVtZW50SW50ZXJmYWNlPFA+PiAmIFQ7XG4gIH07XG59O1xuIiwgImltcG9ydCB7IFByb3BlcnR5RGVjbGFyYXRpb24gfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVzZXRQcm9wZXJ0eTxUPihvcHRpb25zPzogUHJvcGVydHlEZWNsYXJhdGlvbikge1xuICByZXR1cm4gcHJvcGVydHkoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgaXNQcmVzZXQ6IHRydWUsXG4gIH0gYXMgYW55KTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAnQGxpdC1sYWJzL2NvbnRleHQnO1xuXG5leHBvcnQgY29uc3QgcHJlc2V0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8c3RyaW5nPignTVRFX1BSRVNFVCcpO1xuIiwgImltcG9ydCB7IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgTXRlUHJlc2V0U2VydmljZSB9IGZyb20gJy4uL3ByZXNldHMnO1xuaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgTXRlRWxlbWVudCB9IGZyb20gJy4uL2Jhc2UtY2xhc3Nlcyc7XG5cbmNvbnN0IGdsb2JhbFByZXNldCQgPSBNdGVQcmVzZXRTZXJ2aWNlLnNlbGVjdFByZXNldCgnZ2xvYmFsJyk7XG5jb25zdCBnbG9iYWxQcmVzZXROYW1lJCA9IGNvbXB1dGVkKGdsb2JhbFByZXNldCQsIChwcmVzZXQpID0+IHByZXNldC5wcmVzZXQpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpZWRQcmVzZXRDb250ZXh0IHtcbiAgcHJlc2V0TmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFByZXNldCBpcyBkZXRlcm1pbmVkIGZyb20gZWl0aGVyIHRoZSBwYXJlbnQgcHJlc2V0IGNvbnRleHQgb3IgYSBsb2NhbCBwcmVzZXQgcHJvcGVydHkuXG4gKiBUaGlzIGNvbnRyb2xsZXIga2VlcHMgdHJhY2sgb2YgdGhlIGFjdHVhbCBhY3RpdmUgcHJlc2V0IGFwcGxpZWQgdG8gdGhlIGN1cnJlbnQgY29tcG9uZW50LlxuICogSWYgYSBjYWxsYmFjayBpcyBnaXZlbiBpdCB3aWxsIGJlIGNhbGxlZCBhbnkgdGltZSB0aGF0IGNvbnRleHQgY2hhbmdlcy4gT3RoZXJ3aXNlIGNvbnRyb2xsZXJcbiAqIG1ldGhvZHMgY2FuIGJlIGNhbGxlZCB3aGVuIG5lZWRlZC5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIGV2ZW4gd2l0aGluIGVsZW1lbnRzIHRoYXQgZG8gbm90IGhhdmUgdGhlaXIgb3duIHByZXNldFxuICogb3B0aW9ucyAoYWthIGV4dGVuZCB0aGUgcHJlc2V0TWl4aW4pLlxuICovXG5leHBvcnQgY2xhc3MgQXBwbGllZFByZXNldENvbnRleHRDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBhcHBsaWVkUHJlc2V0TmFtZSA9ICdnbG9iYWwnO1xuICBwcml2YXRlIGFjdGl2ZUdsb2JhbFByZXNldE5hbWUgPSAnZGVmYXVsdCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBob3N0OiBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0ICYgTXRlRWxlbWVudCxcbiAgICBwcml2YXRlIGNhbGxiYWNrPzogKGNvbnRleHQ6IEFwcGxpZWRQcmVzZXRDb250ZXh0KSA9PiB2b2lkXG4gICkge1xuICAgIHRoaXMuaG9zdC5hZGRDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgfVxuXG4gIGhvc3RDb25uZWN0ZWQoKSB7XG4gICAgdGhpcy5ob3N0LnN1YnMucHVzaChcbiAgICAgIGdsb2JhbFByZXNldE5hbWUkLnN1YnNjcmliZSgoZ2xvYmFsUHJlc2V0TmFtZSkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZUdsb2JhbFByZXNldE5hbWUgPSBnbG9iYWxQcmVzZXROYW1lO1xuICAgICAgICB0aGlzLnVwZGF0ZUFwcGxpZWRQcmVzZXRDb250ZXh0KCk7XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5leGVjQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGhvc3RVcGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVBcHBsaWVkUHJlc2V0Q29udGV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBleGVjQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5jYWxsYmFjaz8uKHtcbiAgICAgIHByZXNldE5hbWU6IHRoaXMuYXBwbGllZFByZXNldE5hbWUsXG4gICAgfSBhcyBBcHBsaWVkUHJlc2V0Q29udGV4dCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUFwcGxpZWRQcmVzZXRDb250ZXh0KCkge1xuICAgIGxldCB1cGRhdGVkID0gZmFsc2U7XG4gICAgY29uc3QgbmV3UHJlc2V0TmFtZSA9ICh0aGlzLmhvc3QgYXMgYW55KS5hcHBsaWVkUHJlc2V0ID8/IHRoaXMuYWN0aXZlR2xvYmFsUHJlc2V0TmFtZTtcbiAgICBpZiAobmV3UHJlc2V0TmFtZSAhPT0gdGhpcy5hcHBsaWVkUHJlc2V0TmFtZSkge1xuICAgICAgdGhpcy5hcHBsaWVkUHJlc2V0TmFtZSA9IG5ld1ByZXNldE5hbWU7XG4gICAgICB1cGRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgIHRoaXMuZXhlY0NhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVByZXNldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGllZFByZXNldE5hbWU7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IExpdEVsZW1lbnQsIFByb3BlcnR5VmFsdWVNYXAsIFJlYWN0aXZlRWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBpc1NzciB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbnR5cGUgVXBkYXRlSGFuZGxlciA9IChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVNYXA8YW55PikgPT4gdm9pZDtcblxuaW50ZXJmYWNlIE9uVXBkYXRlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBJZiB0cnVlLCB3aWxsIG9ubHkgc3RhcnQgd2F0Y2hpbmcgYWZ0ZXIgdGhlIGluaXRpYWwgdXBkYXRlL3JlbmRlclxuICAgKi9cbiAgd2FpdFVudGlsRmlyc3RVcGRhdGU/OiBib29sZWFuO1xuXG4gIC8qKiBEZXRlcm1pbmVzIHdoZXJlIHRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkLiBEZWZhdWx0cyB0byBgY2xpZW50YC4gKi9cbiAgb24/OiAnY2xpZW50JyB8ICdzc3InIHwgJ2JvdGgnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25VcGRhdGUocHJvcE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgb3B0aW9ucz86IE9uVXBkYXRlT3B0aW9ucykge1xuICBjb25zdCByZXNvbHZlZE9wdGlvbnM6IFJlcXVpcmVkPE9uVXBkYXRlT3B0aW9ucz4gPSB7XG4gICAgd2FpdFVudGlsRmlyc3RVcGRhdGU6IGZhbHNlLFxuICAgIG9uOiAnY2xpZW50JyxcbiAgICAuLi5vcHRpb25zLFxuICB9O1xuICByZXR1cm4gPEVsZW1DbGFzcyBleHRlbmRzIExpdEVsZW1lbnQ+KHByb3RvOiBFbGVtQ2xhc3MsIGRlY29yYXRlZEZuTmFtZTogUHJvcGVydHlLZXkpID0+IHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0tIHVwZGF0ZSBpcyBhIHByb3RlY3RlZCBwcm9wZXJ0eVxuICAgIGNvbnN0IHsgd2lsbFVwZGF0ZSB9ID0gcHJvdG87XG4gICAgY29uc3QgX3Byb3BOYW1lcyA9IEFycmF5LmlzQXJyYXkocHJvcE5hbWVzKSA/IHByb3BOYW1lcyA6IFtwcm9wTmFtZXNdO1xuICAgIGNvbnN0IHByb3BOYW1lS2V5cyA9IF9wcm9wTmFtZXMgYXMgKGtleW9mIEVsZW1DbGFzcylbXTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0tIHVwZGF0ZSBpcyBhIHByb3RlY3RlZCBwcm9wZXJ0eVxuICAgIHByb3RvLndpbGxVcGRhdGUgPSBmdW5jdGlvbiAodGhpczogRWxlbUNsYXNzLCBjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVNYXA8YW55Pikge1xuICAgICAgaWYgKHByb3BOYW1lS2V5cy5zb21lKChrZXkpID0+IGNoYW5nZWRQcm9wcy5oYXMoa2V5KSkpIHtcbiAgICAgICAgaWYgKCFyZXNvbHZlZE9wdGlvbnMud2FpdFVudGlsRmlyc3RVcGRhdGUgfHwgKHRoaXMgYXMgdW5rbm93biBhcyBMaXRFbGVtZW50KS5oYXNVcGRhdGVkKSB7XG4gICAgICAgICAgY29uc3Qgc3NyID0gaXNTc3IoKTtcbiAgICAgICAgICBpZiAocmVzb2x2ZWRPcHRpb25zLm9uID09PSAnY2xpZW50JyAmJiAhc3NyKSB7XG4gICAgICAgICAgICAodGhpc1tkZWNvcmF0ZWRGbk5hbWVdIGFzIHVua25vd24gYXMgVXBkYXRlSGFuZGxlcikoY2hhbmdlZFByb3BzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc29sdmVkT3B0aW9ucy5vbiA9PT0gJ3NzcicgJiYgc3NyKSB7XG4gICAgICAgICAgICAodGhpc1tkZWNvcmF0ZWRGbk5hbWVdIGFzIHVua25vd24gYXMgVXBkYXRlSGFuZGxlcikoY2hhbmdlZFByb3BzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc29sdmVkT3B0aW9ucy5vbiA9PT0gJ2JvdGgnKSB7XG4gICAgICAgICAgICAodGhpc1tkZWNvcmF0ZWRGbk5hbWVdIGFzIHVua25vd24gYXMgVXBkYXRlSGFuZGxlcikoY2hhbmdlZFByb3BzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHdpbGxVcGRhdGUuY2FsbCh0aGlzLCBjaGFuZ2VkUHJvcHMpO1xuICAgIH07XG4gIH07XG59XG4iLCAiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9iYXNlLmpzJztcbi8qKlxuICogSXRlbXMgaW4gdGhpcyBmaWxlIGFyZSBtb2RpZmljYXRpb25zIG9mIG9mIHRoZSBkZWNvcmF0b3JzIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9ibG9iL21haW4vcGFja2FnZXMvcmVhY3RpdmUtZWxlbWVudC9zcmMvZGVjb3JhdG9ycy9jdXN0b20tZWxlbWVudC50c1xuICpcbiAqIFdlJ3ZlIGFkZGVkIGNoZWNrcyB0byBwcmV2ZW50IHJlLXJlZ2lzdHJhdGlvbnMgZnJvbSB0aHJvd2luZyBoYXJkIGVycm9ycy5cbiAqL1xuXG4vKipcbiAqIEFsbG93IGZvciBjdXN0b20gZWxlbWVudCBjbGFzc2VzIHdpdGggcHJpdmF0ZSBjb25zdHJ1Y3RvcnNcbiAqL1xudHlwZSBDdXN0b21FbGVtZW50Q2xhc3MgPSBPbWl0PHR5cGVvZiBIVE1MRWxlbWVudCwgJ25ldyc+O1xuXG5leHBvcnQgdHlwZSBDdXN0b21FbGVtZW50RGVjb3JhdG9yID0ge1xuICAvLyBsZWdhY3lcbiAgKGNsczogQ3VzdG9tRWxlbWVudENsYXNzKTogdm9pZDtcblxuICAvLyBzdGFuZGFyZFxuICAodGFyZ2V0OiBDdXN0b21FbGVtZW50Q2xhc3MsIGNvbnRleHQ6IENsYXNzRGVjb3JhdG9yQ29udGV4dDxDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD4+KTogdm9pZDtcbn07XG5cbi8qKlxuICogQ2xhc3MgZGVjb3JhdG9yIGZhY3RvcnkgdGhhdCBkZWZpbmVzIHRoZSBkZWNvcmF0ZWQgY2xhc3MgYXMgYSBjdXN0b20gZWxlbWVudC5cbiAqXG4gKiBgYGBqc1xuICogQGN1c3RvbUVsZW1lbnQoJ215LWVsZW1lbnQnKVxuICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBgO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqIEBwYXJhbSB0YWdOYW1lIFRoZSB0YWcgbmFtZSBvZiB0aGUgY3VzdG9tIGVsZW1lbnQgdG8gZGVmaW5lLlxuICovXG5leHBvcnQgY29uc3QgZGVmaW5lRWxlbWVudCA9XG4gICh0YWdOYW1lOiBzdHJpbmcpOiBDdXN0b21FbGVtZW50RGVjb3JhdG9yID0+XG4gIChcbiAgICBjbGFzc09yVGFyZ2V0OiBDdXN0b21FbGVtZW50Q2xhc3MgfCBDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD4sXG4gICAgY29udGV4dD86IENsYXNzRGVjb3JhdG9yQ29udGV4dDxDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD4+XG4gICkgPT4ge1xuICAgIGlmIChjb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIoKCkgPT4ge1xuICAgICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldD8uKHRhZ05hbWUpKSB7XG4gICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXNzT3JUYXJnZXQgYXMgQ3VzdG9tRWxlbWVudENvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0Py4odGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXNzT3JUYXJnZXQgYXMgQ3VzdG9tRWxlbWVudENvbnN0cnVjdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0KFtkZW5zaXR5PWNvbXBhY3RdKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHhzKTstLW10ZS1zcGFjZS14czp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14cyk7LS1tdGUtc3BhY2Utc206dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3Qtc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LW1kKTstLW10ZS1zcGFjZS1sZzp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1sZyk7LS1tdGUtc3BhY2UteGw6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eGwpOy0tbXRlLXNwYWNlLXh4eGw6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHh4bCl9Omhvc3QoW2RlbnNpdHk9Y29tZnldKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2UtY29tZnktc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1jb21meS1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1jb21meS14eHhsKX06aG9zdChbZGVuc2l0eT1yb29teV0pey0tbXRlLXNwYWNlLXh4czp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHhzKTstLW10ZS1zcGFjZS14czp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHMpOy0tbXRlLXNwYWNlLXNtOnZhcigtLW10ZS1zcGFjZS1yb29teS1zbSk7LS1tdGUtc3BhY2UtbWQ6dmFyKC0tbXRlLXNwYWNlLXJvb215LW1kKTstLW10ZS1zcGFjZS1sZzp2YXIoLS1tdGUtc3BhY2Utcm9vbXktbGcpOy0tbXRlLXNwYWNlLXhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14bCk7LS1tdGUtc3BhY2UteHhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14eGwpOy0tbXRlLXNwYWNlLXh4eGw6dmFyKC0tbXRlLXNwYWNlLXJvb215LXh4eGwpfWA7IiwgImltcG9ydCB7IExpdEVsZW1lbnQsIFByb3BlcnR5VmFsdWVzIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi8nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEaXNhYmxlZEludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGlzIGNvbXBvbmVudFxuICAgKiBAYXR0ciBkaXNhYmxlZFxuICAgKi9cbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBEaXNhYmxlZE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBEaXNhYmxlZEVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBhdHRyIGRpc2FibGVkXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLy8gQmVjYXVzZSBgYXJpYURpc2FibGVkYCBleGlzdHMgYXMgYSBzdHJpbmcgb24gTGl0RWxlbWVudCB3ZSBjYW5ub3QgZGVjbGFyZSB0aGlzIGEgcHJvcGVydHkgaGVyZVxuICAgIHByb3RlY3RlZCB3aWxsVXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXM8YW55Pik6IHZvaWQge1xuICAgICAgc3VwZXIud2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAoX2NoYW5nZWRQcm9wZXJ0aWVzLmhhcygnZGlzYWJsZWQnKSkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgYCR7dGhpcy5kaXNhYmxlZH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBEaXNhYmxlZEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8RGlzYWJsZWRJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IHByZXNldFByb3BlcnR5IH0gZnJvbSAnLi4vcHJlc2V0cy9wcmVzZXQuZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW52ZXJzZUludGVyZmFjZSB7XG4gIC8qKiBSZW5kZXJzIHRoaXMgY29tcG9uZW50IHdpdGggaW52ZXJzZSB0aGVtaW5nICovXG4gIGludmVyc2U6IGJvb2xlYW47XG5cbiAgLyoqIFNwZWNpYWwgb3B0aW9uIHRvIG92ZXJyaWRlIGludmVyc2Ugd2hlbiBpdCBpcyBzZXQgYnkgYSBwcmVzZXQgKi9cbiAgd2l0aG91dEludmVyc2U6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBJbnZlcnNlTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPExpdEVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIEludmVyc2VFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqIFJlbmRlcnMgdGhpcyBjb21wb25lbnQgd2l0aCBpbnZlcnNlIHRoZW1pbmcgKi9cbiAgICBAcHJlc2V0UHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGludmVyc2UgPSBmYWxzZTtcblxuICAgIC8qKiBTcGVjaWFsIG9wdGlvbiB0byBvdmVycmlkZSBpbnZlcnNlIHdoZW4gaXQgaXMgc2V0IGJ5IGEgcHJlc2V0ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRob3V0SW52ZXJzZSA9IGZhbHNlO1xuICB9XG4gIHJldHVybiBJbnZlcnNlRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxJbnZlcnNlSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdChbaW52ZXJzZV06bm90KFt3aXRob3V0SW52ZXJzZV0pKXstLW10ZS1zdXJmYWNlLTE6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS0xLXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtc3VyZmFjZS0yOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tbXRlLXN1cmZhY2UtMi1yZ2I6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpOy0tbXRlLXN1cmZhY2UtMzp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlKTstLW10ZS1zdXJmYWNlLTMtcmdiOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UtcmdiKTstLW10ZS1zdXJmYWNlLTQ6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS00LXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtaW5rLTE6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMS1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTI6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMi1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTM6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMy1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTQ6dmFyKC0tbXRlLWJsYWNrKTstLW10ZS1pbmstNC1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1tdGUtaW5rLTU6dmFyKC0tbXRlLWJsYWNrKTstLW10ZS1pbmstNS1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1tdGUtYm9yZGVyLTE6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMS1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtYm9yZGVyLTI6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMi1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtYm9yZGVyLTM6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMy1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtZGlzYWJsZWQtMTp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0xKTstLW10ZS1kaXNhYmxlZC0xLXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0xLXJnYik7LS1tdGUtZGlzYWJsZWQtMjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0yKTstLW10ZS1kaXNhYmxlZC0yLXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0yKTstLW10ZS1kaXNhYmxlZC0zOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMpOy0tbXRlLWRpc2FibGVkLTMtcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMtcmdiKTstLW10ZS1kaXNhYmxlZC00OnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMpOy0tbXRlLWRpc2FibGVkLTQtcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTEtZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMS1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0yLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1pdC1zdXJmYWNlLTMtZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0zLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTMtYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMy1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1saWdodDp2YXIoLS1tdGUtd2hpdGUpOy0tbXRlLWxpZ2h0LXJnYjp2YXIoLS1tdGUtd2hpdGUtcmdiKTstLW10ZS1kYXJrOnZhcigtLW10ZS1ibGFjayk7LS1tdGUtZGFyay1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1idXR0b24tZmlsbGVkLWJnOnZhcigtLW10ZS13aGl0ZSk7LS1idXR0b24tZmlsbGVkLWluazp2YXIoLS1tdGUtYmxhY2spOy0tYnV0dG9uLWZpbGxlZC1hY3RpdmUtYmc6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWluazp2YXIoLS1tdGUtd2hpdGUpfWA7IiwgImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBvblVwZGF0ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRGlzYWJsZWRJbnRlcmZhY2UgfSBmcm9tICcuL2Rpc2FibGVkLm1peGluJztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgaXNTc3IgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUYWJJbmRleEludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgdGFiaW5kZXggYXR0cmlidXRlIHZhbHVlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnRcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZ2V0VGFiSW5kZXhBZGFwdGVyKCk6IHN0cmluZztcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHNldCB0aGUgdGFiaW5kZXggYXR0cmlidXRlIG9uIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHNldFRhYkluZGV4QWRhcHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJlbW92ZSB0aGUgdGFiaW5kZXggYXR0cmlidXRlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnRcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCk6IHZvaWQ7XG59XG5cbi8qKlxuICogTWl4aW4gdG8gcHJvcGVybHkgbWFuYWdlIHRoZSB0YWJpbmRleCBpbiBhIG5vbi1pbnRydXNpdmUgd2F5LiBXaGVuIGRpc2FibGVkIGlzIHRydWUsXG4gKiB0aGUgdGFiaW5kZXggd2lsbCBBTFdBWVMgYmUgYC0xYC4gSG93ZXZlciwgYW55IGNoYW5nZXMgdG8gdGFiaW5kZXggd2lsbCBiZSBpbnRlcmNlcHRlZFxuICogYW5kIGNhY2hlZCBpbnRlcm5hbGx5IHVudGlsIGRpc2FibGVkIGlzIGZhbHNlLCB0aGVuIHRhYmluZGV4IHdpbGwgYmUgcmVzdG9yZWQgdG8gdGhlXG4gKiBjYWNoZWQgdmFsdWUsIG9yIHJlbW92ZWQgaWYgdGhhdCBpcyB1bmRlZmluZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBUYWJJbmRleE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50ICYgRGlzYWJsZWRJbnRlcmZhY2U+PihcbiAgc3VwZXJDbGFzczogVCxcbiAgb3B0aW9uczogeyBpbml0aWFsVGFiSW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCB9ID0geyBpbml0aWFsVGFiSW5kZXg6IHVuZGVmaW5lZCB9XG4pID0+IHtcbiAgY2xhc3MgVGFiSW5kZXhFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiAndGFiaW5kZXgnLCB0eXBlOiBOdW1iZXIsIG5vQWNjZXNzb3I6IHRydWUgfSlcbiAgICBwdWJsaWMgb3ZlcnJpZGUgc2V0IHRhYkluZGV4KHRhYkluZGV4OiBudW1iZXIpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIC8vIFdoZW4gc2V0dGluZyB0aGUgdGFiSW5kZXggb24gdGhlIGN1cnJlbnQgZWxlbWVudCB0byBgLTFgIGRpc2FibGVkLCB3ZSB3YW50IHRvIGtlZXAgdHJhY2sgb2Ygd2hhdCB0aGUgdGFiSW5kZXggdmFsdWUgYmVmb3JlIHRoYXQgd2FzXG4gICAgICAgIC8vIGFzIHRoZSBjYWNoZWRUYWJJbmRleC4gVG8gZG8gdGhpcyB3ZSBtdXN0IGlnbm9yZSB0aGUgaW5pdGlhbCBjaGFuZ2UgdG8gYC0xYCBhbmQgdGhlbiBjYWNoZSBhbnkgZnV0dXJlIHZhbHVlcyBiZWZvcmUga2VlcGluZyB0aGVcbiAgICAgICAgLy8gdGFiSW5kZXggYXMgYC0xYCB1bnRpbCBubyBsb25nZXIgZGlzYWJsZWQuIFRoZW4gd2UgY2FuIHJldHVybiB0aGUgdGFiSW5kZXggdG8gd2hhdGV2ZXIgdGhlIGxhc3Qgc2V0IHZhbHVlIHdhcyBmcm9tIHRoZSBjYWNoZWQgaW5kZXguXG4gICAgICAgIGlmICghdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKCctMScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90YWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl90YWJJbmRleH1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIG92ZXJyaWRlIGdldCB0YWJJbmRleCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90YWJJbmRleDtcbiAgICB9XG4gICAgcHJpdmF0ZSBfdGFiSW5kZXggPSBvcHRpb25zPy5pbml0aWFsVGFiSW5kZXg7XG4gICAgcHJpdmF0ZSBfY2FjaGVkVGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gZmFsc2U7XG5cbiAgICBAb25VcGRhdGUoWydkaXNhYmxlZCddLCB7IG9uOiAnYm90aCcgfSlcbiAgICBwcml2YXRlIGhhbmRsZVRhYmluZGV4Q2hhbmdlKGNoYW5nZWRQcm9wcykge1xuICAgICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgaWYgKGNoYW5nZWRQcm9wcy5nZXQoJ2Rpc2FibGVkJykgPT09IGZhbHNlICYmIHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jYWNoZWRUYWJJbmRleCA9IE51bWJlcih0aGlzLmdldFRhYkluZGV4QWRhcHRlcigpKTtcbiAgICAgICAgICB0aGlzLl90YWJJbmRleCA9IC0xO1xuICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKCctMScsIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYW5nZWRQcm9wcy5nZXQoJ2Rpc2FibGVkJykgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5fY2FjaGVkVGFiSW5kZXggIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9jYWNoZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fdGFiSW5kZXggPSB0aGlzLl9jYWNoZWRUYWJJbmRleDtcbiAgICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKGAke3RoaXMuX2NhY2hlZFRhYkluZGV4fWApO1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVUYWJJbmRleEFkYXB0ZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHRhYmluZGV4IGF0dHJpYnV0ZSB2YWx1ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50ICovXG4gICAgZ2V0VGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIH1cblxuICAgIC8qKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gc2V0IHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgb24gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgKi9cbiAgICBzZXRUYWJJbmRleEFkYXB0ZXIodmFsdWU6IHN0cmluZywgc2hvdWxkUHJldmVudFRhYkluZGV4Q2hhbmdlT25TZWxmID0gZmFsc2UpIHtcbiAgICAgIGlmIChzaG91bGRQcmV2ZW50VGFiSW5kZXhDaGFuZ2VPblNlbGYpIHtcbiAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJlbW92ZSB0aGUgdGFiaW5kZXggYXR0cmlidXRlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgKi9cbiAgICByZW1vdmVUYWJJbmRleEFkYXB0ZXIoKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICB3aWxsVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICBzdXBlci53aWxsVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKGlzU3NyKCkgJiYgdGhpcy5fdGFiSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl90YWJJbmRleH1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICAgIGlmICh0aGlzLl90YWJJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKGAke3RoaXMuX3RhYkluZGV4fWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gVGFiSW5kZXhFbGVtZW50IGFzIENvbnN0cnVjdG9yPFRhYkluZGV4SW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQsIFN0eWxlTWFwIH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgc2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE10ZUVsZW1lbnRQYXJ0cyB7XG4gIC8qKiBUaGUgaG9zdCBlbGVtZW50IFwicGFydFwiLiBPdmVycmlkZXMgdGhlIGBzZWAgcHJvcGVydHkgb2YgdGhpcyBlbGVtZW50ICovXG4gIGhvc3Q/OiBTdHlsZU1hcDtcbn1cblxuZXhwb3J0IHR5cGUgU3R5bGVQYXJ0c01hcDxUID0gc3RyaW5nIHwgbnVtYmVyPiA9IHtcbiAgW25hbWU6IHN0cmluZ106IFN0eWxlTWFwPFQ+O1xufTtcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3R5bGVQYXJ0c0ludGVyZmFjZTxTdHlsZVBhcnRzPiB7XG4gIC8qKlxuICAgKiBTdHlsZSBtYXBwaW5ncyB0aGF0IGFyZSBhcHBsaWVkIHRvIGVhY2ggY3NzIHBhcnQgYnkgbmFtZS4gU2V0IHRoZVxuICAgKiBwcm9wZXJ0eSBgaG9zdGAgdG8gYXBwbHkgYSBgU3R5bGVJbmZvYCBvYmplY3QgdG8gdGhlIGVsZW1lbnQgaG9zdCBpdHNlbGYuXG4gICAqL1xuICBzcD86IFN0eWxlUGFydHM7XG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZVBhcnRzTWl4aW4gPSA8U3R5bGVQYXJ0cywgVCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIFN0eWxlUGFydHNFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogU3R5bGUgbWFwcGluZ3MgdGhhdCBhcmUgYXBwbGllZCB0byBlYWNoIGNzcyBwYXJ0IGJ5IG5hbWUuIFNldCB0aGVcbiAgICAgKiBwcm9wZXJ0eSBgaG9zdGAgdG8gYXBwbHkgYSBgU3R5bGVJbmZvYCBvYmplY3QgdG8gdGhlIGVsZW1lbnQgaG9zdCBpdHNlbGYuXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCByZWZsZWN0OiB0cnVlIH0pIHNwOiBTdHlsZVBhcnRzO1xuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgICAgc3VwZXIudXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKTtcblxuICAgICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ3NwJykpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5zcCA/PyAoe30gYXMgU3R5bGVQYXJ0cykpLmZvckVhY2goKFtwYXJ0LCBzdHlsZU1hcF0pID0+IHtcbiAgICAgICAgICAvLyBEb3VibGUgdGhlIGA6aG9zdGAgc2VsZWN0b3IgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgYmV5b25kIG1vc3QgY29tcG9uZW50IGxldmVsIHN0eWxlcyBieSBkZWZhdWx0XG4gICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvckZhY3RvcnkoXG4gICAgICAgICAgICBwYXJ0ID09PSAnaG9zdCdcbiAgICAgICAgICAgICAgPyAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0J1xuICAgICAgICAgICAgICA6IGA6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6OnBhcnQoJHtwYXJ0fSlgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoYHNwLSR7cGFydH1gLCBzZWxlY3Rvciwgc3R5bGVNYXApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gU3R5bGVQYXJ0c0VsZW1lbnQgYXMgQ29uc3RydWN0b3I8U3R5bGVQYXJ0c0ludGVyZmFjZTxTdHlsZVBhcnRzPj4gJiBUO1xufTtcbiIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7cG9zaXRpb246cmVsYXRpdmV9I2FuY2hvcntpbnNldDowO3Bvc2l0aW9uOmFic29sdXRlfWA7IiwgImltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIENsaWNrT3V0c2lkZUNvbnRyb2xsZXIsXG4gIENvbnN0cnVjdG9yLFxuICBFdmVudEVtaXR0ZXIsXG4gIEZvY3VzVHJhcENvbnRyb2xsZXIsXG4gIE10ZUVsZW1lbnQsXG4gIFBvcnRhbEFkYXB0ZXIsXG4gIFBvcnRhbENvbnRyb2xsZXIsXG4gIGRlZmF1bHRQb3J0YWxBZGFwdGVyLFxuICBldmVudEVtaXR0ZXIsXG4gIGlzU3NyLFxufSBmcm9tICcuLic7XG5pbXBvcnQgeyBQcm9wZXJ0eVZhbHVlTWFwIH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3ZlcmxheUludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBvdmVybGF5IHN0YXRlIG9uIHRoZSBvdmVybGF5IG1peGluLiBCeSBkZWZhdWx0IGFsbCBvcHRpb25zIGFyZSBzZXQgdG8gdHJ1ZSBpbml0aWFsbHkuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBzZXRPdmVybGF5T3B0aW9ucyhvcHRpb25zOiB7XG4gICAgd2l0aENsb3NlT25DbGlja091dHNpZGU/OiBib29sZWFuO1xuICAgIHdpdGhDbG9zZU9uRXNjYXBlPzogYm9vbGVhbjtcbiAgICB3aXRoRm9jdXNUcmFwPzogYm9vbGVhbjtcbiAgICB3aXRoUG9ydGFsPzogYm9vbGVhbjtcbiAgICB3aXRoRGltQmFja2Ryb3A/OiBib29sZWFuO1xuICAgIHdpdGhJbmVydEJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICB3aXRoU2Nyb2xsTG9jaz86IGJvb2xlYW47XG4gICAgYW5pbWF0aW9uRHVyYXRpb24/OiBudW1iZXI7XG4gICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG4gICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlPzogYm9vbGVhbjtcbiAgICBmb2N1c1RyYXBUYXJnZXQ/OiBFbGVtZW50O1xuICB9KTogdW5rbm93bjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIG92ZXJsYXkgc2hvdWxkIG9wZW4uIENhbiBhZGQgYSBsaXN0ZW5lciBmb3Igb3V0c2lkZSBjbGlja3MsIHBvcnRhbCBhbiBlbGVtZW50LFxuICAgKiBhbmQgcHJldmVudCB0aGUgYm9keSBmcm9tIHNjcm9sbGluZyB1cG9uIG9wZW4uXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBoYW5kbGVPdmVybGF5T3BlbihvcHRpb25zPzoge1xuICAgIGNsaWNrT3V0c2lkZUVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcbiAgICB3aWxsT3Blbj86ICgpID0+IHZvaWQ7XG4gIH0pOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgYWZ0ZXIgdGhlIG92ZXJsYXkgaGFzIGJlZW4gb3B0aW9uYWxseSBwb3J0YWxlZCBhbmQvb3IgYWxsIGFuaW1hdGlvbnMgaGF2ZSBmaW5pc2hlZC5cbiAgICovXG4gIGhhbmRsZU92ZXJsYXlPcGVuRW5kKCk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBvdmVybGF5IGVsZW1lbnQgc2hvdWxkIGNsb3NlLiBDYW4gc3RvcCBsaXN0ZW5pbmcgZm9yIG91dHNpZGUgY2xpY2tzLCByZWxlYXNlIGEsXG4gICAqIGZvY3VzIHRyYXAsIGFuZCBhbGxvdyB0aGUgYm9keSBlbGVtZW50IHRvIHNjcm9sbCBhZ2Fpbi5cbiAgICovXG4gIGhhbmRsZU92ZXJsYXlDbG9zZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgb3ZlcmxheSBlbGVtZW50IGhhcyBmaW5pc2hlZCBjbG9zaW5nIGFuZC9vciBhbGwgYW5pbWF0aW9ucyBoYXZlIGNvbXBsZXRlZC4gQ2FuXG4gICAqIHJlbW92ZSBhbiBlbGVtZW50IGZyb20gdGhlIHBvcnRhbC5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIGhhbmRsZU92ZXJsYXlDbG9zZUVuZChvcHRpb25zPzogeyByZW1vdmVGcm9tRWxlbWVudD86IEhUTUxFbGVtZW50IH0pOiBQcm9taXNlPHZvaWQ+O1xuXG4gIG9wZW4oKTogUHJvbWlzZTx2b2lkPjtcblxuICBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBUaGUgdGFiIGluZGV4IGZvciB0aGlzIGVsZW1lbnRcbiAgICovXG4gIHRhYmluZGV4OiBudW1iZXI7XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaXMgaW5pdGlhbGx5IG9wZW5lZCAqL1xuICBfb25PcGVuOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEVtaXR0ZWQgYWZ0ZXIgdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBvcGVuaW5nICovXG4gIF9vbk9wZW5FbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgY2xvc2luZyAqL1xuICBfb25DbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBjbG9zaW5nICovXG4gIF9vbkNsb3NlRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgcG9ydGFsQWRhcHRlcjogUG9ydGFsQWRhcHRlcjtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBUaGUgb3BlbmVkIHN0YXRlIG9mIHRoZSBvdmVybGF5IHJlZ2FyZGxlc3Mgb2YgYW5pbWF0aW9uc1xuICAgKi9cbiAgb3BlbmVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEluZGljYXRlcyB0aGUgb3ZlcmxheSBoYXMgYmVlbiBwb3J0YWxlZCBhbmQgcmVhZHkgdG8gYW5pbWF0ZVxuICAgKi9cbiAgcmVhZHlGb3JBbmltYXRpb246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogSW5kaWNhdGVzIHRoZSBvdmVybGF5IGhhcyBiZWVuIGZ1bGx5IGFuaW1hdGVkIG9wZW5cbiAgICovXG4gIG9wZW5lZEZ1bGw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBPdmVybGF5TWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIE92ZXJsYXlFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqIFRoZSB0YWIgaW5kZXggb2YgdGhpcyBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiAndGFiaW5kZXgnLCB0eXBlOiBOdW1iZXIgfSkgdGFiaW5kZXggPSAtMTtcblxuICAgIC8qKlxuICAgICAqIEFkYXB0ZXIgZm9yIHBvcnRhbCBET00gb3BlcmF0aW9uIHRoYXQgY2FuIGJlIHN1cHBsZW1lbnRlZCBmb3IgZXh0ZXJuYWwtZnJhbWV3b3JrIGludGVncmF0aW9ucy5cbiAgICAgKiBOb3RhYmx5LWxldmVyYWdlZCBieSBvdmVybGF5cyBpbiBvdXIgZ2VuZXJhdGVkIHJlYWN0IHdyYXBwZXJzLlxuICAgICAqXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSgpIHBvcnRhbEFkYXB0ZXI6IFBvcnRhbEFkYXB0ZXIgPSBkZWZhdWx0UG9ydGFsQWRhcHRlcjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBvcGVuZWQgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uT3BlbjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIEVtaXR0ZWQgYWZ0ZXIgdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBvcGVuaW5nICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbk9wZW5FbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBjbG9zZWQgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBjbG9zaW5nICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkNsb3NlRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBlbGVtZW50IHNob3VsZCB1c2UgYSBmb2N1cyB0cmFwIG9yIG5vdCAqL1xuICAgIHByaXZhdGUgX3dpdGhGb2N1c1RyYXAgPSB0cnVlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgZWxlbWVudCBzaG91bGQgY2xvc2Ugd2hlbiBhIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgdGhlIGVsZW1lbnQgKi9cbiAgICBwcml2YXRlIF9jbG9zZU9uQ2xpY2tPdXRzaWRlID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBjbG9zZSB3aGVuIHRoZSBlc2NhcGUgYnV0dG9uIGlzIHByZXNzZWQgKi9cbiAgICBwcml2YXRlIF9jbG9zZU9uRXNjYXBlID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IHNob3VsZCB1c2UgYSBwb3J0YWwgb3Igbm90ICovXG4gICAgcHJpdmF0ZSBfd2l0aFBvcnRhbCA9IHRydWU7XG5cbiAgICAvKiogV2V0aGVyIHRoZSB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGNsaWNrIGJlaGluZCB0aGUgYmFja2Ryb3Agb3Igbm90ICovXG4gICAgcHJpdmF0ZSBfd2l0aEluZXJ0QmFja2Ryb3AgPSBmYWxzZTtcblxuICAgIC8qKiBXZXRoZXIgdGhlIG92ZXJsYXkncyBiYWNrZHJvcCBzaG91bGQgcmVuZGVyIGRpbW1lZCAqL1xuICAgIHByaXZhdGUgX3dpdGhEaW1CYWNrZHJvcCA9IGZhbHNlO1xuXG4gICAgLyoqIFdldGhlciBvciBub3QgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlLWFwcGVuZGVkIHRvIGl0J3Mgb3JpZ2luIHBhcmVudCBlbGVtZW50IG9uIGNsb3NlIF9pZl8gcG9ydGFsZWQuICovXG4gICAgcHJpdmF0ZSBfcmV0dXJuVG9PcmlnaW5PbkNsb3NlID0gZmFsc2U7XG5cbiAgICAvKiogT3B0aW9uYWwgYmFja2Ryb3AgdGltaW5nLiBJbXBvcnRhbnQgcGFydGljdWxhcmx5IGZvciBzbW9vdGggY2xvc2VzIHdpdGggYSB2aXNpYmxlIGJhY2tkcm9wICovXG4gICAgcHJpdmF0ZSBfYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBzaG91bGQgcHJldmVudCBzY3JvbGxpbmcgb24gdGhlIGJvZHkgKi9cbiAgICBwcml2YXRlIF93aXRoU2Nyb2xsTG9jayA9IHRydWU7XG5cbiAgICBwcm90ZWN0ZWQgZm9jdXNUcmFwQ29udHJvbGxlciA9IG5ldyBGb2N1c1RyYXBDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgcHJvdGVjdGVkIGNsaWNrT3V0c2lkZUNvbnRyb2xsZXIgPSBuZXcgQ2xpY2tPdXRzaWRlQ29udHJvbGxlcih0aGlzLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3dpdGhQb3J0YWwpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZU9uQ2xpY2tPdXRzaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwcm90ZWN0ZWQgcG9ydGFsQ29udHJvbGxlciA9IG5ldyBQb3J0YWxDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgcGFyZW50IGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdGlhbFBhcmVudDogRWxlbWVudCB8IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0byBkZXRlY3QgY2xpY2tzIG91dHNpZGUgb2YgdG8gY2xvc2UgdGhlIG92ZXJsYXkgZWxlbWVudC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG5cbiAgICBwcml2YXRlIF9vcmlnaW5QYXJlbnQ/OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIF9mb2N1c1RyYXBUYXJnZXQ/OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQgPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqIFRoZSBvcGVuZWQgc3RhdGUgb2YgdGhlIG92ZXJsYXkgcmVnYXJkbGVzcyBvZiBhbmltYXRpb25zXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBvcGVuZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBJbmRpY2F0ZXMgdGhlIG92ZXJsYXkgaGFzIGJlZW4gcG9ydGFsZWQgYW5kIHJlYWR5IHRvIGFuaW1hdGVcbiAgICAgKi9cbiAgICBAc3RhdGUoKVxuICAgIHNldCByZWFkeUZvckFuaW1hdGlvbihyZWFkeUZvckFuaW1hdGlvbjogYm9vbGVhbikge1xuICAgICAgdGhpcy5fcmVhZHlGb3JBbmltYXRpb24gPSByZWFkeUZvckFuaW1hdGlvbjtcbiAgICB9XG4gICAgZ2V0IHJlYWR5Rm9yQW5pbWF0aW9uKCkge1xuICAgICAgLy8gRHVyaW5nIFNTUiByZXR1cm4gdHJ1ZSBpbiBjYXNlIHNvbWV0aGluZyBuZWVkcyB0byBiZSBvcGVuZWQgaW5pdGlhbGx5LlxuICAgICAgcmV0dXJuIGlzU3NyKCkgPyB0cnVlIDogdGhpcy5fcmVhZHlGb3JBbmltYXRpb247XG4gICAgfVxuICAgIHByaXZhdGUgX3JlYWR5Rm9yQW5pbWF0aW9uID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogVGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgb3ZlcmxheSByZWdhcmRsZXNzIG9mIGFuaW1hdGlvbnMuIFRoaXMgaXMgcmVmbGVjdGVkIGFuZCB1c2VkIGJ5XG4gICAgICogc29tZSBvdmVybGF5cyB0byByZXN0cmljdCB0aGVpciBzaXplIHdoaWxlIGhpZGRlbi4gKHNpbmNlIGRpc3BsYXk6IG5vbmUgYnJlYWtzIGFuaW1hdGlvbnMpXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBvcGVuZWRGdWxsID0gZmFsc2U7XG5cbiAgICBzZXRPdmVybGF5T3B0aW9ucyhvcHRpb25zOiB7XG4gICAgICB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZT86IGJvb2xlYW47XG4gICAgICB3aXRoQ2xvc2VPbkVzY2FwZT86IGJvb2xlYW47XG4gICAgICB3aXRoRm9jdXNUcmFwPzogYm9vbGVhbjtcbiAgICAgIHdpdGhQb3J0YWw/OiBib29sZWFuO1xuICAgICAgd2l0aEluZXJ0QmFja2Ryb3A/OiBib29sZWFuO1xuICAgICAgd2l0aERpbUJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICAgIHdpdGhTY3JvbGxMb2NrPzogYm9vbGVhbjtcbiAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuICAgICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlPzogYm9vbGVhbjtcbiAgICAgIGZvY3VzVHJhcFRhcmdldD86IEVsZW1lbnQ7XG4gICAgfSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB3aXRoRm9jdXNUcmFwLFxuICAgICAgICB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZSxcbiAgICAgICAgd2l0aENsb3NlT25Fc2NhcGUsXG4gICAgICAgIHdpdGhQb3J0YWwsXG4gICAgICAgIHdpdGhTY3JvbGxMb2NrLFxuICAgICAgICB3aXRoSW5lcnRCYWNrZHJvcCxcbiAgICAgICAgd2l0aERpbUJhY2tkcm9wLFxuICAgICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlLFxuICAgICAgICBmb2N1c1RyYXBUYXJnZXQsXG4gICAgICB9ID0gb3B0aW9ucyA/PyB7fTtcblxuICAgICAgdGhpcy5fd2l0aEZvY3VzVHJhcCA9IHdpdGhGb2N1c1RyYXAgPz8gdGhpcy5fd2l0aEZvY3VzVHJhcDtcbiAgICAgIHRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUgPSB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZSA/PyB0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlO1xuICAgICAgdGhpcy5fd2l0aFNjcm9sbExvY2sgPSB3aXRoU2Nyb2xsTG9jayA/PyB0aGlzLl93aXRoU2Nyb2xsTG9jaztcbiAgICAgIHRoaXMuX3dpdGhQb3J0YWwgPSB3aXRoUG9ydGFsID8/IHRoaXMuX3dpdGhQb3J0YWw7XG4gICAgICB0aGlzLl93aXRoSW5lcnRCYWNrZHJvcCA9XG4gICAgICAgIHdpdGhJbmVydEJhY2tkcm9wID8/ICF0aGlzLl93aXRoRm9jdXNUcmFwID8/IHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wO1xuICAgICAgdGhpcy5fd2l0aERpbUJhY2tkcm9wID0gd2l0aERpbUJhY2tkcm9wID8/IHRoaXMuX3dpdGhEaW1CYWNrZHJvcDtcbiAgICAgIHRoaXMuX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID1cbiAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPz8gdGhpcy5fYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb247XG4gICAgICB0aGlzLl9yZXR1cm5Ub09yaWdpbk9uQ2xvc2UgPSByZXR1cm5Ub09yaWdpbk9uQ2xvc2UgPz8gdGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlO1xuICAgICAgdGhpcy5fZm9jdXNUcmFwVGFyZ2V0ID0gZm9jdXNUcmFwVGFyZ2V0ID8/IHRoaXMuX2ZvY3VzVHJhcFRhcmdldDtcblxuICAgICAgaWYgKHdpdGhDbG9zZU9uRXNjYXBlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fY2xvc2VPbkVzY2FwZSAhPT0gd2l0aENsb3NlT25Fc2NhcGUpIHtcbiAgICAgICAgaWYgKHdpdGhDbG9zZU9uRXNjYXBlID09PSB0cnVlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbG9zZU9uRXNjYXBlID0gd2l0aENsb3NlT25Fc2NhcGUgPz8gdGhpcy5fY2xvc2VPbkVzY2FwZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpdGhGb2N1c1RyYXAgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAod2l0aEZvY3VzVHJhcCA9PT0gdHJ1ZSAmJiB0aGlzLnRhYmluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gLTE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlT3ZlcmxheSgpO1xuICAgIH1cblxuICAgIGhhbmRsZU92ZXJsYXlPcGVuKG9wdGlvbnM/OiB7XG4gICAgICBjbGlja091dHNpZGVFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG4gICAgICB3aWxsT3Blbj86ICgpID0+IHZvaWQ7XG4gICAgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gSWdub3JlIGlmIGFscmVhZHkgb3BlblxuICAgICAgaWYgKHRoaXMub3BlbmVkIHx8IHRoaXMub3BlbmVkRnVsbCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgICBjb25zdCB7IGNsaWNrT3V0c2lkZUVsZW1lbnQsIHdpbGxPcGVuIH0gPSBvcHRpb25zID8/IHt9O1xuICAgICAgd2lsbE9wZW4/LigpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQgPSBjbGlja091dHNpZGVFbGVtZW50IHx8IHRoaXM7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5saXN0ZW5Gb3JDbGlja3NPdXRzaWRlT2YodGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCk7XG4gICAgICAgIGlmICh0aGlzLl93aXRoUG9ydGFsKSB7XG4gICAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyXG4gICAgICAgICAgICAuYXBwZW5kVG9TdGFjayh0aGlzLCB7XG4gICAgICAgICAgICAgIHdpdGhEaW1CYWNrZHJvcDogdGhpcy5fd2l0aERpbUJhY2tkcm9wLFxuICAgICAgICAgICAgICB3aXRoSW5lcnRCYWNrZHJvcDogdGhpcy5fd2l0aEluZXJ0QmFja2Ryb3AsXG4gICAgICAgICAgICAgIHdpdGhTY3JvbGxMb2NrOiB0aGlzLl93aXRoU2Nyb2xsTG9jayxcbiAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXI6IHRoaXMuaGFuZGxlQ2xvc2VPbkNsaWNrT3V0c2lkZSxcbiAgICAgICAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb246IHRoaXMuX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICAgICAgICBwb3J0YWxBZGFwdGVyOiB0aGlzLnBvcnRhbEFkYXB0ZXIsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAvLyBXYWl0IGZvciBhcHBlbmQgdG8gY29tcGxldGUgYmVmb3JlIGFuaW1hdGluZ1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5Rm9yQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBBZnRlciBhbmltYXRpb24gYmVnaW5zIHJlc29sdmVcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fb25PcGVuLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5fb3JpZ2luUGFyZW50ICYmXG4gICAgICAgICAgICB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSAmJlxuICAgICAgICAgICAgdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkgIT09IHRoaXMuX29yaWdpblBhcmVudFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIHRoaXMuX29yaWdpblBhcmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFdhaXQgZm9yIGFwcGVuZCB0byBjb21wbGV0ZSBiZWZvcmUgYW5pbWF0aW5nXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Rm9yQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIEFmdGVyIGFuaW1hdGlvbiBiZWdpbnMgcmVzb2x2ZVxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fb25PcGVuLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMjApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVPdmVybGF5T3BlbkVuZCgpIHtcbiAgICAgIC8vIENhbmNlbCBpZiBjbG9zZWQgYmVmb3JlIG9wZW4gZW5kZWRcbiAgICAgIGlmICghdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWRGdWxsID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLl93aXRoRm9jdXNUcmFwKSB7XG4gICAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci50cmFwRm9jdXModGhpcy5fZm9jdXNUcmFwVGFyZ2V0LCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29uT3BlbkVuZC5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlT3ZlcmxheUNsb3NlKCkge1xuICAgICAgLy8gSWdub3JlIGlmIGFscmVhZHkgY2xvc2VkXG4gICAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9vbkNsb3NlLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5yZWxlYXNlRm9jdXModHJ1ZSk7XG4gICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIuaGlkZUJhY2tkcm9wKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlT3ZlcmxheUNsb3NlRW5kKG9wdGlvbnM/OiB7IHJlbW92ZUZyb21FbGVtZW50PzogSFRNTEVsZW1lbnQgfSkge1xuICAgICAgLy8gQ2FuY2VsIGlmIG9wZW5lZCBiZWZvcmUgY2xvc2UgZW5kZWRcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZEZ1bGwgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVhZHlGb3JBbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5yZW1vdmVGcm9tU3RhY2sob3B0aW9ucz8ucmVtb3ZlRnJvbUVsZW1lbnQgfHwgdGhpcyk7XG4gICAgICBpZiAodGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlKSB7XG4gICAgICAgIGlmICh0aGlzLl9vcmlnaW5QYXJlbnQgJiYgdGhpcy5fb3JpZ2luUGFyZW50ICE9PSB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSkge1xuICAgICAgICAgIHRoaXMucG9ydGFsQWRhcHRlcih0aGlzLCB0aGlzLl9vcmlnaW5QYXJlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9vbkNsb3NlRW5kLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZU92ZXJsYXlLZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnRFbGVtZW50Py5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheS13cmFwcGVyJylcbiAgICAgICAgPyB0aGlzLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnRcbiAgICAgICAgOiB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGFyZW50IGVsZW1lbnQgdGhpcyBvdmVybGF5IHdpbGwgYmUgcmVhdHRhY2hlZCB0byBlaXRoZXI6XG4gICAgICogLSBXaGVuIGNvbmZpZ3VyZWQgdG8gZG8gc28gb24gY2xvc2VcbiAgICAgKiAtIFdoZW4gXCJwb3J0YWxpbmdcIiBpcyBkaXNhYmxlZFxuICAgICAqL1xuICAgIHNldE9yaWdpblBhcmVudChuZXdPcmlnaW46IEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG4gICAgICBpZiAoY3VycmVudFBhcmVudEVsZW1lbnQgPT09IHRoaXMuX29yaWdpblBhcmVudCkge1xuICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgbmV3T3JpZ2luKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29yaWdpblBhcmVudCA9IG5ld09yaWdpbjtcbiAgICB9XG5cbiAgICAvKiogVXBkYXRlcyB2YXJpb3VzIGJlaGF2aW9ycyB0byBhcHBseSB0aGUgbGF0ZXN0IG92ZXJsYXkgb3B0aW9ucyAqL1xuICAgIHVwZGF0ZU92ZXJsYXkoKSB7XG4gICAgICAvLyBVcGRhdGUgYmFja2Ryb3AgaW5lcnRuZXNzXG4gICAgICBpZiAodGhpcy5fd2l0aEluZXJ0QmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNldEJhY2tkcm9wSW5lcnRuZXNzKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNldEJhY2tkcm9wSW5lcnRuZXNzKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSBjbGljayBvdXRzaWRlIGNvbnRyb2xsZXJcbiAgICAgIGlmICh0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlICYmICF0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuaXNMaXN0ZW5pbmcoKSkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIubGlzdGVuRm9yQ2xpY2tzT3V0c2lkZU9mKHRoaXMpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZSAmJiB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuaXNMaXN0ZW5pbmcoKSkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuc3RvcExpc3RlbmluZygpO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIGZvY3VzIHRyYXAgY29udHJvbGxlclxuICAgICAgaWYgKHRoaXMuX3dpdGhGb2N1c1RyYXAgJiYgdGhpcy5vcGVuZWQgJiYgIXRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5pc1RyYXBwaW5nRm9jdXMoKSkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIudHJhcEZvY3VzKHRoaXMuX2ZvY3VzVHJhcFRhcmdldCwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl93aXRoRm9jdXNUcmFwICYmIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5pc1RyYXBwaW5nRm9jdXMoKSkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIucmVsZWFzZUZvY3VzKHRydWUpO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIGJhY2tkcm9wIGNvbnRyb2xsZXJcbiAgICAgIGlmICh0aGlzLl93aXRoRGltQmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNob3dCYWNrZHJvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLmhpZGVCYWNrZHJvcCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZSkge1xuICAgICAgICBpZiAodGhpcy5fb3JpZ2luUGFyZW50ICYmIHRoaXMuX29yaWdpblBhcmVudCAhPT0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgdGhpcy5fb3JpZ2luUGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIG9wZW4oKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09wZW4gbWV0aG9kIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbG9zZSBtZXRob2Qgbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55KSB7XG4gICAgICBzdXBlcihhcmdzKTtcbiAgICAgIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24gPSB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChcbiAgICAgIGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlTWFwPGFueT4gfCBNYXA8UHJvcGVydHlLZXksIHVua25vd24+XG4gICAgKTogdm9pZCB7XG4gICAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgdGhpcy5fb3JpZ2luUGFyZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVDbG9zZU9uQ2xpY2tPdXRzaWRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgIGlmICh0aGlzLl9jbG9zZU9uRXNjYXBlKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBldmVudCBsaXN0ZW5lciBpbiB0aGUgZXZlbnQgdGhlIG92ZXJsYXkgZWxlbWVudCB3YXMgcG9ydGFsZWQuXG4gICAgICBpZiAodGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIubGlzdGVuRm9yQ2xpY2tzT3V0c2lkZU9mKHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5yZWxlYXNlRm9jdXModHJ1ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE92ZXJsYXlFbGVtZW50IGFzIENvbnN0cnVjdG9yPE92ZXJsYXlJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2Rpc3BsYXk6YmxvY2s7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMDB9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tZnVsbC13aWR0aDptYXgtY29udGVudDstLWNvbnRyb2wtd2lkdGg6dW5zZXQ7LS1jb250cm9sLW1pbi13aWR0aDoyNDBweDstLWNvbnRyb2wtbWF4LXdpZHRoOnZhcigtLWNvbnRyb2wtd2lkdGgpOy0tY29udHJvbC1tYXJnaW4teTp2YXIoLS1tdGUtc3BhY2Utc20pOy0tY29udHJvbC1tYXJnaW4teDp2YXIoLS1tdGUtc3BhY2Utc20pOy0tY29udHJvbC1kZXNjcmlwdG9yLW1hcmdpbjp2YXIoLS1tdGUtc3BhY2Utc20pOy0tbGFiZWwtd2lkdGg6dmFyKC0tY29udHJvbC13aWR0aCk7LS1sYWJlbC1taW4td2lkdGg6dmFyKC0tY29udHJvbC1taW4td2lkdGgpOy0tbGFiZWwtbWF4LXdpZHRoOnZhcigtLWNvbnRyb2wtbWF4LXdpZHRoKTstLWxhYmVsLW1hcmdpbi15OnZhcigtLW10ZS1zcGFjZS14cyk7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6dmFyKC0tZnVsbC13aWR0aCl9LmdyaWQtY29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWdyaWQ7Z3JpZC10ZW1wbGF0ZS1hcmVhczpcImxhYmVsXCIgXCJjb250cm9sXCI7Z3JpZC10ZW1wbGF0ZS1yb3dzOjFmciBtaW5tYXgoMCwxMDAlKTt3aWR0aDppbmhlcml0fTpob3N0KFt3aXRoRnVsbFdpZHRoXSl7LS1mdWxsLXdpZHRoOjEwMCU7LS1jb250cm9sLXdpZHRoOjEwMCV9Omhvc3QoW3dpdGhvdXRNYXJnaW5dKXstLWNvbnRyb2wtbWFyZ2luLXk6MHB4fTpob3N0KFt3aXRob3V0TWFyZ2luXSkgLmxhYmVsLWNvbnRhaW5lci5oYXMtY29udGVudHttYXJnaW4tYm90dG9tOnZhcigtLWNvbnRyb2wtZGVzY3JpcHRvci1tYXJnaW4pfS5sYWJlbC1jb250YWluZXJ7ZGlzcGxheTpub25lO2dyaWQtYXJlYTpsYWJlbDttYXgtd2lkdGg6dmFyKC0tbGFiZWwtbWF4LXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbGFiZWwtbWluLXdpZHRoKTt3aWR0aDp2YXIoLS1sYWJlbC13aWR0aCl9LmxhYmVsLWNvbnRhaW5lci5oYXMtY29udGVudHtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6dmFyKC0tbGFiZWwtbWFyZ2luLXkpfS5sYWJlbC1jb250YWluZXI6bm90KC5oYXMtY29udGVudCl7bWFyZ2luOjAhaW1wb3J0YW50fS5jb250ZXh0e2dyaWQtYXJlYTpjb250ZXh0fS5kZXNjcmlwdGlvbiwuZXJyb3IsLmhpbnQsLmxhYmVse2Rpc3BsYXk6YmxvY2t9LmRlc2NyaXB0aW9uIG10ZS1kZXNjcmlwdGlvbiwuZGVzY3JpcHRpb24gbXRlLWRlc2NyaXB0aW9uLXRleHQsLmxhYmVsIG10ZS1sYWJlbCwubGFiZWwgbXRlLWxhYmVsLXRleHQsOmhvc3QgOjpzbG90dGVkKG10ZS1kZXNjcmlwdGlvbi10ZXh0W3Nsb3Q9ZGVzY3JpcHRpb25dKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWRlc2NyaXB0aW9uW3Nsb3Q9ZGVzY3JpcHRpb25dKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWxhYmVsLXRleHRbc2xvdD1sYWJlbF0pLDpob3N0IDo6c2xvdHRlZChtdGUtbGFiZWxbc2xvdD1sYWJlbF0pe21hcmdpbjowfTpob3N0KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pey0tbGFiZWwtd2lkdGg6bWF4LWNvbnRlbnQ7LS1sYWJlbC1taW4td2lkdGg6bWF4LWNvbnRlbnR9Omhvc3QoW2xhYmVsUG9zaXRpb249YmVmb3JlXSkgLmdyaWQtY29udGFpbmVye2dyaWQtdGVtcGxhdGUtYXJlYXM6XCJsYWJlbCBjb250cm9sXCI7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1pbm1heChhdXRvLHZhcigtLWxhYmVsLXdpZHRoKSkgbWlubWF4KGF1dG8sdmFyKC0tY29udHJvbC13aWR0aCkpfTpob3N0KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pIC5sYWJlbC1jb250YWluZXJ7bWFyZ2luLWJvdHRvbTp2YXIoLS1jb250cm9sLW1hcmdpbi15KTttYXJnaW4tcmlnaHQ6dmFyKC0tY29udHJvbC1tYXJnaW4teCk7bWFyZ2luLXRvcDpjYWxjKHZhcigtLWNvbnRyb2wtbWFyZ2luLXkpICsgdmFyKC0tbGFiZWwtYmVmb3JlLW9mZnNldCkpfS5kZXNjcmlwdGlvbiwuZXJyb3IsLmhpbnR7bWluLXdpZHRoOjEwMCU7d2lkdGg6LW1vei1taW4tY29udGVudDt3aWR0aDptaW4tY29udGVudH0uY29udHJvbC1vdXRlci1jb250YWluZXJ7Z3JpZC1hcmVhOmNvbnRyb2w7bWFyZ2luLXRvcDp2YXIoLS1jb250cm9sLW1hcmdpbi15KTttYXgtd2lkdGg6dmFyKC0tY29udHJvbC1tYXgtd2lkdGgpO21pbi13aWR0aDp2YXIoLS1jb250cm9sLW1pbi13aWR0aCk7d2lkdGg6dmFyKC0tY29udHJvbC13aWR0aCl9Omhvc3QoOm5vdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKSkgLmNvbnRyb2wtb3V0ZXItY29udGFpbmVyLmhhcy1sYWJlbC1jb250ZW50e21hcmdpbi10b3A6Y2FsYyh2YXIoLS1jb250cm9sLW1hcmdpbi15KS8yKX0uY29udHJvbC1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXJnaW4tYm90dG9tOnZhcigtLWNvbnRyb2wtbWFyZ2luLXkpfS5lcnJvciwuaGludHtkaXNwbGF5Om5vbmV9LmVycm9yLmhhcy1jb250ZW50LC5oaW50Lmhhcy1jb250ZW50e2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDp2YXIoLS1jb250cm9sLWRlc2NyaXB0b3ItbWFyZ2luKX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1mb3JtLWZpZWxkLWludGVybmFsLXBhZGRpbmc6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwOnZhcigtLW10ZS1zcGFjZS1zbSk7LS1mb3JtLWZpZWxkLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCk7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1zdXJmYWNlLTIpOy0tcHJlcGVuZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1ncmV5LTEpOy0tcHJlcGVuZC1wYWRkaW5nLXg6dmFyKC0tbXRlLXNwYWNlLXNtKTstLXByZXBlbmQtYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMil9Omhvc3QoW3JhZGl1cz1zbV0pey0tZm9ybS1maWVsZC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteHMpfTpob3N0KFtyYWRpdXM9bGddKXstLWZvcm0tZmllbGQtcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXh4bCl9Omhvc3QoW3NpemU9c21dKXstLXByZXBlbmQtcGFkZGluZy14OmNhbGModmFyKC0tbXRlLXNwYWNlLXhzKSArIHZhcigtLW10ZS1zcGFjZS14eHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtcGFkZGluZzpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1mb3JtLWZpZWxkLWludGVybmFsLWdhcDpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSl9Omhvc3QoW3NpemU9bGddKXstLXByZXBlbmQtcGFkZGluZy14OmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1wYWRkaW5nOmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXA6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXhzKSl9LmZvcm0tZmllbGR7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6dmFyKC0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2dhcDp2YXIoLS1mb3JtLWZpZWxkLWludGVybmFsLWdhcCk7cG9zaXRpb246cmVsYXRpdmV9Omhvc3QoW2Rpc2FibGVkXSkgLmZvcm0tZmllbGR7YmFja2dyb3VuZDp2YXIoLS1tdGUtZGlzYWJsZWQtMSk7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1tdGUtZGlzYWJsZWQtMSl9LmFwcGVuZCwucHJlcGVuZHthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpzdHJldGNoO2JhY2tncm91bmQ6dmFyKC0tcHJlcGVuZC1iYWNrZ3JvdW5kKTtkaXNwbGF5Om5vbmU7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOjAgdmFyKC0tcHJlcGVuZC1wYWRkaW5nLXgpfS5wcmVwZW5ke2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci1yaWdodDoxcHggc29saWQgdmFyKC0tcHJlcGVuZC1ib3JkZXItY29sb3IpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpfS5hcHBlbmR7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci1sZWZ0OjFweCBzb2xpZCB2YXIoLS1wcmVwZW5kLWJvcmRlci1jb2xvcik7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpfS5hcHBlbmQuaGFzLWNvbnRlbnQsLnByZXBlbmQuaGFzLWNvbnRlbnR7ZGlzcGxheTpmbGV4fS5wcmVmaXgsLnN1ZmZpeHthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpzdHJldGNoO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5wcmVmaXg6bm90KC5oYXMtcHJlcGVuZCl7cGFkZGluZy1sZWZ0OnZhcigtLXByZXBlbmQtcGFkZGluZy14KX0uc3VmZml4Om5vdCguaGFzLWFwcGVuZCl7cGFkZGluZy1yaWdodDp2YXIoLS1wcmVwZW5kLXBhZGRpbmcteCl9LmZvcm0tZmllbGQuZm9jdXNlZDpub3QoLmRpc2FibGVkKTpub3QoW2Rpc2FibGVkXSk6bm90KDpkaXNhYmxlZCk6YmVmb3Jle2JvcmRlcjoycHggc29saWQgcmdiKHZhcigtLW10ZS1mb2N1cy1yZ2IpKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvdHRvbTotMXB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDotMXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTFweDt0b3A6LTFweDt6LWluZGV4Ojl9LmZvcm0tZmllbGQuaW52YWxpZHstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKX06aG9zdChbd2l0aG91dEJvcmRlcl0pIDppcyguZm9ybS1maWVsZCwucHJlcGVuZCwuYXBwZW5kKXstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fWA7IiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtcbiAgQWN0aXZlTGlua09wdGlvbnMsXG4gIENvbnN0cnVjdG9yLFxuICBNdGVFbGVtZW50LFxuICBNdGVIaXN0b3J5QXBpU2VydmljZSxcbiAgVW5zdWJzY3JpYmVyLFxuICBpc0xpbmtBY3RpdmUsXG4gIG9uVXBkYXRlLFxufSBmcm9tICcuLi8nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMaW5rSW50ZXJmYWNlIHtcbiAgaHJlZj86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXV0b0FjdGl2ZUxpbmtJbnRlcmZhY2Uge1xuICAvKiogV2hldGhlciBvciBub3QgdGhpcyBsaW5rIGlzIHRoZSBhY3RpdmUgcGFnZSAqL1xuICBhY3RpdmU6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgbGluayBzaG91bGQgYXV0b21hdGljYWxseSB0cnkgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIHRoZSBhY3RpdmUgcGFnZSAqL1xuICB3aXRob3V0QXV0b0FjdGl2ZTogYm9vbGVhbjtcblxuICAvKiogT3B0aW9ucyB0byByZWZpbmUgaG93IHRoaXMgbGluayB3aWxsIGRldGVybWluZSBpZiBpdCBpcyB0aGUgYWN0aXZlIHBhZ2UgKi9cbiAgYWN0aXZlTGlua09wdGlvbnM/OiBQYXJ0aWFsPEFjdGl2ZUxpbmtPcHRpb25zPjtcblxuICAvKiogVGhlIGludGVybmFsIGFuY2hvciBlbGVtZW50IGZyb20gd2hpY2ggdG8gcHVsbCB0aGUgbG9jYXRpb24gZm9yIGNvbXBhcmlzb24gKi9cbiAgYW5jaG9yRWxlbWVudD86IEhUTUxBbmNob3JFbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgQXV0b0FjdGl2ZUxpbmtNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudCAmIExpbmtJbnRlcmZhY2U+PihcbiAgc3VwZXJDbGFzczogVFxuKSA9PiB7XG4gIGNsYXNzIEF1dG9BY3RpdmVMaW5rRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgYWN0aXZlID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHdpdGhvdXRBdXRvQWN0aXZlID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIHJlZmxlY3Q6IHRydWUgfSkgYWN0aXZlTGlua09wdGlvbnM/OiBQYXJ0aWFsPEFjdGl2ZUxpbmtPcHRpb25zPjtcblxuICAgIGFuY2hvckVsZW1lbnQ/OiBIVE1MQW5jaG9yRWxlbWVudDtcblxuICAgIHByaXZhdGUgdW5zdWI6IFVuc3Vic2NyaWJlcjtcblxuICAgIEBvblVwZGF0ZSgnYWN0aXZlJywgeyB3YWl0VW50aWxGaXJzdFVwZGF0ZTogdHJ1ZSB9KVxuICAgIHByaXZhdGUgaGFuZGxlQWN0aXZlTGlua0NoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3BhZ2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAb25VcGRhdGUoWydocmVmJywgJ2lyZWYnLCAnd2l0aEF1dG9BY3RpdmUnXSwgeyB3YWl0VW50aWxGaXJzdFVwZGF0ZTogdHJ1ZSB9KVxuICAgIHByaXZhdGUgaGFuZGxlQXV0b0FjdGl2ZUNoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmhyZWYgfHwgdGhpc1snaXJlZiddKSB7XG4gICAgICAgIGlmICh0aGlzLndpdGhvdXRBdXRvQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcigpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlVXJsQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUF1dG9BY3RpdmVDaGFuZ2UoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExpc3RlbmVyKCkge1xuICAgICAgaWYgKCF0aGlzLnVuc3ViKSB7XG4gICAgICAgIHRoaXMudW5zdWIgPSBNdGVIaXN0b3J5QXBpU2VydmljZS5zdGF0ZUNoYW5nZXMoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlVXJsQ2hhbmdlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLnVuc3ViPy4oKTtcbiAgICAgIHRoaXMudW5zdWIgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlVXJsQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmUgPSBpc0xpbmtBY3RpdmUoXG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudD8uaHJlZixcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIHRoaXMuYWN0aXZlTGlua09wdGlvbnNcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gQXV0b0FjdGl2ZUxpbmtFbGVtZW50IGFzIENvbnN0cnVjdG9yPEF1dG9BY3RpdmVMaW5rSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQsIFNsb3RDb250cm9sbGVyIH0gZnJvbSAnLi4nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTbG90T2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAvKipcbiAgICogUHJvcCB1c2VkIHRvIGRlY2xhcmUgd2hpY2ggc2xvdHMgYXJlIGJlaW5nIHVzZWQgZHVyaW5nIFNTUiB0byBtYWtlIHRoZW0gdmlzaWJsZSBpbiBjZXJ0YWluIGVkZ2UtY2FzZXMuXG4gICAqL1xuICBzc3JTbG90czogc3RyaW5nO1xuXG4gIHNsb3RDb250cm9sbGVyOiBTbG90Q29udHJvbGxlcjtcblxuICBoYXNTbG90OiAoc2xvdDogc3RyaW5nLCBvclZhbHVlPzogYW55KSA9PiBib29sZWFuO1xuXG4gIHNzclNsb3RDaGVjazogKHNsb3RzOiBzdHJpbmcpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBTbG90T2JzZXJ2ZXJNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgU2xvdE9ic2VydmVyRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIFByb3AgdXNlZCB0byBkZWNsYXJlIHdoaWNoIHNsb3RzIGFyZSBiZWluZyB1c2VkIGR1cmluZyBTU1IgdG8gbWFrZSB0aGVtIHZpc2libGUgaW4gY2VydGFpbiBlZGdlLWNhc2VzLlxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSlcbiAgICBzZXQgc3NyU2xvdHModmFsOiBzdHJpbmcpIHtcbiAgICAgIGxldCBvbGRWYWwgPSB0aGlzLl9zc3JTbG90cztcbiAgICAgIHRoaXMuX3NzclNsb3RzID0gdmFsO1xuICAgICAgLy8gUGFyc2UgYW5kIGNhY2hlIHNzciBzbG90IHNldFxuICAgICAgY29uc3Qgc2xvdHMgPSAodGhpcy5fc3NyU2xvdHMgPz8gJycpXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLm1hcCgoc2xvdCkgPT4gc2xvdC50cmltKCkpO1xuICAgICAgdGhpcy5fc3NyU2xvdFNldCA9IG5ldyBTZXQ8c3RyaW5nPihzbG90cyk7XG4gICAgICAvLyBOb3JtYWwgdXBkYXRlXG4gICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ3NzclNsb3RzJywgb2xkVmFsKTtcbiAgICB9XG4gICAgZ2V0IHNzclNsb3RzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NzclNsb3RzO1xuICAgIH1cbiAgICBwcml2YXRlIF9zc3JTbG90cz86IHN0cmluZztcblxuICAgIC8qKiBAaWdub3JlICovXG4gICAgX3NzclNsb3RTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIHNsb3RDb250cm9sbGVyID0gbmV3IFNsb3RDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBzbG90IGhhcyBjb250ZW50LCBvciBpZiBpdCB3YXMgc3BlY2lmaWVkIGFzIGV4aXN0aW5nIGR1cmluZyBTU1IuXG4gICAgICogT25jZSBjYWxsZWQsIHRoZSBjb21wb25lbnQgd2lsbCBub3cgYXV0b21hdGljYWxseSB1cGRhdGUgaWYgdGhlIGNvbnRlbnRzIG9mIHRoaXMgc2xvdCBjaGFuZ2UuXG4gICAgICovXG4gICAgaGFzU2xvdChzbG90OiBzdHJpbmcsIG9yVmFsdWU/OiBhbnkpOiBib29sZWFuIHtcbiAgICAgIHRoaXMuc2xvdENvbnRyb2xsZXIudXBkYXRlT25DaGFuZ2Uoc2xvdCk7XG4gICAgICAvLyBUT0RPKHJlZWNlKTogcmVjb25zaWRlciB3aGVuIGEgc29sdXRpb24gZXhpc3RzIGZvciBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9pc3N1ZXMvMTQzNFxuICAgICAgLy8gV2UgaGF2ZSB0byBhc3N1bWUgYWxpZ25tZW50IHdpdGggc3NyU2xvdENoZWNrIHVudGlsIHRoZSBmaXJzdCB1cGRhdGUgaGVyZSBvdGhlcndpc2UgcGFydCBtaXNtYXRjaGVzIGNhbiBvY2N1clxuICAgICAgaWYgKCF0aGlzLl9fZmlyc3RVcGRhdGVkKSB7XG4gICAgICAgIHJldHVybiBvclZhbHVlIHx8IHRoaXMuc3NyU2xvdENoZWNrKHNsb3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9yVmFsdWUgfHwgdGhpcy5zbG90Q29udHJvbGxlci5jaGVjayhzbG90KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogV2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGUgcmVxdWVzdGVkIHNsb3Qgd2FzIHNwZWNpZmllZCBpbiB0aGUgbGlzdCBvZiBgc3NyLXNsb3RzYC4gKi9cbiAgICBzc3JTbG90Q2hlY2soc2xvdDogc3RyaW5nKSB7XG4gICAgICBpZiAodGhpcy5fX2ZpcnN0VXBkYXRlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3NyU2xvdFNldC5oYXMoc2xvdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBTbG90T2JzZXJ2ZXJFbGVtZW50IGFzIENvbnN0cnVjdG9yPFNsb3RPYnNlcnZlckludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBGb3JtQ29udHJvbE1peGluLCBGb3JtQ29udHJvbEludGVyZmFjZSB9IGZyb20gJ0BvcGVuLXdjL2Zvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgcXVlcnkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBDb25zdHJ1Y3RvcixcbiAgRGlzYWJsZWRNaXhpbixcbiAgVGFiSW5kZXhNaXhpbixcbiAgTXRlRWxlbWVudCxcbiAgaW5uZXJJbnB1dFZhbGlkYXRvcnMsXG4gIFRhYkluZGV4SW50ZXJmYWNlLFxuICBEaXNhYmxlZEludGVyZmFjZSxcbiAgb25VcGRhdGUsXG4gIGV2ZW50RW1pdHRlcixcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICcuLic7XG5cbi8vIFJlcXVpcmVkIHBvbHlmaWxsIGZvciBub3dcbmltcG9ydCAnLi4vLi4vY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvaW5kZXgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE10ZUNoZWNrYm94Q2hhbmdlRGV0YWlsIHtcbiAgLyoqIFRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCBjaGFuZ2VkICovXG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sIGNoYW5nZWQgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgZWxlbWVudCBpcyBjaGVja2VkICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tib3hJbnRlcmZhY2Uge1xuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgZWxlbWVudCAqL1xuICBsYWJlbD86IHN0cmluZztcblxuICAvKiogVGhlIGVycm9yIHRleHQgZm9yIHRoZSBlbGVtZW50ICovXG4gIGVycm9yPzogc3RyaW5nO1xuXG4gIC8qKiBUaGUgaGludCB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICBoaW50Pzogc3RyaW5nO1xuXG4gIC8qKiBBbiBhcmlhIGxhYmVsIHRoYXQgd2lsbCBiZSBwcm92aWRlZCB0byB0aGUgaW5wdXQgZWxlbWVudCAqL1xuICBhcmlhTGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBuYW1lIGZvciB0aGUgZWxlbWVudC4gVXNlZCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgdmFsdWUgZm9yIHRoZSBlbGVtZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSBlbGVtZW50IHdoZW4gc3VibWl0dGluZyBhIGZvcm0gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudCAgKi9cbiAgdmFsdWU6IHN0cmluZztcblxuICAvKipcbiAgICogQWx0ZXJzIHRoZSBiZWhhdmlvciBvZiB0aGlzIGNvbnRyb2wuIFdoZW4gXCJjb250cm9sbGVkXCIsIGEgY29udHJvbHMgdmFsdWUgaXMgZHJpdmVuIGV4cGxpY2l0bHkgYnkgZXh0ZXJuYWwgc3RhdGVcbiAgICogdmlhIHRoZSBgdmFsdWVgIHByb3AuIENoYW5nZSBldmVudHMgd2lsbCBmaXJlIGJ1dCB0aGUgY29udHJvbCB2YWx1ZSB3aWxsIG5vdCBjaGFuZ2UgdW50aWwgaXQgaXMgYWx0ZXJlZCBkaXJlY3RseS5cbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgY29udHJvbGxlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgY2hlY2tlZCBieSBkZWZhdWx0LiBVc2VmdWwgZm9yIHdoZW4gcmVzZXR0aW5nIGZvcm0gY29udHJvbHMgb3IgdXNpbmcgYSBzdGF0ZWxlc3MgY29tcG9uZW50ICovXG4gIGRlZmF1bHRDaGVja2VkOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGNoZWNrZWQgb3Igbm90ICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlYWRvbmx5ICovXG4gIHJlYWRvbmx5OiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBzZWxlY3RpbmcgdGhlIGVsZW1lbnQgaXMgcmVxdWlyZWQgb3Igbm90ICovXG4gIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gIC8qKiBSZW5kZXJzIHRoZSByZXF1aXJlZCBpbmRpY2F0b3IgZm9yIHRoaXMgaW5wdXRzIGxhYmVsIHdpdGhvdXQgZW5hYmxpbmcgbmF0aXZlIGByZXF1aXJlZGAgdmFsaWRhdGlvbiAqL1xuICBzaG93UmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgaW5wdXQgYmx1cnMgICovXG4gIGhhbmRsZUJsdXIoKTogdm9pZDtcblxuICAvKiogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBpbnB1dCBpcyBmb2N1c2VkIG9uICAqL1xuICBoYW5kbGVGb2N1cygpOiB2b2lkO1xuXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCBjaGFuZ2VzICAqL1xuICBoYW5kbGVDaGFuZ2UoKTogdm9pZDtcblxuICAvKiogQSBzZXQgb2YgYXR0cmlidXRlcyB0byBiZSBmb3J3YXJkZWQgdG8gYW4gZWxlbWVudCB3aXRoaW4gcmVuZGVyIGFuZCByZW1vdmVkIGZyb20gdGhlIGVsZW1lbnQgKi9cbiAgaW5oZXJpdGVkQXR0cmlidXRlczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGNvbnN0IENoZWNrYm94TWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIENoZWNrYm94RWxlbWVudCBleHRlbmRzIFRhYkluZGV4TWl4aW4oRm9ybUNvbnRyb2xNaXhpbihEaXNhYmxlZE1peGluKHN1cGVyQ2xhc3MpKSwge1xuICAgIGluaXRpYWxUYWJJbmRleDogMCxcbiAgfSkge1xuICAgIGluaGVyaXRlZEF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICAgIC8qKiBAaWdub3JlICovXG4gICAgc3RhdGljIGZvcm1Db250cm9sVmFsaWRhdG9ycyA9IGlubmVySW5wdXRWYWxpZGF0b3JzO1xuXG4gICAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoKSBsYWJlbD86IHN0cmluZztcblxuICAgIC8qKiBUaGUgZXJyb3IgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoKSBlcnJvcj86IHN0cmluZztcblxuICAgIC8qKiBUaGUgaGludCB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSgpIGhpbnQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBbHRlcnMgdGhlIGJlaGF2aW9yIG9mIHRoaXMgY29udHJvbC4gV2hlbiBcImNvbnRyb2xsZWRcIiwgYSBjb250cm9scyB2YWx1ZSBpcyBkcml2ZW4gZXhwbGljaXRseSBieSBleHRlcm5hbCBzdGF0ZVxuICAgICAqIHZpYSB0aGUgYHZhbHVlYCBwcm9wLiBDaGFuZ2UgZXZlbnRzIHdpbGwgZmlyZSBidXQgdGhlIGNvbnRyb2wgdmFsdWUgd2lsbCBub3QgY2hhbmdlIHVudGlsIGl0IGlzIGFsdGVyZWQgZGlyZWN0bHkuXG4gICAgICogQGV4cGVyaW1lbnRhbFxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgY29udHJvbGxlZDogYm9vbGVhbjtcblxuICAgIC8qKiBBbiBhcmlhIGxhYmVsIHRoYXQgd2lsbCBiZSBwcm92aWRlZCB0byB0aGUgaW5wdXQgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ2FyaWEtbGFiZWwnLCByZWZsZWN0OiB0cnVlIH0pIGFyaWFMYWJlbDogc3RyaW5nO1xuXG4gICAgLyoqIFRoZSBuYW1lIGZvciB0aGUgZWxlbWVudC4gVXNlZCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIG5hbWU6IHN0cmluZztcblxuICAgIC8qKiBUaGUgdmFsdWUgZm9yIHRoZSBlbGVtZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSBlbGVtZW50IHdoZW4gc3VibWl0dGluZyBhIGZvcm0gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudCAgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHZhbHVlPyA9ICdvbic7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgY2hlY2tlZCBieSBkZWZhdWx0LiBVc2VmdWwgZm9yIHdoZW4gcmVzZXR0aW5nIGZvcm0gY29udHJvbHMgb3IgdXNpbmcgYSBzdGF0ZWxlc3MgY29tcG9uZW50ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBkZWZhdWx0Q2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgY2hlY2tlZCBvciBub3QgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGNoZWNrZWQgPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBiZSByZWFkb25seSAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcmVhZG9ubHkgPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBzZWxlY3RpbmcgdGhlIGVsZW1lbnQgaXMgcmVxdWlyZWQgb3Igbm90ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSByZXF1aXJlZCA9IGZhbHNlO1xuXG4gICAgLyoqIFJlbmRlcnMgdGhlIHJlcXVpcmVkIGluZGljYXRvciBmb3IgdGhpcyBpbnB1dHMgbGFiZWwgd2l0aG91dCBlbmFibGluZyBuYXRpdmUgYHJlcXVpcmVkYCB2YWxpZGF0aW9uICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBzaG93UmVxdWlyZWQ/O1xuXG4gICAgLyoqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgd2l0aGluIHRoZSBmb3JtIGNvbnRyb2wgbWl4aW4gKi9cbiAgICBAcXVlcnkoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpIHZhbGlkYXRpb25UYXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoZSBlbGVtZW50J3Mgc3RhdGUgaXMgYWJvdXQgdG8gY2hhbmdlLiBJZiBkZWZhdWx0IGlzIHByZXZlbnRlZCwgaXQgd2lsbCByZXZlcnQgdGhlIGNoZWNrYm94IHRvIGl0J3Mgb3JpZ2luYWwgY2hlY2tlZCBzdGF0ZSBwcmlvciB0byBzZWxlY3RpbmcuICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF93aWxsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TXRlQ2hlY2tib3hDaGFuZ2VEZXRhaWw+O1xuXG4gICAgLyoqIEVtaXR0ZWQgd2hlbiB0aGUgZWxlbWVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkLiAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxNdGVDaGVja2JveENoYW5nZURldGFpbD47XG5cbiAgICAvKiogRW1pdHMgd2hlbiB0aGlzIGVsZW1lbnQgaXMgZm9jdXNlZCAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25Gb2N1czogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIEVtaXRzIHdoZW4gdGhpcyBlbGVtZW50IGxvc2VzIGZvY3VzICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkJsdXI6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBvblVwZGF0ZSgnZGVmYXVsdENoZWNrZWQnKVxuICAgIHByb3RlY3RlZCBvbkRlZmF1bHRDaGVja2VkQ2hhbmdlKCkge1xuICAgICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkICYmIHRoaXMuZGVmYXVsdENoZWNrZWQgJiYgIXRoaXMuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBvblVwZGF0ZShbJ3ZhbHVlJywgJ2NoZWNrZWQnXSwgeyBvbjogJ2JvdGgnIH0pXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBAb25VcGRhdGUoJ2FyaWFMYWJlbCcsIHsgb246ICdib3RoJyB9KVxuICAgIHByb3RlY3RlZCB1cGRhdGVMYWJlbCgpIHtcbiAgICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IHtcbiAgICAgICAgLi4udGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzLFxuICAgICAgICBhcmlhTGFiZWw6IHRoaXMuYXJpYUxhYmVsLFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogLS0gRm9ybSBjb250cm9sIHZhbGlkYXRpb24gb3ZlcnJpZGVzIC0tICovXG4gICAgc2hvdWxkRm9ybVZhbHVlVXBkYXRlKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRGb3JtQ29udHJvbCgpOiB2b2lkIHtcbiAgICAgIHN1cGVyLnJlc2V0Rm9ybUNvbnRyb2w/LigpO1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMuZGVmYXVsdENoZWNrZWQ7XG4gICAgfVxuXG4gICAgdmFsaWRpdHlDYWxsYmFjaygpOiBzdHJpbmcgfCB2b2lkIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9yIHx8IHRoaXMudmFsaWRhdGlvblRhcmdldD8udmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgfVxuXG4gICAgLyoqIC0tIFRhYkluZGV4IG92ZXJyaWRlcyAtLSAqL1xuICAgIGdldFRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICBzZXRUYWJJbmRleEFkYXB0ZXIodmFsdWU6IHN0cmluZykge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm90UHJldmVudGVkID0gdGhpcy5fd2lsbENoYW5nZS5lbWl0KFxuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIGNoZWNrZWQ6ICF0aGlzLmNoZWNrZWQsXG4gICAgICAgIH0sXG4gICAgICAgIHsgY2FuY2VsYWJsZTogdHJ1ZSB9XG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5jb250cm9sbGVkKSB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBjaGVja2VkOiAhdGhpcy5jaGVja2VkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG5vdFByZXZlbnRlZCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgY2hlY2tlZDogdGhpcy5jaGVja2VkLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5fb25CbHVyLmVtaXQoKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9vbkZvY3VzLmVtaXQoKTtcbiAgICB9O1xuXG4gICAgLyoqIENsaWNrcyB0aGUgZWxlbWVudCAqL1xuICAgIHB1YmxpYyBjbGljaygpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblRhcmdldC5jbGljaygpO1xuICAgIH1cblxuICAgIC8qKiBGb2N1c2VzIHRoZSBlbGVtZW50ICovXG4gICAgcHVibGljIGZvY3VzKCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqIEJsdXJzIHRoZSBlbGVtZW50ICovXG4gICAgcHVibGljIGJsdXIoKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBDaGVja2JveEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8XG4gICAgQ2hlY2tib3hJbnRlcmZhY2UgJiBUYWJJbmRleEludGVyZmFjZSAmIEZvcm1Db250cm9sSW50ZXJmYWNlICYgRGlzYWJsZWRJbnRlcmZhY2VcbiAgPiAmXG4gICAgVDtcbn07XG4iLCAiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgdGhlIFdlYWtNYXBzIHVzZWQgdGhyb3VnaG91dCB0aGlzIHByb2plY3QuIFRoZSBXZWFrTWFwcyBleGlzdCB0byB0aWVcbiAqIG9iamVjdHMgdG9nZXRoZXIgd2l0aG91dCBwb2xsdXRpbmcgdGhlIG9iamVjdHMgdGhlbXNlbHZlcyB3aXRoIHJlZmVyZW5jZXMgd2UnZCByYXRoZXIga2VlcFxuICogaGlkZGVuLiBUaGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gd29yayBhcyB0cmFuc3BhcmVudGx5IGFzIHBvc3NpYmxlLlxuICovXG5pbXBvcnQgeyBJRWxlbWVudEludGVybmFscywgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqIFVzZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBpdCBpcyBhdHRhY2hlZCB0byAqL1xuZXhwb3J0IGNvbnN0IHJlZk1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBJQ3VzdG9tRWxlbWVudD4oKTtcblxuLyoqIFVzZWUgYW4gRWxlbWVudHNJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGl0cyBWYWxpZGl0eVN0YXRlIG9iamVjdCAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkaXR5TWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIFZhbGlkaXR5U3RhdGU+KCk7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgaXRzIGF0dGFjaGVkIGlucHV0W3R5cGU9XCJoaWRkZW5cIl0gKi9cbmV4cG9ydCBjb25zdCBoaWRkZW5JbnB1dE1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBIVE1MSW5wdXRFbGVtZW50W10+KCk7XG5cbi8qKiBVc2UgYSBjdXN0b20gZWxlbWVudCB0byBnZXQgaXRzIGF0dGFjaGVkIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgKi9cbmV4cG9ydCBjb25zdCBpbnRlcm5hbHNNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHM+KCk7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgdGhlIGF0dGFjaGVkIHZhbGlkYXRpb24gbWVzc2FnZSAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25NZXNzYWdlTWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIHN0cmluZz4oKTtcblxuLyoqIFVzZSBhIGZvcm0gZWxlbWVudCB0byBnZXQgYXR0YWNoZWQgY3VzdG9tIGVsZW1lbnRzIGFuZCBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlcyAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmV4cG9ydCBjb25zdCBmb3Jtc01hcCA9IG5ldyBXZWFrTWFwPEhUTUxGb3JtRWxlbWVudCwgT2JqZWN0PigpO1xuXG4vKiogVXNlIGEgY3VzdG9tIGVsZW1lbnQgb3Igb3RoZXIgb2JqZWN0IHRvIGdldCB0aGVpciBhc3NvY2lhdGVkIE11dGF0aW9uT2JzZXJ2ZXJzICovXG5leHBvcnQgY29uc3Qgc2hhZG93SG9zdHNNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgTXV0YXRpb25PYnNlcnZlcj4oKTtcblxuLyoqIFVzZSBhIGZvcm0gZWxlbWVudCB0byBnZXQgYSBzZXQgb2YgYXR0YWNoZWQgY3VzdG9tIGVsZW1lbnRzICovXG5leHBvcnQgY29uc3QgZm9ybUVsZW1lbnRzTWFwID0gbmV3IFdlYWtNYXA8SFRNTEZvcm1FbGVtZW50LCBTZXQ8SUN1c3RvbUVsZW1lbnQ+PigpO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIGFuIGVsZW1lbnQncyB2YWx1ZSAqL1xuZXhwb3J0IGNvbnN0IHJlZlZhbHVlTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIGFueT4oKTtcblxuLyoqIEVsZW1lbnRzIHRoYXQgbmVlZCB0byBiZSB1cGdyYWRlZCBvbmNlIGFkZGVkIHRvIHRoZSBET00gKi9cbmV4cG9ydCBjb25zdCB1cGdyYWRlTWFwID0gbmV3IFdlYWtNYXA8RWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHM+KCk7XG5cbi8qKiBTYXZlIHJlZmVyZW5jZXMgdG8gc2hhZG93IHJvb3RzIGZvciBpbmNsdXNpb24gaW4gaW50ZXJuYWxzIGluc3RhbmNlICovXG5leHBvcnQgY29uc3Qgc2hhZG93Um9vdE1hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBTaGFkb3dSb290PigpO1xuXG4vKiogU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgaW50ZXJuYWxzJyB2YWxpZGF0aW9uIGFuY2hvciAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25BbmNob3JNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgSFRNTEVsZW1lbnQ+KCk7XG5cbi8qKiBNYXAgRG9jdW1lbnRGcmFnbWVudHMgdG8gdGhlaXIgTXV0YXRpb25PYnNlcnZlcnMgc28gd2UgY2FuIGRpc2Nvbm5lY3Qgb25jZSBlbGVtZW50cyBhcmUgcmVtb3ZlZCAqL1xuZXhwb3J0IGNvbnN0IGRvY3VtZW50RnJhZ21lbnRNYXAgPSBuZXcgV2Vha01hcDxEb2N1bWVudEZyYWdtZW50LCBNdXRhdGlvbk9ic2VydmVyPigpO1xuXG4vKiogV2hldGhlciBjb25uZWN0ZWRDYWxsYmFjayBoYXMgYWxyZWFkeSBiZWVuIGNhbGxlZC4gKi9cbmV4cG9ydCBjb25zdCBjb25uZWN0ZWRDYWxsYmFja01hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBib29sZWFuPigpO1xuXG4vKiogU2F2ZSBhIHJlZmVyZW5jZSB0byB2YWxpZGl0eSBzdGF0ZSBmb3IgZWxlbWVudHMgdGhhdCBuZWVkIHRvIHVwZ3JhZGUgYWZ0ZXIgYmVpbmcgY29ubmVjdGVkICovXG5leHBvcnQgY29uc3QgdmFsaWRpdHlVcGdyYWRlTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzPigpO1xuIiwgImltcG9ydCB7IHVwZ3JhZGVNYXAgfSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHsgSUFvbSwgSUVsZW1lbnRJbnRlcm5hbHMgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuZXhwb3J0IGNvbnN0IGFvbTogSUFvbSA9IHtcbiAgYXJpYUF0b21pYzogJ2FyaWEtYXRvbWljJyxcbiAgYXJpYUF1dG9Db21wbGV0ZTogJ2FyaWEtYXV0b2NvbXBsZXRlJyxcbiAgYXJpYUJ1c3k6ICdhcmlhLWJ1c3knLFxuICBhcmlhQ2hlY2tlZDogJ2FyaWEtY2hlY2tlZCcsXG4gIGFyaWFDb2xDb3VudDogJ2FyaWEtY29sY291bnQnLFxuICBhcmlhQ29sSW5kZXg6ICdhcmlhLWNvbGluZGV4JyxcbiAgYXJpYUNvbEluZGV4VGV4dDogJ2FyaWEtY29saW5kZXh0ZXh0JyxcbiAgYXJpYUNvbFNwYW46ICdhcmlhLWNvbHNwYW4nLFxuICBhcmlhQ3VycmVudDogJ2FyaWEtY3VycmVudCcsXG4gIGFyaWFEaXNhYmxlZDogJ2FyaWEtZGlzYWJsZWQnLFxuICBhcmlhRXhwYW5kZWQ6ICdhcmlhLWV4cGFuZGVkJyxcbiAgYXJpYUhhc1BvcHVwOiAnYXJpYS1oYXNwb3B1cCcsXG4gIGFyaWFIaWRkZW46ICdhcmlhLWhpZGRlbicsXG4gIGFyaWFJbnZhbGlkOiAnYXJpYS1pbnZhbGlkJyxcbiAgYXJpYUtleVNob3J0Y3V0czogJ2FyaWEta2V5c2hvcnRjdXRzJyxcbiAgYXJpYUxhYmVsOiAnYXJpYS1sYWJlbCcsXG4gIGFyaWFMZXZlbDogJ2FyaWEtbGV2ZWwnLFxuICBhcmlhTGl2ZTogJ2FyaWEtbGl2ZScsXG4gIGFyaWFNb2RhbDogJ2FyaWEtbW9kYWwnLFxuICBhcmlhTXVsdGlMaW5lOiAnYXJpYS1tdWx0aWxpbmUnLFxuICBhcmlhTXVsdGlTZWxlY3RhYmxlOiAnYXJpYS1tdWx0aXNlbGVjdGFibGUnLFxuICBhcmlhT3JpZW50YXRpb246ICdhcmlhLW9yaWVudGF0aW9uJyxcbiAgYXJpYVBsYWNlaG9sZGVyOiAnYXJpYS1wbGFjZWhvbGRlcicsXG4gIGFyaWFQb3NJblNldDogJ2FyaWEtcG9zaW5zZXQnLFxuICBhcmlhUHJlc3NlZDogJ2FyaWEtcHJlc3NlZCcsXG4gIGFyaWFSZWFkT25seTogJ2FyaWEtcmVhZG9ubHknLFxuICBhcmlhUmVsZXZhbnQ6ICdhcmlhLXJlbGV2YW50JyxcbiAgYXJpYVJlcXVpcmVkOiAnYXJpYS1yZXF1aXJlZCcsXG4gIGFyaWFSb2xlRGVzY3JpcHRpb246ICdhcmlhLXJvbGVkZXNjcmlwdGlvbicsXG4gIGFyaWFSb3dDb3VudDogJ2FyaWEtcm93Y291bnQnLFxuICBhcmlhUm93SW5kZXg6ICdhcmlhLXJvd2luZGV4JyxcbiAgYXJpYVJvd0luZGV4VGV4dDogJ2FyaWEtcm93aW5kZXh0ZXh0JyxcbiAgYXJpYVJvd1NwYW46ICdhcmlhLXJvd3NwYW4nLFxuICBhcmlhU2VsZWN0ZWQ6ICdhcmlhLXNlbGVjdGVkJyxcbiAgYXJpYVNldFNpemU6ICdhcmlhLXNldHNpemUnLFxuICBhcmlhU29ydDogJ2FyaWEtc29ydCcsXG4gIGFyaWFWYWx1ZU1heDogJ2FyaWEtdmFsdWVtYXgnLFxuICBhcmlhVmFsdWVNaW46ICdhcmlhLXZhbHVlbWluJyxcbiAgYXJpYVZhbHVlTm93OiAnYXJpYS12YWx1ZW5vdycsXG4gIGFyaWFWYWx1ZVRleHQ6ICdhcmlhLXZhbHVldGV4dCcsXG4gIHJvbGU6ICdyb2xlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0QW9tID0gKHJlZjogRWxlbWVudCwgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscykgPT4ge1xuICBmb3IgKGxldCBrZXkgaW4gYW9tKSB7XG4gICAgaW50ZXJuYWxzW2tleV0gPSBudWxsO1xuXG4gICAgbGV0IGNsb3N1cmVWYWx1ZSA9IG51bGw7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGFvbVtrZXldO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnRlcm5hbHMsIGtleSwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gY2xvc3VyZVZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICBjbG9zdXJlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgIHJlZi5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVwZ3JhZGVNYXAuc2V0KHJlZiwgaW50ZXJuYWxzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufTtcbiIsICJpbXBvcnQge1xuICBpbnRlcm5hbHNNYXAsXG4gIHNoYWRvd0hvc3RzTWFwLFxuICB1cGdyYWRlTWFwLFxuICBoaWRkZW5JbnB1dE1hcCxcbiAgZG9jdW1lbnRGcmFnbWVudE1hcCxcbiAgZm9ybUVsZW1lbnRzTWFwLFxuICB2YWxpZGl0eVVwZ3JhZGVNYXAsXG4gIHJlZlZhbHVlTWFwLFxufSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHsgYW9tIH0gZnJvbSAnLi9hb20uanMnO1xuaW1wb3J0IHtcbiAgcmVtb3ZlSGlkZGVuSW5wdXRzLFxuICBpbml0Rm9ybSxcbiAgaW5pdExhYmVscyxcbiAgdXBncmFkZUludGVybmFscyxcbiAgc2V0RGlzYWJsZWQsXG4gIG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuZnVuY3Rpb24gaW5pdE5vZGUobm9kZTogSUN1c3RvbUVsZW1lbnQpOiB2b2lkIHtcbiAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChub2RlKTtcbiAgY29uc3QgeyBmb3JtIH0gPSBpbnRlcm5hbHM7XG4gIGluaXRGb3JtKG5vZGUsIGZvcm0sIGludGVybmFscyk7XG4gIGluaXRMYWJlbHMobm9kZSwgaW50ZXJuYWxzLmxhYmVscyk7XG59XG5cbi8qKlxuICogSWYgYSBmaWVsZHNldCdzIGRpc2FibGVkIHN0YXRlIGlzIHRvZ2dsZWQsIHRoZSBmb3JtRGlzYWJsZWRDYWxsYmFja1xuICogb24gYW55IGNoaWxkIGZvcm0tYXNzb2NpYXRlZCBjdXNvdG0gZWxlbWVudHMuXG4gKi9cbmV4cG9ydCBjb25zdCB3YWxrRmllbGRzZXQgPSAobm9kZTogSFRNTEZpZWxkU2V0RWxlbWVudCwgZmlyc3RSZW5kZXIgPSBmYWxzZSk6IHZvaWQgPT4ge1xuICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKG5vZGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCB7XG4gICAgYWNjZXB0Tm9kZShub2RlOiBJQ3VzdG9tRWxlbWVudCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gaW50ZXJuYWxzTWFwLmhhcyhub2RlKSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVA7XG4gICAgfSxcbiAgfSk7XG5cbiAgbGV0IGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcbiAgLyoqXG4gICAqIFdlIGRvbid0IG5lZWQgdG8gY2FsbCBhbnl0aGluZyBvbiBmaXJzdCByZW5kZXIgaWZcbiAgICogdGhlIGVsZW1lbnQgaXNuJ3QgZGlzYWJsZWRcbiAgICovXG4gIGNvbnN0IGlzQ2FsbE5lY2Vzc2FyeSA9ICFmaXJzdFJlbmRlciB8fCBub2RlLmRpc2FibGVkO1xuXG4gIHdoaWxlIChjdXJyZW50KSB7XG4gICAgaWYgKGN1cnJlbnQuZm9ybURpc2FibGVkQ2FsbGJhY2sgJiYgaXNDYWxsTmVjZXNzYXJ5KSB7XG4gICAgICBzZXREaXNhYmxlZChjdXJyZW50LCBub2RlLmRpc2FibGVkKTtcbiAgICB9XG4gICAgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZzogTXV0YXRpb25PYnNlcnZlckluaXQgPSB7XG4gIGF0dHJpYnV0ZXM6IHRydWUsXG4gIGF0dHJpYnV0ZUZpbHRlcjogWydkaXNhYmxlZCcsICduYW1lJ10sXG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRPck5hbWVPYnNlcnZlciA9IG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKVxuICA/IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnNMaXN0OiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0IGFzIElDdXN0b21FbGVtZW50O1xuXG4gICAgICAgIC8qKiBNYW5hZ2UgY2hhbmdlcyB0byB0aGUgcmVmJ3MgZGlzYWJsZWQgc3RhdGUgKi9cbiAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0LmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICAgICAgICBzZXREaXNhYmxlZCh0YXJnZXQsIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmxvY2FsTmFtZSA9PT0gJ2ZpZWxkc2V0Jykge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXB1cnBvc2UgdGhlIG9ic2VydmVyIGZvciBmaWVsZHNldHMgd2hpY2ggbmVlZFxuICAgICAgICAgICAgICogdG8gYmUgd2Fsa2VkIHdoZW5ldmVyIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgaXMgc2V0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHdhbGtGaWVsZHNldCh0YXJnZXQgYXMgdW5rbm93biBhcyBIVE1MRmllbGRTZXRFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqIE1hbmFnZSBjaGFuZ2VzIHRvIHRoZSByZWYncyBuYW1lICovXG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnbmFtZScpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0LmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlZlZhbHVlTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgaW50ZXJuYWxzLnNldEZvcm1WYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgOiAoe30gYXMgTXV0YXRpb25PYnNlcnZlcik7XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlckNhbGxiYWNrKG11dGF0aW9uTGlzdDogTXV0YXRpb25SZWNvcmRbXSkge1xuICBtdXRhdGlvbkxpc3QuZm9yRWFjaCgobXV0YXRpb25SZWNvcmQpID0+IHtcbiAgICBjb25zdCB7IGFkZGVkTm9kZXMsIHJlbW92ZWROb2RlcyB9ID0gbXV0YXRpb25SZWNvcmQ7XG4gICAgY29uc3QgYWRkZWQgPSBBcnJheS5mcm9tKGFkZGVkTm9kZXMpIGFzIElDdXN0b21FbGVtZW50W107XG4gICAgY29uc3QgcmVtb3ZlZCA9IEFycmF5LmZyb20ocmVtb3ZlZE5vZGVzKSBhcyBJQ3VzdG9tRWxlbWVudFtdO1xuXG4gICAgYWRkZWQuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgLyoqIEFsbG93cyBmb3IgZHluYW1pYyBhZGRpdGlvbiBvZiBlbGVtZW50cyB0byBmb3JtcyAqL1xuICAgICAgaWYgKGludGVybmFsc01hcC5oYXMobm9kZSkgJiYgbm9kZS5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgICBpbml0Tm9kZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgLyoqIFVwZ3JhZGUgdGhlIGFjY2Vzc2liaWxpdHkgaW5mb3JtYXRpb24gb24gYW55IHByZXZpb3VzbHkgY29ubmVjdGVkICovXG4gICAgICBpZiAodXBncmFkZU1hcC5oYXMobm9kZSkpIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gdXBncmFkZU1hcC5nZXQobm9kZSk7XG4gICAgICAgIGNvbnN0IGFvbUtleXMgPSBPYmplY3Qua2V5cyhhb20pO1xuICAgICAgICBhb21LZXlzXG4gICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBpbnRlcm5hbHNba2V5XSAhPT0gbnVsbClcbiAgICAgICAgICAuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhb21ba2V5XSwgaW50ZXJuYWxzW2tleV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB1cGdyYWRlTWFwLmRlbGV0ZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgLyoqIFVwZ3JhZGUgdGhlIHZhbGlkaXR5IHN0YXRlIHdoZW4gdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkICovXG4gICAgICBpZiAodmFsaWRpdHlVcGdyYWRlTWFwLmhhcyhub2RlKSkge1xuICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSB2YWxpZGl0eVVwZ3JhZGVNYXAuZ2V0KG5vZGUpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgaW50ZXJuYWxzLnZhbGlkaXR5LnZhbGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnaW50ZXJuYWxzLWludmFsaWQnLCAoIWludGVybmFscy52YWxpZGl0eS52YWxpZCkudG9TdHJpbmcoKSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCAoIWludGVybmFscy52YWxpZGl0eS52YWxpZCkudG9TdHJpbmcoKSk7XG4gICAgICAgIHZhbGlkaXR5VXBncmFkZU1hcC5kZWxldGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKiBJZiB0aGUgbm9kZSB0aGF0J3MgYWRkZWQgaXMgYSBmb3JtLCBjaGVjayB0aGUgdmFsaWRpdHkgKi9cbiAgICAgIGlmIChub2RlLmxvY2FsTmFtZSA9PT0gJ2Zvcm0nKSB7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQobm9kZSBhcyB1bmtub3duIGFzIEhUTUxGb3JtRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIobm9kZSwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIHtcbiAgICAgICAgICBhY2NlcHROb2RlKG5vZGU6IElDdXN0b21FbGVtZW50KTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBpbnRlcm5hbHNNYXAuaGFzKG5vZGUpICYmICEoZm9ybUVsZW1lbnRzICYmIGZvcm1FbGVtZW50cy5oYXMobm9kZSkpXG4gICAgICAgICAgICAgID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUXG4gICAgICAgICAgICAgIDogTm9kZUZpbHRlci5GSUxURVJfU0tJUDtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgaW5pdE5vZGUoY3VycmVudCk7XG4gICAgICAgICAgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmxvY2FsTmFtZSA9PT0gJ2ZpZWxkc2V0Jykge1xuICAgICAgICBkaXNhYmxlZE9yTmFtZU9ic2VydmVyLm9ic2VydmU/Lihub2RlLCBkaXNhYmxlZE9yTmFtZU9ic2VydmVyQ29uZmlnKTtcbiAgICAgICAgd2Fsa0ZpZWxkc2V0KG5vZGUgYXMgdW5rbm93biBhcyBIVE1MRmllbGRTZXRFbGVtZW50LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlbW92ZWQuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChub2RlKTtcbiAgICAgIC8qKiBDbGVhbiB1cCBhbnkgaGlkZGVuIGlucHV0IGVsZW1lbnRzIGxlZnQgYWZ0ZXIgYW4gZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQgKi9cbiAgICAgIGlmIChpbnRlcm5hbHMgJiYgaGlkZGVuSW5wdXRNYXAuZ2V0KGludGVybmFscykpIHtcbiAgICAgICAgcmVtb3ZlSGlkZGVuSW5wdXRzKGludGVybmFscyk7XG4gICAgICB9XG4gICAgICAvKiogRGlzY29ubmVjdCBhbnkgdW5uZWVkZWQgTXV0YXRpb25PYnNlcnZlcnMgKi9cbiAgICAgIGlmIChzaGFkb3dIb3N0c01hcC5oYXMobm9kZSkpIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBzaGFkb3dIb3N0c01hcC5nZXQobm9kZSk7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhpcyBvYnNlcnZlciBjYWxsYmFjayBpcyBqdXN0IGZvciBkb2N1bWVudCBmcmFnbWVudHNcbiAqIGl0IHdpbGwgdXBncmFkZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIGlmIHdhcyBhcHBlbmRlZFxuICogZnJvbSBhIGRvY3VtZW50IGZyYWdtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJhZ21lbnRPYnNlcnZlckNhbGxiYWNrKG11dGF0aW9uTGlzdDogTXV0YXRpb25SZWNvcmRbXSk6IHZvaWQge1xuICBtdXRhdGlvbkxpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICBjb25zdCB7IHJlbW92ZWROb2RlcyB9ID0gbXV0YXRpb247XG5cbiAgICByZW1vdmVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBkb2N1bWVudEZyYWdtZW50TWFwLmdldChtdXRhdGlvbi50YXJnZXQgYXMgRG9jdW1lbnRGcmFnbWVudCk7XG4gICAgICBpZiAoaW50ZXJuYWxzTWFwLmhhcyhub2RlIGFzIElDdXN0b21FbGVtZW50KSkge1xuICAgICAgICB1cGdyYWRlSW50ZXJuYWxzKG5vZGUgYXMgSUN1c3RvbUVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBEZWZlciB0aGUgdXBncmFkZSBvZiBub2RlcyB3aXRoaW5nIGEgRG9jdW1lbnRGcmFnbWVudFxuICogQHBhcmFtIGZyYWdtZW50IHtEb2N1bWVudEZyYWdtZW50fVxuICovXG5leHBvcnQgY29uc3QgZGVmZXJVcGdyYWRlID0gKGZyYWdtZW50OiBEb2N1bWVudEZyYWdtZW50KSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnJhZ21lbnRPYnNlcnZlckNhbGxiYWNrKTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZT8uKGZyYWdtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgZG9jdW1lbnRGcmFnbWVudE1hcC5zZXQoZnJhZ21lbnQsIG9ic2VydmVyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvYnNlcnZlciA9IG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKVxuICA/IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spXG4gIDogKHt9IGFzIE11dGF0aW9uT2JzZXJ2ZXIpO1xuZXhwb3J0IGNvbnN0IG9ic2VydmVyQ29uZmlnOiBNdXRhdGlvbk9ic2VydmVySW5pdCA9IHtcbiAgY2hpbGRMaXN0OiB0cnVlLFxuICBzdWJ0cmVlOiB0cnVlLFxufTtcbiIsICJpbXBvcnQgeyBoaWRkZW5JbnB1dE1hcCwgZm9ybXNNYXAsIGZvcm1FbGVtZW50c01hcCwgaW50ZXJuYWxzTWFwIH0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIsIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWcgfSBmcm9tICcuL211dGF0aW9uLW9ic2VydmVycy5qcyc7XG5pbXBvcnQgeyBJQ3VzdG9tRWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHMsIExhYmVsc0xpc3QgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuLyoqXG4gKiBUb2dnbGUncyB0aGUgZGlzYWJsZWQgc3RhdGUgKGF0dHJpYnV0ZXMgJiBjYWxsYmFjaykgb24gdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSBjdXN0b20gZWxlbWVudCBpbnN0YW5jZVxuICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZCAtIFRoZSBkaXNhYmxlZCBzdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgc2V0RGlzYWJsZWQgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLWRpc2FibGVkJywgZGlzYWJsZWQpO1xuXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIHJlZi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICB9IGVsc2Uge1xuICAgIHJlZi5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKTtcbiAgfVxuXG4gIGlmIChyZWYuZm9ybURpc2FibGVkQ2FsbGJhY2spIHtcbiAgICByZWYuZm9ybURpc2FibGVkQ2FsbGJhY2suYXBwbHkocmVmLCBbZGlzYWJsZWRdKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBoaWRkZW4gaW5wdXRzIGZvciB0aGUgZ2l2ZW4gZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUhpZGRlbklucHV0cyA9IChpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzKTogdm9pZCA9PiB7XG4gIGNvbnN0IGhpZGRlbklucHV0cyA9IGhpZGRlbklucHV0TWFwLmdldChpbnRlcm5hbHMpO1xuICBoaWRkZW5JbnB1dHMuZm9yRWFjaCgoaGlkZGVuSW5wdXQpID0+IHtcbiAgICBoaWRkZW5JbnB1dC5yZW1vdmUoKTtcbiAgfSk7XG4gIGhpZGRlbklucHV0TWFwLnNldChpbnRlcm5hbHMsIFtdKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhpZGRlbiBpbnB1dCBmb3IgdGhlIGdpdmVuIHJlZlxuICogQHBhcmFtIHtJQ3VzdG9tRWxlbWVudH0gcmVmIC0gVGhlIGVsZW1lbnQgdG8gd2F0Y2hcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZSBmb3IgdGhlIHJlZlxuICogQHJldHVybiB7SFRNTElucHV0RWxlbWVudH0gVGhlIGhpZGRlbiBpbnB1dFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlSGlkZGVuSW5wdXQgPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHNcbik6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gJ2hpZGRlbic7XG4gIGlucHV0Lm5hbWUgPSByZWYuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gIHJlZi5hZnRlcihpbnB1dCk7XG4gIGhpZGRlbklucHV0TWFwLmdldChpbnRlcm5hbHMpLnB1c2goaW5wdXQpO1xuICByZXR1cm4gaW5wdXQ7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSByZWYgYnkgc2V0dGluZyB1cCBhbiBhdHRyaWJ1dGUgb2JzZXJ2ZSBvbiBpdFxuICogbG9va2luZyBmb3IgY2hhbmdlcyB0byBkaXNhYmxlZFxuICogQHBhcmFtIHtJQ3VzdG9tRWxlbWVudH0gcmVmIC0gVGhlIGVsZW1lbnQgdG8gd2F0Y2hcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZSBmb3IgdGhlIHJlZlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRSZWYgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscyk6IHZvaWQgPT4ge1xuICBoaWRkZW5JbnB1dE1hcC5zZXQoaW50ZXJuYWxzLCBbXSk7XG4gIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIub2JzZXJ2ZT8uKHJlZiwgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZyk7XG59O1xuXG4vKipcbiAqIFNldCB1cCBsYWJlbHMgZm9yIHRoZSByZWZcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSByZWYgdG8gYWRkIGxhYmVscyB0b1xuICogQHBhcmFtIHtMYWJlbHNMaXN0fSBsYWJlbHMgLSBBIGxpc3Qgb2YgdGhlIGxhYmVsc1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRMYWJlbHMgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgbGFiZWxzOiBMYWJlbHNMaXN0KTogdm9pZCA9PiB7XG4gIGlmIChsYWJlbHMubGVuZ3RoKSB7XG4gICAgQXJyYXkuZnJvbShsYWJlbHMpLmZvckVhY2goKGxhYmVsKSA9PiBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlZi5jbGljay5iaW5kKHJlZikpKTtcbiAgICBsZXQgZmlyc3RMYWJlbElkID0gbGFiZWxzWzBdLmlkO1xuICAgIGlmICghbGFiZWxzWzBdLmlkKSB7XG4gICAgICBmaXJzdExhYmVsSWQgPSBgJHtsYWJlbHNbMF0uaHRtbEZvcn1fTGFiZWxgO1xuICAgICAgbGFiZWxzWzBdLmlkID0gZmlyc3RMYWJlbElkO1xuICAgIH1cbiAgICByZWYuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBmaXJzdExhYmVsSWQpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGludGVybmFscy12YWxpZCBhbmQgaW50ZXJuYWxzLWludmFsaWQgYXR0cmlidXRlc1xuICogYmFzZWQgb24gZm9ybSB2YWxpZGl0eS5cbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSAtIFRoZSB0YXJnZXQgZm9ybVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHNldEZvcm1WYWxpZGl0eSA9IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgY29uc3QgbmF0aXZlQ29udHJvbFZhbGlkaXR5ID0gQXJyYXkuZnJvbShmb3JtLmVsZW1lbnRzKVxuICAgIC5maWx0ZXIoXG4gICAgICAoZWxlbWVudDogRWxlbWVudCAmIHsgdmFsaWRpdHk6IFZhbGlkaXR5U3RhdGUgfSkgPT5cbiAgICAgICAgIWVsZW1lbnQudGFnTmFtZS5pbmNsdWRlcygnLScpICYmIGVsZW1lbnQudmFsaWRpdHlcbiAgICApXG4gICAgLm1hcCgoZWxlbWVudDogRWxlbWVudCAmIHsgdmFsaWRpdHk6IFZhbGlkaXR5U3RhdGUgfSkgPT4gZWxlbWVudC52YWxpZGl0eS52YWxpZCk7XG4gIGNvbnN0IHBvbHlmaWxsZWRFbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSkgfHwgW107XG4gIGNvbnN0IHBvbHlmaWxsZWRWYWxpZGl0eSA9IEFycmF5LmZyb20ocG9seWZpbGxlZEVsZW1lbnRzKVxuICAgIC5maWx0ZXIoKGNvbnRyb2wpID0+IGNvbnRyb2wuaXNDb25uZWN0ZWQpXG4gICAgLm1hcCgoY29udHJvbDogSUN1c3RvbUVsZW1lbnQpID0+IGludGVybmFsc01hcC5nZXQoY29udHJvbCkudmFsaWRpdHkudmFsaWQpO1xuICBjb25zdCBoYXNJbnZhbGlkID0gWy4uLm5hdGl2ZUNvbnRyb2xWYWxpZGl0eSwgLi4ucG9seWZpbGxlZFZhbGlkaXR5XS5pbmNsdWRlcyhmYWxzZSk7XG4gIGZvcm0udG9nZ2xlQXR0cmlidXRlKCdpbnRlcm5hbHMtaW52YWxpZCcsIGhhc0ludmFsaWQpO1xuICBmb3JtLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgIWhhc0ludmFsaWQpO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gaW5wdXQgY2FsbGJhY2suIFVwZGF0ZXMgdGhlIGZvcm0ncyB2YWxpZGl0eVxuICogYXR0cmlidXRlcyBvbiBpbnB1dC5cbiAqIEBwYXJhbSB7RXZlbnR9IC0gVGhlIGZvcm0gaW5wdXQgZXZlbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtSW5wdXRDYWxsYmFjayA9IChldmVudDogRXZlbnQpID0+IHtcbiAgc2V0Rm9ybVZhbGlkaXR5KGZpbmRQYXJlbnRGb3JtKGV2ZW50LnRhcmdldCkpO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gY2hhbmdlIGNhbGxiYWNrLiBVcGRhdGVzIHRoZSBmb3JtJ3MgdmFsaWRpdHlcbiAqIGF0dHJpYnV0ZXMgb24gY2hhbmdlLlxuICogQHBhcmFtIHtFdmVudH0gLSBUaGUgZm9ybSBjaGFuZ2UgZXZlbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtQ2hhbmdlQ2FsbGJhY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIHNldEZvcm1WYWxpZGl0eShmaW5kUGFyZW50Rm9ybShldmVudC50YXJnZXQpKTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIHN1Ym1pdCBjYWxsYmFjay4gV2UgbmVlZCB0byBjYW5jZWwgYW55IHN1Ym1pc3Npb25cbiAqIGlmIGEgbmVzdGVkIGludGVybmFscyBpcyBpbnZhbGlkLlxuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IC0gVGhlIGZvcm0gZWxlbWVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHdpcmVTdWJtaXRMb2dpYyA9IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgY29uc3QgU1VCTUlUX0JVVFRPTl9TRUxFQ1RPUiA9XG4gICAgJzppcyhidXR0b25bdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGJ1dHRvbjpub3QoW3R5cGVdKSk6bm90KFtkaXNhYmxlZF0pJztcbiAgbGV0IHN1Ym1pdEJ1dHRvblNlbGVjdG9yID0gYCR7U1VCTUlUX0JVVFRPTl9TRUxFQ1RPUn06bm90KFtmb3JtXSlgO1xuXG4gIGlmIChmb3JtLmlkKSB7XG4gICAgc3VibWl0QnV0dG9uU2VsZWN0b3IgKz0gYCwke1NVQk1JVF9CVVRUT05fU0VMRUNUT1J9W2Zvcm09JyR7Zm9ybS5pZH0nXWA7XG4gIH1cblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgaWYgKHRhcmdldC5jbG9zZXN0KHN1Ym1pdEJ1dHRvblNlbGVjdG9yKSkge1xuICAgICAgLy8gdmFsaWRhdGVcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChmb3JtKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGlzIGZvcm0gZG9lcyBub3QgdmFsaWRhdGUgdGhlbiB3ZSdyZSBkb25lXG4gICAgICAgKi9cbiAgICAgIGlmIChmb3JtLm5vVmFsaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvKiogSWYgdGhlIFNldCBoYXMgaXRlbXMsIGNvbnRpbnVlICovXG4gICAgICBpZiAoZWxlbWVudHMuc2l6ZSkge1xuICAgICAgICBjb25zdCBub2RlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpO1xuICAgICAgICAvKiogQ2hlY2sgdGhlIGludGVybmFscy5jaGVja1ZhbGlkaXR5KCkgb2YgYWxsIG5vZGVzICovXG4gICAgICAgIGNvbnN0IHZhbGlkaXR5TGlzdCA9IG5vZGVzLnJldmVyc2UoKS5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KG5vZGUpO1xuICAgICAgICAgIHJldHVybiBpbnRlcm5hbHMucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqIElmIGFueSBub2RlIGlzIGZhbHNlLCBzdG9wIHRoZSBldmVudCAqL1xuICAgICAgICBpZiAodmFsaWRpdHlMaXN0LmluY2x1ZGVzKGZhbHNlKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gcmVzZXQgY2FsbGJhY2suIFRoaXMgd2lsbCBsb29wIG92ZXIgYWRkZWRcbiAqIGlucHV0cyBhbmQgY2FsbCBmb3JtUmVzZXRDYWxsYmFjayBpZiBhcHBsaWNhYmxlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZm9ybVJlc2V0Q2FsbGJhY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIC8qKiBHZXQgdGhlIFNldCBvZiBlbGVtZW50cyBhdHRhY2hlZCB0byB0aGlzIGZvcm0gKi9cbiAgY29uc3QgZWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQpO1xuXG4gIC8qKiBTb21lIGZvcm1zIHdvbid0IGNvbnRhaW4gZm9ybSBhc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50cyAqL1xuICBpZiAoZWxlbWVudHMgJiYgZWxlbWVudHMuc2l6ZSkge1xuICAgIC8qKiBMb29wIG92ZXIgdGhlIGVsZW1lbnRzIGFuZCBjYWxsIGZvcm1SZXNldENhbGxiYWNrIGlmIGFwcGxpY2FibGUgKi9cbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoKGVsZW1lbnQuY29uc3RydWN0b3IgYXMgYW55KS5mb3JtQXNzb2NpYXRlZCAmJiBlbGVtZW50LmZvcm1SZXNldENhbGxiYWNrKSB7XG4gICAgICAgIGVsZW1lbnQuZm9ybVJlc2V0Q2FsbGJhY2suYXBwbHkoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgZm9ybS4gV2Ugd2lsbCBuZWVkIHRvIGFkZCBzdWJtaXQgYW5kIHJlc2V0IGxpc3RlbmVyc1xuICogaWYgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0LiBJZiB0aGV5IGRvLCBqdXN0IGFkZCB0aGUgbmV3IHJlZiB0byB0aGUgZm9ybS5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZiAtIFRoZSBlbGVtZW50IHJlZiB0aGF0IGluY2x1ZGVzIGludGVybmFsc1xuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm0gLSBUaGUgZm9ybSB0aGUgcmVmIGJlbG9uZ3MgdG9cbiAqIEBwYXJhbSB7RWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzIC0gVGhlIGludGVybmFscyBmb3IgcmVmXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgaW5pdEZvcm0gPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIGZvcm06IEhUTUxGb3JtRWxlbWVudCxcbiAgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFsc1xuKSA9PiB7XG4gIGlmIChmb3JtKSB7XG4gICAgLyoqIFRoaXMgd2lsbCBiZSBhIFdlYWtNYXA8SFRNTEZvcm1FbGVtZW50LCBTZXQ8SFRNTEVsZW1lbnQ+ICovXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChmb3JtKTtcblxuICAgIGlmIChmb3JtRWxlbWVudHMpIHtcbiAgICAgIC8qKiBJZiBmb3JtRWxlbWVudHMgZXhpc3RzLCBhZGQgdG8gaXQgKi9cbiAgICAgIGZvcm1FbGVtZW50cy5hZGQocmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoqIElmIGZvcm1FbGVtZW50cyBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgaXQgYW5kIGFkZCB0byBpdCAqL1xuICAgICAgY29uc3QgaW5pdFNldCA9IG5ldyBTZXQ8SUN1c3RvbUVsZW1lbnQ+KCk7XG4gICAgICBpbml0U2V0LmFkZChyZWYpO1xuICAgICAgZm9ybUVsZW1lbnRzTWFwLnNldChmb3JtLCBpbml0U2V0KTtcblxuICAgICAgLyoqIEFkZCBsaXN0ZW5lcnMgdG8gZW11bGF0ZSB2YWxpZGF0aW9uIGFuZCByZXNldCBiZWhhdmlvciAqL1xuICAgICAgd2lyZVN1Ym1pdExvZ2ljKGZvcm0pO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIGZvcm1SZXNldENhbGxiYWNrKTtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmb3JtSW5wdXRDYWxsYmFjayk7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZvcm1DaGFuZ2VDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgZm9ybXNNYXAuc2V0KGZvcm0sIHsgcmVmLCBpbnRlcm5hbHMgfSk7XG5cbiAgICAvKiogQ2FsbCBmb3JtQXNzb2NpYXRlZENhbGxiYWNrIGlmIGFwcGxpY2FibGUgKi9cbiAgICBpZiAocmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddICYmIHJlZi5mb3JtQXNzb2NpYXRlZENhbGxiYWNrKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVmLmZvcm1Bc3NvY2lhdGVkQ2FsbGJhY2suYXBwbHkocmVmLCBbZm9ybV0pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIHNldEZvcm1WYWxpZGl0eShmb3JtKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSBsb29rIGZvciBhbiBlbGVtZW50J3MgcGFyZW50IGZvcm1cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbSAtIFRoZSBlbGVtZW50IHRvIGxvb2sgZm9yIGEgcGFyZW50IGZvcm1cbiAqIEByZXR1cm4ge0hUTUxGb3JtRWxlbWVudHxudWxsfSAtIFRoZSBwYXJlbnQgZm9ybSwgaWYgb25lIGV4aXN0c1xuICovXG5leHBvcnQgY29uc3QgZmluZFBhcmVudEZvcm0gPSAoZWxlbSkgPT4ge1xuICBsZXQgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuICBpZiAocGFyZW50ICYmIHBhcmVudC50YWdOYW1lICE9PSAnRk9STScpIHtcbiAgICBwYXJlbnQgPSBmaW5kUGFyZW50Rm9ybShwYXJlbnQpO1xuICB9XG4gIHJldHVybiBwYXJlbnQ7XG59O1xuXG4vKipcbiAqIFRocm93IGFuIGVycm9yIGlmIHRoZSBlbGVtZW50IHJlZiBpcyBub3QgZm9ybSBhc3NvY2lhdGVkXG4gKiBAcGFyYW0gcmVmIHtJQ3VzdG9tRWxlbWVudH0gLSBUaGUgZWxlbWVudCB0byBjaGVjayBpZiBpdCBpcyBmb3JtIGFzc29jaWF0ZWRcbiAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IC0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdGhyb3dcbiAqIEBwYXJhbSBFcnJvclR5cGUge2FueX0gLSBUaGUgZXJyb3IgdHlwZSB0byB0aHJvdywgZGVmYXVsdHMgdG8gRE9NRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQgPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIG1lc3NhZ2U6IHN0cmluZyxcbiAgRXJyb3JUeXBlOiBhbnkgPSBET01FeGNlcHRpb25cbik6IHZvaWQgPT4ge1xuICBpZiAoIXJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgIHRocm93IG5ldyBFcnJvclR5cGUobWVzc2FnZSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIGZvciBlYWNoIEhUTUxGb3JtRWxlbWVudC5jaGVja1ZhbGlkaXR5fHJlcG9ydFZhbGlkaXR5XG4gKiB3aWxsIGxvb3Agb3ZlciBhIGZvcm0ncyBhZGRlZCBjb21wb25lbnRzIGFuZCBjYWxsIHRoZSByZXNwZWN0aXZlXG4gKiBtZXRob2QgbW9kaWZ5aW5nIHRoZSBkZWZhdWx0IHJldHVybiB2YWx1ZSBpZiBuZWVkZWRcbiAqIEBwYXJhbSBmb3JtIHtIVE1MRm9ybUVsZW1lbnR9IC0gVGhlIGZvcm0gZWxlbWVudCB0byBydW4gdGhlIG1ldGhvZCBvblxuICogQHBhcmFtIHJldHVyblZhbHVlIHtib29sZWFufSAtIFRoZSBpbml0aWFsIHJlc3VsdCBvZiB0aGUgb3JpZ2luYWwgbWV0aG9kXG4gKiBAcGFyYW0gbWV0aG9kIHsnY2hlY2tWYWxpZGl0eSd8J3JlcG9ydFZhbGlkaXR5J30gLSBUaGUgb3JpZ2luYWwgbWV0aG9kXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVGhlIGZvcm0ncyB2YWxpZGl0eSBzdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgb3ZlcnJpZGVGb3JtTWV0aG9kID0gKFxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnQsXG4gIHJldHVyblZhbHVlOiBib29sZWFuLFxuICBtZXRob2Q6ICdjaGVja1ZhbGlkaXR5JyB8ICdyZXBvcnRWYWxpZGl0eSdcbik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSk7XG5cbiAgLyoqIFNvbWUgZm9ybXMgd29uJ3QgY29udGFpbiBmb3JtIGFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnRzICovXG4gIGlmIChlbGVtZW50cyAmJiBlbGVtZW50cy5zaXplKSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChlbGVtZW50KTtcbiAgICAgIGNvbnN0IHZhbGlkID0gaW50ZXJuYWxzW21ldGhvZF0oKTtcbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xuXG4vKipcbiAqIFdpbGwgdXBncmFkZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIGJ5IGluaXRpYWxpemluZyB0aGVcbiAqIGluc3RhbmNlJ3MgZm9ybSBhbmQgbGFiZWxzLiBUaGlzIGlzIGNhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGlzXG4gKiBlaXRoZXIgY29uc3RydWN0ZWQgb3IgYXBwZW5kZWQgZnJvbSBhIERvY3VtZW50RnJhZ21lbnRcbiAqIEBwYXJhbSByZWYge0lDdXN0b21FbGVtZW50fSAtIFRoZSBjdXN0b20gZWxlbWVudCB0byB1cGdyYWRlXG4gKi9cbmV4cG9ydCBjb25zdCB1cGdyYWRlSW50ZXJuYWxzID0gKHJlZjogSUN1c3RvbUVsZW1lbnQpID0+IHtcbiAgaWYgKHJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQocmVmKTtcbiAgICBjb25zdCB7IGxhYmVscywgZm9ybSB9ID0gaW50ZXJuYWxzO1xuICAgIGluaXRMYWJlbHMocmVmLCBsYWJlbHMpO1xuICAgIGluaXRGb3JtKHJlZiwgZm9ybSwgaW50ZXJuYWxzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayB0byBzZWUgaWYgTXV0YXRpb25PYnNlcnZlciBleGlzdHMgaW4gdGhlIGN1cnJlbnRcbiAqIGV4ZWN1dGlvbiBjb250ZXh0LiBXaWxsIGxpa2VseSByZXR1cm4gZmFsc2Ugb24gdGhlIHNlcnZlclxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdXRhdGlvbk9ic2VydmVyRXhpc3RzKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xufVxuIiwgImltcG9ydCB7IHNldEZvcm1WYWxpZGl0eSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKiogRW11bGF0ZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgVmFsaWRpdHlTdGF0ZSBvYmplY3QgKi9cbmV4cG9ydCBjbGFzcyBWYWxpZGl0eVN0YXRlIGltcGxlbWVudHMgZ2xvYmFsVGhpcy5WYWxpZGl0eVN0YXRlIHtcbiAgYmFkSW5wdXQgPSBmYWxzZTtcbiAgY3VzdG9tRXJyb3IgPSBmYWxzZTtcbiAgcGF0dGVybk1pc21hdGNoID0gZmFsc2U7XG4gIHJhbmdlT3ZlcmZsb3cgPSBmYWxzZTtcbiAgcmFuZ2VVbmRlcmZsb3cgPSBmYWxzZTtcbiAgc3RlcE1pc21hdGNoID0gZmFsc2U7XG4gIHRvb0xvbmcgPSBmYWxzZTtcbiAgdG9vU2hvcnQgPSBmYWxzZTtcbiAgdHlwZU1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkID0gdHJ1ZTtcbiAgdmFsdWVNaXNzaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgT2JqZWN0LnNlYWwodGhpcyk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldCBhIFZhbGlkaXR5U3RhdGUgb2JqZWN0IGJhY2sgdG8gdmFsaWRcbiAqIEBwYXJhbSB7VmFsaWRpdHlTdGF0ZX0gdmFsaWRpdHlPYmplY3QgLSBUaGUgb2JqZWN0IHRvIG1vZGlmeVxuICogQHJldHVybiB7VmFsaWRpdHlTdGF0ZX0gLSBUaGUgbW9kaWZpZWQgVmFsaWRpdHlTdGF0ZU9iamVjdFxuICovXG5leHBvcnQgY29uc3Qgc2V0VmFsaWQgPSAodmFsaWRpdHlPYmplY3Q6IFZhbGlkaXR5U3RhdGUpOiBWYWxpZGl0eVN0YXRlID0+IHtcbiAgdmFsaWRpdHlPYmplY3QuYmFkSW5wdXQgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QuY3VzdG9tRXJyb3IgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QucGF0dGVybk1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnJhbmdlT3ZlcmZsb3cgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QucmFuZ2VVbmRlcmZsb3cgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3Quc3RlcE1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnRvb0xvbmcgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QudG9vU2hvcnQgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QudHlwZU1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnZhbGlkID0gdHJ1ZTtcbiAgdmFsaWRpdHlPYmplY3QudmFsdWVNaXNzaW5nID0gZmFsc2U7XG4gIHJldHVybiB2YWxpZGl0eU9iamVjdDtcbn07XG5cbi8qKlxuICogUmVjb25jaWxlIGEgVmFsaWRpdHlTdGF0ZSBvYmplY3Qgd2l0aCBhIG5ldyBzdGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7VmFsaWRpdHlTdGF0ZX0gLSBUaGUgYmFzZSBvYmplY3QgdG8gcmVjb25jaWxlIHdpdGggbmV3IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gLSBBIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3QgdG8gb3ZlcnJpZGUgdGhlIG9yaWdpbmFsXG4gKiBAcmV0dXJuIHtWYWxpZGl0eVN0YXRlfSAtIFRoZSB1cGRhdGVkIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCByZWNvbmNpbGVWYWxpZGl0eSA9IChcbiAgdmFsaWRpdHlPYmplY3Q6IFZhbGlkaXR5U3RhdGUsXG4gIG5ld1N0YXRlOiBQYXJ0aWFsPFZhbGlkaXR5U3RhdGU+LFxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnRcbik6IFZhbGlkaXR5U3RhdGUgPT4ge1xuICB2YWxpZGl0eU9iamVjdC52YWxpZCA9IGlzVmFsaWQobmV3U3RhdGUpO1xuICBPYmplY3Qua2V5cyhuZXdTdGF0ZSkuZm9yRWFjaCgoa2V5KSA9PiAodmFsaWRpdHlPYmplY3Rba2V5XSA9IG5ld1N0YXRlW2tleV0pKTtcbiAgaWYgKGZvcm0pIHtcbiAgICBzZXRGb3JtVmFsaWRpdHkoZm9ybSk7XG4gIH1cbiAgcmV0dXJuIHZhbGlkaXR5T2JqZWN0O1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3Qgc2hvdWxkIGJlIHZhbGlkXG4gKiBAcGFyYW0ge09iamVjdH0gLSBBIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IC0gU2hvdWxkIHRoZSBuZXcgb2JqZWN0IGJlIHZhbGlkXG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkID0gKHZhbGlkaXR5U3RhdGU6IFBhcnRpYWw8VmFsaWRpdHlTdGF0ZT4pOiBib29sZWFuID0+IHtcbiAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgZm9yIChsZXQga2V5IGluIHZhbGlkaXR5U3RhdGUpIHtcbiAgICBpZiAoa2V5ICE9PSAndmFsaWQnICYmIHZhbGlkaXR5U3RhdGVba2V5XSAhPT0gZmFsc2UpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWxpZDtcbn07XG4iLCAiaW1wb3J0IHsgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuLyoqIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIHJlZiBmb3IgdGVoIEN1c3RvbVN0YXRlU2V0ICovXG5jb25zdCBjdXN0b21TdGF0ZU1hcCA9IG5ldyBXZWFrTWFwPEN1c3RvbVN0YXRlU2V0LCBJQ3VzdG9tRWxlbWVudD4oKTtcblxuZnVuY3Rpb24gYWRkU3RhdGUocmVmOiBJQ3VzdG9tRWxlbWVudCwgc3RhdGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgcmVmLnRvZ2dsZUF0dHJpYnV0ZShzdGF0ZU5hbWUsIHRydWUpO1xuICBpZiAocmVmLnBhcnQpIHtcbiAgICByZWYucGFydC5hZGQoc3RhdGVOYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDdXN0b21TdGF0ZSA9IGAtLSR7c3RyaW5nfWA7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21TdGF0ZVNldCBleHRlbmRzIFNldDxDdXN0b21TdGF0ZT4ge1xuICBzdGF0aWMgZ2V0IGlzUG9seWZpbGxlZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJlZjogSUN1c3RvbUVsZW1lbnQpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghcmVmIHx8ICFyZWYudGFnTmFtZSB8fCByZWYudGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbGxlZ2FsIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuXG4gICAgY3VzdG9tU3RhdGVNYXAuc2V0KHRoaXMsIHJlZik7XG4gIH1cblxuICBhZGQoc3RhdGU6IEN1c3RvbVN0YXRlKSB7XG4gICAgaWYgKCEvXi0tLy50ZXN0KHN0YXRlKSB8fCB0eXBlb2Ygc3RhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ2FkZCcgb24gJ0N1c3RvbVN0YXRlU2V0JzogVGhlIHNwZWNpZmllZCB2YWx1ZSAke3N0YXRlfSBtdXN0IHN0YXJ0IHdpdGggJy0tJy5gXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5hZGQoc3RhdGUpO1xuICAgIGNvbnN0IHJlZiA9IGN1c3RvbVN0YXRlTWFwLmdldCh0aGlzKTtcbiAgICBjb25zdCBzdGF0ZU5hbWUgPSBgc3RhdGUke3N0YXRlfWA7XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IGFkZCB0aGUgc3RhdGUgaW1tZWRpYXRlbHkgaWYgdGhlIHJlZiBpcyBjb25uZWN0ZWQgdG8gdGhlIERPTTtcbiAgICAgKiBvdGhlcndpc2UsIHdhaXQgYSB0aWNrIGJlY2F1c2UgdGhlIGVsZW1lbnQgaXMgbGlrZWx5IGJlaW5nIGNvbnN0cnVjdGVkXG4gICAgICogYnkgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBhbmQgd291bGQgdGhyb3cgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgIGFkZFN0YXRlKHJlZiwgc3RhdGVOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFkZFN0YXRlKHJlZiwgc3RhdGVOYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBmb3IgKGxldCBbZW50cnldIG9mIHRoaXMuZW50cmllcygpKSB7XG4gICAgICB0aGlzLmRlbGV0ZShlbnRyeSk7XG4gICAgfVxuICAgIHN1cGVyLmNsZWFyKCk7XG4gIH1cblxuICBkZWxldGUoc3RhdGU6IEN1c3RvbVN0YXRlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuZGVsZXRlKHN0YXRlKTtcbiAgICBjb25zdCByZWYgPSBjdXN0b21TdGF0ZU1hcC5nZXQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHRvZ2dsZSB0aGUgc3RhdGUvYXR0ciBpbW1lZGlhdGVseSBpZiB0aGUgcmVmIGlzIGNvbm5lY3RlZCB0byB0aGUgRE9NO1xuICAgICAqIG90aGVyd2lzZSwgd2FpdCBhIHRpY2sgYmVjYXVzZSB0aGUgZWxlbWVudCBpcyBsaWtlbHkgYmVpbmcgY29uc3RydWN0ZWRcbiAgICAgKiBieSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGFuZCB3b3VsZCB0aHJvdyBvdGhlcndpc2UuXG4gICAgICovXG4gICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZShgc3RhdGUke3N0YXRlfWAsIGZhbHNlKTtcbiAgICAgIGlmIChyZWYucGFydCkge1xuICAgICAgICByZWYucGFydC5yZW1vdmUoYHN0YXRlJHtzdGF0ZX1gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoYHN0YXRlJHtzdGF0ZX1gLCBmYWxzZSk7XG4gICAgICAgIGlmIChyZWYucGFydCkge1xuICAgICAgICAgIHJlZi5wYXJ0LnJlbW92ZShgc3RhdGUke3N0YXRlfWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCAiZXhwb3J0IGNsYXNzIEhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uIGltcGxlbWVudHMgZ2xvYmFsVGhpcy5IVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbiB7XG4gIHJlYWRvbmx5ICNlbGVtZW50cztcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgIHRoaXMuI2VsZW1lbnRzID0gZWxlbWVudHM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgICB0aGlzW2ldID0gZWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgIHRoaXNbZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKV0gPSBlbGVtZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBbaW5kZXg6IG51bWJlcl06IEVsZW1lbnQ7XG5cbiAgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLiNlbGVtZW50cy5sZW5ndGg7XG4gIH1cblxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gdGhpcy4jZWxlbWVudHNbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICB9XG5cbiAgaXRlbShpKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXNbaV0gPT0gbnVsbCA/IG51bGwgOiB0aGlzW2ldO1xuICB9XG5cbiAgbmFtZWRJdGVtKG5hbWUpOiBFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpc1tuYW1lXSA9PSBudWxsID8gbnVsbCA6IHRoaXNbbmFtZV07XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbiB9IGZyb20gJy4vSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24uanMnO1xuaW1wb3J0IHsgZm9ybUVsZW1lbnRzTWFwIH0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IG92ZXJyaWRlRm9ybU1ldGhvZCB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFBhdGNoIHRoZSBIVE1MRWxlbWVudCBwcm90b3R5cGVcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHBhdGNoZXMgY2hlY2tWYWxpZGl0eSwgcmVwb3J0VmFsaWRpdHkgYW5kIGVsZW1lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEZvcm1Qcm90b3R5cGUoKTogdm9pZCB7XG4gIGNvbnN0IGNoZWNrVmFsaWRpdHkgPSBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmNoZWNrVmFsaWRpdHk7XG4gIEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUuY2hlY2tWYWxpZGl0eSA9IGNoZWNrVmFsaWRpdHlPdmVycmlkZTtcblxuICBjb25zdCByZXBvcnRWYWxpZGl0eSA9IEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUucmVwb3J0VmFsaWRpdHk7XG4gIEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUucmVwb3J0VmFsaWRpdHkgPSByZXBvcnRWYWxpZGl0eU92ZXJyaWRlO1xuXG4gIGZ1bmN0aW9uIGNoZWNrVmFsaWRpdHlPdmVycmlkZSguLi5hcmdzKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldHVyblZhbHVlID0gY2hlY2tWYWxpZGl0eS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICByZXR1cm4gb3ZlcnJpZGVGb3JtTWV0aG9kKHRoaXMsIHJldHVyblZhbHVlLCAnY2hlY2tWYWxpZGl0eScpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwb3J0VmFsaWRpdHlPdmVycmlkZSguLi5hcmdzKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldHVyblZhbHVlID0gcmVwb3J0VmFsaWRpdHkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgcmV0dXJuIG92ZXJyaWRlRm9ybU1ldGhvZCh0aGlzLCByZXR1cm5WYWx1ZSwgJ3JlcG9ydFZhbGlkaXR5Jyk7XG4gIH1cblxuICBjb25zdCB7IGdldCB9ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLCAnZWxlbWVudHMnKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUsICdlbGVtZW50cycsIHtcbiAgICBnZXQoLi4uYXJncykge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBnZXQuY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgICAgIGNvbnN0IHBvbHlmaWxsZWRFbGVtZW50cyA9IEFycmF5LmZyb20oZm9ybUVsZW1lbnRzTWFwLmdldCh0aGlzKSB8fCBbXSk7XG5cbiAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBwb2x5ZmlsbGVkIGVsZW1lbnRzLCByZXR1cm4gdGhlIG5hdGl2ZSBlbGVtZW50cyBjb2xsZWN0aW9uXG4gICAgICBpZiAocG9seWZpbGxlZEVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgICB9XG5cbiAgICAgIC8vIE1lcmdlIHRoZSBuYXRpdmUgZWxlbWVudHMgd2l0aCB0aGUgcG9seWZpbGxlZCBlbGVtZW50c1xuICAgICAgLy8gYW5kIG9yZGVyIHRoZW0gYnkgdGhlaXIgcG9zaXRpb24gaW4gdGhlIERPTVxuICAgICAgY29uc3Qgb3JkZXJlZEVsZW1lbnRzID0gQXJyYXkuZnJvbShlbGVtZW50cylcbiAgICAgICAgLmNvbmNhdChwb2x5ZmlsbGVkRWxlbWVudHMpXG4gICAgICAgIC5zb3J0KChhOiBFbGVtZW50LCBiOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpICYgMiA/IDEgOiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmV3IEhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uKG9yZGVyZWRFbGVtZW50cyk7XG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgY29ubmVjdGVkQ2FsbGJhY2tNYXAsXG4gIGludGVybmFsc01hcCxcbiAgcmVmTWFwLFxuICByZWZWYWx1ZU1hcCxcbiAgc2hhZG93SG9zdHNNYXAsXG4gIHNoYWRvd1Jvb3RNYXAsXG4gIHZhbGlkYXRpb25BbmNob3JNYXAsXG4gIHZhbGlkaXR5TWFwLFxuICB2YWxpZGF0aW9uTWVzc2FnZU1hcCxcbiAgdmFsaWRpdHlVcGdyYWRlTWFwLFxufSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlSGlkZGVuSW5wdXQsXG4gIGZpbmRQYXJlbnRGb3JtLFxuICBpbml0UmVmLFxuICBtdXRhdGlvbk9ic2VydmVyRXhpc3RzLFxuICByZW1vdmVIaWRkZW5JbnB1dHMsXG4gIHNldERpc2FibGVkLFxuICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQsXG4gIHVwZ3JhZGVJbnRlcm5hbHMsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgaW5pdEFvbSB9IGZyb20gJy4vYW9tLmpzJztcbmltcG9ydCB7IFZhbGlkaXR5U3RhdGUsIHJlY29uY2lsZVZhbGlkaXR5LCBzZXRWYWxpZCB9IGZyb20gJy4vVmFsaWRpdHlTdGF0ZS5qcyc7XG5pbXBvcnQgeyBkZWZlclVwZ3JhZGUsIG9ic2VydmVyQ2FsbGJhY2ssIG9ic2VydmVyQ29uZmlnIH0gZnJvbSAnLi9tdXRhdGlvbi1vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgSUVsZW1lbnRJbnRlcm5hbHMsIElDdXN0b21FbGVtZW50LCBMYWJlbHNMaXN0IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5pbXBvcnQgeyBDdXN0b21TdGF0ZVNldCB9IGZyb20gJy4vQ3VzdG9tU3RhdGVTZXQuanMnO1xuaW1wb3J0IHsgcGF0Y2hGb3JtUHJvdG90eXBlIH0gZnJvbSAnLi9wYXRjaC1mb3JtLXByb3RvdHlwZS5qcyc7XG5pbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gJ2xpdC1odG1sL2lzLXNlcnZlci5qcyc7XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50SW50ZXJuYWxzIGltcGxlbWVudHMgSUVsZW1lbnRJbnRlcm5hbHMge1xuICBhcmlhQXRvbWljOiBzdHJpbmc7XG4gIGFyaWFBdXRvQ29tcGxldGU6IHN0cmluZztcbiAgYXJpYUJ1c3k6IHN0cmluZztcbiAgYXJpYUNoZWNrZWQ6IHN0cmluZztcbiAgYXJpYUNvbENvdW50OiBzdHJpbmc7XG4gIGFyaWFDb2xJbmRleDogc3RyaW5nO1xuICBhcmlhQ29sSW5kZXhUZXh0OiBzdHJpbmc7XG4gIGFyaWFDb2xTcGFuOiBzdHJpbmc7XG4gIGFyaWFDdXJyZW50OiBzdHJpbmc7XG4gIGFyaWFEaXNhYmxlZDogc3RyaW5nO1xuICBhcmlhRXhwYW5kZWQ6IHN0cmluZztcbiAgYXJpYUhhc1BvcHVwOiBzdHJpbmc7XG4gIGFyaWFIaWRkZW46IHN0cmluZztcbiAgYXJpYUludmFsaWQ6IHN0cmluZztcbiAgYXJpYUtleVNob3J0Y3V0czogc3RyaW5nO1xuICBhcmlhTGFiZWw6IHN0cmluZztcbiAgYXJpYUxldmVsOiBzdHJpbmc7XG4gIGFyaWFMaXZlOiBzdHJpbmc7XG4gIGFyaWFNb2RhbDogc3RyaW5nO1xuICBhcmlhTXVsdGlMaW5lOiBzdHJpbmc7XG4gIGFyaWFNdWx0aVNlbGVjdGFibGU6IHN0cmluZztcbiAgYXJpYU9yaWVudGF0aW9uOiBzdHJpbmc7XG4gIGFyaWFQbGFjZWhvbGRlcjogc3RyaW5nO1xuICBhcmlhUG9zSW5TZXQ6IHN0cmluZztcbiAgYXJpYVByZXNzZWQ6IHN0cmluZztcbiAgYXJpYVJlYWRPbmx5OiBzdHJpbmc7XG4gIGFyaWFSZWxldmFudDogc3RyaW5nO1xuICBhcmlhUmVxdWlyZWQ6IHN0cmluZztcbiAgYXJpYVJvbGVEZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhcmlhUm93Q291bnQ6IHN0cmluZztcbiAgYXJpYVJvd0luZGV4OiBzdHJpbmc7XG4gIGFyaWFSb3dJbmRleFRleHQ6IHN0cmluZztcbiAgYXJpYVJvd1NwYW46IHN0cmluZztcbiAgYXJpYVNlbGVjdGVkOiBzdHJpbmc7XG4gIGFyaWFTZXRTaXplOiBzdHJpbmc7XG4gIGFyaWFTb3J0OiBzdHJpbmc7XG4gIGFyaWFWYWx1ZU1heDogc3RyaW5nO1xuICBhcmlhVmFsdWVNaW46IHN0cmluZztcbiAgYXJpYVZhbHVlTm93OiBzdHJpbmc7XG4gIGFyaWFWYWx1ZVRleHQ6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuXG4gIHN0YXRlczogQ3VzdG9tU3RhdGVTZXQ7XG5cbiAgc3RhdGljIGdldCBpc1BvbHlmaWxsZWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyZWY6IElDdXN0b21FbGVtZW50KSB7XG4gICAgaWYgKCFyZWYgfHwgIXJlZi50YWdOYW1lIHx8IHJlZi50YWdOYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0lsbGVnYWwgY29uc3RydWN0b3InKTtcbiAgICB9XG4gICAgY29uc3Qgcm9vdE5vZGUgPSByZWYuZ2V0Um9vdE5vZGUoKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IG5ldyBWYWxpZGl0eVN0YXRlKCk7XG4gICAgdGhpcy5zdGF0ZXMgPSBuZXcgQ3VzdG9tU3RhdGVTZXQocmVmKTtcbiAgICByZWZNYXAuc2V0KHRoaXMsIHJlZik7XG4gICAgdmFsaWRpdHlNYXAuc2V0KHRoaXMsIHZhbGlkaXR5KTtcbiAgICBpbnRlcm5hbHNNYXAuc2V0KHJlZiwgdGhpcyk7XG4gICAgaW5pdEFvbShyZWYsIHRoaXMpO1xuICAgIGluaXRSZWYocmVmLCB0aGlzKTtcbiAgICBPYmplY3Quc2VhbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIElmIGFwcGVuZGVkIGZyb20gYSBEb2N1bWVudEZyYWdtZW50LCB3YWl0IHVudGlsIGl0IGlzIGNvbm5lY3RlZFxuICAgICAqIGJlZm9yZSBhdHRlbXB0aW5nIHRvIHVwZ3JhZGUgdGhlIGludGVybmFscyBpbnN0YW5jZVxuICAgICAqL1xuICAgIGlmIChyb290Tm9kZSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgIGRlZmVyVXBncmFkZShyb290Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgaW4gYSB2YWxpZCBzdGF0ZVxuICAgKi9cbiAgY2hlY2tWYWxpZGl0eSgpOiBib29sZWFuIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnY2hlY2tWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIC8qKiBJZiB0aGUgZWxlbWVudCB3aWxsIG5vdCB2YWxpZGF0ZSwgaXQgaXMgbmVjZXNzYXJpbHkgdmFsaWQgYnkgZGVmYXVsdCAqL1xuICAgIGlmICghdGhpcy53aWxsVmFsaWRhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICBpZiAoIXZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBjb25zdCB2YWxpZGl0eUV2ZW50ID0gbmV3IEV2ZW50KCdpbnZhbGlkJywge1xuICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgY29tcG9zZWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICByZWYuZGlzcGF0Y2hFdmVudCh2YWxpZGl0eUV2ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkaXR5LnZhbGlkO1xuICB9XG5cbiAgLyoqIFRoZSBmb3JtIGVsZW1lbnQgdGhlIGN1c3RvbSBlbGVtZW50IGlzIGFzc29jaWF0ZWQgd2l0aCAqL1xuICBnZXQgZm9ybSgpOiBIVE1MRm9ybUVsZW1lbnQge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAnZm9ybScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgbGV0IGZvcm07XG4gICAgaWYgKHJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSA9PT0gdHJ1ZSkge1xuICAgICAgZm9ybSA9IGZpbmRQYXJlbnRGb3JtKHJlZik7XG4gICAgfVxuICAgIHJldHVybiBmb3JtO1xuICB9XG5cbiAgLyoqIEEgbGlzdCBvZiBhbGwgcmVsYXRpdmUgZm9ybSBsYWJlbHMgZm9yIHRoaXMgZWxlbWVudCAqL1xuICBnZXQgbGFiZWxzKCk6IExhYmVsc0xpc3Qge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAnbGFiZWxzJyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBjb25zdCBpZCA9IHJlZi5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgY29uc3QgaG9zdFJvb3QgPSByZWYuZ2V0Um9vdE5vZGUoKSBhcyBFbGVtZW50O1xuICAgIGlmIChob3N0Um9vdCAmJiBpZCkge1xuICAgICAgcmV0dXJuIGhvc3RSb290LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTExhYmVsRWxlbWVudD4oYFtmb3I9XCIke2lkfVwiXWApIGFzIHVua25vd24gYXMgTGFiZWxzTGlzdDtcbiAgICB9XG4gICAgcmV0dXJuIFtdIGFzIHVua25vd24gYXMgTGFiZWxzTGlzdDtcbiAgfVxuXG4gIC8qKiBXaWxsIHJlcG9ydCB0aGUgZWxlbWVudHMgdmFsaWRpdHkgc3RhdGUgKi9cbiAgcmVwb3J0VmFsaWRpdHkoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3JlcG9ydFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgLyoqIElmIHRoZSBlbGVtZW50IHdpbGwgbm90IHZhbGlkYXRlLCBpdCBpcyB2YWxpZCBieSBkZWZhdWx0ICovXG4gICAgaWYgKCF0aGlzLndpbGxWYWxpZGF0ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHZhbGlkID0gdGhpcy5jaGVja1ZhbGlkaXR5KCk7XG4gICAgY29uc3QgYW5jaG9yID0gdmFsaWRhdGlvbkFuY2hvck1hcC5nZXQodGhpcyk7XG4gICAgaWYgKGFuY2hvciAmJiAhcmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3JlcG9ydFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCF2YWxpZCAmJiBhbmNob3IpIHtcbiAgICAgIHJlZi5mb2N1cygpO1xuICAgICAgYW5jaG9yLmZvY3VzKCk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBlbGVtZW50J3MgdmFsdWUgd2l0aGluIHRoZSBmb3JtICovXG4gIHNldEZvcm1WYWx1ZSh2YWx1ZTogc3RyaW5nIHwgRm9ybURhdGEgfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldEZvcm1WYWx1ZScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIHJlbW92ZUhpZGRlbklucHV0cyh0aGlzKTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpKSB7XG4gICAgICBpZiAocmVmLmdldEF0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgIGNvbnN0IGhpZGRlbklucHV0ID0gY3JlYXRlSGlkZGVuSW5wdXQocmVmLCB0aGlzKTtcbiAgICAgICAgaGlkZGVuSW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgQXJyYXkuZnJvbSh2YWx1ZSlcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAuZm9yRWFjaCgoW2Zvcm1EYXRhS2V5LCBmb3JtRGF0YVZhbHVlXSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgZm9ybURhdGFWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGhpZGRlbklucHV0ID0gY3JlYXRlSGlkZGVuSW5wdXQocmVmLCB0aGlzKTtcbiAgICAgICAgICAgIGhpZGRlbklucHV0Lm5hbWUgPSBmb3JtRGF0YUtleTtcbiAgICAgICAgICAgIGhpZGRlbklucHV0LnZhbHVlID0gZm9ybURhdGFWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWZWYWx1ZU1hcC5zZXQocmVmLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZWxlbWVudCdzIHZhbGlkaXR5LiBUaGUgZmlyc3QgYXJndW1lbnQgaXMgYSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gICAqIHJlZmxlY3RpbmcgdGhlIGNoYW5nZXMgdG8gYmUgbWFkZSB0byB0aGUgZWxlbWVudCdzIHZhbGlkaXR5LiBJZiB0aGUgZWxlbWVudCBpcyBpbnZhbGlkLFxuICAgKiB0aGUgc2Vjb25kIGFyZ3VtZW50IHNldHMgdGhlIGVsZW1lbnQncyB2YWxpZGF0aW9uIG1lc3NhZ2UuXG4gICAqXG4gICAqIElmIHRoZSBmaWVsZCBpcyB2YWxpZCBhbmQgYSBtZXNzYWdlIGlzIHNwZWNpZmllZCwgdGhlIG1ldGhvZCB3aWxsIHRocm93IGEgVHlwZUVycm9yLlxuICAgKi9cbiAgc2V0VmFsaWRpdHkoXG4gICAgdmFsaWRpdHlDaGFuZ2VzOiBQYXJ0aWFsPGdsb2JhbFRoaXMuVmFsaWRpdHlTdGF0ZT4sXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2U/OiBzdHJpbmcsXG4gICAgYW5jaG9yPzogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgaWYgKCF2YWxpZGl0eUNoYW5nZXMpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgdmFsaWRhdGlvbkFuY2hvck1hcC5zZXQodGhpcywgYW5jaG9yKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICBjb25zdCB2YWxpZGl0eUNoYW5nZXNPYmo6IFBhcnRpYWw8VmFsaWRpdHlTdGF0ZT4gPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWxpZGl0eUNoYW5nZXMpIHtcbiAgICAgIHZhbGlkaXR5Q2hhbmdlc09ialtrZXldID0gdmFsaWRpdHlDaGFuZ2VzW2tleV07XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyh2YWxpZGl0eUNoYW5nZXNPYmopLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0VmFsaWQodmFsaWRpdHkpO1xuICAgIH1cbiAgICBjb25zdCBjaGVjayA9IHsgLi4udmFsaWRpdHksIC4uLnZhbGlkaXR5Q2hhbmdlc09iaiB9O1xuICAgIGRlbGV0ZSBjaGVjay52YWxpZDtcbiAgICBjb25zdCB7IHZhbGlkIH0gPSByZWNvbmNpbGVWYWxpZGl0eSh2YWxpZGl0eSwgY2hlY2ssIHRoaXMuZm9ybSk7XG5cbiAgICBpZiAoIXZhbGlkICYmICF2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdzZXRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgc2Vjb25kIGFyZ3VtZW50IHNob3VsZCBub3QgYmUgZW1wdHkgaWYgb25lIG9yIG1vcmUgZmxhZ3MgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IGFyZSB0cnVlLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHZhbGlkYXRpb25NZXNzYWdlTWFwLnNldCh0aGlzLCB2YWxpZCA/ICcnIDogdmFsaWRhdGlvbk1lc3NhZ2UpO1xuXG4gICAgLy8gY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBob3N0IGVsZW1lbnQgaXMgY29ubmVjdGVkIGJlZm9yZSBhZGRpbmcgYXR0cmlidXRlc1xuICAgIC8vIGJlY2F1c2Ugc2FmYXJpIGRvZXNudCBhbGxvdyBlbGVtZW50cyB0byBoYXZlIGF0dHJpYnV0ZXMgYWRkZWQgaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLWludmFsaWQnLCAhdmFsaWQpO1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgdmFsaWQpO1xuICAgICAgcmVmLnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgYCR7IXZhbGlkfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGl0eVVwZ3JhZGVNYXAuc2V0KHJlZiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNoYWRvd1Jvb3QoKTogU2hhZG93Um9vdCB8IG51bGwge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IHNoYWRvd1Jvb3RNYXAuZ2V0KHJlZik7XG4gICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgIHJldHVybiBzaGFkb3dSb290O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBUaGUgZWxlbWVudCdzIHZhbGlkYXRpb24gbWVzc2FnZSBzZXQgZHVyaW5nIGEgY2FsbCB0byBFbGVtZW50SW50ZXJuYWxzLnNldFZhbGlkaXR5ICovXG4gIGdldCB2YWxpZGF0aW9uTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAndmFsaWRhdGlvbk1lc3NhZ2UnIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIHJldHVybiB2YWxpZGF0aW9uTWVzc2FnZU1hcC5nZXQodGhpcyk7XG4gIH1cblxuICAvKiogVGhlIGN1cnJlbnQgdmFsaWRpdHkgc3RhdGUgb2YgdGhlIG9iamVjdCAqL1xuICBnZXQgdmFsaWRpdHkoKTogZ2xvYmFsVGhpcy5WYWxpZGl0eVN0YXRlIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ3ZhbGlkaXR5JyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICByZXR1cm4gdmFsaWRpdHk7XG4gIH1cblxuICAvKiogSWYgdHJ1ZSB0aGUgZWxlbWVudCB3aWxsIHBhcnRpY2lwYXRlIGluIGEgZm9ybSdzIGNvbnN0cmFpbnQgdmFsaWRhdGlvbi4gKi9cbiAgZ2V0IHdpbGxWYWxpZGF0ZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ3dpbGxWYWxpZGF0ZScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgaWYgKHJlZi5kaXNhYmxlZCB8fCByZWYuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IHJlZi5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5JykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLy8gLS0tIERpc2FibGluZyB0aGlzIHR5cGUgZGVjbGFyYXRpb24gdG8gYXZvaWQgY29uZmxpY3Qgd2l0aCBleHRlcm5hbCBlbGVtZW50LWludGVybmFscy1wb2x5ZmlsbCB0eXBlcyAtLS1cbi8vIGRlY2xhcmUgZ2xvYmFsIHtcbi8vICAgaW50ZXJmYWNlIEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3RvciB7XG4vLyAgICAgZm9ybUFzc29jaWF0ZWQ/OiBib29sZWFuO1xuLy8gICB9XG5cbi8vICAgaW50ZXJmYWNlIFdpbmRvdyB7XG4vLyAgICAgRWxlbWVudEludGVybmFsczogdHlwZW9mIEVsZW1lbnRJbnRlcm5hbHM7XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudEludGVybmFsc1N1cHBvcnRlZCgpOiBib29sZWFuIHtcbiAgaWYgKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgIXdpbmRvdy5FbGVtZW50SW50ZXJuYWxzIHx8XG4gICAgIUhUTUxFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hJbnRlcm5hbHNcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2xhc3MgRWxlbWVudEludGVybmFsc0ZlYXR1cmVEZXRlY3Rpb24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuaW50ZXJuYWxzID0gdGhpcy5hdHRhY2hJbnRlcm5hbHMoKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcmFuZG9tTmFtZSA9IGBlbGVtZW50LWludGVybmFscy1mZWF0dXJlLWRldGVjdGlvbi0ke01hdGgucmFuZG9tKClcbiAgICAudG9TdHJpbmcoMzYpXG4gICAgLnJlcGxhY2UoL1teYS16XSsvZywgJycpfWA7XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZShyYW5kb21OYW1lLCBFbGVtZW50SW50ZXJuYWxzRmVhdHVyZURldGVjdGlvbik7XG4gIGNvbnN0IGZlYXR1cmVEZXRlY3Rpb25FbGVtZW50ID0gbmV3IEVsZW1lbnRJbnRlcm5hbHNGZWF0dXJlRGV0ZWN0aW9uKCk7XG4gIHJldHVybiBbXG4gICAgJ3NoYWRvd1Jvb3QnLFxuICAgICdmb3JtJyxcbiAgICAnd2lsbFZhbGlkYXRlJyxcbiAgICAndmFsaWRpdHknLFxuICAgICd2YWxpZGF0aW9uTWVzc2FnZScsXG4gICAgJ2xhYmVscycsXG4gICAgJ3NldEZvcm1WYWx1ZScsXG4gICAgJ3NldFZhbGlkaXR5JyxcbiAgICAnY2hlY2tWYWxpZGl0eScsXG4gICAgJ3JlcG9ydFZhbGlkaXR5JyxcbiAgXS5ldmVyeSgocHJvcCkgPT4gcHJvcCBpbiBmZWF0dXJlRGV0ZWN0aW9uRWxlbWVudC5pbnRlcm5hbHMpO1xufVxuXG4vLyBPbmx5IGluY2x1ZGVzIHRoaXMgcG9seWZpbGwgaWYgd2UgYXJlIGluIGEgamVzdCBydW5uZXIgb3Igbm90IGluIFNTUlxuaWYgKFxuICAhaXNTZXJ2ZXIgfHxcbiAgKChwcm9jZXNzIGFzIGFueSk/LmVudi5KRVNUX1dPUktFUl9JRCAhPT0gdW5kZWZpbmVkICYmIChwcm9jZXNzIGFzIGFueSk/LmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKVxuKSB7XG4gIGlmICghaXNFbGVtZW50SW50ZXJuYWxzU3VwcG9ydGVkKCkpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8qKiBAdHMtZXhwZWN0LWVycm9yOiB3ZSBuZWVkIHRvIHJlcGxhY2UgdGhlIGRlZmF1bHQgRWxlbWVudEludGVybmFscyAqL1xuICAgICAgd2luZG93LkVsZW1lbnRJbnRlcm5hbHMgPSBFbGVtZW50SW50ZXJuYWxzO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgZGVmaW5lID0gQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5kZWZpbmU7XG4gICAgICBDdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlLmRlZmluZSA9IGZ1bmN0aW9uIChuYW1lLCBjb25zdHJ1Y3Rvciwgb3B0aW9ucykge1xuICAgICAgICBpZiAoY29uc3RydWN0b3IuZm9ybUFzc29jaWF0ZWQpIHtcbiAgICAgICAgICBjb25zdCBjb25uZWN0ZWRDYWxsYmFjayA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaztcbiAgICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWNvbm5lY3RlZENhbGxiYWNrTWFwLmhhcyh0aGlzKSkge1xuICAgICAgICAgICAgICBjb25uZWN0ZWRDYWxsYmFja01hcC5zZXQodGhpcywgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgc2V0RGlzYWJsZWQodGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbm5lY3RlZENhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2suYXBwbHkodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhbHdheXMgdXBncmFkZUludGVybmFscyBpbiBjb25uZWN0ZWRDYWxsYmFjayBpbnN0ZWFkIG9mIGNvbnN0cnVjdG9yXG4gICAgICAgICAgICB1cGdyYWRlSW50ZXJuYWxzKHRoaXMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBkZWZpbmUuY2FsbCh0aGlzLCBuYW1lLCBjb25zdHJ1Y3Rvciwgb3B0aW9ucyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gYSBjdXN0b20gZWxlbWVudC4gQ2FsbGluZyB0aGlzIG1ldGhvZFxuICAgICAqIG9uIGEgYnVpbHQtaW4gZWxlbWVudCB3aWxsIHRocm93IGFuIGVycm9yLlxuICAgICAqL1xuICAgIGlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzID0gZnVuY3Rpb24gKCk6IElFbGVtZW50SW50ZXJuYWxzIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhZ05hbWUpIHtcbiAgICAgICAgICAvKiogVGhpcyBoYXBwZW5zIGluIHRoZSBMaXRTU1IgZW52aXJvbm1lbnQuIEhlcmUgd2UgY2FuIGdlbmVyYWxseSBpZ25vcmUgaW50ZXJuYWxzIGZvciBub3cgKi9cbiAgICAgICAgICByZXR1cm4ge30gYXMgb2JqZWN0IGFzIElFbGVtZW50SW50ZXJuYWxzO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdhdHRhY2hJbnRlcm5hbHMnIG9uICdIVE1MRWxlbWVudCc6IFVuYWJsZSB0byBhdHRhY2ggRWxlbWVudEludGVybmFscyB0byBub24tY3VzdG9tIGVsZW1lbnRzLmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnRlcm5hbHNNYXAuaGFzKHRoaXMpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgICAgIGBET01FeGNlcHRpb246IEZhaWxlZCB0byBleGVjdXRlICdhdHRhY2hJbnRlcm5hbHMnIG9uICdIVE1MRWxlbWVudCc6IEVsZW1lbnRJbnRlcm5hbHMgZm9yIHRoZSBzcGVjaWZpZWQgZWxlbWVudCB3YXMgYWxyZWFkeSBhdHRhY2hlZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnRJbnRlcm5hbHModGhpcykgYXMgSUVsZW1lbnRJbnRlcm5hbHM7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbm5lci1kZWNsYXJhdGlvbnNcbiAgICAgIGZ1bmN0aW9uIGF0dGFjaFNoYWRvd09ic2VydmVyKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGF0dGFjaFNoYWRvdy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgc2hhZG93Um9vdE1hcC5zZXQodGhpcywgc2hhZG93Um9vdCk7XG5cbiAgICAgICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKSkge1xuICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG4gICAgICAgICAgaWYgKHdpbmRvdy5TaGFkeURPTSkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCBvYnNlcnZlckNvbmZpZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2hhZG93Um9vdCwgb2JzZXJ2ZXJDb25maWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzaGFkb3dIb3N0c01hcC5zZXQodGhpcywgb2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGFkb3dSb290O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhdHRhY2hTaGFkb3cgPSBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3c7XG4gICAgICBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3cgPSBhdHRhY2hTaGFkb3dPYnNlcnZlcjtcbiAgICB9XG5cbiAgICBpZiAobXV0YXRpb25PYnNlcnZlckV4aXN0cygpKSB7XG4gICAgICBjb25zdCBkb2N1bWVudE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG4gICAgICBkb2N1bWVudE9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBvYnNlcnZlckNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogS2VlcHMgdGhlIHBvbHlmaWxsIGZyb20gdGhyb3dpbmcgaW4gZW52aXJvbm1lbnRzIHdoZXJlIEhUTUxGb3JtRWxlbWVudFxuICAgICAqIGlzIHVuZGVmaW5lZCBsaWtlIGluIGEgc2VydmVyIGVudmlyb25tZW50XG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBIVE1MRm9ybUVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwYXRjaEZvcm1Qcm90b3R5cGUoKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXdpbmRvdy5DdXN0b21TdGF0ZVNldCkge1xuICAgICAgd2luZG93LkN1c3RvbVN0YXRlU2V0ID0gQ3VzdG9tU3RhdGVTZXQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3cuQ3VzdG9tU3RhdGVTZXQpIHtcbiAgICB3aW5kb3cuQ3VzdG9tU3RhdGVTZXQgPSBDdXN0b21TdGF0ZVNldDtcbiAgICBjb25zdCBhdHRhY2hJbnRlcm5hbHMgPSBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzO1xuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hJbnRlcm5hbHMgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gYXR0YWNoSW50ZXJuYWxzLmNhbGwodGhpcywgYXJncyk7XG4gICAgICBpbnRlcm5hbHMuc3RhdGVzID0gbmV3IEN1c3RvbVN0YXRlU2V0KHRoaXMpO1xuICAgICAgcmV0dXJuIGludGVybmFscztcbiAgICB9O1xuICB9XG59XG4iLCAiaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQgfSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExhbmdJbnRlcmZhY2Uge1xuICAvKipcbiAgICogQWRqdXN0cyB0aGUgbGFuZyB1c2VkIHRvIGZvcm1hdCBjb250ZW50IHJlbmRlcmVkIGJ5IHRoaXMgZWxlbWVudFxuICAgKiBAYXR0ciBsYW5nXG4gICAqL1xuICBsYW5nOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBMYW5nTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIExhbmdFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgbGFuZyB1c2VkIHRvIGZvcm1hdCBjb250ZW50IHJlbmRlcmVkIGJ5IHRoaXMgZWxlbWVudFxuICAgICAqIEBhdHRyIGxhbmdcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGxhbmc6IHN0cmluZztcbiAgfVxuICByZXR1cm4gTGFuZ0VsZW1lbnQgYXMgQ29uc3RydWN0b3I8TGFuZ0ludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50IH0gZnJvbSAnLi4vJztcblxuLyoqXG4gKiBTcGVjaWFsIGNsYXNzIHRoYXQgaGVscHMgZnJhbWV3b3JrIHdyYXBwZXIgc3R5bGluZyBrbm93IHdoZW4gYSB3cmFwcGVyIGZyYW1ld29ya1xuICogaGFzIGZpbmlzaGVkIHJlbmRlcmluZyBhbmQgdGh1cyBlbGVtZW50cyBjYW4gbm93IGJlIHNob3duIHdpdGhvdXQgYSBGT1VDLiBUaGlzXG4gKiBvY2N1cnMgaW4gdGhlIHNjZW5hcmlvIHdoZXJlIExpdCBlbGVtZW50cyByZWdpc3RlciBhbmQgcmVuZGVyIGJlZm9yZSB0aGVcbiAqIHdyYXBwZXIgZnJhbWV3b3JrIHBhc3NlcyBlbGVtZW50cyB0aGVpciBwcm9wcy5cbiAqL1xuZXhwb3J0IGNvbnN0IFdhaXRGb3JGcmFtZXdvcmtNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgV2FpdEZvckZyYW1ld29ya0VsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogJ210ZS1mdy1yZW5kZXJlZCcsIHJlZmxlY3Q6IHRydWUgfSkgX2Z3UmVuZGVyZWQ7XG4gIH1cbiAgcmV0dXJuIFdhaXRGb3JGcmFtZXdvcmtFbGVtZW50IGFzIFQ7XG59O1xuIiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3h9YDsiLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ0BsaXQtbGFicy9jb250ZXh0JztcbmltcG9ydCB7IERlbnNpdHlPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBjb25zdCBkZW5zaXR5Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8RGVuc2l0eU9wdGlvbnM+KCdNVEVfREVOU0lUWScpO1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpjb250ZW50c306aG9zdChbX2RlbnNpdHk9Y29tcGFjdF0pey0tbXRlLXNwYWNlLXh4czp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eHMpOy0tbXRlLXNwYWNlLXhzOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1zbSk7LS1tdGUtc3BhY2UtbWQ6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QtbWQpOy0tbXRlLXNwYWNlLWxnOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14bCk7LS1tdGUtc3BhY2UteHhsOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXh4bCk7LS1tdGUtc3BhY2UteHh4bDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eHhsKX06aG9zdChbX2RlbnNpdHk9Y29tZnldKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2UtY29tZnktc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1jb21meS1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1jb21meS14eHhsKX06aG9zdChbX2RlbnNpdHk9cm9vbXldKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLXJvb215LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLXJvb215LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2Utcm9vbXktc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1yb29teS1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLXJvb215LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14eHhsKX1gOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLElBQUFBLHNCQUF5QjtBQUN6QixJQUFBQyxrQkFBZ0M7QUFDaEMsSUFBQUMsZUFBcUI7OztBQ0RyQix3QkFBZ0M7QUFDaEMsaUJBQTJCO0FBQzNCLElBQUFDLGlCQUFpRDs7O0FDSGpELG9CQUF1QjtBQUd2QixJQUFNLGNBQWlEO0FBQUEsRUFDckQsR0FBRztBQUFBLEVBQ0gsSUFBSSxDQUFDLGNBQWMsYUFBYTtBQUFBLEVBQ2hDLElBQUksQ0FBQyxhQUFhLGNBQWM7QUFBQSxFQUNoQyxJQUFJO0FBQUEsRUFDSixJQUFJO0FBQUEsRUFDSixJQUFJO0FBQUEsRUFDSixJQUFJO0FBQUEsRUFDSixHQUFHO0FBQUEsRUFDSCxJQUFJLENBQUMsZUFBZSxjQUFjO0FBQUEsRUFDbEMsSUFBSSxDQUFDLGNBQWMsZUFBZTtBQUFBLEVBQ2xDLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLEdBQUc7QUFBQSxFQUNILEdBQUc7QUFBQSxFQUNILEdBQUc7QUFBQSxFQUNILFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLEdBQUc7QUFBQSxFQUNILE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLEdBQUc7QUFBQSxFQUNILE1BQU07QUFB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O0FBQUEsTUFDZCxLQUFLO0FBQ0gsZUFBTztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFFBQ1Y7QUFBQSxNQUNGLEtBQUs7QUFDSCxlQUFPO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixRQUFRO0FBQUEsUUFDVjtBQUFBLE1BQ0YsS0FBSztBQUNILGVBQU87QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLFFBQVE7QUFBQSxVQUNSLGNBQWM7QUFBQSxRQUNoQjtBQUFBLE1BQ0YsS0FBSztBQUNILGVBQU87QUFBQSxVQUNMLFNBQVM7QUFBQSxVQUNULE9BQU87QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLFFBQVE7QUFBQSxVQUNSLGNBQWM7QUFBQSxRQUNoQjtBQUFBLE1BQ0YsS0FBSztBQUNILGVBQU87QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRixLQUFLO0FBQ0gsZUFBTztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGLEtBQUs7QUFDSCxlQUFPO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0YsS0FBSztBQUNILGVBQU87QUFBQSxVQUNMLFNBQVM7QUFBQSxVQUNULE9BQU87QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRixLQUFLO0FBQ0gsZUFBTztBQUFBLFVB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Q3hCOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfY29udGV4dCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X3N0eWxlcyIsICJhY2MiLCAicHJvcCIsICJ2YWx1ZSIsICJzdHlsZXMiLCAiZGVwIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfc3R5bGVzIiwgImdldHRlckNvbmZpZyIsICJvYnNlcnZlciIsICJlIiwgInNldHRlckNvbmZpZyIsICJjc3NWYXIiLCAib2JzZXJ2ZXIiLCAicG9ydGFsQ29udHJvbGxlciIsICJlbGVtZW50IiwgInNjcm9sbFgiLCAic2Nyb2xsWSIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfY29udGV4dCIsICJjb250ZXh0IiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X3N0eWxlcyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9pZl9kZWZpbmVkIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X3N0eWxlcyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfY2xhc3NfbWFwIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAibm9kZSIsICJvYnNlcnZlciIsICJzdGF0ZSIsICJpbXBvcnRfaXNfc2VydmVyIiwgIm9ic2VydmVyIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2NvbnRleHQiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAic3R5bGVzIl0KfQo=
