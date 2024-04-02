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

// src/atomic/tooltip/index.ts
var tooltip_exports = {};
__export(tooltip_exports, {
  MteTooltip: () => MteTooltip
});
module.exports = __toCommonJS(tooltip_exports);

// src/atomic/tooltip/tooltip.element.ts
var import_dom = require("@floating-ui/dom");

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

// src/atomic/tooltip/tooltip.element.ts
var import_lit15 = require("lit");
var import_decorators19 = require("lit/decorators.js");

// src/atomic/tooltip/tooltip.styles.ts
var import_lit = require("lit");
var styles = import_lit.css`:host{--color:var(--mte-light);--background:var(--mte-dark);--z-index:var(--mte-z-index-20);--radius:var(--mte-border-radius-xl);--padding-x:var(--mte-space-md);--padding-y:var(--mte-space-sm);pointer-events:auto}.tooltip{font-family:var(--mte-font-family-sans);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;border-radius:var(--radius);color:var(--color);display:none;font-size:var(--mte-font-set-caption-font-size);font-weight:var(--mte-font-set-caption-font-weight);line-height:var(--mte-font-set-caption-line-height);max-width:250px;opacity:0;padding:var(--padding-y) var(--padding-x);position:fixed;text-decoration:inherit;text-overflow:ellipsis;text-transform:inherit;z-index:var(--z-index)}.arrow,.tooltip{background:var(--background)}.arrow{height:10px;position:absolute;transform:rotate(45deg);width:10px}`;

// src/core/base-classes/mte.element.ts
var import_decorators = require("lit/decorators.js");
var import_lit2 = require("lit");

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
var import_lit4 = require("lit");
var styles2 = import_lit4.css`:host([density=compact]){--mte-space-xxs:var(--mte-space-compact-xxs);--mte-space-xs:var(--mte-space-compact-xs);--mte-space-sm:var(--mte-space-compact-sm);--mte-space-md:var(--mte-space-compact-md);--mte-space-lg:var(--mte-space-compact-lg);--mte-space-xl:var(--mte-space-compact-xl);--mte-space-xxl:var(--mte-space-compact-xxl);--mte-space-xxxl:var(--mte-space-compact-xxxl)}:host([density=comfy]){--mte-space-xxs:var(--mte-space-comfy-xxs);--mte-space-xs:var(--mte-space-comfy-xs);--mte-space-sm:var(--mte-space-comfy-sm);--mte-space-md:var(--mte-space-comfy-md);--mte-space-lg:var(--mte-space-comfy-lg);--mte-space-xl:var(--mte-space-comfy-xl);--mte-space-xxl:var(--mte-space-comfy-xxl);--mte-space-xxxl:var(--mte-space-comfy-xxxl)}:host([density=roomy]){--mte-space-xxs:var(--mte-space-roomy-xxs);--mte-space-xs:var(--mte-space-roomy-xs);--mte-space-sm:var(--mte-space-roomy-sm);--mte-space-md:var(--mte-space-roomy-md);--mte-space-lg:var(--mte-space-roomy-lg);--mte-space-xl:var(--mte-space-roomy-xl);--mte-space-xxl:var(--mte-space-roomy-xxl);--mte-space-xxxl:var(--mte-space-roomy-xxxl)}`;

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
var import_lit5 = require("lit");
var styles3 = import_lit5.css`:host([inverse]:not([withoutInverse])){--mte-surface-1:var(--mte-surface-inverse);--mte-surface-1-rgb:var(--mte-surface-inverse-rgb);--mte-surface-2:var(--mte-surface-inverse);--mte-surface-2-rgb:var(--mte-surface-inverse-rgb);--mte-surface-3:var(--mte-surface-inverse);--mte-surface-3-rgb:var(--mte-surface-inverse-rgb);--mte-surface-4:var(--mte-surface-inverse);--mte-surface-4-rgb:var(--mte-surface-inverse-rgb);--mte-ink-1:var(--mte-white);--mte-ink-1-rgb:var(--mte-white-rgb);--mte-ink-2:var(--mte-white);--mte-ink-2-rgb:var(--mte-white-rgb);--mte-ink-3:var(--mte-white);--mte-ink-3-rgb:var(--mte-white-rgb);--mte-ink-4:var(--mte-black);--mte-ink-4-rgb:var(--mte-black-rgb);--mte-ink-5:var(--mte-black);--mte-ink-5-rgb:var(--mte-black-rgb);--mte-border-1:var(--mte-border-inverse);--mte-border-1-rgb:var(--mte-border-inverse-rgb);--mte-border-2:var(--mte-border-inverse);--mte-border-2-rgb:var(--mte-border-inverse-rgb);--mte-border-3:var(--mte-border-inverse);--mte-border-3-rgb:var(--mte-border-inverse-rgb);--mte-disabled-1:var(--mte-disabled-inverse-1);--mte-disabled-1-rgb:var(--mte-disabled-inverse-1-rgb);--mte-disabled-2:var(--mte-disabled-inverse-2);--mte-disabled-2-rgb:var(--mte-disabled-inverse-2);--mte-disabled-3:var(--mte-disabled-inverse-3);--mte-disabled-3-rgb:var(--mte-disabled-inverse-3-rgb);--mte-disabled-4:var(--mte-disabled-inverse-3);--mte-disabled-4-rgb:var(--mte-disabled-inverse-3-rgb);--mte-it-surface-1-default-rgb:var(--mte-it-surface-inverse-default-rgb);--mte-it-surface-1-default-a:var(--mte-it-surface-inverse-default-a);--mte-it-surface-1-hover-rgb:var(--mte-it-surface-inverse-hover-rgb);--mte-it-surface-1-hover-a:var(--mte-it-surface-inverse-hover-a);--mte-it-surface-1-active-rgb:var(--mte-it-surface-inverse-active-rgb);--mte-it-surface-1-active-a:var(--mte-it-surface-inverse-active-a);--mte-it-surface-2-default-rgb:var(--mte-it-surface-inverse-default-rgb);--mte-it-surface-2-default-a:var(--mte-it-surface-inverse-default-a);--mte-it-surface-2-hover-rgb:var(--mte-it-surface-inverse-hover-rgb);--mte-it-surface-2-hover-a:var(--mte-it-surface-inverse-hover-a);--mte-it-surface-2-active-rgb:var(--mte-it-surface-inverse-active-rgb);--mte-it-surface-2-active-a:var(--mte-it-surface-inverse-active-a);--mte-it-surface-3-default-rgb:var(--mte-it-surface-inverse-default-rgb);--mte-it-surface-3-default-a:var(--mte-it-surface-inverse-default-a);--mte-it-surface-3-hover-rgb:var(--mte-it-surface-inverse-hover-rgb);--mte-it-surface-3-hover-a:var(--mte-it-surface-inverse-hover-a);--mte-it-surface-3-active-rgb:var(--mte-it-surface-inverse-active-rgb);--mte-it-surface-3-active-a:var(--mte-it-surface-inverse-active-a);--mte-light:var(--mte-white);--mte-light-rgb:var(--mte-white-rgb);--mte-dark:var(--mte-black);--mte-dark-rgb:var(--mte-black-rgb);--button-filled-bg:var(--mte-white);--button-filled-ink:var(--mte-black);--button-filled-active-bg:var(--mte-border-inverse);--button-filled-active-ink:var(--mte-white)}`;

// src/core/mixins/tabindex.mixin.ts
var import_decorators7 = require("lit/decorators.js");

// src/core/mixins/style-parts.mixin.ts
var import_decorators8 = require("lit/decorators.js");
var StylePartsMixin = (superClass) => {
  class StylePartsElement extends superClass {
    updateInstanceStyles(changedProps) {
      super.updateInstanceStyles(changedProps);
      if (changedProps.has("sp")) {
        Object.entries(this.sp ?? {}).forEach(([part, styleMap]) => {
          const selector = selectorFactory(
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

// src/core/mixins/lang.mixin.ts
var import_decorators17 = require("lit/decorators.js");

// src/core/mixins/wait-for-fw.mixin.ts
var import_decorators18 = require("lit/decorators.js");

// src/core/styles/lit-css.ts
var import_lit13 = require("lit");

// src/core/styles/base.styles.ts
var import_lit14 = require("lit");
var styles8 = import_lit14.css`:host{box-sizing:border-box}`;

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
    this.animationDuration = config.animation.transitionDurationJs.short * 1e3;
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
    return import_lit15.html`${this.instanceStyles}<div part="tooltip" class="tooltip"><slot></slot><div part="arrow" class="arrow"></div></div>`;
  }
};
MteTooltip.styles = [styles8, styles];
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteTooltip.prototype, "id", 2);
__decorateClass([
  (0, import_decorators19.property)()
], MteTooltip.prototype, "position", 2);
__decorateClass([
  (0, import_decorators19.property)()
], MteTooltip.prototype, "placement", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Number, reflect: true })
], MteTooltip.prototype, "openDelay", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Number, reflect: true })
], MteTooltip.prototype, "closeDelay", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteTooltip.prototype, "role", 2);
__decorateClass([
  (0, import_decorators19.property)({ attribute: "aria-hidden", reflect: true })
], MteTooltip.prototype, "ariaHidden", 2);
__decorateClass([
  (0, import_decorators19.property)({ attribute: "aria-live", reflect: true })
], MteTooltip.prototype, "ariaLive", 2);
__decorateClass([
  (0, import_decorators19.property)({ reflect: true })
], MteTooltip.prototype, "triggerOn", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteTooltip.prototype, "withoutPortal", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Number })
], MteTooltip.prototype, "animationDuration", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteTooltip.prototype, "asAriaLabel", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean, reflect: true })
], MteTooltip.prototype, "withoutAutoLabel", 2);
__decorateClass([
  (0, import_decorators19.state)()
], MteTooltip.prototype, "opened", 2);
__decorateClass([
  (0, import_decorators19.state)()
], MteTooltip.prototype, "assumeLabel", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Object })
], MteTooltip.prototype, "targetElement", 2);
__decorateClass([
  (0, import_decorators19.property)()
], MteTooltip.prototype, "portalAdapter", 2);
__decorateClass([
  (0, import_decorators19.property)({ type: Boolean })
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
  (0, import_decorators19.state)()
], MteTooltip.prototype, "visible", 2);
__decorateClass([
  (0, import_decorators19.state)()
], MteTooltip.prototype, "renderedPosition", 2);
__decorateClass([
  (0, import_decorators19.query)(".tooltip")
], MteTooltip.prototype, "tooltipElem", 2);
__decorateClass([
  (0, import_decorators19.query)(".arrow")
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
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90b29sdGlwL2luZGV4LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdG9vbHRpcCIsICIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvc3JjL2dlbmVyYXRlZC9tYXBzL2NvcmUtdmFycy1nZXR0ZXItbWFwLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9zcmMvZ2VuZXJhdGVkL21hcHMvdGhlbWUtdmFycy1nZXR0ZXItbWFwLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9zcmMvZ2VuZXJhdGVkL21hcHMvY29yZS12YXJzLXNldHRlci1tYXAudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3NyYy9nZW5lcmF0ZWQvbWFwcy90aGVtZS12YXJzLXNldHRlci1tYXAudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3NyYy9nZW5lcmF0ZWQvbWFwcy9weC1saWdodC13ZWJnbC1tYXAudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3NyYy9nZW5lcmF0ZWQvbWFwcy9weC1kYXJrLXdlYmdsLW1hcC50cyIsICIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvc3JjL2NvbmZpZy50cyIsICIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvc3JjL2Z1bmN0aW9ucy9jb3JlLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9zcmMvZnVuY3Rpb25zL3RoZW1lLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9zcmMvZnVuY3Rpb25zL3R5cG9ncmFwaHkudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3NyYy9mdW5jdGlvbnMvYW5pbWF0aW9uLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9zcmMvZnVuY3Rpb25zL2VsZXZhdGlvbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Rvb2x0aXAvdG9vbHRpcC5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYmFzZS1jbGFzc2VzL210ZS5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9jc3MtaW4tanMvY3NzLWluLWpzLnByb3BlcnR5LW1hcHBlcnMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Nzcy1pbi1qcy9jc3MtaW4tanMudXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9lbnZpcm9ubWVudC51dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Zvcm0udXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9yZWFjdGl2ZS1zaWduYWwudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYmFzZS1jbGFzc2VzL2NvbnRlbnQuYmFzZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9hdHRyaWJ1dGUtY29udmVydGVyL3Jlc3BvbnNpdmUtYXR0cmlidXRlLmNvbnZlcnRlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb25zdGFudHMvaGViLWxvZ28udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc2VydmljZXMvdGhlbWUuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy9wb3J0YWwuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy9oaXN0b3J5LWFwaS5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZpY2VzL2xvY2FsaXplLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29udHJvbGxlcnMvcG9ydGFsLmNvbnRyb2xsZXIudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24vYnV0dG9uLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pY29uL2ljb24ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdG9vbGJhci90b29sYmFyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jYXJkL2NhcmQucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RyZWUvdHJlZS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGFnL3RhZy5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYmFkZ2UvYmFkZ2UucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2xpbmsvbGluay5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYWxlcnQvYWxlcnQucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2lucHV0L2lucHV0LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9kcmF3ZXIvZHJhd2VyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hc2lkZS9hc2lkZS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi1pdGVtLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9tb2RhbC9tb2RhbC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvY2hlY2tib3gvY2hlY2tib3gucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3JhZGlvL3JhZGlvLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXYvbmF2LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zd2l0Y2gvc3dpdGNoLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXRpdmUtc2VsZWN0L25hdGl2ZS1zZWxlY3QucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RleHRhcmVhL3RleHRhcmVhLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9za2VsZXRvbi9za2VsZXRvbi5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc2xpZGVyL3NsaWRlci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcmFuZ2Utc2xpZGVyL3JhbmdlLXNsaWRlci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc2VnbWVudGVkLWNvbnRyb2wvc2VnbWVudGVkLWNvbnRyb2wucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXQuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5kZWNvcmF0b3IudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXQuY29udGV4dC50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb250cm9sbGVycy9hcHBsaWVkLXByZXNldC1jb250ZXh0LmNvbnRyb2xsZXIudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvZGVjb3JhdG9ycy9vbi11cGRhdGUuZGVjb3JhdG9yLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2RlY29yYXRvcnMvZXZlbnQtZW1pdHRlci5kZWNvcmF0b3IudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvZGVjb3JhdG9ycy9kZWZpbmUtZWxlbWVudC5kZWNvcmF0b3IudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2RlbnNpdHkubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9kaXNhYmxlZC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvaW52ZXJzZS5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvaW52ZXJzZS5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3RhYmluZGV4Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9zdHlsZS1wYXJ0cy5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2J1dHRvbi5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL292ZXJsYXkubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL292ZXJsYXkubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZmllbGRzZXQubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZm9ybS1maWVsZC5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2F1dG8tYWN0aXZlLWxpbmsubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3Nsb3Qtb2JzZXJ2ZXIubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2NoZWNrYm94Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9tYXBzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9hb20udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL211dGF0aW9uLW9ic2VydmVycy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvdXRpbHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL1ZhbGlkaXR5U3RhdGUudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL0N1c3RvbVN0YXRlU2V0LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9IVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvcGF0Y2gtZm9ybS1wcm90b3R5cGUudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL2VsZW1lbnQtaW50ZXJuYWxzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9sYW5nLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy93YWl0LWZvci1mdy5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zdHlsZXMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc3R5bGVzL2Jhc2Uuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9vdmVybGF5LnV0aWxpdGllcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0ICogZnJvbSAnLi90b29sdGlwLmVsZW1lbnQnO1xuIiwgbnVsbCwgIi8qKlxuICogRG8gbm90IGVkaXQgZGlyZWN0bHlcbiAqIEdlbmVyYXRlZCBvbiBUdWUsIDAyIEFwciAyMDI0IDE4OjQ2OjUxIEdNVFxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIm9wYWNpdHlcIjoge1xuICAgIFwieHhsXCI6IFwidmFyKC0tbXRlLW9wYWNpdHkteHhsKVwiLFxuICAgIFwieGxcIjogXCJ2YXIoLS1tdGUtb3BhY2l0eS14bClcIixcbiAgICBcImxnXCI6IFwidmFyKC0tbXRlLW9wYWNpdHktbGcpXCIsXG4gICAgXCJtZFwiOiBcInZhcigtLW10ZS1vcGFjaXR5LW1kKVwiLFxuICAgIFwic21cIjogXCJ2YXIoLS1tdGUtb3BhY2l0eS1zbSlcIixcbiAgICBcInhzXCI6IFwidmFyKC0tbXRlLW9wYWNpdHkteHMpXCIsXG4gICAgXCJ4eHNcIjogXCJ2YXIoLS1tdGUtb3BhY2l0eS14eHMpXCIsXG4gICAgXCJ4eHhzXCI6IFwidmFyKC0tbXRlLW9wYWNpdHkteHh4cylcIlxuICB9LFxuICBcImJvcmRlclwiOiB7XG4gICAgXCJyYWRpdXNcIjoge1xuICAgICAgXCJub25lXCI6IFwidmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbm9uZSlcIixcbiAgICAgIFwieHNcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14cylcIixcbiAgICAgIFwic21cIjogXCJ2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1zbSlcIixcbiAgICAgIFwibWRcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZClcIixcbiAgICAgIFwibGdcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1sZylcIixcbiAgICAgIFwieGxcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14bClcIixcbiAgICAgIFwieHhsXCI6IFwidmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteHhsKVwiLFxuICAgICAgXCJmdWxsXCI6IFwidmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtZnVsbClcIlxuICAgIH0sXG4gICAgXCJ3aWR0aFwiOiB7XG4gICAgICBcIm5vbmVcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLXdpZHRoLW5vbmUpXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLXdpZHRoLWRlZmF1bHQpXCIsXG4gICAgICBcInNtXCI6IFwidmFyKC0tbXRlLWJvcmRlci13aWR0aC1zbSlcIixcbiAgICAgIFwibWRcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLXdpZHRoLW1kKVwiLFxuICAgICAgXCJsZ1wiOiBcInZhcigtLW10ZS1ib3JkZXItd2lkdGgtbGcpXCJcbiAgICB9XG4gIH0sXG4gIFwiZWxldmF0aW9uXCI6IHtcbiAgICBcImxldmVsXCI6IHtcbiAgICAgIFwiMFwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tbGV2ZWwtMClcIixcbiAgICAgIFwiMVwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tbGV2ZWwtMSlcIixcbiAgICAgIFwiMlwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tbGV2ZWwtMilcIixcbiAgICAgIFwiM1wiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tbGV2ZWwtMylcIixcbiAgICAgIFwiNFwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tbGV2ZWwtNClcIlxuICAgIH0sXG4gICAgXCJvcGFjaXR5XCI6IHtcbiAgICAgIFwiMFwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tb3BhY2l0eS0wKVwiLFxuICAgICAgXCIxXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1vcGFjaXR5LTEpXCIsXG4gICAgICBcIjJcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktMilcIixcbiAgICAgIFwiM1wiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tb3BhY2l0eS0zKVwiLFxuICAgICAgXCI0XCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1vcGFjaXR5LTQpXCJcbiAgICB9LFxuICAgIFwiejBcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLXowKVwiLFxuICAgIFwiejFcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLXoxKVwiLFxuICAgIFwiejJcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLXoyKVwiLFxuICAgIFwiejNcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLXozKVwiLFxuICAgIFwiejRcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLXo0KVwiXG4gIH0sXG4gIFwiekluZGV4XCI6IHtcbiAgICBcIjBcIjogXCJ2YXIoLS1tdGUtei1pbmRleC0wKVwiLFxuICAgIFwiMTBcIjogXCJ2YXIoLS1tdGUtei1pbmRleC0xMClcIixcbiAgICBcIjIwXCI6IFwidmFyKC0tbXRlLXotaW5kZXgtMjApXCIsXG4gICAgXCIzMFwiOiBcInZhcigtLW10ZS16LWluZGV4LTMwKVwiLFxuICAgIFwiNDBcIjogXCJ2YXIoLS1tdGUtei1pbmRleC00MClcIixcbiAgICBcIjUwXCI6IFwidmFyKC0tbXRlLXotaW5kZXgtNTApXCIsXG4gICAgXCItMVwiOiBcInZhcigtLW10ZS16LWluZGV4LTEpXCIsXG4gICAgXCJhdXRvXCI6IFwidmFyKC0tbXRlLXotaW5kZXgtYXV0bylcIlxuICB9LFxuICBcImdyaWRcIjoge1xuICAgIFwiYnJlYWtwb2ludFwiOiB7XG4gICAgICBcInhzXCI6IFwiMFwiLFxuICAgICAgXCJzbVwiOiBcIjQ4MHB4XCIsXG4gICAgICBcIm1kXCI6IFwiNzY4cHhcIixcbiAgICAgIFwibGdcIjogXCIxMDI0cHhcIixcbiAgICAgIFwieGxcIjogXCIxMjgwcHhcIixcbiAgICAgIFwieHhsXCI6IFwiMTUzNnB4XCJcbiAgICB9LFxuICAgIFwiY29udGFpbmVyTWF4V2lkdGhcIjoge1xuICAgICAgXCJzbVwiOiBcIjc2OHB4XCIsXG4gICAgICBcIm1kXCI6IFwiMTAyNHB4XCIsXG4gICAgICBcImxnXCI6IFwiMTI4MHB4XCIsXG4gICAgICBcInhsXCI6IFwiMTQ0MHB4XCIsXG4gICAgICBcInh4bFwiOiBcIjE0NDBweFwiXG4gICAgfVxuICB9LFxuICBcInNpemVcIjoge1xuICAgIFwic2NhbGVcIjoge1xuICAgICAgXCJzbVwiOiBcInZhcigtLW10ZS1zaXplLXNjYWxlLXNtKVwiLFxuICAgICAgXCJtZFwiOiBcInZhcigtLW10ZS1zaXplLXNjYWxlLW1kKVwiLFxuICAgICAgXCJsZ1wiOiBcInZhcigtLW10ZS1zaXplLXNjYWxlLWxnKVwiXG4gICAgfSxcbiAgICBcImRlbnNpdGllc1wiOiBbXG4gICAgICBcImNvbXBhY3RcIixcbiAgICAgIFwiY29tZnlcIixcbiAgICAgIFwicm9vbXlcIlxuICAgIF1cbiAgfSxcbiAgXCJzcGFjZVwiOiB7XG4gICAgXCJub25lXCI6IFwidmFyKC0tbXRlLXNwYWNlLW5vbmUpXCIsXG4gICAgXCJ4eHNcIjogXCJ2YXIoLS1tdGUtc3BhY2UteHhzKVwiLFxuICAgIFwieHNcIjogXCJ2YXIoLS1tdGUtc3BhY2UteHMpXCIsXG4gICAgXCJzbVwiOiBcInZhcigtLW10ZS1zcGFjZS1zbSlcIixcbiAgICBcIm1kXCI6IFwidmFyKC0tbXRlLXNwYWNlLW1kKVwiLFxuICAgIFwibGdcIjogXCJ2YXIoLS1tdGUtc3BhY2UtbGcpXCIsXG4gICAgXCJ4bFwiOiBcInZhcigtLW10ZS1zcGFjZS14bClcIixcbiAgICBcInh4bFwiOiBcInZhcigtLW10ZS1zcGFjZS14eGwpXCIsXG4gICAgXCJ4eHhsXCI6IFwidmFyKC0tbXRlLXNwYWNlLXh4eGwpXCIsXG4gICAgXCJjb21wYWN0XCI6IHtcbiAgICAgIFwibm9uZVwiOiBcInZhcigtLW10ZS1zcGFjZS1jb21wYWN0LW5vbmUpXCIsXG4gICAgICBcInh4c1wiOiBcInZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXh4cylcIixcbiAgICAgIFwieHNcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14cylcIixcbiAgICAgIFwic21cIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1zbSlcIixcbiAgICAgIFwibWRcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1tZClcIixcbiAgICAgIFwibGdcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1sZylcIixcbiAgICAgIFwieGxcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14bClcIixcbiAgICAgIFwieHhsXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHhsKVwiLFxuICAgICAgXCJ4eHhsXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHh4bClcIlxuICAgIH0sXG4gICAgXCJjb21meVwiOiB7XG4gICAgICBcIm5vbmVcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tZnktbm9uZSlcIixcbiAgICAgIFwieHhzXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4cylcIixcbiAgICAgIFwieHNcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tZnkteHMpXCIsXG4gICAgICBcInNtXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXNtKVwiLFxuICAgICAgXCJtZFwiOiBcInZhcigtLW10ZS1zcGFjZS1jb21meS1tZClcIixcbiAgICAgIFwibGdcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tZnktbGcpXCIsXG4gICAgICBcInhsXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXhsKVwiLFxuICAgICAgXCJ4eGxcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tZnkteHhsKVwiLFxuICAgICAgXCJ4eHhsXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4eGwpXCJcbiAgICB9LFxuICAgIFwicm9vbXlcIjoge1xuICAgICAgXCJub25lXCI6IFwidmFyKC0tbXRlLXNwYWNlLXJvb215LW5vbmUpXCIsXG4gICAgICBcInh4c1wiOiBcInZhcigtLW10ZS1zcGFjZS1yb29teS14eHMpXCIsXG4gICAgICBcInhzXCI6IFwidmFyKC0tbXRlLXNwYWNlLXJvb215LXhzKVwiLFxuICAgICAgXCJzbVwiOiBcInZhcigtLW10ZS1zcGFjZS1yb29teS1zbSlcIixcbiAgICAgIFwibWRcIjogXCJ2YXIoLS1tdGUtc3BhY2Utcm9vbXktbWQpXCIsXG4gICAgICBcImxnXCI6IFwidmFyKC0tbXRlLXNwYWNlLXJvb215LWxnKVwiLFxuICAgICAgXCJ4bFwiOiBcInZhcigtLW10ZS1zcGFjZS1yb29teS14bClcIixcbiAgICAgIFwieHhsXCI6IFwidmFyKC0tbXRlLXNwYWNlLXJvb215LXh4bClcIixcbiAgICAgIFwieHh4bFwiOiBcInZhcigtLW10ZS1zcGFjZS1yb29teS14eHhsKVwiXG4gICAgfVxuICB9LFxuICBcImZvbnRcIjoge1xuICAgIFwiYmFzZVwiOiBcInZhcigtLW10ZS1mb250LWJhc2UpXCIsXG4gICAgXCJmYW1pbHlcIjoge1xuICAgICAgXCJzYW5zXCI6IFwidmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNhbnMpXCIsXG4gICAgICBcInNlcmlmXCI6IFwidmFyKC0tbXRlLWZvbnQtZmFtaWx5LXNlcmlmKVwiLFxuICAgICAgXCJtb25vXCI6IFwidmFyKC0tbXRlLWZvbnQtZmFtaWx5LW1vbm8pXCJcbiAgICB9LFxuICAgIFwid2VpZ2h0XCI6IHtcbiAgICAgIFwibGlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC13ZWlnaHQtbGlnaHQpXCIsXG4gICAgICBcInJlZ3VsYXJcIjogXCJ2YXIoLS1tdGUtZm9udC13ZWlnaHQtcmVndWxhcilcIixcbiAgICAgIFwibWVkaXVtXCI6IFwidmFyKC0tbXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSlcIixcbiAgICAgIFwiYm9sZFwiOiBcInZhcigtLW10ZS1mb250LXdlaWdodC1ib2xkKVwiXG4gICAgfSxcbiAgICBcInJhdGlvXCI6IHtcbiAgICAgIFwic21cIjogMC44LFxuICAgICAgXCJtZFwiOiAxLFxuICAgICAgXCJsZ1wiOiAxLjJcbiAgICB9LFxuICAgIFwic2V0XCI6IHtcbiAgICAgIFwiaDFcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWgxLWZvbnQtc2l6ZSlcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWgxLWxpbmUtaGVpZ2h0KVwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDEtZm9udC13ZWlnaHQpXCJcbiAgICAgIH0sXG4gICAgICBcImgyXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcInZhcigtLW10ZS1mb250LXNldC1oMi1mb250LXNpemUpXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1oMi1saW5lLWhlaWdodClcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWgyLWZvbnQtd2VpZ2h0KVwiXG4gICAgICB9LFxuICAgICAgXCJoM1wiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDMtZm9udC1zaXplKVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDMtbGluZS1oZWlnaHQpXCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1oMy1mb250LXdlaWdodClcIlxuICAgICAgfSxcbiAgICAgIFwiaDRcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWg0LWZvbnQtc2l6ZSlcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWg0LWxpbmUtaGVpZ2h0KVwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDQtZm9udC13ZWlnaHQpXCJcbiAgICAgIH0sXG4gICAgICBcImg1XCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcInZhcigtLW10ZS1mb250LXNldC1oNS1mb250LXNpemUpXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1oNS1saW5lLWhlaWdodClcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWg1LWZvbnQtd2VpZ2h0KVwiXG4gICAgICB9LFxuICAgICAgXCJoNlwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDYtZm9udC1zaXplKVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDYtbGluZS1oZWlnaHQpXCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1oNi1mb250LXdlaWdodClcIlxuICAgICAgfSxcbiAgICAgIFwic3VidGl0bGVcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LXN1YnRpdGxlLWZvbnQtc2l6ZSlcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0KVwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtc3VidGl0bGUtZm9udC13ZWlnaHQpXCJcbiAgICAgIH0sXG4gICAgICBcImJvZHkxXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcInZhcigtLW10ZS1mb250LXNldC1ib2R5MS1mb250LXNpemUpXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1ib2R5MS1saW5lLWhlaWdodClcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtd2VpZ2h0KVwiXG4gICAgICB9LFxuICAgICAgXCJib2R5MlwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC1zaXplKVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItbGluZS1oZWlnaHQpXCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXdlaWdodClcIlxuICAgICAgfSxcbiAgICAgIFwiY2FwdGlvblwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXNpemUpXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWxpbmUtaGVpZ2h0KVwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXdlaWdodClcIlxuICAgICAgfSxcbiAgICAgIFwiYnV0dG9uXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcInZhcigtLW10ZS1mb250LXNldC1idXR0b24tZm9udC1zaXplKVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtYnV0dG9uLWxpbmUtaGVpZ2h0KVwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtYnV0dG9uLWZvbnQtd2VpZ2h0KVwiXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcImFuaW1hdGlvblwiOiB7XG4gICAgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjoge1xuICAgICAgXCJleHRyYVNob3J0XCI6IFwiODBtc1wiLFxuICAgICAgXCJzaG9ydGVyXCI6IFwiMTIwbXNcIixcbiAgICAgIFwic2hvcnRcIjogXCIyMDBtc1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiMzAwbXNcIixcbiAgICAgIFwibG9uZ1wiOiBcIjUwMG1zXCJcbiAgICB9LFxuICAgIFwidHJhbnNpdGlvbkR1cmF0aW9uSnNcIjoge1xuICAgICAgXCJleHRyYVNob3J0XCI6IDAuMDgsXG4gICAgICBcInNob3J0ZXJcIjogMC4xMixcbiAgICAgIFwic2hvcnRcIjogMC4yLFxuICAgICAgXCJkZWZhdWx0XCI6IDAuMyxcbiAgICAgIFwibG9uZ1wiOiAwLjVcbiAgICB9LFxuICAgIFwidGltaW5nRnVuY3Rpb25cIjoge1xuICAgICAgXCJkZWNlbGVyYXRlT3V0XCI6IFwiY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSlcIixcbiAgICAgIFwic3RhbmRhcmRcIjogXCJjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpXCIsXG4gICAgICBcImFjY2VsZXJhdGVJblwiOiBcImN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpXCIsXG4gICAgICBcInNoYXJwXCI6IFwiY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKVwiLFxuICAgICAgXCJpbk91dFwiOiBcImN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKVwiXG4gICAgfSxcbiAgICBcInRpbWluZ0Z1bmN0aW9uSnNcIjoge1xuICAgICAgXCJkZWNlbGVyYXRlT3V0XCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgMC4yLFxuICAgICAgICAxXG4gICAgICBdLFxuICAgICAgXCJzdGFuZGFyZFwiOiBbXG4gICAgICAgIDAuNCxcbiAgICAgICAgMCxcbiAgICAgICAgMC4yLFxuICAgICAgICAxXG4gICAgICBdLFxuICAgICAgXCJhY2NlbGVyYXRlSW5cIjogW1xuICAgICAgICAwLjQsXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgICAgIDFcbiAgICAgIF0sXG4gICAgICBcInNoYXJwXCI6IFtcbiAgICAgICAgMC40LFxuICAgICAgICAwLFxuICAgICAgICAwLjYsXG4gICAgICAgIDFcbiAgICAgIF0sXG4gICAgICBcImluT3V0XCI6IFtcbiAgICAgICAgMC4zNSxcbiAgICAgICAgMCxcbiAgICAgICAgMC4yNSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfVxufTsiLCAiZXhwb3J0IGRlZmF1bHQge1xuICBcImNvbG9yXCI6IHtcbiAgICBcImJsYWNrXCI6IFwidmFyKC0tbXRlLWJsYWNrKVwiLFxuICAgIFwid2hpdGVcIjogXCJ2YXIoLS1tdGUtd2hpdGUpXCIsXG4gICAgXCJsaWdodFwiOiBcInZhcigtLW10ZS1saWdodClcIixcbiAgICBcImRhcmtcIjogXCJ2YXIoLS1tdGUtZGFyaylcIixcbiAgICBcImRhcmtlclwiOiBcInZhcigtLW10ZS1kYXJrZXIpXCIsXG4gICAgXCJmb2N1c1wiOiBcInZhcigtLW10ZS1mb2N1cylcIixcbiAgICBcImZvY3VzTGlnaHRlclwiOiBcInZhcigtLW10ZS1mb2N1cy1saWdodGVyKVwiLFxuICAgIFwiZm9jdXNDb250cmFzdFwiOiBcInZhcigtLW10ZS1mb2N1cy1jb250cmFzdClcIixcbiAgICBcImdyZXkxXCI6IFwidmFyKC0tbXRlLWdyZXktMSlcIixcbiAgICBcImdyZXkyXCI6IFwidmFyKC0tbXRlLWdyZXktMilcIixcbiAgICBcImdyZXkzXCI6IFwidmFyKC0tbXRlLWdyZXktMylcIixcbiAgICBcImdyZXk0XCI6IFwidmFyKC0tbXRlLWdyZXktNClcIixcbiAgICBcImdyZXk1XCI6IFwidmFyKC0tbXRlLWdyZXktNSlcIixcbiAgICBcImdyZXk2XCI6IFwidmFyKC0tbXRlLWdyZXktNilcIixcbiAgICBcImdyZXk3XCI6IFwidmFyKC0tbXRlLWdyZXktNylcIixcbiAgICBcImdyZXk4XCI6IFwidmFyKC0tbXRlLWdyZXktOClcIixcbiAgICBcImdyZXk5XCI6IFwidmFyKC0tbXRlLWdyZXktOSlcIixcbiAgICBcImdyZXkxMFwiOiBcInZhcigtLW10ZS1ncmV5LTEwKVwiLFxuICAgIFwic3VyZmFjZTFcIjogXCJ2YXIoLS1tdGUtc3VyZmFjZS0xKVwiLFxuICAgIFwic3VyZmFjZTJcIjogXCJ2YXIoLS1tdGUtc3VyZmFjZS0yKVwiLFxuICAgIFwic3VyZmFjZTNcIjogXCJ2YXIoLS1tdGUtc3VyZmFjZS0zKVwiLFxuICAgIFwic3VyZmFjZTRcIjogXCJ2YXIoLS1tdGUtc3VyZmFjZS00KVwiLFxuICAgIFwic3VyZmFjZUludmVyc2VcIjogXCJ2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlKVwiLFxuICAgIFwiaW5rMVwiOiBcInZhcigtLW10ZS1pbmstMSlcIixcbiAgICBcImluazJcIjogXCJ2YXIoLS1tdGUtaW5rLTIpXCIsXG4gICAgXCJpbmszXCI6IFwidmFyKC0tbXRlLWluay0zKVwiLFxuICAgIFwiaW5rNFwiOiBcInZhcigtLW10ZS1pbmstNClcIixcbiAgICBcImluazVcIjogXCJ2YXIoLS1tdGUtaW5rLTUpXCIsXG4gICAgXCJpbmtJbnZlcnNlXCI6IFwidmFyKC0tbXRlLWluay1pbnZlcnNlKVwiLFxuICAgIFwiYm9yZGVyMVwiOiBcInZhcigtLW10ZS1ib3JkZXItMSlcIixcbiAgICBcImJvcmRlcjJcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLTIpXCIsXG4gICAgXCJib3JkZXIzXCI6IFwidmFyKC0tbXRlLWJvcmRlci0zKVwiLFxuICAgIFwiYm9yZGVySW52ZXJzZVwiOiBcInZhcigtLW10ZS1ib3JkZXItaW52ZXJzZSlcIixcbiAgICBcImRpc2FibGVkMVwiOiBcInZhcigtLW10ZS1kaXNhYmxlZC0xKVwiLFxuICAgIFwiZGlzYWJsZWQyXCI6IFwidmFyKC0tbXRlLWRpc2FibGVkLTIpXCIsXG4gICAgXCJkaXNhYmxlZDNcIjogXCJ2YXIoLS1tdGUtZGlzYWJsZWQtMylcIixcbiAgICBcImRpc2FibGVkNFwiOiBcInZhcigtLW10ZS1kaXNhYmxlZC00KVwiLFxuICAgIFwiZGlzYWJsZWRJbnZlcnNlMVwiOiBcInZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTEpXCIsXG4gICAgXCJkaXNhYmxlZEludmVyc2UyXCI6IFwidmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMilcIixcbiAgICBcImRpc2FibGVkSW52ZXJzZTNcIjogXCJ2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zKVwiLFxuICAgIFwicmVhZG9ubHkxXCI6IFwidmFyKC0tbXRlLXJlYWRvbmx5LTEpXCIsXG4gICAgXCJyZWFkb25seTJcIjogXCJ2YXIoLS1tdGUtcmVhZG9ubHktMilcIixcbiAgICBcInJlYWRvbmx5M1wiOiBcInZhcigtLW10ZS1yZWFkb25seS0zKVwiLFxuICAgIFwicmVhZG9ubHk0XCI6IFwidmFyKC0tbXRlLXJlYWRvbmx5LTQpXCIsXG4gICAgXCJlbGV2YXRpb25CYXNlXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1iYXNlKVwiLFxuICAgIFwiY29kZTFcIjogXCJ2YXIoLS1tdGUtY29kZS0xKVwiLFxuICAgIFwiY29kZTJcIjogXCJ2YXIoLS1tdGUtY29kZS0yKVwiXG4gIH0sXG4gIFwicGFsZXR0ZVwiOiB7XG4gICAgXCJncmVlblwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWdyZWVuLWxpZ2h0ZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtZ3JlZW4tbGlnaHRlci1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWdyZWVuLWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWdyZWVuLWxpZ2h0LWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1ncmVlbi1iYXNlKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWdyZWVuLWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWdyZWVuLWRhcmspXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtZ3JlZW4tZGFyay1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1ncmVlbi1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtZ3JlZW4tZGFya2VyLWNvbnRyYXN0KVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInRlYWxcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS10ZWFsLWxpZ2h0ZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtdGVhbC1saWdodGVyLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtdGVhbC1saWdodClcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS10ZWFsLWxpZ2h0LWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS10ZWFsLWJhc2UpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtdGVhbC1iYXNlLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS10ZWFsLWRhcmspXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtdGVhbC1kYXJrLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXRlYWwtZGFya2VyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXRlYWwtZGFya2VyLWNvbnRyYXN0KVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImN5YW5cIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1jeWFuLWxpZ2h0ZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtY3lhbi1saWdodGVyLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtY3lhbi1saWdodClcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1jeWFuLWxpZ2h0LWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1jeWFuLWJhc2UpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtY3lhbi1iYXNlLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1jeWFuLWRhcmspXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtY3lhbi1kYXJrLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWN5YW4tZGFya2VyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWN5YW4tZGFya2VyLWNvbnRyYXN0KVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImJsdWVcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1ibHVlLWxpZ2h0ZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtYmx1ZS1saWdodGVyLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtYmx1ZS1saWdodClcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1ibHVlLWxpZ2h0LWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1ibHVlLWJhc2UpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtYmx1ZS1iYXNlLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1ibHVlLWRhcmspXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtYmx1ZS1kYXJrLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWJsdWUtZGFya2VyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWJsdWUtZGFya2VyLWNvbnRyYXN0KVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInJ4Qmx1ZVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXJ4LWJsdWUtbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1yeC1ibHVlLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1yeC1ibHVlLWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXJ4LWJsdWUtbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXJ4LWJsdWUtYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1yeC1ibHVlLWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXJ4LWJsdWUtZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1yeC1ibHVlLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcngtYmx1ZS1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcngtYmx1ZS1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwicHVycGxlXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcHVycGxlLWxpZ2h0ZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcHVycGxlLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1wdXJwbGUtbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcHVycGxlLWxpZ2h0LWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1wdXJwbGUtYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1wdXJwbGUtYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcHVycGxlLWRhcmspXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcHVycGxlLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcHVycGxlLWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1wdXJwbGUtZGFya2VyLWNvbnRyYXN0KVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIm1hZ2VudGFcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1tYWdlbnRhLWxpZ2h0ZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtbWFnZW50YS1saWdodGVyLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtbWFnZW50YS1saWdodClcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1tYWdlbnRhLWxpZ2h0LWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1tYWdlbnRhLWJhc2UpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtbWFnZW50YS1iYXNlLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1tYWdlbnRhLWRhcmspXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtbWFnZW50YS1kYXJrLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLW1hZ2VudGEtZGFya2VyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLW1hZ2VudGEtZGFya2VyLWNvbnRyYXN0KVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInJlZFwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXJlZC1saWdodGVyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXJlZC1saWdodGVyLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcmVkLWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXJlZC1saWdodC1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcmVkLWJhc2UpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcmVkLWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXJlZC1kYXJrKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXJlZC1kYXJrLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXJlZC1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcmVkLWRhcmtlci1jb250cmFzdClcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJoZWJSZWRcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1oZWItcmVkLWxpZ2h0ZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtaGViLXJlZC1saWdodGVyLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtaGViLXJlZC1saWdodClcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1oZWItcmVkLWxpZ2h0LWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1oZWItcmVkLWJhc2UpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtaGViLXJlZC1iYXNlLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1oZWItcmVkLWRhcmspXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtaGViLXJlZC1kYXJrLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWhlYi1yZWQtZGFya2VyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWhlYi1yZWQtZGFya2VyLWNvbnRyYXN0KVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIm9yYW5nZVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLW9yYW5nZS1saWdodGVyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLW9yYW5nZS1saWdodGVyLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtb3JhbmdlLWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLW9yYW5nZS1saWdodC1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtb3JhbmdlLWJhc2UpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtb3JhbmdlLWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLW9yYW5nZS1kYXJrKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLW9yYW5nZS1kYXJrLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLW9yYW5nZS1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtb3JhbmdlLWRhcmtlci1jb250cmFzdClcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJhbWJlclwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWFtYmVyLWxpZ2h0ZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtYW1iZXItbGlnaHRlci1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWFtYmVyLWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWFtYmVyLWxpZ2h0LWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1hbWJlci1iYXNlKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWFtYmVyLWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWFtYmVyLWRhcmspXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtYW1iZXItZGFyay1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1hbWJlci1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtYW1iZXItZGFya2VyLWNvbnRyYXN0KVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInllbGxvd1wiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXllbGxvdy1saWdodGVyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXllbGxvdy1saWdodGVyLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUteWVsbG93LWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXllbGxvdy1saWdodC1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUteWVsbG93LWJhc2UpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUteWVsbG93LWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXllbGxvdy1kYXJrKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXllbGxvdy1kYXJrLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXllbGxvdy1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUteWVsbG93LWRhcmtlci1jb250cmFzdClcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJjb3Vwb25ZZWxsb3dcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1jb3Vwb24teWVsbG93LWxpZ2h0ZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtY291cG9uLXllbGxvdy1saWdodGVyLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtY291cG9uLXllbGxvdy1saWdodClcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1jb3Vwb24teWVsbG93LWxpZ2h0LWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1jb3Vwb24teWVsbG93LWJhc2UpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtY291cG9uLXllbGxvdy1iYXNlLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1jb3Vwb24teWVsbG93LWRhcmspXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtY291cG9uLXllbGxvdy1kYXJrLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWNvdXBvbi15ZWxsb3ctZGFya2VyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWNvdXBvbi15ZWxsb3ctZGFya2VyLWNvbnRyYXN0KVwiXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcInBnXCI6IHtcbiAgICBcImNvcmVcIjoge1xuICAgICAgXCJwcmltYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlY29uZGFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRlcnRpYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkYW5nZXJcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInN0YXR1c1wiOiB7XG4gICAgICBcInByaW1hcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzZWNvbmRhcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRlcnRpYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInN1Y2Nlc3NcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3YXJuaW5nXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGFuZ2VyXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInZpelwiOiB7XG4gICAgICBcIm9uZVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LW9uZS1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LW9uZS1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotb25lLWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LW9uZS1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotb25lLWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotb25lLWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LW9uZS1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LW9uZS1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LW9uZS1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotb25lLWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidHdvXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotdHdvLWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotdHdvLWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10d28tbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotdHdvLWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10d28tYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10d28tYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotdHdvLWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotdHdvLWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotdHdvLWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10d28tZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0aHJlZVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXRocmVlLWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotdGhyZWUtbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXRocmVlLWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LXRocmVlLWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10aHJlZS1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LXRocmVlLWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXRocmVlLWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotdGhyZWUtZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10aHJlZS1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotdGhyZWUtZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJmb3VyXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotZm91ci1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZvdXItbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZvdXItbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotZm91ci1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotZm91ci1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZvdXItYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotZm91ci1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZvdXItZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1mb3VyLWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1mb3VyLWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZml2ZVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZpdmUtbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1maXZlLWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1maXZlLWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZpdmUtbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZpdmUtYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1maXZlLWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZpdmUtZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1maXZlLWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotZml2ZS1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotZml2ZS1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNpeFwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXNpeC1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LXNpeC1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotc2l4LWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LXNpeC1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotc2l4LWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotc2l4LWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXNpeC1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LXNpeC1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXNpeC1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotc2l4LWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJzdGF0ZVRva2VuXCI6IHtcbiAgICBcInN1cmZhY2UxXCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMS1kZWZhdWx0LXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLTEtZGVmYXVsdC1hKSlcIixcbiAgICAgIFwiaG92ZXJcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTEtaG92ZXItcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtMS1ob3Zlci1hKSlcIixcbiAgICAgIFwiYWN0aXZlXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0xLWFjdGl2ZS1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS0xLWFjdGl2ZS1hKSlcIlxuICAgIH0sXG4gICAgXCJzdXJmYWNlMlwiOiB7XG4gICAgICBcImRlZmF1bHRcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWRlZmF1bHQtYSkpXCIsXG4gICAgICBcImhvdmVyXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYSkpXCIsXG4gICAgICBcImFjdGl2ZVwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYSkpXCJcbiAgICB9LFxuICAgIFwic3VyZmFjZTNcIjoge1xuICAgICAgXCJkZWZhdWx0XCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0zLWRlZmF1bHQtcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtMy1kZWZhdWx0LWEpKVwiLFxuICAgICAgXCJob3ZlclwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMy1ob3Zlci1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLWEpKVwiLFxuICAgICAgXCJhY3RpdmVcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTMtYWN0aXZlLXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLTMtYWN0aXZlLWEpKVwiXG4gICAgfSxcbiAgICBcInN1cmZhY2U0XCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtNC1kZWZhdWx0LXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLTQtZGVmYXVsdC1hKSlcIixcbiAgICAgIFwiaG92ZXJcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTQtaG92ZXItcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtNC1ob3Zlci1hKSlcIixcbiAgICAgIFwiYWN0aXZlXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS00LWFjdGl2ZS1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS00LWFjdGl2ZS1hKSlcIlxuICAgIH0sXG4gICAgXCJzdXJmYWNlSW52ZXJzZVwiOiB7XG4gICAgICBcImRlZmF1bHRcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSkpXCIsXG4gICAgICBcImhvdmVyXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItYSkpXCIsXG4gICAgICBcImFjdGl2ZVwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtYSkpXCJcbiAgICB9LFxuICAgIFwiaW5rSW52ZXJzZVwiOiB7XG4gICAgICBcImRlZmF1bHRcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1pbmstaW52ZXJzZS1kZWZhdWx0LXJnYiksIHZhcigtLW10ZS1pdC1pbmstaW52ZXJzZS1kZWZhdWx0LWEpKVwiLFxuICAgICAgXCJob3ZlclwiOiBcInJnYmEodmFyKC0tbXRlLWl0LWluay1pbnZlcnNlLWhvdmVyLXJnYiksIHZhcigtLW10ZS1pdC1pbmstaW52ZXJzZS1ob3Zlci1hKSlcIixcbiAgICAgIFwiYWN0aXZlXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtaW5rLWludmVyc2UtYWN0aXZlLXJnYiksIHZhcigtLW10ZS1pdC1pbmstaW52ZXJzZS1hY3RpdmUtYSkpXCJcbiAgICB9LFxuICAgIFwibGlua1wiOiB7XG4gICAgICBcImRlZmF1bHRcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1saW5rLWRlZmF1bHQtcmdiKSwgdmFyKC0tbXRlLWl0LWxpbmstZGVmYXVsdC1hKSlcIixcbiAgICAgIFwidmlzaXRlZFwiOiBcInJnYmEodmFyKC0tbXRlLWl0LWxpbmstdmlzaXRlZC1yZ2IpLCB2YXIoLS1tdGUtaXQtbGluay12aXNpdGVkLWEpKVwiXG4gICAgfVxuICB9XG59OyIsICIvKipcbiAqIERvIG5vdCBlZGl0IGRpcmVjdGx5XG4gKiBHZW5lcmF0ZWQgb24gVHVlLCAwMiBBcHIgMjAyNCAxODo0Njo1MSBHTVRcbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJvcGFjaXR5XCI6IHtcbiAgICBcInh4bFwiOiBcIi0tbXRlLW9wYWNpdHkteHhsXCIsXG4gICAgXCJ4bFwiOiBcIi0tbXRlLW9wYWNpdHkteGxcIixcbiAgICBcImxnXCI6IFwiLS1tdGUtb3BhY2l0eS1sZ1wiLFxuICAgIFwibWRcIjogXCItLW10ZS1vcGFjaXR5LW1kXCIsXG4gICAgXCJzbVwiOiBcIi0tbXRlLW9wYWNpdHktc21cIixcbiAgICBcInhzXCI6IFwiLS1tdGUtb3BhY2l0eS14c1wiLFxuICAgIFwieHhzXCI6IFwiLS1tdGUtb3BhY2l0eS14eHNcIixcbiAgICBcInh4eHNcIjogXCItLW10ZS1vcGFjaXR5LXh4eHNcIlxuICB9LFxuICBcImJvcmRlclwiOiB7XG4gICAgXCJyYWRpdXNcIjoge1xuICAgICAgXCJub25lXCI6IFwiLS1tdGUtYm9yZGVyLXJhZGl1cy1ub25lXCIsXG4gICAgICBcInhzXCI6IFwiLS1tdGUtYm9yZGVyLXJhZGl1cy14c1wiLFxuICAgICAgXCJzbVwiOiBcIi0tbXRlLWJvcmRlci1yYWRpdXMtc21cIixcbiAgICAgIFwibWRcIjogXCItLW10ZS1ib3JkZXItcmFkaXVzLW1kXCIsXG4gICAgICBcImxnXCI6IFwiLS1tdGUtYm9yZGVyLXJhZGl1cy1sZ1wiLFxuICAgICAgXCJ4bFwiOiBcIi0tbXRlLWJvcmRlci1yYWRpdXMteGxcIixcbiAgICAgIFwieHhsXCI6IFwiLS1tdGUtYm9yZGVyLXJhZGl1cy14eGxcIixcbiAgICAgIFwiZnVsbFwiOiBcIi0tbXRlLWJvcmRlci1yYWRpdXMtZnVsbFwiXG4gICAgfSxcbiAgICBcIndpZHRoXCI6IHtcbiAgICAgIFwibm9uZVwiOiBcIi0tbXRlLWJvcmRlci13aWR0aC1ub25lXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCItLW10ZS1ib3JkZXItd2lkdGgtZGVmYXVsdFwiLFxuICAgICAgXCJzbVwiOiBcIi0tbXRlLWJvcmRlci13aWR0aC1zbVwiLFxuICAgICAgXCJtZFwiOiBcIi0tbXRlLWJvcmRlci13aWR0aC1tZFwiLFxuICAgICAgXCJsZ1wiOiBcIi0tbXRlLWJvcmRlci13aWR0aC1sZ1wiXG4gICAgfVxuICB9LFxuICBcImVsZXZhdGlvblwiOiB7XG4gICAgXCJsZXZlbFwiOiB7XG4gICAgICBcIjBcIjogXCItLW10ZS1lbGV2YXRpb24tbGV2ZWwtMFwiLFxuICAgICAgXCIxXCI6IFwiLS1tdGUtZWxldmF0aW9uLWxldmVsLTFcIixcbiAgICAgIFwiMlwiOiBcIi0tbXRlLWVsZXZhdGlvbi1sZXZlbC0yXCIsXG4gICAgICBcIjNcIjogXCItLW10ZS1lbGV2YXRpb24tbGV2ZWwtM1wiLFxuICAgICAgXCI0XCI6IFwiLS1tdGUtZWxldmF0aW9uLWxldmVsLTRcIlxuICAgIH0sXG4gICAgXCJvcGFjaXR5XCI6IHtcbiAgICAgIFwiMFwiOiBcIi0tbXRlLWVsZXZhdGlvbi1vcGFjaXR5LTBcIixcbiAgICAgIFwiMVwiOiBcIi0tbXRlLWVsZXZhdGlvbi1vcGFjaXR5LTFcIixcbiAgICAgIFwiMlwiOiBcIi0tbXRlLWVsZXZhdGlvbi1vcGFjaXR5LTJcIixcbiAgICAgIFwiM1wiOiBcIi0tbXRlLWVsZXZhdGlvbi1vcGFjaXR5LTNcIixcbiAgICAgIFwiNFwiOiBcIi0tbXRlLWVsZXZhdGlvbi1vcGFjaXR5LTRcIlxuICAgIH0sXG4gICAgXCJ6MFwiOiBcIi0tbXRlLWVsZXZhdGlvbi16MFwiLFxuICAgIFwiejFcIjogXCItLW10ZS1lbGV2YXRpb24tejFcIixcbiAgICBcInoyXCI6IFwiLS1tdGUtZWxldmF0aW9uLXoyXCIsXG4gICAgXCJ6M1wiOiBcIi0tbXRlLWVsZXZhdGlvbi16M1wiLFxuICAgIFwiejRcIjogXCItLW10ZS1lbGV2YXRpb24tejRcIlxuICB9LFxuICBcInpJbmRleFwiOiB7XG4gICAgXCIwXCI6IFwiLS1tdGUtei1pbmRleC0wXCIsXG4gICAgXCIxMFwiOiBcIi0tbXRlLXotaW5kZXgtMTBcIixcbiAgICBcIjIwXCI6IFwiLS1tdGUtei1pbmRleC0yMFwiLFxuICAgIFwiMzBcIjogXCItLW10ZS16LWluZGV4LTMwXCIsXG4gICAgXCI0MFwiOiBcIi0tbXRlLXotaW5kZXgtNDBcIixcbiAgICBcIjUwXCI6IFwiLS1tdGUtei1pbmRleC01MFwiLFxuICAgIFwiLTFcIjogXCItLW10ZS16LWluZGV4LTFcIixcbiAgICBcImF1dG9cIjogXCItLW10ZS16LWluZGV4LWF1dG9cIlxuICB9LFxuICBcImdyaWRcIjoge1xuICAgIFwiYnJlYWtwb2ludFwiOiB7XG4gICAgICBcInhzXCI6IFwiMFwiLFxuICAgICAgXCJzbVwiOiBcIjQ4MHB4XCIsXG4gICAgICBcIm1kXCI6IFwiNzY4cHhcIixcbiAgICAgIFwibGdcIjogXCIxMDI0cHhcIixcbiAgICAgIFwieGxcIjogXCIxMjgwcHhcIixcbiAgICAgIFwieHhsXCI6IFwiMTUzNnB4XCJcbiAgICB9LFxuICAgIFwiY29udGFpbmVyTWF4V2lkdGhcIjoge1xuICAgICAgXCJzbVwiOiBcIjc2OHB4XCIsXG4gICAgICBcIm1kXCI6IFwiMTAyNHB4XCIsXG4gICAgICBcImxnXCI6IFwiMTI4MHB4XCIsXG4gICAgICBcInhsXCI6IFwiMTQ0MHB4XCIsXG4gICAgICBcInh4bFwiOiBcIjE0NDBweFwiXG4gICAgfVxuICB9LFxuICBcInNpemVcIjoge1xuICAgIFwic2NhbGVcIjoge1xuICAgICAgXCJzbVwiOiBcIi0tbXRlLXNpemUtc2NhbGUtc21cIixcbiAgICAgIFwibWRcIjogXCItLW10ZS1zaXplLXNjYWxlLW1kXCIsXG4gICAgICBcImxnXCI6IFwiLS1tdGUtc2l6ZS1zY2FsZS1sZ1wiXG4gICAgfSxcbiAgICBcImRlbnNpdGllc1wiOiBbXG4gICAgICBcImNvbXBhY3RcIixcbiAgICAgIFwiY29tZnlcIixcbiAgICAgIFwicm9vbXlcIlxuICAgIF1cbiAgfSxcbiAgXCJzcGFjZVwiOiB7XG4gICAgXCJub25lXCI6IFwiLS1tdGUtc3BhY2Utbm9uZVwiLFxuICAgIFwieHhzXCI6IFwiLS1tdGUtc3BhY2UteHhzXCIsXG4gICAgXCJ4c1wiOiBcIi0tbXRlLXNwYWNlLXhzXCIsXG4gICAgXCJzbVwiOiBcIi0tbXRlLXNwYWNlLXNtXCIsXG4gICAgXCJtZFwiOiBcIi0tbXRlLXNwYWNlLW1kXCIsXG4gICAgXCJsZ1wiOiBcIi0tbXRlLXNwYWNlLWxnXCIsXG4gICAgXCJ4bFwiOiBcIi0tbXRlLXNwYWNlLXhsXCIsXG4gICAgXCJ4eGxcIjogXCItLW10ZS1zcGFjZS14eGxcIixcbiAgICBcInh4eGxcIjogXCItLW10ZS1zcGFjZS14eHhsXCIsXG4gICAgXCJjb21wYWN0XCI6IHtcbiAgICAgIFwibm9uZVwiOiBcIi0tbXRlLXNwYWNlLWNvbXBhY3Qtbm9uZVwiLFxuICAgICAgXCJ4eHNcIjogXCItLW10ZS1zcGFjZS1jb21wYWN0LXh4c1wiLFxuICAgICAgXCJ4c1wiOiBcIi0tbXRlLXNwYWNlLWNvbXBhY3QteHNcIixcbiAgICAgIFwic21cIjogXCItLW10ZS1zcGFjZS1jb21wYWN0LXNtXCIsXG4gICAgICBcIm1kXCI6IFwiLS1tdGUtc3BhY2UtY29tcGFjdC1tZFwiLFxuICAgICAgXCJsZ1wiOiBcIi0tbXRlLXNwYWNlLWNvbXBhY3QtbGdcIixcbiAgICAgIFwieGxcIjogXCItLW10ZS1zcGFjZS1jb21wYWN0LXhsXCIsXG4gICAgICBcInh4bFwiOiBcIi0tbXRlLXNwYWNlLWNvbXBhY3QteHhsXCIsXG4gICAgICBcInh4eGxcIjogXCItLW10ZS1zcGFjZS1jb21wYWN0LXh4eGxcIlxuICAgIH0sXG4gICAgXCJjb21meVwiOiB7XG4gICAgICBcIm5vbmVcIjogXCItLW10ZS1zcGFjZS1jb21meS1ub25lXCIsXG4gICAgICBcInh4c1wiOiBcIi0tbXRlLXNwYWNlLWNvbWZ5LXh4c1wiLFxuICAgICAgXCJ4c1wiOiBcIi0tbXRlLXNwYWNlLWNvbWZ5LXhzXCIsXG4gICAgICBcInNtXCI6IFwiLS1tdGUtc3BhY2UtY29tZnktc21cIixcbiAgICAgIFwibWRcIjogXCItLW10ZS1zcGFjZS1jb21meS1tZFwiLFxuICAgICAgXCJsZ1wiOiBcIi0tbXRlLXNwYWNlLWNvbWZ5LWxnXCIsXG4gICAgICBcInhsXCI6IFwiLS1tdGUtc3BhY2UtY29tZnkteGxcIixcbiAgICAgIFwieHhsXCI6IFwiLS1tdGUtc3BhY2UtY29tZnkteHhsXCIsXG4gICAgICBcInh4eGxcIjogXCItLW10ZS1zcGFjZS1jb21meS14eHhsXCJcbiAgICB9LFxuICAgIFwicm9vbXlcIjoge1xuICAgICAgXCJub25lXCI6IFwiLS1tdGUtc3BhY2Utcm9vbXktbm9uZVwiLFxuICAgICAgXCJ4eHNcIjogXCItLW10ZS1zcGFjZS1yb29teS14eHNcIixcbiAgICAgIFwieHNcIjogXCItLW10ZS1zcGFjZS1yb29teS14c1wiLFxuICAgICAgXCJzbVwiOiBcIi0tbXRlLXNwYWNlLXJvb215LXNtXCIsXG4gICAgICBcIm1kXCI6IFwiLS1tdGUtc3BhY2Utcm9vbXktbWRcIixcbiAgICAgIFwibGdcIjogXCItLW10ZS1zcGFjZS1yb29teS1sZ1wiLFxuICAgICAgXCJ4bFwiOiBcIi0tbXRlLXNwYWNlLXJvb215LXhsXCIsXG4gICAgICBcInh4bFwiOiBcIi0tbXRlLXNwYWNlLXJvb215LXh4bFwiLFxuICAgICAgXCJ4eHhsXCI6IFwiLS1tdGUtc3BhY2Utcm9vbXkteHh4bFwiXG4gICAgfVxuICB9LFxuICBcImZvbnRcIjoge1xuICAgIFwiYmFzZVwiOiBcIi0tbXRlLWZvbnQtYmFzZVwiLFxuICAgIFwiZmFtaWx5XCI6IHtcbiAgICAgIFwic2Fuc1wiOiBcIi0tbXRlLWZvbnQtZmFtaWx5LXNhbnNcIixcbiAgICAgIFwic2VyaWZcIjogXCItLW10ZS1mb250LWZhbWlseS1zZXJpZlwiLFxuICAgICAgXCJtb25vXCI6IFwiLS1tdGUtZm9udC1mYW1pbHktbW9ub1wiXG4gICAgfSxcbiAgICBcIndlaWdodFwiOiB7XG4gICAgICBcImxpZ2h0XCI6IFwiLS1tdGUtZm9udC13ZWlnaHQtbGlnaHRcIixcbiAgICAgIFwicmVndWxhclwiOiBcIi0tbXRlLWZvbnQtd2VpZ2h0LXJlZ3VsYXJcIixcbiAgICAgIFwibWVkaXVtXCI6IFwiLS1tdGUtZm9udC13ZWlnaHQtbWVkaXVtXCIsXG4gICAgICBcImJvbGRcIjogXCItLW10ZS1mb250LXdlaWdodC1ib2xkXCJcbiAgICB9LFxuICAgIFwicmF0aW9cIjoge1xuICAgICAgXCJzbVwiOiAwLjgsXG4gICAgICBcIm1kXCI6IDEsXG4gICAgICBcImxnXCI6IDEuMlxuICAgIH0sXG4gICAgXCJzZXRcIjoge1xuICAgICAgXCJoMVwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCItLW10ZS1mb250LXNldC1oMS1mb250LXNpemVcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtaDEtbGluZS1oZWlnaHRcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtaDEtZm9udC13ZWlnaHRcIlxuICAgICAgfSxcbiAgICAgIFwiaDJcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwiLS1tdGUtZm9udC1zZXQtaDItZm9udC1zaXplXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWgyLWxpbmUtaGVpZ2h0XCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWgyLWZvbnQtd2VpZ2h0XCJcbiAgICAgIH0sXG4gICAgICBcImgzXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcIi0tbXRlLWZvbnQtc2V0LWgzLWZvbnQtc2l6ZVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1oMy1saW5lLWhlaWdodFwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1oMy1mb250LXdlaWdodFwiXG4gICAgICB9LFxuICAgICAgXCJoNFwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCItLW10ZS1mb250LXNldC1oNC1mb250LXNpemVcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtaDQtbGluZS1oZWlnaHRcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtaDQtZm9udC13ZWlnaHRcIlxuICAgICAgfSxcbiAgICAgIFwiaDVcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwiLS1tdGUtZm9udC1zZXQtaDUtZm9udC1zaXplXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWg1LWxpbmUtaGVpZ2h0XCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWg1LWZvbnQtd2VpZ2h0XCJcbiAgICAgIH0sXG4gICAgICBcImg2XCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcIi0tbXRlLWZvbnQtc2V0LWg2LWZvbnQtc2l6ZVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1oNi1saW5lLWhlaWdodFwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1oNi1mb250LXdlaWdodFwiXG4gICAgICB9LFxuICAgICAgXCJzdWJ0aXRsZVwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCItLW10ZS1mb250LXNldC1zdWJ0aXRsZS1mb250LXNpemVcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtc3VidGl0bGUtbGluZS1oZWlnaHRcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtc3VidGl0bGUtZm9udC13ZWlnaHRcIlxuICAgICAgfSxcbiAgICAgIFwiYm9keTFcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwiLS1tdGUtZm9udC1zZXQtYm9keTEtZm9udC1zaXplXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWJvZHkxLWxpbmUtaGVpZ2h0XCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtd2VpZ2h0XCJcbiAgICAgIH0sXG4gICAgICBcImJvZHkyXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcIi0tbXRlLWZvbnQtc2V0LWJvZHkyLWZvbnQtc2l6ZVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1ib2R5Mi1saW5lLWhlaWdodFwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXdlaWdodFwiXG4gICAgICB9LFxuICAgICAgXCJjYXB0aW9uXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcIi0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC1zaXplXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWNhcHRpb24tbGluZS1oZWlnaHRcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXdlaWdodFwiXG4gICAgICB9LFxuICAgICAgXCJidXR0b25cIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwiLS1tdGUtZm9udC1zZXQtYnV0dG9uLWZvbnQtc2l6ZVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1idXR0b24tbGluZS1oZWlnaHRcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtYnV0dG9uLWZvbnQtd2VpZ2h0XCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwiYW5pbWF0aW9uXCI6IHtcbiAgICBcInRyYW5zaXRpb25EdXJhdGlvblwiOiB7XG4gICAgICBcImV4dHJhU2hvcnRcIjogXCI4MG1zXCIsXG4gICAgICBcInNob3J0ZXJcIjogXCIxMjBtc1wiLFxuICAgICAgXCJzaG9ydFwiOiBcIjIwMG1zXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCIzMDBtc1wiLFxuICAgICAgXCJsb25nXCI6IFwiNTAwbXNcIlxuICAgIH0sXG4gICAgXCJ0cmFuc2l0aW9uRHVyYXRpb25Kc1wiOiB7XG4gICAgICBcImV4dHJhU2hvcnRcIjogMC4wOCxcbiAgICAgIFwic2hvcnRlclwiOiAwLjEyLFxuICAgICAgXCJzaG9ydFwiOiAwLjIsXG4gICAgICBcImRlZmF1bHRcIjogMC4zLFxuICAgICAgXCJsb25nXCI6IDAuNVxuICAgIH0sXG4gICAgXCJ0aW1pbmdGdW5jdGlvblwiOiB7XG4gICAgICBcImRlY2VsZXJhdGVPdXRcIjogXCJjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKVwiLFxuICAgICAgXCJzdGFuZGFyZFwiOiBcImN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSlcIixcbiAgICAgIFwiYWNjZWxlcmF0ZUluXCI6IFwiY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSlcIixcbiAgICAgIFwic2hhcnBcIjogXCJjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpXCIsXG4gICAgICBcImluT3V0XCI6IFwiY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpXCJcbiAgICB9LFxuICAgIFwidGltaW5nRnVuY3Rpb25Kc1wiOiB7XG4gICAgICBcImRlY2VsZXJhdGVPdXRcIjogW1xuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICAwLjIsXG4gICAgICAgIDFcbiAgICAgIF0sXG4gICAgICBcInN0YW5kYXJkXCI6IFtcbiAgICAgICAgMC40LFxuICAgICAgICAwLFxuICAgICAgICAwLjIsXG4gICAgICAgIDFcbiAgICAgIF0sXG4gICAgICBcImFjY2VsZXJhdGVJblwiOiBbXG4gICAgICAgIDAuNCxcbiAgICAgICAgMCxcbiAgICAgICAgMSxcbiAgICAgICAgMVxuICAgICAgXSxcbiAgICAgIFwic2hhcnBcIjogW1xuICAgICAgICAwLjQsXG4gICAgICAgIDAsXG4gICAgICAgIDAuNixcbiAgICAgICAgMVxuICAgICAgXSxcbiAgICAgIFwiaW5PdXRcIjogW1xuICAgICAgICAwLjM1LFxuICAgICAgICAwLFxuICAgICAgICAwLjI1LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9XG59OyIsICJleHBvcnQgZGVmYXVsdCB7XG4gIFwiY29sb3JcIjoge1xuICAgIFwiYmxhY2tcIjogXCItLW10ZS1ibGFja1wiLFxuICAgIFwid2hpdGVcIjogXCItLW10ZS13aGl0ZVwiLFxuICAgIFwibGlnaHRcIjogXCItLW10ZS1saWdodFwiLFxuICAgIFwiZGFya1wiOiBcIi0tbXRlLWRhcmtcIixcbiAgICBcImRhcmtlclwiOiBcIi0tbXRlLWRhcmtlclwiLFxuICAgIFwiZm9jdXNcIjogXCItLW10ZS1mb2N1c1wiLFxuICAgIFwiZm9jdXNMaWdodGVyXCI6IFwiLS1tdGUtZm9jdXMtbGlnaHRlclwiLFxuICAgIFwiZm9jdXNDb250cmFzdFwiOiBcIi0tbXRlLWZvY3VzLWNvbnRyYXN0XCIsXG4gICAgXCJncmV5MVwiOiBcIi0tbXRlLWdyZXktMVwiLFxuICAgIFwiZ3JleTJcIjogXCItLW10ZS1ncmV5LTJcIixcbiAgICBcImdyZXkzXCI6IFwiLS1tdGUtZ3JleS0zXCIsXG4gICAgXCJncmV5NFwiOiBcIi0tbXRlLWdyZXktNFwiLFxuICAgIFwiZ3JleTVcIjogXCItLW10ZS1ncmV5LTVcIixcbiAgICBcImdyZXk2XCI6IFwiLS1tdGUtZ3JleS02XCIsXG4gICAgXCJncmV5N1wiOiBcIi0tbXRlLWdyZXktN1wiLFxuICAgIFwiZ3JleThcIjogXCItLW10ZS1ncmV5LThcIixcbiAgICBcImdyZXk5XCI6IFwiLS1tdGUtZ3JleS05XCIsXG4gICAgXCJncmV5MTBcIjogXCItLW10ZS1ncmV5LTEwXCIsXG4gICAgXCJzdXJmYWNlMVwiOiBcIi0tbXRlLXN1cmZhY2UtMVwiLFxuICAgIFwic3VyZmFjZTJcIjogXCItLW10ZS1zdXJmYWNlLTJcIixcbiAgICBcInN1cmZhY2UzXCI6IFwiLS1tdGUtc3VyZmFjZS0zXCIsXG4gICAgXCJzdXJmYWNlNFwiOiBcIi0tbXRlLXN1cmZhY2UtNFwiLFxuICAgIFwic3VyZmFjZUludmVyc2VcIjogXCItLW10ZS1zdXJmYWNlLWludmVyc2VcIixcbiAgICBcImluazFcIjogXCItLW10ZS1pbmstMVwiLFxuICAgIFwiaW5rMlwiOiBcIi0tbXRlLWluay0yXCIsXG4gICAgXCJpbmszXCI6IFwiLS1tdGUtaW5rLTNcIixcbiAgICBcImluazRcIjogXCItLW10ZS1pbmstNFwiLFxuICAgIFwiaW5rNVwiOiBcIi0tbXRlLWluay01XCIsXG4gICAgXCJpbmtJbnZlcnNlXCI6IFwiLS1tdGUtaW5rLWludmVyc2VcIixcbiAgICBcImJvcmRlcjFcIjogXCItLW10ZS1ib3JkZXItMVwiLFxuICAgIFwiYm9yZGVyMlwiOiBcIi0tbXRlLWJvcmRlci0yXCIsXG4gICAgXCJib3JkZXIzXCI6IFwiLS1tdGUtYm9yZGVyLTNcIixcbiAgICBcImJvcmRlckludmVyc2VcIjogXCItLW10ZS1ib3JkZXItaW52ZXJzZVwiLFxuICAgIFwiZGlzYWJsZWQxXCI6IFwiLS1tdGUtZGlzYWJsZWQtMVwiLFxuICAgIFwiZGlzYWJsZWQyXCI6IFwiLS1tdGUtZGlzYWJsZWQtMlwiLFxuICAgIFwiZGlzYWJsZWQzXCI6IFwiLS1tdGUtZGlzYWJsZWQtM1wiLFxuICAgIFwiZGlzYWJsZWQ0XCI6IFwiLS1tdGUtZGlzYWJsZWQtNFwiLFxuICAgIFwiZGlzYWJsZWRJbnZlcnNlMVwiOiBcIi0tbXRlLWRpc2FibGVkLWludmVyc2UtMVwiLFxuICAgIFwiZGlzYWJsZWRJbnZlcnNlMlwiOiBcIi0tbXRlLWRpc2FibGVkLWludmVyc2UtMlwiLFxuICAgIFwiZGlzYWJsZWRJbnZlcnNlM1wiOiBcIi0tbXRlLWRpc2FibGVkLWludmVyc2UtM1wiLFxuICAgIFwicmVhZG9ubHkxXCI6IFwiLS1tdGUtcmVhZG9ubHktMVwiLFxuICAgIFwicmVhZG9ubHkyXCI6IFwiLS1tdGUtcmVhZG9ubHktMlwiLFxuICAgIFwicmVhZG9ubHkzXCI6IFwiLS1tdGUtcmVhZG9ubHktM1wiLFxuICAgIFwicmVhZG9ubHk0XCI6IFwiLS1tdGUtcmVhZG9ubHktNFwiLFxuICAgIFwiZWxldmF0aW9uQmFzZVwiOiBcIi0tbXRlLWVsZXZhdGlvbi1iYXNlXCIsXG4gICAgXCJjb2RlMVwiOiBcIi0tbXRlLWNvZGUtMVwiLFxuICAgIFwiY29kZTJcIjogXCItLW10ZS1jb2RlLTJcIlxuICB9LFxuICBcInBhbGV0dGVcIjoge1xuICAgIFwiZ3JlZW5cIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWdyZWVuLWxpZ2h0ZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWdyZWVuLWxpZ2h0ZXItY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtZ3JlZW4tbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWdyZWVuLWxpZ2h0LWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtZ3JlZW4tYmFzZVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtZ3JlZW4tYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWdyZWVuLWRhcmtcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWdyZWVuLWRhcmstY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWdyZWVuLWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtZ3JlZW4tZGFya2VyLWNvbnRyYXN0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwidGVhbFwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdGVhbC1saWdodGVyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS10ZWFsLWxpZ2h0ZXItY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdGVhbC1saWdodFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdGVhbC1saWdodC1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXRlYWwtYmFzZVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdGVhbC1iYXNlLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdGVhbC1kYXJrXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS10ZWFsLWRhcmstY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXRlYWwtZGFya2VyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS10ZWFsLWRhcmtlci1jb250cmFzdFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImN5YW5cIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWN5YW4tbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY3lhbi1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWN5YW4tbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWN5YW4tbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jeWFuLWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWN5YW4tYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWN5YW4tZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY3lhbi1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jeWFuLWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY3lhbi1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJibHVlXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1ibHVlLWxpZ2h0ZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWJsdWUtbGlnaHRlci1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1ibHVlLWxpZ2h0XCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1ibHVlLWxpZ2h0LWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtYmx1ZS1iYXNlXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1ibHVlLWJhc2UtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1ibHVlLWRhcmtcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWJsdWUtZGFyay1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtYmx1ZS1kYXJrZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWJsdWUtZGFya2VyLWNvbnRyYXN0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwicnhCbHVlXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1yeC1ibHVlLWxpZ2h0ZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXJ4LWJsdWUtbGlnaHRlci1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1yeC1ibHVlLWxpZ2h0XCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1yeC1ibHVlLWxpZ2h0LWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtcngtYmx1ZS1iYXNlXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1yeC1ibHVlLWJhc2UtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1yeC1ibHVlLWRhcmtcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXJ4LWJsdWUtZGFyay1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtcngtYmx1ZS1kYXJrZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXJ4LWJsdWUtZGFya2VyLWNvbnRyYXN0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwicHVycGxlXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1wdXJwbGUtbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcHVycGxlLWxpZ2h0ZXItY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtcHVycGxlLWxpZ2h0XCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1wdXJwbGUtbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1wdXJwbGUtYmFzZVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcHVycGxlLWJhc2UtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1wdXJwbGUtZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcHVycGxlLWRhcmstY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXB1cnBsZS1kYXJrZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXB1cnBsZS1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJtYWdlbnRhXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1tYWdlbnRhLWxpZ2h0ZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLW1hZ2VudGEtbGlnaHRlci1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1tYWdlbnRhLWxpZ2h0XCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1tYWdlbnRhLWxpZ2h0LWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtbWFnZW50YS1iYXNlXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1tYWdlbnRhLWJhc2UtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1tYWdlbnRhLWRhcmtcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLW1hZ2VudGEtZGFyay1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtbWFnZW50YS1kYXJrZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLW1hZ2VudGEtZGFya2VyLWNvbnRyYXN0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwicmVkXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1yZWQtbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcmVkLWxpZ2h0ZXItY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtcmVkLWxpZ2h0XCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1yZWQtbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1yZWQtYmFzZVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcmVkLWJhc2UtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1yZWQtZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcmVkLWRhcmstY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXJlZC1kYXJrZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXJlZC1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJoZWJSZWRcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWhlYi1yZWQtbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtaGViLXJlZC1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWhlYi1yZWQtbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWhlYi1yZWQtbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1oZWItcmVkLWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWhlYi1yZWQtYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWhlYi1yZWQtZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtaGViLXJlZC1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1oZWItcmVkLWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtaGViLXJlZC1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJvcmFuZ2VcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLW9yYW5nZS1saWdodGVyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1vcmFuZ2UtbGlnaHRlci1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1vcmFuZ2UtbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLW9yYW5nZS1saWdodC1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLW9yYW5nZS1iYXNlXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1vcmFuZ2UtYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLW9yYW5nZS1kYXJrXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1vcmFuZ2UtZGFyay1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtb3JhbmdlLWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtb3JhbmdlLWRhcmtlci1jb250cmFzdFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImFtYmVyXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1hbWJlci1saWdodGVyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1hbWJlci1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWFtYmVyLWxpZ2h0XCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1hbWJlci1saWdodC1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWFtYmVyLWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWFtYmVyLWJhc2UtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1hbWJlci1kYXJrXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1hbWJlci1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1hbWJlci1kYXJrZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWFtYmVyLWRhcmtlci1jb250cmFzdFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInllbGxvd1wiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUteWVsbG93LWxpZ2h0ZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXllbGxvdy1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXllbGxvdy1saWdodFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUteWVsbG93LWxpZ2h0LWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUteWVsbG93LWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXllbGxvdy1iYXNlLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUteWVsbG93LWRhcmtcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXllbGxvdy1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS15ZWxsb3ctZGFya2VyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS15ZWxsb3ctZGFya2VyLWNvbnRyYXN0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY291cG9uWWVsbG93XCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3Vwb24teWVsbG93LWxpZ2h0ZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvdXBvbi15ZWxsb3ctbGlnaHRlci1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3Vwb24teWVsbG93LWxpZ2h0XCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3Vwb24teWVsbG93LWxpZ2h0LWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY291cG9uLXllbGxvdy1iYXNlXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3Vwb24teWVsbG93LWJhc2UtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3Vwb24teWVsbG93LWRhcmtcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvdXBvbi15ZWxsb3ctZGFyay1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY291cG9uLXllbGxvdy1kYXJrZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvdXBvbi15ZWxsb3ctZGFya2VyLWNvbnRyYXN0XCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwicGdcIjoge1xuICAgIFwiY29yZVwiOiB7XG4gICAgICBcInByaW1hcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXByaW1hcnktbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1wcmltYXJ5LWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1wcmltYXJ5LWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXByaW1hcnktbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXByaW1hcnktYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXByaW1hcnktZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1wcmltYXJ5LWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzZWNvbmRhcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXNlY29uZGFyeS1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXNlY29uZGFyeS1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtc2Vjb25kYXJ5LWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXNlY29uZGFyeS1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtc2Vjb25kYXJ5LWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtc2Vjb25kYXJ5LWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRlcnRpYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS10ZXJ0aWFyeS1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXRlcnRpYXJ5LWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS10ZXJ0aWFyeS1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS10ZXJ0aWFyeS1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtdGVydGlhcnktYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS10ZXJ0aWFyeS1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtdGVydGlhcnktZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRhbmdlclwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtZGFuZ2VyLWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtZGFuZ2VyLWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1kYW5nZXItbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtZGFuZ2VyLWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1kYW5nZXItYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtZGFuZ2VyLWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtZGFuZ2VyLWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtZGFuZ2VyLWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1kYW5nZXItZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzdGF0dXNcIjoge1xuICAgICAgXCJwcmltYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXByaW1hcnktbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXByaW1hcnktbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtcHJpbWFyeS1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXByaW1hcnktbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtcHJpbWFyeS1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtcHJpbWFyeS1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXByaW1hcnktZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXByaW1hcnktZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXByaW1hcnktZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtcHJpbWFyeS1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzZWNvbmRhcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1zZWNvbmRhcnktbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1zZWNvbmRhcnktZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1zZWNvbmRhcnktZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGVydGlhcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtdGVydGlhcnktbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtdGVydGlhcnktbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtdGVydGlhcnktYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtdGVydGlhcnktZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzdWNjZXNzXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtc3VjY2Vzcy1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtc3VjY2Vzcy1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtc3VjY2Vzcy1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtc3VjY2Vzcy1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3YXJuaW5nXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXdhcm5pbmctbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXdhcm5pbmctbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtd2FybmluZy1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXdhcm5pbmctbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtd2FybmluZy1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtd2FybmluZy1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXdhcm5pbmctZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXdhcm5pbmctZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXdhcm5pbmctZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtd2FybmluZy1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkYW5nZXJcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtZGFuZ2VyLWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtZGFuZ2VyLWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtZGFuZ2VyLWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLWRhbmdlci1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtZGFuZ2VyLWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1kYW5nZXItZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLWRhbmdlci1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1kYW5nZXItZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ2aXpcIjoge1xuICAgICAgXCJvbmVcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotb25lLWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1vbmUtbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotb25lLWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotb25lLWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LW9uZS1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotb25lLWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotb25lLWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1vbmUtZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LW9uZS1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1vbmUtZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidHdvXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXR3by1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotdHdvLWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXR3by1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXR3by1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei10d28tYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXR3by1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXR3by1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotdHdvLWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei10d28tZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotdHdvLWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRocmVlXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXRocmVlLWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei10aHJlZS1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei10aHJlZS1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXRocmVlLWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXRocmVlLWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei10aHJlZS1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXRocmVlLWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei10aHJlZS1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotdGhyZWUtZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotdGhyZWUtZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZm91clwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1mb3VyLWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1mb3VyLWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LWZvdXItbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1mb3VyLWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LWZvdXItYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LWZvdXItYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1mb3VyLWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1mb3VyLWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1mb3VyLWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LWZvdXItZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZml2ZVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1maXZlLWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1maXZlLWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LWZpdmUtbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1maXZlLWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LWZpdmUtYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LWZpdmUtYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1maXZlLWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1maXZlLWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1maXZlLWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LWZpdmUtZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2l4XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXNpeC1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotc2l4LWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXNpeC1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXNpeC1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1zaXgtYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXNpeC1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXNpeC1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotc2l4LWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1zaXgtZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotc2l4LWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwic3RhdGVUb2tlblwiOiB7XG4gICAgXCJzdXJmYWNlMVwiOiB7XG4gICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMS1kZWZhdWx0LXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLTEtZGVmYXVsdC1hXCJcbiAgICAgIH0sXG4gICAgICBcImhvdmVyXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLTEtaG92ZXItcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMS1ob3Zlci1hXCJcbiAgICAgIH0sXG4gICAgICBcImFjdGl2ZVwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0xLWFjdGl2ZS1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0xLWFjdGl2ZS1hXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwic3VyZmFjZTJcIjoge1xuICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0yLWRlZmF1bHQtYVwiXG4gICAgICB9LFxuICAgICAgXCJob3ZlclwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItYVwiXG4gICAgICB9LFxuICAgICAgXCJhY3RpdmVcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInN1cmZhY2UzXCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0zLWRlZmF1bHQtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMy1kZWZhdWx0LWFcIlxuICAgICAgfSxcbiAgICAgIFwiaG92ZXJcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMy1ob3Zlci1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLWFcIlxuICAgICAgfSxcbiAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLTMtYWN0aXZlLXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLTMtYWN0aXZlLWFcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzdXJmYWNlNFwiOiB7XG4gICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtNC1kZWZhdWx0LXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLTQtZGVmYXVsdC1hXCJcbiAgICAgIH0sXG4gICAgICBcImhvdmVyXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLTQtaG92ZXItcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtNC1ob3Zlci1hXCJcbiAgICAgIH0sXG4gICAgICBcImFjdGl2ZVwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS00LWFjdGl2ZS1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS00LWFjdGl2ZS1hXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwic3VyZmFjZUludmVyc2VcIjoge1xuICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYVwiXG4gICAgICB9LFxuICAgICAgXCJob3ZlclwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItYVwiXG4gICAgICB9LFxuICAgICAgXCJhY3RpdmVcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtYVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImlua0ludmVyc2VcIjoge1xuICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1pbmstaW52ZXJzZS1kZWZhdWx0LXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1pbmstaW52ZXJzZS1kZWZhdWx0LWFcIlxuICAgICAgfSxcbiAgICAgIFwiaG92ZXJcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LWluay1pbnZlcnNlLWhvdmVyLXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1pbmstaW52ZXJzZS1ob3Zlci1hXCJcbiAgICAgIH0sXG4gICAgICBcImFjdGl2ZVwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtaW5rLWludmVyc2UtYWN0aXZlLXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1pbmstaW52ZXJzZS1hY3RpdmUtYVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImxpbmtcIjoge1xuICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1saW5rLWRlZmF1bHQtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LWxpbmstZGVmYXVsdC1hXCJcbiAgICAgIH0sXG4gICAgICBcInZpc2l0ZWRcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LWxpbmstdmlzaXRlZC1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtbGluay12aXNpdGVkLWFcIlxuICAgICAgfVxuICAgIH1cbiAgfVxufTsiLCAiZXhwb3J0IGRlZmF1bHQge1xuICBcImNvbG9yXCI6IHtcbiAgICBcImJsYWNrXCI6IFtcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJ3aGl0ZVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwibGlnaHRcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRhcmtcIjogW1xuICAgICAgMzIsXG4gICAgICAzMyxcbiAgICAgIDM0LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRhcmtlclwiOiBbXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZm9jdXNcIjogW1xuICAgICAgMCxcbiAgICAgIDExOSxcbiAgICAgIDIwNCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJmb2N1c0xpZ2h0ZXJcIjogW1xuICAgICAgMjUxLFxuICAgICAgMjUzLFxuICAgICAgMjU0LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImZvY3VzQ29udHJhc3RcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXkxXCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDI1MCxcbiAgICAgIDI1MCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5MlwiOiBbXG4gICAgICAyNDIsXG4gICAgICAyNDIsXG4gICAgICAyNDIsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTNcIjogW1xuICAgICAgMjM3LFxuICAgICAgMjM3LFxuICAgICAgMjM3LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXk0XCI6IFtcbiAgICAgIDIxNixcbiAgICAgIDIxNyxcbiAgICAgIDIxNyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5NVwiOiBbXG4gICAgICAxOTgsXG4gICAgICAxOTksXG4gICAgICAxOTksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTZcIjogW1xuICAgICAgMTc0LFxuICAgICAgMTc2LFxuICAgICAgMTc4LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXk3XCI6IFtcbiAgICAgIDE0MyxcbiAgICAgIDE0NSxcbiAgICAgIDE0OCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5OFwiOiBbXG4gICAgICAxMTUsXG4gICAgICAxMTcsXG4gICAgICAxMjAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTlcIjogW1xuICAgICAgODAsXG4gICAgICA4MixcbiAgICAgIDgzLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXkxMFwiOiBbXG4gICAgICA1MCxcbiAgICAgIDUxLFxuICAgICAgNTIsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwic3VyZmFjZTFcIjogW1xuICAgICAgMjUwLFxuICAgICAgMjUwLFxuICAgICAgMjUwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInN1cmZhY2UyXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJzdXJmYWNlM1wiOiBbXG4gICAgICAyNDIsXG4gICAgICAyNDIsXG4gICAgICAyNDIsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwic3VyZmFjZTRcIjogW1xuICAgICAgNTAsXG4gICAgICA1MSxcbiAgICAgIDUyLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInN1cmZhY2VJbnZlcnNlXCI6IFtcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJpbmsxXCI6IFtcbiAgICAgIDUwLFxuICAgICAgNTEsXG4gICAgICA1MixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJpbmsyXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDExNyxcbiAgICAgIDEyMCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJpbmszXCI6IFtcbiAgICAgIDE0MyxcbiAgICAgIDE0NSxcbiAgICAgIDE0OCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJpbms0XCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDI1MCxcbiAgICAgIDI1MCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJpbms1XCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJpbmtJbnZlcnNlXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJib3JkZXIxXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDIzNyxcbiAgICAgIDIzNyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJib3JkZXIyXCI6IFtcbiAgICAgIDIxNixcbiAgICAgIDIxNyxcbiAgICAgIDIxNyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJib3JkZXIzXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDE3NixcbiAgICAgIDE3OCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJib3JkZXJJbnZlcnNlXCI6IFtcbiAgICAgIDUwLFxuICAgICAgNTEsXG4gICAgICA1MixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZDFcIjogW1xuICAgICAgMjQwLFxuICAgICAgMjM5LFxuICAgICAgMjM5LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRpc2FibGVkMlwiOiBbXG4gICAgICAyMTEsXG4gICAgICAyMDgsXG4gICAgICAyMDcsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWQzXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDE1NixcbiAgICAgIDE1MyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZDRcIjogW1xuICAgICAgOTEsXG4gICAgICA4NSxcbiAgICAgIDgyLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRpc2FibGVkSW52ZXJzZTFcIjogW1xuICAgICAgNDMsXG4gICAgICA0MCxcbiAgICAgIDM5LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRpc2FibGVkSW52ZXJzZTJcIjogW1xuICAgICAgOTQsXG4gICAgICA4NyxcbiAgICAgIDg1LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRpc2FibGVkSW52ZXJzZTNcIjogW1xuICAgICAgMTY4LFxuICAgICAgMTYxLFxuICAgICAgMTU5LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInJlYWRvbmx5MVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAyNTAsXG4gICAgICAyNTAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwicmVhZG9ubHkyXCI6IFtcbiAgICAgIDIxNixcbiAgICAgIDIxNyxcbiAgICAgIDIxNyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJyZWFkb25seTNcIjogW1xuICAgICAgMTc0LFxuICAgICAgMTc2LFxuICAgICAgMTc4LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInJlYWRvbmx5NFwiOiBbXG4gICAgICA4MCxcbiAgICAgIDgyLFxuICAgICAgODMsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZWxldmF0aW9uQmFzZVwiOiBbXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiY29kZTFcIjogW1xuICAgICAgMjIyLFxuICAgICAgMjIyLFxuICAgICAgMjIyLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImNvZGUyXCI6IFtcbiAgICAgIDYxLFxuICAgICAgNjEsXG4gICAgICA2MSxcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJwYWxldHRlXCI6IHtcbiAgICBcImdyZWVuXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ0ZWFsXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY3lhblwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiYmx1ZVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwicnhCbHVlXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInB1cnBsZVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwibWFnZW50YVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwicmVkXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiaGViUmVkXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwib3JhbmdlXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJhbWJlclwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwieWVsbG93XCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcImNvdXBvblllbGxvd1wiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcInBnXCI6IHtcbiAgICBcImNvcmVcIjoge1xuICAgICAgXCJwcmltYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgIDI0OCxcbiAgICAgICAgICAgIDI1MyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNTEsXG4gICAgICAgICAgICAxNTIsXG4gICAgICAgICAgICAyMjUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDExOSxcbiAgICAgICAgICAgIDIwNCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgOTMsXG4gICAgICAgICAgICAxNjgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgNjEsXG4gICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzZWNvbmRhcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjQ4LFxuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA1MSxcbiAgICAgICAgICAgIDE1MixcbiAgICAgICAgICAgIDIyNSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMTE5LFxuICAgICAgICAgICAgMjA0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA5MyxcbiAgICAgICAgICAgIDE2OCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA2MSxcbiAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRlcnRpYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MyxcbiAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQ4LFxuICAgICAgICAgICAgMjIyLFxuICAgICAgICAgICAgMTE5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MSxcbiAgICAgICAgICAgIDIwMixcbiAgICAgICAgICAgIDI0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIyNCxcbiAgICAgICAgICAgIDE3NixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMzMsXG4gICAgICAgICAgICAxMDIsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGFuZ2VyXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MSxcbiAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgIDI0NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjE3LFxuICAgICAgICAgICAgNzQsXG4gICAgICAgICAgICA5MSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxOTMsXG4gICAgICAgICAgICAzMSxcbiAgICAgICAgICAgIDUwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE1NyxcbiAgICAgICAgICAgIDI3LFxuICAgICAgICAgICAgNDIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMTAsXG4gICAgICAgICAgICAxNyxcbiAgICAgICAgICAgIDI4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzdGF0dXNcIjoge1xuICAgICAgXCJwcmltYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgIDI0OCxcbiAgICAgICAgICAgIDI1MyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNTEsXG4gICAgICAgICAgICAxNTIsXG4gICAgICAgICAgICAyMjUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDExOSxcbiAgICAgICAgICAgIDIwNCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgOTMsXG4gICAgICAgICAgICAxNjgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgNjEsXG4gICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzZWNvbmRhcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjQ4LFxuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA1MSxcbiAgICAgICAgICAgIDE1MixcbiAgICAgICAgICAgIDIyNSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMTE5LFxuICAgICAgICAgICAgMjA0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA5MyxcbiAgICAgICAgICAgIDE2OCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA2MSxcbiAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRlcnRpYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MyxcbiAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQ4LFxuICAgICAgICAgICAgMjIyLFxuICAgICAgICAgICAgMTE5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MSxcbiAgICAgICAgICAgIDIwMixcbiAgICAgICAgICAgIDI0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIyNCxcbiAgICAgICAgICAgIDE3NixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMzMsXG4gICAgICAgICAgICAxMDIsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic3VjY2Vzc1wiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAyNTEsXG4gICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDUwLFxuICAgICAgICAgICAgMTc0LFxuICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDEzOCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDEwNyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgNzEsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2FybmluZ1wiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTMsXG4gICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAyNDIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0NyxcbiAgICAgICAgICAgIDIwMSxcbiAgICAgICAgICAgIDk1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIzMCxcbiAgICAgICAgICAgIDE2NSxcbiAgICAgICAgICAgIDE1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIwMCxcbiAgICAgICAgICAgIDEzOCxcbiAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNDMsXG4gICAgICAgICAgICA5NSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkYW5nZXJcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUxLFxuICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgMjQ1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMTcsXG4gICAgICAgICAgICA3NCxcbiAgICAgICAgICAgIDkxLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE5MyxcbiAgICAgICAgICAgIDMxLFxuICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTU3LFxuICAgICAgICAgICAgMjcsXG4gICAgICAgICAgICA0MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDExMCxcbiAgICAgICAgICAgIDE3LFxuICAgICAgICAgICAgMjgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInZpelwiOiB7XG4gICAgICBcIm9uZVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDMsXG4gICAgICAgICAgICAyNDksXG4gICAgICAgICAgICAyNTIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDQ5LFxuICAgICAgICAgICAgMTYzLFxuICAgICAgICAgICAgMjExLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxMjUsXG4gICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDk5LFxuICAgICAgICAgICAgMTQ4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDc1LFxuICAgICAgICAgICAgMTEyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidHdvXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MyxcbiAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQ3LFxuICAgICAgICAgICAgMjAxLFxuICAgICAgICAgICAgOTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjMwLFxuICAgICAgICAgICAgMTY1LFxuICAgICAgICAgICAgMTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjAwLFxuICAgICAgICAgICAgMTM4LFxuICAgICAgICAgICAgNCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE0MyxcbiAgICAgICAgICAgIDk1LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRocmVlXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MixcbiAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgIDI0OCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjMyLFxuICAgICAgICAgICAgMTI1LFxuICAgICAgICAgICAgMTgwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIxMyxcbiAgICAgICAgICAgIDUyLFxuICAgICAgICAgICAgMTMwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE4NCxcbiAgICAgICAgICAgIDIwLFxuICAgICAgICAgICAgOTksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMjAsXG4gICAgICAgICAgICA3LFxuICAgICAgICAgICAgNjIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJmb3VyXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgIDI1MyxcbiAgICAgICAgICAgIDI0OSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNzQsXG4gICAgICAgICAgICAxODEsXG4gICAgICAgICAgICAxNDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNDMsXG4gICAgICAgICAgICAxMzMsXG4gICAgICAgICAgICA5OCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMSxcbiAgICAgICAgICAgIDExMSxcbiAgICAgICAgICAgIDc3LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICA5MixcbiAgICAgICAgICAgIDYyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZml2ZVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTMsXG4gICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAyNDIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0NyxcbiAgICAgICAgICAgIDEzMyxcbiAgICAgICAgICAgIDk1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIzOSxcbiAgICAgICAgICAgIDc5LFxuICAgICAgICAgICAgMjYsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjA2LFxuICAgICAgICAgICAgNTgsXG4gICAgICAgICAgICA5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTM0LFxuICAgICAgICAgICAgNDAsXG4gICAgICAgICAgICA5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2l4XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0NixcbiAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTQ1LFxuICAgICAgICAgICAgMTI3LFxuICAgICAgICAgICAgMTk5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEwMCxcbiAgICAgICAgICAgIDc1LFxuICAgICAgICAgICAgMTc1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDc2LFxuICAgICAgICAgICAgNTgsXG4gICAgICAgICAgICAxMzEsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA0NCxcbiAgICAgICAgICAgIDMxLFxuICAgICAgICAgICAgODYsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59OyIsICJleHBvcnQgZGVmYXVsdCB7XG4gIFwiY29sb3JcIjoge1xuICAgIFwiYmxhY2tcIjogW1xuICAgICAgMTIsXG4gICAgICAxMyxcbiAgICAgIDEzLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcIndoaXRlXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJsaWdodFwiOiBbXG4gICAgICAyOSxcbiAgICAgIDMwLFxuICAgICAgMzIsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGFya1wiOiBbXG4gICAgICAyNDcsXG4gICAgICAyNDcsXG4gICAgICAyNDgsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGFya2VyXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJmb2N1c1wiOiBbXG4gICAgICAyNSxcbiAgICAgIDE0MCxcbiAgICAgIDIyMyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJmb2N1c0xpZ2h0ZXJcIjogW1xuICAgICAgMTAsXG4gICAgICAxOSxcbiAgICAgIDM2LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImZvY3VzQ29udHJhc3RcIjogW1xuICAgICAgMTIsXG4gICAgICAxMyxcbiAgICAgIDEzLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXkxXCI6IFtcbiAgICAgIDQzLFxuICAgICAgNDUsXG4gICAgICA0OSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5MlwiOiBbXG4gICAgICA3MSxcbiAgICAgIDc1LFxuICAgICAgODIsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTNcIjogW1xuICAgICAgMTA0LFxuICAgICAgMTEwLFxuICAgICAgMTIwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXk0XCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDE0MCxcbiAgICAgIDE1MSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5NVwiOiBbXG4gICAgICAxNjgsXG4gICAgICAxNzEsXG4gICAgICAxNzksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTZcIjogW1xuICAgICAgMTkyLFxuICAgICAgMTk1LFxuICAgICAgMjAwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXk3XCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDIxMyxcbiAgICAgIDIxNyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5OFwiOiBbXG4gICAgICAyMzMsXG4gICAgICAyMzQsXG4gICAgICAyMzYsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTlcIjogW1xuICAgICAgMjM5LFxuICAgICAgMjM5LFxuICAgICAgMjQxLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXkxMFwiOiBbXG4gICAgICAyNDcsXG4gICAgICAyNDcsXG4gICAgICAyNDgsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwic3VyZmFjZTFcIjogW1xuICAgICAgOSxcbiAgICAgIDEwLFxuICAgICAgMTIsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwic3VyZmFjZTJcIjogW1xuICAgICAgMjAsXG4gICAgICAyMixcbiAgICAgIDI2LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInN1cmZhY2UzXCI6IFtcbiAgICAgIDMwLFxuICAgICAgMzQsXG4gICAgICA0MSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJzdXJmYWNlNFwiOiBbXG4gICAgICA0MyxcbiAgICAgIDQ4LFxuICAgICAgNTksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwic3VyZmFjZUludmVyc2VcIjogW1xuICAgICAgMTIsXG4gICAgICAxMyxcbiAgICAgIDEzLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImluazFcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImluazJcIjogW1xuICAgICAgMTkyLFxuICAgICAgMTk1LFxuICAgICAgMjAwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImluazNcIjogW1xuICAgICAgMTM1LFxuICAgICAgMTQwLFxuICAgICAgMTUxLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImluazRcIjogW1xuICAgICAgMTA0LFxuICAgICAgMTEwLFxuICAgICAgMTIwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImluazVcIjogW1xuICAgICAgNDMsXG4gICAgICA0NSxcbiAgICAgIDQ5LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImlua0ludmVyc2VcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImJvcmRlcjFcIjogW1xuICAgICAgNDMsXG4gICAgICA0NSxcbiAgICAgIDQ5LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImJvcmRlcjJcIjogW1xuICAgICAgNzEsXG4gICAgICA3NSxcbiAgICAgIDgyLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImJvcmRlcjNcIjogW1xuICAgICAgMTA0LFxuICAgICAgMTEwLFxuICAgICAgMTIwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImJvcmRlckludmVyc2VcIjogW1xuICAgICAgNDMsXG4gICAgICA0NSxcbiAgICAgIDQ5LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRpc2FibGVkMVwiOiBbXG4gICAgICA5MCxcbiAgICAgIDg1LFxuICAgICAgODMsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWQyXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDE1NixcbiAgICAgIDE1NCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZDNcIjogW1xuICAgICAgMjExLFxuICAgICAgMjA4LFxuICAgICAgMjA3LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRpc2FibGVkNFwiOiBbXG4gICAgICAyNDAsXG4gICAgICAyMzksXG4gICAgICAyMzksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWRJbnZlcnNlMVwiOiBbXG4gICAgICA0MixcbiAgICAgIDQwLFxuICAgICAgMzksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWRJbnZlcnNlMlwiOiBbXG4gICAgICA5MyxcbiAgICAgIDg3LFxuICAgICAgODYsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWRJbnZlcnNlM1wiOiBbXG4gICAgICAxNjcsXG4gICAgICAxNjEsXG4gICAgICAxNjAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwicmVhZG9ubHkxXCI6IFtcbiAgICAgIDQzLFxuICAgICAgNDUsXG4gICAgICA0OSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJyZWFkb25seTJcIjogW1xuICAgICAgMTM1LFxuICAgICAgMTQwLFxuICAgICAgMTUxLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInJlYWRvbmx5M1wiOiBbXG4gICAgICAxOTIsXG4gICAgICAxOTUsXG4gICAgICAyMDAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwicmVhZG9ubHk0XCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDIzOSxcbiAgICAgIDI0MSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJlbGV2YXRpb25CYXNlXCI6IFtcbiAgICAgIDEyLFxuICAgICAgMTMsXG4gICAgICAxMyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJjb2RlMVwiOiBbXG4gICAgICAzLFxuICAgICAgMyxcbiAgICAgIDMsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiY29kZTJcIjogW1xuICAgICAgMjI0LFxuICAgICAgMjI0LFxuICAgICAgMjI0LFxuICAgICAgMjU1XG4gICAgXVxuICB9LFxuICBcInBhbGV0dGVcIjoge1xuICAgIFwiZ3JlZW5cIjoge1xuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInRlYWxcIjoge1xuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY3lhblwiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiYmx1ZVwiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJyeEJsdWVcIjoge1xuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInB1cnBsZVwiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcIm1hZ2VudGFcIjoge1xuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJyZWRcIjoge1xuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiaGViUmVkXCI6IHtcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwib3JhbmdlXCI6IHtcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiYW1iZXJcIjoge1xuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInllbGxvd1wiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY291cG9uWWVsbG93XCI6IHtcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwicGdcIjoge1xuICAgIFwiY29yZVwiOiB7XG4gICAgICBcInByaW1hcnlcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNzgsXG4gICAgICAgICAgICAyMTgsXG4gICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNzksXG4gICAgICAgICAgICAxNjYsXG4gICAgICAgICAgICAyMzgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUsXG4gICAgICAgICAgICAxMzgsXG4gICAgICAgICAgICAyMzAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI2LFxuICAgICAgICAgICAgODMsXG4gICAgICAgICAgICAxMzcsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAzMCxcbiAgICAgICAgICAgIDQ4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2Vjb25kYXJ5XCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTc4LFxuICAgICAgICAgICAgMjE4LFxuICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDc5LFxuICAgICAgICAgICAgMTY2LFxuICAgICAgICAgICAgMjM4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1LFxuICAgICAgICAgICAgMTM4LFxuICAgICAgICAgICAgMjMwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNixcbiAgICAgICAgICAgIDgzLFxuICAgICAgICAgICAgMTM3LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMzAsXG4gICAgICAgICAgICA0OCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRlcnRpYXJ5XCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjM3LFxuICAgICAgICAgICAgMTc5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1NCxcbiAgICAgICAgICAgIDIyNyxcbiAgICAgICAgICAgIDExOSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTEsXG4gICAgICAgICAgICAyMDIsXG4gICAgICAgICAgICAyNCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTkzLFxuICAgICAgICAgICAgMTU1LFxuICAgICAgICAgICAgMTYsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNDYsXG4gICAgICAgICAgICAzOCxcbiAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGFuZ2VyXCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjU0LFxuICAgICAgICAgICAgMTk1LFxuICAgICAgICAgICAgMjA3LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgIDEwMixcbiAgICAgICAgICAgIDExOSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDMsXG4gICAgICAgICAgICA3MCxcbiAgICAgICAgICAgIDkxLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNDAsXG4gICAgICAgICAgICAzOCxcbiAgICAgICAgICAgIDUwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDQ5LFxuICAgICAgICAgICAgMTcsXG4gICAgICAgICAgICAyMSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic3RhdHVzXCI6IHtcbiAgICAgIFwicHJpbWFyeVwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE3OCxcbiAgICAgICAgICAgIDIxOCxcbiAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA3OSxcbiAgICAgICAgICAgIDE2NixcbiAgICAgICAgICAgIDIzOCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNSxcbiAgICAgICAgICAgIDEzOCxcbiAgICAgICAgICAgIDIzMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjYsXG4gICAgICAgICAgICA4MyxcbiAgICAgICAgICAgIDEzNyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDMwLFxuICAgICAgICAgICAgNDgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzZWNvbmRhcnlcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNzgsXG4gICAgICAgICAgICAyMTgsXG4gICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNzksXG4gICAgICAgICAgICAxNjYsXG4gICAgICAgICAgICAyMzgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUsXG4gICAgICAgICAgICAxMzgsXG4gICAgICAgICAgICAyMzAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI2LFxuICAgICAgICAgICAgODMsXG4gICAgICAgICAgICAxMzcsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAzMCxcbiAgICAgICAgICAgIDQ4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGVydGlhcnlcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyMzcsXG4gICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjU0LFxuICAgICAgICAgICAgMjI3LFxuICAgICAgICAgICAgMTE5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MSxcbiAgICAgICAgICAgIDIwMixcbiAgICAgICAgICAgIDI0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxOTMsXG4gICAgICAgICAgICAxNTUsXG4gICAgICAgICAgICAxNixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA0NixcbiAgICAgICAgICAgIDM4LFxuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzdWNjZXNzXCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTkyLFxuICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgMTkwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDQwLFxuICAgICAgICAgICAgMTk1LFxuICAgICAgICAgICAgMzQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDE1NixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgOTcsXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDM4LFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3YXJuaW5nXCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjM1LFxuICAgICAgICAgICAgMTc5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MyxcbiAgICAgICAgICAgIDIwNyxcbiAgICAgICAgICAgIDk4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0NSxcbiAgICAgICAgICAgIDE3OSxcbiAgICAgICAgICAgIDI1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxOTQsXG4gICAgICAgICAgICAxMzksXG4gICAgICAgICAgICAyMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA0NixcbiAgICAgICAgICAgIDM0LFxuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkYW5nZXJcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTQsXG4gICAgICAgICAgICAxOTUsXG4gICAgICAgICAgICAyMDcsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgMTAyLFxuICAgICAgICAgICAgMTE5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0MyxcbiAgICAgICAgICAgIDcwLFxuICAgICAgICAgICAgOTEsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE0MCxcbiAgICAgICAgICAgIDM4LFxuICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNDksXG4gICAgICAgICAgICAxNyxcbiAgICAgICAgICAgIDIxLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ2aXpcIjoge1xuICAgICAgXCJvbmVcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAyMjgsXG4gICAgICAgICAgICAyNDksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNTksXG4gICAgICAgICAgICAxNzYsXG4gICAgICAgICAgICAyMjcsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDE0MyxcbiAgICAgICAgICAgIDIwNCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTEsXG4gICAgICAgICAgICA5MixcbiAgICAgICAgICAgIDEzMixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA5LFxuICAgICAgICAgICAgMzEsXG4gICAgICAgICAgICA0MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInR3b1wiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDIzNSxcbiAgICAgICAgICAgIDE3OSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTMsXG4gICAgICAgICAgICAyMDcsXG4gICAgICAgICAgICA5OCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDUsXG4gICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAyNSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTk0LFxuICAgICAgICAgICAgMTM5LFxuICAgICAgICAgICAgMjAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNDYsXG4gICAgICAgICAgICAzNCxcbiAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGhyZWVcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTMsXG4gICAgICAgICAgICAxODAsXG4gICAgICAgICAgICAyMTgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQ1LFxuICAgICAgICAgICAgMTMyLFxuICAgICAgICAgICAgMTkxLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIzNCxcbiAgICAgICAgICAgIDgzLFxuICAgICAgICAgICAgMTU2LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNzEsXG4gICAgICAgICAgICAzOCxcbiAgICAgICAgICAgIDEwMixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAzNyxcbiAgICAgICAgICAgIDE0LFxuICAgICAgICAgICAgMjUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJmb3VyXCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTc5LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjI2LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDc3LFxuICAgICAgICAgICAgMTk5LFxuICAgICAgICAgICAgMTUyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDQ1LFxuICAgICAgICAgICAgMTU0LFxuICAgICAgICAgICAgMTEyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAzMixcbiAgICAgICAgICAgIDEwNSxcbiAgICAgICAgICAgIDc3LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMzMsXG4gICAgICAgICAgICAyNixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImZpdmVcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAxOTksXG4gICAgICAgICAgICAxODQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMTMzLFxuICAgICAgICAgICAgOTIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQxLFxuICAgICAgICAgICAgOTgsXG4gICAgICAgICAgICA1MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTg1LFxuICAgICAgICAgICAgNjQsXG4gICAgICAgICAgICAyNCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA0MyxcbiAgICAgICAgICAgIDIxLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzaXhcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICAxODgsXG4gICAgICAgICAgICAyNDUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTY5LFxuICAgICAgICAgICAgMTQ5LFxuICAgICAgICAgICAgMjI4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE0NCxcbiAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgIDIxMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgOTAsXG4gICAgICAgICAgICA3OCxcbiAgICAgICAgICAgIDEyNixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNyxcbiAgICAgICAgICAgIDI0LFxuICAgICAgICAgICAgMzcsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59OyIsICJpbXBvcnQgY29yZUNvbmZpZyBmcm9tICcuL2dlbmVyYXRlZC9tYXBzL2NvcmUtdmFycy1nZXR0ZXItbWFwJztcbmltcG9ydCB0aGVtZUNvbmZpZyBmcm9tICcuL2dlbmVyYXRlZC9tYXBzL3RoZW1lLXZhcnMtZ2V0dGVyLW1hcCc7XG5pbXBvcnQgY29yZVNldENvbmZpZyBmcm9tICcuL2dlbmVyYXRlZC9tYXBzL2NvcmUtdmFycy1zZXR0ZXItbWFwJztcbmltcG9ydCB0aGVtZVNldENvbmZpZyBmcm9tICcuL2dlbmVyYXRlZC9tYXBzL3RoZW1lLXZhcnMtc2V0dGVyLW1hcCc7XG5pbXBvcnQgcHhMaWdodFdlYkdsQ29uZmlnIGZyb20gJy4vZ2VuZXJhdGVkL21hcHMvcHgtbGlnaHQtd2ViZ2wtbWFwJztcbmltcG9ydCBweERhcmtXZWJHbENvbmZpZyBmcm9tICcuL2dlbmVyYXRlZC9tYXBzL3B4LWRhcmstd2ViZ2wtbWFwJztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgLi4uY29yZUNvbmZpZyxcbiAgLi4udGhlbWVDb25maWcsXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0Q29uZmlnID0ge1xuICAuLi5jb3JlU2V0Q29uZmlnLFxuICAuLi50aGVtZVNldENvbmZpZyxcbn07XG5cbmV4cG9ydCBjb25zdCB3ZWJHbENvbmZpZyA9IHtcbiAgcHg6IHtcbiAgICBsaWdodDoge1xuICAgICAgLi4ucHhMaWdodFdlYkdsQ29uZmlnLFxuICAgIH0sXG4gICAgZGFyazoge1xuICAgICAgLi4ucHhEYXJrV2ViR2xDb25maWcsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCB0eXBlIE1vcnRhclRoZW1lQ29uZmlnID0gdHlwZW9mIGNvbmZpZztcblxuZXhwb3J0IHR5cGUgTW9ydGFyV2ViR2xDb25maWcgPSB0eXBlb2Ygd2ViR2xDb25maWc7XG4iLCAiLy8gaW1wb3J0IHsgZGVuc2l0aWVzLCBzaXplU2NhbGUgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxuLyoqXG4gKiBPcHRpb25zIGZvciBnZW5lcmF0aW5nIGEgc2VsZWN0b3Igd2l0aCBpbmZpeCBvciBwb3N0Zml4IG1vZGlmaWVycy5cbiAqIFRoZXNlIGluZml4IG9yIHBvc3RmaXggdmFsdWVzIG11c3QgYmUgcGxhY2VkIGluIGRpZmZlcmVudCBwYXJ0cyBvZlxuICogdGhlIGdlbmVyYXRlZCBzZWxlY3RvciBkZXBlbmRpbmcgdXBvbiBpZiB0aGUgc2VsZWN0b3Igcm9vdCBpcyBhXG4gKiBgOmhvc3QoKWAgZWxlbWVudCBvciBzdGFuZGFyZCBgI2lkYC9gLmNsYXNzYC5cbiAqXG4gKiBgbm9uSG9zdEluZml4YCBhbmQgYG5vbkhvc3RQb3N0Zml4YCB3aWxsIG92ZXJyaWRlIHZhbHVlcyBwYXNzZWRcbiAqIGZvciBgaW5maXhgIGFuZCBgcG9zdGZpeGAgaWYgdGhlIHRoZSBzZWxlY3RvciByb290IGlzIG5vdCBgOmhvc3RgLlxuICogVGhpcyBpcyBzbyB0aGF0IHRoZSBzZWxlY3RvciBjYW4gYmUgdXNlZCB0byBwcm92aWRlIGRpZmZlcmVudFxuICogYmVoYXZpb3Igd2hlbiBpdCBpcyBkeW5hbWljYWxseSB3aXRoIGJvdGggOmhvc3QgYW5kIGlkL2NsYXNzXG4gKiBzZWxlY3RvcnMgKG1vc3QgbGlrZWx5IGluIG1peGlucykuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0b3JPcHRpb25zIHtcbiAgaW5maXg/OiBzdHJpbmc7XG4gIHBvc3RmaXg/OiBzdHJpbmc7XG4gIG5vbkhvc3RJbmZpeD86IHN0cmluZztcbiAgbm9uSG9zdFBvc3RmaXg/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogU3BlY2lhbCB0eXBlIHRoYXQgZGVmaW5lcyBhIFNlbGVjdG9yRmFjdG9yeSBmdW5jdGlvbi5cbiAqIFRoZXNlIGZ1bmN0aW9ucyB3b3JrIGV4YWN0bHkgbGlrZSBnbG9iYWwgc2VsZWN0b3IoKSBmdW5jdGlvblxuICogZXhjZXB0IHRoZSBzZWxlY3RvclJvb3QgYW5kIHNvbWUgcG9zc2libGUgaW5maXggb3IgcG9zdGZpeCB2YWx1ZXNcbiAqIGhhdmUgYWxyZWFkeSBiZWVuIHNldCBieSBhIHBhcmVudCBtaXhpbi5cbiAqL1xuZXhwb3J0IHR5cGUgU2VsZWN0b3JGYWN0b3J5ID0gKG9wdGlvbnM/OiBTZWxlY3Rvck9wdGlvbnMpID0+IHN0cmluZztcblxuLyoqIERldGVybWluZXMgaWYgYSBjbGFzcyBpcyBgOmhvc3RgIG9yIG5vdCAqL1xuZXhwb3J0IGNvbnN0IGlzSG9zdENsYXNzID0gKHNlbGVjdG9yUm9vdDogc3RyaW5nKSA9PlxuICBbXG4gICAgJzpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCcsIC8vIGZpcnN0IHNpbmNlIGl0IHdpbGwgYmUgdGhlIG1vc3QgY29tbW9uXG4gICAgJzpob3N0JyxcbiAgICAnOmhvc3Q6aG9zdCcsXG4gICAgJzpob3N0Omhvc3Q6aG9zdCcsXG4gICAgJzpob3N0Omhvc3Q6aG9zdDpob3N0JyxcbiAgICAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCcsXG4gICAgJzpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0JyxcbiAgICAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCcsXG4gIF0uaW5jbHVkZXMoc2VsZWN0b3JSb290KTtcblxuLyoqXG4gKiBDb3JlIGJ1aWxkaW5nIGJsb2NrIG9mIG91ciBDU1MgaW4gSlMgXCJtaXhpbnNcIlxuICpcbiAqIFRoaXMgZmFjdG9yeSBhbGxvd3MgbWl4aW5zIHRvIGRlY2xhcmUgdGhlaXIgb3duIHNlbGVjdG9yIHJvb3RcbiAqIGFsb25nc2lkZSB0aGVpciBvd24gaW5maXggYW5kL29yIHBvc3RmaXggb3B0aW9ucy4gVGhlIGZhY3RvcnkgcmV0dXJuc1xuICogYSBsb2NhbGl6ZWQgY3VzdG9tIHNlbGVjdG9yIGZ1bmN0aW9uIHRoYXQgdGhlIHVzZXIgY2FuIGNhbGwgd2l0aFxuICogYWRkaXRpb25hbCBpbmZpeCBvciBwb3N0Zml4IHZhbHVlcyBzbyB0aGF0IHRoZSBzZWxlY3RvciBjYW4gYmUgdXNlZFxuICogbXVsdGlwbGUgdGltZXMgd2l0aGluIHRoZSBzY29wZSBvZiB0aGUgXCJtaXhpblwiIGNhbGxiYWNrLlxuICovXG5leHBvcnQgY29uc3Qgc2VsZWN0b3JGYWN0b3J5ID1cbiAgKFxuICAgIHNlbGVjdG9yUm9vdDogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluZml4OiBpbnRlcm5hbEluZml4ID0gJycsXG4gICAgICBwb3N0Zml4OiBpbnRlcm5hbFBvc3RmaXggPSAnJyxcbiAgICAgIG5vbkhvc3RJbmZpeDogaW50ZXJuYWxOb25Ib3N0SW5maXgsXG4gICAgICBub25Ib3N0UG9zdGZpeDogaW50ZXJuYWxOb25Ib3N0UG9zdGZpeCxcbiAgICB9OiBTZWxlY3Rvck9wdGlvbnMgPSB7fVxuICApOiBTZWxlY3RvckZhY3RvcnkgPT5cbiAgKHtcbiAgICBpbmZpeCA9ICcnLFxuICAgIHBvc3RmaXggPSAnJyxcbiAgICBub25Ib3N0SW5maXggPSBudWxsLFxuICAgIG5vbkhvc3RQb3N0Zml4ID0gbnVsbCxcbiAgfTogU2VsZWN0b3JPcHRpb25zID0ge30pID0+IHtcbiAgICBpZiAoaXNIb3N0Q2xhc3Moc2VsZWN0b3JSb290KSkge1xuICAgICAgaWYgKGludGVybmFsSW5maXggfHwgaW5maXgpIHtcbiAgICAgICAgcmV0dXJuIGAke3NlbGVjdG9yUm9vdH0oJHtpbnRlcm5hbEluZml4ID8/ICcnfSR7aW5maXggPz8gJyd9KSR7aW50ZXJuYWxQb3N0Zml4ID8/ICcnfSR7XG4gICAgICAgICAgcG9zdGZpeCA/PyAnJ1xuICAgICAgICB9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgJHtzZWxlY3RvclJvb3R9JHtpbnRlcm5hbFBvc3RmaXggPz8gJyd9JHtwb3N0Zml4ID8/ICcnfWA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgJHtzZWxlY3RvclJvb3R9JHtpbnRlcm5hbE5vbkhvc3RJbmZpeCA/PyBpbnRlcm5hbEluZml4ID8/ICcnfSR7XG4gICAgICAgIG5vbkhvc3RJbmZpeCA/PyBpbmZpeCA/PyAnJ1xuICAgICAgfSR7aW50ZXJuYWxOb25Ib3N0UG9zdGZpeCA/PyBpbnRlcm5hbFBvc3RmaXggPz8gJyd9JHtub25Ib3N0UG9zdGZpeCA/PyBwb3N0Zml4ID8/ICcnfWA7XG4gICAgfVxuICB9O1xuXG4vKipcbiAqIEZ1bmN0aW9uIHVzZWQgZm9yIGdlbmVyYXRpbmcgYSBzZWxlY3RvciB3aXRoIGluZml4IG9yIHBvc3RmaXggbW9kaWZpZXJzLlxuICogVGhlc2UgaW5maXggb3IgcG9zdGZpeCB2YWx1ZXMgbXVzdCBiZSBwbGFjZWQgaW4gZGlmZmVyZW50IHBhcnRzIG9mXG4gKiB0aGUgZ2VuZXJhdGVkIHNlbGVjdG9yIGRlcGVuZGluZyB1cG9uIGlmIHRoZSBzZWxlY3RvclJvb3QgaXMgYVxuICogYDpob3N0KClgIGVsZW1lbnQgb3Igc3RhbmRhcmQgYCNpZGAvYC5jbGFzc2AuXG4gKlxuICogYG5vbkhvc3RJbmZpeGAgYW5kIGBub25Ib3N0UG9zdGZpeGAgd2lsbCBvdmVycmlkZSB2YWx1ZXMgcGFzc2VkIGZvciBgaW5maXhgXG4gKiBhbmQgYHBvc3RmaXhgIGlmIHRoZSB0aGUgc2VsZWN0b3Igcm9vdCBpcyBub3QgYDpob3N0YC4gVGhpcyBpcyBzbyB0aGF0IHRoZVxuICogc2VsZWN0b3IgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBkaWZmZXJlbnQgYmVoYXZpb3Igd2hlbiBpdCBpcyBkeW5hbWljYWxseVxuICogd2l0aCBib3RoIDpob3N0IGFuZCBpZC9jbGFzcyBzZWxlY3RvcnMgKG1vc3QgbGlrZWx5IGluIG1peGlucykuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWxlY3RvciA9IChcbiAgc2VsZWN0b3JSb290OiBzdHJpbmcsXG4gIHsgaW5maXggPSAnJywgcG9zdGZpeCA9ICcnLCBub25Ib3N0SW5maXggPSBudWxsLCBub25Ib3N0UG9zdGZpeCA9IG51bGwgfTogU2VsZWN0b3JPcHRpb25zID0ge31cbikgPT4ge1xuICBpZiAoaXNIb3N0Q2xhc3Moc2VsZWN0b3JSb290KSkge1xuICAgIHJldHVybiBpbmZpeFxuICAgICAgPyBgJHtzZWxlY3RvclJvb3R9KCR7aW5maXggPz8gJyd9KSR7cG9zdGZpeCA/PyAnJ31gXG4gICAgICA6IGAke3NlbGVjdG9yUm9vdH0ke3Bvc3RmaXggPz8gJyd9YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYCR7c2VsZWN0b3JSb290fSR7bm9uSG9zdEluZml4ID8/IGluZml4ID8/ICcnfSR7bm9uSG9zdFBvc3RmaXggPz8gcG9zdGZpeCA/PyAnJ31gO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2l6ZU1vZGlmaWVyID0gKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIHNpemU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gYGNhbGMoJHt2YWx1ZX0gKiAke2NvbmZpZy5zaXplLnNjYWxlW3NpemVdfSk7YDtcbn07XG5cbmV4cG9ydCBjb25zdCBzdHJpcFVuaXQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgve3xweHxwY3xwdHxpbnxtbXxjbXxleHxlbXxyZW18dnd8dmh8dm1pbnx2bWF4fGNofGxofH0vLCAnJyk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3RyaXBVbml0SW50ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLnJlcGxhY2UoL3t8cHh8cGN8cHR8aW58bW18Y218ZXh8ZW18cmVtfHZ3fHZofHZtaW58dm1heHxjaHxsaHx9LywgJycpLCAxMCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3RyaXBVbml0RmxvYXQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKC97fHB4fHBjfHB0fGlufG1tfGNtfGV4fGVtfHJlbXx2d3x2aHx2bWlufHZtYXh8Y2h8bGh8fS8sICcnKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2l6ZVZhcmlhbnRzTWl4aW4gPSAoXG4gIHNlbGVjdG9yUm9vdDogc3RyaW5nLFxuICBjb250ZW50OiAoc2VsZWN0b3I6IFNlbGVjdG9yRmFjdG9yeSwgdmFyaWFudDogc3RyaW5nKSA9PiBzdHJpbmdcbikgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoY29uZmlnLnNpemUuc2NhbGUpLnJlZHVjZSgoYWNjLCB2YXJpYW50KSA9PiB7XG4gICAgcmV0dXJuIGAke2FjY30gJHtjb250ZW50KFxuICAgICAgc2VsZWN0b3JGYWN0b3J5KHNlbGVjdG9yUm9vdCwge1xuICAgICAgICBpbmZpeDogYFtzaXplPVwiJHt2YXJpYW50fVwiXWAsXG4gICAgICAgIG5vbkhvc3RJbmZpeDogYC5zaXplLS0ke3ZhcmlhbnR9YCxcbiAgICAgIH0pLFxuICAgICAgdmFyaWFudFxuICAgICl9YDtcbiAgfSwgJycpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbnNpdHlWYXJpYW50c01peGluID0gKFxuICBzZWxlY3RvclJvb3Q6IHN0cmluZyxcbiAgY29udGVudDogKHNlbGVjdG9yOiBTZWxlY3RvckZhY3RvcnksIHZhcmlhbnQ6IHN0cmluZykgPT4gc3RyaW5nXG4pID0+IHtcbiAgcmV0dXJuIGNvbmZpZy5zaXplLmRlbnNpdGllcy5yZWR1Y2UoKGFjYywgdmFyaWFudCkgPT4ge1xuICAgIHJldHVybiBgJHthY2N9ICR7Y29udGVudChcbiAgICAgIHNlbGVjdG9yRmFjdG9yeShzZWxlY3RvclJvb3QsIHtcbiAgICAgICAgaW5maXg6IGBbZGVuc2l0eT1cIiR7dmFyaWFudH1cIl1gLFxuICAgICAgICBub25Ib3N0SW5maXg6IGAuZGVuc2l0eS0tJHt2YXJpYW50fWAsXG4gICAgICB9KSxcbiAgICAgIHZhcmlhbnRcbiAgICApfWA7XG4gIH0sICcnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZCA9ICgpID0+IHtcbiAgcmV0dXJuIGBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnRgO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbGxzcGFjaW5nID0gKCkgPT4ge1xuICByZXR1cm4gYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgYDtcbn07XG5cbmV4cG9ydCBjb25zdCB2aXN1YWxseUhpZGRlbiA9ICgpID0+IHtcbiAgcmV0dXJuIGBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApICFpbXBvcnRhbnQ7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGA7XG59O1xuIiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBzZWxlY3Rvciwgc2VsZWN0b3JGYWN0b3J5LCBTZWxlY3Rvck9wdGlvbnMgfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IHsgQ1NTUmVzdWx0IH0gZnJvbSAnbGl0JztcblxuY29uc3QgZGFzaENhc2UgPSAocykgPT4ge1xuICByZXR1cm4gc1xuICAgIC5yZXBsYWNlKC9bQS1aXS9nLCAobSkgPT4gJy0nICsgbS50b0xvd2VyQ2FzZSgpKVxuICAgIC5yZXBsYWNlKC8oLiopKFswLTldfFtBLVpdKSguKikvLCAnJDEtJDIkMycpO1xufTtcblxuZXhwb3J0IGNvbnN0IHBhbGV0dGVHcm91cE9wdGlvbnMgPSB7XG4gIGNvcmU6IFsncHJpbWFyeScsICdzZWNvbmRhcnknLCAndGVydGlhcnknLCAnZGFuZ2VyJ10sXG4gIHN0YXR1czogWydwcmltYXJ5JywgJ3NlY29uZGFyeScsICd0ZXJ0aWFyeScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10sXG4gIHZpejogWydvbmUnLCAndHdvJywgJ3RocmVlJywgJ2ZvdXInLCAnZml2ZScsICdzaXgnXSxcbn07XG5cbmNvbnN0IGdldE9wYWNpdHkgPSAob3BhY2l0eToga2V5b2YgdHlwZW9mIGNvbmZpZy5vcGFjaXR5IHwgbnVtYmVyIHwgc3RyaW5nKSA9PlxuICAob3BhY2l0eSA9IGNvbmZpZy5vcGFjaXR5W2Ake29wYWNpdHl9YF0gPz8gb3BhY2l0eSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JPcHRpb25zIHtcbiAgZz86ICdjb3JlJyB8ICdzdGF0dXMnIHwgJ3Zpeic7XG4gIHA6IHN0cmluZztcbiAgYz86ICdsaWdodGVyJyB8ICdsaWdodCcgfCAnYmFzZScgfCAnZGFyaycgfCAnZGFya2VyJztcbiAgbz86IGtleW9mIHR5cGVvZiBjb25maWcub3BhY2l0eSB8IG51bWJlciB8IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGNvbG9yID0gKHtcbiAgZzogZ3JvdXAgPSAnY29yZScsXG4gIHA6IHBhbGV0dGUsXG4gIGM6IGNvbG9yID0gJ2Jhc2UnLFxuICBvOiBvcGFjaXR5ID0gbnVsbCxcbn06IENvbG9yT3B0aW9ucykgPT4ge1xuICBvcGFjaXR5ID0gZ2V0T3BhY2l0eShvcGFjaXR5KTtcbiAgaWYgKG9wYWNpdHkpIHtcbiAgICByZXR1cm4gYHJnYmEodmFyKC0tbXRlLSR7ZGFzaENhc2UoZ3JvdXApfS0ke2Rhc2hDYXNlKHBhbGV0dGUpfS0ke2NvbG9yfS1yZ2IpLCAke29wYWNpdHl9KWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGByZ2IodmFyKC0tbXRlLSR7ZGFzaENhc2UoZ3JvdXApfS0ke2Rhc2hDYXNlKHBhbGV0dGUpfS0ke2NvbG9yfS1yZ2IpKWA7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvckNvbnRyYXN0ID0gKHtcbiAgZzogZ3JvdXAgPSAnY29yZScsXG4gIHA6IHBhbGV0dGUsXG4gIGM6IGNvbG9yID0gJ2Jhc2UnLFxuICBvOiBvcGFjaXR5ID0gbnVsbCxcbn06IENvbG9yT3B0aW9ucykgPT4ge1xuICBvcGFjaXR5ID0gZ2V0T3BhY2l0eShvcGFjaXR5KTtcbiAgaWYgKG9wYWNpdHkpIHtcbiAgICByZXR1cm4gYHJnYmEodmFyKC0tbXRlLSR7ZGFzaENhc2UoZ3JvdXApfS0ke2Rhc2hDYXNlKHBhbGV0dGUpfS0ke2NvbG9yfS1jLXJnYiksICR7b3BhY2l0eX0pYDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYHJnYih2YXIoLS1tdGUtJHtkYXNoQ2FzZShncm91cCl9LSR7ZGFzaENhc2UocGFsZXR0ZSl9LSR7Y29sb3J9LWMtcmdiKSlgO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxzIHRoZSBjYWxsYmFjayB3aXRoIGVhY2ggcGFsZXR0ZSBpbiB0aGUgcmVxdWVzdGVkIHBhbGV0dGUgZ3JvdXBcbiAqIHRoZW4gY29tYmluZXMgYWxsIG9mIHRoZSByZXR1cm5lZCBDU1MgdGVtcGxhdGUgc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGNvbnN0IGZvckVhY2hQR1ZhcmlhbnQgPSA8UGFsZXR0ZUdyb3VwIGV4dGVuZHMga2V5b2YgdHlwZW9mIHBhbGV0dGVHcm91cE9wdGlvbnM+KFxuICBncm91cDogUGFsZXR0ZUdyb3VwLFxuICBjYWxsYmFjazogKGdyb3VwOiBQYWxldHRlR3JvdXAsIHBhbGV0dGU6IHN0cmluZykgPT4gQ1NTUmVzdWx0IHwgc3RyaW5nXG4pID0+IHtcbiAgcmV0dXJuIHBhbGV0dGVHcm91cE9wdGlvbnNbZ3JvdXBdLnJlZHVjZShcbiAgICAoYWNjLCBwYWxldHRlKSA9PiBgJHthY2N9JHtjYWxsYmFjayhncm91cCwgcGFsZXR0ZSl9YCxcbiAgICAnJ1xuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBUb2tlbk9wdGlvbnMge1xuICBuOiBrZXlvZiB0eXBlb2YgY29uZmlnLmNvbG9yO1xuICBvPzoga2V5b2YgdHlwZW9mIGNvbmZpZy5vcGFjaXR5IHwgbnVtYmVyIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdG9rZW4gPSAoeyBuOiBuYW1lLCBvOiBvcGFjaXR5ID0gbnVsbCB9OiBUb2tlbk9wdGlvbnMpID0+IHtcbiAgb3BhY2l0eSA9IGdldE9wYWNpdHkob3BhY2l0eSk7XG4gIGlmIChvcGFjaXR5KSB7XG4gICAgcmV0dXJuIGByZ2JhKHZhcigtLW10ZS0ke2Rhc2hDYXNlKG5hbWUpfS1yZ2IpLCAke29wYWNpdHl9KWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGByZ2IodmFyKC0tbXRlLSR7ZGFzaENhc2UobmFtZSl9LXJnYikpYDtcbiAgfVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZVRva2VuT3B0aW9ucyB7XG4gIG46IGtleW9mIHR5cGVvZiBjb25maWcuc3RhdGVUb2tlbjtcbiAgczogc3RyaW5nO1xuICBvPzoga2V5b2YgdHlwZW9mIGNvbmZpZy5vcGFjaXR5IHwgbnVtYmVyIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3Qgc3RhdGVUb2tlbiA9ICh7IG46IG5hbWUsIHM6IHN0YXRlLCBvOiBvcGFjaXR5IH06IFN0YXRlVG9rZW5PcHRpb25zKSA9PiB7XG4gIG9wYWNpdHkgPSBnZXRPcGFjaXR5KG9wYWNpdHkpO1xuICBpZiAob3BhY2l0eSkge1xuICAgIHJldHVybiBgcmdiYSh2YXIoLS1tdGUtaXQtJHtkYXNoQ2FzZShuYW1lKX0tJHtzdGF0ZX0tcmdiKSwgJHtvcGFjaXR5fSlgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgcmdiYSh2YXIoLS1tdGUtaXQtJHtkYXNoQ2FzZShuYW1lKX0tJHtzdGF0ZX0tcmdiKSwgdmFyKC0tbXRlLWl0LSR7ZGFzaENhc2UoXG4gICAgICBuYW1lXG4gICAgKX0tJHtzdGF0ZX0tYSkpYDtcbiAgfVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZVRva2VuTWl4aW5PcHRpb25zIHtcbiAgc2VsZWN0b3JPcHRpb25zPzogU2VsZWN0b3JPcHRpb25zO1xuICBuOiBrZXlvZiB0eXBlb2YgY29uZmlnLnN0YXRlVG9rZW47XG4gIGZvclN0YXRlcz86IHN0cmluZ1tdO1xuICBmb3JQcm9wcz86IHN0cmluZ1tdO1xuICBhdXRvQ29udHJhc3Q/OiBib29sZWFuO1xuICB1c2VJbXBvcnRhbnQ/OiBib29sZWFuO1xuICBhc092ZXJsYXk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3Qgc3RhdGVUb2tlbk1peGluID0gKFxuICBzZWxlY3RvclJvb3Q6IHN0cmluZyxcbiAge1xuICAgIHNlbGVjdG9yT3B0aW9ucyA9IHsgaW5maXg6ICcnLCBwb3N0Zml4OiAnJyB9LFxuICAgIG46IG5hbWUsXG4gICAgZm9yU3RhdGVzID0gWydkZWZhdWx0JywgJ2hvdmVyJywgJ2FjdGl2ZSddLFxuICAgIGZvclByb3BzID0gWydiYWNrZ3JvdW5kJ10sXG4gICAgdXNlSW1wb3J0YW50ID0gZmFsc2UsXG4gICAgYXNPdmVybGF5ID0gZmFsc2UsXG4gIH06IFN0YXRlVG9rZW5NaXhpbk9wdGlvbnNcbikgPT4ge1xuICBpZiAoYXNPdmVybGF5KSB7XG4gICAgZm9yU3RhdGVzID0gZm9yU3RhdGVzLmZpbHRlcigoc3RhdGUpID0+IHN0YXRlICE9PSAnZGVmYXVsdCcpO1xuICB9XG4gIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0b3JGYWN0b3J5KHNlbGVjdG9yUm9vdCwgc2VsZWN0b3JPcHRpb25zKTtcbiAgY29uc3Qgc2V0SW50ZXJhY3RpdmVQcm9wcyA9ICh7IG5hbWUsIHN0YXRlLCBmb3JQcm9wcywgdXNlSW1wb3J0YW50ID0gZmFsc2UgfSkgPT4ge1xuICAgIHJldHVybiBmb3JQcm9wcy5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuICAgICAgcmV0dXJuIGAke2FjY31cbiAgICAgICAgJHtwcm9wfTogJHtzdGF0ZVRva2VuKHsgbjogbmFtZSwgczogc3RhdGUgfSl9JHt1c2VJbXBvcnRhbnQgPyAnICFpbXBvcnRhbnQ7JyA6ICc7J31cbiAgICAgIGA7XG4gICAgfSwgJycpO1xuICB9O1xuXG4gIHJldHVybiBmb3JTdGF0ZXMucmVkdWNlKChhY2MsIHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIGAke2FjY31cbiAgICAgICR7c2VsZWN0b3IoeyBpbmZpeDogc3RhdGUgIT09ICdkZWZhdWx0JyA/IGA6JHtzdGF0ZX1gIDogJycgfSl9JHtcbiAgICAgIGFzT3ZlcmxheVxuICAgICAgICA/IGA6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7YFxuICAgICAgICA6IGAge1xuICAgICAgYFxuICAgIH1cbiAgICAgICAgJHtzZXRJbnRlcmFjdGl2ZVByb3BzKHsgbmFtZSwgc3RhdGUsIGZvclByb3BzLCB1c2VJbXBvcnRhbnQgfSl9XG4gICAgICB9XG4gICAgYDtcbiAgfSwgJycpO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBGb2N1c09wdGlvbnMge1xuICBzZWxlY3Rvck9wdGlvbnM/OiBTZWxlY3Rvck9wdGlvbnM7XG4gIHNlbGVjdG9yU3RhdGU/OiAnOmZvY3VzLXZpc2libGUnIHwgJzpmb2N1cycgfCAnOmhvdmVyJyB8IG51bGw7XG4gIHNlbGVjdG9yT3V0bGV0PzogJzo6YmVmb3JlJyB8ICc6OmFmdGVyJztcbiAgZmx1c2g/OiBib29sZWFuO1xuICByYWRpdXM/OiBzdHJpbmc7XG4gIGluc2V0Pzogc3RyaW5nO1xuICByYWRpdXNUb3BMZWZ0Pzogc3RyaW5nO1xuICByYWRpdXNUb3BSaWdodD86IHN0cmluZztcbiAgcmFkaXVzQm90dG9tTGVmdD86IHN0cmluZztcbiAgcmFkaXVzQm90dG9tUmlnaHQ/OiBzdHJpbmc7XG4gIG9mZnNldFRvcD86IHN0cmluZztcbiAgb2Zmc2V0UmlnaHQ/OiBzdHJpbmc7XG4gIG9mZnNldEJvdHRvbT86IHN0cmluZztcbiAgb2Zmc2V0TGVmdD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGZvY3VzZWRNaXhpbiA9IChcbiAgc2VsZWN0b3JSb290OiBzdHJpbmcsXG4gIHtcbiAgICBzZWxlY3Rvck9wdGlvbnMgPSB7IGluZml4OiAnJywgcG9zdGZpeDogJycgfSxcbiAgICBzZWxlY3RvclN0YXRlID0gJzpmb2N1cy12aXNpYmxlJyxcbiAgICBzZWxlY3Rvck91dGxldCA9ICc6OmJlZm9yZScsXG4gICAgZmx1c2ggPSBmYWxzZSxcbiAgICByYWRpdXMgPSAnNHB4JyxcbiAgICBpbnNldCxcbiAgICByYWRpdXNUb3BMZWZ0LFxuICAgIHJhZGl1c1RvcFJpZ2h0LFxuICAgIHJhZGl1c0JvdHRvbUxlZnQsXG4gICAgcmFkaXVzQm90dG9tUmlnaHQsXG4gICAgb2Zmc2V0VG9wID0gJy00cHgnLFxuICAgIG9mZnNldFJpZ2h0ID0gJy00cHgnLFxuICAgIG9mZnNldEJvdHRvbSA9ICctNHB4JyxcbiAgICBvZmZzZXRMZWZ0ID0gJy00cHgnLFxuICB9OiBGb2N1c09wdGlvbnNcbikgPT4ge1xuICBpZiAoZmx1c2gpIHtcbiAgICBvZmZzZXRUb3AgPSAnMHB4JztcbiAgICBvZmZzZXRSaWdodCA9ICcwcHgnO1xuICAgIG9mZnNldEJvdHRvbSA9ICcwcHgnO1xuICAgIG9mZnNldExlZnQgPSAnMHB4JztcbiAgfVxuICBpZiAoIXJhZGl1c1RvcExlZnQpIHtcbiAgICByYWRpdXNUb3BMZWZ0ID0gcmFkaXVzO1xuICB9XG4gIGlmICghcmFkaXVzVG9wUmlnaHQpIHtcbiAgICByYWRpdXNUb3BSaWdodCA9IHJhZGl1cztcbiAgfVxuICBpZiAoIXJhZGl1c0JvdHRvbUxlZnQpIHtcbiAgICByYWRpdXNCb3R0b21MZWZ0ID0gcmFkaXVzO1xuICB9XG4gIGlmICghcmFkaXVzQm90dG9tUmlnaHQpIHtcbiAgICByYWRpdXNCb3R0b21SaWdodCA9IHJhZGl1cztcbiAgfVxuXG4gIHJldHVybiBgJHtzZWxlY3RvcihzZWxlY3RvclJvb3QsIHtcbiAgICAuLi5zZWxlY3Rvck9wdGlvbnMsXG4gICAgaW5maXg6IGAke3NlbGVjdG9yT3B0aW9ucy5pbmZpeCA/PyAnJ30ke1xuICAgICAgc2VsZWN0b3JTdGF0ZSA/PyAnJ1xuICAgIH06bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpYCxcbiAgICBwb3N0Zml4OiBgJHtzZWxlY3Rvck9wdGlvbnMucG9zdGZpeCA/PyAnJ30ke3NlbGVjdG9yT3V0bGV0ID8/ICcnfWAsXG4gIH0pfSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICR7XG4gICAgICBpbnNldFxuICAgICAgICA/ICcnXG4gICAgICAgIDogYHRvcDogJHtvZmZzZXRUb3B9O1xuICAgICAgcmlnaHQ6ICR7b2Zmc2V0UmlnaHR9O1xuICAgICAgYm90dG9tOiAke29mZnNldEJvdHRvbX07XG4gICAgICBsZWZ0OiAke29mZnNldExlZnR9O2BcbiAgICB9XG4gICAgJHtpbnNldCA/IGBpbnNldDogJHtpbnNldH07YCA6ICcnfVxuICAgIGJvcmRlcjogc29saWQgMnB4ICR7dG9rZW4oeyBuOiAnZm9jdXMnIH0pfTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tbXRlLWxpZ2h0KTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAke3JhZGl1c1RvcExlZnR9O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAke3JhZGl1c1RvcFJpZ2h0fTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAke3JhZGl1c0JvdHRvbUxlZnR9O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAke3JhZGl1c0JvdHRvbVJpZ2h0fTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb250ZW50OiAnJztcbiAgICB6LWluZGV4OiA5O1xuICB9YDtcbn07XG4iLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGZvbnRCYXNlTWl4aW4gPSAoZmFtaWx5OiBrZXlvZiB0eXBlb2YgY29uZmlnLmZvbnQuZmFtaWx5ID0gJ3NhbnMnKSA9PiBgXG4gIGZvbnQtZmFtaWx5OiAke2NvbmZpZy5mb250LmZhbWlseVtmYW1pbHldfTtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG5gO1xuXG5leHBvcnQgaW50ZXJmYWNlIGZvbnRTZXRPcHRpb25zIHtcbiAgczoga2V5b2YgdHlwZW9mIGNvbmZpZy5mb250LnNldDtcbiAgcmF0aW8/OiB0eXBlb2YgY29uZmlnLmZvbnQucmF0aW9ba2V5b2YgdHlwZW9mIGNvbmZpZy5mb250LnJhdGlvXTtcbiAgZm9udEZhbWlseT86IGtleW9mIHR5cGVvZiBjb25maWcuZm9udC5mYW1pbHk7XG4gIGltcG9ydGFudD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBmb250U2V0TWl4aW4gPSAoe1xuICBzOiBzZXQsXG4gIHJhdGlvLFxuICBmb250RmFtaWx5ID0gJ3NhbnMnLFxuICBpbXBvcnRhbnQgPSBmYWxzZSxcbn06IGZvbnRTZXRPcHRpb25zKSA9PiB7XG4gIGNvbnN0IHR5cGVTdHlsZSA9IGNvbmZpZy5mb250LnNldFtzZXRdO1xuICBpZiAocmF0aW8pIHtcbiAgICByZXR1cm4gYFxuICAgICAgJHtmb250QmFzZU1peGluKGZvbnRGYW1pbHkpfVxuICAgICAgZm9udC1zaXplOiBjYWxjKCR7dHlwZVN0eWxlLmZvbnRTaXplfSAqICR7cmF0aW99KSR7aW1wb3J0YW50ID8gJyAhaW1wb3J0YW50JyA6ICcnfTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3R5cGVTdHlsZS5mb250V2VpZ2h0fSR7aW1wb3J0YW50ID8gJyAhaW1wb3J0YW50JyA6ICcnfTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAke3R5cGVTdHlsZS5saW5lSGVpZ2h0fSR7aW1wb3J0YW50ID8gJyAhaW1wb3J0YW50JyA6ICcnfTtcbiAgICBgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgXG4gICAgICAke2ZvbnRCYXNlTWl4aW4oZm9udEZhbWlseSl9XG4gICAgICBmb250LXNpemU6ICR7dHlwZVN0eWxlLmZvbnRTaXplfSR7aW1wb3J0YW50ID8gJyAhaW1wb3J0YW50JyA6ICcnfTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3R5cGVTdHlsZS5mb250V2VpZ2h0fSR7aW1wb3J0YW50ID8gJyAhaW1wb3J0YW50JyA6ICcnfTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAke3R5cGVTdHlsZS5saW5lSGVpZ2h0fSR7aW1wb3J0YW50ID8gJyAhaW1wb3J0YW50JyA6ICcnfTtcbiAgICBgO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZm9udE92ZXJmbG93RWxsaXBzaXNNaXhpbiA9ICgpID0+IGBcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNpbmc6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmV4cG9ydCBjb25zdCBmb250U2V0SW5oZXJpdE1peGluID0gKCkgPT4gYFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG5gO1xuIiwgIi8vIGltcG9ydCB7IHRyYW5zaXRpb25EdXJhdGlvbiwgdGltaW5nRnVuY3Rpb24gfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHByb3A6IHN0cmluZztcbiAgZHVyYXRpb24/OiBzdHJpbmc7XG4gIGRlbGF5Pzogc3RyaW5nO1xuICB0aW1pbmdGbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHRyYW5zaXRpb24gPSAoe1xuICBwcm9wLFxuICBkdXJhdGlvbiA9IGNvbmZpZy5hbmltYXRpb24udHJhbnNpdGlvbkR1cmF0aW9uLmRlZmF1bHQsXG4gIGRlbGF5ID0gJzBtcycsXG4gIHRpbWluZ0ZuID0gY29uZmlnLmFuaW1hdGlvbi50aW1pbmdGdW5jdGlvbi5zdGFuZGFyZCxcbn0pID0+IHtcbiAgcmV0dXJuIGAke3Byb3B9ICR7ZHVyYXRpb259ICR7ZGVsYXl9ICR7dGltaW5nRm59YDtcbn07XG4iLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IHRva2VuIH0gZnJvbSAnLi90aGVtZSc7XG5cbmV4cG9ydCBjb25zdCBlbGV2YXRpb24gPSAoelZhbHVlOiBrZXlvZiB0eXBlb2YgY29uZmlnLmVsZXZhdGlvbi5sZXZlbCB8IG51bWJlcikgPT4ge1xuICByZXR1cm4gYCR7Y29uZmlnLmVsZXZhdGlvbi5sZXZlbFt6VmFsdWVdfSAke3Rva2VuKHtcbiAgICBuOiAnZWxldmF0aW9uQmFzZScsXG4gICAgbzogY29uZmlnLmVsZXZhdGlvbi5vcGFjaXR5W3pWYWx1ZV0sXG4gIH0pfWA7XG59O1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWNvbG9yOnZhcigtLW10ZS1saWdodCk7LS1iYWNrZ3JvdW5kOnZhcigtLW10ZS1kYXJrKTstLXotaW5kZXg6dmFyKC0tbXRlLXotaW5kZXgtMjApOy0tcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXhsKTstLXBhZGRpbmcteDp2YXIoLS1tdGUtc3BhY2UtbWQpOy0tcGFkZGluZy15OnZhcigtLW10ZS1zcGFjZS1zbSk7cG9pbnRlci1ldmVudHM6YXV0b30udG9vbHRpcHtmb250LWZhbWlseTp2YXIoLS1tdGUtZm9udC1mYW1pbHktc2Fucyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Ym9yZGVyLXJhZGl1czp2YXIoLS1yYWRpdXMpO2NvbG9yOnZhcigtLWNvbG9yKTtkaXNwbGF5Om5vbmU7Zm9udC1zaXplOnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC13ZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWxpbmUtaGVpZ2h0KTttYXgtd2lkdGg6MjUwcHg7b3BhY2l0eTowO3BhZGRpbmc6dmFyKC0tcGFkZGluZy15KSB2YXIoLS1wYWRkaW5nLXgpO3Bvc2l0aW9uOmZpeGVkO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt6LWluZGV4OnZhcigtLXotaW5kZXgpfS5hcnJvdywudG9vbHRpcHtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpfS5hcnJvd3toZWlnaHQ6MTBweDtwb3NpdGlvbjphYnNvbHV0ZTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt3aWR0aDoxMHB4fWA7IiwgIi8qIGVzbGludC1kaXNhYmxlIHdjL25vLXNlbGYtY2xhc3MgKi9cbmltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgc2VsZWN0b3JGYWN0b3J5LCBTZWxlY3RvckZhY3RvcnkgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQge1xuICBjb25zdHJ1Y3RJbnN0YW5jZVN0eWxlcyxcbiAgZ2VuZXJhdGVTZWxlY3RvcnNGcm9tU3R5bGVNYXAsXG4gIFNlbGVjdG9yU3R5bGVzLFxuICBTdHlsZU1hcCxcbiAgVW5zdWJzY3JpYmVyLFxufSBmcm9tICcuLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgdW5zYWZlSFRNTCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvdW5zYWZlLWh0bWwuanMnO1xuaW1wb3J0IHsgTW9ydGFyUHJlc2V0VGhlbWUgfSBmcm9tICcuLi9wcmVzZXRzJztcblxuLy8gRGlzYWJsZSB0aGlzIHdhcm5pbmcgZm9yIG5vdyBieSBwcmUtbWFya2luZyBpdCBhcyBpc3N1ZWQgc28gdXNlcnMgZG9uJ3QgaGF2ZSB0byBzZWUgaXRcbi8vIFRPRE86IEFzayBsaXQgdGVhbSB3aHkgdGhpcyBpcyB0aHJvd24gZXZlcnl3aGVyZSBhbmQgd2hhdCBhbHRlcm5hdGl2ZXMgYXJlIGZvciBwcmVzZXQgc29sdXRpb25cbmdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MgPz89IG5ldyBTZXQoKTtcbmdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MuYWRkKFxuICAnT3ZlcnJpZGluZyBSZWFjdGl2ZUVsZW1lbnQuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKCkgaXMgZGVwcmVjYXRlZC4gVGhlIG92ZXJyaWRlIHdpbGwgbm90IGJlIGNhbGxlZCB3aXRoIHN0YW5kYXJkIGRlY29yYXRvcnMgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvbm8tb3ZlcnJpZGUtZ2V0LXByb3BlcnR5LWRlc2NyaXB0b3IgZm9yIG1vcmUgaW5mb3JtYXRpb24uJ1xuKTtcblxuZXhwb3J0IGNsYXNzIE10ZUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHJpdmF0ZSBfX2luc3RhbmNlU3R5bGVTaGVldE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBTZWxlY3RvclN0eWxlc1tdPigpO1xuICBwcml2YXRlIF9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUgPSBmYWxzZTtcblxuICAvKiogU2V0IHRvIHRydWUgd2hlbiBmaXJzdFVwZGF0ZWQgaXMgZmlyc3QgY2FsbGVkICovXG4gIHByb3RlY3RlZCBfX2ZpcnN0VXBkYXRlZCA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBpbnN0YW5jZVN0eWxlcztcblxuICAvKipcbiAgICogQWxsIHN1YnMgcHVzaGVkIHRvIHRoaXMgYXJyYXkgd2lsbCBiZSBjbGVhcmVkIGluIHRoZSBkaXNjb25uZWN0ZWRDYWxsYmFja1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdWJzOiBVbnN1YnNjcmliZXJbXSA9IFtdO1xuXG4gIC8qKiBTdHlsZSBtYXBwaW5ncyB0aGF0IGFyZSBhcHBsaWVkIHRvIHRoZSBob3N0IGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgcmVmbGVjdDogdHJ1ZSB9KSBzZT86IFN0eWxlTWFwO1xuXG4gIC8qKlxuICAgKiBUaGUgdGhlbWUgdG8gdXNlIGZvciBzdHlsaW5nIHRoaXMgY29tcG9uZW50LiBPdmVycmlkZXMgdGhlIGdsb2JhbCBwcmVzZXQgZm9yIHRoaXMgaW5zdGFuY2Ugb2YgdGhpcyBjb21wb25lbnQuXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGF0dHJpYnV0ZTogJ2RhdGEtbXRlLXRoZW1lJyB9KVxuICBzZXQgdGhlbWUodGhlbWU6IHN0cmluZykge1xuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5fdGhlbWU7XG4gICAgdGhpcy5fdGhlbWUgPSB0aGVtZTtcbiAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ3RoZW1lJywgb2xkVmFsdWUpO1xuICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgYSBiZXR0ZXIgd2F5IHRvIHNvbHZlIHRoaXMgZm9yIGFsbCBwcmVzZXRzXG4gICAgaWYgKHRoaXMuX19sb2NhbFByZXNldFRoZW1lKSB7XG4gICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBudWxsKSk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4gdGhpcy5yZXF1ZXN0VXBkYXRlKCd0aGVtZScsIG51bGwpKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHRoZW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lID8/IHRoaXMuX19sb2NhbFByZXNldFRoZW1lPy5uYW1lO1xuICB9XG4gIHByaXZhdGUgX3RoZW1lOiBzdHJpbmc7XG5cbiAgLyoqIFVzZWQgdG8gZGVjbGFyZSBhIGxvY2FsIHRoZW1lIHZhbHVlIGRldGVybWluZWQgYnkgdGhlIGxvY2FsIHByZXNldCBpZiBpdCBpcyBzZXQuICovXG4gIEBzdGF0ZSgpIHByb3RlY3RlZCBfX2xvY2FsUHJlc2V0VGhlbWU6IE1vcnRhclByZXNldFRoZW1lO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIHNlbGVjdG9yIHRvIGhhdmUgaW5zdGFuY2Ugc3R5bGVzIHRhcmdldCBhIHNwZWNpZmljIGlubmVyIGVsZW1lbnQuXG4gICAqIFVzZWZ1bCBpbiBzcGVjaWZpYyBzY2VuYXJpb3Mgd2hlcmUgZm9jdXMgaXMgZGVsZWdhdGVkIGxpa2UgYnV0dG9ucy5cbiAgICpcbiAgICogQnkgZGVmYXVsdCB0aGlzIHJlcGVhdHMgYDpob3N0YCBzaXggdGltZXMgdG8gcHJvdmlkZSBhIHNwZWNpZmljaXR5IG9mIDZcbiAgICovXG4gIHByb3RlY3RlZCBpbnN0YW5jZVN0eWxlU2VsZWN0b3JSb290ID0gJzpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCc7XG5cbiAgLyoqXG4gICAqIENhbiBiZSBjYWxsZWQgYnkgZGVyaXZlZCBjbGFzc2VzIHRvIHJlZ2lzdGVyIG5ldyBpbnN0YW5jZSBsZXZlbCBkeW5hbWljIHN0eWxlcy5cbiAgICogV2hlbiBjYWxsZWQgdGhlIGluc3RhbmNlIHN0eWxlc2hlZXQgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZSBsYXRlc3Qgc3R5bGVzIHRoaXMgdXBkYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIHNldEluc3RhbmNlU3R5bGUoaWQ6IHN0cmluZywgc2VsZWN0b3I6IFNlbGVjdG9yRmFjdG9yeSwgc3R5bGVNYXA6IFN0eWxlTWFwKSB7XG4gICAgLy8gV2UgcGFyc2UgYWxsIHN0eWxlIGluZm9ybWF0aW9uIGhlcmUgYW5kIHNjb3BlIGl0IHRvIHRoZSBnaXZlbiBpZC4gVGhpcyBlbnN1cmVzIHdlXG4gICAgLy8gb25seSBldmVyIG5lZWQgdG8gcmUtcGFyc2UgdGhpcyBwb3J0aW9uIG9mIHN0eWxlIGluZm9ybWF0aW9uIHdoZW4gaXRzIGFzc29jaWF0ZWRcbiAgICAvLyBpZCBpcyB1cGRhdGVkIGFnYWluLlxuICAgIHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXRNYXAuc2V0KGlkLCBnZW5lcmF0ZVNlbGVjdG9yc0Zyb21TdHlsZU1hcChzZWxlY3Rvciwgc3R5bGVNYXApKTtcbiAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgLyoqIEEgY3VzdG9tIGhvb2sgdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBpbiBkZXJpdmVkIGNsYXNzZXMgdG8gc2V0IGluc3RhbmNlIHN0eWxlcyBhcyBuZWVkZWQgKi9cbiAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKCdzZScpKSB7XG4gICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoJ3NlJywgc2VsZWN0b3JGYWN0b3J5KHRoaXMuaW5zdGFuY2VTdHlsZVNlbGVjdG9yUm9vdCksIHRoaXMuc2UgPz8ge30pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCB3aWxsVXBkYXRlKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLndpbGxVcGRhdGUoY2hhbmdlZFByb3BzKTtcblxuICAgIC8vIENhbGwgdGhlIHVwZGF0ZUluc3RhbmNlU3R5bGVzIGhvb2tcbiAgICB0aGlzLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBDaGVjayBpZiBpbnN0YW5jZSBzdHlsZXMgbmVlZCB0byBiZSByZXJlbmRlcmVkXG4gICAgaWYgKHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXROZWVkc1VwZGF0ZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZVN0eWxlcyA9IHVuc2FmZUhUTUwoXG4gICAgICAgIGA8c3R5bGUgaWQ9XCJfX2luc3RhbmNlLXN0eWxlc1wiPiR7Y29uc3RydWN0SW5zdGFuY2VTdHlsZXMoXG4gICAgICAgICAgdGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE1hcFxuICAgICAgICApfTwvc3R5bGU+YFxuICAgICAgKTtcbiAgICAgIHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXROZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgdGhpcy5fX2ZpcnN0VXBkYXRlZCA9IHRydWU7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgdGhpcy5zdWJzLmZvckVhY2goKHVuc3ViKSA9PiB1bnN1YigpKTtcbiAgICB0aGlzLnN1YnMgPSBbXTtcbiAgfVxufVxuIiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7IFByb3BlcnR5TWFwcGVyLCBTdHlsZVByb3BlcnR5IH0gZnJvbSAnLi9jc3MtaW4tanMudHlwZXMnO1xuXG5jb25zdCBwcm9wZXJ0eU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgc3RyaW5nW10+ID0ge1xuICBtOiAnbWFyZ2luJyxcbiAgbXg6IFsnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCddLFxuICBteTogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gIG10OiAnbWFyZ2luVG9wJyxcbiAgbXI6ICdtYXJnaW5SaWdodCcsXG4gIG1iOiAnbWFyZ2luQm90dG9tJyxcbiAgbWw6ICdtYXJnaW5MZWZ0JyxcbiAgcDogJ3BhZGRpbmcnLFxuICBweDogWydwYWRkaW5nTGVmdCcsICdwYWRkaW5nUmlnaHQnXSxcbiAgcHk6IFsncGFkZGluZ1RvcCcsICdwYWRkaW5nQm90dG9tJ10sXG4gIHB0OiAncGFkZGluZ1RvcCcsXG4gIHByOiAncGFkZGluZ1JpZ2h0JyxcbiAgcGI6ICdwYWRkaW5nQm90dG9tJyxcbiAgcGw6ICdwYWRkaW5nTGVmdCcsXG4gIGQ6ICdkaXNwbGF5JyxcbiAgYTogJ2FsaWduSXRlbXMnLFxuICBqOiAnanVzdGlmeUNvbnRlbnQnLFxuICBkaXJlY3Rpb246ICdmbGV4RGlyZWN0aW9uJyxcbiAgc2hyaW5rOiAnZmxleFNocmluaycsXG4gIGdyb3c6ICdmbGV4R3JvdycsXG4gIHdyYXA6ICdmbGV4V3JhcCcsXG4gIHc6ICd3aWR0aCcsXG4gIG1heHc6ICdtYXhXaWR0aCcsXG4gIG1pbnc6ICdtaW5XaWR0aCcsXG4gIGg6ICdoZWlnaHQnLFxuICBtYXhoOiAnbWF4SGVpZ2h0JyxcbiAgbWluaDogJ21pbkhlaWdodCcsXG4gIGZzOiAnZm9udFNpemUnLFxuICBmdzogJ2ZvbnRXZWlnaHQnLFxuICBiZzogJ2JhY2tncm91bmQnLFxuICBjOiAnY29sb3InLFxuICBlbGV2YXRpb246ICdib3hTaGFkb3cnLFxufTtcblxuLyoqIE1hcHMgcHJvcGVydHkgc2hvcnRoYW5kIHZhbHVlcyB0byBvbmUgb3IgbWFueSBmdWxsIGNzcyBwcm9wZXJ0aWVzICovXG5leHBvcnQgY29uc3QgcHJvcFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLnJlZHVjZSgoYWNjLCBwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkUHJvcHMgPSBwcm9wZXJ0eU1hcFtwcm9wTWFwLnByb3BdID8/IHByb3BNYXAucHJvcDtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uYWNjLFxuICAgICAgLi4uKEFycmF5LmlzQXJyYXkobWFwcGVkUHJvcHMpXG4gICAgICAgID8gbWFwcGVkUHJvcHMubWFwKChwcm9wKSA9PiAoeyBwcm9wLCB2YWx1ZTogcHJvcE1hcC52YWx1ZSB9KSlcbiAgICAgICAgOiBbeyBwcm9wOiBtYXBwZWRQcm9wcywgdmFsdWU6IHByb3BNYXAudmFsdWUgfV0pLFxuICAgIF07XG4gIH0sIFtdKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgQG1vcnRhci9zdHlsZXMgY29uZmlnIHZhbHVlIGZvciBhIGdpdmVuIGRvdCBub3RhdGVkIHN0cmluZy5cbiAqIE51bWJlcnMgYW5kIG5vbi1kb3Qgbm90YXRlZCBzdHJpbmcgd2lsbCBqdXN0IGJlIHJldHVybmVkIGFzIGlzLlxuICovXG5leHBvcnQgY29uc3QgZG90U3RyaW5nVG9Db25maWdWYWx1ZSA9ICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb25maWdQYXRoID0gdmFsdWUuc3BsaXQoJy4nKTtcbiAgICAgIGNvbnN0IGNvbmZpZ1ZhbHVlID0gY29uZmlnUGF0aC5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBhY2Nba2V5XTtcbiAgICAgIH0sIGNvbmZpZyk7XG4gICAgICByZXR1cm4gY29uZmlnVmFsdWUgPz8gdmFsdWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn07XG5cbi8qKiBNYXBzIGRvdCBub3RhdGVkIHN0cmluZyB2YWx1ZXMgdG8gdGhlbWUgY29uZmlnIHZhcmlhYmxlcyAqL1xuZXhwb3J0IGNvbnN0IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWVNYXBwZXI6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLnJlZHVjZSgoYWNjLCBwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgY29uZmlnVmFsdWUgPSBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKHByb3BNYXAudmFsdWUpO1xuICAgIGlmIChjb25maWdWYWx1ZSkge1xuICAgICAgcHJvcE1hcC52YWx1ZSA9IGNvbmZpZ1ZhbHVlID8/IHByb3BNYXAudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBbLi4uYWNjLCBwcm9wTWFwXTtcbiAgfSwgW10pO1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcE51bWJlclRvUHggPSAodmFsOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsKSA9PiB7XG4gIGlmICghdmFsKSB7XG4gICAgcmV0dXJuIHZhbCBhcyBudWxsO1xuICB9XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKHZhbCkpID8gYCR7dmFsfXB4YCA6ICh2YWwgYXMgc3RyaW5nKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBQeFRvTnVtYmVyID0gKHZhbDogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICBpZiAoIXZhbCkge1xuICAgIHJldHVybiB2YWwgYXMgbnVsbDtcbiAgfVxuICByZXR1cm4gTnVtYmVyKHZhbC5yZXBsYWNlKCdweCcsICcnKSk7XG59O1xuXG4vKiogTWFwcyB0aGUgdmFsdWVzIG9mIGFueSBnaXZlbiBwcm9wcyB0byBweCB1bml0cyBpZiBpdCBpcyBhIG51bWJlciAqL1xuZXhwb3J0IGNvbnN0IG51bWJlclRvUHg6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gbWFwTnVtYmVyVG9QeChwcm9wTWFwLnZhbHVlKTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IHNwYWNpbmdNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICcwJzogY29uZmlnLnNwYWNlLm5vbmUsXG4gICcxJzogY29uZmlnLnNwYWNlLnhzLFxuICAnMic6IGNvbmZpZy5zcGFjZS5zbSxcbiAgJzMnOiBjb25maWcuc3BhY2UubWQsXG4gICc0JzogY29uZmlnLnNwYWNlLmxnLFxuICAnNSc6IGNvbmZpZy5zcGFjZS54bCxcbiAgJzYnOiBjb25maWcuc3BhY2UueHhsLFxuICAnNyc6IGNvbmZpZy5zcGFjZS54eHhsLFxuICAnbm9uZSc6IGNvbmZpZy5zcGFjZS5ub25lLFxuICAneHhzJzogY29uZmlnLnNwYWNlLnh4cyxcbiAgJ3hzJzogY29uZmlnLnNwYWNlLnhzLFxuICAnc20nOiBjb25maWcuc3BhY2Uuc20sXG4gICdtZCc6IGNvbmZpZy5zcGFjZS5tZCxcbiAgJ2xnJzogY29uZmlnLnNwYWNlLmxnLFxuICAneGwnOiBjb25maWcuc3BhY2UueGwsXG4gICd4eGwnOiBjb25maWcuc3BhY2UueHhsLFxuICAneHh4bCc6IGNvbmZpZy5zcGFjZS54eHhsLFxufTtcblxuLyoqIE1hcHMgc3BhY2luZyB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIHNwYWNpbmcgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IHNwYWNpbmdWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IHNwYWNpbmdNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGJvcmRlclJhZGl1c01hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgbm9uZTogY29uZmlnLmJvcmRlci5yYWRpdXMubm9uZSxcbiAgeHM6IGNvbmZpZy5ib3JkZXIucmFkaXVzLnhzLFxuICBzbTogY29uZmlnLmJvcmRlci5yYWRpdXMuc20sXG4gIG1kOiBjb25maWcuYm9yZGVyLnJhZGl1cy5tZCxcbiAgbGc6IGNvbmZpZy5ib3JkZXIucmFkaXVzLmxnLFxuICB4bDogY29uZmlnLmJvcmRlci5yYWRpdXMueGwsXG4gIHh4bDogY29uZmlnLmJvcmRlci5yYWRpdXMueHhsLFxuICBmdWxsOiBjb25maWcuYm9yZGVyLnJhZGl1cy5mdWxsLFxufTtcblxuLyoqIE1hcHMgYm9yZGVyIHJhZGl1cyB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIGJvcmRlciByYWRpdXMgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGJvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gYm9yZGVyUmFkaXVzTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBib3JkZXJXaWR0aE1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgbm9uZTogY29uZmlnLmJvcmRlci53aWR0aC5ub25lLFxuICBzbTogY29uZmlnLmJvcmRlci53aWR0aC5zbSxcbiAgbWQ6IGNvbmZpZy5ib3JkZXIud2lkdGgubWQsXG4gIGxnOiBjb25maWcuYm9yZGVyLndpZHRoLmxnLFxufTtcblxuLyoqIE1hcHMgYm9yZGVyIHdpZHRoIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgYm9yZGVyIHdpZHRoIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gYm9yZGVyV2lkdGhNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IG9wYWNpdHlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHh4bDogY29uZmlnLm9wYWNpdHkueHhsLFxuICB4bDogY29uZmlnLm9wYWNpdHkueGwsXG4gIGxnOiBjb25maWcub3BhY2l0eS5sZyxcbiAgbWQ6IGNvbmZpZy5vcGFjaXR5Lm1kLFxuICBzbTogY29uZmlnLm9wYWNpdHkuc20sXG4gIHhzOiBjb25maWcub3BhY2l0eS54cyxcbiAgeHhzOiBjb25maWcub3BhY2l0eS54eHMsXG4gIHh4eHM6IGNvbmZpZy5vcGFjaXR5Lnh4eHMsXG59O1xuXG4vKiogTWFwcyBvcGFjaXR5IHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgb3BhY2l0eSBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3Qgb3BhY2l0eVZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gb3BhY2l0eU1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZm9udFdlaWdodE1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgbGlnaHQ6IGNvbmZpZy5mb250LndlaWdodC5saWdodCxcbiAgcmVndWxhcjogY29uZmlnLmZvbnQud2VpZ2h0LnJlZ3VsYXIsXG4gIG1lZGl1bTogY29uZmlnLmZvbnQud2VpZ2h0Lm1lZGl1bSxcbiAgYm9sZDogY29uZmlnLmZvbnQud2VpZ2h0LmJvbGQsXG59O1xuXG4vKiogTWFwcyBmb250LXdlaWdodCB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIHNwYWNpbmcgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGZvbnRXZWlnaHRWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGZvbnRXZWlnaHRNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGZvbnRTaXplTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB4eHM6ICcwLjYyNXJlbScsXG4gIHhzOiAnMC43NXJlbScsXG4gIHNtOiAnMC44NzVyZW0nLFxuICBtZDogJzFyZW0nLFxuICBsZzogJzEuMjVyZW0nLFxuICB4bDogJzEuNXJlbScsXG4gIHh4bDogJzEuNzVyZW0nLFxufTtcblxuLyoqIE1hcHMgZm9udC1zaXplIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgc3BhY2luZyBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgZm9udFNpemVWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGZvbnRTaXplTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBmb250RmFtaWx5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBzYW5zOiBjb25maWcuZm9udC5mYW1pbHkuc2FucyxcbiAgc2VyaWY6IGNvbmZpZy5mb250LmZhbWlseS5zZXJpZixcbiAgbW9ubzogY29uZmlnLmZvbnQuZmFtaWx5Lm1vbm8sXG59O1xuXG4vKiogTWFwcyBmb250LWZhbWlseSB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIGZvbnQtZmFtaWx5IHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBmb250RmFtaWx5VmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBmb250RmFtaWx5TWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBlbGV2YXRpb25NYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHowOiBjb25maWcuZWxldmF0aW9uLnowLFxuICB6MTogY29uZmlnLmVsZXZhdGlvbi56MSxcbiAgejI6IGNvbmZpZy5lbGV2YXRpb24uejIsXG4gIHozOiBjb25maWcuZWxldmF0aW9uLnozLFxuICB6NDogY29uZmlnLmVsZXZhdGlvbi56NCxcbn07XG5cbi8qKiBNYXBzIGVsZXZhdGlvbiB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIGVsZXZhdGlvbiBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgZWxldmF0aW9uVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBlbGV2YXRpb25NYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG4iLCAiaW1wb3J0IHsgY29uZmlnLCBTZWxlY3Rvck9wdGlvbnMgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQge1xuICBTZWxlY3Rvck1ldGFkYXRhLFxuICBTZWxlY3RvclN0eWxlcyxcbiAgU3R5bGVNYXAsXG4gIFN0eWxlTWFwQ2FsbGJhY2ssXG4gIFN0eWxlUHJvcGVydHksXG59IGZyb20gJy4vY3NzLWluLWpzLnR5cGVzJztcbmltcG9ydCB7XG4gIHByb3BTaG9ydGhhbmRzLFxuICBzcGFjaW5nVmFsU2hvcnRoYW5kcyxcbiAgbnVtYmVyVG9QeCxcbiAgZG90U3RyaW5nVG9Db25maWdWYWx1ZU1hcHBlcixcbiAgYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcyxcbiAgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzLFxuICBvcGFjaXR5VmFsU2hvcnRoYW5kcyxcbiAgZm9udFdlaWdodFZhbFNob3J0aGFuZHMsXG4gIGZvbnRGYW1pbHlWYWxTaG9ydGhhbmRzLFxuICBlbGV2YXRpb25WYWxTaG9ydGhhbmRzLFxuICBmb250U2l6ZVZhbFNob3J0aGFuZHMsXG59IGZyb20gJy4vY3NzLWluLWpzLnByb3BlcnR5LW1hcHBlcnMnO1xuXG4vKiogU3BlY2lmaWVzIHdoaWNoIHByb3BlcnR5IG1hcHBlcnMgc2hvdWxkIGJlIGNhbGxlZCBhbmQgaW4gd2hhdCBvcmRlciBmb3IgYSBnaXZlbiBwcm9wICovXG5jb25zdCBwcm9wTWFwcGVycyA9IHtcbiAgaGVpZ2h0OiBbbnVtYmVyVG9QeF0sXG4gIG1pbkhlaWdodDogW251bWJlclRvUHhdLFxuICBtYXhIZWlnaHQ6IFtudW1iZXJUb1B4XSxcbiAgd2lkdGg6IFtudW1iZXJUb1B4XSxcbiAgbWluV2lkdGg6IFtudW1iZXJUb1B4XSxcbiAgbWF4V2lkdGg6IFtudW1iZXJUb1B4XSxcbiAgdG9wOiBbbnVtYmVyVG9QeF0sXG4gIHJpZ2h0OiBbbnVtYmVyVG9QeF0sXG4gIGJvdHRvbTogW251bWJlclRvUHhdLFxuICBsZWZ0OiBbbnVtYmVyVG9QeF0sXG4gIG1hcmdpbjogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luVG9wOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBtYXJnaW5SaWdodDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luQm90dG9tOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBtYXJnaW5MZWZ0OiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nVG9wOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nUmlnaHQ6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmdCb3R0b206IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmdMZWZ0OiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBnYXA6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHJvd0dhcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgY29sdW1uR2FwOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBmb250U2l6ZTogW2ZvbnRTaXplVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGZvbnRXZWlnaHQ6IFtmb250V2VpZ2h0VmFsU2hvcnRoYW5kc10sXG4gIGZvbnRGYW1pbHk6IFtmb250RmFtaWx5VmFsU2hvcnRoYW5kc10sXG4gIGJvcmRlclJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJXaWR0aDogW2JvcmRlcldpZHRoVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlclRvcExlZnRSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBvcGFjaXR5OiBbb3BhY2l0eVZhbFNob3J0aGFuZHNdLFxuICBib3hTaGFkb3c6IFtlbGV2YXRpb25WYWxTaG9ydGhhbmRzXSxcbn07XG5cbi8qKlxuICogUGFyc2VzIHByb3BlcnRpZXMgdG8gdGhlaXIgYWN0dWFsIHByb3BlcnR5IG1hcHBpbmdzIGFjY29yZGluZyB0byB0aGVcbiAqIG1hcHBpbmcgZnVuY3Rpb24gcGlwZWxpbmVzIGRlZmluZWQgYWJvdmVcbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnNlUHJvcFNob3J0aGFuZHMgPSAocHJvcDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogU3R5bGVQcm9wZXJ0eVtdID0+IHtcbiAgLy8gQ2FzdCB0byBzdHJpbmcgdmFsdWVzXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdmFsdWUgPSBgJHt2YWx1ZX1gO1xuICB9XG4gIC8vIEV4ZWMgcHJvcCB0cmFuc2Zvcm1zXG4gIC8vIFRoZSBwcm9wIHNob3J0aGFuZHMgbWFwcGVyIGlzIHJ1biBhZ2FpbnN0IGV2ZXJ5IHByb3BcbiAgY29uc3QgbWFwcGVkUHJvcHMgPSBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlTWFwcGVyKHByb3BTaG9ydGhhbmRzKFt7IHByb3AsIHZhbHVlIH1dKSk7XG4gIHJldHVybiBtYXBwZWRQcm9wcy5yZWR1Y2UoKGFjYywgcHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlcnMgPSBwcm9wTWFwcGVyc1twcm9wTWFwLnByb3BdO1xuICAgIGlmIChtYXBwZXJzKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIC4uLm1hcHBlcnMucmVkdWNlKFxuICAgICAgICAgIChhY2MsIG1hcHBlcikgPT4gbWFwcGVyKGFjYyksXG4gICAgICAgICAgW3sgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogcHJvcE1hcC52YWx1ZSB9XVxuICAgICAgICApLFxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWNjLnB1c2gocHJvcE1hcCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgfSwgW10pO1xufTtcblxuLyoqXG4gKiBQYXJzZXMgc3R5bGVNYXAgdmFsdWVzIHRvIHNlbGVjdG9yICsgc3R5bGUgaW5mbyB1c2VkIGZvclxuICogdXBkYXRpbmcgQ1NTU3R5bGVTaGVldHMgb3IgPHN0eWxlPiB0YWdzLlxuICovXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVTZWxlY3RvcnNGcm9tU3R5bGVNYXAgPSAoXG4gIHNlbGVjdG9yRm46IChvcHRpb25zPzogU2VsZWN0b3JPcHRpb25zKSA9PiBzdHJpbmcsXG4gIHN0eWxlTWFwOiBTdHlsZU1hcFxuKSA9PiB7XG4gIGNvbnN0IHBhcnNlZFNlbGVjdG9yczogU2VsZWN0b3JTdHlsZXNbXSA9IFtdO1xuICBjb25zdCBzZWxlY3RvclF1ZXVlOiBTZWxlY3Rvck1ldGFkYXRhW10gPSBbeyBzZWxlY3Rvcjogc2VsZWN0b3JGbigpLCBzdHlsZU1hcCB9XTtcbiAgY29uc3QgYnJlYWtwb2ludEtleXMgPSBPYmplY3Qua2V5cyhjb25maWcuZ3JpZC5icmVha3BvaW50KTtcblxuICAvLyBMb29wIHRocm91Z2ggc2VsZWN0b3IgcXVldWUgdW50aWwgdGhleSBoYXZlIGFsbCBiZWVuIGV4aGF1c3RlZFxuICB3aGlsZSAoc2VsZWN0b3JRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JNYXAgPSBzZWxlY3RvclF1ZXVlLnNoaWZ0KCk7XG5cbiAgICAvLyBQdXNoIHBhcnNlZCBzZWxlY3RvcnMgb250byB0aGUgcmV0dXJuIGxpc3RcbiAgICBwYXJzZWRTZWxlY3RvcnMucHVzaCh7XG4gICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsXG4gICAgICBzZWxlY3RvcldyYXBwZXI6IHNlbGVjdG9yTWFwLnNlbGVjdG9yV3JhcHBlcixcbiAgICAgIHN0eWxlOiBPYmplY3Qua2V5cyhzZWxlY3Rvck1hcC5zdHlsZU1hcCkucmVkdWNlKChhY2MsIHByb3ApID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gc2VsZWN0b3JNYXAuc3R5bGVNYXBbcHJvcF07XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIGNhbGxiYWNrIHZhbHVlc1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YWx1ZSA9ICh2YWx1ZSBhcyBTdHlsZU1hcENhbGxiYWNrKShjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2Ugb2JqZWN0IHZhbHVlc1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgLy8gUXVldWUgdXAgc2VsZWN0b3JzIGZvciBwc2V1ZG8tY2xhc3Nlc1xuICAgICAgICAgIGlmIChwcm9wLnN0YXJ0c1dpdGgoJyY6JykpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvckZuKHsgaW5maXg6IHByb3AucmVwbGFjZSgnJicsICcnKSB9KSxcbiAgICAgICAgICAgICAgc3R5bGVNYXA6IHZhbHVlLFxuICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IHNlbGVjdG9yTWFwLnNlbGVjdG9yV3JhcHBlcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUXVldWUgdXAgYnJlYWtwb2ludCBzZWxlY3RvciBzaG9ydGhhbmRzXG4gICAgICAgICAgZWxzZSBpZiAoYnJlYWtwb2ludEtleXMuaW5jbHVkZXMocHJvcCkpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvck1hcC5zZWxlY3RvcixcbiAgICAgICAgICAgICAgc3R5bGVNYXA6IHZhbHVlLFxuICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IGBAbWVkaWEgKG1pbi13aWR0aDoke2NvbmZpZy5ncmlkLmJyZWFrcG9pbnRbcHJvcF19KWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFF1ZXVlIHVwIHNlbGVjdG9ycyBmb3IgbWVkaWEvY29udGFpbmVyIHF1ZXJpZXNcbiAgICAgICAgICBlbHNlIGlmIChwcm9wLnN0YXJ0c1dpdGgoJ0BtZWRpYScpIHx8IHByb3Auc3RhcnRzV2l0aCgnQGNvbnRhaW5lcicpKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBwcm9wLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIHNsb3R0ZWQgcXVlcmllc1xuICAgICAgICAgIGVsc2UgaWYgKHByb3Auc3RhcnRzV2l0aCgnOjpzbG90dGVkJykgfHwgcHJvcC5zdGFydHNXaXRoKCcmIDo6c2xvdHRlZCcpKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JGbih7IHBvc3RmaXg6ICcgJyArIHByb3AucmVwbGFjZSgnJiAnLCAnJykgfSksXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBzZWxlY3Rvck1hcC5zZWxlY3RvcldyYXBwZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFF1ZXVlIHVwIHNlbGVjdG9ycyBmb3IgdmFsdWUgYnJlYWtwb2ludCBvYmplY3RzXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBMb29wIGluIG9yZGVyIGhlcmUgc28gdGhleSBvdmVycmlkZSBlYWNoIG90aGVyIGNvcnJlY3RseVxuICAgICAgICAgICAgYnJlYWtwb2ludEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvck1hcC5zZWxlY3RvciwgLy8gaW5oZXJpdCB0aGUgc2VsZWN0b3IgaGVyZSBpbiBjYXNlIHdlIGFyZSB3aXRoaW4gYSBwc2V1ZG8tY2xhc3NcbiAgICAgICAgICAgICAgICAgIHN0eWxlTWFwOiB7IFtwcm9wXTogdmFsdWVba2V5XSB9LFxuICAgICAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBgQG1lZGlhIChtaW4td2lkdGg6JHtjb25maWcuZ3JpZC5icmVha3BvaW50W2tleV19KWAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXJzZSBub3JtYWwgcHJvcHNcbiAgICAgICAgY29uc3QgcHJvcHMgPSBwYXJzZVByb3BTaG9ydGhhbmRzKHByb3AsIHZhbHVlIGFzIHN0cmluZyB8IG51bWJlcik7XG4gICAgICAgIHJldHVybiBgJHthY2N9JHtwcm9wcy5yZWR1Y2UoKGFjYzIsIHsgcHJvcCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgIC8vIENvbnZlcnQgcHJvcGVydHkgbmFtZXMgZnJvbSBjYW1lbC1jYXNlIHRvIGRhc2gtY2FzZSwgaS5lLjpcbiAgICAgICAgICAvLyAgYGJhY2tncm91bmRDb2xvcmAgLT4gYGJhY2tncm91bmQtY29sb3JgXG4gICAgICAgICAgLy8gVmVuZG9yLXByZWZpeGVkIG5hbWVzIG5lZWQgYW4gZXh0cmEgYC1gIGFwcGVuZGVkIHRvIGZyb250OlxuICAgICAgICAgIC8vICBgd2Via2l0QXBwZWFyYW5jZWAgLT4gYC13ZWJraXQtYXBwZWFyYW5jZWBcbiAgICAgICAgICAvLyBFeGNlcHRpb24gaXMgYW55IHByb3BlcnR5IG5hbWUgY29udGFpbmluZyBhIGRhc2gsIGluY2x1ZGluZ1xuICAgICAgICAgIC8vIGN1c3RvbSBwcm9wZXJ0aWVzOyB3ZSBhc3N1bWUgdGhlc2UgYXJlIGFscmVhZHkgZGFzaC1jYXNlZCBpLmUuOlxuICAgICAgICAgIC8vICBgLS1teS1idXR0b24tY29sb3JgIC0tPiBgLS1teS1idXR0b24tY29sb3JgXG4gICAgICAgICAgcHJvcCA9IHByb3AucmVwbGFjZSgvKD86Xih3ZWJraXR8bW96fG1zfG8pfCkoPz1bQS1aXSkvZywgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgcmV0dXJuIGAke2FjYzJ9JHtwcm9wfToke3ZhbHVlfTtgO1xuICAgICAgICB9LCAnJyl9YDtcbiAgICAgIH0sICcnKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWRTZWxlY3RvcnM7XG59O1xuXG5jb25zdCBwYXJzZVNlbGVjdG9ycyA9IChzdHlsZXMsIHNlbGVjdG9ycz86IGFueSkgPT4ge1xuICBpZiAoIXNlbGVjdG9ycykge1xuICAgIHJldHVybiBzdHlsZXM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGAke3N0eWxlc30ke3NlbGVjdG9ycy5yZWR1Y2UoKGFjYywgeyBzZWxlY3Rvciwgc2VsZWN0b3JXcmFwcGVyLCBzdHlsZSB9KSA9PiB7XG4gICAgICBpZiAoc3R5bGUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgICBjb25zdCBiYXNlID0gYCR7c2VsZWN0b3J9eyR7c3R5bGV9fWA7XG4gICAgICBjb25zdCB3cmFwcGVkID0gc2VsZWN0b3JXcmFwcGVyID8gYCR7c2VsZWN0b3JXcmFwcGVyfXske2Jhc2V9fWAgOiBiYXNlO1xuICAgICAgcmV0dXJuIGAke2FjY30ke3dyYXBwZWR9YDtcbiAgICB9LCAnJyl9YDtcbiAgfVxufTtcblxuLyoqXG4gKiBDb21iaW5lcyBhbGwgaW5zdGFuY2Ugc3R5bGVNYXAgc2VsZWN0b3JzICsgc3R5bGUgaW5mbyBpbnRvIG9uZSBjc3NUZXh0XG4gKiB1c2VkIGZvciB1cGRhdGluZyBDU1NTdHlsZVNoZWV0cyBvciA8c3R5bGU+IHRhZ3MuXG4gKi9cbmV4cG9ydCBjb25zdCBjb25zdHJ1Y3RJbnN0YW5jZVN0eWxlcyA9IChpbnN0YW5jZVN0eWxlc01hcCkgPT4ge1xuICBsZXQgc3R5bGVzID0gJyc7XG5cbiAgLy8gU29ydCBrZXlzIGluIGFscGhhYmV0aWNhbCBvcmRlciB0byBoZWxwIGF2b2lkIGh5ZHJhdGlvbiBtaXNtYXRjaCBlcnJvcnNcbiAgWy4uLmluc3RhbmNlU3R5bGVzTWFwLmVudHJpZXMoKV1cbiAgICAuZmlsdGVyKChba2V5LCBfXSkgPT4ga2V5ICE9PSAnc2UnICYmIGtleSAhPT0gJ3NwJylcbiAgICAuc29ydCgoYSwgYikgPT4gYlswXSAtIGFbMF0pXG4gICAgLmZvckVhY2goKFtfLCBzZWxlY3RvcnNdKSA9PiB7XG4gICAgICBzdHlsZXMgPSBwYXJzZVNlbGVjdG9ycyhzdHlsZXMsIHNlbGVjdG9ycyk7XG4gICAgfSk7XG5cbiAgLy8gQWx3YXlzIHBhcnNlIGBzZWAgYW5kIGBzcGAgc2VsZWN0b3JzIGxhc3QgdG8gaGVscCBhdm9pZCBoeWRyYXRpb24gbWlzbWF0Y2ggZXJyb3JzXG4gIC8vIGFuZCBlbnN1cmUgdGhleSBvdmVycmlkZSBhbnkgY29tcG9uZW50IGxldmVsIGR5bmFtaWMgc3R5bGVzLlxuICBzdHlsZXMgPSBgJHtzdHlsZXN9JHtwYXJzZVNlbGVjdG9ycygnJywgaW5zdGFuY2VTdHlsZXNNYXAuZ2V0KCdzZScpKX0ke3BhcnNlU2VsZWN0b3JzKFxuICAgICcnLFxuICAgIGluc3RhbmNlU3R5bGVzTWFwLmdldCgnc3AnKVxuICApfWA7XG4gIHJldHVybiBzdHlsZXM7XG59O1xuIiwgImltcG9ydCB7IGlzU2VydmVyIH0gZnJvbSAnbGl0LWh0bWwvaXMtc2VydmVyLmpzJztcblxuZXhwb3J0IGNvbnN0IGlzU3NyID0gKCkgPT4gaXNTZXJ2ZXI7XG5cbmV4cG9ydCBjb25zdCBpc0Jyb3dzZXJMaWtlID0gKCkgPT4gZ2xvYmFsVGhpcyAhPT0gdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgaXNWYWxpZFJlc2l6ZUNvbnRyb2xsZXIgPSAocmVzaXplQ29udHJvbGxlcikgPT5cbiAgcmVzaXplQ29udHJvbGxlcj8uWydfb2JzZXJ2ZXInXT8uWyd1bm9ic2VydmUnXTtcblxuaW50ZXJmYWNlIE5hdmlnYXRvclVBRGF0YSB7XG4gIGJyYW5kczogQXJyYXk8eyBicmFuZDogc3RyaW5nOyB2ZXJzaW9uOiBzdHJpbmcgfT47XG4gIG1vYmlsZTogYm9vbGVhbjtcbiAgcGxhdGZvcm06IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXRmb3JtKCk6IHN0cmluZyB7XG4gIGNvbnN0IHVhRGF0YSA9IChuYXZpZ2F0b3IgYXMgYW55KS51c2VyQWdlbnREYXRhIGFzIE5hdmlnYXRvclVBRGF0YSB8IHVuZGVmaW5lZDtcblxuICBpZiAodWFEYXRhPy5wbGF0Zm9ybSkge1xuICAgIHJldHVybiB1YURhdGEucGxhdGZvcm07XG4gIH1cblxuICByZXR1cm4gbmF2aWdhdG9yLnBsYXRmb3JtO1xufVxuXG5leHBvcnQgY29uc3QgaXNQbGF0Zm9ybSA9IChwbGF0Zm9ybTogJ0lPUycpID0+IHtcbiAgaWYgKCFpc1NzcigpKSB7XG4gICAgaWYgKHBsYXRmb3JtID09PSAnSU9TJykge1xuICAgICAgcmV0dXJuIC9pUChob25lfGFkfG9kKXxpT1MvLnRlc3QoZ2V0UGxhdGZvcm0oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuIiwgImNvbnN0IG5hdGl2ZVZhbGlkaXR5U3RhdGVzOiBBcnJheTxrZXlvZiBWYWxpZGl0eVN0YXRlPiA9IFtcbiAgJ2JhZElucHV0JyxcbiAgJ2N1c3RvbUVycm9yJyxcbiAgJ3BhdHRlcm5NaXNtYXRjaCcsXG4gICdyYW5nZU92ZXJmbG93JyxcbiAgJ3JhbmdlVW5kZXJmbG93JyxcbiAgJ3N0ZXBNaXNtYXRjaCcsXG4gICd0b29Mb25nJyxcbiAgJ3Rvb1Nob3J0JyxcbiAgJ3R5cGVNaXNtYXRjaCcsXG4gICd2YWx1ZU1pc3NpbmcnLFxuXTtcblxuLyoqXG4gKiBDdXN0b20gdmFsaWRhdG9yIGZvciB0aGUgYEBvcGVuLXdjL2Zvcm0tY29udHJvbGAgdGhhdCBsZWFucyBvbiBhbiBpbnRlcm5hbFxuICogaW5wdXQgdG8gZm9yd2FyZCBuYXRpdmUgdmFsaWRhdGlvblxuICovXG5leHBvcnQgY29uc3QgaW5uZXJJbnB1dFZhbGlkYXRvcnMgPSBuYXRpdmVWYWxpZGl0eVN0YXRlcy5tYXAoKGtleSkgPT4gKHtcbiAga2V5LFxuICBpc1ZhbGlkKGluc3RhbmNlOiBIVE1MRWxlbWVudCAmIHsgdmFsaWRhdGlvblRhcmdldDogSFRNTElucHV0RWxlbWVudCB9KSB7XG4gICAgaWYgKGluc3RhbmNlLnZhbGlkYXRpb25UYXJnZXQpIHtcbiAgICAgIHJldHVybiAhaW5zdGFuY2UudmFsaWRhdGlvblRhcmdldC52YWxpZGl0eVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbn0pKTtcbiIsICIvKipcbiAqIE5PVEU6XG4gKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGltcGxlbWVudGF0aW9uIGZvciBhbiBleHRyZW1lbHkgc2ltcGxlIGFuZCBsaWdodHdlaWdodFxuICogcmVhY3RpdmUgc29sdXRpb24gbG9vc2VseSBiYXNlZCBvbiBzb2xpZC1qcyBzdHlsZSBzaWduYWxzLiBJdCBlbmFibGVzIGJhc2ljXG4gKiByZWFjdGl2ZSBzdWJzY3JpcHRpb25zIGFuZCBjb21wdXRlZCBzaWduYWxzIG9mIG9uZSBvciBtb3JlIG90aGVyIGRlcGVuZGVuY3kgc2lnbmFscy5cbiAqXG4gKiBJbiBpdHMgY3VycmVudCBzdGF0ZSwgaXQgaXMgbm90IHBlcmZlY3QgYW5kIGRvZXMgbm90IGhhbmRsZSBhbGwgZWRnZSBjYXNlcy4gRm9yXG4gKiBleGFtcGxlLCBpZiB5b3UgaGF2ZSBtdWx0aXBsZSBsYXllcnMgb2YgY29tcHV0ZWQgc3RhdGUgd2l0aCBhIHNpbmdsZSBkZXBlbmRlbmN5XG4gKiBzaGFyZWQgbW9yZSB0aGFuIG9uY2UgYWNyb3NzIHRob3NlIGxheWVycywgdGhlIHNhbWUgY2hhbmdlIHdpbGwgcG90ZW50aWFsbHkgYmVcbiAqIGVtaXR0ZWQgdHdpY2UuIE91ciBleHBlY3RhdGlvbiBhdG0sIGlzIHRoYXQgd2Ugd29uJ3QgZW5jb3VudGVyIHRob3NlIHNjZW5hcmlvc1xuICogaW4gdGhpcyBsaWJyYXJ5LlxuICovXG5cbi8qKiBVbnN1YnNjcmliZXMgZnJvbSB2YWx1ZSB1cGRhdGVzLiAqL1xuZXhwb3J0IHR5cGUgVW5zdWJzY3JpYmVyID0gKCkgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBTaWduYWw8VD4ge1xuICAvKiogR2V0IHRoZSBjdXJyZW50IHZhbHVlICovXG4gIGdldCgpOiBUO1xuXG4gIC8qKiBTZXQgcmVhY3RpdmUgdmFsdWUgKi9cbiAgc2V0KHZhbHVlOiBUKTtcblxuICAvKiogVXBkYXRlIHJlYWN0aXZlIHZhbHVlIHVzaW5nIGNhbGxiYWNrICovXG4gIHVwZGF0ZShmbjogKHZhbHVlOiBUKSA9PiBUKTtcblxuICAvKiogU3Vic2NyaWJlIHRvIHJlYWN0aXZlIHZhbHVlIGNoYW5nZXMgKi9cbiAgc3Vic2NyaWJlKGZuOiAodmFsdWU6IFQsIHVuc3Vic2NyaWJlPzogVW5zdWJzY3JpYmVyKSA9PiB2b2lkKTogVW5zdWJzY3JpYmVyO1xufVxuXG5jb25zdCBjb250ZXh0ID0gW107XG5cbmZ1bmN0aW9uIF9zdWJzY3JpYmUocnVubmluZywgc3Vic2NyaXB0aW9ucykge1xuICBzdWJzY3JpcHRpb25zLmFkZChydW5uaW5nKTtcbiAgcnVubmluZy5kZXBlbmRlbmNpZXMuYWRkKHN1YnNjcmlwdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjbGVhbnVwKHJ1bm5pbmcpIHtcbiAgZm9yIChjb25zdCBkZXAgb2YgcnVubmluZy5kZXBlbmRlbmNpZXMpIHtcbiAgICBkZXAuZGVsZXRlKHJ1bm5pbmcpO1xuICB9XG4gIHJ1bm5pbmcuZGVwZW5kZW5jaWVzLmNsZWFyKCk7XG59XG5cbi8qKiBDcmVhdGUgYSBzaWduYWwgdGhhdCBhbGxvd3MgYm90aCB1cGRhdGluZyBhbmQgcmVhZGluZyBieSBnZXR0ZXIgb3Igc3Vic2NyaXB0aW9uLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hbDxUPih2YWx1ZT86IFQpIHtcbiAgY29uc3Qgc3Vic2NyaXB0aW9ucyA9IG5ldyBTZXQ8YW55PigpO1xuXG4gIGNvbnN0IGdldCA9ICgpOiBUID0+IHtcbiAgICBjb25zdCBydW5uaW5nID0gY29udGV4dFtjb250ZXh0Lmxlbmd0aCAtIDFdO1xuICAgIGlmIChydW5uaW5nKSBfc3Vic2NyaWJlKHJ1bm5pbmcsIHN1YnNjcmlwdGlvbnMpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCBzZXQgPSAobmV4dFZhbHVlOiBUKSA9PiB7XG4gICAgdmFsdWUgPSBuZXh0VmFsdWU7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgWy4uLnN1YnNjcmlwdGlvbnNdKSB7XG4gICAgICBzdWIuZXhlY3V0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGUgPSAoZm46ICh2YWx1ZTogVCkgPT4gVCkgPT4ge1xuICAgIHZhbHVlID0gZm4odmFsdWUpO1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIFsuLi5zdWJzY3JpcHRpb25zXSkge1xuICAgICAgc3ViLmV4ZWN1dGUoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVGhpcyBpcyBlc3NlbnRpYWxseSBhIHVzZUVmZmVjdCBtYXNxdWVyYWRpbmcgYXMgYSBzdWJzY3JpYmUgZnVuY3Rpb25cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGZuOiAodmFsdWU6IFQsIHVuc3Vic2NyaWJlPzogVW5zdWJzY3JpYmVyKSA9PiB2b2lkKTogVW5zdWJzY3JpYmVyID0+IHtcbiAgICBjb25zdCBleGVjdXRlID0gKCkgPT4ge1xuICAgICAgY2xlYW51cChydW5uaW5nKTtcbiAgICAgIGNvbnRleHQucHVzaChydW5uaW5nKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKHJ1bm5pbmcuZ2V0KCksICgpID0+IGNsZWFudXAocnVubmluZykpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgY29udGV4dC5wb3AoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoKSA9PiBjbGVhbnVwKHJ1bm5pbmcpO1xuICAgIH07XG5cbiAgICBjb25zdCBydW5uaW5nID0ge1xuICAgICAgZXhlY3V0ZSxcbiAgICAgIGRlcGVuZGVuY2llczogbmV3IFNldCgpLFxuICAgICAgZ2V0LFxuICAgIH07XG5cbiAgICByZXR1cm4gZXhlY3V0ZSgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0LFxuICAgIHNldCxcbiAgICB1cGRhdGUsXG4gICAgc3Vic2NyaWJlLFxuICB9IGFzIFNpZ25hbDxUPjtcbn1cblxuLyoqIE9uZSBvciBtb3JlIGBTaWduYWxgcyAqL1xudHlwZSBTaWduYWxzID0gU2lnbmFsPGFueT4gfCBbU2lnbmFsPGFueT4sIC4uLkFycmF5PFNpZ25hbDxhbnk+Pl0gfCBTaWduYWw8YW55PltdO1xuXG4vKiogT25lIG9yIG1vcmUgdmFsdWVzIGZyb20gc2lnbmFscyAqL1xuZXhwb3J0IHR5cGUgU2lnbmFsVmFsdWVzPFQ+ID0gVCBleHRlbmRzIFNpZ25hbDxpbmZlciBVPlxuICA/IFVcbiAgOiB7IFtLIGluIGtleW9mIFRdOiBUW0tdIGV4dGVuZHMgU2lnbmFsPGluZmVyIFU+ID8gVSA6IG5ldmVyIH07XG5cbi8qKiBDcmVhdGUgYSBuZXcgY29tcHV0ZWQgc2lnbmFsIGZyb20gb25lIG9yIG1vcmUgc2lnbmFsIGRlcGVuZGVuY2llcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkPEQgZXh0ZW5kcyBTaWduYWxzLCBUPihcbiAgZGVwZW5kZW5jaWVzOiBELFxuICBmbjogKHZhbHVlczogU2lnbmFsVmFsdWVzPEQ+KSA9PiBUXG4pOiBTaWduYWw8VD47XG5cbi8qKiBDcmVhdGUgYSBuZXcgY29tcHV0ZWQgc2lnbmFsIGZyb20gb25lIG9yIG1vcmUgc2lnbmFsIGRlcGVuZGVuY2llcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkPEQgZXh0ZW5kcyBTaWduYWxzLCBUPihcbiAgZGVwZW5kZW5jaWVzOiBELFxuICBmbj86ICh2YWx1ZXM6IFNpZ25hbFZhbHVlczxEPiwgc2V0PzogKHZhbHVlOiBhbnkpID0+IHZvaWQpID0+IFRcbik6IFNpZ25hbDx1bmtub3duPjtcblxuLyoqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCBzaWduYWwgZnJvbSBvbmUgb3IgbW9yZSBzaWduYWwgZGVwZW5kZW5jaWVzICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQ8RCBleHRlbmRzIFNpZ25hbHM+KFxuICBkZXBlbmRlbmNpZXM6IEQsXG4gIGZuPzogKC4uLnBhcmFtczogYW55W10pID0+IGFueVxuKTogU2lnbmFsPGFueT4ge1xuICBjb25zdCBhdXRvID0gZm4ubGVuZ3RoIDwgMjtcbiAgY29uc3QgcyA9IHNpZ25hbDxhbnk+KCk7XG4gIGNvbnN0IHNpbmdsZSA9ICFBcnJheS5pc0FycmF5KGRlcGVuZGVuY2llcyk7XG4gIGNvbnN0IGRlcHMgPSBzaW5nbGVcbiAgICA/IChbZGVwZW5kZW5jaWVzXSBhcyBTaWduYWw8U2lnbmFsVmFsdWVzPEQ+PltdKVxuICAgIDogKGRlcGVuZGVuY2llcyBhcyBTaWduYWw8U2lnbmFsVmFsdWVzPEQ+PltdKTtcblxuICAvLyBXZSBvbmx5IG5lZWQgdG8gc3Vic2NyaWJlIHRvIHRoZSBmaXJzdCBpdGVtIGJlY2F1c2VcbiAgLy8gdGhlIGFjdCBvZiByZXRyaWV2aW5nIGFsbCBkZXBlbmRlbmN5IHZhbHVlcyB3aWxsIGFkZCB0aGVtXG4gIC8vIHRvIHRoZSBjb250ZXh0IHN0YWNrIGFwcHJvcHJpYXRlbHlcbiAgY29uc3QgZGVwID0gZGVwc1swXTtcbiAgZGVwLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgY29uc3QgdmFsdWVzID0gZGVwcy5tYXAoKGRlcCkgPT4gZGVwLmdldCgpKTtcbiAgICBjb25zdCByZXQgPSBzaW5nbGUgPyB2YWx1ZXNbMF0gOiAodmFsdWVzIGFzIFNpZ25hbFZhbHVlczxEPik7XG4gICAgaWYgKGF1dG8pIHtcbiAgICAgIHMuc2V0KGZuKHJldCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbihyZXQsIHMuc2V0KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcztcbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSB3Yy9uby1zZWxmLWNsYXNzICovXG5pbXBvcnQgeyBjb25maWcsIHNlbGVjdG9yRmFjdG9yeSB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzLCBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IE10ZUVsZW1lbnQgfSBmcm9tICcuL210ZS5lbGVtZW50JztcbmltcG9ydCB7IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9IGZyb20gJy4uL2F0dHJpYnV0ZS1jb252ZXJ0ZXInO1xuXG5leHBvcnQgdHlwZSBTcGFjaW5nVmFsdWUgPVxuICB8IG51bWJlclxuICB8IHN0cmluZ1xuICB8IDFcbiAgfCAyXG4gIHwgM1xuICB8IDRcbiAgfCA1XG4gIHwgNlxuICB8ICdub25lJ1xuICB8ICd4cydcbiAgfCAnc20nXG4gIHwgJ21kJ1xuICB8ICdsZydcbiAgfCAneGwnXG4gIHwgJ3h4bCdcbiAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFVuaXRWYWx1ZSA9IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgQm9yZGVyUmFkaXVzVmFsdWUgPVxuICB8ICdub25lJ1xuICB8ICd4cydcbiAgfCAnc20nXG4gIHwgJ21kJ1xuICB8ICdsZydcbiAgfCAneGwnXG4gIHwgJ3h4bCdcbiAgfCAnZnVsbCdcbiAgfCBzdHJpbmdcbiAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIEJvcmRlcldpZHRoVmFsdWUgPSAnbm9uZScgfCAnc20nIHwgJ21kJyB8ICdsZycgfCBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIE9wYWNpdHlWYWx1ZSA9XG4gIHwgJ3h4eHMnXG4gIHwgJ3h4cydcbiAgfCAneHMnXG4gIHwgJ3NtJ1xuICB8ICdtZCdcbiAgfCAnbGcnXG4gIHwgJ3hsJ1xuICB8ICd4eGwnXG4gIHwgc3RyaW5nXG4gIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBSZXNwb25zaXZlVmFsdWU8VD4gPSBUIHwgUGFydGlhbDxSZWNvcmQ8J3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJywgVD4+O1xuXG5jb25zdCBkZWZhdWx0Qm9yZGVyRmFjdG9yeSA9ICh3aWR0aD8sIGNvbG9yPywgc3R5bGU/KSA9PlxuICBgJHtzdHlsZSA/PyAnc29saWQnfSAke1xuICAgIGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kcyhbXG4gICAgICB7IHByb3A6ICdib3JkZXJXaWR0aCcsIHZhbHVlOiBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKHdpZHRoID8/ICcxcHgnKSB9LFxuICAgIF0pWzBdPy52YWx1ZVxuICB9ICR7ZG90U3RyaW5nVG9Db25maWdWYWx1ZShjb2xvcikgPz8gY29uZmlnLmNvbG9yLmJvcmRlcjF9YDtcblxuZXhwb3J0IGNsYXNzIE10ZUNvbnRlbnRCYXNlIGV4dGVuZHMgTXRlRWxlbWVudCB7XG4gIC8vIC0tIFNwYWNpbmcgUHJvcHMgLS1cblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tcmlnaHRgIGFuZCBgbWFyZ2luLWxlZnRgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBteD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXRvcGAgYW5kIGBtYXJnaW4tYm90dG9tYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbXk/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi10b3BgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbXQ/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi1yaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtcj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLWJvdHRvbWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtYj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLWxlZnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWw/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmdgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1yaWdodGAgYW5kIGBwYWRkaW5nLWxlZnRgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBweD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy10b3BgIGFuZCBgcGFkZGluZy1ib3R0b21gIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBweT86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy10b3BgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcHQ/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctcmlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcHI/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctYm90dG9tYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHBiPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLWxlZnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcGw/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvLyAtLSBQb3NpdGlvbmluZyBQcm9wcyAtLVxuXG4gIC8qKiBTZXRzIHRoZSBgZGlzcGxheWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBkPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnYmxvY2snXG4gICAgfCAnaW5saW5lLWJsb2NrJ1xuICAgIHwgJ2ZsZXgnXG4gICAgfCAnaW5saW5lLWZsZXgnXG4gICAgfCAnZ3JpZCdcbiAgICB8ICdpbmxpbmUtZ3JpZCdcbiAgICB8ICdpbmxpbmUnXG4gICAgfCAnbGlzdC1pdGVtJ1xuICAgIHwgJ25vbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24taXRlbXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2Jhc2VsaW5lJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGFsaWduLWl0ZW1zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGFsaWduSXRlbXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdiYXNlbGluZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1zZWxmYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGFsaWduU2VsZj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2F1dG8nXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnYmFzZWxpbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24tY29udGVudGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBhbGlnbkNvbnRlbnQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIHwgJ3NwYWNlLWFyb3VuZCdcbiAgICB8ICdzcGFjZS1ldmVubHknXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1jb250ZW50YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGo/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3BhY2UtYmV0d2VlbidcbiAgICB8ICdzcGFjZS1hcm91bmQnXG4gICAgfCAnc3BhY2UtZXZlbmx5J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGp1c3RpZnktY29udGVudGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBqdXN0aWZ5Q29udGVudD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIHwgJ3NwYWNlLWFyb3VuZCdcbiAgICB8ICdzcGFjZS1ldmVubHknXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1pdGVtc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBqdXN0aWZ5SXRlbXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2xlZnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdyaWdodCdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LXNlbGZgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkganVzdGlmeVNlbGY/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ2xlZnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdyaWdodCdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGZsZXg6IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1kaXJlY3Rpb25gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZGlyZWN0aW9uPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdyb3cnIHwgJ3Jvd1JldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uUmV2ZXJzZScgfCAnaW5pdGlhbCcgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtZGlyZWN0aW9uYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhEaXJlY3Rpb24/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3JvdycgfCAncm93UmV2ZXJzZScgfCAnY29sdW1uJyB8ICdjb2x1bW5SZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1iYXNpc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBiYXNpcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtYmFzaXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleEJhc2lzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1ncm93YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyb3c/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWdyb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleEdyb3c/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXNocmlua2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBzaHJpbms/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXNocmlua2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4U2hyaW5rPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC13cmFwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIHdyYXA/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ25vd3JhcCcgfCAnd3JhcCcgfCAnd3JhcC1yZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC13cmFwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhXcmFwPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdub3dyYXAnIHwgJ3dyYXAnIHwgJ3dyYXAtcmV2ZXJzZScgfCAnaW5pdGlhbCcgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYG9yZGVyYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIG9yZGVyPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ2FwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdhcD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgY29sdW1uLWdhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBjb2x1bW5HYXA/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHJvdy1nYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcm93R2FwPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWNvbHVtbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQ29sdW1uPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1yb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZFJvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXV0by1mbG93YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRBdXRvRmxvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAncm93JyB8ICdjb2x1bW4nIHwgJ2RlbnNlJyB8ICdyb3cgZGVuc2UnIHwgJ2NvbHVtbiBkZW5zZSdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXV0by1jb2x1bW5zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRBdXRvQ29sdW1ucz86IFJlc3BvbnNpdmVWYWx1ZTwnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWF1dG8tcm93c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQXV0b1Jvd3M/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgJ2F1dG8nIHwgJ21heC1jb250ZW50JyB8ICdtaW4tY29udGVudCcgfCBVbml0VmFsdWVcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtdGVtcGxhdGUtY29sdW1uc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBncmlkVGVtcGxhdGVDb2x1bW5zPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgICdub25lJyB8ICdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXRlbXBsYXRlLXJvd3NgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZFRlbXBsYXRlUm93cz86IFJlc3BvbnNpdmVWYWx1ZTwnbm9uZScgfCAnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXRlbXBsYXRlLWFyZWFzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRUZW1wbGF0ZUFyZWFzPzogUmVzcG9uc2l2ZVZhbHVlPCdub25lJyB8IHN0cmluZyB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWFyZWFgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZEFyZWE/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLy8gLS0gU2l6aW5nIFByb3BzIC0tXG5cbiAgLyoqIFNldHMgdGhlIGB3aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSB3PzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXgtd2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWF4dz86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWluLXdpZHRoYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1pbnc/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGhlaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBoPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXgtaGVpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1heGg/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1pbi1oZWlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWluaD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYmFja2dyb3VuZGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gQ2FuIGJlIHBhc3NlZCBkb3Qgbm90YXRlZCB0aGVtZSBjb25maWcgc3RyaW5ncyB0byBzZWxlY3QgY29sb3IgdG9rZW4gdmFsdWVzLiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBiZz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGNvbG9yYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiBDYW4gYmUgcGFzc2VkIGRvdCBub3RhdGVkIHRoZW1lIGNvbmZpZyBzdHJpbmdzIHRvIHNlbGVjdCBjb2xvciB0b2tlbiB2YWx1ZXMuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItY29sb3JgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuIENhbiBiZSBwYXNzZWQgZG90IG5vdGF0ZWQgdGhlbWUgY29uZmlnIHN0cmluZ3MgdG8gc2VsZWN0IGNvbG9yIHRva2VuIHZhbHVlcy4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYm9yZGVyQ29sb3I/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItd2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlcldpZHRoPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlcldpZHRoVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXN0eWxlYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBib3JkZXJTdHlsZT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAnc29saWQnIHwgJ2RvdHRlZCcgfCAnZGFzaGVkJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXI/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJUb3A/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItcmlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclJpZ2h0PzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tPzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWxlZnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckxlZnQ/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItcmFkaXVzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcFJpZ2h0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3AtbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcExlZnRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNgIGFuZCBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJUb3BSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXNgIGFuZCBgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyUmlnaHRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNgIGFuZCBgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJCb3R0b21SYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c2AgYW5kIGBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckxlZnRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbGluZS1oZWlnaHRgIGNzcyBwcm9wZXJ0eSAgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgbGluZUhlaWdodD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCBudW1iZXJcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZvbnQtd2VpZ2h0YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZm9udFdlaWdodD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2xpZ2h0J1xuICAgIHwgJ3JlZ3VsYXInXG4gICAgfCAnbWVkaXVtJ1xuICAgIHwgJ2xpZ2h0ZXInXG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ2JvbGQnXG4gICAgfCAnYm9sZGVyJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgICB8ICcxMDAnXG4gICAgfCAnMjAwJ1xuICAgIHwgJzMwMCdcbiAgICB8ICc0MDAnXG4gICAgfCAnNTAwJ1xuICAgIHwgJzYwMCdcbiAgICB8ICc3MDAnXG4gICAgfCAnODAwJ1xuICAgIHwgJzkwMCdcbiAgPjtcblxuICAvKiogU2hvcnRoYW5kIGZvciBgZm9udFdlaWdodGAuIFNldHMgdGhlIGBmb250LXdlaWdodGAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZ3PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnbGlnaHQnXG4gICAgfCAncmVndWxhcidcbiAgICB8ICdtZWRpdW0nXG4gICAgfCAnbGlnaHRlcidcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnYm9sZCdcbiAgICB8ICdib2xkZXInXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICAgIHwgJzEwMCdcbiAgICB8ICcyMDAnXG4gICAgfCAnMzAwJ1xuICAgIHwgJzQwMCdcbiAgICB8ICc1MDAnXG4gICAgfCAnNjAwJ1xuICAgIHwgJzcwMCdcbiAgICB8ICc4MDAnXG4gICAgfCAnOTAwJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZm9udC1zaXplYCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZm9udFNpemU/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgVW5pdFZhbHVlIHwgJ3h4cycgfCAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnXG4gID47XG5cbiAgLyoqIFNob3J0aGFuZCBmb3IgYGZvbnRTaXplYC4gU2V0cyB0aGUgYGZvbnQtc2l6ZWAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8IFVuaXRWYWx1ZSB8ICd4eHMnIHwgJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZm9udC1mYW1pbHlgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmb250RmFtaWx5PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdzYW5zJyB8ICdzZXJpZicgfCAnbW9ubycgfCBzdHJpbmdcbiAgPjtcblxuICAvKiogU2hvcnRoYW5kIGZvciBgb3BhY2l0eWAuIFNldHMgdGhlIGBvcGFjaXR5YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgb3BhY2l0eT86IFJlc3BvbnNpdmVWYWx1ZTxPcGFjaXR5VmFsdWU+O1xuXG4gIC8qKiBBcHBsaWVzIE1vcnRhciBzdGFuZGFyZCBib3gtc2hhZG93IHZhbHVlcyAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBlbGV2YXRpb24/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgJ3owJyB8ICd6MScgfCAnejInIHwgJ3ozJyB8ICd6NCdcbiAgPjtcblxuICAvKiogQWRqdXN0IHRoaXMgZWxlbWVudHMgYmxlZWQgaWYgaXQgaXMgYSBkaXJlY3QgZGVzY2VuZGFudCBvZiBhbiBtdGUtbGF5b3V0LWNvbnRhaW5lciAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGxheW91dEJsZWVkPzogJ2Z1bGwnIHwgJ3BvcG91dCcgfCAnY29udGVudCcgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhpcyBlbGVtZW50IGFzIGEgc3ViZ3JpZCB3aGVuIHNldC4gYGRpc3BsYXlgIGlzIHNldCB0byBgZ3JpZGAgYW5kIGBncmlkLXRlbXBsYXRlLWNvbHVtbnNgIGlzIHNldCB0byBgc3ViZ3JpZGAuXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgc3ViZ3JpZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIHNlbGVjdG9yIHRvIGhhdmUgaW5zdGFuY2Ugc3R5bGVzIHRhcmdldCBhIHNwZWNpZmljIGlubmVyIGVsZW1lbnQuXG4gICAqIFVzZWZ1bCBpbiBzcGVjaWZpYyBzY2VuYXJpb3Mgd2hlcmUgdGhlIHByaW1hcnkgY29udGVudC9zbG90IHdyYXBwZWQgd2l0aGluIHRoZSB0ZW1wbGF0ZVxuICAgKiBsaWtlIHdpdGggdGhlIG1vZGFsIGNvbXBvbmVudC5cbiAgICovXG4gIHByb3RlY3RlZCBjb250ZW50U3R5bGVTZWxlY3RvclJvb3QgPSAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0JztcblxuICAvLyBMaXN0IG9mIHByb3BzIGZvciBvcHRpbWFsIHN0eWxlIHVwZGF0ZSBjaGVja2luZ1xuICBwcml2YXRlIHN0YXRpYyBjb250ZW50UHJvcHMgPSBuZXcgU2V0KFtcbiAgICAnbScsXG4gICAgJ214JyxcbiAgICAnbXknLFxuICAgICdtdCcsXG4gICAgJ21yJyxcbiAgICAnbWInLFxuICAgICdtbCcsXG4gICAgJ3AnLFxuICAgICdweCcsXG4gICAgJ3B5JyxcbiAgICAncHQnLFxuICAgICdwcicsXG4gICAgJ3BiJyxcbiAgICAncGwnLFxuICAgICdkJyxcbiAgICAnYScsXG4gICAgJ2onLFxuICAgICdiYXNpcycsXG4gICAgJ3NocmluaycsXG4gICAgJ2dyb3cnLFxuICAgICdkaXJlY3Rpb24nLFxuICAgICd3cmFwJyxcbiAgICAnYWxpZ25JdGVtcycsXG4gICAgJ2FsaWduU2VsZicsXG4gICAgJ2FsaWduQ29udGVudCcsXG4gICAgJ2p1c3RpZnlDb250ZW50JyxcbiAgICAnanVzdGlmeUl0ZW1zJyxcbiAgICAnanVzdGlmeVNlbGYnLFxuICAgICdmbGV4JyxcbiAgICAnZmxleERpcmVjdGlvbicsXG4gICAgJ2ZsZXhCYXNpcycsXG4gICAgJ2ZsZXhTaHJpbmsnLFxuICAgICdmbGV4R3JvdycsXG4gICAgJ2ZsZXhXcmFwJyxcbiAgICAnb3JkZXInLFxuICAgICdnYXAnLFxuICAgICdjb2x1bW5HYXAnLFxuICAgICdyb3dHYXAnLFxuICAgICdncmlkQ29sdW1uJyxcbiAgICAnZ3JpZFJvdycsXG4gICAgJ2dyaWRBdXRvRmxvdycsXG4gICAgJ2dyaWRBdXRvQ29sdW1ucycsXG4gICAgJ2dyaWRBdXRvUm93cycsXG4gICAgJ2dyaWRUZW1wbGF0ZUNvbHVtbnMnLFxuICAgICdncmlkVGVtcGxhdGVSb3dzJyxcbiAgICAnZ3JpZFRlbXBsYXRlQXJlYXMnLFxuICAgICdncmlkQXJlYScsXG4gICAgJ3cnLFxuICAgICdtYXh3JyxcbiAgICAnbWludycsXG4gICAgJ2gnLFxuICAgICdtYXhoJyxcbiAgICAnbWluaCcsXG4gICAgJ2JnJyxcbiAgICAnYycsXG4gICAgJ2JvcmRlckNvbG9yJyxcbiAgICAnYm9yZGVyV2lkdGgnLFxuICAgICdib3JkZXJTdHlsZScsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvcmRlclRvcCcsXG4gICAgJ2JvcmRlclJpZ2h0JyxcbiAgICAnYm9yZGVyQm90dG9tJyxcbiAgICAnYm9yZGVyTGVmdCcsXG4gICAgJ2JvcmRlclJhZGl1cycsXG4gICAgJ2JvcmRlclRvcFJpZ2h0UmFkaXVzJyxcbiAgICAnYm9yZGVyVG9wTGVmdFJhZGl1cycsXG4gICAgJ2JvcmRlckJvdHRvbVJpZ2h0UmFkaXVzJyxcbiAgICAnYm9yZGVyQm90dG9tTGVmdFJhZGl1cycsXG4gICAgJ2JvcmRlclRvcFJhZGl1cycsXG4gICAgJ2JvcmRlclJpZ2h0UmFkaXVzJyxcbiAgICAnYm9yZGVyQm90dG9tUmFkaXVzJyxcbiAgICAnYm9yZGVyTGVmdFJhZGl1cycsXG4gICAgJ2xpbmVIZWlnaHQnLFxuICAgICdmb250V2VpZ2h0JyxcbiAgICAnZncnLFxuICAgICdmb250U2l6ZScsXG4gICAgJ2ZzJyxcbiAgICAnZm9udEZhbWlseScsXG4gICAgJ29wYWNpdHknLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdsYXlvdXRCbGVlZCcsXG4gICAgJ3N1YmdyaWQnLFxuICBdKTtcblxuICBwcm90ZWN0ZWQgdXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzOiBNYXA8c3RyaW5nLCBhbnk+KSB7XG4gICAgc3VwZXIudXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKTtcblxuICAgIC8vIENoZWNrIGlmIGFueSBjb250ZW50IHByb3AgaGFzIGNoYW5nZWQgdG8gZGV0ZXJtaW5lIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBpbnN0YW5jZSBzdHlsZXNcbiAgICBsZXQgc2hvdWxkVXBkYXRlU3R5bGVzID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgY2hhbmdlZFByb3BzLmtleXMoKSkge1xuICAgICAgaWYgKE10ZUNvbnRlbnRCYXNlLmNvbnRlbnRQcm9wcy5oYXMoa2V5KSkge1xuICAgICAgICBzaG91bGRVcGRhdGVTdHlsZXMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkVXBkYXRlU3R5bGVzKSB7XG4gICAgICAvLyBEb3VibGUgdGhlIGA6aG9zdGAgc2VsZWN0b3IgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgYmV5b25kIG1vc3QgY29tcG9uZW50IGxldmVsIHN0eWxlcyBieSBkZWZhdWx0XG4gICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoJ2NvbnRlbnQtYmFzZScsIHNlbGVjdG9yRmFjdG9yeSh0aGlzLmNvbnRlbnRTdHlsZVNlbGVjdG9yUm9vdCksIHtcbiAgICAgICAgLy8gU3BhY2luZ1xuICAgICAgICBtOiB0aGlzLm0sXG4gICAgICAgIG14OiB0aGlzLm14LFxuICAgICAgICBteTogdGhpcy5teSxcbiAgICAgICAgbXQ6IHRoaXMubXQsXG4gICAgICAgIG1yOiB0aGlzLm1yLFxuICAgICAgICBtYjogdGhpcy5tYixcbiAgICAgICAgbWw6IHRoaXMubWwsXG4gICAgICAgIHA6IHRoaXMucCxcbiAgICAgICAgcHg6IHRoaXMucHgsXG4gICAgICAgIHB5OiB0aGlzLnB5LFxuICAgICAgICBwdDogdGhpcy5wdCxcbiAgICAgICAgcHI6IHRoaXMucHIsXG4gICAgICAgIHBiOiB0aGlzLnBiLFxuICAgICAgICBwbDogdGhpcy5wbCxcbiAgICAgICAgLy8gUG9zaXRpb25pbmdcbiAgICAgICAgZDogdGhpcy5zdWJncmlkID8gJ2dyaWQnIDogdGhpcy5kLFxuICAgICAgICBhbGlnbkl0ZW1zOiB0aGlzLmEgPz8gdGhpcy5hbGlnbkl0ZW1zLFxuICAgICAgICBhbGlnblNlbGY6IHRoaXMuYWxpZ25TZWxmLFxuICAgICAgICBhbGlnbkNvbnRlbnQ6IHRoaXMuYWxpZ25Db250ZW50LFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogdGhpcy5qID8/IHRoaXMuanVzdGlmeUNvbnRlbnQsXG4gICAgICAgIGp1c3RpZnlJdGVtczogdGhpcy5qdXN0aWZ5SXRlbXMsXG4gICAgICAgIGp1c3RpZnlTZWxmOiB0aGlzLmp1c3RpZnlTZWxmLFxuICAgICAgICBmbGV4OiB0aGlzLmZsZXgsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uID8/IHRoaXMuZmxleERpcmVjdGlvbixcbiAgICAgICAgZmxleEJhc2lzOiB0aGlzLmJhc2lzID8/IHRoaXMuZmxleEJhc2lzLFxuICAgICAgICBmbGV4U2hyaW5rOiB0aGlzLnNocmluayA/PyB0aGlzLmZsZXhTaHJpbmssXG4gICAgICAgIGZsZXhHcm93OiB0aGlzLmdyb3cgPz8gdGhpcy5mbGV4R3JvdyxcbiAgICAgICAgZmxleFdyYXA6IHRoaXMud3JhcCA/PyB0aGlzLmZsZXhXcmFwLFxuICAgICAgICBvcmRlcjogdGhpcy5vcmRlcixcbiAgICAgICAgZ2FwOiB0aGlzLmdhcCxcbiAgICAgICAgY29sdW1uR2FwOiB0aGlzLmNvbHVtbkdhcCxcbiAgICAgICAgcm93R2FwOiB0aGlzLnJvd0dhcCxcbiAgICAgICAgZ3JpZENvbHVtbjogdGhpcy5sYXlvdXRCbGVlZCA/IHRoaXMubGF5b3V0QmxlZWQgOiB0aGlzLmdyaWRDb2x1bW4sXG4gICAgICAgIGdyaWRSb3c6IHRoaXMuZ3JpZFJvdyxcbiAgICAgICAgZ3JpZEF1dG9GbG93OiB0aGlzLmdyaWRBdXRvRmxvdyxcbiAgICAgICAgZ3JpZEF1dG9Db2x1bW5zOiB0aGlzLmdyaWRBdXRvQ29sdW1ucyxcbiAgICAgICAgZ3JpZEF1dG9Sb3dzOiB0aGlzLmdyaWRBdXRvUm93cyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogdGhpcy5zdWJncmlkID8gJ3N1YmdyaWQnIDogdGhpcy5ncmlkVGVtcGxhdGVDb2x1bW5zLFxuICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiB0aGlzLmdyaWRUZW1wbGF0ZVJvd3MsXG4gICAgICAgIGdyaWRUZW1wbGF0ZUFyZWFzOiB0aGlzLmdyaWRUZW1wbGF0ZUFyZWFzLFxuICAgICAgICBncmlkQXJlYTogdGhpcy5ncmlkQXJlYSxcbiAgICAgICAgLy8gU2l6aW5nXG4gICAgICAgIHc6IHRoaXMudyxcbiAgICAgICAgbWF4dzogdGhpcy5tYXh3LFxuICAgICAgICBtaW53OiB0aGlzLm1pbncsXG4gICAgICAgIGg6IHRoaXMuaCxcbiAgICAgICAgbWF4aDogdGhpcy5tYXhoLFxuICAgICAgICBtaW5oOiB0aGlzLm1pbmgsXG4gICAgICAgIC8vIENvbG9yc1xuICAgICAgICBiZzogdGhpcy5iZyxcbiAgICAgICAgYzogdGhpcy5jLFxuICAgICAgICAvLyBCb3JkZXJzXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGlzLmJvcmRlckNvbG9yLFxuICAgICAgICBib3JkZXJXaWR0aDogdGhpcy5ib3JkZXJXaWR0aCxcbiAgICAgICAgYm9yZGVyU3R5bGU6IHRoaXMuYm9yZGVyU3R5bGUsXG4gICAgICAgIGJvcmRlcjogdGhpcy5ib3JkZXJcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJUb3A6IHRoaXMuYm9yZGVyVG9wXG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm9yZGVyUmlnaHQ6IHRoaXMuYm9yZGVyUmlnaHRcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJMZWZ0OiB0aGlzLmJvcmRlckxlZnRcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJCb3R0b206IHRoaXMuYm9yZGVyQm90dG9tXG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgLy8gQm9yZGVyIFJhZGl1c1xuICAgICAgICBib3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyUmFkaXVzLFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlclRvcFJpZ2h0UmFkaXVzID8/IHRoaXMuYm9yZGVyVG9wUmFkaXVzID8/IHRoaXMuYm9yZGVyUmlnaHRSYWRpdXMsXG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJUb3BMZWZ0UmFkaXVzID8/IHRoaXMuYm9yZGVyVG9wUmFkaXVzID8/IHRoaXMuYm9yZGVyTGVmdFJhZGl1cyxcbiAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA/PyB0aGlzLmJvcmRlckJvdHRvbVJhZGl1cyA/PyB0aGlzLmJvcmRlclJpZ2h0UmFkaXVzLFxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOlxuICAgICAgICAgIHRoaXMuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA/PyB0aGlzLmJvcmRlckJvdHRvbVJhZGl1cyA/PyB0aGlzLmJvcmRlckxlZnRSYWRpdXMsXG4gICAgICAgIC8vIEZvbnRzXG4gICAgICAgIGxpbmVIZWlnaHQ6IHRoaXMubGluZUhlaWdodCxcbiAgICAgICAgZm9udFdlaWdodDogdGhpcy5mdyA/PyB0aGlzLmZvbnRXZWlnaHQsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLmZzID8/IHRoaXMuZm9udFNpemUsXG4gICAgICAgIGZvbnRGYW1pbHk6IHRoaXMuZm9udEZhbWlseSxcbiAgICAgICAgLy8gT3BhY2l0eVxuICAgICAgICBvcGFjaXR5OiB0aGlzLm9wYWNpdHksXG4gICAgICAgIC8vIEVsZXZhdGlvblxuICAgICAgICBlbGV2YXRpb246IHRoaXMuZWxldmF0aW9uLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgZGVmYXVsdENvbnZlcnRlciB9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBjb25zdCBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgPSB7XG4gIGZyb21BdHRyaWJ1dGU6ICh2YWx1ZSwgdHlwZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAodmFsdWU/LlswXSA9PT0gJ3snKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLmZyb21BdHRyaWJ1dGUodmFsdWUsIE9iamVjdCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLmZyb21BdHRyaWJ1dGUodmFsdWUsIHR5cGUpO1xuICB9LFxuICB0b0F0dHJpYnV0ZTogKHZhbHVlLCB0eXBlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLnRvQXR0cmlidXRlKHZhbHVlLCBPYmplY3QpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdENvbnZlcnRlci50b0F0dHJpYnV0ZSh2YWx1ZSwgdHlwZSk7XG4gIH0sXG59O1xuIiwgImltcG9ydCB7IERpcmVjdGl2ZVJlc3VsdCB9IGZyb20gJ2xpdC9kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHsgdW5zYWZlU1ZHLCBVbnNhZmVTVkdEaXJlY3RpdmUgfSBmcm9tICdsaXQvZGlyZWN0aXZlcy91bnNhZmUtc3ZnLmpzJztcblxuZXhwb3J0IGNvbnN0IGhlYkxvZ29TdmdDb250ZW50czogRGlyZWN0aXZlUmVzdWx0PHR5cGVvZiBVbnNhZmVTVkdEaXJlY3RpdmU+ID0gdW5zYWZlU1ZHKFxuICBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiBpZD1cIkxheWVyXzFcIiB4PVwiMFwiIHk9XCIwXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgNTM2LjI3IDE4Ni4yNFwiPjxzdHlsZT4uc3Qwe2ZpbGw6I2UxMjUxYn0uc3Qxe2ZpbGw6I2ZmZn08L3N0eWxlPjxnIGlkPVwiX3gzMV8tSEVCX01BSU5fTE9HT18wMDAwMDA5NjA0MzQwNDIwNjg2MTg4MDg3MDAwMDAwNDgxMzI0MDkzODk0Njg1NTM1NV9cIj48cGF0aCBkPVwiTTkzLjEyIDE4Ni4yNEM0MS42OSAxODYuMjQgMCAxNDQuNTUgMCA5My4xMlM0MS42OSAwIDkzLjEyIDBoMzUwLjAzYzUxLjQzIDAgOTMuMTIgNDEuNjkgOTMuMTIgOTMuMTJzLTQxLjY5IDkzLjEyLTkzLjEyIDkzLjEySDkzLjEyelwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNOTMuMTIgMTc0LjE5Yy00NC43NiAwLTgxLjA1LTM2LjI5LTgxLjA1LTgxLjA1czM2LjI5LTgxLjA1IDgxLjA1LTgxLjA1aDM1MC4wM2M0NC43NiAwIDgxLjA1IDM2LjI5IDgxLjA1IDgxLjA1cy0zNi4yOSA4MS4wNS04MS4wNSA4MS4wNUg5My4xMnpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwibTQ0NC45NCAyNC4xMS0zNTMuNjQuMDJjLTM3LjA3IDAtNjcuMiAzMC45NS02Ny4xNiA2OS4wNyAwIDM3LjkzIDMwLjE2IDY4Ljg4IDY3LjE2IDY4Ljg4bDM1My42My0uMDdjMzcuMS0uMDMgNjcuMTUtMzAuODkgNjcuMi02OC44NS0uMDQtMzguMi0zMC4wOS02OS4wNS02Ny4xOS02OS4wNXpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTIyNC4yMSAxMzIuMjNoODguMWwuNzYtMTIuOThoLTU2LjE4di0xNC44NGg0NC44MVY4OS4zM2gtNDQuODFWNzMuMjVsNTguOTItLjAxIDEuMTUtMTkuMjloLTk3LjR6TTEzMi40NiA1My45NXYzNS4zOEgxMDguNlY1My45NUg3MS4yN2w0LjY1IDc4LjI4aDMyLjY4di0yNy44MmgyMy44NnYyNy44MmgzMi42OGw0LjY1LTc4LjI4ek00NDguNTIgOTcuMDJjOS45LTIuODMgMTYuNDktOC41OSAxNi40OS0yMC42Ny4wMy0xMy44Mi0xMS4wNi0yMi40LTI1LjI5LTIyLjRoLTczLjI4bDQuNjUgNzguMjloNjQuMDZjMjcuOTggMCAyNi4zOS0xOC44IDI2LjM5LTE4LjggMC03Ljk2LTUuMzMtMTQuNjEtMTMuMDItMTYuNDJ6bS0zMS4wMiAyMi4yMmgtMTMuNzF2LTE0LjgzaDEzLjIyYzcuMjMgMCAxMS4wOSAyLjMxIDExLjA5IDcuNDguMDEgNC45NC0zLjQ5IDcuMzUtMTAuNiA3LjM1em0xLjA2LTI5LjkxaC0xNC43N1Y3My4yNWgxNC4yNWM3Ljg1IDAgMTIuMDMgMi41IDEyLjAzIDguMTEgMCA1LjM1LTMuNzkgNy45Ny0xMS41MSA3Ljk3ek0xODIuNzYgODkuMzNsLjkgMTUuMDhoMjIuMDNsLjktMTUuMDh6TTMyOS42NCA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwiTTUzMC4zNCAxNzIuNzdjMC0yLjQ2LTEuNDYtMy41NC00LjQtMy41NGgtNC43NHYxMi40NGgxLjg4di01LjM5aDIuMTdsMy4yOCA1LjM5aDIuMTFsLTMuNTQtNS40OGMxLjg0LS4yMiAzLjI0LTEuMTkgMy4yNC0zLjQyem0tNy4yNSAxLjkydi0zLjg2aDIuNTdjMS4zMSAwIDIuNzEuMjkgMi43MSAxLjgzIDAgMS45Mi0xLjQzIDIuMDMtMy4wMyAyLjAzaC0yLjI1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNNTI1LjM3IDE2NC42N2MtNS45MyAwLTEwLjk2IDQuNTctMTAuOTYgMTAuNzYgMCA2LjI0IDUuMDIgMTAuODEgMTAuOTYgMTAuODEgNS44OCAwIDEwLjktNC41NyAxMC45LTEwLjgxIDAtNi4yLTUuMDItMTAuNzYtMTAuOS0xMC43NnptMCAxOS43OGMtNC45MyAwLTguNzktMy44My04Ljc5LTkuMDIgMC01LjExIDMuODUtOC45NiA4Ljc5LTguOTYgNC44OCAwIDguNzMgMy44NSA4LjczIDguOTYgMCA1LjE5LTMuODUgOS4wMi04LjczIDkuMDJ6XCIgY2xhc3M9XCJzdDBcIi8+PC9nPjwvc3ZnPmBcbik7XG5cbmV4cG9ydCBjb25zdCBoZWJMb2dvV2hpdGVDb3B5cmlnaHRTdmdDb250ZW50czogRGlyZWN0aXZlUmVzdWx0PHR5cGVvZiBVbnNhZmVTVkdEaXJlY3RpdmU+ID1cbiAgdW5zYWZlU1ZHKFxuICAgIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIGlkPVwiTGF5ZXJfMVwiIHg9XCIwXCIgeT1cIjBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MzYuMjcgMTg2LjI0XCI+PHN0eWxlPi5zdDB7ZmlsbDojZTEyNTFifS5zdDF7ZmlsbDojZmZmfTwvc3R5bGU+PGcgaWQ9XCJfeDMxXy1IRUJfTUFJTl9MT0dPXzAwMDAwMDk2MDQzNDA0MjA2ODYxODgwODcwMDAwMDA0ODEzMjQwOTM4OTQ2ODU1MzU1X1wiPjxwYXRoIGQ9XCJNOTMuMTIgMTg2LjI0QzQxLjY5IDE4Ni4yNCAwIDE0NC41NSAwIDkzLjEyUzQxLjY5IDAgOTMuMTIgMGgzNTAuMDNjNTEuNDMgMCA5My4xMiA0MS42OSA5My4xMiA5My4xMnMtNDEuNjkgOTMuMTItOTMuMTIgOTMuMTJIOTMuMTJ6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk05My4xMiAxNzQuMTljLTQ0Ljc2IDAtODEuMDUtMzYuMjktODEuMDUtODEuMDVzMzYuMjktODEuMDUgODEuMDUtODEuMDVoMzUwLjAzYzQ0Ljc2IDAgODEuMDUgMzYuMjkgODEuMDUgODEuMDVzLTM2LjI5IDgxLjA1LTgxLjA1IDgxLjA1SDkzLjEyelwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJtNDQ0Ljk0IDI0LjExLTM1My42NC4wMmMtMzcuMDcgMC02Ny4yIDMwLjk1LTY3LjE2IDY5LjA3IDAgMzcuOTMgMzAuMTYgNjguODggNjcuMTYgNjguODhsMzUzLjYzLS4wN2MzNy4xLS4wMyA2Ny4xNS0zMC44OSA2Ny4yLTY4Ljg1LS4wNC0zOC4yLTMwLjA5LTY5LjA1LTY3LjE5LTY5LjA1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNMjI0LjIxIDEzMi4yM2g4OC4xbC43Ni0xMi45OGgtNTYuMTh2LTE0Ljg0aDQ0LjgxVjg5LjMzaC00NC44MVY3My4yNWw1OC45Mi0uMDEgMS4xNS0xOS4yOWgtOTcuNHpNMTMyLjQ2IDUzLjk1djM1LjM4SDEwOC42VjUzLjk1SDcxLjI3bDQuNjUgNzguMjhoMzIuNjh2LTI3LjgyaDIzLjg2djI3LjgyaDMyLjY4bDQuNjUtNzguMjh6TTQ0OC41MiA5Ny4wMmM5LjktMi44MyAxNi40OS04LjU5IDE2LjQ5LTIwLjY3LjAzLTEzLjgyLTExLjA2LTIyLjQtMjUuMjktMjIuNGgtNzMuMjhsNC42NSA3OC4yOWg2NC4wNmMyNy45OCAwIDI2LjM5LTE4LjggMjYuMzktMTguOCAwLTcuOTYtNS4zMy0xNC42MS0xMy4wMi0xNi40MnptLTMxLjAyIDIyLjIyaC0xMy43MXYtMTQuODNoMTMuMjJjNy4yMyAwIDExLjA5IDIuMzEgMTEuMDkgNy40OC4wMSA0Ljk0LTMuNDkgNy4zNS0xMC42IDcuMzV6bTEuMDYtMjkuOTFoLTE0Ljc3VjczLjI1aDE0LjI1YzcuODUgMCAxMi4wMyAyLjUgMTIuMDMgOC4xMSAwIDUuMzUtMy43OSA3Ljk3LTExLjUxIDcuOTd6TTE4Mi43NiA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpNMzI5LjY0IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4ek01MjguMzQgMTcwLjc3YzAtMi40Ni0xLjQ2LTMuNTQtNC40LTMuNTRoLTQuNzR2MTIuNDRoMS44OHYtNS4zOWgyLjE3bDMuMjggNS4zOWgyLjExbC0zLjU0LTUuNDhjMS44NC0uMjIgMy4yNC0xLjE5IDMuMjQtMy40MnptLTcuMjUgMS45MnYtMy44NmgyLjU3YzEuMzEgMCAyLjcxLjI5IDIuNzEgMS44MyAwIDEuOTItMS40MyAyLjAzLTMuMDMgMi4wM2gtMi4yNXpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwiTTUyMy4zNyAxNjIuNjdjLTUuOTMgMC0xMC45NiA0LjU3LTEwLjk2IDEwLjc2IDAgNi4yNCA1LjAyIDEwLjgxIDEwLjk2IDEwLjgxIDUuODggMCAxMC45LTQuNTcgMTAuOS0xMC44MSAwLTYuMi01LjAyLTEwLjc2LTEwLjktMTAuNzZ6bTAgMTkuNzhjLTQuOTMgMC04Ljc5LTMuODMtOC43OS05LjAyIDAtNS4xMSAzLjg1LTguOTYgOC43OS04Ljk2IDQuODggMCA4LjczIDMuODUgOC43MyA4Ljk2IDAgNS4xOS0zLjg1IDkuMDItOC43MyA5LjAyelwiIGNsYXNzPVwic3QxXCIvPjwvZz48L3N2Zz5gXG4gICk7XG5cbmV4cG9ydCBjb25zdCBoZWJMb2dvSW52ZXJzZVN2Z0NvbnRlbnRzOiBEaXJlY3RpdmVSZXN1bHQ8dHlwZW9mIFVuc2FmZVNWR0RpcmVjdGl2ZT4gPSB1bnNhZmVTVkcoXG4gIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIGlkPVwiTGF5ZXJfMVwiIHg9XCIwXCIgeT1cIjBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MzYuMjcgMTg2LjI0XCI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggZD1cIk00NDMuMTUgMEg5My4xMkM0MS42OSAwIDAgNDEuNjkgMCA5My4xMmMwIDUxLjQzIDQxLjY5IDkzLjEyIDkzLjEyIDkzLjEyaDM1MC4wM2M1MS40MyAwIDkzLjEyLTQxLjY5IDkzLjEyLTkzLjEyQzUzNi4yNyA0MS42OSA0OTQuNTggMCA0NDMuMTUgMHptMCAxNzQuMTlIOTMuMTJjLTQ0Ljc2IDAtODEuMDUtMzYuMjktODEuMDUtODEuMDVzMzYuMjktODEuMDUgODEuMDUtODEuMDVoMzUwLjAzYzQ0Ljc2IDAgODEuMDUgMzYuMjkgODEuMDUgODEuMDUuMDEgNDQuNzYtMzYuMjggODEuMDUtODEuMDUgODEuMDV6bS0xMy4wOC05Mi44M2MwIDUuMzYtMy43OSA3Ljk4LTExLjUxIDcuOThoLTE0Ljc3VjczLjI1aDE0LjI1YzcuODQgMCAxMi4wMyAyLjUgMTIuMDMgOC4xMXptLTEuOTYgMzAuNTNjMCA0Ljk0LTMuNSA3LjM2LTEwLjYxIDcuMzZoLTEzLjcxdi0xNC44M2gxMy4yMmM3LjI0LS4wMSAxMS4xIDIuMyAxMS4xIDcuNDd6bTE2LjgzLTg3Ljc4LTM1My42NC4wMmMtMzcuMDcgMC02Ny4yIDMwLjk1LTY3LjE2IDY5LjA3IDAgMzcuOTIgMzAuMTYgNjguODggNjcuMTYgNjguODhsMzUzLjYzLS4wN2MzNy4xLS4wMyA2Ny4xNS0zMC44OSA2Ny4yLTY4Ljg1LS4wNC0zOC4yLTMwLjA5LTY5LjA1LTY3LjE5LTY5LjA1em0tMjc5LjggMTA4LjEyaC0zMi42OHYtMjcuODJIMTA4LjZ2MjcuODJINzUuOTJsLTQuNjUtNzguMjhoMzcuMzN2MzUuMzhoMjMuODZWNTMuOTVoMzcuMzNsLTQuNjUgNzguMjh6bTQwLjU1LTI3LjgyaC0yMi4wNGwtLjktMTUuMDhoMjMuODNsLS44OSAxNS4wOHptMTEwLjEyLTMxLjE3LTU4LjkyLjAxdjE2LjA4aDQ0LjgxdjE1LjA4aC00NC44MXYxNC44M2g1Ni4xOGwtLjc2IDEyLjk5aC04OC4xbC00LjY1LTc4LjI4aDk3LjRsLTEuMTUgMTkuMjl6bTM2Ljc2IDMxLjE3aC0yMi4wNGwtLjktMTUuMDhoMjMuODNsLS44OSAxNS4wOHptMTA4Ljk3IDkuMDNzMS41OSAxOC44LTI2LjM5IDE4LjhoLTY0LjA2bC00LjY1LTc4LjI5aDczLjI4YzE0LjIzIDAgMjUuMzEgOC41OCAyNS4yOSAyMi40IDAgMTIuMDgtNi41OSAxNy44NS0xNi40OSAyMC42NyA3LjY5IDEuODEgMTMuMDIgOC40NiAxMy4wMiAxNi40MnpNNTMwLjM0IDE3Mi43N2MwLTIuNDYtMS40Ni0zLjU0LTQuNC0zLjU0aC00Ljc0djEyLjQ0aDEuODh2LTUuMzloMi4xN2wzLjI4IDUuMzloMi4xMWwtMy41NC01LjQ4YzEuODQtLjIyIDMuMjQtMS4xOSAzLjI0LTMuNDJ6bS03LjI1IDEuOTJ2LTMuODZoMi41N2MxLjMxIDAgMi43MS4yOSAyLjcxIDEuODMgMCAxLjkyLTEuNDMgMi4wMy0zLjAzIDIuMDNoLTIuMjV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk01MjUuMzcgMTY0LjY3Yy01LjkzIDAtMTAuOTYgNC41Ny0xMC45NiAxMC43NiAwIDYuMjQgNS4wMiAxMC44MSAxMC45NiAxMC44MSA1Ljg4IDAgMTAuOS00LjU3IDEwLjktMTAuODEgMC02LjItNS4wMi0xMC43Ni0xMC45LTEwLjc2em0wIDE5Ljc4Yy00LjkzIDAtOC43OS0zLjgzLTguNzktOS4wMiAwLTUuMTEgMy44NS04Ljk2IDguNzktOC45NiA0Ljg4IDAgOC43MyAzLjg1IDguNzMgOC45NiAwIDUuMTktMy44NSA5LjAyLTguNzMgOS4wMnpcIiBjbGFzcz1cInN0MFwiLz48L3N2Zz5gXG4pO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG5pbXBvcnQge1xuICBjb25maWcgYXMgZ2V0dGVyQ29uZmlnLFxuICBzZXRDb25maWcgYXMgc2V0dGVyQ29uZmlnLFxuICBNb3J0YXJUaGVtZUNvbmZpZyxcbn0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgU3Vic2V0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNTc3IsIHNpZ25hbCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCB0eXBlIE10ZVRoZW1lID0gJ2RlZmF1bHQnIHwgJ3B4TGlnaHQnIHwgJ2N4TGlnaHQnIHwgJ3J4TGlnaHQnO1xuXG5leHBvcnQgdHlwZSBNdGVDb2xvclNjaGVtZSA9ICdsaWdodCcgfCAnZGFyaycgfCAnc3lzdGVtJztcblxuY29uc3QgQ0FDSEVfVE9fS0VZID0gJ210ZS50aGVtZS5jYWNoZS10byc7XG5jb25zdCBDT0xPUl9TQ0hFTUVfS0VZID0gJ210ZS50aGVtZS5nbG9iYWwtY29sb3Itc2NoZW1lJztcblxuY2xhc3MgX010ZVRoZW1lU2VydmljZSB7XG4gIGNvbmZpZyA9IGdldHRlckNvbmZpZztcblxuICBwcml2YXRlIHJvb3RPYnNlcnZlcj86IE11dGF0aW9uT2JzZXJ2ZXI7XG4gIHByaXZhdGUgdGhlbWVTaWduYWwgPSBzaWduYWw8TXRlVGhlbWUgfCBudWxsPih0aGlzLmdldEdsb2JhbFRoZW1lKCkpO1xuICBwcml2YXRlIGNvbG9yU2NoZW1lU2lnbmFsID0gc2lnbmFsPE10ZUNvbG9yU2NoZW1lIHwgbnVsbD4odGhpcy5nZXRHbG9iYWxDb2xvclNjaGVtZSgpID8/ICdsaWdodCcpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdENhY2hlKCk7XG4gIH1cblxuICAvKiogQ29uZmlndXJlcyB0aGUgYE10ZVRoZW1lU2VydmljZWAgdG8gY2FjaGUgY29sb3Itc2NoZW1lIGNoYW5nZXMgdG8gYGxvY2FsU3RvcmFnZWAsIGBzZXNzaW9uU3RvcmFnZWAsIG9yIG5laXRoZXIuICovXG4gIHB1YmxpYyBjYWNoZUNvbG9yU2NoZW1lVG8obWV0aG9kOiAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZScpIHtcbiAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBDbGVhciBhbGwga2V5cyBmcm9tIGFsbCBzdG9yYWdlIGxvY2F0aW9ucyBpZiBub25lXG4gICAgaWYgKG1ldGhvZCA9PT0gJ25vbmUnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShDT0xPUl9TQ0hFTUVfS0VZKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB0cnkge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oQ09MT1JfU0NIRU1FX0tFWSk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50U2NoZW1lID0gdGhpcy5jb2xvclNjaGVtZVNpZ25hbC5nZXQoKTtcbiAgICAvLyBTZXQgY2FjaGUgbWV0aG9kIGluIHN0b3JhZ2UgLSBUcnkgbG9jYWxTdG9yYWdlIGZpcnN0XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENBQ0hFX1RPX0tFWSwgbWV0aG9kKTtcbiAgICAgIGlmIChjdXJyZW50U2NoZW1lKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENPTE9SX1NDSEVNRV9LRVksIGN1cnJlbnRTY2hlbWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdNdGVUaGVtZVNlcnZpY2U6IENvdWxkIG5vdCBzZXQgY29sb3Igc2NoZW1lIGNhY2hlIG1ldGhvZCB0byBgbG9jYWxTdG9yYWdlYC4gQXR0ZW1wdGluZyBmYWxsYmFjayB0byBgc2Vzc2lvblN0b3JhZ2VgLiBDYWNoaW5nIHdpbGwgb25seSBoYXBwZW4gdG8gc2Vzc2lvblN0b3JhZ2UuJ1xuICAgICAgKTtcbiAgICAgIC8vIFRyeSBzZXNzaW9uU3RvcmFnZSBuZXh0XG4gICAgICB0cnkge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKENBQ0hFX1RPX0tFWSwgJ3Nlc3Npb25TdG9yYWdlJyk7XG4gICAgICAgIGlmIChjdXJyZW50U2NoZW1lKSB7XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShDT0xPUl9TQ0hFTUVfS0VZLCBjdXJyZW50U2NoZW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdNdGVUaGVtZVNlcnZpY2U6IENvdWxkIG5vdCBzZXQgY29sb3Igc2NoZW1lIGNhY2hlIG1ldGhvZCB0byBgbG9jYWxTdG9yYWdlYCBvciBgc2Vzc2lvblN0b3JhZ2VgLiBDYWNoaW5nIG5vdCBlbmFibGVkLidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgY3VycmVudCBnbG9iYWwgdGhlbWUgb24gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIHNldEdsb2JhbFRoZW1lKHRoZW1lOiBNdGVUaGVtZSkge1xuICAgIGlmICghdGhlbWUgfHwgdHlwZW9mIHRoZW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdGVUaGVtZVNlcnZpY2U6IEdsb2JhbCB0aGVtZSBwYXJhbSBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICAgIH1cbiAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgIGlmICh0aGVtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2RhdGEtbXRlLXRoZW1lJywgdGhlbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbXRlLXRoZW1lJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldHMgdGhlIGN1cnJlbnQgZ2xvYmFsIGNvbG9yLXNjaGVtZSBvbiB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgc2V0R2xvYmFsQ29sb3JTY2hlbWUoY29sb3JTY2hlbWU6IE10ZUNvbG9yU2NoZW1lKSB7XG4gICAgaWYgKCFjb2xvclNjaGVtZSB8fCB0eXBlb2YgY29sb3JTY2hlbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ010ZVRoZW1lU2VydmljZTogR2xvYmFsIGNvbG9yU2NoZW1lIHBhcmFtIG11c3QgYmUgYSBzdHJpbmcuJyk7XG4gICAgfVxuICAgIGNvbnN0IHNjaGVtZSA9IGNvbG9yU2NoZW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHNjaGVtZSA9PT0gJ2RhcmsnIHx8IHNjaGVtZSA9PT0gJ2xpZ2h0JyB8fCBzY2hlbWUgPT09ICdzeXN0ZW0nKSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZScsIHNjaGVtZSk7XG4gICAgICB0aGlzLnNldENhY2hlVmFsdWUoQ09MT1JfU0NIRU1FX0tFWSwgY29sb3JTY2hlbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBjdXJyZW50IGdsb2JhbCB0aGVtZSBmcm9tIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBnZXRHbG9iYWxUaGVtZSgpOiBNdGVUaGVtZSB8IG51bGwge1xuICAgIGNvbnN0IHZhbHVlID0gZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCdkYXRhLW10ZS10aGVtZScpIGFzIE10ZVRoZW1lO1xuICAgIGlmICghWydkZWZhdWx0JywgJ3B4TGlnaHQnLCAnY3hMaWdodCcsICdyeExpZ2h0J10uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlIGFzIE10ZVRoZW1lO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBjdXJyZW50IGdsb2JhbCBjb2xvci1zY2hlbWUgZnJvbSB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgZ2V0R2xvYmFsQ29sb3JTY2hlbWUoKTogTXRlQ29sb3JTY2hlbWUgfCBudWxsIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZShcbiAgICAgICdkYXRhLW10ZS1jb2xvci1zY2hlbWUnXG4gICAgKSBhcyBNdGVDb2xvclNjaGVtZTtcbiAgICBpZiAoIVsnbGlnaHQnLCAnZGFyaycsICdzeXN0ZW0nXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgYXMgTXRlQ29sb3JTY2hlbWU7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgYSByZWFjdGl2ZSBzaWduYWwgdGhhdCB3aWxsIHVwZGF0ZSBhbnkgdGltZSB0aGUgZ2xvYmFsIHRoZW1lIGNoYW5nZXMgKi9cbiAgcHVibGljIHNlbGVjdEdsb2JhbFRoZW1lKCkge1xuICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgcmV0dXJuIHRoaXMudGhlbWVTaWduYWw7XG4gIH1cblxuICAvKiogUmV0dXJucyBhIHJlYWN0aXZlIHNpZ25hbCB0aGF0IHdpbGwgdXBkYXRlIGFueSB0aW1lIHRoZSBnbG9iYWwgY29sb3Itc2NoZW1lIGNoYW5nZXMgKi9cbiAgcHVibGljIHNlbGVjdEdsb2JhbENvbG9yU2NoZW1lKCkge1xuICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgcmV0dXJuIHRoaXMuY29sb3JTY2hlbWVTaWduYWw7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgdmFsdWUgb2YgYWxsIG9mIHRoZSBnaXZlbiB0aGVtZSB2YXJpYWJsZXMgb24gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIHNldChcbiAgICBjb25maWdGbk9yT2JqOlxuICAgICAgfCBTdWJzZXQ8TW9ydGFyVGhlbWVDb25maWc+XG4gICAgICB8ICgoY29uZmlnOiBNb3J0YXJUaGVtZUNvbmZpZykgPT4gU3Vic2V0PE1vcnRhclRoZW1lQ29uZmlnPilcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWdGbk9yT2JqID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25maWdGbk9yT2JqID0gY29uZmlnRm5Pck9iaih0aGlzLmNvbmZpZyk7XG4gICAgfVxuICAgIGNvbnN0IG1hcHBpbmdzID0gdGhpcy5mbGF0dGVuUGF0aHMoY29uZmlnRm5Pck9iaik7XG4gICAgbWFwcGluZ3MuZm9yRWFjaCgoW3BhdGgsIHZhbF0pID0+IHtcbiAgICAgIGNvbnN0IGNzc1ZhciA9IHBhdGgucmVkdWNlKChhY2MsIHByb3ApID0+IHtcbiAgICAgICAgcmV0dXJuIGFjY1twcm9wXTtcbiAgICAgIH0sIHNldHRlckNvbmZpZyk7XG4gICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5zdHlsZS5zZXRQcm9wZXJ0eShjc3NWYXIsIGAke3ZhbH1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciB0aGUgcmVxdWVzdGVkIHRoZW1lIHZhcmlhYmxlIGZyb20gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIGdldDxUPihrMTogKHRoZW1lQ29uZmlnOiBNb3J0YXJUaGVtZUNvbmZpZykgPT4gVCk6IFQ7XG4gIHB1YmxpYyBnZXQ8SzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZz4oazE6IEsxKTogTW9ydGFyVGhlbWVDb25maWdbSzFdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdPihcbiAgICBrMTogSzEsXG4gICAgazI6IEsyXG4gICk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1cbiAgPihrMTogSzEsIGsyOiBLMiwgazM6IEszKTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM107XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl0sXG4gICAgSzQgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVxuICA+KGsxOiBLMSwgazI6IEsyLCBrMzogSzMsIGs0OiBLNCk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXSxcbiAgICBLNCBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdLFxuICAgIEs1IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMywgazQ6IEs0LCBrNTogSzUpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM10sXG4gICAgSzUgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF0sXG4gICAgSzYgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMywgazQ6IEs0LCBrNTogSzUsIGs2OiBLNik6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVtLNV1bSzZdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM10sXG4gICAgSzUgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF0sXG4gICAgSzYgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdXG4gID4oXG4gICAgLi4ua2V5czpcbiAgICAgIHwgW0sxXVxuICAgICAgfCBbSzEsIEsyXVxuICAgICAgfCBbSzEsIEsyLCBLM11cbiAgICAgIHwgW0sxLCBLMiwgSzMsIEs0XVxuICAgICAgfCBbSzEsIEsyLCBLMywgSzQsIEs1XVxuICAgICAgfCBbSzEsIEsyLCBLMywgSzQsIEs1LCBLNl1cbiAgKTogYW55IHtcbiAgICBjb25zdCBbZm5dID0ga2V5cyA/PyBbbnVsbF07XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgY3NzVmFyID0gKGZuIGFzIGFueSkoc2V0dGVyQ29uZmlnKTtcbiAgICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGdsb2JhbFRoaXM/LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShjc3NWYXIpO1xuICAgIH1cbiAgICBjb25zdCBjc3NWYXIgPSBrZXlzLnJlZHVjZSgoYWNjOiBhbnksIGtleSkgPT4gYWNjW2tleV0sIHNldHRlckNvbmZpZyBhcyBhbnkpIGFzIHN0cmluZztcbiAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShnbG9iYWxUaGlzPy5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoY3NzVmFyKTtcbiAgfVxuXG4gIC8qKiBGbGF0dGVucyBhIGdpdmVuIG9iamVjdCB0byBhbiBhcnJheSBvZiBwYXRoIGtleXMgYW5kIGl0cyByZXN1bHRpbmcgdmFsdWUgKi9cbiAgcHJpdmF0ZSBmbGF0dGVuUGF0aHMob2JqOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBwYXRoOiBzdHJpbmdbXSA9IFtdKTogW3N0cmluZ1tdLCBhbnldW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IG5lc3RlZCA9IG9ialtrZXldO1xuICAgICAgaWYgKHR5cGVvZiBuZXN0ZWQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHBhdGgucHVzaChrZXkpO1xuICAgICAgICBPYmplY3QuYXNzaWduKGFjYywgdGhpcy5mbGF0dGVuUGF0aHMobmVzdGVkLCBwYXRoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoLnB1c2goa2V5KTtcbiAgICAgICAgYWNjLnB1c2goW3BhdGgsIG5lc3RlZF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU11dGF0aW9uRXZlbnQgPSAobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSB7XG4gICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGF0YS1tdGUtY29sb3Itc2NoZW1lJykge1xuICAgICAgICAgIHRoaXMuY29sb3JTY2hlbWVTaWduYWwuc2V0KHRoaXMuZ2V0R2xvYmFsQ29sb3JTY2hlbWUoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2RhdGEtbXRlLXRoZW1lJykge1xuICAgICAgICAgIHRoaXMudGhlbWVTaWduYWwuc2V0KHRoaXMuZ2V0R2xvYmFsVGhlbWUoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBpbml0Q2FjaGUoKSB7XG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2FjaGVDb2xvclNjaGVtZSA9IHRoaXMuZ2V0Q2FjaGVWYWx1ZShDT0xPUl9TQ0hFTUVfS0VZKTtcbiAgICAgICAgaWYgKGNhY2hlQ29sb3JTY2hlbWUgJiYgY2FjaGVDb2xvclNjaGVtZSAhPT0gJycpIHtcbiAgICAgICAgICB0aGlzLnNldEdsb2JhbENvbG9yU2NoZW1lKGNhY2hlQ29sb3JTY2hlbWUgYXMgTXRlQ29sb3JTY2hlbWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdE9ic2VydmVyKCkge1xuICAgIGlmICghaXNTc3IoKSAmJiAhdGhpcy5yb290T2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMucm9vdE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5oYW5kbGVNdXRhdGlvbkV2ZW50KTtcbiAgICAgIHRoaXMucm9vdE9ic2VydmVyLm9ic2VydmUoZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnZGF0YS1tdGUtdGhlbWUnLCAnZGF0YS1tdGUtY29sb3Itc2NoZW1lJ10sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENhY2hlTWV0aG9kKCk6ICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJyB8IG51bGwge1xuICAgIC8vIFJldHJpZXZlIGNhY2hlIG1ldGhvZFxuICAgIGxldCBjYWNoZU1ldGhvZDogJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnIHwgbnVsbCA9IG51bGw7XG4gICAgLy8gVHJ5IGxvY2FsU3RvcmFnZVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBjYWNoZU1ldGhvZCA9IHZhbCBhcyAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZSc7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gVHJ5IHNlc3Npb25TdG9yYWdlXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB2YWwgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICBjYWNoZU1ldGhvZCA9IHZhbCBhcyAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIHJldHVybiBjYWNoZU1ldGhvZDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2FjaGVWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGNhY2hlTWV0aG9kID0gdGhpcy5nZXRDYWNoZU1ldGhvZCgpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoY2FjaGVNZXRob2QgPT09ICdsb2NhbFN0b3JhZ2UnKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChjYWNoZU1ldGhvZCA9PT0gJ3Nlc3Npb25TdG9yYWdlJykge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cblxuICBwcml2YXRlIGdldENhY2hlVmFsdWUoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjYWNoZU1ldGhvZCA9IHRoaXMuZ2V0Q2FjaGVNZXRob2QoKTtcbiAgICB0cnkge1xuICAgICAgaWYgKGNhY2hlTWV0aG9kID09PSAnbG9jYWxTdG9yYWdlJykge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIH0gZWxzZSBpZiAoY2FjaGVNZXRob2QgPT09ICdzZXNzaW9uU3RvcmFnZScpIHtcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVUaGVtZVNlcnZpY2UgPSBuZXcgX010ZVRoZW1lU2VydmljZSgpO1xuIiwgImltcG9ydCB7IGlzU3NyLCBpc1BsYXRmb3JtIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IHR5cGUgUG9ydGFsU3RhY2sgPSAnb3ZlcmxheSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydGFsZWRFbGVtZW50TWV0YWRhdGEge1xuICBlbGVtZW50OiBFbGVtZW50O1xuICBzdGFjazogUG9ydGFsU3RhY2s7XG4gIGNoaWxkUG9ydGFsZWRFbGVtZW50czogU2V0PEVsZW1lbnQ+O1xuICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ/OiBFbGVtZW50O1xuICBiYWNrZHJvcD86IEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudFBvcnRhbENvbnRyb2xsZXIge1xuICBpZDogbnVtYmVyO1xuICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ6IEVsZW1lbnQ7XG4gIG9wdGlvbnM6IHsgc3RhY2s6IFBvcnRhbFN0YWNrIH07XG59XG5cbmV4cG9ydCB0eXBlIFBvcnRhbEFkYXB0ZXI8VCA9IGFueT4gPSAoXG4gIHBvcnRhbEVsZW1lbnQ6IFQsXG4gIG91dGxldEVsZW1lbnQ6IEVsZW1lbnRcbikgPT4gUHJvbWlzZTxhbnk+IHwgYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRhbE9wdGlvbnMge1xuICAvKiogUmVuZGVycyB0aGUgYmFja2Ryb3AgZGltbWVkICovXG4gIHdpdGhEaW1CYWNrZHJvcD86IGJvb2xlYW47XG5cbiAgLyoqIE1ha2VzIHRoZSBiYWNrZHJvcCBpZ25vcmUgcG9pbnRlciBldmVudHMuIFVzZWZ1bCBmb3IgdHJpZ2dlck9uIFwiaG92ZXJcIi4gKi9cbiAgd2l0aEluZXJ0QmFja2Ryb3A/OiBib29sZWFuO1xuXG4gIC8qKiBEaXNhYmxlcyB0aGUgYWJpbGl0eSB0byBzY3JvbGwgdGhlIHBhZ2UgYmVoaW5kIHRoZSBvdmVybGF5IHdoZW4gdHJ1ZSAqL1xuICB3aXRoU2Nyb2xsTG9jaz86IGJvb2xlYW47XG5cbiAgLyoqIENhbGxiYWNrIGZvciBoYW5kbGluZyBjbG9zZU9uQ2xpY2tPdXRzaWRlIGV2ZW50cyB3aGVuIHRoZSBwb3J0YWwncyBiYWNrZHJvcCBpcyBjbGlja2VkICovXG4gIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyPzogKCkgPT4gYW55O1xuXG4gIC8qKiBUaGUgYW5pbWF0aW9uIGR1cmF0aW9uIGZvciBmYWRpbmcgYSBzaGFkb3cgYmFja2Ryb3AgaW4vb3V0ICovXG4gIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuXG4gIC8qKiBBZGFwdGVyIGZvciBcInBvcnRhbGluZ1wiIGFuIGVsZW1lbnQgZnJvbSBvbmUgbG9jYXRpb24gaW4gdGhlIERPTSB0byBhbm90aGVyLiBMZXZlcmFnZWQgYnkgZnJhbWV3b3JrIHdyYXBwZXJzIGZvciBpbXByb3ZlZCBpbnRlcm9wLiAqL1xuICBwb3J0YWxBZGFwdGVyPzogUG9ydGFsQWRhcHRlcjtcbn1cblxuLyoqIERlZmF1bHQgbmF0aXZlIERPTSBhZGFwdGVyIGZvciBwb3J0YWxpbmcgYW4gZWxlbWVudCB0byBhbm90aGVyIHRhcmdldCBlbGVtZW50ICovXG5leHBvcnQgY29uc3QgZGVmYXVsdFBvcnRhbEFkYXB0ZXI6IFBvcnRhbEFkYXB0ZXIgPSAocG9ydGFsRWxlbSwgb3V0bGV0RWxlbSkgPT4ge1xuICBvdXRsZXRFbGVtPy5hcHBlbmRDaGlsZChwb3J0YWxFbGVtKTtcbn07XG5cbmNsYXNzIF9NdGVQb3J0YWxTZXJ2aWNlIHtcbiAgLyoqIFNoYXJlZCBnbG9iYWwgY29uc3QgZm9yIHN0YWNrIGVsZW1lbnQgcmVmcyAqL1xuICBwcml2YXRlIHN0YWNrRWxlbWVudHM6IHsgb3ZlcmxheTogRWxlbWVudCB9ID0ge1xuICAgIG92ZXJsYXk6IHVuZGVmaW5lZCxcbiAgfTtcblxuICAvKiogU2hhcmVkIGdsb2JhbCBjb25zdCBmb3IgcG9ydGFsZWQgZWxlbWVudHMgbWV0YWRhdGEgKi9cbiAgcHJpdmF0ZSBwb3J0YWxlZEVsZW1lbnRzID0gbmV3IE1hcDxudW1iZXIsIE1hcDxFbGVtZW50LCBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YT4+KCk7XG5cbiAgcHJpdmF0ZSBhY3RpdmVTY3JvbGxMb2NrcyA9IG5ldyBTZXQ8RWxlbWVudD4oKTtcblxuICBwcml2YXRlIHN0YWNrTXV0YXRpb25PYnNlcnZlcj86IE11dGF0aW9uT2JzZXJ2ZXI7XG5cbiAgLyoqXG4gICAqIFdoZW4gY2FsbGVkLCB0aGlzIHNlcnZpY2Ugd2lsbCBhdHRlbXB0IHRvIGxvY2F0ZSB0aGUgYEBhbmd1bGFyL2Nka2Agb3ZlcmxheSBzdGFjay5cbiAgICogSWYgZm91bmQgdGhpcyBzZXJ2aWNlIHdpbGwgYmUgY29uZmlndXJlZCB0byB1c2UgdGhhdCBlbGVtZW50IGFzIHRoZSBgb3ZlcmxheWAgc3RhY2sgaW5zdGVhZCBvZiBpbml0aWFsaXppbmcgaXRzIG93bi5cbiAgICovXG4gIHB1YmxpYyBjb25maWd1cmVDZGtJbnRlcm9wKCkge1xuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgY29uc3QgY2RrU3RhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2RrLW92ZXJsYXktY29udGFpbmVyJyk7XG4gICAgICBpZiAoY2RrU3RhY2spIHtcbiAgICAgICAgdGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkgPSBjZGtTdGFjaztcbiAgICAgICAgdGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCh0aGlzLmlkRmFjdG9yeSgnb3ZlcmxheScpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgcG9ydGFsIGNvbnRyb2xsZXIuIEFsbCBpdGVtcyBpdCByZXF1ZXN0ZWQgdG8gYmUgcG9ydGFsZWQgd2lsbCBiZSB0cmFjayBhZ2FpbnN0IGl0LlxuICAgKiBXaGVuIHRoZSBwb3J0YWwgaXMgcmVtb3ZlZCB3ZSBjYW4gdGhlbiByZW1vdmUgYW55IGVsZW1lbnRzIGl0IGN1cnJlbnRseSBoYXMgcG9ydGFsZWQgYW5kXG4gICAqIGFueSBvZiB0aGVpciBwb3J0YWxlZCBjaGlsZHJlbi5cbiAgICovXG4gIHB1YmxpYyBhZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyKSB7XG4gICAgaWYgKCF0aGlzLnBvcnRhbGVkRWxlbWVudHMuaGFzKHBvcnRhbENvbnRyb2xsZXI/LmlkKSkge1xuICAgICAgLy8gVHJhY2sgaW4gc2V0IGJ5IElEIHNvIHdlIGRvbid0IGtlZXAgYSBsaXZlIHJlZmVyZW5jZSB0byB0aGUgY29udHJvbGxlciBpdHNlbGZcbiAgICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5zZXQocG9ydGFsQ29udHJvbGxlci5pZCwgbmV3IE1hcDxFbGVtZW50LCBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YT4oKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlbW92ZXMgYWxsIG9mIGEgcG9ydGFsIGNvbnRyb2xsZXJzIHBvcnRhbGVkIGVsZW1lbnRzIGFuZCB0aGVpciByZWZlcmVuY2VzICovXG4gIHB1YmxpYyByZW1vdmVDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyKSB7XG4gICAgLy8gQXR0ZW1wdCB0byByZW1vdmUgYWxsIGl0ZW1zIGF0dGFjaGVkIGJ5IHRoaXMgY29udHJvbGxlciBmcm9tIHRoZSBjb25maWd1cmVkIHN0YWNrXG4gICAgY29uc3QgYXR0YWNoZWRFbGVtZW50cyA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCk7XG4gICAgaWYgKGF0dGFjaGVkRWxlbWVudHMpIHtcbiAgICAgIGF0dGFjaGVkRWxlbWVudHMuZm9yRWFjaCgoaXRlbSkgPT4gdGhpcy5yZW1vdmVGcm9tU3RhY2socG9ydGFsQ29udHJvbGxlciwgaXRlbS5lbGVtZW50KSk7XG4gICAgfVxuICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5kZWxldGUocG9ydGFsQ29udHJvbGxlci5pZCk7XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlcyBhIHJlZiB0byB0aGUgY29uZmlndXJlZCBzdGFjayBleGlzdHMuIElmIGl0IGRvZXMgbm90LCB0aGUgY29uZmlndXJlZCBzdGFjayB3aWxsXG4gICAqIGJlIGNyZWF0ZWQgYW5kIGFwcGVuZGVkIHRvIHRoZSBkb2N1bWVudC4gRG9lcyBub3RoaW5nIGR1cmluZyBTU1IuXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZVN0YWNrKHN0YWNrOiBQb3J0YWxTdGFjaykge1xuICAgIGlmIChzdGFjayAhPT0gJ292ZXJsYXknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgT3ZlcmxheSBTdGFjazogXCIke3N0YWNrfVwiIG11c3QgYmUgJ292ZXJsYXknIGF0IHRoaXMgdGltZS5gKTtcbiAgICB9XG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10pIHtcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWRGYWN0b3J5KHN0YWNrKSk7XG4gICAgICAgIHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10gPVxuICAgICAgICAgIGVsZW0gPz9cbiAgICAgICAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuaWRGYWN0b3J5KHN0YWNrKSxcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdICYmICF0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kU3RhY2tUb0RvbSh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdKTtcblxuICAgICAgICAvLyBJbml0IG11dGF0aW9uIG9ic2VydmVyXG4gICAgICAgIC8vIFRoaXMgd2lsbCB3YXRjaCBmb3IgYW55dGltZSB0aGUgc3RhY2sgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET00gZm9yIHNvbWUgcmVhc29uXG4gICAgICAgIC8vIElmIGl0IGlzLCBpdCB3aWxsIHJlLWF0dGFjaCBpdCB0byB0aGUgRE9NIGFmdGVyIHRoZSBuZXh0IHRpY2tcbiAgICAgICAgaWYgKCF0aGlzLnN0YWNrTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgIHRoaXMuc3RhY2tNdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG1sLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtbCkge1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJlbW92ZWROb2RlIG9mIG11dGF0aW9uLnJlbW92ZWROb2Rlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkTm9kZSA9PT0gdGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsSXRlbXNGcm9tU3RhY2tzKCk7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRTdGFja1RvRG9tKHRoaXMuc3RhY2tFbGVtZW50cy5vdmVybGF5KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdPy5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5zdGFja011dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdLnBhcmVudE5vZGUsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgc3VidHJlZTogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZFN0YWNrVG9Eb20oc3RhY2tFbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKHN0YWNrRWxlbWVudCAmJiAhc3RhY2tFbGVtZW50LmlzQ29ubmVjdGVkKSB7XG4gICAgICBjb25zdCB0b2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbXRlLXRvYXN0LWNvbnRhaW5lcicpO1xuICAgICAgaWYgKHRvYXN0Q29udGFpbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHN0YWNrRWxlbWVudCwgdG9hc3RDb250YWluZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoc3RhY2tFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogQXBwZW5kcyBhbiBpdGVtIHRvIHRoZSBjb25maWd1cmVkIHBvcnRhbCBzdGFjayAqL1xuICBwdWJsaWMgYXBwZW5kVG9TdGFjayhcbiAgICBwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlcixcbiAgICBlbGVtZW50OiBFbGVtZW50LFxuICAgIHtcbiAgICAgIHdpdGhEaW1CYWNrZHJvcCA9IGZhbHNlLFxuICAgICAgd2l0aEluZXJ0QmFja2Ryb3AgPSBmYWxzZSxcbiAgICAgIHdpdGhTY3JvbGxMb2NrID0gZmFsc2UsXG4gICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyLFxuICAgICAgcG9ydGFsQWRhcHRlciA9IGRlZmF1bHRQb3J0YWxBZGFwdGVyLFxuICAgIH06IFBvcnRhbE9wdGlvbnMgPSB7fVxuICApIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnRQb3J0YWxlZEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudFBvcnRhbGVkRWxlbWVudChwb3J0YWxDb250cm9sbGVyLCBlbGVtZW50KTtcbiAgICAgIGNvbnN0IHN0YWNrTmFtZSA9IHBvcnRhbENvbnRyb2xsZXIub3B0aW9ucy5zdGFjaztcbiAgICAgIGNvbnN0IHN0YWNrID0gdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrTmFtZV07XG4gICAgICBjb25zdCBhdHRhY2hlZEVsZW1lbnRzID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKTtcblxuICAgICAgY29uc3QgYmFja2Ryb3AgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ210ZS1wb3J0YWxfX2JhY2tkcm9wJyxcbiAgICAgICAgLi4uKGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uXG4gICAgICAgICAgPyB7IHN0eWxlOiBgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHtiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbn07YCB9XG4gICAgICAgICAgOiB7fSksXG4gICAgICB9KTtcblxuICAgICAgLy8gSGFuZGxlIGJhY2tkcm9wIHN0eWxpbmdcbiAgICAgIGlmICh3aXRoSW5lcnRCYWNrZHJvcCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0taW5lcnQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh3aXRoRGltQmFja2Ryb3ApIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXNoYWRvdycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXRyYW5zcGFyZW50Jyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGVuZCBiYWNrZHJvcFxuICAgICAgc3RhY2s/LmFwcGVuZENoaWxkKGJhY2tkcm9wKTtcblxuICAgICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICAgIC8vIEFkZCBsaXN0ZW5lciBpZiBjbGljayBoYW5kbGVyIGlzIHByZXNlbnRcbiAgICAgICAgaWYgKGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyKSB7XG4gICAgICAgICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXIpO1xuICAgICAgICAgIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYmFja2Ryb3Agc2hvdWxkIGJlIGRpbSwgYW5pbWF0ZSBpdCBhZnRlciBpdCBoYXMgYmVlbiBhcHBlbmRlZCB0byB0aGUgZG9tXG4gICAgICAgIGlmICh3aXRoRGltQmFja2Ryb3ApIHtcbiAgICAgICAgICBnbG9iYWxUaGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0tc2hvdycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGx5IHNjcm9sbCBsb2NrXG4gICAgICAgIGlmICh3aXRoU2Nyb2xsTG9jaykge1xuICAgICAgICAgIHRoaXMuYXBwbHlTY3JvbGxMb2NrKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFdhaXQgZm9yIFJlYWN0IChvciBvdGhlciBmdXR1cmUgZnJhbWV3b3JrIGFkYXB0ZXIpIHRvIGFwcGVuZCBlbGVtZW50IHRvIG5ld1xuICAgICAgLy8gbG9jYXRpb24gaW4gdGhlIERPTSBiZWZvcmUgYWRkaW5nIHRvIHN0YWNrLiBEb2luZyBzbyB0cmlnZ2VycyBgaG9zdERpc2Nvbm5lY3RlZGBcbiAgICAgIC8vIHdoaWNoIHdvdWxkIGluc3RhbnRseSByZW1vdmUgdGhlIGVsZW1lbnQgaWYgbm90IGZvciB0aGlzIGV4dHJhIHRpbWVvdXQgdG8gd2FpdCBhIHRpY2tcbiAgICAgIFByb21pc2UucmVzb2x2ZShwb3J0YWxBZGFwdGVyKGVsZW1lbnQsIHN0YWNrKSkudGhlbigoKSA9PiB7XG4gICAgICAgIGF0dGFjaGVkRWxlbWVudHMuc2V0KGVsZW1lbnQsIHtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIHN0YWNrOiBzdGFja05hbWUsXG4gICAgICAgICAgYmFja2Ryb3AsXG4gICAgICAgICAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzOiBuZXcgU2V0PEVsZW1lbnQ+KCksXG4gICAgICAgICAgcGFyZW50UG9ydGFsZWRFbGVtZW50LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJlbW92ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSBzdGFjayAqL1xuICBwdWJsaWMgcmVtb3ZlRnJvbVN0YWNrKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMucG9ydGFsZWRFbGVtZW50cy5oYXMocG9ydGFsQ29udHJvbGxlci5pZCkpIHtcbiAgICAgIGNvbnN0IGF0dGFjaGVkRWxlbWVudHMgPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpO1xuICAgICAgaWYgKGF0dGFjaGVkRWxlbWVudHMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudE1ldGFkYXRhID0gYXR0YWNoZWRFbGVtZW50cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIGlmIChlbGVtZW50TWV0YWRhdGEpIHtcbiAgICAgICAgICBhdHRhY2hlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplU3RhY2tSZW1vdmUoZWxlbWVudE1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNhZmVseSByZW1vdmVzIGFsbCBpdGVtcyBmcm9tIGFsbCBzdGFja3NcbiAgcHJpdmF0ZSByZW1vdmVBbGxJdGVtc0Zyb21TdGFja3MoKSB7XG4gICAgZm9yIChsZXQgW2lkLCBjb250cm9sbGVyTWFwXSBvZiB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZW50cmllcygpKSB7XG4gICAgICBmb3IgKGxldCBbZWxlbWVudCwgZWxlbWVudE1ldGFkYXRhXSBvZiBjb250cm9sbGVyTWFwLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoZWxlbWVudE1ldGFkYXRhKSB7XG4gICAgICAgICAgdGhpcy5maW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogTWFrZXMgYSBiYWNrZHJvcCBhc3NvY2lhdGVkIHdpdGggYSBwb3J0YWxlZCBlbGVtZW50IHZpc2libGUgaWYgaXQgZXhpc3RzICovXG4gIHB1YmxpYyBzaG93QmFja2Ryb3AocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgY29uc3QgeyBiYWNrZHJvcCB9ID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKS5nZXQoZWxlbWVudCkgPz8ge307XG4gICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1zaG93Jyk7XG4gIH1cblxuICAvKiogSGlkZXMgYSBiYWNrZHJvcCBhc3NvY2lhdGVkIHdpdGggYSBwb3J0YWxlZCBlbGVtZW50IGlmIGl0IGV4aXN0cyAqL1xuICBwdWJsaWMgaGlkZUJhY2tkcm9wKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIGNvbnN0IHsgYmFja2Ryb3AgfSA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuICAgIGJhY2tkcm9wPy5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrZHJvcC0tc2hvdycpO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIGludGVydG5lc3MgYSBiYWNrZHJvcCBpZiBpdCBleGlzdHMgKHdoZXRoZXIgb3Igbm90IHRoZSB1c2VyIGNhbiBjbGljayB0aHJvdWdoIGl0KSAqL1xuICBwdWJsaWMgc2V0QmFja2Ryb3BJbmVydG5lc3MoXG4gICAgcG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsXG4gICAgZWxlbWVudDogRWxlbWVudCxcbiAgICBpbmVydDogYm9vbGVhbiA9IHRydWVcbiAgKSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIGNvbnN0IHsgYmFja2Ryb3AgfSA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuICAgIGlmIChpbmVydCkge1xuICAgICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1pbmVydCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYWNrZHJvcD8uY2xhc3NMaXN0LnJlbW92ZSgnYmFja2Ryb3AtLWluZXJ0Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGlkIGZvciB0aGUgY29uZmlndXJlZCBzdGFjayBlbGVtZW50ICovXG4gIHByaXZhdGUgaWRGYWN0b3J5ID0gKHN0YWNrOiBQb3J0YWxTdGFjaykgPT4gYG10ZS1wb3J0YWxfXyR7c3RhY2t9LXN0YWNrYDtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGFuIGVsZW1lbnQgaXMgYmVpbmcgcG9ydGFsZWQgZnJvbSB3aXRoaW4gYW5vdGhlciBwb3J0YWxlZFxuICAgKiBlbGVtZW50IGFuZCByZXR1cm5zIHRoYXQgcGFyZW50IGlmIGl0IGlzXG4gICAqL1xuICBwcml2YXRlIGdldFBhcmVudFBvcnRhbGVkRWxlbWVudChwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgZWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmIChwb3J0YWxDb250cm9sbGVyLnBhcmVudFBvcnRhbGVkRWxlbWVudCkge1xuICAgICAgcmV0dXJuIHBvcnRhbENvbnRyb2xsZXIucGFyZW50UG9ydGFsZWRFbGVtZW50O1xuICAgIH1cbiAgICBsZXQgcGFyZW50UG9ydGFsZWRFbGVtZW50OiBFbGVtZW50O1xuICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChwb3J0YWxDb250cm9sbGVyKSA9PlxuICAgICAgcG9ydGFsQ29udHJvbGxlci5mb3JFYWNoKChwb3J0YWxlZEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKHBvcnRhbGVkRWxlbWVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgcG9ydGFsZWRFbGVtZW50LmNoaWxkUG9ydGFsZWRFbGVtZW50cy5hZGQoZWxlbWVudCk7XG4gICAgICAgICAgcGFyZW50UG9ydGFsZWRFbGVtZW50ID0gcG9ydGFsZWRFbGVtZW50LmVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICAvLyBDYWNoZSB0aGUgcGFyZW50UG9ydGFsZWRFbGVtZW50IGlmIGZvdW5kIG9uIHRoZSBjb250cm9sbGVyIHNvIHdlIGNhbiByZWZlcmVuY2VcbiAgICAvLyBpdCB3aGVuIG9wZW5lZCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgIGlmIChwYXJlbnRQb3J0YWxlZEVsZW1lbnQpIHtcbiAgICAgIHBvcnRhbENvbnRyb2xsZXIucGFyZW50UG9ydGFsZWRFbGVtZW50ID0gcGFyZW50UG9ydGFsZWRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50UG9ydGFsZWRFbGVtZW50O1xuICB9XG5cbiAgLyoqIEVuc3VyZXMgYW4gZWxlbWVudCBpcyByZW1vdmVkIGZyb20gdGhlIHN0YWNrIG5vIG1hdHRlciB3aGljaCBjb250cm9sbGVyIGhhcyBwb3J0YWxlZCBpdCAqL1xuICBwcml2YXRlIHJlbW92ZUZyb21TdGFja0dsb2JhbGx5KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZm9yRWFjaCgocG9ydGFsQ29udHJvbGxlcikgPT4ge1xuICAgICAgaWYgKHBvcnRhbENvbnRyb2xsZXIuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRNZXRhZGF0YSA9IHBvcnRhbENvbnRyb2xsZXIuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBwb3J0YWxDb250cm9sbGVyLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgdGhpcy5maW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogRmluYWxpemVzIHRoZSByZW1vdmUgb2YgYW4gZWxlbWVudCBmcm9tIGEgcG9ydGFsIHN0YWNrICovXG4gIHByaXZhdGUgZmluYWxpemVTdGFja1JlbW92ZShlbGVtZW50TWV0YWRhdGE6IFBvcnRhbGVkRWxlbWVudE1ldGFkYXRhKSB7XG4gICAgaWYgKGVsZW1lbnRNZXRhZGF0YSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBzdGFjazogc3RhY2tOYW1lLFxuICAgICAgICBiYWNrZHJvcCxcbiAgICAgICAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzLFxuICAgICAgICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQsXG4gICAgICB9ID0gZWxlbWVudE1ldGFkYXRhO1xuICAgICAgY29uc3Qgc3RhY2sgPSB0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tOYW1lXTtcblxuICAgICAgLy8gUmVtb3ZlIGFueSBzY3JvbGxMb2Nrc1xuICAgICAgdGhpcy5yZW1vdmVTY3JvbGxMb2NrKGVsZW1lbnQpO1xuXG4gICAgICAvLyBFbnN1cmVzIGFuIGVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIGFueSBwYXJlbnQgcG9ydGFsZWQgZWxlbWVudHMgY2hpbGRyZW4gbGlzdHNcbiAgICAgIGlmIChwYXJlbnRQb3J0YWxlZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmZvckVhY2goKHBvcnRhbENvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICBpZiAocG9ydGFsQ29udHJvbGxlci5oYXMocGFyZW50UG9ydGFsZWRFbGVtZW50KSkge1xuICAgICAgICAgICAgcG9ydGFsQ29udHJvbGxlci5nZXQocGFyZW50UG9ydGFsZWRFbGVtZW50KS5jaGlsZFBvcnRhbGVkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZXMgYW55IGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudCBhcmUgcmVtb3ZlZCBiZWZvcmUgdGhpcyBlbGVtZW50IGlzXG4gICAgICBpZiAoY2hpbGRQb3J0YWxlZEVsZW1lbnRzLnNpemUgPiAwKSB7XG4gICAgICAgIGNoaWxkUG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB0aGlzLnJlbW92ZUZyb21TdGFja0dsb2JhbGx5KGVsZW1lbnQpKTtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZXMgdGhpcyBlbGVtZW50cyBiYWNrZHJvcCBmcm9tIHRoZSBwb3J0YWwgc3RhY2tcbiAgICAgIGlmIChiYWNrZHJvcCAmJiBiYWNrZHJvcC5wYXJlbnRFbGVtZW50ID09PSBzdGFjaykge1xuICAgICAgICBzdGFjaz8ucmVtb3ZlQ2hpbGQoYmFja2Ryb3ApO1xuICAgICAgfVxuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyBhIHJlYWN0IHdyYXBwZWQgcG9ydGFsZWQgZWxlbWVudFxuICAgICAgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudD8uaGFzQXR0cmlidXRlKCdkYXRhLW92ZXJsYXktd3JhcHBlcicpKSB7XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCA9PT0gc3RhY2spIHtcbiAgICAgICAgICBzdGFjaz8ucmVtb3ZlQ2hpbGQoZWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQgPT09IHN0YWNrKSB7XG4gICAgICAgIHN0YWNrPy5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyBhIHNjcm9sbCBsb2NrIHRvIHRoZSBib2R5IGVsZW1lbnQgdG8gcHJldmVudCBzY3JvbGxpbmcgb2YgcGFnZSBjb250ZW50LlxuICAgKiBDYWxjdWxhdGVzIGFueSBib2R5IG9mZnNldHMgZHVlIHRvIHZpc2libGUgc2Nyb2xsYmFycyBhbmQgZHluYW1pY2FsbHkgYWRqdXN0cyBmb3IgdGhlbS5cbiAgICovXG4gIHByaXZhdGUgYXBwbHlTY3JvbGxMb2NrKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFjdGl2ZVNjcm9sbExvY2tzLmFkZChlbGVtZW50KTtcblxuICAgIGNvbnN0IGlzSU9TID0gaXNQbGF0Zm9ybSgnSU9TJyk7XG4gICAgY29uc3QgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcbiAgICBjb25zdCBzY3JvbGxiYXJYID1cbiAgICAgIE1hdGgucm91bmQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpICtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIGNvbnN0IHBhZGRpbmdQcm9wID0gc2Nyb2xsYmFyWCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IHNjcm9sbFggPSBib2R5U3R5bGUubGVmdCA/IHBhcnNlRmxvYXQoYm9keVN0eWxlLmxlZnQpIDogd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgIGNvbnN0IHNjcm9sbFkgPSBib2R5U3R5bGUudG9wID8gcGFyc2VGbG9hdChib2R5U3R5bGUudG9wKSA6IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgIGJvZHlTdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbXRlLXNjcm9sbC1sb2NrLS1hY3RpdmUnKTtcblxuICAgIGlmIChzY3JvbGxiYXJXaWR0aCkge1xuICAgICAgYm9keVN0eWxlW3BhZGRpbmdQcm9wXSA9IGAke3Njcm9sbGJhcldpZHRofXB4YDtcbiAgICB9XG5cbiAgICAvLyBPbmx5IGlPUyBkb2Vzbid0IHJlc3BlY3QgYG92ZXJmbG93OiBoaWRkZW5gIG9uIGRvY3VtZW50LmJvZHksIGFuZCB0aGlzXG4gICAgLy8gdGVjaG5pcXVlIGhhcyBmZXdlciBzaWRlIGVmZmVjdHMuXG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICAvLyBpT1MgMTIgZG9lcyBub3Qgc3VwcG9ydCBgdmlzdWFsVmlld3BvcnRgLlxuICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IGdsb2JhbFRoaXMudmlzdWFsVmlld3BvcnQ/Lm9mZnNldExlZnQgfHwgMDtcbiAgICAgIGNvbnN0IG9mZnNldFRvcCA9IGdsb2JhbFRoaXMudmlzdWFsVmlld3BvcnQ/Lm9mZnNldFRvcCB8fCAwO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGJvZHlTdHlsZSwge1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgdG9wOiBgJHstKHNjcm9sbFkgLSBNYXRoLmZsb29yKG9mZnNldFRvcCkpfXB4YCxcbiAgICAgICAgbGVmdDogYCR7LShzY3JvbGxYIC0gTWF0aC5mbG9vcihvZmZzZXRMZWZ0KSl9cHhgLFxuICAgICAgICByaWdodDogJzAnLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlbW92ZXMgYW4gYWN0aXZlIHNjcm9sbExvY2sgaWYgdGhlcmUgYXJlIG5vIHJlbWFpbmluZyBlbGVtZW50cyBwb3J0YWxlZCB0aGF0IHJlcXVlc3RlZCBpdCAqL1xuICBwcml2YXRlIHJlbW92ZVNjcm9sbExvY2soZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuYWN0aXZlU2Nyb2xsTG9ja3MuZGVsZXRlKGVsZW1lbnQpO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlU2Nyb2xsTG9ja3Muc2l6ZSA9PT0gMCkge1xuICAgICAgY29uc3QgaXNJT1MgPSBpc1BsYXRmb3JtKCdJT1MnKTtcbiAgICAgIGNvbnN0IGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG4gICAgICBjb25zdCBzY3JvbGxiYXJYID1cbiAgICAgICAgTWF0aC5yb3VuZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgK1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgIGNvbnN0IHBhZGRpbmdQcm9wID0gc2Nyb2xsYmFyWCA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0JztcblxuICAgICAgT2JqZWN0LmFzc2lnbihib2R5U3R5bGUsIHtcbiAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICBbcGFkZGluZ1Byb3BdOiAnJyxcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ210ZS1zY3JvbGwtbG9jay0tYWN0aXZlJyk7XG5cbiAgICAgIGlmIChpc0lPUykge1xuICAgICAgICBPYmplY3QuYXNzaWduKGJvZHlTdHlsZSwge1xuICAgICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgICB0b3A6ICcnLFxuICAgICAgICAgIGxlZnQ6ICcnLFxuICAgICAgICAgIHJpZ2h0OiAnJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGdsb2JhbFRoaXMuc2Nyb2xsVG8oc2Nyb2xsWCwgc2Nyb2xsWSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVQb3J0YWxTZXJ2aWNlID0gbmV3IF9NdGVQb3J0YWxTZXJ2aWNlKCk7XG4iLCAiaW1wb3J0IHsgc2lnbmFsIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuY2xhc3MgX010ZUhpc3RvcnlBcGlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xuICBwcml2YXRlIGNoYW5nZVNpZ25hbCA9IHNpZ25hbCgpO1xuICBwcml2YXRlIHByZXZIcmVmOiBzdHJpbmc7XG5cbiAgcHVibGljIHN0YXRlQ2hhbmdlcygpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VTaWduYWw7XG4gIH1cblxuICBwcml2YXRlIGZvcndhcmRBcHBseSA9ICh0YXJnZXQsIHRoaXNBcmcsIGFyZ0FycmF5KSA9PiB7XG4gICAgY29uc3QgcmVzID0gdGFyZ2V0LmFwcGx5KHRoaXNBcmcsIGFyZ0FycmF5KTtcbiAgICAvLyBPbmx5IGVtaXQgYSBzdGF0ZSBjaGFuZ2UgaWYgdGhlIGhyZWYgZGlmZmVycyBmcm9tIHRoZSBsYXN0IGVtaXNzaW9uXG4gICAgaWYgKHRoaXMucHJldkhyZWYgIT09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB7XG4gICAgICB0aGlzLnByZXZIcmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICB0aGlzLmNoYW5nZVNpZ25hbC5zZXQodGhpcy5wcmV2SHJlZik7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgIC8vIExpc3RlbiBmb3IgYmFjayBldmVudHMgd2l0aCBwb3BzdGF0ZSBldmVudFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZVNpZ25hbC5zZXQod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFBhdGNoIEhpc3RvcnkgQVBJIG1ldGhvZHMgdG8gZW5zdXJlIHdlIGVtaXQgYW55dGltZSB0aGVpciBzdGF0ZSBpcyBjaGFuZ2VkXG4gICAgICAvLyBUaGlzIGlzIG5lY2Nlc2FyeSBiZWNhaXNlIHRoZSBgcG9wc3RhdGVgIGV2ZW50IGlzIG5vdCByZWxpYWJseSBjYWxsZWQgYWNyb3NzIGJyb3dzZXJzIHdoZW5ldmVyIHRoZSBoaXN0b3J5IEFQSSBpcyB1c2VkXG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LmJhY2ssIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkuZm9yd2FyZCA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmdvID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LmdvLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUsIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSwge1xuICAgICAgICBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZUhpc3RvcnlBcGlTZXJ2aWNlID0gbmV3IF9NdGVIaXN0b3J5QXBpU2VydmljZSgpO1xuIiwgImltcG9ydCB7IGlzU3NyIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IHR5cGUgTXRlRGF0ZUZvcm1hdE9wdGlvbnMgPSBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyAmIHtcbiAgbGFuZz86IHN0cmluZztcbiAgZm9ybWF0PzpcbiAgICB8ICdzaG9ydCdcbiAgICB8ICdtZWRpdW0nXG4gICAgfCAnbG9uZydcbiAgICB8ICdmdWxsJ1xuICAgIHwgJ3Nob3J0RGF0ZSdcbiAgICB8ICdtZWRpdW1EYXRlJ1xuICAgIHwgJ2xvbmdEYXRlJ1xuICAgIHwgJ2Z1bGxEYXRlJ1xuICAgIHwgJ3Nob3J0VGltZSdcbiAgICB8ICdtZWRpdW1UaW1lJ1xuICAgIHwgJ2xvbmdUaW1lJ1xuICAgIHwgJ2Z1bGxUaW1lJztcbn07XG5cbmV4cG9ydCB0eXBlIE10ZU51bWJlckZvcm1hdE9wdGlvbnMgPSBJbnRsLk51bWJlckZvcm1hdE9wdGlvbnMgJiB7IGxhbmc/OiBzdHJpbmcgfTtcblxuY2xhc3MgX010ZUxvY2FsaXplU2VydmljZSB7XG4gIC8vIEFzc3VtZSBgZW5gIGxhbmcgZm9yIG5vdyBhcyBhIGZhbGxiYWNrIHVudGlsIHdlIHJvbGxiYWNrIHdpZGVyIHN1cHBvcnQgZm9yIGkxMW4gd2hlbiBuZWNlc3NhcnlcbiAgcHJpdmF0ZSBsYW5ndWFnZSA9ICdlbic7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgaWYgKCFpc1NzcigpICYmICF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubGFuZ3VhZ2UgPSBgJHtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2V9YC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXROdW1iZXIobnVtYmVyVG9Gb3JtYXQ6IG51bWJlciB8IHN0cmluZywgb3B0aW9ucz86IE10ZU51bWJlckZvcm1hdE9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIGNvbnN0IGxhbmcgPSBvcHRpb25zPy5sYW5nID8gb3B0aW9ucy5sYW5nIDogdGhpcy5sYW5ndWFnZTtcbiAgICBudW1iZXJUb0Zvcm1hdCA9IE51bWJlcihudW1iZXJUb0Zvcm1hdCk7XG4gICAgLy8gRW5zdXJlIG5vIG51bGwgb3B0aW9ucyBleGlzdFxuICAgIGNvbnN0IGZpbmFsT3B0aW9ucyA9IHtcbiAgICAgIGxhbmc6IG9wdGlvbnMubGFuZyA/PyB1bmRlZmluZWQsXG4gICAgICBzdHlsZTogb3B0aW9ucy5zdHlsZSA/PyB1bmRlZmluZWQsXG4gICAgICBjdXJyZW5jeTogb3B0aW9ucy5jdXJyZW5jeSA/PyB1bmRlZmluZWQsXG4gICAgICBjdXJyZW5jeURpc3BsYXk6IG9wdGlvbnMuY3VycmVuY3lEaXNwbGF5ID8/IHVuZGVmaW5lZCxcbiAgICAgIHVzZUdyb3VwaW5nOiBvcHRpb25zLnVzZUdyb3VwaW5nID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbmltdW1JbnRlZ2VyRGlnaXRzOiBvcHRpb25zLm1pbmltdW1JbnRlZ2VyRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogb3B0aW9ucy5taW5pbXVtRnJhY3Rpb25EaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBvcHRpb25zLm1heGltdW1GcmFjdGlvbkRpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICBtaW5pbXVtU2lnbmlmaWNhbnREaWdpdHM6IG9wdGlvbnMubWluaW11bVNpZ25pZmljYW50RGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1heGltdW1TaWduaWZpY2FudERpZ2l0czogb3B0aW9ucy5tYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgIH07XG4gICAgcmV0dXJuIGlzTmFOKG51bWJlclRvRm9ybWF0KVxuICAgICAgPyAnJ1xuICAgICAgOiBuZXcgSW50bC5OdW1iZXJGb3JtYXQobGFuZywgZmluYWxPcHRpb25zKS5mb3JtYXQobnVtYmVyVG9Gb3JtYXQpO1xuICB9XG5cbiAgcHVibGljIGZvcm1hdERhdGUoZGF0ZVRvRm9ybWF0OiBEYXRlIHwgc3RyaW5nLCBvcHRpb25zPzogTXRlRGF0ZUZvcm1hdE9wdGlvbnMpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICBjb25zdCBsYW5nID0gb3B0aW9ucz8ubGFuZyA/IG9wdGlvbnMubGFuZyA6IHRoaXMubGFuZ3VhZ2U7XG4gICAgY29uc3QgZm9ybWF0dGVkT3B0aW9ucyA9IHsgLi4uKG9wdGlvbnMgPz8ge30pLCAuLi50aGlzLmdldERlZmluZWREYXRlRm9ybWF0KG9wdGlvbnM/LmZvcm1hdCkgfTtcbiAgICAvLyBFbnN1cmUgbm8gbnVsbCBvcHRpb25zIGV4aXN0XG4gICAgY29uc3QgZmluYWxPcHRpb25zID0ge1xuICAgICAgbGFuZzogZm9ybWF0dGVkT3B0aW9ucy5sYW5nID8/IHVuZGVmaW5lZCxcbiAgICAgIHdlZWtkYXk6IGZvcm1hdHRlZE9wdGlvbnMud2Vla2RheSA/PyB1bmRlZmluZWQsXG4gICAgICBlcmE6IGZvcm1hdHRlZE9wdGlvbnMuZXJhID8/IHVuZGVmaW5lZCxcbiAgICAgIHllYXI6IGZvcm1hdHRlZE9wdGlvbnMueWVhciA/PyB1bmRlZmluZWQsXG4gICAgICBtb250aDogZm9ybWF0dGVkT3B0aW9ucy5tb250aCA/PyB1bmRlZmluZWQsXG4gICAgICBkYXk6IGZvcm1hdHRlZE9wdGlvbnMuZGF5ID8/IHVuZGVmaW5lZCxcbiAgICAgIGhvdXI6IGZvcm1hdHRlZE9wdGlvbnMuaG91ciA/PyB1bmRlZmluZWQsXG4gICAgICBtaW51dGU6IGZvcm1hdHRlZE9wdGlvbnMubWludXRlID8/IHVuZGVmaW5lZCxcbiAgICAgIHNlY29uZDogZm9ybWF0dGVkT3B0aW9ucy5zZWNvbmQgPz8gdW5kZWZpbmVkLFxuICAgICAgZnJhY3Rpb25hbFNlY29uZERpZ2l0czogZm9ybWF0dGVkT3B0aW9ucy5mcmFjdGlvbmFsU2Vjb25kRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIHRpbWVab25lTmFtZTogZm9ybWF0dGVkT3B0aW9ucy50aW1lWm9uZU5hbWUgPz8gdW5kZWZpbmVkLFxuICAgICAgdGltZVpvbmU6IGZvcm1hdHRlZE9wdGlvbnMudGltZVpvbmUgPz8gdW5kZWZpbmVkLFxuICAgICAgaG91cjEyOiBmb3JtYXR0ZWRPcHRpb25zLmhvdXIxMiA/PyB1bmRlZmluZWQsXG4gICAgICBmb3JtYXQ6IGZvcm1hdHRlZE9wdGlvbnMuZm9ybWF0ID8/IHVuZGVmaW5lZCxcbiAgICB9O1xuICAgIGRhdGVUb0Zvcm1hdCA9IG5ldyBEYXRlKGRhdGVUb0Zvcm1hdCk7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxhbmcsIGZpbmFsT3B0aW9ucykuZm9ybWF0KGRhdGVUb0Zvcm1hdCk7XG4gIH1cblxuICBwcml2YXRlIGdldERlZmluZWREYXRlRm9ybWF0KFxuICAgIGZvcm1hdDpcbiAgICAgIHwgJ3Nob3J0J1xuICAgICAgfCAnbWVkaXVtJ1xuICAgICAgfCAnbG9uZydcbiAgICAgIHwgJ2Z1bGwnXG4gICAgICB8ICdzaG9ydERhdGUnXG4gICAgICB8ICdtZWRpdW1EYXRlJ1xuICAgICAgfCAnbG9uZ0RhdGUnXG4gICAgICB8ICdmdWxsRGF0ZSdcbiAgICAgIHwgJ3Nob3J0VGltZSdcbiAgICAgIHwgJ21lZGl1bVRpbWUnXG4gICAgICB8ICdsb25nVGltZSdcbiAgICAgIHwgJ2Z1bGxUaW1lJ1xuICApOiBNdGVEYXRlRm9ybWF0T3B0aW9ucyB7XG4gICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgIGNhc2UgJ3Nob3J0JzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdsb25nJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnZnVsbCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdzaG9ydERhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbWVkaXVtRGF0ZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbG9uZ0RhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnZnVsbERhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ3Nob3J0VGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbWVkaXVtVGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbG9uZ1RpbWUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdmdWxsVGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgIGZyYWN0aW9uYWxTZWNvbmREaWdpdHM6IDIsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlTG9jYWxpemVTZXJ2aWNlID0gbmV3IF9NdGVMb2NhbGl6ZVNlcnZpY2UoKTtcbiIsICJpbXBvcnQgeyBSZWFjdGl2ZUNvbnRyb2xsZXIsIFJlYWN0aXZlQ29udHJvbGxlckhvc3QgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIE10ZVBvcnRhbFNlcnZpY2UsIFBvcnRhbE9wdGlvbnMsIFBvcnRhbFN0YWNrIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRhbENvbnRyb2xsZXJPcHRpb25zIHtcbiAgc3RhY2s6IFBvcnRhbFN0YWNrO1xufVxuXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuLyoqXG4gKiBDb250cm9sbGVyIHVzZWQgdG8gYXR0YWNoIGFueSBlbGVtZW50IHRvIGEgcG9ydGFsIHN0YWNrLlxuICpcbiAqIFVzZSB0aGlzIGNvbnRyb2xsZXIgd2hlbiB5b3UgbmVlZCB0byByZW5kZXIgYW4gb3ZlcmxheSBhdCB0aGUgcm9vdCBvZiB0aGUgRE9NLlxuICogVG8gYXZvaWQgcG9zaXRpb25pbmcgY29uZmxpY3RzIG9yIG92ZXJmbG93IGNsaXBwaW5nLlxuICovXG5leHBvcnQgY2xhc3MgUG9ydGFsQ29udHJvbGxlciBpbXBsZW1lbnRzIFJlYWN0aXZlQ29udHJvbGxlciwgRWxlbWVudFBvcnRhbENvbnRyb2xsZXIge1xuICAvKiogQGlnbm9yZSAqL1xuICBpZCA9IG5leHRVbmlxdWVJZCsrO1xuXG4gIC8qKlxuICAgKiBVc2VkIGJ5IHRoZSBNdGVQb3J0YWxTZXJ2aWNlIHRvIGNhY2hlIHRoaXMgZWxlbWVudHMgcG9ydGFsZWQgcGFyZW50IHJlZmVyZW5jZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ6IEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEZsYWcgdG8gaGVscCBjaGVjayBpZiBhIGRpc2Nvbm5lY3RlZCBjYWxsYmFjayBoYXMgYmVlbiBmaXJlZFxuICAgKiBiZWNhdXNlIG9mIGEgcG9ydGFsaW5nIG9wZXJhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgaWdub3JlTmV4dERpc2Nvbm5lY3QgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBob3N0OiBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0ICYgRWxlbWVudCxcbiAgICBwdWJsaWMgb3B0aW9uczogUG9ydGFsQ29udHJvbGxlck9wdGlvbnMgPSB7IHN0YWNrOiAnb3ZlcmxheScgfVxuICApIHtcbiAgICB0aGlzLmhvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcbiAgfVxuXG4gIC8qKiBSZXF1ZXN0cyB0aGUgcG9ydGFsIHNlcnZpY2UgYXBwZW5kIHRoaXMgaXRlbSB0byB0aGUgY29uZmlndXJlZCBzdGFjayAqL1xuICBwdWJsaWMgYXBwZW5kVG9TdGFjayhlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5ob3N0LCBvcHRpb25zOiBQb3J0YWxPcHRpb25zID0ge30pIHtcbiAgICAvLyBPbmx5IGlnbm9yZSB0aGUgbmV4dCBkaXNjb25uZWN0IGlmIHRoZSBlbGVtZW50IGJlaW5nIHBvcnRhbGVkIGlzIGN1cnJlbnRseSBjb25uZWN0ZWQgdG8gdGhlIERPTVxuICAgIGlmIChlbGVtZW50Py5pc0Nvbm5lY3RlZCkge1xuICAgICAgdGhpcy5pZ25vcmVOZXh0RGlzY29ubmVjdCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBNdGVQb3J0YWxTZXJ2aWNlLmFwcGVuZFRvU3RhY2sodGhpcywgZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKiogUmVxdWVzdHMgdGhlIHBvcnRhbCBzZXJ2aWNlIHJlbW92ZSB0aGlzIGVsZW1lbnQgZnJvbSB0aGUgY29uZmlndXJlZCBzdGFjayAqL1xuICBwdWJsaWMgcmVtb3ZlRnJvbVN0YWNrKGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLmhvc3QpIHtcbiAgICB0aGlzLmlnbm9yZU5leHREaXNjb25uZWN0ID0gZmFsc2U7XG4gICAgcmV0dXJuIE10ZVBvcnRhbFNlcnZpY2UucmVtb3ZlRnJvbVN0YWNrKHRoaXMsIGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqIE1ha2VzIGEgYmFja2Ryb3AgYXNzb2NpYXRlZCB3aXRoIGEgcG9ydGFsZWQgZWxlbWVudCB2aXNpYmxlIGlmIGl0IGV4aXN0cyAqL1xuICBwdWJsaWMgc2hvd0JhY2tkcm9wKGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLmhvc3QpIHtcbiAgICByZXR1cm4gTXRlUG9ydGFsU2VydmljZS5zaG93QmFja2Ryb3AodGhpcywgZWxlbWVudCk7XG4gIH1cblxuICAvKiogSGlkZXMgYSBiYWNrZHJvcCBhc3NvY2lhdGVkIHdpdGggYSBwb3J0YWxlZCBlbGVtZW50IGlmIGl0IGV4aXN0cyAqL1xuICBwdWJsaWMgaGlkZUJhY2tkcm9wKGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLmhvc3QpIHtcbiAgICByZXR1cm4gTXRlUG9ydGFsU2VydmljZS5oaWRlQmFja2Ryb3AodGhpcywgZWxlbWVudCk7XG4gIH1cblxuICAvKiogVXBkYXRlcyB0aGUgaW50ZXJ0bmVzcyBhIGJhY2tkcm9wIGlmIGl0IGV4aXN0cyAod2hldGhlciBvciBub3QgdGhlIHVzZXIgY2FuIGNsaWNrIHRocm91Z2ggaXQpICovXG4gIHB1YmxpYyBzZXRCYWNrZHJvcEluZXJ0bmVzcyhpbmVydDogYm9vbGVhbiwgZWxlbWVudDogRWxlbWVudCA9IHRoaXMuaG9zdCkge1xuICAgIHJldHVybiBNdGVQb3J0YWxTZXJ2aWNlLnNldEJhY2tkcm9wSW5lcnRuZXNzKHRoaXMsIGVsZW1lbnQsIGluZXJ0KTtcbiAgfVxuXG4gIGhvc3RDb25uZWN0ZWQoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdGFjaykge1xuICAgICAgTXRlUG9ydGFsU2VydmljZS5pbml0aWFsaXplU3RhY2sodGhpcy5vcHRpb25zLnN0YWNrKTtcbiAgICB9XG4gIH1cblxuICBob3N0RGlzY29ubmVjdGVkKCkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBuZXh0IGRpc2Nvbm5lY3Qgc2hvdWxkIGJlIGlnbm9yZWQgYmVjYXVzZSBpdCBpcyB0cmlnZ2VkXG4gICAgLy8gZnJvbSBhIHBvcnRhbGluZyBvcGVyYXRpb25cbiAgICBpZiAodGhpcy5pZ25vcmVOZXh0RGlzY29ubmVjdCkge1xuICAgICAgdGhpcy5pZ25vcmVOZXh0RGlzY29ubmVjdCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBNdGVQb3J0YWxTZXJ2aWNlLnJlbW92ZUNvbnRyb2xsZXIodGhpcyk7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgQ29yZVBhbGV0dGUsIERlbnNpdHlPcHRpb25zLCBQcmVzZXRzLCBTaXplT3B0aW9ucywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByZXNldCB7XG4gIHNpemU/OiBTaXplT3B0aW9ucztcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgZGVuc2l0eT86IERlbnNpdHlPcHRpb25zO1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgYnV0dG9uUHJlc2V0czogUHJlc2V0czxCdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvbkJ1dHRvblByZXNldCB7XG4gIHNpemU/OiBTaXplT3B0aW9ucztcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgZGVuc2l0eT86IERlbnNpdHlPcHRpb25zO1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgaWNvbkJ1dHRvblByZXNldHM6IFByZXNldHM8SWNvbkJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBTdGF0dXNQYWxldHRlIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJY29uUHJlc2V0IHtcbiAgY29sb3I/OiBTdGF0dXNQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgaWNvblByZXNldHM6IFByZXNldHM8SWNvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBTdGF0dXNQYWxldHRlIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9ncmVzc0JhclByZXNldCB7XG4gIGNvbG9yPzogU3RhdHVzUGFsZXR0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzQmFyUHJlc2V0czogUHJlc2V0czxQcm9ncmVzc0JhclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFN0YXR1c1BhbGV0dGUgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzU3Bpbm5lclByZXNldCB7XG4gIGNvbG9yPzogU3RhdHVzUGFsZXR0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzU3Bpbm5lclByZXNldHM6IFByZXNldHM8UHJvZ3Jlc3NTcGlubmVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9vbGJhclByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgdG9vbGJhclByZXNldHM6IFByZXNldHM8VG9vbGJhclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYXJkUHJlc2V0IHtcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbiAgd2l0aFNoYWRvdz86IGJvb2xlYW47XG4gIHdpdGhvdXRTaGFkb3c/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRCdXR0b25QcmVzZXQgZXh0ZW5kcyBDYXJkUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBjYXJkUHJlc2V0czogUHJlc2V0czxDYXJkUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgd2l0aG91dFNoYWRvdzogdHJ1ZSxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgY29uc3QgY2FyZEJ1dHRvblByZXNldHM6IFByZXNldHM8Q2FyZEJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIHdpdGhvdXRTaGFkb3c6IHRydWUsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUcmVlUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCB0cmVlUHJlc2V0czogUHJlc2V0czxUcmVlUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IENvcmVQYWxldHRlLCBQcmVzZXRzLCBTaXplT3B0aW9ucywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ1ByZXNldHMge1xuICBzaXplPzogU2l6ZU9wdGlvbnM7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCB0YWdQcmVzZXRzOiBQcmVzZXRzPFRhZ1ByZXNldHM+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFkZ2VQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGJhZGdlUHJlc2V0czogUHJlc2V0czxCYWRnZVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBDb3JlUGFsZXR0ZSwgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlua1ByZXNldCB7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG4gIGZvbnRXZWlnaHQ/OiAncmVndWxhcicgfCAnYm9sZCc7XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rUHJlc2V0czogUHJlc2V0czxMaW5rUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGFsZXJ0UHJlc2V0czogUHJlc2V0czxBbGVydFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgaW5wdXRQcmVzZXRzOiBQcmVzZXRzPElucHV0UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdlclByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgZHJhd2VyUHJlc2V0czogUHJlc2V0czxEcmF3ZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXNpZGVQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGFzaWRlUHJlc2V0czogUHJlc2V0czxBc2lkZVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJlYWRjcnVtYkl0ZW1QcmVzZXQge1xuICBmb250V2VpZ2h0PzogJ3JlZ3VsYXInIHwgJ2JvbGQnO1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xuICB3aXRob3V0VW5kZXJsaW5lPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGJyZWFkY3J1bWJJdGVtUHJlc2V0czogUHJlc2V0czxCcmVhZGNydW1iSXRlbVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7XG4gICAgd2l0aG91dFVuZGVybGluZTogdHJ1ZSxcbiAgfSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbW9kYWxQcmVzZXRzOiBQcmVzZXRzPE1vZGFsUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIENvcmVQYWxldHRlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tib3hQcmVzZXQge1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgY2hlY2tib3hQcmVzZXRzOiBQcmVzZXRzPENoZWNrYm94UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhZGlvUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCByYWRpb1ByZXNldHM6IFByZXNldHM8UmFkaW9QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2Um9vdFByZXNldCB7XG4gIG1vYmlsZUJyZWFrcG9pbnQ/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnO1xuICBpbnZlcnNlPzogJ2hlYWRlcicgfCAnc2lkZWJhcic7XG4gIHByZWZlclNpZGViYXI/OiAnb3BlbmVkJyB8ICdjbG9zZWQnO1xufVxuXG5leHBvcnQgY29uc3QgbmF2Um9vdFByZXNldHM6IFByZXNldHM8TmF2Um9vdFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHtcbiAgICBpbnZlcnNlOiAnc2lkZWJhcicsXG4gIH0sXG4gIGN4OiB7XG4gICAgcHJlZmVyU2lkZWJhcjogJ2Nsb3NlZCcsXG4gIH0sXG4gIHB4OiB7XG4gICAgaW52ZXJzZTogJ3NpZGViYXInLFxuICB9LFxuICByeDoge1xuICAgIHByZWZlclNpZGViYXI6ICdjbG9zZWQnLFxuICB9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZIZWFkZXJQcmVzZXQge1xuICB3aXRoQ29udGFpbmVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IG5hdkhlYWRlclByZXNldHM6IFByZXNldHM8TmF2SGVhZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdlN1YkhlYWRlclByZXNldCB7XG4gIHdpdGhDb250YWluZXI/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbmF2U3ViSGVhZGVyUHJlc2V0czogUHJlc2V0czxOYXZTdWJIZWFkZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2U2lkZWJhclByZXNldCB7XG4gIGhpZGVVbnRpbFRyYW5zaXRpb24/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbmF2U2lkZWJhclByZXNldHM6IFByZXNldHM8TmF2U2lkZWJhclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGhpZGVVbnRpbFRyYW5zaXRpb246IHRydWUsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHtcbiAgICBoaWRlVW50aWxUcmFuc2l0aW9uOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZDb250ZW50UHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXZDb250ZW50UHJlc2V0czogUHJlc2V0czxOYXZDb250ZW50UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkZvb3RlclByZXNldCB7XG4gIHdpdGhDb250YWluZXI/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbmF2Rm9vdGVyUHJlc2V0czogUHJlc2V0czxOYXZGb290ZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2QnV0dG9uUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXZCdXR0b25QcmVzZXRzOiBQcmVzZXRzPE5hdkJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZJY29uQnV0dG9uUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXZJY29uQnV0dG9uUHJlc2V0czogUHJlc2V0czxOYXZJY29uQnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkl0ZW1QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkl0ZW1QcmVzZXRzOiBQcmVzZXRzPE5hdkl0ZW1QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvbkdyb3VwUHJlc2V0IHtcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGJ1dHRvbkdyb3VwUHJlc2V0czogUHJlc2V0czxCdXR0b25Hcm91cFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdGNoUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBzd2l0Y2hQcmVzZXRzOiBQcmVzZXRzPFN3aXRjaFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlU2VsZWN0UHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXRpdmVTZWxlY3RQcmVzZXRzOiBQcmVzZXRzPE5hdGl2ZVNlbGVjdFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dGFyZWFQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHRleHRhcmVhUHJlc2V0czogUHJlc2V0czxUZXh0YXJlYVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2tlbGV0b25QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHNrZWxldG9uUHJlc2V0czogUHJlc2V0czxTa2VsZXRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBzbGlkZXJQcmVzZXRzOiBQcmVzZXRzPFNsaWRlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFuZ2VTbGlkZXJQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHJhbmdlU2xpZGVyUHJlc2V0czogUHJlc2V0czxSYW5nZVNsaWRlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VnbWVudGVkQ29udHJvbFByZXNldCB7fVxuXG5leHBvcnQgY29uc3Qgc2VnbWVudGVkQ29udHJvbFByZXNldHM6IFByZXNldHM8U2VnbWVudGVkQ29udHJvbFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBidXR0b25QcmVzZXRzLCBpY29uQnV0dG9uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9idXR0b24vYnV0dG9uLnByZXNldHMnO1xuaW1wb3J0IHsgaWNvblByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvaWNvbi9pY29uLnByZXNldHMnO1xuaW1wb3J0IHsgcHJvZ3Jlc3NCYXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIucHJlc2V0cyc7XG5pbXBvcnQgeyBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5wcmVzZXRzJztcbmltcG9ydCB7IHRvb2xiYXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3Rvb2xiYXIvdG9vbGJhci5wcmVzZXRzJztcbmltcG9ydCB7IGNhcmRQcmVzZXRzLCBjYXJkQnV0dG9uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9jYXJkL2NhcmQucHJlc2V0cyc7XG5pbXBvcnQgeyB0cmVlUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy90cmVlL3RyZWUucHJlc2V0cyc7XG5pbXBvcnQgeyB0YWdQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3RhZy90YWcucHJlc2V0cyc7XG5pbXBvcnQgeyBiYWRnZVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYmFkZ2UvYmFkZ2UucHJlc2V0cyc7XG5pbXBvcnQgeyBsaW5rUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9saW5rL2xpbmsucHJlc2V0cyc7XG5pbXBvcnQgeyBhbGVydFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYWxlcnQvYWxlcnQucHJlc2V0cyc7XG5pbXBvcnQgeyBpbnB1dFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvaW5wdXQvaW5wdXQucHJlc2V0cyc7XG5pbXBvcnQgeyBkcmF3ZXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2RyYXdlci9kcmF3ZXIucHJlc2V0cyc7XG5pbXBvcnQgeyBhc2lkZVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYXNpZGUvYXNpZGUucHJlc2V0cyc7XG5pbXBvcnQgeyBicmVhZGNydW1iSXRlbVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi1pdGVtLnByZXNldHMnO1xuaW1wb3J0IHsgbW9kYWxQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL21vZGFsL21vZGFsLnByZXNldHMnO1xuaW1wb3J0IHsgY2hlY2tib3hQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2NoZWNrYm94L2NoZWNrYm94LnByZXNldHMnO1xuaW1wb3J0IHsgcmFkaW9QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3JhZGlvL3JhZGlvLnByZXNldHMnO1xuaW1wb3J0IHtcbiAgbmF2Um9vdFByZXNldHMsXG4gIG5hdkhlYWRlclByZXNldHMsXG4gIG5hdlN1YkhlYWRlclByZXNldHMsXG4gIG5hdlNpZGViYXJQcmVzZXRzLFxuICBuYXZDb250ZW50UHJlc2V0cyxcbiAgbmF2Rm9vdGVyUHJlc2V0cyxcbiAgbmF2QnV0dG9uUHJlc2V0cyxcbiAgbmF2SWNvbkJ1dHRvblByZXNldHMsXG4gIG5hdkl0ZW1QcmVzZXRzLFxufSBmcm9tICcuLi8uLi9hdG9taWMvbmF2L25hdi5wcmVzZXRzJztcbmltcG9ydCB7IGJ1dHRvbkdyb3VwUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLnByZXNldHMnO1xuaW1wb3J0IHsgc3dpdGNoUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9zd2l0Y2gvc3dpdGNoLnByZXNldHMnO1xuaW1wb3J0IHsgbmF0aXZlU2VsZWN0UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9uYXRpdmUtc2VsZWN0L25hdGl2ZS1zZWxlY3QucHJlc2V0cyc7XG5pbXBvcnQgeyB0ZXh0YXJlYVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdGV4dGFyZWEvdGV4dGFyZWEucHJlc2V0cyc7XG5pbXBvcnQgeyBza2VsZXRvblByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc2tlbGV0b24vc2tlbGV0b24ucHJlc2V0cyc7XG5pbXBvcnQgeyBzbGlkZXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3NsaWRlci9zbGlkZXIucHJlc2V0cyc7XG5pbXBvcnQgeyByYW5nZVNsaWRlclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcmFuZ2Utc2xpZGVyL3JhbmdlLXNsaWRlci5wcmVzZXRzJztcbmltcG9ydCB7IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3NlZ21lbnRlZC1jb250cm9sL3NlZ21lbnRlZC1jb250cm9sLnByZXNldHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vcnRhclByZXNldFRoZW1lIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb2xvclNjaGVtZTogJ3N5c3RlbScgfCAnbGlnaHQnIHwgJ2RhcmsnO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFByZXNldCA9IHtcbiAgcHJlc2V0OiAnZGVmYXVsdCcsXG4gIHRoZW1lOiB7XG4gICAgbmFtZTogJ3B4JyxcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSBhcyBNb3J0YXJQcmVzZXRUaGVtZSxcbiAgTXRlQnV0dG9uOiBidXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUljb25CdXR0b246IGljb25CdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUljb246IGljb25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVByb2dyZXNzQmFyOiBwcm9ncmVzc0JhclByZXNldHMuZGVmYXVsdCxcbiAgTXRlUHJvZ3Jlc3NTcGlubmVyOiBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVRvb2xiYXI6IHRvb2xiYXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUNhcmQ6IGNhcmRQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUNhcmRCdXR0b246IGNhcmRCdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVRyZWU6IHRyZWVQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVRhZzogdGFnUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVCYWRnZTogYmFkZ2VQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUxpbms6IGxpbmtQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUFsZXJ0OiBhbGVydFByZXNldHMuZGVmYXVsdCxcbiAgTXRlSW5wdXQ6IGlucHV0UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVEcmF3ZXI6IGRyYXdlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlQXNpZGU6IGFzaWRlUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVCcmVhZGNydW1iSXRlbTogYnJlYWRjcnVtYkl0ZW1QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU1vZGFsOiBtb2RhbFByZXNldHMuZGVmYXVsdCxcbiAgTXRlQ2hlY2tib3g6IGNoZWNrYm94UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVSYWRpbzogcmFkaW9QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdlJvb3Q6IG5hdlJvb3RQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkhlYWRlcjogbmF2SGVhZGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZTdWJIZWFkZXI6IG5hdlN1YkhlYWRlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2U2lkZWJhcjogbmF2U2lkZWJhclByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2Q29udGVudDogbmF2Q29udGVudFByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2Rm9vdGVyOiBuYXZGb290ZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkJ1dHRvbjogbmF2QnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZJY29uQnV0dG9uOiBuYXZJY29uQnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZJdGVtOiBuYXZJdGVtUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVCdXR0b25Hcm91cDogYnV0dG9uR3JvdXBQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVN3aXRjaDogc3dpdGNoUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXRpdmVTZWxlY3Q6IG5hdGl2ZVNlbGVjdFByZXNldHMuZGVmYXVsdCxcbiAgTXRlVGV4dGFyZWE6IHRleHRhcmVhUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVTa2VsZXRvbjogc2tlbGV0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVNsaWRlcjogc2xpZGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVSYW5nZVNsaWRlcjogcmFuZ2VTbGlkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVNlZ21lbnRlZENvbnRyb2w6IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzLmRlZmF1bHQsXG59O1xuXG5leHBvcnQgdHlwZSBNb3J0YXJQcmVzZXQgPSB0eXBlb2YgZGVmYXVsdFByZXNldDtcblxuZXhwb3J0IGNvbnN0IHB4UHJlc2V0OiBNb3J0YXJQcmVzZXQgPSB7XG4gIHByZXNldDogJ3B4JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAncHgnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9LFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMucHgsXG4gIE10ZUljb25CdXR0b246IGljb25CdXR0b25QcmVzZXRzLnB4LFxuICBNdGVJY29uOiBpY29uUHJlc2V0cy5weCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5weCxcbiAgTXRlUHJvZ3Jlc3NTcGlubmVyOiBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzLnB4LFxuICBNdGVUb29sYmFyOiB0b29sYmFyUHJlc2V0cy5weCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMucHgsXG4gIE10ZUNhcmRCdXR0b246IGNhcmRCdXR0b25QcmVzZXRzLnB4LFxuICBNdGVUcmVlOiB0cmVlUHJlc2V0cy5weCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLnB4LFxuICBNdGVCYWRnZTogYmFkZ2VQcmVzZXRzLnB4LFxuICBNdGVMaW5rOiBsaW5rUHJlc2V0cy5weCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5weCxcbiAgTXRlSW5wdXQ6IGlucHV0UHJlc2V0cy5weCxcbiAgTXRlRHJhd2VyOiBkcmF3ZXJQcmVzZXRzLnB4LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLnB4LFxuICBNdGVCcmVhZGNydW1iSXRlbTogYnJlYWRjcnVtYkl0ZW1QcmVzZXRzLnB4LFxuICBNdGVNb2RhbDogbW9kYWxQcmVzZXRzLnB4LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLnB4LFxuICBNdGVSYWRpbzogcmFkaW9QcmVzZXRzLnB4LFxuICBNdGVOYXZSb290OiBuYXZSb290UHJlc2V0cy5weCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLnB4LFxuICBNdGVOYXZTdWJIZWFkZXI6IG5hdlN1YkhlYWRlclByZXNldHMucHgsXG4gIE10ZU5hdlNpZGViYXI6IG5hdlNpZGViYXJQcmVzZXRzLnB4LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5weCxcbiAgTXRlTmF2Rm9vdGVyOiBuYXZGb290ZXJQcmVzZXRzLnB4LFxuICBNdGVOYXZCdXR0b246IG5hdkJ1dHRvblByZXNldHMucHgsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLnB4LFxuICBNdGVOYXZJdGVtOiBuYXZJdGVtUHJlc2V0cy5weCxcbiAgTXRlQnV0dG9uR3JvdXA6IGJ1dHRvbkdyb3VwUHJlc2V0cy5weCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLnB4LFxuICBNdGVOYXRpdmVTZWxlY3Q6IG5hdGl2ZVNlbGVjdFByZXNldHMucHgsXG4gIE10ZVRleHRhcmVhOiB0ZXh0YXJlYVByZXNldHMucHgsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMucHgsXG4gIE10ZVNsaWRlcjogc2xpZGVyUHJlc2V0cy5weCxcbiAgTXRlUmFuZ2VTbGlkZXI6IHJhbmdlU2xpZGVyUHJlc2V0cy5weCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMucHgsXG59O1xuXG5leHBvcnQgY29uc3QgY3hQcmVzZXQ6IE1vcnRhclByZXNldCA9IHtcbiAgcHJlc2V0OiAnY3gnLFxuICB0aGVtZToge1xuICAgIG5hbWU6ICdjeCcsXG4gICAgY29sb3JTY2hlbWU6ICdsaWdodCcsXG4gIH0sXG4gIE10ZUJ1dHRvbjogYnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMuY3gsXG4gIE10ZUljb246IGljb25QcmVzZXRzLmN4LFxuICBNdGVQcm9ncmVzc0JhcjogcHJvZ3Jlc3NCYXJQcmVzZXRzLmN4LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMuY3gsXG4gIE10ZVRvb2xiYXI6IHRvb2xiYXJQcmVzZXRzLmN4LFxuICBNdGVDYXJkOiBjYXJkUHJlc2V0cy5jeCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMuY3gsXG4gIE10ZVRyZWU6IHRyZWVQcmVzZXRzLmN4LFxuICBNdGVUYWc6IHRhZ1ByZXNldHMuY3gsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMuY3gsXG4gIE10ZUxpbms6IGxpbmtQcmVzZXRzLmN4LFxuICBNdGVBbGVydDogYWxlcnRQcmVzZXRzLmN4LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLmN4LFxuICBNdGVEcmF3ZXI6IGRyYXdlclByZXNldHMuY3gsXG4gIE10ZUFzaWRlOiBhc2lkZVByZXNldHMuY3gsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMuY3gsXG4gIE10ZU1vZGFsOiBtb2RhbFByZXNldHMuY3gsXG4gIE10ZUNoZWNrYm94OiBjaGVja2JveFByZXNldHMuY3gsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMuY3gsXG4gIE10ZU5hdlJvb3Q6IG5hdlJvb3RQcmVzZXRzLmN4LFxuICBNdGVOYXZIZWFkZXI6IG5hdkhlYWRlclByZXNldHMuY3gsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5jeCxcbiAgTXRlTmF2U2lkZWJhcjogbmF2U2lkZWJhclByZXNldHMuY3gsXG4gIE10ZU5hdkNvbnRlbnQ6IG5hdkNvbnRlbnRQcmVzZXRzLmN4LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMuY3gsXG4gIE10ZU5hdkJ1dHRvbjogbmF2QnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlTmF2SWNvbkJ1dHRvbjogbmF2SWNvbkJ1dHRvblByZXNldHMuY3gsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLmN4LFxuICBNdGVCdXR0b25Hcm91cDogYnV0dG9uR3JvdXBQcmVzZXRzLmN4LFxuICBNdGVTd2l0Y2g6IHN3aXRjaFByZXNldHMuY3gsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5jeCxcbiAgTXRlVGV4dGFyZWE6IHRleHRhcmVhUHJlc2V0cy5jeCxcbiAgTXRlU2tlbGV0b246IHNrZWxldG9uUHJlc2V0cy5jeCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLmN4LFxuICBNdGVSYW5nZVNsaWRlcjogcmFuZ2VTbGlkZXJQcmVzZXRzLmN4LFxuICBNdGVTZWdtZW50ZWRDb250cm9sOiBzZWdtZW50ZWRDb250cm9sUHJlc2V0cy5jeCxcbn07XG5cbmV4cG9ydCBjb25zdCByeFByZXNldDogTW9ydGFyUHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdyeCcsXG4gIHRoZW1lOiB7XG4gICAgbmFtZTogJ3J4JyxcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSxcbiAgTXRlQnV0dG9uOiBidXR0b25QcmVzZXRzLnJ4LFxuICBNdGVJY29uQnV0dG9uOiBpY29uQnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMucngsXG4gIE10ZVByb2dyZXNzQmFyOiBwcm9ncmVzc0JhclByZXNldHMucngsXG4gIE10ZVByb2dyZXNzU3Bpbm5lcjogcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cy5yeCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMucngsXG4gIE10ZUNhcmQ6IGNhcmRQcmVzZXRzLnJ4LFxuICBNdGVDYXJkQnV0dG9uOiBjYXJkQnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMucngsXG4gIE10ZVRhZzogdGFnUHJlc2V0cy5yeCxcbiAgTXRlQmFkZ2U6IGJhZGdlUHJlc2V0cy5yeCxcbiAgTXRlTGluazogbGlua1ByZXNldHMucngsXG4gIE10ZUFsZXJ0OiBhbGVydFByZXNldHMucngsXG4gIE10ZUlucHV0OiBpbnB1dFByZXNldHMucngsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5yeCxcbiAgTXRlQXNpZGU6IGFzaWRlUHJlc2V0cy5yeCxcbiAgTXRlQnJlYWRjcnVtYkl0ZW06IGJyZWFkY3J1bWJJdGVtUHJlc2V0cy5yeCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5yeCxcbiAgTXRlQ2hlY2tib3g6IGNoZWNrYm94UHJlc2V0cy5yeCxcbiAgTXRlUmFkaW86IHJhZGlvUHJlc2V0cy5yeCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMucngsXG4gIE10ZU5hdkhlYWRlcjogbmF2SGVhZGVyUHJlc2V0cy5yeCxcbiAgTXRlTmF2U3ViSGVhZGVyOiBuYXZTdWJIZWFkZXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5yeCxcbiAgTXRlTmF2Q29udGVudDogbmF2Q29udGVudFByZXNldHMucngsXG4gIE10ZU5hdkZvb3RlcjogbmF2Rm9vdGVyUHJlc2V0cy5yeCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVOYXZJY29uQnV0dG9uOiBuYXZJY29uQnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlTmF2SXRlbTogbmF2SXRlbVByZXNldHMucngsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMucngsXG4gIE10ZVN3aXRjaDogc3dpdGNoUHJlc2V0cy5yeCxcbiAgTXRlTmF0aXZlU2VsZWN0OiBuYXRpdmVTZWxlY3RQcmVzZXRzLnJ4LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLnJ4LFxuICBNdGVTa2VsZXRvbjogc2tlbGV0b25QcmVzZXRzLnJ4LFxuICBNdGVTbGlkZXI6IHNsaWRlclByZXNldHMucngsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMucngsXG4gIE10ZVNlZ21lbnRlZENvbnRyb2w6IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzLnJ4LFxufTtcbiIsICJpbXBvcnQgeyBjeFByZXNldCwgZGVmYXVsdFByZXNldCwgTW9ydGFyUHJlc2V0LCBweFByZXNldCwgcnhQcmVzZXQgfSBmcm9tICcuL3ByZXNldHMnO1xuaW1wb3J0IHsgY29tcHV0ZWQsIFNpZ25hbCwgc2lnbmFsIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuY2xhc3MgX010ZVByZXNldFNlcnZpY2Uge1xuICBwcml2YXRlIHByZXNldHMgPSBuZXcgTWFwPHN0cmluZywgTW9ydGFyUHJlc2V0PihbXG4gICAgWydnbG9iYWwnLCBkZWZhdWx0UHJlc2V0XSxcbiAgICBbJ2RlZmF1bHQnLCBkZWZhdWx0UHJlc2V0XSxcbiAgICBbJ3B4JywgcHhQcmVzZXRdLFxuICAgIFsnY3gnLCBjeFByZXNldF0sXG4gICAgWydyeCcsIHJ4UHJlc2V0XSxcbiAgXSk7XG5cbiAgcHJpdmF0ZSBwcmVzZXRDaGFuZ2VkU2lnbmFsID0gc2lnbmFsPHsgcHJlc2V0TmFtZTogc3RyaW5nOyBjb21wb25lbnROYW1lOiBzdHJpbmcgfT4oe1xuICAgIHByZXNldE5hbWU6IG51bGwsXG4gICAgY29tcG9uZW50TmFtZTogbnVsbCxcbiAgfSk7XG5cbiAgcHVibGljIHNldFByZXNldChwcmVzZXROYW1lOiBzdHJpbmcsIHByZXNldDogUGFydGlhbDxNb3J0YXJQcmVzZXQ+KSB7XG4gICAgdGhpcy5wcmVzZXRzLnNldChwcmVzZXROYW1lLCB7XG4gICAgICAuLi4odGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKSA/PyBkZWZhdWx0UHJlc2V0KSxcbiAgICAgIC4uLnByZXNldCxcbiAgICB9KTtcbiAgICB0aGlzLnByZXNldENoYW5nZWRTaWduYWwuc2V0KHsgcHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZTogbnVsbCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb21wb25lbnRQcmVzZXQ8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldD4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IEMsXG4gICAgY29tcG9uZW50UHJlc2V0OiBQYXJ0aWFsPE1vcnRhclByZXNldFtDXT5cbiAgKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpID8/IGRlZmF1bHRQcmVzZXQ7XG4gICAgdGhpcy5wcmVzZXRzLnNldChwcmVzZXROYW1lLCB7XG4gICAgICAuLi5zZWxlY3RlZFByZXNldCxcbiAgICAgIFtjb21wb25lbnROYW1lXToge1xuICAgICAgICAuLi4oc2VsZWN0ZWRQcmVzZXRbY29tcG9uZW50TmFtZV0gPz8gKHt9IGFzIGFueSkpLFxuICAgICAgICAuLi5jb21wb25lbnRQcmVzZXQsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbC5zZXQoeyBwcmVzZXROYW1lLCBjb21wb25lbnROYW1lIH0pO1xuICB9XG5cbiAgcHVibGljIHNldENvbXBvbmVudFByZXNldFByb3BlcnR5PEMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXQsIFAgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXRbQ10+KFxuICAgIHByZXNldE5hbWU6IHN0cmluZyxcbiAgICBjb21wb25lbnROYW1lOiBDLFxuICAgIHByb3BlcnR5TmFtZTogUCxcbiAgICB2YWx1ZTogTW9ydGFyUHJlc2V0W0NdW1BdIHwgUGFydGlhbDxNb3J0YXJQcmVzZXRbQ11bUF0+XG4gICkge1xuICAgIGNvbnN0IHNlbGVjdGVkUHJlc2V0ID0gdGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKSA/PyBkZWZhdWx0UHJlc2V0O1xuICAgIGNvbnN0IHNlbGVjdGVkQ29tcG9uZW50UHJlc2V0ID0gc2VsZWN0ZWRQcmVzZXRbY29tcG9uZW50TmFtZV0gYXMgYW55O1xuXG4gICAgLy8gSWYgc2V0dGluZyBhbiBvYmplY3QgdmFsdWUgYmUgc3VyZSB0byBzcHJlYWQgb3ZlciBleGlzdGluZyB2YWx1ZVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgICAgLi4uc2VsZWN0ZWRQcmVzZXQsXG4gICAgICAgIFtjb21wb25lbnROYW1lXToge1xuICAgICAgICAgIC4uLnNlbGVjdGVkQ29tcG9uZW50UHJlc2V0LFxuICAgICAgICAgIFtwcm9wZXJ0eU5hbWVdOiB7XG4gICAgICAgICAgICAuLi5zZWxlY3RlZENvbXBvbmVudFByZXNldFtwcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgICAgLi4udmFsdWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UganVzdCBzZXQgdGhlIHZhbHVlXG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgICAgLi4uc2VsZWN0ZWRQcmVzZXQsXG4gICAgICAgIFtjb21wb25lbnROYW1lXToge1xuICAgICAgICAgIC4uLnNlbGVjdGVkQ29tcG9uZW50UHJlc2V0LFxuICAgICAgICAgIFtwcm9wZXJ0eU5hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnByZXNldENoYW5nZWRTaWduYWwuc2V0KHsgcHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQcmVzZXQocHJlc2V0TmFtZTogc3RyaW5nKTogTW9ydGFyUHJlc2V0IHtcbiAgICBjb25zdCBwcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpO1xuICAgIGlmICghcHJlc2V0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBNdGVQcmVzZXRTZXJ2aWNlOiBBIHByZXNldCB3aXRoIHRoZSBuYW1lIFwiJHtwcmVzZXROYW1lfVwiIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgfVxuICAgIHJldHVybiBwcmVzZXQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29tcG9uZW50UHJlc2V0PEMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXQ+KFxuICAgIHByZXNldE5hbWU6IHN0cmluZyxcbiAgICBjb21wb25lbnROYW1lOiBDXG4gICk6IE1vcnRhclByZXNldFtDXSB7XG4gICAgY29uc3QgcHJlc2V0ID0gdGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKTtcbiAgICBjb25zdCBjb21wb25lbnRQcmVzZXQgPSBwcmVzZXRbY29tcG9uZW50TmFtZV07XG4gICAgaWYgKCFwcmVzZXQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE10ZVByZXNldFNlcnZpY2U6IEEgcHJlc2V0IHdpdGggdGhlIG5hbWUgXCIke3ByZXNldE5hbWV9XCIgZG9lcyBub3QgZXhpc3QuYCk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRQcmVzZXQ7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0UHJlc2V0KHByZXNldE5hbWU6IHN0cmluZyk6IFNpZ25hbDxNb3J0YXJQcmVzZXQ+IHtcbiAgICBsZXQgZmlyc3RFbWl0ID0gdHJ1ZTtcbiAgICByZXR1cm4gY29tcHV0ZWQodGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLCAoY2hhbmdlLCBzZXQpID0+IHtcbiAgICAgIGlmIChmaXJzdEVtaXQpIHtcbiAgICAgICAgc2V0KHRoaXMuZ2V0UHJlc2V0KHByZXNldE5hbWUpKTtcbiAgICAgICAgZmlyc3RFbWl0ID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5wcmVzZXROYW1lID09PSBwcmVzZXROYW1lKSB7XG4gICAgICAgIHNldCh0aGlzLmdldFByZXNldChwcmVzZXROYW1lKSk7XG4gICAgICB9XG4gICAgfSkgYXMgU2lnbmFsPE1vcnRhclByZXNldD47XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Q29tcG9uZW50UHJlc2V0PEMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXQ+KFxuICAgIHByZXNldE5hbWU6IHN0cmluZyxcbiAgICBjb21wb25lbnROYW1lOiBDXG4gICk6IFNpZ25hbDxNb3J0YXJQcmVzZXRbQ10+IHtcbiAgICBsZXQgZmlyc3RFbWl0ID0gdHJ1ZTtcbiAgICByZXR1cm4gY29tcHV0ZWQodGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLCAoY2hhbmdlLCBzZXQpID0+IHtcbiAgICAgIGlmIChmaXJzdEVtaXQpIHtcbiAgICAgICAgc2V0KHRoaXMuZ2V0Q29tcG9uZW50UHJlc2V0KHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWUpKTtcbiAgICAgICAgZmlyc3RFbWl0ID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAoY2hhbmdlLnByZXNldE5hbWUgPT09IHByZXNldE5hbWUgJiYgIWNoYW5nZS5jb21wb25lbnROYW1lKSB8fFxuICAgICAgICAoY2hhbmdlLnByZXNldE5hbWUgPT09IHByZXNldE5hbWUgJiYgY2hhbmdlLmNvbXBvbmVudE5hbWUgPT09IGNvbXBvbmVudE5hbWUpXG4gICAgICApIHtcbiAgICAgICAgc2V0KHRoaXMuZ2V0Q29tcG9uZW50UHJlc2V0KHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWUpKTtcbiAgICAgIH1cbiAgICB9KSBhcyBTaWduYWw8TW9ydGFyUHJlc2V0W0NdPjtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlUHJlc2V0U2VydmljZSA9IG5ldyBfTXRlUHJlc2V0U2VydmljZSgpO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXMgKi9cbmltcG9ydCB7IENvbnRleHRDb25zdW1lciB9IGZyb20gJ0BsaXQtbGFicy9jb250ZXh0JztcbmltcG9ydCB7IFByb3BlcnR5RGVjbGFyYXRpb24sIFJlYWN0aXZlRWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBDb25zdHJ1Y3RvcixcbiAgaXNTc3IsXG4gIE10ZUVsZW1lbnQsXG4gIE10ZVByZXNldFNlcnZpY2UsXG4gIHByZXNldENvbnRleHQsXG4gIHNpZ25hbCxcbiAgY29tcHV0ZWQsXG4gIFVuc3Vic2NyaWJlcixcbn0gZnJvbSAnLi4vJztcbmltcG9ydCB7IE1vcnRhclByZXNldCB9IGZyb20gJy4vcHJlc2V0cyc7XG5cbmV4cG9ydCB0eXBlIFByZXNldE9wdGlvbnMgPSAnbWQnIHwgJ3NtJyB8ICdsZycgfCBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByZXNldEVsZW1lbnRJbnRlcmZhY2U8UD4ge1xuICAvKiogQGlnbm9yZSAqL1xuICByZWFkb25seSBfX2NvbXBvbmVudE5hbWU6IGtleW9mIE1vcnRhclByZXNldDtcblxuICAvKiogU2VsZWN0cyB0aGUgcHJlc2V0IGZvciB0aGlzIGNvbXBvbmVudC4gT3ZlcnJpZGVzIHRoZSBnbG9iYWwgcHJlc2V0IGZvciB0aGlzIGluc3RhbmNlIG9mIHRoaXMgY29tcG9uZW50LiAqL1xuICBwcmVzZXQ6IHN0cmluZztcblxuICAvKiogQGlnbm9yZSAqL1xuICBhcHBsaWVkUHJlc2V0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJlc2V0TWl4aW5GYWN0b3J5T3B0aW9ucyB7XG4gIHJlZmxlY3RBcHBsaWVkUHJlc2V0OiBib29sZWFuO1xufVxuXG5jb25zdCB7XG4gIGlzLFxuICBkZWZpbmVQcm9wZXJ0eSxcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGdldFByb3RvdHlwZU9mLFxufSA9IE9iamVjdDtcblxuZXhwb3J0IGNvbnN0IFByZXNldE1peGluRmFjdG9yeSA9IDxQPihcbiAgY29tcG9uZW50TmFtZToga2V5b2YgTW9ydGFyUHJlc2V0LFxuICBvcHRpb25zOiBQcmVzZXRNaXhpbkZhY3RvcnlPcHRpb25zID0geyByZWZsZWN0QXBwbGllZFByZXNldDogZmFsc2UgfVxuKSA9PiB7XG4gIHJldHVybiA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gICAgY2xhc3MgUHJlc2V0RWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgcmVhZG9ubHkgX19jb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZTtcblxuICAgICAgLyoqIE1hcCB0aGF0IHN0b3JlcyBwcml2YXRlIHZhbHVlcyB0aGF0IHRha2UgcHJlY2VkZW5jZSBvdmVyIHByZXNldCB2YWx1ZXMgKi9cbiAgICAgIHByb3RlY3RlZCBfdmFsdWVNYXAgPSBuZXcgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPigpO1xuXG4gICAgICAvKiogTWFwIHRoYXQgc3RvcmVzIGZhbGxiYWNrIHByZXNldCB2YWx1ZXMgZW1pdHRlZCBieSB0aGUgcHJlc2V0Q29udHJvbGxlciAqL1xuICAgICAgcHJvdGVjdGVkIF9wcmVzZXRNYXAgPSBuZXcgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPigpO1xuXG4gICAgICAvKiogU2VsZWN0cyBhIHNwZWNpZmljIHByZXNldCBmb3IgdGhpcyBjb21wb25lbnQgaW5zdGFuY2UuIE92ZXJyaWRlcyB0aGUgY3VycmVudCBnbG9iYWwgcHJlc2V0LiAqL1xuICAgICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KVxuICAgICAgc2V0IHByZXNldChwcmVzZXQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcmVzZXQgPSBwcmVzZXQ7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVByZXNldFNpZ25hbC5zZXQocHJlc2V0KTtcbiAgICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgICAvLyBTdG9wIFNTUiBjb25zdHJ1Y3RvciBsaXN0ZW5lciBpZiBzdGlsbCBvcGVuLlxuICAgICAgICAgIHRoaXMuc3NyQ29uc3RydWN0b3JTdWI/LigpO1xuICAgICAgICAgIHRoaXMuc3NyQ29uc3RydWN0b3JTdWIgPSBudWxsO1xuICAgICAgICAgIGNvbnN0IHByZXNldCA9IE10ZVByZXNldFNlcnZpY2UuZ2V0UHJlc2V0KHRoaXMucHJlc2V0ID8/ICdnbG9iYWwnKTtcbiAgICAgICAgICB0aGlzLmhhbmRsZVNzclByZXNldENoYW5nZXMocHJlc2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZ2V0IHByZXNldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZXNldDtcbiAgICAgIH1cbiAgICAgIHByaXZhdGUgX3ByZXNldCA9ICdnbG9iYWwnO1xuXG4gICAgICBAcHJvcGVydHkoeyByZWZsZWN0OiBvcHRpb25zPy5yZWZsZWN0QXBwbGllZFByZXNldCA/PyBmYWxzZSB9KSBhcHBsaWVkUHJlc2V0ID0gJ2dsb2JhbCc7XG5cbiAgICAgIEBzdGF0ZSgpIHByaXZhdGUgX2FwcGxpZWRQcmVzZXQ/OiBzdHJpbmc7XG5cbiAgICAgIC8qKiBLZWVwcyBjb25zdHJ1Y3RvciBwcmVzZXQgc3Vic2NyaXB0aW9uIG9wZW4gdW50aWwgd2lsbFVwZGF0ZSAqL1xuICAgICAgcHJpdmF0ZSBzc3JDb25zdHJ1Y3RvclN1YjogVW5zdWJzY3JpYmVyO1xuICAgICAgcHJpdmF0ZSBwcmV2aW91c0NvbXBvbmVudFVuc3ViOiBVbnN1YnNjcmliZXI7XG5cbiAgICAgIC8qKiBFbWl0cyB3aGVuZXZlciB0aGUgbG9jYWwgcHJlc2V0IHZhbHVlIGNoYW5nZXMuICovXG4gICAgICBwcml2YXRlIF9hY3RpdmVQcmVzZXRTaWduYWwgPSBzaWduYWw8c3RyaW5nPihudWxsKTtcbiAgICAgIHByaXZhdGUgX3BhcmVudFByZXNldFNpZ25hbCA9IHNpZ25hbDxzdHJpbmc+KG51bGwpO1xuXG4gICAgICBwcml2YXRlIF9wcmVzZXRDb250ZXh0ID0gbmV3IENvbnRleHRDb25zdW1lcih0aGlzLCB7XG4gICAgICAgIGNvbnRleHQ6IHByZXNldENvbnRleHQsXG4gICAgICAgIHN1YnNjcmliZTogdHJ1ZSxcbiAgICAgICAgY2FsbGJhY2s6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3BhcmVudFByZXNldFNpZ25hbC5zZXQoKHZhbHVlID09PSAnJyA/IG51bGwgOiB2YWx1ZSkgPz8gJ2dsb2JhbCcpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGdldFByb3BlcnR5RGVzY3JpcHRvciBtZXRob2QgdG8gY2hlY2sgZm9yIHRoZSBjdXN0b21cbiAgICAgICAqIGBpc1ByZXNldGAgb3B0aW9uLiBEZXNjcmlwdG9ycyBvZiBwcm9wZXJ0aWVzIHRoYXQgYXJlIGRlY2xhcmVkIHdpdGggdGhlIGBpc1ByZXNldGBcbiAgICAgICAqIG9wdGlvbiBhcmUgZGVmaW5lZCB3aXRoIHNwZWNpYWwgZ2V0dGVyL3NldHRlciBsb2dpYyB0aGF0IHNldHMgdmFsdWUgdG8gdmFsdWVNYXBcbiAgICAgICAqIGFuZCBnZXRzIHZhbHVlcyBmcm9tIHRoZSB2YWx1ZU1hcCBidXQgdGhlbiBhbHNvIGZhbGxzIGJhY2sgdG8gYW55IHZhbHVlIGluIHRoZSBwcmVzZXRNYXBcbiAgICAgICAqXG4gICAgICAgKiBUaGUgcHJlc2V0TWFwIGlzIHBvcHVsYXRlZCBhYm92ZSBmcm9tIHZhbHVlcyBmcm9tIHRoZSBwcmVzZXRDb250cm9sbGVyIHdoZW5ldmVyIHRoZVxuICAgICAgICogcHJlc2V0IGZvciB0aGlzIGNvbXBvbmVudCBpcyBjaGFuZ2VkIGdsb2JhbGx5LlxuICAgICAgICovXG4gICAgICBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKFxuICAgICAgICBuYW1lOiBQcm9wZXJ0eUtleSxcbiAgICAgICAga2V5OiBzdHJpbmcgfCBzeW1ib2wsXG4gICAgICAgIG9wdGlvbnM6IFByb3BlcnR5RGVjbGFyYXRpb25cbiAgICAgICkge1xuICAgICAgICBjb25zdCB7IGdldCwgc2V0IH0gPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcy5wcm90b3R5cGUsIG5hbWUpID8/IHtcbiAgICAgICAgICBnZXQodGhpczogUmVhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1trZXkgYXMga2V5b2YgdHlwZW9mIHRoaXNdO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCwgdjogdW5rbm93bikge1xuICAgICAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nIHwgc3ltYm9sLCB1bmtub3duPilba2V5XSA9IHY7XG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBnZXQodGhpczogUmVhY3RpdmVFbGVtZW50KTogYW55IHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgZ2V0dGVyIGxvZ2ljIHRoYXQgZ2V0cyBmcm9tIHRoZSB2YWx1ZU1hcCBvciBwcmVzZXRNYXBcbiAgICAgICAgICAgIGlmIChvcHRpb25zWydpc1ByZXNldCddKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgKHRoaXMgYXMge30gYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pLl92YWx1ZU1hcCBhcyBNYXA8XG4gICAgICAgICAgICAgICAgICAgIFByb3BlcnR5S2V5LFxuICAgICAgICAgICAgICAgICAgICBQW2tleW9mIFBdXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgKS5nZXQobmFtZSkgfHxcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkuX3ByZXNldE1hcCBhcyBNYXA8XG4gICAgICAgICAgICAgICAgICAgIFByb3BlcnR5S2V5LFxuICAgICAgICAgICAgICAgICAgICBQW2tleW9mIFBdXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgKS5nZXQobmFtZSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlZmF1bHQgcHJvcGVydHkgZ2V0dGVyIGxvZ2ljXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGdldD8uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQsIHZhbHVlOiB1bmtub3duKSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIHNldHRlciBsb2dpYyB0aGF0IHNldHMgdG8gdGhlIHZhbHVlTWFwXG4gICAgICAgICAgICBpZiAob3B0aW9uc1snaXNQcmVzZXQnXSkge1xuICAgICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IChcbiAgICAgICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkuX3ZhbHVlTWFwIGFzIE1hcDxQcm9wZXJ0eUtleSwgUFtrZXlvZiBQXT5cbiAgICAgICAgICAgICAgKS5nZXQobmFtZSk7XG4gICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkuX3ZhbHVlTWFwIGFzIE1hcDxQcm9wZXJ0eUtleSwgUFtrZXlvZiBQXT5cbiAgICAgICAgICAgICAgKS5zZXQobmFtZSwgdmFsdWUgYXMgYW55KTtcbiAgICAgICAgICAgICAgLy8gRHVyaW5nIFNTUiB3ZSBuZWVkIHRvIHVwZGF0ZSBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgICAgICAgICh0aGlzIGFzIHVua25vd24gYXMgUmVhY3RpdmVFbGVtZW50KS5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBPbiB0aGUgY2xpZW50IHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGN1cnJlbnQgdXBkYXRlIHRvIGZpbmlzaFxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBSZWFjdGl2ZUVsZW1lbnQpLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEZWZhdWx0IHByb3BlcnR5IHNldHRlciBsb2dpY1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gZ2V0Py5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICBzZXQhLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlYWN0aXZlRWxlbWVudCkucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgICAgLy8gU3Vic2NyaWJlcyBmb3IgY2hhbmdlcyB0byB0aGlzIGNvbXBvbmVudHMgYWN0aXZlIHByZXNldCB0byB1cGRhdGUgYWxsIHJlbGV2YW50IHByb3BzIHByZXNldCB2YWx1ZXNcbiAgICAgICAgdGhpcy5zdWJzLnB1c2goXG4gICAgICAgICAgY29tcHV0ZWQoXG4gICAgICAgICAgICBbdGhpcy5fYWN0aXZlUHJlc2V0U2lnbmFsLCB0aGlzLl9wYXJlbnRQcmVzZXRTaWduYWxdLFxuICAgICAgICAgICAgKFthY3RpdmVQcmVzZXQsIHBhcmVudFByZXNldF0sIHNldCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoYWN0aXZlUHJlc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2xvY2FsUHJlc2V0VGhlbWUgPVxuICAgICAgICAgICAgICAgICAgYWN0aXZlUHJlc2V0ID09PSAnZ2xvYmFsJ1xuICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgOiBNdGVQcmVzZXRTZXJ2aWNlLmdldENvbXBvbmVudFByZXNldChhY3RpdmVQcmVzZXQsICd0aGVtZScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX19sb2NhbFByZXNldFRoZW1lID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ3RoZW1lJywgbnVsbCk7XG5cbiAgICAgICAgICAgICAgdGhpcy5fYXBwbGllZFByZXNldCA9IGFjdGl2ZVByZXNldCA/PyBwYXJlbnRQcmVzZXQgPz8gJ2dsb2JhbCc7XG4gICAgICAgICAgICAgIHRoaXMuYXBwbGllZFByZXNldCA9IE10ZVByZXNldFNlcnZpY2UuZ2V0Q29tcG9uZW50UHJlc2V0KFxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGxpZWRQcmVzZXQsXG4gICAgICAgICAgICAgICAgJ3ByZXNldCdcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAvLyBVbnN1YnNjcmliZSB0byBwcmV2aW91cyBjb21wb25lbnQgcHJlc2V0IGNoYW5nZXNcbiAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0NvbXBvbmVudFVuc3ViPy4oKTtcbiAgICAgICAgICAgICAgLy8gVXBkYXRlIHByb3BzIGlmIG5ldyBjb21wb25lbnQgcHJlc2V0IGVtaXRzXG4gICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDb21wb25lbnRVbnN1YiA9IE10ZVByZXNldFNlcnZpY2Uuc2VsZWN0Q29tcG9uZW50UHJlc2V0KFxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGxpZWRQcmVzZXQsXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NvbXBvbmVudE5hbWVcbiAgICAgICAgICAgICAgKS5zdWJzY3JpYmUoKG5ld1ByZXNldCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChuZXdQcmVzZXQpIHtcbiAgICAgICAgICAgICAgICAgIHNldChuZXdQcmVzZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKS5zdWJzY3JpYmUoKG5ld1ByZXNldHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlc01hcCA9IG5ldyBNYXAodGhpcy5fcHJlc2V0TWFwKTtcbiAgICAgICAgICAgIGNvbnN0IG9sZFByb3BzID0gQXJyYXkuZnJvbSh0aGlzLl9wcmVzZXRNYXAua2V5cygpKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gT2JqZWN0LmtleXMobmV3UHJlc2V0cyA/PyB7fSk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBrZXlzIGluIHRoZSBuZXcgcHJlc2V0cyBjbGVhciBhbGwgcHJlc2V0IHZhbHVlc1xuICAgICAgICAgICAgaWYgKG5ld1Byb3BzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBvbGQgc2V0IHByb3BzIGFuZCBuZXcgb25lc1xuICAgICAgICAgICAgLy8gUmVtb3ZlIG9sZCBvbmVzICYgc2V0IG5ldyBvbmVzXG4gICAgICAgICAgICAvLyBGaW5hbGx5IGZvcmNlIGFuIHVwZGF0ZSBmb3IgZWFjaCBwcm9wXG4gICAgICAgICAgICBbLi4ub2xkUHJvcHMsIC4uLm5ld1Byb3BzXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG5ld1ByZXNldHNba2V5XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5zZXQoa2V5LCBuZXdQcmVzZXRzW2tleV0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoa2V5LCBvbGRWYWx1ZXNNYXAuZ2V0KGtleSkgPz8gbnVsbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgICAgICB0aGlzLnByZXZpb3VzQ29tcG9uZW50VW5zdWI/LigpO1xuICAgICAgICB0aGlzLnNzckNvbnN0cnVjdG9yU3ViPy4oKTtcbiAgICAgIH1cblxuICAgICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgc3VwZXIoYXJncyk7XG5cbiAgICAgICAgLy8gVE9ETyhyZWVjZSk6IEVuc3VyZSB3ZSB1cGRhdGUgdGhpcyB0byBzdXBwb3J0IGNvbnRleHQgd2hlbiB0aGF0IGlzIFNTUiBGcmllbmRseTogaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzMzNjVcbiAgICAgICAgLy8gSGFuZGxlIHNldHRpbmcgcHJlc2V0IGRlZmF1bHRzIGluIFNTUlxuICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgIHRoaXMuc3NyQ29uc3RydWN0b3JTdWIgPSBNdGVQcmVzZXRTZXJ2aWNlLnNlbGVjdFByZXNldCh0aGlzLnByZXNldCA/PyAnZ2xvYmFsJykuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHByZXNldCkgPT4gdGhpcy5oYW5kbGVTc3JQcmVzZXRDaGFuZ2VzKHByZXNldClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByaXZhdGUgaGFuZGxlU3NyUHJlc2V0Q2hhbmdlcyhwcmVzZXQ6IE1vcnRhclByZXNldCkge1xuICAgICAgICBpZiAocHJlc2V0KSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50UHJlc2V0cyA9IHByZXNldFt0aGlzLl9fY29tcG9uZW50TmFtZV07XG4gICAgICAgICAgY29uc3Qgb2xkUHJvcHMgPSBBcnJheS5mcm9tKHRoaXMuX3ByZXNldE1hcC5rZXlzKCkpO1xuICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gT2JqZWN0LmtleXMoY29tcG9uZW50UHJlc2V0cyA/PyB7fSk7XG5cbiAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8ga2V5cyBpbiB0aGUgbmV3IHByZXNldHMgY2xlYXIgYWxsIHByZXNldCB2YWx1ZXNcbiAgICAgICAgICBpZiAobmV3UHJvcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuY2xlYXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG9sZCBzZXQgcHJvcHMgYW5kIG5ldyBvbmVzXG4gICAgICAgICAgLy8gUmVtb3ZlIG9sZCBvbmVzICYgc2V0IG5ldyBvbmVzXG4gICAgICAgICAgLy8gRmluYWxseSBmb3JjZSBhbiB1cGRhdGUgZm9yIGVhY2ggcHJvcFxuICAgICAgICAgIFsuLi5vbGRQcm9wcywgLi4ubmV3UHJvcHNdLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudFByZXNldHNba2V5XSkge1xuICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuc2V0KGtleSwgY29tcG9uZW50UHJlc2V0c1trZXldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShrZXksIG51bGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuYXBwbGllZFByZXNldCA9IHByZXNldFsncHJlc2V0J107XG4gICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCdhcHBsaWVkUHJlc2V0JywgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFByZXNldEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8UHJlc2V0RWxlbWVudEludGVyZmFjZTxQPj4gJiBUO1xuICB9O1xufTtcbiIsICJpbXBvcnQgeyBQcm9wZXJ0eURlY2xhcmF0aW9uIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcHJvcGVydHkuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlc2V0UHJvcGVydHk8VD4ob3B0aW9ucz86IFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgcmV0dXJuIHByb3BlcnR5KHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGlzUHJlc2V0OiB0cnVlLFxuICB9IGFzIGFueSk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ0BsaXQtbGFicy9jb250ZXh0JztcblxuZXhwb3J0IGNvbnN0IHByZXNldENvbnRleHQgPSBjcmVhdGVDb250ZXh0PHN0cmluZz4oJ01URV9QUkVTRVQnKTtcbiIsICJpbXBvcnQgeyBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IE10ZVByZXNldFNlcnZpY2UgfSBmcm9tICcuLi9wcmVzZXRzJztcbmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IE10ZUVsZW1lbnQgfSBmcm9tICcuLi9iYXNlLWNsYXNzZXMnO1xuXG5jb25zdCBnbG9iYWxQcmVzZXQkID0gTXRlUHJlc2V0U2VydmljZS5zZWxlY3RQcmVzZXQoJ2dsb2JhbCcpO1xuY29uc3QgZ2xvYmFsUHJlc2V0TmFtZSQgPSBjb21wdXRlZChnbG9iYWxQcmVzZXQkLCAocHJlc2V0KSA9PiBwcmVzZXQucHJlc2V0KTtcblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWVkUHJlc2V0Q29udGV4dCB7XG4gIHByZXNldE5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBQcmVzZXQgaXMgZGV0ZXJtaW5lZCBmcm9tIGVpdGhlciB0aGUgcGFyZW50IHByZXNldCBjb250ZXh0IG9yIGEgbG9jYWwgcHJlc2V0IHByb3BlcnR5LlxuICogVGhpcyBjb250cm9sbGVyIGtlZXBzIHRyYWNrIG9mIHRoZSBhY3R1YWwgYWN0aXZlIHByZXNldCBhcHBsaWVkIHRvIHRoZSBjdXJyZW50IGNvbXBvbmVudC5cbiAqIElmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4gaXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgdGhhdCBjb250ZXh0IGNoYW5nZXMuIE90aGVyd2lzZSBjb250cm9sbGVyXG4gKiBtZXRob2RzIGNhbiBiZSBjYWxsZWQgd2hlbiBuZWVkZWQuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZCBldmVuIHdpdGhpbiBlbGVtZW50cyB0aGF0IGRvIG5vdCBoYXZlIHRoZWlyIG93biBwcmVzZXRcbiAqIG9wdGlvbnMgKGFrYSBleHRlbmQgdGhlIHByZXNldE1peGluKS5cbiAqL1xuZXhwb3J0IGNsYXNzIEFwcGxpZWRQcmVzZXRDb250ZXh0Q29udHJvbGxlciB7XG4gIHByaXZhdGUgYXBwbGllZFByZXNldE5hbWUgPSAnZ2xvYmFsJztcbiAgcHJpdmF0ZSBhY3RpdmVHbG9iYWxQcmVzZXROYW1lID0gJ2RlZmF1bHQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaG9zdDogUmVhY3RpdmVDb250cm9sbGVySG9zdCAmIE10ZUVsZW1lbnQsXG4gICAgcHJpdmF0ZSBjYWxsYmFjaz86IChjb250ZXh0OiBBcHBsaWVkUHJlc2V0Q29udGV4dCkgPT4gdm9pZFxuICApIHtcbiAgICB0aGlzLmhvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gIH1cblxuICBob3N0Q29ubmVjdGVkKCkge1xuICAgIHRoaXMuaG9zdC5zdWJzLnB1c2goXG4gICAgICBnbG9iYWxQcmVzZXROYW1lJC5zdWJzY3JpYmUoKGdsb2JhbFByZXNldE5hbWUpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVHbG9iYWxQcmVzZXROYW1lID0gZ2xvYmFsUHJlc2V0TmFtZTtcbiAgICAgICAgdGhpcy51cGRhdGVBcHBsaWVkUHJlc2V0Q29udGV4dCgpO1xuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuZXhlY0NhbGxiYWNrKCk7XG4gIH1cblxuICBob3N0VXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlQXBwbGllZFByZXNldENvbnRleHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY0NhbGxiYWNrKCkge1xuICAgIHRoaXMuY2FsbGJhY2s/Lih7XG4gICAgICBwcmVzZXROYW1lOiB0aGlzLmFwcGxpZWRQcmVzZXROYW1lLFxuICAgIH0gYXMgQXBwbGllZFByZXNldENvbnRleHQpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVBcHBsaWVkUHJlc2V0Q29udGV4dCgpIHtcbiAgICBsZXQgdXBkYXRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IG5ld1ByZXNldE5hbWUgPSAodGhpcy5ob3N0IGFzIGFueSkuYXBwbGllZFByZXNldCA/PyB0aGlzLmFjdGl2ZUdsb2JhbFByZXNldE5hbWU7XG4gICAgaWYgKG5ld1ByZXNldE5hbWUgIT09IHRoaXMuYXBwbGllZFByZXNldE5hbWUpIHtcbiAgICAgIHRoaXMuYXBwbGllZFByZXNldE5hbWUgPSBuZXdQcmVzZXROYW1lO1xuICAgICAgdXBkYXRlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkKSB7XG4gICAgICB0aGlzLmV4ZWNDYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVQcmVzZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGxpZWRQcmVzZXROYW1lO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaXRFbGVtZW50LCBQcm9wZXJ0eVZhbHVlTWFwLCBSZWFjdGl2ZUVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgaXNTc3IgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG50eXBlIFVwZGF0ZUhhbmRsZXIgPSAoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlTWFwPGFueT4pID0+IHZvaWQ7XG5cbmludGVyZmFjZSBPblVwZGF0ZU9wdGlvbnMge1xuICAvKipcbiAgICogSWYgdHJ1ZSwgd2lsbCBvbmx5IHN0YXJ0IHdhdGNoaW5nIGFmdGVyIHRoZSBpbml0aWFsIHVwZGF0ZS9yZW5kZXJcbiAgICovXG4gIHdhaXRVbnRpbEZpcnN0VXBkYXRlPzogYm9vbGVhbjtcblxuICAvKiogRGV0ZXJtaW5lcyB3aGVyZSB0aGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZC4gRGVmYXVsdHMgdG8gYGNsaWVudGAuICovXG4gIG9uPzogJ2NsaWVudCcgfCAnc3NyJyB8ICdib3RoJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uVXBkYXRlKHByb3BOYW1lczogc3RyaW5nIHwgc3RyaW5nW10sIG9wdGlvbnM/OiBPblVwZGF0ZU9wdGlvbnMpIHtcbiAgY29uc3QgcmVzb2x2ZWRPcHRpb25zOiBSZXF1aXJlZDxPblVwZGF0ZU9wdGlvbnM+ID0ge1xuICAgIHdhaXRVbnRpbEZpcnN0VXBkYXRlOiBmYWxzZSxcbiAgICBvbjogJ2NsaWVudCcsXG4gICAgLi4ub3B0aW9ucyxcbiAgfTtcbiAgcmV0dXJuIDxFbGVtQ2xhc3MgZXh0ZW5kcyBMaXRFbGVtZW50Pihwcm90bzogRWxlbUNsYXNzLCBkZWNvcmF0ZWRGbk5hbWU6IFByb3BlcnR5S2V5KSA9PiB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtLSB1cGRhdGUgaXMgYSBwcm90ZWN0ZWQgcHJvcGVydHlcbiAgICBjb25zdCB7IHdpbGxVcGRhdGUgfSA9IHByb3RvO1xuICAgIGNvbnN0IF9wcm9wTmFtZXMgPSBBcnJheS5pc0FycmF5KHByb3BOYW1lcykgPyBwcm9wTmFtZXMgOiBbcHJvcE5hbWVzXTtcbiAgICBjb25zdCBwcm9wTmFtZUtleXMgPSBfcHJvcE5hbWVzIGFzIChrZXlvZiBFbGVtQ2xhc3MpW107XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtLSB1cGRhdGUgaXMgYSBwcm90ZWN0ZWQgcHJvcGVydHlcbiAgICBwcm90by53aWxsVXBkYXRlID0gZnVuY3Rpb24gKHRoaXM6IEVsZW1DbGFzcywgY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlTWFwPGFueT4pIHtcbiAgICAgIGlmIChwcm9wTmFtZUtleXMuc29tZSgoa2V5KSA9PiBjaGFuZ2VkUHJvcHMuaGFzKGtleSkpKSB7XG4gICAgICAgIGlmICghcmVzb2x2ZWRPcHRpb25zLndhaXRVbnRpbEZpcnN0VXBkYXRlIHx8ICh0aGlzIGFzIHVua25vd24gYXMgTGl0RWxlbWVudCkuaGFzVXBkYXRlZCkge1xuICAgICAgICAgIGNvbnN0IHNzciA9IGlzU3NyKCk7XG4gICAgICAgICAgaWYgKHJlc29sdmVkT3B0aW9ucy5vbiA9PT0gJ2NsaWVudCcgJiYgIXNzcikge1xuICAgICAgICAgICAgKHRoaXNbZGVjb3JhdGVkRm5OYW1lXSBhcyB1bmtub3duIGFzIFVwZGF0ZUhhbmRsZXIpKGNoYW5nZWRQcm9wcyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNvbHZlZE9wdGlvbnMub24gPT09ICdzc3InICYmIHNzcikge1xuICAgICAgICAgICAgKHRoaXNbZGVjb3JhdGVkRm5OYW1lXSBhcyB1bmtub3duIGFzIFVwZGF0ZUhhbmRsZXIpKGNoYW5nZWRQcm9wcyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNvbHZlZE9wdGlvbnMub24gPT09ICdib3RoJykge1xuICAgICAgICAgICAgKHRoaXNbZGVjb3JhdGVkRm5OYW1lXSBhcyB1bmtub3duIGFzIFVwZGF0ZUhhbmRsZXIpKGNoYW5nZWRQcm9wcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3aWxsVXBkYXRlLmNhbGwodGhpcywgY2hhbmdlZFByb3BzKTtcbiAgICB9O1xuICB9O1xufVxuIiwgImltcG9ydCB7IGlzU3NyIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudE9wdGlvbnMge1xuICAvKiogaW5kaWNhdGUgaWYgZXZlbnQgYnViYmxlcyB1cCB0aHJvdWdoIHRoZSBET00gb3Igbm90ICovXG4gIGJ1YmJsZXM/OiBib29sZWFuO1xuICAvKiogaW5kaWNhdGUgaWYgZXZlbnQgaXMgY2FuY2VsYWJsZSAqL1xuICBjYW5jZWxhYmxlPzogYm9vbGVhbjtcbiAgLyoqIGluZGljYXRlIGlmIGV2ZW50IGNhbiBidWJibGUgYWNyb3NzIHRoZSBib3VuZGFyeSBiZXR3ZWVuIHRoZSBzaGFkb3cgRE9NIGFuZCB0aGUgbGlnaHQgRE9NICovXG4gIGNvbXBvc2VkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50RW1pdHRlcjxUPiB7XG4gIHByaXZhdGUgZXZlbnROYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YXJnZXQ6IEhUTUxFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZykge1xuICAgIC8vIFNhbml0eSBjaGVjayB0byBjYWxsIG91dCBpbXByb3Blcmx5IHByZWZpeGVkIGV2ZW50IGVtaXR0ZXJzXG4gICAgdHJ5IHtcbiAgICAgIGlmIChldmVudE5hbWU/LlswXSAhPT0gJ18nKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYCR7dGFyZ2V0LnRhZ05hbWV9OiBFdmVudEVtaXR0ZXIgcHJvcGVydHkgZm9yIFwiJHtldmVudE5hbWV9XCIgbXVzdCBiZSBwcmVmaXhlZCB3aXRoIFwiX1wiYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH1cbiAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZS5yZXBsYWNlKC9eXy8sICcnKTtcbiAgfVxuXG4gIC8qKiBEaXNwYXRjaGVzIHRoZSBjdXN0b20gZXZlbnQuIElmIHRoZSBldmVudCBpcyBgY2FuY2VsYWJsZWAgYW5kIGlzIHByZXZlbnRlZCB0aGlzIHdpbGwgcmV0dXJuIGZhbHNlLiAqL1xuICBlbWl0KHZhbHVlOiBULCBvcHRpb25zPzogRXZlbnRPcHRpb25zKTogYm9vbGVhbiB7XG4gICAgLy8gVE9ETyhyZWVjZSk6IHJlbW92ZSB3aGVuIGV2ZW50cyBhcmUgc3VwcG9ydGVkIGR1cmluZyBTU1JcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhcmdldC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQ8VD4odGhpcy5ldmVudE5hbWUsIHtcbiAgICAgICAgICBkZXRhaWw6IHZhbHVlLFxuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG4vLyBMZWdhY3kgVFMgRGVjb3JhdG9yXG5mdW5jdGlvbiBsZWdhY3lFdmVudChcbiAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLFxuICBwcm90b09yRGVzY3JpcHRvcjogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gIG5hbWU6IFByb3BlcnR5S2V5XG4pIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lLCBkZXNjcmlwdG9yKTtcbn1cblxuLy8gVEMzOSBEZWNvcmF0b3JzIHByb3Bvc2FsXG5mdW5jdGlvbiBzdGFuZGFyZEV2ZW50KGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvciwgZWxlbWVudDogeyBrZXk6IHN0cmluZyB9KSB7XG4gIHJldHVybiB7XG4gICAga2luZDogJ21ldGhvZCcsXG4gICAgcGxhY2VtZW50OiAncHJvdG90eXBlJyxcbiAgICBrZXk6IGVsZW1lbnQua2V5LFxuICAgIGRlc2NyaXB0b3IsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudEVtaXR0ZXIoKSB7XG4gIHJldHVybiAocHJvdG9PckRlc2NyaXB0b3I6IGFueSwgbmFtZTogc3RyaW5nKTogYW55ID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0ge1xuICAgICAgZ2V0KHRoaXM6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgRXZlbnRFbWl0dGVyKHRoaXMsIG5hbWUgIT09IHVuZGVmaW5lZCA/IG5hbWUgOiBwcm90b09yRGVzY3JpcHRvci5rZXkpO1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgfTtcblxuICAgIHJldHVybiBuYW1lICE9PSB1bmRlZmluZWRcbiAgICAgID8gbGVnYWN5RXZlbnQoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IsIG5hbWUpXG4gICAgICA6IHN0YW5kYXJkRXZlbnQoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IpO1xuICB9O1xufVxuIiwgImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvYmFzZS5qcyc7XG4vKipcbiAqIEl0ZW1zIGluIHRoaXMgZmlsZSBhcmUgbW9kaWZpY2F0aW9ucyBvZiBvZiB0aGUgZGVjb3JhdG9ycyBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvYmxvYi9tYWluL3BhY2thZ2VzL3JlYWN0aXZlLWVsZW1lbnQvc3JjL2RlY29yYXRvcnMvY3VzdG9tLWVsZW1lbnQudHNcbiAqXG4gKiBXZSd2ZSBhZGRlZCBjaGVja3MgdG8gcHJldmVudCByZS1yZWdpc3RyYXRpb25zIGZyb20gdGhyb3dpbmcgaGFyZCBlcnJvcnMuXG4gKi9cblxuLyoqXG4gKiBBbGxvdyBmb3IgY3VzdG9tIGVsZW1lbnQgY2xhc3NlcyB3aXRoIHByaXZhdGUgY29uc3RydWN0b3JzXG4gKi9cbnR5cGUgQ3VzdG9tRWxlbWVudENsYXNzID0gT21pdDx0eXBlb2YgSFRNTEVsZW1lbnQsICduZXcnPjtcblxuZXhwb3J0IHR5cGUgQ3VzdG9tRWxlbWVudERlY29yYXRvciA9IHtcbiAgLy8gbGVnYWN5XG4gIChjbHM6IEN1c3RvbUVsZW1lbnRDbGFzcyk6IHZvaWQ7XG5cbiAgLy8gc3RhbmRhcmRcbiAgKHRhcmdldDogQ3VzdG9tRWxlbWVudENsYXNzLCBjb250ZXh0OiBDbGFzc0RlY29yYXRvckNvbnRleHQ8Q29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+Pik6IHZvaWQ7XG59O1xuXG4vKipcbiAqIENsYXNzIGRlY29yYXRvciBmYWN0b3J5IHRoYXQgZGVmaW5lcyB0aGUgZGVjb3JhdGVkIGNsYXNzIGFzIGEgY3VzdG9tIGVsZW1lbnQuXG4gKlxuICogYGBganNcbiAqIEBjdXN0b21FbGVtZW50KCdteS1lbGVtZW50JylcbiAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgYDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKiBAcGFyYW0gdGFnTmFtZSBUaGUgdGFnIG5hbWUgb2YgdGhlIGN1c3RvbSBlbGVtZW50IHRvIGRlZmluZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmluZUVsZW1lbnQgPVxuICAodGFnTmFtZTogc3RyaW5nKTogQ3VzdG9tRWxlbWVudERlY29yYXRvciA9PlxuICAoXG4gICAgY2xhc3NPclRhcmdldDogQ3VzdG9tRWxlbWVudENsYXNzIHwgQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+LFxuICAgIGNvbnRleHQ/OiBDbGFzc0RlY29yYXRvckNvbnRleHQ8Q29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+PlxuICApID0+IHtcbiAgICBpZiAoY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyKCgpID0+IHtcbiAgICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQ/Lih0YWdOYW1lKSkge1xuICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGFzc09yVGFyZ2V0IGFzIEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldD8uKHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGFzc09yVGFyZ2V0IGFzIEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3Rvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdChbZGVuc2l0eT1jb21wYWN0XSl7LS1tdGUtc3BhY2UteHhzOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHMpOy0tbXRlLXNwYWNlLXNtOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXNtKTstLW10ZS1zcGFjZS1tZDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QtbGcpOy0tbXRlLXNwYWNlLXhsOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXhsKTstLW10ZS1zcGFjZS14eGw6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXh4eGwpfTpob3N0KFtkZW5zaXR5PWNvbWZ5XSl7LS1tdGUtc3BhY2UteHhzOnZhcigtLW10ZS1zcGFjZS1jb21meS14eHMpOy0tbXRlLXNwYWNlLXhzOnZhcigtLW10ZS1zcGFjZS1jb21meS14cyk7LS1tdGUtc3BhY2Utc206dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXNtKTstLW10ZS1zcGFjZS1tZDp2YXIoLS1tdGUtc3BhY2UtY29tZnktbWQpOy0tbXRlLXNwYWNlLWxnOnZhcigtLW10ZS1zcGFjZS1jb21meS1sZyk7LS1tdGUtc3BhY2UteGw6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXhsKTstLW10ZS1zcGFjZS14eGw6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4bCk7LS1tdGUtc3BhY2UteHh4bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHh4bCl9Omhvc3QoW2RlbnNpdHk9cm9vbXldKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLXJvb215LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLXJvb215LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2Utcm9vbXktc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1yb29teS1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLXJvb215LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14eHhsKX1gOyIsICJpbXBvcnQgeyBMaXRFbGVtZW50LCBQcm9wZXJ0eVZhbHVlcyB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRGlzYWJsZWRJbnRlcmZhY2Uge1xuICAvKipcbiAgICogRGlzYWJsZXMgdGhpcyBjb21wb25lbnRcbiAgICogQGF0dHIgZGlzYWJsZWRcbiAgICovXG4gIGRpc2FibGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgRGlzYWJsZWRNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgRGlzYWJsZWRFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBkaXNhYmxlZFxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8vIEJlY2F1c2UgYGFyaWFEaXNhYmxlZGAgZXhpc3RzIGFzIGEgc3RyaW5nIG9uIExpdEVsZW1lbnQgd2UgY2Fubm90IGRlY2xhcmUgdGhpcyBhIHByb3BlcnR5IGhlcmVcbiAgICBwcm90ZWN0ZWQgd2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzPGFueT4pOiB2b2lkIHtcbiAgICAgIHN1cGVyLndpbGxVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKF9jaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIGAke3RoaXMuZGlzYWJsZWR9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gRGlzYWJsZWRFbGVtZW50IGFzIENvbnN0cnVjdG9yPERpc2FibGVkSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBwcmVzZXRQcm9wZXJ0eSB9IGZyb20gJy4uL3ByZXNldHMvcHJlc2V0LmRlY29yYXRvcic7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEludmVyc2VJbnRlcmZhY2Uge1xuICAvKiogUmVuZGVycyB0aGlzIGNvbXBvbmVudCB3aXRoIGludmVyc2UgdGhlbWluZyAqL1xuICBpbnZlcnNlOiBib29sZWFuO1xuXG4gIC8qKiBTcGVjaWFsIG9wdGlvbiB0byBvdmVycmlkZSBpbnZlcnNlIHdoZW4gaXQgaXMgc2V0IGJ5IGEgcHJlc2V0ICovXG4gIHdpdGhvdXRJbnZlcnNlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgSW52ZXJzZU1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBJbnZlcnNlRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKiBSZW5kZXJzIHRoaXMgY29tcG9uZW50IHdpdGggaW52ZXJzZSB0aGVtaW5nICovXG4gICAgQHByZXNldFByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBpbnZlcnNlID0gZmFsc2U7XG5cbiAgICAvKiogU3BlY2lhbCBvcHRpb24gdG8gb3ZlcnJpZGUgaW52ZXJzZSB3aGVuIGl0IGlzIHNldCBieSBhIHByZXNldCAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgd2l0aG91dEludmVyc2UgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gSW52ZXJzZUVsZW1lbnQgYXMgQ29uc3RydWN0b3I8SW52ZXJzZUludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3QoW2ludmVyc2VdOm5vdChbd2l0aG91dEludmVyc2VdKSl7LS1tdGUtc3VyZmFjZS0xOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tbXRlLXN1cmZhY2UtMS1yZ2I6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpOy0tbXRlLXN1cmZhY2UtMjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlKTstLW10ZS1zdXJmYWNlLTItcmdiOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UtcmdiKTstLW10ZS1zdXJmYWNlLTM6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS0zLXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtc3VyZmFjZS00OnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tbXRlLXN1cmZhY2UtNC1yZ2I6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpOy0tbXRlLWluay0xOnZhcigtLW10ZS13aGl0ZSk7LS1tdGUtaW5rLTEtcmdiOnZhcigtLW10ZS13aGl0ZS1yZ2IpOy0tbXRlLWluay0yOnZhcigtLW10ZS13aGl0ZSk7LS1tdGUtaW5rLTItcmdiOnZhcigtLW10ZS13aGl0ZS1yZ2IpOy0tbXRlLWluay0zOnZhcigtLW10ZS13aGl0ZSk7LS1tdGUtaW5rLTMtcmdiOnZhcigtLW10ZS13aGl0ZS1yZ2IpOy0tbXRlLWluay00OnZhcigtLW10ZS1ibGFjayk7LS1tdGUtaW5rLTQtcmdiOnZhcigtLW10ZS1ibGFjay1yZ2IpOy0tbXRlLWluay01OnZhcigtLW10ZS1ibGFjayk7LS1tdGUtaW5rLTUtcmdiOnZhcigtLW10ZS1ibGFjay1yZ2IpOy0tbXRlLWJvcmRlci0xOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZSk7LS1tdGUtYm9yZGVyLTEtcmdiOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZS1yZ2IpOy0tbXRlLWJvcmRlci0yOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZSk7LS1tdGUtYm9yZGVyLTItcmdiOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZS1yZ2IpOy0tbXRlLWJvcmRlci0zOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZSk7LS1tdGUtYm9yZGVyLTMtcmdiOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZS1yZ2IpOy0tbXRlLWRpc2FibGVkLTE6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMSk7LS1tdGUtZGlzYWJsZWQtMS1yZ2I6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMS1yZ2IpOy0tbXRlLWRpc2FibGVkLTI6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMik7LS1tdGUtZGlzYWJsZWQtMi1yZ2I6dmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMik7LS1tdGUtZGlzYWJsZWQtMzp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zKTstLW10ZS1kaXNhYmxlZC0zLXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zLXJnYik7LS1tdGUtZGlzYWJsZWQtNDp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zKTstLW10ZS1kaXNhYmxlZC00LXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWRlZmF1bHQtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMS1kZWZhdWx0LWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LWEpOy0tbXRlLWl0LXN1cmZhY2UtMS1ob3Zlci1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMS1ob3Zlci1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItYSk7LS1tdGUtaXQtc3VyZmFjZS0xLWFjdGl2ZS1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtYSk7LS1tdGUtaXQtc3VyZmFjZS0yLWRlZmF1bHQtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMi1kZWZhdWx0LWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LWEpOy0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItYSk7LS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtYSk7LS1tdGUtaXQtc3VyZmFjZS0zLWRlZmF1bHQtcmdiOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMy1kZWZhdWx0LWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LWEpOy0tbXRlLWl0LXN1cmZhY2UtMy1ob3Zlci1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMy1ob3Zlci1hOnZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItYSk7LS1tdGUtaXQtc3VyZmFjZS0zLWFjdGl2ZS1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTMtYWN0aXZlLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1hY3RpdmUtYSk7LS1tdGUtbGlnaHQ6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1saWdodC1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtZGFyazp2YXIoLS1tdGUtYmxhY2spOy0tbXRlLWRhcmstcmdiOnZhcigtLW10ZS1ibGFjay1yZ2IpOy0tYnV0dG9uLWZpbGxlZC1iZzp2YXIoLS1tdGUtd2hpdGUpOy0tYnV0dG9uLWZpbGxlZC1pbms6dmFyKC0tbXRlLWJsYWNrKTstLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWJnOnZhcigtLW10ZS1ib3JkZXItaW52ZXJzZSk7LS1idXR0b24tZmlsbGVkLWFjdGl2ZS1pbms6dmFyKC0tbXRlLXdoaXRlKX1gOyIsICJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgb25VcGRhdGUgfSBmcm9tICcuLi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IERpc2FibGVkSW50ZXJmYWNlIH0gZnJvbSAnLi9kaXNhYmxlZC5taXhpbic7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IGlzU3NyIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGFiSW5kZXhJbnRlcmZhY2Uge1xuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHRhYmluZGV4IGF0dHJpYnV0ZSB2YWx1ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGdldFRhYkluZGV4QWRhcHRlcigpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byBzZXQgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBvbiBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzZXRUYWJJbmRleEFkYXB0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byByZW1vdmUgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlbW92ZVRhYkluZGV4QWRhcHRlcigpOiB2b2lkO1xufVxuXG4vKipcbiAqIE1peGluIHRvIHByb3Blcmx5IG1hbmFnZSB0aGUgdGFiaW5kZXggaW4gYSBub24taW50cnVzaXZlIHdheS4gV2hlbiBkaXNhYmxlZCBpcyB0cnVlLFxuICogdGhlIHRhYmluZGV4IHdpbGwgQUxXQVlTIGJlIGAtMWAuIEhvd2V2ZXIsIGFueSBjaGFuZ2VzIHRvIHRhYmluZGV4IHdpbGwgYmUgaW50ZXJjZXB0ZWRcbiAqIGFuZCBjYWNoZWQgaW50ZXJuYWxseSB1bnRpbCBkaXNhYmxlZCBpcyBmYWxzZSwgdGhlbiB0YWJpbmRleCB3aWxsIGJlIHJlc3RvcmVkIHRvIHRoZVxuICogY2FjaGVkIHZhbHVlLCBvciByZW1vdmVkIGlmIHRoYXQgaXMgdW5kZWZpbmVkLlxuICovXG5leHBvcnQgY29uc3QgVGFiSW5kZXhNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TGl0RWxlbWVudCAmIERpc2FibGVkSW50ZXJmYWNlPj4oXG4gIHN1cGVyQ2xhc3M6IFQsXG4gIG9wdGlvbnM6IHsgaW5pdGlhbFRhYkluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQgfSA9IHsgaW5pdGlhbFRhYkluZGV4OiB1bmRlZmluZWQgfVxuKSA9PiB7XG4gIGNsYXNzIFRhYkluZGV4RWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ3RhYmluZGV4JywgdHlwZTogTnVtYmVyLCBub0FjY2Vzc29yOiB0cnVlIH0pXG4gICAgcHVibGljIG92ZXJyaWRlIHNldCB0YWJJbmRleCh0YWJJbmRleDogbnVtYmVyKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAvLyBXaGVuIHNldHRpbmcgdGhlIHRhYkluZGV4IG9uIHRoZSBjdXJyZW50IGVsZW1lbnQgdG8gYC0xYCBkaXNhYmxlZCwgd2Ugd2FudCB0byBrZWVwIHRyYWNrIG9mIHdoYXQgdGhlIHRhYkluZGV4IHZhbHVlIGJlZm9yZSB0aGF0IHdhc1xuICAgICAgICAvLyBhcyB0aGUgY2FjaGVkVGFiSW5kZXguIFRvIGRvIHRoaXMgd2UgbXVzdCBpZ25vcmUgdGhlIGluaXRpYWwgY2hhbmdlIHRvIGAtMWAgYW5kIHRoZW4gY2FjaGUgYW55IGZ1dHVyZSB2YWx1ZXMgYmVmb3JlIGtlZXBpbmcgdGhlXG4gICAgICAgIC8vIHRhYkluZGV4IGFzIGAtMWAgdW50aWwgbm8gbG9uZ2VyIGRpc2FibGVkLiBUaGVuIHdlIGNhbiByZXR1cm4gdGhlIHRhYkluZGV4IHRvIHdoYXRldmVyIHRoZSBsYXN0IHNldCB2YWx1ZSB3YXMgZnJvbSB0aGUgY2FjaGVkIGluZGV4LlxuICAgICAgICBpZiAoIXRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSkge1xuICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcignLTEnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoYCR7dGhpcy5fdGFiSW5kZXh9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgdGFiSW5kZXgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGFiSW5kZXg7XG4gICAgfVxuICAgIHByaXZhdGUgX3RhYkluZGV4ID0gb3B0aW9ucz8uaW5pdGlhbFRhYkluZGV4O1xuICAgIHByaXZhdGUgX2NhY2hlZFRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IGZhbHNlO1xuXG4gICAgQG9uVXBkYXRlKFsnZGlzYWJsZWQnXSwgeyBvbjogJ2JvdGgnIH0pXG4gICAgcHJpdmF0ZSBoYW5kbGVUYWJpbmRleENoYW5nZShjaGFuZ2VkUHJvcHMpIHtcbiAgICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIGlmIChjaGFuZ2VkUHJvcHMuZ2V0KCdkaXNhYmxlZCcpID09PSBmYWxzZSAmJiB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSBOdW1iZXIodGhpcy5nZXRUYWJJbmRleEFkYXB0ZXIoKSk7XG4gICAgICAgICAgdGhpcy5fdGFiSW5kZXggPSAtMTtcbiAgICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcignLTEnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2VkUHJvcHMuZ2V0KCdkaXNhYmxlZCcpID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2NhY2hlZFRhYkluZGV4ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fY2FjaGVkVGFiSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYkluZGV4ID0gdGhpcy5fY2FjaGVkVGFiSW5kZXg7XG4gICAgICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl9jYWNoZWRUYWJJbmRleH1gKTtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZWRUYWJJbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byByZXRyaWV2ZSB0aGUgY3VycmVudCB0YWJpbmRleCBhdHRyaWJ1dGUgdmFsdWUgZnJvbSBhIGN1c3RvbSB0YXJnZXQgZWxlbWVudCAqL1xuICAgIGdldFRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHNldCB0aGUgdGFiaW5kZXggYXR0cmlidXRlIG9uIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50ICovXG4gICAgc2V0VGFiSW5kZXhBZGFwdGVyKHZhbHVlOiBzdHJpbmcsIHNob3VsZFByZXZlbnRUYWJJbmRleENoYW5nZU9uU2VsZiA9IGZhbHNlKSB7XG4gICAgICBpZiAoc2hvdWxkUHJldmVudFRhYkluZGV4Q2hhbmdlT25TZWxmKSB7XG4gICAgICAgIHRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIE92ZXJyaWRlIHRoaXMgYWRhcHRlciB0byByZW1vdmUgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50ICovXG4gICAgcmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgd2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgc3VwZXIud2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChpc1NzcigpICYmIHRoaXMuX3RhYkluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZXRUYWJJbmRleEFkYXB0ZXIoYCR7dGhpcy5fdGFiSW5kZXh9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAodGhpcy5fdGFiSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl90YWJJbmRleH1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFRhYkluZGV4RWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxUYWJJbmRleEludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50LCBTdHlsZU1hcCB9IGZyb20gJy4uJztcbmltcG9ydCB7IHNlbGVjdG9yRmFjdG9yeSB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBNdGVFbGVtZW50UGFydHMge1xuICAvKiogVGhlIGhvc3QgZWxlbWVudCBcInBhcnRcIi4gT3ZlcnJpZGVzIHRoZSBgc2VgIHByb3BlcnR5IG9mIHRoaXMgZWxlbWVudCAqL1xuICBob3N0PzogU3R5bGVNYXA7XG59XG5cbmV4cG9ydCB0eXBlIFN0eWxlUGFydHNNYXA8VCA9IHN0cmluZyB8IG51bWJlcj4gPSB7XG4gIFtuYW1lOiBzdHJpbmddOiBTdHlsZU1hcDxUPjtcbn07XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0eWxlUGFydHNJbnRlcmZhY2U8U3R5bGVQYXJ0cz4ge1xuICAvKipcbiAgICogU3R5bGUgbWFwcGluZ3MgdGhhdCBhcmUgYXBwbGllZCB0byBlYWNoIGNzcyBwYXJ0IGJ5IG5hbWUuIFNldCB0aGVcbiAgICogcHJvcGVydHkgYGhvc3RgIHRvIGFwcGx5IGEgYFN0eWxlSW5mb2Agb2JqZWN0IHRvIHRoZSBlbGVtZW50IGhvc3QgaXRzZWxmLlxuICAgKi9cbiAgc3A/OiBTdHlsZVBhcnRzO1xufVxuXG5leHBvcnQgY29uc3QgU3R5bGVQYXJ0c01peGluID0gPFN0eWxlUGFydHMsIFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBTdHlsZVBhcnRzRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIFN0eWxlIG1hcHBpbmdzIHRoYXQgYXJlIGFwcGxpZWQgdG8gZWFjaCBjc3MgcGFydCBieSBuYW1lLiBTZXQgdGhlXG4gICAgICogcHJvcGVydHkgYGhvc3RgIHRvIGFwcGx5IGEgYFN0eWxlSW5mb2Agb2JqZWN0IHRvIHRoZSBlbGVtZW50IGhvc3QgaXRzZWxmLlxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCwgcmVmbGVjdDogdHJ1ZSB9KSBzcDogU3R5bGVQYXJ0cztcblxuICAgIHByb3RlY3RlZCB1cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpIHtcbiAgICAgIHN1cGVyLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKCdzcCcpKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuc3AgPz8gKHt9IGFzIFN0eWxlUGFydHMpKS5mb3JFYWNoKChbcGFydCwgc3R5bGVNYXBdKSA9PiB7XG4gICAgICAgICAgLy8gRG91YmxlIHRoZSBgOmhvc3RgIHNlbGVjdG9yIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5IGJleW9uZCBtb3N0IGNvbXBvbmVudCBsZXZlbCBzdHlsZXMgYnkgZGVmYXVsdFxuICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0b3JGYWN0b3J5KFxuICAgICAgICAgICAgcGFydCA9PT0gJ2hvc3QnXG4gICAgICAgICAgICAgID8gJzpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCdcbiAgICAgICAgICAgICAgOiBgOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0OjpwYXJ0KCR7cGFydH0pYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zZXRJbnN0YW5jZVN0eWxlKGBzcC0ke3BhcnR9YCwgc2VsZWN0b3IsIHN0eWxlTWFwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFN0eWxlUGFydHNFbGVtZW50IGFzIENvbnN0cnVjdG9yPFN0eWxlUGFydHNJbnRlcmZhY2U8U3R5bGVQYXJ0cz4+ICYgVDtcbn07XG4iLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlfSNhbmNob3J7aW5zZXQ6MDtwb3NpdGlvbjphYnNvbHV0ZX1gOyIsICJpbXBvcnQgeyBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBDbGlja091dHNpZGVDb250cm9sbGVyLFxuICBDb25zdHJ1Y3RvcixcbiAgRXZlbnRFbWl0dGVyLFxuICBGb2N1c1RyYXBDb250cm9sbGVyLFxuICBNdGVFbGVtZW50LFxuICBQb3J0YWxBZGFwdGVyLFxuICBQb3J0YWxDb250cm9sbGVyLFxuICBkZWZhdWx0UG9ydGFsQWRhcHRlcixcbiAgZXZlbnRFbWl0dGVyLFxuICBpc1Nzcixcbn0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgUHJvcGVydHlWYWx1ZU1hcCB9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE92ZXJsYXlJbnRlcmZhY2Uge1xuICAvKipcbiAgICogVXBkYXRlcyB0aGUgb3ZlcmxheSBzdGF0ZSBvbiB0aGUgb3ZlcmxheSBtaXhpbi4gQnkgZGVmYXVsdCBhbGwgb3B0aW9ucyBhcmUgc2V0IHRvIHRydWUgaW5pdGlhbGx5LlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgc2V0T3ZlcmxheU9wdGlvbnMob3B0aW9uczoge1xuICAgIHdpdGhDbG9zZU9uQ2xpY2tPdXRzaWRlPzogYm9vbGVhbjtcbiAgICB3aXRoQ2xvc2VPbkVzY2FwZT86IGJvb2xlYW47XG4gICAgd2l0aEZvY3VzVHJhcD86IGJvb2xlYW47XG4gICAgd2l0aFBvcnRhbD86IGJvb2xlYW47XG4gICAgd2l0aERpbUJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICB3aXRoSW5lcnRCYWNrZHJvcD86IGJvb2xlYW47XG4gICAgd2l0aFNjcm9sbExvY2s/OiBib29sZWFuO1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uPzogbnVtYmVyO1xuICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuICAgIHJldHVyblRvT3JpZ2luT25DbG9zZT86IGJvb2xlYW47XG4gICAgZm9jdXNUcmFwVGFyZ2V0PzogRWxlbWVudDtcbiAgfSk6IHVua25vd247XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBvdmVybGF5IHNob3VsZCBvcGVuLiBDYW4gYWRkIGEgbGlzdGVuZXIgZm9yIG91dHNpZGUgY2xpY2tzLCBwb3J0YWwgYW4gZWxlbWVudCxcbiAgICogYW5kIHByZXZlbnQgdGhlIGJvZHkgZnJvbSBzY3JvbGxpbmcgdXBvbiBvcGVuLlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgaGFuZGxlT3ZlcmxheU9wZW4ob3B0aW9ucz86IHtcbiAgICBjbGlja091dHNpZGVFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG4gICAgd2lsbE9wZW4/OiAoKSA9PiB2b2lkO1xuICB9KTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIGFmdGVyIHRoZSBvdmVybGF5IGhhcyBiZWVuIG9wdGlvbmFsbHkgcG9ydGFsZWQgYW5kL29yIGFsbCBhbmltYXRpb25zIGhhdmUgZmluaXNoZWQuXG4gICAqL1xuICBoYW5kbGVPdmVybGF5T3BlbkVuZCgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgb3ZlcmxheSBlbGVtZW50IHNob3VsZCBjbG9zZS4gQ2FuIHN0b3AgbGlzdGVuaW5nIGZvciBvdXRzaWRlIGNsaWNrcywgcmVsZWFzZSBhLFxuICAgKiBmb2N1cyB0cmFwLCBhbmQgYWxsb3cgdGhlIGJvZHkgZWxlbWVudCB0byBzY3JvbGwgYWdhaW4uXG4gICAqL1xuICBoYW5kbGVPdmVybGF5Q2xvc2UoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIG92ZXJsYXkgZWxlbWVudCBoYXMgZmluaXNoZWQgY2xvc2luZyBhbmQvb3IgYWxsIGFuaW1hdGlvbnMgaGF2ZSBjb21wbGV0ZWQuIENhblxuICAgKiByZW1vdmUgYW4gZWxlbWVudCBmcm9tIHRoZSBwb3J0YWwuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBoYW5kbGVPdmVybGF5Q2xvc2VFbmQob3B0aW9ucz86IHsgcmVtb3ZlRnJvbUVsZW1lbnQ/OiBIVE1MRWxlbWVudCB9KTogUHJvbWlzZTx2b2lkPjtcblxuICBvcGVuKCk6IFByb21pc2U8dm9pZD47XG5cbiAgY2xvc2UoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogVGhlIHRhYiBpbmRleCBmb3IgdGhpcyBlbGVtZW50XG4gICAqL1xuICB0YWJpbmRleDogbnVtYmVyO1xuXG4gIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBvcGVuZWQgKi9cbiAgX29uT3BlbjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBFbWl0dGVkIGFmdGVyIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgb3BlbmluZyAqL1xuICBfb25PcGVuRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaXMgaW5pdGlhbGx5IGNsb3NpbmcgKi9cbiAgX29uQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgY2xvc2luZyAqL1xuICBfb25DbG9zZUVuZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBAaWdub3JlICovXG4gIHBvcnRhbEFkYXB0ZXI6IFBvcnRhbEFkYXB0ZXI7XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogVGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgb3ZlcmxheSByZWdhcmRsZXNzIG9mIGFuaW1hdGlvbnNcbiAgICovXG4gIG9wZW5lZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBJbmRpY2F0ZXMgdGhlIG92ZXJsYXkgaGFzIGJlZW4gcG9ydGFsZWQgYW5kIHJlYWR5IHRvIGFuaW1hdGVcbiAgICovXG4gIHJlYWR5Rm9yQW5pbWF0aW9uOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEluZGljYXRlcyB0aGUgb3ZlcmxheSBoYXMgYmVlbiBmdWxseSBhbmltYXRlZCBvcGVuXG4gICAqL1xuICBvcGVuZWRGdWxsOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgT3ZlcmxheU1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBPdmVybGF5RWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKiBUaGUgdGFiIGluZGV4IG9mIHRoaXMgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ3RhYmluZGV4JywgdHlwZTogTnVtYmVyIH0pIHRhYmluZGV4ID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBBZGFwdGVyIGZvciBwb3J0YWwgRE9NIG9wZXJhdGlvbiB0aGF0IGNhbiBiZSBzdXBwbGVtZW50ZWQgZm9yIGV4dGVybmFsLWZyYW1ld29yayBpbnRlZ3JhdGlvbnMuXG4gICAgICogTm90YWJseS1sZXZlcmFnZWQgYnkgb3ZlcmxheXMgaW4gb3VyIGdlbmVyYXRlZCByZWFjdCB3cmFwcGVycy5cbiAgICAgKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoKSBwb3J0YWxBZGFwdGVyOiBQb3J0YWxBZGFwdGVyID0gZGVmYXVsdFBvcnRhbEFkYXB0ZXI7XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgb3BlbmVkICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbk9wZW46IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0dGVkIGFmdGVyIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgb3BlbmluZyAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25PcGVuRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgY2xvc2VkICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBoYXMgZmluaXNoZWQgY2xvc2luZyAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25DbG9zZUVuZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgZWxlbWVudCBzaG91bGQgdXNlIGEgZm9jdXMgdHJhcCBvciBub3QgKi9cbiAgICBwcml2YXRlIF93aXRoRm9jdXNUcmFwID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IGVsZW1lbnQgc2hvdWxkIGNsb3NlIHdoZW4gYSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBlbGVtZW50ICovXG4gICAgcHJpdmF0ZSBfY2xvc2VPbkNsaWNrT3V0c2lkZSA9IHRydWU7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgY2xvc2Ugd2hlbiB0aGUgZXNjYXBlIGJ1dHRvbiBpcyBwcmVzc2VkICovXG4gICAgcHJpdmF0ZSBfY2xvc2VPbkVzY2FwZSA9IHRydWU7XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBzaG91bGQgdXNlIGEgcG9ydGFsIG9yIG5vdCAqL1xuICAgIHByaXZhdGUgX3dpdGhQb3J0YWwgPSB0cnVlO1xuXG4gICAgLyoqIFdldGhlciB0aGUgdXNlciBzaG91bGQgYmUgYWJsZSB0byBjbGljayBiZWhpbmQgdGhlIGJhY2tkcm9wIG9yIG5vdCAqL1xuICAgIHByaXZhdGUgX3dpdGhJbmVydEJhY2tkcm9wID0gZmFsc2U7XG5cbiAgICAvKiogV2V0aGVyIHRoZSBvdmVybGF5J3MgYmFja2Ryb3Agc2hvdWxkIHJlbmRlciBkaW1tZWQgKi9cbiAgICBwcml2YXRlIF93aXRoRGltQmFja2Ryb3AgPSBmYWxzZTtcblxuICAgIC8qKiBXZXRoZXIgb3Igbm90IHRoZSBlbGVtZW50IHNob3VsZCBiZSByZS1hcHBlbmRlZCB0byBpdCdzIG9yaWdpbiBwYXJlbnQgZWxlbWVudCBvbiBjbG9zZSBfaWZfIHBvcnRhbGVkLiAqL1xuICAgIHByaXZhdGUgX3JldHVyblRvT3JpZ2luT25DbG9zZSA9IGZhbHNlO1xuXG4gICAgLyoqIE9wdGlvbmFsIGJhY2tkcm9wIHRpbWluZy4gSW1wb3J0YW50IHBhcnRpY3VsYXJseSBmb3Igc21vb3RoIGNsb3NlcyB3aXRoIGEgdmlzaWJsZSBiYWNrZHJvcCAqL1xuICAgIHByaXZhdGUgX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgc2hvdWxkIHByZXZlbnQgc2Nyb2xsaW5nIG9uIHRoZSBib2R5ICovXG4gICAgcHJpdmF0ZSBfd2l0aFNjcm9sbExvY2sgPSB0cnVlO1xuXG4gICAgcHJvdGVjdGVkIGZvY3VzVHJhcENvbnRyb2xsZXIgPSBuZXcgRm9jdXNUcmFwQ29udHJvbGxlcih0aGlzKTtcblxuICAgIHByb3RlY3RlZCBjbGlja091dHNpZGVDb250cm9sbGVyID0gbmV3IENsaWNrT3V0c2lkZUNvbnRyb2xsZXIodGhpcywgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl93aXRoUG9ydGFsKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2VPbkNsaWNrT3V0c2lkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcHJvdGVjdGVkIHBvcnRhbENvbnRyb2xsZXIgPSBuZXcgUG9ydGFsQ29udHJvbGxlcih0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHBhcmVudCBlbGVtZW50XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRpYWxQYXJlbnQ6IEVsZW1lbnQgfCBIVE1MRWxlbWVudCA9IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgdG8gZGV0ZWN0IGNsaWNrcyBvdXRzaWRlIG9mIHRvIGNsb3NlIHRoZSBvdmVybGF5IGVsZW1lbnQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjbGlja091dHNpZGVPdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xuXG4gICAgcHJpdmF0ZSBfb3JpZ2luUGFyZW50PzogRWxlbWVudCB8IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBfZm9jdXNUcmFwVGFyZ2V0PzogRWxlbWVudCB8IEhUTUxFbGVtZW50ID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBUaGUgb3BlbmVkIHN0YXRlIG9mIHRoZSBvdmVybGF5IHJlZ2FyZGxlc3Mgb2YgYW5pbWF0aW9uc1xuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgb3BlbmVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogSW5kaWNhdGVzIHRoZSBvdmVybGF5IGhhcyBiZWVuIHBvcnRhbGVkIGFuZCByZWFkeSB0byBhbmltYXRlXG4gICAgICovXG4gICAgQHN0YXRlKClcbiAgICBzZXQgcmVhZHlGb3JBbmltYXRpb24ocmVhZHlGb3JBbmltYXRpb246IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuX3JlYWR5Rm9yQW5pbWF0aW9uID0gcmVhZHlGb3JBbmltYXRpb247XG4gICAgfVxuICAgIGdldCByZWFkeUZvckFuaW1hdGlvbigpIHtcbiAgICAgIC8vIER1cmluZyBTU1IgcmV0dXJuIHRydWUgaW4gY2FzZSBzb21ldGhpbmcgbmVlZHMgdG8gYmUgb3BlbmVkIGluaXRpYWxseS5cbiAgICAgIHJldHVybiBpc1NzcigpID8gdHJ1ZSA6IHRoaXMuX3JlYWR5Rm9yQW5pbWF0aW9uO1xuICAgIH1cbiAgICBwcml2YXRlIF9yZWFkeUZvckFuaW1hdGlvbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqIFRoZSBvcGVuZWQgc3RhdGUgb2YgdGhlIG92ZXJsYXkgcmVnYXJkbGVzcyBvZiBhbmltYXRpb25zLiBUaGlzIGlzIHJlZmxlY3RlZCBhbmQgdXNlZCBieVxuICAgICAqIHNvbWUgb3ZlcmxheXMgdG8gcmVzdHJpY3QgdGhlaXIgc2l6ZSB3aGlsZSBoaWRkZW4uIChzaW5jZSBkaXNwbGF5OiBub25lIGJyZWFrcyBhbmltYXRpb25zKVxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgb3BlbmVkRnVsbCA9IGZhbHNlO1xuXG4gICAgc2V0T3ZlcmxheU9wdGlvbnMob3B0aW9uczoge1xuICAgICAgd2l0aENsb3NlT25DbGlja091dHNpZGU/OiBib29sZWFuO1xuICAgICAgd2l0aENsb3NlT25Fc2NhcGU/OiBib29sZWFuO1xuICAgICAgd2l0aEZvY3VzVHJhcD86IGJvb2xlYW47XG4gICAgICB3aXRoUG9ydGFsPzogYm9vbGVhbjtcbiAgICAgIHdpdGhJbmVydEJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICAgIHdpdGhEaW1CYWNrZHJvcD86IGJvb2xlYW47XG4gICAgICB3aXRoU2Nyb2xsTG9jaz86IGJvb2xlYW47XG4gICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbj86IHN0cmluZztcbiAgICAgIHJldHVyblRvT3JpZ2luT25DbG9zZT86IGJvb2xlYW47XG4gICAgICBmb2N1c1RyYXBUYXJnZXQ/OiBFbGVtZW50O1xuICAgIH0pIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgd2l0aEZvY3VzVHJhcCxcbiAgICAgICAgd2l0aENsb3NlT25DbGlja091dHNpZGUsXG4gICAgICAgIHdpdGhDbG9zZU9uRXNjYXBlLFxuICAgICAgICB3aXRoUG9ydGFsLFxuICAgICAgICB3aXRoU2Nyb2xsTG9jayxcbiAgICAgICAgd2l0aEluZXJ0QmFja2Ryb3AsXG4gICAgICAgIHdpdGhEaW1CYWNrZHJvcCxcbiAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgIHJldHVyblRvT3JpZ2luT25DbG9zZSxcbiAgICAgICAgZm9jdXNUcmFwVGFyZ2V0LFxuICAgICAgfSA9IG9wdGlvbnMgPz8ge307XG5cbiAgICAgIHRoaXMuX3dpdGhGb2N1c1RyYXAgPSB3aXRoRm9jdXNUcmFwID8/IHRoaXMuX3dpdGhGb2N1c1RyYXA7XG4gICAgICB0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlID0gd2l0aENsb3NlT25DbGlja091dHNpZGUgPz8gdGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZTtcbiAgICAgIHRoaXMuX3dpdGhTY3JvbGxMb2NrID0gd2l0aFNjcm9sbExvY2sgPz8gdGhpcy5fd2l0aFNjcm9sbExvY2s7XG4gICAgICB0aGlzLl93aXRoUG9ydGFsID0gd2l0aFBvcnRhbCA/PyB0aGlzLl93aXRoUG9ydGFsO1xuICAgICAgdGhpcy5fd2l0aEluZXJ0QmFja2Ryb3AgPVxuICAgICAgICB3aXRoSW5lcnRCYWNrZHJvcCA/PyAhdGhpcy5fd2l0aEZvY3VzVHJhcCA/PyB0aGlzLl93aXRoSW5lcnRCYWNrZHJvcDtcbiAgICAgIHRoaXMuX3dpdGhEaW1CYWNrZHJvcCA9IHdpdGhEaW1CYWNrZHJvcCA/PyB0aGlzLl93aXRoRGltQmFja2Ryb3A7XG4gICAgICB0aGlzLl9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9XG4gICAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID8/IHRoaXMuX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgdGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlID0gcmV0dXJuVG9PcmlnaW5PbkNsb3NlID8/IHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZTtcbiAgICAgIHRoaXMuX2ZvY3VzVHJhcFRhcmdldCA9IGZvY3VzVHJhcFRhcmdldCA/PyB0aGlzLl9mb2N1c1RyYXBUYXJnZXQ7XG5cbiAgICAgIGlmICh3aXRoQ2xvc2VPbkVzY2FwZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX2Nsb3NlT25Fc2NhcGUgIT09IHdpdGhDbG9zZU9uRXNjYXBlKSB7XG4gICAgICAgIGlmICh3aXRoQ2xvc2VPbkVzY2FwZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xvc2VPbkVzY2FwZSA9IHdpdGhDbG9zZU9uRXNjYXBlID8/IHRoaXMuX2Nsb3NlT25Fc2NhcGU7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aXRoRm9jdXNUcmFwID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpdGhGb2N1c1RyYXAgPT09IHRydWUgJiYgdGhpcy50YWJpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy50YWJpbmRleCA9IC0xO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZU92ZXJsYXkoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVPdmVybGF5T3BlbihvcHRpb25zPzoge1xuICAgICAgY2xpY2tPdXRzaWRlRWxlbWVudD86IEhUTUxFbGVtZW50O1xuICAgICAgd2lsbE9wZW4/OiAoKSA9PiB2b2lkO1xuICAgIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIElnbm9yZSBpZiBhbHJlYWR5IG9wZW5cbiAgICAgIGlmICh0aGlzLm9wZW5lZCB8fCB0aGlzLm9wZW5lZEZ1bGwpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgICAgY29uc3QgeyBjbGlja091dHNpZGVFbGVtZW50LCB3aWxsT3BlbiB9ID0gb3B0aW9ucyA/PyB7fTtcbiAgICAgIHdpbGxPcGVuPy4oKTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50ID0gY2xpY2tPdXRzaWRlRWxlbWVudCB8fCB0aGlzO1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIubGlzdGVuRm9yQ2xpY2tzT3V0c2lkZU9mKHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQpO1xuICAgICAgICBpZiAodGhpcy5fd2l0aFBvcnRhbCkge1xuICAgICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlclxuICAgICAgICAgICAgLmFwcGVuZFRvU3RhY2sodGhpcywge1xuICAgICAgICAgICAgICB3aXRoRGltQmFja2Ryb3A6IHRoaXMuX3dpdGhEaW1CYWNrZHJvcCxcbiAgICAgICAgICAgICAgd2l0aEluZXJ0QmFja2Ryb3A6IHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wLFxuICAgICAgICAgICAgICB3aXRoU2Nyb2xsTG9jazogdGhpcy5fd2l0aFNjcm9sbExvY2ssXG4gICAgICAgICAgICAgIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyOiB0aGlzLmhhbmRsZUNsb3NlT25DbGlja091dHNpZGUsXG4gICAgICAgICAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLl9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgICAgcG9ydGFsQWRhcHRlcjogdGhpcy5wb3J0YWxBZGFwdGVyLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgLy8gV2FpdCBmb3IgYXBwZW5kIHRvIGNvbXBsZXRlIGJlZm9yZSBhbmltYXRpbmdcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkeUZvckFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gQWZ0ZXIgYW5pbWF0aW9uIGJlZ2lucyByZXNvbHZlXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX29uT3Blbi5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuX29yaWdpblBhcmVudCAmJlxuICAgICAgICAgICAgdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkgJiZcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpICE9PSB0aGlzLl9vcmlnaW5QYXJlbnRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMucG9ydGFsQWRhcHRlcih0aGlzLCB0aGlzLl9vcmlnaW5QYXJlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBXYWl0IGZvciBhcHBlbmQgdG8gY29tcGxldGUgYmVmb3JlIGFuaW1hdGluZ1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUZvckFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAvLyBBZnRlciBhbmltYXRpb24gYmVnaW5zIHJlc29sdmVcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX29uT3Blbi5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlT3ZlcmxheU9wZW5FbmQoKSB7XG4gICAgICAvLyBDYW5jZWwgaWYgY2xvc2VkIGJlZm9yZSBvcGVuIGVuZGVkXG4gICAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbmVkRnVsbCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5fd2l0aEZvY3VzVHJhcCkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIudHJhcEZvY3VzKHRoaXMuX2ZvY3VzVHJhcFRhcmdldCwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vbk9wZW5FbmQuZW1pdChudWxsLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZU92ZXJsYXlDbG9zZSgpIHtcbiAgICAgIC8vIElnbm9yZSBpZiBhbHJlYWR5IGNsb3NlZFxuICAgICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fb25DbG9zZS5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5zdG9wTGlzdGVuaW5nKCk7XG4gICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIucmVsZWFzZUZvY3VzKHRydWUpO1xuICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLmhpZGVCYWNrZHJvcCgpO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZU92ZXJsYXlDbG9zZUVuZChvcHRpb25zPzogeyByZW1vdmVGcm9tRWxlbWVudD86IEhUTUxFbGVtZW50IH0pIHtcbiAgICAgIC8vIENhbmNlbCBpZiBvcGVuZWQgYmVmb3JlIGNsb3NlIGVuZGVkXG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWRGdWxsID0gZmFsc2U7XG4gICAgICB0aGlzLnJlYWR5Rm9yQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIucmVtb3ZlRnJvbVN0YWNrKG9wdGlvbnM/LnJlbW92ZUZyb21FbGVtZW50IHx8IHRoaXMpO1xuICAgICAgaWYgKHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZSkge1xuICAgICAgICBpZiAodGhpcy5fb3JpZ2luUGFyZW50ICYmIHRoaXMuX29yaWdpblBhcmVudCAhPT0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgdGhpcy5fb3JpZ2luUGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fb25DbG9zZUVuZC5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVPdmVybGF5S2V5RG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudD8uaGFzQXR0cmlidXRlKCdkYXRhLW92ZXJsYXktd3JhcHBlcicpXG4gICAgICAgID8gdGhpcy5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50XG4gICAgICAgIDogdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHBhcmVudCBlbGVtZW50IHRoaXMgb3ZlcmxheSB3aWxsIGJlIHJlYXR0YWNoZWQgdG8gZWl0aGVyOlxuICAgICAqIC0gV2hlbiBjb25maWd1cmVkIHRvIGRvIHNvIG9uIGNsb3NlXG4gICAgICogLSBXaGVuIFwicG9ydGFsaW5nXCIgaXMgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBzZXRPcmlnaW5QYXJlbnQobmV3T3JpZ2luOiBFbGVtZW50KSB7XG4gICAgICBjb25zdCBjdXJyZW50UGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpO1xuICAgICAgaWYgKGN1cnJlbnRQYXJlbnRFbGVtZW50ID09PSB0aGlzLl9vcmlnaW5QYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIG5ld09yaWdpbik7XG4gICAgICB9XG4gICAgICB0aGlzLl9vcmlnaW5QYXJlbnQgPSBuZXdPcmlnaW47XG4gICAgfVxuXG4gICAgLyoqIFVwZGF0ZXMgdmFyaW91cyBiZWhhdmlvcnMgdG8gYXBwbHkgdGhlIGxhdGVzdCBvdmVybGF5IG9wdGlvbnMgKi9cbiAgICB1cGRhdGVPdmVybGF5KCkge1xuICAgICAgLy8gVXBkYXRlIGJhY2tkcm9wIGluZXJ0bmVzc1xuICAgICAgaWYgKHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5zZXRCYWNrZHJvcEluZXJ0bmVzcyh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5zZXRCYWNrZHJvcEluZXJ0bmVzcyhmYWxzZSk7XG4gICAgICB9XG4gICAgICAvLyBVcGRhdGUgY2xpY2sgb3V0c2lkZSBjb250cm9sbGVyXG4gICAgICBpZiAodGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZSAmJiAhdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmlzTGlzdGVuaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmxpc3RlbkZvckNsaWNrc091dHNpZGVPZih0aGlzKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUgJiYgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmlzTGlzdGVuaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSBmb2N1cyB0cmFwIGNvbnRyb2xsZXJcbiAgICAgIGlmICh0aGlzLl93aXRoRm9jdXNUcmFwICYmIHRoaXMub3BlbmVkICYmICF0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIuaXNUcmFwcGluZ0ZvY3VzKCkpIHtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLnRyYXBGb2N1cyh0aGlzLl9mb2N1c1RyYXBUYXJnZXQsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5fd2l0aEZvY3VzVHJhcCAmJiB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIuaXNUcmFwcGluZ0ZvY3VzKCkpIHtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXBDb250cm9sbGVyLnJlbGVhc2VGb2N1cyh0cnVlKTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSBiYWNrZHJvcCBjb250cm9sbGVyXG4gICAgICBpZiAodGhpcy5fd2l0aERpbUJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5zaG93QmFja2Ryb3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5oaWRlQmFja2Ryb3AoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9yZXR1cm5Ub09yaWdpbk9uQ2xvc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuX29yaWdpblBhcmVudCAmJiB0aGlzLl9vcmlnaW5QYXJlbnQgIT09IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpKSB7XG4gICAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIHRoaXMuX29yaWdpblBhcmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBvcGVuKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPcGVuIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2xvc2UgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueSkge1xuICAgICAgc3VwZXIoYXJncyk7XG4gICAgICB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duID0gdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoXG4gICAgICBjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZU1hcDxhbnk+IHwgTWFwPFByb3BlcnR5S2V5LCB1bmtub3duPlxuICAgICk6IHZvaWQge1xuICAgICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgIHRoaXMuX29yaWdpblBhcmVudCA9IHRoaXMuZ2V0QWN0dWFsUGFyZW50RWxlbWVudCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlQ2xvc2VPbkNsaWNrT3V0c2lkZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgICBpZiAodGhpcy5fY2xvc2VPbkVzY2FwZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgaW4gdGhlIGV2ZW50IHRoZSBvdmVybGF5IGVsZW1lbnQgd2FzIHBvcnRhbGVkLlxuICAgICAgaWYgKHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLmxpc3RlbkZvckNsaWNrc091dHNpZGVPZih0aGlzLmNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIucmVsZWFzZUZvY3VzKHRydWUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPdmVybGF5RWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxPdmVybGF5SW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtkaXNwbGF5OmJsb2NrO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWZ1bGwtd2lkdGg6bWF4LWNvbnRlbnQ7LS1jb250cm9sLXdpZHRoOnVuc2V0Oy0tY29udHJvbC1taW4td2lkdGg6MjQwcHg7LS1jb250cm9sLW1heC13aWR0aDp2YXIoLS1jb250cm9sLXdpZHRoKTstLWNvbnRyb2wtbWFyZ2luLXk6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWNvbnRyb2wtbWFyZ2luLXg6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWNvbnRyb2wtZGVzY3JpcHRvci1tYXJnaW46dmFyKC0tbXRlLXNwYWNlLXNtKTstLWxhYmVsLXdpZHRoOnZhcigtLWNvbnRyb2wtd2lkdGgpOy0tbGFiZWwtbWluLXdpZHRoOnZhcigtLWNvbnRyb2wtbWluLXdpZHRoKTstLWxhYmVsLW1heC13aWR0aDp2YXIoLS1jb250cm9sLW1heC13aWR0aCk7LS1sYWJlbC1tYXJnaW4teTp2YXIoLS1tdGUtc3BhY2UteHMpO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOnZhcigtLWZ1bGwtd2lkdGgpfS5ncmlkLWNvbnRhaW5lcntkaXNwbGF5OmlubGluZS1ncmlkO2dyaWQtdGVtcGxhdGUtYXJlYXM6XCJsYWJlbFwiIFwiY29udHJvbFwiO2dyaWQtdGVtcGxhdGUtcm93czoxZnIgbWlubWF4KDAsMTAwJSk7d2lkdGg6aW5oZXJpdH06aG9zdChbd2l0aEZ1bGxXaWR0aF0pey0tZnVsbC13aWR0aDoxMDAlOy0tY29udHJvbC13aWR0aDoxMDAlfTpob3N0KFt3aXRob3V0TWFyZ2luXSl7LS1jb250cm9sLW1hcmdpbi15OjBweH06aG9zdChbd2l0aG91dE1hcmdpbl0pIC5sYWJlbC1jb250YWluZXIuaGFzLWNvbnRlbnR7bWFyZ2luLWJvdHRvbTp2YXIoLS1jb250cm9sLWRlc2NyaXB0b3ItbWFyZ2luKX0ubGFiZWwtY29udGFpbmVye2Rpc3BsYXk6bm9uZTtncmlkLWFyZWE6bGFiZWw7bWF4LXdpZHRoOnZhcigtLWxhYmVsLW1heC13aWR0aCk7bWluLXdpZHRoOnZhcigtLWxhYmVsLW1pbi13aWR0aCk7d2lkdGg6dmFyKC0tbGFiZWwtd2lkdGgpfS5sYWJlbC1jb250YWluZXIuaGFzLWNvbnRlbnR7ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOnZhcigtLWxhYmVsLW1hcmdpbi15KX0ubGFiZWwtY29udGFpbmVyOm5vdCguaGFzLWNvbnRlbnQpe21hcmdpbjowIWltcG9ydGFudH0uY29udGV4dHtncmlkLWFyZWE6Y29udGV4dH0uZGVzY3JpcHRpb24sLmVycm9yLC5oaW50LC5sYWJlbHtkaXNwbGF5OmJsb2NrfS5kZXNjcmlwdGlvbiBtdGUtZGVzY3JpcHRpb24sLmRlc2NyaXB0aW9uIG10ZS1kZXNjcmlwdGlvbi10ZXh0LC5sYWJlbCBtdGUtbGFiZWwsLmxhYmVsIG10ZS1sYWJlbC10ZXh0LDpob3N0IDo6c2xvdHRlZChtdGUtZGVzY3JpcHRpb24tdGV4dFtzbG90PWRlc2NyaXB0aW9uXSksOmhvc3QgOjpzbG90dGVkKG10ZS1kZXNjcmlwdGlvbltzbG90PWRlc2NyaXB0aW9uXSksOmhvc3QgOjpzbG90dGVkKG10ZS1sYWJlbC10ZXh0W3Nsb3Q9bGFiZWxdKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWxhYmVsW3Nsb3Q9bGFiZWxdKXttYXJnaW46MH06aG9zdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKXstLWxhYmVsLXdpZHRoOm1heC1jb250ZW50Oy0tbGFiZWwtbWluLXdpZHRoOm1heC1jb250ZW50fTpob3N0KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pIC5ncmlkLWNvbnRhaW5lcntncmlkLXRlbXBsYXRlLWFyZWFzOlwibGFiZWwgY29udHJvbFwiO2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoYXV0byx2YXIoLS1sYWJlbC13aWR0aCkpIG1pbm1heChhdXRvLHZhcigtLWNvbnRyb2wtd2lkdGgpKX06aG9zdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKSAubGFiZWwtY29udGFpbmVye21hcmdpbi1ib3R0b206dmFyKC0tY29udHJvbC1tYXJnaW4teSk7bWFyZ2luLXJpZ2h0OnZhcigtLWNvbnRyb2wtbWFyZ2luLXgpO21hcmdpbi10b3A6Y2FsYyh2YXIoLS1jb250cm9sLW1hcmdpbi15KSArIHZhcigtLWxhYmVsLWJlZm9yZS1vZmZzZXQpKX0uZGVzY3JpcHRpb24sLmVycm9yLC5oaW50e21pbi13aWR0aDoxMDAlO3dpZHRoOi1tb3otbWluLWNvbnRlbnQ7d2lkdGg6bWluLWNvbnRlbnR9LmNvbnRyb2wtb3V0ZXItY29udGFpbmVye2dyaWQtYXJlYTpjb250cm9sO21hcmdpbi10b3A6dmFyKC0tY29udHJvbC1tYXJnaW4teSk7bWF4LXdpZHRoOnZhcigtLWNvbnRyb2wtbWF4LXdpZHRoKTttaW4td2lkdGg6dmFyKC0tY29udHJvbC1taW4td2lkdGgpO3dpZHRoOnZhcigtLWNvbnRyb2wtd2lkdGgpfTpob3N0KDpub3QoW2xhYmVsUG9zaXRpb249YmVmb3JlXSkpIC5jb250cm9sLW91dGVyLWNvbnRhaW5lci5oYXMtbGFiZWwtY29udGVudHttYXJnaW4tdG9wOmNhbGModmFyKC0tY29udHJvbC1tYXJnaW4teSkvMil9LmNvbnRyb2wtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWFyZ2luLWJvdHRvbTp2YXIoLS1jb250cm9sLW1hcmdpbi15KX0uZXJyb3IsLmhpbnR7ZGlzcGxheTpub25lfS5lcnJvci5oYXMtY29udGVudCwuaGludC5oYXMtY29udGVudHtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6dmFyKC0tY29udHJvbC1kZXNjcmlwdG9yLW1hcmdpbil9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tZm9ybS1maWVsZC1pbnRlcm5hbC1wYWRkaW5nOnZhcigtLW10ZS1zcGFjZS1zbSk7LS1mb3JtLWZpZWxkLWludGVybmFsLWdhcDp2YXIoLS1tdGUtc3BhY2Utc20pOy0tZm9ybS1maWVsZC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpOy0tZm9ybS1maWVsZC1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWZvcm0tZmllbGQtYmFja2dyb3VuZDp2YXIoLS1tdGUtc3VyZmFjZS0yKTstLXByZXBlbmQtYmFja2dyb3VuZDp2YXIoLS1tdGUtZ3JleS0xKTstLXByZXBlbmQtcGFkZGluZy14OnZhcigtLW10ZS1zcGFjZS1zbSk7LS1wcmVwZW5kLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpfTpob3N0KFtyYWRpdXM9c21dKXstLWZvcm0tZmllbGQtcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXhzKX06aG9zdChbcmFkaXVzPWxnXSl7LS1mb3JtLWZpZWxkLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14eGwpfTpob3N0KFtzaXplPXNtXSl7LS1wcmVwZW5kLXBhZGRpbmcteDpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1mb3JtLWZpZWxkLWludGVybmFsLXBhZGRpbmc6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXA6Y2FsYyh2YXIoLS1tdGUtc3BhY2UteHMpICsgdmFyKC0tbXRlLXNwYWNlLXh4cykpfTpob3N0KFtzaXplPWxnXSl7LS1wcmVwZW5kLXBhZGRpbmcteDpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtcGFkZGluZzpjYWxjKHZhcigtLW10ZS1zcGFjZS1zbSkgKyB2YXIoLS1tdGUtc3BhY2UteHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwOmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpfS5mb3JtLWZpZWxke2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnZhcigtLWZvcm0tZmllbGQtYmFja2dyb3VuZCk7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztnYXA6dmFyKC0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXApO3Bvc2l0aW9uOnJlbGF0aXZlfTpob3N0KFtkaXNhYmxlZF0pIC5mb3JtLWZpZWxke2JhY2tncm91bmQ6dmFyKC0tbXRlLWRpc2FibGVkLTEpO2JvcmRlcjoxcHggc29saWQgdmFyKC0tbXRlLWRpc2FibGVkLTEpfS5hcHBlbmQsLnByZXBlbmR7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLXNlbGY6c3RyZXRjaDtiYWNrZ3JvdW5kOnZhcigtLXByZXBlbmQtYmFja2dyb3VuZCk7ZGlzcGxheTpub25lO2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUpO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzowIHZhcigtLXByZXBlbmQtcGFkZGluZy14KX0ucHJlcGVuZHtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItcmlnaHQ6MXB4IHNvbGlkIHZhcigtLXByZXBlbmQtYm9yZGVyLWNvbG9yKTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKX0uYXBwZW5ke2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItbGVmdDoxcHggc29saWQgdmFyKC0tcHJlcGVuZC1ib3JkZXItY29sb3IpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKX0uYXBwZW5kLmhhcy1jb250ZW50LC5wcmVwZW5kLmhhcy1jb250ZW50e2Rpc3BsYXk6ZmxleH0ucHJlZml4LC5zdWZmaXh7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLXNlbGY6c3RyZXRjaDtkaXNwbGF5OmZsZXg7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ucHJlZml4Om5vdCguaGFzLXByZXBlbmQpe3BhZGRpbmctbGVmdDp2YXIoLS1wcmVwZW5kLXBhZGRpbmcteCl9LnN1ZmZpeDpub3QoLmhhcy1hcHBlbmQpe3BhZGRpbmctcmlnaHQ6dmFyKC0tcHJlcGVuZC1wYWRkaW5nLXgpfS5mb3JtLWZpZWxkLmZvY3VzZWQ6bm90KC5kaXNhYmxlZCk6bm90KFtkaXNhYmxlZF0pOm5vdCg6ZGlzYWJsZWQpOmJlZm9yZXtib3JkZXI6MnB4IHNvbGlkIHJnYih2YXIoLS1tdGUtZm9jdXMtcmdiKSk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3R0b206LTFweDtib3gtc2hhZG93OjAgMCAwIDFweCB2YXIoLS1tdGUtbGlnaHQpO2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO2xlZnQ6LTFweDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0Oi0xcHg7dG9wOi0xcHg7ei1pbmRleDo5fS5mb3JtLWZpZWxkLmludmFsaWR7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjpyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtcmdiKSl9Omhvc3QoW3dpdGhvdXRCb3JkZXJdKSA6aXMoLmZvcm0tZmllbGQsLnByZXBlbmQsLmFwcGVuZCl7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudH1gOyIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIEFjdGl2ZUxpbmtPcHRpb25zLFxuICBDb25zdHJ1Y3RvcixcbiAgTXRlRWxlbWVudCxcbiAgTXRlSGlzdG9yeUFwaVNlcnZpY2UsXG4gIFVuc3Vic2NyaWJlcixcbiAgaXNMaW5rQWN0aXZlLFxuICBvblVwZGF0ZSxcbn0gZnJvbSAnLi4vJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTGlua0ludGVyZmFjZSB7XG4gIGhyZWY/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEF1dG9BY3RpdmVMaW5rSW50ZXJmYWNlIHtcbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgbGluayBpcyB0aGUgYWN0aXZlIHBhZ2UgKi9cbiAgYWN0aXZlOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGxpbmsgc2hvdWxkIGF1dG9tYXRpY2FsbHkgdHJ5IHRvIGRldGVybWluZSBpZiBpdCBpcyB0aGUgYWN0aXZlIHBhZ2UgKi9cbiAgd2l0aG91dEF1dG9BY3RpdmU6IGJvb2xlYW47XG5cbiAgLyoqIE9wdGlvbnMgdG8gcmVmaW5lIGhvdyB0aGlzIGxpbmsgd2lsbCBkZXRlcm1pbmUgaWYgaXQgaXMgdGhlIGFjdGl2ZSBwYWdlICovXG4gIGFjdGl2ZUxpbmtPcHRpb25zPzogUGFydGlhbDxBY3RpdmVMaW5rT3B0aW9ucz47XG5cbiAgLyoqIFRoZSBpbnRlcm5hbCBhbmNob3IgZWxlbWVudCBmcm9tIHdoaWNoIHRvIHB1bGwgdGhlIGxvY2F0aW9uIGZvciBjb21wYXJpc29uICovXG4gIGFuY2hvckVsZW1lbnQ/OiBIVE1MQW5jaG9yRWxlbWVudDtcbn1cblxuZXhwb3J0IGNvbnN0IEF1dG9BY3RpdmVMaW5rTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQgJiBMaW5rSW50ZXJmYWNlPj4oXG4gIHN1cGVyQ2xhc3M6IFRcbikgPT4ge1xuICBjbGFzcyBBdXRvQWN0aXZlTGlua0VsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRob3V0QXV0b0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCByZWZsZWN0OiB0cnVlIH0pIGFjdGl2ZUxpbmtPcHRpb25zPzogUGFydGlhbDxBY3RpdmVMaW5rT3B0aW9ucz47XG5cbiAgICBhbmNob3JFbGVtZW50PzogSFRNTEFuY2hvckVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHVuc3ViOiBVbnN1YnNjcmliZXI7XG5cbiAgICBAb25VcGRhdGUoJ2FjdGl2ZScsIHsgd2FpdFVudGlsRmlyc3RVcGRhdGU6IHRydWUgfSlcbiAgICBwcml2YXRlIGhhbmRsZUFjdGl2ZUxpbmtDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5hbmNob3JFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICdwYWdlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG9uVXBkYXRlKFsnaHJlZicsICdpcmVmJywgJ3dpdGhBdXRvQWN0aXZlJ10sIHsgd2FpdFVudGlsRmlyc3RVcGRhdGU6IHRydWUgfSlcbiAgICBwcml2YXRlIGhhbmRsZUF1dG9BY3RpdmVDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5ocmVmIHx8IHRoaXNbJ2lyZWYnXSkge1xuICAgICAgICBpZiAodGhpcy53aXRob3V0QXV0b0FjdGl2ZSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgICB0aGlzLmhhbmRsZVVybENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVBdXRvQWN0aXZlQ2hhbmdlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRMaXN0ZW5lcigpIHtcbiAgICAgIGlmICghdGhpcy51bnN1Yikge1xuICAgICAgICB0aGlzLnVuc3ViID0gTXRlSGlzdG9yeUFwaVNlcnZpY2Uuc3RhdGVDaGFuZ2VzKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVVybENoYW5nZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgdGhpcy51bnN1Yj8uKCk7XG4gICAgICB0aGlzLnVuc3ViID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVVybENoYW5nZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlID0gaXNMaW5rQWN0aXZlKFxuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQ/LmhyZWYsXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICB0aGlzLmFjdGl2ZUxpbmtPcHRpb25zXG4gICAgICApO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIEF1dG9BY3RpdmVMaW5rRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxBdXRvQWN0aXZlTGlua0ludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50LCBTbG90Q29udHJvbGxlciB9IGZyb20gJy4uJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2xvdE9ic2VydmVySW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIFByb3AgdXNlZCB0byBkZWNsYXJlIHdoaWNoIHNsb3RzIGFyZSBiZWluZyB1c2VkIGR1cmluZyBTU1IgdG8gbWFrZSB0aGVtIHZpc2libGUgaW4gY2VydGFpbiBlZGdlLWNhc2VzLlxuICAgKi9cbiAgc3NyU2xvdHM6IHN0cmluZztcblxuICBzbG90Q29udHJvbGxlcjogU2xvdENvbnRyb2xsZXI7XG5cbiAgaGFzU2xvdDogKHNsb3Q6IHN0cmluZywgb3JWYWx1ZT86IGFueSkgPT4gYm9vbGVhbjtcblxuICBzc3JTbG90Q2hlY2s6IChzbG90czogc3RyaW5nKSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgU2xvdE9ic2VydmVyTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIFNsb3RPYnNlcnZlckVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBQcm9wIHVzZWQgdG8gZGVjbGFyZSB3aGljaCBzbG90cyBhcmUgYmVpbmcgdXNlZCBkdXJpbmcgU1NSIHRvIG1ha2UgdGhlbSB2aXNpYmxlIGluIGNlcnRhaW4gZWRnZS1jYXNlcy5cbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pXG4gICAgc2V0IHNzclNsb3RzKHZhbDogc3RyaW5nKSB7XG4gICAgICBsZXQgb2xkVmFsID0gdGhpcy5fc3NyU2xvdHM7XG4gICAgICB0aGlzLl9zc3JTbG90cyA9IHZhbDtcbiAgICAgIC8vIFBhcnNlIGFuZCBjYWNoZSBzc3Igc2xvdCBzZXRcbiAgICAgIGNvbnN0IHNsb3RzID0gKHRoaXMuX3NzclNsb3RzID8/ICcnKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5tYXAoKHNsb3QpID0+IHNsb3QudHJpbSgpKTtcbiAgICAgIHRoaXMuX3NzclNsb3RTZXQgPSBuZXcgU2V0PHN0cmluZz4oc2xvdHMpO1xuICAgICAgLy8gTm9ybWFsIHVwZGF0ZVxuICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCdzc3JTbG90cycsIG9sZFZhbCk7XG4gICAgfVxuICAgIGdldCBzc3JTbG90cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zc3JTbG90cztcbiAgICB9XG4gICAgcHJpdmF0ZSBfc3NyU2xvdHM/OiBzdHJpbmc7XG5cbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIF9zc3JTbG90U2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICBzbG90Q29udHJvbGxlciA9IG5ldyBTbG90Q29udHJvbGxlcih0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gc2xvdCBoYXMgY29udGVudCwgb3IgaWYgaXQgd2FzIHNwZWNpZmllZCBhcyBleGlzdGluZyBkdXJpbmcgU1NSLlxuICAgICAqIE9uY2UgY2FsbGVkLCB0aGUgY29tcG9uZW50IHdpbGwgbm93IGF1dG9tYXRpY2FsbHkgdXBkYXRlIGlmIHRoZSBjb250ZW50cyBvZiB0aGlzIHNsb3QgY2hhbmdlLlxuICAgICAqL1xuICAgIGhhc1Nsb3Qoc2xvdDogc3RyaW5nLCBvclZhbHVlPzogYW55KTogYm9vbGVhbiB7XG4gICAgICB0aGlzLnNsb3RDb250cm9sbGVyLnVwZGF0ZU9uQ2hhbmdlKHNsb3QpO1xuICAgICAgLy8gVE9ETyhyZWVjZSk6IHJlY29uc2lkZXIgd2hlbiBhIHNvbHV0aW9uIGV4aXN0cyBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzE0MzRcbiAgICAgIC8vIFdlIGhhdmUgdG8gYXNzdW1lIGFsaWdubWVudCB3aXRoIHNzclNsb3RDaGVjayB1bnRpbCB0aGUgZmlyc3QgdXBkYXRlIGhlcmUgb3RoZXJ3aXNlIHBhcnQgbWlzbWF0Y2hlcyBjYW4gb2NjdXJcbiAgICAgIGlmICghdGhpcy5fX2ZpcnN0VXBkYXRlZCkge1xuICAgICAgICByZXR1cm4gb3JWYWx1ZSB8fCB0aGlzLnNzclNsb3RDaGVjayhzbG90KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvclZhbHVlIHx8IHRoaXMuc2xvdENvbnRyb2xsZXIuY2hlY2soc2xvdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIHJlcXVlc3RlZCBzbG90IHdhcyBzcGVjaWZpZWQgaW4gdGhlIGxpc3Qgb2YgYHNzci1zbG90c2AuICovXG4gICAgc3NyU2xvdENoZWNrKHNsb3Q6IHN0cmluZykge1xuICAgICAgaWYgKHRoaXMuX19maXJzdFVwZGF0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NzclNsb3RTZXQuaGFzKHNsb3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gU2xvdE9ic2VydmVyRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxTbG90T2JzZXJ2ZXJJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgRm9ybUNvbnRyb2xNaXhpbiwgRm9ybUNvbnRyb2xJbnRlcmZhY2UgfSBmcm9tICdAb3Blbi13Yy9mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHsgcHJvcGVydHksIHF1ZXJ5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtcbiAgQ29uc3RydWN0b3IsXG4gIERpc2FibGVkTWl4aW4sXG4gIFRhYkluZGV4TWl4aW4sXG4gIE10ZUVsZW1lbnQsXG4gIGlubmVySW5wdXRWYWxpZGF0b3JzLFxuICBUYWJJbmRleEludGVyZmFjZSxcbiAgRGlzYWJsZWRJbnRlcmZhY2UsXG4gIG9uVXBkYXRlLFxuICBldmVudEVtaXR0ZXIsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnLi4nO1xuXG4vLyBSZXF1aXJlZCBwb2x5ZmlsbCBmb3Igbm93XG5pbXBvcnQgJy4uLy4uL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL2luZGV4JztcblxuZXhwb3J0IGludGVyZmFjZSBNdGVDaGVja2JveENoYW5nZURldGFpbCB7XG4gIC8qKiBUaGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wgY2hhbmdlZCAqL1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCBjaGFuZ2VkICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKiogV2hldGhlciBvciBub3QgdGhlIGVsZW1lbnQgaXMgY2hlY2tlZCAqL1xuICBjaGVja2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94SW50ZXJmYWNlIHtcbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgbGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBlcnJvciB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICBlcnJvcj86IHN0cmluZztcblxuICAvKiogVGhlIGhpbnQgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgaGludD86IHN0cmluZztcblxuICAvKiogQW4gYXJpYSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgdG8gdGhlIGlucHV0IGVsZW1lbnQgKi9cbiAgYXJpYUxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKiBUaGUgbmFtZSBmb3IgdGhlIGVsZW1lbnQuIFVzZWQgd2hlbiBzdWJtaXR0aW5nIGEgZm9ybSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50ICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKiogVGhlIHZhbHVlIGZvciB0aGUgZWxlbWVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgZWxlbWVudCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgICovXG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFsdGVycyB0aGUgYmVoYXZpb3Igb2YgdGhpcyBjb250cm9sLiBXaGVuIFwiY29udHJvbGxlZFwiLCBhIGNvbnRyb2xzIHZhbHVlIGlzIGRyaXZlbiBleHBsaWNpdGx5IGJ5IGV4dGVybmFsIHN0YXRlXG4gICAqIHZpYSB0aGUgYHZhbHVlYCBwcm9wLiBDaGFuZ2UgZXZlbnRzIHdpbGwgZmlyZSBidXQgdGhlIGNvbnRyb2wgdmFsdWUgd2lsbCBub3QgY2hhbmdlIHVudGlsIGl0IGlzIGFsdGVyZWQgZGlyZWN0bHkuXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIGNvbnRyb2xsZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGNoZWNrZWQgYnkgZGVmYXVsdC4gVXNlZnVsIGZvciB3aGVuIHJlc2V0dGluZyBmb3JtIGNvbnRyb2xzIG9yIHVzaW5nIGEgc3RhdGVsZXNzIGNvbXBvbmVudCAqL1xuICBkZWZhdWx0Q2hlY2tlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBpcyBjaGVja2VkIG9yIG5vdCAqL1xuICBjaGVja2VkOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBiZSByZWFkb25seSAqL1xuICByZWFkb25seTogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgc2VsZWN0aW5nIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIG9yIG5vdCAqL1xuICByZXF1aXJlZDogYm9vbGVhbjtcblxuICAvKiogUmVuZGVycyB0aGUgcmVxdWlyZWQgaW5kaWNhdG9yIGZvciB0aGlzIGlucHV0cyBsYWJlbCB3aXRob3V0IGVuYWJsaW5nIG5hdGl2ZSBgcmVxdWlyZWRgIHZhbGlkYXRpb24gKi9cbiAgc2hvd1JlcXVpcmVkOiBib29sZWFuO1xuXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGlucHV0IGJsdXJzICAqL1xuICBoYW5kbGVCbHVyKCk6IHZvaWQ7XG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZCBvbiAgKi9cbiAgaGFuZGxlRm9jdXMoKTogdm9pZDtcblxuICAvKiogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgY2hhbmdlcyAgKi9cbiAgaGFuZGxlQ2hhbmdlKCk6IHZvaWQ7XG5cbiAgLyoqIEEgc2V0IG9mIGF0dHJpYnV0ZXMgdG8gYmUgZm9yd2FyZGVkIHRvIGFuIGVsZW1lbnQgd2l0aGluIHJlbmRlciBhbmQgcmVtb3ZlZCBmcm9tIHRoZSBlbGVtZW50ICovXG4gIGluaGVyaXRlZEF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBjb25zdCBDaGVja2JveE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBDaGVja2JveEVsZW1lbnQgZXh0ZW5kcyBUYWJJbmRleE1peGluKEZvcm1Db250cm9sTWl4aW4oRGlzYWJsZWRNaXhpbihzdXBlckNsYXNzKSksIHtcbiAgICBpbml0aWFsVGFiSW5kZXg6IDAsXG4gIH0pIHtcbiAgICBpbmhlcml0ZWRBdHRyaWJ1dGVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIHN0YXRpYyBmb3JtQ29udHJvbFZhbGlkYXRvcnMgPSBpbm5lcklucHV0VmFsaWRhdG9ycztcblxuICAgIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KCkgbGFiZWw/OiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIGVycm9yIHRleHQgZm9yIHRoZSBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KCkgZXJyb3I/OiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIGhpbnQgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoKSBoaW50Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQWx0ZXJzIHRoZSBiZWhhdmlvciBvZiB0aGlzIGNvbnRyb2wuIFdoZW4gXCJjb250cm9sbGVkXCIsIGEgY29udHJvbHMgdmFsdWUgaXMgZHJpdmVuIGV4cGxpY2l0bHkgYnkgZXh0ZXJuYWwgc3RhdGVcbiAgICAgKiB2aWEgdGhlIGB2YWx1ZWAgcHJvcC4gQ2hhbmdlIGV2ZW50cyB3aWxsIGZpcmUgYnV0IHRoZSBjb250cm9sIHZhbHVlIHdpbGwgbm90IGNoYW5nZSB1bnRpbCBpdCBpcyBhbHRlcmVkIGRpcmVjdGx5LlxuICAgICAqIEBleHBlcmltZW50YWxcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIGNvbnRyb2xsZWQ6IGJvb2xlYW47XG5cbiAgICAvKiogQW4gYXJpYSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgdG8gdGhlIGlucHV0IGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6ICdhcmlhLWxhYmVsJywgcmVmbGVjdDogdHJ1ZSB9KSBhcmlhTGFiZWw6IHN0cmluZztcblxuICAgIC8qKiBUaGUgbmFtZSBmb3IgdGhlIGVsZW1lbnQuIFVzZWQgd2hlbiBzdWJtaXR0aW5nIGEgZm9ybSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBuYW1lOiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIHZhbHVlIGZvciB0aGUgZWxlbWVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgZWxlbWVudCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgICovXG4gICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSB2YWx1ZT8gPSAnb24nO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGNoZWNrZWQgYnkgZGVmYXVsdC4gVXNlZnVsIGZvciB3aGVuIHJlc2V0dGluZyBmb3JtIGNvbnRyb2xzIG9yIHVzaW5nIGEgc3RhdGVsZXNzIGNvbXBvbmVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgZGVmYXVsdENoZWNrZWQgPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGNoZWNrZWQgb3Igbm90ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBjaGVja2VkID0gZmFsc2U7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgcmVhZG9ubHkgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHJlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAvKiogV2hldGhlciB0aGUgc2VsZWN0aW5nIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIG9yIG5vdCAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcmVxdWlyZWQgPSBmYWxzZTtcblxuICAgIC8qKiBSZW5kZXJzIHRoZSByZXF1aXJlZCBpbmRpY2F0b3IgZm9yIHRoaXMgaW5wdXRzIGxhYmVsIHdpdGhvdXQgZW5hYmxpbmcgbmF0aXZlIGByZXF1aXJlZGAgdmFsaWRhdGlvbiAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgc2hvd1JlcXVpcmVkPztcblxuICAgIC8qKiBUaGUgaW5wdXQgZWxlbWVudCB1c2VkIHdpdGhpbiB0aGUgZm9ybSBjb250cm9sIG1peGluICovXG4gICAgQHF1ZXJ5KCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSB2YWxpZGF0aW9uVGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgLyoqIEVtaXR0ZWQgd2hlbiB0aGUgZWxlbWVudCdzIHN0YXRlIGlzIGFib3V0IHRvIGNoYW5nZS4gSWYgZGVmYXVsdCBpcyBwcmV2ZW50ZWQsIGl0IHdpbGwgcmV2ZXJ0IHRoZSBjaGVja2JveCB0byBpdCdzIG9yaWdpbmFsIGNoZWNrZWQgc3RhdGUgcHJpb3IgdG8gc2VsZWN0aW5nLiAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfd2lsbENoYW5nZTogRXZlbnRFbWl0dGVyPE10ZUNoZWNrYm94Q2hhbmdlRGV0YWlsPjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhlIGVsZW1lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZC4gKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TXRlQ2hlY2tib3hDaGFuZ2VEZXRhaWw+O1xuXG4gICAgLyoqIEVtaXRzIHdoZW4gdGhpcyBlbGVtZW50IGlzIGZvY3VzZWQgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uRm9jdXM6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0cyB3aGVuIHRoaXMgZWxlbWVudCBsb3NlcyBmb2N1cyAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25CbHVyOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBAb25VcGRhdGUoJ2RlZmF1bHRDaGVja2VkJylcbiAgICBwcm90ZWN0ZWQgb25EZWZhdWx0Q2hlY2tlZENoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRyb2xsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCAmJiB0aGlzLmRlZmF1bHRDaGVja2VkICYmICF0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAb25VcGRhdGUoWyd2YWx1ZScsICdjaGVja2VkJ10sIHsgb246ICdib3RoJyB9KVxuICAgIHByb3RlY3RlZCB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgQG9uVXBkYXRlKCdhcmlhTGFiZWwnLCB7IG9uOiAnYm90aCcgfSlcbiAgICBwcm90ZWN0ZWQgdXBkYXRlTGFiZWwoKSB7XG4gICAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIC4uLnRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyxcbiAgICAgICAgYXJpYUxhYmVsOiB0aGlzLmFyaWFMYWJlbCxcbiAgICAgIH07XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIC0tIEZvcm0gY29udHJvbCB2YWxpZGF0aW9uIG92ZXJyaWRlcyAtLSAqL1xuICAgIHNob3VsZEZvcm1WYWx1ZVVwZGF0ZSgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0Rm9ybUNvbnRyb2woKTogdm9pZCB7XG4gICAgICBzdXBlci5yZXNldEZvcm1Db250cm9sPy4oKTtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRyb2xsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmRlZmF1bHRDaGVja2VkO1xuICAgIH1cblxuICAgIHZhbGlkaXR5Q2FsbGJhY2soKTogc3RyaW5nIHwgdm9pZCB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvciB8fCB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIH1cblxuICAgIC8qKiAtLSBUYWJJbmRleCBvdmVycmlkZXMgLS0gKi9cbiAgICBnZXRUYWJJbmRleEFkYXB0ZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uVGFyZ2V0Py5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgc2V0VGFiSW5kZXhBZGFwdGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0Py5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdmFsdWUpO1xuICAgIH1cblxuICAgIHJlbW92ZVRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0Py5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vdFByZXZlbnRlZCA9IHRoaXMuX3dpbGxDaGFuZ2UuZW1pdChcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBjaGVja2VkOiAhdGhpcy5jaGVja2VkLFxuICAgICAgICB9LFxuICAgICAgICB7IGNhbmNlbGFibGU6IHRydWUgfVxuICAgICAgKTtcblxuICAgICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgY2hlY2tlZDogIXRoaXMuY2hlY2tlZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChub3RQcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIGNoZWNrZWQ6IHRoaXMuY2hlY2tlZCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICAgIHRoaXMuX29uQmx1ci5lbWl0KCk7XG4gICAgfTtcblxuICAgIGhhbmRsZUZvY3VzID0gKCkgPT4ge1xuICAgICAgdGhpcy5fb25Gb2N1cy5lbWl0KCk7XG4gICAgfTtcblxuICAgIC8qKiBDbGlja3MgdGhlIGVsZW1lbnQgKi9cbiAgICBwdWJsaWMgY2xpY2soKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQuY2xpY2soKTtcbiAgICB9XG5cbiAgICAvKiogRm9jdXNlcyB0aGUgZWxlbWVudCAqL1xuICAgIHB1YmxpYyBmb2N1cygpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblRhcmdldC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKiBCbHVycyB0aGUgZWxlbWVudCAqL1xuICAgIHB1YmxpYyBibHVyKCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0LmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gQ2hlY2tib3hFbGVtZW50IGFzIENvbnN0cnVjdG9yPFxuICAgIENoZWNrYm94SW50ZXJmYWNlICYgVGFiSW5kZXhJbnRlcmZhY2UgJiBGb3JtQ29udHJvbEludGVyZmFjZSAmIERpc2FibGVkSW50ZXJmYWNlXG4gID4gJlxuICAgIFQ7XG59O1xuIiwgIi8qKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBXZWFrTWFwcyB1c2VkIHRocm91Z2hvdXQgdGhpcyBwcm9qZWN0LiBUaGUgV2Vha01hcHMgZXhpc3QgdG8gdGllXG4gKiBvYmplY3RzIHRvZ2V0aGVyIHdpdGhvdXQgcG9sbHV0aW5nIHRoZSBvYmplY3RzIHRoZW1zZWx2ZXMgd2l0aCByZWZlcmVuY2VzIHdlJ2QgcmF0aGVyIGtlZXBcbiAqIGhpZGRlbi4gVGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIHdvcmsgYXMgdHJhbnNwYXJlbnRseSBhcyBwb3NzaWJsZS5cbiAqL1xuaW1wb3J0IHsgSUVsZW1lbnRJbnRlcm5hbHMsIElDdXN0b21FbGVtZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgaXQgaXMgYXR0YWNoZWQgdG8gKi9cbmV4cG9ydCBjb25zdCByZWZNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgSUN1c3RvbUVsZW1lbnQ+KCk7XG5cbi8qKiBVc2VlIGFuIEVsZW1lbnRzSW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBpdHMgVmFsaWRpdHlTdGF0ZSBvYmplY3QgKi9cbmV4cG9ydCBjb25zdCB2YWxpZGl0eU1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBWYWxpZGl0eVN0YXRlPigpO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGl0cyBhdHRhY2hlZCBpbnB1dFt0eXBlPVwiaGlkZGVuXCJdICovXG5leHBvcnQgY29uc3QgaGlkZGVuSW5wdXRNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgSFRNTElucHV0RWxlbWVudFtdPigpO1xuXG4vKiogVXNlIGEgY3VzdG9tIGVsZW1lbnQgdG8gZ2V0IGl0cyBhdHRhY2hlZCBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlICovXG5leHBvcnQgY29uc3QgaW50ZXJuYWxzTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzPigpO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IHRoZSBhdHRhY2hlZCB2YWxpZGF0aW9uIG1lc3NhZ2UgKi9cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uTWVzc2FnZU1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBzdHJpbmc+KCk7XG5cbi8qKiBVc2UgYSBmb3JtIGVsZW1lbnQgdG8gZ2V0IGF0dGFjaGVkIGN1c3RvbSBlbGVtZW50cyBhbmQgRWxlbWVudEludGVybmFscyBpbnN0YW5jZXMgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5leHBvcnQgY29uc3QgZm9ybXNNYXAgPSBuZXcgV2Vha01hcDxIVE1MRm9ybUVsZW1lbnQsIE9iamVjdD4oKTtcblxuLyoqIFVzZSBhIGN1c3RvbSBlbGVtZW50IG9yIG90aGVyIG9iamVjdCB0byBnZXQgdGhlaXIgYXNzb2NpYXRlZCBNdXRhdGlvbk9ic2VydmVycyAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd0hvc3RzTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIE11dGF0aW9uT2JzZXJ2ZXI+KCk7XG5cbi8qKiBVc2UgYSBmb3JtIGVsZW1lbnQgdG8gZ2V0IGEgc2V0IG9mIGF0dGFjaGVkIGN1c3RvbSBlbGVtZW50cyAqL1xuZXhwb3J0IGNvbnN0IGZvcm1FbGVtZW50c01hcCA9IG5ldyBXZWFrTWFwPEhUTUxGb3JtRWxlbWVudCwgU2V0PElDdXN0b21FbGVtZW50Pj4oKTtcblxuLyoqIFVzZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBhIHJlZmVyZW5jZSB0byBhbiBlbGVtZW50J3MgdmFsdWUgKi9cbmV4cG9ydCBjb25zdCByZWZWYWx1ZU1hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBhbnk+KCk7XG5cbi8qKiBFbGVtZW50cyB0aGF0IG5lZWQgdG8gYmUgdXBncmFkZWQgb25jZSBhZGRlZCB0byB0aGUgRE9NICovXG5leHBvcnQgY29uc3QgdXBncmFkZU1hcCA9IG5ldyBXZWFrTWFwPEVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzPigpO1xuXG4vKiogU2F2ZSByZWZlcmVuY2VzIHRvIHNoYWRvdyByb290cyBmb3IgaW5jbHVzaW9uIGluIGludGVybmFscyBpbnN0YW5jZSAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd1Jvb3RNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgU2hhZG93Um9vdD4oKTtcblxuLyoqIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIGludGVybmFscycgdmFsaWRhdGlvbiBhbmNob3IgKi9cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uQW5jaG9yTWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIEhUTUxFbGVtZW50PigpO1xuXG4vKiogTWFwIERvY3VtZW50RnJhZ21lbnRzIHRvIHRoZWlyIE11dGF0aW9uT2JzZXJ2ZXJzIHNvIHdlIGNhbiBkaXNjb25uZWN0IG9uY2UgZWxlbWVudHMgYXJlIHJlbW92ZWQgKi9cbmV4cG9ydCBjb25zdCBkb2N1bWVudEZyYWdtZW50TWFwID0gbmV3IFdlYWtNYXA8RG9jdW1lbnRGcmFnbWVudCwgTXV0YXRpb25PYnNlcnZlcj4oKTtcblxuLyoqIFdoZXRoZXIgY29ubmVjdGVkQ2FsbGJhY2sgaGFzIGFscmVhZHkgYmVlbiBjYWxsZWQuICovXG5leHBvcnQgY29uc3QgY29ubmVjdGVkQ2FsbGJhY2tNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgYm9vbGVhbj4oKTtcblxuLyoqIFNhdmUgYSByZWZlcmVuY2UgdG8gdmFsaWRpdHkgc3RhdGUgZm9yIGVsZW1lbnRzIHRoYXQgbmVlZCB0byB1cGdyYWRlIGFmdGVyIGJlaW5nIGNvbm5lY3RlZCAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkaXR5VXBncmFkZU1hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBJRWxlbWVudEludGVybmFscz4oKTtcbiIsICJpbXBvcnQgeyB1cGdyYWRlTWFwIH0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IElBb20sIElFbGVtZW50SW50ZXJuYWxzIH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbmV4cG9ydCBjb25zdCBhb206IElBb20gPSB7XG4gIGFyaWFBdG9taWM6ICdhcmlhLWF0b21pYycsXG4gIGFyaWFBdXRvQ29tcGxldGU6ICdhcmlhLWF1dG9jb21wbGV0ZScsXG4gIGFyaWFCdXN5OiAnYXJpYS1idXN5JyxcbiAgYXJpYUNoZWNrZWQ6ICdhcmlhLWNoZWNrZWQnLFxuICBhcmlhQ29sQ291bnQ6ICdhcmlhLWNvbGNvdW50JyxcbiAgYXJpYUNvbEluZGV4OiAnYXJpYS1jb2xpbmRleCcsXG4gIGFyaWFDb2xJbmRleFRleHQ6ICdhcmlhLWNvbGluZGV4dGV4dCcsXG4gIGFyaWFDb2xTcGFuOiAnYXJpYS1jb2xzcGFuJyxcbiAgYXJpYUN1cnJlbnQ6ICdhcmlhLWN1cnJlbnQnLFxuICBhcmlhRGlzYWJsZWQ6ICdhcmlhLWRpc2FibGVkJyxcbiAgYXJpYUV4cGFuZGVkOiAnYXJpYS1leHBhbmRlZCcsXG4gIGFyaWFIYXNQb3B1cDogJ2FyaWEtaGFzcG9wdXAnLFxuICBhcmlhSGlkZGVuOiAnYXJpYS1oaWRkZW4nLFxuICBhcmlhSW52YWxpZDogJ2FyaWEtaW52YWxpZCcsXG4gIGFyaWFLZXlTaG9ydGN1dHM6ICdhcmlhLWtleXNob3J0Y3V0cycsXG4gIGFyaWFMYWJlbDogJ2FyaWEtbGFiZWwnLFxuICBhcmlhTGV2ZWw6ICdhcmlhLWxldmVsJyxcbiAgYXJpYUxpdmU6ICdhcmlhLWxpdmUnLFxuICBhcmlhTW9kYWw6ICdhcmlhLW1vZGFsJyxcbiAgYXJpYU11bHRpTGluZTogJ2FyaWEtbXVsdGlsaW5lJyxcbiAgYXJpYU11bHRpU2VsZWN0YWJsZTogJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJyxcbiAgYXJpYU9yaWVudGF0aW9uOiAnYXJpYS1vcmllbnRhdGlvbicsXG4gIGFyaWFQbGFjZWhvbGRlcjogJ2FyaWEtcGxhY2Vob2xkZXInLFxuICBhcmlhUG9zSW5TZXQ6ICdhcmlhLXBvc2luc2V0JyxcbiAgYXJpYVByZXNzZWQ6ICdhcmlhLXByZXNzZWQnLFxuICBhcmlhUmVhZE9ubHk6ICdhcmlhLXJlYWRvbmx5JyxcbiAgYXJpYVJlbGV2YW50OiAnYXJpYS1yZWxldmFudCcsXG4gIGFyaWFSZXF1aXJlZDogJ2FyaWEtcmVxdWlyZWQnLFxuICBhcmlhUm9sZURlc2NyaXB0aW9uOiAnYXJpYS1yb2xlZGVzY3JpcHRpb24nLFxuICBhcmlhUm93Q291bnQ6ICdhcmlhLXJvd2NvdW50JyxcbiAgYXJpYVJvd0luZGV4OiAnYXJpYS1yb3dpbmRleCcsXG4gIGFyaWFSb3dJbmRleFRleHQ6ICdhcmlhLXJvd2luZGV4dGV4dCcsXG4gIGFyaWFSb3dTcGFuOiAnYXJpYS1yb3dzcGFuJyxcbiAgYXJpYVNlbGVjdGVkOiAnYXJpYS1zZWxlY3RlZCcsXG4gIGFyaWFTZXRTaXplOiAnYXJpYS1zZXRzaXplJyxcbiAgYXJpYVNvcnQ6ICdhcmlhLXNvcnQnLFxuICBhcmlhVmFsdWVNYXg6ICdhcmlhLXZhbHVlbWF4JyxcbiAgYXJpYVZhbHVlTWluOiAnYXJpYS12YWx1ZW1pbicsXG4gIGFyaWFWYWx1ZU5vdzogJ2FyaWEtdmFsdWVub3cnLFxuICBhcmlhVmFsdWVUZXh0OiAnYXJpYS12YWx1ZXRleHQnLFxuICByb2xlOiAncm9sZScsXG59O1xuXG5leHBvcnQgY29uc3QgaW5pdEFvbSA9IChyZWY6IEVsZW1lbnQsIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHMpID0+IHtcbiAgZm9yIChsZXQga2V5IGluIGFvbSkge1xuICAgIGludGVybmFsc1trZXldID0gbnVsbDtcblxuICAgIGxldCBjbG9zdXJlVmFsdWUgPSBudWxsO1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBhb21ba2V5XTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW50ZXJuYWxzLCBrZXksIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGNsb3N1cmVWYWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgY2xvc3VyZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICByZWYuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGdyYWRlTWFwLnNldChyZWYsIGludGVybmFscyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHtcbiAgaW50ZXJuYWxzTWFwLFxuICBzaGFkb3dIb3N0c01hcCxcbiAgdXBncmFkZU1hcCxcbiAgaGlkZGVuSW5wdXRNYXAsXG4gIGRvY3VtZW50RnJhZ21lbnRNYXAsXG4gIGZvcm1FbGVtZW50c01hcCxcbiAgdmFsaWRpdHlVcGdyYWRlTWFwLFxuICByZWZWYWx1ZU1hcCxcbn0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IGFvbSB9IGZyb20gJy4vYW9tLmpzJztcbmltcG9ydCB7XG4gIHJlbW92ZUhpZGRlbklucHV0cyxcbiAgaW5pdEZvcm0sXG4gIGluaXRMYWJlbHMsXG4gIHVwZ3JhZGVJbnRlcm5hbHMsXG4gIHNldERpc2FibGVkLFxuICBtdXRhdGlvbk9ic2VydmVyRXhpc3RzLFxufSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IElDdXN0b21FbGVtZW50IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbmZ1bmN0aW9uIGluaXROb2RlKG5vZGU6IElDdXN0b21FbGVtZW50KTogdm9pZCB7XG4gIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQobm9kZSk7XG4gIGNvbnN0IHsgZm9ybSB9ID0gaW50ZXJuYWxzO1xuICBpbml0Rm9ybShub2RlLCBmb3JtLCBpbnRlcm5hbHMpO1xuICBpbml0TGFiZWxzKG5vZGUsIGludGVybmFscy5sYWJlbHMpO1xufVxuXG4vKipcbiAqIElmIGEgZmllbGRzZXQncyBkaXNhYmxlZCBzdGF0ZSBpcyB0b2dnbGVkLCB0aGUgZm9ybURpc2FibGVkQ2FsbGJhY2tcbiAqIG9uIGFueSBjaGlsZCBmb3JtLWFzc29jaWF0ZWQgY3Vzb3RtIGVsZW1lbnRzLlxuICovXG5leHBvcnQgY29uc3Qgd2Fsa0ZpZWxkc2V0ID0gKG5vZGU6IEhUTUxGaWVsZFNldEVsZW1lbnQsIGZpcnN0UmVuZGVyID0gZmFsc2UpOiB2b2lkID0+IHtcbiAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihub2RlLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwge1xuICAgIGFjY2VwdE5vZGUobm9kZTogSUN1c3RvbUVsZW1lbnQpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIGludGVybmFsc01hcC5oYXMobm9kZSkgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9TS0lQO1xuICAgIH0sXG4gIH0pO1xuXG4gIGxldCBjdXJyZW50ID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgSUN1c3RvbUVsZW1lbnQ7XG4gIC8qKlxuICAgKiBXZSBkb24ndCBuZWVkIHRvIGNhbGwgYW55dGhpbmcgb24gZmlyc3QgcmVuZGVyIGlmXG4gICAqIHRoZSBlbGVtZW50IGlzbid0IGRpc2FibGVkXG4gICAqL1xuICBjb25zdCBpc0NhbGxOZWNlc3NhcnkgPSAhZmlyc3RSZW5kZXIgfHwgbm9kZS5kaXNhYmxlZDtcblxuICB3aGlsZSAoY3VycmVudCkge1xuICAgIGlmIChjdXJyZW50LmZvcm1EaXNhYmxlZENhbGxiYWNrICYmIGlzQ2FsbE5lY2Vzc2FyeSkge1xuICAgICAgc2V0RGlzYWJsZWQoY3VycmVudCwgbm9kZS5kaXNhYmxlZCk7XG4gICAgfVxuICAgIGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWc6IE11dGF0aW9uT2JzZXJ2ZXJJbml0ID0ge1xuICBhdHRyaWJ1dGVzOiB0cnVlLFxuICBhdHRyaWJ1dGVGaWx0ZXI6IFsnZGlzYWJsZWQnLCAnbmFtZSddLFxufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIgPSBtdXRhdGlvbk9ic2VydmVyRXhpc3RzKClcbiAgPyBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zTGlzdDogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xuICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldCBhcyBJQ3VzdG9tRWxlbWVudDtcblxuICAgICAgICAvKiogTWFuYWdlIGNoYW5nZXMgdG8gdGhlIHJlZidzIGRpc2FibGVkIHN0YXRlICovXG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgICAgICAgc2V0RGlzYWJsZWQodGFyZ2V0LCB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5sb2NhbE5hbWUgPT09ICdmaWVsZHNldCcpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVwdXJwb3NlIHRoZSBvYnNlcnZlciBmb3IgZmllbGRzZXRzIHdoaWNoIG5lZWRcbiAgICAgICAgICAgICAqIHRvIGJlIHdhbGtlZCB3aGVuZXZlciB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIGlzIHNldFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB3YWxrRmllbGRzZXQodGFyZ2V0IGFzIHVua25vd24gYXMgSFRNTEZpZWxkU2V0RWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKiBNYW5hZ2UgY2hhbmdlcyB0byB0aGUgcmVmJ3MgbmFtZSAqL1xuICAgICAgICBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ25hbWUnKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZWZWYWx1ZU1hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIGludGVybmFscy5zZXRGb3JtVmFsdWUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIDogKHt9IGFzIE11dGF0aW9uT2JzZXJ2ZXIpO1xuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZXJDYWxsYmFjayhtdXRhdGlvbkxpc3Q6IE11dGF0aW9uUmVjb3JkW10pIHtcbiAgbXV0YXRpb25MaXN0LmZvckVhY2goKG11dGF0aW9uUmVjb3JkKSA9PiB7XG4gICAgY29uc3QgeyBhZGRlZE5vZGVzLCByZW1vdmVkTm9kZXMgfSA9IG11dGF0aW9uUmVjb3JkO1xuICAgIGNvbnN0IGFkZGVkID0gQXJyYXkuZnJvbShhZGRlZE5vZGVzKSBhcyBJQ3VzdG9tRWxlbWVudFtdO1xuICAgIGNvbnN0IHJlbW92ZWQgPSBBcnJheS5mcm9tKHJlbW92ZWROb2RlcykgYXMgSUN1c3RvbUVsZW1lbnRbXTtcblxuICAgIGFkZGVkLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIC8qKiBBbGxvd3MgZm9yIGR5bmFtaWMgYWRkaXRpb24gb2YgZWxlbWVudHMgdG8gZm9ybXMgKi9cbiAgICAgIGlmIChpbnRlcm5hbHNNYXAuaGFzKG5vZGUpICYmIG5vZGUuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICAgICAgaW5pdE5vZGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKiBVcGdyYWRlIHRoZSBhY2Nlc3NpYmlsaXR5IGluZm9ybWF0aW9uIG9uIGFueSBwcmV2aW91c2x5IGNvbm5lY3RlZCAqL1xuICAgICAgaWYgKHVwZ3JhZGVNYXAuaGFzKG5vZGUpKSB7XG4gICAgICAgIGNvbnN0IGludGVybmFscyA9IHVwZ3JhZGVNYXAuZ2V0KG5vZGUpO1xuICAgICAgICBjb25zdCBhb21LZXlzID0gT2JqZWN0LmtleXMoYW9tKTtcbiAgICAgICAgYW9tS2V5c1xuICAgICAgICAgIC5maWx0ZXIoKGtleSkgPT4gaW50ZXJuYWxzW2tleV0gIT09IG51bGwpXG4gICAgICAgICAgLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYW9tW2tleV0sIGludGVybmFsc1trZXldKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgdXBncmFkZU1hcC5kZWxldGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKiBVcGdyYWRlIHRoZSB2YWxpZGl0eSBzdGF0ZSB3aGVuIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCAqL1xuICAgICAgaWYgKHZhbGlkaXR5VXBncmFkZU1hcC5oYXMobm9kZSkpIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gdmFsaWRpdHlVcGdyYWRlTWFwLmdldChub2RlKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2ludGVybmFscy12YWxpZCcsIGludGVybmFscy52YWxpZGl0eS52YWxpZC50b1N0cmluZygpKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2ludGVybmFscy1pbnZhbGlkJywgKCFpbnRlcm5hbHMudmFsaWRpdHkudmFsaWQpLnRvU3RyaW5nKCkpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgKCFpbnRlcm5hbHMudmFsaWRpdHkudmFsaWQpLnRvU3RyaW5nKCkpO1xuICAgICAgICB2YWxpZGl0eVVwZ3JhZGVNYXAuZGVsZXRlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvKiogSWYgdGhlIG5vZGUgdGhhdCdzIGFkZGVkIGlzIGEgZm9ybSwgY2hlY2sgdGhlIHZhbGlkaXR5ICovXG4gICAgICBpZiAobm9kZS5sb2NhbE5hbWUgPT09ICdmb3JtJykge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KG5vZGUgYXMgdW5rbm93biBhcyBIVE1MRm9ybUVsZW1lbnQpO1xuICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKG5vZGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCB7XG4gICAgICAgICAgYWNjZXB0Tm9kZShub2RlOiBJQ3VzdG9tRWxlbWVudCk6IG51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4gaW50ZXJuYWxzTWFwLmhhcyhub2RlKSAmJiAhKGZvcm1FbGVtZW50cyAmJiBmb3JtRWxlbWVudHMuaGFzKG5vZGUpKVxuICAgICAgICAgICAgICA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVFxuICAgICAgICAgICAgICA6IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVA7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcblxuICAgICAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICAgIGluaXROb2RlKGN1cnJlbnQpO1xuICAgICAgICAgIGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5sb2NhbE5hbWUgPT09ICdmaWVsZHNldCcpIHtcbiAgICAgICAgZGlzYWJsZWRPck5hbWVPYnNlcnZlci5vYnNlcnZlPy4obm9kZSwgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZyk7XG4gICAgICAgIHdhbGtGaWVsZHNldChub2RlIGFzIHVua25vd24gYXMgSFRNTEZpZWxkU2V0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZW1vdmVkLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQobm9kZSk7XG4gICAgICAvKiogQ2xlYW4gdXAgYW55IGhpZGRlbiBpbnB1dCBlbGVtZW50cyBsZWZ0IGFmdGVyIGFuIGVsZW1lbnQgaXMgZGlzY29ubmVjdGVkICovXG4gICAgICBpZiAoaW50ZXJuYWxzICYmIGhpZGRlbklucHV0TWFwLmdldChpbnRlcm5hbHMpKSB7XG4gICAgICAgIHJlbW92ZUhpZGRlbklucHV0cyhpbnRlcm5hbHMpO1xuICAgICAgfVxuICAgICAgLyoqIERpc2Nvbm5lY3QgYW55IHVubmVlZGVkIE11dGF0aW9uT2JzZXJ2ZXJzICovXG4gICAgICBpZiAoc2hhZG93SG9zdHNNYXAuaGFzKG5vZGUpKSB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gc2hhZG93SG9zdHNNYXAuZ2V0KG5vZGUpO1xuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRoaXMgb2JzZXJ2ZXIgY2FsbGJhY2sgaXMganVzdCBmb3IgZG9jdW1lbnQgZnJhZ21lbnRzXG4gKiBpdCB3aWxsIHVwZ3JhZGUgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSBpZiB3YXMgYXBwZW5kZWRcbiAqIGZyb20gYSBkb2N1bWVudCBmcmFnbWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyYWdtZW50T2JzZXJ2ZXJDYWxsYmFjayhtdXRhdGlvbkxpc3Q6IE11dGF0aW9uUmVjb3JkW10pOiB2b2lkIHtcbiAgbXV0YXRpb25MaXN0LmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgY29uc3QgeyByZW1vdmVkTm9kZXMgfSA9IG11dGF0aW9uO1xuXG4gICAgcmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gZG9jdW1lbnRGcmFnbWVudE1hcC5nZXQobXV0YXRpb24udGFyZ2V0IGFzIERvY3VtZW50RnJhZ21lbnQpO1xuICAgICAgaWYgKGludGVybmFsc01hcC5oYXMobm9kZSBhcyBJQ3VzdG9tRWxlbWVudCkpIHtcbiAgICAgICAgdXBncmFkZUludGVybmFscyhub2RlIGFzIElDdXN0b21FbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogRGVmZXIgdGhlIHVwZ3JhZGUgb2Ygbm9kZXMgd2l0aGluZyBhIERvY3VtZW50RnJhZ21lbnRcbiAqIEBwYXJhbSBmcmFnbWVudCB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmVyVXBncmFkZSA9IChmcmFnbWVudDogRG9jdW1lbnRGcmFnbWVudCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZyYWdtZW50T2JzZXJ2ZXJDYWxsYmFjayk7XG4gIG9ic2VydmVyLm9ic2VydmU/LihmcmFnbWVudCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gIGRvY3VtZW50RnJhZ21lbnRNYXAuc2V0KGZyYWdtZW50LCBvYnNlcnZlcik7XG59O1xuXG5leHBvcnQgY29uc3Qgb2JzZXJ2ZXIgPSBtdXRhdGlvbk9ic2VydmVyRXhpc3RzKClcbiAgPyBuZXcgTXV0YXRpb25PYnNlcnZlcihvYnNlcnZlckNhbGxiYWNrKVxuICA6ICh7fSBhcyBNdXRhdGlvbk9ic2VydmVyKTtcbmV4cG9ydCBjb25zdCBvYnNlcnZlckNvbmZpZzogTXV0YXRpb25PYnNlcnZlckluaXQgPSB7XG4gIGNoaWxkTGlzdDogdHJ1ZSxcbiAgc3VidHJlZTogdHJ1ZSxcbn07XG4iLCAiaW1wb3J0IHsgaGlkZGVuSW5wdXRNYXAsIGZvcm1zTWFwLCBmb3JtRWxlbWVudHNNYXAsIGludGVybmFsc01hcCB9IGZyb20gJy4vbWFwcy5qcyc7XG5pbXBvcnQgeyBkaXNhYmxlZE9yTmFtZU9ic2VydmVyLCBkaXNhYmxlZE9yTmFtZU9ic2VydmVyQ29uZmlnIH0gZnJvbSAnLi9tdXRhdGlvbi1vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgSUN1c3RvbUVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzLCBMYWJlbHNMaXN0IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbi8qKlxuICogVG9nZ2xlJ3MgdGhlIGRpc2FibGVkIHN0YXRlIChhdHRyaWJ1dGVzICYgY2FsbGJhY2spIG9uIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAcGFyYW0ge0lDdXN0b21FbGVtZW50fSByZWYgLSBUaGUgY3VzdG9tIGVsZW1lbnQgaW5zdGFuY2VcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzYWJsZWQgLSBUaGUgZGlzYWJsZWQgc3RhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHNldERpc2FibGVkID0gKHJlZjogSUN1c3RvbUVsZW1lbnQsIGRpc2FibGVkOiBib29sZWFuKTogdm9pZCA9PiB7XG4gIHJlZi50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy1kaXNhYmxlZCcsIGRpc2FibGVkKTtcblxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICByZWYuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgfSBlbHNlIHtcbiAgICByZWYucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XG4gIH1cblxuICBpZiAocmVmLmZvcm1EaXNhYmxlZENhbGxiYWNrKSB7XG4gICAgcmVmLmZvcm1EaXNhYmxlZENhbGxiYWNrLmFwcGx5KHJlZiwgW2Rpc2FibGVkXSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgaGlkZGVuIGlucHV0cyBmb3IgdGhlIGdpdmVuIGVsZW1lbnQgaW50ZXJuYWxzIGluc3RhbmNlXG4gKiBAcGFyYW0ge0lFbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHMgLSBUaGUgZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2VcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVIaWRkZW5JbnB1dHMgPSAoaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscyk6IHZvaWQgPT4ge1xuICBjb25zdCBoaWRkZW5JbnB1dHMgPSBoaWRkZW5JbnB1dE1hcC5nZXQoaW50ZXJuYWxzKTtcbiAgaGlkZGVuSW5wdXRzLmZvckVhY2goKGhpZGRlbklucHV0KSA9PiB7XG4gICAgaGlkZGVuSW5wdXQucmVtb3ZlKCk7XG4gIH0pO1xuICBoaWRkZW5JbnB1dE1hcC5zZXQoaW50ZXJuYWxzLCBbXSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoaWRkZW4gaW5wdXQgZm9yIHRoZSBnaXZlbiByZWZcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSBlbGVtZW50IHRvIHdhdGNoXG4gKiBAcGFyYW0ge0lFbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHMgLSBUaGUgZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2UgZm9yIHRoZSByZWZcbiAqIEByZXR1cm4ge0hUTUxJbnB1dEVsZW1lbnR9IFRoZSBoaWRkZW4gaW5wdXRcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUhpZGRlbklucHV0ID0gKFxuICByZWY6IElDdXN0b21FbGVtZW50LFxuICBpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzXG4pOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9ICdoaWRkZW4nO1xuICBpbnB1dC5uYW1lID0gcmVmLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICByZWYuYWZ0ZXIoaW5wdXQpO1xuICBoaWRkZW5JbnB1dE1hcC5nZXQoaW50ZXJuYWxzKS5wdXNoKGlucHV0KTtcbiAgcmV0dXJuIGlucHV0O1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgcmVmIGJ5IHNldHRpbmcgdXAgYW4gYXR0cmlidXRlIG9ic2VydmUgb24gaXRcbiAqIGxvb2tpbmcgZm9yIGNoYW5nZXMgdG8gZGlzYWJsZWRcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSBlbGVtZW50IHRvIHdhdGNoXG4gKiBAcGFyYW0ge0lFbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHMgLSBUaGUgZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2UgZm9yIHRoZSByZWZcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBpbml0UmVmID0gKHJlZjogSUN1c3RvbUVsZW1lbnQsIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHMpOiB2b2lkID0+IHtcbiAgaGlkZGVuSW5wdXRNYXAuc2V0KGludGVybmFscywgW10pO1xuICBkaXNhYmxlZE9yTmFtZU9ic2VydmVyLm9ic2VydmU/LihyZWYsIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWcpO1xufTtcblxuLyoqXG4gKiBTZXQgdXAgbGFiZWxzIGZvciB0aGUgcmVmXG4gKiBAcGFyYW0ge0lDdXN0b21FbGVtZW50fSByZWYgLSBUaGUgcmVmIHRvIGFkZCBsYWJlbHMgdG9cbiAqIEBwYXJhbSB7TGFiZWxzTGlzdH0gbGFiZWxzIC0gQSBsaXN0IG9mIHRoZSBsYWJlbHNcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBpbml0TGFiZWxzID0gKHJlZjogSUN1c3RvbUVsZW1lbnQsIGxhYmVsczogTGFiZWxzTGlzdCk6IHZvaWQgPT4ge1xuICBpZiAobGFiZWxzLmxlbmd0aCkge1xuICAgIEFycmF5LmZyb20obGFiZWxzKS5mb3JFYWNoKChsYWJlbCkgPT4gbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWYuY2xpY2suYmluZChyZWYpKSk7XG4gICAgbGV0IGZpcnN0TGFiZWxJZCA9IGxhYmVsc1swXS5pZDtcbiAgICBpZiAoIWxhYmVsc1swXS5pZCkge1xuICAgICAgZmlyc3RMYWJlbElkID0gYCR7bGFiZWxzWzBdLmh0bWxGb3J9X0xhYmVsYDtcbiAgICAgIGxhYmVsc1swXS5pZCA9IGZpcnN0TGFiZWxJZDtcbiAgICB9XG4gICAgcmVmLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgZmlyc3RMYWJlbElkKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBpbnRlcm5hbHMtdmFsaWQgYW5kIGludGVybmFscy1pbnZhbGlkIGF0dHJpYnV0ZXNcbiAqIGJhc2VkIG9uIGZvcm0gdmFsaWRpdHkuXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gLSBUaGUgdGFyZ2V0IGZvcm1cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBzZXRGb3JtVmFsaWRpdHkgPSAoZm9ybTogSFRNTEZvcm1FbGVtZW50KSA9PiB7XG4gIGNvbnN0IG5hdGl2ZUNvbnRyb2xWYWxpZGl0eSA9IEFycmF5LmZyb20oZm9ybS5lbGVtZW50cylcbiAgICAuZmlsdGVyKFxuICAgICAgKGVsZW1lbnQ6IEVsZW1lbnQgJiB7IHZhbGlkaXR5OiBWYWxpZGl0eVN0YXRlIH0pID0+XG4gICAgICAgICFlbGVtZW50LnRhZ05hbWUuaW5jbHVkZXMoJy0nKSAmJiBlbGVtZW50LnZhbGlkaXR5XG4gICAgKVxuICAgIC5tYXAoKGVsZW1lbnQ6IEVsZW1lbnQgJiB7IHZhbGlkaXR5OiBWYWxpZGl0eVN0YXRlIH0pID0+IGVsZW1lbnQudmFsaWRpdHkudmFsaWQpO1xuICBjb25zdCBwb2x5ZmlsbGVkRWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGZvcm0pIHx8IFtdO1xuICBjb25zdCBwb2x5ZmlsbGVkVmFsaWRpdHkgPSBBcnJheS5mcm9tKHBvbHlmaWxsZWRFbGVtZW50cylcbiAgICAuZmlsdGVyKChjb250cm9sKSA9PiBjb250cm9sLmlzQ29ubmVjdGVkKVxuICAgIC5tYXAoKGNvbnRyb2w6IElDdXN0b21FbGVtZW50KSA9PiBpbnRlcm5hbHNNYXAuZ2V0KGNvbnRyb2wpLnZhbGlkaXR5LnZhbGlkKTtcbiAgY29uc3QgaGFzSW52YWxpZCA9IFsuLi5uYXRpdmVDb250cm9sVmFsaWRpdHksIC4uLnBvbHlmaWxsZWRWYWxpZGl0eV0uaW5jbHVkZXMoZmFsc2UpO1xuICBmb3JtLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLWludmFsaWQnLCBoYXNJbnZhbGlkKTtcbiAgZm9ybS50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy12YWxpZCcsICFoYXNJbnZhbGlkKTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIGlucHV0IGNhbGxiYWNrLiBVcGRhdGVzIHRoZSBmb3JtJ3MgdmFsaWRpdHlcbiAqIGF0dHJpYnV0ZXMgb24gaW5wdXQuXG4gKiBAcGFyYW0ge0V2ZW50fSAtIFRoZSBmb3JtIGlucHV0IGV2ZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZm9ybUlucHV0Q2FsbGJhY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIHNldEZvcm1WYWxpZGl0eShmaW5kUGFyZW50Rm9ybShldmVudC50YXJnZXQpKTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIGNoYW5nZSBjYWxsYmFjay4gVXBkYXRlcyB0aGUgZm9ybSdzIHZhbGlkaXR5XG4gKiBhdHRyaWJ1dGVzIG9uIGNoYW5nZS5cbiAqIEBwYXJhbSB7RXZlbnR9IC0gVGhlIGZvcm0gY2hhbmdlIGV2ZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZm9ybUNoYW5nZUNhbGxiYWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICBzZXRGb3JtVmFsaWRpdHkoZmluZFBhcmVudEZvcm0oZXZlbnQudGFyZ2V0KSk7XG59O1xuXG4vKipcbiAqIFRoZSBnbG9iYWwgZm9ybSBzdWJtaXQgY2FsbGJhY2suIFdlIG5lZWQgdG8gY2FuY2VsIGFueSBzdWJtaXNzaW9uXG4gKiBpZiBhIG5lc3RlZCBpbnRlcm5hbHMgaXMgaW52YWxpZC5cbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSAtIFRoZSBmb3JtIGVsZW1lbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCB3aXJlU3VibWl0TG9naWMgPSAoZm9ybTogSFRNTEZvcm1FbGVtZW50KSA9PiB7XG4gIGNvbnN0IFNVQk1JVF9CVVRUT05fU0VMRUNUT1IgPVxuICAgICc6aXMoYnV0dG9uW3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBidXR0b246bm90KFt0eXBlXSkpOm5vdChbZGlzYWJsZWRdKSc7XG4gIGxldCBzdWJtaXRCdXR0b25TZWxlY3RvciA9IGAke1NVQk1JVF9CVVRUT05fU0VMRUNUT1J9Om5vdChbZm9ybV0pYDtcblxuICBpZiAoZm9ybS5pZCkge1xuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yICs9IGAsJHtTVUJNSVRfQlVUVE9OX1NFTEVDVE9SfVtmb3JtPScke2Zvcm0uaWR9J11gO1xuICB9XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBFbGVtZW50O1xuICAgIGlmICh0YXJnZXQuY2xvc2VzdChzdWJtaXRCdXR0b25TZWxlY3RvcikpIHtcbiAgICAgIC8vIHZhbGlkYXRlXG4gICAgICBjb25zdCBlbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhpcyBmb3JtIGRvZXMgbm90IHZhbGlkYXRlIHRoZW4gd2UncmUgZG9uZVxuICAgICAgICovXG4gICAgICBpZiAoZm9ybS5ub1ZhbGlkYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLyoqIElmIHRoZSBTZXQgaGFzIGl0ZW1zLCBjb250aW51ZSAqL1xuICAgICAgaWYgKGVsZW1lbnRzLnNpemUpIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKTtcbiAgICAgICAgLyoqIENoZWNrIHRoZSBpbnRlcm5hbHMuY2hlY2tWYWxpZGl0eSgpIG9mIGFsbCBub2RlcyAqL1xuICAgICAgICBjb25zdCB2YWxpZGl0eUxpc3QgPSBub2Rlcy5yZXZlcnNlKCkubWFwKChub2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChub2RlKTtcbiAgICAgICAgICByZXR1cm4gaW50ZXJuYWxzLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKiBJZiBhbnkgbm9kZSBpcyBmYWxzZSwgc3RvcCB0aGUgZXZlbnQgKi9cbiAgICAgICAgaWYgKHZhbGlkaXR5TGlzdC5pbmNsdWRlcyhmYWxzZSkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIHJlc2V0IGNhbGxiYWNrLiBUaGlzIHdpbGwgbG9vcCBvdmVyIGFkZGVkXG4gKiBpbnB1dHMgYW5kIGNhbGwgZm9ybVJlc2V0Q2FsbGJhY2sgaWYgYXBwbGljYWJsZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1SZXNldENhbGxiYWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAvKiogR2V0IHRoZSBTZXQgb2YgZWxlbWVudHMgYXR0YWNoZWQgdG8gdGhpcyBmb3JtICovXG4gIGNvbnN0IGVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50KTtcblxuICAvKiogU29tZSBmb3JtcyB3b24ndCBjb250YWluIGZvcm0gYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudHMgKi9cbiAgaWYgKGVsZW1lbnRzICYmIGVsZW1lbnRzLnNpemUpIHtcbiAgICAvKiogTG9vcCBvdmVyIHRoZSBlbGVtZW50cyBhbmQgY2FsbCBmb3JtUmVzZXRDYWxsYmFjayBpZiBhcHBsaWNhYmxlICovXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKChlbGVtZW50LmNvbnN0cnVjdG9yIGFzIGFueSkuZm9ybUFzc29jaWF0ZWQgJiYgZWxlbWVudC5mb3JtUmVzZXRDYWxsYmFjaykge1xuICAgICAgICBlbGVtZW50LmZvcm1SZXNldENhbGxiYWNrLmFwcGx5KGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGZvcm0uIFdlIHdpbGwgbmVlZCB0byBhZGQgc3VibWl0IGFuZCByZXNldCBsaXN0ZW5lcnNcbiAqIGlmIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdC4gSWYgdGhleSBkbywganVzdCBhZGQgdGhlIG5ldyByZWYgdG8gdGhlIGZvcm0uXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWYgLSBUaGUgZWxlbWVudCByZWYgdGhhdCBpbmNsdWRlcyBpbnRlcm5hbHNcbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtIC0gVGhlIGZvcm0gdGhlIHJlZiBiZWxvbmdzIHRvXG4gKiBAcGFyYW0ge0VsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBpbnRlcm5hbHMgZm9yIHJlZlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRGb3JtID0gKFxuICByZWY6IElDdXN0b21FbGVtZW50LFxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnQsXG4gIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHNcbikgPT4ge1xuICBpZiAoZm9ybSkge1xuICAgIC8qKiBUaGlzIHdpbGwgYmUgYSBXZWFrTWFwPEhUTUxGb3JtRWxlbWVudCwgU2V0PEhUTUxFbGVtZW50PiAqL1xuICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSk7XG5cbiAgICBpZiAoZm9ybUVsZW1lbnRzKSB7XG4gICAgICAvKiogSWYgZm9ybUVsZW1lbnRzIGV4aXN0cywgYWRkIHRvIGl0ICovXG4gICAgICBmb3JtRWxlbWVudHMuYWRkKHJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKiBJZiBmb3JtRWxlbWVudHMgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0IGFuZCBhZGQgdG8gaXQgKi9cbiAgICAgIGNvbnN0IGluaXRTZXQgPSBuZXcgU2V0PElDdXN0b21FbGVtZW50PigpO1xuICAgICAgaW5pdFNldC5hZGQocmVmKTtcbiAgICAgIGZvcm1FbGVtZW50c01hcC5zZXQoZm9ybSwgaW5pdFNldCk7XG5cbiAgICAgIC8qKiBBZGQgbGlzdGVuZXJzIHRvIGVtdWxhdGUgdmFsaWRhdGlvbiBhbmQgcmVzZXQgYmVoYXZpb3IgKi9cbiAgICAgIHdpcmVTdWJtaXRMb2dpYyhmb3JtKTtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCBmb3JtUmVzZXRDYWxsYmFjayk7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZm9ybUlucHV0Q2FsbGJhY2spO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmb3JtQ2hhbmdlQ2FsbGJhY2spO1xuICAgIH1cblxuICAgIGZvcm1zTWFwLnNldChmb3JtLCB7IHJlZiwgaW50ZXJuYWxzIH0pO1xuXG4gICAgLyoqIENhbGwgZm9ybUFzc29jaWF0ZWRDYWxsYmFjayBpZiBhcHBsaWNhYmxlICovXG4gICAgaWYgKHJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSAmJiByZWYuZm9ybUFzc29jaWF0ZWRDYWxsYmFjaykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlZi5mb3JtQXNzb2NpYXRlZENhbGxiYWNrLmFwcGx5KHJlZiwgW2Zvcm1dKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgICBzZXRGb3JtVmFsaWRpdHkoZm9ybSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgbG9vayBmb3IgYW4gZWxlbWVudCdzIHBhcmVudCBmb3JtXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW0gLSBUaGUgZWxlbWVudCB0byBsb29rIGZvciBhIHBhcmVudCBmb3JtXG4gKiBAcmV0dXJuIHtIVE1MRm9ybUVsZW1lbnR8bnVsbH0gLSBUaGUgcGFyZW50IGZvcm0sIGlmIG9uZSBleGlzdHNcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbmRQYXJlbnRGb3JtID0gKGVsZW0pID0+IHtcbiAgbGV0IHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgaWYgKHBhcmVudCAmJiBwYXJlbnQudGFnTmFtZSAhPT0gJ0ZPUk0nKSB7XG4gICAgcGFyZW50ID0gZmluZFBhcmVudEZvcm0ocGFyZW50KTtcbiAgfVxuICByZXR1cm4gcGFyZW50O1xufTtcblxuLyoqXG4gKiBUaHJvdyBhbiBlcnJvciBpZiB0aGUgZWxlbWVudCByZWYgaXMgbm90IGZvcm0gYXNzb2NpYXRlZFxuICogQHBhcmFtIHJlZiB7SUN1c3RvbUVsZW1lbnR9IC0gVGhlIGVsZW1lbnQgdG8gY2hlY2sgaWYgaXQgaXMgZm9ybSBhc3NvY2lhdGVkXG4gKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSAtIFRoZSBlcnJvciBtZXNzYWdlIHRvIHRocm93XG4gKiBAcGFyYW0gRXJyb3JUeXBlIHthbnl9IC0gVGhlIGVycm9yIHR5cGUgdG8gdGhyb3csIGRlZmF1bHRzIHRvIERPTUV4Y2VwdGlvblxuICovXG5leHBvcnQgY29uc3QgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkID0gKFxuICByZWY6IElDdXN0b21FbGVtZW50LFxuICBtZXNzYWdlOiBzdHJpbmcsXG4gIEVycm9yVHlwZTogYW55ID0gRE9NRXhjZXB0aW9uXG4pOiB2b2lkID0+IHtcbiAgaWYgKCFyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3JUeXBlKG1lc3NhZ2UpO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCBmb3IgZWFjaCBIVE1MRm9ybUVsZW1lbnQuY2hlY2tWYWxpZGl0eXxyZXBvcnRWYWxpZGl0eVxuICogd2lsbCBsb29wIG92ZXIgYSBmb3JtJ3MgYWRkZWQgY29tcG9uZW50cyBhbmQgY2FsbCB0aGUgcmVzcGVjdGl2ZVxuICogbWV0aG9kIG1vZGlmeWluZyB0aGUgZGVmYXVsdCByZXR1cm4gdmFsdWUgaWYgbmVlZGVkXG4gKiBAcGFyYW0gZm9ybSB7SFRNTEZvcm1FbGVtZW50fSAtIFRoZSBmb3JtIGVsZW1lbnQgdG8gcnVuIHRoZSBtZXRob2Qgb25cbiAqIEBwYXJhbSByZXR1cm5WYWx1ZSB7Ym9vbGVhbn0gLSBUaGUgaW5pdGlhbCByZXN1bHQgb2YgdGhlIG9yaWdpbmFsIG1ldGhvZFxuICogQHBhcmFtIG1ldGhvZCB7J2NoZWNrVmFsaWRpdHknfCdyZXBvcnRWYWxpZGl0eSd9IC0gVGhlIG9yaWdpbmFsIG1ldGhvZFxuICogQHJldHVybnMge2Jvb2xlYW59IFRoZSBmb3JtJ3MgdmFsaWRpdHkgc3RhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG92ZXJyaWRlRm9ybU1ldGhvZCA9IChcbiAgZm9ybTogSFRNTEZvcm1FbGVtZW50LFxuICByZXR1cm5WYWx1ZTogYm9vbGVhbixcbiAgbWV0aG9kOiAnY2hlY2tWYWxpZGl0eScgfCAncmVwb3J0VmFsaWRpdHknXG4pOiBib29sZWFuID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGZvcm0pO1xuXG4gIC8qKiBTb21lIGZvcm1zIHdvbid0IGNvbnRhaW4gZm9ybSBhc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50cyAqL1xuICBpZiAoZWxlbWVudHMgJiYgZWxlbWVudHMuc2l6ZSkge1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQoZWxlbWVudCk7XG4gICAgICBjb25zdCB2YWxpZCA9IGludGVybmFsc1ttZXRob2RdKCk7XG4gICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIHJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufTtcblxuLyoqXG4gKiBXaWxsIHVwZ3JhZGUgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSBieSBpbml0aWFsaXppbmcgdGhlXG4gKiBpbnN0YW5jZSdzIGZvcm0gYW5kIGxhYmVscy4gVGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpc1xuICogZWl0aGVyIGNvbnN0cnVjdGVkIG9yIGFwcGVuZGVkIGZyb20gYSBEb2N1bWVudEZyYWdtZW50XG4gKiBAcGFyYW0gcmVmIHtJQ3VzdG9tRWxlbWVudH0gLSBUaGUgY3VzdG9tIGVsZW1lbnQgdG8gdXBncmFkZVxuICovXG5leHBvcnQgY29uc3QgdXBncmFkZUludGVybmFscyA9IChyZWY6IElDdXN0b21FbGVtZW50KSA9PiB7XG4gIGlmIChyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10pIHtcbiAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KHJlZik7XG4gICAgY29uc3QgeyBsYWJlbHMsIGZvcm0gfSA9IGludGVybmFscztcbiAgICBpbml0TGFiZWxzKHJlZiwgbGFiZWxzKTtcbiAgICBpbml0Rm9ybShyZWYsIGZvcm0sIGludGVybmFscyk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgdG8gc2VlIGlmIE11dGF0aW9uT2JzZXJ2ZXIgZXhpc3RzIGluIHRoZSBjdXJyZW50XG4gKiBleGVjdXRpb24gY29udGV4dC4gV2lsbCBsaWtlbHkgcmV0dXJuIGZhbHNlIG9uIHRoZSBzZXJ2ZXJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbXV0YXRpb25PYnNlcnZlckV4aXN0cygpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbn1cbiIsICJpbXBvcnQgeyBzZXRGb3JtVmFsaWRpdHkgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqIEVtdWxhdGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IFZhbGlkaXR5U3RhdGUgb2JqZWN0ICovXG5leHBvcnQgY2xhc3MgVmFsaWRpdHlTdGF0ZSBpbXBsZW1lbnRzIGdsb2JhbFRoaXMuVmFsaWRpdHlTdGF0ZSB7XG4gIGJhZElucHV0ID0gZmFsc2U7XG4gIGN1c3RvbUVycm9yID0gZmFsc2U7XG4gIHBhdHRlcm5NaXNtYXRjaCA9IGZhbHNlO1xuICByYW5nZU92ZXJmbG93ID0gZmFsc2U7XG4gIHJhbmdlVW5kZXJmbG93ID0gZmFsc2U7XG4gIHN0ZXBNaXNtYXRjaCA9IGZhbHNlO1xuICB0b29Mb25nID0gZmFsc2U7XG4gIHRvb1Nob3J0ID0gZmFsc2U7XG4gIHR5cGVNaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZCA9IHRydWU7XG4gIHZhbHVlTWlzc2luZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIE9iamVjdC5zZWFsKHRoaXMpO1xuICB9XG59XG5cbi8qKlxuICogUmVzZXQgYSBWYWxpZGl0eVN0YXRlIG9iamVjdCBiYWNrIHRvIHZhbGlkXG4gKiBAcGFyYW0ge1ZhbGlkaXR5U3RhdGV9IHZhbGlkaXR5T2JqZWN0IC0gVGhlIG9iamVjdCB0byBtb2RpZnlcbiAqIEByZXR1cm4ge1ZhbGlkaXR5U3RhdGV9IC0gVGhlIG1vZGlmaWVkIFZhbGlkaXR5U3RhdGVPYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IHNldFZhbGlkID0gKHZhbGlkaXR5T2JqZWN0OiBWYWxpZGl0eVN0YXRlKTogVmFsaWRpdHlTdGF0ZSA9PiB7XG4gIHZhbGlkaXR5T2JqZWN0LmJhZElucHV0ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LmN1c3RvbUVycm9yID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnBhdHRlcm5NaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC5yYW5nZU92ZXJmbG93ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnJhbmdlVW5kZXJmbG93ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnN0ZXBNaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC50b29Mb25nID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnRvb1Nob3J0ID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnR5cGVNaXNtYXRjaCA9IGZhbHNlO1xuICB2YWxpZGl0eU9iamVjdC52YWxpZCA9IHRydWU7XG4gIHZhbGlkaXR5T2JqZWN0LnZhbHVlTWlzc2luZyA9IGZhbHNlO1xuICByZXR1cm4gdmFsaWRpdHlPYmplY3Q7XG59O1xuXG4vKipcbiAqIFJlY29uY2lsZSBhIFZhbGlkaXR5U3RhdGUgb2JqZWN0IHdpdGggYSBuZXcgc3RhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge1ZhbGlkaXR5U3RhdGV9IC0gVGhlIGJhc2Ugb2JqZWN0IHRvIHJlY29uY2lsZSB3aXRoIG5ldyBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IC0gQSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0IHRvIG92ZXJyaWRlIHRoZSBvcmlnaW5hbFxuICogQHJldHVybiB7VmFsaWRpdHlTdGF0ZX0gLSBUaGUgdXBkYXRlZCBWYWxpZGl0eVN0YXRlIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgcmVjb25jaWxlVmFsaWRpdHkgPSAoXG4gIHZhbGlkaXR5T2JqZWN0OiBWYWxpZGl0eVN0YXRlLFxuICBuZXdTdGF0ZTogUGFydGlhbDxWYWxpZGl0eVN0YXRlPixcbiAgZm9ybTogSFRNTEZvcm1FbGVtZW50XG4pOiBWYWxpZGl0eVN0YXRlID0+IHtcbiAgdmFsaWRpdHlPYmplY3QudmFsaWQgPSBpc1ZhbGlkKG5ld1N0YXRlKTtcbiAgT2JqZWN0LmtleXMobmV3U3RhdGUpLmZvckVhY2goKGtleSkgPT4gKHZhbGlkaXR5T2JqZWN0W2tleV0gPSBuZXdTdGF0ZVtrZXldKSk7XG4gIGlmIChmb3JtKSB7XG4gICAgc2V0Rm9ybVZhbGlkaXR5KGZvcm0pO1xuICB9XG4gIHJldHVybiB2YWxpZGl0eU9iamVjdDtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0IHNob3VsZCBiZSB2YWxpZFxuICogQHBhcmFtIHtPYmplY3R9IC0gQSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSAtIFNob3VsZCB0aGUgbmV3IG9iamVjdCBiZSB2YWxpZFxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZCA9ICh2YWxpZGl0eVN0YXRlOiBQYXJ0aWFsPFZhbGlkaXR5U3RhdGU+KTogYm9vbGVhbiA9PiB7XG4gIGxldCB2YWxpZCA9IHRydWU7XG4gIGZvciAobGV0IGtleSBpbiB2YWxpZGl0eVN0YXRlKSB7XG4gICAgaWYgKGtleSAhPT0gJ3ZhbGlkJyAmJiB2YWxpZGl0eVN0YXRlW2tleV0gIT09IGZhbHNlKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsaWQ7XG59O1xuIiwgImltcG9ydCB7IElDdXN0b21FbGVtZW50IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbi8qKiBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSByZWYgZm9yIHRlaCBDdXN0b21TdGF0ZVNldCAqL1xuY29uc3QgY3VzdG9tU3RhdGVNYXAgPSBuZXcgV2Vha01hcDxDdXN0b21TdGF0ZVNldCwgSUN1c3RvbUVsZW1lbnQ+KCk7XG5cbmZ1bmN0aW9uIGFkZFN0YXRlKHJlZjogSUN1c3RvbUVsZW1lbnQsIHN0YXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gIHJlZi50b2dnbGVBdHRyaWJ1dGUoc3RhdGVOYW1lLCB0cnVlKTtcbiAgaWYgKHJlZi5wYXJ0KSB7XG4gICAgcmVmLnBhcnQuYWRkKHN0YXRlTmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ3VzdG9tU3RhdGUgPSBgLS0ke3N0cmluZ31gO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tU3RhdGVTZXQgZXh0ZW5kcyBTZXQ8Q3VzdG9tU3RhdGU+IHtcbiAgc3RhdGljIGdldCBpc1BvbHlmaWxsZWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyZWY6IElDdXN0b21FbGVtZW50KSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoIXJlZiB8fCAhcmVmLnRhZ05hbWUgfHwgcmVmLnRhZ05hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSWxsZWdhbCBjb25zdHJ1Y3RvcicpO1xuICAgIH1cblxuICAgIGN1c3RvbVN0YXRlTWFwLnNldCh0aGlzLCByZWYpO1xuICB9XG5cbiAgYWRkKHN0YXRlOiBDdXN0b21TdGF0ZSkge1xuICAgIGlmICghL14tLS8udGVzdChzdGF0ZSkgfHwgdHlwZW9mIHN0YXRlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdhZGQnIG9uICdDdXN0b21TdGF0ZVNldCc6IFRoZSBzcGVjaWZpZWQgdmFsdWUgJHtzdGF0ZX0gbXVzdCBzdGFydCB3aXRoICctLScuYFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuYWRkKHN0YXRlKTtcbiAgICBjb25zdCByZWYgPSBjdXN0b21TdGF0ZU1hcC5nZXQodGhpcyk7XG4gICAgY29uc3Qgc3RhdGVOYW1lID0gYHN0YXRlJHtzdGF0ZX1gO1xuXG4gICAgLyoqXG4gICAgICogT25seSBhZGQgdGhlIHN0YXRlIGltbWVkaWF0ZWx5IGlmIHRoZSByZWYgaXMgY29ubmVjdGVkIHRvIHRoZSBET007XG4gICAgICogb3RoZXJ3aXNlLCB3YWl0IGEgdGljayBiZWNhdXNlIHRoZSBlbGVtZW50IGlzIGxpa2VseSBiZWluZyBjb25zdHJ1Y3RlZFxuICAgICAqIGJ5IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgYW5kIHdvdWxkIHRocm93IG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBpZiAocmVmLmlzQ29ubmVjdGVkKSB7XG4gICAgICBhZGRTdGF0ZShyZWYsIHN0YXRlTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhZGRTdGF0ZShyZWYsIHN0YXRlTmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgZm9yIChsZXQgW2VudHJ5XSBvZiB0aGlzLmVudHJpZXMoKSkge1xuICAgICAgdGhpcy5kZWxldGUoZW50cnkpO1xuICAgIH1cbiAgICBzdXBlci5jbGVhcigpO1xuICB9XG5cbiAgZGVsZXRlKHN0YXRlOiBDdXN0b21TdGF0ZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLmRlbGV0ZShzdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gY3VzdG9tU3RhdGVNYXAuZ2V0KHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogT25seSB0b2dnbGUgdGhlIHN0YXRlL2F0dHIgaW1tZWRpYXRlbHkgaWYgdGhlIHJlZiBpcyBjb25uZWN0ZWQgdG8gdGhlIERPTTtcbiAgICAgKiBvdGhlcndpc2UsIHdhaXQgYSB0aWNrIGJlY2F1c2UgdGhlIGVsZW1lbnQgaXMgbGlrZWx5IGJlaW5nIGNvbnN0cnVjdGVkXG4gICAgICogYnkgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBhbmQgd291bGQgdGhyb3cgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoYHN0YXRlJHtzdGF0ZX1gLCBmYWxzZSk7XG4gICAgICBpZiAocmVmLnBhcnQpIHtcbiAgICAgICAgcmVmLnBhcnQucmVtb3ZlKGBzdGF0ZSR7c3RhdGV9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZWYudG9nZ2xlQXR0cmlidXRlKGBzdGF0ZSR7c3RhdGV9YCwgZmFsc2UpO1xuICAgICAgICBpZiAocmVmLnBhcnQpIHtcbiAgICAgICAgICByZWYucGFydC5yZW1vdmUoYHN0YXRlJHtzdGF0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwgImV4cG9ydCBjbGFzcyBIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbiBpbXBsZW1lbnRzIGdsb2JhbFRoaXMuSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24ge1xuICByZWFkb25seSAjZWxlbWVudHM7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICB0aGlzLiNlbGVtZW50cyA9IGVsZW1lbnRzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcblxuICAgICAgdGhpc1tpXSA9IGVsZW1lbnQ7XG4gICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICB0aGlzW2VsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJyldID0gZWxlbWVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgW2luZGV4OiBudW1iZXJdOiBFbGVtZW50O1xuXG4gIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy4jZWxlbWVudHMubGVuZ3RoO1xuICB9XG5cbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2VsZW1lbnRzW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgfVxuXG4gIGl0ZW0oaSk6IEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzW2ldID09IG51bGwgPyBudWxsIDogdGhpc1tpXTtcbiAgfVxuXG4gIG5hbWVkSXRlbShuYW1lKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXNbbmFtZV0gPT0gbnVsbCA/IG51bGwgOiB0aGlzW25hbWVdO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24gfSBmcm9tICcuL0hUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uLmpzJztcbmltcG9ydCB7IGZvcm1FbGVtZW50c01hcCB9IGZyb20gJy4vbWFwcy5qcyc7XG5pbXBvcnQgeyBvdmVycmlkZUZvcm1NZXRob2QgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBQYXRjaCB0aGUgSFRNTEVsZW1lbnQgcHJvdG90eXBlXG4gKlxuICogVGhpcyBmdW5jdGlvbiBwYXRjaGVzIGNoZWNrVmFsaWRpdHksIHJlcG9ydFZhbGlkaXR5IGFuZCBlbGVtZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hGb3JtUHJvdG90eXBlKCk6IHZvaWQge1xuICBjb25zdCBjaGVja1ZhbGlkaXR5ID0gSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5jaGVja1ZhbGlkaXR5O1xuICBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmNoZWNrVmFsaWRpdHkgPSBjaGVja1ZhbGlkaXR5T3ZlcnJpZGU7XG5cbiAgY29uc3QgcmVwb3J0VmFsaWRpdHkgPSBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLnJlcG9ydFZhbGlkaXR5O1xuICBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLnJlcG9ydFZhbGlkaXR5ID0gcmVwb3J0VmFsaWRpdHlPdmVycmlkZTtcblxuICBmdW5jdGlvbiBjaGVja1ZhbGlkaXR5T3ZlcnJpZGUoLi4uYXJncyk6IGJvb2xlYW4ge1xuICAgIGxldCByZXR1cm5WYWx1ZSA9IGNoZWNrVmFsaWRpdHkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgcmV0dXJuIG92ZXJyaWRlRm9ybU1ldGhvZCh0aGlzLCByZXR1cm5WYWx1ZSwgJ2NoZWNrVmFsaWRpdHknKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcG9ydFZhbGlkaXR5T3ZlcnJpZGUoLi4uYXJncyk6IGJvb2xlYW4ge1xuICAgIGxldCByZXR1cm5WYWx1ZSA9IHJlcG9ydFZhbGlkaXR5LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHJldHVybiBvdmVycmlkZUZvcm1NZXRob2QodGhpcywgcmV0dXJuVmFsdWUsICdyZXBvcnRWYWxpZGl0eScpO1xuICB9XG5cbiAgY29uc3QgeyBnZXQgfSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZSwgJ2VsZW1lbnRzJyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLCAnZWxlbWVudHMnLCB7XG4gICAgZ2V0KC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZ2V0LmNhbGwodGhpcywgLi4uYXJncyk7XG4gICAgICBjb25zdCBwb2x5ZmlsbGVkRWxlbWVudHMgPSBBcnJheS5mcm9tKGZvcm1FbGVtZW50c01hcC5nZXQodGhpcykgfHwgW10pO1xuXG4gICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gcG9seWZpbGxlZCBlbGVtZW50cywgcmV0dXJuIHRoZSBuYXRpdmUgZWxlbWVudHMgY29sbGVjdGlvblxuICAgICAgaWYgKHBvbHlmaWxsZWRFbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgICAgfVxuXG4gICAgICAvLyBNZXJnZSB0aGUgbmF0aXZlIGVsZW1lbnRzIHdpdGggdGhlIHBvbHlmaWxsZWQgZWxlbWVudHNcbiAgICAgIC8vIGFuZCBvcmRlciB0aGVtIGJ5IHRoZWlyIHBvc2l0aW9uIGluIHRoZSBET01cbiAgICAgIGNvbnN0IG9yZGVyZWRFbGVtZW50cyA9IEFycmF5LmZyb20oZWxlbWVudHMpXG4gICAgICAgIC5jb25jYXQocG9seWZpbGxlZEVsZW1lbnRzKVxuICAgICAgICAuc29ydCgoYTogRWxlbWVudCwgYjogRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKSAmIDIgPyAxIDogLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ldyBIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbihvcmRlcmVkRWxlbWVudHMpO1xuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIGNvbm5lY3RlZENhbGxiYWNrTWFwLFxuICBpbnRlcm5hbHNNYXAsXG4gIHJlZk1hcCxcbiAgcmVmVmFsdWVNYXAsXG4gIHNoYWRvd0hvc3RzTWFwLFxuICBzaGFkb3dSb290TWFwLFxuICB2YWxpZGF0aW9uQW5jaG9yTWFwLFxuICB2YWxpZGl0eU1hcCxcbiAgdmFsaWRhdGlvbk1lc3NhZ2VNYXAsXG4gIHZhbGlkaXR5VXBncmFkZU1hcCxcbn0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7XG4gIGNyZWF0ZUhpZGRlbklucHV0LFxuICBmaW5kUGFyZW50Rm9ybSxcbiAgaW5pdFJlZixcbiAgbXV0YXRpb25PYnNlcnZlckV4aXN0cyxcbiAgcmVtb3ZlSGlkZGVuSW5wdXRzLFxuICBzZXREaXNhYmxlZCxcbiAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkLFxuICB1cGdyYWRlSW50ZXJuYWxzLFxufSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IGluaXRBb20gfSBmcm9tICcuL2FvbS5qcyc7XG5pbXBvcnQgeyBWYWxpZGl0eVN0YXRlLCByZWNvbmNpbGVWYWxpZGl0eSwgc2V0VmFsaWQgfSBmcm9tICcuL1ZhbGlkaXR5U3RhdGUuanMnO1xuaW1wb3J0IHsgZGVmZXJVcGdyYWRlLCBvYnNlcnZlckNhbGxiYWNrLCBvYnNlcnZlckNvbmZpZyB9IGZyb20gJy4vbXV0YXRpb24tb2JzZXJ2ZXJzLmpzJztcbmltcG9ydCB7IElFbGVtZW50SW50ZXJuYWxzLCBJQ3VzdG9tRWxlbWVudCwgTGFiZWxzTGlzdCB9IGZyb20gJy4vdHlwZXMuanMnO1xuaW1wb3J0IHsgQ3VzdG9tU3RhdGVTZXQgfSBmcm9tICcuL0N1c3RvbVN0YXRlU2V0LmpzJztcbmltcG9ydCB7IHBhdGNoRm9ybVByb3RvdHlwZSB9IGZyb20gJy4vcGF0Y2gtZm9ybS1wcm90b3R5cGUuanMnO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICdsaXQtaHRtbC9pcy1zZXJ2ZXIuanMnO1xuXG5leHBvcnQgY2xhc3MgRWxlbWVudEludGVybmFscyBpbXBsZW1lbnRzIElFbGVtZW50SW50ZXJuYWxzIHtcbiAgYXJpYUF0b21pYzogc3RyaW5nO1xuICBhcmlhQXV0b0NvbXBsZXRlOiBzdHJpbmc7XG4gIGFyaWFCdXN5OiBzdHJpbmc7XG4gIGFyaWFDaGVja2VkOiBzdHJpbmc7XG4gIGFyaWFDb2xDb3VudDogc3RyaW5nO1xuICBhcmlhQ29sSW5kZXg6IHN0cmluZztcbiAgYXJpYUNvbEluZGV4VGV4dDogc3RyaW5nO1xuICBhcmlhQ29sU3Bhbjogc3RyaW5nO1xuICBhcmlhQ3VycmVudDogc3RyaW5nO1xuICBhcmlhRGlzYWJsZWQ6IHN0cmluZztcbiAgYXJpYUV4cGFuZGVkOiBzdHJpbmc7XG4gIGFyaWFIYXNQb3B1cDogc3RyaW5nO1xuICBhcmlhSGlkZGVuOiBzdHJpbmc7XG4gIGFyaWFJbnZhbGlkOiBzdHJpbmc7XG4gIGFyaWFLZXlTaG9ydGN1dHM6IHN0cmluZztcbiAgYXJpYUxhYmVsOiBzdHJpbmc7XG4gIGFyaWFMZXZlbDogc3RyaW5nO1xuICBhcmlhTGl2ZTogc3RyaW5nO1xuICBhcmlhTW9kYWw6IHN0cmluZztcbiAgYXJpYU11bHRpTGluZTogc3RyaW5nO1xuICBhcmlhTXVsdGlTZWxlY3RhYmxlOiBzdHJpbmc7XG4gIGFyaWFPcmllbnRhdGlvbjogc3RyaW5nO1xuICBhcmlhUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgYXJpYVBvc0luU2V0OiBzdHJpbmc7XG4gIGFyaWFQcmVzc2VkOiBzdHJpbmc7XG4gIGFyaWFSZWFkT25seTogc3RyaW5nO1xuICBhcmlhUmVsZXZhbnQ6IHN0cmluZztcbiAgYXJpYVJlcXVpcmVkOiBzdHJpbmc7XG4gIGFyaWFSb2xlRGVzY3JpcHRpb246IHN0cmluZztcbiAgYXJpYVJvd0NvdW50OiBzdHJpbmc7XG4gIGFyaWFSb3dJbmRleDogc3RyaW5nO1xuICBhcmlhUm93SW5kZXhUZXh0OiBzdHJpbmc7XG4gIGFyaWFSb3dTcGFuOiBzdHJpbmc7XG4gIGFyaWFTZWxlY3RlZDogc3RyaW5nO1xuICBhcmlhU2V0U2l6ZTogc3RyaW5nO1xuICBhcmlhU29ydDogc3RyaW5nO1xuICBhcmlhVmFsdWVNYXg6IHN0cmluZztcbiAgYXJpYVZhbHVlTWluOiBzdHJpbmc7XG4gIGFyaWFWYWx1ZU5vdzogc3RyaW5nO1xuICBhcmlhVmFsdWVUZXh0OiBzdHJpbmc7XG4gIHJvbGU6IHN0cmluZztcblxuICBzdGF0ZXM6IEN1c3RvbVN0YXRlU2V0O1xuXG4gIHN0YXRpYyBnZXQgaXNQb2x5ZmlsbGVkKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocmVmOiBJQ3VzdG9tRWxlbWVudCkge1xuICAgIGlmICghcmVmIHx8ICFyZWYudGFnTmFtZSB8fCByZWYudGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbGxlZ2FsIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuICAgIGNvbnN0IHJvb3ROb2RlID0gcmVmLmdldFJvb3ROb2RlKCk7XG4gICAgY29uc3QgdmFsaWRpdHkgPSBuZXcgVmFsaWRpdHlTdGF0ZSgpO1xuICAgIHRoaXMuc3RhdGVzID0gbmV3IEN1c3RvbVN0YXRlU2V0KHJlZik7XG4gICAgcmVmTWFwLnNldCh0aGlzLCByZWYpO1xuICAgIHZhbGlkaXR5TWFwLnNldCh0aGlzLCB2YWxpZGl0eSk7XG4gICAgaW50ZXJuYWxzTWFwLnNldChyZWYsIHRoaXMpO1xuICAgIGluaXRBb20ocmVmLCB0aGlzKTtcbiAgICBpbml0UmVmKHJlZiwgdGhpcyk7XG4gICAgT2JqZWN0LnNlYWwodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBJZiBhcHBlbmRlZCBmcm9tIGEgRG9jdW1lbnRGcmFnbWVudCwgd2FpdCB1bnRpbCBpdCBpcyBjb25uZWN0ZWRcbiAgICAgKiBiZWZvcmUgYXR0ZW1wdGluZyB0byB1cGdyYWRlIHRoZSBpbnRlcm5hbHMgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBpZiAocm9vdE5vZGUgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICBkZWZlclVwZ3JhZGUocm9vdE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaWxsIHJldHVybiB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGluIGEgdmFsaWQgc3RhdGVcbiAgICovXG4gIGNoZWNrVmFsaWRpdHkoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ2NoZWNrVmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICAvKiogSWYgdGhlIGVsZW1lbnQgd2lsbCBub3QgdmFsaWRhdGUsIGl0IGlzIG5lY2Vzc2FyaWx5IHZhbGlkIGJ5IGRlZmF1bHQgKi9cbiAgICBpZiAoIXRoaXMud2lsbFZhbGlkYXRlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcC5nZXQodGhpcyk7XG4gICAgaWYgKCF2YWxpZGl0eS52YWxpZCkge1xuICAgICAgY29uc3QgdmFsaWRpdHlFdmVudCA9IG5ldyBFdmVudCgnaW52YWxpZCcsIHtcbiAgICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgIGNvbXBvc2VkOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgcmVmLmRpc3BhdGNoRXZlbnQodmFsaWRpdHlFdmVudCk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZGl0eS52YWxpZDtcbiAgfVxuXG4gIC8qKiBUaGUgZm9ybSBlbGVtZW50IHRoZSBjdXN0b20gZWxlbWVudCBpcyBhc3NvY2lhdGVkIHdpdGggKi9cbiAgZ2V0IGZvcm0oKTogSFRNTEZvcm1FbGVtZW50IHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ2Zvcm0nIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGxldCBmb3JtO1xuICAgIGlmIChyZWYuY29uc3RydWN0b3JbJ2Zvcm1Bc3NvY2lhdGVkJ10gPT09IHRydWUpIHtcbiAgICAgIGZvcm0gPSBmaW5kUGFyZW50Rm9ybShyZWYpO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIC8qKiBBIGxpc3Qgb2YgYWxsIHJlbGF0aXZlIGZvcm0gbGFiZWxzIGZvciB0aGlzIGVsZW1lbnQgKi9cbiAgZ2V0IGxhYmVscygpOiBMYWJlbHNMaXN0IHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ2xhYmVscycgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgY29uc3QgaWQgPSByZWYuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGNvbnN0IGhvc3RSb290ID0gcmVmLmdldFJvb3ROb2RlKCkgYXMgRWxlbWVudDtcbiAgICBpZiAoaG9zdFJvb3QgJiYgaWQpIHtcbiAgICAgIHJldHVybiBob3N0Um9vdC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxMYWJlbEVsZW1lbnQ+KGBbZm9yPVwiJHtpZH1cIl1gKSBhcyB1bmtub3duIGFzIExhYmVsc0xpc3Q7XG4gICAgfVxuICAgIHJldHVybiBbXSBhcyB1bmtub3duIGFzIExhYmVsc0xpc3Q7XG4gIH1cblxuICAvKiogV2lsbCByZXBvcnQgdGhlIGVsZW1lbnRzIHZhbGlkaXR5IHN0YXRlICovXG4gIHJlcG9ydFZhbGlkaXR5KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdyZXBvcnRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIC8qKiBJZiB0aGUgZWxlbWVudCB3aWxsIG5vdCB2YWxpZGF0ZSwgaXQgaXMgdmFsaWQgYnkgZGVmYXVsdCAqL1xuICAgIGlmICghdGhpcy53aWxsVmFsaWRhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB2YWxpZCA9IHRoaXMuY2hlY2tWYWxpZGl0eSgpO1xuICAgIGNvbnN0IGFuY2hvciA9IHZhbGlkYXRpb25BbmNob3JNYXAuZ2V0KHRoaXMpO1xuICAgIGlmIChhbmNob3IgJiYgIXJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdyZXBvcnRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghdmFsaWQgJiYgYW5jaG9yKSB7XG4gICAgICByZWYuZm9jdXMoKTtcbiAgICAgIGFuY2hvci5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgZWxlbWVudCdzIHZhbHVlIHdpdGhpbiB0aGUgZm9ybSAqL1xuICBzZXRGb3JtVmFsdWUodmFsdWU6IHN0cmluZyB8IEZvcm1EYXRhIHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdzZXRGb3JtVmFsdWUnIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICByZW1vdmVIaWRkZW5JbnB1dHModGhpcyk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1EYXRhKSkge1xuICAgICAgaWYgKHJlZi5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICBjb25zdCBoaWRkZW5JbnB1dCA9IGNyZWF0ZUhpZGRlbklucHV0KHJlZiwgdGhpcyk7XG4gICAgICAgIGhpZGRlbklucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgIEFycmF5LmZyb20odmFsdWUpXG4gICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgLmZvckVhY2goKFtmb3JtRGF0YUtleSwgZm9ybURhdGFWYWx1ZV0pID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGZvcm1EYXRhVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBoaWRkZW5JbnB1dCA9IGNyZWF0ZUhpZGRlbklucHV0KHJlZiwgdGhpcyk7XG4gICAgICAgICAgICBoaWRkZW5JbnB1dC5uYW1lID0gZm9ybURhdGFLZXk7XG4gICAgICAgICAgICBoaWRkZW5JbnB1dC52YWx1ZSA9IGZvcm1EYXRhVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVmVmFsdWVNYXAuc2V0KHJlZiwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGVsZW1lbnQncyB2YWxpZGl0eS4gVGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgcGFydGlhbCBWYWxpZGl0eVN0YXRlIG9iamVjdFxuICAgKiByZWZsZWN0aW5nIHRoZSBjaGFuZ2VzIHRvIGJlIG1hZGUgdG8gdGhlIGVsZW1lbnQncyB2YWxpZGl0eS4gSWYgdGhlIGVsZW1lbnQgaXMgaW52YWxpZCxcbiAgICogdGhlIHNlY29uZCBhcmd1bWVudCBzZXRzIHRoZSBlbGVtZW50J3MgdmFsaWRhdGlvbiBtZXNzYWdlLlxuICAgKlxuICAgKiBJZiB0aGUgZmllbGQgaXMgdmFsaWQgYW5kIGEgbWVzc2FnZSBpcyBzcGVjaWZpZWQsIHRoZSBtZXRob2Qgd2lsbCB0aHJvdyBhIFR5cGVFcnJvci5cbiAgICovXG4gIHNldFZhbGlkaXR5KFxuICAgIHZhbGlkaXR5Q2hhbmdlczogUGFydGlhbDxnbG9iYWxUaGlzLlZhbGlkaXR5U3RhdGU+LFxuICAgIHZhbGlkYXRpb25NZXNzYWdlPzogc3RyaW5nLFxuICAgIGFuY2hvcj86IEhUTUxFbGVtZW50XG4gICkge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdzZXRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGlmICghdmFsaWRpdHlDaGFuZ2VzKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBcIkZhaWxlZCB0byBleGVjdXRlICdzZXRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIHZhbGlkYXRpb25BbmNob3JNYXAuc2V0KHRoaXMsIGFuY2hvcik7XG4gICAgY29uc3QgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcC5nZXQodGhpcyk7XG4gICAgY29uc3QgdmFsaWRpdHlDaGFuZ2VzT2JqOiBQYXJ0aWFsPFZhbGlkaXR5U3RhdGU+ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsaWRpdHlDaGFuZ2VzKSB7XG4gICAgICB2YWxpZGl0eUNoYW5nZXNPYmpba2V5XSA9IHZhbGlkaXR5Q2hhbmdlc1trZXldO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LmtleXModmFsaWRpdHlDaGFuZ2VzT2JqKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldFZhbGlkKHZhbGlkaXR5KTtcbiAgICB9XG4gICAgY29uc3QgY2hlY2sgPSB7IC4uLnZhbGlkaXR5LCAuLi52YWxpZGl0eUNoYW5nZXNPYmogfTtcbiAgICBkZWxldGUgY2hlY2sudmFsaWQ7XG4gICAgY29uc3QgeyB2YWxpZCB9ID0gcmVjb25jaWxlVmFsaWRpdHkodmFsaWRpdHksIGNoZWNrLCB0aGlzLmZvcm0pO1xuXG4gICAgaWYgKCF2YWxpZCAmJiAhdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnc2V0VmFsaWRpdHknIG9uICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHNlY29uZCBhcmd1bWVudCBzaG91bGQgbm90IGJlIGVtcHR5IGlmIG9uZSBvciBtb3JlIGZsYWdzIGluIHRoZSBmaXJzdCBhcmd1bWVudCBhcmUgdHJ1ZS5gXG4gICAgICApO1xuICAgIH1cbiAgICB2YWxpZGF0aW9uTWVzc2FnZU1hcC5zZXQodGhpcywgdmFsaWQgPyAnJyA6IHZhbGlkYXRpb25NZXNzYWdlKTtcblxuICAgIC8vIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgaG9zdCBlbGVtZW50IGlzIGNvbm5lY3RlZCBiZWZvcmUgYWRkaW5nIGF0dHJpYnV0ZXNcbiAgICAvLyBiZWNhdXNlIHNhZmFyaSBkb2VzbnQgYWxsb3cgZWxlbWVudHMgdG8gaGF2ZSBhdHRyaWJ1dGVzIGFkZGVkIGluIHRoZSBjb25zdHJ1Y3RvclxuICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy1pbnZhbGlkJywgIXZhbGlkKTtcbiAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoJ2ludGVybmFscy12YWxpZCcsIHZhbGlkKTtcbiAgICAgIHJlZi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIGAkeyF2YWxpZH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRpdHlVcGdyYWRlTWFwLnNldChyZWYsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzaGFkb3dSb290KCk6IFNoYWRvd1Jvb3QgfCBudWxsIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBzaGFkb3dSb290TWFwLmdldChyZWYpO1xuICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICByZXR1cm4gc2hhZG93Um9vdDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiogVGhlIGVsZW1lbnQncyB2YWxpZGF0aW9uIG1lc3NhZ2Ugc2V0IGR1cmluZyBhIGNhbGwgdG8gRWxlbWVudEludGVybmFscy5zZXRWYWxpZGl0eSAqL1xuICBnZXQgdmFsaWRhdGlvbk1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ3ZhbGlkYXRpb25NZXNzYWdlJyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICByZXR1cm4gdmFsaWRhdGlvbk1lc3NhZ2VNYXAuZ2V0KHRoaXMpO1xuICB9XG5cbiAgLyoqIFRoZSBjdXJyZW50IHZhbGlkaXR5IHN0YXRlIG9mIHRoZSBvYmplY3QgKi9cbiAgZ2V0IHZhbGlkaXR5KCk6IGdsb2JhbFRoaXMuVmFsaWRpdHlTdGF0ZSB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIHJlYWQgdGhlICd2YWxpZGl0eScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgY29uc3QgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcC5nZXQodGhpcyk7XG4gICAgcmV0dXJuIHZhbGlkaXR5O1xuICB9XG5cbiAgLyoqIElmIHRydWUgdGhlIGVsZW1lbnQgd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhIGZvcm0ncyBjb25zdHJhaW50IHZhbGlkYXRpb24uICovXG4gIGdldCB3aWxsVmFsaWRhdGUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIHJlYWQgdGhlICd3aWxsVmFsaWRhdGUnIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIGlmIChyZWYuZGlzYWJsZWQgfHwgcmVmLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fCByZWYuaGFzQXR0cmlidXRlKCdyZWFkb25seScpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8vIC0tLSBEaXNhYmxpbmcgdGhpcyB0eXBlIGRlY2xhcmF0aW9uIHRvIGF2b2lkIGNvbmZsaWN0IHdpdGggZXh0ZXJuYWwgZWxlbWVudC1pbnRlcm5hbHMtcG9seWZpbGwgdHlwZXMgLS0tXG4vLyBkZWNsYXJlIGdsb2JhbCB7XG4vLyAgIGludGVyZmFjZSBDdXN0b21FbGVtZW50Q29uc3RydWN0b3Ige1xuLy8gICAgIGZvcm1Bc3NvY2lhdGVkPzogYm9vbGVhbjtcbi8vICAgfVxuXG4vLyAgIGludGVyZmFjZSBXaW5kb3cge1xuLy8gICAgIEVsZW1lbnRJbnRlcm5hbHM6IHR5cGVvZiBFbGVtZW50SW50ZXJuYWxzO1xuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnRJbnRlcm5hbHNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gIGlmIChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICF3aW5kb3cuRWxlbWVudEludGVybmFscyB8fFxuICAgICFIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNsYXNzIEVsZW1lbnRJbnRlcm5hbHNGZWF0dXJlRGV0ZWN0aW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLmludGVybmFscyA9IHRoaXMuYXR0YWNoSW50ZXJuYWxzKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHJhbmRvbU5hbWUgPSBgZWxlbWVudC1pbnRlcm5hbHMtZmVhdHVyZS1kZXRlY3Rpb24tJHtNYXRoLnJhbmRvbSgpXG4gICAgLnRvU3RyaW5nKDM2KVxuICAgIC5yZXBsYWNlKC9bXmEtel0rL2csICcnKX1gO1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUocmFuZG9tTmFtZSwgRWxlbWVudEludGVybmFsc0ZlYXR1cmVEZXRlY3Rpb24pO1xuICBjb25zdCBmZWF0dXJlRGV0ZWN0aW9uRWxlbWVudCA9IG5ldyBFbGVtZW50SW50ZXJuYWxzRmVhdHVyZURldGVjdGlvbigpO1xuICByZXR1cm4gW1xuICAgICdzaGFkb3dSb290JyxcbiAgICAnZm9ybScsXG4gICAgJ3dpbGxWYWxpZGF0ZScsXG4gICAgJ3ZhbGlkaXR5JyxcbiAgICAndmFsaWRhdGlvbk1lc3NhZ2UnLFxuICAgICdsYWJlbHMnLFxuICAgICdzZXRGb3JtVmFsdWUnLFxuICAgICdzZXRWYWxpZGl0eScsXG4gICAgJ2NoZWNrVmFsaWRpdHknLFxuICAgICdyZXBvcnRWYWxpZGl0eScsXG4gIF0uZXZlcnkoKHByb3ApID0+IHByb3AgaW4gZmVhdHVyZURldGVjdGlvbkVsZW1lbnQuaW50ZXJuYWxzKTtcbn1cblxuLy8gT25seSBpbmNsdWRlcyB0aGlzIHBvbHlmaWxsIGlmIHdlIGFyZSBpbiBhIGplc3QgcnVubmVyIG9yIG5vdCBpbiBTU1JcbmlmIChcbiAgIWlzU2VydmVyIHx8XG4gICgocHJvY2VzcyBhcyBhbnkpPy5lbnYuSkVTVF9XT1JLRVJfSUQgIT09IHVuZGVmaW5lZCAmJiAocHJvY2VzcyBhcyBhbnkpPy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0Jylcbikge1xuICBpZiAoIWlzRWxlbWVudEludGVybmFsc1N1cHBvcnRlZCgpKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvKiogQHRzLWV4cGVjdC1lcnJvcjogd2UgbmVlZCB0byByZXBsYWNlIHRoZSBkZWZhdWx0IEVsZW1lbnRJbnRlcm5hbHMgKi9cbiAgICAgIHdpbmRvdy5FbGVtZW50SW50ZXJuYWxzID0gRWxlbWVudEludGVybmFscztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGRlZmluZSA9IEN1c3RvbUVsZW1lbnRSZWdpc3RyeS5wcm90b3R5cGUuZGVmaW5lO1xuICAgICAgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5kZWZpbmUgPSBmdW5jdGlvbiAobmFtZSwgY29uc3RydWN0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9yLmZvcm1Bc3NvY2lhdGVkKSB7XG4gICAgICAgICAgY29uc3QgY29ubmVjdGVkQ2FsbGJhY2sgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2s7XG4gICAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFjb25uZWN0ZWRDYWxsYmFja01hcC5oYXModGhpcykpIHtcbiAgICAgICAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2tNYXAuc2V0KHRoaXMsIHRydWUpO1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgIHNldERpc2FibGVkKHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25uZWN0ZWRDYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbm5lY3RlZENhbGxiYWNrLmFwcGx5KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWx3YXlzIHVwZ3JhZGVJbnRlcm5hbHMgaW4gY29ubmVjdGVkQ2FsbGJhY2sgaW5zdGVhZCBvZiBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgdXBncmFkZUludGVybmFscyh0aGlzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmaW5lLmNhbGwodGhpcywgbmFtZSwgY29uc3RydWN0b3IsIG9wdGlvbnMpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGEgY3VzdG9tIGVsZW1lbnQuIENhbGxpbmcgdGhpcyBtZXRob2RcbiAgICAgKiBvbiBhIGJ1aWx0LWluIGVsZW1lbnQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgICAgKi9cbiAgICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEludGVybmFscyA9IGZ1bmN0aW9uICgpOiBJRWxlbWVudEludGVybmFscyB7XG4gICAgICAgIGlmICghdGhpcy50YWdOYW1lKSB7XG4gICAgICAgICAgLyoqIFRoaXMgaGFwcGVucyBpbiB0aGUgTGl0U1NSIGVudmlyb25tZW50LiBIZXJlIHdlIGNhbiBnZW5lcmFsbHkgaWdub3JlIGludGVybmFscyBmb3Igbm93ICovXG4gICAgICAgICAgcmV0dXJuIHt9IGFzIG9iamVjdCBhcyBJRWxlbWVudEludGVybmFscztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhZ05hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnYXR0YWNoSW50ZXJuYWxzJyBvbiAnSFRNTEVsZW1lbnQnOiBVbmFibGUgdG8gYXR0YWNoIEVsZW1lbnRJbnRlcm5hbHMgdG8gbm9uLWN1c3RvbSBlbGVtZW50cy5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW50ZXJuYWxzTWFwLmhhcyh0aGlzKSkge1xuICAgICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgICAgICBgRE9NRXhjZXB0aW9uOiBGYWlsZWQgdG8gZXhlY3V0ZSAnYXR0YWNoSW50ZXJuYWxzJyBvbiAnSFRNTEVsZW1lbnQnOiBFbGVtZW50SW50ZXJuYWxzIGZvciB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgd2FzIGFscmVhZHkgYXR0YWNoZWQuYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50SW50ZXJuYWxzKHRoaXMpIGFzIElFbGVtZW50SW50ZXJuYWxzO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8taW5uZXItZGVjbGFyYXRpb25zXG4gICAgICBmdW5jdGlvbiBhdHRhY2hTaGFkb3dPYnNlcnZlciguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBhdHRhY2hTaGFkb3cuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIHNoYWRvd1Jvb3RNYXAuc2V0KHRoaXMsIHNoYWRvd1Jvb3QpO1xuXG4gICAgICAgIGlmIChtdXRhdGlvbk9ic2VydmVyRXhpc3RzKCkpIHtcbiAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spO1xuICAgICAgICAgIGlmICh3aW5kb3cuU2hhZHlET00pIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGhpcywgb2JzZXJ2ZXJDb25maWcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNoYWRvd1Jvb3QsIG9ic2VydmVyQ29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2hhZG93SG9zdHNNYXAuc2V0KHRoaXMsIG9ic2VydmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hhZG93Um9vdDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYXR0YWNoU2hhZG93ID0gRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93O1xuICAgICAgRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93ID0gYXR0YWNoU2hhZG93T2JzZXJ2ZXI7XG4gICAgfVxuXG4gICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKSkge1xuICAgICAgY29uc3QgZG9jdW1lbnRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spO1xuICAgICAgZG9jdW1lbnRPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgb2JzZXJ2ZXJDb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEtlZXBzIHRoZSBwb2x5ZmlsbCBmcm9tIHRocm93aW5nIGluIGVudmlyb25tZW50cyB3aGVyZSBIVE1MRm9ybUVsZW1lbnRcbiAgICAgKiBpcyB1bmRlZmluZWQgbGlrZSBpbiBhIHNlcnZlciBlbnZpcm9ubWVudFxuICAgICAqL1xuICAgIGlmICh0eXBlb2YgSFRNTEZvcm1FbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcGF0Y2hGb3JtUHJvdG90eXBlKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3cuQ3VzdG9tU3RhdGVTZXQpIHtcbiAgICAgIHdpbmRvdy5DdXN0b21TdGF0ZVNldCA9IEN1c3RvbVN0YXRlU2V0O1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93LkN1c3RvbVN0YXRlU2V0KSB7XG4gICAgd2luZG93LkN1c3RvbVN0YXRlU2V0ID0gQ3VzdG9tU3RhdGVTZXQ7XG4gICAgY29uc3QgYXR0YWNoSW50ZXJuYWxzID0gSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEludGVybmFscztcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IGludGVybmFscyA9IGF0dGFjaEludGVybmFscy5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgICAgaW50ZXJuYWxzLnN0YXRlcyA9IG5ldyBDdXN0b21TdGF0ZVNldCh0aGlzKTtcbiAgICAgIHJldHVybiBpbnRlcm5hbHM7XG4gICAgfTtcbiAgfVxufVxuIiwgImltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50IH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMYW5nSW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIGxhbmcgdXNlZCB0byBmb3JtYXQgY29udGVudCByZW5kZXJlZCBieSB0aGlzIGVsZW1lbnRcbiAgICogQGF0dHIgbGFuZ1xuICAgKi9cbiAgbGFuZzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTGFuZ01peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBMYW5nRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIEFkanVzdHMgdGhlIGxhbmcgdXNlZCB0byBmb3JtYXQgY29udGVudCByZW5kZXJlZCBieSB0aGlzIGVsZW1lbnRcbiAgICAgKiBAYXR0ciBsYW5nXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBsYW5nOiBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIExhbmdFbGVtZW50IGFzIENvbnN0cnVjdG9yPExhbmdJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciwgTXRlRWxlbWVudCB9IGZyb20gJy4uLyc7XG5cbi8qKlxuICogU3BlY2lhbCBjbGFzcyB0aGF0IGhlbHBzIGZyYW1ld29yayB3cmFwcGVyIHN0eWxpbmcga25vdyB3aGVuIGEgd3JhcHBlciBmcmFtZXdvcmtcbiAqIGhhcyBmaW5pc2hlZCByZW5kZXJpbmcgYW5kIHRodXMgZWxlbWVudHMgY2FuIG5vdyBiZSBzaG93biB3aXRob3V0IGEgRk9VQy4gVGhpc1xuICogb2NjdXJzIGluIHRoZSBzY2VuYXJpbyB3aGVyZSBMaXQgZWxlbWVudHMgcmVnaXN0ZXIgYW5kIHJlbmRlciBiZWZvcmUgdGhlXG4gKiB3cmFwcGVyIGZyYW1ld29yayBwYXNzZXMgZWxlbWVudHMgdGhlaXIgcHJvcHMuXG4gKi9cbmV4cG9ydCBjb25zdCBXYWl0Rm9yRnJhbWV3b3JrTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIFdhaXRGb3JGcmFtZXdvcmtFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqIEBpZ25vcmUgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6ICdtdGUtZnctcmVuZGVyZWQnLCByZWZsZWN0OiB0cnVlIH0pIF9md1JlbmRlcmVkO1xuICB9XG4gIHJldHVybiBXYWl0Rm9yRnJhbWV3b3JrRWxlbWVudCBhcyBUO1xufTtcbiIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7Ym94LXNpemluZzpib3JkZXItYm94fWA7IiwgImltcG9ydCB7IE10ZU92ZXJsYXlQbGFjZW1lbnQsIE10ZU92ZXJsYXlQb3NpdGlvbiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tICdAZmxvYXRpbmctdWkvZG9tJztcblxuLyoqIENhbGN1bGF0ZXMgb3B0aW1hbCBmbG9hdGluZy11aSBvdmVybGF5cyBmb3IgdGhlIGN1cnJlbnQgcG9zaXRpb24gKi9cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVPdmVybGF5UGxhY2VtZW50cyA9IChcbiAgcG9zaXRpb246IE10ZU92ZXJsYXlQb3NpdGlvbixcbiAgcGxhY2VtZW50OiBNdGVPdmVybGF5UGxhY2VtZW50ID0gJ2NlbnRlcidcbik6IFtQbGFjZW1lbnQsIFBsYWNlbWVudFtdXSA9PiB7XG4gIGNvbnN0IGdldEZhbGxiYWNrR3JvdXAgPSAoXG4gICAgcG9zaXRpb246IE10ZU92ZXJsYXlQb3NpdGlvbixcbiAgICBwcmVmZXJyZWRQbGFjZW1lbnQ6IE10ZU92ZXJsYXlQbGFjZW1lbnQsXG4gICAgcHJpbWFyeVBvc2l0aW9uOiBzdHJpbmdcbiAgKTogUGxhY2VtZW50W10gPT4ge1xuICAgIGlmIChwcmltYXJ5UG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgaWYgKHBvc2l0aW9uID09PSAndG9wJyB8fCBwb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgcHJlZmVycmVkUGxhY2VtZW50ID0gJ3N0YXJ0JztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByaW1hcnlQb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgaWYgKHBvc2l0aW9uID09PSAndG9wJyB8fCBwb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgcHJlZmVycmVkUGxhY2VtZW50ID0gJ2VuZCc7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGFsaWduT3JkZXIgPVxuICAgICAgcHJlZmVycmVkUGxhY2VtZW50ID09PSAnY2VudGVyJ1xuICAgICAgICA/IFsnJywgJy1lbmQnLCAnLXN0YXJ0J11cbiAgICAgICAgOiBwcmVmZXJyZWRQbGFjZW1lbnQgPT09ICdzdGFydCdcbiAgICAgICAgPyBbJy1zdGFydCcsICcnLCAnLWVuZCddXG4gICAgICAgIDogWyctZW5kJywgJycsICctc3RhcnQnXTtcbiAgICByZXR1cm4gYWxpZ25PcmRlclxuICAgICAgLm1hcCgoYWxpZ24pID0+IGAke3Bvc2l0aW9ufSR7YWxpZ259YCBhcyBQbGFjZW1lbnQpXG4gICAgICAuZmlsdGVyKChwbGFjZW1lbnQpID0+IHBsYWNlbWVudCAhPT0gcHJpbWFyeVBvc2l0aW9uKTtcbiAgfTtcblxuICBjb25zdCBwcmVmZXJyZWQgPSBgJHtwb3NpdGlvbn0ke1xuICAgIHBsYWNlbWVudCA9PT0gJ2VuZCcgPyAnLWVuZCcgOiBwbGFjZW1lbnQgPT09ICdzdGFydCcgPyAnLXN0YXJ0JyA6ICcnXG4gIH1gIGFzIFBsYWNlbWVudDtcblxuICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHByZWZlcnJlZCxcbiAgICAgICAgW1xuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ2JvdHRvbScsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCd0b3AnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgncmlnaHQnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgnbGVmdCcsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgXSxcbiAgICAgIF07XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICByZXR1cm4gW1xuICAgICAgICBwcmVmZXJyZWQsXG4gICAgICAgIFtcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCdsZWZ0JywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ3JpZ2h0JywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ3RvcCcsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCdib3R0b20nLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgIF0sXG4gICAgICBdO1xuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHByZWZlcnJlZCxcbiAgICAgICAgW1xuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ3JpZ2h0JywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ2xlZnQnLCBwbGFjZW1lbnQsIHByZWZlcnJlZCksXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgndG9wJywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ2JvdHRvbScsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgXSxcbiAgICAgIF07XG4gICAgY2FzZSAndG9wJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgcHJlZmVycmVkLFxuICAgICAgICBbXG4gICAgICAgICAgLi4uZ2V0RmFsbGJhY2tHcm91cCgndG9wJywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICAgIC4uLmdldEZhbGxiYWNrR3JvdXAoJ2JvdHRvbScsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCdyaWdodCcsIHBsYWNlbWVudCwgcHJlZmVycmVkKSxcbiAgICAgICAgICAuLi5nZXRGYWxsYmFja0dyb3VwKCdsZWZ0JywgcGxhY2VtZW50LCBwcmVmZXJyZWQpLFxuICAgICAgICBdLFxuICAgICAgXTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZURlZmF1bHRQYW5lbEFuaW1hdGlvbiA9IChcbiAgcmVuZGVyZWRQbGFjZW1lbnQ6IFBsYWNlbWVudCxcbiAgb3B0aW9uczoge1xuICAgIGZhbGxiYWNrUG9zaXRpb246IHN0cmluZztcbiAgICBmYWxsYmFja1BsYWNlbWVudDogc3RyaW5nO1xuICAgIGFjdGlvbjogJ29wZW4nIHwgJ2Nsb3NlJztcbiAgICBzY2FsZVg/OiBudW1iZXI7XG4gICAgc2NhbGVZPzogbnVtYmVyO1xuICB9XG4pID0+IHtcbiAgY29uc3Qgc2NhbGVYID0gb3B0aW9ucy5zY2FsZVggPz8gMC45O1xuICBjb25zdCBzY2FsZVkgPSBvcHRpb25zLnNjYWxlWSA/PyBudWxsO1xuICBsZXQgcG9zaXRpb24gPSBvcHRpb25zLmZhbGxiYWNrUG9zaXRpb247XG4gIGxldCBwbGFjZW1lbnQgPSBvcHRpb25zLmZhbGxiYWNrUGxhY2VtZW50O1xuICBpZiAocmVuZGVyZWRQbGFjZW1lbnQpIHtcbiAgICBjb25zdCBbcGEsIHBiXSA9IHJlbmRlcmVkUGxhY2VtZW50LnNwbGl0KCctJyk7XG4gICAgcG9zaXRpb24gPSBwYTtcbiAgICBwbGFjZW1lbnQgPSBwYjtcbiAgfVxuXG4gIGxldCB0cmFuc2xhdGVZID0gbnVsbDtcbiAgaWYgKHBvc2l0aW9uID09PSAndG9wJykge1xuICAgIHRyYW5zbGF0ZVkgPSAnMTAlJztcbiAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICB0cmFuc2xhdGVZID0gJy0xMCUnO1xuICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAncmlnaHQnIHx8IHBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICBpZiAocGxhY2VtZW50ID09PSAnc3RhcnQnKSB7XG4gICAgICB0cmFuc2xhdGVZID0gJy01JSc7XG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09ICdlbmQnKSB7XG4gICAgICB0cmFuc2xhdGVZID0gJzUlJztcbiAgICB9XG4gIH1cblxuICBsZXQgdHJhbnNsYXRlWCA9ICcnO1xuICBpZiAocG9zaXRpb24gPT09ICd0b3AnIHx8IHBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgIGlmIChwbGFjZW1lbnQgPT09ICdzdGFydCcpIHtcbiAgICAgIHRyYW5zbGF0ZVggPSAnLTUlJztcbiAgICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gJ2VuZCcpIHtcbiAgICAgIHRyYW5zbGF0ZVggPSAnNSUnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAocG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHRyYW5zbGF0ZVggPSAnLTEwJSc7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICB0cmFuc2xhdGVYID0gJzEwJSc7XG4gICAgfVxuICB9XG4gIGlmIChvcHRpb25zLmFjdGlvbiA9PT0gJ29wZW4nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjYWxlWDogW3NjYWxlWCwgMV0sXG4gICAgICBzY2FsZVk6IHNjYWxlWSA/IFtzY2FsZVksIDFdIDogdW5kZWZpbmVkLFxuICAgICAgdHJhbnNsYXRlWDogW3RyYW5zbGF0ZVgsICcwJSddLFxuICAgICAgdHJhbnNsYXRlWTogdHJhbnNsYXRlWSA/IFt0cmFuc2xhdGVZLCAnMCUnXSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBzY2FsZVg6IFsxLCBzY2FsZVhdLFxuICAgICAgc2NhbGVZOiBzY2FsZVkgPyBbMSwgc2NhbGVZXSA6IHVuZGVmaW5lZCxcbiAgICAgIHRyYW5zbGF0ZVg6IFsnMCUnLCB0cmFuc2xhdGVYXSxcbiAgICAgIHRyYW5zbGF0ZVk6IHRyYW5zbGF0ZVkgPyBbJzAlJywgdHJhbnNsYXRlWV0gOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfVxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEsaUJBU087OztBQ0hQLElBQU8sK0JBQVE7RUFDYixXQUFXO0lBQ1QsT0FBTztJQUNQLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7RUFDVjtFQUNBLFVBQVU7SUFDUixVQUFVO01BQ1IsUUFBUTtNQUNSLE1BQU07TUFDTixNQUFNO01BQ04sTUFBTTtNQUNOLE1BQU07TUFDTixNQUFNO01BQ04sT0FBTztNQUNQLFFBQVE7SUFDVjtJQUNBLFNBQVM7TUFDUCxRQUFRO01BQ1IsV0FBVztNQUNYLE1BQU07TUFDTixNQUFNO01BQ04sTUFBTTtJQUNSO0VBQ0Y7RUFDQSxhQUFhO0lBQ1gsU0FBUztNQUNQLEtBQUs7TUFDTCxLQUFLO01BQ0wsS0FBSztNQUNMLEtBQUs7TUFDTCxLQUFLO0lBQ1A7SUFDQSxXQUFXO01BQ1QsS0FBSztNQUNMLEtBQUs7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QSxRQUFRO01BQ04sV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsUUFBUTtNQUNOLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLFFBQVE7TUFDTixXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsVUFBVTtNQUNSLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFB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QUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLGFBQWE7UUFDWCxXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxZQUFZO1FBQ1YsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsV0FBVztRQUNULFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLFdBQVc7UUFDVCxXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO0lBQ0Y7SUFDQSxPQUFPO01BQ0wsT0FBTztRQUNMLFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLE9BQU87UUFDTCxXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsUUFBUTtRQUNOLFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLFFBQVE7UUFDTixXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxPQUFPO1FBQ0wsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO0lBQ0Y7RUFDRjtFQUNBLGNBQWM7SUFDWixZ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UTtNQUNOLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLFFBQVE7TUFDTixXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsVUFBVTtNQUNSLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLFdBQVc7TUFDVCxXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7SUFDQSxPQUFPO01BQ0wsV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsVUFBVTtNQUNSLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7SUFDQSxTQUFTO01BQ1AsV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsVUFBVTtNQUNSLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLGdCQUFnQjtNQUNkLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtFQUNGO0VBQ0EsTUFBTTtJQUNKLFFBQVE7TUFDTixXQUFXO1FBQ1QsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsYUFBYTtRQUNYLFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLFlBQVk7UUFDVixXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLGFBQWE7UUFDWCxXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxZQUFZO1FBQ1YsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsV0FBVztRQUNULFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtR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VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFFBQVE7TUFDTixXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsUUFBUTtNQUNOLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxRQUFRO01BQ04sV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsVUFBVTtNQUNSLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxXQUFXO01BQ1QsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLE9BQU87TUFDTCxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsVUFBVTtNQUNSLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFNBQVM7TUFDUCxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsVUFBVTtNQUNSLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxnQkFBZ0I7TUFDZCxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0VBQ0Y7RUFDQSxNQUFNO0lBQ0osUUFBUTtNQUNOLFdBQVc7UUFDVCxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsYUFBYTtRQUNYLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxZQUFZO1FBQ1YsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxhQUFhO1FBQ1gsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFlBQVk7UUFDVixXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxPQUFPO01BQ0wsT0FBTztRQUNMLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxPQUFPO1FBQ0wsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLE9BQU87UUFDTCxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO0lBQ0Y7RUFDRjtBQUNGO0FDLzBFQSxJQUFPLDRCQUFRO0VBQ2IsU0FBUztJQUNQLFNBQVM7TUFDUDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsU0FBUztNQUNQO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFFBQVE7TUFDTjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsVUFBVTtNQUNSO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLGdCQUFnQjtNQUNkO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxpQkFBaUI7TUFDZjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsU0FBUztNQUNQO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFNBQVM7TUFDUDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsU0FBUztNQUNQO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFNBQVM7TUFDUDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsU0FBUztNQUNQO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFNBQVM7TUFDUDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsVUFBVTtNQUNSO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxZQUFZO01BQ1Y7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFlBQVk7TUFDVjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsWUFBWTtNQUNWO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxZQUFZO01BQ1Y7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLGtCQUFrQjtNQUNoQjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsUUFBUTtNQUNOO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxRQUFRO01BQ047TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFFBQVE7TUFDTjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsUUFBUTtNQUNOO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxRQUFRO01BQ047TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLGNBQWM7TUFDWjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsV0FBVztNQUNUO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxXQUFXO01BQ1Q7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFdBQVc7TUFDVDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsaUJBQWlCO01BQ2Y7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLGFBQWE7TUFDWDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsYUFBYTtNQUNYO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxhQUFhO01BQ1g7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLGFBQWE7TUFDWDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0Esb0JBQW9CO01BQ2xCO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxvQkFBb0I7TUFDbEI7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLG9CQUFvQjtNQUNsQjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsYUFBYTtNQUNYO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxhQUFhO01BQ1g7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLGFBQWE7TUFDWDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsYUFBYTtNQUNYO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxpQkFBaUI7TUFDZjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsU0FBUztNQUNQO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7TUFDQTtNQUNBO01BQ0E7SUFDRjtFQUNGO0VBQ0EsV0FBVztJQUNULFNBQVM7TUFDUCxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsUUFBUTtNQUNOLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxRQUFRO01BQ04sVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFFBQVE7TUFDTixVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsVUFBVTtNQUNSLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFdBQVc7TUFDVCxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsT0FBTztNQUNMLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsU0FBUztNQUNQLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLGdCQUFnQjtNQUNkLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7RUFDRjtFQUNBLE1BQU07SUFDSixRQUFRO01BQ04sV0FBVztRQUNULFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxhQUFhO1FBQ1gsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFlBQVk7UUFDVixVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLGFBQWE7UUFDWCxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsWUFBWTtRQUNWLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7SUFDRjtJQUNBLE9BQU87TUFDTCxPQUFPO1FBQ0wsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLE9BQU87UUFDTCxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsT0FBTztRQUNMLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7SUFDRjtFQUNGO0FBQ0Y7QUN4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LGFBQWEsR0FBRyxFQUFFLHNCQUFzQixLQUFLLENBQUM7R0EvSHJFLFdBZ0lIO0FBS0E7RUFEUCxTQUFTLFlBQVksRUFBRSxzQkFBc0IsS0FBSyxDQUFDO0dBcEl6QyxXQXFJSDtBQU9BO0VBRFAsU0FBUyxDQUFDLFlBQVksYUFBYSxNQUFNLElBQUksR0FBRyxFQUFFLHNCQUFzQixLQUFLLENBQUM7R0EzSXBFLFdBNElIO0FBNUlHLGFBQU47RUFETixjQUFjLGFBQWE7R0FDZjsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgImFjYyIsICJwcm9wIiwgInZhbHVlIiwgInN0eWxlcyIsICJkZXAiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJvYnNlcnZlciIsICJlIiwgImNzc1ZhciIsICJvYnNlcnZlciIsICJwb3J0YWxDb250cm9sbGVyIiwgImVsZW1lbnQiLCAic2Nyb2xsWCIsICJzY3JvbGxZIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9jb250ZXh0IiwgImNvbnRleHQiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfaWZfZGVmaW5lZCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9jbGFzc19tYXAiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJub2RlIiwgIm9ic2VydmVyIiwgInN0YXRlIiwgImltcG9ydF9pc19zZXJ2ZXIiLCAib2JzZXJ2ZXIiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJwb3NpdGlvbiIsICJwbGFjZW1lbnQiLCAibmV4dFVuaXF1ZUlkIiwgInBsYWNlbWVudCIsICJhbmltZSIsICJzdHlsZXMiXQp9Cg==
