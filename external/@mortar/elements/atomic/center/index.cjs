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

// src/atomic/center/index.ts
var center_exports = {};
__export(center_exports, {
  MteCenter: () => MteCenter
});
module.exports = __toCommonJS(center_exports);

// src/atomic/center/center.element.ts
var import_lit14 = require("lit");

// src/core/base-classes/mte.element.ts
var import_decorators = require("lit/decorators.js");
var import_lit = require("lit");

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
var css7 = (strings, ...values) => (0, import_lit12.css)(strings, ...values.map((value) => (0, import_lit12.unsafeCSS)(value)));

// src/core/styles/base.styles.ts
var import_lit13 = require("lit");
var styles7 = import_lit13.css`:host{box-sizing:border-box}`;

// src/atomic/center/center.element.ts
var MteCenter = class extends MteContentBase {
  render() {
    return import_lit14.html`${this.instanceStyles}<slot></slot>`;
  }
};
MteCenter.styles = [
  styles7,
  css7` :host { display: flex; align-items: center; justify-content: center; } `
];
MteCenter = __decorateClass([
  defineElement("mte-center")
], MteCenter);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jZW50ZXIvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jZW50ZXIiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYmFzZS1jbGFzc2VzL210ZS5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9zcmMvZ2VuZXJhdGVkL21hcHMvY29yZS12YXJzLWdldHRlci1tYXAudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3NyYy9nZW5lcmF0ZWQvbWFwcy90aGVtZS12YXJzLWdldHRlci1tYXAudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3NyYy9nZW5lcmF0ZWQvbWFwcy9jb3JlLXZhcnMtc2V0dGVyLW1hcC50cyIsICIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvc3JjL2dlbmVyYXRlZC9tYXBzL3RoZW1lLXZhcnMtc2V0dGVyLW1hcC50cyIsICIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvc3JjL2dlbmVyYXRlZC9tYXBzL3B4LWxpZ2h0LXdlYmdsLW1hcC50cyIsICIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvc3JjL2dlbmVyYXRlZC9tYXBzL3B4LWRhcmstd2ViZ2wtbWFwLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9zcmMvY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9zcmMvZnVuY3Rpb25zL2NvcmUudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3NyYy9mdW5jdGlvbnMvdGhlbWUudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3NyYy9mdW5jdGlvbnMvdHlwb2dyYXBoeS50cyIsICIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvc3JjL2Z1bmN0aW9ucy9hbmltYXRpb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3NyYy9mdW5jdGlvbnMvZWxldmF0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9jc3MtaW4tanMvY3NzLWluLWpzLnByb3BlcnR5LW1hcHBlcnMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Nzcy1pbi1qcy9jc3MtaW4tanMudXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9lbnZpcm9ubWVudC51dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Zvcm0udXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9yZWFjdGl2ZS1zaWduYWwudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYmFzZS1jbGFzc2VzL2NvbnRlbnQuYmFzZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9hdHRyaWJ1dGUtY29udmVydGVyL3Jlc3BvbnNpdmUtYXR0cmlidXRlLmNvbnZlcnRlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb25zdGFudHMvaGViLWxvZ28udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc2VydmljZXMvdGhlbWUuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy9wb3J0YWwuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy9oaXN0b3J5LWFwaS5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZpY2VzL2xvY2FsaXplLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24vYnV0dG9uLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pY29uL2ljb24ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdG9vbGJhci90b29sYmFyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jYXJkL2NhcmQucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RyZWUvdHJlZS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGFnL3RhZy5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYmFkZ2UvYmFkZ2UucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2xpbmsvbGluay5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYWxlcnQvYWxlcnQucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2lucHV0L2lucHV0LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9kcmF3ZXIvZHJhd2VyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hc2lkZS9hc2lkZS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi1pdGVtLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9tb2RhbC9tb2RhbC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvY2hlY2tib3gvY2hlY2tib3gucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3JhZGlvL3JhZGlvLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXYvbmF2LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zd2l0Y2gvc3dpdGNoLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXRpdmUtc2VsZWN0L25hdGl2ZS1zZWxlY3QucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RleHRhcmVhL3RleHRhcmVhLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9za2VsZXRvbi9za2VsZXRvbi5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc2xpZGVyL3NsaWRlci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcmFuZ2Utc2xpZGVyL3JhbmdlLXNsaWRlci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc2VnbWVudGVkLWNvbnRyb2wvc2VnbWVudGVkLWNvbnRyb2wucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXQuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5kZWNvcmF0b3IudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXQuY29udGV4dC50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb250cm9sbGVycy9hcHBsaWVkLXByZXNldC1jb250ZXh0LmNvbnRyb2xsZXIudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvZGVjb3JhdG9ycy9kZWZpbmUtZWxlbWVudC5kZWNvcmF0b3IudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2RlbnNpdHkubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9kaXNhYmxlZC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvaW52ZXJzZS5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvaW52ZXJzZS5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3RhYmluZGV4Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9zdHlsZS1wYXJ0cy5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2J1dHRvbi5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL292ZXJsYXkubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL292ZXJsYXkubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZmllbGRzZXQubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZm9ybS1maWVsZC5taXhpbi5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2F1dG8tYWN0aXZlLWxpbmsubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL3Nsb3Qtb2JzZXJ2ZXIubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2NoZWNrYm94Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9tYXBzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9hb20udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL211dGF0aW9uLW9ic2VydmVycy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvdXRpbHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL1ZhbGlkaXR5U3RhdGUudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL0N1c3RvbVN0YXRlU2V0LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9IVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvcGF0Y2gtZm9ybS1wcm90b3R5cGUudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL2VsZW1lbnQtaW50ZXJuYWxzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9sYW5nLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy93YWl0LWZvci1mdy5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zdHlsZXMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc3R5bGVzL2Jhc2Uuc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL2NlbnRlci5lbGVtZW50JztcbiIsIG51bGwsICIvKiBlc2xpbnQtZGlzYWJsZSB3Yy9uby1zZWxmLWNsYXNzICovXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHNlbGVjdG9yRmFjdG9yeSwgU2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgY29uc3RydWN0SW5zdGFuY2VTdHlsZXMsXG4gIGdlbmVyYXRlU2VsZWN0b3JzRnJvbVN0eWxlTWFwLFxuICBTZWxlY3RvclN0eWxlcyxcbiAgU3R5bGVNYXAsXG4gIFVuc3Vic2NyaWJlcixcbn0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IHVuc2FmZUhUTUwgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3Vuc2FmZS1odG1sLmpzJztcbmltcG9ydCB7IE1vcnRhclByZXNldFRoZW1lIH0gZnJvbSAnLi4vcHJlc2V0cyc7XG5cbi8vIERpc2FibGUgdGhpcyB3YXJuaW5nIGZvciBub3cgYnkgcHJlLW1hcmtpbmcgaXQgYXMgaXNzdWVkIHNvIHVzZXJzIGRvbid0IGhhdmUgdG8gc2VlIGl0XG4vLyBUT0RPOiBBc2sgbGl0IHRlYW0gd2h5IHRoaXMgaXMgdGhyb3duIGV2ZXJ5d2hlcmUgYW5kIHdoYXQgYWx0ZXJuYXRpdmVzIGFyZSBmb3IgcHJlc2V0IHNvbHV0aW9uXG5nbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzID8/PSBuZXcgU2V0KCk7XG5nbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzLmFkZChcbiAgJ092ZXJyaWRpbmcgUmVhY3RpdmVFbGVtZW50LmdldFByb3BlcnR5RGVzY3JpcHRvcigpIGlzIGRlcHJlY2F0ZWQuIFRoZSBvdmVycmlkZSB3aWxsIG5vdCBiZSBjYWxsZWQgd2l0aCBzdGFuZGFyZCBkZWNvcmF0b3JzIFNlZSBodHRwczovL2xpdC5kZXYvbXNnL25vLW92ZXJyaWRlLWdldC1wcm9wZXJ0eS1kZXNjcmlwdG9yIGZvciBtb3JlIGluZm9ybWF0aW9uLidcbik7XG5cbmV4cG9ydCBjbGFzcyBNdGVFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHByaXZhdGUgX19pbnN0YW5jZVN0eWxlU2hlZXRNYXAgPSBuZXcgTWFwPHN0cmluZywgU2VsZWN0b3JTdHlsZXNbXT4oKTtcbiAgcHJpdmF0ZSBfX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlID0gZmFsc2U7XG5cbiAgLyoqIFNldCB0byB0cnVlIHdoZW4gZmlyc3RVcGRhdGVkIGlzIGZpcnN0IGNhbGxlZCAqL1xuICBwcm90ZWN0ZWQgX19maXJzdFVwZGF0ZWQgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgaW5zdGFuY2VTdHlsZXM7XG5cbiAgLyoqXG4gICAqIEFsbCBzdWJzIHB1c2hlZCB0byB0aGlzIGFycmF5IHdpbGwgYmUgY2xlYXJlZCBpbiB0aGUgZGlzY29ubmVjdGVkQ2FsbGJhY2tcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc3ViczogVW5zdWJzY3JpYmVyW10gPSBbXTtcblxuICAvKiogU3R5bGUgbWFwcGluZ3MgdGhhdCBhcmUgYXBwbGllZCB0byB0aGUgaG9zdCBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIHJlZmxlY3Q6IHRydWUgfSkgc2U/OiBTdHlsZU1hcDtcblxuICAvKipcbiAgICogVGhlIHRoZW1lIHRvIHVzZSBmb3Igc3R5bGluZyB0aGlzIGNvbXBvbmVudC4gT3ZlcnJpZGVzIHRoZSBnbG9iYWwgcHJlc2V0IGZvciB0aGlzIGluc3RhbmNlIG9mIHRoaXMgY29tcG9uZW50LlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBhdHRyaWJ1dGU6ICdkYXRhLW10ZS10aGVtZScgfSlcbiAgc2V0IHRoZW1lKHRoZW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuX3RoZW1lO1xuICAgIHRoaXMuX3RoZW1lID0gdGhlbWU7XG4gICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCd0aGVtZScsIG9sZFZhbHVlKTtcbiAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IGEgYmV0dGVyIHdheSB0byBzb2x2ZSB0aGlzIGZvciBhbGwgcHJlc2V0c1xuICAgIGlmICh0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZSkge1xuICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlcXVlc3RVcGRhdGUoJ3RoZW1lJywgbnVsbCkpO1xuICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBudWxsKSk7XG4gICAgfVxuICB9XG4gIGdldCB0aGVtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aGVtZSA/PyB0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZT8ubmFtZTtcbiAgfVxuICBwcml2YXRlIF90aGVtZTogc3RyaW5nO1xuXG4gIC8qKiBVc2VkIHRvIGRlY2xhcmUgYSBsb2NhbCB0aGVtZSB2YWx1ZSBkZXRlcm1pbmVkIGJ5IHRoZSBsb2NhbCBwcmVzZXQgaWYgaXQgaXMgc2V0LiAqL1xuICBAc3RhdGUoKSBwcm90ZWN0ZWQgX19sb2NhbFByZXNldFRoZW1lOiBNb3J0YXJQcmVzZXRUaGVtZTtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBzZWxlY3RvciB0byBoYXZlIGluc3RhbmNlIHN0eWxlcyB0YXJnZXQgYSBzcGVjaWZpYyBpbm5lciBlbGVtZW50LlxuICAgKiBVc2VmdWwgaW4gc3BlY2lmaWMgc2NlbmFyaW9zIHdoZXJlIGZvY3VzIGlzIGRlbGVnYXRlZCBsaWtlIGJ1dHRvbnMuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQgdGhpcyByZXBlYXRzIGA6aG9zdGAgc2l4IHRpbWVzIHRvIHByb3ZpZGUgYSBzcGVjaWZpY2l0eSBvZiA2XG4gICAqL1xuICBwcm90ZWN0ZWQgaW5zdGFuY2VTdHlsZVNlbGVjdG9yUm9vdCA9ICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnO1xuXG4gIC8qKlxuICAgKiBDYW4gYmUgY2FsbGVkIGJ5IGRlcml2ZWQgY2xhc3NlcyB0byByZWdpc3RlciBuZXcgaW5zdGFuY2UgbGV2ZWwgZHluYW1pYyBzdHlsZXMuXG4gICAqIFdoZW4gY2FsbGVkIHRoZSBpbnN0YW5jZSBzdHlsZXNoZWV0IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGUgbGF0ZXN0IHN0eWxlcyB0aGlzIHVwZGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCBzZXRJbnN0YW5jZVN0eWxlKGlkOiBzdHJpbmcsIHNlbGVjdG9yOiBTZWxlY3RvckZhY3RvcnksIHN0eWxlTWFwOiBTdHlsZU1hcCkge1xuICAgIC8vIFdlIHBhcnNlIGFsbCBzdHlsZSBpbmZvcm1hdGlvbiBoZXJlIGFuZCBzY29wZSBpdCB0byB0aGUgZ2l2ZW4gaWQuIFRoaXMgZW5zdXJlcyB3ZVxuICAgIC8vIG9ubHkgZXZlciBuZWVkIHRvIHJlLXBhcnNlIHRoaXMgcG9ydGlvbiBvZiBzdHlsZSBpbmZvcm1hdGlvbiB3aGVuIGl0cyBhc3NvY2lhdGVkXG4gICAgLy8gaWQgaXMgdXBkYXRlZCBhZ2Fpbi5cbiAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TWFwLnNldChpZCwgZ2VuZXJhdGVTZWxlY3RvcnNGcm9tU3R5bGVNYXAoc2VsZWN0b3IsIHN0eWxlTWFwKSk7XG4gICAgdGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBBIGN1c3RvbSBob29rIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gaW4gZGVyaXZlZCBjbGFzc2VzIHRvIHNldCBpbnN0YW5jZSBzdHlsZXMgYXMgbmVlZGVkICovXG4gIHByb3RlY3RlZCB1cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpIHtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcygnc2UnKSkge1xuICAgICAgdGhpcy5zZXRJbnN0YW5jZVN0eWxlKCdzZScsIHNlbGVjdG9yRmFjdG9yeSh0aGlzLmluc3RhbmNlU3R5bGVTZWxlY3RvclJvb3QpLCB0aGlzLnNlID8/IHt9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgd2lsbFVwZGF0ZShjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci53aWxsVXBkYXRlKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBDYWxsIHRoZSB1cGRhdGVJbnN0YW5jZVN0eWxlcyBob29rXG4gICAgdGhpcy51cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaW5zdGFuY2Ugc3R5bGVzIG5lZWQgdG8gYmUgcmVyZW5kZXJlZFxuICAgIGlmICh0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2VTdHlsZXMgPSB1bnNhZmVIVE1MKFxuICAgICAgICBgPHN0eWxlIGlkPVwiX19pbnN0YW5jZS1zdHlsZXNcIj4ke2NvbnN0cnVjdEluc3RhbmNlU3R5bGVzKFxuICAgICAgICAgIHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXRNYXBcbiAgICAgICAgKX08L3N0eWxlPmBcbiAgICAgICk7XG4gICAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHRoaXMuX19maXJzdFVwZGF0ZWQgPSB0cnVlO1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIHRoaXMuc3Vicy5mb3JFYWNoKCh1bnN1YikgPT4gdW5zdWIoKSk7XG4gICAgdGhpcy5zdWJzID0gW107XG4gIH1cbn1cbiIsICIvKipcbiAqIERvIG5vdCBlZGl0IGRpcmVjdGx5XG4gKiBHZW5lcmF0ZWQgb24gVHVlLCAwMiBBcHIgMjAyNCAxODo0Njo1MSBHTVRcbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJvcGFjaXR5XCI6IHtcbiAgICBcInh4bFwiOiBcInZhcigtLW10ZS1vcGFjaXR5LXh4bClcIixcbiAgICBcInhsXCI6IFwidmFyKC0tbXRlLW9wYWNpdHkteGwpXCIsXG4gICAgXCJsZ1wiOiBcInZhcigtLW10ZS1vcGFjaXR5LWxnKVwiLFxuICAgIFwibWRcIjogXCJ2YXIoLS1tdGUtb3BhY2l0eS1tZClcIixcbiAgICBcInNtXCI6IFwidmFyKC0tbXRlLW9wYWNpdHktc20pXCIsXG4gICAgXCJ4c1wiOiBcInZhcigtLW10ZS1vcGFjaXR5LXhzKVwiLFxuICAgIFwieHhzXCI6IFwidmFyKC0tbXRlLW9wYWNpdHkteHhzKVwiLFxuICAgIFwieHh4c1wiOiBcInZhcigtLW10ZS1vcGFjaXR5LXh4eHMpXCJcbiAgfSxcbiAgXCJib3JkZXJcIjoge1xuICAgIFwicmFkaXVzXCI6IHtcbiAgICAgIFwibm9uZVwiOiBcInZhcigtLW10ZS1ib3JkZXItcmFkaXVzLW5vbmUpXCIsXG4gICAgICBcInhzXCI6IFwidmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteHMpXCIsXG4gICAgICBcInNtXCI6IFwidmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtc20pXCIsXG4gICAgICBcIm1kXCI6IFwidmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbWQpXCIsXG4gICAgICBcImxnXCI6IFwidmFyKC0tbXRlLWJvcmRlci1yYWRpdXMtbGcpXCIsXG4gICAgICBcInhsXCI6IFwidmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteGwpXCIsXG4gICAgICBcInh4bFwiOiBcInZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXh4bClcIixcbiAgICAgIFwiZnVsbFwiOiBcInZhcigtLW10ZS1ib3JkZXItcmFkaXVzLWZ1bGwpXCJcbiAgICB9LFxuICAgIFwid2lkdGhcIjoge1xuICAgICAgXCJub25lXCI6IFwidmFyKC0tbXRlLWJvcmRlci13aWR0aC1ub25lKVwiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwidmFyKC0tbXRlLWJvcmRlci13aWR0aC1kZWZhdWx0KVwiLFxuICAgICAgXCJzbVwiOiBcInZhcigtLW10ZS1ib3JkZXItd2lkdGgtc20pXCIsXG4gICAgICBcIm1kXCI6IFwidmFyKC0tbXRlLWJvcmRlci13aWR0aC1tZClcIixcbiAgICAgIFwibGdcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLXdpZHRoLWxnKVwiXG4gICAgfVxuICB9LFxuICBcImVsZXZhdGlvblwiOiB7XG4gICAgXCJsZXZlbFwiOiB7XG4gICAgICBcIjBcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLWxldmVsLTApXCIsXG4gICAgICBcIjFcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLWxldmVsLTEpXCIsXG4gICAgICBcIjJcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLWxldmVsLTIpXCIsXG4gICAgICBcIjNcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLWxldmVsLTMpXCIsXG4gICAgICBcIjRcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLWxldmVsLTQpXCJcbiAgICB9LFxuICAgIFwib3BhY2l0eVwiOiB7XG4gICAgICBcIjBcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktMClcIixcbiAgICAgIFwiMVwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tb3BhY2l0eS0xKVwiLFxuICAgICAgXCIyXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1vcGFjaXR5LTIpXCIsXG4gICAgICBcIjNcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktMylcIixcbiAgICAgIFwiNFwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tb3BhY2l0eS00KVwiXG4gICAgfSxcbiAgICBcInowXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi16MClcIixcbiAgICBcInoxXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi16MSlcIixcbiAgICBcInoyXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi16MilcIixcbiAgICBcInozXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi16MylcIixcbiAgICBcIno0XCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi16NClcIlxuICB9LFxuICBcInpJbmRleFwiOiB7XG4gICAgXCIwXCI6IFwidmFyKC0tbXRlLXotaW5kZXgtMClcIixcbiAgICBcIjEwXCI6IFwidmFyKC0tbXRlLXotaW5kZXgtMTApXCIsXG4gICAgXCIyMFwiOiBcInZhcigtLW10ZS16LWluZGV4LTIwKVwiLFxuICAgIFwiMzBcIjogXCJ2YXIoLS1tdGUtei1pbmRleC0zMClcIixcbiAgICBcIjQwXCI6IFwidmFyKC0tbXRlLXotaW5kZXgtNDApXCIsXG4gICAgXCI1MFwiOiBcInZhcigtLW10ZS16LWluZGV4LTUwKVwiLFxuICAgIFwiLTFcIjogXCJ2YXIoLS1tdGUtei1pbmRleC0xKVwiLFxuICAgIFwiYXV0b1wiOiBcInZhcigtLW10ZS16LWluZGV4LWF1dG8pXCJcbiAgfSxcbiAgXCJncmlkXCI6IHtcbiAgICBcImJyZWFrcG9pbnRcIjoge1xuICAgICAgXCJ4c1wiOiBcIjBcIixcbiAgICAgIFwic21cIjogXCI0ODBweFwiLFxuICAgICAgXCJtZFwiOiBcIjc2OHB4XCIsXG4gICAgICBcImxnXCI6IFwiMTAyNHB4XCIsXG4gICAgICBcInhsXCI6IFwiMTI4MHB4XCIsXG4gICAgICBcInh4bFwiOiBcIjE1MzZweFwiXG4gICAgfSxcbiAgICBcImNvbnRhaW5lck1heFdpZHRoXCI6IHtcbiAgICAgIFwic21cIjogXCI3NjhweFwiLFxuICAgICAgXCJtZFwiOiBcIjEwMjRweFwiLFxuICAgICAgXCJsZ1wiOiBcIjEyODBweFwiLFxuICAgICAgXCJ4bFwiOiBcIjE0NDBweFwiLFxuICAgICAgXCJ4eGxcIjogXCIxNDQwcHhcIlxuICAgIH1cbiAgfSxcbiAgXCJzaXplXCI6IHtcbiAgICBcInNjYWxlXCI6IHtcbiAgICAgIFwic21cIjogXCJ2YXIoLS1tdGUtc2l6ZS1zY2FsZS1zbSlcIixcbiAgICAgIFwibWRcIjogXCJ2YXIoLS1tdGUtc2l6ZS1zY2FsZS1tZClcIixcbiAgICAgIFwibGdcIjogXCJ2YXIoLS1tdGUtc2l6ZS1zY2FsZS1sZylcIlxuICAgIH0sXG4gICAgXCJkZW5zaXRpZXNcIjogW1xuICAgICAgXCJjb21wYWN0XCIsXG4gICAgICBcImNvbWZ5XCIsXG4gICAgICBcInJvb215XCJcbiAgICBdXG4gIH0sXG4gIFwic3BhY2VcIjoge1xuICAgIFwibm9uZVwiOiBcInZhcigtLW10ZS1zcGFjZS1ub25lKVwiLFxuICAgIFwieHhzXCI6IFwidmFyKC0tbXRlLXNwYWNlLXh4cylcIixcbiAgICBcInhzXCI6IFwidmFyKC0tbXRlLXNwYWNlLXhzKVwiLFxuICAgIFwic21cIjogXCJ2YXIoLS1tdGUtc3BhY2Utc20pXCIsXG4gICAgXCJtZFwiOiBcInZhcigtLW10ZS1zcGFjZS1tZClcIixcbiAgICBcImxnXCI6IFwidmFyKC0tbXRlLXNwYWNlLWxnKVwiLFxuICAgIFwieGxcIjogXCJ2YXIoLS1tdGUtc3BhY2UteGwpXCIsXG4gICAgXCJ4eGxcIjogXCJ2YXIoLS1tdGUtc3BhY2UteHhsKVwiLFxuICAgIFwieHh4bFwiOiBcInZhcigtLW10ZS1zcGFjZS14eHhsKVwiLFxuICAgIFwiY29tcGFjdFwiOiB7XG4gICAgICBcIm5vbmVcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1ub25lKVwiLFxuICAgICAgXCJ4eHNcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eHMpXCIsXG4gICAgICBcInhzXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHMpXCIsXG4gICAgICBcInNtXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbXBhY3Qtc20pXCIsXG4gICAgICBcIm1kXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QtbWQpXCIsXG4gICAgICBcImxnXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QtbGcpXCIsXG4gICAgICBcInhsXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteGwpXCIsXG4gICAgICBcInh4bFwiOiBcInZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXh4bClcIixcbiAgICAgIFwieHh4bFwiOiBcInZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXh4eGwpXCJcbiAgICB9LFxuICAgIFwiY29tZnlcIjoge1xuICAgICAgXCJub25lXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbWZ5LW5vbmUpXCIsXG4gICAgICBcInh4c1wiOiBcInZhcigtLW10ZS1zcGFjZS1jb21meS14eHMpXCIsXG4gICAgICBcInhzXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXhzKVwiLFxuICAgICAgXCJzbVwiOiBcInZhcigtLW10ZS1zcGFjZS1jb21meS1zbSlcIixcbiAgICAgIFwibWRcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tZnktbWQpXCIsXG4gICAgICBcImxnXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbWZ5LWxnKVwiLFxuICAgICAgXCJ4bFwiOiBcInZhcigtLW10ZS1zcGFjZS1jb21meS14bClcIixcbiAgICAgIFwieHhsXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4bClcIixcbiAgICAgIFwieHh4bFwiOiBcInZhcigtLW10ZS1zcGFjZS1jb21meS14eHhsKVwiXG4gICAgfSxcbiAgICBcInJvb215XCI6IHtcbiAgICAgIFwibm9uZVwiOiBcInZhcigtLW10ZS1zcGFjZS1yb29teS1ub25lKVwiLFxuICAgICAgXCJ4eHNcIjogXCJ2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHhzKVwiLFxuICAgICAgXCJ4c1wiOiBcInZhcigtLW10ZS1zcGFjZS1yb29teS14cylcIixcbiAgICAgIFwic21cIjogXCJ2YXIoLS1tdGUtc3BhY2Utcm9vbXktc20pXCIsXG4gICAgICBcIm1kXCI6IFwidmFyKC0tbXRlLXNwYWNlLXJvb215LW1kKVwiLFxuICAgICAgXCJsZ1wiOiBcInZhcigtLW10ZS1zcGFjZS1yb29teS1sZylcIixcbiAgICAgIFwieGxcIjogXCJ2YXIoLS1tdGUtc3BhY2Utcm9vbXkteGwpXCIsXG4gICAgICBcInh4bFwiOiBcInZhcigtLW10ZS1zcGFjZS1yb29teS14eGwpXCIsXG4gICAgICBcInh4eGxcIjogXCJ2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHh4bClcIlxuICAgIH1cbiAgfSxcbiAgXCJmb250XCI6IHtcbiAgICBcImJhc2VcIjogXCJ2YXIoLS1tdGUtZm9udC1iYXNlKVwiLFxuICAgIFwiZmFtaWx5XCI6IHtcbiAgICAgIFwic2Fuc1wiOiBcInZhcigtLW10ZS1mb250LWZhbWlseS1zYW5zKVwiLFxuICAgICAgXCJzZXJpZlwiOiBcInZhcigtLW10ZS1mb250LWZhbWlseS1zZXJpZilcIixcbiAgICAgIFwibW9ub1wiOiBcInZhcigtLW10ZS1mb250LWZhbWlseS1tb25vKVwiXG4gICAgfSxcbiAgICBcIndlaWdodFwiOiB7XG4gICAgICBcImxpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtd2VpZ2h0LWxpZ2h0KVwiLFxuICAgICAgXCJyZWd1bGFyXCI6IFwidmFyKC0tbXRlLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpXCIsXG4gICAgICBcIm1lZGl1bVwiOiBcInZhcigtLW10ZS1mb250LXdlaWdodC1tZWRpdW0pXCIsXG4gICAgICBcImJvbGRcIjogXCJ2YXIoLS1tdGUtZm9udC13ZWlnaHQtYm9sZClcIlxuICAgIH0sXG4gICAgXCJyYXRpb1wiOiB7XG4gICAgICBcInNtXCI6IDAuOCxcbiAgICAgIFwibWRcIjogMSxcbiAgICAgIFwibGdcIjogMS4yXG4gICAgfSxcbiAgICBcInNldFwiOiB7XG4gICAgICBcImgxXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcInZhcigtLW10ZS1mb250LXNldC1oMS1mb250LXNpemUpXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1oMS1saW5lLWhlaWdodClcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWgxLWZvbnQtd2VpZ2h0KVwiXG4gICAgICB9LFxuICAgICAgXCJoMlwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDItZm9udC1zaXplKVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDItbGluZS1oZWlnaHQpXCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1oMi1mb250LXdlaWdodClcIlxuICAgICAgfSxcbiAgICAgIFwiaDNcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWgzLWZvbnQtc2l6ZSlcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWgzLWxpbmUtaGVpZ2h0KVwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDMtZm9udC13ZWlnaHQpXCJcbiAgICAgIH0sXG4gICAgICBcImg0XCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcInZhcigtLW10ZS1mb250LXNldC1oNC1mb250LXNpemUpXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1oNC1saW5lLWhlaWdodClcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWg0LWZvbnQtd2VpZ2h0KVwiXG4gICAgICB9LFxuICAgICAgXCJoNVwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDUtZm9udC1zaXplKVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDUtbGluZS1oZWlnaHQpXCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1oNS1mb250LXdlaWdodClcIlxuICAgICAgfSxcbiAgICAgIFwiaDZcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWg2LWZvbnQtc2l6ZSlcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWg2LWxpbmUtaGVpZ2h0KVwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDYtZm9udC13ZWlnaHQpXCJcbiAgICAgIH0sXG4gICAgICBcInN1YnRpdGxlXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcInZhcigtLW10ZS1mb250LXNldC1zdWJ0aXRsZS1mb250LXNpemUpXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1zdWJ0aXRsZS1saW5lLWhlaWdodClcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0KVwiXG4gICAgICB9LFxuICAgICAgXCJib2R5MVwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtYm9keTEtZm9udC1zaXplKVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtYm9keTEtbGluZS1oZWlnaHQpXCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1ib2R5MS1mb250LXdlaWdodClcIlxuICAgICAgfSxcbiAgICAgIFwiYm9keTJcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWZvbnQtc2l6ZSlcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWxpbmUtaGVpZ2h0KVwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC13ZWlnaHQpXCJcbiAgICAgIH0sXG4gICAgICBcImNhcHRpb25cIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC1zaXplKVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1saW5lLWhlaWdodClcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC13ZWlnaHQpXCJcbiAgICAgIH0sXG4gICAgICBcImJ1dHRvblwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtYnV0dG9uLWZvbnQtc2l6ZSlcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1saW5lLWhlaWdodClcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1mb250LXdlaWdodClcIlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJhbmltYXRpb25cIjoge1xuICAgIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IHtcbiAgICAgIFwiZXh0cmFTaG9ydFwiOiBcIjgwbXNcIixcbiAgICAgIFwic2hvcnRlclwiOiBcIjEyMG1zXCIsXG4gICAgICBcInNob3J0XCI6IFwiMjAwbXNcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIjMwMG1zXCIsXG4gICAgICBcImxvbmdcIjogXCI1MDBtc1wiXG4gICAgfSxcbiAgICBcInRyYW5zaXRpb25EdXJhdGlvbkpzXCI6IHtcbiAgICAgIFwiZXh0cmFTaG9ydFwiOiAwLjA4LFxuICAgICAgXCJzaG9ydGVyXCI6IDAuMTIsXG4gICAgICBcInNob3J0XCI6IDAuMixcbiAgICAgIFwiZGVmYXVsdFwiOiAwLjMsXG4gICAgICBcImxvbmdcIjogMC41XG4gICAgfSxcbiAgICBcInRpbWluZ0Z1bmN0aW9uXCI6IHtcbiAgICAgIFwiZGVjZWxlcmF0ZU91dFwiOiBcImN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpXCIsXG4gICAgICBcInN0YW5kYXJkXCI6IFwiY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKVwiLFxuICAgICAgXCJhY2NlbGVyYXRlSW5cIjogXCJjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKVwiLFxuICAgICAgXCJzaGFycFwiOiBcImN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSlcIixcbiAgICAgIFwiaW5PdXRcIjogXCJjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSlcIlxuICAgIH0sXG4gICAgXCJ0aW1pbmdGdW5jdGlvbkpzXCI6IHtcbiAgICAgIFwiZGVjZWxlcmF0ZU91dFwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDAuMixcbiAgICAgICAgMVxuICAgICAgXSxcbiAgICAgIFwic3RhbmRhcmRcIjogW1xuICAgICAgICAwLjQsXG4gICAgICAgIDAsXG4gICAgICAgIDAuMixcbiAgICAgICAgMVxuICAgICAgXSxcbiAgICAgIFwiYWNjZWxlcmF0ZUluXCI6IFtcbiAgICAgICAgMC40LFxuICAgICAgICAwLFxuICAgICAgICAxLFxuICAgICAgICAxXG4gICAgICBdLFxuICAgICAgXCJzaGFycFwiOiBbXG4gICAgICAgIDAuNCxcbiAgICAgICAgMCxcbiAgICAgICAgMC42LFxuICAgICAgICAxXG4gICAgICBdLFxuICAgICAgXCJpbk91dFwiOiBbXG4gICAgICAgIDAuMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDAuMjUsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH1cbn07IiwgImV4cG9ydCBkZWZhdWx0IHtcbiAgXCJjb2xvclwiOiB7XG4gICAgXCJibGFja1wiOiBcInZhcigtLW10ZS1ibGFjaylcIixcbiAgICBcIndoaXRlXCI6IFwidmFyKC0tbXRlLXdoaXRlKVwiLFxuICAgIFwibGlnaHRcIjogXCJ2YXIoLS1tdGUtbGlnaHQpXCIsXG4gICAgXCJkYXJrXCI6IFwidmFyKC0tbXRlLWRhcmspXCIsXG4gICAgXCJkYXJrZXJcIjogXCJ2YXIoLS1tdGUtZGFya2VyKVwiLFxuICAgIFwiZm9jdXNcIjogXCJ2YXIoLS1tdGUtZm9jdXMpXCIsXG4gICAgXCJmb2N1c0xpZ2h0ZXJcIjogXCJ2YXIoLS1tdGUtZm9jdXMtbGlnaHRlcilcIixcbiAgICBcImZvY3VzQ29udHJhc3RcIjogXCJ2YXIoLS1tdGUtZm9jdXMtY29udHJhc3QpXCIsXG4gICAgXCJncmV5MVwiOiBcInZhcigtLW10ZS1ncmV5LTEpXCIsXG4gICAgXCJncmV5MlwiOiBcInZhcigtLW10ZS1ncmV5LTIpXCIsXG4gICAgXCJncmV5M1wiOiBcInZhcigtLW10ZS1ncmV5LTMpXCIsXG4gICAgXCJncmV5NFwiOiBcInZhcigtLW10ZS1ncmV5LTQpXCIsXG4gICAgXCJncmV5NVwiOiBcInZhcigtLW10ZS1ncmV5LTUpXCIsXG4gICAgXCJncmV5NlwiOiBcInZhcigtLW10ZS1ncmV5LTYpXCIsXG4gICAgXCJncmV5N1wiOiBcInZhcigtLW10ZS1ncmV5LTcpXCIsXG4gICAgXCJncmV5OFwiOiBcInZhcigtLW10ZS1ncmV5LTgpXCIsXG4gICAgXCJncmV5OVwiOiBcInZhcigtLW10ZS1ncmV5LTkpXCIsXG4gICAgXCJncmV5MTBcIjogXCJ2YXIoLS1tdGUtZ3JleS0xMClcIixcbiAgICBcInN1cmZhY2UxXCI6IFwidmFyKC0tbXRlLXN1cmZhY2UtMSlcIixcbiAgICBcInN1cmZhY2UyXCI6IFwidmFyKC0tbXRlLXN1cmZhY2UtMilcIixcbiAgICBcInN1cmZhY2UzXCI6IFwidmFyKC0tbXRlLXN1cmZhY2UtMylcIixcbiAgICBcInN1cmZhY2U0XCI6IFwidmFyKC0tbXRlLXN1cmZhY2UtNClcIixcbiAgICBcInN1cmZhY2VJbnZlcnNlXCI6IFwidmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSlcIixcbiAgICBcImluazFcIjogXCJ2YXIoLS1tdGUtaW5rLTEpXCIsXG4gICAgXCJpbmsyXCI6IFwidmFyKC0tbXRlLWluay0yKVwiLFxuICAgIFwiaW5rM1wiOiBcInZhcigtLW10ZS1pbmstMylcIixcbiAgICBcImluazRcIjogXCJ2YXIoLS1tdGUtaW5rLTQpXCIsXG4gICAgXCJpbms1XCI6IFwidmFyKC0tbXRlLWluay01KVwiLFxuICAgIFwiaW5rSW52ZXJzZVwiOiBcInZhcigtLW10ZS1pbmstaW52ZXJzZSlcIixcbiAgICBcImJvcmRlcjFcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLTEpXCIsXG4gICAgXCJib3JkZXIyXCI6IFwidmFyKC0tbXRlLWJvcmRlci0yKVwiLFxuICAgIFwiYm9yZGVyM1wiOiBcInZhcigtLW10ZS1ib3JkZXItMylcIixcbiAgICBcImJvcmRlckludmVyc2VcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLWludmVyc2UpXCIsXG4gICAgXCJkaXNhYmxlZDFcIjogXCJ2YXIoLS1tdGUtZGlzYWJsZWQtMSlcIixcbiAgICBcImRpc2FibGVkMlwiOiBcInZhcigtLW10ZS1kaXNhYmxlZC0yKVwiLFxuICAgIFwiZGlzYWJsZWQzXCI6IFwidmFyKC0tbXRlLWRpc2FibGVkLTMpXCIsXG4gICAgXCJkaXNhYmxlZDRcIjogXCJ2YXIoLS1tdGUtZGlzYWJsZWQtNClcIixcbiAgICBcImRpc2FibGVkSW52ZXJzZTFcIjogXCJ2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0xKVwiLFxuICAgIFwiZGlzYWJsZWRJbnZlcnNlMlwiOiBcInZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTIpXCIsXG4gICAgXCJkaXNhYmxlZEludmVyc2UzXCI6IFwidmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMylcIixcbiAgICBcInJlYWRvbmx5MVwiOiBcInZhcigtLW10ZS1yZWFkb25seS0xKVwiLFxuICAgIFwicmVhZG9ubHkyXCI6IFwidmFyKC0tbXRlLXJlYWRvbmx5LTIpXCIsXG4gICAgXCJyZWFkb25seTNcIjogXCJ2YXIoLS1tdGUtcmVhZG9ubHktMylcIixcbiAgICBcInJlYWRvbmx5NFwiOiBcInZhcigtLW10ZS1yZWFkb25seS00KVwiLFxuICAgIFwiZWxldmF0aW9uQmFzZVwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tYmFzZSlcIixcbiAgICBcImNvZGUxXCI6IFwidmFyKC0tbXRlLWNvZGUtMSlcIixcbiAgICBcImNvZGUyXCI6IFwidmFyKC0tbXRlLWNvZGUtMilcIlxuICB9LFxuICBcInBhbGV0dGVcIjoge1xuICAgIFwiZ3JlZW5cIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1ncmVlbi1saWdodGVyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWdyZWVuLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1ncmVlbi1saWdodClcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1ncmVlbi1saWdodC1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtZ3JlZW4tYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1ncmVlbi1iYXNlLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1ncmVlbi1kYXJrKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWdyZWVuLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtZ3JlZW4tZGFya2VyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWdyZWVuLWRhcmtlci1jb250cmFzdClcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ0ZWFsXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtdGVhbC1saWdodGVyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXRlYWwtbGlnaHRlci1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXRlYWwtbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtdGVhbC1saWdodC1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtdGVhbC1iYXNlKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXRlYWwtYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtdGVhbC1kYXJrKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXRlYWwtZGFyay1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS10ZWFsLWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS10ZWFsLWRhcmtlci1jb250cmFzdClcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJjeWFuXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtY3lhbi1saWdodGVyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWN5YW4tbGlnaHRlci1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWN5YW4tbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtY3lhbi1saWdodC1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtY3lhbi1iYXNlKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWN5YW4tYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtY3lhbi1kYXJrKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWN5YW4tZGFyay1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1jeWFuLWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1jeWFuLWRhcmtlci1jb250cmFzdClcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJibHVlXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtYmx1ZS1saWdodGVyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWJsdWUtbGlnaHRlci1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWJsdWUtbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtYmx1ZS1saWdodC1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtYmx1ZS1iYXNlKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWJsdWUtYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtYmx1ZS1kYXJrKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWJsdWUtZGFyay1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1ibHVlLWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1ibHVlLWRhcmtlci1jb250cmFzdClcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJyeEJsdWVcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1yeC1ibHVlLWxpZ2h0ZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcngtYmx1ZS1saWdodGVyLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcngtYmx1ZS1saWdodClcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1yeC1ibHVlLWxpZ2h0LWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1yeC1ibHVlLWJhc2UpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcngtYmx1ZS1iYXNlLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1yeC1ibHVlLWRhcmspXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcngtYmx1ZS1kYXJrLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXJ4LWJsdWUtZGFya2VyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXJ4LWJsdWUtZGFya2VyLWNvbnRyYXN0KVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInB1cnBsZVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXB1cnBsZS1saWdodGVyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXB1cnBsZS1saWdodGVyLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcHVycGxlLWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXB1cnBsZS1saWdodC1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcHVycGxlLWJhc2UpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcHVycGxlLWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXB1cnBsZS1kYXJrKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXB1cnBsZS1kYXJrLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXB1cnBsZS1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcHVycGxlLWRhcmtlci1jb250cmFzdClcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJtYWdlbnRhXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtbWFnZW50YS1saWdodGVyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLW1hZ2VudGEtbGlnaHRlci1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLW1hZ2VudGEtbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtbWFnZW50YS1saWdodC1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtbWFnZW50YS1iYXNlKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLW1hZ2VudGEtYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtbWFnZW50YS1kYXJrKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLW1hZ2VudGEtZGFyay1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1tYWdlbnRhLWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1tYWdlbnRhLWRhcmtlci1jb250cmFzdClcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJyZWRcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1yZWQtbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1yZWQtbGlnaHRlci1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXJlZC1saWdodClcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1yZWQtbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXJlZC1iYXNlKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXJlZC1iYXNlLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1yZWQtZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1yZWQtZGFyay1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1yZWQtZGFya2VyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXJlZC1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiaGViUmVkXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtaGViLXJlZC1saWdodGVyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWhlYi1yZWQtbGlnaHRlci1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWhlYi1yZWQtbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtaGViLXJlZC1saWdodC1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtaGViLXJlZC1iYXNlKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWhlYi1yZWQtYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtaGViLXJlZC1kYXJrKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWhlYi1yZWQtZGFyay1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1oZWItcmVkLWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1oZWItcmVkLWRhcmtlci1jb250cmFzdClcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJvcmFuZ2VcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1vcmFuZ2UtbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1vcmFuZ2UtbGlnaHRlci1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLW9yYW5nZS1saWdodClcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1vcmFuZ2UtbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLW9yYW5nZS1iYXNlKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLW9yYW5nZS1iYXNlLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1vcmFuZ2UtZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1vcmFuZ2UtZGFyay1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1vcmFuZ2UtZGFya2VyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLW9yYW5nZS1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiYW1iZXJcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1hbWJlci1saWdodGVyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWFtYmVyLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1hbWJlci1saWdodClcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1hbWJlci1saWdodC1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtYW1iZXItYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1hbWJlci1iYXNlLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1hbWJlci1kYXJrKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWFtYmVyLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtYW1iZXItZGFya2VyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWFtYmVyLWRhcmtlci1jb250cmFzdClcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ5ZWxsb3dcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS15ZWxsb3ctbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS15ZWxsb3ctbGlnaHRlci1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXllbGxvdy1saWdodClcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS15ZWxsb3ctbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXllbGxvdy1iYXNlKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXllbGxvdy1iYXNlLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS15ZWxsb3ctZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS15ZWxsb3ctZGFyay1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS15ZWxsb3ctZGFya2VyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXllbGxvdy1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY291cG9uWWVsbG93XCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtY291cG9uLXllbGxvdy1saWdodGVyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWNvdXBvbi15ZWxsb3ctbGlnaHRlci1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWNvdXBvbi15ZWxsb3ctbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtY291cG9uLXllbGxvdy1saWdodC1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtY291cG9uLXllbGxvdy1iYXNlKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWNvdXBvbi15ZWxsb3ctYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtY291cG9uLXllbGxvdy1kYXJrKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWNvdXBvbi15ZWxsb3ctZGFyay1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1jb3Vwb24teWVsbG93LWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1jb3Vwb24teWVsbG93LWRhcmtlci1jb250cmFzdClcIlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJwZ1wiOiB7XG4gICAgXCJjb3JlXCI6IHtcbiAgICAgIFwicHJpbWFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzZWNvbmRhcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0ZXJ0aWFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGFuZ2VyXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzdGF0dXNcIjoge1xuICAgICAgXCJwcmltYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2Vjb25kYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zZWNvbmRhcnktZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0ZXJ0aWFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzdWNjZXNzXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2FybmluZ1wiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRhbmdlclwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtZGFuZ2VyLWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ2aXpcIjoge1xuICAgICAgXCJvbmVcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1vbmUtbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1vbmUtbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LW9uZS1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1vbmUtbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LW9uZS1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LW9uZS1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1vbmUtZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1vbmUtZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1vbmUtZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LW9uZS1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInR3b1wiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXR3by1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LXR3by1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotdHdvLWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LXR3by1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotdHdvLWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotdHdvLWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXR3by1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LXR3by1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXR3by1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotdHdvLWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGhyZWVcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10aHJlZS1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LXRocmVlLWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10aHJlZS1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10aHJlZS1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotdGhyZWUtYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10aHJlZS1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10aHJlZS1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LXRocmVlLWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotdGhyZWUtZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LXRocmVlLWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZm91clwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZvdXItbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1mb3VyLWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1mb3VyLWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZvdXItbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZvdXItYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1mb3VyLWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZvdXItZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1mb3VyLWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotZm91ci1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotZm91ci1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImZpdmVcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1maXZlLWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotZml2ZS1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotZml2ZS1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1maXZlLWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1maXZlLWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotZml2ZS1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1maXZlLWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotZml2ZS1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZpdmUtZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZpdmUtZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzaXhcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1zaXgtbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1zaXgtbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXNpeC1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1zaXgtbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXNpeC1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LXNpeC1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1zaXgtZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1zaXgtZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1zaXgtZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LXNpeC1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwic3RhdGVUb2tlblwiOiB7XG4gICAgXCJzdXJmYWNlMVwiOiB7XG4gICAgICBcImRlZmF1bHRcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTEtZGVmYXVsdC1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS0xLWRlZmF1bHQtYSkpXCIsXG4gICAgICBcImhvdmVyXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLTEtaG92ZXItYSkpXCIsXG4gICAgICBcImFjdGl2ZVwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMS1hY3RpdmUtcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtMS1hY3RpdmUtYSkpXCJcbiAgICB9LFxuICAgIFwic3VyZmFjZTJcIjoge1xuICAgICAgXCJkZWZhdWx0XCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWRlZmF1bHQtcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1kZWZhdWx0LWEpKVwiLFxuICAgICAgXCJob3ZlclwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWEpKVwiLFxuICAgICAgXCJhY3RpdmVcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWEpKVwiXG4gICAgfSxcbiAgICBcInN1cmZhY2UzXCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMy1kZWZhdWx0LXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLTMtZGVmYXVsdC1hKSlcIixcbiAgICAgIFwiaG92ZXJcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTMtaG92ZXItcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtMy1ob3Zlci1hKSlcIixcbiAgICAgIFwiYWN0aXZlXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0zLWFjdGl2ZS1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS0zLWFjdGl2ZS1hKSlcIlxuICAgIH0sXG4gICAgXCJzdXJmYWNlNFwiOiB7XG4gICAgICBcImRlZmF1bHRcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTQtZGVmYXVsdC1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS00LWRlZmF1bHQtYSkpXCIsXG4gICAgICBcImhvdmVyXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS00LWhvdmVyLXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLTQtaG92ZXItYSkpXCIsXG4gICAgICBcImFjdGl2ZVwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtNC1hY3RpdmUtcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtNC1hY3RpdmUtYSkpXCJcbiAgICB9LFxuICAgIFwic3VyZmFjZUludmVyc2VcIjoge1xuICAgICAgXCJkZWZhdWx0XCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LWEpKVwiLFxuICAgICAgXCJob3ZlclwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLWEpKVwiLFxuICAgICAgXCJhY3RpdmVcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLWEpKVwiXG4gICAgfSxcbiAgICBcImlua0ludmVyc2VcIjoge1xuICAgICAgXCJkZWZhdWx0XCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtaW5rLWludmVyc2UtZGVmYXVsdC1yZ2IpLCB2YXIoLS1tdGUtaXQtaW5rLWludmVyc2UtZGVmYXVsdC1hKSlcIixcbiAgICAgIFwiaG92ZXJcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1pbmstaW52ZXJzZS1ob3Zlci1yZ2IpLCB2YXIoLS1tdGUtaXQtaW5rLWludmVyc2UtaG92ZXItYSkpXCIsXG4gICAgICBcImFjdGl2ZVwiOiBcInJnYmEodmFyKC0tbXRlLWl0LWluay1pbnZlcnNlLWFjdGl2ZS1yZ2IpLCB2YXIoLS1tdGUtaXQtaW5rLWludmVyc2UtYWN0aXZlLWEpKVwiXG4gICAgfSxcbiAgICBcImxpbmtcIjoge1xuICAgICAgXCJkZWZhdWx0XCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtbGluay1kZWZhdWx0LXJnYiksIHZhcigtLW10ZS1pdC1saW5rLWRlZmF1bHQtYSkpXCIsXG4gICAgICBcInZpc2l0ZWRcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1saW5rLXZpc2l0ZWQtcmdiKSwgdmFyKC0tbXRlLWl0LWxpbmstdmlzaXRlZC1hKSlcIlxuICAgIH1cbiAgfVxufTsiLCAiLyoqXG4gKiBEbyBub3QgZWRpdCBkaXJlY3RseVxuICogR2VuZXJhdGVkIG9uIFR1ZSwgMDIgQXByIDIwMjQgMTg6NDY6NTEgR01UXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwib3BhY2l0eVwiOiB7XG4gICAgXCJ4eGxcIjogXCItLW10ZS1vcGFjaXR5LXh4bFwiLFxuICAgIFwieGxcIjogXCItLW10ZS1vcGFjaXR5LXhsXCIsXG4gICAgXCJsZ1wiOiBcIi0tbXRlLW9wYWNpdHktbGdcIixcbiAgICBcIm1kXCI6IFwiLS1tdGUtb3BhY2l0eS1tZFwiLFxuICAgIFwic21cIjogXCItLW10ZS1vcGFjaXR5LXNtXCIsXG4gICAgXCJ4c1wiOiBcIi0tbXRlLW9wYWNpdHkteHNcIixcbiAgICBcInh4c1wiOiBcIi0tbXRlLW9wYWNpdHkteHhzXCIsXG4gICAgXCJ4eHhzXCI6IFwiLS1tdGUtb3BhY2l0eS14eHhzXCJcbiAgfSxcbiAgXCJib3JkZXJcIjoge1xuICAgIFwicmFkaXVzXCI6IHtcbiAgICAgIFwibm9uZVwiOiBcIi0tbXRlLWJvcmRlci1yYWRpdXMtbm9uZVwiLFxuICAgICAgXCJ4c1wiOiBcIi0tbXRlLWJvcmRlci1yYWRpdXMteHNcIixcbiAgICAgIFwic21cIjogXCItLW10ZS1ib3JkZXItcmFkaXVzLXNtXCIsXG4gICAgICBcIm1kXCI6IFwiLS1tdGUtYm9yZGVyLXJhZGl1cy1tZFwiLFxuICAgICAgXCJsZ1wiOiBcIi0tbXRlLWJvcmRlci1yYWRpdXMtbGdcIixcbiAgICAgIFwieGxcIjogXCItLW10ZS1ib3JkZXItcmFkaXVzLXhsXCIsXG4gICAgICBcInh4bFwiOiBcIi0tbXRlLWJvcmRlci1yYWRpdXMteHhsXCIsXG4gICAgICBcImZ1bGxcIjogXCItLW10ZS1ib3JkZXItcmFkaXVzLWZ1bGxcIlxuICAgIH0sXG4gICAgXCJ3aWR0aFwiOiB7XG4gICAgICBcIm5vbmVcIjogXCItLW10ZS1ib3JkZXItd2lkdGgtbm9uZVwiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiLS1tdGUtYm9yZGVyLXdpZHRoLWRlZmF1bHRcIixcbiAgICAgIFwic21cIjogXCItLW10ZS1ib3JkZXItd2lkdGgtc21cIixcbiAgICAgIFwibWRcIjogXCItLW10ZS1ib3JkZXItd2lkdGgtbWRcIixcbiAgICAgIFwibGdcIjogXCItLW10ZS1ib3JkZXItd2lkdGgtbGdcIlxuICAgIH1cbiAgfSxcbiAgXCJlbGV2YXRpb25cIjoge1xuICAgIFwibGV2ZWxcIjoge1xuICAgICAgXCIwXCI6IFwiLS1tdGUtZWxldmF0aW9uLWxldmVsLTBcIixcbiAgICAgIFwiMVwiOiBcIi0tbXRlLWVsZXZhdGlvbi1sZXZlbC0xXCIsXG4gICAgICBcIjJcIjogXCItLW10ZS1lbGV2YXRpb24tbGV2ZWwtMlwiLFxuICAgICAgXCIzXCI6IFwiLS1tdGUtZWxldmF0aW9uLWxldmVsLTNcIixcbiAgICAgIFwiNFwiOiBcIi0tbXRlLWVsZXZhdGlvbi1sZXZlbC00XCJcbiAgICB9LFxuICAgIFwib3BhY2l0eVwiOiB7XG4gICAgICBcIjBcIjogXCItLW10ZS1lbGV2YXRpb24tb3BhY2l0eS0wXCIsXG4gICAgICBcIjFcIjogXCItLW10ZS1lbGV2YXRpb24tb3BhY2l0eS0xXCIsXG4gICAgICBcIjJcIjogXCItLW10ZS1lbGV2YXRpb24tb3BhY2l0eS0yXCIsXG4gICAgICBcIjNcIjogXCItLW10ZS1lbGV2YXRpb24tb3BhY2l0eS0zXCIsXG4gICAgICBcIjRcIjogXCItLW10ZS1lbGV2YXRpb24tb3BhY2l0eS00XCJcbiAgICB9LFxuICAgIFwiejBcIjogXCItLW10ZS1lbGV2YXRpb24tejBcIixcbiAgICBcInoxXCI6IFwiLS1tdGUtZWxldmF0aW9uLXoxXCIsXG4gICAgXCJ6MlwiOiBcIi0tbXRlLWVsZXZhdGlvbi16MlwiLFxuICAgIFwiejNcIjogXCItLW10ZS1lbGV2YXRpb24tejNcIixcbiAgICBcIno0XCI6IFwiLS1tdGUtZWxldmF0aW9uLXo0XCJcbiAgfSxcbiAgXCJ6SW5kZXhcIjoge1xuICAgIFwiMFwiOiBcIi0tbXRlLXotaW5kZXgtMFwiLFxuICAgIFwiMTBcIjogXCItLW10ZS16LWluZGV4LTEwXCIsXG4gICAgXCIyMFwiOiBcIi0tbXRlLXotaW5kZXgtMjBcIixcbiAgICBcIjMwXCI6IFwiLS1tdGUtei1pbmRleC0zMFwiLFxuICAgIFwiNDBcIjogXCItLW10ZS16LWluZGV4LTQwXCIsXG4gICAgXCI1MFwiOiBcIi0tbXRlLXotaW5kZXgtNTBcIixcbiAgICBcIi0xXCI6IFwiLS1tdGUtei1pbmRleC0xXCIsXG4gICAgXCJhdXRvXCI6IFwiLS1tdGUtei1pbmRleC1hdXRvXCJcbiAgfSxcbiAgXCJncmlkXCI6IHtcbiAgICBcImJyZWFrcG9pbnRcIjoge1xuICAgICAgXCJ4c1wiOiBcIjBcIixcbiAgICAgIFwic21cIjogXCI0ODBweFwiLFxuICAgICAgXCJtZFwiOiBcIjc2OHB4XCIsXG4gICAgICBcImxnXCI6IFwiMTAyNHB4XCIsXG4gICAgICBcInhsXCI6IFwiMTI4MHB4XCIsXG4gICAgICBcInh4bFwiOiBcIjE1MzZweFwiXG4gICAgfSxcbiAgICBcImNvbnRhaW5lck1heFdpZHRoXCI6IHtcbiAgICAgIFwic21cIjogXCI3NjhweFwiLFxuICAgICAgXCJtZFwiOiBcIjEwMjRweFwiLFxuICAgICAgXCJsZ1wiOiBcIjEyODBweFwiLFxuICAgICAgXCJ4bFwiOiBcIjE0NDBweFwiLFxuICAgICAgXCJ4eGxcIjogXCIxNDQwcHhcIlxuICAgIH1cbiAgfSxcbiAgXCJzaXplXCI6IHtcbiAgICBcInNjYWxlXCI6IHtcbiAgICAgIFwic21cIjogXCItLW10ZS1zaXplLXNjYWxlLXNtXCIsXG4gICAgICBcIm1kXCI6IFwiLS1tdGUtc2l6ZS1zY2FsZS1tZFwiLFxuICAgICAgXCJsZ1wiOiBcIi0tbXRlLXNpemUtc2NhbGUtbGdcIlxuICAgIH0sXG4gICAgXCJkZW5zaXRpZXNcIjogW1xuICAgICAgXCJjb21wYWN0XCIsXG4gICAgICBcImNvbWZ5XCIsXG4gICAgICBcInJvb215XCJcbiAgICBdXG4gIH0sXG4gIFwic3BhY2VcIjoge1xuICAgIFwibm9uZVwiOiBcIi0tbXRlLXNwYWNlLW5vbmVcIixcbiAgICBcInh4c1wiOiBcIi0tbXRlLXNwYWNlLXh4c1wiLFxuICAgIFwieHNcIjogXCItLW10ZS1zcGFjZS14c1wiLFxuICAgIFwic21cIjogXCItLW10ZS1zcGFjZS1zbVwiLFxuICAgIFwibWRcIjogXCItLW10ZS1zcGFjZS1tZFwiLFxuICAgIFwibGdcIjogXCItLW10ZS1zcGFjZS1sZ1wiLFxuICAgIFwieGxcIjogXCItLW10ZS1zcGFjZS14bFwiLFxuICAgIFwieHhsXCI6IFwiLS1tdGUtc3BhY2UteHhsXCIsXG4gICAgXCJ4eHhsXCI6IFwiLS1tdGUtc3BhY2UteHh4bFwiLFxuICAgIFwiY29tcGFjdFwiOiB7XG4gICAgICBcIm5vbmVcIjogXCItLW10ZS1zcGFjZS1jb21wYWN0LW5vbmVcIixcbiAgICAgIFwieHhzXCI6IFwiLS1tdGUtc3BhY2UtY29tcGFjdC14eHNcIixcbiAgICAgIFwieHNcIjogXCItLW10ZS1zcGFjZS1jb21wYWN0LXhzXCIsXG4gICAgICBcInNtXCI6IFwiLS1tdGUtc3BhY2UtY29tcGFjdC1zbVwiLFxuICAgICAgXCJtZFwiOiBcIi0tbXRlLXNwYWNlLWNvbXBhY3QtbWRcIixcbiAgICAgIFwibGdcIjogXCItLW10ZS1zcGFjZS1jb21wYWN0LWxnXCIsXG4gICAgICBcInhsXCI6IFwiLS1tdGUtc3BhY2UtY29tcGFjdC14bFwiLFxuICAgICAgXCJ4eGxcIjogXCItLW10ZS1zcGFjZS1jb21wYWN0LXh4bFwiLFxuICAgICAgXCJ4eHhsXCI6IFwiLS1tdGUtc3BhY2UtY29tcGFjdC14eHhsXCJcbiAgICB9LFxuICAgIFwiY29tZnlcIjoge1xuICAgICAgXCJub25lXCI6IFwiLS1tdGUtc3BhY2UtY29tZnktbm9uZVwiLFxuICAgICAgXCJ4eHNcIjogXCItLW10ZS1zcGFjZS1jb21meS14eHNcIixcbiAgICAgIFwieHNcIjogXCItLW10ZS1zcGFjZS1jb21meS14c1wiLFxuICAgICAgXCJzbVwiOiBcIi0tbXRlLXNwYWNlLWNvbWZ5LXNtXCIsXG4gICAgICBcIm1kXCI6IFwiLS1tdGUtc3BhY2UtY29tZnktbWRcIixcbiAgICAgIFwibGdcIjogXCItLW10ZS1zcGFjZS1jb21meS1sZ1wiLFxuICAgICAgXCJ4bFwiOiBcIi0tbXRlLXNwYWNlLWNvbWZ5LXhsXCIsXG4gICAgICBcInh4bFwiOiBcIi0tbXRlLXNwYWNlLWNvbWZ5LXh4bFwiLFxuICAgICAgXCJ4eHhsXCI6IFwiLS1tdGUtc3BhY2UtY29tZnkteHh4bFwiXG4gICAgfSxcbiAgICBcInJvb215XCI6IHtcbiAgICAgIFwibm9uZVwiOiBcIi0tbXRlLXNwYWNlLXJvb215LW5vbmVcIixcbiAgICAgIFwieHhzXCI6IFwiLS1tdGUtc3BhY2Utcm9vbXkteHhzXCIsXG4gICAgICBcInhzXCI6IFwiLS1tdGUtc3BhY2Utcm9vbXkteHNcIixcbiAgICAgIFwic21cIjogXCItLW10ZS1zcGFjZS1yb29teS1zbVwiLFxuICAgICAgXCJtZFwiOiBcIi0tbXRlLXNwYWNlLXJvb215LW1kXCIsXG4gICAgICBcImxnXCI6IFwiLS1tdGUtc3BhY2Utcm9vbXktbGdcIixcbiAgICAgIFwieGxcIjogXCItLW10ZS1zcGFjZS1yb29teS14bFwiLFxuICAgICAgXCJ4eGxcIjogXCItLW10ZS1zcGFjZS1yb29teS14eGxcIixcbiAgICAgIFwieHh4bFwiOiBcIi0tbXRlLXNwYWNlLXJvb215LXh4eGxcIlxuICAgIH1cbiAgfSxcbiAgXCJmb250XCI6IHtcbiAgICBcImJhc2VcIjogXCItLW10ZS1mb250LWJhc2VcIixcbiAgICBcImZhbWlseVwiOiB7XG4gICAgICBcInNhbnNcIjogXCItLW10ZS1mb250LWZhbWlseS1zYW5zXCIsXG4gICAgICBcInNlcmlmXCI6IFwiLS1tdGUtZm9udC1mYW1pbHktc2VyaWZcIixcbiAgICAgIFwibW9ub1wiOiBcIi0tbXRlLWZvbnQtZmFtaWx5LW1vbm9cIlxuICAgIH0sXG4gICAgXCJ3ZWlnaHRcIjoge1xuICAgICAgXCJsaWdodFwiOiBcIi0tbXRlLWZvbnQtd2VpZ2h0LWxpZ2h0XCIsXG4gICAgICBcInJlZ3VsYXJcIjogXCItLW10ZS1mb250LXdlaWdodC1yZWd1bGFyXCIsXG4gICAgICBcIm1lZGl1bVwiOiBcIi0tbXRlLWZvbnQtd2VpZ2h0LW1lZGl1bVwiLFxuICAgICAgXCJib2xkXCI6IFwiLS1tdGUtZm9udC13ZWlnaHQtYm9sZFwiXG4gICAgfSxcbiAgICBcInJhdGlvXCI6IHtcbiAgICAgIFwic21cIjogMC44LFxuICAgICAgXCJtZFwiOiAxLFxuICAgICAgXCJsZ1wiOiAxLjJcbiAgICB9LFxuICAgIFwic2V0XCI6IHtcbiAgICAgIFwiaDFcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwiLS1tdGUtZm9udC1zZXQtaDEtZm9udC1zaXplXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWgxLWxpbmUtaGVpZ2h0XCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWgxLWZvbnQtd2VpZ2h0XCJcbiAgICAgIH0sXG4gICAgICBcImgyXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcIi0tbXRlLWZvbnQtc2V0LWgyLWZvbnQtc2l6ZVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1oMi1saW5lLWhlaWdodFwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1oMi1mb250LXdlaWdodFwiXG4gICAgICB9LFxuICAgICAgXCJoM1wiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCItLW10ZS1mb250LXNldC1oMy1mb250LXNpemVcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtaDMtbGluZS1oZWlnaHRcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtaDMtZm9udC13ZWlnaHRcIlxuICAgICAgfSxcbiAgICAgIFwiaDRcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwiLS1tdGUtZm9udC1zZXQtaDQtZm9udC1zaXplXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWg0LWxpbmUtaGVpZ2h0XCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWg0LWZvbnQtd2VpZ2h0XCJcbiAgICAgIH0sXG4gICAgICBcImg1XCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcIi0tbXRlLWZvbnQtc2V0LWg1LWZvbnQtc2l6ZVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1oNS1saW5lLWhlaWdodFwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1oNS1mb250LXdlaWdodFwiXG4gICAgICB9LFxuICAgICAgXCJoNlwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCItLW10ZS1mb250LXNldC1oNi1mb250LXNpemVcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtaDYtbGluZS1oZWlnaHRcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtaDYtZm9udC13ZWlnaHRcIlxuICAgICAgfSxcbiAgICAgIFwic3VidGl0bGVcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwiLS1tdGUtZm9udC1zZXQtc3VidGl0bGUtZm9udC1zaXplXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0XCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0XCJcbiAgICAgIH0sXG4gICAgICBcImJvZHkxXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcIi0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtc2l6ZVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1ib2R5MS1saW5lLWhlaWdodFwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1ib2R5MS1mb250LXdlaWdodFwiXG4gICAgICB9LFxuICAgICAgXCJib2R5MlwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCItLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXNpemVcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtYm9keTItbGluZS1oZWlnaHRcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC13ZWlnaHRcIlxuICAgICAgfSxcbiAgICAgIFwiY2FwdGlvblwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCItLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtc2l6ZVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1jYXB0aW9uLWxpbmUtaGVpZ2h0XCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWNhcHRpb24tZm9udC13ZWlnaHRcIlxuICAgICAgfSxcbiAgICAgIFwiYnV0dG9uXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcIi0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1mb250LXNpemVcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtYnV0dG9uLWxpbmUtaGVpZ2h0XCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1mb250LXdlaWdodFwiXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcImFuaW1hdGlvblwiOiB7XG4gICAgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjoge1xuICAgICAgXCJleHRyYVNob3J0XCI6IFwiODBtc1wiLFxuICAgICAgXCJzaG9ydGVyXCI6IFwiMTIwbXNcIixcbiAgICAgIFwic2hvcnRcIjogXCIyMDBtc1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiMzAwbXNcIixcbiAgICAgIFwibG9uZ1wiOiBcIjUwMG1zXCJcbiAgICB9LFxuICAgIFwidHJhbnNpdGlvbkR1cmF0aW9uSnNcIjoge1xuICAgICAgXCJleHRyYVNob3J0XCI6IDAuMDgsXG4gICAgICBcInNob3J0ZXJcIjogMC4xMixcbiAgICAgIFwic2hvcnRcIjogMC4yLFxuICAgICAgXCJkZWZhdWx0XCI6IDAuMyxcbiAgICAgIFwibG9uZ1wiOiAwLjVcbiAgICB9LFxuICAgIFwidGltaW5nRnVuY3Rpb25cIjoge1xuICAgICAgXCJkZWNlbGVyYXRlT3V0XCI6IFwiY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSlcIixcbiAgICAgIFwic3RhbmRhcmRcIjogXCJjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpXCIsXG4gICAgICBcImFjY2VsZXJhdGVJblwiOiBcImN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpXCIsXG4gICAgICBcInNoYXJwXCI6IFwiY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKVwiLFxuICAgICAgXCJpbk91dFwiOiBcImN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKVwiXG4gICAgfSxcbiAgICBcInRpbWluZ0Z1bmN0aW9uSnNcIjoge1xuICAgICAgXCJkZWNlbGVyYXRlT3V0XCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgMC4yLFxuICAgICAgICAxXG4gICAgICBdLFxuICAgICAgXCJzdGFuZGFyZFwiOiBbXG4gICAgICAgIDAuNCxcbiAgICAgICAgMCxcbiAgICAgICAgMC4yLFxuICAgICAgICAxXG4gICAgICBdLFxuICAgICAgXCJhY2NlbGVyYXRlSW5cIjogW1xuICAgICAgICAwLjQsXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgICAgIDFcbiAgICAgIF0sXG4gICAgICBcInNoYXJwXCI6IFtcbiAgICAgICAgMC40LFxuICAgICAgICAwLFxuICAgICAgICAwLjYsXG4gICAgICAgIDFcbiAgICAgIF0sXG4gICAgICBcImluT3V0XCI6IFtcbiAgICAgICAgMC4zNSxcbiAgICAgICAgMCxcbiAgICAgICAgMC4yNSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfVxufTsiLCAiZXhwb3J0IGRlZmF1bHQge1xuICBcImNvbG9yXCI6IHtcbiAgICBcImJsYWNrXCI6IFwiLS1tdGUtYmxhY2tcIixcbiAgICBcIndoaXRlXCI6IFwiLS1tdGUtd2hpdGVcIixcbiAgICBcImxpZ2h0XCI6IFwiLS1tdGUtbGlnaHRcIixcbiAgICBcImRhcmtcIjogXCItLW10ZS1kYXJrXCIsXG4gICAgXCJkYXJrZXJcIjogXCItLW10ZS1kYXJrZXJcIixcbiAgICBcImZvY3VzXCI6IFwiLS1tdGUtZm9jdXNcIixcbiAgICBcImZvY3VzTGlnaHRlclwiOiBcIi0tbXRlLWZvY3VzLWxpZ2h0ZXJcIixcbiAgICBcImZvY3VzQ29udHJhc3RcIjogXCItLW10ZS1mb2N1cy1jb250cmFzdFwiLFxuICAgIFwiZ3JleTFcIjogXCItLW10ZS1ncmV5LTFcIixcbiAgICBcImdyZXkyXCI6IFwiLS1tdGUtZ3JleS0yXCIsXG4gICAgXCJncmV5M1wiOiBcIi0tbXRlLWdyZXktM1wiLFxuICAgIFwiZ3JleTRcIjogXCItLW10ZS1ncmV5LTRcIixcbiAgICBcImdyZXk1XCI6IFwiLS1tdGUtZ3JleS01XCIsXG4gICAgXCJncmV5NlwiOiBcIi0tbXRlLWdyZXktNlwiLFxuICAgIFwiZ3JleTdcIjogXCItLW10ZS1ncmV5LTdcIixcbiAgICBcImdyZXk4XCI6IFwiLS1tdGUtZ3JleS04XCIsXG4gICAgXCJncmV5OVwiOiBcIi0tbXRlLWdyZXktOVwiLFxuICAgIFwiZ3JleTEwXCI6IFwiLS1tdGUtZ3JleS0xMFwiLFxuICAgIFwic3VyZmFjZTFcIjogXCItLW10ZS1zdXJmYWNlLTFcIixcbiAgICBcInN1cmZhY2UyXCI6IFwiLS1tdGUtc3VyZmFjZS0yXCIsXG4gICAgXCJzdXJmYWNlM1wiOiBcIi0tbXRlLXN1cmZhY2UtM1wiLFxuICAgIFwic3VyZmFjZTRcIjogXCItLW10ZS1zdXJmYWNlLTRcIixcbiAgICBcInN1cmZhY2VJbnZlcnNlXCI6IFwiLS1tdGUtc3VyZmFjZS1pbnZlcnNlXCIsXG4gICAgXCJpbmsxXCI6IFwiLS1tdGUtaW5rLTFcIixcbiAgICBcImluazJcIjogXCItLW10ZS1pbmstMlwiLFxuICAgIFwiaW5rM1wiOiBcIi0tbXRlLWluay0zXCIsXG4gICAgXCJpbms0XCI6IFwiLS1tdGUtaW5rLTRcIixcbiAgICBcImluazVcIjogXCItLW10ZS1pbmstNVwiLFxuICAgIFwiaW5rSW52ZXJzZVwiOiBcIi0tbXRlLWluay1pbnZlcnNlXCIsXG4gICAgXCJib3JkZXIxXCI6IFwiLS1tdGUtYm9yZGVyLTFcIixcbiAgICBcImJvcmRlcjJcIjogXCItLW10ZS1ib3JkZXItMlwiLFxuICAgIFwiYm9yZGVyM1wiOiBcIi0tbXRlLWJvcmRlci0zXCIsXG4gICAgXCJib3JkZXJJbnZlcnNlXCI6IFwiLS1tdGUtYm9yZGVyLWludmVyc2VcIixcbiAgICBcImRpc2FibGVkMVwiOiBcIi0tbXRlLWRpc2FibGVkLTFcIixcbiAgICBcImRpc2FibGVkMlwiOiBcIi0tbXRlLWRpc2FibGVkLTJcIixcbiAgICBcImRpc2FibGVkM1wiOiBcIi0tbXRlLWRpc2FibGVkLTNcIixcbiAgICBcImRpc2FibGVkNFwiOiBcIi0tbXRlLWRpc2FibGVkLTRcIixcbiAgICBcImRpc2FibGVkSW52ZXJzZTFcIjogXCItLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTFcIixcbiAgICBcImRpc2FibGVkSW52ZXJzZTJcIjogXCItLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTJcIixcbiAgICBcImRpc2FibGVkSW52ZXJzZTNcIjogXCItLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTNcIixcbiAgICBcInJlYWRvbmx5MVwiOiBcIi0tbXRlLXJlYWRvbmx5LTFcIixcbiAgICBcInJlYWRvbmx5MlwiOiBcIi0tbXRlLXJlYWRvbmx5LTJcIixcbiAgICBcInJlYWRvbmx5M1wiOiBcIi0tbXRlLXJlYWRvbmx5LTNcIixcbiAgICBcInJlYWRvbmx5NFwiOiBcIi0tbXRlLXJlYWRvbmx5LTRcIixcbiAgICBcImVsZXZhdGlvbkJhc2VcIjogXCItLW10ZS1lbGV2YXRpb24tYmFzZVwiLFxuICAgIFwiY29kZTFcIjogXCItLW10ZS1jb2RlLTFcIixcbiAgICBcImNvZGUyXCI6IFwiLS1tdGUtY29kZS0yXCJcbiAgfSxcbiAgXCJwYWxldHRlXCI6IHtcbiAgICBcImdyZWVuXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1ncmVlbi1saWdodGVyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1ncmVlbi1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWdyZWVuLWxpZ2h0XCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1ncmVlbi1saWdodC1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWdyZWVuLWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWdyZWVuLWJhc2UtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1ncmVlbi1kYXJrXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1ncmVlbi1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1ncmVlbi1kYXJrZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWdyZWVuLWRhcmtlci1jb250cmFzdFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInRlYWxcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXRlYWwtbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdGVhbC1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXRlYWwtbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXRlYWwtbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS10ZWFsLWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXRlYWwtYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXRlYWwtZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdGVhbC1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS10ZWFsLWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdGVhbC1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJjeWFuXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jeWFuLWxpZ2h0ZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWN5YW4tbGlnaHRlci1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jeWFuLWxpZ2h0XCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jeWFuLWxpZ2h0LWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY3lhbi1iYXNlXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jeWFuLWJhc2UtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jeWFuLWRhcmtcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWN5YW4tZGFyay1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY3lhbi1kYXJrZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWN5YW4tZGFya2VyLWNvbnRyYXN0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiYmx1ZVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtYmx1ZS1saWdodGVyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1ibHVlLWxpZ2h0ZXItY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtYmx1ZS1saWdodFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtYmx1ZS1saWdodC1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWJsdWUtYmFzZVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtYmx1ZS1iYXNlLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtYmx1ZS1kYXJrXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1ibHVlLWRhcmstY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWJsdWUtZGFya2VyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1ibHVlLWRhcmtlci1jb250cmFzdFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInJ4Qmx1ZVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtcngtYmx1ZS1saWdodGVyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1yeC1ibHVlLWxpZ2h0ZXItY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtcngtYmx1ZS1saWdodFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcngtYmx1ZS1saWdodC1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXJ4LWJsdWUtYmFzZVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcngtYmx1ZS1iYXNlLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtcngtYmx1ZS1kYXJrXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1yeC1ibHVlLWRhcmstY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXJ4LWJsdWUtZGFya2VyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1yeC1ibHVlLWRhcmtlci1jb250cmFzdFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInB1cnBsZVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtcHVycGxlLWxpZ2h0ZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXB1cnBsZS1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXB1cnBsZS1saWdodFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcHVycGxlLWxpZ2h0LWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtcHVycGxlLWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXB1cnBsZS1iYXNlLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtcHVycGxlLWRhcmtcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXB1cnBsZS1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1wdXJwbGUtZGFya2VyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1wdXJwbGUtZGFya2VyLWNvbnRyYXN0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwibWFnZW50YVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtbWFnZW50YS1saWdodGVyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1tYWdlbnRhLWxpZ2h0ZXItY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtbWFnZW50YS1saWdodFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtbWFnZW50YS1saWdodC1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLW1hZ2VudGEtYmFzZVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtbWFnZW50YS1iYXNlLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtbWFnZW50YS1kYXJrXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1tYWdlbnRhLWRhcmstY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLW1hZ2VudGEtZGFya2VyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1tYWdlbnRhLWRhcmtlci1jb250cmFzdFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInJlZFwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtcmVkLWxpZ2h0ZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXJlZC1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXJlZC1saWdodFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcmVkLWxpZ2h0LWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtcmVkLWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXJlZC1iYXNlLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtcmVkLWRhcmtcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXJlZC1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1yZWQtZGFya2VyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1yZWQtZGFya2VyLWNvbnRyYXN0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiaGViUmVkXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1oZWItcmVkLWxpZ2h0ZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWhlYi1yZWQtbGlnaHRlci1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1oZWItcmVkLWxpZ2h0XCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1oZWItcmVkLWxpZ2h0LWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtaGViLXJlZC1iYXNlXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1oZWItcmVkLWJhc2UtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1oZWItcmVkLWRhcmtcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWhlYi1yZWQtZGFyay1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtaGViLXJlZC1kYXJrZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWhlYi1yZWQtZGFya2VyLWNvbnRyYXN0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwib3JhbmdlXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1vcmFuZ2UtbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtb3JhbmdlLWxpZ2h0ZXItY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtb3JhbmdlLWxpZ2h0XCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1vcmFuZ2UtbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1vcmFuZ2UtYmFzZVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtb3JhbmdlLWJhc2UtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1vcmFuZ2UtZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtb3JhbmdlLWRhcmstY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLW9yYW5nZS1kYXJrZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLW9yYW5nZS1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJhbWJlclwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtYW1iZXItbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtYW1iZXItbGlnaHRlci1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1hbWJlci1saWdodFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtYW1iZXItbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1hbWJlci1iYXNlXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1hbWJlci1iYXNlLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtYW1iZXItZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtYW1iZXItZGFyay1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtYW1iZXItZGFya2VyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1hbWJlci1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ5ZWxsb3dcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXllbGxvdy1saWdodGVyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS15ZWxsb3ctbGlnaHRlci1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS15ZWxsb3ctbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXllbGxvdy1saWdodC1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXllbGxvdy1iYXNlXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS15ZWxsb3ctYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXllbGxvdy1kYXJrXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS15ZWxsb3ctZGFyay1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUteWVsbG93LWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUteWVsbG93LWRhcmtlci1jb250cmFzdFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImNvdXBvblllbGxvd1wiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY291cG9uLXllbGxvdy1saWdodGVyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3Vwb24teWVsbG93LWxpZ2h0ZXItY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY291cG9uLXllbGxvdy1saWdodFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY291cG9uLXllbGxvdy1saWdodC1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvdXBvbi15ZWxsb3ctYmFzZVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY291cG9uLXllbGxvdy1iYXNlLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY291cG9uLXllbGxvdy1kYXJrXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3Vwb24teWVsbG93LWRhcmstY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvdXBvbi15ZWxsb3ctZGFya2VyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3Vwb24teWVsbG93LWRhcmtlci1jb250cmFzdFwiXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcInBnXCI6IHtcbiAgICBcImNvcmVcIjoge1xuICAgICAgXCJwcmltYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1wcmltYXJ5LWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtcHJpbWFyeS1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtcHJpbWFyeS1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1wcmltYXJ5LWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1wcmltYXJ5LWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1wcmltYXJ5LWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXByaW1hcnktZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXByaW1hcnktZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2Vjb25kYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1zZWNvbmRhcnktbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1zZWNvbmRhcnktbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXNlY29uZGFyeS1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1zZWNvbmRhcnktbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXNlY29uZGFyeS1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXNlY29uZGFyeS1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1zZWNvbmRhcnktZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1zZWNvbmRhcnktZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1zZWNvbmRhcnktZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0ZXJ0aWFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtdGVydGlhcnktbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS10ZXJ0aWFyeS1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtdGVydGlhcnktbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtdGVydGlhcnktbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXRlcnRpYXJ5LWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtdGVydGlhcnktYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtdGVydGlhcnktZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS10ZXJ0aWFyeS1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS10ZXJ0aWFyeS1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkYW5nZXJcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLWRhbmdlci1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLWRhbmdlci1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtZGFuZ2VyLWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLWRhbmdlci1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLWRhbmdlci1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLWRhbmdlci1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLWRhbmdlci1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtZGFuZ2VyLWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic3RhdHVzXCI6IHtcbiAgICAgIFwicHJpbWFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1wcmltYXJ5LWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1wcmltYXJ5LWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXByaW1hcnktbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1wcmltYXJ5LWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXByaW1hcnktYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXByaW1hcnktYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1wcmltYXJ5LWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1wcmltYXJ5LWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1wcmltYXJ5LWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXByaW1hcnktZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2Vjb25kYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1zZWNvbmRhcnktYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1zZWNvbmRhcnktZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRlcnRpYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtdGVydGlhcnktZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtdGVydGlhcnktZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic3VjY2Vzc1wiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1zdWNjZXNzLWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1zdWNjZXNzLWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1zdWNjZXNzLWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1zdWNjZXNzLWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1zdWNjZXNzLWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1zdWNjZXNzLWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2FybmluZ1wiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy13YXJuaW5nLWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy13YXJuaW5nLWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXdhcm5pbmctbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy13YXJuaW5nLWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXdhcm5pbmctYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXdhcm5pbmctYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy13YXJuaW5nLWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy13YXJuaW5nLWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy13YXJuaW5nLWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXdhcm5pbmctZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGFuZ2VyXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLWRhbmdlci1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtZGFuZ2VyLWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLWRhbmdlci1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLWRhbmdlci1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1kYW5nZXItYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLWRhbmdlci1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLWRhbmdlci1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtZGFuZ2VyLWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1kYW5nZXItZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtZGFuZ2VyLWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwidml6XCI6IHtcbiAgICAgIFwib25lXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LW9uZS1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotb25lLWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LW9uZS1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LW9uZS1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1vbmUtYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LW9uZS1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LW9uZS1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotb25lLWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1vbmUtZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotb25lLWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInR3b1wiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei10d28tbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXR3by1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei10d28tbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei10d28tbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotdHdvLWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei10d28tYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei10d28tZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXR3by1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotdHdvLWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXR3by1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0aHJlZVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei10aHJlZS1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotdGhyZWUtbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotdGhyZWUtbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei10aHJlZS1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei10aHJlZS1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotdGhyZWUtYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei10aHJlZS1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotdGhyZWUtZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXRocmVlLWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXRocmVlLWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImZvdXJcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotZm91ci1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotZm91ci1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1mb3VyLWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotZm91ci1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1mb3VyLWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1mb3VyLWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotZm91ci1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotZm91ci1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotZm91ci1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1mb3VyLWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImZpdmVcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotZml2ZS1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotZml2ZS1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1maXZlLWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotZml2ZS1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1maXZlLWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1maXZlLWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotZml2ZS1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotZml2ZS1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotZml2ZS1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1maXZlLWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNpeFwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1zaXgtbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXNpeC1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1zaXgtbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1zaXgtbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotc2l4LWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1zaXgtYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1zaXgtZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXNpeC1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotc2l4LWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXNpeC1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcInN0YXRlVG9rZW5cIjoge1xuICAgIFwic3VyZmFjZTFcIjoge1xuICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLTEtZGVmYXVsdC1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0xLWRlZmF1bHQtYVwiXG4gICAgICB9LFxuICAgICAgXCJob3ZlclwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLTEtaG92ZXItYVwiXG4gICAgICB9LFxuICAgICAgXCJhY3RpdmVcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMS1hY3RpdmUtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMS1hY3RpdmUtYVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInN1cmZhY2UyXCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0yLWRlZmF1bHQtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMi1kZWZhdWx0LWFcIlxuICAgICAgfSxcbiAgICAgIFwiaG92ZXJcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWFcIlxuICAgICAgfSxcbiAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLWFcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzdXJmYWNlM1wiOiB7XG4gICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMy1kZWZhdWx0LXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLTMtZGVmYXVsdC1hXCJcbiAgICAgIH0sXG4gICAgICBcImhvdmVyXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLTMtaG92ZXItcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMy1ob3Zlci1hXCJcbiAgICAgIH0sXG4gICAgICBcImFjdGl2ZVwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0zLWFjdGl2ZS1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0zLWFjdGl2ZS1hXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwic3VyZmFjZTRcIjoge1xuICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLTQtZGVmYXVsdC1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS00LWRlZmF1bHQtYVwiXG4gICAgICB9LFxuICAgICAgXCJob3ZlclwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS00LWhvdmVyLXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLTQtaG92ZXItYVwiXG4gICAgICB9LFxuICAgICAgXCJhY3RpdmVcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtNC1hY3RpdmUtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtNC1hY3RpdmUtYVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInN1cmZhY2VJbnZlcnNlXCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LWFcIlxuICAgICAgfSxcbiAgICAgIFwiaG92ZXJcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLWFcIlxuICAgICAgfSxcbiAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtYWN0aXZlLWFcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJpbmtJbnZlcnNlXCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtaW5rLWludmVyc2UtZGVmYXVsdC1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtaW5rLWludmVyc2UtZGVmYXVsdC1hXCJcbiAgICAgIH0sXG4gICAgICBcImhvdmVyXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1pbmstaW52ZXJzZS1ob3Zlci1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtaW5rLWludmVyc2UtaG92ZXItYVwiXG4gICAgICB9LFxuICAgICAgXCJhY3RpdmVcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LWluay1pbnZlcnNlLWFjdGl2ZS1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtaW5rLWludmVyc2UtYWN0aXZlLWFcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJsaW5rXCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtbGluay1kZWZhdWx0LXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1saW5rLWRlZmF1bHQtYVwiXG4gICAgICB9LFxuICAgICAgXCJ2aXNpdGVkXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1saW5rLXZpc2l0ZWQtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LWxpbmstdmlzaXRlZC1hXCJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07IiwgImV4cG9ydCBkZWZhdWx0IHtcbiAgXCJjb2xvclwiOiB7XG4gICAgXCJibGFja1wiOiBbXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwid2hpdGVcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImxpZ2h0XCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkYXJrXCI6IFtcbiAgICAgIDMyLFxuICAgICAgMzMsXG4gICAgICAzNCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkYXJrZXJcIjogW1xuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImZvY3VzXCI6IFtcbiAgICAgIDAsXG4gICAgICAxMTksXG4gICAgICAyMDQsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZm9jdXNMaWdodGVyXCI6IFtcbiAgICAgIDI1MSxcbiAgICAgIDI1MyxcbiAgICAgIDI1NCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJmb2N1c0NvbnRyYXN0XCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5MVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAyNTAsXG4gICAgICAyNTAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTJcIjogW1xuICAgICAgMjQyLFxuICAgICAgMjQyLFxuICAgICAgMjQyLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXkzXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDIzNyxcbiAgICAgIDIzNyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5NFwiOiBbXG4gICAgICAyMTYsXG4gICAgICAyMTcsXG4gICAgICAyMTcsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTVcIjogW1xuICAgICAgMTk4LFxuICAgICAgMTk5LFxuICAgICAgMTk5LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXk2XCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDE3NixcbiAgICAgIDE3OCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5N1wiOiBbXG4gICAgICAxNDMsXG4gICAgICAxNDUsXG4gICAgICAxNDgsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleThcIjogW1xuICAgICAgMTE1LFxuICAgICAgMTE3LFxuICAgICAgMTIwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXk5XCI6IFtcbiAgICAgIDgwLFxuICAgICAgODIsXG4gICAgICA4MyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5MTBcIjogW1xuICAgICAgNTAsXG4gICAgICA1MSxcbiAgICAgIDUyLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInN1cmZhY2UxXCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDI1MCxcbiAgICAgIDI1MCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJzdXJmYWNlMlwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwic3VyZmFjZTNcIjogW1xuICAgICAgMjQyLFxuICAgICAgMjQyLFxuICAgICAgMjQyLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInN1cmZhY2U0XCI6IFtcbiAgICAgIDUwLFxuICAgICAgNTEsXG4gICAgICA1MixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJzdXJmYWNlSW52ZXJzZVwiOiBbXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rMVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDUxLFxuICAgICAgNTIsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rMlwiOiBbXG4gICAgICAxMTUsXG4gICAgICAxMTcsXG4gICAgICAxMjAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rM1wiOiBbXG4gICAgICAxNDMsXG4gICAgICAxNDUsXG4gICAgICAxNDgsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rNFwiOiBbXG4gICAgICAyNTAsXG4gICAgICAyNTAsXG4gICAgICAyNTAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rNVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rSW52ZXJzZVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiYm9yZGVyMVwiOiBbXG4gICAgICAyMzcsXG4gICAgICAyMzcsXG4gICAgICAyMzcsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiYm9yZGVyMlwiOiBbXG4gICAgICAyMTYsXG4gICAgICAyMTcsXG4gICAgICAyMTcsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiYm9yZGVyM1wiOiBbXG4gICAgICAxNzQsXG4gICAgICAxNzYsXG4gICAgICAxNzgsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiYm9yZGVySW52ZXJzZVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDUxLFxuICAgICAgNTIsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWQxXCI6IFtcbiAgICAgIDI0MCxcbiAgICAgIDIzOSxcbiAgICAgIDIzOSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZDJcIjogW1xuICAgICAgMjExLFxuICAgICAgMjA4LFxuICAgICAgMjA3LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRpc2FibGVkM1wiOiBbXG4gICAgICAxNjMsXG4gICAgICAxNTYsXG4gICAgICAxNTMsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWQ0XCI6IFtcbiAgICAgIDkxLFxuICAgICAgODUsXG4gICAgICA4MixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZEludmVyc2UxXCI6IFtcbiAgICAgIDQzLFxuICAgICAgNDAsXG4gICAgICAzOSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZEludmVyc2UyXCI6IFtcbiAgICAgIDk0LFxuICAgICAgODcsXG4gICAgICA4NSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZEludmVyc2UzXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDE2MSxcbiAgICAgIDE1OSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJyZWFkb25seTFcIjogW1xuICAgICAgMjUwLFxuICAgICAgMjUwLFxuICAgICAgMjUwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInJlYWRvbmx5MlwiOiBbXG4gICAgICAyMTYsXG4gICAgICAyMTcsXG4gICAgICAyMTcsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwicmVhZG9ubHkzXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDE3NixcbiAgICAgIDE3OCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJyZWFkb25seTRcIjogW1xuICAgICAgODAsXG4gICAgICA4MixcbiAgICAgIDgzLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImVsZXZhdGlvbkJhc2VcIjogW1xuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImNvZGUxXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDIyMixcbiAgICAgIDIyMixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJjb2RlMlwiOiBbXG4gICAgICA2MSxcbiAgICAgIDYxLFxuICAgICAgNjEsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicGFsZXR0ZVwiOiB7XG4gICAgXCJncmVlblwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwidGVhbFwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcImN5YW5cIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcImJsdWVcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInJ4Qmx1ZVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJwdXJwbGVcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcIm1hZ2VudGFcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInJlZFwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcImhlYlJlZFwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcIm9yYW5nZVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiYW1iZXJcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInllbGxvd1wiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJjb3Vwb25ZZWxsb3dcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJwZ1wiOiB7XG4gICAgXCJjb3JlXCI6IHtcbiAgICAgIFwicHJpbWFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDIsXG4gICAgICAgICAgICAyNDgsXG4gICAgICAgICAgICAyNTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDUxLFxuICAgICAgICAgICAgMTUyLFxuICAgICAgICAgICAgMjI1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxMTksXG4gICAgICAgICAgICAyMDQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDkzLFxuICAgICAgICAgICAgMTY4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDYxLFxuICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2Vjb25kYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgIDI0OCxcbiAgICAgICAgICAgIDI1MyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNTEsXG4gICAgICAgICAgICAxNTIsXG4gICAgICAgICAgICAyMjUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDExOSxcbiAgICAgICAgICAgIDIwNCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgOTMsXG4gICAgICAgICAgICAxNjgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgNjEsXG4gICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0ZXJ0aWFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTMsXG4gICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAyNDIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0OCxcbiAgICAgICAgICAgIDIyMixcbiAgICAgICAgICAgIDExOSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTEsXG4gICAgICAgICAgICAyMDIsXG4gICAgICAgICAgICAyNCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMjQsXG4gICAgICAgICAgICAxNzYsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTMzLFxuICAgICAgICAgICAgMTAyLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRhbmdlclwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTEsXG4gICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAyNDUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIxNyxcbiAgICAgICAgICAgIDc0LFxuICAgICAgICAgICAgOTEsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTkzLFxuICAgICAgICAgICAgMzEsXG4gICAgICAgICAgICA1MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNTcsXG4gICAgICAgICAgICAyNyxcbiAgICAgICAgICAgIDQyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTEwLFxuICAgICAgICAgICAgMTcsXG4gICAgICAgICAgICAyOCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic3RhdHVzXCI6IHtcbiAgICAgIFwicHJpbWFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDIsXG4gICAgICAgICAgICAyNDgsXG4gICAgICAgICAgICAyNTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDUxLFxuICAgICAgICAgICAgMTUyLFxuICAgICAgICAgICAgMjI1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxMTksXG4gICAgICAgICAgICAyMDQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDkzLFxuICAgICAgICAgICAgMTY4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDYxLFxuICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2Vjb25kYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgIDI0OCxcbiAgICAgICAgICAgIDI1MyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNTEsXG4gICAgICAgICAgICAxNTIsXG4gICAgICAgICAgICAyMjUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDExOSxcbiAgICAgICAgICAgIDIwNCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgOTMsXG4gICAgICAgICAgICAxNjgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgNjEsXG4gICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0ZXJ0aWFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTMsXG4gICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAyNDIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0OCxcbiAgICAgICAgICAgIDIyMixcbiAgICAgICAgICAgIDExOSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTEsXG4gICAgICAgICAgICAyMDIsXG4gICAgICAgICAgICAyNCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMjQsXG4gICAgICAgICAgICAxNzYsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTMzLFxuICAgICAgICAgICAgMTAyLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInN1Y2Nlc3NcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgMjUxLFxuICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA1MCxcbiAgICAgICAgICAgIDE3NCxcbiAgICAgICAgICAgIDUwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxMzgsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxMDcsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDcxLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndhcm5pbmdcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDcsXG4gICAgICAgICAgICAyMDEsXG4gICAgICAgICAgICA5NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMzAsXG4gICAgICAgICAgICAxNjUsXG4gICAgICAgICAgICAxNSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICAxMzgsXG4gICAgICAgICAgICA0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTQzLFxuICAgICAgICAgICAgOTUsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGFuZ2VyXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MSxcbiAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgIDI0NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjE3LFxuICAgICAgICAgICAgNzQsXG4gICAgICAgICAgICA5MSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxOTMsXG4gICAgICAgICAgICAzMSxcbiAgICAgICAgICAgIDUwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE1NyxcbiAgICAgICAgICAgIDI3LFxuICAgICAgICAgICAgNDIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMTAsXG4gICAgICAgICAgICAxNyxcbiAgICAgICAgICAgIDI4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ2aXpcIjoge1xuICAgICAgXCJvbmVcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQzLFxuICAgICAgICAgICAgMjQ5LFxuICAgICAgICAgICAgMjUyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA0OSxcbiAgICAgICAgICAgIDE2MyxcbiAgICAgICAgICAgIDIxMSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMTI1LFxuICAgICAgICAgICAgMTc5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA5OSxcbiAgICAgICAgICAgIDE0OCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA3NSxcbiAgICAgICAgICAgIDExMixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInR3b1wiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTMsXG4gICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAyNDIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0NyxcbiAgICAgICAgICAgIDIwMSxcbiAgICAgICAgICAgIDk1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIzMCxcbiAgICAgICAgICAgIDE2NSxcbiAgICAgICAgICAgIDE1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIwMCxcbiAgICAgICAgICAgIDEzOCxcbiAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNDMsXG4gICAgICAgICAgICA5NSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0aHJlZVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTIsXG4gICAgICAgICAgICAyNDIsXG4gICAgICAgICAgICAyNDgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIzMixcbiAgICAgICAgICAgIDEyNSxcbiAgICAgICAgICAgIDE4MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMTMsXG4gICAgICAgICAgICA1MixcbiAgICAgICAgICAgIDEzMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxODQsXG4gICAgICAgICAgICAyMCxcbiAgICAgICAgICAgIDk5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTIwLFxuICAgICAgICAgICAgNyxcbiAgICAgICAgICAgIDYyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZm91clwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDIsXG4gICAgICAgICAgICAyNTMsXG4gICAgICAgICAgICAyNDksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDc0LFxuICAgICAgICAgICAgMTgxLFxuICAgICAgICAgICAgMTQwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDQzLFxuICAgICAgICAgICAgMTMzLFxuICAgICAgICAgICAgOTgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjEsXG4gICAgICAgICAgICAxMTEsXG4gICAgICAgICAgICA3NyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgOTIsXG4gICAgICAgICAgICA2MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImZpdmVcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDcsXG4gICAgICAgICAgICAxMzMsXG4gICAgICAgICAgICA5NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMzksXG4gICAgICAgICAgICA3OSxcbiAgICAgICAgICAgIDI2LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIwNixcbiAgICAgICAgICAgIDU4LFxuICAgICAgICAgICAgOSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEzNCxcbiAgICAgICAgICAgIDQwLFxuICAgICAgICAgICAgOSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNpeFwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDYsXG4gICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE0NSxcbiAgICAgICAgICAgIDEyNyxcbiAgICAgICAgICAgIDE5OSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMDAsXG4gICAgICAgICAgICA3NSxcbiAgICAgICAgICAgIDE3NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA3NixcbiAgICAgICAgICAgIDU4LFxuICAgICAgICAgICAgMTMxLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNDQsXG4gICAgICAgICAgICAzMSxcbiAgICAgICAgICAgIDg2LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTsiLCAiZXhwb3J0IGRlZmF1bHQge1xuICBcImNvbG9yXCI6IHtcbiAgICBcImJsYWNrXCI6IFtcbiAgICAgIDEyLFxuICAgICAgMTMsXG4gICAgICAxMyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJ3aGl0ZVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwibGlnaHRcIjogW1xuICAgICAgMjksXG4gICAgICAzMCxcbiAgICAgIDMyLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRhcmtcIjogW1xuICAgICAgMjQ3LFxuICAgICAgMjQ3LFxuICAgICAgMjQ4LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRhcmtlclwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZm9jdXNcIjogW1xuICAgICAgMjUsXG4gICAgICAxNDAsXG4gICAgICAyMjMsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZm9jdXNMaWdodGVyXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMTksXG4gICAgICAzNixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJmb2N1c0NvbnRyYXN0XCI6IFtcbiAgICAgIDEyLFxuICAgICAgMTMsXG4gICAgICAxMyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5MVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDQ1LFxuICAgICAgNDksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTJcIjogW1xuICAgICAgNzEsXG4gICAgICA3NSxcbiAgICAgIDgyLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXkzXCI6IFtcbiAgICAgIDEwNCxcbiAgICAgIDExMCxcbiAgICAgIDEyMCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5NFwiOiBbXG4gICAgICAxMzUsXG4gICAgICAxNDAsXG4gICAgICAxNTEsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTVcIjogW1xuICAgICAgMTY4LFxuICAgICAgMTcxLFxuICAgICAgMTc5LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXk2XCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDE5NSxcbiAgICAgIDIwMCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5N1wiOiBbXG4gICAgICAyMTEsXG4gICAgICAyMTMsXG4gICAgICAyMTcsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleThcIjogW1xuICAgICAgMjMzLFxuICAgICAgMjM0LFxuICAgICAgMjM2LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXk5XCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDIzOSxcbiAgICAgIDI0MSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5MTBcIjogW1xuICAgICAgMjQ3LFxuICAgICAgMjQ3LFxuICAgICAgMjQ4LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInN1cmZhY2UxXCI6IFtcbiAgICAgIDksXG4gICAgICAxMCxcbiAgICAgIDEyLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInN1cmZhY2UyXCI6IFtcbiAgICAgIDIwLFxuICAgICAgMjIsXG4gICAgICAyNixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJzdXJmYWNlM1wiOiBbXG4gICAgICAzMCxcbiAgICAgIDM0LFxuICAgICAgNDEsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwic3VyZmFjZTRcIjogW1xuICAgICAgNDMsXG4gICAgICA0OCxcbiAgICAgIDU5LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInN1cmZhY2VJbnZlcnNlXCI6IFtcbiAgICAgIDEyLFxuICAgICAgMTMsXG4gICAgICAxMyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJpbmsxXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJpbmsyXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDE5NSxcbiAgICAgIDIwMCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJpbmszXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDE0MCxcbiAgICAgIDE1MSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJpbms0XCI6IFtcbiAgICAgIDEwNCxcbiAgICAgIDExMCxcbiAgICAgIDEyMCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJpbms1XCI6IFtcbiAgICAgIDQzLFxuICAgICAgNDUsXG4gICAgICA0OSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJpbmtJbnZlcnNlXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJib3JkZXIxXCI6IFtcbiAgICAgIDQzLFxuICAgICAgNDUsXG4gICAgICA0OSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJib3JkZXIyXCI6IFtcbiAgICAgIDcxLFxuICAgICAgNzUsXG4gICAgICA4MixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJib3JkZXIzXCI6IFtcbiAgICAgIDEwNCxcbiAgICAgIDExMCxcbiAgICAgIDEyMCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJib3JkZXJJbnZlcnNlXCI6IFtcbiAgICAgIDQzLFxuICAgICAgNDUsXG4gICAgICA0OSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZDFcIjogW1xuICAgICAgOTAsXG4gICAgICA4NSxcbiAgICAgIDgzLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRpc2FibGVkMlwiOiBbXG4gICAgICAxNjIsXG4gICAgICAxNTYsXG4gICAgICAxNTQsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWQzXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDIwOCxcbiAgICAgIDIwNyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZDRcIjogW1xuICAgICAgMjQwLFxuICAgICAgMjM5LFxuICAgICAgMjM5LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRpc2FibGVkSW52ZXJzZTFcIjogW1xuICAgICAgNDIsXG4gICAgICA0MCxcbiAgICAgIDM5LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRpc2FibGVkSW52ZXJzZTJcIjogW1xuICAgICAgOTMsXG4gICAgICA4NyxcbiAgICAgIDg2LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRpc2FibGVkSW52ZXJzZTNcIjogW1xuICAgICAgMTY3LFxuICAgICAgMTYxLFxuICAgICAgMTYwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInJlYWRvbmx5MVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDQ1LFxuICAgICAgNDksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwicmVhZG9ubHkyXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDE0MCxcbiAgICAgIDE1MSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJyZWFkb25seTNcIjogW1xuICAgICAgMTkyLFxuICAgICAgMTk1LFxuICAgICAgMjAwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInJlYWRvbmx5NFwiOiBbXG4gICAgICAyMzksXG4gICAgICAyMzksXG4gICAgICAyNDEsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZWxldmF0aW9uQmFzZVwiOiBbXG4gICAgICAxMixcbiAgICAgIDEzLFxuICAgICAgMTMsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiY29kZTFcIjogW1xuICAgICAgMyxcbiAgICAgIDMsXG4gICAgICAzLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImNvZGUyXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDIyNCxcbiAgICAgIDIyNCxcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJwYWxldHRlXCI6IHtcbiAgICBcImdyZWVuXCI6IHtcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDEzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ0ZWFsXCI6IHtcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcImN5YW5cIjoge1xuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcImJsdWVcIjoge1xuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwicnhCbHVlXCI6IHtcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJwdXJwbGVcIjoge1xuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJtYWdlbnRhXCI6IHtcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwicmVkXCI6IHtcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcImhlYlJlZFwiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcIm9yYW5nZVwiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcImFtYmVyXCI6IHtcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ5ZWxsb3dcIjoge1xuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcImNvdXBvblllbGxvd1wiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcInBnXCI6IHtcbiAgICBcImNvcmVcIjoge1xuICAgICAgXCJwcmltYXJ5XCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTc4LFxuICAgICAgICAgICAgMjE4LFxuICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDc5LFxuICAgICAgICAgICAgMTY2LFxuICAgICAgICAgICAgMjM4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1LFxuICAgICAgICAgICAgMTM4LFxuICAgICAgICAgICAgMjMwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNixcbiAgICAgICAgICAgIDgzLFxuICAgICAgICAgICAgMTM3LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMzAsXG4gICAgICAgICAgICA0OCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlY29uZGFyeVwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE3OCxcbiAgICAgICAgICAgIDIxOCxcbiAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA3OSxcbiAgICAgICAgICAgIDE2NixcbiAgICAgICAgICAgIDIzOCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNSxcbiAgICAgICAgICAgIDEzOCxcbiAgICAgICAgICAgIDIzMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjYsXG4gICAgICAgICAgICA4MyxcbiAgICAgICAgICAgIDEzNyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDMwLFxuICAgICAgICAgICAgNDgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0ZXJ0aWFyeVwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDIzNyxcbiAgICAgICAgICAgIDE3OSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTQsXG4gICAgICAgICAgICAyMjcsXG4gICAgICAgICAgICAxMTksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUxLFxuICAgICAgICAgICAgMjAyLFxuICAgICAgICAgICAgMjQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE5MyxcbiAgICAgICAgICAgIDE1NSxcbiAgICAgICAgICAgIDE2LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDQ2LFxuICAgICAgICAgICAgMzgsXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRhbmdlclwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1NCxcbiAgICAgICAgICAgIDE5NSxcbiAgICAgICAgICAgIDIwNyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAxMDIsXG4gICAgICAgICAgICAxMTksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQzLFxuICAgICAgICAgICAgNzAsXG4gICAgICAgICAgICA5MSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTQwLFxuICAgICAgICAgICAgMzgsXG4gICAgICAgICAgICA1MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA0OSxcbiAgICAgICAgICAgIDE3LFxuICAgICAgICAgICAgMjEsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInN0YXR1c1wiOiB7XG4gICAgICBcInByaW1hcnlcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNzgsXG4gICAgICAgICAgICAyMTgsXG4gICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNzksXG4gICAgICAgICAgICAxNjYsXG4gICAgICAgICAgICAyMzgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUsXG4gICAgICAgICAgICAxMzgsXG4gICAgICAgICAgICAyMzAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI2LFxuICAgICAgICAgICAgODMsXG4gICAgICAgICAgICAxMzcsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAzMCxcbiAgICAgICAgICAgIDQ4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2Vjb25kYXJ5XCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTc4LFxuICAgICAgICAgICAgMjE4LFxuICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDc5LFxuICAgICAgICAgICAgMTY2LFxuICAgICAgICAgICAgMjM4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1LFxuICAgICAgICAgICAgMTM4LFxuICAgICAgICAgICAgMjMwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNixcbiAgICAgICAgICAgIDgzLFxuICAgICAgICAgICAgMTM3LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMzAsXG4gICAgICAgICAgICA0OCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRlcnRpYXJ5XCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjM3LFxuICAgICAgICAgICAgMTc5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1NCxcbiAgICAgICAgICAgIDIyNyxcbiAgICAgICAgICAgIDExOSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTEsXG4gICAgICAgICAgICAyMDIsXG4gICAgICAgICAgICAyNCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTkzLFxuICAgICAgICAgICAgMTU1LFxuICAgICAgICAgICAgMTYsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNDYsXG4gICAgICAgICAgICAzOCxcbiAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic3VjY2Vzc1wiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE5MixcbiAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgIDE5MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA0MCxcbiAgICAgICAgICAgIDE5NSxcbiAgICAgICAgICAgIDM0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxNTYsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgIDk3LFxuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAzOCxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2FybmluZ1wiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDIzNSxcbiAgICAgICAgICAgIDE3OSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTMsXG4gICAgICAgICAgICAyMDcsXG4gICAgICAgICAgICA5OCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDUsXG4gICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAyNSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTk0LFxuICAgICAgICAgICAgMTM5LFxuICAgICAgICAgICAgMjAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNDYsXG4gICAgICAgICAgICAzNCxcbiAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGFuZ2VyXCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjU0LFxuICAgICAgICAgICAgMTk1LFxuICAgICAgICAgICAgMjA3LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgIDEwMixcbiAgICAgICAgICAgIDExOSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDMsXG4gICAgICAgICAgICA3MCxcbiAgICAgICAgICAgIDkxLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNDAsXG4gICAgICAgICAgICAzOCxcbiAgICAgICAgICAgIDUwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDQ5LFxuICAgICAgICAgICAgMTcsXG4gICAgICAgICAgICAyMSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwidml6XCI6IHtcbiAgICAgIFwib25lXCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTc5LFxuICAgICAgICAgICAgMjI4LFxuICAgICAgICAgICAgMjQ5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDU5LFxuICAgICAgICAgICAgMTc2LFxuICAgICAgICAgICAgMjI3LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxNDMsXG4gICAgICAgICAgICAyMDQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDExLFxuICAgICAgICAgICAgOTIsXG4gICAgICAgICAgICAxMzIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgOSxcbiAgICAgICAgICAgIDMxLFxuICAgICAgICAgICAgNDIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0d29cIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyMzUsXG4gICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjA3LFxuICAgICAgICAgICAgOTgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQ1LFxuICAgICAgICAgICAgMTc5LFxuICAgICAgICAgICAgMjUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE5NCxcbiAgICAgICAgICAgIDEzOSxcbiAgICAgICAgICAgIDIwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDQ2LFxuICAgICAgICAgICAgMzQsXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRocmVlXCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMTgwLFxuICAgICAgICAgICAgMjE4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0NSxcbiAgICAgICAgICAgIDEzMixcbiAgICAgICAgICAgIDE5MSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMzQsXG4gICAgICAgICAgICA4MyxcbiAgICAgICAgICAgIDE1NixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTcxLFxuICAgICAgICAgICAgMzgsXG4gICAgICAgICAgICAxMDIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMzcsXG4gICAgICAgICAgICAxNCxcbiAgICAgICAgICAgIDI1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZm91clwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE3OSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDIyNixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA3NyxcbiAgICAgICAgICAgIDE5OSxcbiAgICAgICAgICAgIDE1MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA0NSxcbiAgICAgICAgICAgIDE1NCxcbiAgICAgICAgICAgIDExMixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMzIsXG4gICAgICAgICAgICAxMDUsXG4gICAgICAgICAgICA3NyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDMzLFxuICAgICAgICAgICAgMjYsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJmaXZlXCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMTk5LFxuICAgICAgICAgICAgMTg0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDEzMyxcbiAgICAgICAgICAgIDkyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0MSxcbiAgICAgICAgICAgIDk4LFxuICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE4NSxcbiAgICAgICAgICAgIDY0LFxuICAgICAgICAgICAgMjQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNDMsXG4gICAgICAgICAgICAyMSxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2l4XCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjAwLFxuICAgICAgICAgICAgMTg4LFxuICAgICAgICAgICAgMjQ1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE2OSxcbiAgICAgICAgICAgIDE0OSxcbiAgICAgICAgICAgIDIyOCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNDQsXG4gICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAyMTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDkwLFxuICAgICAgICAgICAgNzgsXG4gICAgICAgICAgICAxMjYsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjcsXG4gICAgICAgICAgICAyNCxcbiAgICAgICAgICAgIDM3LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTsiLCAiaW1wb3J0IGNvcmVDb25maWcgZnJvbSAnLi9nZW5lcmF0ZWQvbWFwcy9jb3JlLXZhcnMtZ2V0dGVyLW1hcCc7XG5pbXBvcnQgdGhlbWVDb25maWcgZnJvbSAnLi9nZW5lcmF0ZWQvbWFwcy90aGVtZS12YXJzLWdldHRlci1tYXAnO1xuaW1wb3J0IGNvcmVTZXRDb25maWcgZnJvbSAnLi9nZW5lcmF0ZWQvbWFwcy9jb3JlLXZhcnMtc2V0dGVyLW1hcCc7XG5pbXBvcnQgdGhlbWVTZXRDb25maWcgZnJvbSAnLi9nZW5lcmF0ZWQvbWFwcy90aGVtZS12YXJzLXNldHRlci1tYXAnO1xuaW1wb3J0IHB4TGlnaHRXZWJHbENvbmZpZyBmcm9tICcuL2dlbmVyYXRlZC9tYXBzL3B4LWxpZ2h0LXdlYmdsLW1hcCc7XG5pbXBvcnQgcHhEYXJrV2ViR2xDb25maWcgZnJvbSAnLi9nZW5lcmF0ZWQvbWFwcy9weC1kYXJrLXdlYmdsLW1hcCc7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIC4uLmNvcmVDb25maWcsXG4gIC4uLnRoZW1lQ29uZmlnLFxufTtcblxuZXhwb3J0IGNvbnN0IHNldENvbmZpZyA9IHtcbiAgLi4uY29yZVNldENvbmZpZyxcbiAgLi4udGhlbWVTZXRDb25maWcsXG59O1xuXG5leHBvcnQgY29uc3Qgd2ViR2xDb25maWcgPSB7XG4gIHB4OiB7XG4gICAgbGlnaHQ6IHtcbiAgICAgIC4uLnB4TGlnaHRXZWJHbENvbmZpZyxcbiAgICB9LFxuICAgIGRhcms6IHtcbiAgICAgIC4uLnB4RGFya1dlYkdsQ29uZmlnLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgdHlwZSBNb3J0YXJUaGVtZUNvbmZpZyA9IHR5cGVvZiBjb25maWc7XG5cbmV4cG9ydCB0eXBlIE1vcnRhcldlYkdsQ29uZmlnID0gdHlwZW9mIHdlYkdsQ29uZmlnO1xuIiwgIi8vIGltcG9ydCB7IGRlbnNpdGllcywgc2l6ZVNjYWxlIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgZ2VuZXJhdGluZyBhIHNlbGVjdG9yIHdpdGggaW5maXggb3IgcG9zdGZpeCBtb2RpZmllcnMuXG4gKiBUaGVzZSBpbmZpeCBvciBwb3N0Zml4IHZhbHVlcyBtdXN0IGJlIHBsYWNlZCBpbiBkaWZmZXJlbnQgcGFydHMgb2ZcbiAqIHRoZSBnZW5lcmF0ZWQgc2VsZWN0b3IgZGVwZW5kaW5nIHVwb24gaWYgdGhlIHNlbGVjdG9yIHJvb3QgaXMgYVxuICogYDpob3N0KClgIGVsZW1lbnQgb3Igc3RhbmRhcmQgYCNpZGAvYC5jbGFzc2AuXG4gKlxuICogYG5vbkhvc3RJbmZpeGAgYW5kIGBub25Ib3N0UG9zdGZpeGAgd2lsbCBvdmVycmlkZSB2YWx1ZXMgcGFzc2VkXG4gKiBmb3IgYGluZml4YCBhbmQgYHBvc3RmaXhgIGlmIHRoZSB0aGUgc2VsZWN0b3Igcm9vdCBpcyBub3QgYDpob3N0YC5cbiAqIFRoaXMgaXMgc28gdGhhdCB0aGUgc2VsZWN0b3IgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBkaWZmZXJlbnRcbiAqIGJlaGF2aW9yIHdoZW4gaXQgaXMgZHluYW1pY2FsbHkgd2l0aCBib3RoIDpob3N0IGFuZCBpZC9jbGFzc1xuICogc2VsZWN0b3JzIChtb3N0IGxpa2VseSBpbiBtaXhpbnMpLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdG9yT3B0aW9ucyB7XG4gIGluZml4Pzogc3RyaW5nO1xuICBwb3N0Zml4Pzogc3RyaW5nO1xuICBub25Ib3N0SW5maXg/OiBzdHJpbmc7XG4gIG5vbkhvc3RQb3N0Zml4Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFNwZWNpYWwgdHlwZSB0aGF0IGRlZmluZXMgYSBTZWxlY3RvckZhY3RvcnkgZnVuY3Rpb24uXG4gKiBUaGVzZSBmdW5jdGlvbnMgd29yayBleGFjdGx5IGxpa2UgZ2xvYmFsIHNlbGVjdG9yKCkgZnVuY3Rpb25cbiAqIGV4Y2VwdCB0aGUgc2VsZWN0b3JSb290IGFuZCBzb21lIHBvc3NpYmxlIGluZml4IG9yIHBvc3RmaXggdmFsdWVzXG4gKiBoYXZlIGFscmVhZHkgYmVlbiBzZXQgYnkgYSBwYXJlbnQgbWl4aW4uXG4gKi9cbmV4cG9ydCB0eXBlIFNlbGVjdG9yRmFjdG9yeSA9IChvcHRpb25zPzogU2VsZWN0b3JPcHRpb25zKSA9PiBzdHJpbmc7XG5cbi8qKiBEZXRlcm1pbmVzIGlmIGEgY2xhc3MgaXMgYDpob3N0YCBvciBub3QgKi9cbmV4cG9ydCBjb25zdCBpc0hvc3RDbGFzcyA9IChzZWxlY3RvclJvb3Q6IHN0cmluZykgPT5cbiAgW1xuICAgICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnLCAvLyBmaXJzdCBzaW5jZSBpdCB3aWxsIGJlIHRoZSBtb3N0IGNvbW1vblxuICAgICc6aG9zdCcsXG4gICAgJzpob3N0Omhvc3QnLFxuICAgICc6aG9zdDpob3N0Omhvc3QnLFxuICAgICc6aG9zdDpob3N0Omhvc3Q6aG9zdCcsXG4gICAgJzpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnLFxuICAgICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCcsXG4gICAgJzpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnLFxuICBdLmluY2x1ZGVzKHNlbGVjdG9yUm9vdCk7XG5cbi8qKlxuICogQ29yZSBidWlsZGluZyBibG9jayBvZiBvdXIgQ1NTIGluIEpTIFwibWl4aW5zXCJcbiAqXG4gKiBUaGlzIGZhY3RvcnkgYWxsb3dzIG1peGlucyB0byBkZWNsYXJlIHRoZWlyIG93biBzZWxlY3RvciByb290XG4gKiBhbG9uZ3NpZGUgdGhlaXIgb3duIGluZml4IGFuZC9vciBwb3N0Zml4IG9wdGlvbnMuIFRoZSBmYWN0b3J5IHJldHVybnNcbiAqIGEgbG9jYWxpemVkIGN1c3RvbSBzZWxlY3RvciBmdW5jdGlvbiB0aGF0IHRoZSB1c2VyIGNhbiBjYWxsIHdpdGhcbiAqIGFkZGl0aW9uYWwgaW5maXggb3IgcG9zdGZpeCB2YWx1ZXMgc28gdGhhdCB0aGUgc2VsZWN0b3IgY2FuIGJlIHVzZWRcbiAqIG11bHRpcGxlIHRpbWVzIHdpdGhpbiB0aGUgc2NvcGUgb2YgdGhlIFwibWl4aW5cIiBjYWxsYmFjay5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlbGVjdG9yRmFjdG9yeSA9XG4gIChcbiAgICBzZWxlY3RvclJvb3Q6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbmZpeDogaW50ZXJuYWxJbmZpeCA9ICcnLFxuICAgICAgcG9zdGZpeDogaW50ZXJuYWxQb3N0Zml4ID0gJycsXG4gICAgICBub25Ib3N0SW5maXg6IGludGVybmFsTm9uSG9zdEluZml4LFxuICAgICAgbm9uSG9zdFBvc3RmaXg6IGludGVybmFsTm9uSG9zdFBvc3RmaXgsXG4gICAgfTogU2VsZWN0b3JPcHRpb25zID0ge31cbiAgKTogU2VsZWN0b3JGYWN0b3J5ID0+XG4gICh7XG4gICAgaW5maXggPSAnJyxcbiAgICBwb3N0Zml4ID0gJycsXG4gICAgbm9uSG9zdEluZml4ID0gbnVsbCxcbiAgICBub25Ib3N0UG9zdGZpeCA9IG51bGwsXG4gIH06IFNlbGVjdG9yT3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgaWYgKGlzSG9zdENsYXNzKHNlbGVjdG9yUm9vdCkpIHtcbiAgICAgIGlmIChpbnRlcm5hbEluZml4IHx8IGluZml4KSB7XG4gICAgICAgIHJldHVybiBgJHtzZWxlY3RvclJvb3R9KCR7aW50ZXJuYWxJbmZpeCA/PyAnJ30ke2luZml4ID8/ICcnfSkke2ludGVybmFsUG9zdGZpeCA/PyAnJ30ke1xuICAgICAgICAgIHBvc3RmaXggPz8gJydcbiAgICAgICAgfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYCR7c2VsZWN0b3JSb290fSR7aW50ZXJuYWxQb3N0Zml4ID8/ICcnfSR7cG9zdGZpeCA/PyAnJ31gO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYCR7c2VsZWN0b3JSb290fSR7aW50ZXJuYWxOb25Ib3N0SW5maXggPz8gaW50ZXJuYWxJbmZpeCA/PyAnJ30ke1xuICAgICAgICBub25Ib3N0SW5maXggPz8gaW5maXggPz8gJydcbiAgICAgIH0ke2ludGVybmFsTm9uSG9zdFBvc3RmaXggPz8gaW50ZXJuYWxQb3N0Zml4ID8/ICcnfSR7bm9uSG9zdFBvc3RmaXggPz8gcG9zdGZpeCA/PyAnJ31gO1xuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBGdW5jdGlvbiB1c2VkIGZvciBnZW5lcmF0aW5nIGEgc2VsZWN0b3Igd2l0aCBpbmZpeCBvciBwb3N0Zml4IG1vZGlmaWVycy5cbiAqIFRoZXNlIGluZml4IG9yIHBvc3RmaXggdmFsdWVzIG11c3QgYmUgcGxhY2VkIGluIGRpZmZlcmVudCBwYXJ0cyBvZlxuICogdGhlIGdlbmVyYXRlZCBzZWxlY3RvciBkZXBlbmRpbmcgdXBvbiBpZiB0aGUgc2VsZWN0b3JSb290IGlzIGFcbiAqIGA6aG9zdCgpYCBlbGVtZW50IG9yIHN0YW5kYXJkIGAjaWRgL2AuY2xhc3NgLlxuICpcbiAqIGBub25Ib3N0SW5maXhgIGFuZCBgbm9uSG9zdFBvc3RmaXhgIHdpbGwgb3ZlcnJpZGUgdmFsdWVzIHBhc3NlZCBmb3IgYGluZml4YFxuICogYW5kIGBwb3N0Zml4YCBpZiB0aGUgdGhlIHNlbGVjdG9yIHJvb3QgaXMgbm90IGA6aG9zdGAuIFRoaXMgaXMgc28gdGhhdCB0aGVcbiAqIHNlbGVjdG9yIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgZGlmZmVyZW50IGJlaGF2aW9yIHdoZW4gaXQgaXMgZHluYW1pY2FsbHlcbiAqIHdpdGggYm90aCA6aG9zdCBhbmQgaWQvY2xhc3Mgc2VsZWN0b3JzIChtb3N0IGxpa2VseSBpbiBtaXhpbnMpLlxuICovXG5leHBvcnQgY29uc3Qgc2VsZWN0b3IgPSAoXG4gIHNlbGVjdG9yUm9vdDogc3RyaW5nLFxuICB7IGluZml4ID0gJycsIHBvc3RmaXggPSAnJywgbm9uSG9zdEluZml4ID0gbnVsbCwgbm9uSG9zdFBvc3RmaXggPSBudWxsIH06IFNlbGVjdG9yT3B0aW9ucyA9IHt9XG4pID0+IHtcbiAgaWYgKGlzSG9zdENsYXNzKHNlbGVjdG9yUm9vdCkpIHtcbiAgICByZXR1cm4gaW5maXhcbiAgICAgID8gYCR7c2VsZWN0b3JSb290fSgke2luZml4ID8/ICcnfSkke3Bvc3RmaXggPz8gJyd9YFxuICAgICAgOiBgJHtzZWxlY3RvclJvb3R9JHtwb3N0Zml4ID8/ICcnfWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGAke3NlbGVjdG9yUm9vdH0ke25vbkhvc3RJbmZpeCA/PyBpbmZpeCA/PyAnJ30ke25vbkhvc3RQb3N0Zml4ID8/IHBvc3RmaXggPz8gJyd9YDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHNpemVNb2RpZmllciA9ICh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBzaXplOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGBjYWxjKCR7dmFsdWV9ICogJHtjb25maWcuc2l6ZS5zY2FsZVtzaXplXX0pO2A7XG59O1xuXG5leHBvcnQgY29uc3Qgc3RyaXBVbml0ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL3t8cHh8cGN8cHR8aW58bW18Y218ZXh8ZW18cmVtfHZ3fHZofHZtaW58dm1heHxjaHxsaHx9LywgJycpO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0cmlwVW5pdEludCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBwYXJzZUludCh2YWx1ZS5yZXBsYWNlKC97fHB4fHBjfHB0fGlufG1tfGNtfGV4fGVtfHJlbXx2d3x2aHx2bWlufHZtYXh8Y2h8bGh8fS8sICcnKSwgMTApO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0cmlwVW5pdEZsb2F0ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgve3xweHxwY3xwdHxpbnxtbXxjbXxleHxlbXxyZW18dnd8dmh8dm1pbnx2bWF4fGNofGxofH0vLCAnJykpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNpemVWYXJpYW50c01peGluID0gKFxuICBzZWxlY3RvclJvb3Q6IHN0cmluZyxcbiAgY29udGVudDogKHNlbGVjdG9yOiBTZWxlY3RvckZhY3RvcnksIHZhcmlhbnQ6IHN0cmluZykgPT4gc3RyaW5nXG4pID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbmZpZy5zaXplLnNjYWxlKS5yZWR1Y2UoKGFjYywgdmFyaWFudCkgPT4ge1xuICAgIHJldHVybiBgJHthY2N9ICR7Y29udGVudChcbiAgICAgIHNlbGVjdG9yRmFjdG9yeShzZWxlY3RvclJvb3QsIHtcbiAgICAgICAgaW5maXg6IGBbc2l6ZT1cIiR7dmFyaWFudH1cIl1gLFxuICAgICAgICBub25Ib3N0SW5maXg6IGAuc2l6ZS0tJHt2YXJpYW50fWAsXG4gICAgICB9KSxcbiAgICAgIHZhcmlhbnRcbiAgICApfWA7XG4gIH0sICcnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZW5zaXR5VmFyaWFudHNNaXhpbiA9IChcbiAgc2VsZWN0b3JSb290OiBzdHJpbmcsXG4gIGNvbnRlbnQ6IChzZWxlY3RvcjogU2VsZWN0b3JGYWN0b3J5LCB2YXJpYW50OiBzdHJpbmcpID0+IHN0cmluZ1xuKSA9PiB7XG4gIHJldHVybiBjb25maWcuc2l6ZS5kZW5zaXRpZXMucmVkdWNlKChhY2MsIHZhcmlhbnQpID0+IHtcbiAgICByZXR1cm4gYCR7YWNjfSAke2NvbnRlbnQoXG4gICAgICBzZWxlY3RvckZhY3Rvcnkoc2VsZWN0b3JSb290LCB7XG4gICAgICAgIGluZml4OiBgW2RlbnNpdHk9XCIke3ZhcmlhbnR9XCJdYCxcbiAgICAgICAgbm9uSG9zdEluZml4OiBgLmRlbnNpdHktLSR7dmFyaWFudH1gLFxuICAgICAgfSksXG4gICAgICB2YXJpYW50XG4gICAgKX1gO1xuICB9LCAnJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWQgPSAoKSA9PiB7XG4gIHJldHVybiBgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50YDtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWxsc3BhY2luZyA9ICgpID0+IHtcbiAgcmV0dXJuIGBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gIGA7XG59O1xuXG5leHBvcnQgY29uc3QgdmlzdWFsbHlIaWRkZW4gPSAoKSA9PiB7XG4gIHJldHVybiBgXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKSAhaW1wb3J0YW50O1xuICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBgO1xufTtcbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgc2VsZWN0b3IsIHNlbGVjdG9yRmFjdG9yeSwgU2VsZWN0b3JPcHRpb25zIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCB7IENTU1Jlc3VsdCB9IGZyb20gJ2xpdCc7XG5cbmNvbnN0IGRhc2hDYXNlID0gKHMpID0+IHtcbiAgcmV0dXJuIHNcbiAgICAucmVwbGFjZSgvW0EtWl0vZywgKG0pID0+ICctJyArIG0udG9Mb3dlckNhc2UoKSlcbiAgICAucmVwbGFjZSgvKC4qKShbMC05XXxbQS1aXSkoLiopLywgJyQxLSQyJDMnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBwYWxldHRlR3JvdXBPcHRpb25zID0ge1xuICBjb3JlOiBbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ3RlcnRpYXJ5JywgJ2RhbmdlciddLFxuICBzdGF0dXM6IFsncHJpbWFyeScsICdzZWNvbmRhcnknLCAndGVydGlhcnknLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddLFxuICB2aXo6IFsnb25lJywgJ3R3bycsICd0aHJlZScsICdmb3VyJywgJ2ZpdmUnLCAnc2l4J10sXG59O1xuXG5jb25zdCBnZXRPcGFjaXR5ID0gKG9wYWNpdHk6IGtleW9mIHR5cGVvZiBjb25maWcub3BhY2l0eSB8IG51bWJlciB8IHN0cmluZykgPT5cbiAgKG9wYWNpdHkgPSBjb25maWcub3BhY2l0eVtgJHtvcGFjaXR5fWBdID8/IG9wYWNpdHkpO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yT3B0aW9ucyB7XG4gIGc/OiAnY29yZScgfCAnc3RhdHVzJyB8ICd2aXonO1xuICBwOiBzdHJpbmc7XG4gIGM/OiAnbGlnaHRlcicgfCAnbGlnaHQnIHwgJ2Jhc2UnIHwgJ2RhcmsnIHwgJ2Rhcmtlcic7XG4gIG8/OiBrZXlvZiB0eXBlb2YgY29uZmlnLm9wYWNpdHkgfCBudW1iZXIgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9ICh7XG4gIGc6IGdyb3VwID0gJ2NvcmUnLFxuICBwOiBwYWxldHRlLFxuICBjOiBjb2xvciA9ICdiYXNlJyxcbiAgbzogb3BhY2l0eSA9IG51bGwsXG59OiBDb2xvck9wdGlvbnMpID0+IHtcbiAgb3BhY2l0eSA9IGdldE9wYWNpdHkob3BhY2l0eSk7XG4gIGlmIChvcGFjaXR5KSB7XG4gICAgcmV0dXJuIGByZ2JhKHZhcigtLW10ZS0ke2Rhc2hDYXNlKGdyb3VwKX0tJHtkYXNoQ2FzZShwYWxldHRlKX0tJHtjb2xvcn0tcmdiKSwgJHtvcGFjaXR5fSlgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgcmdiKHZhcigtLW10ZS0ke2Rhc2hDYXNlKGdyb3VwKX0tJHtkYXNoQ2FzZShwYWxldHRlKX0tJHtjb2xvcn0tcmdiKSlgO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY29sb3JDb250cmFzdCA9ICh7XG4gIGc6IGdyb3VwID0gJ2NvcmUnLFxuICBwOiBwYWxldHRlLFxuICBjOiBjb2xvciA9ICdiYXNlJyxcbiAgbzogb3BhY2l0eSA9IG51bGwsXG59OiBDb2xvck9wdGlvbnMpID0+IHtcbiAgb3BhY2l0eSA9IGdldE9wYWNpdHkob3BhY2l0eSk7XG4gIGlmIChvcGFjaXR5KSB7XG4gICAgcmV0dXJuIGByZ2JhKHZhcigtLW10ZS0ke2Rhc2hDYXNlKGdyb3VwKX0tJHtkYXNoQ2FzZShwYWxldHRlKX0tJHtjb2xvcn0tYy1yZ2IpLCAke29wYWNpdHl9KWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGByZ2IodmFyKC0tbXRlLSR7ZGFzaENhc2UoZ3JvdXApfS0ke2Rhc2hDYXNlKHBhbGV0dGUpfS0ke2NvbG9yfS1jLXJnYikpYDtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxscyB0aGUgY2FsbGJhY2sgd2l0aCBlYWNoIHBhbGV0dGUgaW4gdGhlIHJlcXVlc3RlZCBwYWxldHRlIGdyb3VwXG4gKiB0aGVuIGNvbWJpbmVzIGFsbCBvZiB0aGUgcmV0dXJuZWQgQ1NTIHRlbXBsYXRlIHN0cmluZ3MuXG4gKi9cbmV4cG9ydCBjb25zdCBmb3JFYWNoUEdWYXJpYW50ID0gPFBhbGV0dGVHcm91cCBleHRlbmRzIGtleW9mIHR5cGVvZiBwYWxldHRlR3JvdXBPcHRpb25zPihcbiAgZ3JvdXA6IFBhbGV0dGVHcm91cCxcbiAgY2FsbGJhY2s6IChncm91cDogUGFsZXR0ZUdyb3VwLCBwYWxldHRlOiBzdHJpbmcpID0+IENTU1Jlc3VsdCB8IHN0cmluZ1xuKSA9PiB7XG4gIHJldHVybiBwYWxldHRlR3JvdXBPcHRpb25zW2dyb3VwXS5yZWR1Y2UoXG4gICAgKGFjYywgcGFsZXR0ZSkgPT4gYCR7YWNjfSR7Y2FsbGJhY2soZ3JvdXAsIHBhbGV0dGUpfWAsXG4gICAgJydcbiAgKTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5PcHRpb25zIHtcbiAgbjoga2V5b2YgdHlwZW9mIGNvbmZpZy5jb2xvcjtcbiAgbz86IGtleW9mIHR5cGVvZiBjb25maWcub3BhY2l0eSB8IG51bWJlciB8IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHRva2VuID0gKHsgbjogbmFtZSwgbzogb3BhY2l0eSA9IG51bGwgfTogVG9rZW5PcHRpb25zKSA9PiB7XG4gIG9wYWNpdHkgPSBnZXRPcGFjaXR5KG9wYWNpdHkpO1xuICBpZiAob3BhY2l0eSkge1xuICAgIHJldHVybiBgcmdiYSh2YXIoLS1tdGUtJHtkYXNoQ2FzZShuYW1lKX0tcmdiKSwgJHtvcGFjaXR5fSlgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgcmdiKHZhcigtLW10ZS0ke2Rhc2hDYXNlKG5hbWUpfS1yZ2IpKWA7XG4gIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVUb2tlbk9wdGlvbnMge1xuICBuOiBrZXlvZiB0eXBlb2YgY29uZmlnLnN0YXRlVG9rZW47XG4gIHM6IHN0cmluZztcbiAgbz86IGtleW9mIHR5cGVvZiBjb25maWcub3BhY2l0eSB8IG51bWJlciB8IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHN0YXRlVG9rZW4gPSAoeyBuOiBuYW1lLCBzOiBzdGF0ZSwgbzogb3BhY2l0eSB9OiBTdGF0ZVRva2VuT3B0aW9ucykgPT4ge1xuICBvcGFjaXR5ID0gZ2V0T3BhY2l0eShvcGFjaXR5KTtcbiAgaWYgKG9wYWNpdHkpIHtcbiAgICByZXR1cm4gYHJnYmEodmFyKC0tbXRlLWl0LSR7ZGFzaENhc2UobmFtZSl9LSR7c3RhdGV9LXJnYiksICR7b3BhY2l0eX0pYDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYHJnYmEodmFyKC0tbXRlLWl0LSR7ZGFzaENhc2UobmFtZSl9LSR7c3RhdGV9LXJnYiksIHZhcigtLW10ZS1pdC0ke2Rhc2hDYXNlKFxuICAgICAgbmFtZVxuICAgICl9LSR7c3RhdGV9LWEpKWA7XG4gIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVUb2tlbk1peGluT3B0aW9ucyB7XG4gIHNlbGVjdG9yT3B0aW9ucz86IFNlbGVjdG9yT3B0aW9ucztcbiAgbjoga2V5b2YgdHlwZW9mIGNvbmZpZy5zdGF0ZVRva2VuO1xuICBmb3JTdGF0ZXM/OiBzdHJpbmdbXTtcbiAgZm9yUHJvcHM/OiBzdHJpbmdbXTtcbiAgYXV0b0NvbnRyYXN0PzogYm9vbGVhbjtcbiAgdXNlSW1wb3J0YW50PzogYm9vbGVhbjtcbiAgYXNPdmVybGF5PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IHN0YXRlVG9rZW5NaXhpbiA9IChcbiAgc2VsZWN0b3JSb290OiBzdHJpbmcsXG4gIHtcbiAgICBzZWxlY3Rvck9wdGlvbnMgPSB7IGluZml4OiAnJywgcG9zdGZpeDogJycgfSxcbiAgICBuOiBuYW1lLFxuICAgIGZvclN0YXRlcyA9IFsnZGVmYXVsdCcsICdob3ZlcicsICdhY3RpdmUnXSxcbiAgICBmb3JQcm9wcyA9IFsnYmFja2dyb3VuZCddLFxuICAgIHVzZUltcG9ydGFudCA9IGZhbHNlLFxuICAgIGFzT3ZlcmxheSA9IGZhbHNlLFxuICB9OiBTdGF0ZVRva2VuTWl4aW5PcHRpb25zXG4pID0+IHtcbiAgaWYgKGFzT3ZlcmxheSkge1xuICAgIGZvclN0YXRlcyA9IGZvclN0YXRlcy5maWx0ZXIoKHN0YXRlKSA9PiBzdGF0ZSAhPT0gJ2RlZmF1bHQnKTtcbiAgfVxuICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9yRmFjdG9yeShzZWxlY3RvclJvb3QsIHNlbGVjdG9yT3B0aW9ucyk7XG4gIGNvbnN0IHNldEludGVyYWN0aXZlUHJvcHMgPSAoeyBuYW1lLCBzdGF0ZSwgZm9yUHJvcHMsIHVzZUltcG9ydGFudCA9IGZhbHNlIH0pID0+IHtcbiAgICByZXR1cm4gZm9yUHJvcHMucmVkdWNlKChhY2MsIHByb3ApID0+IHtcbiAgICAgIHJldHVybiBgJHthY2N9XG4gICAgICAgICR7cHJvcH06ICR7c3RhdGVUb2tlbih7IG46IG5hbWUsIHM6IHN0YXRlIH0pfSR7dXNlSW1wb3J0YW50ID8gJyAhaW1wb3J0YW50OycgOiAnOyd9XG4gICAgICBgO1xuICAgIH0sICcnKTtcbiAgfTtcblxuICByZXR1cm4gZm9yU3RhdGVzLnJlZHVjZSgoYWNjLCBzdGF0ZSkgPT4ge1xuICAgIHJldHVybiBgJHthY2N9XG4gICAgICAke3NlbGVjdG9yKHsgaW5maXg6IHN0YXRlICE9PSAnZGVmYXVsdCcgPyBgOiR7c3RhdGV9YCA6ICcnIH0pfSR7XG4gICAgICBhc092ZXJsYXlcbiAgICAgICAgPyBgOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O2BcbiAgICAgICAgOiBgIHtcbiAgICAgIGBcbiAgICB9XG4gICAgICAgICR7c2V0SW50ZXJhY3RpdmVQcm9wcyh7IG5hbWUsIHN0YXRlLCBmb3JQcm9wcywgdXNlSW1wb3J0YW50IH0pfVxuICAgICAgfVxuICAgIGA7XG4gIH0sICcnKTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9jdXNPcHRpb25zIHtcbiAgc2VsZWN0b3JPcHRpb25zPzogU2VsZWN0b3JPcHRpb25zO1xuICBzZWxlY3RvclN0YXRlPzogJzpmb2N1cy12aXNpYmxlJyB8ICc6Zm9jdXMnIHwgJzpob3ZlcicgfCBudWxsO1xuICBzZWxlY3Rvck91dGxldD86ICc6OmJlZm9yZScgfCAnOjphZnRlcic7XG4gIGZsdXNoPzogYm9vbGVhbjtcbiAgcmFkaXVzPzogc3RyaW5nO1xuICBpbnNldD86IHN0cmluZztcbiAgcmFkaXVzVG9wTGVmdD86IHN0cmluZztcbiAgcmFkaXVzVG9wUmlnaHQ/OiBzdHJpbmc7XG4gIHJhZGl1c0JvdHRvbUxlZnQ/OiBzdHJpbmc7XG4gIHJhZGl1c0JvdHRvbVJpZ2h0Pzogc3RyaW5nO1xuICBvZmZzZXRUb3A/OiBzdHJpbmc7XG4gIG9mZnNldFJpZ2h0Pzogc3RyaW5nO1xuICBvZmZzZXRCb3R0b20/OiBzdHJpbmc7XG4gIG9mZnNldExlZnQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBmb2N1c2VkTWl4aW4gPSAoXG4gIHNlbGVjdG9yUm9vdDogc3RyaW5nLFxuICB7XG4gICAgc2VsZWN0b3JPcHRpb25zID0geyBpbmZpeDogJycsIHBvc3RmaXg6ICcnIH0sXG4gICAgc2VsZWN0b3JTdGF0ZSA9ICc6Zm9jdXMtdmlzaWJsZScsXG4gICAgc2VsZWN0b3JPdXRsZXQgPSAnOjpiZWZvcmUnLFxuICAgIGZsdXNoID0gZmFsc2UsXG4gICAgcmFkaXVzID0gJzRweCcsXG4gICAgaW5zZXQsXG4gICAgcmFkaXVzVG9wTGVmdCxcbiAgICByYWRpdXNUb3BSaWdodCxcbiAgICByYWRpdXNCb3R0b21MZWZ0LFxuICAgIHJhZGl1c0JvdHRvbVJpZ2h0LFxuICAgIG9mZnNldFRvcCA9ICctNHB4JyxcbiAgICBvZmZzZXRSaWdodCA9ICctNHB4JyxcbiAgICBvZmZzZXRCb3R0b20gPSAnLTRweCcsXG4gICAgb2Zmc2V0TGVmdCA9ICctNHB4JyxcbiAgfTogRm9jdXNPcHRpb25zXG4pID0+IHtcbiAgaWYgKGZsdXNoKSB7XG4gICAgb2Zmc2V0VG9wID0gJzBweCc7XG4gICAgb2Zmc2V0UmlnaHQgPSAnMHB4JztcbiAgICBvZmZzZXRCb3R0b20gPSAnMHB4JztcbiAgICBvZmZzZXRMZWZ0ID0gJzBweCc7XG4gIH1cbiAgaWYgKCFyYWRpdXNUb3BMZWZ0KSB7XG4gICAgcmFkaXVzVG9wTGVmdCA9IHJhZGl1cztcbiAgfVxuICBpZiAoIXJhZGl1c1RvcFJpZ2h0KSB7XG4gICAgcmFkaXVzVG9wUmlnaHQgPSByYWRpdXM7XG4gIH1cbiAgaWYgKCFyYWRpdXNCb3R0b21MZWZ0KSB7XG4gICAgcmFkaXVzQm90dG9tTGVmdCA9IHJhZGl1cztcbiAgfVxuICBpZiAoIXJhZGl1c0JvdHRvbVJpZ2h0KSB7XG4gICAgcmFkaXVzQm90dG9tUmlnaHQgPSByYWRpdXM7XG4gIH1cblxuICByZXR1cm4gYCR7c2VsZWN0b3Ioc2VsZWN0b3JSb290LCB7XG4gICAgLi4uc2VsZWN0b3JPcHRpb25zLFxuICAgIGluZml4OiBgJHtzZWxlY3Rvck9wdGlvbnMuaW5maXggPz8gJyd9JHtcbiAgICAgIHNlbGVjdG9yU3RhdGUgPz8gJydcbiAgICB9Om5vdCguZGlzYWJsZWQpOm5vdChbZGlzYWJsZWRdKTpub3QoOmRpc2FibGVkKWAsXG4gICAgcG9zdGZpeDogYCR7c2VsZWN0b3JPcHRpb25zLnBvc3RmaXggPz8gJyd9JHtzZWxlY3Rvck91dGxldCA/PyAnJ31gLFxuICB9KX0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAke1xuICAgICAgaW5zZXRcbiAgICAgICAgPyAnJ1xuICAgICAgICA6IGB0b3A6ICR7b2Zmc2V0VG9wfTtcbiAgICAgIHJpZ2h0OiAke29mZnNldFJpZ2h0fTtcbiAgICAgIGJvdHRvbTogJHtvZmZzZXRCb3R0b219O1xuICAgICAgbGVmdDogJHtvZmZzZXRMZWZ0fTtgXG4gICAgfVxuICAgICR7aW5zZXQgPyBgaW5zZXQ6ICR7aW5zZXR9O2AgOiAnJ31cbiAgICBib3JkZXI6IHNvbGlkIDJweCAke3Rva2VuKHsgbjogJ2ZvY3VzJyB9KX07XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHtyYWRpdXNUb3BMZWZ0fTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHtyYWRpdXNUb3BSaWdodH07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHtyYWRpdXNCb3R0b21MZWZ0fTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHtyYWRpdXNCb3R0b21SaWdodH07XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29udGVudDogJyc7XG4gICAgei1pbmRleDogOTtcbiAgfWA7XG59O1xuIiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBmb250QmFzZU1peGluID0gKGZhbWlseToga2V5b2YgdHlwZW9mIGNvbmZpZy5mb250LmZhbWlseSA9ICdzYW5zJykgPT4gYFxuICBmb250LWZhbWlseTogJHtjb25maWcuZm9udC5mYW1pbHlbZmFtaWx5XX07XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuYDtcblxuZXhwb3J0IGludGVyZmFjZSBmb250U2V0T3B0aW9ucyB7XG4gIHM6IGtleW9mIHR5cGVvZiBjb25maWcuZm9udC5zZXQ7XG4gIHJhdGlvPzogdHlwZW9mIGNvbmZpZy5mb250LnJhdGlvW2tleW9mIHR5cGVvZiBjb25maWcuZm9udC5yYXRpb107XG4gIGZvbnRGYW1pbHk/OiBrZXlvZiB0eXBlb2YgY29uZmlnLmZvbnQuZmFtaWx5O1xuICBpbXBvcnRhbnQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgZm9udFNldE1peGluID0gKHtcbiAgczogc2V0LFxuICByYXRpbyxcbiAgZm9udEZhbWlseSA9ICdzYW5zJyxcbiAgaW1wb3J0YW50ID0gZmFsc2UsXG59OiBmb250U2V0T3B0aW9ucykgPT4ge1xuICBjb25zdCB0eXBlU3R5bGUgPSBjb25maWcuZm9udC5zZXRbc2V0XTtcbiAgaWYgKHJhdGlvKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICR7Zm9udEJhc2VNaXhpbihmb250RmFtaWx5KX1cbiAgICAgIGZvbnQtc2l6ZTogY2FsYygke3R5cGVTdHlsZS5mb250U2l6ZX0gKiAke3JhdGlvfSkke2ltcG9ydGFudCA/ICcgIWltcG9ydGFudCcgOiAnJ307XG4gICAgICBmb250LXdlaWdodDogJHt0eXBlU3R5bGUuZm9udFdlaWdodH0ke2ltcG9ydGFudCA/ICcgIWltcG9ydGFudCcgOiAnJ307XG4gICAgICBsaW5lLWhlaWdodDogJHt0eXBlU3R5bGUubGluZUhlaWdodH0ke2ltcG9ydGFudCA/ICcgIWltcG9ydGFudCcgOiAnJ307XG4gICAgYDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYFxuICAgICAgJHtmb250QmFzZU1peGluKGZvbnRGYW1pbHkpfVxuICAgICAgZm9udC1zaXplOiAke3R5cGVTdHlsZS5mb250U2l6ZX0ke2ltcG9ydGFudCA/ICcgIWltcG9ydGFudCcgOiAnJ307XG4gICAgICBmb250LXdlaWdodDogJHt0eXBlU3R5bGUuZm9udFdlaWdodH0ke2ltcG9ydGFudCA/ICcgIWltcG9ydGFudCcgOiAnJ307XG4gICAgICBsaW5lLWhlaWdodDogJHt0eXBlU3R5bGUubGluZUhlaWdodH0ke2ltcG9ydGFudCA/ICcgIWltcG9ydGFudCcgOiAnJ307XG4gICAgYDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZvbnRPdmVyZmxvd0VsbGlwc2lzTWl4aW4gPSAoKSA9PiBgXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjaW5nOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5leHBvcnQgY29uc3QgZm9udFNldEluaGVyaXRNaXhpbiA9ICgpID0+IGBcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuYDtcbiIsICIvLyBpbXBvcnQgeyB0cmFuc2l0aW9uRHVyYXRpb24sIHRpbWluZ0Z1bmN0aW9uIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBwcm9wOiBzdHJpbmc7XG4gIGR1cmF0aW9uPzogc3RyaW5nO1xuICBkZWxheT86IHN0cmluZztcbiAgdGltaW5nRm4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCB0cmFuc2l0aW9uID0gKHtcbiAgcHJvcCxcbiAgZHVyYXRpb24gPSBjb25maWcuYW5pbWF0aW9uLnRyYW5zaXRpb25EdXJhdGlvbi5kZWZhdWx0LFxuICBkZWxheSA9ICcwbXMnLFxuICB0aW1pbmdGbiA9IGNvbmZpZy5hbmltYXRpb24udGltaW5nRnVuY3Rpb24uc3RhbmRhcmQsXG59KSA9PiB7XG4gIHJldHVybiBgJHtwcm9wfSAke2R1cmF0aW9ufSAke2RlbGF5fSAke3RpbWluZ0ZufWA7XG59O1xuIiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyB0b2tlbiB9IGZyb20gJy4vdGhlbWUnO1xuXG5leHBvcnQgY29uc3QgZWxldmF0aW9uID0gKHpWYWx1ZToga2V5b2YgdHlwZW9mIGNvbmZpZy5lbGV2YXRpb24ubGV2ZWwgfCBudW1iZXIpID0+IHtcbiAgcmV0dXJuIGAke2NvbmZpZy5lbGV2YXRpb24ubGV2ZWxbelZhbHVlXX0gJHt0b2tlbih7XG4gICAgbjogJ2VsZXZhdGlvbkJhc2UnLFxuICAgIG86IGNvbmZpZy5lbGV2YXRpb24ub3BhY2l0eVt6VmFsdWVdLFxuICB9KX1gO1xufTtcbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQgeyBQcm9wZXJ0eU1hcHBlciwgU3R5bGVQcm9wZXJ0eSB9IGZyb20gJy4vY3NzLWluLWpzLnR5cGVzJztcblxuY29uc3QgcHJvcGVydHlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IHN0cmluZ1tdPiA9IHtcbiAgbTogJ21hcmdpbicsXG4gIG14OiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXSxcbiAgbXk6IFsnbWFyZ2luVG9wJywgJ21hcmdpbkJvdHRvbSddLFxuICBtdDogJ21hcmdpblRvcCcsXG4gIG1yOiAnbWFyZ2luUmlnaHQnLFxuICBtYjogJ21hcmdpbkJvdHRvbScsXG4gIG1sOiAnbWFyZ2luTGVmdCcsXG4gIHA6ICdwYWRkaW5nJyxcbiAgcHg6IFsncGFkZGluZ0xlZnQnLCAncGFkZGluZ1JpZ2h0J10sXG4gIHB5OiBbJ3BhZGRpbmdUb3AnLCAncGFkZGluZ0JvdHRvbSddLFxuICBwdDogJ3BhZGRpbmdUb3AnLFxuICBwcjogJ3BhZGRpbmdSaWdodCcsXG4gIHBiOiAncGFkZGluZ0JvdHRvbScsXG4gIHBsOiAncGFkZGluZ0xlZnQnLFxuICBkOiAnZGlzcGxheScsXG4gIGE6ICdhbGlnbkl0ZW1zJyxcbiAgajogJ2p1c3RpZnlDb250ZW50JyxcbiAgZGlyZWN0aW9uOiAnZmxleERpcmVjdGlvbicsXG4gIHNocmluazogJ2ZsZXhTaHJpbmsnLFxuICBncm93OiAnZmxleEdyb3cnLFxuICB3cmFwOiAnZmxleFdyYXAnLFxuICB3OiAnd2lkdGgnLFxuICBtYXh3OiAnbWF4V2lkdGgnLFxuICBtaW53OiAnbWluV2lkdGgnLFxuICBoOiAnaGVpZ2h0JyxcbiAgbWF4aDogJ21heEhlaWdodCcsXG4gIG1pbmg6ICdtaW5IZWlnaHQnLFxuICBmczogJ2ZvbnRTaXplJyxcbiAgZnc6ICdmb250V2VpZ2h0JyxcbiAgYmc6ICdiYWNrZ3JvdW5kJyxcbiAgYzogJ2NvbG9yJyxcbiAgZWxldmF0aW9uOiAnYm94U2hhZG93Jyxcbn07XG5cbi8qKiBNYXBzIHByb3BlcnR5IHNob3J0aGFuZCB2YWx1ZXMgdG8gb25lIG9yIG1hbnkgZnVsbCBjc3MgcHJvcGVydGllcyAqL1xuZXhwb3J0IGNvbnN0IHByb3BTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5yZWR1Y2UoKGFjYywgcHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFByb3BzID0gcHJvcGVydHlNYXBbcHJvcE1hcC5wcm9wXSA/PyBwcm9wTWFwLnByb3A7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLmFjYyxcbiAgICAgIC4uLihBcnJheS5pc0FycmF5KG1hcHBlZFByb3BzKVxuICAgICAgICA/IG1hcHBlZFByb3BzLm1hcCgocHJvcCkgPT4gKHsgcHJvcCwgdmFsdWU6IHByb3BNYXAudmFsdWUgfSkpXG4gICAgICAgIDogW3sgcHJvcDogbWFwcGVkUHJvcHMsIHZhbHVlOiBwcm9wTWFwLnZhbHVlIH1dKSxcbiAgICBdO1xuICB9LCBbXSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIEBtb3J0YXIvc3R5bGVzIGNvbmZpZyB2YWx1ZSBmb3IgYSBnaXZlbiBkb3Qgbm90YXRlZCBzdHJpbmcuXG4gKiBOdW1iZXJzIGFuZCBub24tZG90IG5vdGF0ZWQgc3RyaW5nIHdpbGwganVzdCBiZSByZXR1cm5lZCBhcyBpcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUgPSAodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29uZmlnUGF0aCA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gICAgICBjb25zdCBjb25maWdWYWx1ZSA9IGNvbmZpZ1BhdGgucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjW2tleV07XG4gICAgICB9LCBjb25maWcpO1xuICAgICAgcmV0dXJuIGNvbmZpZ1ZhbHVlID8/IHZhbHVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59O1xuXG4vKiogTWFwcyBkb3Qgbm90YXRlZCBzdHJpbmcgdmFsdWVzIHRvIHRoZW1lIGNvbmZpZyB2YXJpYWJsZXMgKi9cbmV4cG9ydCBjb25zdCBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlTWFwcGVyOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5yZWR1Y2UoKGFjYywgcHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZ1ZhbHVlID0gZG90U3RyaW5nVG9Db25maWdWYWx1ZShwcm9wTWFwLnZhbHVlKTtcbiAgICBpZiAoY29uZmlnVmFsdWUpIHtcbiAgICAgIHByb3BNYXAudmFsdWUgPSBjb25maWdWYWx1ZSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gWy4uLmFjYywgcHJvcE1hcF07XG4gIH0sIFtdKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBOdW1iZXJUb1B4ID0gKHZhbDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCkgPT4ge1xuICBpZiAoIXZhbCkge1xuICAgIHJldHVybiB2YWwgYXMgbnVsbDtcbiAgfVxuICByZXR1cm4gIWlzTmFOKE51bWJlcih2YWwpKSA/IGAke3ZhbH1weGAgOiAodmFsIGFzIHN0cmluZyk7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwUHhUb051bWJlciA9ICh2YWw6IHN0cmluZyB8IG51bGwpID0+IHtcbiAgaWYgKCF2YWwpIHtcbiAgICByZXR1cm4gdmFsIGFzIG51bGw7XG4gIH1cbiAgcmV0dXJuIE51bWJlcih2YWwucmVwbGFjZSgncHgnLCAnJykpO1xufTtcblxuLyoqIE1hcHMgdGhlIHZhbHVlcyBvZiBhbnkgZ2l2ZW4gcHJvcHMgdG8gcHggdW5pdHMgaWYgaXQgaXMgYSBudW1iZXIgKi9cbmV4cG9ydCBjb25zdCBudW1iZXJUb1B4OiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IG1hcE51bWJlclRvUHgocHJvcE1hcC52YWx1ZSk7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBzcGFjaW5nTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAnMCc6IGNvbmZpZy5zcGFjZS5ub25lLFxuICAnMSc6IGNvbmZpZy5zcGFjZS54cyxcbiAgJzInOiBjb25maWcuc3BhY2Uuc20sXG4gICczJzogY29uZmlnLnNwYWNlLm1kLFxuICAnNCc6IGNvbmZpZy5zcGFjZS5sZyxcbiAgJzUnOiBjb25maWcuc3BhY2UueGwsXG4gICc2JzogY29uZmlnLnNwYWNlLnh4bCxcbiAgJzcnOiBjb25maWcuc3BhY2UueHh4bCxcbiAgJ25vbmUnOiBjb25maWcuc3BhY2Uubm9uZSxcbiAgJ3h4cyc6IGNvbmZpZy5zcGFjZS54eHMsXG4gICd4cyc6IGNvbmZpZy5zcGFjZS54cyxcbiAgJ3NtJzogY29uZmlnLnNwYWNlLnNtLFxuICAnbWQnOiBjb25maWcuc3BhY2UubWQsXG4gICdsZyc6IGNvbmZpZy5zcGFjZS5sZyxcbiAgJ3hsJzogY29uZmlnLnNwYWNlLnhsLFxuICAneHhsJzogY29uZmlnLnNwYWNlLnh4bCxcbiAgJ3h4eGwnOiBjb25maWcuc3BhY2UueHh4bCxcbn07XG5cbi8qKiBNYXBzIHNwYWNpbmcgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBzcGFjaW5nIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBzcGFjaW5nVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBzcGFjaW5nTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBib3JkZXJSYWRpdXNNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIG5vbmU6IGNvbmZpZy5ib3JkZXIucmFkaXVzLm5vbmUsXG4gIHhzOiBjb25maWcuYm9yZGVyLnJhZGl1cy54cyxcbiAgc206IGNvbmZpZy5ib3JkZXIucmFkaXVzLnNtLFxuICBtZDogY29uZmlnLmJvcmRlci5yYWRpdXMubWQsXG4gIGxnOiBjb25maWcuYm9yZGVyLnJhZGl1cy5sZyxcbiAgeGw6IGNvbmZpZy5ib3JkZXIucmFkaXVzLnhsLFxuICB4eGw6IGNvbmZpZy5ib3JkZXIucmFkaXVzLnh4bCxcbiAgZnVsbDogY29uZmlnLmJvcmRlci5yYWRpdXMuZnVsbCxcbn07XG5cbi8qKiBNYXBzIGJvcmRlciByYWRpdXMgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBib3JkZXIgcmFkaXVzIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGJvcmRlclJhZGl1c01hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgYm9yZGVyV2lkdGhNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIG5vbmU6IGNvbmZpZy5ib3JkZXIud2lkdGgubm9uZSxcbiAgc206IGNvbmZpZy5ib3JkZXIud2lkdGguc20sXG4gIG1kOiBjb25maWcuYm9yZGVyLndpZHRoLm1kLFxuICBsZzogY29uZmlnLmJvcmRlci53aWR0aC5sZyxcbn07XG5cbi8qKiBNYXBzIGJvcmRlciB3aWR0aCB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIGJvcmRlciB3aWR0aCBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGJvcmRlcldpZHRoTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBvcGFjaXR5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB4eGw6IGNvbmZpZy5vcGFjaXR5Lnh4bCxcbiAgeGw6IGNvbmZpZy5vcGFjaXR5LnhsLFxuICBsZzogY29uZmlnLm9wYWNpdHkubGcsXG4gIG1kOiBjb25maWcub3BhY2l0eS5tZCxcbiAgc206IGNvbmZpZy5vcGFjaXR5LnNtLFxuICB4czogY29uZmlnLm9wYWNpdHkueHMsXG4gIHh4czogY29uZmlnLm9wYWNpdHkueHhzLFxuICB4eHhzOiBjb25maWcub3BhY2l0eS54eHhzLFxufTtcblxuLyoqIE1hcHMgb3BhY2l0eSB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIG9wYWNpdHkgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IG9wYWNpdHlWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IG9wYWNpdHlNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGZvbnRXZWlnaHRNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIGxpZ2h0OiBjb25maWcuZm9udC53ZWlnaHQubGlnaHQsXG4gIHJlZ3VsYXI6IGNvbmZpZy5mb250LndlaWdodC5yZWd1bGFyLFxuICBtZWRpdW06IGNvbmZpZy5mb250LndlaWdodC5tZWRpdW0sXG4gIGJvbGQ6IGNvbmZpZy5mb250LndlaWdodC5ib2xkLFxufTtcblxuLyoqIE1hcHMgZm9udC13ZWlnaHQgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBzcGFjaW5nIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBmb250V2VpZ2h0VmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBmb250V2VpZ2h0TWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBmb250U2l6ZU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgeHhzOiAnMC42MjVyZW0nLFxuICB4czogJzAuNzVyZW0nLFxuICBzbTogJzAuODc1cmVtJyxcbiAgbWQ6ICcxcmVtJyxcbiAgbGc6ICcxLjI1cmVtJyxcbiAgeGw6ICcxLjVyZW0nLFxuICB4eGw6ICcxLjc1cmVtJyxcbn07XG5cbi8qKiBNYXBzIGZvbnQtc2l6ZSB2YWx1ZXMgZnJvbSBkZXNpZ25hdGVkIHNwYWNpbmcgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGZvbnRTaXplVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBmb250U2l6ZU1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZm9udEZhbWlseU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgc2FuczogY29uZmlnLmZvbnQuZmFtaWx5LnNhbnMsXG4gIHNlcmlmOiBjb25maWcuZm9udC5mYW1pbHkuc2VyaWYsXG4gIG1vbm86IGNvbmZpZy5mb250LmZhbWlseS5tb25vLFxufTtcblxuLyoqIE1hcHMgZm9udC1mYW1pbHkgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBmb250LWZhbWlseSBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgZm9udEZhbWlseVZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZm9udEZhbWlseU1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZWxldmF0aW9uTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB6MDogY29uZmlnLmVsZXZhdGlvbi56MCxcbiAgejE6IGNvbmZpZy5lbGV2YXRpb24uejEsXG4gIHoyOiBjb25maWcuZWxldmF0aW9uLnoyLFxuICB6MzogY29uZmlnLmVsZXZhdGlvbi56MyxcbiAgejQ6IGNvbmZpZy5lbGV2YXRpb24uejQsXG59O1xuXG4vKiogTWFwcyBlbGV2YXRpb24gdmFsdWVzIGZyb20gZGVzaWduYXRlZCBlbGV2YXRpb24gc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGVsZXZhdGlvblZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZWxldmF0aW9uTWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuIiwgImltcG9ydCB7IGNvbmZpZywgU2VsZWN0b3JPcHRpb25zIH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgU2VsZWN0b3JNZXRhZGF0YSxcbiAgU2VsZWN0b3JTdHlsZXMsXG4gIFN0eWxlTWFwLFxuICBTdHlsZU1hcENhbGxiYWNrLFxuICBTdHlsZVByb3BlcnR5LFxufSBmcm9tICcuL2Nzcy1pbi1qcy50eXBlcyc7XG5pbXBvcnQge1xuICBwcm9wU2hvcnRoYW5kcyxcbiAgc3BhY2luZ1ZhbFNob3J0aGFuZHMsXG4gIG51bWJlclRvUHgsXG4gIGRvdFN0cmluZ1RvQ29uZmlnVmFsdWVNYXBwZXIsXG4gIGJvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsXG4gIGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kcyxcbiAgb3BhY2l0eVZhbFNob3J0aGFuZHMsXG4gIGZvbnRXZWlnaHRWYWxTaG9ydGhhbmRzLFxuICBmb250RmFtaWx5VmFsU2hvcnRoYW5kcyxcbiAgZWxldmF0aW9uVmFsU2hvcnRoYW5kcyxcbiAgZm9udFNpemVWYWxTaG9ydGhhbmRzLFxufSBmcm9tICcuL2Nzcy1pbi1qcy5wcm9wZXJ0eS1tYXBwZXJzJztcblxuLyoqIFNwZWNpZmllcyB3aGljaCBwcm9wZXJ0eSBtYXBwZXJzIHNob3VsZCBiZSBjYWxsZWQgYW5kIGluIHdoYXQgb3JkZXIgZm9yIGEgZ2l2ZW4gcHJvcCAqL1xuY29uc3QgcHJvcE1hcHBlcnMgPSB7XG4gIGhlaWdodDogW251bWJlclRvUHhdLFxuICBtaW5IZWlnaHQ6IFtudW1iZXJUb1B4XSxcbiAgbWF4SGVpZ2h0OiBbbnVtYmVyVG9QeF0sXG4gIHdpZHRoOiBbbnVtYmVyVG9QeF0sXG4gIG1pbldpZHRoOiBbbnVtYmVyVG9QeF0sXG4gIG1heFdpZHRoOiBbbnVtYmVyVG9QeF0sXG4gIHRvcDogW251bWJlclRvUHhdLFxuICByaWdodDogW251bWJlclRvUHhdLFxuICBib3R0b206IFtudW1iZXJUb1B4XSxcbiAgbGVmdDogW251bWJlclRvUHhdLFxuICBtYXJnaW46IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpblRvcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luUmlnaHQ6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpbkJvdHRvbTogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgbWFyZ2luTGVmdDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZzogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ1RvcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ1JpZ2h0OiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nQm90dG9tOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBwYWRkaW5nTGVmdDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgZ2FwOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICByb3dHYXA6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGNvbHVtbkdhcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgZm9udFNpemU6IFtmb250U2l6ZVZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBmb250V2VpZ2h0OiBbZm9udFdlaWdodFZhbFNob3J0aGFuZHNdLFxuICBmb250RmFtaWx5OiBbZm9udEZhbWlseVZhbFNob3J0aGFuZHNdLFxuICBib3JkZXJSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyV2lkdGg6IFtib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJUb3BSaWdodFJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgb3BhY2l0eTogW29wYWNpdHlWYWxTaG9ydGhhbmRzXSxcbiAgYm94U2hhZG93OiBbZWxldmF0aW9uVmFsU2hvcnRoYW5kc10sXG59O1xuXG4vKipcbiAqIFBhcnNlcyBwcm9wZXJ0aWVzIHRvIHRoZWlyIGFjdHVhbCBwcm9wZXJ0eSBtYXBwaW5ncyBhY2NvcmRpbmcgdG8gdGhlXG4gKiBtYXBwaW5nIGZ1bmN0aW9uIHBpcGVsaW5lcyBkZWZpbmVkIGFib3ZlXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJzZVByb3BTaG9ydGhhbmRzID0gKHByb3A6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlcik6IFN0eWxlUHJvcGVydHlbXSA9PiB7XG4gIC8vIENhc3QgdG8gc3RyaW5nIHZhbHVlc1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHZhbHVlID0gYCR7dmFsdWV9YDtcbiAgfVxuICAvLyBFeGVjIHByb3AgdHJhbnNmb3Jtc1xuICAvLyBUaGUgcHJvcCBzaG9ydGhhbmRzIG1hcHBlciBpcyBydW4gYWdhaW5zdCBldmVyeSBwcm9wXG4gIGNvbnN0IG1hcHBlZFByb3BzID0gZG90U3RyaW5nVG9Db25maWdWYWx1ZU1hcHBlcihwcm9wU2hvcnRoYW5kcyhbeyBwcm9wLCB2YWx1ZSB9XSkpO1xuICByZXR1cm4gbWFwcGVkUHJvcHMucmVkdWNlKChhY2MsIHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZXJzID0gcHJvcE1hcHBlcnNbcHJvcE1hcC5wcm9wXTtcbiAgICBpZiAobWFwcGVycykge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICAuLi5tYXBwZXJzLnJlZHVjZShcbiAgICAgICAgICAoYWNjLCBtYXBwZXIpID0+IG1hcHBlcihhY2MpLFxuICAgICAgICAgIFt7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IHByb3BNYXAudmFsdWUgfV1cbiAgICAgICAgKSxcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjYy5wdXNoKHByb3BNYXApO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gIH0sIFtdKTtcbn07XG5cbi8qKlxuICogUGFyc2VzIHN0eWxlTWFwIHZhbHVlcyB0byBzZWxlY3RvciArIHN0eWxlIGluZm8gdXNlZCBmb3JcbiAqIHVwZGF0aW5nIENTU1N0eWxlU2hlZXRzIG9yIDxzdHlsZT4gdGFncy5cbiAqL1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlU2VsZWN0b3JzRnJvbVN0eWxlTWFwID0gKFxuICBzZWxlY3RvckZuOiAob3B0aW9ucz86IFNlbGVjdG9yT3B0aW9ucykgPT4gc3RyaW5nLFxuICBzdHlsZU1hcDogU3R5bGVNYXBcbikgPT4ge1xuICBjb25zdCBwYXJzZWRTZWxlY3RvcnM6IFNlbGVjdG9yU3R5bGVzW10gPSBbXTtcbiAgY29uc3Qgc2VsZWN0b3JRdWV1ZTogU2VsZWN0b3JNZXRhZGF0YVtdID0gW3sgc2VsZWN0b3I6IHNlbGVjdG9yRm4oKSwgc3R5bGVNYXAgfV07XG4gIGNvbnN0IGJyZWFrcG9pbnRLZXlzID0gT2JqZWN0LmtleXMoY29uZmlnLmdyaWQuYnJlYWtwb2ludCk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHNlbGVjdG9yIHF1ZXVlIHVudGlsIHRoZXkgaGF2ZSBhbGwgYmVlbiBleGhhdXN0ZWRcbiAgd2hpbGUgKHNlbGVjdG9yUXVldWUubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHNlbGVjdG9yTWFwID0gc2VsZWN0b3JRdWV1ZS5zaGlmdCgpO1xuXG4gICAgLy8gUHVzaCBwYXJzZWQgc2VsZWN0b3JzIG9udG8gdGhlIHJldHVybiBsaXN0XG4gICAgcGFyc2VkU2VsZWN0b3JzLnB1c2goe1xuICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLFxuICAgICAgc2VsZWN0b3JXcmFwcGVyOiBzZWxlY3Rvck1hcC5zZWxlY3RvcldyYXBwZXIsXG4gICAgICBzdHlsZTogT2JqZWN0LmtleXMoc2VsZWN0b3JNYXAuc3R5bGVNYXApLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHNlbGVjdG9yTWFwLnN0eWxlTWFwW3Byb3BdO1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXJzZSBjYWxsYmFjayB2YWx1ZXNcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFsdWUgPSAodmFsdWUgYXMgU3R5bGVNYXBDYWxsYmFjaykoY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIG9iamVjdCB2YWx1ZXNcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIFF1ZXVlIHVwIHNlbGVjdG9ycyBmb3IgcHNldWRvLWNsYXNzZXNcbiAgICAgICAgICBpZiAocHJvcC5zdGFydHNXaXRoKCcmOicpKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JGbih7IGluZml4OiBwcm9wLnJlcGxhY2UoJyYnLCAnJykgfSksXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBzZWxlY3Rvck1hcC5zZWxlY3RvcldyYXBwZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFF1ZXVlIHVwIGJyZWFrcG9pbnQgc2VsZWN0b3Igc2hvcnRoYW5kc1xuICAgICAgICAgIGVsc2UgaWYgKGJyZWFrcG9pbnRLZXlzLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsXG4gICAgICAgICAgICAgIHN0eWxlTWFwOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0b3JXcmFwcGVyOiBgQG1lZGlhIChtaW4td2lkdGg6JHtjb25maWcuZ3JpZC5icmVha3BvaW50W3Byb3BdfSlgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIG1lZGlhL2NvbnRhaW5lciBxdWVyaWVzXG4gICAgICAgICAgZWxzZSBpZiAocHJvcC5zdGFydHNXaXRoKCdAbWVkaWEnKSB8fCBwcm9wLnN0YXJ0c1dpdGgoJ0Bjb250YWluZXInKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogcHJvcCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUXVldWUgdXAgc2VsZWN0b3JzIGZvciBzbG90dGVkIHF1ZXJpZXNcbiAgICAgICAgICBlbHNlIGlmIChwcm9wLnN0YXJ0c1dpdGgoJzo6c2xvdHRlZCcpIHx8IHByb3Auc3RhcnRzV2l0aCgnJiA6OnNsb3R0ZWQnKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yRm4oeyBwb3N0Zml4OiAnICcgKyBwcm9wLnJlcGxhY2UoJyYgJywgJycpIH0pLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogc2VsZWN0b3JNYXAuc2VsZWN0b3JXcmFwcGVyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIHZhbHVlIGJyZWFrcG9pbnQgb2JqZWN0c1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTG9vcCBpbiBvcmRlciBoZXJlIHNvIHRoZXkgb3ZlcnJpZGUgZWFjaCBvdGhlciBjb3JyZWN0bHlcbiAgICAgICAgICAgIGJyZWFrcG9pbnRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAodmFsdWVba2V5XSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JNYXAuc2VsZWN0b3IsIC8vIGluaGVyaXQgdGhlIHNlbGVjdG9yIGhlcmUgaW4gY2FzZSB3ZSBhcmUgd2l0aGluIGEgcHNldWRvLWNsYXNzXG4gICAgICAgICAgICAgICAgICBzdHlsZU1hcDogeyBbcHJvcF06IHZhbHVlW2tleV0gfSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogYEBtZWRpYSAobWluLXdpZHRoOiR7Y29uZmlnLmdyaWQuYnJlYWtwb2ludFtrZXldfSlgLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2Ugbm9ybWFsIHByb3BzXG4gICAgICAgIGNvbnN0IHByb3BzID0gcGFyc2VQcm9wU2hvcnRoYW5kcyhwcm9wLCB2YWx1ZSBhcyBzdHJpbmcgfCBudW1iZXIpO1xuICAgICAgICByZXR1cm4gYCR7YWNjfSR7cHJvcHMucmVkdWNlKChhY2MyLCB7IHByb3AsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAvLyBDb252ZXJ0IHByb3BlcnR5IG5hbWVzIGZyb20gY2FtZWwtY2FzZSB0byBkYXNoLWNhc2UsIGkuZS46XG4gICAgICAgICAgLy8gIGBiYWNrZ3JvdW5kQ29sb3JgIC0+IGBiYWNrZ3JvdW5kLWNvbG9yYFxuICAgICAgICAgIC8vIFZlbmRvci1wcmVmaXhlZCBuYW1lcyBuZWVkIGFuIGV4dHJhIGAtYCBhcHBlbmRlZCB0byBmcm9udDpcbiAgICAgICAgICAvLyAgYHdlYmtpdEFwcGVhcmFuY2VgIC0+IGAtd2Via2l0LWFwcGVhcmFuY2VgXG4gICAgICAgICAgLy8gRXhjZXB0aW9uIGlzIGFueSBwcm9wZXJ0eSBuYW1lIGNvbnRhaW5pbmcgYSBkYXNoLCBpbmNsdWRpbmdcbiAgICAgICAgICAvLyBjdXN0b20gcHJvcGVydGllczsgd2UgYXNzdW1lIHRoZXNlIGFyZSBhbHJlYWR5IGRhc2gtY2FzZWQgaS5lLjpcbiAgICAgICAgICAvLyAgYC0tbXktYnV0dG9uLWNvbG9yYCAtLT4gYC0tbXktYnV0dG9uLWNvbG9yYFxuICAgICAgICAgIHByb3AgPSBwcm9wLnJlcGxhY2UoLyg/Ol4od2Via2l0fG1venxtc3xvKXwpKD89W0EtWl0pL2csICctJCYnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHJldHVybiBgJHthY2MyfSR7cHJvcH06JHt2YWx1ZX07YDtcbiAgICAgICAgfSwgJycpfWA7XG4gICAgICB9LCAnJyksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VkU2VsZWN0b3JzO1xufTtcblxuY29uc3QgcGFyc2VTZWxlY3RvcnMgPSAoc3R5bGVzLCBzZWxlY3RvcnM/OiBhbnkpID0+IHtcbiAgaWYgKCFzZWxlY3RvcnMpIHtcbiAgICByZXR1cm4gc3R5bGVzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgJHtzdHlsZXN9JHtzZWxlY3RvcnMucmVkdWNlKChhY2MsIHsgc2VsZWN0b3IsIHNlbGVjdG9yV3JhcHBlciwgc3R5bGUgfSkgPT4ge1xuICAgICAgaWYgKHN0eWxlID09PSAnJykge1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuICAgICAgY29uc3QgYmFzZSA9IGAke3NlbGVjdG9yfXske3N0eWxlfX1gO1xuICAgICAgY29uc3Qgd3JhcHBlZCA9IHNlbGVjdG9yV3JhcHBlciA/IGAke3NlbGVjdG9yV3JhcHBlcn17JHtiYXNlfX1gIDogYmFzZTtcbiAgICAgIHJldHVybiBgJHthY2N9JHt3cmFwcGVkfWA7XG4gICAgfSwgJycpfWA7XG4gIH1cbn07XG5cbi8qKlxuICogQ29tYmluZXMgYWxsIGluc3RhbmNlIHN0eWxlTWFwIHNlbGVjdG9ycyArIHN0eWxlIGluZm8gaW50byBvbmUgY3NzVGV4dFxuICogdXNlZCBmb3IgdXBkYXRpbmcgQ1NTU3R5bGVTaGVldHMgb3IgPHN0eWxlPiB0YWdzLlxuICovXG5leHBvcnQgY29uc3QgY29uc3RydWN0SW5zdGFuY2VTdHlsZXMgPSAoaW5zdGFuY2VTdHlsZXNNYXApID0+IHtcbiAgbGV0IHN0eWxlcyA9ICcnO1xuXG4gIC8vIFNvcnQga2V5cyBpbiBhbHBoYWJldGljYWwgb3JkZXIgdG8gaGVscCBhdm9pZCBoeWRyYXRpb24gbWlzbWF0Y2ggZXJyb3JzXG4gIFsuLi5pbnN0YW5jZVN0eWxlc01hcC5lbnRyaWVzKCldXG4gICAgLmZpbHRlcigoW2tleSwgX10pID0+IGtleSAhPT0gJ3NlJyAmJiBrZXkgIT09ICdzcCcpXG4gICAgLnNvcnQoKGEsIGIpID0+IGJbMF0gLSBhWzBdKVxuICAgIC5mb3JFYWNoKChbXywgc2VsZWN0b3JzXSkgPT4ge1xuICAgICAgc3R5bGVzID0gcGFyc2VTZWxlY3RvcnMoc3R5bGVzLCBzZWxlY3RvcnMpO1xuICAgIH0pO1xuXG4gIC8vIEFsd2F5cyBwYXJzZSBgc2VgIGFuZCBgc3BgIHNlbGVjdG9ycyBsYXN0IHRvIGhlbHAgYXZvaWQgaHlkcmF0aW9uIG1pc21hdGNoIGVycm9yc1xuICAvLyBhbmQgZW5zdXJlIHRoZXkgb3ZlcnJpZGUgYW55IGNvbXBvbmVudCBsZXZlbCBkeW5hbWljIHN0eWxlcy5cbiAgc3R5bGVzID0gYCR7c3R5bGVzfSR7cGFyc2VTZWxlY3RvcnMoJycsIGluc3RhbmNlU3R5bGVzTWFwLmdldCgnc2UnKSl9JHtwYXJzZVNlbGVjdG9ycyhcbiAgICAnJyxcbiAgICBpbnN0YW5jZVN0eWxlc01hcC5nZXQoJ3NwJylcbiAgKX1gO1xuICByZXR1cm4gc3R5bGVzO1xufTtcbiIsICJpbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gJ2xpdC1odG1sL2lzLXNlcnZlci5qcyc7XG5cbmV4cG9ydCBjb25zdCBpc1NzciA9ICgpID0+IGlzU2VydmVyO1xuXG5leHBvcnQgY29uc3QgaXNCcm93c2VyTGlrZSA9ICgpID0+IGdsb2JhbFRoaXMgIT09IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IGlzVmFsaWRSZXNpemVDb250cm9sbGVyID0gKHJlc2l6ZUNvbnRyb2xsZXIpID0+XG4gIHJlc2l6ZUNvbnRyb2xsZXI/LlsnX29ic2VydmVyJ10/LlsndW5vYnNlcnZlJ107XG5cbmludGVyZmFjZSBOYXZpZ2F0b3JVQURhdGEge1xuICBicmFuZHM6IEFycmF5PHsgYnJhbmQ6IHN0cmluZzsgdmVyc2lvbjogc3RyaW5nIH0+O1xuICBtb2JpbGU6IGJvb2xlYW47XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGF0Zm9ybSgpOiBzdHJpbmcge1xuICBjb25zdCB1YURhdGEgPSAobmF2aWdhdG9yIGFzIGFueSkudXNlckFnZW50RGF0YSBhcyBOYXZpZ2F0b3JVQURhdGEgfCB1bmRlZmluZWQ7XG5cbiAgaWYgKHVhRGF0YT8ucGxhdGZvcm0pIHtcbiAgICByZXR1cm4gdWFEYXRhLnBsYXRmb3JtO1xuICB9XG5cbiAgcmV0dXJuIG5hdmlnYXRvci5wbGF0Zm9ybTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzUGxhdGZvcm0gPSAocGxhdGZvcm06ICdJT1MnKSA9PiB7XG4gIGlmICghaXNTc3IoKSkge1xuICAgIGlmIChwbGF0Zm9ybSA9PT0gJ0lPUycpIHtcbiAgICAgIHJldHVybiAvaVAoaG9uZXxhZHxvZCl8aU9TLy50ZXN0KGdldFBsYXRmb3JtKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiIsICJjb25zdCBuYXRpdmVWYWxpZGl0eVN0YXRlczogQXJyYXk8a2V5b2YgVmFsaWRpdHlTdGF0ZT4gPSBbXG4gICdiYWRJbnB1dCcsXG4gICdjdXN0b21FcnJvcicsXG4gICdwYXR0ZXJuTWlzbWF0Y2gnLFxuICAncmFuZ2VPdmVyZmxvdycsXG4gICdyYW5nZVVuZGVyZmxvdycsXG4gICdzdGVwTWlzbWF0Y2gnLFxuICAndG9vTG9uZycsXG4gICd0b29TaG9ydCcsXG4gICd0eXBlTWlzbWF0Y2gnLFxuICAndmFsdWVNaXNzaW5nJyxcbl07XG5cbi8qKlxuICogQ3VzdG9tIHZhbGlkYXRvciBmb3IgdGhlIGBAb3Blbi13Yy9mb3JtLWNvbnRyb2xgIHRoYXQgbGVhbnMgb24gYW4gaW50ZXJuYWxcbiAqIGlucHV0IHRvIGZvcndhcmQgbmF0aXZlIHZhbGlkYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGlubmVySW5wdXRWYWxpZGF0b3JzID0gbmF0aXZlVmFsaWRpdHlTdGF0ZXMubWFwKChrZXkpID0+ICh7XG4gIGtleSxcbiAgaXNWYWxpZChpbnN0YW5jZTogSFRNTEVsZW1lbnQgJiB7IHZhbGlkYXRpb25UYXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQgfSkge1xuICAgIGlmIChpbnN0YW5jZS52YWxpZGF0aW9uVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gIWluc3RhbmNlLnZhbGlkYXRpb25UYXJnZXQudmFsaWRpdHlba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG59KSk7XG4iLCAiLyoqXG4gKiBOT1RFOlxuICpcbiAqIFRoaXMgZmlsZSBjb250YWlucyBpbXBsZW1lbnRhdGlvbiBmb3IgYW4gZXh0cmVtZWx5IHNpbXBsZSBhbmQgbGlnaHR3ZWlnaHRcbiAqIHJlYWN0aXZlIHNvbHV0aW9uIGxvb3NlbHkgYmFzZWQgb24gc29saWQtanMgc3R5bGUgc2lnbmFscy4gSXQgZW5hYmxlcyBiYXNpY1xuICogcmVhY3RpdmUgc3Vic2NyaXB0aW9ucyBhbmQgY29tcHV0ZWQgc2lnbmFscyBvZiBvbmUgb3IgbW9yZSBvdGhlciBkZXBlbmRlbmN5IHNpZ25hbHMuXG4gKlxuICogSW4gaXRzIGN1cnJlbnQgc3RhdGUsIGl0IGlzIG5vdCBwZXJmZWN0IGFuZCBkb2VzIG5vdCBoYW5kbGUgYWxsIGVkZ2UgY2FzZXMuIEZvclxuICogZXhhbXBsZSwgaWYgeW91IGhhdmUgbXVsdGlwbGUgbGF5ZXJzIG9mIGNvbXB1dGVkIHN0YXRlIHdpdGggYSBzaW5nbGUgZGVwZW5kZW5jeVxuICogc2hhcmVkIG1vcmUgdGhhbiBvbmNlIGFjcm9zcyB0aG9zZSBsYXllcnMsIHRoZSBzYW1lIGNoYW5nZSB3aWxsIHBvdGVudGlhbGx5IGJlXG4gKiBlbWl0dGVkIHR3aWNlLiBPdXIgZXhwZWN0YXRpb24gYXRtLCBpcyB0aGF0IHdlIHdvbid0IGVuY291bnRlciB0aG9zZSBzY2VuYXJpb3NcbiAqIGluIHRoaXMgbGlicmFyeS5cbiAqL1xuXG4vKiogVW5zdWJzY3JpYmVzIGZyb20gdmFsdWUgdXBkYXRlcy4gKi9cbmV4cG9ydCB0eXBlIFVuc3Vic2NyaWJlciA9ICgpID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmFsPFQ+IHtcbiAgLyoqIEdldCB0aGUgY3VycmVudCB2YWx1ZSAqL1xuICBnZXQoKTogVDtcblxuICAvKiogU2V0IHJlYWN0aXZlIHZhbHVlICovXG4gIHNldCh2YWx1ZTogVCk7XG5cbiAgLyoqIFVwZGF0ZSByZWFjdGl2ZSB2YWx1ZSB1c2luZyBjYWxsYmFjayAqL1xuICB1cGRhdGUoZm46ICh2YWx1ZTogVCkgPT4gVCk7XG5cbiAgLyoqIFN1YnNjcmliZSB0byByZWFjdGl2ZSB2YWx1ZSBjaGFuZ2VzICovXG4gIHN1YnNjcmliZShmbjogKHZhbHVlOiBULCB1bnN1YnNjcmliZT86IFVuc3Vic2NyaWJlcikgPT4gdm9pZCk6IFVuc3Vic2NyaWJlcjtcbn1cblxuY29uc3QgY29udGV4dCA9IFtdO1xuXG5mdW5jdGlvbiBfc3Vic2NyaWJlKHJ1bm5pbmcsIHN1YnNjcmlwdGlvbnMpIHtcbiAgc3Vic2NyaXB0aW9ucy5hZGQocnVubmluZyk7XG4gIHJ1bm5pbmcuZGVwZW5kZW5jaWVzLmFkZChzdWJzY3JpcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gY2xlYW51cChydW5uaW5nKSB7XG4gIGZvciAoY29uc3QgZGVwIG9mIHJ1bm5pbmcuZGVwZW5kZW5jaWVzKSB7XG4gICAgZGVwLmRlbGV0ZShydW5uaW5nKTtcbiAgfVxuICBydW5uaW5nLmRlcGVuZGVuY2llcy5jbGVhcigpO1xufVxuXG4vKiogQ3JlYXRlIGEgc2lnbmFsIHRoYXQgYWxsb3dzIGJvdGggdXBkYXRpbmcgYW5kIHJlYWRpbmcgYnkgZ2V0dGVyIG9yIHN1YnNjcmlwdGlvbi4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaWduYWw8VD4odmFsdWU/OiBUKSB7XG4gIGNvbnN0IHN1YnNjcmlwdGlvbnMgPSBuZXcgU2V0PGFueT4oKTtcblxuICBjb25zdCBnZXQgPSAoKTogVCA9PiB7XG4gICAgY29uc3QgcnVubmluZyA9IGNvbnRleHRbY29udGV4dC5sZW5ndGggLSAxXTtcbiAgICBpZiAocnVubmluZykgX3N1YnNjcmliZShydW5uaW5nLCBzdWJzY3JpcHRpb25zKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0ID0gKG5leHRWYWx1ZTogVCkgPT4ge1xuICAgIHZhbHVlID0gbmV4dFZhbHVlO1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIFsuLi5zdWJzY3JpcHRpb25zXSkge1xuICAgICAgc3ViLmV4ZWN1dGUoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlID0gKGZuOiAodmFsdWU6IFQpID0+IFQpID0+IHtcbiAgICB2YWx1ZSA9IGZuKHZhbHVlKTtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiBbLi4uc3Vic2NyaXB0aW9uc10pIHtcbiAgICAgIHN1Yi5leGVjdXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRoaXMgaXMgZXNzZW50aWFsbHkgYSB1c2VFZmZlY3QgbWFzcXVlcmFkaW5nIGFzIGEgc3Vic2NyaWJlIGZ1bmN0aW9uXG4gIGNvbnN0IHN1YnNjcmliZSA9IChmbjogKHZhbHVlOiBULCB1bnN1YnNjcmliZT86IFVuc3Vic2NyaWJlcikgPT4gdm9pZCk6IFVuc3Vic2NyaWJlciA9PiB7XG4gICAgY29uc3QgZXhlY3V0ZSA9ICgpID0+IHtcbiAgICAgIGNsZWFudXAocnVubmluZyk7XG4gICAgICBjb250ZXh0LnB1c2gocnVubmluZyk7XG4gICAgICB0cnkge1xuICAgICAgICBmbihydW5uaW5nLmdldCgpLCAoKSA9PiBjbGVhbnVwKHJ1bm5pbmcpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGNvbnRleHQucG9wKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKCkgPT4gY2xlYW51cChydW5uaW5nKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcnVubmluZyA9IHtcbiAgICAgIGV4ZWN1dGUsXG4gICAgICBkZXBlbmRlbmNpZXM6IG5ldyBTZXQoKSxcbiAgICAgIGdldCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGV4ZWN1dGUoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCxcbiAgICBzZXQsXG4gICAgdXBkYXRlLFxuICAgIHN1YnNjcmliZSxcbiAgfSBhcyBTaWduYWw8VD47XG59XG5cbi8qKiBPbmUgb3IgbW9yZSBgU2lnbmFsYHMgKi9cbnR5cGUgU2lnbmFscyA9IFNpZ25hbDxhbnk+IHwgW1NpZ25hbDxhbnk+LCAuLi5BcnJheTxTaWduYWw8YW55Pj5dIHwgU2lnbmFsPGFueT5bXTtcblxuLyoqIE9uZSBvciBtb3JlIHZhbHVlcyBmcm9tIHNpZ25hbHMgKi9cbmV4cG9ydCB0eXBlIFNpZ25hbFZhbHVlczxUPiA9IFQgZXh0ZW5kcyBTaWduYWw8aW5mZXIgVT5cbiAgPyBVXG4gIDogeyBbSyBpbiBrZXlvZiBUXTogVFtLXSBleHRlbmRzIFNpZ25hbDxpbmZlciBVPiA/IFUgOiBuZXZlciB9O1xuXG4vKiogQ3JlYXRlIGEgbmV3IGNvbXB1dGVkIHNpZ25hbCBmcm9tIG9uZSBvciBtb3JlIHNpZ25hbCBkZXBlbmRlbmNpZXMgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZDxEIGV4dGVuZHMgU2lnbmFscywgVD4oXG4gIGRlcGVuZGVuY2llczogRCxcbiAgZm46ICh2YWx1ZXM6IFNpZ25hbFZhbHVlczxEPikgPT4gVFxuKTogU2lnbmFsPFQ+O1xuXG4vKiogQ3JlYXRlIGEgbmV3IGNvbXB1dGVkIHNpZ25hbCBmcm9tIG9uZSBvciBtb3JlIHNpZ25hbCBkZXBlbmRlbmNpZXMgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZDxEIGV4dGVuZHMgU2lnbmFscywgVD4oXG4gIGRlcGVuZGVuY2llczogRCxcbiAgZm4/OiAodmFsdWVzOiBTaWduYWxWYWx1ZXM8RD4sIHNldD86ICh2YWx1ZTogYW55KSA9PiB2b2lkKSA9PiBUXG4pOiBTaWduYWw8dW5rbm93bj47XG5cbi8qKiBDcmVhdGUgYSBuZXcgY29tcHV0ZWQgc2lnbmFsIGZyb20gb25lIG9yIG1vcmUgc2lnbmFsIGRlcGVuZGVuY2llcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkPEQgZXh0ZW5kcyBTaWduYWxzPihcbiAgZGVwZW5kZW5jaWVzOiBELFxuICBmbj86ICguLi5wYXJhbXM6IGFueVtdKSA9PiBhbnlcbik6IFNpZ25hbDxhbnk+IHtcbiAgY29uc3QgYXV0byA9IGZuLmxlbmd0aCA8IDI7XG4gIGNvbnN0IHMgPSBzaWduYWw8YW55PigpO1xuICBjb25zdCBzaW5nbGUgPSAhQXJyYXkuaXNBcnJheShkZXBlbmRlbmNpZXMpO1xuICBjb25zdCBkZXBzID0gc2luZ2xlXG4gICAgPyAoW2RlcGVuZGVuY2llc10gYXMgU2lnbmFsPFNpZ25hbFZhbHVlczxEPj5bXSlcbiAgICA6IChkZXBlbmRlbmNpZXMgYXMgU2lnbmFsPFNpZ25hbFZhbHVlczxEPj5bXSk7XG5cbiAgLy8gV2Ugb25seSBuZWVkIHRvIHN1YnNjcmliZSB0byB0aGUgZmlyc3QgaXRlbSBiZWNhdXNlXG4gIC8vIHRoZSBhY3Qgb2YgcmV0cmlldmluZyBhbGwgZGVwZW5kZW5jeSB2YWx1ZXMgd2lsbCBhZGQgdGhlbVxuICAvLyB0byB0aGUgY29udGV4dCBzdGFjayBhcHByb3ByaWF0ZWx5XG4gIGNvbnN0IGRlcCA9IGRlcHNbMF07XG4gIGRlcC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlcyA9IGRlcHMubWFwKChkZXApID0+IGRlcC5nZXQoKSk7XG4gICAgY29uc3QgcmV0ID0gc2luZ2xlID8gdmFsdWVzWzBdIDogKHZhbHVlcyBhcyBTaWduYWxWYWx1ZXM8RD4pO1xuICAgIGlmIChhdXRvKSB7XG4gICAgICBzLnNldChmbihyZXQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4ocmV0LCBzLnNldCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHM7XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgd2Mvbm8tc2VsZi1jbGFzcyAqL1xuaW1wb3J0IHsgY29uZmlnLCBzZWxlY3RvckZhY3RvcnkgfSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kcywgZG90U3RyaW5nVG9Db25maWdWYWx1ZSB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBNdGVFbGVtZW50IH0gZnJvbSAnLi9tdGUuZWxlbWVudCc7XG5pbXBvcnQgeyBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSBmcm9tICcuLi9hdHRyaWJ1dGUtY29udmVydGVyJztcblxuZXhwb3J0IHR5cGUgU3BhY2luZ1ZhbHVlID1cbiAgfCBudW1iZXJcbiAgfCBzdHJpbmdcbiAgfCAxXG4gIHwgMlxuICB8IDNcbiAgfCA0XG4gIHwgNVxuICB8IDZcbiAgfCAnbm9uZSdcbiAgfCAneHMnXG4gIHwgJ3NtJ1xuICB8ICdtZCdcbiAgfCAnbGcnXG4gIHwgJ3hsJ1xuICB8ICd4eGwnXG4gIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBVbml0VmFsdWUgPSBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIEJvcmRlclJhZGl1c1ZhbHVlID1cbiAgfCAnbm9uZSdcbiAgfCAneHMnXG4gIHwgJ3NtJ1xuICB8ICdtZCdcbiAgfCAnbGcnXG4gIHwgJ3hsJ1xuICB8ICd4eGwnXG4gIHwgJ2Z1bGwnXG4gIHwgc3RyaW5nXG4gIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBCb3JkZXJXaWR0aFZhbHVlID0gJ25vbmUnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBPcGFjaXR5VmFsdWUgPVxuICB8ICd4eHhzJ1xuICB8ICd4eHMnXG4gIHwgJ3hzJ1xuICB8ICdzbSdcbiAgfCAnbWQnXG4gIHwgJ2xnJ1xuICB8ICd4bCdcbiAgfCAneHhsJ1xuICB8IHN0cmluZ1xuICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgUmVzcG9uc2l2ZVZhbHVlPFQ+ID0gVCB8IFBhcnRpYWw8UmVjb3JkPCd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCcsIFQ+PjtcblxuY29uc3QgZGVmYXVsdEJvcmRlckZhY3RvcnkgPSAod2lkdGg/LCBjb2xvcj8sIHN0eWxlPykgPT5cbiAgYCR7c3R5bGUgPz8gJ3NvbGlkJ30gJHtcbiAgICBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMoW1xuICAgICAgeyBwcm9wOiAnYm9yZGVyV2lkdGgnLCB2YWx1ZTogZG90U3RyaW5nVG9Db25maWdWYWx1ZSh3aWR0aCA/PyAnMXB4JykgfSxcbiAgICBdKVswXT8udmFsdWVcbiAgfSAke2RvdFN0cmluZ1RvQ29uZmlnVmFsdWUoY29sb3IpID8/IGNvbmZpZy5jb2xvci5ib3JkZXIxfWA7XG5cbmV4cG9ydCBjbGFzcyBNdGVDb250ZW50QmFzZSBleHRlbmRzIE10ZUVsZW1lbnQge1xuICAvLyAtLSBTcGFjaW5nIFByb3BzIC0tXG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW5gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbT86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXJpZ2h0YCBhbmQgYG1hcmdpbi1sZWZ0YCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbXg/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi10b3BgIGFuZCBgbWFyZ2luLWJvdHRvbWAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG15PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tdG9wYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG10PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tcmlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbXI/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi1ib3R0b21gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWI/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi1sZWZ0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1sPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHA/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctcmlnaHRgIGFuZCBgcGFkZGluZy1sZWZ0YCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcHg/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctdG9wYCBhbmQgYHBhZGRpbmctYm90dG9tYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcHk/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctdG9wYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHB0PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXJpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHByPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLWJvdHRvbWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwYj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1sZWZ0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHBsPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLy8gLS0gUG9zaXRpb25pbmcgUHJvcHMgLS1cblxuICAvKiogU2V0cyB0aGUgYGRpc3BsYXlgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2Jsb2NrJ1xuICAgIHwgJ2lubGluZS1ibG9jaydcbiAgICB8ICdmbGV4J1xuICAgIHwgJ2lubGluZS1mbGV4J1xuICAgIHwgJ2dyaWQnXG4gICAgfCAnaW5saW5lLWdyaWQnXG4gICAgfCAnaW5saW5lJ1xuICAgIHwgJ2xpc3QtaXRlbSdcbiAgICB8ICdub25lJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGFsaWduLWl0ZW1zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGE/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdlbmQnXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdiYXNlbGluZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1pdGVtc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBhbGlnbkl0ZW1zPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnYmFzZWxpbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24tc2VsZmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBhbGlnblNlbGY/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdhdXRvJ1xuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2Jhc2VsaW5lJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGFsaWduLWNvbnRlbnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYWxpZ25Db250ZW50PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnc3BhY2UtYmV0d2VlbidcbiAgICB8ICdzcGFjZS1hcm91bmQnXG4gICAgfCAnc3BhY2UtZXZlbmx5J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGp1c3RpZnktY29udGVudGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBqPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3NwYWNlLWJldHdlZW4nXG4gICAgfCAnc3BhY2UtYXJvdW5kJ1xuICAgIHwgJ3NwYWNlLWV2ZW5seSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LWNvbnRlbnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAganVzdGlmeUNvbnRlbnQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3BhY2UtYmV0d2VlbidcbiAgICB8ICdzcGFjZS1hcm91bmQnXG4gICAgfCAnc3BhY2UtZXZlbmx5J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGp1c3RpZnktaXRlbXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkganVzdGlmeUl0ZW1zPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdsZWZ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAncmlnaHQnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1zZWxmYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGp1c3RpZnlTZWxmPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdsZWZ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAncmlnaHQnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBmbGV4OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtZGlyZWN0aW9uYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGRpcmVjdGlvbj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAncm93JyB8ICdyb3dSZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtblJldmVyc2UnIHwgJ2luaXRpYWwnIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWRpcmVjdGlvbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4RGlyZWN0aW9uPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdyb3cnIHwgJ3Jvd1JldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uUmV2ZXJzZScgfCAnaW5pdGlhbCcgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtYmFzaXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYmFzaXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWJhc2lzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhCYXNpcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtZ3Jvd2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncm93PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1ncm93YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhHcm93PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1zaHJpbmtgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgc2hyaW5rPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1zaHJpbmtgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleFNocmluaz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtd3JhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSB3cmFwPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdub3dyYXAnIHwgJ3dyYXAnIHwgJ3dyYXAtcmV2ZXJzZScgfCAnaW5pdGlhbCcgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtd3JhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4V3JhcD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAnbm93cmFwJyB8ICd3cmFwJyB8ICd3cmFwLXJldmVyc2UnIHwgJ2luaXRpYWwnIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBvcmRlcmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBvcmRlcj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBnYXA/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGNvbHVtbi1nYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgY29sdW1uR2FwPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGByb3ctZ2FwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHJvd0dhcD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1jb2x1bW5gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZENvbHVtbj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtcm93YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRSb3c/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWF1dG8tZmxvd2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQXV0b0Zsb3c/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3JvdycgfCAnY29sdW1uJyB8ICdkZW5zZScgfCAncm93IGRlbnNlJyB8ICdjb2x1bW4gZGVuc2UnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLWF1dG8tY29sdW1uc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBncmlkQXV0b0NvbHVtbnM/OiBSZXNwb25zaXZlVmFsdWU8J2F1dG8nIHwgJ21heC1jb250ZW50JyB8ICdtaW4tY29udGVudCcgfCBVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1hdXRvLXJvd3NgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZEF1dG9Sb3dzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgICdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXRlbXBsYXRlLWNvbHVtbnNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZFRlbXBsYXRlQ29sdW1ucz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICAnbm9uZScgfCAnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZVxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC10ZW1wbGF0ZS1yb3dzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRUZW1wbGF0ZVJvd3M/OiBSZXNwb25zaXZlVmFsdWU8J25vbmUnIHwgJ2F1dG8nIHwgJ21heC1jb250ZW50JyB8ICdtaW4tY29udGVudCcgfCBVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC10ZW1wbGF0ZS1hcmVhc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBncmlkVGVtcGxhdGVBcmVhcz86IFJlc3BvbnNpdmVWYWx1ZTwnbm9uZScgfCBzdHJpbmcgfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1hcmVhYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRBcmVhPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8vIC0tIFNpemluZyBQcm9wcyAtLVxuXG4gIC8qKiBTZXRzIHRoZSBgd2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgdz86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWF4LXdpZHRoYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1heHc/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1pbi13aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtaW53PzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBoZWlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgaD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWF4LWhlaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtYXhoPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtaW4taGVpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1pbmg/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJhY2tncm91bmRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuIENhbiBiZSBwYXNzZWQgZG90IG5vdGF0ZWQgdGhlbWUgY29uZmlnIHN0cmluZ3MgdG8gc2VsZWN0IGNvbG9yIHRva2VuIHZhbHVlcy4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYmc/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBjb2xvcmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gQ2FuIGJlIHBhc3NlZCBkb3Qgbm90YXRlZCB0aGVtZSBjb25maWcgc3RyaW5ncyB0byBzZWxlY3QgY29sb3IgdG9rZW4gdmFsdWVzLiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBjPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWNvbG9yYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiBDYW4gYmUgcGFzc2VkIGRvdCBub3RhdGVkIHRoZW1lIGNvbmZpZyBzdHJpbmdzIHRvIHNlbGVjdCBjb2xvciB0b2tlbiB2YWx1ZXMuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJvcmRlckNvbG9yPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXdpZHRoYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJXaWR0aD86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJXaWR0aFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1zdHlsZWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYm9yZGVyU3R5bGU/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3NvbGlkJyB8ICdkb3R0ZWQnIHwgJ2Rhc2hlZCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlcmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyPzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyVG9wPzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXJpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJSaWdodD86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1ib3R0b21gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbT86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1sZWZ0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJMZWZ0PzogUmVzcG9uc2l2ZVZhbHVlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyUmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3AtcmlnaHQtcmFkaXVzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJUb3BSaWdodFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJUb3BMZWZ0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJCb3R0b21SaWdodFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3AtcmlnaHQtcmFkaXVzYCBhbmQgYGJvcmRlci10b3AtbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyVG9wUmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3AtcmlnaHQtcmFkaXVzYCBhbmQgYGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclJpZ2h0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzYCBhbmQgYGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tUmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3AtbGVmdC1yYWRpdXNgIGFuZCBgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJMZWZ0UmFkaXVzPzogUmVzcG9uc2l2ZVZhbHVlPEJvcmRlclJhZGl1c1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGxpbmUtaGVpZ2h0YCBjc3MgcHJvcGVydHkgICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGxpbmVIZWlnaHQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgbnVtYmVyXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmb250LXdlaWdodGAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZvbnRXZWlnaHQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdsaWdodCdcbiAgICB8ICdyZWd1bGFyJ1xuICAgIHwgJ21lZGl1bSdcbiAgICB8ICdsaWdodGVyJ1xuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdib2xkJ1xuICAgIHwgJ2JvbGRlcidcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gICAgfCAnMTAwJ1xuICAgIHwgJzIwMCdcbiAgICB8ICczMDAnXG4gICAgfCAnNDAwJ1xuICAgIHwgJzUwMCdcbiAgICB8ICc2MDAnXG4gICAgfCAnNzAwJ1xuICAgIHwgJzgwMCdcbiAgICB8ICc5MDAnXG4gID47XG5cbiAgLyoqIFNob3J0aGFuZCBmb3IgYGZvbnRXZWlnaHRgLiBTZXRzIHRoZSBgZm9udC13ZWlnaHRgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2xpZ2h0J1xuICAgIHwgJ3JlZ3VsYXInXG4gICAgfCAnbWVkaXVtJ1xuICAgIHwgJ2xpZ2h0ZXInXG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ2JvbGQnXG4gICAgfCAnYm9sZGVyJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgICB8ICcxMDAnXG4gICAgfCAnMjAwJ1xuICAgIHwgJzMwMCdcbiAgICB8ICc0MDAnXG4gICAgfCAnNTAwJ1xuICAgIHwgJzYwMCdcbiAgICB8ICc3MDAnXG4gICAgfCAnODAwJ1xuICAgIHwgJzkwMCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZvbnQtc2l6ZWAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZvbnRTaXplPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8IFVuaXRWYWx1ZSB8ICd4eHMnIHwgJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJ1xuICA+O1xuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIGBmb250U2l6ZWAuIFNldHMgdGhlIGBmb250LXNpemVgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCBVbml0VmFsdWUgfCAneHhzJyB8ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZvbnQtZmFtaWx5YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZm9udEZhbWlseT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAnc2FucycgfCAnc2VyaWYnIHwgJ21vbm8nIHwgc3RyaW5nXG4gID47XG5cbiAgLyoqIFNob3J0aGFuZCBmb3IgYG9wYWNpdHlgLiBTZXRzIHRoZSBgb3BhY2l0eWAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG9wYWNpdHk/OiBSZXNwb25zaXZlVmFsdWU8T3BhY2l0eVZhbHVlPjtcblxuICAvKiogQXBwbGllcyBNb3J0YXIgc3RhbmRhcmQgYm94LXNoYWRvdyB2YWx1ZXMgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZWxldmF0aW9uPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgICd6MCcgfCAnejEnIHwgJ3oyJyB8ICd6MycgfCAnejQnXG4gID47XG5cbiAgLyoqIEFkanVzdCB0aGlzIGVsZW1lbnRzIGJsZWVkIGlmIGl0IGlzIGEgZGlyZWN0IGRlc2NlbmRhbnQgb2YgYW4gbXRlLWxheW91dC1jb250YWluZXIgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBsYXlvdXRCbGVlZD86ICdmdWxsJyB8ICdwb3BvdXQnIHwgJ2NvbnRlbnQnIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoaXMgZWxlbWVudCBhcyBhIHN1YmdyaWQgd2hlbiBzZXQuIGBkaXNwbGF5YCBpcyBzZXQgdG8gYGdyaWRgIGFuZCBgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zYCBpcyBzZXQgdG8gYHN1YmdyaWRgLlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHN1YmdyaWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBzZWxlY3RvciB0byBoYXZlIGluc3RhbmNlIHN0eWxlcyB0YXJnZXQgYSBzcGVjaWZpYyBpbm5lciBlbGVtZW50LlxuICAgKiBVc2VmdWwgaW4gc3BlY2lmaWMgc2NlbmFyaW9zIHdoZXJlIHRoZSBwcmltYXJ5IGNvbnRlbnQvc2xvdCB3cmFwcGVkIHdpdGhpbiB0aGUgdGVtcGxhdGVcbiAgICogbGlrZSB3aXRoIHRoZSBtb2RhbCBjb21wb25lbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgY29udGVudFN0eWxlU2VsZWN0b3JSb290ID0gJzpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCc7XG5cbiAgLy8gTGlzdCBvZiBwcm9wcyBmb3Igb3B0aW1hbCBzdHlsZSB1cGRhdGUgY2hlY2tpbmdcbiAgcHJpdmF0ZSBzdGF0aWMgY29udGVudFByb3BzID0gbmV3IFNldChbXG4gICAgJ20nLFxuICAgICdteCcsXG4gICAgJ215JyxcbiAgICAnbXQnLFxuICAgICdtcicsXG4gICAgJ21iJyxcbiAgICAnbWwnLFxuICAgICdwJyxcbiAgICAncHgnLFxuICAgICdweScsXG4gICAgJ3B0JyxcbiAgICAncHInLFxuICAgICdwYicsXG4gICAgJ3BsJyxcbiAgICAnZCcsXG4gICAgJ2EnLFxuICAgICdqJyxcbiAgICAnYmFzaXMnLFxuICAgICdzaHJpbmsnLFxuICAgICdncm93JyxcbiAgICAnZGlyZWN0aW9uJyxcbiAgICAnd3JhcCcsXG4gICAgJ2FsaWduSXRlbXMnLFxuICAgICdhbGlnblNlbGYnLFxuICAgICdhbGlnbkNvbnRlbnQnLFxuICAgICdqdXN0aWZ5Q29udGVudCcsXG4gICAgJ2p1c3RpZnlJdGVtcycsXG4gICAgJ2p1c3RpZnlTZWxmJyxcbiAgICAnZmxleCcsXG4gICAgJ2ZsZXhEaXJlY3Rpb24nLFxuICAgICdmbGV4QmFzaXMnLFxuICAgICdmbGV4U2hyaW5rJyxcbiAgICAnZmxleEdyb3cnLFxuICAgICdmbGV4V3JhcCcsXG4gICAgJ29yZGVyJyxcbiAgICAnZ2FwJyxcbiAgICAnY29sdW1uR2FwJyxcbiAgICAncm93R2FwJyxcbiAgICAnZ3JpZENvbHVtbicsXG4gICAgJ2dyaWRSb3cnLFxuICAgICdncmlkQXV0b0Zsb3cnLFxuICAgICdncmlkQXV0b0NvbHVtbnMnLFxuICAgICdncmlkQXV0b1Jvd3MnLFxuICAgICdncmlkVGVtcGxhdGVDb2x1bW5zJyxcbiAgICAnZ3JpZFRlbXBsYXRlUm93cycsXG4gICAgJ2dyaWRUZW1wbGF0ZUFyZWFzJyxcbiAgICAnZ3JpZEFyZWEnLFxuICAgICd3JyxcbiAgICAnbWF4dycsXG4gICAgJ21pbncnLFxuICAgICdoJyxcbiAgICAnbWF4aCcsXG4gICAgJ21pbmgnLFxuICAgICdiZycsXG4gICAgJ2MnLFxuICAgICdib3JkZXJDb2xvcicsXG4gICAgJ2JvcmRlcldpZHRoJyxcbiAgICAnYm9yZGVyU3R5bGUnLFxuICAgICdib3JkZXInLFxuICAgICdib3JkZXJUb3AnLFxuICAgICdib3JkZXJSaWdodCcsXG4gICAgJ2JvcmRlckJvdHRvbScsXG4gICAgJ2JvcmRlckxlZnQnLFxuICAgICdib3JkZXJSYWRpdXMnLFxuICAgICdib3JkZXJUb3BSaWdodFJhZGl1cycsXG4gICAgJ2JvcmRlclRvcExlZnRSYWRpdXMnLFxuICAgICdib3JkZXJCb3R0b21SaWdodFJhZGl1cycsXG4gICAgJ2JvcmRlckJvdHRvbUxlZnRSYWRpdXMnLFxuICAgICdib3JkZXJUb3BSYWRpdXMnLFxuICAgICdib3JkZXJSaWdodFJhZGl1cycsXG4gICAgJ2JvcmRlckJvdHRvbVJhZGl1cycsXG4gICAgJ2JvcmRlckxlZnRSYWRpdXMnLFxuICAgICdsaW5lSGVpZ2h0JyxcbiAgICAnZm9udFdlaWdodCcsXG4gICAgJ2Z3JyxcbiAgICAnZm9udFNpemUnLFxuICAgICdmcycsXG4gICAgJ2ZvbnRGYW1pbHknLFxuICAgICdvcGFjaXR5JyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnbGF5b3V0QmxlZWQnLFxuICAgICdzdWJncmlkJyxcbiAgXSk7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wczogTWFwPHN0cmluZywgYW55Pikge1xuICAgIHN1cGVyLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBDaGVjayBpZiBhbnkgY29udGVudCBwcm9wIGhhcyBjaGFuZ2VkIHRvIGRldGVybWluZSBpZiB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaW5zdGFuY2Ugc3R5bGVzXG4gICAgbGV0IHNob3VsZFVwZGF0ZVN0eWxlcyA9IGZhbHNlO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGNoYW5nZWRQcm9wcy5rZXlzKCkpIHtcbiAgICAgIGlmIChNdGVDb250ZW50QmFzZS5jb250ZW50UHJvcHMuaGFzKGtleSkpIHtcbiAgICAgICAgc2hvdWxkVXBkYXRlU3R5bGVzID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFVwZGF0ZVN0eWxlcykge1xuICAgICAgLy8gRG91YmxlIHRoZSBgOmhvc3RgIHNlbGVjdG9yIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5IGJleW9uZCBtb3N0IGNvbXBvbmVudCBsZXZlbCBzdHlsZXMgYnkgZGVmYXVsdFxuICAgICAgdGhpcy5zZXRJbnN0YW5jZVN0eWxlKCdjb250ZW50LWJhc2UnLCBzZWxlY3RvckZhY3RvcnkodGhpcy5jb250ZW50U3R5bGVTZWxlY3RvclJvb3QpLCB7XG4gICAgICAgIC8vIFNwYWNpbmdcbiAgICAgICAgbTogdGhpcy5tLFxuICAgICAgICBteDogdGhpcy5teCxcbiAgICAgICAgbXk6IHRoaXMubXksXG4gICAgICAgIG10OiB0aGlzLm10LFxuICAgICAgICBtcjogdGhpcy5tcixcbiAgICAgICAgbWI6IHRoaXMubWIsXG4gICAgICAgIG1sOiB0aGlzLm1sLFxuICAgICAgICBwOiB0aGlzLnAsXG4gICAgICAgIHB4OiB0aGlzLnB4LFxuICAgICAgICBweTogdGhpcy5weSxcbiAgICAgICAgcHQ6IHRoaXMucHQsXG4gICAgICAgIHByOiB0aGlzLnByLFxuICAgICAgICBwYjogdGhpcy5wYixcbiAgICAgICAgcGw6IHRoaXMucGwsXG4gICAgICAgIC8vIFBvc2l0aW9uaW5nXG4gICAgICAgIGQ6IHRoaXMuc3ViZ3JpZCA/ICdncmlkJyA6IHRoaXMuZCxcbiAgICAgICAgYWxpZ25JdGVtczogdGhpcy5hID8/IHRoaXMuYWxpZ25JdGVtcyxcbiAgICAgICAgYWxpZ25TZWxmOiB0aGlzLmFsaWduU2VsZixcbiAgICAgICAgYWxpZ25Db250ZW50OiB0aGlzLmFsaWduQ29udGVudCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IHRoaXMuaiA/PyB0aGlzLmp1c3RpZnlDb250ZW50LFxuICAgICAgICBqdXN0aWZ5SXRlbXM6IHRoaXMuanVzdGlmeUl0ZW1zLFxuICAgICAgICBqdXN0aWZ5U2VsZjogdGhpcy5qdXN0aWZ5U2VsZixcbiAgICAgICAgZmxleDogdGhpcy5mbGV4LFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiB0aGlzLmRpcmVjdGlvbiA/PyB0aGlzLmZsZXhEaXJlY3Rpb24sXG4gICAgICAgIGZsZXhCYXNpczogdGhpcy5iYXNpcyA/PyB0aGlzLmZsZXhCYXNpcyxcbiAgICAgICAgZmxleFNocmluazogdGhpcy5zaHJpbmsgPz8gdGhpcy5mbGV4U2hyaW5rLFxuICAgICAgICBmbGV4R3JvdzogdGhpcy5ncm93ID8/IHRoaXMuZmxleEdyb3csXG4gICAgICAgIGZsZXhXcmFwOiB0aGlzLndyYXAgPz8gdGhpcy5mbGV4V3JhcCxcbiAgICAgICAgb3JkZXI6IHRoaXMub3JkZXIsXG4gICAgICAgIGdhcDogdGhpcy5nYXAsXG4gICAgICAgIGNvbHVtbkdhcDogdGhpcy5jb2x1bW5HYXAsXG4gICAgICAgIHJvd0dhcDogdGhpcy5yb3dHYXAsXG4gICAgICAgIGdyaWRDb2x1bW46IHRoaXMubGF5b3V0QmxlZWQgPyB0aGlzLmxheW91dEJsZWVkIDogdGhpcy5ncmlkQ29sdW1uLFxuICAgICAgICBncmlkUm93OiB0aGlzLmdyaWRSb3csXG4gICAgICAgIGdyaWRBdXRvRmxvdzogdGhpcy5ncmlkQXV0b0Zsb3csXG4gICAgICAgIGdyaWRBdXRvQ29sdW1uczogdGhpcy5ncmlkQXV0b0NvbHVtbnMsXG4gICAgICAgIGdyaWRBdXRvUm93czogdGhpcy5ncmlkQXV0b1Jvd3MsXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHRoaXMuc3ViZ3JpZCA/ICdzdWJncmlkJyA6IHRoaXMuZ3JpZFRlbXBsYXRlQ29sdW1ucyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogdGhpcy5ncmlkVGVtcGxhdGVSb3dzLFxuICAgICAgICBncmlkVGVtcGxhdGVBcmVhczogdGhpcy5ncmlkVGVtcGxhdGVBcmVhcyxcbiAgICAgICAgZ3JpZEFyZWE6IHRoaXMuZ3JpZEFyZWEsXG4gICAgICAgIC8vIFNpemluZ1xuICAgICAgICB3OiB0aGlzLncsXG4gICAgICAgIG1heHc6IHRoaXMubWF4dyxcbiAgICAgICAgbWludzogdGhpcy5taW53LFxuICAgICAgICBoOiB0aGlzLmgsXG4gICAgICAgIG1heGg6IHRoaXMubWF4aCxcbiAgICAgICAgbWluaDogdGhpcy5taW5oLFxuICAgICAgICAvLyBDb2xvcnNcbiAgICAgICAgYmc6IHRoaXMuYmcsXG4gICAgICAgIGM6IHRoaXMuYyxcbiAgICAgICAgLy8gQm9yZGVyc1xuICAgICAgICBib3JkZXJDb2xvcjogdGhpcy5ib3JkZXJDb2xvcixcbiAgICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuYm9yZGVyV2lkdGgsXG4gICAgICAgIGJvcmRlclN0eWxlOiB0aGlzLmJvcmRlclN0eWxlLFxuICAgICAgICBib3JkZXI6IHRoaXMuYm9yZGVyXG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm9yZGVyVG9wOiB0aGlzLmJvcmRlclRvcFxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlclJpZ2h0OiB0aGlzLmJvcmRlclJpZ2h0XG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm9yZGVyTGVmdDogdGhpcy5ib3JkZXJMZWZ0XG4gICAgICAgICAgPyBkZWZhdWx0Qm9yZGVyRmFjdG9yeSh0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm9yZGVyQm90dG9tOiB0aGlzLmJvcmRlckJvdHRvbVxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIC8vIEJvcmRlciBSYWRpdXNcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLmJvcmRlclJhZGl1cyxcbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJUb3BSaWdodFJhZGl1cyA/PyB0aGlzLmJvcmRlclRvcFJhZGl1cyA/PyB0aGlzLmJvcmRlclJpZ2h0UmFkaXVzLFxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOlxuICAgICAgICAgIHRoaXMuYm9yZGVyVG9wTGVmdFJhZGl1cyA/PyB0aGlzLmJvcmRlclRvcFJhZGl1cyA/PyB0aGlzLmJvcmRlckxlZnRSYWRpdXMsXG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOlxuICAgICAgICAgIHRoaXMuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPz8gdGhpcy5ib3JkZXJCb3R0b21SYWRpdXMgPz8gdGhpcy5ib3JkZXJSaWdodFJhZGl1cyxcbiAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPz8gdGhpcy5ib3JkZXJCb3R0b21SYWRpdXMgPz8gdGhpcy5ib3JkZXJMZWZ0UmFkaXVzLFxuICAgICAgICAvLyBGb250c1xuICAgICAgICBsaW5lSGVpZ2h0OiB0aGlzLmxpbmVIZWlnaHQsXG4gICAgICAgIGZvbnRXZWlnaHQ6IHRoaXMuZncgPz8gdGhpcy5mb250V2VpZ2h0LFxuICAgICAgICBmb250U2l6ZTogdGhpcy5mcyA/PyB0aGlzLmZvbnRTaXplLFxuICAgICAgICBmb250RmFtaWx5OiB0aGlzLmZvbnRGYW1pbHksXG4gICAgICAgIC8vIE9wYWNpdHlcbiAgICAgICAgb3BhY2l0eTogdGhpcy5vcGFjaXR5LFxuICAgICAgICAvLyBFbGV2YXRpb25cbiAgICAgICAgZWxldmF0aW9uOiB0aGlzLmVsZXZhdGlvbixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IGRlZmF1bHRDb252ZXJ0ZXIgfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgY29uc3QgUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyID0ge1xuICBmcm9tQXR0cmlidXRlOiAodmFsdWUsIHR5cGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHZhbHVlPy5bMF0gPT09ICd7Jykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdENvbnZlcnRlci5mcm9tQXR0cmlidXRlKHZhbHVlLCBPYmplY3QpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdENvbnZlcnRlci5mcm9tQXR0cmlidXRlKHZhbHVlLCB0eXBlKTtcbiAgfSxcbiAgdG9BdHRyaWJ1dGU6ICh2YWx1ZSwgdHlwZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdENvbnZlcnRlci50b0F0dHJpYnV0ZSh2YWx1ZSwgT2JqZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIudG9BdHRyaWJ1dGUodmFsdWUsIHR5cGUpO1xuICB9LFxufTtcbiIsICJpbXBvcnQgeyBEaXJlY3RpdmVSZXN1bHQgfSBmcm9tICdsaXQvZGlyZWN0aXZlLmpzJztcbmltcG9ydCB7IHVuc2FmZVNWRywgVW5zYWZlU1ZHRGlyZWN0aXZlIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvdW5zYWZlLXN2Zy5qcyc7XG5cbmV4cG9ydCBjb25zdCBoZWJMb2dvU3ZnQ29udGVudHM6IERpcmVjdGl2ZVJlc3VsdDx0eXBlb2YgVW5zYWZlU1ZHRGlyZWN0aXZlPiA9IHVuc2FmZVNWRyhcbiAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgaWQ9XCJMYXllcl8xXCIgeD1cIjBcIiB5PVwiMFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDUzNi4yNyAxODYuMjRcIj48c3R5bGU+LnN0MHtmaWxsOiNlMTI1MWJ9LnN0MXtmaWxsOiNmZmZ9PC9zdHlsZT48ZyBpZD1cIl94MzFfLUhFQl9NQUlOX0xPR09fMDAwMDAwOTYwNDM0MDQyMDY4NjE4ODA4NzAwMDAwMDQ4MTMyNDA5Mzg5NDY4NTUzNTVfXCI+PHBhdGggZD1cIk05My4xMiAxODYuMjRDNDEuNjkgMTg2LjI0IDAgMTQ0LjU1IDAgOTMuMTJTNDEuNjkgMCA5My4xMiAwaDM1MC4wM2M1MS40MyAwIDkzLjEyIDQxLjY5IDkzLjEyIDkzLjEycy00MS42OSA5My4xMi05My4xMiA5My4xMkg5My4xMnpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTkzLjEyIDE3NC4xOWMtNDQuNzYgMC04MS4wNS0zNi4yOS04MS4wNS04MS4wNXMzNi4yOS04MS4wNSA4MS4wNS04MS4wNWgzNTAuMDNjNDQuNzYgMCA4MS4wNSAzNi4yOSA4MS4wNSA4MS4wNXMtMzYuMjkgODEuMDUtODEuMDUgODEuMDVIOTMuMTJ6XCIgY2xhc3M9XCJzdDFcIi8+PHBhdGggZD1cIm00NDQuOTQgMjQuMTEtMzUzLjY0LjAyYy0zNy4wNyAwLTY3LjIgMzAuOTUtNjcuMTYgNjkuMDcgMCAzNy45MyAzMC4xNiA2OC44OCA2Ny4xNiA2OC44OGwzNTMuNjMtLjA3YzM3LjEtLjAzIDY3LjE1LTMwLjg5IDY3LjItNjguODUtLjA0LTM4LjItMzAuMDktNjkuMDUtNjcuMTktNjkuMDV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk0yMjQuMjEgMTMyLjIzaDg4LjFsLjc2LTEyLjk4aC01Ni4xOHYtMTQuODRoNDQuODFWODkuMzNoLTQ0LjgxVjczLjI1bDU4LjkyLS4wMSAxLjE1LTE5LjI5aC05Ny40ek0xMzIuNDYgNTMuOTV2MzUuMzhIMTA4LjZWNTMuOTVINzEuMjdsNC42NSA3OC4yOGgzMi42OHYtMjcuODJoMjMuODZ2MjcuODJoMzIuNjhsNC42NS03OC4yOHpNNDQ4LjUyIDk3LjAyYzkuOS0yLjgzIDE2LjQ5LTguNTkgMTYuNDktMjAuNjcuMDMtMTMuODItMTEuMDYtMjIuNC0yNS4yOS0yMi40aC03My4yOGw0LjY1IDc4LjI5aDY0LjA2YzI3Ljk4IDAgMjYuMzktMTguOCAyNi4zOS0xOC44IDAtNy45Ni01LjMzLTE0LjYxLTEzLjAyLTE2LjQyem0tMzEuMDIgMjIuMjJoLTEzLjcxdi0xNC44M2gxMy4yMmM3LjIzIDAgMTEuMDkgMi4zMSAxMS4wOSA3LjQ4LjAxIDQuOTQtMy40OSA3LjM1LTEwLjYgNy4zNXptMS4wNi0yOS45MWgtMTQuNzdWNzMuMjVoMTQuMjVjNy44NSAwIDEyLjAzIDIuNSAxMi4wMyA4LjExIDAgNS4zNS0zLjc5IDcuOTctMTEuNTEgNy45N3pNMTgyLjc2IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4ek0zMjkuNjQgODkuMzNsLjkgMTUuMDhoMjIuMDNsLjktMTUuMDh6XCIgY2xhc3M9XCJzdDFcIi8+PHBhdGggZD1cIk01MzAuMzQgMTcyLjc3YzAtMi40Ni0xLjQ2LTMuNTQtNC40LTMuNTRoLTQuNzR2MTIuNDRoMS44OHYtNS4zOWgyLjE3bDMuMjggNS4zOWgyLjExbC0zLjU0LTUuNDhjMS44NC0uMjIgMy4yNC0xLjE5IDMuMjQtMy40MnptLTcuMjUgMS45MnYtMy44NmgyLjU3YzEuMzEgMCAyLjcxLjI5IDIuNzEgMS44MyAwIDEuOTItMS40MyAyLjAzLTMuMDMgMi4wM2gtMi4yNXpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTUyNS4zNyAxNjQuNjdjLTUuOTMgMC0xMC45NiA0LjU3LTEwLjk2IDEwLjc2IDAgNi4yNCA1LjAyIDEwLjgxIDEwLjk2IDEwLjgxIDUuODggMCAxMC45LTQuNTcgMTAuOS0xMC44MSAwLTYuMi01LjAyLTEwLjc2LTEwLjktMTAuNzZ6bTAgMTkuNzhjLTQuOTMgMC04Ljc5LTMuODMtOC43OS05LjAyIDAtNS4xMSAzLjg1LTguOTYgOC43OS04Ljk2IDQuODggMCA4LjczIDMuODUgOC43MyA4Ljk2IDAgNS4xOS0zLjg1IDkuMDItOC43MyA5LjAyelwiIGNsYXNzPVwic3QwXCIvPjwvZz48L3N2Zz5gXG4pO1xuXG5leHBvcnQgY29uc3QgaGViTG9nb1doaXRlQ29weXJpZ2h0U3ZnQ29udGVudHM6IERpcmVjdGl2ZVJlc3VsdDx0eXBlb2YgVW5zYWZlU1ZHRGlyZWN0aXZlPiA9XG4gIHVuc2FmZVNWRyhcbiAgICBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiBpZD1cIkxheWVyXzFcIiB4PVwiMFwiIHk9XCIwXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgNTM2LjI3IDE4Ni4yNFwiPjxzdHlsZT4uc3Qwe2ZpbGw6I2UxMjUxYn0uc3Qxe2ZpbGw6I2ZmZn08L3N0eWxlPjxnIGlkPVwiX3gzMV8tSEVCX01BSU5fTE9HT18wMDAwMDA5NjA0MzQwNDIwNjg2MTg4MDg3MDAwMDAwNDgxMzI0MDkzODk0Njg1NTM1NV9cIj48cGF0aCBkPVwiTTkzLjEyIDE4Ni4yNEM0MS42OSAxODYuMjQgMCAxNDQuNTUgMCA5My4xMlM0MS42OSAwIDkzLjEyIDBoMzUwLjAzYzUxLjQzIDAgOTMuMTIgNDEuNjkgOTMuMTIgOTMuMTJzLTQxLjY5IDkzLjEyLTkzLjEyIDkzLjEySDkzLjEyelwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNOTMuMTIgMTc0LjE5Yy00NC43NiAwLTgxLjA1LTM2LjI5LTgxLjA1LTgxLjA1czM2LjI5LTgxLjA1IDgxLjA1LTgxLjA1aDM1MC4wM2M0NC43NiAwIDgxLjA1IDM2LjI5IDgxLjA1IDgxLjA1cy0zNi4yOSA4MS4wNS04MS4wNSA4MS4wNUg5My4xMnpcIiBjbGFzcz1cInN0MVwiLz48cGF0aCBkPVwibTQ0NC45NCAyNC4xMS0zNTMuNjQuMDJjLTM3LjA3IDAtNjcuMiAzMC45NS02Ny4xNiA2OS4wNyAwIDM3LjkzIDMwLjE2IDY4Ljg4IDY3LjE2IDY4Ljg4bDM1My42My0uMDdjMzcuMS0uMDMgNjcuMTUtMzAuODkgNjcuMi02OC44NS0uMDQtMzguMi0zMC4wOS02OS4wNS02Ny4xOS02OS4wNXpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTIyNC4yMSAxMzIuMjNoODguMWwuNzYtMTIuOThoLTU2LjE4di0xNC44NGg0NC44MVY4OS4zM2gtNDQuODFWNzMuMjVsNTguOTItLjAxIDEuMTUtMTkuMjloLTk3LjR6TTEzMi40NiA1My45NXYzNS4zOEgxMDguNlY1My45NUg3MS4yN2w0LjY1IDc4LjI4aDMyLjY4di0yNy44MmgyMy44NnYyNy44MmgzMi42OGw0LjY1LTc4LjI4ek00NDguNTIgOTcuMDJjOS45LTIuODMgMTYuNDktOC41OSAxNi40OS0yMC42Ny4wMy0xMy44Mi0xMS4wNi0yMi40LTI1LjI5LTIyLjRoLTczLjI4bDQuNjUgNzguMjloNjQuMDZjMjcuOTggMCAyNi4zOS0xOC44IDI2LjM5LTE4LjggMC03Ljk2LTUuMzMtMTQuNjEtMTMuMDItMTYuNDJ6bS0zMS4wMiAyMi4yMmgtMTMuNzF2LTE0LjgzaDEzLjIyYzcuMjMgMCAxMS4wOSAyLjMxIDExLjA5IDcuNDguMDEgNC45NC0zLjQ5IDcuMzUtMTAuNiA3LjM1em0xLjA2LTI5LjkxaC0xNC43N1Y3My4yNWgxNC4yNWM3Ljg1IDAgMTIuMDMgMi41IDEyLjAzIDguMTEgMCA1LjM1LTMuNzkgNy45Ny0xMS41MSA3Ljk3ek0xODIuNzYgODkuMzNsLjkgMTUuMDhoMjIuMDNsLjktMTUuMDh6TTMyOS42NCA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpNNTI4LjM0IDE3MC43N2MwLTIuNDYtMS40Ni0zLjU0LTQuNC0zLjU0aC00Ljc0djEyLjQ0aDEuODh2LTUuMzloMi4xN2wzLjI4IDUuMzloMi4xMWwtMy41NC01LjQ4YzEuODQtLjIyIDMuMjQtMS4xOSAzLjI0LTMuNDJ6bS03LjI1IDEuOTJ2LTMuODZoMi41N2MxLjMxIDAgMi43MS4yOSAyLjcxIDEuODMgMCAxLjkyLTEuNDMgMi4wMy0zLjAzIDIuMDNoLTIuMjV6XCIgY2xhc3M9XCJzdDFcIi8+PHBhdGggZD1cIk01MjMuMzcgMTYyLjY3Yy01LjkzIDAtMTAuOTYgNC41Ny0xMC45NiAxMC43NiAwIDYuMjQgNS4wMiAxMC44MSAxMC45NiAxMC44MSA1Ljg4IDAgMTAuOS00LjU3IDEwLjktMTAuODEgMC02LjItNS4wMi0xMC43Ni0xMC45LTEwLjc2em0wIDE5Ljc4Yy00LjkzIDAtOC43OS0zLjgzLTguNzktOS4wMiAwLTUuMTEgMy44NS04Ljk2IDguNzktOC45NiA0Ljg4IDAgOC43MyAzLjg1IDguNzMgOC45NiAwIDUuMTktMy44NSA5LjAyLTguNzMgOS4wMnpcIiBjbGFzcz1cInN0MVwiLz48L2c+PC9zdmc+YFxuICApO1xuXG5leHBvcnQgY29uc3QgaGViTG9nb0ludmVyc2VTdmdDb250ZW50czogRGlyZWN0aXZlUmVzdWx0PHR5cGVvZiBVbnNhZmVTVkdEaXJlY3RpdmU+ID0gdW5zYWZlU1ZHKFxuICBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiBpZD1cIkxheWVyXzFcIiB4PVwiMFwiIHk9XCIwXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgNTM2LjI3IDE4Ni4yNFwiPjxzdHlsZT4uc3Qwe2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGQ9XCJNNDQzLjE1IDBIOTMuMTJDNDEuNjkgMCAwIDQxLjY5IDAgOTMuMTJjMCA1MS40MyA0MS42OSA5My4xMiA5My4xMiA5My4xMmgzNTAuMDNjNTEuNDMgMCA5My4xMi00MS42OSA5My4xMi05My4xMkM1MzYuMjcgNDEuNjkgNDk0LjU4IDAgNDQzLjE1IDB6bTAgMTc0LjE5SDkzLjEyYy00NC43NiAwLTgxLjA1LTM2LjI5LTgxLjA1LTgxLjA1czM2LjI5LTgxLjA1IDgxLjA1LTgxLjA1aDM1MC4wM2M0NC43NiAwIDgxLjA1IDM2LjI5IDgxLjA1IDgxLjA1LjAxIDQ0Ljc2LTM2LjI4IDgxLjA1LTgxLjA1IDgxLjA1em0tMTMuMDgtOTIuODNjMCA1LjM2LTMuNzkgNy45OC0xMS41MSA3Ljk4aC0xNC43N1Y3My4yNWgxNC4yNWM3Ljg0IDAgMTIuMDMgMi41IDEyLjAzIDguMTF6bS0xLjk2IDMwLjUzYzAgNC45NC0zLjUgNy4zNi0xMC42MSA3LjM2aC0xMy43MXYtMTQuODNoMTMuMjJjNy4yNC0uMDEgMTEuMSAyLjMgMTEuMSA3LjQ3em0xNi44My04Ny43OC0zNTMuNjQuMDJjLTM3LjA3IDAtNjcuMiAzMC45NS02Ny4xNiA2OS4wNyAwIDM3LjkyIDMwLjE2IDY4Ljg4IDY3LjE2IDY4Ljg4bDM1My42My0uMDdjMzcuMS0uMDMgNjcuMTUtMzAuODkgNjcuMi02OC44NS0uMDQtMzguMi0zMC4wOS02OS4wNS02Ny4xOS02OS4wNXptLTI3OS44IDEwOC4xMmgtMzIuNjh2LTI3LjgySDEwOC42djI3LjgySDc1LjkybC00LjY1LTc4LjI4aDM3LjMzdjM1LjM4aDIzLjg2VjUzLjk1aDM3LjMzbC00LjY1IDc4LjI4em00MC41NS0yNy44MmgtMjIuMDRsLS45LTE1LjA4aDIzLjgzbC0uODkgMTUuMDh6bTExMC4xMi0zMS4xNy01OC45Mi4wMXYxNi4wOGg0NC44MXYxNS4wOGgtNDQuODF2MTQuODNoNTYuMThsLS43NiAxMi45OWgtODguMWwtNC42NS03OC4yOGg5Ny40bC0xLjE1IDE5LjI5em0zNi43NiAzMS4xN2gtMjIuMDRsLS45LTE1LjA4aDIzLjgzbC0uODkgMTUuMDh6bTEwOC45NyA5LjAzczEuNTkgMTguOC0yNi4zOSAxOC44aC02NC4wNmwtNC42NS03OC4yOWg3My4yOGMxNC4yMyAwIDI1LjMxIDguNTggMjUuMjkgMjIuNCAwIDEyLjA4LTYuNTkgMTcuODUtMTYuNDkgMjAuNjcgNy42OSAxLjgxIDEzLjAyIDguNDYgMTMuMDIgMTYuNDJ6TTUzMC4zNCAxNzIuNzdjMC0yLjQ2LTEuNDYtMy41NC00LjQtMy41NGgtNC43NHYxMi40NGgxLjg4di01LjM5aDIuMTdsMy4yOCA1LjM5aDIuMTFsLTMuNTQtNS40OGMxLjg0LS4yMiAzLjI0LTEuMTkgMy4yNC0zLjQyem0tNy4yNSAxLjkydi0zLjg2aDIuNTdjMS4zMSAwIDIuNzEuMjkgMi43MSAxLjgzIDAgMS45Mi0xLjQzIDIuMDMtMy4wMyAyLjAzaC0yLjI1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNNTI1LjM3IDE2NC42N2MtNS45MyAwLTEwLjk2IDQuNTctMTAuOTYgMTAuNzYgMCA2LjI0IDUuMDIgMTAuODEgMTAuOTYgMTAuODEgNS44OCAwIDEwLjktNC41NyAxMC45LTEwLjgxIDAtNi4yLTUuMDItMTAuNzYtMTAuOS0xMC43NnptMCAxOS43OGMtNC45MyAwLTguNzktMy44My04Ljc5LTkuMDIgMC01LjExIDMuODUtOC45NiA4Ljc5LTguOTYgNC44OCAwIDguNzMgMy44NSA4LjczIDguOTYgMCA1LjE5LTMuODUgOS4wMi04LjczIDkuMDJ6XCIgY2xhc3M9XCJzdDBcIi8+PC9zdmc+YFxuKTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuaW1wb3J0IHtcbiAgY29uZmlnIGFzIGdldHRlckNvbmZpZyxcbiAgc2V0Q29uZmlnIGFzIHNldHRlckNvbmZpZyxcbiAgTW9ydGFyVGhlbWVDb25maWcsXG59IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7IFN1YnNldCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzU3NyLCBzaWduYWwgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgdHlwZSBNdGVUaGVtZSA9ICdkZWZhdWx0JyB8ICdweExpZ2h0JyB8ICdjeExpZ2h0JyB8ICdyeExpZ2h0JztcblxuZXhwb3J0IHR5cGUgTXRlQ29sb3JTY2hlbWUgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgJ3N5c3RlbSc7XG5cbmNvbnN0IENBQ0hFX1RPX0tFWSA9ICdtdGUudGhlbWUuY2FjaGUtdG8nO1xuY29uc3QgQ09MT1JfU0NIRU1FX0tFWSA9ICdtdGUudGhlbWUuZ2xvYmFsLWNvbG9yLXNjaGVtZSc7XG5cbmNsYXNzIF9NdGVUaGVtZVNlcnZpY2Uge1xuICBjb25maWcgPSBnZXR0ZXJDb25maWc7XG5cbiAgcHJpdmF0ZSByb290T2JzZXJ2ZXI/OiBNdXRhdGlvbk9ic2VydmVyO1xuICBwcml2YXRlIHRoZW1lU2lnbmFsID0gc2lnbmFsPE10ZVRoZW1lIHwgbnVsbD4odGhpcy5nZXRHbG9iYWxUaGVtZSgpKTtcbiAgcHJpdmF0ZSBjb2xvclNjaGVtZVNpZ25hbCA9IHNpZ25hbDxNdGVDb2xvclNjaGVtZSB8IG51bGw+KHRoaXMuZ2V0R2xvYmFsQ29sb3JTY2hlbWUoKSA/PyAnbGlnaHQnKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRDYWNoZSgpO1xuICB9XG5cbiAgLyoqIENvbmZpZ3VyZXMgdGhlIGBNdGVUaGVtZVNlcnZpY2VgIHRvIGNhY2hlIGNvbG9yLXNjaGVtZSBjaGFuZ2VzIHRvIGBsb2NhbFN0b3JhZ2VgLCBgc2Vzc2lvblN0b3JhZ2VgLCBvciBuZWl0aGVyLiAqL1xuICBwdWJsaWMgY2FjaGVDb2xvclNjaGVtZVRvKG1ldGhvZDogJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnKSB7XG4gICAgaWYgKCFtZXRob2QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQ2xlYXIgYWxsIGtleXMgZnJvbSBhbGwgc3RvcmFnZSBsb2NhdGlvbnMgaWYgbm9uZVxuICAgIGlmIChtZXRob2QgPT09ICdub25lJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ0FDSEVfVE9fS0VZKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ09MT1JfU0NIRU1FX0tFWSk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgdHJ5IHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKENPTE9SX1NDSEVNRV9LRVkpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFNjaGVtZSA9IHRoaXMuY29sb3JTY2hlbWVTaWduYWwuZ2V0KCk7XG4gICAgLy8gU2V0IGNhY2hlIG1ldGhvZCBpbiBzdG9yYWdlIC0gVHJ5IGxvY2FsU3RvcmFnZSBmaXJzdFxuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQUNIRV9UT19LRVksIG1ldGhvZCk7XG4gICAgICBpZiAoY3VycmVudFNjaGVtZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDT0xPUl9TQ0hFTUVfS0VZLCBjdXJyZW50U2NoZW1lKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnTXRlVGhlbWVTZXJ2aWNlOiBDb3VsZCBub3Qgc2V0IGNvbG9yIHNjaGVtZSBjYWNoZSBtZXRob2QgdG8gYGxvY2FsU3RvcmFnZWAuIEF0dGVtcHRpbmcgZmFsbGJhY2sgdG8gYHNlc3Npb25TdG9yYWdlYC4gQ2FjaGluZyB3aWxsIG9ubHkgaGFwcGVuIHRvIHNlc3Npb25TdG9yYWdlLidcbiAgICAgICk7XG4gICAgICAvLyBUcnkgc2Vzc2lvblN0b3JhZ2UgbmV4dFxuICAgICAgdHJ5IHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShDQUNIRV9UT19LRVksICdzZXNzaW9uU3RvcmFnZScpO1xuICAgICAgICBpZiAoY3VycmVudFNjaGVtZSkge1xuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oQ09MT1JfU0NIRU1FX0tFWSwgY3VycmVudFNjaGVtZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnTXRlVGhlbWVTZXJ2aWNlOiBDb3VsZCBub3Qgc2V0IGNvbG9yIHNjaGVtZSBjYWNoZSBtZXRob2QgdG8gYGxvY2FsU3RvcmFnZWAgb3IgYHNlc3Npb25TdG9yYWdlYC4gQ2FjaGluZyBub3QgZW5hYmxlZC4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldHMgdGhlIGN1cnJlbnQgZ2xvYmFsIHRoZW1lIG9uIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBzZXRHbG9iYWxUaGVtZSh0aGVtZTogTXRlVGhlbWUpIHtcbiAgICBpZiAoIXRoZW1lIHx8IHR5cGVvZiB0aGVtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXRlVGhlbWVTZXJ2aWNlOiBHbG9iYWwgdGhlbWUgcGFyYW0gbXVzdCBiZSBhIHN0cmluZy4nKTtcbiAgICB9XG4gICAgdGhpcy5pbml0T2JzZXJ2ZXIoKTtcbiAgICBpZiAodGhlbWUgIT09ICdkZWZhdWx0Jykge1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uc2V0QXR0cmlidXRlKCdkYXRhLW10ZS10aGVtZScsIHRoZW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW10ZS10aGVtZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBjdXJyZW50IGdsb2JhbCBjb2xvci1zY2hlbWUgb24gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIHNldEdsb2JhbENvbG9yU2NoZW1lKGNvbG9yU2NoZW1lOiBNdGVDb2xvclNjaGVtZSkge1xuICAgIGlmICghY29sb3JTY2hlbWUgfHwgdHlwZW9mIGNvbG9yU2NoZW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdGVUaGVtZVNlcnZpY2U6IEdsb2JhbCBjb2xvclNjaGVtZSBwYXJhbSBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICAgIH1cbiAgICBjb25zdCBzY2hlbWUgPSBjb2xvclNjaGVtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzY2hlbWUgPT09ICdkYXJrJyB8fCBzY2hlbWUgPT09ICdsaWdodCcgfHwgc2NoZW1lID09PSAnc3lzdGVtJykge1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uc2V0QXR0cmlidXRlKCdkYXRhLW10ZS1jb2xvci1zY2hlbWUnLCBzY2hlbWUpO1xuICAgICAgdGhpcy5zZXRDYWNoZVZhbHVlKENPTE9SX1NDSEVNRV9LRVksIGNvbG9yU2NoZW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW10ZS1jb2xvci1zY2hlbWUnKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgY3VycmVudCBnbG9iYWwgdGhlbWUgZnJvbSB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgZ2V0R2xvYmFsVGhlbWUoKTogTXRlVGhlbWUgfCBudWxsIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1tdGUtdGhlbWUnKSBhcyBNdGVUaGVtZTtcbiAgICBpZiAoIVsnZGVmYXVsdCcsICdweExpZ2h0JywgJ2N4TGlnaHQnLCAncnhMaWdodCddLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZSBhcyBNdGVUaGVtZTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgY3VycmVudCBnbG9iYWwgY29sb3Itc2NoZW1lIGZyb20gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIGdldEdsb2JhbENvbG9yU2NoZW1lKCk6IE10ZUNvbG9yU2NoZW1lIHwgbnVsbCB7XG4gICAgY29uc3QgdmFsdWUgPSBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoXG4gICAgICAnZGF0YS1tdGUtY29sb3Itc2NoZW1lJ1xuICAgICkgYXMgTXRlQ29sb3JTY2hlbWU7XG4gICAgaWYgKCFbJ2xpZ2h0JywgJ2RhcmsnLCAnc3lzdGVtJ10uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlIGFzIE10ZUNvbG9yU2NoZW1lO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIGEgcmVhY3RpdmUgc2lnbmFsIHRoYXQgd2lsbCB1cGRhdGUgYW55IHRpbWUgdGhlIGdsb2JhbCB0aGVtZSBjaGFuZ2VzICovXG4gIHB1YmxpYyBzZWxlY3RHbG9iYWxUaGVtZSgpIHtcbiAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgIHJldHVybiB0aGlzLnRoZW1lU2lnbmFsO1xuICB9XG5cbiAgLyoqIFJldHVybnMgYSByZWFjdGl2ZSBzaWduYWwgdGhhdCB3aWxsIHVwZGF0ZSBhbnkgdGltZSB0aGUgZ2xvYmFsIGNvbG9yLXNjaGVtZSBjaGFuZ2VzICovXG4gIHB1YmxpYyBzZWxlY3RHbG9iYWxDb2xvclNjaGVtZSgpIHtcbiAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgIHJldHVybiB0aGlzLmNvbG9yU2NoZW1lU2lnbmFsO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIHZhbHVlIG9mIGFsbCBvZiB0aGUgZ2l2ZW4gdGhlbWUgdmFyaWFibGVzIG9uIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBzZXQoXG4gICAgY29uZmlnRm5Pck9iajpcbiAgICAgIHwgU3Vic2V0PE1vcnRhclRoZW1lQ29uZmlnPlxuICAgICAgfCAoKGNvbmZpZzogTW9ydGFyVGhlbWVDb25maWcpID0+IFN1YnNldDxNb3J0YXJUaGVtZUNvbmZpZz4pXG4gICkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnRm5Pck9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uZmlnRm5Pck9iaiA9IGNvbmZpZ0ZuT3JPYmoodGhpcy5jb25maWcpO1xuICAgIH1cbiAgICBjb25zdCBtYXBwaW5ncyA9IHRoaXMuZmxhdHRlblBhdGhzKGNvbmZpZ0ZuT3JPYmopO1xuICAgIG1hcHBpbmdzLmZvckVhY2goKFtwYXRoLCB2YWxdKSA9PiB7XG4gICAgICBjb25zdCBjc3NWYXIgPSBwYXRoLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiB7XG4gICAgICAgIHJldHVybiBhY2NbcHJvcF07XG4gICAgICB9LCBzZXR0ZXJDb25maWcpO1xuICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uc3R5bGUuc2V0UHJvcGVydHkoY3NzVmFyLCBgJHt2YWx9YCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgdGhlIHJlcXVlc3RlZCB0aGVtZSB2YXJpYWJsZSBmcm9tIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBnZXQ8VD4oazE6ICh0aGVtZUNvbmZpZzogTW9ydGFyVGhlbWVDb25maWcpID0+IFQpOiBUO1xuICBwdWJsaWMgZ2V0PEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWc+KGsxOiBLMSk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLCBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXT4oXG4gICAgazE6IEsxLFxuICAgIGsyOiBLMlxuICApOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMyk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11cbiAgPihrMTogSzEsIGsyOiBLMiwgazM6IEszLCBrNDogSzQpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl0sXG4gICAgSzQgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXSxcbiAgICBLNSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVxuICA+KGsxOiBLMSwgazI6IEsyLCBrMzogSzMsIGs0OiBLNCwgazU6IEs1KTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdW0s1XTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXSxcbiAgICBLNCBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdLFxuICAgIEs1IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdLFxuICAgIEs2IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdW0s1XVxuICA+KGsxOiBLMSwgazI6IEsyLCBrMzogSzMsIGs0OiBLNCwgazU6IEs1LCBrNjogSzYpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1bSzVdW0s2XTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXSxcbiAgICBLNCBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdLFxuICAgIEs1IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdLFxuICAgIEs2IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdW0s1XVxuICA+KFxuICAgIC4uLmtleXM6XG4gICAgICB8IFtLMV1cbiAgICAgIHwgW0sxLCBLMl1cbiAgICAgIHwgW0sxLCBLMiwgSzNdXG4gICAgICB8IFtLMSwgSzIsIEszLCBLNF1cbiAgICAgIHwgW0sxLCBLMiwgSzMsIEs0LCBLNV1cbiAgICAgIHwgW0sxLCBLMiwgSzMsIEs0LCBLNSwgSzZdXG4gICk6IGFueSB7XG4gICAgY29uc3QgW2ZuXSA9IGtleXMgPz8gW251bGxdO1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGNzc1ZhciA9IChmbiBhcyBhbnkpKHNldHRlckNvbmZpZyk7XG4gICAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShnbG9iYWxUaGlzPy5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoY3NzVmFyKTtcbiAgICB9XG4gICAgY29uc3QgY3NzVmFyID0ga2V5cy5yZWR1Y2UoKGFjYzogYW55LCBrZXkpID0+IGFjY1trZXldLCBzZXR0ZXJDb25maWcgYXMgYW55KSBhcyBzdHJpbmc7XG4gICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZ2xvYmFsVGhpcz8uZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Zhcik7XG4gIH1cblxuICAvKiogRmxhdHRlbnMgYSBnaXZlbiBvYmplY3QgdG8gYW4gYXJyYXkgb2YgcGF0aCBrZXlzIGFuZCBpdHMgcmVzdWx0aW5nIHZhbHVlICovXG4gIHByaXZhdGUgZmxhdHRlblBhdGhzKG9iajogUmVjb3JkPHN0cmluZywgYW55PiwgcGF0aDogc3RyaW5nW10gPSBbXSk6IFtzdHJpbmdbXSwgYW55XVtdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICBjb25zdCBuZXN0ZWQgPSBvYmpba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgbmVzdGVkID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwYXRoLnB1c2goa2V5KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihhY2MsIHRoaXMuZmxhdHRlblBhdGhzKG5lc3RlZCwgcGF0aCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aC5wdXNoKGtleSk7XG4gICAgICAgIGFjYy5wdXNoKFtwYXRoLCBuZXN0ZWRdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNdXRhdGlvbkV2ZW50ID0gKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcbiAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkge1xuICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZScpIHtcbiAgICAgICAgICB0aGlzLmNvbG9yU2NoZW1lU2lnbmFsLnNldCh0aGlzLmdldEdsb2JhbENvbG9yU2NoZW1lKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkYXRhLW10ZS10aGVtZScpIHtcbiAgICAgICAgICB0aGlzLnRoZW1lU2lnbmFsLnNldCh0aGlzLmdldEdsb2JhbFRoZW1lKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgaW5pdENhY2hlKCkge1xuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgdGhpcy5pbml0T2JzZXJ2ZXIoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNhY2hlQ29sb3JTY2hlbWUgPSB0aGlzLmdldENhY2hlVmFsdWUoQ09MT1JfU0NIRU1FX0tFWSk7XG4gICAgICAgIGlmIChjYWNoZUNvbG9yU2NoZW1lICYmIGNhY2hlQ29sb3JTY2hlbWUgIT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5zZXRHbG9iYWxDb2xvclNjaGVtZShjYWNoZUNvbG9yU2NoZW1lIGFzIE10ZUNvbG9yU2NoZW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXRPYnNlcnZlcigpIHtcbiAgICBpZiAoIWlzU3NyKCkgJiYgIXRoaXMucm9vdE9ic2VydmVyKSB7XG4gICAgICB0aGlzLnJvb3RPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuaGFuZGxlTXV0YXRpb25FdmVudCk7XG4gICAgICB0aGlzLnJvb3RPYnNlcnZlci5vYnNlcnZlKGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbJ2RhdGEtbXRlLXRoZW1lJywgJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZSddLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYWNoZU1ldGhvZCgpOiAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZScgfCBudWxsIHtcbiAgICAvLyBSZXRyaWV2ZSBjYWNoZSBtZXRob2RcbiAgICBsZXQgY2FjaGVNZXRob2Q6ICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJyB8IG51bGwgPSBudWxsO1xuICAgIC8vIFRyeSBsb2NhbFN0b3JhZ2VcbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ0FDSEVfVE9fS0VZKTtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgY2FjaGVNZXRob2QgPSB2YWwgYXMgJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRyeSBzZXNzaW9uU3RvcmFnZVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdmFsID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShDQUNIRV9UT19LRVkpO1xuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgY2FjaGVNZXRob2QgPSB2YWwgYXMgJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICByZXR1cm4gY2FjaGVNZXRob2Q7XG4gIH1cblxuICBwcml2YXRlIHNldENhY2hlVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjYWNoZU1ldGhvZCA9IHRoaXMuZ2V0Q2FjaGVNZXRob2QoKTtcbiAgICB0cnkge1xuICAgICAgaWYgKGNhY2hlTWV0aG9kID09PSAnbG9jYWxTdG9yYWdlJykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoY2FjaGVNZXRob2QgPT09ICdzZXNzaW9uU3RvcmFnZScpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYWNoZVZhbHVlKGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2FjaGVNZXRob2QgPSB0aGlzLmdldENhY2hlTWV0aG9kKCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChjYWNoZU1ldGhvZCA9PT0gJ2xvY2FsU3RvcmFnZScpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICB9IGVsc2UgaWYgKGNhY2hlTWV0aG9kID09PSAnc2Vzc2lvblN0b3JhZ2UnKSB7XG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlVGhlbWVTZXJ2aWNlID0gbmV3IF9NdGVUaGVtZVNlcnZpY2UoKTtcbiIsICJpbXBvcnQgeyBpc1NzciwgaXNQbGF0Zm9ybSB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCB0eXBlIFBvcnRhbFN0YWNrID0gJ292ZXJsYXknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRhbGVkRWxlbWVudE1ldGFkYXRhIHtcbiAgZWxlbWVudDogRWxlbWVudDtcbiAgc3RhY2s6IFBvcnRhbFN0YWNrO1xuICBjaGlsZFBvcnRhbGVkRWxlbWVudHM6IFNldDxFbGVtZW50PjtcbiAgcGFyZW50UG9ydGFsZWRFbGVtZW50PzogRWxlbWVudDtcbiAgYmFja2Ryb3A/OiBFbGVtZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRQb3J0YWxDb250cm9sbGVyIHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFyZW50UG9ydGFsZWRFbGVtZW50OiBFbGVtZW50O1xuICBvcHRpb25zOiB7IHN0YWNrOiBQb3J0YWxTdGFjayB9O1xufVxuXG5leHBvcnQgdHlwZSBQb3J0YWxBZGFwdGVyPFQgPSBhbnk+ID0gKFxuICBwb3J0YWxFbGVtZW50OiBULFxuICBvdXRsZXRFbGVtZW50OiBFbGVtZW50XG4pID0+IFByb21pc2U8YW55PiB8IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0YWxPcHRpb25zIHtcbiAgLyoqIFJlbmRlcnMgdGhlIGJhY2tkcm9wIGRpbW1lZCAqL1xuICB3aXRoRGltQmFja2Ryb3A/OiBib29sZWFuO1xuXG4gIC8qKiBNYWtlcyB0aGUgYmFja2Ryb3AgaWdub3JlIHBvaW50ZXIgZXZlbnRzLiBVc2VmdWwgZm9yIHRyaWdnZXJPbiBcImhvdmVyXCIuICovXG4gIHdpdGhJbmVydEJhY2tkcm9wPzogYm9vbGVhbjtcblxuICAvKiogRGlzYWJsZXMgdGhlIGFiaWxpdHkgdG8gc2Nyb2xsIHRoZSBwYWdlIGJlaGluZCB0aGUgb3ZlcmxheSB3aGVuIHRydWUgKi9cbiAgd2l0aFNjcm9sbExvY2s/OiBib29sZWFuO1xuXG4gIC8qKiBDYWxsYmFjayBmb3IgaGFuZGxpbmcgY2xvc2VPbkNsaWNrT3V0c2lkZSBldmVudHMgd2hlbiB0aGUgcG9ydGFsJ3MgYmFja2Ryb3AgaXMgY2xpY2tlZCAqL1xuICBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcj86ICgpID0+IGFueTtcblxuICAvKiogVGhlIGFuaW1hdGlvbiBkdXJhdGlvbiBmb3IgZmFkaW5nIGEgc2hhZG93IGJhY2tkcm9wIGluL291dCAqL1xuICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbj86IHN0cmluZztcblxuICAvKiogQWRhcHRlciBmb3IgXCJwb3J0YWxpbmdcIiBhbiBlbGVtZW50IGZyb20gb25lIGxvY2F0aW9uIGluIHRoZSBET00gdG8gYW5vdGhlci4gTGV2ZXJhZ2VkIGJ5IGZyYW1ld29yayB3cmFwcGVycyBmb3IgaW1wcm92ZWQgaW50ZXJvcC4gKi9cbiAgcG9ydGFsQWRhcHRlcj86IFBvcnRhbEFkYXB0ZXI7XG59XG5cbi8qKiBEZWZhdWx0IG5hdGl2ZSBET00gYWRhcHRlciBmb3IgcG9ydGFsaW5nIGFuIGVsZW1lbnQgdG8gYW5vdGhlciB0YXJnZXQgZWxlbWVudCAqL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRQb3J0YWxBZGFwdGVyOiBQb3J0YWxBZGFwdGVyID0gKHBvcnRhbEVsZW0sIG91dGxldEVsZW0pID0+IHtcbiAgb3V0bGV0RWxlbT8uYXBwZW5kQ2hpbGQocG9ydGFsRWxlbSk7XG59O1xuXG5jbGFzcyBfTXRlUG9ydGFsU2VydmljZSB7XG4gIC8qKiBTaGFyZWQgZ2xvYmFsIGNvbnN0IGZvciBzdGFjayBlbGVtZW50IHJlZnMgKi9cbiAgcHJpdmF0ZSBzdGFja0VsZW1lbnRzOiB7IG92ZXJsYXk6IEVsZW1lbnQgfSA9IHtcbiAgICBvdmVybGF5OiB1bmRlZmluZWQsXG4gIH07XG5cbiAgLyoqIFNoYXJlZCBnbG9iYWwgY29uc3QgZm9yIHBvcnRhbGVkIGVsZW1lbnRzIG1ldGFkYXRhICovXG4gIHByaXZhdGUgcG9ydGFsZWRFbGVtZW50cyA9IG5ldyBNYXA8bnVtYmVyLCBNYXA8RWxlbWVudCwgUG9ydGFsZWRFbGVtZW50TWV0YWRhdGE+PigpO1xuXG4gIHByaXZhdGUgYWN0aXZlU2Nyb2xsTG9ja3MgPSBuZXcgU2V0PEVsZW1lbnQ+KCk7XG5cbiAgcHJpdmF0ZSBzdGFja011dGF0aW9uT2JzZXJ2ZXI/OiBNdXRhdGlvbk9ic2VydmVyO1xuXG4gIC8qKlxuICAgKiBXaGVuIGNhbGxlZCwgdGhpcyBzZXJ2aWNlIHdpbGwgYXR0ZW1wdCB0byBsb2NhdGUgdGhlIGBAYW5ndWxhci9jZGtgIG92ZXJsYXkgc3RhY2suXG4gICAqIElmIGZvdW5kIHRoaXMgc2VydmljZSB3aWxsIGJlIGNvbmZpZ3VyZWQgdG8gdXNlIHRoYXQgZWxlbWVudCBhcyB0aGUgYG92ZXJsYXlgIHN0YWNrIGluc3RlYWQgb2YgaW5pdGlhbGl6aW5nIGl0cyBvd24uXG4gICAqL1xuICBwdWJsaWMgY29uZmlndXJlQ2RrSW50ZXJvcCgpIHtcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIGNvbnN0IGNka1N0YWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNkay1vdmVybGF5LWNvbnRhaW5lcicpO1xuICAgICAgaWYgKGNka1N0YWNrKSB7XG4gICAgICAgIHRoaXMuc3RhY2tFbGVtZW50cy5vdmVybGF5ID0gY2RrU3RhY2s7XG4gICAgICAgIHRoaXMuc3RhY2tFbGVtZW50cy5vdmVybGF5LmNsYXNzTGlzdC5hZGQodGhpcy5pZEZhY3RvcnkoJ292ZXJsYXknKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIHBvcnRhbCBjb250cm9sbGVyLiBBbGwgaXRlbXMgaXQgcmVxdWVzdGVkIHRvIGJlIHBvcnRhbGVkIHdpbGwgYmUgdHJhY2sgYWdhaW5zdCBpdC5cbiAgICogV2hlbiB0aGUgcG9ydGFsIGlzIHJlbW92ZWQgd2UgY2FuIHRoZW4gcmVtb3ZlIGFueSBlbGVtZW50cyBpdCBjdXJyZW50bHkgaGFzIHBvcnRhbGVkIGFuZFxuICAgKiBhbnkgb2YgdGhlaXIgcG9ydGFsZWQgY2hpbGRyZW4uXG4gICAqL1xuICBwdWJsaWMgYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlcikge1xuICAgIGlmICghdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmhhcyhwb3J0YWxDb250cm9sbGVyPy5pZCkpIHtcbiAgICAgIC8vIFRyYWNrIGluIHNldCBieSBJRCBzbyB3ZSBkb24ndCBrZWVwIGEgbGl2ZSByZWZlcmVuY2UgdG8gdGhlIGNvbnRyb2xsZXIgaXRzZWxmXG4gICAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuc2V0KHBvcnRhbENvbnRyb2xsZXIuaWQsIG5ldyBNYXA8RWxlbWVudCwgUG9ydGFsZWRFbGVtZW50TWV0YWRhdGE+KCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGFsbCBvZiBhIHBvcnRhbCBjb250cm9sbGVycyBwb3J0YWxlZCBlbGVtZW50cyBhbmQgdGhlaXIgcmVmZXJlbmNlcyAqL1xuICBwdWJsaWMgcmVtb3ZlQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlcikge1xuICAgIC8vIEF0dGVtcHQgdG8gcmVtb3ZlIGFsbCBpdGVtcyBhdHRhY2hlZCBieSB0aGlzIGNvbnRyb2xsZXIgZnJvbSB0aGUgY29uZmlndXJlZCBzdGFja1xuICAgIGNvbnN0IGF0dGFjaGVkRWxlbWVudHMgPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpO1xuICAgIGlmIChhdHRhY2hlZEVsZW1lbnRzKSB7XG4gICAgICBhdHRhY2hlZEVsZW1lbnRzLmZvckVhY2goKGl0ZW0pID0+IHRoaXMucmVtb3ZlRnJvbVN0YWNrKHBvcnRhbENvbnRyb2xsZXIsIGl0ZW0uZWxlbWVudCkpO1xuICAgIH1cbiAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZGVsZXRlKHBvcnRhbENvbnRyb2xsZXIuaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgYSByZWYgdG8gdGhlIGNvbmZpZ3VyZWQgc3RhY2sgZXhpc3RzLiBJZiBpdCBkb2VzIG5vdCwgdGhlIGNvbmZpZ3VyZWQgc3RhY2sgd2lsbFxuICAgKiBiZSBjcmVhdGVkIGFuZCBhcHBlbmRlZCB0byB0aGUgZG9jdW1lbnQuIERvZXMgbm90aGluZyBkdXJpbmcgU1NSLlxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVTdGFjayhzdGFjazogUG9ydGFsU3RhY2spIHtcbiAgICBpZiAoc3RhY2sgIT09ICdvdmVybGF5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE92ZXJsYXkgU3RhY2s6IFwiJHtzdGFja31cIiBtdXN0IGJlICdvdmVybGF5JyBhdCB0aGlzIHRpbWUuYCk7XG4gICAgfVxuICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgaWYgKCF0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdKSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkRmFjdG9yeShzdGFjaykpO1xuICAgICAgICB0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tdID1cbiAgICAgICAgICBlbGVtID8/XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmlkRmFjdG9yeShzdGFjayksXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXSAmJiAhdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXS5pc0Nvbm5lY3RlZCkge1xuICAgICAgICB0aGlzLmFwcGVuZFN0YWNrVG9Eb20odGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXSk7XG5cbiAgICAgICAgLy8gSW5pdCBtdXRhdGlvbiBvYnNlcnZlclxuICAgICAgICAvLyBUaGlzIHdpbGwgd2F0Y2ggZm9yIGFueXRpbWUgdGhlIHN0YWNrIGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NIGZvciBzb21lIHJlYXNvblxuICAgICAgICAvLyBJZiBpdCBpcywgaXQgd2lsbCByZS1hdHRhY2ggaXQgdG8gdGhlIERPTSBhZnRlciB0aGUgbmV4dCB0aWNrXG4gICAgICAgIGlmICghdGhpcy5zdGFja011dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICB0aGlzLnN0YWNrTXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtbCwgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbWwpIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCByZW1vdmVkTm9kZSBvZiBtdXRhdGlvbi5yZW1vdmVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZE5vZGUgPT09IHRoaXMuc3RhY2tFbGVtZW50cy5vdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUFsbEl0ZW1zRnJvbVN0YWNrcygpO1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kU3RhY2tUb0RvbSh0aGlzLnN0YWNrRWxlbWVudHMub3ZlcmxheSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXT8ucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuc3RhY2tNdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXS5wYXJlbnROb2RlLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1YnRyZWU6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhcHBlbmRTdGFja1RvRG9tKHN0YWNrRWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmIChzdGFja0VsZW1lbnQgJiYgIXN0YWNrRWxlbWVudC5pc0Nvbm5lY3RlZCkge1xuICAgICAgY29uc3QgdG9hc3RDb250YWluZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ210ZS10b2FzdC1jb250YWluZXInKTtcbiAgICAgIGlmICh0b2FzdENvbnRhaW5lcikge1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShzdGFja0VsZW1lbnQsIHRvYXN0Q29udGFpbmVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHN0YWNrRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIEFwcGVuZHMgYW4gaXRlbSB0byB0aGUgY29uZmlndXJlZCBwb3J0YWwgc3RhY2sgKi9cbiAgcHVibGljIGFwcGVuZFRvU3RhY2soXG4gICAgcG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsXG4gICAgZWxlbWVudDogRWxlbWVudCxcbiAgICB7XG4gICAgICB3aXRoRGltQmFja2Ryb3AgPSBmYWxzZSxcbiAgICAgIHdpdGhJbmVydEJhY2tkcm9wID0gZmFsc2UsXG4gICAgICB3aXRoU2Nyb2xsTG9jayA9IGZhbHNlLFxuICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcixcbiAgICAgIHBvcnRhbEFkYXB0ZXIgPSBkZWZhdWx0UG9ydGFsQWRhcHRlcixcbiAgICB9OiBQb3J0YWxPcHRpb25zID0ge31cbiAgKSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50UG9ydGFsZWRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRQb3J0YWxlZEVsZW1lbnQocG9ydGFsQ29udHJvbGxlciwgZWxlbWVudCk7XG4gICAgICBjb25zdCBzdGFja05hbWUgPSBwb3J0YWxDb250cm9sbGVyLm9wdGlvbnMuc3RhY2s7XG4gICAgICBjb25zdCBzdGFjayA9IHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja05hbWVdO1xuICAgICAgY29uc3QgYXR0YWNoZWRFbGVtZW50cyA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCk7XG5cbiAgICAgIGNvbnN0IGJhY2tkcm9wID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgICBjbGFzc05hbWU6ICdtdGUtcG9ydGFsX19iYWNrZHJvcCcsXG4gICAgICAgIC4uLihiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvblxuICAgICAgICAgID8geyBzdHlsZTogYHRyYW5zaXRpb24tZHVyYXRpb246ICR7YmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb259O2AgfVxuICAgICAgICAgIDoge30pLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIEhhbmRsZSBiYWNrZHJvcCBzdHlsaW5nXG4gICAgICBpZiAod2l0aEluZXJ0QmFja2Ryb3ApIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLWluZXJ0Jyk7XG4gICAgICB9XG4gICAgICBpZiAod2l0aERpbUJhY2tkcm9wKSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1zaGFkb3cnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS10cmFuc3BhcmVudCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBBcHBlbmQgYmFja2Ryb3BcbiAgICAgIHN0YWNrPy5hcHBlbmRDaGlsZChiYWNrZHJvcCk7XG5cbiAgICAgIGlmICghaXNTc3IoKSkge1xuICAgICAgICAvLyBBZGQgbGlzdGVuZXIgaWYgY2xpY2sgaGFuZGxlciBpcyBwcmVzZW50XG4gICAgICAgIGlmIChjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcikge1xuICAgICAgICAgIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyKTtcbiAgICAgICAgICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGJhY2tkcm9wIHNob3VsZCBiZSBkaW0sIGFuaW1hdGUgaXQgYWZ0ZXIgaXQgaGFzIGJlZW4gYXBwZW5kZWQgdG8gdGhlIGRvbVxuICAgICAgICBpZiAod2l0aERpbUJhY2tkcm9wKSB7XG4gICAgICAgICAgZ2xvYmFsVGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXNob3cnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBseSBzY3JvbGwgbG9ja1xuICAgICAgICBpZiAod2l0aFNjcm9sbExvY2spIHtcbiAgICAgICAgICB0aGlzLmFwcGx5U2Nyb2xsTG9jayhlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBXYWl0IGZvciBSZWFjdCAob3Igb3RoZXIgZnV0dXJlIGZyYW1ld29yayBhZGFwdGVyKSB0byBhcHBlbmQgZWxlbWVudCB0byBuZXdcbiAgICAgIC8vIGxvY2F0aW9uIGluIHRoZSBET00gYmVmb3JlIGFkZGluZyB0byBzdGFjay4gRG9pbmcgc28gdHJpZ2dlcnMgYGhvc3REaXNjb25uZWN0ZWRgXG4gICAgICAvLyB3aGljaCB3b3VsZCBpbnN0YW50bHkgcmVtb3ZlIHRoZSBlbGVtZW50IGlmIG5vdCBmb3IgdGhpcyBleHRyYSB0aW1lb3V0IHRvIHdhaXQgYSB0aWNrXG4gICAgICBQcm9taXNlLnJlc29sdmUocG9ydGFsQWRhcHRlcihlbGVtZW50LCBzdGFjaykpLnRoZW4oKCkgPT4ge1xuICAgICAgICBhdHRhY2hlZEVsZW1lbnRzLnNldChlbGVtZW50LCB7XG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICBzdGFjazogc3RhY2tOYW1lLFxuICAgICAgICAgIGJhY2tkcm9wLFxuICAgICAgICAgIGNoaWxkUG9ydGFsZWRFbGVtZW50czogbmV3IFNldDxFbGVtZW50PigpLFxuICAgICAgICAgIHBhcmVudFBvcnRhbGVkRWxlbWVudCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGFuIGVsZW1lbnQgZnJvbSB0aGUgc3RhY2sgKi9cbiAgcHVibGljIHJlbW92ZUZyb21TdGFjayhwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgZWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmICh0aGlzLnBvcnRhbGVkRWxlbWVudHMuaGFzKHBvcnRhbENvbnRyb2xsZXIuaWQpKSB7XG4gICAgICBjb25zdCBhdHRhY2hlZEVsZW1lbnRzID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKTtcbiAgICAgIGlmIChhdHRhY2hlZEVsZW1lbnRzKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRNZXRhZGF0YSA9IGF0dGFjaGVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBpZiAoZWxlbWVudE1ldGFkYXRhKSB7XG4gICAgICAgICAgYXR0YWNoZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgdGhpcy5maW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTYWZlbHkgcmVtb3ZlcyBhbGwgaXRlbXMgZnJvbSBhbGwgc3RhY2tzXG4gIHByaXZhdGUgcmVtb3ZlQWxsSXRlbXNGcm9tU3RhY2tzKCkge1xuICAgIGZvciAobGV0IFtpZCwgY29udHJvbGxlck1hcF0gb2YgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmVudHJpZXMoKSkge1xuICAgICAgZm9yIChsZXQgW2VsZW1lbnQsIGVsZW1lbnRNZXRhZGF0YV0gb2YgY29udHJvbGxlck1hcC5lbnRyaWVzKCkpIHtcbiAgICAgICAgaWYgKGVsZW1lbnRNZXRhZGF0YSkge1xuICAgICAgICAgIHRoaXMuZmluYWxpemVTdGFja1JlbW92ZShlbGVtZW50TWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIE1ha2VzIGEgYmFja2Ryb3AgYXNzb2NpYXRlZCB3aXRoIGEgcG9ydGFsZWQgZWxlbWVudCB2aXNpYmxlIGlmIGl0IGV4aXN0cyAqL1xuICBwdWJsaWMgc2hvd0JhY2tkcm9wKHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5hZGRDb250cm9sbGVyKHBvcnRhbENvbnRyb2xsZXIpO1xuICAgIGNvbnN0IHsgYmFja2Ryb3AgfSA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCkuZ2V0KGVsZW1lbnQpID8/IHt9O1xuICAgIGJhY2tkcm9wPy5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0tc2hvdycpO1xuICB9XG5cbiAgLyoqIEhpZGVzIGEgYmFja2Ryb3AgYXNzb2NpYXRlZCB3aXRoIGEgcG9ydGFsZWQgZWxlbWVudCBpZiBpdCBleGlzdHMgKi9cbiAgcHVibGljIGhpZGVCYWNrZHJvcChwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyKTtcbiAgICBjb25zdCB7IGJhY2tkcm9wIH0gPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpLmdldChlbGVtZW50KSA/PyB7fTtcbiAgICBiYWNrZHJvcD8uY2xhc3NMaXN0LnJlbW92ZSgnYmFja2Ryb3AtLXNob3cnKTtcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIHRoZSBpbnRlcnRuZXNzIGEgYmFja2Ryb3AgaWYgaXQgZXhpc3RzICh3aGV0aGVyIG9yIG5vdCB0aGUgdXNlciBjYW4gY2xpY2sgdGhyb3VnaCBpdCkgKi9cbiAgcHVibGljIHNldEJhY2tkcm9wSW5lcnRuZXNzKFxuICAgIHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLFxuICAgIGVsZW1lbnQ6IEVsZW1lbnQsXG4gICAgaW5lcnQ6IGJvb2xlYW4gPSB0cnVlXG4gICkge1xuICAgIHRoaXMuYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyKTtcbiAgICBjb25zdCB7IGJhY2tkcm9wIH0gPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpLmdldChlbGVtZW50KSA/PyB7fTtcbiAgICBpZiAoaW5lcnQpIHtcbiAgICAgIGJhY2tkcm9wPy5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0taW5lcnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tkcm9wLS1pbmVydCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBpZCBmb3IgdGhlIGNvbmZpZ3VyZWQgc3RhY2sgZWxlbWVudCAqL1xuICBwcml2YXRlIGlkRmFjdG9yeSA9IChzdGFjazogUG9ydGFsU3RhY2spID0+IGBtdGUtcG9ydGFsX18ke3N0YWNrfS1zdGFja2A7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhbiBlbGVtZW50IGlzIGJlaW5nIHBvcnRhbGVkIGZyb20gd2l0aGluIGFub3RoZXIgcG9ydGFsZWRcbiAgICogZWxlbWVudCBhbmQgcmV0dXJucyB0aGF0IHBhcmVudCBpZiBpdCBpc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRQYXJlbnRQb3J0YWxlZEVsZW1lbnQocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAocG9ydGFsQ29udHJvbGxlci5wYXJlbnRQb3J0YWxlZEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBwb3J0YWxDb250cm9sbGVyLnBhcmVudFBvcnRhbGVkRWxlbWVudDtcbiAgICB9XG4gICAgbGV0IHBhcmVudFBvcnRhbGVkRWxlbWVudDogRWxlbWVudDtcbiAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZm9yRWFjaCgocG9ydGFsQ29udHJvbGxlcikgPT5cbiAgICAgIHBvcnRhbENvbnRyb2xsZXIuZm9yRWFjaCgocG9ydGFsZWRFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChwb3J0YWxlZEVsZW1lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgIHBvcnRhbGVkRWxlbWVudC5jaGlsZFBvcnRhbGVkRWxlbWVudHMuYWRkKGVsZW1lbnQpO1xuICAgICAgICAgIHBhcmVudFBvcnRhbGVkRWxlbWVudCA9IHBvcnRhbGVkRWxlbWVudC5lbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgLy8gQ2FjaGUgdGhlIHBhcmVudFBvcnRhbGVkRWxlbWVudCBpZiBmb3VuZCBvbiB0aGUgY29udHJvbGxlciBzbyB3ZSBjYW4gcmVmZXJlbmNlXG4gICAgLy8gaXQgd2hlbiBvcGVuZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBET01cbiAgICBpZiAocGFyZW50UG9ydGFsZWRFbGVtZW50KSB7XG4gICAgICBwb3J0YWxDb250cm9sbGVyLnBhcmVudFBvcnRhbGVkRWxlbWVudCA9IHBhcmVudFBvcnRhbGVkRWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudFBvcnRhbGVkRWxlbWVudDtcbiAgfVxuXG4gIC8qKiBFbnN1cmVzIGFuIGVsZW1lbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBzdGFjayBubyBtYXR0ZXIgd2hpY2ggY29udHJvbGxlciBoYXMgcG9ydGFsZWQgaXQgKi9cbiAgcHJpdmF0ZSByZW1vdmVGcm9tU3RhY2tHbG9iYWxseShlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmZvckVhY2goKHBvcnRhbENvbnRyb2xsZXIpID0+IHtcbiAgICAgIGlmIChwb3J0YWxDb250cm9sbGVyLmhhcyhlbGVtZW50KSkge1xuICAgICAgICBjb25zdCBlbGVtZW50TWV0YWRhdGEgPSBwb3J0YWxDb250cm9sbGVyLmdldChlbGVtZW50KTtcbiAgICAgICAgcG9ydGFsQ29udHJvbGxlci5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIHRoaXMuZmluYWxpemVTdGFja1JlbW92ZShlbGVtZW50TWV0YWRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEZpbmFsaXplcyB0aGUgcmVtb3ZlIG9mIGFuIGVsZW1lbnQgZnJvbSBhIHBvcnRhbCBzdGFjayAqL1xuICBwcml2YXRlIGZpbmFsaXplU3RhY2tSZW1vdmUoZWxlbWVudE1ldGFkYXRhOiBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YSkge1xuICAgIGlmIChlbGVtZW50TWV0YWRhdGEpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgc3RhY2s6IHN0YWNrTmFtZSxcbiAgICAgICAgYmFja2Ryb3AsXG4gICAgICAgIGNoaWxkUG9ydGFsZWRFbGVtZW50cyxcbiAgICAgICAgcGFyZW50UG9ydGFsZWRFbGVtZW50LFxuICAgICAgfSA9IGVsZW1lbnRNZXRhZGF0YTtcbiAgICAgIGNvbnN0IHN0YWNrID0gdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrTmFtZV07XG5cbiAgICAgIC8vIFJlbW92ZSBhbnkgc2Nyb2xsTG9ja3NcbiAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsTG9jayhlbGVtZW50KTtcblxuICAgICAgLy8gRW5zdXJlcyBhbiBlbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSBhbnkgcGFyZW50IHBvcnRhbGVkIGVsZW1lbnRzIGNoaWxkcmVuIGxpc3RzXG4gICAgICBpZiAocGFyZW50UG9ydGFsZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChwb3J0YWxDb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgaWYgKHBvcnRhbENvbnRyb2xsZXIuaGFzKHBhcmVudFBvcnRhbGVkRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHBvcnRhbENvbnRyb2xsZXIuZ2V0KHBhcmVudFBvcnRhbGVkRWxlbWVudCkuY2hpbGRQb3J0YWxlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBFbnN1cmVzIGFueSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQgYXJlIHJlbW92ZWQgYmVmb3JlIHRoaXMgZWxlbWVudCBpc1xuICAgICAgaWYgKGNoaWxkUG9ydGFsZWRFbGVtZW50cy5zaXplID4gMCkge1xuICAgICAgICBjaGlsZFBvcnRhbGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gdGhpcy5yZW1vdmVGcm9tU3RhY2tHbG9iYWxseShlbGVtZW50KSk7XG4gICAgICB9XG4gICAgICAvLyBSZW1vdmVzIHRoaXMgZWxlbWVudHMgYmFja2Ryb3AgZnJvbSB0aGUgcG9ydGFsIHN0YWNrXG4gICAgICBpZiAoYmFja2Ryb3AgJiYgYmFja2Ryb3AucGFyZW50RWxlbWVudCA9PT0gc3RhY2spIHtcbiAgICAgICAgc3RhY2s/LnJlbW92ZUNoaWxkKGJhY2tkcm9wKTtcbiAgICAgIH1cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgYSByZWFjdCB3cmFwcGVkIHBvcnRhbGVkIGVsZW1lbnRcbiAgICAgIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQ/Lmhhc0F0dHJpYnV0ZSgnZGF0YS1vdmVybGF5LXdyYXBwZXInKSkge1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgPT09IHN0YWNrKSB7XG4gICAgICAgICAgc3RhY2s/LnJlbW92ZUNoaWxkKGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50ID09PSBzdGFjaykge1xuICAgICAgICBzdGFjaz8ucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgYSBzY3JvbGwgbG9jayB0byB0aGUgYm9keSBlbGVtZW50IHRvIHByZXZlbnQgc2Nyb2xsaW5nIG9mIHBhZ2UgY29udGVudC5cbiAgICogQ2FsY3VsYXRlcyBhbnkgYm9keSBvZmZzZXRzIGR1ZSB0byB2aXNpYmxlIHNjcm9sbGJhcnMgYW5kIGR5bmFtaWNhbGx5IGFkanVzdHMgZm9yIHRoZW0uXG4gICAqL1xuICBwcml2YXRlIGFwcGx5U2Nyb2xsTG9jayhlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5hY3RpdmVTY3JvbGxMb2Nrcy5hZGQoZWxlbWVudCk7XG5cbiAgICBjb25zdCBpc0lPUyA9IGlzUGxhdGZvcm0oJ0lPUycpO1xuICAgIGNvbnN0IGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG4gICAgY29uc3Qgc2Nyb2xsYmFyWCA9XG4gICAgICBNYXRoLnJvdW5kKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSArXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICBjb25zdCBwYWRkaW5nUHJvcCA9IHNjcm9sbGJhclggPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBzY3JvbGxYID0gYm9keVN0eWxlLmxlZnQgPyBwYXJzZUZsb2F0KGJvZHlTdHlsZS5sZWZ0KSA6IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICBjb25zdCBzY3JvbGxZID0gYm9keVN0eWxlLnRvcCA/IHBhcnNlRmxvYXQoYm9keVN0eWxlLnRvcCkgOiB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cbiAgICBib2R5U3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ210ZS1zY3JvbGwtbG9jay0tYWN0aXZlJyk7XG5cbiAgICBpZiAoc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgIGJvZHlTdHlsZVtwYWRkaW5nUHJvcF0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGA7XG4gICAgfVxuXG4gICAgLy8gT25seSBpT1MgZG9lc24ndCByZXNwZWN0IGBvdmVyZmxvdzogaGlkZGVuYCBvbiBkb2N1bWVudC5ib2R5LCBhbmQgdGhpc1xuICAgIC8vIHRlY2huaXF1ZSBoYXMgZmV3ZXIgc2lkZSBlZmZlY3RzLlxuICAgIGlmIChpc0lPUykge1xuICAgICAgLy8gaU9TIDEyIGRvZXMgbm90IHN1cHBvcnQgYHZpc3VhbFZpZXdwb3J0YC5cbiAgICAgIGNvbnN0IG9mZnNldExlZnQgPSBnbG9iYWxUaGlzLnZpc3VhbFZpZXdwb3J0Py5vZmZzZXRMZWZ0IHx8IDA7XG4gICAgICBjb25zdCBvZmZzZXRUb3AgPSBnbG9iYWxUaGlzLnZpc3VhbFZpZXdwb3J0Py5vZmZzZXRUb3AgfHwgMDtcblxuICAgICAgT2JqZWN0LmFzc2lnbihib2R5U3R5bGUsIHtcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIHRvcDogYCR7LShzY3JvbGxZIC0gTWF0aC5mbG9vcihvZmZzZXRUb3ApKX1weGAsXG4gICAgICAgIGxlZnQ6IGAkey0oc2Nyb2xsWCAtIE1hdGguZmxvb3Iob2Zmc2V0TGVmdCkpfXB4YCxcbiAgICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGFuIGFjdGl2ZSBzY3JvbGxMb2NrIGlmIHRoZXJlIGFyZSBubyByZW1haW5pbmcgZWxlbWVudHMgcG9ydGFsZWQgdGhhdCByZXF1ZXN0ZWQgaXQgKi9cbiAgcHJpdmF0ZSByZW1vdmVTY3JvbGxMb2NrKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFjdGl2ZVNjcm9sbExvY2tzLmRlbGV0ZShlbGVtZW50KTtcblxuICAgIGlmICh0aGlzLmFjdGl2ZVNjcm9sbExvY2tzLnNpemUgPT09IDApIHtcbiAgICAgIGNvbnN0IGlzSU9TID0gaXNQbGF0Zm9ybSgnSU9TJyk7XG4gICAgICBjb25zdCBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuICAgICAgY29uc3Qgc2Nyb2xsYmFyWCA9XG4gICAgICAgIE1hdGgucm91bmQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpICtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICBjb25zdCBwYWRkaW5nUHJvcCA9IHNjcm9sbGJhclggPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oYm9keVN0eWxlLCB7XG4gICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgW3BhZGRpbmdQcm9wXTogJycsXG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtdGUtc2Nyb2xsLWxvY2stLWFjdGl2ZScpO1xuXG4gICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5U3R5bGUsIHtcbiAgICAgICAgICBwb3NpdGlvbjogJycsXG4gICAgICAgICAgdG9wOiAnJyxcbiAgICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgICByaWdodDogJycsXG4gICAgICAgIH0pO1xuICAgICAgICBnbG9iYWxUaGlzLnNjcm9sbFRvKHNjcm9sbFgsIHNjcm9sbFkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlUG9ydGFsU2VydmljZSA9IG5ldyBfTXRlUG9ydGFsU2VydmljZSgpO1xuIiwgImltcG9ydCB7IHNpZ25hbCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmNsYXNzIF9NdGVIaXN0b3J5QXBpU2VydmljZSB7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjaGFuZ2VTaWduYWwgPSBzaWduYWwoKTtcbiAgcHJpdmF0ZSBwcmV2SHJlZjogc3RyaW5nO1xuXG4gIHB1YmxpYyBzdGF0ZUNoYW5nZXMoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlU2lnbmFsO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3J3YXJkQXBwbHkgPSAodGFyZ2V0LCB0aGlzQXJnLCBhcmdBcnJheSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IHRhcmdldC5hcHBseSh0aGlzQXJnLCBhcmdBcnJheSk7XG4gICAgLy8gT25seSBlbWl0IGEgc3RhdGUgY2hhbmdlIGlmIHRoZSBocmVmIGRpZmZlcnMgZnJvbSB0aGUgbGFzdCBlbWlzc2lvblxuICAgIGlmICh0aGlzLnByZXZIcmVmICE9PSB3aW5kb3cubG9jYXRpb24uaHJlZikge1xuICAgICAgdGhpcy5wcmV2SHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgdGhpcy5jaGFuZ2VTaWduYWwuc2V0KHRoaXMucHJldkhyZWYpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAvLyBMaXN0ZW4gZm9yIGJhY2sgZXZlbnRzIHdpdGggcG9wc3RhdGUgZXZlbnRcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VTaWduYWwuc2V0KHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBQYXRjaCBIaXN0b3J5IEFQSSBtZXRob2RzIHRvIGVuc3VyZSB3ZSBlbWl0IGFueXRpbWUgdGhlaXIgc3RhdGUgaXMgY2hhbmdlZFxuICAgICAgLy8gVGhpcyBpcyBuZWNjZXNhcnkgYmVjYWlzZSB0aGUgYHBvcHN0YXRlYCBldmVudCBpcyBub3QgcmVsaWFibHkgY2FsbGVkIGFjcm9zcyBicm93c2VycyB3aGVuZXZlciB0aGUgaGlzdG9yeSBBUEkgaXMgdXNlZFxuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjayA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5iYWNrLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQgPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkuZm9yd2FyZCwgeyBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHkgfSk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5nbyA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5nbywgeyBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHkgfSk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlLCB7IGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSB9KTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9IG5ldyBQcm94eSh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUsIHtcbiAgICAgICAgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVIaXN0b3J5QXBpU2VydmljZSA9IG5ldyBfTXRlSGlzdG9yeUFwaVNlcnZpY2UoKTtcbiIsICJpbXBvcnQgeyBpc1NzciB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmV4cG9ydCB0eXBlIE10ZURhdGVGb3JtYXRPcHRpb25zID0gSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnMgJiB7XG4gIGxhbmc/OiBzdHJpbmc7XG4gIGZvcm1hdD86XG4gICAgfCAnc2hvcnQnXG4gICAgfCAnbWVkaXVtJ1xuICAgIHwgJ2xvbmcnXG4gICAgfCAnZnVsbCdcbiAgICB8ICdzaG9ydERhdGUnXG4gICAgfCAnbWVkaXVtRGF0ZSdcbiAgICB8ICdsb25nRGF0ZSdcbiAgICB8ICdmdWxsRGF0ZSdcbiAgICB8ICdzaG9ydFRpbWUnXG4gICAgfCAnbWVkaXVtVGltZSdcbiAgICB8ICdsb25nVGltZSdcbiAgICB8ICdmdWxsVGltZSc7XG59O1xuXG5leHBvcnQgdHlwZSBNdGVOdW1iZXJGb3JtYXRPcHRpb25zID0gSW50bC5OdW1iZXJGb3JtYXRPcHRpb25zICYgeyBsYW5nPzogc3RyaW5nIH07XG5cbmNsYXNzIF9NdGVMb2NhbGl6ZVNlcnZpY2Uge1xuICAvLyBBc3N1bWUgYGVuYCBsYW5nIGZvciBub3cgYXMgYSBmYWxsYmFjayB1bnRpbCB3ZSByb2xsYmFjayB3aWRlciBzdXBwb3J0IGZvciBpMTFuIHdoZW4gbmVjZXNzYXJ5XG4gIHByaXZhdGUgbGFuZ3VhZ2UgPSAnZW4nO1xuICBwcml2YXRlIGluaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIGlmICghaXNTc3IoKSAmJiAhdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0aGlzLmxhbmd1YWdlID0gYCR7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgfHwgbmF2aWdhdG9yLmxhbmd1YWdlfWAudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0TnVtYmVyKG51bWJlclRvRm9ybWF0OiBudW1iZXIgfCBzdHJpbmcsIG9wdGlvbnM/OiBNdGVOdW1iZXJGb3JtYXRPcHRpb25zKTogc3RyaW5nIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICBjb25zdCBsYW5nID0gb3B0aW9ucz8ubGFuZyA/IG9wdGlvbnMubGFuZyA6IHRoaXMubGFuZ3VhZ2U7XG4gICAgbnVtYmVyVG9Gb3JtYXQgPSBOdW1iZXIobnVtYmVyVG9Gb3JtYXQpO1xuICAgIC8vIEVuc3VyZSBubyBudWxsIG9wdGlvbnMgZXhpc3RcbiAgICBjb25zdCBmaW5hbE9wdGlvbnMgPSB7XG4gICAgICBsYW5nOiBvcHRpb25zLmxhbmcgPz8gdW5kZWZpbmVkLFxuICAgICAgc3R5bGU6IG9wdGlvbnMuc3R5bGUgPz8gdW5kZWZpbmVkLFxuICAgICAgY3VycmVuY3k6IG9wdGlvbnMuY3VycmVuY3kgPz8gdW5kZWZpbmVkLFxuICAgICAgY3VycmVuY3lEaXNwbGF5OiBvcHRpb25zLmN1cnJlbmN5RGlzcGxheSA/PyB1bmRlZmluZWQsXG4gICAgICB1c2VHcm91cGluZzogb3B0aW9ucy51c2VHcm91cGluZyA/PyB1bmRlZmluZWQsXG4gICAgICBtaW5pbXVtSW50ZWdlckRpZ2l0czogb3B0aW9ucy5taW5pbXVtSW50ZWdlckRpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IG9wdGlvbnMubWluaW11bUZyYWN0aW9uRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogb3B0aW9ucy5tYXhpbXVtRnJhY3Rpb25EaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgbWluaW11bVNpZ25pZmljYW50RGlnaXRzOiBvcHRpb25zLm1pbmltdW1TaWduaWZpY2FudERpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICBtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHM6IG9wdGlvbnMubWF4aW11bVNpZ25pZmljYW50RGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICB9O1xuICAgIHJldHVybiBpc05hTihudW1iZXJUb0Zvcm1hdClcbiAgICAgID8gJydcbiAgICAgIDogbmV3IEludGwuTnVtYmVyRm9ybWF0KGxhbmcsIGZpbmFsT3B0aW9ucykuZm9ybWF0KG51bWJlclRvRm9ybWF0KTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXREYXRlKGRhdGVUb0Zvcm1hdDogRGF0ZSB8IHN0cmluZywgb3B0aW9ucz86IE10ZURhdGVGb3JtYXRPcHRpb25zKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgY29uc3QgbGFuZyA9IG9wdGlvbnM/LmxhbmcgPyBvcHRpb25zLmxhbmcgOiB0aGlzLmxhbmd1YWdlO1xuICAgIGNvbnN0IGZvcm1hdHRlZE9wdGlvbnMgPSB7IC4uLihvcHRpb25zID8/IHt9KSwgLi4udGhpcy5nZXREZWZpbmVkRGF0ZUZvcm1hdChvcHRpb25zPy5mb3JtYXQpIH07XG4gICAgLy8gRW5zdXJlIG5vIG51bGwgb3B0aW9ucyBleGlzdFxuICAgIGNvbnN0IGZpbmFsT3B0aW9ucyA9IHtcbiAgICAgIGxhbmc6IGZvcm1hdHRlZE9wdGlvbnMubGFuZyA/PyB1bmRlZmluZWQsXG4gICAgICB3ZWVrZGF5OiBmb3JtYXR0ZWRPcHRpb25zLndlZWtkYXkgPz8gdW5kZWZpbmVkLFxuICAgICAgZXJhOiBmb3JtYXR0ZWRPcHRpb25zLmVyYSA/PyB1bmRlZmluZWQsXG4gICAgICB5ZWFyOiBmb3JtYXR0ZWRPcHRpb25zLnllYXIgPz8gdW5kZWZpbmVkLFxuICAgICAgbW9udGg6IGZvcm1hdHRlZE9wdGlvbnMubW9udGggPz8gdW5kZWZpbmVkLFxuICAgICAgZGF5OiBmb3JtYXR0ZWRPcHRpb25zLmRheSA/PyB1bmRlZmluZWQsXG4gICAgICBob3VyOiBmb3JtYXR0ZWRPcHRpb25zLmhvdXIgPz8gdW5kZWZpbmVkLFxuICAgICAgbWludXRlOiBmb3JtYXR0ZWRPcHRpb25zLm1pbnV0ZSA/PyB1bmRlZmluZWQsXG4gICAgICBzZWNvbmQ6IGZvcm1hdHRlZE9wdGlvbnMuc2Vjb25kID8/IHVuZGVmaW5lZCxcbiAgICAgIGZyYWN0aW9uYWxTZWNvbmREaWdpdHM6IGZvcm1hdHRlZE9wdGlvbnMuZnJhY3Rpb25hbFNlY29uZERpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICB0aW1lWm9uZU5hbWU6IGZvcm1hdHRlZE9wdGlvbnMudGltZVpvbmVOYW1lID8/IHVuZGVmaW5lZCxcbiAgICAgIHRpbWVab25lOiBmb3JtYXR0ZWRPcHRpb25zLnRpbWVab25lID8/IHVuZGVmaW5lZCxcbiAgICAgIGhvdXIxMjogZm9ybWF0dGVkT3B0aW9ucy5ob3VyMTIgPz8gdW5kZWZpbmVkLFxuICAgICAgZm9ybWF0OiBmb3JtYXR0ZWRPcHRpb25zLmZvcm1hdCA/PyB1bmRlZmluZWQsXG4gICAgfTtcbiAgICBkYXRlVG9Gb3JtYXQgPSBuZXcgRGF0ZShkYXRlVG9Gb3JtYXQpO1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsYW5nLCBmaW5hbE9wdGlvbnMpLmZvcm1hdChkYXRlVG9Gb3JtYXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZpbmVkRGF0ZUZvcm1hdChcbiAgICBmb3JtYXQ6XG4gICAgICB8ICdzaG9ydCdcbiAgICAgIHwgJ21lZGl1bSdcbiAgICAgIHwgJ2xvbmcnXG4gICAgICB8ICdmdWxsJ1xuICAgICAgfCAnc2hvcnREYXRlJ1xuICAgICAgfCAnbWVkaXVtRGF0ZSdcbiAgICAgIHwgJ2xvbmdEYXRlJ1xuICAgICAgfCAnZnVsbERhdGUnXG4gICAgICB8ICdzaG9ydFRpbWUnXG4gICAgICB8ICdtZWRpdW1UaW1lJ1xuICAgICAgfCAnbG9uZ1RpbWUnXG4gICAgICB8ICdmdWxsVGltZSdcbiAgKTogTXRlRGF0ZUZvcm1hdE9wdGlvbnMge1xuICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICBjYXNlICdzaG9ydCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbG9uZyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2Z1bGwnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnc2hvcnREYXRlJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ21lZGl1bURhdGUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2xvbmdEYXRlJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2Z1bGxEYXRlJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdzaG9ydFRpbWUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ21lZGl1bVRpbWUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2xvbmdUaW1lJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnZnVsbFRpbWUnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICBmcmFjdGlvbmFsU2Vjb25kRGlnaXRzOiAyLFxuICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZUxvY2FsaXplU2VydmljZSA9IG5ldyBfTXRlTG9jYWxpemVTZXJ2aWNlKCk7XG4iLCAiaW1wb3J0IHsgQ29yZVBhbGV0dGUsIERlbnNpdHlPcHRpb25zLCBQcmVzZXRzLCBTaXplT3B0aW9ucywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByZXNldCB7XG4gIHNpemU/OiBTaXplT3B0aW9ucztcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgZGVuc2l0eT86IERlbnNpdHlPcHRpb25zO1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgYnV0dG9uUHJlc2V0czogUHJlc2V0czxCdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvbkJ1dHRvblByZXNldCB7XG4gIHNpemU/OiBTaXplT3B0aW9ucztcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbiAgZGVuc2l0eT86IERlbnNpdHlPcHRpb25zO1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgaWNvbkJ1dHRvblByZXNldHM6IFByZXNldHM8SWNvbkJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBTdGF0dXNQYWxldHRlIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJY29uUHJlc2V0IHtcbiAgY29sb3I/OiBTdGF0dXNQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgaWNvblByZXNldHM6IFByZXNldHM8SWNvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBTdGF0dXNQYWxldHRlIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9ncmVzc0JhclByZXNldCB7XG4gIGNvbG9yPzogU3RhdHVzUGFsZXR0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzQmFyUHJlc2V0czogUHJlc2V0czxQcm9ncmVzc0JhclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFN0YXR1c1BhbGV0dGUgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzU3Bpbm5lclByZXNldCB7XG4gIGNvbG9yPzogU3RhdHVzUGFsZXR0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzU3Bpbm5lclByZXNldHM6IFByZXNldHM8UHJvZ3Jlc3NTcGlubmVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9vbGJhclByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgdG9vbGJhclByZXNldHM6IFByZXNldHM8VG9vbGJhclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYXJkUHJlc2V0IHtcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbiAgd2l0aFNoYWRvdz86IGJvb2xlYW47XG4gIHdpdGhvdXRTaGFkb3c/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRCdXR0b25QcmVzZXQgZXh0ZW5kcyBDYXJkUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBjYXJkUHJlc2V0czogUHJlc2V0czxDYXJkUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgd2l0aG91dFNoYWRvdzogdHJ1ZSxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgY29uc3QgY2FyZEJ1dHRvblByZXNldHM6IFByZXNldHM8Q2FyZEJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIHdpdGhvdXRTaGFkb3c6IHRydWUsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUcmVlUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCB0cmVlUHJlc2V0czogUHJlc2V0czxUcmVlUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IENvcmVQYWxldHRlLCBQcmVzZXRzLCBTaXplT3B0aW9ucywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ1ByZXNldHMge1xuICBzaXplPzogU2l6ZU9wdGlvbnM7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCB0YWdQcmVzZXRzOiBQcmVzZXRzPFRhZ1ByZXNldHM+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFkZ2VQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGJhZGdlUHJlc2V0czogUHJlc2V0czxCYWRnZVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBDb3JlUGFsZXR0ZSwgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlua1ByZXNldCB7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG4gIGZvbnRXZWlnaHQ/OiAncmVndWxhcicgfCAnYm9sZCc7XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rUHJlc2V0czogUHJlc2V0czxMaW5rUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGFsZXJ0UHJlc2V0czogUHJlc2V0czxBbGVydFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgaW5wdXRQcmVzZXRzOiBQcmVzZXRzPElucHV0UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdlclByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgZHJhd2VyUHJlc2V0czogUHJlc2V0czxEcmF3ZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXNpZGVQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGFzaWRlUHJlc2V0czogUHJlc2V0czxBc2lkZVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBSYWRpdXNPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJlYWRjcnVtYkl0ZW1QcmVzZXQge1xuICBmb250V2VpZ2h0PzogJ3JlZ3VsYXInIHwgJ2JvbGQnO1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xuICB3aXRob3V0VW5kZXJsaW5lPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGJyZWFkY3J1bWJJdGVtUHJlc2V0czogUHJlc2V0czxCcmVhZGNydW1iSXRlbVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7XG4gICAgd2l0aG91dFVuZGVybGluZTogdHJ1ZSxcbiAgfSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbW9kYWxQcmVzZXRzOiBQcmVzZXRzPE1vZGFsUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIENvcmVQYWxldHRlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tib3hQcmVzZXQge1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xufVxuXG5leHBvcnQgY29uc3QgY2hlY2tib3hQcmVzZXRzOiBQcmVzZXRzPENoZWNrYm94UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhZGlvUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCByYWRpb1ByZXNldHM6IFByZXNldHM8UmFkaW9QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2Um9vdFByZXNldCB7XG4gIG1vYmlsZUJyZWFrcG9pbnQ/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnO1xuICBpbnZlcnNlPzogJ2hlYWRlcicgfCAnc2lkZWJhcic7XG4gIHByZWZlclNpZGViYXI/OiAnb3BlbmVkJyB8ICdjbG9zZWQnO1xufVxuXG5leHBvcnQgY29uc3QgbmF2Um9vdFByZXNldHM6IFByZXNldHM8TmF2Um9vdFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHtcbiAgICBpbnZlcnNlOiAnc2lkZWJhcicsXG4gIH0sXG4gIGN4OiB7XG4gICAgcHJlZmVyU2lkZWJhcjogJ2Nsb3NlZCcsXG4gIH0sXG4gIHB4OiB7XG4gICAgaW52ZXJzZTogJ3NpZGViYXInLFxuICB9LFxuICByeDoge1xuICAgIHByZWZlclNpZGViYXI6ICdjbG9zZWQnLFxuICB9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZIZWFkZXJQcmVzZXQge1xuICB3aXRoQ29udGFpbmVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IG5hdkhlYWRlclByZXNldHM6IFByZXNldHM8TmF2SGVhZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdlN1YkhlYWRlclByZXNldCB7XG4gIHdpdGhDb250YWluZXI/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbmF2U3ViSGVhZGVyUHJlc2V0czogUHJlc2V0czxOYXZTdWJIZWFkZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2U2lkZWJhclByZXNldCB7XG4gIGhpZGVVbnRpbFRyYW5zaXRpb24/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbmF2U2lkZWJhclByZXNldHM6IFByZXNldHM8TmF2U2lkZWJhclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGhpZGVVbnRpbFRyYW5zaXRpb246IHRydWUsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHtcbiAgICBoaWRlVW50aWxUcmFuc2l0aW9uOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZDb250ZW50UHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXZDb250ZW50UHJlc2V0czogUHJlc2V0czxOYXZDb250ZW50UHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkZvb3RlclByZXNldCB7XG4gIHdpdGhDb250YWluZXI/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbmF2Rm9vdGVyUHJlc2V0czogUHJlc2V0czxOYXZGb290ZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2QnV0dG9uUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXZCdXR0b25QcmVzZXRzOiBQcmVzZXRzPE5hdkJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZJY29uQnV0dG9uUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXZJY29uQnV0dG9uUHJlc2V0czogUHJlc2V0czxOYXZJY29uQnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkl0ZW1QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG5hdkl0ZW1QcmVzZXRzOiBQcmVzZXRzPE5hdkl0ZW1QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvbkdyb3VwUHJlc2V0IHtcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGJ1dHRvbkdyb3VwUHJlc2V0czogUHJlc2V0czxCdXR0b25Hcm91cFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdGNoUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBzd2l0Y2hQcmVzZXRzOiBQcmVzZXRzPFN3aXRjaFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlU2VsZWN0UHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXRpdmVTZWxlY3RQcmVzZXRzOiBQcmVzZXRzPE5hdGl2ZVNlbGVjdFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dGFyZWFQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHRleHRhcmVhUHJlc2V0czogUHJlc2V0czxUZXh0YXJlYVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2tlbGV0b25QcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHNrZWxldG9uUHJlc2V0czogUHJlc2V0czxTa2VsZXRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBzbGlkZXJQcmVzZXRzOiBQcmVzZXRzPFNsaWRlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFuZ2VTbGlkZXJQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHJhbmdlU2xpZGVyUHJlc2V0czogUHJlc2V0czxSYW5nZVNsaWRlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VnbWVudGVkQ29udHJvbFByZXNldCB7fVxuXG5leHBvcnQgY29uc3Qgc2VnbWVudGVkQ29udHJvbFByZXNldHM6IFByZXNldHM8U2VnbWVudGVkQ29udHJvbFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBidXR0b25QcmVzZXRzLCBpY29uQnV0dG9uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9idXR0b24vYnV0dG9uLnByZXNldHMnO1xuaW1wb3J0IHsgaWNvblByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvaWNvbi9pY29uLnByZXNldHMnO1xuaW1wb3J0IHsgcHJvZ3Jlc3NCYXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIucHJlc2V0cyc7XG5pbXBvcnQgeyBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5wcmVzZXRzJztcbmltcG9ydCB7IHRvb2xiYXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3Rvb2xiYXIvdG9vbGJhci5wcmVzZXRzJztcbmltcG9ydCB7IGNhcmRQcmVzZXRzLCBjYXJkQnV0dG9uUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9jYXJkL2NhcmQucHJlc2V0cyc7XG5pbXBvcnQgeyB0cmVlUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy90cmVlL3RyZWUucHJlc2V0cyc7XG5pbXBvcnQgeyB0YWdQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3RhZy90YWcucHJlc2V0cyc7XG5pbXBvcnQgeyBiYWRnZVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYmFkZ2UvYmFkZ2UucHJlc2V0cyc7XG5pbXBvcnQgeyBsaW5rUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9saW5rL2xpbmsucHJlc2V0cyc7XG5pbXBvcnQgeyBhbGVydFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYWxlcnQvYWxlcnQucHJlc2V0cyc7XG5pbXBvcnQgeyBpbnB1dFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvaW5wdXQvaW5wdXQucHJlc2V0cyc7XG5pbXBvcnQgeyBkcmF3ZXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2RyYXdlci9kcmF3ZXIucHJlc2V0cyc7XG5pbXBvcnQgeyBhc2lkZVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYXNpZGUvYXNpZGUucHJlc2V0cyc7XG5pbXBvcnQgeyBicmVhZGNydW1iSXRlbVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi1pdGVtLnByZXNldHMnO1xuaW1wb3J0IHsgbW9kYWxQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL21vZGFsL21vZGFsLnByZXNldHMnO1xuaW1wb3J0IHsgY2hlY2tib3hQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2NoZWNrYm94L2NoZWNrYm94LnByZXNldHMnO1xuaW1wb3J0IHsgcmFkaW9QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3JhZGlvL3JhZGlvLnByZXNldHMnO1xuaW1wb3J0IHtcbiAgbmF2Um9vdFByZXNldHMsXG4gIG5hdkhlYWRlclByZXNldHMsXG4gIG5hdlN1YkhlYWRlclByZXNldHMsXG4gIG5hdlNpZGViYXJQcmVzZXRzLFxuICBuYXZDb250ZW50UHJlc2V0cyxcbiAgbmF2Rm9vdGVyUHJlc2V0cyxcbiAgbmF2QnV0dG9uUHJlc2V0cyxcbiAgbmF2SWNvbkJ1dHRvblByZXNldHMsXG4gIG5hdkl0ZW1QcmVzZXRzLFxufSBmcm9tICcuLi8uLi9hdG9taWMvbmF2L25hdi5wcmVzZXRzJztcbmltcG9ydCB7IGJ1dHRvbkdyb3VwUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLnByZXNldHMnO1xuaW1wb3J0IHsgc3dpdGNoUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9zd2l0Y2gvc3dpdGNoLnByZXNldHMnO1xuaW1wb3J0IHsgbmF0aXZlU2VsZWN0UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9uYXRpdmUtc2VsZWN0L25hdGl2ZS1zZWxlY3QucHJlc2V0cyc7XG5pbXBvcnQgeyB0ZXh0YXJlYVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdGV4dGFyZWEvdGV4dGFyZWEucHJlc2V0cyc7XG5pbXBvcnQgeyBza2VsZXRvblByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc2tlbGV0b24vc2tlbGV0b24ucHJlc2V0cyc7XG5pbXBvcnQgeyBzbGlkZXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3NsaWRlci9zbGlkZXIucHJlc2V0cyc7XG5pbXBvcnQgeyByYW5nZVNsaWRlclByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvcmFuZ2Utc2xpZGVyL3JhbmdlLXNsaWRlci5wcmVzZXRzJztcbmltcG9ydCB7IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3NlZ21lbnRlZC1jb250cm9sL3NlZ21lbnRlZC1jb250cm9sLnByZXNldHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vcnRhclByZXNldFRoZW1lIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb2xvclNjaGVtZTogJ3N5c3RlbScgfCAnbGlnaHQnIHwgJ2RhcmsnO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFByZXNldCA9IHtcbiAgcHJlc2V0OiAnZGVmYXVsdCcsXG4gIHRoZW1lOiB7XG4gICAgbmFtZTogJ3B4JyxcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSBhcyBNb3J0YXJQcmVzZXRUaGVtZSxcbiAgTXRlQnV0dG9uOiBidXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUljb25CdXR0b246IGljb25CdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUljb246IGljb25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVByb2dyZXNzQmFyOiBwcm9ncmVzc0JhclByZXNldHMuZGVmYXVsdCxcbiAgTXRlUHJvZ3Jlc3NTcGlubmVyOiBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVRvb2xiYXI6IHRvb2xiYXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUNhcmQ6IGNhcmRQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUNhcmRCdXR0b246IGNhcmRCdXR0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVRyZWU6IHRyZWVQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVRhZzogdGFnUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVCYWRnZTogYmFkZ2VQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUxpbms6IGxpbmtQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUFsZXJ0OiBhbGVydFByZXNldHMuZGVmYXVsdCxcbiAgTXRlSW5wdXQ6IGlucHV0UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVEcmF3ZXI6IGRyYXdlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlQXNpZGU6IGFzaWRlUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVCcmVhZGNydW1iSXRlbTogYnJlYWRjcnVtYkl0ZW1QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU1vZGFsOiBtb2RhbFByZXNldHMuZGVmYXVsdCxcbiAgTXRlQ2hlY2tib3g6IGNoZWNrYm94UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVSYWRpbzogcmFkaW9QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdlJvb3Q6IG5hdlJvb3RQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkhlYWRlcjogbmF2SGVhZGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZTdWJIZWFkZXI6IG5hdlN1YkhlYWRlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2U2lkZWJhcjogbmF2U2lkZWJhclByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2Q29udGVudDogbmF2Q29udGVudFByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2Rm9vdGVyOiBuYXZGb290ZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkJ1dHRvbjogbmF2QnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZJY29uQnV0dG9uOiBuYXZJY29uQnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZJdGVtOiBuYXZJdGVtUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVCdXR0b25Hcm91cDogYnV0dG9uR3JvdXBQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVN3aXRjaDogc3dpdGNoUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXRpdmVTZWxlY3Q6IG5hdGl2ZVNlbGVjdFByZXNldHMuZGVmYXVsdCxcbiAgTXRlVGV4dGFyZWE6IHRleHRhcmVhUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVTa2VsZXRvbjogc2tlbGV0b25QcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVNsaWRlcjogc2xpZGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVSYW5nZVNsaWRlcjogcmFuZ2VTbGlkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVNlZ21lbnRlZENvbnRyb2w6IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzLmRlZmF1bHQsXG59O1xuXG5leHBvcnQgdHlwZSBNb3J0YXJQcmVzZXQgPSB0eXBlb2YgZGVmYXVsdFByZXNldDtcblxuZXhwb3J0IGNvbnN0IHB4UHJlc2V0OiBNb3J0YXJQcmVzZXQgPSB7XG4gIHByZXNldDogJ3B4JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAncHgnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9LFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMucHgsXG4gIE10ZUljb25CdXR0b246IGljb25CdXR0b25QcmVzZXRzLnB4LFxuICBNdGVJY29uOiBpY29uUHJlc2V0cy5weCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5weCxcbiAgTXRlUHJvZ3Jlc3NTcGlubmVyOiBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzLnB4LFxuICBNdGVUb29sYmFyOiB0b29sYmFyUHJlc2V0cy5weCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMucHgsXG4gIE10ZUNhcmRCdXR0b246IGNhcmRCdXR0b25QcmVzZXRzLnB4LFxuICBNdGVUcmVlOiB0cmVlUHJlc2V0cy5weCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLnB4LFxuICBNdGVCYWRnZTogYmFkZ2VQcmVzZXRzLnB4LFxuICBNdGVMaW5rOiBsaW5rUHJlc2V0cy5weCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5weCxcbiAgTXRlSW5wdXQ6IGlucHV0UHJlc2V0cy5weCxcbiAgTXRlRHJhd2VyOiBkcmF3ZXJQcmVzZXRzLnB4LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLnB4LFxuICBNdGVCcmVhZGNydW1iSXRlbTogYnJlYWRjcnVtYkl0ZW1QcmVzZXRzLnB4LFxuICBNdGVNb2RhbDogbW9kYWxQcmVzZXRzLnB4LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLnB4LFxuICBNdGVSYWRpbzogcmFkaW9QcmVzZXRzLnB4LFxuICBNdGVOYXZSb290OiBuYXZSb290UHJlc2V0cy5weCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLnB4LFxuICBNdGVOYXZTdWJIZWFkZXI6IG5hdlN1YkhlYWRlclByZXNldHMucHgsXG4gIE10ZU5hdlNpZGViYXI6IG5hdlNpZGViYXJQcmVzZXRzLnB4LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5weCxcbiAgTXRlTmF2Rm9vdGVyOiBuYXZGb290ZXJQcmVzZXRzLnB4LFxuICBNdGVOYXZCdXR0b246IG5hdkJ1dHRvblByZXNldHMucHgsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLnB4LFxuICBNdGVOYXZJdGVtOiBuYXZJdGVtUHJlc2V0cy5weCxcbiAgTXRlQnV0dG9uR3JvdXA6IGJ1dHRvbkdyb3VwUHJlc2V0cy5weCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLnB4LFxuICBNdGVOYXRpdmVTZWxlY3Q6IG5hdGl2ZVNlbGVjdFByZXNldHMucHgsXG4gIE10ZVRleHRhcmVhOiB0ZXh0YXJlYVByZXNldHMucHgsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMucHgsXG4gIE10ZVNsaWRlcjogc2xpZGVyUHJlc2V0cy5weCxcbiAgTXRlUmFuZ2VTbGlkZXI6IHJhbmdlU2xpZGVyUHJlc2V0cy5weCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMucHgsXG59O1xuXG5leHBvcnQgY29uc3QgY3hQcmVzZXQ6IE1vcnRhclByZXNldCA9IHtcbiAgcHJlc2V0OiAnY3gnLFxuICB0aGVtZToge1xuICAgIG5hbWU6ICdjeCcsXG4gICAgY29sb3JTY2hlbWU6ICdsaWdodCcsXG4gIH0sXG4gIE10ZUJ1dHRvbjogYnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMuY3gsXG4gIE10ZUljb246IGljb25QcmVzZXRzLmN4LFxuICBNdGVQcm9ncmVzc0JhcjogcHJvZ3Jlc3NCYXJQcmVzZXRzLmN4LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMuY3gsXG4gIE10ZVRvb2xiYXI6IHRvb2xiYXJQcmVzZXRzLmN4LFxuICBNdGVDYXJkOiBjYXJkUHJlc2V0cy5jeCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMuY3gsXG4gIE10ZVRyZWU6IHRyZWVQcmVzZXRzLmN4LFxuICBNdGVUYWc6IHRhZ1ByZXNldHMuY3gsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMuY3gsXG4gIE10ZUxpbms6IGxpbmtQcmVzZXRzLmN4LFxuICBNdGVBbGVydDogYWxlcnRQcmVzZXRzLmN4LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLmN4LFxuICBNdGVEcmF3ZXI6IGRyYXdlclByZXNldHMuY3gsXG4gIE10ZUFzaWRlOiBhc2lkZVByZXNldHMuY3gsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMuY3gsXG4gIE10ZU1vZGFsOiBtb2RhbFByZXNldHMuY3gsXG4gIE10ZUNoZWNrYm94OiBjaGVja2JveFByZXNldHMuY3gsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMuY3gsXG4gIE10ZU5hdlJvb3Q6IG5hdlJvb3RQcmVzZXRzLmN4LFxuICBNdGVOYXZIZWFkZXI6IG5hdkhlYWRlclByZXNldHMuY3gsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5jeCxcbiAgTXRlTmF2U2lkZWJhcjogbmF2U2lkZWJhclByZXNldHMuY3gsXG4gIE10ZU5hdkNvbnRlbnQ6IG5hdkNvbnRlbnRQcmVzZXRzLmN4LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMuY3gsXG4gIE10ZU5hdkJ1dHRvbjogbmF2QnV0dG9uUHJlc2V0cy5jeCxcbiAgTXRlTmF2SWNvbkJ1dHRvbjogbmF2SWNvbkJ1dHRvblByZXNldHMuY3gsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLmN4LFxuICBNdGVCdXR0b25Hcm91cDogYnV0dG9uR3JvdXBQcmVzZXRzLmN4LFxuICBNdGVTd2l0Y2g6IHN3aXRjaFByZXNldHMuY3gsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5jeCxcbiAgTXRlVGV4dGFyZWE6IHRleHRhcmVhUHJlc2V0cy5jeCxcbiAgTXRlU2tlbGV0b246IHNrZWxldG9uUHJlc2V0cy5jeCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLmN4LFxuICBNdGVSYW5nZVNsaWRlcjogcmFuZ2VTbGlkZXJQcmVzZXRzLmN4LFxuICBNdGVTZWdtZW50ZWRDb250cm9sOiBzZWdtZW50ZWRDb250cm9sUHJlc2V0cy5jeCxcbn07XG5cbmV4cG9ydCBjb25zdCByeFByZXNldDogTW9ydGFyUHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdyeCcsXG4gIHRoZW1lOiB7XG4gICAgbmFtZTogJ3J4JyxcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSxcbiAgTXRlQnV0dG9uOiBidXR0b25QcmVzZXRzLnJ4LFxuICBNdGVJY29uQnV0dG9uOiBpY29uQnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMucngsXG4gIE10ZVByb2dyZXNzQmFyOiBwcm9ncmVzc0JhclByZXNldHMucngsXG4gIE10ZVByb2dyZXNzU3Bpbm5lcjogcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cy5yeCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMucngsXG4gIE10ZUNhcmQ6IGNhcmRQcmVzZXRzLnJ4LFxuICBNdGVDYXJkQnV0dG9uOiBjYXJkQnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMucngsXG4gIE10ZVRhZzogdGFnUHJlc2V0cy5yeCxcbiAgTXRlQmFkZ2U6IGJhZGdlUHJlc2V0cy5yeCxcbiAgTXRlTGluazogbGlua1ByZXNldHMucngsXG4gIE10ZUFsZXJ0OiBhbGVydFByZXNldHMucngsXG4gIE10ZUlucHV0OiBpbnB1dFByZXNldHMucngsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5yeCxcbiAgTXRlQXNpZGU6IGFzaWRlUHJlc2V0cy5yeCxcbiAgTXRlQnJlYWRjcnVtYkl0ZW06IGJyZWFkY3J1bWJJdGVtUHJlc2V0cy5yeCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5yeCxcbiAgTXRlQ2hlY2tib3g6IGNoZWNrYm94UHJlc2V0cy5yeCxcbiAgTXRlUmFkaW86IHJhZGlvUHJlc2V0cy5yeCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMucngsXG4gIE10ZU5hdkhlYWRlcjogbmF2SGVhZGVyUHJlc2V0cy5yeCxcbiAgTXRlTmF2U3ViSGVhZGVyOiBuYXZTdWJIZWFkZXJQcmVzZXRzLnJ4LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5yeCxcbiAgTXRlTmF2Q29udGVudDogbmF2Q29udGVudFByZXNldHMucngsXG4gIE10ZU5hdkZvb3RlcjogbmF2Rm9vdGVyUHJlc2V0cy5yeCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLnJ4LFxuICBNdGVOYXZJY29uQnV0dG9uOiBuYXZJY29uQnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlTmF2SXRlbTogbmF2SXRlbVByZXNldHMucngsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMucngsXG4gIE10ZVN3aXRjaDogc3dpdGNoUHJlc2V0cy5yeCxcbiAgTXRlTmF0aXZlU2VsZWN0OiBuYXRpdmVTZWxlY3RQcmVzZXRzLnJ4LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLnJ4LFxuICBNdGVTa2VsZXRvbjogc2tlbGV0b25QcmVzZXRzLnJ4LFxuICBNdGVTbGlkZXI6IHNsaWRlclByZXNldHMucngsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMucngsXG4gIE10ZVNlZ21lbnRlZENvbnRyb2w6IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzLnJ4LFxufTtcbiIsICJpbXBvcnQgeyBjeFByZXNldCwgZGVmYXVsdFByZXNldCwgTW9ydGFyUHJlc2V0LCBweFByZXNldCwgcnhQcmVzZXQgfSBmcm9tICcuL3ByZXNldHMnO1xuaW1wb3J0IHsgY29tcHV0ZWQsIFNpZ25hbCwgc2lnbmFsIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuY2xhc3MgX010ZVByZXNldFNlcnZpY2Uge1xuICBwcml2YXRlIHByZXNldHMgPSBuZXcgTWFwPHN0cmluZywgTW9ydGFyUHJlc2V0PihbXG4gICAgWydnbG9iYWwnLCBkZWZhdWx0UHJlc2V0XSxcbiAgICBbJ2RlZmF1bHQnLCBkZWZhdWx0UHJlc2V0XSxcbiAgICBbJ3B4JywgcHhQcmVzZXRdLFxuICAgIFsnY3gnLCBjeFByZXNldF0sXG4gICAgWydyeCcsIHJ4UHJlc2V0XSxcbiAgXSk7XG5cbiAgcHJpdmF0ZSBwcmVzZXRDaGFuZ2VkU2lnbmFsID0gc2lnbmFsPHsgcHJlc2V0TmFtZTogc3RyaW5nOyBjb21wb25lbnROYW1lOiBzdHJpbmcgfT4oe1xuICAgIHByZXNldE5hbWU6IG51bGwsXG4gICAgY29tcG9uZW50TmFtZTogbnVsbCxcbiAgfSk7XG5cbiAgcHVibGljIHNldFByZXNldChwcmVzZXROYW1lOiBzdHJpbmcsIHByZXNldDogUGFydGlhbDxNb3J0YXJQcmVzZXQ+KSB7XG4gICAgdGhpcy5wcmVzZXRzLnNldChwcmVzZXROYW1lLCB7XG4gICAgICAuLi4odGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKSA/PyBkZWZhdWx0UHJlc2V0KSxcbiAgICAgIC4uLnByZXNldCxcbiAgICB9KTtcbiAgICB0aGlzLnByZXNldENoYW5nZWRTaWduYWwuc2V0KHsgcHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZTogbnVsbCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb21wb25lbnRQcmVzZXQ8QyBleHRlbmRzIGtleW9mIE1vcnRhclByZXNldD4oXG4gICAgcHJlc2V0TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudE5hbWU6IEMsXG4gICAgY29tcG9uZW50UHJlc2V0OiBQYXJ0aWFsPE1vcnRhclByZXNldFtDXT5cbiAgKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpID8/IGRlZmF1bHRQcmVzZXQ7XG4gICAgdGhpcy5wcmVzZXRzLnNldChwcmVzZXROYW1lLCB7XG4gICAgICAuLi5zZWxlY3RlZFByZXNldCxcbiAgICAgIFtjb21wb25lbnROYW1lXToge1xuICAgICAgICAuLi4oc2VsZWN0ZWRQcmVzZXRbY29tcG9uZW50TmFtZV0gPz8gKHt9IGFzIGFueSkpLFxuICAgICAgICAuLi5jb21wb25lbnRQcmVzZXQsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbC5zZXQoeyBwcmVzZXROYW1lLCBjb21wb25lbnROYW1lIH0pO1xuICB9XG5cbiAgcHVibGljIHNldENvbXBvbmVudFByZXNldFByb3BlcnR5PEMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXQsIFAgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXRbQ10+KFxuICAgIHByZXNldE5hbWU6IHN0cmluZyxcbiAgICBjb21wb25lbnROYW1lOiBDLFxuICAgIHByb3BlcnR5TmFtZTogUCxcbiAgICB2YWx1ZTogTW9ydGFyUHJlc2V0W0NdW1BdIHwgUGFydGlhbDxNb3J0YXJQcmVzZXRbQ11bUF0+XG4gICkge1xuICAgIGNvbnN0IHNlbGVjdGVkUHJlc2V0ID0gdGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKSA/PyBkZWZhdWx0UHJlc2V0O1xuICAgIGNvbnN0IHNlbGVjdGVkQ29tcG9uZW50UHJlc2V0ID0gc2VsZWN0ZWRQcmVzZXRbY29tcG9uZW50TmFtZV0gYXMgYW55O1xuXG4gICAgLy8gSWYgc2V0dGluZyBhbiBvYmplY3QgdmFsdWUgYmUgc3VyZSB0byBzcHJlYWQgb3ZlciBleGlzdGluZyB2YWx1ZVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgICAgLi4uc2VsZWN0ZWRQcmVzZXQsXG4gICAgICAgIFtjb21wb25lbnROYW1lXToge1xuICAgICAgICAgIC4uLnNlbGVjdGVkQ29tcG9uZW50UHJlc2V0LFxuICAgICAgICAgIFtwcm9wZXJ0eU5hbWVdOiB7XG4gICAgICAgICAgICAuLi5zZWxlY3RlZENvbXBvbmVudFByZXNldFtwcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgICAgLi4udmFsdWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UganVzdCBzZXQgdGhlIHZhbHVlXG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnByZXNldHMuc2V0KHByZXNldE5hbWUsIHtcbiAgICAgICAgLi4uc2VsZWN0ZWRQcmVzZXQsXG4gICAgICAgIFtjb21wb25lbnROYW1lXToge1xuICAgICAgICAgIC4uLnNlbGVjdGVkQ29tcG9uZW50UHJlc2V0LFxuICAgICAgICAgIFtwcm9wZXJ0eU5hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnByZXNldENoYW5nZWRTaWduYWwuc2V0KHsgcHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQcmVzZXQocHJlc2V0TmFtZTogc3RyaW5nKTogTW9ydGFyUHJlc2V0IHtcbiAgICBjb25zdCBwcmVzZXQgPSB0aGlzLnByZXNldHMuZ2V0KHByZXNldE5hbWUpO1xuICAgIGlmICghcHJlc2V0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBNdGVQcmVzZXRTZXJ2aWNlOiBBIHByZXNldCB3aXRoIHRoZSBuYW1lIFwiJHtwcmVzZXROYW1lfVwiIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgfVxuICAgIHJldHVybiBwcmVzZXQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29tcG9uZW50UHJlc2V0PEMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXQ+KFxuICAgIHByZXNldE5hbWU6IHN0cmluZyxcbiAgICBjb21wb25lbnROYW1lOiBDXG4gICk6IE1vcnRhclByZXNldFtDXSB7XG4gICAgY29uc3QgcHJlc2V0ID0gdGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKTtcbiAgICBjb25zdCBjb21wb25lbnRQcmVzZXQgPSBwcmVzZXRbY29tcG9uZW50TmFtZV07XG4gICAgaWYgKCFwcmVzZXQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE10ZVByZXNldFNlcnZpY2U6IEEgcHJlc2V0IHdpdGggdGhlIG5hbWUgXCIke3ByZXNldE5hbWV9XCIgZG9lcyBub3QgZXhpc3QuYCk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRQcmVzZXQ7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0UHJlc2V0KHByZXNldE5hbWU6IHN0cmluZyk6IFNpZ25hbDxNb3J0YXJQcmVzZXQ+IHtcbiAgICBsZXQgZmlyc3RFbWl0ID0gdHJ1ZTtcbiAgICByZXR1cm4gY29tcHV0ZWQodGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLCAoY2hhbmdlLCBzZXQpID0+IHtcbiAgICAgIGlmIChmaXJzdEVtaXQpIHtcbiAgICAgICAgc2V0KHRoaXMuZ2V0UHJlc2V0KHByZXNldE5hbWUpKTtcbiAgICAgICAgZmlyc3RFbWl0ID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5wcmVzZXROYW1lID09PSBwcmVzZXROYW1lKSB7XG4gICAgICAgIHNldCh0aGlzLmdldFByZXNldChwcmVzZXROYW1lKSk7XG4gICAgICB9XG4gICAgfSkgYXMgU2lnbmFsPE1vcnRhclByZXNldD47XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Q29tcG9uZW50UHJlc2V0PEMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXQ+KFxuICAgIHByZXNldE5hbWU6IHN0cmluZyxcbiAgICBjb21wb25lbnROYW1lOiBDXG4gICk6IFNpZ25hbDxNb3J0YXJQcmVzZXRbQ10+IHtcbiAgICBsZXQgZmlyc3RFbWl0ID0gdHJ1ZTtcbiAgICByZXR1cm4gY29tcHV0ZWQodGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLCAoY2hhbmdlLCBzZXQpID0+IHtcbiAgICAgIGlmIChmaXJzdEVtaXQpIHtcbiAgICAgICAgc2V0KHRoaXMuZ2V0Q29tcG9uZW50UHJlc2V0KHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWUpKTtcbiAgICAgICAgZmlyc3RFbWl0ID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAoY2hhbmdlLnByZXNldE5hbWUgPT09IHByZXNldE5hbWUgJiYgIWNoYW5nZS5jb21wb25lbnROYW1lKSB8fFxuICAgICAgICAoY2hhbmdlLnByZXNldE5hbWUgPT09IHByZXNldE5hbWUgJiYgY2hhbmdlLmNvbXBvbmVudE5hbWUgPT09IGNvbXBvbmVudE5hbWUpXG4gICAgICApIHtcbiAgICAgICAgc2V0KHRoaXMuZ2V0Q29tcG9uZW50UHJlc2V0KHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWUpKTtcbiAgICAgIH1cbiAgICB9KSBhcyBTaWduYWw8TW9ydGFyUHJlc2V0W0NdPjtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlUHJlc2V0U2VydmljZSA9IG5ldyBfTXRlUHJlc2V0U2VydmljZSgpO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXMgKi9cbmltcG9ydCB7IENvbnRleHRDb25zdW1lciB9IGZyb20gJ0BsaXQtbGFicy9jb250ZXh0JztcbmltcG9ydCB7IFByb3BlcnR5RGVjbGFyYXRpb24sIFJlYWN0aXZlRWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBDb25zdHJ1Y3RvcixcbiAgaXNTc3IsXG4gIE10ZUVsZW1lbnQsXG4gIE10ZVByZXNldFNlcnZpY2UsXG4gIHByZXNldENvbnRleHQsXG4gIHNpZ25hbCxcbiAgY29tcHV0ZWQsXG4gIFVuc3Vic2NyaWJlcixcbn0gZnJvbSAnLi4vJztcbmltcG9ydCB7IE1vcnRhclByZXNldCB9IGZyb20gJy4vcHJlc2V0cyc7XG5cbmV4cG9ydCB0eXBlIFByZXNldE9wdGlvbnMgPSAnbWQnIHwgJ3NtJyB8ICdsZycgfCBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByZXNldEVsZW1lbnRJbnRlcmZhY2U8UD4ge1xuICAvKiogQGlnbm9yZSAqL1xuICByZWFkb25seSBfX2NvbXBvbmVudE5hbWU6IGtleW9mIE1vcnRhclByZXNldDtcblxuICAvKiogU2VsZWN0cyB0aGUgcHJlc2V0IGZvciB0aGlzIGNvbXBvbmVudC4gT3ZlcnJpZGVzIHRoZSBnbG9iYWwgcHJlc2V0IGZvciB0aGlzIGluc3RhbmNlIG9mIHRoaXMgY29tcG9uZW50LiAqL1xuICBwcmVzZXQ6IHN0cmluZztcblxuICAvKiogQGlnbm9yZSAqL1xuICBhcHBsaWVkUHJlc2V0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJlc2V0TWl4aW5GYWN0b3J5T3B0aW9ucyB7XG4gIHJlZmxlY3RBcHBsaWVkUHJlc2V0OiBib29sZWFuO1xufVxuXG5jb25zdCB7XG4gIGlzLFxuICBkZWZpbmVQcm9wZXJ0eSxcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGdldFByb3RvdHlwZU9mLFxufSA9IE9iamVjdDtcblxuZXhwb3J0IGNvbnN0IFByZXNldE1peGluRmFjdG9yeSA9IDxQPihcbiAgY29tcG9uZW50TmFtZToga2V5b2YgTW9ydGFyUHJlc2V0LFxuICBvcHRpb25zOiBQcmVzZXRNaXhpbkZhY3RvcnlPcHRpb25zID0geyByZWZsZWN0QXBwbGllZFByZXNldDogZmFsc2UgfVxuKSA9PiB7XG4gIHJldHVybiA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gICAgY2xhc3MgUHJlc2V0RWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgcmVhZG9ubHkgX19jb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZTtcblxuICAgICAgLyoqIE1hcCB0aGF0IHN0b3JlcyBwcml2YXRlIHZhbHVlcyB0aGF0IHRha2UgcHJlY2VkZW5jZSBvdmVyIHByZXNldCB2YWx1ZXMgKi9cbiAgICAgIHByb3RlY3RlZCBfdmFsdWVNYXAgPSBuZXcgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPigpO1xuXG4gICAgICAvKiogTWFwIHRoYXQgc3RvcmVzIGZhbGxiYWNrIHByZXNldCB2YWx1ZXMgZW1pdHRlZCBieSB0aGUgcHJlc2V0Q29udHJvbGxlciAqL1xuICAgICAgcHJvdGVjdGVkIF9wcmVzZXRNYXAgPSBuZXcgTWFwPFByb3BlcnR5S2V5LCBQW2tleW9mIFBdPigpO1xuXG4gICAgICAvKiogU2VsZWN0cyBhIHNwZWNpZmljIHByZXNldCBmb3IgdGhpcyBjb21wb25lbnQgaW5zdGFuY2UuIE92ZXJyaWRlcyB0aGUgY3VycmVudCBnbG9iYWwgcHJlc2V0LiAqL1xuICAgICAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KVxuICAgICAgc2V0IHByZXNldChwcmVzZXQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcmVzZXQgPSBwcmVzZXQ7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVByZXNldFNpZ25hbC5zZXQocHJlc2V0KTtcbiAgICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgICAvLyBTdG9wIFNTUiBjb25zdHJ1Y3RvciBsaXN0ZW5lciBpZiBzdGlsbCBvcGVuLlxuICAgICAgICAgIHRoaXMuc3NyQ29uc3RydWN0b3JTdWI/LigpO1xuICAgICAgICAgIHRoaXMuc3NyQ29uc3RydWN0b3JTdWIgPSBudWxsO1xuICAgICAgICAgIGNvbnN0IHByZXNldCA9IE10ZVByZXNldFNlcnZpY2UuZ2V0UHJlc2V0KHRoaXMucHJlc2V0ID8/ICdnbG9iYWwnKTtcbiAgICAgICAgICB0aGlzLmhhbmRsZVNzclByZXNldENoYW5nZXMocHJlc2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZ2V0IHByZXNldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZXNldDtcbiAgICAgIH1cbiAgICAgIHByaXZhdGUgX3ByZXNldCA9ICdnbG9iYWwnO1xuXG4gICAgICBAcHJvcGVydHkoeyByZWZsZWN0OiBvcHRpb25zPy5yZWZsZWN0QXBwbGllZFByZXNldCA/PyBmYWxzZSB9KSBhcHBsaWVkUHJlc2V0ID0gJ2dsb2JhbCc7XG5cbiAgICAgIEBzdGF0ZSgpIHByaXZhdGUgX2FwcGxpZWRQcmVzZXQ/OiBzdHJpbmc7XG5cbiAgICAgIC8qKiBLZWVwcyBjb25zdHJ1Y3RvciBwcmVzZXQgc3Vic2NyaXB0aW9uIG9wZW4gdW50aWwgd2lsbFVwZGF0ZSAqL1xuICAgICAgcHJpdmF0ZSBzc3JDb25zdHJ1Y3RvclN1YjogVW5zdWJzY3JpYmVyO1xuICAgICAgcHJpdmF0ZSBwcmV2aW91c0NvbXBvbmVudFVuc3ViOiBVbnN1YnNjcmliZXI7XG5cbiAgICAgIC8qKiBFbWl0cyB3aGVuZXZlciB0aGUgbG9jYWwgcHJlc2V0IHZhbHVlIGNoYW5nZXMuICovXG4gICAgICBwcml2YXRlIF9hY3RpdmVQcmVzZXRTaWduYWwgPSBzaWduYWw8c3RyaW5nPihudWxsKTtcbiAgICAgIHByaXZhdGUgX3BhcmVudFByZXNldFNpZ25hbCA9IHNpZ25hbDxzdHJpbmc+KG51bGwpO1xuXG4gICAgICBwcml2YXRlIF9wcmVzZXRDb250ZXh0ID0gbmV3IENvbnRleHRDb25zdW1lcih0aGlzLCB7XG4gICAgICAgIGNvbnRleHQ6IHByZXNldENvbnRleHQsXG4gICAgICAgIHN1YnNjcmliZTogdHJ1ZSxcbiAgICAgICAgY2FsbGJhY2s6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3BhcmVudFByZXNldFNpZ25hbC5zZXQoKHZhbHVlID09PSAnJyA/IG51bGwgOiB2YWx1ZSkgPz8gJ2dsb2JhbCcpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGdldFByb3BlcnR5RGVzY3JpcHRvciBtZXRob2QgdG8gY2hlY2sgZm9yIHRoZSBjdXN0b21cbiAgICAgICAqIGBpc1ByZXNldGAgb3B0aW9uLiBEZXNjcmlwdG9ycyBvZiBwcm9wZXJ0aWVzIHRoYXQgYXJlIGRlY2xhcmVkIHdpdGggdGhlIGBpc1ByZXNldGBcbiAgICAgICAqIG9wdGlvbiBhcmUgZGVmaW5lZCB3aXRoIHNwZWNpYWwgZ2V0dGVyL3NldHRlciBsb2dpYyB0aGF0IHNldHMgdmFsdWUgdG8gdmFsdWVNYXBcbiAgICAgICAqIGFuZCBnZXRzIHZhbHVlcyBmcm9tIHRoZSB2YWx1ZU1hcCBidXQgdGhlbiBhbHNvIGZhbGxzIGJhY2sgdG8gYW55IHZhbHVlIGluIHRoZSBwcmVzZXRNYXBcbiAgICAgICAqXG4gICAgICAgKiBUaGUgcHJlc2V0TWFwIGlzIHBvcHVsYXRlZCBhYm92ZSBmcm9tIHZhbHVlcyBmcm9tIHRoZSBwcmVzZXRDb250cm9sbGVyIHdoZW5ldmVyIHRoZVxuICAgICAgICogcHJlc2V0IGZvciB0aGlzIGNvbXBvbmVudCBpcyBjaGFuZ2VkIGdsb2JhbGx5LlxuICAgICAgICovXG4gICAgICBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKFxuICAgICAgICBuYW1lOiBQcm9wZXJ0eUtleSxcbiAgICAgICAga2V5OiBzdHJpbmcgfCBzeW1ib2wsXG4gICAgICAgIG9wdGlvbnM6IFByb3BlcnR5RGVjbGFyYXRpb25cbiAgICAgICkge1xuICAgICAgICBjb25zdCB7IGdldCwgc2V0IH0gPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcy5wcm90b3R5cGUsIG5hbWUpID8/IHtcbiAgICAgICAgICBnZXQodGhpczogUmVhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1trZXkgYXMga2V5b2YgdHlwZW9mIHRoaXNdO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCwgdjogdW5rbm93bikge1xuICAgICAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nIHwgc3ltYm9sLCB1bmtub3duPilba2V5XSA9IHY7XG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBnZXQodGhpczogUmVhY3RpdmVFbGVtZW50KTogYW55IHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgZ2V0dGVyIGxvZ2ljIHRoYXQgZ2V0cyBmcm9tIHRoZSB2YWx1ZU1hcCBvciBwcmVzZXRNYXBcbiAgICAgICAgICAgIGlmIChvcHRpb25zWydpc1ByZXNldCddKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgKHRoaXMgYXMge30gYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pLl92YWx1ZU1hcCBhcyBNYXA8XG4gICAgICAgICAgICAgICAgICAgIFByb3BlcnR5S2V5LFxuICAgICAgICAgICAgICAgICAgICBQW2tleW9mIFBdXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgKS5nZXQobmFtZSkgfHxcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkuX3ByZXNldE1hcCBhcyBNYXA8XG4gICAgICAgICAgICAgICAgICAgIFByb3BlcnR5S2V5LFxuICAgICAgICAgICAgICAgICAgICBQW2tleW9mIFBdXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgKS5nZXQobmFtZSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlZmF1bHQgcHJvcGVydHkgZ2V0dGVyIGxvZ2ljXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGdldD8uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQsIHZhbHVlOiB1bmtub3duKSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIHNldHRlciBsb2dpYyB0aGF0IHNldHMgdG8gdGhlIHZhbHVlTWFwXG4gICAgICAgICAgICBpZiAob3B0aW9uc1snaXNQcmVzZXQnXSkge1xuICAgICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IChcbiAgICAgICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkuX3ZhbHVlTWFwIGFzIE1hcDxQcm9wZXJ0eUtleSwgUFtrZXlvZiBQXT5cbiAgICAgICAgICAgICAgKS5nZXQobmFtZSk7XG4gICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkuX3ZhbHVlTWFwIGFzIE1hcDxQcm9wZXJ0eUtleSwgUFtrZXlvZiBQXT5cbiAgICAgICAgICAgICAgKS5zZXQobmFtZSwgdmFsdWUgYXMgYW55KTtcbiAgICAgICAgICAgICAgLy8gRHVyaW5nIFNTUiB3ZSBuZWVkIHRvIHVwZGF0ZSBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgICAgICAgICh0aGlzIGFzIHVua25vd24gYXMgUmVhY3RpdmVFbGVtZW50KS5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBPbiB0aGUgY2xpZW50IHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGN1cnJlbnQgdXBkYXRlIHRvIGZpbmlzaFxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBSZWFjdGl2ZUVsZW1lbnQpLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEZWZhdWx0IHByb3BlcnR5IHNldHRlciBsb2dpY1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gZ2V0Py5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICBzZXQhLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlYWN0aXZlRWxlbWVudCkucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgICAgLy8gU3Vic2NyaWJlcyBmb3IgY2hhbmdlcyB0byB0aGlzIGNvbXBvbmVudHMgYWN0aXZlIHByZXNldCB0byB1cGRhdGUgYWxsIHJlbGV2YW50IHByb3BzIHByZXNldCB2YWx1ZXNcbiAgICAgICAgdGhpcy5zdWJzLnB1c2goXG4gICAgICAgICAgY29tcHV0ZWQoXG4gICAgICAgICAgICBbdGhpcy5fYWN0aXZlUHJlc2V0U2lnbmFsLCB0aGlzLl9wYXJlbnRQcmVzZXRTaWduYWxdLFxuICAgICAgICAgICAgKFthY3RpdmVQcmVzZXQsIHBhcmVudFByZXNldF0sIHNldCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoYWN0aXZlUHJlc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2xvY2FsUHJlc2V0VGhlbWUgPVxuICAgICAgICAgICAgICAgICAgYWN0aXZlUHJlc2V0ID09PSAnZ2xvYmFsJ1xuICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgOiBNdGVQcmVzZXRTZXJ2aWNlLmdldENvbXBvbmVudFByZXNldChhY3RpdmVQcmVzZXQsICd0aGVtZScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX19sb2NhbFByZXNldFRoZW1lID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ3RoZW1lJywgbnVsbCk7XG5cbiAgICAgICAgICAgICAgdGhpcy5fYXBwbGllZFByZXNldCA9IGFjdGl2ZVByZXNldCA/PyBwYXJlbnRQcmVzZXQgPz8gJ2dsb2JhbCc7XG4gICAgICAgICAgICAgIHRoaXMuYXBwbGllZFByZXNldCA9IE10ZVByZXNldFNlcnZpY2UuZ2V0Q29tcG9uZW50UHJlc2V0KFxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGxpZWRQcmVzZXQsXG4gICAgICAgICAgICAgICAgJ3ByZXNldCdcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAvLyBVbnN1YnNjcmliZSB0byBwcmV2aW91cyBjb21wb25lbnQgcHJlc2V0IGNoYW5nZXNcbiAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0NvbXBvbmVudFVuc3ViPy4oKTtcbiAgICAgICAgICAgICAgLy8gVXBkYXRlIHByb3BzIGlmIG5ldyBjb21wb25lbnQgcHJlc2V0IGVtaXRzXG4gICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDb21wb25lbnRVbnN1YiA9IE10ZVByZXNldFNlcnZpY2Uuc2VsZWN0Q29tcG9uZW50UHJlc2V0KFxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGxpZWRQcmVzZXQsXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NvbXBvbmVudE5hbWVcbiAgICAgICAgICAgICAgKS5zdWJzY3JpYmUoKG5ld1ByZXNldCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChuZXdQcmVzZXQpIHtcbiAgICAgICAgICAgICAgICAgIHNldChuZXdQcmVzZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKS5zdWJzY3JpYmUoKG5ld1ByZXNldHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlc01hcCA9IG5ldyBNYXAodGhpcy5fcHJlc2V0TWFwKTtcbiAgICAgICAgICAgIGNvbnN0IG9sZFByb3BzID0gQXJyYXkuZnJvbSh0aGlzLl9wcmVzZXRNYXAua2V5cygpKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gT2JqZWN0LmtleXMobmV3UHJlc2V0cyA/PyB7fSk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBrZXlzIGluIHRoZSBuZXcgcHJlc2V0cyBjbGVhciBhbGwgcHJlc2V0IHZhbHVlc1xuICAgICAgICAgICAgaWYgKG5ld1Byb3BzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBvbGQgc2V0IHByb3BzIGFuZCBuZXcgb25lc1xuICAgICAgICAgICAgLy8gUmVtb3ZlIG9sZCBvbmVzICYgc2V0IG5ldyBvbmVzXG4gICAgICAgICAgICAvLyBGaW5hbGx5IGZvcmNlIGFuIHVwZGF0ZSBmb3IgZWFjaCBwcm9wXG4gICAgICAgICAgICBbLi4ub2xkUHJvcHMsIC4uLm5ld1Byb3BzXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG5ld1ByZXNldHNba2V5XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5zZXQoa2V5LCBuZXdQcmVzZXRzW2tleV0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoa2V5LCBvbGRWYWx1ZXNNYXAuZ2V0KGtleSkgPz8gbnVsbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgICAgICB0aGlzLnByZXZpb3VzQ29tcG9uZW50VW5zdWI/LigpO1xuICAgICAgICB0aGlzLnNzckNvbnN0cnVjdG9yU3ViPy4oKTtcbiAgICAgIH1cblxuICAgICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgc3VwZXIoYXJncyk7XG5cbiAgICAgICAgLy8gVE9ETyhyZWVjZSk6IEVuc3VyZSB3ZSB1cGRhdGUgdGhpcyB0byBzdXBwb3J0IGNvbnRleHQgd2hlbiB0aGF0IGlzIFNTUiBGcmllbmRseTogaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzMzNjVcbiAgICAgICAgLy8gSGFuZGxlIHNldHRpbmcgcHJlc2V0IGRlZmF1bHRzIGluIFNTUlxuICAgICAgICBpZiAoaXNTc3IoKSkge1xuICAgICAgICAgIHRoaXMuc3NyQ29uc3RydWN0b3JTdWIgPSBNdGVQcmVzZXRTZXJ2aWNlLnNlbGVjdFByZXNldCh0aGlzLnByZXNldCA/PyAnZ2xvYmFsJykuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHByZXNldCkgPT4gdGhpcy5oYW5kbGVTc3JQcmVzZXRDaGFuZ2VzKHByZXNldClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByaXZhdGUgaGFuZGxlU3NyUHJlc2V0Q2hhbmdlcyhwcmVzZXQ6IE1vcnRhclByZXNldCkge1xuICAgICAgICBpZiAocHJlc2V0KSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50UHJlc2V0cyA9IHByZXNldFt0aGlzLl9fY29tcG9uZW50TmFtZV07XG4gICAgICAgICAgY29uc3Qgb2xkUHJvcHMgPSBBcnJheS5mcm9tKHRoaXMuX3ByZXNldE1hcC5rZXlzKCkpO1xuICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gT2JqZWN0LmtleXMoY29tcG9uZW50UHJlc2V0cyA/PyB7fSk7XG5cbiAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8ga2V5cyBpbiB0aGUgbmV3IHByZXNldHMgY2xlYXIgYWxsIHByZXNldCB2YWx1ZXNcbiAgICAgICAgICBpZiAobmV3UHJvcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuY2xlYXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG9sZCBzZXQgcHJvcHMgYW5kIG5ldyBvbmVzXG4gICAgICAgICAgLy8gUmVtb3ZlIG9sZCBvbmVzICYgc2V0IG5ldyBvbmVzXG4gICAgICAgICAgLy8gRmluYWxseSBmb3JjZSBhbiB1cGRhdGUgZm9yIGVhY2ggcHJvcFxuICAgICAgICAgIFsuLi5vbGRQcm9wcywgLi4ubmV3UHJvcHNdLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudFByZXNldHNba2V5XSkge1xuICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuc2V0KGtleSwgY29tcG9uZW50UHJlc2V0c1trZXldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3ByZXNldE1hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShrZXksIG51bGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuYXBwbGllZFByZXNldCA9IHByZXNldFsncHJlc2V0J107XG4gICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCdhcHBsaWVkUHJlc2V0JywgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFByZXNldEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8UHJlc2V0RWxlbWVudEludGVyZmFjZTxQPj4gJiBUO1xuICB9O1xufTtcbiIsICJpbXBvcnQgeyBQcm9wZXJ0eURlY2xhcmF0aW9uIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcHJvcGVydHkuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlc2V0UHJvcGVydHk8VD4ob3B0aW9ucz86IFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgcmV0dXJuIHByb3BlcnR5KHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGlzUHJlc2V0OiB0cnVlLFxuICB9IGFzIGFueSk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ0BsaXQtbGFicy9jb250ZXh0JztcblxuZXhwb3J0IGNvbnN0IHByZXNldENvbnRleHQgPSBjcmVhdGVDb250ZXh0PHN0cmluZz4oJ01URV9QUkVTRVQnKTtcbiIsICJpbXBvcnQgeyBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IE10ZVByZXNldFNlcnZpY2UgfSBmcm9tICcuLi9wcmVzZXRzJztcbmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IE10ZUVsZW1lbnQgfSBmcm9tICcuLi9iYXNlLWNsYXNzZXMnO1xuXG5jb25zdCBnbG9iYWxQcmVzZXQkID0gTXRlUHJlc2V0U2VydmljZS5zZWxlY3RQcmVzZXQoJ2dsb2JhbCcpO1xuY29uc3QgZ2xvYmFsUHJlc2V0TmFtZSQgPSBjb21wdXRlZChnbG9iYWxQcmVzZXQkLCAocHJlc2V0KSA9PiBwcmVzZXQucHJlc2V0KTtcblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWVkUHJlc2V0Q29udGV4dCB7XG4gIHByZXNldE5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBQcmVzZXQgaXMgZGV0ZXJtaW5lZCBmcm9tIGVpdGhlciB0aGUgcGFyZW50IHByZXNldCBjb250ZXh0IG9yIGEgbG9jYWwgcHJlc2V0IHByb3BlcnR5LlxuICogVGhpcyBjb250cm9sbGVyIGtlZXBzIHRyYWNrIG9mIHRoZSBhY3R1YWwgYWN0aXZlIHByZXNldCBhcHBsaWVkIHRvIHRoZSBjdXJyZW50IGNvbXBvbmVudC5cbiAqIElmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4gaXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgdGhhdCBjb250ZXh0IGNoYW5nZXMuIE90aGVyd2lzZSBjb250cm9sbGVyXG4gKiBtZXRob2RzIGNhbiBiZSBjYWxsZWQgd2hlbiBuZWVkZWQuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZCBldmVuIHdpdGhpbiBlbGVtZW50cyB0aGF0IGRvIG5vdCBoYXZlIHRoZWlyIG93biBwcmVzZXRcbiAqIG9wdGlvbnMgKGFrYSBleHRlbmQgdGhlIHByZXNldE1peGluKS5cbiAqL1xuZXhwb3J0IGNsYXNzIEFwcGxpZWRQcmVzZXRDb250ZXh0Q29udHJvbGxlciB7XG4gIHByaXZhdGUgYXBwbGllZFByZXNldE5hbWUgPSAnZ2xvYmFsJztcbiAgcHJpdmF0ZSBhY3RpdmVHbG9iYWxQcmVzZXROYW1lID0gJ2RlZmF1bHQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaG9zdDogUmVhY3RpdmVDb250cm9sbGVySG9zdCAmIE10ZUVsZW1lbnQsXG4gICAgcHJpdmF0ZSBjYWxsYmFjaz86IChjb250ZXh0OiBBcHBsaWVkUHJlc2V0Q29udGV4dCkgPT4gdm9pZFxuICApIHtcbiAgICB0aGlzLmhvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gIH1cblxuICBob3N0Q29ubmVjdGVkKCkge1xuICAgIHRoaXMuaG9zdC5zdWJzLnB1c2goXG4gICAgICBnbG9iYWxQcmVzZXROYW1lJC5zdWJzY3JpYmUoKGdsb2JhbFByZXNldE5hbWUpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVHbG9iYWxQcmVzZXROYW1lID0gZ2xvYmFsUHJlc2V0TmFtZTtcbiAgICAgICAgdGhpcy51cGRhdGVBcHBsaWVkUHJlc2V0Q29udGV4dCgpO1xuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuZXhlY0NhbGxiYWNrKCk7XG4gIH1cblxuICBob3N0VXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlQXBwbGllZFByZXNldENvbnRleHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY0NhbGxiYWNrKCkge1xuICAgIHRoaXMuY2FsbGJhY2s/Lih7XG4gICAgICBwcmVzZXROYW1lOiB0aGlzLmFwcGxpZWRQcmVzZXROYW1lLFxuICAgIH0gYXMgQXBwbGllZFByZXNldENvbnRleHQpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVBcHBsaWVkUHJlc2V0Q29udGV4dCgpIHtcbiAgICBsZXQgdXBkYXRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IG5ld1ByZXNldE5hbWUgPSAodGhpcy5ob3N0IGFzIGFueSkuYXBwbGllZFByZXNldCA/PyB0aGlzLmFjdGl2ZUdsb2JhbFByZXNldE5hbWU7XG4gICAgaWYgKG5ld1ByZXNldE5hbWUgIT09IHRoaXMuYXBwbGllZFByZXNldE5hbWUpIHtcbiAgICAgIHRoaXMuYXBwbGllZFByZXNldE5hbWUgPSBuZXdQcmVzZXROYW1lO1xuICAgICAgdXBkYXRlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkKSB7XG4gICAgICB0aGlzLmV4ZWNDYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVQcmVzZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGxpZWRQcmVzZXROYW1lO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9iYXNlLmpzJztcbi8qKlxuICogSXRlbXMgaW4gdGhpcyBmaWxlIGFyZSBtb2RpZmljYXRpb25zIG9mIG9mIHRoZSBkZWNvcmF0b3JzIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9ibG9iL21haW4vcGFja2FnZXMvcmVhY3RpdmUtZWxlbWVudC9zcmMvZGVjb3JhdG9ycy9jdXN0b20tZWxlbWVudC50c1xuICpcbiAqIFdlJ3ZlIGFkZGVkIGNoZWNrcyB0byBwcmV2ZW50IHJlLXJlZ2lzdHJhdGlvbnMgZnJvbSB0aHJvd2luZyBoYXJkIGVycm9ycy5cbiAqL1xuXG4vKipcbiAqIEFsbG93IGZvciBjdXN0b20gZWxlbWVudCBjbGFzc2VzIHdpdGggcHJpdmF0ZSBjb25zdHJ1Y3RvcnNcbiAqL1xudHlwZSBDdXN0b21FbGVtZW50Q2xhc3MgPSBPbWl0PHR5cGVvZiBIVE1MRWxlbWVudCwgJ25ldyc+O1xuXG5leHBvcnQgdHlwZSBDdXN0b21FbGVtZW50RGVjb3JhdG9yID0ge1xuICAvLyBsZWdhY3lcbiAgKGNsczogQ3VzdG9tRWxlbWVudENsYXNzKTogdm9pZDtcblxuICAvLyBzdGFuZGFyZFxuICAodGFyZ2V0OiBDdXN0b21FbGVtZW50Q2xhc3MsIGNvbnRleHQ6IENsYXNzRGVjb3JhdG9yQ29udGV4dDxDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD4+KTogdm9pZDtcbn07XG5cbi8qKlxuICogQ2xhc3MgZGVjb3JhdG9yIGZhY3RvcnkgdGhhdCBkZWZpbmVzIHRoZSBkZWNvcmF0ZWQgY2xhc3MgYXMgYSBjdXN0b20gZWxlbWVudC5cbiAqXG4gKiBgYGBqc1xuICogQGN1c3RvbUVsZW1lbnQoJ215LWVsZW1lbnQnKVxuICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBgO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqIEBwYXJhbSB0YWdOYW1lIFRoZSB0YWcgbmFtZSBvZiB0aGUgY3VzdG9tIGVsZW1lbnQgdG8gZGVmaW5lLlxuICovXG5leHBvcnQgY29uc3QgZGVmaW5lRWxlbWVudCA9XG4gICh0YWdOYW1lOiBzdHJpbmcpOiBDdXN0b21FbGVtZW50RGVjb3JhdG9yID0+XG4gIChcbiAgICBjbGFzc09yVGFyZ2V0OiBDdXN0b21FbGVtZW50Q2xhc3MgfCBDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD4sXG4gICAgY29udGV4dD86IENsYXNzRGVjb3JhdG9yQ29udGV4dDxDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD4+XG4gICkgPT4ge1xuICAgIGlmIChjb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIoKCkgPT4ge1xuICAgICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldD8uKHRhZ05hbWUpKSB7XG4gICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXNzT3JUYXJnZXQgYXMgQ3VzdG9tRWxlbWVudENvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0Py4odGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXNzT3JUYXJnZXQgYXMgQ3VzdG9tRWxlbWVudENvbnN0cnVjdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0KFtkZW5zaXR5PWNvbXBhY3RdKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHhzKTstLW10ZS1zcGFjZS14czp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14cyk7LS1tdGUtc3BhY2Utc206dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3Qtc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LW1kKTstLW10ZS1zcGFjZS1sZzp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1sZyk7LS1tdGUtc3BhY2UteGw6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eGwpOy0tbXRlLXNwYWNlLXh4eGw6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHh4bCl9Omhvc3QoW2RlbnNpdHk9Y29tZnldKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2UtY29tZnktc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1jb21meS1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1jb21meS14eHhsKX06aG9zdChbZGVuc2l0eT1yb29teV0pey0tbXRlLXNwYWNlLXh4czp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHhzKTstLW10ZS1zcGFjZS14czp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHMpOy0tbXRlLXNwYWNlLXNtOnZhcigtLW10ZS1zcGFjZS1yb29teS1zbSk7LS1tdGUtc3BhY2UtbWQ6dmFyKC0tbXRlLXNwYWNlLXJvb215LW1kKTstLW10ZS1zcGFjZS1sZzp2YXIoLS1tdGUtc3BhY2Utcm9vbXktbGcpOy0tbXRlLXNwYWNlLXhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14bCk7LS1tdGUtc3BhY2UteHhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14eGwpOy0tbXRlLXNwYWNlLXh4eGw6dmFyKC0tbXRlLXNwYWNlLXJvb215LXh4eGwpfWA7IiwgImltcG9ydCB7IExpdEVsZW1lbnQsIFByb3BlcnR5VmFsdWVzIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi8nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEaXNhYmxlZEludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGlzIGNvbXBvbmVudFxuICAgKiBAYXR0ciBkaXNhYmxlZFxuICAgKi9cbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBEaXNhYmxlZE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBEaXNhYmxlZEVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBhdHRyIGRpc2FibGVkXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLy8gQmVjYXVzZSBgYXJpYURpc2FibGVkYCBleGlzdHMgYXMgYSBzdHJpbmcgb24gTGl0RWxlbWVudCB3ZSBjYW5ub3QgZGVjbGFyZSB0aGlzIGEgcHJvcGVydHkgaGVyZVxuICAgIHByb3RlY3RlZCB3aWxsVXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXM8YW55Pik6IHZvaWQge1xuICAgICAgc3VwZXIud2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAoX2NoYW5nZWRQcm9wZXJ0aWVzLmhhcygnZGlzYWJsZWQnKSkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgYCR7dGhpcy5kaXNhYmxlZH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBEaXNhYmxlZEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8RGlzYWJsZWRJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IHByZXNldFByb3BlcnR5IH0gZnJvbSAnLi4vcHJlc2V0cy9wcmVzZXQuZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW52ZXJzZUludGVyZmFjZSB7XG4gIC8qKiBSZW5kZXJzIHRoaXMgY29tcG9uZW50IHdpdGggaW52ZXJzZSB0aGVtaW5nICovXG4gIGludmVyc2U6IGJvb2xlYW47XG5cbiAgLyoqIFNwZWNpYWwgb3B0aW9uIHRvIG92ZXJyaWRlIGludmVyc2Ugd2hlbiBpdCBpcyBzZXQgYnkgYSBwcmVzZXQgKi9cbiAgd2l0aG91dEludmVyc2U6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBJbnZlcnNlTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPExpdEVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIEludmVyc2VFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqIFJlbmRlcnMgdGhpcyBjb21wb25lbnQgd2l0aCBpbnZlcnNlIHRoZW1pbmcgKi9cbiAgICBAcHJlc2V0UHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGludmVyc2UgPSBmYWxzZTtcblxuICAgIC8qKiBTcGVjaWFsIG9wdGlvbiB0byBvdmVycmlkZSBpbnZlcnNlIHdoZW4gaXQgaXMgc2V0IGJ5IGEgcHJlc2V0ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRob3V0SW52ZXJzZSA9IGZhbHNlO1xuICB9XG4gIHJldHVybiBJbnZlcnNlRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxJbnZlcnNlSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdChbaW52ZXJzZV06bm90KFt3aXRob3V0SW52ZXJzZV0pKXstLW10ZS1zdXJmYWNlLTE6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS0xLXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtc3VyZmFjZS0yOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tbXRlLXN1cmZhY2UtMi1yZ2I6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpOy0tbXRlLXN1cmZhY2UtMzp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlKTstLW10ZS1zdXJmYWNlLTMtcmdiOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UtcmdiKTstLW10ZS1zdXJmYWNlLTQ6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS00LXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtaW5rLTE6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMS1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTI6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMi1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTM6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMy1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTQ6dmFyKC0tbXRlLWJsYWNrKTstLW10ZS1pbmstNC1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1tdGUtaW5rLTU6dmFyKC0tbXRlLWJsYWNrKTstLW10ZS1pbmstNS1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1tdGUtYm9yZGVyLTE6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMS1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtYm9yZGVyLTI6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMi1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtYm9yZGVyLTM6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMy1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtZGlzYWJsZWQtMTp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0xKTstLW10ZS1kaXNhYmxlZC0xLXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0xLXJnYik7LS1tdGUtZGlzYWJsZWQtMjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0yKTstLW10ZS1kaXNhYmxlZC0yLXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0yKTstLW10ZS1kaXNhYmxlZC0zOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMpOy0tbXRlLWRpc2FibGVkLTMtcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMtcmdiKTstLW10ZS1kaXNhYmxlZC00OnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMpOy0tbXRlLWRpc2FibGVkLTQtcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTEtZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMS1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0yLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1pdC1zdXJmYWNlLTMtZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0zLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTMtYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMy1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1saWdodDp2YXIoLS1tdGUtd2hpdGUpOy0tbXRlLWxpZ2h0LXJnYjp2YXIoLS1tdGUtd2hpdGUtcmdiKTstLW10ZS1kYXJrOnZhcigtLW10ZS1ibGFjayk7LS1tdGUtZGFyay1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1idXR0b24tZmlsbGVkLWJnOnZhcigtLW10ZS13aGl0ZSk7LS1idXR0b24tZmlsbGVkLWluazp2YXIoLS1tdGUtYmxhY2spOy0tYnV0dG9uLWZpbGxlZC1hY3RpdmUtYmc6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWluazp2YXIoLS1tdGUtd2hpdGUpfWA7IiwgImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBvblVwZGF0ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRGlzYWJsZWRJbnRlcmZhY2UgfSBmcm9tICcuL2Rpc2FibGVkLm1peGluJztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgaXNTc3IgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUYWJJbmRleEludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgdGFiaW5kZXggYXR0cmlidXRlIHZhbHVlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnRcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZ2V0VGFiSW5kZXhBZGFwdGVyKCk6IHN0cmluZztcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHNldCB0aGUgdGFiaW5kZXggYXR0cmlidXRlIG9uIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHNldFRhYkluZGV4QWRhcHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJlbW92ZSB0aGUgdGFiaW5kZXggYXR0cmlidXRlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnRcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCk6IHZvaWQ7XG59XG5cbi8qKlxuICogTWl4aW4gdG8gcHJvcGVybHkgbWFuYWdlIHRoZSB0YWJpbmRleCBpbiBhIG5vbi1pbnRydXNpdmUgd2F5LiBXaGVuIGRpc2FibGVkIGlzIHRydWUsXG4gKiB0aGUgdGFiaW5kZXggd2lsbCBBTFdBWVMgYmUgYC0xYC4gSG93ZXZlciwgYW55IGNoYW5nZXMgdG8gdGFiaW5kZXggd2lsbCBiZSBpbnRlcmNlcHRlZFxuICogYW5kIGNhY2hlZCBpbnRlcm5hbGx5IHVudGlsIGRpc2FibGVkIGlzIGZhbHNlLCB0aGVuIHRhYmluZGV4IHdpbGwgYmUgcmVzdG9yZWQgdG8gdGhlXG4gKiBjYWNoZWQgdmFsdWUsIG9yIHJlbW92ZWQgaWYgdGhhdCBpcyB1bmRlZmluZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBUYWJJbmRleE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50ICYgRGlzYWJsZWRJbnRlcmZhY2U+PihcbiAgc3VwZXJDbGFzczogVCxcbiAgb3B0aW9uczogeyBpbml0aWFsVGFiSW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCB9ID0geyBpbml0aWFsVGFiSW5kZXg6IHVuZGVmaW5lZCB9XG4pID0+IHtcbiAgY2xhc3MgVGFiSW5kZXhFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiAndGFiaW5kZXgnLCB0eXBlOiBOdW1iZXIsIG5vQWNjZXNzb3I6IHRydWUgfSlcbiAgICBwdWJsaWMgb3ZlcnJpZGUgc2V0IHRhYkluZGV4KHRhYkluZGV4OiBudW1iZXIpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIC8vIFdoZW4gc2V0dGluZyB0aGUgdGFiSW5kZXggb24gdGhlIGN1cnJlbnQgZWxlbWVudCB0byBgLTFgIGRpc2FibGVkLCB3ZSB3YW50IHRvIGtlZXAgdHJhY2sgb2Ygd2hhdCB0aGUgdGFiSW5kZXggdmFsdWUgYmVmb3JlIHRoYXQgd2FzXG4gICAgICAgIC8vIGFzIHRoZSBjYWNoZWRUYWJJbmRleC4gVG8gZG8gdGhpcyB3ZSBtdXN0IGlnbm9yZSB0aGUgaW5pdGlhbCBjaGFuZ2UgdG8gYC0xYCBhbmQgdGhlbiBjYWNoZSBhbnkgZnV0dXJlIHZhbHVlcyBiZWZvcmUga2VlcGluZyB0aGVcbiAgICAgICAgLy8gdGFiSW5kZXggYXMgYC0xYCB1bnRpbCBubyBsb25nZXIgZGlzYWJsZWQuIFRoZW4gd2UgY2FuIHJldHVybiB0aGUgdGFiSW5kZXggdG8gd2hhdGV2ZXIgdGhlIGxhc3Qgc2V0IHZhbHVlIHdhcyBmcm9tIHRoZSBjYWNoZWQgaW5kZXguXG4gICAgICAgIGlmICghdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKCctMScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90YWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl90YWJJbmRleH1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIG92ZXJyaWRlIGdldCB0YWJJbmRleCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90YWJJbmRleDtcbiAgICB9XG4gICAgcHJpdmF0ZSBfdGFiSW5kZXggPSBvcHRpb25zPy5pbml0aWFsVGFiSW5kZXg7XG4gICAgcHJpdmF0ZSBfY2FjaGVkVGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gZmFsc2U7XG5cbiAgICBAb25VcGRhdGUoWydkaXNhYmxlZCddLCB7IG9uOiAnYm90aCcgfSlcbiAgICBwcml2YXRlIGhhbmRsZVRhYmluZGV4Q2hhbmdlKGNoYW5nZWRQcm9wcykge1xuICAgICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgaWYgKGNoYW5nZWRQcm9wcy5nZXQoJ2Rpc2FibGVkJykgPT09IGZhbHNlICYmIHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jYWNoZWRUYWJJbmRleCA9IE51bWJlcih0aGlzLmdldFRhYkluZGV4QWRhcHRlcigpKTtcbiAgICAgICAgICB0aGlzLl90YWJJbmRleCA9IC0xO1xuICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKCctMScsIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYW5nZWRQcm9wcy5nZXQoJ2Rpc2FibGVkJykgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5fY2FjaGVkVGFiSW5kZXggIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9jYWNoZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fdGFiSW5kZXggPSB0aGlzLl9jYWNoZWRUYWJJbmRleDtcbiAgICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKGAke3RoaXMuX2NhY2hlZFRhYkluZGV4fWApO1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVUYWJJbmRleEFkYXB0ZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHRhYmluZGV4IGF0dHJpYnV0ZSB2YWx1ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50ICovXG4gICAgZ2V0VGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIH1cblxuICAgIC8qKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gc2V0IHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgb24gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgKi9cbiAgICBzZXRUYWJJbmRleEFkYXB0ZXIodmFsdWU6IHN0cmluZywgc2hvdWxkUHJldmVudFRhYkluZGV4Q2hhbmdlT25TZWxmID0gZmFsc2UpIHtcbiAgICAgIGlmIChzaG91bGRQcmV2ZW50VGFiSW5kZXhDaGFuZ2VPblNlbGYpIHtcbiAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJlbW92ZSB0aGUgdGFiaW5kZXggYXR0cmlidXRlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgKi9cbiAgICByZW1vdmVUYWJJbmRleEFkYXB0ZXIoKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICB3aWxsVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICBzdXBlci53aWxsVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKGlzU3NyKCkgJiYgdGhpcy5fdGFiSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl90YWJJbmRleH1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICAgIGlmICh0aGlzLl90YWJJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKGAke3RoaXMuX3RhYkluZGV4fWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gVGFiSW5kZXhFbGVtZW50IGFzIENvbnN0cnVjdG9yPFRhYkluZGV4SW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQsIFN0eWxlTWFwIH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgc2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE10ZUVsZW1lbnRQYXJ0cyB7XG4gIC8qKiBUaGUgaG9zdCBlbGVtZW50IFwicGFydFwiLiBPdmVycmlkZXMgdGhlIGBzZWAgcHJvcGVydHkgb2YgdGhpcyBlbGVtZW50ICovXG4gIGhvc3Q/OiBTdHlsZU1hcDtcbn1cblxuZXhwb3J0IHR5cGUgU3R5bGVQYXJ0c01hcDxUID0gc3RyaW5nIHwgbnVtYmVyPiA9IHtcbiAgW25hbWU6IHN0cmluZ106IFN0eWxlTWFwPFQ+O1xufTtcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3R5bGVQYXJ0c0ludGVyZmFjZTxTdHlsZVBhcnRzPiB7XG4gIC8qKlxuICAgKiBTdHlsZSBtYXBwaW5ncyB0aGF0IGFyZSBhcHBsaWVkIHRvIGVhY2ggY3NzIHBhcnQgYnkgbmFtZS4gU2V0IHRoZVxuICAgKiBwcm9wZXJ0eSBgaG9zdGAgdG8gYXBwbHkgYSBgU3R5bGVJbmZvYCBvYmplY3QgdG8gdGhlIGVsZW1lbnQgaG9zdCBpdHNlbGYuXG4gICAqL1xuICBzcD86IFN0eWxlUGFydHM7XG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZVBhcnRzTWl4aW4gPSA8U3R5bGVQYXJ0cywgVCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIFN0eWxlUGFydHNFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogU3R5bGUgbWFwcGluZ3MgdGhhdCBhcmUgYXBwbGllZCB0byBlYWNoIGNzcyBwYXJ0IGJ5IG5hbWUuIFNldCB0aGVcbiAgICAgKiBwcm9wZXJ0eSBgaG9zdGAgdG8gYXBwbHkgYSBgU3R5bGVJbmZvYCBvYmplY3QgdG8gdGhlIGVsZW1lbnQgaG9zdCBpdHNlbGYuXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCByZWZsZWN0OiB0cnVlIH0pIHNwOiBTdHlsZVBhcnRzO1xuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgICAgc3VwZXIudXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKTtcblxuICAgICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ3NwJykpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5zcCA/PyAoe30gYXMgU3R5bGVQYXJ0cykpLmZvckVhY2goKFtwYXJ0LCBzdHlsZU1hcF0pID0+IHtcbiAgICAgICAgICAvLyBEb3VibGUgdGhlIGA6aG9zdGAgc2VsZWN0b3IgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgYmV5b25kIG1vc3QgY29tcG9uZW50IGxldmVsIHN0eWxlcyBieSBkZWZhdWx0XG4gICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvckZhY3RvcnkoXG4gICAgICAgICAgICBwYXJ0ID09PSAnaG9zdCdcbiAgICAgICAgICAgICAgPyAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0J1xuICAgICAgICAgICAgICA6IGA6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6OnBhcnQoJHtwYXJ0fSlgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoYHNwLSR7cGFydH1gLCBzZWxlY3Rvciwgc3R5bGVNYXApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gU3R5bGVQYXJ0c0VsZW1lbnQgYXMgQ29uc3RydWN0b3I8U3R5bGVQYXJ0c0ludGVyZmFjZTxTdHlsZVBhcnRzPj4gJiBUO1xufTtcbiIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7cG9zaXRpb246cmVsYXRpdmV9I2FuY2hvcntpbnNldDowO3Bvc2l0aW9uOmFic29sdXRlfWA7IiwgImltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIENsaWNrT3V0c2lkZUNvbnRyb2xsZXIsXG4gIENvbnN0cnVjdG9yLFxuICBFdmVudEVtaXR0ZXIsXG4gIEZvY3VzVHJhcENvbnRyb2xsZXIsXG4gIE10ZUVsZW1lbnQsXG4gIFBvcnRhbEFkYXB0ZXIsXG4gIFBvcnRhbENvbnRyb2xsZXIsXG4gIGRlZmF1bHRQb3J0YWxBZGFwdGVyLFxuICBldmVudEVtaXR0ZXIsXG4gIGlzU3NyLFxufSBmcm9tICcuLic7XG5pbXBvcnQgeyBQcm9wZXJ0eVZhbHVlTWFwIH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3ZlcmxheUludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBvdmVybGF5IHN0YXRlIG9uIHRoZSBvdmVybGF5IG1peGluLiBCeSBkZWZhdWx0IGFsbCBvcHRpb25zIGFyZSBzZXQgdG8gdHJ1ZSBpbml0aWFsbHkuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBzZXRPdmVybGF5T3B0aW9ucyhvcHRpb25zOiB7XG4gICAgd2l0aENsb3NlT25DbGlja091dHNpZGU/OiBib29sZWFuO1xuICAgIHdpdGhDbG9zZU9uRXNjYXBlPzogYm9vbGVhbjtcbiAgICB3aXRoRm9jdXNUcmFwPzogYm9vbGVhbjtcbiAgICB3aXRoUG9ydGFsPzogYm9vbGVhbjtcbiAgICB3aXRoRGltQmFja2Ryb3A/OiBib29sZWFuO1xuICAgIHdpdGhJbmVydEJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICB3aXRoU2Nyb2xsTG9jaz86IGJvb2xlYW47XG4gICAgYW5pbWF0aW9uRHVyYXRpb24/OiBudW1iZXI7XG4gICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG4gICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlPzogYm9vbGVhbjtcbiAgICBmb2N1c1RyYXBUYXJnZXQ/OiBFbGVtZW50O1xuICB9KTogdW5rbm93bjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIG92ZXJsYXkgc2hvdWxkIG9wZW4uIENhbiBhZGQgYSBsaXN0ZW5lciBmb3Igb3V0c2lkZSBjbGlja3MsIHBvcnRhbCBhbiBlbGVtZW50LFxuICAgKiBhbmQgcHJldmVudCB0aGUgYm9keSBmcm9tIHNjcm9sbGluZyB1cG9uIG9wZW4uXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBoYW5kbGVPdmVybGF5T3BlbihvcHRpb25zPzoge1xuICAgIGNsaWNrT3V0c2lkZUVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcbiAgICB3aWxsT3Blbj86ICgpID0+IHZvaWQ7XG4gIH0pOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgYWZ0ZXIgdGhlIG92ZXJsYXkgaGFzIGJlZW4gb3B0aW9uYWxseSBwb3J0YWxlZCBhbmQvb3IgYWxsIGFuaW1hdGlvbnMgaGF2ZSBmaW5pc2hlZC5cbiAgICovXG4gIGhhbmRsZU92ZXJsYXlPcGVuRW5kKCk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBvdmVybGF5IGVsZW1lbnQgc2hvdWxkIGNsb3NlLiBDYW4gc3RvcCBsaXN0ZW5pbmcgZm9yIG91dHNpZGUgY2xpY2tzLCByZWxlYXNlIGEsXG4gICAqIGZvY3VzIHRyYXAsIGFuZCBhbGxvdyB0aGUgYm9keSBlbGVtZW50IHRvIHNjcm9sbCBhZ2Fpbi5cbiAgICovXG4gIGhhbmRsZU92ZXJsYXlDbG9zZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgb3ZlcmxheSBlbGVtZW50IGhhcyBmaW5pc2hlZCBjbG9zaW5nIGFuZC9vciBhbGwgYW5pbWF0aW9ucyBoYXZlIGNvbXBsZXRlZC4gQ2FuXG4gICAqIHJlbW92ZSBhbiBlbGVtZW50IGZyb20gdGhlIHBvcnRhbC5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIGhhbmRsZU92ZXJsYXlDbG9zZUVuZChvcHRpb25zPzogeyByZW1vdmVGcm9tRWxlbWVudD86IEhUTUxFbGVtZW50IH0pOiBQcm9taXNlPHZvaWQ+O1xuXG4gIG9wZW4oKTogUHJvbWlzZTx2b2lkPjtcblxuICBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBUaGUgdGFiIGluZGV4IGZvciB0aGlzIGVsZW1lbnRcbiAgICovXG4gIHRhYmluZGV4OiBudW1iZXI7XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaXMgaW5pdGlhbGx5IG9wZW5lZCAqL1xuICBfb25PcGVuOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEVtaXR0ZWQgYWZ0ZXIgdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBvcGVuaW5nICovXG4gIF9vbk9wZW5FbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgY2xvc2luZyAqL1xuICBfb25DbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBjbG9zaW5nICovXG4gIF9vbkNsb3NlRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgcG9ydGFsQWRhcHRlcjogUG9ydGFsQWRhcHRlcjtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBUaGUgb3BlbmVkIHN0YXRlIG9mIHRoZSBvdmVybGF5IHJlZ2FyZGxlc3Mgb2YgYW5pbWF0aW9uc1xuICAgKi9cbiAgb3BlbmVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEluZGljYXRlcyB0aGUgb3ZlcmxheSBoYXMgYmVlbiBwb3J0YWxlZCBhbmQgcmVhZHkgdG8gYW5pbWF0ZVxuICAgKi9cbiAgcmVhZHlGb3JBbmltYXRpb246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogSW5kaWNhdGVzIHRoZSBvdmVybGF5IGhhcyBiZWVuIGZ1bGx5IGFuaW1hdGVkIG9wZW5cbiAgICovXG4gIG9wZW5lZEZ1bGw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBPdmVybGF5TWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIE92ZXJsYXlFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqIFRoZSB0YWIgaW5kZXggb2YgdGhpcyBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiAndGFiaW5kZXgnLCB0eXBlOiBOdW1iZXIgfSkgdGFiaW5kZXggPSAtMTtcblxuICAgIC8qKlxuICAgICAqIEFkYXB0ZXIgZm9yIHBvcnRhbCBET00gb3BlcmF0aW9uIHRoYXQgY2FuIGJlIHN1cHBsZW1lbnRlZCBmb3IgZXh0ZXJuYWwtZnJhbWV3b3JrIGludGVncmF0aW9ucy5cbiAgICAgKiBOb3RhYmx5LWxldmVyYWdlZCBieSBvdmVybGF5cyBpbiBvdXIgZ2VuZXJhdGVkIHJlYWN0IHdyYXBwZXJzLlxuICAgICAqXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSgpIHBvcnRhbEFkYXB0ZXI6IFBvcnRhbEFkYXB0ZXIgPSBkZWZhdWx0UG9ydGFsQWRhcHRlcjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBvcGVuZWQgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uT3BlbjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIEVtaXR0ZWQgYWZ0ZXIgdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBvcGVuaW5nICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbk9wZW5FbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBjbG9zZWQgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBjbG9zaW5nICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkNsb3NlRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBlbGVtZW50IHNob3VsZCB1c2UgYSBmb2N1cyB0cmFwIG9yIG5vdCAqL1xuICAgIHByaXZhdGUgX3dpdGhGb2N1c1RyYXAgPSB0cnVlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgZWxlbWVudCBzaG91bGQgY2xvc2Ugd2hlbiBhIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgdGhlIGVsZW1lbnQgKi9cbiAgICBwcml2YXRlIF9jbG9zZU9uQ2xpY2tPdXRzaWRlID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBjbG9zZSB3aGVuIHRoZSBlc2NhcGUgYnV0dG9uIGlzIHByZXNzZWQgKi9cbiAgICBwcml2YXRlIF9jbG9zZU9uRXNjYXBlID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IHNob3VsZCB1c2UgYSBwb3J0YWwgb3Igbm90ICovXG4gICAgcHJpdmF0ZSBfd2l0aFBvcnRhbCA9IHRydWU7XG5cbiAgICAvKiogV2V0aGVyIHRoZSB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGNsaWNrIGJlaGluZCB0aGUgYmFja2Ryb3Agb3Igbm90ICovXG4gICAgcHJpdmF0ZSBfd2l0aEluZXJ0QmFja2Ryb3AgPSBmYWxzZTtcblxuICAgIC8qKiBXZXRoZXIgdGhlIG92ZXJsYXkncyBiYWNrZHJvcCBzaG91bGQgcmVuZGVyIGRpbW1lZCAqL1xuICAgIHByaXZhdGUgX3dpdGhEaW1CYWNrZHJvcCA9IGZhbHNlO1xuXG4gICAgLyoqIFdldGhlciBvciBub3QgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlLWFwcGVuZGVkIHRvIGl0J3Mgb3JpZ2luIHBhcmVudCBlbGVtZW50IG9uIGNsb3NlIF9pZl8gcG9ydGFsZWQuICovXG4gICAgcHJpdmF0ZSBfcmV0dXJuVG9PcmlnaW5PbkNsb3NlID0gZmFsc2U7XG5cbiAgICAvKiogT3B0aW9uYWwgYmFja2Ryb3AgdGltaW5nLiBJbXBvcnRhbnQgcGFydGljdWxhcmx5IGZvciBzbW9vdGggY2xvc2VzIHdpdGggYSB2aXNpYmxlIGJhY2tkcm9wICovXG4gICAgcHJpdmF0ZSBfYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBzaG91bGQgcHJldmVudCBzY3JvbGxpbmcgb24gdGhlIGJvZHkgKi9cbiAgICBwcml2YXRlIF93aXRoU2Nyb2xsTG9jayA9IHRydWU7XG5cbiAgICBwcm90ZWN0ZWQgZm9jdXNUcmFwQ29udHJvbGxlciA9IG5ldyBGb2N1c1RyYXBDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgcHJvdGVjdGVkIGNsaWNrT3V0c2lkZUNvbnRyb2xsZXIgPSBuZXcgQ2xpY2tPdXRzaWRlQ29udHJvbGxlcih0aGlzLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3dpdGhQb3J0YWwpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZU9uQ2xpY2tPdXRzaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwcm90ZWN0ZWQgcG9ydGFsQ29udHJvbGxlciA9IG5ldyBQb3J0YWxDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgcGFyZW50IGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdGlhbFBhcmVudDogRWxlbWVudCB8IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0byBkZXRlY3QgY2xpY2tzIG91dHNpZGUgb2YgdG8gY2xvc2UgdGhlIG92ZXJsYXkgZWxlbWVudC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG5cbiAgICBwcml2YXRlIF9vcmlnaW5QYXJlbnQ/OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIF9mb2N1c1RyYXBUYXJnZXQ/OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQgPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqIFRoZSBvcGVuZWQgc3RhdGUgb2YgdGhlIG92ZXJsYXkgcmVnYXJkbGVzcyBvZiBhbmltYXRpb25zXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBvcGVuZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBJbmRpY2F0ZXMgdGhlIG92ZXJsYXkgaGFzIGJlZW4gcG9ydGFsZWQgYW5kIHJlYWR5IHRvIGFuaW1hdGVcbiAgICAgKi9cbiAgICBAc3RhdGUoKVxuICAgIHNldCByZWFkeUZvckFuaW1hdGlvbihyZWFkeUZvckFuaW1hdGlvbjogYm9vbGVhbikge1xuICAgICAgdGhpcy5fcmVhZHlGb3JBbmltYXRpb24gPSByZWFkeUZvckFuaW1hdGlvbjtcbiAgICB9XG4gICAgZ2V0IHJlYWR5Rm9yQW5pbWF0aW9uKCkge1xuICAgICAgLy8gRHVyaW5nIFNTUiByZXR1cm4gdHJ1ZSBpbiBjYXNlIHNvbWV0aGluZyBuZWVkcyB0byBiZSBvcGVuZWQgaW5pdGlhbGx5LlxuICAgICAgcmV0dXJuIGlzU3NyKCkgPyB0cnVlIDogdGhpcy5fcmVhZHlGb3JBbmltYXRpb247XG4gICAgfVxuICAgIHByaXZhdGUgX3JlYWR5Rm9yQW5pbWF0aW9uID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogVGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgb3ZlcmxheSByZWdhcmRsZXNzIG9mIGFuaW1hdGlvbnMuIFRoaXMgaXMgcmVmbGVjdGVkIGFuZCB1c2VkIGJ5XG4gICAgICogc29tZSBvdmVybGF5cyB0byByZXN0cmljdCB0aGVpciBzaXplIHdoaWxlIGhpZGRlbi4gKHNpbmNlIGRpc3BsYXk6IG5vbmUgYnJlYWtzIGFuaW1hdGlvbnMpXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBvcGVuZWRGdWxsID0gZmFsc2U7XG5cbiAgICBzZXRPdmVybGF5T3B0aW9ucyhvcHRpb25zOiB7XG4gICAgICB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZT86IGJvb2xlYW47XG4gICAgICB3aXRoQ2xvc2VPbkVzY2FwZT86IGJvb2xlYW47XG4gICAgICB3aXRoRm9jdXNUcmFwPzogYm9vbGVhbjtcbiAgICAgIHdpdGhQb3J0YWw/OiBib29sZWFuO1xuICAgICAgd2l0aEluZXJ0QmFja2Ryb3A/OiBib29sZWFuO1xuICAgICAgd2l0aERpbUJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICAgIHdpdGhTY3JvbGxMb2NrPzogYm9vbGVhbjtcbiAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuICAgICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlPzogYm9vbGVhbjtcbiAgICAgIGZvY3VzVHJhcFRhcmdldD86IEVsZW1lbnQ7XG4gICAgfSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB3aXRoRm9jdXNUcmFwLFxuICAgICAgICB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZSxcbiAgICAgICAgd2l0aENsb3NlT25Fc2NhcGUsXG4gICAgICAgIHdpdGhQb3J0YWwsXG4gICAgICAgIHdpdGhTY3JvbGxMb2NrLFxuICAgICAgICB3aXRoSW5lcnRCYWNrZHJvcCxcbiAgICAgICAgd2l0aERpbUJhY2tkcm9wLFxuICAgICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlLFxuICAgICAgICBmb2N1c1RyYXBUYXJnZXQsXG4gICAgICB9ID0gb3B0aW9ucyA/PyB7fTtcblxuICAgICAgdGhpcy5fd2l0aEZvY3VzVHJhcCA9IHdpdGhGb2N1c1RyYXAgPz8gdGhpcy5fd2l0aEZvY3VzVHJhcDtcbiAgICAgIHRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUgPSB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZSA/PyB0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlO1xuICAgICAgdGhpcy5fd2l0aFNjcm9sbExvY2sgPSB3aXRoU2Nyb2xsTG9jayA/PyB0aGlzLl93aXRoU2Nyb2xsTG9jaztcbiAgICAgIHRoaXMuX3dpdGhQb3J0YWwgPSB3aXRoUG9ydGFsID8/IHRoaXMuX3dpdGhQb3J0YWw7XG4gICAgICB0aGlzLl93aXRoSW5lcnRCYWNrZHJvcCA9XG4gICAgICAgIHdpdGhJbmVydEJhY2tkcm9wID8/ICF0aGlzLl93aXRoRm9jdXNUcmFwID8/IHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wO1xuICAgICAgdGhpcy5fd2l0aERpbUJhY2tkcm9wID0gd2l0aERpbUJhY2tkcm9wID8/IHRoaXMuX3dpdGhEaW1CYWNrZHJvcDtcbiAgICAgIHRoaXMuX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID1cbiAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPz8gdGhpcy5fYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb247XG4gICAgICB0aGlzLl9yZXR1cm5Ub09yaWdpbk9uQ2xvc2UgPSByZXR1cm5Ub09yaWdpbk9uQ2xvc2UgPz8gdGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlO1xuICAgICAgdGhpcy5fZm9jdXNUcmFwVGFyZ2V0ID0gZm9jdXNUcmFwVGFyZ2V0ID8/IHRoaXMuX2ZvY3VzVHJhcFRhcmdldDtcblxuICAgICAgaWYgKHdpdGhDbG9zZU9uRXNjYXBlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fY2xvc2VPbkVzY2FwZSAhPT0gd2l0aENsb3NlT25Fc2NhcGUpIHtcbiAgICAgICAgaWYgKHdpdGhDbG9zZU9uRXNjYXBlID09PSB0cnVlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbG9zZU9uRXNjYXBlID0gd2l0aENsb3NlT25Fc2NhcGUgPz8gdGhpcy5fY2xvc2VPbkVzY2FwZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpdGhGb2N1c1RyYXAgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAod2l0aEZvY3VzVHJhcCA9PT0gdHJ1ZSAmJiB0aGlzLnRhYmluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gLTE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlT3ZlcmxheSgpO1xuICAgIH1cblxuICAgIGhhbmRsZU92ZXJsYXlPcGVuKG9wdGlvbnM/OiB7XG4gICAgICBjbGlja091dHNpZGVFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG4gICAgICB3aWxsT3Blbj86ICgpID0+IHZvaWQ7XG4gICAgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gSWdub3JlIGlmIGFscmVhZHkgb3BlblxuICAgICAgaWYgKHRoaXMub3BlbmVkIHx8IHRoaXMub3BlbmVkRnVsbCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgICBjb25zdCB7IGNsaWNrT3V0c2lkZUVsZW1lbnQsIHdpbGxPcGVuIH0gPSBvcHRpb25zID8/IHt9O1xuICAgICAgd2lsbE9wZW4/LigpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQgPSBjbGlja091dHNpZGVFbGVtZW50IHx8IHRoaXM7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5saXN0ZW5Gb3JDbGlja3NPdXRzaWRlT2YodGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCk7XG4gICAgICAgIGlmICh0aGlzLl93aXRoUG9ydGFsKSB7XG4gICAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyXG4gICAgICAgICAgICAuYXBwZW5kVG9TdGFjayh0aGlzLCB7XG4gICAgICAgICAgICAgIHdpdGhEaW1CYWNrZHJvcDogdGhpcy5fd2l0aERpbUJhY2tkcm9wLFxuICAgICAgICAgICAgICB3aXRoSW5lcnRCYWNrZHJvcDogdGhpcy5fd2l0aEluZXJ0QmFja2Ryb3AsXG4gICAgICAgICAgICAgIHdpdGhTY3JvbGxMb2NrOiB0aGlzLl93aXRoU2Nyb2xsTG9jayxcbiAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXI6IHRoaXMuaGFuZGxlQ2xvc2VPbkNsaWNrT3V0c2lkZSxcbiAgICAgICAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb246IHRoaXMuX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICAgICAgICBwb3J0YWxBZGFwdGVyOiB0aGlzLnBvcnRhbEFkYXB0ZXIsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAvLyBXYWl0IGZvciBhcHBlbmQgdG8gY29tcGxldGUgYmVmb3JlIGFuaW1hdGluZ1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5Rm9yQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBBZnRlciBhbmltYXRpb24gYmVnaW5zIHJlc29sdmVcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fb25PcGVuLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5fb3JpZ2luUGFyZW50ICYmXG4gICAgICAgICAgICB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSAmJlxuICAgICAgICAgICAgdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkgIT09IHRoaXMuX29yaWdpblBhcmVudFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIHRoaXMuX29yaWdpblBhcmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFdhaXQgZm9yIGFwcGVuZCB0byBjb21wbGV0ZSBiZWZvcmUgYW5pbWF0aW5nXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Rm9yQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIEFmdGVyIGFuaW1hdGlvbiBiZWdpbnMgcmVzb2x2ZVxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fb25PcGVuLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMjApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVPdmVybGF5T3BlbkVuZCgpIHtcbiAgICAgIC8vIENhbmNlbCBpZiBjbG9zZWQgYmVmb3JlIG9wZW4gZW5kZWRcbiAgICAgIGlmICghdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWRGdWxsID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLl93aXRoRm9jdXNUcmFwKSB7XG4gICAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci50cmFwRm9jdXModGhpcy5fZm9jdXNUcmFwVGFyZ2V0LCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29uT3BlbkVuZC5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlT3ZlcmxheUNsb3NlKCkge1xuICAgICAgLy8gSWdub3JlIGlmIGFscmVhZHkgY2xvc2VkXG4gICAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9vbkNsb3NlLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5yZWxlYXNlRm9jdXModHJ1ZSk7XG4gICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIuaGlkZUJhY2tkcm9wKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlT3ZlcmxheUNsb3NlRW5kKG9wdGlvbnM/OiB7IHJlbW92ZUZyb21FbGVtZW50PzogSFRNTEVsZW1lbnQgfSkge1xuICAgICAgLy8gQ2FuY2VsIGlmIG9wZW5lZCBiZWZvcmUgY2xvc2UgZW5kZWRcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZEZ1bGwgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVhZHlGb3JBbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5yZW1vdmVGcm9tU3RhY2sob3B0aW9ucz8ucmVtb3ZlRnJvbUVsZW1lbnQgfHwgdGhpcyk7XG4gICAgICBpZiAodGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlKSB7XG4gICAgICAgIGlmICh0aGlzLl9vcmlnaW5QYXJlbnQgJiYgdGhpcy5fb3JpZ2luUGFyZW50ICE9PSB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSkge1xuICAgICAgICAgIHRoaXMucG9ydGFsQWRhcHRlcih0aGlzLCB0aGlzLl9vcmlnaW5QYXJlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9vbkNsb3NlRW5kLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZU92ZXJsYXlLZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnRFbGVtZW50Py5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheS13cmFwcGVyJylcbiAgICAgICAgPyB0aGlzLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnRcbiAgICAgICAgOiB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGFyZW50IGVsZW1lbnQgdGhpcyBvdmVybGF5IHdpbGwgYmUgcmVhdHRhY2hlZCB0byBlaXRoZXI6XG4gICAgICogLSBXaGVuIGNvbmZpZ3VyZWQgdG8gZG8gc28gb24gY2xvc2VcbiAgICAgKiAtIFdoZW4gXCJwb3J0YWxpbmdcIiBpcyBkaXNhYmxlZFxuICAgICAqL1xuICAgIHNldE9yaWdpblBhcmVudChuZXdPcmlnaW46IEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG4gICAgICBpZiAoY3VycmVudFBhcmVudEVsZW1lbnQgPT09IHRoaXMuX29yaWdpblBhcmVudCkge1xuICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgbmV3T3JpZ2luKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29yaWdpblBhcmVudCA9IG5ld09yaWdpbjtcbiAgICB9XG5cbiAgICAvKiogVXBkYXRlcyB2YXJpb3VzIGJlaGF2aW9ycyB0byBhcHBseSB0aGUgbGF0ZXN0IG92ZXJsYXkgb3B0aW9ucyAqL1xuICAgIHVwZGF0ZU92ZXJsYXkoKSB7XG4gICAgICAvLyBVcGRhdGUgYmFja2Ryb3AgaW5lcnRuZXNzXG4gICAgICBpZiAodGhpcy5fd2l0aEluZXJ0QmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNldEJhY2tkcm9wSW5lcnRuZXNzKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNldEJhY2tkcm9wSW5lcnRuZXNzKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSBjbGljayBvdXRzaWRlIGNvbnRyb2xsZXJcbiAgICAgIGlmICh0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlICYmICF0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuaXNMaXN0ZW5pbmcoKSkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIubGlzdGVuRm9yQ2xpY2tzT3V0c2lkZU9mKHRoaXMpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZSAmJiB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuaXNMaXN0ZW5pbmcoKSkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuc3RvcExpc3RlbmluZygpO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIGZvY3VzIHRyYXAgY29udHJvbGxlclxuICAgICAgaWYgKHRoaXMuX3dpdGhGb2N1c1RyYXAgJiYgdGhpcy5vcGVuZWQgJiYgIXRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5pc1RyYXBwaW5nRm9jdXMoKSkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIudHJhcEZvY3VzKHRoaXMuX2ZvY3VzVHJhcFRhcmdldCwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl93aXRoRm9jdXNUcmFwICYmIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5pc1RyYXBwaW5nRm9jdXMoKSkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIucmVsZWFzZUZvY3VzKHRydWUpO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIGJhY2tkcm9wIGNvbnRyb2xsZXJcbiAgICAgIGlmICh0aGlzLl93aXRoRGltQmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNob3dCYWNrZHJvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLmhpZGVCYWNrZHJvcCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZSkge1xuICAgICAgICBpZiAodGhpcy5fb3JpZ2luUGFyZW50ICYmIHRoaXMuX29yaWdpblBhcmVudCAhPT0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgdGhpcy5fb3JpZ2luUGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIG9wZW4oKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09wZW4gbWV0aG9kIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbG9zZSBtZXRob2Qgbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55KSB7XG4gICAgICBzdXBlcihhcmdzKTtcbiAgICAgIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24gPSB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChcbiAgICAgIGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlTWFwPGFueT4gfCBNYXA8UHJvcGVydHlLZXksIHVua25vd24+XG4gICAgKTogdm9pZCB7XG4gICAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgdGhpcy5fb3JpZ2luUGFyZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVDbG9zZU9uQ2xpY2tPdXRzaWRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgIGlmICh0aGlzLl9jbG9zZU9uRXNjYXBlKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBldmVudCBsaXN0ZW5lciBpbiB0aGUgZXZlbnQgdGhlIG92ZXJsYXkgZWxlbWVudCB3YXMgcG9ydGFsZWQuXG4gICAgICBpZiAodGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIubGlzdGVuRm9yQ2xpY2tzT3V0c2lkZU9mKHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5yZWxlYXNlRm9jdXModHJ1ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE92ZXJsYXlFbGVtZW50IGFzIENvbnN0cnVjdG9yPE92ZXJsYXlJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2Rpc3BsYXk6YmxvY2s7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMDB9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tZnVsbC13aWR0aDptYXgtY29udGVudDstLWNvbnRyb2wtd2lkdGg6dW5zZXQ7LS1jb250cm9sLW1pbi13aWR0aDoyNDBweDstLWNvbnRyb2wtbWF4LXdpZHRoOnZhcigtLWNvbnRyb2wtd2lkdGgpOy0tY29udHJvbC1tYXJnaW4teTp2YXIoLS1tdGUtc3BhY2Utc20pOy0tY29udHJvbC1tYXJnaW4teDp2YXIoLS1tdGUtc3BhY2Utc20pOy0tY29udHJvbC1kZXNjcmlwdG9yLW1hcmdpbjp2YXIoLS1tdGUtc3BhY2Utc20pOy0tbGFiZWwtd2lkdGg6dmFyKC0tY29udHJvbC13aWR0aCk7LS1sYWJlbC1taW4td2lkdGg6dmFyKC0tY29udHJvbC1taW4td2lkdGgpOy0tbGFiZWwtbWF4LXdpZHRoOnZhcigtLWNvbnRyb2wtbWF4LXdpZHRoKTstLWxhYmVsLW1hcmdpbi15OnZhcigtLW10ZS1zcGFjZS14cyk7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6dmFyKC0tZnVsbC13aWR0aCl9LmdyaWQtY29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWdyaWQ7Z3JpZC10ZW1wbGF0ZS1hcmVhczpcImxhYmVsXCIgXCJjb250cm9sXCI7Z3JpZC10ZW1wbGF0ZS1yb3dzOjFmciBtaW5tYXgoMCwxMDAlKTt3aWR0aDppbmhlcml0fTpob3N0KFt3aXRoRnVsbFdpZHRoXSl7LS1mdWxsLXdpZHRoOjEwMCU7LS1jb250cm9sLXdpZHRoOjEwMCV9Omhvc3QoW3dpdGhvdXRNYXJnaW5dKXstLWNvbnRyb2wtbWFyZ2luLXk6MHB4fTpob3N0KFt3aXRob3V0TWFyZ2luXSkgLmxhYmVsLWNvbnRhaW5lci5oYXMtY29udGVudHttYXJnaW4tYm90dG9tOnZhcigtLWNvbnRyb2wtZGVzY3JpcHRvci1tYXJnaW4pfS5sYWJlbC1jb250YWluZXJ7ZGlzcGxheTpub25lO2dyaWQtYXJlYTpsYWJlbDttYXgtd2lkdGg6dmFyKC0tbGFiZWwtbWF4LXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbGFiZWwtbWluLXdpZHRoKTt3aWR0aDp2YXIoLS1sYWJlbC13aWR0aCl9LmxhYmVsLWNvbnRhaW5lci5oYXMtY29udGVudHtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6dmFyKC0tbGFiZWwtbWFyZ2luLXkpfS5sYWJlbC1jb250YWluZXI6bm90KC5oYXMtY29udGVudCl7bWFyZ2luOjAhaW1wb3J0YW50fS5jb250ZXh0e2dyaWQtYXJlYTpjb250ZXh0fS5kZXNjcmlwdGlvbiwuZXJyb3IsLmhpbnQsLmxhYmVse2Rpc3BsYXk6YmxvY2t9LmRlc2NyaXB0aW9uIG10ZS1kZXNjcmlwdGlvbiwuZGVzY3JpcHRpb24gbXRlLWRlc2NyaXB0aW9uLXRleHQsLmxhYmVsIG10ZS1sYWJlbCwubGFiZWwgbXRlLWxhYmVsLXRleHQsOmhvc3QgOjpzbG90dGVkKG10ZS1kZXNjcmlwdGlvbi10ZXh0W3Nsb3Q9ZGVzY3JpcHRpb25dKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWRlc2NyaXB0aW9uW3Nsb3Q9ZGVzY3JpcHRpb25dKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWxhYmVsLXRleHRbc2xvdD1sYWJlbF0pLDpob3N0IDo6c2xvdHRlZChtdGUtbGFiZWxbc2xvdD1sYWJlbF0pe21hcmdpbjowfTpob3N0KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pey0tbGFiZWwtd2lkdGg6bWF4LWNvbnRlbnQ7LS1sYWJlbC1taW4td2lkdGg6bWF4LWNvbnRlbnR9Omhvc3QoW2xhYmVsUG9zaXRpb249YmVmb3JlXSkgLmdyaWQtY29udGFpbmVye2dyaWQtdGVtcGxhdGUtYXJlYXM6XCJsYWJlbCBjb250cm9sXCI7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1pbm1heChhdXRvLHZhcigtLWxhYmVsLXdpZHRoKSkgbWlubWF4KGF1dG8sdmFyKC0tY29udHJvbC13aWR0aCkpfTpob3N0KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pIC5sYWJlbC1jb250YWluZXJ7bWFyZ2luLWJvdHRvbTp2YXIoLS1jb250cm9sLW1hcmdpbi15KTttYXJnaW4tcmlnaHQ6dmFyKC0tY29udHJvbC1tYXJnaW4teCk7bWFyZ2luLXRvcDpjYWxjKHZhcigtLWNvbnRyb2wtbWFyZ2luLXkpICsgdmFyKC0tbGFiZWwtYmVmb3JlLW9mZnNldCkpfS5kZXNjcmlwdGlvbiwuZXJyb3IsLmhpbnR7bWluLXdpZHRoOjEwMCU7d2lkdGg6LW1vei1taW4tY29udGVudDt3aWR0aDptaW4tY29udGVudH0uY29udHJvbC1vdXRlci1jb250YWluZXJ7Z3JpZC1hcmVhOmNvbnRyb2w7bWFyZ2luLXRvcDp2YXIoLS1jb250cm9sLW1hcmdpbi15KTttYXgtd2lkdGg6dmFyKC0tY29udHJvbC1tYXgtd2lkdGgpO21pbi13aWR0aDp2YXIoLS1jb250cm9sLW1pbi13aWR0aCk7d2lkdGg6dmFyKC0tY29udHJvbC13aWR0aCl9Omhvc3QoOm5vdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKSkgLmNvbnRyb2wtb3V0ZXItY29udGFpbmVyLmhhcy1sYWJlbC1jb250ZW50e21hcmdpbi10b3A6Y2FsYyh2YXIoLS1jb250cm9sLW1hcmdpbi15KS8yKX0uY29udHJvbC1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXJnaW4tYm90dG9tOnZhcigtLWNvbnRyb2wtbWFyZ2luLXkpfS5lcnJvciwuaGludHtkaXNwbGF5Om5vbmV9LmVycm9yLmhhcy1jb250ZW50LC5oaW50Lmhhcy1jb250ZW50e2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDp2YXIoLS1jb250cm9sLWRlc2NyaXB0b3ItbWFyZ2luKX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1mb3JtLWZpZWxkLWludGVybmFsLXBhZGRpbmc6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwOnZhcigtLW10ZS1zcGFjZS1zbSk7LS1mb3JtLWZpZWxkLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCk7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1zdXJmYWNlLTIpOy0tcHJlcGVuZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1ncmV5LTEpOy0tcHJlcGVuZC1wYWRkaW5nLXg6dmFyKC0tbXRlLXNwYWNlLXNtKTstLXByZXBlbmQtYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMil9Omhvc3QoW3JhZGl1cz1zbV0pey0tZm9ybS1maWVsZC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteHMpfTpob3N0KFtyYWRpdXM9bGddKXstLWZvcm0tZmllbGQtcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXh4bCl9Omhvc3QoW3NpemU9c21dKXstLXByZXBlbmQtcGFkZGluZy14OmNhbGModmFyKC0tbXRlLXNwYWNlLXhzKSArIHZhcigtLW10ZS1zcGFjZS14eHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtcGFkZGluZzpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1mb3JtLWZpZWxkLWludGVybmFsLWdhcDpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSl9Omhvc3QoW3NpemU9bGddKXstLXByZXBlbmQtcGFkZGluZy14OmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1wYWRkaW5nOmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXA6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXhzKSl9LmZvcm0tZmllbGR7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6dmFyKC0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2dhcDp2YXIoLS1mb3JtLWZpZWxkLWludGVybmFsLWdhcCk7cG9zaXRpb246cmVsYXRpdmV9Omhvc3QoW2Rpc2FibGVkXSkgLmZvcm0tZmllbGR7YmFja2dyb3VuZDp2YXIoLS1tdGUtZGlzYWJsZWQtMSk7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1tdGUtZGlzYWJsZWQtMSl9LmFwcGVuZCwucHJlcGVuZHthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpzdHJldGNoO2JhY2tncm91bmQ6dmFyKC0tcHJlcGVuZC1iYWNrZ3JvdW5kKTtkaXNwbGF5Om5vbmU7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOjAgdmFyKC0tcHJlcGVuZC1wYWRkaW5nLXgpfS5wcmVwZW5ke2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci1yaWdodDoxcHggc29saWQgdmFyKC0tcHJlcGVuZC1ib3JkZXItY29sb3IpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpfS5hcHBlbmR7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci1sZWZ0OjFweCBzb2xpZCB2YXIoLS1wcmVwZW5kLWJvcmRlci1jb2xvcik7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpfS5hcHBlbmQuaGFzLWNvbnRlbnQsLnByZXBlbmQuaGFzLWNvbnRlbnR7ZGlzcGxheTpmbGV4fS5wcmVmaXgsLnN1ZmZpeHthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpzdHJldGNoO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5wcmVmaXg6bm90KC5oYXMtcHJlcGVuZCl7cGFkZGluZy1sZWZ0OnZhcigtLXByZXBlbmQtcGFkZGluZy14KX0uc3VmZml4Om5vdCguaGFzLWFwcGVuZCl7cGFkZGluZy1yaWdodDp2YXIoLS1wcmVwZW5kLXBhZGRpbmcteCl9LmZvcm0tZmllbGQuZm9jdXNlZDpub3QoLmRpc2FibGVkKTpub3QoW2Rpc2FibGVkXSk6bm90KDpkaXNhYmxlZCk6YmVmb3Jle2JvcmRlcjoycHggc29saWQgcmdiKHZhcigtLW10ZS1mb2N1cy1yZ2IpKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvdHRvbTotMXB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDotMXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTFweDt0b3A6LTFweDt6LWluZGV4Ojl9LmZvcm0tZmllbGQuaW52YWxpZHstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKX06aG9zdChbd2l0aG91dEJvcmRlcl0pIDppcyguZm9ybS1maWVsZCwucHJlcGVuZCwuYXBwZW5kKXstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fWA7IiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtcbiAgQWN0aXZlTGlua09wdGlvbnMsXG4gIENvbnN0cnVjdG9yLFxuICBNdGVFbGVtZW50LFxuICBNdGVIaXN0b3J5QXBpU2VydmljZSxcbiAgVW5zdWJzY3JpYmVyLFxuICBpc0xpbmtBY3RpdmUsXG4gIG9uVXBkYXRlLFxufSBmcm9tICcuLi8nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMaW5rSW50ZXJmYWNlIHtcbiAgaHJlZj86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXV0b0FjdGl2ZUxpbmtJbnRlcmZhY2Uge1xuICAvKiogV2hldGhlciBvciBub3QgdGhpcyBsaW5rIGlzIHRoZSBhY3RpdmUgcGFnZSAqL1xuICBhY3RpdmU6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgbGluayBzaG91bGQgYXV0b21hdGljYWxseSB0cnkgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIHRoZSBhY3RpdmUgcGFnZSAqL1xuICB3aXRob3V0QXV0b0FjdGl2ZTogYm9vbGVhbjtcblxuICAvKiogT3B0aW9ucyB0byByZWZpbmUgaG93IHRoaXMgbGluayB3aWxsIGRldGVybWluZSBpZiBpdCBpcyB0aGUgYWN0aXZlIHBhZ2UgKi9cbiAgYWN0aXZlTGlua09wdGlvbnM/OiBQYXJ0aWFsPEFjdGl2ZUxpbmtPcHRpb25zPjtcblxuICAvKiogVGhlIGludGVybmFsIGFuY2hvciBlbGVtZW50IGZyb20gd2hpY2ggdG8gcHVsbCB0aGUgbG9jYXRpb24gZm9yIGNvbXBhcmlzb24gKi9cbiAgYW5jaG9yRWxlbWVudD86IEhUTUxBbmNob3JFbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgQXV0b0FjdGl2ZUxpbmtNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudCAmIExpbmtJbnRlcmZhY2U+PihcbiAgc3VwZXJDbGFzczogVFxuKSA9PiB7XG4gIGNsYXNzIEF1dG9BY3RpdmVMaW5rRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgYWN0aXZlID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHdpdGhvdXRBdXRvQWN0aXZlID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIHJlZmxlY3Q6IHRydWUgfSkgYWN0aXZlTGlua09wdGlvbnM/OiBQYXJ0aWFsPEFjdGl2ZUxpbmtPcHRpb25zPjtcblxuICAgIGFuY2hvckVsZW1lbnQ/OiBIVE1MQW5jaG9yRWxlbWVudDtcblxuICAgIHByaXZhdGUgdW5zdWI6IFVuc3Vic2NyaWJlcjtcblxuICAgIEBvblVwZGF0ZSgnYWN0aXZlJywgeyB3YWl0VW50aWxGaXJzdFVwZGF0ZTogdHJ1ZSB9KVxuICAgIHByaXZhdGUgaGFuZGxlQWN0aXZlTGlua0NoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3BhZ2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAb25VcGRhdGUoWydocmVmJywgJ2lyZWYnLCAnd2l0aEF1dG9BY3RpdmUnXSwgeyB3YWl0VW50aWxGaXJzdFVwZGF0ZTogdHJ1ZSB9KVxuICAgIHByaXZhdGUgaGFuZGxlQXV0b0FjdGl2ZUNoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmhyZWYgfHwgdGhpc1snaXJlZiddKSB7XG4gICAgICAgIGlmICh0aGlzLndpdGhvdXRBdXRvQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcigpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlVXJsQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUF1dG9BY3RpdmVDaGFuZ2UoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExpc3RlbmVyKCkge1xuICAgICAgaWYgKCF0aGlzLnVuc3ViKSB7XG4gICAgICAgIHRoaXMudW5zdWIgPSBNdGVIaXN0b3J5QXBpU2VydmljZS5zdGF0ZUNoYW5nZXMoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlVXJsQ2hhbmdlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLnVuc3ViPy4oKTtcbiAgICAgIHRoaXMudW5zdWIgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlVXJsQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmUgPSBpc0xpbmtBY3RpdmUoXG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudD8uaHJlZixcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIHRoaXMuYWN0aXZlTGlua09wdGlvbnNcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gQXV0b0FjdGl2ZUxpbmtFbGVtZW50IGFzIENvbnN0cnVjdG9yPEF1dG9BY3RpdmVMaW5rSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQsIFNsb3RDb250cm9sbGVyIH0gZnJvbSAnLi4nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTbG90T2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAvKipcbiAgICogUHJvcCB1c2VkIHRvIGRlY2xhcmUgd2hpY2ggc2xvdHMgYXJlIGJlaW5nIHVzZWQgZHVyaW5nIFNTUiB0byBtYWtlIHRoZW0gdmlzaWJsZSBpbiBjZXJ0YWluIGVkZ2UtY2FzZXMuXG4gICAqL1xuICBzc3JTbG90czogc3RyaW5nO1xuXG4gIHNsb3RDb250cm9sbGVyOiBTbG90Q29udHJvbGxlcjtcblxuICBoYXNTbG90OiAoc2xvdDogc3RyaW5nLCBvclZhbHVlPzogYW55KSA9PiBib29sZWFuO1xuXG4gIHNzclNsb3RDaGVjazogKHNsb3RzOiBzdHJpbmcpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBTbG90T2JzZXJ2ZXJNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgU2xvdE9ic2VydmVyRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIFByb3AgdXNlZCB0byBkZWNsYXJlIHdoaWNoIHNsb3RzIGFyZSBiZWluZyB1c2VkIGR1cmluZyBTU1IgdG8gbWFrZSB0aGVtIHZpc2libGUgaW4gY2VydGFpbiBlZGdlLWNhc2VzLlxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSlcbiAgICBzZXQgc3NyU2xvdHModmFsOiBzdHJpbmcpIHtcbiAgICAgIGxldCBvbGRWYWwgPSB0aGlzLl9zc3JTbG90cztcbiAgICAgIHRoaXMuX3NzclNsb3RzID0gdmFsO1xuICAgICAgLy8gUGFyc2UgYW5kIGNhY2hlIHNzciBzbG90IHNldFxuICAgICAgY29uc3Qgc2xvdHMgPSAodGhpcy5fc3NyU2xvdHMgPz8gJycpXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLm1hcCgoc2xvdCkgPT4gc2xvdC50cmltKCkpO1xuICAgICAgdGhpcy5fc3NyU2xvdFNldCA9IG5ldyBTZXQ8c3RyaW5nPihzbG90cyk7XG4gICAgICAvLyBOb3JtYWwgdXBkYXRlXG4gICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ3NzclNsb3RzJywgb2xkVmFsKTtcbiAgICB9XG4gICAgZ2V0IHNzclNsb3RzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NzclNsb3RzO1xuICAgIH1cbiAgICBwcml2YXRlIF9zc3JTbG90cz86IHN0cmluZztcblxuICAgIC8qKiBAaWdub3JlICovXG4gICAgX3NzclNsb3RTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIHNsb3RDb250cm9sbGVyID0gbmV3IFNsb3RDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBzbG90IGhhcyBjb250ZW50LCBvciBpZiBpdCB3YXMgc3BlY2lmaWVkIGFzIGV4aXN0aW5nIGR1cmluZyBTU1IuXG4gICAgICogT25jZSBjYWxsZWQsIHRoZSBjb21wb25lbnQgd2lsbCBub3cgYXV0b21hdGljYWxseSB1cGRhdGUgaWYgdGhlIGNvbnRlbnRzIG9mIHRoaXMgc2xvdCBjaGFuZ2UuXG4gICAgICovXG4gICAgaGFzU2xvdChzbG90OiBzdHJpbmcsIG9yVmFsdWU/OiBhbnkpOiBib29sZWFuIHtcbiAgICAgIHRoaXMuc2xvdENvbnRyb2xsZXIudXBkYXRlT25DaGFuZ2Uoc2xvdCk7XG4gICAgICAvLyBUT0RPKHJlZWNlKTogcmVjb25zaWRlciB3aGVuIGEgc29sdXRpb24gZXhpc3RzIGZvciBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9pc3N1ZXMvMTQzNFxuICAgICAgLy8gV2UgaGF2ZSB0byBhc3N1bWUgYWxpZ25tZW50IHdpdGggc3NyU2xvdENoZWNrIHVudGlsIHRoZSBmaXJzdCB1cGRhdGUgaGVyZSBvdGhlcndpc2UgcGFydCBtaXNtYXRjaGVzIGNhbiBvY2N1clxuICAgICAgaWYgKCF0aGlzLl9fZmlyc3RVcGRhdGVkKSB7XG4gICAgICAgIHJldHVybiBvclZhbHVlIHx8IHRoaXMuc3NyU2xvdENoZWNrKHNsb3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9yVmFsdWUgfHwgdGhpcy5zbG90Q29udHJvbGxlci5jaGVjayhzbG90KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogV2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGUgcmVxdWVzdGVkIHNsb3Qgd2FzIHNwZWNpZmllZCBpbiB0aGUgbGlzdCBvZiBgc3NyLXNsb3RzYC4gKi9cbiAgICBzc3JTbG90Q2hlY2soc2xvdDogc3RyaW5nKSB7XG4gICAgICBpZiAodGhpcy5fX2ZpcnN0VXBkYXRlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3NyU2xvdFNldC5oYXMoc2xvdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBTbG90T2JzZXJ2ZXJFbGVtZW50IGFzIENvbnN0cnVjdG9yPFNsb3RPYnNlcnZlckludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBGb3JtQ29udHJvbE1peGluLCBGb3JtQ29udHJvbEludGVyZmFjZSB9IGZyb20gJ0BvcGVuLXdjL2Zvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgcXVlcnkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBDb25zdHJ1Y3RvcixcbiAgRGlzYWJsZWRNaXhpbixcbiAgVGFiSW5kZXhNaXhpbixcbiAgTXRlRWxlbWVudCxcbiAgaW5uZXJJbnB1dFZhbGlkYXRvcnMsXG4gIFRhYkluZGV4SW50ZXJmYWNlLFxuICBEaXNhYmxlZEludGVyZmFjZSxcbiAgb25VcGRhdGUsXG4gIGV2ZW50RW1pdHRlcixcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICcuLic7XG5cbi8vIFJlcXVpcmVkIHBvbHlmaWxsIGZvciBub3dcbmltcG9ydCAnLi4vLi4vY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvaW5kZXgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE10ZUNoZWNrYm94Q2hhbmdlRGV0YWlsIHtcbiAgLyoqIFRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCBjaGFuZ2VkICovXG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sIGNoYW5nZWQgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgZWxlbWVudCBpcyBjaGVja2VkICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tib3hJbnRlcmZhY2Uge1xuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgZWxlbWVudCAqL1xuICBsYWJlbD86IHN0cmluZztcblxuICAvKiogVGhlIGVycm9yIHRleHQgZm9yIHRoZSBlbGVtZW50ICovXG4gIGVycm9yPzogc3RyaW5nO1xuXG4gIC8qKiBUaGUgaGludCB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICBoaW50Pzogc3RyaW5nO1xuXG4gIC8qKiBBbiBhcmlhIGxhYmVsIHRoYXQgd2lsbCBiZSBwcm92aWRlZCB0byB0aGUgaW5wdXQgZWxlbWVudCAqL1xuICBhcmlhTGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBuYW1lIGZvciB0aGUgZWxlbWVudC4gVXNlZCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgdmFsdWUgZm9yIHRoZSBlbGVtZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSBlbGVtZW50IHdoZW4gc3VibWl0dGluZyBhIGZvcm0gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudCAgKi9cbiAgdmFsdWU6IHN0cmluZztcblxuICAvKipcbiAgICogQWx0ZXJzIHRoZSBiZWhhdmlvciBvZiB0aGlzIGNvbnRyb2wuIFdoZW4gXCJjb250cm9sbGVkXCIsIGEgY29udHJvbHMgdmFsdWUgaXMgZHJpdmVuIGV4cGxpY2l0bHkgYnkgZXh0ZXJuYWwgc3RhdGVcbiAgICogdmlhIHRoZSBgdmFsdWVgIHByb3AuIENoYW5nZSBldmVudHMgd2lsbCBmaXJlIGJ1dCB0aGUgY29udHJvbCB2YWx1ZSB3aWxsIG5vdCBjaGFuZ2UgdW50aWwgaXQgaXMgYWx0ZXJlZCBkaXJlY3RseS5cbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgY29udHJvbGxlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgY2hlY2tlZCBieSBkZWZhdWx0LiBVc2VmdWwgZm9yIHdoZW4gcmVzZXR0aW5nIGZvcm0gY29udHJvbHMgb3IgdXNpbmcgYSBzdGF0ZWxlc3MgY29tcG9uZW50ICovXG4gIGRlZmF1bHRDaGVja2VkOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGNoZWNrZWQgb3Igbm90ICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlYWRvbmx5ICovXG4gIHJlYWRvbmx5OiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBzZWxlY3RpbmcgdGhlIGVsZW1lbnQgaXMgcmVxdWlyZWQgb3Igbm90ICovXG4gIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gIC8qKiBSZW5kZXJzIHRoZSByZXF1aXJlZCBpbmRpY2F0b3IgZm9yIHRoaXMgaW5wdXRzIGxhYmVsIHdpdGhvdXQgZW5hYmxpbmcgbmF0aXZlIGByZXF1aXJlZGAgdmFsaWRhdGlvbiAqL1xuICBzaG93UmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgaW5wdXQgYmx1cnMgICovXG4gIGhhbmRsZUJsdXIoKTogdm9pZDtcblxuICAvKiogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBpbnB1dCBpcyBmb2N1c2VkIG9uICAqL1xuICBoYW5kbGVGb2N1cygpOiB2b2lkO1xuXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCBjaGFuZ2VzICAqL1xuICBoYW5kbGVDaGFuZ2UoKTogdm9pZDtcblxuICAvKiogQSBzZXQgb2YgYXR0cmlidXRlcyB0byBiZSBmb3J3YXJkZWQgdG8gYW4gZWxlbWVudCB3aXRoaW4gcmVuZGVyIGFuZCByZW1vdmVkIGZyb20gdGhlIGVsZW1lbnQgKi9cbiAgaW5oZXJpdGVkQXR0cmlidXRlczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGNvbnN0IENoZWNrYm94TWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIENoZWNrYm94RWxlbWVudCBleHRlbmRzIFRhYkluZGV4TWl4aW4oRm9ybUNvbnRyb2xNaXhpbihEaXNhYmxlZE1peGluKHN1cGVyQ2xhc3MpKSwge1xuICAgIGluaXRpYWxUYWJJbmRleDogMCxcbiAgfSkge1xuICAgIGluaGVyaXRlZEF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICAgIC8qKiBAaWdub3JlICovXG4gICAgc3RhdGljIGZvcm1Db250cm9sVmFsaWRhdG9ycyA9IGlubmVySW5wdXRWYWxpZGF0b3JzO1xuXG4gICAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoKSBsYWJlbD86IHN0cmluZztcblxuICAgIC8qKiBUaGUgZXJyb3IgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoKSBlcnJvcj86IHN0cmluZztcblxuICAgIC8qKiBUaGUgaGludCB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSgpIGhpbnQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBbHRlcnMgdGhlIGJlaGF2aW9yIG9mIHRoaXMgY29udHJvbC4gV2hlbiBcImNvbnRyb2xsZWRcIiwgYSBjb250cm9scyB2YWx1ZSBpcyBkcml2ZW4gZXhwbGljaXRseSBieSBleHRlcm5hbCBzdGF0ZVxuICAgICAqIHZpYSB0aGUgYHZhbHVlYCBwcm9wLiBDaGFuZ2UgZXZlbnRzIHdpbGwgZmlyZSBidXQgdGhlIGNvbnRyb2wgdmFsdWUgd2lsbCBub3QgY2hhbmdlIHVudGlsIGl0IGlzIGFsdGVyZWQgZGlyZWN0bHkuXG4gICAgICogQGV4cGVyaW1lbnRhbFxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgY29udHJvbGxlZDogYm9vbGVhbjtcblxuICAgIC8qKiBBbiBhcmlhIGxhYmVsIHRoYXQgd2lsbCBiZSBwcm92aWRlZCB0byB0aGUgaW5wdXQgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ2FyaWEtbGFiZWwnLCByZWZsZWN0OiB0cnVlIH0pIGFyaWFMYWJlbDogc3RyaW5nO1xuXG4gICAgLyoqIFRoZSBuYW1lIGZvciB0aGUgZWxlbWVudC4gVXNlZCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIG5hbWU6IHN0cmluZztcblxuICAgIC8qKiBUaGUgdmFsdWUgZm9yIHRoZSBlbGVtZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSBlbGVtZW50IHdoZW4gc3VibWl0dGluZyBhIGZvcm0gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudCAgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHZhbHVlPyA9ICdvbic7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgY2hlY2tlZCBieSBkZWZhdWx0LiBVc2VmdWwgZm9yIHdoZW4gcmVzZXR0aW5nIGZvcm0gY29udHJvbHMgb3IgdXNpbmcgYSBzdGF0ZWxlc3MgY29tcG9uZW50ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBkZWZhdWx0Q2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgY2hlY2tlZCBvciBub3QgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGNoZWNrZWQgPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBiZSByZWFkb25seSAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcmVhZG9ubHkgPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBzZWxlY3RpbmcgdGhlIGVsZW1lbnQgaXMgcmVxdWlyZWQgb3Igbm90ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSByZXF1aXJlZCA9IGZhbHNlO1xuXG4gICAgLyoqIFJlbmRlcnMgdGhlIHJlcXVpcmVkIGluZGljYXRvciBmb3IgdGhpcyBpbnB1dHMgbGFiZWwgd2l0aG91dCBlbmFibGluZyBuYXRpdmUgYHJlcXVpcmVkYCB2YWxpZGF0aW9uICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBzaG93UmVxdWlyZWQ/O1xuXG4gICAgLyoqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgd2l0aGluIHRoZSBmb3JtIGNvbnRyb2wgbWl4aW4gKi9cbiAgICBAcXVlcnkoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpIHZhbGlkYXRpb25UYXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoZSBlbGVtZW50J3Mgc3RhdGUgaXMgYWJvdXQgdG8gY2hhbmdlLiBJZiBkZWZhdWx0IGlzIHByZXZlbnRlZCwgaXQgd2lsbCByZXZlcnQgdGhlIGNoZWNrYm94IHRvIGl0J3Mgb3JpZ2luYWwgY2hlY2tlZCBzdGF0ZSBwcmlvciB0byBzZWxlY3RpbmcuICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF93aWxsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TXRlQ2hlY2tib3hDaGFuZ2VEZXRhaWw+O1xuXG4gICAgLyoqIEVtaXR0ZWQgd2hlbiB0aGUgZWxlbWVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkLiAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxNdGVDaGVja2JveENoYW5nZURldGFpbD47XG5cbiAgICAvKiogRW1pdHMgd2hlbiB0aGlzIGVsZW1lbnQgaXMgZm9jdXNlZCAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25Gb2N1czogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIEVtaXRzIHdoZW4gdGhpcyBlbGVtZW50IGxvc2VzIGZvY3VzICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkJsdXI6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBvblVwZGF0ZSgnZGVmYXVsdENoZWNrZWQnKVxuICAgIHByb3RlY3RlZCBvbkRlZmF1bHRDaGVja2VkQ2hhbmdlKCkge1xuICAgICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkICYmIHRoaXMuZGVmYXVsdENoZWNrZWQgJiYgIXRoaXMuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBvblVwZGF0ZShbJ3ZhbHVlJywgJ2NoZWNrZWQnXSwgeyBvbjogJ2JvdGgnIH0pXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBAb25VcGRhdGUoJ2FyaWFMYWJlbCcsIHsgb246ICdib3RoJyB9KVxuICAgIHByb3RlY3RlZCB1cGRhdGVMYWJlbCgpIHtcbiAgICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IHtcbiAgICAgICAgLi4udGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzLFxuICAgICAgICBhcmlhTGFiZWw6IHRoaXMuYXJpYUxhYmVsLFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogLS0gRm9ybSBjb250cm9sIHZhbGlkYXRpb24gb3ZlcnJpZGVzIC0tICovXG4gICAgc2hvdWxkRm9ybVZhbHVlVXBkYXRlKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRGb3JtQ29udHJvbCgpOiB2b2lkIHtcbiAgICAgIHN1cGVyLnJlc2V0Rm9ybUNvbnRyb2w/LigpO1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMuZGVmYXVsdENoZWNrZWQ7XG4gICAgfVxuXG4gICAgdmFsaWRpdHlDYWxsYmFjaygpOiBzdHJpbmcgfCB2b2lkIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9yIHx8IHRoaXMudmFsaWRhdGlvblRhcmdldD8udmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgfVxuXG4gICAgLyoqIC0tIFRhYkluZGV4IG92ZXJyaWRlcyAtLSAqL1xuICAgIGdldFRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICBzZXRUYWJJbmRleEFkYXB0ZXIodmFsdWU6IHN0cmluZykge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm90UHJldmVudGVkID0gdGhpcy5fd2lsbENoYW5nZS5lbWl0KFxuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIGNoZWNrZWQ6ICF0aGlzLmNoZWNrZWQsXG4gICAgICAgIH0sXG4gICAgICAgIHsgY2FuY2VsYWJsZTogdHJ1ZSB9XG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5jb250cm9sbGVkKSB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBjaGVja2VkOiAhdGhpcy5jaGVja2VkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG5vdFByZXZlbnRlZCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgY2hlY2tlZDogdGhpcy5jaGVja2VkLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5fb25CbHVyLmVtaXQoKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9vbkZvY3VzLmVtaXQoKTtcbiAgICB9O1xuXG4gICAgLyoqIENsaWNrcyB0aGUgZWxlbWVudCAqL1xuICAgIHB1YmxpYyBjbGljaygpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblRhcmdldC5jbGljaygpO1xuICAgIH1cblxuICAgIC8qKiBGb2N1c2VzIHRoZSBlbGVtZW50ICovXG4gICAgcHVibGljIGZvY3VzKCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqIEJsdXJzIHRoZSBlbGVtZW50ICovXG4gICAgcHVibGljIGJsdXIoKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBDaGVja2JveEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8XG4gICAgQ2hlY2tib3hJbnRlcmZhY2UgJiBUYWJJbmRleEludGVyZmFjZSAmIEZvcm1Db250cm9sSW50ZXJmYWNlICYgRGlzYWJsZWRJbnRlcmZhY2VcbiAgPiAmXG4gICAgVDtcbn07XG4iLCAiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgdGhlIFdlYWtNYXBzIHVzZWQgdGhyb3VnaG91dCB0aGlzIHByb2plY3QuIFRoZSBXZWFrTWFwcyBleGlzdCB0byB0aWVcbiAqIG9iamVjdHMgdG9nZXRoZXIgd2l0aG91dCBwb2xsdXRpbmcgdGhlIG9iamVjdHMgdGhlbXNlbHZlcyB3aXRoIHJlZmVyZW5jZXMgd2UnZCByYXRoZXIga2VlcFxuICogaGlkZGVuLiBUaGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gd29yayBhcyB0cmFuc3BhcmVudGx5IGFzIHBvc3NpYmxlLlxuICovXG5pbXBvcnQgeyBJRWxlbWVudEludGVybmFscywgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqIFVzZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBpdCBpcyBhdHRhY2hlZCB0byAqL1xuZXhwb3J0IGNvbnN0IHJlZk1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBJQ3VzdG9tRWxlbWVudD4oKTtcblxuLyoqIFVzZWUgYW4gRWxlbWVudHNJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGl0cyBWYWxpZGl0eVN0YXRlIG9iamVjdCAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkaXR5TWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIFZhbGlkaXR5U3RhdGU+KCk7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgaXRzIGF0dGFjaGVkIGlucHV0W3R5cGU9XCJoaWRkZW5cIl0gKi9cbmV4cG9ydCBjb25zdCBoaWRkZW5JbnB1dE1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBIVE1MSW5wdXRFbGVtZW50W10+KCk7XG5cbi8qKiBVc2UgYSBjdXN0b20gZWxlbWVudCB0byBnZXQgaXRzIGF0dGFjaGVkIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgKi9cbmV4cG9ydCBjb25zdCBpbnRlcm5hbHNNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHM+KCk7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgdGhlIGF0dGFjaGVkIHZhbGlkYXRpb24gbWVzc2FnZSAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25NZXNzYWdlTWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIHN0cmluZz4oKTtcblxuLyoqIFVzZSBhIGZvcm0gZWxlbWVudCB0byBnZXQgYXR0YWNoZWQgY3VzdG9tIGVsZW1lbnRzIGFuZCBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlcyAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmV4cG9ydCBjb25zdCBmb3Jtc01hcCA9IG5ldyBXZWFrTWFwPEhUTUxGb3JtRWxlbWVudCwgT2JqZWN0PigpO1xuXG4vKiogVXNlIGEgY3VzdG9tIGVsZW1lbnQgb3Igb3RoZXIgb2JqZWN0IHRvIGdldCB0aGVpciBhc3NvY2lhdGVkIE11dGF0aW9uT2JzZXJ2ZXJzICovXG5leHBvcnQgY29uc3Qgc2hhZG93SG9zdHNNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgTXV0YXRpb25PYnNlcnZlcj4oKTtcblxuLyoqIFVzZSBhIGZvcm0gZWxlbWVudCB0byBnZXQgYSBzZXQgb2YgYXR0YWNoZWQgY3VzdG9tIGVsZW1lbnRzICovXG5leHBvcnQgY29uc3QgZm9ybUVsZW1lbnRzTWFwID0gbmV3IFdlYWtNYXA8SFRNTEZvcm1FbGVtZW50LCBTZXQ8SUN1c3RvbUVsZW1lbnQ+PigpO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIGFuIGVsZW1lbnQncyB2YWx1ZSAqL1xuZXhwb3J0IGNvbnN0IHJlZlZhbHVlTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIGFueT4oKTtcblxuLyoqIEVsZW1lbnRzIHRoYXQgbmVlZCB0byBiZSB1cGdyYWRlZCBvbmNlIGFkZGVkIHRvIHRoZSBET00gKi9cbmV4cG9ydCBjb25zdCB1cGdyYWRlTWFwID0gbmV3IFdlYWtNYXA8RWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHM+KCk7XG5cbi8qKiBTYXZlIHJlZmVyZW5jZXMgdG8gc2hhZG93IHJvb3RzIGZvciBpbmNsdXNpb24gaW4gaW50ZXJuYWxzIGluc3RhbmNlICovXG5leHBvcnQgY29uc3Qgc2hhZG93Um9vdE1hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBTaGFkb3dSb290PigpO1xuXG4vKiogU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgaW50ZXJuYWxzJyB2YWxpZGF0aW9uIGFuY2hvciAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25BbmNob3JNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgSFRNTEVsZW1lbnQ+KCk7XG5cbi8qKiBNYXAgRG9jdW1lbnRGcmFnbWVudHMgdG8gdGhlaXIgTXV0YXRpb25PYnNlcnZlcnMgc28gd2UgY2FuIGRpc2Nvbm5lY3Qgb25jZSBlbGVtZW50cyBhcmUgcmVtb3ZlZCAqL1xuZXhwb3J0IGNvbnN0IGRvY3VtZW50RnJhZ21lbnRNYXAgPSBuZXcgV2Vha01hcDxEb2N1bWVudEZyYWdtZW50LCBNdXRhdGlvbk9ic2VydmVyPigpO1xuXG4vKiogV2hldGhlciBjb25uZWN0ZWRDYWxsYmFjayBoYXMgYWxyZWFkeSBiZWVuIGNhbGxlZC4gKi9cbmV4cG9ydCBjb25zdCBjb25uZWN0ZWRDYWxsYmFja01hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBib29sZWFuPigpO1xuXG4vKiogU2F2ZSBhIHJlZmVyZW5jZSB0byB2YWxpZGl0eSBzdGF0ZSBmb3IgZWxlbWVudHMgdGhhdCBuZWVkIHRvIHVwZ3JhZGUgYWZ0ZXIgYmVpbmcgY29ubmVjdGVkICovXG5leHBvcnQgY29uc3QgdmFsaWRpdHlVcGdyYWRlTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzPigpO1xuIiwgImltcG9ydCB7IHVwZ3JhZGVNYXAgfSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHsgSUFvbSwgSUVsZW1lbnRJbnRlcm5hbHMgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuZXhwb3J0IGNvbnN0IGFvbTogSUFvbSA9IHtcbiAgYXJpYUF0b21pYzogJ2FyaWEtYXRvbWljJyxcbiAgYXJpYUF1dG9Db21wbGV0ZTogJ2FyaWEtYXV0b2NvbXBsZXRlJyxcbiAgYXJpYUJ1c3k6ICdhcmlhLWJ1c3knLFxuICBhcmlhQ2hlY2tlZDogJ2FyaWEtY2hlY2tlZCcsXG4gIGFyaWFDb2xDb3VudDogJ2FyaWEtY29sY291bnQnLFxuICBhcmlhQ29sSW5kZXg6ICdhcmlhLWNvbGluZGV4JyxcbiAgYXJpYUNvbEluZGV4VGV4dDogJ2FyaWEtY29saW5kZXh0ZXh0JyxcbiAgYXJpYUNvbFNwYW46ICdhcmlhLWNvbHNwYW4nLFxuICBhcmlhQ3VycmVudDogJ2FyaWEtY3VycmVudCcsXG4gIGFyaWFEaXNhYmxlZDogJ2FyaWEtZGlzYWJsZWQnLFxuICBhcmlhRXhwYW5kZWQ6ICdhcmlhLWV4cGFuZGVkJyxcbiAgYXJpYUhhc1BvcHVwOiAnYXJpYS1oYXNwb3B1cCcsXG4gIGFyaWFIaWRkZW46ICdhcmlhLWhpZGRlbicsXG4gIGFyaWFJbnZhbGlkOiAnYXJpYS1pbnZhbGlkJyxcbiAgYXJpYUtleVNob3J0Y3V0czogJ2FyaWEta2V5c2hvcnRjdXRzJyxcbiAgYXJpYUxhYmVsOiAnYXJpYS1sYWJlbCcsXG4gIGFyaWFMZXZlbDogJ2FyaWEtbGV2ZWwnLFxuICBhcmlhTGl2ZTogJ2FyaWEtbGl2ZScsXG4gIGFyaWFNb2RhbDogJ2FyaWEtbW9kYWwnLFxuICBhcmlhTXVsdGlMaW5lOiAnYXJpYS1tdWx0aWxpbmUnLFxuICBhcmlhTXVsdGlTZWxlY3RhYmxlOiAnYXJpYS1tdWx0aXNlbGVjdGFibGUnLFxuICBhcmlhT3JpZW50YXRpb246ICdhcmlhLW9yaWVudGF0aW9uJyxcbiAgYXJpYVBsYWNlaG9sZGVyOiAnYXJpYS1wbGFjZWhvbGRlcicsXG4gIGFyaWFQb3NJblNldDogJ2FyaWEtcG9zaW5zZXQnLFxuICBhcmlhUHJlc3NlZDogJ2FyaWEtcHJlc3NlZCcsXG4gIGFyaWFSZWFkT25seTogJ2FyaWEtcmVhZG9ubHknLFxuICBhcmlhUmVsZXZhbnQ6ICdhcmlhLXJlbGV2YW50JyxcbiAgYXJpYVJlcXVpcmVkOiAnYXJpYS1yZXF1aXJlZCcsXG4gIGFyaWFSb2xlRGVzY3JpcHRpb246ICdhcmlhLXJvbGVkZXNjcmlwdGlvbicsXG4gIGFyaWFSb3dDb3VudDogJ2FyaWEtcm93Y291bnQnLFxuICBhcmlhUm93SW5kZXg6ICdhcmlhLXJvd2luZGV4JyxcbiAgYXJpYVJvd0luZGV4VGV4dDogJ2FyaWEtcm93aW5kZXh0ZXh0JyxcbiAgYXJpYVJvd1NwYW46ICdhcmlhLXJvd3NwYW4nLFxuICBhcmlhU2VsZWN0ZWQ6ICdhcmlhLXNlbGVjdGVkJyxcbiAgYXJpYVNldFNpemU6ICdhcmlhLXNldHNpemUnLFxuICBhcmlhU29ydDogJ2FyaWEtc29ydCcsXG4gIGFyaWFWYWx1ZU1heDogJ2FyaWEtdmFsdWVtYXgnLFxuICBhcmlhVmFsdWVNaW46ICdhcmlhLXZhbHVlbWluJyxcbiAgYXJpYVZhbHVlTm93OiAnYXJpYS12YWx1ZW5vdycsXG4gIGFyaWFWYWx1ZVRleHQ6ICdhcmlhLXZhbHVldGV4dCcsXG4gIHJvbGU6ICdyb2xlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0QW9tID0gKHJlZjogRWxlbWVudCwgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscykgPT4ge1xuICBmb3IgKGxldCBrZXkgaW4gYW9tKSB7XG4gICAgaW50ZXJuYWxzW2tleV0gPSBudWxsO1xuXG4gICAgbGV0IGNsb3N1cmVWYWx1ZSA9IG51bGw7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGFvbVtrZXldO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnRlcm5hbHMsIGtleSwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gY2xvc3VyZVZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICBjbG9zdXJlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgIHJlZi5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVwZ3JhZGVNYXAuc2V0KHJlZiwgaW50ZXJuYWxzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufTtcbiIsICJpbXBvcnQge1xuICBpbnRlcm5hbHNNYXAsXG4gIHNoYWRvd0hvc3RzTWFwLFxuICB1cGdyYWRlTWFwLFxuICBoaWRkZW5JbnB1dE1hcCxcbiAgZG9jdW1lbnRGcmFnbWVudE1hcCxcbiAgZm9ybUVsZW1lbnRzTWFwLFxuICB2YWxpZGl0eVVwZ3JhZGVNYXAsXG4gIHJlZlZhbHVlTWFwLFxufSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHsgYW9tIH0gZnJvbSAnLi9hb20uanMnO1xuaW1wb3J0IHtcbiAgcmVtb3ZlSGlkZGVuSW5wdXRzLFxuICBpbml0Rm9ybSxcbiAgaW5pdExhYmVscyxcbiAgdXBncmFkZUludGVybmFscyxcbiAgc2V0RGlzYWJsZWQsXG4gIG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuZnVuY3Rpb24gaW5pdE5vZGUobm9kZTogSUN1c3RvbUVsZW1lbnQpOiB2b2lkIHtcbiAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChub2RlKTtcbiAgY29uc3QgeyBmb3JtIH0gPSBpbnRlcm5hbHM7XG4gIGluaXRGb3JtKG5vZGUsIGZvcm0sIGludGVybmFscyk7XG4gIGluaXRMYWJlbHMobm9kZSwgaW50ZXJuYWxzLmxhYmVscyk7XG59XG5cbi8qKlxuICogSWYgYSBmaWVsZHNldCdzIGRpc2FibGVkIHN0YXRlIGlzIHRvZ2dsZWQsIHRoZSBmb3JtRGlzYWJsZWRDYWxsYmFja1xuICogb24gYW55IGNoaWxkIGZvcm0tYXNzb2NpYXRlZCBjdXNvdG0gZWxlbWVudHMuXG4gKi9cbmV4cG9ydCBjb25zdCB3YWxrRmllbGRzZXQgPSAobm9kZTogSFRNTEZpZWxkU2V0RWxlbWVudCwgZmlyc3RSZW5kZXIgPSBmYWxzZSk6IHZvaWQgPT4ge1xuICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKG5vZGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCB7XG4gICAgYWNjZXB0Tm9kZShub2RlOiBJQ3VzdG9tRWxlbWVudCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gaW50ZXJuYWxzTWFwLmhhcyhub2RlKSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVA7XG4gICAgfSxcbiAgfSk7XG5cbiAgbGV0IGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcbiAgLyoqXG4gICAqIFdlIGRvbid0IG5lZWQgdG8gY2FsbCBhbnl0aGluZyBvbiBmaXJzdCByZW5kZXIgaWZcbiAgICogdGhlIGVsZW1lbnQgaXNuJ3QgZGlzYWJsZWRcbiAgICovXG4gIGNvbnN0IGlzQ2FsbE5lY2Vzc2FyeSA9ICFmaXJzdFJlbmRlciB8fCBub2RlLmRpc2FibGVkO1xuXG4gIHdoaWxlIChjdXJyZW50KSB7XG4gICAgaWYgKGN1cnJlbnQuZm9ybURpc2FibGVkQ2FsbGJhY2sgJiYgaXNDYWxsTmVjZXNzYXJ5KSB7XG4gICAgICBzZXREaXNhYmxlZChjdXJyZW50LCBub2RlLmRpc2FibGVkKTtcbiAgICB9XG4gICAgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZzogTXV0YXRpb25PYnNlcnZlckluaXQgPSB7XG4gIGF0dHJpYnV0ZXM6IHRydWUsXG4gIGF0dHJpYnV0ZUZpbHRlcjogWydkaXNhYmxlZCcsICduYW1lJ10sXG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRPck5hbWVPYnNlcnZlciA9IG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKVxuICA/IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnNMaXN0OiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0IGFzIElDdXN0b21FbGVtZW50O1xuXG4gICAgICAgIC8qKiBNYW5hZ2UgY2hhbmdlcyB0byB0aGUgcmVmJ3MgZGlzYWJsZWQgc3RhdGUgKi9cbiAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0LmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICAgICAgICBzZXREaXNhYmxlZCh0YXJnZXQsIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmxvY2FsTmFtZSA9PT0gJ2ZpZWxkc2V0Jykge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXB1cnBvc2UgdGhlIG9ic2VydmVyIGZvciBmaWVsZHNldHMgd2hpY2ggbmVlZFxuICAgICAgICAgICAgICogdG8gYmUgd2Fsa2VkIHdoZW5ldmVyIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgaXMgc2V0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHdhbGtGaWVsZHNldCh0YXJnZXQgYXMgdW5rbm93biBhcyBIVE1MRmllbGRTZXRFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqIE1hbmFnZSBjaGFuZ2VzIHRvIHRoZSByZWYncyBuYW1lICovXG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnbmFtZScpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0LmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlZlZhbHVlTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgaW50ZXJuYWxzLnNldEZvcm1WYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgOiAoe30gYXMgTXV0YXRpb25PYnNlcnZlcik7XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlckNhbGxiYWNrKG11dGF0aW9uTGlzdDogTXV0YXRpb25SZWNvcmRbXSkge1xuICBtdXRhdGlvbkxpc3QuZm9yRWFjaCgobXV0YXRpb25SZWNvcmQpID0+IHtcbiAgICBjb25zdCB7IGFkZGVkTm9kZXMsIHJlbW92ZWROb2RlcyB9ID0gbXV0YXRpb25SZWNvcmQ7XG4gICAgY29uc3QgYWRkZWQgPSBBcnJheS5mcm9tKGFkZGVkTm9kZXMpIGFzIElDdXN0b21FbGVtZW50W107XG4gICAgY29uc3QgcmVtb3ZlZCA9IEFycmF5LmZyb20ocmVtb3ZlZE5vZGVzKSBhcyBJQ3VzdG9tRWxlbWVudFtdO1xuXG4gICAgYWRkZWQuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgLyoqIEFsbG93cyBmb3IgZHluYW1pYyBhZGRpdGlvbiBvZiBlbGVtZW50cyB0byBmb3JtcyAqL1xuICAgICAgaWYgKGludGVybmFsc01hcC5oYXMobm9kZSkgJiYgbm9kZS5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgICBpbml0Tm9kZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgLyoqIFVwZ3JhZGUgdGhlIGFjY2Vzc2liaWxpdHkgaW5mb3JtYXRpb24gb24gYW55IHByZXZpb3VzbHkgY29ubmVjdGVkICovXG4gICAgICBpZiAodXBncmFkZU1hcC5oYXMobm9kZSkpIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gdXBncmFkZU1hcC5nZXQobm9kZSk7XG4gICAgICAgIGNvbnN0IGFvbUtleXMgPSBPYmplY3Qua2V5cyhhb20pO1xuICAgICAgICBhb21LZXlzXG4gICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBpbnRlcm5hbHNba2V5XSAhPT0gbnVsbClcbiAgICAgICAgICAuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhb21ba2V5XSwgaW50ZXJuYWxzW2tleV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB1cGdyYWRlTWFwLmRlbGV0ZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgLyoqIFVwZ3JhZGUgdGhlIHZhbGlkaXR5IHN0YXRlIHdoZW4gdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkICovXG4gICAgICBpZiAodmFsaWRpdHlVcGdyYWRlTWFwLmhhcyhub2RlKSkge1xuICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSB2YWxpZGl0eVVwZ3JhZGVNYXAuZ2V0KG5vZGUpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgaW50ZXJuYWxzLnZhbGlkaXR5LnZhbGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnaW50ZXJuYWxzLWludmFsaWQnLCAoIWludGVybmFscy52YWxpZGl0eS52YWxpZCkudG9TdHJpbmcoKSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCAoIWludGVybmFscy52YWxpZGl0eS52YWxpZCkudG9TdHJpbmcoKSk7XG4gICAgICAgIHZhbGlkaXR5VXBncmFkZU1hcC5kZWxldGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKiBJZiB0aGUgbm9kZSB0aGF0J3MgYWRkZWQgaXMgYSBmb3JtLCBjaGVjayB0aGUgdmFsaWRpdHkgKi9cbiAgICAgIGlmIChub2RlLmxvY2FsTmFtZSA9PT0gJ2Zvcm0nKSB7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQobm9kZSBhcyB1bmtub3duIGFzIEhUTUxGb3JtRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIobm9kZSwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIHtcbiAgICAgICAgICBhY2NlcHROb2RlKG5vZGU6IElDdXN0b21FbGVtZW50KTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBpbnRlcm5hbHNNYXAuaGFzKG5vZGUpICYmICEoZm9ybUVsZW1lbnRzICYmIGZvcm1FbGVtZW50cy5oYXMobm9kZSkpXG4gICAgICAgICAgICAgID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUXG4gICAgICAgICAgICAgIDogTm9kZUZpbHRlci5GSUxURVJfU0tJUDtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgaW5pdE5vZGUoY3VycmVudCk7XG4gICAgICAgICAgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmxvY2FsTmFtZSA9PT0gJ2ZpZWxkc2V0Jykge1xuICAgICAgICBkaXNhYmxlZE9yTmFtZU9ic2VydmVyLm9ic2VydmU/Lihub2RlLCBkaXNhYmxlZE9yTmFtZU9ic2VydmVyQ29uZmlnKTtcbiAgICAgICAgd2Fsa0ZpZWxkc2V0KG5vZGUgYXMgdW5rbm93biBhcyBIVE1MRmllbGRTZXRFbGVtZW50LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlbW92ZWQuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChub2RlKTtcbiAgICAgIC8qKiBDbGVhbiB1cCBhbnkgaGlkZGVuIGlucHV0IGVsZW1lbnRzIGxlZnQgYWZ0ZXIgYW4gZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQgKi9cbiAgICAgIGlmIChpbnRlcm5hbHMgJiYgaGlkZGVuSW5wdXRNYXAuZ2V0KGludGVybmFscykpIHtcbiAgICAgICAgcmVtb3ZlSGlkZGVuSW5wdXRzKGludGVybmFscyk7XG4gICAgICB9XG4gICAgICAvKiogRGlzY29ubmVjdCBhbnkgdW5uZWVkZWQgTXV0YXRpb25PYnNlcnZlcnMgKi9cbiAgICAgIGlmIChzaGFkb3dIb3N0c01hcC5oYXMobm9kZSkpIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBzaGFkb3dIb3N0c01hcC5nZXQobm9kZSk7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhpcyBvYnNlcnZlciBjYWxsYmFjayBpcyBqdXN0IGZvciBkb2N1bWVudCBmcmFnbWVudHNcbiAqIGl0IHdpbGwgdXBncmFkZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIGlmIHdhcyBhcHBlbmRlZFxuICogZnJvbSBhIGRvY3VtZW50IGZyYWdtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJhZ21lbnRPYnNlcnZlckNhbGxiYWNrKG11dGF0aW9uTGlzdDogTXV0YXRpb25SZWNvcmRbXSk6IHZvaWQge1xuICBtdXRhdGlvbkxpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICBjb25zdCB7IHJlbW92ZWROb2RlcyB9ID0gbXV0YXRpb247XG5cbiAgICByZW1vdmVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBkb2N1bWVudEZyYWdtZW50TWFwLmdldChtdXRhdGlvbi50YXJnZXQgYXMgRG9jdW1lbnRGcmFnbWVudCk7XG4gICAgICBpZiAoaW50ZXJuYWxzTWFwLmhhcyhub2RlIGFzIElDdXN0b21FbGVtZW50KSkge1xuICAgICAgICB1cGdyYWRlSW50ZXJuYWxzKG5vZGUgYXMgSUN1c3RvbUVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBEZWZlciB0aGUgdXBncmFkZSBvZiBub2RlcyB3aXRoaW5nIGEgRG9jdW1lbnRGcmFnbWVudFxuICogQHBhcmFtIGZyYWdtZW50IHtEb2N1bWVudEZyYWdtZW50fVxuICovXG5leHBvcnQgY29uc3QgZGVmZXJVcGdyYWRlID0gKGZyYWdtZW50OiBEb2N1bWVudEZyYWdtZW50KSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnJhZ21lbnRPYnNlcnZlckNhbGxiYWNrKTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZT8uKGZyYWdtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgZG9jdW1lbnRGcmFnbWVudE1hcC5zZXQoZnJhZ21lbnQsIG9ic2VydmVyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvYnNlcnZlciA9IG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKVxuICA/IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spXG4gIDogKHt9IGFzIE11dGF0aW9uT2JzZXJ2ZXIpO1xuZXhwb3J0IGNvbnN0IG9ic2VydmVyQ29uZmlnOiBNdXRhdGlvbk9ic2VydmVySW5pdCA9IHtcbiAgY2hpbGRMaXN0OiB0cnVlLFxuICBzdWJ0cmVlOiB0cnVlLFxufTtcbiIsICJpbXBvcnQgeyBoaWRkZW5JbnB1dE1hcCwgZm9ybXNNYXAsIGZvcm1FbGVtZW50c01hcCwgaW50ZXJuYWxzTWFwIH0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIsIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWcgfSBmcm9tICcuL211dGF0aW9uLW9ic2VydmVycy5qcyc7XG5pbXBvcnQgeyBJQ3VzdG9tRWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHMsIExhYmVsc0xpc3QgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuLyoqXG4gKiBUb2dnbGUncyB0aGUgZGlzYWJsZWQgc3RhdGUgKGF0dHJpYnV0ZXMgJiBjYWxsYmFjaykgb24gdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSBjdXN0b20gZWxlbWVudCBpbnN0YW5jZVxuICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZCAtIFRoZSBkaXNhYmxlZCBzdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgc2V0RGlzYWJsZWQgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLWRpc2FibGVkJywgZGlzYWJsZWQpO1xuXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIHJlZi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICB9IGVsc2Uge1xuICAgIHJlZi5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKTtcbiAgfVxuXG4gIGlmIChyZWYuZm9ybURpc2FibGVkQ2FsbGJhY2spIHtcbiAgICByZWYuZm9ybURpc2FibGVkQ2FsbGJhY2suYXBwbHkocmVmLCBbZGlzYWJsZWRdKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBoaWRkZW4gaW5wdXRzIGZvciB0aGUgZ2l2ZW4gZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUhpZGRlbklucHV0cyA9IChpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzKTogdm9pZCA9PiB7XG4gIGNvbnN0IGhpZGRlbklucHV0cyA9IGhpZGRlbklucHV0TWFwLmdldChpbnRlcm5hbHMpO1xuICBoaWRkZW5JbnB1dHMuZm9yRWFjaCgoaGlkZGVuSW5wdXQpID0+IHtcbiAgICBoaWRkZW5JbnB1dC5yZW1vdmUoKTtcbiAgfSk7XG4gIGhpZGRlbklucHV0TWFwLnNldChpbnRlcm5hbHMsIFtdKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhpZGRlbiBpbnB1dCBmb3IgdGhlIGdpdmVuIHJlZlxuICogQHBhcmFtIHtJQ3VzdG9tRWxlbWVudH0gcmVmIC0gVGhlIGVsZW1lbnQgdG8gd2F0Y2hcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZSBmb3IgdGhlIHJlZlxuICogQHJldHVybiB7SFRNTElucHV0RWxlbWVudH0gVGhlIGhpZGRlbiBpbnB1dFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlSGlkZGVuSW5wdXQgPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHNcbik6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gJ2hpZGRlbic7XG4gIGlucHV0Lm5hbWUgPSByZWYuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gIHJlZi5hZnRlcihpbnB1dCk7XG4gIGhpZGRlbklucHV0TWFwLmdldChpbnRlcm5hbHMpLnB1c2goaW5wdXQpO1xuICByZXR1cm4gaW5wdXQ7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSByZWYgYnkgc2V0dGluZyB1cCBhbiBhdHRyaWJ1dGUgb2JzZXJ2ZSBvbiBpdFxuICogbG9va2luZyBmb3IgY2hhbmdlcyB0byBkaXNhYmxlZFxuICogQHBhcmFtIHtJQ3VzdG9tRWxlbWVudH0gcmVmIC0gVGhlIGVsZW1lbnQgdG8gd2F0Y2hcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZSBmb3IgdGhlIHJlZlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRSZWYgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscyk6IHZvaWQgPT4ge1xuICBoaWRkZW5JbnB1dE1hcC5zZXQoaW50ZXJuYWxzLCBbXSk7XG4gIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIub2JzZXJ2ZT8uKHJlZiwgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZyk7XG59O1xuXG4vKipcbiAqIFNldCB1cCBsYWJlbHMgZm9yIHRoZSByZWZcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSByZWYgdG8gYWRkIGxhYmVscyB0b1xuICogQHBhcmFtIHtMYWJlbHNMaXN0fSBsYWJlbHMgLSBBIGxpc3Qgb2YgdGhlIGxhYmVsc1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRMYWJlbHMgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgbGFiZWxzOiBMYWJlbHNMaXN0KTogdm9pZCA9PiB7XG4gIGlmIChsYWJlbHMubGVuZ3RoKSB7XG4gICAgQXJyYXkuZnJvbShsYWJlbHMpLmZvckVhY2goKGxhYmVsKSA9PiBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlZi5jbGljay5iaW5kKHJlZikpKTtcbiAgICBsZXQgZmlyc3RMYWJlbElkID0gbGFiZWxzWzBdLmlkO1xuICAgIGlmICghbGFiZWxzWzBdLmlkKSB7XG4gICAgICBmaXJzdExhYmVsSWQgPSBgJHtsYWJlbHNbMF0uaHRtbEZvcn1fTGFiZWxgO1xuICAgICAgbGFiZWxzWzBdLmlkID0gZmlyc3RMYWJlbElkO1xuICAgIH1cbiAgICByZWYuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBmaXJzdExhYmVsSWQpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGludGVybmFscy12YWxpZCBhbmQgaW50ZXJuYWxzLWludmFsaWQgYXR0cmlidXRlc1xuICogYmFzZWQgb24gZm9ybSB2YWxpZGl0eS5cbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSAtIFRoZSB0YXJnZXQgZm9ybVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHNldEZvcm1WYWxpZGl0eSA9IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgY29uc3QgbmF0aXZlQ29udHJvbFZhbGlkaXR5ID0gQXJyYXkuZnJvbShmb3JtLmVsZW1lbnRzKVxuICAgIC5maWx0ZXIoXG4gICAgICAoZWxlbWVudDogRWxlbWVudCAmIHsgdmFsaWRpdHk6IFZhbGlkaXR5U3RhdGUgfSkgPT5cbiAgICAgICAgIWVsZW1lbnQudGFnTmFtZS5pbmNsdWRlcygnLScpICYmIGVsZW1lbnQudmFsaWRpdHlcbiAgICApXG4gICAgLm1hcCgoZWxlbWVudDogRWxlbWVudCAmIHsgdmFsaWRpdHk6IFZhbGlkaXR5U3RhdGUgfSkgPT4gZWxlbWVudC52YWxpZGl0eS52YWxpZCk7XG4gIGNvbnN0IHBvbHlmaWxsZWRFbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSkgfHwgW107XG4gIGNvbnN0IHBvbHlmaWxsZWRWYWxpZGl0eSA9IEFycmF5LmZyb20ocG9seWZpbGxlZEVsZW1lbnRzKVxuICAgIC5maWx0ZXIoKGNvbnRyb2wpID0+IGNvbnRyb2wuaXNDb25uZWN0ZWQpXG4gICAgLm1hcCgoY29udHJvbDogSUN1c3RvbUVsZW1lbnQpID0+IGludGVybmFsc01hcC5nZXQoY29udHJvbCkudmFsaWRpdHkudmFsaWQpO1xuICBjb25zdCBoYXNJbnZhbGlkID0gWy4uLm5hdGl2ZUNvbnRyb2xWYWxpZGl0eSwgLi4ucG9seWZpbGxlZFZhbGlkaXR5XS5pbmNsdWRlcyhmYWxzZSk7XG4gIGZvcm0udG9nZ2xlQXR0cmlidXRlKCdpbnRlcm5hbHMtaW52YWxpZCcsIGhhc0ludmFsaWQpO1xuICBmb3JtLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgIWhhc0ludmFsaWQpO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gaW5wdXQgY2FsbGJhY2suIFVwZGF0ZXMgdGhlIGZvcm0ncyB2YWxpZGl0eVxuICogYXR0cmlidXRlcyBvbiBpbnB1dC5cbiAqIEBwYXJhbSB7RXZlbnR9IC0gVGhlIGZvcm0gaW5wdXQgZXZlbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtSW5wdXRDYWxsYmFjayA9IChldmVudDogRXZlbnQpID0+IHtcbiAgc2V0Rm9ybVZhbGlkaXR5KGZpbmRQYXJlbnRGb3JtKGV2ZW50LnRhcmdldCkpO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gY2hhbmdlIGNhbGxiYWNrLiBVcGRhdGVzIHRoZSBmb3JtJ3MgdmFsaWRpdHlcbiAqIGF0dHJpYnV0ZXMgb24gY2hhbmdlLlxuICogQHBhcmFtIHtFdmVudH0gLSBUaGUgZm9ybSBjaGFuZ2UgZXZlbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtQ2hhbmdlQ2FsbGJhY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIHNldEZvcm1WYWxpZGl0eShmaW5kUGFyZW50Rm9ybShldmVudC50YXJnZXQpKTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIHN1Ym1pdCBjYWxsYmFjay4gV2UgbmVlZCB0byBjYW5jZWwgYW55IHN1Ym1pc3Npb25cbiAqIGlmIGEgbmVzdGVkIGludGVybmFscyBpcyBpbnZhbGlkLlxuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IC0gVGhlIGZvcm0gZWxlbWVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHdpcmVTdWJtaXRMb2dpYyA9IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgY29uc3QgU1VCTUlUX0JVVFRPTl9TRUxFQ1RPUiA9XG4gICAgJzppcyhidXR0b25bdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGJ1dHRvbjpub3QoW3R5cGVdKSk6bm90KFtkaXNhYmxlZF0pJztcbiAgbGV0IHN1Ym1pdEJ1dHRvblNlbGVjdG9yID0gYCR7U1VCTUlUX0JVVFRPTl9TRUxFQ1RPUn06bm90KFtmb3JtXSlgO1xuXG4gIGlmIChmb3JtLmlkKSB7XG4gICAgc3VibWl0QnV0dG9uU2VsZWN0b3IgKz0gYCwke1NVQk1JVF9CVVRUT05fU0VMRUNUT1J9W2Zvcm09JyR7Zm9ybS5pZH0nXWA7XG4gIH1cblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgaWYgKHRhcmdldC5jbG9zZXN0KHN1Ym1pdEJ1dHRvblNlbGVjdG9yKSkge1xuICAgICAgLy8gdmFsaWRhdGVcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChmb3JtKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGlzIGZvcm0gZG9lcyBub3QgdmFsaWRhdGUgdGhlbiB3ZSdyZSBkb25lXG4gICAgICAgKi9cbiAgICAgIGlmIChmb3JtLm5vVmFsaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvKiogSWYgdGhlIFNldCBoYXMgaXRlbXMsIGNvbnRpbnVlICovXG4gICAgICBpZiAoZWxlbWVudHMuc2l6ZSkge1xuICAgICAgICBjb25zdCBub2RlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpO1xuICAgICAgICAvKiogQ2hlY2sgdGhlIGludGVybmFscy5jaGVja1ZhbGlkaXR5KCkgb2YgYWxsIG5vZGVzICovXG4gICAgICAgIGNvbnN0IHZhbGlkaXR5TGlzdCA9IG5vZGVzLnJldmVyc2UoKS5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KG5vZGUpO1xuICAgICAgICAgIHJldHVybiBpbnRlcm5hbHMucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqIElmIGFueSBub2RlIGlzIGZhbHNlLCBzdG9wIHRoZSBldmVudCAqL1xuICAgICAgICBpZiAodmFsaWRpdHlMaXN0LmluY2x1ZGVzKGZhbHNlKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gcmVzZXQgY2FsbGJhY2suIFRoaXMgd2lsbCBsb29wIG92ZXIgYWRkZWRcbiAqIGlucHV0cyBhbmQgY2FsbCBmb3JtUmVzZXRDYWxsYmFjayBpZiBhcHBsaWNhYmxlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZm9ybVJlc2V0Q2FsbGJhY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIC8qKiBHZXQgdGhlIFNldCBvZiBlbGVtZW50cyBhdHRhY2hlZCB0byB0aGlzIGZvcm0gKi9cbiAgY29uc3QgZWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQpO1xuXG4gIC8qKiBTb21lIGZvcm1zIHdvbid0IGNvbnRhaW4gZm9ybSBhc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50cyAqL1xuICBpZiAoZWxlbWVudHMgJiYgZWxlbWVudHMuc2l6ZSkge1xuICAgIC8qKiBMb29wIG92ZXIgdGhlIGVsZW1lbnRzIGFuZCBjYWxsIGZvcm1SZXNldENhbGxiYWNrIGlmIGFwcGxpY2FibGUgKi9cbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoKGVsZW1lbnQuY29uc3RydWN0b3IgYXMgYW55KS5mb3JtQXNzb2NpYXRlZCAmJiBlbGVtZW50LmZvcm1SZXNldENhbGxiYWNrKSB7XG4gICAgICAgIGVsZW1lbnQuZm9ybVJlc2V0Q2FsbGJhY2suYXBwbHkoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgZm9ybS4gV2Ugd2lsbCBuZWVkIHRvIGFkZCBzdWJtaXQgYW5kIHJlc2V0IGxpc3RlbmVyc1xuICogaWYgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0LiBJZiB0aGV5IGRvLCBqdXN0IGFkZCB0aGUgbmV3IHJlZiB0byB0aGUgZm9ybS5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZiAtIFRoZSBlbGVtZW50IHJlZiB0aGF0IGluY2x1ZGVzIGludGVybmFsc1xuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm0gLSBUaGUgZm9ybSB0aGUgcmVmIGJlbG9uZ3MgdG9cbiAqIEBwYXJhbSB7RWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzIC0gVGhlIGludGVybmFscyBmb3IgcmVmXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgaW5pdEZvcm0gPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIGZvcm06IEhUTUxGb3JtRWxlbWVudCxcbiAgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFsc1xuKSA9PiB7XG4gIGlmIChmb3JtKSB7XG4gICAgLyoqIFRoaXMgd2lsbCBiZSBhIFdlYWtNYXA8SFRNTEZvcm1FbGVtZW50LCBTZXQ8SFRNTEVsZW1lbnQ+ICovXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChmb3JtKTtcblxuICAgIGlmIChmb3JtRWxlbWVudHMpIHtcbiAgICAgIC8qKiBJZiBmb3JtRWxlbWVudHMgZXhpc3RzLCBhZGQgdG8gaXQgKi9cbiAgICAgIGZvcm1FbGVtZW50cy5hZGQocmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoqIElmIGZvcm1FbGVtZW50cyBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgaXQgYW5kIGFkZCB0byBpdCAqL1xuICAgICAgY29uc3QgaW5pdFNldCA9IG5ldyBTZXQ8SUN1c3RvbUVsZW1lbnQ+KCk7XG4gICAgICBpbml0U2V0LmFkZChyZWYpO1xuICAgICAgZm9ybUVsZW1lbnRzTWFwLnNldChmb3JtLCBpbml0U2V0KTtcblxuICAgICAgLyoqIEFkZCBsaXN0ZW5lcnMgdG8gZW11bGF0ZSB2YWxpZGF0aW9uIGFuZCByZXNldCBiZWhhdmlvciAqL1xuICAgICAgd2lyZVN1Ym1pdExvZ2ljKGZvcm0pO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIGZvcm1SZXNldENhbGxiYWNrKTtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmb3JtSW5wdXRDYWxsYmFjayk7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZvcm1DaGFuZ2VDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgZm9ybXNNYXAuc2V0KGZvcm0sIHsgcmVmLCBpbnRlcm5hbHMgfSk7XG5cbiAgICAvKiogQ2FsbCBmb3JtQXNzb2NpYXRlZENhbGxiYWNrIGlmIGFwcGxpY2FibGUgKi9cbiAgICBpZiAocmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddICYmIHJlZi5mb3JtQXNzb2NpYXRlZENhbGxiYWNrKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVmLmZvcm1Bc3NvY2lhdGVkQ2FsbGJhY2suYXBwbHkocmVmLCBbZm9ybV0pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIHNldEZvcm1WYWxpZGl0eShmb3JtKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSBsb29rIGZvciBhbiBlbGVtZW50J3MgcGFyZW50IGZvcm1cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbSAtIFRoZSBlbGVtZW50IHRvIGxvb2sgZm9yIGEgcGFyZW50IGZvcm1cbiAqIEByZXR1cm4ge0hUTUxGb3JtRWxlbWVudHxudWxsfSAtIFRoZSBwYXJlbnQgZm9ybSwgaWYgb25lIGV4aXN0c1xuICovXG5leHBvcnQgY29uc3QgZmluZFBhcmVudEZvcm0gPSAoZWxlbSkgPT4ge1xuICBsZXQgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuICBpZiAocGFyZW50ICYmIHBhcmVudC50YWdOYW1lICE9PSAnRk9STScpIHtcbiAgICBwYXJlbnQgPSBmaW5kUGFyZW50Rm9ybShwYXJlbnQpO1xuICB9XG4gIHJldHVybiBwYXJlbnQ7XG59O1xuXG4vKipcbiAqIFRocm93IGFuIGVycm9yIGlmIHRoZSBlbGVtZW50IHJlZiBpcyBub3QgZm9ybSBhc3NvY2lhdGVkXG4gKiBAcGFyYW0gcmVmIHtJQ3VzdG9tRWxlbWVudH0gLSBUaGUgZWxlbWVudCB0byBjaGVjayBpZiBpdCBpcyBmb3JtIGFzc29jaWF0ZWRcbiAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IC0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdGhyb3dcbiAqIEBwYXJhbSBFcnJvclR5cGUge2FueX0gLSBUaGUgZXJyb3IgdHlwZSB0byB0aHJvdywgZGVmYXVsdHMgdG8gRE9NRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQgPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIG1lc3NhZ2U6IHN0cmluZyxcbiAgRXJyb3JUeXBlOiBhbnkgPSBET01FeGNlcHRpb25cbik6IHZvaWQgPT4ge1xuICBpZiAoIXJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgIHRocm93IG5ldyBFcnJvclR5cGUobWVzc2FnZSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIGZvciBlYWNoIEhUTUxGb3JtRWxlbWVudC5jaGVja1ZhbGlkaXR5fHJlcG9ydFZhbGlkaXR5XG4gKiB3aWxsIGxvb3Agb3ZlciBhIGZvcm0ncyBhZGRlZCBjb21wb25lbnRzIGFuZCBjYWxsIHRoZSByZXNwZWN0aXZlXG4gKiBtZXRob2QgbW9kaWZ5aW5nIHRoZSBkZWZhdWx0IHJldHVybiB2YWx1ZSBpZiBuZWVkZWRcbiAqIEBwYXJhbSBmb3JtIHtIVE1MRm9ybUVsZW1lbnR9IC0gVGhlIGZvcm0gZWxlbWVudCB0byBydW4gdGhlIG1ldGhvZCBvblxuICogQHBhcmFtIHJldHVyblZhbHVlIHtib29sZWFufSAtIFRoZSBpbml0aWFsIHJlc3VsdCBvZiB0aGUgb3JpZ2luYWwgbWV0aG9kXG4gKiBAcGFyYW0gbWV0aG9kIHsnY2hlY2tWYWxpZGl0eSd8J3JlcG9ydFZhbGlkaXR5J30gLSBUaGUgb3JpZ2luYWwgbWV0aG9kXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVGhlIGZvcm0ncyB2YWxpZGl0eSBzdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgb3ZlcnJpZGVGb3JtTWV0aG9kID0gKFxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnQsXG4gIHJldHVyblZhbHVlOiBib29sZWFuLFxuICBtZXRob2Q6ICdjaGVja1ZhbGlkaXR5JyB8ICdyZXBvcnRWYWxpZGl0eSdcbik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSk7XG5cbiAgLyoqIFNvbWUgZm9ybXMgd29uJ3QgY29udGFpbiBmb3JtIGFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnRzICovXG4gIGlmIChlbGVtZW50cyAmJiBlbGVtZW50cy5zaXplKSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChlbGVtZW50KTtcbiAgICAgIGNvbnN0IHZhbGlkID0gaW50ZXJuYWxzW21ldGhvZF0oKTtcbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xuXG4vKipcbiAqIFdpbGwgdXBncmFkZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIGJ5IGluaXRpYWxpemluZyB0aGVcbiAqIGluc3RhbmNlJ3MgZm9ybSBhbmQgbGFiZWxzLiBUaGlzIGlzIGNhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGlzXG4gKiBlaXRoZXIgY29uc3RydWN0ZWQgb3IgYXBwZW5kZWQgZnJvbSBhIERvY3VtZW50RnJhZ21lbnRcbiAqIEBwYXJhbSByZWYge0lDdXN0b21FbGVtZW50fSAtIFRoZSBjdXN0b20gZWxlbWVudCB0byB1cGdyYWRlXG4gKi9cbmV4cG9ydCBjb25zdCB1cGdyYWRlSW50ZXJuYWxzID0gKHJlZjogSUN1c3RvbUVsZW1lbnQpID0+IHtcbiAgaWYgKHJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQocmVmKTtcbiAgICBjb25zdCB7IGxhYmVscywgZm9ybSB9ID0gaW50ZXJuYWxzO1xuICAgIGluaXRMYWJlbHMocmVmLCBsYWJlbHMpO1xuICAgIGluaXRGb3JtKHJlZiwgZm9ybSwgaW50ZXJuYWxzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayB0byBzZWUgaWYgTXV0YXRpb25PYnNlcnZlciBleGlzdHMgaW4gdGhlIGN1cnJlbnRcbiAqIGV4ZWN1dGlvbiBjb250ZXh0LiBXaWxsIGxpa2VseSByZXR1cm4gZmFsc2Ugb24gdGhlIHNlcnZlclxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdXRhdGlvbk9ic2VydmVyRXhpc3RzKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xufVxuIiwgImltcG9ydCB7IHNldEZvcm1WYWxpZGl0eSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKiogRW11bGF0ZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgVmFsaWRpdHlTdGF0ZSBvYmplY3QgKi9cbmV4cG9ydCBjbGFzcyBWYWxpZGl0eVN0YXRlIGltcGxlbWVudHMgZ2xvYmFsVGhpcy5WYWxpZGl0eVN0YXRlIHtcbiAgYmFkSW5wdXQgPSBmYWxzZTtcbiAgY3VzdG9tRXJyb3IgPSBmYWxzZTtcbiAgcGF0dGVybk1pc21hdGNoID0gZmFsc2U7XG4gIHJhbmdlT3ZlcmZsb3cgPSBmYWxzZTtcbiAgcmFuZ2VVbmRlcmZsb3cgPSBmYWxzZTtcbiAgc3RlcE1pc21hdGNoID0gZmFsc2U7XG4gIHRvb0xvbmcgPSBmYWxzZTtcbiAgdG9vU2hvcnQgPSBmYWxzZTtcbiAgdHlwZU1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkID0gdHJ1ZTtcbiAgdmFsdWVNaXNzaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgT2JqZWN0LnNlYWwodGhpcyk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldCBhIFZhbGlkaXR5U3RhdGUgb2JqZWN0IGJhY2sgdG8gdmFsaWRcbiAqIEBwYXJhbSB7VmFsaWRpdHlTdGF0ZX0gdmFsaWRpdHlPYmplY3QgLSBUaGUgb2JqZWN0IHRvIG1vZGlmeVxuICogQHJldHVybiB7VmFsaWRpdHlTdGF0ZX0gLSBUaGUgbW9kaWZpZWQgVmFsaWRpdHlTdGF0ZU9iamVjdFxuICovXG5leHBvcnQgY29uc3Qgc2V0VmFsaWQgPSAodmFsaWRpdHlPYmplY3Q6IFZhbGlkaXR5U3RhdGUpOiBWYWxpZGl0eVN0YXRlID0+IHtcbiAgdmFsaWRpdHlPYmplY3QuYmFkSW5wdXQgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QuY3VzdG9tRXJyb3IgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QucGF0dGVybk1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnJhbmdlT3ZlcmZsb3cgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QucmFuZ2VVbmRlcmZsb3cgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3Quc3RlcE1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnRvb0xvbmcgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QudG9vU2hvcnQgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QudHlwZU1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnZhbGlkID0gdHJ1ZTtcbiAgdmFsaWRpdHlPYmplY3QudmFsdWVNaXNzaW5nID0gZmFsc2U7XG4gIHJldHVybiB2YWxpZGl0eU9iamVjdDtcbn07XG5cbi8qKlxuICogUmVjb25jaWxlIGEgVmFsaWRpdHlTdGF0ZSBvYmplY3Qgd2l0aCBhIG5ldyBzdGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7VmFsaWRpdHlTdGF0ZX0gLSBUaGUgYmFzZSBvYmplY3QgdG8gcmVjb25jaWxlIHdpdGggbmV3IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gLSBBIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3QgdG8gb3ZlcnJpZGUgdGhlIG9yaWdpbmFsXG4gKiBAcmV0dXJuIHtWYWxpZGl0eVN0YXRlfSAtIFRoZSB1cGRhdGVkIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCByZWNvbmNpbGVWYWxpZGl0eSA9IChcbiAgdmFsaWRpdHlPYmplY3Q6IFZhbGlkaXR5U3RhdGUsXG4gIG5ld1N0YXRlOiBQYXJ0aWFsPFZhbGlkaXR5U3RhdGU+LFxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnRcbik6IFZhbGlkaXR5U3RhdGUgPT4ge1xuICB2YWxpZGl0eU9iamVjdC52YWxpZCA9IGlzVmFsaWQobmV3U3RhdGUpO1xuICBPYmplY3Qua2V5cyhuZXdTdGF0ZSkuZm9yRWFjaCgoa2V5KSA9PiAodmFsaWRpdHlPYmplY3Rba2V5XSA9IG5ld1N0YXRlW2tleV0pKTtcbiAgaWYgKGZvcm0pIHtcbiAgICBzZXRGb3JtVmFsaWRpdHkoZm9ybSk7XG4gIH1cbiAgcmV0dXJuIHZhbGlkaXR5T2JqZWN0O1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3Qgc2hvdWxkIGJlIHZhbGlkXG4gKiBAcGFyYW0ge09iamVjdH0gLSBBIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IC0gU2hvdWxkIHRoZSBuZXcgb2JqZWN0IGJlIHZhbGlkXG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkID0gKHZhbGlkaXR5U3RhdGU6IFBhcnRpYWw8VmFsaWRpdHlTdGF0ZT4pOiBib29sZWFuID0+IHtcbiAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgZm9yIChsZXQga2V5IGluIHZhbGlkaXR5U3RhdGUpIHtcbiAgICBpZiAoa2V5ICE9PSAndmFsaWQnICYmIHZhbGlkaXR5U3RhdGVba2V5XSAhPT0gZmFsc2UpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWxpZDtcbn07XG4iLCAiaW1wb3J0IHsgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuLyoqIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIHJlZiBmb3IgdGVoIEN1c3RvbVN0YXRlU2V0ICovXG5jb25zdCBjdXN0b21TdGF0ZU1hcCA9IG5ldyBXZWFrTWFwPEN1c3RvbVN0YXRlU2V0LCBJQ3VzdG9tRWxlbWVudD4oKTtcblxuZnVuY3Rpb24gYWRkU3RhdGUocmVmOiBJQ3VzdG9tRWxlbWVudCwgc3RhdGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgcmVmLnRvZ2dsZUF0dHJpYnV0ZShzdGF0ZU5hbWUsIHRydWUpO1xuICBpZiAocmVmLnBhcnQpIHtcbiAgICByZWYucGFydC5hZGQoc3RhdGVOYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDdXN0b21TdGF0ZSA9IGAtLSR7c3RyaW5nfWA7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21TdGF0ZVNldCBleHRlbmRzIFNldDxDdXN0b21TdGF0ZT4ge1xuICBzdGF0aWMgZ2V0IGlzUG9seWZpbGxlZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJlZjogSUN1c3RvbUVsZW1lbnQpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghcmVmIHx8ICFyZWYudGFnTmFtZSB8fCByZWYudGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbGxlZ2FsIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuXG4gICAgY3VzdG9tU3RhdGVNYXAuc2V0KHRoaXMsIHJlZik7XG4gIH1cblxuICBhZGQoc3RhdGU6IEN1c3RvbVN0YXRlKSB7XG4gICAgaWYgKCEvXi0tLy50ZXN0KHN0YXRlKSB8fCB0eXBlb2Ygc3RhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ2FkZCcgb24gJ0N1c3RvbVN0YXRlU2V0JzogVGhlIHNwZWNpZmllZCB2YWx1ZSAke3N0YXRlfSBtdXN0IHN0YXJ0IHdpdGggJy0tJy5gXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5hZGQoc3RhdGUpO1xuICAgIGNvbnN0IHJlZiA9IGN1c3RvbVN0YXRlTWFwLmdldCh0aGlzKTtcbiAgICBjb25zdCBzdGF0ZU5hbWUgPSBgc3RhdGUke3N0YXRlfWA7XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IGFkZCB0aGUgc3RhdGUgaW1tZWRpYXRlbHkgaWYgdGhlIHJlZiBpcyBjb25uZWN0ZWQgdG8gdGhlIERPTTtcbiAgICAgKiBvdGhlcndpc2UsIHdhaXQgYSB0aWNrIGJlY2F1c2UgdGhlIGVsZW1lbnQgaXMgbGlrZWx5IGJlaW5nIGNvbnN0cnVjdGVkXG4gICAgICogYnkgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBhbmQgd291bGQgdGhyb3cgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgIGFkZFN0YXRlKHJlZiwgc3RhdGVOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFkZFN0YXRlKHJlZiwgc3RhdGVOYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBmb3IgKGxldCBbZW50cnldIG9mIHRoaXMuZW50cmllcygpKSB7XG4gICAgICB0aGlzLmRlbGV0ZShlbnRyeSk7XG4gICAgfVxuICAgIHN1cGVyLmNsZWFyKCk7XG4gIH1cblxuICBkZWxldGUoc3RhdGU6IEN1c3RvbVN0YXRlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuZGVsZXRlKHN0YXRlKTtcbiAgICBjb25zdCByZWYgPSBjdXN0b21TdGF0ZU1hcC5nZXQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHRvZ2dsZSB0aGUgc3RhdGUvYXR0ciBpbW1lZGlhdGVseSBpZiB0aGUgcmVmIGlzIGNvbm5lY3RlZCB0byB0aGUgRE9NO1xuICAgICAqIG90aGVyd2lzZSwgd2FpdCBhIHRpY2sgYmVjYXVzZSB0aGUgZWxlbWVudCBpcyBsaWtlbHkgYmVpbmcgY29uc3RydWN0ZWRcbiAgICAgKiBieSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGFuZCB3b3VsZCB0aHJvdyBvdGhlcndpc2UuXG4gICAgICovXG4gICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZShgc3RhdGUke3N0YXRlfWAsIGZhbHNlKTtcbiAgICAgIGlmIChyZWYucGFydCkge1xuICAgICAgICByZWYucGFydC5yZW1vdmUoYHN0YXRlJHtzdGF0ZX1gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoYHN0YXRlJHtzdGF0ZX1gLCBmYWxzZSk7XG4gICAgICAgIGlmIChyZWYucGFydCkge1xuICAgICAgICAgIHJlZi5wYXJ0LnJlbW92ZShgc3RhdGUke3N0YXRlfWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCAiZXhwb3J0IGNsYXNzIEhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uIGltcGxlbWVudHMgZ2xvYmFsVGhpcy5IVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbiB7XG4gIHJlYWRvbmx5ICNlbGVtZW50cztcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgIHRoaXMuI2VsZW1lbnRzID0gZWxlbWVudHM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgICB0aGlzW2ldID0gZWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgIHRoaXNbZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKV0gPSBlbGVtZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBbaW5kZXg6IG51bWJlcl06IEVsZW1lbnQ7XG5cbiAgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLiNlbGVtZW50cy5sZW5ndGg7XG4gIH1cblxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gdGhpcy4jZWxlbWVudHNbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICB9XG5cbiAgaXRlbShpKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXNbaV0gPT0gbnVsbCA/IG51bGwgOiB0aGlzW2ldO1xuICB9XG5cbiAgbmFtZWRJdGVtKG5hbWUpOiBFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpc1tuYW1lXSA9PSBudWxsID8gbnVsbCA6IHRoaXNbbmFtZV07XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbiB9IGZyb20gJy4vSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24uanMnO1xuaW1wb3J0IHsgZm9ybUVsZW1lbnRzTWFwIH0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IG92ZXJyaWRlRm9ybU1ldGhvZCB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFBhdGNoIHRoZSBIVE1MRWxlbWVudCBwcm90b3R5cGVcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHBhdGNoZXMgY2hlY2tWYWxpZGl0eSwgcmVwb3J0VmFsaWRpdHkgYW5kIGVsZW1lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEZvcm1Qcm90b3R5cGUoKTogdm9pZCB7XG4gIGNvbnN0IGNoZWNrVmFsaWRpdHkgPSBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmNoZWNrVmFsaWRpdHk7XG4gIEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUuY2hlY2tWYWxpZGl0eSA9IGNoZWNrVmFsaWRpdHlPdmVycmlkZTtcblxuICBjb25zdCByZXBvcnRWYWxpZGl0eSA9IEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUucmVwb3J0VmFsaWRpdHk7XG4gIEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUucmVwb3J0VmFsaWRpdHkgPSByZXBvcnRWYWxpZGl0eU92ZXJyaWRlO1xuXG4gIGZ1bmN0aW9uIGNoZWNrVmFsaWRpdHlPdmVycmlkZSguLi5hcmdzKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldHVyblZhbHVlID0gY2hlY2tWYWxpZGl0eS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICByZXR1cm4gb3ZlcnJpZGVGb3JtTWV0aG9kKHRoaXMsIHJldHVyblZhbHVlLCAnY2hlY2tWYWxpZGl0eScpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwb3J0VmFsaWRpdHlPdmVycmlkZSguLi5hcmdzKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldHVyblZhbHVlID0gcmVwb3J0VmFsaWRpdHkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgcmV0dXJuIG92ZXJyaWRlRm9ybU1ldGhvZCh0aGlzLCByZXR1cm5WYWx1ZSwgJ3JlcG9ydFZhbGlkaXR5Jyk7XG4gIH1cblxuICBjb25zdCB7IGdldCB9ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLCAnZWxlbWVudHMnKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUsICdlbGVtZW50cycsIHtcbiAgICBnZXQoLi4uYXJncykge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBnZXQuY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgICAgIGNvbnN0IHBvbHlmaWxsZWRFbGVtZW50cyA9IEFycmF5LmZyb20oZm9ybUVsZW1lbnRzTWFwLmdldCh0aGlzKSB8fCBbXSk7XG5cbiAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBwb2x5ZmlsbGVkIGVsZW1lbnRzLCByZXR1cm4gdGhlIG5hdGl2ZSBlbGVtZW50cyBjb2xsZWN0aW9uXG4gICAgICBpZiAocG9seWZpbGxlZEVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgICB9XG5cbiAgICAgIC8vIE1lcmdlIHRoZSBuYXRpdmUgZWxlbWVudHMgd2l0aCB0aGUgcG9seWZpbGxlZCBlbGVtZW50c1xuICAgICAgLy8gYW5kIG9yZGVyIHRoZW0gYnkgdGhlaXIgcG9zaXRpb24gaW4gdGhlIERPTVxuICAgICAgY29uc3Qgb3JkZXJlZEVsZW1lbnRzID0gQXJyYXkuZnJvbShlbGVtZW50cylcbiAgICAgICAgLmNvbmNhdChwb2x5ZmlsbGVkRWxlbWVudHMpXG4gICAgICAgIC5zb3J0KChhOiBFbGVtZW50LCBiOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpICYgMiA/IDEgOiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmV3IEhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uKG9yZGVyZWRFbGVtZW50cyk7XG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgY29ubmVjdGVkQ2FsbGJhY2tNYXAsXG4gIGludGVybmFsc01hcCxcbiAgcmVmTWFwLFxuICByZWZWYWx1ZU1hcCxcbiAgc2hhZG93SG9zdHNNYXAsXG4gIHNoYWRvd1Jvb3RNYXAsXG4gIHZhbGlkYXRpb25BbmNob3JNYXAsXG4gIHZhbGlkaXR5TWFwLFxuICB2YWxpZGF0aW9uTWVzc2FnZU1hcCxcbiAgdmFsaWRpdHlVcGdyYWRlTWFwLFxufSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlSGlkZGVuSW5wdXQsXG4gIGZpbmRQYXJlbnRGb3JtLFxuICBpbml0UmVmLFxuICBtdXRhdGlvbk9ic2VydmVyRXhpc3RzLFxuICByZW1vdmVIaWRkZW5JbnB1dHMsXG4gIHNldERpc2FibGVkLFxuICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQsXG4gIHVwZ3JhZGVJbnRlcm5hbHMsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgaW5pdEFvbSB9IGZyb20gJy4vYW9tLmpzJztcbmltcG9ydCB7IFZhbGlkaXR5U3RhdGUsIHJlY29uY2lsZVZhbGlkaXR5LCBzZXRWYWxpZCB9IGZyb20gJy4vVmFsaWRpdHlTdGF0ZS5qcyc7XG5pbXBvcnQgeyBkZWZlclVwZ3JhZGUsIG9ic2VydmVyQ2FsbGJhY2ssIG9ic2VydmVyQ29uZmlnIH0gZnJvbSAnLi9tdXRhdGlvbi1vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgSUVsZW1lbnRJbnRlcm5hbHMsIElDdXN0b21FbGVtZW50LCBMYWJlbHNMaXN0IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5pbXBvcnQgeyBDdXN0b21TdGF0ZVNldCB9IGZyb20gJy4vQ3VzdG9tU3RhdGVTZXQuanMnO1xuaW1wb3J0IHsgcGF0Y2hGb3JtUHJvdG90eXBlIH0gZnJvbSAnLi9wYXRjaC1mb3JtLXByb3RvdHlwZS5qcyc7XG5pbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gJ2xpdC1odG1sL2lzLXNlcnZlci5qcyc7XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50SW50ZXJuYWxzIGltcGxlbWVudHMgSUVsZW1lbnRJbnRlcm5hbHMge1xuICBhcmlhQXRvbWljOiBzdHJpbmc7XG4gIGFyaWFBdXRvQ29tcGxldGU6IHN0cmluZztcbiAgYXJpYUJ1c3k6IHN0cmluZztcbiAgYXJpYUNoZWNrZWQ6IHN0cmluZztcbiAgYXJpYUNvbENvdW50OiBzdHJpbmc7XG4gIGFyaWFDb2xJbmRleDogc3RyaW5nO1xuICBhcmlhQ29sSW5kZXhUZXh0OiBzdHJpbmc7XG4gIGFyaWFDb2xTcGFuOiBzdHJpbmc7XG4gIGFyaWFDdXJyZW50OiBzdHJpbmc7XG4gIGFyaWFEaXNhYmxlZDogc3RyaW5nO1xuICBhcmlhRXhwYW5kZWQ6IHN0cmluZztcbiAgYXJpYUhhc1BvcHVwOiBzdHJpbmc7XG4gIGFyaWFIaWRkZW46IHN0cmluZztcbiAgYXJpYUludmFsaWQ6IHN0cmluZztcbiAgYXJpYUtleVNob3J0Y3V0czogc3RyaW5nO1xuICBhcmlhTGFiZWw6IHN0cmluZztcbiAgYXJpYUxldmVsOiBzdHJpbmc7XG4gIGFyaWFMaXZlOiBzdHJpbmc7XG4gIGFyaWFNb2RhbDogc3RyaW5nO1xuICBhcmlhTXVsdGlMaW5lOiBzdHJpbmc7XG4gIGFyaWFNdWx0aVNlbGVjdGFibGU6IHN0cmluZztcbiAgYXJpYU9yaWVudGF0aW9uOiBzdHJpbmc7XG4gIGFyaWFQbGFjZWhvbGRlcjogc3RyaW5nO1xuICBhcmlhUG9zSW5TZXQ6IHN0cmluZztcbiAgYXJpYVByZXNzZWQ6IHN0cmluZztcbiAgYXJpYVJlYWRPbmx5OiBzdHJpbmc7XG4gIGFyaWFSZWxldmFudDogc3RyaW5nO1xuICBhcmlhUmVxdWlyZWQ6IHN0cmluZztcbiAgYXJpYVJvbGVEZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhcmlhUm93Q291bnQ6IHN0cmluZztcbiAgYXJpYVJvd0luZGV4OiBzdHJpbmc7XG4gIGFyaWFSb3dJbmRleFRleHQ6IHN0cmluZztcbiAgYXJpYVJvd1NwYW46IHN0cmluZztcbiAgYXJpYVNlbGVjdGVkOiBzdHJpbmc7XG4gIGFyaWFTZXRTaXplOiBzdHJpbmc7XG4gIGFyaWFTb3J0OiBzdHJpbmc7XG4gIGFyaWFWYWx1ZU1heDogc3RyaW5nO1xuICBhcmlhVmFsdWVNaW46IHN0cmluZztcbiAgYXJpYVZhbHVlTm93OiBzdHJpbmc7XG4gIGFyaWFWYWx1ZVRleHQ6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuXG4gIHN0YXRlczogQ3VzdG9tU3RhdGVTZXQ7XG5cbiAgc3RhdGljIGdldCBpc1BvbHlmaWxsZWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyZWY6IElDdXN0b21FbGVtZW50KSB7XG4gICAgaWYgKCFyZWYgfHwgIXJlZi50YWdOYW1lIHx8IHJlZi50YWdOYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0lsbGVnYWwgY29uc3RydWN0b3InKTtcbiAgICB9XG4gICAgY29uc3Qgcm9vdE5vZGUgPSByZWYuZ2V0Um9vdE5vZGUoKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IG5ldyBWYWxpZGl0eVN0YXRlKCk7XG4gICAgdGhpcy5zdGF0ZXMgPSBuZXcgQ3VzdG9tU3RhdGVTZXQocmVmKTtcbiAgICByZWZNYXAuc2V0KHRoaXMsIHJlZik7XG4gICAgdmFsaWRpdHlNYXAuc2V0KHRoaXMsIHZhbGlkaXR5KTtcbiAgICBpbnRlcm5hbHNNYXAuc2V0KHJlZiwgdGhpcyk7XG4gICAgaW5pdEFvbShyZWYsIHRoaXMpO1xuICAgIGluaXRSZWYocmVmLCB0aGlzKTtcbiAgICBPYmplY3Quc2VhbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIElmIGFwcGVuZGVkIGZyb20gYSBEb2N1bWVudEZyYWdtZW50LCB3YWl0IHVudGlsIGl0IGlzIGNvbm5lY3RlZFxuICAgICAqIGJlZm9yZSBhdHRlbXB0aW5nIHRvIHVwZ3JhZGUgdGhlIGludGVybmFscyBpbnN0YW5jZVxuICAgICAqL1xuICAgIGlmIChyb290Tm9kZSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgIGRlZmVyVXBncmFkZShyb290Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgaW4gYSB2YWxpZCBzdGF0ZVxuICAgKi9cbiAgY2hlY2tWYWxpZGl0eSgpOiBib29sZWFuIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnY2hlY2tWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIC8qKiBJZiB0aGUgZWxlbWVudCB3aWxsIG5vdCB2YWxpZGF0ZSwgaXQgaXMgbmVjZXNzYXJpbHkgdmFsaWQgYnkgZGVmYXVsdCAqL1xuICAgIGlmICghdGhpcy53aWxsVmFsaWRhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICBpZiAoIXZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBjb25zdCB2YWxpZGl0eUV2ZW50ID0gbmV3IEV2ZW50KCdpbnZhbGlkJywge1xuICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgY29tcG9zZWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICByZWYuZGlzcGF0Y2hFdmVudCh2YWxpZGl0eUV2ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkaXR5LnZhbGlkO1xuICB9XG5cbiAgLyoqIFRoZSBmb3JtIGVsZW1lbnQgdGhlIGN1c3RvbSBlbGVtZW50IGlzIGFzc29jaWF0ZWQgd2l0aCAqL1xuICBnZXQgZm9ybSgpOiBIVE1MRm9ybUVsZW1lbnQge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAnZm9ybScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgbGV0IGZvcm07XG4gICAgaWYgKHJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSA9PT0gdHJ1ZSkge1xuICAgICAgZm9ybSA9IGZpbmRQYXJlbnRGb3JtKHJlZik7XG4gICAgfVxuICAgIHJldHVybiBmb3JtO1xuICB9XG5cbiAgLyoqIEEgbGlzdCBvZiBhbGwgcmVsYXRpdmUgZm9ybSBsYWJlbHMgZm9yIHRoaXMgZWxlbWVudCAqL1xuICBnZXQgbGFiZWxzKCk6IExhYmVsc0xpc3Qge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAnbGFiZWxzJyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBjb25zdCBpZCA9IHJlZi5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgY29uc3QgaG9zdFJvb3QgPSByZWYuZ2V0Um9vdE5vZGUoKSBhcyBFbGVtZW50O1xuICAgIGlmIChob3N0Um9vdCAmJiBpZCkge1xuICAgICAgcmV0dXJuIGhvc3RSb290LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTExhYmVsRWxlbWVudD4oYFtmb3I9XCIke2lkfVwiXWApIGFzIHVua25vd24gYXMgTGFiZWxzTGlzdDtcbiAgICB9XG4gICAgcmV0dXJuIFtdIGFzIHVua25vd24gYXMgTGFiZWxzTGlzdDtcbiAgfVxuXG4gIC8qKiBXaWxsIHJlcG9ydCB0aGUgZWxlbWVudHMgdmFsaWRpdHkgc3RhdGUgKi9cbiAgcmVwb3J0VmFsaWRpdHkoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3JlcG9ydFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgLyoqIElmIHRoZSBlbGVtZW50IHdpbGwgbm90IHZhbGlkYXRlLCBpdCBpcyB2YWxpZCBieSBkZWZhdWx0ICovXG4gICAgaWYgKCF0aGlzLndpbGxWYWxpZGF0ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHZhbGlkID0gdGhpcy5jaGVja1ZhbGlkaXR5KCk7XG4gICAgY29uc3QgYW5jaG9yID0gdmFsaWRhdGlvbkFuY2hvck1hcC5nZXQodGhpcyk7XG4gICAgaWYgKGFuY2hvciAmJiAhcmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3JlcG9ydFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCF2YWxpZCAmJiBhbmNob3IpIHtcbiAgICAgIHJlZi5mb2N1cygpO1xuICAgICAgYW5jaG9yLmZvY3VzKCk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBlbGVtZW50J3MgdmFsdWUgd2l0aGluIHRoZSBmb3JtICovXG4gIHNldEZvcm1WYWx1ZSh2YWx1ZTogc3RyaW5nIHwgRm9ybURhdGEgfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldEZvcm1WYWx1ZScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIHJlbW92ZUhpZGRlbklucHV0cyh0aGlzKTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpKSB7XG4gICAgICBpZiAocmVmLmdldEF0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgIGNvbnN0IGhpZGRlbklucHV0ID0gY3JlYXRlSGlkZGVuSW5wdXQocmVmLCB0aGlzKTtcbiAgICAgICAgaGlkZGVuSW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgQXJyYXkuZnJvbSh2YWx1ZSlcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAuZm9yRWFjaCgoW2Zvcm1EYXRhS2V5LCBmb3JtRGF0YVZhbHVlXSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgZm9ybURhdGFWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGhpZGRlbklucHV0ID0gY3JlYXRlSGlkZGVuSW5wdXQocmVmLCB0aGlzKTtcbiAgICAgICAgICAgIGhpZGRlbklucHV0Lm5hbWUgPSBmb3JtRGF0YUtleTtcbiAgICAgICAgICAgIGhpZGRlbklucHV0LnZhbHVlID0gZm9ybURhdGFWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWZWYWx1ZU1hcC5zZXQocmVmLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZWxlbWVudCdzIHZhbGlkaXR5LiBUaGUgZmlyc3QgYXJndW1lbnQgaXMgYSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gICAqIHJlZmxlY3RpbmcgdGhlIGNoYW5nZXMgdG8gYmUgbWFkZSB0byB0aGUgZWxlbWVudCdzIHZhbGlkaXR5LiBJZiB0aGUgZWxlbWVudCBpcyBpbnZhbGlkLFxuICAgKiB0aGUgc2Vjb25kIGFyZ3VtZW50IHNldHMgdGhlIGVsZW1lbnQncyB2YWxpZGF0aW9uIG1lc3NhZ2UuXG4gICAqXG4gICAqIElmIHRoZSBmaWVsZCBpcyB2YWxpZCBhbmQgYSBtZXNzYWdlIGlzIHNwZWNpZmllZCwgdGhlIG1ldGhvZCB3aWxsIHRocm93IGEgVHlwZUVycm9yLlxuICAgKi9cbiAgc2V0VmFsaWRpdHkoXG4gICAgdmFsaWRpdHlDaGFuZ2VzOiBQYXJ0aWFsPGdsb2JhbFRoaXMuVmFsaWRpdHlTdGF0ZT4sXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2U/OiBzdHJpbmcsXG4gICAgYW5jaG9yPzogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgaWYgKCF2YWxpZGl0eUNoYW5nZXMpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgdmFsaWRhdGlvbkFuY2hvck1hcC5zZXQodGhpcywgYW5jaG9yKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICBjb25zdCB2YWxpZGl0eUNoYW5nZXNPYmo6IFBhcnRpYWw8VmFsaWRpdHlTdGF0ZT4gPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWxpZGl0eUNoYW5nZXMpIHtcbiAgICAgIHZhbGlkaXR5Q2hhbmdlc09ialtrZXldID0gdmFsaWRpdHlDaGFuZ2VzW2tleV07XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyh2YWxpZGl0eUNoYW5nZXNPYmopLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0VmFsaWQodmFsaWRpdHkpO1xuICAgIH1cbiAgICBjb25zdCBjaGVjayA9IHsgLi4udmFsaWRpdHksIC4uLnZhbGlkaXR5Q2hhbmdlc09iaiB9O1xuICAgIGRlbGV0ZSBjaGVjay52YWxpZDtcbiAgICBjb25zdCB7IHZhbGlkIH0gPSByZWNvbmNpbGVWYWxpZGl0eSh2YWxpZGl0eSwgY2hlY2ssIHRoaXMuZm9ybSk7XG5cbiAgICBpZiAoIXZhbGlkICYmICF2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdzZXRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgc2Vjb25kIGFyZ3VtZW50IHNob3VsZCBub3QgYmUgZW1wdHkgaWYgb25lIG9yIG1vcmUgZmxhZ3MgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IGFyZSB0cnVlLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHZhbGlkYXRpb25NZXNzYWdlTWFwLnNldCh0aGlzLCB2YWxpZCA/ICcnIDogdmFsaWRhdGlvbk1lc3NhZ2UpO1xuXG4gICAgLy8gY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBob3N0IGVsZW1lbnQgaXMgY29ubmVjdGVkIGJlZm9yZSBhZGRpbmcgYXR0cmlidXRlc1xuICAgIC8vIGJlY2F1c2Ugc2FmYXJpIGRvZXNudCBhbGxvdyBlbGVtZW50cyB0byBoYXZlIGF0dHJpYnV0ZXMgYWRkZWQgaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLWludmFsaWQnLCAhdmFsaWQpO1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgdmFsaWQpO1xuICAgICAgcmVmLnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgYCR7IXZhbGlkfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGl0eVVwZ3JhZGVNYXAuc2V0KHJlZiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNoYWRvd1Jvb3QoKTogU2hhZG93Um9vdCB8IG51bGwge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IHNoYWRvd1Jvb3RNYXAuZ2V0KHJlZik7XG4gICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgIHJldHVybiBzaGFkb3dSb290O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBUaGUgZWxlbWVudCdzIHZhbGlkYXRpb24gbWVzc2FnZSBzZXQgZHVyaW5nIGEgY2FsbCB0byBFbGVtZW50SW50ZXJuYWxzLnNldFZhbGlkaXR5ICovXG4gIGdldCB2YWxpZGF0aW9uTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAndmFsaWRhdGlvbk1lc3NhZ2UnIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIHJldHVybiB2YWxpZGF0aW9uTWVzc2FnZU1hcC5nZXQodGhpcyk7XG4gIH1cblxuICAvKiogVGhlIGN1cnJlbnQgdmFsaWRpdHkgc3RhdGUgb2YgdGhlIG9iamVjdCAqL1xuICBnZXQgdmFsaWRpdHkoKTogZ2xvYmFsVGhpcy5WYWxpZGl0eVN0YXRlIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ3ZhbGlkaXR5JyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICByZXR1cm4gdmFsaWRpdHk7XG4gIH1cblxuICAvKiogSWYgdHJ1ZSB0aGUgZWxlbWVudCB3aWxsIHBhcnRpY2lwYXRlIGluIGEgZm9ybSdzIGNvbnN0cmFpbnQgdmFsaWRhdGlvbi4gKi9cbiAgZ2V0IHdpbGxWYWxpZGF0ZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ3dpbGxWYWxpZGF0ZScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgaWYgKHJlZi5kaXNhYmxlZCB8fCByZWYuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IHJlZi5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5JykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLy8gLS0tIERpc2FibGluZyB0aGlzIHR5cGUgZGVjbGFyYXRpb24gdG8gYXZvaWQgY29uZmxpY3Qgd2l0aCBleHRlcm5hbCBlbGVtZW50LWludGVybmFscy1wb2x5ZmlsbCB0eXBlcyAtLS1cbi8vIGRlY2xhcmUgZ2xvYmFsIHtcbi8vICAgaW50ZXJmYWNlIEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3RvciB7XG4vLyAgICAgZm9ybUFzc29jaWF0ZWQ/OiBib29sZWFuO1xuLy8gICB9XG5cbi8vICAgaW50ZXJmYWNlIFdpbmRvdyB7XG4vLyAgICAgRWxlbWVudEludGVybmFsczogdHlwZW9mIEVsZW1lbnRJbnRlcm5hbHM7XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudEludGVybmFsc1N1cHBvcnRlZCgpOiBib29sZWFuIHtcbiAgaWYgKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgIXdpbmRvdy5FbGVtZW50SW50ZXJuYWxzIHx8XG4gICAgIUhUTUxFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hJbnRlcm5hbHNcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2xhc3MgRWxlbWVudEludGVybmFsc0ZlYXR1cmVEZXRlY3Rpb24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuaW50ZXJuYWxzID0gdGhpcy5hdHRhY2hJbnRlcm5hbHMoKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcmFuZG9tTmFtZSA9IGBlbGVtZW50LWludGVybmFscy1mZWF0dXJlLWRldGVjdGlvbi0ke01hdGgucmFuZG9tKClcbiAgICAudG9TdHJpbmcoMzYpXG4gICAgLnJlcGxhY2UoL1teYS16XSsvZywgJycpfWA7XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZShyYW5kb21OYW1lLCBFbGVtZW50SW50ZXJuYWxzRmVhdHVyZURldGVjdGlvbik7XG4gIGNvbnN0IGZlYXR1cmVEZXRlY3Rpb25FbGVtZW50ID0gbmV3IEVsZW1lbnRJbnRlcm5hbHNGZWF0dXJlRGV0ZWN0aW9uKCk7XG4gIHJldHVybiBbXG4gICAgJ3NoYWRvd1Jvb3QnLFxuICAgICdmb3JtJyxcbiAgICAnd2lsbFZhbGlkYXRlJyxcbiAgICAndmFsaWRpdHknLFxuICAgICd2YWxpZGF0aW9uTWVzc2FnZScsXG4gICAgJ2xhYmVscycsXG4gICAgJ3NldEZvcm1WYWx1ZScsXG4gICAgJ3NldFZhbGlkaXR5JyxcbiAgICAnY2hlY2tWYWxpZGl0eScsXG4gICAgJ3JlcG9ydFZhbGlkaXR5JyxcbiAgXS5ldmVyeSgocHJvcCkgPT4gcHJvcCBpbiBmZWF0dXJlRGV0ZWN0aW9uRWxlbWVudC5pbnRlcm5hbHMpO1xufVxuXG4vLyBPbmx5IGluY2x1ZGVzIHRoaXMgcG9seWZpbGwgaWYgd2UgYXJlIGluIGEgamVzdCBydW5uZXIgb3Igbm90IGluIFNTUlxuaWYgKFxuICAhaXNTZXJ2ZXIgfHxcbiAgKChwcm9jZXNzIGFzIGFueSk/LmVudi5KRVNUX1dPUktFUl9JRCAhPT0gdW5kZWZpbmVkICYmIChwcm9jZXNzIGFzIGFueSk/LmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKVxuKSB7XG4gIGlmICghaXNFbGVtZW50SW50ZXJuYWxzU3VwcG9ydGVkKCkpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8qKiBAdHMtZXhwZWN0LWVycm9yOiB3ZSBuZWVkIHRvIHJlcGxhY2UgdGhlIGRlZmF1bHQgRWxlbWVudEludGVybmFscyAqL1xuICAgICAgd2luZG93LkVsZW1lbnRJbnRlcm5hbHMgPSBFbGVtZW50SW50ZXJuYWxzO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgZGVmaW5lID0gQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5kZWZpbmU7XG4gICAgICBDdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlLmRlZmluZSA9IGZ1bmN0aW9uIChuYW1lLCBjb25zdHJ1Y3Rvciwgb3B0aW9ucykge1xuICAgICAgICBpZiAoY29uc3RydWN0b3IuZm9ybUFzc29jaWF0ZWQpIHtcbiAgICAgICAgICBjb25zdCBjb25uZWN0ZWRDYWxsYmFjayA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaztcbiAgICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWNvbm5lY3RlZENhbGxiYWNrTWFwLmhhcyh0aGlzKSkge1xuICAgICAgICAgICAgICBjb25uZWN0ZWRDYWxsYmFja01hcC5zZXQodGhpcywgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgc2V0RGlzYWJsZWQodGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbm5lY3RlZENhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2suYXBwbHkodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhbHdheXMgdXBncmFkZUludGVybmFscyBpbiBjb25uZWN0ZWRDYWxsYmFjayBpbnN0ZWFkIG9mIGNvbnN0cnVjdG9yXG4gICAgICAgICAgICB1cGdyYWRlSW50ZXJuYWxzKHRoaXMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBkZWZpbmUuY2FsbCh0aGlzLCBuYW1lLCBjb25zdHJ1Y3Rvciwgb3B0aW9ucyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gYSBjdXN0b20gZWxlbWVudC4gQ2FsbGluZyB0aGlzIG1ldGhvZFxuICAgICAqIG9uIGEgYnVpbHQtaW4gZWxlbWVudCB3aWxsIHRocm93IGFuIGVycm9yLlxuICAgICAqL1xuICAgIGlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzID0gZnVuY3Rpb24gKCk6IElFbGVtZW50SW50ZXJuYWxzIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhZ05hbWUpIHtcbiAgICAgICAgICAvKiogVGhpcyBoYXBwZW5zIGluIHRoZSBMaXRTU1IgZW52aXJvbm1lbnQuIEhlcmUgd2UgY2FuIGdlbmVyYWxseSBpZ25vcmUgaW50ZXJuYWxzIGZvciBub3cgKi9cbiAgICAgICAgICByZXR1cm4ge30gYXMgb2JqZWN0IGFzIElFbGVtZW50SW50ZXJuYWxzO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdhdHRhY2hJbnRlcm5hbHMnIG9uICdIVE1MRWxlbWVudCc6IFVuYWJsZSB0byBhdHRhY2ggRWxlbWVudEludGVybmFscyB0byBub24tY3VzdG9tIGVsZW1lbnRzLmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnRlcm5hbHNNYXAuaGFzKHRoaXMpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgICAgIGBET01FeGNlcHRpb246IEZhaWxlZCB0byBleGVjdXRlICdhdHRhY2hJbnRlcm5hbHMnIG9uICdIVE1MRWxlbWVudCc6IEVsZW1lbnRJbnRlcm5hbHMgZm9yIHRoZSBzcGVjaWZpZWQgZWxlbWVudCB3YXMgYWxyZWFkeSBhdHRhY2hlZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnRJbnRlcm5hbHModGhpcykgYXMgSUVsZW1lbnRJbnRlcm5hbHM7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbm5lci1kZWNsYXJhdGlvbnNcbiAgICAgIGZ1bmN0aW9uIGF0dGFjaFNoYWRvd09ic2VydmVyKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGF0dGFjaFNoYWRvdy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgc2hhZG93Um9vdE1hcC5zZXQodGhpcywgc2hhZG93Um9vdCk7XG5cbiAgICAgICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKSkge1xuICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG4gICAgICAgICAgaWYgKHdpbmRvdy5TaGFkeURPTSkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCBvYnNlcnZlckNvbmZpZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2hhZG93Um9vdCwgb2JzZXJ2ZXJDb25maWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzaGFkb3dIb3N0c01hcC5zZXQodGhpcywgb2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGFkb3dSb290O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhdHRhY2hTaGFkb3cgPSBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3c7XG4gICAgICBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3cgPSBhdHRhY2hTaGFkb3dPYnNlcnZlcjtcbiAgICB9XG5cbiAgICBpZiAobXV0YXRpb25PYnNlcnZlckV4aXN0cygpKSB7XG4gICAgICBjb25zdCBkb2N1bWVudE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG4gICAgICBkb2N1bWVudE9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBvYnNlcnZlckNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogS2VlcHMgdGhlIHBvbHlmaWxsIGZyb20gdGhyb3dpbmcgaW4gZW52aXJvbm1lbnRzIHdoZXJlIEhUTUxGb3JtRWxlbWVudFxuICAgICAqIGlzIHVuZGVmaW5lZCBsaWtlIGluIGEgc2VydmVyIGVudmlyb25tZW50XG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBIVE1MRm9ybUVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwYXRjaEZvcm1Qcm90b3R5cGUoKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXdpbmRvdy5DdXN0b21TdGF0ZVNldCkge1xuICAgICAgd2luZG93LkN1c3RvbVN0YXRlU2V0ID0gQ3VzdG9tU3RhdGVTZXQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3cuQ3VzdG9tU3RhdGVTZXQpIHtcbiAgICB3aW5kb3cuQ3VzdG9tU3RhdGVTZXQgPSBDdXN0b21TdGF0ZVNldDtcbiAgICBjb25zdCBhdHRhY2hJbnRlcm5hbHMgPSBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzO1xuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hJbnRlcm5hbHMgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gYXR0YWNoSW50ZXJuYWxzLmNhbGwodGhpcywgYXJncyk7XG4gICAgICBpbnRlcm5hbHMuc3RhdGVzID0gbmV3IEN1c3RvbVN0YXRlU2V0KHRoaXMpO1xuICAgICAgcmV0dXJuIGludGVybmFscztcbiAgICB9O1xuICB9XG59XG4iLCAiaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQgfSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExhbmdJbnRlcmZhY2Uge1xuICAvKipcbiAgICogQWRqdXN0cyB0aGUgbGFuZyB1c2VkIHRvIGZvcm1hdCBjb250ZW50IHJlbmRlcmVkIGJ5IHRoaXMgZWxlbWVudFxuICAgKiBAYXR0ciBsYW5nXG4gICAqL1xuICBsYW5nOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBMYW5nTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIExhbmdFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgbGFuZyB1c2VkIHRvIGZvcm1hdCBjb250ZW50IHJlbmRlcmVkIGJ5IHRoaXMgZWxlbWVudFxuICAgICAqIEBhdHRyIGxhbmdcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGxhbmc6IHN0cmluZztcbiAgfVxuICByZXR1cm4gTGFuZ0VsZW1lbnQgYXMgQ29uc3RydWN0b3I8TGFuZ0ludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50IH0gZnJvbSAnLi4vJztcblxuLyoqXG4gKiBTcGVjaWFsIGNsYXNzIHRoYXQgaGVscHMgZnJhbWV3b3JrIHdyYXBwZXIgc3R5bGluZyBrbm93IHdoZW4gYSB3cmFwcGVyIGZyYW1ld29ya1xuICogaGFzIGZpbmlzaGVkIHJlbmRlcmluZyBhbmQgdGh1cyBlbGVtZW50cyBjYW4gbm93IGJlIHNob3duIHdpdGhvdXQgYSBGT1VDLiBUaGlzXG4gKiBvY2N1cnMgaW4gdGhlIHNjZW5hcmlvIHdoZXJlIExpdCBlbGVtZW50cyByZWdpc3RlciBhbmQgcmVuZGVyIGJlZm9yZSB0aGVcbiAqIHdyYXBwZXIgZnJhbWV3b3JrIHBhc3NlcyBlbGVtZW50cyB0aGVpciBwcm9wcy5cbiAqL1xuZXhwb3J0IGNvbnN0IFdhaXRGb3JGcmFtZXdvcmtNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgV2FpdEZvckZyYW1ld29ya0VsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogJ210ZS1mdy1yZW5kZXJlZCcsIHJlZmxlY3Q6IHRydWUgfSkgX2Z3UmVuZGVyZWQ7XG4gIH1cbiAgcmV0dXJuIFdhaXRGb3JGcmFtZXdvcmtFbGVtZW50IGFzIFQ7XG59O1xuIiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3h9YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEsSUFBQUEsZUFBcUI7OztBQ0NyQix3QkFBZ0M7QUFDaEMsaUJBQTJCOzs7QUNJM0IsSUFBTywrQkFBUTtFQUNiLFdBQVc7SUFDVCxPQUFPO0lBQ1AsTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtFQUNWO0VBQ0EsVUFBVTtJQUNSLFVBQVU7TUFDUixRQUFRO01BQ1IsTUFBTTtNQUNOLE1BQU07TUFDTixNQUFNO01BQ04sTUFBTTtNQUNOLE1BQU07TUFDTixPQUFPO01BQ1AsUUFBUTtJQUNWO0lBQ0EsU0FBUztNQUNQLFFBQVE7TUFDUixXQUFXO01BQ1gsTUFBTTtNQUNOLE1BQU07TUFDTixNQUFNO0lBQ1I7RUFDRjtFQUNBLGFBQWE7SUFDWCxTQUFTO01BQ1AsS0FBSztNQUNMLEtBQUs7TUFDTCxLQUFLO01BQ0wsS0FBSztNQUNMLEtBQUs7SUFDUDtJQUNBLFdBQVc7TUFDVCxLQUFLO01BQ0wsS0FBSztNQUNMLEtBQUs7TUFDTCxLQUFLO01BQ0wsS0FBSztJQUNQO0lBQ0EsTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07RUFDUjtFQUNBLFVBQVU7SUFDUixLQUFLO0lBQ0wsTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sUUFBUTtFQUNWO0VBQ0EsUUFBUTtJQUNOLGNBQWM7TUFDWixNQUFNO01BQ04sTUFBTTtNQUNOLE1BQU07TUFDTixNQUFNO01BQ04sTUFBTTtNQUNOLE9BQU87SUFDVDtJQUNBLHFCQUFxQjtNQUNuQixNQUFNO01BQ04sTUFBTTtNQUNOLE1BQU07TUFDTixNQUFNO01BQ04sT0FBTztJQUNUO0VBQ0Y7RUFDQSxRQUFRO0lBQ04sU0FBUztNQUNQLE1BQU07TUFDTixNQUFNO01BQ04sTUFBTTtJQUNSO0lBQ0EsYUFBYTtNQUNYO01BQ0E7TUFDQTtJQUNGO0VBQ0Y7RUFDQSxTQUFTO0lBQ1AsUUFBUTtJQUNSLE9BQU87SUFDUCxNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztNQUNULFFBQVE7TUFDUixPQUFPO01BQ1AsTUFBTTtNQUNOLE1BQU07TUFDTixNQUFNO01BQ04sTUFBTTtNQUNOLE1BQU07TUFDTixPQUFPO01BQ1AsUUFBUTtJQUNWO0lBQ0EsU0FBUztNQUNQLFFBQVE7TUFDUixPQUFPO01BQ1AsTUFBTTtNQUNOLE1BQU07TUFDTixNQUFNO01BQ04sTUFBTTtNQUNOLE1BQU07TUFDTixPQUFPO01BQ1AsUUFBUTtJQUNWO0lBQ0EsU0FBUztNQUNQLFFBQVE7TUFDUixPQUFPO01BQ1AsTUFBTTtNQUNOLE1BQU07TUFDTixNQUFNO01BQ04sTUFBTTtNQUNOLE1BQU07TUFDTixPQUFPO01BQ1AsUUFBUTtJQUNWO0VBQ0Y7RUFDQSxRQUFRO0lBQ04sUUFBUTtJQUNSLFVBQVU7TUFDUixRQUFRO01BQ1IsU0FBUztNQUNULFFBQVE7SUFDVjtJQUNBLFVBQVU7TUFDUixTQUFTO01BQ1QsV0FB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LFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7SUFDQSxRQUFRO01BQ04sV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsUUFBUTtNQUNOLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNG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QVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLFVBQVU7UUFDUixXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsYUFBYTtRQUNYLFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLFlBQVk7UUFDVixXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsV0FBVztRQUNULFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLFVBQVU7UUFDUixXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7SUFDRjtJQUNBLE9BQU87TUFDTCxPQUFPO1FBQ0wsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsT0FBTztRQUNMLFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLFNBQVM7UUFDUCxXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxRQUFRO1FBQ04sV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsUUFBUTtRQUNOLFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLE9BQU87UUFDTCxXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7SUFDRjtFQUNGO0VBQ0EsY0FBYztJQUNaLFlBQVk7TUFDVixXQUFXO01BQ1gsU0FBUztNQUNULFVBQVU7SUFDWjtJQUNBLFlBQVk7TUFDVixXQUFXO01BQ1gsU0FBUztNQUNULFVBQVU7SUFDWjtJQUNBLFlBQVk7TUFDVixXQUFXO01BQ1gsU0FBUztNQUNULFVBQVU7SUFDWjtJQUNBLFlBQVk7TUFDVixXQUFXO01BQ1gsU0FBUztNQUNULFVBQVU7SUFDWjtJQUNBLGtCQUFrQjtNQUNoQixXQUFXO01BQ1gsU0FBUztNQUNULFVBQVU7SUFDWjtJQUNBLGNBQWM7TUFDWixXQUFXO01BQ1gsU0FBUztNQUNULFVBQVU7SUFDWjtJQUNBLFFBQVE7TUFDTixXQUFXO01BQ1gsV0FBVztJQUNiO0VBQ0Y7QUFDRjtBQ3h0QkEsSUFBTywrQkFBUTtFQUNiLFdBQVc7SUFDVCxPQUFPO0lBQ1AsTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtFQUNWO0VBQ0EsVUFBVTtJQUNSLFVBQVU7TUFDUixRQUFRO01BQ1IsTUFBTTtNQUNOLE1BQU07TUFDTixNQUFNO01BQ04sTUFBTTtNQUNOLE1BQU07TUFDTixPQUFPO01BQ1AsUUFBUTtJQUNWO0lBQ0EsU0FBUztNQUNQLFFBQVE7TUFDUixXQUFXO01BQ1gsTUFBTTtNQUNOLE1BQU07TUFDTixNQUFNO0lBQ1I7RUFDRjtFQUNBLGFBQWE7SUFDWCxTQUFTO01BQ1AsS0FBSztNQUNMLEtBQUs7TUFDTCxLQUFLO01BQ0wsS0FBSztNQUNMLEtBQUs7SUFDUDtJQUNBLFdBQVc7TUFDVCxLQUFLO01BQ0wsS0FBSztNQUNMLEtBQUs7TUFDTCxLQUFLO01BQ0wsS0FBSztJQUNQO0lBQ0EsTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07RUFDUjtFQUNBLFVBQVU7SUFDUixLQUFLO0lBQ0wsTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sUUFBUTtFQUNWO0VBQ0EsUUFBUTtJQUNOLGNBQWM7TUFDWixNQUFNO01BQ04sTUFBTTtNQUNOLE1BQU07TUFDTixNQUFNO01BQ04sTUFBTTtNQUNOLE9BQU87SUFDVDtJQUNBLHFCQUFxQjtNQUNuQixNQUFNO01BQ04sTUFBTTtNQUNOLE1BQU07TUFDTixNQUFNO01BQ04sT0FBTztJQUNUO0VBQ0Y7RUFDQSxRQUFRO0lBQ04sU0FBUztNQUNQLE1BQU07TUFDTixNQUFNO01BQ04sTUFBTTtJQUNSO0lBQ0EsYUFBYTtNQUNYO01BQ0E7TUFDQTtJQUNGO0VBQ0Y7RUFDQSxTQUFTO0lBQ1AsUUFBUTtJQUNSLE9BQU87SUFDUCxNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztNQUNULFFBQVE7TUFDUixPQUFPO01BQ1AsTUFBTTtNQUNOLE1BQU07TUFDTixNQUFNO01BQ04sTUFBTTtNQUNOLE1BQU07TUFDTixPQUFPO01BQ1AsUUFBUTtJQUNWO0lBQ0EsU0FBUztNQUNQLFFBQVE7TUFDUixPQUFPO01BQ1AsTUFBTTtNQUNOLE1BQU07TUFDTixNQUFNO01BQ04sTUFBTTtNQUNOLE1BQU07TUFDTixPQUFPO01BQ1AsUUFBUTtJQUNWO0lBQ0EsU0FBUztNQUNQLFFBQVE7TUFDUixPQUFPO01BQ1AsTUFBTTtNQUNOLE1BQU07TUFDTixNQUFNO01BQ04sTUFBTTtNQUNOLE1BQU07TUFDTixPQUFPO01BQ1AsUUFBUTtJQUNWO0VBQ0Y7RUFDQSxRQUFRO0lBQ04sUUFBUTtJQUNSLFVBQVU7TUFDUixRQUFRO01BQ1IsU0FBUztNQUNULFFBQVE7SUFDVjtJQUNBLFVBQVU7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFVBQVU7TUFDVixRQUFRO0lBQ1Y7SUFDQSxTQUFTO01BQ1AsTUFBTTtNQUNOLE1BQU07TUFDTixNQUFNO0lBQ1I7SUFDQSxPQUFPO01BQ0wsTUFBTTtRQUNKLFlBQVk7UUFDWixjQUFjO1FBQ2QsY0FBYztNQUNoQjtNQUNBLE1BQU07UUFDSixZQUFZO1FBQ1osY0FBYztRQUNkLGNBQWM7TUFDaEI7TUFDQSxNQUFNO1FBQ0osWUFBWTtRQUNaLGNBQWM7UUFDZCxjQUFjO01BQ2hCO01BQ0EsTUFBTTtRQUNKLFlBQVk7UUFDWixjQUFjO1FBQ2QsY0FBYztNQUNoQjtNQUNBLE1BQU07UUFDSixZQUFZO1FBQ1osY0FBYztRQUNkLGNBQWM7TUFDaEI7TUFDQSxNQUFNO1FBQ0osWUFBWTtRQUNaLGNBQWM7UUFDZCxjQUFjO01BQ2hCO01BQ0EsWUFBWTtRQUNWLFlBQVk7UUFDWixjQUFjO1FBQ2QsY0FBYztNQUNoQjtNQUNBLFNBQVM7UUFDUCxZQUFZO1FBQ1osY0FBYztRQUNkLGNBQWM7TUFDaEI7TUFDQSxTQUFTO1FBQ1AsWUFBWTtRQUNaLGNBQWM7UUFDZCxjQUFjO01BQ2hCO01BQ0EsV0FBVztRQUNULFlBQVk7UUFDWixjQUFjO1FBQ2QsY0FBYztNQUNoQjtNQUNBLFVBQVU7UUFDUixZQUFZO1FBQ1osY0FBYztRQUNkLGNBQWM7TUFDaEI7SUFDRjtFQUNGO0VBQ0EsYUFBYTtJQUNYLHNCQUFzQjtNQUNwQixjQUFjO01BQ2QsV0FBVztNQUNYLFNBQVM7TUFDVCxXQUFXO01BQ1gsUUFBUTtJQUNWO0lBQ0Esd0JBQXdCO01BQ3RCLGNBQWM7TUFDZCxXQUFXO01BQ1gsU0FBUztNQUNULFdBQVc7TUFDWCxRQUFRO0lBQ1Y7SUFDQSxrQkFBa0I7TUFDaEIsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsU0FBUztNQUNULFNBQVM7SUFDWDtJQUNBLG9CQUFvQjtNQUNsQixpQkFBaUI7UUFDZjtRQUNBO1FBQ0E7UUFDQTtNQUNGO01BQ0EsWUFBWTtRQUNWO1FBQ0E7UUFDQTtRQUNBO01BQ0Y7TUFDQSxnQkFBZ0I7UUFDZDtRQUNBO1FBQ0E7UUFDQTtNQUNGO01BQ0EsU0FBUztRQUNQO1FBQ0E7UUFDQTtRQUNBO01BQ0Y7TUFDQSxTQUFTO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7TUFDRjtJQUNGO0VBQ0Y7QUFDRjtBQy9RQSxJQUFPLGdDQUFRO0VBQ2IsU0FBUztJQUNQLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxTQUFTO0VBQ1g7RUFDQSxXQUFXO0lBQ1QsU0FBUztNQUNQLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLFFBQVE7TUFDTixXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7SUFDQSxRQUFRO01BQ04sV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsUUFBUTtNQUNOLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsV0FBVztNQUNULFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNB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Q1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsYUFBYTtRQUNYLFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLFlBQVk7UUFDVixXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01B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Q0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFNBQVM7TUFDUDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsU0FBUztNQUNQO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFNBQVM7TUFDUDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsU0FBUztNQUNQO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFNBQVM7TUFDUDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsVUFBVTtNQUNSO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxZQUFZO01BQ1Y7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFlBQVk7TUFDVjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsWUFBWTtNQUNWO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxZQUFZO01BQ1Y7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLGtCQUFrQjtNQUNoQjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsUUFBUTtNQUNOO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxRQUFRO01BQ047TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFFBQVE7TUFDTjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsUUFBUTtNQUNOO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxRQUFRO01BQ047TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLGNBQWM7TUFDWjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsV0FBVztNQUNUO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxXQUFXO01BQ1Q7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFdBQVc7TUFDVDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsaUJBQWlCO01BQ2Y7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLGFBQWE7TUFDWDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsYUFBYTtNQUNYO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxhQUFhO01BQ1g7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLGFBQWE7TUFDWDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0Esb0JBQW9CO01BQ2xCO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxvQkFBb0I7TUFDbEI7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLG9CQUFvQjtNQUNsQjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsYUFBYTtNQUNYO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxhQUFhO01BQ1g7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLGFBQWE7TUFDWDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsYUFBYTtNQUNYO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxpQkFBaUI7TUFDZjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsU0FBUztNQUNQO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7TUFDQTtNQUNBO01BQ0E7SUFDRjtFQUNGO0VBQ0EsV0FBVztJQUNULFNBQVM7TUFDUCxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsUUFBUTtNQUNOLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxRQUFRO01BQ04sV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFFBQVE7TUFDTixXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsVUFBVTtNQUNSLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFdBQVc7TUFDVCxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsT0FBTztNQUNMLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsU0FBUztNQUNQLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLGdCQUFnQjtNQUNkLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7RUFDRjtFQUNBLE1BQU07SUFDSixRQUFRO01BQ04sV0FBVztRQUNULFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxhQUFhO1FBQ1gsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFlBQVk7UUFDVixXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLGFBQWE7UUFDWCxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsWUFBWTtRQUNWLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7SUFDRjtJQUNBLE9BQU87TUFDTCxPQUFPO1FBQ0wsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLE9BQU87UUFDTCxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsT0FBTztRQUNMLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7SUFDRjtFQUNGO0FBQ0Y7QUMvMEVBLElBQU8sNEJBQVE7RUFDYixTQUFTO0lBQ1AsU0FBUztNQUNQO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFNBQVM7TUFDUDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsUUFBUTtNQUNOO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxVQUFVO01BQ1I7TUFDQTtN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QUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxRQUFRO01BQ04sVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFFBQVE7TUFDTixVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsUUFBUTtNQUNOLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsV0FBVztNQUNULFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxPQUFPO01BQ0wsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsVUFBVTtNQUNSLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxTQUFTO01BQ1AsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsZ0JBQWdCO01BQ2QsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtFQUNGO0VBQ0EsTUFBTTtJQUNKLFFBQVE7TUFDTixXQUFXO1FBQ1QsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLGFBQWE7UUFDWCxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsWUFBWTtRQUNWLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsVUFBVTtNQUNSLFdBQVc7UUFDVCxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsYUFBYTtRQUNYLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxZQUFZO1FBQ1YsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsT0FBTztNQUNMLE9BQU87UUFDTCxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsT0FBTztRQUNMLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNB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QUFBLFNBQWUsZUFBZSxvQkFBSSxJQUFJO0FBQUEsTUFDcEM7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBLEVBRVMscUJBQXFCLGNBQWdDO0FBQzdELFVBQU0s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TSxtQkFBbUIsSUFBSSxpQkFBaUIsZ0JBQWdCO0FBQzlELHVCQUFpQixRQUFRLFNBQVMsaUJBQWlCLGNBQWM7QUFBQSxJQUNuRTtBQU1BLFFBQUksT0FBTyxvQkFBb0IsYUFBYTtBQUMxQyx5QkFBbUI7QUFBQSxJQUNyQjtBQUVBLFFBQUksT0FBTyxXQUFXLGVBQWUsQ0FBQyxPQUFPLGdCQUFnQjtBQUMzRCxhQUFPLGlCQUFpQjtBQUFBLElBQzFCO0FBQUEsRUFDRixXQUFXLE9BQU8sV0FBVyxlQUFlLENBQUMsT0FBTyxnQkFBZ0I7QUFDbEUsV0FBTyxpQkFBaUI7QUFDeEIsVUFBTSxrQkFBa0IsWUFBWSxVQUFVO0FBQzlDLGdCQUFZLFVBQVUsa0JBQWtCLFlBQWEsTUFBTTtBQUN6RCxZQUFNLFlBQVksZ0JBQWdCLEtBQUssTUFBTSxJQUFJO0FBQ2pELGdCQUFVLFNBQVMsSUFBSSxlQUFlLElBQUk7QUFDMUMsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQ0Y7OztBQzFjQSxJQUFBQyxzQkFBeUI7OztBQ0R6QixJQUFBQyxzQkFBeUI7OztBQ0F6QixJQUFBQyxlQUF1RDtBQUVoRCxJQUFNQyxPQUFNLENBQ2pCLFlBQ0csZUFDQSxhQUFBQyxLQUFLLFNBQVMsR0FBRyxPQUFPLElBQUksQ0FBQyxjQUFVLHdCQUFVLEtBQUssQ0FBQyxDQUFDOzs7QUNMN0QsSUFBQUMsZUFBb0I7QUFBYSxJQUFNQyxVQUFTOzs7QXpGUXpDLElBQU0sWUFBTixjQUF3QixlQUFlO0VBWTVDLFNBQVM7QUFDUCxXQUFPLG9CQUFPLEtBQUssY0FBYztFQUNuQztBQUNGO0FBZmEsVUFDSixTQUFTO0VBQ2RDO0VBQ0FDO0FBT0Y7QUFWVyxZQUFOO0VBRE4sY0FBYyxZQUFZO0dBQ2Q7IiwKICAibmFtZXMiOiBbImltcG9ydF9saXQiLCAiYWNjIiwgInByb3AiLCAidmFsdWUiLCAic3R5bGVzIiwgImRlcCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgIm9ic2VydmVyIiwgImUiLCAiY3NzVmFyIiwgIm9ic2VydmVyIiwgInBvcnRhbENvbnRyb2xsZXIiLCAiZWxlbWVudCIsICJzY3JvbGxYIiwgInNjcm9sbFkiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2NvbnRleHQiLCAiY29udGV4dCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2lmX2RlZmluZWQiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfY2xhc3NfbWFwIiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAibm9kZSIsICJvYnNlcnZlciIsICJzdGF0ZSIsICJpbXBvcnRfaXNfc2VydmVyIiwgIm9ic2VydmVyIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAiY3NzIiwgIl9jc3MiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAic3R5bGVzIiwgImNzcyJdCn0K
