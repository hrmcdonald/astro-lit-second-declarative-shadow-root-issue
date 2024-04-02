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

// src/atomic/toolbar/index.ts
var toolbar_exports = {};
__export(toolbar_exports, {
  MteToolbar: () => MteToolbar,
  MteToolbarRow: () => MteToolbarRow,
  MteToolbarSection: () => MteToolbarSection
});
module.exports = __toCommonJS(toolbar_exports);

// src/core/presets/preset.decorator.ts
var import_property = require("@lit/reactive-element/decorators/property.js");
function presetProperty(options) {
  return (0, import_property.property)({
    ...options,
    isPreset: true
  });
}

// src/core/mixins/density.mixin.ts
var DensityMixin = (superClass) => {
  class DensityElement extends superClass {
  }
  __decorateClass([
    presetProperty({ reflect: true })
  ], DensityElement.prototype, "density", 2);
  return DensityElement;
};

// src/atomic/toolbar/toolbar.element.ts
var import_lit15 = require("lit");
var import_decorators19 = require("lit/decorators.js");

// src/atomic/toolbar/toolbar.styles.ts
var import_lit = require("lit");
var styles = import_lit.css`:host{--toolbar-min-height:60px;--toolbar-padding:8px;--toolbar-gap:8px;align-items:center;background:rgb(var(--mte-surface-3-rgb));box-sizing:border-box;color:inherit;display:flex;flex-wrap:wrap;gap:var(--toolbar-padding);justify-content:flex-start;max-height:auto;min-height:var(--toolbar-min-height);padding:var(--toolbar-padding) calc(var(--toolbar-padding)*2);position:relative;width:100%}:host([hasRowElemChild]){align-items:flex-start;flex-direction:column;flex-wrap:nowrap;gap:0;justify-content:center}:host([inverse]){background:rgb(var(--mte-surface-inverse-rgb));color:rgb(var(--mte-ink-inverse-rgb))}:host([transparent]){background-color:transparent;color:inherit!important}:host([transparent]){padding-left:0;padding-right:0}:host([density=compact]){--toolbar-min-height:48px;--toolbar-padding:6px;--toolbar-gap:6px}:host ::slotted(mte-title){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-body1-font-size);font-weight:var(--mte-font-set-body1-font-weight);line-height:var(--mte-font-set-body1-line-height);text-decoration:inherit;text-overflow:ellipsis;text-transform:inherit;white-spacing:nowrap;font-weight:var(--mte-font-weight-bold);overflow:hidden;padding-bottom:0;padding-left:0;padding-right:var(--toolbar-gap);padding-top:0;white-space:nowrap;z-index:1}:host ::slotted(mte-toolbar-section:not(:last-of-type):not(:first-of-type)){justify-content:center;order:0}:host ::slotted(mte-toolbar-section:last-of-type){justify-content:flex-end;order:1}:host ::slotted(mte-toolbar-section:first-of-type){justify-content:flex-start;order:-1}`;

// src/core/base-classes/mte.element.ts
var import_decorators = require("lit/decorators.js");
var import_lit2 = require("lit");

// ../styles/dist/styles/index.js
var core_vars_getter_map_default = {
  "opacity": {
    "xxl": "var(--mte-opacity-xxl)",
    "xl": "var(--mte-opacity-xl)",
    "lg": "var(--mte-opacity-lg)",
    "md": "var(--mte-opacity-md)",
    "sm": "var(--mte-opacity-sm)",
    "xs": "var(--mte-opacity-xs)",
    "xxs": "var(--mte-opacity-xxs)",
    "xxxs": "var(--mte-opacity-xxxs)"
  },
  "border": {
    "radius": {
      "none": "var(--mte-border-radius-none)",
      "xs": "var(--mte-border-radius-xs)",
      "sm": "var(--mte-border-radius-sm)",
      "md": "var(--mte-border-radius-md)",
      "lg": "var(--mte-border-radius-lg)",
      "xl": "var(--mte-border-radius-xl)",
      "xxl": "var(--mte-border-radius-xxl)",
      "full": "var(--mte-border-radius-full)"
    },
    "width": {
      "none": "var(--mte-border-width-none)",
      "default": "var(--mte-border-width-default)",
      "sm": "var(--mte-border-width-sm)",
      "md": "var(--mte-border-width-md)",
      "lg": "var(--mte-border-width-lg)"
    }
  },
  "elevation": {
    "level": {
      "0": "var(--mte-elevation-level-0)",
      "1": "var(--mte-elevation-level-1)",
      "2": "var(--mte-elevation-level-2)",
      "3": "var(--mte-elevation-level-3)",
      "4": "var(--mte-elevation-level-4)"
    },
    "opacity": {
      "0": "var(--mte-elevation-opacity-0)",
      "1": "var(--mte-elevation-opacity-1)",
      "2": "var(--mte-elevation-opacity-2)",
      "3": "var(--mte-elevation-opacity-3)",
      "4": "var(--mte-elevation-opacity-4)"
    },
    "z0": "var(--mte-elevation-z0)",
    "z1": "var(--mte-elevation-z1)",
    "z2": "var(--mte-elevation-z2)",
    "z3": "var(--mte-elevation-z3)",
    "z4": "var(--mte-elevation-z4)"
  },
  "zIndex": {
    "0": "var(--mte-z-index-0)",
    "10": "var(--mte-z-index-10)",
    "20": "var(--mte-z-index-20)",
    "30": "var(--mte-z-index-30)",
    "40": "var(--mte-z-index-40)",
    "50": "var(--mte-z-index-50)",
    "-1": "var(--mte-z-index-1)",
    "auto": "var(--mte-z-index-auto)"
  },
  "grid": {
    "breakpoint": {
      "xs": "0",
      "sm": "480px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "xxl": "1536px"
    },
    "containerMaxWidth": {
      "sm": "768px",
      "md": "1024px",
      "lg": "1280px",
      "xl": "1440px",
      "xxl": "1440px"
    }
  },
  "size": {
    "scale": {
      "sm": "var(--mte-size-scale-sm)",
      "md": "var(--mte-size-scale-md)",
      "lg": "var(--mte-size-scale-lg)"
    },
    "densities": [
      "compact",
      "comfy",
      "roomy"
    ]
  },
  "space": {
    "none": "var(--mte-space-none)",
    "xxs": "var(--mte-space-xxs)",
    "xs": "var(--mte-space-xs)",
    "sm": "var(--mte-space-sm)",
    "md": "var(--mte-space-md)",
    "lg": "var(--mte-space-lg)",
    "xl": "var(--mte-space-xl)",
    "xxl": "var(--mte-space-xxl)",
    "xxxl": "var(--mte-space-xxxl)",
    "compact": {
      "none": "var(--mte-space-compact-none)",
      "xxs": "var(--mte-space-compact-xxs)",
      "xs": "var(--mte-space-compact-xs)",
      "sm": "var(--mte-space-compact-sm)",
      "md": "var(--mte-space-compact-md)",
      "lg": "var(--mte-space-compact-lg)",
      "xl": "var(--mte-space-compact-xl)",
      "xxl": "var(--mte-space-compact-xxl)",
      "xxxl": "var(--mte-space-compact-xxxl)"
    },
    "comfy": {
      "none": "var(--mte-space-comfy-none)",
      "xxs": "var(--mte-space-comfy-xxs)",
      "xs": "var(--mte-space-comfy-xs)",
      "sm": "var(--mte-space-comfy-sm)",
      "md": "var(--mte-space-comfy-md)",
      "lg": "var(--mte-space-comfy-lg)",
      "xl": "var(--mte-space-comfy-xl)",
      "xxl": "var(--mte-space-comfy-xxl)",
      "xxxl": "var(--mte-space-comfy-xxxl)"
    },
    "roomy": {
      "none": "var(--mte-space-roomy-none)",
      "xxs": "var(--mte-space-roomy-xxs)",
      "xs": "var(--mte-space-roomy-xs)",
      "sm": "var(--mte-space-roomy-sm)",
      "md": "var(--mte-space-roomy-md)",
      "lg": "var(--mte-space-roomy-lg)",
      "xl": "var(--mte-space-roomy-xl)",
      "xxl": "var(--mte-space-roomy-xxl)",
      "xxxl": "var(--mte-space-roomy-xxxl)"
    }
  },
  "font": {
    "base": "var(--mte-font-base)",
    "family": {
      "sans": "var(--mte-font-family-sans)",
      "serif": "var(--mte-font-family-serif)",
      "mono": "var(--mte-font-family-mono)"
    },
    "weight": {
      "light": "var(--mte-font-weight-light)",
      "regular": "var(--mte-font-weight-regular)",
      "medium": "var(--mte-font-weight-medium)",
      "bold": "var(--mte-font-weight-bold)"
    },
    "ratio": {
      "sm": 0.8,
      "md": 1,
      "lg": 1.2
    },
    "set": {
      "h1": {
        "fontSize": "var(--mte-font-set-h1-font-size)",
        "lineHeight": "var(--mte-font-set-h1-line-height)",
        "fontWeight": "var(--mte-font-set-h1-font-weight)"
      },
      "h2": {
        "fontSize": "var(--mte-font-set-h2-font-size)",
        "lineHeight": "var(--mte-font-set-h2-line-height)",
        "fontWeight": "var(--mte-font-set-h2-font-weight)"
      },
      "h3": {
        "fontSize": "var(--mte-font-set-h3-font-size)",
        "lineHeight": "var(--mte-font-set-h3-line-height)",
        "fontWeight": "var(--mte-font-set-h3-font-weight)"
      },
      "h4": {
        "fontSize": "var(--mte-font-set-h4-font-size)",
        "lineHeight": "var(--mte-font-set-h4-line-height)",
        "fontWeight": "var(--mte-font-set-h4-font-weight)"
      },
      "h5": {
        "fontSize": "var(--mte-font-set-h5-font-size)",
        "lineHeight": "var(--mte-font-set-h5-line-height)",
        "fontWeight": "var(--mte-font-set-h5-font-weight)"
      },
      "h6": {
        "fontSize": "var(--mte-font-set-h6-font-size)",
        "lineHeight": "var(--mte-font-set-h6-line-height)",
        "fontWeight": "var(--mte-font-set-h6-font-weight)"
      },
      "subtitle": {
        "fontSize": "var(--mte-font-set-subtitle-font-size)",
        "lineHeight": "var(--mte-font-set-subtitle-line-height)",
        "fontWeight": "var(--mte-font-set-subtitle-font-weight)"
      },
      "body1": {
        "fontSize": "var(--mte-font-set-body1-font-size)",
        "lineHeight": "var(--mte-font-set-body1-line-height)",
        "fontWeight": "var(--mte-font-set-body1-font-weight)"
      },
      "body2": {
        "fontSize": "var(--mte-font-set-body2-font-size)",
        "lineHeight": "var(--mte-font-set-body2-line-height)",
        "fontWeight": "var(--mte-font-set-body2-font-weight)"
      },
      "caption": {
        "fontSize": "var(--mte-font-set-caption-font-size)",
        "lineHeight": "var(--mte-font-set-caption-line-height)",
        "fontWeight": "var(--mte-font-set-caption-font-weight)"
      },
      "button": {
        "fontSize": "var(--mte-font-set-button-font-size)",
        "lineHeight": "var(--mte-font-set-button-line-height)",
        "fontWeight": "var(--mte-font-set-button-font-weight)"
      }
    }
  },
  "animation": {
    "transitionDuration": {
      "extraShort": "80ms",
      "shorter": "120ms",
      "short": "200ms",
      "default": "300ms",
      "long": "500ms"
    },
    "transitionDurationJs": {
      "extraShort": 0.08,
      "shorter": 0.12,
      "short": 0.2,
      "default": 0.3,
      "long": 0.5
    },
    "timingFunction": {
      "decelerateOut": "cubic-bezier(0, 0, 0.2, 1)",
      "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      "accelerateIn": "cubic-bezier(0.4, 0, 1, 1)",
      "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
      "inOut": "cubic-bezier(0.35, 0, 0.25, 1)"
    },
    "timingFunctionJs": {
      "decelerateOut": [
        0,
        0,
        0.2,
        1
      ],
      "standard": [
        0.4,
        0,
        0.2,
        1
      ],
      "accelerateIn": [
        0.4,
        0,
        1,
        1
      ],
      "sharp": [
        0.4,
        0,
        0.6,
        1
      ],
      "inOut": [
        0.35,
        0,
        0.25,
        1
      ]
    }
  }
};
var theme_vars_getter_map_default = {
  "color": {
    "black": "var(--mte-black)",
    "white": "var(--mte-white)",
    "light": "var(--mte-light)",
    "dark": "var(--mte-dark)",
    "darker": "var(--mte-darker)",
    "focus": "var(--mte-focus)",
    "focusLighter": "var(--mte-focus-lighter)",
    "focusContrast": "var(--mte-focus-contrast)",
    "grey1": "var(--mte-grey-1)",
    "grey2": "var(--mte-grey-2)",
    "grey3": "var(--mte-grey-3)",
    "grey4": "var(--mte-grey-4)",
    "grey5": "var(--mte-grey-5)",
    "grey6": "var(--mte-grey-6)",
    "grey7": "var(--mte-grey-7)",
    "grey8": "var(--mte-grey-8)",
    "grey9": "var(--mte-grey-9)",
    "grey10": "var(--mte-grey-10)",
    "surface1": "var(--mte-surface-1)",
    "surface2": "var(--mte-surface-2)",
    "surface3": "var(--mte-surface-3)",
    "surface4": "var(--mte-surface-4)",
    "surfaceInverse": "var(--mte-surface-inverse)",
    "ink1": "var(--mte-ink-1)",
    "ink2": "var(--mte-ink-2)",
    "ink3": "var(--mte-ink-3)",
    "ink4": "var(--mte-ink-4)",
    "ink5": "var(--mte-ink-5)",
    "inkInverse": "var(--mte-ink-inverse)",
    "border1": "var(--mte-border-1)",
    "border2": "var(--mte-border-2)",
    "border3": "var(--mte-border-3)",
    "borderInverse": "var(--mte-border-inverse)",
    "disabled1": "var(--mte-disabled-1)",
    "disabled2": "var(--mte-disabled-2)",
    "disabled3": "var(--mte-disabled-3)",
    "disabled4": "var(--mte-disabled-4)",
    "disabledInverse1": "var(--mte-disabled-inverse-1)",
    "disabledInverse2": "var(--mte-disabled-inverse-2)",
    "disabledInverse3": "var(--mte-disabled-inverse-3)",
    "readonly1": "var(--mte-readonly-1)",
    "readonly2": "var(--mte-readonly-2)",
    "readonly3": "var(--mte-readonly-3)",
    "readonly4": "var(--mte-readonly-4)",
    "elevationBase": "var(--mte-elevation-base)",
    "code1": "var(--mte-code-1)",
    "code2": "var(--mte-code-2)"
  },
  "palette": {
    "green": {
      "lighter": {
        "color": "var(--mte-green-lighter)",
        "contrast": "var(--mte-green-lighter-contrast)"
      },
      "light": {
        "color": "var(--mte-green-light)",
        "contrast": "var(--mte-green-light-contrast)"
      },
      "base": {
        "color": "var(--mte-green-base)",
        "contrast": "var(--mte-green-base-contrast)"
      },
      "dark": {
        "color": "var(--mte-green-dark)",
        "contrast": "var(--mte-green-dark-contrast)"
      },
      "darker": {
        "color": "var(--mte-green-darker)",
        "contrast": "var(--mte-green-darker-contrast)"
      }
    },
    "teal": {
      "lighter": {
        "color": "var(--mte-teal-lighter)",
        "contrast": "var(--mte-teal-lighter-contrast)"
      },
      "light": {
        "color": "var(--mte-teal-light)",
        "contrast": "var(--mte-teal-light-contrast)"
      },
      "base": {
        "color": "var(--mte-teal-base)",
        "contrast": "var(--mte-teal-base-contrast)"
      },
      "dark": {
        "color": "var(--mte-teal-dark)",
        "contrast": "var(--mte-teal-dark-contrast)"
      },
      "darker": {
        "color": "var(--mte-teal-darker)",
        "contrast": "var(--mte-teal-darker-contrast)"
      }
    },
    "cyan": {
      "lighter": {
        "color": "var(--mte-cyan-lighter)",
        "contrast": "var(--mte-cyan-lighter-contrast)"
      },
      "light": {
        "color": "var(--mte-cyan-light)",
        "contrast": "var(--mte-cyan-light-contrast)"
      },
      "base": {
        "color": "var(--mte-cyan-base)",
        "contrast": "var(--mte-cyan-base-contrast)"
      },
      "dark": {
        "color": "var(--mte-cyan-dark)",
        "contrast": "var(--mte-cyan-dark-contrast)"
      },
      "darker": {
        "color": "var(--mte-cyan-darker)",
        "contrast": "var(--mte-cyan-darker-contrast)"
      }
    },
    "blue": {
      "lighter": {
        "color": "var(--mte-blue-lighter)",
        "contrast": "var(--mte-blue-lighter-contrast)"
      },
      "light": {
        "color": "var(--mte-blue-light)",
        "contrast": "var(--mte-blue-light-contrast)"
      },
      "base": {
        "color": "var(--mte-blue-base)",
        "contrast": "var(--mte-blue-base-contrast)"
      },
      "dark": {
        "color": "var(--mte-blue-dark)",
        "contrast": "var(--mte-blue-dark-contrast)"
      },
      "darker": {
        "color": "var(--mte-blue-darker)",
        "contrast": "var(--mte-blue-darker-contrast)"
      }
    },
    "rxBlue": {
      "lighter": {
        "color": "var(--mte-rx-blue-lighter)",
        "contrast": "var(--mte-rx-blue-lighter-contrast)"
      },
      "light": {
        "color": "var(--mte-rx-blue-light)",
        "contrast": "var(--mte-rx-blue-light-contrast)"
      },
      "base": {
        "color": "var(--mte-rx-blue-base)",
        "contrast": "var(--mte-rx-blue-base-contrast)"
      },
      "dark": {
        "color": "var(--mte-rx-blue-dark)",
        "contrast": "var(--mte-rx-blue-dark-contrast)"
      },
      "darker": {
        "color": "var(--mte-rx-blue-darker)",
        "contrast": "var(--mte-rx-blue-darker-contrast)"
      }
    },
    "purple": {
      "lighter": {
        "color": "var(--mte-purple-lighter)",
        "contrast": "var(--mte-purple-lighter-contrast)"
      },
      "light": {
        "color": "var(--mte-purple-light)",
        "contrast": "var(--mte-purple-light-contrast)"
      },
      "base": {
        "color": "var(--mte-purple-base)",
        "contrast": "var(--mte-purple-base-contrast)"
      },
      "dark": {
        "color": "var(--mte-purple-dark)",
        "contrast": "var(--mte-purple-dark-contrast)"
      },
      "darker": {
        "color": "var(--mte-purple-darker)",
        "contrast": "var(--mte-purple-darker-contrast)"
      }
    },
    "magenta": {
      "lighter": {
        "color": "var(--mte-magenta-lighter)",
        "contrast": "var(--mte-magenta-lighter-contrast)"
      },
      "light": {
        "color": "var(--mte-magenta-light)",
        "contrast": "var(--mte-magenta-light-contrast)"
      },
      "base": {
        "color": "var(--mte-magenta-base)",
        "contrast": "var(--mte-magenta-base-contrast)"
      },
      "dark": {
        "color": "var(--mte-magenta-dark)",
        "contrast": "var(--mte-magenta-dark-contrast)"
      },
      "darker": {
        "color": "var(--mte-magenta-darker)",
        "contrast": "var(--mte-magenta-darker-contrast)"
      }
    },
    "red": {
      "lighter": {
        "color": "var(--mte-red-lighter)",
        "contrast": "var(--mte-red-lighter-contrast)"
      },
      "light": {
        "color": "var(--mte-red-light)",
        "contrast": "var(--mte-red-light-contrast)"
      },
      "base": {
        "color": "var(--mte-red-base)",
        "contrast": "var(--mte-red-base-contrast)"
      },
      "dark": {
        "color": "var(--mte-red-dark)",
        "contrast": "var(--mte-red-dark-contrast)"
      },
      "darker": {
        "color": "var(--mte-red-darker)",
        "contrast": "var(--mte-red-darker-contrast)"
      }
    },
    "hebRed": {
      "lighter": {
        "color": "var(--mte-heb-red-lighter)",
        "contrast": "var(--mte-heb-red-lighter-contrast)"
      },
      "light": {
        "color": "var(--mte-heb-red-light)",
        "contrast": "var(--mte-heb-red-light-contrast)"
      },
      "base": {
        "color": "var(--mte-heb-red-base)",
        "contrast": "var(--mte-heb-red-base-contrast)"
      },
      "dark": {
        "color": "var(--mte-heb-red-dark)",
        "contrast": "var(--mte-heb-red-dark-contrast)"
      },
      "darker": {
        "color": "var(--mte-heb-red-darker)",
        "contrast": "var(--mte-heb-red-darker-contrast)"
      }
    },
    "orange": {
      "lighter": {
        "color": "var(--mte-orange-lighter)",
        "contrast": "var(--mte-orange-lighter-contrast)"
      },
      "light": {
        "color": "var(--mte-orange-light)",
        "contrast": "var(--mte-orange-light-contrast)"
      },
      "base": {
        "color": "var(--mte-orange-base)",
        "contrast": "var(--mte-orange-base-contrast)"
      },
      "dark": {
        "color": "var(--mte-orange-dark)",
        "contrast": "var(--mte-orange-dark-contrast)"
      },
      "darker": {
        "color": "var(--mte-orange-darker)",
        "contrast": "var(--mte-orange-darker-contrast)"
      }
    },
    "amber": {
      "lighter": {
        "color": "var(--mte-amber-lighter)",
        "contrast": "var(--mte-amber-lighter-contrast)"
      },
      "light": {
        "color": "var(--mte-amber-light)",
        "contrast": "var(--mte-amber-light-contrast)"
      },
      "base": {
        "color": "var(--mte-amber-base)",
        "contrast": "var(--mte-amber-base-contrast)"
      },
      "dark": {
        "color": "var(--mte-amber-dark)",
        "contrast": "var(--mte-amber-dark-contrast)"
      },
      "darker": {
        "color": "var(--mte-amber-darker)",
        "contrast": "var(--mte-amber-darker-contrast)"
      }
    },
    "yellow": {
      "lighter": {
        "color": "var(--mte-yellow-lighter)",
        "contrast": "var(--mte-yellow-lighter-contrast)"
      },
      "light": {
        "color": "var(--mte-yellow-light)",
        "contrast": "var(--mte-yellow-light-contrast)"
      },
      "base": {
        "color": "var(--mte-yellow-base)",
        "contrast": "var(--mte-yellow-base-contrast)"
      },
      "dark": {
        "color": "var(--mte-yellow-dark)",
        "contrast": "var(--mte-yellow-dark-contrast)"
      },
      "darker": {
        "color": "var(--mte-yellow-darker)",
        "contrast": "var(--mte-yellow-darker-contrast)"
      }
    },
    "couponYellow": {
      "lighter": {
        "color": "var(--mte-coupon-yellow-lighter)",
        "contrast": "var(--mte-coupon-yellow-lighter-contrast)"
      },
      "light": {
        "color": "var(--mte-coupon-yellow-light)",
        "contrast": "var(--mte-coupon-yellow-light-contrast)"
      },
      "base": {
        "color": "var(--mte-coupon-yellow-base)",
        "contrast": "var(--mte-coupon-yellow-base-contrast)"
      },
      "dark": {
        "color": "var(--mte-coupon-yellow-dark)",
        "contrast": "var(--mte-coupon-yellow-dark-contrast)"
      },
      "darker": {
        "color": "var(--mte-coupon-yellow-darker)",
        "contrast": "var(--mte-coupon-yellow-darker-contrast)"
      }
    }
  },
  "pg": {
    "core": {
      "primary": {
        "lighter": {
          "color": "rgb(var(--mte-core-primary-lighter-rgb))",
          "contrast": "rgb(var(--mte-core-primary-lighter-c-rgb))"
        },
        "light": {
          "color": "rgb(var(--mte-core-primary-light-rgb))",
          "contrast": "rgb(var(--mte-core-primary-light-c-rgb))"
        },
        "base": {
          "color": "rgb(var(--mte-core-primary-base-rgb))",
          "contrast": "rgb(var(--mte-core-primary-base-c-rgb))"
        },
        "dark": {
          "color": "rgb(var(--mte-core-primary-dark-rgb))",
          "contrast": "rgb(var(--mte-core-primary-dark-c-rgb))"
        },
        "darker": {
          "color": "rgb(var(--mte-core-primary-darker-rgb))",
          "contrast": "rgb(var(--mte-core-primary-darker-c-rgb))"
        }
      },
      "secondary": {
        "lighter": {
          "color": "rgb(var(--mte-core-secondary-lighter-rgb))",
          "contrast": "rgb(var(--mte-core-secondary-lighter-c-rgb))"
        },
        "light": {
          "color": "rgb(var(--mte-core-secondary-light-rgb))",
          "contrast": "rgb(var(--mte-core-secondary-light-c-rgb))"
        },
        "base": {
          "color": "rgb(var(--mte-core-secondary-base-rgb))",
          "contrast": "rgb(var(--mte-core-secondary-base-c-rgb))"
        },
        "dark": {
          "color": "rgb(var(--mte-core-secondary-dark-rgb))",
          "contrast": "rgb(var(--mte-core-secondary-dark-c-rgb))"
        },
        "darker": {
          "color": "rgb(var(--mte-core-secondary-darker-rgb))",
          "contrast": "rgb(var(--mte-core-secondary-darker-c-rgb))"
        }
      },
      "tertiary": {
        "lighter": {
          "color": "rgb(var(--mte-core-tertiary-lighter-rgb))",
          "contrast": "rgb(var(--mte-core-tertiary-lighter-c-rgb))"
        },
        "light": {
          "color": "rgb(var(--mte-core-tertiary-light-rgb))",
          "contrast": "rgb(var(--mte-core-tertiary-light-c-rgb))"
        },
        "base": {
          "color": "rgb(var(--mte-core-tertiary-base-rgb))",
          "contrast": "rgb(var(--mte-core-tertiary-base-c-rgb))"
        },
        "dark": {
          "color": "rgb(var(--mte-core-tertiary-dark-rgb))",
          "contrast": "rgb(var(--mte-core-tertiary-dark-c-rgb))"
        },
        "darker": {
          "color": "rgb(var(--mte-core-tertiary-darker-rgb))",
          "contrast": "rgb(var(--mte-core-tertiary-darker-c-rgb))"
        }
      },
      "danger": {
        "lighter": {
          "color": "rgb(var(--mte-core-danger-lighter-rgb))",
          "contrast": "rgb(var(--mte-core-danger-lighter-c-rgb))"
        },
        "light": {
          "color": "rgb(var(--mte-core-danger-light-rgb))",
          "contrast": "rgb(var(--mte-core-danger-light-c-rgb))"
        },
        "base": {
          "color": "rgb(var(--mte-core-danger-base-rgb))",
          "contrast": "rgb(var(--mte-core-danger-base-c-rgb))"
        },
        "dark": {
          "color": "rgb(var(--mte-core-danger-dark-rgb))",
          "contrast": "rgb(var(--mte-core-danger-dark-c-rgb))"
        },
        "darker": {
          "color": "rgb(var(--mte-core-danger-darker-rgb))",
          "contrast": "rgb(var(--mte-core-danger-darker-c-rgb))"
        }
      }
    },
    "status": {
      "primary": {
        "lighter": {
          "color": "rgb(var(--mte-status-primary-lighter-rgb))",
          "contrast": "rgb(var(--mte-status-primary-lighter-c-rgb))"
        },
        "light": {
          "color": "rgb(var(--mte-status-primary-light-rgb))",
          "contrast": "rgb(var(--mte-status-primary-light-c-rgb))"
        },
        "base": {
          "color": "rgb(var(--mte-status-primary-base-rgb))",
          "contrast": "rgb(var(--mte-status-primary-base-c-rgb))"
        },
        "dark": {
          "color": "rgb(var(--mte-status-primary-dark-rgb))",
          "contrast": "rgb(var(--mte-status-primary-dark-c-rgb))"
        },
        "darker": {
          "color": "rgb(var(--mte-status-primary-darker-rgb))",
          "contrast": "rgb(var(--mte-status-primary-darker-c-rgb))"
        }
      },
      "secondary": {
        "lighter": {
          "color": "rgb(var(--mte-status-secondary-lighter-rgb))",
          "contrast": "rgb(var(--mte-status-secondary-lighter-c-rgb))"
        },
        "light": {
          "color": "rgb(var(--mte-status-secondary-light-rgb))",
          "contrast": "rgb(var(--mte-status-secondary-light-c-rgb))"
        },
        "base": {
          "color": "rgb(var(--mte-status-secondary-base-rgb))",
          "contrast": "rgb(var(--mte-status-secondary-base-c-rgb))"
        },
        "dark": {
          "color": "rgb(var(--mte-status-secondary-dark-rgb))",
          "contrast": "rgb(var(--mte-status-secondary-dark-c-rgb))"
        },
        "darker": {
          "color": "rgb(var(--mte-status-secondary-darker-rgb))",
          "contrast": "rgb(var(--mte-status-secondary-darker-c-rgb))"
        }
      },
      "tertiary": {
        "lighter": {
          "color": "rgb(var(--mte-status-tertiary-lighter-rgb))",
          "contrast": "rgb(var(--mte-status-tertiary-lighter-c-rgb))"
        },
        "light": {
          "color": "rgb(var(--mte-status-tertiary-light-rgb))",
          "contrast": "rgb(var(--mte-status-tertiary-light-c-rgb))"
        },
        "base": {
          "color": "rgb(var(--mte-status-tertiary-base-rgb))",
          "contrast": "rgb(var(--mte-status-tertiary-base-c-rgb))"
        },
        "dark": {
          "color": "rgb(var(--mte-status-tertiary-dark-rgb))",
          "contrast": "rgb(var(--mte-status-tertiary-dark-c-rgb))"
        },
        "darker": {
          "color": "rgb(var(--mte-status-tertiary-darker-rgb))",
          "contrast": "rgb(var(--mte-status-tertiary-darker-c-rgb))"
        }
      },
      "success": {
        "lighter": {
          "color": "rgb(var(--mte-status-success-lighter-rgb))",
          "contrast": "rgb(var(--mte-status-success-lighter-c-rgb))"
        },
        "light": {
          "color": "rgb(var(--mte-status-success-light-rgb))",
          "contrast": "rgb(var(--mte-status-success-light-c-rgb))"
        },
        "base": {
          "color": "rgb(var(--mte-status-success-base-rgb))",
          "contrast": "rgb(var(--mte-status-success-base-c-rgb))"
        },
        "dark": {
          "color": "rgb(var(--mte-status-success-dark-rgb))",
          "contrast": "rgb(var(--mte-status-success-dark-c-rgb))"
        },
        "darker": {
          "color": "rgb(var(--mte-status-success-darker-rgb))",
          "contrast": "rgb(var(--mte-status-success-darker-c-rgb))"
        }
      },
      "warning": {
        "lighter": {
          "color": "rgb(var(--mte-status-warning-lighter-rgb))",
          "contrast": "rgb(var(--mte-status-warning-lighter-c-rgb))"
        },
        "light": {
          "color": "rgb(var(--mte-status-warning-light-rgb))",
          "contrast": "rgb(var(--mte-status-warning-light-c-rgb))"
        },
        "base": {
          "color": "rgb(var(--mte-status-warning-base-rgb))",
          "contrast": "rgb(var(--mte-status-warning-base-c-rgb))"
        },
        "dark": {
          "color": "rgb(var(--mte-status-warning-dark-rgb))",
          "contrast": "rgb(var(--mte-status-warning-dark-c-rgb))"
        },
        "darker": {
          "color": "rgb(var(--mte-status-warning-darker-rgb))",
          "contrast": "rgb(var(--mte-status-warning-darker-c-rgb))"
        }
      },
      "danger": {
        "lighter": {
          "color": "rgb(var(--mte-status-danger-lighter-rgb))",
          "contrast": "rgb(var(--mte-status-danger-lighter-c-rgb))"
        },
        "light": {
          "color": "rgb(var(--mte-status-danger-light-rgb))",
          "contrast": "rgb(var(--mte-status-danger-light-c-rgb))"
        },
        "base": {
          "color": "rgb(var(--mte-status-danger-base-rgb))",
          "contrast": "rgb(var(--mte-status-danger-base-c-rgb))"
        },
        "dark": {
          "color": "rgb(var(--mte-status-danger-dark-rgb))",
          "contrast": "rgb(var(--mte-status-danger-dark-c-rgb))"
        },
        "darker": {
          "color": "rgb(var(--mte-status-danger-darker-rgb))",
          "contrast": "rgb(var(--mte-status-danger-darker-c-rgb))"
        }
      }
    },
    "viz": {
      "one": {
        "lighter": {
          "color": "rgb(var(--mte-viz-one-lighter-rgb))",
          "contrast": "rgb(var(--mte-viz-one-lighter-c-rgb))"
        },
        "light": {
          "color": "rgb(var(--mte-viz-one-light-rgb))",
          "contrast": "rgb(var(--mte-viz-one-light-c-rgb))"
        },
        "base": {
          "color": "rgb(var(--mte-viz-one-base-rgb))",
          "contrast": "rgb(var(--mte-viz-one-base-c-rgb))"
        },
        "dark": {
          "color": "rgb(var(--mte-viz-one-dark-rgb))",
          "contrast": "rgb(var(--mte-viz-one-dark-c-rgb))"
        },
        "darker": {
          "color": "rgb(var(--mte-viz-one-darker-rgb))",
          "contrast": "rgb(var(--mte-viz-one-darker-c-rgb))"
        }
      },
      "two": {
        "lighter": {
          "color": "rgb(var(--mte-viz-two-lighter-rgb))",
          "contrast": "rgb(var(--mte-viz-two-lighter-c-rgb))"
        },
        "light": {
          "color": "rgb(var(--mte-viz-two-light-rgb))",
          "contrast": "rgb(var(--mte-viz-two-light-c-rgb))"
        },
        "base": {
          "color": "rgb(var(--mte-viz-two-base-rgb))",
          "contrast": "rgb(var(--mte-viz-two-base-c-rgb))"
        },
        "dark": {
          "color": "rgb(var(--mte-viz-two-dark-rgb))",
          "contrast": "rgb(var(--mte-viz-two-dark-c-rgb))"
        },
        "darker": {
          "color": "rgb(var(--mte-viz-two-darker-rgb))",
          "contrast": "rgb(var(--mte-viz-two-darker-c-rgb))"
        }
      },
      "three": {
        "lighter": {
          "color": "rgb(var(--mte-viz-three-lighter-rgb))",
          "contrast": "rgb(var(--mte-viz-three-lighter-c-rgb))"
        },
        "light": {
          "color": "rgb(var(--mte-viz-three-light-rgb))",
          "contrast": "rgb(var(--mte-viz-three-light-c-rgb))"
        },
        "base": {
          "color": "rgb(var(--mte-viz-three-base-rgb))",
          "contrast": "rgb(var(--mte-viz-three-base-c-rgb))"
        },
        "dark": {
          "color": "rgb(var(--mte-viz-three-dark-rgb))",
          "contrast": "rgb(var(--mte-viz-three-dark-c-rgb))"
        },
        "darker": {
          "color": "rgb(var(--mte-viz-three-darker-rgb))",
          "contrast": "rgb(var(--mte-viz-three-darker-c-rgb))"
        }
      },
      "four": {
        "lighter": {
          "color": "rgb(var(--mte-viz-four-lighter-rgb))",
          "contrast": "rgb(var(--mte-viz-four-lighter-c-rgb))"
        },
        "light": {
          "color": "rgb(var(--mte-viz-four-light-rgb))",
          "contrast": "rgb(var(--mte-viz-four-light-c-rgb))"
        },
        "base": {
          "color": "rgb(var(--mte-viz-four-base-rgb))",
          "contrast": "rgb(var(--mte-viz-four-base-c-rgb))"
        },
        "dark": {
          "color": "rgb(var(--mte-viz-four-dark-rgb))",
          "contrast": "rgb(var(--mte-viz-four-dark-c-rgb))"
        },
        "darker": {
          "color": "rgb(var(--mte-viz-four-darker-rgb))",
          "contrast": "rgb(var(--mte-viz-four-darker-c-rgb))"
        }
      },
      "five": {
        "lighter": {
          "color": "rgb(var(--mte-viz-five-lighter-rgb))",
          "contrast": "rgb(var(--mte-viz-five-lighter-c-rgb))"
        },
        "light": {
          "color": "rgb(var(--mte-viz-five-light-rgb))",
          "contrast": "rgb(var(--mte-viz-five-light-c-rgb))"
        },
        "base": {
          "color": "rgb(var(--mte-viz-five-base-rgb))",
          "contrast": "rgb(var(--mte-viz-five-base-c-rgb))"
        },
        "dark": {
          "color": "rgb(var(--mte-viz-five-dark-rgb))",
          "contrast": "rgb(var(--mte-viz-five-dark-c-rgb))"
        },
        "darker": {
          "color": "rgb(var(--mte-viz-five-darker-rgb))",
          "contrast": "rgb(var(--mte-viz-five-darker-c-rgb))"
        }
      },
      "six": {
        "lighter": {
          "color": "rgb(var(--mte-viz-six-lighter-rgb))",
          "contrast": "rgb(var(--mte-viz-six-lighter-c-rgb))"
        },
        "light": {
          "color": "rgb(var(--mte-viz-six-light-rgb))",
          "contrast": "rgb(var(--mte-viz-six-light-c-rgb))"
        },
        "base": {
          "color": "rgb(var(--mte-viz-six-base-rgb))",
          "contrast": "rgb(var(--mte-viz-six-base-c-rgb))"
        },
        "dark": {
          "color": "rgb(var(--mte-viz-six-dark-rgb))",
          "contrast": "rgb(var(--mte-viz-six-dark-c-rgb))"
        },
        "darker": {
          "color": "rgb(var(--mte-viz-six-darker-rgb))",
          "contrast": "rgb(var(--mte-viz-six-darker-c-rgb))"
        }
      }
    }
  },
  "stateToken": {
    "surface1": {
      "default": "rgba(var(--mte-it-surface-1-default-rgb), var(--mte-it-surface-1-default-a))",
      "hover": "rgba(var(--mte-it-surface-1-hover-rgb), var(--mte-it-surface-1-hover-a))",
      "active": "rgba(var(--mte-it-surface-1-active-rgb), var(--mte-it-surface-1-active-a))"
    },
    "surface2": {
      "default": "rgba(var(--mte-it-surface-2-default-rgb), var(--mte-it-surface-2-default-a))",
      "hover": "rgba(var(--mte-it-surface-2-hover-rgb), var(--mte-it-surface-2-hover-a))",
      "active": "rgba(var(--mte-it-surface-2-active-rgb), var(--mte-it-surface-2-active-a))"
    },
    "surface3": {
      "default": "rgba(var(--mte-it-surface-3-default-rgb), var(--mte-it-surface-3-default-a))",
      "hover": "rgba(var(--mte-it-surface-3-hover-rgb), var(--mte-it-surface-3-hover-a))",
      "active": "rgba(var(--mte-it-surface-3-active-rgb), var(--mte-it-surface-3-active-a))"
    },
    "surface4": {
      "default": "rgba(var(--mte-it-surface-4-default-rgb), var(--mte-it-surface-4-default-a))",
      "hover": "rgba(var(--mte-it-surface-4-hover-rgb), var(--mte-it-surface-4-hover-a))",
      "active": "rgba(var(--mte-it-surface-4-active-rgb), var(--mte-it-surface-4-active-a))"
    },
    "surfaceInverse": {
      "default": "rgba(var(--mte-it-surface-inverse-default-rgb), var(--mte-it-surface-inverse-default-a))",
      "hover": "rgba(var(--mte-it-surface-inverse-hover-rgb), var(--mte-it-surface-inverse-hover-a))",
      "active": "rgba(var(--mte-it-surface-inverse-active-rgb), var(--mte-it-surface-inverse-active-a))"
    },
    "inkInverse": {
      "default": "rgba(var(--mte-it-ink-inverse-default-rgb), var(--mte-it-ink-inverse-default-a))",
      "hover": "rgba(var(--mte-it-ink-inverse-hover-rgb), var(--mte-it-ink-inverse-hover-a))",
      "active": "rgba(var(--mte-it-ink-inverse-active-rgb), var(--mte-it-ink-inverse-active-a))"
    },
    "link": {
      "default": "rgba(var(--mte-it-link-default-rgb), var(--mte-it-link-default-a))",
      "visited": "rgba(var(--mte-it-link-visited-rgb), var(--mte-it-link-visited-a))"
    }
  }
};
var core_vars_setter_map_default = {
  "opacity": {
    "xxl": "--mte-opacity-xxl",
    "xl": "--mte-opacity-xl",
    "lg": "--mte-opacity-lg",
    "md": "--mte-opacity-md",
    "sm": "--mte-opacity-sm",
    "xs": "--mte-opacity-xs",
    "xxs": "--mte-opacity-xxs",
    "xxxs": "--mte-opacity-xxxs"
  },
  "border": {
    "radius": {
      "none": "--mte-border-radius-none",
      "xs": "--mte-border-radius-xs",
      "sm": "--mte-border-radius-sm",
      "md": "--mte-border-radius-md",
      "lg": "--mte-border-radius-lg",
      "xl": "--mte-border-radius-xl",
      "xxl": "--mte-border-radius-xxl",
      "full": "--mte-border-radius-full"
    },
    "width": {
      "none": "--mte-border-width-none",
      "default": "--mte-border-width-default",
      "sm": "--mte-border-width-sm",
      "md": "--mte-border-width-md",
      "lg": "--mte-border-width-lg"
    }
  },
  "elevation": {
    "level": {
      "0": "--mte-elevation-level-0",
      "1": "--mte-elevation-level-1",
      "2": "--mte-elevation-level-2",
      "3": "--mte-elevation-level-3",
      "4": "--mte-elevation-level-4"
    },
    "opacity": {
      "0": "--mte-elevation-opacity-0",
      "1": "--mte-elevation-opacity-1",
      "2": "--mte-elevation-opacity-2",
      "3": "--mte-elevation-opacity-3",
      "4": "--mte-elevation-opacity-4"
    },
    "z0": "--mte-elevation-z0",
    "z1": "--mte-elevation-z1",
    "z2": "--mte-elevation-z2",
    "z3": "--mte-elevation-z3",
    "z4": "--mte-elevation-z4"
  },
  "zIndex": {
    "0": "--mte-z-index-0",
    "10": "--mte-z-index-10",
    "20": "--mte-z-index-20",
    "30": "--mte-z-index-30",
    "40": "--mte-z-index-40",
    "50": "--mte-z-index-50",
    "-1": "--mte-z-index-1",
    "auto": "--mte-z-index-auto"
  },
  "grid": {
    "breakpoint": {
      "xs": "0",
      "sm": "480px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "xxl": "1536px"
    },
    "containerMaxWidth": {
      "sm": "768px",
      "md": "1024px",
      "lg": "1280px",
      "xl": "1440px",
      "xxl": "1440px"
    }
  },
  "size": {
    "scale": {
      "sm": "--mte-size-scale-sm",
      "md": "--mte-size-scale-md",
      "lg": "--mte-size-scale-lg"
    },
    "densities": [
      "compact",
      "comfy",
      "roomy"
    ]
  },
  "space": {
    "none": "--mte-space-none",
    "xxs": "--mte-space-xxs",
    "xs": "--mte-space-xs",
    "sm": "--mte-space-sm",
    "md": "--mte-space-md",
    "lg": "--mte-space-lg",
    "xl": "--mte-space-xl",
    "xxl": "--mte-space-xxl",
    "xxxl": "--mte-space-xxxl",
    "compact": {
      "none": "--mte-space-compact-none",
      "xxs": "--mte-space-compact-xxs",
      "xs": "--mte-space-compact-xs",
      "sm": "--mte-space-compact-sm",
      "md": "--mte-space-compact-md",
      "lg": "--mte-space-compact-lg",
      "xl": "--mte-space-compact-xl",
      "xxl": "--mte-space-compact-xxl",
      "xxxl": "--mte-space-compact-xxxl"
    },
    "comfy": {
      "none": "--mte-space-comfy-none",
      "xxs": "--mte-space-comfy-xxs",
      "xs": "--mte-space-comfy-xs",
      "sm": "--mte-space-comfy-sm",
      "md": "--mte-space-comfy-md",
      "lg": "--mte-space-comfy-lg",
      "xl": "--mte-space-comfy-xl",
      "xxl": "--mte-space-comfy-xxl",
      "xxxl": "--mte-space-comfy-xxxl"
    },
    "roomy": {
      "none": "--mte-space-roomy-none",
      "xxs": "--mte-space-roomy-xxs",
      "xs": "--mte-space-roomy-xs",
      "sm": "--mte-space-roomy-sm",
      "md": "--mte-space-roomy-md",
      "lg": "--mte-space-roomy-lg",
      "xl": "--mte-space-roomy-xl",
      "xxl": "--mte-space-roomy-xxl",
      "xxxl": "--mte-space-roomy-xxxl"
    }
  },
  "font": {
    "base": "--mte-font-base",
    "family": {
      "sans": "--mte-font-family-sans",
      "serif": "--mte-font-family-serif",
      "mono": "--mte-font-family-mono"
    },
    "weight": {
      "light": "--mte-font-weight-light",
      "regular": "--mte-font-weight-regular",
      "medium": "--mte-font-weight-medium",
      "bold": "--mte-font-weight-bold"
    },
    "ratio": {
      "sm": 0.8,
      "md": 1,
      "lg": 1.2
    },
    "set": {
      "h1": {
        "fontSize": "--mte-font-set-h1-font-size",
        "lineHeight": "--mte-font-set-h1-line-height",
        "fontWeight": "--mte-font-set-h1-font-weight"
      },
      "h2": {
        "fontSize": "--mte-font-set-h2-font-size",
        "lineHeight": "--mte-font-set-h2-line-height",
        "fontWeight": "--mte-font-set-h2-font-weight"
      },
      "h3": {
        "fontSize": "--mte-font-set-h3-font-size",
        "lineHeight": "--mte-font-set-h3-line-height",
        "fontWeight": "--mte-font-set-h3-font-weight"
      },
      "h4": {
        "fontSize": "--mte-font-set-h4-font-size",
        "lineHeight": "--mte-font-set-h4-line-height",
        "fontWeight": "--mte-font-set-h4-font-weight"
      },
      "h5": {
        "fontSize": "--mte-font-set-h5-font-size",
        "lineHeight": "--mte-font-set-h5-line-height",
        "fontWeight": "--mte-font-set-h5-font-weight"
      },
      "h6": {
        "fontSize": "--mte-font-set-h6-font-size",
        "lineHeight": "--mte-font-set-h6-line-height",
        "fontWeight": "--mte-font-set-h6-font-weight"
      },
      "subtitle": {
        "fontSize": "--mte-font-set-subtitle-font-size",
        "lineHeight": "--mte-font-set-subtitle-line-height",
        "fontWeight": "--mte-font-set-subtitle-font-weight"
      },
      "body1": {
        "fontSize": "--mte-font-set-body1-font-size",
        "lineHeight": "--mte-font-set-body1-line-height",
        "fontWeight": "--mte-font-set-body1-font-weight"
      },
      "body2": {
        "fontSize": "--mte-font-set-body2-font-size",
        "lineHeight": "--mte-font-set-body2-line-height",
        "fontWeight": "--mte-font-set-body2-font-weight"
      },
      "caption": {
        "fontSize": "--mte-font-set-caption-font-size",
        "lineHeight": "--mte-font-set-caption-line-height",
        "fontWeight": "--mte-font-set-caption-font-weight"
      },
      "button": {
        "fontSize": "--mte-font-set-button-font-size",
        "lineHeight": "--mte-font-set-button-line-height",
        "fontWeight": "--mte-font-set-button-font-weight"
      }
    }
  },
  "animation": {
    "transitionDuration": {
      "extraShort": "80ms",
      "shorter": "120ms",
      "short": "200ms",
      "default": "300ms",
      "long": "500ms"
    },
    "transitionDurationJs": {
      "extraShort": 0.08,
      "shorter": 0.12,
      "short": 0.2,
      "default": 0.3,
      "long": 0.5
    },
    "timingFunction": {
      "decelerateOut": "cubic-bezier(0, 0, 0.2, 1)",
      "standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      "accelerateIn": "cubic-bezier(0.4, 0, 1, 1)",
      "sharp": "cubic-bezier(0.4, 0, 0.6, 1)",
      "inOut": "cubic-bezier(0.35, 0, 0.25, 1)"
    },
    "timingFunctionJs": {
      "decelerateOut": [
        0,
        0,
        0.2,
        1
      ],
      "standard": [
        0.4,
        0,
        0.2,
        1
      ],
      "accelerateIn": [
        0.4,
        0,
        1,
        1
      ],
      "sharp": [
        0.4,
        0,
        0.6,
        1
      ],
      "inOut": [
        0.35,
        0,
        0.25,
        1
      ]
    }
  }
};
var theme_vars_setter_map_default = {
  "color": {
    "black": "--mte-black",
    "white": "--mte-white",
    "light": "--mte-light",
    "dark": "--mte-dark",
    "darker": "--mte-darker",
    "focus": "--mte-focus",
    "focusLighter": "--mte-focus-lighter",
    "focusContrast": "--mte-focus-contrast",
    "grey1": "--mte-grey-1",
    "grey2": "--mte-grey-2",
    "grey3": "--mte-grey-3",
    "grey4": "--mte-grey-4",
    "grey5": "--mte-grey-5",
    "grey6": "--mte-grey-6",
    "grey7": "--mte-grey-7",
    "grey8": "--mte-grey-8",
    "grey9": "--mte-grey-9",
    "grey10": "--mte-grey-10",
    "surface1": "--mte-surface-1",
    "surface2": "--mte-surface-2",
    "surface3": "--mte-surface-3",
    "surface4": "--mte-surface-4",
    "surfaceInverse": "--mte-surface-inverse",
    "ink1": "--mte-ink-1",
    "ink2": "--mte-ink-2",
    "ink3": "--mte-ink-3",
    "ink4": "--mte-ink-4",
    "ink5": "--mte-ink-5",
    "inkInverse": "--mte-ink-inverse",
    "border1": "--mte-border-1",
    "border2": "--mte-border-2",
    "border3": "--mte-border-3",
    "borderInverse": "--mte-border-inverse",
    "disabled1": "--mte-disabled-1",
    "disabled2": "--mte-disabled-2",
    "disabled3": "--mte-disabled-3",
    "disabled4": "--mte-disabled-4",
    "disabledInverse1": "--mte-disabled-inverse-1",
    "disabledInverse2": "--mte-disabled-inverse-2",
    "disabledInverse3": "--mte-disabled-inverse-3",
    "readonly1": "--mte-readonly-1",
    "readonly2": "--mte-readonly-2",
    "readonly3": "--mte-readonly-3",
    "readonly4": "--mte-readonly-4",
    "elevationBase": "--mte-elevation-base",
    "code1": "--mte-code-1",
    "code2": "--mte-code-2"
  },
  "palette": {
    "green": {
      "lighter": {
        "color": "--mte-green-lighter",
        "contrast": "--mte-green-lighter-contrast"
      },
      "light": {
        "color": "--mte-green-light",
        "contrast": "--mte-green-light-contrast"
      },
      "base": {
        "color": "--mte-green-base",
        "contrast": "--mte-green-base-contrast"
      },
      "dark": {
        "color": "--mte-green-dark",
        "contrast": "--mte-green-dark-contrast"
      },
      "darker": {
        "color": "--mte-green-darker",
        "contrast": "--mte-green-darker-contrast"
      }
    },
    "teal": {
      "lighter": {
        "color": "--mte-teal-lighter",
        "contrast": "--mte-teal-lighter-contrast"
      },
      "light": {
        "color": "--mte-teal-light",
        "contrast": "--mte-teal-light-contrast"
      },
      "base": {
        "color": "--mte-teal-base",
        "contrast": "--mte-teal-base-contrast"
      },
      "dark": {
        "color": "--mte-teal-dark",
        "contrast": "--mte-teal-dark-contrast"
      },
      "darker": {
        "color": "--mte-teal-darker",
        "contrast": "--mte-teal-darker-contrast"
      }
    },
    "cyan": {
      "lighter": {
        "color": "--mte-cyan-lighter",
        "contrast": "--mte-cyan-lighter-contrast"
      },
      "light": {
        "color": "--mte-cyan-light",
        "contrast": "--mte-cyan-light-contrast"
      },
      "base": {
        "color": "--mte-cyan-base",
        "contrast": "--mte-cyan-base-contrast"
      },
      "dark": {
        "color": "--mte-cyan-dark",
        "contrast": "--mte-cyan-dark-contrast"
      },
      "darker": {
        "color": "--mte-cyan-darker",
        "contrast": "--mte-cyan-darker-contrast"
      }
    },
    "blue": {
      "lighter": {
        "color": "--mte-blue-lighter",
        "contrast": "--mte-blue-lighter-contrast"
      },
      "light": {
        "color": "--mte-blue-light",
        "contrast": "--mte-blue-light-contrast"
      },
      "base": {
        "color": "--mte-blue-base",
        "contrast": "--mte-blue-base-contrast"
      },
      "dark": {
        "color": "--mte-blue-dark",
        "contrast": "--mte-blue-dark-contrast"
      },
      "darker": {
        "color": "--mte-blue-darker",
        "contrast": "--mte-blue-darker-contrast"
      }
    },
    "rxBlue": {
      "lighter": {
        "color": "--mte-rx-blue-lighter",
        "contrast": "--mte-rx-blue-lighter-contrast"
      },
      "light": {
        "color": "--mte-rx-blue-light",
        "contrast": "--mte-rx-blue-light-contrast"
      },
      "base": {
        "color": "--mte-rx-blue-base",
        "contrast": "--mte-rx-blue-base-contrast"
      },
      "dark": {
        "color": "--mte-rx-blue-dark",
        "contrast": "--mte-rx-blue-dark-contrast"
      },
      "darker": {
        "color": "--mte-rx-blue-darker",
        "contrast": "--mte-rx-blue-darker-contrast"
      }
    },
    "purple": {
      "lighter": {
        "color": "--mte-purple-lighter",
        "contrast": "--mte-purple-lighter-contrast"
      },
      "light": {
        "color": "--mte-purple-light",
        "contrast": "--mte-purple-light-contrast"
      },
      "base": {
        "color": "--mte-purple-base",
        "contrast": "--mte-purple-base-contrast"
      },
      "dark": {
        "color": "--mte-purple-dark",
        "contrast": "--mte-purple-dark-contrast"
      },
      "darker": {
        "color": "--mte-purple-darker",
        "contrast": "--mte-purple-darker-contrast"
      }
    },
    "magenta": {
      "lighter": {
        "color": "--mte-magenta-lighter",
        "contrast": "--mte-magenta-lighter-contrast"
      },
      "light": {
        "color": "--mte-magenta-light",
        "contrast": "--mte-magenta-light-contrast"
      },
      "base": {
        "color": "--mte-magenta-base",
        "contrast": "--mte-magenta-base-contrast"
      },
      "dark": {
        "color": "--mte-magenta-dark",
        "contrast": "--mte-magenta-dark-contrast"
      },
      "darker": {
        "color": "--mte-magenta-darker",
        "contrast": "--mte-magenta-darker-contrast"
      }
    },
    "red": {
      "lighter": {
        "color": "--mte-red-lighter",
        "contrast": "--mte-red-lighter-contrast"
      },
      "light": {
        "color": "--mte-red-light",
        "contrast": "--mte-red-light-contrast"
      },
      "base": {
        "color": "--mte-red-base",
        "contrast": "--mte-red-base-contrast"
      },
      "dark": {
        "color": "--mte-red-dark",
        "contrast": "--mte-red-dark-contrast"
      },
      "darker": {
        "color": "--mte-red-darker",
        "contrast": "--mte-red-darker-contrast"
      }
    },
    "hebRed": {
      "lighter": {
        "color": "--mte-heb-red-lighter",
        "contrast": "--mte-heb-red-lighter-contrast"
      },
      "light": {
        "color": "--mte-heb-red-light",
        "contrast": "--mte-heb-red-light-contrast"
      },
      "base": {
        "color": "--mte-heb-red-base",
        "contrast": "--mte-heb-red-base-contrast"
      },
      "dark": {
        "color": "--mte-heb-red-dark",
        "contrast": "--mte-heb-red-dark-contrast"
      },
      "darker": {
        "color": "--mte-heb-red-darker",
        "contrast": "--mte-heb-red-darker-contrast"
      }
    },
    "orange": {
      "lighter": {
        "color": "--mte-orange-lighter",
        "contrast": "--mte-orange-lighter-contrast"
      },
      "light": {
        "color": "--mte-orange-light",
        "contrast": "--mte-orange-light-contrast"
      },
      "base": {
        "color": "--mte-orange-base",
        "contrast": "--mte-orange-base-contrast"
      },
      "dark": {
        "color": "--mte-orange-dark",
        "contrast": "--mte-orange-dark-contrast"
      },
      "darker": {
        "color": "--mte-orange-darker",
        "contrast": "--mte-orange-darker-contrast"
      }
    },
    "amber": {
      "lighter": {
        "color": "--mte-amber-lighter",
        "contrast": "--mte-amber-lighter-contrast"
      },
      "light": {
        "color": "--mte-amber-light",
        "contrast": "--mte-amber-light-contrast"
      },
      "base": {
        "color": "--mte-amber-base",
        "contrast": "--mte-amber-base-contrast"
      },
      "dark": {
        "color": "--mte-amber-dark",
        "contrast": "--mte-amber-dark-contrast"
      },
      "darker": {
        "color": "--mte-amber-darker",
        "contrast": "--mte-amber-darker-contrast"
      }
    },
    "yellow": {
      "lighter": {
        "color": "--mte-yellow-lighter",
        "contrast": "--mte-yellow-lighter-contrast"
      },
      "light": {
        "color": "--mte-yellow-light",
        "contrast": "--mte-yellow-light-contrast"
      },
      "base": {
        "color": "--mte-yellow-base",
        "contrast": "--mte-yellow-base-contrast"
      },
      "dark": {
        "color": "--mte-yellow-dark",
        "contrast": "--mte-yellow-dark-contrast"
      },
      "darker": {
        "color": "--mte-yellow-darker",
        "contrast": "--mte-yellow-darker-contrast"
      }
    },
    "couponYellow": {
      "lighter": {
        "color": "--mte-coupon-yellow-lighter",
        "contrast": "--mte-coupon-yellow-lighter-contrast"
      },
      "light": {
        "color": "--mte-coupon-yellow-light",
        "contrast": "--mte-coupon-yellow-light-contrast"
      },
      "base": {
        "color": "--mte-coupon-yellow-base",
        "contrast": "--mte-coupon-yellow-base-contrast"
      },
      "dark": {
        "color": "--mte-coupon-yellow-dark",
        "contrast": "--mte-coupon-yellow-dark-contrast"
      },
      "darker": {
        "color": "--mte-coupon-yellow-darker",
        "contrast": "--mte-coupon-yellow-darker-contrast"
      }
    }
  },
  "pg": {
    "core": {
      "primary": {
        "lighter": {
          "color": "--mte-core-primary-lighter-rgb",
          "contrast": "--mte-core-primary-lighter-c-rgb"
        },
        "light": {
          "color": "--mte-core-primary-light-rgb",
          "contrast": "--mte-core-primary-light-c-rgb"
        },
        "base": {
          "color": "--mte-core-primary-base-rgb",
          "contrast": "--mte-core-primary-base-c-rgb"
        },
        "dark": {
          "color": "--mte-core-primary-dark-rgb",
          "contrast": "--mte-core-primary-dark-c-rgb"
        },
        "darker": {
          "color": "--mte-core-primary-darker-rgb",
          "contrast": "--mte-core-primary-darker-c-rgb"
        }
      },
      "secondary": {
        "lighter": {
          "color": "--mte-core-secondary-lighter-rgb",
          "contrast": "--mte-core-secondary-lighter-c-rgb"
        },
        "light": {
          "color": "--mte-core-secondary-light-rgb",
          "contrast": "--mte-core-secondary-light-c-rgb"
        },
        "base": {
          "color": "--mte-core-secondary-base-rgb",
          "contrast": "--mte-core-secondary-base-c-rgb"
        },
        "dark": {
          "color": "--mte-core-secondary-dark-rgb",
          "contrast": "--mte-core-secondary-dark-c-rgb"
        },
        "darker": {
          "color": "--mte-core-secondary-darker-rgb",
          "contrast": "--mte-core-secondary-darker-c-rgb"
        }
      },
      "tertiary": {
        "lighter": {
          "color": "--mte-core-tertiary-lighter-rgb",
          "contrast": "--mte-core-tertiary-lighter-c-rgb"
        },
        "light": {
          "color": "--mte-core-tertiary-light-rgb",
          "contrast": "--mte-core-tertiary-light-c-rgb"
        },
        "base": {
          "color": "--mte-core-tertiary-base-rgb",
          "contrast": "--mte-core-tertiary-base-c-rgb"
        },
        "dark": {
          "color": "--mte-core-tertiary-dark-rgb",
          "contrast": "--mte-core-tertiary-dark-c-rgb"
        },
        "darker": {
          "color": "--mte-core-tertiary-darker-rgb",
          "contrast": "--mte-core-tertiary-darker-c-rgb"
        }
      },
      "danger": {
        "lighter": {
          "color": "--mte-core-danger-lighter-rgb",
          "contrast": "--mte-core-danger-lighter-c-rgb"
        },
        "light": {
          "color": "--mte-core-danger-light-rgb",
          "contrast": "--mte-core-danger-light-c-rgb"
        },
        "base": {
          "color": "--mte-core-danger-base-rgb",
          "contrast": "--mte-core-danger-base-c-rgb"
        },
        "dark": {
          "color": "--mte-core-danger-dark-rgb",
          "contrast": "--mte-core-danger-dark-c-rgb"
        },
        "darker": {
          "color": "--mte-core-danger-darker-rgb",
          "contrast": "--mte-core-danger-darker-c-rgb"
        }
      }
    },
    "status": {
      "primary": {
        "lighter": {
          "color": "--mte-status-primary-lighter-rgb",
          "contrast": "--mte-status-primary-lighter-c-rgb"
        },
        "light": {
          "color": "--mte-status-primary-light-rgb",
          "contrast": "--mte-status-primary-light-c-rgb"
        },
        "base": {
          "color": "--mte-status-primary-base-rgb",
          "contrast": "--mte-status-primary-base-c-rgb"
        },
        "dark": {
          "color": "--mte-status-primary-dark-rgb",
          "contrast": "--mte-status-primary-dark-c-rgb"
        },
        "darker": {
          "color": "--mte-status-primary-darker-rgb",
          "contrast": "--mte-status-primary-darker-c-rgb"
        }
      },
      "secondary": {
        "lighter": {
          "color": "--mte-status-secondary-lighter-rgb",
          "contrast": "--mte-status-secondary-lighter-c-rgb"
        },
        "light": {
          "color": "--mte-status-secondary-light-rgb",
          "contrast": "--mte-status-secondary-light-c-rgb"
        },
        "base": {
          "color": "--mte-status-secondary-base-rgb",
          "contrast": "--mte-status-secondary-base-c-rgb"
        },
        "dark": {
          "color": "--mte-status-secondary-dark-rgb",
          "contrast": "--mte-status-secondary-dark-c-rgb"
        },
        "darker": {
          "color": "--mte-status-secondary-darker-rgb",
          "contrast": "--mte-status-secondary-darker-c-rgb"
        }
      },
      "tertiary": {
        "lighter": {
          "color": "--mte-status-tertiary-lighter-rgb",
          "contrast": "--mte-status-tertiary-lighter-c-rgb"
        },
        "light": {
          "color": "--mte-status-tertiary-light-rgb",
          "contrast": "--mte-status-tertiary-light-c-rgb"
        },
        "base": {
          "color": "--mte-status-tertiary-base-rgb",
          "contrast": "--mte-status-tertiary-base-c-rgb"
        },
        "dark": {
          "color": "--mte-status-tertiary-dark-rgb",
          "contrast": "--mte-status-tertiary-dark-c-rgb"
        },
        "darker": {
          "color": "--mte-status-tertiary-darker-rgb",
          "contrast": "--mte-status-tertiary-darker-c-rgb"
        }
      },
      "success": {
        "lighter": {
          "color": "--mte-status-success-lighter-rgb",
          "contrast": "--mte-status-success-lighter-c-rgb"
        },
        "light": {
          "color": "--mte-status-success-light-rgb",
          "contrast": "--mte-status-success-light-c-rgb"
        },
        "base": {
          "color": "--mte-status-success-base-rgb",
          "contrast": "--mte-status-success-base-c-rgb"
        },
        "dark": {
          "color": "--mte-status-success-dark-rgb",
          "contrast": "--mte-status-success-dark-c-rgb"
        },
        "darker": {
          "color": "--mte-status-success-darker-rgb",
          "contrast": "--mte-status-success-darker-c-rgb"
        }
      },
      "warning": {
        "lighter": {
          "color": "--mte-status-warning-lighter-rgb",
          "contrast": "--mte-status-warning-lighter-c-rgb"
        },
        "light": {
          "color": "--mte-status-warning-light-rgb",
          "contrast": "--mte-status-warning-light-c-rgb"
        },
        "base": {
          "color": "--mte-status-warning-base-rgb",
          "contrast": "--mte-status-warning-base-c-rgb"
        },
        "dark": {
          "color": "--mte-status-warning-dark-rgb",
          "contrast": "--mte-status-warning-dark-c-rgb"
        },
        "darker": {
          "color": "--mte-status-warning-darker-rgb",
          "contrast": "--mte-status-warning-darker-c-rgb"
        }
      },
      "danger": {
        "lighter": {
          "color": "--mte-status-danger-lighter-rgb",
          "contrast": "--mte-status-danger-lighter-c-rgb"
        },
        "light": {
          "color": "--mte-status-danger-light-rgb",
          "contrast": "--mte-status-danger-light-c-rgb"
        },
        "base": {
          "color": "--mte-status-danger-base-rgb",
          "contrast": "--mte-status-danger-base-c-rgb"
        },
        "dark": {
          "color": "--mte-status-danger-dark-rgb",
          "contrast": "--mte-status-danger-dark-c-rgb"
        },
        "darker": {
          "color": "--mte-status-danger-darker-rgb",
          "contrast": "--mte-status-danger-darker-c-rgb"
        }
      }
    },
    "viz": {
      "one": {
        "lighter": {
          "color": "--mte-viz-one-lighter-rgb",
          "contrast": "--mte-viz-one-lighter-c-rgb"
        },
        "light": {
          "color": "--mte-viz-one-light-rgb",
          "contrast": "--mte-viz-one-light-c-rgb"
        },
        "base": {
          "color": "--mte-viz-one-base-rgb",
          "contrast": "--mte-viz-one-base-c-rgb"
        },
        "dark": {
          "color": "--mte-viz-one-dark-rgb",
          "contrast": "--mte-viz-one-dark-c-rgb"
        },
        "darker": {
          "color": "--mte-viz-one-darker-rgb",
          "contrast": "--mte-viz-one-darker-c-rgb"
        }
      },
      "two": {
        "lighter": {
          "color": "--mte-viz-two-lighter-rgb",
          "contrast": "--mte-viz-two-lighter-c-rgb"
        },
        "light": {
          "color": "--mte-viz-two-light-rgb",
          "contrast": "--mte-viz-two-light-c-rgb"
        },
        "base": {
          "color": "--mte-viz-two-base-rgb",
          "contrast": "--mte-viz-two-base-c-rgb"
        },
        "dark": {
          "color": "--mte-viz-two-dark-rgb",
          "contrast": "--mte-viz-two-dark-c-rgb"
        },
        "darker": {
          "color": "--mte-viz-two-darker-rgb",
          "contrast": "--mte-viz-two-darker-c-rgb"
        }
      },
      "three": {
        "lighter": {
          "color": "--mte-viz-three-lighter-rgb",
          "contrast": "--mte-viz-three-lighter-c-rgb"
        },
        "light": {
          "color": "--mte-viz-three-light-rgb",
          "contrast": "--mte-viz-three-light-c-rgb"
        },
        "base": {
          "color": "--mte-viz-three-base-rgb",
          "contrast": "--mte-viz-three-base-c-rgb"
        },
        "dark": {
          "color": "--mte-viz-three-dark-rgb",
          "contrast": "--mte-viz-three-dark-c-rgb"
        },
        "darker": {
          "color": "--mte-viz-three-darker-rgb",
          "contrast": "--mte-viz-three-darker-c-rgb"
        }
      },
      "four": {
        "lighter": {
          "color": "--mte-viz-four-lighter-rgb",
          "contrast": "--mte-viz-four-lighter-c-rgb"
        },
        "light": {
          "color": "--mte-viz-four-light-rgb",
          "contrast": "--mte-viz-four-light-c-rgb"
        },
        "base": {
          "color": "--mte-viz-four-base-rgb",
          "contrast": "--mte-viz-four-base-c-rgb"
        },
        "dark": {
          "color": "--mte-viz-four-dark-rgb",
          "contrast": "--mte-viz-four-dark-c-rgb"
        },
        "darker": {
          "color": "--mte-viz-four-darker-rgb",
          "contrast": "--mte-viz-four-darker-c-rgb"
        }
      },
      "five": {
        "lighter": {
          "color": "--mte-viz-five-lighter-rgb",
          "contrast": "--mte-viz-five-lighter-c-rgb"
        },
        "light": {
          "color": "--mte-viz-five-light-rgb",
          "contrast": "--mte-viz-five-light-c-rgb"
        },
        "base": {
          "color": "--mte-viz-five-base-rgb",
          "contrast": "--mte-viz-five-base-c-rgb"
        },
        "dark": {
          "color": "--mte-viz-five-dark-rgb",
          "contrast": "--mte-viz-five-dark-c-rgb"
        },
        "darker": {
          "color": "--mte-viz-five-darker-rgb",
          "contrast": "--mte-viz-five-darker-c-rgb"
        }
      },
      "six": {
        "lighter": {
          "color": "--mte-viz-six-lighter-rgb",
          "contrast": "--mte-viz-six-lighter-c-rgb"
        },
        "light": {
          "color": "--mte-viz-six-light-rgb",
          "contrast": "--mte-viz-six-light-c-rgb"
        },
        "base": {
          "color": "--mte-viz-six-base-rgb",
          "contrast": "--mte-viz-six-base-c-rgb"
        },
        "dark": {
          "color": "--mte-viz-six-dark-rgb",
          "contrast": "--mte-viz-six-dark-c-rgb"
        },
        "darker": {
          "color": "--mte-viz-six-darker-rgb",
          "contrast": "--mte-viz-six-darker-c-rgb"
        }
      }
    }
  },
  "stateToken": {
    "surface1": {
      "default": {
        "rgb": "--mte-it-surface-1-default-rgb",
        "a": "--mte-it-surface-1-default-a"
      },
      "hover": {
        "rgb": "--mte-it-surface-1-hover-rgb",
        "a": "--mte-it-surface-1-hover-a"
      },
      "active": {
        "rgb": "--mte-it-surface-1-active-rgb",
        "a": "--mte-it-surface-1-active-a"
      }
    },
    "surface2": {
      "default": {
        "rgb": "--mte-it-surface-2-default-rgb",
        "a": "--mte-it-surface-2-default-a"
      },
      "hover": {
        "rgb": "--mte-it-surface-2-hover-rgb",
        "a": "--mte-it-surface-2-hover-a"
      },
      "active": {
        "rgb": "--mte-it-surface-2-active-rgb",
        "a": "--mte-it-surface-2-active-a"
      }
    },
    "surface3": {
      "default": {
        "rgb": "--mte-it-surface-3-default-rgb",
        "a": "--mte-it-surface-3-default-a"
      },
      "hover": {
        "rgb": "--mte-it-surface-3-hover-rgb",
        "a": "--mte-it-surface-3-hover-a"
      },
      "active": {
        "rgb": "--mte-it-surface-3-active-rgb",
        "a": "--mte-it-surface-3-active-a"
      }
    },
    "surface4": {
      "default": {
        "rgb": "--mte-it-surface-4-default-rgb",
        "a": "--mte-it-surface-4-default-a"
      },
      "hover": {
        "rgb": "--mte-it-surface-4-hover-rgb",
        "a": "--mte-it-surface-4-hover-a"
      },
      "active": {
        "rgb": "--mte-it-surface-4-active-rgb",
        "a": "--mte-it-surface-4-active-a"
      }
    },
    "surfaceInverse": {
      "default": {
        "rgb": "--mte-it-surface-inverse-default-rgb",
        "a": "--mte-it-surface-inverse-default-a"
      },
      "hover": {
        "rgb": "--mte-it-surface-inverse-hover-rgb",
        "a": "--mte-it-surface-inverse-hover-a"
      },
      "active": {
        "rgb": "--mte-it-surface-inverse-active-rgb",
        "a": "--mte-it-surface-inverse-active-a"
      }
    },
    "inkInverse": {
      "default": {
        "rgb": "--mte-it-ink-inverse-default-rgb",
        "a": "--mte-it-ink-inverse-default-a"
      },
      "hover": {
        "rgb": "--mte-it-ink-inverse-hover-rgb",
        "a": "--mte-it-ink-inverse-hover-a"
      },
      "active": {
        "rgb": "--mte-it-ink-inverse-active-rgb",
        "a": "--mte-it-ink-inverse-active-a"
      }
    },
    "link": {
      "default": {
        "rgb": "--mte-it-link-default-rgb",
        "a": "--mte-it-link-default-a"
      },
      "visited": {
        "rgb": "--mte-it-link-visited-rgb",
        "a": "--mte-it-link-visited-a"
      }
    }
  }
};
var px_light_webgl_map_default = {
  "color": {
    "black": [
      0,
      0,
      0,
      255
    ],
    "white": [
      255,
      255,
      255,
      255
    ],
    "light": [
      255,
      255,
      255,
      255
    ],
    "dark": [
      32,
      33,
      34,
      255
    ],
    "darker": [
      0,
      0,
      0,
      255
    ],
    "focus": [
      0,
      119,
      204,
      255
    ],
    "focusLighter": [
      251,
      253,
      254,
      255
    ],
    "focusContrast": [
      255,
      255,
      255,
      255
    ],
    "grey1": [
      250,
      250,
      250,
      255
    ],
    "grey2": [
      242,
      242,
      242,
      255
    ],
    "grey3": [
      237,
      237,
      237,
      255
    ],
    "grey4": [
      216,
      217,
      217,
      255
    ],
    "grey5": [
      198,
      199,
      199,
      255
    ],
    "grey6": [
      174,
      176,
      178,
      255
    ],
    "grey7": [
      143,
      145,
      148,
      255
    ],
    "grey8": [
      115,
      117,
      120,
      255
    ],
    "grey9": [
      80,
      82,
      83,
      255
    ],
    "grey10": [
      50,
      51,
      52,
      255
    ],
    "surface1": [
      250,
      250,
      250,
      255
    ],
    "surface2": [
      255,
      255,
      255,
      255
    ],
    "surface3": [
      242,
      242,
      242,
      255
    ],
    "surface4": [
      50,
      51,
      52,
      255
    ],
    "surfaceInverse": [
      0,
      0,
      0,
      255
    ],
    "ink1": [
      50,
      51,
      52,
      255
    ],
    "ink2": [
      115,
      117,
      120,
      255
    ],
    "ink3": [
      143,
      145,
      148,
      255
    ],
    "ink4": [
      250,
      250,
      250,
      255
    ],
    "ink5": [
      255,
      255,
      255,
      255
    ],
    "inkInverse": [
      255,
      255,
      255,
      255
    ],
    "border1": [
      237,
      237,
      237,
      255
    ],
    "border2": [
      216,
      217,
      217,
      255
    ],
    "border3": [
      174,
      176,
      178,
      255
    ],
    "borderInverse": [
      50,
      51,
      52,
      255
    ],
    "disabled1": [
      240,
      239,
      239,
      255
    ],
    "disabled2": [
      211,
      208,
      207,
      255
    ],
    "disabled3": [
      163,
      156,
      153,
      255
    ],
    "disabled4": [
      91,
      85,
      82,
      255
    ],
    "disabledInverse1": [
      43,
      40,
      39,
      255
    ],
    "disabledInverse2": [
      94,
      87,
      85,
      255
    ],
    "disabledInverse3": [
      168,
      161,
      159,
      255
    ],
    "readonly1": [
      250,
      250,
      250,
      255
    ],
    "readonly2": [
      216,
      217,
      217,
      255
    ],
    "readonly3": [
      174,
      176,
      178,
      255
    ],
    "readonly4": [
      80,
      82,
      83,
      255
    ],
    "elevationBase": [
      0,
      0,
      0,
      255
    ],
    "code1": [
      222,
      222,
      222,
      255
    ],
    "code2": [
      61,
      61,
      61,
      255
    ]
  },
  "palette": {
    "green": {
      "lighter": {
        "color": [
          244,
          251,
          244,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "light": {
        "color": [
          50,
          174,
          50,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "base": {
        "color": [
          0,
          138,
          0,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "dark": {
        "color": [
          0,
          107,
          0,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "darker": {
        "color": [
          0,
          71,
          0,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "teal": {
      "lighter": {
        "color": [
          242,
          253,
          249,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "light": {
        "color": [
          74,
          181,
          140,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "base": {
        "color": [
          43,
          133,
          98,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "dark": {
        "color": [
          21,
          111,
          77,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "darker": {
        "color": [
          10,
          92,
          62,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "cyan": {
      "lighter": {
        "color": [
          243,
          249,
          252,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "light": {
        "color": [
          49,
          163,
          211,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "base": {
        "color": [
          0,
          125,
          179,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "dark": {
        "color": [
          0,
          99,
          148,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "darker": {
        "color": [
          0,
          75,
          112,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "blue": {
      "lighter": {
        "color": [
          242,
          248,
          253,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "light": {
        "color": [
          51,
          152,
          225,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "base": {
        "color": [
          0,
          119,
          204,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "dark": {
        "color": [
          0,
          93,
          168,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "darker": {
        "color": [
          0,
          61,
          122,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "rxBlue": {
      "lighter": {
        "color": [
          242,
          244,
          253,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "light": {
        "color": [
          98,
          135,
          243,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "base": {
        "color": [
          50,
          99,
          245,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "dark": {
        "color": [
          0,
          49,
          148,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "darker": {
        "color": [
          0,
          32,
          97,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "purple": {
      "lighter": {
        "color": [
          246,
          244,
          250,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "light": {
        "color": [
          145,
          127,
          199,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "base": {
        "color": [
          100,
          75,
          175,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "dark": {
        "color": [
          76,
          58,
          131,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "darker": {
        "color": [
          44,
          31,
          86,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "magenta": {
      "lighter": {
        "color": [
          252,
          242,
          248,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "light": {
        "color": [
          232,
          125,
          180,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "base": {
        "color": [
          213,
          52,
          130,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "dark": {
        "color": [
          184,
          20,
          99,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "darker": {
        "color": [
          120,
          7,
          62,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "red": {
      "lighter": {
        "color": [
          251,
          244,
          245,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "light": {
        "color": [
          217,
          74,
          91,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "base": {
        "color": [
          193,
          31,
          50,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "dark": {
        "color": [
          157,
          27,
          42,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "darker": {
        "color": [
          110,
          17,
          28,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "hebRed": {
      "lighter": {
        "color": [
          253,
          242,
          242,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "light": {
        "color": [
          234,
          88,
          83,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "base": {
        "color": [
          225,
          37,
          27,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "dark": {
        "color": [
          188,
          29,
          21,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "darker": {
        "color": [
          115,
          17,
          12,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "orange": {
      "lighter": {
        "color": [
          253,
          244,
          242,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "light": {
        "color": [
          247,
          133,
          95,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "base": {
        "color": [
          239,
          79,
          26,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "dark": {
        "color": [
          206,
          58,
          9,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "darker": {
        "color": [
          134,
          40,
          9,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "amber": {
      "lighter": {
        "color": [
          253,
          247,
          242,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "light": {
        "color": [
          246,
          168,
          90,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "base": {
        "color": [
          209,
          112,
          16,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "dark": {
        "color": [
          190,
          102,
          14,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "darker": {
        "color": [
          142,
          71,
          1,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "yellow": {
      "lighter": {
        "color": [
          253,
          250,
          242,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "light": {
        "color": [
          247,
          201,
          95,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "base": {
        "color": [
          230,
          165,
          15,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "dark": {
        "color": [
          200,
          138,
          4,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "darker": {
        "color": [
          143,
          95,
          0,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "couponYellow": {
      "lighter": {
        "color": [
          253,
          250,
          242,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "light": {
        "color": [
          248,
          222,
          119,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "base": {
        "color": [
          251,
          202,
          24,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "dark": {
        "color": [
          224,
          176,
          0,
          255
        ],
        "contrast": [
          0,
          0,
          0,
          255
        ]
      },
      "darker": {
        "color": [
          133,
          102,
          0,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    }
  },
  "pg": {
    "core": {
      "primary": {
        "lighter": {
          "color": [
            242,
            248,
            253,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "light": {
          "color": [
            51,
            152,
            225,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "base": {
          "color": [
            0,
            119,
            204,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "dark": {
          "color": [
            0,
            93,
            168,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "darker": {
          "color": [
            0,
            61,
            122,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "secondary": {
        "lighter": {
          "color": [
            242,
            248,
            253,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "light": {
          "color": [
            51,
            152,
            225,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "base": {
          "color": [
            0,
            119,
            204,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "dark": {
          "color": [
            0,
            93,
            168,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "darker": {
          "color": [
            0,
            61,
            122,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "tertiary": {
        "lighter": {
          "color": [
            253,
            250,
            242,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "light": {
          "color": [
            248,
            222,
            119,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "base": {
          "color": [
            251,
            202,
            24,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "dark": {
          "color": [
            224,
            176,
            0,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "darker": {
          "color": [
            133,
            102,
            0,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "danger": {
        "lighter": {
          "color": [
            251,
            244,
            245,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "light": {
          "color": [
            217,
            74,
            91,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "base": {
          "color": [
            193,
            31,
            50,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "dark": {
          "color": [
            157,
            27,
            42,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "darker": {
          "color": [
            110,
            17,
            28,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      }
    },
    "status": {
      "primary": {
        "lighter": {
          "color": [
            242,
            248,
            253,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "light": {
          "color": [
            51,
            152,
            225,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "base": {
          "color": [
            0,
            119,
            204,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "dark": {
          "color": [
            0,
            93,
            168,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "darker": {
          "color": [
            0,
            61,
            122,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "secondary": {
        "lighter": {
          "color": [
            242,
            248,
            253,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "light": {
          "color": [
            51,
            152,
            225,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "base": {
          "color": [
            0,
            119,
            204,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "dark": {
          "color": [
            0,
            93,
            168,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "darker": {
          "color": [
            0,
            61,
            122,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "tertiary": {
        "lighter": {
          "color": [
            253,
            250,
            242,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "light": {
          "color": [
            248,
            222,
            119,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "base": {
          "color": [
            251,
            202,
            24,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "dark": {
          "color": [
            224,
            176,
            0,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "darker": {
          "color": [
            133,
            102,
            0,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "success": {
        "lighter": {
          "color": [
            244,
            251,
            244,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "light": {
          "color": [
            50,
            174,
            50,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "base": {
          "color": [
            0,
            138,
            0,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "dark": {
          "color": [
            0,
            107,
            0,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "darker": {
          "color": [
            0,
            71,
            0,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "warning": {
        "lighter": {
          "color": [
            253,
            250,
            242,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "light": {
          "color": [
            247,
            201,
            95,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "base": {
          "color": [
            230,
            165,
            15,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "dark": {
          "color": [
            200,
            138,
            4,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "darker": {
          "color": [
            143,
            95,
            0,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "danger": {
        "lighter": {
          "color": [
            251,
            244,
            245,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "light": {
          "color": [
            217,
            74,
            91,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "base": {
          "color": [
            193,
            31,
            50,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "dark": {
          "color": [
            157,
            27,
            42,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "darker": {
          "color": [
            110,
            17,
            28,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      }
    },
    "viz": {
      "one": {
        "lighter": {
          "color": [
            243,
            249,
            252,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "light": {
          "color": [
            49,
            163,
            211,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "base": {
          "color": [
            0,
            125,
            179,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "dark": {
          "color": [
            0,
            99,
            148,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "darker": {
          "color": [
            0,
            75,
            112,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "two": {
        "lighter": {
          "color": [
            253,
            250,
            242,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "light": {
          "color": [
            247,
            201,
            95,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "base": {
          "color": [
            230,
            165,
            15,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "dark": {
          "color": [
            200,
            138,
            4,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "darker": {
          "color": [
            143,
            95,
            0,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "three": {
        "lighter": {
          "color": [
            252,
            242,
            248,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "light": {
          "color": [
            232,
            125,
            180,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "base": {
          "color": [
            213,
            52,
            130,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "dark": {
          "color": [
            184,
            20,
            99,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "darker": {
          "color": [
            120,
            7,
            62,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "four": {
        "lighter": {
          "color": [
            242,
            253,
            249,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "light": {
          "color": [
            74,
            181,
            140,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "base": {
          "color": [
            43,
            133,
            98,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "dark": {
          "color": [
            21,
            111,
            77,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "darker": {
          "color": [
            10,
            92,
            62,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "five": {
        "lighter": {
          "color": [
            253,
            244,
            242,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "light": {
          "color": [
            247,
            133,
            95,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "base": {
          "color": [
            239,
            79,
            26,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "dark": {
          "color": [
            206,
            58,
            9,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "darker": {
          "color": [
            134,
            40,
            9,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "six": {
        "lighter": {
          "color": [
            246,
            244,
            250,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "light": {
          "color": [
            145,
            127,
            199,
            255
          ],
          "contrast": [
            0,
            0,
            0,
            255
          ]
        },
        "base": {
          "color": [
            100,
            75,
            175,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "dark": {
          "color": [
            76,
            58,
            131,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "darker": {
          "color": [
            44,
            31,
            86,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      }
    }
  }
};
var px_dark_webgl_map_default = {
  "color": {
    "black": [
      12,
      13,
      13,
      255
    ],
    "white": [
      255,
      255,
      255,
      255
    ],
    "light": [
      29,
      30,
      32,
      255
    ],
    "dark": [
      247,
      247,
      248,
      255
    ],
    "darker": [
      255,
      255,
      255,
      255
    ],
    "focus": [
      25,
      140,
      223,
      255
    ],
    "focusLighter": [
      10,
      19,
      36,
      255
    ],
    "focusContrast": [
      12,
      13,
      13,
      255
    ],
    "grey1": [
      43,
      45,
      49,
      255
    ],
    "grey2": [
      71,
      75,
      82,
      255
    ],
    "grey3": [
      104,
      110,
      120,
      255
    ],
    "grey4": [
      135,
      140,
      151,
      255
    ],
    "grey5": [
      168,
      171,
      179,
      255
    ],
    "grey6": [
      192,
      195,
      200,
      255
    ],
    "grey7": [
      211,
      213,
      217,
      255
    ],
    "grey8": [
      233,
      234,
      236,
      255
    ],
    "grey9": [
      239,
      239,
      241,
      255
    ],
    "grey10": [
      247,
      247,
      248,
      255
    ],
    "surface1": [
      9,
      10,
      12,
      255
    ],
    "surface2": [
      20,
      22,
      26,
      255
    ],
    "surface3": [
      30,
      34,
      41,
      255
    ],
    "surface4": [
      43,
      48,
      59,
      255
    ],
    "surfaceInverse": [
      12,
      13,
      13,
      255
    ],
    "ink1": [
      255,
      255,
      255,
      255
    ],
    "ink2": [
      192,
      195,
      200,
      255
    ],
    "ink3": [
      135,
      140,
      151,
      255
    ],
    "ink4": [
      104,
      110,
      120,
      255
    ],
    "ink5": [
      43,
      45,
      49,
      255
    ],
    "inkInverse": [
      255,
      255,
      255,
      255
    ],
    "border1": [
      43,
      45,
      49,
      255
    ],
    "border2": [
      71,
      75,
      82,
      255
    ],
    "border3": [
      104,
      110,
      120,
      255
    ],
    "borderInverse": [
      43,
      45,
      49,
      255
    ],
    "disabled1": [
      90,
      85,
      83,
      255
    ],
    "disabled2": [
      162,
      156,
      154,
      255
    ],
    "disabled3": [
      211,
      208,
      207,
      255
    ],
    "disabled4": [
      240,
      239,
      239,
      255
    ],
    "disabledInverse1": [
      42,
      40,
      39,
      255
    ],
    "disabledInverse2": [
      93,
      87,
      86,
      255
    ],
    "disabledInverse3": [
      167,
      161,
      160,
      255
    ],
    "readonly1": [
      43,
      45,
      49,
      255
    ],
    "readonly2": [
      135,
      140,
      151,
      255
    ],
    "readonly3": [
      192,
      195,
      200,
      255
    ],
    "readonly4": [
      239,
      239,
      241,
      255
    ],
    "elevationBase": [
      12,
      13,
      13,
      255
    ],
    "code1": [
      3,
      3,
      3,
      255
    ],
    "code2": [
      224,
      224,
      224,
      255
    ]
  },
  "palette": {
    "green": {
      "darker": {
        "color": [
          192,
          244,
          190,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "dark": {
        "color": [
          40,
          195,
          34,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "base": {
        "color": [
          0,
          156,
          0,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "light": {
        "color": [
          10,
          97,
          10,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "lighter": {
        "color": [
          13,
          38,
          13,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "teal": {
      "darker": {
        "color": [
          179,
          255,
          226,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "dark": {
        "color": [
          77,
          199,
          152,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "base": {
        "color": [
          45,
          154,
          112,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "light": {
        "color": [
          32,
          105,
          77,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "lighter": {
        "color": [
          13,
          33,
          26,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "cyan": {
      "darker": {
        "color": [
          179,
          228,
          249,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "dark": {
        "color": [
          59,
          176,
          227,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "base": {
        "color": [
          0,
          143,
          204,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "light": {
        "color": [
          11,
          92,
          132,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "lighter": {
        "color": [
          9,
          31,
          42,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "blue": {
      "darker": {
        "color": [
          178,
          218,
          250,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "dark": {
        "color": [
          79,
          166,
          238,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "base": {
        "color": [
          25,
          138,
          230,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "light": {
        "color": [
          26,
          83,
          137,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "lighter": {
        "color": [
          13,
          30,
          48,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "rxBlue": {
      "darker": {
        "color": [
          189,
          205,
          254,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "dark": {
        "color": [
          125,
          157,
          252,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "base": {
        "color": [
          85,
          126,
          246,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "light": {
        "color": [
          23,
          59,
          130,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "lighter": {
        "color": [
          10,
          20,
          41,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "purple": {
      "darker": {
        "color": [
          200,
          188,
          245,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "dark": {
        "color": [
          169,
          149,
          228,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "base": {
        "color": [
          144,
          122,
          210,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "light": {
        "color": [
          90,
          78,
          126,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "lighter": {
        "color": [
          27,
          24,
          37,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "magenta": {
      "darker": {
        "color": [
          253,
          180,
          218,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "dark": {
        "color": [
          245,
          132,
          191,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "base": {
        "color": [
          234,
          83,
          156,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "light": {
        "color": [
          171,
          38,
          102,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "lighter": {
        "color": [
          37,
          14,
          25,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "red": {
      "darker": {
        "color": [
          254,
          195,
          207,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "dark": {
        "color": [
          250,
          102,
          119,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "base": {
        "color": [
          243,
          70,
          91,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "light": {
        "color": [
          140,
          38,
          50,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "lighter": {
        "color": [
          49,
          17,
          21,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "hebRed": {
      "darker": {
        "color": [
          255,
          196,
          194,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "dark": {
        "color": [
          248,
          101,
          96,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "base": {
        "color": [
          244,
          64,
          54,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "light": {
        "color": [
          184,
          38,
          30,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "lighter": {
        "color": [
          48,
          19,
          18,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "orange": {
      "darker": {
        "color": [
          255,
          199,
          184,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "dark": {
        "color": [
          255,
          133,
          92,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "base": {
        "color": [
          241,
          98,
          50,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "light": {
        "color": [
          185,
          64,
          24,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      },
      "lighter": {
        "color": [
          43,
          21,
          13,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "amber": {
      "darker": {
        "color": [
          255,
          214,
          173,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "dark": {
        "color": [
          255,
          176,
          97,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "base": {
        "color": [
          240,
          145,
          51,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "light": {
        "color": [
          184,
          105,
          25,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "lighter": {
        "color": [
          46,
          28,
          10,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "yellow": {
      "darker": {
        "color": [
          255,
          235,
          179,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "dark": {
        "color": [
          253,
          207,
          98,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "base": {
        "color": [
          245,
          179,
          25,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "light": {
        "color": [
          194,
          139,
          20,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "lighter": {
        "color": [
          46,
          34,
          10,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    },
    "couponYellow": {
      "darker": {
        "color": [
          255,
          237,
          179,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "dark": {
        "color": [
          254,
          227,
          119,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "base": {
        "color": [
          251,
          202,
          24,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "light": {
        "color": [
          193,
          155,
          16,
          255
        ],
        "contrast": [
          12,
          13,
          13,
          255
        ]
      },
      "lighter": {
        "color": [
          46,
          38,
          10,
          255
        ],
        "contrast": [
          255,
          255,
          255,
          255
        ]
      }
    }
  },
  "pg": {
    "core": {
      "primary": {
        "darker": {
          "color": [
            178,
            218,
            250,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "dark": {
          "color": [
            79,
            166,
            238,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "base": {
          "color": [
            25,
            138,
            230,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "light": {
          "color": [
            26,
            83,
            137,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "lighter": {
          "color": [
            13,
            30,
            48,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "secondary": {
        "darker": {
          "color": [
            178,
            218,
            250,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "dark": {
          "color": [
            79,
            166,
            238,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "base": {
          "color": [
            25,
            138,
            230,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "light": {
          "color": [
            26,
            83,
            137,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "lighter": {
          "color": [
            13,
            30,
            48,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "tertiary": {
        "darker": {
          "color": [
            255,
            237,
            179,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "dark": {
          "color": [
            254,
            227,
            119,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "base": {
          "color": [
            251,
            202,
            24,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "light": {
          "color": [
            193,
            155,
            16,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "lighter": {
          "color": [
            46,
            38,
            10,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "danger": {
        "darker": {
          "color": [
            254,
            195,
            207,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "dark": {
          "color": [
            250,
            102,
            119,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "base": {
          "color": [
            243,
            70,
            91,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "light": {
          "color": [
            140,
            38,
            50,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "lighter": {
          "color": [
            49,
            17,
            21,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      }
    },
    "status": {
      "primary": {
        "darker": {
          "color": [
            178,
            218,
            250,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "dark": {
          "color": [
            79,
            166,
            238,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "base": {
          "color": [
            25,
            138,
            230,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "light": {
          "color": [
            26,
            83,
            137,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "lighter": {
          "color": [
            13,
            30,
            48,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "secondary": {
        "darker": {
          "color": [
            178,
            218,
            250,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "dark": {
          "color": [
            79,
            166,
            238,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "base": {
          "color": [
            25,
            138,
            230,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "light": {
          "color": [
            26,
            83,
            137,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "lighter": {
          "color": [
            13,
            30,
            48,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "tertiary": {
        "darker": {
          "color": [
            255,
            237,
            179,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "dark": {
          "color": [
            254,
            227,
            119,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "base": {
          "color": [
            251,
            202,
            24,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "light": {
          "color": [
            193,
            155,
            16,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "lighter": {
          "color": [
            46,
            38,
            10,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "success": {
        "darker": {
          "color": [
            192,
            244,
            190,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "dark": {
          "color": [
            40,
            195,
            34,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "base": {
          "color": [
            0,
            156,
            0,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "light": {
          "color": [
            10,
            97,
            10,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "lighter": {
          "color": [
            13,
            38,
            13,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "warning": {
        "darker": {
          "color": [
            255,
            235,
            179,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "dark": {
          "color": [
            253,
            207,
            98,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "base": {
          "color": [
            245,
            179,
            25,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "light": {
          "color": [
            194,
            139,
            20,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "lighter": {
          "color": [
            46,
            34,
            10,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "danger": {
        "darker": {
          "color": [
            254,
            195,
            207,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "dark": {
          "color": [
            250,
            102,
            119,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "base": {
          "color": [
            243,
            70,
            91,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "light": {
          "color": [
            140,
            38,
            50,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "lighter": {
          "color": [
            49,
            17,
            21,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      }
    },
    "viz": {
      "one": {
        "darker": {
          "color": [
            179,
            228,
            249,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "dark": {
          "color": [
            59,
            176,
            227,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "base": {
          "color": [
            0,
            143,
            204,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "light": {
          "color": [
            11,
            92,
            132,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "lighter": {
          "color": [
            9,
            31,
            42,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "two": {
        "darker": {
          "color": [
            255,
            235,
            179,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "dark": {
          "color": [
            253,
            207,
            98,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "base": {
          "color": [
            245,
            179,
            25,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "light": {
          "color": [
            194,
            139,
            20,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "lighter": {
          "color": [
            46,
            34,
            10,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "three": {
        "darker": {
          "color": [
            253,
            180,
            218,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "dark": {
          "color": [
            245,
            132,
            191,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "base": {
          "color": [
            234,
            83,
            156,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "light": {
          "color": [
            171,
            38,
            102,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "lighter": {
          "color": [
            37,
            14,
            25,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "four": {
        "darker": {
          "color": [
            179,
            255,
            226,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "dark": {
          "color": [
            77,
            199,
            152,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "base": {
          "color": [
            45,
            154,
            112,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "light": {
          "color": [
            32,
            105,
            77,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "lighter": {
          "color": [
            13,
            33,
            26,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "five": {
        "darker": {
          "color": [
            255,
            199,
            184,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "dark": {
          "color": [
            255,
            133,
            92,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "base": {
          "color": [
            241,
            98,
            50,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "light": {
          "color": [
            185,
            64,
            24,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "lighter": {
          "color": [
            43,
            21,
            13,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      },
      "six": {
        "darker": {
          "color": [
            200,
            188,
            245,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "dark": {
          "color": [
            169,
            149,
            228,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "base": {
          "color": [
            144,
            122,
            210,
            255
          ],
          "contrast": [
            12,
            13,
            13,
            255
          ]
        },
        "light": {
          "color": [
            90,
            78,
            126,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        },
        "lighter": {
          "color": [
            27,
            24,
            37,
            255
          ],
          "contrast": [
            255,
            255,
            255,
            255
          ]
        }
      }
    }
  }
};
var config = {
  ...core_vars_getter_map_default,
  ...theme_vars_getter_map_default
};
var setConfig = {
  ...core_vars_setter_map_default,
  ...theme_vars_setter_map_default
};
var webGlConfig = {
  px: {
    light: {
      ...px_light_webgl_map_default
    },
    dark: {
      ...px_dark_webgl_map_default
    }
  }
};
var isHostClass = (selectorRoot) => [
  ":host:host:host:host:host:host",
  // first since it will be the most common
  ":host",
  ":host:host",
  ":host:host:host",
  ":host:host:host:host",
  ":host:host:host:host:host",
  ":host:host:host:host:host:host:host",
  ":host:host:host:host:host:host:host:host"
].includes(selectorRoot);
var selectorFactory = (selectorRoot, {
  infix: internalInfix = "",
  postfix: internalPostfix = "",
  nonHostInfix: internalNonHostInfix,
  nonHostPostfix: internalNonHostPostfix
} = {}) => ({
  infix = "",
  postfix = "",
  nonHostInfix = null,
  nonHostPostfix = null
} = {}) => {
  if (isHostClass(selectorRoot)) {
    if (internalInfix || infix) {
      return `${selectorRoot}(${internalInfix ?? ""}${infix ?? ""})${internalPostfix ?? ""}${postfix ?? ""}`;
    } else {
      return `${selectorRoot}${internalPostfix ?? ""}${postfix ?? ""}`;
    }
  } else {
    return `${selectorRoot}${internalNonHostInfix ?? internalInfix ?? ""}${nonHostInfix ?? infix ?? ""}${internalNonHostPostfix ?? internalPostfix ?? ""}${nonHostPostfix ?? postfix ?? ""}`;
  }
};

// src/core/utilities/css-in-js/css-in-js.property-mappers.ts
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
      }, config);
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
  "0": config.space.none,
  "1": config.space.xs,
  "2": config.space.sm,
  "3": config.space.md,
  "4": config.space.lg,
  "5": config.space.xl,
  "6": config.space.xxl,
  "7": config.space.xxxl,
  "none": config.space.none,
  "xxs": config.space.xxs,
  "xs": config.space.xs,
  "sm": config.space.sm,
  "md": config.space.md,
  "lg": config.space.lg,
  "xl": config.space.xl,
  "xxl": config.space.xxl,
  "xxxl": config.space.xxxl
};
var spacingValShorthands = (props) => {
  return props.map((propMap) => {
    const mappedValue = spacingMap[propMap.value] ?? propMap.value;
    return { prop: propMap.prop, value: mappedValue };
  });
};
var borderRadiusMap = {
  none: config.border.radius.none,
  xs: config.border.radius.xs,
  sm: config.border.radius.sm,
  md: config.border.radius.md,
  lg: config.border.radius.lg,
  xl: config.border.radius.xl,
  xxl: config.border.radius.xxl,
  full: config.border.radius.full
};
var borderRadiusValShorthands = (props) => {
  return props.map((propMap) => {
    const mappedValue = borderRadiusMap[propMap.value] ?? propMap.value;
    return { prop: propMap.prop, value: mappedValue };
  });
};
var borderWidthMap = {
  none: config.border.width.none,
  sm: config.border.width.sm,
  md: config.border.width.md,
  lg: config.border.width.lg
};
var borderWidthValShorthands = (props) => {
  return props.map((propMap) => {
    const mappedValue = borderWidthMap[propMap.value] ?? propMap.value;
    return { prop: propMap.prop, value: mappedValue };
  });
};
var opacityMap = {
  xxl: config.opacity.xxl,
  xl: config.opacity.xl,
  lg: config.opacity.lg,
  md: config.opacity.md,
  sm: config.opacity.sm,
  xs: config.opacity.xs,
  xxs: config.opacity.xxs,
  xxxs: config.opacity.xxxs
};
var opacityValShorthands = (props) => {
  return props.map((propMap) => {
    const mappedValue = opacityMap[propMap.value] ?? propMap.value;
    return { prop: propMap.prop, value: mappedValue };
  });
};
var fontWeightMap = {
  light: config.font.weight.light,
  regular: config.font.weight.regular,
  medium: config.font.weight.medium,
  bold: config.font.weight.bold
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
  sans: config.font.family.sans,
  serif: config.font.family.serif,
  mono: config.font.family.mono
};
var fontFamilyValShorthands = (props) => {
  return props.map((propMap) => {
    const mappedValue = fontFamilyMap[propMap.value] ?? propMap.value;
    return { prop: propMap.prop, value: mappedValue };
  });
};
var elevationMap = {
  z0: config.elevation.z0,
  z1: config.elevation.z1,
  z2: config.elevation.z2,
  z3: config.elevation.z3,
  z4: config.elevation.z4
};
var elevationValShorthands = (props) => {
  return props.map((propMap) => {
    const mappedValue = elevationMap[propMap.value] ?? propMap.value;
    return { prop: propMap.prop, value: mappedValue };
  });
};

// src/core/utilities/css-in-js/css-in-js.utilities.ts
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
  const breakpointKeys = Object.keys(config.grid.breakpoint);
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
          value = value(config);
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
              selectorWrapper: `@media (min-width:${config.grid.breakpoint[prop]})`
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
                  selectorWrapper: `@media (min-width:${config.grid.breakpoint[key]})`
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
var MteElement = class extends import_lit2.LitElement {
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
      this.setInstanceStyle("se", selectorFactory(this.instanceStyleSelectorRoot), this.se ?? {});
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
var import_decorators2 = require("lit/decorators.js");

// src/core/attribute-converter/responsive-attribute.converter.ts
var import_lit3 = require("lit");
var ResponsiveValueConverter = {
  fromAttribute: (value, type) => {
    try {
      if (value?.[0] === "{") {
        return import_lit3.defaultConverter.fromAttribute(value, Object);
      }
    } catch (e) {
    }
    return import_lit3.defaultConverter.fromAttribute(value, type);
  },
  toAttribute: (value, type) => {
    if (typeof value === "object") {
      return import_lit3.defaultConverter.toAttribute(value, Object);
    }
    return import_lit3.defaultConverter.toAttribute(value, type);
  }
};

// src/core/base-classes/content.base.ts
var defaultBorderFactory = (width, color, style) => `${style ?? "solid"} ${borderWidthValShorthands([
  { prop: "borderWidth", value: dotStringToConfigValue(width ?? "1px") }
])[0]?.value} ${dotStringToConfigValue(color) ?? config.color.border1}`;
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
      this.setInstanceStyle("content-base", selectorFactory(this.contentStyleSelectorRoot), {
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
var CACHE_TO_KEY = "mte.theme.cache-to";
var COLOR_SCHEME_KEY = "mte.theme.global-color-scheme";
var _MteThemeService = class {
  constructor() {
    this.config = config;
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
      }, setConfig);
      globalThis?.document?.documentElement?.style.setProperty(cssVar, `${val}`);
    });
  }
  /** @internal **/
  get(...keys) {
    const [fn] = keys ?? [null];
    if (typeof fn === "function") {
      const cssVar2 = fn(setConfig);
      return getComputedStyle(globalThis?.documentElement).getPropertyValue(cssVar2);
    }
    const cssVar = keys.reduce((acc, key) => acc[key], setConfig);
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
var import_lit4 = require("lit");
var styles2 = import_lit4.css`:host([density=compact]){--mte-space-xxs:var(--mte-space-compact-xxs);--mte-space-xs:var(--mte-space-compact-xs);--mte-space-sm:var(--mte-space-compact-sm);--mte-space-md:var(--mte-space-compact-md);--mte-space-lg:var(--mte-space-compact-lg);--mte-space-xl:var(--mte-space-compact-xl);--mte-space-xxl:var(--mte-space-compact-xxl);--mte-space-xxxl:var(--mte-space-compact-xxxl)}:host([density=comfy]){--mte-space-xxs:var(--mte-space-comfy-xxs);--mte-space-xs:var(--mte-space-comfy-xs);--mte-space-sm:var(--mte-space-comfy-sm);--mte-space-md:var(--mte-space-comfy-md);--mte-space-lg:var(--mte-space-comfy-lg);--mte-space-xl:var(--mte-space-comfy-xl);--mte-space-xxl:var(--mte-space-comfy-xxl);--mte-space-xxxl:var(--mte-space-comfy-xxxl)}:host([density=roomy]){--mte-space-xxs:var(--mte-space-roomy-xxs);--mte-space-xs:var(--mte-space-roomy-xs);--mte-space-sm:var(--mte-space-roomy-sm);--mte-space-md:var(--mte-space-roomy-md);--mte-space-lg:var(--mte-space-roomy-lg);--mte-space-xl:var(--mte-space-roomy-xl);--mte-space-xxl:var(--mte-space-roomy-xxl);--mte-space-xxxl:var(--mte-space-roomy-xxxl)}`;

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
var import_lit5 = require("lit");
var styles3 = import_lit5.css`:host([inverse]:not([withoutInverse])){--mte-surface-1:var(--mte-surface-inverse);--mte-surface-1-rgb:var(--mte-surface-inverse-rgb);--mte-surface-2:var(--mte-surface-inverse);--mte-surface-2-rgb:var(--mte-surface-inverse-rgb);--mte-surface-3:var(--mte-surface-inverse);--mte-surface-3-rgb:var(--mte-surface-inverse-rgb);--mte-surface-4:var(--mte-surface-inverse);--mte-surface-4-rgb:var(--mte-surface-inverse-rgb);--mte-ink-1:var(--mte-white);--mte-ink-1-rgb:var(--mte-white-rgb);--mte-ink-2:var(--mte-white);--mte-ink-2-rgb:var(--mte-white-rgb);--mte-ink-3:var(--mte-white);--mte-ink-3-rgb:var(--mte-white-rgb);--mte-ink-4:var(--mte-black);--mte-ink-4-rgb:var(--mte-black-rgb);--mte-ink-5:var(--mte-black);--mte-ink-5-rgb:var(--mte-black-rgb);--mte-border-1:var(--mte-border-inverse);--mte-border-1-rgb:var(--mte-border-inverse-rgb);--mte-border-2:var(--mte-border-inverse);--mte-border-2-rgb:var(--mte-border-inverse-rgb);--mte-border-3:var(--mte-border-inverse);--mte-border-3-rgb:var(--mte-border-inverse-rgb);--mte-disabled-1:var(--mte-disabled-inverse-1);--mte-disabled-1-rgb:var(--mte-disabled-inverse-1-rgb);--mte-disabled-2:var(--mte-disabled-inverse-2);--mte-disabled-2-rgb:var(--mte-disabled-inverse-2);--mte-disabled-3:var(--mte-disabled-inverse-3);--mte-disabled-3-rgb:var(--mte-disabled-inverse-3-rgb);--mte-disabled-4:var(--mte-disabled-inverse-3);--mte-disabled-4-rgb:var(--mte-disabled-inverse-3-rgb);--mte-it-surface-1-default-rgb:var(--mte-it-surface-inverse-default-rgb);--mte-it-surface-1-default-a:var(--mte-it-surface-inverse-default-a);--mte-it-surface-1-hover-rgb:var(--mte-it-surface-inverse-hover-rgb);--mte-it-surface-1-hover-a:var(--mte-it-surface-inverse-hover-a);--mte-it-surface-1-active-rgb:var(--mte-it-surface-inverse-active-rgb);--mte-it-surface-1-active-a:var(--mte-it-surface-inverse-active-a);--mte-it-surface-2-default-rgb:var(--mte-it-surface-inverse-default-rgb);--mte-it-surface-2-default-a:var(--mte-it-surface-inverse-default-a);--mte-it-surface-2-hover-rgb:var(--mte-it-surface-inverse-hover-rgb);--mte-it-surface-2-hover-a:var(--mte-it-surface-inverse-hover-a);--mte-it-surface-2-active-rgb:var(--mte-it-surface-inverse-active-rgb);--mte-it-surface-2-active-a:var(--mte-it-surface-inverse-active-a);--mte-it-surface-3-default-rgb:var(--mte-it-surface-inverse-default-rgb);--mte-it-surface-3-default-a:var(--mte-it-surface-inverse-default-a);--mte-it-surface-3-hover-rgb:var(--mte-it-surface-inverse-hover-rgb);--mte-it-surface-3-hover-a:var(--mte-it-surface-inverse-hover-a);--mte-it-surface-3-active-rgb:var(--mte-it-surface-inverse-active-rgb);--mte-it-surface-3-active-a:var(--mte-it-surface-inverse-active-a);--mte-light:var(--mte-white);--mte-light-rgb:var(--mte-white-rgb);--mte-dark:var(--mte-black);--mte-dark-rgb:var(--mte-black-rgb);--button-filled-bg:var(--mte-white);--button-filled-ink:var(--mte-black);--button-filled-active-bg:var(--mte-border-inverse);--button-filled-active-ink:var(--mte-white)}`;

// src/core/mixins/tabindex.mixin.ts
var import_decorators7 = require("lit/decorators.js");

// src/core/mixins/style-parts.mixin.ts
var import_decorators8 = require("lit/decorators.js");

// src/core/mixins/button.mixin.ts
var import_decorators9 = require("lit/decorators.js");
var import_lit6 = require("lit");
var import_form_helpers = require("@open-wc/form-helpers");
var import_if_defined = require("lit-html/directives/if-defined.js");

// src/core/mixins/button.mixin.styles.ts
var import_lit7 = require("lit");
var styles4 = import_lit7.css`:host{position:relative}#anchor{inset:0;position:absolute}`;

// src/core/mixins/overlay.mixin.ts
var import_decorators10 = require("lit/decorators.js");

// src/core/mixins/overlay.mixin.styles.ts
var import_lit8 = require("lit");
var styles5 = import_lit8.css`:host{display:block;pointer-events:none;position:absolute;z-index:1000}`;

// src/core/mixins/fieldset.mixin.ts
var import_if_defined2 = require("lit-html/directives/if-defined.js");
var import_class_map = require("lit/directives/class-map.js");
var import_lit9 = require("lit");
var import_decorators11 = require("lit/decorators.js");
var import_resize_controller = require("@lit-labs/observers/resize-controller.js");

// src/core/mixins/fieldset.mixin.styles.ts
var import_lit10 = require("lit");
var styles6 = import_lit10.css`:host{--full-width:max-content;--control-width:unset;--control-min-width:240px;--control-max-width:var(--control-width);--control-margin-y:var(--mte-space-sm);--control-margin-x:var(--mte-space-sm);--control-descriptor-margin:var(--mte-space-sm);--label-width:var(--control-width);--label-min-width:var(--control-min-width);--label-max-width:var(--control-max-width);--label-margin-y:var(--mte-space-xs);display:inline-block;width:var(--full-width)}.grid-container{display:inline-grid;grid-template-areas:"label" "control";grid-template-rows:1fr minmax(0,100%);width:inherit}:host([withFullWidth]){--full-width:100%;--control-width:100%}:host([withoutMargin]){--control-margin-y:0px}:host([withoutMargin]) .label-container.has-content{margin-bottom:var(--control-descriptor-margin)}.label-container{display:none;grid-area:label;max-width:var(--label-max-width);min-width:var(--label-min-width);width:var(--label-width)}.label-container.has-content{display:block;margin-top:var(--label-margin-y)}.label-container:not(.has-content){margin:0!important}.context{grid-area:context}.description,.error,.hint,.label{display:block}.description mte-description,.description mte-description-text,.label mte-label,.label mte-label-text,:host ::slotted(mte-description-text[slot=description]),:host ::slotted(mte-description[slot=description]),:host ::slotted(mte-label-text[slot=label]),:host ::slotted(mte-label[slot=label]){margin:0}:host([labelPosition=before]){--label-width:max-content;--label-min-width:max-content}:host([labelPosition=before]) .grid-container{grid-template-areas:"label control";grid-template-columns:minmax(auto,var(--label-width)) minmax(auto,var(--control-width))}:host([labelPosition=before]) .label-container{margin-bottom:var(--control-margin-y);margin-right:var(--control-margin-x);margin-top:calc(var(--control-margin-y) + var(--label-before-offset))}.description,.error,.hint{min-width:100%;width:-moz-min-content;width:min-content}.control-outer-container{grid-area:control;margin-top:var(--control-margin-y);max-width:var(--control-max-width);min-width:var(--control-min-width);width:var(--control-width)}:host(:not([labelPosition=before])) .control-outer-container.has-label-content{margin-top:calc(var(--control-margin-y)/2)}.control-container{display:flex;flex-direction:column;margin-bottom:var(--control-margin-y)}.error,.hint{display:none}.error.has-content,.hint.has-content{display:block;margin-top:var(--control-descriptor-margin)}`;

// src/core/mixins/form-field.mixin.ts
var import_class_map2 = require("lit/directives/class-map.js");
var import_lit11 = require("lit");
var import_decorators13 = require("lit/decorators.js");

// src/core/mixins/form-field.mixin.styles.ts
var import_lit12 = require("lit");
var styles7 = import_lit12.css`:host{--form-field-internal-padding:var(--mte-space-sm);--form-field-internal-gap:var(--mte-space-sm);--form-field-radius:var(--mte-border-radius-md);--form-field-border-color:var(--mte-border-2);--form-field-background:var(--mte-surface-2);--prepend-background:var(--mte-grey-1);--prepend-padding-x:var(--mte-space-sm);--prepend-border-color:var(--mte-border-2)}:host([radius=sm]){--form-field-radius:var(--mte-border-radius-xs)}:host([radius=lg]){--form-field-radius:var(--mte-border-radius-xxl)}:host([size=sm]){--prepend-padding-x:calc(var(--mte-space-xs) + var(--mte-space-xxs));--form-field-internal-padding:calc(var(--mte-space-xs) + var(--mte-space-xxs));--form-field-internal-gap:calc(var(--mte-space-xs) + var(--mte-space-xxs))}:host([size=lg]){--prepend-padding-x:calc(var(--mte-space-sm) + var(--mte-space-xs));--form-field-internal-padding:calc(var(--mte-space-sm) + var(--mte-space-xs));--form-field-internal-gap:calc(var(--mte-space-sm) + var(--mte-space-xs))}.form-field{align-items:center;background:var(--form-field-background);border:1px solid var(--form-field-border-color);border-radius:var(--form-field-radius);display:flex;flex-direction:row;gap:var(--form-field-internal-gap);position:relative}:host([disabled]) .form-field{background:var(--mte-disabled-1);border:1px solid var(--mte-disabled-1)}.append,.prepend{align-items:center;align-self:stretch;background:var(--prepend-background);display:none;font-size:var(--font-size);justify-content:center;padding:0 var(--prepend-padding-x)}.prepend{border-bottom-left-radius:var(--form-field-radius);border-right:1px solid var(--prepend-border-color);border-top-left-radius:var(--form-field-radius)}.append{border-bottom-right-radius:var(--form-field-radius);border-left:1px solid var(--prepend-border-color);border-top-right-radius:var(--form-field-radius)}.append.has-content,.prepend.has-content{display:flex}.prefix,.suffix{align-items:center;align-self:stretch;display:flex;font-size:var(--font-size);justify-content:center}.prefix:not(.has-prepend){padding-left:var(--prepend-padding-x)}.suffix:not(.has-append){padding-right:var(--prepend-padding-x)}.form-field.focused:not(.disabled):not([disabled]):not(:disabled):before{border:2px solid rgb(var(--mte-focus-rgb));border-bottom-left-radius:var(--form-field-radius);border-bottom-right-radius:var(--form-field-radius);border-top-left-radius:var(--form-field-radius);border-top-right-radius:var(--form-field-radius);bottom:-1px;box-shadow:0 0 0 1px var(--mte-light);content:"";display:block;left:-1px;pointer-events:none;position:absolute;right:-1px;top:-1px;z-index:9}.form-field.invalid{--form-field-border-color:rgb(var(--mte-core-danger-base-rgb))}:host([withoutBorder]) :is(.form-field,.prepend,.append){--form-field-border-color:transparent}`;

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
var import_lit13 = require("lit");

// src/core/styles/base.styles.ts
var import_lit14 = require("lit");
var styles8 = import_lit14.css`:host{box-sizing:border-box}`;

// src/atomic/toolbar/toolbar.element.ts
var MteToolbar = class extends DensityMixin(
  InverseMixin(PresetMixinFactory("MteToolbar")(MteElement))
) {
  constructor() {
    super(...arguments);
    this.hasRowElemChild = false;
    this.slotController = new SlotController(this, { updateOnChange: ["default"] });
  }
  render() {
    this.hasRowElemChild = this.childRowElems?.length > 0;
    return import_lit15.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteToolbar.styles = [styles8, styles2, styles];
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteToolbar.prototype, "transparent", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteToolbar.prototype, "hasRowElemChild", 2);
__decorateClass([
  (0, import_decorators19.queryAssignedElements)({ selector: "mte-toolbar-row" })
], MteToolbar.prototype, "childRowElems", 2);
MteToolbar = __decorateClass([
  defineElement("mte-toolbar")
], MteToolbar);

// src/atomic/toolbar/toolbar-section.element.ts
var import_lit17 = require("lit");
var import_decorators20 = require("lit/decorators.js");

// src/atomic/toolbar/toolbar-section.styles.ts
var import_lit16 = require("lit");
var styles9 = import_lit16.css`:host{align-items:center;align-self:flex-start;box-sizing:border-box;display:flex;flex:1;flex-wrap:wrap;gap:var(--toolbar-gap);justify-content:center;max-width:100%;min-height:calc(var(--toolbar-min-height) - var(--toolbar-padding)*2);order:0;text-align:inherit;z-index:1}:host([shrink]){flex-grow:0;flex-shrink:1}:host([align=start]){justify-content:flex-start!important;order:-1!important}:host([align=end]){justify-content:flex-end!important;order:1!important}:host ::slotted(mte-title){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-body1-font-size);font-weight:var(--mte-font-set-body1-font-weight);line-height:var(--mte-font-set-body1-line-height);text-decoration:inherit;text-overflow:ellipsis;text-transform:inherit;white-spacing:nowrap;font-weight:var(--mte-font-weight-bold);overflow:hidden;padding-bottom:0;padding-left:0;padding-right:var(--toolbar-gap);padding-top:0;white-space:nowrap;z-index:1}:host::slotted(mte-button){color:inherit}`;

// src/atomic/toolbar/toolbar-section.element.ts
var MteToolbarSection = class extends MteElement {
  render() {
    return import_lit17.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteToolbarSection.styles = [styles8, styles9];
__decorateClass([
  (0, import_decorators20.property)({ reflect: true })
], MteToolbarSection.prototype, "align", 2);
__decorateClass([
  (0, import_decorators20.property)({ type: Boolean, reflect: true })
], MteToolbarSection.prototype, "shrink", 2);
MteToolbarSection = __decorateClass([
  defineElement("mte-toolbar-section")
], MteToolbarSection);

// src/atomic/toolbar/toolbar-row.element.ts
var import_lit19 = require("lit");

// src/atomic/toolbar/toolbar-row.styles.ts
var import_lit18 = require("lit");
var styles10 = import_lit18.css`:host{align-items:center;box-sizing:border-box;color:inherit;display:flex;flex-wrap:wrap;gap:var(--toolbar-padding);justify-content:flex-start;max-height:auto;min-height:calc(var(--toolbar-min-height) - var(--toolbar-padding)*2);position:relative;width:100%}:host ::slotted(mte-title){font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:var(--mte-font-set-body1-font-size);font-weight:var(--mte-font-set-body1-font-weight);line-height:var(--mte-font-set-body1-line-height);text-decoration:inherit;text-overflow:ellipsis;text-transform:inherit;white-spacing:nowrap;font-weight:var(--mte-font-weight-bold);overflow:hidden;padding-bottom:0;padding-left:0;padding-right:var(--toolbar-gap);padding-top:0;white-space:nowrap;z-index:1}:host ::slotted(mte-toolbar-section:not(:last-of-type):not(:first-of-type)){justify-content:center;order:0}:host ::slotted(mte-toolbar-section:last-of-type){justify-content:flex-end;order:1}:host ::slotted(mte-toolbar-section:first-of-type){justify-content:flex-start;order:-1}`;

// src/atomic/toolbar/toolbar-row.element.ts
var MteToolbarRow = class extends MteElement {
  render() {
    return import_lit19.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteToolbarRow.styles = [styles8, styles10];
MteToolbarRow = __decorateClass([
  defineElement("mte-toolbar-row")
], MteToolbarRow);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90b29sYmFyL2luZGV4LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3ByZXNldHMvcHJlc2V0LmRlY29yYXRvci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZGVuc2l0eS5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Rvb2xiYXIvdG9vbGJhci5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdG9vbGJhci90b29sYmFyLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9iYXNlLWNsYXNzZXMvbXRlLmVsZW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3NyYy9nZW5lcmF0ZWQvbWFwcy9jb3JlLXZhcnMtZ2V0dGVyLW1hcC50cyIsICIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvc3JjL2dlbmVyYXRlZC9tYXBzL3RoZW1lLXZhcnMtZ2V0dGVyLW1hcC50cyIsICIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvc3JjL2dlbmVyYXRlZC9tYXBzL2NvcmUtdmFycy1zZXR0ZXItbWFwLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9zcmMvZ2VuZXJhdGVkL21hcHMvdGhlbWUtdmFycy1zZXR0ZXItbWFwLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9zcmMvZ2VuZXJhdGVkL21hcHMvcHgtbGlnaHQtd2ViZ2wtbWFwLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9zcmMvZ2VuZXJhdGVkL21hcHMvcHgtZGFyay13ZWJnbC1tYXAudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3NyYy9jb25maWcudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3NyYy9mdW5jdGlvbnMvY29yZS50cyIsICIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvc3JjL2Z1bmN0aW9ucy90aGVtZS50cyIsICIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvc3JjL2Z1bmN0aW9ucy90eXBvZ3JhcGh5LnRzIiwgIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9zcmMvZnVuY3Rpb25zL2FuaW1hdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvc3JjL2Z1bmN0aW9ucy9lbGV2YXRpb24udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Nzcy1pbi1qcy9jc3MtaW4tanMucHJvcGVydHktbWFwcGVycy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS91dGlsaXRpZXMvY3NzLWluLWpzL2Nzcy1pbi1qcy51dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Vudmlyb25tZW50LnV0aWxpdGllcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS91dGlsaXRpZXMvZm9ybS51dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL3JlYWN0aXZlLXNpZ25hbC50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9iYXNlLWNsYXNzZXMvY29udGVudC5iYXNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2F0dHJpYnV0ZS1jb252ZXJ0ZXIvcmVzcG9uc2l2ZS1hdHRyaWJ1dGUuY29udmVydGVyLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbnN0YW50cy9oZWItbG9nby50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb250cm9sbGVycy9zbG90LmNvbnRyb2xsZXIudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc2VydmljZXMvdGhlbWUuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy9wb3J0YWwuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy9oaXN0b3J5LWFwaS5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZpY2VzL2xvY2FsaXplLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24vYnV0dG9uLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pY29uL2ljb24ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdG9vbGJhci90b29sYmFyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jYXJkL2NhcmQucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RyZWUvdHJlZS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGFnL3RhZy5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYmFkZ2UvYmFkZ2UucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2xpbmsvbGluay5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYWxlcnQvYWxlcnQucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2lucHV0L2lucHV0LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9kcmF3ZXIvZHJhd2VyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hc2lkZS9hc2lkZS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi1pdGVtLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9tb2RhbC9tb2RhbC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvY2hlY2tib3gvY2hlY2tib3gucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3JhZGlvL3JhZGlvLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXYvbmF2LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zd2l0Y2gvc3dpdGNoLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXRpdmUtc2VsZWN0L25hdGl2ZS1zZWxlY3QucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RleHRhcmVhL3RleHRhcmVhLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9za2VsZXRvbi9za2VsZXRvbi5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc2xpZGVyL3NsaWRlci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcmFuZ2Utc2xpZGVyL3JhbmdlLXNsaWRlci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc2VnbWVudGVkLWNvbnRyb2wvc2VnbWVudGVkLWNvbnRyb2wucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXQuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5jb250ZXh0LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2NvbnRyb2xsZXJzL2FwcGxpZWQtcHJlc2V0LWNvbnRleHQuY29udHJvbGxlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9kZWNvcmF0b3JzL2RlZmluZS1lbGVtZW50LmRlY29yYXRvci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZGVuc2l0eS5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2Rpc2FibGVkLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9pbnZlcnNlLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9pbnZlcnNlLm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvdGFiaW5kZXgubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3N0eWxlLXBhcnRzLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvYnV0dG9uLm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvb3ZlcmxheS5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvb3ZlcmxheS5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9maWVsZHNldC5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9mb3JtLWZpZWxkLm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvYXV0by1hY3RpdmUtbGluay5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvc2xvdC1vYnNlcnZlci5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvY2hlY2tib3gubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL21hcHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL2FvbS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvbXV0YXRpb24tb2JzZXJ2ZXJzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy91dGlscy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvVmFsaWRpdHlTdGF0ZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvQ3VzdG9tU3RhdGVTZXQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL0hUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9wYXRjaC1mb3JtLXByb3RvdHlwZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvZWxlbWVudC1pbnRlcm5hbHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2xhbmcubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3dhaXQtZm9yLWZ3Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3N0eWxlcyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zdHlsZXMvYmFzZS5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90b29sYmFyL3Rvb2xiYXItc2VjdGlvbi5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdG9vbGJhci90b29sYmFyLXNlY3Rpb24uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdG9vbGJhci90b29sYmFyLXJvdy5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdG9vbGJhci90b29sYmFyLXJvdy5zdHlsZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCAqIGZyb20gJy4vdG9vbGJhci5lbGVtZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdG9vbGJhci1zZWN0aW9uLmVsZW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi90b29sYmFyLXJvdy5lbGVtZW50JztcbiIsICJpbXBvcnQgeyBQcm9wZXJ0eURlY2xhcmF0aW9uIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcHJvcGVydHkuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlc2V0UHJvcGVydHk8VD4ob3B0aW9ucz86IFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgcmV0dXJuIHByb3BlcnR5KHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGlzUHJlc2V0OiB0cnVlLFxuICB9IGFzIGFueSk7XG59XG4iLCAiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBwcmVzZXRQcm9wZXJ0eSB9IGZyb20gJy4uL3ByZXNldHMvcHJlc2V0LmRlY29yYXRvcic7XG5pbXBvcnQgeyBQcmVzZXRFbGVtZW50SW50ZXJmYWNlIH0gZnJvbSAnLi4vcHJlc2V0cy9wcmVzZXQubWl4aW4nO1xuXG5leHBvcnQgdHlwZSBEZW5zaXR5T3B0aW9ucyA9ICdjb21wYWN0JyB8ICdjb21meScgfCAncm9vbXknIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEZW5zaXR5SW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIGRhdGEgZGVuc2l0eSBvZiB0aGlzIGNvbXBvbmVudFxuICAgKiBAYXR0ciBkZW5zaXR5XG4gICAqL1xuICBkZW5zaXR5OiBEZW5zaXR5T3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IERlbnNpdHlNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudCAmIFByZXNldEVsZW1lbnRJbnRlcmZhY2U8YW55Pj4+KFxuICBzdXBlckNsYXNzOiBUXG4pID0+IHtcbiAgY2xhc3MgRGVuc2l0eUVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBkYXRhIGRlbnNpdHkgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBkZW5zaXR5XG4gICAgICovXG4gICAgQHByZXNldFByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBkZW5zaXR5OiBEZW5zaXR5T3B0aW9ucztcbiAgfVxuICByZXR1cm4gRGVuc2l0eUVsZW1lbnQgYXMgQ29uc3RydWN0b3I8RGVuc2l0eUludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBEZW5zaXR5TWl4aW4gfSBmcm9tICcuLy4uLy4uL2NvcmUvbWl4aW5zL2RlbnNpdHkubWl4aW4nO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgcXVlcnlBc3NpZ25lZEVsZW1lbnRzIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi90b29sYmFyLnN0eWxlcyc7XG5pbXBvcnQgeyBUb29sYmFyUHJlc2V0IH0gZnJvbSAnLi90b29sYmFyLnByZXNldHMnO1xuaW1wb3J0IHtcbiAgYmFzZVN0eWxlcyxcbiAgZGVmaW5lRWxlbWVudCxcbiAgZGVuc2l0eVN0eWxlcyxcbiAgSW52ZXJzZU1peGluLFxuICBNdGVFbGVtZW50LFxuICBQcmVzZXRNaXhpbkZhY3RvcnksXG4gIFNsb3RDb250cm9sbGVyLFxufSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IE10ZVRvb2xiYXJSb3cgfSBmcm9tICcuL3Rvb2xiYXItcm93LmVsZW1lbnQnO1xuXG4vKipcbiAqIEBzbG90IC0gVG9vbGJhciBjb250ZW50XG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtdG9vbGJhcicpXG5leHBvcnQgY2xhc3MgTXRlVG9vbGJhciBleHRlbmRzIERlbnNpdHlNaXhpbihcbiAgSW52ZXJzZU1peGluKFByZXNldE1peGluRmFjdG9yeTxUb29sYmFyUHJlc2V0PignTXRlVG9vbGJhcicpKE10ZUVsZW1lbnQpKVxuKSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbYmFzZVN0eWxlcywgZGVuc2l0eVN0eWxlcywgc3R5bGVzXTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHRyYW5zcGFyZW50OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaWduYWxzIHRvIGhvc3QgZWxlbWVudCB0aGF0IGl0cyBzbG90IGNvbnRhaW5zIGFuIG10ZS10b29sYmFyLXJvd1xuICAgKiBUT0RPOiByZW1vdmUgd2hlbiA6aGFzKCkgaXMgYXZhaWxhYmxlIC0gaHR0cHM6Ly9jYW5pdXNlLmNvbS9jc3MtaGFzXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGhhc1Jvd0VsZW1DaGlsZCA9IGZhbHNlO1xuXG4gIEBxdWVyeUFzc2lnbmVkRWxlbWVudHMoeyBzZWxlY3RvcjogJ210ZS10b29sYmFyLXJvdycgfSkgcHJpdmF0ZSBjaGlsZFJvd0VsZW1zOiBNdGVUb29sYmFyUm93W107XG5cbiAgcHJpdmF0ZSBzbG90Q29udHJvbGxlciA9IG5ldyBTbG90Q29udHJvbGxlcih0aGlzLCB7IHVwZGF0ZU9uQ2hhbmdlOiBbJ2RlZmF1bHQnXSB9KTtcblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5oYXNSb3dFbGVtQ2hpbGQgPSB0aGlzLmNoaWxkUm93RWxlbXM/Lmxlbmd0aCA+IDA7XG5cbiAgICByZXR1cm4gaHRtbGAke3RoaXMuaW5zdGFuY2VTdHlsZXN9PHNsb3Q+PC9zbG90PmA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLXRvb2xiYXInOiBNdGVUb29sYmFyO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tdG9vbGJhci1taW4taGVpZ2h0OjYwcHg7LS10b29sYmFyLXBhZGRpbmc6OHB4Oy0tdG9vbGJhci1nYXA6OHB4O2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnJnYih2YXIoLS1tdGUtc3VyZmFjZS0zLXJnYikpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtnYXA6dmFyKC0tdG9vbGJhci1wYWRkaW5nKTtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDttYXgtaGVpZ2h0OmF1dG87bWluLWhlaWdodDp2YXIoLS10b29sYmFyLW1pbi1oZWlnaHQpO3BhZGRpbmc6dmFyKC0tdG9vbGJhci1wYWRkaW5nKSBjYWxjKHZhcigtLXRvb2xiYXItcGFkZGluZykqMik7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX06aG9zdChbaGFzUm93RWxlbUNoaWxkXSl7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC13cmFwOm5vd3JhcDtnYXA6MDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfTpob3N0KFtpbnZlcnNlXSl7YmFja2dyb3VuZDpyZ2IodmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpKTtjb2xvcjpyZ2IodmFyKC0tbXRlLWluay1pbnZlcnNlLXJnYikpfTpob3N0KFt0cmFuc3BhcmVudF0pe2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6aW5oZXJpdCFpbXBvcnRhbnR9Omhvc3QoW3RyYW5zcGFyZW50XSl7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowfTpob3N0KFtkZW5zaXR5PWNvbXBhY3RdKXstLXRvb2xiYXItbWluLWhlaWdodDo0OHB4Oy0tdG9vbGJhci1wYWRkaW5nOjZweDstLXRvb2xiYXItZ2FwOjZweH06aG9zdCA6OnNsb3R0ZWQobXRlLXRpdGxlKXtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1mb250LXdlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWxpbmUtaGVpZ2h0KTt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7d2hpdGUtc3BhY2luZzpub3dyYXA7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtd2VpZ2h0LWJvbGQpO292ZXJmbG93OmhpZGRlbjtwYWRkaW5nLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6dmFyKC0tdG9vbGJhci1nYXApO3BhZGRpbmctdG9wOjA7d2hpdGUtc3BhY2U6bm93cmFwO3otaW5kZXg6MX06aG9zdCA6OnNsb3R0ZWQobXRlLXRvb2xiYXItc2VjdGlvbjpub3QoOmxhc3Qtb2YtdHlwZSk6bm90KDpmaXJzdC1vZi10eXBlKSl7anVzdGlmeS1jb250ZW50OmNlbnRlcjtvcmRlcjowfTpob3N0IDo6c2xvdHRlZChtdGUtdG9vbGJhci1zZWN0aW9uOmxhc3Qtb2YtdHlwZSl7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO29yZGVyOjF9Omhvc3QgOjpzbG90dGVkKG10ZS10b29sYmFyLXNlY3Rpb246Zmlyc3Qtb2YtdHlwZSl7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7b3JkZXI6LTF9YDsiLCAiLyogZXNsaW50LWRpc2FibGUgd2Mvbm8tc2VsZi1jbGFzcyAqL1xuaW1wb3J0IHsgcHJvcGVydHksIHN0YXRlIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBzZWxlY3RvckZhY3RvcnksIFNlbGVjdG9yRmFjdG9yeSB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7XG4gIGNvbnN0cnVjdEluc3RhbmNlU3R5bGVzLFxuICBnZW5lcmF0ZVNlbGVjdG9yc0Zyb21TdHlsZU1hcCxcbiAgU2VsZWN0b3JTdHlsZXMsXG4gIFN0eWxlTWFwLFxuICBVbnN1YnNjcmliZXIsXG59IGZyb20gJy4uL3V0aWxpdGllcyc7XG5pbXBvcnQgeyB1bnNhZmVIVE1MIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy91bnNhZmUtaHRtbC5qcyc7XG5pbXBvcnQgeyBNb3J0YXJQcmVzZXRUaGVtZSB9IGZyb20gJy4uL3ByZXNldHMnO1xuXG4vLyBEaXNhYmxlIHRoaXMgd2FybmluZyBmb3Igbm93IGJ5IHByZS1tYXJraW5nIGl0IGFzIGlzc3VlZCBzbyB1c2VycyBkb24ndCBoYXZlIHRvIHNlZSBpdFxuLy8gVE9ETzogQXNrIGxpdCB0ZWFtIHdoeSB0aGlzIGlzIHRocm93biBldmVyeXdoZXJlIGFuZCB3aGF0IGFsdGVybmF0aXZlcyBhcmUgZm9yIHByZXNldCBzb2x1dGlvblxuZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncyA/Pz0gbmV3IFNldCgpO1xuZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncy5hZGQoXG4gICdPdmVycmlkaW5nIFJlYWN0aXZlRWxlbWVudC5nZXRQcm9wZXJ0eURlc2NyaXB0b3IoKSBpcyBkZXByZWNhdGVkLiBUaGUgb3ZlcnJpZGUgd2lsbCBub3QgYmUgY2FsbGVkIHdpdGggc3RhbmRhcmQgZGVjb3JhdG9ycyBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy9uby1vdmVycmlkZS1nZXQtcHJvcGVydHktZGVzY3JpcHRvciBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nXG4pO1xuXG5leHBvcnQgY2xhc3MgTXRlRWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwcml2YXRlIF9faW5zdGFuY2VTdHlsZVNoZWV0TWFwID0gbmV3IE1hcDxzdHJpbmcsIFNlbGVjdG9yU3R5bGVzW10+KCk7XG4gIHByaXZhdGUgX19pbnN0YW5jZVN0eWxlU2hlZXROZWVkc1VwZGF0ZSA9IGZhbHNlO1xuXG4gIC8qKiBTZXQgdG8gdHJ1ZSB3aGVuIGZpcnN0VXBkYXRlZCBpcyBmaXJzdCBjYWxsZWQgKi9cbiAgcHJvdGVjdGVkIF9fZmlyc3RVcGRhdGVkID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIGluc3RhbmNlU3R5bGVzO1xuXG4gIC8qKlxuICAgKiBBbGwgc3VicyBwdXNoZWQgdG8gdGhpcyBhcnJheSB3aWxsIGJlIGNsZWFyZWQgaW4gdGhlIGRpc2Nvbm5lY3RlZENhbGxiYWNrXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN1YnM6IFVuc3Vic2NyaWJlcltdID0gW107XG5cbiAgLyoqIFN0eWxlIG1hcHBpbmdzIHRoYXQgYXJlIGFwcGxpZWQgdG8gdGhlIGhvc3QgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCByZWZsZWN0OiB0cnVlIH0pIHNlPzogU3R5bGVNYXA7XG5cbiAgLyoqXG4gICAqIFRoZSB0aGVtZSB0byB1c2UgZm9yIHN0eWxpbmcgdGhpcyBjb21wb25lbnQuIE92ZXJyaWRlcyB0aGUgZ2xvYmFsIHByZXNldCBmb3IgdGhpcyBpbnN0YW5jZSBvZiB0aGlzIGNvbXBvbmVudC5cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgYXR0cmlidXRlOiAnZGF0YS1tdGUtdGhlbWUnIH0pXG4gIHNldCB0aGVtZSh0aGVtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLl90aGVtZTtcbiAgICB0aGlzLl90aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBvbGRWYWx1ZSk7XG4gICAgLy8gVE9ETzogZmlndXJlIG91dCBhIGJldHRlciB3YXkgdG8gc29sdmUgdGhpcyBmb3IgYWxsIHByZXNldHNcbiAgICBpZiAodGhpcy5fX2xvY2FsUHJlc2V0VGhlbWUpIHtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXF1ZXN0VXBkYXRlKCd0aGVtZScsIG51bGwpKTtcbiAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB0aGlzLnJlcXVlc3RVcGRhdGUoJ3RoZW1lJywgbnVsbCkpO1xuICAgIH1cbiAgfVxuICBnZXQgdGhlbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWUgPz8gdGhpcy5fX2xvY2FsUHJlc2V0VGhlbWU/Lm5hbWU7XG4gIH1cbiAgcHJpdmF0ZSBfdGhlbWU6IHN0cmluZztcblxuICAvKiogVXNlZCB0byBkZWNsYXJlIGEgbG9jYWwgdGhlbWUgdmFsdWUgZGV0ZXJtaW5lZCBieSB0aGUgbG9jYWwgcHJlc2V0IGlmIGl0IGlzIHNldC4gKi9cbiAgQHN0YXRlKCkgcHJvdGVjdGVkIF9fbG9jYWxQcmVzZXRUaGVtZTogTW9ydGFyUHJlc2V0VGhlbWU7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgc2VsZWN0b3IgdG8gaGF2ZSBpbnN0YW5jZSBzdHlsZXMgdGFyZ2V0IGEgc3BlY2lmaWMgaW5uZXIgZWxlbWVudC5cbiAgICogVXNlZnVsIGluIHNwZWNpZmljIHNjZW5hcmlvcyB3aGVyZSBmb2N1cyBpcyBkZWxlZ2F0ZWQgbGlrZSBidXR0b25zLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0IHRoaXMgcmVwZWF0cyBgOmhvc3RgIHNpeCB0aW1lcyB0byBwcm92aWRlIGEgc3BlY2lmaWNpdHkgb2YgNlxuICAgKi9cbiAgcHJvdGVjdGVkIGluc3RhbmNlU3R5bGVTZWxlY3RvclJvb3QgPSAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0JztcblxuICAvKipcbiAgICogQ2FuIGJlIGNhbGxlZCBieSBkZXJpdmVkIGNsYXNzZXMgdG8gcmVnaXN0ZXIgbmV3IGluc3RhbmNlIGxldmVsIGR5bmFtaWMgc3R5bGVzLlxuICAgKiBXaGVuIGNhbGxlZCB0aGUgaW5zdGFuY2Ugc3R5bGVzaGVldCB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIGxhdGVzdCBzdHlsZXMgdGhpcyB1cGRhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgc2V0SW5zdGFuY2VTdHlsZShpZDogc3RyaW5nLCBzZWxlY3RvcjogU2VsZWN0b3JGYWN0b3J5LCBzdHlsZU1hcDogU3R5bGVNYXApIHtcbiAgICAvLyBXZSBwYXJzZSBhbGwgc3R5bGUgaW5mb3JtYXRpb24gaGVyZSBhbmQgc2NvcGUgaXQgdG8gdGhlIGdpdmVuIGlkLiBUaGlzIGVuc3VyZXMgd2VcbiAgICAvLyBvbmx5IGV2ZXIgbmVlZCB0byByZS1wYXJzZSB0aGlzIHBvcnRpb24gb2Ygc3R5bGUgaW5mb3JtYXRpb24gd2hlbiBpdHMgYXNzb2NpYXRlZFxuICAgIC8vIGlkIGlzIHVwZGF0ZWQgYWdhaW4uXG4gICAgdGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE1hcC5zZXQoaWQsIGdlbmVyYXRlU2VsZWN0b3JzRnJvbVN0eWxlTWFwKHNlbGVjdG9yLCBzdHlsZU1hcCkpO1xuICAgIHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXROZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICAvKiogQSBjdXN0b20gaG9vayB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIGluIGRlcml2ZWQgY2xhc3NlcyB0byBzZXQgaW5zdGFuY2Ugc3R5bGVzIGFzIG5lZWRlZCAqL1xuICBwcm90ZWN0ZWQgdXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKSB7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ3NlJykpIHtcbiAgICAgIHRoaXMuc2V0SW5zdGFuY2VTdHlsZSgnc2UnLCBzZWxlY3RvckZhY3RvcnkodGhpcy5pbnN0YW5jZVN0eWxlU2VsZWN0b3JSb290KSwgdGhpcy5zZSA/PyB7fSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHdpbGxVcGRhdGUoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIud2lsbFVwZGF0ZShjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gQ2FsbCB0aGUgdXBkYXRlSW5zdGFuY2VTdHlsZXMgaG9va1xuICAgIHRoaXMudXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKTtcblxuICAgIC8vIENoZWNrIGlmIGluc3RhbmNlIHN0eWxlcyBuZWVkIHRvIGJlIHJlcmVuZGVyZWRcbiAgICBpZiAodGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlU3R5bGVzID0gdW5zYWZlSFRNTChcbiAgICAgICAgYDxzdHlsZSBpZD1cIl9faW5zdGFuY2Utc3R5bGVzXCI+JHtjb25zdHJ1Y3RJbnN0YW5jZVN0eWxlcyhcbiAgICAgICAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TWFwXG4gICAgICAgICl9PC9zdHlsZT5gXG4gICAgICApO1xuICAgICAgdGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICB0aGlzLl9fZmlyc3RVcGRhdGVkID0gdHJ1ZTtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICB0aGlzLnN1YnMuZm9yRWFjaCgodW5zdWIpID0+IHVuc3ViKCkpO1xuICAgIHRoaXMuc3VicyA9IFtdO1xuICB9XG59XG4iLCAiLyoqXG4gKiBEbyBub3QgZWRpdCBkaXJlY3RseVxuICogR2VuZXJhdGVkIG9uIFR1ZSwgMDIgQXByIDIwMjQgMTg6NDY6NTEgR01UXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwib3BhY2l0eVwiOiB7XG4gICAgXCJ4eGxcIjogXCJ2YXIoLS1tdGUtb3BhY2l0eS14eGwpXCIsXG4gICAgXCJ4bFwiOiBcInZhcigtLW10ZS1vcGFjaXR5LXhsKVwiLFxuICAgIFwibGdcIjogXCJ2YXIoLS1tdGUtb3BhY2l0eS1sZylcIixcbiAgICBcIm1kXCI6IFwidmFyKC0tbXRlLW9wYWNpdHktbWQpXCIsXG4gICAgXCJzbVwiOiBcInZhcigtLW10ZS1vcGFjaXR5LXNtKVwiLFxuICAgIFwieHNcIjogXCJ2YXIoLS1tdGUtb3BhY2l0eS14cylcIixcbiAgICBcInh4c1wiOiBcInZhcigtLW10ZS1vcGFjaXR5LXh4cylcIixcbiAgICBcInh4eHNcIjogXCJ2YXIoLS1tdGUtb3BhY2l0eS14eHhzKVwiXG4gIH0sXG4gIFwiYm9yZGVyXCI6IHtcbiAgICBcInJhZGl1c1wiOiB7XG4gICAgICBcIm5vbmVcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1ub25lKVwiLFxuICAgICAgXCJ4c1wiOiBcInZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXhzKVwiLFxuICAgICAgXCJzbVwiOiBcInZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXNtKVwiLFxuICAgICAgXCJtZFwiOiBcInZhcigtLW10ZS1ib3JkZXItcmFkaXVzLW1kKVwiLFxuICAgICAgXCJsZ1wiOiBcInZhcigtLW10ZS1ib3JkZXItcmFkaXVzLWxnKVwiLFxuICAgICAgXCJ4bFwiOiBcInZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXhsKVwiLFxuICAgICAgXCJ4eGxcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14eGwpXCIsXG4gICAgICBcImZ1bGxcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1mdWxsKVwiXG4gICAgfSxcbiAgICBcIndpZHRoXCI6IHtcbiAgICAgIFwibm9uZVwiOiBcInZhcigtLW10ZS1ib3JkZXItd2lkdGgtbm9uZSlcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcInZhcigtLW10ZS1ib3JkZXItd2lkdGgtZGVmYXVsdClcIixcbiAgICAgIFwic21cIjogXCJ2YXIoLS1tdGUtYm9yZGVyLXdpZHRoLXNtKVwiLFxuICAgICAgXCJtZFwiOiBcInZhcigtLW10ZS1ib3JkZXItd2lkdGgtbWQpXCIsXG4gICAgICBcImxnXCI6IFwidmFyKC0tbXRlLWJvcmRlci13aWR0aC1sZylcIlxuICAgIH1cbiAgfSxcbiAgXCJlbGV2YXRpb25cIjoge1xuICAgIFwibGV2ZWxcIjoge1xuICAgICAgXCIwXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1sZXZlbC0wKVwiLFxuICAgICAgXCIxXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1sZXZlbC0xKVwiLFxuICAgICAgXCIyXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1sZXZlbC0yKVwiLFxuICAgICAgXCIzXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1sZXZlbC0zKVwiLFxuICAgICAgXCI0XCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1sZXZlbC00KVwiXG4gICAgfSxcbiAgICBcIm9wYWNpdHlcIjoge1xuICAgICAgXCIwXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1vcGFjaXR5LTApXCIsXG4gICAgICBcIjFcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktMSlcIixcbiAgICAgIFwiMlwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tb3BhY2l0eS0yKVwiLFxuICAgICAgXCIzXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1vcGFjaXR5LTMpXCIsXG4gICAgICBcIjRcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktNClcIlxuICAgIH0sXG4gICAgXCJ6MFwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tejApXCIsXG4gICAgXCJ6MVwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tejEpXCIsXG4gICAgXCJ6MlwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tejIpXCIsXG4gICAgXCJ6M1wiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tejMpXCIsXG4gICAgXCJ6NFwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tejQpXCJcbiAgfSxcbiAgXCJ6SW5kZXhcIjoge1xuICAgIFwiMFwiOiBcInZhcigtLW10ZS16LWluZGV4LTApXCIsXG4gICAgXCIxMFwiOiBcInZhcigtLW10ZS16LWluZGV4LTEwKVwiLFxuICAgIFwiMjBcIjogXCJ2YXIoLS1tdGUtei1pbmRleC0yMClcIixcbiAgICBcIjMwXCI6IFwidmFyKC0tbXRlLXotaW5kZXgtMzApXCIsXG4gICAgXCI0MFwiOiBcInZhcigtLW10ZS16LWluZGV4LTQwKVwiLFxuICAgIFwiNTBcIjogXCJ2YXIoLS1tdGUtei1pbmRleC01MClcIixcbiAgICBcIi0xXCI6IFwidmFyKC0tbXRlLXotaW5kZXgtMSlcIixcbiAgICBcImF1dG9cIjogXCJ2YXIoLS1tdGUtei1pbmRleC1hdXRvKVwiXG4gIH0sXG4gIFwiZ3JpZFwiOiB7XG4gICAgXCJicmVha3BvaW50XCI6IHtcbiAgICAgIFwieHNcIjogXCIwXCIsXG4gICAgICBcInNtXCI6IFwiNDgwcHhcIixcbiAgICAgIFwibWRcIjogXCI3NjhweFwiLFxuICAgICAgXCJsZ1wiOiBcIjEwMjRweFwiLFxuICAgICAgXCJ4bFwiOiBcIjEyODBweFwiLFxuICAgICAgXCJ4eGxcIjogXCIxNTM2cHhcIlxuICAgIH0sXG4gICAgXCJjb250YWluZXJNYXhXaWR0aFwiOiB7XG4gICAgICBcInNtXCI6IFwiNzY4cHhcIixcbiAgICAgIFwibWRcIjogXCIxMDI0cHhcIixcbiAgICAgIFwibGdcIjogXCIxMjgwcHhcIixcbiAgICAgIFwieGxcIjogXCIxNDQwcHhcIixcbiAgICAgIFwieHhsXCI6IFwiMTQ0MHB4XCJcbiAgICB9XG4gIH0sXG4gIFwic2l6ZVwiOiB7XG4gICAgXCJzY2FsZVwiOiB7XG4gICAgICBcInNtXCI6IFwidmFyKC0tbXRlLXNpemUtc2NhbGUtc20pXCIsXG4gICAgICBcIm1kXCI6IFwidmFyKC0tbXRlLXNpemUtc2NhbGUtbWQpXCIsXG4gICAgICBcImxnXCI6IFwidmFyKC0tbXRlLXNpemUtc2NhbGUtbGcpXCJcbiAgICB9LFxuICAgIFwiZGVuc2l0aWVzXCI6IFtcbiAgICAgIFwiY29tcGFjdFwiLFxuICAgICAgXCJjb21meVwiLFxuICAgICAgXCJyb29teVwiXG4gICAgXVxuICB9LFxuICBcInNwYWNlXCI6IHtcbiAgICBcIm5vbmVcIjogXCJ2YXIoLS1tdGUtc3BhY2Utbm9uZSlcIixcbiAgICBcInh4c1wiOiBcInZhcigtLW10ZS1zcGFjZS14eHMpXCIsXG4gICAgXCJ4c1wiOiBcInZhcigtLW10ZS1zcGFjZS14cylcIixcbiAgICBcInNtXCI6IFwidmFyKC0tbXRlLXNwYWNlLXNtKVwiLFxuICAgIFwibWRcIjogXCJ2YXIoLS1tdGUtc3BhY2UtbWQpXCIsXG4gICAgXCJsZ1wiOiBcInZhcigtLW10ZS1zcGFjZS1sZylcIixcbiAgICBcInhsXCI6IFwidmFyKC0tbXRlLXNwYWNlLXhsKVwiLFxuICAgIFwieHhsXCI6IFwidmFyKC0tbXRlLXNwYWNlLXh4bClcIixcbiAgICBcInh4eGxcIjogXCJ2YXIoLS1tdGUtc3BhY2UteHh4bClcIixcbiAgICBcImNvbXBhY3RcIjoge1xuICAgICAgXCJub25lXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbXBhY3Qtbm9uZSlcIixcbiAgICAgIFwieHhzXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHhzKVwiLFxuICAgICAgXCJ4c1wiOiBcInZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXhzKVwiLFxuICAgICAgXCJzbVwiOiBcInZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXNtKVwiLFxuICAgICAgXCJtZFwiOiBcInZhcigtLW10ZS1zcGFjZS1jb21wYWN0LW1kKVwiLFxuICAgICAgXCJsZ1wiOiBcInZhcigtLW10ZS1zcGFjZS1jb21wYWN0LWxnKVwiLFxuICAgICAgXCJ4bFwiOiBcInZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXhsKVwiLFxuICAgICAgXCJ4eGxcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eGwpXCIsXG4gICAgICBcInh4eGxcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eHhsKVwiXG4gICAgfSxcbiAgICBcImNvbWZ5XCI6IHtcbiAgICAgIFwibm9uZVwiOiBcInZhcigtLW10ZS1zcGFjZS1jb21meS1ub25lKVwiLFxuICAgICAgXCJ4eHNcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tZnkteHhzKVwiLFxuICAgICAgXCJ4c1wiOiBcInZhcigtLW10ZS1zcGFjZS1jb21meS14cylcIixcbiAgICAgIFwic21cIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tZnktc20pXCIsXG4gICAgICBcIm1kXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbWZ5LW1kKVwiLFxuICAgICAgXCJsZ1wiOiBcInZhcigtLW10ZS1zcGFjZS1jb21meS1sZylcIixcbiAgICAgIFwieGxcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tZnkteGwpXCIsXG4gICAgICBcInh4bFwiOiBcInZhcigtLW10ZS1zcGFjZS1jb21meS14eGwpXCIsXG4gICAgICBcInh4eGxcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tZnkteHh4bClcIlxuICAgIH0sXG4gICAgXCJyb29teVwiOiB7XG4gICAgICBcIm5vbmVcIjogXCJ2YXIoLS1tdGUtc3BhY2Utcm9vbXktbm9uZSlcIixcbiAgICAgIFwieHhzXCI6IFwidmFyKC0tbXRlLXNwYWNlLXJvb215LXh4cylcIixcbiAgICAgIFwieHNcIjogXCJ2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHMpXCIsXG4gICAgICBcInNtXCI6IFwidmFyKC0tbXRlLXNwYWNlLXJvb215LXNtKVwiLFxuICAgICAgXCJtZFwiOiBcInZhcigtLW10ZS1zcGFjZS1yb29teS1tZClcIixcbiAgICAgIFwibGdcIjogXCJ2YXIoLS1tdGUtc3BhY2Utcm9vbXktbGcpXCIsXG4gICAgICBcInhsXCI6IFwidmFyKC0tbXRlLXNwYWNlLXJvb215LXhsKVwiLFxuICAgICAgXCJ4eGxcIjogXCJ2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHhsKVwiLFxuICAgICAgXCJ4eHhsXCI6IFwidmFyKC0tbXRlLXNwYWNlLXJvb215LXh4eGwpXCJcbiAgICB9XG4gIH0sXG4gIFwiZm9udFwiOiB7XG4gICAgXCJiYXNlXCI6IFwidmFyKC0tbXRlLWZvbnQtYmFzZSlcIixcbiAgICBcImZhbWlseVwiOiB7XG4gICAgICBcInNhbnNcIjogXCJ2YXIoLS1tdGUtZm9udC1mYW1pbHktc2FucylcIixcbiAgICAgIFwic2VyaWZcIjogXCJ2YXIoLS1tdGUtZm9udC1mYW1pbHktc2VyaWYpXCIsXG4gICAgICBcIm1vbm9cIjogXCJ2YXIoLS1tdGUtZm9udC1mYW1pbHktbW9ubylcIlxuICAgIH0sXG4gICAgXCJ3ZWlnaHRcIjoge1xuICAgICAgXCJsaWdodFwiOiBcInZhcigtLW10ZS1mb250LXdlaWdodC1saWdodClcIixcbiAgICAgIFwicmVndWxhclwiOiBcInZhcigtLW10ZS1mb250LXdlaWdodC1yZWd1bGFyKVwiLFxuICAgICAgXCJtZWRpdW1cIjogXCJ2YXIoLS1tdGUtZm9udC13ZWlnaHQtbWVkaXVtKVwiLFxuICAgICAgXCJib2xkXCI6IFwidmFyKC0tbXRlLWZvbnQtd2VpZ2h0LWJvbGQpXCJcbiAgICB9LFxuICAgIFwicmF0aW9cIjoge1xuICAgICAgXCJzbVwiOiAwLjgsXG4gICAgICBcIm1kXCI6IDEsXG4gICAgICBcImxnXCI6IDEuMlxuICAgIH0sXG4gICAgXCJzZXRcIjoge1xuICAgICAgXCJoMVwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDEtZm9udC1zaXplKVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDEtbGluZS1oZWlnaHQpXCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1oMS1mb250LXdlaWdodClcIlxuICAgICAgfSxcbiAgICAgIFwiaDJcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWgyLWZvbnQtc2l6ZSlcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWgyLWxpbmUtaGVpZ2h0KVwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDItZm9udC13ZWlnaHQpXCJcbiAgICAgIH0sXG4gICAgICBcImgzXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcInZhcigtLW10ZS1mb250LXNldC1oMy1mb250LXNpemUpXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1oMy1saW5lLWhlaWdodClcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWgzLWZvbnQtd2VpZ2h0KVwiXG4gICAgICB9LFxuICAgICAgXCJoNFwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDQtZm9udC1zaXplKVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDQtbGluZS1oZWlnaHQpXCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1oNC1mb250LXdlaWdodClcIlxuICAgICAgfSxcbiAgICAgIFwiaDVcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWg1LWZvbnQtc2l6ZSlcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWg1LWxpbmUtaGVpZ2h0KVwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDUtZm9udC13ZWlnaHQpXCJcbiAgICAgIH0sXG4gICAgICBcImg2XCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcInZhcigtLW10ZS1mb250LXNldC1oNi1mb250LXNpemUpXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1oNi1saW5lLWhlaWdodClcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWg2LWZvbnQtd2VpZ2h0KVwiXG4gICAgICB9LFxuICAgICAgXCJzdWJ0aXRsZVwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtc3VidGl0bGUtZm9udC1zaXplKVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtc3VidGl0bGUtbGluZS1oZWlnaHQpXCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1zdWJ0aXRsZS1mb250LXdlaWdodClcIlxuICAgICAgfSxcbiAgICAgIFwiYm9keTFcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtc2l6ZSlcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWxpbmUtaGVpZ2h0KVwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtYm9keTEtZm9udC13ZWlnaHQpXCJcbiAgICAgIH0sXG4gICAgICBcImJvZHkyXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcInZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXNpemUpXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1saW5lLWhlaWdodClcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWZvbnQtd2VpZ2h0KVwiXG4gICAgICB9LFxuICAgICAgXCJjYXB0aW9uXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcInZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtc2l6ZSlcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tbGluZS1oZWlnaHQpXCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtd2VpZ2h0KVwiXG4gICAgICB9LFxuICAgICAgXCJidXR0b25cIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1mb250LXNpemUpXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1idXR0b24tbGluZS1oZWlnaHQpXCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1idXR0b24tZm9udC13ZWlnaHQpXCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwiYW5pbWF0aW9uXCI6IHtcbiAgICBcInRyYW5zaXRpb25EdXJhdGlvblwiOiB7XG4gICAgICBcImV4dHJhU2hvcnRcIjogXCI4MG1zXCIsXG4gICAgICBcInNob3J0ZXJcIjogXCIxMjBtc1wiLFxuICAgICAgXCJzaG9ydFwiOiBcIjIwMG1zXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCIzMDBtc1wiLFxuICAgICAgXCJsb25nXCI6IFwiNTAwbXNcIlxuICAgIH0sXG4gICAgXCJ0cmFuc2l0aW9uRHVyYXRpb25Kc1wiOiB7XG4gICAgICBcImV4dHJhU2hvcnRcIjogMC4wOCxcbiAgICAgIFwic2hvcnRlclwiOiAwLjEyLFxuICAgICAgXCJzaG9ydFwiOiAwLjIsXG4gICAgICBcImRlZmF1bHRcIjogMC4zLFxuICAgICAgXCJsb25nXCI6IDAuNVxuICAgIH0sXG4gICAgXCJ0aW1pbmdGdW5jdGlvblwiOiB7XG4gICAgICBcImRlY2VsZXJhdGVPdXRcIjogXCJjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKVwiLFxuICAgICAgXCJzdGFuZGFyZFwiOiBcImN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSlcIixcbiAgICAgIFwiYWNjZWxlcmF0ZUluXCI6IFwiY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSlcIixcbiAgICAgIFwic2hhcnBcIjogXCJjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpXCIsXG4gICAgICBcImluT3V0XCI6IFwiY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpXCJcbiAgICB9LFxuICAgIFwidGltaW5nRnVuY3Rpb25Kc1wiOiB7XG4gICAgICBcImRlY2VsZXJhdGVPdXRcIjogW1xuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICAwLjIsXG4gICAgICAgIDFcbiAgICAgIF0sXG4gICAgICBcInN0YW5kYXJkXCI6IFtcbiAgICAgICAgMC40LFxuICAgICAgICAwLFxuICAgICAgICAwLjIsXG4gICAgICAgIDFcbiAgICAgIF0sXG4gICAgICBcImFjY2VsZXJhdGVJblwiOiBbXG4gICAgICAgIDAuNCxcbiAgICAgICAgMCxcbiAgICAgICAgMSxcbiAgICAgICAgMVxuICAgICAgXSxcbiAgICAgIFwic2hhcnBcIjogW1xuICAgICAgICAwLjQsXG4gICAgICAgIDAsXG4gICAgICAgIDAuNixcbiAgICAgICAgMVxuICAgICAgXSxcbiAgICAgIFwiaW5PdXRcIjogW1xuICAgICAgICAwLjM1LFxuICAgICAgICAwLFxuICAgICAgICAwLjI1LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9XG59OyIsICJleHBvcnQgZGVmYXVsdCB7XG4gIFwiY29sb3JcIjoge1xuICAgIFwiYmxhY2tcIjogXCJ2YXIoLS1tdGUtYmxhY2spXCIsXG4gICAgXCJ3aGl0ZVwiOiBcInZhcigtLW10ZS13aGl0ZSlcIixcbiAgICBcImxpZ2h0XCI6IFwidmFyKC0tbXRlLWxpZ2h0KVwiLFxuICAgIFwiZGFya1wiOiBcInZhcigtLW10ZS1kYXJrKVwiLFxuICAgIFwiZGFya2VyXCI6IFwidmFyKC0tbXRlLWRhcmtlcilcIixcbiAgICBcImZvY3VzXCI6IFwidmFyKC0tbXRlLWZvY3VzKVwiLFxuICAgIFwiZm9jdXNMaWdodGVyXCI6IFwidmFyKC0tbXRlLWZvY3VzLWxpZ2h0ZXIpXCIsXG4gICAgXCJmb2N1c0NvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWZvY3VzLWNvbnRyYXN0KVwiLFxuICAgIFwiZ3JleTFcIjogXCJ2YXIoLS1tdGUtZ3JleS0xKVwiLFxuICAgIFwiZ3JleTJcIjogXCJ2YXIoLS1tdGUtZ3JleS0yKVwiLFxuICAgIFwiZ3JleTNcIjogXCJ2YXIoLS1tdGUtZ3JleS0zKVwiLFxuICAgIFwiZ3JleTRcIjogXCJ2YXIoLS1tdGUtZ3JleS00KVwiLFxuICAgIFwiZ3JleTVcIjogXCJ2YXIoLS1tdGUtZ3JleS01KVwiLFxuICAgIFwiZ3JleTZcIjogXCJ2YXIoLS1tdGUtZ3JleS02KVwiLFxuICAgIFwiZ3JleTdcIjogXCJ2YXIoLS1tdGUtZ3JleS03KVwiLFxuICAgIFwiZ3JleThcIjogXCJ2YXIoLS1tdGUtZ3JleS04KVwiLFxuICAgIFwiZ3JleTlcIjogXCJ2YXIoLS1tdGUtZ3JleS05KVwiLFxuICAgIFwiZ3JleTEwXCI6IFwidmFyKC0tbXRlLWdyZXktMTApXCIsXG4gICAgXCJzdXJmYWNlMVwiOiBcInZhcigtLW10ZS1zdXJmYWNlLTEpXCIsXG4gICAgXCJzdXJmYWNlMlwiOiBcInZhcigtLW10ZS1zdXJmYWNlLTIpXCIsXG4gICAgXCJzdXJmYWNlM1wiOiBcInZhcigtLW10ZS1zdXJmYWNlLTMpXCIsXG4gICAgXCJzdXJmYWNlNFwiOiBcInZhcigtLW10ZS1zdXJmYWNlLTQpXCIsXG4gICAgXCJzdXJmYWNlSW52ZXJzZVwiOiBcInZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpXCIsXG4gICAgXCJpbmsxXCI6IFwidmFyKC0tbXRlLWluay0xKVwiLFxuICAgIFwiaW5rMlwiOiBcInZhcigtLW10ZS1pbmstMilcIixcbiAgICBcImluazNcIjogXCJ2YXIoLS1tdGUtaW5rLTMpXCIsXG4gICAgXCJpbms0XCI6IFwidmFyKC0tbXRlLWluay00KVwiLFxuICAgIFwiaW5rNVwiOiBcInZhcigtLW10ZS1pbmstNSlcIixcbiAgICBcImlua0ludmVyc2VcIjogXCJ2YXIoLS1tdGUtaW5rLWludmVyc2UpXCIsXG4gICAgXCJib3JkZXIxXCI6IFwidmFyKC0tbXRlLWJvcmRlci0xKVwiLFxuICAgIFwiYm9yZGVyMlwiOiBcInZhcigtLW10ZS1ib3JkZXItMilcIixcbiAgICBcImJvcmRlcjNcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLTMpXCIsXG4gICAgXCJib3JkZXJJbnZlcnNlXCI6IFwidmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKVwiLFxuICAgIFwiZGlzYWJsZWQxXCI6IFwidmFyKC0tbXRlLWRpc2FibGVkLTEpXCIsXG4gICAgXCJkaXNhYmxlZDJcIjogXCJ2YXIoLS1tdGUtZGlzYWJsZWQtMilcIixcbiAgICBcImRpc2FibGVkM1wiOiBcInZhcigtLW10ZS1kaXNhYmxlZC0zKVwiLFxuICAgIFwiZGlzYWJsZWQ0XCI6IFwidmFyKC0tbXRlLWRpc2FibGVkLTQpXCIsXG4gICAgXCJkaXNhYmxlZEludmVyc2UxXCI6IFwidmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMSlcIixcbiAgICBcImRpc2FibGVkSW52ZXJzZTJcIjogXCJ2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0yKVwiLFxuICAgIFwiZGlzYWJsZWRJbnZlcnNlM1wiOiBcInZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMpXCIsXG4gICAgXCJyZWFkb25seTFcIjogXCJ2YXIoLS1tdGUtcmVhZG9ubHktMSlcIixcbiAgICBcInJlYWRvbmx5MlwiOiBcInZhcigtLW10ZS1yZWFkb25seS0yKVwiLFxuICAgIFwicmVhZG9ubHkzXCI6IFwidmFyKC0tbXRlLXJlYWRvbmx5LTMpXCIsXG4gICAgXCJyZWFkb25seTRcIjogXCJ2YXIoLS1tdGUtcmVhZG9ubHktNClcIixcbiAgICBcImVsZXZhdGlvbkJhc2VcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLWJhc2UpXCIsXG4gICAgXCJjb2RlMVwiOiBcInZhcigtLW10ZS1jb2RlLTEpXCIsXG4gICAgXCJjb2RlMlwiOiBcInZhcigtLW10ZS1jb2RlLTIpXCJcbiAgfSxcbiAgXCJwYWxldHRlXCI6IHtcbiAgICBcImdyZWVuXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtZ3JlZW4tbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1ncmVlbi1saWdodGVyLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtZ3JlZW4tbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtZ3JlZW4tbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWdyZWVuLWJhc2UpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtZ3JlZW4tYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtZ3JlZW4tZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1ncmVlbi1kYXJrLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWdyZWVuLWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1ncmVlbi1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwidGVhbFwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXRlYWwtbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS10ZWFsLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS10ZWFsLWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXRlYWwtbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXRlYWwtYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS10ZWFsLWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXRlYWwtZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS10ZWFsLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtdGVhbC1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtdGVhbC1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY3lhblwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWN5YW4tbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1jeWFuLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1jeWFuLWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWN5YW4tbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWN5YW4tYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1jeWFuLWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWN5YW4tZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1jeWFuLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtY3lhbi1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtY3lhbi1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiYmx1ZVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWJsdWUtbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1ibHVlLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1ibHVlLWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWJsdWUtbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWJsdWUtYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1ibHVlLWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWJsdWUtZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1ibHVlLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtYmx1ZS1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtYmx1ZS1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwicnhCbHVlXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcngtYmx1ZS1saWdodGVyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXJ4LWJsdWUtbGlnaHRlci1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXJ4LWJsdWUtbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcngtYmx1ZS1saWdodC1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcngtYmx1ZS1iYXNlKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXJ4LWJsdWUtYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcngtYmx1ZS1kYXJrKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXJ4LWJsdWUtZGFyay1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1yeC1ibHVlLWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1yeC1ibHVlLWRhcmtlci1jb250cmFzdClcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJwdXJwbGVcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1wdXJwbGUtbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1wdXJwbGUtbGlnaHRlci1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXB1cnBsZS1saWdodClcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1wdXJwbGUtbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXB1cnBsZS1iYXNlKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXB1cnBsZS1iYXNlLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1wdXJwbGUtZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1wdXJwbGUtZGFyay1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1wdXJwbGUtZGFya2VyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXB1cnBsZS1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwibWFnZW50YVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLW1hZ2VudGEtbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1tYWdlbnRhLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1tYWdlbnRhLWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLW1hZ2VudGEtbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLW1hZ2VudGEtYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1tYWdlbnRhLWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLW1hZ2VudGEtZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1tYWdlbnRhLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtbWFnZW50YS1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtbWFnZW50YS1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwicmVkXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcmVkLWxpZ2h0ZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcmVkLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1yZWQtbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcmVkLWxpZ2h0LWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1yZWQtYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1yZWQtYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcmVkLWRhcmspXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcmVkLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcmVkLWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1yZWQtZGFya2VyLWNvbnRyYXN0KVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImhlYlJlZFwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWhlYi1yZWQtbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1oZWItcmVkLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1oZWItcmVkLWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWhlYi1yZWQtbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWhlYi1yZWQtYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1oZWItcmVkLWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWhlYi1yZWQtZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1oZWItcmVkLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtaGViLXJlZC1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtaGViLXJlZC1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwib3JhbmdlXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtb3JhbmdlLWxpZ2h0ZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtb3JhbmdlLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1vcmFuZ2UtbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtb3JhbmdlLWxpZ2h0LWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1vcmFuZ2UtYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1vcmFuZ2UtYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtb3JhbmdlLWRhcmspXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtb3JhbmdlLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtb3JhbmdlLWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1vcmFuZ2UtZGFya2VyLWNvbnRyYXN0KVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImFtYmVyXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtYW1iZXItbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1hbWJlci1saWdodGVyLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtYW1iZXItbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtYW1iZXItbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWFtYmVyLWJhc2UpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtYW1iZXItYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtYW1iZXItZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1hbWJlci1kYXJrLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWFtYmVyLWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1hbWJlci1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwieWVsbG93XCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUteWVsbG93LWxpZ2h0ZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUteWVsbG93LWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS15ZWxsb3ctbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUteWVsbG93LWxpZ2h0LWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS15ZWxsb3ctYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS15ZWxsb3ctYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUteWVsbG93LWRhcmspXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUteWVsbG93LWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUteWVsbG93LWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS15ZWxsb3ctZGFya2VyLWNvbnRyYXN0KVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImNvdXBvblllbGxvd1wiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWNvdXBvbi15ZWxsb3ctbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1jb3Vwb24teWVsbG93LWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1jb3Vwb24teWVsbG93LWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWNvdXBvbi15ZWxsb3ctbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWNvdXBvbi15ZWxsb3ctYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1jb3Vwb24teWVsbG93LWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWNvdXBvbi15ZWxsb3ctZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1jb3Vwb24teWVsbG93LWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtY291cG9uLXllbGxvdy1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtY291cG9uLXllbGxvdy1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwicGdcIjoge1xuICAgIFwiY29yZVwiOiB7XG4gICAgICBcInByaW1hcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2Vjb25kYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGVydGlhcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRhbmdlclwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic3RhdHVzXCI6IHtcbiAgICAgIFwicHJpbWFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlY29uZGFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGVydGlhcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic3VjY2Vzc1wiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndhcm5pbmdcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkYW5nZXJcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwidml6XCI6IHtcbiAgICAgIFwib25lXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotb25lLWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotb25lLWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1vbmUtbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotb25lLWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1vbmUtYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1vbmUtYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotb25lLWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotb25lLWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotb25lLWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1vbmUtZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0d29cIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10d28tbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10d28tbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXR3by1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10d28tbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXR3by1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LXR3by1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10d28tZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10d28tZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10d28tZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LXR3by1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRocmVlXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotdGhyZWUtbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10aHJlZS1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotdGhyZWUtbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotdGhyZWUtbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXRocmVlLWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotdGhyZWUtYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotdGhyZWUtZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10aHJlZS1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXRocmVlLWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10aHJlZS1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImZvdXJcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1mb3VyLWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotZm91ci1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotZm91ci1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1mb3VyLWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1mb3VyLWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotZm91ci1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1mb3VyLWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotZm91ci1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZvdXItZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZvdXItZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJmaXZlXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotZml2ZS1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZpdmUtbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZpdmUtbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotZml2ZS1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotZml2ZS1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZpdmUtYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotZml2ZS1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZpdmUtZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1maXZlLWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1maXZlLWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2l4XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotc2l4LWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotc2l4LWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1zaXgtbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotc2l4LWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1zaXgtYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1zaXgtYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotc2l4LWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotc2l4LWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotc2l4LWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1zaXgtZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcInN0YXRlVG9rZW5cIjoge1xuICAgIFwic3VyZmFjZTFcIjoge1xuICAgICAgXCJkZWZhdWx0XCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0xLWRlZmF1bHQtcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtMS1kZWZhdWx0LWEpKVwiLFxuICAgICAgXCJob3ZlclwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMS1ob3Zlci1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLWEpKVwiLFxuICAgICAgXCJhY3RpdmVcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLWEpKVwiXG4gICAgfSxcbiAgICBcInN1cmZhY2UyXCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1kZWZhdWx0LXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1hKSlcIixcbiAgICAgIFwiaG92ZXJcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hKSlcIixcbiAgICAgIFwiYWN0aXZlXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hKSlcIlxuICAgIH0sXG4gICAgXCJzdXJmYWNlM1wiOiB7XG4gICAgICBcImRlZmF1bHRcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTMtZGVmYXVsdC1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS0zLWRlZmF1bHQtYSkpXCIsXG4gICAgICBcImhvdmVyXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLTMtaG92ZXItYSkpXCIsXG4gICAgICBcImFjdGl2ZVwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMy1hY3RpdmUtcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtMy1hY3RpdmUtYSkpXCJcbiAgICB9LFxuICAgIFwic3VyZmFjZTRcIjoge1xuICAgICAgXCJkZWZhdWx0XCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS00LWRlZmF1bHQtcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtNC1kZWZhdWx0LWEpKVwiLFxuICAgICAgXCJob3ZlclwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtNC1ob3Zlci1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS00LWhvdmVyLWEpKVwiLFxuICAgICAgXCJhY3RpdmVcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTQtYWN0aXZlLXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLTQtYWN0aXZlLWEpKVwiXG4gICAgfSxcbiAgICBcInN1cmZhY2VJbnZlcnNlXCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1hKSlcIixcbiAgICAgIFwiaG92ZXJcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKSlcIixcbiAgICAgIFwiYWN0aXZlXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKSlcIlxuICAgIH0sXG4gICAgXCJpbmtJbnZlcnNlXCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiBcInJnYmEodmFyKC0tbXRlLWl0LWluay1pbnZlcnNlLWRlZmF1bHQtcmdiKSwgdmFyKC0tbXRlLWl0LWluay1pbnZlcnNlLWRlZmF1bHQtYSkpXCIsXG4gICAgICBcImhvdmVyXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtaW5rLWludmVyc2UtaG92ZXItcmdiKSwgdmFyKC0tbXRlLWl0LWluay1pbnZlcnNlLWhvdmVyLWEpKVwiLFxuICAgICAgXCJhY3RpdmVcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1pbmstaW52ZXJzZS1hY3RpdmUtcmdiKSwgdmFyKC0tbXRlLWl0LWluay1pbnZlcnNlLWFjdGl2ZS1hKSlcIlxuICAgIH0sXG4gICAgXCJsaW5rXCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiBcInJnYmEodmFyKC0tbXRlLWl0LWxpbmstZGVmYXVsdC1yZ2IpLCB2YXIoLS1tdGUtaXQtbGluay1kZWZhdWx0LWEpKVwiLFxuICAgICAgXCJ2aXNpdGVkXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtbGluay12aXNpdGVkLXJnYiksIHZhcigtLW10ZS1pdC1saW5rLXZpc2l0ZWQtYSkpXCJcbiAgICB9XG4gIH1cbn07IiwgIi8qKlxuICogRG8gbm90IGVkaXQgZGlyZWN0bHlcbiAqIEdlbmVyYXRlZCBvbiBUdWUsIDAyIEFwciAyMDI0IDE4OjQ2OjUxIEdNVFxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIm9wYWNpdHlcIjoge1xuICAgIFwieHhsXCI6IFwiLS1tdGUtb3BhY2l0eS14eGxcIixcbiAgICBcInhsXCI6IFwiLS1tdGUtb3BhY2l0eS14bFwiLFxuICAgIFwibGdcIjogXCItLW10ZS1vcGFjaXR5LWxnXCIsXG4gICAgXCJtZFwiOiBcIi0tbXRlLW9wYWNpdHktbWRcIixcbiAgICBcInNtXCI6IFwiLS1tdGUtb3BhY2l0eS1zbVwiLFxuICAgIFwieHNcIjogXCItLW10ZS1vcGFjaXR5LXhzXCIsXG4gICAgXCJ4eHNcIjogXCItLW10ZS1vcGFjaXR5LXh4c1wiLFxuICAgIFwieHh4c1wiOiBcIi0tbXRlLW9wYWNpdHkteHh4c1wiXG4gIH0sXG4gIFwiYm9yZGVyXCI6IHtcbiAgICBcInJhZGl1c1wiOiB7XG4gICAgICBcIm5vbmVcIjogXCItLW10ZS1ib3JkZXItcmFkaXVzLW5vbmVcIixcbiAgICAgIFwieHNcIjogXCItLW10ZS1ib3JkZXItcmFkaXVzLXhzXCIsXG4gICAgICBcInNtXCI6IFwiLS1tdGUtYm9yZGVyLXJhZGl1cy1zbVwiLFxuICAgICAgXCJtZFwiOiBcIi0tbXRlLWJvcmRlci1yYWRpdXMtbWRcIixcbiAgICAgIFwibGdcIjogXCItLW10ZS1ib3JkZXItcmFkaXVzLWxnXCIsXG4gICAgICBcInhsXCI6IFwiLS1tdGUtYm9yZGVyLXJhZGl1cy14bFwiLFxuICAgICAgXCJ4eGxcIjogXCItLW10ZS1ib3JkZXItcmFkaXVzLXh4bFwiLFxuICAgICAgXCJmdWxsXCI6IFwiLS1tdGUtYm9yZGVyLXJhZGl1cy1mdWxsXCJcbiAgICB9LFxuICAgIFwid2lkdGhcIjoge1xuICAgICAgXCJub25lXCI6IFwiLS1tdGUtYm9yZGVyLXdpZHRoLW5vbmVcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIi0tbXRlLWJvcmRlci13aWR0aC1kZWZhdWx0XCIsXG4gICAgICBcInNtXCI6IFwiLS1tdGUtYm9yZGVyLXdpZHRoLXNtXCIsXG4gICAgICBcIm1kXCI6IFwiLS1tdGUtYm9yZGVyLXdpZHRoLW1kXCIsXG4gICAgICBcImxnXCI6IFwiLS1tdGUtYm9yZGVyLXdpZHRoLWxnXCJcbiAgICB9XG4gIH0sXG4gIFwiZWxldmF0aW9uXCI6IHtcbiAgICBcImxldmVsXCI6IHtcbiAgICAgIFwiMFwiOiBcIi0tbXRlLWVsZXZhdGlvbi1sZXZlbC0wXCIsXG4gICAgICBcIjFcIjogXCItLW10ZS1lbGV2YXRpb24tbGV2ZWwtMVwiLFxuICAgICAgXCIyXCI6IFwiLS1tdGUtZWxldmF0aW9uLWxldmVsLTJcIixcbiAgICAgIFwiM1wiOiBcIi0tbXRlLWVsZXZhdGlvbi1sZXZlbC0zXCIsXG4gICAgICBcIjRcIjogXCItLW10ZS1lbGV2YXRpb24tbGV2ZWwtNFwiXG4gICAgfSxcbiAgICBcIm9wYWNpdHlcIjoge1xuICAgICAgXCIwXCI6IFwiLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktMFwiLFxuICAgICAgXCIxXCI6IFwiLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktMVwiLFxuICAgICAgXCIyXCI6IFwiLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktMlwiLFxuICAgICAgXCIzXCI6IFwiLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktM1wiLFxuICAgICAgXCI0XCI6IFwiLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktNFwiXG4gICAgfSxcbiAgICBcInowXCI6IFwiLS1tdGUtZWxldmF0aW9uLXowXCIsXG4gICAgXCJ6MVwiOiBcIi0tbXRlLWVsZXZhdGlvbi16MVwiLFxuICAgIFwiejJcIjogXCItLW10ZS1lbGV2YXRpb24tejJcIixcbiAgICBcInozXCI6IFwiLS1tdGUtZWxldmF0aW9uLXozXCIsXG4gICAgXCJ6NFwiOiBcIi0tbXRlLWVsZXZhdGlvbi16NFwiXG4gIH0sXG4gIFwiekluZGV4XCI6IHtcbiAgICBcIjBcIjogXCItLW10ZS16LWluZGV4LTBcIixcbiAgICBcIjEwXCI6IFwiLS1tdGUtei1pbmRleC0xMFwiLFxuICAgIFwiMjBcIjogXCItLW10ZS16LWluZGV4LTIwXCIsXG4gICAgXCIzMFwiOiBcIi0tbXRlLXotaW5kZXgtMzBcIixcbiAgICBcIjQwXCI6IFwiLS1tdGUtei1pbmRleC00MFwiLFxuICAgIFwiNTBcIjogXCItLW10ZS16LWluZGV4LTUwXCIsXG4gICAgXCItMVwiOiBcIi0tbXRlLXotaW5kZXgtMVwiLFxuICAgIFwiYXV0b1wiOiBcIi0tbXRlLXotaW5kZXgtYXV0b1wiXG4gIH0sXG4gIFwiZ3JpZFwiOiB7XG4gICAgXCJicmVha3BvaW50XCI6IHtcbiAgICAgIFwieHNcIjogXCIwXCIsXG4gICAgICBcInNtXCI6IFwiNDgwcHhcIixcbiAgICAgIFwibWRcIjogXCI3NjhweFwiLFxuICAgICAgXCJsZ1wiOiBcIjEwMjRweFwiLFxuICAgICAgXCJ4bFwiOiBcIjEyODBweFwiLFxuICAgICAgXCJ4eGxcIjogXCIxNTM2cHhcIlxuICAgIH0sXG4gICAgXCJjb250YWluZXJNYXhXaWR0aFwiOiB7XG4gICAgICBcInNtXCI6IFwiNzY4cHhcIixcbiAgICAgIFwibWRcIjogXCIxMDI0cHhcIixcbiAgICAgIFwibGdcIjogXCIxMjgwcHhcIixcbiAgICAgIFwieGxcIjogXCIxNDQwcHhcIixcbiAgICAgIFwieHhsXCI6IFwiMTQ0MHB4XCJcbiAgICB9XG4gIH0sXG4gIFwic2l6ZVwiOiB7XG4gICAgXCJzY2FsZVwiOiB7XG4gICAgICBcInNtXCI6IFwiLS1tdGUtc2l6ZS1zY2FsZS1zbVwiLFxuICAgICAgXCJtZFwiOiBcIi0tbXRlLXNpemUtc2NhbGUtbWRcIixcbiAgICAgIFwibGdcIjogXCItLW10ZS1zaXplLXNjYWxlLWxnXCJcbiAgICB9LFxuICAgIFwiZGVuc2l0aWVzXCI6IFtcbiAgICAgIFwiY29tcGFjdFwiLFxuICAgICAgXCJjb21meVwiLFxuICAgICAgXCJyb29teVwiXG4gICAgXVxuICB9LFxuICBcInNwYWNlXCI6IHtcbiAgICBcIm5vbmVcIjogXCItLW10ZS1zcGFjZS1ub25lXCIsXG4gICAgXCJ4eHNcIjogXCItLW10ZS1zcGFjZS14eHNcIixcbiAgICBcInhzXCI6IFwiLS1tdGUtc3BhY2UteHNcIixcbiAgICBcInNtXCI6IFwiLS1tdGUtc3BhY2Utc21cIixcbiAgICBcIm1kXCI6IFwiLS1tdGUtc3BhY2UtbWRcIixcbiAgICBcImxnXCI6IFwiLS1tdGUtc3BhY2UtbGdcIixcbiAgICBcInhsXCI6IFwiLS1tdGUtc3BhY2UteGxcIixcbiAgICBcInh4bFwiOiBcIi0tbXRlLXNwYWNlLXh4bFwiLFxuICAgIFwieHh4bFwiOiBcIi0tbXRlLXNwYWNlLXh4eGxcIixcbiAgICBcImNvbXBhY3RcIjoge1xuICAgICAgXCJub25lXCI6IFwiLS1tdGUtc3BhY2UtY29tcGFjdC1ub25lXCIsXG4gICAgICBcInh4c1wiOiBcIi0tbXRlLXNwYWNlLWNvbXBhY3QteHhzXCIsXG4gICAgICBcInhzXCI6IFwiLS1tdGUtc3BhY2UtY29tcGFjdC14c1wiLFxuICAgICAgXCJzbVwiOiBcIi0tbXRlLXNwYWNlLWNvbXBhY3Qtc21cIixcbiAgICAgIFwibWRcIjogXCItLW10ZS1zcGFjZS1jb21wYWN0LW1kXCIsXG4gICAgICBcImxnXCI6IFwiLS1tdGUtc3BhY2UtY29tcGFjdC1sZ1wiLFxuICAgICAgXCJ4bFwiOiBcIi0tbXRlLXNwYWNlLWNvbXBhY3QteGxcIixcbiAgICAgIFwieHhsXCI6IFwiLS1tdGUtc3BhY2UtY29tcGFjdC14eGxcIixcbiAgICAgIFwieHh4bFwiOiBcIi0tbXRlLXNwYWNlLWNvbXBhY3QteHh4bFwiXG4gICAgfSxcbiAgICBcImNvbWZ5XCI6IHtcbiAgICAgIFwibm9uZVwiOiBcIi0tbXRlLXNwYWNlLWNvbWZ5LW5vbmVcIixcbiAgICAgIFwieHhzXCI6IFwiLS1tdGUtc3BhY2UtY29tZnkteHhzXCIsXG4gICAgICBcInhzXCI6IFwiLS1tdGUtc3BhY2UtY29tZnkteHNcIixcbiAgICAgIFwic21cIjogXCItLW10ZS1zcGFjZS1jb21meS1zbVwiLFxuICAgICAgXCJtZFwiOiBcIi0tbXRlLXNwYWNlLWNvbWZ5LW1kXCIsXG4gICAgICBcImxnXCI6IFwiLS1tdGUtc3BhY2UtY29tZnktbGdcIixcbiAgICAgIFwieGxcIjogXCItLW10ZS1zcGFjZS1jb21meS14bFwiLFxuICAgICAgXCJ4eGxcIjogXCItLW10ZS1zcGFjZS1jb21meS14eGxcIixcbiAgICAgIFwieHh4bFwiOiBcIi0tbXRlLXNwYWNlLWNvbWZ5LXh4eGxcIlxuICAgIH0sXG4gICAgXCJyb29teVwiOiB7XG4gICAgICBcIm5vbmVcIjogXCItLW10ZS1zcGFjZS1yb29teS1ub25lXCIsXG4gICAgICBcInh4c1wiOiBcIi0tbXRlLXNwYWNlLXJvb215LXh4c1wiLFxuICAgICAgXCJ4c1wiOiBcIi0tbXRlLXNwYWNlLXJvb215LXhzXCIsXG4gICAgICBcInNtXCI6IFwiLS1tdGUtc3BhY2Utcm9vbXktc21cIixcbiAgICAgIFwibWRcIjogXCItLW10ZS1zcGFjZS1yb29teS1tZFwiLFxuICAgICAgXCJsZ1wiOiBcIi0tbXRlLXNwYWNlLXJvb215LWxnXCIsXG4gICAgICBcInhsXCI6IFwiLS1tdGUtc3BhY2Utcm9vbXkteGxcIixcbiAgICAgIFwieHhsXCI6IFwiLS1tdGUtc3BhY2Utcm9vbXkteHhsXCIsXG4gICAgICBcInh4eGxcIjogXCItLW10ZS1zcGFjZS1yb29teS14eHhsXCJcbiAgICB9XG4gIH0sXG4gIFwiZm9udFwiOiB7XG4gICAgXCJiYXNlXCI6IFwiLS1tdGUtZm9udC1iYXNlXCIsXG4gICAgXCJmYW1pbHlcIjoge1xuICAgICAgXCJzYW5zXCI6IFwiLS1tdGUtZm9udC1mYW1pbHktc2Fuc1wiLFxuICAgICAgXCJzZXJpZlwiOiBcIi0tbXRlLWZvbnQtZmFtaWx5LXNlcmlmXCIsXG4gICAgICBcIm1vbm9cIjogXCItLW10ZS1mb250LWZhbWlseS1tb25vXCJcbiAgICB9LFxuICAgIFwid2VpZ2h0XCI6IHtcbiAgICAgIFwibGlnaHRcIjogXCItLW10ZS1mb250LXdlaWdodC1saWdodFwiLFxuICAgICAgXCJyZWd1bGFyXCI6IFwiLS1tdGUtZm9udC13ZWlnaHQtcmVndWxhclwiLFxuICAgICAgXCJtZWRpdW1cIjogXCItLW10ZS1mb250LXdlaWdodC1tZWRpdW1cIixcbiAgICAgIFwiYm9sZFwiOiBcIi0tbXRlLWZvbnQtd2VpZ2h0LWJvbGRcIlxuICAgIH0sXG4gICAgXCJyYXRpb1wiOiB7XG4gICAgICBcInNtXCI6IDAuOCxcbiAgICAgIFwibWRcIjogMSxcbiAgICAgIFwibGdcIjogMS4yXG4gICAgfSxcbiAgICBcInNldFwiOiB7XG4gICAgICBcImgxXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcIi0tbXRlLWZvbnQtc2V0LWgxLWZvbnQtc2l6ZVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1oMS1saW5lLWhlaWdodFwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1oMS1mb250LXdlaWdodFwiXG4gICAgICB9LFxuICAgICAgXCJoMlwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCItLW10ZS1mb250LXNldC1oMi1mb250LXNpemVcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtaDItbGluZS1oZWlnaHRcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtaDItZm9udC13ZWlnaHRcIlxuICAgICAgfSxcbiAgICAgIFwiaDNcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwiLS1tdGUtZm9udC1zZXQtaDMtZm9udC1zaXplXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWgzLWxpbmUtaGVpZ2h0XCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWgzLWZvbnQtd2VpZ2h0XCJcbiAgICAgIH0sXG4gICAgICBcImg0XCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcIi0tbXRlLWZvbnQtc2V0LWg0LWZvbnQtc2l6ZVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1oNC1saW5lLWhlaWdodFwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1oNC1mb250LXdlaWdodFwiXG4gICAgICB9LFxuICAgICAgXCJoNVwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCItLW10ZS1mb250LXNldC1oNS1mb250LXNpemVcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtaDUtbGluZS1oZWlnaHRcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtaDUtZm9udC13ZWlnaHRcIlxuICAgICAgfSxcbiAgICAgIFwiaDZcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwiLS1tdGUtZm9udC1zZXQtaDYtZm9udC1zaXplXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWg2LWxpbmUtaGVpZ2h0XCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWg2LWZvbnQtd2VpZ2h0XCJcbiAgICAgIH0sXG4gICAgICBcInN1YnRpdGxlXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcIi0tbXRlLWZvbnQtc2V0LXN1YnRpdGxlLWZvbnQtc2l6ZVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1zdWJ0aXRsZS1saW5lLWhlaWdodFwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1zdWJ0aXRsZS1mb250LXdlaWdodFwiXG4gICAgICB9LFxuICAgICAgXCJib2R5MVwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCItLW10ZS1mb250LXNldC1ib2R5MS1mb250LXNpemVcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtYm9keTEtbGluZS1oZWlnaHRcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtYm9keTEtZm9udC13ZWlnaHRcIlxuICAgICAgfSxcbiAgICAgIFwiYm9keTJcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwiLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC1zaXplXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWJvZHkyLWxpbmUtaGVpZ2h0XCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWJvZHkyLWZvbnQtd2VpZ2h0XCJcbiAgICAgIH0sXG4gICAgICBcImNhcHRpb25cIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwiLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXNpemVcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1saW5lLWhlaWdodFwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtd2VpZ2h0XCJcbiAgICAgIH0sXG4gICAgICBcImJ1dHRvblwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCItLW10ZS1mb250LXNldC1idXR0b24tZm9udC1zaXplXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1saW5lLWhlaWdodFwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1idXR0b24tZm9udC13ZWlnaHRcIlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJhbmltYXRpb25cIjoge1xuICAgIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IHtcbiAgICAgIFwiZXh0cmFTaG9ydFwiOiBcIjgwbXNcIixcbiAgICAgIFwic2hvcnRlclwiOiBcIjEyMG1zXCIsXG4gICAgICBcInNob3J0XCI6IFwiMjAwbXNcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIjMwMG1zXCIsXG4gICAgICBcImxvbmdcIjogXCI1MDBtc1wiXG4gICAgfSxcbiAgICBcInRyYW5zaXRpb25EdXJhdGlvbkpzXCI6IHtcbiAgICAgIFwiZXh0cmFTaG9ydFwiOiAwLjA4LFxuICAgICAgXCJzaG9ydGVyXCI6IDAuMTIsXG4gICAgICBcInNob3J0XCI6IDAuMixcbiAgICAgIFwiZGVmYXVsdFwiOiAwLjMsXG4gICAgICBcImxvbmdcIjogMC41XG4gICAgfSxcbiAgICBcInRpbWluZ0Z1bmN0aW9uXCI6IHtcbiAgICAgIFwiZGVjZWxlcmF0ZU91dFwiOiBcImN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpXCIsXG4gICAgICBcInN0YW5kYXJkXCI6IFwiY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKVwiLFxuICAgICAgXCJhY2NlbGVyYXRlSW5cIjogXCJjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKVwiLFxuICAgICAgXCJzaGFycFwiOiBcImN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSlcIixcbiAgICAgIFwiaW5PdXRcIjogXCJjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSlcIlxuICAgIH0sXG4gICAgXCJ0aW1pbmdGdW5jdGlvbkpzXCI6IHtcbiAgICAgIFwiZGVjZWxlcmF0ZU91dFwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDAuMixcbiAgICAgICAgMVxuICAgICAgXSxcbiAgICAgIFwic3RhbmRhcmRcIjogW1xuICAgICAgICAwLjQsXG4gICAgICAgIDAsXG4gICAgICAgIDAuMixcbiAgICAgICAgMVxuICAgICAgXSxcbiAgICAgIFwiYWNjZWxlcmF0ZUluXCI6IFtcbiAgICAgICAgMC40LFxuICAgICAgICAwLFxuICAgICAgICAxLFxuICAgICAgICAxXG4gICAgICBdLFxuICAgICAgXCJzaGFycFwiOiBbXG4gICAgICAgIDAuNCxcbiAgICAgICAgMCxcbiAgICAgICAgMC42LFxuICAgICAgICAxXG4gICAgICBdLFxuICAgICAgXCJpbk91dFwiOiBbXG4gICAgICAgIDAuMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDAuMjUsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH1cbn07IiwgImV4cG9ydCBkZWZhdWx0IHtcbiAgXCJjb2xvclwiOiB7XG4gICAgXCJibGFja1wiOiBcIi0tbXRlLWJsYWNrXCIsXG4gICAgXCJ3aGl0ZVwiOiBcIi0tbXRlLXdoaXRlXCIsXG4gICAgXCJsaWdodFwiOiBcIi0tbXRlLWxpZ2h0XCIsXG4gICAgXCJkYXJrXCI6IFwiLS1tdGUtZGFya1wiLFxuICAgIFwiZGFya2VyXCI6IFwiLS1tdGUtZGFya2VyXCIsXG4gICAgXCJmb2N1c1wiOiBcIi0tbXRlLWZvY3VzXCIsXG4gICAgXCJmb2N1c0xpZ2h0ZXJcIjogXCItLW10ZS1mb2N1cy1saWdodGVyXCIsXG4gICAgXCJmb2N1c0NvbnRyYXN0XCI6IFwiLS1tdGUtZm9jdXMtY29udHJhc3RcIixcbiAgICBcImdyZXkxXCI6IFwiLS1tdGUtZ3JleS0xXCIsXG4gICAgXCJncmV5MlwiOiBcIi0tbXRlLWdyZXktMlwiLFxuICAgIFwiZ3JleTNcIjogXCItLW10ZS1ncmV5LTNcIixcbiAgICBcImdyZXk0XCI6IFwiLS1tdGUtZ3JleS00XCIsXG4gICAgXCJncmV5NVwiOiBcIi0tbXRlLWdyZXktNVwiLFxuICAgIFwiZ3JleTZcIjogXCItLW10ZS1ncmV5LTZcIixcbiAgICBcImdyZXk3XCI6IFwiLS1tdGUtZ3JleS03XCIsXG4gICAgXCJncmV5OFwiOiBcIi0tbXRlLWdyZXktOFwiLFxuICAgIFwiZ3JleTlcIjogXCItLW10ZS1ncmV5LTlcIixcbiAgICBcImdyZXkxMFwiOiBcIi0tbXRlLWdyZXktMTBcIixcbiAgICBcInN1cmZhY2UxXCI6IFwiLS1tdGUtc3VyZmFjZS0xXCIsXG4gICAgXCJzdXJmYWNlMlwiOiBcIi0tbXRlLXN1cmZhY2UtMlwiLFxuICAgIFwic3VyZmFjZTNcIjogXCItLW10ZS1zdXJmYWNlLTNcIixcbiAgICBcInN1cmZhY2U0XCI6IFwiLS1tdGUtc3VyZmFjZS00XCIsXG4gICAgXCJzdXJmYWNlSW52ZXJzZVwiOiBcIi0tbXRlLXN1cmZhY2UtaW52ZXJzZVwiLFxuICAgIFwiaW5rMVwiOiBcIi0tbXRlLWluay0xXCIsXG4gICAgXCJpbmsyXCI6IFwiLS1tdGUtaW5rLTJcIixcbiAgICBcImluazNcIjogXCItLW10ZS1pbmstM1wiLFxuICAgIFwiaW5rNFwiOiBcIi0tbXRlLWluay00XCIsXG4gICAgXCJpbms1XCI6IFwiLS1tdGUtaW5rLTVcIixcbiAgICBcImlua0ludmVyc2VcIjogXCItLW10ZS1pbmstaW52ZXJzZVwiLFxuICAgIFwiYm9yZGVyMVwiOiBcIi0tbXRlLWJvcmRlci0xXCIsXG4gICAgXCJib3JkZXIyXCI6IFwiLS1tdGUtYm9yZGVyLTJcIixcbiAgICBcImJvcmRlcjNcIjogXCItLW10ZS1ib3JkZXItM1wiLFxuICAgIFwiYm9yZGVySW52ZXJzZVwiOiBcIi0tbXRlLWJvcmRlci1pbnZlcnNlXCIsXG4gICAgXCJkaXNhYmxlZDFcIjogXCItLW10ZS1kaXNhYmxlZC0xXCIsXG4gICAgXCJkaXNhYmxlZDJcIjogXCItLW10ZS1kaXNhYmxlZC0yXCIsXG4gICAgXCJkaXNhYmxlZDNcIjogXCItLW10ZS1kaXNhYmxlZC0zXCIsXG4gICAgXCJkaXNhYmxlZDRcIjogXCItLW10ZS1kaXNhYmxlZC00XCIsXG4gICAgXCJkaXNhYmxlZEludmVyc2UxXCI6IFwiLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0xXCIsXG4gICAgXCJkaXNhYmxlZEludmVyc2UyXCI6IFwiLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0yXCIsXG4gICAgXCJkaXNhYmxlZEludmVyc2UzXCI6IFwiLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zXCIsXG4gICAgXCJyZWFkb25seTFcIjogXCItLW10ZS1yZWFkb25seS0xXCIsXG4gICAgXCJyZWFkb25seTJcIjogXCItLW10ZS1yZWFkb25seS0yXCIsXG4gICAgXCJyZWFkb25seTNcIjogXCItLW10ZS1yZWFkb25seS0zXCIsXG4gICAgXCJyZWFkb25seTRcIjogXCItLW10ZS1yZWFkb25seS00XCIsXG4gICAgXCJlbGV2YXRpb25CYXNlXCI6IFwiLS1tdGUtZWxldmF0aW9uLWJhc2VcIixcbiAgICBcImNvZGUxXCI6IFwiLS1tdGUtY29kZS0xXCIsXG4gICAgXCJjb2RlMlwiOiBcIi0tbXRlLWNvZGUtMlwiXG4gIH0sXG4gIFwicGFsZXR0ZVwiOiB7XG4gICAgXCJncmVlblwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtZ3JlZW4tbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtZ3JlZW4tbGlnaHRlci1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1ncmVlbi1saWdodFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtZ3JlZW4tbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1ncmVlbi1iYXNlXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1ncmVlbi1iYXNlLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtZ3JlZW4tZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtZ3JlZW4tZGFyay1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtZ3JlZW4tZGFya2VyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1ncmVlbi1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ0ZWFsXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS10ZWFsLWxpZ2h0ZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXRlYWwtbGlnaHRlci1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS10ZWFsLWxpZ2h0XCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS10ZWFsLWxpZ2h0LWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdGVhbC1iYXNlXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS10ZWFsLWJhc2UtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS10ZWFsLWRhcmtcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXRlYWwtZGFyay1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdGVhbC1kYXJrZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXRlYWwtZGFya2VyLWNvbnRyYXN0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY3lhblwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY3lhbi1saWdodGVyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jeWFuLWxpZ2h0ZXItY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY3lhbi1saWdodFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY3lhbi1saWdodC1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWN5YW4tYmFzZVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY3lhbi1iYXNlLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY3lhbi1kYXJrXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jeWFuLWRhcmstY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWN5YW4tZGFya2VyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jeWFuLWRhcmtlci1jb250cmFzdFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImJsdWVcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWJsdWUtbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtYmx1ZS1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWJsdWUtbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWJsdWUtbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1ibHVlLWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWJsdWUtYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWJsdWUtZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtYmx1ZS1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1ibHVlLWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtYmx1ZS1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJyeEJsdWVcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXJ4LWJsdWUtbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcngtYmx1ZS1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXJ4LWJsdWUtbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXJ4LWJsdWUtbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1yeC1ibHVlLWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXJ4LWJsdWUtYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXJ4LWJsdWUtZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcngtYmx1ZS1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1yeC1ibHVlLWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcngtYmx1ZS1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJwdXJwbGVcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXB1cnBsZS1saWdodGVyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1wdXJwbGUtbGlnaHRlci1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1wdXJwbGUtbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXB1cnBsZS1saWdodC1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXB1cnBsZS1iYXNlXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1wdXJwbGUtYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXB1cnBsZS1kYXJrXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1wdXJwbGUtZGFyay1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtcHVycGxlLWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcHVycGxlLWRhcmtlci1jb250cmFzdFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIm1hZ2VudGFcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLW1hZ2VudGEtbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtbWFnZW50YS1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLW1hZ2VudGEtbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLW1hZ2VudGEtbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1tYWdlbnRhLWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLW1hZ2VudGEtYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLW1hZ2VudGEtZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtbWFnZW50YS1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1tYWdlbnRhLWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtbWFnZW50YS1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJyZWRcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXJlZC1saWdodGVyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1yZWQtbGlnaHRlci1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1yZWQtbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXJlZC1saWdodC1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXJlZC1iYXNlXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1yZWQtYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXJlZC1kYXJrXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1yZWQtZGFyay1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtcmVkLWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcmVkLWRhcmtlci1jb250cmFzdFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImhlYlJlZFwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtaGViLXJlZC1saWdodGVyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1oZWItcmVkLWxpZ2h0ZXItY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtaGViLXJlZC1saWdodFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtaGViLXJlZC1saWdodC1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWhlYi1yZWQtYmFzZVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtaGViLXJlZC1iYXNlLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtaGViLXJlZC1kYXJrXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1oZWItcmVkLWRhcmstY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWhlYi1yZWQtZGFya2VyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1oZWItcmVkLWRhcmtlci1jb250cmFzdFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIm9yYW5nZVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtb3JhbmdlLWxpZ2h0ZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLW9yYW5nZS1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLW9yYW5nZS1saWdodFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtb3JhbmdlLWxpZ2h0LWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtb3JhbmdlLWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLW9yYW5nZS1iYXNlLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtb3JhbmdlLWRhcmtcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLW9yYW5nZS1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1vcmFuZ2UtZGFya2VyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1vcmFuZ2UtZGFya2VyLWNvbnRyYXN0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiYW1iZXJcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWFtYmVyLWxpZ2h0ZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWFtYmVyLWxpZ2h0ZXItY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtYW1iZXItbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWFtYmVyLWxpZ2h0LWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtYW1iZXItYmFzZVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtYW1iZXItYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWFtYmVyLWRhcmtcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWFtYmVyLWRhcmstY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWFtYmVyLWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtYW1iZXItZGFya2VyLWNvbnRyYXN0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwieWVsbG93XCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS15ZWxsb3ctbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUteWVsbG93LWxpZ2h0ZXItY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUteWVsbG93LWxpZ2h0XCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS15ZWxsb3ctbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS15ZWxsb3ctYmFzZVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUteWVsbG93LWJhc2UtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS15ZWxsb3ctZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUteWVsbG93LWRhcmstY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXllbGxvdy1kYXJrZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXllbGxvdy1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJjb3Vwb25ZZWxsb3dcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvdXBvbi15ZWxsb3ctbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY291cG9uLXllbGxvdy1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvdXBvbi15ZWxsb3ctbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvdXBvbi15ZWxsb3ctbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3Vwb24teWVsbG93LWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvdXBvbi15ZWxsb3ctYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvdXBvbi15ZWxsb3ctZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY291cG9uLXllbGxvdy1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3Vwb24teWVsbG93LWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY291cG9uLXllbGxvdy1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJwZ1wiOiB7XG4gICAgXCJjb3JlXCI6IHtcbiAgICAgIFwicHJpbWFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtcHJpbWFyeS1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXByaW1hcnktbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXByaW1hcnktbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtcHJpbWFyeS1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXByaW1hcnktYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXByaW1hcnktZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1wcmltYXJ5LWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1wcmltYXJ5LWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlY29uZGFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtc2Vjb25kYXJ5LWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtc2Vjb25kYXJ5LWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1zZWNvbmRhcnktbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtc2Vjb25kYXJ5LWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1zZWNvbmRhcnktZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGVydGlhcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXRlcnRpYXJ5LWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtdGVydGlhcnktbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXRlcnRpYXJ5LWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXRlcnRpYXJ5LWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXRlcnRpYXJ5LWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtdGVydGlhcnktZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS10ZXJ0aWFyeS1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtdGVydGlhcnktZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGFuZ2VyXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1kYW5nZXItbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1kYW5nZXItbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLWRhbmdlci1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1kYW5nZXItbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLWRhbmdlci1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLWRhbmdlci1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1kYW5nZXItZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1kYW5nZXItZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1kYW5nZXItZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLWRhbmdlci1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInN0YXR1c1wiOiB7XG4gICAgICBcInByaW1hcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtcHJpbWFyeS1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtcHJpbWFyeS1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1wcmltYXJ5LWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtcHJpbWFyeS1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1wcmltYXJ5LWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1wcmltYXJ5LWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtcHJpbWFyeS1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtcHJpbWFyeS1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtcHJpbWFyeS1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1wcmltYXJ5LWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlY29uZGFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1zZWNvbmRhcnktbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1zZWNvbmRhcnktbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1zZWNvbmRhcnktbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1zZWNvbmRhcnktYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1zZWNvbmRhcnktZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0ZXJ0aWFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtdGVydGlhcnktbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtdGVydGlhcnktbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtdGVydGlhcnktYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtdGVydGlhcnktZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInN1Y2Nlc3NcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtc3VjY2Vzcy1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtc3VjY2Vzcy1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1zdWNjZXNzLWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtc3VjY2Vzcy1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1zdWNjZXNzLWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1zdWNjZXNzLWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtc3VjY2Vzcy1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtc3VjY2Vzcy1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtc3VjY2Vzcy1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1zdWNjZXNzLWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndhcm5pbmdcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtd2FybmluZy1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtd2FybmluZy1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy13YXJuaW5nLWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtd2FybmluZy1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy13YXJuaW5nLWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy13YXJuaW5nLWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtd2FybmluZy1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtd2FybmluZy1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtd2FybmluZy1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy13YXJuaW5nLWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRhbmdlclwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLWRhbmdlci1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1kYW5nZXItYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1kYW5nZXItZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLWRhbmdlci1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtZGFuZ2VyLWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLWRhbmdlci1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInZpelwiOiB7XG4gICAgICBcIm9uZVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1vbmUtbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LW9uZS1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1vbmUtbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1vbmUtbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotb25lLWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1vbmUtYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1vbmUtZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LW9uZS1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotb25lLWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LW9uZS1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0d29cIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotdHdvLWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei10d28tbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotdHdvLWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotdHdvLWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXR3by1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotdHdvLWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotdHdvLWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei10d28tZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXR3by1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei10d28tZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGhyZWVcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotdGhyZWUtbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXRocmVlLWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXRocmVlLWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotdGhyZWUtbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotdGhyZWUtYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXRocmVlLWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotdGhyZWUtZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXRocmVlLWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei10aHJlZS1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei10aHJlZS1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJmb3VyXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LWZvdXItbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LWZvdXItbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotZm91ci1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LWZvdXItbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotZm91ci1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotZm91ci1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LWZvdXItZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LWZvdXItZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LWZvdXItZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotZm91ci1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJmaXZlXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LWZpdmUtbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LWZpdmUtbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotZml2ZS1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LWZpdmUtbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotZml2ZS1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotZml2ZS1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LWZpdmUtZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LWZpdmUtZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LWZpdmUtZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotZml2ZS1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzaXhcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotc2l4LWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1zaXgtbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotc2l4LWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotc2l4LWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXNpeC1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotc2l4LWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotc2l4LWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1zaXgtZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXNpeC1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1zaXgtZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJzdGF0ZVRva2VuXCI6IHtcbiAgICBcInN1cmZhY2UxXCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0xLWRlZmF1bHQtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMS1kZWZhdWx0LWFcIlxuICAgICAgfSxcbiAgICAgIFwiaG92ZXJcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMS1ob3Zlci1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLWFcIlxuICAgICAgfSxcbiAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLWFcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzdXJmYWNlMlwiOiB7XG4gICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMi1kZWZhdWx0LXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1hXCJcbiAgICAgIH0sXG4gICAgICBcImhvdmVyXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hXCJcbiAgICAgIH0sXG4gICAgICBcImFjdGl2ZVwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwic3VyZmFjZTNcIjoge1xuICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLTMtZGVmYXVsdC1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0zLWRlZmF1bHQtYVwiXG4gICAgICB9LFxuICAgICAgXCJob3ZlclwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLTMtaG92ZXItYVwiXG4gICAgICB9LFxuICAgICAgXCJhY3RpdmVcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMy1hY3RpdmUtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMy1hY3RpdmUtYVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInN1cmZhY2U0XCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS00LWRlZmF1bHQtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtNC1kZWZhdWx0LWFcIlxuICAgICAgfSxcbiAgICAgIFwiaG92ZXJcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtNC1ob3Zlci1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS00LWhvdmVyLWFcIlxuICAgICAgfSxcbiAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLTQtYWN0aXZlLXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLTQtYWN0aXZlLWFcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzdXJmYWNlSW52ZXJzZVwiOiB7XG4gICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1hXCJcbiAgICAgIH0sXG4gICAgICBcImhvdmVyXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hXCJcbiAgICAgIH0sXG4gICAgICBcImFjdGl2ZVwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiaW5rSW52ZXJzZVwiOiB7XG4gICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LWluay1pbnZlcnNlLWRlZmF1bHQtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LWluay1pbnZlcnNlLWRlZmF1bHQtYVwiXG4gICAgICB9LFxuICAgICAgXCJob3ZlclwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtaW5rLWludmVyc2UtaG92ZXItcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LWluay1pbnZlcnNlLWhvdmVyLWFcIlxuICAgICAgfSxcbiAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1pbmstaW52ZXJzZS1hY3RpdmUtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LWluay1pbnZlcnNlLWFjdGl2ZS1hXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwibGlua1wiOiB7XG4gICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LWxpbmstZGVmYXVsdC1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtbGluay1kZWZhdWx0LWFcIlxuICAgICAgfSxcbiAgICAgIFwidmlzaXRlZFwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtbGluay12aXNpdGVkLXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1saW5rLXZpc2l0ZWQtYVwiXG4gICAgICB9XG4gICAgfVxuICB9XG59OyIsICJleHBvcnQgZGVmYXVsdCB7XG4gIFwiY29sb3JcIjoge1xuICAgIFwiYmxhY2tcIjogW1xuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcIndoaXRlXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJsaWdodFwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGFya1wiOiBbXG4gICAgICAzMixcbiAgICAgIDMzLFxuICAgICAgMzQsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGFya2VyXCI6IFtcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJmb2N1c1wiOiBbXG4gICAgICAwLFxuICAgICAgMTE5LFxuICAgICAgMjA0LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImZvY3VzTGlnaHRlclwiOiBbXG4gICAgICAyNTEsXG4gICAgICAyNTMsXG4gICAgICAyNTQsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZm9jdXNDb250cmFzdFwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTFcIjogW1xuICAgICAgMjUwLFxuICAgICAgMjUwLFxuICAgICAgMjUwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXkyXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDI0MixcbiAgICAgIDI0MixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5M1wiOiBbXG4gICAgICAyMzcsXG4gICAgICAyMzcsXG4gICAgICAyMzcsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTRcIjogW1xuICAgICAgMjE2LFxuICAgICAgMjE3LFxuICAgICAgMjE3LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXk1XCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDE5OSxcbiAgICAgIDE5OSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5NlwiOiBbXG4gICAgICAxNzQsXG4gICAgICAxNzYsXG4gICAgICAxNzgsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTdcIjogW1xuICAgICAgMTQzLFxuICAgICAgMTQ1LFxuICAgICAgMTQ4LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXk4XCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDExNyxcbiAgICAgIDEyMCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5OVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDgyLFxuICAgICAgODMsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTEwXCI6IFtcbiAgICAgIDUwLFxuICAgICAgNTEsXG4gICAgICA1MixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJzdXJmYWNlMVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAyNTAsXG4gICAgICAyNTAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwic3VyZmFjZTJcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInN1cmZhY2UzXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDI0MixcbiAgICAgIDI0MixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJzdXJmYWNlNFwiOiBbXG4gICAgICA1MCxcbiAgICAgIDUxLFxuICAgICAgNTIsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwic3VyZmFjZUludmVyc2VcIjogW1xuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImluazFcIjogW1xuICAgICAgNTAsXG4gICAgICA1MSxcbiAgICAgIDUyLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImluazJcIjogW1xuICAgICAgMTE1LFxuICAgICAgMTE3LFxuICAgICAgMTIwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImluazNcIjogW1xuICAgICAgMTQzLFxuICAgICAgMTQ1LFxuICAgICAgMTQ4LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImluazRcIjogW1xuICAgICAgMjUwLFxuICAgICAgMjUwLFxuICAgICAgMjUwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImluazVcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImlua0ludmVyc2VcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImJvcmRlcjFcIjogW1xuICAgICAgMjM3LFxuICAgICAgMjM3LFxuICAgICAgMjM3LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImJvcmRlcjJcIjogW1xuICAgICAgMjE2LFxuICAgICAgMjE3LFxuICAgICAgMjE3LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImJvcmRlcjNcIjogW1xuICAgICAgMTc0LFxuICAgICAgMTc2LFxuICAgICAgMTc4LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImJvcmRlckludmVyc2VcIjogW1xuICAgICAgNTAsXG4gICAgICA1MSxcbiAgICAgIDUyLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRpc2FibGVkMVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAyMzksXG4gICAgICAyMzksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWQyXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDIwOCxcbiAgICAgIDIwNyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZDNcIjogW1xuICAgICAgMTYzLFxuICAgICAgMTU2LFxuICAgICAgMTUzLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRpc2FibGVkNFwiOiBbXG4gICAgICA5MSxcbiAgICAgIDg1LFxuICAgICAgODIsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWRJbnZlcnNlMVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDQwLFxuICAgICAgMzksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWRJbnZlcnNlMlwiOiBbXG4gICAgICA5NCxcbiAgICAgIDg3LFxuICAgICAgODUsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWRJbnZlcnNlM1wiOiBbXG4gICAgICAxNjgsXG4gICAgICAxNjEsXG4gICAgICAxNTksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwicmVhZG9ubHkxXCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDI1MCxcbiAgICAgIDI1MCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJyZWFkb25seTJcIjogW1xuICAgICAgMjE2LFxuICAgICAgMjE3LFxuICAgICAgMjE3LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInJlYWRvbmx5M1wiOiBbXG4gICAgICAxNzQsXG4gICAgICAxNzYsXG4gICAgICAxNzgsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwicmVhZG9ubHk0XCI6IFtcbiAgICAgIDgwLFxuICAgICAgODIsXG4gICAgICA4MyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJlbGV2YXRpb25CYXNlXCI6IFtcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJjb2RlMVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAyMjIsXG4gICAgICAyMjIsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiY29kZTJcIjogW1xuICAgICAgNjEsXG4gICAgICA2MSxcbiAgICAgIDYxLFxuICAgICAgMjU1XG4gICAgXVxuICB9LFxuICBcInBhbGV0dGVcIjoge1xuICAgIFwiZ3JlZW5cIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInRlYWxcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDEwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJjeWFuXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJibHVlXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJyeEJsdWVcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwicHVycGxlXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJtYWdlbnRhXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJyZWRcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJoZWJSZWRcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJvcmFuZ2VcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcImFtYmVyXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ5ZWxsb3dcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY291cG9uWWVsbG93XCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwicGdcIjoge1xuICAgIFwiY29yZVwiOiB7XG4gICAgICBcInByaW1hcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjQ4LFxuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA1MSxcbiAgICAgICAgICAgIDE1MixcbiAgICAgICAgICAgIDIyNSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMTE5LFxuICAgICAgICAgICAgMjA0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA5MyxcbiAgICAgICAgICAgIDE2OCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA2MSxcbiAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlY29uZGFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDIsXG4gICAgICAgICAgICAyNDgsXG4gICAgICAgICAgICAyNTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDUxLFxuICAgICAgICAgICAgMTUyLFxuICAgICAgICAgICAgMjI1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxMTksXG4gICAgICAgICAgICAyMDQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDkzLFxuICAgICAgICAgICAgMTY4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDYxLFxuICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGVydGlhcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDgsXG4gICAgICAgICAgICAyMjIsXG4gICAgICAgICAgICAxMTksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUxLFxuICAgICAgICAgICAgMjAyLFxuICAgICAgICAgICAgMjQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjI0LFxuICAgICAgICAgICAgMTc2LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEzMyxcbiAgICAgICAgICAgIDEwMixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkYW5nZXJcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUxLFxuICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgMjQ1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMTcsXG4gICAgICAgICAgICA3NCxcbiAgICAgICAgICAgIDkxLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE5MyxcbiAgICAgICAgICAgIDMxLFxuICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTU3LFxuICAgICAgICAgICAgMjcsXG4gICAgICAgICAgICA0MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDExMCxcbiAgICAgICAgICAgIDE3LFxuICAgICAgICAgICAgMjgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInN0YXR1c1wiOiB7XG4gICAgICBcInByaW1hcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjQ4LFxuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA1MSxcbiAgICAgICAgICAgIDE1MixcbiAgICAgICAgICAgIDIyNSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMTE5LFxuICAgICAgICAgICAgMjA0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA5MyxcbiAgICAgICAgICAgIDE2OCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA2MSxcbiAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlY29uZGFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDIsXG4gICAgICAgICAgICAyNDgsXG4gICAgICAgICAgICAyNTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDUxLFxuICAgICAgICAgICAgMTUyLFxuICAgICAgICAgICAgMjI1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxMTksXG4gICAgICAgICAgICAyMDQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDkzLFxuICAgICAgICAgICAgMTY4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDYxLFxuICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGVydGlhcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDgsXG4gICAgICAgICAgICAyMjIsXG4gICAgICAgICAgICAxMTksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUxLFxuICAgICAgICAgICAgMjAyLFxuICAgICAgICAgICAgMjQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjI0LFxuICAgICAgICAgICAgMTc2LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEzMyxcbiAgICAgICAgICAgIDEwMixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzdWNjZXNzXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgIDI1MSxcbiAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICAxNzQsXG4gICAgICAgICAgICA1MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMTM4LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMTA3LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA3MSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3YXJuaW5nXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MyxcbiAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQ3LFxuICAgICAgICAgICAgMjAxLFxuICAgICAgICAgICAgOTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjMwLFxuICAgICAgICAgICAgMTY1LFxuICAgICAgICAgICAgMTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjAwLFxuICAgICAgICAgICAgMTM4LFxuICAgICAgICAgICAgNCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE0MyxcbiAgICAgICAgICAgIDk1LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRhbmdlclwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTEsXG4gICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAyNDUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIxNyxcbiAgICAgICAgICAgIDc0LFxuICAgICAgICAgICAgOTEsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTkzLFxuICAgICAgICAgICAgMzEsXG4gICAgICAgICAgICA1MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNTcsXG4gICAgICAgICAgICAyNyxcbiAgICAgICAgICAgIDQyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTEwLFxuICAgICAgICAgICAgMTcsXG4gICAgICAgICAgICAyOCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwidml6XCI6IHtcbiAgICAgIFwib25lXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0MyxcbiAgICAgICAgICAgIDI0OSxcbiAgICAgICAgICAgIDI1MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNDksXG4gICAgICAgICAgICAxNjMsXG4gICAgICAgICAgICAyMTEsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDEyNSxcbiAgICAgICAgICAgIDE3OSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgOTksXG4gICAgICAgICAgICAxNDgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgNzUsXG4gICAgICAgICAgICAxMTIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0d29cIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDcsXG4gICAgICAgICAgICAyMDEsXG4gICAgICAgICAgICA5NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMzAsXG4gICAgICAgICAgICAxNjUsXG4gICAgICAgICAgICAxNSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICAxMzgsXG4gICAgICAgICAgICA0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTQzLFxuICAgICAgICAgICAgOTUsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGhyZWVcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUyLFxuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjQ4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMzIsXG4gICAgICAgICAgICAxMjUsXG4gICAgICAgICAgICAxODAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjEzLFxuICAgICAgICAgICAgNTIsXG4gICAgICAgICAgICAxMzAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTg0LFxuICAgICAgICAgICAgMjAsXG4gICAgICAgICAgICA5OSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEyMCxcbiAgICAgICAgICAgIDcsXG4gICAgICAgICAgICA2MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImZvdXJcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjQ5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA3NCxcbiAgICAgICAgICAgIDE4MSxcbiAgICAgICAgICAgIDE0MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA0MyxcbiAgICAgICAgICAgIDEzMyxcbiAgICAgICAgICAgIDk4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIxLFxuICAgICAgICAgICAgMTExLFxuICAgICAgICAgICAgNzcsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgIDkyLFxuICAgICAgICAgICAgNjIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJmaXZlXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MyxcbiAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQ3LFxuICAgICAgICAgICAgMTMzLFxuICAgICAgICAgICAgOTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjM5LFxuICAgICAgICAgICAgNzksXG4gICAgICAgICAgICAyNixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMDYsXG4gICAgICAgICAgICA1OCxcbiAgICAgICAgICAgIDksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMzQsXG4gICAgICAgICAgICA0MCxcbiAgICAgICAgICAgIDksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzaXhcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQ2LFxuICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNDUsXG4gICAgICAgICAgICAxMjcsXG4gICAgICAgICAgICAxOTksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgNzUsXG4gICAgICAgICAgICAxNzUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNzYsXG4gICAgICAgICAgICA1OCxcbiAgICAgICAgICAgIDEzMSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDQ0LFxuICAgICAgICAgICAgMzEsXG4gICAgICAgICAgICA4NixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07IiwgImV4cG9ydCBkZWZhdWx0IHtcbiAgXCJjb2xvclwiOiB7XG4gICAgXCJibGFja1wiOiBbXG4gICAgICAxMixcbiAgICAgIDEzLFxuICAgICAgMTMsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwid2hpdGVcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImxpZ2h0XCI6IFtcbiAgICAgIDI5LFxuICAgICAgMzAsXG4gICAgICAzMixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkYXJrXCI6IFtcbiAgICAgIDI0NyxcbiAgICAgIDI0NyxcbiAgICAgIDI0OCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkYXJrZXJcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImZvY3VzXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMTQwLFxuICAgICAgMjIzLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImZvY3VzTGlnaHRlclwiOiBbXG4gICAgICAxMCxcbiAgICAgIDE5LFxuICAgICAgMzYsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZm9jdXNDb250cmFzdFwiOiBbXG4gICAgICAxMixcbiAgICAgIDEzLFxuICAgICAgMTMsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTFcIjogW1xuICAgICAgNDMsXG4gICAgICA0NSxcbiAgICAgIDQ5LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXkyXCI6IFtcbiAgICAgIDcxLFxuICAgICAgNzUsXG4gICAgICA4MixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5M1wiOiBbXG4gICAgICAxMDQsXG4gICAgICAxMTAsXG4gICAgICAxMjAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTRcIjogW1xuICAgICAgMTM1LFxuICAgICAgMTQwLFxuICAgICAgMTUxLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXk1XCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDE3MSxcbiAgICAgIDE3OSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5NlwiOiBbXG4gICAgICAxOTIsXG4gICAgICAxOTUsXG4gICAgICAyMDAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTdcIjogW1xuICAgICAgMjExLFxuICAgICAgMjEzLFxuICAgICAgMjE3LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXk4XCI6IFtcbiAgICAgIDIzMyxcbiAgICAgIDIzNCxcbiAgICAgIDIzNixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5OVwiOiBbXG4gICAgICAyMzksXG4gICAgICAyMzksXG4gICAgICAyNDEsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTEwXCI6IFtcbiAgICAgIDI0NyxcbiAgICAgIDI0NyxcbiAgICAgIDI0OCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJzdXJmYWNlMVwiOiBbXG4gICAgICA5LFxuICAgICAgMTAsXG4gICAgICAxMixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJzdXJmYWNlMlwiOiBbXG4gICAgICAyMCxcbiAgICAgIDIyLFxuICAgICAgMjYsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwic3VyZmFjZTNcIjogW1xuICAgICAgMzAsXG4gICAgICAzNCxcbiAgICAgIDQxLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInN1cmZhY2U0XCI6IFtcbiAgICAgIDQzLFxuICAgICAgNDgsXG4gICAgICA1OSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJzdXJmYWNlSW52ZXJzZVwiOiBbXG4gICAgICAxMixcbiAgICAgIDEzLFxuICAgICAgMTMsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rMVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rMlwiOiBbXG4gICAgICAxOTIsXG4gICAgICAxOTUsXG4gICAgICAyMDAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rM1wiOiBbXG4gICAgICAxMzUsXG4gICAgICAxNDAsXG4gICAgICAxNTEsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rNFwiOiBbXG4gICAgICAxMDQsXG4gICAgICAxMTAsXG4gICAgICAxMjAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rNVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDQ1LFxuICAgICAgNDksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rSW52ZXJzZVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiYm9yZGVyMVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDQ1LFxuICAgICAgNDksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiYm9yZGVyMlwiOiBbXG4gICAgICA3MSxcbiAgICAgIDc1LFxuICAgICAgODIsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiYm9yZGVyM1wiOiBbXG4gICAgICAxMDQsXG4gICAgICAxMTAsXG4gICAgICAxMjAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiYm9yZGVySW52ZXJzZVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDQ1LFxuICAgICAgNDksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWQxXCI6IFtcbiAgICAgIDkwLFxuICAgICAgODUsXG4gICAgICA4MyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZDJcIjogW1xuICAgICAgMTYyLFxuICAgICAgMTU2LFxuICAgICAgMTU0LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRpc2FibGVkM1wiOiBbXG4gICAgICAyMTEsXG4gICAgICAyMDgsXG4gICAgICAyMDcsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWQ0XCI6IFtcbiAgICAgIDI0MCxcbiAgICAgIDIzOSxcbiAgICAgIDIzOSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZEludmVyc2UxXCI6IFtcbiAgICAgIDQyLFxuICAgICAgNDAsXG4gICAgICAzOSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZEludmVyc2UyXCI6IFtcbiAgICAgIDkzLFxuICAgICAgODcsXG4gICAgICA4NixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZEludmVyc2UzXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDE2MSxcbiAgICAgIDE2MCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJyZWFkb25seTFcIjogW1xuICAgICAgNDMsXG4gICAgICA0NSxcbiAgICAgIDQ5LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInJlYWRvbmx5MlwiOiBbXG4gICAgICAxMzUsXG4gICAgICAxNDAsXG4gICAgICAxNTEsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwicmVhZG9ubHkzXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDE5NSxcbiAgICAgIDIwMCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJyZWFkb25seTRcIjogW1xuICAgICAgMjM5LFxuICAgICAgMjM5LFxuICAgICAgMjQxLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImVsZXZhdGlvbkJhc2VcIjogW1xuICAgICAgMTIsXG4gICAgICAxMyxcbiAgICAgIDEzLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImNvZGUxXCI6IFtcbiAgICAgIDMsXG4gICAgICAzLFxuICAgICAgMyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJjb2RlMlwiOiBbXG4gICAgICAyMjQsXG4gICAgICAyMjQsXG4gICAgICAyMjQsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicGFsZXR0ZVwiOiB7XG4gICAgXCJncmVlblwiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwidGVhbFwiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJjeWFuXCI6IHtcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDExLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJibHVlXCI6IHtcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInJ4Qmx1ZVwiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwicHVycGxlXCI6IHtcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDkwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwibWFnZW50YVwiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInJlZFwiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJoZWJSZWRcIjoge1xuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJvcmFuZ2VcIjoge1xuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJhbWJlclwiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwieWVsbG93XCI6IHtcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJjb3Vwb25ZZWxsb3dcIjoge1xuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJwZ1wiOiB7XG4gICAgXCJjb3JlXCI6IHtcbiAgICAgIFwicHJpbWFyeVwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE3OCxcbiAgICAgICAgICAgIDIxOCxcbiAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA3OSxcbiAgICAgICAgICAgIDE2NixcbiAgICAgICAgICAgIDIzOCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNSxcbiAgICAgICAgICAgIDEzOCxcbiAgICAgICAgICAgIDIzMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjYsXG4gICAgICAgICAgICA4MyxcbiAgICAgICAgICAgIDEzNyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDMwLFxuICAgICAgICAgICAgNDgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzZWNvbmRhcnlcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNzgsXG4gICAgICAgICAgICAyMTgsXG4gICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNzksXG4gICAgICAgICAgICAxNjYsXG4gICAgICAgICAgICAyMzgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUsXG4gICAgICAgICAgICAxMzgsXG4gICAgICAgICAgICAyMzAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI2LFxuICAgICAgICAgICAgODMsXG4gICAgICAgICAgICAxMzcsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAzMCxcbiAgICAgICAgICAgIDQ4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGVydGlhcnlcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyMzcsXG4gICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjU0LFxuICAgICAgICAgICAgMjI3LFxuICAgICAgICAgICAgMTE5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MSxcbiAgICAgICAgICAgIDIwMixcbiAgICAgICAgICAgIDI0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxOTMsXG4gICAgICAgICAgICAxNTUsXG4gICAgICAgICAgICAxNixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA0NixcbiAgICAgICAgICAgIDM4LFxuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkYW5nZXJcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTQsXG4gICAgICAgICAgICAxOTUsXG4gICAgICAgICAgICAyMDcsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgMTAyLFxuICAgICAgICAgICAgMTE5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0MyxcbiAgICAgICAgICAgIDcwLFxuICAgICAgICAgICAgOTEsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE0MCxcbiAgICAgICAgICAgIDM4LFxuICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNDksXG4gICAgICAgICAgICAxNyxcbiAgICAgICAgICAgIDIxLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzdGF0dXNcIjoge1xuICAgICAgXCJwcmltYXJ5XCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTc4LFxuICAgICAgICAgICAgMjE4LFxuICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDc5LFxuICAgICAgICAgICAgMTY2LFxuICAgICAgICAgICAgMjM4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1LFxuICAgICAgICAgICAgMTM4LFxuICAgICAgICAgICAgMjMwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNixcbiAgICAgICAgICAgIDgzLFxuICAgICAgICAgICAgMTM3LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMzAsXG4gICAgICAgICAgICA0OCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlY29uZGFyeVwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE3OCxcbiAgICAgICAgICAgIDIxOCxcbiAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA3OSxcbiAgICAgICAgICAgIDE2NixcbiAgICAgICAgICAgIDIzOCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNSxcbiAgICAgICAgICAgIDEzOCxcbiAgICAgICAgICAgIDIzMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjYsXG4gICAgICAgICAgICA4MyxcbiAgICAgICAgICAgIDEzNyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDMwLFxuICAgICAgICAgICAgNDgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0ZXJ0aWFyeVwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDIzNyxcbiAgICAgICAgICAgIDE3OSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTQsXG4gICAgICAgICAgICAyMjcsXG4gICAgICAgICAgICAxMTksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUxLFxuICAgICAgICAgICAgMjAyLFxuICAgICAgICAgICAgMjQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE5MyxcbiAgICAgICAgICAgIDE1NSxcbiAgICAgICAgICAgIDE2LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDQ2LFxuICAgICAgICAgICAgMzgsXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInN1Y2Nlc3NcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxOTIsXG4gICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAxOTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNDAsXG4gICAgICAgICAgICAxOTUsXG4gICAgICAgICAgICAzNCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMTU2LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICA5NyxcbiAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMzgsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndhcm5pbmdcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyMzUsXG4gICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjA3LFxuICAgICAgICAgICAgOTgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQ1LFxuICAgICAgICAgICAgMTc5LFxuICAgICAgICAgICAgMjUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE5NCxcbiAgICAgICAgICAgIDEzOSxcbiAgICAgICAgICAgIDIwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDQ2LFxuICAgICAgICAgICAgMzQsXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRhbmdlclwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1NCxcbiAgICAgICAgICAgIDE5NSxcbiAgICAgICAgICAgIDIwNyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAxMDIsXG4gICAgICAgICAgICAxMTksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQzLFxuICAgICAgICAgICAgNzAsXG4gICAgICAgICAgICA5MSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTQwLFxuICAgICAgICAgICAgMzgsXG4gICAgICAgICAgICA1MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA0OSxcbiAgICAgICAgICAgIDE3LFxuICAgICAgICAgICAgMjEsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInZpelwiOiB7XG4gICAgICBcIm9uZVwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE3OSxcbiAgICAgICAgICAgIDIyOCxcbiAgICAgICAgICAgIDI0OSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA1OSxcbiAgICAgICAgICAgIDE3NixcbiAgICAgICAgICAgIDIyNyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMTQzLFxuICAgICAgICAgICAgMjA0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMSxcbiAgICAgICAgICAgIDkyLFxuICAgICAgICAgICAgMTMyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDksXG4gICAgICAgICAgICAzMSxcbiAgICAgICAgICAgIDQyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidHdvXCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjM1LFxuICAgICAgICAgICAgMTc5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MyxcbiAgICAgICAgICAgIDIwNyxcbiAgICAgICAgICAgIDk4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0NSxcbiAgICAgICAgICAgIDE3OSxcbiAgICAgICAgICAgIDI1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxOTQsXG4gICAgICAgICAgICAxMzksXG4gICAgICAgICAgICAyMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA0NixcbiAgICAgICAgICAgIDM0LFxuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0aHJlZVwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MyxcbiAgICAgICAgICAgIDE4MCxcbiAgICAgICAgICAgIDIxOCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDUsXG4gICAgICAgICAgICAxMzIsXG4gICAgICAgICAgICAxOTEsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjM0LFxuICAgICAgICAgICAgODMsXG4gICAgICAgICAgICAxNTYsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE3MSxcbiAgICAgICAgICAgIDM4LFxuICAgICAgICAgICAgMTAyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDM3LFxuICAgICAgICAgICAgMTQsXG4gICAgICAgICAgICAyNSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImZvdXJcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyMjYsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNzcsXG4gICAgICAgICAgICAxOTksXG4gICAgICAgICAgICAxNTIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNDUsXG4gICAgICAgICAgICAxNTQsXG4gICAgICAgICAgICAxMTIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDMyLFxuICAgICAgICAgICAgMTA1LFxuICAgICAgICAgICAgNzcsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAzMyxcbiAgICAgICAgICAgIDI2LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZml2ZVwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDE5OSxcbiAgICAgICAgICAgIDE4NCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAxMzMsXG4gICAgICAgICAgICA5MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDEsXG4gICAgICAgICAgICA5OCxcbiAgICAgICAgICAgIDUwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxODUsXG4gICAgICAgICAgICA2NCxcbiAgICAgICAgICAgIDI0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDQzLFxuICAgICAgICAgICAgMjEsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNpeFwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIwMCxcbiAgICAgICAgICAgIDE4OCxcbiAgICAgICAgICAgIDI0NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNjksXG4gICAgICAgICAgICAxNDksXG4gICAgICAgICAgICAyMjgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTQ0LFxuICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgMjEwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA5MCxcbiAgICAgICAgICAgIDc4LFxuICAgICAgICAgICAgMTI2LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI3LFxuICAgICAgICAgICAgMjQsXG4gICAgICAgICAgICAzNyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07IiwgImltcG9ydCBjb3JlQ29uZmlnIGZyb20gJy4vZ2VuZXJhdGVkL21hcHMvY29yZS12YXJzLWdldHRlci1tYXAnO1xuaW1wb3J0IHRoZW1lQ29uZmlnIGZyb20gJy4vZ2VuZXJhdGVkL21hcHMvdGhlbWUtdmFycy1nZXR0ZXItbWFwJztcbmltcG9ydCBjb3JlU2V0Q29uZmlnIGZyb20gJy4vZ2VuZXJhdGVkL21hcHMvY29yZS12YXJzLXNldHRlci1tYXAnO1xuaW1wb3J0IHRoZW1lU2V0Q29uZmlnIGZyb20gJy4vZ2VuZXJhdGVkL21hcHMvdGhlbWUtdmFycy1zZXR0ZXItbWFwJztcbmltcG9ydCBweExpZ2h0V2ViR2xDb25maWcgZnJvbSAnLi9nZW5lcmF0ZWQvbWFwcy9weC1saWdodC13ZWJnbC1tYXAnO1xuaW1wb3J0IHB4RGFya1dlYkdsQ29uZmlnIGZyb20gJy4vZ2VuZXJhdGVkL21hcHMvcHgtZGFyay13ZWJnbC1tYXAnO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAuLi5jb3JlQ29uZmlnLFxuICAuLi50aGVtZUNvbmZpZyxcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRDb25maWcgPSB7XG4gIC4uLmNvcmVTZXRDb25maWcsXG4gIC4uLnRoZW1lU2V0Q29uZmlnLFxufTtcblxuZXhwb3J0IGNvbnN0IHdlYkdsQ29uZmlnID0ge1xuICBweDoge1xuICAgIGxpZ2h0OiB7XG4gICAgICAuLi5weExpZ2h0V2ViR2xDb25maWcsXG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICAuLi5weERhcmtXZWJHbENvbmZpZyxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IHR5cGUgTW9ydGFyVGhlbWVDb25maWcgPSB0eXBlb2YgY29uZmlnO1xuXG5leHBvcnQgdHlwZSBNb3J0YXJXZWJHbENvbmZpZyA9IHR5cGVvZiB3ZWJHbENvbmZpZztcbiIsICIvLyBpbXBvcnQgeyBkZW5zaXRpZXMsIHNpemVTY2FsZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGdlbmVyYXRpbmcgYSBzZWxlY3RvciB3aXRoIGluZml4IG9yIHBvc3RmaXggbW9kaWZpZXJzLlxuICogVGhlc2UgaW5maXggb3IgcG9zdGZpeCB2YWx1ZXMgbXVzdCBiZSBwbGFjZWQgaW4gZGlmZmVyZW50IHBhcnRzIG9mXG4gKiB0aGUgZ2VuZXJhdGVkIHNlbGVjdG9yIGRlcGVuZGluZyB1cG9uIGlmIHRoZSBzZWxlY3RvciByb290IGlzIGFcbiAqIGA6aG9zdCgpYCBlbGVtZW50IG9yIHN0YW5kYXJkIGAjaWRgL2AuY2xhc3NgLlxuICpcbiAqIGBub25Ib3N0SW5maXhgIGFuZCBgbm9uSG9zdFBvc3RmaXhgIHdpbGwgb3ZlcnJpZGUgdmFsdWVzIHBhc3NlZFxuICogZm9yIGBpbmZpeGAgYW5kIGBwb3N0Zml4YCBpZiB0aGUgdGhlIHNlbGVjdG9yIHJvb3QgaXMgbm90IGA6aG9zdGAuXG4gKiBUaGlzIGlzIHNvIHRoYXQgdGhlIHNlbGVjdG9yIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgZGlmZmVyZW50XG4gKiBiZWhhdmlvciB3aGVuIGl0IGlzIGR5bmFtaWNhbGx5IHdpdGggYm90aCA6aG9zdCBhbmQgaWQvY2xhc3NcbiAqIHNlbGVjdG9ycyAobW9zdCBsaWtlbHkgaW4gbWl4aW5zKS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rvck9wdGlvbnMge1xuICBpbmZpeD86IHN0cmluZztcbiAgcG9zdGZpeD86IHN0cmluZztcbiAgbm9uSG9zdEluZml4Pzogc3RyaW5nO1xuICBub25Ib3N0UG9zdGZpeD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBTcGVjaWFsIHR5cGUgdGhhdCBkZWZpbmVzIGEgU2VsZWN0b3JGYWN0b3J5IGZ1bmN0aW9uLlxuICogVGhlc2UgZnVuY3Rpb25zIHdvcmsgZXhhY3RseSBsaWtlIGdsb2JhbCBzZWxlY3RvcigpIGZ1bmN0aW9uXG4gKiBleGNlcHQgdGhlIHNlbGVjdG9yUm9vdCBhbmQgc29tZSBwb3NzaWJsZSBpbmZpeCBvciBwb3N0Zml4IHZhbHVlc1xuICogaGF2ZSBhbHJlYWR5IGJlZW4gc2V0IGJ5IGEgcGFyZW50IG1peGluLlxuICovXG5leHBvcnQgdHlwZSBTZWxlY3RvckZhY3RvcnkgPSAob3B0aW9ucz86IFNlbGVjdG9yT3B0aW9ucykgPT4gc3RyaW5nO1xuXG4vKiogRGV0ZXJtaW5lcyBpZiBhIGNsYXNzIGlzIGA6aG9zdGAgb3Igbm90ICovXG5leHBvcnQgY29uc3QgaXNIb3N0Q2xhc3MgPSAoc2VsZWN0b3JSb290OiBzdHJpbmcpID0+XG4gIFtcbiAgICAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0JywgLy8gZmlyc3Qgc2luY2UgaXQgd2lsbCBiZSB0aGUgbW9zdCBjb21tb25cbiAgICAnOmhvc3QnLFxuICAgICc6aG9zdDpob3N0JyxcbiAgICAnOmhvc3Q6aG9zdDpob3N0JyxcbiAgICAnOmhvc3Q6aG9zdDpob3N0Omhvc3QnLFxuICAgICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0JyxcbiAgICAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnLFxuICAgICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0JyxcbiAgXS5pbmNsdWRlcyhzZWxlY3RvclJvb3QpO1xuXG4vKipcbiAqIENvcmUgYnVpbGRpbmcgYmxvY2sgb2Ygb3VyIENTUyBpbiBKUyBcIm1peGluc1wiXG4gKlxuICogVGhpcyBmYWN0b3J5IGFsbG93cyBtaXhpbnMgdG8gZGVjbGFyZSB0aGVpciBvd24gc2VsZWN0b3Igcm9vdFxuICogYWxvbmdzaWRlIHRoZWlyIG93biBpbmZpeCBhbmQvb3IgcG9zdGZpeCBvcHRpb25zLiBUaGUgZmFjdG9yeSByZXR1cm5zXG4gKiBhIGxvY2FsaXplZCBjdXN0b20gc2VsZWN0b3IgZnVuY3Rpb24gdGhhdCB0aGUgdXNlciBjYW4gY2FsbCB3aXRoXG4gKiBhZGRpdGlvbmFsIGluZml4IG9yIHBvc3RmaXggdmFsdWVzIHNvIHRoYXQgdGhlIHNlbGVjdG9yIGNhbiBiZSB1c2VkXG4gKiBtdWx0aXBsZSB0aW1lcyB3aXRoaW4gdGhlIHNjb3BlIG9mIHRoZSBcIm1peGluXCIgY2FsbGJhY2suXG4gKi9cbmV4cG9ydCBjb25zdCBzZWxlY3RvckZhY3RvcnkgPVxuICAoXG4gICAgc2VsZWN0b3JSb290OiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5maXg6IGludGVybmFsSW5maXggPSAnJyxcbiAgICAgIHBvc3RmaXg6IGludGVybmFsUG9zdGZpeCA9ICcnLFxuICAgICAgbm9uSG9zdEluZml4OiBpbnRlcm5hbE5vbkhvc3RJbmZpeCxcbiAgICAgIG5vbkhvc3RQb3N0Zml4OiBpbnRlcm5hbE5vbkhvc3RQb3N0Zml4LFxuICAgIH06IFNlbGVjdG9yT3B0aW9ucyA9IHt9XG4gICk6IFNlbGVjdG9yRmFjdG9yeSA9PlxuICAoe1xuICAgIGluZml4ID0gJycsXG4gICAgcG9zdGZpeCA9ICcnLFxuICAgIG5vbkhvc3RJbmZpeCA9IG51bGwsXG4gICAgbm9uSG9zdFBvc3RmaXggPSBudWxsLFxuICB9OiBTZWxlY3Rvck9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGlmIChpc0hvc3RDbGFzcyhzZWxlY3RvclJvb3QpKSB7XG4gICAgICBpZiAoaW50ZXJuYWxJbmZpeCB8fCBpbmZpeCkge1xuICAgICAgICByZXR1cm4gYCR7c2VsZWN0b3JSb290fSgke2ludGVybmFsSW5maXggPz8gJyd9JHtpbmZpeCA/PyAnJ30pJHtpbnRlcm5hbFBvc3RmaXggPz8gJyd9JHtcbiAgICAgICAgICBwb3N0Zml4ID8/ICcnXG4gICAgICAgIH1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAke3NlbGVjdG9yUm9vdH0ke2ludGVybmFsUG9zdGZpeCA/PyAnJ30ke3Bvc3RmaXggPz8gJyd9YDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke3NlbGVjdG9yUm9vdH0ke2ludGVybmFsTm9uSG9zdEluZml4ID8/IGludGVybmFsSW5maXggPz8gJyd9JHtcbiAgICAgICAgbm9uSG9zdEluZml4ID8/IGluZml4ID8/ICcnXG4gICAgICB9JHtpbnRlcm5hbE5vbkhvc3RQb3N0Zml4ID8/IGludGVybmFsUG9zdGZpeCA/PyAnJ30ke25vbkhvc3RQb3N0Zml4ID8/IHBvc3RmaXggPz8gJyd9YDtcbiAgICB9XG4gIH07XG5cbi8qKlxuICogRnVuY3Rpb24gdXNlZCBmb3IgZ2VuZXJhdGluZyBhIHNlbGVjdG9yIHdpdGggaW5maXggb3IgcG9zdGZpeCBtb2RpZmllcnMuXG4gKiBUaGVzZSBpbmZpeCBvciBwb3N0Zml4IHZhbHVlcyBtdXN0IGJlIHBsYWNlZCBpbiBkaWZmZXJlbnQgcGFydHMgb2ZcbiAqIHRoZSBnZW5lcmF0ZWQgc2VsZWN0b3IgZGVwZW5kaW5nIHVwb24gaWYgdGhlIHNlbGVjdG9yUm9vdCBpcyBhXG4gKiBgOmhvc3QoKWAgZWxlbWVudCBvciBzdGFuZGFyZCBgI2lkYC9gLmNsYXNzYC5cbiAqXG4gKiBgbm9uSG9zdEluZml4YCBhbmQgYG5vbkhvc3RQb3N0Zml4YCB3aWxsIG92ZXJyaWRlIHZhbHVlcyBwYXNzZWQgZm9yIGBpbmZpeGBcbiAqIGFuZCBgcG9zdGZpeGAgaWYgdGhlIHRoZSBzZWxlY3RvciByb290IGlzIG5vdCBgOmhvc3RgLiBUaGlzIGlzIHNvIHRoYXQgdGhlXG4gKiBzZWxlY3RvciBjYW4gYmUgdXNlZCB0byBwcm92aWRlIGRpZmZlcmVudCBiZWhhdmlvciB3aGVuIGl0IGlzIGR5bmFtaWNhbGx5XG4gKiB3aXRoIGJvdGggOmhvc3QgYW5kIGlkL2NsYXNzIHNlbGVjdG9ycyAobW9zdCBsaWtlbHkgaW4gbWl4aW5zKS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlbGVjdG9yID0gKFxuICBzZWxlY3RvclJvb3Q6IHN0cmluZyxcbiAgeyBpbmZpeCA9ICcnLCBwb3N0Zml4ID0gJycsIG5vbkhvc3RJbmZpeCA9IG51bGwsIG5vbkhvc3RQb3N0Zml4ID0gbnVsbCB9OiBTZWxlY3Rvck9wdGlvbnMgPSB7fVxuKSA9PiB7XG4gIGlmIChpc0hvc3RDbGFzcyhzZWxlY3RvclJvb3QpKSB7XG4gICAgcmV0dXJuIGluZml4XG4gICAgICA/IGAke3NlbGVjdG9yUm9vdH0oJHtpbmZpeCA/PyAnJ30pJHtwb3N0Zml4ID8/ICcnfWBcbiAgICAgIDogYCR7c2VsZWN0b3JSb290fSR7cG9zdGZpeCA/PyAnJ31gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgJHtzZWxlY3RvclJvb3R9JHtub25Ib3N0SW5maXggPz8gaW5maXggPz8gJyd9JHtub25Ib3N0UG9zdGZpeCA/PyBwb3N0Zml4ID8/ICcnfWA7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzaXplTW9kaWZpZXIgPSAodmFsdWU6IG51bWJlciB8IHN0cmluZywgc2l6ZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBgY2FsYygke3ZhbHVlfSAqICR7Y29uZmlnLnNpemUuc2NhbGVbc2l6ZV19KTtgO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0cmlwVW5pdCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC97fHB4fHBjfHB0fGlufG1tfGNtfGV4fGVtfHJlbXx2d3x2aHx2bWlufHZtYXh8Y2h8bGh8fS8sICcnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdHJpcFVuaXRJbnQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gcGFyc2VJbnQodmFsdWUucmVwbGFjZSgve3xweHxwY3xwdHxpbnxtbXxjbXxleHxlbXxyZW18dnd8dmh8dm1pbnx2bWF4fGNofGxofH0vLCAnJyksIDEwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdHJpcFVuaXRGbG9hdCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoL3t8cHh8cGN8cHR8aW58bW18Y218ZXh8ZW18cmVtfHZ3fHZofHZtaW58dm1heHxjaHxsaHx9LywgJycpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaXplVmFyaWFudHNNaXhpbiA9IChcbiAgc2VsZWN0b3JSb290OiBzdHJpbmcsXG4gIGNvbnRlbnQ6IChzZWxlY3RvcjogU2VsZWN0b3JGYWN0b3J5LCB2YXJpYW50OiBzdHJpbmcpID0+IHN0cmluZ1xuKSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhjb25maWcuc2l6ZS5zY2FsZSkucmVkdWNlKChhY2MsIHZhcmlhbnQpID0+IHtcbiAgICByZXR1cm4gYCR7YWNjfSAke2NvbnRlbnQoXG4gICAgICBzZWxlY3RvckZhY3Rvcnkoc2VsZWN0b3JSb290LCB7XG4gICAgICAgIGluZml4OiBgW3NpemU9XCIke3ZhcmlhbnR9XCJdYCxcbiAgICAgICAgbm9uSG9zdEluZml4OiBgLnNpemUtLSR7dmFyaWFudH1gLFxuICAgICAgfSksXG4gICAgICB2YXJpYW50XG4gICAgKX1gO1xuICB9LCAnJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVuc2l0eVZhcmlhbnRzTWl4aW4gPSAoXG4gIHNlbGVjdG9yUm9vdDogc3RyaW5nLFxuICBjb250ZW50OiAoc2VsZWN0b3I6IFNlbGVjdG9yRmFjdG9yeSwgdmFyaWFudDogc3RyaW5nKSA9PiBzdHJpbmdcbikgPT4ge1xuICByZXR1cm4gY29uZmlnLnNpemUuZGVuc2l0aWVzLnJlZHVjZSgoYWNjLCB2YXJpYW50KSA9PiB7XG4gICAgcmV0dXJuIGAke2FjY30gJHtjb250ZW50KFxuICAgICAgc2VsZWN0b3JGYWN0b3J5KHNlbGVjdG9yUm9vdCwge1xuICAgICAgICBpbmZpeDogYFtkZW5zaXR5PVwiJHt2YXJpYW50fVwiXWAsXG4gICAgICAgIG5vbkhvc3RJbmZpeDogYC5kZW5zaXR5LS0ke3ZhcmlhbnR9YCxcbiAgICAgIH0pLFxuICAgICAgdmFyaWFudFxuICAgICl9YDtcbiAgfSwgJycpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkID0gKCkgPT4ge1xuICByZXR1cm4gYGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudGA7XG59O1xuXG5leHBvcnQgY29uc3QgZmlsbHNwYWNpbmcgPSAoKSA9PiB7XG4gIHJldHVybiBgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBgO1xufTtcblxuZXhwb3J0IGNvbnN0IHZpc3VhbGx5SGlkZGVuID0gKCkgPT4ge1xuICByZXR1cm4gYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDFweCAhaW1wb3J0YW50O1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCkgIWltcG9ydGFudDtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDUwJSkgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYDtcbn07XG4iLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IHNlbGVjdG9yLCBzZWxlY3RvckZhY3RvcnksIFNlbGVjdG9yT3B0aW9ucyB9IGZyb20gJy4vY29yZSc7XG5pbXBvcnQgeyBDU1NSZXN1bHQgfSBmcm9tICdsaXQnO1xuXG5jb25zdCBkYXNoQ2FzZSA9IChzKSA9PiB7XG4gIHJldHVybiBzXG4gICAgLnJlcGxhY2UoL1tBLVpdL2csIChtKSA9PiAnLScgKyBtLnRvTG93ZXJDYXNlKCkpXG4gICAgLnJlcGxhY2UoLyguKikoWzAtOV18W0EtWl0pKC4qKS8sICckMS0kMiQzJyk7XG59O1xuXG5leHBvcnQgY29uc3QgcGFsZXR0ZUdyb3VwT3B0aW9ucyA9IHtcbiAgY29yZTogWydwcmltYXJ5JywgJ3NlY29uZGFyeScsICd0ZXJ0aWFyeScsICdkYW5nZXInXSxcbiAgc3RhdHVzOiBbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ3RlcnRpYXJ5JywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSxcbiAgdml6OiBbJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCddLFxufTtcblxuY29uc3QgZ2V0T3BhY2l0eSA9IChvcGFjaXR5OiBrZXlvZiB0eXBlb2YgY29uZmlnLm9wYWNpdHkgfCBudW1iZXIgfCBzdHJpbmcpID0+XG4gIChvcGFjaXR5ID0gY29uZmlnLm9wYWNpdHlbYCR7b3BhY2l0eX1gXSA/PyBvcGFjaXR5KTtcblxuZXhwb3J0IGludGVyZmFjZSBDb2xvck9wdGlvbnMge1xuICBnPzogJ2NvcmUnIHwgJ3N0YXR1cycgfCAndml6JztcbiAgcDogc3RyaW5nO1xuICBjPzogJ2xpZ2h0ZXInIHwgJ2xpZ2h0JyB8ICdiYXNlJyB8ICdkYXJrJyB8ICdkYXJrZXInO1xuICBvPzoga2V5b2YgdHlwZW9mIGNvbmZpZy5vcGFjaXR5IHwgbnVtYmVyIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY29sb3IgPSAoe1xuICBnOiBncm91cCA9ICdjb3JlJyxcbiAgcDogcGFsZXR0ZSxcbiAgYzogY29sb3IgPSAnYmFzZScsXG4gIG86IG9wYWNpdHkgPSBudWxsLFxufTogQ29sb3JPcHRpb25zKSA9PiB7XG4gIG9wYWNpdHkgPSBnZXRPcGFjaXR5KG9wYWNpdHkpO1xuICBpZiAob3BhY2l0eSkge1xuICAgIHJldHVybiBgcmdiYSh2YXIoLS1tdGUtJHtkYXNoQ2FzZShncm91cCl9LSR7ZGFzaENhc2UocGFsZXR0ZSl9LSR7Y29sb3J9LXJnYiksICR7b3BhY2l0eX0pYDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYHJnYih2YXIoLS1tdGUtJHtkYXNoQ2FzZShncm91cCl9LSR7ZGFzaENhc2UocGFsZXR0ZSl9LSR7Y29sb3J9LXJnYikpYDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yQ29udHJhc3QgPSAoe1xuICBnOiBncm91cCA9ICdjb3JlJyxcbiAgcDogcGFsZXR0ZSxcbiAgYzogY29sb3IgPSAnYmFzZScsXG4gIG86IG9wYWNpdHkgPSBudWxsLFxufTogQ29sb3JPcHRpb25zKSA9PiB7XG4gIG9wYWNpdHkgPSBnZXRPcGFjaXR5KG9wYWNpdHkpO1xuICBpZiAob3BhY2l0eSkge1xuICAgIHJldHVybiBgcmdiYSh2YXIoLS1tdGUtJHtkYXNoQ2FzZShncm91cCl9LSR7ZGFzaENhc2UocGFsZXR0ZSl9LSR7Y29sb3J9LWMtcmdiKSwgJHtvcGFjaXR5fSlgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgcmdiKHZhcigtLW10ZS0ke2Rhc2hDYXNlKGdyb3VwKX0tJHtkYXNoQ2FzZShwYWxldHRlKX0tJHtjb2xvcn0tYy1yZ2IpKWA7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbHMgdGhlIGNhbGxiYWNrIHdpdGggZWFjaCBwYWxldHRlIGluIHRoZSByZXF1ZXN0ZWQgcGFsZXR0ZSBncm91cFxuICogdGhlbiBjb21iaW5lcyBhbGwgb2YgdGhlIHJldHVybmVkIENTUyB0ZW1wbGF0ZSBzdHJpbmdzLlxuICovXG5leHBvcnQgY29uc3QgZm9yRWFjaFBHVmFyaWFudCA9IDxQYWxldHRlR3JvdXAgZXh0ZW5kcyBrZXlvZiB0eXBlb2YgcGFsZXR0ZUdyb3VwT3B0aW9ucz4oXG4gIGdyb3VwOiBQYWxldHRlR3JvdXAsXG4gIGNhbGxiYWNrOiAoZ3JvdXA6IFBhbGV0dGVHcm91cCwgcGFsZXR0ZTogc3RyaW5nKSA9PiBDU1NSZXN1bHQgfCBzdHJpbmdcbikgPT4ge1xuICByZXR1cm4gcGFsZXR0ZUdyb3VwT3B0aW9uc1tncm91cF0ucmVkdWNlKFxuICAgIChhY2MsIHBhbGV0dGUpID0+IGAke2FjY30ke2NhbGxiYWNrKGdyb3VwLCBwYWxldHRlKX1gLFxuICAgICcnXG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuT3B0aW9ucyB7XG4gIG46IGtleW9mIHR5cGVvZiBjb25maWcuY29sb3I7XG4gIG8/OiBrZXlvZiB0eXBlb2YgY29uZmlnLm9wYWNpdHkgfCBudW1iZXIgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCB0b2tlbiA9ICh7IG46IG5hbWUsIG86IG9wYWNpdHkgPSBudWxsIH06IFRva2VuT3B0aW9ucykgPT4ge1xuICBvcGFjaXR5ID0gZ2V0T3BhY2l0eShvcGFjaXR5KTtcbiAgaWYgKG9wYWNpdHkpIHtcbiAgICByZXR1cm4gYHJnYmEodmFyKC0tbXRlLSR7ZGFzaENhc2UobmFtZSl9LXJnYiksICR7b3BhY2l0eX0pYDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYHJnYih2YXIoLS1tdGUtJHtkYXNoQ2FzZShuYW1lKX0tcmdiKSlgO1xuICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlVG9rZW5PcHRpb25zIHtcbiAgbjoga2V5b2YgdHlwZW9mIGNvbmZpZy5zdGF0ZVRva2VuO1xuICBzOiBzdHJpbmc7XG4gIG8/OiBrZXlvZiB0eXBlb2YgY29uZmlnLm9wYWNpdHkgfCBudW1iZXIgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBzdGF0ZVRva2VuID0gKHsgbjogbmFtZSwgczogc3RhdGUsIG86IG9wYWNpdHkgfTogU3RhdGVUb2tlbk9wdGlvbnMpID0+IHtcbiAgb3BhY2l0eSA9IGdldE9wYWNpdHkob3BhY2l0eSk7XG4gIGlmIChvcGFjaXR5KSB7XG4gICAgcmV0dXJuIGByZ2JhKHZhcigtLW10ZS1pdC0ke2Rhc2hDYXNlKG5hbWUpfS0ke3N0YXRlfS1yZ2IpLCAke29wYWNpdHl9KWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGByZ2JhKHZhcigtLW10ZS1pdC0ke2Rhc2hDYXNlKG5hbWUpfS0ke3N0YXRlfS1yZ2IpLCB2YXIoLS1tdGUtaXQtJHtkYXNoQ2FzZShcbiAgICAgIG5hbWVcbiAgICApfS0ke3N0YXRlfS1hKSlgO1xuICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlVG9rZW5NaXhpbk9wdGlvbnMge1xuICBzZWxlY3Rvck9wdGlvbnM/OiBTZWxlY3Rvck9wdGlvbnM7XG4gIG46IGtleW9mIHR5cGVvZiBjb25maWcuc3RhdGVUb2tlbjtcbiAgZm9yU3RhdGVzPzogc3RyaW5nW107XG4gIGZvclByb3BzPzogc3RyaW5nW107XG4gIGF1dG9Db250cmFzdD86IGJvb2xlYW47XG4gIHVzZUltcG9ydGFudD86IGJvb2xlYW47XG4gIGFzT3ZlcmxheT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBzdGF0ZVRva2VuTWl4aW4gPSAoXG4gIHNlbGVjdG9yUm9vdDogc3RyaW5nLFxuICB7XG4gICAgc2VsZWN0b3JPcHRpb25zID0geyBpbmZpeDogJycsIHBvc3RmaXg6ICcnIH0sXG4gICAgbjogbmFtZSxcbiAgICBmb3JTdGF0ZXMgPSBbJ2RlZmF1bHQnLCAnaG92ZXInLCAnYWN0aXZlJ10sXG4gICAgZm9yUHJvcHMgPSBbJ2JhY2tncm91bmQnXSxcbiAgICB1c2VJbXBvcnRhbnQgPSBmYWxzZSxcbiAgICBhc092ZXJsYXkgPSBmYWxzZSxcbiAgfTogU3RhdGVUb2tlbk1peGluT3B0aW9uc1xuKSA9PiB7XG4gIGlmIChhc092ZXJsYXkpIHtcbiAgICBmb3JTdGF0ZXMgPSBmb3JTdGF0ZXMuZmlsdGVyKChzdGF0ZSkgPT4gc3RhdGUgIT09ICdkZWZhdWx0Jyk7XG4gIH1cbiAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvckZhY3Rvcnkoc2VsZWN0b3JSb290LCBzZWxlY3Rvck9wdGlvbnMpO1xuICBjb25zdCBzZXRJbnRlcmFjdGl2ZVByb3BzID0gKHsgbmFtZSwgc3RhdGUsIGZvclByb3BzLCB1c2VJbXBvcnRhbnQgPSBmYWxzZSB9KSA9PiB7XG4gICAgcmV0dXJuIGZvclByb3BzLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiB7XG4gICAgICByZXR1cm4gYCR7YWNjfVxuICAgICAgICAke3Byb3B9OiAke3N0YXRlVG9rZW4oeyBuOiBuYW1lLCBzOiBzdGF0ZSB9KX0ke3VzZUltcG9ydGFudCA/ICcgIWltcG9ydGFudDsnIDogJzsnfVxuICAgICAgYDtcbiAgICB9LCAnJyk7XG4gIH07XG5cbiAgcmV0dXJuIGZvclN0YXRlcy5yZWR1Y2UoKGFjYywgc3RhdGUpID0+IHtcbiAgICByZXR1cm4gYCR7YWNjfVxuICAgICAgJHtzZWxlY3Rvcih7IGluZml4OiBzdGF0ZSAhPT0gJ2RlZmF1bHQnID8gYDoke3N0YXRlfWAgOiAnJyB9KX0ke1xuICAgICAgYXNPdmVybGF5XG4gICAgICAgID8gYDo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtgXG4gICAgICAgIDogYCB7XG4gICAgICBgXG4gICAgfVxuICAgICAgICAke3NldEludGVyYWN0aXZlUHJvcHMoeyBuYW1lLCBzdGF0ZSwgZm9yUHJvcHMsIHVzZUltcG9ydGFudCB9KX1cbiAgICAgIH1cbiAgICBgO1xuICB9LCAnJyk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvY3VzT3B0aW9ucyB7XG4gIHNlbGVjdG9yT3B0aW9ucz86IFNlbGVjdG9yT3B0aW9ucztcbiAgc2VsZWN0b3JTdGF0ZT86ICc6Zm9jdXMtdmlzaWJsZScgfCAnOmZvY3VzJyB8ICc6aG92ZXInIHwgbnVsbDtcbiAgc2VsZWN0b3JPdXRsZXQ/OiAnOjpiZWZvcmUnIHwgJzo6YWZ0ZXInO1xuICBmbHVzaD86IGJvb2xlYW47XG4gIHJhZGl1cz86IHN0cmluZztcbiAgaW5zZXQ/OiBzdHJpbmc7XG4gIHJhZGl1c1RvcExlZnQ/OiBzdHJpbmc7XG4gIHJhZGl1c1RvcFJpZ2h0Pzogc3RyaW5nO1xuICByYWRpdXNCb3R0b21MZWZ0Pzogc3RyaW5nO1xuICByYWRpdXNCb3R0b21SaWdodD86IHN0cmluZztcbiAgb2Zmc2V0VG9wPzogc3RyaW5nO1xuICBvZmZzZXRSaWdodD86IHN0cmluZztcbiAgb2Zmc2V0Qm90dG9tPzogc3RyaW5nO1xuICBvZmZzZXRMZWZ0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZm9jdXNlZE1peGluID0gKFxuICBzZWxlY3RvclJvb3Q6IHN0cmluZyxcbiAge1xuICAgIHNlbGVjdG9yT3B0aW9ucyA9IHsgaW5maXg6ICcnLCBwb3N0Zml4OiAnJyB9LFxuICAgIHNlbGVjdG9yU3RhdGUgPSAnOmZvY3VzLXZpc2libGUnLFxuICAgIHNlbGVjdG9yT3V0bGV0ID0gJzo6YmVmb3JlJyxcbiAgICBmbHVzaCA9IGZhbHNlLFxuICAgIHJhZGl1cyA9ICc0cHgnLFxuICAgIGluc2V0LFxuICAgIHJhZGl1c1RvcExlZnQsXG4gICAgcmFkaXVzVG9wUmlnaHQsXG4gICAgcmFkaXVzQm90dG9tTGVmdCxcbiAgICByYWRpdXNCb3R0b21SaWdodCxcbiAgICBvZmZzZXRUb3AgPSAnLTRweCcsXG4gICAgb2Zmc2V0UmlnaHQgPSAnLTRweCcsXG4gICAgb2Zmc2V0Qm90dG9tID0gJy00cHgnLFxuICAgIG9mZnNldExlZnQgPSAnLTRweCcsXG4gIH06IEZvY3VzT3B0aW9uc1xuKSA9PiB7XG4gIGlmIChmbHVzaCkge1xuICAgIG9mZnNldFRvcCA9ICcwcHgnO1xuICAgIG9mZnNldFJpZ2h0ID0gJzBweCc7XG4gICAgb2Zmc2V0Qm90dG9tID0gJzBweCc7XG4gICAgb2Zmc2V0TGVmdCA9ICcwcHgnO1xuICB9XG4gIGlmICghcmFkaXVzVG9wTGVmdCkge1xuICAgIHJhZGl1c1RvcExlZnQgPSByYWRpdXM7XG4gIH1cbiAgaWYgKCFyYWRpdXNUb3BSaWdodCkge1xuICAgIHJhZGl1c1RvcFJpZ2h0ID0gcmFkaXVzO1xuICB9XG4gIGlmICghcmFkaXVzQm90dG9tTGVmdCkge1xuICAgIHJhZGl1c0JvdHRvbUxlZnQgPSByYWRpdXM7XG4gIH1cbiAgaWYgKCFyYWRpdXNCb3R0b21SaWdodCkge1xuICAgIHJhZGl1c0JvdHRvbVJpZ2h0ID0gcmFkaXVzO1xuICB9XG5cbiAgcmV0dXJuIGAke3NlbGVjdG9yKHNlbGVjdG9yUm9vdCwge1xuICAgIC4uLnNlbGVjdG9yT3B0aW9ucyxcbiAgICBpbmZpeDogYCR7c2VsZWN0b3JPcHRpb25zLmluZml4ID8/ICcnfSR7XG4gICAgICBzZWxlY3RvclN0YXRlID8/ICcnXG4gICAgfTpub3QoLmRpc2FibGVkKTpub3QoW2Rpc2FibGVkXSk6bm90KDpkaXNhYmxlZClgLFxuICAgIHBvc3RmaXg6IGAke3NlbGVjdG9yT3B0aW9ucy5wb3N0Zml4ID8/ICcnfSR7c2VsZWN0b3JPdXRsZXQgPz8gJyd9YCxcbiAgfSl9IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgJHtcbiAgICAgIGluc2V0XG4gICAgICAgID8gJydcbiAgICAgICAgOiBgdG9wOiAke29mZnNldFRvcH07XG4gICAgICByaWdodDogJHtvZmZzZXRSaWdodH07XG4gICAgICBib3R0b206ICR7b2Zmc2V0Qm90dG9tfTtcbiAgICAgIGxlZnQ6ICR7b2Zmc2V0TGVmdH07YFxuICAgIH1cbiAgICAke2luc2V0ID8gYGluc2V0OiAke2luc2V0fTtgIDogJyd9XG4gICAgYm9yZGVyOiBzb2xpZCAycHggJHt0b2tlbih7IG46ICdmb2N1cycgfSl9O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1tdGUtbGlnaHQpO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR7cmFkaXVzVG9wTGVmdH07XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR7cmFkaXVzVG9wUmlnaHR9O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICR7cmFkaXVzQm90dG9tTGVmdH07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICR7cmFkaXVzQm90dG9tUmlnaHR9O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHotaW5kZXg6IDk7XG4gIH1gO1xufTtcbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgZm9udEJhc2VNaXhpbiA9IChmYW1pbHk6IGtleW9mIHR5cGVvZiBjb25maWcuZm9udC5mYW1pbHkgPSAnc2FucycpID0+IGBcbiAgZm9udC1mYW1pbHk6ICR7Y29uZmlnLmZvbnQuZmFtaWx5W2ZhbWlseV19O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbmA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgZm9udFNldE9wdGlvbnMge1xuICBzOiBrZXlvZiB0eXBlb2YgY29uZmlnLmZvbnQuc2V0O1xuICByYXRpbz86IHR5cGVvZiBjb25maWcuZm9udC5yYXRpb1trZXlvZiB0eXBlb2YgY29uZmlnLmZvbnQucmF0aW9dO1xuICBmb250RmFtaWx5Pzoga2V5b2YgdHlwZW9mIGNvbmZpZy5mb250LmZhbWlseTtcbiAgaW1wb3J0YW50PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGZvbnRTZXRNaXhpbiA9ICh7XG4gIHM6IHNldCxcbiAgcmF0aW8sXG4gIGZvbnRGYW1pbHkgPSAnc2FucycsXG4gIGltcG9ydGFudCA9IGZhbHNlLFxufTogZm9udFNldE9wdGlvbnMpID0+IHtcbiAgY29uc3QgdHlwZVN0eWxlID0gY29uZmlnLmZvbnQuc2V0W3NldF07XG4gIGlmIChyYXRpbykge1xuICAgIHJldHVybiBgXG4gICAgICAke2ZvbnRCYXNlTWl4aW4oZm9udEZhbWlseSl9XG4gICAgICBmb250LXNpemU6IGNhbGMoJHt0eXBlU3R5bGUuZm9udFNpemV9ICogJHtyYXRpb30pJHtpbXBvcnRhbnQgPyAnICFpbXBvcnRhbnQnIDogJyd9O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dHlwZVN0eWxlLmZvbnRXZWlnaHR9JHtpbXBvcnRhbnQgPyAnICFpbXBvcnRhbnQnIDogJyd9O1xuICAgICAgbGluZS1oZWlnaHQ6ICR7dHlwZVN0eWxlLmxpbmVIZWlnaHR9JHtpbXBvcnRhbnQgPyAnICFpbXBvcnRhbnQnIDogJyd9O1xuICAgIGA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICR7Zm9udEJhc2VNaXhpbihmb250RmFtaWx5KX1cbiAgICAgIGZvbnQtc2l6ZTogJHt0eXBlU3R5bGUuZm9udFNpemV9JHtpbXBvcnRhbnQgPyAnICFpbXBvcnRhbnQnIDogJyd9O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dHlwZVN0eWxlLmZvbnRXZWlnaHR9JHtpbXBvcnRhbnQgPyAnICFpbXBvcnRhbnQnIDogJyd9O1xuICAgICAgbGluZS1oZWlnaHQ6ICR7dHlwZVN0eWxlLmxpbmVIZWlnaHR9JHtpbXBvcnRhbnQgPyAnICFpbXBvcnRhbnQnIDogJyd9O1xuICAgIGA7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmb250T3ZlcmZsb3dFbGxpcHNpc01peGluID0gKCkgPT4gYFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2luZzogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuZXhwb3J0IGNvbnN0IGZvbnRTZXRJbmhlcml0TWl4aW4gPSAoKSA9PiBgXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbmA7XG4iLCAiLy8gaW1wb3J0IHsgdHJhbnNpdGlvbkR1cmF0aW9uLCB0aW1pbmdGdW5jdGlvbiB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgcHJvcDogc3RyaW5nO1xuICBkdXJhdGlvbj86IHN0cmluZztcbiAgZGVsYXk/OiBzdHJpbmc7XG4gIHRpbWluZ0ZuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdHJhbnNpdGlvbiA9ICh7XG4gIHByb3AsXG4gIGR1cmF0aW9uID0gY29uZmlnLmFuaW1hdGlvbi50cmFuc2l0aW9uRHVyYXRpb24uZGVmYXVsdCxcbiAgZGVsYXkgPSAnMG1zJyxcbiAgdGltaW5nRm4gPSBjb25maWcuYW5pbWF0aW9uLnRpbWluZ0Z1bmN0aW9uLnN0YW5kYXJkLFxufSkgPT4ge1xuICByZXR1cm4gYCR7cHJvcH0gJHtkdXJhdGlvbn0gJHtkZWxheX0gJHt0aW1pbmdGbn1gO1xufTtcbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgdG9rZW4gfSBmcm9tICcuL3RoZW1lJztcblxuZXhwb3J0IGNvbnN0IGVsZXZhdGlvbiA9ICh6VmFsdWU6IGtleW9mIHR5cGVvZiBjb25maWcuZWxldmF0aW9uLmxldmVsIHwgbnVtYmVyKSA9PiB7XG4gIHJldHVybiBgJHtjb25maWcuZWxldmF0aW9uLmxldmVsW3pWYWx1ZV19ICR7dG9rZW4oe1xuICAgIG46ICdlbGV2YXRpb25CYXNlJyxcbiAgICBvOiBjb25maWcuZWxldmF0aW9uLm9wYWNpdHlbelZhbHVlXSxcbiAgfSl9YDtcbn07XG4iLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgUHJvcGVydHlNYXBwZXIsIFN0eWxlUHJvcGVydHkgfSBmcm9tICcuL2Nzcy1pbi1qcy50eXBlcyc7XG5cbmNvbnN0IHByb3BlcnR5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBzdHJpbmdbXT4gPSB7XG4gIG06ICdtYXJnaW4nLFxuICBteDogWydtYXJnaW5MZWZ0JywgJ21hcmdpblJpZ2h0J10sXG4gIG15OiBbJ21hcmdpblRvcCcsICdtYXJnaW5Cb3R0b20nXSxcbiAgbXQ6ICdtYXJnaW5Ub3AnLFxuICBtcjogJ21hcmdpblJpZ2h0JyxcbiAgbWI6ICdtYXJnaW5Cb3R0b20nLFxuICBtbDogJ21hcmdpbkxlZnQnLFxuICBwOiAncGFkZGluZycsXG4gIHB4OiBbJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCddLFxuICBweTogWydwYWRkaW5nVG9wJywgJ3BhZGRpbmdCb3R0b20nXSxcbiAgcHQ6ICdwYWRkaW5nVG9wJyxcbiAgcHI6ICdwYWRkaW5nUmlnaHQnLFxuICBwYjogJ3BhZGRpbmdCb3R0b20nLFxuICBwbDogJ3BhZGRpbmdMZWZ0JyxcbiAgZDogJ2Rpc3BsYXknLFxuICBhOiAnYWxpZ25JdGVtcycsXG4gIGo6ICdqdXN0aWZ5Q29udGVudCcsXG4gIGRpcmVjdGlvbjogJ2ZsZXhEaXJlY3Rpb24nLFxuICBzaHJpbms6ICdmbGV4U2hyaW5rJyxcbiAgZ3JvdzogJ2ZsZXhHcm93JyxcbiAgd3JhcDogJ2ZsZXhXcmFwJyxcbiAgdzogJ3dpZHRoJyxcbiAgbWF4dzogJ21heFdpZHRoJyxcbiAgbWludzogJ21pbldpZHRoJyxcbiAgaDogJ2hlaWdodCcsXG4gIG1heGg6ICdtYXhIZWlnaHQnLFxuICBtaW5oOiAnbWluSGVpZ2h0JyxcbiAgZnM6ICdmb250U2l6ZScsXG4gIGZ3OiAnZm9udFdlaWdodCcsXG4gIGJnOiAnYmFja2dyb3VuZCcsXG4gIGM6ICdjb2xvcicsXG4gIGVsZXZhdGlvbjogJ2JveFNoYWRvdycsXG59O1xuXG4vKiogTWFwcyBwcm9wZXJ0eSBzaG9ydGhhbmQgdmFsdWVzIHRvIG9uZSBvciBtYW55IGZ1bGwgY3NzIHByb3BlcnRpZXMgKi9cbmV4cG9ydCBjb25zdCBwcm9wU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMucmVkdWNlKChhY2MsIHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRQcm9wcyA9IHByb3BlcnR5TWFwW3Byb3BNYXAucHJvcF0gPz8gcHJvcE1hcC5wcm9wO1xuICAgIHJldHVybiBbXG4gICAgICAuLi5hY2MsXG4gICAgICAuLi4oQXJyYXkuaXNBcnJheShtYXBwZWRQcm9wcylcbiAgICAgICAgPyBtYXBwZWRQcm9wcy5tYXAoKHByb3ApID0+ICh7IHByb3AsIHZhbHVlOiBwcm9wTWFwLnZhbHVlIH0pKVxuICAgICAgICA6IFt7IHByb3A6IG1hcHBlZFByb3BzLCB2YWx1ZTogcHJvcE1hcC52YWx1ZSB9XSksXG4gICAgXTtcbiAgfSwgW10pO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBAbW9ydGFyL3N0eWxlcyBjb25maWcgdmFsdWUgZm9yIGEgZ2l2ZW4gZG90IG5vdGF0ZWQgc3RyaW5nLlxuICogTnVtYmVycyBhbmQgbm9uLWRvdCBub3RhdGVkIHN0cmluZyB3aWxsIGp1c3QgYmUgcmV0dXJuZWQgYXMgaXMuXG4gKi9cbmV4cG9ydCBjb25zdCBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlID0gKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIgPT4ge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbmZpZ1BhdGggPSB2YWx1ZS5zcGxpdCgnLicpO1xuICAgICAgY29uc3QgY29uZmlnVmFsdWUgPSBjb25maWdQYXRoLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGFjY1trZXldO1xuICAgICAgfSwgY29uZmlnKTtcbiAgICAgIHJldHVybiBjb25maWdWYWx1ZSA/PyB2YWx1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufTtcblxuLyoqIE1hcHMgZG90IG5vdGF0ZWQgc3RyaW5nIHZhbHVlcyB0byB0aGVtZSBjb25maWcgdmFyaWFibGVzICovXG5leHBvcnQgY29uc3QgZG90U3RyaW5nVG9Db25maWdWYWx1ZU1hcHBlcjogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMucmVkdWNlKChhY2MsIHByb3BNYXApID0+IHtcbiAgICBjb25zdCBjb25maWdWYWx1ZSA9IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUocHJvcE1hcC52YWx1ZSk7XG4gICAgaWYgKGNvbmZpZ1ZhbHVlKSB7XG4gICAgICBwcm9wTWFwLnZhbHVlID0gY29uZmlnVmFsdWUgPz8gcHJvcE1hcC52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi5hY2MsIHByb3BNYXBdO1xuICB9LCBbXSk7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwTnVtYmVyVG9QeCA9ICh2YWw6IHN0cmluZyB8IG51bWJlciB8IG51bGwpID0+IHtcbiAgaWYgKCF2YWwpIHtcbiAgICByZXR1cm4gdmFsIGFzIG51bGw7XG4gIH1cbiAgcmV0dXJuICFpc05hTihOdW1iZXIodmFsKSkgPyBgJHt2YWx9cHhgIDogKHZhbCBhcyBzdHJpbmcpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcFB4VG9OdW1iZXIgPSAodmFsOiBzdHJpbmcgfCBudWxsKSA9PiB7XG4gIGlmICghdmFsKSB7XG4gICAgcmV0dXJuIHZhbCBhcyBudWxsO1xuICB9XG4gIHJldHVybiBOdW1iZXIodmFsLnJlcGxhY2UoJ3B4JywgJycpKTtcbn07XG5cbi8qKiBNYXBzIHRoZSB2YWx1ZXMgb2YgYW55IGdpdmVuIHByb3BzIHRvIHB4IHVuaXRzIGlmIGl0IGlzIGEgbnVtYmVyICovXG5leHBvcnQgY29uc3QgbnVtYmVyVG9QeDogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBtYXBOdW1iZXJUb1B4KHByb3BNYXAudmFsdWUpO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3Qgc3BhY2luZ01hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgJzAnOiBjb25maWcuc3BhY2Uubm9uZSxcbiAgJzEnOiBjb25maWcuc3BhY2UueHMsXG4gICcyJzogY29uZmlnLnNwYWNlLnNtLFxuICAnMyc6IGNvbmZpZy5zcGFjZS5tZCxcbiAgJzQnOiBjb25maWcuc3BhY2UubGcsXG4gICc1JzogY29uZmlnLnNwYWNlLnhsLFxuICAnNic6IGNvbmZpZy5zcGFjZS54eGwsXG4gICc3JzogY29uZmlnLnNwYWNlLnh4eGwsXG4gICdub25lJzogY29uZmlnLnNwYWNlLm5vbmUsXG4gICd4eHMnOiBjb25maWcuc3BhY2UueHhzLFxuICAneHMnOiBjb25maWcuc3BhY2UueHMsXG4gICdzbSc6IGNvbmZpZy5zcGFjZS5zbSxcbiAgJ21kJzogY29uZmlnLnNwYWNlLm1kLFxuICAnbGcnOiBjb25maWcuc3BhY2UubGcsXG4gICd4bCc6IGNvbmZpZy5zcGFjZS54bCxcbiAgJ3h4bCc6IGNvbmZpZy5zcGFjZS54eGwsXG4gICd4eHhsJzogY29uZmlnLnNwYWNlLnh4eGwsXG59O1xuXG4vKiogTWFwcyBzcGFjaW5nIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgc3BhY2luZyBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3Qgc3BhY2luZ1ZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gc3BhY2luZ01hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgYm9yZGVyUmFkaXVzTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBub25lOiBjb25maWcuYm9yZGVyLnJhZGl1cy5ub25lLFxuICB4czogY29uZmlnLmJvcmRlci5yYWRpdXMueHMsXG4gIHNtOiBjb25maWcuYm9yZGVyLnJhZGl1cy5zbSxcbiAgbWQ6IGNvbmZpZy5ib3JkZXIucmFkaXVzLm1kLFxuICBsZzogY29uZmlnLmJvcmRlci5yYWRpdXMubGcsXG4gIHhsOiBjb25maWcuYm9yZGVyLnJhZGl1cy54bCxcbiAgeHhsOiBjb25maWcuYm9yZGVyLnJhZGl1cy54eGwsXG4gIGZ1bGw6IGNvbmZpZy5ib3JkZXIucmFkaXVzLmZ1bGwsXG59O1xuXG4vKiogTWFwcyBib3JkZXIgcmFkaXVzIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgYm9yZGVyIHJhZGl1cyBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBib3JkZXJSYWRpdXNNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGJvcmRlcldpZHRoTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBub25lOiBjb25maWcuYm9yZGVyLndpZHRoLm5vbmUsXG4gIHNtOiBjb25maWcuYm9yZGVyLndpZHRoLnNtLFxuICBtZDogY29uZmlnLmJvcmRlci53aWR0aC5tZCxcbiAgbGc6IGNvbmZpZy5ib3JkZXIud2lkdGgubGcsXG59O1xuXG4vKiogTWFwcyBib3JkZXIgd2lkdGggdmFsdWVzIGZyb20gZGVzaWduYXRlZCBib3JkZXIgd2lkdGggc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBib3JkZXJXaWR0aE1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3Qgb3BhY2l0eU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgeHhsOiBjb25maWcub3BhY2l0eS54eGwsXG4gIHhsOiBjb25maWcub3BhY2l0eS54bCxcbiAgbGc6IGNvbmZpZy5vcGFjaXR5LmxnLFxuICBtZDogY29uZmlnLm9wYWNpdHkubWQsXG4gIHNtOiBjb25maWcub3BhY2l0eS5zbSxcbiAgeHM6IGNvbmZpZy5vcGFjaXR5LnhzLFxuICB4eHM6IGNvbmZpZy5vcGFjaXR5Lnh4cyxcbiAgeHh4czogY29uZmlnLm9wYWNpdHkueHh4cyxcbn07XG5cbi8qKiBNYXBzIG9wYWNpdHkgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBvcGFjaXR5IHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBvcGFjaXR5VmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBvcGFjaXR5TWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBmb250V2VpZ2h0TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBsaWdodDogY29uZmlnLmZvbnQud2VpZ2h0LmxpZ2h0LFxuICByZWd1bGFyOiBjb25maWcuZm9udC53ZWlnaHQucmVndWxhcixcbiAgbWVkaXVtOiBjb25maWcuZm9udC53ZWlnaHQubWVkaXVtLFxuICBib2xkOiBjb25maWcuZm9udC53ZWlnaHQuYm9sZCxcbn07XG5cbi8qKiBNYXBzIGZvbnQtd2VpZ2h0IHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgc3BhY2luZyBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgZm9udFdlaWdodFZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZm9udFdlaWdodE1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZm9udFNpemVNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHh4czogJzAuNjI1cmVtJyxcbiAgeHM6ICcwLjc1cmVtJyxcbiAgc206ICcwLjg3NXJlbScsXG4gIG1kOiAnMXJlbScsXG4gIGxnOiAnMS4yNXJlbScsXG4gIHhsOiAnMS41cmVtJyxcbiAgeHhsOiAnMS43NXJlbScsXG59O1xuXG4vKiogTWFwcyBmb250LXNpemUgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBzcGFjaW5nIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBmb250U2l6ZVZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZm9udFNpemVNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGZvbnRGYW1pbHlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHNhbnM6IGNvbmZpZy5mb250LmZhbWlseS5zYW5zLFxuICBzZXJpZjogY29uZmlnLmZvbnQuZmFtaWx5LnNlcmlmLFxuICBtb25vOiBjb25maWcuZm9udC5mYW1pbHkubW9ubyxcbn07XG5cbi8qKiBNYXBzIGZvbnQtZmFtaWx5IHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgZm9udC1mYW1pbHkgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGZvbnRGYW1pbHlWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGZvbnRGYW1pbHlNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGVsZXZhdGlvbk1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgejA6IGNvbmZpZy5lbGV2YXRpb24uejAsXG4gIHoxOiBjb25maWcuZWxldmF0aW9uLnoxLFxuICB6MjogY29uZmlnLmVsZXZhdGlvbi56MixcbiAgejM6IGNvbmZpZy5lbGV2YXRpb24uejMsXG4gIHo0OiBjb25maWcuZWxldmF0aW9uLno0LFxufTtcblxuLyoqIE1hcHMgZWxldmF0aW9uIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgZWxldmF0aW9uIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBlbGV2YXRpb25WYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGVsZXZhdGlvbk1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcbiIsICJpbXBvcnQgeyBjb25maWcsIFNlbGVjdG9yT3B0aW9ucyB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7XG4gIFNlbGVjdG9yTWV0YWRhdGEsXG4gIFNlbGVjdG9yU3R5bGVzLFxuICBTdHlsZU1hcCxcbiAgU3R5bGVNYXBDYWxsYmFjayxcbiAgU3R5bGVQcm9wZXJ0eSxcbn0gZnJvbSAnLi9jc3MtaW4tanMudHlwZXMnO1xuaW1wb3J0IHtcbiAgcHJvcFNob3J0aGFuZHMsXG4gIHNwYWNpbmdWYWxTaG9ydGhhbmRzLFxuICBudW1iZXJUb1B4LFxuICBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlTWFwcGVyLFxuICBib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLFxuICBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMsXG4gIG9wYWNpdHlWYWxTaG9ydGhhbmRzLFxuICBmb250V2VpZ2h0VmFsU2hvcnRoYW5kcyxcbiAgZm9udEZhbWlseVZhbFNob3J0aGFuZHMsXG4gIGVsZXZhdGlvblZhbFNob3J0aGFuZHMsXG4gIGZvbnRTaXplVmFsU2hvcnRoYW5kcyxcbn0gZnJvbSAnLi9jc3MtaW4tanMucHJvcGVydHktbWFwcGVycyc7XG5cbi8qKiBTcGVjaWZpZXMgd2hpY2ggcHJvcGVydHkgbWFwcGVycyBzaG91bGQgYmUgY2FsbGVkIGFuZCBpbiB3aGF0IG9yZGVyIGZvciBhIGdpdmVuIHByb3AgKi9cbmNvbnN0IHByb3BNYXBwZXJzID0ge1xuICBoZWlnaHQ6IFtudW1iZXJUb1B4XSxcbiAgbWluSGVpZ2h0OiBbbnVtYmVyVG9QeF0sXG4gIG1heEhlaWdodDogW251bWJlclRvUHhdLFxuICB3aWR0aDogW251bWJlclRvUHhdLFxuICBtaW5XaWR0aDogW251bWJlclRvUHhdLFxuICBtYXhXaWR0aDogW251bWJlclRvUHhdLFxuICB0b3A6IFtudW1iZXJUb1B4XSxcbiAgcmlnaHQ6IFtudW1iZXJUb1B4XSxcbiAgYm90dG9tOiBbbnVtYmVyVG9QeF0sXG4gIGxlZnQ6IFtudW1iZXJUb1B4XSxcbiAgbWFyZ2luOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBtYXJnaW5Ub3A6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpblJpZ2h0OiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBtYXJnaW5Cb3R0b206IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpbkxlZnQ6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmc6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmdUb3A6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmdSaWdodDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ0JvdHRvbTogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ0xlZnQ6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGdhcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcm93R2FwOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBjb2x1bW5HYXA6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGZvbnRTaXplOiBbZm9udFNpemVWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgZm9udFdlaWdodDogW2ZvbnRXZWlnaHRWYWxTaG9ydGhhbmRzXSxcbiAgZm9udEZhbWlseTogW2ZvbnRGYW1pbHlWYWxTaG9ydGhhbmRzXSxcbiAgYm9yZGVyUmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlcldpZHRoOiBbYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyVG9wTGVmdFJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG9wYWNpdHk6IFtvcGFjaXR5VmFsU2hvcnRoYW5kc10sXG4gIGJveFNoYWRvdzogW2VsZXZhdGlvblZhbFNob3J0aGFuZHNdLFxufTtcblxuLyoqXG4gKiBQYXJzZXMgcHJvcGVydGllcyB0byB0aGVpciBhY3R1YWwgcHJvcGVydHkgbWFwcGluZ3MgYWNjb3JkaW5nIHRvIHRoZVxuICogbWFwcGluZyBmdW5jdGlvbiBwaXBlbGluZXMgZGVmaW5lZCBhYm92ZVxuICovXG5leHBvcnQgY29uc3QgcGFyc2VQcm9wU2hvcnRoYW5kcyA9IChwcm9wOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBTdHlsZVByb3BlcnR5W10gPT4ge1xuICAvLyBDYXN0IHRvIHN0cmluZyB2YWx1ZXNcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB2YWx1ZSA9IGAke3ZhbHVlfWA7XG4gIH1cbiAgLy8gRXhlYyBwcm9wIHRyYW5zZm9ybXNcbiAgLy8gVGhlIHByb3Agc2hvcnRoYW5kcyBtYXBwZXIgaXMgcnVuIGFnYWluc3QgZXZlcnkgcHJvcFxuICBjb25zdCBtYXBwZWRQcm9wcyA9IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWVNYXBwZXIocHJvcFNob3J0aGFuZHMoW3sgcHJvcCwgdmFsdWUgfV0pKTtcbiAgcmV0dXJuIG1hcHBlZFByb3BzLnJlZHVjZSgoYWNjLCBwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVycyA9IHByb3BNYXBwZXJzW3Byb3BNYXAucHJvcF07XG4gICAgaWYgKG1hcHBlcnMpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgLi4ubWFwcGVycy5yZWR1Y2UoXG4gICAgICAgICAgKGFjYywgbWFwcGVyKSA9PiBtYXBwZXIoYWNjKSxcbiAgICAgICAgICBbeyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBwcm9wTWFwLnZhbHVlIH1dXG4gICAgICAgICksXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY2MucHVzaChwcm9wTWFwKTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICB9LCBbXSk7XG59O1xuXG4vKipcbiAqIFBhcnNlcyBzdHlsZU1hcCB2YWx1ZXMgdG8gc2VsZWN0b3IgKyBzdHlsZSBpbmZvIHVzZWQgZm9yXG4gKiB1cGRhdGluZyBDU1NTdHlsZVNoZWV0cyBvciA8c3R5bGU+IHRhZ3MuXG4gKi9cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVNlbGVjdG9yc0Zyb21TdHlsZU1hcCA9IChcbiAgc2VsZWN0b3JGbjogKG9wdGlvbnM/OiBTZWxlY3Rvck9wdGlvbnMpID0+IHN0cmluZyxcbiAgc3R5bGVNYXA6IFN0eWxlTWFwXG4pID0+IHtcbiAgY29uc3QgcGFyc2VkU2VsZWN0b3JzOiBTZWxlY3RvclN0eWxlc1tdID0gW107XG4gIGNvbnN0IHNlbGVjdG9yUXVldWU6IFNlbGVjdG9yTWV0YWRhdGFbXSA9IFt7IHNlbGVjdG9yOiBzZWxlY3RvckZuKCksIHN0eWxlTWFwIH1dO1xuICBjb25zdCBicmVha3BvaW50S2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZy5ncmlkLmJyZWFrcG9pbnQpO1xuXG4gIC8vIExvb3AgdGhyb3VnaCBzZWxlY3RvciBxdWV1ZSB1bnRpbCB0aGV5IGhhdmUgYWxsIGJlZW4gZXhoYXVzdGVkXG4gIHdoaWxlIChzZWxlY3RvclF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBzZWxlY3Rvck1hcCA9IHNlbGVjdG9yUXVldWUuc2hpZnQoKTtcblxuICAgIC8vIFB1c2ggcGFyc2VkIHNlbGVjdG9ycyBvbnRvIHRoZSByZXR1cm4gbGlzdFxuICAgIHBhcnNlZFNlbGVjdG9ycy5wdXNoKHtcbiAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvck1hcC5zZWxlY3RvcixcbiAgICAgIHNlbGVjdG9yV3JhcHBlcjogc2VsZWN0b3JNYXAuc2VsZWN0b3JXcmFwcGVyLFxuICAgICAgc3R5bGU6IE9iamVjdC5rZXlzKHNlbGVjdG9yTWFwLnN0eWxlTWFwKS5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBzZWxlY3Rvck1hcC5zdHlsZU1hcFtwcm9wXTtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2UgY2FsbGJhY2sgdmFsdWVzXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhbHVlID0gKHZhbHVlIGFzIFN0eWxlTWFwQ2FsbGJhY2spKGNvbmZpZyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXJzZSBvYmplY3QgdmFsdWVzXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIHBzZXVkby1jbGFzc2VzXG4gICAgICAgICAgaWYgKHByb3Auc3RhcnRzV2l0aCgnJjonKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yRm4oeyBpbmZpeDogcHJvcC5yZXBsYWNlKCcmJywgJycpIH0pLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogc2VsZWN0b3JNYXAuc2VsZWN0b3JXcmFwcGVyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBicmVha3BvaW50IHNlbGVjdG9yIHNob3J0aGFuZHNcbiAgICAgICAgICBlbHNlIGlmIChicmVha3BvaW50S2V5cy5pbmNsdWRlcyhwcm9wKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogYEBtZWRpYSAobWluLXdpZHRoOiR7Y29uZmlnLmdyaWQuYnJlYWtwb2ludFtwcm9wXX0pYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUXVldWUgdXAgc2VsZWN0b3JzIGZvciBtZWRpYS9jb250YWluZXIgcXVlcmllc1xuICAgICAgICAgIGVsc2UgaWYgKHByb3Auc3RhcnRzV2l0aCgnQG1lZGlhJykgfHwgcHJvcC5zdGFydHNXaXRoKCdAY29udGFpbmVyJykpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvck1hcC5zZWxlY3RvcixcbiAgICAgICAgICAgICAgc3R5bGVNYXA6IHZhbHVlLFxuICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IHByb3AsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFF1ZXVlIHVwIHNlbGVjdG9ycyBmb3Igc2xvdHRlZCBxdWVyaWVzXG4gICAgICAgICAgZWxzZSBpZiAocHJvcC5zdGFydHNXaXRoKCc6OnNsb3R0ZWQnKSB8fCBwcm9wLnN0YXJ0c1dpdGgoJyYgOjpzbG90dGVkJykpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvckZuKHsgcG9zdGZpeDogJyAnICsgcHJvcC5yZXBsYWNlKCcmICcsICcnKSB9KSxcbiAgICAgICAgICAgICAgc3R5bGVNYXA6IHZhbHVlLFxuICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IHNlbGVjdG9yTWFwLnNlbGVjdG9yV3JhcHBlcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUXVldWUgdXAgc2VsZWN0b3JzIGZvciB2YWx1ZSBicmVha3BvaW50IG9iamVjdHNcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIExvb3AgaW4gb3JkZXIgaGVyZSBzbyB0aGV5IG92ZXJyaWRlIGVhY2ggb3RoZXIgY29ycmVjdGx5XG4gICAgICAgICAgICBicmVha3BvaW50S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlW2tleV0pIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLCAvLyBpbmhlcml0IHRoZSBzZWxlY3RvciBoZXJlIGluIGNhc2Ugd2UgYXJlIHdpdGhpbiBhIHBzZXVkby1jbGFzc1xuICAgICAgICAgICAgICAgICAgc3R5bGVNYXA6IHsgW3Byb3BdOiB2YWx1ZVtrZXldIH0sXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IGBAbWVkaWEgKG1pbi13aWR0aDoke2NvbmZpZy5ncmlkLmJyZWFrcG9pbnRba2V5XX0pYCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIG5vcm1hbCBwcm9wc1xuICAgICAgICBjb25zdCBwcm9wcyA9IHBhcnNlUHJvcFNob3J0aGFuZHMocHJvcCwgdmFsdWUgYXMgc3RyaW5nIHwgbnVtYmVyKTtcbiAgICAgICAgcmV0dXJuIGAke2FjY30ke3Byb3BzLnJlZHVjZSgoYWNjMiwgeyBwcm9wLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgLy8gQ29udmVydCBwcm9wZXJ0eSBuYW1lcyBmcm9tIGNhbWVsLWNhc2UgdG8gZGFzaC1jYXNlLCBpLmUuOlxuICAgICAgICAgIC8vICBgYmFja2dyb3VuZENvbG9yYCAtPiBgYmFja2dyb3VuZC1jb2xvcmBcbiAgICAgICAgICAvLyBWZW5kb3ItcHJlZml4ZWQgbmFtZXMgbmVlZCBhbiBleHRyYSBgLWAgYXBwZW5kZWQgdG8gZnJvbnQ6XG4gICAgICAgICAgLy8gIGB3ZWJraXRBcHBlYXJhbmNlYCAtPiBgLXdlYmtpdC1hcHBlYXJhbmNlYFxuICAgICAgICAgIC8vIEV4Y2VwdGlvbiBpcyBhbnkgcHJvcGVydHkgbmFtZSBjb250YWluaW5nIGEgZGFzaCwgaW5jbHVkaW5nXG4gICAgICAgICAgLy8gY3VzdG9tIHByb3BlcnRpZXM7IHdlIGFzc3VtZSB0aGVzZSBhcmUgYWxyZWFkeSBkYXNoLWNhc2VkIGkuZS46XG4gICAgICAgICAgLy8gIGAtLW15LWJ1dHRvbi1jb2xvcmAgLS0+IGAtLW15LWJ1dHRvbi1jb2xvcmBcbiAgICAgICAgICBwcm9wID0gcHJvcC5yZXBsYWNlKC8oPzpeKHdlYmtpdHxtb3p8bXN8byl8KSg/PVtBLVpdKS9nLCAnLSQmJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICByZXR1cm4gYCR7YWNjMn0ke3Byb3B9OiR7dmFsdWV9O2A7XG4gICAgICAgIH0sICcnKX1gO1xuICAgICAgfSwgJycpLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZFNlbGVjdG9ycztcbn07XG5cbmNvbnN0IHBhcnNlU2VsZWN0b3JzID0gKHN0eWxlcywgc2VsZWN0b3JzPzogYW55KSA9PiB7XG4gIGlmICghc2VsZWN0b3JzKSB7XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYCR7c3R5bGVzfSR7c2VsZWN0b3JzLnJlZHVjZSgoYWNjLCB7IHNlbGVjdG9yLCBzZWxlY3RvcldyYXBwZXIsIHN0eWxlIH0pID0+IHtcbiAgICAgIGlmIChzdHlsZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJhc2UgPSBgJHtzZWxlY3Rvcn17JHtzdHlsZX19YDtcbiAgICAgIGNvbnN0IHdyYXBwZWQgPSBzZWxlY3RvcldyYXBwZXIgPyBgJHtzZWxlY3RvcldyYXBwZXJ9eyR7YmFzZX19YCA6IGJhc2U7XG4gICAgICByZXR1cm4gYCR7YWNjfSR7d3JhcHBlZH1gO1xuICAgIH0sICcnKX1gO1xuICB9XG59O1xuXG4vKipcbiAqIENvbWJpbmVzIGFsbCBpbnN0YW5jZSBzdHlsZU1hcCBzZWxlY3RvcnMgKyBzdHlsZSBpbmZvIGludG8gb25lIGNzc1RleHRcbiAqIHVzZWQgZm9yIHVwZGF0aW5nIENTU1N0eWxlU2hlZXRzIG9yIDxzdHlsZT4gdGFncy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdEluc3RhbmNlU3R5bGVzID0gKGluc3RhbmNlU3R5bGVzTWFwKSA9PiB7XG4gIGxldCBzdHlsZXMgPSAnJztcblxuICAvLyBTb3J0IGtleXMgaW4gYWxwaGFiZXRpY2FsIG9yZGVyIHRvIGhlbHAgYXZvaWQgaHlkcmF0aW9uIG1pc21hdGNoIGVycm9yc1xuICBbLi4uaW5zdGFuY2VTdHlsZXNNYXAuZW50cmllcygpXVxuICAgIC5maWx0ZXIoKFtrZXksIF9dKSA9PiBrZXkgIT09ICdzZScgJiYga2V5ICE9PSAnc3AnKVxuICAgIC5zb3J0KChhLCBiKSA9PiBiWzBdIC0gYVswXSlcbiAgICAuZm9yRWFjaCgoW18sIHNlbGVjdG9yc10pID0+IHtcbiAgICAgIHN0eWxlcyA9IHBhcnNlU2VsZWN0b3JzKHN0eWxlcywgc2VsZWN0b3JzKTtcbiAgICB9KTtcblxuICAvLyBBbHdheXMgcGFyc2UgYHNlYCBhbmQgYHNwYCBzZWxlY3RvcnMgbGFzdCB0byBoZWxwIGF2b2lkIGh5ZHJhdGlvbiBtaXNtYXRjaCBlcnJvcnNcbiAgLy8gYW5kIGVuc3VyZSB0aGV5IG92ZXJyaWRlIGFueSBjb21wb25lbnQgbGV2ZWwgZHluYW1pYyBzdHlsZXMuXG4gIHN0eWxlcyA9IGAke3N0eWxlc30ke3BhcnNlU2VsZWN0b3JzKCcnLCBpbnN0YW5jZVN0eWxlc01hcC5nZXQoJ3NlJykpfSR7cGFyc2VTZWxlY3RvcnMoXG4gICAgJycsXG4gICAgaW5zdGFuY2VTdHlsZXNNYXAuZ2V0KCdzcCcpXG4gICl9YDtcbiAgcmV0dXJuIHN0eWxlcztcbn07XG4iLCAiaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICdsaXQtaHRtbC9pcy1zZXJ2ZXIuanMnO1xuXG5leHBvcnQgY29uc3QgaXNTc3IgPSAoKSA9PiBpc1NlcnZlcjtcblxuZXhwb3J0IGNvbnN0IGlzQnJvd3Nlckxpa2UgPSAoKSA9PiBnbG9iYWxUaGlzICE9PSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkUmVzaXplQ29udHJvbGxlciA9IChyZXNpemVDb250cm9sbGVyKSA9PlxuICByZXNpemVDb250cm9sbGVyPy5bJ19vYnNlcnZlciddPy5bJ3Vub2JzZXJ2ZSddO1xuXG5pbnRlcmZhY2UgTmF2aWdhdG9yVUFEYXRhIHtcbiAgYnJhbmRzOiBBcnJheTx7IGJyYW5kOiBzdHJpbmc7IHZlcnNpb246IHN0cmluZyB9PjtcbiAgbW9iaWxlOiBib29sZWFuO1xuICBwbGF0Zm9ybTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxhdGZvcm0oKTogc3RyaW5nIHtcbiAgY29uc3QgdWFEYXRhID0gKG5hdmlnYXRvciBhcyBhbnkpLnVzZXJBZ2VudERhdGEgYXMgTmF2aWdhdG9yVUFEYXRhIHwgdW5kZWZpbmVkO1xuXG4gIGlmICh1YURhdGE/LnBsYXRmb3JtKSB7XG4gICAgcmV0dXJuIHVhRGF0YS5wbGF0Zm9ybTtcbiAgfVxuXG4gIHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm07XG59XG5cbmV4cG9ydCBjb25zdCBpc1BsYXRmb3JtID0gKHBsYXRmb3JtOiAnSU9TJykgPT4ge1xuICBpZiAoIWlzU3NyKCkpIHtcbiAgICBpZiAocGxhdGZvcm0gPT09ICdJT1MnKSB7XG4gICAgICByZXR1cm4gL2lQKGhvbmV8YWR8b2QpfGlPUy8udGVzdChnZXRQbGF0Zm9ybSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4iLCAiY29uc3QgbmF0aXZlVmFsaWRpdHlTdGF0ZXM6IEFycmF5PGtleW9mIFZhbGlkaXR5U3RhdGU+ID0gW1xuICAnYmFkSW5wdXQnLFxuICAnY3VzdG9tRXJyb3InLFxuICAncGF0dGVybk1pc21hdGNoJyxcbiAgJ3JhbmdlT3ZlcmZsb3cnLFxuICAncmFuZ2VVbmRlcmZsb3cnLFxuICAnc3RlcE1pc21hdGNoJyxcbiAgJ3Rvb0xvbmcnLFxuICAndG9vU2hvcnQnLFxuICAndHlwZU1pc21hdGNoJyxcbiAgJ3ZhbHVlTWlzc2luZycsXG5dO1xuXG4vKipcbiAqIEN1c3RvbSB2YWxpZGF0b3IgZm9yIHRoZSBgQG9wZW4td2MvZm9ybS1jb250cm9sYCB0aGF0IGxlYW5zIG9uIGFuIGludGVybmFsXG4gKiBpbnB1dCB0byBmb3J3YXJkIG5hdGl2ZSB2YWxpZGF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBpbm5lcklucHV0VmFsaWRhdG9ycyA9IG5hdGl2ZVZhbGlkaXR5U3RhdGVzLm1hcCgoa2V5KSA9PiAoe1xuICBrZXksXG4gIGlzVmFsaWQoaW5zdGFuY2U6IEhUTUxFbGVtZW50ICYgeyB2YWxpZGF0aW9uVGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50IH0pIHtcbiAgICBpZiAoaW5zdGFuY2UudmFsaWRhdGlvblRhcmdldCkge1xuICAgICAgcmV0dXJuICFpbnN0YW5jZS52YWxpZGF0aW9uVGFyZ2V0LnZhbGlkaXR5W2tleV07XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxufSkpO1xuIiwgIi8qKlxuICogTk9URTpcbiAqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgaW1wbGVtZW50YXRpb24gZm9yIGFuIGV4dHJlbWVseSBzaW1wbGUgYW5kIGxpZ2h0d2VpZ2h0XG4gKiByZWFjdGl2ZSBzb2x1dGlvbiBsb29zZWx5IGJhc2VkIG9uIHNvbGlkLWpzIHN0eWxlIHNpZ25hbHMuIEl0IGVuYWJsZXMgYmFzaWNcbiAqIHJlYWN0aXZlIHN1YnNjcmlwdGlvbnMgYW5kIGNvbXB1dGVkIHNpZ25hbHMgb2Ygb25lIG9yIG1vcmUgb3RoZXIgZGVwZW5kZW5jeSBzaWduYWxzLlxuICpcbiAqIEluIGl0cyBjdXJyZW50IHN0YXRlLCBpdCBpcyBub3QgcGVyZmVjdCBhbmQgZG9lcyBub3QgaGFuZGxlIGFsbCBlZGdlIGNhc2VzLiBGb3JcbiAqIGV4YW1wbGUsIGlmIHlvdSBoYXZlIG11bHRpcGxlIGxheWVycyBvZiBjb21wdXRlZCBzdGF0ZSB3aXRoIGEgc2luZ2xlIGRlcGVuZGVuY3lcbiAqIHNoYXJlZCBtb3JlIHRoYW4gb25jZSBhY3Jvc3MgdGhvc2UgbGF5ZXJzLCB0aGUgc2FtZSBjaGFuZ2Ugd2lsbCBwb3RlbnRpYWxseSBiZVxuICogZW1pdHRlZCB0d2ljZS4gT3VyIGV4cGVjdGF0aW9uIGF0bSwgaXMgdGhhdCB3ZSB3b24ndCBlbmNvdW50ZXIgdGhvc2Ugc2NlbmFyaW9zXG4gKiBpbiB0aGlzIGxpYnJhcnkuXG4gKi9cblxuLyoqIFVuc3Vic2NyaWJlcyBmcm9tIHZhbHVlIHVwZGF0ZXMuICovXG5leHBvcnQgdHlwZSBVbnN1YnNjcmliZXIgPSAoKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25hbDxUPiB7XG4gIC8qKiBHZXQgdGhlIGN1cnJlbnQgdmFsdWUgKi9cbiAgZ2V0KCk6IFQ7XG5cbiAgLyoqIFNldCByZWFjdGl2ZSB2YWx1ZSAqL1xuICBzZXQodmFsdWU6IFQpO1xuXG4gIC8qKiBVcGRhdGUgcmVhY3RpdmUgdmFsdWUgdXNpbmcgY2FsbGJhY2sgKi9cbiAgdXBkYXRlKGZuOiAodmFsdWU6IFQpID0+IFQpO1xuXG4gIC8qKiBTdWJzY3JpYmUgdG8gcmVhY3RpdmUgdmFsdWUgY2hhbmdlcyAqL1xuICBzdWJzY3JpYmUoZm46ICh2YWx1ZTogVCwgdW5zdWJzY3JpYmU/OiBVbnN1YnNjcmliZXIpID0+IHZvaWQpOiBVbnN1YnNjcmliZXI7XG59XG5cbmNvbnN0IGNvbnRleHQgPSBbXTtcblxuZnVuY3Rpb24gX3N1YnNjcmliZShydW5uaW5nLCBzdWJzY3JpcHRpb25zKSB7XG4gIHN1YnNjcmlwdGlvbnMuYWRkKHJ1bm5pbmcpO1xuICBydW5uaW5nLmRlcGVuZGVuY2llcy5hZGQoc3Vic2NyaXB0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFudXAocnVubmluZykge1xuICBmb3IgKGNvbnN0IGRlcCBvZiBydW5uaW5nLmRlcGVuZGVuY2llcykge1xuICAgIGRlcC5kZWxldGUocnVubmluZyk7XG4gIH1cbiAgcnVubmluZy5kZXBlbmRlbmNpZXMuY2xlYXIoKTtcbn1cblxuLyoqIENyZWF0ZSBhIHNpZ25hbCB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IGdldHRlciBvciBzdWJzY3JpcHRpb24uICovXG5leHBvcnQgZnVuY3Rpb24gc2lnbmFsPFQ+KHZhbHVlPzogVCkge1xuICBjb25zdCBzdWJzY3JpcHRpb25zID0gbmV3IFNldDxhbnk+KCk7XG5cbiAgY29uc3QgZ2V0ID0gKCk6IFQgPT4ge1xuICAgIGNvbnN0IHJ1bm5pbmcgPSBjb250ZXh0W2NvbnRleHQubGVuZ3RoIC0gMV07XG4gICAgaWYgKHJ1bm5pbmcpIF9zdWJzY3JpYmUocnVubmluZywgc3Vic2NyaXB0aW9ucyk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHNldCA9IChuZXh0VmFsdWU6IFQpID0+IHtcbiAgICB2YWx1ZSA9IG5leHRWYWx1ZTtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiBbLi4uc3Vic2NyaXB0aW9uc10pIHtcbiAgICAgIHN1Yi5leGVjdXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZSA9IChmbjogKHZhbHVlOiBUKSA9PiBUKSA9PiB7XG4gICAgdmFsdWUgPSBmbih2YWx1ZSk7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgWy4uLnN1YnNjcmlwdGlvbnNdKSB7XG4gICAgICBzdWIuZXhlY3V0ZSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBUaGlzIGlzIGVzc2VudGlhbGx5IGEgdXNlRWZmZWN0IG1hc3F1ZXJhZGluZyBhcyBhIHN1YnNjcmliZSBmdW5jdGlvblxuICBjb25zdCBzdWJzY3JpYmUgPSAoZm46ICh2YWx1ZTogVCwgdW5zdWJzY3JpYmU/OiBVbnN1YnNjcmliZXIpID0+IHZvaWQpOiBVbnN1YnNjcmliZXIgPT4ge1xuICAgIGNvbnN0IGV4ZWN1dGUgPSAoKSA9PiB7XG4gICAgICBjbGVhbnVwKHJ1bm5pbmcpO1xuICAgICAgY29udGV4dC5wdXNoKHJ1bm5pbmcpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4ocnVubmluZy5nZXQoKSwgKCkgPT4gY2xlYW51cChydW5uaW5nKSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjb250ZXh0LnBvcCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICgpID0+IGNsZWFudXAocnVubmluZyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJ1bm5pbmcgPSB7XG4gICAgICBleGVjdXRlLFxuICAgICAgZGVwZW5kZW5jaWVzOiBuZXcgU2V0KCksXG4gICAgICBnZXQsXG4gICAgfTtcblxuICAgIHJldHVybiBleGVjdXRlKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQsXG4gICAgc2V0LFxuICAgIHVwZGF0ZSxcbiAgICBzdWJzY3JpYmUsXG4gIH0gYXMgU2lnbmFsPFQ+O1xufVxuXG4vKiogT25lIG9yIG1vcmUgYFNpZ25hbGBzICovXG50eXBlIFNpZ25hbHMgPSBTaWduYWw8YW55PiB8IFtTaWduYWw8YW55PiwgLi4uQXJyYXk8U2lnbmFsPGFueT4+XSB8IFNpZ25hbDxhbnk+W107XG5cbi8qKiBPbmUgb3IgbW9yZSB2YWx1ZXMgZnJvbSBzaWduYWxzICovXG5leHBvcnQgdHlwZSBTaWduYWxWYWx1ZXM8VD4gPSBUIGV4dGVuZHMgU2lnbmFsPGluZmVyIFU+XG4gID8gVVxuICA6IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gZXh0ZW5kcyBTaWduYWw8aW5mZXIgVT4gPyBVIDogbmV2ZXIgfTtcblxuLyoqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCBzaWduYWwgZnJvbSBvbmUgb3IgbW9yZSBzaWduYWwgZGVwZW5kZW5jaWVzICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQ8RCBleHRlbmRzIFNpZ25hbHMsIFQ+KFxuICBkZXBlbmRlbmNpZXM6IEQsXG4gIGZuOiAodmFsdWVzOiBTaWduYWxWYWx1ZXM8RD4pID0+IFRcbik6IFNpZ25hbDxUPjtcblxuLyoqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCBzaWduYWwgZnJvbSBvbmUgb3IgbW9yZSBzaWduYWwgZGVwZW5kZW5jaWVzICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQ8RCBleHRlbmRzIFNpZ25hbHMsIFQ+KFxuICBkZXBlbmRlbmNpZXM6IEQsXG4gIGZuPzogKHZhbHVlczogU2lnbmFsVmFsdWVzPEQ+LCBzZXQ/OiAodmFsdWU6IGFueSkgPT4gdm9pZCkgPT4gVFxuKTogU2lnbmFsPHVua25vd24+O1xuXG4vKiogQ3JlYXRlIGEgbmV3IGNvbXB1dGVkIHNpZ25hbCBmcm9tIG9uZSBvciBtb3JlIHNpZ25hbCBkZXBlbmRlbmNpZXMgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZDxEIGV4dGVuZHMgU2lnbmFscz4oXG4gIGRlcGVuZGVuY2llczogRCxcbiAgZm4/OiAoLi4ucGFyYW1zOiBhbnlbXSkgPT4gYW55XG4pOiBTaWduYWw8YW55PiB7XG4gIGNvbnN0IGF1dG8gPSBmbi5sZW5ndGggPCAyO1xuICBjb25zdCBzID0gc2lnbmFsPGFueT4oKTtcbiAgY29uc3Qgc2luZ2xlID0gIUFycmF5LmlzQXJyYXkoZGVwZW5kZW5jaWVzKTtcbiAgY29uc3QgZGVwcyA9IHNpbmdsZVxuICAgID8gKFtkZXBlbmRlbmNpZXNdIGFzIFNpZ25hbDxTaWduYWxWYWx1ZXM8RD4+W10pXG4gICAgOiAoZGVwZW5kZW5jaWVzIGFzIFNpZ25hbDxTaWduYWxWYWx1ZXM8RD4+W10pO1xuXG4gIC8vIFdlIG9ubHkgbmVlZCB0byBzdWJzY3JpYmUgdG8gdGhlIGZpcnN0IGl0ZW0gYmVjYXVzZVxuICAvLyB0aGUgYWN0IG9mIHJldHJpZXZpbmcgYWxsIGRlcGVuZGVuY3kgdmFsdWVzIHdpbGwgYWRkIHRoZW1cbiAgLy8gdG8gdGhlIGNvbnRleHQgc3RhY2sgYXBwcm9wcmlhdGVseVxuICBjb25zdCBkZXAgPSBkZXBzWzBdO1xuICBkZXAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgPSBkZXBzLm1hcCgoZGVwKSA9PiBkZXAuZ2V0KCkpO1xuICAgIGNvbnN0IHJldCA9IHNpbmdsZSA/IHZhbHVlc1swXSA6ICh2YWx1ZXMgYXMgU2lnbmFsVmFsdWVzPEQ+KTtcbiAgICBpZiAoYXV0bykge1xuICAgICAgcy5zZXQoZm4ocmV0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKHJldCwgcy5zZXQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzO1xufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIHdjL25vLXNlbGYtY2xhc3MgKi9cbmltcG9ydCB7IGNvbmZpZywgc2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMsIGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgTXRlRWxlbWVudCB9IGZyb20gJy4vbXRlLmVsZW1lbnQnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0gZnJvbSAnLi4vYXR0cmlidXRlLWNvbnZlcnRlcic7XG5cbmV4cG9ydCB0eXBlIFNwYWNpbmdWYWx1ZSA9XG4gIHwgbnVtYmVyXG4gIHwgc3RyaW5nXG4gIHwgMVxuICB8IDJcbiAgfCAzXG4gIHwgNFxuICB8IDVcbiAgfCA2XG4gIHwgJ25vbmUnXG4gIHwgJ3hzJ1xuICB8ICdzbSdcbiAgfCAnbWQnXG4gIHwgJ2xnJ1xuICB8ICd4bCdcbiAgfCAneHhsJ1xuICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgVW5pdFZhbHVlID0gbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBCb3JkZXJSYWRpdXNWYWx1ZSA9XG4gIHwgJ25vbmUnXG4gIHwgJ3hzJ1xuICB8ICdzbSdcbiAgfCAnbWQnXG4gIHwgJ2xnJ1xuICB8ICd4bCdcbiAgfCAneHhsJ1xuICB8ICdmdWxsJ1xuICB8IHN0cmluZ1xuICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgQm9yZGVyV2lkdGhWYWx1ZSA9ICdub25lJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgT3BhY2l0eVZhbHVlID1cbiAgfCAneHh4cydcbiAgfCAneHhzJ1xuICB8ICd4cydcbiAgfCAnc20nXG4gIHwgJ21kJ1xuICB8ICdsZydcbiAgfCAneGwnXG4gIHwgJ3h4bCdcbiAgfCBzdHJpbmdcbiAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFJlc3BvbnNpdmVWYWx1ZTxUPiA9IFQgfCBQYXJ0aWFsPFJlY29yZDwneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnLCBUPj47XG5cbmNvbnN0IGRlZmF1bHRCb3JkZXJGYWN0b3J5ID0gKHdpZHRoPywgY29sb3I/LCBzdHlsZT8pID0+XG4gIGAke3N0eWxlID8/ICdzb2xpZCd9ICR7XG4gICAgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzKFtcbiAgICAgIHsgcHJvcDogJ2JvcmRlcldpZHRoJywgdmFsdWU6IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUod2lkdGggPz8gJzFweCcpIH0sXG4gICAgXSlbMF0/LnZhbHVlXG4gIH0gJHtkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKGNvbG9yKSA/PyBjb25maWcuY29sb3IuYm9yZGVyMX1gO1xuXG5leHBvcnQgY2xhc3MgTXRlQ29udGVudEJhc2UgZXh0ZW5kcyBNdGVFbGVtZW50IHtcbiAgLy8gLS0gU3BhY2luZyBQcm9wcyAtLVxuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG0/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi1yaWdodGAgYW5kIGBtYXJnaW4tbGVmdGAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG14PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tdG9wYCBhbmQgYG1hcmdpbi1ib3R0b21gIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBteT86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXRvcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtdD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXJpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1yPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tYm90dG9tYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1iPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tbGVmdGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtbD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZ2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXJpZ2h0YCBhbmQgYHBhZGRpbmctbGVmdGAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHB4PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXRvcGAgYW5kIGBwYWRkaW5nLWJvdHRvbWAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHB5PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXRvcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwdD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1yaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwcj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1ib3R0b21gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcGI/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctbGVmdGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwbD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8vIC0tIFBvc2l0aW9uaW5nIFByb3BzIC0tXG5cbiAgLyoqIFNldHMgdGhlIGBkaXNwbGF5YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdibG9jaydcbiAgICB8ICdpbmxpbmUtYmxvY2snXG4gICAgfCAnZmxleCdcbiAgICB8ICdpbmxpbmUtZmxleCdcbiAgICB8ICdncmlkJ1xuICAgIHwgJ2lubGluZS1ncmlkJ1xuICAgIHwgJ2lubGluZSdcbiAgICB8ICdsaXN0LWl0ZW0nXG4gICAgfCAnbm9uZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1pdGVtc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBhPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZW5kJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnYmFzZWxpbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24taXRlbXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYWxpZ25JdGVtcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2Jhc2VsaW5lJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGFsaWduLXNlbGZgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYWxpZ25TZWxmPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnYXV0bydcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdiYXNlbGluZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1jb250ZW50YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGFsaWduQ29udGVudD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ3NwYWNlLWJldHdlZW4nXG4gICAgfCAnc3BhY2UtYXJvdW5kJ1xuICAgIHwgJ3NwYWNlLWV2ZW5seSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LWNvbnRlbnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgaj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIHwgJ3NwYWNlLWFyb3VuZCdcbiAgICB8ICdzcGFjZS1ldmVubHknXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1jb250ZW50YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGp1c3RpZnlDb250ZW50PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3NwYWNlLWJldHdlZW4nXG4gICAgfCAnc3BhY2UtYXJvdW5kJ1xuICAgIHwgJ3NwYWNlLWV2ZW5seSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LWl0ZW1zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGp1c3RpZnlJdGVtcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnbGVmdCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGp1c3RpZnktc2VsZmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBqdXN0aWZ5U2VsZj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnbGVmdCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZmxleDogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWRpcmVjdGlvbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBkaXJlY3Rpb24/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3JvdycgfCAncm93UmV2ZXJzZScgfCAnY29sdW1uJyB8ICdjb2x1bW5SZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1kaXJlY3Rpb25gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleERpcmVjdGlvbj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAncm93JyB8ICdyb3dSZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtblJldmVyc2UnIHwgJ2luaXRpYWwnIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWJhc2lzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJhc2lzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1iYXNpc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4QmFzaXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWdyb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3Jvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtZ3Jvd2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4R3Jvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtc2hyaW5rYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIHNocmluaz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtc2hyaW5rYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhTaHJpbms/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXdyYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgd3JhcD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAnbm93cmFwJyB8ICd3cmFwJyB8ICd3cmFwLXJldmVyc2UnIHwgJ2luaXRpYWwnIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXdyYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleFdyYXA/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ25vd3JhcCcgfCAnd3JhcCcgfCAnd3JhcC1yZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgb3JkZXJgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgb3JkZXI/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBnYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ2FwPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBjb2x1bW4tZ2FwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGNvbHVtbkdhcD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcm93LWdhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICByb3dHYXA/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtY29sdW1uYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRDb2x1bW4/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXJvd2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkUm93PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1hdXRvLWZsb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZEF1dG9GbG93PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdyb3cnIHwgJ2NvbHVtbicgfCAnZGVuc2UnIHwgJ3JvdyBkZW5zZScgfCAnY29sdW1uIGRlbnNlJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1hdXRvLWNvbHVtbnNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZEF1dG9Db2x1bW5zPzogUmVzcG9uc2l2ZVZhbHVlPCdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXV0by1yb3dzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRBdXRvUm93cz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICAnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZVxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgJ25vbmUnIHwgJ2F1dG8nIHwgJ21heC1jb250ZW50JyB8ICdtaW4tY29udGVudCcgfCBVbml0VmFsdWVcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtdGVtcGxhdGUtcm93c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBncmlkVGVtcGxhdGVSb3dzPzogUmVzcG9uc2l2ZVZhbHVlPCdub25lJyB8ICdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtdGVtcGxhdGUtYXJlYXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZFRlbXBsYXRlQXJlYXM/OiBSZXNwb25zaXZlVmFsdWU8J25vbmUnIHwgc3RyaW5nIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXJlYWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQXJlYT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvLyAtLSBTaXppbmcgUHJvcHMgLS1cblxuICAvKiogU2V0cyB0aGUgYHdpZHRoYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIHc/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1heC13aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtYXh3PzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtaW4td2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWludz86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgaGVpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGg/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1heC1oZWlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWF4aD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWluLWhlaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtaW5oPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBiYWNrZ3JvdW5kYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiBDYW4gYmUgcGFzc2VkIGRvdCBub3RhdGVkIHRoZW1lIGNvbmZpZyBzdHJpbmdzIHRvIHNlbGVjdCBjb2xvciB0b2tlbiB2YWx1ZXMuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJnPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgY29sb3JgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuIENhbiBiZSBwYXNzZWQgZG90IG5vdGF0ZWQgdGhlbWUgY29uZmlnIHN0cmluZ3MgdG8gc2VsZWN0IGNvbG9yIHRva2VuIHZhbHVlcy4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1jb2xvcmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gQ2FuIGJlIHBhc3NlZCBkb3Qgbm90YXRlZCB0aGVtZSBjb25maWcgc3RyaW5ncyB0byBzZWxlY3QgY29sb3IgdG9rZW4gdmFsdWVzLiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBib3JkZXJDb2xvcj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci13aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyV2lkdGg/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyV2lkdGhWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItc3R5bGVgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJvcmRlclN0eWxlPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdzb2xpZCcgfCAnZG90dGVkJyB8ICdkYXNoZWQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXJgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlcj86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3BgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcD86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1yaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyUmlnaHQ/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJCb3R0b20/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItbGVmdGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyTGVmdD86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyVG9wUmlnaHRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyVG9wTGVmdFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tTGVmdFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1c2AgYW5kIGBib3JkZXItdG9wLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1c2AgYW5kIGBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJSaWdodFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c2AgYW5kIGBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbVJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLWxlZnQtcmFkaXVzYCBhbmQgYGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyTGVmdFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBsaW5lLWhlaWdodGAgY3NzIHByb3BlcnR5ICAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBsaW5lSGVpZ2h0PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IG51bWJlclxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZm9udC13ZWlnaHRgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmb250V2VpZ2h0PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnbGlnaHQnXG4gICAgfCAncmVndWxhcidcbiAgICB8ICdtZWRpdW0nXG4gICAgfCAnbGlnaHRlcidcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnYm9sZCdcbiAgICB8ICdib2xkZXInXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICAgIHwgJzEwMCdcbiAgICB8ICcyMDAnXG4gICAgfCAnMzAwJ1xuICAgIHwgJzQwMCdcbiAgICB8ICc1MDAnXG4gICAgfCAnNjAwJ1xuICAgIHwgJzcwMCdcbiAgICB8ICc4MDAnXG4gICAgfCAnOTAwJ1xuICA+O1xuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIGBmb250V2VpZ2h0YC4gU2V0cyB0aGUgYGZvbnQtd2VpZ2h0YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZnc/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdsaWdodCdcbiAgICB8ICdyZWd1bGFyJ1xuICAgIHwgJ21lZGl1bSdcbiAgICB8ICdsaWdodGVyJ1xuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdib2xkJ1xuICAgIHwgJ2JvbGRlcidcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gICAgfCAnMTAwJ1xuICAgIHwgJzIwMCdcbiAgICB8ICczMDAnXG4gICAgfCAnNDAwJ1xuICAgIHwgJzUwMCdcbiAgICB8ICc2MDAnXG4gICAgfCAnNzAwJ1xuICAgIHwgJzgwMCdcbiAgICB8ICc5MDAnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmb250LXNpemVgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmb250U2l6ZT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCBVbml0VmFsdWUgfCAneHhzJyB8ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCdcbiAgPjtcblxuICAvKiogU2hvcnRoYW5kIGZvciBgZm9udFNpemVgLiBTZXRzIHRoZSBgZm9udC1zaXplYCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZnM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgVW5pdFZhbHVlIHwgJ3h4cycgfCAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmb250LWZhbWlseWAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZvbnRGYW1pbHk/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3NhbnMnIHwgJ3NlcmlmJyB8ICdtb25vJyB8IHN0cmluZ1xuICA+O1xuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIGBvcGFjaXR5YC4gU2V0cyB0aGUgYG9wYWNpdHlgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBvcGFjaXR5PzogUmVzcG9uc2l2ZVZhbHVlPE9wYWNpdHlWYWx1ZT47XG5cbiAgLyoqIEFwcGxpZXMgTW9ydGFyIHN0YW5kYXJkIGJveC1zaGFkb3cgdmFsdWVzICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGVsZXZhdGlvbj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICAnejAnIHwgJ3oxJyB8ICd6MicgfCAnejMnIHwgJ3o0J1xuICA+O1xuXG4gIC8qKiBBZGp1c3QgdGhpcyBlbGVtZW50cyBibGVlZCBpZiBpdCBpcyBhIGRpcmVjdCBkZXNjZW5kYW50IG9mIGFuIG10ZS1sYXlvdXQtY29udGFpbmVyICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbGF5b3V0QmxlZWQ/OiAnZnVsbCcgfCAncG9wb3V0JyB8ICdjb250ZW50JyB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogUmVuZGVycyB0aGlzIGVsZW1lbnQgYXMgYSBzdWJncmlkIHdoZW4gc2V0LiBgZGlzcGxheWAgaXMgc2V0IHRvIGBncmlkYCBhbmQgYGdyaWQtdGVtcGxhdGUtY29sdW1uc2AgaXMgc2V0IHRvIGBzdWJncmlkYC5cbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBzdWJncmlkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgc2VsZWN0b3IgdG8gaGF2ZSBpbnN0YW5jZSBzdHlsZXMgdGFyZ2V0IGEgc3BlY2lmaWMgaW5uZXIgZWxlbWVudC5cbiAgICogVXNlZnVsIGluIHNwZWNpZmljIHNjZW5hcmlvcyB3aGVyZSB0aGUgcHJpbWFyeSBjb250ZW50L3Nsb3Qgd3JhcHBlZCB3aXRoaW4gdGhlIHRlbXBsYXRlXG4gICAqIGxpa2Ugd2l0aCB0aGUgbW9kYWwgY29tcG9uZW50LlxuICAgKi9cbiAgcHJvdGVjdGVkIGNvbnRlbnRTdHlsZVNlbGVjdG9yUm9vdCA9ICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnO1xuXG4gIC8vIExpc3Qgb2YgcHJvcHMgZm9yIG9wdGltYWwgc3R5bGUgdXBkYXRlIGNoZWNraW5nXG4gIHByaXZhdGUgc3RhdGljIGNvbnRlbnRQcm9wcyA9IG5ldyBTZXQoW1xuICAgICdtJyxcbiAgICAnbXgnLFxuICAgICdteScsXG4gICAgJ210JyxcbiAgICAnbXInLFxuICAgICdtYicsXG4gICAgJ21sJyxcbiAgICAncCcsXG4gICAgJ3B4JyxcbiAgICAncHknLFxuICAgICdwdCcsXG4gICAgJ3ByJyxcbiAgICAncGInLFxuICAgICdwbCcsXG4gICAgJ2QnLFxuICAgICdhJyxcbiAgICAnaicsXG4gICAgJ2Jhc2lzJyxcbiAgICAnc2hyaW5rJyxcbiAgICAnZ3JvdycsXG4gICAgJ2RpcmVjdGlvbicsXG4gICAgJ3dyYXAnLFxuICAgICdhbGlnbkl0ZW1zJyxcbiAgICAnYWxpZ25TZWxmJyxcbiAgICAnYWxpZ25Db250ZW50JyxcbiAgICAnanVzdGlmeUNvbnRlbnQnLFxuICAgICdqdXN0aWZ5SXRlbXMnLFxuICAgICdqdXN0aWZ5U2VsZicsXG4gICAgJ2ZsZXgnLFxuICAgICdmbGV4RGlyZWN0aW9uJyxcbiAgICAnZmxleEJhc2lzJyxcbiAgICAnZmxleFNocmluaycsXG4gICAgJ2ZsZXhHcm93JyxcbiAgICAnZmxleFdyYXAnLFxuICAgICdvcmRlcicsXG4gICAgJ2dhcCcsXG4gICAgJ2NvbHVtbkdhcCcsXG4gICAgJ3Jvd0dhcCcsXG4gICAgJ2dyaWRDb2x1bW4nLFxuICAgICdncmlkUm93JyxcbiAgICAnZ3JpZEF1dG9GbG93JyxcbiAgICAnZ3JpZEF1dG9Db2x1bW5zJyxcbiAgICAnZ3JpZEF1dG9Sb3dzJyxcbiAgICAnZ3JpZFRlbXBsYXRlQ29sdW1ucycsXG4gICAgJ2dyaWRUZW1wbGF0ZVJvd3MnLFxuICAgICdncmlkVGVtcGxhdGVBcmVhcycsXG4gICAgJ2dyaWRBcmVhJyxcbiAgICAndycsXG4gICAgJ21heHcnLFxuICAgICdtaW53JyxcbiAgICAnaCcsXG4gICAgJ21heGgnLFxuICAgICdtaW5oJyxcbiAgICAnYmcnLFxuICAgICdjJyxcbiAgICAnYm9yZGVyQ29sb3InLFxuICAgICdib3JkZXJXaWR0aCcsXG4gICAgJ2JvcmRlclN0eWxlJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnYm9yZGVyVG9wJyxcbiAgICAnYm9yZGVyUmlnaHQnLFxuICAgICdib3JkZXJCb3R0b20nLFxuICAgICdib3JkZXJMZWZ0JyxcbiAgICAnYm9yZGVyUmFkaXVzJyxcbiAgICAnYm9yZGVyVG9wUmlnaHRSYWRpdXMnLFxuICAgICdib3JkZXJUb3BMZWZ0UmFkaXVzJyxcbiAgICAnYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMnLFxuICAgICdib3JkZXJCb3R0b21MZWZ0UmFkaXVzJyxcbiAgICAnYm9yZGVyVG9wUmFkaXVzJyxcbiAgICAnYm9yZGVyUmlnaHRSYWRpdXMnLFxuICAgICdib3JkZXJCb3R0b21SYWRpdXMnLFxuICAgICdib3JkZXJMZWZ0UmFkaXVzJyxcbiAgICAnbGluZUhlaWdodCcsXG4gICAgJ2ZvbnRXZWlnaHQnLFxuICAgICdmdycsXG4gICAgJ2ZvbnRTaXplJyxcbiAgICAnZnMnLFxuICAgICdmb250RmFtaWx5JyxcbiAgICAnb3BhY2l0eScsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ2xheW91dEJsZWVkJyxcbiAgICAnc3ViZ3JpZCcsXG4gIF0pO1xuXG4gIHByb3RlY3RlZCB1cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHM6IE1hcDxzdHJpbmcsIGFueT4pIHtcbiAgICBzdXBlci51cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gQ2hlY2sgaWYgYW55IGNvbnRlbnQgcHJvcCBoYXMgY2hhbmdlZCB0byBkZXRlcm1pbmUgaWYgd2UgbmVlZCB0byB1cGRhdGUgdGhlIGluc3RhbmNlIHN0eWxlc1xuICAgIGxldCBzaG91bGRVcGRhdGVTdHlsZXMgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBjaGFuZ2VkUHJvcHMua2V5cygpKSB7XG4gICAgICBpZiAoTXRlQ29udGVudEJhc2UuY29udGVudFByb3BzLmhhcyhrZXkpKSB7XG4gICAgICAgIHNob3VsZFVwZGF0ZVN0eWxlcyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaG91bGRVcGRhdGVTdHlsZXMpIHtcbiAgICAgIC8vIERvdWJsZSB0aGUgYDpob3N0YCBzZWxlY3RvciB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSBiZXlvbmQgbW9zdCBjb21wb25lbnQgbGV2ZWwgc3R5bGVzIGJ5IGRlZmF1bHRcbiAgICAgIHRoaXMuc2V0SW5zdGFuY2VTdHlsZSgnY29udGVudC1iYXNlJywgc2VsZWN0b3JGYWN0b3J5KHRoaXMuY29udGVudFN0eWxlU2VsZWN0b3JSb290KSwge1xuICAgICAgICAvLyBTcGFjaW5nXG4gICAgICAgIG06IHRoaXMubSxcbiAgICAgICAgbXg6IHRoaXMubXgsXG4gICAgICAgIG15OiB0aGlzLm15LFxuICAgICAgICBtdDogdGhpcy5tdCxcbiAgICAgICAgbXI6IHRoaXMubXIsXG4gICAgICAgIG1iOiB0aGlzLm1iLFxuICAgICAgICBtbDogdGhpcy5tbCxcbiAgICAgICAgcDogdGhpcy5wLFxuICAgICAgICBweDogdGhpcy5weCxcbiAgICAgICAgcHk6IHRoaXMucHksXG4gICAgICAgIHB0OiB0aGlzLnB0LFxuICAgICAgICBwcjogdGhpcy5wcixcbiAgICAgICAgcGI6IHRoaXMucGIsXG4gICAgICAgIHBsOiB0aGlzLnBsLFxuICAgICAgICAvLyBQb3NpdGlvbmluZ1xuICAgICAgICBkOiB0aGlzLnN1YmdyaWQgPyAnZ3JpZCcgOiB0aGlzLmQsXG4gICAgICAgIGFsaWduSXRlbXM6IHRoaXMuYSA/PyB0aGlzLmFsaWduSXRlbXMsXG4gICAgICAgIGFsaWduU2VsZjogdGhpcy5hbGlnblNlbGYsXG4gICAgICAgIGFsaWduQ29udGVudDogdGhpcy5hbGlnbkNvbnRlbnQsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiB0aGlzLmogPz8gdGhpcy5qdXN0aWZ5Q29udGVudCxcbiAgICAgICAganVzdGlmeUl0ZW1zOiB0aGlzLmp1c3RpZnlJdGVtcyxcbiAgICAgICAganVzdGlmeVNlbGY6IHRoaXMuanVzdGlmeVNlbGYsXG4gICAgICAgIGZsZXg6IHRoaXMuZmxleCxcbiAgICAgICAgZmxleERpcmVjdGlvbjogdGhpcy5kaXJlY3Rpb24gPz8gdGhpcy5mbGV4RGlyZWN0aW9uLFxuICAgICAgICBmbGV4QmFzaXM6IHRoaXMuYmFzaXMgPz8gdGhpcy5mbGV4QmFzaXMsXG4gICAgICAgIGZsZXhTaHJpbms6IHRoaXMuc2hyaW5rID8/IHRoaXMuZmxleFNocmluayxcbiAgICAgICAgZmxleEdyb3c6IHRoaXMuZ3JvdyA/PyB0aGlzLmZsZXhHcm93LFxuICAgICAgICBmbGV4V3JhcDogdGhpcy53cmFwID8/IHRoaXMuZmxleFdyYXAsXG4gICAgICAgIG9yZGVyOiB0aGlzLm9yZGVyLFxuICAgICAgICBnYXA6IHRoaXMuZ2FwLFxuICAgICAgICBjb2x1bW5HYXA6IHRoaXMuY29sdW1uR2FwLFxuICAgICAgICByb3dHYXA6IHRoaXMucm93R2FwLFxuICAgICAgICBncmlkQ29sdW1uOiB0aGlzLmxheW91dEJsZWVkID8gdGhpcy5sYXlvdXRCbGVlZCA6IHRoaXMuZ3JpZENvbHVtbixcbiAgICAgICAgZ3JpZFJvdzogdGhpcy5ncmlkUm93LFxuICAgICAgICBncmlkQXV0b0Zsb3c6IHRoaXMuZ3JpZEF1dG9GbG93LFxuICAgICAgICBncmlkQXV0b0NvbHVtbnM6IHRoaXMuZ3JpZEF1dG9Db2x1bW5zLFxuICAgICAgICBncmlkQXV0b1Jvd3M6IHRoaXMuZ3JpZEF1dG9Sb3dzLFxuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiB0aGlzLnN1YmdyaWQgPyAnc3ViZ3JpZCcgOiB0aGlzLmdyaWRUZW1wbGF0ZUNvbHVtbnMsXG4gICAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6IHRoaXMuZ3JpZFRlbXBsYXRlUm93cyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlQXJlYXM6IHRoaXMuZ3JpZFRlbXBsYXRlQXJlYXMsXG4gICAgICAgIGdyaWRBcmVhOiB0aGlzLmdyaWRBcmVhLFxuICAgICAgICAvLyBTaXppbmdcbiAgICAgICAgdzogdGhpcy53LFxuICAgICAgICBtYXh3OiB0aGlzLm1heHcsXG4gICAgICAgIG1pbnc6IHRoaXMubWludyxcbiAgICAgICAgaDogdGhpcy5oLFxuICAgICAgICBtYXhoOiB0aGlzLm1heGgsXG4gICAgICAgIG1pbmg6IHRoaXMubWluaCxcbiAgICAgICAgLy8gQ29sb3JzXG4gICAgICAgIGJnOiB0aGlzLmJnLFxuICAgICAgICBjOiB0aGlzLmMsXG4gICAgICAgIC8vIEJvcmRlcnNcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuYm9yZGVyQ29sb3IsXG4gICAgICAgIGJvcmRlcldpZHRoOiB0aGlzLmJvcmRlcldpZHRoLFxuICAgICAgICBib3JkZXJTdHlsZTogdGhpcy5ib3JkZXJTdHlsZSxcbiAgICAgICAgYm9yZGVyOiB0aGlzLmJvcmRlclxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlclRvcDogdGhpcy5ib3JkZXJUb3BcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJSaWdodDogdGhpcy5ib3JkZXJSaWdodFxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlckxlZnQ6IHRoaXMuYm9yZGVyTGVmdFxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlckJvdHRvbTogdGhpcy5ib3JkZXJCb3R0b21cbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICAvLyBCb3JkZXIgUmFkaXVzXG4gICAgICAgIGJvcmRlclJhZGl1czogdGhpcy5ib3JkZXJSYWRpdXMsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOlxuICAgICAgICAgIHRoaXMuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPz8gdGhpcy5ib3JkZXJUb3BSYWRpdXMgPz8gdGhpcy5ib3JkZXJSaWdodFJhZGl1cyxcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlclRvcExlZnRSYWRpdXMgPz8gdGhpcy5ib3JkZXJUb3BSYWRpdXMgPz8gdGhpcy5ib3JkZXJMZWZ0UmFkaXVzLFxuICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID8/IHRoaXMuYm9yZGVyQm90dG9tUmFkaXVzID8/IHRoaXMuYm9yZGVyUmlnaHRSYWRpdXMsXG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID8/IHRoaXMuYm9yZGVyQm90dG9tUmFkaXVzID8/IHRoaXMuYm9yZGVyTGVmdFJhZGl1cyxcbiAgICAgICAgLy8gRm9udHNcbiAgICAgICAgbGluZUhlaWdodDogdGhpcy5saW5lSGVpZ2h0LFxuICAgICAgICBmb250V2VpZ2h0OiB0aGlzLmZ3ID8/IHRoaXMuZm9udFdlaWdodCxcbiAgICAgICAgZm9udFNpemU6IHRoaXMuZnMgPz8gdGhpcy5mb250U2l6ZSxcbiAgICAgICAgZm9udEZhbWlseTogdGhpcy5mb250RmFtaWx5LFxuICAgICAgICAvLyBPcGFjaXR5XG4gICAgICAgIG9wYWNpdHk6IHRoaXMub3BhY2l0eSxcbiAgICAgICAgLy8gRWxldmF0aW9uXG4gICAgICAgIGVsZXZhdGlvbjogdGhpcy5lbGV2YXRpb24sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBkZWZhdWx0Q29udmVydGVyIH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGNvbnN0IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciA9IHtcbiAgZnJvbUF0dHJpYnV0ZTogKHZhbHVlLCB0eXBlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh2YWx1ZT8uWzBdID09PSAneycpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgdHlwZSk7XG4gIH0sXG4gIHRvQXR0cmlidXRlOiAodmFsdWUsIHR5cGUpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIudG9BdHRyaWJ1dGUodmFsdWUsIE9iamVjdCk7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLnRvQXR0cmlidXRlKHZhbHVlLCB0eXBlKTtcbiAgfSxcbn07XG4iLCAiaW1wb3J0IHsgRGlyZWN0aXZlUmVzdWx0IH0gZnJvbSAnbGl0L2RpcmVjdGl2ZS5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTVkcsIFVuc2FmZVNWR0RpcmVjdGl2ZSB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL3Vuc2FmZS1zdmcuanMnO1xuXG5leHBvcnQgY29uc3QgaGViTG9nb1N2Z0NvbnRlbnRzOiBEaXJlY3RpdmVSZXN1bHQ8dHlwZW9mIFVuc2FmZVNWR0RpcmVjdGl2ZT4gPSB1bnNhZmVTVkcoXG4gIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIGlkPVwiTGF5ZXJfMVwiIHg9XCIwXCIgeT1cIjBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MzYuMjcgMTg2LjI0XCI+PHN0eWxlPi5zdDB7ZmlsbDojZTEyNTFifS5zdDF7ZmlsbDojZmZmfTwvc3R5bGU+PGcgaWQ9XCJfeDMxXy1IRUJfTUFJTl9MT0dPXzAwMDAwMDk2MDQzNDA0MjA2ODYxODgwODcwMDAwMDA0ODEzMjQwOTM4OTQ2ODU1MzU1X1wiPjxwYXRoIGQ9XCJNOTMuMTIgMTg2LjI0QzQxLjY5IDE4Ni4yNCAwIDE0NC41NSAwIDkzLjEyUzQxLjY5IDAgOTMuMTIgMGgzNTAuMDNjNTEuNDMgMCA5My4xMiA0MS42OSA5My4xMiA5My4xMnMtNDEuNjkgOTMuMTItOTMuMTIgOTMuMTJIOTMuMTJ6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk05My4xMiAxNzQuMTljLTQ0Ljc2IDAtODEuMDUtMzYuMjktODEuMDUtODEuMDVzMzYuMjktODEuMDUgODEuMDUtODEuMDVoMzUwLjAzYzQ0Ljc2IDAgODEuMDUgMzYuMjkgODEuMDUgODEuMDVzLTM2LjI5IDgxLjA1LTgxLjA1IDgxLjA1SDkzLjEyelwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJtNDQ0Ljk0IDI0LjExLTM1My42NC4wMmMtMzcuMDcgMC02Ny4yIDMwLjk1LTY3LjE2IDY5LjA3IDAgMzcuOTMgMzAuMTYgNjguODggNjcuMTYgNjguODhsMzUzLjYzLS4wN2MzNy4xLS4wMyA2Ny4xNS0zMC44OSA2Ny4yLTY4Ljg1LS4wNC0zOC4yLTMwLjA5LTY5LjA1LTY3LjE5LTY5LjA1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNMjI0LjIxIDEzMi4yM2g4OC4xbC43Ni0xMi45OGgtNTYuMTh2LTE0Ljg0aDQ0LjgxVjg5LjMzaC00NC44MVY3My4yNWw1OC45Mi0uMDEgMS4xNS0xOS4yOWgtOTcuNHpNMTMyLjQ2IDUzLjk1djM1LjM4SDEwOC42VjUzLjk1SDcxLjI3bDQuNjUgNzguMjhoMzIuNjh2LTI3LjgyaDIzLjg2djI3LjgyaDMyLjY4bDQuNjUtNzguMjh6TTQ0OC41MiA5Ny4wMmM5LjktMi44MyAxNi40OS04LjU5IDE2LjQ5LTIwLjY3LjAzLTEzLjgyLTExLjA2LTIyLjQtMjUuMjktMjIuNGgtNzMuMjhsNC42NSA3OC4yOWg2NC4wNmMyNy45OCAwIDI2LjM5LTE4LjggMjYuMzktMTguOCAwLTcuOTYtNS4zMy0xNC42MS0xMy4wMi0xNi40MnptLTMxLjAyIDIyLjIyaC0xMy43MXYtMTQuODNoMTMuMjJjNy4yMyAwIDExLjA5IDIuMzEgMTEuMDkgNy40OC4wMSA0Ljk0LTMuNDkgNy4zNS0xMC42IDcuMzV6bTEuMDYtMjkuOTFoLTE0Ljc3VjczLjI1aDE0LjI1YzcuODUgMCAxMi4wMyAyLjUgMTIuMDMgOC4xMSAwIDUuMzUtMy43OSA3Ljk3LTExLjUxIDcuOTd6TTE4Mi43NiA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpNMzI5LjY0IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4elwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJNNTMwLjM0IDE3Mi43N2MwLTIuNDYtMS40Ni0zLjU0LTQuNC0zLjU0aC00Ljc0djEyLjQ0aDEuODh2LTUuMzloMi4xN2wzLjI4IDUuMzloMi4xMWwtMy41NC01LjQ4YzEuODQtLjIyIDMuMjQtMS4xOSAzLjI0LTMuNDJ6bS03LjI1IDEuOTJ2LTMuODZoMi41N2MxLjMxIDAgMi43MS4yOSAyLjcxIDEuODMgMCAxLjkyLTEuNDMgMi4wMy0zLjAzIDIuMDNoLTIuMjV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk01MjUuMzcgMTY0LjY3Yy01LjkzIDAtMTAuOTYgNC41Ny0xMC45NiAxMC43NiAwIDYuMjQgNS4wMiAxMC44MSAxMC45NiAxMC44MSA1Ljg4IDAgMTAuOS00LjU3IDEwLjktMTAuODEgMC02LjItNS4wMi0xMC43Ni0xMC45LTEwLjc2em0wIDE5Ljc4Yy00LjkzIDAtOC43OS0zLjgzLTguNzktOS4wMiAwLTUuMTEgMy44NS04Ljk2IDguNzktOC45NiA0Ljg4IDAgOC43MyAzLjg1IDguNzMgOC45NiAwIDUuMTktMy44NSA5LjAyLTguNzMgOS4wMnpcIiBjbGFzcz1cInN0MFwiLz48L2c+PC9zdmc+YFxuKTtcblxuZXhwb3J0IGNvbnN0IGhlYkxvZ29XaGl0ZUNvcHlyaWdodFN2Z0NvbnRlbnRzOiBEaXJlY3RpdmVSZXN1bHQ8dHlwZW9mIFVuc2FmZVNWR0RpcmVjdGl2ZT4gPVxuICB1bnNhZmVTVkcoXG4gICAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgaWQ9XCJMYXllcl8xXCIgeD1cIjBcIiB5PVwiMFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDUzNi4yNyAxODYuMjRcIj48c3R5bGU+LnN0MHtmaWxsOiNlMTI1MWJ9LnN0MXtmaWxsOiNmZmZ9PC9zdHlsZT48ZyBpZD1cIl94MzFfLUhFQl9NQUlOX0xPR09fMDAwMDAwOTYwNDM0MDQyMDY4NjE4ODA4NzAwMDAwMDQ4MTMyNDA5Mzg5NDY4NTUzNTVfXCI+PHBhdGggZD1cIk05My4xMiAxODYuMjRDNDEuNjkgMTg2LjI0IDAgMTQ0LjU1IDAgOTMuMTJTNDEuNjkgMCA5My4xMiAwaDM1MC4wM2M1MS40MyAwIDkzLjEyIDQxLjY5IDkzLjEyIDkzLjEycy00MS42OSA5My4xMi05My4xMiA5My4xMkg5My4xMnpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTkzLjEyIDE3NC4xOWMtNDQuNzYgMC04MS4wNS0zNi4yOS04MS4wNS04MS4wNXMzNi4yOS04MS4wNSA4MS4wNS04MS4wNWgzNTAuMDNjNDQuNzYgMCA4MS4wNSAzNi4yOSA4MS4wNSA4MS4wNXMtMzYuMjkgODEuMDUtODEuMDUgODEuMDVIOTMuMTJ6XCIgY2xhc3M9XCJzdDFcIi8+PHBhdGggZD1cIm00NDQuOTQgMjQuMTEtMzUzLjY0LjAyYy0zNy4wNyAwLTY3LjIgMzAuOTUtNjcuMTYgNjkuMDcgMCAzNy45MyAzMC4xNiA2OC44OCA2Ny4xNiA2OC44OGwzNTMuNjMtLjA3YzM3LjEtLjAzIDY3LjE1LTMwLjg5IDY3LjItNjguODUtLjA0LTM4LjItMzAuMDktNjkuMDUtNjcuMTktNjkuMDV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk0yMjQuMjEgMTMyLjIzaDg4LjFsLjc2LTEyLjk4aC01Ni4xOHYtMTQuODRoNDQuODFWODkuMzNoLTQ0LjgxVjczLjI1bDU4LjkyLS4wMSAxLjE1LTE5LjI5aC05Ny40ek0xMzIuNDYgNTMuOTV2MzUuMzhIMTA4LjZWNTMuOTVINzEuMjdsNC42NSA3OC4yOGgzMi42OHYtMjcuODJoMjMuODZ2MjcuODJoMzIuNjhsNC42NS03OC4yOHpNNDQ4LjUyIDk3LjAyYzkuOS0yLjgzIDE2LjQ5LTguNTkgMTYuNDktMjAuNjcuMDMtMTMuODItMTEuMDYtMjIuNC0yNS4yOS0yMi40aC03My4yOGw0LjY1IDc4LjI5aDY0LjA2YzI3Ljk4IDAgMjYuMzktMTguOCAyNi4zOS0xOC44IDAtNy45Ni01LjMzLTE0LjYxLTEzLjAyLTE2LjQyem0tMzEuMDIgMjIuMjJoLTEzLjcxdi0xNC44M2gxMy4yMmM3LjIzIDAgMTEuMDkgMi4zMSAxMS4wOSA3LjQ4LjAxIDQuOTQtMy40OSA3LjM1LTEwLjYgNy4zNXptMS4wNi0yOS45MWgtMTQuNzdWNzMuMjVoMTQuMjVjNy44NSAwIDEyLjAzIDIuNSAxMi4wMyA4LjExIDAgNS4zNS0zLjc5IDcuOTctMTEuNTEgNy45N3pNMTgyLjc2IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4ek0zMjkuNjQgODkuMzNsLjkgMTUuMDhoMjIuMDNsLjktMTUuMDh6TTUyOC4zNCAxNzAuNzdjMC0yLjQ2LTEuNDYtMy41NC00LjQtMy41NGgtNC43NHYxMi40NGgxLjg4di01LjM5aDIuMTdsMy4yOCA1LjM5aDIuMTFsLTMuNTQtNS40OGMxLjg0LS4yMiAzLjI0LTEuMTkgMy4yNC0zLjQyem0tNy4yNSAxLjkydi0zLjg2aDIuNTdjMS4zMSAwIDIuNzEuMjkgMi43MSAxLjgzIDAgMS45Mi0xLjQzIDIuMDMtMy4wMyAyLjAzaC0yLjI1elwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJNNTIzLjM3IDE2Mi42N2MtNS45MyAwLTEwLjk2IDQuNTctMTAuOTYgMTAuNzYgMCA2LjI0IDUuMDIgMTAuODEgMTAuOTYgMTAuODEgNS44OCAwIDEwLjktNC41NyAxMC45LTEwLjgxIDAtNi4yLTUuMDItMTAuNzYtMTAuOS0xMC43NnptMCAxOS43OGMtNC45MyAwLTguNzktMy44My04Ljc5LTkuMDIgMC01LjExIDMuODUtOC45NiA4Ljc5LTguOTYgNC44OCAwIDguNzMgMy44NSA4LjczIDguOTYgMCA1LjE5LTMuODUgOS4wMi04LjczIDkuMDJ6XCIgY2xhc3M9XCJzdDFcIi8+PC9nPjwvc3ZnPmBcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGhlYkxvZ29JbnZlcnNlU3ZnQ29udGVudHM6IERpcmVjdGl2ZVJlc3VsdDx0eXBlb2YgVW5zYWZlU1ZHRGlyZWN0aXZlPiA9IHVuc2FmZVNWRyhcbiAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgaWQ9XCJMYXllcl8xXCIgeD1cIjBcIiB5PVwiMFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDUzNi4yNyAxODYuMjRcIj48c3R5bGU+LnN0MHtmaWxsOiNmZmZ9PC9zdHlsZT48cGF0aCBkPVwiTTQ0My4xNSAwSDkzLjEyQzQxLjY5IDAgMCA0MS42OSAwIDkzLjEyYzAgNTEuNDMgNDEuNjkgOTMuMTIgOTMuMTIgOTMuMTJoMzUwLjAzYzUxLjQzIDAgOTMuMTItNDEuNjkgOTMuMTItOTMuMTJDNTM2LjI3IDQxLjY5IDQ5NC41OCAwIDQ0My4xNSAwem0wIDE3NC4xOUg5My4xMmMtNDQuNzYgMC04MS4wNS0zNi4yOS04MS4wNS04MS4wNXMzNi4yOS04MS4wNSA4MS4wNS04MS4wNWgzNTAuMDNjNDQuNzYgMCA4MS4wNSAzNi4yOSA4MS4wNSA4MS4wNS4wMSA0NC43Ni0zNi4yOCA4MS4wNS04MS4wNSA4MS4wNXptLTEzLjA4LTkyLjgzYzAgNS4zNi0zLjc5IDcuOTgtMTEuNTEgNy45OGgtMTQuNzdWNzMuMjVoMTQuMjVjNy44NCAwIDEyLjAzIDIuNSAxMi4wMyA4LjExem0tMS45NiAzMC41M2MwIDQuOTQtMy41IDcuMzYtMTAuNjEgNy4zNmgtMTMuNzF2LTE0LjgzaDEzLjIyYzcuMjQtLjAxIDExLjEgMi4zIDExLjEgNy40N3ptMTYuODMtODcuNzgtMzUzLjY0LjAyYy0zNy4wNyAwLTY3LjIgMzAuOTUtNjcuMTYgNjkuMDcgMCAzNy45MiAzMC4xNiA2OC44OCA2Ny4xNiA2OC44OGwzNTMuNjMtLjA3YzM3LjEtLjAzIDY3LjE1LTMwLjg5IDY3LjItNjguODUtLjA0LTM4LjItMzAuMDktNjkuMDUtNjcuMTktNjkuMDV6bS0yNzkuOCAxMDguMTJoLTMyLjY4di0yNy44MkgxMDguNnYyNy44Mkg3NS45MmwtNC42NS03OC4yOGgzNy4zM3YzNS4zOGgyMy44NlY1My45NWgzNy4zM2wtNC42NSA3OC4yOHptNDAuNTUtMjcuODJoLTIyLjA0bC0uOS0xNS4wOGgyMy44M2wtLjg5IDE1LjA4em0xMTAuMTItMzEuMTctNTguOTIuMDF2MTYuMDhoNDQuODF2MTUuMDhoLTQ0LjgxdjE0LjgzaDU2LjE4bC0uNzYgMTIuOTloLTg4LjFsLTQuNjUtNzguMjhoOTcuNGwtMS4xNSAxOS4yOXptMzYuNzYgMzEuMTdoLTIyLjA0bC0uOS0xNS4wOGgyMy44M2wtLjg5IDE1LjA4em0xMDguOTcgOS4wM3MxLjU5IDE4LjgtMjYuMzkgMTguOGgtNjQuMDZsLTQuNjUtNzguMjloNzMuMjhjMTQuMjMgMCAyNS4zMSA4LjU4IDI1LjI5IDIyLjQgMCAxMi4wOC02LjU5IDE3Ljg1LTE2LjQ5IDIwLjY3IDcuNjkgMS44MSAxMy4wMiA4LjQ2IDEzLjAyIDE2LjQyek01MzAuMzQgMTcyLjc3YzAtMi40Ni0xLjQ2LTMuNTQtNC40LTMuNTRoLTQuNzR2MTIuNDRoMS44OHYtNS4zOWgyLjE3bDMuMjggNS4zOWgyLjExbC0zLjU0LTUuNDhjMS44NC0uMjIgMy4yNC0xLjE5IDMuMjQtMy40MnptLTcuMjUgMS45MnYtMy44NmgyLjU3YzEuMzEgMCAyLjcxLjI5IDIuNzEgMS44MyAwIDEuOTItMS40MyAyLjAzLTMuMDMgMi4wM2gtMi4yNXpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTUyNS4zNyAxNjQuNjdjLTUuOTMgMC0xMC45NiA0LjU3LTEwLjk2IDEwLjc2IDAgNi4yNCA1LjAyIDEwLjgxIDEwLjk2IDEwLjgxIDUuODggMCAxMC45LTQuNTcgMTAuOS0xMC44MSAwLTYuMi01LjAyLTEwLjc2LTEwLjktMTAuNzZ6bTAgMTkuNzhjLTQuOTMgMC04Ljc5LTMuODMtOC43OS05LjAyIDAtNS4xMSAzLjg1LTguOTYgOC43OS04Ljk2IDQuODggMCA4LjczIDMuODUgOC43MyA4Ljk2IDAgNS4xOS0zLjg1IDkuMDItOC43MyA5LjAyelwiIGNsYXNzPVwic3QwXCIvPjwvc3ZnPmBcbik7XG4iLCAiaW1wb3J0IHR5cGUgeyBSZWFjdGl2ZUNvbnRyb2xsZXIsIFJlYWN0aXZlQ29udHJvbGxlckhvc3QgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgU2lnbmFsLCBjb21wdXRlZCwgaXNTc3IsIHNpZ25hbCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdENvbnRyb2xsZXJPcHRpb25zIHtcbiAgLyoqIE5hbWVzIG9mIHNsb3RzIHRoYXQgc2hvdWxkIHRyaWdnZXIgYSBjb21wb25lbnQgdXBkYXRlIGlmIGNoYW5nZWQgKi9cbiAgdXBkYXRlT25DaGFuZ2U/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFNsb3RDb250cm9sbGVyIGltcGxlbWVudHMgUmVhY3RpdmVDb250cm9sbGVyIHtcbiAgcHVibGljIHNsb3RDaGFuZ2UgPSBzaWduYWw8U2V0PHN0cmluZz4+KG51bGwpO1xuICBwdWJsaWMgb25Db25uZWN0ZWQgPSBzaWduYWwoZmFsc2UpO1xuICBwdWJsaWMgY29ubmVjdGVkQ29tcGxldGUgPSBmYWxzZTtcblxuICBwcml2YXRlIHN1YnMgPSBbXTtcbiAgcHJpdmF0ZSB1cGRhdGVUcmlnZ2VyU2xvdHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaG9zdDogUmVhY3RpdmVDb250cm9sbGVySG9zdCAmIEVsZW1lbnQsXG4gICAgcHVibGljIG9wdGlvbnM6IFNsb3RDb250cm9sbGVyT3B0aW9ucyA9IG51bGxcbiAgKSB7XG4gICAgdGhpcy5ob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XG4gICAgdGhpcy51cGRhdGVPbkNoYW5nZShvcHRpb25zPy51cGRhdGVPbkNoYW5nZSk7XG4gIH1cblxuICAvKiogRW1pdHMgd2hlbiBvbmUgb2YgdGhlIHNwZWNpZmllZCBzbG90cyBoYXMgY2hhbmdlZCBhbmQgYWZ0ZXIgdGhlIGZpcnN0VXBkYXRlIGFmdGVyIGhvc3RDb25uZWN0ZWQgKi9cbiAgcHVibGljIHdhdGNoU2xvdHMoc2xvdHM6IHN0cmluZ1tdID0gW10sIHsgdXBkYXRlT25Db25uZWN0ZWQgfSA9IHsgdXBkYXRlT25Db25uZWN0ZWQ6IHRydWUgfSkge1xuICAgIGNvbnN0IHJldHVyblNpZ25hbCA9IHNpZ25hbDxTZXQ8c3RyaW5nPj4oKTtcbiAgICB0aGlzLnN1YnMucHVzaChcbiAgICAgIGNvbXB1dGVkKFxuICAgICAgICBbdGhpcy5vbkNvbm5lY3RlZCwgdGhpcy5zbG90Q2hhbmdlXSxcbiAgICAgICAgKFtjb25uZWN0ZWQsIGNoYW5nZXNdOiBbYm9vbGVhbiwgU2V0PHN0cmluZz5dLCBzZXQpID0+IHtcbiAgICAgICAgICBpZiAodXBkYXRlT25Db25uZWN0ZWQgJiYgY29ubmVjdGVkICYmICF0aGlzLmNvbm5lY3RlZENvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RlZENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldChuZXcgU2V0KHNsb3RzKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNoYW5nZXMgJiZcbiAgICAgICAgICAgIEFycmF5LmZyb20oY2hhbmdlcy5rZXlzKCkpLnNvbWUoKGtleSkgPT4gc2xvdHMubGVuZ3RoID09PSAwIHx8IHNsb3RzLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBzZXQoY2hhbmdlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApLnN1YnNjcmliZSgoY2hhbmdlczogU2V0PHN0cmluZz4pID0+IHtcbiAgICAgICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgICAgICByZXR1cm5TaWduYWwuc2V0KGNoYW5nZXMpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgcmV0dXJuIHJldHVyblNpZ25hbCBhcyBTaWduYWw8U2V0PHN0cmluZz4+O1xuICB9XG5cbiAgcHVibGljIGNoZWNrKHNsb3ROYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc2xvdE5hbWUgPT09ICdkZWZhdWx0JyA/IHRoaXMuaGFzRGVmYXVsdFNsb3QoKSA6IHRoaXMuaGFzTmFtZWRTbG90KHNsb3ROYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVPbkNoYW5nZShzbG90czogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzbG90cykpIHtcbiAgICAgIHNsb3RzLmZvckVhY2goKHNsb3QpID0+IHRoaXMudXBkYXRlVHJpZ2dlclNsb3RzLmFkZChzbG90KSk7XG4gICAgfSBlbHNlIGlmIChzbG90cykge1xuICAgICAgdGhpcy51cGRhdGVUcmlnZ2VyU2xvdHMuYWRkKHNsb3RzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhc0RlZmF1bHRTbG90KCkge1xuICAgIHJldHVybiBbLi4udGhpcy5ob3N0LmNoaWxkTm9kZXNdLnNvbWUoKG5vZGUpID0+IHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBub2RlLlRFWFRfTk9ERSAmJiBub2RlLnRleHRDb250ZW50Py50cmltKCkgIT09ICcnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgY29uc3QgZWwgPSBub2RlIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vIElnbm9yZSB2aXN1YWxseSBoaWRkZW4gZWxlbWVudHMgc2luY2UgdGhleSBhcmVuJ3QgcmVuZGVyZWRcbiAgICAgICAgaWYgKHRhZ05hbWUgPT09ICdtdGUtdmlzdWFsbHktaGlkZGVuJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGRvZXNuJ3QgaGF2ZSBhIHNsb3QgYXR0cmlidXRlLCBpdCdzIHBhcnQgb2YgdGhlIGRlZmF1bHQgc2xvdFxuICAgICAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgnc2xvdCcpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNOYW1lZFNsb3QobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LnF1ZXJ5U2VsZWN0b3IoYDpzY29wZSA+IFtzbG90PVwiJHtuYW1lfVwiXWApICE9PSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTbG90Q2hhbmdlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHNsb3QgPSBldmVudC50YXJnZXQgYXMgSFRNTFNsb3RFbGVtZW50O1xuXG4gICAgLy8gU2V0dXAgZXZlbnQgbWFwXG4gICAgY29uc3QgZXZlbnRTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICAvLyBBZGQgZHVwbGljYXRlIG1hcHBpbmcgZm9yIHNpbXBsaWZpZWQgZGVmYXVsdCBuYW1lXG4gICAgaWYgKHNsb3QubmFtZSA9PT0gJ1tkZWZhdWx0XScgfHwgc2xvdC5uYW1lID09PSAnJykge1xuICAgICAgZXZlbnRTZXQuYWRkKCdkZWZhdWx0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50U2V0LmFkZChzbG90Lm5hbWUpO1xuICAgIH1cblxuICAgIC8vIEVtaXQgc2xvdCBjaGFuZ2UgcmVhY3RpdmUgZXZlbnRcbiAgICB0aGlzLnNsb3RDaGFuZ2Uuc2V0KGV2ZW50U2V0KTtcblxuICAgIC8vIEF1dG9tYXRpY2FsbHkgcmVxdWVzdCBhIGNvbXBvbmVudCB1cGRhdGUgYXMgY29uZmlndXJhdGlvbiBkaWN0YXRlc1xuICAgIGlmIChcbiAgICAgICh0aGlzLnVwZGF0ZVRyaWdnZXJTbG90cy5oYXMoJ2RlZmF1bHQnKSAmJiAhc2xvdC5uYW1lKSB8fFxuICAgICAgKHNsb3QubmFtZSAmJiB0aGlzLnVwZGF0ZVRyaWdnZXJTbG90cy5oYXMoc2xvdC5uYW1lKSlcbiAgICApIHtcbiAgICAgIHRoaXMuaG9zdC5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIGhvc3RDb25uZWN0ZWQoKSB7XG4gICAgdGhpcy5ob3N0LnNoYWRvd1Jvb3Q/LmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCB0aGlzLmhhbmRsZVNsb3RDaGFuZ2UpO1xuXG4gICAgLy8gV2FpdCB1bnRpbCBmaXJzdCB1cGRhdGUgYWZ0ZXIgY29ubmVjdGVkXG4gICAgdGhpcy5ob3N0LnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5vbkNvbm5lY3RlZC5zZXQodHJ1ZSk7XG4gICAgICAvLyBUT0RPKHJlZWNlKTogcmVjb25zaWRlciB3aGVuIGEgc29sdXRpb24gZXhpc3RzIGZvciBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9pc3N1ZXMvMTQzNFxuICAgICAgLy8gSWYgYWZ0ZXIgdGhlIGZpcnN0VXBkYXRlIHdlJ3JlIHdhdGNoaW5nIHNsb3RzIHJlcXVlc3QgYW5vdGhlciBpbiBjYXNlIHNzci1zbG90cyB3YXMgbm90IHByb3Blcmx5IHNldCBieSB0aGUgdXNlclxuICAgICAgaWYgKHRoaXMudXBkYXRlVHJpZ2dlclNsb3RzLnNpemUgPiAwKSB7XG4gICAgICAgIHRoaXMuaG9zdC5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBob3N0RGlzY29ubmVjdGVkKCkge1xuICAgIHRoaXMuaG9zdC5zaGFkb3dSb290Py5yZW1vdmVFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgdGhpcy5oYW5kbGVTbG90Q2hhbmdlKTtcbiAgICB0aGlzLnN1YnMuZm9yRWFjaCgodW5zdWIpID0+IHVuc3ViKCkpO1xuICAgIHRoaXMuc3VicyA9IFtdO1xuICAgIHRoaXMuY29ubmVjdGVkQ29tcGxldGUgPSBmYWxzZTtcbiAgICB0aGlzLm9uQ29ubmVjdGVkLnNldChmYWxzZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIHNsb3QsIHRoaXMgZnVuY3Rpb24gaXRlcmF0ZXMgb3ZlciBhbGwgb2YgaXRzIGFzc2lnbmVkIGVsZW1lbnQgYW5kIHRleHQgbm9kZXMgYW5kIHJldHVybnMgdGhlIGNvbmNhdGVuYXRlZFxuICogSFRNTCBhcyBhIHN0cmluZy4gVGhpcyBpcyB1c2VmdWwgYmVjYXVzZSB3ZSBjYW4ndCB1c2Ugc2xvdC5pbm5lckhUTUwgYXMgYW4gYWx0ZXJuYXRpdmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbm5lckhUTUwoc2xvdDogSFRNTFNsb3RFbGVtZW50KTogc3RyaW5nIHtcbiAgY29uc3Qgbm9kZXMgPSBzbG90LmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pO1xuICBsZXQgaHRtbCA9ICcnO1xuXG4gIFsuLi5ub2Rlc10uZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgaHRtbCArPSAobm9kZSBhcyBIVE1MRWxlbWVudCkub3V0ZXJIVE1MO1xuICAgIH1cblxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgaHRtbCArPSBub2RlLnRleHRDb250ZW50O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGh0bWw7XG59XG5cbi8qKlxuICogR2l2ZW4gYSBzbG90LCB0aGlzIGZ1bmN0aW9uIGl0ZXJhdGVzIG92ZXIgYWxsIG9mIGl0cyBhc3NpZ25lZCB0ZXh0IG5vZGVzIGFuZCByZXR1cm5zIHRoZSBjb25jYXRlbmF0ZWQgdGV4dCBhcyBhXG4gKiBzdHJpbmcuIFRoaXMgaXMgdXNlZnVsIGJlY2F1c2Ugd2UgY2FuJ3QgdXNlIHNsb3QudGV4dENvbnRlbnQgYXMgYW4gYWx0ZXJuYXRpdmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0Q29udGVudChzbG90OiBIVE1MU2xvdEVsZW1lbnQgfCB1bmRlZmluZWQgfCBudWxsKTogc3RyaW5nIHtcbiAgaWYgKCFzbG90KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGNvbnN0IG5vZGVzID0gc2xvdC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KTtcbiAgbGV0IHRleHQgPSAnJztcblxuICBbLi4ubm9kZXNdLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIHRleHQgKz0gbm9kZS50ZXh0Q29udGVudDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0ZXh0O1xufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG5pbXBvcnQge1xuICBjb25maWcgYXMgZ2V0dGVyQ29uZmlnLFxuICBzZXRDb25maWcgYXMgc2V0dGVyQ29uZmlnLFxuICBNb3J0YXJUaGVtZUNvbmZpZyxcbn0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgU3Vic2V0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNTc3IsIHNpZ25hbCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCB0eXBlIE10ZVRoZW1lID0gJ2RlZmF1bHQnIHwgJ3B4TGlnaHQnIHwgJ2N4TGlnaHQnIHwgJ3J4TGlnaHQnO1xuXG5leHBvcnQgdHlwZSBNdGVDb2xvclNjaGVtZSA9ICdsaWdodCcgfCAnZGFyaycgfCAnc3lzdGVtJztcblxuY29uc3QgQ0FDSEVfVE9fS0VZID0gJ210ZS50aGVtZS5jYWNoZS10byc7XG5jb25zdCBDT0xPUl9TQ0hFTUVfS0VZID0gJ210ZS50aGVtZS5nbG9iYWwtY29sb3Itc2NoZW1lJztcblxuY2xhc3MgX010ZVRoZW1lU2VydmljZSB7XG4gIGNvbmZpZyA9IGdldHRlckNvbmZpZztcblxuICBwcml2YXRlIHJvb3RPYnNlcnZlcj86IE11dGF0aW9uT2JzZXJ2ZXI7XG4gIHByaXZhdGUgdGhlbWVTaWduYWwgPSBzaWduYWw8TXRlVGhlbWUgfCBudWxsPih0aGlzLmdldEdsb2JhbFRoZW1lKCkpO1xuICBwcml2YXRlIGNvbG9yU2NoZW1lU2lnbmFsID0gc2lnbmFsPE10ZUNvbG9yU2NoZW1lIHwgbnVsbD4odGhpcy5nZXRHbG9iYWxDb2xvclNjaGVtZSgpID8/ICdsaWdodCcpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdENhY2hlKCk7XG4gIH1cblxuICAvKiogQ29uZmlndXJlcyB0aGUgYE10ZVRoZW1lU2VydmljZWAgdG8gY2FjaGUgY29sb3Itc2NoZW1lIGNoYW5nZXMgdG8gYGxvY2FsU3RvcmFnZWAsIGBzZXNzaW9uU3RvcmFnZWAsIG9yIG5laXRoZXIuICovXG4gIHB1YmxpYyBjYWNoZUNvbG9yU2NoZW1lVG8obWV0aG9kOiAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZScpIHtcbiAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBDbGVhciBhbGwga2V5cyBmcm9tIGFsbCBzdG9yYWdlIGxvY2F0aW9ucyBpZiBub25lXG4gICAgaWYgKG1ldGhvZCA9PT0gJ25vbmUnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShDT0xPUl9TQ0hFTUVfS0VZKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB0cnkge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oQ09MT1JfU0NIRU1FX0tFWSk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50U2NoZW1lID0gdGhpcy5jb2xvclNjaGVtZVNpZ25hbC5nZXQoKTtcbiAgICAvLyBTZXQgY2FjaGUgbWV0aG9kIGluIHN0b3JhZ2UgLSBUcnkgbG9jYWxTdG9yYWdlIGZpcnN0XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENBQ0hFX1RPX0tFWSwgbWV0aG9kKTtcbiAgICAgIGlmIChjdXJyZW50U2NoZW1lKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENPTE9SX1NDSEVNRV9LRVksIGN1cnJlbnRTY2hlbWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdNdGVUaGVtZVNlcnZpY2U6IENvdWxkIG5vdCBzZXQgY29sb3Igc2NoZW1lIGNhY2hlIG1ldGhvZCB0byBgbG9jYWxTdG9yYWdlYC4gQXR0ZW1wdGluZyBmYWxsYmFjayB0byBgc2Vzc2lvblN0b3JhZ2VgLiBDYWNoaW5nIHdpbGwgb25seSBoYXBwZW4gdG8gc2Vzc2lvblN0b3JhZ2UuJ1xuICAgICAgKTtcbiAgICAgIC8vIFRyeSBzZXNzaW9uU3RvcmFnZSBuZXh0XG4gICAgICB0cnkge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKENBQ0hFX1RPX0tFWSwgJ3Nlc3Npb25TdG9yYWdlJyk7XG4gICAgICAgIGlmIChjdXJyZW50U2NoZW1lKSB7XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShDT0xPUl9TQ0hFTUVfS0VZLCBjdXJyZW50U2NoZW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdNdGVUaGVtZVNlcnZpY2U6IENvdWxkIG5vdCBzZXQgY29sb3Igc2NoZW1lIGNhY2hlIG1ldGhvZCB0byBgbG9jYWxTdG9yYWdlYCBvciBgc2Vzc2lvblN0b3JhZ2VgLiBDYWNoaW5nIG5vdCBlbmFibGVkLidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgY3VycmVudCBnbG9iYWwgdGhlbWUgb24gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIHNldEdsb2JhbFRoZW1lKHRoZW1lOiBNdGVUaGVtZSkge1xuICAgIGlmICghdGhlbWUgfHwgdHlwZW9mIHRoZW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdGVUaGVtZVNlcnZpY2U6IEdsb2JhbCB0aGVtZSBwYXJhbSBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICAgIH1cbiAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgIGlmICh0aGVtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2RhdGEtbXRlLXRoZW1lJywgdGhlbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbXRlLXRoZW1lJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldHMgdGhlIGN1cnJlbnQgZ2xvYmFsIGNvbG9yLXNjaGVtZSBvbiB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgc2V0R2xvYmFsQ29sb3JTY2hlbWUoY29sb3JTY2hlbWU6IE10ZUNvbG9yU2NoZW1lKSB7XG4gICAgaWYgKCFjb2xvclNjaGVtZSB8fCB0eXBlb2YgY29sb3JTY2hlbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ010ZVRoZW1lU2VydmljZTogR2xvYmFsIGNvbG9yU2NoZW1lIHBhcmFtIG11c3QgYmUgYSBzdHJpbmcuJyk7XG4gICAgfVxuICAgIGNvbnN0IHNjaGVtZSA9IGNvbG9yU2NoZW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHNjaGVtZSA9PT0gJ2RhcmsnIHx8IHNjaGVtZSA9PT0gJ2xpZ2h0JyB8fCBzY2hlbWUgPT09ICdzeXN0ZW0nKSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZScsIHNjaGVtZSk7XG4gICAgICB0aGlzLnNldENhY2hlVmFsdWUoQ09MT1JfU0NIRU1FX0tFWSwgY29sb3JTY2hlbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBjdXJyZW50IGdsb2JhbCB0aGVtZSBmcm9tIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBnZXRHbG9iYWxUaGVtZSgpOiBNdGVUaGVtZSB8IG51bGwge1xuICAgIGNvbnN0IHZhbHVlID0gZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCdkYXRhLW10ZS10aGVtZScpIGFzIE10ZVRoZW1lO1xuICAgIGlmICghWydkZWZhdWx0JywgJ3B4TGlnaHQnLCAnY3hMaWdodCcsICdyeExpZ2h0J10uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlIGFzIE10ZVRoZW1lO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBjdXJyZW50IGdsb2JhbCBjb2xvci1zY2hlbWUgZnJvbSB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgZ2V0R2xvYmFsQ29sb3JTY2hlbWUoKTogTXRlQ29sb3JTY2hlbWUgfCBudWxsIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZShcbiAgICAgICdkYXRhLW10ZS1jb2xvci1zY2hlbWUnXG4gICAgKSBhcyBNdGVDb2xvclNjaGVtZTtcbiAgICBpZiAoIVsnbGlnaHQnLCAnZGFyaycsICdzeXN0ZW0nXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgYXMgTXRlQ29sb3JTY2hlbWU7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgYSByZWFjdGl2ZSBzaWduYWwgdGhhdCB3aWxsIHVwZGF0ZSBhbnkgdGltZSB0aGUgZ2xvYmFsIHRoZW1lIGNoYW5nZXMgKi9cbiAgcHVibGljIHNlbGVjdEdsb2JhbFRoZW1lKCkge1xuICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgcmV0dXJuIHRoaXMudGhlbWVTaWduYWw7XG4gIH1cblxuICAvKiogUmV0dXJucyBhIHJlYWN0aXZlIHNpZ25hbCB0aGF0IHdpbGwgdXBkYXRlIGFueSB0aW1lIHRoZSBnbG9iYWwgY29sb3Itc2NoZW1lIGNoYW5nZXMgKi9cbiAgcHVibGljIHNlbGVjdEdsb2JhbENvbG9yU2NoZW1lKCkge1xuICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgcmV0dXJuIHRoaXMuY29sb3JTY2hlbWVTaWduYWw7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgdmFsdWUgb2YgYWxsIG9mIHRoZSBnaXZlbiB0aGVtZSB2YXJpYWJsZXMgb24gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIHNldChcbiAgICBjb25maWdGbk9yT2JqOlxuICAgICAgfCBTdWJzZXQ8TW9ydGFyVGhlbWVDb25maWc+XG4gICAgICB8ICgoY29uZmlnOiBNb3J0YXJUaGVtZUNvbmZpZykgPT4gU3Vic2V0PE1vcnRhclRoZW1lQ29uZmlnPilcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWdGbk9yT2JqID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25maWdGbk9yT2JqID0gY29uZmlnRm5Pck9iaih0aGlzLmNvbmZpZyk7XG4gICAgfVxuICAgIGNvbnN0IG1hcHBpbmdzID0gdGhpcy5mbGF0dGVuUGF0aHMoY29uZmlnRm5Pck9iaik7XG4gICAgbWFwcGluZ3MuZm9yRWFjaCgoW3BhdGgsIHZhbF0pID0+IHtcbiAgICAgIGNvbnN0IGNzc1ZhciA9IHBhdGgucmVkdWNlKChhY2MsIHByb3ApID0+IHtcbiAgICAgICAgcmV0dXJuIGFjY1twcm9wXTtcbiAgICAgIH0sIHNldHRlckNvbmZpZyk7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5zdHlsZS5zZXRQcm9wZXJ0eShjc3NWYXIsIGAke3ZhbH1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciB0aGUgcmVxdWVzdGVkIHRoZW1lIHZhcmlhYmxlIGZyb20gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIGdldDxUPihrMTogKHRoZW1lQ29uZmlnOiBNb3J0YXJUaGVtZUNvbmZpZykgPT4gVCk6IFQ7XG4gIHB1YmxpYyBnZXQ8SzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZz4oazE6IEsxKTogTW9ydGFyVGhlbWVDb25maWdbSzFdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdPihcbiAgICBrMTogSzEsXG4gICAgazI6IEsyXG4gICk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1cbiAgPihrMTogSzEsIGsyOiBLMiwgazM6IEszKTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM107XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl0sXG4gICAgSzQgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVxuICA+KGsxOiBLMSwgazI6IEsyLCBrMzogSzMsIGs0OiBLNCk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXSxcbiAgICBLNCBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdLFxuICAgIEs1IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMywgazQ6IEs0LCBrNTogSzUpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM10sXG4gICAgSzUgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF0sXG4gICAgSzYgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMywgazQ6IEs0LCBrNTogSzUsIGs2OiBLNik6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVtLNV1bSzZdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM10sXG4gICAgSzUgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF0sXG4gICAgSzYgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdXG4gID4oXG4gICAgLi4ua2V5czpcbiAgICAgIHwgW0sxXVxuICAgICAgfCBbSzEsIEsyXVxuICAgICAgfCBbSzEsIEsyLCBLM11cbiAgICAgIHwgW0sxLCBLMiwgSzMsIEs0XVxuICAgICAgfCBbSzEsIEsyLCBLMywgSzQsIEs1XVxuICAgICAgfCBbSzEsIEsyLCBLMywgSzQsIEs1LCBLNl1cbiAgKTogYW55IHtcbiAgICBjb25zdCBbZm5dID0ga2V5cyA/PyBbbnVsbF07XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgY3NzVmFyID0gKGZuIGFzIGFueSkoc2V0dGVyQ29uZmlnKTtcbiAgICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGdsb2JhbFRoaXM/LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShjc3NWYXIpO1xuICAgIH1cbiAgICBjb25zdCBjc3NWYXIgPSBrZXlzLnJlZHVjZSgoYWNjOiBhbnksIGtleSkgPT4gYWNjW2tleV0sIHNldHRlckNvbmZpZyBhcyBhbnkpIGFzIHN0cmluZztcbiAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShnbG9iYWxUaGlzPy5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoY3NzVmFyKTtcbiAgfVxuXG4gIC8qKiBGbGF0dGVucyBhIGdpdmVuIG9iamVjdCB0byBhbiBhcnJheSBvZiBwYXRoIGtleXMgYW5kIGl0cyByZXN1bHRpbmcgdmFsdWUgKi9cbiAgcHJpdmF0ZSBmbGF0dGVuUGF0aHMob2JqOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBwYXRoOiBzdHJpbmdbXSA9IFtdKTogW3N0cmluZ1tdLCBhbnldW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IG5lc3RlZCA9IG9ialtrZXldO1xuICAgICAgaWYgKHR5cGVvZiBuZXN0ZWQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHBhdGgucHVzaChrZXkpO1xuICAgICAgICBPYmplY3QuYXNzaWduKGFjYywgdGhpcy5mbGF0dGVuUGF0aHMobmVzdGVkLCBwYXRoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoLnB1c2goa2V5KTtcbiAgICAgICAgYWNjLnB1c2goW3BhdGgsIG5lc3RlZF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU11dGF0aW9uRXZlbnQgPSAobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSB7XG4gICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGF0YS1tdGUtY29sb3Itc2NoZW1lJykge1xuICAgICAgICAgIHRoaXMuY29sb3JTY2hlbWVTaWduYWwuc2V0KHRoaXMuZ2V0R2xvYmFsQ29sb3JTY2hlbWUoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2RhdGEtbXRlLXRoZW1lJykge1xuICAgICAgICAgIHRoaXMudGhlbWVTaWduYWwuc2V0KHRoaXMuZ2V0R2xvYmFsVGhlbWUoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBpbml0Q2FjaGUoKSB7XG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2FjaGVDb2xvclNjaGVtZSA9IHRoaXMuZ2V0Q2FjaGVWYWx1ZShDT0xPUl9TQ0hFTUVfS0VZKTtcbiAgICAgICAgaWYgKGNhY2hlQ29sb3JTY2hlbWUgJiYgY2FjaGVDb2xvclNjaGVtZSAhPT0gJycpIHtcbiAgICAgICAgICB0aGlzLnNldEdsb2JhbENvbG9yU2NoZW1lKGNhY2hlQ29sb3JTY2hlbWUgYXMgTXRlQ29sb3JTY2hlbWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdE9ic2VydmVyKCkge1xuICAgIGlmICghaXNTc3IoKSAmJiAhdGhpcy5yb290T2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMucm9vdE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5oYW5kbGVNdXRhdGlvbkV2ZW50KTtcbiAgICAgIHRoaXMucm9vdE9ic2VydmVyLm9ic2VydmUoZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnZGF0YS1tdGUtdGhlbWUnLCAnZGF0YS1tdGUtY29sb3Itc2NoZW1lJ10sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENhY2hlTWV0aG9kKCk6ICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJyB8IG51bGwge1xuICAgIC8vIFJldHJpZXZlIGNhY2hlIG1ldGhvZFxuICAgIGxldCBjYWNoZU1ldGhvZDogJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnIHwgbnVsbCA9IG51bGw7XG4gICAgLy8gVHJ5IGxvY2FsU3RvcmFnZVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBjYWNoZU1ldGhvZCA9IHZhbCBhcyAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZSc7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gVHJ5IHNlc3Npb25TdG9yYWdlXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB2YWwgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICBjYWNoZU1ldGhvZCA9IHZhbCBhcyAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIHJldHVybiBjYWNoZU1ldGhvZDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2FjaGVWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGNhY2hlTWV0aG9kID0gdGhpcy5nZXRDYWNoZU1ldGhvZCgpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoY2FjaGVNZXRob2QgPT09ICdsb2NhbFN0b3JhZ2UnKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChjYWNoZU1ldGhvZCA9PT0gJ3Nlc3Npb25TdG9yYWdlJykge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cblxuICBwcml2YXRlIGdldENhY2hlVmFsdWUoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjYWNoZU1ldGhvZCA9IHRoaXMuZ2V0Q2FjaGVNZXRob2QoKTtcbiAgICB0cnkge1xuICAgICAgaWYgKGNhY2hlTWV0aG9kID09PSAnbG9jYWxTdG9yYWdlJykge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIH0gZWxzZSBpZiAoY2FjaGVNZXRob2QgPT09ICdzZXNzaW9uU3RvcmFnZScpIHtcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVUaGVtZVNlcnZpY2UgPSBuZXcgX010ZVRoZW1lU2VydmljZSgpO1xuIiwgImltcG9ydCB7IGlzU3NyLCBpc1BsYXRmb3JtIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IHR5cGUgUG9ydGFsU3RhY2sgPSAnb3ZlcmxheSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydGFsZWRFbGVtZW50TWV0YWRhdGEge1xuICBlbGVtZW50OiBFbGVtZW50O1xuICBzdGFjazogUG9ydGFsU3RhY2s7XG4gIGNoaWxkUG9ydGFsZWRFbGVtZW50czogU2V0PEVsZW1lbnQ+O1xuICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ/OiBFbGVtZW50O1xuICBiYWNrZHJvcD86IEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudFBvcnRhbENvbnRyb2xsZXIge1xuICBpZDogbnVtYmVyO1xuICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ6IEVsZW1lbnQ7XG4gIG9wdGlvbnM6IHsgc3RhY2s6IFBvcnRhbFN0YWNrIH07XG59XG5cbmV4cG9ydCB0eXBlIFBvcnRhbEFkYXB0ZXI8VCA9IGFueT4gPSAoXG4gIHBvcnRhbEVsZW1lbnQ6IFQsXG4gIG91dGxldEVsZW1lbnQ6IEVsZW1lbnRcbikgPT4gUHJvbWlzZTxhbnk+IHwgYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRhbE9wdGlvbnMge1xuICAvKiogUmVuZGVycyB0aGUgYmFja2Ryb3AgZGltbWVkICovXG4gIHdpdGhEaW1CYWNrZHJvcD86IGJvb2xlYW47XG5cbiAgLyoqIE1ha2VzIHRoZSBiYWNrZHJvcCBpZ25vcmUgcG9pbnRlciBldmVudHMuIFVzZWZ1bCBmb3IgdHJpZ2dlck9uIFwiaG92ZXJcIi4gKi9cbiAgd2l0aEluZXJ0QmFja2Ryb3A/OiBib29sZWFuO1xuXG4gIC8qKiBEaXNhYmxlcyB0aGUgYWJpbGl0eSB0byBzY3JvbGwgdGhlIHBhZ2UgYmVoaW5kIHRoZSBvdmVybGF5IHdoZW4gdHJ1ZSAqL1xuICB3aXRoU2Nyb2xsTG9jaz86IGJvb2xlYW47XG5cbiAgLyoqIENhbGxiYWNrIGZvciBoYW5kbGluZyBjbG9zZU9uQ2xpY2tPdXRzaWRlIGV2ZW50cyB3aGVuIHRoZSBwb3J0YWwncyBiYWNrZHJvcCBpcyBjbGlja2VkICovXG4gIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyPzogKCkgPT4gYW55O1xuXG4gIC8qKiBUaGUgYW5pbWF0aW9uIGR1cmF0aW9uIGZvciBmYWRpbmcgYSBzaGFkb3cgYmFja2Ryb3AgaW4vb3V0ICovXG4gIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuXG4gIC8qKiBBZGFwdGVyIGZvciBcInBvcnRhbGluZ1wiIGFuIGVsZW1lbnQgZnJvbSBvbmUgbG9jYXRpb24gaW4gdGhlIERPTSB0byBhbm90aGVyLiBMZXZlcmFnZWQgYnkgZnJhbWV3b3JrIHdyYXBwZXJzIGZvciBpbXByb3ZlZCBpbnRlcm9wLiAqL1xuICBwb3J0YWxBZGFwdGVyPzogUG9ydGFsQWRhcHRlcjtcbn1cblxuLyoqIERlZmF1bHQgbmF0aXZlIERPTSBhZGFwdGVyIGZvciBwb3J0YWxpbmcgYW4gZWxlbWVudCB0byBhbm90aGVyIHRhcmdldCBlbGVtZW50ICovXG5leHBvcnQgY29uc3QgZGVmYXVsdFBvcnRhbEFkYXB0ZXI6IFBvcnRhbEFkYXB0ZXIgPSAocG9ydGFsRWxlbSwgb3V0bGV0RWxlbSkgPT4ge1xuICBvdXRsZXRFbGVtPy5hcHBlbmRDaGlsZChwb3J0YWxFbGVtKTtcbn07XG5cbmNsYXNzIF9NdGVQb3J0YWxTZXJ2aWNlIHtcbiAgLyoqIFNoYXJlZCBnbG9iYWwgY29uc3QgZm9yIHN0YWNrIGVsZW1lbnQgcmVmcyAqL1xuICBwcml2YXRlIHN0YWNrRWxlbWVudHM6IHsgb3ZlcmxheTogRWxlbWVudCB9ID0ge1xuICAgIG92ZXJsYXk6IHVuZGVmaW5lZCxcbiAgfTtcblxuICAvKiogU2hhcmVkIGdsb2JhbCBjb25zdCBmb3IgcG9ydGFsZWQgZWxlbWVudHMgbWV0YWRhdGEgKi9cbiAgcHJpdmF0ZSBwb3J0YWxlZEVsZW1lbnRzID0gbmV3IE1hcDxudW1iZXIsIE1hcDxFbGVtZW50LCBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YT4+KCk7XG5cbiAgcHJpdmF0ZSBhY3RpdmVTY3JvbGxMb2NrcyA9IG5ldyBTZXQ8RWxlbWVudD4oKTtcblxuICBwcml2YXRlIHN0YWNrTXV0YXRpb25PYnNlcnZlcj86IE11dGF0aW9uT2JzZXJ2ZXI7XG5cbiAgLyoqXG4gICAqIFdoZW4gY2FsbGVkLCB0aGlzIHNlcnZpY2Ugd2lsbCBhdHRlbXB0IHRvIGxvY2F0ZSB0aGUgYEBhbmd1bGFyL2Nka2Agb3ZlcmxheSBzdGFjay5cbiAgICogSWYgZm91bmQgdGhpcyBzZXJ2aWNlIHdpbGwgYmUgY29uZmlndXJlZCB0byB1c2UgdGhhdCBlbGVtZW50IGFzIHRoZSBgb3ZlcmxheWAgc3RhY2sgaW5zdGVhZCBvZiBpbml0aWFsaXppbmcgaXRzIG93bi5cbiAgICovXG4gIHB1YmxpYyBjb25maWd1cmVDZGtJbnRlcm9wKCkge1xuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgY29uc3QgY2RrU3RhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2RrLW92ZXJsYXktY29udGFpbmVyJyk7XG4gICAgICBpZiAoY2RrU3RhY2spIHtcbiAgICAgICAgdGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkgPSBjZGtTdGFjaztcbiAgICAgICAgdGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCh0aGlzLmlkRmFjdG9yeSgnb3ZlcmxheScpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgcG9ydGFsIGNvbnRyb2xsZXIuIEFsbCBpdGVtcyBpdCByZXF1ZXN0ZWQgdG8gYmUgcG9ydGFsZWQgd2lsbCBiZSB0cmFjayBhZ2FpbnN0IGl0LlxuICAgKiBXaGVuIHRoZSBwb3J0YWwgaXMgcmVtb3ZlZCB3ZSBjYW4gdGhlbiByZW1vdmUgYW55IGVsZW1lbnRzIGl0IGN1cnJlbnRseSBoYXMgcG9ydGFsZWQgYW5kXG4gICAqIGFueSBvZiB0aGVpciBwb3J0YWxlZCBjaGlsZHJlbi5cbiAgICovXG4gIHB1YmxpYyBhZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyKSB7XG4gICAgaWYgKCF0aGlzLnBvcnRhbGVkRWxlbWVudHMuaGFzKHBvcnRhbENvbnRyb2xsZXI/LmlkKSkge1xuICAgICAgLy8gVHJhY2sgaW4gc2V0IGJ5IElEIHNvIHdlIGRvbid0IGtlZXAgYSBsaXZlIHJlZmVyZW5jZSB0byB0aGUgY29udHJvbGxlciBpdHNlbGZcbiAgICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5zZXQocG9ydGFsQ29udHJvbGxlci5pZCwgbmV3IE1hcDxFbGVtZW50LCBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YT4oKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlbW92ZXMgYWxsIG9mIGEgcG9ydGFsIGNvbnRyb2xsZXJzIHBvcnRhbGVkIGVsZW1lbnRzIGFuZCB0aGVpciByZWZlcmVuY2VzICovXG4gIHB1YmxpYyByZW1vdmVDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyKSB7XG4gICAgLy8gQXR0ZW1wdCB0byByZW1vdmUgYWxsIGl0ZW1zIGF0dGFjaGVkIGJ5IHRoaXMgY29udHJvbGxlciBmcm9tIHRoZSBjb25maWd1cmVkIHN0YWNrXG4gICAgY29uc3QgYXR0YWNoZWRFbGVtZW50cyA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCk7XG4gICAgaWYgKGF0dGFjaGVkRWxlbWVudHMpIHtcbiAgICAgIGF0dGFjaGVkRWxlbWVudHMuZm9yRWFjaCgoaXRlbSkgPT4gdGhpcy5yZW1vdmVGcm9tU3RhY2socG9ydGFsQ29udHJvbGxlciwgaXRlbS5lbGVtZW50KSk7XG4gICAgfVxuICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5kZWxldGUocG9ydGFsQ29udHJvbGxlci5pZCk7XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlcyBhIHJlZiB0byB0aGUgY29uZmlndXJlZCBzdGFjayBleGlzdHMuIElmIGl0IGRvZXMgbm90LCB0aGUgY29uZmlndXJlZCBzdGFjayB3aWxsXG4gICAqIGJlIGNyZWF0ZWQgYW5kIGFwcGVuZGVkIHRvIHRoZSBkb2N1bWVudC4gRG9lcyBub3RoaW5nIGR1cmluZyBTU1IuXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZVN0YWNrKHN0YWNrOiBQb3J0YWxTdGFjaykge1xuICAgIGlmIChzdGFjayAhPT0gJ292ZXJsYXknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3ZlcmxheSBTdGFjazogXCIke3N0YWNrfVwiIG11c3QgYmUgJ292ZXJsYXknIGF0IHRoaXMgdGltZS5gKTtcbiAgICB9XG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10pIHtcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWRGYWN0b3J5KHN0YWNrKSk7XG4gICAgICAgIHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10gPVxuICAgICAgICAgIGVsZW0gPz9cbiAgICAgICAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuaWRGYWN0b3J5KHN0YWNrKSxcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdICYmICF0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kU3RhY2tUb0RvbSh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdKTtcblxuICAgICAgICAvLyBJbml0IG11dGF0aW9uIG9ic2VydmVyXG4gICAgICAgIC8vIFRoaXMgd2lsbCB3YXRjaCBmb3IgYW55dGltZSB0aGUgc3RhY2sgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET00gZm9yIHNvbWUgcmVhc29uXG4gICAgICAgIC8vIElmIGl0IGlzLCBpdCB3aWxsIHJlLWF0dGFjaCBpdCB0byB0aGUgRE9NIGFmdGVyIHRoZSBuZXh0IHRpY2tcbiAgICAgICAgaWYgKCF0aGlzLnN0YWNrTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgIHRoaXMuc3RhY2tNdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG1sLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtbCkge1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJlbW92ZWROb2RlIG9mIG11dGF0aW9uLnJlbW92ZWROb2Rlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkTm9kZSA9PT0gdGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsSXRlbXNGcm9tU3RhY2tzKCk7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRTdGFja1RvRG9tKHRoaXMuc3RhY2tFbGVtZW50cy5vdmVybGF5KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdPy5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5zdGFja011dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdLnBhcmVudE5vZGUsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgc3VidHJlZTogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZFN0YWNrVG9Eb20oc3RhY2tFbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKHN0YWNrRWxlbWVudCAmJiAhc3RhY2tFbGVtZW50LmlzQ29ubmVjdGVkKSB7XG4gICAgICBjb25zdCB0b2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbXRlLXRvYXN0LWNvbnRhaW5lcicpO1xuICAgICAgaWYgKHRvYXN0Q29udGFpbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHN0YWNrRWxlbWVudCwgdG9hc3RDb250YWluZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoc3RhY2tFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogQXBwZW5kcyBhbiBpdGVtIHRvIHRoZSBjb25maWd1cmVkIHBvcnRhbCBzdGFjayAqL1xuICBwdWJsaWMgYXBwZW5kVG9TdGFjayhcbiAgICBwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlcixcbiAgICBlbGVtZW50OiBFbGVtZW50LFxuICAgIHtcbiAgICAgIHdpdGhEaW1CYWNrZHJvcCA9IGZhbHNlLFxuICAgICAgd2l0aEluZXJ0QmFja2Ryb3AgPSBmYWxzZSxcbiAgICAgIHdpdGhTY3JvbGxMb2NrID0gZmFsc2UsXG4gICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyLFxuICAgICAgcG9ydGFsQWRhcHRlciA9IGRlZmF1bHRQb3J0YWxBZGFwdGVyLFxuICAgIH06IFBvcnRhbE9wdGlvbnMgPSB7fVxuICApIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnRQb3J0YWxlZEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudFBvcnRhbGVkRWxlbWVudChwb3J0YWxDb250cm9sbGVyLCBlbGVtZW50KTtcbiAgICAgIGNvbnN0IHN0YWNrTmFtZSA9IHBvcnRhbENvbnRyb2xsZXIub3B0aW9ucy5zdGFjaztcbiAgICAgIGNvbnN0IHN0YWNrID0gdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrTmFtZV07XG4gICAgICBjb25zdCBhdHRhY2hlZEVsZW1lbnRzID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKTtcblxuICAgICAgY29uc3QgYmFja2Ryb3AgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ210ZS1wb3J0YWxfX2JhY2tkcm9wJyxcbiAgICAgICAgLi4uKGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uXG4gICAgICAgICAgPyB7IHN0eWxlOiBgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHtiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbn07YCB9XG4gICAgICAgICAgOiB7fSksXG4gICAgICB9KTtcblxuICAgICAgLy8gSGFuZGxlIGJhY2tkcm9wIHN0eWxpbmdcbiAgICAgIGlmICh3aXRoSW5lcnRCYWNrZHJvcCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0taW5lcnQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh3aXRoRGltQmFja2Ryb3ApIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXNoYWRvdycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXRyYW5zcGFyZW50Jyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGVuZCBiYWNrZHJvcFxuICAgICAgc3RhY2s/LmFwcGVuZENoaWxkKGJhY2tkcm9wKTtcblxuICAgICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICAgIC8vIEFkZCBsaXN0ZW5lciBpZiBjbGljayBoYW5kbGVyIGlzIHByZXNlbnRcbiAgICAgICAgaWYgKGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyKSB7XG4gICAgICAgICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXIpO1xuICAgICAgICAgIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYmFja2Ryb3Agc2hvdWxkIGJlIGRpbSwgYW5pbWF0ZSBpdCBhZnRlciBpdCBoYXMgYmVlbiBhcHBlbmRlZCB0byB0aGUgZG9tXG4gICAgICAgIGlmICh3aXRoRGltQmFja2Ryb3ApIHtcbiAgICAgICAgICBnbG9iYWxUaGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0tc2hvdycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGx5IHNjcm9sbCBsb2NrXG4gICAgICAgIGlmICh3aXRoU2Nyb2xsTG9jaykge1xuICAgICAgICAgIHRoaXMuYXBwbHlTY3JvbGxMb2NrKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFdhaXQgZm9yIFJlYWN0IChvciBvdGhlciBmdXR1cmUgZnJhbWV3b3JrIGFkYXB0ZXIpIHRvIGFwcGVuZCBlbGVtZW50IHRvIG5ld1xuICAgICAgLy8gbG9jYXRpb24gaW4gdGhlIERPTSBiZWZvcmUgYWRkaW5nIHRvIHN0YWNrLiBEb2luZyBzbyB0cmlnZ2VycyBgaG9zdERpc2Nvbm5lY3RlZGBcbiAgICAgIC8vIHdoaWNoIHdvdWxkIGluc3RhbnRseSByZW1vdmUgdGhlIGVsZW1lbnQgaWYgbm90IGZvciB0aGlzIGV4dHJhIHRpbWVvdXQgdG8gd2FpdCBhIHRpY2tcbiAgICAgIFByb21pc2UucmVzb2x2ZShwb3J0YWxBZGFwdGVyKGVsZW1lbnQsIHN0YWNrKSkudGhlbigoKSA9PiB7XG4gICAgICAgIGF0dGFjaGVkRWxlbWVudHMuc2V0KGVsZW1lbnQsIHtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIHN0YWNrOiBzdGFja05hbWUsXG4gICAgICAgICAgYmFja2Ryb3AsXG4gICAgICAgICAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzOiBuZXcgU2V0PEVsZW1lbnQ+KCksXG4gICAgICAgICAgcGFyZW50UG9ydGFsZWRFbGVtZW50LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJlbW92ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSBzdGFjayAqL1xuICBwdWJsaWMgcmVtb3ZlRnJvbVN0YWNrKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMucG9ydGFsZWRFbGVtZW50cy5oYXMocG9ydGFsQ29udHJvbGxlci5pZCkpIHtcbiAgICAgIGNvbnN0IGF0dGFjaGVkRWxlbWVudHMgPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpO1xuICAgICAgaWYgKGF0dGFjaGVkRWxlbWVudHMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudE1ldGFkYXRhID0gYXR0YWNoZWRFbGVtZW50cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIGlmIChlbGVtZW50TWV0YWRhdGEpIHtcbiAgICAgICAgICBhdHRhY2hlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplU3RhY2tSZW1vdmUoZWxlbWVudE1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNhZmVseSByZW1vdmVzIGFsbCBpdGVtcyBmcm9tIGFsbCBzdGFja3NcbiAgcHJpdmF0ZSByZW1vdmVBbGxJdGVtc0Zyb21TdGFja3MoKSB7XG4gICAgZm9yIChsZXQgW2lkLCBjb250cm9sbGVyTWFwXSBvZiB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZW50cmllcygpKSB7XG4gICAgICBmb3IgKGxldCBbZWxlbWVudCwgZWxlbWVudE1ldGFkYXRhXSBvZiBjb250cm9sbGVyTWFwLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoZWxlbWVudE1ldGFkYXRhKSB7XG4gICAgICAgICAgdGhpcy5maW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogTWFrZXMgYSBiYWNrZHJvcCBhc3NvY2lhdGVkIHdpdGggYSBwb3J0YWxlZCBlbGVtZW50IHZpc2libGUgaWYgaXQgZXhpc3RzICovXG4gIHB1YmxpYyBzaG93QmFja2Ryb3AocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgY29uc3QgeyBiYWNrZHJvcCB9ID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKS5nZXQoZWxlbWVudCkgPz8ge307XG4gICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1zaG93Jyk7XG4gIH1cblxuICAvKiogSGlkZXMgYSBiYWNrZHJvcCBhc3NvY2lhdGVkIHdpdGggYSBwb3J0YWxlZCBlbGVtZW50IGlmIGl0IGV4aXN0cyAqL1xuICBwdWJsaWMgaGlkZUJhY2tkcm9wKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIGNvbnN0IHsgYmFja2Ryb3AgfSA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuICAgIGJhY2tkcm9wPy5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrZHJvcC0tc2hvdycpO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIGludGVydG5lc3MgYSBiYWNrZHJvcCBpZiBpdCBleGlzdHMgKHdoZXRoZXIgb3Igbm90IHRoZSB1c2VyIGNhbiBjbGljayB0aHJvdWdoIGl0KSAqL1xuICBwdWJsaWMgc2V0QmFja2Ryb3BJbmVydG5lc3MoXG4gICAgcG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsXG4gICAgZWxlbWVudDogRWxlbWVudCxcbiAgICBpbmVydDogYm9vbGVhbiA9IHRydWVcbiAgKSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIGNvbnN0IHsgYmFja2Ryb3AgfSA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuICAgIGlmIChpbmVydCkge1xuICAgICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1pbmVydCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYWNrZHJvcD8uY2xhc3NMaXN0LnJlbW92ZSgnYmFja2Ryb3AtLWluZXJ0Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGlkIGZvciB0aGUgY29uZmlndXJlZCBzdGFjayBlbGVtZW50ICovXG4gIHByaXZhdGUgaWRGYWN0b3J5ID0gKHN0YWNrOiBQb3J0YWxTdGFjaykgPT4gYG10ZS1wb3J0YWxfXyR7c3RhY2t9LXN0YWNrYDtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGFuIGVsZW1lbnQgaXMgYmVpbmcgcG9ydGFsZWQgZnJvbSB3aXRoaW4gYW5vdGhlciBwb3J0YWxlZFxuICAgKiBlbGVtZW50IGFuZCByZXR1cm5zIHRoYXQgcGFyZW50IGlmIGl0IGlzXG4gICAqL1xuICBwcml2YXRlIGdldFBhcmVudFBvcnRhbGVkRWxlbWVudChwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgZWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmIChwb3J0YWxDb250cm9sbGVyLnBhcmVudFBvcnRhbGVkRWxlbWVudCkge1xuICAgICAgcmV0dXJuIHBvcnRhbENvbnRyb2xsZXIucGFyZW50UG9ydGFsZWRFbGVtZW50O1xuICAgIH1cbiAgICBsZXQgcGFyZW50UG9ydGFsZWRFbGVtZW50OiBFbGVtZW50O1xuICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChwb3J0YWxDb250cm9sbGVyKSA9PlxuICAgICAgcG9ydGFsQ29udHJvbGxlci5mb3JFYWNoKChwb3J0YWxlZEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKHBvcnRhbGVkRWxlbWVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgcG9ydGFsZWRFbGVtZW50LmNoaWxkUG9ydGFsZWRFbGVtZW50cy5hZGQoZWxlbWVudCk7XG4gICAgICAgICAgcGFyZW50UG9ydGFsZWRFbGVtZW50ID0gcG9ydGFsZWRFbGVtZW50LmVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICAvLyBDYWNoZSB0aGUgcGFyZW50UG9ydGFsZWRFbGVtZW50IGlmIGZvdW5kIG9uIHRoZSBjb250cm9sbGVyIHNvIHdlIGNhbiByZWZlcmVuY2VcbiAgICAvLyBpdCB3aGVuIG9wZW5lZCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgIGlmIChwYXJlbnRQb3J0YWxlZEVsZW1lbnQpIHtcbiAgICAgIHBvcnRhbENvbnRyb2xsZXIucGFyZW50UG9ydGFsZWRFbGVtZW50ID0gcGFyZW50UG9ydGFsZWRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50UG9ydGFsZWRFbGVtZW50O1xuICB9XG5cbiAgLyoqIEVuc3VyZXMgYW4gZWxlbWVudCBpcyByZW1vdmVkIGZyb20gdGhlIHN0YWNrIG5vIG1hdHRlciB3aGljaCBjb250cm9sbGVyIGhhcyBwb3J0YWxlZCBpdCAqL1xuICBwcml2YXRlIHJlbW92ZUZyb21TdGFja0dsb2JhbGx5KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZm9yRWFjaCgocG9ydGFsQ29udHJvbGxlcikgPT4ge1xuICAgICAgaWYgKHBvcnRhbENvbnRyb2xsZXIuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRNZXRhZGF0YSA9IHBvcnRhbENvbnRyb2xsZXIuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBwb3J0YWxDb250cm9sbGVyLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgdGhpcy5maW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogRmluYWxpemVzIHRoZSByZW1vdmUgb2YgYW4gZWxlbWVudCBmcm9tIGEgcG9ydGFsIHN0YWNrICovXG4gIHByaXZhdGUgZmluYWxpemVTdGFja1JlbW92ZShlbGVtZW50TWV0YWRhdGE6IFBvcnRhbGVkRWxlbWVudE1ldGFkYXRhKSB7XG4gICAgaWYgKGVsZW1lbnRNZXRhZGF0YSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBzdGFjazogc3RhY2tOYW1lLFxuICAgICAgICBiYWNrZHJvcCxcbiAgICAgICAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzLFxuICAgICAgICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQsXG4gICAgICB9ID0gZWxlbWVudE1ldGFkYXRhO1xuICAgICAgY29uc3Qgc3RhY2sgPSB0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tOYW1lXTtcblxuICAgICAgLy8gUmVtb3ZlIGFueSBzY3JvbGxMb2Nrc1xuICAgICAgdGhpcy5yZW1vdmVTY3JvbGxMb2NrKGVsZW1lbnQpO1xuXG4gICAgICAvLyBFbnN1cmVzIGFuIGVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIGFueSBwYXJlbnQgcG9ydGFsZWQgZWxlbWVudHMgY2hpbGRyZW4gbGlzdHNcbiAgICAgIGlmIChwYXJlbnRQb3J0YWxlZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmZvckVhY2goKHBvcnRhbENvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICBpZiAocG9ydGFsQ29udHJvbGxlci5oYXMocGFyZW50UG9ydGFsZWRFbGVtZW50KSkge1xuICAgICAgICAgICAgcG9ydGFsQ29udHJvbGxlci5nZXQocGFyZW50UG9ydGFsZWRFbGVtZW50KS5jaGlsZFBvcnRhbGVkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZXMgYW55IGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudCBhcmUgcmVtb3ZlZCBiZWZvcmUgdGhpcyBlbGVtZW50IGlzXG4gICAgICBpZiAoY2hpbGRQb3J0YWxlZEVsZW1lbnRzLnNpemUgPiAwKSB7XG4gICAgICAgIGNoaWxkUG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB0aGlzLnJlbW92ZUZyb21TdGFja0dsb2JhbGx5KGVsZW1lbnQpKTtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZXMgdGhpcyBlbGVtZW50cyBiYWNrZHJvcCBmcm9tIHRoZSBwb3J0YWwgc3RhY2tcbiAgICAgIGlmIChiYWNrZHJvcCAmJiBiYWNrZHJvcC5wYXJlbnRFbGVtZW50ID09PSBzdGFjaykge1xuICAgICAgICBzdGFjaz8ucmVtb3ZlQ2hpbGQoYmFja2Ryb3ApO1xuICAgICAgfVxuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyBhIHJlYWN0IHdyYXBwZWQgcG9ydGFsZWQgZWxlbWVudFxuICAgICAgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudD8uaGFzQXR0cmlidXRlKCdkYXRhLW92ZXJsYXktd3JhcHBlcicpKSB7XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCA9PT0gc3RhY2spIHtcbiAgICAgICAgICBzdGFjaz8ucmVtb3ZlQ2hpbGQoZWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQgPT09IHN0YWNrKSB7XG4gICAgICAgIHN0YWNrPy5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyBhIHNjcm9sbCBsb2NrIHRvIHRoZSBib2R5IGVsZW1lbnQgdG8gcHJldmVudCBzY3JvbGxpbmcgb2YgcGFnZSBjb250ZW50LlxuICAgKiBDYWxjdWxhdGVzIGFueSBib2R5IG9mZnNldHMgZHVlIHRvIHZpc2libGUgc2Nyb2xsYmFycyBhbmQgZHluYW1pY2FsbHkgYWRqdXN0cyBmb3IgdGhlbS5cbiAgICovXG4gIHByaXZhdGUgYXBwbHlTY3JvbGxMb2NrKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFjdGl2ZVNjcm9sbExvY2tzLmFkZChlbGVtZW50KTtcblxuICAgIGNvbnN0IGlzSU9TID0gaXNQbGF0Zm9ybSgnSU9TJyk7XG4gICAgY29uc3QgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcbiAgICBjb25zdCBzY3JvbGxiYXJYID1cbiAgICAgIE1hdGgucm91bmQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpICtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIGNvbnN0IHBhZGRpbmdQcm9wID0gc2Nyb2xsYmFyWCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IHNjcm9sbFggPSBib2R5U3R5bGUubGVmdCA/IHBhcnNlRmxvYXQoYm9keVN0eWxlLmxlZnQpIDogd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgIGNvbnN0IHNjcm9sbFkgPSBib2R5U3R5bGUudG9wID8gcGFyc2VGbG9hdChib2R5U3R5bGUudG9wKSA6IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgIGJvZHlTdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbXRlLXNjcm9sbC1sb2NrLS1hY3RpdmUnKTtcblxuICAgIGlmIChzY3JvbGxiYXJXaWR0aCkge1xuICAgICAgYm9keVN0eWxlW3BhZGRpbmdQcm9wXSA9IGAke3Njcm9sbGJhcldpZHRofXB4YDtcbiAgICB9XG5cbiAgICAvLyBPbmx5IGlPUyBkb2Vzbid0IHJlc3BlY3QgYG92ZXJmbG93OiBoaWRkZW5gIG9uIGRvY3VtZW50LmJvZHksIGFuZCB0aGlzXG4gICAgLy8gdGVjaG5pcXVlIGhhcyBmZXdlciBzaWRlIGVmZmVjdHMuXG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICAvLyBpT1MgMTIgZG9lcyBub3Qgc3VwcG9ydCBgdmlzdWFsVmlld3BvcnRgLlxuICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IGdsb2JhbFRoaXMudmlzdWFsVmlld3BvcnQ/Lm9mZnNldExlZnQgfHwgMDtcbiAgICAgIGNvbnN0IG9mZnNldFRvcCA9IGdsb2JhbFRoaXMudmlzdWFsVmlld3BvcnQ/Lm9mZnNldFRvcCB8fCAwO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGJvZHlTdHlsZSwge1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgdG9wOiBgJHstKHNjcm9sbFkgLSBNYXRoLmZsb29yKG9mZnNldFRvcCkpfXB4YCxcbiAgICAgICAgbGVmdDogYCR7LShzY3JvbGxYIC0gTWF0aC5mbG9vcihvZmZzZXRMZWZ0KSl9cHhgLFxuICAgICAgICByaWdodDogJzAnLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlbW92ZXMgYW4gYWN0aXZlIHNjcm9sbExvY2sgaWYgdGhlcmUgYXJlIG5vIHJlbWFpbmluZyBlbGVtZW50cyBwb3J0YWxlZCB0aGF0IHJlcXVlc3RlZCBpdCAqL1xuICBwcml2YXRlIHJlbW92ZVNjcm9sbExvY2soZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuYWN0aXZlU2Nyb2xsTG9ja3MuZGVsZXRlKGVsZW1lbnQpO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlU2Nyb2xsTG9ja3Muc2l6ZSA9PT0gMCkge1xuICAgICAgY29uc3QgaXNJT1MgPSBpc1BsYXRmb3JtKCdJT1MnKTtcbiAgICAgIGNvbnN0IGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG4gICAgICBjb25zdCBzY3JvbGxiYXJYID1cbiAgICAgICAgTWF0aC5yb3VuZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgK1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgIGNvbnN0IHBhZGRpbmdQcm9wID0gc2Nyb2xsYmFyWCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcblxuICAgICAgT2JqZWN0LmFzc2lnbihib2R5U3R5bGUsIHtcbiAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICBbcGFkZGluZ1Byb3BdOiAnJyxcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ210ZS1zY3JvbGwtbG9jay0tYWN0aXZlJyk7XG5cbiAgICAgIGlmIChpc0lPUykge1xuICAgICAgICBPYmplY3QuYXNzaWduKGJvZHlTdHlsZSwge1xuICAgICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgICB0b3A6ICcnLFxuICAgICAgICAgIGxlZnQ6ICcnLFxuICAgICAgICAgIHJpZ2h0OiAnJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGdsb2JhbFRoaXMuc2Nyb2xsVG8oc2Nyb2xsWCwgc2Nyb2xsWSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVQb3J0YWxTZXJ2aWNlID0gbmV3IF9NdGVQb3J0YWxTZXJ2aWNlKCk7XG4iLCAiaW1wb3J0IHsgc2lnbmFsIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuY2xhc3MgX010ZUhpc3RvcnlBcGlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xuICBwcml2YXRlIGNoYW5nZVNpZ25hbCA9IHNpZ25hbCgpO1xuICBwcml2YXRlIHByZXZIcmVmOiBzdHJpbmc7XG5cbiAgcHVibGljIHN0YXRlQ2hhbmdlcygpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VTaWduYWw7XG4gIH1cblxuICBwcml2YXRlIGZvcndhcmRBcHBseSA9ICh0YXJnZXQsIHRoaXNBcmcsIGFyZ0FycmF5KSA9PiB7XG4gICAgY29uc3QgcmVzID0gdGFyZ2V0LmFwcGx5KHRoaXNBcmcsIGFyZ0FycmF5KTtcbiAgICAvLyBPbmx5IGVtaXQgYSBzdGF0ZSBjaGFuZ2UgaWYgdGhlIGhyZWYgZGlmZmVycyBmcm9tIHRoZSBsYXN0IGVtaXNzaW9uXG4gICAgaWYgKHRoaXMucHJldkhyZWYgIT09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB7XG4gICAgICB0aGlzLnByZXZIcmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICB0aGlzLmNoYW5nZVNpZ25hbC5zZXQodGhpcy5wcmV2SHJlZik7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgIC8vIExpc3RlbiBmb3IgYmFjayBldmVudHMgd2l0aCBwb3BzdGF0ZSBldmVudFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZVNpZ25hbC5zZXQod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFBhdGNoIEhpc3RvcnkgQVBJIG1ldGhvZHMgdG8gZW5zdXJlIHdlIGVtaXQgYW55dGltZSB0aGVpciBzdGF0ZSBpcyBjaGFuZ2VkXG4gICAgICAvLyBUaGlzIGlzIG5lY2Nlc2FyeSBiZWNhaXNlIHRoZSBgcG9wc3RhdGVgIGV2ZW50IGlzIG5vdCByZWxpYWJseSBjYWxsZWQgYWNyb3NzIGJyb3dzZXJzIHdoZW5ldmVyIHRoZSBoaXN0b3J5IEFQSSBpcyB1c2VkXG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LmJhY2ssIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkuZm9yd2FyZCA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmdvID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LmdvLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUsIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSwge1xuICAgICAgICBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZUhpc3RvcnlBcGlTZXJ2aWNlID0gbmV3IF9NdGVIaXN0b3J5QXBpU2VydmljZSgpO1xuIiwgImltcG9ydCB7IGlzU3NyIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IHR5cGUgTXRlRGF0ZUZvcm1hdE9wdGlvbnMgPSBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyAmIHtcbiAgbGFuZz86IHN0cmluZztcbiAgZm9ybWF0PzpcbiAgICB8ICdzaG9ydCdcbiAgICB8ICdtZWRpdW0nXG4gICAgfCAnbG9uZydcbiAgICB8ICdmdWxsJ1xuICAgIHwgJ3Nob3J0RGF0ZSdcbiAgICB8ICdtZWRpdW1EYXRlJ1xuICAgIHwgJ2xvbmdEYXRlJ1xuICAgIHwgJ2Z1bGxEYXRlJ1xuICAgIHwgJ3Nob3J0VGltZSdcbiAgICB8ICdtZWRpdW1UaW1lJ1xuICAgIHwgJ2xvbmdUaW1lJ1xuICAgIHwgJ2Z1bGxUaW1lJztcbn07XG5cbmV4cG9ydCB0eXBlIE10ZU51bWJlckZvcm1hdE9wdGlvbnMgPSBJbnRsLk51bWJlckZvcm1hdE9wdGlvbnMgJiB7IGxhbmc/OiBzdHJpbmcgfTtcblxuY2xhc3MgX010ZUxvY2FsaXplU2VydmljZSB7XG4gIC8vIEFzc3VtZSBgZW5gIGxhbmcgZm9yIG5vdyBhcyBhIGZhbGxiYWNrIHVudGlsIHdlIHJvbGxiYWNrIHdpZGVyIHN1cHBvcnQgZm9yIGkxMW4gd2hlbiBuZWNlc3NhcnlcbiAgcHJpdmF0ZSBsYW5ndWFnZSA9ICdlbic7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgaWYgKCFpc1NzcigpICYmICF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubGFuZ3VhZ2UgPSBgJHtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2V9YC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXROdW1iZXIobnVtYmVyVG9Gb3JtYXQ6IG51bWJlciB8IHN0cmluZywgb3B0aW9ucz86IE10ZU51bWJlckZvcm1hdE9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIGNvbnN0IGxhbmcgPSBvcHRpb25zPy5sYW5nID8gb3B0aW9ucy5sYW5nIDogdGhpcy5sYW5ndWFnZTtcbiAgICBudW1iZXJUb0Zvcm1hdCA9IE51bWJlcihudW1iZXJUb0Zvcm1hdCk7XG4gICAgLy8gRW5zdXJlIG5vIG51bGwgb3B0aW9ucyBleGlzdFxuICAgIGNvbnN0IGZpbmFsT3B0aW9ucyA9IHtcbiAgICAgIGxhbmc6IG9wdGlvbnMubGFuZyA/PyB1bmRlZmluZWQsXG4gICAgICBzdHlsZTogb3B0aW9ucy5zdHlsZSA/PyB1bmRlZmluZWQsXG4gICAgICBjdXJyZW5jeTogb3B0aW9ucy5jdXJyZW5jeSA/PyB1bmRlZmluZWQsXG4gICAgICBjdXJyZW5jeURpc3BsYXk6IG9wdGlvbnMuY3VycmVuY3lEaXNwbGF5ID8/IHVuZGVmaW5lZCxcbiAgICAgIHVzZUdyb3VwaW5nOiBvcHRpb25zLnVzZUdyb3VwaW5nID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbmltdW1JbnRlZ2VyRGlnaXRzOiBvcHRpb25zLm1pbmltdW1JbnRlZ2VyRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogb3B0aW9ucy5taW5pbXVtRnJhY3Rpb25EaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBvcHRpb25zLm1heGltdW1GcmFjdGlvbkRpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICBtaW5pbXVtU2lnbmlmaWNhbnREaWdpdHM6IG9wdGlvbnMubWluaW11bVNpZ25pZmljYW50RGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1heGltdW1TaWduaWZpY2FudERpZ2l0czogb3B0aW9ucy5tYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgIH07XG4gICAgcmV0dXJuIGlzTmFOKG51bWJlclRvRm9ybWF0KVxuICAgICAgPyAnJ1xuICAgICAgOiBuZXcgSW50bC5OdW1iZXJGb3JtYXQobGFuZywgZmluYWxPcHRpb25zKS5mb3JtYXQobnVtYmVyVG9Gb3JtYXQpO1xuICB9XG5cbiAgcHVibGljIGZvcm1hdERhdGUoZGF0ZVRvRm9ybWF0OiBEYXRlIHwgc3RyaW5nLCBvcHRpb25zPzogTXRlRGF0ZUZvcm1hdE9wdGlvbnMpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICBjb25zdCBsYW5nID0gb3B0aW9ucz8ubGFuZyA/IG9wdGlvbnMubGFuZyA6IHRoaXMubGFuZ3VhZ2U7XG4gICAgY29uc3QgZm9ybWF0dGVkT3B0aW9ucyA9IHsgLi4uKG9wdGlvbnMgPz8ge30pLCAuLi50aGlzLmdldERlZmluZWREYXRlRm9ybWF0KG9wdGlvbnM/LmZvcm1hdCkgfTtcbiAgICAvLyBFbnN1cmUgbm8gbnVsbCBvcHRpb25zIGV4aXN0XG4gICAgY29uc3QgZmluYWxPcHRpb25zID0ge1xuICAgICAgbGFuZzogZm9ybWF0dGVkT3B0aW9ucy5sYW5nID8/IHVuZGVmaW5lZCxcbiAgICAgIHdlZWtkYXk6IGZvcm1hdHRlZE9wdGlvbnMud2Vla2RheSA/PyB1bmRlZmluZWQsXG4gICAgICBlcmE6IGZvcm1hdHRlZE9wdGlvbnMuZXJhID8/IHVuZGVmaW5lZCxcbiAgICAgIHllYXI6IGZvcm1hdHRlZE9wdGlvbnMueWVhciA/PyB1bmRlZmluZWQsXG4gICAgICBtb250aDogZm9ybWF0dGVkT3B0aW9ucy5tb250aCA/PyB1bmRlZmluZWQsXG4gICAgICBkYXk6IGZvcm1hdHRlZE9wdGlvbnMuZGF5ID8/IHVuZGVmaW5lZCxcbiAgICAgIGhvdXI6IGZvcm1hdHRlZE9wdGlvbnMuaG91ciA/PyB1bmRlZmluZWQsXG4gICAgICBtaW51dGU6IGZvcm1hdHRlZE9wdGlvbnMubWludXRlID8/IHVuZGVmaW5lZCxcbiAgICAgIHNlY29uZDogZm9ybWF0dGVkT3B0aW9ucy5zZWNvbmQgPz8gdW5kZWZpbmVkLFxuICAgICAgZnJhY3Rpb25hbFNlY29uZERpZ2l0czogZm9ybWF0dGVkT3B0aW9ucy5mcmFjdGlvbmFsU2Vjb25kRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIHRpbWVab25lTmFtZTogZm9ybWF0dGVkT3B0aW9ucy50aW1lWm9uZU5hbWUgPz8gdW5kZWZpbmVkLFxuICAgICAgdGltZVpvbmU6IGZvcm1hdHRlZE9wdGlvbnMudGltZVpvbmUgPz8gdW5kZWZpbmVkLFxuICAgICAgaG91cjEyOiBmb3JtYXR0ZWRPcHRpb25zLmhvdXIxMiA/PyB1bmRlZmluZWQsXG4gICAgICBmb3JtYXQ6IGZvcm1hdHRlZE9wdGlvbnMuZm9ybWF0ID8/IHVuZGVmaW5lZCxcbiAgICB9O1xuICAgIGRhdGVUb0Zvcm1hdCA9IG5ldyBEYXRlKGRhdGVUb0Zvcm1hdCk7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxhbmcsIGZpbmFsT3B0aW9ucykuZm9ybWF0KGRhdGVUb0Zvcm1hdCk7XG4gIH1cblxuICBwcml2YXRlIGdldERlZmluZWREYXRlRm9ybWF0KFxuICAgIGZvcm1hdDpcbiAgICAgIHwgJ3Nob3J0J1xuICAgICAgfCAnbWVkaXVtJ1xuICAgICAgfCAnbG9uZydcbiAgICAgIHwgJ2Z1bGwnXG4gICAgICB8ICdzaG9ydERhdGUnXG4gICAgICB8ICdtZWRpdW1EYXRlJ1xuICAgICAgfCAnbG9uZ0RhdGUnXG4gICAgICB8ICdmdWxsRGF0ZSdcbiAgICAgIHwgJ3Nob3J0VGltZSdcbiAgICAgIHwgJ21lZGl1bVRpbWUnXG4gICAgICB8ICdsb25nVGltZSdcbiAgICAgIHwgJ2Z1bGxUaW1lJ1xuICApOiBNdGVEYXRlRm9ybWF0T3B0aW9ucyB7XG4gICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgIGNhc2UgJ3Nob3J0JzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdsb25nJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnZnVsbCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdzaG9ydERhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbWVkaXVtRGF0ZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbG9uZ0RhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnZnVsbERhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ3Nob3J0VGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbWVkaXVtVGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbG9uZ1RpbWUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdmdWxsVGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgIGZyYWN0aW9uYWxTZWNvbmREaWdpdHM6IDIsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlTG9jYWxpemVTZXJ2aWNlID0gbmV3IF9NdGVMb2NhbGl6ZVNlcnZpY2UoKTtcbiIsICJpbXBvcnQgeyBDb3JlUGFsZXR0ZSwgRGVuc2l0eU9wdGlvbnMsIFByZXNldHMsIFNpemVPcHRpb25zLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uUHJlc2V0IHtcbiAgc2l6ZT86IFNpemVPcHRpb25zO1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICBkZW5zaXR5PzogRGVuc2l0eU9wdGlvbnM7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBidXR0b25QcmVzZXRzOiBQcmVzZXRzPEJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJY29uQnV0dG9uUHJlc2V0IHtcbiAgc2l6ZT86IFNpemVPcHRpb25zO1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICBkZW5zaXR5PzogRGVuc2l0eU9wdGlvbnM7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBpY29uQnV0dG9uUHJlc2V0czogUHJlc2V0czxJY29uQnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFN0YXR1c1BhbGV0dGUgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25QcmVzZXQge1xuICBjb2xvcj86IFN0YXR1c1BhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBpY29uUHJlc2V0czogUHJlc2V0czxJY29uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFN0YXR1c1BhbGV0dGUgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzQmFyUHJlc2V0IHtcbiAgY29sb3I/OiBTdGF0dXNQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NCYXJQcmVzZXRzOiBQcmVzZXRzPFByb2dyZXNzQmFyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgU3RhdHVzUGFsZXR0ZSB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NTcGlubmVyUHJlc2V0IHtcbiAgY29sb3I/OiBTdGF0dXNQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NTcGlubmVyUHJlc2V0czogUHJlc2V0czxQcm9ncmVzc1NwaW5uZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUb29sYmFyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCB0b29sYmFyUHJlc2V0czogUHJlc2V0czxUb29sYmFyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRQcmVzZXQge1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xuICB3aXRoU2hhZG93PzogYm9vbGVhbjtcbiAgd2l0aG91dFNoYWRvdz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZEJ1dHRvblByZXNldCBleHRlbmRzIENhcmRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGNhcmRQcmVzZXRzOiBQcmVzZXRzPENhcmRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICB3aXRob3V0U2hhZG93OiB0cnVlLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBjYXJkQnV0dG9uUHJlc2V0czogUHJlc2V0czxDYXJkQnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgd2l0aG91dFNoYWRvdzogdHJ1ZSxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHRyZWVQcmVzZXRzOiBQcmVzZXRzPFRyZWVQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgQ29yZVBhbGV0dGUsIFByZXNldHMsIFNpemVPcHRpb25zLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnUHJlc2V0cyB7XG4gIHNpemU/OiBTaXplT3B0aW9ucztcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IHRhZ1ByZXNldHM6IFByZXNldHM8VGFnUHJlc2V0cz4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCYWRnZVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgYmFkZ2VQcmVzZXRzOiBQcmVzZXRzPEJhZGdlUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IENvcmVQYWxldHRlLCBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBMaW5rUHJlc2V0IHtcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgZm9udFdlaWdodD86ICdyZWd1bGFyJyB8ICdib2xkJztcbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtQcmVzZXRzOiBQcmVzZXRzPExpbmtQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBbGVydFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgYWxlcnRQcmVzZXRzOiBQcmVzZXRzPEFsZXJ0UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBpbnB1dFByZXNldHM6IFByZXNldHM8SW5wdXRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd2VyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBkcmF3ZXJQcmVzZXRzOiBQcmVzZXRzPERyYXdlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBc2lkZVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgYXNpZGVQcmVzZXRzOiBQcmVzZXRzPEFzaWRlUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCcmVhZGNydW1iSXRlbVByZXNldCB7XG4gIGZvbnRXZWlnaHQ/OiAncmVndWxhcicgfCAnYm9sZCc7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG4gIHdpdGhvdXRVbmRlcmxpbmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgYnJlYWRjcnVtYkl0ZW1QcmVzZXRzOiBQcmVzZXRzPEJyZWFkY3J1bWJJdGVtUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHtcbiAgICB3aXRob3V0VW5kZXJsaW5lOiB0cnVlLFxuICB9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBtb2RhbFByZXNldHM6IFByZXNldHM8TW9kYWxQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgQ29yZVBhbGV0dGUgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDaGVja2JveFByZXNldCB7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja2JveFByZXNldHM6IFByZXNldHM8Q2hlY2tib3hQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFkaW9QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHJhZGlvUHJlc2V0czogUHJlc2V0czxSYWRpb1ByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBOYXZSb290UHJlc2V0IHtcbiAgbW9iaWxlQnJlYWtwb2ludD86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCc7XG4gIGludmVyc2U/OiAnaGVhZGVyJyB8ICdzaWRlYmFyJztcbiAgcHJlZmVyU2lkZWJhcj86ICdvcGVuZWQnIHwgJ2Nsb3NlZCc7XG59XG5cbmV4cG9ydCBjb25zdCBuYXZSb290UHJlc2V0czogUHJlc2V0czxOYXZSb290UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge1xuICAgIGludmVyc2U6ICdzaWRlYmFyJyxcbiAgfSxcbiAgY3g6IHtcbiAgICBwcmVmZXJTaWRlYmFyOiAnY2xvc2VkJyxcbiAgfSxcbiAgcHg6IHtcbiAgICBpbnZlcnNlOiAnc2lkZWJhcicsXG4gIH0sXG4gIHJ4OiB7XG4gICAgcHJlZmVyU2lkZWJhcjogJ2Nsb3NlZCcsXG4gIH0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkhlYWRlclByZXNldCB7XG4gIHdpdGhDb250YWluZXI/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbmF2SGVhZGVyUHJlc2V0czogUHJlc2V0czxOYXZIZWFkZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2U3ViSGVhZGVyUHJlc2V0IHtcbiAgd2l0aENvbnRhaW5lcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZTdWJIZWFkZXJQcmVzZXRzOiBQcmVzZXRzPE5hdlN1YkhlYWRlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZTaWRlYmFyUHJlc2V0IHtcbiAgaGlkZVVudGlsVHJhbnNpdGlvbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZTaWRlYmFyUHJlc2V0czogUHJlc2V0czxOYXZTaWRlYmFyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgaGlkZVVudGlsVHJhbnNpdGlvbjogdHJ1ZSxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge1xuICAgIGhpZGVVbnRpbFRyYW5zaXRpb246IHRydWUsXG4gIH0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkNvbnRlbnRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkNvbnRlbnRQcmVzZXRzOiBQcmVzZXRzPE5hdkNvbnRlbnRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2Rm9vdGVyUHJlc2V0IHtcbiAgd2l0aENvbnRhaW5lcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZGb290ZXJQcmVzZXRzOiBQcmVzZXRzPE5hdkZvb3RlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZCdXR0b25QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkJ1dHRvblByZXNldHM6IFByZXNldHM8TmF2QnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkljb25CdXR0b25QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkljb25CdXR0b25QcmVzZXRzOiBQcmVzZXRzPE5hdkljb25CdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2SXRlbVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF2SXRlbVByZXNldHM6IFByZXNldHM8TmF2SXRlbVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uR3JvdXBQcmVzZXQge1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgYnV0dG9uR3JvdXBQcmVzZXRzOiBQcmVzZXRzPEJ1dHRvbkdyb3VwUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTd2l0Y2hQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHN3aXRjaFByZXNldHM6IFByZXNldHM8U3dpdGNoUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVTZWxlY3RQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdGl2ZVNlbGVjdFByZXNldHM6IFByZXNldHM8TmF0aXZlU2VsZWN0UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUZXh0YXJlYVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgdGV4dGFyZWFQcmVzZXRzOiBQcmVzZXRzPFRleHRhcmVhUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTa2VsZXRvblByZXNldCB7fVxuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25QcmVzZXRzOiBQcmVzZXRzPFNrZWxldG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHNsaWRlclByZXNldHM6IFByZXNldHM8U2xpZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBSYW5nZVNsaWRlclByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgcmFuZ2VTbGlkZXJQcmVzZXRzOiBQcmVzZXRzPFJhbmdlU2xpZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWdtZW50ZWRDb250cm9sUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBzZWdtZW50ZWRDb250cm9sUHJlc2V0czogUHJlc2V0czxTZWdtZW50ZWRDb250cm9sUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IGJ1dHRvblByZXNldHMsIGljb25CdXR0b25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2J1dHRvbi9idXR0b24ucHJlc2V0cyc7XG5pbXBvcnQgeyBpY29uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9pY29uL2ljb24ucHJlc2V0cyc7XG5pbXBvcnQgeyBwcm9ncmVzc0JhclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5wcmVzZXRzJztcbmltcG9ydCB7IHByb2dyZXNzU3Bpbm5lclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLnByZXNldHMnO1xuaW1wb3J0IHsgdG9vbGJhclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdG9vbGJhci90b29sYmFyLnByZXNldHMnO1xuaW1wb3J0IHsgY2FyZFByZXNldHMsIGNhcmRCdXR0b25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2NhcmQvY2FyZC5wcmVzZXRzJztcbmltcG9ydCB7IHRyZWVQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3RyZWUvdHJlZS5wcmVzZXRzJztcbmltcG9ydCB7IHRhZ1ByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdGFnL3RhZy5wcmVzZXRzJztcbmltcG9ydCB7IGJhZGdlUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9iYWRnZS9iYWRnZS5wcmVzZXRzJztcbmltcG9ydCB7IGxpbmtQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2xpbmsvbGluay5wcmVzZXRzJztcbmltcG9ydCB7IGFsZXJ0UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9hbGVydC9hbGVydC5wcmVzZXRzJztcbmltcG9ydCB7IGlucHV0UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9pbnB1dC9pbnB1dC5wcmVzZXRzJztcbmltcG9ydCB7IGRyYXdlclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvZHJhd2VyL2RyYXdlci5wcmVzZXRzJztcbmltcG9ydCB7IGFzaWRlUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9hc2lkZS9hc2lkZS5wcmVzZXRzJztcbmltcG9ydCB7IGJyZWFkY3J1bWJJdGVtUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9icmVhZGNydW1icy9icmVhZGNydW1iLWl0ZW0ucHJlc2V0cyc7XG5pbXBvcnQgeyBtb2RhbFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvbW9kYWwvbW9kYWwucHJlc2V0cyc7XG5pbXBvcnQgeyBjaGVja2JveFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvY2hlY2tib3gvY2hlY2tib3gucHJlc2V0cyc7XG5pbXBvcnQgeyByYWRpb1ByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcmFkaW8vcmFkaW8ucHJlc2V0cyc7XG5pbXBvcnQge1xuICBuYXZSb290UHJlc2V0cyxcbiAgbmF2SGVhZGVyUHJlc2V0cyxcbiAgbmF2U3ViSGVhZGVyUHJlc2V0cyxcbiAgbmF2U2lkZWJhclByZXNldHMsXG4gIG5hdkNvbnRlbnRQcmVzZXRzLFxuICBuYXZGb290ZXJQcmVzZXRzLFxuICBuYXZCdXR0b25QcmVzZXRzLFxuICBuYXZJY29uQnV0dG9uUHJlc2V0cyxcbiAgbmF2SXRlbVByZXNldHMsXG59IGZyb20gJy4uLy4uL2F0b21pYy9uYXYvbmF2LnByZXNldHMnO1xuaW1wb3J0IHsgYnV0dG9uR3JvdXBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAucHJlc2V0cyc7XG5pbXBvcnQgeyBzd2l0Y2hQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3N3aXRjaC9zd2l0Y2gucHJlc2V0cyc7XG5pbXBvcnQgeyBuYXRpdmVTZWxlY3RQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL25hdGl2ZS1zZWxlY3QvbmF0aXZlLXNlbGVjdC5wcmVzZXRzJztcbmltcG9ydCB7IHRleHRhcmVhUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy90ZXh0YXJlYS90ZXh0YXJlYS5wcmVzZXRzJztcbmltcG9ydCB7IHNrZWxldG9uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9za2VsZXRvbi9za2VsZXRvbi5wcmVzZXRzJztcbmltcG9ydCB7IHNsaWRlclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc2xpZGVyL3NsaWRlci5wcmVzZXRzJztcbmltcG9ydCB7IHJhbmdlU2xpZGVyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9yYW5nZS1zbGlkZXIvcmFuZ2Utc2xpZGVyLnByZXNldHMnO1xuaW1wb3J0IHsgc2VnbWVudGVkQ29udHJvbFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc2VnbWVudGVkLWNvbnRyb2wvc2VnbWVudGVkLWNvbnRyb2wucHJlc2V0cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9ydGFyUHJlc2V0VGhlbWUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbG9yU2NoZW1lOiAnc3lzdGVtJyB8ICdsaWdodCcgfCAnZGFyayc7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdkZWZhdWx0JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAncHgnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9IGFzIE1vcnRhclByZXNldFRoZW1lLFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMuZGVmYXVsdCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMuZGVmYXVsdCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMuZGVmYXVsdCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMuZGVmYXVsdCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMuZGVmYXVsdCxcbiAgTXRlTGluazogbGlua1ByZXNldHMuZGVmYXVsdCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMuZGVmYXVsdCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMuZGVmYXVsdCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMuZGVmYXVsdCxcbn07XG5cbmV4cG9ydCB0eXBlIE1vcnRhclByZXNldCA9IHR5cGVvZiBkZWZhdWx0UHJlc2V0O1xuXG5leHBvcnQgY29uc3QgcHhQcmVzZXQ6IE1vcnRhclByZXNldCA9IHtcbiAgcHJlc2V0OiAncHgnLFxuICB0aGVtZToge1xuICAgIG5hbWU6ICdweCcsXG4gICAgY29sb3JTY2hlbWU6ICdsaWdodCcsXG4gIH0sXG4gIE10ZUJ1dHRvbjogYnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMucHgsXG4gIE10ZUljb246IGljb25QcmVzZXRzLnB4LFxuICBNdGVQcm9ncmVzc0JhcjogcHJvZ3Jlc3NCYXJQcmVzZXRzLnB4LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMucHgsXG4gIE10ZVRvb2xiYXI6IHRvb2xiYXJQcmVzZXRzLnB4LFxuICBNdGVDYXJkOiBjYXJkUHJlc2V0cy5weCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMucHgsXG4gIE10ZVRyZWU6IHRyZWVQcmVzZXRzLnB4LFxuICBNdGVUYWc6IHRhZ1ByZXNldHMucHgsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMucHgsXG4gIE10ZUxpbms6IGxpbmtQcmVzZXRzLnB4LFxuICBNdGVBbGVydDogYWxlcnRQcmVzZXRzLnB4LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLnB4LFxuICBNdGVEcmF3ZXI6IGRyYXdlclByZXNldHMucHgsXG4gIE10ZUFzaWRlOiBhc2lkZVByZXNldHMucHgsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMucHgsXG4gIE10ZU1vZGFsOiBtb2RhbFByZXNldHMucHgsXG4gIE10ZUNoZWNrYm94OiBjaGVja2JveFByZXNldHMucHgsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMucHgsXG4gIE10ZU5hdlJvb3Q6IG5hdlJvb3RQcmVzZXRzLnB4LFxuICBNdGVOYXZIZWFkZXI6IG5hdkhlYWRlclByZXNldHMucHgsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5weCxcbiAgTXRlTmF2U2lkZWJhcjogbmF2U2lkZWJhclByZXNldHMucHgsXG4gIE10ZU5hdkNvbnRlbnQ6IG5hdkNvbnRlbnRQcmVzZXRzLnB4LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMucHgsXG4gIE10ZU5hdkJ1dHRvbjogbmF2QnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlTmF2SWNvbkJ1dHRvbjogbmF2SWNvbkJ1dHRvblByZXNldHMucHgsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLnB4LFxuICBNdGVCdXR0b25Hcm91cDogYnV0dG9uR3JvdXBQcmVzZXRzLnB4LFxuICBNdGVTd2l0Y2g6IHN3aXRjaFByZXNldHMucHgsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5weCxcbiAgTXRlVGV4dGFyZWE6IHRleHRhcmVhUHJlc2V0cy5weCxcbiAgTXRlU2tlbGV0b246IHNrZWxldG9uUHJlc2V0cy5weCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLnB4LFxuICBNdGVSYW5nZVNsaWRlcjogcmFuZ2VTbGlkZXJQcmVzZXRzLnB4LFxuICBNdGVTZWdtZW50ZWRDb250cm9sOiBzZWdtZW50ZWRDb250cm9sUHJlc2V0cy5weCxcbn07XG5cbmV4cG9ydCBjb25zdCBjeFByZXNldDogTW9ydGFyUHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdjeCcsXG4gIHRoZW1lOiB7XG4gICAgbmFtZTogJ2N4JyxcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSxcbiAgTXRlQnV0dG9uOiBidXR0b25QcmVzZXRzLmN4LFxuICBNdGVJY29uQnV0dG9uOiBpY29uQnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMuY3gsXG4gIE10ZVByb2dyZXNzQmFyOiBwcm9ncmVzc0JhclByZXNldHMuY3gsXG4gIE10ZVByb2dyZXNzU3Bpbm5lcjogcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cy5jeCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMuY3gsXG4gIE10ZUNhcmQ6IGNhcmRQcmVzZXRzLmN4LFxuICBNdGVDYXJkQnV0dG9uOiBjYXJkQnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMuY3gsXG4gIE10ZVRhZzogdGFnUHJlc2V0cy5jeCxcbiAgTXRlQmFkZ2U6IGJhZGdlUHJlc2V0cy5jeCxcbiAgTXRlTGluazogbGlua1ByZXNldHMuY3gsXG4gIE10ZUFsZXJ0OiBhbGVydFByZXNldHMuY3gsXG4gIE10ZUlucHV0OiBpbnB1dFByZXNldHMuY3gsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5jeCxcbiAgTXRlQXNpZGU6IGFzaWRlUHJlc2V0cy5jeCxcbiAgTXRlQnJlYWRjcnVtYkl0ZW06IGJyZWFkY3J1bWJJdGVtUHJlc2V0cy5jeCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5jeCxcbiAgTXRlQ2hlY2tib3g6IGNoZWNrYm94UHJlc2V0cy5jeCxcbiAgTXRlUmFkaW86IHJhZGlvUHJlc2V0cy5jeCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMuY3gsXG4gIE10ZU5hdkhlYWRlcjogbmF2SGVhZGVyUHJlc2V0cy5jeCxcbiAgTXRlTmF2U3ViSGVhZGVyOiBuYXZTdWJIZWFkZXJQcmVzZXRzLmN4LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5jeCxcbiAgTXRlTmF2Q29udGVudDogbmF2Q29udGVudFByZXNldHMuY3gsXG4gIE10ZU5hdkZvb3RlcjogbmF2Rm9vdGVyUHJlc2V0cy5jeCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLmN4LFxuICBNdGVOYXZJY29uQnV0dG9uOiBuYXZJY29uQnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlTmF2SXRlbTogbmF2SXRlbVByZXNldHMuY3gsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMuY3gsXG4gIE10ZVN3aXRjaDogc3dpdGNoUHJlc2V0cy5jeCxcbiAgTXRlTmF0aXZlU2VsZWN0OiBuYXRpdmVTZWxlY3RQcmVzZXRzLmN4LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLmN4LFxuICBNdGVTa2VsZXRvbjogc2tlbGV0b25QcmVzZXRzLmN4LFxuICBNdGVTbGlkZXI6IHNsaWRlclByZXNldHMuY3gsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMuY3gsXG4gIE10ZVNlZ21lbnRlZENvbnRyb2w6IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzLmN4LFxufTtcblxuZXhwb3J0IGNvbnN0IHJ4UHJlc2V0OiBNb3J0YXJQcmVzZXQgPSB7XG4gIHByZXNldDogJ3J4JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAncngnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9LFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMucngsXG4gIE10ZUljb25CdXR0b246IGljb25CdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVJY29uOiBpY29uUHJlc2V0cy5yeCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5yeCxcbiAgTXRlUHJvZ3Jlc3NTcGlubmVyOiBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzLnJ4LFxuICBNdGVUb29sYmFyOiB0b29sYmFyUHJlc2V0cy5yeCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMucngsXG4gIE10ZUNhcmRCdXR0b246IGNhcmRCdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVUcmVlOiB0cmVlUHJlc2V0cy5yeCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLnJ4LFxuICBNdGVCYWRnZTogYmFkZ2VQcmVzZXRzLnJ4LFxuICBNdGVMaW5rOiBsaW5rUHJlc2V0cy5yeCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5yeCxcbiAgTXRlSW5wdXQ6IGlucHV0UHJlc2V0cy5yeCxcbiAgTXRlRHJhd2VyOiBkcmF3ZXJQcmVzZXRzLnJ4LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLnJ4LFxuICBNdGVCcmVhZGNydW1iSXRlbTogYnJlYWRjcnVtYkl0ZW1QcmVzZXRzLnJ4LFxuICBNdGVNb2RhbDogbW9kYWxQcmVzZXRzLnJ4LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLnJ4LFxuICBNdGVSYWRpbzogcmFkaW9QcmVzZXRzLnJ4LFxuICBNdGVOYXZSb290OiBuYXZSb290UHJlc2V0cy5yeCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZTdWJIZWFkZXI6IG5hdlN1YkhlYWRlclByZXNldHMucngsXG4gIE10ZU5hdlNpZGViYXI6IG5hdlNpZGViYXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5yeCxcbiAgTXRlTmF2Rm9vdGVyOiBuYXZGb290ZXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZCdXR0b246IG5hdkJ1dHRvblByZXNldHMucngsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVOYXZJdGVtOiBuYXZJdGVtUHJlc2V0cy5yeCxcbiAgTXRlQnV0dG9uR3JvdXA6IGJ1dHRvbkdyb3VwUHJlc2V0cy5yeCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLnJ4LFxuICBNdGVOYXRpdmVTZWxlY3Q6IG5hdGl2ZVNlbGVjdFByZXNldHMucngsXG4gIE10ZVRleHRhcmVhOiB0ZXh0YXJlYVByZXNldHMucngsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMucngsXG4gIE10ZVNsaWRlcjogc2xpZGVyUHJlc2V0cy5yeCxcbiAgTXRlUmFuZ2VTbGlkZXI6IHJhbmdlU2xpZGVyUHJlc2V0cy5yeCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMucngsXG59O1xuIiwgImltcG9ydCB7IGN4UHJlc2V0LCBkZWZhdWx0UHJlc2V0LCBNb3J0YXJQcmVzZXQsIHB4UHJlc2V0LCByeFByZXNldCB9IGZyb20gJy4vcHJlc2V0cyc7XG5pbXBvcnQgeyBjb21wdXRlZCwgU2lnbmFsLCBzaWduYWwgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5jbGFzcyBfTXRlUHJlc2V0U2VydmljZSB7XG4gIHByaXZhdGUgcHJlc2V0cyA9IG5ldyBNYXA8c3RyaW5nLCBNb3J0YXJQcmVzZXQ+KFtcbiAgICBbJ2dsb2JhbCcsIGRlZmF1bHRQcmVzZXRdLFxuICAgIFsnZGVmYXVsdCcsIGRlZmF1bHRQcmVzZXRdLFxuICAgIFsncHgnLCBweFByZXNldF0sXG4gICAgWydjeCcsIGN4UHJlc2V0XSxcbiAgICBbJ3J4JywgcnhQcmVzZXRdLFxuICBdKTtcblxuICBwcml2YXRlIHByZXNldENoYW5nZWRTaWduYWwgPSBzaWduYWw8eyBwcmVzZXROYW1lOiBzdHJpbmc7IGNvbXBvbmVudE5hbWU6IHN0cmluZyB9Pih7XG4gICAgcHJlc2V0TmFtZTogbnVsbCxcbiAgICBjb21wb25lbnROYW1lOiBudWxsLFxuICB9KTtcblxuICBwdWJsaWMgc2V0UHJlc2V0KHByZXNldE5hbWU6IHN0cmluZywgcHJlc2V0OiBQYXJ0aWFsPE1vcnRhclByZXNldD4pIHtcbiAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgIC4uLih0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpID8/IGRlZmF1bHRQcmVzZXQpLFxuICAgICAgLi4ucHJlc2V0LFxuICAgIH0pO1xuICAgIHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbC5zZXQoeyBwcmVzZXROYW1lLCBjb21wb25lbnROYW1lOiBudWxsIH0pO1xuICB9XG5cbiAgcHVibGljIHNldENvbXBvbmVudFByZXNldDxDIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0PihcbiAgICBwcmVzZXROYW1lOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogQyxcbiAgICBjb21wb25lbnRQcmVzZXQ6IFBhcnRpYWw8TW9ydGFyUHJlc2V0W0NdPlxuICApIHtcbiAgICBjb25zdCBzZWxlY3RlZFByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSkgPz8gZGVmYXVsdFByZXNldDtcbiAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgIC4uLnNlbGVjdGVkUHJlc2V0LFxuICAgICAgW2NvbXBvbmVudE5hbWVdOiB7XG4gICAgICAgIC4uLihzZWxlY3RlZFByZXNldFtjb21wb25lbnROYW1lXSA/PyAoe30gYXMgYW55KSksXG4gICAgICAgIC4uLmNvbXBvbmVudFByZXNldCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLnNldCh7IHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWUgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29tcG9uZW50UHJlc2V0UHJvcGVydHk8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldCwgUCBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldFtDXT4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IEMsXG4gICAgcHJvcGVydHlOYW1lOiBQLFxuICAgIHZhbHVlOiBNb3J0YXJQcmVzZXRbQ11bUF0gfCBQYXJ0aWFsPE1vcnRhclByZXNldFtDXVtQXT5cbiAgKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpID8/IGRlZmF1bHRQcmVzZXQ7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb21wb25lbnRQcmVzZXQgPSBzZWxlY3RlZFByZXNldFtjb21wb25lbnROYW1lXSBhcyBhbnk7XG5cbiAgICAvLyBJZiBzZXR0aW5nIGFuIG9iamVjdCB2YWx1ZSBiZSBzdXJlIHRvIHNwcmVhZCBvdmVyIGV4aXN0aW5nIHZhbHVlXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgICAuLi5zZWxlY3RlZFByZXNldCxcbiAgICAgICAgW2NvbXBvbmVudE5hbWVdOiB7XG4gICAgICAgICAgLi4uc2VsZWN0ZWRDb21wb25lbnRQcmVzZXQsXG4gICAgICAgICAgW3Byb3BlcnR5TmFtZV06IHtcbiAgICAgICAgICAgIC4uLnNlbGVjdGVkQ29tcG9uZW50UHJlc2V0W3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSBqdXN0IHNldCB0aGUgdmFsdWVcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgICAuLi5zZWxlY3RlZFByZXNldCxcbiAgICAgICAgW2NvbXBvbmVudE5hbWVdOiB7XG4gICAgICAgICAgLi4uc2VsZWN0ZWRDb21wb25lbnRQcmVzZXQsXG4gICAgICAgICAgW3Byb3BlcnR5TmFtZV06IHZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbC5zZXQoeyBwcmVzZXROYW1lLCBjb21wb25lbnROYW1lIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFByZXNldChwcmVzZXROYW1lOiBzdHJpbmcpOiBNb3J0YXJQcmVzZXQge1xuICAgIGNvbnN0IHByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSk7XG4gICAgaWYgKCFwcmVzZXQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE10ZVByZXNldFNlcnZpY2U6IEEgcHJlc2V0IHdpdGggdGhlIG5hbWUgXCIke3ByZXNldE5hbWV9XCIgZG9lcyBub3QgZXhpc3RgKTtcbiAgICB9XG4gICAgcmV0dXJuIHByZXNldDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb21wb25lbnRQcmVzZXQ8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldD4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IENcbiAgKTogTW9ydGFyUHJlc2V0W0NdIHtcbiAgICBjb25zdCBwcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpO1xuICAgIGNvbnN0IGNvbXBvbmVudFByZXNldCA9IHByZXNldFtjb21wb25lbnROYW1lXTtcbiAgICBpZiAoIXByZXNldCkge1xuICAgICAgY29uc29sZS5lcnJvcihgTXRlUHJlc2V0U2VydmljZTogQSBwcmVzZXQgd2l0aCB0aGUgbmFtZSBcIiR7cHJlc2V0TmFtZX1cIiBkb2VzIG5vdCBleGlzdC5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudFByZXNldDtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RQcmVzZXQocHJlc2V0TmFtZTogc3RyaW5nKTogU2lnbmFsPE1vcnRhclByZXNldD4ge1xuICAgIGxldCBmaXJzdEVtaXQgPSB0cnVlO1xuICAgIHJldHVybiBjb21wdXRlZCh0aGlzLnByZXNldENoYW5nZWRTaWduYWwsIChjaGFuZ2UsIHNldCkgPT4ge1xuICAgICAgaWYgKGZpcnN0RW1pdCkge1xuICAgICAgICBzZXQodGhpcy5nZXRQcmVzZXQocHJlc2V0TmFtZSkpO1xuICAgICAgICBmaXJzdEVtaXQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnByZXNldE5hbWUgPT09IHByZXNldE5hbWUpIHtcbiAgICAgICAgc2V0KHRoaXMuZ2V0UHJlc2V0KHByZXNldE5hbWUpKTtcbiAgICAgIH1cbiAgICB9KSBhcyBTaWduYWw8TW9ydGFyUHJlc2V0PjtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RDb21wb25lbnRQcmVzZXQ8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldD4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IENcbiAgKTogU2lnbmFsPE1vcnRhclByZXNldFtDXT4ge1xuICAgIGxldCBmaXJzdEVtaXQgPSB0cnVlO1xuICAgIHJldHVybiBjb21wdXRlZCh0aGlzLnByZXNldENoYW5nZWRTaWduYWwsIChjaGFuZ2UsIHNldCkgPT4ge1xuICAgICAgaWYgKGZpcnN0RW1pdCkge1xuICAgICAgICBzZXQodGhpcy5nZXRDb21wb25lbnRQcmVzZXQocHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSkpO1xuICAgICAgICBmaXJzdEVtaXQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIChjaGFuZ2UucHJlc2V0TmFtZSA9PT0gcHJlc2V0TmFtZSAmJiAhY2hhbmdlLmNvbXBvbmVudE5hbWUpIHx8XG4gICAgICAgIChjaGFuZ2UucHJlc2V0TmFtZSA9PT0gcHJlc2V0TmFtZSAmJiBjaGFuZ2UuY29tcG9uZW50TmFtZSA9PT0gY29tcG9uZW50TmFtZSlcbiAgICAgICkge1xuICAgICAgICBzZXQodGhpcy5nZXRDb21wb25lbnRQcmVzZXQocHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSkpO1xuICAgICAgfVxuICAgIH0pIGFzIFNpZ25hbDxNb3J0YXJQcmVzZXRbQ10+O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVQcmVzZXRTZXJ2aWNlID0gbmV3IF9NdGVQcmVzZXRTZXJ2aWNlKCk7XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlcyAqL1xuaW1wb3J0IHsgQ29udGV4dENvbnN1bWVyIH0gZnJvbSAnQGxpdC1sYWJzL2NvbnRleHQnO1xuaW1wb3J0IHsgUHJvcGVydHlEZWNsYXJhdGlvbiwgUmVhY3RpdmVFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIENvbnN0cnVjdG9yLFxuICBpc1NzcixcbiAgTXRlRWxlbWVudCxcbiAgTXRlUHJlc2V0U2VydmljZSxcbiAgcHJlc2V0Q29udGV4dCxcbiAgc2lnbmFsLFxuICBjb21wdXRlZCxcbiAgVW5zdWJzY3JpYmVyLFxufSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgTW9ydGFyUHJlc2V0IH0gZnJvbSAnLi9wcmVzZXRzJztcblxuZXhwb3J0IHR5cGUgUHJlc2V0T3B0aW9ucyA9ICdtZCcgfCAnc20nIHwgJ2xnJyB8IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJlc2V0RWxlbWVudEludGVyZmFjZTxQPiB7XG4gIC8qKiBAaWdub3JlICovXG4gIHJlYWRvbmx5IF9fY29tcG9uZW50TmFtZToga2V5b2YgTW9ydGFyUHJlc2V0O1xuXG4gIC8qKiBTZWxlY3RzIHRoZSBwcmVzZXQgZm9yIHRoaXMgY29tcG9uZW50LiBPdmVycmlkZXMgdGhlIGdsb2JhbCBwcmVzZXQgZm9yIHRoaXMgaW5zdGFuY2Ugb2YgdGhpcyBjb21wb25lbnQuICovXG4gIHByZXNldDogc3RyaW5nO1xuXG4gIC8qKiBAaWdub3JlICovXG4gIGFwcGxpZWRQcmVzZXQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmVzZXRNaXhpbkZhY3RvcnlPcHRpb25zIHtcbiAgcmVmbGVjdEFwcGxpZWRQcmVzZXQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IHtcbiAgaXMsXG4gIGRlZmluZVByb3BlcnR5LFxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIGdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZ2V0UHJvdG90eXBlT2YsXG59ID0gT2JqZWN0O1xuXG5leHBvcnQgY29uc3QgUHJlc2V0TWl4aW5GYWN0b3J5ID0gPFA+KFxuICBjb21wb25lbnROYW1lOiBrZXlvZiBNb3J0YXJQcmVzZXQsXG4gIG9wdGlvbnM6IFByZXNldE1peGluRmFjdG9yeU9wdGlvbnMgPSB7IHJlZmxlY3RBcHBsaWVkUHJlc2V0OiBmYWxzZSB9XG4pID0+IHtcbiAgcmV0dXJuIDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgICBjbGFzcyBQcmVzZXRFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICByZWFkb25seSBfX2NvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lO1xuXG4gICAgICAvKiogTWFwIHRoYXQgc3RvcmVzIHByaXZhdGUgdmFsdWVzIHRoYXQgdGFrZSBwcmVjZWRlbmNlIG92ZXIgcHJlc2V0IHZhbHVlcyAqL1xuICAgICAgcHJvdGVjdGVkIF92YWx1ZU1hcCA9IG5ldyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+KCk7XG5cbiAgICAgIC8qKiBNYXAgdGhhdCBzdG9yZXMgZmFsbGJhY2sgcHJlc2V0IHZhbHVlcyBlbWl0dGVkIGJ5IHRoZSBwcmVzZXRDb250cm9sbGVyICovXG4gICAgICBwcm90ZWN0ZWQgX3ByZXNldE1hcCA9IG5ldyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+KCk7XG5cbiAgICAgIC8qKiBTZWxlY3RzIGEgc3BlY2lmaWMgcHJlc2V0IGZvciB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZS4gT3ZlcnJpZGVzIHRoZSBjdXJyZW50IGdsb2JhbCBwcmVzZXQuICovXG4gICAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pXG4gICAgICBzZXQgcHJlc2V0KHByZXNldDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3ByZXNldCA9IHByZXNldDtcbiAgICAgICAgdGhpcy5fYWN0aXZlUHJlc2V0U2lnbmFsLnNldChwcmVzZXQpO1xuICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgIC8vIFN0b3AgU1NSIGNvbnN0cnVjdG9yIGxpc3RlbmVyIGlmIHN0aWxsIG9wZW4uXG4gICAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1Yj8uKCk7XG4gICAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1YiA9IG51bGw7XG4gICAgICAgICAgY29uc3QgcHJlc2V0ID0gTXRlUHJlc2V0U2VydmljZS5nZXRQcmVzZXQodGhpcy5wcmVzZXQgPz8gJ2dsb2JhbCcpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlU3NyUHJlc2V0Q2hhbmdlcyhwcmVzZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBnZXQgcHJlc2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJlc2V0O1xuICAgICAgfVxuICAgICAgcHJpdmF0ZSBfcHJlc2V0ID0gJ2dsb2JhbCc7XG5cbiAgICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IG9wdGlvbnM/LnJlZmxlY3RBcHBsaWVkUHJlc2V0ID8/IGZhbHNlIH0pIGFwcGxpZWRQcmVzZXQgPSAnZ2xvYmFsJztcblxuICAgICAgQHN0YXRlKCkgcHJpdmF0ZSBfYXBwbGllZFByZXNldD86IHN0cmluZztcblxuICAgICAgLyoqIEtlZXBzIGNvbnN0cnVjdG9yIHByZXNldCBzdWJzY3JpcHRpb24gb3BlbiB1bnRpbCB3aWxsVXBkYXRlICovXG4gICAgICBwcml2YXRlIHNzckNvbnN0cnVjdG9yU3ViOiBVbnN1YnNjcmliZXI7XG4gICAgICBwcml2YXRlIHByZXZpb3VzQ29tcG9uZW50VW5zdWI6IFVuc3Vic2NyaWJlcjtcblxuICAgICAgLyoqIEVtaXRzIHdoZW5ldmVyIHRoZSBsb2NhbCBwcmVzZXQgdmFsdWUgY2hhbmdlcy4gKi9cbiAgICAgIHByaXZhdGUgX2FjdGl2ZVByZXNldFNpZ25hbCA9IHNpZ25hbDxzdHJpbmc+KG51bGwpO1xuICAgICAgcHJpdmF0ZSBfcGFyZW50UHJlc2V0U2lnbmFsID0gc2lnbmFsPHN0cmluZz4obnVsbCk7XG5cbiAgICAgIHByaXZhdGUgX3ByZXNldENvbnRleHQgPSBuZXcgQ29udGV4dENvbnN1bWVyKHRoaXMsIHtcbiAgICAgICAgY29udGV4dDogcHJlc2V0Q29udGV4dCxcbiAgICAgICAgc3Vic2NyaWJlOiB0cnVlLFxuICAgICAgICBjYWxsYmFjazogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcGFyZW50UHJlc2V0U2lnbmFsLnNldCgodmFsdWUgPT09ICcnID8gbnVsbCA6IHZhbHVlKSA/PyAnZ2xvYmFsJyk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBPdmVycmlkZXMgdGhlIGRlZmF1bHQgZ2V0UHJvcGVydHlEZXNjcmlwdG9yIG1ldGhvZCB0byBjaGVjayBmb3IgdGhlIGN1c3RvbVxuICAgICAgICogYGlzUHJlc2V0YCBvcHRpb24uIERlc2NyaXB0b3JzIG9mIHByb3BlcnRpZXMgdGhhdCBhcmUgZGVjbGFyZWQgd2l0aCB0aGUgYGlzUHJlc2V0YFxuICAgICAgICogb3B0aW9uIGFyZSBkZWZpbmVkIHdpdGggc3BlY2lhbCBnZXR0ZXIvc2V0dGVyIGxvZ2ljIHRoYXQgc2V0cyB2YWx1ZSB0byB2YWx1ZU1hcFxuICAgICAgICogYW5kIGdldHMgdmFsdWVzIGZyb20gdGhlIHZhbHVlTWFwIGJ1dCB0aGVuIGFsc28gZmFsbHMgYmFjayB0byBhbnkgdmFsdWUgaW4gdGhlIHByZXNldE1hcFxuICAgICAgICpcbiAgICAgICAqIFRoZSBwcmVzZXRNYXAgaXMgcG9wdWxhdGVkIGFib3ZlIGZyb20gdmFsdWVzIGZyb20gdGhlIHByZXNldENvbnRyb2xsZXIgd2hlbmV2ZXIgdGhlXG4gICAgICAgKiBwcmVzZXQgZm9yIHRoaXMgY29tcG9uZW50IGlzIGNoYW5nZWQgZ2xvYmFsbHkuXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICAgIG5hbWU6IFByb3BlcnR5S2V5LFxuICAgICAgICBrZXk6IHN0cmluZyB8IHN5bWJvbCxcbiAgICAgICAgb3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvblxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHsgZ2V0LCBzZXQgfSA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLnByb3RvdHlwZSwgbmFtZSkgPz8ge1xuICAgICAgICAgIGdldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW2tleSBhcyBrZXlvZiB0eXBlb2YgdGhpc107XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQodGhpczogUmVhY3RpdmVFbGVtZW50LCB2OiB1bmtub3duKSB7XG4gICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcgfCBzeW1ib2wsIHVua25vd24+KVtrZXldID0gdjtcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGdldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQpOiBhbnkge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBnZXR0ZXIgbG9naWMgdGhhdCBnZXRzIGZyb20gdGhlIHZhbHVlTWFwIG9yIHByZXNldE1hcFxuICAgICAgICAgICAgaWYgKG9wdGlvbnNbJ2lzUHJlc2V0J10pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkuX3ZhbHVlTWFwIGFzIE1hcDxcbiAgICAgICAgICAgICAgICAgICAgUHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgICAgIFBba2V5b2YgUF1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICApLmdldChuYW1lKSB8fFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fcHJlc2V0TWFwIGFzIE1hcDxcbiAgICAgICAgICAgICAgICAgICAgUHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgICAgIFBba2V5b2YgUF1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICApLmdldChuYW1lKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVmYXVsdCBwcm9wZXJ0eSBnZXR0ZXIgbG9naWNcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gZ2V0Py5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCwgdmFsdWU6IHVua25vd24pIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgc2V0dGVyIGxvZ2ljIHRoYXQgc2V0cyB0byB0aGUgdmFsdWVNYXBcbiAgICAgICAgICAgIGlmIChvcHRpb25zWydpc1ByZXNldCddKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gKFxuICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fdmFsdWVNYXAgYXMgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPlxuICAgICAgICAgICAgICApLmdldChuYW1lKTtcbiAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fdmFsdWVNYXAgYXMgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPlxuICAgICAgICAgICAgICApLnNldChuYW1lLCB2YWx1ZSBhcyBhbnkpO1xuICAgICAgICAgICAgICAvLyBEdXJpbmcgU1NSIHdlIG5lZWQgdG8gdXBkYXRlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgIGlmIChpc1NzcigpKSB7XG4gICAgICAgICAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBSZWFjdGl2ZUVsZW1lbnQpLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIE9uIHRoZSBjbGllbnQgd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgY3VycmVudCB1cGRhdGUgdG8gZmluaXNoXG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlYWN0aXZlRWxlbWVudCkucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlZmF1bHQgcHJvcGVydHkgc2V0dGVyIGxvZ2ljXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBnZXQ/LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgIHNldCEuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICh0aGlzIGFzIHVua25vd24gYXMgUmVhY3RpdmVFbGVtZW50KS5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgICAgICAvLyBTdWJzY3JpYmVzIGZvciBjaGFuZ2VzIHRvIHRoaXMgY29tcG9uZW50cyBhY3RpdmUgcHJlc2V0IHRvIHVwZGF0ZSBhbGwgcmVsZXZhbnQgcHJvcHMgcHJlc2V0IHZhbHVlc1xuICAgICAgICB0aGlzLnN1YnMucHVzaChcbiAgICAgICAgICBjb21wdXRlZChcbiAgICAgICAgICAgIFt0aGlzLl9hY3RpdmVQcmVzZXRTaWduYWwsIHRoaXMuX3BhcmVudFByZXNldFNpZ25hbF0sXG4gICAgICAgICAgICAoW2FjdGl2ZVByZXNldCwgcGFyZW50UHJlc2V0XSwgc2V0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhY3RpdmVQcmVzZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZSA9XG4gICAgICAgICAgICAgICAgICBhY3RpdmVQcmVzZXQgPT09ICdnbG9iYWwnXG4gICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICA6IE10ZVByZXNldFNlcnZpY2UuZ2V0Q29tcG9uZW50UHJlc2V0KGFjdGl2ZVByZXNldCwgJ3RoZW1lJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2xvY2FsUHJlc2V0VGhlbWUgPSBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBudWxsKTtcblxuICAgICAgICAgICAgICB0aGlzLl9hcHBsaWVkUHJlc2V0ID0gYWN0aXZlUHJlc2V0ID8/IHBhcmVudFByZXNldCA/PyAnZ2xvYmFsJztcbiAgICAgICAgICAgICAgdGhpcy5hcHBsaWVkUHJlc2V0ID0gTXRlUHJlc2V0U2VydmljZS5nZXRDb21wb25lbnRQcmVzZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwbGllZFByZXNldCxcbiAgICAgICAgICAgICAgICAncHJlc2V0J1xuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIC8vIFVuc3Vic2NyaWJlIHRvIHByZXZpb3VzIGNvbXBvbmVudCBwcmVzZXQgY2hhbmdlc1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ29tcG9uZW50VW5zdWI/LigpO1xuICAgICAgICAgICAgICAvLyBVcGRhdGUgcHJvcHMgaWYgbmV3IGNvbXBvbmVudCBwcmVzZXQgZW1pdHNcbiAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0NvbXBvbmVudFVuc3ViID0gTXRlUHJlc2V0U2VydmljZS5zZWxlY3RDb21wb25lbnRQcmVzZXQoXG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwbGllZFByZXNldCxcbiAgICAgICAgICAgICAgICB0aGlzLl9fY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgICApLnN1YnNjcmliZSgobmV3UHJlc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ByZXNldCkge1xuICAgICAgICAgICAgICAgICAgc2V0KG5ld1ByZXNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApLnN1YnNjcmliZSgobmV3UHJlc2V0cykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWVzTWFwID0gbmV3IE1hcCh0aGlzLl9wcmVzZXRNYXApO1xuICAgICAgICAgICAgY29uc3Qgb2xkUHJvcHMgPSBBcnJheS5mcm9tKHRoaXMuX3ByZXNldE1hcC5rZXlzKCkpO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSBPYmplY3Qua2V5cyhuZXdQcmVzZXRzID8/IHt9KTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGtleXMgaW4gdGhlIG5ldyBwcmVzZXRzIGNsZWFyIGFsbCBwcmVzZXQgdmFsdWVzXG4gICAgICAgICAgICBpZiAobmV3UHJvcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG9sZCBzZXQgcHJvcHMgYW5kIG5ldyBvbmVzXG4gICAgICAgICAgICAvLyBSZW1vdmUgb2xkIG9uZXMgJiBzZXQgbmV3IG9uZXNcbiAgICAgICAgICAgIC8vIEZpbmFsbHkgZm9yY2UgYW4gdXBkYXRlIGZvciBlYWNoIHByb3BcbiAgICAgICAgICAgIFsuLi5vbGRQcm9wcywgLi4ubmV3UHJvcHNdLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAobmV3UHJlc2V0c1trZXldKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLnNldChrZXksIG5ld1ByZXNldHNba2V5XSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShrZXksIG9sZFZhbHVlc01hcC5nZXQoa2V5KSA/PyBudWxsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgICAgIHRoaXMucHJldmlvdXNDb21wb25lbnRVbnN1Yj8uKCk7XG4gICAgICAgIHRoaXMuc3NyQ29uc3RydWN0b3JTdWI/LigpO1xuICAgICAgfVxuXG4gICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBzdXBlcihhcmdzKTtcblxuICAgICAgICAvLyBUT0RPKHJlZWNlKTogRW5zdXJlIHdlIHVwZGF0ZSB0aGlzIHRvIHN1cHBvcnQgY29udGV4dCB3aGVuIHRoYXQgaXMgU1NSIEZyaWVuZGx5OiBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9pc3N1ZXMvMzM2NVxuICAgICAgICAvLyBIYW5kbGUgc2V0dGluZyBwcmVzZXQgZGVmYXVsdHMgaW4gU1NSXG4gICAgICAgIGlmIChpc1NzcigpKSB7XG4gICAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1YiA9IE10ZVByZXNldFNlcnZpY2Uuc2VsZWN0UHJlc2V0KHRoaXMucHJlc2V0ID8/ICdnbG9iYWwnKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocHJlc2V0KSA9PiB0aGlzLmhhbmRsZVNzclByZXNldENoYW5nZXMocHJlc2V0KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBoYW5kbGVTc3JQcmVzZXRDaGFuZ2VzKHByZXNldDogTW9ydGFyUHJlc2V0KSB7XG4gICAgICAgIGlmIChwcmVzZXQpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRQcmVzZXRzID0gcHJlc2V0W3RoaXMuX19jb21wb25lbnROYW1lXTtcbiAgICAgICAgICBjb25zdCBvbGRQcm9wcyA9IEFycmF5LmZyb20odGhpcy5fcHJlc2V0TWFwLmtleXMoKSk7XG4gICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRQcmVzZXRzID8/IHt9KTtcblxuICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBrZXlzIGluIHRoZSBuZXcgcHJlc2V0cyBjbGVhciBhbGwgcHJlc2V0IHZhbHVlc1xuICAgICAgICAgIGlmIChuZXdQcm9wcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5jbGVhcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBMb29wIHRocm91Z2ggb2xkIHNldCBwcm9wcyBhbmQgbmV3IG9uZXNcbiAgICAgICAgICAvLyBSZW1vdmUgb2xkIG9uZXMgJiBzZXQgbmV3IG9uZXNcbiAgICAgICAgICAvLyBGaW5hbGx5IGZvcmNlIGFuIHVwZGF0ZSBmb3IgZWFjaCBwcm9wXG4gICAgICAgICAgWy4uLm9sZFByb3BzLCAuLi5uZXdQcm9wc10uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50UHJlc2V0c1trZXldKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5zZXQoa2V5LCBjb21wb25lbnRQcmVzZXRzW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKGtleSwgbnVsbCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5hcHBsaWVkUHJlc2V0ID0gcHJlc2V0WydwcmVzZXQnXTtcbiAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ2FwcGxpZWRQcmVzZXQnLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUHJlc2V0RWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxQcmVzZXRFbGVtZW50SW50ZXJmYWNlPFA+PiAmIFQ7XG4gIH07XG59O1xuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdAbGl0LWxhYnMvY29udGV4dCc7XG5cbmV4cG9ydCBjb25zdCBwcmVzZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxzdHJpbmc+KCdNVEVfUFJFU0VUJyk7XG4iLCAiaW1wb3J0IHsgUmVhY3RpdmVDb250cm9sbGVySG9zdCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBNdGVQcmVzZXRTZXJ2aWNlIH0gZnJvbSAnLi4vcHJlc2V0cyc7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBNdGVFbGVtZW50IH0gZnJvbSAnLi4vYmFzZS1jbGFzc2VzJztcblxuY29uc3QgZ2xvYmFsUHJlc2V0JCA9IE10ZVByZXNldFNlcnZpY2Uuc2VsZWN0UHJlc2V0KCdnbG9iYWwnKTtcbmNvbnN0IGdsb2JhbFByZXNldE5hbWUkID0gY29tcHV0ZWQoZ2xvYmFsUHJlc2V0JCwgKHByZXNldCkgPT4gcHJlc2V0LnByZXNldCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGllZFByZXNldENvbnRleHQge1xuICBwcmVzZXROYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUHJlc2V0IGlzIGRldGVybWluZWQgZnJvbSBlaXRoZXIgdGhlIHBhcmVudCBwcmVzZXQgY29udGV4dCBvciBhIGxvY2FsIHByZXNldCBwcm9wZXJ0eS5cbiAqIFRoaXMgY29udHJvbGxlciBrZWVwcyB0cmFjayBvZiB0aGUgYWN0dWFsIGFjdGl2ZSBwcmVzZXQgYXBwbGllZCB0byB0aGUgY3VycmVudCBjb21wb25lbnQuXG4gKiBJZiBhIGNhbGxiYWNrIGlzIGdpdmVuIGl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIHRoYXQgY29udGV4dCBjaGFuZ2VzLiBPdGhlcndpc2UgY29udHJvbGxlclxuICogbWV0aG9kcyBjYW4gYmUgY2FsbGVkIHdoZW4gbmVlZGVkLlxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgZXZlbiB3aXRoaW4gZWxlbWVudHMgdGhhdCBkbyBub3QgaGF2ZSB0aGVpciBvd24gcHJlc2V0XG4gKiBvcHRpb25zIChha2EgZXh0ZW5kIHRoZSBwcmVzZXRNaXhpbikuXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWVkUHJlc2V0Q29udGV4dENvbnRyb2xsZXIge1xuICBwcml2YXRlIGFwcGxpZWRQcmVzZXROYW1lID0gJ2dsb2JhbCc7XG4gIHByaXZhdGUgYWN0aXZlR2xvYmFsUHJlc2V0TmFtZSA9ICdkZWZhdWx0JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGhvc3Q6IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgJiBNdGVFbGVtZW50LFxuICAgIHByaXZhdGUgY2FsbGJhY2s/OiAoY29udGV4dDogQXBwbGllZFByZXNldENvbnRleHQpID0+IHZvaWRcbiAgKSB7XG4gICAgdGhpcy5ob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICB9XG5cbiAgaG9zdENvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmhvc3Quc3Vicy5wdXNoKFxuICAgICAgZ2xvYmFsUHJlc2V0TmFtZSQuc3Vic2NyaWJlKChnbG9iYWxQcmVzZXROYW1lKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlR2xvYmFsUHJlc2V0TmFtZSA9IGdsb2JhbFByZXNldE5hbWU7XG4gICAgICAgIHRoaXMudXBkYXRlQXBwbGllZFByZXNldENvbnRleHQoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLmV4ZWNDYWxsYmFjaygpO1xuICB9XG5cbiAgaG9zdFVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUFwcGxpZWRQcmVzZXRDb250ZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIGV4ZWNDYWxsYmFjaygpIHtcbiAgICB0aGlzLmNhbGxiYWNrPy4oe1xuICAgICAgcHJlc2V0TmFtZTogdGhpcy5hcHBsaWVkUHJlc2V0TmFtZSxcbiAgICB9IGFzIEFwcGxpZWRQcmVzZXRDb250ZXh0KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQXBwbGllZFByZXNldENvbnRleHQoKSB7XG4gICAgbGV0IHVwZGF0ZWQgPSBmYWxzZTtcbiAgICBjb25zdCBuZXdQcmVzZXROYW1lID0gKHRoaXMuaG9zdCBhcyBhbnkpLmFwcGxpZWRQcmVzZXQgPz8gdGhpcy5hY3RpdmVHbG9iYWxQcmVzZXROYW1lO1xuICAgIGlmIChuZXdQcmVzZXROYW1lICE9PSB0aGlzLmFwcGxpZWRQcmVzZXROYW1lKSB7XG4gICAgICB0aGlzLmFwcGxpZWRQcmVzZXROYW1lID0gbmV3UHJlc2V0TmFtZTtcbiAgICAgIHVwZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZCkge1xuICAgICAgdGhpcy5leGVjQ2FsbGJhY2soKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlUHJlc2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBsaWVkUHJlc2V0TmFtZTtcbiAgfVxufVxuIiwgImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvYmFzZS5qcyc7XG4vKipcbiAqIEl0ZW1zIGluIHRoaXMgZmlsZSBhcmUgbW9kaWZpY2F0aW9ucyBvZiBvZiB0aGUgZGVjb3JhdG9ycyBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvYmxvYi9tYWluL3BhY2thZ2VzL3JlYWN0aXZlLWVsZW1lbnQvc3JjL2RlY29yYXRvcnMvY3VzdG9tLWVsZW1lbnQudHNcbiAqXG4gKiBXZSd2ZSBhZGRlZCBjaGVja3MgdG8gcHJldmVudCByZS1yZWdpc3RyYXRpb25zIGZyb20gdGhyb3dpbmcgaGFyZCBlcnJvcnMuXG4gKi9cblxuLyoqXG4gKiBBbGxvdyBmb3IgY3VzdG9tIGVsZW1lbnQgY2xhc3NlcyB3aXRoIHByaXZhdGUgY29uc3RydWN0b3JzXG4gKi9cbnR5cGUgQ3VzdG9tRWxlbWVudENsYXNzID0gT21pdDx0eXBlb2YgSFRNTEVsZW1lbnQsICduZXcnPjtcblxuZXhwb3J0IHR5cGUgQ3VzdG9tRWxlbWVudERlY29yYXRvciA9IHtcbiAgLy8gbGVnYWN5XG4gIChjbHM6IEN1c3RvbUVsZW1lbnRDbGFzcyk6IHZvaWQ7XG5cbiAgLy8gc3RhbmRhcmRcbiAgKHRhcmdldDogQ3VzdG9tRWxlbWVudENsYXNzLCBjb250ZXh0OiBDbGFzc0RlY29yYXRvckNvbnRleHQ8Q29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+Pik6IHZvaWQ7XG59O1xuXG4vKipcbiAqIENsYXNzIGRlY29yYXRvciBmYWN0b3J5IHRoYXQgZGVmaW5lcyB0aGUgZGVjb3JhdGVkIGNsYXNzIGFzIGEgY3VzdG9tIGVsZW1lbnQuXG4gKlxuICogYGBganNcbiAqIEBjdXN0b21FbGVtZW50KCdteS1lbGVtZW50JylcbiAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgYDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKiBAcGFyYW0gdGFnTmFtZSBUaGUgdGFnIG5hbWUgb2YgdGhlIGN1c3RvbSBlbGVtZW50IHRvIGRlZmluZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmluZUVsZW1lbnQgPVxuICAodGFnTmFtZTogc3RyaW5nKTogQ3VzdG9tRWxlbWVudERlY29yYXRvciA9PlxuICAoXG4gICAgY2xhc3NPclRhcmdldDogQ3VzdG9tRWxlbWVudENsYXNzIHwgQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+LFxuICAgIGNvbnRleHQ/OiBDbGFzc0RlY29yYXRvckNvbnRleHQ8Q29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+PlxuICApID0+IHtcbiAgICBpZiAoY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyKCgpID0+IHtcbiAgICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQ/Lih0YWdOYW1lKSkge1xuICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGFzc09yVGFyZ2V0IGFzIEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldD8uKHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGFzc09yVGFyZ2V0IGFzIEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3Rvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdChbZGVuc2l0eT1jb21wYWN0XSl7LS1tdGUtc3BhY2UteHhzOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHMpOy0tbXRlLXNwYWNlLXNtOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXNtKTstLW10ZS1zcGFjZS1tZDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QtbGcpOy0tbXRlLXNwYWNlLXhsOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXhsKTstLW10ZS1zcGFjZS14eGw6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXh4eGwpfTpob3N0KFtkZW5zaXR5PWNvbWZ5XSl7LS1tdGUtc3BhY2UteHhzOnZhcigtLW10ZS1zcGFjZS1jb21meS14eHMpOy0tbXRlLXNwYWNlLXhzOnZhcigtLW10ZS1zcGFjZS1jb21meS14cyk7LS1tdGUtc3BhY2Utc206dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXNtKTstLW10ZS1zcGFjZS1tZDp2YXIoLS1tdGUtc3BhY2UtY29tZnktbWQpOy0tbXRlLXNwYWNlLWxnOnZhcigtLW10ZS1zcGFjZS1jb21meS1sZyk7LS1tdGUtc3BhY2UteGw6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXhsKTstLW10ZS1zcGFjZS14eGw6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4bCk7LS1tdGUtc3BhY2UteHh4bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHh4bCl9Omhvc3QoW2RlbnNpdHk9cm9vbXldKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLXJvb215LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLXJvb215LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2Utcm9vbXktc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1yb29teS1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLXJvb215LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14eHhsKX1gOyIsICJpbXBvcnQgeyBMaXRFbGVtZW50LCBQcm9wZXJ0eVZhbHVlcyB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRGlzYWJsZWRJbnRlcmZhY2Uge1xuICAvKipcbiAgICogRGlzYWJsZXMgdGhpcyBjb21wb25lbnRcbiAgICogQGF0dHIgZGlzYWJsZWRcbiAgICovXG4gIGRpc2FibGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgRGlzYWJsZWRNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgRGlzYWJsZWRFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBkaXNhYmxlZFxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8vIEJlY2F1c2UgYGFyaWFEaXNhYmxlZGAgZXhpc3RzIGFzIGEgc3RyaW5nIG9uIExpdEVsZW1lbnQgd2UgY2Fubm90IGRlY2xhcmUgdGhpcyBhIHByb3BlcnR5IGhlcmVcbiAgICBwcm90ZWN0ZWQgd2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzPGFueT4pOiB2b2lkIHtcbiAgICAgIHN1cGVyLndpbGxVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKF9jaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIGAke3RoaXMuZGlzYWJsZWR9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gRGlzYWJsZWRFbGVtZW50IGFzIENvbnN0cnVjdG9yPERpc2FibGVkSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBwcmVzZXRQcm9wZXJ0eSB9IGZyb20gJy4uL3ByZXNldHMvcHJlc2V0LmRlY29yYXRvcic7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEludmVyc2VJbnRlcmZhY2Uge1xuICAvKiogUmVuZGVycyB0aGlzIGNvbXBvbmVudCB3aXRoIGludmVyc2UgdGhlbWluZyAqL1xuICBpbnZlcnNlOiBib29sZWFuO1xuXG4gIC8qKiBTcGVjaWFsIG9wdGlvbiB0byBvdmVycmlkZSBpbnZlcnNlIHdoZW4gaXQgaXMgc2V0IGJ5IGEgcHJlc2V0ICovXG4gIHdpdGhvdXRJbnZlcnNlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgSW52ZXJzZU1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBJbnZlcnNlRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKiBSZW5kZXJzIHRoaXMgY29tcG9uZW50IHdpdGggaW52ZXJzZSB0aGVtaW5nICovXG4gICAgQHByZXNldFByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBpbnZlcnNlID0gZmFsc2U7XG5cbiAgICAvKiogU3BlY2lhbCBvcHRpb24gdG8gb3ZlcnJpZGUgaW52ZXJzZSB3aGVuIGl0IGlzIHNldCBieSBhIHByZXNldCAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgd2l0aG91dEludmVyc2UgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gSW52ZXJzZUVsZW1lbnQgYXMgQ29uc3RydWN0b3I8SW52ZXJzZUludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3QoW2ludmVyc2VdOm5vdChbd2l0aG91dEludmVyc2VdKSl7LS1tdGUtc3VyZmFjZS0xOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tbXRlLXN1cmZhY2UtMS1yZ2I6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpOy0tbXRlLXN1cmZhY2UtMjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlKTstLW10ZS1zdXJmYWNlLTItcmdiOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UtcmdiKTstLW10ZS1zdXJmYWNlLTM6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS0zLXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtc3VyZmFjZS00OnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tbXRlLXN1cmZhY2UtNC1yZ2I6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpOy0tbXRlLWluay0xOnZhcigtLW10ZS13aGl0ZSk7LS1tdGUtaW5rLTEtcmdiOnZhcigtLW10ZS13aGl0ZS1yZ2IpOy0tbXRlLWluay0yOnZhcigtLW10ZS13aGl0ZSk7LS1tdGUtaW5rLTItcmdiOnZhcigtLW10ZS13aGl0ZS1yZ2IpOy0tbXRlLWluay0zOnZhcigtLW10ZS13aGl0ZSk7LS1tdGUtaW5rLTMtcmdiOnZhcigtLW10ZS13aGl0ZS1yZ2IpOy0tbXRlLWluay00OnZhcigtLW10ZS1ibGFjayk7LS1tdGUtaW5rLTQtcmdiOnZhcigtLW10ZS1ibGFjay1yZ2IpOy0tbXRlLWluay01OnZhcigtLW10ZS1ibGFjayk7LS1tdGUtaW5rLTUtcmdiOnZhcigtLW10ZS1ibGFjay1yZ2IpOy0tbXRlLWJvcmRlci0xOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZSk7LS1tdGUtYm9yZGVyLTEtcmdiOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZS1yZ2IpOy0tbXRlLWJvcmRlci0yOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZSk7LS1tdGUtYm9yZGVyLTItcmdiOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZS1yZ2IpOy0tbXRlLWJvcmRlci0zOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZSk7LS1tdGUtYm9yZGVyLTMtcmdiOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZS1yZ2IpOy0tbXRlLWRpc2FibGVkLTE6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMSk7LS1tdGUtZGlzYWJsZWQtMS1yZ2I6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMS1yZ2IpOy0tbXRlLWRpc2FibGVkLTI6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMik7LS1tdGUtZGlzYWJsZWQtMi1yZ2I6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMik7LS1tdGUtZGlzYWJsZWQtMzp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zKTstLW10ZS1kaXNhYmxlZC0zLXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zLXJnYik7LS1tdGUtZGlzYWJsZWQtNDp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zKTstLW10ZS1kaXNhYmxlZC00LXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWRlZmF1bHQtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMS1kZWZhdWx0LWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LWEpOy0tbXRlLWl0LXN1cmZhY2UtMS1ob3Zlci1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMS1ob3Zlci1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItYSk7LS1tdGUtaXQtc3VyZmFjZS0xLWFjdGl2ZS1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtYSk7LS1tdGUtaXQtc3VyZmFjZS0yLWRlZmF1bHQtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMi1kZWZhdWx0LWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LWEpOy0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItYSk7LS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtYSk7LS1tdGUtaXQtc3VyZmFjZS0zLWRlZmF1bHQtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMy1kZWZhdWx0LWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LWEpOy0tbXRlLWl0LXN1cmZhY2UtMy1ob3Zlci1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMy1ob3Zlci1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItYSk7LS1tdGUtaXQtc3VyZmFjZS0zLWFjdGl2ZS1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTMtYWN0aXZlLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtYSk7LS1tdGUtbGlnaHQ6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1saWdodC1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtZGFyazp2YXIoLS1tdGUtYmxhY2spOy0tbXRlLWRhcmstcmdiOnZhcigtLW10ZS1ibGFjay1yZ2IpOy0tYnV0dG9uLWZpbGxlZC1iZzp2YXIoLS1tdGUtd2hpdGUpOy0tYnV0dG9uLWZpbGxlZC1pbms6dmFyKC0tbXRlLWJsYWNrKTstLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWJnOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZSk7LS1idXR0b24tZmlsbGVkLWFjdGl2ZS1pbms6dmFyKC0tbXRlLXdoaXRlKX1gOyIsICJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgb25VcGRhdGUgfSBmcm9tICcuLi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IERpc2FibGVkSW50ZXJmYWNlIH0gZnJvbSAnLi9kaXNhYmxlZC5taXhpbic7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IGlzU3NyIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGFiSW5kZXhJbnRlcmZhY2Uge1xuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHRhYmluZGV4IGF0dHJpYnV0ZSB2YWx1ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGdldFRhYkluZGV4QWRhcHRlcigpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byBzZXQgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBvbiBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzZXRUYWJJbmRleEFkYXB0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byByZW1vdmUgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlbW92ZVRhYkluZGV4QWRhcHRlcigpOiB2b2lkO1xufVxuXG4vKipcbiAqIE1peGluIHRvIHByb3Blcmx5IG1hbmFnZSB0aGUgdGFiaW5kZXggaW4gYSBub24taW50cnVzaXZlIHdheS4gV2hlbiBkaXNhYmxlZCBpcyB0cnVlLFxuICogdGhlIHRhYmluZGV4IHdpbGwgQUxXQVlTIGJlIGAtMWAuIEhvd2V2ZXIsIGFueSBjaGFuZ2VzIHRvIHRhYmluZGV4IHdpbGwgYmUgaW50ZXJjZXB0ZWRcbiAqIGFuZCBjYWNoZWQgaW50ZXJuYWxseSB1bnRpbCBkaXNhYmxlZCBpcyBmYWxzZSwgdGhlbiB0YWJpbmRleCB3aWxsIGJlIHJlc3RvcmVkIHRvIHRoZVxuICogY2FjaGVkIHZhbHVlLCBvciByZW1vdmVkIGlmIHRoYXQgaXMgdW5kZWZpbmVkLlxuICovXG5leHBvcnQgY29uc3QgVGFiSW5kZXhNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudCAmIERpc2FibGVkSW50ZXJmYWNlPj4oXG4gIHN1cGVyQ2xhc3M6IFQsXG4gIG9wdGlvbnM6IHsgaW5pdGlhbFRhYkluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQgfSA9IHsgaW5pdGlhbFRhYkluZGV4OiB1bmRlZmluZWQgfVxuKSA9PiB7XG4gIGNsYXNzIFRhYkluZGV4RWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ3RhYmluZGV4JywgdHlwZTogTnVtYmVyLCBub0FjY2Vzc29yOiB0cnVlIH0pXG4gICAgcHVibGljIG92ZXJyaWRlIHNldCB0YWJJbmRleCh0YWJJbmRleDogbnVtYmVyKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAvLyBXaGVuIHNldHRpbmcgdGhlIHRhYkluZGV4IG9uIHRoZSBjdXJyZW50IGVsZW1lbnQgdG8gYC0xYCBkaXNhYmxlZCwgd2Ugd2FudCB0byBrZWVwIHRyYWNrIG9mIHdoYXQgdGhlIHRhYkluZGV4IHZhbHVlIGJlZm9yZSB0aGF0IHdhc1xuICAgICAgICAvLyBhcyB0aGUgY2FjaGVkVGFiSW5kZXguIFRvIGRvIHRoaXMgd2UgbXVzdCBpZ25vcmUgdGhlIGluaXRpYWwgY2hhbmdlIHRvIGAtMWAgYW5kIHRoZW4gY2FjaGUgYW55IGZ1dHVyZSB2YWx1ZXMgYmVmb3JlIGtlZXBpbmcgdGhlXG4gICAgICAgIC8vIHRhYkluZGV4IGFzIGAtMWAgdW50aWwgbm8gbG9uZ2VyIGRpc2FibGVkLiBUaGVuIHdlIGNhbiByZXR1cm4gdGhlIHRhYkluZGV4IHRvIHdoYXRldmVyIHRoZSBsYXN0IHNldCB2YWx1ZSB3YXMgZnJvbSB0aGUgY2FjaGVkIGluZGV4LlxuICAgICAgICBpZiAoIXRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSkge1xuICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcignLTEnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoYCR7dGhpcy5fdGFiSW5kZXh9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgdGFiSW5kZXgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGFiSW5kZXg7XG4gICAgfVxuICAgIHByaXZhdGUgX3RhYkluZGV4ID0gb3B0aW9ucz8uaW5pdGlhbFRhYkluZGV4O1xuICAgIHByaXZhdGUgX2NhY2hlZFRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IGZhbHNlO1xuXG4gICAgQG9uVXBkYXRlKFsnZGlzYWJsZWQnXSwgeyBvbjogJ2JvdGgnIH0pXG4gICAgcHJpdmF0ZSBoYW5kbGVUYWJpbmRleENoYW5nZShjaGFuZ2VkUHJvcHMpIHtcbiAgICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIGlmIChjaGFuZ2VkUHJvcHMuZ2V0KCdkaXNhYmxlZCcpID09PSBmYWxzZSAmJiB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSBOdW1iZXIodGhpcy5nZXRUYWJJbmRleEFkYXB0ZXIoKSk7XG4gICAgICAgICAgdGhpcy5fdGFiSW5kZXggPSAtMTtcbiAgICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcignLTEnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2VkUHJvcHMuZ2V0KCdkaXNhYmxlZCcpID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2NhY2hlZFRhYkluZGV4ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fY2FjaGVkVGFiSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYkluZGV4ID0gdGhpcy5fY2FjaGVkVGFiSW5kZXg7XG4gICAgICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl9jYWNoZWRUYWJJbmRleH1gKTtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZWRUYWJJbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byByZXRyaWV2ZSB0aGUgY3VycmVudCB0YWJpbmRleCBhdHRyaWJ1dGUgdmFsdWUgZnJvbSBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudCAqL1xuICAgIGdldFRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHNldCB0aGUgdGFiaW5kZXggYXR0cmlidXRlIG9uIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50ICovXG4gICAgc2V0VGFiSW5kZXhBZGFwdGVyKHZhbHVlOiBzdHJpbmcsIHNob3VsZFByZXZlbnRUYWJJbmRleENoYW5nZU9uU2VsZiA9IGZhbHNlKSB7XG4gICAgICBpZiAoc2hvdWxkUHJldmVudFRhYkluZGV4Q2hhbmdlT25TZWxmKSB7XG4gICAgICAgIHRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byByZW1vdmUgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50ICovXG4gICAgcmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgd2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgc3VwZXIud2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChpc1NzcigpICYmIHRoaXMuX3RhYkluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoYCR7dGhpcy5fdGFiSW5kZXh9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAodGhpcy5fdGFiSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl90YWJJbmRleH1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFRhYkluZGV4RWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxUYWJJbmRleEludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50LCBTdHlsZU1hcCB9IGZyb20gJy4uJztcbmltcG9ydCB7IHNlbGVjdG9yRmFjdG9yeSB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBNdGVFbGVtZW50UGFydHMge1xuICAvKiogVGhlIGhvc3QgZWxlbWVudCBcInBhcnRcIi4gT3ZlcnJpZGVzIHRoZSBgc2VgIHByb3BlcnR5IG9mIHRoaXMgZWxlbWVudCAqL1xuICBob3N0PzogU3R5bGVNYXA7XG59XG5cbmV4cG9ydCB0eXBlIFN0eWxlUGFydHNNYXA8VCA9IHN0cmluZyB8IG51bWJlcj4gPSB7XG4gIFtuYW1lOiBzdHJpbmddOiBTdHlsZU1hcDxUPjtcbn07XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0eWxlUGFydHNJbnRlcmZhY2U8U3R5bGVQYXJ0cz4ge1xuICAvKipcbiAgICogU3R5bGUgbWFwcGluZ3MgdGhhdCBhcmUgYXBwbGllZCB0byBlYWNoIGNzcyBwYXJ0IGJ5IG5hbWUuIFNldCB0aGVcbiAgICogcHJvcGVydHkgYGhvc3RgIHRvIGFwcGx5IGEgYFN0eWxlSW5mb2Agb2JqZWN0IHRvIHRoZSBlbGVtZW50IGhvc3QgaXRzZWxmLlxuICAgKi9cbiAgc3A/OiBTdHlsZVBhcnRzO1xufVxuXG5leHBvcnQgY29uc3QgU3R5bGVQYXJ0c01peGluID0gPFN0eWxlUGFydHMsIFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBTdHlsZVBhcnRzRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIFN0eWxlIG1hcHBpbmdzIHRoYXQgYXJlIGFwcGxpZWQgdG8gZWFjaCBjc3MgcGFydCBieSBuYW1lLiBTZXQgdGhlXG4gICAgICogcHJvcGVydHkgYGhvc3RgIHRvIGFwcGx5IGEgYFN0eWxlSW5mb2Agb2JqZWN0IHRvIHRoZSBlbGVtZW50IGhvc3QgaXRzZWxmLlxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgcmVmbGVjdDogdHJ1ZSB9KSBzcDogU3R5bGVQYXJ0cztcblxuICAgIHByb3RlY3RlZCB1cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpIHtcbiAgICAgIHN1cGVyLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKCdzcCcpKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuc3AgPz8gKHt9IGFzIFN0eWxlUGFydHMpKS5mb3JFYWNoKChbcGFydCwgc3R5bGVNYXBdKSA9PiB7XG4gICAgICAgICAgLy8gRG91YmxlIHRoZSBgOmhvc3RgIHNlbGVjdG9yIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5IGJleW9uZCBtb3N0IGNvbXBvbmVudCBsZXZlbCBzdHlsZXMgYnkgZGVmYXVsdFxuICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0b3JGYWN0b3J5KFxuICAgICAgICAgICAgcGFydCA9PT0gJ2hvc3QnXG4gICAgICAgICAgICAgID8gJzpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCdcbiAgICAgICAgICAgICAgOiBgOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0OjpwYXJ0KCR7cGFydH0pYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zZXRJbnN0YW5jZVN0eWxlKGBzcC0ke3BhcnR9YCwgc2VsZWN0b3IsIHN0eWxlTWFwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFN0eWxlUGFydHNFbGVtZW50IGFzIENvbnN0cnVjdG9yPFN0eWxlUGFydHNJbnRlcmZhY2U8U3R5bGVQYXJ0cz4+ICYgVDtcbn07XG4iLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlfSNhbmNob3J7aW5zZXQ6MDtwb3NpdGlvbjphYnNvbHV0ZX1gOyIsICJpbXBvcnQgeyBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBDbGlja091dHNpZGVDb250cm9sbGVyLFxuICBDb25zdHJ1Y3RvcixcbiAgRXZlbnRFbWl0dGVyLFxuICBGb2N1c1RyYXBDb250cm9sbGVyLFxuICBNdGVFbGVtZW50LFxuICBQb3J0YWxBZGFwdGVyLFxuICBQb3J0YWxDb250cm9sbGVyLFxuICBkZWZhdWx0UG9ydGFsQWRhcHRlcixcbiAgZXZlbnRFbWl0dGVyLFxuICBpc1Nzcixcbn0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgUHJvcGVydHlWYWx1ZU1hcCB9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE92ZXJsYXlJbnRlcmZhY2Uge1xuICAvKipcbiAgICogVXBkYXRlcyB0aGUgb3ZlcmxheSBzdGF0ZSBvbiB0aGUgb3ZlcmxheSBtaXhpbi4gQnkgZGVmYXVsdCBhbGwgb3B0aW9ucyBhcmUgc2V0IHRvIHRydWUgaW5pdGlhbGx5LlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgc2V0T3ZlcmxheU9wdGlvbnMob3B0aW9uczoge1xuICAgIHdpdGhDbG9zZU9uQ2xpY2tPdXRzaWRlPzogYm9vbGVhbjtcbiAgICB3aXRoQ2xvc2VPbkVzY2FwZT86IGJvb2xlYW47XG4gICAgd2l0aEZvY3VzVHJhcD86IGJvb2xlYW47XG4gICAgd2l0aFBvcnRhbD86IGJvb2xlYW47XG4gICAgd2l0aERpbUJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICB3aXRoSW5lcnRCYWNrZHJvcD86IGJvb2xlYW47XG4gICAgd2l0aFNjcm9sbExvY2s/OiBib29sZWFuO1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uPzogbnVtYmVyO1xuICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuICAgIHJldHVyblRvT3JpZ2luT25DbG9zZT86IGJvb2xlYW47XG4gICAgZm9jdXNUcmFwVGFyZ2V0PzogRWxlbWVudDtcbiAgfSk6IHVua25vd247XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBvdmVybGF5IHNob3VsZCBvcGVuLiBDYW4gYWRkIGEgbGlzdGVuZXIgZm9yIG91dHNpZGUgY2xpY2tzLCBwb3J0YWwgYW4gZWxlbWVudCxcbiAgICogYW5kIHByZXZlbnQgdGhlIGJvZHkgZnJvbSBzY3JvbGxpbmcgdXBvbiBvcGVuLlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgaGFuZGxlT3ZlcmxheU9wZW4ob3B0aW9ucz86IHtcbiAgICBjbGlja091dHNpZGVFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG4gICAgd2lsbE9wZW4/OiAoKSA9PiB2b2lkO1xuICB9KTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIGFmdGVyIHRoZSBvdmVybGF5IGhhcyBiZWVuIG9wdGlvbmFsbHkgcG9ydGFsZWQgYW5kL29yIGFsbCBhbmltYXRpb25zIGhhdmUgZmluaXNoZWQuXG4gICAqL1xuICBoYW5kbGVPdmVybGF5T3BlbkVuZCgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgb3ZlcmxheSBlbGVtZW50IHNob3VsZCBjbG9zZS4gQ2FuIHN0b3AgbGlzdGVuaW5nIGZvciBvdXRzaWRlIGNsaWNrcywgcmVsZWFzZSBhLFxuICAgKiBmb2N1cyB0cmFwLCBhbmQgYWxsb3cgdGhlIGJvZHkgZWxlbWVudCB0byBzY3JvbGwgYWdhaW4uXG4gICAqL1xuICBoYW5kbGVPdmVybGF5Q2xvc2UoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIG92ZXJsYXkgZWxlbWVudCBoYXMgZmluaXNoZWQgY2xvc2luZyBhbmQvb3IgYWxsIGFuaW1hdGlvbnMgaGF2ZSBjb21wbGV0ZWQuIENhblxuICAgKiByZW1vdmUgYW4gZWxlbWVudCBmcm9tIHRoZSBwb3J0YWwuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBoYW5kbGVPdmVybGF5Q2xvc2VFbmQob3B0aW9ucz86IHsgcmVtb3ZlRnJvbUVsZW1lbnQ/OiBIVE1MRWxlbWVudCB9KTogUHJvbWlzZTx2b2lkPjtcblxuICBvcGVuKCk6IFByb21pc2U8dm9pZD47XG5cbiAgY2xvc2UoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogVGhlIHRhYiBpbmRleCBmb3IgdGhpcyBlbGVtZW50XG4gICAqL1xuICB0YWJpbmRleDogbnVtYmVyO1xuXG4gIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBvcGVuZWQgKi9cbiAgX29uT3BlbjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBFbWl0dGVkIGFmdGVyIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgb3BlbmluZyAqL1xuICBfb25PcGVuRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaXMgaW5pdGlhbGx5IGNsb3NpbmcgKi9cbiAgX29uQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgY2xvc2luZyAqL1xuICBfb25DbG9zZUVuZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBAaWdub3JlICovXG4gIHBvcnRhbEFkYXB0ZXI6IFBvcnRhbEFkYXB0ZXI7XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogVGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgb3ZlcmxheSByZWdhcmRsZXNzIG9mIGFuaW1hdGlvbnNcbiAgICovXG4gIG9wZW5lZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBJbmRpY2F0ZXMgdGhlIG92ZXJsYXkgaGFzIGJlZW4gcG9ydGFsZWQgYW5kIHJlYWR5IHRvIGFuaW1hdGVcbiAgICovXG4gIHJlYWR5Rm9yQW5pbWF0aW9uOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEluZGljYXRlcyB0aGUgb3ZlcmxheSBoYXMgYmVlbiBmdWxseSBhbmltYXRlZCBvcGVuXG4gICAqL1xuICBvcGVuZWRGdWxsOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgT3ZlcmxheU1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBPdmVybGF5RWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKiBUaGUgdGFiIGluZGV4IG9mIHRoaXMgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ3RhYmluZGV4JywgdHlwZTogTnVtYmVyIH0pIHRhYmluZGV4ID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBBZGFwdGVyIGZvciBwb3J0YWwgRE9NIG9wZXJhdGlvbiB0aGF0IGNhbiBiZSBzdXBwbGVtZW50ZWQgZm9yIGV4dGVybmFsLWZyYW1ld29yayBpbnRlZ3JhdGlvbnMuXG4gICAgICogTm90YWJseS1sZXZlcmFnZWQgYnkgb3ZlcmxheXMgaW4gb3VyIGdlbmVyYXRlZCByZWFjdCB3cmFwcGVycy5cbiAgICAgKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoKSBwb3J0YWxBZGFwdGVyOiBQb3J0YWxBZGFwdGVyID0gZGVmYXVsdFBvcnRhbEFkYXB0ZXI7XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgb3BlbmVkICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbk9wZW46IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0dGVkIGFmdGVyIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgb3BlbmluZyAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25PcGVuRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgY2xvc2VkICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgY2xvc2luZyAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25DbG9zZUVuZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgZWxlbWVudCBzaG91bGQgdXNlIGEgZm9jdXMgdHJhcCBvciBub3QgKi9cbiAgICBwcml2YXRlIF93aXRoRm9jdXNUcmFwID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IGVsZW1lbnQgc2hvdWxkIGNsb3NlIHdoZW4gYSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBlbGVtZW50ICovXG4gICAgcHJpdmF0ZSBfY2xvc2VPbkNsaWNrT3V0c2lkZSA9IHRydWU7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgY2xvc2Ugd2hlbiB0aGUgZXNjYXBlIGJ1dHRvbiBpcyBwcmVzc2VkICovXG4gICAgcHJpdmF0ZSBfY2xvc2VPbkVzY2FwZSA9IHRydWU7XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBzaG91bGQgdXNlIGEgcG9ydGFsIG9yIG5vdCAqL1xuICAgIHByaXZhdGUgX3dpdGhQb3J0YWwgPSB0cnVlO1xuXG4gICAgLyoqIFdldGhlciB0aGUgdXNlciBzaG91bGQgYmUgYWJsZSB0byBjbGljayBiZWhpbmQgdGhlIGJhY2tkcm9wIG9yIG5vdCAqL1xuICAgIHByaXZhdGUgX3dpdGhJbmVydEJhY2tkcm9wID0gZmFsc2U7XG5cbiAgICAvKiogV2V0aGVyIHRoZSBvdmVybGF5J3MgYmFja2Ryb3Agc2hvdWxkIHJlbmRlciBkaW1tZWQgKi9cbiAgICBwcml2YXRlIF93aXRoRGltQmFja2Ryb3AgPSBmYWxzZTtcblxuICAgIC8qKiBXZXRoZXIgb3Igbm90IHRoZSBlbGVtZW50IHNob3VsZCBiZSByZS1hcHBlbmRlZCB0byBpdCdzIG9yaWdpbiBwYXJlbnQgZWxlbWVudCBvbiBjbG9zZSBfaWZfIHBvcnRhbGVkLiAqL1xuICAgIHByaXZhdGUgX3JldHVyblRvT3JpZ2luT25DbG9zZSA9IGZhbHNlO1xuXG4gICAgLyoqIE9wdGlvbmFsIGJhY2tkcm9wIHRpbWluZy4gSW1wb3J0YW50IHBhcnRpY3VsYXJseSBmb3Igc21vb3RoIGNsb3NlcyB3aXRoIGEgdmlzaWJsZSBiYWNrZHJvcCAqL1xuICAgIHByaXZhdGUgX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgc2hvdWxkIHByZXZlbnQgc2Nyb2xsaW5nIG9uIHRoZSBib2R5ICovXG4gICAgcHJpdmF0ZSBfd2l0aFNjcm9sbExvY2sgPSB0cnVlO1xuXG4gICAgcHJvdGVjdGVkIGZvY3VzVHJhcENvbnRyb2xsZXIgPSBuZXcgRm9jdXNUcmFwQ29udHJvbGxlcih0aGlzKTtcblxuICAgIHByb3RlY3RlZCBjbGlja091dHNpZGVDb250cm9sbGVyID0gbmV3IENsaWNrT3V0c2lkZUNvbnRyb2xsZXIodGhpcywgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl93aXRoUG9ydGFsKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2VPbkNsaWNrT3V0c2lkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcHJvdGVjdGVkIHBvcnRhbENvbnRyb2xsZXIgPSBuZXcgUG9ydGFsQ29udHJvbGxlcih0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHBhcmVudCBlbGVtZW50XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRpYWxQYXJlbnQ6IEVsZW1lbnQgfCBIVE1MRWxlbWVudCA9IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgdG8gZGV0ZWN0IGNsaWNrcyBvdXRzaWRlIG9mIHRvIGNsb3NlIHRoZSBvdmVybGF5IGVsZW1lbnQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjbGlja091dHNpZGVPdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xuXG4gICAgcHJpdmF0ZSBfb3JpZ2luUGFyZW50PzogRWxlbWVudCB8IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBfZm9jdXNUcmFwVGFyZ2V0PzogRWxlbWVudCB8IEhUTUxFbGVtZW50ID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBUaGUgb3BlbmVkIHN0YXRlIG9mIHRoZSBvdmVybGF5IHJlZ2FyZGxlc3Mgb2YgYW5pbWF0aW9uc1xuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgb3BlbmVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogSW5kaWNhdGVzIHRoZSBvdmVybGF5IGhhcyBiZWVuIHBvcnRhbGVkIGFuZCByZWFkeSB0byBhbmltYXRlXG4gICAgICovXG4gICAgQHN0YXRlKClcbiAgICBzZXQgcmVhZHlGb3JBbmltYXRpb24ocmVhZHlGb3JBbmltYXRpb246IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuX3JlYWR5Rm9yQW5pbWF0aW9uID0gcmVhZHlGb3JBbmltYXRpb247XG4gICAgfVxuICAgIGdldCByZWFkeUZvckFuaW1hdGlvbigpIHtcbiAgICAgIC8vIER1cmluZyBTU1IgcmV0dXJuIHRydWUgaW4gY2FzZSBzb21ldGhpbmcgbmVlZHMgdG8gYmUgb3BlbmVkIGluaXRpYWxseS5cbiAgICAgIHJldHVybiBpc1NzcigpID8gdHJ1ZSA6IHRoaXMuX3JlYWR5Rm9yQW5pbWF0aW9uO1xuICAgIH1cbiAgICBwcml2YXRlIF9yZWFkeUZvckFuaW1hdGlvbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqIFRoZSBvcGVuZWQgc3RhdGUgb2YgdGhlIG92ZXJsYXkgcmVnYXJkbGVzcyBvZiBhbmltYXRpb25zLiBUaGlzIGlzIHJlZmxlY3RlZCBhbmQgdXNlZCBieVxuICAgICAqIHNvbWUgb3ZlcmxheXMgdG8gcmVzdHJpY3QgdGhlaXIgc2l6ZSB3aGlsZSBoaWRkZW4uIChzaW5jZSBkaXNwbGF5OiBub25lIGJyZWFrcyBhbmltYXRpb25zKVxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgb3BlbmVkRnVsbCA9IGZhbHNlO1xuXG4gICAgc2V0T3ZlcmxheU9wdGlvbnMob3B0aW9uczoge1xuICAgICAgd2l0aENsb3NlT25DbGlja091dHNpZGU/OiBib29sZWFuO1xuICAgICAgd2l0aENsb3NlT25Fc2NhcGU/OiBib29sZWFuO1xuICAgICAgd2l0aEZvY3VzVHJhcD86IGJvb2xlYW47XG4gICAgICB3aXRoUG9ydGFsPzogYm9vbGVhbjtcbiAgICAgIHdpdGhJbmVydEJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICAgIHdpdGhEaW1CYWNrZHJvcD86IGJvb2xlYW47XG4gICAgICB3aXRoU2Nyb2xsTG9jaz86IGJvb2xlYW47XG4gICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbj86IHN0cmluZztcbiAgICAgIHJldHVyblRvT3JpZ2luT25DbG9zZT86IGJvb2xlYW47XG4gICAgICBmb2N1c1RyYXBUYXJnZXQ/OiBFbGVtZW50O1xuICAgIH0pIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgd2l0aEZvY3VzVHJhcCxcbiAgICAgICAgd2l0aENsb3NlT25DbGlja091dHNpZGUsXG4gICAgICAgIHdpdGhDbG9zZU9uRXNjYXBlLFxuICAgICAgICB3aXRoUG9ydGFsLFxuICAgICAgICB3aXRoU2Nyb2xsTG9jayxcbiAgICAgICAgd2l0aEluZXJ0QmFja2Ryb3AsXG4gICAgICAgIHdpdGhEaW1CYWNrZHJvcCxcbiAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgIHJldHVyblRvT3JpZ2luT25DbG9zZSxcbiAgICAgICAgZm9jdXNUcmFwVGFyZ2V0LFxuICAgICAgfSA9IG9wdGlvbnMgPz8ge307XG5cbiAgICAgIHRoaXMuX3dpdGhGb2N1c1RyYXAgPSB3aXRoRm9jdXNUcmFwID8/IHRoaXMuX3dpdGhGb2N1c1RyYXA7XG4gICAgICB0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlID0gd2l0aENsb3NlT25DbGlja091dHNpZGUgPz8gdGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZTtcbiAgICAgIHRoaXMuX3dpdGhTY3JvbGxMb2NrID0gd2l0aFNjcm9sbExvY2sgPz8gdGhpcy5fd2l0aFNjcm9sbExvY2s7XG4gICAgICB0aGlzLl93aXRoUG9ydGFsID0gd2l0aFBvcnRhbCA/PyB0aGlzLl93aXRoUG9ydGFsO1xuICAgICAgdGhpcy5fd2l0aEluZXJ0QmFja2Ryb3AgPVxuICAgICAgICB3aXRoSW5lcnRCYWNrZHJvcCA/PyAhdGhpcy5fd2l0aEZvY3VzVHJhcCA/PyB0aGlzLl93aXRoSW5lcnRCYWNrZHJvcDtcbiAgICAgIHRoaXMuX3dpdGhEaW1CYWNrZHJvcCA9IHdpdGhEaW1CYWNrZHJvcCA/PyB0aGlzLl93aXRoRGltQmFja2Ryb3A7XG4gICAgICB0aGlzLl9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9XG4gICAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID8/IHRoaXMuX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgdGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlID0gcmV0dXJuVG9PcmlnaW5PbkNsb3NlID8/IHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZTtcbiAgICAgIHRoaXMuX2ZvY3VzVHJhcFRhcmdldCA9IGZvY3VzVHJhcFRhcmdldCA/PyB0aGlzLl9mb2N1c1RyYXBUYXJnZXQ7XG5cbiAgICAgIGlmICh3aXRoQ2xvc2VPbkVzY2FwZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX2Nsb3NlT25Fc2NhcGUgIT09IHdpdGhDbG9zZU9uRXNjYXBlKSB7XG4gICAgICAgIGlmICh3aXRoQ2xvc2VPbkVzY2FwZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xvc2VPbkVzY2FwZSA9IHdpdGhDbG9zZU9uRXNjYXBlID8/IHRoaXMuX2Nsb3NlT25Fc2NhcGU7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aXRoRm9jdXNUcmFwID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpdGhGb2N1c1RyYXAgPT09IHRydWUgJiYgdGhpcy50YWJpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy50YWJpbmRleCA9IC0xO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZU92ZXJsYXkoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVPdmVybGF5T3BlbihvcHRpb25zPzoge1xuICAgICAgY2xpY2tPdXRzaWRlRWxlbWVudD86IEhUTUxFbGVtZW50O1xuICAgICAgd2lsbE9wZW4/OiAoKSA9PiB2b2lkO1xuICAgIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIElnbm9yZSBpZiBhbHJlYWR5IG9wZW5cbiAgICAgIGlmICh0aGlzLm9wZW5lZCB8fCB0aGlzLm9wZW5lZEZ1bGwpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgICAgY29uc3QgeyBjbGlja091dHNpZGVFbGVtZW50LCB3aWxsT3BlbiB9ID0gb3B0aW9ucyA/PyB7fTtcbiAgICAgIHdpbGxPcGVuPy4oKTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50ID0gY2xpY2tPdXRzaWRlRWxlbWVudCB8fCB0aGlzO1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIubGlzdGVuRm9yQ2xpY2tzT3V0c2lkZU9mKHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQpO1xuICAgICAgICBpZiAodGhpcy5fd2l0aFBvcnRhbCkge1xuICAgICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlclxuICAgICAgICAgICAgLmFwcGVuZFRvU3RhY2sodGhpcywge1xuICAgICAgICAgICAgICB3aXRoRGltQmFja2Ryb3A6IHRoaXMuX3dpdGhEaW1CYWNrZHJvcCxcbiAgICAgICAgICAgICAgd2l0aEluZXJ0QmFja2Ryb3A6IHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wLFxuICAgICAgICAgICAgICB3aXRoU2Nyb2xsTG9jazogdGhpcy5fd2l0aFNjcm9sbExvY2ssXG4gICAgICAgICAgICAgIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyOiB0aGlzLmhhbmRsZUNsb3NlT25DbGlja091dHNpZGUsXG4gICAgICAgICAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLl9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgICAgcG9ydGFsQWRhcHRlcjogdGhpcy5wb3J0YWxBZGFwdGVyLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgLy8gV2FpdCBmb3IgYXBwZW5kIHRvIGNvbXBsZXRlIGJlZm9yZSBhbmltYXRpbmdcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkeUZvckFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gQWZ0ZXIgYW5pbWF0aW9uIGJlZ2lucyByZXNvbHZlXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX29uT3Blbi5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuX29yaWdpblBhcmVudCAmJlxuICAgICAgICAgICAgdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkgJiZcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpICE9PSB0aGlzLl9vcmlnaW5QYXJlbnRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMucG9ydGFsQWRhcHRlcih0aGlzLCB0aGlzLl9vcmlnaW5QYXJlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBXYWl0IGZvciBhcHBlbmQgdG8gY29tcGxldGUgYmVmb3JlIGFuaW1hdGluZ1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUZvckFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAvLyBBZnRlciBhbmltYXRpb24gYmVnaW5zIHJlc29sdmVcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX29uT3Blbi5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlT3ZlcmxheU9wZW5FbmQoKSB7XG4gICAgICAvLyBDYW5jZWwgaWYgY2xvc2VkIGJlZm9yZSBvcGVuIGVuZGVkXG4gICAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbmVkRnVsbCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5fd2l0aEZvY3VzVHJhcCkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIudHJhcEZvY3VzKHRoaXMuX2ZvY3VzVHJhcFRhcmdldCwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vbk9wZW5FbmQuZW1pdChudWxsLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZU92ZXJsYXlDbG9zZSgpIHtcbiAgICAgIC8vIElnbm9yZSBpZiBhbHJlYWR5IGNsb3NlZFxuICAgICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fb25DbG9zZS5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5zdG9wTGlzdGVuaW5nKCk7XG4gICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIucmVsZWFzZUZvY3VzKHRydWUpO1xuICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLmhpZGVCYWNrZHJvcCgpO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZU92ZXJsYXlDbG9zZUVuZChvcHRpb25zPzogeyByZW1vdmVGcm9tRWxlbWVudD86IEhUTUxFbGVtZW50IH0pIHtcbiAgICAgIC8vIENhbmNlbCBpZiBvcGVuZWQgYmVmb3JlIGNsb3NlIGVuZGVkXG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWRGdWxsID0gZmFsc2U7XG4gICAgICB0aGlzLnJlYWR5Rm9yQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIucmVtb3ZlRnJvbVN0YWNrKG9wdGlvbnM/LnJlbW92ZUZyb21FbGVtZW50IHx8IHRoaXMpO1xuICAgICAgaWYgKHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZSkge1xuICAgICAgICBpZiAodGhpcy5fb3JpZ2luUGFyZW50ICYmIHRoaXMuX29yaWdpblBhcmVudCAhPT0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgdGhpcy5fb3JpZ2luUGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fb25DbG9zZUVuZC5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVPdmVybGF5S2V5RG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudD8uaGFzQXR0cmlidXRlKCdkYXRhLW92ZXJsYXktd3JhcHBlcicpXG4gICAgICAgID8gdGhpcy5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50XG4gICAgICAgIDogdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHBhcmVudCBlbGVtZW50IHRoaXMgb3ZlcmxheSB3aWxsIGJlIHJlYXR0YWNoZWQgdG8gZWl0aGVyOlxuICAgICAqIC0gV2hlbiBjb25maWd1cmVkIHRvIGRvIHNvIG9uIGNsb3NlXG4gICAgICogLSBXaGVuIFwicG9ydGFsaW5nXCIgaXMgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBzZXRPcmlnaW5QYXJlbnQobmV3T3JpZ2luOiBFbGVtZW50KSB7XG4gICAgICBjb25zdCBjdXJyZW50UGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpO1xuICAgICAgaWYgKGN1cnJlbnRQYXJlbnRFbGVtZW50ID09PSB0aGlzLl9vcmlnaW5QYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIG5ld09yaWdpbik7XG4gICAgICB9XG4gICAgICB0aGlzLl9vcmlnaW5QYXJlbnQgPSBuZXdPcmlnaW47XG4gICAgfVxuXG4gICAgLyoqIFVwZGF0ZXMgdmFyaW91cyBiZWhhdmlvcnMgdG8gYXBwbHkgdGhlIGxhdGVzdCBvdmVybGF5IG9wdGlvbnMgKi9cbiAgICB1cGRhdGVPdmVybGF5KCkge1xuICAgICAgLy8gVXBkYXRlIGJhY2tkcm9wIGluZXJ0bmVzc1xuICAgICAgaWYgKHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5zZXRCYWNrZHJvcEluZXJ0bmVzcyh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5zZXRCYWNrZHJvcEluZXJ0bmVzcyhmYWxzZSk7XG4gICAgICB9XG4gICAgICAvLyBVcGRhdGUgY2xpY2sgb3V0c2lkZSBjb250cm9sbGVyXG4gICAgICBpZiAodGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZSAmJiAhdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmlzTGlzdGVuaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmxpc3RlbkZvckNsaWNrc091dHNpZGVPZih0aGlzKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUgJiYgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmlzTGlzdGVuaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSBmb2N1cyB0cmFwIGNvbnRyb2xsZXJcbiAgICAgIGlmICh0aGlzLl93aXRoRm9jdXNUcmFwICYmIHRoaXMub3BlbmVkICYmICF0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIuaXNUcmFwcGluZ0ZvY3VzKCkpIHtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLnRyYXBGb2N1cyh0aGlzLl9mb2N1c1RyYXBUYXJnZXQsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5fd2l0aEZvY3VzVHJhcCAmJiB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIuaXNUcmFwcGluZ0ZvY3VzKCkpIHtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLnJlbGVhc2VGb2N1cyh0cnVlKTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSBiYWNrZHJvcCBjb250cm9sbGVyXG4gICAgICBpZiAodGhpcy5fd2l0aERpbUJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5zaG93QmFja2Ryb3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5oaWRlQmFja2Ryb3AoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9yZXR1cm5Ub09yaWdpbk9uQ2xvc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuX29yaWdpblBhcmVudCAmJiB0aGlzLl9vcmlnaW5QYXJlbnQgIT09IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpKSB7XG4gICAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIHRoaXMuX29yaWdpblBhcmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBvcGVuKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPcGVuIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2xvc2UgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueSkge1xuICAgICAgc3VwZXIoYXJncyk7XG4gICAgICB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duID0gdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoXG4gICAgICBjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZU1hcDxhbnk+IHwgTWFwPFByb3BlcnR5S2V5LCB1bmtub3duPlxuICAgICk6IHZvaWQge1xuICAgICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgIHRoaXMuX29yaWdpblBhcmVudCA9IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlQ2xvc2VPbkNsaWNrT3V0c2lkZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgICBpZiAodGhpcy5fY2xvc2VPbkVzY2FwZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgaW4gdGhlIGV2ZW50IHRoZSBvdmVybGF5IGVsZW1lbnQgd2FzIHBvcnRhbGVkLlxuICAgICAgaWYgKHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmxpc3RlbkZvckNsaWNrc091dHNpZGVPZih0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIucmVsZWFzZUZvY3VzKHRydWUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPdmVybGF5RWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxPdmVybGF5SW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtkaXNwbGF5OmJsb2NrO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWZ1bGwtd2lkdGg6bWF4LWNvbnRlbnQ7LS1jb250cm9sLXdpZHRoOnVuc2V0Oy0tY29udHJvbC1taW4td2lkdGg6MjQwcHg7LS1jb250cm9sLW1heC13aWR0aDp2YXIoLS1jb250cm9sLXdpZHRoKTstLWNvbnRyb2wtbWFyZ2luLXk6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWNvbnRyb2wtbWFyZ2luLXg6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWNvbnRyb2wtZGVzY3JpcHRvci1tYXJnaW46dmFyKC0tbXRlLXNwYWNlLXNtKTstLWxhYmVsLXdpZHRoOnZhcigtLWNvbnRyb2wtd2lkdGgpOy0tbGFiZWwtbWluLXdpZHRoOnZhcigtLWNvbnRyb2wtbWluLXdpZHRoKTstLWxhYmVsLW1heC13aWR0aDp2YXIoLS1jb250cm9sLW1heC13aWR0aCk7LS1sYWJlbC1tYXJnaW4teTp2YXIoLS1tdGUtc3BhY2UteHMpO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOnZhcigtLWZ1bGwtd2lkdGgpfS5ncmlkLWNvbnRhaW5lcntkaXNwbGF5OmlubGluZS1ncmlkO2dyaWQtdGVtcGxhdGUtYXJlYXM6XCJsYWJlbFwiIFwiY29udHJvbFwiO2dyaWQtdGVtcGxhdGUtcm93czoxZnIgbWlubWF4KDAsMTAwJSk7d2lkdGg6aW5oZXJpdH06aG9zdChbd2l0aEZ1bGxXaWR0aF0pey0tZnVsbC13aWR0aDoxMDAlOy0tY29udHJvbC13aWR0aDoxMDAlfTpob3N0KFt3aXRob3V0TWFyZ2luXSl7LS1jb250cm9sLW1hcmdpbi15OjBweH06aG9zdChbd2l0aG91dE1hcmdpbl0pIC5sYWJlbC1jb250YWluZXIuaGFzLWNvbnRlbnR7bWFyZ2luLWJvdHRvbTp2YXIoLS1jb250cm9sLWRlc2NyaXB0b3ItbWFyZ2luKX0ubGFiZWwtY29udGFpbmVye2Rpc3BsYXk6bm9uZTtncmlkLWFyZWE6bGFiZWw7bWF4LXdpZHRoOnZhcigtLWxhYmVsLW1heC13aWR0aCk7bWluLXdpZHRoOnZhcigtLWxhYmVsLW1pbi13aWR0aCk7d2lkdGg6dmFyKC0tbGFiZWwtd2lkdGgpfS5sYWJlbC1jb250YWluZXIuaGFzLWNvbnRlbnR7ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOnZhcigtLWxhYmVsLW1hcmdpbi15KX0ubGFiZWwtY29udGFpbmVyOm5vdCguaGFzLWNvbnRlbnQpe21hcmdpbjowIWltcG9ydGFudH0uY29udGV4dHtncmlkLWFyZWE6Y29udGV4dH0uZGVzY3JpcHRpb24sLmVycm9yLC5oaW50LC5sYWJlbHtkaXNwbGF5OmJsb2NrfS5kZXNjcmlwdGlvbiBtdGUtZGVzY3JpcHRpb24sLmRlc2NyaXB0aW9uIG10ZS1kZXNjcmlwdGlvbi10ZXh0LC5sYWJlbCBtdGUtbGFiZWwsLmxhYmVsIG10ZS1sYWJlbC10ZXh0LDpob3N0IDo6c2xvdHRlZChtdGUtZGVzY3JpcHRpb24tdGV4dFtzbG90PWRlc2NyaXB0aW9uXSksOmhvc3QgOjpzbG90dGVkKG10ZS1kZXNjcmlwdGlvbltzbG90PWRlc2NyaXB0aW9uXSksOmhvc3QgOjpzbG90dGVkKG10ZS1sYWJlbC10ZXh0W3Nsb3Q9bGFiZWxdKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWxhYmVsW3Nsb3Q9bGFiZWxdKXttYXJnaW46MH06aG9zdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKXstLWxhYmVsLXdpZHRoOm1heC1jb250ZW50Oy0tbGFiZWwtbWluLXdpZHRoOm1heC1jb250ZW50fTpob3N0KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pIC5ncmlkLWNvbnRhaW5lcntncmlkLXRlbXBsYXRlLWFyZWFzOlwibGFiZWwgY29udHJvbFwiO2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoYXV0byx2YXIoLS1sYWJlbC13aWR0aCkpIG1pbm1heChhdXRvLHZhcigtLWNvbnRyb2wtd2lkdGgpKX06aG9zdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKSAubGFiZWwtY29udGFpbmVye21hcmdpbi1ib3R0b206dmFyKC0tY29udHJvbC1tYXJnaW4teSk7bWFyZ2luLXJpZ2h0OnZhcigtLWNvbnRyb2wtbWFyZ2luLXgpO21hcmdpbi10b3A6Y2FsYyh2YXIoLS1jb250cm9sLW1hcmdpbi15KSArIHZhcigtLWxhYmVsLWJlZm9yZS1vZmZzZXQpKX0uZGVzY3JpcHRpb24sLmVycm9yLC5oaW50e21pbi13aWR0aDoxMDAlO3dpZHRoOi1tb3otbWluLWNvbnRlbnQ7d2lkdGg6bWluLWNvbnRlbnR9LmNvbnRyb2wtb3V0ZXItY29udGFpbmVye2dyaWQtYXJlYTpjb250cm9sO21hcmdpbi10b3A6dmFyKC0tY29udHJvbC1tYXJnaW4teSk7bWF4LXdpZHRoOnZhcigtLWNvbnRyb2wtbWF4LXdpZHRoKTttaW4td2lkdGg6dmFyKC0tY29udHJvbC1taW4td2lkdGgpO3dpZHRoOnZhcigtLWNvbnRyb2wtd2lkdGgpfTpob3N0KDpub3QoW2xhYmVsUG9zaXRpb249YmVmb3JlXSkpIC5jb250cm9sLW91dGVyLWNvbnRhaW5lci5oYXMtbGFiZWwtY29udGVudHttYXJnaW4tdG9wOmNhbGModmFyKC0tY29udHJvbC1tYXJnaW4teSkvMil9LmNvbnRyb2wtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWFyZ2luLWJvdHRvbTp2YXIoLS1jb250cm9sLW1hcmdpbi15KX0uZXJyb3IsLmhpbnR7ZGlzcGxheTpub25lfS5lcnJvci5oYXMtY29udGVudCwuaGludC5oYXMtY29udGVudHtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6dmFyKC0tY29udHJvbC1kZXNjcmlwdG9yLW1hcmdpbil9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tZm9ybS1maWVsZC1pbnRlcm5hbC1wYWRkaW5nOnZhcigtLW10ZS1zcGFjZS1zbSk7LS1mb3JtLWZpZWxkLWludGVybmFsLWdhcDp2YXIoLS1tdGUtc3BhY2Utc20pOy0tZm9ybS1maWVsZC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpOy0tZm9ybS1maWVsZC1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWZvcm0tZmllbGQtYmFja2dyb3VuZDp2YXIoLS1tdGUtc3VyZmFjZS0yKTstLXByZXBlbmQtYmFja2dyb3VuZDp2YXIoLS1tdGUtZ3JleS0xKTstLXByZXBlbmQtcGFkZGluZy14OnZhcigtLW10ZS1zcGFjZS1zbSk7LS1wcmVwZW5kLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpfTpob3N0KFtyYWRpdXM9c21dKXstLWZvcm0tZmllbGQtcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXhzKX06aG9zdChbcmFkaXVzPWxnXSl7LS1mb3JtLWZpZWxkLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14eGwpfTpob3N0KFtzaXplPXNtXSl7LS1wcmVwZW5kLXBhZGRpbmcteDpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1mb3JtLWZpZWxkLWludGVybmFsLXBhZGRpbmc6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXA6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpfTpob3N0KFtzaXplPWxnXSl7LS1wcmVwZW5kLXBhZGRpbmcteDpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtcGFkZGluZzpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwOmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpfS5mb3JtLWZpZWxke2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnZhcigtLWZvcm0tZmllbGQtYmFja2dyb3VuZCk7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztnYXA6dmFyKC0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXApO3Bvc2l0aW9uOnJlbGF0aXZlfTpob3N0KFtkaXNhYmxlZF0pIC5mb3JtLWZpZWxke2JhY2tncm91bmQ6dmFyKC0tbXRlLWRpc2FibGVkLTEpO2JvcmRlcjoxcHggc29saWQgdmFyKC0tbXRlLWRpc2FibGVkLTEpfS5hcHBlbmQsLnByZXBlbmR7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLXNlbGY6c3RyZXRjaDtiYWNrZ3JvdW5kOnZhcigtLXByZXBlbmQtYmFja2dyb3VuZCk7ZGlzcGxheTpub25lO2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUpO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzowIHZhcigtLXByZXBlbmQtcGFkZGluZy14KX0ucHJlcGVuZHtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItcmlnaHQ6MXB4IHNvbGlkIHZhcigtLXByZXBlbmQtYm9yZGVyLWNvbG9yKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKX0uYXBwZW5ke2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItbGVmdDoxcHggc29saWQgdmFyKC0tcHJlcGVuZC1ib3JkZXItY29sb3IpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKX0uYXBwZW5kLmhhcy1jb250ZW50LC5wcmVwZW5kLmhhcy1jb250ZW50e2Rpc3BsYXk6ZmxleH0ucHJlZml4LC5zdWZmaXh7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLXNlbGY6c3RyZXRjaDtkaXNwbGF5OmZsZXg7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ucHJlZml4Om5vdCguaGFzLXByZXBlbmQpe3BhZGRpbmctbGVmdDp2YXIoLS1wcmVwZW5kLXBhZGRpbmcteCl9LnN1ZmZpeDpub3QoLmhhcy1hcHBlbmQpe3BhZGRpbmctcmlnaHQ6dmFyKC0tcHJlcGVuZC1wYWRkaW5nLXgpfS5mb3JtLWZpZWxkLmZvY3VzZWQ6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3R0b206LTFweDtib3gtc2hhZG93OjAgMCAwIDFweCB2YXIoLS1tdGUtbGlnaHQpO2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO2xlZnQ6LTFweDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0Oi0xcHg7dG9wOi0xcHg7ei1pbmRleDo5fS5mb3JtLWZpZWxkLmludmFsaWR7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtcmdiKSl9Omhvc3QoW3dpdGhvdXRCb3JkZXJdKSA6aXMoLmZvcm0tZmllbGQsLnByZXBlbmQsLmFwcGVuZCl7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudH1gOyIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIEFjdGl2ZUxpbmtPcHRpb25zLFxuICBDb25zdHJ1Y3RvcixcbiAgTXRlRWxlbWVudCxcbiAgTXRlSGlzdG9yeUFwaVNlcnZpY2UsXG4gIFVuc3Vic2NyaWJlcixcbiAgaXNMaW5rQWN0aXZlLFxuICBvblVwZGF0ZSxcbn0gZnJvbSAnLi4vJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTGlua0ludGVyZmFjZSB7XG4gIGhyZWY/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEF1dG9BY3RpdmVMaW5rSW50ZXJmYWNlIHtcbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgbGluayBpcyB0aGUgYWN0aXZlIHBhZ2UgKi9cbiAgYWN0aXZlOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGxpbmsgc2hvdWxkIGF1dG9tYXRpY2FsbHkgdHJ5IHRvIGRldGVybWluZSBpZiBpdCBpcyB0aGUgYWN0aXZlIHBhZ2UgKi9cbiAgd2l0aG91dEF1dG9BY3RpdmU6IGJvb2xlYW47XG5cbiAgLyoqIE9wdGlvbnMgdG8gcmVmaW5lIGhvdyB0aGlzIGxpbmsgd2lsbCBkZXRlcm1pbmUgaWYgaXQgaXMgdGhlIGFjdGl2ZSBwYWdlICovXG4gIGFjdGl2ZUxpbmtPcHRpb25zPzogUGFydGlhbDxBY3RpdmVMaW5rT3B0aW9ucz47XG5cbiAgLyoqIFRoZSBpbnRlcm5hbCBhbmNob3IgZWxlbWVudCBmcm9tIHdoaWNoIHRvIHB1bGwgdGhlIGxvY2F0aW9uIGZvciBjb21wYXJpc29uICovXG4gIGFuY2hvckVsZW1lbnQ/OiBIVE1MQW5jaG9yRWxlbWVudDtcbn1cblxuZXhwb3J0IGNvbnN0IEF1dG9BY3RpdmVMaW5rTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQgJiBMaW5rSW50ZXJmYWNlPj4oXG4gIHN1cGVyQ2xhc3M6IFRcbikgPT4ge1xuICBjbGFzcyBBdXRvQWN0aXZlTGlua0VsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRob3V0QXV0b0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCByZWZsZWN0OiB0cnVlIH0pIGFjdGl2ZUxpbmtPcHRpb25zPzogUGFydGlhbDxBY3RpdmVMaW5rT3B0aW9ucz47XG5cbiAgICBhbmNob3JFbGVtZW50PzogSFRNTEFuY2hvckVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHVuc3ViOiBVbnN1YnNjcmliZXI7XG5cbiAgICBAb25VcGRhdGUoJ2FjdGl2ZScsIHsgd2FpdFVudGlsRmlyc3RVcGRhdGU6IHRydWUgfSlcbiAgICBwcml2YXRlIGhhbmRsZUFjdGl2ZUxpbmtDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5hbmNob3JFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICdwYWdlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG9uVXBkYXRlKFsnaHJlZicsICdpcmVmJywgJ3dpdGhBdXRvQWN0aXZlJ10sIHsgd2FpdFVudGlsRmlyc3RVcGRhdGU6IHRydWUgfSlcbiAgICBwcml2YXRlIGhhbmRsZUF1dG9BY3RpdmVDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5ocmVmIHx8IHRoaXNbJ2lyZWYnXSkge1xuICAgICAgICBpZiAodGhpcy53aXRob3V0QXV0b0FjdGl2ZSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgICB0aGlzLmhhbmRsZVVybENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVBdXRvQWN0aXZlQ2hhbmdlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRMaXN0ZW5lcigpIHtcbiAgICAgIGlmICghdGhpcy51bnN1Yikge1xuICAgICAgICB0aGlzLnVuc3ViID0gTXRlSGlzdG9yeUFwaVNlcnZpY2Uuc3RhdGVDaGFuZ2VzKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVVybENoYW5nZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgdGhpcy51bnN1Yj8uKCk7XG4gICAgICB0aGlzLnVuc3ViID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVVybENoYW5nZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlID0gaXNMaW5rQWN0aXZlKFxuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQ/LmhyZWYsXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICB0aGlzLmFjdGl2ZUxpbmtPcHRpb25zXG4gICAgICApO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIEF1dG9BY3RpdmVMaW5rRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxBdXRvQWN0aXZlTGlua0ludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50LCBTbG90Q29udHJvbGxlciB9IGZyb20gJy4uJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2xvdE9ic2VydmVySW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIFByb3AgdXNlZCB0byBkZWNsYXJlIHdoaWNoIHNsb3RzIGFyZSBiZWluZyB1c2VkIGR1cmluZyBTU1IgdG8gbWFrZSB0aGVtIHZpc2libGUgaW4gY2VydGFpbiBlZGdlLWNhc2VzLlxuICAgKi9cbiAgc3NyU2xvdHM6IHN0cmluZztcblxuICBzbG90Q29udHJvbGxlcjogU2xvdENvbnRyb2xsZXI7XG5cbiAgaGFzU2xvdDogKHNsb3Q6IHN0cmluZywgb3JWYWx1ZT86IGFueSkgPT4gYm9vbGVhbjtcblxuICBzc3JTbG90Q2hlY2s6IChzbG90czogc3RyaW5nKSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgU2xvdE9ic2VydmVyTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIFNsb3RPYnNlcnZlckVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBQcm9wIHVzZWQgdG8gZGVjbGFyZSB3aGljaCBzbG90cyBhcmUgYmVpbmcgdXNlZCBkdXJpbmcgU1NSIHRvIG1ha2UgdGhlbSB2aXNpYmxlIGluIGNlcnRhaW4gZWRnZS1jYXNlcy5cbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pXG4gICAgc2V0IHNzclNsb3RzKHZhbDogc3RyaW5nKSB7XG4gICAgICBsZXQgb2xkVmFsID0gdGhpcy5fc3NyU2xvdHM7XG4gICAgICB0aGlzLl9zc3JTbG90cyA9IHZhbDtcbiAgICAgIC8vIFBhcnNlIGFuZCBjYWNoZSBzc3Igc2xvdCBzZXRcbiAgICAgIGNvbnN0IHNsb3RzID0gKHRoaXMuX3NzclNsb3RzID8/ICcnKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5tYXAoKHNsb3QpID0+IHNsb3QudHJpbSgpKTtcbiAgICAgIHRoaXMuX3NzclNsb3RTZXQgPSBuZXcgU2V0PHN0cmluZz4oc2xvdHMpO1xuICAgICAgLy8gTm9ybWFsIHVwZGF0ZVxuICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCdzc3JTbG90cycsIG9sZFZhbCk7XG4gICAgfVxuICAgIGdldCBzc3JTbG90cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zc3JTbG90cztcbiAgICB9XG4gICAgcHJpdmF0ZSBfc3NyU2xvdHM/OiBzdHJpbmc7XG5cbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIF9zc3JTbG90U2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICBzbG90Q29udHJvbGxlciA9IG5ldyBTbG90Q29udHJvbGxlcih0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gc2xvdCBoYXMgY29udGVudCwgb3IgaWYgaXQgd2FzIHNwZWNpZmllZCBhcyBleGlzdGluZyBkdXJpbmcgU1NSLlxuICAgICAqIE9uY2UgY2FsbGVkLCB0aGUgY29tcG9uZW50IHdpbGwgbm93IGF1dG9tYXRpY2FsbHkgdXBkYXRlIGlmIHRoZSBjb250ZW50cyBvZiB0aGlzIHNsb3QgY2hhbmdlLlxuICAgICAqL1xuICAgIGhhc1Nsb3Qoc2xvdDogc3RyaW5nLCBvclZhbHVlPzogYW55KTogYm9vbGVhbiB7XG4gICAgICB0aGlzLnNsb3RDb250cm9sbGVyLnVwZGF0ZU9uQ2hhbmdlKHNsb3QpO1xuICAgICAgLy8gVE9ETyhyZWVjZSk6IHJlY29uc2lkZXIgd2hlbiBhIHNvbHV0aW9uIGV4aXN0cyBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzE0MzRcbiAgICAgIC8vIFdlIGhhdmUgdG8gYXNzdW1lIGFsaWdubWVudCB3aXRoIHNzclNsb3RDaGVjayB1bnRpbCB0aGUgZmlyc3QgdXBkYXRlIGhlcmUgb3RoZXJ3aXNlIHBhcnQgbWlzbWF0Y2hlcyBjYW4gb2NjdXJcbiAgICAgIGlmICghdGhpcy5fX2ZpcnN0VXBkYXRlZCkge1xuICAgICAgICByZXR1cm4gb3JWYWx1ZSB8fCB0aGlzLnNzclNsb3RDaGVjayhzbG90KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvclZhbHVlIHx8IHRoaXMuc2xvdENvbnRyb2xsZXIuY2hlY2soc2xvdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIHJlcXVlc3RlZCBzbG90IHdhcyBzcGVjaWZpZWQgaW4gdGhlIGxpc3Qgb2YgYHNzci1zbG90c2AuICovXG4gICAgc3NyU2xvdENoZWNrKHNsb3Q6IHN0cmluZykge1xuICAgICAgaWYgKHRoaXMuX19maXJzdFVwZGF0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NzclNsb3RTZXQuaGFzKHNsb3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gU2xvdE9ic2VydmVyRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxTbG90T2JzZXJ2ZXJJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgRm9ybUNvbnRyb2xNaXhpbiwgRm9ybUNvbnRyb2xJbnRlcmZhY2UgfSBmcm9tICdAb3Blbi13Yy9mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHsgcHJvcGVydHksIHF1ZXJ5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtcbiAgQ29uc3RydWN0b3IsXG4gIERpc2FibGVkTWl4aW4sXG4gIFRhYkluZGV4TWl4aW4sXG4gIE10ZUVsZW1lbnQsXG4gIGlubmVySW5wdXRWYWxpZGF0b3JzLFxuICBUYWJJbmRleEludGVyZmFjZSxcbiAgRGlzYWJsZWRJbnRlcmZhY2UsXG4gIG9uVXBkYXRlLFxuICBldmVudEVtaXR0ZXIsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnLi4nO1xuXG4vLyBSZXF1aXJlZCBwb2x5ZmlsbCBmb3Igbm93XG5pbXBvcnQgJy4uLy4uL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL2luZGV4JztcblxuZXhwb3J0IGludGVyZmFjZSBNdGVDaGVja2JveENoYW5nZURldGFpbCB7XG4gIC8qKiBUaGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wgY2hhbmdlZCAqL1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCBjaGFuZ2VkICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKiogV2hldGhlciBvciBub3QgdGhlIGVsZW1lbnQgaXMgY2hlY2tlZCAqL1xuICBjaGVja2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94SW50ZXJmYWNlIHtcbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgbGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBlcnJvciB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICBlcnJvcj86IHN0cmluZztcblxuICAvKiogVGhlIGhpbnQgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgaGludD86IHN0cmluZztcblxuICAvKiogQW4gYXJpYSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgdG8gdGhlIGlucHV0IGVsZW1lbnQgKi9cbiAgYXJpYUxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKiBUaGUgbmFtZSBmb3IgdGhlIGVsZW1lbnQuIFVzZWQgd2hlbiBzdWJtaXR0aW5nIGEgZm9ybSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50ICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKiogVGhlIHZhbHVlIGZvciB0aGUgZWxlbWVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgZWxlbWVudCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgICovXG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFsdGVycyB0aGUgYmVoYXZpb3Igb2YgdGhpcyBjb250cm9sLiBXaGVuIFwiY29udHJvbGxlZFwiLCBhIGNvbnRyb2xzIHZhbHVlIGlzIGRyaXZlbiBleHBsaWNpdGx5IGJ5IGV4dGVybmFsIHN0YXRlXG4gICAqIHZpYSB0aGUgYHZhbHVlYCBwcm9wLiBDaGFuZ2UgZXZlbnRzIHdpbGwgZmlyZSBidXQgdGhlIGNvbnRyb2wgdmFsdWUgd2lsbCBub3QgY2hhbmdlIHVudGlsIGl0IGlzIGFsdGVyZWQgZGlyZWN0bHkuXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIGNvbnRyb2xsZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGNoZWNrZWQgYnkgZGVmYXVsdC4gVXNlZnVsIGZvciB3aGVuIHJlc2V0dGluZyBmb3JtIGNvbnRyb2xzIG9yIHVzaW5nIGEgc3RhdGVsZXNzIGNvbXBvbmVudCAqL1xuICBkZWZhdWx0Q2hlY2tlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBpcyBjaGVja2VkIG9yIG5vdCAqL1xuICBjaGVja2VkOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBiZSByZWFkb25seSAqL1xuICByZWFkb25seTogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgc2VsZWN0aW5nIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIG9yIG5vdCAqL1xuICByZXF1aXJlZDogYm9vbGVhbjtcblxuICAvKiogUmVuZGVycyB0aGUgcmVxdWlyZWQgaW5kaWNhdG9yIGZvciB0aGlzIGlucHV0cyBsYWJlbCB3aXRob3V0IGVuYWJsaW5nIG5hdGl2ZSBgcmVxdWlyZWRgIHZhbGlkYXRpb24gKi9cbiAgc2hvd1JlcXVpcmVkOiBib29sZWFuO1xuXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGlucHV0IGJsdXJzICAqL1xuICBoYW5kbGVCbHVyKCk6IHZvaWQ7XG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZCBvbiAgKi9cbiAgaGFuZGxlRm9jdXMoKTogdm9pZDtcblxuICAvKiogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgY2hhbmdlcyAgKi9cbiAgaGFuZGxlQ2hhbmdlKCk6IHZvaWQ7XG5cbiAgLyoqIEEgc2V0IG9mIGF0dHJpYnV0ZXMgdG8gYmUgZm9yd2FyZGVkIHRvIGFuIGVsZW1lbnQgd2l0aGluIHJlbmRlciBhbmQgcmVtb3ZlZCBmcm9tIHRoZSBlbGVtZW50ICovXG4gIGluaGVyaXRlZEF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBjb25zdCBDaGVja2JveE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBDaGVja2JveEVsZW1lbnQgZXh0ZW5kcyBUYWJJbmRleE1peGluKEZvcm1Db250cm9sTWl4aW4oRGlzYWJsZWRNaXhpbihzdXBlckNsYXNzKSksIHtcbiAgICBpbml0aWFsVGFiSW5kZXg6IDAsXG4gIH0pIHtcbiAgICBpbmhlcml0ZWRBdHRyaWJ1dGVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIHN0YXRpYyBmb3JtQ29udHJvbFZhbGlkYXRvcnMgPSBpbm5lcklucHV0VmFsaWRhdG9ycztcblxuICAgIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KCkgbGFiZWw/OiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIGVycm9yIHRleHQgZm9yIHRoZSBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KCkgZXJyb3I/OiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIGhpbnQgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoKSBoaW50Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQWx0ZXJzIHRoZSBiZWhhdmlvciBvZiB0aGlzIGNvbnRyb2wuIFdoZW4gXCJjb250cm9sbGVkXCIsIGEgY29udHJvbHMgdmFsdWUgaXMgZHJpdmVuIGV4cGxpY2l0bHkgYnkgZXh0ZXJuYWwgc3RhdGVcbiAgICAgKiB2aWEgdGhlIGB2YWx1ZWAgcHJvcC4gQ2hhbmdlIGV2ZW50cyB3aWxsIGZpcmUgYnV0IHRoZSBjb250cm9sIHZhbHVlIHdpbGwgbm90IGNoYW5nZSB1bnRpbCBpdCBpcyBhbHRlcmVkIGRpcmVjdGx5LlxuICAgICAqIEBleHBlcmltZW50YWxcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIGNvbnRyb2xsZWQ6IGJvb2xlYW47XG5cbiAgICAvKiogQW4gYXJpYSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgdG8gdGhlIGlucHV0IGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6ICdhcmlhLWxhYmVsJywgcmVmbGVjdDogdHJ1ZSB9KSBhcmlhTGFiZWw6IHN0cmluZztcblxuICAgIC8qKiBUaGUgbmFtZSBmb3IgdGhlIGVsZW1lbnQuIFVzZWQgd2hlbiBzdWJtaXR0aW5nIGEgZm9ybSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBuYW1lOiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIHZhbHVlIGZvciB0aGUgZWxlbWVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgZWxlbWVudCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgICovXG4gICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSB2YWx1ZT8gPSAnb24nO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGNoZWNrZWQgYnkgZGVmYXVsdC4gVXNlZnVsIGZvciB3aGVuIHJlc2V0dGluZyBmb3JtIGNvbnRyb2xzIG9yIHVzaW5nIGEgc3RhdGVsZXNzIGNvbXBvbmVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgZGVmYXVsdENoZWNrZWQgPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGNoZWNrZWQgb3Igbm90ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBjaGVja2VkID0gZmFsc2U7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgcmVhZG9ubHkgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHJlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAvKiogV2hldGhlciB0aGUgc2VsZWN0aW5nIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIG9yIG5vdCAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcmVxdWlyZWQgPSBmYWxzZTtcblxuICAgIC8qKiBSZW5kZXJzIHRoZSByZXF1aXJlZCBpbmRpY2F0b3IgZm9yIHRoaXMgaW5wdXRzIGxhYmVsIHdpdGhvdXQgZW5hYmxpbmcgbmF0aXZlIGByZXF1aXJlZGAgdmFsaWRhdGlvbiAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgc2hvd1JlcXVpcmVkPztcblxuICAgIC8qKiBUaGUgaW5wdXQgZWxlbWVudCB1c2VkIHdpdGhpbiB0aGUgZm9ybSBjb250cm9sIG1peGluICovXG4gICAgQHF1ZXJ5KCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSB2YWxpZGF0aW9uVGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgLyoqIEVtaXR0ZWQgd2hlbiB0aGUgZWxlbWVudCdzIHN0YXRlIGlzIGFib3V0IHRvIGNoYW5nZS4gSWYgZGVmYXVsdCBpcyBwcmV2ZW50ZWQsIGl0IHdpbGwgcmV2ZXJ0IHRoZSBjaGVja2JveCB0byBpdCdzIG9yaWdpbmFsIGNoZWNrZWQgc3RhdGUgcHJpb3IgdG8gc2VsZWN0aW5nLiAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfd2lsbENoYW5nZTogRXZlbnRFbWl0dGVyPE10ZUNoZWNrYm94Q2hhbmdlRGV0YWlsPjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhlIGVsZW1lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZC4gKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TXRlQ2hlY2tib3hDaGFuZ2VEZXRhaWw+O1xuXG4gICAgLyoqIEVtaXRzIHdoZW4gdGhpcyBlbGVtZW50IGlzIGZvY3VzZWQgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uRm9jdXM6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0cyB3aGVuIHRoaXMgZWxlbWVudCBsb3NlcyBmb2N1cyAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25CbHVyOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBAb25VcGRhdGUoJ2RlZmF1bHRDaGVja2VkJylcbiAgICBwcm90ZWN0ZWQgb25EZWZhdWx0Q2hlY2tlZENoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRyb2xsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCAmJiB0aGlzLmRlZmF1bHRDaGVja2VkICYmICF0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAb25VcGRhdGUoWyd2YWx1ZScsICdjaGVja2VkJ10sIHsgb246ICdib3RoJyB9KVxuICAgIHByb3RlY3RlZCB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgQG9uVXBkYXRlKCdhcmlhTGFiZWwnLCB7IG9uOiAnYm90aCcgfSlcbiAgICBwcm90ZWN0ZWQgdXBkYXRlTGFiZWwoKSB7XG4gICAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIC4uLnRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyxcbiAgICAgICAgYXJpYUxhYmVsOiB0aGlzLmFyaWFMYWJlbCxcbiAgICAgIH07XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIC0tIEZvcm0gY29udHJvbCB2YWxpZGF0aW9uIG92ZXJyaWRlcyAtLSAqL1xuICAgIHNob3VsZEZvcm1WYWx1ZVVwZGF0ZSgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0Rm9ybUNvbnRyb2woKTogdm9pZCB7XG4gICAgICBzdXBlci5yZXNldEZvcm1Db250cm9sPy4oKTtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRyb2xsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmRlZmF1bHRDaGVja2VkO1xuICAgIH1cblxuICAgIHZhbGlkaXR5Q2FsbGJhY2soKTogc3RyaW5nIHwgdm9pZCB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvciB8fCB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIH1cblxuICAgIC8qKiAtLSBUYWJJbmRleCBvdmVycmlkZXMgLS0gKi9cbiAgICBnZXRUYWJJbmRleEFkYXB0ZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uVGFyZ2V0Py5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgc2V0VGFiSW5kZXhBZGFwdGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0Py5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdmFsdWUpO1xuICAgIH1cblxuICAgIHJlbW92ZVRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0Py5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vdFByZXZlbnRlZCA9IHRoaXMuX3dpbGxDaGFuZ2UuZW1pdChcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBjaGVja2VkOiAhdGhpcy5jaGVja2VkLFxuICAgICAgICB9LFxuICAgICAgICB7IGNhbmNlbGFibGU6IHRydWUgfVxuICAgICAgKTtcblxuICAgICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgY2hlY2tlZDogIXRoaXMuY2hlY2tlZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChub3RQcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIGNoZWNrZWQ6IHRoaXMuY2hlY2tlZCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICAgIHRoaXMuX29uQmx1ci5lbWl0KCk7XG4gICAgfTtcblxuICAgIGhhbmRsZUZvY3VzID0gKCkgPT4ge1xuICAgICAgdGhpcy5fb25Gb2N1cy5lbWl0KCk7XG4gICAgfTtcblxuICAgIC8qKiBDbGlja3MgdGhlIGVsZW1lbnQgKi9cbiAgICBwdWJsaWMgY2xpY2soKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQuY2xpY2soKTtcbiAgICB9XG5cbiAgICAvKiogRm9jdXNlcyB0aGUgZWxlbWVudCAqL1xuICAgIHB1YmxpYyBmb2N1cygpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblRhcmdldC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKiBCbHVycyB0aGUgZWxlbWVudCAqL1xuICAgIHB1YmxpYyBibHVyKCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0LmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gQ2hlY2tib3hFbGVtZW50IGFzIENvbnN0cnVjdG9yPFxuICAgIENoZWNrYm94SW50ZXJmYWNlICYgVGFiSW5kZXhJbnRlcmZhY2UgJiBGb3JtQ29udHJvbEludGVyZmFjZSAmIERpc2FibGVkSW50ZXJmYWNlXG4gID4gJlxuICAgIFQ7XG59O1xuIiwgIi8qKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBXZWFrTWFwcyB1c2VkIHRocm91Z2hvdXQgdGhpcyBwcm9qZWN0LiBUaGUgV2Vha01hcHMgZXhpc3QgdG8gdGllXG4gKiBvYmplY3RzIHRvZ2V0aGVyIHdpdGhvdXQgcG9sbHV0aW5nIHRoZSBvYmplY3RzIHRoZW1zZWx2ZXMgd2l0aCByZWZlcmVuY2VzIHdlJ2QgcmF0aGVyIGtlZXBcbiAqIGhpZGRlbi4gVGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIHdvcmsgYXMgdHJhbnNwYXJlbnRseSBhcyBwb3NzaWJsZS5cbiAqL1xuaW1wb3J0IHsgSUVsZW1lbnRJbnRlcm5hbHMsIElDdXN0b21FbGVtZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgaXQgaXMgYXR0YWNoZWQgdG8gKi9cbmV4cG9ydCBjb25zdCByZWZNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgSUN1c3RvbUVsZW1lbnQ+KCk7XG5cbi8qKiBVc2VlIGFuIEVsZW1lbnRzSW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBpdHMgVmFsaWRpdHlTdGF0ZSBvYmplY3QgKi9cbmV4cG9ydCBjb25zdCB2YWxpZGl0eU1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBWYWxpZGl0eVN0YXRlPigpO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGl0cyBhdHRhY2hlZCBpbnB1dFt0eXBlPVwiaGlkZGVuXCJdICovXG5leHBvcnQgY29uc3QgaGlkZGVuSW5wdXRNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgSFRNTElucHV0RWxlbWVudFtdPigpO1xuXG4vKiogVXNlIGEgY3VzdG9tIGVsZW1lbnQgdG8gZ2V0IGl0cyBhdHRhY2hlZCBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlICovXG5leHBvcnQgY29uc3QgaW50ZXJuYWxzTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzPigpO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IHRoZSBhdHRhY2hlZCB2YWxpZGF0aW9uIG1lc3NhZ2UgKi9cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uTWVzc2FnZU1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBzdHJpbmc+KCk7XG5cbi8qKiBVc2UgYSBmb3JtIGVsZW1lbnQgdG8gZ2V0IGF0dGFjaGVkIGN1c3RvbSBlbGVtZW50cyBhbmQgRWxlbWVudEludGVybmFscyBpbnN0YW5jZXMgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5leHBvcnQgY29uc3QgZm9ybXNNYXAgPSBuZXcgV2Vha01hcDxIVE1MRm9ybUVsZW1lbnQsIE9iamVjdD4oKTtcblxuLyoqIFVzZSBhIGN1c3RvbSBlbGVtZW50IG9yIG90aGVyIG9iamVjdCB0byBnZXQgdGhlaXIgYXNzb2NpYXRlZCBNdXRhdGlvbk9ic2VydmVycyAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd0hvc3RzTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIE11dGF0aW9uT2JzZXJ2ZXI+KCk7XG5cbi8qKiBVc2UgYSBmb3JtIGVsZW1lbnQgdG8gZ2V0IGEgc2V0IG9mIGF0dGFjaGVkIGN1c3RvbSBlbGVtZW50cyAqL1xuZXhwb3J0IGNvbnN0IGZvcm1FbGVtZW50c01hcCA9IG5ldyBXZWFrTWFwPEhUTUxGb3JtRWxlbWVudCwgU2V0PElDdXN0b21FbGVtZW50Pj4oKTtcblxuLyoqIFVzZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBhIHJlZmVyZW5jZSB0byBhbiBlbGVtZW50J3MgdmFsdWUgKi9cbmV4cG9ydCBjb25zdCByZWZWYWx1ZU1hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBhbnk+KCk7XG5cbi8qKiBFbGVtZW50cyB0aGF0IG5lZWQgdG8gYmUgdXBncmFkZWQgb25jZSBhZGRlZCB0byB0aGUgRE9NICovXG5leHBvcnQgY29uc3QgdXBncmFkZU1hcCA9IG5ldyBXZWFrTWFwPEVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzPigpO1xuXG4vKiogU2F2ZSByZWZlcmVuY2VzIHRvIHNoYWRvdyByb290cyBmb3IgaW5jbHVzaW9uIGluIGludGVybmFscyBpbnN0YW5jZSAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd1Jvb3RNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgU2hhZG93Um9vdD4oKTtcblxuLyoqIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIGludGVybmFscycgdmFsaWRhdGlvbiBhbmNob3IgKi9cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uQW5jaG9yTWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIEhUTUxFbGVtZW50PigpO1xuXG4vKiogTWFwIERvY3VtZW50RnJhZ21lbnRzIHRvIHRoZWlyIE11dGF0aW9uT2JzZXJ2ZXJzIHNvIHdlIGNhbiBkaXNjb25uZWN0IG9uY2UgZWxlbWVudHMgYXJlIHJlbW92ZWQgKi9cbmV4cG9ydCBjb25zdCBkb2N1bWVudEZyYWdtZW50TWFwID0gbmV3IFdlYWtNYXA8RG9jdW1lbnRGcmFnbWVudCwgTXV0YXRpb25PYnNlcnZlcj4oKTtcblxuLyoqIFdoZXRoZXIgY29ubmVjdGVkQ2FsbGJhY2sgaGFzIGFscmVhZHkgYmVlbiBjYWxsZWQuICovXG5leHBvcnQgY29uc3QgY29ubmVjdGVkQ2FsbGJhY2tNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgYm9vbGVhbj4oKTtcblxuLyoqIFNhdmUgYSByZWZlcmVuY2UgdG8gdmFsaWRpdHkgc3RhdGUgZm9yIGVsZW1lbnRzIHRoYXQgbmVlZCB0byB1cGdyYWRlIGFmdGVyIGJlaW5nIGNvbm5lY3RlZCAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkaXR5VXBncmFkZU1hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBJRWxlbWVudEludGVybmFscz4oKTtcbiIsICJpbXBvcnQgeyB1cGdyYWRlTWFwIH0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IElBb20sIElFbGVtZW50SW50ZXJuYWxzIH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbmV4cG9ydCBjb25zdCBhb206IElBb20gPSB7XG4gIGFyaWFBdG9taWM6ICdhcmlhLWF0b21pYycsXG4gIGFyaWFBdXRvQ29tcGxldGU6ICdhcmlhLWF1dG9jb21wbGV0ZScsXG4gIGFyaWFCdXN5OiAnYXJpYS1idXN5JyxcbiAgYXJpYUNoZWNrZWQ6ICdhcmlhLWNoZWNrZWQnLFxuICBhcmlhQ29sQ291bnQ6ICdhcmlhLWNvbGNvdW50JyxcbiAgYXJpYUNvbEluZGV4OiAnYXJpYS1jb2xpbmRleCcsXG4gIGFyaWFDb2xJbmRleFRleHQ6ICdhcmlhLWNvbGluZGV4dGV4dCcsXG4gIGFyaWFDb2xTcGFuOiAnYXJpYS1jb2xzcGFuJyxcbiAgYXJpYUN1cnJlbnQ6ICdhcmlhLWN1cnJlbnQnLFxuICBhcmlhRGlzYWJsZWQ6ICdhcmlhLWRpc2FibGVkJyxcbiAgYXJpYUV4cGFuZGVkOiAnYXJpYS1leHBhbmRlZCcsXG4gIGFyaWFIYXNQb3B1cDogJ2FyaWEtaGFzcG9wdXAnLFxuICBhcmlhSGlkZGVuOiAnYXJpYS1oaWRkZW4nLFxuICBhcmlhSW52YWxpZDogJ2FyaWEtaW52YWxpZCcsXG4gIGFyaWFLZXlTaG9ydGN1dHM6ICdhcmlhLWtleXNob3J0Y3V0cycsXG4gIGFyaWFMYWJlbDogJ2FyaWEtbGFiZWwnLFxuICBhcmlhTGV2ZWw6ICdhcmlhLWxldmVsJyxcbiAgYXJpYUxpdmU6ICdhcmlhLWxpdmUnLFxuICBhcmlhTW9kYWw6ICdhcmlhLW1vZGFsJyxcbiAgYXJpYU11bHRpTGluZTogJ2FyaWEtbXVsdGlsaW5lJyxcbiAgYXJpYU11bHRpU2VsZWN0YWJsZTogJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJyxcbiAgYXJpYU9yaWVudGF0aW9uOiAnYXJpYS1vcmllbnRhdGlvbicsXG4gIGFyaWFQbGFjZWhvbGRlcjogJ2FyaWEtcGxhY2Vob2xkZXInLFxuICBhcmlhUG9zSW5TZXQ6ICdhcmlhLXBvc2luc2V0JyxcbiAgYXJpYVByZXNzZWQ6ICdhcmlhLXByZXNzZWQnLFxuICBhcmlhUmVhZE9ubHk6ICdhcmlhLXJlYWRvbmx5JyxcbiAgYXJpYVJlbGV2YW50OiAnYXJpYS1yZWxldmFudCcsXG4gIGFyaWFSZXF1aXJlZDogJ2FyaWEtcmVxdWlyZWQnLFxuICBhcmlhUm9sZURlc2NyaXB0aW9uOiAnYXJpYS1yb2xlZGVzY3JpcHRpb24nLFxuICBhcmlhUm93Q291bnQ6ICdhcmlhLXJvd2NvdW50JyxcbiAgYXJpYVJvd0luZGV4OiAnYXJpYS1yb3dpbmRleCcsXG4gIGFyaWFSb3dJbmRleFRleHQ6ICdhcmlhLXJvd2luZGV4dGV4dCcsXG4gIGFyaWFSb3dTcGFuOiAnYXJpYS1yb3dzcGFuJyxcbiAgYXJpYVNlbGVjdGVkOiAnYXJpYS1zZWxlY3RlZCcsXG4gIGFyaWFTZXRTaXplOiAnYXJpYS1zZXRzaXplJyxcbiAgYXJpYVNvcnQ6ICdhcmlhLXNvcnQnLFxuICBhcmlhVmFsdWVNYXg6ICdhcmlhLXZhbHVlbWF4JyxcbiAgYXJpYVZhbHVlTWluOiAnYXJpYS12YWx1ZW1pbicsXG4gIGFyaWFWYWx1ZU5vdzogJ2FyaWEtdmFsdWVub3cnLFxuICBhcmlhVmFsdWVUZXh0OiAnYXJpYS12YWx1ZXRleHQnLFxuICByb2xlOiAncm9sZScsXG59O1xuXG5leHBvcnQgY29uc3QgaW5pdEFvbSA9IChyZWY6IEVsZW1lbnQsIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHMpID0+IHtcbiAgZm9yIChsZXQga2V5IGluIGFvbSkge1xuICAgIGludGVybmFsc1trZXldID0gbnVsbDtcblxuICAgIGxldCBjbG9zdXJlVmFsdWUgPSBudWxsO1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBhb21ba2V5XTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW50ZXJuYWxzLCBrZXksIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGNsb3N1cmVWYWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgY2xvc3VyZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICByZWYuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGdyYWRlTWFwLnNldChyZWYsIGludGVybmFscyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHtcbiAgaW50ZXJuYWxzTWFwLFxuICBzaGFkb3dIb3N0c01hcCxcbiAgdXBncmFkZU1hcCxcbiAgaGlkZGVuSW5wdXRNYXAsXG4gIGRvY3VtZW50RnJhZ21lbnRNYXAsXG4gIGZvcm1FbGVtZW50c01hcCxcbiAgdmFsaWRpdHlVcGdyYWRlTWFwLFxuICByZWZWYWx1ZU1hcCxcbn0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IGFvbSB9IGZyb20gJy4vYW9tLmpzJztcbmltcG9ydCB7XG4gIHJlbW92ZUhpZGRlbklucHV0cyxcbiAgaW5pdEZvcm0sXG4gIGluaXRMYWJlbHMsXG4gIHVwZ3JhZGVJbnRlcm5hbHMsXG4gIHNldERpc2FibGVkLFxuICBtdXRhdGlvbk9ic2VydmVyRXhpc3RzLFxufSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IElDdXN0b21FbGVtZW50IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbmZ1bmN0aW9uIGluaXROb2RlKG5vZGU6IElDdXN0b21FbGVtZW50KTogdm9pZCB7XG4gIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQobm9kZSk7XG4gIGNvbnN0IHsgZm9ybSB9ID0gaW50ZXJuYWxzO1xuICBpbml0Rm9ybShub2RlLCBmb3JtLCBpbnRlcm5hbHMpO1xuICBpbml0TGFiZWxzKG5vZGUsIGludGVybmFscy5sYWJlbHMpO1xufVxuXG4vKipcbiAqIElmIGEgZmllbGRzZXQncyBkaXNhYmxlZCBzdGF0ZSBpcyB0b2dnbGVkLCB0aGUgZm9ybURpc2FibGVkQ2FsbGJhY2tcbiAqIG9uIGFueSBjaGlsZCBmb3JtLWFzc29jaWF0ZWQgY3Vzb3RtIGVsZW1lbnRzLlxuICovXG5leHBvcnQgY29uc3Qgd2Fsa0ZpZWxkc2V0ID0gKG5vZGU6IEhUTUxGaWVsZFNldEVsZW1lbnQsIGZpcnN0UmVuZGVyID0gZmFsc2UpOiB2b2lkID0+IHtcbiAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihub2RlLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwge1xuICAgIGFjY2VwdE5vZGUobm9kZTogSUN1c3RvbUVsZW1lbnQpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIGludGVybmFsc01hcC5oYXMobm9kZSkgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9TS0lQO1xuICAgIH0sXG4gIH0pO1xuXG4gIGxldCBjdXJyZW50ID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgSUN1c3RvbUVsZW1lbnQ7XG4gIC8qKlxuICAgKiBXZSBkb24ndCBuZWVkIHRvIGNhbGwgYW55dGhpbmcgb24gZmlyc3QgcmVuZGVyIGlmXG4gICAqIHRoZSBlbGVtZW50IGlzbid0IGRpc2FibGVkXG4gICAqL1xuICBjb25zdCBpc0NhbGxOZWNlc3NhcnkgPSAhZmlyc3RSZW5kZXIgfHwgbm9kZS5kaXNhYmxlZDtcblxuICB3aGlsZSAoY3VycmVudCkge1xuICAgIGlmIChjdXJyZW50LmZvcm1EaXNhYmxlZENhbGxiYWNrICYmIGlzQ2FsbE5lY2Vzc2FyeSkge1xuICAgICAgc2V0RGlzYWJsZWQoY3VycmVudCwgbm9kZS5kaXNhYmxlZCk7XG4gICAgfVxuICAgIGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWc6IE11dGF0aW9uT2JzZXJ2ZXJJbml0ID0ge1xuICBhdHRyaWJ1dGVzOiB0cnVlLFxuICBhdHRyaWJ1dGVGaWx0ZXI6IFsnZGlzYWJsZWQnLCAnbmFtZSddLFxufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIgPSBtdXRhdGlvbk9ic2VydmVyRXhpc3RzKClcbiAgPyBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zTGlzdDogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xuICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldCBhcyBJQ3VzdG9tRWxlbWVudDtcblxuICAgICAgICAvKiogTWFuYWdlIGNoYW5nZXMgdG8gdGhlIHJlZidzIGRpc2FibGVkIHN0YXRlICovXG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgICAgICAgc2V0RGlzYWJsZWQodGFyZ2V0LCB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5sb2NhbE5hbWUgPT09ICdmaWVsZHNldCcpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVwdXJwb3NlIHRoZSBvYnNlcnZlciBmb3IgZmllbGRzZXRzIHdoaWNoIG5lZWRcbiAgICAgICAgICAgICAqIHRvIGJlIHdhbGtlZCB3aGVuZXZlciB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIGlzIHNldFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB3YWxrRmllbGRzZXQodGFyZ2V0IGFzIHVua25vd24gYXMgSFRNTEZpZWxkU2V0RWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKiBNYW5hZ2UgY2hhbmdlcyB0byB0aGUgcmVmJ3MgbmFtZSAqL1xuICAgICAgICBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ25hbWUnKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZWZWYWx1ZU1hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIGludGVybmFscy5zZXRGb3JtVmFsdWUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIDogKHt9IGFzIE11dGF0aW9uT2JzZXJ2ZXIpO1xuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZXJDYWxsYmFjayhtdXRhdGlvbkxpc3Q6IE11dGF0aW9uUmVjb3JkW10pIHtcbiAgbXV0YXRpb25MaXN0LmZvckVhY2goKG11dGF0aW9uUmVjb3JkKSA9PiB7XG4gICAgY29uc3QgeyBhZGRlZE5vZGVzLCByZW1vdmVkTm9kZXMgfSA9IG11dGF0aW9uUmVjb3JkO1xuICAgIGNvbnN0IGFkZGVkID0gQXJyYXkuZnJvbShhZGRlZE5vZGVzKSBhcyBJQ3VzdG9tRWxlbWVudFtdO1xuICAgIGNvbnN0IHJlbW92ZWQgPSBBcnJheS5mcm9tKHJlbW92ZWROb2RlcykgYXMgSUN1c3RvbUVsZW1lbnRbXTtcblxuICAgIGFkZGVkLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIC8qKiBBbGxvd3MgZm9yIGR5bmFtaWMgYWRkaXRpb24gb2YgZWxlbWVudHMgdG8gZm9ybXMgKi9cbiAgICAgIGlmIChpbnRlcm5hbHNNYXAuaGFzKG5vZGUpICYmIG5vZGUuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICAgICAgaW5pdE5vZGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKiBVcGdyYWRlIHRoZSBhY2Nlc3NpYmlsaXR5IGluZm9ybWF0aW9uIG9uIGFueSBwcmV2aW91c2x5IGNvbm5lY3RlZCAqL1xuICAgICAgaWYgKHVwZ3JhZGVNYXAuaGFzKG5vZGUpKSB7XG4gICAgICAgIGNvbnN0IGludGVybmFscyA9IHVwZ3JhZGVNYXAuZ2V0KG5vZGUpO1xuICAgICAgICBjb25zdCBhb21LZXlzID0gT2JqZWN0LmtleXMoYW9tKTtcbiAgICAgICAgYW9tS2V5c1xuICAgICAgICAgIC5maWx0ZXIoKGtleSkgPT4gaW50ZXJuYWxzW2tleV0gIT09IG51bGwpXG4gICAgICAgICAgLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYW9tW2tleV0sIGludGVybmFsc1trZXldKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgdXBncmFkZU1hcC5kZWxldGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKiBVcGdyYWRlIHRoZSB2YWxpZGl0eSBzdGF0ZSB3aGVuIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCAqL1xuICAgICAgaWYgKHZhbGlkaXR5VXBncmFkZU1hcC5oYXMobm9kZSkpIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gdmFsaWRpdHlVcGdyYWRlTWFwLmdldChub2RlKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2ludGVybmFscy12YWxpZCcsIGludGVybmFscy52YWxpZGl0eS52YWxpZC50b1N0cmluZygpKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2ludGVybmFscy1pbnZhbGlkJywgKCFpbnRlcm5hbHMudmFsaWRpdHkudmFsaWQpLnRvU3RyaW5nKCkpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgKCFpbnRlcm5hbHMudmFsaWRpdHkudmFsaWQpLnRvU3RyaW5nKCkpO1xuICAgICAgICB2YWxpZGl0eVVwZ3JhZGVNYXAuZGVsZXRlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvKiogSWYgdGhlIG5vZGUgdGhhdCdzIGFkZGVkIGlzIGEgZm9ybSwgY2hlY2sgdGhlIHZhbGlkaXR5ICovXG4gICAgICBpZiAobm9kZS5sb2NhbE5hbWUgPT09ICdmb3JtJykge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KG5vZGUgYXMgdW5rbm93biBhcyBIVE1MRm9ybUVsZW1lbnQpO1xuICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKG5vZGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCB7XG4gICAgICAgICAgYWNjZXB0Tm9kZShub2RlOiBJQ3VzdG9tRWxlbWVudCk6IG51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gaW50ZXJuYWxzTWFwLmhhcyhub2RlKSAmJiAhKGZvcm1FbGVtZW50cyAmJiBmb3JtRWxlbWVudHMuaGFzKG5vZGUpKVxuICAgICAgICAgICAgICA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVFxuICAgICAgICAgICAgICA6IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVA7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcblxuICAgICAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICAgIGluaXROb2RlKGN1cnJlbnQpO1xuICAgICAgICAgIGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5sb2NhbE5hbWUgPT09ICdmaWVsZHNldCcpIHtcbiAgICAgICAgZGlzYWJsZWRPck5hbWVPYnNlcnZlci5vYnNlcnZlPy4obm9kZSwgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZyk7XG4gICAgICAgIHdhbGtGaWVsZHNldChub2RlIGFzIHVua25vd24gYXMgSFRNTEZpZWxkU2V0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZW1vdmVkLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQobm9kZSk7XG4gICAgICAvKiogQ2xlYW4gdXAgYW55IGhpZGRlbiBpbnB1dCBlbGVtZW50cyBsZWZ0IGFmdGVyIGFuIGVsZW1lbnQgaXMgZGlzY29ubmVjdGVkICovXG4gICAgICBpZiAoaW50ZXJuYWxzICYmIGhpZGRlbklucHV0TWFwLmdldChpbnRlcm5hbHMpKSB7XG4gICAgICAgIHJlbW92ZUhpZGRlbklucHV0cyhpbnRlcm5hbHMpO1xuICAgICAgfVxuICAgICAgLyoqIERpc2Nvbm5lY3QgYW55IHVubmVlZGVkIE11dGF0aW9uT2JzZXJ2ZXJzICovXG4gICAgICBpZiAoc2hhZG93SG9zdHNNYXAuaGFzKG5vZGUpKSB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gc2hhZG93SG9zdHNNYXAuZ2V0KG5vZGUpO1xuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRoaXMgb2JzZXJ2ZXIgY2FsbGJhY2sgaXMganVzdCBmb3IgZG9jdW1lbnQgZnJhZ21lbnRzXG4gKiBpdCB3aWxsIHVwZ3JhZGUgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSBpZiB3YXMgYXBwZW5kZWRcbiAqIGZyb20gYSBkb2N1bWVudCBmcmFnbWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyYWdtZW50T2JzZXJ2ZXJDYWxsYmFjayhtdXRhdGlvbkxpc3Q6IE11dGF0aW9uUmVjb3JkW10pOiB2b2lkIHtcbiAgbXV0YXRpb25MaXN0LmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgY29uc3QgeyByZW1vdmVkTm9kZXMgfSA9IG11dGF0aW9uO1xuXG4gICAgcmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gZG9jdW1lbnRGcmFnbWVudE1hcC5nZXQobXV0YXRpb24udGFyZ2V0IGFzIERvY3VtZW50RnJhZ21lbnQpO1xuICAgICAgaWYgKGludGVybmFsc01hcC5oYXMobm9kZSBhcyBJQ3VzdG9tRWxlbWVudCkpIHtcbiAgICAgICAgdXBncmFkZUludGVybmFscyhub2RlIGFzIElDdXN0b21FbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogRGVmZXIgdGhlIHVwZ3JhZGUgb2Ygbm9kZXMgd2l0aGluZyBhIERvY3VtZW50RnJhZ21lbnRcbiAqIEBwYXJhbSBmcmFnbWVudCB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmVyVXBncmFkZSA9IChmcmFnbWVudDogRG9jdW1lbnRGcmFnbWVudCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZyYWdtZW50T2JzZXJ2ZXJDYWxsYmFjayk7XG4gIG9ic2VydmVyLm9ic2VydmU/LihmcmFnbWVudCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gIGRvY3VtZW50RnJhZ21lbnRNYXAuc2V0KGZyYWdtZW50LCBvYnNlcnZlcik7XG59O1xuXG5leHBvcnQgY29uc3Qgb2JzZXJ2ZXIgPSBtdXRhdGlvbk9ic2VydmVyRXhpc3RzKClcbiAgPyBuZXcgTXV0YXRpb25PYnNlcnZlcihvYnNlcnZlckNhbGxiYWNrKVxuICA6ICh7fSBhcyBNdXRhdGlvbk9ic2VydmVyKTtcbmV4cG9ydCBjb25zdCBvYnNlcnZlckNvbmZpZzogTXV0YXRpb25PYnNlcnZlckluaXQgPSB7XG4gIGNoaWxkTGlzdDogdHJ1ZSxcbiAgc3VidHJlZTogdHJ1ZSxcbn07XG4iLCAiaW1wb3J0IHsgaGlkZGVuSW5wdXRNYXAsIGZvcm1zTWFwLCBmb3JtRWxlbWVudHNNYXAsIGludGVybmFsc01hcCB9IGZyb20gJy4vbWFwcy5qcyc7XG5pbXBvcnQgeyBkaXNhYmxlZE9yTmFtZU9ic2VydmVyLCBkaXNhYmxlZE9yTmFtZU9ic2VydmVyQ29uZmlnIH0gZnJvbSAnLi9tdXRhdGlvbi1vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgSUN1c3RvbUVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzLCBMYWJlbHNMaXN0IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbi8qKlxuICogVG9nZ2xlJ3MgdGhlIGRpc2FibGVkIHN0YXRlIChhdHRyaWJ1dGVzICYgY2FsbGJhY2spIG9uIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAcGFyYW0ge0lDdXN0b21FbGVtZW50fSByZWYgLSBUaGUgY3VzdG9tIGVsZW1lbnQgaW5zdGFuY2VcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzYWJsZWQgLSBUaGUgZGlzYWJsZWQgc3RhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHNldERpc2FibGVkID0gKHJlZjogSUN1c3RvbUVsZW1lbnQsIGRpc2FibGVkOiBib29sZWFuKTogdm9pZCA9PiB7XG4gIHJlZi50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy1kaXNhYmxlZCcsIGRpc2FibGVkKTtcblxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICByZWYuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgfSBlbHNlIHtcbiAgICByZWYucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XG4gIH1cblxuICBpZiAocmVmLmZvcm1EaXNhYmxlZENhbGxiYWNrKSB7XG4gICAgcmVmLmZvcm1EaXNhYmxlZENhbGxiYWNrLmFwcGx5KHJlZiwgW2Rpc2FibGVkXSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgaGlkZGVuIGlucHV0cyBmb3IgdGhlIGdpdmVuIGVsZW1lbnQgaW50ZXJuYWxzIGluc3RhbmNlXG4gKiBAcGFyYW0ge0lFbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHMgLSBUaGUgZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2VcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVIaWRkZW5JbnB1dHMgPSAoaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscyk6IHZvaWQgPT4ge1xuICBjb25zdCBoaWRkZW5JbnB1dHMgPSBoaWRkZW5JbnB1dE1hcC5nZXQoaW50ZXJuYWxzKTtcbiAgaGlkZGVuSW5wdXRzLmZvckVhY2goKGhpZGRlbklucHV0KSA9PiB7XG4gICAgaGlkZGVuSW5wdXQucmVtb3ZlKCk7XG4gIH0pO1xuICBoaWRkZW5JbnB1dE1hcC5zZXQoaW50ZXJuYWxzLCBbXSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoaWRkZW4gaW5wdXQgZm9yIHRoZSBnaXZlbiByZWZcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSBlbGVtZW50IHRvIHdhdGNoXG4gKiBAcGFyYW0ge0lFbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHMgLSBUaGUgZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2UgZm9yIHRoZSByZWZcbiAqIEByZXR1cm4ge0hUTUxJbnB1dEVsZW1lbnR9IFRoZSBoaWRkZW4gaW5wdXRcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUhpZGRlbklucHV0ID0gKFxuICByZWY6IElDdXN0b21FbGVtZW50LFxuICBpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzXG4pOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9ICdoaWRkZW4nO1xuICBpbnB1dC5uYW1lID0gcmVmLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICByZWYuYWZ0ZXIoaW5wdXQpO1xuICBoaWRkZW5JbnB1dE1hcC5nZXQoaW50ZXJuYWxzKS5wdXNoKGlucHV0KTtcbiAgcmV0dXJuIGlucHV0O1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgcmVmIGJ5IHNldHRpbmcgdXAgYW4gYXR0cmlidXRlIG9ic2VydmUgb24gaXRcbiAqIGxvb2tpbmcgZm9yIGNoYW5nZXMgdG8gZGlzYWJsZWRcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSBlbGVtZW50IHRvIHdhdGNoXG4gKiBAcGFyYW0ge0lFbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHMgLSBUaGUgZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2UgZm9yIHRoZSByZWZcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBpbml0UmVmID0gKHJlZjogSUN1c3RvbUVsZW1lbnQsIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHMpOiB2b2lkID0+IHtcbiAgaGlkZGVuSW5wdXRNYXAuc2V0KGludGVybmFscywgW10pO1xuICBkaXNhYmxlZE9yTmFtZU9ic2VydmVyLm9ic2VydmU/LihyZWYsIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWcpO1xufTtcblxuLyoqXG4gKiBTZXQgdXAgbGFiZWxzIGZvciB0aGUgcmVmXG4gKiBAcGFyYW0ge0lDdXN0b21FbGVtZW50fSByZWYgLSBUaGUgcmVmIHRvIGFkZCBsYWJlbHMgdG9cbiAqIEBwYXJhbSB7TGFiZWxzTGlzdH0gbGFiZWxzIC0gQSBsaXN0IG9mIHRoZSBsYWJlbHNcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBpbml0TGFiZWxzID0gKHJlZjogSUN1c3RvbUVsZW1lbnQsIGxhYmVsczogTGFiZWxzTGlzdCk6IHZvaWQgPT4ge1xuICBpZiAobGFiZWxzLmxlbmd0aCkge1xuICAgIEFycmF5LmZyb20obGFiZWxzKS5mb3JFYWNoKChsYWJlbCkgPT4gbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWYuY2xpY2suYmluZChyZWYpKSk7XG4gICAgbGV0IGZpcnN0TGFiZWxJZCA9IGxhYmVsc1swXS5pZDtcbiAgICBpZiAoIWxhYmVsc1swXS5pZCkge1xuICAgICAgZmlyc3RMYWJlbElkID0gYCR7bGFiZWxzWzBdLmh0bWxGb3J9X0xhYmVsYDtcbiAgICAgIGxhYmVsc1swXS5pZCA9IGZpcnN0TGFiZWxJZDtcbiAgICB9XG4gICAgcmVmLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgZmlyc3RMYWJlbElkKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBpbnRlcm5hbHMtdmFsaWQgYW5kIGludGVybmFscy1pbnZhbGlkIGF0dHJpYnV0ZXNcbiAqIGJhc2VkIG9uIGZvcm0gdmFsaWRpdHkuXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gLSBUaGUgdGFyZ2V0IGZvcm1cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBzZXRGb3JtVmFsaWRpdHkgPSAoZm9ybTogSFRNTEZvcm1FbGVtZW50KSA9PiB7XG4gIGNvbnN0IG5hdGl2ZUNvbnRyb2xWYWxpZGl0eSA9IEFycmF5LmZyb20oZm9ybS5lbGVtZW50cylcbiAgICAuZmlsdGVyKFxuICAgICAgKGVsZW1lbnQ6IEVsZW1lbnQgJiB7IHZhbGlkaXR5OiBWYWxpZGl0eVN0YXRlIH0pID0+XG4gICAgICAgICFlbGVtZW50LnRhZ05hbWUuaW5jbHVkZXMoJy0nKSAmJiBlbGVtZW50LnZhbGlkaXR5XG4gICAgKVxuICAgIC5tYXAoKGVsZW1lbnQ6IEVsZW1lbnQgJiB7IHZhbGlkaXR5OiBWYWxpZGl0eVN0YXRlIH0pID0+IGVsZW1lbnQudmFsaWRpdHkudmFsaWQpO1xuICBjb25zdCBwb2x5ZmlsbGVkRWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGZvcm0pIHx8IFtdO1xuICBjb25zdCBwb2x5ZmlsbGVkVmFsaWRpdHkgPSBBcnJheS5mcm9tKHBvbHlmaWxsZWRFbGVtZW50cylcbiAgICAuZmlsdGVyKChjb250cm9sKSA9PiBjb250cm9sLmlzQ29ubmVjdGVkKVxuICAgIC5tYXAoKGNvbnRyb2w6IElDdXN0b21FbGVtZW50KSA9PiBpbnRlcm5hbHNNYXAuZ2V0KGNvbnRyb2wpLnZhbGlkaXR5LnZhbGlkKTtcbiAgY29uc3QgaGFzSW52YWxpZCA9IFsuLi5uYXRpdmVDb250cm9sVmFsaWRpdHksIC4uLnBvbHlmaWxsZWRWYWxpZGl0eV0uaW5jbHVkZXMoZmFsc2UpO1xuICBmb3JtLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLWludmFsaWQnLCBoYXNJbnZhbGlkKTtcbiAgZm9ybS50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy12YWxpZCcsICFoYXNJbnZhbGlkKTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIGlucHV0IGNhbGxiYWNrLiBVcGRhdGVzIHRoZSBmb3JtJ3MgdmFsaWRpdHlcbiAqIGF0dHJpYnV0ZXMgb24gaW5wdXQuXG4gKiBAcGFyYW0ge0V2ZW50fSAtIFRoZSBmb3JtIGlucHV0IGV2ZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZm9ybUlucHV0Q2FsbGJhY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIHNldEZvcm1WYWxpZGl0eShmaW5kUGFyZW50Rm9ybShldmVudC50YXJnZXQpKTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIGNoYW5nZSBjYWxsYmFjay4gVXBkYXRlcyB0aGUgZm9ybSdzIHZhbGlkaXR5XG4gKiBhdHRyaWJ1dGVzIG9uIGNoYW5nZS5cbiAqIEBwYXJhbSB7RXZlbnR9IC0gVGhlIGZvcm0gY2hhbmdlIGV2ZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZm9ybUNoYW5nZUNhbGxiYWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICBzZXRGb3JtVmFsaWRpdHkoZmluZFBhcmVudEZvcm0oZXZlbnQudGFyZ2V0KSk7XG59O1xuXG4vKipcbiAqIFRoZSBnbG9iYWwgZm9ybSBzdWJtaXQgY2FsbGJhY2suIFdlIG5lZWQgdG8gY2FuY2VsIGFueSBzdWJtaXNzaW9uXG4gKiBpZiBhIG5lc3RlZCBpbnRlcm5hbHMgaXMgaW52YWxpZC5cbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSAtIFRoZSBmb3JtIGVsZW1lbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCB3aXJlU3VibWl0TG9naWMgPSAoZm9ybTogSFRNTEZvcm1FbGVtZW50KSA9PiB7XG4gIGNvbnN0IFNVQk1JVF9CVVRUT05fU0VMRUNUT1IgPVxuICAgICc6aXMoYnV0dG9uW3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBidXR0b246bm90KFt0eXBlXSkpOm5vdChbZGlzYWJsZWRdKSc7XG4gIGxldCBzdWJtaXRCdXR0b25TZWxlY3RvciA9IGAke1NVQk1JVF9CVVRUT05fU0VMRUNUT1J9Om5vdChbZm9ybV0pYDtcblxuICBpZiAoZm9ybS5pZCkge1xuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yICs9IGAsJHtTVUJNSVRfQlVUVE9OX1NFTEVDVE9SfVtmb3JtPScke2Zvcm0uaWR9J11gO1xuICB9XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBFbGVtZW50O1xuICAgIGlmICh0YXJnZXQuY2xvc2VzdChzdWJtaXRCdXR0b25TZWxlY3RvcikpIHtcbiAgICAgIC8vIHZhbGlkYXRlXG4gICAgICBjb25zdCBlbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhpcyBmb3JtIGRvZXMgbm90IHZhbGlkYXRlIHRoZW4gd2UncmUgZG9uZVxuICAgICAgICovXG4gICAgICBpZiAoZm9ybS5ub1ZhbGlkYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLyoqIElmIHRoZSBTZXQgaGFzIGl0ZW1zLCBjb250aW51ZSAqL1xuICAgICAgaWYgKGVsZW1lbnRzLnNpemUpIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKTtcbiAgICAgICAgLyoqIENoZWNrIHRoZSBpbnRlcm5hbHMuY2hlY2tWYWxpZGl0eSgpIG9mIGFsbCBub2RlcyAqL1xuICAgICAgICBjb25zdCB2YWxpZGl0eUxpc3QgPSBub2Rlcy5yZXZlcnNlKCkubWFwKChub2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChub2RlKTtcbiAgICAgICAgICByZXR1cm4gaW50ZXJuYWxzLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKiBJZiBhbnkgbm9kZSBpcyBmYWxzZSwgc3RvcCB0aGUgZXZlbnQgKi9cbiAgICAgICAgaWYgKHZhbGlkaXR5TGlzdC5pbmNsdWRlcyhmYWxzZSkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIHJlc2V0IGNhbGxiYWNrLiBUaGlzIHdpbGwgbG9vcCBvdmVyIGFkZGVkXG4gKiBpbnB1dHMgYW5kIGNhbGwgZm9ybVJlc2V0Q2FsbGJhY2sgaWYgYXBwbGljYWJsZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1SZXNldENhbGxiYWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAvKiogR2V0IHRoZSBTZXQgb2YgZWxlbWVudHMgYXR0YWNoZWQgdG8gdGhpcyBmb3JtICovXG4gIGNvbnN0IGVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50KTtcblxuICAvKiogU29tZSBmb3JtcyB3b24ndCBjb250YWluIGZvcm0gYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudHMgKi9cbiAgaWYgKGVsZW1lbnRzICYmIGVsZW1lbnRzLnNpemUpIHtcbiAgICAvKiogTG9vcCBvdmVyIHRoZSBlbGVtZW50cyBhbmQgY2FsbCBmb3JtUmVzZXRDYWxsYmFjayBpZiBhcHBsaWNhYmxlICovXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKChlbGVtZW50LmNvbnN0cnVjdG9yIGFzIGFueSkuZm9ybUFzc29jaWF0ZWQgJiYgZWxlbWVudC5mb3JtUmVzZXRDYWxsYmFjaykge1xuICAgICAgICBlbGVtZW50LmZvcm1SZXNldENhbGxiYWNrLmFwcGx5KGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGZvcm0uIFdlIHdpbGwgbmVlZCB0byBhZGQgc3VibWl0IGFuZCByZXNldCBsaXN0ZW5lcnNcbiAqIGlmIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdC4gSWYgdGhleSBkbywganVzdCBhZGQgdGhlIG5ldyByZWYgdG8gdGhlIGZvcm0uXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWYgLSBUaGUgZWxlbWVudCByZWYgdGhhdCBpbmNsdWRlcyBpbnRlcm5hbHNcbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtIC0gVGhlIGZvcm0gdGhlIHJlZiBiZWxvbmdzIHRvXG4gKiBAcGFyYW0ge0VsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBpbnRlcm5hbHMgZm9yIHJlZlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRGb3JtID0gKFxuICByZWY6IElDdXN0b21FbGVtZW50LFxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnQsXG4gIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHNcbikgPT4ge1xuICBpZiAoZm9ybSkge1xuICAgIC8qKiBUaGlzIHdpbGwgYmUgYSBXZWFrTWFwPEhUTUxGb3JtRWxlbWVudCwgU2V0PEhUTUxFbGVtZW50PiAqL1xuICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSk7XG5cbiAgICBpZiAoZm9ybUVsZW1lbnRzKSB7XG4gICAgICAvKiogSWYgZm9ybUVsZW1lbnRzIGV4aXN0cywgYWRkIHRvIGl0ICovXG4gICAgICBmb3JtRWxlbWVudHMuYWRkKHJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKiBJZiBmb3JtRWxlbWVudHMgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0IGFuZCBhZGQgdG8gaXQgKi9cbiAgICAgIGNvbnN0IGluaXRTZXQgPSBuZXcgU2V0PElDdXN0b21FbGVtZW50PigpO1xuICAgICAgaW5pdFNldC5hZGQocmVmKTtcbiAgICAgIGZvcm1FbGVtZW50c01hcC5zZXQoZm9ybSwgaW5pdFNldCk7XG5cbiAgICAgIC8qKiBBZGQgbGlzdGVuZXJzIHRvIGVtdWxhdGUgdmFsaWRhdGlvbiBhbmQgcmVzZXQgYmVoYXZpb3IgKi9cbiAgICAgIHdpcmVTdWJtaXRMb2dpYyhmb3JtKTtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCBmb3JtUmVzZXRDYWxsYmFjayk7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZm9ybUlucHV0Q2FsbGJhY2spO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmb3JtQ2hhbmdlQ2FsbGJhY2spO1xuICAgIH1cblxuICAgIGZvcm1zTWFwLnNldChmb3JtLCB7IHJlZiwgaW50ZXJuYWxzIH0pO1xuXG4gICAgLyoqIENhbGwgZm9ybUFzc29jaWF0ZWRDYWxsYmFjayBpZiBhcHBsaWNhYmxlICovXG4gICAgaWYgKHJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSAmJiByZWYuZm9ybUFzc29jaWF0ZWRDYWxsYmFjaykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlZi5mb3JtQXNzb2NpYXRlZENhbGxiYWNrLmFwcGx5KHJlZiwgW2Zvcm1dKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgICBzZXRGb3JtVmFsaWRpdHkoZm9ybSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgbG9vayBmb3IgYW4gZWxlbWVudCdzIHBhcmVudCBmb3JtXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBsb29rIGZvciBhIHBhcmVudCBmb3JtXG4gKiBAcmV0dXJuIHtIVE1MRm9ybUVsZW1lbnR8bnVsbH0gLSBUaGUgcGFyZW50IGZvcm0sIGlmIG9uZSBleGlzdHNcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbmRQYXJlbnRGb3JtID0gKGVsZW0pID0+IHtcbiAgbGV0IHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgaWYgKHBhcmVudCAmJiBwYXJlbnQudGFnTmFtZSAhPT0gJ0ZPUk0nKSB7XG4gICAgcGFyZW50ID0gZmluZFBhcmVudEZvcm0ocGFyZW50KTtcbiAgfVxuICByZXR1cm4gcGFyZW50O1xufTtcblxuLyoqXG4gKiBUaHJvdyBhbiBlcnJvciBpZiB0aGUgZWxlbWVudCByZWYgaXMgbm90IGZvcm0gYXNzb2NpYXRlZFxuICogQHBhcmFtIHJlZiB7SUN1c3RvbUVsZW1lbnR9IC0gVGhlIGVsZW1lbnQgdG8gY2hlY2sgaWYgaXQgaXMgZm9ybSBhc3NvY2lhdGVkXG4gKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSAtIFRoZSBlcnJvciBtZXNzYWdlIHRvIHRocm93XG4gKiBAcGFyYW0gRXJyb3JUeXBlIHthbnl9IC0gVGhlIGVycm9yIHR5cGUgdG8gdGhyb3csIGRlZmF1bHRzIHRvIERPTUV4Y2VwdGlvblxuICovXG5leHBvcnQgY29uc3QgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkID0gKFxuICByZWY6IElDdXN0b21FbGVtZW50LFxuICBtZXNzYWdlOiBzdHJpbmcsXG4gIEVycm9yVHlwZTogYW55ID0gRE9NRXhjZXB0aW9uXG4pOiB2b2lkID0+IHtcbiAgaWYgKCFyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3JUeXBlKG1lc3NhZ2UpO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCBmb3IgZWFjaCBIVE1MRm9ybUVsZW1lbnQuY2hlY2tWYWxpZGl0eXxyZXBvcnRWYWxpZGl0eVxuICogd2lsbCBsb29wIG92ZXIgYSBmb3JtJ3MgYWRkZWQgY29tcG9uZW50cyBhbmQgY2FsbCB0aGUgcmVzcGVjdGl2ZVxuICogbWV0aG9kIG1vZGlmeWluZyB0aGUgZGVmYXVsdCByZXR1cm4gdmFsdWUgaWYgbmVlZGVkXG4gKiBAcGFyYW0gZm9ybSB7SFRNTEZvcm1FbGVtZW50fSAtIFRoZSBmb3JtIGVsZW1lbnQgdG8gcnVuIHRoZSBtZXRob2Qgb25cbiAqIEBwYXJhbSByZXR1cm5WYWx1ZSB7Ym9vbGVhbn0gLSBUaGUgaW5pdGlhbCByZXN1bHQgb2YgdGhlIG9yaWdpbmFsIG1ldGhvZFxuICogQHBhcmFtIG1ldGhvZCB7J2NoZWNrVmFsaWRpdHknfCdyZXBvcnRWYWxpZGl0eSd9IC0gVGhlIG9yaWdpbmFsIG1ldGhvZFxuICogQHJldHVybnMge2Jvb2xlYW59IFRoZSBmb3JtJ3MgdmFsaWRpdHkgc3RhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG92ZXJyaWRlRm9ybU1ldGhvZCA9IChcbiAgZm9ybTogSFRNTEZvcm1FbGVtZW50LFxuICByZXR1cm5WYWx1ZTogYm9vbGVhbixcbiAgbWV0aG9kOiAnY2hlY2tWYWxpZGl0eScgfCAncmVwb3J0VmFsaWRpdHknXG4pOiBib29sZWFuID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGZvcm0pO1xuXG4gIC8qKiBTb21lIGZvcm1zIHdvbid0IGNvbnRhaW4gZm9ybSBhc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50cyAqL1xuICBpZiAoZWxlbWVudHMgJiYgZWxlbWVudHMuc2l6ZSkge1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQoZWxlbWVudCk7XG4gICAgICBjb25zdCB2YWxpZCA9IGludGVybmFsc1ttZXRob2RdKCk7XG4gICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIHJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufTtcblxuLyoqXG4gKiBXaWxsIHVwZ3JhZGUgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSBieSBpbml0aWFsaXppbmcgdGhlXG4gKiBpbnN0YW5jZSdzIGZvcm0gYW5kIGxhYmVscy4gVGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpc1xuICogZWl0aGVyIGNvbnN0cnVjdGVkIG9yIGFwcGVuZGVkIGZyb20gYSBEb2N1bWVudEZyYWdtZW50XG4gKiBAcGFyYW0gcmVmIHtJQ3VzdG9tRWxlbWVudH0gLSBUaGUgY3VzdG9tIGVsZW1lbnQgdG8gdXBncmFkZVxuICovXG5leHBvcnQgY29uc3QgdXBncmFkZUludGVybmFscyA9IChyZWY6IElDdXN0b21FbGVtZW50KSA9PiB7XG4gIGlmIChyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KHJlZik7XG4gICAgY29uc3QgeyBsYWJlbHMsIGZvcm0gfSA9IGludGVybmFscztcbiAgICBpbml0TGFiZWxzKHJlZiwgbGFiZWxzKTtcbiAgICBpbml0Rm9ybShyZWYsIGZvcm0sIGludGVybmFscyk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgdG8gc2VlIGlmIE11dGF0aW9uT2JzZXJ2ZXIgZXhpc3RzIGluIHRoZSBjdXJyZW50XG4gKiBleGVjdXRpb24gY29udGV4dC4gV2lsbCBsaWtlbHkgcmV0dXJuIGZhbHNlIG9uIHRoZSBzZXJ2ZXJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbXV0YXRpb25PYnNlcnZlckV4aXN0cygpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbn1cbiIsICJpbXBvcnQgeyBzZXRGb3JtVmFsaWRpdHkgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqIEVtdWxhdGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IFZhbGlkaXR5U3RhdGUgb2JqZWN0ICovXG5leHBvcnQgY2xhc3MgVmFsaWRpdHlTdGF0ZSBpbXBsZW1lbnRzIGdsb2JhbFRoaXMuVmFsaWRpdHlTdGF0ZSB7XG4gIGJhZElucHV0ID0gZmFsc2U7XG4gIGN1c3RvbUVycm9yID0gZmFsc2U7XG4gIHBhdHRlcm5NaXNtYXRjaCA9IGZhbHNlO1xuICByYW5nZU92ZXJmbG93ID0gZmFsc2U7XG4gIHJhbmdlVW5kZXJmbG93ID0gZmFsc2U7XG4gIHN0ZXBNaXNtYXRjaCA9IGZhbHNlO1xuICB0b29Mb25nID0gZmFsc2U7XG4gIHRvb1Nob3J0ID0gZmFsc2U7XG4gIHR5cGVNaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZCA9IHRydWU7XG4gIHZhbHVlTWlzc2luZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIE9iamVjdC5zZWFsKHRoaXMpO1xuICB9XG59XG5cbi8qKlxuICogUmVzZXQgYSBWYWxpZGl0eVN0YXRlIG9iamVjdCBiYWNrIHRvIHZhbGlkXG4gKiBAcGFyYW0ge1ZhbGlkaXR5U3RhdGV9IHZhbGlkaXR5T2JqZWN0IC0gVGhlIG9iamVjdCB0byBtb2RpZnlcbiAqIEByZXR1cm4ge1ZhbGlkaXR5U3RhdGV9IC0gVGhlIG1vZGlmaWVkIFZhbGlkaXR5U3RhdGVPYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IHNldFZhbGlkID0gKHZhbGlkaXR5T2JqZWN0OiBWYWxpZGl0eVN0YXRlKTogVmFsaWRpdHlTdGF0ZSA9PiB7XG4gIHZhbGlkaXR5T2JqZWN0LmJhZElucHV0ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LmN1c3RvbUVycm9yID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnBhdHRlcm5NaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC5yYW5nZU92ZXJmbG93ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnJhbmdlVW5kZXJmbG93ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnN0ZXBNaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC50b29Mb25nID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnRvb1Nob3J0ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnR5cGVNaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC52YWxpZCA9IHRydWU7XG4gIHZhbGlkaXR5T2JqZWN0LnZhbHVlTWlzc2luZyA9IGZhbHNlO1xuICByZXR1cm4gdmFsaWRpdHlPYmplY3Q7XG59O1xuXG4vKipcbiAqIFJlY29uY2lsZSBhIFZhbGlkaXR5U3RhdGUgb2JqZWN0IHdpdGggYSBuZXcgc3RhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge1ZhbGlkaXR5U3RhdGV9IC0gVGhlIGJhc2Ugb2JqZWN0IHRvIHJlY29uY2lsZSB3aXRoIG5ldyBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IC0gQSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0IHRvIG92ZXJyaWRlIHRoZSBvcmlnaW5hbFxuICogQHJldHVybiB7VmFsaWRpdHlTdGF0ZX0gLSBUaGUgdXBkYXRlZCBWYWxpZGl0eVN0YXRlIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgcmVjb25jaWxlVmFsaWRpdHkgPSAoXG4gIHZhbGlkaXR5T2JqZWN0OiBWYWxpZGl0eVN0YXRlLFxuICBuZXdTdGF0ZTogUGFydGlhbDxWYWxpZGl0eVN0YXRlPixcbiAgZm9ybTogSFRNTEZvcm1FbGVtZW50XG4pOiBWYWxpZGl0eVN0YXRlID0+IHtcbiAgdmFsaWRpdHlPYmplY3QudmFsaWQgPSBpc1ZhbGlkKG5ld1N0YXRlKTtcbiAgT2JqZWN0LmtleXMobmV3U3RhdGUpLmZvckVhY2goKGtleSkgPT4gKHZhbGlkaXR5T2JqZWN0W2tleV0gPSBuZXdTdGF0ZVtrZXldKSk7XG4gIGlmIChmb3JtKSB7XG4gICAgc2V0Rm9ybVZhbGlkaXR5KGZvcm0pO1xuICB9XG4gIHJldHVybiB2YWxpZGl0eU9iamVjdDtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0IHNob3VsZCBiZSB2YWxpZFxuICogQHBhcmFtIHtPYmplY3R9IC0gQSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSAtIFNob3VsZCB0aGUgbmV3IG9iamVjdCBiZSB2YWxpZFxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZCA9ICh2YWxpZGl0eVN0YXRlOiBQYXJ0aWFsPFZhbGlkaXR5U3RhdGU+KTogYm9vbGVhbiA9PiB7XG4gIGxldCB2YWxpZCA9IHRydWU7XG4gIGZvciAobGV0IGtleSBpbiB2YWxpZGl0eVN0YXRlKSB7XG4gICAgaWYgKGtleSAhPT0gJ3ZhbGlkJyAmJiB2YWxpZGl0eVN0YXRlW2tleV0gIT09IGZhbHNlKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsaWQ7XG59O1xuIiwgImltcG9ydCB7IElDdXN0b21FbGVtZW50IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbi8qKiBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSByZWYgZm9yIHRlaCBDdXN0b21TdGF0ZVNldCAqL1xuY29uc3QgY3VzdG9tU3RhdGVNYXAgPSBuZXcgV2Vha01hcDxDdXN0b21TdGF0ZVNldCwgSUN1c3RvbUVsZW1lbnQ+KCk7XG5cbmZ1bmN0aW9uIGFkZFN0YXRlKHJlZjogSUN1c3RvbUVsZW1lbnQsIHN0YXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gIHJlZi50b2dnbGVBdHRyaWJ1dGUoc3RhdGVOYW1lLCB0cnVlKTtcbiAgaWYgKHJlZi5wYXJ0KSB7XG4gICAgcmVmLnBhcnQuYWRkKHN0YXRlTmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ3VzdG9tU3RhdGUgPSBgLS0ke3N0cmluZ31gO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tU3RhdGVTZXQgZXh0ZW5kcyBTZXQ8Q3VzdG9tU3RhdGU+IHtcbiAgc3RhdGljIGdldCBpc1BvbHlmaWxsZWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyZWY6IElDdXN0b21FbGVtZW50KSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoIXJlZiB8fCAhcmVmLnRhZ05hbWUgfHwgcmVmLnRhZ05hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSWxsZWdhbCBjb25zdHJ1Y3RvcicpO1xuICAgIH1cblxuICAgIGN1c3RvbVN0YXRlTWFwLnNldCh0aGlzLCByZWYpO1xuICB9XG5cbiAgYWRkKHN0YXRlOiBDdXN0b21TdGF0ZSkge1xuICAgIGlmICghL14tLS8udGVzdChzdGF0ZSkgfHwgdHlwZW9mIHN0YXRlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdhZGQnIG9uICdDdXN0b21TdGF0ZVNldCc6IFRoZSBzcGVjaWZpZWQgdmFsdWUgJHtzdGF0ZX0gbXVzdCBzdGFydCB3aXRoICctLScuYFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuYWRkKHN0YXRlKTtcbiAgICBjb25zdCByZWYgPSBjdXN0b21TdGF0ZU1hcC5nZXQodGhpcyk7XG4gICAgY29uc3Qgc3RhdGVOYW1lID0gYHN0YXRlJHtzdGF0ZX1gO1xuXG4gICAgLyoqXG4gICAgICogT25seSBhZGQgdGhlIHN0YXRlIGltbWVkaWF0ZWx5IGlmIHRoZSByZWYgaXMgY29ubmVjdGVkIHRvIHRoZSBET007XG4gICAgICogb3RoZXJ3aXNlLCB3YWl0IGEgdGljayBiZWNhdXNlIHRoZSBlbGVtZW50IGlzIGxpa2VseSBiZWluZyBjb25zdHJ1Y3RlZFxuICAgICAqIGJ5IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgYW5kIHdvdWxkIHRocm93IG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBpZiAocmVmLmlzQ29ubmVjdGVkKSB7XG4gICAgICBhZGRTdGF0ZShyZWYsIHN0YXRlTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhZGRTdGF0ZShyZWYsIHN0YXRlTmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgZm9yIChsZXQgW2VudHJ5XSBvZiB0aGlzLmVudHJpZXMoKSkge1xuICAgICAgdGhpcy5kZWxldGUoZW50cnkpO1xuICAgIH1cbiAgICBzdXBlci5jbGVhcigpO1xuICB9XG5cbiAgZGVsZXRlKHN0YXRlOiBDdXN0b21TdGF0ZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLmRlbGV0ZShzdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gY3VzdG9tU3RhdGVNYXAuZ2V0KHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogT25seSB0b2dnbGUgdGhlIHN0YXRlL2F0dHIgaW1tZWRpYXRlbHkgaWYgdGhlIHJlZiBpcyBjb25uZWN0ZWQgdG8gdGhlIERPTTtcbiAgICAgKiBvdGhlcndpc2UsIHdhaXQgYSB0aWNrIGJlY2F1c2UgdGhlIGVsZW1lbnQgaXMgbGlrZWx5IGJlaW5nIGNvbnN0cnVjdGVkXG4gICAgICogYnkgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBhbmQgd291bGQgdGhyb3cgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoYHN0YXRlJHtzdGF0ZX1gLCBmYWxzZSk7XG4gICAgICBpZiAocmVmLnBhcnQpIHtcbiAgICAgICAgcmVmLnBhcnQucmVtb3ZlKGBzdGF0ZSR7c3RhdGV9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZWYudG9nZ2xlQXR0cmlidXRlKGBzdGF0ZSR7c3RhdGV9YCwgZmFsc2UpO1xuICAgICAgICBpZiAocmVmLnBhcnQpIHtcbiAgICAgICAgICByZWYucGFydC5yZW1vdmUoYHN0YXRlJHtzdGF0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwgImV4cG9ydCBjbGFzcyBIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbiBpbXBsZW1lbnRzIGdsb2JhbFRoaXMuSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24ge1xuICByZWFkb25seSAjZWxlbWVudHM7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICB0aGlzLiNlbGVtZW50cyA9IGVsZW1lbnRzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcblxuICAgICAgdGhpc1tpXSA9IGVsZW1lbnQ7XG4gICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICB0aGlzW2VsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJyldID0gZWxlbWVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgW2luZGV4OiBudW1iZXJdOiBFbGVtZW50O1xuXG4gIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy4jZWxlbWVudHMubGVuZ3RoO1xuICB9XG5cbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2VsZW1lbnRzW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgfVxuXG4gIGl0ZW0oaSk6IEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzW2ldID09IG51bGwgPyBudWxsIDogdGhpc1tpXTtcbiAgfVxuXG4gIG5hbWVkSXRlbShuYW1lKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXNbbmFtZV0gPT0gbnVsbCA/IG51bGwgOiB0aGlzW25hbWVdO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24gfSBmcm9tICcuL0hUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uLmpzJztcbmltcG9ydCB7IGZvcm1FbGVtZW50c01hcCB9IGZyb20gJy4vbWFwcy5qcyc7XG5pbXBvcnQgeyBvdmVycmlkZUZvcm1NZXRob2QgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBQYXRjaCB0aGUgSFRNTEVsZW1lbnQgcHJvdG90eXBlXG4gKlxuICogVGhpcyBmdW5jdGlvbiBwYXRjaGVzIGNoZWNrVmFsaWRpdHksIHJlcG9ydFZhbGlkaXR5IGFuZCBlbGVtZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hGb3JtUHJvdG90eXBlKCk6IHZvaWQge1xuICBjb25zdCBjaGVja1ZhbGlkaXR5ID0gSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5jaGVja1ZhbGlkaXR5O1xuICBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmNoZWNrVmFsaWRpdHkgPSBjaGVja1ZhbGlkaXR5T3ZlcnJpZGU7XG5cbiAgY29uc3QgcmVwb3J0VmFsaWRpdHkgPSBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLnJlcG9ydFZhbGlkaXR5O1xuICBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLnJlcG9ydFZhbGlkaXR5ID0gcmVwb3J0VmFsaWRpdHlPdmVycmlkZTtcblxuICBmdW5jdGlvbiBjaGVja1ZhbGlkaXR5T3ZlcnJpZGUoLi4uYXJncyk6IGJvb2xlYW4ge1xuICAgIGxldCByZXR1cm5WYWx1ZSA9IGNoZWNrVmFsaWRpdHkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgcmV0dXJuIG92ZXJyaWRlRm9ybU1ldGhvZCh0aGlzLCByZXR1cm5WYWx1ZSwgJ2NoZWNrVmFsaWRpdHknKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcG9ydFZhbGlkaXR5T3ZlcnJpZGUoLi4uYXJncyk6IGJvb2xlYW4ge1xuICAgIGxldCByZXR1cm5WYWx1ZSA9IHJlcG9ydFZhbGlkaXR5LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHJldHVybiBvdmVycmlkZUZvcm1NZXRob2QodGhpcywgcmV0dXJuVmFsdWUsICdyZXBvcnRWYWxpZGl0eScpO1xuICB9XG5cbiAgY29uc3QgeyBnZXQgfSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZSwgJ2VsZW1lbnRzJyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLCAnZWxlbWVudHMnLCB7XG4gICAgZ2V0KC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZ2V0LmNhbGwodGhpcywgLi4uYXJncyk7XG4gICAgICBjb25zdCBwb2x5ZmlsbGVkRWxlbWVudHMgPSBBcnJheS5mcm9tKGZvcm1FbGVtZW50c01hcC5nZXQodGhpcykgfHwgW10pO1xuXG4gICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gcG9seWZpbGxlZCBlbGVtZW50cywgcmV0dXJuIHRoZSBuYXRpdmUgZWxlbWVudHMgY29sbGVjdGlvblxuICAgICAgaWYgKHBvbHlmaWxsZWRFbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgICAgfVxuXG4gICAgICAvLyBNZXJnZSB0aGUgbmF0aXZlIGVsZW1lbnRzIHdpdGggdGhlIHBvbHlmaWxsZWQgZWxlbWVudHNcbiAgICAgIC8vIGFuZCBvcmRlciB0aGVtIGJ5IHRoZWlyIHBvc2l0aW9uIGluIHRoZSBET01cbiAgICAgIGNvbnN0IG9yZGVyZWRFbGVtZW50cyA9IEFycmF5LmZyb20oZWxlbWVudHMpXG4gICAgICAgIC5jb25jYXQocG9seWZpbGxlZEVsZW1lbnRzKVxuICAgICAgICAuc29ydCgoYTogRWxlbWVudCwgYjogRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKSAmIDIgPyAxIDogLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ldyBIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbihvcmRlcmVkRWxlbWVudHMpO1xuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIGNvbm5lY3RlZENhbGxiYWNrTWFwLFxuICBpbnRlcm5hbHNNYXAsXG4gIHJlZk1hcCxcbiAgcmVmVmFsdWVNYXAsXG4gIHNoYWRvd0hvc3RzTWFwLFxuICBzaGFkb3dSb290TWFwLFxuICB2YWxpZGF0aW9uQW5jaG9yTWFwLFxuICB2YWxpZGl0eU1hcCxcbiAgdmFsaWRhdGlvbk1lc3NhZ2VNYXAsXG4gIHZhbGlkaXR5VXBncmFkZU1hcCxcbn0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7XG4gIGNyZWF0ZUhpZGRlbklucHV0LFxuICBmaW5kUGFyZW50Rm9ybSxcbiAgaW5pdFJlZixcbiAgbXV0YXRpb25PYnNlcnZlckV4aXN0cyxcbiAgcmVtb3ZlSGlkZGVuSW5wdXRzLFxuICBzZXREaXNhYmxlZCxcbiAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkLFxuICB1cGdyYWRlSW50ZXJuYWxzLFxufSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IGluaXRBb20gfSBmcm9tICcuL2FvbS5qcyc7XG5pbXBvcnQgeyBWYWxpZGl0eVN0YXRlLCByZWNvbmNpbGVWYWxpZGl0eSwgc2V0VmFsaWQgfSBmcm9tICcuL1ZhbGlkaXR5U3RhdGUuanMnO1xuaW1wb3J0IHsgZGVmZXJVcGdyYWRlLCBvYnNlcnZlckNhbGxiYWNrLCBvYnNlcnZlckNvbmZpZyB9IGZyb20gJy4vbXV0YXRpb24tb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IElFbGVtZW50SW50ZXJuYWxzLCBJQ3VzdG9tRWxlbWVudCwgTGFiZWxzTGlzdCB9IGZyb20gJy4vdHlwZXMuanMnO1xuaW1wb3J0IHsgQ3VzdG9tU3RhdGVTZXQgfSBmcm9tICcuL0N1c3RvbVN0YXRlU2V0LmpzJztcbmltcG9ydCB7IHBhdGNoRm9ybVByb3RvdHlwZSB9IGZyb20gJy4vcGF0Y2gtZm9ybS1wcm90b3R5cGUuanMnO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICdsaXQtaHRtbC9pcy1zZXJ2ZXIuanMnO1xuXG5leHBvcnQgY2xhc3MgRWxlbWVudEludGVybmFscyBpbXBsZW1lbnRzIElFbGVtZW50SW50ZXJuYWxzIHtcbiAgYXJpYUF0b21pYzogc3RyaW5nO1xuICBhcmlhQXV0b0NvbXBsZXRlOiBzdHJpbmc7XG4gIGFyaWFCdXN5OiBzdHJpbmc7XG4gIGFyaWFDaGVja2VkOiBzdHJpbmc7XG4gIGFyaWFDb2xDb3VudDogc3RyaW5nO1xuICBhcmlhQ29sSW5kZXg6IHN0cmluZztcbiAgYXJpYUNvbEluZGV4VGV4dDogc3RyaW5nO1xuICBhcmlhQ29sU3Bhbjogc3RyaW5nO1xuICBhcmlhQ3VycmVudDogc3RyaW5nO1xuICBhcmlhRGlzYWJsZWQ6IHN0cmluZztcbiAgYXJpYUV4cGFuZGVkOiBzdHJpbmc7XG4gIGFyaWFIYXNQb3B1cDogc3RyaW5nO1xuICBhcmlhSGlkZGVuOiBzdHJpbmc7XG4gIGFyaWFJbnZhbGlkOiBzdHJpbmc7XG4gIGFyaWFLZXlTaG9ydGN1dHM6IHN0cmluZztcbiAgYXJpYUxhYmVsOiBzdHJpbmc7XG4gIGFyaWFMZXZlbDogc3RyaW5nO1xuICBhcmlhTGl2ZTogc3RyaW5nO1xuICBhcmlhTW9kYWw6IHN0cmluZztcbiAgYXJpYU11bHRpTGluZTogc3RyaW5nO1xuICBhcmlhTXVsdGlTZWxlY3RhYmxlOiBzdHJpbmc7XG4gIGFyaWFPcmllbnRhdGlvbjogc3RyaW5nO1xuICBhcmlhUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgYXJpYVBvc0luU2V0OiBzdHJpbmc7XG4gIGFyaWFQcmVzc2VkOiBzdHJpbmc7XG4gIGFyaWFSZWFkT25seTogc3RyaW5nO1xuICBhcmlhUmVsZXZhbnQ6IHN0cmluZztcbiAgYXJpYVJlcXVpcmVkOiBzdHJpbmc7XG4gIGFyaWFSb2xlRGVzY3JpcHRpb246IHN0cmluZztcbiAgYXJpYVJvd0NvdW50OiBzdHJpbmc7XG4gIGFyaWFSb3dJbmRleDogc3RyaW5nO1xuICBhcmlhUm93SW5kZXhUZXh0OiBzdHJpbmc7XG4gIGFyaWFSb3dTcGFuOiBzdHJpbmc7XG4gIGFyaWFTZWxlY3RlZDogc3RyaW5nO1xuICBhcmlhU2V0U2l6ZTogc3RyaW5nO1xuICBhcmlhU29ydDogc3RyaW5nO1xuICBhcmlhVmFsdWVNYXg6IHN0cmluZztcbiAgYXJpYVZhbHVlTWluOiBzdHJpbmc7XG4gIGFyaWFWYWx1ZU5vdzogc3RyaW5nO1xuICBhcmlhVmFsdWVUZXh0OiBzdHJpbmc7XG4gIHJvbGU6IHN0cmluZztcblxuICBzdGF0ZXM6IEN1c3RvbVN0YXRlU2V0O1xuXG4gIHN0YXRpYyBnZXQgaXNQb2x5ZmlsbGVkKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocmVmOiBJQ3VzdG9tRWxlbWVudCkge1xuICAgIGlmICghcmVmIHx8ICFyZWYudGFnTmFtZSB8fCByZWYudGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbGxlZ2FsIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuICAgIGNvbnN0IHJvb3ROb2RlID0gcmVmLmdldFJvb3ROb2RlKCk7XG4gICAgY29uc3QgdmFsaWRpdHkgPSBuZXcgVmFsaWRpdHlTdGF0ZSgpO1xuICAgIHRoaXMuc3RhdGVzID0gbmV3IEN1c3RvbVN0YXRlU2V0KHJlZik7XG4gICAgcmVmTWFwLnNldCh0aGlzLCByZWYpO1xuICAgIHZhbGlkaXR5TWFwLnNldCh0aGlzLCB2YWxpZGl0eSk7XG4gICAgaW50ZXJuYWxzTWFwLnNldChyZWYsIHRoaXMpO1xuICAgIGluaXRBb20ocmVmLCB0aGlzKTtcbiAgICBpbml0UmVmKHJlZiwgdGhpcyk7XG4gICAgT2JqZWN0LnNlYWwodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBJZiBhcHBlbmRlZCBmcm9tIGEgRG9jdW1lbnRGcmFnbWVudCwgd2FpdCB1bnRpbCBpdCBpcyBjb25uZWN0ZWRcbiAgICAgKiBiZWZvcmUgYXR0ZW1wdGluZyB0byB1cGdyYWRlIHRoZSBpbnRlcm5hbHMgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBpZiAocm9vdE5vZGUgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICBkZWZlclVwZ3JhZGUocm9vdE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaWxsIHJldHVybiB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGluIGEgdmFsaWQgc3RhdGVcbiAgICovXG4gIGNoZWNrVmFsaWRpdHkoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ2NoZWNrVmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICAvKiogSWYgdGhlIGVsZW1lbnQgd2lsbCBub3QgdmFsaWRhdGUsIGl0IGlzIG5lY2Vzc2FyaWx5IHZhbGlkIGJ5IGRlZmF1bHQgKi9cbiAgICBpZiAoIXRoaXMud2lsbFZhbGlkYXRlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcC5nZXQodGhpcyk7XG4gICAgaWYgKCF2YWxpZGl0eS52YWxpZCkge1xuICAgICAgY29uc3QgdmFsaWRpdHlFdmVudCA9IG5ldyBFdmVudCgnaW52YWxpZCcsIHtcbiAgICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgIGNvbXBvc2VkOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgcmVmLmRpc3BhdGNoRXZlbnQodmFsaWRpdHlFdmVudCk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZGl0eS52YWxpZDtcbiAgfVxuXG4gIC8qKiBUaGUgZm9ybSBlbGVtZW50IHRoZSBjdXN0b20gZWxlbWVudCBpcyBhc3NvY2lhdGVkIHdpdGggKi9cbiAgZ2V0IGZvcm0oKTogSFRNTEZvcm1FbGVtZW50IHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ2Zvcm0nIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGxldCBmb3JtO1xuICAgIGlmIChyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10gPT09IHRydWUpIHtcbiAgICAgIGZvcm0gPSBmaW5kUGFyZW50Rm9ybShyZWYpO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIC8qKiBBIGxpc3Qgb2YgYWxsIHJlbGF0aXZlIGZvcm0gbGFiZWxzIGZvciB0aGlzIGVsZW1lbnQgKi9cbiAgZ2V0IGxhYmVscygpOiBMYWJlbHNMaXN0IHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ2xhYmVscycgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgY29uc3QgaWQgPSByZWYuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGNvbnN0IGhvc3RSb290ID0gcmVmLmdldFJvb3ROb2RlKCkgYXMgRWxlbWVudDtcbiAgICBpZiAoaG9zdFJvb3QgJiYgaWQpIHtcbiAgICAgIHJldHVybiBob3N0Um9vdC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxMYWJlbEVsZW1lbnQ+KGBbZm9yPVwiJHtpZH1cIl1gKSBhcyB1bmtub3duIGFzIExhYmVsc0xpc3Q7XG4gICAgfVxuICAgIHJldHVybiBbXSBhcyB1bmtub3duIGFzIExhYmVsc0xpc3Q7XG4gIH1cblxuICAvKiogV2lsbCByZXBvcnQgdGhlIGVsZW1lbnRzIHZhbGlkaXR5IHN0YXRlICovXG4gIHJlcG9ydFZhbGlkaXR5KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdyZXBvcnRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIC8qKiBJZiB0aGUgZWxlbWVudCB3aWxsIG5vdCB2YWxpZGF0ZSwgaXQgaXMgdmFsaWQgYnkgZGVmYXVsdCAqL1xuICAgIGlmICghdGhpcy53aWxsVmFsaWRhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB2YWxpZCA9IHRoaXMuY2hlY2tWYWxpZGl0eSgpO1xuICAgIGNvbnN0IGFuY2hvciA9IHZhbGlkYXRpb25BbmNob3JNYXAuZ2V0KHRoaXMpO1xuICAgIGlmIChhbmNob3IgJiYgIXJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdyZXBvcnRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghdmFsaWQgJiYgYW5jaG9yKSB7XG4gICAgICByZWYuZm9jdXMoKTtcbiAgICAgIGFuY2hvci5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgZWxlbWVudCdzIHZhbHVlIHdpdGhpbiB0aGUgZm9ybSAqL1xuICBzZXRGb3JtVmFsdWUodmFsdWU6IHN0cmluZyB8IEZvcm1EYXRhIHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdzZXRGb3JtVmFsdWUnIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICByZW1vdmVIaWRkZW5JbnB1dHModGhpcyk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1EYXRhKSkge1xuICAgICAgaWYgKHJlZi5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICBjb25zdCBoaWRkZW5JbnB1dCA9IGNyZWF0ZUhpZGRlbklucHV0KHJlZiwgdGhpcyk7XG4gICAgICAgIGhpZGRlbklucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgIEFycmF5LmZyb20odmFsdWUpXG4gICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgLmZvckVhY2goKFtmb3JtRGF0YUtleSwgZm9ybURhdGFWYWx1ZV0pID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGZvcm1EYXRhVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBoaWRkZW5JbnB1dCA9IGNyZWF0ZUhpZGRlbklucHV0KHJlZiwgdGhpcyk7XG4gICAgICAgICAgICBoaWRkZW5JbnB1dC5uYW1lID0gZm9ybURhdGFLZXk7XG4gICAgICAgICAgICBoaWRkZW5JbnB1dC52YWx1ZSA9IGZvcm1EYXRhVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVmVmFsdWVNYXAuc2V0KHJlZiwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGVsZW1lbnQncyB2YWxpZGl0eS4gVGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgcGFydGlhbCBWYWxpZGl0eVN0YXRlIG9iamVjdFxuICAgKiByZWZsZWN0aW5nIHRoZSBjaGFuZ2VzIHRvIGJlIG1hZGUgdG8gdGhlIGVsZW1lbnQncyB2YWxpZGl0eS4gSWYgdGhlIGVsZW1lbnQgaXMgaW52YWxpZCxcbiAgICogdGhlIHNlY29uZCBhcmd1bWVudCBzZXRzIHRoZSBlbGVtZW50J3MgdmFsaWRhdGlvbiBtZXNzYWdlLlxuICAgKlxuICAgKiBJZiB0aGUgZmllbGQgaXMgdmFsaWQgYW5kIGEgbWVzc2FnZSBpcyBzcGVjaWZpZWQsIHRoZSBtZXRob2Qgd2lsbCB0aHJvdyBhIFR5cGVFcnJvci5cbiAgICovXG4gIHNldFZhbGlkaXR5KFxuICAgIHZhbGlkaXR5Q2hhbmdlczogUGFydGlhbDxnbG9iYWxUaGlzLlZhbGlkaXR5U3RhdGU+LFxuICAgIHZhbGlkYXRpb25NZXNzYWdlPzogc3RyaW5nLFxuICAgIGFuY2hvcj86IEhUTUxFbGVtZW50XG4gICkge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdzZXRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGlmICghdmFsaWRpdHlDaGFuZ2VzKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBcIkZhaWxlZCB0byBleGVjdXRlICdzZXRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIHZhbGlkYXRpb25BbmNob3JNYXAuc2V0KHRoaXMsIGFuY2hvcik7XG4gICAgY29uc3QgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcC5nZXQodGhpcyk7XG4gICAgY29uc3QgdmFsaWRpdHlDaGFuZ2VzT2JqOiBQYXJ0aWFsPFZhbGlkaXR5U3RhdGU+ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsaWRpdHlDaGFuZ2VzKSB7XG4gICAgICB2YWxpZGl0eUNoYW5nZXNPYmpba2V5XSA9IHZhbGlkaXR5Q2hhbmdlc1trZXldO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LmtleXModmFsaWRpdHlDaGFuZ2VzT2JqKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldFZhbGlkKHZhbGlkaXR5KTtcbiAgICB9XG4gICAgY29uc3QgY2hlY2sgPSB7IC4uLnZhbGlkaXR5LCAuLi52YWxpZGl0eUNoYW5nZXNPYmogfTtcbiAgICBkZWxldGUgY2hlY2sudmFsaWQ7XG4gICAgY29uc3QgeyB2YWxpZCB9ID0gcmVjb25jaWxlVmFsaWRpdHkodmFsaWRpdHksIGNoZWNrLCB0aGlzLmZvcm0pO1xuXG4gICAgaWYgKCF2YWxpZCAmJiAhdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnc2V0VmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHNlY29uZCBhcmd1bWVudCBzaG91bGQgbm90IGJlIGVtcHR5IGlmIG9uZSBvciBtb3JlIGZsYWdzIGluIHRoZSBmaXJzdCBhcmd1bWVudCBhcmUgdHJ1ZS5gXG4gICAgICApO1xuICAgIH1cbiAgICB2YWxpZGF0aW9uTWVzc2FnZU1hcC5zZXQodGhpcywgdmFsaWQgPyAnJyA6IHZhbGlkYXRpb25NZXNzYWdlKTtcblxuICAgIC8vIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgaG9zdCBlbGVtZW50IGlzIGNvbm5lY3RlZCBiZWZvcmUgYWRkaW5nIGF0dHJpYnV0ZXNcbiAgICAvLyBiZWNhdXNlIHNhZmFyaSBkb2VzbnQgYWxsb3cgZWxlbWVudHMgdG8gaGF2ZSBhdHRyaWJ1dGVzIGFkZGVkIGluIHRoZSBjb25zdHJ1Y3RvclxuICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy1pbnZhbGlkJywgIXZhbGlkKTtcbiAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy12YWxpZCcsIHZhbGlkKTtcbiAgICAgIHJlZi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIGAkeyF2YWxpZH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRpdHlVcGdyYWRlTWFwLnNldChyZWYsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzaGFkb3dSb290KCk6IFNoYWRvd1Jvb3QgfCBudWxsIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBzaGFkb3dSb290TWFwLmdldChyZWYpO1xuICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICByZXR1cm4gc2hhZG93Um9vdDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiogVGhlIGVsZW1lbnQncyB2YWxpZGF0aW9uIG1lc3NhZ2Ugc2V0IGR1cmluZyBhIGNhbGwgdG8gRWxlbWVudEludGVybmFscy5zZXRWYWxpZGl0eSAqL1xuICBnZXQgdmFsaWRhdGlvbk1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ3ZhbGlkYXRpb25NZXNzYWdlJyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICByZXR1cm4gdmFsaWRhdGlvbk1lc3NhZ2VNYXAuZ2V0KHRoaXMpO1xuICB9XG5cbiAgLyoqIFRoZSBjdXJyZW50IHZhbGlkaXR5IHN0YXRlIG9mIHRoZSBvYmplY3QgKi9cbiAgZ2V0IHZhbGlkaXR5KCk6IGdsb2JhbFRoaXMuVmFsaWRpdHlTdGF0ZSB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIHJlYWQgdGhlICd2YWxpZGl0eScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgY29uc3QgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcC5nZXQodGhpcyk7XG4gICAgcmV0dXJuIHZhbGlkaXR5O1xuICB9XG5cbiAgLyoqIElmIHRydWUgdGhlIGVsZW1lbnQgd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhIGZvcm0ncyBjb25zdHJhaW50IHZhbGlkYXRpb24uICovXG4gIGdldCB3aWxsVmFsaWRhdGUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIHJlYWQgdGhlICd3aWxsVmFsaWRhdGUnIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGlmIChyZWYuZGlzYWJsZWQgfHwgcmVmLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fCByZWYuaGFzQXR0cmlidXRlKCdyZWFkb25seScpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8vIC0tLSBEaXNhYmxpbmcgdGhpcyB0eXBlIGRlY2xhcmF0aW9uIHRvIGF2b2lkIGNvbmZsaWN0IHdpdGggZXh0ZXJuYWwgZWxlbWVudC1pbnRlcm5hbHMtcG9seWZpbGwgdHlwZXMgLS0tXG4vLyBkZWNsYXJlIGdsb2JhbCB7XG4vLyAgIGludGVyZmFjZSBDdXN0b21FbGVtZW50Q29uc3RydWN0b3Ige1xuLy8gICAgIGZvcm1Bc3NvY2lhdGVkPzogYm9vbGVhbjtcbi8vICAgfVxuXG4vLyAgIGludGVyZmFjZSBXaW5kb3cge1xuLy8gICAgIEVsZW1lbnRJbnRlcm5hbHM6IHR5cGVvZiBFbGVtZW50SW50ZXJuYWxzO1xuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnRJbnRlcm5hbHNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gIGlmIChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICF3aW5kb3cuRWxlbWVudEludGVybmFscyB8fFxuICAgICFIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNsYXNzIEVsZW1lbnRJbnRlcm5hbHNGZWF0dXJlRGV0ZWN0aW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLmludGVybmFscyA9IHRoaXMuYXR0YWNoSW50ZXJuYWxzKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHJhbmRvbU5hbWUgPSBgZWxlbWVudC1pbnRlcm5hbHMtZmVhdHVyZS1kZXRlY3Rpb24tJHtNYXRoLnJhbmRvbSgpXG4gICAgLnRvU3RyaW5nKDM2KVxuICAgIC5yZXBsYWNlKC9bXmEtel0rL2csICcnKX1gO1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUocmFuZG9tTmFtZSwgRWxlbWVudEludGVybmFsc0ZlYXR1cmVEZXRlY3Rpb24pO1xuICBjb25zdCBmZWF0dXJlRGV0ZWN0aW9uRWxlbWVudCA9IG5ldyBFbGVtZW50SW50ZXJuYWxzRmVhdHVyZURldGVjdGlvbigpO1xuICByZXR1cm4gW1xuICAgICdzaGFkb3dSb290JyxcbiAgICAnZm9ybScsXG4gICAgJ3dpbGxWYWxpZGF0ZScsXG4gICAgJ3ZhbGlkaXR5JyxcbiAgICAndmFsaWRhdGlvbk1lc3NhZ2UnLFxuICAgICdsYWJlbHMnLFxuICAgICdzZXRGb3JtVmFsdWUnLFxuICAgICdzZXRWYWxpZGl0eScsXG4gICAgJ2NoZWNrVmFsaWRpdHknLFxuICAgICdyZXBvcnRWYWxpZGl0eScsXG4gIF0uZXZlcnkoKHByb3ApID0+IHByb3AgaW4gZmVhdHVyZURldGVjdGlvbkVsZW1lbnQuaW50ZXJuYWxzKTtcbn1cblxuLy8gT25seSBpbmNsdWRlcyB0aGlzIHBvbHlmaWxsIGlmIHdlIGFyZSBpbiBhIGplc3QgcnVubmVyIG9yIG5vdCBpbiBTU1JcbmlmIChcbiAgIWlzU2VydmVyIHx8XG4gICgocHJvY2VzcyBhcyBhbnkpPy5lbnYuSkVTVF9XT1JLRVJfSUQgIT09IHVuZGVmaW5lZCAmJiAocHJvY2VzcyBhcyBhbnkpPy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0Jylcbikge1xuICBpZiAoIWlzRWxlbWVudEludGVybmFsc1N1cHBvcnRlZCgpKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvKiogQHRzLWV4cGVjdC1lcnJvcjogd2UgbmVlZCB0byByZXBsYWNlIHRoZSBkZWZhdWx0IEVsZW1lbnRJbnRlcm5hbHMgKi9cbiAgICAgIHdpbmRvdy5FbGVtZW50SW50ZXJuYWxzID0gRWxlbWVudEludGVybmFscztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGRlZmluZSA9IEN1c3RvbUVsZW1lbnRSZWdpc3RyeS5wcm90b3R5cGUuZGVmaW5lO1xuICAgICAgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5kZWZpbmUgPSBmdW5jdGlvbiAobmFtZSwgY29uc3RydWN0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9yLmZvcm1Bc3NvY2lhdGVkKSB7XG4gICAgICAgICAgY29uc3QgY29ubmVjdGVkQ2FsbGJhY2sgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2s7XG4gICAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFjb25uZWN0ZWRDYWxsYmFja01hcC5oYXModGhpcykpIHtcbiAgICAgICAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2tNYXAuc2V0KHRoaXMsIHRydWUpO1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgIHNldERpc2FibGVkKHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25uZWN0ZWRDYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbm5lY3RlZENhbGxiYWNrLmFwcGx5KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWx3YXlzIHVwZ3JhZGVJbnRlcm5hbHMgaW4gY29ubmVjdGVkQ2FsbGJhY2sgaW5zdGVhZCBvZiBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgdXBncmFkZUludGVybmFscyh0aGlzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmaW5lLmNhbGwodGhpcywgbmFtZSwgY29uc3RydWN0b3IsIG9wdGlvbnMpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGEgY3VzdG9tIGVsZW1lbnQuIENhbGxpbmcgdGhpcyBtZXRob2RcbiAgICAgKiBvbiBhIGJ1aWx0LWluIGVsZW1lbnQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgICAgKi9cbiAgICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEludGVybmFscyA9IGZ1bmN0aW9uICgpOiBJRWxlbWVudEludGVybmFscyB7XG4gICAgICAgIGlmICghdGhpcy50YWdOYW1lKSB7XG4gICAgICAgICAgLyoqIFRoaXMgaGFwcGVucyBpbiB0aGUgTGl0U1NSIGVudmlyb25tZW50LiBIZXJlIHdlIGNhbiBnZW5lcmFsbHkgaWdub3JlIGludGVybmFscyBmb3Igbm93ICovXG4gICAgICAgICAgcmV0dXJuIHt9IGFzIG9iamVjdCBhcyBJRWxlbWVudEludGVybmFscztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhZ05hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnYXR0YWNoSW50ZXJuYWxzJyBvbiAnSFRNTEVsZW1lbnQnOiBVbmFibGUgdG8gYXR0YWNoIEVsZW1lbnRJbnRlcm5hbHMgdG8gbm9uLWN1c3RvbSBlbGVtZW50cy5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW50ZXJuYWxzTWFwLmhhcyh0aGlzKSkge1xuICAgICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgICAgICBgRE9NRXhjZXB0aW9uOiBGYWlsZWQgdG8gZXhlY3V0ZSAnYXR0YWNoSW50ZXJuYWxzJyBvbiAnSFRNTEVsZW1lbnQnOiBFbGVtZW50SW50ZXJuYWxzIGZvciB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgd2FzIGFscmVhZHkgYXR0YWNoZWQuYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50SW50ZXJuYWxzKHRoaXMpIGFzIElFbGVtZW50SW50ZXJuYWxzO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8taW5uZXItZGVjbGFyYXRpb25zXG4gICAgICBmdW5jdGlvbiBhdHRhY2hTaGFkb3dPYnNlcnZlciguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBhdHRhY2hTaGFkb3cuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIHNoYWRvd1Jvb3RNYXAuc2V0KHRoaXMsIHNoYWRvd1Jvb3QpO1xuXG4gICAgICAgIGlmIChtdXRhdGlvbk9ic2VydmVyRXhpc3RzKCkpIHtcbiAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spO1xuICAgICAgICAgIGlmICh3aW5kb3cuU2hhZHlET00pIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGhpcywgb2JzZXJ2ZXJDb25maWcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNoYWRvd1Jvb3QsIG9ic2VydmVyQ29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2hhZG93SG9zdHNNYXAuc2V0KHRoaXMsIG9ic2VydmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hhZG93Um9vdDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYXR0YWNoU2hhZG93ID0gRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93O1xuICAgICAgRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93ID0gYXR0YWNoU2hhZG93T2JzZXJ2ZXI7XG4gICAgfVxuXG4gICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKSkge1xuICAgICAgY29uc3QgZG9jdW1lbnRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spO1xuICAgICAgZG9jdW1lbnRPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgb2JzZXJ2ZXJDb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEtlZXBzIHRoZSBwb2x5ZmlsbCBmcm9tIHRocm93aW5nIGluIGVudmlyb25tZW50cyB3aGVyZSBIVE1MRm9ybUVsZW1lbnRcbiAgICAgKiBpcyB1bmRlZmluZWQgbGlrZSBpbiBhIHNlcnZlciBlbnZpcm9ubWVudFxuICAgICAqL1xuICAgIGlmICh0eXBlb2YgSFRNTEZvcm1FbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcGF0Y2hGb3JtUHJvdG90eXBlKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3cuQ3VzdG9tU3RhdGVTZXQpIHtcbiAgICAgIHdpbmRvdy5DdXN0b21TdGF0ZVNldCA9IEN1c3RvbVN0YXRlU2V0O1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93LkN1c3RvbVN0YXRlU2V0KSB7XG4gICAgd2luZG93LkN1c3RvbVN0YXRlU2V0ID0gQ3VzdG9tU3RhdGVTZXQ7XG4gICAgY29uc3QgYXR0YWNoSW50ZXJuYWxzID0gSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEludGVybmFscztcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IGludGVybmFscyA9IGF0dGFjaEludGVybmFscy5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgICAgaW50ZXJuYWxzLnN0YXRlcyA9IG5ldyBDdXN0b21TdGF0ZVNldCh0aGlzKTtcbiAgICAgIHJldHVybiBpbnRlcm5hbHM7XG4gICAgfTtcbiAgfVxufVxuIiwgImltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50IH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMYW5nSW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIGxhbmcgdXNlZCB0byBmb3JtYXQgY29udGVudCByZW5kZXJlZCBieSB0aGlzIGVsZW1lbnRcbiAgICogQGF0dHIgbGFuZ1xuICAgKi9cbiAgbGFuZzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTGFuZ01peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBMYW5nRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIEFkanVzdHMgdGhlIGxhbmcgdXNlZCB0byBmb3JtYXQgY29udGVudCByZW5kZXJlZCBieSB0aGlzIGVsZW1lbnRcbiAgICAgKiBAYXR0ciBsYW5nXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBsYW5nOiBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIExhbmdFbGVtZW50IGFzIENvbnN0cnVjdG9yPExhbmdJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciwgTXRlRWxlbWVudCB9IGZyb20gJy4uLyc7XG5cbi8qKlxuICogU3BlY2lhbCBjbGFzcyB0aGF0IGhlbHBzIGZyYW1ld29yayB3cmFwcGVyIHN0eWxpbmcga25vdyB3aGVuIGEgd3JhcHBlciBmcmFtZXdvcmtcbiAqIGhhcyBmaW5pc2hlZCByZW5kZXJpbmcgYW5kIHRodXMgZWxlbWVudHMgY2FuIG5vdyBiZSBzaG93biB3aXRob3V0IGEgRk9VQy4gVGhpc1xuICogb2NjdXJzIGluIHRoZSBzY2VuYXJpbyB3aGVyZSBMaXQgZWxlbWVudHMgcmVnaXN0ZXIgYW5kIHJlbmRlciBiZWZvcmUgdGhlXG4gKiB3cmFwcGVyIGZyYW1ld29yayBwYXNzZXMgZWxlbWVudHMgdGhlaXIgcHJvcHMuXG4gKi9cbmV4cG9ydCBjb25zdCBXYWl0Rm9yRnJhbWV3b3JrTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIFdhaXRGb3JGcmFtZXdvcmtFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqIEBpZ25vcmUgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6ICdtdGUtZnctcmVuZGVyZWQnLCByZWZsZWN0OiB0cnVlIH0pIF9md1JlbmRlcmVkO1xuICB9XG4gIHJldHVybiBXYWl0Rm9yRnJhbWV3b3JrRWxlbWVudCBhcyBUO1xufTtcbiIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7Ym94LXNpemluZzpib3JkZXItYm94fWA7IiwgImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL3Rvb2xiYXItc2VjdGlvbi5zdHlsZXMnO1xuaW1wb3J0IHsgYmFzZVN0eWxlcywgZGVmaW5lRWxlbWVudCwgTXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG4vKipcbiAqIEBzbG90IC0gVG9vbGJhciBzZWN0aW9uIGNvbnRlbnRcbiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS10b29sYmFyLXNlY3Rpb24nKVxuZXhwb3J0IGNsYXNzIE10ZVRvb2xiYXJTZWN0aW9uIGV4dGVuZHMgTXRlRWxlbWVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbYmFzZVN0eWxlcywgc3R5bGVzXTtcblxuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGFsaWduOiAnc3RhcnQnIHwgJ2VuZCc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBzaHJpbms7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYCR7dGhpcy5pbnN0YW5jZVN0eWxlc308c2xvdD48L3Nsb3Q+YDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdtdGUtdG9vbGJhci1zZWN0aW9uJzogTXRlVG9vbGJhclNlY3Rpb247XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLXNlbGY6ZmxleC1zdGFydDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2ZsZXg6MTtmbGV4LXdyYXA6d3JhcDtnYXA6dmFyKC0tdG9vbGJhci1nYXApO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWF4LXdpZHRoOjEwMCU7bWluLWhlaWdodDpjYWxjKHZhcigtLXRvb2xiYXItbWluLWhlaWdodCkgLSB2YXIoLS10b29sYmFyLXBhZGRpbmcpKjIpO29yZGVyOjA7dGV4dC1hbGlnbjppbmhlcml0O3otaW5kZXg6MX06aG9zdChbc2hyaW5rXSl7ZmxleC1ncm93OjA7ZmxleC1zaHJpbms6MX06aG9zdChbYWxpZ249c3RhcnRdKXtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydCFpbXBvcnRhbnQ7b3JkZXI6LTEhaW1wb3J0YW50fTpob3N0KFthbGlnbj1lbmRdKXtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQhaW1wb3J0YW50O29yZGVyOjEhaW1wb3J0YW50fTpob3N0IDo6c2xvdHRlZChtdGUtdGl0bGUpe2ZvbnQtZmFtaWx5OnZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtmb250LXNpemU6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtd2VpZ2h0KTtsaW5lLWhlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTEtbGluZS1oZWlnaHQpO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt3aGl0ZS1zcGFjaW5nOm5vd3JhcDtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC13ZWlnaHQtYm9sZCk7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmctYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDp2YXIoLS10b29sYmFyLWdhcCk7cGFkZGluZy10b3A6MDt3aGl0ZS1zcGFjZTpub3dyYXA7ei1pbmRleDoxfTpob3N0OjpzbG90dGVkKG10ZS1idXR0b24pe2NvbG9yOmluaGVyaXR9YDsiLCAiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBiYXNlU3R5bGVzLCBkZWZpbmVFbGVtZW50LCBNdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL3Rvb2xiYXItcm93LnN0eWxlcyc7XG5cbi8qKlxuICogQHNsb3QgLSBEZWZhdWx0IHNsb3R0ZWQgY29udGVudFxuICovXG5AZGVmaW5lRWxlbWVudCgnbXRlLXRvb2xiYXItcm93JylcbmV4cG9ydCBjbGFzcyBNdGVUb29sYmFyUm93IGV4dGVuZHMgTXRlRWxlbWVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbYmFzZVN0eWxlcywgc3R5bGVzXTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgJHt0aGlzLmluc3RhbmNlU3R5bGVzfTxzbG90Pjwvc2xvdD5gO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ210ZS10b29sYmFyLXJvdyc6IE10ZVRvb2xiYXJSb3c7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7YWxpZ24taXRlbXM6Y2VudGVyO2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtnYXA6dmFyKC0tdG9vbGJhci1wYWRkaW5nKTtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDttYXgtaGVpZ2h0OmF1dG87bWluLWhlaWdodDpjYWxjKHZhcigtLXRvb2xiYXItbWluLWhlaWdodCkgLSB2YXIoLS10b29sYmFyLXBhZGRpbmcpKjIpO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9Omhvc3QgOjpzbG90dGVkKG10ZS10aXRsZSl7Zm9udC1mYW1pbHk6dmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2ZvbnQtc2l6ZTp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTEtZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS1tdGUtZm9udC1zZXQtYm9keTEtZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1ib2R5MS1saW5lLWhlaWdodCk7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3doaXRlLXNwYWNpbmc6bm93cmFwO2ZvbnQtd2VpZ2h0OnZhcigtLW10ZS1mb250LXdlaWdodC1ib2xkKTtvdmVyZmxvdzpoaWRkZW47cGFkZGluZy1ib3R0b206MDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OnZhcigtLXRvb2xiYXItZ2FwKTtwYWRkaW5nLXRvcDowO3doaXRlLXNwYWNlOm5vd3JhcDt6LWluZGV4OjF9Omhvc3QgOjpzbG90dGVkKG10ZS10b29sYmFyLXNlY3Rpb246bm90KDpsYXN0LW9mLXR5cGUpOm5vdCg6Zmlyc3Qtb2YtdHlwZSkpe2p1c3RpZnktY29udGVudDpjZW50ZXI7b3JkZXI6MH06aG9zdCA6OnNsb3R0ZWQobXRlLXRvb2xiYXItc2VjdGlvbjpsYXN0LW9mLXR5cGUpe2p1c3RpZnktY29udGVudDpmbGV4LWVuZDtvcmRlcjoxfTpob3N0IDo6c2xvdHRlZChtdGUtdG9vbGJhci1zZWN0aW9uOmZpcnN0LW9mLXR5cGUpe2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O29yZGVyOi0xfWA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNDQSxzQkFBeUI7QUFFbEIsU0FBUyxlQUFrQixTQUErQjtBQUMvRCxhQUFPLDBCQUFTO0FBQUEsSUFDZCxHQUFHO0FBQUEsSUFDSCxVQUFVO0FBQUEsRUFDWixDQUFRO0FBQ1Y7OztBQ09PLElBQU0sZUFBZSxDQUMxQixlQUNHO0FBQUEsRUFDSCxNQUFNLHVCQUF1QixXQUFXO0FBQUEsRUFNeEM7QUFEcUM7QUFBQSxJQUFsQyxlQUFlLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFBQSxLQUw3QixlQUsrQjtBQUVyQyxTQUFPO0FBQ1Q7OztBQ3pCQSxJQUFBQSxlQUFxQjtBQUNyQixJQUFBQyxzQkFBZ0Q7OztBQ0ZoRCxpQkFBb0I7QUFBYSxJQUFNLFNBQVM7OztBQ0NoRCx3QkFBZ0M7QUFDaEMsSUFBQUMsY0FBMkI7OztBQ0kz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UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsVUFBVTtNQUNSLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7SUFDQSxXQUFXO01BQ1QsV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsT0FBTztNQUNMLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsU0FBUztNQUNQLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7SUFDQSxnQkFBZ0I7TUFDZCxXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7RUFDRjtFQUNBLE1BQU07SUFDSixRQUFRO01BQ04sV0FBVztRQUNULFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLGFBQWE7UUFDWCxXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxZQUFZO1FBQ1YsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsVUFBVTtRQUNSLFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtJQUNGO0lBQ0EsVUFBVTtNQUNSLFdBQVc7UUFDVCxXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxhQUFhO1FBQ1gsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsWUFBWTtRQUNWLFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLFdBQVc7UUFDVCxXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsVUFBVTtRQUNSLFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFD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SUFDVCxTQUFTO01BQ1AsV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsUUFBUTtNQUNOLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLFFBQVE7TUFDTixXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7SUFDQSxRQUFRO01BQ04sV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsVUFBVTtNQUNSLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7SUFDQSxXQUFXO01BQ1QsV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsT0FBTztNQUNMLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsU0FBUztNQUNQLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7SUFDQSxnQkFBZ0I7TUFDZCxXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7RUFDRjtFQUNBLE1BQU07SUFDSixRQUFRO01BQ04sV0FBVztRQUNULFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLGFBQWE7UUFD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WTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxPQUFPO1FBQ0wsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsU0FBUztRQUNQLFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLFFBQVE7UUFDTixXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxRQUFRO1FBQ04sV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsT0FBTztRQUNMLFdBQVc7VUFD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Q0Y7RUFDQSxXQUFXO0lBQ1QsU0FBUztNQUNQLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxRQUFRO01BQ04sV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFFBQVE7TUFDTixXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsUUFBUTtNQUNOLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsV0FBVztNQUNULFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxPQUFPO01BQ0wsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsVUFBVTtNQUNSLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxTQUFTO01BQ1AsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsZ0JBQWdCO01BQ2QsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtFQUNGO0VBQ0EsTUFBTTtJQUNKLFFBQVE7TUFDTixXQUFXO1FBQ1QsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLGFBQWE7UUFDWCxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsWUFBWTtRQUNWLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsVUFBVTtNQUNSLFdBQVc7UUFDVCxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsYUFBYTtRQUNYLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxZQUFZO1FBQ1YsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsT0FBTztNQUNMLE9BQU87UUFDTCxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsT0FBTztRQUNMLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxPQUFPO1FBQ0wsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7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LGFBQWE7TUFDWDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsaUJBQWlCO01BQ2Y7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFNBQVM7TUFDUDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsU0FBUztNQUNQO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7RUFDRjtFQUNBLFdBQVc7SUFDVCxTQUFTO01BQ1AsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFFBQVE7TUFDTixVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsUUFBUTtNQUNOLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxRQUFRO01BQ04sVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsVUFBVTtNQUNSLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxXQUFXO01BQ1QsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLE9BQU87TUFDTCxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsVUFBVTtNQUNSLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFNBQVM7TUFDUCxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsVUFBVTtNQUNSLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxnQkFBZ0I7TUFDZCxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0VBQ0Y7RUFDQSxNQUFNO0lBQ0osUUFBUTtNQUNOLFdBQVc7UUFDVCxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsYUFBYTtRQUNYLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxZQUFZO1FBQ1YsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxhQUFhO1FBQ1gsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFlBQVk7UUFDVixVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxPQUFPO01BQ0wsT0FBTztRQUNMLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxPQUFPO1FBQ0wsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLE9BQU87UUFDTCxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7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QWMscUJBQXFCO0FBQUEsR0FDdkI7OztBRVRiLElBQUFDLGVBQXFCOzs7QUNBckIsSUFBQUMsZUFBb0I7QUFBYSxJQUFNQyxXQUFTOzs7QURRekMsSUFBTSxnQkFBTixjQUE0QixXQUFXO0FBQUEsRUFHNUMsU0FBUztBQUNQLFdBQU8sb0JBQU8sS0FBSyxjQUFjO0FBQUEsRUFDbkM7QUFDRjtBQU5hLGNBQ0osU0FBUyxDQUFDQyxTQUFZQSxRQUFNO0FBRHhCLGdCQUFOO0FBQUEsRUFETixjQUFjLGlCQUFpQjtBQUFBLEdBQ25COyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAiYWNjIiwgInByb3AiLCAidmFsdWUiLCAic3R5bGVzIiwgImRlcCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgIm9ic2VydmVyIiwgImUiLCAiY3NzVmFyIiwgIm9ic2VydmVyIiwgInBvcnRhbENvbnRyb2xsZXIiLCAiZWxlbWVudCIsICJzY3JvbGxYIiwgInNjcm9sbFkiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAicHJlc2V0IiwgIm9wdGlvbnMiLCAiaW1wb3J0X2NvbnRleHQiLCAiY29udGV4dCIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9pZl9kZWZpbmVkIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2NsYXNzX21hcCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgIm5vZGUiLCAib2JzZXJ2ZXIiLCAic3RhdGUiLCAiaW1wb3J0X2lzX3NlcnZlciIsICJvYnNlcnZlciIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgInN0eWxlcyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgInN0eWxlcyIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgInN0eWxlcyJdCn0K
