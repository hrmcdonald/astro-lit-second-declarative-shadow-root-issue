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

// src/atomic/checkbox/index.ts
var checkbox_exports = {};
__export(checkbox_exports, {
  MteCheckbox: () => MteCheckbox
});
module.exports = __toCommonJS(checkbox_exports);

// src/atomic/checkbox/checkbox.element.ts
var import_lit25 = require("lit");
var import_decorators24 = require("lit/decorators.js");
var import_live = require("lit/directives/live.js");
var import_icons3 = require("@mortar/icons");

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
var parseSelectors = (styles14, selectors) => {
  if (!selectors) {
    return styles14;
  } else {
    return `${styles14}${selectors.reduce((acc, { selector, selectorWrapper, style }) => {
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
  let styles14 = "";
  [...instanceStylesMap.entries()].filter(([key, _]) => key !== "se" && key !== "sp").sort((a, b) => b[0] - a[0]).forEach(([_, selectors]) => {
    styles14 = parseSelectors(styles14, selectors);
  });
  styles14 = `${styles14}${parseSelectors("", instanceStylesMap.get("se"))}${parseSelectors(
    "",
    instanceStylesMap.get("sp")
  )}`;
  return styles14;
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
  add(state7) {
    if (!/^--/.test(state7) || typeof state7 !== "string") {
      throw new DOMException(
        `Failed to execute 'add' on 'CustomStateSet': The specified value ${state7} must start with '--'.`
      );
    }
    const result = super.add(state7);
    const ref = customStateMap.get(this);
    const stateName = `state${state7}`;
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
  delete(state7) {
    const result = super.delete(state7);
    const ref = customStateMap.get(this);
    if (ref.isConnected) {
      ref.toggleAttribute(`state${state7}`, false);
      if (ref.part) {
        ref.part.remove(`state${state7}`);
      }
    } else {
      setTimeout(() => {
        ref.toggleAttribute(`state${state7}`, false);
        if (ref.part) {
          ref.part.remove(`state${state7}`);
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

// src/core/mixins/checkbox.mixin.ts
var CheckboxMixin = (superClass) => {
  class CheckboxElement extends TabIndexMixin((0, import_form_control.FormControlMixin)(DisabledMixin(superClass)), {
    initialTabIndex: 0
  }) {
    constructor() {
      super(...arguments);
      this.inheritedAttributes = {};
      this.value = "on";
      this.defaultChecked = false;
      this.checked = false;
      this.readonly = false;
      this.required = false;
      this.handleBlur = () => {
        this._onBlur.emit();
      };
      this.handleFocus = () => {
        this._onFocus.emit();
      };
    }
    static {
      /** @ignore */
      this.formControlValidators = innerInputValidators;
    }
    onDefaultCheckedChange() {
      if (this.controlled) {
        return;
      }
      if (!this.hasUpdated && this.defaultChecked && !this.checked) {
        this.checked = true;
      }
    }
    updateValue() {
      this.setValue(this.value);
    }
    updateLabel() {
      this.inheritedAttributes = {
        ...this.inheritedAttributes,
        ariaLabel: this.ariaLabel
      };
      this.removeAttribute("aria-label");
    }
    firstUpdated(changedProps) {
      super.firstUpdated(changedProps);
      if (document.readyState === "complete") {
        this.setValue(this.value);
      } else {
        document.addEventListener("DOMContentLoaded", () => {
          this.setValue(this.value);
        });
      }
    }
    /** -- Form control validation overrides -- */
    shouldFormValueUpdate() {
      return this.checked;
    }
    resetFormControl() {
      super.resetFormControl?.();
      this.setValue(this.value);
      if (this.controlled) {
        return;
      }
      this.checked = this.defaultChecked;
    }
    validityCallback() {
      return this.error || this.validationTarget?.validationMessage;
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
    handleChange() {
      if (this.disabled || this.readonly) {
        return;
      }
      const notPrevented = this._willChange.emit(
        {
          value: this.value,
          name: this.name,
          checked: !this.checked
        },
        { cancelable: true }
      );
      if (this.controlled) {
        this._onChange.emit({
          value: this.value,
          name: this.name,
          checked: !this.checked
        });
        return;
      }
      if (notPrevented) {
        this.setValue(this.value);
        this.checked = !this.checked;
        this._onChange.emit({
          value: this.value,
          name: this.name,
          checked: this.checked
        });
      }
    }
    /** Clicks the element */
    click() {
      this.validationTarget.click();
    }
    /** Focuses the element */
    focus() {
      this.validationTarget.focus();
    }
    /** Blurs the element */
    blur() {
      this.validationTarget.blur();
    }
  }
  __decorateClass([
    (0, import_decorators16.property)()
  ], CheckboxElement.prototype, "label", 2);
  __decorateClass([
    (0, import_decorators16.property)()
  ], CheckboxElement.prototype, "error", 2);
  __decorateClass([
    (0, import_decorators16.property)()
  ], CheckboxElement.prototype, "hint", 2);
  __decorateClass([
    (0, import_decorators16.property)({ type: Boolean })
  ], CheckboxElement.prototype, "controlled", 2);
  __decorateClass([
    (0, import_decorators16.property)({ attribute: "aria-label", reflect: true })
  ], CheckboxElement.prototype, "ariaLabel", 2);
  __decorateClass([
    (0, import_decorators16.property)({ reflect: true })
  ], CheckboxElement.prototype, "name", 2);
  __decorateClass([
    (0, import_decorators16.property)({ reflect: true })
  ], CheckboxElement.prototype, "value", 2);
  __decorateClass([
    (0, import_decorators16.property)({ type: Boolean, reflect: true })
  ], CheckboxElement.prototype, "defaultChecked", 2);
  __decorateClass([
    (0, import_decorators16.property)({ type: Boolean, reflect: true })
  ], CheckboxElement.prototype, "checked", 2);
  __decorateClass([
    (0, import_decorators16.property)({ type: Boolean, reflect: true })
  ], CheckboxElement.prototype, "readonly", 2);
  __decorateClass([
    (0, import_decorators16.property)({ type: Boolean, reflect: true })
  ], CheckboxElement.prototype, "required", 2);
  __decorateClass([
    (0, import_decorators16.property)({ type: Boolean })
  ], CheckboxElement.prototype, "showRequired", 2);
  __decorateClass([
    (0, import_decorators16.query)('input[type="checkbox"]')
  ], CheckboxElement.prototype, "validationTarget", 2);
  __decorateClass([
    eventEmitter()
  ], CheckboxElement.prototype, "_willChange", 2);
  __decorateClass([
    eventEmitter()
  ], CheckboxElement.prototype, "_onChange", 2);
  __decorateClass([
    eventEmitter()
  ], CheckboxElement.prototype, "_onFocus", 2);
  __decorateClass([
    eventEmitter()
  ], CheckboxElement.prototype, "_onBlur", 2);
  __decorateClass([
    onUpdate("defaultChecked")
  ], CheckboxElement.prototype, "onDefaultCheckedChange", 1);
  __decorateClass([
    onUpdate(["value", "checked"], { on: "both" })
  ], CheckboxElement.prototype, "updateValue", 1);
  __decorateClass([
    onUpdate("ariaLabel", { on: "both" })
  ], CheckboxElement.prototype, "updateLabel", 1);
  return CheckboxElement;
};

// src/core/mixins/lang.mixin.ts
var import_decorators17 = require("lit/decorators.js");

// src/core/mixins/wait-for-fw.mixin.ts
var import_decorators18 = require("lit/decorators.js");

// src/core/styles/lit-css.ts
var import_lit12 = require("lit");

// src/core/styles/base.styles.ts
var import_lit13 = require("lit");
var styles7 = import_lit13.css`:host{box-sizing:border-box}`;

// src/atomic/form-elements/description.element.ts
var import_lit15 = require("lit");
var import_decorators19 = require("lit/decorators.js");

// src/atomic/form-elements/description.styles.ts
var import_lit14 = require("lit");
var styles8 = import_lit14.css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mte-ink-2);display:block;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);margin:var(--mte-space-xs) 0;text-decoration:inherit;text-transform:inherit;width:100%}`;

// src/atomic/form-elements/description.element.ts
var nextUniqueId = 0;
var MteDescription = class extends MteElement {
  constructor() {
    super(...arguments);
    this.id = `mte-description--${nextUniqueId++}`;
  }
  render() {
    return import_lit15.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteDescription.styles = [styles7, styles8];
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
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
var import_lit19 = require("lit");
var import_decorators21 = require("lit/decorators.js");
var import_if_defined3 = require("lit-html/directives/if-defined.js");
var import_when = require("lit-html/directives/when.js");
var import_icons2 = require("@mortar/icons");

// src/atomic/form-elements/error.styles.ts
var import_lit16 = require("lit");
var styles9 = import_lit16.css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;align-items:center;background:rgb(var(--mte-core-danger-lighter-rgb));border-radius:var(--mte-border-radius-xs);color:rgb(var(--mte-core-danger-base-rgb));display:flex;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);font-weight:var(--mte-font-weight-medium);gap:var(--mte-space-xs);line-height:var(--mte-font-set-caption-line-height);margin:var(--mte-space-xs) 0;overflow:hidden;padding:0 var(--mte-space-xs);text-decoration:inherit;text-transform:inherit;width:100%}`;

// src/atomic/icon/icon.element.ts
var import_lit18 = require("lit");
var import_decorators20 = require("lit/decorators.js");

// src/atomic/icon/icon.styles.ts
var import_lit17 = require("lit");
var styles10 = import_lit17.css`:host{box-sizing:content-box!important;color:var(--icon-color,inherit);display:inline-block;line-height:0;width:24px}:host([autosize]){vertical-align:middle}:host([muted]){--icon-color:var(--mte-ink-2)}svg{display:block;height:100%;width:100%}:host(:not([withColor])) svg *{color:inherit;fill:currentColor!important}:host([color=primary])>svg *{color:rgb(var(--mte-status-primary-base-rgb))}:host([color=secondary])>svg *{color:rgb(var(--mte-status-secondary-base-rgb))}:host([color=tertiary])>svg *{color:rgb(var(--mte-status-tertiary-base-rgb))}:host([color=success])>svg *{color:rgb(var(--mte-status-success-base-rgb))}:host([color=warning])>svg *{color:rgb(var(--mte-status-warning-base-rgb))}:host([color=danger])>svg *{color:rgb(var(--mte-status-danger-base-rgb))}`;

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
MteIcon.styles = [styles10];
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
    return import_lit19.html`${this.instanceStyles} ${(0, import_when.when)(
      !this.hideIcon,
      () => import_lit19.html`<mte-icon autosize part="icon" aria-hidden="true" name="${this.icon || "alert-circle"}" library="${(0, import_if_defined3.ifDefined)(this.iconLibrary)}"></mte-icon>`
    )}<slot></slot>`;
  }
};
MteError.styles = [styles7, styles9];
__decorateClass([
  (0, import_decorators21.property)()
], MteError.prototype, "iconLibrary", 2);
__decorateClass([
  (0, import_decorators21.property)()
], MteError.prototype, "icon", 2);
__decorateClass([
  (0, import_decorators21.property)({ type: Boolean })
], MteError.prototype, "hideIcon", 2);
__decorateClass([
  (0, import_decorators21.property)({ reflect: true })
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
var import_lit21 = require("lit");
var import_decorators22 = require("lit/decorators.js");

// src/atomic/form-elements/hint.styles.ts
var import_lit20 = require("lit");
var styles11 = import_lit20.css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mte-ink-2);display:block;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);font-weight:var(--mte-font-weight-medium);line-height:var(--mte-font-set-caption-line-height);margin:var(--mte-space-xs) 0;overflow:hidden;text-decoration:inherit;text-transform:inherit;width:100%}`;

// src/atomic/form-elements/hint.element.ts
var nextUniqueId3 = 0;
var MteHint = class extends MteElement {
  constructor() {
    super(...arguments);
    this.id = `mte-hint--${nextUniqueId3++}`;
  }
  render() {
    return import_lit21.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteHint.styles = [styles7, styles11];
__decorateClass([
  (0, import_decorators22.property)({ reflect: true })
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
var import_lit23 = require("lit");
var import_decorators23 = require("lit/decorators.js");

// src/atomic/form-elements/label.styles.ts
var import_lit22 = require("lit");
var styles12 = import_lit22.css`:host{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;align-items:center;color:inherit;cursor:inherit;display:block;font-size:var(--mte-font-set-body2-font-size);font-weight:var(--mte-font-set-body2-font-weight);font-weight:var(--mte-font-weight-bold);line-height:var(--mte-font-set-body2-line-height);margin:var(--mte-space-xs) 0;text-decoration:inherit;text-transform:inherit}:host([disabled]){color:var(--mte-disabled-4);cursor:not-allowed}.required{color:rgb(var(--mte-core-danger-base-rgb));padding-left:var(--mte-space-xs)}`;

// src/atomic/form-elements/label.element.ts
var nextUniqueId4 = 0;
var MteLabel = class extends DisabledMixin(MteElement) {
  constructor() {
    super(...arguments);
    this.id = `mte-label--${nextUniqueId4++}`;
  }
  render() {
    return import_lit23.html`${this.instanceStyles}<slot></slot>${this.showRequired ? import_lit23.html`<span class="required" aria-hidden="true">*</span>` : null}`;
  }
};
MteLabel.styles = [styles7, styles12];
__decorateClass([
  (0, import_decorators23.property)({ reflect: true })
], MteLabel.prototype, "id", 2);
__decorateClass([
  (0, import_decorators23.property)({ type: Boolean, reflect: true })
], MteLabel.prototype, "showRequired", 2);
MteLabel = __decorateClass([
  defineElement("mte-label")
], MteLabel);
var MteLabelText = class extends MteLabel {
};
MteLabelText = __decorateClass([
  defineElement("mte-label-text")
], MteLabelText);

// src/atomic/checkbox/checkbox.styles.ts
var import_lit24 = require("lit");
var styles13 = import_lit24.css`:host{--label-gap:var(--mte-space-xs);--border-color:var(--mte-border-3);--border-hover-color:rgb(var(--mte-core-primary-base-rgb));--border-radius:var(--mte-border-radius-sm);--focus-radius:var(--mte-border-radius-md);--accent-color:rgb(var(--mte-core-primary-base-rgb));--check-color:rgb(var(--mte-core-primary-base-c-rgb));--label-font-size:var(--mte-font-set-body1-font-size);--label-font-weight:var(--mte-font-set-body1-font-weight);--label-line-height:var(--mte-font-set-body1-line-height);display:inline-block}.container{align-items:center;display:inline-flex;gap:var(--label-gap)}.container.has-content{margin-right:calc(var(--label-gap)*2)}.checkbox{display:flex}.checkbox,.input{position:relative}.input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid var(--border-color);border-radius:var(--border-radius);height:16px;margin:4px;width:16px}:host([checked]) .input,:host([disabled]) .input,:host([indeterminate]) .input{background-color:var(--accent-color);border-color:var(--accent-color)}:host([checked]) .input:after,:host([indeterminate]) .input:after{background:var(--check-color);content:"";position:absolute}:host(:not([disabled]):not([checked]):not([indeterminate]):not([readOnly]):hover) .input{border-color:var(--border-hover-color)}:host([size=sm]) .input{height:14px;width:14px}.label{font-size:var(--label-font-size);font-weight:var(--label-font-weight);line-height:var(--label-line-height)}:host([size=sm]) .label{--label-font-size:var(--mte-font-set-body2-font-size);--label-font-weight:var(--mte-font-set-body2-font-weight);--label-line-height:var(--mte-font-set-body2-line-height)}.check{display:none}:host([checked]:not([indeterminate])) .check{color:var(--check-color);display:inline;left:var(--mte-space-xs);position:absolute;top:var(--mte-space-xs)}:host([indeterminate]) .input:after{border-radius:var(--mte-border-radius-sm);inset:6px 3px}.error,.hint,:host ::slotted([slot=error]),:host ::slotted([slot=hint]){margin-left:28px;transform:translateY(calc(var(--mte-space-xs)*-1))}:host([size=sm]) .hint :host([size=sm]) .error,:host([size=sm]) ::slotted([slot=error]),:host([size=sm]) ::slotted([slot=hint]){margin-left:26px}.error,.hint,:host ::slotted(mte-error),:host ::slotted(mte-hint){width:auto}:host([color=primary]){--accent-color:rgb(var(--mte-core-primary-base-rgb));--border-hover-color:rgb(var(--mte-core-primary-base-rgb));--check-color:rgb(var(--mte-core-primary-base-c-rgb))}:host([color=secondary]){--accent-color:rgb(var(--mte-core-secondary-base-rgb));--border-hover-color:rgb(var(--mte-core-secondary-base-rgb));--check-color:rgb(var(--mte-core-secondary-base-c-rgb))}:host([color=tertiary]){--accent-color:rgb(var(--mte-core-tertiary-base-rgb));--border-hover-color:rgb(var(--mte-core-tertiary-base-rgb));--check-color:rgb(var(--mte-core-tertiary-base-c-rgb))}:host([color=danger]){--accent-color:rgb(var(--mte-core-danger-base-rgb));--border-hover-color:rgb(var(--mte-core-danger-base-rgb));--check-color:rgb(var(--mte-core-danger-base-c-rgb))}:host .input:focus,:host .input:focus-visible{outline:none}.input:focus-visible:not(.disabled):not([disabled]):not(:disabled):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--focus-radius);border-bottom-right-radius:var(--focus-radius);border-top-left-radius:var(--focus-radius);border-top-right-radius:var(--focus-radius);bottom:-5px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-5px;pointer-events:none;position:absolute;right:-5px;top:-5px;z-index:9}:host([readonly]){--accent-color:var(--mte-readonly-4);--border-color:var(--mte-readonly-3);--check-color:var(--mte-readonly-1);color:var(--mte-readonly-4);cursor:default}:host(:not([readonly])) .container,:host(:not([readonly])) .input{cursor:pointer}:host([disabled]){--accent-color:var(--mte-disabled-1);--check-color:var(--mte-disabled-3)}:host([disabled]) .container,:host([disabled]) .input{color:var(--mte-disabled-4);cursor:not-allowed}.hidden{display:none}`;

// src/atomic/checkbox/checkbox.element.ts
var import_when2 = require("lit-html/directives/when.js");
var import_decorators25 = require("lit/decorators.js");
var import_class_map3 = require("lit-html/directives/class-map.js");
var import_if_defined4 = require("lit-html/directives/if-defined.js");
MteIconRegistryService.registerIcons([import_icons3.mtrIconCheck]);
var nextUniqueId5 = 0;
var MteCheckbox = class extends CoreColorMixin(
  CheckboxMixin(
    SizeMixin(
      SlotObserverMixin(
        PresetMixinFactory("MteCheckbox")(
          StylePartsMixin(MteElement)
        )
      )
    )
  )
) {
  constructor() {
    super(...arguments);
    this.internalId = nextUniqueId5++;
    this.id = `mte-checkbox--${this.internalId}`;
    this.indeterminate = false;
    this.name = "";
    this.title = "";
  }
  /**
   * Prevents label click from emitting beyond the component. This is done since the label
   * will also trigger a click on the checkbox here and we don't want both emitting out.
   */
  handleLabelClick(e) {
    if (e.target !== this.validationTarget) {
      e.stopPropagation();
    }
  }
  render() {
    const hasLabel = !!this.hasSlot("label", this.label);
    const hasHint = !!this.hasSlot("hint", this.hint);
    const hasError = !!this.hasSlot("error", this.error);
    const hasErrors = !!(hasError || !!this.errorElements?.length);
    return import_lit25.html`${this.instanceStyles} <label @click="${this.handleLabelClick}" class="container ${(0, import_class_map3.classMap)({
      "has-content": hasLabel || hasHint || hasError
    })}" for="input"><span class="checkbox"><input .checked="${(0, import_live.live)(this.checked)}" .indeterminate="${(0, import_live.live)(this.indeterminate)}" .value="${(0, import_live.live)(this.value)}" aria-invalid="${(0, import_if_defined4.ifDefined)(hasErrors ? "true" : null)}" ?disabled="${this.disabled}" ?required="${this.required}" @blur="${this.handleBlur}" @change="${this.handleChange}" @focus="${this.handleFocus}" class="input" aria-describedby="${`${hasErrors ? "error" : ""}${hasHint && !hasErrors ? "hint" : ""}`}" aria-label="${(0, import_if_defined4.ifDefined)(this.inheritedAttributes.ariaLabel)}" aria-readonly="${this.readonly}" id="input" part="input" title="${this.title}" type="checkbox"><mte-icon class="check" size="${this.size === "sm" ? "14" : "16"}" name="check"></mte-icon></span><slot name="label">${(0, import_when2.when)(
      this.label,
      () => import_lit25.html`<mte-label class="label" part="label" ?showRequired="${this.showRequired ?? this.required}">${this.label}</mte-label>`
    )}</slot></label><div id="error"><slot name="error">${(0, import_when2.when)(
      this.error,
      () => import_lit25.html`<mte-error class="error" part="error">${this.error}</mte-error>`
    )}</slot></div><div id="hint"><slot name="hint" class="${(0, import_class_map3.classMap)({ hidden: hasErrors })}">${(0, import_when2.when)(
      this.hint,
      () => import_lit25.html`<mte-hint class="hint" part="hint">${this.hint}</mte-hint>`
    )}</slot></div>`;
  }
};
MteCheckbox.styles = [styles7, styles13];
__decorateClass([
  (0, import_decorators24.property)({ reflect: true })
], MteCheckbox.prototype, "id", 2);
__decorateClass([
  (0, import_decorators24.property)({ type: Boolean, reflect: true })
], MteCheckbox.prototype, "indeterminate", 2);
__decorateClass([
  (0, import_decorators24.property)({ reflect: true })
], MteCheckbox.prototype, "name", 2);
__decorateClass([
  (0, import_decorators24.property)()
], MteCheckbox.prototype, "title", 2);
__decorateClass([
  (0, import_decorators24.query)("#input")
], MteCheckbox.prototype, "controlElement", 2);
__decorateClass([
  (0, import_decorators25.queryAssignedElements)({ slot: "error" })
], MteCheckbox.prototype, "errorElements", 2);
MteCheckbox = __decorateClass([
  defineElement("mte-checkbox")
], MteCheckbox);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jaGVja2JveC9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2NoZWNrYm94IiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2Jhc2UtY2xhc3Nlcy9tdGUuZWxlbWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS91dGlsaXRpZXMvY3NzLWluLWpzL2Nzcy1pbi1qcy5wcm9wZXJ0eS1tYXBwZXJzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9jc3MtaW4tanMvY3NzLWluLWpzLnV0aWxpdGllcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS91dGlsaXRpZXMvZW52aXJvbm1lbnQudXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9mb3JtLnV0aWxpdGllcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS91dGlsaXRpZXMvcmVhY3RpdmUtc2lnbmFsLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2Jhc2UtY2xhc3Nlcy9jb250ZW50LmJhc2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYXR0cmlidXRlLWNvbnZlcnRlci9yZXNwb25zaXZlLWF0dHJpYnV0ZS5jb252ZXJ0ZXIudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29uc3RhbnRzL2hlYi1sb2dvLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbnRyb2xsZXJzL3Nsb3QuY29udHJvbGxlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy90aGVtZS5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZpY2VzL3BvcnRhbC5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZpY2VzL2hpc3RvcnktYXBpLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc2VydmljZXMvbG9jYWxpemUuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2J1dHRvbi9idXR0b24ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2ljb24vaWNvbi5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90b29sYmFyL3Rvb2xiYXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2NhcmQvY2FyZC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdHJlZS90cmVlLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90YWcvdGFnLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9iYWRnZS9iYWRnZS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvbGluay9saW5rLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hbGVydC9hbGVydC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvaW5wdXQvaW5wdXQucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2RyYXdlci9kcmF3ZXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2FzaWRlL2FzaWRlLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9icmVhZGNydW1icy9icmVhZGNydW1iLWl0ZW0ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL21vZGFsL21vZGFsLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jaGVja2JveC9jaGVja2JveC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcmFkaW8vcmFkaW8ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdi9uYXYucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3N3aXRjaC9zd2l0Y2gucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL25hdGl2ZS1zZWxlY3QvbmF0aXZlLXNlbGVjdC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGV4dGFyZWEvdGV4dGFyZWEucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3NrZWxldG9uL3NrZWxldG9uLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zbGlkZXIvc2xpZGVyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zZWdtZW50ZWQtY29udHJvbC9zZWdtZW50ZWQtY29udHJvbC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0LmRlY29yYXRvci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5jb250ZXh0LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbnRyb2xsZXJzL2FwcGxpZWQtcHJlc2V0LWNvbnRleHQuY29udHJvbGxlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9kZWNvcmF0b3JzL29uLXVwZGF0ZS5kZWNvcmF0b3IudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvZGVjb3JhdG9ycy9ldmVudC1lbWl0dGVyLmRlY29yYXRvci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9kZWNvcmF0b3JzL2RlZmluZS1lbGVtZW50LmRlY29yYXRvci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvY29sb3IubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2RlbnNpdHkubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9kaXNhYmxlZC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvaW52ZXJzZS5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvaW52ZXJzZS5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3NpemUubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3RhYmluZGV4Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9zdHlsZS1wYXJ0cy5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2J1dHRvbi5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL292ZXJsYXkubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL292ZXJsYXkubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZmllbGRzZXQubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZm9ybS1maWVsZC5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2F1dG8tYWN0aXZlLWxpbmsubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3Nsb3Qtb2JzZXJ2ZXIubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2NoZWNrYm94Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9tYXBzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9hb20udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL211dGF0aW9uLW9ic2VydmVycy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvdXRpbHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL1ZhbGlkaXR5U3RhdGUudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL0N1c3RvbVN0YXRlU2V0LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9IVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvcGF0Y2gtZm9ybS1wcm90b3R5cGUudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL2VsZW1lbnQtaW50ZXJuYWxzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9sYW5nLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy93YWl0LWZvci1mdy5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zdHlsZXMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc3R5bGVzL2Jhc2Uuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZm9ybS1lbGVtZW50cy9kZXNjcmlwdGlvbi5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZm9ybS1lbGVtZW50cy9kZXNjcmlwdGlvbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9mb3JtLWVsZW1lbnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZm9ybS1lbGVtZW50cy9lcnJvci5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pY29uL2ljb24uZWxlbWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2ljb24vaWNvbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pY29uL2ljb24tcmVnaXN0cnkuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2Zvcm0tZWxlbWVudHMvaGludC5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZm9ybS1lbGVtZW50cy9oaW50LnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2Zvcm0tZWxlbWVudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9mb3JtLWVsZW1lbnRzL2xhYmVsLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2NoZWNrYm94L2NoZWNrYm94LnN0eWxlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0ICogZnJvbSAnLi9jaGVja2JveC5lbGVtZW50JztcbiIsIG51bGwsICIvKiBlc2xpbnQtZGlzYWJsZSB3Yy9uby1zZWxmLWNsYXNzICovXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHNlbGVjdG9yRmFjdG9yeSwgU2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgY29uc3RydWN0SW5zdGFuY2VTdHlsZXMsXG4gIGdlbmVyYXRlU2VsZWN0b3JzRnJvbVN0eWxlTWFwLFxuICBTZWxlY3RvclN0eWxlcyxcbiAgU3R5bGVNYXAsXG4gIFVuc3Vic2NyaWJlcixcbn0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IHVuc2FmZUhUTUwgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3Vuc2FmZS1odG1sLmpzJztcbmltcG9ydCB7IE1vcnRhclByZXNldFRoZW1lIH0gZnJvbSAnLi4vcHJlc2V0cyc7XG5cbi8vIERpc2FibGUgdGhpcyB3YXJuaW5nIGZvciBub3cgYnkgcHJlLW1hcmtpbmcgaXQgYXMgaXNzdWVkIHNvIHVzZXJzIGRvbid0IGhhdmUgdG8gc2VlIGl0XG4vLyBUT0RPOiBBc2sgbGl0IHRlYW0gd2h5IHRoaXMgaXMgdGhyb3duIGV2ZXJ5d2hlcmUgYW5kIHdoYXQgYWx0ZXJuYXRpdmVzIGFyZSBmb3IgcHJlc2V0IHNvbHV0aW9uXG5nbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzID8/PSBuZXcgU2V0KCk7XG5nbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzLmFkZChcbiAgJ092ZXJyaWRpbmcgUmVhY3RpdmVFbGVtZW50LmdldFByb3BlcnR5RGVzY3JpcHRvcigpIGlzIGRlcHJlY2F0ZWQuIFRoZSBvdmVycmlkZSB3aWxsIG5vdCBiZSBjYWxsZWQgd2l0aCBzdGFuZGFyZCBkZWNvcmF0b3JzIFNlZSBodHRwczovL2xpdC5kZXYvbXNnL25vLW92ZXJyaWRlLWdldC1wcm9wZXJ0eS1kZXNjcmlwdG9yIGZvciBtb3JlIGluZm9ybWF0aW9uLidcbik7XG5cbmV4cG9ydCBjbGFzcyBNdGVFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHByaXZhdGUgX19pbnN0YW5jZVN0eWxlU2hlZXRNYXAgPSBuZXcgTWFwPHN0cmluZywgU2VsZWN0b3JTdHlsZXNbXT4oKTtcbiAgcHJpdmF0ZSBfX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlID0gZmFsc2U7XG5cbiAgLyoqIFNldCB0byB0cnVlIHdoZW4gZmlyc3RVcGRhdGVkIGlzIGZpcnN0IGNhbGxlZCAqL1xuICBwcm90ZWN0ZWQgX19maXJzdFVwZGF0ZWQgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgaW5zdGFuY2VTdHlsZXM7XG5cbiAgLyoqXG4gICAqIEFsbCBzdWJzIHB1c2hlZCB0byB0aGlzIGFycmF5IHdpbGwgYmUgY2xlYXJlZCBpbiB0aGUgZGlzY29ubmVjdGVkQ2FsbGJhY2tcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc3ViczogVW5zdWJzY3JpYmVyW10gPSBbXTtcblxuICAvKiogU3R5bGUgbWFwcGluZ3MgdGhhdCBhcmUgYXBwbGllZCB0byB0aGUgaG9zdCBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIHJlZmxlY3Q6IHRydWUgfSkgc2U/OiBTdHlsZU1hcDtcblxuICAvKipcbiAgICogVGhlIHRoZW1lIHRvIHVzZSBmb3Igc3R5bGluZyB0aGlzIGNvbXBvbmVudC4gT3ZlcnJpZGVzIHRoZSBnbG9iYWwgcHJlc2V0IGZvciB0aGlzIGluc3RhbmNlIG9mIHRoaXMgY29tcG9uZW50LlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBhdHRyaWJ1dGU6ICdkYXRhLW10ZS10aGVtZScgfSlcbiAgc2V0IHRoZW1lKHRoZW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuX3RoZW1lO1xuICAgIHRoaXMuX3RoZW1lID0gdGhlbWU7XG4gICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCd0aGVtZScsIG9sZFZhbHVlKTtcbiAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IGEgYmV0dGVyIHdheSB0byBzb2x2ZSB0aGlzIGZvciBhbGwgcHJlc2V0c1xuICAgIGlmICh0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZSkge1xuICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlcXVlc3RVcGRhdGUoJ3RoZW1lJywgbnVsbCkpO1xuICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBudWxsKSk7XG4gICAgfVxuICB9XG4gIGdldCB0aGVtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aGVtZSA/PyB0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZT8ubmFtZTtcbiAgfVxuICBwcml2YXRlIF90aGVtZTogc3RyaW5nO1xuXG4gIC8qKiBVc2VkIHRvIGRlY2xhcmUgYSBsb2NhbCB0aGVtZSB2YWx1ZSBkZXRlcm1pbmVkIGJ5IHRoZSBsb2NhbCBwcmVzZXQgaWYgaXQgaXMgc2V0LiAqL1xuICBAc3RhdGUoKSBwcm90ZWN0ZWQgX19sb2NhbFByZXNldFRoZW1lOiBNb3J0YXJQcmVzZXRUaGVtZTtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBzZWxlY3RvciB0byBoYXZlIGluc3RhbmNlIHN0eWxlcyB0YXJnZXQgYSBzcGVjaWZpYyBpbm5lciBlbGVtZW50LlxuICAgKiBVc2VmdWwgaW4gc3BlY2lmaWMgc2NlbmFyaW9zIHdoZXJlIGZvY3VzIGlzIGRlbGVnYXRlZCBsaWtlIGJ1dHRvbnMuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQgdGhpcyByZXBlYXRzIGA6aG9zdGAgc2l4IHRpbWVzIHRvIHByb3ZpZGUgYSBzcGVjaWZpY2l0eSBvZiA2XG4gICAqL1xuICBwcm90ZWN0ZWQgaW5zdGFuY2VTdHlsZVNlbGVjdG9yUm9vdCA9ICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnO1xuXG4gIC8qKlxuICAgKiBDYW4gYmUgY2FsbGVkIGJ5IGRlcml2ZWQgY2xhc3NlcyB0byByZWdpc3RlciBuZXcgaW5zdGFuY2UgbGV2ZWwgZHluYW1pYyBzdHlsZXMuXG4gICAqIFdoZW4gY2FsbGVkIHRoZSBpbnN0YW5jZSBzdHlsZXNoZWV0IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGUgbGF0ZXN0IHN0eWxlcyB0aGlzIHVwZGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBzZXRJbnN0YW5jZVN0eWxlKGlkOiBzdHJpbmcsIHNlbGVjdG9yOiBTZWxlY3RvckZhY3RvcnksIHN0eWxlTWFwOiBTdHlsZU1hcCkge1xuICAgIC8vIFdlIHBhcnNlIGFsbCBzdHlsZSBpbmZvcm1hdGlvbiBoZXJlIGFuZCBzY29wZSBpdCB0byB0aGUgZ2l2ZW4gaWQuIFRoaXMgZW5zdXJlcyB3ZVxuICAgIC8vIG9ubHkgZXZlciBuZWVkIHRvIHJlLXBhcnNlIHRoaXMgcG9ydGlvbiBvZiBzdHlsZSBpbmZvcm1hdGlvbiB3aGVuIGl0cyBhc3NvY2lhdGVkXG4gICAgLy8gaWQgaXMgdXBkYXRlZCBhZ2Fpbi5cbiAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TWFwLnNldChpZCwgZ2VuZXJhdGVTZWxlY3RvcnNGcm9tU3R5bGVNYXAoc2VsZWN0b3IsIHN0eWxlTWFwKSk7XG4gICAgdGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBBIGN1c3RvbSBob29rIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gaW4gZGVyaXZlZCBjbGFzc2VzIHRvIHNldCBpbnN0YW5jZSBzdHlsZXMgYXMgbmVlZGVkICovXG4gIHByb3RlY3RlZCB1cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpIHtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcygnc2UnKSkge1xuICAgICAgdGhpcy5zZXRJbnN0YW5jZVN0eWxlKCdzZScsIHNlbGVjdG9yRmFjdG9yeSh0aGlzLmluc3RhbmNlU3R5bGVTZWxlY3RvclJvb3QpLCB0aGlzLnNlID8/IHt9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgd2lsbFVwZGF0ZShjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci53aWxsVXBkYXRlKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBDYWxsIHRoZSB1cGRhdGVJbnN0YW5jZVN0eWxlcyBob29rXG4gICAgdGhpcy51cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaW5zdGFuY2Ugc3R5bGVzIG5lZWQgdG8gYmUgcmVyZW5kZXJlZFxuICAgIGlmICh0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2VTdHlsZXMgPSB1bnNhZmVIVE1MKFxuICAgICAgICBgPHN0eWxlIGlkPVwiX19pbnN0YW5jZS1zdHlsZXNcIj4ke2NvbnN0cnVjdEluc3RhbmNlU3R5bGVzKFxuICAgICAgICAgIHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXRNYXBcbiAgICAgICAgKX08L3N0eWxlPmBcbiAgICAgICk7XG4gICAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHRoaXMuX19maXJzdFVwZGF0ZWQgPSB0cnVlO1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIHRoaXMuc3Vicy5mb3JFYWNoKCh1bnN1YikgPT4gdW5zdWIoKSk7XG4gICAgdGhpcy5zdWJzID0gW107XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQgeyBQcm9wZXJ0eU1hcHBlciwgU3R5bGVQcm9wZXJ0eSB9IGZyb20gJy4vY3NzLWluLWpzLnR5cGVzJztcblxuY29uc3QgcHJvcGVydHlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IHN0cmluZ1tdPiA9IHtcbiAgbTogJ21hcmdpbicsXG4gIG14OiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXSxcbiAgbXk6IFsnbWFyZ2luVG9wJywgJ21hcmdpbkJvdHRvbSddLFxuICBtdDogJ21hcmdpblRvcCcsXG4gIG1yOiAnbWFyZ2luUmlnaHQnLFxuICBtYjogJ21hcmdpbkJvdHRvbScsXG4gIG1sOiAnbWFyZ2luTGVmdCcsXG4gIHA6ICdwYWRkaW5nJyxcbiAgcHg6IFsncGFkZGluZ0xlZnQnLCAncGFkZGluZ1JpZ2h0J10sXG4gIHB5OiBbJ3BhZGRpbmdUb3AnLCAncGFkZGluZ0JvdHRvbSddLFxuICBwdDogJ3BhZGRpbmdUb3AnLFxuICBwcjogJ3BhZGRpbmdSaWdodCcsXG4gIHBiOiAncGFkZGluZ0JvdHRvbScsXG4gIHBsOiAncGFkZGluZ0xlZnQnLFxuICBkOiAnZGlzcGxheScsXG4gIGE6ICdhbGlnbkl0ZW1zJyxcbiAgajogJ2p1c3RpZnlDb250ZW50JyxcbiAgZGlyZWN0aW9uOiAnZmxleERpcmVjdGlvbicsXG4gIHNocmluazogJ2ZsZXhTaHJpbmsnLFxuICBncm93OiAnZmxleEdyb3cnLFxuICB3cmFwOiAnZmxleFdyYXAnLFxuICB3OiAnd2lkdGgnLFxuICBtYXh3OiAnbWF4V2lkdGgnLFxuICBtaW53OiAnbWluV2lkdGgnLFxuICBoOiAnaGVpZ2h0JyxcbiAgbWF4aDogJ21heEhlaWdodCcsXG4gIG1pbmg6ICdtaW5IZWlnaHQnLFxuICBmczogJ2ZvbnRTaXplJyxcbiAgZnc6ICdmb250V2VpZ2h0JyxcbiAgYmc6ICdiYWNrZ3JvdW5kJyxcbiAgYzogJ2NvbG9yJyxcbiAgZWxldmF0aW9uOiAnYm94U2hhZG93Jyxcbn07XG5cbi8qKiBNYXBzIHByb3BlcnR5IHNob3J0aGFuZCB2YWx1ZXMgdG8gb25lIG9yIG1hbnkgZnVsbCBjc3MgcHJvcGVydGllcyAqL1xuZXhwb3J0IGNvbnN0IHByb3BTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5yZWR1Y2UoKGFjYywgcHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFByb3BzID0gcHJvcGVydHlNYXBbcHJvcE1hcC5wcm9wXSA/PyBwcm9wTWFwLnByb3A7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLmFjYyxcbiAgICAgIC4uLihBcnJheS5pc0FycmF5KG1hcHBlZFByb3BzKVxuICAgICAgICA/IG1hcHBlZFByb3BzLm1hcCgocHJvcCkgPT4gKHsgcHJvcCwgdmFsdWU6IHByb3BNYXAudmFsdWUgfSkpXG4gICAgICAgIDogW3sgcHJvcDogbWFwcGVkUHJvcHMsIHZhbHVlOiBwcm9wTWFwLnZhbHVlIH1dKSxcbiAgICBdO1xuICB9LCBbXSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIEBtb3J0YXIvc3R5bGVzIGNvbmZpZyB2YWx1ZSBmb3IgYSBnaXZlbiBkb3Qgbm90YXRlZCBzdHJpbmcuXG4gKiBOdW1iZXJzIGFuZCBub24tZG90IG5vdGF0ZWQgc3RyaW5nIHdpbGwganVzdCBiZSByZXR1cm5lZCBhcyBpcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUgPSAodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29uZmlnUGF0aCA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gICAgICBjb25zdCBjb25maWdWYWx1ZSA9IGNvbmZpZ1BhdGgucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjW2tleV07XG4gICAgICB9LCBjb25maWcpO1xuICAgICAgcmV0dXJuIGNvbmZpZ1ZhbHVlID8/IHZhbHVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59O1xuXG4vKiogTWFwcyBkb3Qgbm90YXRlZCBzdHJpbmcgdmFsdWVzIHRvIHRoZW1lIGNvbmZpZyB2YXJpYWJsZXMgKi9cbmV4cG9ydCBjb25zdCBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlTWFwcGVyOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5yZWR1Y2UoKGFjYywgcHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZ1ZhbHVlID0gZG90U3RyaW5nVG9Db25maWdWYWx1ZShwcm9wTWFwLnZhbHVlKTtcbiAgICBpZiAoY29uZmlnVmFsdWUpIHtcbiAgICAgIHByb3BNYXAudmFsdWUgPSBjb25maWdWYWx1ZSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gWy4uLmFjYywgcHJvcE1hcF07XG4gIH0sIFtdKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBOdW1iZXJUb1B4ID0gKHZhbDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCkgPT4ge1xuICBpZiAoIXZhbCkge1xuICAgIHJldHVybiB2YWwgYXMgbnVsbDtcbiAgfVxuICByZXR1cm4gIWlzTmFOKE51bWJlcih2YWwpKSA/IGAke3ZhbH1weGAgOiAodmFsIGFzIHN0cmluZyk7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwUHhUb051bWJlciA9ICh2YWw6IHN0cmluZyB8IG51bGwpID0+IHtcbiAgaWYgKCF2YWwpIHtcbiAgICByZXR1cm4gdmFsIGFzIG51bGw7XG4gIH1cbiAgcmV0dXJuIE51bWJlcih2YWwucmVwbGFjZSgncHgnLCAnJykpO1xufTtcblxuLyoqIE1hcHMgdGhlIHZhbHVlcyBvZiBhbnkgZ2l2ZW4gcHJvcHMgdG8gcHggdW5pdHMgaWYgaXQgaXMgYSBudW1iZXIgKi9cbmV4cG9ydCBjb25zdCBudW1iZXJUb1B4OiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IG1hcE51bWJlclRvUHgocHJvcE1hcC52YWx1ZSk7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBzcGFjaW5nTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAnMCc6IGNvbmZpZy5zcGFjZS5ub25lLFxuICAnMSc6IGNvbmZpZy5zcGFjZS54cyxcbiAgJzInOiBjb25maWcuc3BhY2Uuc20sXG4gICczJzogY29uZmlnLnNwYWNlLm1kLFxuICAnNCc6IGNvbmZpZy5zcGFjZS5sZyxcbiAgJzUnOiBjb25maWcuc3BhY2UueGwsXG4gICc2JzogY29uZmlnLnNwYWNlLnh4bCxcbiAgJzcnOiBjb25maWcuc3BhY2UueHh4bCxcbiAgJ25vbmUnOiBjb25maWcuc3BhY2Uubm9uZSxcbiAgJ3h4cyc6IGNvbmZpZy5zcGFjZS54eHMsXG4gICd4cyc6IGNvbmZpZy5zcGFjZS54cyxcbiAgJ3NtJzogY29uZmlnLnNwYWNlLnNtLFxuICAnbWQnOiBjb25maWcuc3BhY2UubWQsXG4gICdsZyc6IGNvbmZpZy5zcGFjZS5sZyxcbiAgJ3hsJzogY29uZmlnLnNwYWNlLnhsLFxuICAneHhsJzogY29uZmlnLnNwYWNlLnh4bCxcbiAgJ3h4eGwnOiBjb25maWcuc3BhY2UueHh4bCxcbn07XG5cbi8qKiBNYXBzIHNwYWNpbmcgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBzcGFjaW5nIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBzcGFjaW5nVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBzcGFjaW5nTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBib3JkZXJSYWRpdXNNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIG5vbmU6IGNvbmZpZy5ib3JkZXIucmFkaXVzLm5vbmUsXG4gIHhzOiBjb25maWcuYm9yZGVyLnJhZGl1cy54cyxcbiAgc206IGNvbmZpZy5ib3JkZXIucmFkaXVzLnNtLFxuICBtZDogY29uZmlnLmJvcmRlci5yYWRpdXMubWQsXG4gIGxnOiBjb25maWcuYm9yZGVyLnJhZGl1cy5sZyxcbiAgeGw6IGNvbmZpZy5ib3JkZXIucmFkaXVzLnhsLFxuICB4eGw6IGNvbmZpZy5ib3JkZXIucmFkaXVzLnh4bCxcbiAgZnVsbDogY29uZmlnLmJvcmRlci5yYWRpdXMuZnVsbCxcbn07XG5cbi8qKiBNYXBzIGJvcmRlciByYWRpdXMgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBib3JkZXIgcmFkaXVzIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGJvcmRlclJhZGl1c01hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgYm9yZGVyV2lkdGhNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIG5vbmU6IGNvbmZpZy5ib3JkZXIud2lkdGgubm9uZSxcbiAgc206IGNvbmZpZy5ib3JkZXIud2lkdGguc20sXG4gIG1kOiBjb25maWcuYm9yZGVyLndpZHRoLm1kLFxuICBsZzogY29uZmlnLmJvcmRlci53aWR0aC5sZyxcbn07XG5cbi8qKiBNYXBzIGJvcmRlciB3aWR0aCB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIGJvcmRlciB3aWR0aCBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGJvcmRlcldpZHRoTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBvcGFjaXR5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB4eGw6IGNvbmZpZy5vcGFjaXR5Lnh4bCxcbiAgeGw6IGNvbmZpZy5vcGFjaXR5LnhsLFxuICBsZzogY29uZmlnLm9wYWNpdHkubGcsXG4gIG1kOiBjb25maWcub3BhY2l0eS5tZCxcbiAgc206IGNvbmZpZy5vcGFjaXR5LnNtLFxuICB4czogY29uZmlnLm9wYWNpdHkueHMsXG4gIHh4czogY29uZmlnLm9wYWNpdHkueHhzLFxuICB4eHhzOiBjb25maWcub3BhY2l0eS54eHhzLFxufTtcblxuLyoqIE1hcHMgb3BhY2l0eSB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIG9wYWNpdHkgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IG9wYWNpdHlWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IG9wYWNpdHlNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGZvbnRXZWlnaHRNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIGxpZ2h0OiBjb25maWcuZm9udC53ZWlnaHQubGlnaHQsXG4gIHJlZ3VsYXI6IGNvbmZpZy5mb250LndlaWdodC5yZWd1bGFyLFxuICBtZWRpdW06IGNvbmZpZy5mb250LndlaWdodC5tZWRpdW0sXG4gIGJvbGQ6IGNvbmZpZy5mb250LndlaWdodC5ib2xkLFxufTtcblxuLyoqIE1hcHMgZm9udC13ZWlnaHQgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBzcGFjaW5nIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBmb250V2VpZ2h0VmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBmb250V2VpZ2h0TWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBmb250U2l6ZU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgeHhzOiAnMC42MjVyZW0nLFxuICB4czogJzAuNzVyZW0nLFxuICBzbTogJzAuODc1cmVtJyxcbiAgbWQ6ICcxcmVtJyxcbiAgbGc6ICcxLjI1cmVtJyxcbiAgeGw6ICcxLjVyZW0nLFxuICB4eGw6ICcxLjc1cmVtJyxcbn07XG5cbi8qKiBNYXBzIGZvbnQtc2l6ZSB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIHNwYWNpbmcgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGZvbnRTaXplVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBmb250U2l6ZU1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZm9udEZhbWlseU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgc2FuczogY29uZmlnLmZvbnQuZmFtaWx5LnNhbnMsXG4gIHNlcmlmOiBjb25maWcuZm9udC5mYW1pbHkuc2VyaWYsXG4gIG1vbm86IGNvbmZpZy5mb250LmZhbWlseS5tb25vLFxufTtcblxuLyoqIE1hcHMgZm9udC1mYW1pbHkgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBmb250LWZhbWlseSBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgZm9udEZhbWlseVZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZm9udEZhbWlseU1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZWxldmF0aW9uTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB6MDogY29uZmlnLmVsZXZhdGlvbi56MCxcbiAgejE6IGNvbmZpZy5lbGV2YXRpb24uejEsXG4gIHoyOiBjb25maWcuZWxldmF0aW9uLnoyLFxuICB6MzogY29uZmlnLmVsZXZhdGlvbi56MyxcbiAgejQ6IGNvbmZpZy5lbGV2YXRpb24uejQsXG59O1xuXG4vKiogTWFwcyBlbGV2YXRpb24gdmFsdWVzIGZyb20gZGVzaWduYXRlZCBlbGV2YXRpb24gc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGVsZXZhdGlvblZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZWxldmF0aW9uTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuIiwgImltcG9ydCB7IGNvbmZpZywgU2VsZWN0b3JPcHRpb25zIH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgU2VsZWN0b3JNZXRhZGF0YSxcbiAgU2VsZWN0b3JTdHlsZXMsXG4gIFN0eWxlTWFwLFxuICBTdHlsZU1hcENhbGxiYWNrLFxuICBTdHlsZVByb3BlcnR5LFxufSBmcm9tICcuL2Nzcy1pbi1qcy50eXBlcyc7XG5pbXBvcnQge1xuICBwcm9wU2hvcnRoYW5kcyxcbiAgc3BhY2luZ1ZhbFNob3J0aGFuZHMsXG4gIG51bWJlclRvUHgsXG4gIGRvdFN0cmluZ1RvQ29uZmlnVmFsdWVNYXBwZXIsXG4gIGJvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsXG4gIGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kcyxcbiAgb3BhY2l0eVZhbFNob3J0aGFuZHMsXG4gIGZvbnRXZWlnaHRWYWxTaG9ydGhhbmRzLFxuICBmb250RmFtaWx5VmFsU2hvcnRoYW5kcyxcbiAgZWxldmF0aW9uVmFsU2hvcnRoYW5kcyxcbiAgZm9udFNpemVWYWxTaG9ydGhhbmRzLFxufSBmcm9tICcuL2Nzcy1pbi1qcy5wcm9wZXJ0eS1tYXBwZXJzJztcblxuLyoqIFNwZWNpZmllcyB3aGljaCBwcm9wZXJ0eSBtYXBwZXJzIHNob3VsZCBiZSBjYWxsZWQgYW5kIGluIHdoYXQgb3JkZXIgZm9yIGEgZ2l2ZW4gcHJvcCAqL1xuY29uc3QgcHJvcE1hcHBlcnMgPSB7XG4gIGhlaWdodDogW251bWJlclRvUHhdLFxuICBtaW5IZWlnaHQ6IFtudW1iZXJUb1B4XSxcbiAgbWF4SGVpZ2h0OiBbbnVtYmVyVG9QeF0sXG4gIHdpZHRoOiBbbnVtYmVyVG9QeF0sXG4gIG1pbldpZHRoOiBbbnVtYmVyVG9QeF0sXG4gIG1heFdpZHRoOiBbbnVtYmVyVG9QeF0sXG4gIHRvcDogW251bWJlclRvUHhdLFxuICByaWdodDogW251bWJlclRvUHhdLFxuICBib3R0b206IFtudW1iZXJUb1B4XSxcbiAgbGVmdDogW251bWJlclRvUHhdLFxuICBtYXJnaW46IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpblRvcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luUmlnaHQ6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpbkJvdHRvbTogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luTGVmdDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZzogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ1RvcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ1JpZ2h0OiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nQm90dG9tOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nTGVmdDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgZ2FwOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICByb3dHYXA6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGNvbHVtbkdhcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgZm9udFNpemU6IFtmb250U2l6ZVZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBmb250V2VpZ2h0OiBbZm9udFdlaWdodFZhbFNob3J0aGFuZHNdLFxuICBmb250RmFtaWx5OiBbZm9udEZhbWlseVZhbFNob3J0aGFuZHNdLFxuICBib3JkZXJSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyV2lkdGg6IFtib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJUb3BSaWdodFJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgb3BhY2l0eTogW29wYWNpdHlWYWxTaG9ydGhhbmRzXSxcbiAgYm94U2hhZG93OiBbZWxldmF0aW9uVmFsU2hvcnRoYW5kc10sXG59O1xuXG4vKipcbiAqIFBhcnNlcyBwcm9wZXJ0aWVzIHRvIHRoZWlyIGFjdHVhbCBwcm9wZXJ0eSBtYXBwaW5ncyBhY2NvcmRpbmcgdG8gdGhlXG4gKiBtYXBwaW5nIGZ1bmN0aW9uIHBpcGVsaW5lcyBkZWZpbmVkIGFib3ZlXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJzZVByb3BTaG9ydGhhbmRzID0gKHByb3A6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlcik6IFN0eWxlUHJvcGVydHlbXSA9PiB7XG4gIC8vIENhc3QgdG8gc3RyaW5nIHZhbHVlc1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHZhbHVlID0gYCR7dmFsdWV9YDtcbiAgfVxuICAvLyBFeGVjIHByb3AgdHJhbnNmb3Jtc1xuICAvLyBUaGUgcHJvcCBzaG9ydGhhbmRzIG1hcHBlciBpcyBydW4gYWdhaW5zdCBldmVyeSBwcm9wXG4gIGNvbnN0IG1hcHBlZFByb3BzID0gZG90U3RyaW5nVG9Db25maWdWYWx1ZU1hcHBlcihwcm9wU2hvcnRoYW5kcyhbeyBwcm9wLCB2YWx1ZSB9XSkpO1xuICByZXR1cm4gbWFwcGVkUHJvcHMucmVkdWNlKChhY2MsIHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZXJzID0gcHJvcE1hcHBlcnNbcHJvcE1hcC5wcm9wXTtcbiAgICBpZiAobWFwcGVycykge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICAuLi5tYXBwZXJzLnJlZHVjZShcbiAgICAgICAgICAoYWNjLCBtYXBwZXIpID0+IG1hcHBlcihhY2MpLFxuICAgICAgICAgIFt7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IHByb3BNYXAudmFsdWUgfV1cbiAgICAgICAgKSxcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjYy5wdXNoKHByb3BNYXApO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gIH0sIFtdKTtcbn07XG5cbi8qKlxuICogUGFyc2VzIHN0eWxlTWFwIHZhbHVlcyB0byBzZWxlY3RvciArIHN0eWxlIGluZm8gdXNlZCBmb3JcbiAqIHVwZGF0aW5nIENTU1N0eWxlU2hlZXRzIG9yIDxzdHlsZT4gdGFncy5cbiAqL1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlU2VsZWN0b3JzRnJvbVN0eWxlTWFwID0gKFxuICBzZWxlY3RvckZuOiAob3B0aW9ucz86IFNlbGVjdG9yT3B0aW9ucykgPT4gc3RyaW5nLFxuICBzdHlsZU1hcDogU3R5bGVNYXBcbikgPT4ge1xuICBjb25zdCBwYXJzZWRTZWxlY3RvcnM6IFNlbGVjdG9yU3R5bGVzW10gPSBbXTtcbiAgY29uc3Qgc2VsZWN0b3JRdWV1ZTogU2VsZWN0b3JNZXRhZGF0YVtdID0gW3sgc2VsZWN0b3I6IHNlbGVjdG9yRm4oKSwgc3R5bGVNYXAgfV07XG4gIGNvbnN0IGJyZWFrcG9pbnRLZXlzID0gT2JqZWN0LmtleXMoY29uZmlnLmdyaWQuYnJlYWtwb2ludCk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHNlbGVjdG9yIHF1ZXVlIHVudGlsIHRoZXkgaGF2ZSBhbGwgYmVlbiBleGhhdXN0ZWRcbiAgd2hpbGUgKHNlbGVjdG9yUXVldWUubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHNlbGVjdG9yTWFwID0gc2VsZWN0b3JRdWV1ZS5zaGlmdCgpO1xuXG4gICAgLy8gUHVzaCBwYXJzZWQgc2VsZWN0b3JzIG9udG8gdGhlIHJldHVybiBsaXN0XG4gICAgcGFyc2VkU2VsZWN0b3JzLnB1c2goe1xuICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLFxuICAgICAgc2VsZWN0b3JXcmFwcGVyOiBzZWxlY3Rvck1hcC5zZWxlY3RvcldyYXBwZXIsXG4gICAgICBzdHlsZTogT2JqZWN0LmtleXMoc2VsZWN0b3JNYXAuc3R5bGVNYXApLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHNlbGVjdG9yTWFwLnN0eWxlTWFwW3Byb3BdO1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXJzZSBjYWxsYmFjayB2YWx1ZXNcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFsdWUgPSAodmFsdWUgYXMgU3R5bGVNYXBDYWxsYmFjaykoY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIG9iamVjdCB2YWx1ZXNcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIFF1ZXVlIHVwIHNlbGVjdG9ycyBmb3IgcHNldWRvLWNsYXNzZXNcbiAgICAgICAgICBpZiAocHJvcC5zdGFydHNXaXRoKCcmOicpKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JGbih7IGluZml4OiBwcm9wLnJlcGxhY2UoJyYnLCAnJykgfSksXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBzZWxlY3Rvck1hcC5zZWxlY3RvcldyYXBwZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFF1ZXVlIHVwIGJyZWFrcG9pbnQgc2VsZWN0b3Igc2hvcnRoYW5kc1xuICAgICAgICAgIGVsc2UgaWYgKGJyZWFrcG9pbnRLZXlzLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBgQG1lZGlhIChtaW4td2lkdGg6JHtjb25maWcuZ3JpZC5icmVha3BvaW50W3Byb3BdfSlgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIG1lZGlhL2NvbnRhaW5lciBxdWVyaWVzXG4gICAgICAgICAgZWxzZSBpZiAocHJvcC5zdGFydHNXaXRoKCdAbWVkaWEnKSB8fCBwcm9wLnN0YXJ0c1dpdGgoJ0Bjb250YWluZXInKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogcHJvcCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUXVldWUgdXAgc2VsZWN0b3JzIGZvciBzbG90dGVkIHF1ZXJpZXNcbiAgICAgICAgICBlbHNlIGlmIChwcm9wLnN0YXJ0c1dpdGgoJzo6c2xvdHRlZCcpIHx8IHByb3Auc3RhcnRzV2l0aCgnJiA6OnNsb3R0ZWQnKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yRm4oeyBwb3N0Zml4OiAnICcgKyBwcm9wLnJlcGxhY2UoJyYgJywgJycpIH0pLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogc2VsZWN0b3JNYXAuc2VsZWN0b3JXcmFwcGVyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIHZhbHVlIGJyZWFrcG9pbnQgb2JqZWN0c1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTG9vcCBpbiBvcmRlciBoZXJlIHNvIHRoZXkgb3ZlcnJpZGUgZWFjaCBvdGhlciBjb3JyZWN0bHlcbiAgICAgICAgICAgIGJyZWFrcG9pbnRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAodmFsdWVba2V5XSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsIC8vIGluaGVyaXQgdGhlIHNlbGVjdG9yIGhlcmUgaW4gY2FzZSB3ZSBhcmUgd2l0aGluIGEgcHNldWRvLWNsYXNzXG4gICAgICAgICAgICAgICAgICBzdHlsZU1hcDogeyBbcHJvcF06IHZhbHVlW2tleV0gfSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogYEBtZWRpYSAobWluLXdpZHRoOiR7Y29uZmlnLmdyaWQuYnJlYWtwb2ludFtrZXldfSlgLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2Ugbm9ybWFsIHByb3BzXG4gICAgICAgIGNvbnN0IHByb3BzID0gcGFyc2VQcm9wU2hvcnRoYW5kcyhwcm9wLCB2YWx1ZSBhcyBzdHJpbmcgfCBudW1iZXIpO1xuICAgICAgICByZXR1cm4gYCR7YWNjfSR7cHJvcHMucmVkdWNlKChhY2MyLCB7IHByb3AsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAvLyBDb252ZXJ0IHByb3BlcnR5IG5hbWVzIGZyb20gY2FtZWwtY2FzZSB0byBkYXNoLWNhc2UsIGkuZS46XG4gICAgICAgICAgLy8gIGBiYWNrZ3JvdW5kQ29sb3JgIC0+IGBiYWNrZ3JvdW5kLWNvbG9yYFxuICAgICAgICAgIC8vIFZlbmRvci1wcmVmaXhlZCBuYW1lcyBuZWVkIGFuIGV4dHJhIGAtYCBhcHBlbmRlZCB0byBmcm9udDpcbiAgICAgICAgICAvLyAgYHdlYmtpdEFwcGVhcmFuY2VgIC0+IGAtd2Via2l0LWFwcGVhcmFuY2VgXG4gICAgICAgICAgLy8gRXhjZXB0aW9uIGlzIGFueSBwcm9wZXJ0eSBuYW1lIGNvbnRhaW5pbmcgYSBkYXNoLCBpbmNsdWRpbmdcbiAgICAgICAgICAvLyBjdXN0b20gcHJvcGVydGllczsgd2UgYXNzdW1lIHRoZXNlIGFyZSBhbHJlYWR5IGRhc2gtY2FzZWQgaS5lLjpcbiAgICAgICAgICAvLyAgYC0tbXktYnV0dG9uLWNvbG9yYCAtLT4gYC0tbXktYnV0dG9uLWNvbG9yYFxuICAgICAgICAgIHByb3AgPSBwcm9wLnJlcGxhY2UoLyg/Ol4od2Via2l0fG1venxtc3xvKXwpKD89W0EtWl0pL2csICctJCYnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHJldHVybiBgJHthY2MyfSR7cHJvcH06JHt2YWx1ZX07YDtcbiAgICAgICAgfSwgJycpfWA7XG4gICAgICB9LCAnJyksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VkU2VsZWN0b3JzO1xufTtcblxuY29uc3QgcGFyc2VTZWxlY3RvcnMgPSAoc3R5bGVzLCBzZWxlY3RvcnM/OiBhbnkpID0+IHtcbiAgaWYgKCFzZWxlY3RvcnMpIHtcbiAgICByZXR1cm4gc3R5bGVzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgJHtzdHlsZXN9JHtzZWxlY3RvcnMucmVkdWNlKChhY2MsIHsgc2VsZWN0b3IsIHNlbGVjdG9yV3JhcHBlciwgc3R5bGUgfSkgPT4ge1xuICAgICAgaWYgKHN0eWxlID09PSAnJykge1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuICAgICAgY29uc3QgYmFzZSA9IGAke3NlbGVjdG9yfXske3N0eWxlfX1gO1xuICAgICAgY29uc3Qgd3JhcHBlZCA9IHNlbGVjdG9yV3JhcHBlciA/IGAke3NlbGVjdG9yV3JhcHBlcn17JHtiYXNlfX1gIDogYmFzZTtcbiAgICAgIHJldHVybiBgJHthY2N9JHt3cmFwcGVkfWA7XG4gICAgfSwgJycpfWA7XG4gIH1cbn07XG5cbi8qKlxuICogQ29tYmluZXMgYWxsIGluc3RhbmNlIHN0eWxlTWFwIHNlbGVjdG9ycyArIHN0eWxlIGluZm8gaW50byBvbmUgY3NzVGV4dFxuICogdXNlZCBmb3IgdXBkYXRpbmcgQ1NTU3R5bGVTaGVldHMgb3IgPHN0eWxlPiB0YWdzLlxuICovXG5leHBvcnQgY29uc3QgY29uc3RydWN0SW5zdGFuY2VTdHlsZXMgPSAoaW5zdGFuY2VTdHlsZXNNYXApID0+IHtcbiAgbGV0IHN0eWxlcyA9ICcnO1xuXG4gIC8vIFNvcnQga2V5cyBpbiBhbHBoYWJldGljYWwgb3JkZXIgdG8gaGVscCBhdm9pZCBoeWRyYXRpb24gbWlzbWF0Y2ggZXJyb3JzXG4gIFsuLi5pbnN0YW5jZVN0eWxlc01hcC5lbnRyaWVzKCldXG4gICAgLmZpbHRlcigoW2tleSwgX10pID0+IGtleSAhPT0gJ3NlJyAmJiBrZXkgIT09ICdzcCcpXG4gICAgLnNvcnQoKGEsIGIpID0+IGJbMF0gLSBhWzBdKVxuICAgIC5mb3JFYWNoKChbXywgc2VsZWN0b3JzXSkgPT4ge1xuICAgICAgc3R5bGVzID0gcGFyc2VTZWxlY3RvcnMoc3R5bGVzLCBzZWxlY3RvcnMpO1xuICAgIH0pO1xuXG4gIC8vIEFsd2F5cyBwYXJzZSBgc2VgIGFuZCBgc3BgIHNlbGVjdG9ycyBsYXN0IHRvIGhlbHAgYXZvaWQgaHlkcmF0aW9uIG1pc21hdGNoIGVycm9yc1xuICAvLyBhbmQgZW5zdXJlIHRoZXkgb3ZlcnJpZGUgYW55IGNvbXBvbmVudCBsZXZlbCBkeW5hbWljIHN0eWxlcy5cbiAgc3R5bGVzID0gYCR7c3R5bGVzfSR7cGFyc2VTZWxlY3RvcnMoJycsIGluc3RhbmNlU3R5bGVzTWFwLmdldCgnc2UnKSl9JHtwYXJzZVNlbGVjdG9ycyhcbiAgICAnJyxcbiAgICBpbnN0YW5jZVN0eWxlc01hcC5nZXQoJ3NwJylcbiAgKX1gO1xuICByZXR1cm4gc3R5bGVzO1xufTtcbiIsICJpbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gJ2xpdC1odG1sL2lzLXNlcnZlci5qcyc7XG5cbmV4cG9ydCBjb25zdCBpc1NzciA9ICgpID0+IGlzU2VydmVyO1xuXG5leHBvcnQgY29uc3QgaXNCcm93c2VyTGlrZSA9ICgpID0+IGdsb2JhbFRoaXMgIT09IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IGlzVmFsaWRSZXNpemVDb250cm9sbGVyID0gKHJlc2l6ZUNvbnRyb2xsZXIpID0+XG4gIHJlc2l6ZUNvbnRyb2xsZXI/LlsnX29ic2VydmVyJ10/LlsndW5vYnNlcnZlJ107XG5cbmludGVyZmFjZSBOYXZpZ2F0b3JVQURhdGEge1xuICBicmFuZHM6IEFycmF5PHsgYnJhbmQ6IHN0cmluZzsgdmVyc2lvbjogc3RyaW5nIH0+O1xuICBtb2JpbGU6IGJvb2xlYW47XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGF0Zm9ybSgpOiBzdHJpbmcge1xuICBjb25zdCB1YURhdGEgPSAobmF2aWdhdG9yIGFzIGFueSkudXNlckFnZW50RGF0YSBhcyBOYXZpZ2F0b3JVQURhdGEgfCB1bmRlZmluZWQ7XG5cbiAgaWYgKHVhRGF0YT8ucGxhdGZvcm0pIHtcbiAgICByZXR1cm4gdWFEYXRhLnBsYXRmb3JtO1xuICB9XG5cbiAgcmV0dXJuIG5hdmlnYXRvci5wbGF0Zm9ybTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzUGxhdGZvcm0gPSAocGxhdGZvcm06ICdJT1MnKSA9PiB7XG4gIGlmICghaXNTc3IoKSkge1xuICAgIGlmIChwbGF0Zm9ybSA9PT0gJ0lPUycpIHtcbiAgICAgIHJldHVybiAvaVAoaG9uZXxhZHxvZCl8aU9TLy50ZXN0KGdldFBsYXRmb3JtKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiIsICJjb25zdCBuYXRpdmVWYWxpZGl0eVN0YXRlczogQXJyYXk8a2V5b2YgVmFsaWRpdHlTdGF0ZT4gPSBbXG4gICdiYWRJbnB1dCcsXG4gICdjdXN0b21FcnJvcicsXG4gICdwYXR0ZXJuTWlzbWF0Y2gnLFxuICAncmFuZ2VPdmVyZmxvdycsXG4gICdyYW5nZVVuZGVyZmxvdycsXG4gICdzdGVwTWlzbWF0Y2gnLFxuICAndG9vTG9uZycsXG4gICd0b29TaG9ydCcsXG4gICd0eXBlTWlzbWF0Y2gnLFxuICAndmFsdWVNaXNzaW5nJyxcbl07XG5cbi8qKlxuICogQ3VzdG9tIHZhbGlkYXRvciBmb3IgdGhlIGBAb3Blbi13Yy9mb3JtLWNvbnRyb2xgIHRoYXQgbGVhbnMgb24gYW4gaW50ZXJuYWxcbiAqIGlucHV0IHRvIGZvcndhcmQgbmF0aXZlIHZhbGlkYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGlubmVySW5wdXRWYWxpZGF0b3JzID0gbmF0aXZlVmFsaWRpdHlTdGF0ZXMubWFwKChrZXkpID0+ICh7XG4gIGtleSxcbiAgaXNWYWxpZChpbnN0YW5jZTogSFRNTEVsZW1lbnQgJiB7IHZhbGlkYXRpb25UYXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQgfSkge1xuICAgIGlmIChpbnN0YW5jZS52YWxpZGF0aW9uVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gIWluc3RhbmNlLnZhbGlkYXRpb25UYXJnZXQudmFsaWRpdHlba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG59KSk7XG4iLCAiLyoqXG4gKiBOT1RFOlxuICpcbiAqIFRoaXMgZmlsZSBjb250YWlucyBpbXBsZW1lbnRhdGlvbiBmb3IgYW4gZXh0cmVtZWx5IHNpbXBsZSBhbmQgbGlnaHR3ZWlnaHRcbiAqIHJlYWN0aXZlIHNvbHV0aW9uIGxvb3NlbHkgYmFzZWQgb24gc29saWQtanMgc3R5bGUgc2lnbmFscy4gSXQgZW5hYmxlcyBiYXNpY1xuICogcmVhY3RpdmUgc3Vic2NyaXB0aW9ucyBhbmQgY29tcHV0ZWQgc2lnbmFscyBvZiBvbmUgb3IgbW9yZSBvdGhlciBkZXBlbmRlbmN5IHNpZ25hbHMuXG4gKlxuICogSW4gaXRzIGN1cnJlbnQgc3RhdGUsIGl0IGlzIG5vdCBwZXJmZWN0IGFuZCBkb2VzIG5vdCBoYW5kbGUgYWxsIGVkZ2UgY2FzZXMuIEZvclxuICogZXhhbXBsZSwgaWYgeW91IGhhdmUgbXVsdGlwbGUgbGF5ZXJzIG9mIGNvbXB1dGVkIHN0YXRlIHdpdGggYSBzaW5nbGUgZGVwZW5kZW5jeVxuICogc2hhcmVkIG1vcmUgdGhhbiBvbmNlIGFjcm9zcyB0aG9zZSBsYXllcnMsIHRoZSBzYW1lIGNoYW5nZSB3aWxsIHBvdGVudGlhbGx5IGJlXG4gKiBlbWl0dGVkIHR3aWNlLiBPdXIgZXhwZWN0YXRpb24gYXRtLCBpcyB0aGF0IHdlIHdvbid0IGVuY291bnRlciB0aG9zZSBzY2VuYXJpb3NcbiAqIGluIHRoaXMgbGlicmFyeS5cbiAqL1xuXG4vKiogVW5zdWJzY3JpYmVzIGZyb20gdmFsdWUgdXBkYXRlcy4gKi9cbmV4cG9ydCB0eXBlIFVuc3Vic2NyaWJlciA9ICgpID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmFsPFQ+IHtcbiAgLyoqIEdldCB0aGUgY3VycmVudCB2YWx1ZSAqL1xuICBnZXQoKTogVDtcblxuICAvKiogU2V0IHJlYWN0aXZlIHZhbHVlICovXG4gIHNldCh2YWx1ZTogVCk7XG5cbiAgLyoqIFVwZGF0ZSByZWFjdGl2ZSB2YWx1ZSB1c2luZyBjYWxsYmFjayAqL1xuICB1cGRhdGUoZm46ICh2YWx1ZTogVCkgPT4gVCk7XG5cbiAgLyoqIFN1YnNjcmliZSB0byByZWFjdGl2ZSB2YWx1ZSBjaGFuZ2VzICovXG4gIHN1YnNjcmliZShmbjogKHZhbHVlOiBULCB1bnN1YnNjcmliZT86IFVuc3Vic2NyaWJlcikgPT4gdm9pZCk6IFVuc3Vic2NyaWJlcjtcbn1cblxuY29uc3QgY29udGV4dCA9IFtdO1xuXG5mdW5jdGlvbiBfc3Vic2NyaWJlKHJ1bm5pbmcsIHN1YnNjcmlwdGlvbnMpIHtcbiAgc3Vic2NyaXB0aW9ucy5hZGQocnVubmluZyk7XG4gIHJ1bm5pbmcuZGVwZW5kZW5jaWVzLmFkZChzdWJzY3JpcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gY2xlYW51cChydW5uaW5nKSB7XG4gIGZvciAoY29uc3QgZGVwIG9mIHJ1bm5pbmcuZGVwZW5kZW5jaWVzKSB7XG4gICAgZGVwLmRlbGV0ZShydW5uaW5nKTtcbiAgfVxuICBydW5uaW5nLmRlcGVuZGVuY2llcy5jbGVhcigpO1xufVxuXG4vKiogQ3JlYXRlIGEgc2lnbmFsIHRoYXQgYWxsb3dzIGJvdGggdXBkYXRpbmcgYW5kIHJlYWRpbmcgYnkgZ2V0dGVyIG9yIHN1YnNjcmlwdGlvbi4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaWduYWw8VD4odmFsdWU/OiBUKSB7XG4gIGNvbnN0IHN1YnNjcmlwdGlvbnMgPSBuZXcgU2V0PGFueT4oKTtcblxuICBjb25zdCBnZXQgPSAoKTogVCA9PiB7XG4gICAgY29uc3QgcnVubmluZyA9IGNvbnRleHRbY29udGV4dC5sZW5ndGggLSAxXTtcbiAgICBpZiAocnVubmluZykgX3N1YnNjcmliZShydW5uaW5nLCBzdWJzY3JpcHRpb25zKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0ID0gKG5leHRWYWx1ZTogVCkgPT4ge1xuICAgIHZhbHVlID0gbmV4dFZhbHVlO1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIFsuLi5zdWJzY3JpcHRpb25zXSkge1xuICAgICAgc3ViLmV4ZWN1dGUoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlID0gKGZuOiAodmFsdWU6IFQpID0+IFQpID0+IHtcbiAgICB2YWx1ZSA9IGZuKHZhbHVlKTtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiBbLi4uc3Vic2NyaXB0aW9uc10pIHtcbiAgICAgIHN1Yi5leGVjdXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRoaXMgaXMgZXNzZW50aWFsbHkgYSB1c2VFZmZlY3QgbWFzcXVlcmFkaW5nIGFzIGEgc3Vic2NyaWJlIGZ1bmN0aW9uXG4gIGNvbnN0IHN1YnNjcmliZSA9IChmbjogKHZhbHVlOiBULCB1bnN1YnNjcmliZT86IFVuc3Vic2NyaWJlcikgPT4gdm9pZCk6IFVuc3Vic2NyaWJlciA9PiB7XG4gICAgY29uc3QgZXhlY3V0ZSA9ICgpID0+IHtcbiAgICAgIGNsZWFudXAocnVubmluZyk7XG4gICAgICBjb250ZXh0LnB1c2gocnVubmluZyk7XG4gICAgICB0cnkge1xuICAgICAgICBmbihydW5uaW5nLmdldCgpLCAoKSA9PiBjbGVhbnVwKHJ1bm5pbmcpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGNvbnRleHQucG9wKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKCkgPT4gY2xlYW51cChydW5uaW5nKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcnVubmluZyA9IHtcbiAgICAgIGV4ZWN1dGUsXG4gICAgICBkZXBlbmRlbmNpZXM6IG5ldyBTZXQoKSxcbiAgICAgIGdldCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGV4ZWN1dGUoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCxcbiAgICBzZXQsXG4gICAgdXBkYXRlLFxuICAgIHN1YnNjcmliZSxcbiAgfSBhcyBTaWduYWw8VD47XG59XG5cbi8qKiBPbmUgb3IgbW9yZSBgU2lnbmFsYHMgKi9cbnR5cGUgU2lnbmFscyA9IFNpZ25hbDxhbnk+IHwgW1NpZ25hbDxhbnk+LCAuLi5BcnJheTxTaWduYWw8YW55Pj5dIHwgU2lnbmFsPGFueT5bXTtcblxuLyoqIE9uZSBvciBtb3JlIHZhbHVlcyBmcm9tIHNpZ25hbHMgKi9cbmV4cG9ydCB0eXBlIFNpZ25hbFZhbHVlczxUPiA9IFQgZXh0ZW5kcyBTaWduYWw8aW5mZXIgVT5cbiAgPyBVXG4gIDogeyBbSyBpbiBrZXlvZiBUXTogVFtLXSBleHRlbmRzIFNpZ25hbDxpbmZlciBVPiA/IFUgOiBuZXZlciB9O1xuXG4vKiogQ3JlYXRlIGEgbmV3IGNvbXB1dGVkIHNpZ25hbCBmcm9tIG9uZSBvciBtb3JlIHNpZ25hbCBkZXBlbmRlbmNpZXMgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZDxEIGV4dGVuZHMgU2lnbmFscywgVD4oXG4gIGRlcGVuZGVuY2llczogRCxcbiAgZm46ICh2YWx1ZXM6IFNpZ25hbFZhbHVlczxEPikgPT4gVFxuKTogU2lnbmFsPFQ+O1xuXG4vKiogQ3JlYXRlIGEgbmV3IGNvbXB1dGVkIHNpZ25hbCBmcm9tIG9uZSBvciBtb3JlIHNpZ25hbCBkZXBlbmRlbmNpZXMgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZDxEIGV4dGVuZHMgU2lnbmFscywgVD4oXG4gIGRlcGVuZGVuY2llczogRCxcbiAgZm4/OiAodmFsdWVzOiBTaWduYWxWYWx1ZXM8RD4sIHNldD86ICh2YWx1ZTogYW55KSA9PiB2b2lkKSA9PiBUXG4pOiBTaWduYWw8dW5rbm93bj47XG5cbi8qKiBDcmVhdGUgYSBuZXcgY29tcHV0ZWQgc2lnbmFsIGZyb20gb25lIG9yIG1vcmUgc2lnbmFsIGRlcGVuZGVuY2llcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkPEQgZXh0ZW5kcyBTaWduYWxzPihcbiAgZGVwZW5kZW5jaWVzOiBELFxuICBmbj86ICguLi5wYXJhbXM6IGFueVtdKSA9PiBhbnlcbik6IFNpZ25hbDxhbnk+IHtcbiAgY29uc3QgYXV0byA9IGZuLmxlbmd0aCA8IDI7XG4gIGNvbnN0IHMgPSBzaWduYWw8YW55PigpO1xuICBjb25zdCBzaW5nbGUgPSAhQXJyYXkuaXNBcnJheShkZXBlbmRlbmNpZXMpO1xuICBjb25zdCBkZXBzID0gc2luZ2xlXG4gICAgPyAoW2RlcGVuZGVuY2llc10gYXMgU2lnbmFsPFNpZ25hbFZhbHVlczxEPj5bXSlcbiAgICA6IChkZXBlbmRlbmNpZXMgYXMgU2lnbmFsPFNpZ25hbFZhbHVlczxEPj5bXSk7XG5cbiAgLy8gV2Ugb25seSBuZWVkIHRvIHN1YnNjcmliZSB0byB0aGUgZmlyc3QgaXRlbSBiZWNhdXNlXG4gIC8vIHRoZSBhY3Qgb2YgcmV0cmlldmluZyBhbGwgZGVwZW5kZW5jeSB2YWx1ZXMgd2lsbCBhZGQgdGhlbVxuICAvLyB0byB0aGUgY29udGV4dCBzdGFjayBhcHByb3ByaWF0ZWx5XG4gIGNvbnN0IGRlcCA9IGRlcHNbMF07XG4gIGRlcC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlcyA9IGRlcHMubWFwKChkZXApID0+IGRlcC5nZXQoKSk7XG4gICAgY29uc3QgcmV0ID0gc2luZ2xlID8gdmFsdWVzWzBdIDogKHZhbHVlcyBhcyBTaWduYWxWYWx1ZXM8RD4pO1xuICAgIGlmIChhdXRvKSB7XG4gICAgICBzLnNldChmbihyZXQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4ocmV0LCBzLnNldCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHM7XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgd2Mvbm8tc2VsZi1jbGFzcyAqL1xuaW1wb3J0IHsgY29uZmlnLCBzZWxlY3RvckZhY3RvcnkgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kcywgZG90U3RyaW5nVG9Db25maWdWYWx1ZSB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBNdGVFbGVtZW50IH0gZnJvbSAnLi9tdGUuZWxlbWVudCc7XG5pbXBvcnQgeyBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSBmcm9tICcuLi9hdHRyaWJ1dGUtY29udmVydGVyJztcblxuZXhwb3J0IHR5cGUgU3BhY2luZ1ZhbHVlID1cbiAgfCBudW1iZXJcbiAgfCBzdHJpbmdcbiAgfCAxXG4gIHwgMlxuICB8IDNcbiAgfCA0XG4gIHwgNVxuICB8IDZcbiAgfCAnbm9uZSdcbiAgfCAneHMnXG4gIHwgJ3NtJ1xuICB8ICdtZCdcbiAgfCAnbGcnXG4gIHwgJ3hsJ1xuICB8ICd4eGwnXG4gIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBVbml0VmFsdWUgPSBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIEJvcmRlclJhZGl1c1ZhbHVlID1cbiAgfCAnbm9uZSdcbiAgfCAneHMnXG4gIHwgJ3NtJ1xuICB8ICdtZCdcbiAgfCAnbGcnXG4gIHwgJ3hsJ1xuICB8ICd4eGwnXG4gIHwgJ2Z1bGwnXG4gIHwgc3RyaW5nXG4gIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBCb3JkZXJXaWR0aFZhbHVlID0gJ25vbmUnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBPcGFjaXR5VmFsdWUgPVxuICB8ICd4eHhzJ1xuICB8ICd4eHMnXG4gIHwgJ3hzJ1xuICB8ICdzbSdcbiAgfCAnbWQnXG4gIHwgJ2xnJ1xuICB8ICd4bCdcbiAgfCAneHhsJ1xuICB8IHN0cmluZ1xuICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgUmVzcG9uc2l2ZVZhbHVlPFQ+ID0gVCB8IFBhcnRpYWw8UmVjb3JkPCd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCcsIFQ+PjtcblxuY29uc3QgZGVmYXVsdEJvcmRlckZhY3RvcnkgPSAod2lkdGg/LCBjb2xvcj8sIHN0eWxlPykgPT5cbiAgYCR7c3R5bGUgPz8gJ3NvbGlkJ30gJHtcbiAgICBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMoW1xuICAgICAgeyBwcm9wOiAnYm9yZGVyV2lkdGgnLCB2YWx1ZTogZG90U3RyaW5nVG9Db25maWdWYWx1ZSh3aWR0aCA/PyAnMXB4JykgfSxcbiAgICBdKVswXT8udmFsdWVcbiAgfSAke2RvdFN0cmluZ1RvQ29uZmlnVmFsdWUoY29sb3IpID8/IGNvbmZpZy5jb2xvci5ib3JkZXIxfWA7XG5cbmV4cG9ydCBjbGFzcyBNdGVDb250ZW50QmFzZSBleHRlbmRzIE10ZUVsZW1lbnQge1xuICAvLyAtLSBTcGFjaW5nIFByb3BzIC0tXG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW5gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbT86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXJpZ2h0YCBhbmQgYG1hcmdpbi1sZWZ0YCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbXg/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi10b3BgIGFuZCBgbWFyZ2luLWJvdHRvbWAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG15PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tdG9wYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG10PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tcmlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbXI/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi1ib3R0b21gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWI/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi1sZWZ0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1sPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHA/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctcmlnaHRgIGFuZCBgcGFkZGluZy1sZWZ0YCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcHg/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctdG9wYCBhbmQgYHBhZGRpbmctYm90dG9tYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcHk/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctdG9wYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHB0PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXJpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHByPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLWJvdHRvbWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwYj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1sZWZ0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHBsPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLy8gLS0gUG9zaXRpb25pbmcgUHJvcHMgLS1cblxuICAvKiogU2V0cyB0aGUgYGRpc3BsYXlgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2Jsb2NrJ1xuICAgIHwgJ2lubGluZS1ibG9jaydcbiAgICB8ICdmbGV4J1xuICAgIHwgJ2lubGluZS1mbGV4J1xuICAgIHwgJ2dyaWQnXG4gICAgfCAnaW5saW5lLWdyaWQnXG4gICAgfCAnaW5saW5lJ1xuICAgIHwgJ2xpc3QtaXRlbSdcbiAgICB8ICdub25lJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGFsaWduLWl0ZW1zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGE/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdlbmQnXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdiYXNlbGluZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1pdGVtc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBhbGlnbkl0ZW1zPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnYmFzZWxpbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24tc2VsZmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBhbGlnblNlbGY/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdhdXRvJ1xuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2Jhc2VsaW5lJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGFsaWduLWNvbnRlbnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYWxpZ25Db250ZW50PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnc3BhY2UtYmV0d2VlbidcbiAgICB8ICdzcGFjZS1hcm91bmQnXG4gICAgfCAnc3BhY2UtZXZlbmx5J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGp1c3RpZnktY29udGVudGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBqPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3NwYWNlLWJldHdlZW4nXG4gICAgfCAnc3BhY2UtYXJvdW5kJ1xuICAgIHwgJ3NwYWNlLWV2ZW5seSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LWNvbnRlbnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAganVzdGlmeUNvbnRlbnQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3BhY2UtYmV0d2VlbidcbiAgICB8ICdzcGFjZS1hcm91bmQnXG4gICAgfCAnc3BhY2UtZXZlbmx5J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGp1c3RpZnktaXRlbXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkganVzdGlmeUl0ZW1zPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdsZWZ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAncmlnaHQnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1zZWxmYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGp1c3RpZnlTZWxmPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdsZWZ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAncmlnaHQnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBmbGV4OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtZGlyZWN0aW9uYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGRpcmVjdGlvbj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAncm93JyB8ICdyb3dSZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtblJldmVyc2UnIHwgJ2luaXRpYWwnIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWRpcmVjdGlvbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4RGlyZWN0aW9uPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdyb3cnIHwgJ3Jvd1JldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uUmV2ZXJzZScgfCAnaW5pdGlhbCcgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtYmFzaXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYmFzaXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWJhc2lzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhCYXNpcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtZ3Jvd2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncm93PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1ncm93YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhHcm93PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1zaHJpbmtgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgc2hyaW5rPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1zaHJpbmtgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleFNocmluaz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtd3JhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSB3cmFwPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdub3dyYXAnIHwgJ3dyYXAnIHwgJ3dyYXAtcmV2ZXJzZScgfCAnaW5pdGlhbCcgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtd3JhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4V3JhcD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAnbm93cmFwJyB8ICd3cmFwJyB8ICd3cmFwLXJldmVyc2UnIHwgJ2luaXRpYWwnIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBvcmRlcmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBvcmRlcj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBnYXA/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGNvbHVtbi1nYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgY29sdW1uR2FwPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGByb3ctZ2FwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHJvd0dhcD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1jb2x1bW5gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZENvbHVtbj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtcm93YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRSb3c/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWF1dG8tZmxvd2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQXV0b0Zsb3c/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3JvdycgfCAnY29sdW1uJyB8ICdkZW5zZScgfCAncm93IGRlbnNlJyB8ICdjb2x1bW4gZGVuc2UnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWF1dG8tY29sdW1uc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBncmlkQXV0b0NvbHVtbnM/OiBSZXNwb25zaXZlVmFsdWU8J2F1dG8nIHwgJ21heC1jb250ZW50JyB8ICdtaW4tY29udGVudCcgfCBVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1hdXRvLXJvd3NgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZEF1dG9Sb3dzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgICdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXRlbXBsYXRlLWNvbHVtbnNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZFRlbXBsYXRlQ29sdW1ucz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICAnbm9uZScgfCAnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZVxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC10ZW1wbGF0ZS1yb3dzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRUZW1wbGF0ZVJvd3M/OiBSZXNwb25zaXZlVmFsdWU8J25vbmUnIHwgJ2F1dG8nIHwgJ21heC1jb250ZW50JyB8ICdtaW4tY29udGVudCcgfCBVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC10ZW1wbGF0ZS1hcmVhc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBncmlkVGVtcGxhdGVBcmVhcz86IFJlc3BvbnNpdmVWYWx1ZTwnbm9uZScgfCBzdHJpbmcgfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1hcmVhYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRBcmVhPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8vIC0tIFNpemluZyBQcm9wcyAtLVxuXG4gIC8qKiBTZXRzIHRoZSBgd2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgdz86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWF4LXdpZHRoYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1heHc/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1pbi13aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtaW53PzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBoZWlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgaD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWF4LWhlaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtYXhoPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtaW4taGVpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1pbmg/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJhY2tncm91bmRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuIENhbiBiZSBwYXNzZWQgZG90IG5vdGF0ZWQgdGhlbWUgY29uZmlnIHN0cmluZ3MgdG8gc2VsZWN0IGNvbG9yIHRva2VuIHZhbHVlcy4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYmc/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBjb2xvcmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gQ2FuIGJlIHBhc3NlZCBkb3Qgbm90YXRlZCB0aGVtZSBjb25maWcgc3RyaW5ncyB0byBzZWxlY3QgY29sb3IgdG9rZW4gdmFsdWVzLiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBjPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWNvbG9yYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiBDYW4gYmUgcGFzc2VkIGRvdCBub3RhdGVkIHRoZW1lIGNvbmZpZyBzdHJpbmdzIHRvIHNlbGVjdCBjb2xvciB0b2tlbiB2YWx1ZXMuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJvcmRlckNvbG9yPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXdpZHRoYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJXaWR0aD86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJXaWR0aFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1zdHlsZWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYm9yZGVyU3R5bGU/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3NvbGlkJyB8ICdkb3R0ZWQnIHwgJ2Rhc2hlZCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlcmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyPzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyVG9wPzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXJpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJSaWdodD86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1ib3R0b21gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbT86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1sZWZ0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJMZWZ0PzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyUmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3AtcmlnaHQtcmFkaXVzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJUb3BSaWdodFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJUb3BMZWZ0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJCb3R0b21SaWdodFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3AtcmlnaHQtcmFkaXVzYCBhbmQgYGJvcmRlci10b3AtbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyVG9wUmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3AtcmlnaHQtcmFkaXVzYCBhbmQgYGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclJpZ2h0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzYCBhbmQgYGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tUmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3AtbGVmdC1yYWRpdXNgIGFuZCBgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJMZWZ0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGxpbmUtaGVpZ2h0YCBjc3MgcHJvcGVydHkgICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGxpbmVIZWlnaHQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgbnVtYmVyXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmb250LXdlaWdodGAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZvbnRXZWlnaHQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdsaWdodCdcbiAgICB8ICdyZWd1bGFyJ1xuICAgIHwgJ21lZGl1bSdcbiAgICB8ICdsaWdodGVyJ1xuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdib2xkJ1xuICAgIHwgJ2JvbGRlcidcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gICAgfCAnMTAwJ1xuICAgIHwgJzIwMCdcbiAgICB8ICczMDAnXG4gICAgfCAnNDAwJ1xuICAgIHwgJzUwMCdcbiAgICB8ICc2MDAnXG4gICAgfCAnNzAwJ1xuICAgIHwgJzgwMCdcbiAgICB8ICc5MDAnXG4gID47XG5cbiAgLyoqIFNob3J0aGFuZCBmb3IgYGZvbnRXZWlnaHRgLiBTZXRzIHRoZSBgZm9udC13ZWlnaHRgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2xpZ2h0J1xuICAgIHwgJ3JlZ3VsYXInXG4gICAgfCAnbWVkaXVtJ1xuICAgIHwgJ2xpZ2h0ZXInXG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ2JvbGQnXG4gICAgfCAnYm9sZGVyJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgICB8ICcxMDAnXG4gICAgfCAnMjAwJ1xuICAgIHwgJzMwMCdcbiAgICB8ICc0MDAnXG4gICAgfCAnNTAwJ1xuICAgIHwgJzYwMCdcbiAgICB8ICc3MDAnXG4gICAgfCAnODAwJ1xuICAgIHwgJzkwMCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZvbnQtc2l6ZWAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZvbnRTaXplPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8IFVuaXRWYWx1ZSB8ICd4eHMnIHwgJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJ1xuICA+O1xuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIGBmb250U2l6ZWAuIFNldHMgdGhlIGBmb250LXNpemVgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCBVbml0VmFsdWUgfCAneHhzJyB8ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZvbnQtZmFtaWx5YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZm9udEZhbWlseT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAnc2FucycgfCAnc2VyaWYnIHwgJ21vbm8nIHwgc3RyaW5nXG4gID47XG5cbiAgLyoqIFNob3J0aGFuZCBmb3IgYG9wYWNpdHlgLiBTZXRzIHRoZSBgb3BhY2l0eWAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG9wYWNpdHk/OiBSZXNwb25zaXZlVmFsdWU8T3BhY2l0eVZhbHVlPjtcblxuICAvKiogQXBwbGllcyBNb3J0YXIgc3RhbmRhcmQgYm94LXNoYWRvdyB2YWx1ZXMgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZWxldmF0aW9uPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgICd6MCcgfCAnejEnIHwgJ3oyJyB8ICd6MycgfCAnejQnXG4gID47XG5cbiAgLyoqIEFkanVzdCB0aGlzIGVsZW1lbnRzIGJsZWVkIGlmIGl0IGlzIGEgZGlyZWN0IGRlc2NlbmRhbnQgb2YgYW4gbXRlLWxheW91dC1jb250YWluZXIgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBsYXlvdXRCbGVlZD86ICdmdWxsJyB8ICdwb3BvdXQnIHwgJ2NvbnRlbnQnIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoaXMgZWxlbWVudCBhcyBhIHN1YmdyaWQgd2hlbiBzZXQuIGBkaXNwbGF5YCBpcyBzZXQgdG8gYGdyaWRgIGFuZCBgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zYCBpcyBzZXQgdG8gYHN1YmdyaWRgLlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHN1YmdyaWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBzZWxlY3RvciB0byBoYXZlIGluc3RhbmNlIHN0eWxlcyB0YXJnZXQgYSBzcGVjaWZpYyBpbm5lciBlbGVtZW50LlxuICAgKiBVc2VmdWwgaW4gc3BlY2lmaWMgc2NlbmFyaW9zIHdoZXJlIHRoZSBwcmltYXJ5IGNvbnRlbnQvc2xvdCB3cmFwcGVkIHdpdGhpbiB0aGUgdGVtcGxhdGVcbiAgICogbGlrZSB3aXRoIHRoZSBtb2RhbCBjb21wb25lbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgY29udGVudFN0eWxlU2VsZWN0b3JSb290ID0gJzpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCc7XG5cbiAgLy8gTGlzdCBvZiBwcm9wcyBmb3Igb3B0aW1hbCBzdHlsZSB1cGRhdGUgY2hlY2tpbmdcbiAgcHJpdmF0ZSBzdGF0aWMgY29udGVudFByb3BzID0gbmV3IFNldChbXG4gICAgJ20nLFxuICAgICdteCcsXG4gICAgJ215JyxcbiAgICAnbXQnLFxuICAgICdtcicsXG4gICAgJ21iJyxcbiAgICAnbWwnLFxuICAgICdwJyxcbiAgICAncHgnLFxuICAgICdweScsXG4gICAgJ3B0JyxcbiAgICAncHInLFxuICAgICdwYicsXG4gICAgJ3BsJyxcbiAgICAnZCcsXG4gICAgJ2EnLFxuICAgICdqJyxcbiAgICAnYmFzaXMnLFxuICAgICdzaHJpbmsnLFxuICAgICdncm93JyxcbiAgICAnZGlyZWN0aW9uJyxcbiAgICAnd3JhcCcsXG4gICAgJ2FsaWduSXRlbXMnLFxuICAgICdhbGlnblNlbGYnLFxuICAgICdhbGlnbkNvbnRlbnQnLFxuICAgICdqdXN0aWZ5Q29udGVudCcsXG4gICAgJ2p1c3RpZnlJdGVtcycsXG4gICAgJ2p1c3RpZnlTZWxmJyxcbiAgICAnZmxleCcsXG4gICAgJ2ZsZXhEaXJlY3Rpb24nLFxuICAgICdmbGV4QmFzaXMnLFxuICAgICdmbGV4U2hyaW5rJyxcbiAgICAnZmxleEdyb3cnLFxuICAgICdmbGV4V3JhcCcsXG4gICAgJ29yZGVyJyxcbiAgICAnZ2FwJyxcbiAgICAnY29sdW1uR2FwJyxcbiAgICAncm93R2FwJyxcbiAgICAnZ3JpZENvbHVtbicsXG4gICAgJ2dyaWRSb3cnLFxuICAgICdncmlkQXV0b0Zsb3cnLFxuICAgICdncmlkQXV0b0NvbHVtbnMnLFxuICAgICdncmlkQXV0b1Jvd3MnLFxuICAgICdncmlkVGVtcGxhdGVDb2x1bW5zJyxcbiAgICAnZ3JpZFRlbXBsYXRlUm93cycsXG4gICAgJ2dyaWRUZW1wbGF0ZUFyZWFzJyxcbiAgICAnZ3JpZEFyZWEnLFxuICAgICd3JyxcbiAgICAnbWF4dycsXG4gICAgJ21pbncnLFxuICAgICdoJyxcbiAgICAnbWF4aCcsXG4gICAgJ21pbmgnLFxuICAgICdiZycsXG4gICAgJ2MnLFxuICAgICdib3JkZXJDb2xvcicsXG4gICAgJ2JvcmRlcldpZHRoJyxcbiAgICAnYm9yZGVyU3R5bGUnLFxuICAgICdib3JkZXInLFxuICAgICdib3JkZXJUb3AnLFxuICAgICdib3JkZXJSaWdodCcsXG4gICAgJ2JvcmRlckJvdHRvbScsXG4gICAgJ2JvcmRlckxlZnQnLFxuICAgICdib3JkZXJSYWRpdXMnLFxuICAgICdib3JkZXJUb3BSaWdodFJhZGl1cycsXG4gICAgJ2JvcmRlclRvcExlZnRSYWRpdXMnLFxuICAgICdib3JkZXJCb3R0b21SaWdodFJhZGl1cycsXG4gICAgJ2JvcmRlckJvdHRvbUxlZnRSYWRpdXMnLFxuICAgICdib3JkZXJUb3BSYWRpdXMnLFxuICAgICdib3JkZXJSaWdodFJhZGl1cycsXG4gICAgJ2JvcmRlckJvdHRvbVJhZGl1cycsXG4gICAgJ2JvcmRlckxlZnRSYWRpdXMnLFxuICAgICdsaW5lSGVpZ2h0JyxcbiAgICAnZm9udFdlaWdodCcsXG4gICAgJ2Z3JyxcbiAgICAnZm9udFNpemUnLFxuICAgICdmcycsXG4gICAgJ2ZvbnRGYW1pbHknLFxuICAgICdvcGFjaXR5JyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnbGF5b3V0QmxlZWQnLFxuICAgICdzdWJncmlkJyxcbiAgXSk7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wczogTWFwPHN0cmluZywgYW55Pikge1xuICAgIHN1cGVyLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBDaGVjayBpZiBhbnkgY29udGVudCBwcm9wIGhhcyBjaGFuZ2VkIHRvIGRldGVybWluZSBpZiB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaW5zdGFuY2Ugc3R5bGVzXG4gICAgbGV0IHNob3VsZFVwZGF0ZVN0eWxlcyA9IGZhbHNlO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGNoYW5nZWRQcm9wcy5rZXlzKCkpIHtcbiAgICAgIGlmIChNdGVDb250ZW50QmFzZS5jb250ZW50UHJvcHMuaGFzKGtleSkpIHtcbiAgICAgICAgc2hvdWxkVXBkYXRlU3R5bGVzID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFVwZGF0ZVN0eWxlcykge1xuICAgICAgLy8gRG91YmxlIHRoZSBgOmhvc3RgIHNlbGVjdG9yIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5IGJleW9uZCBtb3N0IGNvbXBvbmVudCBsZXZlbCBzdHlsZXMgYnkgZGVmYXVsdFxuICAgICAgdGhpcy5zZXRJbnN0YW5jZVN0eWxlKCdjb250ZW50LWJhc2UnLCBzZWxlY3RvckZhY3RvcnkodGhpcy5jb250ZW50U3R5bGVTZWxlY3RvclJvb3QpLCB7XG4gICAgICAgIC8vIFNwYWNpbmdcbiAgICAgICAgbTogdGhpcy5tLFxuICAgICAgICBteDogdGhpcy5teCxcbiAgICAgICAgbXk6IHRoaXMubXksXG4gICAgICAgIG10OiB0aGlzLm10LFxuICAgICAgICBtcjogdGhpcy5tcixcbiAgICAgICAgbWI6IHRoaXMubWIsXG4gICAgICAgIG1sOiB0aGlzLm1sLFxuICAgICAgICBwOiB0aGlzLnAsXG4gICAgICAgIHB4OiB0aGlzLnB4LFxuICAgICAgICBweTogdGhpcy5weSxcbiAgICAgICAgcHQ6IHRoaXMucHQsXG4gICAgICAgIHByOiB0aGlzLnByLFxuICAgICAgICBwYjogdGhpcy5wYixcbiAgICAgICAgcGw6IHRoaXMucGwsXG4gICAgICAgIC8vIFBvc2l0aW9uaW5nXG4gICAgICAgIGQ6IHRoaXMuc3ViZ3JpZCA/ICdncmlkJyA6IHRoaXMuZCxcbiAgICAgICAgYWxpZ25JdGVtczogdGhpcy5hID8/IHRoaXMuYWxpZ25JdGVtcyxcbiAgICAgICAgYWxpZ25TZWxmOiB0aGlzLmFsaWduU2VsZixcbiAgICAgICAgYWxpZ25Db250ZW50OiB0aGlzLmFsaWduQ29udGVudCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IHRoaXMuaiA/PyB0aGlzLmp1c3RpZnlDb250ZW50LFxuICAgICAgICBqdXN0aWZ5SXRlbXM6IHRoaXMuanVzdGlmeUl0ZW1zLFxuICAgICAgICBqdXN0aWZ5U2VsZjogdGhpcy5qdXN0aWZ5U2VsZixcbiAgICAgICAgZmxleDogdGhpcy5mbGV4LFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiB0aGlzLmRpcmVjdGlvbiA/PyB0aGlzLmZsZXhEaXJlY3Rpb24sXG4gICAgICAgIGZsZXhCYXNpczogdGhpcy5iYXNpcyA/PyB0aGlzLmZsZXhCYXNpcyxcbiAgICAgICAgZmxleFNocmluazogdGhpcy5zaHJpbmsgPz8gdGhpcy5mbGV4U2hyaW5rLFxuICAgICAgICBmbGV4R3JvdzogdGhpcy5ncm93ID8/IHRoaXMuZmxleEdyb3csXG4gICAgICAgIGZsZXhXcmFwOiB0aGlzLndyYXAgPz8gdGhpcy5mbGV4V3JhcCxcbiAgICAgICAgb3JkZXI6IHRoaXMub3JkZXIsXG4gICAgICAgIGdhcDogdGhpcy5nYXAsXG4gICAgICAgIGNvbHVtbkdhcDogdGhpcy5jb2x1bW5HYXAsXG4gICAgICAgIHJvd0dhcDogdGhpcy5yb3dHYXAsXG4gICAgICAgIGdyaWRDb2x1bW46IHRoaXMubGF5b3V0QmxlZWQgPyB0aGlzLmxheW91dEJsZWVkIDogdGhpcy5ncmlkQ29sdW1uLFxuICAgICAgICBncmlkUm93OiB0aGlzLmdyaWRSb3csXG4gICAgICAgIGdyaWRBdXRvRmxvdzogdGhpcy5ncmlkQXV0b0Zsb3csXG4gICAgICAgIGdyaWRBdXRvQ29sdW1uczogdGhpcy5ncmlkQXV0b0NvbHVtbnMsXG4gICAgICAgIGdyaWRBdXRvUm93czogdGhpcy5ncmlkQXV0b1Jvd3MsXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHRoaXMuc3ViZ3JpZCA/ICdzdWJncmlkJyA6IHRoaXMuZ3JpZFRlbXBsYXRlQ29sdW1ucyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogdGhpcy5ncmlkVGVtcGxhdGVSb3dzLFxuICAgICAgICBncmlkVGVtcGxhdGVBcmVhczogdGhpcy5ncmlkVGVtcGxhdGVBcmVhcyxcbiAgICAgICAgZ3JpZEFyZWE6IHRoaXMuZ3JpZEFyZWEsXG4gICAgICAgIC8vIFNpemluZ1xuICAgICAgICB3OiB0aGlzLncsXG4gICAgICAgIG1heHc6IHRoaXMubWF4dyxcbiAgICAgICAgbWludzogdGhpcy5taW53LFxuICAgICAgICBoOiB0aGlzLmgsXG4gICAgICAgIG1heGg6IHRoaXMubWF4aCxcbiAgICAgICAgbWluaDogdGhpcy5taW5oLFxuICAgICAgICAvLyBDb2xvcnNcbiAgICAgICAgYmc6IHRoaXMuYmcsXG4gICAgICAgIGM6IHRoaXMuYyxcbiAgICAgICAgLy8gQm9yZGVyc1xuICAgICAgICBib3JkZXJDb2xvcjogdGhpcy5ib3JkZXJDb2xvcixcbiAgICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuYm9yZGVyV2lkdGgsXG4gICAgICAgIGJvcmRlclN0eWxlOiB0aGlzLmJvcmRlclN0eWxlLFxuICAgICAgICBib3JkZXI6IHRoaXMuYm9yZGVyXG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm9yZGVyVG9wOiB0aGlzLmJvcmRlclRvcFxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlclJpZ2h0OiB0aGlzLmJvcmRlclJpZ2h0XG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm9yZGVyTGVmdDogdGhpcy5ib3JkZXJMZWZ0XG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm9yZGVyQm90dG9tOiB0aGlzLmJvcmRlckJvdHRvbVxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIC8vIEJvcmRlciBSYWRpdXNcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLmJvcmRlclJhZGl1cyxcbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJUb3BSaWdodFJhZGl1cyA/PyB0aGlzLmJvcmRlclRvcFJhZGl1cyA/PyB0aGlzLmJvcmRlclJpZ2h0UmFkaXVzLFxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOlxuICAgICAgICAgIHRoaXMuYm9yZGVyVG9wTGVmdFJhZGl1cyA/PyB0aGlzLmJvcmRlclRvcFJhZGl1cyA/PyB0aGlzLmJvcmRlckxlZnRSYWRpdXMsXG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOlxuICAgICAgICAgIHRoaXMuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPz8gdGhpcy5ib3JkZXJCb3R0b21SYWRpdXMgPz8gdGhpcy5ib3JkZXJSaWdodFJhZGl1cyxcbiAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPz8gdGhpcy5ib3JkZXJCb3R0b21SYWRpdXMgPz8gdGhpcy5ib3JkZXJMZWZ0UmFkaXVzLFxuICAgICAgICAvLyBGb250c1xuICAgICAgICBsaW5lSGVpZ2h0OiB0aGlzLmxpbmVIZWlnaHQsXG4gICAgICAgIGZvbnRXZWlnaHQ6IHRoaXMuZncgPz8gdGhpcy5mb250V2VpZ2h0LFxuICAgICAgICBmb250U2l6ZTogdGhpcy5mcyA/PyB0aGlzLmZvbnRTaXplLFxuICAgICAgICBmb250RmFtaWx5OiB0aGlzLmZvbnRGYW1pbHksXG4gICAgICAgIC8vIE9wYWNpdHlcbiAgICAgICAgb3BhY2l0eTogdGhpcy5vcGFjaXR5LFxuICAgICAgICAvLyBFbGV2YXRpb25cbiAgICAgICAgZWxldmF0aW9uOiB0aGlzLmVsZXZhdGlvbixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IGRlZmF1bHRDb252ZXJ0ZXIgfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgY29uc3QgUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyID0ge1xuICBmcm9tQXR0cmlidXRlOiAodmFsdWUsIHR5cGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHZhbHVlPy5bMF0gPT09ICd7Jykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdENvbnZlcnRlci5mcm9tQXR0cmlidXRlKHZhbHVlLCBPYmplY3QpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdENvbnZlcnRlci5mcm9tQXR0cmlidXRlKHZhbHVlLCB0eXBlKTtcbiAgfSxcbiAgdG9BdHRyaWJ1dGU6ICh2YWx1ZSwgdHlwZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdENvbnZlcnRlci50b0F0dHJpYnV0ZSh2YWx1ZSwgT2JqZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIudG9BdHRyaWJ1dGUodmFsdWUsIHR5cGUpO1xuICB9LFxufTtcbiIsICJpbXBvcnQgeyBEaXJlY3RpdmVSZXN1bHQgfSBmcm9tICdsaXQvZGlyZWN0aXZlLmpzJztcbmltcG9ydCB7IHVuc2FmZVNWRywgVW5zYWZlU1ZHRGlyZWN0aXZlIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvdW5zYWZlLXN2Zy5qcyc7XG5cbmV4cG9ydCBjb25zdCBoZWJMb2dvU3ZnQ29udGVudHM6IERpcmVjdGl2ZVJlc3VsdDx0eXBlb2YgVW5zYWZlU1ZHRGlyZWN0aXZlPiA9IHVuc2FmZVNWRyhcbiAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgaWQ9XCJMYXllcl8xXCIgeD1cIjBcIiB5PVwiMFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDUzNi4yNyAxODYuMjRcIj48c3R5bGU+LnN0MHtmaWxsOiNlMTI1MWJ9LnN0MXtmaWxsOiNmZmZ9PC9zdHlsZT48ZyBpZD1cIl94MzFfLUhFQl9NQUlOX0xPR09fMDAwMDAwOTYwNDM0MDQyMDY4NjE4ODA4NzAwMDAwMDQ4MTMyNDA5Mzg5NDY4NTUzNTVfXCI+PHBhdGggZD1cIk05My4xMiAxODYuMjRDNDEuNjkgMTg2LjI0IDAgMTQ0LjU1IDAgOTMuMTJTNDEuNjkgMCA5My4xMiAwaDM1MC4wM2M1MS40MyAwIDkzLjEyIDQxLjY5IDkzLjEyIDkzLjEycy00MS42OSA5My4xMi05My4xMiA5My4xMkg5My4xMnpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTkzLjEyIDE3NC4xOWMtNDQuNzYgMC04MS4wNS0zNi4yOS04MS4wNS04MS4wNXMzNi4yOS04MS4wNSA4MS4wNS04MS4wNWgzNTAuMDNjNDQuNzYgMCA4MS4wNSAzNi4yOSA4MS4wNSA4MS4wNXMtMzYuMjkgODEuMDUtODEuMDUgODEuMDVIOTMuMTJ6XCIgY2xhc3M9XCJzdDFcIi8+PHBhdGggZD1cIm00NDQuOTQgMjQuMTEtMzUzLjY0LjAyYy0zNy4wNyAwLTY3LjIgMzAuOTUtNjcuMTYgNjkuMDcgMCAzNy45MyAzMC4xNiA2OC44OCA2Ny4xNiA2OC44OGwzNTMuNjMtLjA3YzM3LjEtLjAzIDY3LjE1LTMwLjg5IDY3LjItNjguODUtLjA0LTM4LjItMzAuMDktNjkuMDUtNjcuMTktNjkuMDV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk0yMjQuMjEgMTMyLjIzaDg4LjFsLjc2LTEyLjk4aC01Ni4xOHYtMTQuODRoNDQuODFWODkuMzNoLTQ0LjgxVjczLjI1bDU4LjkyLS4wMSAxLjE1LTE5LjI5aC05Ny40ek0xMzIuNDYgNTMuOTV2MzUuMzhIMTA4LjZWNTMuOTVINzEuMjdsNC42NSA3OC4yOGgzMi42OHYtMjcuODJoMjMuODZ2MjcuODJoMzIuNjhsNC42NS03OC4yOHpNNDQ4LjUyIDk3LjAyYzkuOS0yLjgzIDE2LjQ5LTguNTkgMTYuNDktMjAuNjcuMDMtMTMuODItMTEuMDYtMjIuNC0yNS4yOS0yMi40aC03My4yOGw0LjY1IDc4LjI5aDY0LjA2YzI3Ljk4IDAgMjYuMzktMTguOCAyNi4zOS0xOC44IDAtNy45Ni01LjMzLTE0LjYxLTEzLjAyLTE2LjQyem0tMzEuMDIgMjIuMjJoLTEzLjcxdi0xNC44M2gxMy4yMmM3LjIzIDAgMTEuMDkgMi4zMSAxMS4wOSA3LjQ4LjAxIDQuOTQtMy40OSA3LjM1LTEwLjYgNy4zNXptMS4wNi0yOS45MWgtMTQuNzdWNzMuMjVoMTQuMjVjNy44NSAwIDEyLjAzIDIuNSAxMi4wMyA4LjExIDAgNS4zNS0zLjc5IDcuOTctMTEuNTEgNy45N3pNMTgyLjc2IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4ek0zMjkuNjQgODkuMzNsLjkgMTUuMDhoMjIuMDNsLjktMTUuMDh6XCIgY2xhc3M9XCJzdDFcIi8+PHBhdGggZD1cIk01MzAuMzQgMTcyLjc3YzAtMi40Ni0xLjQ2LTMuNTQtNC40LTMuNTRoLTQuNzR2MTIuNDRoMS44OHYtNS4zOWgyLjE3bDMuMjggNS4zOWgyLjExbC0zLjU0LTUuNDhjMS44NC0uMjIgMy4yNC0xLjE5IDMuMjQtMy40MnptLTcuMjUgMS45MnYtMy44NmgyLjU3YzEuMzEgMCAyLjcxLjI5IDIuNzEgMS44MyAwIDEuOTItMS40MyAyLjAzLTMuMDMgMi4wM2gtMi4yNXpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTUyNS4zNyAxNjQuNjdjLTUuOTMgMC0xMC45NiA0LjU3LTEwLjk2IDEwLjc2IDAgNi4yNCA1LjAyIDEwLjgxIDEwLjk2IDEwLjgxIDUuODggMCAxMC45LTQuNTcgMTAuOS0xMC44MSAwLTYuMi01LjAyLTEwLjc2LTEwLjktMTAuNzZ6bTAgMTkuNzhjLTQuOTMgMC04Ljc5LTMuODMtOC43OS05LjAyIDAtNS4xMSAzLjg1LTguOTYgOC43OS04Ljk2IDQuODggMCA4LjczIDMuODUgOC43MyA4Ljk2IDAgNS4xOS0zLjg1IDkuMDItOC43MyA5LjAyelwiIGNsYXNzPVwic3QwXCIvPjwvZz48L3N2Zz5gXG4pO1xuXG5leHBvcnQgY29uc3QgaGViTG9nb1doaXRlQ29weXJpZ2h0U3ZnQ29udGVudHM6IERpcmVjdGl2ZVJlc3VsdDx0eXBlb2YgVW5zYWZlU1ZHRGlyZWN0aXZlPiA9XG4gIHVuc2FmZVNWRyhcbiAgICBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiBpZD1cIkxheWVyXzFcIiB4PVwiMFwiIHk9XCIwXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgNTM2LjI3IDE4Ni4yNFwiPjxzdHlsZT4uc3Qwe2ZpbGw6I2UxMjUxYn0uc3Qxe2ZpbGw6I2ZmZn08L3N0eWxlPjxnIGlkPVwiX3gzMV8tSEVCX01BSU5fTE9HT18wMDAwMDA5NjA0MzQwNDIwNjg2MTg4MDg3MDAwMDAwNDgxMzI0MDkzODk0Njg1NTM1NV9cIj48cGF0aCBkPVwiTTkzLjEyIDE4Ni4yNEM0MS42OSAxODYuMjQgMCAxNDQuNTUgMCA5My4xMlM0MS42OSAwIDkzLjEyIDBoMzUwLjAzYzUxLjQzIDAgOTMuMTIgNDEuNjkgOTMuMTIgOTMuMTJzLTQxLjY5IDkzLjEyLTkzLjEyIDkzLjEySDkzLjEyelwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNOTMuMTIgMTc0LjE5Yy00NC43NiAwLTgxLjA1LTM2LjI5LTgxLjA1LTgxLjA1czM2LjI5LTgxLjA1IDgxLjA1LTgxLjA1aDM1MC4wM2M0NC43NiAwIDgxLjA1IDM2LjI5IDgxLjA1IDgxLjA1cy0zNi4yOSA4MS4wNS04MS4wNSA4MS4wNUg5My4xMnpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwibTQ0NC45NCAyNC4xMS0zNTMuNjQuMDJjLTM3LjA3IDAtNjcuMiAzMC45NS02Ny4xNiA2OS4wNyAwIDM3LjkzIDMwLjE2IDY4Ljg4IDY3LjE2IDY4Ljg4bDM1My42My0uMDdjMzcuMS0uMDMgNjcuMTUtMzAuODkgNjcuMi02OC44NS0uMDQtMzguMi0zMC4wOS02OS4wNS02Ny4xOS02OS4wNXpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTIyNC4yMSAxMzIuMjNoODguMWwuNzYtMTIuOThoLTU2LjE4di0xNC44NGg0NC44MVY4OS4zM2gtNDQuODFWNzMuMjVsNTguOTItLjAxIDEuMTUtMTkuMjloLTk3LjR6TTEzMi40NiA1My45NXYzNS4zOEgxMDguNlY1My45NUg3MS4yN2w0LjY1IDc4LjI4aDMyLjY4di0yNy44MmgyMy44NnYyNy44MmgzMi42OGw0LjY1LTc4LjI4ek00NDguNTIgOTcuMDJjOS45LTIuODMgMTYuNDktOC41OSAxNi40OS0yMC42Ny4wMy0xMy44Mi0xMS4wNi0yMi40LTI1LjI5LTIyLjRoLTczLjI4bDQuNjUgNzguMjloNjQuMDZjMjcuOTggMCAyNi4zOS0xOC44IDI2LjM5LTE4LjggMC03Ljk2LTUuMzMtMTQuNjEtMTMuMDItMTYuNDJ6bS0zMS4wMiAyMi4yMmgtMTMuNzF2LTE0LjgzaDEzLjIyYzcuMjMgMCAxMS4wOSAyLjMxIDExLjA5IDcuNDguMDEgNC45NC0zLjQ5IDcuMzUtMTAuNiA3LjM1em0xLjA2LTI5LjkxaC0xNC43N1Y3My4yNWgxNC4yNWM3Ljg1IDAgMTIuMDMgMi41IDEyLjAzIDguMTEgMCA1LjM1LTMuNzkgNy45Ny0xMS41MSA3Ljk3ek0xODIuNzYgODkuMzNsLjkgMTUuMDhoMjIuMDNsLjktMTUuMDh6TTMyOS42NCA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpNNTI4LjM0IDE3MC43N2MwLTIuNDYtMS40Ni0zLjU0LTQuNC0zLjU0aC00Ljc0djEyLjQ0aDEuODh2LTUuMzloMi4xN2wzLjI4IDUuMzloMi4xMWwtMy41NC01LjQ4YzEuODQtLjIyIDMuMjQtMS4xOSAzLjI0LTMuNDJ6bS03LjI1IDEuOTJ2LTMuODZoMi41N2MxLjMxIDAgMi43MS4yOSAyLjcxIDEuODMgMCAxLjkyLTEuNDMgMi4wMy0zLjAzIDIuMDNoLTIuMjV6XCIgY2xhc3M9XCJzdDFcIi8+PHBhdGggZD1cIk01MjMuMzcgMTYyLjY3Yy01LjkzIDAtMTAuOTYgNC41Ny0xMC45NiAxMC43NiAwIDYuMjQgNS4wMiAxMC44MSAxMC45NiAxMC44MSA1Ljg4IDAgMTAuOS00LjU3IDEwLjktMTAuODEgMC02LjItNS4wMi0xMC43Ni0xMC45LTEwLjc2em0wIDE5Ljc4Yy00LjkzIDAtOC43OS0zLjgzLTguNzktOS4wMiAwLTUuMTEgMy44NS04Ljk2IDguNzktOC45NiA0Ljg4IDAgOC43MyAzLjg1IDguNzMgOC45NiAwIDUuMTktMy44NSA5LjAyLTguNzMgOS4wMnpcIiBjbGFzcz1cInN0MVwiLz48L2c+PC9zdmc+YFxuICApO1xuXG5leHBvcnQgY29uc3QgaGViTG9nb0ludmVyc2VTdmdDb250ZW50czogRGlyZWN0aXZlUmVzdWx0PHR5cGVvZiBVbnNhZmVTVkdEaXJlY3RpdmU+ID0gdW5zYWZlU1ZHKFxuICBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiBpZD1cIkxheWVyXzFcIiB4PVwiMFwiIHk9XCIwXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgNTM2LjI3IDE4Ni4yNFwiPjxzdHlsZT4uc3Qwe2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGQ9XCJNNDQzLjE1IDBIOTMuMTJDNDEuNjkgMCAwIDQxLjY5IDAgOTMuMTJjMCA1MS40MyA0MS42OSA5My4xMiA5My4xMiA5My4xMmgzNTAuMDNjNTEuNDMgMCA5My4xMi00MS42OSA5My4xMi05My4xMkM1MzYuMjcgNDEuNjkgNDk0LjU4IDAgNDQzLjE1IDB6bTAgMTc0LjE5SDkzLjEyYy00NC43NiAwLTgxLjA1LTM2LjI5LTgxLjA1LTgxLjA1czM2LjI5LTgxLjA1IDgxLjA1LTgxLjA1aDM1MC4wM2M0NC43NiAwIDgxLjA1IDM2LjI5IDgxLjA1IDgxLjA1LjAxIDQ0Ljc2LTM2LjI4IDgxLjA1LTgxLjA1IDgxLjA1em0tMTMuMDgtOTIuODNjMCA1LjM2LTMuNzkgNy45OC0xMS41MSA3Ljk4aC0xNC43N1Y3My4yNWgxNC4yNWM3Ljg0IDAgMTIuMDMgMi41IDEyLjAzIDguMTF6bS0xLjk2IDMwLjUzYzAgNC45NC0zLjUgNy4zNi0xMC42MSA3LjM2aC0xMy43MXYtMTQuODNoMTMuMjJjNy4yNC0uMDEgMTEuMSAyLjMgMTEuMSA3LjQ3em0xNi44My04Ny43OC0zNTMuNjQuMDJjLTM3LjA3IDAtNjcuMiAzMC45NS02Ny4xNiA2OS4wNyAwIDM3LjkyIDMwLjE2IDY4Ljg4IDY3LjE2IDY4Ljg4bDM1My42My0uMDdjMzcuMS0uMDMgNjcuMTUtMzAuODkgNjcuMi02OC44NS0uMDQtMzguMi0zMC4wOS02OS4wNS02Ny4xOS02OS4wNXptLTI3OS44IDEwOC4xMmgtMzIuNjh2LTI3LjgySDEwOC42djI3LjgySDc1LjkybC00LjY1LTc4LjI4aDM3LjMzdjM1LjM4aDIzLjg2VjUzLjk1aDM3LjMzbC00LjY1IDc4LjI4em00MC41NS0yNy44MmgtMjIuMDRsLS45LTE1LjA4aDIzLjgzbC0uODkgMTUuMDh6bTExMC4xMi0zMS4xNy01OC45Mi4wMXYxNi4wOGg0NC44MXYxNS4wOGgtNDQuODF2MTQuODNoNTYuMThsLS43NiAxMi45OWgtODguMWwtNC42NS03OC4yOGg5Ny40bC0xLjE1IDE5LjI5em0zNi43NiAzMS4xN2gtMjIuMDRsLS45LTE1LjA4aDIzLjgzbC0uODkgMTUuMDh6bTEwOC45NyA5LjAzczEuNTkgMTguOC0yNi4zOSAxOC44aC02NC4wNmwtNC42NS03OC4yOWg3My4yOGMxNC4yMyAwIDI1LjMxIDguNTggMjUuMjkgMjIuNCAwIDEyLjA4LTYuNTkgMTcuODUtMTYuNDkgMjAuNjcgNy42OSAxLjgxIDEzLjAyIDguNDYgMTMuMDIgMTYuNDJ6TTUzMC4zNCAxNzIuNzdjMC0yLjQ2LTEuNDYtMy41NC00LjQtMy41NGgtNC43NHYxMi40NGgxLjg4di01LjM5aDIuMTdsMy4yOCA1LjM5aDIuMTFsLTMuNTQtNS40OGMxLjg0LS4yMiAzLjI0LTEuMTkgMy4yNC0zLjQyem0tNy4yNSAxLjkydi0zLjg2aDIuNTdjMS4zMSAwIDIuNzEuMjkgMi43MSAxLjgzIDAgMS45Mi0xLjQzIDIuMDMtMy4wMyAyLjAzaC0yLjI1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNNTI1LjM3IDE2NC42N2MtNS45MyAwLTEwLjk2IDQuNTctMTAuOTYgMTAuNzYgMCA2LjI0IDUuMDIgMTAuODEgMTAuOTYgMTAuODEgNS44OCAwIDEwLjktNC41NyAxMC45LTEwLjgxIDAtNi4yLTUuMDItMTAuNzYtMTAuOS0xMC43NnptMCAxOS43OGMtNC45MyAwLTguNzktMy44My04Ljc5LTkuMDIgMC01LjExIDMuODUtOC45NiA4Ljc5LTguOTYgNC44OCAwIDguNzMgMy44NSA4LjczIDguOTYgMCA1LjE5LTMuODUgOS4wMi04LjczIDkuMDJ6XCIgY2xhc3M9XCJzdDBcIi8+PC9zdmc+YFxuKTtcbiIsICJpbXBvcnQgdHlwZSB7IFJlYWN0aXZlQ29udHJvbGxlciwgUmVhY3RpdmVDb250cm9sbGVySG9zdCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBTaWduYWwsIGNvbXB1dGVkLCBpc1Nzciwgc2lnbmFsIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IGludGVyZmFjZSBTbG90Q29udHJvbGxlck9wdGlvbnMge1xuICAvKiogTmFtZXMgb2Ygc2xvdHMgdGhhdCBzaG91bGQgdHJpZ2dlciBhIGNvbXBvbmVudCB1cGRhdGUgaWYgY2hhbmdlZCAqL1xuICB1cGRhdGVPbkNoYW5nZT86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY2xhc3MgU2xvdENvbnRyb2xsZXIgaW1wbGVtZW50cyBSZWFjdGl2ZUNvbnRyb2xsZXIge1xuICBwdWJsaWMgc2xvdENoYW5nZSA9IHNpZ25hbDxTZXQ8c3RyaW5nPj4obnVsbCk7XG4gIHB1YmxpYyBvbkNvbm5lY3RlZCA9IHNpZ25hbChmYWxzZSk7XG4gIHB1YmxpYyBjb25uZWN0ZWRDb21wbGV0ZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc3VicyA9IFtdO1xuICBwcml2YXRlIHVwZGF0ZVRyaWdnZXJTbG90cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBob3N0OiBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0ICYgRWxlbWVudCxcbiAgICBwdWJsaWMgb3B0aW9uczogU2xvdENvbnRyb2xsZXJPcHRpb25zID0gbnVsbFxuICApIHtcbiAgICB0aGlzLmhvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZU9uQ2hhbmdlKG9wdGlvbnM/LnVwZGF0ZU9uQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyB3aGVuIG9uZSBvZiB0aGUgc3BlY2lmaWVkIHNsb3RzIGhhcyBjaGFuZ2VkIGFuZCBhZnRlciB0aGUgZmlyc3RVcGRhdGUgYWZ0ZXIgaG9zdENvbm5lY3RlZCAqL1xuICBwdWJsaWMgd2F0Y2hTbG90cyhzbG90czogc3RyaW5nW10gPSBbXSwgeyB1cGRhdGVPbkNvbm5lY3RlZCB9ID0geyB1cGRhdGVPbkNvbm5lY3RlZDogdHJ1ZSB9KSB7XG4gICAgY29uc3QgcmV0dXJuU2lnbmFsID0gc2lnbmFsPFNldDxzdHJpbmc+PigpO1xuICAgIHRoaXMuc3Vicy5wdXNoKFxuICAgICAgY29tcHV0ZWQoXG4gICAgICAgIFt0aGlzLm9uQ29ubmVjdGVkLCB0aGlzLnNsb3RDaGFuZ2VdLFxuICAgICAgICAoW2Nvbm5lY3RlZCwgY2hhbmdlc106IFtib29sZWFuLCBTZXQ8c3RyaW5nPl0sIHNldCkgPT4ge1xuICAgICAgICAgIGlmICh1cGRhdGVPbkNvbm5lY3RlZCAmJiBjb25uZWN0ZWQgJiYgIXRoaXMuY29ubmVjdGVkQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGVkQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgc2V0KG5ldyBTZXQoc2xvdHMpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2hhbmdlcyAmJlxuICAgICAgICAgICAgQXJyYXkuZnJvbShjaGFuZ2VzLmtleXMoKSkuc29tZSgoa2V5KSA9PiBzbG90cy5sZW5ndGggPT09IDAgfHwgc2xvdHMuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNldChjaGFuZ2VzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICkuc3Vic2NyaWJlKChjaGFuZ2VzOiBTZXQ8c3RyaW5nPikgPT4ge1xuICAgICAgICBpZiAoY2hhbmdlcykge1xuICAgICAgICAgIHJldHVyblNpZ25hbC5zZXQoY2hhbmdlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gcmV0dXJuU2lnbmFsIGFzIFNpZ25hbDxTZXQ8c3RyaW5nPj47XG4gIH1cblxuICBwdWJsaWMgY2hlY2soc2xvdE5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBzbG90TmFtZSA9PT0gJ2RlZmF1bHQnID8gdGhpcy5oYXNEZWZhdWx0U2xvdCgpIDogdGhpcy5oYXNOYW1lZFNsb3Qoc2xvdE5hbWUpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZU9uQ2hhbmdlKHNsb3RzOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNsb3RzKSkge1xuICAgICAgc2xvdHMuZm9yRWFjaCgoc2xvdCkgPT4gdGhpcy51cGRhdGVUcmlnZ2VyU2xvdHMuYWRkKHNsb3QpKTtcbiAgICB9IGVsc2UgaWYgKHNsb3RzKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRyaWdnZXJTbG90cy5hZGQoc2xvdHMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFzRGVmYXVsdFNsb3QoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmhvc3QuY2hpbGROb2Rlc10uc29tZSgobm9kZSkgPT4ge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IG5vZGUuVEVYVF9OT0RFICYmIG5vZGUudGV4dENvbnRlbnQ/LnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBub2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBjb25zdCBlbCA9IG5vZGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gSWdub3JlIHZpc3VhbGx5IGhpZGRlbiBlbGVtZW50cyBzaW5jZSB0aGV5IGFyZW4ndCByZW5kZXJlZFxuICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ210ZS12aXN1YWxseS1oaWRkZW4nKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgZG9lc24ndCBoYXZlIGEgc2xvdCBhdHRyaWJ1dGUsIGl0J3MgcGFydCBvZiB0aGUgZGVmYXVsdCBzbG90XG4gICAgICAgIGlmICghZWwuaGFzQXR0cmlidXRlKCdzbG90JykpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhc05hbWVkU2xvdChuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QucXVlcnlTZWxlY3RvcihgOnNjb3BlID4gW3Nsb3Q9XCIke25hbWV9XCJdYCkgIT09IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNsb3RDaGFuZ2UgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2xvdCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MU2xvdEVsZW1lbnQ7XG5cbiAgICAvLyBTZXR1cCBldmVudCBtYXBcbiAgICBjb25zdCBldmVudFNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIC8vIEFkZCBkdXBsaWNhdGUgbWFwcGluZyBmb3Igc2ltcGxpZmllZCBkZWZhdWx0IG5hbWVcbiAgICBpZiAoc2xvdC5uYW1lID09PSAnW2RlZmF1bHRdJyB8fCBzbG90Lm5hbWUgPT09ICcnKSB7XG4gICAgICBldmVudFNldC5hZGQoJ2RlZmF1bHQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnRTZXQuYWRkKHNsb3QubmFtZSk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBzbG90IGNoYW5nZSByZWFjdGl2ZSBldmVudFxuICAgIHRoaXMuc2xvdENoYW5nZS5zZXQoZXZlbnRTZXQpO1xuXG4gICAgLy8gQXV0b21hdGljYWxseSByZXF1ZXN0IGEgY29tcG9uZW50IHVwZGF0ZSBhcyBjb25maWd1cmF0aW9uIGRpY3RhdGVzXG4gICAgaWYgKFxuICAgICAgKHRoaXMudXBkYXRlVHJpZ2dlclNsb3RzLmhhcygnZGVmYXVsdCcpICYmICFzbG90Lm5hbWUpIHx8XG4gICAgICAoc2xvdC5uYW1lICYmIHRoaXMudXBkYXRlVHJpZ2dlclNsb3RzLmhhcyhzbG90Lm5hbWUpKVxuICAgICkge1xuICAgICAgdGhpcy5ob3N0LnJlcXVlc3RVcGRhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgaG9zdENvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmhvc3Quc2hhZG93Um9vdD8uYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsIHRoaXMuaGFuZGxlU2xvdENoYW5nZSk7XG5cbiAgICAvLyBXYWl0IHVudGlsIGZpcnN0IHVwZGF0ZSBhZnRlciBjb25uZWN0ZWRcbiAgICB0aGlzLmhvc3QudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLm9uQ29ubmVjdGVkLnNldCh0cnVlKTtcbiAgICAgIC8vIFRPRE8ocmVlY2UpOiByZWNvbnNpZGVyIHdoZW4gYSBzb2x1dGlvbiBleGlzdHMgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8xNDM0XG4gICAgICAvLyBJZiBhZnRlciB0aGUgZmlyc3RVcGRhdGUgd2UncmUgd2F0Y2hpbmcgc2xvdHMgcmVxdWVzdCBhbm90aGVyIGluIGNhc2Ugc3NyLXNsb3RzIHdhcyBub3QgcHJvcGVybHkgc2V0IGJ5IHRoZSB1c2VyXG4gICAgICBpZiAodGhpcy51cGRhdGVUcmlnZ2VyU2xvdHMuc2l6ZSA+IDApIHtcbiAgICAgICAgdGhpcy5ob3N0LnJlcXVlc3RVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhvc3REaXNjb25uZWN0ZWQoKSB7XG4gICAgdGhpcy5ob3N0LnNoYWRvd1Jvb3Q/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCB0aGlzLmhhbmRsZVNsb3RDaGFuZ2UpO1xuICAgIHRoaXMuc3Vicy5mb3JFYWNoKCh1bnN1YikgPT4gdW5zdWIoKSk7XG4gICAgdGhpcy5zdWJzID0gW107XG4gICAgdGhpcy5jb25uZWN0ZWRDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMub25Db25uZWN0ZWQuc2V0KGZhbHNlKTtcbiAgfVxufVxuXG4vKipcbiAqIEdpdmVuIGEgc2xvdCwgdGhpcyBmdW5jdGlvbiBpdGVyYXRlcyBvdmVyIGFsbCBvZiBpdHMgYXNzaWduZWQgZWxlbWVudCBhbmQgdGV4dCBub2RlcyBhbmQgcmV0dXJucyB0aGUgY29uY2F0ZW5hdGVkXG4gKiBIVE1MIGFzIGEgc3RyaW5nLiBUaGlzIGlzIHVzZWZ1bCBiZWNhdXNlIHdlIGNhbid0IHVzZSBzbG90LmlubmVySFRNTCBhcyBhbiBhbHRlcm5hdGl2ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElubmVySFRNTChzbG90OiBIVE1MU2xvdEVsZW1lbnQpOiBzdHJpbmcge1xuICBjb25zdCBub2RlcyA9IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gIGxldCBodG1sID0gJyc7XG5cbiAgWy4uLm5vZGVzXS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICBodG1sICs9IChub2RlIGFzIEhUTUxFbGVtZW50KS5vdXRlckhUTUw7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICBodG1sICs9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaHRtbDtcbn1cblxuLyoqXG4gKiBHaXZlbiBhIHNsb3QsIHRoaXMgZnVuY3Rpb24gaXRlcmF0ZXMgb3ZlciBhbGwgb2YgaXRzIGFzc2lnbmVkIHRleHQgbm9kZXMgYW5kIHJldHVybnMgdGhlIGNvbmNhdGVuYXRlZCB0ZXh0IGFzIGFcbiAqIHN0cmluZy4gVGhpcyBpcyB1c2VmdWwgYmVjYXVzZSB3ZSBjYW4ndCB1c2Ugc2xvdC50ZXh0Q29udGVudCBhcyBhbiBhbHRlcm5hdGl2ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHRDb250ZW50KHNsb3Q6IEhUTUxTbG90RWxlbWVudCB8IHVuZGVmaW5lZCB8IG51bGwpOiBzdHJpbmcge1xuICBpZiAoIXNsb3QpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgY29uc3Qgbm9kZXMgPSBzbG90LmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pO1xuICBsZXQgdGV4dCA9ICcnO1xuXG4gIFsuLi5ub2Rlc10uZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgdGV4dCArPSBub2RlLnRleHRDb250ZW50O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbmltcG9ydCB7XG4gIGNvbmZpZyBhcyBnZXR0ZXJDb25maWcsXG4gIHNldENvbmZpZyBhcyBzZXR0ZXJDb25maWcsXG4gIE1vcnRhclRoZW1lQ29uZmlnLFxufSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQgeyBTdWJzZXQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc1Nzciwgc2lnbmFsIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IHR5cGUgTXRlVGhlbWUgPSAnZGVmYXVsdCcgfCAncHhMaWdodCcgfCAnY3hMaWdodCcgfCAncnhMaWdodCc7XG5cbmV4cG9ydCB0eXBlIE10ZUNvbG9yU2NoZW1lID0gJ2xpZ2h0JyB8ICdkYXJrJyB8ICdzeXN0ZW0nO1xuXG5jb25zdCBDQUNIRV9UT19LRVkgPSAnbXRlLnRoZW1lLmNhY2hlLXRvJztcbmNvbnN0IENPTE9SX1NDSEVNRV9LRVkgPSAnbXRlLnRoZW1lLmdsb2JhbC1jb2xvci1zY2hlbWUnO1xuXG5jbGFzcyBfTXRlVGhlbWVTZXJ2aWNlIHtcbiAgY29uZmlnID0gZ2V0dGVyQ29uZmlnO1xuXG4gIHByaXZhdGUgcm9vdE9ic2VydmVyPzogTXV0YXRpb25PYnNlcnZlcjtcbiAgcHJpdmF0ZSB0aGVtZVNpZ25hbCA9IHNpZ25hbDxNdGVUaGVtZSB8IG51bGw+KHRoaXMuZ2V0R2xvYmFsVGhlbWUoKSk7XG4gIHByaXZhdGUgY29sb3JTY2hlbWVTaWduYWwgPSBzaWduYWw8TXRlQ29sb3JTY2hlbWUgfCBudWxsPih0aGlzLmdldEdsb2JhbENvbG9yU2NoZW1lKCkgPz8gJ2xpZ2h0Jyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0Q2FjaGUoKTtcbiAgfVxuXG4gIC8qKiBDb25maWd1cmVzIHRoZSBgTXRlVGhlbWVTZXJ2aWNlYCB0byBjYWNoZSBjb2xvci1zY2hlbWUgY2hhbmdlcyB0byBgbG9jYWxTdG9yYWdlYCwgYHNlc3Npb25TdG9yYWdlYCwgb3IgbmVpdGhlci4gKi9cbiAgcHVibGljIGNhY2hlQ29sb3JTY2hlbWVUbyhtZXRob2Q6ICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJykge1xuICAgIGlmICghbWV0aG9kKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENsZWFyIGFsbCBrZXlzIGZyb20gYWxsIHN0b3JhZ2UgbG9jYXRpb25zIGlmIG5vbmVcbiAgICBpZiAobWV0aG9kID09PSAnbm9uZScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKENPTE9SX1NDSEVNRV9LRVkpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIHRyeSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oQ0FDSEVfVE9fS0VZKTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShDT0xPUl9TQ0hFTUVfS0VZKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRTY2hlbWUgPSB0aGlzLmNvbG9yU2NoZW1lU2lnbmFsLmdldCgpO1xuICAgIC8vIFNldCBjYWNoZSBtZXRob2QgaW4gc3RvcmFnZSAtIFRyeSBsb2NhbFN0b3JhZ2UgZmlyc3RcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ0FDSEVfVE9fS0VZLCBtZXRob2QpO1xuICAgICAgaWYgKGN1cnJlbnRTY2hlbWUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ09MT1JfU0NIRU1FX0tFWSwgY3VycmVudFNjaGVtZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ010ZVRoZW1lU2VydmljZTogQ291bGQgbm90IHNldCBjb2xvciBzY2hlbWUgY2FjaGUgbWV0aG9kIHRvIGBsb2NhbFN0b3JhZ2VgLiBBdHRlbXB0aW5nIGZhbGxiYWNrIHRvIGBzZXNzaW9uU3RvcmFnZWAuIENhY2hpbmcgd2lsbCBvbmx5IGhhcHBlbiB0byBzZXNzaW9uU3RvcmFnZS4nXG4gICAgICApO1xuICAgICAgLy8gVHJ5IHNlc3Npb25TdG9yYWdlIG5leHRcbiAgICAgIHRyeSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oQ0FDSEVfVE9fS0VZLCAnc2Vzc2lvblN0b3JhZ2UnKTtcbiAgICAgICAgaWYgKGN1cnJlbnRTY2hlbWUpIHtcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKENPTE9SX1NDSEVNRV9LRVksIGN1cnJlbnRTY2hlbWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ010ZVRoZW1lU2VydmljZTogQ291bGQgbm90IHNldCBjb2xvciBzY2hlbWUgY2FjaGUgbWV0aG9kIHRvIGBsb2NhbFN0b3JhZ2VgIG9yIGBzZXNzaW9uU3RvcmFnZWAuIENhY2hpbmcgbm90IGVuYWJsZWQuJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBjdXJyZW50IGdsb2JhbCB0aGVtZSBvbiB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgc2V0R2xvYmFsVGhlbWUodGhlbWU6IE10ZVRoZW1lKSB7XG4gICAgaWYgKCF0aGVtZSB8fCB0eXBlb2YgdGhlbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ010ZVRoZW1lU2VydmljZTogR2xvYmFsIHRoZW1lIHBhcmFtIG11c3QgYmUgYSBzdHJpbmcuJyk7XG4gICAgfVxuICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgaWYgKHRoZW1lICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnZGF0YS1tdGUtdGhlbWUnLCB0aGVtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1tdGUtdGhlbWUnKTtcbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgY3VycmVudCBnbG9iYWwgY29sb3Itc2NoZW1lIG9uIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBzZXRHbG9iYWxDb2xvclNjaGVtZShjb2xvclNjaGVtZTogTXRlQ29sb3JTY2hlbWUpIHtcbiAgICBpZiAoIWNvbG9yU2NoZW1lIHx8IHR5cGVvZiBjb2xvclNjaGVtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXRlVGhlbWVTZXJ2aWNlOiBHbG9iYWwgY29sb3JTY2hlbWUgcGFyYW0gbXVzdCBiZSBhIHN0cmluZy4nKTtcbiAgICB9XG4gICAgY29uc3Qgc2NoZW1lID0gY29sb3JTY2hlbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoc2NoZW1lID09PSAnZGFyaycgfHwgc2NoZW1lID09PSAnbGlnaHQnIHx8IHNjaGVtZSA9PT0gJ3N5c3RlbScpIHtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnZGF0YS1tdGUtY29sb3Itc2NoZW1lJywgc2NoZW1lKTtcbiAgICAgIHRoaXMuc2V0Q2FjaGVWYWx1ZShDT0xPUl9TQ0hFTUVfS0VZLCBjb2xvclNjaGVtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1tdGUtY29sb3Itc2NoZW1lJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGN1cnJlbnQgZ2xvYmFsIHRoZW1lIGZyb20gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIGdldEdsb2JhbFRoZW1lKCk6IE10ZVRoZW1lIHwgbnVsbCB7XG4gICAgY29uc3QgdmFsdWUgPSBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtbXRlLXRoZW1lJykgYXMgTXRlVGhlbWU7XG4gICAgaWYgKCFbJ2RlZmF1bHQnLCAncHhMaWdodCcsICdjeExpZ2h0JywgJ3J4TGlnaHQnXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgYXMgTXRlVGhlbWU7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGN1cnJlbnQgZ2xvYmFsIGNvbG9yLXNjaGVtZSBmcm9tIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBnZXRHbG9iYWxDb2xvclNjaGVtZSgpOiBNdGVDb2xvclNjaGVtZSB8IG51bGwge1xuICAgIGNvbnN0IHZhbHVlID0gZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKFxuICAgICAgJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZSdcbiAgICApIGFzIE10ZUNvbG9yU2NoZW1lO1xuICAgIGlmICghWydsaWdodCcsICdkYXJrJywgJ3N5c3RlbSddLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZSBhcyBNdGVDb2xvclNjaGVtZTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyBhIHJlYWN0aXZlIHNpZ25hbCB0aGF0IHdpbGwgdXBkYXRlIGFueSB0aW1lIHRoZSBnbG9iYWwgdGhlbWUgY2hhbmdlcyAqL1xuICBwdWJsaWMgc2VsZWN0R2xvYmFsVGhlbWUoKSB7XG4gICAgdGhpcy5pbml0T2JzZXJ2ZXIoKTtcbiAgICByZXR1cm4gdGhpcy50aGVtZVNpZ25hbDtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIGEgcmVhY3RpdmUgc2lnbmFsIHRoYXQgd2lsbCB1cGRhdGUgYW55IHRpbWUgdGhlIGdsb2JhbCBjb2xvci1zY2hlbWUgY2hhbmdlcyAqL1xuICBwdWJsaWMgc2VsZWN0R2xvYmFsQ29sb3JTY2hlbWUoKSB7XG4gICAgdGhpcy5pbml0T2JzZXJ2ZXIoKTtcbiAgICByZXR1cm4gdGhpcy5jb2xvclNjaGVtZVNpZ25hbDtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSB2YWx1ZSBvZiBhbGwgb2YgdGhlIGdpdmVuIHRoZW1lIHZhcmlhYmxlcyBvbiB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgc2V0KFxuICAgIGNvbmZpZ0ZuT3JPYmo6XG4gICAgICB8IFN1YnNldDxNb3J0YXJUaGVtZUNvbmZpZz5cbiAgICAgIHwgKChjb25maWc6IE1vcnRhclRoZW1lQ29uZmlnKSA9PiBTdWJzZXQ8TW9ydGFyVGhlbWVDb25maWc+KVxuICApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZ0ZuT3JPYmogPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbmZpZ0ZuT3JPYmogPSBjb25maWdGbk9yT2JqKHRoaXMuY29uZmlnKTtcbiAgICB9XG4gICAgY29uc3QgbWFwcGluZ3MgPSB0aGlzLmZsYXR0ZW5QYXRocyhjb25maWdGbk9yT2JqKTtcbiAgICBtYXBwaW5ncy5mb3JFYWNoKChbcGF0aCwgdmFsXSkgPT4ge1xuICAgICAgY29uc3QgY3NzVmFyID0gcGF0aC5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjW3Byb3BdO1xuICAgICAgfSwgc2V0dGVyQ29uZmlnKTtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnN0eWxlLnNldFByb3BlcnR5KGNzc1ZhciwgYCR7dmFsfWApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJldHJpZXZlcyB0aGUgdmFsdWUgZm9yIHRoZSByZXF1ZXN0ZWQgdGhlbWUgdmFyaWFibGUgZnJvbSB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgZ2V0PFQ+KGsxOiAodGhlbWVDb25maWc6IE1vcnRhclRoZW1lQ29uZmlnKSA9PiBUKTogVDtcbiAgcHVibGljIGdldDxLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnPihrMTogSzEpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8SzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZywgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0+KFxuICAgIGsxOiBLMSxcbiAgICBrMjogSzJcbiAgKTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVxuICA+KGsxOiBLMSwgazI6IEsyLCBrMzogSzMpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXSxcbiAgICBLNCBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMywgazQ6IEs0KTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM10sXG4gICAgSzUgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1cbiAgPihrMTogSzEsIGsyOiBLMiwgazM6IEszLCBrNDogSzQsIGs1OiBLNSk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVtLNV07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl0sXG4gICAgSzQgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXSxcbiAgICBLNSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XSxcbiAgICBLNiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVtLNV1cbiAgPihrMTogSzEsIGsyOiBLMiwgazM6IEszLCBrNDogSzQsIGs1OiBLNSwgazY6IEs2KTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdW0s1XVtLNl07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl0sXG4gICAgSzQgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXSxcbiAgICBLNSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XSxcbiAgICBLNiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVtLNV1cbiAgPihcbiAgICAuLi5rZXlzOlxuICAgICAgfCBbSzFdXG4gICAgICB8IFtLMSwgSzJdXG4gICAgICB8IFtLMSwgSzIsIEszXVxuICAgICAgfCBbSzEsIEsyLCBLMywgSzRdXG4gICAgICB8IFtLMSwgSzIsIEszLCBLNCwgSzVdXG4gICAgICB8IFtLMSwgSzIsIEszLCBLNCwgSzUsIEs2XVxuICApOiBhbnkge1xuICAgIGNvbnN0IFtmbl0gPSBrZXlzID8/IFtudWxsXTtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBjc3NWYXIgPSAoZm4gYXMgYW55KShzZXR0ZXJDb25maWcpO1xuICAgICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZ2xvYmFsVGhpcz8uZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Zhcik7XG4gICAgfVxuICAgIGNvbnN0IGNzc1ZhciA9IGtleXMucmVkdWNlKChhY2M6IGFueSwga2V5KSA9PiBhY2Nba2V5XSwgc2V0dGVyQ29uZmlnIGFzIGFueSkgYXMgc3RyaW5nO1xuICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGdsb2JhbFRoaXM/LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShjc3NWYXIpO1xuICB9XG5cbiAgLyoqIEZsYXR0ZW5zIGEgZ2l2ZW4gb2JqZWN0IHRvIGFuIGFycmF5IG9mIHBhdGgga2V5cyBhbmQgaXRzIHJlc3VsdGluZyB2YWx1ZSAqL1xuICBwcml2YXRlIGZsYXR0ZW5QYXRocyhvYmo6IFJlY29yZDxzdHJpbmcsIGFueT4sIHBhdGg6IHN0cmluZ1tdID0gW10pOiBbc3RyaW5nW10sIGFueV1bXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgY29uc3QgbmVzdGVkID0gb2JqW2tleV07XG4gICAgICBpZiAodHlwZW9mIG5lc3RlZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcGF0aC5wdXNoKGtleSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYWNjLCB0aGlzLmZsYXR0ZW5QYXRocyhuZXN0ZWQsIHBhdGgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGgucHVzaChrZXkpO1xuICAgICAgICBhY2MucHVzaChbcGF0aCwgbmVzdGVkXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTXV0YXRpb25FdmVudCA9IChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG4gICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIHtcbiAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkYXRhLW10ZS1jb2xvci1zY2hlbWUnKSB7XG4gICAgICAgICAgdGhpcy5jb2xvclNjaGVtZVNpZ25hbC5zZXQodGhpcy5nZXRHbG9iYWxDb2xvclNjaGVtZSgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGF0YS1tdGUtdGhlbWUnKSB7XG4gICAgICAgICAgdGhpcy50aGVtZVNpZ25hbC5zZXQodGhpcy5nZXRHbG9iYWxUaGVtZSgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGluaXRDYWNoZSgpIHtcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjYWNoZUNvbG9yU2NoZW1lID0gdGhpcy5nZXRDYWNoZVZhbHVlKENPTE9SX1NDSEVNRV9LRVkpO1xuICAgICAgICBpZiAoY2FjaGVDb2xvclNjaGVtZSAmJiBjYWNoZUNvbG9yU2NoZW1lICE9PSAnJykge1xuICAgICAgICAgIHRoaXMuc2V0R2xvYmFsQ29sb3JTY2hlbWUoY2FjaGVDb2xvclNjaGVtZSBhcyBNdGVDb2xvclNjaGVtZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0T2JzZXJ2ZXIoKSB7XG4gICAgaWYgKCFpc1NzcigpICYmICF0aGlzLnJvb3RPYnNlcnZlcikge1xuICAgICAgdGhpcy5yb290T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmhhbmRsZU11dGF0aW9uRXZlbnQpO1xuICAgICAgdGhpcy5yb290T2JzZXJ2ZXIub2JzZXJ2ZShnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogWydkYXRhLW10ZS10aGVtZScsICdkYXRhLW10ZS1jb2xvci1zY2hlbWUnXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FjaGVNZXRob2QoKTogJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnIHwgbnVsbCB7XG4gICAgLy8gUmV0cmlldmUgY2FjaGUgbWV0aG9kXG4gICAgbGV0IGNhY2hlTWV0aG9kOiAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZScgfCBudWxsID0gbnVsbDtcbiAgICAvLyBUcnkgbG9jYWxTdG9yYWdlXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGNhY2hlTWV0aG9kID0gdmFsIGFzICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBUcnkgc2Vzc2lvblN0b3JhZ2VcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oQ0FDSEVfVE9fS0VZKTtcbiAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgIGNhY2hlTWV0aG9kID0gdmFsIGFzICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlTWV0aG9kO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDYWNoZVZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2FjaGVNZXRob2QgPSB0aGlzLmdldENhY2hlTWV0aG9kKCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChjYWNoZU1ldGhvZCA9PT0gJ2xvY2FsU3RvcmFnZScpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGNhY2hlTWV0aG9kID09PSAnc2Vzc2lvblN0b3JhZ2UnKSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FjaGVWYWx1ZShrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IGNhY2hlTWV0aG9kID0gdGhpcy5nZXRDYWNoZU1ldGhvZCgpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoY2FjaGVNZXRob2QgPT09ICdsb2NhbFN0b3JhZ2UnKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgfSBlbHNlIGlmIChjYWNoZU1ldGhvZCA9PT0gJ3Nlc3Npb25TdG9yYWdlJykge1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZVRoZW1lU2VydmljZSA9IG5ldyBfTXRlVGhlbWVTZXJ2aWNlKCk7XG4iLCAiaW1wb3J0IHsgaXNTc3IsIGlzUGxhdGZvcm0gfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgdHlwZSBQb3J0YWxTdGFjayA9ICdvdmVybGF5JztcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YSB7XG4gIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHN0YWNrOiBQb3J0YWxTdGFjaztcbiAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzOiBTZXQ8RWxlbWVudD47XG4gIHBhcmVudFBvcnRhbGVkRWxlbWVudD86IEVsZW1lbnQ7XG4gIGJhY2tkcm9wPzogRWxlbWVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50UG9ydGFsQ29udHJvbGxlciB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcmVudFBvcnRhbGVkRWxlbWVudDogRWxlbWVudDtcbiAgb3B0aW9uczogeyBzdGFjazogUG9ydGFsU3RhY2sgfTtcbn1cblxuZXhwb3J0IHR5cGUgUG9ydGFsQWRhcHRlcjxUID0gYW55PiA9IChcbiAgcG9ydGFsRWxlbWVudDogVCxcbiAgb3V0bGV0RWxlbWVudDogRWxlbWVudFxuKSA9PiBQcm9taXNlPGFueT4gfCBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydGFsT3B0aW9ucyB7XG4gIC8qKiBSZW5kZXJzIHRoZSBiYWNrZHJvcCBkaW1tZWQgKi9cbiAgd2l0aERpbUJhY2tkcm9wPzogYm9vbGVhbjtcblxuICAvKiogTWFrZXMgdGhlIGJhY2tkcm9wIGlnbm9yZSBwb2ludGVyIGV2ZW50cy4gVXNlZnVsIGZvciB0cmlnZ2VyT24gXCJob3ZlclwiLiAqL1xuICB3aXRoSW5lcnRCYWNrZHJvcD86IGJvb2xlYW47XG5cbiAgLyoqIERpc2FibGVzIHRoZSBhYmlsaXR5IHRvIHNjcm9sbCB0aGUgcGFnZSBiZWhpbmQgdGhlIG92ZXJsYXkgd2hlbiB0cnVlICovXG4gIHdpdGhTY3JvbGxMb2NrPzogYm9vbGVhbjtcblxuICAvKiogQ2FsbGJhY2sgZm9yIGhhbmRsaW5nIGNsb3NlT25DbGlja091dHNpZGUgZXZlbnRzIHdoZW4gdGhlIHBvcnRhbCdzIGJhY2tkcm9wIGlzIGNsaWNrZWQgKi9cbiAgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXI/OiAoKSA9PiBhbnk7XG5cbiAgLyoqIFRoZSBhbmltYXRpb24gZHVyYXRpb24gZm9yIGZhZGluZyBhIHNoYWRvdyBiYWNrZHJvcCBpbi9vdXQgKi9cbiAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG5cbiAgLyoqIEFkYXB0ZXIgZm9yIFwicG9ydGFsaW5nXCIgYW4gZWxlbWVudCBmcm9tIG9uZSBsb2NhdGlvbiBpbiB0aGUgRE9NIHRvIGFub3RoZXIuIExldmVyYWdlZCBieSBmcmFtZXdvcmsgd3JhcHBlcnMgZm9yIGltcHJvdmVkIGludGVyb3AuICovXG4gIHBvcnRhbEFkYXB0ZXI/OiBQb3J0YWxBZGFwdGVyO1xufVxuXG4vKiogRGVmYXVsdCBuYXRpdmUgRE9NIGFkYXB0ZXIgZm9yIHBvcnRhbGluZyBhbiBlbGVtZW50IHRvIGFub3RoZXIgdGFyZ2V0IGVsZW1lbnQgKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0UG9ydGFsQWRhcHRlcjogUG9ydGFsQWRhcHRlciA9IChwb3J0YWxFbGVtLCBvdXRsZXRFbGVtKSA9PiB7XG4gIG91dGxldEVsZW0/LmFwcGVuZENoaWxkKHBvcnRhbEVsZW0pO1xufTtcblxuY2xhc3MgX010ZVBvcnRhbFNlcnZpY2Uge1xuICAvKiogU2hhcmVkIGdsb2JhbCBjb25zdCBmb3Igc3RhY2sgZWxlbWVudCByZWZzICovXG4gIHByaXZhdGUgc3RhY2tFbGVtZW50czogeyBvdmVybGF5OiBFbGVtZW50IH0gPSB7XG4gICAgb3ZlcmxheTogdW5kZWZpbmVkLFxuICB9O1xuXG4gIC8qKiBTaGFyZWQgZ2xvYmFsIGNvbnN0IGZvciBwb3J0YWxlZCBlbGVtZW50cyBtZXRhZGF0YSAqL1xuICBwcml2YXRlIHBvcnRhbGVkRWxlbWVudHMgPSBuZXcgTWFwPG51bWJlciwgTWFwPEVsZW1lbnQsIFBvcnRhbGVkRWxlbWVudE1ldGFkYXRhPj4oKTtcblxuICBwcml2YXRlIGFjdGl2ZVNjcm9sbExvY2tzID0gbmV3IFNldDxFbGVtZW50PigpO1xuXG4gIHByaXZhdGUgc3RhY2tNdXRhdGlvbk9ic2VydmVyPzogTXV0YXRpb25PYnNlcnZlcjtcblxuICAvKipcbiAgICogV2hlbiBjYWxsZWQsIHRoaXMgc2VydmljZSB3aWxsIGF0dGVtcHQgdG8gbG9jYXRlIHRoZSBgQGFuZ3VsYXIvY2RrYCBvdmVybGF5IHN0YWNrLlxuICAgKiBJZiBmb3VuZCB0aGlzIHNlcnZpY2Ugd2lsbCBiZSBjb25maWd1cmVkIHRvIHVzZSB0aGF0IGVsZW1lbnQgYXMgdGhlIGBvdmVybGF5YCBzdGFjayBpbnN0ZWFkIG9mIGluaXRpYWxpemluZyBpdHMgb3duLlxuICAgKi9cbiAgcHVibGljIGNvbmZpZ3VyZUNka0ludGVyb3AoKSB7XG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICBjb25zdCBjZGtTdGFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZGstb3ZlcmxheS1jb250YWluZXInKTtcbiAgICAgIGlmIChjZGtTdGFjaykge1xuICAgICAgICB0aGlzLnN0YWNrRWxlbWVudHMub3ZlcmxheSA9IGNka1N0YWNrO1xuICAgICAgICB0aGlzLnN0YWNrRWxlbWVudHMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKHRoaXMuaWRGYWN0b3J5KCdvdmVybGF5JykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBwb3J0YWwgY29udHJvbGxlci4gQWxsIGl0ZW1zIGl0IHJlcXVlc3RlZCB0byBiZSBwb3J0YWxlZCB3aWxsIGJlIHRyYWNrIGFnYWluc3QgaXQuXG4gICAqIFdoZW4gdGhlIHBvcnRhbCBpcyByZW1vdmVkIHdlIGNhbiB0aGVuIHJlbW92ZSBhbnkgZWxlbWVudHMgaXQgY3VycmVudGx5IGhhcyBwb3J0YWxlZCBhbmRcbiAgICogYW55IG9mIHRoZWlyIHBvcnRhbGVkIGNoaWxkcmVuLlxuICAgKi9cbiAgcHVibGljIGFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIpIHtcbiAgICBpZiAoIXRoaXMucG9ydGFsZWRFbGVtZW50cy5oYXMocG9ydGFsQ29udHJvbGxlcj8uaWQpKSB7XG4gICAgICAvLyBUcmFjayBpbiBzZXQgYnkgSUQgc28gd2UgZG9uJ3Qga2VlcCBhIGxpdmUgcmVmZXJlbmNlIHRvIHRoZSBjb250cm9sbGVyIGl0c2VsZlxuICAgICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLnNldChwb3J0YWxDb250cm9sbGVyLmlkLCBuZXcgTWFwPEVsZW1lbnQsIFBvcnRhbGVkRWxlbWVudE1ldGFkYXRhPigpKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVtb3ZlcyBhbGwgb2YgYSBwb3J0YWwgY29udHJvbGxlcnMgcG9ydGFsZWQgZWxlbWVudHMgYW5kIHRoZWlyIHJlZmVyZW5jZXMgKi9cbiAgcHVibGljIHJlbW92ZUNvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIpIHtcbiAgICAvLyBBdHRlbXB0IHRvIHJlbW92ZSBhbGwgaXRlbXMgYXR0YWNoZWQgYnkgdGhpcyBjb250cm9sbGVyIGZyb20gdGhlIGNvbmZpZ3VyZWQgc3RhY2tcbiAgICBjb25zdCBhdHRhY2hlZEVsZW1lbnRzID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKTtcbiAgICBpZiAoYXR0YWNoZWRFbGVtZW50cykge1xuICAgICAgYXR0YWNoZWRFbGVtZW50cy5mb3JFYWNoKChpdGVtKSA9PiB0aGlzLnJlbW92ZUZyb21TdGFjayhwb3J0YWxDb250cm9sbGVyLCBpdGVtLmVsZW1lbnQpKTtcbiAgICB9XG4gICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmRlbGV0ZShwb3J0YWxDb250cm9sbGVyLmlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnN1cmVzIGEgcmVmIHRvIHRoZSBjb25maWd1cmVkIHN0YWNrIGV4aXN0cy4gSWYgaXQgZG9lcyBub3QsIHRoZSBjb25maWd1cmVkIHN0YWNrIHdpbGxcbiAgICogYmUgY3JlYXRlZCBhbmQgYXBwZW5kZWQgdG8gdGhlIGRvY3VtZW50LiBEb2VzIG5vdGhpbmcgZHVyaW5nIFNTUi5cbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplU3RhY2soc3RhY2s6IFBvcnRhbFN0YWNrKSB7XG4gICAgaWYgKHN0YWNrICE9PSAnb3ZlcmxheScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPdmVybGF5IFN0YWNrOiBcIiR7c3RhY2t9XCIgbXVzdCBiZSAnb3ZlcmxheScgYXQgdGhpcyB0aW1lLmApO1xuICAgIH1cbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIGlmICghdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXSkge1xuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZEZhY3Rvcnkoc3RhY2spKTtcbiAgICAgICAgdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXSA9XG4gICAgICAgICAgZWxlbSA/P1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5pZEZhY3Rvcnkoc3RhY2spLFxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10gJiYgIXRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10uaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRTdGFja1RvRG9tKHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10pO1xuXG4gICAgICAgIC8vIEluaXQgbXV0YXRpb24gb2JzZXJ2ZXJcbiAgICAgICAgLy8gVGhpcyB3aWxsIHdhdGNoIGZvciBhbnl0aW1lIHRoZSBzdGFjayBpcyByZW1vdmVkIGZyb20gdGhlIERPTSBmb3Igc29tZSByZWFzb25cbiAgICAgICAgLy8gSWYgaXQgaXMsIGl0IHdpbGwgcmUtYXR0YWNoIGl0IHRvIHRoZSBET00gYWZ0ZXIgdGhlIG5leHQgdGlja1xuICAgICAgICBpZiAoIXRoaXMuc3RhY2tNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgdGhpcy5zdGFja011dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobWwsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG1sKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgcmVtb3ZlZE5vZGUgb2YgbXV0YXRpb24ucmVtb3ZlZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZWROb2RlID09PSB0aGlzLnN0YWNrRWxlbWVudHMub3ZlcmxheSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxJdGVtc0Zyb21TdGFja3MoKTtcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZFN0YWNrVG9Eb20odGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10/LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLnN0YWNrTXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10ucGFyZW50Tm9kZSwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogZmFsc2UsXG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICBzdWJ0cmVlOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBwZW5kU3RhY2tUb0RvbShzdGFja0VsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAoc3RhY2tFbGVtZW50ICYmICFzdGFja0VsZW1lbnQuaXNDb25uZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHRvYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdtdGUtdG9hc3QtY29udGFpbmVyJyk7XG4gICAgICBpZiAodG9hc3RDb250YWluZXIpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoc3RhY2tFbGVtZW50LCB0b2FzdENvbnRhaW5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChzdGFja0VsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBBcHBlbmRzIGFuIGl0ZW0gdG8gdGhlIGNvbmZpZ3VyZWQgcG9ydGFsIHN0YWNrICovXG4gIHB1YmxpYyBhcHBlbmRUb1N0YWNrKFxuICAgIHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLFxuICAgIGVsZW1lbnQ6IEVsZW1lbnQsXG4gICAge1xuICAgICAgd2l0aERpbUJhY2tkcm9wID0gZmFsc2UsXG4gICAgICB3aXRoSW5lcnRCYWNrZHJvcCA9IGZhbHNlLFxuICAgICAgd2l0aFNjcm9sbExvY2sgPSBmYWxzZSxcbiAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXIsXG4gICAgICBwb3J0YWxBZGFwdGVyID0gZGVmYXVsdFBvcnRhbEFkYXB0ZXIsXG4gICAgfTogUG9ydGFsT3B0aW9ucyA9IHt9XG4gICkge1xuICAgIHRoaXMuYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudFBvcnRhbGVkRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50UG9ydGFsZWRFbGVtZW50KHBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQpO1xuICAgICAgY29uc3Qgc3RhY2tOYW1lID0gcG9ydGFsQ29udHJvbGxlci5vcHRpb25zLnN0YWNrO1xuICAgICAgY29uc3Qgc3RhY2sgPSB0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tOYW1lXTtcbiAgICAgIGNvbnN0IGF0dGFjaGVkRWxlbWVudHMgPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpO1xuXG4gICAgICBjb25zdCBiYWNrZHJvcCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbXRlLXBvcnRhbF9fYmFja2Ryb3AnLFxuICAgICAgICAuLi4oYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb25cbiAgICAgICAgICA/IHsgc3R5bGU6IGB0cmFuc2l0aW9uLWR1cmF0aW9uOiAke2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9ufTtgIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBIYW5kbGUgYmFja2Ryb3Agc3R5bGluZ1xuICAgICAgaWYgKHdpdGhJbmVydEJhY2tkcm9wKSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1pbmVydCcpO1xuICAgICAgfVxuICAgICAgaWYgKHdpdGhEaW1CYWNrZHJvcCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0tc2hhZG93Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0tdHJhbnNwYXJlbnQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwZW5kIGJhY2tkcm9wXG4gICAgICBzdGFjaz8uYXBwZW5kQ2hpbGQoYmFja2Ryb3ApO1xuXG4gICAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgICAgLy8gQWRkIGxpc3RlbmVyIGlmIGNsaWNrIGhhbmRsZXIgaXMgcHJlc2VudFxuICAgICAgICBpZiAoY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgICAgICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcik7XG4gICAgICAgICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBiYWNrZHJvcCBzaG91bGQgYmUgZGltLCBhbmltYXRlIGl0IGFmdGVyIGl0IGhhcyBiZWVuIGFwcGVuZGVkIHRvIHRoZSBkb21cbiAgICAgICAgaWYgKHdpdGhEaW1CYWNrZHJvcCkge1xuICAgICAgICAgIGdsb2JhbFRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1zaG93Jyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwbHkgc2Nyb2xsIGxvY2tcbiAgICAgICAgaWYgKHdpdGhTY3JvbGxMb2NrKSB7XG4gICAgICAgICAgdGhpcy5hcHBseVNjcm9sbExvY2soZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gV2FpdCBmb3IgUmVhY3QgKG9yIG90aGVyIGZ1dHVyZSBmcmFtZXdvcmsgYWRhcHRlcikgdG8gYXBwZW5kIGVsZW1lbnQgdG8gbmV3XG4gICAgICAvLyBsb2NhdGlvbiBpbiB0aGUgRE9NIGJlZm9yZSBhZGRpbmcgdG8gc3RhY2suIERvaW5nIHNvIHRyaWdnZXJzIGBob3N0RGlzY29ubmVjdGVkYFxuICAgICAgLy8gd2hpY2ggd291bGQgaW5zdGFudGx5IHJlbW92ZSB0aGUgZWxlbWVudCBpZiBub3QgZm9yIHRoaXMgZXh0cmEgdGltZW91dCB0byB3YWl0IGEgdGlja1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHBvcnRhbEFkYXB0ZXIoZWxlbWVudCwgc3RhY2spKS50aGVuKCgpID0+IHtcbiAgICAgICAgYXR0YWNoZWRFbGVtZW50cy5zZXQoZWxlbWVudCwge1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgc3RhY2s6IHN0YWNrTmFtZSxcbiAgICAgICAgICBiYWNrZHJvcCxcbiAgICAgICAgICBjaGlsZFBvcnRhbGVkRWxlbWVudHM6IG5ldyBTZXQ8RWxlbWVudD4oKSxcbiAgICAgICAgICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogUmVtb3ZlcyBhbiBlbGVtZW50IGZyb20gdGhlIHN0YWNrICovXG4gIHB1YmxpYyByZW1vdmVGcm9tU3RhY2socG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5wb3J0YWxlZEVsZW1lbnRzLmhhcyhwb3J0YWxDb250cm9sbGVyLmlkKSkge1xuICAgICAgY29uc3QgYXR0YWNoZWRFbGVtZW50cyA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCk7XG4gICAgICBpZiAoYXR0YWNoZWRFbGVtZW50cykge1xuICAgICAgICBjb25zdCBlbGVtZW50TWV0YWRhdGEgPSBhdHRhY2hlZEVsZW1lbnRzLmdldChlbGVtZW50KTtcbiAgICAgICAgaWYgKGVsZW1lbnRNZXRhZGF0YSkge1xuICAgICAgICAgIGF0dGFjaGVkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgIHRoaXMuZmluYWxpemVTdGFja1JlbW92ZShlbGVtZW50TWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU2FmZWx5IHJlbW92ZXMgYWxsIGl0ZW1zIGZyb20gYWxsIHN0YWNrc1xuICBwcml2YXRlIHJlbW92ZUFsbEl0ZW1zRnJvbVN0YWNrcygpIHtcbiAgICBmb3IgKGxldCBbaWQsIGNvbnRyb2xsZXJNYXBdIG9mIHRoaXMucG9ydGFsZWRFbGVtZW50cy5lbnRyaWVzKCkpIHtcbiAgICAgIGZvciAobGV0IFtlbGVtZW50LCBlbGVtZW50TWV0YWRhdGFdIG9mIGNvbnRyb2xsZXJNYXAuZW50cmllcygpKSB7XG4gICAgICAgIGlmIChlbGVtZW50TWV0YWRhdGEpIHtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplU3RhY2tSZW1vdmUoZWxlbWVudE1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBNYWtlcyBhIGJhY2tkcm9wIGFzc29jaWF0ZWQgd2l0aCBhIHBvcnRhbGVkIGVsZW1lbnQgdmlzaWJsZSBpZiBpdCBleGlzdHMgKi9cbiAgcHVibGljIHNob3dCYWNrZHJvcChwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyKTtcbiAgICBjb25zdCB7IGJhY2tkcm9wIH0gPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpLmdldChlbGVtZW50KSA/PyB7fTtcbiAgICBiYWNrZHJvcD8uY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXNob3cnKTtcbiAgfVxuXG4gIC8qKiBIaWRlcyBhIGJhY2tkcm9wIGFzc29jaWF0ZWQgd2l0aCBhIHBvcnRhbGVkIGVsZW1lbnQgaWYgaXQgZXhpc3RzICovXG4gIHB1YmxpYyBoaWRlQmFja2Ryb3AocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgY29uc3QgeyBiYWNrZHJvcCB9ID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKS5nZXQoZWxlbWVudCkgPz8ge307XG4gICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tkcm9wLS1zaG93Jyk7XG4gIH1cblxuICAvKiogVXBkYXRlcyB0aGUgaW50ZXJ0bmVzcyBhIGJhY2tkcm9wIGlmIGl0IGV4aXN0cyAod2hldGhlciBvciBub3QgdGhlIHVzZXIgY2FuIGNsaWNrIHRocm91Z2ggaXQpICovXG4gIHB1YmxpYyBzZXRCYWNrZHJvcEluZXJ0bmVzcyhcbiAgICBwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlcixcbiAgICBlbGVtZW50OiBFbGVtZW50LFxuICAgIGluZXJ0OiBib29sZWFuID0gdHJ1ZVxuICApIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgY29uc3QgeyBiYWNrZHJvcCB9ID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKS5nZXQoZWxlbWVudCkgPz8ge307XG4gICAgaWYgKGluZXJ0KSB7XG4gICAgICBiYWNrZHJvcD8uY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLWluZXJ0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhY2tkcm9wPy5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrZHJvcC0taW5lcnQnKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgaWQgZm9yIHRoZSBjb25maWd1cmVkIHN0YWNrIGVsZW1lbnQgKi9cbiAgcHJpdmF0ZSBpZEZhY3RvcnkgPSAoc3RhY2s6IFBvcnRhbFN0YWNrKSA9PiBgbXRlLXBvcnRhbF9fJHtzdGFja30tc3RhY2tgO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYW4gZWxlbWVudCBpcyBiZWluZyBwb3J0YWxlZCBmcm9tIHdpdGhpbiBhbm90aGVyIHBvcnRhbGVkXG4gICAqIGVsZW1lbnQgYW5kIHJldHVybnMgdGhhdCBwYXJlbnQgaWYgaXQgaXNcbiAgICovXG4gIHByaXZhdGUgZ2V0UGFyZW50UG9ydGFsZWRFbGVtZW50KHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKHBvcnRhbENvbnRyb2xsZXIucGFyZW50UG9ydGFsZWRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gcG9ydGFsQ29udHJvbGxlci5wYXJlbnRQb3J0YWxlZEVsZW1lbnQ7XG4gICAgfVxuICAgIGxldCBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ6IEVsZW1lbnQ7XG4gICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmZvckVhY2goKHBvcnRhbENvbnRyb2xsZXIpID0+XG4gICAgICBwb3J0YWxDb250cm9sbGVyLmZvckVhY2goKHBvcnRhbGVkRWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAocG9ydGFsZWRFbGVtZW50LmVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgICBwb3J0YWxlZEVsZW1lbnQuY2hpbGRQb3J0YWxlZEVsZW1lbnRzLmFkZChlbGVtZW50KTtcbiAgICAgICAgICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQgPSBwb3J0YWxlZEVsZW1lbnQuZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIC8vIENhY2hlIHRoZSBwYXJlbnRQb3J0YWxlZEVsZW1lbnQgaWYgZm91bmQgb24gdGhlIGNvbnRyb2xsZXIgc28gd2UgY2FuIHJlZmVyZW5jZVxuICAgIC8vIGl0IHdoZW4gb3BlbmVkIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4gICAgaWYgKHBhcmVudFBvcnRhbGVkRWxlbWVudCkge1xuICAgICAgcG9ydGFsQ29udHJvbGxlci5wYXJlbnRQb3J0YWxlZEVsZW1lbnQgPSBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ7XG4gIH1cblxuICAvKiogRW5zdXJlcyBhbiBlbGVtZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgc3RhY2sgbm8gbWF0dGVyIHdoaWNoIGNvbnRyb2xsZXIgaGFzIHBvcnRhbGVkIGl0ICovXG4gIHByaXZhdGUgcmVtb3ZlRnJvbVN0YWNrR2xvYmFsbHkoZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChwb3J0YWxDb250cm9sbGVyKSA9PiB7XG4gICAgICBpZiAocG9ydGFsQ29udHJvbGxlci5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudE1ldGFkYXRhID0gcG9ydGFsQ29udHJvbGxlci5nZXQoZWxlbWVudCk7XG4gICAgICAgIHBvcnRhbENvbnRyb2xsZXIuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmZpbmFsaXplU3RhY2tSZW1vdmUoZWxlbWVudE1ldGFkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBGaW5hbGl6ZXMgdGhlIHJlbW92ZSBvZiBhbiBlbGVtZW50IGZyb20gYSBwb3J0YWwgc3RhY2sgKi9cbiAgcHJpdmF0ZSBmaW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YTogUG9ydGFsZWRFbGVtZW50TWV0YWRhdGEpIHtcbiAgICBpZiAoZWxlbWVudE1ldGFkYXRhKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIHN0YWNrOiBzdGFja05hbWUsXG4gICAgICAgIGJhY2tkcm9wLFxuICAgICAgICBjaGlsZFBvcnRhbGVkRWxlbWVudHMsXG4gICAgICAgIHBhcmVudFBvcnRhbGVkRWxlbWVudCxcbiAgICAgIH0gPSBlbGVtZW50TWV0YWRhdGE7XG4gICAgICBjb25zdCBzdGFjayA9IHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja05hbWVdO1xuXG4gICAgICAvLyBSZW1vdmUgYW55IHNjcm9sbExvY2tzXG4gICAgICB0aGlzLnJlbW92ZVNjcm9sbExvY2soZWxlbWVudCk7XG5cbiAgICAgIC8vIEVuc3VyZXMgYW4gZWxlbWVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gYW55IHBhcmVudCBwb3J0YWxlZCBlbGVtZW50cyBjaGlsZHJlbiBsaXN0c1xuICAgICAgaWYgKHBhcmVudFBvcnRhbGVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZm9yRWFjaCgocG9ydGFsQ29udHJvbGxlcikgPT4ge1xuICAgICAgICAgIGlmIChwb3J0YWxDb250cm9sbGVyLmhhcyhwYXJlbnRQb3J0YWxlZEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBwb3J0YWxDb250cm9sbGVyLmdldChwYXJlbnRQb3J0YWxlZEVsZW1lbnQpLmNoaWxkUG9ydGFsZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gRW5zdXJlcyBhbnkgY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50IGFyZSByZW1vdmVkIGJlZm9yZSB0aGlzIGVsZW1lbnQgaXNcbiAgICAgIGlmIChjaGlsZFBvcnRhbGVkRWxlbWVudHMuc2l6ZSA+IDApIHtcbiAgICAgICAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHRoaXMucmVtb3ZlRnJvbVN0YWNrR2xvYmFsbHkoZWxlbWVudCkpO1xuICAgICAgfVxuICAgICAgLy8gUmVtb3ZlcyB0aGlzIGVsZW1lbnRzIGJhY2tkcm9wIGZyb20gdGhlIHBvcnRhbCBzdGFja1xuICAgICAgaWYgKGJhY2tkcm9wICYmIGJhY2tkcm9wLnBhcmVudEVsZW1lbnQgPT09IHN0YWNrKSB7XG4gICAgICAgIHN0YWNrPy5yZW1vdmVDaGlsZChiYWNrZHJvcCk7XG4gICAgICB9XG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGEgcmVhY3Qgd3JhcHBlZCBwb3J0YWxlZCBlbGVtZW50XG4gICAgICBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50Py5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheS13cmFwcGVyJykpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ID09PSBzdGFjaykge1xuICAgICAgICAgIHN0YWNrPy5yZW1vdmVDaGlsZChlbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCA9PT0gc3RhY2spIHtcbiAgICAgICAgc3RhY2s/LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGEgc2Nyb2xsIGxvY2sgdG8gdGhlIGJvZHkgZWxlbWVudCB0byBwcmV2ZW50IHNjcm9sbGluZyBvZiBwYWdlIGNvbnRlbnQuXG4gICAqIENhbGN1bGF0ZXMgYW55IGJvZHkgb2Zmc2V0cyBkdWUgdG8gdmlzaWJsZSBzY3JvbGxiYXJzIGFuZCBkeW5hbWljYWxseSBhZGp1c3RzIGZvciB0aGVtLlxuICAgKi9cbiAgcHJpdmF0ZSBhcHBseVNjcm9sbExvY2soZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuYWN0aXZlU2Nyb2xsTG9ja3MuYWRkKGVsZW1lbnQpO1xuXG4gICAgY29uc3QgaXNJT1MgPSBpc1BsYXRmb3JtKCdJT1MnKTtcbiAgICBjb25zdCBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuICAgIGNvbnN0IHNjcm9sbGJhclggPVxuICAgICAgTWF0aC5yb3VuZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgK1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgY29uc3QgcGFkZGluZ1Byb3AgPSBzY3JvbGxiYXJYID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnO1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgY29uc3Qgc2Nyb2xsWCA9IGJvZHlTdHlsZS5sZWZ0ID8gcGFyc2VGbG9hdChib2R5U3R5bGUubGVmdCkgOiB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgY29uc3Qgc2Nyb2xsWSA9IGJvZHlTdHlsZS50b3AgPyBwYXJzZUZsb2F0KGJvZHlTdHlsZS50b3ApIDogd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gICAgYm9keVN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtdGUtc2Nyb2xsLWxvY2stLWFjdGl2ZScpO1xuXG4gICAgaWYgKHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICBib2R5U3R5bGVbcGFkZGluZ1Byb3BdID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgO1xuICAgIH1cblxuICAgIC8vIE9ubHkgaU9TIGRvZXNuJ3QgcmVzcGVjdCBgb3ZlcmZsb3c6IGhpZGRlbmAgb24gZG9jdW1lbnQuYm9keSwgYW5kIHRoaXNcbiAgICAvLyB0ZWNobmlxdWUgaGFzIGZld2VyIHNpZGUgZWZmZWN0cy5cbiAgICBpZiAoaXNJT1MpIHtcbiAgICAgIC8vIGlPUyAxMiBkb2VzIG5vdCBzdXBwb3J0IGB2aXN1YWxWaWV3cG9ydGAuXG4gICAgICBjb25zdCBvZmZzZXRMZWZ0ID0gZ2xvYmFsVGhpcy52aXN1YWxWaWV3cG9ydD8ub2Zmc2V0TGVmdCB8fCAwO1xuICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gZ2xvYmFsVGhpcy52aXN1YWxWaWV3cG9ydD8ub2Zmc2V0VG9wIHx8IDA7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oYm9keVN0eWxlLCB7XG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICB0b3A6IGAkey0oc2Nyb2xsWSAtIE1hdGguZmxvb3Iob2Zmc2V0VG9wKSl9cHhgLFxuICAgICAgICBsZWZ0OiBgJHstKHNjcm9sbFggLSBNYXRoLmZsb29yKG9mZnNldExlZnQpKX1weGAsXG4gICAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVtb3ZlcyBhbiBhY3RpdmUgc2Nyb2xsTG9jayBpZiB0aGVyZSBhcmUgbm8gcmVtYWluaW5nIGVsZW1lbnRzIHBvcnRhbGVkIHRoYXQgcmVxdWVzdGVkIGl0ICovXG4gIHByaXZhdGUgcmVtb3ZlU2Nyb2xsTG9jayhlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5hY3RpdmVTY3JvbGxMb2Nrcy5kZWxldGUoZWxlbWVudCk7XG5cbiAgICBpZiAodGhpcy5hY3RpdmVTY3JvbGxMb2Nrcy5zaXplID09PSAwKSB7XG4gICAgICBjb25zdCBpc0lPUyA9IGlzUGxhdGZvcm0oJ0lPUycpO1xuICAgICAgY29uc3QgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcbiAgICAgIGNvbnN0IHNjcm9sbGJhclggPVxuICAgICAgICBNYXRoLnJvdW5kKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSArXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgY29uc3QgcGFkZGluZ1Byb3AgPSBzY3JvbGxiYXJYID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGJvZHlTdHlsZSwge1xuICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgIFtwYWRkaW5nUHJvcF06ICcnLFxuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbXRlLXNjcm9sbC1sb2NrLS1hY3RpdmUnKTtcblxuICAgICAgaWYgKGlzSU9TKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYm9keVN0eWxlLCB7XG4gICAgICAgICAgcG9zaXRpb246ICcnLFxuICAgICAgICAgIHRvcDogJycsXG4gICAgICAgICAgbGVmdDogJycsXG4gICAgICAgICAgcmlnaHQ6ICcnLFxuICAgICAgICB9KTtcbiAgICAgICAgZ2xvYmFsVGhpcy5zY3JvbGxUbyhzY3JvbGxYLCBzY3JvbGxZKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZVBvcnRhbFNlcnZpY2UgPSBuZXcgX010ZVBvcnRhbFNlcnZpY2UoKTtcbiIsICJpbXBvcnQgeyBzaWduYWwgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5jbGFzcyBfTXRlSGlzdG9yeUFwaVNlcnZpY2Uge1xuICBwcml2YXRlIGluaXRpYWxpemVkID0gZmFsc2U7XG4gIHByaXZhdGUgY2hhbmdlU2lnbmFsID0gc2lnbmFsKCk7XG4gIHByaXZhdGUgcHJldkhyZWY6IHN0cmluZztcblxuICBwdWJsaWMgc3RhdGVDaGFuZ2VzKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHJldHVybiB0aGlzLmNoYW5nZVNpZ25hbDtcbiAgfVxuXG4gIHByaXZhdGUgZm9yd2FyZEFwcGx5ID0gKHRhcmdldCwgdGhpc0FyZywgYXJnQXJyYXkpID0+IHtcbiAgICBjb25zdCByZXMgPSB0YXJnZXQuYXBwbHkodGhpc0FyZywgYXJnQXJyYXkpO1xuICAgIC8vIE9ubHkgZW1pdCBhIHN0YXRlIGNoYW5nZSBpZiB0aGUgaHJlZiBkaWZmZXJzIGZyb20gdGhlIGxhc3QgZW1pc3Npb25cbiAgICBpZiAodGhpcy5wcmV2SHJlZiAhPT0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcbiAgICAgIHRoaXMucHJldkhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgIHRoaXMuY2hhbmdlU2lnbmFsLnNldCh0aGlzLnByZXZIcmVmKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgLy8gTGlzdGVuIGZvciBiYWNrIGV2ZW50cyB3aXRoIHBvcHN0YXRlIGV2ZW50XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlU2lnbmFsLnNldCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICB9KTtcblxuICAgICAgLy8gUGF0Y2ggSGlzdG9yeSBBUEkgbWV0aG9kcyB0byBlbnN1cmUgd2UgZW1pdCBhbnl0aW1lIHRoZWlyIHN0YXRlIGlzIGNoYW5nZWRcbiAgICAgIC8vIFRoaXMgaXMgbmVjY2VzYXJ5IGJlY2Fpc2UgdGhlIGBwb3BzdGF0ZWAgZXZlbnQgaXMgbm90IHJlbGlhYmx5IGNhbGxlZCBhY3Jvc3MgYnJvd3NlcnMgd2hlbmV2ZXIgdGhlIGhpc3RvcnkgQVBJIGlzIHVzZWRcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2sgPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkuYmFjaywgeyBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHkgfSk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5mb3J3YXJkID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LmZvcndhcmQsIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkuZ28gPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkuZ28sIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSwgeyBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHkgfSk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlLCB7XG4gICAgICAgIGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlSGlzdG9yeUFwaVNlcnZpY2UgPSBuZXcgX010ZUhpc3RvcnlBcGlTZXJ2aWNlKCk7XG4iLCAiaW1wb3J0IHsgaXNTc3IgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgdHlwZSBNdGVEYXRlRm9ybWF0T3B0aW9ucyA9IEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zICYge1xuICBsYW5nPzogc3RyaW5nO1xuICBmb3JtYXQ/OlxuICAgIHwgJ3Nob3J0J1xuICAgIHwgJ21lZGl1bSdcbiAgICB8ICdsb25nJ1xuICAgIHwgJ2Z1bGwnXG4gICAgfCAnc2hvcnREYXRlJ1xuICAgIHwgJ21lZGl1bURhdGUnXG4gICAgfCAnbG9uZ0RhdGUnXG4gICAgfCAnZnVsbERhdGUnXG4gICAgfCAnc2hvcnRUaW1lJ1xuICAgIHwgJ21lZGl1bVRpbWUnXG4gICAgfCAnbG9uZ1RpbWUnXG4gICAgfCAnZnVsbFRpbWUnO1xufTtcblxuZXhwb3J0IHR5cGUgTXRlTnVtYmVyRm9ybWF0T3B0aW9ucyA9IEludGwuTnVtYmVyRm9ybWF0T3B0aW9ucyAmIHsgbGFuZz86IHN0cmluZyB9O1xuXG5jbGFzcyBfTXRlTG9jYWxpemVTZXJ2aWNlIHtcbiAgLy8gQXNzdW1lIGBlbmAgbGFuZyBmb3Igbm93IGFzIGEgZmFsbGJhY2sgdW50aWwgd2Ugcm9sbGJhY2sgd2lkZXIgc3VwcG9ydCBmb3IgaTExbiB3aGVuIG5lY2Vzc2FyeVxuICBwcml2YXRlIGxhbmd1YWdlID0gJ2VuJztcbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICBpZiAoIWlzU3NyKCkgJiYgIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5sYW5ndWFnZSA9IGAke2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nIHx8IG5hdmlnYXRvci5sYW5ndWFnZX1gLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvcm1hdE51bWJlcihudW1iZXJUb0Zvcm1hdDogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogTXRlTnVtYmVyRm9ybWF0T3B0aW9ucyk6IHN0cmluZyB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgY29uc3QgbGFuZyA9IG9wdGlvbnM/LmxhbmcgPyBvcHRpb25zLmxhbmcgOiB0aGlzLmxhbmd1YWdlO1xuICAgIG51bWJlclRvRm9ybWF0ID0gTnVtYmVyKG51bWJlclRvRm9ybWF0KTtcbiAgICAvLyBFbnN1cmUgbm8gbnVsbCBvcHRpb25zIGV4aXN0XG4gICAgY29uc3QgZmluYWxPcHRpb25zID0ge1xuICAgICAgbGFuZzogb3B0aW9ucy5sYW5nID8/IHVuZGVmaW5lZCxcbiAgICAgIHN0eWxlOiBvcHRpb25zLnN0eWxlID8/IHVuZGVmaW5lZCxcbiAgICAgIGN1cnJlbmN5OiBvcHRpb25zLmN1cnJlbmN5ID8/IHVuZGVmaW5lZCxcbiAgICAgIGN1cnJlbmN5RGlzcGxheTogb3B0aW9ucy5jdXJyZW5jeURpc3BsYXkgPz8gdW5kZWZpbmVkLFxuICAgICAgdXNlR3JvdXBpbmc6IG9wdGlvbnMudXNlR3JvdXBpbmcgPz8gdW5kZWZpbmVkLFxuICAgICAgbWluaW11bUludGVnZXJEaWdpdHM6IG9wdGlvbnMubWluaW11bUludGVnZXJEaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBvcHRpb25zLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IG9wdGlvbnMubWF4aW11bUZyYWN0aW9uRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbmltdW1TaWduaWZpY2FudERpZ2l0czogb3B0aW9ucy5taW5pbXVtU2lnbmlmaWNhbnREaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzOiBvcHRpb25zLm1heGltdW1TaWduaWZpY2FudERpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgfTtcbiAgICByZXR1cm4gaXNOYU4obnVtYmVyVG9Gb3JtYXQpXG4gICAgICA/ICcnXG4gICAgICA6IG5ldyBJbnRsLk51bWJlckZvcm1hdChsYW5nLCBmaW5hbE9wdGlvbnMpLmZvcm1hdChudW1iZXJUb0Zvcm1hdCk7XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0RGF0ZShkYXRlVG9Gb3JtYXQ6IERhdGUgfCBzdHJpbmcsIG9wdGlvbnM/OiBNdGVEYXRlRm9ybWF0T3B0aW9ucykge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIGNvbnN0IGxhbmcgPSBvcHRpb25zPy5sYW5nID8gb3B0aW9ucy5sYW5nIDogdGhpcy5sYW5ndWFnZTtcbiAgICBjb25zdCBmb3JtYXR0ZWRPcHRpb25zID0geyAuLi4ob3B0aW9ucyA/PyB7fSksIC4uLnRoaXMuZ2V0RGVmaW5lZERhdGVGb3JtYXQob3B0aW9ucz8uZm9ybWF0KSB9O1xuICAgIC8vIEVuc3VyZSBubyBudWxsIG9wdGlvbnMgZXhpc3RcbiAgICBjb25zdCBmaW5hbE9wdGlvbnMgPSB7XG4gICAgICBsYW5nOiBmb3JtYXR0ZWRPcHRpb25zLmxhbmcgPz8gdW5kZWZpbmVkLFxuICAgICAgd2Vla2RheTogZm9ybWF0dGVkT3B0aW9ucy53ZWVrZGF5ID8/IHVuZGVmaW5lZCxcbiAgICAgIGVyYTogZm9ybWF0dGVkT3B0aW9ucy5lcmEgPz8gdW5kZWZpbmVkLFxuICAgICAgeWVhcjogZm9ybWF0dGVkT3B0aW9ucy55ZWFyID8/IHVuZGVmaW5lZCxcbiAgICAgIG1vbnRoOiBmb3JtYXR0ZWRPcHRpb25zLm1vbnRoID8/IHVuZGVmaW5lZCxcbiAgICAgIGRheTogZm9ybWF0dGVkT3B0aW9ucy5kYXkgPz8gdW5kZWZpbmVkLFxuICAgICAgaG91cjogZm9ybWF0dGVkT3B0aW9ucy5ob3VyID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbnV0ZTogZm9ybWF0dGVkT3B0aW9ucy5taW51dGUgPz8gdW5kZWZpbmVkLFxuICAgICAgc2Vjb25kOiBmb3JtYXR0ZWRPcHRpb25zLnNlY29uZCA/PyB1bmRlZmluZWQsXG4gICAgICBmcmFjdGlvbmFsU2Vjb25kRGlnaXRzOiBmb3JtYXR0ZWRPcHRpb25zLmZyYWN0aW9uYWxTZWNvbmREaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgdGltZVpvbmVOYW1lOiBmb3JtYXR0ZWRPcHRpb25zLnRpbWVab25lTmFtZSA/PyB1bmRlZmluZWQsXG4gICAgICB0aW1lWm9uZTogZm9ybWF0dGVkT3B0aW9ucy50aW1lWm9uZSA/PyB1bmRlZmluZWQsXG4gICAgICBob3VyMTI6IGZvcm1hdHRlZE9wdGlvbnMuaG91cjEyID8/IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1hdDogZm9ybWF0dGVkT3B0aW9ucy5mb3JtYXQgPz8gdW5kZWZpbmVkLFxuICAgIH07XG4gICAgZGF0ZVRvRm9ybWF0ID0gbmV3IERhdGUoZGF0ZVRvRm9ybWF0KTtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobGFuZywgZmluYWxPcHRpb25zKS5mb3JtYXQoZGF0ZVRvRm9ybWF0KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmaW5lZERhdGVGb3JtYXQoXG4gICAgZm9ybWF0OlxuICAgICAgfCAnc2hvcnQnXG4gICAgICB8ICdtZWRpdW0nXG4gICAgICB8ICdsb25nJ1xuICAgICAgfCAnZnVsbCdcbiAgICAgIHwgJ3Nob3J0RGF0ZSdcbiAgICAgIHwgJ21lZGl1bURhdGUnXG4gICAgICB8ICdsb25nRGF0ZSdcbiAgICAgIHwgJ2Z1bGxEYXRlJ1xuICAgICAgfCAnc2hvcnRUaW1lJ1xuICAgICAgfCAnbWVkaXVtVGltZSdcbiAgICAgIHwgJ2xvbmdUaW1lJ1xuICAgICAgfCAnZnVsbFRpbWUnXG4gICk6IE10ZURhdGVGb3JtYXRPcHRpb25zIHtcbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgY2FzZSAnc2hvcnQnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2xvbmcnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdmdWxsJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ3Nob3J0RGF0ZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdtZWRpdW1EYXRlJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdsb25nRGF0ZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdmdWxsRGF0ZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnc2hvcnRUaW1lJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdtZWRpdW1UaW1lJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdsb25nVGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2Z1bGxUaW1lJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgZnJhY3Rpb25hbFNlY29uZERpZ2l0czogMixcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVMb2NhbGl6ZVNlcnZpY2UgPSBuZXcgX010ZUxvY2FsaXplU2VydmljZSgpO1xuIiwgImltcG9ydCB7IENvcmVQYWxldHRlLCBEZW5zaXR5T3B0aW9ucywgUHJlc2V0cywgU2l6ZU9wdGlvbnMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25QcmVzZXQge1xuICBzaXplPzogU2l6ZU9wdGlvbnM7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG4gIGRlbnNpdHk/OiBEZW5zaXR5T3B0aW9ucztcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGJ1dHRvblByZXNldHM6IFByZXNldHM8QnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25CdXR0b25QcmVzZXQge1xuICBzaXplPzogU2l6ZU9wdGlvbnM7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG4gIGRlbnNpdHk/OiBEZW5zaXR5T3B0aW9ucztcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGljb25CdXR0b25QcmVzZXRzOiBQcmVzZXRzPEljb25CdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgU3RhdHVzUGFsZXR0ZSB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvblByZXNldCB7XG4gIGNvbG9yPzogU3RhdHVzUGFsZXR0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGljb25QcmVzZXRzOiBQcmVzZXRzPEljb25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgU3RhdHVzUGFsZXR0ZSB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NCYXJQcmVzZXQge1xuICBjb2xvcj86IFN0YXR1c1BhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBwcm9ncmVzc0JhclByZXNldHM6IFByZXNldHM8UHJvZ3Jlc3NCYXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBTdGF0dXNQYWxldHRlIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9ncmVzc1NwaW5uZXJQcmVzZXQge1xuICBjb2xvcj86IFN0YXR1c1BhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzOiBQcmVzZXRzPFByb2dyZXNzU3Bpbm5lclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvb2xiYXJQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHRvb2xiYXJQcmVzZXRzOiBQcmVzZXRzPFRvb2xiYXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZFByZXNldCB7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG4gIHdpdGhTaGFkb3c/OiBib29sZWFuO1xuICB3aXRob3V0U2hhZG93PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJkQnV0dG9uUHJlc2V0IGV4dGVuZHMgQ2FyZFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgY2FyZFByZXNldHM6IFByZXNldHM8Q2FyZFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIHdpdGhvdXRTaGFkb3c6IHRydWUsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IGNhcmRCdXR0b25QcmVzZXRzOiBQcmVzZXRzPENhcmRCdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICB3aXRob3V0U2hhZG93OiB0cnVlLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJlZVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgdHJlZVByZXNldHM6IFByZXNldHM8VHJlZVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBDb3JlUGFsZXR0ZSwgUHJlc2V0cywgU2l6ZU9wdGlvbnMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUYWdQcmVzZXRzIHtcbiAgc2l6ZT86IFNpemVPcHRpb25zO1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgdGFnUHJlc2V0czogUHJlc2V0czxUYWdQcmVzZXRzPiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhZGdlUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBiYWRnZVByZXNldHM6IFByZXNldHM8QmFkZ2VQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgQ29yZVBhbGV0dGUsIFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmtQcmVzZXQge1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICBmb250V2VpZ2h0PzogJ3JlZ3VsYXInIHwgJ2JvbGQnO1xufVxuXG5leHBvcnQgY29uc3QgbGlua1ByZXNldHM6IFByZXNldHM8TGlua1ByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0UHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBhbGVydFByZXNldHM6IFByZXNldHM8QWxlcnRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGlucHV0UHJlc2V0czogUHJlc2V0czxJbnB1dFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBEcmF3ZXJQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGRyYXdlclByZXNldHM6IFByZXNldHM8RHJhd2VyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFzaWRlUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBhc2lkZVByZXNldHM6IFByZXNldHM8QXNpZGVQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFkY3J1bWJJdGVtUHJlc2V0IHtcbiAgZm9udFdlaWdodD86ICdyZWd1bGFyJyB8ICdib2xkJztcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbiAgd2l0aG91dFVuZGVybGluZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBicmVhZGNydW1iSXRlbVByZXNldHM6IFByZXNldHM8QnJlYWRjcnVtYkl0ZW1QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge1xuICAgIHdpdGhvdXRVbmRlcmxpbmU6IHRydWUsXG4gIH0sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG1vZGFsUHJlc2V0czogUHJlc2V0czxNb2RhbFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBDb3JlUGFsZXR0ZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94UHJlc2V0IHtcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGNoZWNrYm94UHJlc2V0czogUHJlc2V0czxDaGVja2JveFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBSYWRpb1ByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgcmFkaW9QcmVzZXRzOiBQcmVzZXRzPFJhZGlvUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdlJvb3RQcmVzZXQge1xuICBtb2JpbGVCcmVha3BvaW50PzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJztcbiAgaW52ZXJzZT86ICdoZWFkZXInIHwgJ3NpZGViYXInO1xuICBwcmVmZXJTaWRlYmFyPzogJ29wZW5lZCcgfCAnY2xvc2VkJztcbn1cblxuZXhwb3J0IGNvbnN0IG5hdlJvb3RQcmVzZXRzOiBQcmVzZXRzPE5hdlJvb3RQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7XG4gICAgaW52ZXJzZTogJ3NpZGViYXInLFxuICB9LFxuICBjeDoge1xuICAgIHByZWZlclNpZGViYXI6ICdjbG9zZWQnLFxuICB9LFxuICBweDoge1xuICAgIGludmVyc2U6ICdzaWRlYmFyJyxcbiAgfSxcbiAgcng6IHtcbiAgICBwcmVmZXJTaWRlYmFyOiAnY2xvc2VkJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2SGVhZGVyUHJlc2V0IHtcbiAgd2l0aENvbnRhaW5lcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZIZWFkZXJQcmVzZXRzOiBQcmVzZXRzPE5hdkhlYWRlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZTdWJIZWFkZXJQcmVzZXQge1xuICB3aXRoQ29udGFpbmVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IG5hdlN1YkhlYWRlclByZXNldHM6IFByZXNldHM8TmF2U3ViSGVhZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdlNpZGViYXJQcmVzZXQge1xuICBoaWRlVW50aWxUcmFuc2l0aW9uPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IG5hdlNpZGViYXJQcmVzZXRzOiBQcmVzZXRzPE5hdlNpZGViYXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBoaWRlVW50aWxUcmFuc2l0aW9uOiB0cnVlLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7XG4gICAgaGlkZVVudGlsVHJhbnNpdGlvbjogdHJ1ZSxcbiAgfSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2Q29udGVudFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF2Q29udGVudFByZXNldHM6IFByZXNldHM8TmF2Q29udGVudFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZGb290ZXJQcmVzZXQge1xuICB3aXRoQ29udGFpbmVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IG5hdkZvb3RlclByZXNldHM6IFByZXNldHM8TmF2Rm9vdGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkJ1dHRvblByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF2QnV0dG9uUHJlc2V0czogUHJlc2V0czxOYXZCdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2SWNvbkJ1dHRvblByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF2SWNvbkJ1dHRvblByZXNldHM6IFByZXNldHM8TmF2SWNvbkJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZJdGVtUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXZJdGVtUHJlc2V0czogUHJlc2V0czxOYXZJdGVtUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Hcm91cFByZXNldCB7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBidXR0b25Hcm91cFByZXNldHM6IFByZXNldHM8QnV0dG9uR3JvdXBQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXRjaFByZXNldCB7fVxuXG5leHBvcnQgY29uc3Qgc3dpdGNoUHJlc2V0czogUHJlc2V0czxTd2l0Y2hQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZVNlbGVjdFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF0aXZlU2VsZWN0UHJlc2V0czogUHJlc2V0czxOYXRpdmVTZWxlY3RQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRleHRhcmVhUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCB0ZXh0YXJlYVByZXNldHM6IFByZXNldHM8VGV4dGFyZWFQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNrZWxldG9uUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBza2VsZXRvblByZXNldHM6IFByZXNldHM8U2tlbGV0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlclByZXNldCB7fVxuXG5leHBvcnQgY29uc3Qgc2xpZGVyUHJlc2V0czogUHJlc2V0czxTbGlkZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhbmdlU2xpZGVyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCByYW5nZVNsaWRlclByZXNldHM6IFByZXNldHM8UmFuZ2VTbGlkZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlZ21lbnRlZENvbnRyb2xQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzOiBQcmVzZXRzPFNlZ21lbnRlZENvbnRyb2xQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgYnV0dG9uUHJlc2V0cywgaWNvbkJ1dHRvblByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYnV0dG9uL2J1dHRvbi5wcmVzZXRzJztcbmltcG9ydCB7IGljb25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2ljb24vaWNvbi5wcmVzZXRzJztcbmltcG9ydCB7IHByb2dyZXNzQmFyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLnByZXNldHMnO1xuaW1wb3J0IHsgcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXIucHJlc2V0cyc7XG5pbXBvcnQgeyB0b29sYmFyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy90b29sYmFyL3Rvb2xiYXIucHJlc2V0cyc7XG5pbXBvcnQgeyBjYXJkUHJlc2V0cywgY2FyZEJ1dHRvblByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvY2FyZC9jYXJkLnByZXNldHMnO1xuaW1wb3J0IHsgdHJlZVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdHJlZS90cmVlLnByZXNldHMnO1xuaW1wb3J0IHsgdGFnUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy90YWcvdGFnLnByZXNldHMnO1xuaW1wb3J0IHsgYmFkZ2VQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2JhZGdlL2JhZGdlLnByZXNldHMnO1xuaW1wb3J0IHsgbGlua1ByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvbGluay9saW5rLnByZXNldHMnO1xuaW1wb3J0IHsgYWxlcnRQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2FsZXJ0L2FsZXJ0LnByZXNldHMnO1xuaW1wb3J0IHsgaW5wdXRQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2lucHV0L2lucHV0LnByZXNldHMnO1xuaW1wb3J0IHsgZHJhd2VyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9kcmF3ZXIvZHJhd2VyLnByZXNldHMnO1xuaW1wb3J0IHsgYXNpZGVQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2FzaWRlL2FzaWRlLnByZXNldHMnO1xuaW1wb3J0IHsgYnJlYWRjcnVtYkl0ZW1QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWItaXRlbS5wcmVzZXRzJztcbmltcG9ydCB7IG1vZGFsUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9tb2RhbC9tb2RhbC5wcmVzZXRzJztcbmltcG9ydCB7IGNoZWNrYm94UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9jaGVja2JveC9jaGVja2JveC5wcmVzZXRzJztcbmltcG9ydCB7IHJhZGlvUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9yYWRpby9yYWRpby5wcmVzZXRzJztcbmltcG9ydCB7XG4gIG5hdlJvb3RQcmVzZXRzLFxuICBuYXZIZWFkZXJQcmVzZXRzLFxuICBuYXZTdWJIZWFkZXJQcmVzZXRzLFxuICBuYXZTaWRlYmFyUHJlc2V0cyxcbiAgbmF2Q29udGVudFByZXNldHMsXG4gIG5hdkZvb3RlclByZXNldHMsXG4gIG5hdkJ1dHRvblByZXNldHMsXG4gIG5hdkljb25CdXR0b25QcmVzZXRzLFxuICBuYXZJdGVtUHJlc2V0cyxcbn0gZnJvbSAnLi4vLi4vYXRvbWljL25hdi9uYXYucHJlc2V0cyc7XG5pbXBvcnQgeyBidXR0b25Hcm91cFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC5wcmVzZXRzJztcbmltcG9ydCB7IHN3aXRjaFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc3dpdGNoL3N3aXRjaC5wcmVzZXRzJztcbmltcG9ydCB7IG5hdGl2ZVNlbGVjdFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvbmF0aXZlLXNlbGVjdC9uYXRpdmUtc2VsZWN0LnByZXNldHMnO1xuaW1wb3J0IHsgdGV4dGFyZWFQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3RleHRhcmVhL3RleHRhcmVhLnByZXNldHMnO1xuaW1wb3J0IHsgc2tlbGV0b25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3NrZWxldG9uL3NrZWxldG9uLnByZXNldHMnO1xuaW1wb3J0IHsgc2xpZGVyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9zbGlkZXIvc2xpZGVyLnByZXNldHMnO1xuaW1wb3J0IHsgcmFuZ2VTbGlkZXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3JhbmdlLXNsaWRlci9yYW5nZS1zbGlkZXIucHJlc2V0cyc7XG5pbXBvcnQgeyBzZWdtZW50ZWRDb250cm9sUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9zZWdtZW50ZWQtY29udHJvbC9zZWdtZW50ZWQtY29udHJvbC5wcmVzZXRzJztcblxuZXhwb3J0IGludGVyZmFjZSBNb3J0YXJQcmVzZXRUaGVtZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29sb3JTY2hlbWU6ICdzeXN0ZW0nIHwgJ2xpZ2h0JyB8ICdkYXJrJztcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcmVzZXQgPSB7XG4gIHByZXNldDogJ2RlZmF1bHQnLFxuICB0aGVtZToge1xuICAgIG5hbWU6ICdweCcsXG4gICAgY29sb3JTY2hlbWU6ICdsaWdodCcsXG4gIH0gYXMgTW9ydGFyUHJlc2V0VGhlbWUsXG4gIE10ZUJ1dHRvbjogYnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVJY29uQnV0dG9uOiBpY29uQnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVJY29uOiBpY29uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVQcm9ncmVzc0JhcjogcHJvZ3Jlc3NCYXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVByb2dyZXNzU3Bpbm5lcjogcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVUb29sYmFyOiB0b29sYmFyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVDYXJkOiBjYXJkUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVDYXJkQnV0dG9uOiBjYXJkQnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVUcmVlOiB0cmVlUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVUYWc6IHRhZ1ByZXNldHMuZGVmYXVsdCxcbiAgTXRlQmFkZ2U6IGJhZGdlUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVMaW5rOiBsaW5rUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVBbGVydDogYWxlcnRQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUlucHV0OiBpbnB1dFByZXNldHMuZGVmYXVsdCxcbiAgTXRlRHJhd2VyOiBkcmF3ZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUFzaWRlOiBhc2lkZVByZXNldHMuZGVmYXVsdCxcbiAgTXRlQnJlYWRjcnVtYkl0ZW06IGJyZWFkY3J1bWJJdGVtUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVNb2RhbDogbW9kYWxQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUNoZWNrYm94OiBjaGVja2JveFByZXNldHMuZGVmYXVsdCxcbiAgTXRlUmFkaW86IHJhZGlvUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZSb290OiBuYXZSb290UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZIZWFkZXI6IG5hdkhlYWRlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2U3ViSGVhZGVyOiBuYXZTdWJIZWFkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdlNpZGViYXI6IG5hdlNpZGViYXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkNvbnRlbnQ6IG5hdkNvbnRlbnRQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkZvb3RlcjogbmF2Rm9vdGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZCdXR0b246IG5hdkJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2SWNvbkJ1dHRvbjogbmF2SWNvbkJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2SXRlbTogbmF2SXRlbVByZXNldHMuZGVmYXVsdCxcbiAgTXRlQnV0dG9uR3JvdXA6IGJ1dHRvbkdyb3VwUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVTd2l0Y2g6IHN3aXRjaFByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF0aXZlU2VsZWN0OiBuYXRpdmVTZWxlY3RQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVRleHRhcmVhOiB0ZXh0YXJlYVByZXNldHMuZGVmYXVsdCxcbiAgTXRlU2tlbGV0b246IHNrZWxldG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVTbGlkZXI6IHNsaWRlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlUmFuZ2VTbGlkZXI6IHJhbmdlU2xpZGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVTZWdtZW50ZWRDb250cm9sOiBzZWdtZW50ZWRDb250cm9sUHJlc2V0cy5kZWZhdWx0LFxufTtcblxuZXhwb3J0IHR5cGUgTW9ydGFyUHJlc2V0ID0gdHlwZW9mIGRlZmF1bHRQcmVzZXQ7XG5cbmV4cG9ydCBjb25zdCBweFByZXNldDogTW9ydGFyUHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdweCcsXG4gIHRoZW1lOiB7XG4gICAgbmFtZTogJ3B4JyxcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSxcbiAgTXRlQnV0dG9uOiBidXR0b25QcmVzZXRzLnB4LFxuICBNdGVJY29uQnV0dG9uOiBpY29uQnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMucHgsXG4gIE10ZVByb2dyZXNzQmFyOiBwcm9ncmVzc0JhclByZXNldHMucHgsXG4gIE10ZVByb2dyZXNzU3Bpbm5lcjogcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cy5weCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMucHgsXG4gIE10ZUNhcmQ6IGNhcmRQcmVzZXRzLnB4LFxuICBNdGVDYXJkQnV0dG9uOiBjYXJkQnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMucHgsXG4gIE10ZVRhZzogdGFnUHJlc2V0cy5weCxcbiAgTXRlQmFkZ2U6IGJhZGdlUHJlc2V0cy5weCxcbiAgTXRlTGluazogbGlua1ByZXNldHMucHgsXG4gIE10ZUFsZXJ0OiBhbGVydFByZXNldHMucHgsXG4gIE10ZUlucHV0OiBpbnB1dFByZXNldHMucHgsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5weCxcbiAgTXRlQXNpZGU6IGFzaWRlUHJlc2V0cy5weCxcbiAgTXRlQnJlYWRjcnVtYkl0ZW06IGJyZWFkY3J1bWJJdGVtUHJlc2V0cy5weCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5weCxcbiAgTXRlQ2hlY2tib3g6IGNoZWNrYm94UHJlc2V0cy5weCxcbiAgTXRlUmFkaW86IHJhZGlvUHJlc2V0cy5weCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMucHgsXG4gIE10ZU5hdkhlYWRlcjogbmF2SGVhZGVyUHJlc2V0cy5weCxcbiAgTXRlTmF2U3ViSGVhZGVyOiBuYXZTdWJIZWFkZXJQcmVzZXRzLnB4LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5weCxcbiAgTXRlTmF2Q29udGVudDogbmF2Q29udGVudFByZXNldHMucHgsXG4gIE10ZU5hdkZvb3RlcjogbmF2Rm9vdGVyUHJlc2V0cy5weCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLnB4LFxuICBNdGVOYXZJY29uQnV0dG9uOiBuYXZJY29uQnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlTmF2SXRlbTogbmF2SXRlbVByZXNldHMucHgsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMucHgsXG4gIE10ZVN3aXRjaDogc3dpdGNoUHJlc2V0cy5weCxcbiAgTXRlTmF0aXZlU2VsZWN0OiBuYXRpdmVTZWxlY3RQcmVzZXRzLnB4LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLnB4LFxuICBNdGVTa2VsZXRvbjogc2tlbGV0b25QcmVzZXRzLnB4LFxuICBNdGVTbGlkZXI6IHNsaWRlclByZXNldHMucHgsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMucHgsXG4gIE10ZVNlZ21lbnRlZENvbnRyb2w6IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzLnB4LFxufTtcblxuZXhwb3J0IGNvbnN0IGN4UHJlc2V0OiBNb3J0YXJQcmVzZXQgPSB7XG4gIHByZXNldDogJ2N4JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAnY3gnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9LFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMuY3gsXG4gIE10ZUljb25CdXR0b246IGljb25CdXR0b25QcmVzZXRzLmN4LFxuICBNdGVJY29uOiBpY29uUHJlc2V0cy5jeCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5jeCxcbiAgTXRlUHJvZ3Jlc3NTcGlubmVyOiBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzLmN4LFxuICBNdGVUb29sYmFyOiB0b29sYmFyUHJlc2V0cy5jeCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMuY3gsXG4gIE10ZUNhcmRCdXR0b246IGNhcmRCdXR0b25QcmVzZXRzLmN4LFxuICBNdGVUcmVlOiB0cmVlUHJlc2V0cy5jeCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLmN4LFxuICBNdGVCYWRnZTogYmFkZ2VQcmVzZXRzLmN4LFxuICBNdGVMaW5rOiBsaW5rUHJlc2V0cy5jeCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5jeCxcbiAgTXRlSW5wdXQ6IGlucHV0UHJlc2V0cy5jeCxcbiAgTXRlRHJhd2VyOiBkcmF3ZXJQcmVzZXRzLmN4LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLmN4LFxuICBNdGVCcmVhZGNydW1iSXRlbTogYnJlYWRjcnVtYkl0ZW1QcmVzZXRzLmN4LFxuICBNdGVNb2RhbDogbW9kYWxQcmVzZXRzLmN4LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLmN4LFxuICBNdGVSYWRpbzogcmFkaW9QcmVzZXRzLmN4LFxuICBNdGVOYXZSb290OiBuYXZSb290UHJlc2V0cy5jeCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLmN4LFxuICBNdGVOYXZTdWJIZWFkZXI6IG5hdlN1YkhlYWRlclByZXNldHMuY3gsXG4gIE10ZU5hdlNpZGViYXI6IG5hdlNpZGViYXJQcmVzZXRzLmN4LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5jeCxcbiAgTXRlTmF2Rm9vdGVyOiBuYXZGb290ZXJQcmVzZXRzLmN4LFxuICBNdGVOYXZCdXR0b246IG5hdkJ1dHRvblByZXNldHMuY3gsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLmN4LFxuICBNdGVOYXZJdGVtOiBuYXZJdGVtUHJlc2V0cy5jeCxcbiAgTXRlQnV0dG9uR3JvdXA6IGJ1dHRvbkdyb3VwUHJlc2V0cy5jeCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLmN4LFxuICBNdGVOYXRpdmVTZWxlY3Q6IG5hdGl2ZVNlbGVjdFByZXNldHMuY3gsXG4gIE10ZVRleHRhcmVhOiB0ZXh0YXJlYVByZXNldHMuY3gsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMuY3gsXG4gIE10ZVNsaWRlcjogc2xpZGVyUHJlc2V0cy5jeCxcbiAgTXRlUmFuZ2VTbGlkZXI6IHJhbmdlU2xpZGVyUHJlc2V0cy5jeCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMuY3gsXG59O1xuXG5leHBvcnQgY29uc3QgcnhQcmVzZXQ6IE1vcnRhclByZXNldCA9IHtcbiAgcHJlc2V0OiAncngnLFxuICB0aGVtZToge1xuICAgIG5hbWU6ICdyeCcsXG4gICAgY29sb3JTY2hlbWU6ICdsaWdodCcsXG4gIH0sXG4gIE10ZUJ1dHRvbjogYnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMucngsXG4gIE10ZUljb246IGljb25QcmVzZXRzLnJ4LFxuICBNdGVQcm9ncmVzc0JhcjogcHJvZ3Jlc3NCYXJQcmVzZXRzLnJ4LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMucngsXG4gIE10ZVRvb2xiYXI6IHRvb2xiYXJQcmVzZXRzLnJ4LFxuICBNdGVDYXJkOiBjYXJkUHJlc2V0cy5yeCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMucngsXG4gIE10ZVRyZWU6IHRyZWVQcmVzZXRzLnJ4LFxuICBNdGVUYWc6IHRhZ1ByZXNldHMucngsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMucngsXG4gIE10ZUxpbms6IGxpbmtQcmVzZXRzLnJ4LFxuICBNdGVBbGVydDogYWxlcnRQcmVzZXRzLnJ4LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLnJ4LFxuICBNdGVEcmF3ZXI6IGRyYXdlclByZXNldHMucngsXG4gIE10ZUFzaWRlOiBhc2lkZVByZXNldHMucngsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMucngsXG4gIE10ZU1vZGFsOiBtb2RhbFByZXNldHMucngsXG4gIE10ZUNoZWNrYm94OiBjaGVja2JveFByZXNldHMucngsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMucngsXG4gIE10ZU5hdlJvb3Q6IG5hdlJvb3RQcmVzZXRzLnJ4LFxuICBNdGVOYXZIZWFkZXI6IG5hdkhlYWRlclByZXNldHMucngsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5yeCxcbiAgTXRlTmF2U2lkZWJhcjogbmF2U2lkZWJhclByZXNldHMucngsXG4gIE10ZU5hdkNvbnRlbnQ6IG5hdkNvbnRlbnRQcmVzZXRzLnJ4LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMucngsXG4gIE10ZU5hdkJ1dHRvbjogbmF2QnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlTmF2SWNvbkJ1dHRvbjogbmF2SWNvbkJ1dHRvblByZXNldHMucngsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLnJ4LFxuICBNdGVCdXR0b25Hcm91cDogYnV0dG9uR3JvdXBQcmVzZXRzLnJ4LFxuICBNdGVTd2l0Y2g6IHN3aXRjaFByZXNldHMucngsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5yeCxcbiAgTXRlVGV4dGFyZWE6IHRleHRhcmVhUHJlc2V0cy5yeCxcbiAgTXRlU2tlbGV0b246IHNrZWxldG9uUHJlc2V0cy5yeCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLnJ4LFxuICBNdGVSYW5nZVNsaWRlcjogcmFuZ2VTbGlkZXJQcmVzZXRzLnJ4LFxuICBNdGVTZWdtZW50ZWRDb250cm9sOiBzZWdtZW50ZWRDb250cm9sUHJlc2V0cy5yeCxcbn07XG4iLCAiaW1wb3J0IHsgY3hQcmVzZXQsIGRlZmF1bHRQcmVzZXQsIE1vcnRhclByZXNldCwgcHhQcmVzZXQsIHJ4UHJlc2V0IH0gZnJvbSAnLi9wcmVzZXRzJztcbmltcG9ydCB7IGNvbXB1dGVkLCBTaWduYWwsIHNpZ25hbCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmNsYXNzIF9NdGVQcmVzZXRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBwcmVzZXRzID0gbmV3IE1hcDxzdHJpbmcsIE1vcnRhclByZXNldD4oW1xuICAgIFsnZ2xvYmFsJywgZGVmYXVsdFByZXNldF0sXG4gICAgWydkZWZhdWx0JywgZGVmYXVsdFByZXNldF0sXG4gICAgWydweCcsIHB4UHJlc2V0XSxcbiAgICBbJ2N4JywgY3hQcmVzZXRdLFxuICAgIFsncngnLCByeFByZXNldF0sXG4gIF0pO1xuXG4gIHByaXZhdGUgcHJlc2V0Q2hhbmdlZFNpZ25hbCA9IHNpZ25hbDx7IHByZXNldE5hbWU6IHN0cmluZzsgY29tcG9uZW50TmFtZTogc3RyaW5nIH0+KHtcbiAgICBwcmVzZXROYW1lOiBudWxsLFxuICAgIGNvbXBvbmVudE5hbWU6IG51bGwsXG4gIH0pO1xuXG4gIHB1YmxpYyBzZXRQcmVzZXQocHJlc2V0TmFtZTogc3RyaW5nLCBwcmVzZXQ6IFBhcnRpYWw8TW9ydGFyUHJlc2V0Pikge1xuICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgLi4uKHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSkgPz8gZGVmYXVsdFByZXNldCksXG4gICAgICAuLi5wcmVzZXQsXG4gICAgfSk7XG4gICAgdGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLnNldCh7IHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWU6IG51bGwgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29tcG9uZW50UHJlc2V0PEMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXQ+KFxuICAgIHByZXNldE5hbWU6IHN0cmluZyxcbiAgICBjb21wb25lbnROYW1lOiBDLFxuICAgIGNvbXBvbmVudFByZXNldDogUGFydGlhbDxNb3J0YXJQcmVzZXRbQ10+XG4gICkge1xuICAgIGNvbnN0IHNlbGVjdGVkUHJlc2V0ID0gdGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKSA/PyBkZWZhdWx0UHJlc2V0O1xuICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgLi4uc2VsZWN0ZWRQcmVzZXQsXG4gICAgICBbY29tcG9uZW50TmFtZV06IHtcbiAgICAgICAgLi4uKHNlbGVjdGVkUHJlc2V0W2NvbXBvbmVudE5hbWVdID8/ICh7fSBhcyBhbnkpKSxcbiAgICAgICAgLi4uY29tcG9uZW50UHJlc2V0LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLnByZXNldENoYW5nZWRTaWduYWwuc2V0KHsgcHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb21wb25lbnRQcmVzZXRQcm9wZXJ0eTxDIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0LCBQIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0W0NdPihcbiAgICBwcmVzZXROYW1lOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogQyxcbiAgICBwcm9wZXJ0eU5hbWU6IFAsXG4gICAgdmFsdWU6IE1vcnRhclByZXNldFtDXVtQXSB8IFBhcnRpYWw8TW9ydGFyUHJlc2V0W0NdW1BdPlxuICApIHtcbiAgICBjb25zdCBzZWxlY3RlZFByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSkgPz8gZGVmYXVsdFByZXNldDtcbiAgICBjb25zdCBzZWxlY3RlZENvbXBvbmVudFByZXNldCA9IHNlbGVjdGVkUHJlc2V0W2NvbXBvbmVudE5hbWVdIGFzIGFueTtcblxuICAgIC8vIElmIHNldHRpbmcgYW4gb2JqZWN0IHZhbHVlIGJlIHN1cmUgdG8gc3ByZWFkIG92ZXIgZXhpc3RpbmcgdmFsdWVcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5wcmVzZXRzLnNldChwcmVzZXROYW1lLCB7XG4gICAgICAgIC4uLnNlbGVjdGVkUHJlc2V0LFxuICAgICAgICBbY29tcG9uZW50TmFtZV06IHtcbiAgICAgICAgICAuLi5zZWxlY3RlZENvbXBvbmVudFByZXNldCxcbiAgICAgICAgICBbcHJvcGVydHlOYW1lXToge1xuICAgICAgICAgICAgLi4uc2VsZWN0ZWRDb21wb25lbnRQcmVzZXRbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICAgIC4uLnZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlIGp1c3Qgc2V0IHRoZSB2YWx1ZVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5wcmVzZXRzLnNldChwcmVzZXROYW1lLCB7XG4gICAgICAgIC4uLnNlbGVjdGVkUHJlc2V0LFxuICAgICAgICBbY29tcG9uZW50TmFtZV06IHtcbiAgICAgICAgICAuLi5zZWxlY3RlZENvbXBvbmVudFByZXNldCxcbiAgICAgICAgICBbcHJvcGVydHlOYW1lXTogdmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLnNldCh7IHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWUgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJlc2V0KHByZXNldE5hbWU6IHN0cmluZyk6IE1vcnRhclByZXNldCB7XG4gICAgY29uc3QgcHJlc2V0ID0gdGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKTtcbiAgICBpZiAoIXByZXNldCkge1xuICAgICAgY29uc29sZS5lcnJvcihgTXRlUHJlc2V0U2VydmljZTogQSBwcmVzZXQgd2l0aCB0aGUgbmFtZSBcIiR7cHJlc2V0TmFtZX1cIiBkb2VzIG5vdCBleGlzdGApO1xuICAgIH1cbiAgICByZXR1cm4gcHJlc2V0O1xuICB9XG5cbiAgcHVibGljIGdldENvbXBvbmVudFByZXNldDxDIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0PihcbiAgICBwcmVzZXROYW1lOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogQ1xuICApOiBNb3J0YXJQcmVzZXRbQ10ge1xuICAgIGNvbnN0IHByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSk7XG4gICAgY29uc3QgY29tcG9uZW50UHJlc2V0ID0gcHJlc2V0W2NvbXBvbmVudE5hbWVdO1xuICAgIGlmICghcHJlc2V0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBNdGVQcmVzZXRTZXJ2aWNlOiBBIHByZXNldCB3aXRoIHRoZSBuYW1lIFwiJHtwcmVzZXROYW1lfVwiIGRvZXMgbm90IGV4aXN0LmApO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50UHJlc2V0O1xuICB9XG5cbiAgcHVibGljIHNlbGVjdFByZXNldChwcmVzZXROYW1lOiBzdHJpbmcpOiBTaWduYWw8TW9ydGFyUHJlc2V0PiB7XG4gICAgbGV0IGZpcnN0RW1pdCA9IHRydWU7XG4gICAgcmV0dXJuIGNvbXB1dGVkKHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbCwgKGNoYW5nZSwgc2V0KSA9PiB7XG4gICAgICBpZiAoZmlyc3RFbWl0KSB7XG4gICAgICAgIHNldCh0aGlzLmdldFByZXNldChwcmVzZXROYW1lKSk7XG4gICAgICAgIGZpcnN0RW1pdCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChjaGFuZ2UucHJlc2V0TmFtZSA9PT0gcHJlc2V0TmFtZSkge1xuICAgICAgICBzZXQodGhpcy5nZXRQcmVzZXQocHJlc2V0TmFtZSkpO1xuICAgICAgfVxuICAgIH0pIGFzIFNpZ25hbDxNb3J0YXJQcmVzZXQ+O1xuICB9XG5cbiAgcHVibGljIHNlbGVjdENvbXBvbmVudFByZXNldDxDIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0PihcbiAgICBwcmVzZXROYW1lOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogQ1xuICApOiBTaWduYWw8TW9ydGFyUHJlc2V0W0NdPiB7XG4gICAgbGV0IGZpcnN0RW1pdCA9IHRydWU7XG4gICAgcmV0dXJuIGNvbXB1dGVkKHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbCwgKGNoYW5nZSwgc2V0KSA9PiB7XG4gICAgICBpZiAoZmlyc3RFbWl0KSB7XG4gICAgICAgIHNldCh0aGlzLmdldENvbXBvbmVudFByZXNldChwcmVzZXROYW1lLCBjb21wb25lbnROYW1lKSk7XG4gICAgICAgIGZpcnN0RW1pdCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKGNoYW5nZS5wcmVzZXROYW1lID09PSBwcmVzZXROYW1lICYmICFjaGFuZ2UuY29tcG9uZW50TmFtZSkgfHxcbiAgICAgICAgKGNoYW5nZS5wcmVzZXROYW1lID09PSBwcmVzZXROYW1lICYmIGNoYW5nZS5jb21wb25lbnROYW1lID09PSBjb21wb25lbnROYW1lKVxuICAgICAgKSB7XG4gICAgICAgIHNldCh0aGlzLmdldENvbXBvbmVudFByZXNldChwcmVzZXROYW1lLCBjb21wb25lbnROYW1lKSk7XG4gICAgICB9XG4gICAgfSkgYXMgU2lnbmFsPE1vcnRhclByZXNldFtDXT47XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZVByZXNldFNlcnZpY2UgPSBuZXcgX010ZVByZXNldFNlcnZpY2UoKTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzICovXG5pbXBvcnQgeyBDb250ZXh0Q29uc3VtZXIgfSBmcm9tICdAbGl0LWxhYnMvY29udGV4dCc7XG5pbXBvcnQgeyBQcm9wZXJ0eURlY2xhcmF0aW9uLCBSZWFjdGl2ZUVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHksIHN0YXRlIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtcbiAgQ29uc3RydWN0b3IsXG4gIGlzU3NyLFxuICBNdGVFbGVtZW50LFxuICBNdGVQcmVzZXRTZXJ2aWNlLFxuICBwcmVzZXRDb250ZXh0LFxuICBzaWduYWwsXG4gIGNvbXB1dGVkLFxuICBVbnN1YnNjcmliZXIsXG59IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBNb3J0YXJQcmVzZXQgfSBmcm9tICcuL3ByZXNldHMnO1xuXG5leHBvcnQgdHlwZSBQcmVzZXRPcHRpb25zID0gJ21kJyB8ICdzbScgfCAnbGcnIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcmVzZXRFbGVtZW50SW50ZXJmYWNlPFA+IHtcbiAgLyoqIEBpZ25vcmUgKi9cbiAgcmVhZG9ubHkgX19jb21wb25lbnROYW1lOiBrZXlvZiBNb3J0YXJQcmVzZXQ7XG5cbiAgLyoqIFNlbGVjdHMgdGhlIHByZXNldCBmb3IgdGhpcyBjb21wb25lbnQuIE92ZXJyaWRlcyB0aGUgZ2xvYmFsIHByZXNldCBmb3IgdGhpcyBpbnN0YW5jZSBvZiB0aGlzIGNvbXBvbmVudC4gKi9cbiAgcHJlc2V0OiBzdHJpbmc7XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgYXBwbGllZFByZXNldDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByZXNldE1peGluRmFjdG9yeU9wdGlvbnMge1xuICByZWZsZWN0QXBwbGllZFByZXNldDogYm9vbGVhbjtcbn1cblxuY29uc3Qge1xuICBpcyxcbiAgZGVmaW5lUHJvcGVydHksXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBnZXRQcm90b3R5cGVPZixcbn0gPSBPYmplY3Q7XG5cbmV4cG9ydCBjb25zdCBQcmVzZXRNaXhpbkZhY3RvcnkgPSA8UD4oXG4gIGNvbXBvbmVudE5hbWU6IGtleW9mIE1vcnRhclByZXNldCxcbiAgb3B0aW9uczogUHJlc2V0TWl4aW5GYWN0b3J5T3B0aW9ucyA9IHsgcmVmbGVjdEFwcGxpZWRQcmVzZXQ6IGZhbHNlIH1cbikgPT4ge1xuICByZXR1cm4gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICAgIGNsYXNzIFByZXNldEVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHJlYWRvbmx5IF9fY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWU7XG5cbiAgICAgIC8qKiBNYXAgdGhhdCBzdG9yZXMgcHJpdmF0ZSB2YWx1ZXMgdGhhdCB0YWtlIHByZWNlZGVuY2Ugb3ZlciBwcmVzZXQgdmFsdWVzICovXG4gICAgICBwcm90ZWN0ZWQgX3ZhbHVlTWFwID0gbmV3IE1hcDxQcm9wZXJ0eUtleSwgUFtrZXlvZiBQXT4oKTtcblxuICAgICAgLyoqIE1hcCB0aGF0IHN0b3JlcyBmYWxsYmFjayBwcmVzZXQgdmFsdWVzIGVtaXR0ZWQgYnkgdGhlIHByZXNldENvbnRyb2xsZXIgKi9cbiAgICAgIHByb3RlY3RlZCBfcHJlc2V0TWFwID0gbmV3IE1hcDxQcm9wZXJ0eUtleSwgUFtrZXlvZiBQXT4oKTtcblxuICAgICAgLyoqIFNlbGVjdHMgYSBzcGVjaWZpYyBwcmVzZXQgZm9yIHRoaXMgY29tcG9uZW50IGluc3RhbmNlLiBPdmVycmlkZXMgdGhlIGN1cnJlbnQgZ2xvYmFsIHByZXNldC4gKi9cbiAgICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSlcbiAgICAgIHNldCBwcmVzZXQocHJlc2V0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJlc2V0ID0gcHJlc2V0O1xuICAgICAgICB0aGlzLl9hY3RpdmVQcmVzZXRTaWduYWwuc2V0KHByZXNldCk7XG4gICAgICAgIGlmIChpc1NzcigpKSB7XG4gICAgICAgICAgLy8gU3RvcCBTU1IgY29uc3RydWN0b3IgbGlzdGVuZXIgaWYgc3RpbGwgb3Blbi5cbiAgICAgICAgICB0aGlzLnNzckNvbnN0cnVjdG9yU3ViPy4oKTtcbiAgICAgICAgICB0aGlzLnNzckNvbnN0cnVjdG9yU3ViID0gbnVsbDtcbiAgICAgICAgICBjb25zdCBwcmVzZXQgPSBNdGVQcmVzZXRTZXJ2aWNlLmdldFByZXNldCh0aGlzLnByZXNldCA/PyAnZ2xvYmFsJyk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVTc3JQcmVzZXRDaGFuZ2VzKHByZXNldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGdldCBwcmVzZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVzZXQ7XG4gICAgICB9XG4gICAgICBwcml2YXRlIF9wcmVzZXQgPSAnZ2xvYmFsJztcblxuICAgICAgQHByb3BlcnR5KHsgcmVmbGVjdDogb3B0aW9ucz8ucmVmbGVjdEFwcGxpZWRQcmVzZXQgPz8gZmFsc2UgfSkgYXBwbGllZFByZXNldCA9ICdnbG9iYWwnO1xuXG4gICAgICBAc3RhdGUoKSBwcml2YXRlIF9hcHBsaWVkUHJlc2V0Pzogc3RyaW5nO1xuXG4gICAgICAvKiogS2VlcHMgY29uc3RydWN0b3IgcHJlc2V0IHN1YnNjcmlwdGlvbiBvcGVuIHVudGlsIHdpbGxVcGRhdGUgKi9cbiAgICAgIHByaXZhdGUgc3NyQ29uc3RydWN0b3JTdWI6IFVuc3Vic2NyaWJlcjtcbiAgICAgIHByaXZhdGUgcHJldmlvdXNDb21wb25lbnRVbnN1YjogVW5zdWJzY3JpYmVyO1xuXG4gICAgICAvKiogRW1pdHMgd2hlbmV2ZXIgdGhlIGxvY2FsIHByZXNldCB2YWx1ZSBjaGFuZ2VzLiAqL1xuICAgICAgcHJpdmF0ZSBfYWN0aXZlUHJlc2V0U2lnbmFsID0gc2lnbmFsPHN0cmluZz4obnVsbCk7XG4gICAgICBwcml2YXRlIF9wYXJlbnRQcmVzZXRTaWduYWwgPSBzaWduYWw8c3RyaW5nPihudWxsKTtcblxuICAgICAgcHJpdmF0ZSBfcHJlc2V0Q29udGV4dCA9IG5ldyBDb250ZXh0Q29uc3VtZXIodGhpcywge1xuICAgICAgICBjb250ZXh0OiBwcmVzZXRDb250ZXh0LFxuICAgICAgICBzdWJzY3JpYmU6IHRydWUsXG4gICAgICAgIGNhbGxiYWNrOiAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLl9wYXJlbnRQcmVzZXRTaWduYWwuc2V0KCh2YWx1ZSA9PT0gJycgPyBudWxsIDogdmFsdWUpID8/ICdnbG9iYWwnKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvKipcbiAgICAgICAqIE92ZXJyaWRlcyB0aGUgZGVmYXVsdCBnZXRQcm9wZXJ0eURlc2NyaXB0b3IgbWV0aG9kIHRvIGNoZWNrIGZvciB0aGUgY3VzdG9tXG4gICAgICAgKiBgaXNQcmVzZXRgIG9wdGlvbi4gRGVzY3JpcHRvcnMgb2YgcHJvcGVydGllcyB0aGF0IGFyZSBkZWNsYXJlZCB3aXRoIHRoZSBgaXNQcmVzZXRgXG4gICAgICAgKiBvcHRpb24gYXJlIGRlZmluZWQgd2l0aCBzcGVjaWFsIGdldHRlci9zZXR0ZXIgbG9naWMgdGhhdCBzZXRzIHZhbHVlIHRvIHZhbHVlTWFwXG4gICAgICAgKiBhbmQgZ2V0cyB2YWx1ZXMgZnJvbSB0aGUgdmFsdWVNYXAgYnV0IHRoZW4gYWxzbyBmYWxscyBiYWNrIHRvIGFueSB2YWx1ZSBpbiB0aGUgcHJlc2V0TWFwXG4gICAgICAgKlxuICAgICAgICogVGhlIHByZXNldE1hcCBpcyBwb3B1bGF0ZWQgYWJvdmUgZnJvbSB2YWx1ZXMgZnJvbSB0aGUgcHJlc2V0Q29udHJvbGxlciB3aGVuZXZlciB0aGVcbiAgICAgICAqIHByZXNldCBmb3IgdGhpcyBjb21wb25lbnQgaXMgY2hhbmdlZCBnbG9iYWxseS5cbiAgICAgICAqL1xuICAgICAgc3RhdGljIGdldFByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgICAgbmFtZTogUHJvcGVydHlLZXksXG4gICAgICAgIGtleTogc3RyaW5nIHwgc3ltYm9sLFxuICAgICAgICBvcHRpb25zOiBQcm9wZXJ0eURlY2xhcmF0aW9uXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgeyBnZXQsIHNldCB9ID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMucHJvdG90eXBlLCBuYW1lKSA/PyB7XG4gICAgICAgICAgZ2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNba2V5IGFzIGtleW9mIHR5cGVvZiB0aGlzXTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQsIHY6IHVua25vd24pIHtcbiAgICAgICAgICAgICh0aGlzIGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZyB8IHN5bWJvbCwgdW5rbm93bj4pW2tleV0gPSB2O1xuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZ2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCk6IGFueSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGdldHRlciBsb2dpYyB0aGF0IGdldHMgZnJvbSB0aGUgdmFsdWVNYXAgb3IgcHJlc2V0TWFwXG4gICAgICAgICAgICBpZiAob3B0aW9uc1snaXNQcmVzZXQnXSkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fdmFsdWVNYXAgYXMgTWFwPFxuICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eUtleSxcbiAgICAgICAgICAgICAgICAgICAgUFtrZXlvZiBQXVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICkuZ2V0KG5hbWUpIHx8XG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgKHRoaXMgYXMge30gYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pLl9wcmVzZXRNYXAgYXMgTWFwPFxuICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eUtleSxcbiAgICAgICAgICAgICAgICAgICAgUFtrZXlvZiBQXVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICkuZ2V0KG5hbWUpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEZWZhdWx0IHByb3BlcnR5IGdldHRlciBsb2dpY1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBnZXQ/LmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQodGhpczogUmVhY3RpdmVFbGVtZW50LCB2YWx1ZTogdW5rbm93bikge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBzZXR0ZXIgbG9naWMgdGhhdCBzZXRzIHRvIHRoZSB2YWx1ZU1hcFxuICAgICAgICAgICAgaWYgKG9wdGlvbnNbJ2lzUHJlc2V0J10pIHtcbiAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSAoXG4gICAgICAgICAgICAgICAgKHRoaXMgYXMge30gYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pLl92YWx1ZU1hcCBhcyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+XG4gICAgICAgICAgICAgICkuZ2V0KG5hbWUpO1xuICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKHRoaXMgYXMge30gYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pLl92YWx1ZU1hcCBhcyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+XG4gICAgICAgICAgICAgICkuc2V0KG5hbWUsIHZhbHVlIGFzIGFueSk7XG4gICAgICAgICAgICAgIC8vIER1cmluZyBTU1Igd2UgbmVlZCB0byB1cGRhdGUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlYWN0aXZlRWxlbWVudCkucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gT24gdGhlIGNsaWVudCB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBjdXJyZW50IHVwZGF0ZSB0byBmaW5pc2hcbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICh0aGlzIGFzIHVua25vd24gYXMgUmVhY3RpdmVFbGVtZW50KS5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVmYXVsdCBwcm9wZXJ0eSBzZXR0ZXIgbG9naWNcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGdldD8uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgc2V0IS5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBSZWFjdGl2ZUVsZW1lbnQpLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgICAgIC8vIFN1YnNjcmliZXMgZm9yIGNoYW5nZXMgdG8gdGhpcyBjb21wb25lbnRzIGFjdGl2ZSBwcmVzZXQgdG8gdXBkYXRlIGFsbCByZWxldmFudCBwcm9wcyBwcmVzZXQgdmFsdWVzXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKFxuICAgICAgICAgIGNvbXB1dGVkKFxuICAgICAgICAgICAgW3RoaXMuX2FjdGl2ZVByZXNldFNpZ25hbCwgdGhpcy5fcGFyZW50UHJlc2V0U2lnbmFsXSxcbiAgICAgICAgICAgIChbYWN0aXZlUHJlc2V0LCBwYXJlbnRQcmVzZXRdLCBzZXQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGFjdGl2ZVByZXNldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19sb2NhbFByZXNldFRoZW1lID1cbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVByZXNldCA9PT0gJ2dsb2JhbCdcbiAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgIDogTXRlUHJlc2V0U2VydmljZS5nZXRDb21wb25lbnRQcmVzZXQoYWN0aXZlUHJlc2V0LCAndGhlbWUnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZSA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCd0aGVtZScsIG51bGwpO1xuXG4gICAgICAgICAgICAgIHRoaXMuX2FwcGxpZWRQcmVzZXQgPSBhY3RpdmVQcmVzZXQgPz8gcGFyZW50UHJlc2V0ID8/ICdnbG9iYWwnO1xuICAgICAgICAgICAgICB0aGlzLmFwcGxpZWRQcmVzZXQgPSBNdGVQcmVzZXRTZXJ2aWNlLmdldENvbXBvbmVudFByZXNldChcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBsaWVkUHJlc2V0LFxuICAgICAgICAgICAgICAgICdwcmVzZXQnXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgLy8gVW5zdWJzY3JpYmUgdG8gcHJldmlvdXMgY29tcG9uZW50IHByZXNldCBjaGFuZ2VzXG4gICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDb21wb25lbnRVbnN1Yj8uKCk7XG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSBwcm9wcyBpZiBuZXcgY29tcG9uZW50IHByZXNldCBlbWl0c1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ29tcG9uZW50VW5zdWIgPSBNdGVQcmVzZXRTZXJ2aWNlLnNlbGVjdENvbXBvbmVudFByZXNldChcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBsaWVkUHJlc2V0LFxuICAgICAgICAgICAgICAgIHRoaXMuX19jb21wb25lbnROYW1lXG4gICAgICAgICAgICAgICkuc3Vic2NyaWJlKChuZXdQcmVzZXQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobmV3UHJlc2V0KSB7XG4gICAgICAgICAgICAgICAgICBzZXQobmV3UHJlc2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICkuc3Vic2NyaWJlKChuZXdQcmVzZXRzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvbGRWYWx1ZXNNYXAgPSBuZXcgTWFwKHRoaXMuX3ByZXNldE1hcCk7XG4gICAgICAgICAgICBjb25zdCBvbGRQcm9wcyA9IEFycmF5LmZyb20odGhpcy5fcHJlc2V0TWFwLmtleXMoKSk7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IE9iamVjdC5rZXlzKG5ld1ByZXNldHMgPz8ge30pO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8ga2V5cyBpbiB0aGUgbmV3IHByZXNldHMgY2xlYXIgYWxsIHByZXNldCB2YWx1ZXNcbiAgICAgICAgICAgIGlmIChuZXdQcm9wcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggb2xkIHNldCBwcm9wcyBhbmQgbmV3IG9uZXNcbiAgICAgICAgICAgIC8vIFJlbW92ZSBvbGQgb25lcyAmIHNldCBuZXcgb25lc1xuICAgICAgICAgICAgLy8gRmluYWxseSBmb3JjZSBhbiB1cGRhdGUgZm9yIGVhY2ggcHJvcFxuICAgICAgICAgICAgWy4uLm9sZFByb3BzLCAuLi5uZXdQcm9wc10uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChuZXdQcmVzZXRzW2tleV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuc2V0KGtleSwgbmV3UHJlc2V0c1trZXldKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKGtleSwgb2xkVmFsdWVzTWFwLmdldChrZXkpID8/IG51bGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c0NvbXBvbmVudFVuc3ViPy4oKTtcbiAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1Yj8uKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHN1cGVyKGFyZ3MpO1xuXG4gICAgICAgIC8vIFRPRE8ocmVlY2UpOiBFbnN1cmUgd2UgdXBkYXRlIHRoaXMgdG8gc3VwcG9ydCBjb250ZXh0IHdoZW4gdGhhdCBpcyBTU1IgRnJpZW5kbHk6IGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8zMzY1XG4gICAgICAgIC8vIEhhbmRsZSBzZXR0aW5nIHByZXNldCBkZWZhdWx0cyBpbiBTU1JcbiAgICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgICB0aGlzLnNzckNvbnN0cnVjdG9yU3ViID0gTXRlUHJlc2V0U2VydmljZS5zZWxlY3RQcmVzZXQodGhpcy5wcmVzZXQgPz8gJ2dsb2JhbCcpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChwcmVzZXQpID0+IHRoaXMuaGFuZGxlU3NyUHJlc2V0Q2hhbmdlcyhwcmVzZXQpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcml2YXRlIGhhbmRsZVNzclByZXNldENoYW5nZXMocHJlc2V0OiBNb3J0YXJQcmVzZXQpIHtcbiAgICAgICAgaWYgKHByZXNldCkge1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFByZXNldHMgPSBwcmVzZXRbdGhpcy5fX2NvbXBvbmVudE5hbWVdO1xuICAgICAgICAgIGNvbnN0IG9sZFByb3BzID0gQXJyYXkuZnJvbSh0aGlzLl9wcmVzZXRNYXAua2V5cygpKTtcbiAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudFByZXNldHMgPz8ge30pO1xuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGtleXMgaW4gdGhlIG5ldyBwcmVzZXRzIGNsZWFyIGFsbCBwcmVzZXQgdmFsdWVzXG4gICAgICAgICAgaWYgKG5ld1Byb3BzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmNsZWFyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBvbGQgc2V0IHByb3BzIGFuZCBuZXcgb25lc1xuICAgICAgICAgIC8vIFJlbW92ZSBvbGQgb25lcyAmIHNldCBuZXcgb25lc1xuICAgICAgICAgIC8vIEZpbmFsbHkgZm9yY2UgYW4gdXBkYXRlIGZvciBlYWNoIHByb3BcbiAgICAgICAgICBbLi4ub2xkUHJvcHMsIC4uLm5ld1Byb3BzXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRQcmVzZXRzW2tleV0pIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLnNldChrZXksIGNvbXBvbmVudFByZXNldHNba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoa2V5LCBudWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmFwcGxpZWRQcmVzZXQgPSBwcmVzZXRbJ3ByZXNldCddO1xuICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnYXBwbGllZFByZXNldCcsIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBQcmVzZXRFbGVtZW50IGFzIENvbnN0cnVjdG9yPFByZXNldEVsZW1lbnRJbnRlcmZhY2U8UD4+ICYgVDtcbiAgfTtcbn07XG4iLCAiaW1wb3J0IHsgUHJvcGVydHlEZWNsYXJhdGlvbiB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByZXNldFByb3BlcnR5PFQ+KG9wdGlvbnM/OiBQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gIHJldHVybiBwcm9wZXJ0eSh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBpc1ByZXNldDogdHJ1ZSxcbiAgfSBhcyBhbnkpO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdAbGl0LWxhYnMvY29udGV4dCc7XG5cbmV4cG9ydCBjb25zdCBwcmVzZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxzdHJpbmc+KCdNVEVfUFJFU0VUJyk7XG4iLCAiaW1wb3J0IHsgUmVhY3RpdmVDb250cm9sbGVySG9zdCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBNdGVQcmVzZXRTZXJ2aWNlIH0gZnJvbSAnLi4vcHJlc2V0cyc7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBNdGVFbGVtZW50IH0gZnJvbSAnLi4vYmFzZS1jbGFzc2VzJztcblxuY29uc3QgZ2xvYmFsUHJlc2V0JCA9IE10ZVByZXNldFNlcnZpY2Uuc2VsZWN0UHJlc2V0KCdnbG9iYWwnKTtcbmNvbnN0IGdsb2JhbFByZXNldE5hbWUkID0gY29tcHV0ZWQoZ2xvYmFsUHJlc2V0JCwgKHByZXNldCkgPT4gcHJlc2V0LnByZXNldCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGllZFByZXNldENvbnRleHQge1xuICBwcmVzZXROYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUHJlc2V0IGlzIGRldGVybWluZWQgZnJvbSBlaXRoZXIgdGhlIHBhcmVudCBwcmVzZXQgY29udGV4dCBvciBhIGxvY2FsIHByZXNldCBwcm9wZXJ0eS5cbiAqIFRoaXMgY29udHJvbGxlciBrZWVwcyB0cmFjayBvZiB0aGUgYWN0dWFsIGFjdGl2ZSBwcmVzZXQgYXBwbGllZCB0byB0aGUgY3VycmVudCBjb21wb25lbnQuXG4gKiBJZiBhIGNhbGxiYWNrIGlzIGdpdmVuIGl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIHRoYXQgY29udGV4dCBjaGFuZ2VzLiBPdGhlcndpc2UgY29udHJvbGxlclxuICogbWV0aG9kcyBjYW4gYmUgY2FsbGVkIHdoZW4gbmVlZGVkLlxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgZXZlbiB3aXRoaW4gZWxlbWVudHMgdGhhdCBkbyBub3QgaGF2ZSB0aGVpciBvd24gcHJlc2V0XG4gKiBvcHRpb25zIChha2EgZXh0ZW5kIHRoZSBwcmVzZXRNaXhpbikuXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWVkUHJlc2V0Q29udGV4dENvbnRyb2xsZXIge1xuICBwcml2YXRlIGFwcGxpZWRQcmVzZXROYW1lID0gJ2dsb2JhbCc7XG4gIHByaXZhdGUgYWN0aXZlR2xvYmFsUHJlc2V0TmFtZSA9ICdkZWZhdWx0JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGhvc3Q6IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgJiBNdGVFbGVtZW50LFxuICAgIHByaXZhdGUgY2FsbGJhY2s/OiAoY29udGV4dDogQXBwbGllZFByZXNldENvbnRleHQpID0+IHZvaWRcbiAgKSB7XG4gICAgdGhpcy5ob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICB9XG5cbiAgaG9zdENvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmhvc3Quc3Vicy5wdXNoKFxuICAgICAgZ2xvYmFsUHJlc2V0TmFtZSQuc3Vic2NyaWJlKChnbG9iYWxQcmVzZXROYW1lKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlR2xvYmFsUHJlc2V0TmFtZSA9IGdsb2JhbFByZXNldE5hbWU7XG4gICAgICAgIHRoaXMudXBkYXRlQXBwbGllZFByZXNldENvbnRleHQoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLmV4ZWNDYWxsYmFjaygpO1xuICB9XG5cbiAgaG9zdFVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUFwcGxpZWRQcmVzZXRDb250ZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIGV4ZWNDYWxsYmFjaygpIHtcbiAgICB0aGlzLmNhbGxiYWNrPy4oe1xuICAgICAgcHJlc2V0TmFtZTogdGhpcy5hcHBsaWVkUHJlc2V0TmFtZSxcbiAgICB9IGFzIEFwcGxpZWRQcmVzZXRDb250ZXh0KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQXBwbGllZFByZXNldENvbnRleHQoKSB7XG4gICAgbGV0IHVwZGF0ZWQgPSBmYWxzZTtcbiAgICBjb25zdCBuZXdQcmVzZXROYW1lID0gKHRoaXMuaG9zdCBhcyBhbnkpLmFwcGxpZWRQcmVzZXQgPz8gdGhpcy5hY3RpdmVHbG9iYWxQcmVzZXROYW1lO1xuICAgIGlmIChuZXdQcmVzZXROYW1lICE9PSB0aGlzLmFwcGxpZWRQcmVzZXROYW1lKSB7XG4gICAgICB0aGlzLmFwcGxpZWRQcmVzZXROYW1lID0gbmV3UHJlc2V0TmFtZTtcbiAgICAgIHVwZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZCkge1xuICAgICAgdGhpcy5leGVjQ2FsbGJhY2soKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlUHJlc2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBsaWVkUHJlc2V0TmFtZTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgTGl0RWxlbWVudCwgUHJvcGVydHlWYWx1ZU1hcCwgUmVhY3RpdmVFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IGlzU3NyIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxudHlwZSBVcGRhdGVIYW5kbGVyID0gKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZU1hcDxhbnk+KSA9PiB2b2lkO1xuXG5pbnRlcmZhY2UgT25VcGRhdGVPcHRpb25zIHtcbiAgLyoqXG4gICAqIElmIHRydWUsIHdpbGwgb25seSBzdGFydCB3YXRjaGluZyBhZnRlciB0aGUgaW5pdGlhbCB1cGRhdGUvcmVuZGVyXG4gICAqL1xuICB3YWl0VW50aWxGaXJzdFVwZGF0ZT86IGJvb2xlYW47XG5cbiAgLyoqIERldGVybWluZXMgd2hlcmUgdGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQuIERlZmF1bHRzIHRvIGBjbGllbnRgLiAqL1xuICBvbj86ICdjbGllbnQnIHwgJ3NzcicgfCAnYm90aCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblVwZGF0ZShwcm9wTmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBvcHRpb25zPzogT25VcGRhdGVPcHRpb25zKSB7XG4gIGNvbnN0IHJlc29sdmVkT3B0aW9uczogUmVxdWlyZWQ8T25VcGRhdGVPcHRpb25zPiA9IHtcbiAgICB3YWl0VW50aWxGaXJzdFVwZGF0ZTogZmFsc2UsXG4gICAgb246ICdjbGllbnQnLFxuICAgIC4uLm9wdGlvbnMsXG4gIH07XG4gIHJldHVybiA8RWxlbUNsYXNzIGV4dGVuZHMgTGl0RWxlbWVudD4ocHJvdG86IEVsZW1DbGFzcywgZGVjb3JhdGVkRm5OYW1lOiBQcm9wZXJ0eUtleSkgPT4ge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLS0gdXBkYXRlIGlzIGEgcHJvdGVjdGVkIHByb3BlcnR5XG4gICAgY29uc3QgeyB3aWxsVXBkYXRlIH0gPSBwcm90bztcbiAgICBjb25zdCBfcHJvcE5hbWVzID0gQXJyYXkuaXNBcnJheShwcm9wTmFtZXMpID8gcHJvcE5hbWVzIDogW3Byb3BOYW1lc107XG4gICAgY29uc3QgcHJvcE5hbWVLZXlzID0gX3Byb3BOYW1lcyBhcyAoa2V5b2YgRWxlbUNsYXNzKVtdO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLS0gdXBkYXRlIGlzIGEgcHJvdGVjdGVkIHByb3BlcnR5XG4gICAgcHJvdG8ud2lsbFVwZGF0ZSA9IGZ1bmN0aW9uICh0aGlzOiBFbGVtQ2xhc3MsIGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZU1hcDxhbnk+KSB7XG4gICAgICBpZiAocHJvcE5hbWVLZXlzLnNvbWUoKGtleSkgPT4gY2hhbmdlZFByb3BzLmhhcyhrZXkpKSkge1xuICAgICAgICBpZiAoIXJlc29sdmVkT3B0aW9ucy53YWl0VW50aWxGaXJzdFVwZGF0ZSB8fCAodGhpcyBhcyB1bmtub3duIGFzIExpdEVsZW1lbnQpLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICBjb25zdCBzc3IgPSBpc1NzcigpO1xuICAgICAgICAgIGlmIChyZXNvbHZlZE9wdGlvbnMub24gPT09ICdjbGllbnQnICYmICFzc3IpIHtcbiAgICAgICAgICAgICh0aGlzW2RlY29yYXRlZEZuTmFtZV0gYXMgdW5rbm93biBhcyBVcGRhdGVIYW5kbGVyKShjaGFuZ2VkUHJvcHMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzb2x2ZWRPcHRpb25zLm9uID09PSAnc3NyJyAmJiBzc3IpIHtcbiAgICAgICAgICAgICh0aGlzW2RlY29yYXRlZEZuTmFtZV0gYXMgdW5rbm93biBhcyBVcGRhdGVIYW5kbGVyKShjaGFuZ2VkUHJvcHMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzb2x2ZWRPcHRpb25zLm9uID09PSAnYm90aCcpIHtcbiAgICAgICAgICAgICh0aGlzW2RlY29yYXRlZEZuTmFtZV0gYXMgdW5rbm93biBhcyBVcGRhdGVIYW5kbGVyKShjaGFuZ2VkUHJvcHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2lsbFVwZGF0ZS5jYWxsKHRoaXMsIGNoYW5nZWRQcm9wcyk7XG4gICAgfTtcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBpc1NzciB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRPcHRpb25zIHtcbiAgLyoqIGluZGljYXRlIGlmIGV2ZW50IGJ1YmJsZXMgdXAgdGhyb3VnaCB0aGUgRE9NIG9yIG5vdCAqL1xuICBidWJibGVzPzogYm9vbGVhbjtcbiAgLyoqIGluZGljYXRlIGlmIGV2ZW50IGlzIGNhbmNlbGFibGUgKi9cbiAgY2FuY2VsYWJsZT86IGJvb2xlYW47XG4gIC8qKiBpbmRpY2F0ZSBpZiBldmVudCBjYW4gYnViYmxlIGFjcm9zcyB0aGUgYm91bmRhcnkgYmV0d2VlbiB0aGUgc2hhZG93IERPTSBhbmQgdGhlIGxpZ2h0IERPTSAqL1xuICBjb21wb3NlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBFdmVudEVtaXR0ZXI8VD4ge1xuICBwcml2YXRlIGV2ZW50TmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFyZ2V0OiBIVE1MRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcpIHtcbiAgICAvLyBTYW5pdHkgY2hlY2sgdG8gY2FsbCBvdXQgaW1wcm9wZXJseSBwcmVmaXhlZCBldmVudCBlbWl0dGVyc1xuICAgIHRyeSB7XG4gICAgICBpZiAoZXZlbnROYW1lPy5bMF0gIT09ICdfJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGAke3RhcmdldC50YWdOYW1lfTogRXZlbnRFbWl0dGVyIHByb3BlcnR5IGZvciBcIiR7ZXZlbnROYW1lfVwiIG11c3QgYmUgcHJlZml4ZWQgd2l0aCBcIl9cImBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9XG4gICAgdGhpcy5ldmVudE5hbWUgPSBldmVudE5hbWUucmVwbGFjZSgvXl8vLCAnJyk7XG4gIH1cblxuICAvKiogRGlzcGF0Y2hlcyB0aGUgY3VzdG9tIGV2ZW50LiBJZiB0aGUgZXZlbnQgaXMgYGNhbmNlbGFibGVgIGFuZCBpcyBwcmV2ZW50ZWQgdGhpcyB3aWxsIHJldHVybiBmYWxzZS4gKi9cbiAgZW1pdCh2YWx1ZTogVCwgb3B0aW9ucz86IEV2ZW50T3B0aW9ucyk6IGJvb2xlYW4ge1xuICAgIC8vIFRPRE8ocmVlY2UpOiByZW1vdmUgd2hlbiBldmVudHMgYXJlIHN1cHBvcnRlZCBkdXJpbmcgU1NSXG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXJnZXQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50PFQ+KHRoaXMuZXZlbnROYW1lLCB7XG4gICAgICAgICAgZGV0YWlsOiB2YWx1ZSxcbiAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgICAgIGNvbXBvc2VkOiB0cnVlLFxuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gTGVnYWN5IFRTIERlY29yYXRvclxuZnVuY3Rpb24gbGVnYWN5RXZlbnQoXG4gIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcixcbiAgcHJvdG9PckRlc2NyaXB0b3I6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBuYW1lOiBQcm9wZXJ0eUtleVxuKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b09yRGVzY3JpcHRvciwgbmFtZSwgZGVzY3JpcHRvcik7XG59XG5cbi8vIFRDMzkgRGVjb3JhdG9ycyBwcm9wb3NhbFxuZnVuY3Rpb24gc3RhbmRhcmRFdmVudChkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IsIGVsZW1lbnQ6IHsga2V5OiBzdHJpbmcgfSkge1xuICByZXR1cm4ge1xuICAgIGtpbmQ6ICdtZXRob2QnLFxuICAgIHBsYWNlbWVudDogJ3Byb3RvdHlwZScsXG4gICAga2V5OiBlbGVtZW50LmtleSxcbiAgICBkZXNjcmlwdG9yLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRFbWl0dGVyKCkge1xuICByZXR1cm4gKHByb3RvT3JEZXNjcmlwdG9yOiBhbnksIG5hbWU6IHN0cmluZyk6IGFueSA9PiB7XG4gICAgY29uc3QgZGVzY3JpcHRvciA9IHtcbiAgICAgIGdldCh0aGlzOiBIVE1MRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbmV3IEV2ZW50RW1pdHRlcih0aGlzLCBuYW1lICE9PSB1bmRlZmluZWQgPyBuYW1lIDogcHJvdG9PckRlc2NyaXB0b3Iua2V5KTtcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH07XG5cbiAgICByZXR1cm4gbmFtZSAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGxlZ2FjeUV2ZW50KGRlc2NyaXB0b3IsIHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lKVxuICAgICAgOiBzdGFuZGFyZEV2ZW50KGRlc2NyaXB0b3IsIHByb3RvT3JEZXNjcmlwdG9yKTtcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2Jhc2UuanMnO1xuLyoqXG4gKiBJdGVtcyBpbiB0aGlzIGZpbGUgYXJlIG1vZGlmaWNhdGlvbnMgb2Ygb2YgdGhlIGRlY29yYXRvcnMgaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2Jsb2IvbWFpbi9wYWNrYWdlcy9yZWFjdGl2ZS1lbGVtZW50L3NyYy9kZWNvcmF0b3JzL2N1c3RvbS1lbGVtZW50LnRzXG4gKlxuICogV2UndmUgYWRkZWQgY2hlY2tzIHRvIHByZXZlbnQgcmUtcmVnaXN0cmF0aW9ucyBmcm9tIHRocm93aW5nIGhhcmQgZXJyb3JzLlxuICovXG5cbi8qKlxuICogQWxsb3cgZm9yIGN1c3RvbSBlbGVtZW50IGNsYXNzZXMgd2l0aCBwcml2YXRlIGNvbnN0cnVjdG9yc1xuICovXG50eXBlIEN1c3RvbUVsZW1lbnRDbGFzcyA9IE9taXQ8dHlwZW9mIEhUTUxFbGVtZW50LCAnbmV3Jz47XG5cbmV4cG9ydCB0eXBlIEN1c3RvbUVsZW1lbnREZWNvcmF0b3IgPSB7XG4gIC8vIGxlZ2FjeVxuICAoY2xzOiBDdXN0b21FbGVtZW50Q2xhc3MpOiB2b2lkO1xuXG4gIC8vIHN0YW5kYXJkXG4gICh0YXJnZXQ6IEN1c3RvbUVsZW1lbnRDbGFzcywgY29udGV4dDogQ2xhc3NEZWNvcmF0b3JDb250ZXh0PENvbnN0cnVjdG9yPEhUTUxFbGVtZW50Pj4pOiB2b2lkO1xufTtcblxuLyoqXG4gKiBDbGFzcyBkZWNvcmF0b3IgZmFjdG9yeSB0aGF0IGRlZmluZXMgdGhlIGRlY29yYXRlZCBjbGFzcyBhcyBhIGN1c3RvbSBlbGVtZW50LlxuICpcbiAqIGBgYGpzXG4gKiBAY3VzdG9tRWxlbWVudCgnbXktZWxlbWVudCcpXG4gKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYGA7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICogQHBhcmFtIHRhZ05hbWUgVGhlIHRhZyBuYW1lIG9mIHRoZSBjdXN0b20gZWxlbWVudCB0byBkZWZpbmUuXG4gKi9cbmV4cG9ydCBjb25zdCBkZWZpbmVFbGVtZW50ID1cbiAgKHRhZ05hbWU6IHN0cmluZyk6IEN1c3RvbUVsZW1lbnREZWNvcmF0b3IgPT5cbiAgKFxuICAgIGNsYXNzT3JUYXJnZXQ6IEN1c3RvbUVsZW1lbnRDbGFzcyB8IENvbnN0cnVjdG9yPEhUTUxFbGVtZW50PixcbiAgICBjb250ZXh0PzogQ2xhc3NEZWNvcmF0b3JDb250ZXh0PENvbnN0cnVjdG9yPEhUTUxFbGVtZW50Pj5cbiAgKSA9PiB7XG4gICAgaWYgKGNvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplcigoKSA9PiB7XG4gICAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0Py4odGFnTmFtZSkpIHtcbiAgICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY2xhc3NPclRhcmdldCBhcyBDdXN0b21FbGVtZW50Q29uc3RydWN0b3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQ/Lih0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY2xhc3NPclRhcmdldCBhcyBDdXN0b21FbGVtZW50Q29uc3RydWN0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiIsICJpbXBvcnQgeyBDb25zdHJ1Y3RvciwgTXRlRWxlbWVudCwgUHJlc2V0RWxlbWVudEludGVyZmFjZSwgcHJlc2V0UHJvcGVydHkgfSBmcm9tICcuLi8nO1xuXG4vKiogUG9zc2libGUgY29yZSBwYWxldHRlIGdyb3VwIGNvbG9yIHZhbHVlcy4gKi9cbmV4cG9ydCB0eXBlIENvcmVQYWxldHRlID0gJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGVydGlhcnknIHwgJ2RhbmdlcicgfCB1bmRlZmluZWQ7XG5cbi8qKiAgUG9zc2libGUgc3RhdHVzIHBhbGV0dGUgZ3JvdXAgY29sb3IgdmFsdWVzLiAqL1xuZXhwb3J0IHR5cGUgU3RhdHVzUGFsZXR0ZSA9XG4gIHwgJ3ByaW1hcnknXG4gIHwgJ3NlY29uZGFyeSdcbiAgfCAndGVydGlhcnknXG4gIHwgJ2FjY2VudCdcbiAgfCAnd2FybmluZydcbiAgfCAnc3VjY2VzcydcbiAgfCAnZGFuZ2VyJ1xuICB8IHVuZGVmaW5lZDtcblxuLyoqIFBvc3NpYmxlIHZpeiBwYWxldHRlIGdyb3VwIGNvbG9yIHZhbHVlcy4gKi9cbmV4cG9ydCB0eXBlIFZpelBhbGV0dGUgPSAnMScgfCAnMicgfCAnMycgfCAnNCcgfCAnNScgfCAnNicgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFBhbGV0dGVHcm91cENvbG9yID0gQ29yZVBhbGV0dGUgfCBTdGF0dXNQYWxldHRlIHwgVml6UGFsZXR0ZTtcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29sb3JJbnRlcmZhY2U8UGFsZXR0ZUdyb3VwPiB7XG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBwcmltYXJ5IGNvbG9yIHBhbGV0dGUgdXNlZCB0byB0aGVtZSB0aGlzIGNvbXBvbmVudFxuICAgKiBAYXR0ciBjb2xvclxuICAgKi9cbiAgY29sb3I6IFBhbGV0dGVHcm91cDtcbn1cblxuZXhwb3J0IGVudW0gUGFsZXR0ZUdyb3VwT3B0aW9uIHtcbiAgQ29yZSA9ICdjb3JlJyxcbiAgU3RhdHVzID0gJ3N0YXR1cycsXG4gIFZpeiA9ICd2aXonLFxufVxuXG5leHBvcnQgY29uc3QgQ29yZUNvbG9yTWl4aW4gPSA8XG4gIFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50ICYgUGFydGlhbDxQcmVzZXRFbGVtZW50SW50ZXJmYWNlPGFueT4+PlxuPihcbiAgc3VwZXJDbGFzczogVFxuKSA9PiB7XG4gIGNsYXNzIENvbG9yRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIEFkanVzdHMgdGhlIHByaW1hcnkgY29sb3IgcGFsZXR0ZSB1c2VkIHRvIHRoZW1lIHRoaXMgY29tcG9uZW50XG4gICAgICogQGF0dHIgY29sb3JcbiAgICAgKi9cbiAgICBAcHJlc2V0UHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGNvbG9yOiBDb3JlUGFsZXR0ZTtcbiAgfVxuXG4gIHJldHVybiBDb2xvckVsZW1lbnQgYXMgQ29uc3RydWN0b3I8Q29sb3JJbnRlcmZhY2U8Q29yZVBhbGV0dGU+PiAmIFQ7XG59O1xuXG5leHBvcnQgY29uc3QgU3RhdHVzQ29sb3JNaXhpbiA9IDxcbiAgVCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQgJiBQYXJ0aWFsPFByZXNldEVsZW1lbnRJbnRlcmZhY2U8YW55Pj4+XG4+KFxuICBzdXBlckNsYXNzOiBUXG4pID0+IHtcbiAgY2xhc3MgQ29sb3JFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgcHJpbWFyeSBjb2xvciBwYWxldHRlIHVzZWQgdG8gdGhlbWUgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBjb2xvclxuICAgICAqL1xuICAgIEBwcmVzZXRQcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgY29sb3I6IFN0YXR1c1BhbGV0dGU7XG4gIH1cblxuICByZXR1cm4gQ29sb3JFbGVtZW50IGFzIENvbnN0cnVjdG9yPENvbG9ySW50ZXJmYWNlPFN0YXR1c1BhbGV0dGU+PiAmIFQ7XG59O1xuXG5leHBvcnQgY29uc3QgVml6Q29sb3JNaXhpbiA9IDxcbiAgVCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQgJiBQYXJ0aWFsPFByZXNldEVsZW1lbnRJbnRlcmZhY2U8YW55Pj4+XG4+KFxuICBzdXBlckNsYXNzOiBUXG4pID0+IHtcbiAgY2xhc3MgQ29sb3JFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgcHJpbWFyeSBjb2xvciBwYWxldHRlIHVzZWQgdG8gdGhlbWUgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBjb2xvclxuICAgICAqL1xuICAgIEBwcmVzZXRQcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgY29sb3I6IFZpelBhbGV0dGU7XG4gIH1cblxuICByZXR1cm4gQ29sb3JFbGVtZW50IGFzIENvbnN0cnVjdG9yPENvbG9ySW50ZXJmYWNlPFZpelBhbGV0dGU+PiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdChbZGVuc2l0eT1jb21wYWN0XSl7LS1tdGUtc3BhY2UteHhzOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHMpOy0tbXRlLXNwYWNlLXNtOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXNtKTstLW10ZS1zcGFjZS1tZDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QtbGcpOy0tbXRlLXNwYWNlLXhsOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXhsKTstLW10ZS1zcGFjZS14eGw6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXh4eGwpfTpob3N0KFtkZW5zaXR5PWNvbWZ5XSl7LS1tdGUtc3BhY2UteHhzOnZhcigtLW10ZS1zcGFjZS1jb21meS14eHMpOy0tbXRlLXNwYWNlLXhzOnZhcigtLW10ZS1zcGFjZS1jb21meS14cyk7LS1tdGUtc3BhY2Utc206dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXNtKTstLW10ZS1zcGFjZS1tZDp2YXIoLS1tdGUtc3BhY2UtY29tZnktbWQpOy0tbXRlLXNwYWNlLWxnOnZhcigtLW10ZS1zcGFjZS1jb21meS1sZyk7LS1tdGUtc3BhY2UteGw6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXhsKTstLW10ZS1zcGFjZS14eGw6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4bCk7LS1tdGUtc3BhY2UteHh4bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHh4bCl9Omhvc3QoW2RlbnNpdHk9cm9vbXldKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLXJvb215LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLXJvb215LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2Utcm9vbXktc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1yb29teS1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLXJvb215LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14eHhsKX1gOyIsICJpbXBvcnQgeyBMaXRFbGVtZW50LCBQcm9wZXJ0eVZhbHVlcyB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRGlzYWJsZWRJbnRlcmZhY2Uge1xuICAvKipcbiAgICogRGlzYWJsZXMgdGhpcyBjb21wb25lbnRcbiAgICogQGF0dHIgZGlzYWJsZWRcbiAgICovXG4gIGRpc2FibGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgRGlzYWJsZWRNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgRGlzYWJsZWRFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBkaXNhYmxlZFxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8vIEJlY2F1c2UgYGFyaWFEaXNhYmxlZGAgZXhpc3RzIGFzIGEgc3RyaW5nIG9uIExpdEVsZW1lbnQgd2UgY2Fubm90IGRlY2xhcmUgdGhpcyBhIHByb3BlcnR5IGhlcmVcbiAgICBwcm90ZWN0ZWQgd2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzPGFueT4pOiB2b2lkIHtcbiAgICAgIHN1cGVyLndpbGxVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKF9jaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIGAke3RoaXMuZGlzYWJsZWR9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gRGlzYWJsZWRFbGVtZW50IGFzIENvbnN0cnVjdG9yPERpc2FibGVkSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBwcmVzZXRQcm9wZXJ0eSB9IGZyb20gJy4uL3ByZXNldHMvcHJlc2V0LmRlY29yYXRvcic7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEludmVyc2VJbnRlcmZhY2Uge1xuICAvKiogUmVuZGVycyB0aGlzIGNvbXBvbmVudCB3aXRoIGludmVyc2UgdGhlbWluZyAqL1xuICBpbnZlcnNlOiBib29sZWFuO1xuXG4gIC8qKiBTcGVjaWFsIG9wdGlvbiB0byBvdmVycmlkZSBpbnZlcnNlIHdoZW4gaXQgaXMgc2V0IGJ5IGEgcHJlc2V0ICovXG4gIHdpdGhvdXRJbnZlcnNlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgSW52ZXJzZU1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBJbnZlcnNlRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKiBSZW5kZXJzIHRoaXMgY29tcG9uZW50IHdpdGggaW52ZXJzZSB0aGVtaW5nICovXG4gICAgQHByZXNldFByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBpbnZlcnNlID0gZmFsc2U7XG5cbiAgICAvKiogU3BlY2lhbCBvcHRpb24gdG8gb3ZlcnJpZGUgaW52ZXJzZSB3aGVuIGl0IGlzIHNldCBieSBhIHByZXNldCAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgd2l0aG91dEludmVyc2UgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gSW52ZXJzZUVsZW1lbnQgYXMgQ29uc3RydWN0b3I8SW52ZXJzZUludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3QoW2ludmVyc2VdOm5vdChbd2l0aG91dEludmVyc2VdKSl7LS1tdGUtc3VyZmFjZS0xOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tbXRlLXN1cmZhY2UtMS1yZ2I6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpOy0tbXRlLXN1cmZhY2UtMjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlKTstLW10ZS1zdXJmYWNlLTItcmdiOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UtcmdiKTstLW10ZS1zdXJmYWNlLTM6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS0zLXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtc3VyZmFjZS00OnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tbXRlLXN1cmZhY2UtNC1yZ2I6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpOy0tbXRlLWluay0xOnZhcigtLW10ZS13aGl0ZSk7LS1tdGUtaW5rLTEtcmdiOnZhcigtLW10ZS13aGl0ZS1yZ2IpOy0tbXRlLWluay0yOnZhcigtLW10ZS13aGl0ZSk7LS1tdGUtaW5rLTItcmdiOnZhcigtLW10ZS13aGl0ZS1yZ2IpOy0tbXRlLWluay0zOnZhcigtLW10ZS13aGl0ZSk7LS1tdGUtaW5rLTMtcmdiOnZhcigtLW10ZS13aGl0ZS1yZ2IpOy0tbXRlLWluay00OnZhcigtLW10ZS1ibGFjayk7LS1tdGUtaW5rLTQtcmdiOnZhcigtLW10ZS1ibGFjay1yZ2IpOy0tbXRlLWluay01OnZhcigtLW10ZS1ibGFjayk7LS1tdGUtaW5rLTUtcmdiOnZhcigtLW10ZS1ibGFjay1yZ2IpOy0tbXRlLWJvcmRlci0xOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZSk7LS1tdGUtYm9yZGVyLTEtcmdiOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZS1yZ2IpOy0tbXRlLWJvcmRlci0yOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZSk7LS1tdGUtYm9yZGVyLTItcmdiOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZS1yZ2IpOy0tbXRlLWJvcmRlci0zOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZSk7LS1tdGUtYm9yZGVyLTMtcmdiOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZS1yZ2IpOy0tbXRlLWRpc2FibGVkLTE6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMSk7LS1tdGUtZGlzYWJsZWQtMS1yZ2I6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMS1yZ2IpOy0tbXRlLWRpc2FibGVkLTI6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMik7LS1tdGUtZGlzYWJsZWQtMi1yZ2I6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMik7LS1tdGUtZGlzYWJsZWQtMzp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zKTstLW10ZS1kaXNhYmxlZC0zLXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zLXJnYik7LS1tdGUtZGlzYWJsZWQtNDp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zKTstLW10ZS1kaXNhYmxlZC00LXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWRlZmF1bHQtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMS1kZWZhdWx0LWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LWEpOy0tbXRlLWl0LXN1cmZhY2UtMS1ob3Zlci1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMS1ob3Zlci1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItYSk7LS1tdGUtaXQtc3VyZmFjZS0xLWFjdGl2ZS1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtYSk7LS1tdGUtaXQtc3VyZmFjZS0yLWRlZmF1bHQtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMi1kZWZhdWx0LWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LWEpOy0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItYSk7LS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtYSk7LS1tdGUtaXQtc3VyZmFjZS0zLWRlZmF1bHQtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMy1kZWZhdWx0LWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LWEpOy0tbXRlLWl0LXN1cmZhY2UtMy1ob3Zlci1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMy1ob3Zlci1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItYSk7LS1tdGUtaXQtc3VyZmFjZS0zLWFjdGl2ZS1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTMtYWN0aXZlLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtYSk7LS1tdGUtbGlnaHQ6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1saWdodC1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtZGFyazp2YXIoLS1tdGUtYmxhY2spOy0tbXRlLWRhcmstcmdiOnZhcigtLW10ZS1ibGFjay1yZ2IpOy0tYnV0dG9uLWZpbGxlZC1iZzp2YXIoLS1tdGUtd2hpdGUpOy0tYnV0dG9uLWZpbGxlZC1pbms6dmFyKC0tbXRlLWJsYWNrKTstLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWJnOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZSk7LS1idXR0b24tZmlsbGVkLWFjdGl2ZS1pbms6dmFyKC0tbXRlLXdoaXRlKX1gOyIsICJpbXBvcnQgeyBDb25zdHJ1Y3RvciwgTXRlRWxlbWVudCB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBwcmVzZXRQcm9wZXJ0eSB9IGZyb20gJy4uL3ByZXNldHMvcHJlc2V0LmRlY29yYXRvcic7XG5pbXBvcnQgeyBQcmVzZXRFbGVtZW50SW50ZXJmYWNlIH0gZnJvbSAnLi4vcHJlc2V0cy9wcmVzZXQubWl4aW4nO1xuXG5leHBvcnQgdHlwZSBTaXplT3B0aW9ucyA9ICdtZCcgfCAneHMnIHwgJ3NtJyB8ICdsZycgfCAneGwnIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTaXplSW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIHNjYWxlIG9mIHRoaXMgY29tcG9uZW50XG4gICAqIEBhdHRyIHNpemVcbiAgICovXG4gIHNpemU6IFNpemVPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgU2l6ZU1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50ICYgUGFydGlhbDxQcmVzZXRFbGVtZW50SW50ZXJmYWNlPGFueT4+Pj4oXG4gIHN1cGVyQ2xhc3M6IFRcbikgPT4ge1xuICBjbGFzcyBTaXplRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIEFkanVzdHMgdGhlIHNjYWxlIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQGF0dHIgc2l6ZVxuICAgICAqL1xuICAgIEBwcmVzZXRQcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgc2l6ZTogU2l6ZU9wdGlvbnM7XG4gIH1cbiAgcmV0dXJuIFNpemVFbGVtZW50IGFzIENvbnN0cnVjdG9yPFNpemVJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IG9uVXBkYXRlIH0gZnJvbSAnLi4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBEaXNhYmxlZEludGVyZmFjZSB9IGZyb20gJy4vZGlzYWJsZWQubWl4aW4nO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBpc1NzciB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRhYkluZGV4SW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byByZXRyaWV2ZSB0aGUgY3VycmVudCB0YWJpbmRleCBhdHRyaWJ1dGUgdmFsdWUgZnJvbSBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBnZXRUYWJJbmRleEFkYXB0ZXIoKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gc2V0IHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgb24gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnRcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc2V0VGFiSW5kZXhBZGFwdGVyKHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gcmVtb3ZlIHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgZnJvbSBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudFxuICAgKiBAaWdub3JlXG4gICAqL1xuICByZW1vdmVUYWJJbmRleEFkYXB0ZXIoKTogdm9pZDtcbn1cblxuLyoqXG4gKiBNaXhpbiB0byBwcm9wZXJseSBtYW5hZ2UgdGhlIHRhYmluZGV4IGluIGEgbm9uLWludHJ1c2l2ZSB3YXkuIFdoZW4gZGlzYWJsZWQgaXMgdHJ1ZSxcbiAqIHRoZSB0YWJpbmRleCB3aWxsIEFMV0FZUyBiZSBgLTFgLiBIb3dldmVyLCBhbnkgY2hhbmdlcyB0byB0YWJpbmRleCB3aWxsIGJlIGludGVyY2VwdGVkXG4gKiBhbmQgY2FjaGVkIGludGVybmFsbHkgdW50aWwgZGlzYWJsZWQgaXMgZmFsc2UsIHRoZW4gdGFiaW5kZXggd2lsbCBiZSByZXN0b3JlZCB0byB0aGVcbiAqIGNhY2hlZCB2YWx1ZSwgb3IgcmVtb3ZlZCBpZiB0aGF0IGlzIHVuZGVmaW5lZC5cbiAqL1xuZXhwb3J0IGNvbnN0IFRhYkluZGV4TWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPExpdEVsZW1lbnQgJiBEaXNhYmxlZEludGVyZmFjZT4+KFxuICBzdXBlckNsYXNzOiBULFxuICBvcHRpb25zOiB7IGluaXRpYWxUYWJJbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkIH0gPSB7IGluaXRpYWxUYWJJbmRleDogdW5kZWZpbmVkIH1cbikgPT4ge1xuICBjbGFzcyBUYWJJbmRleEVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6ICd0YWJpbmRleCcsIHR5cGU6IE51bWJlciwgbm9BY2Nlc3NvcjogdHJ1ZSB9KVxuICAgIHB1YmxpYyBvdmVycmlkZSBzZXQgdGFiSW5kZXgodGFiSW5kZXg6IG51bWJlcikge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgLy8gV2hlbiBzZXR0aW5nIHRoZSB0YWJJbmRleCBvbiB0aGUgY3VycmVudCBlbGVtZW50IHRvIGAtMWAgZGlzYWJsZWQsIHdlIHdhbnQgdG8ga2VlcCB0cmFjayBvZiB3aGF0IHRoZSB0YWJJbmRleCB2YWx1ZSBiZWZvcmUgdGhhdCB3YXNcbiAgICAgICAgLy8gYXMgdGhlIGNhY2hlZFRhYkluZGV4LiBUbyBkbyB0aGlzIHdlIG11c3QgaWdub3JlIHRoZSBpbml0aWFsIGNoYW5nZSB0byBgLTFgIGFuZCB0aGVuIGNhY2hlIGFueSBmdXR1cmUgdmFsdWVzIGJlZm9yZSBrZWVwaW5nIHRoZVxuICAgICAgICAvLyB0YWJJbmRleCBhcyBgLTFgIHVudGlsIG5vIGxvbmdlciBkaXNhYmxlZC4gVGhlbiB3ZSBjYW4gcmV0dXJuIHRoZSB0YWJJbmRleCB0byB3aGF0ZXZlciB0aGUgbGFzdCBzZXQgdmFsdWUgd2FzIGZyb20gdGhlIGNhY2hlZCBpbmRleC5cbiAgICAgICAgaWYgKCF0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLl9jYWNoZWRUYWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICAgIHRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoJy0xJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3RhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKGAke3RoaXMuX3RhYkluZGV4fWApO1xuICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0IHRhYkluZGV4KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RhYkluZGV4O1xuICAgIH1cbiAgICBwcml2YXRlIF90YWJJbmRleCA9IG9wdGlvbnM/LmluaXRpYWxUYWJJbmRleDtcbiAgICBwcml2YXRlIF9jYWNoZWRUYWJJbmRleCA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSBmYWxzZTtcblxuICAgIEBvblVwZGF0ZShbJ2Rpc2FibGVkJ10sIHsgb246ICdib3RoJyB9KVxuICAgIHByaXZhdGUgaGFuZGxlVGFiaW5kZXhDaGFuZ2UoY2hhbmdlZFByb3BzKSB7XG4gICAgICBpZiAoY2hhbmdlZFByb3BzLmhhcygnZGlzYWJsZWQnKSkge1xuICAgICAgICBpZiAoY2hhbmdlZFByb3BzLmdldCgnZGlzYWJsZWQnKSA9PT0gZmFsc2UgJiYgdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gTnVtYmVyKHRoaXMuZ2V0VGFiSW5kZXhBZGFwdGVyKCkpO1xuICAgICAgICAgIHRoaXMuX3RhYkluZGV4ID0gLTE7XG4gICAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoJy0xJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlZFByb3BzLmdldCgnZGlzYWJsZWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLl9jYWNoZWRUYWJJbmRleCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX2NhY2hlZFRhYkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl90YWJJbmRleCA9IHRoaXMuX2NhY2hlZFRhYkluZGV4O1xuICAgICAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoYCR7dGhpcy5fY2FjaGVkVGFiSW5kZXh9YCk7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZWRUYWJJbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVRhYkluZGV4QWRhcHRlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgdGFiaW5kZXggYXR0cmlidXRlIHZhbHVlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgKi9cbiAgICBnZXRUYWJJbmRleEFkYXB0ZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgLyoqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byBzZXQgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBvbiBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudCAqL1xuICAgIHNldFRhYkluZGV4QWRhcHRlcih2YWx1ZTogc3RyaW5nLCBzaG91bGRQcmV2ZW50VGFiSW5kZXhDaGFuZ2VPblNlbGYgPSBmYWxzZSkge1xuICAgICAgaWYgKHNob3VsZFByZXZlbnRUYWJJbmRleENoYW5nZU9uU2VsZikge1xuICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gcmVtb3ZlIHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgZnJvbSBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudCAqL1xuICAgIHJlbW92ZVRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIH1cblxuICAgIHdpbGxVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgIHN1cGVyLndpbGxVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAoaXNTc3IoKSAmJiB0aGlzLl90YWJJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKGAke3RoaXMuX3RhYkluZGV4fWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKHRoaXMuX3RhYkluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoYCR7dGhpcy5fdGFiSW5kZXh9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBUYWJJbmRleEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8VGFiSW5kZXhJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciwgTXRlRWxlbWVudCwgU3R5bGVNYXAgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBzZWxlY3RvckZhY3RvcnkgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXRlRWxlbWVudFBhcnRzIHtcbiAgLyoqIFRoZSBob3N0IGVsZW1lbnQgXCJwYXJ0XCIuIE92ZXJyaWRlcyB0aGUgYHNlYCBwcm9wZXJ0eSBvZiB0aGlzIGVsZW1lbnQgKi9cbiAgaG9zdD86IFN0eWxlTWFwO1xufVxuXG5leHBvcnQgdHlwZSBTdHlsZVBhcnRzTWFwPFQgPSBzdHJpbmcgfCBudW1iZXI+ID0ge1xuICBbbmFtZTogc3RyaW5nXTogU3R5bGVNYXA8VD47XG59O1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdHlsZVBhcnRzSW50ZXJmYWNlPFN0eWxlUGFydHM+IHtcbiAgLyoqXG4gICAqIFN0eWxlIG1hcHBpbmdzIHRoYXQgYXJlIGFwcGxpZWQgdG8gZWFjaCBjc3MgcGFydCBieSBuYW1lLiBTZXQgdGhlXG4gICAqIHByb3BlcnR5IGBob3N0YCB0byBhcHBseSBhIGBTdHlsZUluZm9gIG9iamVjdCB0byB0aGUgZWxlbWVudCBob3N0IGl0c2VsZi5cbiAgICovXG4gIHNwPzogU3R5bGVQYXJ0cztcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlUGFydHNNaXhpbiA9IDxTdHlsZVBhcnRzLCBUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgU3R5bGVQYXJ0c0VsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBTdHlsZSBtYXBwaW5ncyB0aGF0IGFyZSBhcHBsaWVkIHRvIGVhY2ggY3NzIHBhcnQgYnkgbmFtZS4gU2V0IHRoZVxuICAgICAqIHByb3BlcnR5IGBob3N0YCB0byBhcHBseSBhIGBTdHlsZUluZm9gIG9iamVjdCB0byB0aGUgZWxlbWVudCBob3N0IGl0c2VsZi5cbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIHJlZmxlY3Q6IHRydWUgfSkgc3A6IFN0eWxlUGFydHM7XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKSB7XG4gICAgICBzdXBlci51cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpO1xuXG4gICAgICBpZiAoY2hhbmdlZFByb3BzLmhhcygnc3AnKSkge1xuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnNwID8/ICh7fSBhcyBTdHlsZVBhcnRzKSkuZm9yRWFjaCgoW3BhcnQsIHN0eWxlTWFwXSkgPT4ge1xuICAgICAgICAgIC8vIERvdWJsZSB0aGUgYDpob3N0YCBzZWxlY3RvciB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSBiZXlvbmQgbW9zdCBjb21wb25lbnQgbGV2ZWwgc3R5bGVzIGJ5IGRlZmF1bHRcbiAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9yRmFjdG9yeShcbiAgICAgICAgICAgIHBhcnQgPT09ICdob3N0J1xuICAgICAgICAgICAgICA/ICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnXG4gICAgICAgICAgICAgIDogYDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDo6cGFydCgke3BhcnR9KWBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuc2V0SW5zdGFuY2VTdHlsZShgc3AtJHtwYXJ0fWAsIHNlbGVjdG9yLCBzdHlsZU1hcCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBTdHlsZVBhcnRzRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxTdHlsZVBhcnRzSW50ZXJmYWNlPFN0eWxlUGFydHM+PiAmIFQ7XG59O1xuIiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZX0jYW5jaG9ye2luc2V0OjA7cG9zaXRpb246YWJzb2x1dGV9YDsiLCAiaW1wb3J0IHsgcHJvcGVydHksIHN0YXRlIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtcbiAgQ2xpY2tPdXRzaWRlQ29udHJvbGxlcixcbiAgQ29uc3RydWN0b3IsXG4gIEV2ZW50RW1pdHRlcixcbiAgRm9jdXNUcmFwQ29udHJvbGxlcixcbiAgTXRlRWxlbWVudCxcbiAgUG9ydGFsQWRhcHRlcixcbiAgUG9ydGFsQ29udHJvbGxlcixcbiAgZGVmYXVsdFBvcnRhbEFkYXB0ZXIsXG4gIGV2ZW50RW1pdHRlcixcbiAgaXNTc3IsXG59IGZyb20gJy4uJztcbmltcG9ydCB7IFByb3BlcnR5VmFsdWVNYXAgfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPdmVybGF5SW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIG92ZXJsYXkgc3RhdGUgb24gdGhlIG92ZXJsYXkgbWl4aW4uIEJ5IGRlZmF1bHQgYWxsIG9wdGlvbnMgYXJlIHNldCB0byB0cnVlIGluaXRpYWxseS5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIHNldE92ZXJsYXlPcHRpb25zKG9wdGlvbnM6IHtcbiAgICB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZT86IGJvb2xlYW47XG4gICAgd2l0aENsb3NlT25Fc2NhcGU/OiBib29sZWFuO1xuICAgIHdpdGhGb2N1c1RyYXA/OiBib29sZWFuO1xuICAgIHdpdGhQb3J0YWw/OiBib29sZWFuO1xuICAgIHdpdGhEaW1CYWNrZHJvcD86IGJvb2xlYW47XG4gICAgd2l0aEluZXJ0QmFja2Ryb3A/OiBib29sZWFuO1xuICAgIHdpdGhTY3JvbGxMb2NrPzogYm9vbGVhbjtcbiAgICBhbmltYXRpb25EdXJhdGlvbj86IG51bWJlcjtcbiAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbj86IHN0cmluZztcbiAgICByZXR1cm5Ub09yaWdpbk9uQ2xvc2U/OiBib29sZWFuO1xuICAgIGZvY3VzVHJhcFRhcmdldD86IEVsZW1lbnQ7XG4gIH0pOiB1bmtub3duO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgb3ZlcmxheSBzaG91bGQgb3Blbi4gQ2FuIGFkZCBhIGxpc3RlbmVyIGZvciBvdXRzaWRlIGNsaWNrcywgcG9ydGFsIGFuIGVsZW1lbnQsXG4gICAqIGFuZCBwcmV2ZW50IHRoZSBib2R5IGZyb20gc2Nyb2xsaW5nIHVwb24gb3Blbi5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIGhhbmRsZU92ZXJsYXlPcGVuKG9wdGlvbnM/OiB7XG4gICAgY2xpY2tPdXRzaWRlRWxlbWVudD86IEhUTUxFbGVtZW50O1xuICAgIHdpbGxPcGVuPzogKCkgPT4gdm9pZDtcbiAgfSk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gY2FsbCBhZnRlciB0aGUgb3ZlcmxheSBoYXMgYmVlbiBvcHRpb25hbGx5IHBvcnRhbGVkIGFuZC9vciBhbGwgYW5pbWF0aW9ucyBoYXZlIGZpbmlzaGVkLlxuICAgKi9cbiAgaGFuZGxlT3ZlcmxheU9wZW5FbmQoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIG92ZXJsYXkgZWxlbWVudCBzaG91bGQgY2xvc2UuIENhbiBzdG9wIGxpc3RlbmluZyBmb3Igb3V0c2lkZSBjbGlja3MsIHJlbGVhc2UgYSxcbiAgICogZm9jdXMgdHJhcCwgYW5kIGFsbG93IHRoZSBib2R5IGVsZW1lbnQgdG8gc2Nyb2xsIGFnYWluLlxuICAgKi9cbiAgaGFuZGxlT3ZlcmxheUNsb3NlKCk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBvdmVybGF5IGVsZW1lbnQgaGFzIGZpbmlzaGVkIGNsb3NpbmcgYW5kL29yIGFsbCBhbmltYXRpb25zIGhhdmUgY29tcGxldGVkLiBDYW5cbiAgICogcmVtb3ZlIGFuIGVsZW1lbnQgZnJvbSB0aGUgcG9ydGFsLlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgaGFuZGxlT3ZlcmxheUNsb3NlRW5kKG9wdGlvbnM/OiB7IHJlbW92ZUZyb21FbGVtZW50PzogSFRNTEVsZW1lbnQgfSk6IFByb21pc2U8dm9pZD47XG5cbiAgb3BlbigpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIGNsb3NlKCk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIFRoZSB0YWIgaW5kZXggZm9yIHRoaXMgZWxlbWVudFxuICAgKi9cbiAgdGFiaW5kZXg6IG51bWJlcjtcblxuICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgb3BlbmVkICovXG4gIF9vbk9wZW46IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAvKiogRW1pdHRlZCBhZnRlciB0aGlzIG92ZXJsYXkgaGFzIGZpbmlzaGVkIG9wZW5pbmcgKi9cbiAgX29uT3BlbkVuZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBjbG9zaW5nICovXG4gIF9vbkNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaGFzIGZpbmlzaGVkIGNsb3NpbmcgKi9cbiAgX29uQ2xvc2VFbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAvKiogQGlnbm9yZSAqL1xuICBwb3J0YWxBZGFwdGVyOiBQb3J0YWxBZGFwdGVyO1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFRoZSBvcGVuZWQgc3RhdGUgb2YgdGhlIG92ZXJsYXkgcmVnYXJkbGVzcyBvZiBhbmltYXRpb25zXG4gICAqL1xuICBvcGVuZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogSW5kaWNhdGVzIHRoZSBvdmVybGF5IGhhcyBiZWVuIHBvcnRhbGVkIGFuZCByZWFkeSB0byBhbmltYXRlXG4gICAqL1xuICByZWFkeUZvckFuaW1hdGlvbjogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBJbmRpY2F0ZXMgdGhlIG92ZXJsYXkgaGFzIGJlZW4gZnVsbHkgYW5pbWF0ZWQgb3BlblxuICAgKi9cbiAgb3BlbmVkRnVsbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE92ZXJsYXlNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgT3ZlcmxheUVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKiogVGhlIHRhYiBpbmRleCBvZiB0aGlzIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6ICd0YWJpbmRleCcsIHR5cGU6IE51bWJlciB9KSB0YWJpbmRleCA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogQWRhcHRlciBmb3IgcG9ydGFsIERPTSBvcGVyYXRpb24gdGhhdCBjYW4gYmUgc3VwcGxlbWVudGVkIGZvciBleHRlcm5hbC1mcmFtZXdvcmsgaW50ZWdyYXRpb25zLlxuICAgICAqIE5vdGFibHktbGV2ZXJhZ2VkIGJ5IG92ZXJsYXlzIGluIG91ciBnZW5lcmF0ZWQgcmVhY3Qgd3JhcHBlcnMuXG4gICAgICpcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgQHByb3BlcnR5KCkgcG9ydGFsQWRhcHRlcjogUG9ydGFsQWRhcHRlciA9IGRlZmF1bHRQb3J0YWxBZGFwdGVyO1xuXG4gICAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaXMgaW5pdGlhbGx5IG9wZW5lZCAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25PcGVuOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogRW1pdHRlZCBhZnRlciB0aGlzIG92ZXJsYXkgaGFzIGZpbmlzaGVkIG9wZW5pbmcgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uT3BlbkVuZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaXMgaW5pdGlhbGx5IGNsb3NlZCAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25DbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaGFzIGZpbmlzaGVkIGNsb3NpbmcgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uQ2xvc2VFbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IGVsZW1lbnQgc2hvdWxkIHVzZSBhIGZvY3VzIHRyYXAgb3Igbm90ICovXG4gICAgcHJpdmF0ZSBfd2l0aEZvY3VzVHJhcCA9IHRydWU7XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBlbGVtZW50IHNob3VsZCBjbG9zZSB3aGVuIGEgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgZWxlbWVudCAqL1xuICAgIHByaXZhdGUgX2Nsb3NlT25DbGlja091dHNpZGUgPSB0cnVlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGNsb3NlIHdoZW4gdGhlIGVzY2FwZSBidXR0b24gaXMgcHJlc3NlZCAqL1xuICAgIHByaXZhdGUgX2Nsb3NlT25Fc2NhcGUgPSB0cnVlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgc2hvdWxkIHVzZSBhIHBvcnRhbCBvciBub3QgKi9cbiAgICBwcml2YXRlIF93aXRoUG9ydGFsID0gdHJ1ZTtcblxuICAgIC8qKiBXZXRoZXIgdGhlIHVzZXIgc2hvdWxkIGJlIGFibGUgdG8gY2xpY2sgYmVoaW5kIHRoZSBiYWNrZHJvcCBvciBub3QgKi9cbiAgICBwcml2YXRlIF93aXRoSW5lcnRCYWNrZHJvcCA9IGZhbHNlO1xuXG4gICAgLyoqIFdldGhlciB0aGUgb3ZlcmxheSdzIGJhY2tkcm9wIHNob3VsZCByZW5kZXIgZGltbWVkICovXG4gICAgcHJpdmF0ZSBfd2l0aERpbUJhY2tkcm9wID0gZmFsc2U7XG5cbiAgICAvKiogV2V0aGVyIG9yIG5vdCB0aGUgZWxlbWVudCBzaG91bGQgYmUgcmUtYXBwZW5kZWQgdG8gaXQncyBvcmlnaW4gcGFyZW50IGVsZW1lbnQgb24gY2xvc2UgX2lmXyBwb3J0YWxlZC4gKi9cbiAgICBwcml2YXRlIF9yZXR1cm5Ub09yaWdpbk9uQ2xvc2UgPSBmYWxzZTtcblxuICAgIC8qKiBPcHRpb25hbCBiYWNrZHJvcCB0aW1pbmcuIEltcG9ydGFudCBwYXJ0aWN1bGFybHkgZm9yIHNtb290aCBjbG9zZXMgd2l0aCBhIHZpc2libGUgYmFja2Ryb3AgKi9cbiAgICBwcml2YXRlIF9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbj86IHN0cmluZztcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IHNob3VsZCBwcmV2ZW50IHNjcm9sbGluZyBvbiB0aGUgYm9keSAqL1xuICAgIHByaXZhdGUgX3dpdGhTY3JvbGxMb2NrID0gdHJ1ZTtcblxuICAgIHByb3RlY3RlZCBmb2N1c1RyYXBDb250cm9sbGVyID0gbmV3IEZvY3VzVHJhcENvbnRyb2xsZXIodGhpcyk7XG5cbiAgICBwcm90ZWN0ZWQgY2xpY2tPdXRzaWRlQ29udHJvbGxlciA9IG5ldyBDbGlja091dHNpZGVDb250cm9sbGVyKHRoaXMsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fd2l0aFBvcnRhbCkge1xuICAgICAgICB0aGlzLmhhbmRsZUNsb3NlT25DbGlja091dHNpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHByb3RlY3RlZCBwb3J0YWxDb250cm9sbGVyID0gbmV3IFBvcnRhbENvbnRyb2xsZXIodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCBwYXJlbnQgZWxlbWVudFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0aWFsUGFyZW50OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQgPSB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50IHRvIGRldGVjdCBjbGlja3Mgb3V0c2lkZSBvZiB0byBjbG9zZSB0aGUgb3ZlcmxheSBlbGVtZW50LlxuICAgICAqL1xuICAgIHByaXZhdGUgY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcblxuICAgIHByaXZhdGUgX29yaWdpblBhcmVudD86IEVsZW1lbnQgfCBIVE1MRWxlbWVudDtcblxuICAgIHByaXZhdGUgX2ZvY3VzVHJhcFRhcmdldD86IEVsZW1lbnQgfCBIVE1MRWxlbWVudCA9IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogVGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgb3ZlcmxheSByZWdhcmRsZXNzIG9mIGFuaW1hdGlvbnNcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIG9wZW5lZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqIEluZGljYXRlcyB0aGUgb3ZlcmxheSBoYXMgYmVlbiBwb3J0YWxlZCBhbmQgcmVhZHkgdG8gYW5pbWF0ZVxuICAgICAqL1xuICAgIEBzdGF0ZSgpXG4gICAgc2V0IHJlYWR5Rm9yQW5pbWF0aW9uKHJlYWR5Rm9yQW5pbWF0aW9uOiBib29sZWFuKSB7XG4gICAgICB0aGlzLl9yZWFkeUZvckFuaW1hdGlvbiA9IHJlYWR5Rm9yQW5pbWF0aW9uO1xuICAgIH1cbiAgICBnZXQgcmVhZHlGb3JBbmltYXRpb24oKSB7XG4gICAgICAvLyBEdXJpbmcgU1NSIHJldHVybiB0cnVlIGluIGNhc2Ugc29tZXRoaW5nIG5lZWRzIHRvIGJlIG9wZW5lZCBpbml0aWFsbHkuXG4gICAgICByZXR1cm4gaXNTc3IoKSA/IHRydWUgOiB0aGlzLl9yZWFkeUZvckFuaW1hdGlvbjtcbiAgICB9XG4gICAgcHJpdmF0ZSBfcmVhZHlGb3JBbmltYXRpb24gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBUaGUgb3BlbmVkIHN0YXRlIG9mIHRoZSBvdmVybGF5IHJlZ2FyZGxlc3Mgb2YgYW5pbWF0aW9ucy4gVGhpcyBpcyByZWZsZWN0ZWQgYW5kIHVzZWQgYnlcbiAgICAgKiBzb21lIG92ZXJsYXlzIHRvIHJlc3RyaWN0IHRoZWlyIHNpemUgd2hpbGUgaGlkZGVuLiAoc2luY2UgZGlzcGxheTogbm9uZSBicmVha3MgYW5pbWF0aW9ucylcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIG9wZW5lZEZ1bGwgPSBmYWxzZTtcblxuICAgIHNldE92ZXJsYXlPcHRpb25zKG9wdGlvbnM6IHtcbiAgICAgIHdpdGhDbG9zZU9uQ2xpY2tPdXRzaWRlPzogYm9vbGVhbjtcbiAgICAgIHdpdGhDbG9zZU9uRXNjYXBlPzogYm9vbGVhbjtcbiAgICAgIHdpdGhGb2N1c1RyYXA/OiBib29sZWFuO1xuICAgICAgd2l0aFBvcnRhbD86IGJvb2xlYW47XG4gICAgICB3aXRoSW5lcnRCYWNrZHJvcD86IGJvb2xlYW47XG4gICAgICB3aXRoRGltQmFja2Ryb3A/OiBib29sZWFuO1xuICAgICAgd2l0aFNjcm9sbExvY2s/OiBib29sZWFuO1xuICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG4gICAgICByZXR1cm5Ub09yaWdpbk9uQ2xvc2U/OiBib29sZWFuO1xuICAgICAgZm9jdXNUcmFwVGFyZ2V0PzogRWxlbWVudDtcbiAgICB9KSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHdpdGhGb2N1c1RyYXAsXG4gICAgICAgIHdpdGhDbG9zZU9uQ2xpY2tPdXRzaWRlLFxuICAgICAgICB3aXRoQ2xvc2VPbkVzY2FwZSxcbiAgICAgICAgd2l0aFBvcnRhbCxcbiAgICAgICAgd2l0aFNjcm9sbExvY2ssXG4gICAgICAgIHdpdGhJbmVydEJhY2tkcm9wLFxuICAgICAgICB3aXRoRGltQmFja2Ryb3AsXG4gICAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICByZXR1cm5Ub09yaWdpbk9uQ2xvc2UsXG4gICAgICAgIGZvY3VzVHJhcFRhcmdldCxcbiAgICAgIH0gPSBvcHRpb25zID8/IHt9O1xuXG4gICAgICB0aGlzLl93aXRoRm9jdXNUcmFwID0gd2l0aEZvY3VzVHJhcCA/PyB0aGlzLl93aXRoRm9jdXNUcmFwO1xuICAgICAgdGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZSA9IHdpdGhDbG9zZU9uQ2xpY2tPdXRzaWRlID8/IHRoaXMuX2Nsb3NlT25DbGlja091dHNpZGU7XG4gICAgICB0aGlzLl93aXRoU2Nyb2xsTG9jayA9IHdpdGhTY3JvbGxMb2NrID8/IHRoaXMuX3dpdGhTY3JvbGxMb2NrO1xuICAgICAgdGhpcy5fd2l0aFBvcnRhbCA9IHdpdGhQb3J0YWwgPz8gdGhpcy5fd2l0aFBvcnRhbDtcbiAgICAgIHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wID1cbiAgICAgICAgd2l0aEluZXJ0QmFja2Ryb3AgPz8gIXRoaXMuX3dpdGhGb2N1c1RyYXAgPz8gdGhpcy5fd2l0aEluZXJ0QmFja2Ryb3A7XG4gICAgICB0aGlzLl93aXRoRGltQmFja2Ryb3AgPSB3aXRoRGltQmFja2Ryb3AgPz8gdGhpcy5fd2l0aERpbUJhY2tkcm9wO1xuICAgICAgdGhpcy5fYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPVxuICAgICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA/PyB0aGlzLl9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgIHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZSA9IHJldHVyblRvT3JpZ2luT25DbG9zZSA/PyB0aGlzLl9yZXR1cm5Ub09yaWdpbk9uQ2xvc2U7XG4gICAgICB0aGlzLl9mb2N1c1RyYXBUYXJnZXQgPSBmb2N1c1RyYXBUYXJnZXQgPz8gdGhpcy5fZm9jdXNUcmFwVGFyZ2V0O1xuXG4gICAgICBpZiAod2l0aENsb3NlT25Fc2NhcGUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9jbG9zZU9uRXNjYXBlICE9PSB3aXRoQ2xvc2VPbkVzY2FwZSkge1xuICAgICAgICBpZiAod2l0aENsb3NlT25Fc2NhcGUgPT09IHRydWUpIHtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Nsb3NlT25Fc2NhcGUgPSB3aXRoQ2xvc2VPbkVzY2FwZSA/PyB0aGlzLl9jbG9zZU9uRXNjYXBlO1xuICAgICAgfVxuXG4gICAgICBpZiAod2l0aEZvY3VzVHJhcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy50YWJpbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aXRoRm9jdXNUcmFwID09PSB0cnVlICYmIHRoaXMudGFiaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAtMTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVPdmVybGF5KCk7XG4gICAgfVxuXG4gICAgaGFuZGxlT3ZlcmxheU9wZW4ob3B0aW9ucz86IHtcbiAgICAgIGNsaWNrT3V0c2lkZUVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcbiAgICAgIHdpbGxPcGVuPzogKCkgPT4gdm9pZDtcbiAgICB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBJZ25vcmUgaWYgYWxyZWFkeSBvcGVuXG4gICAgICBpZiAodGhpcy5vcGVuZWQgfHwgdGhpcy5vcGVuZWRGdWxsKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHsgY2xpY2tPdXRzaWRlRWxlbWVudCwgd2lsbE9wZW4gfSA9IG9wdGlvbnMgPz8ge307XG4gICAgICB3aWxsT3Blbj8uKCk7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCA9IGNsaWNrT3V0c2lkZUVsZW1lbnQgfHwgdGhpcztcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmxpc3RlbkZvckNsaWNrc091dHNpZGVPZih0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50KTtcbiAgICAgICAgaWYgKHRoaXMuX3dpdGhQb3J0YWwpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXJcbiAgICAgICAgICAgIC5hcHBlbmRUb1N0YWNrKHRoaXMsIHtcbiAgICAgICAgICAgICAgd2l0aERpbUJhY2tkcm9wOiB0aGlzLl93aXRoRGltQmFja2Ryb3AsXG4gICAgICAgICAgICAgIHdpdGhJbmVydEJhY2tkcm9wOiB0aGlzLl93aXRoSW5lcnRCYWNrZHJvcCxcbiAgICAgICAgICAgICAgd2l0aFNjcm9sbExvY2s6IHRoaXMuX3dpdGhTY3JvbGxMb2NrLFxuICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcjogdGhpcy5oYW5kbGVDbG9zZU9uQ2xpY2tPdXRzaWRlLFxuICAgICAgICAgICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbjogdGhpcy5fYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICAgIHBvcnRhbEFkYXB0ZXI6IHRoaXMucG9ydGFsQWRhcHRlcixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIFdhaXQgZm9yIGFwcGVuZCB0byBjb21wbGV0ZSBiZWZvcmUgYW5pbWF0aW5nXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZHlGb3JBbmltYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIEFmdGVyIGFuaW1hdGlvbiBiZWdpbnMgcmVzb2x2ZVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9vbk9wZW4uZW1pdChudWxsLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9LCAyMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLl9vcmlnaW5QYXJlbnQgJiZcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpICYmXG4gICAgICAgICAgICB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSAhPT0gdGhpcy5fb3JpZ2luUGFyZW50XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgdGhpcy5fb3JpZ2luUGFyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gV2FpdCBmb3IgYXBwZW5kIHRvIGNvbXBsZXRlIGJlZm9yZSBhbmltYXRpbmdcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlGb3JBbmltYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgLy8gQWZ0ZXIgYW5pbWF0aW9uIGJlZ2lucyByZXNvbHZlXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl9vbk9wZW4uZW1pdChudWxsLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCAyMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZU92ZXJsYXlPcGVuRW5kKCkge1xuICAgICAgLy8gQ2FuY2VsIGlmIGNsb3NlZCBiZWZvcmUgb3BlbiBlbmRlZFxuICAgICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZEZ1bGwgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuX3dpdGhGb2N1c1RyYXApIHtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLnRyYXBGb2N1cyh0aGlzLl9mb2N1c1RyYXBUYXJnZXQsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fb25PcGVuRW5kLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVPdmVybGF5Q2xvc2UoKSB7XG4gICAgICAvLyBJZ25vcmUgaWYgYWxyZWFkeSBjbG9zZWRcbiAgICAgIGlmICghdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX29uQ2xvc2UuZW1pdChudWxsLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuc3RvcExpc3RlbmluZygpO1xuICAgICAgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLnJlbGVhc2VGb2N1cyh0cnVlKTtcbiAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5oaWRlQmFja2Ryb3AoKTtcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVPdmVybGF5Q2xvc2VFbmQob3B0aW9ucz86IHsgcmVtb3ZlRnJvbUVsZW1lbnQ/OiBIVE1MRWxlbWVudCB9KSB7XG4gICAgICAvLyBDYW5jZWwgaWYgb3BlbmVkIGJlZm9yZSBjbG9zZSBlbmRlZFxuICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbmVkRnVsbCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWFkeUZvckFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnJlbW92ZUZyb21TdGFjayhvcHRpb25zPy5yZW1vdmVGcm9tRWxlbWVudCB8fCB0aGlzKTtcbiAgICAgIGlmICh0aGlzLl9yZXR1cm5Ub09yaWdpbk9uQ2xvc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuX29yaWdpblBhcmVudCAmJiB0aGlzLl9vcmlnaW5QYXJlbnQgIT09IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpKSB7XG4gICAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIHRoaXMuX29yaWdpblBhcmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX29uQ2xvc2VFbmQuZW1pdChudWxsLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlT3ZlcmxheUtleURvd24oZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudEVsZW1lbnQ/Lmhhc0F0dHJpYnV0ZSgnZGF0YS1vdmVybGF5LXdyYXBwZXInKVxuICAgICAgICA/IHRoaXMucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudFxuICAgICAgICA6IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwYXJlbnQgZWxlbWVudCB0aGlzIG92ZXJsYXkgd2lsbCBiZSByZWF0dGFjaGVkIHRvIGVpdGhlcjpcbiAgICAgKiAtIFdoZW4gY29uZmlndXJlZCB0byBkbyBzbyBvbiBjbG9zZVxuICAgICAqIC0gV2hlbiBcInBvcnRhbGluZ1wiIGlzIGRpc2FibGVkXG4gICAgICovXG4gICAgc2V0T3JpZ2luUGFyZW50KG5ld09yaWdpbjogRWxlbWVudCkge1xuICAgICAgY29uc3QgY3VycmVudFBhcmVudEVsZW1lbnQgPSB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKTtcbiAgICAgIGlmIChjdXJyZW50UGFyZW50RWxlbWVudCA9PT0gdGhpcy5fb3JpZ2luUGFyZW50KSB7XG4gICAgICAgIHRoaXMucG9ydGFsQWRhcHRlcih0aGlzLCBuZXdPcmlnaW4pO1xuICAgICAgfVxuICAgICAgdGhpcy5fb3JpZ2luUGFyZW50ID0gbmV3T3JpZ2luO1xuICAgIH1cblxuICAgIC8qKiBVcGRhdGVzIHZhcmlvdXMgYmVoYXZpb3JzIHRvIGFwcGx5IHRoZSBsYXRlc3Qgb3ZlcmxheSBvcHRpb25zICovXG4gICAgdXBkYXRlT3ZlcmxheSgpIHtcbiAgICAgIC8vIFVwZGF0ZSBiYWNrZHJvcCBpbmVydG5lc3NcbiAgICAgIGlmICh0aGlzLl93aXRoSW5lcnRCYWNrZHJvcCkge1xuICAgICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIuc2V0QmFja2Ryb3BJbmVydG5lc3ModHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIuc2V0QmFja2Ryb3BJbmVydG5lc3MoZmFsc2UpO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIGNsaWNrIG91dHNpZGUgY29udHJvbGxlclxuICAgICAgaWYgKHRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUgJiYgIXRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5pc0xpc3RlbmluZygpKSB7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5saXN0ZW5Gb3JDbGlja3NPdXRzaWRlT2YodGhpcyk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlICYmIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5pc0xpc3RlbmluZygpKSB7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5zdG9wTGlzdGVuaW5nKCk7XG4gICAgICB9XG4gICAgICAvLyBVcGRhdGUgZm9jdXMgdHJhcCBjb250cm9sbGVyXG4gICAgICBpZiAodGhpcy5fd2l0aEZvY3VzVHJhcCAmJiB0aGlzLm9wZW5lZCAmJiAhdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLmlzVHJhcHBpbmdGb2N1cygpKSB7XG4gICAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci50cmFwRm9jdXModGhpcy5fZm9jdXNUcmFwVGFyZ2V0LCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX3dpdGhGb2N1c1RyYXAgJiYgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLmlzVHJhcHBpbmdGb2N1cygpKSB7XG4gICAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5yZWxlYXNlRm9jdXModHJ1ZSk7XG4gICAgICB9XG4gICAgICAvLyBVcGRhdGUgYmFja2Ryb3AgY29udHJvbGxlclxuICAgICAgaWYgKHRoaXMuX3dpdGhEaW1CYWNrZHJvcCkge1xuICAgICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIuc2hvd0JhY2tkcm9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIuaGlkZUJhY2tkcm9wKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlKSB7XG4gICAgICAgIGlmICh0aGlzLl9vcmlnaW5QYXJlbnQgJiYgdGhpcy5fb3JpZ2luUGFyZW50ICE9PSB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSkge1xuICAgICAgICAgIHRoaXMucG9ydGFsQWRhcHRlcih0aGlzLCB0aGlzLl9vcmlnaW5QYXJlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgb3BlbigpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignT3BlbiBtZXRob2Qgbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2xvc2UoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nsb3NlIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnkpIHtcbiAgICAgIHN1cGVyKGFyZ3MpO1xuICAgICAgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93biA9IHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKFxuICAgICAgY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVNYXA8YW55PiB8IE1hcDxQcm9wZXJ0eUtleSwgdW5rbm93bj5cbiAgICApOiB2b2lkIHtcbiAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICB0aGlzLl9vcmlnaW5QYXJlbnQgPSB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUNsb3NlT25DbGlja091dHNpZGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgICAgaWYgKHRoaXMuX2Nsb3NlT25Fc2NhcGUpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24pO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyIGluIHRoZSBldmVudCB0aGUgb3ZlcmxheSBlbGVtZW50IHdhcyBwb3J0YWxlZC5cbiAgICAgIGlmICh0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5saXN0ZW5Gb3JDbGlja3NPdXRzaWRlT2YodGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLnJlbGVhc2VGb2N1cyh0cnVlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT3ZlcmxheUVsZW1lbnQgYXMgQ29uc3RydWN0b3I8T3ZlcmxheUludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7ZGlzcGxheTpibG9jaztwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMH1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1mdWxsLXdpZHRoOm1heC1jb250ZW50Oy0tY29udHJvbC13aWR0aDp1bnNldDstLWNvbnRyb2wtbWluLXdpZHRoOjI0MHB4Oy0tY29udHJvbC1tYXgtd2lkdGg6dmFyKC0tY29udHJvbC13aWR0aCk7LS1jb250cm9sLW1hcmdpbi15OnZhcigtLW10ZS1zcGFjZS1zbSk7LS1jb250cm9sLW1hcmdpbi14OnZhcigtLW10ZS1zcGFjZS1zbSk7LS1jb250cm9sLWRlc2NyaXB0b3ItbWFyZ2luOnZhcigtLW10ZS1zcGFjZS1zbSk7LS1sYWJlbC13aWR0aDp2YXIoLS1jb250cm9sLXdpZHRoKTstLWxhYmVsLW1pbi13aWR0aDp2YXIoLS1jb250cm9sLW1pbi13aWR0aCk7LS1sYWJlbC1tYXgtd2lkdGg6dmFyKC0tY29udHJvbC1tYXgtd2lkdGgpOy0tbGFiZWwtbWFyZ2luLXk6dmFyKC0tbXRlLXNwYWNlLXhzKTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDp2YXIoLS1mdWxsLXdpZHRoKX0uZ3JpZC1jb250YWluZXJ7ZGlzcGxheTppbmxpbmUtZ3JpZDtncmlkLXRlbXBsYXRlLWFyZWFzOlwibGFiZWxcIiBcImNvbnRyb2xcIjtncmlkLXRlbXBsYXRlLXJvd3M6MWZyIG1pbm1heCgwLDEwMCUpO3dpZHRoOmluaGVyaXR9Omhvc3QoW3dpdGhGdWxsV2lkdGhdKXstLWZ1bGwtd2lkdGg6MTAwJTstLWNvbnRyb2wtd2lkdGg6MTAwJX06aG9zdChbd2l0aG91dE1hcmdpbl0pey0tY29udHJvbC1tYXJnaW4teTowcHh9Omhvc3QoW3dpdGhvdXRNYXJnaW5dKSAubGFiZWwtY29udGFpbmVyLmhhcy1jb250ZW50e21hcmdpbi1ib3R0b206dmFyKC0tY29udHJvbC1kZXNjcmlwdG9yLW1hcmdpbil9LmxhYmVsLWNvbnRhaW5lcntkaXNwbGF5Om5vbmU7Z3JpZC1hcmVhOmxhYmVsO21heC13aWR0aDp2YXIoLS1sYWJlbC1tYXgtd2lkdGgpO21pbi13aWR0aDp2YXIoLS1sYWJlbC1taW4td2lkdGgpO3dpZHRoOnZhcigtLWxhYmVsLXdpZHRoKX0ubGFiZWwtY29udGFpbmVyLmhhcy1jb250ZW50e2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDp2YXIoLS1sYWJlbC1tYXJnaW4teSl9LmxhYmVsLWNvbnRhaW5lcjpub3QoLmhhcy1jb250ZW50KXttYXJnaW46MCFpbXBvcnRhbnR9LmNvbnRleHR7Z3JpZC1hcmVhOmNvbnRleHR9LmRlc2NyaXB0aW9uLC5lcnJvciwuaGludCwubGFiZWx7ZGlzcGxheTpibG9ja30uZGVzY3JpcHRpb24gbXRlLWRlc2NyaXB0aW9uLC5kZXNjcmlwdGlvbiBtdGUtZGVzY3JpcHRpb24tdGV4dCwubGFiZWwgbXRlLWxhYmVsLC5sYWJlbCBtdGUtbGFiZWwtdGV4dCw6aG9zdCA6OnNsb3R0ZWQobXRlLWRlc2NyaXB0aW9uLXRleHRbc2xvdD1kZXNjcmlwdGlvbl0pLDpob3N0IDo6c2xvdHRlZChtdGUtZGVzY3JpcHRpb25bc2xvdD1kZXNjcmlwdGlvbl0pLDpob3N0IDo6c2xvdHRlZChtdGUtbGFiZWwtdGV4dFtzbG90PWxhYmVsXSksOmhvc3QgOjpzbG90dGVkKG10ZS1sYWJlbFtzbG90PWxhYmVsXSl7bWFyZ2luOjB9Omhvc3QoW2xhYmVsUG9zaXRpb249YmVmb3JlXSl7LS1sYWJlbC13aWR0aDptYXgtY29udGVudDstLWxhYmVsLW1pbi13aWR0aDptYXgtY29udGVudH06aG9zdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKSAuZ3JpZC1jb250YWluZXJ7Z3JpZC10ZW1wbGF0ZS1hcmVhczpcImxhYmVsIGNvbnRyb2xcIjtncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWlubWF4KGF1dG8sdmFyKC0tbGFiZWwtd2lkdGgpKSBtaW5tYXgoYXV0byx2YXIoLS1jb250cm9sLXdpZHRoKSl9Omhvc3QoW2xhYmVsUG9zaXRpb249YmVmb3JlXSkgLmxhYmVsLWNvbnRhaW5lcnttYXJnaW4tYm90dG9tOnZhcigtLWNvbnRyb2wtbWFyZ2luLXkpO21hcmdpbi1yaWdodDp2YXIoLS1jb250cm9sLW1hcmdpbi14KTttYXJnaW4tdG9wOmNhbGModmFyKC0tY29udHJvbC1tYXJnaW4teSkgKyB2YXIoLS1sYWJlbC1iZWZvcmUtb2Zmc2V0KSl9LmRlc2NyaXB0aW9uLC5lcnJvciwuaGludHttaW4td2lkdGg6MTAwJTt3aWR0aDotbW96LW1pbi1jb250ZW50O3dpZHRoOm1pbi1jb250ZW50fS5jb250cm9sLW91dGVyLWNvbnRhaW5lcntncmlkLWFyZWE6Y29udHJvbDttYXJnaW4tdG9wOnZhcigtLWNvbnRyb2wtbWFyZ2luLXkpO21heC13aWR0aDp2YXIoLS1jb250cm9sLW1heC13aWR0aCk7bWluLXdpZHRoOnZhcigtLWNvbnRyb2wtbWluLXdpZHRoKTt3aWR0aDp2YXIoLS1jb250cm9sLXdpZHRoKX06aG9zdCg6bm90KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pKSAuY29udHJvbC1vdXRlci1jb250YWluZXIuaGFzLWxhYmVsLWNvbnRlbnR7bWFyZ2luLXRvcDpjYWxjKHZhcigtLWNvbnRyb2wtbWFyZ2luLXkpLzIpfS5jb250cm9sLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21hcmdpbi1ib3R0b206dmFyKC0tY29udHJvbC1tYXJnaW4teSl9LmVycm9yLC5oaW50e2Rpc3BsYXk6bm9uZX0uZXJyb3IuaGFzLWNvbnRlbnQsLmhpbnQuaGFzLWNvbnRlbnR7ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOnZhcigtLWNvbnRyb2wtZGVzY3JpcHRvci1tYXJnaW4pfWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWZvcm0tZmllbGQtaW50ZXJuYWwtcGFkZGluZzp2YXIoLS1tdGUtc3BhY2Utc20pOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXA6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWZvcm0tZmllbGQtcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLW1kKTstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMik7LS1mb3JtLWZpZWxkLWJhY2tncm91bmQ6dmFyKC0tbXRlLXN1cmZhY2UtMik7LS1wcmVwZW5kLWJhY2tncm91bmQ6dmFyKC0tbXRlLWdyZXktMSk7LS1wcmVwZW5kLXBhZGRpbmcteDp2YXIoLS1tdGUtc3BhY2Utc20pOy0tcHJlcGVuZC1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKX06aG9zdChbcmFkaXVzPXNtXSl7LS1mb3JtLWZpZWxkLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14cyl9Omhvc3QoW3JhZGl1cz1sZ10pey0tZm9ybS1maWVsZC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteHhsKX06aG9zdChbc2l6ZT1zbV0pey0tcHJlcGVuZC1wYWRkaW5nLXg6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1wYWRkaW5nOmNhbGModmFyKC0tbXRlLXNwYWNlLXhzKSArIHZhcigtLW10ZS1zcGFjZS14eHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwOmNhbGModmFyKC0tbXRlLXNwYWNlLXhzKSArIHZhcigtLW10ZS1zcGFjZS14eHMpKX06aG9zdChbc2l6ZT1sZ10pey0tcHJlcGVuZC1wYWRkaW5nLXg6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXhzKSk7LS1mb3JtLWZpZWxkLWludGVybmFsLXBhZGRpbmc6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXhzKSk7LS1mb3JtLWZpZWxkLWludGVybmFsLWdhcDpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKX0uZm9ybS1maWVsZHthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZDp2YXIoLS1mb3JtLWZpZWxkLWJhY2tncm91bmQpO2JvcmRlcjoxcHggc29saWQgdmFyKC0tZm9ybS1maWVsZC1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7Z2FwOnZhcigtLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwKTtwb3NpdGlvbjpyZWxhdGl2ZX06aG9zdChbZGlzYWJsZWRdKSAuZm9ybS1maWVsZHtiYWNrZ3JvdW5kOnZhcigtLW10ZS1kaXNhYmxlZC0xKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLW10ZS1kaXNhYmxlZC0xKX0uYXBwZW5kLC5wcmVwZW5ke2FsaWduLWl0ZW1zOmNlbnRlcjthbGlnbi1zZWxmOnN0cmV0Y2g7YmFja2dyb3VuZDp2YXIoLS1wcmVwZW5kLWJhY2tncm91bmQpO2Rpc3BsYXk6bm9uZTtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6MCB2YXIoLS1wcmVwZW5kLXBhZGRpbmcteCl9LnByZXBlbmR7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCB2YXIoLS1wcmVwZW5kLWJvcmRlci1jb2xvcik7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyl9LmFwcGVuZHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkIHZhcigtLXByZXBlbmQtYm9yZGVyLWNvbG9yKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyl9LmFwcGVuZC5oYXMtY29udGVudCwucHJlcGVuZC5oYXMtY29udGVudHtkaXNwbGF5OmZsZXh9LnByZWZpeCwuc3VmZml4e2FsaWduLWl0ZW1zOmNlbnRlcjthbGlnbi1zZWxmOnN0cmV0Y2g7ZGlzcGxheTpmbGV4O2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUpO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnByZWZpeDpub3QoLmhhcy1wcmVwZW5kKXtwYWRkaW5nLWxlZnQ6dmFyKC0tcHJlcGVuZC1wYWRkaW5nLXgpfS5zdWZmaXg6bm90KC5oYXMtYXBwZW5kKXtwYWRkaW5nLXJpZ2h0OnZhcigtLXByZXBlbmQtcGFkZGluZy14KX0uZm9ybS1maWVsZC5mb2N1c2VkOm5vdCguZGlzYWJsZWQpOm5vdChbZGlzYWJsZWRdKTpub3QoOmRpc2FibGVkKTpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCByZ2IodmFyKC0tbXRlLWZvY3VzLXJnYikpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym90dG9tOi0xcHg7Ym94LXNoYWRvdzowIDAgMCAxcHggdmFyKC0tbXRlLWxpZ2h0KTtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jaztsZWZ0Oi0xcHg7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDotMXB4O3RvcDotMXB4O3otaW5kZXg6OX0uZm9ybS1maWVsZC5pbnZhbGlkey0tZm9ybS1maWVsZC1ib3JkZXItY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1iYXNlLXJnYikpfTpob3N0KFt3aXRob3V0Qm9yZGVyXSkgOmlzKC5mb3JtLWZpZWxkLC5wcmVwZW5kLC5hcHBlbmQpey0tZm9ybS1maWVsZC1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9YDsiLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBBY3RpdmVMaW5rT3B0aW9ucyxcbiAgQ29uc3RydWN0b3IsXG4gIE10ZUVsZW1lbnQsXG4gIE10ZUhpc3RvcnlBcGlTZXJ2aWNlLFxuICBVbnN1YnNjcmliZXIsXG4gIGlzTGlua0FjdGl2ZSxcbiAgb25VcGRhdGUsXG59IGZyb20gJy4uLyc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExpbmtJbnRlcmZhY2Uge1xuICBocmVmPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBdXRvQWN0aXZlTGlua0ludGVyZmFjZSB7XG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGxpbmsgaXMgdGhlIGFjdGl2ZSBwYWdlICovXG4gIGFjdGl2ZTogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciBvciBub3QgdGhpcyBsaW5rIHNob3VsZCBhdXRvbWF0aWNhbGx5IHRyeSB0byBkZXRlcm1pbmUgaWYgaXQgaXMgdGhlIGFjdGl2ZSBwYWdlICovXG4gIHdpdGhvdXRBdXRvQWN0aXZlOiBib29sZWFuO1xuXG4gIC8qKiBPcHRpb25zIHRvIHJlZmluZSBob3cgdGhpcyBsaW5rIHdpbGwgZGV0ZXJtaW5lIGlmIGl0IGlzIHRoZSBhY3RpdmUgcGFnZSAqL1xuICBhY3RpdmVMaW5rT3B0aW9ucz86IFBhcnRpYWw8QWN0aXZlTGlua09wdGlvbnM+O1xuXG4gIC8qKiBUaGUgaW50ZXJuYWwgYW5jaG9yIGVsZW1lbnQgZnJvbSB3aGljaCB0byBwdWxsIHRoZSBsb2NhdGlvbiBmb3IgY29tcGFyaXNvbiAqL1xuICBhbmNob3JFbGVtZW50PzogSFRNTEFuY2hvckVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBBdXRvQWN0aXZlTGlua01peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50ICYgTGlua0ludGVyZmFjZT4+KFxuICBzdXBlckNsYXNzOiBUXG4pID0+IHtcbiAgY2xhc3MgQXV0b0FjdGl2ZUxpbmtFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBhY3RpdmUgPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgd2l0aG91dEF1dG9BY3RpdmUgPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgcmVmbGVjdDogdHJ1ZSB9KSBhY3RpdmVMaW5rT3B0aW9ucz86IFBhcnRpYWw8QWN0aXZlTGlua09wdGlvbnM+O1xuXG4gICAgYW5jaG9yRWxlbWVudD86IEhUTUxBbmNob3JFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB1bnN1YjogVW5zdWJzY3JpYmVyO1xuXG4gICAgQG9uVXBkYXRlKCdhY3RpdmUnLCB7IHdhaXRVbnRpbEZpcnN0VXBkYXRlOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBoYW5kbGVBY3RpdmVMaW5rQ2hhbmdlKCkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudD8uc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAncGFnZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbmNob3JFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBvblVwZGF0ZShbJ2hyZWYnLCAnaXJlZicsICd3aXRoQXV0b0FjdGl2ZSddLCB7IHdhaXRVbnRpbEZpcnN0VXBkYXRlOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBoYW5kbGVBdXRvQWN0aXZlQ2hhbmdlKCkge1xuICAgICAgaWYgKHRoaXMuaHJlZiB8fCB0aGlzWydpcmVmJ10pIHtcbiAgICAgICAgaWYgKHRoaXMud2l0aG91dEF1dG9BY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFkZExpc3RlbmVyKCk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVVcmxDaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlQXV0b0FjdGl2ZUNoYW5nZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkTGlzdGVuZXIoKSB7XG4gICAgICBpZiAoIXRoaXMudW5zdWIpIHtcbiAgICAgICAgdGhpcy51bnN1YiA9IE10ZUhpc3RvcnlBcGlTZXJ2aWNlLnN0YXRlQ2hhbmdlcygpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVVcmxDaGFuZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgIHRoaXMudW5zdWI/LigpO1xuICAgICAgdGhpcy51bnN1YiA9IG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVVcmxDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGlzTGlua0FjdGl2ZShcbiAgICAgICAgdGhpcy5hbmNob3JFbGVtZW50Py5ocmVmLFxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgdGhpcy5hY3RpdmVMaW5rT3B0aW9uc1xuICAgICAgKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBBdXRvQWN0aXZlTGlua0VsZW1lbnQgYXMgQ29uc3RydWN0b3I8QXV0b0FjdGl2ZUxpbmtJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciwgTXRlRWxlbWVudCwgU2xvdENvbnRyb2xsZXIgfSBmcm9tICcuLic7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNsb3RPYnNlcnZlckludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBQcm9wIHVzZWQgdG8gZGVjbGFyZSB3aGljaCBzbG90cyBhcmUgYmVpbmcgdXNlZCBkdXJpbmcgU1NSIHRvIG1ha2UgdGhlbSB2aXNpYmxlIGluIGNlcnRhaW4gZWRnZS1jYXNlcy5cbiAgICovXG4gIHNzclNsb3RzOiBzdHJpbmc7XG5cbiAgc2xvdENvbnRyb2xsZXI6IFNsb3RDb250cm9sbGVyO1xuXG4gIGhhc1Nsb3Q6IChzbG90OiBzdHJpbmcsIG9yVmFsdWU/OiBhbnkpID0+IGJvb2xlYW47XG5cbiAgc3NyU2xvdENoZWNrOiAoc2xvdHM6IHN0cmluZykgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFNsb3RPYnNlcnZlck1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBTbG90T2JzZXJ2ZXJFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogUHJvcCB1c2VkIHRvIGRlY2xhcmUgd2hpY2ggc2xvdHMgYXJlIGJlaW5nIHVzZWQgZHVyaW5nIFNTUiB0byBtYWtlIHRoZW0gdmlzaWJsZSBpbiBjZXJ0YWluIGVkZ2UtY2FzZXMuXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KVxuICAgIHNldCBzc3JTbG90cyh2YWw6IHN0cmluZykge1xuICAgICAgbGV0IG9sZFZhbCA9IHRoaXMuX3NzclNsb3RzO1xuICAgICAgdGhpcy5fc3NyU2xvdHMgPSB2YWw7XG4gICAgICAvLyBQYXJzZSBhbmQgY2FjaGUgc3NyIHNsb3Qgc2V0XG4gICAgICBjb25zdCBzbG90cyA9ICh0aGlzLl9zc3JTbG90cyA/PyAnJylcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAubWFwKChzbG90KSA9PiBzbG90LnRyaW0oKSk7XG4gICAgICB0aGlzLl9zc3JTbG90U2V0ID0gbmV3IFNldDxzdHJpbmc+KHNsb3RzKTtcbiAgICAgIC8vIE5vcm1hbCB1cGRhdGVcbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnc3NyU2xvdHMnLCBvbGRWYWwpO1xuICAgIH1cbiAgICBnZXQgc3NyU2xvdHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3NyU2xvdHM7XG4gICAgfVxuICAgIHByaXZhdGUgX3NzclNsb3RzPzogc3RyaW5nO1xuXG4gICAgLyoqIEBpZ25vcmUgKi9cbiAgICBfc3NyU2xvdFNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgc2xvdENvbnRyb2xsZXIgPSBuZXcgU2xvdENvbnRyb2xsZXIodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHNsb3QgaGFzIGNvbnRlbnQsIG9yIGlmIGl0IHdhcyBzcGVjaWZpZWQgYXMgZXhpc3RpbmcgZHVyaW5nIFNTUi5cbiAgICAgKiBPbmNlIGNhbGxlZCwgdGhlIGNvbXBvbmVudCB3aWxsIG5vdyBhdXRvbWF0aWNhbGx5IHVwZGF0ZSBpZiB0aGUgY29udGVudHMgb2YgdGhpcyBzbG90IGNoYW5nZS5cbiAgICAgKi9cbiAgICBoYXNTbG90KHNsb3Q6IHN0cmluZywgb3JWYWx1ZT86IGFueSk6IGJvb2xlYW4ge1xuICAgICAgdGhpcy5zbG90Q29udHJvbGxlci51cGRhdGVPbkNoYW5nZShzbG90KTtcbiAgICAgIC8vIFRPRE8ocmVlY2UpOiByZWNvbnNpZGVyIHdoZW4gYSBzb2x1dGlvbiBleGlzdHMgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8xNDM0XG4gICAgICAvLyBXZSBoYXZlIHRvIGFzc3VtZSBhbGlnbm1lbnQgd2l0aCBzc3JTbG90Q2hlY2sgdW50aWwgdGhlIGZpcnN0IHVwZGF0ZSBoZXJlIG90aGVyd2lzZSBwYXJ0IG1pc21hdGNoZXMgY2FuIG9jY3VyXG4gICAgICBpZiAoIXRoaXMuX19maXJzdFVwZGF0ZWQpIHtcbiAgICAgICAgcmV0dXJuIG9yVmFsdWUgfHwgdGhpcy5zc3JTbG90Q2hlY2soc2xvdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb3JWYWx1ZSB8fCB0aGlzLnNsb3RDb250cm9sbGVyLmNoZWNrKHNsb3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBXaWxsIHJldHVybiB0cnVlIGlmIHRoZSByZXF1ZXN0ZWQgc2xvdCB3YXMgc3BlY2lmaWVkIGluIHRoZSBsaXN0IG9mIGBzc3Itc2xvdHNgLiAqL1xuICAgIHNzclNsb3RDaGVjayhzbG90OiBzdHJpbmcpIHtcbiAgICAgIGlmICh0aGlzLl9fZmlyc3RVcGRhdGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zc3JTbG90U2V0LmhhcyhzbG90KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFNsb3RPYnNlcnZlckVsZW1lbnQgYXMgQ29uc3RydWN0b3I8U2xvdE9ic2VydmVySW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IEZvcm1Db250cm9sTWl4aW4sIEZvcm1Db250cm9sSW50ZXJmYWNlIH0gZnJvbSAnQG9wZW4td2MvZm9ybS1jb250cm9sJztcbmltcG9ydCB7IHByb3BlcnR5LCBxdWVyeSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIENvbnN0cnVjdG9yLFxuICBEaXNhYmxlZE1peGluLFxuICBUYWJJbmRleE1peGluLFxuICBNdGVFbGVtZW50LFxuICBpbm5lcklucHV0VmFsaWRhdG9ycyxcbiAgVGFiSW5kZXhJbnRlcmZhY2UsXG4gIERpc2FibGVkSW50ZXJmYWNlLFxuICBvblVwZGF0ZSxcbiAgZXZlbnRFbWl0dGVyLFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJy4uJztcblxuLy8gUmVxdWlyZWQgcG9seWZpbGwgZm9yIG5vd1xuaW1wb3J0ICcuLi8uLi9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9pbmRleCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXRlQ2hlY2tib3hDaGFuZ2VEZXRhaWwge1xuICAvKiogVGhlIHZhbHVlIG9mIHRoZSBjb250cm9sIGNoYW5nZWQgKi9cbiAgdmFsdWU6IHN0cmluZztcblxuICAvKiogVGhlIG5hbWUgb2YgdGhlIGNvbnRyb2wgY2hhbmdlZCAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoZSBlbGVtZW50IGlzIGNoZWNrZWQgKi9cbiAgY2hlY2tlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGVja2JveEludGVyZmFjZSB7XG4gIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSBlbGVtZW50ICovXG4gIGxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKiBUaGUgZXJyb3IgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgZXJyb3I/OiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBoaW50IHRleHQgZm9yIHRoZSBlbGVtZW50ICovXG4gIGhpbnQ/OiBzdHJpbmc7XG5cbiAgLyoqIEFuIGFyaWEgbGFiZWwgdGhhdCB3aWxsIGJlIHByb3ZpZGVkIHRvIHRoZSBpbnB1dCBlbGVtZW50ICovXG4gIGFyaWFMYWJlbD86IHN0cmluZztcblxuICAvKiogVGhlIG5hbWUgZm9yIHRoZSBlbGVtZW50LiBVc2VkIHdoZW4gc3VibWl0dGluZyBhIGZvcm0gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudCAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSB2YWx1ZSBmb3IgdGhlIGVsZW1lbnQuIFVzZWQgYXMgdGhlIHZhbHVlIGZvciBhIGVsZW1lbnQgd2hlbiBzdWJtaXR0aW5nIGEgZm9ybSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50ICAqL1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbHRlcnMgdGhlIGJlaGF2aW9yIG9mIHRoaXMgY29udHJvbC4gV2hlbiBcImNvbnRyb2xsZWRcIiwgYSBjb250cm9scyB2YWx1ZSBpcyBkcml2ZW4gZXhwbGljaXRseSBieSBleHRlcm5hbCBzdGF0ZVxuICAgKiB2aWEgdGhlIGB2YWx1ZWAgcHJvcC4gQ2hhbmdlIGV2ZW50cyB3aWxsIGZpcmUgYnV0IHRoZSBjb250cm9sIHZhbHVlIHdpbGwgbm90IGNoYW5nZSB1bnRpbCBpdCBpcyBhbHRlcmVkIGRpcmVjdGx5LlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBjb250cm9sbGVkOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBiZSBjaGVja2VkIGJ5IGRlZmF1bHQuIFVzZWZ1bCBmb3Igd2hlbiByZXNldHRpbmcgZm9ybSBjb250cm9scyBvciB1c2luZyBhIHN0YXRlbGVzcyBjb21wb25lbnQgKi9cbiAgZGVmYXVsdENoZWNrZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgY2hlY2tlZCBvciBub3QgKi9cbiAgY2hlY2tlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgcmVhZG9ubHkgKi9cbiAgcmVhZG9ubHk6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHNlbGVjdGluZyB0aGUgZWxlbWVudCBpcyByZXF1aXJlZCBvciBub3QgKi9cbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFJlbmRlcnMgdGhlIHJlcXVpcmVkIGluZGljYXRvciBmb3IgdGhpcyBpbnB1dHMgbGFiZWwgd2l0aG91dCBlbmFibGluZyBuYXRpdmUgYHJlcXVpcmVkYCB2YWxpZGF0aW9uICovXG4gIHNob3dSZXF1aXJlZDogYm9vbGVhbjtcblxuICAvKiogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBpbnB1dCBibHVycyAgKi9cbiAgaGFuZGxlQmx1cigpOiB2b2lkO1xuXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGlucHV0IGlzIGZvY3VzZWQgb24gICovXG4gIGhhbmRsZUZvY3VzKCk6IHZvaWQ7XG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IGNoYW5nZXMgICovXG4gIGhhbmRsZUNoYW5nZSgpOiB2b2lkO1xuXG4gIC8qKiBBIHNldCBvZiBhdHRyaWJ1dGVzIHRvIGJlIGZvcndhcmRlZCB0byBhbiBlbGVtZW50IHdpdGhpbiByZW5kZXIgYW5kIHJlbW92ZWQgZnJvbSB0aGUgZWxlbWVudCAqL1xuICBpbmhlcml0ZWRBdHRyaWJ1dGVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xufVxuXG5leHBvcnQgY29uc3QgQ2hlY2tib3hNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgQ2hlY2tib3hFbGVtZW50IGV4dGVuZHMgVGFiSW5kZXhNaXhpbihGb3JtQ29udHJvbE1peGluKERpc2FibGVkTWl4aW4oc3VwZXJDbGFzcykpLCB7XG4gICAgaW5pdGlhbFRhYkluZGV4OiAwLFxuICB9KSB7XG4gICAgaW5oZXJpdGVkQXR0cmlidXRlczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gICAgLyoqIEBpZ25vcmUgKi9cbiAgICBzdGF0aWMgZm9ybUNvbnRyb2xWYWxpZGF0b3JzID0gaW5uZXJJbnB1dFZhbGlkYXRvcnM7XG5cbiAgICAvKiogVGhlIGxhYmVsIGZvciB0aGUgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSgpIGxhYmVsPzogc3RyaW5nO1xuXG4gICAgLyoqIFRoZSBlcnJvciB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSgpIGVycm9yPzogc3RyaW5nO1xuXG4gICAgLyoqIFRoZSBoaW50IHRleHQgZm9yIHRoZSBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KCkgaGludD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEFsdGVycyB0aGUgYmVoYXZpb3Igb2YgdGhpcyBjb250cm9sLiBXaGVuIFwiY29udHJvbGxlZFwiLCBhIGNvbnRyb2xzIHZhbHVlIGlzIGRyaXZlbiBleHBsaWNpdGx5IGJ5IGV4dGVybmFsIHN0YXRlXG4gICAgICogdmlhIHRoZSBgdmFsdWVgIHByb3AuIENoYW5nZSBldmVudHMgd2lsbCBmaXJlIGJ1dCB0aGUgY29udHJvbCB2YWx1ZSB3aWxsIG5vdCBjaGFuZ2UgdW50aWwgaXQgaXMgYWx0ZXJlZCBkaXJlY3RseS5cbiAgICAgKiBAZXhwZXJpbWVudGFsXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBjb250cm9sbGVkOiBib29sZWFuO1xuXG4gICAgLyoqIEFuIGFyaWEgbGFiZWwgdGhhdCB3aWxsIGJlIHByb3ZpZGVkIHRvIHRoZSBpbnB1dCBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiAnYXJpYS1sYWJlbCcsIHJlZmxlY3Q6IHRydWUgfSkgYXJpYUxhYmVsOiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIG5hbWUgZm9yIHRoZSBlbGVtZW50LiBVc2VkIHdoZW4gc3VibWl0dGluZyBhIGZvcm0gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbmFtZTogc3RyaW5nO1xuXG4gICAgLyoqIFRoZSB2YWx1ZSBmb3IgdGhlIGVsZW1lbnQuIFVzZWQgYXMgdGhlIHZhbHVlIGZvciBhIGVsZW1lbnQgd2hlbiBzdWJtaXR0aW5nIGEgZm9ybSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50ICAqL1xuICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgdmFsdWU/ID0gJ29uJztcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBiZSBjaGVja2VkIGJ5IGRlZmF1bHQuIFVzZWZ1bCBmb3Igd2hlbiByZXNldHRpbmcgZm9ybSBjb250cm9scyBvciB1c2luZyBhIHN0YXRlbGVzcyBjb21wb25lbnQgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGRlZmF1bHRDaGVja2VkID0gZmFsc2U7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBpcyBjaGVja2VkIG9yIG5vdCAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlYWRvbmx5ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSByZWFkb25seSA9IGZhbHNlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIHNlbGVjdGluZyB0aGUgZWxlbWVudCBpcyByZXF1aXJlZCBvciBub3QgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHJlcXVpcmVkID0gZmFsc2U7XG5cbiAgICAvKiogUmVuZGVycyB0aGUgcmVxdWlyZWQgaW5kaWNhdG9yIGZvciB0aGlzIGlucHV0cyBsYWJlbCB3aXRob3V0IGVuYWJsaW5nIG5hdGl2ZSBgcmVxdWlyZWRgIHZhbGlkYXRpb24gKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHNob3dSZXF1aXJlZD87XG5cbiAgICAvKiogVGhlIGlucHV0IGVsZW1lbnQgdXNlZCB3aXRoaW4gdGhlIGZvcm0gY29udHJvbCBtaXhpbiAqL1xuICAgIEBxdWVyeSgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykgdmFsaWRhdGlvblRhcmdldDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhlIGVsZW1lbnQncyBzdGF0ZSBpcyBhYm91dCB0byBjaGFuZ2UuIElmIGRlZmF1bHQgaXMgcHJldmVudGVkLCBpdCB3aWxsIHJldmVydCB0aGUgY2hlY2tib3ggdG8gaXQncyBvcmlnaW5hbCBjaGVja2VkIHN0YXRlIHByaW9yIHRvIHNlbGVjdGluZy4gKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX3dpbGxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNdGVDaGVja2JveENoYW5nZURldGFpbD47XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoZSBlbGVtZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQuICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkNoYW5nZTogRXZlbnRFbWl0dGVyPE10ZUNoZWNrYm94Q2hhbmdlRGV0YWlsPjtcblxuICAgIC8qKiBFbWl0cyB3aGVuIHRoaXMgZWxlbWVudCBpcyBmb2N1c2VkICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkZvY3VzOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogRW1pdHMgd2hlbiB0aGlzIGVsZW1lbnQgbG9zZXMgZm9jdXMgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uQmx1cjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgQG9uVXBkYXRlKCdkZWZhdWx0Q2hlY2tlZCcpXG4gICAgcHJvdGVjdGVkIG9uRGVmYXVsdENoZWNrZWRDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5jb250cm9sbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQgJiYgdGhpcy5kZWZhdWx0Q2hlY2tlZCAmJiAhdGhpcy5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG9uVXBkYXRlKFsndmFsdWUnLCAnY2hlY2tlZCddLCB7IG9uOiAnYm90aCcgfSlcbiAgICBwcm90ZWN0ZWQgdXBkYXRlVmFsdWUoKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIEBvblVwZGF0ZSgnYXJpYUxhYmVsJywgeyBvbjogJ2JvdGgnIH0pXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUxhYmVsKCkge1xuICAgICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0ge1xuICAgICAgICAuLi50aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMsXG4gICAgICAgIGFyaWFMYWJlbDogdGhpcy5hcmlhTGFiZWwsXG4gICAgICB9O1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiAtLSBGb3JtIGNvbnRyb2wgdmFsaWRhdGlvbiBvdmVycmlkZXMgLS0gKi9cbiAgICBzaG91bGRGb3JtVmFsdWVVcGRhdGUoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja2VkO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldEZvcm1Db250cm9sKCk6IHZvaWQge1xuICAgICAgc3VwZXIucmVzZXRGb3JtQ29udHJvbD8uKCk7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuXG4gICAgICBpZiAodGhpcy5jb250cm9sbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5kZWZhdWx0Q2hlY2tlZDtcbiAgICB9XG5cbiAgICB2YWxpZGl0eUNhbGxiYWNrKCk6IHN0cmluZyB8IHZvaWQge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3IgfHwgdGhpcy52YWxpZGF0aW9uVGFyZ2V0Py52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICB9XG5cbiAgICAvKiogLS0gVGFiSW5kZXggb3ZlcnJpZGVzIC0tICovXG4gICAgZ2V0VGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblRhcmdldD8uZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIH1cblxuICAgIHNldFRhYkluZGV4QWRhcHRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgIHRoaXMudmFsaWRhdGlvblRhcmdldD8uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZW1vdmVUYWJJbmRleEFkYXB0ZXIoKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgIHRoaXMudmFsaWRhdGlvblRhcmdldD8ucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub3RQcmV2ZW50ZWQgPSB0aGlzLl93aWxsQ2hhbmdlLmVtaXQoXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgY2hlY2tlZDogIXRoaXMuY2hlY2tlZCxcbiAgICAgICAgfSxcbiAgICAgICAgeyBjYW5jZWxhYmxlOiB0cnVlIH1cbiAgICAgICk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRyb2xsZWQpIHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIGNoZWNrZWQ6ICF0aGlzLmNoZWNrZWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobm90UHJldmVudGVkKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBjaGVja2VkOiB0aGlzLmNoZWNrZWQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9vbkJsdXIuZW1pdCgpO1xuICAgIH07XG5cbiAgICBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICAgIHRoaXMuX29uRm9jdXMuZW1pdCgpO1xuICAgIH07XG5cbiAgICAvKiogQ2xpY2tzIHRoZSBlbGVtZW50ICovXG4gICAgcHVibGljIGNsaWNrKCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0LmNsaWNrKCk7XG4gICAgfVxuXG4gICAgLyoqIEZvY3VzZXMgdGhlIGVsZW1lbnQgKi9cbiAgICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKiogQmx1cnMgdGhlIGVsZW1lbnQgKi9cbiAgICBwdWJsaWMgYmx1cigpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblRhcmdldC5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIENoZWNrYm94RWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxcbiAgICBDaGVja2JveEludGVyZmFjZSAmIFRhYkluZGV4SW50ZXJmYWNlICYgRm9ybUNvbnRyb2xJbnRlcmZhY2UgJiBEaXNhYmxlZEludGVyZmFjZVxuICA+ICZcbiAgICBUO1xufTtcbiIsICIvKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyB0aGUgV2Vha01hcHMgdXNlZCB0aHJvdWdob3V0IHRoaXMgcHJvamVjdC4gVGhlIFdlYWtNYXBzIGV4aXN0IHRvIHRpZVxuICogb2JqZWN0cyB0b2dldGhlciB3aXRob3V0IHBvbGx1dGluZyB0aGUgb2JqZWN0cyB0aGVtc2VsdmVzIHdpdGggcmVmZXJlbmNlcyB3ZSdkIHJhdGhlciBrZWVwXG4gKiBoaWRkZW4uIFRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byB3b3JrIGFzIHRyYW5zcGFyZW50bHkgYXMgcG9zc2libGUuXG4gKi9cbmltcG9ydCB7IElFbGVtZW50SW50ZXJuYWxzLCBJQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGl0IGlzIGF0dGFjaGVkIHRvICovXG5leHBvcnQgY29uc3QgcmVmTWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIElDdXN0b21FbGVtZW50PigpO1xuXG4vKiogVXNlZSBhbiBFbGVtZW50c0ludGVybmFscyBpbnN0YW5jZSB0byBnZXQgaXRzIFZhbGlkaXR5U3RhdGUgb2JqZWN0ICovXG5leHBvcnQgY29uc3QgdmFsaWRpdHlNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgVmFsaWRpdHlTdGF0ZT4oKTtcblxuLyoqIFVzZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBpdHMgYXR0YWNoZWQgaW5wdXRbdHlwZT1cImhpZGRlblwiXSAqL1xuZXhwb3J0IGNvbnN0IGhpZGRlbklucHV0TWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIEhUTUxJbnB1dEVsZW1lbnRbXT4oKTtcblxuLyoqIFVzZSBhIGN1c3RvbSBlbGVtZW50IHRvIGdldCBpdHMgYXR0YWNoZWQgRWxlbWVudEludGVybmFscyBpbnN0YW5jZSAqL1xuZXhwb3J0IGNvbnN0IGludGVybmFsc01hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBJRWxlbWVudEludGVybmFscz4oKTtcblxuLyoqIFVzZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCB0aGUgYXR0YWNoZWQgdmFsaWRhdGlvbiBtZXNzYWdlICovXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvbk1lc3NhZ2VNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgc3RyaW5nPigpO1xuXG4vKiogVXNlIGEgZm9ybSBlbGVtZW50IHRvIGdldCBhdHRhY2hlZCBjdXN0b20gZWxlbWVudHMgYW5kIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2VzICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuZXhwb3J0IGNvbnN0IGZvcm1zTWFwID0gbmV3IFdlYWtNYXA8SFRNTEZvcm1FbGVtZW50LCBPYmplY3Q+KCk7XG5cbi8qKiBVc2UgYSBjdXN0b20gZWxlbWVudCBvciBvdGhlciBvYmplY3QgdG8gZ2V0IHRoZWlyIGFzc29jaWF0ZWQgTXV0YXRpb25PYnNlcnZlcnMgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dIb3N0c01hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBNdXRhdGlvbk9ic2VydmVyPigpO1xuXG4vKiogVXNlIGEgZm9ybSBlbGVtZW50IHRvIGdldCBhIHNldCBvZiBhdHRhY2hlZCBjdXN0b20gZWxlbWVudHMgKi9cbmV4cG9ydCBjb25zdCBmb3JtRWxlbWVudHNNYXAgPSBuZXcgV2Vha01hcDxIVE1MRm9ybUVsZW1lbnQsIFNldDxJQ3VzdG9tRWxlbWVudD4+KCk7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgYSByZWZlcmVuY2UgdG8gYW4gZWxlbWVudCdzIHZhbHVlICovXG5leHBvcnQgY29uc3QgcmVmVmFsdWVNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgYW55PigpO1xuXG4vKiogRWxlbWVudHMgdGhhdCBuZWVkIHRvIGJlIHVwZ3JhZGVkIG9uY2UgYWRkZWQgdG8gdGhlIERPTSAqL1xuZXhwb3J0IGNvbnN0IHVwZ3JhZGVNYXAgPSBuZXcgV2Vha01hcDxFbGVtZW50LCBJRWxlbWVudEludGVybmFscz4oKTtcblxuLyoqIFNhdmUgcmVmZXJlbmNlcyB0byBzaGFkb3cgcm9vdHMgZm9yIGluY2x1c2lvbiBpbiBpbnRlcm5hbHMgaW5zdGFuY2UgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dSb290TWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIFNoYWRvd1Jvb3Q+KCk7XG5cbi8qKiBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBpbnRlcm5hbHMnIHZhbGlkYXRpb24gYW5jaG9yICovXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvbkFuY2hvck1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBIVE1MRWxlbWVudD4oKTtcblxuLyoqIE1hcCBEb2N1bWVudEZyYWdtZW50cyB0byB0aGVpciBNdXRhdGlvbk9ic2VydmVycyBzbyB3ZSBjYW4gZGlzY29ubmVjdCBvbmNlIGVsZW1lbnRzIGFyZSByZW1vdmVkICovXG5leHBvcnQgY29uc3QgZG9jdW1lbnRGcmFnbWVudE1hcCA9IG5ldyBXZWFrTWFwPERvY3VtZW50RnJhZ21lbnQsIE11dGF0aW9uT2JzZXJ2ZXI+KCk7XG5cbi8qKiBXaGV0aGVyIGNvbm5lY3RlZENhbGxiYWNrIGhhcyBhbHJlYWR5IGJlZW4gY2FsbGVkLiAqL1xuZXhwb3J0IGNvbnN0IGNvbm5lY3RlZENhbGxiYWNrTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIGJvb2xlYW4+KCk7XG5cbi8qKiBTYXZlIGEgcmVmZXJlbmNlIHRvIHZhbGlkaXR5IHN0YXRlIGZvciBlbGVtZW50cyB0aGF0IG5lZWQgdG8gdXBncmFkZSBhZnRlciBiZWluZyBjb25uZWN0ZWQgKi9cbmV4cG9ydCBjb25zdCB2YWxpZGl0eVVwZ3JhZGVNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHM+KCk7XG4iLCAiaW1wb3J0IHsgdXBncmFkZU1hcCB9IGZyb20gJy4vbWFwcy5qcyc7XG5pbXBvcnQgeyBJQW9tLCBJRWxlbWVudEludGVybmFscyB9IGZyb20gJy4vdHlwZXMuanMnO1xuXG5leHBvcnQgY29uc3QgYW9tOiBJQW9tID0ge1xuICBhcmlhQXRvbWljOiAnYXJpYS1hdG9taWMnLFxuICBhcmlhQXV0b0NvbXBsZXRlOiAnYXJpYS1hdXRvY29tcGxldGUnLFxuICBhcmlhQnVzeTogJ2FyaWEtYnVzeScsXG4gIGFyaWFDaGVja2VkOiAnYXJpYS1jaGVja2VkJyxcbiAgYXJpYUNvbENvdW50OiAnYXJpYS1jb2xjb3VudCcsXG4gIGFyaWFDb2xJbmRleDogJ2FyaWEtY29saW5kZXgnLFxuICBhcmlhQ29sSW5kZXhUZXh0OiAnYXJpYS1jb2xpbmRleHRleHQnLFxuICBhcmlhQ29sU3BhbjogJ2FyaWEtY29sc3BhbicsXG4gIGFyaWFDdXJyZW50OiAnYXJpYS1jdXJyZW50JyxcbiAgYXJpYURpc2FibGVkOiAnYXJpYS1kaXNhYmxlZCcsXG4gIGFyaWFFeHBhbmRlZDogJ2FyaWEtZXhwYW5kZWQnLFxuICBhcmlhSGFzUG9wdXA6ICdhcmlhLWhhc3BvcHVwJyxcbiAgYXJpYUhpZGRlbjogJ2FyaWEtaGlkZGVuJyxcbiAgYXJpYUludmFsaWQ6ICdhcmlhLWludmFsaWQnLFxuICBhcmlhS2V5U2hvcnRjdXRzOiAnYXJpYS1rZXlzaG9ydGN1dHMnLFxuICBhcmlhTGFiZWw6ICdhcmlhLWxhYmVsJyxcbiAgYXJpYUxldmVsOiAnYXJpYS1sZXZlbCcsXG4gIGFyaWFMaXZlOiAnYXJpYS1saXZlJyxcbiAgYXJpYU1vZGFsOiAnYXJpYS1tb2RhbCcsXG4gIGFyaWFNdWx0aUxpbmU6ICdhcmlhLW11bHRpbGluZScsXG4gIGFyaWFNdWx0aVNlbGVjdGFibGU6ICdhcmlhLW11bHRpc2VsZWN0YWJsZScsXG4gIGFyaWFPcmllbnRhdGlvbjogJ2FyaWEtb3JpZW50YXRpb24nLFxuICBhcmlhUGxhY2Vob2xkZXI6ICdhcmlhLXBsYWNlaG9sZGVyJyxcbiAgYXJpYVBvc0luU2V0OiAnYXJpYS1wb3NpbnNldCcsXG4gIGFyaWFQcmVzc2VkOiAnYXJpYS1wcmVzc2VkJyxcbiAgYXJpYVJlYWRPbmx5OiAnYXJpYS1yZWFkb25seScsXG4gIGFyaWFSZWxldmFudDogJ2FyaWEtcmVsZXZhbnQnLFxuICBhcmlhUmVxdWlyZWQ6ICdhcmlhLXJlcXVpcmVkJyxcbiAgYXJpYVJvbGVEZXNjcmlwdGlvbjogJ2FyaWEtcm9sZWRlc2NyaXB0aW9uJyxcbiAgYXJpYVJvd0NvdW50OiAnYXJpYS1yb3djb3VudCcsXG4gIGFyaWFSb3dJbmRleDogJ2FyaWEtcm93aW5kZXgnLFxuICBhcmlhUm93SW5kZXhUZXh0OiAnYXJpYS1yb3dpbmRleHRleHQnLFxuICBhcmlhUm93U3BhbjogJ2FyaWEtcm93c3BhbicsXG4gIGFyaWFTZWxlY3RlZDogJ2FyaWEtc2VsZWN0ZWQnLFxuICBhcmlhU2V0U2l6ZTogJ2FyaWEtc2V0c2l6ZScsXG4gIGFyaWFTb3J0OiAnYXJpYS1zb3J0JyxcbiAgYXJpYVZhbHVlTWF4OiAnYXJpYS12YWx1ZW1heCcsXG4gIGFyaWFWYWx1ZU1pbjogJ2FyaWEtdmFsdWVtaW4nLFxuICBhcmlhVmFsdWVOb3c6ICdhcmlhLXZhbHVlbm93JyxcbiAgYXJpYVZhbHVlVGV4dDogJ2FyaWEtdmFsdWV0ZXh0JyxcbiAgcm9sZTogJ3JvbGUnLFxufTtcblxuZXhwb3J0IGNvbnN0IGluaXRBb20gPSAocmVmOiBFbGVtZW50LCBpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzKSA9PiB7XG4gIGZvciAobGV0IGtleSBpbiBhb20pIHtcbiAgICBpbnRlcm5hbHNba2V5XSA9IG51bGw7XG5cbiAgICBsZXQgY2xvc3VyZVZhbHVlID0gbnVsbDtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gYW9tW2tleV07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGludGVybmFscywga2V5LCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiBjbG9zdXJlVmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgIGNsb3N1cmVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBpZiAocmVmLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgcmVmLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXBncmFkZU1hcC5zZXQocmVmLCBpbnRlcm5hbHMpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59O1xuIiwgImltcG9ydCB7XG4gIGludGVybmFsc01hcCxcbiAgc2hhZG93SG9zdHNNYXAsXG4gIHVwZ3JhZGVNYXAsXG4gIGhpZGRlbklucHV0TWFwLFxuICBkb2N1bWVudEZyYWdtZW50TWFwLFxuICBmb3JtRWxlbWVudHNNYXAsXG4gIHZhbGlkaXR5VXBncmFkZU1hcCxcbiAgcmVmVmFsdWVNYXAsXG59IGZyb20gJy4vbWFwcy5qcyc7XG5pbXBvcnQgeyBhb20gfSBmcm9tICcuL2FvbS5qcyc7XG5pbXBvcnQge1xuICByZW1vdmVIaWRkZW5JbnB1dHMsXG4gIGluaXRGb3JtLFxuICBpbml0TGFiZWxzLFxuICB1cGdyYWRlSW50ZXJuYWxzLFxuICBzZXREaXNhYmxlZCxcbiAgbXV0YXRpb25PYnNlcnZlckV4aXN0cyxcbn0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBJQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4vdHlwZXMuanMnO1xuXG5mdW5jdGlvbiBpbml0Tm9kZShub2RlOiBJQ3VzdG9tRWxlbWVudCk6IHZvaWQge1xuICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KG5vZGUpO1xuICBjb25zdCB7IGZvcm0gfSA9IGludGVybmFscztcbiAgaW5pdEZvcm0obm9kZSwgZm9ybSwgaW50ZXJuYWxzKTtcbiAgaW5pdExhYmVscyhub2RlLCBpbnRlcm5hbHMubGFiZWxzKTtcbn1cblxuLyoqXG4gKiBJZiBhIGZpZWxkc2V0J3MgZGlzYWJsZWQgc3RhdGUgaXMgdG9nZ2xlZCwgdGhlIGZvcm1EaXNhYmxlZENhbGxiYWNrXG4gKiBvbiBhbnkgY2hpbGQgZm9ybS1hc3NvY2lhdGVkIGN1c290bSBlbGVtZW50cy5cbiAqL1xuZXhwb3J0IGNvbnN0IHdhbGtGaWVsZHNldCA9IChub2RlOiBIVE1MRmllbGRTZXRFbGVtZW50LCBmaXJzdFJlbmRlciA9IGZhbHNlKTogdm9pZCA9PiB7XG4gIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIobm9kZSwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIHtcbiAgICBhY2NlcHROb2RlKG5vZGU6IElDdXN0b21FbGVtZW50KTogbnVtYmVyIHtcbiAgICAgIHJldHVybiBpbnRlcm5hbHNNYXAuaGFzKG5vZGUpID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfU0tJUDtcbiAgICB9LFxuICB9KTtcblxuICBsZXQgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuICAvKipcbiAgICogV2UgZG9uJ3QgbmVlZCB0byBjYWxsIGFueXRoaW5nIG9uIGZpcnN0IHJlbmRlciBpZlxuICAgKiB0aGUgZWxlbWVudCBpc24ndCBkaXNhYmxlZFxuICAgKi9cbiAgY29uc3QgaXNDYWxsTmVjZXNzYXJ5ID0gIWZpcnN0UmVuZGVyIHx8IG5vZGUuZGlzYWJsZWQ7XG5cbiAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICBpZiAoY3VycmVudC5mb3JtRGlzYWJsZWRDYWxsYmFjayAmJiBpc0NhbGxOZWNlc3NhcnkpIHtcbiAgICAgIHNldERpc2FibGVkKGN1cnJlbnQsIG5vZGUuZGlzYWJsZWQpO1xuICAgIH1cbiAgICBjdXJyZW50ID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgSUN1c3RvbUVsZW1lbnQ7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZE9yTmFtZU9ic2VydmVyQ29uZmlnOiBNdXRhdGlvbk9ic2VydmVySW5pdCA9IHtcbiAgYXR0cmlidXRlczogdHJ1ZSxcbiAgYXR0cmlidXRlRmlsdGVyOiBbJ2Rpc2FibGVkJywgJ25hbWUnXSxcbn07XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZE9yTmFtZU9ic2VydmVyID0gbXV0YXRpb25PYnNlcnZlckV4aXN0cygpXG4gID8gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uc0xpc3Q6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcbiAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zTGlzdCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbi50YXJnZXQgYXMgSUN1c3RvbUVsZW1lbnQ7XG5cbiAgICAgICAgLyoqIE1hbmFnZSBjaGFuZ2VzIHRvIHRoZSByZWYncyBkaXNhYmxlZCBzdGF0ZSAqL1xuICAgICAgICBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2Rpc2FibGVkJykge1xuICAgICAgICAgIGlmICh0YXJnZXQuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICAgICAgICAgIHNldERpc2FibGVkKHRhcmdldCwgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQubG9jYWxOYW1lID09PSAnZmllbGRzZXQnKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJlcHVycG9zZSB0aGUgb2JzZXJ2ZXIgZm9yIGZpZWxkc2V0cyB3aGljaCBuZWVkXG4gICAgICAgICAgICAgKiB0byBiZSB3YWxrZWQgd2hlbmV2ZXIgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSBpcyBzZXRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgd2Fsa0ZpZWxkc2V0KHRhcmdldCBhcyB1bmtub3duIGFzIEhUTUxGaWVsZFNldEVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiogTWFuYWdlIGNoYW5nZXMgdG8gdGhlIHJlZidzIG5hbWUgKi9cbiAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICduYW1lJykge1xuICAgICAgICAgIGlmICh0YXJnZXQuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICAgICAgICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVmVmFsdWVNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICBpbnRlcm5hbHMuc2V0Rm9ybVZhbHVlKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICA6ICh7fSBhcyBNdXRhdGlvbk9ic2VydmVyKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVyQ2FsbGJhY2sobXV0YXRpb25MaXN0OiBNdXRhdGlvblJlY29yZFtdKSB7XG4gIG11dGF0aW9uTGlzdC5mb3JFYWNoKChtdXRhdGlvblJlY29yZCkgPT4ge1xuICAgIGNvbnN0IHsgYWRkZWROb2RlcywgcmVtb3ZlZE5vZGVzIH0gPSBtdXRhdGlvblJlY29yZDtcbiAgICBjb25zdCBhZGRlZCA9IEFycmF5LmZyb20oYWRkZWROb2RlcykgYXMgSUN1c3RvbUVsZW1lbnRbXTtcbiAgICBjb25zdCByZW1vdmVkID0gQXJyYXkuZnJvbShyZW1vdmVkTm9kZXMpIGFzIElDdXN0b21FbGVtZW50W107XG5cbiAgICBhZGRlZC5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAvKiogQWxsb3dzIGZvciBkeW5hbWljIGFkZGl0aW9uIG9mIGVsZW1lbnRzIHRvIGZvcm1zICovXG4gICAgICBpZiAoaW50ZXJuYWxzTWFwLmhhcyhub2RlKSAmJiBub2RlLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICAgIGluaXROb2RlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvKiogVXBncmFkZSB0aGUgYWNjZXNzaWJpbGl0eSBpbmZvcm1hdGlvbiBvbiBhbnkgcHJldmlvdXNseSBjb25uZWN0ZWQgKi9cbiAgICAgIGlmICh1cGdyYWRlTWFwLmhhcyhub2RlKSkge1xuICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSB1cGdyYWRlTWFwLmdldChub2RlKTtcbiAgICAgICAgY29uc3QgYW9tS2V5cyA9IE9iamVjdC5rZXlzKGFvbSk7XG4gICAgICAgIGFvbUtleXNcbiAgICAgICAgICAuZmlsdGVyKChrZXkpID0+IGludGVybmFsc1trZXldICE9PSBudWxsKVxuICAgICAgICAgIC5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGFvbVtrZXldLCBpbnRlcm5hbHNba2V5XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHVwZ3JhZGVNYXAuZGVsZXRlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvKiogVXBncmFkZSB0aGUgdmFsaWRpdHkgc3RhdGUgd2hlbiB0aGUgZWxlbWVudCBpcyBjb25uZWN0ZWQgKi9cbiAgICAgIGlmICh2YWxpZGl0eVVwZ3JhZGVNYXAuaGFzKG5vZGUpKSB7XG4gICAgICAgIGNvbnN0IGludGVybmFscyA9IHZhbGlkaXR5VXBncmFkZU1hcC5nZXQobm9kZSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdpbnRlcm5hbHMtdmFsaWQnLCBpbnRlcm5hbHMudmFsaWRpdHkudmFsaWQudG9TdHJpbmcoKSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdpbnRlcm5hbHMtaW52YWxpZCcsICghaW50ZXJuYWxzLnZhbGlkaXR5LnZhbGlkKS50b1N0cmluZygpKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsICghaW50ZXJuYWxzLnZhbGlkaXR5LnZhbGlkKS50b1N0cmluZygpKTtcbiAgICAgICAgdmFsaWRpdHlVcGdyYWRlTWFwLmRlbGV0ZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgLyoqIElmIHRoZSBub2RlIHRoYXQncyBhZGRlZCBpcyBhIGZvcm0sIGNoZWNrIHRoZSB2YWxpZGl0eSAqL1xuICAgICAgaWYgKG5vZGUubG9jYWxOYW1lID09PSAnZm9ybScpIHtcbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChub2RlIGFzIHVua25vd24gYXMgSFRNTEZvcm1FbGVtZW50KTtcbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihub2RlLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwge1xuICAgICAgICAgIGFjY2VwdE5vZGUobm9kZTogSUN1c3RvbUVsZW1lbnQpOiBudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIGludGVybmFsc01hcC5oYXMobm9kZSkgJiYgIShmb3JtRWxlbWVudHMgJiYgZm9ybUVsZW1lbnRzLmhhcyhub2RlKSlcbiAgICAgICAgICAgICAgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFRcbiAgICAgICAgICAgICAgOiBOb2RlRmlsdGVyLkZJTFRFUl9TS0lQO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjdXJyZW50ID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgSUN1c3RvbUVsZW1lbnQ7XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgICBpbml0Tm9kZShjdXJyZW50KTtcbiAgICAgICAgICBjdXJyZW50ID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgSUN1c3RvbUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUubG9jYWxOYW1lID09PSAnZmllbGRzZXQnKSB7XG4gICAgICAgIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIub2JzZXJ2ZT8uKG5vZGUsIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWcpO1xuICAgICAgICB3YWxrRmllbGRzZXQobm9kZSBhcyB1bmtub3duIGFzIEhUTUxGaWVsZFNldEVsZW1lbnQsIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVtb3ZlZC5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KG5vZGUpO1xuICAgICAgLyoqIENsZWFuIHVwIGFueSBoaWRkZW4gaW5wdXQgZWxlbWVudHMgbGVmdCBhZnRlciBhbiBlbGVtZW50IGlzIGRpc2Nvbm5lY3RlZCAqL1xuICAgICAgaWYgKGludGVybmFscyAmJiBoaWRkZW5JbnB1dE1hcC5nZXQoaW50ZXJuYWxzKSkge1xuICAgICAgICByZW1vdmVIaWRkZW5JbnB1dHMoaW50ZXJuYWxzKTtcbiAgICAgIH1cbiAgICAgIC8qKiBEaXNjb25uZWN0IGFueSB1bm5lZWRlZCBNdXRhdGlvbk9ic2VydmVycyAqL1xuICAgICAgaWYgKHNoYWRvd0hvc3RzTWFwLmhhcyhub2RlKSkge1xuICAgICAgICBjb25zdCBvYnNlcnZlciA9IHNoYWRvd0hvc3RzTWFwLmdldChub2RlKTtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaGlzIG9ic2VydmVyIGNhbGxiYWNrIGlzIGp1c3QgZm9yIGRvY3VtZW50IGZyYWdtZW50c1xuICogaXQgd2lsbCB1cGdyYWRlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgaWYgd2FzIGFwcGVuZGVkXG4gKiBmcm9tIGEgZG9jdW1lbnQgZnJhZ21lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcmFnbWVudE9ic2VydmVyQ2FsbGJhY2sobXV0YXRpb25MaXN0OiBNdXRhdGlvblJlY29yZFtdKTogdm9pZCB7XG4gIG11dGF0aW9uTGlzdC5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgcmVtb3ZlZE5vZGVzIH0gPSBtdXRhdGlvbjtcblxuICAgIHJlbW92ZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBjb25zdCBvYnNlcnZlciA9IGRvY3VtZW50RnJhZ21lbnRNYXAuZ2V0KG11dGF0aW9uLnRhcmdldCBhcyBEb2N1bWVudEZyYWdtZW50KTtcbiAgICAgIGlmIChpbnRlcm5hbHNNYXAuaGFzKG5vZGUgYXMgSUN1c3RvbUVsZW1lbnQpKSB7XG4gICAgICAgIHVwZ3JhZGVJbnRlcm5hbHMobm9kZSBhcyBJQ3VzdG9tRWxlbWVudCk7XG4gICAgICB9XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIERlZmVyIHRoZSB1cGdyYWRlIG9mIG5vZGVzIHdpdGhpbmcgYSBEb2N1bWVudEZyYWdtZW50XG4gKiBAcGFyYW0gZnJhZ21lbnQge0RvY3VtZW50RnJhZ21lbnR9XG4gKi9cbmV4cG9ydCBjb25zdCBkZWZlclVwZ3JhZGUgPSAoZnJhZ21lbnQ6IERvY3VtZW50RnJhZ21lbnQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmcmFnbWVudE9ic2VydmVyQ2FsbGJhY2spO1xuICBvYnNlcnZlci5vYnNlcnZlPy4oZnJhZ21lbnQsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICBkb2N1bWVudEZyYWdtZW50TWFwLnNldChmcmFnbWVudCwgb2JzZXJ2ZXIpO1xufTtcblxuZXhwb3J0IGNvbnN0IG9ic2VydmVyID0gbXV0YXRpb25PYnNlcnZlckV4aXN0cygpXG4gID8gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjaylcbiAgOiAoe30gYXMgTXV0YXRpb25PYnNlcnZlcik7XG5leHBvcnQgY29uc3Qgb2JzZXJ2ZXJDb25maWc6IE11dGF0aW9uT2JzZXJ2ZXJJbml0ID0ge1xuICBjaGlsZExpc3Q6IHRydWUsXG4gIHN1YnRyZWU6IHRydWUsXG59O1xuIiwgImltcG9ydCB7IGhpZGRlbklucHV0TWFwLCBmb3Jtc01hcCwgZm9ybUVsZW1lbnRzTWFwLCBpbnRlcm5hbHNNYXAgfSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHsgZGlzYWJsZWRPck5hbWVPYnNlcnZlciwgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZyB9IGZyb20gJy4vbXV0YXRpb24tb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IElDdXN0b21FbGVtZW50LCBJRWxlbWVudEludGVybmFscywgTGFiZWxzTGlzdCB9IGZyb20gJy4vdHlwZXMuanMnO1xuXG4vKipcbiAqIFRvZ2dsZSdzIHRoZSBkaXNhYmxlZCBzdGF0ZSAoYXR0cmlidXRlcyAmIGNhbGxiYWNrKSBvbiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQHBhcmFtIHtJQ3VzdG9tRWxlbWVudH0gcmVmIC0gVGhlIGN1c3RvbSBlbGVtZW50IGluc3RhbmNlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGRpc2FibGVkIC0gVGhlIGRpc2FibGVkIHN0YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBzZXREaXNhYmxlZCA9IChyZWY6IElDdXN0b21FbGVtZW50LCBkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQgPT4ge1xuICByZWYudG9nZ2xlQXR0cmlidXRlKCdpbnRlcm5hbHMtZGlzYWJsZWQnLCBkaXNhYmxlZCk7XG5cbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgcmVmLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gIH0gZWxzZSB7XG4gICAgcmVmLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xuICB9XG5cbiAgaWYgKHJlZi5mb3JtRGlzYWJsZWRDYWxsYmFjaykge1xuICAgIHJlZi5mb3JtRGlzYWJsZWRDYWxsYmFjay5hcHBseShyZWYsIFtkaXNhYmxlZF0pO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGhpZGRlbiBpbnB1dHMgZm9yIHRoZSBnaXZlbiBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZVxuICogQHBhcmFtIHtJRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzIC0gVGhlIGVsZW1lbnQgaW50ZXJuYWxzIGluc3RhbmNlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlSGlkZGVuSW5wdXRzID0gKGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHMpOiB2b2lkID0+IHtcbiAgY29uc3QgaGlkZGVuSW5wdXRzID0gaGlkZGVuSW5wdXRNYXAuZ2V0KGludGVybmFscyk7XG4gIGhpZGRlbklucHV0cy5mb3JFYWNoKChoaWRkZW5JbnB1dCkgPT4ge1xuICAgIGhpZGRlbklucHV0LnJlbW92ZSgpO1xuICB9KTtcbiAgaGlkZGVuSW5wdXRNYXAuc2V0KGludGVybmFscywgW10pO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGlkZGVuIGlucHV0IGZvciB0aGUgZ2l2ZW4gcmVmXG4gKiBAcGFyYW0ge0lDdXN0b21FbGVtZW50fSByZWYgLSBUaGUgZWxlbWVudCB0byB3YXRjaFxuICogQHBhcmFtIHtJRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzIC0gVGhlIGVsZW1lbnQgaW50ZXJuYWxzIGluc3RhbmNlIGZvciB0aGUgcmVmXG4gKiBAcmV0dXJuIHtIVE1MSW5wdXRFbGVtZW50fSBUaGUgaGlkZGVuIGlucHV0XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVIaWRkZW5JbnB1dCA9IChcbiAgcmVmOiBJQ3VzdG9tRWxlbWVudCxcbiAgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFsc1xuKTogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSAnaGlkZGVuJztcbiAgaW5wdXQubmFtZSA9IHJlZi5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgcmVmLmFmdGVyKGlucHV0KTtcbiAgaGlkZGVuSW5wdXRNYXAuZ2V0KGludGVybmFscykucHVzaChpbnB1dCk7XG4gIHJldHVybiBpbnB1dDtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIHJlZiBieSBzZXR0aW5nIHVwIGFuIGF0dHJpYnV0ZSBvYnNlcnZlIG9uIGl0XG4gKiBsb29raW5nIGZvciBjaGFuZ2VzIHRvIGRpc2FibGVkXG4gKiBAcGFyYW0ge0lDdXN0b21FbGVtZW50fSByZWYgLSBUaGUgZWxlbWVudCB0byB3YXRjaFxuICogQHBhcmFtIHtJRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzIC0gVGhlIGVsZW1lbnQgaW50ZXJuYWxzIGluc3RhbmNlIGZvciB0aGUgcmVmXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgaW5pdFJlZiA9IChyZWY6IElDdXN0b21FbGVtZW50LCBpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzKTogdm9pZCA9PiB7XG4gIGhpZGRlbklucHV0TWFwLnNldChpbnRlcm5hbHMsIFtdKTtcbiAgZGlzYWJsZWRPck5hbWVPYnNlcnZlci5vYnNlcnZlPy4ocmVmLCBkaXNhYmxlZE9yTmFtZU9ic2VydmVyQ29uZmlnKTtcbn07XG5cbi8qKlxuICogU2V0IHVwIGxhYmVscyBmb3IgdGhlIHJlZlxuICogQHBhcmFtIHtJQ3VzdG9tRWxlbWVudH0gcmVmIC0gVGhlIHJlZiB0byBhZGQgbGFiZWxzIHRvXG4gKiBAcGFyYW0ge0xhYmVsc0xpc3R9IGxhYmVscyAtIEEgbGlzdCBvZiB0aGUgbGFiZWxzXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgaW5pdExhYmVscyA9IChyZWY6IElDdXN0b21FbGVtZW50LCBsYWJlbHM6IExhYmVsc0xpc3QpOiB2b2lkID0+IHtcbiAgaWYgKGxhYmVscy5sZW5ndGgpIHtcbiAgICBBcnJheS5mcm9tKGxhYmVscykuZm9yRWFjaCgobGFiZWwpID0+IGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVmLmNsaWNrLmJpbmQocmVmKSkpO1xuICAgIGxldCBmaXJzdExhYmVsSWQgPSBsYWJlbHNbMF0uaWQ7XG4gICAgaWYgKCFsYWJlbHNbMF0uaWQpIHtcbiAgICAgIGZpcnN0TGFiZWxJZCA9IGAke2xhYmVsc1swXS5odG1sRm9yfV9MYWJlbGA7XG4gICAgICBsYWJlbHNbMF0uaWQgPSBmaXJzdExhYmVsSWQ7XG4gICAgfVxuICAgIHJlZi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGZpcnN0TGFiZWxJZCk7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0cyB0aGUgaW50ZXJuYWxzLXZhbGlkIGFuZCBpbnRlcm5hbHMtaW52YWxpZCBhdHRyaWJ1dGVzXG4gKiBiYXNlZCBvbiBmb3JtIHZhbGlkaXR5LlxuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IC0gVGhlIHRhcmdldCBmb3JtXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3Qgc2V0Rm9ybVZhbGlkaXR5ID0gKGZvcm06IEhUTUxGb3JtRWxlbWVudCkgPT4ge1xuICBjb25zdCBuYXRpdmVDb250cm9sVmFsaWRpdHkgPSBBcnJheS5mcm9tKGZvcm0uZWxlbWVudHMpXG4gICAgLmZpbHRlcihcbiAgICAgIChlbGVtZW50OiBFbGVtZW50ICYgeyB2YWxpZGl0eTogVmFsaWRpdHlTdGF0ZSB9KSA9PlxuICAgICAgICAhZWxlbWVudC50YWdOYW1lLmluY2x1ZGVzKCctJykgJiYgZWxlbWVudC52YWxpZGl0eVxuICAgIClcbiAgICAubWFwKChlbGVtZW50OiBFbGVtZW50ICYgeyB2YWxpZGl0eTogVmFsaWRpdHlTdGF0ZSB9KSA9PiBlbGVtZW50LnZhbGlkaXR5LnZhbGlkKTtcbiAgY29uc3QgcG9seWZpbGxlZEVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChmb3JtKSB8fCBbXTtcbiAgY29uc3QgcG9seWZpbGxlZFZhbGlkaXR5ID0gQXJyYXkuZnJvbShwb2x5ZmlsbGVkRWxlbWVudHMpXG4gICAgLmZpbHRlcigoY29udHJvbCkgPT4gY29udHJvbC5pc0Nvbm5lY3RlZClcbiAgICAubWFwKChjb250cm9sOiBJQ3VzdG9tRWxlbWVudCkgPT4gaW50ZXJuYWxzTWFwLmdldChjb250cm9sKS52YWxpZGl0eS52YWxpZCk7XG4gIGNvbnN0IGhhc0ludmFsaWQgPSBbLi4ubmF0aXZlQ29udHJvbFZhbGlkaXR5LCAuLi5wb2x5ZmlsbGVkVmFsaWRpdHldLmluY2x1ZGVzKGZhbHNlKTtcbiAgZm9ybS50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy1pbnZhbGlkJywgaGFzSW52YWxpZCk7XG4gIGZvcm0udG9nZ2xlQXR0cmlidXRlKCdpbnRlcm5hbHMtdmFsaWQnLCAhaGFzSW52YWxpZCk7XG59O1xuXG4vKipcbiAqIFRoZSBnbG9iYWwgZm9ybSBpbnB1dCBjYWxsYmFjay4gVXBkYXRlcyB0aGUgZm9ybSdzIHZhbGlkaXR5XG4gKiBhdHRyaWJ1dGVzIG9uIGlucHV0LlxuICogQHBhcmFtIHtFdmVudH0gLSBUaGUgZm9ybSBpbnB1dCBldmVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1JbnB1dENhbGxiYWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICBzZXRGb3JtVmFsaWRpdHkoZmluZFBhcmVudEZvcm0oZXZlbnQudGFyZ2V0KSk7XG59O1xuXG4vKipcbiAqIFRoZSBnbG9iYWwgZm9ybSBjaGFuZ2UgY2FsbGJhY2suIFVwZGF0ZXMgdGhlIGZvcm0ncyB2YWxpZGl0eVxuICogYXR0cmlidXRlcyBvbiBjaGFuZ2UuXG4gKiBAcGFyYW0ge0V2ZW50fSAtIFRoZSBmb3JtIGNoYW5nZSBldmVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1DaGFuZ2VDYWxsYmFjayA9IChldmVudDogRXZlbnQpID0+IHtcbiAgc2V0Rm9ybVZhbGlkaXR5KGZpbmRQYXJlbnRGb3JtKGV2ZW50LnRhcmdldCkpO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gc3VibWl0IGNhbGxiYWNrLiBXZSBuZWVkIHRvIGNhbmNlbCBhbnkgc3VibWlzc2lvblxuICogaWYgYSBuZXN0ZWQgaW50ZXJuYWxzIGlzIGludmFsaWQuXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gLSBUaGUgZm9ybSBlbGVtZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3Qgd2lyZVN1Ym1pdExvZ2ljID0gKGZvcm06IEhUTUxGb3JtRWxlbWVudCkgPT4ge1xuICBjb25zdCBTVUJNSVRfQlVUVE9OX1NFTEVDVE9SID1cbiAgICAnOmlzKGJ1dHRvblt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9c3VibWl0XSwgYnV0dG9uOm5vdChbdHlwZV0pKTpub3QoW2Rpc2FibGVkXSknO1xuICBsZXQgc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBgJHtTVUJNSVRfQlVUVE9OX1NFTEVDVE9SfTpub3QoW2Zvcm1dKWA7XG5cbiAgaWYgKGZvcm0uaWQpIHtcbiAgICBzdWJtaXRCdXR0b25TZWxlY3RvciArPSBgLCR7U1VCTUlUX0JVVFRPTl9TRUxFQ1RPUn1bZm9ybT0nJHtmb3JtLmlkfSddYDtcbiAgfVxuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgRWxlbWVudDtcbiAgICBpZiAodGFyZ2V0LmNsb3Nlc3Qoc3VibWl0QnV0dG9uU2VsZWN0b3IpKSB7XG4gICAgICAvLyB2YWxpZGF0ZVxuICAgICAgY29uc3QgZWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGZvcm0pO1xuXG4gICAgICAvKipcbiAgICAgICAqIElmIHRoaXMgZm9ybSBkb2VzIG5vdCB2YWxpZGF0ZSB0aGVuIHdlJ3JlIGRvbmVcbiAgICAgICAqL1xuICAgICAgaWYgKGZvcm0ubm9WYWxpZGF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8qKiBJZiB0aGUgU2V0IGhhcyBpdGVtcywgY29udGludWUgKi9cbiAgICAgIGlmIChlbGVtZW50cy5zaXplKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShlbGVtZW50cyk7XG4gICAgICAgIC8qKiBDaGVjayB0aGUgaW50ZXJuYWxzLmNoZWNrVmFsaWRpdHkoKSBvZiBhbGwgbm9kZXMgKi9cbiAgICAgICAgY29uc3QgdmFsaWRpdHlMaXN0ID0gbm9kZXMucmV2ZXJzZSgpLm1hcCgobm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQobm9kZSk7XG4gICAgICAgICAgcmV0dXJuIGludGVybmFscy5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKiogSWYgYW55IG5vZGUgaXMgZmFsc2UsIHN0b3AgdGhlIGV2ZW50ICovXG4gICAgICAgIGlmICh2YWxpZGl0eUxpc3QuaW5jbHVkZXMoZmFsc2UpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIFRoZSBnbG9iYWwgZm9ybSByZXNldCBjYWxsYmFjay4gVGhpcyB3aWxsIGxvb3Agb3ZlciBhZGRlZFxuICogaW5wdXRzIGFuZCBjYWxsIGZvcm1SZXNldENhbGxiYWNrIGlmIGFwcGxpY2FibGVcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtUmVzZXRDYWxsYmFjayA9IChldmVudDogRXZlbnQpID0+IHtcbiAgLyoqIEdldCB0aGUgU2V0IG9mIGVsZW1lbnRzIGF0dGFjaGVkIHRvIHRoaXMgZm9ybSAqL1xuICBjb25zdCBlbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZXZlbnQudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudCk7XG5cbiAgLyoqIFNvbWUgZm9ybXMgd29uJ3QgY29udGFpbiBmb3JtIGFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnRzICovXG4gIGlmIChlbGVtZW50cyAmJiBlbGVtZW50cy5zaXplKSB7XG4gICAgLyoqIExvb3Agb3ZlciB0aGUgZWxlbWVudHMgYW5kIGNhbGwgZm9ybVJlc2V0Q2FsbGJhY2sgaWYgYXBwbGljYWJsZSAqL1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmICgoZWxlbWVudC5jb25zdHJ1Y3RvciBhcyBhbnkpLmZvcm1Bc3NvY2lhdGVkICYmIGVsZW1lbnQuZm9ybVJlc2V0Q2FsbGJhY2spIHtcbiAgICAgICAgZWxlbWVudC5mb3JtUmVzZXRDYWxsYmFjay5hcHBseShlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBmb3JtLiBXZSB3aWxsIG5lZWQgdG8gYWRkIHN1Ym1pdCBhbmQgcmVzZXQgbGlzdGVuZXJzXG4gKiBpZiB0aGV5IGRvbid0IGFscmVhZHkgZXhpc3QuIElmIHRoZXkgZG8sIGp1c3QgYWRkIHRoZSBuZXcgcmVmIHRvIHRoZSBmb3JtLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmIC0gVGhlIGVsZW1lbnQgcmVmIHRoYXQgaW5jbHVkZXMgaW50ZXJuYWxzXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybSAtIFRoZSBmb3JtIHRoZSByZWYgYmVsb25ncyB0b1xuICogQHBhcmFtIHtFbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHMgLSBUaGUgaW50ZXJuYWxzIGZvciByZWZcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBpbml0Rm9ybSA9IChcbiAgcmVmOiBJQ3VzdG9tRWxlbWVudCxcbiAgZm9ybTogSFRNTEZvcm1FbGVtZW50LFxuICBpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzXG4pID0+IHtcbiAgaWYgKGZvcm0pIHtcbiAgICAvKiogVGhpcyB3aWxsIGJlIGEgV2Vha01hcDxIVE1MRm9ybUVsZW1lbnQsIFNldDxIVE1MRWxlbWVudD4gKi9cbiAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGZvcm0pO1xuXG4gICAgaWYgKGZvcm1FbGVtZW50cykge1xuICAgICAgLyoqIElmIGZvcm1FbGVtZW50cyBleGlzdHMsIGFkZCB0byBpdCAqL1xuICAgICAgZm9ybUVsZW1lbnRzLmFkZChyZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiogSWYgZm9ybUVsZW1lbnRzIGRvZXNuJ3QgZXhpc3QsIGNyZWF0ZSBpdCBhbmQgYWRkIHRvIGl0ICovXG4gICAgICBjb25zdCBpbml0U2V0ID0gbmV3IFNldDxJQ3VzdG9tRWxlbWVudD4oKTtcbiAgICAgIGluaXRTZXQuYWRkKHJlZik7XG4gICAgICBmb3JtRWxlbWVudHNNYXAuc2V0KGZvcm0sIGluaXRTZXQpO1xuXG4gICAgICAvKiogQWRkIGxpc3RlbmVycyB0byBlbXVsYXRlIHZhbGlkYXRpb24gYW5kIHJlc2V0IGJlaGF2aW9yICovXG4gICAgICB3aXJlU3VibWl0TG9naWMoZm9ybSk7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgZm9ybVJlc2V0Q2FsbGJhY2spO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZvcm1JbnB1dENhbGxiYWNrKTtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZm9ybUNoYW5nZUNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBmb3Jtc01hcC5zZXQoZm9ybSwgeyByZWYsIGludGVybmFscyB9KTtcblxuICAgIC8qKiBDYWxsIGZvcm1Bc3NvY2lhdGVkQ2FsbGJhY2sgaWYgYXBwbGljYWJsZSAqL1xuICAgIGlmIChyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10gJiYgcmVmLmZvcm1Bc3NvY2lhdGVkQ2FsbGJhY2spIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZWYuZm9ybUFzc29jaWF0ZWRDYWxsYmFjay5hcHBseShyZWYsIFtmb3JtXSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gICAgc2V0Rm9ybVZhbGlkaXR5KGZvcm0pO1xuICB9XG59O1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IGxvb2sgZm9yIGFuIGVsZW1lbnQncyBwYXJlbnQgZm9ybVxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtIC0gVGhlIGVsZW1lbnQgdG8gbG9vayBmb3IgYSBwYXJlbnQgZm9ybVxuICogQHJldHVybiB7SFRNTEZvcm1FbGVtZW50fG51bGx9IC0gVGhlIHBhcmVudCBmb3JtLCBpZiBvbmUgZXhpc3RzXG4gKi9cbmV4cG9ydCBjb25zdCBmaW5kUGFyZW50Rm9ybSA9IChlbGVtKSA9PiB7XG4gIGxldCBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG4gIGlmIChwYXJlbnQgJiYgcGFyZW50LnRhZ05hbWUgIT09ICdGT1JNJykge1xuICAgIHBhcmVudCA9IGZpbmRQYXJlbnRGb3JtKHBhcmVudCk7XG4gIH1cbiAgcmV0dXJuIHBhcmVudDtcbn07XG5cbi8qKlxuICogVGhyb3cgYW4gZXJyb3IgaWYgdGhlIGVsZW1lbnQgcmVmIGlzIG5vdCBmb3JtIGFzc29jaWF0ZWRcbiAqIEBwYXJhbSByZWYge0lDdXN0b21FbGVtZW50fSAtIFRoZSBlbGVtZW50IHRvIGNoZWNrIGlmIGl0IGlzIGZvcm0gYXNzb2NpYXRlZFxuICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gLSBUaGUgZXJyb3IgbWVzc2FnZSB0byB0aHJvd1xuICogQHBhcmFtIEVycm9yVHlwZSB7YW55fSAtIFRoZSBlcnJvciB0eXBlIHRvIHRocm93LCBkZWZhdWx0cyB0byBET01FeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZCA9IChcbiAgcmVmOiBJQ3VzdG9tRWxlbWVudCxcbiAgbWVzc2FnZTogc3RyaW5nLFxuICBFcnJvclR5cGU6IGFueSA9IERPTUV4Y2VwdGlvblxuKTogdm9pZCA9PiB7XG4gIGlmICghcmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yVHlwZShtZXNzYWdlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgZm9yIGVhY2ggSFRNTEZvcm1FbGVtZW50LmNoZWNrVmFsaWRpdHl8cmVwb3J0VmFsaWRpdHlcbiAqIHdpbGwgbG9vcCBvdmVyIGEgZm9ybSdzIGFkZGVkIGNvbXBvbmVudHMgYW5kIGNhbGwgdGhlIHJlc3BlY3RpdmVcbiAqIG1ldGhvZCBtb2RpZnlpbmcgdGhlIGRlZmF1bHQgcmV0dXJuIHZhbHVlIGlmIG5lZWRlZFxuICogQHBhcmFtIGZvcm0ge0hUTUxGb3JtRWxlbWVudH0gLSBUaGUgZm9ybSBlbGVtZW50IHRvIHJ1biB0aGUgbWV0aG9kIG9uXG4gKiBAcGFyYW0gcmV0dXJuVmFsdWUge2Jvb2xlYW59IC0gVGhlIGluaXRpYWwgcmVzdWx0IG9mIHRoZSBvcmlnaW5hbCBtZXRob2RcbiAqIEBwYXJhbSBtZXRob2QgeydjaGVja1ZhbGlkaXR5J3wncmVwb3J0VmFsaWRpdHknfSAtIFRoZSBvcmlnaW5hbCBtZXRob2RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUaGUgZm9ybSdzIHZhbGlkaXR5IHN0YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBvdmVycmlkZUZvcm1NZXRob2QgPSAoXG4gIGZvcm06IEhUTUxGb3JtRWxlbWVudCxcbiAgcmV0dXJuVmFsdWU6IGJvb2xlYW4sXG4gIG1ldGhvZDogJ2NoZWNrVmFsaWRpdHknIHwgJ3JlcG9ydFZhbGlkaXR5J1xuKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChmb3JtKTtcblxuICAvKiogU29tZSBmb3JtcyB3b24ndCBjb250YWluIGZvcm0gYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudHMgKi9cbiAgaWYgKGVsZW1lbnRzICYmIGVsZW1lbnRzLnNpemUpIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KGVsZW1lbnQpO1xuICAgICAgY29uc3QgdmFsaWQgPSBpbnRlcm5hbHNbbWV0aG9kXSgpO1xuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICByZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXR1cm5WYWx1ZTtcbn07XG5cbi8qKlxuICogV2lsbCB1cGdyYWRlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgYnkgaW5pdGlhbGl6aW5nIHRoZVxuICogaW5zdGFuY2UncyBmb3JtIGFuZCBsYWJlbHMuIFRoaXMgaXMgY2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgaXNcbiAqIGVpdGhlciBjb25zdHJ1Y3RlZCBvciBhcHBlbmRlZCBmcm9tIGEgRG9jdW1lbnRGcmFnbWVudFxuICogQHBhcmFtIHJlZiB7SUN1c3RvbUVsZW1lbnR9IC0gVGhlIGN1c3RvbSBlbGVtZW50IHRvIHVwZ3JhZGVcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZ3JhZGVJbnRlcm5hbHMgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCkgPT4ge1xuICBpZiAocmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChyZWYpO1xuICAgIGNvbnN0IHsgbGFiZWxzLCBmb3JtIH0gPSBpbnRlcm5hbHM7XG4gICAgaW5pdExhYmVscyhyZWYsIGxhYmVscyk7XG4gICAgaW5pdEZvcm0ocmVmLCBmb3JtLCBpbnRlcm5hbHMpO1xuICB9XG59O1xuXG4vKipcbiAqIENoZWNrIHRvIHNlZSBpZiBNdXRhdGlvbk9ic2VydmVyIGV4aXN0cyBpbiB0aGUgY3VycmVudFxuICogZXhlY3V0aW9uIGNvbnRleHQuIFdpbGwgbGlrZWx5IHJldHVybiBmYWxzZSBvbiB0aGUgc2VydmVyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG59XG4iLCAiaW1wb3J0IHsgc2V0Rm9ybVZhbGlkaXR5IH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKiBFbXVsYXRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBWYWxpZGl0eVN0YXRlIG9iamVjdCAqL1xuZXhwb3J0IGNsYXNzIFZhbGlkaXR5U3RhdGUgaW1wbGVtZW50cyBnbG9iYWxUaGlzLlZhbGlkaXR5U3RhdGUge1xuICBiYWRJbnB1dCA9IGZhbHNlO1xuICBjdXN0b21FcnJvciA9IGZhbHNlO1xuICBwYXR0ZXJuTWlzbWF0Y2ggPSBmYWxzZTtcbiAgcmFuZ2VPdmVyZmxvdyA9IGZhbHNlO1xuICByYW5nZVVuZGVyZmxvdyA9IGZhbHNlO1xuICBzdGVwTWlzbWF0Y2ggPSBmYWxzZTtcbiAgdG9vTG9uZyA9IGZhbHNlO1xuICB0b29TaG9ydCA9IGZhbHNlO1xuICB0eXBlTWlzbWF0Y2ggPSBmYWxzZTtcbiAgdmFsaWQgPSB0cnVlO1xuICB2YWx1ZU1pc3NpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBPYmplY3Quc2VhbCh0aGlzKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0IGEgVmFsaWRpdHlTdGF0ZSBvYmplY3QgYmFjayB0byB2YWxpZFxuICogQHBhcmFtIHtWYWxpZGl0eVN0YXRlfSB2YWxpZGl0eU9iamVjdCAtIFRoZSBvYmplY3QgdG8gbW9kaWZ5XG4gKiBAcmV0dXJuIHtWYWxpZGl0eVN0YXRlfSAtIFRoZSBtb2RpZmllZCBWYWxpZGl0eVN0YXRlT2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBzZXRWYWxpZCA9ICh2YWxpZGl0eU9iamVjdDogVmFsaWRpdHlTdGF0ZSk6IFZhbGlkaXR5U3RhdGUgPT4ge1xuICB2YWxpZGl0eU9iamVjdC5iYWRJbnB1dCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC5jdXN0b21FcnJvciA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC5wYXR0ZXJuTWlzbWF0Y2ggPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QucmFuZ2VPdmVyZmxvdyA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC5yYW5nZVVuZGVyZmxvdyA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC5zdGVwTWlzbWF0Y2ggPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QudG9vTG9uZyA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC50b29TaG9ydCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC50eXBlTWlzbWF0Y2ggPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QudmFsaWQgPSB0cnVlO1xuICB2YWxpZGl0eU9iamVjdC52YWx1ZU1pc3NpbmcgPSBmYWxzZTtcbiAgcmV0dXJuIHZhbGlkaXR5T2JqZWN0O1xufTtcblxuLyoqXG4gKiBSZWNvbmNpbGUgYSBWYWxpZGl0eVN0YXRlIG9iamVjdCB3aXRoIGEgbmV3IHN0YXRlIG9iamVjdFxuICogQHBhcmFtIHtWYWxpZGl0eVN0YXRlfSAtIFRoZSBiYXNlIG9iamVjdCB0byByZWNvbmNpbGUgd2l0aCBuZXcgc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSAtIEEgcGFydGlhbCBWYWxpZGl0eVN0YXRlIG9iamVjdCB0byBvdmVycmlkZSB0aGUgb3JpZ2luYWxcbiAqIEByZXR1cm4ge1ZhbGlkaXR5U3RhdGV9IC0gVGhlIHVwZGF0ZWQgVmFsaWRpdHlTdGF0ZSBvYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IHJlY29uY2lsZVZhbGlkaXR5ID0gKFxuICB2YWxpZGl0eU9iamVjdDogVmFsaWRpdHlTdGF0ZSxcbiAgbmV3U3RhdGU6IFBhcnRpYWw8VmFsaWRpdHlTdGF0ZT4sXG4gIGZvcm06IEhUTUxGb3JtRWxlbWVudFxuKTogVmFsaWRpdHlTdGF0ZSA9PiB7XG4gIHZhbGlkaXR5T2JqZWN0LnZhbGlkID0gaXNWYWxpZChuZXdTdGF0ZSk7XG4gIE9iamVjdC5rZXlzKG5ld1N0YXRlKS5mb3JFYWNoKChrZXkpID0+ICh2YWxpZGl0eU9iamVjdFtrZXldID0gbmV3U3RhdGVba2V5XSkpO1xuICBpZiAoZm9ybSkge1xuICAgIHNldEZvcm1WYWxpZGl0eShmb3JtKTtcbiAgfVxuICByZXR1cm4gdmFsaWRpdHlPYmplY3Q7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGEgcGFydGlhbCBWYWxpZGl0eVN0YXRlIG9iamVjdCBzaG91bGQgYmUgdmFsaWRcbiAqIEBwYXJhbSB7T2JqZWN0fSAtIEEgcGFydGlhbCBWYWxpZGl0eVN0YXRlIG9iamVjdFxuICogQHJldHVybiB7Qm9vbGVhbn0gLSBTaG91bGQgdGhlIG5ldyBvYmplY3QgYmUgdmFsaWRcbiAqL1xuZXhwb3J0IGNvbnN0IGlzVmFsaWQgPSAodmFsaWRpdHlTdGF0ZTogUGFydGlhbDxWYWxpZGl0eVN0YXRlPik6IGJvb2xlYW4gPT4ge1xuICBsZXQgdmFsaWQgPSB0cnVlO1xuICBmb3IgKGxldCBrZXkgaW4gdmFsaWRpdHlTdGF0ZSkge1xuICAgIGlmIChrZXkgIT09ICd2YWxpZCcgJiYgdmFsaWRpdHlTdGF0ZVtrZXldICE9PSBmYWxzZSkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbGlkO1xufTtcbiIsICJpbXBvcnQgeyBJQ3VzdG9tRWxlbWVudCB9IGZyb20gJy4vdHlwZXMuanMnO1xuXG4vKiogU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgcmVmIGZvciB0ZWggQ3VzdG9tU3RhdGVTZXQgKi9cbmNvbnN0IGN1c3RvbVN0YXRlTWFwID0gbmV3IFdlYWtNYXA8Q3VzdG9tU3RhdGVTZXQsIElDdXN0b21FbGVtZW50PigpO1xuXG5mdW5jdGlvbiBhZGRTdGF0ZShyZWY6IElDdXN0b21FbGVtZW50LCBzdGF0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICByZWYudG9nZ2xlQXR0cmlidXRlKHN0YXRlTmFtZSwgdHJ1ZSk7XG4gIGlmIChyZWYucGFydCkge1xuICAgIHJlZi5wYXJ0LmFkZChzdGF0ZU5hbWUpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEN1c3RvbVN0YXRlID0gYC0tJHtzdHJpbmd9YDtcblxuZXhwb3J0IGNsYXNzIEN1c3RvbVN0YXRlU2V0IGV4dGVuZHMgU2V0PEN1c3RvbVN0YXRlPiB7XG4gIHN0YXRpYyBnZXQgaXNQb2x5ZmlsbGVkKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocmVmOiBJQ3VzdG9tRWxlbWVudCkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKCFyZWYgfHwgIXJlZi50YWdOYW1lIHx8IHJlZi50YWdOYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0lsbGVnYWwgY29uc3RydWN0b3InKTtcbiAgICB9XG5cbiAgICBjdXN0b21TdGF0ZU1hcC5zZXQodGhpcywgcmVmKTtcbiAgfVxuXG4gIGFkZChzdGF0ZTogQ3VzdG9tU3RhdGUpIHtcbiAgICBpZiAoIS9eLS0vLnRlc3Qoc3RhdGUpIHx8IHR5cGVvZiBzdGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnYWRkJyBvbiAnQ3VzdG9tU3RhdGVTZXQnOiBUaGUgc3BlY2lmaWVkIHZhbHVlICR7c3RhdGV9IG11c3Qgc3RhcnQgd2l0aCAnLS0nLmBcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLmFkZChzdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gY3VzdG9tU3RhdGVNYXAuZ2V0KHRoaXMpO1xuICAgIGNvbnN0IHN0YXRlTmFtZSA9IGBzdGF0ZSR7c3RhdGV9YDtcblxuICAgIC8qKlxuICAgICAqIE9ubHkgYWRkIHRoZSBzdGF0ZSBpbW1lZGlhdGVseSBpZiB0aGUgcmVmIGlzIGNvbm5lY3RlZCB0byB0aGUgRE9NO1xuICAgICAqIG90aGVyd2lzZSwgd2FpdCBhIHRpY2sgYmVjYXVzZSB0aGUgZWxlbWVudCBpcyBsaWtlbHkgYmVpbmcgY29uc3RydWN0ZWRcbiAgICAgKiBieSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGFuZCB3b3VsZCB0aHJvdyBvdGhlcndpc2UuXG4gICAgICovXG4gICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgYWRkU3RhdGUocmVmLCBzdGF0ZU5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYWRkU3RhdGUocmVmLCBzdGF0ZU5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGZvciAobGV0IFtlbnRyeV0gb2YgdGhpcy5lbnRyaWVzKCkpIHtcbiAgICAgIHRoaXMuZGVsZXRlKGVudHJ5KTtcbiAgICB9XG4gICAgc3VwZXIuY2xlYXIoKTtcbiAgfVxuXG4gIGRlbGV0ZShzdGF0ZTogQ3VzdG9tU3RhdGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5kZWxldGUoc3RhdGUpO1xuICAgIGNvbnN0IHJlZiA9IGN1c3RvbVN0YXRlTWFwLmdldCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIE9ubHkgdG9nZ2xlIHRoZSBzdGF0ZS9hdHRyIGltbWVkaWF0ZWx5IGlmIHRoZSByZWYgaXMgY29ubmVjdGVkIHRvIHRoZSBET007XG4gICAgICogb3RoZXJ3aXNlLCB3YWl0IGEgdGljayBiZWNhdXNlIHRoZSBlbGVtZW50IGlzIGxpa2VseSBiZWluZyBjb25zdHJ1Y3RlZFxuICAgICAqIGJ5IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgYW5kIHdvdWxkIHRocm93IG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBpZiAocmVmLmlzQ29ubmVjdGVkKSB7XG4gICAgICByZWYudG9nZ2xlQXR0cmlidXRlKGBzdGF0ZSR7c3RhdGV9YCwgZmFsc2UpO1xuICAgICAgaWYgKHJlZi5wYXJ0KSB7XG4gICAgICAgIHJlZi5wYXJ0LnJlbW92ZShgc3RhdGUke3N0YXRlfWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZShgc3RhdGUke3N0YXRlfWAsIGZhbHNlKTtcbiAgICAgICAgaWYgKHJlZi5wYXJ0KSB7XG4gICAgICAgICAgcmVmLnBhcnQucmVtb3ZlKGBzdGF0ZSR7c3RhdGV9YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsICJleHBvcnQgY2xhc3MgSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24gaW1wbGVtZW50cyBnbG9iYWxUaGlzLkhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uIHtcbiAgcmVhZG9ubHkgI2VsZW1lbnRzO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRzKSB7XG4gICAgdGhpcy4jZWxlbWVudHMgPSBlbGVtZW50cztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG5cbiAgICAgIHRoaXNbaV0gPSBlbGVtZW50O1xuICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCduYW1lJykpIHtcbiAgICAgICAgdGhpc1tlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpXSA9IGVsZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIFtpbmRleDogbnVtYmVyXTogRWxlbWVudDtcblxuICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuI2VsZW1lbnRzLmxlbmd0aDtcbiAgfVxuXG4gIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgIHJldHVybiB0aGlzLiNlbGVtZW50c1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gIH1cblxuICBpdGVtKGkpOiBFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpc1tpXSA9PSBudWxsID8gbnVsbCA6IHRoaXNbaV07XG4gIH1cblxuICBuYW1lZEl0ZW0obmFtZSk6IEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzW25hbWVdID09IG51bGwgPyBudWxsIDogdGhpc1tuYW1lXTtcbiAgfVxufVxuIiwgImltcG9ydCB7IEhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uIH0gZnJvbSAnLi9IVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbi5qcyc7XG5pbXBvcnQgeyBmb3JtRWxlbWVudHNNYXAgfSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHsgb3ZlcnJpZGVGb3JtTWV0aG9kIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogUGF0Y2ggdGhlIEhUTUxFbGVtZW50IHByb3RvdHlwZVxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcGF0Y2hlcyBjaGVja1ZhbGlkaXR5LCByZXBvcnRWYWxpZGl0eSBhbmQgZWxlbWVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoRm9ybVByb3RvdHlwZSgpOiB2b2lkIHtcbiAgY29uc3QgY2hlY2tWYWxpZGl0eSA9IEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUuY2hlY2tWYWxpZGl0eTtcbiAgSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5jaGVja1ZhbGlkaXR5ID0gY2hlY2tWYWxpZGl0eU92ZXJyaWRlO1xuXG4gIGNvbnN0IHJlcG9ydFZhbGlkaXR5ID0gSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5yZXBvcnRWYWxpZGl0eTtcbiAgSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5yZXBvcnRWYWxpZGl0eSA9IHJlcG9ydFZhbGlkaXR5T3ZlcnJpZGU7XG5cbiAgZnVuY3Rpb24gY2hlY2tWYWxpZGl0eU92ZXJyaWRlKC4uLmFyZ3MpOiBib29sZWFuIHtcbiAgICBsZXQgcmV0dXJuVmFsdWUgPSBjaGVja1ZhbGlkaXR5LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHJldHVybiBvdmVycmlkZUZvcm1NZXRob2QodGhpcywgcmV0dXJuVmFsdWUsICdjaGVja1ZhbGlkaXR5Jyk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBvcnRWYWxpZGl0eU92ZXJyaWRlKC4uLmFyZ3MpOiBib29sZWFuIHtcbiAgICBsZXQgcmV0dXJuVmFsdWUgPSByZXBvcnRWYWxpZGl0eS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICByZXR1cm4gb3ZlcnJpZGVGb3JtTWV0aG9kKHRoaXMsIHJldHVyblZhbHVlLCAncmVwb3J0VmFsaWRpdHknKTtcbiAgfVxuXG4gIGNvbnN0IHsgZ2V0IH0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUsICdlbGVtZW50cycpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZSwgJ2VsZW1lbnRzJywge1xuICAgIGdldCguLi5hcmdzKSB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IGdldC5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuICAgICAgY29uc3QgcG9seWZpbGxlZEVsZW1lbnRzID0gQXJyYXkuZnJvbShmb3JtRWxlbWVudHNNYXAuZ2V0KHRoaXMpIHx8IFtdKTtcblxuICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHBvbHlmaWxsZWQgZWxlbWVudHMsIHJldHVybiB0aGUgbmF0aXZlIGVsZW1lbnRzIGNvbGxlY3Rpb25cbiAgICAgIGlmIChwb2x5ZmlsbGVkRWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50cztcbiAgICAgIH1cblxuICAgICAgLy8gTWVyZ2UgdGhlIG5hdGl2ZSBlbGVtZW50cyB3aXRoIHRoZSBwb2x5ZmlsbGVkIGVsZW1lbnRzXG4gICAgICAvLyBhbmQgb3JkZXIgdGhlbSBieSB0aGVpciBwb3NpdGlvbiBpbiB0aGUgRE9NXG4gICAgICBjb25zdCBvcmRlcmVkRWxlbWVudHMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKVxuICAgICAgICAuY29uY2F0KHBvbHlmaWxsZWRFbGVtZW50cylcbiAgICAgICAgLnNvcnQoKGE6IEVsZW1lbnQsIGI6IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICBpZiAoYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYikgJiAyID8gMSA6IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBuZXcgSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24ob3JkZXJlZEVsZW1lbnRzKTtcbiAgICB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBjb25uZWN0ZWRDYWxsYmFja01hcCxcbiAgaW50ZXJuYWxzTWFwLFxuICByZWZNYXAsXG4gIHJlZlZhbHVlTWFwLFxuICBzaGFkb3dIb3N0c01hcCxcbiAgc2hhZG93Um9vdE1hcCxcbiAgdmFsaWRhdGlvbkFuY2hvck1hcCxcbiAgdmFsaWRpdHlNYXAsXG4gIHZhbGlkYXRpb25NZXNzYWdlTWFwLFxuICB2YWxpZGl0eVVwZ3JhZGVNYXAsXG59IGZyb20gJy4vbWFwcy5qcyc7XG5pbXBvcnQge1xuICBjcmVhdGVIaWRkZW5JbnB1dCxcbiAgZmluZFBhcmVudEZvcm0sXG4gIGluaXRSZWYsXG4gIG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMsXG4gIHJlbW92ZUhpZGRlbklucHV0cyxcbiAgc2V0RGlzYWJsZWQsXG4gIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZCxcbiAgdXBncmFkZUludGVybmFscyxcbn0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBpbml0QW9tIH0gZnJvbSAnLi9hb20uanMnO1xuaW1wb3J0IHsgVmFsaWRpdHlTdGF0ZSwgcmVjb25jaWxlVmFsaWRpdHksIHNldFZhbGlkIH0gZnJvbSAnLi9WYWxpZGl0eVN0YXRlLmpzJztcbmltcG9ydCB7IGRlZmVyVXBncmFkZSwgb2JzZXJ2ZXJDYWxsYmFjaywgb2JzZXJ2ZXJDb25maWcgfSBmcm9tICcuL211dGF0aW9uLW9ic2VydmVycy5qcyc7XG5pbXBvcnQgeyBJRWxlbWVudEludGVybmFscywgSUN1c3RvbUVsZW1lbnQsIExhYmVsc0xpc3QgfSBmcm9tICcuL3R5cGVzLmpzJztcbmltcG9ydCB7IEN1c3RvbVN0YXRlU2V0IH0gZnJvbSAnLi9DdXN0b21TdGF0ZVNldC5qcyc7XG5pbXBvcnQgeyBwYXRjaEZvcm1Qcm90b3R5cGUgfSBmcm9tICcuL3BhdGNoLWZvcm0tcHJvdG90eXBlLmpzJztcbmltcG9ydCB7IGlzU2VydmVyIH0gZnJvbSAnbGl0LWh0bWwvaXMtc2VydmVyLmpzJztcblxuZXhwb3J0IGNsYXNzIEVsZW1lbnRJbnRlcm5hbHMgaW1wbGVtZW50cyBJRWxlbWVudEludGVybmFscyB7XG4gIGFyaWFBdG9taWM6IHN0cmluZztcbiAgYXJpYUF1dG9Db21wbGV0ZTogc3RyaW5nO1xuICBhcmlhQnVzeTogc3RyaW5nO1xuICBhcmlhQ2hlY2tlZDogc3RyaW5nO1xuICBhcmlhQ29sQ291bnQ6IHN0cmluZztcbiAgYXJpYUNvbEluZGV4OiBzdHJpbmc7XG4gIGFyaWFDb2xJbmRleFRleHQ6IHN0cmluZztcbiAgYXJpYUNvbFNwYW46IHN0cmluZztcbiAgYXJpYUN1cnJlbnQ6IHN0cmluZztcbiAgYXJpYURpc2FibGVkOiBzdHJpbmc7XG4gIGFyaWFFeHBhbmRlZDogc3RyaW5nO1xuICBhcmlhSGFzUG9wdXA6IHN0cmluZztcbiAgYXJpYUhpZGRlbjogc3RyaW5nO1xuICBhcmlhSW52YWxpZDogc3RyaW5nO1xuICBhcmlhS2V5U2hvcnRjdXRzOiBzdHJpbmc7XG4gIGFyaWFMYWJlbDogc3RyaW5nO1xuICBhcmlhTGV2ZWw6IHN0cmluZztcbiAgYXJpYUxpdmU6IHN0cmluZztcbiAgYXJpYU1vZGFsOiBzdHJpbmc7XG4gIGFyaWFNdWx0aUxpbmU6IHN0cmluZztcbiAgYXJpYU11bHRpU2VsZWN0YWJsZTogc3RyaW5nO1xuICBhcmlhT3JpZW50YXRpb246IHN0cmluZztcbiAgYXJpYVBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIGFyaWFQb3NJblNldDogc3RyaW5nO1xuICBhcmlhUHJlc3NlZDogc3RyaW5nO1xuICBhcmlhUmVhZE9ubHk6IHN0cmluZztcbiAgYXJpYVJlbGV2YW50OiBzdHJpbmc7XG4gIGFyaWFSZXF1aXJlZDogc3RyaW5nO1xuICBhcmlhUm9sZURlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFyaWFSb3dDb3VudDogc3RyaW5nO1xuICBhcmlhUm93SW5kZXg6IHN0cmluZztcbiAgYXJpYVJvd0luZGV4VGV4dDogc3RyaW5nO1xuICBhcmlhUm93U3Bhbjogc3RyaW5nO1xuICBhcmlhU2VsZWN0ZWQ6IHN0cmluZztcbiAgYXJpYVNldFNpemU6IHN0cmluZztcbiAgYXJpYVNvcnQ6IHN0cmluZztcbiAgYXJpYVZhbHVlTWF4OiBzdHJpbmc7XG4gIGFyaWFWYWx1ZU1pbjogc3RyaW5nO1xuICBhcmlhVmFsdWVOb3c6IHN0cmluZztcbiAgYXJpYVZhbHVlVGV4dDogc3RyaW5nO1xuICByb2xlOiBzdHJpbmc7XG5cbiAgc3RhdGVzOiBDdXN0b21TdGF0ZVNldDtcblxuICBzdGF0aWMgZ2V0IGlzUG9seWZpbGxlZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJlZjogSUN1c3RvbUVsZW1lbnQpIHtcbiAgICBpZiAoIXJlZiB8fCAhcmVmLnRhZ05hbWUgfHwgcmVmLnRhZ05hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSWxsZWdhbCBjb25zdHJ1Y3RvcicpO1xuICAgIH1cbiAgICBjb25zdCByb290Tm9kZSA9IHJlZi5nZXRSb290Tm9kZSgpO1xuICAgIGNvbnN0IHZhbGlkaXR5ID0gbmV3IFZhbGlkaXR5U3RhdGUoKTtcbiAgICB0aGlzLnN0YXRlcyA9IG5ldyBDdXN0b21TdGF0ZVNldChyZWYpO1xuICAgIHJlZk1hcC5zZXQodGhpcywgcmVmKTtcbiAgICB2YWxpZGl0eU1hcC5zZXQodGhpcywgdmFsaWRpdHkpO1xuICAgIGludGVybmFsc01hcC5zZXQocmVmLCB0aGlzKTtcbiAgICBpbml0QW9tKHJlZiwgdGhpcyk7XG4gICAgaW5pdFJlZihyZWYsIHRoaXMpO1xuICAgIE9iamVjdC5zZWFsKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogSWYgYXBwZW5kZWQgZnJvbSBhIERvY3VtZW50RnJhZ21lbnQsIHdhaXQgdW50aWwgaXQgaXMgY29ubmVjdGVkXG4gICAgICogYmVmb3JlIGF0dGVtcHRpbmcgdG8gdXBncmFkZSB0aGUgaW50ZXJuYWxzIGluc3RhbmNlXG4gICAgICovXG4gICAgaWYgKHJvb3ROb2RlIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgZGVmZXJVcGdyYWRlKHJvb3ROb2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBpbiBhIHZhbGlkIHN0YXRlXG4gICAqL1xuICBjaGVja1ZhbGlkaXR5KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdjaGVja1ZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgLyoqIElmIHRoZSBlbGVtZW50IHdpbGwgbm90IHZhbGlkYXRlLCBpdCBpcyBuZWNlc3NhcmlseSB2YWxpZCBieSBkZWZhdWx0ICovXG4gICAgaWYgKCF0aGlzLndpbGxWYWxpZGF0ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHZhbGlkaXR5ID0gdmFsaWRpdHlNYXAuZ2V0KHRoaXMpO1xuICAgIGlmICghdmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGNvbnN0IHZhbGlkaXR5RXZlbnQgPSBuZXcgRXZlbnQoJ2ludmFsaWQnLCB7XG4gICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICBjb21wb3NlZDogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIHJlZi5kaXNwYXRjaEV2ZW50KHZhbGlkaXR5RXZlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWRpdHkudmFsaWQ7XG4gIH1cblxuICAvKiogVGhlIGZvcm0gZWxlbWVudCB0aGUgY3VzdG9tIGVsZW1lbnQgaXMgYXNzb2NpYXRlZCB3aXRoICovXG4gIGdldCBmb3JtKCk6IEhUTUxGb3JtRWxlbWVudCB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIHJlYWQgdGhlICdmb3JtJyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBsZXQgZm9ybTtcbiAgICBpZiAocmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddID09PSB0cnVlKSB7XG4gICAgICBmb3JtID0gZmluZFBhcmVudEZvcm0ocmVmKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm07XG4gIH1cblxuICAvKiogQSBsaXN0IG9mIGFsbCByZWxhdGl2ZSBmb3JtIGxhYmVscyBmb3IgdGhpcyBlbGVtZW50ICovXG4gIGdldCBsYWJlbHMoKTogTGFiZWxzTGlzdCB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIHJlYWQgdGhlICdsYWJlbHMnIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGNvbnN0IGlkID0gcmVmLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBjb25zdCBob3N0Um9vdCA9IHJlZi5nZXRSb290Tm9kZSgpIGFzIEVsZW1lbnQ7XG4gICAgaWYgKGhvc3RSb290ICYmIGlkKSB7XG4gICAgICByZXR1cm4gaG9zdFJvb3QucXVlcnlTZWxlY3RvckFsbDxIVE1MTGFiZWxFbGVtZW50PihgW2Zvcj1cIiR7aWR9XCJdYCkgYXMgdW5rbm93biBhcyBMYWJlbHNMaXN0O1xuICAgIH1cbiAgICByZXR1cm4gW10gYXMgdW5rbm93biBhcyBMYWJlbHNMaXN0O1xuICB9XG5cbiAgLyoqIFdpbGwgcmVwb3J0IHRoZSBlbGVtZW50cyB2YWxpZGl0eSBzdGF0ZSAqL1xuICByZXBvcnRWYWxpZGl0eSgpOiBib29sZWFuIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAncmVwb3J0VmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICAvKiogSWYgdGhlIGVsZW1lbnQgd2lsbCBub3QgdmFsaWRhdGUsIGl0IGlzIHZhbGlkIGJ5IGRlZmF1bHQgKi9cbiAgICBpZiAoIXRoaXMud2lsbFZhbGlkYXRlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgdmFsaWQgPSB0aGlzLmNoZWNrVmFsaWRpdHkoKTtcbiAgICBjb25zdCBhbmNob3IgPSB2YWxpZGF0aW9uQW5jaG9yTWFwLmdldCh0aGlzKTtcbiAgICBpZiAoYW5jaG9yICYmICFyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAncmVwb3J0VmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIXZhbGlkICYmIGFuY2hvcikge1xuICAgICAgcmVmLmZvY3VzKCk7XG4gICAgICBhbmNob3IuZm9jdXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIGVsZW1lbnQncyB2YWx1ZSB3aXRoaW4gdGhlIGZvcm0gKi9cbiAgc2V0Rm9ybVZhbHVlKHZhbHVlOiBzdHJpbmcgfCBGb3JtRGF0YSB8IG51bGwpOiB2b2lkIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnc2V0Rm9ybVZhbHVlJyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgcmVtb3ZlSGlkZGVuSW5wdXRzKHRoaXMpO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmICEodmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSkpIHtcbiAgICAgIGlmIChyZWYuZ2V0QXR0cmlidXRlKCduYW1lJykpIHtcbiAgICAgICAgY29uc3QgaGlkZGVuSW5wdXQgPSBjcmVhdGVIaWRkZW5JbnB1dChyZWYsIHRoaXMpO1xuICAgICAgICBoaWRkZW5JbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICBBcnJheS5mcm9tKHZhbHVlKVxuICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgIC5mb3JFYWNoKChbZm9ybURhdGFLZXksIGZvcm1EYXRhVmFsdWVdKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBmb3JtRGF0YVZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgaGlkZGVuSW5wdXQgPSBjcmVhdGVIaWRkZW5JbnB1dChyZWYsIHRoaXMpO1xuICAgICAgICAgICAgaGlkZGVuSW5wdXQubmFtZSA9IGZvcm1EYXRhS2V5O1xuICAgICAgICAgICAgaGlkZGVuSW5wdXQudmFsdWUgPSBmb3JtRGF0YVZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlZlZhbHVlTWFwLnNldChyZWYsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBlbGVtZW50J3MgdmFsaWRpdHkuIFRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3RcbiAgICogcmVmbGVjdGluZyB0aGUgY2hhbmdlcyB0byBiZSBtYWRlIHRvIHRoZSBlbGVtZW50J3MgdmFsaWRpdHkuIElmIHRoZSBlbGVtZW50IGlzIGludmFsaWQsXG4gICAqIHRoZSBzZWNvbmQgYXJndW1lbnQgc2V0cyB0aGUgZWxlbWVudCdzIHZhbGlkYXRpb24gbWVzc2FnZS5cbiAgICpcbiAgICogSWYgdGhlIGZpZWxkIGlzIHZhbGlkIGFuZCBhIG1lc3NhZ2UgaXMgc3BlY2lmaWVkLCB0aGUgbWV0aG9kIHdpbGwgdGhyb3cgYSBUeXBlRXJyb3IuXG4gICAqL1xuICBzZXRWYWxpZGl0eShcbiAgICB2YWxpZGl0eUNoYW5nZXM6IFBhcnRpYWw8Z2xvYmFsVGhpcy5WYWxpZGl0eVN0YXRlPixcbiAgICB2YWxpZGF0aW9uTWVzc2FnZT86IHN0cmluZyxcbiAgICBhbmNob3I/OiBIVE1MRWxlbWVudFxuICApIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnc2V0VmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBpZiAoIXZhbGlkaXR5Q2hhbmdlcykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgXCJGYWlsZWQgdG8gZXhlY3V0ZSAnc2V0VmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiXG4gICAgICApO1xuICAgIH1cbiAgICB2YWxpZGF0aW9uQW5jaG9yTWFwLnNldCh0aGlzLCBhbmNob3IpO1xuICAgIGNvbnN0IHZhbGlkaXR5ID0gdmFsaWRpdHlNYXAuZ2V0KHRoaXMpO1xuICAgIGNvbnN0IHZhbGlkaXR5Q2hhbmdlc09iajogUGFydGlhbDxWYWxpZGl0eVN0YXRlPiA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIHZhbGlkaXR5Q2hhbmdlcykge1xuICAgICAgdmFsaWRpdHlDaGFuZ2VzT2JqW2tleV0gPSB2YWxpZGl0eUNoYW5nZXNba2V5XTtcbiAgICB9XG4gICAgaWYgKE9iamVjdC5rZXlzKHZhbGlkaXR5Q2hhbmdlc09iaikubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRWYWxpZCh2YWxpZGl0eSk7XG4gICAgfVxuICAgIGNvbnN0IGNoZWNrID0geyAuLi52YWxpZGl0eSwgLi4udmFsaWRpdHlDaGFuZ2VzT2JqIH07XG4gICAgZGVsZXRlIGNoZWNrLnZhbGlkO1xuICAgIGNvbnN0IHsgdmFsaWQgfSA9IHJlY29uY2lsZVZhbGlkaXR5KHZhbGlkaXR5LCBjaGVjaywgdGhpcy5mb3JtKTtcblxuICAgIGlmICghdmFsaWQgJiYgIXZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSBzZWNvbmQgYXJndW1lbnQgc2hvdWxkIG5vdCBiZSBlbXB0eSBpZiBvbmUgb3IgbW9yZSBmbGFncyBpbiB0aGUgZmlyc3QgYXJndW1lbnQgYXJlIHRydWUuYFxuICAgICAgKTtcbiAgICB9XG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VNYXAuc2V0KHRoaXMsIHZhbGlkID8gJycgOiB2YWxpZGF0aW9uTWVzc2FnZSk7XG5cbiAgICAvLyBjaGVjayB0byBtYWtlIHN1cmUgdGhlIGhvc3QgZWxlbWVudCBpcyBjb25uZWN0ZWQgYmVmb3JlIGFkZGluZyBhdHRyaWJ1dGVzXG4gICAgLy8gYmVjYXVzZSBzYWZhcmkgZG9lc250IGFsbG93IGVsZW1lbnRzIHRvIGhhdmUgYXR0cmlidXRlcyBhZGRlZCBpbiB0aGUgY29uc3RydWN0b3JcbiAgICBpZiAocmVmLmlzQ29ubmVjdGVkKSB7XG4gICAgICByZWYudG9nZ2xlQXR0cmlidXRlKCdpbnRlcm5hbHMtaW52YWxpZCcsICF2YWxpZCk7XG4gICAgICByZWYudG9nZ2xlQXR0cmlidXRlKCdpbnRlcm5hbHMtdmFsaWQnLCB2YWxpZCk7XG4gICAgICByZWYuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCBgJHshdmFsaWR9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkaXR5VXBncmFkZU1hcC5zZXQocmVmLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2hhZG93Um9vdCgpOiBTaGFkb3dSb290IHwgbnVsbCB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICBjb25zdCBzaGFkb3dSb290ID0gc2hhZG93Um9vdE1hcC5nZXQocmVmKTtcbiAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgcmV0dXJuIHNoYWRvd1Jvb3Q7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqIFRoZSBlbGVtZW50J3MgdmFsaWRhdGlvbiBtZXNzYWdlIHNldCBkdXJpbmcgYSBjYWxsIHRvIEVsZW1lbnRJbnRlcm5hbHMuc2V0VmFsaWRpdHkgKi9cbiAgZ2V0IHZhbGlkYXRpb25NZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIHJlYWQgdGhlICd2YWxpZGF0aW9uTWVzc2FnZScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgcmV0dXJuIHZhbGlkYXRpb25NZXNzYWdlTWFwLmdldCh0aGlzKTtcbiAgfVxuXG4gIC8qKiBUaGUgY3VycmVudCB2YWxpZGl0eSBzdGF0ZSBvZiB0aGUgb2JqZWN0ICovXG4gIGdldCB2YWxpZGl0eSgpOiBnbG9iYWxUaGlzLlZhbGlkaXR5U3RhdGUge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAndmFsaWRpdHknIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGNvbnN0IHZhbGlkaXR5ID0gdmFsaWRpdHlNYXAuZ2V0KHRoaXMpO1xuICAgIHJldHVybiB2YWxpZGl0eTtcbiAgfVxuXG4gIC8qKiBJZiB0cnVlIHRoZSBlbGVtZW50IHdpbGwgcGFydGljaXBhdGUgaW4gYSBmb3JtJ3MgY29uc3RyYWludCB2YWxpZGF0aW9uLiAqL1xuICBnZXQgd2lsbFZhbGlkYXRlKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAnd2lsbFZhbGlkYXRlJyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBpZiAocmVmLmRpc2FibGVkIHx8IHJlZi5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHwgcmVmLmhhc0F0dHJpYnV0ZSgncmVhZG9ubHknKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vLyAtLS0gRGlzYWJsaW5nIHRoaXMgdHlwZSBkZWNsYXJhdGlvbiB0byBhdm9pZCBjb25mbGljdCB3aXRoIGV4dGVybmFsIGVsZW1lbnQtaW50ZXJuYWxzLXBvbHlmaWxsIHR5cGVzIC0tLVxuLy8gZGVjbGFyZSBnbG9iYWwge1xuLy8gICBpbnRlcmZhY2UgQ3VzdG9tRWxlbWVudENvbnN0cnVjdG9yIHtcbi8vICAgICBmb3JtQXNzb2NpYXRlZD86IGJvb2xlYW47XG4vLyAgIH1cblxuLy8gICBpbnRlcmZhY2UgV2luZG93IHtcbi8vICAgICBFbGVtZW50SW50ZXJuYWxzOiB0eXBlb2YgRWxlbWVudEludGVybmFscztcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50SW50ZXJuYWxzU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICBpZiAoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAhd2luZG93LkVsZW1lbnRJbnRlcm5hbHMgfHxcbiAgICAhSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEludGVybmFsc1xuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjbGFzcyBFbGVtZW50SW50ZXJuYWxzRmVhdHVyZURldGVjdGlvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5pbnRlcm5hbHMgPSB0aGlzLmF0dGFjaEludGVybmFscygpO1xuICAgIH1cbiAgfVxuICBjb25zdCByYW5kb21OYW1lID0gYGVsZW1lbnQtaW50ZXJuYWxzLWZlYXR1cmUtZGV0ZWN0aW9uLSR7TWF0aC5yYW5kb20oKVxuICAgIC50b1N0cmluZygzNilcbiAgICAucmVwbGFjZSgvW15hLXpdKy9nLCAnJyl9YDtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHJhbmRvbU5hbWUsIEVsZW1lbnRJbnRlcm5hbHNGZWF0dXJlRGV0ZWN0aW9uKTtcbiAgY29uc3QgZmVhdHVyZURldGVjdGlvbkVsZW1lbnQgPSBuZXcgRWxlbWVudEludGVybmFsc0ZlYXR1cmVEZXRlY3Rpb24oKTtcbiAgcmV0dXJuIFtcbiAgICAnc2hhZG93Um9vdCcsXG4gICAgJ2Zvcm0nLFxuICAgICd3aWxsVmFsaWRhdGUnLFxuICAgICd2YWxpZGl0eScsXG4gICAgJ3ZhbGlkYXRpb25NZXNzYWdlJyxcbiAgICAnbGFiZWxzJyxcbiAgICAnc2V0Rm9ybVZhbHVlJyxcbiAgICAnc2V0VmFsaWRpdHknLFxuICAgICdjaGVja1ZhbGlkaXR5JyxcbiAgICAncmVwb3J0VmFsaWRpdHknLFxuICBdLmV2ZXJ5KChwcm9wKSA9PiBwcm9wIGluIGZlYXR1cmVEZXRlY3Rpb25FbGVtZW50LmludGVybmFscyk7XG59XG5cbi8vIE9ubHkgaW5jbHVkZXMgdGhpcyBwb2x5ZmlsbCBpZiB3ZSBhcmUgaW4gYSBqZXN0IHJ1bm5lciBvciBub3QgaW4gU1NSXG5pZiAoXG4gICFpc1NlcnZlciB8fFxuICAoKHByb2Nlc3MgYXMgYW55KT8uZW52LkpFU1RfV09SS0VSX0lEICE9PSB1bmRlZmluZWQgJiYgKHByb2Nlc3MgYXMgYW55KT8uZW52Lk5PREVfRU5WID09PSAndGVzdCcpXG4pIHtcbiAgaWYgKCFpc0VsZW1lbnRJbnRlcm5hbHNTdXBwb3J0ZWQoKSkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLyoqIEB0cy1leHBlY3QtZXJyb3I6IHdlIG5lZWQgdG8gcmVwbGFjZSB0aGUgZGVmYXVsdCBFbGVtZW50SW50ZXJuYWxzICovXG4gICAgICB3aW5kb3cuRWxlbWVudEludGVybmFscyA9IEVsZW1lbnRJbnRlcm5hbHM7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBDdXN0b21FbGVtZW50UmVnaXN0cnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBkZWZpbmUgPSBDdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlLmRlZmluZTtcbiAgICAgIEN1c3RvbUVsZW1lbnRSZWdpc3RyeS5wcm90b3R5cGUuZGVmaW5lID0gZnVuY3Rpb24gKG5hbWUsIGNvbnN0cnVjdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChjb25zdHJ1Y3Rvci5mb3JtQXNzb2NpYXRlZCkge1xuICAgICAgICAgIGNvbnN0IGNvbm5lY3RlZENhbGxiYWNrID0gY29uc3RydWN0b3IucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrO1xuICAgICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghY29ubmVjdGVkQ2FsbGJhY2tNYXAuaGFzKHRoaXMpKSB7XG4gICAgICAgICAgICAgIGNvbm5lY3RlZENhbGxiYWNrTWFwLnNldCh0aGlzLCB0cnVlKTtcblxuICAgICAgICAgICAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICBzZXREaXNhYmxlZCh0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29ubmVjdGVkQ2FsbGJhY2sgIT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25uZWN0ZWRDYWxsYmFjay5hcHBseSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFsd2F5cyB1cGdyYWRlSW50ZXJuYWxzIGluIGNvbm5lY3RlZENhbGxiYWNrIGluc3RlYWQgb2YgY29uc3RydWN0b3JcbiAgICAgICAgICAgIHVwZ3JhZGVJbnRlcm5hbHModGhpcyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmluZS5jYWxsKHRoaXMsIG5hbWUsIGNvbnN0cnVjdG9yLCBvcHRpb25zKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBhIGN1c3RvbSBlbGVtZW50LiBDYWxsaW5nIHRoaXMgbWV0aG9kXG4gICAgICogb24gYSBidWlsdC1pbiBlbGVtZW50IHdpbGwgdGhyb3cgYW4gZXJyb3IuXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hJbnRlcm5hbHMgPSBmdW5jdGlvbiAoKTogSUVsZW1lbnRJbnRlcm5hbHMge1xuICAgICAgICBpZiAoIXRoaXMudGFnTmFtZSkge1xuICAgICAgICAgIC8qKiBUaGlzIGhhcHBlbnMgaW4gdGhlIExpdFNTUiBlbnZpcm9ubWVudC4gSGVyZSB3ZSBjYW4gZ2VuZXJhbGx5IGlnbm9yZSBpbnRlcm5hbHMgZm9yIG5vdyAqL1xuICAgICAgICAgIHJldHVybiB7fSBhcyBvYmplY3QgYXMgSUVsZW1lbnRJbnRlcm5hbHM7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50YWdOYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ2F0dGFjaEludGVybmFscycgb24gJ0hUTUxFbGVtZW50JzogVW5hYmxlIHRvIGF0dGFjaCBFbGVtZW50SW50ZXJuYWxzIHRvIG5vbi1jdXN0b20gZWxlbWVudHMuYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGludGVybmFsc01hcC5oYXModGhpcykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICAgICAgYERPTUV4Y2VwdGlvbjogRmFpbGVkIHRvIGV4ZWN1dGUgJ2F0dGFjaEludGVybmFscycgb24gJ0hUTUxFbGVtZW50JzogRWxlbWVudEludGVybmFscyBmb3IgdGhlIHNwZWNpZmllZCBlbGVtZW50IHdhcyBhbHJlYWR5IGF0dGFjaGVkLmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudEludGVybmFscyh0aGlzKSBhcyBJRWxlbWVudEludGVybmFscztcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWlubmVyLWRlY2xhcmF0aW9uc1xuICAgICAgZnVuY3Rpb24gYXR0YWNoU2hhZG93T2JzZXJ2ZXIoLi4uYXJncykge1xuICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gYXR0YWNoU2hhZG93LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICBzaGFkb3dSb290TWFwLnNldCh0aGlzLCBzaGFkb3dSb290KTtcblxuICAgICAgICBpZiAobXV0YXRpb25PYnNlcnZlckV4aXN0cygpKSB7XG4gICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvYnNlcnZlckNhbGxiYWNrKTtcbiAgICAgICAgICBpZiAod2luZG93LlNoYWR5RE9NKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMsIG9ic2VydmVyQ29uZmlnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzaGFkb3dSb290LCBvYnNlcnZlckNvbmZpZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNoYWRvd0hvc3RzTWFwLnNldCh0aGlzLCBvYnNlcnZlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoYWRvd1Jvb3Q7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGF0dGFjaFNoYWRvdyA9IEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFNoYWRvdztcbiAgICAgIEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFNoYWRvdyA9IGF0dGFjaFNoYWRvd09ic2VydmVyO1xuICAgIH1cblxuICAgIGlmIChtdXRhdGlvbk9ic2VydmVyRXhpc3RzKCkpIHtcbiAgICAgIGNvbnN0IGRvY3VtZW50T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvYnNlcnZlckNhbGxiYWNrKTtcbiAgICAgIGRvY3VtZW50T2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIG9ic2VydmVyQ29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBLZWVwcyB0aGUgcG9seWZpbGwgZnJvbSB0aHJvd2luZyBpbiBlbnZpcm9ubWVudHMgd2hlcmUgSFRNTEZvcm1FbGVtZW50XG4gICAgICogaXMgdW5kZWZpbmVkIGxpa2UgaW4gYSBzZXJ2ZXIgZW52aXJvbm1lbnRcbiAgICAgKi9cbiAgICBpZiAodHlwZW9mIEhUTUxGb3JtRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHBhdGNoRm9ybVByb3RvdHlwZSgpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93LkN1c3RvbVN0YXRlU2V0KSB7XG4gICAgICB3aW5kb3cuQ3VzdG9tU3RhdGVTZXQgPSBDdXN0b21TdGF0ZVNldDtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXdpbmRvdy5DdXN0b21TdGF0ZVNldCkge1xuICAgIHdpbmRvdy5DdXN0b21TdGF0ZVNldCA9IEN1c3RvbVN0YXRlU2V0O1xuICAgIGNvbnN0IGF0dGFjaEludGVybmFscyA9IEhUTUxFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hJbnRlcm5hbHM7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEludGVybmFscyA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICBjb25zdCBpbnRlcm5hbHMgPSBhdHRhY2hJbnRlcm5hbHMuY2FsbCh0aGlzLCBhcmdzKTtcbiAgICAgIGludGVybmFscy5zdGF0ZXMgPSBuZXcgQ3VzdG9tU3RhdGVTZXQodGhpcyk7XG4gICAgICByZXR1cm4gaW50ZXJuYWxzO1xuICAgIH07XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBDb25zdHJ1Y3RvciwgTXRlRWxlbWVudCB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTGFuZ0ludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBsYW5nIHVzZWQgdG8gZm9ybWF0IGNvbnRlbnQgcmVuZGVyZWQgYnkgdGhpcyBlbGVtZW50XG4gICAqIEBhdHRyIGxhbmdcbiAgICovXG4gIGxhbmc6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IExhbmdNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgTGFuZ0VsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBsYW5nIHVzZWQgdG8gZm9ybWF0IGNvbnRlbnQgcmVuZGVyZWQgYnkgdGhpcyBlbGVtZW50XG4gICAgICogQGF0dHIgbGFuZ1xuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbGFuZzogc3RyaW5nO1xuICB9XG4gIHJldHVybiBMYW5nRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxMYW5nSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQgfSBmcm9tICcuLi8nO1xuXG4vKipcbiAqIFNwZWNpYWwgY2xhc3MgdGhhdCBoZWxwcyBmcmFtZXdvcmsgd3JhcHBlciBzdHlsaW5nIGtub3cgd2hlbiBhIHdyYXBwZXIgZnJhbWV3b3JrXG4gKiBoYXMgZmluaXNoZWQgcmVuZGVyaW5nIGFuZCB0aHVzIGVsZW1lbnRzIGNhbiBub3cgYmUgc2hvd24gd2l0aG91dCBhIEZPVUMuIFRoaXNcbiAqIG9jY3VycyBpbiB0aGUgc2NlbmFyaW8gd2hlcmUgTGl0IGVsZW1lbnRzIHJlZ2lzdGVyIGFuZCByZW5kZXIgYmVmb3JlIHRoZVxuICogd3JhcHBlciBmcmFtZXdvcmsgcGFzc2VzIGVsZW1lbnRzIHRoZWlyIHByb3BzLlxuICovXG5leHBvcnQgY29uc3QgV2FpdEZvckZyYW1ld29ya01peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBXYWl0Rm9yRnJhbWV3b3JrRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKiBAaWdub3JlICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgYXR0cmlidXRlOiAnbXRlLWZ3LXJlbmRlcmVkJywgcmVmbGVjdDogdHJ1ZSB9KSBfZndSZW5kZXJlZDtcbiAgfVxuICByZXR1cm4gV2FpdEZvckZyYW1ld29ya0VsZW1lbnQgYXMgVDtcbn07XG4iLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2JveC1zaXppbmc6Ym9yZGVyLWJveH1gOyIsICJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgYmFzZVN0eWxlcywgZGVmaW5lRWxlbWVudCwgTXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9kZXNjcmlwdGlvbi5zdHlsZXMnO1xuXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuLyoqXG4gKiBFbGVtZW50IHVzZWQgdG8gcmVwcmVzZW50IGRlc2NyaXB0aW9uIG1lc3NhZ2luZyB0ZXh0XG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtZGVzY3JpcHRpb24nKVxuZXhwb3J0IGNsYXNzIE10ZURlc2NyaXB0aW9uIGV4dGVuZHMgTXRlRWxlbWVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbYmFzZVN0eWxlcywgc3R5bGVzXTtcblxuICAvKiogRGVmYXVsdCB1bmlxdWUgSUQgZm9yIHRoaXMgaGludCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGlkID0gYG10ZS1kZXNjcmlwdGlvbi0tJHtuZXh0VW5pcXVlSWQrK31gO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGAke3RoaXMuaW5zdGFuY2VTdHlsZXN9PHNsb3Q+PC9zbG90PmA7XG4gIH1cbn1cblxuLyoqXG4gKiBFbGVtZW50IHVzZWQgdG8gcmVwcmVzZW50IGRlc2NyaXB0aW9uIG1lc3NhZ2luZyB0ZXh0XG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtZGVzY3JpcHRpb24tdGV4dCcpXG5leHBvcnQgY2xhc3MgTXRlRGVzY3JpcHRpb25UZXh0IGV4dGVuZHMgTXRlRGVzY3JpcHRpb24ge31cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLWRlc2NyaXB0aW9uJzogTXRlRGVzY3JpcHRpb247XG4gICAgJ210ZS1kZXNjcmlwdGlvbi10ZXh0JzogTXRlRGVzY3JpcHRpb25UZXh0O1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtjb2xvcjp2YXIoLS1tdGUtaW5rLTIpO2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWxpbmUtaGVpZ2h0KTttYXJnaW46dmFyKC0tbXRlLXNwYWNlLXhzKSAwO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7d2lkdGg6MTAwJX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItbGlnaHRlci1yZ2IpKTtib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXhzKTtjb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtcmdiKSk7ZGlzcGxheTpmbGV4O2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtd2VpZ2h0KTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtnYXA6dmFyKC0tbXRlLXNwYWNlLXhzKTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1saW5lLWhlaWdodCk7bWFyZ2luOnZhcigtLW10ZS1zcGFjZS14cykgMDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowIHZhcigtLW10ZS1zcGFjZS14cyk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt3aWR0aDoxMDAlfWA7IiwgImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHksIHN0YXRlIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9pY29uLnN0eWxlcyc7XG5pbXBvcnQge1xuICBkZWZpbmVFbGVtZW50LFxuICBTdGF0dXNDb2xvck1peGluLFxuICBNdGVFbGVtZW50LFxuICBQcmVzZXRNaXhpbkZhY3RvcnksXG4gIG9uVXBkYXRlLFxuICBVbnN1YnNjcmliZXIsXG4gIGlzU3NyLFxufSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IG10ckljb24gfSBmcm9tICdAbW9ydGFyL2ljb25zJztcbmltcG9ydCB7IE10ZUljb25SZWdpc3RyeVNlcnZpY2UgfSBmcm9tICcuL2ljb24tcmVnaXN0cnkuc2VydmljZSc7XG5pbXBvcnQgeyBJY29uUHJlc2V0IH0gZnJvbSAnLi9pY29uLnByZXNldHMnO1xuaW1wb3J0IHsgdW5zYWZlU1ZHIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvdW5zYWZlLXN2Zy5qcyc7XG5pbXBvcnQgeyBzZWxlY3RvckZhY3RvcnkgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5cbi8qKlxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLWljb24nKVxuZXhwb3J0IGNsYXNzIE10ZUljb24gZXh0ZW5kcyBTdGF0dXNDb2xvck1peGluKFxuICBQcmVzZXRNaXhpbkZhY3Rvcnk8SWNvblByZXNldD4oJ010ZUljb24nKShNdGVFbGVtZW50KVxuKSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbc3R5bGVzXTtcblxuICAvKiogVGhlIG5hbWUgb2YgdGhlIGljb24gdG8gcmVuZGVyICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbmFtZTogbXRySWNvbiB8IHN0cmluZztcblxuICAvKiogVGhlIGxpYnJhcnkgdG8gbG9hZCB0aGUgaWNvbiBmcm9tLiBUaGUgZGVmYXVsdCBsaWJyYXJ5IGlzIGBfZGVmYXVsdGAuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbGlicmFyeSA9ICdfZGVmYXVsdCc7XG5cbiAgLyoqIFRoZSBzaXplIG9mIHRoaXMgaWNvbi4gTWF0Y2hlcyBhIGdpdmVuIGZvbnQtc2l6ZSBpbiBweC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0OiB0cnVlIH0pIHNpemU6IHN0cmluZyB8IG51bWJlciA9IDI0O1xuXG4gIC8qKiBTY2FsZSB0aGlzIGljb24gcmVsYXRpdmUgdG8gdGhlIGNvbXB1dGVkIGZvbnQtc2l6ZSBvZiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgYXV0b3NpemUgPSBmYWxzZTtcblxuICAvKiogQW4gaWNvbidzIHJvbGUgaXMgZGVmYXVsdHMgdG8gYGltZ2AgdG8gZW5zdXJlIHRoZXkgZG8gbm90IGludGVycnVwdCB0ZXh0LiAgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSByb2xlID0gJ2ltZyc7XG5cbiAgLyoqIExhYmVsIGZvciBpY29uIHRvIGJlIHJlYWQgdG8gc2NyZWVucmVhZGVyIHRlY2hub2xvZ2llcyAqL1xuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6ICdhcmlhLWxhYmVsJywgcmVmbGVjdDogdHJ1ZSB9KSBhcmlhTGFiZWw6IHN0cmluZztcblxuICAvKiogTGFiZWwgZm9yIGljb24gdG8gYmUgcmVhZCB0byBzY3JlZW5yZWFkZXIgdGVjaG5vbG9naWVzICovXG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ2FyaWEtaGlkZGVuJywgcmVmbGVjdDogdHJ1ZSB9KSBhcmlhSGlkZGVuID0gJ3RydWUnO1xuXG4gIC8qKiBSZW5kZXJzIHRoZSBpY29uIGluIHRoZSBkZWZhdWx0IG11dGVkIGluayBjb2xvci4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBtdXRlZCA9IGZhbHNlO1xuXG4gIC8qKiBSZW5kZXJzIHRoaXMgaWNvbiB3aXRoIGNvbG9ycyBkZWZpbmVkIGluIHRoZSBTVkcgaW5zdGVhZCBvZiBpbmhlcml0aW5nIGZyb20gQ1NTIHBhcmVudHMgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRoQ29sb3IgPSBmYWxzZTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBUcmFja3MgdGhlIGxvYWRlZCBpY29uIHNvIHdlIGRvbid0IG5lZWQgdG8gcmVmZXRjaCBpdCBkdXJpbmcgaHlkcmF0aW9uXG4gICAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIF9sb2FkZWQ/OiBzdHJpbmc7XG5cbiAgQHN0YXRlKCkgcHJpdmF0ZSBpY29uU3ZnOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBmZXRjaEFib3J0Q29udHJvbGxlcj86IEFib3J0Q29udHJvbGxlcjtcblxuICBwcml2YXRlIHByZXZpb3VzSWNvblN1YnNjcmlwdGlvbjogVW5zdWJzY3JpYmVyO1xuXG4gIEBvblVwZGF0ZShbJ25hbWUnLCAnbGlicmFyeSddLCB7IG9uOiAnYm90aCcgfSlcbiAgcHJpdmF0ZSBoYW5kbGVOYW1lVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLm5hbWUpIHtcbiAgICAgIGlmICh0aGlzLm5lZWRzSWNvblVwZGF0ZSgpKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hBYm9ydENvbnRyb2xsZXI/LmFib3J0KCk7XG4gICAgICAgIHRoaXMuZmV0Y2hBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMucHJldmlvdXNJY29uU3Vic2NyaXB0aW9uPy4oKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0ljb25TdWJzY3JpcHRpb24gPSBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlLmdldEljb24oXG4gICAgICAgICAgdGhpcy5uYW1lLFxuICAgICAgICAgIHRoaXMubGlicmFyeSxcbiAgICAgICAgICB0aGlzLmZldGNoQWJvcnRDb250cm9sbGVyLnNpZ25hbFxuICAgICAgICApLnN1YnNjcmliZSgoaWNvbiwgdW5zdWIpID0+IHtcbiAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgY29uc3Qgb2xkU3ZnID0gdGhpcy5pY29uU3ZnO1xuICAgICAgICAgICAgY29uc3Qgb2xkTG9hZGVkID0gdGhpcy5fbG9hZGVkO1xuXG4gICAgICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgICAgICB0aGlzLmljb25TdmcgPSBpY29uO1xuICAgICAgICAgICAgICB0aGlzLl9sb2FkZWQgPSBgJHt0aGlzLmxpYnJhcnl9fiR7dGhpcy5uYW1lfWA7XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnaWNvblN2ZycsIG9sZFN2Zyk7XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnX2xvYWRlZCcsIG9sZExvYWRlZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvblN2ZyA9IGljb247XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVkID0gYCR7dGhpcy5saWJyYXJ5fX4ke3RoaXMubmFtZX1gO1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnaWNvblN2ZycsIG9sZFN2Zyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCdfbG9hZGVkJywgb2xkTG9hZGVkKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSByZXN1bHQgd2FzIG5vdCBudWxsIG9yIHRoZSBmYWxsYmFjayBpY29uIHRoZW4gd2UgbGVhdmUgdGhpcyBzdWJzY3JpcHRpb25cbiAgICAgICAgICAgIC8vIG9wZW4gaW4gY2FzZSBpdCBsb2FkcyBsYXRlciBvciBsYXp5IGxvYWRpbmcgaXMgcmUtZW5hYmxlZC5cbiAgICAgICAgICAgIGlmICh0aGlzLmljb25TdmcgIT09IG51bGwgJiYgdGhpcy5pY29uU3ZnICE9PSBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlWydmYWxsYmFja0ljb24nXSkge1xuICAgICAgICAgICAgICB1bnN1YigpO1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzSWNvblN1YnNjcmlwdGlvbj8uKCk7XG4gICAgICAgICAgICAgIHRoaXMucHJldmlvdXNJY29uU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRHVyaW5nIFNTUiBhbHdheXMgdW5zdWJcbiAgICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgICAgdW5zdWIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5pY29uU3ZnKSB7XG4gICAgICAgIC8vIElmIHRoZSBpY29uIGRvZXNuJ3QgbmVlZCBhbiB1cGRhdGUgYnV0IHdlIGRvbid0IGtub3cgd2hhdCB0aGUgaWNvblN2ZyBpcyAoaHlkcmF0aW5nIGZyb20gU1NSKSwgZ2V0IGl0IGZyb20gdGhlIERPTVxuICAgICAgICBjb25zdCBzdmcgPSB0aGlzLnJlbmRlclJvb3Q/LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpPy5vdXRlckhUTUwgPz8gbnVsbDtcbiAgICAgICAgLy8gV2FpdCBmb3IgdXBkYXRlIHRvIGNvbXBsZXRlIHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pY29uU3ZnID0gc3ZnO1xuICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnaWNvblN2ZycsIG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbG9hZGVkID0gbnVsbDtcbiAgICAgIHRoaXMuaWNvblN2ZyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBAb25VcGRhdGUoWydhcmlhTGFiZWwnXSwgeyBvbjogJ2JvdGgnIH0pXG4gIHByaXZhdGUgaGFuZGxlQXJpYUxhYmVsQ2hhbmdlKCkge1xuICAgIGlmICghdGhpcy5hcmlhTGFiZWwpIHtcbiAgICAgIHRoaXMuYXJpYUhpZGRlbiA9ICd0cnVlJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hcmlhTGFiZWwgJiYgdGhpcy5hcmlhSGlkZGVuID09PSAndHJ1ZScpIHtcbiAgICAgIHRoaXMuYXJpYUhpZGRlbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcygnc2l6ZScpIHx8IGNoYW5nZWRQcm9wcy5oYXMoJ2ljb25TdmcnKSB8fCBjaGFuZ2VkUHJvcHMuaGFzKCdhdXRvc2l6ZScpKSB7XG4gICAgICBpZiAodGhpcy5hdXRvc2l6ZSB8fCB0aGlzLnNpemUpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuYXV0b3NpemUgPyAnY2FsYygxZW0gKyAycHgpJyA6IGAke3RoaXMuc2l6ZX1weGA7XG4gICAgICAgIC8vIFNwZWNpZmljaXR5IGlzIG9uZSBsZXNzIHRoYXQgc2Uvc3AgcHJvcHMgc28gdGhvc2Ugc3RpbGwgb3ZlcnJpZGUgZGVmYXVsdCBzaXplIGNhbGN1bGF0aW9uc1xuICAgICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoJ210ZS1pY29uLXNpemluZycsIHNlbGVjdG9yRmFjdG9yeSgnOmhvc3Q6aG9zdCcpLCB7XG4gICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgbWluV2lkdGg6IHNpemUsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICAgIG1pbkhlaWdodDogc2l6ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIHRoaXMucHJldmlvdXNJY29uU3Vic2NyaXB0aW9uPy4oKTtcbiAgfVxuXG4gIHByaXZhdGUgbmVlZHNJY29uVXBkYXRlKCkge1xuICAgIHJldHVybiAhdGhpcy5fbG9hZGVkIHx8IHRoaXMuX2xvYWRlZCAhPT0gYCR7dGhpcy5saWJyYXJ5fX4ke3RoaXMubmFtZX1gO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYCR7dGhpcy5pbnN0YW5jZVN0eWxlc30ke3Vuc2FmZVNWRyh0aGlzLmljb25TdmcpfWA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLWljb24nOiBNdGVJY29uO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2JveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50O2NvbG9yOnZhcigtLWljb24tY29sb3IsaW5oZXJpdCk7ZGlzcGxheTppbmxpbmUtYmxvY2s7bGluZS1oZWlnaHQ6MDt3aWR0aDoyNHB4fTpob3N0KFthdXRvc2l6ZV0pe3ZlcnRpY2FsLWFsaWduOm1pZGRsZX06aG9zdChbbXV0ZWRdKXstLWljb24tY29sb3I6dmFyKC0tbXRlLWluay0yKX1zdmd7ZGlzcGxheTpibG9jaztoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfTpob3N0KDpub3QoW3dpdGhDb2xvcl0pKSBzdmcgKntjb2xvcjppbmhlcml0O2ZpbGw6Y3VycmVudENvbG9yIWltcG9ydGFudH06aG9zdChbY29sb3I9cHJpbWFyeV0pPnN2ZyAqe2NvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c2Vjb25kYXJ5XSk+c3ZnICp7Y29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtcmdiKSl9Omhvc3QoW2NvbG9yPXRlcnRpYXJ5XSk+c3ZnICp7Y29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9c3VjY2Vzc10pPnN2ZyAqe2NvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9d2FybmluZ10pPnN2ZyAqe2NvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctYmFzZS1yZ2IpKX06aG9zdChbY29sb3I9ZGFuZ2VyXSk+c3ZnICp7Y29sb3I6cmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtcmdiKSl9YDsiLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWluZmVycmFibGUtdHlwZXMgKi9cbmltcG9ydCB7IFNpZ25hbCwgc2lnbmFsLCBpc1NzciwgY29tcHV0ZWQgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IE1vcnRhckljb24sIG10ckljb25IZWxwUmhvbWJ1cyB9IGZyb20gJ0Btb3J0YXIvaWNvbnMnO1xuXG5leHBvcnQgdHlwZSBJY29uRGF0YSA9IHsgZGF0YT86IHN0cmluZzsgZmV0Y2hlZD86IGJvb2xlYW4gfTtcblxuLyoqXG4gKiBTZXJ2aWNlIHVzZWQgdG8gcmVnaXN0ZXIgc3ZnIHN0cmluZ3MgZm9yIGEgZ2l2ZW4gaWNvbiBuYW1lIGFuZCB0aGVuIGxvb2sgdGhlbVxuICogdXAgYnkgdGhhdCBzYW1lIG5hbWUgb3IgZmV0Y2ggdGhlbSBmcm9tIGEgQ0ROLiBUaGUgYE10ZUljb25SZWdpc3RyeVNlcnZpY2VgIGlzXG4gKiBhIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzLiBZb3Ugc2hvdWxkIGFsd2F5cyB1c2UgdGhhdCBleHBvcnQgaW5zdGVhZFxuICogb2YgaW5pdGlhbGl6aW5nIGEgbmV3IGluc3RhbmNlLlxuICovXG5leHBvcnQgY2xhc3MgX010ZUljb25SZWdpc3RyeVNlcnZpY2Uge1xuICAvKiogTWFwIHdoZXJlIGxvYWRlZCBpY29uIHN2Z3MgYXJlIGNhY2hlZCAqL1xuICBwcml2YXRlIGljb25SZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBTaWduYWw8SWNvbkRhdGE+PigpO1xuXG4gIC8qKiBNYXAgb2YgcmVnaXN0ZXJlZCBsYXp5IGxvYWRpbmcgcmVzb2x2ZXIgZnVuY3Rpb25zIHBlciBpY29uIGxpYnJhcnkgKi9cbiAgcHJpdmF0ZSBpY29uVXJsUmVzb2x2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIChpY29uTmFtZTogc3RyaW5nKSA9PiBzdHJpbmc+KCk7XG5cbiAgLyoqIERlZmluZXMgdGhlIHN2ZyB1c2VkIHdoZW4gYW4gaWNvbiBjYW5ub3QgYmUgbG9hZGVkICovXG4gIHByaXZhdGUgZmFsbGJhY2tJY29uID0gbXRySWNvbkhlbHBSaG9tYnVzPy5kYXRhO1xuXG4gIC8qKiBUcmFja3MgaWYgaWNvbnMgc2hvdWxkIGJlIGxhenkgbG9hZGVkIGludGVybmFsbHkgKi9cbiAgcHJpdmF0ZSBsYXp5TG9hZEVuYWJsZWQgPSB0cnVlO1xuXG4gIC8qKiBQcmV2ZW50cyBsb2dzIGFuZCBmZXRjaGVzIHdoZW4gdHJ1ZSAqL1xuICBwcml2YXRlIHRlc3RNb2RlRW5hYmxlZCA9IGZhbHNlO1xuXG4gIC8qKiBEZWxpbWl0ZXIgdXNlZCB3aGVuIGNyZWF0aW5nIGxpYnJhcnkgKyBpY29uIG5hbWUga2V5cyAqL1xuICBwcml2YXRlIGRlbGltaXRlciA9ICd+JztcblxuICAvKiogSWYgZXhlY3V0aW5nIHNlcnZlci1zaWRlIGFsbCBtb3J0YXIgaWNvbnMgd2lsbCBiZSBsb2FkZWQgaGVyZSAqL1xuICBwcml2YXRlIHNlcnZlckljb25DYWNoZT86IFJlY29yZDxzdHJpbmcsIE1vcnRhckljb24+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaWNvblVybFJlc29sdmVycy5zZXQoJ19kZWZhdWx0JywgKGljb25OYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBgaHR0cHM6Ly9tb3J0YXItY2RuLmhlYi5jb20vaWNvbnMvbWRpLzcuMi8ke2ljb25OYW1lfS5zdmdgO1xuICAgIH0pO1xuICAgIHRoaXMuaWNvblVybFJlc29sdmVycy5zZXQoJ2N4JywgKGljb25OYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBgaHR0cHM6Ly9tb3J0YXItY2RuLmhlYi5jb20vaWNvbnMvY3gvMS4xLyR7aWNvbk5hbWV9LnN2Z2A7XG4gICAgfSk7XG4gICAgdGhpcy5zc3JJbml0KCkudGhlbigoKSA9PiB7fSk7XG4gIH1cblxuICAvKiogQGhpZGRlbiAqL1xuICBhc3luYyBzc3JJbml0KCkge1xuICAgIC8qKlxuICAgICAqIFRoaXMgbW9uc3Ryb3NpdHkgZW5hYmxlcyBsb2NhbCBpY29uIHJlbmRlcmluZyBkdXJpbmcgU1NSIF9XSVRIT1VUXyBhbHNvIHJlc3VsdGluZyBpblxuICAgICAqIGJ1bmRsZXJzIHB1bGxpbmcgaW4gdGhlIGVudGlyZSBpY29uIGxpYnJhcnkgZWxzZXdoZXJlLiBUaGlzIGNhbiBhbHNvIGJlIGFjaGlldmVkIHdpdGgganVzdFxuICAgICAqIHRoZSBtYWdpYyBjb21tZW50cyBiZWxvdy4uLmJ1dCBub3QgYWxsIGJ1bmRsZXJzIHN1cHBvcnQgdGhhdCBraW5kIG9mIGZlYXR1cmUgc28gdGhpcyBpcyBhblxuICAgICAqIGV4dHJhIHByZWNhdXRpb24uXG4gICAgICpcbiAgICAgKiBGb3IgdGhpcyB0byB3b3JrOlxuICAgICAqIC0gVGhlIGVudmlyb25tZW50IHZhcmlhYmxlIGBNT1JUQVJfRFlOQU1JQ19TU1JfSUNPTl9JTVBPUlRTYCBtdXN0IGJlIHRydWVcbiAgICAgKiAtIFRoZSBgQG1vcnRhci9pY29uc2AgcGFja2FnZSBtdXN0IGJlIGF2YWlsYWJsZVxuICAgICAqL1xuICAgIHRyeSB7XG4gICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICBjb25zdCBpY29uSW1wb3J0ID1cbiAgICAgICAgICAocHJvY2VzcyBhcyBhbnkpPy5lbnYuTU9SVEFSX0RZTkFNSUNfU1NSX0lDT05fSU1QT1JUUyA9PT0gJ3RydWUnID8gJ0Btb3J0YXIvaWNvbnMnIDogbnVsbDtcbiAgICAgICAgaWYgKGljb25JbXBvcnQpIHtcbiAgICAgICAgICAvLyBBdHRlbXB0IHRvIGxvYWQgYWxsIGljb25zIGxvY2FsbHkgaWYgcnVuIHNlcnZlciBzaWRlLiBUaGUgaWdub3JlXG4gICAgICAgICAgLy8gY29tbWVudHMgaGVyZSBwcmV2ZW50IHdlYnBhY2sgJiB2aXRlIGZyb20gdGhyb3dpbmcgYSB3YXJuaW5nXG4gICAgICAgICAgLy8gc2luY2UgdGhlaXIgaW5hYmlsaXR5IHRvIG9wdGltaXplIHRoaXMgaXMgaW50ZW50aW9uYWwgaGVyZS5cbiAgICAgICAgICBjb25zdCBpY29ucyA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovIC8qIEB2aXRlLWlnbm9yZSAqLyBpY29uSW1wb3J0KTtcbiAgICAgICAgICB0aGlzLnNlcnZlckljb25DYWNoZSA9IGljb25zPy5kZWZhdWx0ID8/IGljb25zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLyogZW1wdHkgKi9cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgcm9vdCB1cmwgZnJvbSB3aGljaCB0aGlzIHNlcnZpY2Ugd2lsbCBhdHRlbXB0IHRvIGZldGNoIGljb25zIGZyb20gZm9yIHRoZSBnaXZlbiBcImxpYnJhcnlcIi5cbiAgICovXG4gIHB1YmxpYyByZWdpc3Rlckljb25MaWJyYXJ5KFxuICAgIGljb25MaWJyYXJ5ID0gJ19kZWZhdWx0JyxcbiAgICBpY29uVXJsUmVzb2x2ZXI/OiAoaWNvbk5hbWU6IHN0cmluZykgPT4gc3RyaW5nXG4gICkge1xuICAgIHRoaXMubGF6eUxvYWRFbmFibGVkID0gdHJ1ZTtcbiAgICBpZiAoaWNvblVybFJlc29sdmVyKSB7XG4gICAgICB0aGlzLmljb25VcmxSZXNvbHZlcnMuc2V0KGljb25MaWJyYXJ5ID8/ICdfZGVmYXVsdCcsIGljb25VcmxSZXNvbHZlcik7XG4gICAgfVxuXG4gICAgLy8gRmV0Y2ggYW55IGljb25zIHJlcXVlc3RlZCBiZWZvcmUgdGhpcyB3YXMgY2FsbGVkIHRoYXQgaGF2ZSBub3QgeWV0IGJlZW4gZmV0Y2hlZFxuICAgIGZvciAoY29uc3QgW25hbWUsIGljb25TaWduYWxdIG9mIHRoaXMuaWNvblJlZ2lzdHJ5KSB7XG4gICAgICBpZiAoIWljb25TaWduYWwgfHwgIWljb25TaWduYWwuZ2V0KCk/LmZldGNoZWQpIHtcbiAgICAgICAgY29uc3QgW2ljb25MaWJyYXJ5LCBwYXRoTmFtZV0gPSBuYW1lLnNwbGl0KHRoaXMuZGVsaW1pdGVyKTtcbiAgICAgICAgdGhpcy5mZXRjaEljb24ocGF0aE5hbWUsIGljb25MaWJyYXJ5KS50aGVuKChpY29uKSA9PiB7XG4gICAgICAgICAgaWNvblNpZ25hbC5zZXQoeyBmZXRjaGVkOiB0cnVlLCBkYXRhOiBpY29uIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogTWFudWFsbHkgcmVnaXN0ZXJzIG5ldyBpY29ucyAqL1xuICBwdWJsaWMgcmVnaXN0ZXJJY29ucyhpY29uczogTW9ydGFySWNvbltdLCBpY29uTGlicmFyeSA9ICdfZGVmYXVsdCcpIHtcbiAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICBjb25zdCBpY29uU2lnbmFsID0gdGhpcy5pY29uUmVnaXN0cnkuZ2V0KGAke2ljb25MaWJyYXJ5fSR7dGhpcy5kZWxpbWl0ZXJ9JHtpY29uLm5hbWV9YCk7XG4gICAgICBpZiAoIWljb25TaWduYWwpIHtcbiAgICAgICAgdGhpcy5pY29uUmVnaXN0cnkuc2V0KFxuICAgICAgICAgIGAke2ljb25MaWJyYXJ5fSR7dGhpcy5kZWxpbWl0ZXJ9JHtpY29uLm5hbWV9YCxcbiAgICAgICAgICBzaWduYWwoeyBmZXRjaGVkOiB0cnVlLCBkYXRhOiBpY29uLmRhdGEgfSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoaWNvblNpZ25hbCAmJiAhaWNvblNpZ25hbC5nZXQoKT8uZmV0Y2hlZCkge1xuICAgICAgICBpY29uU2lnbmFsLnNldCh7IGZldGNoZWQ6IHRydWUsIGRhdGE6IGljb24uZGF0YSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgeW91IHRvIG92ZXJyaWRlIHRoZSBsYXp5IGxvYWRpbmcuIERlZmF1bHRzIHRvIGB0cnVlYC5cbiAgICogV2hlbiBgZmFsc2VgIGljb25zIHdpbGwgbm90IGJlIGZldGNoZWQgZnJvbSByZW1vdGUgbG9jYXRpb25zLlxuICAgKi9cbiAgcHVibGljIHNldExhenlMb2FkaW5nKHZhbHVlOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIHRoaXMubGF6eUxvYWRFbmFibGVkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIHlvdSB0byBvdmVycmlkZSB0aGUgdGVzdCBtb2RlLiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgKiBXaGVuIHRydWUgd2FybmluZ3Mgd2lsbCBub3QgYmUgdGhyb3duIGFuZCBubyBmZXRjaGVzIHdpbGwgYmUgbWFkZS5cbiAgICovXG4gIHB1YmxpYyBzZXRUZXN0TW9kZSh2YWx1ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgdGhpcy50ZXN0TW9kZUVuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBTZXRzIGEgbmV3IGN1c3RvbSBmYWxsYmFjayBpY29uICovXG4gIHB1YmxpYyBzZXRGYWxsYmFja0ljb24oZmFsbGJhY2tJY29uOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5mYWxsYmFja0ljb24gPSBmYWxsYmFja0ljb247XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gcmV0cmlldmUgYW4gaWNvbiBmcm9tIHRoZSByZWdpc3RyeS5cbiAgICpcbiAgICogSWYgYSByb290U3ZnSWNvblVybCBoYXMgYmVlbiBzZXQsIHRoaXMgbWV0aG9kIHdpbGxcbiAgICogYXR0ZW1wdCB0byBsb2FkIHRoZSBpY29uIGZyb20gdGhlcmUuIElmIHN1Y2Nlc3NmdWwsXG4gICAqIHRoYXQgc3ZnIHdpbGwgYmUgcmVnaXN0ZXJlZCBmb3IgcmV1c2UuXG4gICAqL1xuICBwdWJsaWMgZ2V0SWNvbihcbiAgICBwYXRoTmFtZTogc3RyaW5nLFxuICAgIGljb25MaWJyYXJ5ID0gJ19kZWZhdWx0JyxcbiAgICBhYm9ydFNpZ25hbD86IEFib3J0U2lnbmFsXG4gICk6IFNpZ25hbDxzdHJpbmcgfCBudWxsPiB7XG4gICAgLy8gSWYgaWNvbiBpcyB1bmRlZmluZWQgaW5zdGFudGx5IHJldHVybiB0aGUgZmFsbGJhY2sgaWNvblxuICAgIGlmIChwYXRoTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gc2lnbmFsKHRoaXMuZmFsbGJhY2tJY29uKTtcbiAgICB9XG4gICAgY29uc3QgcmVnaXN0ZXJlZFNpZ25hbCA9IHRoaXMuaWNvblJlZ2lzdHJ5LmdldChgJHtpY29uTGlicmFyeX0ke3RoaXMuZGVsaW1pdGVyfSR7cGF0aE5hbWV9YCk7XG4gICAgY29uc3QgaWNvblJlZ2lzdGVyZWQgPSAhIXJlZ2lzdGVyZWRTaWduYWw7XG4gICAgLy8gSWYgdGhlIGljb24gaXMgcmVnaXN0ZXJlZCBqdXN0IHJldHVybiBpdFxuICAgIGlmIChpY29uUmVnaXN0ZXJlZCkge1xuICAgICAgcmV0dXJuIGNvbXB1dGVkKHJlZ2lzdGVyZWRTaWduYWwsIChlbnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4gZW50cnk/LmRhdGE7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCBpZiBsYXp5TG9hZEVuYWJsZWQgdGhlbiBhdHRlbXB0IHRvIGZldGNoIGFuZCByZWdpc3RlciB0aGUgaWNvblxuICAgIGVsc2UgaWYgKCFpY29uUmVnaXN0ZXJlZCAmJiB0aGlzLmxhenlMb2FkRW5hYmxlZCkge1xuICAgICAgbGV0IGljb25TaWduYWw6IFNpZ25hbDxJY29uRGF0YT47XG5cbiAgICAgIC8vIExvYWQgZnJvbSBsb2NhbCBzZXJ2ZXIgaWNvbiBjYWNoZSBkdXJpbmcgc3NyIGlmIGl0IGV4aXN0c1xuICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VydmVySWNvbkNhY2hlKSB7XG4gICAgICAgICAgY29uc3QgY2FtZWxOYW1lID0gcGF0aE5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgKGcpID0+IGdbMV0udG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgY29uc3QgaWNvbk5hbWUgPSBgJHtpY29uTGlicmFyeSA9PT0gJ2N4JyA/ICdjeCcgOiAnbXRyJ31JY29uJHtjYW1lbE5hbWVcbiAgICAgICAgICAgIC5jaGFyQXQoMClcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpfSR7Y2FtZWxOYW1lLnNsaWNlKDEpfWA7XG5cbiAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJJY29uQ2FjaGVbaWNvbk5hbWVdIGFzIGFueSkge1xuICAgICAgICAgICAgaWNvblNpZ25hbCA9IHNpZ25hbDxJY29uRGF0YT4oe1xuICAgICAgICAgICAgICBkYXRhOiAodGhpcy5zZXJ2ZXJJY29uQ2FjaGVbaWNvbk5hbWVdIGFzIGFueSk/LmRhdGEsXG4gICAgICAgICAgICAgIGZldGNoZWQ6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlZEZhaWxlZExvYWQoaWNvbkxpYnJhcnksIHBhdGhOYW1lLCBpY29uU2lnbmFsKSBhcyBTaWduYWw8XG4gICAgICAgICAgICAgIHN0cmluZyB8IG51bGxcbiAgICAgICAgICAgID47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIElmIHRoZSBpY29uIGNhY2hlIGRvZXNuJ3QgZXhpc3QganVzdCBkbyBub3RoaW5nIGJlY2F1c2UgdGhlIGljb24gd2lsbCBiZSBsb2FkZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGljb25TaWduYWwgPSBzaWduYWw8SWNvbkRhdGE+KHtcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBmZXRjaGVkOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gSWYgbm90IG9uIHRoZSBzZXJ2ZXIgdGhlbiBmZXRjaCB0aGUgaWNvblxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIFNldCB0aGUgaWNvbiBhcyB0aGUgcmVzdWx0IG9mIHRoZSBhd2FpdCByaWdodCBub3csIGJlZm9yZSB0aGUgZmV0Y2hcbiAgICAgICAgLy8gaXMgaW5pdGlhdGVkLCB0byBwcmV2ZW50IHJlZHVuZGFudCBpbml0aWFsIHF1ZXJpZXMgb24gcGFnZSBsb2FkXG4gICAgICAgIGljb25TaWduYWwgPSBzaWduYWw8SWNvbkRhdGE+KHtcbiAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgIGZldGNoZWQ6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pY29uUmVnaXN0cnkuc2V0KGAke2ljb25MaWJyYXJ5fSR7dGhpcy5kZWxpbWl0ZXJ9JHtwYXRoTmFtZX1gLCBpY29uU2lnbmFsKTtcblxuICAgICAgICB0aGlzLmZldGNoSWNvbihwYXRoTmFtZSwgaWNvbkxpYnJhcnksIGFib3J0U2lnbmFsKS50aGVuKChpY29uKSA9PiB7XG4gICAgICAgICAgaWNvblNpZ25hbC5zZXQoeyBkYXRhOiBpY29uLCBmZXRjaGVkOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXB1dGVkKGljb25TaWduYWwsIChlbnRyeSkgPT4gZW50cnk/LmRhdGEpO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIGp1c3QgYWxlcnQgdGhhdCB0aGUgaWNvbiBpc24ndCByZWdpc3RlcmVkIGFuZCByZXR1cm4gdGhlIGZhbGxiYWNrXG4gICAgZWxzZSBpZiAoIWljb25SZWdpc3RlcmVkICYmICF0aGlzLmxhenlMb2FkRW5hYmxlZCkge1xuICAgICAgY29uc3QgdGVtcCA9IHRoaXMuaGFuZGxlZEZhaWxlZExvYWQoaWNvbkxpYnJhcnksIHBhdGhOYW1lKTtcbiAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBMb2dzIGEgd2FybmluZyBhbmQgcmV0dXJucyBmYWxsYmFjayBpY29uLiBDYWxsIHdoZW4gYXR0ZW1wdCB0byBsb2FkIGljb24gaGFzIGZhaWxlZC4gKi9cbiAgcHJpdmF0ZSBoYW5kbGVkRmFpbGVkTG9hZChpY29uTGlicmFyeSwgcGF0aE5hbWUsIGljb25TaWduYWw/OiBTaWduYWw8SWNvbkRhdGE+KSB7XG4gICAgLy8gQ3JlYXRlIHJldHVybiBzdWJqIGlmIG9uZSBpc24ndCBwYXNzZWRcbiAgICBpZiAoIWljb25TaWduYWwpIHtcbiAgICAgIGljb25TaWduYWwgPSBzaWduYWw8SWNvbkRhdGE+KHtcbiAgICAgICAgZGF0YTogdGhpcy5mYWxsYmFja0ljb24sXG4gICAgICAgIGZldGNoZWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuaWNvblJlZ2lzdHJ5LnNldChgJHtpY29uTGlicmFyeX0ke3RoaXMuZGVsaW1pdGVyfSR7cGF0aE5hbWV9YCwgaWNvblNpZ25hbCk7XG4gICAgaWYgKCF0aGlzLnRlc3RNb2RlRW5hYmxlZCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgTW9ydGFyOiBObyBpY29uIGlzIHJlZ2lzdGVyZWQgZm9yIHRoZSBwYXRoIG5hbWUgXCIke3BhdGhOYW1lfVwiLiBEaWQgeW91IGFkZCBpdCB0byB0aGUgbW9ydGFyIGljb24gcmVnaXN0cnk/YFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXB1dGVkKGljb25TaWduYWwsIChlbnRyeSkgPT4gZW50cnk/LmRhdGEpO1xuICB9XG5cbiAgLyoqIEZldGNoZXMgYW4gaWNvbiBmb3IgdGhlIGdpdmVuIGxpYnJhcnkgYnkgbmFtZSAqL1xuICBwcml2YXRlIGFzeW5jIGZldGNoSWNvbihwYXRoTmFtZTogc3RyaW5nLCBpY29uTGlicmFyeSA9ICdfZGVmYXVsdCcsIGFib3J0U2lnbmFsPzogQWJvcnRTaWduYWwpIHtcbiAgICBpZiAoIXRoaXMudGVzdE1vZGVFbmFibGVkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNvbHZlciA9IHRoaXMuaWNvblVybFJlc29sdmVycy5nZXQoaWNvbkxpYnJhcnkpO1xuICAgICAgICAvLyBJZiBubyByZXNvbHZlciBpcyByZWdpc3RlcmVkIGZvciB0aGUgcmVxdWVzdGVkIGxpYnJhcnlcbiAgICAgICAgaWYgKCFyZXNvbHZlcikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlOiBObyBpY29uVXJsUmVzb2x2ZXIgcmVnaXN0ZXJlZCBmb3IgbGlicmFyeTogXCIke2ljb25MaWJyYXJ5fVwiYFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tJY29uO1xuICAgICAgICB9XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgZmV0Y2ggcmVxdWVzdCBidXQgdG8gbm90IGF3YWl0IHlldFxuICAgICAgICBjb25zdCByZXEgPSBmZXRjaChyZXNvbHZlcihwYXRoTmFtZSksIHsgbWV0aG9kOiAnZ2V0Jywgc2lnbmFsOiBhYm9ydFNpZ25hbCB9KTtcbiAgICAgICAgY29uc3QgcmVzID0gdGhpcy5wYXJzZUljb25EYXRhKHBhdGhOYW1lLCByZXEpO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBJZiB0aGUgZmV0Y2ggZmFpbGVkIGxvZyBhbmQgcmV0dXJuIGZhbGxiYWNrXG4gICAgICAgIGlmIChwYXRoTmFtZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYE10ZUljb25SZWdpc3RyeVNlcnZpY2U6IGZhaWxlZCB0byBsb2FkIGljb246ICR7cGF0aE5hbWV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tJY29uO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mYWxsYmFja0ljb247XG4gIH1cblxuICAvKiogQXN5bmNocm9ub3VzbHkgcGFyc2UgaWNvbiBmZXRjaCByZXNwb25zZSBkYXRhICovXG4gIHByaXZhdGUgcGFyc2VJY29uRGF0YShwYXRoTmFtZTogc3RyaW5nLCByZXE6IFByb21pc2U8UmVzcG9uc2U+KTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVxXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMudGV4dCgpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBhdGhOYW1lKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYE10ZUljb25SZWdpc3RyeVNlcnZpY2U6IGZhaWxlZCB0byBsb2FkIGljb246ICR7cGF0aE5hbWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBHcmFjZWZ1bGx5IHJlc29sdmUgd2l0aCBmYWxsYmFjayBpY29uIG9uIGZhaWxlZCBsb2FkXG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuZmFsbGJhY2tJY29uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIC8vIEdyYWNlZnVsbHkgcmVzb2x2ZSB3aXRoIGZhbGxiYWNrIGljb24gb24gZXJyb3JcbiAgICAgICAgICByZXNvbHZlKHRoaXMuZmFsbGJhY2tJY29uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgTXRlSWNvblJlZ2lzdHJ5U2VydmljZSA9IG5ldyBfTXRlSWNvblJlZ2lzdHJ5U2VydmljZSgpO1xuXG4vKipcbiAqIEluc3RhbmNlIG9mIF9NdGVJY29uUmVnaXN0cnlTZXJ2aWNlIGV4cG9ydGVkIGFzIGEgc2luZ2xldG9uLlxuICpcbiAqIFNlcnZpY2UgdXNlZCB0byByZWdpc3RlciBzdmcgc3RyaW5ncyBmb3IgYSBnaXZlbiBpY29uIG5hbWUgYW5kIHRoZW4gbG9vayB0aGVtIHVwIGJ5IHRoYXQgc2FtZSBuYW1lLlxuICovXG5leHBvcnQgeyBNdGVJY29uUmVnaXN0cnlTZXJ2aWNlIH07XG4iLCAiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IGJhc2VTdHlsZXMsIGRlZmluZUVsZW1lbnQsIE10ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9jb3JlLyc7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL2hpbnQuc3R5bGVzJztcblxubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbi8qKlxuICogRWxlbWVudCB1c2VkIHRvIHJlcHJlc2VudCBoaW50IG1lc3NhZ2luZyB0ZXh0XG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtaGludCcpXG5leHBvcnQgY2xhc3MgTXRlSGludCBleHRlbmRzIE10ZUVsZW1lbnQge1xuICBzdGF0aWMgc3R5bGVzID0gW2Jhc2VTdHlsZXMsIHN0eWxlc107XG5cbiAgLyoqIERlZmF1bHQgdW5pcXVlIElEIGZvciB0aGlzIGhpbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBpZCA9IGBtdGUtaGludC0tJHtuZXh0VW5pcXVlSWQrK31gO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGAke3RoaXMuaW5zdGFuY2VTdHlsZXN9PHNsb3Q+PC9zbG90PmA7XG4gIH1cbn1cblxuLyoqXG4gKiBFbGVtZW50IHVzZWQgdG8gcmVwcmVzZW50IGhpbnQgbWVzc2FnaW5nIHRleHRcbiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS1oaW50LXRleHQnKVxuZXhwb3J0IGNsYXNzIE10ZUhpbnRUZXh0IGV4dGVuZHMgTXRlSGludCB7fVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdtdGUtaGludCc6IE10ZUhpbnQ7XG4gICAgJ210ZS1oaW50LXRleHQnOiBNdGVIaW50VGV4dDtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Y29sb3I6dmFyKC0tbXRlLWluay0yKTtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtd2VpZ2h0KTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1saW5lLWhlaWdodCk7bWFyZ2luOnZhcigtLW10ZS1zcGFjZS14cykgMDtvdmVyZmxvdzpoaWRkZW47dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt3aWR0aDoxMDAlfWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7YWxpZ24taXRlbXM6Y2VudGVyO2NvbG9yOmluaGVyaXQ7Y3Vyc29yOmluaGVyaXQ7ZGlzcGxheTpibG9jaztmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWZvbnQtd2VpZ2h0KTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC13ZWlnaHQtYm9sZCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWxpbmUtaGVpZ2h0KTttYXJnaW46dmFyKC0tbXRlLXNwYWNlLXhzKSAwO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXR9Omhvc3QoW2Rpc2FibGVkXSl7Y29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTQpO2N1cnNvcjpub3QtYWxsb3dlZH0ucmVxdWlyZWR7Y29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1iYXNlLXJnYikpO3BhZGRpbmctbGVmdDp2YXIoLS1tdGUtc3BhY2UteHMpfWA7IiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWxhYmVsLWdhcDp2YXIoLS1tdGUtc3BhY2UteHMpOy0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMyk7LS1ib3JkZXItaG92ZXItY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktYmFzZS1yZ2IpKTstLWJvcmRlci1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtc20pOy0tZm9jdXMtcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLW1kKTstLWFjY2VudC1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLXJnYikpOy0tY2hlY2stY29sb3I6cmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktYmFzZS1jLXJnYikpOy0tbGFiZWwtZm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1mb250LXNpemUpOy0tbGFiZWwtZm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtd2VpZ2h0KTstLWxhYmVsLWxpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1saW5lLWhlaWdodCk7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmNvbnRhaW5lcnthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTppbmxpbmUtZmxleDtnYXA6dmFyKC0tbGFiZWwtZ2FwKX0uY29udGFpbmVyLmhhcy1jb250ZW50e21hcmdpbi1yaWdodDpjYWxjKHZhcigtLWxhYmVsLWdhcCkqMil9LmNoZWNrYm94e2Rpc3BsYXk6ZmxleH0uY2hlY2tib3gsLmlucHV0e3Bvc2l0aW9uOnJlbGF0aXZlfS5pbnB1dHstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7aGVpZ2h0OjE2cHg7bWFyZ2luOjRweDt3aWR0aDoxNnB4fTpob3N0KFtjaGVja2VkXSkgLmlucHV0LDpob3N0KFtkaXNhYmxlZF0pIC5pbnB1dCw6aG9zdChbaW5kZXRlcm1pbmF0ZV0pIC5pbnB1dHtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFjY2VudC1jb2xvcik7Ym9yZGVyLWNvbG9yOnZhcigtLWFjY2VudC1jb2xvcil9Omhvc3QoW2NoZWNrZWRdKSAuaW5wdXQ6YWZ0ZXIsOmhvc3QoW2luZGV0ZXJtaW5hdGVdKSAuaW5wdXQ6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1jaGVjay1jb2xvcik7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlfTpob3N0KDpub3QoW2Rpc2FibGVkXSk6bm90KFtjaGVja2VkXSk6bm90KFtpbmRldGVybWluYXRlXSk6bm90KFtyZWFkT25seV0pOmhvdmVyKSAuaW5wdXR7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1ob3Zlci1jb2xvcil9Omhvc3QoW3NpemU9c21dKSAuaW5wdXR7aGVpZ2h0OjE0cHg7d2lkdGg6MTRweH0ubGFiZWx7Zm9udC1zaXplOnZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLWxhYmVsLWxpbmUtaGVpZ2h0KX06aG9zdChbc2l6ZT1zbV0pIC5sYWJlbHstLWxhYmVsLWZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC1zaXplKTstLWxhYmVsLWZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXdlaWdodCk7LS1sYWJlbC1saW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItbGluZS1oZWlnaHQpfS5jaGVja3tkaXNwbGF5Om5vbmV9Omhvc3QoW2NoZWNrZWRdOm5vdChbaW5kZXRlcm1pbmF0ZV0pKSAuY2hlY2t7Y29sb3I6dmFyKC0tY2hlY2stY29sb3IpO2Rpc3BsYXk6aW5saW5lO2xlZnQ6dmFyKC0tbXRlLXNwYWNlLXhzKTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6dmFyKC0tbXRlLXNwYWNlLXhzKX06aG9zdChbaW5kZXRlcm1pbmF0ZV0pIC5pbnB1dDphZnRlcntib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXNtKTtpbnNldDo2cHggM3B4fS5lcnJvciwuaGludCw6aG9zdCA6OnNsb3R0ZWQoW3Nsb3Q9ZXJyb3JdKSw6aG9zdCA6OnNsb3R0ZWQoW3Nsb3Q9aGludF0pe21hcmdpbi1sZWZ0OjI4cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoY2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpKi0xKSl9Omhvc3QoW3NpemU9c21dKSAuaGludCA6aG9zdChbc2l6ZT1zbV0pIC5lcnJvciw6aG9zdChbc2l6ZT1zbV0pIDo6c2xvdHRlZChbc2xvdD1lcnJvcl0pLDpob3N0KFtzaXplPXNtXSkgOjpzbG90dGVkKFtzbG90PWhpbnRdKXttYXJnaW4tbGVmdDoyNnB4fS5lcnJvciwuaGludCw6aG9zdCA6OnNsb3R0ZWQobXRlLWVycm9yKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWhpbnQpe3dpZHRoOmF1dG99Omhvc3QoW2NvbG9yPXByaW1hcnldKXstLWFjY2VudC1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLXJnYikpOy0tYm9yZGVyLWhvdmVyLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtcmdiKSk7LS1jaGVjay1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLWMtcmdiKSl9Omhvc3QoW2NvbG9yPXNlY29uZGFyeV0pey0tYWNjZW50LWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1yZ2IpKTstLWJvcmRlci1ob3Zlci1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWJhc2UtcmdiKSk7LS1jaGVjay1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWJhc2UtYy1yZ2IpKX06aG9zdChbY29sb3I9dGVydGlhcnldKXstLWFjY2VudC1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktYmFzZS1yZ2IpKTstLWJvcmRlci1ob3Zlci1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktYmFzZS1yZ2IpKTstLWNoZWNrLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLWMtcmdiKSl9Omhvc3QoW2NvbG9yPWRhbmdlcl0pey0tYWNjZW50LWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKTstLWJvcmRlci1ob3Zlci1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtcmdiKSk7LS1jaGVjay1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtYy1yZ2IpKX06aG9zdCAuaW5wdXQ6Zm9jdXMsOmhvc3QgLmlucHV0OmZvY3VzLXZpc2libGV7b3V0bGluZTpub25lfS5pbnB1dDpmb2N1cy12aXNpYmxlOm5vdCguZGlzYWJsZWQpOm5vdChbZGlzYWJsZWRdKTpub3QoOmRpc2FibGVkKTpiZWZvcmV7Ym9yZGVyOjJweCBzb2xpZCByZ2IodmFyKC0tbXRlLWZvY3VzLXJnYikpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tZm9jdXMtcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1mb2N1cy1yYWRpdXMpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tZm9jdXMtcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1mb2N1cy1yYWRpdXMpO2JvdHRvbTotNXB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDotNXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTVweDt0b3A6LTVweDt6LWluZGV4Ojl9Omhvc3QoW3JlYWRvbmx5XSl7LS1hY2NlbnQtY29sb3I6dmFyKC0tbXRlLXJlYWRvbmx5LTQpOy0tYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1yZWFkb25seS0zKTstLWNoZWNrLWNvbG9yOnZhcigtLW10ZS1yZWFkb25seS0xKTtjb2xvcjp2YXIoLS1tdGUtcmVhZG9ubHktNCk7Y3Vyc29yOmRlZmF1bHR9Omhvc3QoOm5vdChbcmVhZG9ubHldKSkgLmNvbnRhaW5lciw6aG9zdCg6bm90KFtyZWFkb25seV0pKSAuaW5wdXR7Y3Vyc29yOnBvaW50ZXJ9Omhvc3QoW2Rpc2FibGVkXSl7LS1hY2NlbnQtY29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTEpOy0tY2hlY2stY29sb3I6dmFyKC0tbXRlLWRpc2FibGVkLTMpfTpob3N0KFtkaXNhYmxlZF0pIC5jb250YWluZXIsOmhvc3QoW2Rpc2FibGVkXSkgLmlucHV0e2NvbG9yOnZhcigtLW10ZS1kaXNhYmxlZC00KTtjdXJz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LE1BQU0sMERBQTZDLEtBQUssS0FBSztJQUMvRCxDQUFDLDREQUl1Qiw0QkFBUyxFQUFFLFFBQVEsVUFBVSxDQUFDLENBQUMsU0FDcEQ7TUFDRCxLQUFLO01BQ0wsTUFBTSx1REFBMEMsS0FBSyxJQUFJO0lBQzNELENBQUM7RUFJVDtBQUNGO0FBN0dhLFlBV0osU0FBUyxDQUFDQyxTQUFZQSxRQUFNO0FBS047TUFBNUIsOEJBQVMsRUFBRSxTQUFTLEtBQUssQ0FBQztHQWhCaEIsWUFnQmtCO0FBR2U7TUFBM0MsOEJBQVMsRUFBRSxNQUFNLFNBQVMsU0FBUyxLQUFLLENBQUM7R0FuQi9CLFlBbUJpQztBQUdmO01BQTVCLDhCQUFTLEVBQUUsU0FBUyxLQUFLLENBQUM7R0F0QmhCLFlBc0JrQjtBQUdqQjtNQUFYLDhCQUFTO0dBekJDLFlBeUJDO0FBR1k7TUFBdkIsMkJBQU0sUUFBUTtHQTVCSixZQTRCYTtBQUdrQjtNQUF6QywyQ0FBc0IsRUFBRSxNQUFNLFFBQVEsQ0FBQztHQS9CN0IsWUErQitCO0FBL0IvQixjQUFOO0VBRE4sY0FBYyxjQUFjO0dBQ2hCOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9pY29ucyIsICJpbXBvcnRfc3R5bGVzIiwgImltcG9ydF9zdHlsZXMiLCAiYWNjIiwgInByb3AiLCAidmFsdWUiLCAic3R5bGVzIiwgImRlcCIsICJpbXBvcnRfc3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X3N0eWxlcyIsICJnZXR0ZXJDb25maWciLCAib2JzZXJ2ZXIiLCAiZSIsICJzZXR0ZXJDb25maWciLCAiY3NzVmFyIiwgIm9ic2VydmVyIiwgInBvcnRhbENvbnRyb2xsZXIiLCAiZWxlbWVudCIsICJzY3JvbGxYIiwgInNjcm9sbFkiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAicHJlc2V0IiwgIm9wdGlvbnMiLCAiaW1wb3J0X2NvbnRleHQiLCAiY29udGV4dCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfaWZfZGVmaW5lZCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9zdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2NsYXNzX21hcCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgIm5vZGUiLCAib2JzZXJ2ZXIiLCAic3RhdGUiLCAiaW1wb3J0X2lzX3NlcnZlciIsICJvYnNlcnZlciIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAic3R5bGVzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2lmX2RlZmluZWQiLCAiaW1wb3J0X2ljb25zIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaWNvbkxpYnJhcnkiLCAiaW1wb3J0X3Vuc2FmZV9zdmciLCAiaW1wb3J0X3N0eWxlcyIsICJzdHlsZXMiLCAibmV4dFVuaXF1ZUlkIiwgInN0eWxlcyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgIm5leHRVbmlxdWVJZCIsICJzdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJuZXh0VW5pcXVlSWQiLCAic3R5bGVzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF93aGVuIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9jbGFzc19tYXAiLCAiaW1wb3J0X2lmX2RlZmluZWQiLCAibmV4dFVuaXF1ZUlkIiwgInN0eWxlcyJdCn0K
