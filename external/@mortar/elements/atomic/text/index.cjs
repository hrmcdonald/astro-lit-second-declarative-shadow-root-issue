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

// src/atomic/text/index.ts
var text_exports = {};
__export(text_exports, {
  MteMark: () => MteMark,
  MteText: () => MteText
});
module.exports = __toCommonJS(text_exports);

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
var dashCase = (s) => {
  return s.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()).replace(/(.*)([0-9]|[A-Z])(.*)/, "$1-$2$3");
};
var paletteGroupOptions = {
  core: ["primary", "secondary", "tertiary", "danger"],
  status: ["primary", "secondary", "tertiary", "success", "warning", "danger"],
  viz: ["one", "two", "three", "four", "five", "six"]
};
var getOpacity = (opacity) => opacity = config.opacity[`${opacity}`] ?? opacity;
var color = ({
  g: group = "core",
  p: palette,
  c: color2 = "base",
  o: opacity = null
}) => {
  opacity = getOpacity(opacity);
  if (opacity) {
    return `rgba(var(--mte-${dashCase(group)}-${dashCase(palette)}-${color2}-rgb), ${opacity})`;
  } else {
    return `rgb(var(--mte-${dashCase(group)}-${dashCase(palette)}-${color2}-rgb))`;
  }
};
var forEachPGVariant = (group, callback) => {
  return paletteGroupOptions[group].reduce(
    (acc, palette) => `${acc}${callback(group, palette)}`,
    ""
  );
};

// src/atomic/text/text.element.ts
var import_lit15 = require("lit");
var import_decorators19 = require("lit/decorators.js");

// src/core/base-classes/mte.element.ts
var import_decorators = require("lit/decorators.js");
var import_lit = require("lit");

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
var defaultBorderFactory = (width, color2, style) => `${style ?? "solid"} ${borderWidthValShorthands([
  { prop: "borderWidth", value: dotStringToConfigValue(width ?? "1px") }
])[0]?.value} ${dotStringToConfigValue(color2) ?? config.color.border1}`;
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
      this.setInstanceStyle("text", selectorFactory(":host:host:host:host:host"), {
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
  css7` :host { display: inline-block; margin-right: -2px; margin-left: -2px; padding-right: 2px; padding-left: 2px; } /** Status PG Variants */ ${forEachPGVariant(
    "status",
    (g, p) => css7` :host([color='${p}']) { background: ${color({ g, p, c: "light", o: "sm" })}; color: inherit; } `
  )} `
];
MteMark = __decorateClass([
  defineElement("mte-mark")
], MteMark);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90ZXh0L2luZGV4LnRzIiwgIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9zcmMvZ2VuZXJhdGVkL21hcHMvY29yZS12YXJzLWdldHRlci1tYXAudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3NyYy9nZW5lcmF0ZWQvbWFwcy90aGVtZS12YXJzLWdldHRlci1tYXAudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3NyYy9nZW5lcmF0ZWQvbWFwcy9jb3JlLXZhcnMtc2V0dGVyLW1hcC50cyIsICIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvc3JjL2dlbmVyYXRlZC9tYXBzL3RoZW1lLXZhcnMtc2V0dGVyLW1hcC50cyIsICIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvc3JjL2dlbmVyYXRlZC9tYXBzL3B4LWxpZ2h0LXdlYmdsLW1hcC50cyIsICIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvc3JjL2dlbmVyYXRlZC9tYXBzL3B4LWRhcmstd2ViZ2wtbWFwLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9zcmMvY29uZmlnLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9zcmMvZnVuY3Rpb25zL2NvcmUudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3NyYy9mdW5jdGlvbnMvdGhlbWUudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3NyYy9mdW5jdGlvbnMvdHlwb2dyYXBoeS50cyIsICIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvc3JjL2Z1bmN0aW9ucy9hbmltYXRpb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3NyYy9mdW5jdGlvbnMvZWxldmF0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGV4dC90ZXh0LmVsZW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYmFzZS1jbGFzc2VzL210ZS5lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9jc3MtaW4tanMvY3NzLWluLWpzLnByb3BlcnR5LW1hcHBlcnMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Nzcy1pbi1qcy9jc3MtaW4tanMudXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9lbnZpcm9ubWVudC51dGlsaXRpZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbGl0aWVzL2Zvcm0udXRpbGl0aWVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxpdGllcy9yZWFjdGl2ZS1zaWduYWwudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvYmFzZS1jbGFzc2VzL2NvbnRlbnQuYmFzZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9hdHRyaWJ1dGUtY29udmVydGVyL3Jlc3BvbnNpdmUtYXR0cmlidXRlLmNvbnZlcnRlci50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb25zdGFudHMvaGViLWxvZ28udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc2VydmljZXMvdGhlbWUuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy9wb3J0YWwuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9zZXJ2aWNlcy9oaXN0b3J5LWFwaS5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZpY2VzL2xvY2FsaXplLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24vYnV0dG9uLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9pY29uL2ljb24ucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdG9vbGJhci90b29sYmFyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9jYXJkL2NhcmQucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RyZWUvdHJlZS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvdGFnL3RhZy5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYmFkZ2UvYmFkZ2UucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2xpbmsvbGluay5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYWxlcnQvYWxlcnQucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2lucHV0L2lucHV0LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9kcmF3ZXIvZHJhd2VyLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9hc2lkZS9hc2lkZS5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi1pdGVtLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9tb2RhbC9tb2RhbC5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvY2hlY2tib3gvY2hlY2tib3gucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3JhZGlvL3JhZGlvLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXYvbmF2LnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9zd2l0Y2gvc3dpdGNoLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9uYXRpdmUtc2VsZWN0L25hdGl2ZS1zZWxlY3QucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RleHRhcmVhL3RleHRhcmVhLnByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9za2VsZXRvbi9za2VsZXRvbi5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc2xpZGVyL3NsaWRlci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvcmFuZ2Utc2xpZGVyL3JhbmdlLXNsaWRlci5wcmVzZXRzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvc2VnbWVudGVkLWNvbnRyb2wvc2VnbWVudGVkLWNvbnRyb2wucHJlc2V0cy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldHMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXQuc2VydmljZS50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wcmVzZXRzL3ByZXNldC5kZWNvcmF0b3IudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcHJlc2V0cy9wcmVzZXQuY29udGV4dC50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9jb250cm9sbGVycy9hcHBsaWVkLXByZXNldC1jb250ZXh0LmNvbnRyb2xsZXIudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvZGVjb3JhdG9ycy9kZWZpbmUtZWxlbWVudC5kZWNvcmF0b3IudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2NvbG9yLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9kZW5zaXR5Lm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvZGlzYWJsZWQubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2ludmVyc2UubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2ludmVyc2UubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy90YWJpbmRleC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvc3R5bGUtcGFydHMubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9idXR0b24ubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9vdmVybGF5Lm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9vdmVybGF5Lm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2ZpZWxkc2V0Lm1peGluLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbWl4aW5zL2Zvcm0tZmllbGQubWl4aW4uc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9hdXRvLWFjdGl2ZS1saW5rLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9zbG90LW9ic2VydmVyLm1peGluLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL21peGlucy9jaGVja2JveC5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvbWFwcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvYW9tLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9tdXRhdGlvbi1vYnNlcnZlcnMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL3V0aWxzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9WYWxpZGl0eVN0YXRlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9DdXN0b21TdGF0ZVNldC50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvcG9seWZpbGxzL2VsZW1lbnQtaW50ZXJuYWxzL3BhdGNoLWZvcm0tcHJvdG90eXBlLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3BvbHlmaWxscy9lbGVtZW50LWludGVybmFscy9lbGVtZW50LWludGVybmFscy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvbGFuZy5taXhpbi50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29yZS9taXhpbnMvd2FpdC1mb3ItZncubWl4aW4udHMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc3R5bGVzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3N0eWxlcy9iYXNlLnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL3RleHQvdGV4dC5zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy90ZXh0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3RleHQuZWxlbWVudCc7XG5leHBvcnQgKiBmcm9tICcuL21hcmsuZWxlbWVudCc7XG4iLCAiLyoqXG4gKiBEbyBub3QgZWRpdCBkaXJlY3RseVxuICogR2VuZXJhdGVkIG9uIFR1ZSwgMDIgQXByIDIwMjQgMTg6NDY6NTEgR01UXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwib3BhY2l0eVwiOiB7XG4gICAgXCJ4eGxcIjogXCJ2YXIoLS1tdGUtb3BhY2l0eS14eGwpXCIsXG4gICAgXCJ4bFwiOiBcInZhcigtLW10ZS1vcGFjaXR5LXhsKVwiLFxuICAgIFwibGdcIjogXCJ2YXIoLS1tdGUtb3BhY2l0eS1sZylcIixcbiAgICBcIm1kXCI6IFwidmFyKC0tbXRlLW9wYWNpdHktbWQpXCIsXG4gICAgXCJzbVwiOiBcInZhcigtLW10ZS1vcGFjaXR5LXNtKVwiLFxuICAgIFwieHNcIjogXCJ2YXIoLS1tdGUtb3BhY2l0eS14cylcIixcbiAgICBcInh4c1wiOiBcInZhcigtLW10ZS1vcGFjaXR5LXh4cylcIixcbiAgICBcInh4eHNcIjogXCJ2YXIoLS1tdGUtb3BhY2l0eS14eHhzKVwiXG4gIH0sXG4gIFwiYm9yZGVyXCI6IHtcbiAgICBcInJhZGl1c1wiOiB7XG4gICAgICBcIm5vbmVcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1ub25lKVwiLFxuICAgICAgXCJ4c1wiOiBcInZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXhzKVwiLFxuICAgICAgXCJzbVwiOiBcInZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXNtKVwiLFxuICAgICAgXCJtZFwiOiBcInZhcigtLW10ZS1ib3JkZXItcmFkaXVzLW1kKVwiLFxuICAgICAgXCJsZ1wiOiBcInZhcigtLW10ZS1ib3JkZXItcmFkaXVzLWxnKVwiLFxuICAgICAgXCJ4bFwiOiBcInZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXhsKVwiLFxuICAgICAgXCJ4eGxcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy14eGwpXCIsXG4gICAgICBcImZ1bGxcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1mdWxsKVwiXG4gICAgfSxcbiAgICBcIndpZHRoXCI6IHtcbiAgICAgIFwibm9uZVwiOiBcInZhcigtLW10ZS1ib3JkZXItd2lkdGgtbm9uZSlcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcInZhcigtLW10ZS1ib3JkZXItd2lkdGgtZGVmYXVsdClcIixcbiAgICAgIFwic21cIjogXCJ2YXIoLS1tdGUtYm9yZGVyLXdpZHRoLXNtKVwiLFxuICAgICAgXCJtZFwiOiBcInZhcigtLW10ZS1ib3JkZXItd2lkdGgtbWQpXCIsXG4gICAgICBcImxnXCI6IFwidmFyKC0tbXRlLWJvcmRlci13aWR0aC1sZylcIlxuICAgIH1cbiAgfSxcbiAgXCJlbGV2YXRpb25cIjoge1xuICAgIFwibGV2ZWxcIjoge1xuICAgICAgXCIwXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1sZXZlbC0wKVwiLFxuICAgICAgXCIxXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1sZXZlbC0xKVwiLFxuICAgICAgXCIyXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1sZXZlbC0yKVwiLFxuICAgICAgXCIzXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1sZXZlbC0zKVwiLFxuICAgICAgXCI0XCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1sZXZlbC00KVwiXG4gICAgfSxcbiAgICBcIm9wYWNpdHlcIjoge1xuICAgICAgXCIwXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1vcGFjaXR5LTApXCIsXG4gICAgICBcIjFcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktMSlcIixcbiAgICAgIFwiMlwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tb3BhY2l0eS0yKVwiLFxuICAgICAgXCIzXCI6IFwidmFyKC0tbXRlLWVsZXZhdGlvbi1vcGFjaXR5LTMpXCIsXG4gICAgICBcIjRcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktNClcIlxuICAgIH0sXG4gICAgXCJ6MFwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tejApXCIsXG4gICAgXCJ6MVwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tejEpXCIsXG4gICAgXCJ6MlwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tejIpXCIsXG4gICAgXCJ6M1wiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tejMpXCIsXG4gICAgXCJ6NFwiOiBcInZhcigtLW10ZS1lbGV2YXRpb24tejQpXCJcbiAgfSxcbiAgXCJ6SW5kZXhcIjoge1xuICAgIFwiMFwiOiBcInZhcigtLW10ZS16LWluZGV4LTApXCIsXG4gICAgXCIxMFwiOiBcInZhcigtLW10ZS16LWluZGV4LTEwKVwiLFxuICAgIFwiMjBcIjogXCJ2YXIoLS1tdGUtei1pbmRleC0yMClcIixcbiAgICBcIjMwXCI6IFwidmFyKC0tbXRlLXotaW5kZXgtMzApXCIsXG4gICAgXCI0MFwiOiBcInZhcigtLW10ZS16LWluZGV4LTQwKVwiLFxuICAgIFwiNTBcIjogXCJ2YXIoLS1tdGUtei1pbmRleC01MClcIixcbiAgICBcIi0xXCI6IFwidmFyKC0tbXRlLXotaW5kZXgtMSlcIixcbiAgICBcImF1dG9cIjogXCJ2YXIoLS1tdGUtei1pbmRleC1hdXRvKVwiXG4gIH0sXG4gIFwiZ3JpZFwiOiB7XG4gICAgXCJicmVha3BvaW50XCI6IHtcbiAgICAgIFwieHNcIjogXCIwXCIsXG4gICAgICBcInNtXCI6IFwiNDgwcHhcIixcbiAgICAgIFwibWRcIjogXCI3NjhweFwiLFxuICAgICAgXCJsZ1wiOiBcIjEwMjRweFwiLFxuICAgICAgXCJ4bFwiOiBcIjEyODBweFwiLFxuICAgICAgXCJ4eGxcIjogXCIxNTM2cHhcIlxuICAgIH0sXG4gICAgXCJjb250YWluZXJNYXhXaWR0aFwiOiB7XG4gICAgICBcInNtXCI6IFwiNzY4cHhcIixcbiAgICAgIFwibWRcIjogXCIxMDI0cHhcIixcbiAgICAgIFwibGdcIjogXCIxMjgwcHhcIixcbiAgICAgIFwieGxcIjogXCIxNDQwcHhcIixcbiAgICAgIFwieHhsXCI6IFwiMTQ0MHB4XCJcbiAgICB9XG4gIH0sXG4gIFwic2l6ZVwiOiB7XG4gICAgXCJzY2FsZVwiOiB7XG4gICAgICBcInNtXCI6IFwidmFyKC0tbXRlLXNpemUtc2NhbGUtc20pXCIsXG4gICAgICBcIm1kXCI6IFwidmFyKC0tbXRlLXNpemUtc2NhbGUtbWQpXCIsXG4gICAgICBcImxnXCI6IFwidmFyKC0tbXRlLXNpemUtc2NhbGUtbGcpXCJcbiAgICB9LFxuICAgIFwiZGVuc2l0aWVzXCI6IFtcbiAgICAgIFwiY29tcGFjdFwiLFxuICAgICAgXCJjb21meVwiLFxuICAgICAgXCJyb29teVwiXG4gICAgXVxuICB9LFxuICBcInNwYWNlXCI6IHtcbiAgICBcIm5vbmVcIjogXCJ2YXIoLS1tdGUtc3BhY2Utbm9uZSlcIixcbiAgICBcInh4c1wiOiBcInZhcigtLW10ZS1zcGFjZS14eHMpXCIsXG4gICAgXCJ4c1wiOiBcInZhcigtLW10ZS1zcGFjZS14cylcIixcbiAgICBcInNtXCI6IFwidmFyKC0tbXRlLXNwYWNlLXNtKVwiLFxuICAgIFwibWRcIjogXCJ2YXIoLS1tdGUtc3BhY2UtbWQpXCIsXG4gICAgXCJsZ1wiOiBcInZhcigtLW10ZS1zcGFjZS1sZylcIixcbiAgICBcInhsXCI6IFwidmFyKC0tbXRlLXNwYWNlLXhsKVwiLFxuICAgIFwieHhsXCI6IFwidmFyKC0tbXRlLXNwYWNlLXh4bClcIixcbiAgICBcInh4eGxcIjogXCJ2YXIoLS1tdGUtc3BhY2UteHh4bClcIixcbiAgICBcImNvbXBhY3RcIjoge1xuICAgICAgXCJub25lXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbXBhY3Qtbm9uZSlcIixcbiAgICAgIFwieHhzXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHhzKVwiLFxuICAgICAgXCJ4c1wiOiBcInZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXhzKVwiLFxuICAgICAgXCJzbVwiOiBcInZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXNtKVwiLFxuICAgICAgXCJtZFwiOiBcInZhcigtLW10ZS1zcGFjZS1jb21wYWN0LW1kKVwiLFxuICAgICAgXCJsZ1wiOiBcInZhcigtLW10ZS1zcGFjZS1jb21wYWN0LWxnKVwiLFxuICAgICAgXCJ4bFwiOiBcInZhcigtLW10ZS1zcGFjZS1jb21wYWN0LXhsKVwiLFxuICAgICAgXCJ4eGxcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eGwpXCIsXG4gICAgICBcInh4eGxcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eHhsKVwiXG4gICAgfSxcbiAgICBcImNvbWZ5XCI6IHtcbiAgICAgIFwibm9uZVwiOiBcInZhcigtLW10ZS1zcGFjZS1jb21meS1ub25lKVwiLFxuICAgICAgXCJ4eHNcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tZnkteHhzKVwiLFxuICAgICAgXCJ4c1wiOiBcInZhcigtLW10ZS1zcGFjZS1jb21meS14cylcIixcbiAgICAgIFwic21cIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tZnktc20pXCIsXG4gICAgICBcIm1kXCI6IFwidmFyKC0tbXRlLXNwYWNlLWNvbWZ5LW1kKVwiLFxuICAgICAgXCJsZ1wiOiBcInZhcigtLW10ZS1zcGFjZS1jb21meS1sZylcIixcbiAgICAgIFwieGxcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tZnkteGwpXCIsXG4gICAgICBcInh4bFwiOiBcInZhcigtLW10ZS1zcGFjZS1jb21meS14eGwpXCIsXG4gICAgICBcInh4eGxcIjogXCJ2YXIoLS1tdGUtc3BhY2UtY29tZnkteHh4bClcIlxuICAgIH0sXG4gICAgXCJyb29teVwiOiB7XG4gICAgICBcIm5vbmVcIjogXCJ2YXIoLS1tdGUtc3BhY2Utcm9vbXktbm9uZSlcIixcbiAgICAgIFwieHhzXCI6IFwidmFyKC0tbXRlLXNwYWNlLXJvb215LXh4cylcIixcbiAgICAgIFwieHNcIjogXCJ2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHMpXCIsXG4gICAgICBcInNtXCI6IFwidmFyKC0tbXRlLXNwYWNlLXJvb215LXNtKVwiLFxuICAgICAgXCJtZFwiOiBcInZhcigtLW10ZS1zcGFjZS1yb29teS1tZClcIixcbiAgICAgIFwibGdcIjogXCJ2YXIoLS1tdGUtc3BhY2Utcm9vbXktbGcpXCIsXG4gICAgICBcInhsXCI6IFwidmFyKC0tbXRlLXNwYWNlLXJvb215LXhsKVwiLFxuICAgICAgXCJ4eGxcIjogXCJ2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHhsKVwiLFxuICAgICAgXCJ4eHhsXCI6IFwidmFyKC0tbXRlLXNwYWNlLXJvb215LXh4eGwpXCJcbiAgICB9XG4gIH0sXG4gIFwiZm9udFwiOiB7XG4gICAgXCJiYXNlXCI6IFwidmFyKC0tbXRlLWZvbnQtYmFzZSlcIixcbiAgICBcImZhbWlseVwiOiB7XG4gICAgICBcInNhbnNcIjogXCJ2YXIoLS1tdGUtZm9udC1mYW1pbHktc2FucylcIixcbiAgICAgIFwic2VyaWZcIjogXCJ2YXIoLS1tdGUtZm9udC1mYW1pbHktc2VyaWYpXCIsXG4gICAgICBcIm1vbm9cIjogXCJ2YXIoLS1tdGUtZm9udC1mYW1pbHktbW9ubylcIlxuICAgIH0sXG4gICAgXCJ3ZWlnaHRcIjoge1xuICAgICAgXCJsaWdodFwiOiBcInZhcigtLW10ZS1mb250LXdlaWdodC1saWdodClcIixcbiAgICAgIFwicmVndWxhclwiOiBcInZhcigtLW10ZS1mb250LXdlaWdodC1yZWd1bGFyKVwiLFxuICAgICAgXCJtZWRpdW1cIjogXCJ2YXIoLS1tdGUtZm9udC13ZWlnaHQtbWVkaXVtKVwiLFxuICAgICAgXCJib2xkXCI6IFwidmFyKC0tbXRlLWZvbnQtd2VpZ2h0LWJvbGQpXCJcbiAgICB9LFxuICAgIFwicmF0aW9cIjoge1xuICAgICAgXCJzbVwiOiAwLjgsXG4gICAgICBcIm1kXCI6IDEsXG4gICAgICBcImxnXCI6IDEuMlxuICAgIH0sXG4gICAgXCJzZXRcIjoge1xuICAgICAgXCJoMVwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDEtZm9udC1zaXplKVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDEtbGluZS1oZWlnaHQpXCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1oMS1mb250LXdlaWdodClcIlxuICAgICAgfSxcbiAgICAgIFwiaDJcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWgyLWZvbnQtc2l6ZSlcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWgyLWxpbmUtaGVpZ2h0KVwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDItZm9udC13ZWlnaHQpXCJcbiAgICAgIH0sXG4gICAgICBcImgzXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcInZhcigtLW10ZS1mb250LXNldC1oMy1mb250LXNpemUpXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1oMy1saW5lLWhlaWdodClcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWgzLWZvbnQtd2VpZ2h0KVwiXG4gICAgICB9LFxuICAgICAgXCJoNFwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDQtZm9udC1zaXplKVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDQtbGluZS1oZWlnaHQpXCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1oNC1mb250LXdlaWdodClcIlxuICAgICAgfSxcbiAgICAgIFwiaDVcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWg1LWZvbnQtc2l6ZSlcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWg1LWxpbmUtaGVpZ2h0KVwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtaDUtZm9udC13ZWlnaHQpXCJcbiAgICAgIH0sXG4gICAgICBcImg2XCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcInZhcigtLW10ZS1mb250LXNldC1oNi1mb250LXNpemUpXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1oNi1saW5lLWhlaWdodClcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWg2LWZvbnQtd2VpZ2h0KVwiXG4gICAgICB9LFxuICAgICAgXCJzdWJ0aXRsZVwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtc3VidGl0bGUtZm9udC1zaXplKVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtc3VidGl0bGUtbGluZS1oZWlnaHQpXCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1zdWJ0aXRsZS1mb250LXdlaWdodClcIlxuICAgICAgfSxcbiAgICAgIFwiYm9keTFcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWZvbnQtc2l6ZSlcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWxpbmUtaGVpZ2h0KVwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCJ2YXIoLS1tdGUtZm9udC1zZXQtYm9keTEtZm9udC13ZWlnaHQpXCJcbiAgICAgIH0sXG4gICAgICBcImJvZHkyXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcInZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1mb250LXNpemUpXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1ib2R5Mi1saW5lLWhlaWdodClcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkyLWZvbnQtd2VpZ2h0KVwiXG4gICAgICB9LFxuICAgICAgXCJjYXB0aW9uXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcInZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtc2l6ZSlcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWNhcHRpb24tbGluZS1oZWlnaHQpXCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtd2VpZ2h0KVwiXG4gICAgICB9LFxuICAgICAgXCJidXR0b25cIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwidmFyKC0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1mb250LXNpemUpXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1idXR0b24tbGluZS1oZWlnaHQpXCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcInZhcigtLW10ZS1mb250LXNldC1idXR0b24tZm9udC13ZWlnaHQpXCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwiYW5pbWF0aW9uXCI6IHtcbiAgICBcInRyYW5zaXRpb25EdXJhdGlvblwiOiB7XG4gICAgICBcImV4dHJhU2hvcnRcIjogXCI4MG1zXCIsXG4gICAgICBcInNob3J0ZXJcIjogXCIxMjBtc1wiLFxuICAgICAgXCJzaG9ydFwiOiBcIjIwMG1zXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCIzMDBtc1wiLFxuICAgICAgXCJsb25nXCI6IFwiNTAwbXNcIlxuICAgIH0sXG4gICAgXCJ0cmFuc2l0aW9uRHVyYXRpb25Kc1wiOiB7XG4gICAgICBcImV4dHJhU2hvcnRcIjogMC4wOCxcbiAgICAgIFwic2hvcnRlclwiOiAwLjEyLFxuICAgICAgXCJzaG9ydFwiOiAwLjIsXG4gICAgICBcImRlZmF1bHRcIjogMC4zLFxuICAgICAgXCJsb25nXCI6IDAuNVxuICAgIH0sXG4gICAgXCJ0aW1pbmdGdW5jdGlvblwiOiB7XG4gICAgICBcImRlY2VsZXJhdGVPdXRcIjogXCJjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKVwiLFxuICAgICAgXCJzdGFuZGFyZFwiOiBcImN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSlcIixcbiAgICAgIFwiYWNjZWxlcmF0ZUluXCI6IFwiY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSlcIixcbiAgICAgIFwic2hhcnBcIjogXCJjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpXCIsXG4gICAgICBcImluT3V0XCI6IFwiY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpXCJcbiAgICB9LFxuICAgIFwidGltaW5nRnVuY3Rpb25Kc1wiOiB7XG4gICAgICBcImRlY2VsZXJhdGVPdXRcIjogW1xuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICAwLjIsXG4gICAgICAgIDFcbiAgICAgIF0sXG4gICAgICBcInN0YW5kYXJkXCI6IFtcbiAgICAgICAgMC40LFxuICAgICAgICAwLFxuICAgICAgICAwLjIsXG4gICAgICAgIDFcbiAgICAgIF0sXG4gICAgICBcImFjY2VsZXJhdGVJblwiOiBbXG4gICAgICAgIDAuNCxcbiAgICAgICAgMCxcbiAgICAgICAgMSxcbiAgICAgICAgMVxuICAgICAgXSxcbiAgICAgIFwic2hhcnBcIjogW1xuICAgICAgICAwLjQsXG4gICAgICAgIDAsXG4gICAgICAgIDAuNixcbiAgICAgICAgMVxuICAgICAgXSxcbiAgICAgIFwiaW5PdXRcIjogW1xuICAgICAgICAwLjM1LFxuICAgICAgICAwLFxuICAgICAgICAwLjI1LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9XG59OyIsICJleHBvcnQgZGVmYXVsdCB7XG4gIFwiY29sb3JcIjoge1xuICAgIFwiYmxhY2tcIjogXCJ2YXIoLS1tdGUtYmxhY2spXCIsXG4gICAgXCJ3aGl0ZVwiOiBcInZhcigtLW10ZS13aGl0ZSlcIixcbiAgICBcImxpZ2h0XCI6IFwidmFyKC0tbXRlLWxpZ2h0KVwiLFxuICAgIFwiZGFya1wiOiBcInZhcigtLW10ZS1kYXJrKVwiLFxuICAgIFwiZGFya2VyXCI6IFwidmFyKC0tbXRlLWRhcmtlcilcIixcbiAgICBcImZvY3VzXCI6IFwidmFyKC0tbXRlLWZvY3VzKVwiLFxuICAgIFwiZm9jdXNMaWdodGVyXCI6IFwidmFyKC0tbXRlLWZvY3VzLWxpZ2h0ZXIpXCIsXG4gICAgXCJmb2N1c0NvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWZvY3VzLWNvbnRyYXN0KVwiLFxuICAgIFwiZ3JleTFcIjogXCJ2YXIoLS1tdGUtZ3JleS0xKVwiLFxuICAgIFwiZ3JleTJcIjogXCJ2YXIoLS1tdGUtZ3JleS0yKVwiLFxuICAgIFwiZ3JleTNcIjogXCJ2YXIoLS1tdGUtZ3JleS0zKVwiLFxuICAgIFwiZ3JleTRcIjogXCJ2YXIoLS1tdGUtZ3JleS00KVwiLFxuICAgIFwiZ3JleTVcIjogXCJ2YXIoLS1tdGUtZ3JleS01KVwiLFxuICAgIFwiZ3JleTZcIjogXCJ2YXIoLS1tdGUtZ3JleS02KVwiLFxuICAgIFwiZ3JleTdcIjogXCJ2YXIoLS1tdGUtZ3JleS03KVwiLFxuICAgIFwiZ3JleThcIjogXCJ2YXIoLS1tdGUtZ3JleS04KVwiLFxuICAgIFwiZ3JleTlcIjogXCJ2YXIoLS1tdGUtZ3JleS05KVwiLFxuICAgIFwiZ3JleTEwXCI6IFwidmFyKC0tbXRlLWdyZXktMTApXCIsXG4gICAgXCJzdXJmYWNlMVwiOiBcInZhcigtLW10ZS1zdXJmYWNlLTEpXCIsXG4gICAgXCJzdXJmYWNlMlwiOiBcInZhcigtLW10ZS1zdXJmYWNlLTIpXCIsXG4gICAgXCJzdXJmYWNlM1wiOiBcInZhcigtLW10ZS1zdXJmYWNlLTMpXCIsXG4gICAgXCJzdXJmYWNlNFwiOiBcInZhcigtLW10ZS1zdXJmYWNlLTQpXCIsXG4gICAgXCJzdXJmYWNlSW52ZXJzZVwiOiBcInZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpXCIsXG4gICAgXCJpbmsxXCI6IFwidmFyKC0tbXRlLWluay0xKVwiLFxuICAgIFwiaW5rMlwiOiBcInZhcigtLW10ZS1pbmstMilcIixcbiAgICBcImluazNcIjogXCJ2YXIoLS1tdGUtaW5rLTMpXCIsXG4gICAgXCJpbms0XCI6IFwidmFyKC0tbXRlLWluay00KVwiLFxuICAgIFwiaW5rNVwiOiBcInZhcigtLW10ZS1pbmstNSlcIixcbiAgICBcImlua0ludmVyc2VcIjogXCJ2YXIoLS1tdGUtaW5rLWludmVyc2UpXCIsXG4gICAgXCJib3JkZXIxXCI6IFwidmFyKC0tbXRlLWJvcmRlci0xKVwiLFxuICAgIFwiYm9yZGVyMlwiOiBcInZhcigtLW10ZS1ib3JkZXItMilcIixcbiAgICBcImJvcmRlcjNcIjogXCJ2YXIoLS1tdGUtYm9yZGVyLTMpXCIsXG4gICAgXCJib3JkZXJJbnZlcnNlXCI6IFwidmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKVwiLFxuICAgIFwiZGlzYWJsZWQxXCI6IFwidmFyKC0tbXRlLWRpc2FibGVkLTEpXCIsXG4gICAgXCJkaXNhYmxlZDJcIjogXCJ2YXIoLS1tdGUtZGlzYWJsZWQtMilcIixcbiAgICBcImRpc2FibGVkM1wiOiBcInZhcigtLW10ZS1kaXNhYmxlZC0zKVwiLFxuICAgIFwiZGlzYWJsZWQ0XCI6IFwidmFyKC0tbXRlLWRpc2FibGVkLTQpXCIsXG4gICAgXCJkaXNhYmxlZEludmVyc2UxXCI6IFwidmFyKC0tbXRlLWRpc2FibGVkLWludmVyc2UtMSlcIixcbiAgICBcImRpc2FibGVkSW52ZXJzZTJcIjogXCJ2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0yKVwiLFxuICAgIFwiZGlzYWJsZWRJbnZlcnNlM1wiOiBcInZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMpXCIsXG4gICAgXCJyZWFkb25seTFcIjogXCJ2YXIoLS1tdGUtcmVhZG9ubHktMSlcIixcbiAgICBcInJlYWRvbmx5MlwiOiBcInZhcigtLW10ZS1yZWFkb25seS0yKVwiLFxuICAgIFwicmVhZG9ubHkzXCI6IFwidmFyKC0tbXRlLXJlYWRvbmx5LTMpXCIsXG4gICAgXCJyZWFkb25seTRcIjogXCJ2YXIoLS1tdGUtcmVhZG9ubHktNClcIixcbiAgICBcImVsZXZhdGlvbkJhc2VcIjogXCJ2YXIoLS1tdGUtZWxldmF0aW9uLWJhc2UpXCIsXG4gICAgXCJjb2RlMVwiOiBcInZhcigtLW10ZS1jb2RlLTEpXCIsXG4gICAgXCJjb2RlMlwiOiBcInZhcigtLW10ZS1jb2RlLTIpXCJcbiAgfSxcbiAgXCJwYWxldHRlXCI6IHtcbiAgICBcImdyZWVuXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtZ3JlZW4tbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1ncmVlbi1saWdodGVyLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtZ3JlZW4tbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtZ3JlZW4tbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWdyZWVuLWJhc2UpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtZ3JlZW4tYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtZ3JlZW4tZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1ncmVlbi1kYXJrLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWdyZWVuLWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1ncmVlbi1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwidGVhbFwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXRlYWwtbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS10ZWFsLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS10ZWFsLWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXRlYWwtbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXRlYWwtYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS10ZWFsLWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXRlYWwtZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS10ZWFsLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtdGVhbC1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtdGVhbC1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY3lhblwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWN5YW4tbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1jeWFuLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1jeWFuLWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWN5YW4tbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWN5YW4tYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1jeWFuLWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWN5YW4tZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1jeWFuLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtY3lhbi1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtY3lhbi1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiYmx1ZVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWJsdWUtbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1ibHVlLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1ibHVlLWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWJsdWUtbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWJsdWUtYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1ibHVlLWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWJsdWUtZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1ibHVlLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtYmx1ZS1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtYmx1ZS1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwicnhCbHVlXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcngtYmx1ZS1saWdodGVyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXJ4LWJsdWUtbGlnaHRlci1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXJ4LWJsdWUtbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcngtYmx1ZS1saWdodC1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcngtYmx1ZS1iYXNlKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXJ4LWJsdWUtYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcngtYmx1ZS1kYXJrKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXJ4LWJsdWUtZGFyay1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1yeC1ibHVlLWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1yeC1ibHVlLWRhcmtlci1jb250cmFzdClcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJwdXJwbGVcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1wdXJwbGUtbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1wdXJwbGUtbGlnaHRlci1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXB1cnBsZS1saWdodClcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1wdXJwbGUtbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLXB1cnBsZS1iYXNlKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXB1cnBsZS1iYXNlLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1wdXJwbGUtZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1wdXJwbGUtZGFyay1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1wdXJwbGUtZGFya2VyKVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLXB1cnBsZS1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwibWFnZW50YVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLW1hZ2VudGEtbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1tYWdlbnRhLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1tYWdlbnRhLWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLW1hZ2VudGEtbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLW1hZ2VudGEtYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1tYWdlbnRhLWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLW1hZ2VudGEtZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1tYWdlbnRhLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtbWFnZW50YS1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtbWFnZW50YS1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwicmVkXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcmVkLWxpZ2h0ZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcmVkLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1yZWQtbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcmVkLWxpZ2h0LWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1yZWQtYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1yZWQtYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcmVkLWRhcmspXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtcmVkLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtcmVkLWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1yZWQtZGFya2VyLWNvbnRyYXN0KVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImhlYlJlZFwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWhlYi1yZWQtbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1oZWItcmVkLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1oZWItcmVkLWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWhlYi1yZWQtbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWhlYi1yZWQtYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1oZWItcmVkLWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWhlYi1yZWQtZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1oZWItcmVkLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtaGViLXJlZC1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtaGViLXJlZC1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwib3JhbmdlXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtb3JhbmdlLWxpZ2h0ZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtb3JhbmdlLWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1vcmFuZ2UtbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtb3JhbmdlLWxpZ2h0LWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1vcmFuZ2UtYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1vcmFuZ2UtYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtb3JhbmdlLWRhcmspXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtb3JhbmdlLWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtb3JhbmdlLWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1vcmFuZ2UtZGFya2VyLWNvbnRyYXN0KVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImFtYmVyXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtYW1iZXItbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1hbWJlci1saWdodGVyLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtYW1iZXItbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtYW1iZXItbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWFtYmVyLWJhc2UpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtYW1iZXItYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtYW1iZXItZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1hbWJlci1kYXJrLWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWFtYmVyLWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1hbWJlci1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwieWVsbG93XCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUteWVsbG93LWxpZ2h0ZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUteWVsbG93LWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS15ZWxsb3ctbGlnaHQpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUteWVsbG93LWxpZ2h0LWNvbnRyYXN0KVwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS15ZWxsb3ctYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS15ZWxsb3ctYmFzZS1jb250cmFzdClcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUteWVsbG93LWRhcmspXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUteWVsbG93LWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUteWVsbG93LWRhcmtlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS15ZWxsb3ctZGFya2VyLWNvbnRyYXN0KVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImNvdXBvblllbGxvd1wiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWNvdXBvbi15ZWxsb3ctbGlnaHRlcilcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1jb3Vwb24teWVsbG93LWxpZ2h0ZXItY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcInZhcigtLW10ZS1jb3Vwb24teWVsbG93LWxpZ2h0KVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwidmFyKC0tbXRlLWNvdXBvbi15ZWxsb3ctbGlnaHQtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWNvdXBvbi15ZWxsb3ctYmFzZSlcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1jb3Vwb24teWVsbG93LWJhc2UtY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwidmFyKC0tbXRlLWNvdXBvbi15ZWxsb3ctZGFyaylcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcInZhcigtLW10ZS1jb3Vwb24teWVsbG93LWRhcmstY29udHJhc3QpXCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCJ2YXIoLS1tdGUtY291cG9uLXllbGxvdy1kYXJrZXIpXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCJ2YXIoLS1tdGUtY291cG9uLXllbGxvdy1kYXJrZXItY29udHJhc3QpXCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwicGdcIjoge1xuICAgIFwiY29yZVwiOiB7XG4gICAgICBcInByaW1hcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXByaW1hcnktZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1wcmltYXJ5LWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2Vjb25kYXJ5XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLXNlY29uZGFyeS1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1zZWNvbmRhcnktZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGVydGlhcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtdGVydGlhcnktZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS10ZXJ0aWFyeS1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRhbmdlclwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLWNvcmUtZGFuZ2VyLWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1jb3JlLWRhbmdlci1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic3RhdHVzXCI6IHtcbiAgICAgIFwicHJpbWFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXByaW1hcnktZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1wcmltYXJ5LWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtcHJpbWFyeS1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlY29uZGFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGVydGlhcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtdGVydGlhcnktZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic3VjY2Vzc1wiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWxpZ2h0LXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWJhc2UtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXN1Y2Nlc3MtZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1zdWNjZXNzLWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1kYXJrZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtc3VjY2Vzcy1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndhcm5pbmdcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy13YXJuaW5nLWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS1zdGF0dXMtd2FybmluZy1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLXdhcm5pbmctZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkYW5nZXJcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXN0YXR1cy1kYW5nZXItZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwidml6XCI6IHtcbiAgICAgIFwib25lXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotb25lLWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotb25lLWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1vbmUtbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotb25lLWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1vbmUtYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1vbmUtYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotb25lLWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotb25lLWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotb25lLWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1vbmUtZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0d29cIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10d28tbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10d28tbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXR3by1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10d28tbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXR3by1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LXR3by1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10d28tZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10d28tZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10d28tZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LXR3by1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRocmVlXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotdGhyZWUtbGlnaHRlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10aHJlZS1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotdGhyZWUtbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotdGhyZWUtbGlnaHQtYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXRocmVlLWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotdGhyZWUtYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotdGhyZWUtZGFyay1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10aHJlZS1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LXRocmVlLWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei10aHJlZS1kYXJrZXItYy1yZ2IpKVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImZvdXJcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1mb3VyLWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotZm91ci1saWdodGVyLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotZm91ci1saWdodC1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1mb3VyLWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1mb3VyLWJhc2UtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotZm91ci1iYXNlLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1mb3VyLWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotZm91ci1kYXJrLWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZvdXItZGFya2VyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZvdXItZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJmaXZlXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotZml2ZS1saWdodGVyLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZpdmUtbGlnaHRlci1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZpdmUtbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotZml2ZS1saWdodC1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotZml2ZS1iYXNlLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZpdmUtYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotZml2ZS1kYXJrLXJnYikpXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcInJnYih2YXIoLS1tdGUtdml6LWZpdmUtZGFyay1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1maXZlLWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1maXZlLWRhcmtlci1jLXJnYikpXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwic2l4XCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotc2l4LWxpZ2h0ZXItcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotc2l4LWxpZ2h0ZXItYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1zaXgtbGlnaHQtcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotc2l4LWxpZ2h0LWMtcmdiKSlcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1zaXgtYmFzZS1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1zaXgtYmFzZS1jLXJnYikpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotc2l4LWRhcmstcmdiKSlcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwicmdiKHZhcigtLW10ZS12aXotc2l4LWRhcmstYy1yZ2IpKVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmdiKHZhcigtLW10ZS12aXotc2l4LWRhcmtlci1yZ2IpKVwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCJyZ2IodmFyKC0tbXRlLXZpei1zaXgtZGFya2VyLWMtcmdiKSlcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcInN0YXRlVG9rZW5cIjoge1xuICAgIFwic3VyZmFjZTFcIjoge1xuICAgICAgXCJkZWZhdWx0XCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0xLWRlZmF1bHQtcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtMS1kZWZhdWx0LWEpKVwiLFxuICAgICAgXCJob3ZlclwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMS1ob3Zlci1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLWEpKVwiLFxuICAgICAgXCJhY3RpdmVcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLWEpKVwiXG4gICAgfSxcbiAgICBcInN1cmZhY2UyXCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1kZWZhdWx0LXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1hKSlcIixcbiAgICAgIFwiaG92ZXJcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hKSlcIixcbiAgICAgIFwiYWN0aXZlXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hKSlcIlxuICAgIH0sXG4gICAgXCJzdXJmYWNlM1wiOiB7XG4gICAgICBcImRlZmF1bHRcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTMtZGVmYXVsdC1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS0zLWRlZmF1bHQtYSkpXCIsXG4gICAgICBcImhvdmVyXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLTMtaG92ZXItYSkpXCIsXG4gICAgICBcImFjdGl2ZVwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtMy1hY3RpdmUtcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtMy1hY3RpdmUtYSkpXCJcbiAgICB9LFxuICAgIFwic3VyZmFjZTRcIjoge1xuICAgICAgXCJkZWZhdWx0XCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS00LWRlZmF1bHQtcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtNC1kZWZhdWx0LWEpKVwiLFxuICAgICAgXCJob3ZlclwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtNC1ob3Zlci1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS00LWhvdmVyLWEpKVwiLFxuICAgICAgXCJhY3RpdmVcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLTQtYWN0aXZlLXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLTQtYWN0aXZlLWEpKVwiXG4gICAgfSxcbiAgICBcInN1cmZhY2VJbnZlcnNlXCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiBcInJnYmEodmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYiksIHZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1hKSlcIixcbiAgICAgIFwiaG92ZXJcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItcmdiKSwgdmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKSlcIixcbiAgICAgIFwiYWN0aXZlXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpLCB2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKSlcIlxuICAgIH0sXG4gICAgXCJpbmtJbnZlcnNlXCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiBcInJnYmEodmFyKC0tbXRlLWl0LWluay1pbnZlcnNlLWRlZmF1bHQtcmdiKSwgdmFyKC0tbXRlLWl0LWluay1pbnZlcnNlLWRlZmF1bHQtYSkpXCIsXG4gICAgICBcImhvdmVyXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtaW5rLWludmVyc2UtaG92ZXItcmdiKSwgdmFyKC0tbXRlLWl0LWluay1pbnZlcnNlLWhvdmVyLWEpKVwiLFxuICAgICAgXCJhY3RpdmVcIjogXCJyZ2JhKHZhcigtLW10ZS1pdC1pbmstaW52ZXJzZS1hY3RpdmUtcmdiKSwgdmFyKC0tbXRlLWl0LWluay1pbnZlcnNlLWFjdGl2ZS1hKSlcIlxuICAgIH0sXG4gICAgXCJsaW5rXCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiBcInJnYmEodmFyKC0tbXRlLWl0LWxpbmstZGVmYXVsdC1yZ2IpLCB2YXIoLS1tdGUtaXQtbGluay1kZWZhdWx0LWEpKVwiLFxuICAgICAgXCJ2aXNpdGVkXCI6IFwicmdiYSh2YXIoLS1tdGUtaXQtbGluay12aXNpdGVkLXJnYiksIHZhcigtLW10ZS1pdC1saW5rLXZpc2l0ZWQtYSkpXCJcbiAgICB9XG4gIH1cbn07IiwgIi8qKlxuICogRG8gbm90IGVkaXQgZGlyZWN0bHlcbiAqIEdlbmVyYXRlZCBvbiBUdWUsIDAyIEFwciAyMDI0IDE4OjQ2OjUxIEdNVFxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIm9wYWNpdHlcIjoge1xuICAgIFwieHhsXCI6IFwiLS1tdGUtb3BhY2l0eS14eGxcIixcbiAgICBcInhsXCI6IFwiLS1tdGUtb3BhY2l0eS14bFwiLFxuICAgIFwibGdcIjogXCItLW10ZS1vcGFjaXR5LWxnXCIsXG4gICAgXCJtZFwiOiBcIi0tbXRlLW9wYWNpdHktbWRcIixcbiAgICBcInNtXCI6IFwiLS1tdGUtb3BhY2l0eS1zbVwiLFxuICAgIFwieHNcIjogXCItLW10ZS1vcGFjaXR5LXhzXCIsXG4gICAgXCJ4eHNcIjogXCItLW10ZS1vcGFjaXR5LXh4c1wiLFxuICAgIFwieHh4c1wiOiBcIi0tbXRlLW9wYWNpdHkteHh4c1wiXG4gIH0sXG4gIFwiYm9yZGVyXCI6IHtcbiAgICBcInJhZGl1c1wiOiB7XG4gICAgICBcIm5vbmVcIjogXCItLW10ZS1ib3JkZXItcmFkaXVzLW5vbmVcIixcbiAgICAgIFwieHNcIjogXCItLW10ZS1ib3JkZXItcmFkaXVzLXhzXCIsXG4gICAgICBcInNtXCI6IFwiLS1tdGUtYm9yZGVyLXJhZGl1cy1zbVwiLFxuICAgICAgXCJtZFwiOiBcIi0tbXRlLWJvcmRlci1yYWRpdXMtbWRcIixcbiAgICAgIFwibGdcIjogXCItLW10ZS1ib3JkZXItcmFkaXVzLWxnXCIsXG4gICAgICBcInhsXCI6IFwiLS1tdGUtYm9yZGVyLXJhZGl1cy14bFwiLFxuICAgICAgXCJ4eGxcIjogXCItLW10ZS1ib3JkZXItcmFkaXVzLXh4bFwiLFxuICAgICAgXCJmdWxsXCI6IFwiLS1tdGUtYm9yZGVyLXJhZGl1cy1mdWxsXCJcbiAgICB9LFxuICAgIFwid2lkdGhcIjoge1xuICAgICAgXCJub25lXCI6IFwiLS1tdGUtYm9yZGVyLXdpZHRoLW5vbmVcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIi0tbXRlLWJvcmRlci13aWR0aC1kZWZhdWx0XCIsXG4gICAgICBcInNtXCI6IFwiLS1tdGUtYm9yZGVyLXdpZHRoLXNtXCIsXG4gICAgICBcIm1kXCI6IFwiLS1tdGUtYm9yZGVyLXdpZHRoLW1kXCIsXG4gICAgICBcImxnXCI6IFwiLS1tdGUtYm9yZGVyLXdpZHRoLWxnXCJcbiAgICB9XG4gIH0sXG4gIFwiZWxldmF0aW9uXCI6IHtcbiAgICBcImxldmVsXCI6IHtcbiAgICAgIFwiMFwiOiBcIi0tbXRlLWVsZXZhdGlvbi1sZXZlbC0wXCIsXG4gICAgICBcIjFcIjogXCItLW10ZS1lbGV2YXRpb24tbGV2ZWwtMVwiLFxuICAgICAgXCIyXCI6IFwiLS1tdGUtZWxldmF0aW9uLWxldmVsLTJcIixcbiAgICAgIFwiM1wiOiBcIi0tbXRlLWVsZXZhdGlvbi1sZXZlbC0zXCIsXG4gICAgICBcIjRcIjogXCItLW10ZS1lbGV2YXRpb24tbGV2ZWwtNFwiXG4gICAgfSxcbiAgICBcIm9wYWNpdHlcIjoge1xuICAgICAgXCIwXCI6IFwiLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktMFwiLFxuICAgICAgXCIxXCI6IFwiLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktMVwiLFxuICAgICAgXCIyXCI6IFwiLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktMlwiLFxuICAgICAgXCIzXCI6IFwiLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktM1wiLFxuICAgICAgXCI0XCI6IFwiLS1tdGUtZWxldmF0aW9uLW9wYWNpdHktNFwiXG4gICAgfSxcbiAgICBcInowXCI6IFwiLS1tdGUtZWxldmF0aW9uLXowXCIsXG4gICAgXCJ6MVwiOiBcIi0tbXRlLWVsZXZhdGlvbi16MVwiLFxuICAgIFwiejJcIjogXCItLW10ZS1lbGV2YXRpb24tejJcIixcbiAgICBcInozXCI6IFwiLS1tdGUtZWxldmF0aW9uLXozXCIsXG4gICAgXCJ6NFwiOiBcIi0tbXRlLWVsZXZhdGlvbi16NFwiXG4gIH0sXG4gIFwiekluZGV4XCI6IHtcbiAgICBcIjBcIjogXCItLW10ZS16LWluZGV4LTBcIixcbiAgICBcIjEwXCI6IFwiLS1tdGUtei1pbmRleC0xMFwiLFxuICAgIFwiMjBcIjogXCItLW10ZS16LWluZGV4LTIwXCIsXG4gICAgXCIzMFwiOiBcIi0tbXRlLXotaW5kZXgtMzBcIixcbiAgICBcIjQwXCI6IFwiLS1tdGUtei1pbmRleC00MFwiLFxuICAgIFwiNTBcIjogXCItLW10ZS16LWluZGV4LTUwXCIsXG4gICAgXCItMVwiOiBcIi0tbXRlLXotaW5kZXgtMVwiLFxuICAgIFwiYXV0b1wiOiBcIi0tbXRlLXotaW5kZXgtYXV0b1wiXG4gIH0sXG4gIFwiZ3JpZFwiOiB7XG4gICAgXCJicmVha3BvaW50XCI6IHtcbiAgICAgIFwieHNcIjogXCIwXCIsXG4gICAgICBcInNtXCI6IFwiNDgwcHhcIixcbiAgICAgIFwibWRcIjogXCI3NjhweFwiLFxuICAgICAgXCJsZ1wiOiBcIjEwMjRweFwiLFxuICAgICAgXCJ4bFwiOiBcIjEyODBweFwiLFxuICAgICAgXCJ4eGxcIjogXCIxNTM2cHhcIlxuICAgIH0sXG4gICAgXCJjb250YWluZXJNYXhXaWR0aFwiOiB7XG4gICAgICBcInNtXCI6IFwiNzY4cHhcIixcbiAgICAgIFwibWRcIjogXCIxMDI0cHhcIixcbiAgICAgIFwibGdcIjogXCIxMjgwcHhcIixcbiAgICAgIFwieGxcIjogXCIxNDQwcHhcIixcbiAgICAgIFwieHhsXCI6IFwiMTQ0MHB4XCJcbiAgICB9XG4gIH0sXG4gIFwic2l6ZVwiOiB7XG4gICAgXCJzY2FsZVwiOiB7XG4gICAgICBcInNtXCI6IFwiLS1tdGUtc2l6ZS1zY2FsZS1zbVwiLFxuICAgICAgXCJtZFwiOiBcIi0tbXRlLXNpemUtc2NhbGUtbWRcIixcbiAgICAgIFwibGdcIjogXCItLW10ZS1zaXplLXNjYWxlLWxnXCJcbiAgICB9LFxuICAgIFwiZGVuc2l0aWVzXCI6IFtcbiAgICAgIFwiY29tcGFjdFwiLFxuICAgICAgXCJjb21meVwiLFxuICAgICAgXCJyb29teVwiXG4gICAgXVxuICB9LFxuICBcInNwYWNlXCI6IHtcbiAgICBcIm5vbmVcIjogXCItLW10ZS1zcGFjZS1ub25lXCIsXG4gICAgXCJ4eHNcIjogXCItLW10ZS1zcGFjZS14eHNcIixcbiAgICBcInhzXCI6IFwiLS1tdGUtc3BhY2UteHNcIixcbiAgICBcInNtXCI6IFwiLS1tdGUtc3BhY2Utc21cIixcbiAgICBcIm1kXCI6IFwiLS1tdGUtc3BhY2UtbWRcIixcbiAgICBcImxnXCI6IFwiLS1tdGUtc3BhY2UtbGdcIixcbiAgICBcInhsXCI6IFwiLS1tdGUtc3BhY2UteGxcIixcbiAgICBcInh4bFwiOiBcIi0tbXRlLXNwYWNlLXh4bFwiLFxuICAgIFwieHh4bFwiOiBcIi0tbXRlLXNwYWNlLXh4eGxcIixcbiAgICBcImNvbXBhY3RcIjoge1xuICAgICAgXCJub25lXCI6IFwiLS1tdGUtc3BhY2UtY29tcGFjdC1ub25lXCIsXG4gICAgICBcInh4c1wiOiBcIi0tbXRlLXNwYWNlLWNvbXBhY3QteHhzXCIsXG4gICAgICBcInhzXCI6IFwiLS1tdGUtc3BhY2UtY29tcGFjdC14c1wiLFxuICAgICAgXCJzbVwiOiBcIi0tbXRlLXNwYWNlLWNvbXBhY3Qtc21cIixcbiAgICAgIFwibWRcIjogXCItLW10ZS1zcGFjZS1jb21wYWN0LW1kXCIsXG4gICAgICBcImxnXCI6IFwiLS1tdGUtc3BhY2UtY29tcGFjdC1sZ1wiLFxuICAgICAgXCJ4bFwiOiBcIi0tbXRlLXNwYWNlLWNvbXBhY3QteGxcIixcbiAgICAgIFwieHhsXCI6IFwiLS1tdGUtc3BhY2UtY29tcGFjdC14eGxcIixcbiAgICAgIFwieHh4bFwiOiBcIi0tbXRlLXNwYWNlLWNvbXBhY3QteHh4bFwiXG4gICAgfSxcbiAgICBcImNvbWZ5XCI6IHtcbiAgICAgIFwibm9uZVwiOiBcIi0tbXRlLXNwYWNlLWNvbWZ5LW5vbmVcIixcbiAgICAgIFwieHhzXCI6IFwiLS1tdGUtc3BhY2UtY29tZnkteHhzXCIsXG4gICAgICBcInhzXCI6IFwiLS1tdGUtc3BhY2UtY29tZnkteHNcIixcbiAgICAgIFwic21cIjogXCItLW10ZS1zcGFjZS1jb21meS1zbVwiLFxuICAgICAgXCJtZFwiOiBcIi0tbXRlLXNwYWNlLWNvbWZ5LW1kXCIsXG4gICAgICBcImxnXCI6IFwiLS1tdGUtc3BhY2UtY29tZnktbGdcIixcbiAgICAgIFwieGxcIjogXCItLW10ZS1zcGFjZS1jb21meS14bFwiLFxuICAgICAgXCJ4eGxcIjogXCItLW10ZS1zcGFjZS1jb21meS14eGxcIixcbiAgICAgIFwieHh4bFwiOiBcIi0tbXRlLXNwYWNlLWNvbWZ5LXh4eGxcIlxuICAgIH0sXG4gICAgXCJyb29teVwiOiB7XG4gICAgICBcIm5vbmVcIjogXCItLW10ZS1zcGFjZS1yb29teS1ub25lXCIsXG4gICAgICBcInh4c1wiOiBcIi0tbXRlLXNwYWNlLXJvb215LXh4c1wiLFxuICAgICAgXCJ4c1wiOiBcIi0tbXRlLXNwYWNlLXJvb215LXhzXCIsXG4gICAgICBcInNtXCI6IFwiLS1tdGUtc3BhY2Utcm9vbXktc21cIixcbiAgICAgIFwibWRcIjogXCItLW10ZS1zcGFjZS1yb29teS1tZFwiLFxuICAgICAgXCJsZ1wiOiBcIi0tbXRlLXNwYWNlLXJvb215LWxnXCIsXG4gICAgICBcInhsXCI6IFwiLS1tdGUtc3BhY2Utcm9vbXkteGxcIixcbiAgICAgIFwieHhsXCI6IFwiLS1tdGUtc3BhY2Utcm9vbXkteHhsXCIsXG4gICAgICBcInh4eGxcIjogXCItLW10ZS1zcGFjZS1yb29teS14eHhsXCJcbiAgICB9XG4gIH0sXG4gIFwiZm9udFwiOiB7XG4gICAgXCJiYXNlXCI6IFwiLS1tdGUtZm9udC1iYXNlXCIsXG4gICAgXCJmYW1pbHlcIjoge1xuICAgICAgXCJzYW5zXCI6IFwiLS1tdGUtZm9udC1mYW1pbHktc2Fuc1wiLFxuICAgICAgXCJzZXJpZlwiOiBcIi0tbXRlLWZvbnQtZmFtaWx5LXNlcmlmXCIsXG4gICAgICBcIm1vbm9cIjogXCItLW10ZS1mb250LWZhbWlseS1tb25vXCJcbiAgICB9LFxuICAgIFwid2VpZ2h0XCI6IHtcbiAgICAgIFwibGlnaHRcIjogXCItLW10ZS1mb250LXdlaWdodC1saWdodFwiLFxuICAgICAgXCJyZWd1bGFyXCI6IFwiLS1tdGUtZm9udC13ZWlnaHQtcmVndWxhclwiLFxuICAgICAgXCJtZWRpdW1cIjogXCItLW10ZS1mb250LXdlaWdodC1tZWRpdW1cIixcbiAgICAgIFwiYm9sZFwiOiBcIi0tbXRlLWZvbnQtd2VpZ2h0LWJvbGRcIlxuICAgIH0sXG4gICAgXCJyYXRpb1wiOiB7XG4gICAgICBcInNtXCI6IDAuOCxcbiAgICAgIFwibWRcIjogMSxcbiAgICAgIFwibGdcIjogMS4yXG4gICAgfSxcbiAgICBcInNldFwiOiB7XG4gICAgICBcImgxXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcIi0tbXRlLWZvbnQtc2V0LWgxLWZvbnQtc2l6ZVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1oMS1saW5lLWhlaWdodFwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1oMS1mb250LXdlaWdodFwiXG4gICAgICB9LFxuICAgICAgXCJoMlwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCItLW10ZS1mb250LXNldC1oMi1mb250LXNpemVcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtaDItbGluZS1oZWlnaHRcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtaDItZm9udC13ZWlnaHRcIlxuICAgICAgfSxcbiAgICAgIFwiaDNcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwiLS1tdGUtZm9udC1zZXQtaDMtZm9udC1zaXplXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWgzLWxpbmUtaGVpZ2h0XCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWgzLWZvbnQtd2VpZ2h0XCJcbiAgICAgIH0sXG4gICAgICBcImg0XCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcIi0tbXRlLWZvbnQtc2V0LWg0LWZvbnQtc2l6ZVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1oNC1saW5lLWhlaWdodFwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1oNC1mb250LXdlaWdodFwiXG4gICAgICB9LFxuICAgICAgXCJoNVwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCItLW10ZS1mb250LXNldC1oNS1mb250LXNpemVcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtaDUtbGluZS1oZWlnaHRcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtaDUtZm9udC13ZWlnaHRcIlxuICAgICAgfSxcbiAgICAgIFwiaDZcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwiLS1tdGUtZm9udC1zZXQtaDYtZm9udC1zaXplXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWg2LWxpbmUtaGVpZ2h0XCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWg2LWZvbnQtd2VpZ2h0XCJcbiAgICAgIH0sXG4gICAgICBcInN1YnRpdGxlXCI6IHtcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcIi0tbXRlLWZvbnQtc2V0LXN1YnRpdGxlLWZvbnQtc2l6ZVwiLFxuICAgICAgICBcImxpbmVIZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1zdWJ0aXRsZS1saW5lLWhlaWdodFwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1zdWJ0aXRsZS1mb250LXdlaWdodFwiXG4gICAgICB9LFxuICAgICAgXCJib2R5MVwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCItLW10ZS1mb250LXNldC1ib2R5MS1mb250LXNpemVcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtYm9keTEtbGluZS1oZWlnaHRcIixcbiAgICAgICAgXCJmb250V2VpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtYm9keTEtZm9udC13ZWlnaHRcIlxuICAgICAgfSxcbiAgICAgIFwiYm9keTJcIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwiLS1tdGUtZm9udC1zZXQtYm9keTItZm9udC1zaXplXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWJvZHkyLWxpbmUtaGVpZ2h0XCIsXG4gICAgICAgIFwiZm9udFdlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWJvZHkyLWZvbnQtd2VpZ2h0XCJcbiAgICAgIH0sXG4gICAgICBcImNhcHRpb25cIjoge1xuICAgICAgICBcImZvbnRTaXplXCI6IFwiLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1mb250LXNpemVcIixcbiAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IFwiLS1tdGUtZm9udC1zZXQtY2FwdGlvbi1saW5lLWhlaWdodFwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1jYXB0aW9uLWZvbnQtd2VpZ2h0XCJcbiAgICAgIH0sXG4gICAgICBcImJ1dHRvblwiOiB7XG4gICAgICAgIFwiZm9udFNpemVcIjogXCItLW10ZS1mb250LXNldC1idXR0b24tZm9udC1zaXplXCIsXG4gICAgICAgIFwibGluZUhlaWdodFwiOiBcIi0tbXRlLWZvbnQtc2V0LWJ1dHRvbi1saW5lLWhlaWdodFwiLFxuICAgICAgICBcImZvbnRXZWlnaHRcIjogXCItLW10ZS1mb250LXNldC1idXR0b24tZm9udC13ZWlnaHRcIlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJhbmltYXRpb25cIjoge1xuICAgIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IHtcbiAgICAgIFwiZXh0cmFTaG9ydFwiOiBcIjgwbXNcIixcbiAgICAgIFwic2hvcnRlclwiOiBcIjEyMG1zXCIsXG4gICAgICBcInNob3J0XCI6IFwiMjAwbXNcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIjMwMG1zXCIsXG4gICAgICBcImxvbmdcIjogXCI1MDBtc1wiXG4gICAgfSxcbiAgICBcInRyYW5zaXRpb25EdXJhdGlvbkpzXCI6IHtcbiAgICAgIFwiZXh0cmFTaG9ydFwiOiAwLjA4LFxuICAgICAgXCJzaG9ydGVyXCI6IDAuMTIsXG4gICAgICBcInNob3J0XCI6IDAuMixcbiAgICAgIFwiZGVmYXVsdFwiOiAwLjMsXG4gICAgICBcImxvbmdcIjogMC41XG4gICAgfSxcbiAgICBcInRpbWluZ0Z1bmN0aW9uXCI6IHtcbiAgICAgIFwiZGVjZWxlcmF0ZU91dFwiOiBcImN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpXCIsXG4gICAgICBcInN0YW5kYXJkXCI6IFwiY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKVwiLFxuICAgICAgXCJhY2NlbGVyYXRlSW5cIjogXCJjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKVwiLFxuICAgICAgXCJzaGFycFwiOiBcImN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSlcIixcbiAgICAgIFwiaW5PdXRcIjogXCJjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSlcIlxuICAgIH0sXG4gICAgXCJ0aW1pbmdGdW5jdGlvbkpzXCI6IHtcbiAgICAgIFwiZGVjZWxlcmF0ZU91dFwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDAuMixcbiAgICAgICAgMVxuICAgICAgXSxcbiAgICAgIFwic3RhbmRhcmRcIjogW1xuICAgICAgICAwLjQsXG4gICAgICAgIDAsXG4gICAgICAgIDAuMixcbiAgICAgICAgMVxuICAgICAgXSxcbiAgICAgIFwiYWNjZWxlcmF0ZUluXCI6IFtcbiAgICAgICAgMC40LFxuICAgICAgICAwLFxuICAgICAgICAxLFxuICAgICAgICAxXG4gICAgICBdLFxuICAgICAgXCJzaGFycFwiOiBbXG4gICAgICAgIDAuNCxcbiAgICAgICAgMCxcbiAgICAgICAgMC42LFxuICAgICAgICAxXG4gICAgICBdLFxuICAgICAgXCJpbk91dFwiOiBbXG4gICAgICAgIDAuMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDAuMjUsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH1cbn07IiwgImV4cG9ydCBkZWZhdWx0IHtcbiAgXCJjb2xvclwiOiB7XG4gICAgXCJibGFja1wiOiBcIi0tbXRlLWJsYWNrXCIsXG4gICAgXCJ3aGl0ZVwiOiBcIi0tbXRlLXdoaXRlXCIsXG4gICAgXCJsaWdodFwiOiBcIi0tbXRlLWxpZ2h0XCIsXG4gICAgXCJkYXJrXCI6IFwiLS1tdGUtZGFya1wiLFxuICAgIFwiZGFya2VyXCI6IFwiLS1tdGUtZGFya2VyXCIsXG4gICAgXCJmb2N1c1wiOiBcIi0tbXRlLWZvY3VzXCIsXG4gICAgXCJmb2N1c0xpZ2h0ZXJcIjogXCItLW10ZS1mb2N1cy1saWdodGVyXCIsXG4gICAgXCJmb2N1c0NvbnRyYXN0XCI6IFwiLS1tdGUtZm9jdXMtY29udHJhc3RcIixcbiAgICBcImdyZXkxXCI6IFwiLS1tdGUtZ3JleS0xXCIsXG4gICAgXCJncmV5MlwiOiBcIi0tbXRlLWdyZXktMlwiLFxuICAgIFwiZ3JleTNcIjogXCItLW10ZS1ncmV5LTNcIixcbiAgICBcImdyZXk0XCI6IFwiLS1tdGUtZ3JleS00XCIsXG4gICAgXCJncmV5NVwiOiBcIi0tbXRlLWdyZXktNVwiLFxuICAgIFwiZ3JleTZcIjogXCItLW10ZS1ncmV5LTZcIixcbiAgICBcImdyZXk3XCI6IFwiLS1tdGUtZ3JleS03XCIsXG4gICAgXCJncmV5OFwiOiBcIi0tbXRlLWdyZXktOFwiLFxuICAgIFwiZ3JleTlcIjogXCItLW10ZS1ncmV5LTlcIixcbiAgICBcImdyZXkxMFwiOiBcIi0tbXRlLWdyZXktMTBcIixcbiAgICBcInN1cmZhY2UxXCI6IFwiLS1tdGUtc3VyZmFjZS0xXCIsXG4gICAgXCJzdXJmYWNlMlwiOiBcIi0tbXRlLXN1cmZhY2UtMlwiLFxuICAgIFwic3VyZmFjZTNcIjogXCItLW10ZS1zdXJmYWNlLTNcIixcbiAgICBcInN1cmZhY2U0XCI6IFwiLS1tdGUtc3VyZmFjZS00XCIsXG4gICAgXCJzdXJmYWNlSW52ZXJzZVwiOiBcIi0tbXRlLXN1cmZhY2UtaW52ZXJzZVwiLFxuICAgIFwiaW5rMVwiOiBcIi0tbXRlLWluay0xXCIsXG4gICAgXCJpbmsyXCI6IFwiLS1tdGUtaW5rLTJcIixcbiAgICBcImluazNcIjogXCItLW10ZS1pbmstM1wiLFxuICAgIFwiaW5rNFwiOiBcIi0tbXRlLWluay00XCIsXG4gICAgXCJpbms1XCI6IFwiLS1tdGUtaW5rLTVcIixcbiAgICBcImlua0ludmVyc2VcIjogXCItLW10ZS1pbmstaW52ZXJzZVwiLFxuICAgIFwiYm9yZGVyMVwiOiBcIi0tbXRlLWJvcmRlci0xXCIsXG4gICAgXCJib3JkZXIyXCI6IFwiLS1tdGUtYm9yZGVyLTJcIixcbiAgICBcImJvcmRlcjNcIjogXCItLW10ZS1ib3JkZXItM1wiLFxuICAgIFwiYm9yZGVySW52ZXJzZVwiOiBcIi0tbXRlLWJvcmRlci1pbnZlcnNlXCIsXG4gICAgXCJkaXNhYmxlZDFcIjogXCItLW10ZS1kaXNhYmxlZC0xXCIsXG4gICAgXCJkaXNhYmxlZDJcIjogXCItLW10ZS1kaXNhYmxlZC0yXCIsXG4gICAgXCJkaXNhYmxlZDNcIjogXCItLW10ZS1kaXNhYmxlZC0zXCIsXG4gICAgXCJkaXNhYmxlZDRcIjogXCItLW10ZS1kaXNhYmxlZC00XCIsXG4gICAgXCJkaXNhYmxlZEludmVyc2UxXCI6IFwiLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0xXCIsXG4gICAgXCJkaXNhYmxlZEludmVyc2UyXCI6IFwiLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0yXCIsXG4gICAgXCJkaXNhYmxlZEludmVyc2UzXCI6IFwiLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0zXCIsXG4gICAgXCJyZWFkb25seTFcIjogXCItLW10ZS1yZWFkb25seS0xXCIsXG4gICAgXCJyZWFkb25seTJcIjogXCItLW10ZS1yZWFkb25seS0yXCIsXG4gICAgXCJyZWFkb25seTNcIjogXCItLW10ZS1yZWFkb25seS0zXCIsXG4gICAgXCJyZWFkb25seTRcIjogXCItLW10ZS1yZWFkb25seS00XCIsXG4gICAgXCJlbGV2YXRpb25CYXNlXCI6IFwiLS1tdGUtZWxldmF0aW9uLWJhc2VcIixcbiAgICBcImNvZGUxXCI6IFwiLS1tdGUtY29kZS0xXCIsXG4gICAgXCJjb2RlMlwiOiBcIi0tbXRlLWNvZGUtMlwiXG4gIH0sXG4gIFwicGFsZXR0ZVwiOiB7XG4gICAgXCJncmVlblwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtZ3JlZW4tbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtZ3JlZW4tbGlnaHRlci1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1ncmVlbi1saWdodFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtZ3JlZW4tbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1ncmVlbi1iYXNlXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1ncmVlbi1iYXNlLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtZ3JlZW4tZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtZ3JlZW4tZGFyay1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtZ3JlZW4tZGFya2VyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1ncmVlbi1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ0ZWFsXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS10ZWFsLWxpZ2h0ZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXRlYWwtbGlnaHRlci1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS10ZWFsLWxpZ2h0XCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS10ZWFsLWxpZ2h0LWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdGVhbC1iYXNlXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS10ZWFsLWJhc2UtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS10ZWFsLWRhcmtcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXRlYWwtZGFyay1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdGVhbC1kYXJrZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXRlYWwtZGFya2VyLWNvbnRyYXN0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY3lhblwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY3lhbi1saWdodGVyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jeWFuLWxpZ2h0ZXItY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY3lhbi1saWdodFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY3lhbi1saWdodC1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWN5YW4tYmFzZVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY3lhbi1iYXNlLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY3lhbi1kYXJrXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jeWFuLWRhcmstY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWN5YW4tZGFya2VyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jeWFuLWRhcmtlci1jb250cmFzdFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImJsdWVcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWJsdWUtbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtYmx1ZS1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWJsdWUtbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWJsdWUtbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1ibHVlLWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWJsdWUtYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWJsdWUtZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtYmx1ZS1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1ibHVlLWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtYmx1ZS1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJyeEJsdWVcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXJ4LWJsdWUtbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcngtYmx1ZS1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXJ4LWJsdWUtbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXJ4LWJsdWUtbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1yeC1ibHVlLWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXJ4LWJsdWUtYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXJ4LWJsdWUtZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcngtYmx1ZS1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1yeC1ibHVlLWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcngtYmx1ZS1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJwdXJwbGVcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXB1cnBsZS1saWdodGVyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1wdXJwbGUtbGlnaHRlci1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1wdXJwbGUtbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXB1cnBsZS1saWdodC1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXB1cnBsZS1iYXNlXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1wdXJwbGUtYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXB1cnBsZS1kYXJrXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1wdXJwbGUtZGFyay1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtcHVycGxlLWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcHVycGxlLWRhcmtlci1jb250cmFzdFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIm1hZ2VudGFcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLW1hZ2VudGEtbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtbWFnZW50YS1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLW1hZ2VudGEtbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLW1hZ2VudGEtbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1tYWdlbnRhLWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLW1hZ2VudGEtYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLW1hZ2VudGEtZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtbWFnZW50YS1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1tYWdlbnRhLWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtbWFnZW50YS1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJyZWRcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXJlZC1saWdodGVyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1yZWQtbGlnaHRlci1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1yZWQtbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXJlZC1saWdodC1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXJlZC1iYXNlXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1yZWQtYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXJlZC1kYXJrXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1yZWQtZGFyay1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtcmVkLWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtcmVkLWRhcmtlci1jb250cmFzdFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImhlYlJlZFwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtaGViLXJlZC1saWdodGVyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1oZWItcmVkLWxpZ2h0ZXItY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtaGViLXJlZC1saWdodFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtaGViLXJlZC1saWdodC1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWhlYi1yZWQtYmFzZVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtaGViLXJlZC1iYXNlLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtaGViLXJlZC1kYXJrXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1oZWItcmVkLWRhcmstY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWhlYi1yZWQtZGFya2VyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1oZWItcmVkLWRhcmtlci1jb250cmFzdFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIm9yYW5nZVwiOiB7XG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtb3JhbmdlLWxpZ2h0ZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLW9yYW5nZS1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLW9yYW5nZS1saWdodFwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtb3JhbmdlLWxpZ2h0LWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtb3JhbmdlLWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLW9yYW5nZS1iYXNlLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtb3JhbmdlLWRhcmtcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLW9yYW5nZS1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1vcmFuZ2UtZGFya2VyXCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1vcmFuZ2UtZGFya2VyLWNvbnRyYXN0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiYW1iZXJcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWFtYmVyLWxpZ2h0ZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWFtYmVyLWxpZ2h0ZXItY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtYW1iZXItbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWFtYmVyLWxpZ2h0LWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtYW1iZXItYmFzZVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtYW1iZXItYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWFtYmVyLWRhcmtcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWFtYmVyLWRhcmstY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWFtYmVyLWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtYW1iZXItZGFya2VyLWNvbnRyYXN0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwieWVsbG93XCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS15ZWxsb3ctbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUteWVsbG93LWxpZ2h0ZXItY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUteWVsbG93LWxpZ2h0XCIsXG4gICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS15ZWxsb3ctbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS15ZWxsb3ctYmFzZVwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUteWVsbG93LWJhc2UtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS15ZWxsb3ctZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUteWVsbG93LWRhcmstY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXllbGxvdy1kYXJrZXJcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXllbGxvdy1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJjb3Vwb25ZZWxsb3dcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvdXBvbi15ZWxsb3ctbGlnaHRlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY291cG9uLXllbGxvdy1saWdodGVyLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvdXBvbi15ZWxsb3ctbGlnaHRcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvdXBvbi15ZWxsb3ctbGlnaHQtY29udHJhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3Vwb24teWVsbG93LWJhc2VcIixcbiAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvdXBvbi15ZWxsb3ctYmFzZS1jb250cmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvdXBvbi15ZWxsb3ctZGFya1wiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY291cG9uLXllbGxvdy1kYXJrLWNvbnRyYXN0XCJcbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3Vwb24teWVsbG93LWRhcmtlclwiLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY291cG9uLXllbGxvdy1kYXJrZXItY29udHJhc3RcIlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJwZ1wiOiB7XG4gICAgXCJjb3JlXCI6IHtcbiAgICAgIFwicHJpbWFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtcHJpbWFyeS1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXByaW1hcnktbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXByaW1hcnktbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtcHJpbWFyeS1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtcHJpbWFyeS1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXByaW1hcnktYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtcHJpbWFyeS1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXByaW1hcnktZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1wcmltYXJ5LWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1wcmltYXJ5LWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlY29uZGFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtc2Vjb25kYXJ5LWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtc2Vjb25kYXJ5LWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1zZWNvbmRhcnktbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtc2Vjb25kYXJ5LWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1zZWNvbmRhcnktYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLWNvcmUtc2Vjb25kYXJ5LWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1zZWNvbmRhcnktZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGVydGlhcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXRlcnRpYXJ5LWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtdGVydGlhcnktbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXRlcnRpYXJ5LWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXRlcnRpYXJ5LWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS10ZXJ0aWFyeS1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLXRlcnRpYXJ5LWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLXRlcnRpYXJ5LWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtdGVydGlhcnktZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS10ZXJ0aWFyeS1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLWNvcmUtdGVydGlhcnktZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGFuZ2VyXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1kYW5nZXItbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1kYW5nZXItbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLWRhbmdlci1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1kYW5nZXItbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1jb3JlLWRhbmdlci1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLWRhbmdlci1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1kYW5nZXItZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtY29yZS1kYW5nZXItZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtY29yZS1kYW5nZXItZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1jb3JlLWRhbmdlci1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInN0YXR1c1wiOiB7XG4gICAgICBcInByaW1hcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtcHJpbWFyeS1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtcHJpbWFyeS1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1wcmltYXJ5LWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtcHJpbWFyeS1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1wcmltYXJ5LWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1wcmltYXJ5LWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtcHJpbWFyeS1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtcHJpbWFyeS1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtcHJpbWFyeS1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1wcmltYXJ5LWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlY29uZGFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1zZWNvbmRhcnktbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1zZWNvbmRhcnktbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1zZWNvbmRhcnktbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1zZWNvbmRhcnktYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1zZWNvbmRhcnktZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtc2Vjb25kYXJ5LWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXNlY29uZGFyeS1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0ZXJ0aWFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtdGVydGlhcnktbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtdGVydGlhcnktbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtdGVydGlhcnktYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy10ZXJ0aWFyeS1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtdGVydGlhcnktZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLXRlcnRpYXJ5LWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInN1Y2Nlc3NcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtc3VjY2Vzcy1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtc3VjY2Vzcy1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1zdWNjZXNzLWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtc3VjY2Vzcy1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1zdWNjZXNzLWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1zdWNjZXNzLWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtc3VjY2Vzcy1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtc3VjY2Vzcy1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtc3VjY2Vzcy1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1zdWNjZXNzLWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndhcm5pbmdcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtd2FybmluZy1saWdodGVyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtd2FybmluZy1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy13YXJuaW5nLWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtd2FybmluZy1saWdodC1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy13YXJuaW5nLWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy13YXJuaW5nLWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtd2FybmluZy1kYXJrLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS1zdGF0dXMtd2FybmluZy1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtd2FybmluZy1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy13YXJuaW5nLWRhcmtlci1jLXJnYlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRhbmdlclwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLWRhbmdlci1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1kYW5nZXItbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtZGFuZ2VyLWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXN0YXR1cy1kYW5nZXItYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXN0YXR1cy1kYW5nZXItZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLWRhbmdlci1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS1zdGF0dXMtZGFuZ2VyLWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtc3RhdHVzLWRhbmdlci1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInZpelwiOiB7XG4gICAgICBcIm9uZVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1vbmUtbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LW9uZS1saWdodGVyLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1vbmUtbGlnaHQtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1vbmUtbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotb25lLWJhc2UtcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1vbmUtYmFzZS1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei1vbmUtZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LW9uZS1kYXJrLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotb25lLWRhcmtlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LW9uZS1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0d29cIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotdHdvLWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei10d28tbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotdHdvLWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotdHdvLWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXR3by1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotdHdvLWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotdHdvLWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei10d28tZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXR3by1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei10d28tZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGhyZWVcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotdGhyZWUtbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXRocmVlLWxpZ2h0ZXItYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXRocmVlLWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotdGhyZWUtbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotdGhyZWUtYmFzZS1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXRocmVlLWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotdGhyZWUtZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LXRocmVlLWRhcmstYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIi0tbXRlLXZpei10aHJlZS1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei10aHJlZS1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJmb3VyXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LWZvdXItbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LWZvdXItbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotZm91ci1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LWZvdXItbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotZm91ci1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotZm91ci1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LWZvdXItZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LWZvdXItZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LWZvdXItZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotZm91ci1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJmaXZlXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LWZpdmUtbGlnaHRlci1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LWZpdmUtbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotZml2ZS1saWdodC1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LWZpdmUtbGlnaHQtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotZml2ZS1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotZml2ZS1iYXNlLWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LWZpdmUtZGFyay1yZ2JcIixcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFwiLS1tdGUtdml6LWZpdmUtZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LWZpdmUtZGFya2VyLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotZml2ZS1kYXJrZXItYy1yZ2JcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzaXhcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotc2l4LWxpZ2h0ZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1zaXgtbGlnaHRlci1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotc2l4LWxpZ2h0LXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotc2l4LWxpZ2h0LWMtcmdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXNpeC1iYXNlLXJnYlwiLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogXCItLW10ZS12aXotc2l4LWJhc2UtYy1yZ2JcIlxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCItLW10ZS12aXotc2l4LWRhcmstcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1zaXgtZGFyay1jLXJnYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiLS1tdGUtdml6LXNpeC1kYXJrZXItcmdiXCIsXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBcIi0tbXRlLXZpei1zaXgtZGFya2VyLWMtcmdiXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJzdGF0ZVRva2VuXCI6IHtcbiAgICBcInN1cmZhY2UxXCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0xLWRlZmF1bHQtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMS1kZWZhdWx0LWFcIlxuICAgICAgfSxcbiAgICAgIFwiaG92ZXJcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMS1ob3Zlci1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLWFcIlxuICAgICAgfSxcbiAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLWFcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzdXJmYWNlMlwiOiB7XG4gICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMi1kZWZhdWx0LXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1hXCJcbiAgICAgIH0sXG4gICAgICBcImhvdmVyXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLTItaG92ZXItcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMi1ob3Zlci1hXCJcbiAgICAgIH0sXG4gICAgICBcImFjdGl2ZVwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0yLWFjdGl2ZS1hXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwic3VyZmFjZTNcIjoge1xuICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLTMtZGVmYXVsdC1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0zLWRlZmF1bHQtYVwiXG4gICAgICB9LFxuICAgICAgXCJob3ZlclwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLTMtaG92ZXItYVwiXG4gICAgICB9LFxuICAgICAgXCJhY3RpdmVcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMy1hY3RpdmUtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtMy1hY3RpdmUtYVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInN1cmZhY2U0XCI6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS00LWRlZmF1bHQtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtNC1kZWZhdWx0LWFcIlxuICAgICAgfSxcbiAgICAgIFwiaG92ZXJcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtNC1ob3Zlci1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS00LWhvdmVyLWFcIlxuICAgICAgfSxcbiAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLTQtYWN0aXZlLXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLTQtYWN0aXZlLWFcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzdXJmYWNlSW52ZXJzZVwiOiB7XG4gICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtZGVmYXVsdC1hXCJcbiAgICAgIH0sXG4gICAgICBcImhvdmVyXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1zdXJmYWNlLWludmVyc2UtaG92ZXItcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hXCJcbiAgICAgIH0sXG4gICAgICBcImFjdGl2ZVwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiaW5rSW52ZXJzZVwiOiB7XG4gICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LWluay1pbnZlcnNlLWRlZmF1bHQtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LWluay1pbnZlcnNlLWRlZmF1bHQtYVwiXG4gICAgICB9LFxuICAgICAgXCJob3ZlclwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtaW5rLWludmVyc2UtaG92ZXItcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LWluay1pbnZlcnNlLWhvdmVyLWFcIlxuICAgICAgfSxcbiAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgXCJyZ2JcIjogXCItLW10ZS1pdC1pbmstaW52ZXJzZS1hY3RpdmUtcmdiXCIsXG4gICAgICAgIFwiYVwiOiBcIi0tbXRlLWl0LWluay1pbnZlcnNlLWFjdGl2ZS1hXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwibGlua1wiOiB7XG4gICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICBcInJnYlwiOiBcIi0tbXRlLWl0LWxpbmstZGVmYXVsdC1yZ2JcIixcbiAgICAgICAgXCJhXCI6IFwiLS1tdGUtaXQtbGluay1kZWZhdWx0LWFcIlxuICAgICAgfSxcbiAgICAgIFwidmlzaXRlZFwiOiB7XG4gICAgICAgIFwicmdiXCI6IFwiLS1tdGUtaXQtbGluay12aXNpdGVkLXJnYlwiLFxuICAgICAgICBcImFcIjogXCItLW10ZS1pdC1saW5rLXZpc2l0ZWQtYVwiXG4gICAgICB9XG4gICAgfVxuICB9XG59OyIsICJleHBvcnQgZGVmYXVsdCB7XG4gIFwiY29sb3JcIjoge1xuICAgIFwiYmxhY2tcIjogW1xuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcIndoaXRlXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJsaWdodFwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGFya1wiOiBbXG4gICAgICAzMixcbiAgICAgIDMzLFxuICAgICAgMzQsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGFya2VyXCI6IFtcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJmb2N1c1wiOiBbXG4gICAgICAwLFxuICAgICAgMTE5LFxuICAgICAgMjA0LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImZvY3VzTGlnaHRlclwiOiBbXG4gICAgICAyNTEsXG4gICAgICAyNTMsXG4gICAgICAyNTQsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZm9jdXNDb250cmFzdFwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTFcIjogW1xuICAgICAgMjUwLFxuICAgICAgMjUwLFxuICAgICAgMjUwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXkyXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDI0MixcbiAgICAgIDI0MixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5M1wiOiBbXG4gICAgICAyMzcsXG4gICAgICAyMzcsXG4gICAgICAyMzcsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTRcIjogW1xuICAgICAgMjE2LFxuICAgICAgMjE3LFxuICAgICAgMjE3LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXk1XCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDE5OSxcbiAgICAgIDE5OSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5NlwiOiBbXG4gICAgICAxNzQsXG4gICAgICAxNzYsXG4gICAgICAxNzgsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTdcIjogW1xuICAgICAgMTQzLFxuICAgICAgMTQ1LFxuICAgICAgMTQ4LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXk4XCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDExNyxcbiAgICAgIDEyMCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5OVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDgyLFxuICAgICAgODMsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTEwXCI6IFtcbiAgICAgIDUwLFxuICAgICAgNTEsXG4gICAgICA1MixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJzdXJmYWNlMVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAyNTAsXG4gICAgICAyNTAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwic3VyZmFjZTJcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInN1cmZhY2UzXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDI0MixcbiAgICAgIDI0MixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJzdXJmYWNlNFwiOiBbXG4gICAgICA1MCxcbiAgICAgIDUxLFxuICAgICAgNTIsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwic3VyZmFjZUludmVyc2VcIjogW1xuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImluazFcIjogW1xuICAgICAgNTAsXG4gICAgICA1MSxcbiAgICAgIDUyLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImluazJcIjogW1xuICAgICAgMTE1LFxuICAgICAgMTE3LFxuICAgICAgMTIwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImluazNcIjogW1xuICAgICAgMTQzLFxuICAgICAgMTQ1LFxuICAgICAgMTQ4LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImluazRcIjogW1xuICAgICAgMjUwLFxuICAgICAgMjUwLFxuICAgICAgMjUwLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImluazVcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImlua0ludmVyc2VcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImJvcmRlcjFcIjogW1xuICAgICAgMjM3LFxuICAgICAgMjM3LFxuICAgICAgMjM3LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImJvcmRlcjJcIjogW1xuICAgICAgMjE2LFxuICAgICAgMjE3LFxuICAgICAgMjE3LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImJvcmRlcjNcIjogW1xuICAgICAgMTc0LFxuICAgICAgMTc2LFxuICAgICAgMTc4LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImJvcmRlckludmVyc2VcIjogW1xuICAgICAgNTAsXG4gICAgICA1MSxcbiAgICAgIDUyLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRpc2FibGVkMVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAyMzksXG4gICAgICAyMzksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWQyXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDIwOCxcbiAgICAgIDIwNyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZDNcIjogW1xuICAgICAgMTYzLFxuICAgICAgMTU2LFxuICAgICAgMTUzLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRpc2FibGVkNFwiOiBbXG4gICAgICA5MSxcbiAgICAgIDg1LFxuICAgICAgODIsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWRJbnZlcnNlMVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDQwLFxuICAgICAgMzksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWRJbnZlcnNlMlwiOiBbXG4gICAgICA5NCxcbiAgICAgIDg3LFxuICAgICAgODUsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWRJbnZlcnNlM1wiOiBbXG4gICAgICAxNjgsXG4gICAgICAxNjEsXG4gICAgICAxNTksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwicmVhZG9ubHkxXCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDI1MCxcbiAgICAgIDI1MCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJyZWFkb25seTJcIjogW1xuICAgICAgMjE2LFxuICAgICAgMjE3LFxuICAgICAgMjE3LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInJlYWRvbmx5M1wiOiBbXG4gICAgICAxNzQsXG4gICAgICAxNzYsXG4gICAgICAxNzgsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwicmVhZG9ubHk0XCI6IFtcbiAgICAgIDgwLFxuICAgICAgODIsXG4gICAgICA4MyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJlbGV2YXRpb25CYXNlXCI6IFtcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJjb2RlMVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAyMjIsXG4gICAgICAyMjIsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiY29kZTJcIjogW1xuICAgICAgNjEsXG4gICAgICA2MSxcbiAgICAgIDYxLFxuICAgICAgMjU1XG4gICAgXVxuICB9LFxuICBcInBhbGV0dGVcIjoge1xuICAgIFwiZ3JlZW5cIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInRlYWxcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDEwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJjeWFuXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJibHVlXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJyeEJsdWVcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwicHVycGxlXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJtYWdlbnRhXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJyZWRcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJoZWJSZWRcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJvcmFuZ2VcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcImFtYmVyXCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ5ZWxsb3dcIjoge1xuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY291cG9uWWVsbG93XCI6IHtcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwicGdcIjoge1xuICAgIFwiY29yZVwiOiB7XG4gICAgICBcInByaW1hcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjQ4LFxuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA1MSxcbiAgICAgICAgICAgIDE1MixcbiAgICAgICAgICAgIDIyNSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMTE5LFxuICAgICAgICAgICAgMjA0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA5MyxcbiAgICAgICAgICAgIDE2OCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA2MSxcbiAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlY29uZGFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDIsXG4gICAgICAgICAgICAyNDgsXG4gICAgICAgICAgICAyNTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDUxLFxuICAgICAgICAgICAgMTUyLFxuICAgICAgICAgICAgMjI1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxMTksXG4gICAgICAgICAgICAyMDQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDkzLFxuICAgICAgICAgICAgMTY4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDYxLFxuICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGVydGlhcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDgsXG4gICAgICAgICAgICAyMjIsXG4gICAgICAgICAgICAxMTksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUxLFxuICAgICAgICAgICAgMjAyLFxuICAgICAgICAgICAgMjQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjI0LFxuICAgICAgICAgICAgMTc2LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEzMyxcbiAgICAgICAgICAgIDEwMixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkYW5nZXJcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUxLFxuICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgMjQ1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMTcsXG4gICAgICAgICAgICA3NCxcbiAgICAgICAgICAgIDkxLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE5MyxcbiAgICAgICAgICAgIDMxLFxuICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTU3LFxuICAgICAgICAgICAgMjcsXG4gICAgICAgICAgICA0MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDExMCxcbiAgICAgICAgICAgIDE3LFxuICAgICAgICAgICAgMjgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInN0YXR1c1wiOiB7XG4gICAgICBcInByaW1hcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjQ4LFxuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA1MSxcbiAgICAgICAgICAgIDE1MixcbiAgICAgICAgICAgIDIyNSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMTE5LFxuICAgICAgICAgICAgMjA0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA5MyxcbiAgICAgICAgICAgIDE2OCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA2MSxcbiAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlY29uZGFyeVwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDIsXG4gICAgICAgICAgICAyNDgsXG4gICAgICAgICAgICAyNTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDUxLFxuICAgICAgICAgICAgMTUyLFxuICAgICAgICAgICAgMjI1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxMTksXG4gICAgICAgICAgICAyMDQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDkzLFxuICAgICAgICAgICAgMTY4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDYxLFxuICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGVydGlhcnlcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDgsXG4gICAgICAgICAgICAyMjIsXG4gICAgICAgICAgICAxMTksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUxLFxuICAgICAgICAgICAgMjAyLFxuICAgICAgICAgICAgMjQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjI0LFxuICAgICAgICAgICAgMTc2LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEzMyxcbiAgICAgICAgICAgIDEwMixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzdWNjZXNzXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgIDI1MSxcbiAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICAxNzQsXG4gICAgICAgICAgICA1MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMTM4LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMTA3LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA3MSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3YXJuaW5nXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MyxcbiAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQ3LFxuICAgICAgICAgICAgMjAxLFxuICAgICAgICAgICAgOTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjMwLFxuICAgICAgICAgICAgMTY1LFxuICAgICAgICAgICAgMTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjAwLFxuICAgICAgICAgICAgMTM4LFxuICAgICAgICAgICAgNCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE0MyxcbiAgICAgICAgICAgIDk1LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRhbmdlclwiOiB7XG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTEsXG4gICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAyNDUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIxNyxcbiAgICAgICAgICAgIDc0LFxuICAgICAgICAgICAgOTEsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTkzLFxuICAgICAgICAgICAgMzEsXG4gICAgICAgICAgICA1MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNTcsXG4gICAgICAgICAgICAyNyxcbiAgICAgICAgICAgIDQyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTEwLFxuICAgICAgICAgICAgMTcsXG4gICAgICAgICAgICAyOCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwidml6XCI6IHtcbiAgICAgIFwib25lXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0MyxcbiAgICAgICAgICAgIDI0OSxcbiAgICAgICAgICAgIDI1MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNDksXG4gICAgICAgICAgICAxNjMsXG4gICAgICAgICAgICAyMTEsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDEyNSxcbiAgICAgICAgICAgIDE3OSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgOTksXG4gICAgICAgICAgICAxNDgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgNzUsXG4gICAgICAgICAgICAxMTIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0d29cIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDcsXG4gICAgICAgICAgICAyMDEsXG4gICAgICAgICAgICA5NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMzAsXG4gICAgICAgICAgICAxNjUsXG4gICAgICAgICAgICAxNSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICAxMzgsXG4gICAgICAgICAgICA0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTQzLFxuICAgICAgICAgICAgOTUsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGhyZWVcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUyLFxuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjQ4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMzIsXG4gICAgICAgICAgICAxMjUsXG4gICAgICAgICAgICAxODAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjEzLFxuICAgICAgICAgICAgNTIsXG4gICAgICAgICAgICAxMzAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTg0LFxuICAgICAgICAgICAgMjAsXG4gICAgICAgICAgICA5OSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEyMCxcbiAgICAgICAgICAgIDcsXG4gICAgICAgICAgICA2MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImZvdXJcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjQ5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA3NCxcbiAgICAgICAgICAgIDE4MSxcbiAgICAgICAgICAgIDE0MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA0MyxcbiAgICAgICAgICAgIDEzMyxcbiAgICAgICAgICAgIDk4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIxLFxuICAgICAgICAgICAgMTExLFxuICAgICAgICAgICAgNzcsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgIDkyLFxuICAgICAgICAgICAgNjIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJmaXZlXCI6IHtcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MyxcbiAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQ3LFxuICAgICAgICAgICAgMTMzLFxuICAgICAgICAgICAgOTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjM5LFxuICAgICAgICAgICAgNzksXG4gICAgICAgICAgICAyNixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyMDYsXG4gICAgICAgICAgICA1OCxcbiAgICAgICAgICAgIDksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMzQsXG4gICAgICAgICAgICA0MCxcbiAgICAgICAgICAgIDksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzaXhcIjoge1xuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQ2LFxuICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNDUsXG4gICAgICAgICAgICAxMjcsXG4gICAgICAgICAgICAxOTksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgNzUsXG4gICAgICAgICAgICAxNzUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNzYsXG4gICAgICAgICAgICA1OCxcbiAgICAgICAgICAgIDEzMSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDQ0LFxuICAgICAgICAgICAgMzEsXG4gICAgICAgICAgICA4NixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07IiwgImV4cG9ydCBkZWZhdWx0IHtcbiAgXCJjb2xvclwiOiB7XG4gICAgXCJibGFja1wiOiBbXG4gICAgICAxMixcbiAgICAgIDEzLFxuICAgICAgMTMsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwid2hpdGVcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImxpZ2h0XCI6IFtcbiAgICAgIDI5LFxuICAgICAgMzAsXG4gICAgICAzMixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkYXJrXCI6IFtcbiAgICAgIDI0NyxcbiAgICAgIDI0NyxcbiAgICAgIDI0OCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkYXJrZXJcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImZvY3VzXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMTQwLFxuICAgICAgMjIzLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImZvY3VzTGlnaHRlclwiOiBbXG4gICAgICAxMCxcbiAgICAgIDE5LFxuICAgICAgMzYsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZm9jdXNDb250cmFzdFwiOiBbXG4gICAgICAxMixcbiAgICAgIDEzLFxuICAgICAgMTMsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTFcIjogW1xuICAgICAgNDMsXG4gICAgICA0NSxcbiAgICAgIDQ5LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXkyXCI6IFtcbiAgICAgIDcxLFxuICAgICAgNzUsXG4gICAgICA4MixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5M1wiOiBbXG4gICAgICAxMDQsXG4gICAgICAxMTAsXG4gICAgICAxMjAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTRcIjogW1xuICAgICAgMTM1LFxuICAgICAgMTQwLFxuICAgICAgMTUxLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXk1XCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDE3MSxcbiAgICAgIDE3OSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5NlwiOiBbXG4gICAgICAxOTIsXG4gICAgICAxOTUsXG4gICAgICAyMDAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTdcIjogW1xuICAgICAgMjExLFxuICAgICAgMjEzLFxuICAgICAgMjE3LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImdyZXk4XCI6IFtcbiAgICAgIDIzMyxcbiAgICAgIDIzNCxcbiAgICAgIDIzNixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJncmV5OVwiOiBbXG4gICAgICAyMzksXG4gICAgICAyMzksXG4gICAgICAyNDEsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZ3JleTEwXCI6IFtcbiAgICAgIDI0NyxcbiAgICAgIDI0NyxcbiAgICAgIDI0OCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJzdXJmYWNlMVwiOiBbXG4gICAgICA5LFxuICAgICAgMTAsXG4gICAgICAxMixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJzdXJmYWNlMlwiOiBbXG4gICAgICAyMCxcbiAgICAgIDIyLFxuICAgICAgMjYsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwic3VyZmFjZTNcIjogW1xuICAgICAgMzAsXG4gICAgICAzNCxcbiAgICAgIDQxLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInN1cmZhY2U0XCI6IFtcbiAgICAgIDQzLFxuICAgICAgNDgsXG4gICAgICA1OSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJzdXJmYWNlSW52ZXJzZVwiOiBbXG4gICAgICAxMixcbiAgICAgIDEzLFxuICAgICAgMTMsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rMVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rMlwiOiBbXG4gICAgICAxOTIsXG4gICAgICAxOTUsXG4gICAgICAyMDAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rM1wiOiBbXG4gICAgICAxMzUsXG4gICAgICAxNDAsXG4gICAgICAxNTEsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rNFwiOiBbXG4gICAgICAxMDQsXG4gICAgICAxMTAsXG4gICAgICAxMjAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rNVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDQ1LFxuICAgICAgNDksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiaW5rSW52ZXJzZVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTUsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiYm9yZGVyMVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDQ1LFxuICAgICAgNDksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiYm9yZGVyMlwiOiBbXG4gICAgICA3MSxcbiAgICAgIDc1LFxuICAgICAgODIsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiYm9yZGVyM1wiOiBbXG4gICAgICAxMDQsXG4gICAgICAxMTAsXG4gICAgICAxMjAsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiYm9yZGVySW52ZXJzZVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDQ1LFxuICAgICAgNDksXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWQxXCI6IFtcbiAgICAgIDkwLFxuICAgICAgODUsXG4gICAgICA4MyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZDJcIjogW1xuICAgICAgMTYyLFxuICAgICAgMTU2LFxuICAgICAgMTU0LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImRpc2FibGVkM1wiOiBbXG4gICAgICAyMTEsXG4gICAgICAyMDgsXG4gICAgICAyMDcsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwiZGlzYWJsZWQ0XCI6IFtcbiAgICAgIDI0MCxcbiAgICAgIDIzOSxcbiAgICAgIDIzOSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZEludmVyc2UxXCI6IFtcbiAgICAgIDQyLFxuICAgICAgNDAsXG4gICAgICAzOSxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZEludmVyc2UyXCI6IFtcbiAgICAgIDkzLFxuICAgICAgODcsXG4gICAgICA4NixcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJkaXNhYmxlZEludmVyc2UzXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDE2MSxcbiAgICAgIDE2MCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJyZWFkb25seTFcIjogW1xuICAgICAgNDMsXG4gICAgICA0NSxcbiAgICAgIDQ5LFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcInJlYWRvbmx5MlwiOiBbXG4gICAgICAxMzUsXG4gICAgICAxNDAsXG4gICAgICAxNTEsXG4gICAgICAyNTVcbiAgICBdLFxuICAgIFwicmVhZG9ubHkzXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDE5NSxcbiAgICAgIDIwMCxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJyZWFkb25seTRcIjogW1xuICAgICAgMjM5LFxuICAgICAgMjM5LFxuICAgICAgMjQxLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImVsZXZhdGlvbkJhc2VcIjogW1xuICAgICAgMTIsXG4gICAgICAxMyxcbiAgICAgIDEzLFxuICAgICAgMjU1XG4gICAgXSxcbiAgICBcImNvZGUxXCI6IFtcbiAgICAgIDMsXG4gICAgICAzLFxuICAgICAgMyxcbiAgICAgIDI1NVxuICAgIF0sXG4gICAgXCJjb2RlMlwiOiBbXG4gICAgICAyMjQsXG4gICAgICAyMjQsXG4gICAgICAyMjQsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicGFsZXR0ZVwiOiB7XG4gICAgXCJncmVlblwiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwidGVhbFwiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJjeWFuXCI6IHtcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDExLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJibHVlXCI6IHtcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInJ4Qmx1ZVwiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwicHVycGxlXCI6IHtcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDkwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwibWFnZW50YVwiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInJlZFwiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJoZWJSZWRcIjoge1xuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJvcmFuZ2VcIjoge1xuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJhbWJlclwiOiB7XG4gICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwieWVsbG93XCI6IHtcbiAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJjb3Vwb25ZZWxsb3dcIjoge1xuICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRhcmtcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhc2VcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1NVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJwZ1wiOiB7XG4gICAgXCJjb3JlXCI6IHtcbiAgICAgIFwicHJpbWFyeVwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE3OCxcbiAgICAgICAgICAgIDIxOCxcbiAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA3OSxcbiAgICAgICAgICAgIDE2NixcbiAgICAgICAgICAgIDIzOCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNSxcbiAgICAgICAgICAgIDEzOCxcbiAgICAgICAgICAgIDIzMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjYsXG4gICAgICAgICAgICA4MyxcbiAgICAgICAgICAgIDEzNyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDMwLFxuICAgICAgICAgICAgNDgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzZWNvbmRhcnlcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNzgsXG4gICAgICAgICAgICAyMTgsXG4gICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNzksXG4gICAgICAgICAgICAxNjYsXG4gICAgICAgICAgICAyMzgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUsXG4gICAgICAgICAgICAxMzgsXG4gICAgICAgICAgICAyMzAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI2LFxuICAgICAgICAgICAgODMsXG4gICAgICAgICAgICAxMzcsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAzMCxcbiAgICAgICAgICAgIDQ4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGVydGlhcnlcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyMzcsXG4gICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjU0LFxuICAgICAgICAgICAgMjI3LFxuICAgICAgICAgICAgMTE5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MSxcbiAgICAgICAgICAgIDIwMixcbiAgICAgICAgICAgIDI0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxOTMsXG4gICAgICAgICAgICAxNTUsXG4gICAgICAgICAgICAxNixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA0NixcbiAgICAgICAgICAgIDM4LFxuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkYW5nZXJcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTQsXG4gICAgICAgICAgICAxOTUsXG4gICAgICAgICAgICAyMDcsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgMTAyLFxuICAgICAgICAgICAgMTE5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0MyxcbiAgICAgICAgICAgIDcwLFxuICAgICAgICAgICAgOTEsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE0MCxcbiAgICAgICAgICAgIDM4LFxuICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNDksXG4gICAgICAgICAgICAxNyxcbiAgICAgICAgICAgIDIxLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzdGF0dXNcIjoge1xuICAgICAgXCJwcmltYXJ5XCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTc4LFxuICAgICAgICAgICAgMjE4LFxuICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDc5LFxuICAgICAgICAgICAgMTY2LFxuICAgICAgICAgICAgMjM4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1LFxuICAgICAgICAgICAgMTM4LFxuICAgICAgICAgICAgMjMwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNixcbiAgICAgICAgICAgIDgzLFxuICAgICAgICAgICAgMTM3LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMzAsXG4gICAgICAgICAgICA0OCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlY29uZGFyeVwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE3OCxcbiAgICAgICAgICAgIDIxOCxcbiAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA3OSxcbiAgICAgICAgICAgIDE2NixcbiAgICAgICAgICAgIDIzOCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNSxcbiAgICAgICAgICAgIDEzOCxcbiAgICAgICAgICAgIDIzMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjYsXG4gICAgICAgICAgICA4MyxcbiAgICAgICAgICAgIDEzNyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDMwLFxuICAgICAgICAgICAgNDgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0ZXJ0aWFyeVwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDIzNyxcbiAgICAgICAgICAgIDE3OSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTQsXG4gICAgICAgICAgICAyMjcsXG4gICAgICAgICAgICAxMTksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUxLFxuICAgICAgICAgICAgMjAyLFxuICAgICAgICAgICAgMjQsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE5MyxcbiAgICAgICAgICAgIDE1NSxcbiAgICAgICAgICAgIDE2LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDQ2LFxuICAgICAgICAgICAgMzgsXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInN1Y2Nlc3NcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxOTIsXG4gICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAxOTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNDAsXG4gICAgICAgICAgICAxOTUsXG4gICAgICAgICAgICAzNCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMTU2LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICA5NyxcbiAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMzgsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndhcm5pbmdcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyMzUsXG4gICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgMjA3LFxuICAgICAgICAgICAgOTgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQ1LFxuICAgICAgICAgICAgMTc5LFxuICAgICAgICAgICAgMjUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE5NCxcbiAgICAgICAgICAgIDEzOSxcbiAgICAgICAgICAgIDIwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDQ2LFxuICAgICAgICAgICAgMzQsXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRhbmdlclwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1NCxcbiAgICAgICAgICAgIDE5NSxcbiAgICAgICAgICAgIDIwNyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAxMDIsXG4gICAgICAgICAgICAxMTksXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjQzLFxuICAgICAgICAgICAgNzAsXG4gICAgICAgICAgICA5MSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTQwLFxuICAgICAgICAgICAgMzgsXG4gICAgICAgICAgICA1MCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA0OSxcbiAgICAgICAgICAgIDE3LFxuICAgICAgICAgICAgMjEsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInZpelwiOiB7XG4gICAgICBcIm9uZVwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE3OSxcbiAgICAgICAgICAgIDIyOCxcbiAgICAgICAgICAgIDI0OSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA1OSxcbiAgICAgICAgICAgIDE3NixcbiAgICAgICAgICAgIDIyNyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMTQzLFxuICAgICAgICAgICAgMjA0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxMSxcbiAgICAgICAgICAgIDkyLFxuICAgICAgICAgICAgMTMyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDksXG4gICAgICAgICAgICAzMSxcbiAgICAgICAgICAgIDQyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidHdvXCI6IHtcbiAgICAgICAgXCJkYXJrZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjM1LFxuICAgICAgICAgICAgMTc5LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYXJrXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MyxcbiAgICAgICAgICAgIDIwNyxcbiAgICAgICAgICAgIDk4LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI0NSxcbiAgICAgICAgICAgIDE3OSxcbiAgICAgICAgICAgIDI1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxOTQsXG4gICAgICAgICAgICAxMzksXG4gICAgICAgICAgICAyMCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlnaHRlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA0NixcbiAgICAgICAgICAgIDM0LFxuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0aHJlZVwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1MyxcbiAgICAgICAgICAgIDE4MCxcbiAgICAgICAgICAgIDIxOCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDUsXG4gICAgICAgICAgICAxMzIsXG4gICAgICAgICAgICAxOTEsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMjM0LFxuICAgICAgICAgICAgODMsXG4gICAgICAgICAgICAxNTYsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDE3MSxcbiAgICAgICAgICAgIDM4LFxuICAgICAgICAgICAgMTAyLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDM3LFxuICAgICAgICAgICAgMTQsXG4gICAgICAgICAgICAyNSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImZvdXJcIjoge1xuICAgICAgICBcImRhcmtlclwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyMjYsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRhcmtcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNzcsXG4gICAgICAgICAgICAxOTksXG4gICAgICAgICAgICAxNTIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgNDUsXG4gICAgICAgICAgICAxNTQsXG4gICAgICAgICAgICAxMTIsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0XCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDMyLFxuICAgICAgICAgICAgMTA1LFxuICAgICAgICAgICAgNzcsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImxpZ2h0ZXJcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAzMyxcbiAgICAgICAgICAgIDI2LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZml2ZVwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDE5OSxcbiAgICAgICAgICAgIDE4NCxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAxMzMsXG4gICAgICAgICAgICA5MixcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAyNDEsXG4gICAgICAgICAgICA5OCxcbiAgICAgICAgICAgIDUwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxODUsXG4gICAgICAgICAgICA2NCxcbiAgICAgICAgICAgIDI0LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDQzLFxuICAgICAgICAgICAgMjEsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNpeFwiOiB7XG4gICAgICAgIFwiZGFya2VyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDIwMCxcbiAgICAgICAgICAgIDE4OCxcbiAgICAgICAgICAgIDI0NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAxMixcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFya1wiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICAxNjksXG4gICAgICAgICAgICAxNDksXG4gICAgICAgICAgICAyMjgsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJhc3RcIjogW1xuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImJhc2VcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogW1xuICAgICAgICAgICAgMTQ0LFxuICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgMjEwLFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAxMyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodFwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBbXG4gICAgICAgICAgICA5MCxcbiAgICAgICAgICAgIDc4LFxuICAgICAgICAgICAgMTI2LFxuICAgICAgICAgICAgMjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IFtcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWdodGVyXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFtcbiAgICAgICAgICAgIDI3LFxuICAgICAgICAgICAgMjQsXG4gICAgICAgICAgICAzNyxcbiAgICAgICAgICAgIDI1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjb250cmFzdFwiOiBbXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAyNTVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07IiwgImltcG9ydCBjb3JlQ29uZmlnIGZyb20gJy4vZ2VuZXJhdGVkL21hcHMvY29yZS12YXJzLWdldHRlci1tYXAnO1xuaW1wb3J0IHRoZW1lQ29uZmlnIGZyb20gJy4vZ2VuZXJhdGVkL21hcHMvdGhlbWUtdmFycy1nZXR0ZXItbWFwJztcbmltcG9ydCBjb3JlU2V0Q29uZmlnIGZyb20gJy4vZ2VuZXJhdGVkL21hcHMvY29yZS12YXJzLXNldHRlci1tYXAnO1xuaW1wb3J0IHRoZW1lU2V0Q29uZmlnIGZyb20gJy4vZ2VuZXJhdGVkL21hcHMvdGhlbWUtdmFycy1zZXR0ZXItbWFwJztcbmltcG9ydCBweExpZ2h0V2ViR2xDb25maWcgZnJvbSAnLi9nZW5lcmF0ZWQvbWFwcy9weC1saWdodC13ZWJnbC1tYXAnO1xuaW1wb3J0IHB4RGFya1dlYkdsQ29uZmlnIGZyb20gJy4vZ2VuZXJhdGVkL21hcHMvcHgtZGFyay13ZWJnbC1tYXAnO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAuLi5jb3JlQ29uZmlnLFxuICAuLi50aGVtZUNvbmZpZyxcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRDb25maWcgPSB7XG4gIC4uLmNvcmVTZXRDb25maWcsXG4gIC4uLnRoZW1lU2V0Q29uZmlnLFxufTtcblxuZXhwb3J0IGNvbnN0IHdlYkdsQ29uZmlnID0ge1xuICBweDoge1xuICAgIGxpZ2h0OiB7XG4gICAgICAuLi5weExpZ2h0V2ViR2xDb25maWcsXG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICAuLi5weERhcmtXZWJHbENvbmZpZyxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IHR5cGUgTW9ydGFyVGhlbWVDb25maWcgPSB0eXBlb2YgY29uZmlnO1xuXG5leHBvcnQgdHlwZSBNb3J0YXJXZWJHbENvbmZpZyA9IHR5cGVvZiB3ZWJHbENvbmZpZztcbiIsICIvLyBpbXBvcnQgeyBkZW5zaXRpZXMsIHNpemVTY2FsZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGdlbmVyYXRpbmcgYSBzZWxlY3RvciB3aXRoIGluZml4IG9yIHBvc3RmaXggbW9kaWZpZXJzLlxuICogVGhlc2UgaW5maXggb3IgcG9zdGZpeCB2YWx1ZXMgbXVzdCBiZSBwbGFjZWQgaW4gZGlmZmVyZW50IHBhcnRzIG9mXG4gKiB0aGUgZ2VuZXJhdGVkIHNlbGVjdG9yIGRlcGVuZGluZyB1cG9uIGlmIHRoZSBzZWxlY3RvciByb290IGlzIGFcbiAqIGA6aG9zdCgpYCBlbGVtZW50IG9yIHN0YW5kYXJkIGAjaWRgL2AuY2xhc3NgLlxuICpcbiAqIGBub25Ib3N0SW5maXhgIGFuZCBgbm9uSG9zdFBvc3RmaXhgIHdpbGwgb3ZlcnJpZGUgdmFsdWVzIHBhc3NlZFxuICogZm9yIGBpbmZpeGAgYW5kIGBwb3N0Zml4YCBpZiB0aGUgdGhlIHNlbGVjdG9yIHJvb3QgaXMgbm90IGA6aG9zdGAuXG4gKiBUaGlzIGlzIHNvIHRoYXQgdGhlIHNlbGVjdG9yIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgZGlmZmVyZW50XG4gKiBiZWhhdmlvciB3aGVuIGl0IGlzIGR5bmFtaWNhbGx5IHdpdGggYm90aCA6aG9zdCBhbmQgaWQvY2xhc3NcbiAqIHNlbGVjdG9ycyAobW9zdCBsaWtlbHkgaW4gbWl4aW5zKS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rvck9wdGlvbnMge1xuICBpbmZpeD86IHN0cmluZztcbiAgcG9zdGZpeD86IHN0cmluZztcbiAgbm9uSG9zdEluZml4Pzogc3RyaW5nO1xuICBub25Ib3N0UG9zdGZpeD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBTcGVjaWFsIHR5cGUgdGhhdCBkZWZpbmVzIGEgU2VsZWN0b3JGYWN0b3J5IGZ1bmN0aW9uLlxuICogVGhlc2UgZnVuY3Rpb25zIHdvcmsgZXhhY3RseSBsaWtlIGdsb2JhbCBzZWxlY3RvcigpIGZ1bmN0aW9uXG4gKiBleGNlcHQgdGhlIHNlbGVjdG9yUm9vdCBhbmQgc29tZSBwb3NzaWJsZSBpbmZpeCBvciBwb3N0Zml4IHZhbHVlc1xuICogaGF2ZSBhbHJlYWR5IGJlZW4gc2V0IGJ5IGEgcGFyZW50IG1peGluLlxuICovXG5leHBvcnQgdHlwZSBTZWxlY3RvckZhY3RvcnkgPSAob3B0aW9ucz86IFNlbGVjdG9yT3B0aW9ucykgPT4gc3RyaW5nO1xuXG4vKiogRGV0ZXJtaW5lcyBpZiBhIGNsYXNzIGlzIGA6aG9zdGAgb3Igbm90ICovXG5leHBvcnQgY29uc3QgaXNIb3N0Q2xhc3MgPSAoc2VsZWN0b3JSb290OiBzdHJpbmcpID0+XG4gIFtcbiAgICAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0JywgLy8gZmlyc3Qgc2luY2UgaXQgd2lsbCBiZSB0aGUgbW9zdCBjb21tb25cbiAgICAnOmhvc3QnLFxuICAgICc6aG9zdDpob3N0JyxcbiAgICAnOmhvc3Q6aG9zdDpob3N0JyxcbiAgICAnOmhvc3Q6aG9zdDpob3N0Omhvc3QnLFxuICAgICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0JyxcbiAgICAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnLFxuICAgICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0JyxcbiAgXS5pbmNsdWRlcyhzZWxlY3RvclJvb3QpO1xuXG4vKipcbiAqIENvcmUgYnVpbGRpbmcgYmxvY2sgb2Ygb3VyIENTUyBpbiBKUyBcIm1peGluc1wiXG4gKlxuICogVGhpcyBmYWN0b3J5IGFsbG93cyBtaXhpbnMgdG8gZGVjbGFyZSB0aGVpciBvd24gc2VsZWN0b3Igcm9vdFxuICogYWxvbmdzaWRlIHRoZWlyIG93biBpbmZpeCBhbmQvb3IgcG9zdGZpeCBvcHRpb25zLiBUaGUgZmFjdG9yeSByZXR1cm5zXG4gKiBhIGxvY2FsaXplZCBjdXN0b20gc2VsZWN0b3IgZnVuY3Rpb24gdGhhdCB0aGUgdXNlciBjYW4gY2FsbCB3aXRoXG4gKiBhZGRpdGlvbmFsIGluZml4IG9yIHBvc3RmaXggdmFsdWVzIHNvIHRoYXQgdGhlIHNlbGVjdG9yIGNhbiBiZSB1c2VkXG4gKiBtdWx0aXBsZSB0aW1lcyB3aXRoaW4gdGhlIHNjb3BlIG9mIHRoZSBcIm1peGluXCIgY2FsbGJhY2suXG4gKi9cbmV4cG9ydCBjb25zdCBzZWxlY3RvckZhY3RvcnkgPVxuICAoXG4gICAgc2VsZWN0b3JSb290OiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5maXg6IGludGVybmFsSW5maXggPSAnJyxcbiAgICAgIHBvc3RmaXg6IGludGVybmFsUG9zdGZpeCA9ICcnLFxuICAgICAgbm9uSG9zdEluZml4OiBpbnRlcm5hbE5vbkhvc3RJbmZpeCxcbiAgICAgIG5vbkhvc3RQb3N0Zml4OiBpbnRlcm5hbE5vbkhvc3RQb3N0Zml4LFxuICAgIH06IFNlbGVjdG9yT3B0aW9ucyA9IHt9XG4gICk6IFNlbGVjdG9yRmFjdG9yeSA9PlxuICAoe1xuICAgIGluZml4ID0gJycsXG4gICAgcG9zdGZpeCA9ICcnLFxuICAgIG5vbkhvc3RJbmZpeCA9IG51bGwsXG4gICAgbm9uSG9zdFBvc3RmaXggPSBudWxsLFxuICB9OiBTZWxlY3Rvck9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGlmIChpc0hvc3RDbGFzcyhzZWxlY3RvclJvb3QpKSB7XG4gICAgICBpZiAoaW50ZXJuYWxJbmZpeCB8fCBpbmZpeCkge1xuICAgICAgICByZXR1cm4gYCR7c2VsZWN0b3JSb290fSgke2ludGVybmFsSW5maXggPz8gJyd9JHtpbmZpeCA/PyAnJ30pJHtpbnRlcm5hbFBvc3RmaXggPz8gJyd9JHtcbiAgICAgICAgICBwb3N0Zml4ID8/ICcnXG4gICAgICAgIH1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAke3NlbGVjdG9yUm9vdH0ke2ludGVybmFsUG9zdGZpeCA/PyAnJ30ke3Bvc3RmaXggPz8gJyd9YDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke3NlbGVjdG9yUm9vdH0ke2ludGVybmFsTm9uSG9zdEluZml4ID8/IGludGVybmFsSW5maXggPz8gJyd9JHtcbiAgICAgICAgbm9uSG9zdEluZml4ID8/IGluZml4ID8/ICcnXG4gICAgICB9JHtpbnRlcm5hbE5vbkhvc3RQb3N0Zml4ID8/IGludGVybmFsUG9zdGZpeCA/PyAnJ30ke25vbkhvc3RQb3N0Zml4ID8/IHBvc3RmaXggPz8gJyd9YDtcbiAgICB9XG4gIH07XG5cbi8qKlxuICogRnVuY3Rpb24gdXNlZCBmb3IgZ2VuZXJhdGluZyBhIHNlbGVjdG9yIHdpdGggaW5maXggb3IgcG9zdGZpeCBtb2RpZmllcnMuXG4gKiBUaGVzZSBpbmZpeCBvciBwb3N0Zml4IHZhbHVlcyBtdXN0IGJlIHBsYWNlZCBpbiBkaWZmZXJlbnQgcGFydHMgb2ZcbiAqIHRoZSBnZW5lcmF0ZWQgc2VsZWN0b3IgZGVwZW5kaW5nIHVwb24gaWYgdGhlIHNlbGVjdG9yUm9vdCBpcyBhXG4gKiBgOmhvc3QoKWAgZWxlbWVudCBvciBzdGFuZGFyZCBgI2lkYC9gLmNsYXNzYC5cbiAqXG4gKiBgbm9uSG9zdEluZml4YCBhbmQgYG5vbkhvc3RQb3N0Zml4YCB3aWxsIG92ZXJyaWRlIHZhbHVlcyBwYXNzZWQgZm9yIGBpbmZpeGBcbiAqIGFuZCBgcG9zdGZpeGAgaWYgdGhlIHRoZSBzZWxlY3RvciByb290IGlzIG5vdCBgOmhvc3RgLiBUaGlzIGlzIHNvIHRoYXQgdGhlXG4gKiBzZWxlY3RvciBjYW4gYmUgdXNlZCB0byBwcm92aWRlIGRpZmZlcmVudCBiZWhhdmlvciB3aGVuIGl0IGlzIGR5bmFtaWNhbGx5XG4gKiB3aXRoIGJvdGggOmhvc3QgYW5kIGlkL2NsYXNzIHNlbGVjdG9ycyAobW9zdCBsaWtlbHkgaW4gbWl4aW5zKS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlbGVjdG9yID0gKFxuICBzZWxlY3RvclJvb3Q6IHN0cmluZyxcbiAgeyBpbmZpeCA9ICcnLCBwb3N0Zml4ID0gJycsIG5vbkhvc3RJbmZpeCA9IG51bGwsIG5vbkhvc3RQb3N0Zml4ID0gbnVsbCB9OiBTZWxlY3Rvck9wdGlvbnMgPSB7fVxuKSA9PiB7XG4gIGlmIChpc0hvc3RDbGFzcyhzZWxlY3RvclJvb3QpKSB7XG4gICAgcmV0dXJuIGluZml4XG4gICAgICA/IGAke3NlbGVjdG9yUm9vdH0oJHtpbmZpeCA/PyAnJ30pJHtwb3N0Zml4ID8/ICcnfWBcbiAgICAgIDogYCR7c2VsZWN0b3JSb290fSR7cG9zdGZpeCA/PyAnJ31gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgJHtzZWxlY3RvclJvb3R9JHtub25Ib3N0SW5maXggPz8gaW5maXggPz8gJyd9JHtub25Ib3N0UG9zdGZpeCA/PyBwb3N0Zml4ID8/ICcnfWA7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzaXplTW9kaWZpZXIgPSAodmFsdWU6IG51bWJlciB8IHN0cmluZywgc2l6ZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBgY2FsYygke3ZhbHVlfSAqICR7Y29uZmlnLnNpemUuc2NhbGVbc2l6ZV19KTtgO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0cmlwVW5pdCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC97fHB4fHBjfHB0fGlufG1tfGNtfGV4fGVtfHJlbXx2d3x2aHx2bWlufHZtYXh8Y2h8bGh8fS8sICcnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdHJpcFVuaXRJbnQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gcGFyc2VJbnQodmFsdWUucmVwbGFjZSgve3xweHxwY3xwdHxpbnxtbXxjbXxleHxlbXxyZW18dnd8dmh8dm1pbnx2bWF4fGNofGxofH0vLCAnJyksIDEwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdHJpcFVuaXRGbG9hdCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoL3t8cHh8cGN8cHR8aW58bW18Y218ZXh8ZW18cmVtfHZ3fHZofHZtaW58dm1heHxjaHxsaHx9LywgJycpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaXplVmFyaWFudHNNaXhpbiA9IChcbiAgc2VsZWN0b3JSb290OiBzdHJpbmcsXG4gIGNvbnRlbnQ6IChzZWxlY3RvcjogU2VsZWN0b3JGYWN0b3J5LCB2YXJpYW50OiBzdHJpbmcpID0+IHN0cmluZ1xuKSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhjb25maWcuc2l6ZS5zY2FsZSkucmVkdWNlKChhY2MsIHZhcmlhbnQpID0+IHtcbiAgICByZXR1cm4gYCR7YWNjfSAke2NvbnRlbnQoXG4gICAgICBzZWxlY3RvckZhY3Rvcnkoc2VsZWN0b3JSb290LCB7XG4gICAgICAgIGluZml4OiBgW3NpemU9XCIke3ZhcmlhbnR9XCJdYCxcbiAgICAgICAgbm9uSG9zdEluZml4OiBgLnNpemUtLSR7dmFyaWFudH1gLFxuICAgICAgfSksXG4gICAgICB2YXJpYW50XG4gICAgKX1gO1xuICB9LCAnJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVuc2l0eVZhcmlhbnRzTWl4aW4gPSAoXG4gIHNlbGVjdG9yUm9vdDogc3RyaW5nLFxuICBjb250ZW50OiAoc2VsZWN0b3I6IFNlbGVjdG9yRmFjdG9yeSwgdmFyaWFudDogc3RyaW5nKSA9PiBzdHJpbmdcbikgPT4ge1xuICByZXR1cm4gY29uZmlnLnNpemUuZGVuc2l0aWVzLnJlZHVjZSgoYWNjLCB2YXJpYW50KSA9PiB7XG4gICAgcmV0dXJuIGAke2FjY30gJHtjb250ZW50KFxuICAgICAgc2VsZWN0b3JGYWN0b3J5KHNlbGVjdG9yUm9vdCwge1xuICAgICAgICBpbmZpeDogYFtkZW5zaXR5PVwiJHt2YXJpYW50fVwiXWAsXG4gICAgICAgIG5vbkhvc3RJbmZpeDogYC5kZW5zaXR5LS0ke3ZhcmlhbnR9YCxcbiAgICAgIH0pLFxuICAgICAgdmFyaWFudFxuICAgICl9YDtcbiAgfSwgJycpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkID0gKCkgPT4ge1xuICByZXR1cm4gYGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudGA7XG59O1xuXG5leHBvcnQgY29uc3QgZmlsbHNwYWNpbmcgPSAoKSA9PiB7XG4gIHJldHVybiBgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBgO1xufTtcblxuZXhwb3J0IGNvbnN0IHZpc3VhbGx5SGlkZGVuID0gKCkgPT4ge1xuICByZXR1cm4gYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDFweCAhaW1wb3J0YW50O1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCkgIWltcG9ydGFudDtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDUwJSkgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYDtcbn07XG4iLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IHNlbGVjdG9yLCBzZWxlY3RvckZhY3RvcnksIFNlbGVjdG9yT3B0aW9ucyB9IGZyb20gJy4vY29yZSc7XG5pbXBvcnQgeyBDU1NSZXN1bHQgfSBmcm9tICdsaXQnO1xuXG5jb25zdCBkYXNoQ2FzZSA9IChzKSA9PiB7XG4gIHJldHVybiBzXG4gICAgLnJlcGxhY2UoL1tBLVpdL2csIChtKSA9PiAnLScgKyBtLnRvTG93ZXJDYXNlKCkpXG4gICAgLnJlcGxhY2UoLyguKikoWzAtOV18W0EtWl0pKC4qKS8sICckMS0kMiQzJyk7XG59O1xuXG5leHBvcnQgY29uc3QgcGFsZXR0ZUdyb3VwT3B0aW9ucyA9IHtcbiAgY29yZTogWydwcmltYXJ5JywgJ3NlY29uZGFyeScsICd0ZXJ0aWFyeScsICdkYW5nZXInXSxcbiAgc3RhdHVzOiBbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ3RlcnRpYXJ5JywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSxcbiAgdml6OiBbJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCddLFxufTtcblxuY29uc3QgZ2V0T3BhY2l0eSA9IChvcGFjaXR5OiBrZXlvZiB0eXBlb2YgY29uZmlnLm9wYWNpdHkgfCBudW1iZXIgfCBzdHJpbmcpID0+XG4gIChvcGFjaXR5ID0gY29uZmlnLm9wYWNpdHlbYCR7b3BhY2l0eX1gXSA/PyBvcGFjaXR5KTtcblxuZXhwb3J0IGludGVyZmFjZSBDb2xvck9wdGlvbnMge1xuICBnPzogJ2NvcmUnIHwgJ3N0YXR1cycgfCAndml6JztcbiAgcDogc3RyaW5nO1xuICBjPzogJ2xpZ2h0ZXInIHwgJ2xpZ2h0JyB8ICdiYXNlJyB8ICdkYXJrJyB8ICdkYXJrZXInO1xuICBvPzoga2V5b2YgdHlwZW9mIGNvbmZpZy5vcGFjaXR5IHwgbnVtYmVyIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY29sb3IgPSAoe1xuICBnOiBncm91cCA9ICdjb3JlJyxcbiAgcDogcGFsZXR0ZSxcbiAgYzogY29sb3IgPSAnYmFzZScsXG4gIG86IG9wYWNpdHkgPSBudWxsLFxufTogQ29sb3JPcHRpb25zKSA9PiB7XG4gIG9wYWNpdHkgPSBnZXRPcGFjaXR5KG9wYWNpdHkpO1xuICBpZiAob3BhY2l0eSkge1xuICAgIHJldHVybiBgcmdiYSh2YXIoLS1tdGUtJHtkYXNoQ2FzZShncm91cCl9LSR7ZGFzaENhc2UocGFsZXR0ZSl9LSR7Y29sb3J9LXJnYiksICR7b3BhY2l0eX0pYDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYHJnYih2YXIoLS1tdGUtJHtkYXNoQ2FzZShncm91cCl9LSR7ZGFzaENhc2UocGFsZXR0ZSl9LSR7Y29sb3J9LXJnYikpYDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yQ29udHJhc3QgPSAoe1xuICBnOiBncm91cCA9ICdjb3JlJyxcbiAgcDogcGFsZXR0ZSxcbiAgYzogY29sb3IgPSAnYmFzZScsXG4gIG86IG9wYWNpdHkgPSBudWxsLFxufTogQ29sb3JPcHRpb25zKSA9PiB7XG4gIG9wYWNpdHkgPSBnZXRPcGFjaXR5KG9wYWNpdHkpO1xuICBpZiAob3BhY2l0eSkge1xuICAgIHJldHVybiBgcmdiYSh2YXIoLS1tdGUtJHtkYXNoQ2FzZShncm91cCl9LSR7ZGFzaENhc2UocGFsZXR0ZSl9LSR7Y29sb3J9LWMtcmdiKSwgJHtvcGFjaXR5fSlgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgcmdiKHZhcigtLW10ZS0ke2Rhc2hDYXNlKGdyb3VwKX0tJHtkYXNoQ2FzZShwYWxldHRlKX0tJHtjb2xvcn0tYy1yZ2IpKWA7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbHMgdGhlIGNhbGxiYWNrIHdpdGggZWFjaCBwYWxldHRlIGluIHRoZSByZXF1ZXN0ZWQgcGFsZXR0ZSBncm91cFxuICogdGhlbiBjb21iaW5lcyBhbGwgb2YgdGhlIHJldHVybmVkIENTUyB0ZW1wbGF0ZSBzdHJpbmdzLlxuICovXG5leHBvcnQgY29uc3QgZm9yRWFjaFBHVmFyaWFudCA9IDxQYWxldHRlR3JvdXAgZXh0ZW5kcyBrZXlvZiB0eXBlb2YgcGFsZXR0ZUdyb3VwT3B0aW9ucz4oXG4gIGdyb3VwOiBQYWxldHRlR3JvdXAsXG4gIGNhbGxiYWNrOiAoZ3JvdXA6IFBhbGV0dGVHcm91cCwgcGFsZXR0ZTogc3RyaW5nKSA9PiBDU1NSZXN1bHQgfCBzdHJpbmdcbikgPT4ge1xuICByZXR1cm4gcGFsZXR0ZUdyb3VwT3B0aW9uc1tncm91cF0ucmVkdWNlKFxuICAgIChhY2MsIHBhbGV0dGUpID0+IGAke2FjY30ke2NhbGxiYWNrKGdyb3VwLCBwYWxldHRlKX1gLFxuICAgICcnXG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuT3B0aW9ucyB7XG4gIG46IGtleW9mIHR5cGVvZiBjb25maWcuY29sb3I7XG4gIG8/OiBrZXlvZiB0eXBlb2YgY29uZmlnLm9wYWNpdHkgfCBudW1iZXIgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCB0b2tlbiA9ICh7IG46IG5hbWUsIG86IG9wYWNpdHkgPSBudWxsIH06IFRva2VuT3B0aW9ucykgPT4ge1xuICBvcGFjaXR5ID0gZ2V0T3BhY2l0eShvcGFjaXR5KTtcbiAgaWYgKG9wYWNpdHkpIHtcbiAgICByZXR1cm4gYHJnYmEodmFyKC0tbXRlLSR7ZGFzaENhc2UobmFtZSl9LXJnYiksICR7b3BhY2l0eX0pYDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYHJnYih2YXIoLS1tdGUtJHtkYXNoQ2FzZShuYW1lKX0tcmdiKSlgO1xuICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlVG9rZW5PcHRpb25zIHtcbiAgbjoga2V5b2YgdHlwZW9mIGNvbmZpZy5zdGF0ZVRva2VuO1xuICBzOiBzdHJpbmc7XG4gIG8/OiBrZXlvZiB0eXBlb2YgY29uZmlnLm9wYWNpdHkgfCBudW1iZXIgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBzdGF0ZVRva2VuID0gKHsgbjogbmFtZSwgczogc3RhdGUsIG86IG9wYWNpdHkgfTogU3RhdGVUb2tlbk9wdGlvbnMpID0+IHtcbiAgb3BhY2l0eSA9IGdldE9wYWNpdHkob3BhY2l0eSk7XG4gIGlmIChvcGFjaXR5KSB7XG4gICAgcmV0dXJuIGByZ2JhKHZhcigtLW10ZS1pdC0ke2Rhc2hDYXNlKG5hbWUpfS0ke3N0YXRlfS1yZ2IpLCAke29wYWNpdHl9KWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGByZ2JhKHZhcigtLW10ZS1pdC0ke2Rhc2hDYXNlKG5hbWUpfS0ke3N0YXRlfS1yZ2IpLCB2YXIoLS1tdGUtaXQtJHtkYXNoQ2FzZShcbiAgICAgIG5hbWVcbiAgICApfS0ke3N0YXRlfS1hKSlgO1xuICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlVG9rZW5NaXhpbk9wdGlvbnMge1xuICBzZWxlY3Rvck9wdGlvbnM/OiBTZWxlY3Rvck9wdGlvbnM7XG4gIG46IGtleW9mIHR5cGVvZiBjb25maWcuc3RhdGVUb2tlbjtcbiAgZm9yU3RhdGVzPzogc3RyaW5nW107XG4gIGZvclByb3BzPzogc3RyaW5nW107XG4gIGF1dG9Db250cmFzdD86IGJvb2xlYW47XG4gIHVzZUltcG9ydGFudD86IGJvb2xlYW47XG4gIGFzT3ZlcmxheT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBzdGF0ZVRva2VuTWl4aW4gPSAoXG4gIHNlbGVjdG9yUm9vdDogc3RyaW5nLFxuICB7XG4gICAgc2VsZWN0b3JPcHRpb25zID0geyBpbmZpeDogJycsIHBvc3RmaXg6ICcnIH0sXG4gICAgbjogbmFtZSxcbiAgICBmb3JTdGF0ZXMgPSBbJ2RlZmF1bHQnLCAnaG92ZXInLCAnYWN0aXZlJ10sXG4gICAgZm9yUHJvcHMgPSBbJ2JhY2tncm91bmQnXSxcbiAgICB1c2VJbXBvcnRhbnQgPSBmYWxzZSxcbiAgICBhc092ZXJsYXkgPSBmYWxzZSxcbiAgfTogU3RhdGVUb2tlbk1peGluT3B0aW9uc1xuKSA9PiB7XG4gIGlmIChhc092ZXJsYXkpIHtcbiAgICBmb3JTdGF0ZXMgPSBmb3JTdGF0ZXMuZmlsdGVyKChzdGF0ZSkgPT4gc3RhdGUgIT09ICdkZWZhdWx0Jyk7XG4gIH1cbiAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvckZhY3Rvcnkoc2VsZWN0b3JSb290LCBzZWxlY3Rvck9wdGlvbnMpO1xuICBjb25zdCBzZXRJbnRlcmFjdGl2ZVByb3BzID0gKHsgbmFtZSwgc3RhdGUsIGZvclByb3BzLCB1c2VJbXBvcnRhbnQgPSBmYWxzZSB9KSA9PiB7XG4gICAgcmV0dXJuIGZvclByb3BzLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiB7XG4gICAgICByZXR1cm4gYCR7YWNjfVxuICAgICAgICAke3Byb3B9OiAke3N0YXRlVG9rZW4oeyBuOiBuYW1lLCBzOiBzdGF0ZSB9KX0ke3VzZUltcG9ydGFudCA/ICcgIWltcG9ydGFudDsnIDogJzsnfVxuICAgICAgYDtcbiAgICB9LCAnJyk7XG4gIH07XG5cbiAgcmV0dXJuIGZvclN0YXRlcy5yZWR1Y2UoKGFjYywgc3RhdGUpID0+IHtcbiAgICByZXR1cm4gYCR7YWNjfVxuICAgICAgJHtzZWxlY3Rvcih7IGluZml4OiBzdGF0ZSAhPT0gJ2RlZmF1bHQnID8gYDoke3N0YXRlfWAgOiAnJyB9KX0ke1xuICAgICAgYXNPdmVybGF5XG4gICAgICAgID8gYDo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtgXG4gICAgICAgIDogYCB7XG4gICAgICBgXG4gICAgfVxuICAgICAgICAke3NldEludGVyYWN0aXZlUHJvcHMoeyBuYW1lLCBzdGF0ZSwgZm9yUHJvcHMsIHVzZUltcG9ydGFudCB9KX1cbiAgICAgIH1cbiAgICBgO1xuICB9LCAnJyk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvY3VzT3B0aW9ucyB7XG4gIHNlbGVjdG9yT3B0aW9ucz86IFNlbGVjdG9yT3B0aW9ucztcbiAgc2VsZWN0b3JTdGF0ZT86ICc6Zm9jdXMtdmlzaWJsZScgfCAnOmZvY3VzJyB8ICc6aG92ZXInIHwgbnVsbDtcbiAgc2VsZWN0b3JPdXRsZXQ/OiAnOjpiZWZvcmUnIHwgJzo6YWZ0ZXInO1xuICBmbHVzaD86IGJvb2xlYW47XG4gIHJhZGl1cz86IHN0cmluZztcbiAgaW5zZXQ/OiBzdHJpbmc7XG4gIHJhZGl1c1RvcExlZnQ/OiBzdHJpbmc7XG4gIHJhZGl1c1RvcFJpZ2h0Pzogc3RyaW5nO1xuICByYWRpdXNCb3R0b21MZWZ0Pzogc3RyaW5nO1xuICByYWRpdXNCb3R0b21SaWdodD86IHN0cmluZztcbiAgb2Zmc2V0VG9wPzogc3RyaW5nO1xuICBvZmZzZXRSaWdodD86IHN0cmluZztcbiAgb2Zmc2V0Qm90dG9tPzogc3RyaW5nO1xuICBvZmZzZXRMZWZ0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZm9jdXNlZE1peGluID0gKFxuICBzZWxlY3RvclJvb3Q6IHN0cmluZyxcbiAge1xuICAgIHNlbGVjdG9yT3B0aW9ucyA9IHsgaW5maXg6ICcnLCBwb3N0Zml4OiAnJyB9LFxuICAgIHNlbGVjdG9yU3RhdGUgPSAnOmZvY3VzLXZpc2libGUnLFxuICAgIHNlbGVjdG9yT3V0bGV0ID0gJzo6YmVmb3JlJyxcbiAgICBmbHVzaCA9IGZhbHNlLFxuICAgIHJhZGl1cyA9ICc0cHgnLFxuICAgIGluc2V0LFxuICAgIHJhZGl1c1RvcExlZnQsXG4gICAgcmFkaXVzVG9wUmlnaHQsXG4gICAgcmFkaXVzQm90dG9tTGVmdCxcbiAgICByYWRpdXNCb3R0b21SaWdodCxcbiAgICBvZmZzZXRUb3AgPSAnLTRweCcsXG4gICAgb2Zmc2V0UmlnaHQgPSAnLTRweCcsXG4gICAgb2Zmc2V0Qm90dG9tID0gJy00cHgnLFxuICAgIG9mZnNldExlZnQgPSAnLTRweCcsXG4gIH06IEZvY3VzT3B0aW9uc1xuKSA9PiB7XG4gIGlmIChmbHVzaCkge1xuICAgIG9mZnNldFRvcCA9ICcwcHgnO1xuICAgIG9mZnNldFJpZ2h0ID0gJzBweCc7XG4gICAgb2Zmc2V0Qm90dG9tID0gJzBweCc7XG4gICAgb2Zmc2V0TGVmdCA9ICcwcHgnO1xuICB9XG4gIGlmICghcmFkaXVzVG9wTGVmdCkge1xuICAgIHJhZGl1c1RvcExlZnQgPSByYWRpdXM7XG4gIH1cbiAgaWYgKCFyYWRpdXNUb3BSaWdodCkge1xuICAgIHJhZGl1c1RvcFJpZ2h0ID0gcmFkaXVzO1xuICB9XG4gIGlmICghcmFkaXVzQm90dG9tTGVmdCkge1xuICAgIHJhZGl1c0JvdHRvbUxlZnQgPSByYWRpdXM7XG4gIH1cbiAgaWYgKCFyYWRpdXNCb3R0b21SaWdodCkge1xuICAgIHJhZGl1c0JvdHRvbVJpZ2h0ID0gcmFkaXVzO1xuICB9XG5cbiAgcmV0dXJuIGAke3NlbGVjdG9yKHNlbGVjdG9yUm9vdCwge1xuICAgIC4uLnNlbGVjdG9yT3B0aW9ucyxcbiAgICBpbmZpeDogYCR7c2VsZWN0b3JPcHRpb25zLmluZml4ID8/ICcnfSR7XG4gICAgICBzZWxlY3RvclN0YXRlID8/ICcnXG4gICAgfTpub3QoLmRpc2FibGVkKTpub3QoW2Rpc2FibGVkXSk6bm90KDpkaXNhYmxlZClgLFxuICAgIHBvc3RmaXg6IGAke3NlbGVjdG9yT3B0aW9ucy5wb3N0Zml4ID8/ICcnfSR7c2VsZWN0b3JPdXRsZXQgPz8gJyd9YCxcbiAgfSl9IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgJHtcbiAgICAgIGluc2V0XG4gICAgICAgID8gJydcbiAgICAgICAgOiBgdG9wOiAke29mZnNldFRvcH07XG4gICAgICByaWdodDogJHtvZmZzZXRSaWdodH07XG4gICAgICBib3R0b206ICR7b2Zmc2V0Qm90dG9tfTtcbiAgICAgIGxlZnQ6ICR7b2Zmc2V0TGVmdH07YFxuICAgIH1cbiAgICAke2luc2V0ID8gYGluc2V0OiAke2luc2V0fTtgIDogJyd9XG4gICAgYm9yZGVyOiBzb2xpZCAycHggJHt0b2tlbih7IG46ICdmb2N1cycgfSl9O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1tdGUtbGlnaHQpO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR7cmFkaXVzVG9wTGVmdH07XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR7cmFkaXVzVG9wUmlnaHR9O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICR7cmFkaXVzQm90dG9tTGVmdH07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICR7cmFkaXVzQm90dG9tUmlnaHR9O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHotaW5kZXg6IDk7XG4gIH1gO1xufTtcbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgZm9udEJhc2VNaXhpbiA9IChmYW1pbHk6IGtleW9mIHR5cGVvZiBjb25maWcuZm9udC5mYW1pbHkgPSAnc2FucycpID0+IGBcbiAgZm9udC1mYW1pbHk6ICR7Y29uZmlnLmZvbnQuZmFtaWx5W2ZhbWlseV19O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbmA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgZm9udFNldE9wdGlvbnMge1xuICBzOiBrZXlvZiB0eXBlb2YgY29uZmlnLmZvbnQuc2V0O1xuICByYXRpbz86IHR5cGVvZiBjb25maWcuZm9udC5yYXRpb1trZXlvZiB0eXBlb2YgY29uZmlnLmZvbnQucmF0aW9dO1xuICBmb250RmFtaWx5Pzoga2V5b2YgdHlwZW9mIGNvbmZpZy5mb250LmZhbWlseTtcbiAgaW1wb3J0YW50PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGZvbnRTZXRNaXhpbiA9ICh7XG4gIHM6IHNldCxcbiAgcmF0aW8sXG4gIGZvbnRGYW1pbHkgPSAnc2FucycsXG4gIGltcG9ydGFudCA9IGZhbHNlLFxufTogZm9udFNldE9wdGlvbnMpID0+IHtcbiAgY29uc3QgdHlwZVN0eWxlID0gY29uZmlnLmZvbnQuc2V0W3NldF07XG4gIGlmIChyYXRpbykge1xuICAgIHJldHVybiBgXG4gICAgICAke2ZvbnRCYXNlTWl4aW4oZm9udEZhbWlseSl9XG4gICAgICBmb250LXNpemU6IGNhbGMoJHt0eXBlU3R5bGUuZm9udFNpemV9ICogJHtyYXRpb30pJHtpbXBvcnRhbnQgPyAnICFpbXBvcnRhbnQnIDogJyd9O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dHlwZVN0eWxlLmZvbnRXZWlnaHR9JHtpbXBvcnRhbnQgPyAnICFpbXBvcnRhbnQnIDogJyd9O1xuICAgICAgbGluZS1oZWlnaHQ6ICR7dHlwZVN0eWxlLmxpbmVIZWlnaHR9JHtpbXBvcnRhbnQgPyAnICFpbXBvcnRhbnQnIDogJyd9O1xuICAgIGA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICR7Zm9udEJhc2VNaXhpbihmb250RmFtaWx5KX1cbiAgICAgIGZvbnQtc2l6ZTogJHt0eXBlU3R5bGUuZm9udFNpemV9JHtpbXBvcnRhbnQgPyAnICFpbXBvcnRhbnQnIDogJyd9O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dHlwZVN0eWxlLmZvbnRXZWlnaHR9JHtpbXBvcnRhbnQgPyAnICFpbXBvcnRhbnQnIDogJyd9O1xuICAgICAgbGluZS1oZWlnaHQ6ICR7dHlwZVN0eWxlLmxpbmVIZWlnaHR9JHtpbXBvcnRhbnQgPyAnICFpbXBvcnRhbnQnIDogJyd9O1xuICAgIGA7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmb250T3ZlcmZsb3dFbGxpcHNpc01peGluID0gKCkgPT4gYFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2luZzogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuZXhwb3J0IGNvbnN0IGZvbnRTZXRJbmhlcml0TWl4aW4gPSAoKSA9PiBgXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbmA7XG4iLCAiLy8gaW1wb3J0IHsgdHJhbnNpdGlvbkR1cmF0aW9uLCB0aW1pbmdGdW5jdGlvbiB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgcHJvcDogc3RyaW5nO1xuICBkdXJhdGlvbj86IHN0cmluZztcbiAgZGVsYXk/OiBzdHJpbmc7XG4gIHRpbWluZ0ZuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdHJhbnNpdGlvbiA9ICh7XG4gIHByb3AsXG4gIGR1cmF0aW9uID0gY29uZmlnLmFuaW1hdGlvbi50cmFuc2l0aW9uRHVyYXRpb24uZGVmYXVsdCxcbiAgZGVsYXkgPSAnMG1zJyxcbiAgdGltaW5nRm4gPSBjb25maWcuYW5pbWF0aW9uLnRpbWluZ0Z1bmN0aW9uLnN0YW5kYXJkLFxufSkgPT4ge1xuICByZXR1cm4gYCR7cHJvcH0gJHtkdXJhdGlvbn0gJHtkZWxheX0gJHt0aW1pbmdGbn1gO1xufTtcbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgdG9rZW4gfSBmcm9tICcuL3RoZW1lJztcblxuZXhwb3J0IGNvbnN0IGVsZXZhdGlvbiA9ICh6VmFsdWU6IGtleW9mIHR5cGVvZiBjb25maWcuZWxldmF0aW9uLmxldmVsIHwgbnVtYmVyKSA9PiB7XG4gIHJldHVybiBgJHtjb25maWcuZWxldmF0aW9uLmxldmVsW3pWYWx1ZV19ICR7dG9rZW4oe1xuICAgIG46ICdlbGV2YXRpb25CYXNlJyxcbiAgICBvOiBjb25maWcuZWxldmF0aW9uLm9wYWNpdHlbelZhbHVlXSxcbiAgfSl9YDtcbn07XG4iLCAiaW1wb3J0IHsgc2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IGJhc2VTdHlsZXMsIGRlZmluZUVsZW1lbnQsIE10ZUNvbnRlbnRCYXNlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL3RleHQuc3R5bGVzJztcbmltcG9ydCB7IHRleHQgfSBmcm9tICdzdHJlYW0vY29uc3VtZXJzJztcblxuLyoqXG4gKiBAc2xvdCAtIERlZmF1bHQgc2xvdHRlZCBjb250ZW50XG4gKi9cbkBkZWZpbmVFbGVtZW50KCdtdGUtdGV4dCcpXG5leHBvcnQgY2xhc3MgTXRlVGV4dCBleHRlbmRzIE10ZUNvbnRlbnRCYXNlIHtcbiAgc3RhdGljIHN0eWxlcyA9IFtiYXNlU3R5bGVzLCBzdHlsZXNdO1xuXG4gIC8qKiBTZXRzIHRoZSBgdGV4dC1hbGlnbm1lbnRgIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgYWxpZ24/OlxuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdlbmQnXG4gICAgfCAncmlnaHQnXG4gICAgfCAnbGVmdCdcbiAgICB8ICdqdXN0aWZ5J1xuICAgIHwgJ2p1c3RpZnktYWxsJ1xuICAgIHwgJ21hdGNoLXBhcmVudCdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gICAgfCAncmV2ZXJ0J1xuICAgIHwgJ3JldmVydC1sYXllcidcbiAgICB8ICd1bnNldCc7XG5cbiAgLyoqIEFkanVzdHMgdGhlIGZvbnQgc2l6ZSBvZiB0aGlzIHRleHQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBzaXplPzogJ3h4cycgfCAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnO1xuXG4gIC8qKiBTZXRzIHRoZSBgdGV4dC10cmFuc2Zvcm1gIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgdHJhbnNmb3JtPzpcbiAgICB8ICd1cHBlcmNhc2UnXG4gICAgfCAnbG93ZXJjYXNlJ1xuICAgIHwgJ2NhcGl0YWxpemUnXG4gICAgfCAnZnVsbC13aWR0aCdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gICAgfCAncmV2ZXJ0J1xuICAgIHwgJ3JldmVydC1sYXllcidcbiAgICB8ICd1bnNldCc7XG5cbiAgLyoqIFNldHMgdGhlIGB3b3JkLWJyZWFrYCBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHdvcmRCcmVhaz86XG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ2JyZWFrLWFsbCdcbiAgICB8ICdrZWVwLWFsbCdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gICAgfCAncmV2ZXJ0J1xuICAgIHwgJ3JldmVydC1sYXllcidcbiAgICB8ICd1bnNldCc7XG5cbiAgLyoqIFNldHMgdGhlIGB3b3JkLXNwYWNpbmdgIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgd29yZFNwYWNpbmc/OiAnc20nIHwgJ21kJyB8ICdsZyc7XG5cbiAgLyoqIFNldHMgdGhlIGBsZXR0ZXItc3BhY2luZ2AgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBsZXR0ZXJTcGFjaW5nPzogJ3NtJyB8ICdtZCcgfCAnbGcnO1xuXG4gIC8qKiBTZXRzIHRoZSBgd2hpdGUtc3BhY2VgIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgd2hpdGVTcGFjZT86XG4gICAgfCAnbm9ybWFsJ1xuICAgIHwgJ25vd3JhcCdcbiAgICB8ICdwcmUnXG4gICAgfCAncHJlLXdyYXAnXG4gICAgfCAncHJlLWxpbmUnXG4gICAgfCAnYnJlYWstc3BhY2VzJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgICB8ICdyZXZlcnQnXG4gICAgfCAncmV2ZXJ0LWxheWVyJ1xuICAgIHwgJ3Vuc2V0JztcblxuICAvKiogV2hldGhlciBvciBub3QgdGhlIHRleHQgc2hvdWxkIGJlIHVuZGVybGluZWQgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB1bmRlcmxpbmU/OiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgdGV4dCBzaG91bGQgYmUgaXRhbGljICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgaXRhbGljPzogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciBvciBub3QgdGhlIHRleHQgc2hvdWxkIGJlIHN0cmlrZWQgdGhyb3VnaCAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHN0cmlrZXRocm91Z2g/OiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGlzIHRleHQgc2hvdWxkIHJlbmRlciBtdXRlZCAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIG11dGVkPzogYm9vbGVhbjtcblxuICAvKiogTGltaXRzIHRoZSBhbW91bnQgb2YgdmlzaWJsZSBsaW5lcy4gU2V0cyB0aGUgYC13ZWJraXQtbGluZS1jbGFtcGAgcHJvcGVydHkuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbGluZUNsYW1wPzogc3RyaW5nO1xuXG4gIC8qKiBBZGp1c3RzIGlmIHRleHQgaXMgd3JhcHBlZCBhbmQgaWYgc28sIHdoYXQgYWxnb3JpdGhtIGRldGVybWluZXMgdGhlIHdyYXBwaW5nIGJlaGF2aW9yLiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHRleHRXcmFwPzpcbiAgICB8ICd3cmFwJ1xuICAgIHwgJ25vd3JhcCdcbiAgICB8ICdiYWxhbmNlJ1xuICAgIHwgJ3ByZXR0eSdcbiAgICB8ICdpbmhlcml0J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAncmV2ZXJ0J1xuICAgIHwgJ3JldmVydC1sYXllcidcbiAgICB8ICd1bnNldCdcbiAgICB8IHVuZGVmaW5lZDtcblxuICAvKiogV2VhdGhlciBvciBub3QgdGhlIHRleHQgc2hvdWxkIHdyYXAgdG8gdGhlIG5leHQgbGluZSAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIG5vV3JhcD86IGJvb2xlYW47XG5cbiAgLyoqIExpbWl0cyB0aGUgd2lkdGggdG8gYSBzcGVjaWZpZWQgbnVtYmVyIG9mIDAgZ2x5cGggY2hhcmFjdGVycyBhbmQgaXMgdHlwaWNhbGx5IHVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBub1dyYXAgb3IgbGluZUNsYW1wICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciwgcmVmbGVjdDogdHJ1ZSB9KSBtYXhDaGFyV2lkdGg/OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX3N0eWxlUHJvcHMgPSBuZXcgU2V0KFtcbiAgICAnYWxpZ24nLFxuICAgICdpdGFsaWMnLFxuICAgICdsaW5lQ2xhbXAnLFxuICAgICdtYXhDaGFyV2lkdGgnLFxuICAgICdzdHJpa2V0aHJvdWdoJyxcbiAgICAndHJhbnNmb3JtJyxcbiAgICAndW5kZXJsaW5lJyxcbiAgICAnd2hpdGVTcGFjZScsXG4gICAgJ3dvcmRCcmVhaycsXG4gICAgJ3dvcmRTcGFjaW5nJyxcbiAgICAnbGV0dGVyU3BhY2luZycsXG4gICAgJ3RleHRXcmFwJyxcbiAgXSk7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBDaGVjayBpZiBhbnkgY29udGVudCBwcm9wIGhhcyBjaGFuZ2VkIHRvIGRldGVybWluZSBpZiB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaW5zdGFuY2Ugc3R5bGVzXG4gICAgbGV0IHNob3VsZFVwZGF0ZVN0eWxlcyA9IGZhbHNlO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGNoYW5nZWRQcm9wcy5rZXlzKCkpIHtcbiAgICAgIGlmIChNdGVUZXh0Ll9zdHlsZVByb3BzLmhhcyhrZXkpKSB7XG4gICAgICAgIHNob3VsZFVwZGF0ZVN0eWxlcyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaG91bGRVcGRhdGVTdHlsZXMpIHtcbiAgICAgIC8vIENhbGMgdGV4dC1kZWNvcmF0aW9uXG4gICAgICBsZXQgdGV4dERlY29yYXRpb247XG4gICAgICBpZiAodGhpcy51bmRlcmxpbmUpIHtcbiAgICAgICAgdGV4dERlY29yYXRpb24gPSBgdW5kZXJsaW5lJHt0aGlzLnN0cmlrZXRocm91Z2ggPyAnIGxpbmUtdGhyb3VnaCcgOiAnJ31gO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0cmlrZXRocm91Z2gpIHtcbiAgICAgICAgdGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgIH1cbiAgICAgIC8vIENhbGMgd29yZC1zcGFjaW5nXG4gICAgICBsZXQgd29yZFNwYWNpbmc7XG4gICAgICBpZiAodGhpcy53b3JkU3BhY2luZyA9PT0gJ3NtJykge1xuICAgICAgICB3b3JkU3BhY2luZyA9ICctMC4wNWVtJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy53b3JkU3BhY2luZyA9PT0gJ2xnJykge1xuICAgICAgICB3b3JkU3BhY2luZyA9ICcwLjA1ZW0nO1xuICAgICAgfVxuICAgICAgLy8gQ2FsYyBsZXR0ZXItc3BhY2luZ1xuICAgICAgbGV0IGxldHRlclNwYWNpbmc7XG4gICAgICBpZiAodGhpcy5sZXR0ZXJTcGFjaW5nID09PSAnc20nKSB7XG4gICAgICAgIGxldHRlclNwYWNpbmcgPSAnLTAuMDJlbSc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubGV0dGVyU3BhY2luZyA9PT0gJ2xnJykge1xuICAgICAgICBsZXR0ZXJTcGFjaW5nID0gJzAuMDJlbSc7XG4gICAgICB9XG5cbiAgICAgIC8vIERvdWJsZSB0aGUgYDpob3N0YCBzZWxlY3RvciB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSBiZXlvbmQgbW9zdCBjb21wb25lbnQgbGV2ZWwgc3R5bGVzIGJ5IGRlZmF1bHRcbiAgICAgIHRoaXMuc2V0SW5zdGFuY2VTdHlsZSgndGV4dCcsIHNlbGVjdG9yRmFjdG9yeSgnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdCcpLCB7XG4gICAgICAgICctd2Via2l0LWxpbmUtY2xhbXAnOiB0aGlzLmxpbmVDbGFtcCxcbiAgICAgICAgJ21heFdpZHRoJzogTnVtYmVyLmlzRmluaXRlKHRoaXMubWF4Q2hhcldpZHRoKVxuICAgICAgICAgID8gYCR7TWF0aC5yb3VuZCh0aGlzLm1heENoYXJXaWR0aCA8IDAgPyAwIDogdGhpcy5tYXhDaGFyV2lkdGgpfWNoYFxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgJ3dvcmQtYnJlYWsnOiB0aGlzLndvcmRCcmVhayxcbiAgICAgICAgJ3dvcmQtc3BhY2luZyc6IHdvcmRTcGFjaW5nLFxuICAgICAgICAnbGV0dGVyLXNwYWNpbmcnOiBsZXR0ZXJTcGFjaW5nLFxuICAgICAgICAnd2hpdGUtc3BhY2UnOiB0aGlzLndoaXRlU3BhY2UsXG4gICAgICAgICdmb250LXN0eWxlJzogdGhpcy5pdGFsaWMgPyAnaXRhbGljJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiB0aGlzLmFsaWduLFxuICAgICAgICAndGV4dC1kZWNvcmF0aW9uJzogdGV4dERlY29yYXRpb24sXG4gICAgICAgICd0ZXh0LXRyYW5zZm9ybSc6IHRoaXMudHJhbnNmb3JtLFxuICAgICAgICAndGV4dC13cmFwJzogdGhpcy50ZXh0V3JhcCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGAke3RoaXMuaW5zdGFuY2VTdHlsZXN9PHNsb3Q+PC9zbG90PmA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLXRleHQnOiBNdGVUZXh0O1xuICB9XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgd2Mvbm8tc2VsZi1jbGFzcyAqL1xuaW1wb3J0IHsgcHJvcGVydHksIHN0YXRlIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBzZWxlY3RvckZhY3RvcnksIFNlbGVjdG9yRmFjdG9yeSB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7XG4gIGNvbnN0cnVjdEluc3RhbmNlU3R5bGVzLFxuICBnZW5lcmF0ZVNlbGVjdG9yc0Zyb21TdHlsZU1hcCxcbiAgU2VsZWN0b3JTdHlsZXMsXG4gIFN0eWxlTWFwLFxuICBVbnN1YnNjcmliZXIsXG59IGZyb20gJy4uL3V0aWxpdGllcyc7XG5pbXBvcnQgeyB1bnNhZmVIVE1MIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy91bnNhZmUtaHRtbC5qcyc7XG5pbXBvcnQgeyBNb3J0YXJQcmVzZXRUaGVtZSB9IGZyb20gJy4uL3ByZXNldHMnO1xuXG4vLyBEaXNhYmxlIHRoaXMgd2FybmluZyBmb3Igbm93IGJ5IHByZS1tYXJraW5nIGl0IGFzIGlzc3VlZCBzbyB1c2VycyBkb24ndCBoYXZlIHRvIHNlZSBpdFxuLy8gVE9ETzogQXNrIGxpdCB0ZWFtIHdoeSB0aGlzIGlzIHRocm93biBldmVyeXdoZXJlIGFuZCB3aGF0IGFsdGVybmF0aXZlcyBhcmUgZm9yIHByZXNldCBzb2x1dGlvblxuZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncyA/Pz0gbmV3IFNldCgpO1xuZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncy5hZGQoXG4gICdPdmVycmlkaW5nIFJlYWN0aXZlRWxlbWVudC5nZXRQcm9wZXJ0eURlc2NyaXB0b3IoKSBpcyBkZXByZWNhdGVkLiBUaGUgb3ZlcnJpZGUgd2lsbCBub3QgYmUgY2FsbGVkIHdpdGggc3RhbmRhcmQgZGVjb3JhdG9ycyBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy9uby1vdmVycmlkZS1nZXQtcHJvcGVydHktZGVzY3JpcHRvciBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nXG4pO1xuXG5leHBvcnQgY2xhc3MgTXRlRWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwcml2YXRlIF9faW5zdGFuY2VTdHlsZVNoZWV0TWFwID0gbmV3IE1hcDxzdHJpbmcsIFNlbGVjdG9yU3R5bGVzW10+KCk7XG4gIHByaXZhdGUgX19pbnN0YW5jZVN0eWxlU2hlZXROZWVkc1VwZGF0ZSA9IGZhbHNlO1xuXG4gIC8qKiBTZXQgdG8gdHJ1ZSB3aGVuIGZpcnN0VXBkYXRlZCBpcyBmaXJzdCBjYWxsZWQgKi9cbiAgcHJvdGVjdGVkIF9fZmlyc3RVcGRhdGVkID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIGluc3RhbmNlU3R5bGVzO1xuXG4gIC8qKlxuICAgKiBBbGwgc3VicyBwdXNoZWQgdG8gdGhpcyBhcnJheSB3aWxsIGJlIGNsZWFyZWQgaW4gdGhlIGRpc2Nvbm5lY3RlZENhbGxiYWNrXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN1YnM6IFVuc3Vic2NyaWJlcltdID0gW107XG5cbiAgLyoqIFN0eWxlIG1hcHBpbmdzIHRoYXQgYXJlIGFwcGxpZWQgdG8gdGhlIGhvc3QgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCByZWZsZWN0OiB0cnVlIH0pIHNlPzogU3R5bGVNYXA7XG5cbiAgLyoqXG4gICAqIFRoZSB0aGVtZSB0byB1c2UgZm9yIHN0eWxpbmcgdGhpcyBjb21wb25lbnQuIE92ZXJyaWRlcyB0aGUgZ2xvYmFsIHByZXNldCBmb3IgdGhpcyBpbnN0YW5jZSBvZiB0aGlzIGNvbXBvbmVudC5cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgYXR0cmlidXRlOiAnZGF0YS1tdGUtdGhlbWUnIH0pXG4gIHNldCB0aGVtZSh0aGVtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLl90aGVtZTtcbiAgICB0aGlzLl90aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgndGhlbWUnLCBvbGRWYWx1ZSk7XG4gICAgLy8gVE9ETzogZmlndXJlIG91dCBhIGJldHRlciB3YXkgdG8gc29sdmUgdGhpcyBmb3IgYWxsIHByZXNldHNcbiAgICBpZiAodGhpcy5fX2xvY2FsUHJlc2V0VGhlbWUpIHtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXF1ZXN0VXBkYXRlKCd0aGVtZScsIG51bGwpKTtcbiAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB0aGlzLnJlcXVlc3RVcGRhdGUoJ3RoZW1lJywgbnVsbCkpO1xuICAgIH1cbiAgfVxuICBnZXQgdGhlbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWUgPz8gdGhpcy5fX2xvY2FsUHJlc2V0VGhlbWU/Lm5hbWU7XG4gIH1cbiAgcHJpdmF0ZSBfdGhlbWU6IHN0cmluZztcblxuICAvKiogVXNlZCB0byBkZWNsYXJlIGEgbG9jYWwgdGhlbWUgdmFsdWUgZGV0ZXJtaW5lZCBieSB0aGUgbG9jYWwgcHJlc2V0IGlmIGl0IGlzIHNldC4gKi9cbiAgQHN0YXRlKCkgcHJvdGVjdGVkIF9fbG9jYWxQcmVzZXRUaGVtZTogTW9ydGFyUHJlc2V0VGhlbWU7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgc2VsZWN0b3IgdG8gaGF2ZSBpbnN0YW5jZSBzdHlsZXMgdGFyZ2V0IGEgc3BlY2lmaWMgaW5uZXIgZWxlbWVudC5cbiAgICogVXNlZnVsIGluIHNwZWNpZmljIHNjZW5hcmlvcyB3aGVyZSBmb2N1cyBpcyBkZWxlZ2F0ZWQgbGlrZSBidXR0b25zLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0IHRoaXMgcmVwZWF0cyBgOmhvc3RgIHNpeCB0aW1lcyB0byBwcm92aWRlIGEgc3BlY2lmaWNpdHkgb2YgNlxuICAgKi9cbiAgcHJvdGVjdGVkIGluc3RhbmNlU3R5bGVTZWxlY3RvclJvb3QgPSAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0JztcblxuICAvKipcbiAgICogQ2FuIGJlIGNhbGxlZCBieSBkZXJpdmVkIGNsYXNzZXMgdG8gcmVnaXN0ZXIgbmV3IGluc3RhbmNlIGxldmVsIGR5bmFtaWMgc3R5bGVzLlxuICAgKiBXaGVuIGNhbGxlZCB0aGUgaW5zdGFuY2Ugc3R5bGVzaGVldCB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIGxhdGVzdCBzdHlsZXMgdGhpcyB1cGRhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgc2V0SW5zdGFuY2VTdHlsZShpZDogc3RyaW5nLCBzZWxlY3RvcjogU2VsZWN0b3JGYWN0b3J5LCBzdHlsZU1hcDogU3R5bGVNYXApIHtcbiAgICAvLyBXZSBwYXJzZSBhbGwgc3R5bGUgaW5mb3JtYXRpb24gaGVyZSBhbmQgc2NvcGUgaXQgdG8gdGhlIGdpdmVuIGlkLiBUaGlzIGVuc3VyZXMgd2VcbiAgICAvLyBvbmx5IGV2ZXIgbmVlZCB0byByZS1wYXJzZSB0aGlzIHBvcnRpb24gb2Ygc3R5bGUgaW5mb3JtYXRpb24gd2hlbiBpdHMgYXNzb2NpYXRlZFxuICAgIC8vIGlkIGlzIHVwZGF0ZWQgYWdhaW4uXG4gICAgdGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE1hcC5zZXQoaWQsIGdlbmVyYXRlU2VsZWN0b3JzRnJvbVN0eWxlTWFwKHNlbGVjdG9yLCBzdHlsZU1hcCkpO1xuICAgIHRoaXMuX19pbnN0YW5jZVN0eWxlU2hlZXROZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICAvKiogQSBjdXN0b20gaG9vayB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIGluIGRlcml2ZWQgY2xhc3NlcyB0byBzZXQgaW5zdGFuY2Ugc3R5bGVzIGFzIG5lZWRlZCAqL1xuICBwcm90ZWN0ZWQgdXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKSB7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ3NlJykpIHtcbiAgICAgIHRoaXMuc2V0SW5zdGFuY2VTdHlsZSgnc2UnLCBzZWxlY3RvckZhY3RvcnkodGhpcy5pbnN0YW5jZVN0eWxlU2VsZWN0b3JSb290KSwgdGhpcy5zZSA/PyB7fSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHdpbGxVcGRhdGUoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIud2lsbFVwZGF0ZShjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gQ2FsbCB0aGUgdXBkYXRlSW5zdGFuY2VTdHlsZXMgaG9va1xuICAgIHRoaXMudXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKTtcblxuICAgIC8vIENoZWNrIGlmIGluc3RhbmNlIHN0eWxlcyBuZWVkIHRvIGJlIHJlcmVuZGVyZWRcbiAgICBpZiAodGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlU3R5bGVzID0gdW5zYWZlSFRNTChcbiAgICAgICAgYDxzdHlsZSBpZD1cIl9faW5zdGFuY2Utc3R5bGVzXCI+JHtjb25zdHJ1Y3RJbnN0YW5jZVN0eWxlcyhcbiAgICAgICAgICB0aGlzLl9faW5zdGFuY2VTdHlsZVNoZWV0TWFwXG4gICAgICAgICl9PC9zdHlsZT5gXG4gICAgICApO1xuICAgICAgdGhpcy5fX2luc3RhbmNlU3R5bGVTaGVldE5lZWRzVXBkYXRlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICB0aGlzLl9fZmlyc3RVcGRhdGVkID0gdHJ1ZTtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICB0aGlzLnN1YnMuZm9yRWFjaCgodW5zdWIpID0+IHVuc3ViKCkpO1xuICAgIHRoaXMuc3VicyA9IFtdO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgUHJvcGVydHlNYXBwZXIsIFN0eWxlUHJvcGVydHkgfSBmcm9tICcuL2Nzcy1pbi1qcy50eXBlcyc7XG5cbmNvbnN0IHByb3BlcnR5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBzdHJpbmdbXT4gPSB7XG4gIG06ICdtYXJnaW4nLFxuICBteDogWydtYXJnaW5MZWZ0JywgJ21hcmdpblJpZ2h0J10sXG4gIG15OiBbJ21hcmdpblRvcCcsICdtYXJnaW5Cb3R0b20nXSxcbiAgbXQ6ICdtYXJnaW5Ub3AnLFxuICBtcjogJ21hcmdpblJpZ2h0JyxcbiAgbWI6ICdtYXJnaW5Cb3R0b20nLFxuICBtbDogJ21hcmdpbkxlZnQnLFxuICBwOiAncGFkZGluZycsXG4gIHB4OiBbJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCddLFxuICBweTogWydwYWRkaW5nVG9wJywgJ3BhZGRpbmdCb3R0b20nXSxcbiAgcHQ6ICdwYWRkaW5nVG9wJyxcbiAgcHI6ICdwYWRkaW5nUmlnaHQnLFxuICBwYjogJ3BhZGRpbmdCb3R0b20nLFxuICBwbDogJ3BhZGRpbmdMZWZ0JyxcbiAgZDogJ2Rpc3BsYXknLFxuICBhOiAnYWxpZ25JdGVtcycsXG4gIGo6ICdqdXN0aWZ5Q29udGVudCcsXG4gIGRpcmVjdGlvbjogJ2ZsZXhEaXJlY3Rpb24nLFxuICBzaHJpbms6ICdmbGV4U2hyaW5rJyxcbiAgZ3JvdzogJ2ZsZXhHcm93JyxcbiAgd3JhcDogJ2ZsZXhXcmFwJyxcbiAgdzogJ3dpZHRoJyxcbiAgbWF4dzogJ21heFdpZHRoJyxcbiAgbWludzogJ21pbldpZHRoJyxcbiAgaDogJ2hlaWdodCcsXG4gIG1heGg6ICdtYXhIZWlnaHQnLFxuICBtaW5oOiAnbWluSGVpZ2h0JyxcbiAgZnM6ICdmb250U2l6ZScsXG4gIGZ3OiAnZm9udFdlaWdodCcsXG4gIGJnOiAnYmFja2dyb3VuZCcsXG4gIGM6ICdjb2xvcicsXG4gIGVsZXZhdGlvbjogJ2JveFNoYWRvdycsXG59O1xuXG4vKiogTWFwcyBwcm9wZXJ0eSBzaG9ydGhhbmQgdmFsdWVzIHRvIG9uZSBvciBtYW55IGZ1bGwgY3NzIHByb3BlcnRpZXMgKi9cbmV4cG9ydCBjb25zdCBwcm9wU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMucmVkdWNlKChhY2MsIHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRQcm9wcyA9IHByb3BlcnR5TWFwW3Byb3BNYXAucHJvcF0gPz8gcHJvcE1hcC5wcm9wO1xuICAgIHJldHVybiBbXG4gICAgICAuLi5hY2MsXG4gICAgICAuLi4oQXJyYXkuaXNBcnJheShtYXBwZWRQcm9wcylcbiAgICAgICAgPyBtYXBwZWRQcm9wcy5tYXAoKHByb3ApID0+ICh7IHByb3AsIHZhbHVlOiBwcm9wTWFwLnZhbHVlIH0pKVxuICAgICAgICA6IFt7IHByb3A6IG1hcHBlZFByb3BzLCB2YWx1ZTogcHJvcE1hcC52YWx1ZSB9XSksXG4gICAgXTtcbiAgfSwgW10pO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBAbW9ydGFyL3N0eWxlcyBjb25maWcgdmFsdWUgZm9yIGEgZ2l2ZW4gZG90IG5vdGF0ZWQgc3RyaW5nLlxuICogTnVtYmVycyBhbmQgbm9uLWRvdCBub3RhdGVkIHN0cmluZyB3aWxsIGp1c3QgYmUgcmV0dXJuZWQgYXMgaXMuXG4gKi9cbmV4cG9ydCBjb25zdCBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlID0gKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIgPT4ge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbmZpZ1BhdGggPSB2YWx1ZS5zcGxpdCgnLicpO1xuICAgICAgY29uc3QgY29uZmlnVmFsdWUgPSBjb25maWdQYXRoLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGFjY1trZXldO1xuICAgICAgfSwgY29uZmlnKTtcbiAgICAgIHJldHVybiBjb25maWdWYWx1ZSA/PyB2YWx1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufTtcblxuLyoqIE1hcHMgZG90IG5vdGF0ZWQgc3RyaW5nIHZhbHVlcyB0byB0aGVtZSBjb25maWcgdmFyaWFibGVzICovXG5leHBvcnQgY29uc3QgZG90U3RyaW5nVG9Db25maWdWYWx1ZU1hcHBlcjogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMucmVkdWNlKChhY2MsIHByb3BNYXApID0+IHtcbiAgICBjb25zdCBjb25maWdWYWx1ZSA9IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUocHJvcE1hcC52YWx1ZSk7XG4gICAgaWYgKGNvbmZpZ1ZhbHVlKSB7XG4gICAgICBwcm9wTWFwLnZhbHVlID0gY29uZmlnVmFsdWUgPz8gcHJvcE1hcC52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi5hY2MsIHByb3BNYXBdO1xuICB9LCBbXSk7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwTnVtYmVyVG9QeCA9ICh2YWw6IHN0cmluZyB8IG51bWJlciB8IG51bGwpID0+IHtcbiAgaWYgKCF2YWwpIHtcbiAgICByZXR1cm4gdmFsIGFzIG51bGw7XG4gIH1cbiAgcmV0dXJuICFpc05hTihOdW1iZXIodmFsKSkgPyBgJHt2YWx9cHhgIDogKHZhbCBhcyBzdHJpbmcpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcFB4VG9OdW1iZXIgPSAodmFsOiBzdHJpbmcgfCBudWxsKSA9PiB7XG4gIGlmICghdmFsKSB7XG4gICAgcmV0dXJuIHZhbCBhcyBudWxsO1xuICB9XG4gIHJldHVybiBOdW1iZXIodmFsLnJlcGxhY2UoJ3B4JywgJycpKTtcbn07XG5cbi8qKiBNYXBzIHRoZSB2YWx1ZXMgb2YgYW55IGdpdmVuIHByb3BzIHRvIHB4IHVuaXRzIGlmIGl0IGlzIGEgbnVtYmVyICovXG5leHBvcnQgY29uc3QgbnVtYmVyVG9QeDogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBtYXBOdW1iZXJUb1B4KHByb3BNYXAudmFsdWUpO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3Qgc3BhY2luZ01hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgJzAnOiBjb25maWcuc3BhY2Uubm9uZSxcbiAgJzEnOiBjb25maWcuc3BhY2UueHMsXG4gICcyJzogY29uZmlnLnNwYWNlLnNtLFxuICAnMyc6IGNvbmZpZy5zcGFjZS5tZCxcbiAgJzQnOiBjb25maWcuc3BhY2UubGcsXG4gICc1JzogY29uZmlnLnNwYWNlLnhsLFxuICAnNic6IGNvbmZpZy5zcGFjZS54eGwsXG4gICc3JzogY29uZmlnLnNwYWNlLnh4eGwsXG4gICdub25lJzogY29uZmlnLnNwYWNlLm5vbmUsXG4gICd4eHMnOiBjb25maWcuc3BhY2UueHhzLFxuICAneHMnOiBjb25maWcuc3BhY2UueHMsXG4gICdzbSc6IGNvbmZpZy5zcGFjZS5zbSxcbiAgJ21kJzogY29uZmlnLnNwYWNlLm1kLFxuICAnbGcnOiBjb25maWcuc3BhY2UubGcsXG4gICd4bCc6IGNvbmZpZy5zcGFjZS54bCxcbiAgJ3h4bCc6IGNvbmZpZy5zcGFjZS54eGwsXG4gICd4eHhsJzogY29uZmlnLnNwYWNlLnh4eGwsXG59O1xuXG4vKiogTWFwcyBzcGFjaW5nIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgc3BhY2luZyBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3Qgc3BhY2luZ1ZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gc3BhY2luZ01hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgYm9yZGVyUmFkaXVzTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBub25lOiBjb25maWcuYm9yZGVyLnJhZGl1cy5ub25lLFxuICB4czogY29uZmlnLmJvcmRlci5yYWRpdXMueHMsXG4gIHNtOiBjb25maWcuYm9yZGVyLnJhZGl1cy5zbSxcbiAgbWQ6IGNvbmZpZy5ib3JkZXIucmFkaXVzLm1kLFxuICBsZzogY29uZmlnLmJvcmRlci5yYWRpdXMubGcsXG4gIHhsOiBjb25maWcuYm9yZGVyLnJhZGl1cy54bCxcbiAgeHhsOiBjb25maWcuYm9yZGVyLnJhZGl1cy54eGwsXG4gIGZ1bGw6IGNvbmZpZy5ib3JkZXIucmFkaXVzLmZ1bGwsXG59O1xuXG4vKiogTWFwcyBib3JkZXIgcmFkaXVzIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgYm9yZGVyIHJhZGl1cyBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBib3JkZXJSYWRpdXNNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGJvcmRlcldpZHRoTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBub25lOiBjb25maWcuYm9yZGVyLndpZHRoLm5vbmUsXG4gIHNtOiBjb25maWcuYm9yZGVyLndpZHRoLnNtLFxuICBtZDogY29uZmlnLmJvcmRlci53aWR0aC5tZCxcbiAgbGc6IGNvbmZpZy5ib3JkZXIud2lkdGgubGcsXG59O1xuXG4vKiogTWFwcyBib3JkZXIgd2lkdGggdmFsdWVzIGZyb20gZGVzaWduYXRlZCBib3JkZXIgd2lkdGggc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGJvcmRlcldpZHRoVmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBib3JkZXJXaWR0aE1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3Qgb3BhY2l0eU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgeHhsOiBjb25maWcub3BhY2l0eS54eGwsXG4gIHhsOiBjb25maWcub3BhY2l0eS54bCxcbiAgbGc6IGNvbmZpZy5vcGFjaXR5LmxnLFxuICBtZDogY29uZmlnLm9wYWNpdHkubWQsXG4gIHNtOiBjb25maWcub3BhY2l0eS5zbSxcbiAgeHM6IGNvbmZpZy5vcGFjaXR5LnhzLFxuICB4eHM6IGNvbmZpZy5vcGFjaXR5Lnh4cyxcbiAgeHh4czogY29uZmlnLm9wYWNpdHkueHh4cyxcbn07XG5cbi8qKiBNYXBzIG9wYWNpdHkgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBvcGFjaXR5IHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBvcGFjaXR5VmFsU2hvcnRoYW5kczogUHJvcGVydHlNYXBwZXIgPSAocHJvcHM6IFN0eWxlUHJvcGVydHlbXSkgPT4ge1xuICByZXR1cm4gcHJvcHMubWFwKChwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWUgPSBvcGFjaXR5TWFwW3Byb3BNYXAudmFsdWVdID8/IHByb3BNYXAudmFsdWU7XG4gICAgcmV0dXJuIHsgcHJvcDogcHJvcE1hcC5wcm9wLCB2YWx1ZTogbWFwcGVkVmFsdWUgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBmb250V2VpZ2h0TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBsaWdodDogY29uZmlnLmZvbnQud2VpZ2h0LmxpZ2h0LFxuICByZWd1bGFyOiBjb25maWcuZm9udC53ZWlnaHQucmVndWxhcixcbiAgbWVkaXVtOiBjb25maWcuZm9udC53ZWlnaHQubWVkaXVtLFxuICBib2xkOiBjb25maWcuZm9udC53ZWlnaHQuYm9sZCxcbn07XG5cbi8qKiBNYXBzIGZvbnQtd2VpZ2h0IHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgc3BhY2luZyBzaG9ydGhhbmRzICovXG5leHBvcnQgY29uc3QgZm9udFdlaWdodFZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZm9udFdlaWdodE1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcblxuY29uc3QgZm9udFNpemVNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHh4czogJzAuNjI1cmVtJyxcbiAgeHM6ICcwLjc1cmVtJyxcbiAgc206ICcwLjg3NXJlbScsXG4gIG1kOiAnMXJlbScsXG4gIGxnOiAnMS4yNXJlbScsXG4gIHhsOiAnMS41cmVtJyxcbiAgeHhsOiAnMS43NXJlbScsXG59O1xuXG4vKiogTWFwcyBmb250LXNpemUgdmFsdWVzIGZyb20gZGVzaWduYXRlZCBzcGFjaW5nIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBmb250U2l6ZVZhbFNob3J0aGFuZHM6IFByb3BlcnR5TWFwcGVyID0gKHByb3BzOiBTdHlsZVByb3BlcnR5W10pID0+IHtcbiAgcmV0dXJuIHByb3BzLm1hcCgocHJvcE1hcCkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZm9udFNpemVNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGZvbnRGYW1pbHlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHNhbnM6IGNvbmZpZy5mb250LmZhbWlseS5zYW5zLFxuICBzZXJpZjogY29uZmlnLmZvbnQuZmFtaWx5LnNlcmlmLFxuICBtb25vOiBjb25maWcuZm9udC5mYW1pbHkubW9ubyxcbn07XG5cbi8qKiBNYXBzIGZvbnQtZmFtaWx5IHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgZm9udC1mYW1pbHkgc2hvcnRoYW5kcyAqL1xuZXhwb3J0IGNvbnN0IGZvbnRGYW1pbHlWYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGZvbnRGYW1pbHlNYXBbcHJvcE1hcC52YWx1ZV0gPz8gcHJvcE1hcC52YWx1ZTtcbiAgICByZXR1cm4geyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBtYXBwZWRWYWx1ZSB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGVsZXZhdGlvbk1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgejA6IGNvbmZpZy5lbGV2YXRpb24uejAsXG4gIHoxOiBjb25maWcuZWxldmF0aW9uLnoxLFxuICB6MjogY29uZmlnLmVsZXZhdGlvbi56MixcbiAgejM6IGNvbmZpZy5lbGV2YXRpb24uejMsXG4gIHo0OiBjb25maWcuZWxldmF0aW9uLno0LFxufTtcblxuLyoqIE1hcHMgZWxldmF0aW9uIHZhbHVlcyBmcm9tIGRlc2lnbmF0ZWQgZWxldmF0aW9uIHNob3J0aGFuZHMgKi9cbmV4cG9ydCBjb25zdCBlbGV2YXRpb25WYWxTaG9ydGhhbmRzOiBQcm9wZXJ0eU1hcHBlciA9IChwcm9wczogU3R5bGVQcm9wZXJ0eVtdKSA9PiB7XG4gIHJldHVybiBwcm9wcy5tYXAoKHByb3BNYXApID0+IHtcbiAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGVsZXZhdGlvbk1hcFtwcm9wTWFwLnZhbHVlXSA/PyBwcm9wTWFwLnZhbHVlO1xuICAgIHJldHVybiB7IHByb3A6IHByb3BNYXAucHJvcCwgdmFsdWU6IG1hcHBlZFZhbHVlIH07XG4gIH0pO1xufTtcbiIsICJpbXBvcnQgeyBjb25maWcsIFNlbGVjdG9yT3B0aW9ucyB9IGZyb20gJ0Btb3J0YXIvc3R5bGVzJztcbmltcG9ydCB7XG4gIFNlbGVjdG9yTWV0YWRhdGEsXG4gIFNlbGVjdG9yU3R5bGVzLFxuICBTdHlsZU1hcCxcbiAgU3R5bGVNYXBDYWxsYmFjayxcbiAgU3R5bGVQcm9wZXJ0eSxcbn0gZnJvbSAnLi9jc3MtaW4tanMudHlwZXMnO1xuaW1wb3J0IHtcbiAgcHJvcFNob3J0aGFuZHMsXG4gIHNwYWNpbmdWYWxTaG9ydGhhbmRzLFxuICBudW1iZXJUb1B4LFxuICBkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlTWFwcGVyLFxuICBib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLFxuICBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMsXG4gIG9wYWNpdHlWYWxTaG9ydGhhbmRzLFxuICBmb250V2VpZ2h0VmFsU2hvcnRoYW5kcyxcbiAgZm9udEZhbWlseVZhbFNob3J0aGFuZHMsXG4gIGVsZXZhdGlvblZhbFNob3J0aGFuZHMsXG4gIGZvbnRTaXplVmFsU2hvcnRoYW5kcyxcbn0gZnJvbSAnLi9jc3MtaW4tanMucHJvcGVydHktbWFwcGVycyc7XG5cbi8qKiBTcGVjaWZpZXMgd2hpY2ggcHJvcGVydHkgbWFwcGVycyBzaG91bGQgYmUgY2FsbGVkIGFuZCBpbiB3aGF0IG9yZGVyIGZvciBhIGdpdmVuIHByb3AgKi9cbmNvbnN0IHByb3BNYXBwZXJzID0ge1xuICBoZWlnaHQ6IFtudW1iZXJUb1B4XSxcbiAgbWluSGVpZ2h0OiBbbnVtYmVyVG9QeF0sXG4gIG1heEhlaWdodDogW251bWJlclRvUHhdLFxuICB3aWR0aDogW251bWJlclRvUHhdLFxuICBtaW5XaWR0aDogW251bWJlclRvUHhdLFxuICBtYXhXaWR0aDogW251bWJlclRvUHhdLFxuICB0b3A6IFtudW1iZXJUb1B4XSxcbiAgcmlnaHQ6IFtudW1iZXJUb1B4XSxcbiAgYm90dG9tOiBbbnVtYmVyVG9QeF0sXG4gIGxlZnQ6IFtudW1iZXJUb1B4XSxcbiAgbWFyZ2luOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBtYXJnaW5Ub3A6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpblJpZ2h0OiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBtYXJnaW5Cb3R0b206IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG1hcmdpbkxlZnQ6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmc6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmdUb3A6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIHBhZGRpbmdSaWdodDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ0JvdHRvbTogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcGFkZGluZ0xlZnQ6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGdhcDogW3NwYWNpbmdWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgcm93R2FwOiBbc3BhY2luZ1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBjb2x1bW5HYXA6IFtzcGFjaW5nVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGZvbnRTaXplOiBbZm9udFNpemVWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgZm9udFdlaWdodDogW2ZvbnRXZWlnaHRWYWxTaG9ydGhhbmRzXSxcbiAgZm9udEZhbWlseTogW2ZvbnRGYW1pbHlWYWxTaG9ydGhhbmRzXSxcbiAgYm9yZGVyUmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIGJvcmRlcldpZHRoOiBbYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFtib3JkZXJSYWRpdXNWYWxTaG9ydGhhbmRzLCBudW1iZXJUb1B4XSxcbiAgYm9yZGVyVG9wTGVmdFJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogW2JvcmRlclJhZGl1c1ZhbFNob3J0aGFuZHMsIG51bWJlclRvUHhdLFxuICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBbYm9yZGVyUmFkaXVzVmFsU2hvcnRoYW5kcywgbnVtYmVyVG9QeF0sXG4gIG9wYWNpdHk6IFtvcGFjaXR5VmFsU2hvcnRoYW5kc10sXG4gIGJveFNoYWRvdzogW2VsZXZhdGlvblZhbFNob3J0aGFuZHNdLFxufTtcblxuLyoqXG4gKiBQYXJzZXMgcHJvcGVydGllcyB0byB0aGVpciBhY3R1YWwgcHJvcGVydHkgbWFwcGluZ3MgYWNjb3JkaW5nIHRvIHRoZVxuICogbWFwcGluZyBmdW5jdGlvbiBwaXBlbGluZXMgZGVmaW5lZCBhYm92ZVxuICovXG5leHBvcnQgY29uc3QgcGFyc2VQcm9wU2hvcnRoYW5kcyA9IChwcm9wOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBTdHlsZVByb3BlcnR5W10gPT4ge1xuICAvLyBDYXN0IHRvIHN0cmluZyB2YWx1ZXNcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB2YWx1ZSA9IGAke3ZhbHVlfWA7XG4gIH1cbiAgLy8gRXhlYyBwcm9wIHRyYW5zZm9ybXNcbiAgLy8gVGhlIHByb3Agc2hvcnRoYW5kcyBtYXBwZXIgaXMgcnVuIGFnYWluc3QgZXZlcnkgcHJvcFxuICBjb25zdCBtYXBwZWRQcm9wcyA9IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWVNYXBwZXIocHJvcFNob3J0aGFuZHMoW3sgcHJvcCwgdmFsdWUgfV0pKTtcbiAgcmV0dXJuIG1hcHBlZFByb3BzLnJlZHVjZSgoYWNjLCBwcm9wTWFwKSA9PiB7XG4gICAgY29uc3QgbWFwcGVycyA9IHByb3BNYXBwZXJzW3Byb3BNYXAucHJvcF07XG4gICAgaWYgKG1hcHBlcnMpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgLi4ubWFwcGVycy5yZWR1Y2UoXG4gICAgICAgICAgKGFjYywgbWFwcGVyKSA9PiBtYXBwZXIoYWNjKSxcbiAgICAgICAgICBbeyBwcm9wOiBwcm9wTWFwLnByb3AsIHZhbHVlOiBwcm9wTWFwLnZhbHVlIH1dXG4gICAgICAgICksXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY2MucHVzaChwcm9wTWFwKTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICB9LCBbXSk7XG59O1xuXG4vKipcbiAqIFBhcnNlcyBzdHlsZU1hcCB2YWx1ZXMgdG8gc2VsZWN0b3IgKyBzdHlsZSBpbmZvIHVzZWQgZm9yXG4gKiB1cGRhdGluZyBDU1NTdHlsZVNoZWV0cyBvciA8c3R5bGU+IHRhZ3MuXG4gKi9cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVNlbGVjdG9yc0Zyb21TdHlsZU1hcCA9IChcbiAgc2VsZWN0b3JGbjogKG9wdGlvbnM/OiBTZWxlY3Rvck9wdGlvbnMpID0+IHN0cmluZyxcbiAgc3R5bGVNYXA6IFN0eWxlTWFwXG4pID0+IHtcbiAgY29uc3QgcGFyc2VkU2VsZWN0b3JzOiBTZWxlY3RvclN0eWxlc1tdID0gW107XG4gIGNvbnN0IHNlbGVjdG9yUXVldWU6IFNlbGVjdG9yTWV0YWRhdGFbXSA9IFt7IHNlbGVjdG9yOiBzZWxlY3RvckZuKCksIHN0eWxlTWFwIH1dO1xuICBjb25zdCBicmVha3BvaW50S2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZy5ncmlkLmJyZWFrcG9pbnQpO1xuXG4gIC8vIExvb3AgdGhyb3VnaCBzZWxlY3RvciBxdWV1ZSB1bnRpbCB0aGV5IGhhdmUgYWxsIGJlZW4gZXhoYXVzdGVkXG4gIHdoaWxlIChzZWxlY3RvclF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBzZWxlY3Rvck1hcCA9IHNlbGVjdG9yUXVldWUuc2hpZnQoKTtcblxuICAgIC8vIFB1c2ggcGFyc2VkIHNlbGVjdG9ycyBvbnRvIHRoZSByZXR1cm4gbGlzdFxuICAgIHBhcnNlZFNlbGVjdG9ycy5wdXNoKHtcbiAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvck1hcC5zZWxlY3RvcixcbiAgICAgIHNlbGVjdG9yV3JhcHBlcjogc2VsZWN0b3JNYXAuc2VsZWN0b3JXcmFwcGVyLFxuICAgICAgc3R5bGU6IE9iamVjdC5rZXlzKHNlbGVjdG9yTWFwLnN0eWxlTWFwKS5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBzZWxlY3Rvck1hcC5zdHlsZU1hcFtwcm9wXTtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2UgY2FsbGJhY2sgdmFsdWVzXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhbHVlID0gKHZhbHVlIGFzIFN0eWxlTWFwQ2FsbGJhY2spKGNvbmZpZyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXJzZSBvYmplY3QgdmFsdWVzXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyBRdWV1ZSB1cCBzZWxlY3RvcnMgZm9yIHBzZXVkby1jbGFzc2VzXG4gICAgICAgICAgaWYgKHByb3Auc3RhcnRzV2l0aCgnJjonKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yRm4oeyBpbmZpeDogcHJvcC5yZXBsYWNlKCcmJywgJycpIH0pLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogc2VsZWN0b3JNYXAuc2VsZWN0b3JXcmFwcGVyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBRdWV1ZSB1cCBicmVha3BvaW50IHNlbGVjdG9yIHNob3J0aGFuZHNcbiAgICAgICAgICBlbHNlIGlmIChicmVha3BvaW50S2V5cy5pbmNsdWRlcyhwcm9wKSkge1xuICAgICAgICAgICAgc2VsZWN0b3JRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLFxuICAgICAgICAgICAgICBzdHlsZU1hcDogdmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdG9yV3JhcHBlcjogYEBtZWRpYSAobWluLXdpZHRoOiR7Y29uZmlnLmdyaWQuYnJlYWtwb2ludFtwcm9wXX0pYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUXVldWUgdXAgc2VsZWN0b3JzIGZvciBtZWRpYS9jb250YWluZXIgcXVlcmllc1xuICAgICAgICAgIGVsc2UgaWYgKHByb3Auc3RhcnRzV2l0aCgnQG1lZGlhJykgfHwgcHJvcC5zdGFydHNXaXRoKCdAY29udGFpbmVyJykpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvck1hcC5zZWxlY3RvcixcbiAgICAgICAgICAgICAgc3R5bGVNYXA6IHZhbHVlLFxuICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IHByb3AsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFF1ZXVlIHVwIHNlbGVjdG9ycyBmb3Igc2xvdHRlZCBxdWVyaWVzXG4gICAgICAgICAgZWxzZSBpZiAocHJvcC5zdGFydHNXaXRoKCc6OnNsb3R0ZWQnKSB8fCBwcm9wLnN0YXJ0c1dpdGgoJyYgOjpzbG90dGVkJykpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvckZuKHsgcG9zdGZpeDogJyAnICsgcHJvcC5yZXBsYWNlKCcmICcsICcnKSB9KSxcbiAgICAgICAgICAgICAgc3R5bGVNYXA6IHZhbHVlLFxuICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IHNlbGVjdG9yTWFwLnNlbGVjdG9yV3JhcHBlcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUXVldWUgdXAgc2VsZWN0b3JzIGZvciB2YWx1ZSBicmVha3BvaW50IG9iamVjdHNcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIExvb3AgaW4gb3JkZXIgaGVyZSBzbyB0aGV5IG92ZXJyaWRlIGVhY2ggb3RoZXIgY29ycmVjdGx5XG4gICAgICAgICAgICBicmVha3BvaW50S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlW2tleV0pIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvclF1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yTWFwLnNlbGVjdG9yLCAvLyBpbmhlcml0IHRoZSBzZWxlY3RvciBoZXJlIGluIGNhc2Ugd2UgYXJlIHdpdGhpbiBhIHBzZXVkby1jbGFzc1xuICAgICAgICAgICAgICAgICAgc3R5bGVNYXA6IHsgW3Byb3BdOiB2YWx1ZVtrZXldIH0sXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcldyYXBwZXI6IGBAbWVkaWEgKG1pbi13aWR0aDoke2NvbmZpZy5ncmlkLmJyZWFrcG9pbnRba2V5XX0pYCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIG5vcm1hbCBwcm9wc1xuICAgICAgICBjb25zdCBwcm9wcyA9IHBhcnNlUHJvcFNob3J0aGFuZHMocHJvcCwgdmFsdWUgYXMgc3RyaW5nIHwgbnVtYmVyKTtcbiAgICAgICAgcmV0dXJuIGAke2FjY30ke3Byb3BzLnJlZHVjZSgoYWNjMiwgeyBwcm9wLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgLy8gQ29udmVydCBwcm9wZXJ0eSBuYW1lcyBmcm9tIGNhbWVsLWNhc2UgdG8gZGFzaC1jYXNlLCBpLmUuOlxuICAgICAgICAgIC8vICBgYmFja2dyb3VuZENvbG9yYCAtPiBgYmFja2dyb3VuZC1jb2xvcmBcbiAgICAgICAgICAvLyBWZW5kb3ItcHJlZml4ZWQgbmFtZXMgbmVlZCBhbiBleHRyYSBgLWAgYXBwZW5kZWQgdG8gZnJvbnQ6XG4gICAgICAgICAgLy8gIGB3ZWJraXRBcHBlYXJhbmNlYCAtPiBgLXdlYmtpdC1hcHBlYXJhbmNlYFxuICAgICAgICAgIC8vIEV4Y2VwdGlvbiBpcyBhbnkgcHJvcGVydHkgbmFtZSBjb250YWluaW5nIGEgZGFzaCwgaW5jbHVkaW5nXG4gICAgICAgICAgLy8gY3VzdG9tIHByb3BlcnRpZXM7IHdlIGFzc3VtZSB0aGVzZSBhcmUgYWxyZWFkeSBkYXNoLWNhc2VkIGkuZS46XG4gICAgICAgICAgLy8gIGAtLW15LWJ1dHRvbi1jb2xvcmAgLS0+IGAtLW15LWJ1dHRvbi1jb2xvcmBcbiAgICAgICAgICBwcm9wID0gcHJvcC5yZXBsYWNlKC8oPzpeKHdlYmtpdHxtb3p8bXN8byl8KSg/PVtBLVpdKS9nLCAnLSQmJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICByZXR1cm4gYCR7YWNjMn0ke3Byb3B9OiR7dmFsdWV9O2A7XG4gICAgICAgIH0sICcnKX1gO1xuICAgICAgfSwgJycpLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZFNlbGVjdG9ycztcbn07XG5cbmNvbnN0IHBhcnNlU2VsZWN0b3JzID0gKHN0eWxlcywgc2VsZWN0b3JzPzogYW55KSA9PiB7XG4gIGlmICghc2VsZWN0b3JzKSB7XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYCR7c3R5bGVzfSR7c2VsZWN0b3JzLnJlZHVjZSgoYWNjLCB7IHNlbGVjdG9yLCBzZWxlY3RvcldyYXBwZXIsIHN0eWxlIH0pID0+IHtcbiAgICAgIGlmIChzdHlsZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJhc2UgPSBgJHtzZWxlY3Rvcn17JHtzdHlsZX19YDtcbiAgICAgIGNvbnN0IHdyYXBwZWQgPSBzZWxlY3RvcldyYXBwZXIgPyBgJHtzZWxlY3RvcldyYXBwZXJ9eyR7YmFzZX19YCA6IGJhc2U7XG4gICAgICByZXR1cm4gYCR7YWNjfSR7d3JhcHBlZH1gO1xuICAgIH0sICcnKX1gO1xuICB9XG59O1xuXG4vKipcbiAqIENvbWJpbmVzIGFsbCBpbnN0YW5jZSBzdHlsZU1hcCBzZWxlY3RvcnMgKyBzdHlsZSBpbmZvIGludG8gb25lIGNzc1RleHRcbiAqIHVzZWQgZm9yIHVwZGF0aW5nIENTU1N0eWxlU2hlZXRzIG9yIDxzdHlsZT4gdGFncy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdEluc3RhbmNlU3R5bGVzID0gKGluc3RhbmNlU3R5bGVzTWFwKSA9PiB7XG4gIGxldCBzdHlsZXMgPSAnJztcblxuICAvLyBTb3J0IGtleXMgaW4gYWxwaGFiZXRpY2FsIG9yZGVyIHRvIGhlbHAgYXZvaWQgaHlkcmF0aW9uIG1pc21hdGNoIGVycm9yc1xuICBbLi4uaW5zdGFuY2VTdHlsZXNNYXAuZW50cmllcygpXVxuICAgIC5maWx0ZXIoKFtrZXksIF9dKSA9PiBrZXkgIT09ICdzZScgJiYga2V5ICE9PSAnc3AnKVxuICAgIC5zb3J0KChhLCBiKSA9PiBiWzBdIC0gYVswXSlcbiAgICAuZm9yRWFjaCgoW18sIHNlbGVjdG9yc10pID0+IHtcbiAgICAgIHN0eWxlcyA9IHBhcnNlU2VsZWN0b3JzKHN0eWxlcywgc2VsZWN0b3JzKTtcbiAgICB9KTtcblxuICAvLyBBbHdheXMgcGFyc2UgYHNlYCBhbmQgYHNwYCBzZWxlY3RvcnMgbGFzdCB0byBoZWxwIGF2b2lkIGh5ZHJhdGlvbiBtaXNtYXRjaCBlcnJvcnNcbiAgLy8gYW5kIGVuc3VyZSB0aGV5IG92ZXJyaWRlIGFueSBjb21wb25lbnQgbGV2ZWwgZHluYW1pYyBzdHlsZXMuXG4gIHN0eWxlcyA9IGAke3N0eWxlc30ke3BhcnNlU2VsZWN0b3JzKCcnLCBpbnN0YW5jZVN0eWxlc01hcC5nZXQoJ3NlJykpfSR7cGFyc2VTZWxlY3RvcnMoXG4gICAgJycsXG4gICAgaW5zdGFuY2VTdHlsZXNNYXAuZ2V0KCdzcCcpXG4gICl9YDtcbiAgcmV0dXJuIHN0eWxlcztcbn07XG4iLCAiaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICdsaXQtaHRtbC9pcy1zZXJ2ZXIuanMnO1xuXG5leHBvcnQgY29uc3QgaXNTc3IgPSAoKSA9PiBpc1NlcnZlcjtcblxuZXhwb3J0IGNvbnN0IGlzQnJvd3Nlckxpa2UgPSAoKSA9PiBnbG9iYWxUaGlzICE9PSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkUmVzaXplQ29udHJvbGxlciA9IChyZXNpemVDb250cm9sbGVyKSA9PlxuICByZXNpemVDb250cm9sbGVyPy5bJ19vYnNlcnZlciddPy5bJ3Vub2JzZXJ2ZSddO1xuXG5pbnRlcmZhY2UgTmF2aWdhdG9yVUFEYXRhIHtcbiAgYnJhbmRzOiBBcnJheTx7IGJyYW5kOiBzdHJpbmc7IHZlcnNpb246IHN0cmluZyB9PjtcbiAgbW9iaWxlOiBib29sZWFuO1xuICBwbGF0Zm9ybTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxhdGZvcm0oKTogc3RyaW5nIHtcbiAgY29uc3QgdWFEYXRhID0gKG5hdmlnYXRvciBhcyBhbnkpLnVzZXJBZ2VudERhdGEgYXMgTmF2aWdhdG9yVUFEYXRhIHwgdW5kZWZpbmVkO1xuXG4gIGlmICh1YURhdGE/LnBsYXRmb3JtKSB7XG4gICAgcmV0dXJuIHVhRGF0YS5wbGF0Zm9ybTtcbiAgfVxuXG4gIHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm07XG59XG5cbmV4cG9ydCBjb25zdCBpc1BsYXRmb3JtID0gKHBsYXRmb3JtOiAnSU9TJykgPT4ge1xuICBpZiAoIWlzU3NyKCkpIHtcbiAgICBpZiAocGxhdGZvcm0gPT09ICdJT1MnKSB7XG4gICAgICByZXR1cm4gL2lQKGhvbmV8YWR8b2QpfGlPUy8udGVzdChnZXRQbGF0Zm9ybSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4iLCAiY29uc3QgbmF0aXZlVmFsaWRpdHlTdGF0ZXM6IEFycmF5PGtleW9mIFZhbGlkaXR5U3RhdGU+ID0gW1xuICAnYmFkSW5wdXQnLFxuICAnY3VzdG9tRXJyb3InLFxuICAncGF0dGVybk1pc21hdGNoJyxcbiAgJ3JhbmdlT3ZlcmZsb3cnLFxuICAncmFuZ2VVbmRlcmZsb3cnLFxuICAnc3RlcE1pc21hdGNoJyxcbiAgJ3Rvb0xvbmcnLFxuICAndG9vU2hvcnQnLFxuICAndHlwZU1pc21hdGNoJyxcbiAgJ3ZhbHVlTWlzc2luZycsXG5dO1xuXG4vKipcbiAqIEN1c3RvbSB2YWxpZGF0b3IgZm9yIHRoZSBgQG9wZW4td2MvZm9ybS1jb250cm9sYCB0aGF0IGxlYW5zIG9uIGFuIGludGVybmFsXG4gKiBpbnB1dCB0byBmb3J3YXJkIG5hdGl2ZSB2YWxpZGF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBpbm5lcklucHV0VmFsaWRhdG9ycyA9IG5hdGl2ZVZhbGlkaXR5U3RhdGVzLm1hcCgoa2V5KSA9PiAoe1xuICBrZXksXG4gIGlzVmFsaWQoaW5zdGFuY2U6IEhUTUxFbGVtZW50ICYgeyB2YWxpZGF0aW9uVGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50IH0pIHtcbiAgICBpZiAoaW5zdGFuY2UudmFsaWRhdGlvblRhcmdldCkge1xuICAgICAgcmV0dXJuICFpbnN0YW5jZS52YWxpZGF0aW9uVGFyZ2V0LnZhbGlkaXR5W2tleV07XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxufSkpO1xuIiwgIi8qKlxuICogTk9URTpcbiAqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgaW1wbGVtZW50YXRpb24gZm9yIGFuIGV4dHJlbWVseSBzaW1wbGUgYW5kIGxpZ2h0d2VpZ2h0XG4gKiByZWFjdGl2ZSBzb2x1dGlvbiBsb29zZWx5IGJhc2VkIG9uIHNvbGlkLWpzIHN0eWxlIHNpZ25hbHMuIEl0IGVuYWJsZXMgYmFzaWNcbiAqIHJlYWN0aXZlIHN1YnNjcmlwdGlvbnMgYW5kIGNvbXB1dGVkIHNpZ25hbHMgb2Ygb25lIG9yIG1vcmUgb3RoZXIgZGVwZW5kZW5jeSBzaWduYWxzLlxuICpcbiAqIEluIGl0cyBjdXJyZW50IHN0YXRlLCBpdCBpcyBub3QgcGVyZmVjdCBhbmQgZG9lcyBub3QgaGFuZGxlIGFsbCBlZGdlIGNhc2VzLiBGb3JcbiAqIGV4YW1wbGUsIGlmIHlvdSBoYXZlIG11bHRpcGxlIGxheWVycyBvZiBjb21wdXRlZCBzdGF0ZSB3aXRoIGEgc2luZ2xlIGRlcGVuZGVuY3lcbiAqIHNoYXJlZCBtb3JlIHRoYW4gb25jZSBhY3Jvc3MgdGhvc2UgbGF5ZXJzLCB0aGUgc2FtZSBjaGFuZ2Ugd2lsbCBwb3RlbnRpYWxseSBiZVxuICogZW1pdHRlZCB0d2ljZS4gT3VyIGV4cGVjdGF0aW9uIGF0bSwgaXMgdGhhdCB3ZSB3b24ndCBlbmNvdW50ZXIgdGhvc2Ugc2NlbmFyaW9zXG4gKiBpbiB0aGlzIGxpYnJhcnkuXG4gKi9cblxuLyoqIFVuc3Vic2NyaWJlcyBmcm9tIHZhbHVlIHVwZGF0ZXMuICovXG5leHBvcnQgdHlwZSBVbnN1YnNjcmliZXIgPSAoKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25hbDxUPiB7XG4gIC8qKiBHZXQgdGhlIGN1cnJlbnQgdmFsdWUgKi9cbiAgZ2V0KCk6IFQ7XG5cbiAgLyoqIFNldCByZWFjdGl2ZSB2YWx1ZSAqL1xuICBzZXQodmFsdWU6IFQpO1xuXG4gIC8qKiBVcGRhdGUgcmVhY3RpdmUgdmFsdWUgdXNpbmcgY2FsbGJhY2sgKi9cbiAgdXBkYXRlKGZuOiAodmFsdWU6IFQpID0+IFQpO1xuXG4gIC8qKiBTdWJzY3JpYmUgdG8gcmVhY3RpdmUgdmFsdWUgY2hhbmdlcyAqL1xuICBzdWJzY3JpYmUoZm46ICh2YWx1ZTogVCwgdW5zdWJzY3JpYmU/OiBVbnN1YnNjcmliZXIpID0+IHZvaWQpOiBVbnN1YnNjcmliZXI7XG59XG5cbmNvbnN0IGNvbnRleHQgPSBbXTtcblxuZnVuY3Rpb24gX3N1YnNjcmliZShydW5uaW5nLCBzdWJzY3JpcHRpb25zKSB7XG4gIHN1YnNjcmlwdGlvbnMuYWRkKHJ1bm5pbmcpO1xuICBydW5uaW5nLmRlcGVuZGVuY2llcy5hZGQoc3Vic2NyaXB0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFudXAocnVubmluZykge1xuICBmb3IgKGNvbnN0IGRlcCBvZiBydW5uaW5nLmRlcGVuZGVuY2llcykge1xuICAgIGRlcC5kZWxldGUocnVubmluZyk7XG4gIH1cbiAgcnVubmluZy5kZXBlbmRlbmNpZXMuY2xlYXIoKTtcbn1cblxuLyoqIENyZWF0ZSBhIHNpZ25hbCB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IGdldHRlciBvciBzdWJzY3JpcHRpb24uICovXG5leHBvcnQgZnVuY3Rpb24gc2lnbmFsPFQ+KHZhbHVlPzogVCkge1xuICBjb25zdCBzdWJzY3JpcHRpb25zID0gbmV3IFNldDxhbnk+KCk7XG5cbiAgY29uc3QgZ2V0ID0gKCk6IFQgPT4ge1xuICAgIGNvbnN0IHJ1bm5pbmcgPSBjb250ZXh0W2NvbnRleHQubGVuZ3RoIC0gMV07XG4gICAgaWYgKHJ1bm5pbmcpIF9zdWJzY3JpYmUocnVubmluZywgc3Vic2NyaXB0aW9ucyk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHNldCA9IChuZXh0VmFsdWU6IFQpID0+IHtcbiAgICB2YWx1ZSA9IG5leHRWYWx1ZTtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiBbLi4uc3Vic2NyaXB0aW9uc10pIHtcbiAgICAgIHN1Yi5leGVjdXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZSA9IChmbjogKHZhbHVlOiBUKSA9PiBUKSA9PiB7XG4gICAgdmFsdWUgPSBmbih2YWx1ZSk7XG4gICAgZm9yIChjb25zdCBzdWIgb2YgWy4uLnN1YnNjcmlwdGlvbnNdKSB7XG4gICAgICBzdWIuZXhlY3V0ZSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBUaGlzIGlzIGVzc2VudGlhbGx5IGEgdXNlRWZmZWN0IG1hc3F1ZXJhZGluZyBhcyBhIHN1YnNjcmliZSBmdW5jdGlvblxuICBjb25zdCBzdWJzY3JpYmUgPSAoZm46ICh2YWx1ZTogVCwgdW5zdWJzY3JpYmU/OiBVbnN1YnNjcmliZXIpID0+IHZvaWQpOiBVbnN1YnNjcmliZXIgPT4ge1xuICAgIGNvbnN0IGV4ZWN1dGUgPSAoKSA9PiB7XG4gICAgICBjbGVhbnVwKHJ1bm5pbmcpO1xuICAgICAgY29udGV4dC5wdXNoKHJ1bm5pbmcpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4ocnVubmluZy5nZXQoKSwgKCkgPT4gY2xlYW51cChydW5uaW5nKSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjb250ZXh0LnBvcCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICgpID0+IGNsZWFudXAocnVubmluZyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJ1bm5pbmcgPSB7XG4gICAgICBleGVjdXRlLFxuICAgICAgZGVwZW5kZW5jaWVzOiBuZXcgU2V0KCksXG4gICAgICBnZXQsXG4gICAgfTtcblxuICAgIHJldHVybiBleGVjdXRlKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQsXG4gICAgc2V0LFxuICAgIHVwZGF0ZSxcbiAgICBzdWJzY3JpYmUsXG4gIH0gYXMgU2lnbmFsPFQ+O1xufVxuXG4vKiogT25lIG9yIG1vcmUgYFNpZ25hbGBzICovXG50eXBlIFNpZ25hbHMgPSBTaWduYWw8YW55PiB8IFtTaWduYWw8YW55PiwgLi4uQXJyYXk8U2lnbmFsPGFueT4+XSB8IFNpZ25hbDxhbnk+W107XG5cbi8qKiBPbmUgb3IgbW9yZSB2YWx1ZXMgZnJvbSBzaWduYWxzICovXG5leHBvcnQgdHlwZSBTaWduYWxWYWx1ZXM8VD4gPSBUIGV4dGVuZHMgU2lnbmFsPGluZmVyIFU+XG4gID8gVVxuICA6IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gZXh0ZW5kcyBTaWduYWw8aW5mZXIgVT4gPyBVIDogbmV2ZXIgfTtcblxuLyoqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCBzaWduYWwgZnJvbSBvbmUgb3IgbW9yZSBzaWduYWwgZGVwZW5kZW5jaWVzICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQ8RCBleHRlbmRzIFNpZ25hbHMsIFQ+KFxuICBkZXBlbmRlbmNpZXM6IEQsXG4gIGZuOiAodmFsdWVzOiBTaWduYWxWYWx1ZXM8RD4pID0+IFRcbik6IFNpZ25hbDxUPjtcblxuLyoqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCBzaWduYWwgZnJvbSBvbmUgb3IgbW9yZSBzaWduYWwgZGVwZW5kZW5jaWVzICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQ8RCBleHRlbmRzIFNpZ25hbHMsIFQ+KFxuICBkZXBlbmRlbmNpZXM6IEQsXG4gIGZuPzogKHZhbHVlczogU2lnbmFsVmFsdWVzPEQ+LCBzZXQ/OiAodmFsdWU6IGFueSkgPT4gdm9pZCkgPT4gVFxuKTogU2lnbmFsPHVua25vd24+O1xuXG4vKiogQ3JlYXRlIGEgbmV3IGNvbXB1dGVkIHNpZ25hbCBmcm9tIG9uZSBvciBtb3JlIHNpZ25hbCBkZXBlbmRlbmNpZXMgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZDxEIGV4dGVuZHMgU2lnbmFscz4oXG4gIGRlcGVuZGVuY2llczogRCxcbiAgZm4/OiAoLi4ucGFyYW1zOiBhbnlbXSkgPT4gYW55XG4pOiBTaWduYWw8YW55PiB7XG4gIGNvbnN0IGF1dG8gPSBmbi5sZW5ndGggPCAyO1xuICBjb25zdCBzID0gc2lnbmFsPGFueT4oKTtcbiAgY29uc3Qgc2luZ2xlID0gIUFycmF5LmlzQXJyYXkoZGVwZW5kZW5jaWVzKTtcbiAgY29uc3QgZGVwcyA9IHNpbmdsZVxuICAgID8gKFtkZXBlbmRlbmNpZXNdIGFzIFNpZ25hbDxTaWduYWxWYWx1ZXM8RD4+W10pXG4gICAgOiAoZGVwZW5kZW5jaWVzIGFzIFNpZ25hbDxTaWduYWxWYWx1ZXM8RD4+W10pO1xuXG4gIC8vIFdlIG9ubHkgbmVlZCB0byBzdWJzY3JpYmUgdG8gdGhlIGZpcnN0IGl0ZW0gYmVjYXVzZVxuICAvLyB0aGUgYWN0IG9mIHJldHJpZXZpbmcgYWxsIGRlcGVuZGVuY3kgdmFsdWVzIHdpbGwgYWRkIHRoZW1cbiAgLy8gdG8gdGhlIGNvbnRleHQgc3RhY2sgYXBwcm9wcmlhdGVseVxuICBjb25zdCBkZXAgPSBkZXBzWzBdO1xuICBkZXAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgPSBkZXBzLm1hcCgoZGVwKSA9PiBkZXAuZ2V0KCkpO1xuICAgIGNvbnN0IHJldCA9IHNpbmdsZSA/IHZhbHVlc1swXSA6ICh2YWx1ZXMgYXMgU2lnbmFsVmFsdWVzPEQ+KTtcbiAgICBpZiAoYXV0bykge1xuICAgICAgcy5zZXQoZm4ocmV0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKHJldCwgcy5zZXQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzO1xufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIHdjL25vLXNlbGYtY2xhc3MgKi9cbmltcG9ydCB7IGNvbmZpZywgc2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBib3JkZXJXaWR0aFZhbFNob3J0aGFuZHMsIGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgTXRlRWxlbWVudCB9IGZyb20gJy4vbXRlLmVsZW1lbnQnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0gZnJvbSAnLi4vYXR0cmlidXRlLWNvbnZlcnRlcic7XG5cbmV4cG9ydCB0eXBlIFNwYWNpbmdWYWx1ZSA9XG4gIHwgbnVtYmVyXG4gIHwgc3RyaW5nXG4gIHwgMVxuICB8IDJcbiAgfCAzXG4gIHwgNFxuICB8IDVcbiAgfCA2XG4gIHwgJ25vbmUnXG4gIHwgJ3hzJ1xuICB8ICdzbSdcbiAgfCAnbWQnXG4gIHwgJ2xnJ1xuICB8ICd4bCdcbiAgfCAneHhsJ1xuICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgVW5pdFZhbHVlID0gbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBCb3JkZXJSYWRpdXNWYWx1ZSA9XG4gIHwgJ25vbmUnXG4gIHwgJ3hzJ1xuICB8ICdzbSdcbiAgfCAnbWQnXG4gIHwgJ2xnJ1xuICB8ICd4bCdcbiAgfCAneHhsJ1xuICB8ICdmdWxsJ1xuICB8IHN0cmluZ1xuICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgQm9yZGVyV2lkdGhWYWx1ZSA9ICdub25lJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgT3BhY2l0eVZhbHVlID1cbiAgfCAneHh4cydcbiAgfCAneHhzJ1xuICB8ICd4cydcbiAgfCAnc20nXG4gIHwgJ21kJ1xuICB8ICdsZydcbiAgfCAneGwnXG4gIHwgJ3h4bCdcbiAgfCBzdHJpbmdcbiAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFJlc3BvbnNpdmVWYWx1ZTxUPiA9IFQgfCBQYXJ0aWFsPFJlY29yZDwneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnLCBUPj47XG5cbmNvbnN0IGRlZmF1bHRCb3JkZXJGYWN0b3J5ID0gKHdpZHRoPywgY29sb3I/LCBzdHlsZT8pID0+XG4gIGAke3N0eWxlID8/ICdzb2xpZCd9ICR7XG4gICAgYm9yZGVyV2lkdGhWYWxTaG9ydGhhbmRzKFtcbiAgICAgIHsgcHJvcDogJ2JvcmRlcldpZHRoJywgdmFsdWU6IGRvdFN0cmluZ1RvQ29uZmlnVmFsdWUod2lkdGggPz8gJzFweCcpIH0sXG4gICAgXSlbMF0/LnZhbHVlXG4gIH0gJHtkb3RTdHJpbmdUb0NvbmZpZ1ZhbHVlKGNvbG9yKSA/PyBjb25maWcuY29sb3IuYm9yZGVyMX1gO1xuXG5leHBvcnQgY2xhc3MgTXRlQ29udGVudEJhc2UgZXh0ZW5kcyBNdGVFbGVtZW50IHtcbiAgLy8gLS0gU3BhY2luZyBQcm9wcyAtLVxuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG0/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1hcmdpbi1yaWdodGAgYW5kIGBtYXJnaW4tbGVmdGAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG14PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tdG9wYCBhbmQgYG1hcmdpbi1ib3R0b21gIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBteT86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXRvcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtdD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWFyZ2luLXJpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1yPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tYm90dG9tYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIG1iPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtYXJnaW4tbGVmdGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtbD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZ2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwPzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXJpZ2h0YCBhbmQgYHBhZGRpbmctbGVmdGAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHB4PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXRvcGAgYW5kIGBwYWRkaW5nLWJvdHRvbWAgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIHB5PzogUmVzcG9uc2l2ZVZhbHVlPFNwYWNpbmdWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBwYWRkaW5nLXRvcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwdD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1yaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwcj86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcGFkZGluZy1ib3R0b21gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgcGI/OiBSZXNwb25zaXZlVmFsdWU8U3BhY2luZ1ZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYHBhZGRpbmctbGVmdGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBwbD86IFJlc3BvbnNpdmVWYWx1ZTxTcGFjaW5nVmFsdWU+O1xuXG4gIC8vIC0tIFBvc2l0aW9uaW5nIFByb3BzIC0tXG5cbiAgLyoqIFNldHMgdGhlIGBkaXNwbGF5YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGQ/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdibG9jaydcbiAgICB8ICdpbmxpbmUtYmxvY2snXG4gICAgfCAnZmxleCdcbiAgICB8ICdpbmxpbmUtZmxleCdcbiAgICB8ICdncmlkJ1xuICAgIHwgJ2lubGluZS1ncmlkJ1xuICAgIHwgJ2lubGluZSdcbiAgICB8ICdsaXN0LWl0ZW0nXG4gICAgfCAnbm9uZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1pdGVtc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBhPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZW5kJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ3N0cmV0Y2gnXG4gICAgfCAnYmFzZWxpbmUnXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYWxpZ24taXRlbXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYWxpZ25JdGVtcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2Jhc2VsaW5lJ1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGFsaWduLXNlbGZgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYWxpZ25TZWxmPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnYXV0bydcbiAgICB8ICdmbGV4LXN0YXJ0J1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdmbGV4LWVuZCdcbiAgICB8ICdlbmQnXG4gICAgfCAnc3RyZXRjaCdcbiAgICB8ICdiYXNlbGluZSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBhbGlnbi1jb250ZW50YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGFsaWduQ29udGVudD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ3NwYWNlLWJldHdlZW4nXG4gICAgfCAnc3BhY2UtYXJvdW5kJ1xuICAgIHwgJ3NwYWNlLWV2ZW5seSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LWNvbnRlbnRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgaj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2ZsZXgtZW5kJ1xuICAgIHwgJ2VuZCdcbiAgICB8ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIHwgJ3NwYWNlLWFyb3VuZCdcbiAgICB8ICdzcGFjZS1ldmVubHknXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBganVzdGlmeS1jb250ZW50YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGp1c3RpZnlDb250ZW50PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnZmxleC1zdGFydCdcbiAgICB8ICdzdGFydCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3NwYWNlLWJldHdlZW4nXG4gICAgfCAnc3BhY2UtYXJvdW5kJ1xuICAgIHwgJ3NwYWNlLWV2ZW5seSdcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBqdXN0aWZ5LWl0ZW1zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGp1c3RpZnlJdGVtcz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnc3RhcnQnXG4gICAgfCAnbGVmdCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGp1c3RpZnktc2VsZmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBqdXN0aWZ5U2VsZj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB8IHVuZGVmaW5lZFxuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdzdHJldGNoJ1xuICAgIHwgJ3N0YXJ0J1xuICAgIHwgJ2ZsZXgtc3RhcnQnXG4gICAgfCAnbGVmdCdcbiAgICB8ICdjZW50ZXInXG4gICAgfCAnZmxleC1lbmQnXG4gICAgfCAnZW5kJ1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2luaXRpYWwnXG4gICAgfCAnaW5oZXJpdCdcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZmxleDogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWRpcmVjdGlvbmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBkaXJlY3Rpb24/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3JvdycgfCAncm93UmV2ZXJzZScgfCAnY29sdW1uJyB8ICdjb2x1bW5SZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1kaXJlY3Rpb25gIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleERpcmVjdGlvbj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAncm93JyB8ICdyb3dSZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtblJldmVyc2UnIHwgJ2luaXRpYWwnIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWJhc2lzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJhc2lzPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZmxleC1iYXNpc2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4QmFzaXM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LWdyb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3Jvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtZ3Jvd2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmbGV4R3Jvdz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtc2hyaW5rYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIHNocmluaz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGZsZXgtc2hyaW5rYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZsZXhTaHJpbms/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXdyYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgd3JhcD86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCAnbm93cmFwJyB8ICd3cmFwJyB8ICd3cmFwLXJldmVyc2UnIHwgJ2luaXRpYWwnIHwgJ2luaGVyaXQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmbGV4LXdyYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZmxleFdyYXA/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ25vd3JhcCcgfCAnd3JhcCcgfCAnd3JhcC1yZXZlcnNlJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0J1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgb3JkZXJgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgb3JkZXI/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgbnVtYmVyIHwgc3RyaW5nXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBnYXBgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ2FwPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBjb2x1bW4tZ2FwYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGNvbHVtbkdhcD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgcm93LWdhcGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICByb3dHYXA/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtY29sdW1uYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRDb2x1bW4/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgc3RyaW5nIHwgdW5kZWZpbmVkXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBncmlkLXJvd2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkUm93PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1hdXRvLWZsb3dgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZ3JpZEF1dG9GbG93PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdyb3cnIHwgJ2NvbHVtbicgfCAnZGVuc2UnIHwgJ3JvdyBkZW5zZScgfCAnY29sdW1uIGRlbnNlJ1xuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC1hdXRvLWNvbHVtbnNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZEF1dG9Db2x1bW5zPzogUmVzcG9uc2l2ZVZhbHVlPCdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXV0by1yb3dzYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGdyaWRBdXRvUm93cz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICAnYXV0bycgfCAnbWF4LWNvbnRlbnQnIHwgJ21pbi1jb250ZW50JyB8IFVuaXRWYWx1ZVxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgJ25vbmUnIHwgJ2F1dG8nIHwgJ21heC1jb250ZW50JyB8ICdtaW4tY29udGVudCcgfCBVbml0VmFsdWVcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtdGVtcGxhdGUtcm93c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBncmlkVGVtcGxhdGVSb3dzPzogUmVzcG9uc2l2ZVZhbHVlPCdub25lJyB8ICdhdXRvJyB8ICdtYXgtY29udGVudCcgfCAnbWluLWNvbnRlbnQnIHwgVW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtdGVtcGxhdGUtYXJlYXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgZ3JpZFRlbXBsYXRlQXJlYXM/OiBSZXNwb25zaXZlVmFsdWU8J25vbmUnIHwgc3RyaW5nIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGdyaWQtYXJlYWAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBncmlkQXJlYT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvLyAtLSBTaXppbmcgUHJvcHMgLS1cblxuICAvKiogU2V0cyB0aGUgYHdpZHRoYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIHc/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1heC13aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtYXh3PzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBtaW4td2lkdGhgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWludz86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgaGVpZ2h0YCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGg/OiBSZXNwb25zaXZlVmFsdWU8VW5pdFZhbHVlPjtcblxuICAvKiogU2V0cyB0aGUgYG1heC1oZWlnaHRgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgbWF4aD86IFJlc3BvbnNpdmVWYWx1ZTxVbml0VmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgbWluLWhlaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudCAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBtaW5oPzogUmVzcG9uc2l2ZVZhbHVlPFVuaXRWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBiYWNrZ3JvdW5kYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiBDYW4gYmUgcGFzc2VkIGRvdCBub3RhdGVkIHRoZW1lIGNvbmZpZyBzdHJpbmdzIHRvIHNlbGVjdCBjb2xvciB0b2tlbiB2YWx1ZXMuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJnPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IHVuZGVmaW5lZFxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgY29sb3JgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuIENhbiBiZSBwYXNzZWQgZG90IG5vdGF0ZWQgdGhlbWUgY29uZmlnIHN0cmluZ3MgdG8gc2VsZWN0IGNvbG9yIHRva2VuIHZhbHVlcy4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgYz86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1jb2xvcmAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gQ2FuIGJlIHBhc3NlZCBkb3Qgbm90YXRlZCB0aGVtZSBjb25maWcgc3RyaW5ncyB0byBzZWxlY3QgY29sb3IgdG9rZW4gdmFsdWVzLiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBib3JkZXJDb2xvcj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICBzdHJpbmcgfCB1bmRlZmluZWRcbiAgPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci13aWR0aGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyV2lkdGg/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyV2lkdGhWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItc3R5bGVgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGJvcmRlclN0eWxlPzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHVuZGVmaW5lZCB8ICdzb2xpZCcgfCAnZG90dGVkJyB8ICdkYXNoZWQnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXJgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlcj86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci10b3BgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcD86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1yaWdodGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyUmlnaHQ/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tYCBjc3MgcHJvcGVydHkgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJCb3R0b20/OiBSZXNwb25zaXZlVmFsdWU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItbGVmdGAgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyTGVmdD86IFJlc3BvbnNpdmVWYWx1ZTxib29sZWFuIHwgdW5kZWZpbmVkPjtcblxuICAvKiogU2V0cyB0aGUgYGJvcmRlci1yYWRpdXNgIGNzcyBwcm9wZXJ0eSBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyVG9wUmlnaHRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyVG9wTGVmdFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM/OiBSZXNwb25zaXZlVmFsdWU8Qm9yZGVyUmFkaXVzVmFsdWU+O1xuXG4gIC8qKiBTZXRzIHRoZSBgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c2AgY3NzIHByb3BlcnR5IG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyQm90dG9tTGVmdFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1c2AgYW5kIGBib3JkZXItdG9wLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlclRvcFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1c2AgYW5kIGBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c2AgY3NzIHByb3BlcnRpZXMgb24gdGhpcyBlbGVtZW50LiAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBib3JkZXJSaWdodFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c2AgYW5kIGBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzYCBjc3MgcHJvcGVydGllcyBvbiB0aGlzIGVsZW1lbnQuICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pXG4gIGJvcmRlckJvdHRvbVJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBib3JkZXItdG9wLWxlZnQtcmFkaXVzYCBhbmQgYGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNgIGNzcyBwcm9wZXJ0aWVzIG9uIHRoaXMgZWxlbWVudC4gKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSlcbiAgYm9yZGVyTGVmdFJhZGl1cz86IFJlc3BvbnNpdmVWYWx1ZTxCb3JkZXJSYWRpdXNWYWx1ZT47XG5cbiAgLyoqIFNldHMgdGhlIGBsaW5lLWhlaWdodGAgY3NzIHByb3BlcnR5ICAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBsaW5lSGVpZ2h0PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHN0cmluZyB8IG51bWJlclxuICA+O1xuXG4gIC8qKiBTZXRzIHRoZSBgZm9udC13ZWlnaHRgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmb250V2VpZ2h0PzogUmVzcG9uc2l2ZVZhbHVlPFxuICAgIHwgdW5kZWZpbmVkXG4gICAgfCAnbGlnaHQnXG4gICAgfCAncmVndWxhcidcbiAgICB8ICdtZWRpdW0nXG4gICAgfCAnbGlnaHRlcidcbiAgICB8ICdub3JtYWwnXG4gICAgfCAnYm9sZCdcbiAgICB8ICdib2xkZXInXG4gICAgfCAnaW5pdGlhbCdcbiAgICB8ICdpbmhlcml0J1xuICAgIHwgJzEwMCdcbiAgICB8ICcyMDAnXG4gICAgfCAnMzAwJ1xuICAgIHwgJzQwMCdcbiAgICB8ICc1MDAnXG4gICAgfCAnNjAwJ1xuICAgIHwgJzcwMCdcbiAgICB8ICc4MDAnXG4gICAgfCAnOTAwJ1xuICA+O1xuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIGBmb250V2VpZ2h0YC4gU2V0cyB0aGUgYGZvbnQtd2VpZ2h0YCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZnc/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgfCB1bmRlZmluZWRcbiAgICB8ICdsaWdodCdcbiAgICB8ICdyZWd1bGFyJ1xuICAgIHwgJ21lZGl1bSdcbiAgICB8ICdsaWdodGVyJ1xuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdib2xkJ1xuICAgIHwgJ2JvbGRlcidcbiAgICB8ICdpbml0aWFsJ1xuICAgIHwgJ2luaGVyaXQnXG4gICAgfCAnMTAwJ1xuICAgIHwgJzIwMCdcbiAgICB8ICczMDAnXG4gICAgfCAnNDAwJ1xuICAgIHwgJzUwMCdcbiAgICB8ICc2MDAnXG4gICAgfCAnNzAwJ1xuICAgIHwgJzgwMCdcbiAgICB8ICc5MDAnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmb250LXNpemVgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KSBmb250U2l6ZT86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICB1bmRlZmluZWQgfCBVbml0VmFsdWUgfCAneHhzJyB8ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCdcbiAgPjtcblxuICAvKiogU2hvcnRoYW5kIGZvciBgZm9udFNpemVgLiBTZXRzIHRoZSBgZm9udC1zaXplYCBjc3MgcHJvcGVydHkgKi9cbiAgQHByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSwgY29udmVydGVyOiBSZXNwb25zaXZlVmFsdWVDb252ZXJ0ZXIgfSkgZnM/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgVW5pdFZhbHVlIHwgJ3h4cycgfCAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnXG4gID47XG5cbiAgLyoqIFNldHMgdGhlIGBmb250LWZhbWlseWAgY3NzIHByb3BlcnR5ICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGZvbnRGYW1pbHk/OiBSZXNwb25zaXZlVmFsdWU8XG4gICAgdW5kZWZpbmVkIHwgJ3NhbnMnIHwgJ3NlcmlmJyB8ICdtb25vJyB8IHN0cmluZ1xuICA+O1xuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIGBvcGFjaXR5YC4gU2V0cyB0aGUgYG9wYWNpdHlgIGNzcyBwcm9wZXJ0eSAqL1xuICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlLCBjb252ZXJ0ZXI6IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciB9KVxuICBvcGFjaXR5PzogUmVzcG9uc2l2ZVZhbHVlPE9wYWNpdHlWYWx1ZT47XG5cbiAgLyoqIEFwcGxpZXMgTW9ydGFyIHN0YW5kYXJkIGJveC1zaGFkb3cgdmFsdWVzICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUsIGNvbnZlcnRlcjogUmVzcG9uc2l2ZVZhbHVlQ29udmVydGVyIH0pIGVsZXZhdGlvbj86IFJlc3BvbnNpdmVWYWx1ZTxcbiAgICAnejAnIHwgJ3oxJyB8ICd6MicgfCAnejMnIHwgJ3o0J1xuICA+O1xuXG4gIC8qKiBBZGp1c3QgdGhpcyBlbGVtZW50cyBibGVlZCBpZiBpdCBpcyBhIGRpcmVjdCBkZXNjZW5kYW50IG9mIGFuIG10ZS1sYXlvdXQtY29udGFpbmVyICovXG4gIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgbGF5b3V0QmxlZWQ/OiAnZnVsbCcgfCAncG9wb3V0JyB8ICdjb250ZW50JyB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogUmVuZGVycyB0aGlzIGVsZW1lbnQgYXMgYSBzdWJncmlkIHdoZW4gc2V0LiBgZGlzcGxheWAgaXMgc2V0IHRvIGBncmlkYCBhbmQgYGdyaWQtdGVtcGxhdGUtY29sdW1uc2AgaXMgc2V0IHRvIGBzdWJncmlkYC5cbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBzdWJncmlkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgc2VsZWN0b3IgdG8gaGF2ZSBpbnN0YW5jZSBzdHlsZXMgdGFyZ2V0IGEgc3BlY2lmaWMgaW5uZXIgZWxlbWVudC5cbiAgICogVXNlZnVsIGluIHNwZWNpZmljIHNjZW5hcmlvcyB3aGVyZSB0aGUgcHJpbWFyeSBjb250ZW50L3Nsb3Qgd3JhcHBlZCB3aXRoaW4gdGhlIHRlbXBsYXRlXG4gICAqIGxpa2Ugd2l0aCB0aGUgbW9kYWwgY29tcG9uZW50LlxuICAgKi9cbiAgcHJvdGVjdGVkIGNvbnRlbnRTdHlsZVNlbGVjdG9yUm9vdCA9ICc6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3QnO1xuXG4gIC8vIExpc3Qgb2YgcHJvcHMgZm9yIG9wdGltYWwgc3R5bGUgdXBkYXRlIGNoZWNraW5nXG4gIHByaXZhdGUgc3RhdGljIGNvbnRlbnRQcm9wcyA9IG5ldyBTZXQoW1xuICAgICdtJyxcbiAgICAnbXgnLFxuICAgICdteScsXG4gICAgJ210JyxcbiAgICAnbXInLFxuICAgICdtYicsXG4gICAgJ21sJyxcbiAgICAncCcsXG4gICAgJ3B4JyxcbiAgICAncHknLFxuICAgICdwdCcsXG4gICAgJ3ByJyxcbiAgICAncGInLFxuICAgICdwbCcsXG4gICAgJ2QnLFxuICAgICdhJyxcbiAgICAnaicsXG4gICAgJ2Jhc2lzJyxcbiAgICAnc2hyaW5rJyxcbiAgICAnZ3JvdycsXG4gICAgJ2RpcmVjdGlvbicsXG4gICAgJ3dyYXAnLFxuICAgICdhbGlnbkl0ZW1zJyxcbiAgICAnYWxpZ25TZWxmJyxcbiAgICAnYWxpZ25Db250ZW50JyxcbiAgICAnanVzdGlmeUNvbnRlbnQnLFxuICAgICdqdXN0aWZ5SXRlbXMnLFxuICAgICdqdXN0aWZ5U2VsZicsXG4gICAgJ2ZsZXgnLFxuICAgICdmbGV4RGlyZWN0aW9uJyxcbiAgICAnZmxleEJhc2lzJyxcbiAgICAnZmxleFNocmluaycsXG4gICAgJ2ZsZXhHcm93JyxcbiAgICAnZmxleFdyYXAnLFxuICAgICdvcmRlcicsXG4gICAgJ2dhcCcsXG4gICAgJ2NvbHVtbkdhcCcsXG4gICAgJ3Jvd0dhcCcsXG4gICAgJ2dyaWRDb2x1bW4nLFxuICAgICdncmlkUm93JyxcbiAgICAnZ3JpZEF1dG9GbG93JyxcbiAgICAnZ3JpZEF1dG9Db2x1bW5zJyxcbiAgICAnZ3JpZEF1dG9Sb3dzJyxcbiAgICAnZ3JpZFRlbXBsYXRlQ29sdW1ucycsXG4gICAgJ2dyaWRUZW1wbGF0ZVJvd3MnLFxuICAgICdncmlkVGVtcGxhdGVBcmVhcycsXG4gICAgJ2dyaWRBcmVhJyxcbiAgICAndycsXG4gICAgJ21heHcnLFxuICAgICdtaW53JyxcbiAgICAnaCcsXG4gICAgJ21heGgnLFxuICAgICdtaW5oJyxcbiAgICAnYmcnLFxuICAgICdjJyxcbiAgICAnYm9yZGVyQ29sb3InLFxuICAgICdib3JkZXJXaWR0aCcsXG4gICAgJ2JvcmRlclN0eWxlJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnYm9yZGVyVG9wJyxcbiAgICAnYm9yZGVyUmlnaHQnLFxuICAgICdib3JkZXJCb3R0b20nLFxuICAgICdib3JkZXJMZWZ0JyxcbiAgICAnYm9yZGVyUmFkaXVzJyxcbiAgICAnYm9yZGVyVG9wUmlnaHRSYWRpdXMnLFxuICAgICdib3JkZXJUb3BMZWZ0UmFkaXVzJyxcbiAgICAnYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMnLFxuICAgICdib3JkZXJCb3R0b21MZWZ0UmFkaXVzJyxcbiAgICAnYm9yZGVyVG9wUmFkaXVzJyxcbiAgICAnYm9yZGVyUmlnaHRSYWRpdXMnLFxuICAgICdib3JkZXJCb3R0b21SYWRpdXMnLFxuICAgICdib3JkZXJMZWZ0UmFkaXVzJyxcbiAgICAnbGluZUhlaWdodCcsXG4gICAgJ2ZvbnRXZWlnaHQnLFxuICAgICdmdycsXG4gICAgJ2ZvbnRTaXplJyxcbiAgICAnZnMnLFxuICAgICdmb250RmFtaWx5JyxcbiAgICAnb3BhY2l0eScsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ2xheW91dEJsZWVkJyxcbiAgICAnc3ViZ3JpZCcsXG4gIF0pO1xuXG4gIHByb3RlY3RlZCB1cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHM6IE1hcDxzdHJpbmcsIGFueT4pIHtcbiAgICBzdXBlci51cGRhdGVJbnN0YW5jZVN0eWxlcyhjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gQ2hlY2sgaWYgYW55IGNvbnRlbnQgcHJvcCBoYXMgY2hhbmdlZCB0byBkZXRlcm1pbmUgaWYgd2UgbmVlZCB0byB1cGRhdGUgdGhlIGluc3RhbmNlIHN0eWxlc1xuICAgIGxldCBzaG91bGRVcGRhdGVTdHlsZXMgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBjaGFuZ2VkUHJvcHMua2V5cygpKSB7XG4gICAgICBpZiAoTXRlQ29udGVudEJhc2UuY29udGVudFByb3BzLmhhcyhrZXkpKSB7XG4gICAgICAgIHNob3VsZFVwZGF0ZVN0eWxlcyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaG91bGRVcGRhdGVTdHlsZXMpIHtcbiAgICAgIC8vIERvdWJsZSB0aGUgYDpob3N0YCBzZWxlY3RvciB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSBiZXlvbmQgbW9zdCBjb21wb25lbnQgbGV2ZWwgc3R5bGVzIGJ5IGRlZmF1bHRcbiAgICAgIHRoaXMuc2V0SW5zdGFuY2VTdHlsZSgnY29udGVudC1iYXNlJywgc2VsZWN0b3JGYWN0b3J5KHRoaXMuY29udGVudFN0eWxlU2VsZWN0b3JSb290KSwge1xuICAgICAgICAvLyBTcGFjaW5nXG4gICAgICAgIG06IHRoaXMubSxcbiAgICAgICAgbXg6IHRoaXMubXgsXG4gICAgICAgIG15OiB0aGlzLm15LFxuICAgICAgICBtdDogdGhpcy5tdCxcbiAgICAgICAgbXI6IHRoaXMubXIsXG4gICAgICAgIG1iOiB0aGlzLm1iLFxuICAgICAgICBtbDogdGhpcy5tbCxcbiAgICAgICAgcDogdGhpcy5wLFxuICAgICAgICBweDogdGhpcy5weCxcbiAgICAgICAgcHk6IHRoaXMucHksXG4gICAgICAgIHB0OiB0aGlzLnB0LFxuICAgICAgICBwcjogdGhpcy5wcixcbiAgICAgICAgcGI6IHRoaXMucGIsXG4gICAgICAgIHBsOiB0aGlzLnBsLFxuICAgICAgICAvLyBQb3NpdGlvbmluZ1xuICAgICAgICBkOiB0aGlzLnN1YmdyaWQgPyAnZ3JpZCcgOiB0aGlzLmQsXG4gICAgICAgIGFsaWduSXRlbXM6IHRoaXMuYSA/PyB0aGlzLmFsaWduSXRlbXMsXG4gICAgICAgIGFsaWduU2VsZjogdGhpcy5hbGlnblNlbGYsXG4gICAgICAgIGFsaWduQ29udGVudDogdGhpcy5hbGlnbkNvbnRlbnQsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiB0aGlzLmogPz8gdGhpcy5qdXN0aWZ5Q29udGVudCxcbiAgICAgICAganVzdGlmeUl0ZW1zOiB0aGlzLmp1c3RpZnlJdGVtcyxcbiAgICAgICAganVzdGlmeVNlbGY6IHRoaXMuanVzdGlmeVNlbGYsXG4gICAgICAgIGZsZXg6IHRoaXMuZmxleCxcbiAgICAgICAgZmxleERpcmVjdGlvbjogdGhpcy5kaXJlY3Rpb24gPz8gdGhpcy5mbGV4RGlyZWN0aW9uLFxuICAgICAgICBmbGV4QmFzaXM6IHRoaXMuYmFzaXMgPz8gdGhpcy5mbGV4QmFzaXMsXG4gICAgICAgIGZsZXhTaHJpbms6IHRoaXMuc2hyaW5rID8/IHRoaXMuZmxleFNocmluayxcbiAgICAgICAgZmxleEdyb3c6IHRoaXMuZ3JvdyA/PyB0aGlzLmZsZXhHcm93LFxuICAgICAgICBmbGV4V3JhcDogdGhpcy53cmFwID8/IHRoaXMuZmxleFdyYXAsXG4gICAgICAgIG9yZGVyOiB0aGlzLm9yZGVyLFxuICAgICAgICBnYXA6IHRoaXMuZ2FwLFxuICAgICAgICBjb2x1bW5HYXA6IHRoaXMuY29sdW1uR2FwLFxuICAgICAgICByb3dHYXA6IHRoaXMucm93R2FwLFxuICAgICAgICBncmlkQ29sdW1uOiB0aGlzLmxheW91dEJsZWVkID8gdGhpcy5sYXlvdXRCbGVlZCA6IHRoaXMuZ3JpZENvbHVtbixcbiAgICAgICAgZ3JpZFJvdzogdGhpcy5ncmlkUm93LFxuICAgICAgICBncmlkQXV0b0Zsb3c6IHRoaXMuZ3JpZEF1dG9GbG93LFxuICAgICAgICBncmlkQXV0b0NvbHVtbnM6IHRoaXMuZ3JpZEF1dG9Db2x1bW5zLFxuICAgICAgICBncmlkQXV0b1Jvd3M6IHRoaXMuZ3JpZEF1dG9Sb3dzLFxuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiB0aGlzLnN1YmdyaWQgPyAnc3ViZ3JpZCcgOiB0aGlzLmdyaWRUZW1wbGF0ZUNvbHVtbnMsXG4gICAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6IHRoaXMuZ3JpZFRlbXBsYXRlUm93cyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlQXJlYXM6IHRoaXMuZ3JpZFRlbXBsYXRlQXJlYXMsXG4gICAgICAgIGdyaWRBcmVhOiB0aGlzLmdyaWRBcmVhLFxuICAgICAgICAvLyBTaXppbmdcbiAgICAgICAgdzogdGhpcy53LFxuICAgICAgICBtYXh3OiB0aGlzLm1heHcsXG4gICAgICAgIG1pbnc6IHRoaXMubWludyxcbiAgICAgICAgaDogdGhpcy5oLFxuICAgICAgICBtYXhoOiB0aGlzLm1heGgsXG4gICAgICAgIG1pbmg6IHRoaXMubWluaCxcbiAgICAgICAgLy8gQ29sb3JzXG4gICAgICAgIGJnOiB0aGlzLmJnLFxuICAgICAgICBjOiB0aGlzLmMsXG4gICAgICAgIC8vIEJvcmRlcnNcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuYm9yZGVyQ29sb3IsXG4gICAgICAgIGJvcmRlcldpZHRoOiB0aGlzLmJvcmRlcldpZHRoLFxuICAgICAgICBib3JkZXJTdHlsZTogdGhpcy5ib3JkZXJTdHlsZSxcbiAgICAgICAgYm9yZGVyOiB0aGlzLmJvcmRlclxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlclRvcDogdGhpcy5ib3JkZXJUb3BcbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBib3JkZXJSaWdodDogdGhpcy5ib3JkZXJSaWdodFxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlckxlZnQ6IHRoaXMuYm9yZGVyTGVmdFxuICAgICAgICAgID8gZGVmYXVsdEJvcmRlckZhY3RvcnkodGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5ib3JkZXJTdHlsZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvcmRlckJvdHRvbTogdGhpcy5ib3JkZXJCb3R0b21cbiAgICAgICAgICA/IGRlZmF1bHRCb3JkZXJGYWN0b3J5KHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICAvLyBCb3JkZXIgUmFkaXVzXG4gICAgICAgIGJvcmRlclJhZGl1czogdGhpcy5ib3JkZXJSYWRpdXMsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOlxuICAgICAgICAgIHRoaXMuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPz8gdGhpcy5ib3JkZXJUb3BSYWRpdXMgPz8gdGhpcy5ib3JkZXJSaWdodFJhZGl1cyxcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlclRvcExlZnRSYWRpdXMgPz8gdGhpcy5ib3JkZXJUb3BSYWRpdXMgPz8gdGhpcy5ib3JkZXJMZWZ0UmFkaXVzLFxuICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czpcbiAgICAgICAgICB0aGlzLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID8/IHRoaXMuYm9yZGVyQm90dG9tUmFkaXVzID8/IHRoaXMuYm9yZGVyUmlnaHRSYWRpdXMsXG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6XG4gICAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID8/IHRoaXMuYm9yZGVyQm90dG9tUmFkaXVzID8/IHRoaXMuYm9yZGVyTGVmdFJhZGl1cyxcbiAgICAgICAgLy8gRm9udHNcbiAgICAgICAgbGluZUhlaWdodDogdGhpcy5saW5lSGVpZ2h0LFxuICAgICAgICBmb250V2VpZ2h0OiB0aGlzLmZ3ID8/IHRoaXMuZm9udFdlaWdodCxcbiAgICAgICAgZm9udFNpemU6IHRoaXMuZnMgPz8gdGhpcy5mb250U2l6ZSxcbiAgICAgICAgZm9udEZhbWlseTogdGhpcy5mb250RmFtaWx5LFxuICAgICAgICAvLyBPcGFjaXR5XG4gICAgICAgIG9wYWNpdHk6IHRoaXMub3BhY2l0eSxcbiAgICAgICAgLy8gRWxldmF0aW9uXG4gICAgICAgIGVsZXZhdGlvbjogdGhpcy5lbGV2YXRpb24sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBkZWZhdWx0Q29udmVydGVyIH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGNvbnN0IFJlc3BvbnNpdmVWYWx1ZUNvbnZlcnRlciA9IHtcbiAgZnJvbUF0dHJpYnV0ZTogKHZhbHVlLCB0eXBlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh2YWx1ZT8uWzBdID09PSAneycpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgdHlwZSk7XG4gIH0sXG4gIHRvQXR0cmlidXRlOiAodmFsdWUsIHR5cGUpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb252ZXJ0ZXIudG9BdHRyaWJ1dGUodmFsdWUsIE9iamVjdCk7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0Q29udmVydGVyLnRvQXR0cmlidXRlKHZhbHVlLCB0eXBlKTtcbiAgfSxcbn07XG4iLCAiaW1wb3J0IHsgRGlyZWN0aXZlUmVzdWx0IH0gZnJvbSAnbGl0L2RpcmVjdGl2ZS5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTVkcsIFVuc2FmZVNWR0RpcmVjdGl2ZSB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL3Vuc2FmZS1zdmcuanMnO1xuXG5leHBvcnQgY29uc3QgaGViTG9nb1N2Z0NvbnRlbnRzOiBEaXJlY3RpdmVSZXN1bHQ8dHlwZW9mIFVuc2FmZVNWR0RpcmVjdGl2ZT4gPSB1bnNhZmVTVkcoXG4gIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIGlkPVwiTGF5ZXJfMVwiIHg9XCIwXCIgeT1cIjBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MzYuMjcgMTg2LjI0XCI+PHN0eWxlPi5zdDB7ZmlsbDojZTEyNTFifS5zdDF7ZmlsbDojZmZmfTwvc3R5bGU+PGcgaWQ9XCJfeDMxXy1IRUJfTUFJTl9MT0dPXzAwMDAwMDk2MDQzNDA0MjA2ODYxODgwODcwMDAwMDA0ODEzMjQwOTM4OTQ2ODU1MzU1X1wiPjxwYXRoIGQ9XCJNOTMuMTIgMTg2LjI0QzQxLjY5IDE4Ni4yNCAwIDE0NC41NSAwIDkzLjEyUzQxLjY5IDAgOTMuMTIgMGgzNTAuMDNjNTEuNDMgMCA5My4xMiA0MS42OSA5My4xMiA5My4xMnMtNDEuNjkgOTMuMTItOTMuMTIgOTMuMTJIOTMuMTJ6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk05My4xMiAxNzQuMTljLTQ0Ljc2IDAtODEuMDUtMzYuMjktODEuMDUtODEuMDVzMzYuMjktODEuMDUgODEuMDUtODEuMDVoMzUwLjAzYzQ0Ljc2IDAgODEuMDUgMzYuMjkgODEuMDUgODEuMDVzLTM2LjI5IDgxLjA1LTgxLjA1IDgxLjA1SDkzLjEyelwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJtNDQ0Ljk0IDI0LjExLTM1My42NC4wMmMtMzcuMDcgMC02Ny4yIDMwLjk1LTY3LjE2IDY5LjA3IDAgMzcuOTMgMzAuMTYgNjguODggNjcuMTYgNjguODhsMzUzLjYzLS4wN2MzNy4xLS4wMyA2Ny4xNS0zMC44OSA2Ny4yLTY4Ljg1LS4wNC0zOC4yLTMwLjA5LTY5LjA1LTY3LjE5LTY5LjA1elwiIGNsYXNzPVwic3QwXCIvPjxwYXRoIGQ9XCJNMjI0LjIxIDEzMi4yM2g4OC4xbC43Ni0xMi45OGgtNTYuMTh2LTE0Ljg0aDQ0LjgxVjg5LjMzaC00NC44MVY3My4yNWw1OC45Mi0uMDEgMS4xNS0xOS4yOWgtOTcuNHpNMTMyLjQ2IDUzLjk1djM1LjM4SDEwOC42VjUzLjk1SDcxLjI3bDQuNjUgNzguMjhoMzIuNjh2LTI3LjgyaDIzLjg2djI3LjgyaDMyLjY4bDQuNjUtNzguMjh6TTQ0OC41MiA5Ny4wMmM5LjktMi44MyAxNi40OS04LjU5IDE2LjQ5LTIwLjY3LjAzLTEzLjgyLTExLjA2LTIyLjQtMjUuMjktMjIuNGgtNzMuMjhsNC42NSA3OC4yOWg2NC4wNmMyNy45OCAwIDI2LjM5LTE4LjggMjYuMzktMTguOCAwLTcuOTYtNS4zMy0xNC42MS0xMy4wMi0xNi40MnptLTMxLjAyIDIyLjIyaC0xMy43MXYtMTQuODNoMTMuMjJjNy4yMyAwIDExLjA5IDIuMzEgMTEuMDkgNy40OC4wMSA0Ljk0LTMuNDkgNy4zNS0xMC42IDcuMzV6bTEuMDYtMjkuOTFoLTE0Ljc3VjczLjI1aDE0LjI1YzcuODUgMCAxMi4wMyAyLjUgMTIuMDMgOC4xMSAwIDUuMzUtMy43OSA3Ljk3LTExLjUxIDcuOTd6TTE4Mi43NiA4OS4zM2wuOSAxNS4wOGgyMi4wM2wuOS0xNS4wOHpNMzI5LjY0IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4elwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJNNTMwLjM0IDE3Mi43N2MwLTIuNDYtMS40Ni0zLjU0LTQuNC0zLjU0aC00Ljc0djEyLjQ0aDEuODh2LTUuMzloMi4xN2wzLjI4IDUuMzloMi4xMWwtMy41NC01LjQ4YzEuODQtLjIyIDMuMjQtMS4xOSAzLjI0LTMuNDJ6bS03LjI1IDEuOTJ2LTMuODZoMi41N2MxLjMxIDAgMi43MS4yOSAyLjcxIDEuODMgMCAxLjkyLTEuNDMgMi4wMy0zLjAzIDIuMDNoLTIuMjV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk01MjUuMzcgMTY0LjY3Yy01LjkzIDAtMTAuOTYgNC41Ny0xMC45NiAxMC43NiAwIDYuMjQgNS4wMiAxMC44MSAxMC45NiAxMC44MSA1Ljg4IDAgMTAuOS00LjU3IDEwLjktMTAuODEgMC02LjItNS4wMi0xMC43Ni0xMC45LTEwLjc2em0wIDE5Ljc4Yy00LjkzIDAtOC43OS0zLjgzLTguNzktOS4wMiAwLTUuMTEgMy44NS04Ljk2IDguNzktOC45NiA0Ljg4IDAgOC43MyAzLjg1IDguNzMgOC45NiAwIDUuMTktMy44NSA5LjAyLTguNzMgOS4wMnpcIiBjbGFzcz1cInN0MFwiLz48L2c+PC9zdmc+YFxuKTtcblxuZXhwb3J0IGNvbnN0IGhlYkxvZ29XaGl0ZUNvcHlyaWdodFN2Z0NvbnRlbnRzOiBEaXJlY3RpdmVSZXN1bHQ8dHlwZW9mIFVuc2FmZVNWR0RpcmVjdGl2ZT4gPVxuICB1bnNhZmVTVkcoXG4gICAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgaWQ9XCJMYXllcl8xXCIgeD1cIjBcIiB5PVwiMFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDUzNi4yNyAxODYuMjRcIj48c3R5bGU+LnN0MHtmaWxsOiNlMTI1MWJ9LnN0MXtmaWxsOiNmZmZ9PC9zdHlsZT48ZyBpZD1cIl94MzFfLUhFQl9NQUlOX0xPR09fMDAwMDAwOTYwNDM0MDQyMDY4NjE4ODA4NzAwMDAwMDQ4MTMyNDA5Mzg5NDY4NTUzNTVfXCI+PHBhdGggZD1cIk05My4xMiAxODYuMjRDNDEuNjkgMTg2LjI0IDAgMTQ0LjU1IDAgOTMuMTJTNDEuNjkgMCA5My4xMiAwaDM1MC4wM2M1MS40MyAwIDkzLjEyIDQxLjY5IDkzLjEyIDkzLjEycy00MS42OSA5My4xMi05My4xMiA5My4xMkg5My4xMnpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTkzLjEyIDE3NC4xOWMtNDQuNzYgMC04MS4wNS0zNi4yOS04MS4wNS04MS4wNXMzNi4yOS04MS4wNSA4MS4wNS04MS4wNWgzNTAuMDNjNDQuNzYgMCA4MS4wNSAzNi4yOSA4MS4wNSA4MS4wNXMtMzYuMjkgODEuMDUtODEuMDUgODEuMDVIOTMuMTJ6XCIgY2xhc3M9XCJzdDFcIi8+PHBhdGggZD1cIm00NDQuOTQgMjQuMTEtMzUzLjY0LjAyYy0zNy4wNyAwLTY3LjIgMzAuOTUtNjcuMTYgNjkuMDcgMCAzNy45MyAzMC4xNiA2OC44OCA2Ny4xNiA2OC44OGwzNTMuNjMtLjA3YzM3LjEtLjAzIDY3LjE1LTMwLjg5IDY3LjItNjguODUtLjA0LTM4LjItMzAuMDktNjkuMDUtNjcuMTktNjkuMDV6XCIgY2xhc3M9XCJzdDBcIi8+PHBhdGggZD1cIk0yMjQuMjEgMTMyLjIzaDg4LjFsLjc2LTEyLjk4aC01Ni4xOHYtMTQuODRoNDQuODFWODkuMzNoLTQ0LjgxVjczLjI1bDU4LjkyLS4wMSAxLjE1LTE5LjI5aC05Ny40ek0xMzIuNDYgNTMuOTV2MzUuMzhIMTA4LjZWNTMuOTVINzEuMjdsNC42NSA3OC4yOGgzMi42OHYtMjcuODJoMjMuODZ2MjcuODJoMzIuNjhsNC42NS03OC4yOHpNNDQ4LjUyIDk3LjAyYzkuOS0yLjgzIDE2LjQ5LTguNTkgMTYuNDktMjAuNjcuMDMtMTMuODItMTEuMDYtMjIuNC0yNS4yOS0yMi40aC03My4yOGw0LjY1IDc4LjI5aDY0LjA2YzI3Ljk4IDAgMjYuMzktMTguOCAyNi4zOS0xOC44IDAtNy45Ni01LjMzLTE0LjYxLTEzLjAyLTE2LjQyem0tMzEuMDIgMjIuMjJoLTEzLjcxdi0xNC44M2gxMy4yMmM3LjIzIDAgMTEuMDkgMi4zMSAxMS4wOSA3LjQ4LjAxIDQuOTQtMy40OSA3LjM1LTEwLjYgNy4zNXptMS4wNi0yOS45MWgtMTQuNzdWNzMuMjVoMTQuMjVjNy44NSAwIDEyLjAzIDIuNSAxMi4wMyA4LjExIDAgNS4zNS0zLjc5IDcuOTctMTEuNTEgNy45N3pNMTgyLjc2IDg5LjMzbC45IDE1LjA4aDIyLjAzbC45LTE1LjA4ek0zMjkuNjQgODkuMzNsLjkgMTUuMDhoMjIuMDNsLjktMTUuMDh6TTUyOC4zNCAxNzAuNzdjMC0yLjQ2LTEuNDYtMy41NC00LjQtMy41NGgtNC43NHYxMi40NGgxLjg4di01LjM5aDIuMTdsMy4yOCA1LjM5aDIuMTFsLTMuNTQtNS40OGMxLjg0LS4yMiAzLjI0LTEuMTkgMy4yNC0zLjQyem0tNy4yNSAxLjkydi0zLjg2aDIuNTdjMS4zMSAwIDIuNzEuMjkgMi43MSAxLjgzIDAgMS45Mi0xLjQzIDIuMDMtMy4wMyAyLjAzaC0yLjI1elwiIGNsYXNzPVwic3QxXCIvPjxwYXRoIGQ9XCJNNTIzLjM3IDE2Mi42N2MtNS45MyAwLTEwLjk2IDQuNTctMTAuOTYgMTAuNzYgMCA2LjI0IDUuMDIgMTAuODEgMTAuOTYgMTAuODEgNS44OCAwIDEwLjktNC41NyAxMC45LTEwLjgxIDAtNi4yLTUuMDItMTAuNzYtMTAuOS0xMC43NnptMCAxOS43OGMtNC45MyAwLTguNzktMy44My04Ljc5LTkuMDIgMC01LjExIDMuODUtOC45NiA4Ljc5LTguOTYgNC44OCAwIDguNzMgMy44NSA4LjczIDguOTYgMCA1LjE5LTMuODUgOS4wMi04LjczIDkuMDJ6XCIgY2xhc3M9XCJzdDFcIi8+PC9nPjwvc3ZnPmBcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGhlYkxvZ29JbnZlcnNlU3ZnQ29udGVudHM6IERpcmVjdGl2ZVJlc3VsdDx0eXBlb2YgVW5zYWZlU1ZHRGlyZWN0aXZlPiA9IHVuc2FmZVNWRyhcbiAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgaWQ9XCJMYXllcl8xXCIgeD1cIjBcIiB5PVwiMFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDUzNi4yNyAxODYuMjRcIj48c3R5bGU+LnN0MHtmaWxsOiNmZmZ9PC9zdHlsZT48cGF0aCBkPVwiTTQ0My4xNSAwSDkzLjEyQzQxLjY5IDAgMCA0MS42OSAwIDkzLjEyYzAgNTEuNDMgNDEuNjkgOTMuMTIgOTMuMTIgOTMuMTJoMzUwLjAzYzUxLjQzIDAgOTMuMTItNDEuNjkgOTMuMTItOTMuMTJDNTM2LjI3IDQxLjY5IDQ5NC41OCAwIDQ0My4xNSAwem0wIDE3NC4xOUg5My4xMmMtNDQuNzYgMC04MS4wNS0zNi4yOS04MS4wNS04MS4wNXMzNi4yOS04MS4wNSA4MS4wNS04MS4wNWgzNTAuMDNjNDQuNzYgMCA4MS4wNSAzNi4yOSA4MS4wNSA4MS4wNS4wMSA0NC43Ni0zNi4yOCA4MS4wNS04MS4wNSA4MS4wNXptLTEzLjA4LTkyLjgzYzAgNS4zNi0zLjc5IDcuOTgtMTEuNTEgNy45OGgtMTQuNzdWNzMuMjVoMTQuMjVjNy44NCAwIDEyLjAzIDIuNSAxMi4wMyA4LjExem0tMS45NiAzMC41M2MwIDQuOTQtMy41IDcuMzYtMTAuNjEgNy4zNmgtMTMuNzF2LTE0LjgzaDEzLjIyYzcuMjQtLjAxIDExLjEgMi4zIDExLjEgNy40N3ptMTYuODMtODcuNzgtMzUzLjY0LjAyYy0zNy4wNyAwLTY3LjIgMzAuOTUtNjcuMTYgNjkuMDcgMCAzNy45MiAzMC4xNiA2OC44OCA2Ny4xNiA2OC44OGwzNTMuNjMtLjA3YzM3LjEtLjAzIDY3LjE1LTMwLjg5IDY3LjItNjguODUtLjA0LTM4LjItMzAuMDktNjkuMDUtNjcuMTktNjkuMDV6bS0yNzkuOCAxMDguMTJoLTMyLjY4di0yNy44MkgxMDguNnYyNy44Mkg3NS45MmwtNC42NS03OC4yOGgzNy4zM3YzNS4zOGgyMy44NlY1My45NWgzNy4zM2wtNC42NSA3OC4yOHptNDAuNTUtMjcuODJoLTIyLjA0bC0uOS0xNS4wOGgyMy44M2wtLjg5IDE1LjA4em0xMTAuMTItMzEuMTctNTguOTIuMDF2MTYuMDhoNDQuODF2MTUuMDhoLTQ0LjgxdjE0LjgzaDU2LjE4bC0uNzYgMTIuOTloLTg4LjFsLTQuNjUtNzguMjhoOTcuNGwtMS4xNSAxOS4yOXptMzYuNzYgMzEuMTdoLTIyLjA0bC0uOS0xNS4wOGgyMy44M2wtLjg5IDE1LjA4em0xMDguOTcgOS4wM3MxLjU5IDE4LjgtMjYuMzkgMTguOGgtNjQuMDZsLTQuNjUtNzguMjloNzMuMjhjMTQuMjMgMCAyNS4zMSA4LjU4IDI1LjI5IDIyLjQgMCAxMi4wOC02LjU5IDE3Ljg1LTE2LjQ5IDIwLjY3IDcuNjkgMS44MSAxMy4wMiA4LjQ2IDEzLjAyIDE2LjQyek01MzAuMzQgMTcyLjc3YzAtMi40Ni0xLjQ2LTMuNTQtNC40LTMuNTRoLTQuNzR2MTIuNDRoMS44OHYtNS4zOWgyLjE3bDMuMjggNS4zOWgyLjExbC0zLjU0LTUuNDhjMS44NC0uMjIgMy4yNC0xLjE5IDMuMjQtMy40MnptLTcuMjUgMS45MnYtMy44NmgyLjU3YzEuMzEgMCAyLjcxLjI5IDIuNzEgMS44MyAwIDEuOTItMS40MyAyLjAzLTMuMDMgMi4wM2gtMi4yNXpcIiBjbGFzcz1cInN0MFwiLz48cGF0aCBkPVwiTTUyNS4zNyAxNjQuNjdjLTUuOTMgMC0xMC45NiA0LjU3LTEwLjk2IDEwLjc2IDAgNi4yNCA1LjAyIDEwLjgxIDEwLjk2IDEwLjgxIDUuODggMCAxMC45LTQuNTcgMTAuOS0xMC44MSAwLTYuMi01LjAyLTEwLjc2LTEwLjktMTAuNzZ6bTAgMTkuNzhjLTQuOTMgMC04Ljc5LTMuODMtOC43OS05LjAyIDAtNS4xMSAzLjg1LTguOTYgOC43OS04Ljk2IDQuODggMCA4LjczIDMuODUgOC43MyA4Ljk2IDAgNS4xOS0zLjg1IDkuMDItOC43MyA5LjAyelwiIGNsYXNzPVwic3QwXCIvPjwvc3ZnPmBcbik7XG4iLCAiLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbmltcG9ydCB7XG4gIGNvbmZpZyBhcyBnZXR0ZXJDb25maWcsXG4gIHNldENvbmZpZyBhcyBzZXR0ZXJDb25maWcsXG4gIE1vcnRhclRoZW1lQ29uZmlnLFxufSBmcm9tICdAbW9ydGFyL3N0eWxlcyc7XG5pbXBvcnQgeyBTdWJzZXQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc1Nzciwgc2lnbmFsIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuZXhwb3J0IHR5cGUgTXRlVGhlbWUgPSAnZGVmYXVsdCcgfCAncHhMaWdodCcgfCAnY3hMaWdodCcgfCAncnhMaWdodCc7XG5cbmV4cG9ydCB0eXBlIE10ZUNvbG9yU2NoZW1lID0gJ2xpZ2h0JyB8ICdkYXJrJyB8ICdzeXN0ZW0nO1xuXG5jb25zdCBDQUNIRV9UT19LRVkgPSAnbXRlLnRoZW1lLmNhY2hlLXRvJztcbmNvbnN0IENPTE9SX1NDSEVNRV9LRVkgPSAnbXRlLnRoZW1lLmdsb2JhbC1jb2xvci1zY2hlbWUnO1xuXG5jbGFzcyBfTXRlVGhlbWVTZXJ2aWNlIHtcbiAgY29uZmlnID0gZ2V0dGVyQ29uZmlnO1xuXG4gIHByaXZhdGUgcm9vdE9ic2VydmVyPzogTXV0YXRpb25PYnNlcnZlcjtcbiAgcHJpdmF0ZSB0aGVtZVNpZ25hbCA9IHNpZ25hbDxNdGVUaGVtZSB8IG51bGw+KHRoaXMuZ2V0R2xvYmFsVGhlbWUoKSk7XG4gIHByaXZhdGUgY29sb3JTY2hlbWVTaWduYWwgPSBzaWduYWw8TXRlQ29sb3JTY2hlbWUgfCBudWxsPih0aGlzLmdldEdsb2JhbENvbG9yU2NoZW1lKCkgPz8gJ2xpZ2h0Jyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0Q2FjaGUoKTtcbiAgfVxuXG4gIC8qKiBDb25maWd1cmVzIHRoZSBgTXRlVGhlbWVTZXJ2aWNlYCB0byBjYWNoZSBjb2xvci1zY2hlbWUgY2hhbmdlcyB0byBgbG9jYWxTdG9yYWdlYCwgYHNlc3Npb25TdG9yYWdlYCwgb3IgbmVpdGhlci4gKi9cbiAgcHVibGljIGNhY2hlQ29sb3JTY2hlbWVUbyhtZXRob2Q6ICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJykge1xuICAgIGlmICghbWV0aG9kKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENsZWFyIGFsbCBrZXlzIGZyb20gYWxsIHN0b3JhZ2UgbG9jYXRpb25zIGlmIG5vbmVcbiAgICBpZiAobWV0aG9kID09PSAnbm9uZScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKENPTE9SX1NDSEVNRV9LRVkpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIHRyeSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oQ0FDSEVfVE9fS0VZKTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShDT0xPUl9TQ0hFTUVfS0VZKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRTY2hlbWUgPSB0aGlzLmNvbG9yU2NoZW1lU2lnbmFsLmdldCgpO1xuICAgIC8vIFNldCBjYWNoZSBtZXRob2QgaW4gc3RvcmFnZSAtIFRyeSBsb2NhbFN0b3JhZ2UgZmlyc3RcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ0FDSEVfVE9fS0VZLCBtZXRob2QpO1xuICAgICAgaWYgKGN1cnJlbnRTY2hlbWUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ09MT1JfU0NIRU1FX0tFWSwgY3VycmVudFNjaGVtZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ010ZVRoZW1lU2VydmljZTogQ291bGQgbm90IHNldCBjb2xvciBzY2hlbWUgY2FjaGUgbWV0aG9kIHRvIGBsb2NhbFN0b3JhZ2VgLiBBdHRlbXB0aW5nIGZhbGxiYWNrIHRvIGBzZXNzaW9uU3RvcmFnZWAuIENhY2hpbmcgd2lsbCBvbmx5IGhhcHBlbiB0byBzZXNzaW9uU3RvcmFnZS4nXG4gICAgICApO1xuICAgICAgLy8gVHJ5IHNlc3Npb25TdG9yYWdlIG5leHRcbiAgICAgIHRyeSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oQ0FDSEVfVE9fS0VZLCAnc2Vzc2lvblN0b3JhZ2UnKTtcbiAgICAgICAgaWYgKGN1cnJlbnRTY2hlbWUpIHtcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKENPTE9SX1NDSEVNRV9LRVksIGN1cnJlbnRTY2hlbWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ010ZVRoZW1lU2VydmljZTogQ291bGQgbm90IHNldCBjb2xvciBzY2hlbWUgY2FjaGUgbWV0aG9kIHRvIGBsb2NhbFN0b3JhZ2VgIG9yIGBzZXNzaW9uU3RvcmFnZWAuIENhY2hpbmcgbm90IGVuYWJsZWQuJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBjdXJyZW50IGdsb2JhbCB0aGVtZSBvbiB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgc2V0R2xvYmFsVGhlbWUodGhlbWU6IE10ZVRoZW1lKSB7XG4gICAgaWYgKCF0aGVtZSB8fCB0eXBlb2YgdGhlbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ010ZVRoZW1lU2VydmljZTogR2xvYmFsIHRoZW1lIHBhcmFtIG11c3QgYmUgYSBzdHJpbmcuJyk7XG4gICAgfVxuICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgaWYgKHRoZW1lICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnZGF0YS1tdGUtdGhlbWUnLCB0aGVtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1tdGUtdGhlbWUnKTtcbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgY3VycmVudCBnbG9iYWwgY29sb3Itc2NoZW1lIG9uIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBzZXRHbG9iYWxDb2xvclNjaGVtZShjb2xvclNjaGVtZTogTXRlQ29sb3JTY2hlbWUpIHtcbiAgICBpZiAoIWNvbG9yU2NoZW1lIHx8IHR5cGVvZiBjb2xvclNjaGVtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXRlVGhlbWVTZXJ2aWNlOiBHbG9iYWwgY29sb3JTY2hlbWUgcGFyYW0gbXVzdCBiZSBhIHN0cmluZy4nKTtcbiAgICB9XG4gICAgY29uc3Qgc2NoZW1lID0gY29sb3JTY2hlbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoc2NoZW1lID09PSAnZGFyaycgfHwgc2NoZW1lID09PSAnbGlnaHQnIHx8IHNjaGVtZSA9PT0gJ3N5c3RlbScpIHtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnZGF0YS1tdGUtY29sb3Itc2NoZW1lJywgc2NoZW1lKTtcbiAgICAgIHRoaXMuc2V0Q2FjaGVWYWx1ZShDT0xPUl9TQ0hFTUVfS0VZLCBjb2xvclNjaGVtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1tdGUtY29sb3Itc2NoZW1lJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGN1cnJlbnQgZ2xvYmFsIHRoZW1lIGZyb20gdGhlIGRvY3VtZW50IHJvb3QgKi9cbiAgcHVibGljIGdldEdsb2JhbFRoZW1lKCk6IE10ZVRoZW1lIHwgbnVsbCB7XG4gICAgY29uc3QgdmFsdWUgPSBnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtbXRlLXRoZW1lJykgYXMgTXRlVGhlbWU7XG4gICAgaWYgKCFbJ2RlZmF1bHQnLCAncHhMaWdodCcsICdjeExpZ2h0JywgJ3J4TGlnaHQnXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgYXMgTXRlVGhlbWU7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGN1cnJlbnQgZ2xvYmFsIGNvbG9yLXNjaGVtZSBmcm9tIHRoZSBkb2N1bWVudCByb290ICovXG4gIHB1YmxpYyBnZXRHbG9iYWxDb2xvclNjaGVtZSgpOiBNdGVDb2xvclNjaGVtZSB8IG51bGwge1xuICAgIGNvbnN0IHZhbHVlID0gZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKFxuICAgICAgJ2RhdGEtbXRlLWNvbG9yLXNjaGVtZSdcbiAgICApIGFzIE10ZUNvbG9yU2NoZW1lO1xuICAgIGlmICghWydsaWdodCcsICdkYXJrJywgJ3N5c3RlbSddLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZSBhcyBNdGVDb2xvclNjaGVtZTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyBhIHJlYWN0aXZlIHNpZ25hbCB0aGF0IHdpbGwgdXBkYXRlIGFueSB0aW1lIHRoZSBnbG9iYWwgdGhlbWUgY2hhbmdlcyAqL1xuICBwdWJsaWMgc2VsZWN0R2xvYmFsVGhlbWUoKSB7XG4gICAgdGhpcy5pbml0T2JzZXJ2ZXIoKTtcbiAgICByZXR1cm4gdGhpcy50aGVtZVNpZ25hbDtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIGEgcmVhY3RpdmUgc2lnbmFsIHRoYXQgd2lsbCB1cGRhdGUgYW55IHRpbWUgdGhlIGdsb2JhbCBjb2xvci1zY2hlbWUgY2hhbmdlcyAqL1xuICBwdWJsaWMgc2VsZWN0R2xvYmFsQ29sb3JTY2hlbWUoKSB7XG4gICAgdGhpcy5pbml0T2JzZXJ2ZXIoKTtcbiAgICByZXR1cm4gdGhpcy5jb2xvclNjaGVtZVNpZ25hbDtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSB2YWx1ZSBvZiBhbGwgb2YgdGhlIGdpdmVuIHRoZW1lIHZhcmlhYmxlcyBvbiB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgc2V0KFxuICAgIGNvbmZpZ0ZuT3JPYmo6XG4gICAgICB8IFN1YnNldDxNb3J0YXJUaGVtZUNvbmZpZz5cbiAgICAgIHwgKChjb25maWc6IE1vcnRhclRoZW1lQ29uZmlnKSA9PiBTdWJzZXQ8TW9ydGFyVGhlbWVDb25maWc+KVxuICApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZ0ZuT3JPYmogPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbmZpZ0ZuT3JPYmogPSBjb25maWdGbk9yT2JqKHRoaXMuY29uZmlnKTtcbiAgICB9XG4gICAgY29uc3QgbWFwcGluZ3MgPSB0aGlzLmZsYXR0ZW5QYXRocyhjb25maWdGbk9yT2JqKTtcbiAgICBtYXBwaW5ncy5mb3JFYWNoKChbcGF0aCwgdmFsXSkgPT4ge1xuICAgICAgY29uc3QgY3NzVmFyID0gcGF0aC5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjW3Byb3BdO1xuICAgICAgfSwgc2V0dGVyQ29uZmlnKTtcbiAgICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LnN0eWxlLnNldFByb3BlcnR5KGNzc1ZhciwgYCR7dmFsfWApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJldHJpZXZlcyB0aGUgdmFsdWUgZm9yIHRoZSByZXF1ZXN0ZWQgdGhlbWUgdmFyaWFibGUgZnJvbSB0aGUgZG9jdW1lbnQgcm9vdCAqL1xuICBwdWJsaWMgZ2V0PFQ+KGsxOiAodGhlbWVDb25maWc6IE1vcnRhclRoZW1lQ29uZmlnKSA9PiBUKTogVDtcbiAgcHVibGljIGdldDxLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnPihrMTogSzEpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8SzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZywgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0+KFxuICAgIGsxOiBLMSxcbiAgICBrMjogSzJcbiAgKTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVxuICA+KGsxOiBLMSwgazI6IEsyLCBrMzogSzMpOiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXTtcbiAgLyoqIEBpbnRlcm5hbCAqKi9cbiAgcHVibGljIGdldDxcbiAgICBLMSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnLFxuICAgIEsyIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXSxcbiAgICBLNCBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdXG4gID4oazE6IEsxLCBrMjogSzIsIGszOiBLMywgazQ6IEs0KTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdO1xuICAvKiogQGludGVybmFsICoqL1xuICBwdWJsaWMgZ2V0PFxuICAgIEsxIGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWcsXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV0sXG4gICAgSzMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdLFxuICAgIEs0IGV4dGVuZHMga2V5b2YgTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM10sXG4gICAgSzUgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXVtLNF1cbiAgPihrMTogSzEsIGsyOiBLMiwgazM6IEszLCBrNDogSzQsIGs1OiBLNSk6IE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVtLNV07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl0sXG4gICAgSzQgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXSxcbiAgICBLNSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XSxcbiAgICBLNiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVtLNV1cbiAgPihrMTogSzEsIGsyOiBLMiwgazM6IEszLCBrNDogSzQsIGs1OiBLNSwgazY6IEs2KTogTW9ydGFyVGhlbWVDb25maWdbSzFdW0syXVtLM11bSzRdW0s1XVtLNl07XG4gIC8qKiBAaW50ZXJuYWwgKiovXG4gIHB1YmxpYyBnZXQ8XG4gICAgSzEgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZyxcbiAgICBLMiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl0sXG4gICAgSzQgZXh0ZW5kcyBrZXlvZiBNb3J0YXJUaGVtZUNvbmZpZ1tLMV1bSzJdW0szXSxcbiAgICBLNSBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XSxcbiAgICBLNiBleHRlbmRzIGtleW9mIE1vcnRhclRoZW1lQ29uZmlnW0sxXVtLMl1bSzNdW0s0XVtLNV1cbiAgPihcbiAgICAuLi5rZXlzOlxuICAgICAgfCBbSzFdXG4gICAgICB8IFtLMSwgSzJdXG4gICAgICB8IFtLMSwgSzIsIEszXVxuICAgICAgfCBbSzEsIEsyLCBLMywgSzRdXG4gICAgICB8IFtLMSwgSzIsIEszLCBLNCwgSzVdXG4gICAgICB8IFtLMSwgSzIsIEszLCBLNCwgSzUsIEs2XVxuICApOiBhbnkge1xuICAgIGNvbnN0IFtmbl0gPSBrZXlzID8/IFtudWxsXTtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBjc3NWYXIgPSAoZm4gYXMgYW55KShzZXR0ZXJDb25maWcpO1xuICAgICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZ2xvYmFsVGhpcz8uZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Zhcik7XG4gICAgfVxuICAgIGNvbnN0IGNzc1ZhciA9IGtleXMucmVkdWNlKChhY2M6IGFueSwga2V5KSA9PiBhY2Nba2V5XSwgc2V0dGVyQ29uZmlnIGFzIGFueSkgYXMgc3RyaW5nO1xuICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGdsb2JhbFRoaXM/LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShjc3NWYXIpO1xuICB9XG5cbiAgLyoqIEZsYXR0ZW5zIGEgZ2l2ZW4gb2JqZWN0IHRvIGFuIGFycmF5IG9mIHBhdGgga2V5cyBhbmQgaXRzIHJlc3VsdGluZyB2YWx1ZSAqL1xuICBwcml2YXRlIGZsYXR0ZW5QYXRocyhvYmo6IFJlY29yZDxzdHJpbmcsIGFueT4sIHBhdGg6IHN0cmluZ1tdID0gW10pOiBbc3RyaW5nW10sIGFueV1bXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgY29uc3QgbmVzdGVkID0gb2JqW2tleV07XG4gICAgICBpZiAodHlwZW9mIG5lc3RlZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcGF0aC5wdXNoKGtleSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYWNjLCB0aGlzLmZsYXR0ZW5QYXRocyhuZXN0ZWQsIHBhdGgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGgucHVzaChrZXkpO1xuICAgICAgICBhY2MucHVzaChbcGF0aCwgbmVzdGVkXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTXV0YXRpb25FdmVudCA9IChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG4gICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIHtcbiAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkYXRhLW10ZS1jb2xvci1zY2hlbWUnKSB7XG4gICAgICAgICAgdGhpcy5jb2xvclNjaGVtZVNpZ25hbC5zZXQodGhpcy5nZXRHbG9iYWxDb2xvclNjaGVtZSgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGF0YS1tdGUtdGhlbWUnKSB7XG4gICAgICAgICAgdGhpcy50aGVtZVNpZ25hbC5zZXQodGhpcy5nZXRHbG9iYWxUaGVtZSgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGluaXRDYWNoZSgpIHtcbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIHRoaXMuaW5pdE9ic2VydmVyKCk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjYWNoZUNvbG9yU2NoZW1lID0gdGhpcy5nZXRDYWNoZVZhbHVlKENPTE9SX1NDSEVNRV9LRVkpO1xuICAgICAgICBpZiAoY2FjaGVDb2xvclNjaGVtZSAmJiBjYWNoZUNvbG9yU2NoZW1lICE9PSAnJykge1xuICAgICAgICAgIHRoaXMuc2V0R2xvYmFsQ29sb3JTY2hlbWUoY2FjaGVDb2xvclNjaGVtZSBhcyBNdGVDb2xvclNjaGVtZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0T2JzZXJ2ZXIoKSB7XG4gICAgaWYgKCFpc1NzcigpICYmICF0aGlzLnJvb3RPYnNlcnZlcikge1xuICAgICAgdGhpcy5yb290T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmhhbmRsZU11dGF0aW9uRXZlbnQpO1xuICAgICAgdGhpcy5yb290T2JzZXJ2ZXIub2JzZXJ2ZShnbG9iYWxUaGlzPy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogWydkYXRhLW10ZS10aGVtZScsICdkYXRhLW10ZS1jb2xvci1zY2hlbWUnXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FjaGVNZXRob2QoKTogJ2xvY2FsU3RvcmFnZScgfCAnc2Vzc2lvblN0b3JhZ2UnIHwgJ25vbmUnIHwgbnVsbCB7XG4gICAgLy8gUmV0cmlldmUgY2FjaGUgbWV0aG9kXG4gICAgbGV0IGNhY2hlTWV0aG9kOiAnbG9jYWxTdG9yYWdlJyB8ICdzZXNzaW9uU3RvcmFnZScgfCAnbm9uZScgfCBudWxsID0gbnVsbDtcbiAgICAvLyBUcnkgbG9jYWxTdG9yYWdlXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKENBQ0hFX1RPX0tFWSk7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGNhY2hlTWV0aG9kID0gdmFsIGFzICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBUcnkgc2Vzc2lvblN0b3JhZ2VcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oQ0FDSEVfVE9fS0VZKTtcbiAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgIGNhY2hlTWV0aG9kID0gdmFsIGFzICdsb2NhbFN0b3JhZ2UnIHwgJ3Nlc3Npb25TdG9yYWdlJyB8ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlTWV0aG9kO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDYWNoZVZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2FjaGVNZXRob2QgPSB0aGlzLmdldENhY2hlTWV0aG9kKCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChjYWNoZU1ldGhvZCA9PT0gJ2xvY2FsU3RvcmFnZScpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGNhY2hlTWV0aG9kID09PSAnc2Vzc2lvblN0b3JhZ2UnKSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FjaGVWYWx1ZShrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IGNhY2hlTWV0aG9kID0gdGhpcy5nZXRDYWNoZU1ldGhvZCgpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoY2FjaGVNZXRob2QgPT09ICdsb2NhbFN0b3JhZ2UnKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgfSBlbHNlIGlmIChjYWNoZU1ldGhvZCA9PT0gJ3Nlc3Npb25TdG9yYWdlJykge1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZVRoZW1lU2VydmljZSA9IG5ldyBfTXRlVGhlbWVTZXJ2aWNlKCk7XG4iLCAiaW1wb3J0IHsgaXNTc3IsIGlzUGxhdGZvcm0gfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgdHlwZSBQb3J0YWxTdGFjayA9ICdvdmVybGF5JztcblxuZXhwb3J0IGludGVyZmFjZSBQb3J0YWxlZEVsZW1lbnRNZXRhZGF0YSB7XG4gIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHN0YWNrOiBQb3J0YWxTdGFjaztcbiAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzOiBTZXQ8RWxlbWVudD47XG4gIHBhcmVudFBvcnRhbGVkRWxlbWVudD86IEVsZW1lbnQ7XG4gIGJhY2tkcm9wPzogRWxlbWVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50UG9ydGFsQ29udHJvbGxlciB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcmVudFBvcnRhbGVkRWxlbWVudDogRWxlbWVudDtcbiAgb3B0aW9uczogeyBzdGFjazogUG9ydGFsU3RhY2sgfTtcbn1cblxuZXhwb3J0IHR5cGUgUG9ydGFsQWRhcHRlcjxUID0gYW55PiA9IChcbiAgcG9ydGFsRWxlbWVudDogVCxcbiAgb3V0bGV0RWxlbWVudDogRWxlbWVudFxuKSA9PiBQcm9taXNlPGFueT4gfCBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydGFsT3B0aW9ucyB7XG4gIC8qKiBSZW5kZXJzIHRoZSBiYWNrZHJvcCBkaW1tZWQgKi9cbiAgd2l0aERpbUJhY2tkcm9wPzogYm9vbGVhbjtcblxuICAvKiogTWFrZXMgdGhlIGJhY2tkcm9wIGlnbm9yZSBwb2ludGVyIGV2ZW50cy4gVXNlZnVsIGZvciB0cmlnZ2VyT24gXCJob3ZlclwiLiAqL1xuICB3aXRoSW5lcnRCYWNrZHJvcD86IGJvb2xlYW47XG5cbiAgLyoqIERpc2FibGVzIHRoZSBhYmlsaXR5IHRvIHNjcm9sbCB0aGUgcGFnZSBiZWhpbmQgdGhlIG92ZXJsYXkgd2hlbiB0cnVlICovXG4gIHdpdGhTY3JvbGxMb2NrPzogYm9vbGVhbjtcblxuICAvKiogQ2FsbGJhY2sgZm9yIGhhbmRsaW5nIGNsb3NlT25DbGlja091dHNpZGUgZXZlbnRzIHdoZW4gdGhlIHBvcnRhbCdzIGJhY2tkcm9wIGlzIGNsaWNrZWQgKi9cbiAgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXI/OiAoKSA9PiBhbnk7XG5cbiAgLyoqIFRoZSBhbmltYXRpb24gZHVyYXRpb24gZm9yIGZhZGluZyBhIHNoYWRvdyBiYWNrZHJvcCBpbi9vdXQgKi9cbiAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG5cbiAgLyoqIEFkYXB0ZXIgZm9yIFwicG9ydGFsaW5nXCIgYW4gZWxlbWVudCBmcm9tIG9uZSBsb2NhdGlvbiBpbiB0aGUgRE9NIHRvIGFub3RoZXIuIExldmVyYWdlZCBieSBmcmFtZXdvcmsgd3JhcHBlcnMgZm9yIGltcHJvdmVkIGludGVyb3AuICovXG4gIHBvcnRhbEFkYXB0ZXI/OiBQb3J0YWxBZGFwdGVyO1xufVxuXG4vKiogRGVmYXVsdCBuYXRpdmUgRE9NIGFkYXB0ZXIgZm9yIHBvcnRhbGluZyBhbiBlbGVtZW50IHRvIGFub3RoZXIgdGFyZ2V0IGVsZW1lbnQgKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0UG9ydGFsQWRhcHRlcjogUG9ydGFsQWRhcHRlciA9IChwb3J0YWxFbGVtLCBvdXRsZXRFbGVtKSA9PiB7XG4gIG91dGxldEVsZW0/LmFwcGVuZENoaWxkKHBvcnRhbEVsZW0pO1xufTtcblxuY2xhc3MgX010ZVBvcnRhbFNlcnZpY2Uge1xuICAvKiogU2hhcmVkIGdsb2JhbCBjb25zdCBmb3Igc3RhY2sgZWxlbWVudCByZWZzICovXG4gIHByaXZhdGUgc3RhY2tFbGVtZW50czogeyBvdmVybGF5OiBFbGVtZW50IH0gPSB7XG4gICAgb3ZlcmxheTogdW5kZWZpbmVkLFxuICB9O1xuXG4gIC8qKiBTaGFyZWQgZ2xvYmFsIGNvbnN0IGZvciBwb3J0YWxlZCBlbGVtZW50cyBtZXRhZGF0YSAqL1xuICBwcml2YXRlIHBvcnRhbGVkRWxlbWVudHMgPSBuZXcgTWFwPG51bWJlciwgTWFwPEVsZW1lbnQsIFBvcnRhbGVkRWxlbWVudE1ldGFkYXRhPj4oKTtcblxuICBwcml2YXRlIGFjdGl2ZVNjcm9sbExvY2tzID0gbmV3IFNldDxFbGVtZW50PigpO1xuXG4gIHByaXZhdGUgc3RhY2tNdXRhdGlvbk9ic2VydmVyPzogTXV0YXRpb25PYnNlcnZlcjtcblxuICAvKipcbiAgICogV2hlbiBjYWxsZWQsIHRoaXMgc2VydmljZSB3aWxsIGF0dGVtcHQgdG8gbG9jYXRlIHRoZSBgQGFuZ3VsYXIvY2RrYCBvdmVybGF5IHN0YWNrLlxuICAgKiBJZiBmb3VuZCB0aGlzIHNlcnZpY2Ugd2lsbCBiZSBjb25maWd1cmVkIHRvIHVzZSB0aGF0IGVsZW1lbnQgYXMgdGhlIGBvdmVybGF5YCBzdGFjayBpbnN0ZWFkIG9mIGluaXRpYWxpemluZyBpdHMgb3duLlxuICAgKi9cbiAgcHVibGljIGNvbmZpZ3VyZUNka0ludGVyb3AoKSB7XG4gICAgaWYgKCFpc1NzcigpKSB7XG4gICAgICBjb25zdCBjZGtTdGFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZGstb3ZlcmxheS1jb250YWluZXInKTtcbiAgICAgIGlmIChjZGtTdGFjaykge1xuICAgICAgICB0aGlzLnN0YWNrRWxlbWVudHMub3ZlcmxheSA9IGNka1N0YWNrO1xuICAgICAgICB0aGlzLnN0YWNrRWxlbWVudHMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKHRoaXMuaWRGYWN0b3J5KCdvdmVybGF5JykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBwb3J0YWwgY29udHJvbGxlci4gQWxsIGl0ZW1zIGl0IHJlcXVlc3RlZCB0byBiZSBwb3J0YWxlZCB3aWxsIGJlIHRyYWNrIGFnYWluc3QgaXQuXG4gICAqIFdoZW4gdGhlIHBvcnRhbCBpcyByZW1vdmVkIHdlIGNhbiB0aGVuIHJlbW92ZSBhbnkgZWxlbWVudHMgaXQgY3VycmVudGx5IGhhcyBwb3J0YWxlZCBhbmRcbiAgICogYW55IG9mIHRoZWlyIHBvcnRhbGVkIGNoaWxkcmVuLlxuICAgKi9cbiAgcHVibGljIGFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIpIHtcbiAgICBpZiAoIXRoaXMucG9ydGFsZWRFbGVtZW50cy5oYXMocG9ydGFsQ29udHJvbGxlcj8uaWQpKSB7XG4gICAgICAvLyBUcmFjayBpbiBzZXQgYnkgSUQgc28gd2UgZG9uJ3Qga2VlcCBhIGxpdmUgcmVmZXJlbmNlIHRvIHRoZSBjb250cm9sbGVyIGl0c2VsZlxuICAgICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLnNldChwb3J0YWxDb250cm9sbGVyLmlkLCBuZXcgTWFwPEVsZW1lbnQsIFBvcnRhbGVkRWxlbWVudE1ldGFkYXRhPigpKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVtb3ZlcyBhbGwgb2YgYSBwb3J0YWwgY29udHJvbGxlcnMgcG9ydGFsZWQgZWxlbWVudHMgYW5kIHRoZWlyIHJlZmVyZW5jZXMgKi9cbiAgcHVibGljIHJlbW92ZUNvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIpIHtcbiAgICAvLyBBdHRlbXB0IHRvIHJlbW92ZSBhbGwgaXRlbXMgYXR0YWNoZWQgYnkgdGhpcyBjb250cm9sbGVyIGZyb20gdGhlIGNvbmZpZ3VyZWQgc3RhY2tcbiAgICBjb25zdCBhdHRhY2hlZEVsZW1lbnRzID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKTtcbiAgICBpZiAoYXR0YWNoZWRFbGVtZW50cykge1xuICAgICAgYXR0YWNoZWRFbGVtZW50cy5mb3JFYWNoKChpdGVtKSA9PiB0aGlzLnJlbW92ZUZyb21TdGFjayhwb3J0YWxDb250cm9sbGVyLCBpdGVtLmVsZW1lbnQpKTtcbiAgICB9XG4gICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmRlbGV0ZShwb3J0YWxDb250cm9sbGVyLmlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnN1cmVzIGEgcmVmIHRvIHRoZSBjb25maWd1cmVkIHN0YWNrIGV4aXN0cy4gSWYgaXQgZG9lcyBub3QsIHRoZSBjb25maWd1cmVkIHN0YWNrIHdpbGxcbiAgICogYmUgY3JlYXRlZCBhbmQgYXBwZW5kZWQgdG8gdGhlIGRvY3VtZW50LiBEb2VzIG5vdGhpbmcgZHVyaW5nIFNTUi5cbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplU3RhY2soc3RhY2s6IFBvcnRhbFN0YWNrKSB7XG4gICAgaWYgKHN0YWNrICE9PSAnb3ZlcmxheScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBPdmVybGF5IFN0YWNrOiBcIiR7c3RhY2t9XCIgbXVzdCBiZSAnb3ZlcmxheScgYXQgdGhpcyB0aW1lLmApO1xuICAgIH1cbiAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgIGlmICghdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXSkge1xuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZEZhY3Rvcnkoc3RhY2spKTtcbiAgICAgICAgdGhpcy5zdGFja0VsZW1lbnRzW3N0YWNrXSA9XG4gICAgICAgICAgZWxlbSA/P1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5pZEZhY3Rvcnkoc3RhY2spLFxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10gJiYgIXRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10uaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRTdGFja1RvRG9tKHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10pO1xuXG4gICAgICAgIC8vIEluaXQgbXV0YXRpb24gb2JzZXJ2ZXJcbiAgICAgICAgLy8gVGhpcyB3aWxsIHdhdGNoIGZvciBhbnl0aW1lIHRoZSBzdGFjayBpcyByZW1vdmVkIGZyb20gdGhlIERPTSBmb3Igc29tZSByZWFzb25cbiAgICAgICAgLy8gSWYgaXQgaXMsIGl0IHdpbGwgcmUtYXR0YWNoIGl0IHRvIHRoZSBET00gYWZ0ZXIgdGhlIG5leHQgdGlja1xuICAgICAgICBpZiAoIXRoaXMuc3RhY2tNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgdGhpcy5zdGFja011dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobWwsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG1sKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgcmVtb3ZlZE5vZGUgb2YgbXV0YXRpb24ucmVtb3ZlZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZWROb2RlID09PSB0aGlzLnN0YWNrRWxlbWVudHMub3ZlcmxheSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxJdGVtc0Zyb21TdGFja3MoKTtcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZFN0YWNrVG9Eb20odGhpcy5zdGFja0VsZW1lbnRzLm92ZXJsYXkpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10/LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLnN0YWNrTXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja10ucGFyZW50Tm9kZSwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogZmFsc2UsXG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICBzdWJ0cmVlOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBwZW5kU3RhY2tUb0RvbShzdGFja0VsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAoc3RhY2tFbGVtZW50ICYmICFzdGFja0VsZW1lbnQuaXNDb25uZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHRvYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdtdGUtdG9hc3QtY29udGFpbmVyJyk7XG4gICAgICBpZiAodG9hc3RDb250YWluZXIpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoc3RhY2tFbGVtZW50LCB0b2FzdENvbnRhaW5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChzdGFja0VsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBBcHBlbmRzIGFuIGl0ZW0gdG8gdGhlIGNvbmZpZ3VyZWQgcG9ydGFsIHN0YWNrICovXG4gIHB1YmxpYyBhcHBlbmRUb1N0YWNrKFxuICAgIHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLFxuICAgIGVsZW1lbnQ6IEVsZW1lbnQsXG4gICAge1xuICAgICAgd2l0aERpbUJhY2tkcm9wID0gZmFsc2UsXG4gICAgICB3aXRoSW5lcnRCYWNrZHJvcCA9IGZhbHNlLFxuICAgICAgd2l0aFNjcm9sbExvY2sgPSBmYWxzZSxcbiAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXIsXG4gICAgICBwb3J0YWxBZGFwdGVyID0gZGVmYXVsdFBvcnRhbEFkYXB0ZXIsXG4gICAgfTogUG9ydGFsT3B0aW9ucyA9IHt9XG4gICkge1xuICAgIHRoaXMuYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudFBvcnRhbGVkRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50UG9ydGFsZWRFbGVtZW50KHBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQpO1xuICAgICAgY29uc3Qgc3RhY2tOYW1lID0gcG9ydGFsQ29udHJvbGxlci5vcHRpb25zLnN0YWNrO1xuICAgICAgY29uc3Qgc3RhY2sgPSB0aGlzLnN0YWNrRWxlbWVudHNbc3RhY2tOYW1lXTtcbiAgICAgIGNvbnN0IGF0dGFjaGVkRWxlbWVudHMgPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpO1xuXG4gICAgICBjb25zdCBiYWNrZHJvcCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbXRlLXBvcnRhbF9fYmFja2Ryb3AnLFxuICAgICAgICAuLi4oYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb25cbiAgICAgICAgICA/IHsgc3R5bGU6IGB0cmFuc2l0aW9uLWR1cmF0aW9uOiAke2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9ufTtgIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBIYW5kbGUgYmFja2Ryb3Agc3R5bGluZ1xuICAgICAgaWYgKHdpdGhJbmVydEJhY2tkcm9wKSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1pbmVydCcpO1xuICAgICAgfVxuICAgICAgaWYgKHdpdGhEaW1CYWNrZHJvcCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0tc2hhZG93Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcC0tdHJhbnNwYXJlbnQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwZW5kIGJhY2tkcm9wXG4gICAgICBzdGFjaz8uYXBwZW5kQ2hpbGQoYmFja2Ryb3ApO1xuXG4gICAgICBpZiAoIWlzU3NyKCkpIHtcbiAgICAgICAgLy8gQWRkIGxpc3RlbmVyIGlmIGNsaWNrIGhhbmRsZXIgaXMgcHJlc2VudFxuICAgICAgICBpZiAoY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgICAgICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjbG9zZU9uQ2xpY2tPdXRzaWRlSGFuZGxlcik7XG4gICAgICAgICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNsb3NlT25DbGlja091dHNpZGVIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBiYWNrZHJvcCBzaG91bGQgYmUgZGltLCBhbmltYXRlIGl0IGFmdGVyIGl0IGhhcyBiZWVuIGFwcGVuZGVkIHRvIHRoZSBkb21cbiAgICAgICAgaWYgKHdpdGhEaW1CYWNrZHJvcCkge1xuICAgICAgICAgIGdsb2JhbFRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLS1zaG93Jyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwbHkgc2Nyb2xsIGxvY2tcbiAgICAgICAgaWYgKHdpdGhTY3JvbGxMb2NrKSB7XG4gICAgICAgICAgdGhpcy5hcHBseVNjcm9sbExvY2soZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gV2FpdCBmb3IgUmVhY3QgKG9yIG90aGVyIGZ1dHVyZSBmcmFtZXdvcmsgYWRhcHRlcikgdG8gYXBwZW5kIGVsZW1lbnQgdG8gbmV3XG4gICAgICAvLyBsb2NhdGlvbiBpbiB0aGUgRE9NIGJlZm9yZSBhZGRpbmcgdG8gc3RhY2suIERvaW5nIHNvIHRyaWdnZXJzIGBob3N0RGlzY29ubmVjdGVkYFxuICAgICAgLy8gd2hpY2ggd291bGQgaW5zdGFudGx5IHJlbW92ZSB0aGUgZWxlbWVudCBpZiBub3QgZm9yIHRoaXMgZXh0cmEgdGltZW91dCB0byB3YWl0IGEgdGlja1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHBvcnRhbEFkYXB0ZXIoZWxlbWVudCwgc3RhY2spKS50aGVuKCgpID0+IHtcbiAgICAgICAgYXR0YWNoZWRFbGVtZW50cy5zZXQoZWxlbWVudCwge1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgc3RhY2s6IHN0YWNrTmFtZSxcbiAgICAgICAgICBiYWNrZHJvcCxcbiAgICAgICAgICBjaGlsZFBvcnRhbGVkRWxlbWVudHM6IG5ldyBTZXQ8RWxlbWVudD4oKSxcbiAgICAgICAgICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogUmVtb3ZlcyBhbiBlbGVtZW50IGZyb20gdGhlIHN0YWNrICovXG4gIHB1YmxpYyByZW1vdmVGcm9tU3RhY2socG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5wb3J0YWxlZEVsZW1lbnRzLmhhcyhwb3J0YWxDb250cm9sbGVyLmlkKSkge1xuICAgICAgY29uc3QgYXR0YWNoZWRFbGVtZW50cyA9IHRoaXMucG9ydGFsZWRFbGVtZW50cy5nZXQocG9ydGFsQ29udHJvbGxlci5pZCk7XG4gICAgICBpZiAoYXR0YWNoZWRFbGVtZW50cykge1xuICAgICAgICBjb25zdCBlbGVtZW50TWV0YWRhdGEgPSBhdHRhY2hlZEVsZW1lbnRzLmdldChlbGVtZW50KTtcbiAgICAgICAgaWYgKGVsZW1lbnRNZXRhZGF0YSkge1xuICAgICAgICAgIGF0dGFjaGVkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgIHRoaXMuZmluYWxpemVTdGFja1JlbW92ZShlbGVtZW50TWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU2FmZWx5IHJlbW92ZXMgYWxsIGl0ZW1zIGZyb20gYWxsIHN0YWNrc1xuICBwcml2YXRlIHJlbW92ZUFsbEl0ZW1zRnJvbVN0YWNrcygpIHtcbiAgICBmb3IgKGxldCBbaWQsIGNvbnRyb2xsZXJNYXBdIG9mIHRoaXMucG9ydGFsZWRFbGVtZW50cy5lbnRyaWVzKCkpIHtcbiAgICAgIGZvciAobGV0IFtlbGVtZW50LCBlbGVtZW50TWV0YWRhdGFdIG9mIGNvbnRyb2xsZXJNYXAuZW50cmllcygpKSB7XG4gICAgICAgIGlmIChlbGVtZW50TWV0YWRhdGEpIHtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplU3RhY2tSZW1vdmUoZWxlbWVudE1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBNYWtlcyBhIGJhY2tkcm9wIGFzc29jaWF0ZWQgd2l0aCBhIHBvcnRhbGVkIGVsZW1lbnQgdmlzaWJsZSBpZiBpdCBleGlzdHMgKi9cbiAgcHVibGljIHNob3dCYWNrZHJvcChwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlciwgZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuYWRkQ29udHJvbGxlcihwb3J0YWxDb250cm9sbGVyKTtcbiAgICBjb25zdCB7IGJhY2tkcm9wIH0gPSB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZ2V0KHBvcnRhbENvbnRyb2xsZXIuaWQpLmdldChlbGVtZW50KSA/PyB7fTtcbiAgICBiYWNrZHJvcD8uY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLXNob3cnKTtcbiAgfVxuXG4gIC8qKiBIaWRlcyBhIGJhY2tkcm9wIGFzc29jaWF0ZWQgd2l0aCBhIHBvcnRhbGVkIGVsZW1lbnQgaWYgaXQgZXhpc3RzICovXG4gIHB1YmxpYyBoaWRlQmFja2Ryb3AocG9ydGFsQ29udHJvbGxlcjogRWxlbWVudFBvcnRhbENvbnRyb2xsZXIsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgY29uc3QgeyBiYWNrZHJvcCB9ID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKS5nZXQoZWxlbWVudCkgPz8ge307XG4gICAgYmFja2Ryb3A/LmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tkcm9wLS1zaG93Jyk7XG4gIH1cblxuICAvKiogVXBkYXRlcyB0aGUgaW50ZXJ0bmVzcyBhIGJhY2tkcm9wIGlmIGl0IGV4aXN0cyAod2hldGhlciBvciBub3QgdGhlIHVzZXIgY2FuIGNsaWNrIHRocm91Z2ggaXQpICovXG4gIHB1YmxpYyBzZXRCYWNrZHJvcEluZXJ0bmVzcyhcbiAgICBwb3J0YWxDb250cm9sbGVyOiBFbGVtZW50UG9ydGFsQ29udHJvbGxlcixcbiAgICBlbGVtZW50OiBFbGVtZW50LFxuICAgIGluZXJ0OiBib29sZWFuID0gdHJ1ZVxuICApIHtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXIocG9ydGFsQ29udHJvbGxlcik7XG4gICAgY29uc3QgeyBiYWNrZHJvcCB9ID0gdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmdldChwb3J0YWxDb250cm9sbGVyLmlkKS5nZXQoZWxlbWVudCkgPz8ge307XG4gICAgaWYgKGluZXJ0KSB7XG4gICAgICBiYWNrZHJvcD8uY2xhc3NMaXN0LmFkZCgnYmFja2Ryb3AtLWluZXJ0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhY2tkcm9wPy5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrZHJvcC0taW5lcnQnKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgaWQgZm9yIHRoZSBjb25maWd1cmVkIHN0YWNrIGVsZW1lbnQgKi9cbiAgcHJpdmF0ZSBpZEZhY3RvcnkgPSAoc3RhY2s6IFBvcnRhbFN0YWNrKSA9PiBgbXRlLXBvcnRhbF9fJHtzdGFja30tc3RhY2tgO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYW4gZWxlbWVudCBpcyBiZWluZyBwb3J0YWxlZCBmcm9tIHdpdGhpbiBhbm90aGVyIHBvcnRhbGVkXG4gICAqIGVsZW1lbnQgYW5kIHJldHVybnMgdGhhdCBwYXJlbnQgaWYgaXQgaXNcbiAgICovXG4gIHByaXZhdGUgZ2V0UGFyZW50UG9ydGFsZWRFbGVtZW50KHBvcnRhbENvbnRyb2xsZXI6IEVsZW1lbnRQb3J0YWxDb250cm9sbGVyLCBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKHBvcnRhbENvbnRyb2xsZXIucGFyZW50UG9ydGFsZWRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gcG9ydGFsQ29udHJvbGxlci5wYXJlbnRQb3J0YWxlZEVsZW1lbnQ7XG4gICAgfVxuICAgIGxldCBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ6IEVsZW1lbnQ7XG4gICAgdGhpcy5wb3J0YWxlZEVsZW1lbnRzLmZvckVhY2goKHBvcnRhbENvbnRyb2xsZXIpID0+XG4gICAgICBwb3J0YWxDb250cm9sbGVyLmZvckVhY2goKHBvcnRhbGVkRWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAocG9ydGFsZWRFbGVtZW50LmVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgICBwb3J0YWxlZEVsZW1lbnQuY2hpbGRQb3J0YWxlZEVsZW1lbnRzLmFkZChlbGVtZW50KTtcbiAgICAgICAgICBwYXJlbnRQb3J0YWxlZEVsZW1lbnQgPSBwb3J0YWxlZEVsZW1lbnQuZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIC8vIENhY2hlIHRoZSBwYXJlbnRQb3J0YWxlZEVsZW1lbnQgaWYgZm91bmQgb24gdGhlIGNvbnRyb2xsZXIgc28gd2UgY2FuIHJlZmVyZW5jZVxuICAgIC8vIGl0IHdoZW4gb3BlbmVkIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4gICAgaWYgKHBhcmVudFBvcnRhbGVkRWxlbWVudCkge1xuICAgICAgcG9ydGFsQ29udHJvbGxlci5wYXJlbnRQb3J0YWxlZEVsZW1lbnQgPSBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnRQb3J0YWxlZEVsZW1lbnQ7XG4gIH1cblxuICAvKiogRW5zdXJlcyBhbiBlbGVtZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgc3RhY2sgbm8gbWF0dGVyIHdoaWNoIGNvbnRyb2xsZXIgaGFzIHBvcnRhbGVkIGl0ICovXG4gIHByaXZhdGUgcmVtb3ZlRnJvbVN0YWNrR2xvYmFsbHkoZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMucG9ydGFsZWRFbGVtZW50cy5mb3JFYWNoKChwb3J0YWxDb250cm9sbGVyKSA9PiB7XG4gICAgICBpZiAocG9ydGFsQ29udHJvbGxlci5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudE1ldGFkYXRhID0gcG9ydGFsQ29udHJvbGxlci5nZXQoZWxlbWVudCk7XG4gICAgICAgIHBvcnRhbENvbnRyb2xsZXIuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmZpbmFsaXplU3RhY2tSZW1vdmUoZWxlbWVudE1ldGFkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBGaW5hbGl6ZXMgdGhlIHJlbW92ZSBvZiBhbiBlbGVtZW50IGZyb20gYSBwb3J0YWwgc3RhY2sgKi9cbiAgcHJpdmF0ZSBmaW5hbGl6ZVN0YWNrUmVtb3ZlKGVsZW1lbnRNZXRhZGF0YTogUG9ydGFsZWRFbGVtZW50TWV0YWRhdGEpIHtcbiAgICBpZiAoZWxlbWVudE1ldGFkYXRhKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIHN0YWNrOiBzdGFja05hbWUsXG4gICAgICAgIGJhY2tkcm9wLFxuICAgICAgICBjaGlsZFBvcnRhbGVkRWxlbWVudHMsXG4gICAgICAgIHBhcmVudFBvcnRhbGVkRWxlbWVudCxcbiAgICAgIH0gPSBlbGVtZW50TWV0YWRhdGE7XG4gICAgICBjb25zdCBzdGFjayA9IHRoaXMuc3RhY2tFbGVtZW50c1tzdGFja05hbWVdO1xuXG4gICAgICAvLyBSZW1vdmUgYW55IHNjcm9sbExvY2tzXG4gICAgICB0aGlzLnJlbW92ZVNjcm9sbExvY2soZWxlbWVudCk7XG5cbiAgICAgIC8vIEVuc3VyZXMgYW4gZWxlbWVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gYW55IHBhcmVudCBwb3J0YWxlZCBlbGVtZW50cyBjaGlsZHJlbiBsaXN0c1xuICAgICAgaWYgKHBhcmVudFBvcnRhbGVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLnBvcnRhbGVkRWxlbWVudHMuZm9yRWFjaCgocG9ydGFsQ29udHJvbGxlcikgPT4ge1xuICAgICAgICAgIGlmIChwb3J0YWxDb250cm9sbGVyLmhhcyhwYXJlbnRQb3J0YWxlZEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBwb3J0YWxDb250cm9sbGVyLmdldChwYXJlbnRQb3J0YWxlZEVsZW1lbnQpLmNoaWxkUG9ydGFsZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gRW5zdXJlcyBhbnkgY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50IGFyZSByZW1vdmVkIGJlZm9yZSB0aGlzIGVsZW1lbnQgaXNcbiAgICAgIGlmIChjaGlsZFBvcnRhbGVkRWxlbWVudHMuc2l6ZSA+IDApIHtcbiAgICAgICAgY2hpbGRQb3J0YWxlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHRoaXMucmVtb3ZlRnJvbVN0YWNrR2xvYmFsbHkoZWxlbWVudCkpO1xuICAgICAgfVxuICAgICAgLy8gUmVtb3ZlcyB0aGlzIGVsZW1lbnRzIGJhY2tkcm9wIGZyb20gdGhlIHBvcnRhbCBzdGFja1xuICAgICAgaWYgKGJhY2tkcm9wICYmIGJhY2tkcm9wLnBhcmVudEVsZW1lbnQgPT09IHN0YWNrKSB7XG4gICAgICAgIHN0YWNrPy5yZW1vdmVDaGlsZChiYWNrZHJvcCk7XG4gICAgICB9XG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGEgcmVhY3Qgd3JhcHBlZCBwb3J0YWxlZCBlbGVtZW50XG4gICAgICBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50Py5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheS13cmFwcGVyJykpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ID09PSBzdGFjaykge1xuICAgICAgICAgIHN0YWNrPy5yZW1vdmVDaGlsZChlbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCA9PT0gc3RhY2spIHtcbiAgICAgICAgc3RhY2s/LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGEgc2Nyb2xsIGxvY2sgdG8gdGhlIGJvZHkgZWxlbWVudCB0byBwcmV2ZW50IHNjcm9sbGluZyBvZiBwYWdlIGNvbnRlbnQuXG4gICAqIENhbGN1bGF0ZXMgYW55IGJvZHkgb2Zmc2V0cyBkdWUgdG8gdmlzaWJsZSBzY3JvbGxiYXJzIGFuZCBkeW5hbWljYWxseSBhZGp1c3RzIGZvciB0aGVtLlxuICAgKi9cbiAgcHJpdmF0ZSBhcHBseVNjcm9sbExvY2soZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuYWN0aXZlU2Nyb2xsTG9ja3MuYWRkKGVsZW1lbnQpO1xuXG4gICAgY29uc3QgaXNJT1MgPSBpc1BsYXRmb3JtKCdJT1MnKTtcbiAgICBjb25zdCBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuICAgIGNvbnN0IHNjcm9sbGJhclggPVxuICAgICAgTWF0aC5yb3VuZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgK1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgY29uc3QgcGFkZGluZ1Byb3AgPSBzY3JvbGxiYXJYID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnO1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgY29uc3Qgc2Nyb2xsWCA9IGJvZHlTdHlsZS5sZWZ0ID8gcGFyc2VGbG9hdChib2R5U3R5bGUubGVmdCkgOiB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgY29uc3Qgc2Nyb2xsWSA9IGJvZHlTdHlsZS50b3AgPyBwYXJzZUZsb2F0KGJvZHlTdHlsZS50b3ApIDogd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gICAgYm9keVN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtdGUtc2Nyb2xsLWxvY2stLWFjdGl2ZScpO1xuXG4gICAgaWYgKHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICBib2R5U3R5bGVbcGFkZGluZ1Byb3BdID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgO1xuICAgIH1cblxuICAgIC8vIE9ubHkgaU9TIGRvZXNuJ3QgcmVzcGVjdCBgb3ZlcmZsb3c6IGhpZGRlbmAgb24gZG9jdW1lbnQuYm9keSwgYW5kIHRoaXNcbiAgICAvLyB0ZWNobmlxdWUgaGFzIGZld2VyIHNpZGUgZWZmZWN0cy5cbiAgICBpZiAoaXNJT1MpIHtcbiAgICAgIC8vIGlPUyAxMiBkb2VzIG5vdCBzdXBwb3J0IGB2aXN1YWxWaWV3cG9ydGAuXG4gICAgICBjb25zdCBvZmZzZXRMZWZ0ID0gZ2xvYmFsVGhpcy52aXN1YWxWaWV3cG9ydD8ub2Zmc2V0TGVmdCB8fCAwO1xuICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gZ2xvYmFsVGhpcy52aXN1YWxWaWV3cG9ydD8ub2Zmc2V0VG9wIHx8IDA7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oYm9keVN0eWxlLCB7XG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICB0b3A6IGAkey0oc2Nyb2xsWSAtIE1hdGguZmxvb3Iob2Zmc2V0VG9wKSl9cHhgLFxuICAgICAgICBsZWZ0OiBgJHstKHNjcm9sbFggLSBNYXRoLmZsb29yKG9mZnNldExlZnQpKX1weGAsXG4gICAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVtb3ZlcyBhbiBhY3RpdmUgc2Nyb2xsTG9jayBpZiB0aGVyZSBhcmUgbm8gcmVtYWluaW5nIGVsZW1lbnRzIHBvcnRhbGVkIHRoYXQgcmVxdWVzdGVkIGl0ICovXG4gIHByaXZhdGUgcmVtb3ZlU2Nyb2xsTG9jayhlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5hY3RpdmVTY3JvbGxMb2Nrcy5kZWxldGUoZWxlbWVudCk7XG5cbiAgICBpZiAodGhpcy5hY3RpdmVTY3JvbGxMb2Nrcy5zaXplID09PSAwKSB7XG4gICAgICBjb25zdCBpc0lPUyA9IGlzUGxhdGZvcm0oJ0lPUycpO1xuICAgICAgY29uc3QgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcbiAgICAgIGNvbnN0IHNjcm9sbGJhclggPVxuICAgICAgICBNYXRoLnJvdW5kKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSArXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgY29uc3QgcGFkZGluZ1Byb3AgPSBzY3JvbGxiYXJYID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGJvZHlTdHlsZSwge1xuICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgIFtwYWRkaW5nUHJvcF06ICcnLFxuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbXRlLXNjcm9sbC1sb2NrLS1hY3RpdmUnKTtcblxuICAgICAgaWYgKGlzSU9TKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYm9keVN0eWxlLCB7XG4gICAgICAgICAgcG9zaXRpb246ICcnLFxuICAgICAgICAgIHRvcDogJycsXG4gICAgICAgICAgbGVmdDogJycsXG4gICAgICAgICAgcmlnaHQ6ICcnLFxuICAgICAgICB9KTtcbiAgICAgICAgZ2xvYmFsVGhpcy5zY3JvbGxUbyhzY3JvbGxYLCBzY3JvbGxZKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZVBvcnRhbFNlcnZpY2UgPSBuZXcgX010ZVBvcnRhbFNlcnZpY2UoKTtcbiIsICJpbXBvcnQgeyBzaWduYWwgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5jbGFzcyBfTXRlSGlzdG9yeUFwaVNlcnZpY2Uge1xuICBwcml2YXRlIGluaXRpYWxpemVkID0gZmFsc2U7XG4gIHByaXZhdGUgY2hhbmdlU2lnbmFsID0gc2lnbmFsKCk7XG4gIHByaXZhdGUgcHJldkhyZWY6IHN0cmluZztcblxuICBwdWJsaWMgc3RhdGVDaGFuZ2VzKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHJldHVybiB0aGlzLmNoYW5nZVNpZ25hbDtcbiAgfVxuXG4gIHByaXZhdGUgZm9yd2FyZEFwcGx5ID0gKHRhcmdldCwgdGhpc0FyZywgYXJnQXJyYXkpID0+IHtcbiAgICBjb25zdCByZXMgPSB0YXJnZXQuYXBwbHkodGhpc0FyZywgYXJnQXJyYXkpO1xuICAgIC8vIE9ubHkgZW1pdCBhIHN0YXRlIGNoYW5nZSBpZiB0aGUgaHJlZiBkaWZmZXJzIGZyb20gdGhlIGxhc3QgZW1pc3Npb25cbiAgICBpZiAodGhpcy5wcmV2SHJlZiAhPT0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcbiAgICAgIHRoaXMucHJldkhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgIHRoaXMuY2hhbmdlU2lnbmFsLnNldCh0aGlzLnByZXZIcmVmKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgLy8gTGlzdGVuIGZvciBiYWNrIGV2ZW50cyB3aXRoIHBvcHN0YXRlIGV2ZW50XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlU2lnbmFsLnNldCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICB9KTtcblxuICAgICAgLy8gUGF0Y2ggSGlzdG9yeSBBUEkgbWV0aG9kcyB0byBlbnN1cmUgd2UgZW1pdCBhbnl0aW1lIHRoZWlyIHN0YXRlIGlzIGNoYW5nZWRcbiAgICAgIC8vIFRoaXMgaXMgbmVjY2VzYXJ5IGJlY2Fpc2UgdGhlIGBwb3BzdGF0ZWAgZXZlbnQgaXMgbm90IHJlbGlhYmx5IGNhbGxlZCBhY3Jvc3MgYnJvd3NlcnMgd2hlbmV2ZXIgdGhlIGhpc3RvcnkgQVBJIGlzIHVzZWRcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2sgPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkuYmFjaywgeyBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHkgfSk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5mb3J3YXJkID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LmZvcndhcmQsIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkuZ28gPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkuZ28sIHsgYXBwbHk6IHRoaXMuZm9yd2FyZEFwcGx5IH0pO1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSwgeyBhcHBseTogdGhpcy5mb3J3YXJkQXBwbHkgfSk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPSBuZXcgUHJveHkod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlLCB7XG4gICAgICAgIGFwcGx5OiB0aGlzLmZvcndhcmRBcHBseSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXRlSGlzdG9yeUFwaVNlcnZpY2UgPSBuZXcgX010ZUhpc3RvcnlBcGlTZXJ2aWNlKCk7XG4iLCAiaW1wb3J0IHsgaXNTc3IgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgdHlwZSBNdGVEYXRlRm9ybWF0T3B0aW9ucyA9IEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zICYge1xuICBsYW5nPzogc3RyaW5nO1xuICBmb3JtYXQ/OlxuICAgIHwgJ3Nob3J0J1xuICAgIHwgJ21lZGl1bSdcbiAgICB8ICdsb25nJ1xuICAgIHwgJ2Z1bGwnXG4gICAgfCAnc2hvcnREYXRlJ1xuICAgIHwgJ21lZGl1bURhdGUnXG4gICAgfCAnbG9uZ0RhdGUnXG4gICAgfCAnZnVsbERhdGUnXG4gICAgfCAnc2hvcnRUaW1lJ1xuICAgIHwgJ21lZGl1bVRpbWUnXG4gICAgfCAnbG9uZ1RpbWUnXG4gICAgfCAnZnVsbFRpbWUnO1xufTtcblxuZXhwb3J0IHR5cGUgTXRlTnVtYmVyRm9ybWF0T3B0aW9ucyA9IEludGwuTnVtYmVyRm9ybWF0T3B0aW9ucyAmIHsgbGFuZz86IHN0cmluZyB9O1xuXG5jbGFzcyBfTXRlTG9jYWxpemVTZXJ2aWNlIHtcbiAgLy8gQXNzdW1lIGBlbmAgbGFuZyBmb3Igbm93IGFzIGEgZmFsbGJhY2sgdW50aWwgd2Ugcm9sbGJhY2sgd2lkZXIgc3VwcG9ydCBmb3IgaTExbiB3aGVuIG5lY2Vzc2FyeVxuICBwcml2YXRlIGxhbmd1YWdlID0gJ2VuJztcbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICBpZiAoIWlzU3NyKCkgJiYgIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5sYW5ndWFnZSA9IGAke2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nIHx8IG5hdmlnYXRvci5sYW5ndWFnZX1gLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvcm1hdE51bWJlcihudW1iZXJUb0Zvcm1hdDogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogTXRlTnVtYmVyRm9ybWF0T3B0aW9ucyk6IHN0cmluZyB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgY29uc3QgbGFuZyA9IG9wdGlvbnM/LmxhbmcgPyBvcHRpb25zLmxhbmcgOiB0aGlzLmxhbmd1YWdlO1xuICAgIG51bWJlclRvRm9ybWF0ID0gTnVtYmVyKG51bWJlclRvRm9ybWF0KTtcbiAgICAvLyBFbnN1cmUgbm8gbnVsbCBvcHRpb25zIGV4aXN0XG4gICAgY29uc3QgZmluYWxPcHRpb25zID0ge1xuICAgICAgbGFuZzogb3B0aW9ucy5sYW5nID8/IHVuZGVmaW5lZCxcbiAgICAgIHN0eWxlOiBvcHRpb25zLnN0eWxlID8/IHVuZGVmaW5lZCxcbiAgICAgIGN1cnJlbmN5OiBvcHRpb25zLmN1cnJlbmN5ID8/IHVuZGVmaW5lZCxcbiAgICAgIGN1cnJlbmN5RGlzcGxheTogb3B0aW9ucy5jdXJyZW5jeURpc3BsYXkgPz8gdW5kZWZpbmVkLFxuICAgICAgdXNlR3JvdXBpbmc6IG9wdGlvbnMudXNlR3JvdXBpbmcgPz8gdW5kZWZpbmVkLFxuICAgICAgbWluaW11bUludGVnZXJEaWdpdHM6IG9wdGlvbnMubWluaW11bUludGVnZXJEaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBvcHRpb25zLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IG9wdGlvbnMubWF4aW11bUZyYWN0aW9uRGlnaXRzID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbmltdW1TaWduaWZpY2FudERpZ2l0czogb3B0aW9ucy5taW5pbXVtU2lnbmlmaWNhbnREaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzOiBvcHRpb25zLm1heGltdW1TaWduaWZpY2FudERpZ2l0cyA/PyB1bmRlZmluZWQsXG4gICAgfTtcbiAgICByZXR1cm4gaXNOYU4obnVtYmVyVG9Gb3JtYXQpXG4gICAgICA/ICcnXG4gICAgICA6IG5ldyBJbnRsLk51bWJlckZvcm1hdChsYW5nLCBmaW5hbE9wdGlvbnMpLmZvcm1hdChudW1iZXJUb0Zvcm1hdCk7XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0RGF0ZShkYXRlVG9Gb3JtYXQ6IERhdGUgfCBzdHJpbmcsIG9wdGlvbnM/OiBNdGVEYXRlRm9ybWF0T3B0aW9ucykge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIGNvbnN0IGxhbmcgPSBvcHRpb25zPy5sYW5nID8gb3B0aW9ucy5sYW5nIDogdGhpcy5sYW5ndWFnZTtcbiAgICBjb25zdCBmb3JtYXR0ZWRPcHRpb25zID0geyAuLi4ob3B0aW9ucyA/PyB7fSksIC4uLnRoaXMuZ2V0RGVmaW5lZERhdGVGb3JtYXQob3B0aW9ucz8uZm9ybWF0KSB9O1xuICAgIC8vIEVuc3VyZSBubyBudWxsIG9wdGlvbnMgZXhpc3RcbiAgICBjb25zdCBmaW5hbE9wdGlvbnMgPSB7XG4gICAgICBsYW5nOiBmb3JtYXR0ZWRPcHRpb25zLmxhbmcgPz8gdW5kZWZpbmVkLFxuICAgICAgd2Vla2RheTogZm9ybWF0dGVkT3B0aW9ucy53ZWVrZGF5ID8/IHVuZGVmaW5lZCxcbiAgICAgIGVyYTogZm9ybWF0dGVkT3B0aW9ucy5lcmEgPz8gdW5kZWZpbmVkLFxuICAgICAgeWVhcjogZm9ybWF0dGVkT3B0aW9ucy55ZWFyID8/IHVuZGVmaW5lZCxcbiAgICAgIG1vbnRoOiBmb3JtYXR0ZWRPcHRpb25zLm1vbnRoID8/IHVuZGVmaW5lZCxcbiAgICAgIGRheTogZm9ybWF0dGVkT3B0aW9ucy5kYXkgPz8gdW5kZWZpbmVkLFxuICAgICAgaG91cjogZm9ybWF0dGVkT3B0aW9ucy5ob3VyID8/IHVuZGVmaW5lZCxcbiAgICAgIG1pbnV0ZTogZm9ybWF0dGVkT3B0aW9ucy5taW51dGUgPz8gdW5kZWZpbmVkLFxuICAgICAgc2Vjb25kOiBmb3JtYXR0ZWRPcHRpb25zLnNlY29uZCA/PyB1bmRlZmluZWQsXG4gICAgICBmcmFjdGlvbmFsU2Vjb25kRGlnaXRzOiBmb3JtYXR0ZWRPcHRpb25zLmZyYWN0aW9uYWxTZWNvbmREaWdpdHMgPz8gdW5kZWZpbmVkLFxuICAgICAgdGltZVpvbmVOYW1lOiBmb3JtYXR0ZWRPcHRpb25zLnRpbWVab25lTmFtZSA/PyB1bmRlZmluZWQsXG4gICAgICB0aW1lWm9uZTogZm9ybWF0dGVkT3B0aW9ucy50aW1lWm9uZSA/PyB1bmRlZmluZWQsXG4gICAgICBob3VyMTI6IGZvcm1hdHRlZE9wdGlvbnMuaG91cjEyID8/IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1hdDogZm9ybWF0dGVkT3B0aW9ucy5mb3JtYXQgPz8gdW5kZWZpbmVkLFxuICAgIH07XG4gICAgZGF0ZVRvRm9ybWF0ID0gbmV3IERhdGUoZGF0ZVRvRm9ybWF0KTtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobGFuZywgZmluYWxPcHRpb25zKS5mb3JtYXQoZGF0ZVRvRm9ybWF0KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmaW5lZERhdGVGb3JtYXQoXG4gICAgZm9ybWF0OlxuICAgICAgfCAnc2hvcnQnXG4gICAgICB8ICdtZWRpdW0nXG4gICAgICB8ICdsb25nJ1xuICAgICAgfCAnZnVsbCdcbiAgICAgIHwgJ3Nob3J0RGF0ZSdcbiAgICAgIHwgJ21lZGl1bURhdGUnXG4gICAgICB8ICdsb25nRGF0ZSdcbiAgICAgIHwgJ2Z1bGxEYXRlJ1xuICAgICAgfCAnc2hvcnRUaW1lJ1xuICAgICAgfCAnbWVkaXVtVGltZSdcbiAgICAgIHwgJ2xvbmdUaW1lJ1xuICAgICAgfCAnZnVsbFRpbWUnXG4gICk6IE10ZURhdGVGb3JtYXRPcHRpb25zIHtcbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgY2FzZSAnc2hvcnQnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2xvbmcnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdmdWxsJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ3Nob3J0RGF0ZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdtZWRpdW1EYXRlJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdsb25nRGF0ZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdmdWxsRGF0ZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnc2hvcnRUaW1lJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdtZWRpdW1UaW1lJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICBjYXNlICdsb25nVGltZSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2Z1bGxUaW1lJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgZnJhY3Rpb25hbFNlY29uZERpZ2l0czogMixcbiAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNdGVMb2NhbGl6ZVNlcnZpY2UgPSBuZXcgX010ZUxvY2FsaXplU2VydmljZSgpO1xuIiwgImltcG9ydCB7IENvcmVQYWxldHRlLCBEZW5zaXR5T3B0aW9ucywgUHJlc2V0cywgU2l6ZU9wdGlvbnMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25QcmVzZXQge1xuICBzaXplPzogU2l6ZU9wdGlvbnM7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG4gIGRlbnNpdHk/OiBEZW5zaXR5T3B0aW9ucztcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGJ1dHRvblByZXNldHM6IFByZXNldHM8QnV0dG9uUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25CdXR0b25QcmVzZXQge1xuICBzaXplPzogU2l6ZU9wdGlvbnM7XG4gIGNvbG9yPzogQ29yZVBhbGV0dGU7XG4gIGRlbnNpdHk/OiBEZW5zaXR5T3B0aW9ucztcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGljb25CdXR0b25QcmVzZXRzOiBQcmVzZXRzPEljb25CdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgU3RhdHVzUGFsZXR0ZSB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvblByZXNldCB7XG4gIGNvbG9yPzogU3RhdHVzUGFsZXR0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGljb25QcmVzZXRzOiBQcmVzZXRzPEljb25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgU3RhdHVzUGFsZXR0ZSB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NCYXJQcmVzZXQge1xuICBjb2xvcj86IFN0YXR1c1BhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBwcm9ncmVzc0JhclByZXNldHM6IFByZXNldHM8UHJvZ3Jlc3NCYXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBTdGF0dXNQYWxldHRlIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9ncmVzc1NwaW5uZXJQcmVzZXQge1xuICBjb2xvcj86IFN0YXR1c1BhbGV0dGU7XG59XG5cbmV4cG9ydCBjb25zdCBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzOiBQcmVzZXRzPFByb2dyZXNzU3Bpbm5lclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvb2xiYXJQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHRvb2xiYXJQcmVzZXRzOiBQcmVzZXRzPFRvb2xiYXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZFByZXNldCB7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG4gIHdpdGhTaGFkb3c/OiBib29sZWFuO1xuICB3aXRob3V0U2hhZG93PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJkQnV0dG9uUHJlc2V0IGV4dGVuZHMgQ2FyZFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgY2FyZFByZXNldHM6IFByZXNldHM8Q2FyZFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIHdpdGhvdXRTaGFkb3c6IHRydWUsXG4gIH0sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IGNhcmRCdXR0b25QcmVzZXRzOiBQcmVzZXRzPENhcmRCdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICB3aXRob3V0U2hhZG93OiB0cnVlLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJlZVByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgdHJlZVByZXNldHM6IFByZXNldHM8VHJlZVByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBDb3JlUGFsZXR0ZSwgUHJlc2V0cywgU2l6ZU9wdGlvbnMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUYWdQcmVzZXRzIHtcbiAgc2l6ZT86IFNpemVPcHRpb25zO1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICByYWRpdXM/OiBSYWRpdXNPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgdGFnUHJlc2V0czogUHJlc2V0czxUYWdQcmVzZXRzPiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhZGdlUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBiYWRnZVByZXNldHM6IFByZXNldHM8QmFkZ2VQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgQ29yZVBhbGV0dGUsIFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmtQcmVzZXQge1xuICBjb2xvcj86IENvcmVQYWxldHRlO1xuICBmb250V2VpZ2h0PzogJ3JlZ3VsYXInIHwgJ2JvbGQnO1xufVxuXG5leHBvcnQgY29uc3QgbGlua1ByZXNldHM6IFByZXNldHM8TGlua1ByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0UHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBhbGVydFByZXNldHM6IFByZXNldHM8QWxlcnRQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGlucHV0UHJlc2V0czogUHJlc2V0czxJbnB1dFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzIH0gZnJvbSAnLi8uLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBEcmF3ZXJQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IGRyYXdlclByZXNldHM6IFByZXNldHM8RHJhd2VyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFzaWRlUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBhc2lkZVByZXNldHM6IFByZXNldHM8QXNpZGVQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cywgUmFkaXVzT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFkY3J1bWJJdGVtUHJlc2V0IHtcbiAgZm9udFdlaWdodD86ICdyZWd1bGFyJyB8ICdib2xkJztcbiAgcmFkaXVzPzogUmFkaXVzT3B0aW9ucztcbiAgd2l0aG91dFVuZGVybGluZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBicmVhZGNydW1iSXRlbVByZXNldHM6IFByZXNldHM8QnJlYWRjcnVtYkl0ZW1QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge1xuICAgIHdpdGhvdXRVbmRlcmxpbmU6IHRydWUsXG4gIH0sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4vLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IG1vZGFsUHJlc2V0czogUHJlc2V0czxNb2RhbFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcbiIsICJpbXBvcnQgeyBQcmVzZXRzLCBDb3JlUGFsZXR0ZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94UHJlc2V0IHtcbiAgY29sb3I/OiBDb3JlUGFsZXR0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGNoZWNrYm94UHJlc2V0czogUHJlc2V0czxDaGVja2JveFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge1xuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgfSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBSYWRpb1ByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgcmFkaW9QcmVzZXRzOiBQcmVzZXRzPFJhZGlvUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7XG4gICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdlJvb3RQcmVzZXQge1xuICBtb2JpbGVCcmVha3BvaW50PzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJztcbiAgaW52ZXJzZT86ICdoZWFkZXInIHwgJ3NpZGViYXInO1xuICBwcmVmZXJTaWRlYmFyPzogJ29wZW5lZCcgfCAnY2xvc2VkJztcbn1cblxuZXhwb3J0IGNvbnN0IG5hdlJvb3RQcmVzZXRzOiBQcmVzZXRzPE5hdlJvb3RQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7XG4gICAgaW52ZXJzZTogJ3NpZGViYXInLFxuICB9LFxuICBjeDoge1xuICAgIHByZWZlclNpZGViYXI6ICdjbG9zZWQnLFxuICB9LFxuICBweDoge1xuICAgIGludmVyc2U6ICdzaWRlYmFyJyxcbiAgfSxcbiAgcng6IHtcbiAgICBwcmVmZXJTaWRlYmFyOiAnY2xvc2VkJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2SGVhZGVyUHJlc2V0IHtcbiAgd2l0aENvbnRhaW5lcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBuYXZIZWFkZXJQcmVzZXRzOiBQcmVzZXRzPE5hdkhlYWRlclByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZTdWJIZWFkZXJQcmVzZXQge1xuICB3aXRoQ29udGFpbmVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IG5hdlN1YkhlYWRlclByZXNldHM6IFByZXNldHM8TmF2U3ViSGVhZGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdlNpZGViYXJQcmVzZXQge1xuICBoaWRlVW50aWxUcmFuc2l0aW9uPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IG5hdlNpZGViYXJQcmVzZXRzOiBQcmVzZXRzPE5hdlNpZGViYXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHtcbiAgICBoaWRlVW50aWxUcmFuc2l0aW9uOiB0cnVlLFxuICB9LFxuICBweDoge30sXG4gIHJ4OiB7XG4gICAgaGlkZVVudGlsVHJhbnNpdGlvbjogdHJ1ZSxcbiAgfSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2Q29udGVudFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF2Q29udGVudFByZXNldHM6IFByZXNldHM8TmF2Q29udGVudFByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZGb290ZXJQcmVzZXQge1xuICB3aXRoQ29udGFpbmVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IG5hdkZvb3RlclByZXNldHM6IFByZXNldHM8TmF2Rm9vdGVyUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkJ1dHRvblByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF2QnV0dG9uUHJlc2V0czogUHJlc2V0czxOYXZCdXR0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2SWNvbkJ1dHRvblByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF2SWNvbkJ1dHRvblByZXNldHM6IFByZXNldHM8TmF2SWNvbkJ1dHRvblByZXNldD4gPSB7XG4gIGRlZmF1bHQ6IHt9LFxuICBjeDoge30sXG4gIHB4OiB7fSxcbiAgcng6IHt9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZJdGVtUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBuYXZJdGVtUHJlc2V0czogUHJlc2V0czxOYXZJdGVtUHJlc2V0PiA9IHtcbiAgZGVmYXVsdDoge30sXG4gIGN4OiB7fSxcbiAgcHg6IHt9LFxuICByeDoge30sXG59O1xuIiwgImltcG9ydCB7IFByZXNldHMsIFJhZGl1c09wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Hcm91cFByZXNldCB7XG4gIHJhZGl1cz86IFJhZGl1c09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBidXR0b25Hcm91cFByZXNldHM6IFByZXNldHM8QnV0dG9uR3JvdXBQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXRjaFByZXNldCB7fVxuXG5leHBvcnQgY29uc3Qgc3dpdGNoUHJlc2V0czogUHJlc2V0czxTd2l0Y2hQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZVNlbGVjdFByZXNldCB7fVxuXG5leHBvcnQgY29uc3QgbmF0aXZlU2VsZWN0UHJlc2V0czogUHJlc2V0czxOYXRpdmVTZWxlY3RQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRleHRhcmVhUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCB0ZXh0YXJlYVByZXNldHM6IFByZXNldHM8VGV4dGFyZWFQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNrZWxldG9uUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCBza2VsZXRvblByZXNldHM6IFByZXNldHM8U2tlbGV0b25QcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlclByZXNldCB7fVxuXG5leHBvcnQgY29uc3Qgc2xpZGVyUHJlc2V0czogUHJlc2V0czxTbGlkZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhbmdlU2xpZGVyUHJlc2V0IHt9XG5cbmV4cG9ydCBjb25zdCByYW5nZVNsaWRlclByZXNldHM6IFByZXNldHM8UmFuZ2VTbGlkZXJQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgUHJlc2V0cyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlZ21lbnRlZENvbnRyb2xQcmVzZXQge31cblxuZXhwb3J0IGNvbnN0IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzOiBQcmVzZXRzPFNlZ21lbnRlZENvbnRyb2xQcmVzZXQ+ID0ge1xuICBkZWZhdWx0OiB7fSxcbiAgY3g6IHt9LFxuICBweDoge30sXG4gIHJ4OiB7fSxcbn07XG4iLCAiaW1wb3J0IHsgYnV0dG9uUHJlc2V0cywgaWNvbkJ1dHRvblByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYnV0dG9uL2J1dHRvbi5wcmVzZXRzJztcbmltcG9ydCB7IGljb25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2ljb24vaWNvbi5wcmVzZXRzJztcbmltcG9ydCB7IHByb2dyZXNzQmFyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLnByZXNldHMnO1xuaW1wb3J0IHsgcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXIucHJlc2V0cyc7XG5pbXBvcnQgeyB0b29sYmFyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy90b29sYmFyL3Rvb2xiYXIucHJlc2V0cyc7XG5pbXBvcnQgeyBjYXJkUHJlc2V0cywgY2FyZEJ1dHRvblByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvY2FyZC9jYXJkLnByZXNldHMnO1xuaW1wb3J0IHsgdHJlZVByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvdHJlZS90cmVlLnByZXNldHMnO1xuaW1wb3J0IHsgdGFnUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy90YWcvdGFnLnByZXNldHMnO1xuaW1wb3J0IHsgYmFkZ2VQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2JhZGdlL2JhZGdlLnByZXNldHMnO1xuaW1wb3J0IHsgbGlua1ByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvbGluay9saW5rLnByZXNldHMnO1xuaW1wb3J0IHsgYWxlcnRQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2FsZXJ0L2FsZXJ0LnByZXNldHMnO1xuaW1wb3J0IHsgaW5wdXRQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2lucHV0L2lucHV0LnByZXNldHMnO1xuaW1wb3J0IHsgZHJhd2VyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9kcmF3ZXIvZHJhd2VyLnByZXNldHMnO1xuaW1wb3J0IHsgYXNpZGVQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2FzaWRlL2FzaWRlLnByZXNldHMnO1xuaW1wb3J0IHsgYnJlYWRjcnVtYkl0ZW1QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWItaXRlbS5wcmVzZXRzJztcbmltcG9ydCB7IG1vZGFsUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9tb2RhbC9tb2RhbC5wcmVzZXRzJztcbmltcG9ydCB7IGNoZWNrYm94UHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9jaGVja2JveC9jaGVja2JveC5wcmVzZXRzJztcbmltcG9ydCB7IHJhZGlvUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9yYWRpby9yYWRpby5wcmVzZXRzJztcbmltcG9ydCB7XG4gIG5hdlJvb3RQcmVzZXRzLFxuICBuYXZIZWFkZXJQcmVzZXRzLFxuICBuYXZTdWJIZWFkZXJQcmVzZXRzLFxuICBuYXZTaWRlYmFyUHJlc2V0cyxcbiAgbmF2Q29udGVudFByZXNldHMsXG4gIG5hdkZvb3RlclByZXNldHMsXG4gIG5hdkJ1dHRvblByZXNldHMsXG4gIG5hdkljb25CdXR0b25QcmVzZXRzLFxuICBuYXZJdGVtUHJlc2V0cyxcbn0gZnJvbSAnLi4vLi4vYXRvbWljL25hdi9uYXYucHJlc2V0cyc7XG5pbXBvcnQgeyBidXR0b25Hcm91cFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC5wcmVzZXRzJztcbmltcG9ydCB7IHN3aXRjaFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvc3dpdGNoL3N3aXRjaC5wcmVzZXRzJztcbmltcG9ydCB7IG5hdGl2ZVNlbGVjdFByZXNldHMgfSBmcm9tICcuLi8uLi9hdG9taWMvbmF0aXZlLXNlbGVjdC9uYXRpdmUtc2VsZWN0LnByZXNldHMnO1xuaW1wb3J0IHsgdGV4dGFyZWFQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3RleHRhcmVhL3RleHRhcmVhLnByZXNldHMnO1xuaW1wb3J0IHsgc2tlbGV0b25QcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3NrZWxldG9uL3NrZWxldG9uLnByZXNldHMnO1xuaW1wb3J0IHsgc2xpZGVyUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9zbGlkZXIvc2xpZGVyLnByZXNldHMnO1xuaW1wb3J0IHsgcmFuZ2VTbGlkZXJQcmVzZXRzIH0gZnJvbSAnLi4vLi4vYXRvbWljL3JhbmdlLXNsaWRlci9yYW5nZS1zbGlkZXIucHJlc2V0cyc7XG5pbXBvcnQgeyBzZWdtZW50ZWRDb250cm9sUHJlc2V0cyB9IGZyb20gJy4uLy4uL2F0b21pYy9zZWdtZW50ZWQtY29udHJvbC9zZWdtZW50ZWQtY29udHJvbC5wcmVzZXRzJztcblxuZXhwb3J0IGludGVyZmFjZSBNb3J0YXJQcmVzZXRUaGVtZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29sb3JTY2hlbWU6ICdzeXN0ZW0nIHwgJ2xpZ2h0JyB8ICdkYXJrJztcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcmVzZXQgPSB7XG4gIHByZXNldDogJ2RlZmF1bHQnLFxuICB0aGVtZToge1xuICAgIG5hbWU6ICdweCcsXG4gICAgY29sb3JTY2hlbWU6ICdsaWdodCcsXG4gIH0gYXMgTW9ydGFyUHJlc2V0VGhlbWUsXG4gIE10ZUJ1dHRvbjogYnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVJY29uQnV0dG9uOiBpY29uQnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVJY29uOiBpY29uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVQcm9ncmVzc0JhcjogcHJvZ3Jlc3NCYXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVByb2dyZXNzU3Bpbm5lcjogcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVUb29sYmFyOiB0b29sYmFyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVDYXJkOiBjYXJkUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVDYXJkQnV0dG9uOiBjYXJkQnV0dG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVUcmVlOiB0cmVlUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVUYWc6IHRhZ1ByZXNldHMuZGVmYXVsdCxcbiAgTXRlQmFkZ2U6IGJhZGdlUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVMaW5rOiBsaW5rUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVBbGVydDogYWxlcnRQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUlucHV0OiBpbnB1dFByZXNldHMuZGVmYXVsdCxcbiAgTXRlRHJhd2VyOiBkcmF3ZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUFzaWRlOiBhc2lkZVByZXNldHMuZGVmYXVsdCxcbiAgTXRlQnJlYWRjcnVtYkl0ZW06IGJyZWFkY3J1bWJJdGVtUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVNb2RhbDogbW9kYWxQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZUNoZWNrYm94OiBjaGVja2JveFByZXNldHMuZGVmYXVsdCxcbiAgTXRlUmFkaW86IHJhZGlvUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZSb290OiBuYXZSb290UHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZIZWFkZXI6IG5hdkhlYWRlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2U3ViSGVhZGVyOiBuYXZTdWJIZWFkZXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdlNpZGViYXI6IG5hdlNpZGViYXJQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkNvbnRlbnQ6IG5hdkNvbnRlbnRQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZU5hdkZvb3RlcjogbmF2Rm9vdGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVOYXZCdXR0b246IG5hdkJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2SWNvbkJ1dHRvbjogbmF2SWNvbkJ1dHRvblByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF2SXRlbTogbmF2SXRlbVByZXNldHMuZGVmYXVsdCxcbiAgTXRlQnV0dG9uR3JvdXA6IGJ1dHRvbkdyb3VwUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVTd2l0Y2g6IHN3aXRjaFByZXNldHMuZGVmYXVsdCxcbiAgTXRlTmF0aXZlU2VsZWN0OiBuYXRpdmVTZWxlY3RQcmVzZXRzLmRlZmF1bHQsXG4gIE10ZVRleHRhcmVhOiB0ZXh0YXJlYVByZXNldHMuZGVmYXVsdCxcbiAgTXRlU2tlbGV0b246IHNrZWxldG9uUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVTbGlkZXI6IHNsaWRlclByZXNldHMuZGVmYXVsdCxcbiAgTXRlUmFuZ2VTbGlkZXI6IHJhbmdlU2xpZGVyUHJlc2V0cy5kZWZhdWx0LFxuICBNdGVTZWdtZW50ZWRDb250cm9sOiBzZWdtZW50ZWRDb250cm9sUHJlc2V0cy5kZWZhdWx0LFxufTtcblxuZXhwb3J0IHR5cGUgTW9ydGFyUHJlc2V0ID0gdHlwZW9mIGRlZmF1bHRQcmVzZXQ7XG5cbmV4cG9ydCBjb25zdCBweFByZXNldDogTW9ydGFyUHJlc2V0ID0ge1xuICBwcmVzZXQ6ICdweCcsXG4gIHRoZW1lOiB7XG4gICAgbmFtZTogJ3B4JyxcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSxcbiAgTXRlQnV0dG9uOiBidXR0b25QcmVzZXRzLnB4LFxuICBNdGVJY29uQnV0dG9uOiBpY29uQnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlSWNvbjogaWNvblByZXNldHMucHgsXG4gIE10ZVByb2dyZXNzQmFyOiBwcm9ncmVzc0JhclByZXNldHMucHgsXG4gIE10ZVByb2dyZXNzU3Bpbm5lcjogcHJvZ3Jlc3NTcGlubmVyUHJlc2V0cy5weCxcbiAgTXRlVG9vbGJhcjogdG9vbGJhclByZXNldHMucHgsXG4gIE10ZUNhcmQ6IGNhcmRQcmVzZXRzLnB4LFxuICBNdGVDYXJkQnV0dG9uOiBjYXJkQnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlVHJlZTogdHJlZVByZXNldHMucHgsXG4gIE10ZVRhZzogdGFnUHJlc2V0cy5weCxcbiAgTXRlQmFkZ2U6IGJhZGdlUHJlc2V0cy5weCxcbiAgTXRlTGluazogbGlua1ByZXNldHMucHgsXG4gIE10ZUFsZXJ0OiBhbGVydFByZXNldHMucHgsXG4gIE10ZUlucHV0OiBpbnB1dFByZXNldHMucHgsXG4gIE10ZURyYXdlcjogZHJhd2VyUHJlc2V0cy5weCxcbiAgTXRlQXNpZGU6IGFzaWRlUHJlc2V0cy5weCxcbiAgTXRlQnJlYWRjcnVtYkl0ZW06IGJyZWFkY3J1bWJJdGVtUHJlc2V0cy5weCxcbiAgTXRlTW9kYWw6IG1vZGFsUHJlc2V0cy5weCxcbiAgTXRlQ2hlY2tib3g6IGNoZWNrYm94UHJlc2V0cy5weCxcbiAgTXRlUmFkaW86IHJhZGlvUHJlc2V0cy5weCxcbiAgTXRlTmF2Um9vdDogbmF2Um9vdFByZXNldHMucHgsXG4gIE10ZU5hdkhlYWRlcjogbmF2SGVhZGVyUHJlc2V0cy5weCxcbiAgTXRlTmF2U3ViSGVhZGVyOiBuYXZTdWJIZWFkZXJQcmVzZXRzLnB4LFxuICBNdGVOYXZTaWRlYmFyOiBuYXZTaWRlYmFyUHJlc2V0cy5weCxcbiAgTXRlTmF2Q29udGVudDogbmF2Q29udGVudFByZXNldHMucHgsXG4gIE10ZU5hdkZvb3RlcjogbmF2Rm9vdGVyUHJlc2V0cy5weCxcbiAgTXRlTmF2QnV0dG9uOiBuYXZCdXR0b25QcmVzZXRzLnB4LFxuICBNdGVOYXZJY29uQnV0dG9uOiBuYXZJY29uQnV0dG9uUHJlc2V0cy5weCxcbiAgTXRlTmF2SXRlbTogbmF2SXRlbVByZXNldHMucHgsXG4gIE10ZUJ1dHRvbkdyb3VwOiBidXR0b25Hcm91cFByZXNldHMucHgsXG4gIE10ZVN3aXRjaDogc3dpdGNoUHJlc2V0cy5weCxcbiAgTXRlTmF0aXZlU2VsZWN0OiBuYXRpdmVTZWxlY3RQcmVzZXRzLnB4LFxuICBNdGVUZXh0YXJlYTogdGV4dGFyZWFQcmVzZXRzLnB4LFxuICBNdGVTa2VsZXRvbjogc2tlbGV0b25QcmVzZXRzLnB4LFxuICBNdGVTbGlkZXI6IHNsaWRlclByZXNldHMucHgsXG4gIE10ZVJhbmdlU2xpZGVyOiByYW5nZVNsaWRlclByZXNldHMucHgsXG4gIE10ZVNlZ21lbnRlZENvbnRyb2w6IHNlZ21lbnRlZENvbnRyb2xQcmVzZXRzLnB4LFxufTtcblxuZXhwb3J0IGNvbnN0IGN4UHJlc2V0OiBNb3J0YXJQcmVzZXQgPSB7XG4gIHByZXNldDogJ2N4JyxcbiAgdGhlbWU6IHtcbiAgICBuYW1lOiAnY3gnLFxuICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuICB9LFxuICBNdGVCdXR0b246IGJ1dHRvblByZXNldHMuY3gsXG4gIE10ZUljb25CdXR0b246IGljb25CdXR0b25QcmVzZXRzLmN4LFxuICBNdGVJY29uOiBpY29uUHJlc2V0cy5jeCxcbiAgTXRlUHJvZ3Jlc3NCYXI6IHByb2dyZXNzQmFyUHJlc2V0cy5jeCxcbiAgTXRlUHJvZ3Jlc3NTcGlubmVyOiBwcm9ncmVzc1NwaW5uZXJQcmVzZXRzLmN4LFxuICBNdGVUb29sYmFyOiB0b29sYmFyUHJlc2V0cy5jeCxcbiAgTXRlQ2FyZDogY2FyZFByZXNldHMuY3gsXG4gIE10ZUNhcmRCdXR0b246IGNhcmRCdXR0b25QcmVzZXRzLmN4LFxuICBNdGVUcmVlOiB0cmVlUHJlc2V0cy5jeCxcbiAgTXRlVGFnOiB0YWdQcmVzZXRzLmN4LFxuICBNdGVCYWRnZTogYmFkZ2VQcmVzZXRzLmN4LFxuICBNdGVMaW5rOiBsaW5rUHJlc2V0cy5jeCxcbiAgTXRlQWxlcnQ6IGFsZXJ0UHJlc2V0cy5jeCxcbiAgTXRlSW5wdXQ6IGlucHV0UHJlc2V0cy5jeCxcbiAgTXRlRHJhd2VyOiBkcmF3ZXJQcmVzZXRzLmN4LFxuICBNdGVBc2lkZTogYXNpZGVQcmVzZXRzLmN4LFxuICBNdGVCcmVhZGNydW1iSXRlbTogYnJlYWRjcnVtYkl0ZW1QcmVzZXRzLmN4LFxuICBNdGVNb2RhbDogbW9kYWxQcmVzZXRzLmN4LFxuICBNdGVDaGVja2JveDogY2hlY2tib3hQcmVzZXRzLmN4LFxuICBNdGVSYWRpbzogcmFkaW9QcmVzZXRzLmN4LFxuICBNdGVOYXZSb290OiBuYXZSb290UHJlc2V0cy5jeCxcbiAgTXRlTmF2SGVhZGVyOiBuYXZIZWFkZXJQcmVzZXRzLmN4LFxuICBNdGVOYXZTdWJIZWFkZXI6IG5hdlN1YkhlYWRlclByZXNldHMuY3gsXG4gIE10ZU5hdlNpZGViYXI6IG5hdlNpZGViYXJQcmVzZXRzLmN4LFxuICBNdGVOYXZDb250ZW50OiBuYXZDb250ZW50UHJlc2V0cy5jeCxcbiAgTXRlTmF2Rm9vdGVyOiBuYXZGb290ZXJQcmVzZXRzLmN4LFxuICBNdGVOYXZCdXR0b246IG5hdkJ1dHRvblByZXNldHMuY3gsXG4gIE10ZU5hdkljb25CdXR0b246IG5hdkljb25CdXR0b25QcmVzZXRzLmN4LFxuICBNdGVOYXZJdGVtOiBuYXZJdGVtUHJlc2V0cy5jeCxcbiAgTXRlQnV0dG9uR3JvdXA6IGJ1dHRvbkdyb3VwUHJlc2V0cy5jeCxcbiAgTXRlU3dpdGNoOiBzd2l0Y2hQcmVzZXRzLmN4LFxuICBNdGVOYXRpdmVTZWxlY3Q6IG5hdGl2ZVNlbGVjdFByZXNldHMuY3gsXG4gIE10ZVRleHRhcmVhOiB0ZXh0YXJlYVByZXNldHMuY3gsXG4gIE10ZVNrZWxldG9uOiBza2VsZXRvblByZXNldHMuY3gsXG4gIE10ZVNsaWRlcjogc2xpZGVyUHJlc2V0cy5jeCxcbiAgTXRlUmFuZ2VTbGlkZXI6IHJhbmdlU2xpZGVyUHJlc2V0cy5jeCxcbiAgTXRlU2VnbWVudGVkQ29udHJvbDogc2VnbWVudGVkQ29udHJvbFByZXNldHMuY3gsXG59O1xuXG5leHBvcnQgY29uc3QgcnhQcmVzZXQ6IE1vcnRhclByZXNldCA9IHtcbiAgcHJlc2V0OiAncngnLFxuICB0aGVtZToge1xuICAgIG5hbWU6ICdyeCcsXG4gICAgY29sb3JTY2hlbWU6ICdsaWdodCcsXG4gIH0sXG4gIE10ZUJ1dHRvbjogYnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlSWNvbkJ1dHRvbjogaWNvbkJ1dHRvblByZXNldHMucngsXG4gIE10ZUljb246IGljb25QcmVzZXRzLnJ4LFxuICBNdGVQcm9ncmVzc0JhcjogcHJvZ3Jlc3NCYXJQcmVzZXRzLnJ4LFxuICBNdGVQcm9ncmVzc1NwaW5uZXI6IHByb2dyZXNzU3Bpbm5lclByZXNldHMucngsXG4gIE10ZVRvb2xiYXI6IHRvb2xiYXJQcmVzZXRzLnJ4LFxuICBNdGVDYXJkOiBjYXJkUHJlc2V0cy5yeCxcbiAgTXRlQ2FyZEJ1dHRvbjogY2FyZEJ1dHRvblByZXNldHMucngsXG4gIE10ZVRyZWU6IHRyZWVQcmVzZXRzLnJ4LFxuICBNdGVUYWc6IHRhZ1ByZXNldHMucngsXG4gIE10ZUJhZGdlOiBiYWRnZVByZXNldHMucngsXG4gIE10ZUxpbms6IGxpbmtQcmVzZXRzLnJ4LFxuICBNdGVBbGVydDogYWxlcnRQcmVzZXRzLnJ4LFxuICBNdGVJbnB1dDogaW5wdXRQcmVzZXRzLnJ4LFxuICBNdGVEcmF3ZXI6IGRyYXdlclByZXNldHMucngsXG4gIE10ZUFzaWRlOiBhc2lkZVByZXNldHMucngsXG4gIE10ZUJyZWFkY3J1bWJJdGVtOiBicmVhZGNydW1iSXRlbVByZXNldHMucngsXG4gIE10ZU1vZGFsOiBtb2RhbFByZXNldHMucngsXG4gIE10ZUNoZWNrYm94OiBjaGVja2JveFByZXNldHMucngsXG4gIE10ZVJhZGlvOiByYWRpb1ByZXNldHMucngsXG4gIE10ZU5hdlJvb3Q6IG5hdlJvb3RQcmVzZXRzLnJ4LFxuICBNdGVOYXZIZWFkZXI6IG5hdkhlYWRlclByZXNldHMucngsXG4gIE10ZU5hdlN1YkhlYWRlcjogbmF2U3ViSGVhZGVyUHJlc2V0cy5yeCxcbiAgTXRlTmF2U2lkZWJhcjogbmF2U2lkZWJhclByZXNldHMucngsXG4gIE10ZU5hdkNvbnRlbnQ6IG5hdkNvbnRlbnRQcmVzZXRzLnJ4LFxuICBNdGVOYXZGb290ZXI6IG5hdkZvb3RlclByZXNldHMucngsXG4gIE10ZU5hdkJ1dHRvbjogbmF2QnV0dG9uUHJlc2V0cy5yeCxcbiAgTXRlTmF2SWNvbkJ1dHRvbjogbmF2SWNvbkJ1dHRvblByZXNldHMucngsXG4gIE10ZU5hdkl0ZW06IG5hdkl0ZW1QcmVzZXRzLnJ4LFxuICBNdGVCdXR0b25Hcm91cDogYnV0dG9uR3JvdXBQcmVzZXRzLnJ4LFxuICBNdGVTd2l0Y2g6IHN3aXRjaFByZXNldHMucngsXG4gIE10ZU5hdGl2ZVNlbGVjdDogbmF0aXZlU2VsZWN0UHJlc2V0cy5yeCxcbiAgTXRlVGV4dGFyZWE6IHRleHRhcmVhUHJlc2V0cy5yeCxcbiAgTXRlU2tlbGV0b246IHNrZWxldG9uUHJlc2V0cy5yeCxcbiAgTXRlU2xpZGVyOiBzbGlkZXJQcmVzZXRzLnJ4LFxuICBNdGVSYW5nZVNsaWRlcjogcmFuZ2VTbGlkZXJQcmVzZXRzLnJ4LFxuICBNdGVTZWdtZW50ZWRDb250cm9sOiBzZWdtZW50ZWRDb250cm9sUHJlc2V0cy5yeCxcbn07XG4iLCAiaW1wb3J0IHsgY3hQcmVzZXQsIGRlZmF1bHRQcmVzZXQsIE1vcnRhclByZXNldCwgcHhQcmVzZXQsIHJ4UHJlc2V0IH0gZnJvbSAnLi9wcmVzZXRzJztcbmltcG9ydCB7IGNvbXB1dGVkLCBTaWduYWwsIHNpZ25hbCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmNsYXNzIF9NdGVQcmVzZXRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBwcmVzZXRzID0gbmV3IE1hcDxzdHJpbmcsIE1vcnRhclByZXNldD4oW1xuICAgIFsnZ2xvYmFsJywgZGVmYXVsdFByZXNldF0sXG4gICAgWydkZWZhdWx0JywgZGVmYXVsdFByZXNldF0sXG4gICAgWydweCcsIHB4UHJlc2V0XSxcbiAgICBbJ2N4JywgY3hQcmVzZXRdLFxuICAgIFsncngnLCByeFByZXNldF0sXG4gIF0pO1xuXG4gIHByaXZhdGUgcHJlc2V0Q2hhbmdlZFNpZ25hbCA9IHNpZ25hbDx7IHByZXNldE5hbWU6IHN0cmluZzsgY29tcG9uZW50TmFtZTogc3RyaW5nIH0+KHtcbiAgICBwcmVzZXROYW1lOiBudWxsLFxuICAgIGNvbXBvbmVudE5hbWU6IG51bGwsXG4gIH0pO1xuXG4gIHB1YmxpYyBzZXRQcmVzZXQocHJlc2V0TmFtZTogc3RyaW5nLCBwcmVzZXQ6IFBhcnRpYWw8TW9ydGFyUHJlc2V0Pikge1xuICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgLi4uKHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSkgPz8gZGVmYXVsdFByZXNldCksXG4gICAgICAuLi5wcmVzZXQsXG4gICAgfSk7XG4gICAgdGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLnNldCh7IHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWU6IG51bGwgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29tcG9uZW50UHJlc2V0PEMgZXh0ZW5kcyBrZXlvZiBNb3J0YXJQcmVzZXQ+KFxuICAgIHByZXNldE5hbWU6IHN0cmluZyxcbiAgICBjb21wb25lbnROYW1lOiBDLFxuICAgIGNvbXBvbmVudFByZXNldDogUGFydGlhbDxNb3J0YXJQcmVzZXRbQ10+XG4gICkge1xuICAgIGNvbnN0IHNlbGVjdGVkUHJlc2V0ID0gdGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKSA/PyBkZWZhdWx0UHJlc2V0O1xuICAgIHRoaXMucHJlc2V0cy5zZXQocHJlc2V0TmFtZSwge1xuICAgICAgLi4uc2VsZWN0ZWRQcmVzZXQsXG4gICAgICBbY29tcG9uZW50TmFtZV06IHtcbiAgICAgICAgLi4uKHNlbGVjdGVkUHJlc2V0W2NvbXBvbmVudE5hbWVdID8/ICh7fSBhcyBhbnkpKSxcbiAgICAgICAgLi4uY29tcG9uZW50UHJlc2V0LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLnByZXNldENoYW5nZWRTaWduYWwuc2V0KHsgcHJlc2V0TmFtZSwgY29tcG9uZW50TmFtZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb21wb25lbnRQcmVzZXRQcm9wZXJ0eTxDIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0LCBQIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0W0NdPihcbiAgICBwcmVzZXROYW1lOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogQyxcbiAgICBwcm9wZXJ0eU5hbWU6IFAsXG4gICAgdmFsdWU6IE1vcnRhclByZXNldFtDXVtQXSB8IFBhcnRpYWw8TW9ydGFyUHJlc2V0W0NdW1BdPlxuICApIHtcbiAgICBjb25zdCBzZWxlY3RlZFByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSkgPz8gZGVmYXVsdFByZXNldDtcbiAgICBjb25zdCBzZWxlY3RlZENvbXBvbmVudFByZXNldCA9IHNlbGVjdGVkUHJlc2V0W2NvbXBvbmVudE5hbWVdIGFzIGFueTtcblxuICAgIC8vIElmIHNldHRpbmcgYW4gb2JqZWN0IHZhbHVlIGJlIHN1cmUgdG8gc3ByZWFkIG92ZXIgZXhpc3RpbmcgdmFsdWVcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5wcmVzZXRzLnNldChwcmVzZXROYW1lLCB7XG4gICAgICAgIC4uLnNlbGVjdGVkUHJlc2V0LFxuICAgICAgICBbY29tcG9uZW50TmFtZV06IHtcbiAgICAgICAgICAuLi5zZWxlY3RlZENvbXBvbmVudFByZXNldCxcbiAgICAgICAgICBbcHJvcGVydHlOYW1lXToge1xuICAgICAgICAgICAgLi4uc2VsZWN0ZWRDb21wb25lbnRQcmVzZXRbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICAgIC4uLnZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlIGp1c3Qgc2V0IHRoZSB2YWx1ZVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5wcmVzZXRzLnNldChwcmVzZXROYW1lLCB7XG4gICAgICAgIC4uLnNlbGVjdGVkUHJlc2V0LFxuICAgICAgICBbY29tcG9uZW50TmFtZV06IHtcbiAgICAgICAgICAuLi5zZWxlY3RlZENvbXBvbmVudFByZXNldCxcbiAgICAgICAgICBbcHJvcGVydHlOYW1lXTogdmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wcmVzZXRDaGFuZ2VkU2lnbmFsLnNldCh7IHByZXNldE5hbWUsIGNvbXBvbmVudE5hbWUgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJlc2V0KHByZXNldE5hbWU6IHN0cmluZyk6IE1vcnRhclByZXNldCB7XG4gICAgY29uc3QgcHJlc2V0ID0gdGhpcy5wcmVzZXRzLmdldChwcmVzZXROYW1lKTtcbiAgICBpZiAoIXByZXNldCkge1xuICAgICAgY29uc29sZS5lcnJvcihgTXRlUHJlc2V0U2VydmljZTogQSBwcmVzZXQgd2l0aCB0aGUgbmFtZSBcIiR7cHJlc2V0TmFtZX1cIiBkb2VzIG5vdCBleGlzdGApO1xuICAgIH1cbiAgICByZXR1cm4gcHJlc2V0O1xuICB9XG5cbiAgcHVibGljIGdldENvbXBvbmVudFByZXNldDxDIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0PihcbiAgICBwcmVzZXROYW1lOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogQ1xuICApOiBNb3J0YXJQcmVzZXRbQ10ge1xuICAgIGNvbnN0IHByZXNldCA9IHRoaXMucHJlc2V0cy5nZXQocHJlc2V0TmFtZSk7XG4gICAgY29uc3QgY29tcG9uZW50UHJlc2V0ID0gcHJlc2V0W2NvbXBvbmVudE5hbWVdO1xuICAgIGlmICghcHJlc2V0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBNdGVQcmVzZXRTZXJ2aWNlOiBBIHByZXNldCB3aXRoIHRoZSBuYW1lIFwiJHtwcmVzZXROYW1lfVwiIGRvZXMgbm90IGV4aXN0LmApO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50UHJlc2V0O1xuICB9XG5cbiAgcHVibGljIHNlbGVjdFByZXNldChwcmVzZXROYW1lOiBzdHJpbmcpOiBTaWduYWw8TW9ydGFyUHJlc2V0PiB7XG4gICAgbGV0IGZpcnN0RW1pdCA9IHRydWU7XG4gICAgcmV0dXJuIGNvbXB1dGVkKHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbCwgKGNoYW5nZSwgc2V0KSA9PiB7XG4gICAgICBpZiAoZmlyc3RFbWl0KSB7XG4gICAgICAgIHNldCh0aGlzLmdldFByZXNldChwcmVzZXROYW1lKSk7XG4gICAgICAgIGZpcnN0RW1pdCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChjaGFuZ2UucHJlc2V0TmFtZSA9PT0gcHJlc2V0TmFtZSkge1xuICAgICAgICBzZXQodGhpcy5nZXRQcmVzZXQocHJlc2V0TmFtZSkpO1xuICAgICAgfVxuICAgIH0pIGFzIFNpZ25hbDxNb3J0YXJQcmVzZXQ+O1xuICB9XG5cbiAgcHVibGljIHNlbGVjdENvbXBvbmVudFByZXNldDxDIGV4dGVuZHMga2V5b2YgTW9ydGFyUHJlc2V0PihcbiAgICBwcmVzZXROYW1lOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogQ1xuICApOiBTaWduYWw8TW9ydGFyUHJlc2V0W0NdPiB7XG4gICAgbGV0IGZpcnN0RW1pdCA9IHRydWU7XG4gICAgcmV0dXJuIGNvbXB1dGVkKHRoaXMucHJlc2V0Q2hhbmdlZFNpZ25hbCwgKGNoYW5nZSwgc2V0KSA9PiB7XG4gICAgICBpZiAoZmlyc3RFbWl0KSB7XG4gICAgICAgIHNldCh0aGlzLmdldENvbXBvbmVudFByZXNldChwcmVzZXROYW1lLCBjb21wb25lbnROYW1lKSk7XG4gICAgICAgIGZpcnN0RW1pdCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKGNoYW5nZS5wcmVzZXROYW1lID09PSBwcmVzZXROYW1lICYmICFjaGFuZ2UuY29tcG9uZW50TmFtZSkgfHxcbiAgICAgICAgKGNoYW5nZS5wcmVzZXROYW1lID09PSBwcmVzZXROYW1lICYmIGNoYW5nZS5jb21wb25lbnROYW1lID09PSBjb21wb25lbnROYW1lKVxuICAgICAgKSB7XG4gICAgICAgIHNldCh0aGlzLmdldENvbXBvbmVudFByZXNldChwcmVzZXROYW1lLCBjb21wb25lbnROYW1lKSk7XG4gICAgICB9XG4gICAgfSkgYXMgU2lnbmFsPE1vcnRhclByZXNldFtDXT47XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE10ZVByZXNldFNlcnZpY2UgPSBuZXcgX010ZVByZXNldFNlcnZpY2UoKTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzICovXG5pbXBvcnQgeyBDb250ZXh0Q29uc3VtZXIgfSBmcm9tICdAbGl0LWxhYnMvY29udGV4dCc7XG5pbXBvcnQgeyBQcm9wZXJ0eURlY2xhcmF0aW9uLCBSZWFjdGl2ZUVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHksIHN0YXRlIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtcbiAgQ29uc3RydWN0b3IsXG4gIGlzU3NyLFxuICBNdGVFbGVtZW50LFxuICBNdGVQcmVzZXRTZXJ2aWNlLFxuICBwcmVzZXRDb250ZXh0LFxuICBzaWduYWwsXG4gIGNvbXB1dGVkLFxuICBVbnN1YnNjcmliZXIsXG59IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBNb3J0YXJQcmVzZXQgfSBmcm9tICcuL3ByZXNldHMnO1xuXG5leHBvcnQgdHlwZSBQcmVzZXRPcHRpb25zID0gJ21kJyB8ICdzbScgfCAnbGcnIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcmVzZXRFbGVtZW50SW50ZXJmYWNlPFA+IHtcbiAgLyoqIEBpZ25vcmUgKi9cbiAgcmVhZG9ubHkgX19jb21wb25lbnROYW1lOiBrZXlvZiBNb3J0YXJQcmVzZXQ7XG5cbiAgLyoqIFNlbGVjdHMgdGhlIHByZXNldCBmb3IgdGhpcyBjb21wb25lbnQuIE92ZXJyaWRlcyB0aGUgZ2xvYmFsIHByZXNldCBmb3IgdGhpcyBpbnN0YW5jZSBvZiB0aGlzIGNvbXBvbmVudC4gKi9cbiAgcHJlc2V0OiBzdHJpbmc7XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgYXBwbGllZFByZXNldDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByZXNldE1peGluRmFjdG9yeU9wdGlvbnMge1xuICByZWZsZWN0QXBwbGllZFByZXNldDogYm9vbGVhbjtcbn1cblxuY29uc3Qge1xuICBpcyxcbiAgZGVmaW5lUHJvcGVydHksXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBnZXRQcm90b3R5cGVPZixcbn0gPSBPYmplY3Q7XG5cbmV4cG9ydCBjb25zdCBQcmVzZXRNaXhpbkZhY3RvcnkgPSA8UD4oXG4gIGNvbXBvbmVudE5hbWU6IGtleW9mIE1vcnRhclByZXNldCxcbiAgb3B0aW9uczogUHJlc2V0TWl4aW5GYWN0b3J5T3B0aW9ucyA9IHsgcmVmbGVjdEFwcGxpZWRQcmVzZXQ6IGZhbHNlIH1cbikgPT4ge1xuICByZXR1cm4gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxNdGVFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICAgIGNsYXNzIFByZXNldEVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHJlYWRvbmx5IF9fY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWU7XG5cbiAgICAgIC8qKiBNYXAgdGhhdCBzdG9yZXMgcHJpdmF0ZSB2YWx1ZXMgdGhhdCB0YWtlIHByZWNlZGVuY2Ugb3ZlciBwcmVzZXQgdmFsdWVzICovXG4gICAgICBwcm90ZWN0ZWQgX3ZhbHVlTWFwID0gbmV3IE1hcDxQcm9wZXJ0eUtleSwgUFtrZXlvZiBQXT4oKTtcblxuICAgICAgLyoqIE1hcCB0aGF0IHN0b3JlcyBmYWxsYmFjayBwcmVzZXQgdmFsdWVzIGVtaXR0ZWQgYnkgdGhlIHByZXNldENvbnRyb2xsZXIgKi9cbiAgICAgIHByb3RlY3RlZCBfcHJlc2V0TWFwID0gbmV3IE1hcDxQcm9wZXJ0eUtleSwgUFtrZXlvZiBQXT4oKTtcblxuICAgICAgLyoqIFNlbGVjdHMgYSBzcGVjaWZpYyBwcmVzZXQgZm9yIHRoaXMgY29tcG9uZW50IGluc3RhbmNlLiBPdmVycmlkZXMgdGhlIGN1cnJlbnQgZ2xvYmFsIHByZXNldC4gKi9cbiAgICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSlcbiAgICAgIHNldCBwcmVzZXQocHJlc2V0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJlc2V0ID0gcHJlc2V0O1xuICAgICAgICB0aGlzLl9hY3RpdmVQcmVzZXRTaWduYWwuc2V0KHByZXNldCk7XG4gICAgICAgIGlmIChpc1NzcigpKSB7XG4gICAgICAgICAgLy8gU3RvcCBTU1IgY29uc3RydWN0b3IgbGlzdGVuZXIgaWYgc3RpbGwgb3Blbi5cbiAgICAgICAgICB0aGlzLnNzckNvbnN0cnVjdG9yU3ViPy4oKTtcbiAgICAgICAgICB0aGlzLnNzckNvbnN0cnVjdG9yU3ViID0gbnVsbDtcbiAgICAgICAgICBjb25zdCBwcmVzZXQgPSBNdGVQcmVzZXRTZXJ2aWNlLmdldFByZXNldCh0aGlzLnByZXNldCA/PyAnZ2xvYmFsJyk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVTc3JQcmVzZXRDaGFuZ2VzKHByZXNldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGdldCBwcmVzZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVzZXQ7XG4gICAgICB9XG4gICAgICBwcml2YXRlIF9wcmVzZXQgPSAnZ2xvYmFsJztcblxuICAgICAgQHByb3BlcnR5KHsgcmVmbGVjdDogb3B0aW9ucz8ucmVmbGVjdEFwcGxpZWRQcmVzZXQgPz8gZmFsc2UgfSkgYXBwbGllZFByZXNldCA9ICdnbG9iYWwnO1xuXG4gICAgICBAc3RhdGUoKSBwcml2YXRlIF9hcHBsaWVkUHJlc2V0Pzogc3RyaW5nO1xuXG4gICAgICAvKiogS2VlcHMgY29uc3RydWN0b3IgcHJlc2V0IHN1YnNjcmlwdGlvbiBvcGVuIHVudGlsIHdpbGxVcGRhdGUgKi9cbiAgICAgIHByaXZhdGUgc3NyQ29uc3RydWN0b3JTdWI6IFVuc3Vic2NyaWJlcjtcbiAgICAgIHByaXZhdGUgcHJldmlvdXNDb21wb25lbnRVbnN1YjogVW5zdWJzY3JpYmVyO1xuXG4gICAgICAvKiogRW1pdHMgd2hlbmV2ZXIgdGhlIGxvY2FsIHByZXNldCB2YWx1ZSBjaGFuZ2VzLiAqL1xuICAgICAgcHJpdmF0ZSBfYWN0aXZlUHJlc2V0U2lnbmFsID0gc2lnbmFsPHN0cmluZz4obnVsbCk7XG4gICAgICBwcml2YXRlIF9wYXJlbnRQcmVzZXRTaWduYWwgPSBzaWduYWw8c3RyaW5nPihudWxsKTtcblxuICAgICAgcHJpdmF0ZSBfcHJlc2V0Q29udGV4dCA9IG5ldyBDb250ZXh0Q29uc3VtZXIodGhpcywge1xuICAgICAgICBjb250ZXh0OiBwcmVzZXRDb250ZXh0LFxuICAgICAgICBzdWJzY3JpYmU6IHRydWUsXG4gICAgICAgIGNhbGxiYWNrOiAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLl9wYXJlbnRQcmVzZXRTaWduYWwuc2V0KCh2YWx1ZSA9PT0gJycgPyBudWxsIDogdmFsdWUpID8/ICdnbG9iYWwnKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvKipcbiAgICAgICAqIE92ZXJyaWRlcyB0aGUgZGVmYXVsdCBnZXRQcm9wZXJ0eURlc2NyaXB0b3IgbWV0aG9kIHRvIGNoZWNrIGZvciB0aGUgY3VzdG9tXG4gICAgICAgKiBgaXNQcmVzZXRgIG9wdGlvbi4gRGVzY3JpcHRvcnMgb2YgcHJvcGVydGllcyB0aGF0IGFyZSBkZWNsYXJlZCB3aXRoIHRoZSBgaXNQcmVzZXRgXG4gICAgICAgKiBvcHRpb24gYXJlIGRlZmluZWQgd2l0aCBzcGVjaWFsIGdldHRlci9zZXR0ZXIgbG9naWMgdGhhdCBzZXRzIHZhbHVlIHRvIHZhbHVlTWFwXG4gICAgICAgKiBhbmQgZ2V0cyB2YWx1ZXMgZnJvbSB0aGUgdmFsdWVNYXAgYnV0IHRoZW4gYWxzbyBmYWxscyBiYWNrIHRvIGFueSB2YWx1ZSBpbiB0aGUgcHJlc2V0TWFwXG4gICAgICAgKlxuICAgICAgICogVGhlIHByZXNldE1hcCBpcyBwb3B1bGF0ZWQgYWJvdmUgZnJvbSB2YWx1ZXMgZnJvbSB0aGUgcHJlc2V0Q29udHJvbGxlciB3aGVuZXZlciB0aGVcbiAgICAgICAqIHByZXNldCBmb3IgdGhpcyBjb21wb25lbnQgaXMgY2hhbmdlZCBnbG9iYWxseS5cbiAgICAgICAqL1xuICAgICAgc3RhdGljIGdldFByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgICAgbmFtZTogUHJvcGVydHlLZXksXG4gICAgICAgIGtleTogc3RyaW5nIHwgc3ltYm9sLFxuICAgICAgICBvcHRpb25zOiBQcm9wZXJ0eURlY2xhcmF0aW9uXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgeyBnZXQsIHNldCB9ID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMucHJvdG90eXBlLCBuYW1lKSA/PyB7XG4gICAgICAgICAgZ2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNba2V5IGFzIGtleW9mIHR5cGVvZiB0aGlzXTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQsIHY6IHVua25vd24pIHtcbiAgICAgICAgICAgICh0aGlzIGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZyB8IHN5bWJvbCwgdW5rbm93bj4pW2tleV0gPSB2O1xuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZ2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCk6IGFueSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGdldHRlciBsb2dpYyB0aGF0IGdldHMgZnJvbSB0aGUgdmFsdWVNYXAgb3IgcHJlc2V0TWFwXG4gICAgICAgICAgICBpZiAob3B0aW9uc1snaXNQcmVzZXQnXSkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICh0aGlzIGFzIHt9IGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KS5fdmFsdWVNYXAgYXMgTWFwPFxuICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eUtleSxcbiAgICAgICAgICAgICAgICAgICAgUFtrZXlvZiBQXVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICkuZ2V0KG5hbWUpIHx8XG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgKHRoaXMgYXMge30gYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pLl9wcmVzZXRNYXAgYXMgTWFwPFxuICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eUtleSxcbiAgICAgICAgICAgICAgICAgICAgUFtrZXlvZiBQXVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICkuZ2V0KG5hbWUpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEZWZhdWx0IHByb3BlcnR5IGdldHRlciBsb2dpY1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBnZXQ/LmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQodGhpczogUmVhY3RpdmVFbGVtZW50LCB2YWx1ZTogdW5rbm93bikge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBzZXR0ZXIgbG9naWMgdGhhdCBzZXRzIHRvIHRoZSB2YWx1ZU1hcFxuICAgICAgICAgICAgaWYgKG9wdGlvbnNbJ2lzUHJlc2V0J10pIHtcbiAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSAoXG4gICAgICAgICAgICAgICAgKHRoaXMgYXMge30gYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pLl92YWx1ZU1hcCBhcyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+XG4gICAgICAgICAgICAgICkuZ2V0KG5hbWUpO1xuICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKHRoaXMgYXMge30gYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pLl92YWx1ZU1hcCBhcyBNYXA8UHJvcGVydHlLZXksIFBba2V5b2YgUF0+XG4gICAgICAgICAgICAgICkuc2V0KG5hbWUsIHZhbHVlIGFzIGFueSk7XG4gICAgICAgICAgICAgIC8vIER1cmluZyBTU1Igd2UgbmVlZCB0byB1cGRhdGUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlYWN0aXZlRWxlbWVudCkucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gT24gdGhlIGNsaWVudCB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBjdXJyZW50IHVwZGF0ZSB0byBmaW5pc2hcbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICh0aGlzIGFzIHVua25vd24gYXMgUmVhY3RpdmVFbGVtZW50KS5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVmYXVsdCBwcm9wZXJ0eSBzZXR0ZXIgbG9naWNcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGdldD8uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgc2V0IS5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgKHRoaXMgYXMgdW5rbm93biBhcyBSZWFjdGl2ZUVsZW1lbnQpLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgICAgIC8vIFN1YnNjcmliZXMgZm9yIGNoYW5nZXMgdG8gdGhpcyBjb21wb25lbnRzIGFjdGl2ZSBwcmVzZXQgdG8gdXBkYXRlIGFsbCByZWxldmFudCBwcm9wcyBwcmVzZXQgdmFsdWVzXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKFxuICAgICAgICAgIGNvbXB1dGVkKFxuICAgICAgICAgICAgW3RoaXMuX2FjdGl2ZVByZXNldFNpZ25hbCwgdGhpcy5fcGFyZW50UHJlc2V0U2lnbmFsXSxcbiAgICAgICAgICAgIChbYWN0aXZlUHJlc2V0LCBwYXJlbnRQcmVzZXRdLCBzZXQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGFjdGl2ZVByZXNldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19sb2NhbFByZXNldFRoZW1lID1cbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVByZXNldCA9PT0gJ2dsb2JhbCdcbiAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgIDogTXRlUHJlc2V0U2VydmljZS5nZXRDb21wb25lbnRQcmVzZXQoYWN0aXZlUHJlc2V0LCAndGhlbWUnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbG9jYWxQcmVzZXRUaGVtZSA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCd0aGVtZScsIG51bGwpO1xuXG4gICAgICAgICAgICAgIHRoaXMuX2FwcGxpZWRQcmVzZXQgPSBhY3RpdmVQcmVzZXQgPz8gcGFyZW50UHJlc2V0ID8/ICdnbG9iYWwnO1xuICAgICAgICAgICAgICB0aGlzLmFwcGxpZWRQcmVzZXQgPSBNdGVQcmVzZXRTZXJ2aWNlLmdldENvbXBvbmVudFByZXNldChcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBsaWVkUHJlc2V0LFxuICAgICAgICAgICAgICAgICdwcmVzZXQnXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgLy8gVW5zdWJzY3JpYmUgdG8gcHJldmlvdXMgY29tcG9uZW50IHByZXNldCBjaGFuZ2VzXG4gICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDb21wb25lbnRVbnN1Yj8uKCk7XG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSBwcm9wcyBpZiBuZXcgY29tcG9uZW50IHByZXNldCBlbWl0c1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzQ29tcG9uZW50VW5zdWIgPSBNdGVQcmVzZXRTZXJ2aWNlLnNlbGVjdENvbXBvbmVudFByZXNldChcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBsaWVkUHJlc2V0LFxuICAgICAgICAgICAgICAgIHRoaXMuX19jb21wb25lbnROYW1lXG4gICAgICAgICAgICAgICkuc3Vic2NyaWJlKChuZXdQcmVzZXQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobmV3UHJlc2V0KSB7XG4gICAgICAgICAgICAgICAgICBzZXQobmV3UHJlc2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICkuc3Vic2NyaWJlKChuZXdQcmVzZXRzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvbGRWYWx1ZXNNYXAgPSBuZXcgTWFwKHRoaXMuX3ByZXNldE1hcCk7XG4gICAgICAgICAgICBjb25zdCBvbGRQcm9wcyA9IEFycmF5LmZyb20odGhpcy5fcHJlc2V0TWFwLmtleXMoKSk7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IE9iamVjdC5rZXlzKG5ld1ByZXNldHMgPz8ge30pO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8ga2V5cyBpbiB0aGUgbmV3IHByZXNldHMgY2xlYXIgYWxsIHByZXNldCB2YWx1ZXNcbiAgICAgICAgICAgIGlmIChuZXdQcm9wcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggb2xkIHNldCBwcm9wcyBhbmQgbmV3IG9uZXNcbiAgICAgICAgICAgIC8vIFJlbW92ZSBvbGQgb25lcyAmIHNldCBuZXcgb25lc1xuICAgICAgICAgICAgLy8gRmluYWxseSBmb3JjZSBhbiB1cGRhdGUgZm9yIGVhY2ggcHJvcFxuICAgICAgICAgICAgWy4uLm9sZFByb3BzLCAuLi5uZXdQcm9wc10uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChuZXdQcmVzZXRzW2tleV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuc2V0KGtleSwgbmV3UHJlc2V0c1trZXldKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKGtleSwgb2xkVmFsdWVzTWFwLmdldChrZXkpID8/IG51bGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c0NvbXBvbmVudFVuc3ViPy4oKTtcbiAgICAgICAgdGhpcy5zc3JDb25zdHJ1Y3RvclN1Yj8uKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHN1cGVyKGFyZ3MpO1xuXG4gICAgICAgIC8vIFRPRE8ocmVlY2UpOiBFbnN1cmUgd2UgdXBkYXRlIHRoaXMgdG8gc3VwcG9ydCBjb250ZXh0IHdoZW4gdGhhdCBpcyBTU1IgRnJpZW5kbHk6IGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8zMzY1XG4gICAgICAgIC8vIEhhbmRsZSBzZXR0aW5nIHByZXNldCBkZWZhdWx0cyBpbiBTU1JcbiAgICAgICAgaWYgKGlzU3NyKCkpIHtcbiAgICAgICAgICB0aGlzLnNzckNvbnN0cnVjdG9yU3ViID0gTXRlUHJlc2V0U2VydmljZS5zZWxlY3RQcmVzZXQodGhpcy5wcmVzZXQgPz8gJ2dsb2JhbCcpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChwcmVzZXQpID0+IHRoaXMuaGFuZGxlU3NyUHJlc2V0Q2hhbmdlcyhwcmVzZXQpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcml2YXRlIGhhbmRsZVNzclByZXNldENoYW5nZXMocHJlc2V0OiBNb3J0YXJQcmVzZXQpIHtcbiAgICAgICAgaWYgKHByZXNldCkge1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFByZXNldHMgPSBwcmVzZXRbdGhpcy5fX2NvbXBvbmVudE5hbWVdO1xuICAgICAgICAgIGNvbnN0IG9sZFByb3BzID0gQXJyYXkuZnJvbSh0aGlzLl9wcmVzZXRNYXAua2V5cygpKTtcbiAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudFByZXNldHMgPz8ge30pO1xuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGtleXMgaW4gdGhlIG5ldyBwcmVzZXRzIGNsZWFyIGFsbCBwcmVzZXQgdmFsdWVzXG4gICAgICAgICAgaWYgKG5ld1Byb3BzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLmNsZWFyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBvbGQgc2V0IHByb3BzIGFuZCBuZXcgb25lc1xuICAgICAgICAgIC8vIFJlbW92ZSBvbGQgb25lcyAmIHNldCBuZXcgb25lc1xuICAgICAgICAgIC8vIEZpbmFsbHkgZm9yY2UgYW4gdXBkYXRlIGZvciBlYWNoIHByb3BcbiAgICAgICAgICBbLi4ub2xkUHJvcHMsIC4uLm5ld1Byb3BzXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRQcmVzZXRzW2tleV0pIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHJlc2V0TWFwLnNldChrZXksIGNvbXBvbmVudFByZXNldHNba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9wcmVzZXRNYXAuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoa2V5LCBudWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmFwcGxpZWRQcmVzZXQgPSBwcmVzZXRbJ3ByZXNldCddO1xuICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnYXBwbGllZFByZXNldCcsIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBQcmVzZXRFbGVtZW50IGFzIENvbnN0cnVjdG9yPFByZXNldEVsZW1lbnRJbnRlcmZhY2U8UD4+ICYgVDtcbiAgfTtcbn07XG4iLCAiaW1wb3J0IHsgUHJvcGVydHlEZWNsYXJhdGlvbiB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByZXNldFByb3BlcnR5PFQ+KG9wdGlvbnM/OiBQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gIHJldHVybiBwcm9wZXJ0eSh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBpc1ByZXNldDogdHJ1ZSxcbiAgfSBhcyBhbnkpO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdAbGl0LWxhYnMvY29udGV4dCc7XG5cbmV4cG9ydCBjb25zdCBwcmVzZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxzdHJpbmc+KCdNVEVfUFJFU0VUJyk7XG4iLCAiaW1wb3J0IHsgUmVhY3RpdmVDb250cm9sbGVySG9zdCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBNdGVQcmVzZXRTZXJ2aWNlIH0gZnJvbSAnLi4vcHJlc2V0cyc7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBNdGVFbGVtZW50IH0gZnJvbSAnLi4vYmFzZS1jbGFzc2VzJztcblxuY29uc3QgZ2xvYmFsUHJlc2V0JCA9IE10ZVByZXNldFNlcnZpY2Uuc2VsZWN0UHJlc2V0KCdnbG9iYWwnKTtcbmNvbnN0IGdsb2JhbFByZXNldE5hbWUkID0gY29tcHV0ZWQoZ2xvYmFsUHJlc2V0JCwgKHByZXNldCkgPT4gcHJlc2V0LnByZXNldCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGllZFByZXNldENvbnRleHQge1xuICBwcmVzZXROYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUHJlc2V0IGlzIGRldGVybWluZWQgZnJvbSBlaXRoZXIgdGhlIHBhcmVudCBwcmVzZXQgY29udGV4dCBvciBhIGxvY2FsIHByZXNldCBwcm9wZXJ0eS5cbiAqIFRoaXMgY29udHJvbGxlciBrZWVwcyB0cmFjayBvZiB0aGUgYWN0dWFsIGFjdGl2ZSBwcmVzZXQgYXBwbGllZCB0byB0aGUgY3VycmVudCBjb21wb25lbnQuXG4gKiBJZiBhIGNhbGxiYWNrIGlzIGdpdmVuIGl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIHRoYXQgY29udGV4dCBjaGFuZ2VzLiBPdGhlcndpc2UgY29udHJvbGxlclxuICogbWV0aG9kcyBjYW4gYmUgY2FsbGVkIHdoZW4gbmVlZGVkLlxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgZXZlbiB3aXRoaW4gZWxlbWVudHMgdGhhdCBkbyBub3QgaGF2ZSB0aGVpciBvd24gcHJlc2V0XG4gKiBvcHRpb25zIChha2EgZXh0ZW5kIHRoZSBwcmVzZXRNaXhpbikuXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWVkUHJlc2V0Q29udGV4dENvbnRyb2xsZXIge1xuICBwcml2YXRlIGFwcGxpZWRQcmVzZXROYW1lID0gJ2dsb2JhbCc7XG4gIHByaXZhdGUgYWN0aXZlR2xvYmFsUHJlc2V0TmFtZSA9ICdkZWZhdWx0JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGhvc3Q6IFJlYWN0aXZlQ29udHJvbGxlckhvc3QgJiBNdGVFbGVtZW50LFxuICAgIHByaXZhdGUgY2FsbGJhY2s/OiAoY29udGV4dDogQXBwbGllZFByZXNldENvbnRleHQpID0+IHZvaWRcbiAgKSB7XG4gICAgdGhpcy5ob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICB9XG5cbiAgaG9zdENvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmhvc3Quc3Vicy5wdXNoKFxuICAgICAgZ2xvYmFsUHJlc2V0TmFtZSQuc3Vic2NyaWJlKChnbG9iYWxQcmVzZXROYW1lKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlR2xvYmFsUHJlc2V0TmFtZSA9IGdsb2JhbFByZXNldE5hbWU7XG4gICAgICAgIHRoaXMudXBkYXRlQXBwbGllZFByZXNldENvbnRleHQoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLmV4ZWNDYWxsYmFjaygpO1xuICB9XG5cbiAgaG9zdFVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUFwcGxpZWRQcmVzZXRDb250ZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIGV4ZWNDYWxsYmFjaygpIHtcbiAgICB0aGlzLmNhbGxiYWNrPy4oe1xuICAgICAgcHJlc2V0TmFtZTogdGhpcy5hcHBsaWVkUHJlc2V0TmFtZSxcbiAgICB9IGFzIEFwcGxpZWRQcmVzZXRDb250ZXh0KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQXBwbGllZFByZXNldENvbnRleHQoKSB7XG4gICAgbGV0IHVwZGF0ZWQgPSBmYWxzZTtcbiAgICBjb25zdCBuZXdQcmVzZXROYW1lID0gKHRoaXMuaG9zdCBhcyBhbnkpLmFwcGxpZWRQcmVzZXQgPz8gdGhpcy5hY3RpdmVHbG9iYWxQcmVzZXROYW1lO1xuICAgIGlmIChuZXdQcmVzZXROYW1lICE9PSB0aGlzLmFwcGxpZWRQcmVzZXROYW1lKSB7XG4gICAgICB0aGlzLmFwcGxpZWRQcmVzZXROYW1lID0gbmV3UHJlc2V0TmFtZTtcbiAgICAgIHVwZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZCkge1xuICAgICAgdGhpcy5leGVjQ2FsbGJhY2soKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlUHJlc2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBsaWVkUHJlc2V0TmFtZTtcbiAgfVxufVxuIiwgImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvYmFzZS5qcyc7XG4vKipcbiAqIEl0ZW1zIGluIHRoaXMgZmlsZSBhcmUgbW9kaWZpY2F0aW9ucyBvZiBvZiB0aGUgZGVjb3JhdG9ycyBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvYmxvYi9tYWluL3BhY2thZ2VzL3JlYWN0aXZlLWVsZW1lbnQvc3JjL2RlY29yYXRvcnMvY3VzdG9tLWVsZW1lbnQudHNcbiAqXG4gKiBXZSd2ZSBhZGRlZCBjaGVja3MgdG8gcHJldmVudCByZS1yZWdpc3RyYXRpb25zIGZyb20gdGhyb3dpbmcgaGFyZCBlcnJvcnMuXG4gKi9cblxuLyoqXG4gKiBBbGxvdyBmb3IgY3VzdG9tIGVsZW1lbnQgY2xhc3NlcyB3aXRoIHByaXZhdGUgY29uc3RydWN0b3JzXG4gKi9cbnR5cGUgQ3VzdG9tRWxlbWVudENsYXNzID0gT21pdDx0eXBlb2YgSFRNTEVsZW1lbnQsICduZXcnPjtcblxuZXhwb3J0IHR5cGUgQ3VzdG9tRWxlbWVudERlY29yYXRvciA9IHtcbiAgLy8gbGVnYWN5XG4gIChjbHM6IEN1c3RvbUVsZW1lbnRDbGFzcyk6IHZvaWQ7XG5cbiAgLy8gc3RhbmRhcmRcbiAgKHRhcmdldDogQ3VzdG9tRWxlbWVudENsYXNzLCBjb250ZXh0OiBDbGFzc0RlY29yYXRvckNvbnRleHQ8Q29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+Pik6IHZvaWQ7XG59O1xuXG4vKipcbiAqIENsYXNzIGRlY29yYXRvciBmYWN0b3J5IHRoYXQgZGVmaW5lcyB0aGUgZGVjb3JhdGVkIGNsYXNzIGFzIGEgY3VzdG9tIGVsZW1lbnQuXG4gKlxuICogYGBganNcbiAqIEBjdXN0b21FbGVtZW50KCdteS1lbGVtZW50JylcbiAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgYDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKiBAcGFyYW0gdGFnTmFtZSBUaGUgdGFnIG5hbWUgb2YgdGhlIGN1c3RvbSBlbGVtZW50IHRvIGRlZmluZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmluZUVsZW1lbnQgPVxuICAodGFnTmFtZTogc3RyaW5nKTogQ3VzdG9tRWxlbWVudERlY29yYXRvciA9PlxuICAoXG4gICAgY2xhc3NPclRhcmdldDogQ3VzdG9tRWxlbWVudENsYXNzIHwgQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+LFxuICAgIGNvbnRleHQ/OiBDbGFzc0RlY29yYXRvckNvbnRleHQ8Q29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+PlxuICApID0+IHtcbiAgICBpZiAoY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyKCgpID0+IHtcbiAgICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQ/Lih0YWdOYW1lKSkge1xuICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGFzc09yVGFyZ2V0IGFzIEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldD8uKHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGFzc09yVGFyZ2V0IGFzIEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3Rvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuIiwgImltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50LCBQcmVzZXRFbGVtZW50SW50ZXJmYWNlLCBwcmVzZXRQcm9wZXJ0eSB9IGZyb20gJy4uLyc7XG5cbi8qKiBQb3NzaWJsZSBjb3JlIHBhbGV0dGUgZ3JvdXAgY29sb3IgdmFsdWVzLiAqL1xuZXhwb3J0IHR5cGUgQ29yZVBhbGV0dGUgPSAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICd0ZXJ0aWFyeScgfCAnZGFuZ2VyJyB8IHVuZGVmaW5lZDtcblxuLyoqICBQb3NzaWJsZSBzdGF0dXMgcGFsZXR0ZSBncm91cCBjb2xvciB2YWx1ZXMuICovXG5leHBvcnQgdHlwZSBTdGF0dXNQYWxldHRlID1cbiAgfCAncHJpbWFyeSdcbiAgfCAnc2Vjb25kYXJ5J1xuICB8ICd0ZXJ0aWFyeSdcbiAgfCAnYWNjZW50J1xuICB8ICd3YXJuaW5nJ1xuICB8ICdzdWNjZXNzJ1xuICB8ICdkYW5nZXInXG4gIHwgdW5kZWZpbmVkO1xuXG4vKiogUG9zc2libGUgdml6IHBhbGV0dGUgZ3JvdXAgY29sb3IgdmFsdWVzLiAqL1xuZXhwb3J0IHR5cGUgVml6UGFsZXR0ZSA9ICcxJyB8ICcyJyB8ICczJyB8ICc0JyB8ICc1JyB8ICc2JyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgUGFsZXR0ZUdyb3VwQ29sb3IgPSBDb3JlUGFsZXR0ZSB8IFN0YXR1c1BhbGV0dGUgfCBWaXpQYWxldHRlO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb2xvckludGVyZmFjZTxQYWxldHRlR3JvdXA+IHtcbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIHByaW1hcnkgY29sb3IgcGFsZXR0ZSB1c2VkIHRvIHRoZW1lIHRoaXMgY29tcG9uZW50XG4gICAqIEBhdHRyIGNvbG9yXG4gICAqL1xuICBjb2xvcjogUGFsZXR0ZUdyb3VwO1xufVxuXG5leHBvcnQgZW51bSBQYWxldHRlR3JvdXBPcHRpb24ge1xuICBDb3JlID0gJ2NvcmUnLFxuICBTdGF0dXMgPSAnc3RhdHVzJyxcbiAgVml6ID0gJ3ZpeicsXG59XG5cbmV4cG9ydCBjb25zdCBDb3JlQ29sb3JNaXhpbiA9IDxcbiAgVCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQgJiBQYXJ0aWFsPFByZXNldEVsZW1lbnRJbnRlcmZhY2U8YW55Pj4+XG4+KFxuICBzdXBlckNsYXNzOiBUXG4pID0+IHtcbiAgY2xhc3MgQ29sb3JFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgcHJpbWFyeSBjb2xvciBwYWxldHRlIHVzZWQgdG8gdGhlbWUgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAYXR0ciBjb2xvclxuICAgICAqL1xuICAgIEBwcmVzZXRQcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSkgY29sb3I6IENvcmVQYWxldHRlO1xuICB9XG5cbiAgcmV0dXJuIENvbG9yRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxDb2xvckludGVyZmFjZTxDb3JlUGFsZXR0ZT4+ICYgVDtcbn07XG5cbmV4cG9ydCBjb25zdCBTdGF0dXNDb2xvck1peGluID0gPFxuICBUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudCAmIFBhcnRpYWw8UHJlc2V0RWxlbWVudEludGVyZmFjZTxhbnk+Pj5cbj4oXG4gIHN1cGVyQ2xhc3M6IFRcbikgPT4ge1xuICBjbGFzcyBDb2xvckVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBwcmltYXJ5IGNvbG9yIHBhbGV0dGUgdXNlZCB0byB0aGVtZSB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBhdHRyIGNvbG9yXG4gICAgICovXG4gICAgQHByZXNldFByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBjb2xvcjogU3RhdHVzUGFsZXR0ZTtcbiAgfVxuXG4gIHJldHVybiBDb2xvckVsZW1lbnQgYXMgQ29uc3RydWN0b3I8Q29sb3JJbnRlcmZhY2U8U3RhdHVzUGFsZXR0ZT4+ICYgVDtcbn07XG5cbmV4cG9ydCBjb25zdCBWaXpDb2xvck1peGluID0gPFxuICBUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudCAmIFBhcnRpYWw8UHJlc2V0RWxlbWVudEludGVyZmFjZTxhbnk+Pj5cbj4oXG4gIHN1cGVyQ2xhc3M6IFRcbikgPT4ge1xuICBjbGFzcyBDb2xvckVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBwcmltYXJ5IGNvbG9yIHBhbGV0dGUgdXNlZCB0byB0aGVtZSB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBhdHRyIGNvbG9yXG4gICAgICovXG4gICAgQHByZXNldFByb3BlcnR5KHsgcmVmbGVjdDogdHJ1ZSB9KSBjb2xvcjogVml6UGFsZXR0ZTtcbiAgfVxuXG4gIHJldHVybiBDb2xvckVsZW1lbnQgYXMgQ29uc3RydWN0b3I8Q29sb3JJbnRlcmZhY2U8Vml6UGFsZXR0ZT4+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0KFtkZW5zaXR5PWNvbXBhY3RdKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHhzKTstLW10ZS1zcGFjZS14czp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14cyk7LS1tdGUtc3BhY2Utc206dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3Qtc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1jb21wYWN0LW1kKTstLW10ZS1zcGFjZS1sZzp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC1sZyk7LS1tdGUtc3BhY2UteGw6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2UtY29tcGFjdC14eGwpOy0tbXRlLXNwYWNlLXh4eGw6dmFyKC0tbXRlLXNwYWNlLWNvbXBhY3QteHh4bCl9Omhvc3QoW2RlbnNpdHk9Y29tZnldKXstLW10ZS1zcGFjZS14eHM6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXh4cyk7LS1tdGUtc3BhY2UteHM6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LXhzKTstLW10ZS1zcGFjZS1zbTp2YXIoLS1tdGUtc3BhY2UtY29tZnktc20pOy0tbXRlLXNwYWNlLW1kOnZhcigtLW10ZS1zcGFjZS1jb21meS1tZCk7LS1tdGUtc3BhY2UtbGc6dmFyKC0tbXRlLXNwYWNlLWNvbWZ5LWxnKTstLW10ZS1zcGFjZS14bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteGwpOy0tbXRlLXNwYWNlLXh4bDp2YXIoLS1tdGUtc3BhY2UtY29tZnkteHhsKTstLW10ZS1zcGFjZS14eHhsOnZhcigtLW10ZS1zcGFjZS1jb21meS14eHhsKX06aG9zdChbZGVuc2l0eT1yb29teV0pey0tbXRlLXNwYWNlLXh4czp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHhzKTstLW10ZS1zcGFjZS14czp2YXIoLS1tdGUtc3BhY2Utcm9vbXkteHMpOy0tbXRlLXNwYWNlLXNtOnZhcigtLW10ZS1zcGFjZS1yb29teS1zbSk7LS1tdGUtc3BhY2UtbWQ6dmFyKC0tbXRlLXNwYWNlLXJvb215LW1kKTstLW10ZS1zcGFjZS1sZzp2YXIoLS1tdGUtc3BhY2Utcm9vbXktbGcpOy0tbXRlLXNwYWNlLXhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14bCk7LS1tdGUtc3BhY2UteHhsOnZhcigtLW10ZS1zcGFjZS1yb29teS14eGwpOy0tbXRlLXNwYWNlLXh4eGw6dmFyKC0tbXRlLXNwYWNlLXJvb215LXh4eGwpfWA7IiwgImltcG9ydCB7IExpdEVsZW1lbnQsIFByb3BlcnR5VmFsdWVzIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi8nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEaXNhYmxlZEludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGlzIGNvbXBvbmVudFxuICAgKiBAYXR0ciBkaXNhYmxlZFxuICAgKi9cbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBEaXNhYmxlZE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50Pj4oc3VwZXJDbGFzczogVCkgPT4ge1xuICBjbGFzcyBEaXNhYmxlZEVsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBhdHRyIGRpc2FibGVkXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLy8gQmVjYXVzZSBgYXJpYURpc2FibGVkYCBleGlzdHMgYXMgYSBzdHJpbmcgb24gTGl0RWxlbWVudCB3ZSBjYW5ub3QgZGVjbGFyZSB0aGlzIGEgcHJvcGVydHkgaGVyZVxuICAgIHByb3RlY3RlZCB3aWxsVXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXM8YW55Pik6IHZvaWQge1xuICAgICAgc3VwZXIud2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAoX2NoYW5nZWRQcm9wZXJ0aWVzLmhhcygnZGlzYWJsZWQnKSkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgYCR7dGhpcy5kaXNhYmxlZH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBEaXNhYmxlZEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8RGlzYWJsZWRJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IHByZXNldFByb3BlcnR5IH0gZnJvbSAnLi4vcHJlc2V0cy9wcmVzZXQuZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW52ZXJzZUludGVyZmFjZSB7XG4gIC8qKiBSZW5kZXJzIHRoaXMgY29tcG9uZW50IHdpdGggaW52ZXJzZSB0aGVtaW5nICovXG4gIGludmVyc2U6IGJvb2xlYW47XG5cbiAgLyoqIFNwZWNpYWwgb3B0aW9uIHRvIG92ZXJyaWRlIGludmVyc2Ugd2hlbiBpdCBpcyBzZXQgYnkgYSBwcmVzZXQgKi9cbiAgd2l0aG91dEludmVyc2U6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBJbnZlcnNlTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPExpdEVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIEludmVyc2VFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqIFJlbmRlcnMgdGhpcyBjb21wb25lbnQgd2l0aCBpbnZlcnNlIHRoZW1pbmcgKi9cbiAgICBAcHJlc2V0UHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGludmVyc2UgPSBmYWxzZTtcblxuICAgIC8qKiBTcGVjaWFsIG9wdGlvbiB0byBvdmVycmlkZSBpbnZlcnNlIHdoZW4gaXQgaXMgc2V0IGJ5IGEgcHJlc2V0ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSB3aXRob3V0SW52ZXJzZSA9IGZhbHNlO1xuICB9XG4gIHJldHVybiBJbnZlcnNlRWxlbWVudCBhcyBDb25zdHJ1Y3RvcjxJbnZlcnNlSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdChbaW52ZXJzZV06bm90KFt3aXRob3V0SW52ZXJzZV0pKXstLW10ZS1zdXJmYWNlLTE6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS0xLXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtc3VyZmFjZS0yOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UpOy0tbXRlLXN1cmZhY2UtMi1yZ2I6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZS1yZ2IpOy0tbXRlLXN1cmZhY2UtMzp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlKTstLW10ZS1zdXJmYWNlLTMtcmdiOnZhcigtLW10ZS1zdXJmYWNlLWludmVyc2UtcmdiKTstLW10ZS1zdXJmYWNlLTQ6dmFyKC0tbXRlLXN1cmZhY2UtaW52ZXJzZSk7LS1tdGUtc3VyZmFjZS00LXJnYjp2YXIoLS1tdGUtc3VyZmFjZS1pbnZlcnNlLXJnYik7LS1tdGUtaW5rLTE6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMS1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTI6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMi1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTM6dmFyKC0tbXRlLXdoaXRlKTstLW10ZS1pbmstMy1yZ2I6dmFyKC0tbXRlLXdoaXRlLXJnYik7LS1tdGUtaW5rLTQ6dmFyKC0tbXRlLWJsYWNrKTstLW10ZS1pbmstNC1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1tdGUtaW5rLTU6dmFyKC0tbXRlLWJsYWNrKTstLW10ZS1pbmstNS1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1tdGUtYm9yZGVyLTE6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMS1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtYm9yZGVyLTI6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMi1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtYm9yZGVyLTM6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLW10ZS1ib3JkZXItMy1yZ2I6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlLXJnYik7LS1tdGUtZGlzYWJsZWQtMTp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0xKTstLW10ZS1kaXNhYmxlZC0xLXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0xLXJnYik7LS1tdGUtZGlzYWJsZWQtMjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0yKTstLW10ZS1kaXNhYmxlZC0yLXJnYjp2YXIoLS1tdGUtZGlzYWJsZWQtaW52ZXJzZS0yKTstLW10ZS1kaXNhYmxlZC0zOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMpOy0tbXRlLWRpc2FibGVkLTMtcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMtcmdiKTstLW10ZS1kaXNhYmxlZC00OnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMpOy0tbXRlLWRpc2FibGVkLTQtcmdiOnZhcigtLW10ZS1kaXNhYmxlZC1pbnZlcnNlLTMtcmdiKTstLW10ZS1pdC1zdXJmYWNlLTEtZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0xLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTEtYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMS1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1pdC1zdXJmYWNlLTItZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0yLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0yLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTItYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMi1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1pdC1zdXJmYWNlLTMtZGVmYXVsdC1yZ2I6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1kZWZhdWx0LXJnYik7LS1tdGUtaXQtc3VyZmFjZS0zLWRlZmF1bHQtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWRlZmF1bHQtYSk7LS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWhvdmVyLXJnYik7LS1tdGUtaXQtc3VyZmFjZS0zLWhvdmVyLWE6dmFyKC0tbXRlLWl0LXN1cmZhY2UtaW52ZXJzZS1ob3Zlci1hKTstLW10ZS1pdC1zdXJmYWNlLTMtYWN0aXZlLXJnYjp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1yZ2IpOy0tbXRlLWl0LXN1cmZhY2UtMy1hY3RpdmUtYTp2YXIoLS1tdGUtaXQtc3VyZmFjZS1pbnZlcnNlLWFjdGl2ZS1hKTstLW10ZS1saWdodDp2YXIoLS1tdGUtd2hpdGUpOy0tbXRlLWxpZ2h0LXJnYjp2YXIoLS1tdGUtd2hpdGUtcmdiKTstLW10ZS1kYXJrOnZhcigtLW10ZS1ibGFjayk7LS1tdGUtZGFyay1yZ2I6dmFyKC0tbXRlLWJsYWNrLXJnYik7LS1idXR0b24tZmlsbGVkLWJnOnZhcigtLW10ZS13aGl0ZSk7LS1idXR0b24tZmlsbGVkLWluazp2YXIoLS1tdGUtYmxhY2spOy0tYnV0dG9uLWZpbGxlZC1hY3RpdmUtYmc6dmFyKC0tbXRlLWJvcmRlci1pbnZlcnNlKTstLWJ1dHRvbi1maWxsZWQtYWN0aXZlLWluazp2YXIoLS1tdGUtd2hpdGUpfWA7IiwgImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBvblVwZGF0ZSB9IGZyb20gJy4uL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRGlzYWJsZWRJbnRlcmZhY2UgfSBmcm9tICcuL2Rpc2FibGVkLm1peGluJztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgaXNTc3IgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUYWJJbmRleEludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgdGFiaW5kZXggYXR0cmlidXRlIHZhbHVlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnRcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZ2V0VGFiSW5kZXhBZGFwdGVyKCk6IHN0cmluZztcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHNldCB0aGUgdGFiaW5kZXggYXR0cmlidXRlIG9uIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHNldFRhYkluZGV4QWRhcHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJlbW92ZSB0aGUgdGFiaW5kZXggYXR0cmlidXRlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnRcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCk6IHZvaWQ7XG59XG5cbi8qKlxuICogTWl4aW4gdG8gcHJvcGVybHkgbWFuYWdlIHRoZSB0YWJpbmRleCBpbiBhIG5vbi1pbnRydXNpdmUgd2F5LiBXaGVuIGRpc2FibGVkIGlzIHRydWUsXG4gKiB0aGUgdGFiaW5kZXggd2lsbCBBTFdBWVMgYmUgYC0xYC4gSG93ZXZlciwgYW55IGNoYW5nZXMgdG8gdGFiaW5kZXggd2lsbCBiZSBpbnRlcmNlcHRlZFxuICogYW5kIGNhY2hlZCBpbnRlcm5hbGx5IHVudGlsIGRpc2FibGVkIGlzIGZhbHNlLCB0aGVuIHRhYmluZGV4IHdpbGwgYmUgcmVzdG9yZWQgdG8gdGhlXG4gKiBjYWNoZWQgdmFsdWUsIG9yIHJlbW92ZWQgaWYgdGhhdCBpcyB1bmRlZmluZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBUYWJJbmRleE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxMaXRFbGVtZW50ICYgRGlzYWJsZWRJbnRlcmZhY2U+PihcbiAgc3VwZXJDbGFzczogVCxcbiAgb3B0aW9uczogeyBpbml0aWFsVGFiSW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCB9ID0geyBpbml0aWFsVGFiSW5kZXg6IHVuZGVmaW5lZCB9XG4pID0+IHtcbiAgY2xhc3MgVGFiSW5kZXhFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiAndGFiaW5kZXgnLCB0eXBlOiBOdW1iZXIsIG5vQWNjZXNzb3I6IHRydWUgfSlcbiAgICBwdWJsaWMgb3ZlcnJpZGUgc2V0IHRhYkluZGV4KHRhYkluZGV4OiBudW1iZXIpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIC8vIFdoZW4gc2V0dGluZyB0aGUgdGFiSW5kZXggb24gdGhlIGN1cnJlbnQgZWxlbWVudCB0byBgLTFgIGRpc2FibGVkLCB3ZSB3YW50IHRvIGtlZXAgdHJhY2sgb2Ygd2hhdCB0aGUgdGFiSW5kZXggdmFsdWUgYmVmb3JlIHRoYXQgd2FzXG4gICAgICAgIC8vIGFzIHRoZSBjYWNoZWRUYWJJbmRleC4gVG8gZG8gdGhpcyB3ZSBtdXN0IGlnbm9yZSB0aGUgaW5pdGlhbCBjaGFuZ2UgdG8gYC0xYCBhbmQgdGhlbiBjYWNoZSBhbnkgZnV0dXJlIHZhbHVlcyBiZWZvcmUga2VlcGluZyB0aGVcbiAgICAgICAgLy8gdGFiSW5kZXggYXMgYC0xYCB1bnRpbCBubyBsb25nZXIgZGlzYWJsZWQuIFRoZW4gd2UgY2FuIHJldHVybiB0aGUgdGFiSW5kZXggdG8gd2hhdGV2ZXIgdGhlIGxhc3Qgc2V0IHZhbHVlIHdhcyBmcm9tIHRoZSBjYWNoZWQgaW5kZXguXG4gICAgICAgIGlmICghdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKCctMScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3ByZXZlbnROZXh0VGFiSW5kZXhDYWNoZUNoYW5nZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90YWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl90YWJJbmRleH1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIG92ZXJyaWRlIGdldCB0YWJJbmRleCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90YWJJbmRleDtcbiAgICB9XG4gICAgcHJpdmF0ZSBfdGFiSW5kZXggPSBvcHRpb25zPy5pbml0aWFsVGFiSW5kZXg7XG4gICAgcHJpdmF0ZSBfY2FjaGVkVGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gZmFsc2U7XG5cbiAgICBAb25VcGRhdGUoWydkaXNhYmxlZCddLCB7IG9uOiAnYm90aCcgfSlcbiAgICBwcml2YXRlIGhhbmRsZVRhYmluZGV4Q2hhbmdlKGNoYW5nZWRQcm9wcykge1xuICAgICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgaWYgKGNoYW5nZWRQcm9wcy5nZXQoJ2Rpc2FibGVkJykgPT09IGZhbHNlICYmIHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50TmV4dFRhYkluZGV4Q2FjaGVDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jYWNoZWRUYWJJbmRleCA9IE51bWJlcih0aGlzLmdldFRhYkluZGV4QWRhcHRlcigpKTtcbiAgICAgICAgICB0aGlzLl90YWJJbmRleCA9IC0xO1xuICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKCctMScsIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYW5nZWRQcm9wcy5nZXQoJ2Rpc2FibGVkJykgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5fY2FjaGVkVGFiSW5kZXggIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9jYWNoZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fdGFiSW5kZXggPSB0aGlzLl9jYWNoZWRUYWJJbmRleDtcbiAgICAgICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKGAke3RoaXMuX2NhY2hlZFRhYkluZGV4fWApO1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVkVGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVUYWJJbmRleEFkYXB0ZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHRhYmluZGV4IGF0dHJpYnV0ZSB2YWx1ZSBmcm9tIGEgY3VzdG9tIHRhcmdldCBlbGVtZW50ICovXG4gICAgZ2V0VGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIH1cblxuICAgIC8qKiBPdmVycmlkZSB0aGlzIGFkYXB0ZXIgdG8gc2V0IHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgb24gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgKi9cbiAgICBzZXRUYWJJbmRleEFkYXB0ZXIodmFsdWU6IHN0cmluZywgc2hvdWxkUHJldmVudFRhYkluZGV4Q2hhbmdlT25TZWxmID0gZmFsc2UpIHtcbiAgICAgIGlmIChzaG91bGRQcmV2ZW50VGFiSW5kZXhDaGFuZ2VPblNlbGYpIHtcbiAgICAgICAgdGhpcy5fcHJldmVudE5leHRUYWJJbmRleENhY2hlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgdGhpcyBhZGFwdGVyIHRvIHJlbW92ZSB0aGUgdGFiaW5kZXggYXR0cmlidXRlIGZyb20gYSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgKi9cbiAgICByZW1vdmVUYWJJbmRleEFkYXB0ZXIoKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICB3aWxsVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICBzdXBlci53aWxsVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKGlzU3NyKCkgJiYgdGhpcy5fdGFiSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4QWRhcHRlcihgJHt0aGlzLl90YWJJbmRleH1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICAgIGlmICh0aGlzLl90YWJJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0VGFiSW5kZXhBZGFwdGVyKGAke3RoaXMuX3RhYkluZGV4fWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gVGFiSW5kZXhFbGVtZW50IGFzIENvbnN0cnVjdG9yPFRhYkluZGV4SW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQsIFN0eWxlTWFwIH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgc2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnQG1vcnRhci9zdHlsZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE10ZUVsZW1lbnRQYXJ0cyB7XG4gIC8qKiBUaGUgaG9zdCBlbGVtZW50IFwicGFydFwiLiBPdmVycmlkZXMgdGhlIGBzZWAgcHJvcGVydHkgb2YgdGhpcyBlbGVtZW50ICovXG4gIGhvc3Q/OiBTdHlsZU1hcDtcbn1cblxuZXhwb3J0IHR5cGUgU3R5bGVQYXJ0c01hcDxUID0gc3RyaW5nIHwgbnVtYmVyPiA9IHtcbiAgW25hbWU6IHN0cmluZ106IFN0eWxlTWFwPFQ+O1xufTtcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3R5bGVQYXJ0c0ludGVyZmFjZTxTdHlsZVBhcnRzPiB7XG4gIC8qKlxuICAgKiBTdHlsZSBtYXBwaW5ncyB0aGF0IGFyZSBhcHBsaWVkIHRvIGVhY2ggY3NzIHBhcnQgYnkgbmFtZS4gU2V0IHRoZVxuICAgKiBwcm9wZXJ0eSBgaG9zdGAgdG8gYXBwbHkgYSBgU3R5bGVJbmZvYCBvYmplY3QgdG8gdGhlIGVsZW1lbnQgaG9zdCBpdHNlbGYuXG4gICAqL1xuICBzcD86IFN0eWxlUGFydHM7XG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZVBhcnRzTWl4aW4gPSA8U3R5bGVQYXJ0cywgVCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIFN0eWxlUGFydHNFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogU3R5bGUgbWFwcGluZ3MgdGhhdCBhcmUgYXBwbGllZCB0byBlYWNoIGNzcyBwYXJ0IGJ5IG5hbWUuIFNldCB0aGVcbiAgICAgKiBwcm9wZXJ0eSBgaG9zdGAgdG8gYXBwbHkgYSBgU3R5bGVJbmZvYCBvYmplY3QgdG8gdGhlIGVsZW1lbnQgaG9zdCBpdHNlbGYuXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0LCByZWZsZWN0OiB0cnVlIH0pIHNwOiBTdHlsZVBhcnRzO1xuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUluc3RhbmNlU3R5bGVzKGNoYW5nZWRQcm9wcykge1xuICAgICAgc3VwZXIudXBkYXRlSW5zdGFuY2VTdHlsZXMoY2hhbmdlZFByb3BzKTtcblxuICAgICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoJ3NwJykpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5zcCA/PyAoe30gYXMgU3R5bGVQYXJ0cykpLmZvckVhY2goKFtwYXJ0LCBzdHlsZU1hcF0pID0+IHtcbiAgICAgICAgICAvLyBEb3VibGUgdGhlIGA6aG9zdGAgc2VsZWN0b3IgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgYmV5b25kIG1vc3QgY29tcG9uZW50IGxldmVsIHN0eWxlcyBieSBkZWZhdWx0XG4gICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvckZhY3RvcnkoXG4gICAgICAgICAgICBwYXJ0ID09PSAnaG9zdCdcbiAgICAgICAgICAgICAgPyAnOmhvc3Q6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0J1xuICAgICAgICAgICAgICA6IGA6aG9zdDpob3N0Omhvc3Q6aG9zdDpob3N0Omhvc3Q6OnBhcnQoJHtwYXJ0fSlgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnNldEluc3RhbmNlU3R5bGUoYHNwLSR7cGFydH1gLCBzZWxlY3Rvciwgc3R5bGVNYXApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gU3R5bGVQYXJ0c0VsZW1lbnQgYXMgQ29uc3RydWN0b3I8U3R5bGVQYXJ0c0ludGVyZmFjZTxTdHlsZVBhcnRzPj4gJiBUO1xufTtcbiIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7cG9zaXRpb246cmVsYXRpdmV9I2FuY2hvcntpbnNldDowO3Bvc2l0aW9uOmFic29sdXRlfWA7IiwgImltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7XG4gIENsaWNrT3V0c2lkZUNvbnRyb2xsZXIsXG4gIENvbnN0cnVjdG9yLFxuICBFdmVudEVtaXR0ZXIsXG4gIEZvY3VzVHJhcENvbnRyb2xsZXIsXG4gIE10ZUVsZW1lbnQsXG4gIFBvcnRhbEFkYXB0ZXIsXG4gIFBvcnRhbENvbnRyb2xsZXIsXG4gIGRlZmF1bHRQb3J0YWxBZGFwdGVyLFxuICBldmVudEVtaXR0ZXIsXG4gIGlzU3NyLFxufSBmcm9tICcuLic7XG5pbXBvcnQgeyBQcm9wZXJ0eVZhbHVlTWFwIH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3ZlcmxheUludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBvdmVybGF5IHN0YXRlIG9uIHRoZSBvdmVybGF5IG1peGluLiBCeSBkZWZhdWx0IGFsbCBvcHRpb25zIGFyZSBzZXQgdG8gdHJ1ZSBpbml0aWFsbHkuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBzZXRPdmVybGF5T3B0aW9ucyhvcHRpb25zOiB7XG4gICAgd2l0aENsb3NlT25DbGlja091dHNpZGU/OiBib29sZWFuO1xuICAgIHdpdGhDbG9zZU9uRXNjYXBlPzogYm9vbGVhbjtcbiAgICB3aXRoRm9jdXNUcmFwPzogYm9vbGVhbjtcbiAgICB3aXRoUG9ydGFsPzogYm9vbGVhbjtcbiAgICB3aXRoRGltQmFja2Ryb3A/OiBib29sZWFuO1xuICAgIHdpdGhJbmVydEJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICB3aXRoU2Nyb2xsTG9jaz86IGJvb2xlYW47XG4gICAgYW5pbWF0aW9uRHVyYXRpb24/OiBudW1iZXI7XG4gICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG4gICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlPzogYm9vbGVhbjtcbiAgICBmb2N1c1RyYXBUYXJnZXQ/OiBFbGVtZW50O1xuICB9KTogdW5rbm93bjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIG92ZXJsYXkgc2hvdWxkIG9wZW4uIENhbiBhZGQgYSBsaXN0ZW5lciBmb3Igb3V0c2lkZSBjbGlja3MsIHBvcnRhbCBhbiBlbGVtZW50LFxuICAgKiBhbmQgcHJldmVudCB0aGUgYm9keSBmcm9tIHNjcm9sbGluZyB1cG9uIG9wZW4uXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBoYW5kbGVPdmVybGF5T3BlbihvcHRpb25zPzoge1xuICAgIGNsaWNrT3V0c2lkZUVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcbiAgICB3aWxsT3Blbj86ICgpID0+IHZvaWQ7XG4gIH0pOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgYWZ0ZXIgdGhlIG92ZXJsYXkgaGFzIGJlZW4gb3B0aW9uYWxseSBwb3J0YWxlZCBhbmQvb3IgYWxsIGFuaW1hdGlvbnMgaGF2ZSBmaW5pc2hlZC5cbiAgICovXG4gIGhhbmRsZU92ZXJsYXlPcGVuRW5kKCk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBvdmVybGF5IGVsZW1lbnQgc2hvdWxkIGNsb3NlLiBDYW4gc3RvcCBsaXN0ZW5pbmcgZm9yIG91dHNpZGUgY2xpY2tzLCByZWxlYXNlIGEsXG4gICAqIGZvY3VzIHRyYXAsIGFuZCBhbGxvdyB0aGUgYm9keSBlbGVtZW50IHRvIHNjcm9sbCBhZ2Fpbi5cbiAgICovXG4gIGhhbmRsZU92ZXJsYXlDbG9zZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgb3ZlcmxheSBlbGVtZW50IGhhcyBmaW5pc2hlZCBjbG9zaW5nIGFuZC9vciBhbGwgYW5pbWF0aW9ucyBoYXZlIGNvbXBsZXRlZC4gQ2FuXG4gICAqIHJlbW92ZSBhbiBlbGVtZW50IGZyb20gdGhlIHBvcnRhbC5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIGhhbmRsZU92ZXJsYXlDbG9zZUVuZChvcHRpb25zPzogeyByZW1vdmVGcm9tRWxlbWVudD86IEhUTUxFbGVtZW50IH0pOiBQcm9taXNlPHZvaWQ+O1xuXG4gIG9wZW4oKTogUHJvbWlzZTx2b2lkPjtcblxuICBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBUaGUgdGFiIGluZGV4IGZvciB0aGlzIGVsZW1lbnRcbiAgICovXG4gIHRhYmluZGV4OiBudW1iZXI7XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiB0aGlzIG92ZXJsYXkgaXMgaW5pdGlhbGx5IG9wZW5lZCAqL1xuICBfb25PcGVuOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEVtaXR0ZWQgYWZ0ZXIgdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBvcGVuaW5nICovXG4gIF9vbk9wZW5FbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAvKiogRW1pdHRlZCB3aGVuIHRoaXMgb3ZlcmxheSBpcyBpbml0aWFsbHkgY2xvc2luZyAqL1xuICBfb25DbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBjbG9zaW5nICovXG4gIF9vbkNsb3NlRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgcG9ydGFsQWRhcHRlcjogUG9ydGFsQWRhcHRlcjtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBUaGUgb3BlbmVkIHN0YXRlIG9mIHRoZSBvdmVybGF5IHJlZ2FyZGxlc3Mgb2YgYW5pbWF0aW9uc1xuICAgKi9cbiAgb3BlbmVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEluZGljYXRlcyB0aGUgb3ZlcmxheSBoYXMgYmVlbiBwb3J0YWxlZCBhbmQgcmVhZHkgdG8gYW5pbWF0ZVxuICAgKi9cbiAgcmVhZHlGb3JBbmltYXRpb246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogSW5kaWNhdGVzIHRoZSBvdmVybGF5IGhhcyBiZWVuIGZ1bGx5IGFuaW1hdGVkIG9wZW5cbiAgICovXG4gIG9wZW5lZEZ1bGw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBPdmVybGF5TWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIE92ZXJsYXlFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqIFRoZSB0YWIgaW5kZXggb2YgdGhpcyBlbGVtZW50ICovXG4gICAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiAndGFiaW5kZXgnLCB0eXBlOiBOdW1iZXIgfSkgdGFiaW5kZXggPSAtMTtcblxuICAgIC8qKlxuICAgICAqIEFkYXB0ZXIgZm9yIHBvcnRhbCBET00gb3BlcmF0aW9uIHRoYXQgY2FuIGJlIHN1cHBsZW1lbnRlZCBmb3IgZXh0ZXJuYWwtZnJhbWV3b3JrIGludGVncmF0aW9ucy5cbiAgICAgKiBOb3RhYmx5LWxldmVyYWdlZCBieSBvdmVybGF5cyBpbiBvdXIgZ2VuZXJhdGVkIHJlYWN0IHdyYXBwZXJzLlxuICAgICAqXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSgpIHBvcnRhbEFkYXB0ZXI6IFBvcnRhbEFkYXB0ZXIgPSBkZWZhdWx0UG9ydGFsQWRhcHRlcjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBvcGVuZWQgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uT3BlbjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIEVtaXR0ZWQgYWZ0ZXIgdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBvcGVuaW5nICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbk9wZW5FbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGlzIGluaXRpYWxseSBjbG9zZWQgKi9cbiAgICBAZXZlbnRFbWl0dGVyKCkgX29uQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIC8qKiBFbWl0dGVkIHdoZW4gdGhpcyBvdmVybGF5IGhhcyBmaW5pc2hlZCBjbG9zaW5nICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkNsb3NlRW5kOiBFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBlbGVtZW50IHNob3VsZCB1c2UgYSBmb2N1cyB0cmFwIG9yIG5vdCAqL1xuICAgIHByaXZhdGUgX3dpdGhGb2N1c1RyYXAgPSB0cnVlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgZWxlbWVudCBzaG91bGQgY2xvc2Ugd2hlbiBhIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgdGhlIGVsZW1lbnQgKi9cbiAgICBwcml2YXRlIF9jbG9zZU9uQ2xpY2tPdXRzaWRlID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBjbG9zZSB3aGVuIHRoZSBlc2NhcGUgYnV0dG9uIGlzIHByZXNzZWQgKi9cbiAgICBwcml2YXRlIF9jbG9zZU9uRXNjYXBlID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IHNob3VsZCB1c2UgYSBwb3J0YWwgb3Igbm90ICovXG4gICAgcHJpdmF0ZSBfd2l0aFBvcnRhbCA9IHRydWU7XG5cbiAgICAvKiogV2V0aGVyIHRoZSB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGNsaWNrIGJlaGluZCB0aGUgYmFja2Ryb3Agb3Igbm90ICovXG4gICAgcHJpdmF0ZSBfd2l0aEluZXJ0QmFja2Ryb3AgPSBmYWxzZTtcblxuICAgIC8qKiBXZXRoZXIgdGhlIG92ZXJsYXkncyBiYWNrZHJvcCBzaG91bGQgcmVuZGVyIGRpbW1lZCAqL1xuICAgIHByaXZhdGUgX3dpdGhEaW1CYWNrZHJvcCA9IGZhbHNlO1xuXG4gICAgLyoqIFdldGhlciBvciBub3QgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlLWFwcGVuZGVkIHRvIGl0J3Mgb3JpZ2luIHBhcmVudCBlbGVtZW50IG9uIGNsb3NlIF9pZl8gcG9ydGFsZWQuICovXG4gICAgcHJpdmF0ZSBfcmV0dXJuVG9PcmlnaW5PbkNsb3NlID0gZmFsc2U7XG5cbiAgICAvKiogT3B0aW9uYWwgYmFja2Ryb3AgdGltaW5nLiBJbXBvcnRhbnQgcGFydGljdWxhcmx5IGZvciBzbW9vdGggY2xvc2VzIHdpdGggYSB2aXNpYmxlIGJhY2tkcm9wICovXG4gICAgcHJpdmF0ZSBfYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XG5cbiAgICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBzaG91bGQgcHJldmVudCBzY3JvbGxpbmcgb24gdGhlIGJvZHkgKi9cbiAgICBwcml2YXRlIF93aXRoU2Nyb2xsTG9jayA9IHRydWU7XG5cbiAgICBwcm90ZWN0ZWQgZm9jdXNUcmFwQ29udHJvbGxlciA9IG5ldyBGb2N1c1RyYXBDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgcHJvdGVjdGVkIGNsaWNrT3V0c2lkZUNvbnRyb2xsZXIgPSBuZXcgQ2xpY2tPdXRzaWRlQ29udHJvbGxlcih0aGlzLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3dpdGhQb3J0YWwpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZU9uQ2xpY2tPdXRzaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwcm90ZWN0ZWQgcG9ydGFsQ29udHJvbGxlciA9IG5ldyBQb3J0YWxDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgcGFyZW50IGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdGlhbFBhcmVudDogRWxlbWVudCB8IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0byBkZXRlY3QgY2xpY2tzIG91dHNpZGUgb2YgdG8gY2xvc2UgdGhlIG92ZXJsYXkgZWxlbWVudC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNsaWNrT3V0c2lkZU92ZXJsYXlFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG5cbiAgICBwcml2YXRlIF9vcmlnaW5QYXJlbnQ/OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIF9mb2N1c1RyYXBUYXJnZXQ/OiBFbGVtZW50IHwgSFRNTEVsZW1lbnQgPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqIFRoZSBvcGVuZWQgc3RhdGUgb2YgdGhlIG92ZXJsYXkgcmVnYXJkbGVzcyBvZiBhbmltYXRpb25zXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBvcGVuZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBJbmRpY2F0ZXMgdGhlIG92ZXJsYXkgaGFzIGJlZW4gcG9ydGFsZWQgYW5kIHJlYWR5IHRvIGFuaW1hdGVcbiAgICAgKi9cbiAgICBAc3RhdGUoKVxuICAgIHNldCByZWFkeUZvckFuaW1hdGlvbihyZWFkeUZvckFuaW1hdGlvbjogYm9vbGVhbikge1xuICAgICAgdGhpcy5fcmVhZHlGb3JBbmltYXRpb24gPSByZWFkeUZvckFuaW1hdGlvbjtcbiAgICB9XG4gICAgZ2V0IHJlYWR5Rm9yQW5pbWF0aW9uKCkge1xuICAgICAgLy8gRHVyaW5nIFNTUiByZXR1cm4gdHJ1ZSBpbiBjYXNlIHNvbWV0aGluZyBuZWVkcyB0byBiZSBvcGVuZWQgaW5pdGlhbGx5LlxuICAgICAgcmV0dXJuIGlzU3NyKCkgPyB0cnVlIDogdGhpcy5fcmVhZHlGb3JBbmltYXRpb247XG4gICAgfVxuICAgIHByaXZhdGUgX3JlYWR5Rm9yQW5pbWF0aW9uID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogVGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgb3ZlcmxheSByZWdhcmRsZXNzIG9mIGFuaW1hdGlvbnMuIFRoaXMgaXMgcmVmbGVjdGVkIGFuZCB1c2VkIGJ5XG4gICAgICogc29tZSBvdmVybGF5cyB0byByZXN0cmljdCB0aGVpciBzaXplIHdoaWxlIGhpZGRlbi4gKHNpbmNlIGRpc3BsYXk6IG5vbmUgYnJlYWtzIGFuaW1hdGlvbnMpXG4gICAgICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBvcGVuZWRGdWxsID0gZmFsc2U7XG5cbiAgICBzZXRPdmVybGF5T3B0aW9ucyhvcHRpb25zOiB7XG4gICAgICB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZT86IGJvb2xlYW47XG4gICAgICB3aXRoQ2xvc2VPbkVzY2FwZT86IGJvb2xlYW47XG4gICAgICB3aXRoRm9jdXNUcmFwPzogYm9vbGVhbjtcbiAgICAgIHdpdGhQb3J0YWw/OiBib29sZWFuO1xuICAgICAgd2l0aEluZXJ0QmFja2Ryb3A/OiBib29sZWFuO1xuICAgICAgd2l0aERpbUJhY2tkcm9wPzogYm9vbGVhbjtcbiAgICAgIHdpdGhTY3JvbGxMb2NrPzogYm9vbGVhbjtcbiAgICAgIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xuICAgICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlPzogYm9vbGVhbjtcbiAgICAgIGZvY3VzVHJhcFRhcmdldD86IEVsZW1lbnQ7XG4gICAgfSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB3aXRoRm9jdXNUcmFwLFxuICAgICAgICB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZSxcbiAgICAgICAgd2l0aENsb3NlT25Fc2NhcGUsXG4gICAgICAgIHdpdGhQb3J0YWwsXG4gICAgICAgIHdpdGhTY3JvbGxMb2NrLFxuICAgICAgICB3aXRoSW5lcnRCYWNrZHJvcCxcbiAgICAgICAgd2l0aERpbUJhY2tkcm9wLFxuICAgICAgICBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgcmV0dXJuVG9PcmlnaW5PbkNsb3NlLFxuICAgICAgICBmb2N1c1RyYXBUYXJnZXQsXG4gICAgICB9ID0gb3B0aW9ucyA/PyB7fTtcblxuICAgICAgdGhpcy5fd2l0aEZvY3VzVHJhcCA9IHdpdGhGb2N1c1RyYXAgPz8gdGhpcy5fd2l0aEZvY3VzVHJhcDtcbiAgICAgIHRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUgPSB3aXRoQ2xvc2VPbkNsaWNrT3V0c2lkZSA/PyB0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlO1xuICAgICAgdGhpcy5fd2l0aFNjcm9sbExvY2sgPSB3aXRoU2Nyb2xsTG9jayA/PyB0aGlzLl93aXRoU2Nyb2xsTG9jaztcbiAgICAgIHRoaXMuX3dpdGhQb3J0YWwgPSB3aXRoUG9ydGFsID8/IHRoaXMuX3dpdGhQb3J0YWw7XG4gICAgICB0aGlzLl93aXRoSW5lcnRCYWNrZHJvcCA9XG4gICAgICAgIHdpdGhJbmVydEJhY2tkcm9wID8/ICF0aGlzLl93aXRoRm9jdXNUcmFwID8/IHRoaXMuX3dpdGhJbmVydEJhY2tkcm9wO1xuICAgICAgdGhpcy5fd2l0aERpbUJhY2tkcm9wID0gd2l0aERpbUJhY2tkcm9wID8/IHRoaXMuX3dpdGhEaW1CYWNrZHJvcDtcbiAgICAgIHRoaXMuX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID1cbiAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPz8gdGhpcy5fYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb247XG4gICAgICB0aGlzLl9yZXR1cm5Ub09yaWdpbk9uQ2xvc2UgPSByZXR1cm5Ub09yaWdpbk9uQ2xvc2UgPz8gdGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlO1xuICAgICAgdGhpcy5fZm9jdXNUcmFwVGFyZ2V0ID0gZm9jdXNUcmFwVGFyZ2V0ID8/IHRoaXMuX2ZvY3VzVHJhcFRhcmdldDtcblxuICAgICAgaWYgKHdpdGhDbG9zZU9uRXNjYXBlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fY2xvc2VPbkVzY2FwZSAhPT0gd2l0aENsb3NlT25Fc2NhcGUpIHtcbiAgICAgICAgaWYgKHdpdGhDbG9zZU9uRXNjYXBlID09PSB0cnVlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbG9zZU9uRXNjYXBlID0gd2l0aENsb3NlT25Fc2NhcGUgPz8gdGhpcy5fY2xvc2VPbkVzY2FwZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpdGhGb2N1c1RyYXAgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAod2l0aEZvY3VzVHJhcCA9PT0gdHJ1ZSAmJiB0aGlzLnRhYmluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gLTE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlT3ZlcmxheSgpO1xuICAgIH1cblxuICAgIGhhbmRsZU92ZXJsYXlPcGVuKG9wdGlvbnM/OiB7XG4gICAgICBjbGlja091dHNpZGVFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG4gICAgICB3aWxsT3Blbj86ICgpID0+IHZvaWQ7XG4gICAgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gSWdub3JlIGlmIGFscmVhZHkgb3BlblxuICAgICAgaWYgKHRoaXMub3BlbmVkIHx8IHRoaXMub3BlbmVkRnVsbCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgICBjb25zdCB7IGNsaWNrT3V0c2lkZUVsZW1lbnQsIHdpbGxPcGVuIH0gPSBvcHRpb25zID8/IHt9O1xuICAgICAgd2lsbE9wZW4/LigpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQgPSBjbGlja091dHNpZGVFbGVtZW50IHx8IHRoaXM7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlQ29udHJvbGxlci5saXN0ZW5Gb3JDbGlja3NPdXRzaWRlT2YodGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCk7XG4gICAgICAgIGlmICh0aGlzLl93aXRoUG9ydGFsKSB7XG4gICAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyXG4gICAgICAgICAgICAuYXBwZW5kVG9TdGFjayh0aGlzLCB7XG4gICAgICAgICAgICAgIHdpdGhEaW1CYWNrZHJvcDogdGhpcy5fd2l0aERpbUJhY2tkcm9wLFxuICAgICAgICAgICAgICB3aXRoSW5lcnRCYWNrZHJvcDogdGhpcy5fd2l0aEluZXJ0QmFja2Ryb3AsXG4gICAgICAgICAgICAgIHdpdGhTY3JvbGxMb2NrOiB0aGlzLl93aXRoU2Nyb2xsTG9jayxcbiAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrT3V0c2lkZUhhbmRsZXI6IHRoaXMuaGFuZGxlQ2xvc2VPbkNsaWNrT3V0c2lkZSxcbiAgICAgICAgICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb246IHRoaXMuX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICAgICAgICBwb3J0YWxBZGFwdGVyOiB0aGlzLnBvcnRhbEFkYXB0ZXIsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAvLyBXYWl0IGZvciBhcHBlbmQgdG8gY29tcGxldGUgYmVmb3JlIGFuaW1hdGluZ1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5Rm9yQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBBZnRlciBhbmltYXRpb24gYmVnaW5zIHJlc29sdmVcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fb25PcGVuLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5fb3JpZ2luUGFyZW50ICYmXG4gICAgICAgICAgICB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSAmJlxuICAgICAgICAgICAgdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkgIT09IHRoaXMuX29yaWdpblBhcmVudFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5wb3J0YWxBZGFwdGVyKHRoaXMsIHRoaXMuX29yaWdpblBhcmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFdhaXQgZm9yIGFwcGVuZCB0byBjb21wbGV0ZSBiZWZvcmUgYW5pbWF0aW5nXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Rm9yQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIEFmdGVyIGFuaW1hdGlvbiBiZWdpbnMgcmVzb2x2ZVxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fb25PcGVuLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMjApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVPdmVybGF5T3BlbkVuZCgpIHtcbiAgICAgIC8vIENhbmNlbCBpZiBjbG9zZWQgYmVmb3JlIG9wZW4gZW5kZWRcbiAgICAgIGlmICghdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuZWRGdWxsID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLl93aXRoRm9jdXNUcmFwKSB7XG4gICAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci50cmFwRm9jdXModGhpcy5fZm9jdXNUcmFwVGFyZ2V0LCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29uT3BlbkVuZC5lbWl0KG51bGwsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlT3ZlcmxheUNsb3NlKCkge1xuICAgICAgLy8gSWdub3JlIGlmIGFscmVhZHkgY2xvc2VkXG4gICAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9vbkNsb3NlLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5jbGlja091dHNpZGVDb250cm9sbGVyLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5yZWxlYXNlRm9jdXModHJ1ZSk7XG4gICAgICB0aGlzLnBvcnRhbENvbnRyb2xsZXIuaGlkZUJhY2tkcm9wKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlT3ZlcmxheUNsb3NlRW5kKG9wdGlvbnM/OiB7IHJlbW92ZUZyb21FbGVtZW50PzogSFRNTEVsZW1lbnQgfSkge1xuICAgICAgLy8gQ2FuY2VsIGlmIG9wZW5lZCBiZWZvcmUgY2xvc2UgZW5kZWRcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5lZEZ1bGwgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVhZHlGb3JBbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMucG9ydGFsQ29udHJvbGxlci5yZW1vdmVGcm9tU3RhY2sob3B0aW9ucz8ucmVtb3ZlRnJvbUVsZW1lbnQgfHwgdGhpcyk7XG4gICAgICBpZiAodGhpcy5fcmV0dXJuVG9PcmlnaW5PbkNsb3NlKSB7XG4gICAgICAgIGlmICh0aGlzLl9vcmlnaW5QYXJlbnQgJiYgdGhpcy5fb3JpZ2luUGFyZW50ICE9PSB0aGlzLmdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSkge1xuICAgICAgICAgIHRoaXMucG9ydGFsQWRhcHRlcih0aGlzLCB0aGlzLl9vcmlnaW5QYXJlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9vbkNsb3NlRW5kLmVtaXQobnVsbCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZU92ZXJsYXlLZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldEFjdHVhbFBhcmVudEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnRFbGVtZW50Py5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheS13cmFwcGVyJylcbiAgICAgICAgPyB0aGlzLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnRcbiAgICAgICAgOiB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGFyZW50IGVsZW1lbnQgdGhpcyBvdmVybGF5IHdpbGwgYmUgcmVhdHRhY2hlZCB0byBlaXRoZXI6XG4gICAgICogLSBXaGVuIGNvbmZpZ3VyZWQgdG8gZG8gc28gb24gY2xvc2VcbiAgICAgKiAtIFdoZW4gXCJwb3J0YWxpbmdcIiBpcyBkaXNhYmxlZFxuICAgICAqL1xuICAgIHNldE9yaWdpblBhcmVudChuZXdPcmlnaW46IEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG4gICAgICBpZiAoY3VycmVudFBhcmVudEVsZW1lbnQgPT09IHRoaXMuX29yaWdpblBhcmVudCkge1xuICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgbmV3T3JpZ2luKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29yaWdpblBhcmVudCA9IG5ld09yaWdpbjtcbiAgICB9XG5cbiAgICAvKiogVXBkYXRlcyB2YXJpb3VzIGJlaGF2aW9ycyB0byBhcHBseSB0aGUgbGF0ZXN0IG92ZXJsYXkgb3B0aW9ucyAqL1xuICAgIHVwZGF0ZU92ZXJsYXkoKSB7XG4gICAgICAvLyBVcGRhdGUgYmFja2Ryb3AgaW5lcnRuZXNzXG4gICAgICBpZiAodGhpcy5fd2l0aEluZXJ0QmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNldEJhY2tkcm9wSW5lcnRuZXNzKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNldEJhY2tkcm9wSW5lcnRuZXNzKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSBjbGljayBvdXRzaWRlIGNvbnRyb2xsZXJcbiAgICAgIGlmICh0aGlzLl9jbG9zZU9uQ2xpY2tPdXRzaWRlICYmICF0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuaXNMaXN0ZW5pbmcoKSkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIubGlzdGVuRm9yQ2xpY2tzT3V0c2lkZU9mKHRoaXMpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5fY2xvc2VPbkNsaWNrT3V0c2lkZSAmJiB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuaXNMaXN0ZW5pbmcoKSkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIuc3RvcExpc3RlbmluZygpO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIGZvY3VzIHRyYXAgY29udHJvbGxlclxuICAgICAgaWYgKHRoaXMuX3dpdGhGb2N1c1RyYXAgJiYgdGhpcy5vcGVuZWQgJiYgIXRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5pc1RyYXBwaW5nRm9jdXMoKSkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIudHJhcEZvY3VzKHRoaXMuX2ZvY3VzVHJhcFRhcmdldCwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl93aXRoRm9jdXNUcmFwICYmIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5pc1RyYXBwaW5nRm9jdXMoKSkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcENvbnRyb2xsZXIucmVsZWFzZUZvY3VzKHRydWUpO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIGJhY2tkcm9wIGNvbnRyb2xsZXJcbiAgICAgIGlmICh0aGlzLl93aXRoRGltQmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLnNob3dCYWNrZHJvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250cm9sbGVyLmhpZGVCYWNrZHJvcCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3JldHVyblRvT3JpZ2luT25DbG9zZSkge1xuICAgICAgICBpZiAodGhpcy5fb3JpZ2luUGFyZW50ICYmIHRoaXMuX29yaWdpblBhcmVudCAhPT0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCkpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbEFkYXB0ZXIodGhpcywgdGhpcy5fb3JpZ2luUGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIG9wZW4oKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09wZW4gbWV0aG9kIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbG9zZSBtZXRob2Qgbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55KSB7XG4gICAgICBzdXBlcihhcmdzKTtcbiAgICAgIHRoaXMuaGFuZGxlT3ZlcmxheUtleURvd24gPSB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChcbiAgICAgIGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlTWFwPGFueT4gfCBNYXA8UHJvcGVydHlLZXksIHVua25vd24+XG4gICAgKTogdm9pZCB7XG4gICAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgdGhpcy5fb3JpZ2luUGFyZW50ID0gdGhpcy5nZXRBY3R1YWxQYXJlbnRFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVDbG9zZU9uQ2xpY2tPdXRzaWRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2Nsb3NlT25DbGlja091dHNpZGUpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgIGlmICh0aGlzLl9jbG9zZU9uRXNjYXBlKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZU92ZXJsYXlLZXlEb3duKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBldmVudCBsaXN0ZW5lciBpbiB0aGUgZXZlbnQgdGhlIG92ZXJsYXkgZWxlbWVudCB3YXMgcG9ydGFsZWQuXG4gICAgICBpZiAodGhpcy5jbGlja091dHNpZGVPdmVybGF5RWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUNvbnRyb2xsZXIubGlzdGVuRm9yQ2xpY2tzT3V0c2lkZU9mKHRoaXMuY2xpY2tPdXRzaWRlT3ZlcmxheUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuZm9jdXNUcmFwQ29udHJvbGxlci5yZWxlYXNlRm9jdXModHJ1ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVPdmVybGF5S2V5RG93bik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE92ZXJsYXlFbGVtZW50IGFzIENvbnN0cnVjdG9yPE92ZXJsYXlJbnRlcmZhY2U+ICYgVDtcbn07XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0e2Rpc3BsYXk6YmxvY2s7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMDB9YDsiLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tZnVsbC13aWR0aDptYXgtY29udGVudDstLWNvbnRyb2wtd2lkdGg6dW5zZXQ7LS1jb250cm9sLW1pbi13aWR0aDoyNDBweDstLWNvbnRyb2wtbWF4LXdpZHRoOnZhcigtLWNvbnRyb2wtd2lkdGgpOy0tY29udHJvbC1tYXJnaW4teTp2YXIoLS1tdGUtc3BhY2Utc20pOy0tY29udHJvbC1tYXJnaW4teDp2YXIoLS1tdGUtc3BhY2Utc20pOy0tY29udHJvbC1kZXNjcmlwdG9yLW1hcmdpbjp2YXIoLS1tdGUtc3BhY2Utc20pOy0tbGFiZWwtd2lkdGg6dmFyKC0tY29udHJvbC13aWR0aCk7LS1sYWJlbC1taW4td2lkdGg6dmFyKC0tY29udHJvbC1taW4td2lkdGgpOy0tbGFiZWwtbWF4LXdpZHRoOnZhcigtLWNvbnRyb2wtbWF4LXdpZHRoKTstLWxhYmVsLW1hcmdpbi15OnZhcigtLW10ZS1zcGFjZS14cyk7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6dmFyKC0tZnVsbC13aWR0aCl9LmdyaWQtY29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWdyaWQ7Z3JpZC10ZW1wbGF0ZS1hcmVhczpcImxhYmVsXCIgXCJjb250cm9sXCI7Z3JpZC10ZW1wbGF0ZS1yb3dzOjFmciBtaW5tYXgoMCwxMDAlKTt3aWR0aDppbmhlcml0fTpob3N0KFt3aXRoRnVsbFdpZHRoXSl7LS1mdWxsLXdpZHRoOjEwMCU7LS1jb250cm9sLXdpZHRoOjEwMCV9Omhvc3QoW3dpdGhvdXRNYXJnaW5dKXstLWNvbnRyb2wtbWFyZ2luLXk6MHB4fTpob3N0KFt3aXRob3V0TWFyZ2luXSkgLmxhYmVsLWNvbnRhaW5lci5oYXMtY29udGVudHttYXJnaW4tYm90dG9tOnZhcigtLWNvbnRyb2wtZGVzY3JpcHRvci1tYXJnaW4pfS5sYWJlbC1jb250YWluZXJ7ZGlzcGxheTpub25lO2dyaWQtYXJlYTpsYWJlbDttYXgtd2lkdGg6dmFyKC0tbGFiZWwtbWF4LXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbGFiZWwtbWluLXdpZHRoKTt3aWR0aDp2YXIoLS1sYWJlbC13aWR0aCl9LmxhYmVsLWNvbnRhaW5lci5oYXMtY29udGVudHtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6dmFyKC0tbGFiZWwtbWFyZ2luLXkpfS5sYWJlbC1jb250YWluZXI6bm90KC5oYXMtY29udGVudCl7bWFyZ2luOjAhaW1wb3J0YW50fS5jb250ZXh0e2dyaWQtYXJlYTpjb250ZXh0fS5kZXNjcmlwdGlvbiwuZXJyb3IsLmhpbnQsLmxhYmVse2Rpc3BsYXk6YmxvY2t9LmRlc2NyaXB0aW9uIG10ZS1kZXNjcmlwdGlvbiwuZGVzY3JpcHRpb24gbXRlLWRlc2NyaXB0aW9uLXRleHQsLmxhYmVsIG10ZS1sYWJlbCwubGFiZWwgbXRlLWxhYmVsLXRleHQsOmhvc3QgOjpzbG90dGVkKG10ZS1kZXNjcmlwdGlvbi10ZXh0W3Nsb3Q9ZGVzY3JpcHRpb25dKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWRlc2NyaXB0aW9uW3Nsb3Q9ZGVzY3JpcHRpb25dKSw6aG9zdCA6OnNsb3R0ZWQobXRlLWxhYmVsLXRleHRbc2xvdD1sYWJlbF0pLDpob3N0IDo6c2xvdHRlZChtdGUtbGFiZWxbc2xvdD1sYWJlbF0pe21hcmdpbjowfTpob3N0KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pey0tbGFiZWwtd2lkdGg6bWF4LWNvbnRlbnQ7LS1sYWJlbC1taW4td2lkdGg6bWF4LWNvbnRlbnR9Omhvc3QoW2xhYmVsUG9zaXRpb249YmVmb3JlXSkgLmdyaWQtY29udGFpbmVye2dyaWQtdGVtcGxhdGUtYXJlYXM6XCJsYWJlbCBjb250cm9sXCI7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1pbm1heChhdXRvLHZhcigtLWxhYmVsLXdpZHRoKSkgbWlubWF4KGF1dG8sdmFyKC0tY29udHJvbC13aWR0aCkpfTpob3N0KFtsYWJlbFBvc2l0aW9uPWJlZm9yZV0pIC5sYWJlbC1jb250YWluZXJ7bWFyZ2luLWJvdHRvbTp2YXIoLS1jb250cm9sLW1hcmdpbi15KTttYXJnaW4tcmlnaHQ6dmFyKC0tY29udHJvbC1tYXJnaW4teCk7bWFyZ2luLXRvcDpjYWxjKHZhcigtLWNvbnRyb2wtbWFyZ2luLXkpICsgdmFyKC0tbGFiZWwtYmVmb3JlLW9mZnNldCkpfS5kZXNjcmlwdGlvbiwuZXJyb3IsLmhpbnR7bWluLXdpZHRoOjEwMCU7d2lkdGg6LW1vei1taW4tY29udGVudDt3aWR0aDptaW4tY29udGVudH0uY29udHJvbC1vdXRlci1jb250YWluZXJ7Z3JpZC1hcmVhOmNvbnRyb2w7bWFyZ2luLXRvcDp2YXIoLS1jb250cm9sLW1hcmdpbi15KTttYXgtd2lkdGg6dmFyKC0tY29udHJvbC1tYXgtd2lkdGgpO21pbi13aWR0aDp2YXIoLS1jb250cm9sLW1pbi13aWR0aCk7d2lkdGg6dmFyKC0tY29udHJvbC13aWR0aCl9Omhvc3QoOm5vdChbbGFiZWxQb3NpdGlvbj1iZWZvcmVdKSkgLmNvbnRyb2wtb3V0ZXItY29udGFpbmVyLmhhcy1sYWJlbC1jb250ZW50e21hcmdpbi10b3A6Y2FsYyh2YXIoLS1jb250cm9sLW1hcmdpbi15KS8yKX0uY29udHJvbC1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXJnaW4tYm90dG9tOnZhcigtLWNvbnRyb2wtbWFyZ2luLXkpfS5lcnJvciwuaGludHtkaXNwbGF5Om5vbmV9LmVycm9yLmhhcy1jb250ZW50LC5oaW50Lmhhcy1jb250ZW50e2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDp2YXIoLS1jb250cm9sLWRlc2NyaXB0b3ItbWFyZ2luKX1gOyIsIG51bGwsICJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO2V4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7LS1mb3JtLWZpZWxkLWludGVybmFsLXBhZGRpbmc6dmFyKC0tbXRlLXNwYWNlLXNtKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtZ2FwOnZhcigtLW10ZS1zcGFjZS1zbSk7LS1mb3JtLWZpZWxkLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCk7LS1mb3JtLWZpZWxkLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1zdXJmYWNlLTIpOy0tcHJlcGVuZC1iYWNrZ3JvdW5kOnZhcigtLW10ZS1ncmV5LTEpOy0tcHJlcGVuZC1wYWRkaW5nLXg6dmFyKC0tbXRlLXNwYWNlLXNtKTstLXByZXBlbmQtYm9yZGVyLWNvbG9yOnZhcigtLW10ZS1ib3JkZXItMil9Omhvc3QoW3JhZGl1cz1zbV0pey0tZm9ybS1maWVsZC1yYWRpdXM6dmFyKC0tbXRlLWJvcmRlci1yYWRpdXMteHMpfTpob3N0KFtyYWRpdXM9bGddKXstLWZvcm0tZmllbGQtcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLXh4bCl9Omhvc3QoW3NpemU9c21dKXstLXByZXBlbmQtcGFkZGluZy14OmNhbGModmFyKC0tbXRlLXNwYWNlLXhzKSArIHZhcigtLW10ZS1zcGFjZS14eHMpKTstLWZvcm0tZmllbGQtaW50ZXJuYWwtcGFkZGluZzpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSk7LS1mb3JtLWZpZWxkLWludGVybmFsLWdhcDpjYWxjKHZhcigtLW10ZS1zcGFjZS14cykgKyB2YXIoLS1tdGUtc3BhY2UteHhzKSl9Omhvc3QoW3NpemU9bGddKXstLXByZXBlbmQtcGFkZGluZy14OmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1wYWRkaW5nOmNhbGModmFyKC0tbXRlLXNwYWNlLXNtKSArIHZhcigtLW10ZS1zcGFjZS14cykpOy0tZm9ybS1maWVsZC1pbnRlcm5hbC1nYXA6Y2FsYyh2YXIoLS1tdGUtc3BhY2Utc20pICsgdmFyKC0tbXRlLXNwYWNlLXhzKSl9LmZvcm0tZmllbGR7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6dmFyKC0tZm9ybS1maWVsZC1iYWNrZ3JvdW5kKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2dhcDp2YXIoLS1mb3JtLWZpZWxkLWludGVybmFsLWdhcCk7cG9zaXRpb246cmVsYXRpdmV9Omhvc3QoW2Rpc2FibGVkXSkgLmZvcm0tZmllbGR7YmFja2dyb3VuZDp2YXIoLS1tdGUtZGlzYWJsZWQtMSk7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1tdGUtZGlzYWJsZWQtMSl9LmFwcGVuZCwucHJlcGVuZHthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpzdHJldGNoO2JhY2tncm91bmQ6dmFyKC0tcHJlcGVuZC1iYWNrZ3JvdW5kKTtkaXNwbGF5Om5vbmU7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOjAgdmFyKC0tcHJlcGVuZC1wYWRkaW5nLXgpfS5wcmVwZW5ke2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci1yaWdodDoxcHggc29saWQgdmFyKC0tcHJlcGVuZC1ib3JkZXItY29sb3IpO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpfS5hcHBlbmR7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvcmRlci1sZWZ0OjFweCBzb2xpZCB2YXIoLS1wcmVwZW5kLWJvcmRlci1jb2xvcik7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpfS5hcHBlbmQuaGFzLWNvbnRlbnQsLnByZXBlbmQuaGFzLWNvbnRlbnR7ZGlzcGxheTpmbGV4fS5wcmVmaXgsLnN1ZmZpeHthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpzdHJldGNoO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5wcmVmaXg6bm90KC5oYXMtcHJlcGVuZCl7cGFkZGluZy1sZWZ0OnZhcigtLXByZXBlbmQtcGFkZGluZy14KX0uc3VmZml4Om5vdCguaGFzLWFwcGVuZCl7cGFkZGluZy1yaWdodDp2YXIoLS1wcmVwZW5kLXBhZGRpbmcteCl9LmZvcm0tZmllbGQuZm9jdXNlZDpub3QoLmRpc2FibGVkKTpub3QoW2Rpc2FibGVkXSk6bm90KDpkaXNhYmxlZCk6YmVmb3Jle2JvcmRlcjoycHggc29saWQgcmdiKHZhcigtLW10ZS1mb2N1cy1yZ2IpKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWZvcm0tZmllbGQtcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1mb3JtLWZpZWxkLXJhZGl1cyk7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tZm9ybS1maWVsZC1yYWRpdXMpO2JvdHRvbTotMXB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHZhcigtLW10ZS1saWdodCk7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7bGVmdDotMXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTFweDt0b3A6LTFweDt6LWluZGV4Ojl9LmZvcm0tZmllbGQuaW52YWxpZHstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnJnYih2YXIoLS1tdGUtY29yZS1kYW5nZXItYmFzZS1yZ2IpKX06aG9zdChbd2l0aG91dEJvcmRlcl0pIDppcyguZm9ybS1maWVsZCwucHJlcGVuZCwuYXBwZW5kKXstLWZvcm0tZmllbGQtYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fWA7IiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtcbiAgQWN0aXZlTGlua09wdGlvbnMsXG4gIENvbnN0cnVjdG9yLFxuICBNdGVFbGVtZW50LFxuICBNdGVIaXN0b3J5QXBpU2VydmljZSxcbiAgVW5zdWJzY3JpYmVyLFxuICBpc0xpbmtBY3RpdmUsXG4gIG9uVXBkYXRlLFxufSBmcm9tICcuLi8nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMaW5rSW50ZXJmYWNlIHtcbiAgaHJlZj86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXV0b0FjdGl2ZUxpbmtJbnRlcmZhY2Uge1xuICAvKiogV2hldGhlciBvciBub3QgdGhpcyBsaW5rIGlzIHRoZSBhY3RpdmUgcGFnZSAqL1xuICBhY3RpdmU6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgbGluayBzaG91bGQgYXV0b21hdGljYWxseSB0cnkgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIHRoZSBhY3RpdmUgcGFnZSAqL1xuICB3aXRob3V0QXV0b0FjdGl2ZTogYm9vbGVhbjtcblxuICAvKiogT3B0aW9ucyB0byByZWZpbmUgaG93IHRoaXMgbGluayB3aWxsIGRldGVybWluZSBpZiBpdCBpcyB0aGUgYWN0aXZlIHBhZ2UgKi9cbiAgYWN0aXZlTGlua09wdGlvbnM/OiBQYXJ0aWFsPEFjdGl2ZUxpbmtPcHRpb25zPjtcblxuICAvKiogVGhlIGludGVybmFsIGFuY2hvciBlbGVtZW50IGZyb20gd2hpY2ggdG8gcHVsbCB0aGUgbG9jYXRpb24gZm9yIGNvbXBhcmlzb24gKi9cbiAgYW5jaG9yRWxlbWVudD86IEhUTUxBbmNob3JFbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgQXV0b0FjdGl2ZUxpbmtNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudCAmIExpbmtJbnRlcmZhY2U+PihcbiAgc3VwZXJDbGFzczogVFxuKSA9PiB7XG4gIGNsYXNzIEF1dG9BY3RpdmVMaW5rRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgYWN0aXZlID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHdpdGhvdXRBdXRvQWN0aXZlID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QsIHJlZmxlY3Q6IHRydWUgfSkgYWN0aXZlTGlua09wdGlvbnM/OiBQYXJ0aWFsPEFjdGl2ZUxpbmtPcHRpb25zPjtcblxuICAgIGFuY2hvckVsZW1lbnQ/OiBIVE1MQW5jaG9yRWxlbWVudDtcblxuICAgIHByaXZhdGUgdW5zdWI6IFVuc3Vic2NyaWJlcjtcblxuICAgIEBvblVwZGF0ZSgnYWN0aXZlJywgeyB3YWl0VW50aWxGaXJzdFVwZGF0ZTogdHJ1ZSB9KVxuICAgIHByaXZhdGUgaGFuZGxlQWN0aXZlTGlua0NoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3BhZ2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAb25VcGRhdGUoWydocmVmJywgJ2lyZWYnLCAnd2l0aEF1dG9BY3RpdmUnXSwgeyB3YWl0VW50aWxGaXJzdFVwZGF0ZTogdHJ1ZSB9KVxuICAgIHByaXZhdGUgaGFuZGxlQXV0b0FjdGl2ZUNoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmhyZWYgfHwgdGhpc1snaXJlZiddKSB7XG4gICAgICAgIGlmICh0aGlzLndpdGhvdXRBdXRvQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcigpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlVXJsQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUF1dG9BY3RpdmVDaGFuZ2UoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExpc3RlbmVyKCkge1xuICAgICAgaWYgKCF0aGlzLnVuc3ViKSB7XG4gICAgICAgIHRoaXMudW5zdWIgPSBNdGVIaXN0b3J5QXBpU2VydmljZS5zdGF0ZUNoYW5nZXMoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlVXJsQ2hhbmdlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLnVuc3ViPy4oKTtcbiAgICAgIHRoaXMudW5zdWIgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlVXJsQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmUgPSBpc0xpbmtBY3RpdmUoXG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudD8uaHJlZixcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIHRoaXMuYWN0aXZlTGlua09wdGlvbnNcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gQXV0b0FjdGl2ZUxpbmtFbGVtZW50IGFzIENvbnN0cnVjdG9yPEF1dG9BY3RpdmVMaW5rSW50ZXJmYWNlPiAmIFQ7XG59O1xuIiwgImltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQsIFNsb3RDb250cm9sbGVyIH0gZnJvbSAnLi4nO1xuXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTbG90T2JzZXJ2ZXJJbnRlcmZhY2Uge1xuICAvKipcbiAgICogUHJvcCB1c2VkIHRvIGRlY2xhcmUgd2hpY2ggc2xvdHMgYXJlIGJlaW5nIHVzZWQgZHVyaW5nIFNTUiB0byBtYWtlIHRoZW0gdmlzaWJsZSBpbiBjZXJ0YWluIGVkZ2UtY2FzZXMuXG4gICAqL1xuICBzc3JTbG90czogc3RyaW5nO1xuXG4gIHNsb3RDb250cm9sbGVyOiBTbG90Q29udHJvbGxlcjtcblxuICBoYXNTbG90OiAoc2xvdDogc3RyaW5nLCBvclZhbHVlPzogYW55KSA9PiBib29sZWFuO1xuXG4gIHNzclNsb3RDaGVjazogKHNsb3RzOiBzdHJpbmcpID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBTbG90T2JzZXJ2ZXJNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgU2xvdE9ic2VydmVyRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIFByb3AgdXNlZCB0byBkZWNsYXJlIHdoaWNoIHNsb3RzIGFyZSBiZWluZyB1c2VkIGR1cmluZyBTU1IgdG8gbWFrZSB0aGVtIHZpc2libGUgaW4gY2VydGFpbiBlZGdlLWNhc2VzLlxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHJlZmxlY3Q6IHRydWUgfSlcbiAgICBzZXQgc3NyU2xvdHModmFsOiBzdHJpbmcpIHtcbiAgICAgIGxldCBvbGRWYWwgPSB0aGlzLl9zc3JTbG90cztcbiAgICAgIHRoaXMuX3NzclNsb3RzID0gdmFsO1xuICAgICAgLy8gUGFyc2UgYW5kIGNhY2hlIHNzciBzbG90IHNldFxuICAgICAgY29uc3Qgc2xvdHMgPSAodGhpcy5fc3NyU2xvdHMgPz8gJycpXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLm1hcCgoc2xvdCkgPT4gc2xvdC50cmltKCkpO1xuICAgICAgdGhpcy5fc3NyU2xvdFNldCA9IG5ldyBTZXQ8c3RyaW5nPihzbG90cyk7XG4gICAgICAvLyBOb3JtYWwgdXBkYXRlXG4gICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoJ3NzclNsb3RzJywgb2xkVmFsKTtcbiAgICB9XG4gICAgZ2V0IHNzclNsb3RzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NzclNsb3RzO1xuICAgIH1cbiAgICBwcml2YXRlIF9zc3JTbG90cz86IHN0cmluZztcblxuICAgIC8qKiBAaWdub3JlICovXG4gICAgX3NzclNsb3RTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIHNsb3RDb250cm9sbGVyID0gbmV3IFNsb3RDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBzbG90IGhhcyBjb250ZW50LCBvciBpZiBpdCB3YXMgc3BlY2lmaWVkIGFzIGV4aXN0aW5nIGR1cmluZyBTU1IuXG4gICAgICogT25jZSBjYWxsZWQsIHRoZSBjb21wb25lbnQgd2lsbCBub3cgYXV0b21hdGljYWxseSB1cGRhdGUgaWYgdGhlIGNvbnRlbnRzIG9mIHRoaXMgc2xvdCBjaGFuZ2UuXG4gICAgICovXG4gICAgaGFzU2xvdChzbG90OiBzdHJpbmcsIG9yVmFsdWU/OiBhbnkpOiBib29sZWFuIHtcbiAgICAgIHRoaXMuc2xvdENvbnRyb2xsZXIudXBkYXRlT25DaGFuZ2Uoc2xvdCk7XG4gICAgICAvLyBUT0RPKHJlZWNlKTogcmVjb25zaWRlciB3aGVuIGEgc29sdXRpb24gZXhpc3RzIGZvciBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9pc3N1ZXMvMTQzNFxuICAgICAgLy8gV2UgaGF2ZSB0byBhc3N1bWUgYWxpZ25tZW50IHdpdGggc3NyU2xvdENoZWNrIHVudGlsIHRoZSBmaXJzdCB1cGRhdGUgaGVyZSBvdGhlcndpc2UgcGFydCBtaXNtYXRjaGVzIGNhbiBvY2N1clxuICAgICAgaWYgKCF0aGlzLl9fZmlyc3RVcGRhdGVkKSB7XG4gICAgICAgIHJldHVybiBvclZhbHVlIHx8IHRoaXMuc3NyU2xvdENoZWNrKHNsb3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9yVmFsdWUgfHwgdGhpcy5zbG90Q29udHJvbGxlci5jaGVjayhzbG90KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogV2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGUgcmVxdWVzdGVkIHNsb3Qgd2FzIHNwZWNpZmllZCBpbiB0aGUgbGlzdCBvZiBgc3NyLXNsb3RzYC4gKi9cbiAgICBzc3JTbG90Q2hlY2soc2xvdDogc3RyaW5nKSB7XG4gICAgICBpZiAodGhpcy5fX2ZpcnN0VXBkYXRlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3NyU2xvdFNldC5oYXMoc2xvdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBTbG90T2JzZXJ2ZXJFbGVtZW50IGFzIENvbnN0cnVjdG9yPFNsb3RPYnNlcnZlckludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBGb3JtQ29udHJvbE1peGluLCBGb3JtQ29udHJvbEludGVyZmFjZSB9IGZyb20gJ0BvcGVuLXdjL2Zvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgcXVlcnkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge1xuICBDb25zdHJ1Y3RvcixcbiAgRGlzYWJsZWRNaXhpbixcbiAgVGFiSW5kZXhNaXhpbixcbiAgTXRlRWxlbWVudCxcbiAgaW5uZXJJbnB1dFZhbGlkYXRvcnMsXG4gIFRhYkluZGV4SW50ZXJmYWNlLFxuICBEaXNhYmxlZEludGVyZmFjZSxcbiAgb25VcGRhdGUsXG4gIGV2ZW50RW1pdHRlcixcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICcuLic7XG5cbi8vIFJlcXVpcmVkIHBvbHlmaWxsIGZvciBub3dcbmltcG9ydCAnLi4vLi4vY29yZS9wb2x5ZmlsbHMvZWxlbWVudC1pbnRlcm5hbHMvaW5kZXgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE10ZUNoZWNrYm94Q2hhbmdlRGV0YWlsIHtcbiAgLyoqIFRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCBjaGFuZ2VkICovXG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sIGNoYW5nZWQgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgZWxlbWVudCBpcyBjaGVja2VkICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tib3hJbnRlcmZhY2Uge1xuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgZWxlbWVudCAqL1xuICBsYWJlbD86IHN0cmluZztcblxuICAvKiogVGhlIGVycm9yIHRleHQgZm9yIHRoZSBlbGVtZW50ICovXG4gIGVycm9yPzogc3RyaW5nO1xuXG4gIC8qKiBUaGUgaGludCB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICBoaW50Pzogc3RyaW5nO1xuXG4gIC8qKiBBbiBhcmlhIGxhYmVsIHRoYXQgd2lsbCBiZSBwcm92aWRlZCB0byB0aGUgaW5wdXQgZWxlbWVudCAqL1xuICBhcmlhTGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBuYW1lIGZvciB0aGUgZWxlbWVudC4gVXNlZCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgdmFsdWUgZm9yIHRoZSBlbGVtZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSBlbGVtZW50IHdoZW4gc3VibWl0dGluZyBhIGZvcm0gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudCAgKi9cbiAgdmFsdWU6IHN0cmluZztcblxuICAvKipcbiAgICogQWx0ZXJzIHRoZSBiZWhhdmlvciBvZiB0aGlzIGNvbnRyb2wuIFdoZW4gXCJjb250cm9sbGVkXCIsIGEgY29udHJvbHMgdmFsdWUgaXMgZHJpdmVuIGV4cGxpY2l0bHkgYnkgZXh0ZXJuYWwgc3RhdGVcbiAgICogdmlhIHRoZSBgdmFsdWVgIHByb3AuIENoYW5nZSBldmVudHMgd2lsbCBmaXJlIGJ1dCB0aGUgY29udHJvbCB2YWx1ZSB3aWxsIG5vdCBjaGFuZ2UgdW50aWwgaXQgaXMgYWx0ZXJlZCBkaXJlY3RseS5cbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgY29udHJvbGxlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgY2hlY2tlZCBieSBkZWZhdWx0LiBVc2VmdWwgZm9yIHdoZW4gcmVzZXR0aW5nIGZvcm0gY29udHJvbHMgb3IgdXNpbmcgYSBzdGF0ZWxlc3MgY29tcG9uZW50ICovXG4gIGRlZmF1bHRDaGVja2VkOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGNoZWNrZWQgb3Igbm90ICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlYWRvbmx5ICovXG4gIHJlYWRvbmx5OiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBzZWxlY3RpbmcgdGhlIGVsZW1lbnQgaXMgcmVxdWlyZWQgb3Igbm90ICovXG4gIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gIC8qKiBSZW5kZXJzIHRoZSByZXF1aXJlZCBpbmRpY2F0b3IgZm9yIHRoaXMgaW5wdXRzIGxhYmVsIHdpdGhvdXQgZW5hYmxpbmcgbmF0aXZlIGByZXF1aXJlZGAgdmFsaWRhdGlvbiAqL1xuICBzaG93UmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgaW5wdXQgYmx1cnMgICovXG4gIGhhbmRsZUJsdXIoKTogdm9pZDtcblxuICAvKiogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBpbnB1dCBpcyBmb2N1c2VkIG9uICAqL1xuICBoYW5kbGVGb2N1cygpOiB2b2lkO1xuXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCBjaGFuZ2VzICAqL1xuICBoYW5kbGVDaGFuZ2UoKTogdm9pZDtcblxuICAvKiogQSBzZXQgb2YgYXR0cmlidXRlcyB0byBiZSBmb3J3YXJkZWQgdG8gYW4gZWxlbWVudCB3aXRoaW4gcmVuZGVyIGFuZCByZW1vdmVkIGZyb20gdGhlIGVsZW1lbnQgKi9cbiAgaW5oZXJpdGVkQXR0cmlidXRlczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGNvbnN0IENoZWNrYm94TWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIENoZWNrYm94RWxlbWVudCBleHRlbmRzIFRhYkluZGV4TWl4aW4oRm9ybUNvbnRyb2xNaXhpbihEaXNhYmxlZE1peGluKHN1cGVyQ2xhc3MpKSwge1xuICAgIGluaXRpYWxUYWJJbmRleDogMCxcbiAgfSkge1xuICAgIGluaGVyaXRlZEF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICAgIC8qKiBAaWdub3JlICovXG4gICAgc3RhdGljIGZvcm1Db250cm9sVmFsaWRhdG9ycyA9IGlubmVySW5wdXRWYWxpZGF0b3JzO1xuXG4gICAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoKSBsYWJlbD86IHN0cmluZztcblxuICAgIC8qKiBUaGUgZXJyb3IgdGV4dCBmb3IgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoKSBlcnJvcj86IHN0cmluZztcblxuICAgIC8qKiBUaGUgaGludCB0ZXh0IGZvciB0aGUgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSgpIGhpbnQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBbHRlcnMgdGhlIGJlaGF2aW9yIG9mIHRoaXMgY29udHJvbC4gV2hlbiBcImNvbnRyb2xsZWRcIiwgYSBjb250cm9scyB2YWx1ZSBpcyBkcml2ZW4gZXhwbGljaXRseSBieSBleHRlcm5hbCBzdGF0ZVxuICAgICAqIHZpYSB0aGUgYHZhbHVlYCBwcm9wLiBDaGFuZ2UgZXZlbnRzIHdpbGwgZmlyZSBidXQgdGhlIGNvbnRyb2wgdmFsdWUgd2lsbCBub3QgY2hhbmdlIHVudGlsIGl0IGlzIGFsdGVyZWQgZGlyZWN0bHkuXG4gICAgICogQGV4cGVyaW1lbnRhbFxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgY29udHJvbGxlZDogYm9vbGVhbjtcblxuICAgIC8qKiBBbiBhcmlhIGxhYmVsIHRoYXQgd2lsbCBiZSBwcm92aWRlZCB0byB0aGUgaW5wdXQgZWxlbWVudCAqL1xuICAgIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogJ2FyaWEtbGFiZWwnLCByZWZsZWN0OiB0cnVlIH0pIGFyaWFMYWJlbDogc3RyaW5nO1xuXG4gICAgLyoqIFRoZSBuYW1lIGZvciB0aGUgZWxlbWVudC4gVXNlZCB3aGVuIHN1Ym1pdHRpbmcgYSBmb3JtIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnQgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIG5hbWU6IHN0cmluZztcblxuICAgIC8qKiBUaGUgdmFsdWUgZm9yIHRoZSBlbGVtZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSBlbGVtZW50IHdoZW4gc3VibWl0dGluZyBhIGZvcm0gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudCAgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIHZhbHVlPyA9ICdvbic7XG5cbiAgICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBzaG91bGQgYmUgY2hlY2tlZCBieSBkZWZhdWx0LiBVc2VmdWwgZm9yIHdoZW4gcmVzZXR0aW5nIGZvcm0gY29udHJvbHMgb3IgdXNpbmcgYSBzdGF0ZWxlc3MgY29tcG9uZW50ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBkZWZhdWx0Q2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgY2hlY2tlZCBvciBub3QgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIGNoZWNrZWQgPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBiZSByZWFkb25seSAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcmVhZG9ubHkgPSBmYWxzZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBzZWxlY3RpbmcgdGhlIGVsZW1lbnQgaXMgcmVxdWlyZWQgb3Igbm90ICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSByZXF1aXJlZCA9IGZhbHNlO1xuXG4gICAgLyoqIFJlbmRlcnMgdGhlIHJlcXVpcmVkIGluZGljYXRvciBmb3IgdGhpcyBpbnB1dHMgbGFiZWwgd2l0aG91dCBlbmFibGluZyBuYXRpdmUgYHJlcXVpcmVkYCB2YWxpZGF0aW9uICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBzaG93UmVxdWlyZWQ/O1xuXG4gICAgLyoqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgd2l0aGluIHRoZSBmb3JtIGNvbnRyb2wgbWl4aW4gKi9cbiAgICBAcXVlcnkoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpIHZhbGlkYXRpb25UYXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAvKiogRW1pdHRlZCB3aGVuIHRoZSBlbGVtZW50J3Mgc3RhdGUgaXMgYWJvdXQgdG8gY2hhbmdlLiBJZiBkZWZhdWx0IGlzIHByZXZlbnRlZCwgaXQgd2lsbCByZXZlcnQgdGhlIGNoZWNrYm94IHRvIGl0J3Mgb3JpZ2luYWwgY2hlY2tlZCBzdGF0ZSBwcmlvciB0byBzZWxlY3RpbmcuICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF93aWxsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TXRlQ2hlY2tib3hDaGFuZ2VEZXRhaWw+O1xuXG4gICAgLyoqIEVtaXR0ZWQgd2hlbiB0aGUgZWxlbWVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkLiAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxNdGVDaGVja2JveENoYW5nZURldGFpbD47XG5cbiAgICAvKiogRW1pdHMgd2hlbiB0aGlzIGVsZW1lbnQgaXMgZm9jdXNlZCAqL1xuICAgIEBldmVudEVtaXR0ZXIoKSBfb25Gb2N1czogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgLyoqIEVtaXRzIHdoZW4gdGhpcyBlbGVtZW50IGxvc2VzIGZvY3VzICovXG4gICAgQGV2ZW50RW1pdHRlcigpIF9vbkJsdXI6IEV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBvblVwZGF0ZSgnZGVmYXVsdENoZWNrZWQnKVxuICAgIHByb3RlY3RlZCBvbkRlZmF1bHRDaGVja2VkQ2hhbmdlKCkge1xuICAgICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkICYmIHRoaXMuZGVmYXVsdENoZWNrZWQgJiYgIXRoaXMuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBvblVwZGF0ZShbJ3ZhbHVlJywgJ2NoZWNrZWQnXSwgeyBvbjogJ2JvdGgnIH0pXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBAb25VcGRhdGUoJ2FyaWFMYWJlbCcsIHsgb246ICdib3RoJyB9KVxuICAgIHByb3RlY3RlZCB1cGRhdGVMYWJlbCgpIHtcbiAgICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IHtcbiAgICAgICAgLi4udGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzLFxuICAgICAgICBhcmlhTGFiZWw6IHRoaXMuYXJpYUxhYmVsLFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogLS0gRm9ybSBjb250cm9sIHZhbGlkYXRpb24gb3ZlcnJpZGVzIC0tICovXG4gICAgc2hvdWxkRm9ybVZhbHVlVXBkYXRlKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRGb3JtQ29udHJvbCgpOiB2b2lkIHtcbiAgICAgIHN1cGVyLnJlc2V0Rm9ybUNvbnRyb2w/LigpO1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMuZGVmYXVsdENoZWNrZWQ7XG4gICAgfVxuXG4gICAgdmFsaWRpdHlDYWxsYmFjaygpOiBzdHJpbmcgfCB2b2lkIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9yIHx8IHRoaXMudmFsaWRhdGlvblRhcmdldD8udmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgfVxuXG4gICAgLyoqIC0tIFRhYkluZGV4IG92ZXJyaWRlcyAtLSAqL1xuICAgIGdldFRhYkluZGV4QWRhcHRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICBzZXRUYWJJbmRleEFkYXB0ZXIodmFsdWU6IHN0cmluZykge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFiSW5kZXhBZGFwdGVyKCkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQ/LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm90UHJldmVudGVkID0gdGhpcy5fd2lsbENoYW5nZS5lbWl0KFxuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIGNoZWNrZWQ6ICF0aGlzLmNoZWNrZWQsXG4gICAgICAgIH0sXG4gICAgICAgIHsgY2FuY2VsYWJsZTogdHJ1ZSB9XG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5jb250cm9sbGVkKSB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBjaGVja2VkOiAhdGhpcy5jaGVja2VkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG5vdFByZXZlbnRlZCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgY2hlY2tlZDogdGhpcy5jaGVja2VkLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5fb25CbHVyLmVtaXQoKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9vbkZvY3VzLmVtaXQoKTtcbiAgICB9O1xuXG4gICAgLyoqIENsaWNrcyB0aGUgZWxlbWVudCAqL1xuICAgIHB1YmxpYyBjbGljaygpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblRhcmdldC5jbGljaygpO1xuICAgIH1cblxuICAgIC8qKiBGb2N1c2VzIHRoZSBlbGVtZW50ICovXG4gICAgcHVibGljIGZvY3VzKCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uVGFyZ2V0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqIEJsdXJzIHRoZSBlbGVtZW50ICovXG4gICAgcHVibGljIGJsdXIoKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25UYXJnZXQuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBDaGVja2JveEVsZW1lbnQgYXMgQ29uc3RydWN0b3I8XG4gICAgQ2hlY2tib3hJbnRlcmZhY2UgJiBUYWJJbmRleEludGVyZmFjZSAmIEZvcm1Db250cm9sSW50ZXJmYWNlICYgRGlzYWJsZWRJbnRlcmZhY2VcbiAgPiAmXG4gICAgVDtcbn07XG4iLCAiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgdGhlIFdlYWtNYXBzIHVzZWQgdGhyb3VnaG91dCB0aGlzIHByb2plY3QuIFRoZSBXZWFrTWFwcyBleGlzdCB0byB0aWVcbiAqIG9iamVjdHMgdG9nZXRoZXIgd2l0aG91dCBwb2xsdXRpbmcgdGhlIG9iamVjdHMgdGhlbXNlbHZlcyB3aXRoIHJlZmVyZW5jZXMgd2UnZCByYXRoZXIga2VlcFxuICogaGlkZGVuLiBUaGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gd29yayBhcyB0cmFuc3BhcmVudGx5IGFzIHBvc3NpYmxlLlxuICovXG5pbXBvcnQgeyBJRWxlbWVudEludGVybmFscywgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqIFVzZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBpdCBpcyBhdHRhY2hlZCB0byAqL1xuZXhwb3J0IGNvbnN0IHJlZk1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBJQ3VzdG9tRWxlbWVudD4oKTtcblxuLyoqIFVzZWUgYW4gRWxlbWVudHNJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGl0cyBWYWxpZGl0eVN0YXRlIG9iamVjdCAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkaXR5TWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIFZhbGlkaXR5U3RhdGU+KCk7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgaXRzIGF0dGFjaGVkIGlucHV0W3R5cGU9XCJoaWRkZW5cIl0gKi9cbmV4cG9ydCBjb25zdCBoaWRkZW5JbnB1dE1hcCA9IG5ldyBXZWFrTWFwPElFbGVtZW50SW50ZXJuYWxzLCBIVE1MSW5wdXRFbGVtZW50W10+KCk7XG5cbi8qKiBVc2UgYSBjdXN0b20gZWxlbWVudCB0byBnZXQgaXRzIGF0dGFjaGVkIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgKi9cbmV4cG9ydCBjb25zdCBpbnRlcm5hbHNNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHM+KCk7XG5cbi8qKiBVc2UgYW4gRWxlbWVudEludGVybmFscyBpbnN0YW5jZSB0byBnZXQgdGhlIGF0dGFjaGVkIHZhbGlkYXRpb24gbWVzc2FnZSAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25NZXNzYWdlTWFwID0gbmV3IFdlYWtNYXA8SUVsZW1lbnRJbnRlcm5hbHMsIHN0cmluZz4oKTtcblxuLyoqIFVzZSBhIGZvcm0gZWxlbWVudCB0byBnZXQgYXR0YWNoZWQgY3VzdG9tIGVsZW1lbnRzIGFuZCBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlcyAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmV4cG9ydCBjb25zdCBmb3Jtc01hcCA9IG5ldyBXZWFrTWFwPEhUTUxGb3JtRWxlbWVudCwgT2JqZWN0PigpO1xuXG4vKiogVXNlIGEgY3VzdG9tIGVsZW1lbnQgb3Igb3RoZXIgb2JqZWN0IHRvIGdldCB0aGVpciBhc3NvY2lhdGVkIE11dGF0aW9uT2JzZXJ2ZXJzICovXG5leHBvcnQgY29uc3Qgc2hhZG93SG9zdHNNYXAgPSBuZXcgV2Vha01hcDxJQ3VzdG9tRWxlbWVudCwgTXV0YXRpb25PYnNlcnZlcj4oKTtcblxuLyoqIFVzZSBhIGZvcm0gZWxlbWVudCB0byBnZXQgYSBzZXQgb2YgYXR0YWNoZWQgY3VzdG9tIGVsZW1lbnRzICovXG5leHBvcnQgY29uc3QgZm9ybUVsZW1lbnRzTWFwID0gbmV3IFdlYWtNYXA8SFRNTEZvcm1FbGVtZW50LCBTZXQ8SUN1c3RvbUVsZW1lbnQ+PigpO1xuXG4vKiogVXNlIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIGFuIGVsZW1lbnQncyB2YWx1ZSAqL1xuZXhwb3J0IGNvbnN0IHJlZlZhbHVlTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIGFueT4oKTtcblxuLyoqIEVsZW1lbnRzIHRoYXQgbmVlZCB0byBiZSB1cGdyYWRlZCBvbmNlIGFkZGVkIHRvIHRoZSBET00gKi9cbmV4cG9ydCBjb25zdCB1cGdyYWRlTWFwID0gbmV3IFdlYWtNYXA8RWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHM+KCk7XG5cbi8qKiBTYXZlIHJlZmVyZW5jZXMgdG8gc2hhZG93IHJvb3RzIGZvciBpbmNsdXNpb24gaW4gaW50ZXJuYWxzIGluc3RhbmNlICovXG5leHBvcnQgY29uc3Qgc2hhZG93Um9vdE1hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBTaGFkb3dSb290PigpO1xuXG4vKiogU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgaW50ZXJuYWxzJyB2YWxpZGF0aW9uIGFuY2hvciAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25BbmNob3JNYXAgPSBuZXcgV2Vha01hcDxJRWxlbWVudEludGVybmFscywgSFRNTEVsZW1lbnQ+KCk7XG5cbi8qKiBNYXAgRG9jdW1lbnRGcmFnbWVudHMgdG8gdGhlaXIgTXV0YXRpb25PYnNlcnZlcnMgc28gd2UgY2FuIGRpc2Nvbm5lY3Qgb25jZSBlbGVtZW50cyBhcmUgcmVtb3ZlZCAqL1xuZXhwb3J0IGNvbnN0IGRvY3VtZW50RnJhZ21lbnRNYXAgPSBuZXcgV2Vha01hcDxEb2N1bWVudEZyYWdtZW50LCBNdXRhdGlvbk9ic2VydmVyPigpO1xuXG4vKiogV2hldGhlciBjb25uZWN0ZWRDYWxsYmFjayBoYXMgYWxyZWFkeSBiZWVuIGNhbGxlZC4gKi9cbmV4cG9ydCBjb25zdCBjb25uZWN0ZWRDYWxsYmFja01hcCA9IG5ldyBXZWFrTWFwPElDdXN0b21FbGVtZW50LCBib29sZWFuPigpO1xuXG4vKiogU2F2ZSBhIHJlZmVyZW5jZSB0byB2YWxpZGl0eSBzdGF0ZSBmb3IgZWxlbWVudHMgdGhhdCBuZWVkIHRvIHVwZ3JhZGUgYWZ0ZXIgYmVpbmcgY29ubmVjdGVkICovXG5leHBvcnQgY29uc3QgdmFsaWRpdHlVcGdyYWRlTWFwID0gbmV3IFdlYWtNYXA8SUN1c3RvbUVsZW1lbnQsIElFbGVtZW50SW50ZXJuYWxzPigpO1xuIiwgImltcG9ydCB7IHVwZ3JhZGVNYXAgfSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHsgSUFvbSwgSUVsZW1lbnRJbnRlcm5hbHMgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuZXhwb3J0IGNvbnN0IGFvbTogSUFvbSA9IHtcbiAgYXJpYUF0b21pYzogJ2FyaWEtYXRvbWljJyxcbiAgYXJpYUF1dG9Db21wbGV0ZTogJ2FyaWEtYXV0b2NvbXBsZXRlJyxcbiAgYXJpYUJ1c3k6ICdhcmlhLWJ1c3knLFxuICBhcmlhQ2hlY2tlZDogJ2FyaWEtY2hlY2tlZCcsXG4gIGFyaWFDb2xDb3VudDogJ2FyaWEtY29sY291bnQnLFxuICBhcmlhQ29sSW5kZXg6ICdhcmlhLWNvbGluZGV4JyxcbiAgYXJpYUNvbEluZGV4VGV4dDogJ2FyaWEtY29saW5kZXh0ZXh0JyxcbiAgYXJpYUNvbFNwYW46ICdhcmlhLWNvbHNwYW4nLFxuICBhcmlhQ3VycmVudDogJ2FyaWEtY3VycmVudCcsXG4gIGFyaWFEaXNhYmxlZDogJ2FyaWEtZGlzYWJsZWQnLFxuICBhcmlhRXhwYW5kZWQ6ICdhcmlhLWV4cGFuZGVkJyxcbiAgYXJpYUhhc1BvcHVwOiAnYXJpYS1oYXNwb3B1cCcsXG4gIGFyaWFIaWRkZW46ICdhcmlhLWhpZGRlbicsXG4gIGFyaWFJbnZhbGlkOiAnYXJpYS1pbnZhbGlkJyxcbiAgYXJpYUtleVNob3J0Y3V0czogJ2FyaWEta2V5c2hvcnRjdXRzJyxcbiAgYXJpYUxhYmVsOiAnYXJpYS1sYWJlbCcsXG4gIGFyaWFMZXZlbDogJ2FyaWEtbGV2ZWwnLFxuICBhcmlhTGl2ZTogJ2FyaWEtbGl2ZScsXG4gIGFyaWFNb2RhbDogJ2FyaWEtbW9kYWwnLFxuICBhcmlhTXVsdGlMaW5lOiAnYXJpYS1tdWx0aWxpbmUnLFxuICBhcmlhTXVsdGlTZWxlY3RhYmxlOiAnYXJpYS1tdWx0aXNlbGVjdGFibGUnLFxuICBhcmlhT3JpZW50YXRpb246ICdhcmlhLW9yaWVudGF0aW9uJyxcbiAgYXJpYVBsYWNlaG9sZGVyOiAnYXJpYS1wbGFjZWhvbGRlcicsXG4gIGFyaWFQb3NJblNldDogJ2FyaWEtcG9zaW5zZXQnLFxuICBhcmlhUHJlc3NlZDogJ2FyaWEtcHJlc3NlZCcsXG4gIGFyaWFSZWFkT25seTogJ2FyaWEtcmVhZG9ubHknLFxuICBhcmlhUmVsZXZhbnQ6ICdhcmlhLXJlbGV2YW50JyxcbiAgYXJpYVJlcXVpcmVkOiAnYXJpYS1yZXF1aXJlZCcsXG4gIGFyaWFSb2xlRGVzY3JpcHRpb246ICdhcmlhLXJvbGVkZXNjcmlwdGlvbicsXG4gIGFyaWFSb3dDb3VudDogJ2FyaWEtcm93Y291bnQnLFxuICBhcmlhUm93SW5kZXg6ICdhcmlhLXJvd2luZGV4JyxcbiAgYXJpYVJvd0luZGV4VGV4dDogJ2FyaWEtcm93aW5kZXh0ZXh0JyxcbiAgYXJpYVJvd1NwYW46ICdhcmlhLXJvd3NwYW4nLFxuICBhcmlhU2VsZWN0ZWQ6ICdhcmlhLXNlbGVjdGVkJyxcbiAgYXJpYVNldFNpemU6ICdhcmlhLXNldHNpemUnLFxuICBhcmlhU29ydDogJ2FyaWEtc29ydCcsXG4gIGFyaWFWYWx1ZU1heDogJ2FyaWEtdmFsdWVtYXgnLFxuICBhcmlhVmFsdWVNaW46ICdhcmlhLXZhbHVlbWluJyxcbiAgYXJpYVZhbHVlTm93OiAnYXJpYS12YWx1ZW5vdycsXG4gIGFyaWFWYWx1ZVRleHQ6ICdhcmlhLXZhbHVldGV4dCcsXG4gIHJvbGU6ICdyb2xlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0QW9tID0gKHJlZjogRWxlbWVudCwgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscykgPT4ge1xuICBmb3IgKGxldCBrZXkgaW4gYW9tKSB7XG4gICAgaW50ZXJuYWxzW2tleV0gPSBudWxsO1xuXG4gICAgbGV0IGNsb3N1cmVWYWx1ZSA9IG51bGw7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGFvbVtrZXldO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnRlcm5hbHMsIGtleSwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gY2xvc3VyZVZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICBjbG9zdXJlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgIHJlZi5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVwZ3JhZGVNYXAuc2V0KHJlZiwgaW50ZXJuYWxzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufTtcbiIsICJpbXBvcnQge1xuICBpbnRlcm5hbHNNYXAsXG4gIHNoYWRvd0hvc3RzTWFwLFxuICB1cGdyYWRlTWFwLFxuICBoaWRkZW5JbnB1dE1hcCxcbiAgZG9jdW1lbnRGcmFnbWVudE1hcCxcbiAgZm9ybUVsZW1lbnRzTWFwLFxuICB2YWxpZGl0eVVwZ3JhZGVNYXAsXG4gIHJlZlZhbHVlTWFwLFxufSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHsgYW9tIH0gZnJvbSAnLi9hb20uanMnO1xuaW1wb3J0IHtcbiAgcmVtb3ZlSGlkZGVuSW5wdXRzLFxuICBpbml0Rm9ybSxcbiAgaW5pdExhYmVscyxcbiAgdXBncmFkZUludGVybmFscyxcbiAgc2V0RGlzYWJsZWQsXG4gIG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuZnVuY3Rpb24gaW5pdE5vZGUobm9kZTogSUN1c3RvbUVsZW1lbnQpOiB2b2lkIHtcbiAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChub2RlKTtcbiAgY29uc3QgeyBmb3JtIH0gPSBpbnRlcm5hbHM7XG4gIGluaXRGb3JtKG5vZGUsIGZvcm0sIGludGVybmFscyk7XG4gIGluaXRMYWJlbHMobm9kZSwgaW50ZXJuYWxzLmxhYmVscyk7XG59XG5cbi8qKlxuICogSWYgYSBmaWVsZHNldCdzIGRpc2FibGVkIHN0YXRlIGlzIHRvZ2dsZWQsIHRoZSBmb3JtRGlzYWJsZWRDYWxsYmFja1xuICogb24gYW55IGNoaWxkIGZvcm0tYXNzb2NpYXRlZCBjdXNvdG0gZWxlbWVudHMuXG4gKi9cbmV4cG9ydCBjb25zdCB3YWxrRmllbGRzZXQgPSAobm9kZTogSFRNTEZpZWxkU2V0RWxlbWVudCwgZmlyc3RSZW5kZXIgPSBmYWxzZSk6IHZvaWQgPT4ge1xuICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKG5vZGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCB7XG4gICAgYWNjZXB0Tm9kZShub2RlOiBJQ3VzdG9tRWxlbWVudCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gaW50ZXJuYWxzTWFwLmhhcyhub2RlKSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVA7XG4gICAgfSxcbiAgfSk7XG5cbiAgbGV0IGN1cnJlbnQgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBJQ3VzdG9tRWxlbWVudDtcbiAgLyoqXG4gICAqIFdlIGRvbid0IG5lZWQgdG8gY2FsbCBhbnl0aGluZyBvbiBmaXJzdCByZW5kZXIgaWZcbiAgICogdGhlIGVsZW1lbnQgaXNuJ3QgZGlzYWJsZWRcbiAgICovXG4gIGNvbnN0IGlzQ2FsbE5lY2Vzc2FyeSA9ICFmaXJzdFJlbmRlciB8fCBub2RlLmRpc2FibGVkO1xuXG4gIHdoaWxlIChjdXJyZW50KSB7XG4gICAgaWYgKGN1cnJlbnQuZm9ybURpc2FibGVkQ2FsbGJhY2sgJiYgaXNDYWxsTmVjZXNzYXJ5KSB7XG4gICAgICBzZXREaXNhYmxlZChjdXJyZW50LCBub2RlLmRpc2FibGVkKTtcbiAgICB9XG4gICAgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZzogTXV0YXRpb25PYnNlcnZlckluaXQgPSB7XG4gIGF0dHJpYnV0ZXM6IHRydWUsXG4gIGF0dHJpYnV0ZUZpbHRlcjogWydkaXNhYmxlZCcsICduYW1lJ10sXG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRPck5hbWVPYnNlcnZlciA9IG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKVxuICA/IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnNMaXN0OiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0IGFzIElDdXN0b21FbGVtZW50O1xuXG4gICAgICAgIC8qKiBNYW5hZ2UgY2hhbmdlcyB0byB0aGUgcmVmJ3MgZGlzYWJsZWQgc3RhdGUgKi9cbiAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0LmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICAgICAgICBzZXREaXNhYmxlZCh0YXJnZXQsIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmxvY2FsTmFtZSA9PT0gJ2ZpZWxkc2V0Jykge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXB1cnBvc2UgdGhlIG9ic2VydmVyIGZvciBmaWVsZHNldHMgd2hpY2ggbmVlZFxuICAgICAgICAgICAgICogdG8gYmUgd2Fsa2VkIHdoZW5ldmVyIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgaXMgc2V0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHdhbGtGaWVsZHNldCh0YXJnZXQgYXMgdW5rbm93biBhcyBIVE1MRmllbGRTZXRFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqIE1hbmFnZSBjaGFuZ2VzIHRvIHRoZSByZWYncyBuYW1lICovXG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnbmFtZScpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0LmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlZlZhbHVlTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgaW50ZXJuYWxzLnNldEZvcm1WYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgOiAoe30gYXMgTXV0YXRpb25PYnNlcnZlcik7XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlckNhbGxiYWNrKG11dGF0aW9uTGlzdDogTXV0YXRpb25SZWNvcmRbXSkge1xuICBtdXRhdGlvbkxpc3QuZm9yRWFjaCgobXV0YXRpb25SZWNvcmQpID0+IHtcbiAgICBjb25zdCB7IGFkZGVkTm9kZXMsIHJlbW92ZWROb2RlcyB9ID0gbXV0YXRpb25SZWNvcmQ7XG4gICAgY29uc3QgYWRkZWQgPSBBcnJheS5mcm9tKGFkZGVkTm9kZXMpIGFzIElDdXN0b21FbGVtZW50W107XG4gICAgY29uc3QgcmVtb3ZlZCA9IEFycmF5LmZyb20ocmVtb3ZlZE5vZGVzKSBhcyBJQ3VzdG9tRWxlbWVudFtdO1xuXG4gICAgYWRkZWQuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgLyoqIEFsbG93cyBmb3IgZHluYW1pYyBhZGRpdGlvbiBvZiBlbGVtZW50cyB0byBmb3JtcyAqL1xuICAgICAgaWYgKGludGVybmFsc01hcC5oYXMobm9kZSkgJiYgbm9kZS5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgICAgICBpbml0Tm9kZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgLyoqIFVwZ3JhZGUgdGhlIGFjY2Vzc2liaWxpdHkgaW5mb3JtYXRpb24gb24gYW55IHByZXZpb3VzbHkgY29ubmVjdGVkICovXG4gICAgICBpZiAodXBncmFkZU1hcC5oYXMobm9kZSkpIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxzID0gdXBncmFkZU1hcC5nZXQobm9kZSk7XG4gICAgICAgIGNvbnN0IGFvbUtleXMgPSBPYmplY3Qua2V5cyhhb20pO1xuICAgICAgICBhb21LZXlzXG4gICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBpbnRlcm5hbHNba2V5XSAhPT0gbnVsbClcbiAgICAgICAgICAuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhb21ba2V5XSwgaW50ZXJuYWxzW2tleV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB1cGdyYWRlTWFwLmRlbGV0ZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgLyoqIFVwZ3JhZGUgdGhlIHZhbGlkaXR5IHN0YXRlIHdoZW4gdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkICovXG4gICAgICBpZiAodmFsaWRpdHlVcGdyYWRlTWFwLmhhcyhub2RlKSkge1xuICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSB2YWxpZGl0eVVwZ3JhZGVNYXAuZ2V0KG5vZGUpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgaW50ZXJuYWxzLnZhbGlkaXR5LnZhbGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnaW50ZXJuYWxzLWludmFsaWQnLCAoIWludGVybmFscy52YWxpZGl0eS52YWxpZCkudG9TdHJpbmcoKSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCAoIWludGVybmFscy52YWxpZGl0eS52YWxpZCkudG9TdHJpbmcoKSk7XG4gICAgICAgIHZhbGlkaXR5VXBncmFkZU1hcC5kZWxldGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKiBJZiB0aGUgbm9kZSB0aGF0J3MgYWRkZWQgaXMgYSBmb3JtLCBjaGVjayB0aGUgdmFsaWRpdHkgKi9cbiAgICAgIGlmIChub2RlLmxvY2FsTmFtZSA9PT0gJ2Zvcm0nKSB7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQobm9kZSBhcyB1bmtub3duIGFzIEhUTUxGb3JtRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIobm9kZSwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIHtcbiAgICAgICAgICBhY2NlcHROb2RlKG5vZGU6IElDdXN0b21FbGVtZW50KTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiBpbnRlcm5hbHNNYXAuaGFzKG5vZGUpICYmICEoZm9ybUVsZW1lbnRzICYmIGZvcm1FbGVtZW50cy5oYXMobm9kZSkpXG4gICAgICAgICAgICAgID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUXG4gICAgICAgICAgICAgIDogTm9kZUZpbHRlci5GSUxURVJfU0tJUDtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgaW5pdE5vZGUoY3VycmVudCk7XG4gICAgICAgICAgY3VycmVudCA9IHdhbGtlci5uZXh0Tm9kZSgpIGFzIElDdXN0b21FbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmxvY2FsTmFtZSA9PT0gJ2ZpZWxkc2V0Jykge1xuICAgICAgICBkaXNhYmxlZE9yTmFtZU9ic2VydmVyLm9ic2VydmU/Lihub2RlLCBkaXNhYmxlZE9yTmFtZU9ic2VydmVyQ29uZmlnKTtcbiAgICAgICAgd2Fsa0ZpZWxkc2V0KG5vZGUgYXMgdW5rbm93biBhcyBIVE1MRmllbGRTZXRFbGVtZW50LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlbW92ZWQuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChub2RlKTtcbiAgICAgIC8qKiBDbGVhbiB1cCBhbnkgaGlkZGVuIGlucHV0IGVsZW1lbnRzIGxlZnQgYWZ0ZXIgYW4gZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQgKi9cbiAgICAgIGlmIChpbnRlcm5hbHMgJiYgaGlkZGVuSW5wdXRNYXAuZ2V0KGludGVybmFscykpIHtcbiAgICAgICAgcmVtb3ZlSGlkZGVuSW5wdXRzKGludGVybmFscyk7XG4gICAgICB9XG4gICAgICAvKiogRGlzY29ubmVjdCBhbnkgdW5uZWVkZWQgTXV0YXRpb25PYnNlcnZlcnMgKi9cbiAgICAgIGlmIChzaGFkb3dIb3N0c01hcC5oYXMobm9kZSkpIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBzaGFkb3dIb3N0c01hcC5nZXQobm9kZSk7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhpcyBvYnNlcnZlciBjYWxsYmFjayBpcyBqdXN0IGZvciBkb2N1bWVudCBmcmFnbWVudHNcbiAqIGl0IHdpbGwgdXBncmFkZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIGlmIHdhcyBhcHBlbmRlZFxuICogZnJvbSBhIGRvY3VtZW50IGZyYWdtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJhZ21lbnRPYnNlcnZlckNhbGxiYWNrKG11dGF0aW9uTGlzdDogTXV0YXRpb25SZWNvcmRbXSk6IHZvaWQge1xuICBtdXRhdGlvbkxpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICBjb25zdCB7IHJlbW92ZWROb2RlcyB9ID0gbXV0YXRpb247XG5cbiAgICByZW1vdmVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBkb2N1bWVudEZyYWdtZW50TWFwLmdldChtdXRhdGlvbi50YXJnZXQgYXMgRG9jdW1lbnRGcmFnbWVudCk7XG4gICAgICBpZiAoaW50ZXJuYWxzTWFwLmhhcyhub2RlIGFzIElDdXN0b21FbGVtZW50KSkge1xuICAgICAgICB1cGdyYWRlSW50ZXJuYWxzKG5vZGUgYXMgSUN1c3RvbUVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBEZWZlciB0aGUgdXBncmFkZSBvZiBub2RlcyB3aXRoaW5nIGEgRG9jdW1lbnRGcmFnbWVudFxuICogQHBhcmFtIGZyYWdtZW50IHtEb2N1bWVudEZyYWdtZW50fVxuICovXG5leHBvcnQgY29uc3QgZGVmZXJVcGdyYWRlID0gKGZyYWdtZW50OiBEb2N1bWVudEZyYWdtZW50KSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnJhZ21lbnRPYnNlcnZlckNhbGxiYWNrKTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZT8uKGZyYWdtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgZG9jdW1lbnRGcmFnbWVudE1hcC5zZXQoZnJhZ21lbnQsIG9ic2VydmVyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvYnNlcnZlciA9IG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKVxuICA/IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spXG4gIDogKHt9IGFzIE11dGF0aW9uT2JzZXJ2ZXIpO1xuZXhwb3J0IGNvbnN0IG9ic2VydmVyQ29uZmlnOiBNdXRhdGlvbk9ic2VydmVySW5pdCA9IHtcbiAgY2hpbGRMaXN0OiB0cnVlLFxuICBzdWJ0cmVlOiB0cnVlLFxufTtcbiIsICJpbXBvcnQgeyBoaWRkZW5JbnB1dE1hcCwgZm9ybXNNYXAsIGZvcm1FbGVtZW50c01hcCwgaW50ZXJuYWxzTWFwIH0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIsIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXJDb25maWcgfSBmcm9tICcuL211dGF0aW9uLW9ic2VydmVycy5qcyc7XG5pbXBvcnQgeyBJQ3VzdG9tRWxlbWVudCwgSUVsZW1lbnRJbnRlcm5hbHMsIExhYmVsc0xpc3QgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuLyoqXG4gKiBUb2dnbGUncyB0aGUgZGlzYWJsZWQgc3RhdGUgKGF0dHJpYnV0ZXMgJiBjYWxsYmFjaykgb24gdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSBjdXN0b20gZWxlbWVudCBpbnN0YW5jZVxuICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZCAtIFRoZSBkaXNhYmxlZCBzdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgc2V0RGlzYWJsZWQgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLWRpc2FibGVkJywgZGlzYWJsZWQpO1xuXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIHJlZi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICB9IGVsc2Uge1xuICAgIHJlZi5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKTtcbiAgfVxuXG4gIGlmIChyZWYuZm9ybURpc2FibGVkQ2FsbGJhY2spIHtcbiAgICByZWYuZm9ybURpc2FibGVkQ2FsbGJhY2suYXBwbHkocmVmLCBbZGlzYWJsZWRdKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBoaWRkZW4gaW5wdXRzIGZvciB0aGUgZ2l2ZW4gZWxlbWVudCBpbnRlcm5hbHMgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUhpZGRlbklucHV0cyA9IChpbnRlcm5hbHM6IElFbGVtZW50SW50ZXJuYWxzKTogdm9pZCA9PiB7XG4gIGNvbnN0IGhpZGRlbklucHV0cyA9IGhpZGRlbklucHV0TWFwLmdldChpbnRlcm5hbHMpO1xuICBoaWRkZW5JbnB1dHMuZm9yRWFjaCgoaGlkZGVuSW5wdXQpID0+IHtcbiAgICBoaWRkZW5JbnB1dC5yZW1vdmUoKTtcbiAgfSk7XG4gIGhpZGRlbklucHV0TWFwLnNldChpbnRlcm5hbHMsIFtdKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhpZGRlbiBpbnB1dCBmb3IgdGhlIGdpdmVuIHJlZlxuICogQHBhcmFtIHtJQ3VzdG9tRWxlbWVudH0gcmVmIC0gVGhlIGVsZW1lbnQgdG8gd2F0Y2hcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZSBmb3IgdGhlIHJlZlxuICogQHJldHVybiB7SFRNTElucHV0RWxlbWVudH0gVGhlIGhpZGRlbiBpbnB1dFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlSGlkZGVuSW5wdXQgPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIGludGVybmFsczogSUVsZW1lbnRJbnRlcm5hbHNcbik6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gJ2hpZGRlbic7XG4gIGlucHV0Lm5hbWUgPSByZWYuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gIHJlZi5hZnRlcihpbnB1dCk7XG4gIGhpZGRlbklucHV0TWFwLmdldChpbnRlcm5hbHMpLnB1c2goaW5wdXQpO1xuICByZXR1cm4gaW5wdXQ7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSByZWYgYnkgc2V0dGluZyB1cCBhbiBhdHRyaWJ1dGUgb2JzZXJ2ZSBvbiBpdFxuICogbG9va2luZyBmb3IgY2hhbmdlcyB0byBkaXNhYmxlZFxuICogQHBhcmFtIHtJQ3VzdG9tRWxlbWVudH0gcmVmIC0gVGhlIGVsZW1lbnQgdG8gd2F0Y2hcbiAqIEBwYXJhbSB7SUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFscyAtIFRoZSBlbGVtZW50IGludGVybmFscyBpbnN0YW5jZSBmb3IgdGhlIHJlZlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRSZWYgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscyk6IHZvaWQgPT4ge1xuICBoaWRkZW5JbnB1dE1hcC5zZXQoaW50ZXJuYWxzLCBbXSk7XG4gIGRpc2FibGVkT3JOYW1lT2JzZXJ2ZXIub2JzZXJ2ZT8uKHJlZiwgZGlzYWJsZWRPck5hbWVPYnNlcnZlckNvbmZpZyk7XG59O1xuXG4vKipcbiAqIFNldCB1cCBsYWJlbHMgZm9yIHRoZSByZWZcbiAqIEBwYXJhbSB7SUN1c3RvbUVsZW1lbnR9IHJlZiAtIFRoZSByZWYgdG8gYWRkIGxhYmVscyB0b1xuICogQHBhcmFtIHtMYWJlbHNMaXN0fSBsYWJlbHMgLSBBIGxpc3Qgb2YgdGhlIGxhYmVsc1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRMYWJlbHMgPSAocmVmOiBJQ3VzdG9tRWxlbWVudCwgbGFiZWxzOiBMYWJlbHNMaXN0KTogdm9pZCA9PiB7XG4gIGlmIChsYWJlbHMubGVuZ3RoKSB7XG4gICAgQXJyYXkuZnJvbShsYWJlbHMpLmZvckVhY2goKGxhYmVsKSA9PiBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlZi5jbGljay5iaW5kKHJlZikpKTtcbiAgICBsZXQgZmlyc3RMYWJlbElkID0gbGFiZWxzWzBdLmlkO1xuICAgIGlmICghbGFiZWxzWzBdLmlkKSB7XG4gICAgICBmaXJzdExhYmVsSWQgPSBgJHtsYWJlbHNbMF0uaHRtbEZvcn1fTGFiZWxgO1xuICAgICAgbGFiZWxzWzBdLmlkID0gZmlyc3RMYWJlbElkO1xuICAgIH1cbiAgICByZWYuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBmaXJzdExhYmVsSWQpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGludGVybmFscy12YWxpZCBhbmQgaW50ZXJuYWxzLWludmFsaWQgYXR0cmlidXRlc1xuICogYmFzZWQgb24gZm9ybSB2YWxpZGl0eS5cbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSAtIFRoZSB0YXJnZXQgZm9ybVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHNldEZvcm1WYWxpZGl0eSA9IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgY29uc3QgbmF0aXZlQ29udHJvbFZhbGlkaXR5ID0gQXJyYXkuZnJvbShmb3JtLmVsZW1lbnRzKVxuICAgIC5maWx0ZXIoXG4gICAgICAoZWxlbWVudDogRWxlbWVudCAmIHsgdmFsaWRpdHk6IFZhbGlkaXR5U3RhdGUgfSkgPT5cbiAgICAgICAgIWVsZW1lbnQudGFnTmFtZS5pbmNsdWRlcygnLScpICYmIGVsZW1lbnQudmFsaWRpdHlcbiAgICApXG4gICAgLm1hcCgoZWxlbWVudDogRWxlbWVudCAmIHsgdmFsaWRpdHk6IFZhbGlkaXR5U3RhdGUgfSkgPT4gZWxlbWVudC52YWxpZGl0eS52YWxpZCk7XG4gIGNvbnN0IHBvbHlmaWxsZWRFbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSkgfHwgW107XG4gIGNvbnN0IHBvbHlmaWxsZWRWYWxpZGl0eSA9IEFycmF5LmZyb20ocG9seWZpbGxlZEVsZW1lbnRzKVxuICAgIC5maWx0ZXIoKGNvbnRyb2wpID0+IGNvbnRyb2wuaXNDb25uZWN0ZWQpXG4gICAgLm1hcCgoY29udHJvbDogSUN1c3RvbUVsZW1lbnQpID0+IGludGVybmFsc01hcC5nZXQoY29udHJvbCkudmFsaWRpdHkudmFsaWQpO1xuICBjb25zdCBoYXNJbnZhbGlkID0gWy4uLm5hdGl2ZUNvbnRyb2xWYWxpZGl0eSwgLi4ucG9seWZpbGxlZFZhbGlkaXR5XS5pbmNsdWRlcyhmYWxzZSk7XG4gIGZvcm0udG9nZ2xlQXR0cmlidXRlKCdpbnRlcm5hbHMtaW52YWxpZCcsIGhhc0ludmFsaWQpO1xuICBmb3JtLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgIWhhc0ludmFsaWQpO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gaW5wdXQgY2FsbGJhY2suIFVwZGF0ZXMgdGhlIGZvcm0ncyB2YWxpZGl0eVxuICogYXR0cmlidXRlcyBvbiBpbnB1dC5cbiAqIEBwYXJhbSB7RXZlbnR9IC0gVGhlIGZvcm0gaW5wdXQgZXZlbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtSW5wdXRDYWxsYmFjayA9IChldmVudDogRXZlbnQpID0+IHtcbiAgc2V0Rm9ybVZhbGlkaXR5KGZpbmRQYXJlbnRGb3JtKGV2ZW50LnRhcmdldCkpO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gY2hhbmdlIGNhbGxiYWNrLiBVcGRhdGVzIHRoZSBmb3JtJ3MgdmFsaWRpdHlcbiAqIGF0dHJpYnV0ZXMgb24gY2hhbmdlLlxuICogQHBhcmFtIHtFdmVudH0gLSBUaGUgZm9ybSBjaGFuZ2UgZXZlbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtQ2hhbmdlQ2FsbGJhY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIHNldEZvcm1WYWxpZGl0eShmaW5kUGFyZW50Rm9ybShldmVudC50YXJnZXQpKTtcbn07XG5cbi8qKlxuICogVGhlIGdsb2JhbCBmb3JtIHN1Ym1pdCBjYWxsYmFjay4gV2UgbmVlZCB0byBjYW5jZWwgYW55IHN1Ym1pc3Npb25cbiAqIGlmIGEgbmVzdGVkIGludGVybmFscyBpcyBpbnZhbGlkLlxuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IC0gVGhlIGZvcm0gZWxlbWVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHdpcmVTdWJtaXRMb2dpYyA9IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgY29uc3QgU1VCTUlUX0JVVFRPTl9TRUxFQ1RPUiA9XG4gICAgJzppcyhidXR0b25bdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGJ1dHRvbjpub3QoW3R5cGVdKSk6bm90KFtkaXNhYmxlZF0pJztcbiAgbGV0IHN1Ym1pdEJ1dHRvblNlbGVjdG9yID0gYCR7U1VCTUlUX0JVVFRPTl9TRUxFQ1RPUn06bm90KFtmb3JtXSlgO1xuXG4gIGlmIChmb3JtLmlkKSB7XG4gICAgc3VibWl0QnV0dG9uU2VsZWN0b3IgKz0gYCwke1NVQk1JVF9CVVRUT05fU0VMRUNUT1J9W2Zvcm09JyR7Zm9ybS5pZH0nXWA7XG4gIH1cblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgaWYgKHRhcmdldC5jbG9zZXN0KHN1Ym1pdEJ1dHRvblNlbGVjdG9yKSkge1xuICAgICAgLy8gdmFsaWRhdGVcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChmb3JtKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGlzIGZvcm0gZG9lcyBub3QgdmFsaWRhdGUgdGhlbiB3ZSdyZSBkb25lXG4gICAgICAgKi9cbiAgICAgIGlmIChmb3JtLm5vVmFsaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvKiogSWYgdGhlIFNldCBoYXMgaXRlbXMsIGNvbnRpbnVlICovXG4gICAgICBpZiAoZWxlbWVudHMuc2l6ZSkge1xuICAgICAgICBjb25zdCBub2RlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpO1xuICAgICAgICAvKiogQ2hlY2sgdGhlIGludGVybmFscy5jaGVja1ZhbGlkaXR5KCkgb2YgYWxsIG5vZGVzICovXG4gICAgICAgIGNvbnN0IHZhbGlkaXR5TGlzdCA9IG5vZGVzLnJldmVyc2UoKS5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbnRlcm5hbHMgPSBpbnRlcm5hbHNNYXAuZ2V0KG5vZGUpO1xuICAgICAgICAgIHJldHVybiBpbnRlcm5hbHMucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqIElmIGFueSBub2RlIGlzIGZhbHNlLCBzdG9wIHRoZSBldmVudCAqL1xuICAgICAgICBpZiAodmFsaWRpdHlMaXN0LmluY2x1ZGVzKGZhbHNlKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBUaGUgZ2xvYmFsIGZvcm0gcmVzZXQgY2FsbGJhY2suIFRoaXMgd2lsbCBsb29wIG92ZXIgYWRkZWRcbiAqIGlucHV0cyBhbmQgY2FsbCBmb3JtUmVzZXRDYWxsYmFjayBpZiBhcHBsaWNhYmxlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZm9ybVJlc2V0Q2FsbGJhY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIC8qKiBHZXQgdGhlIFNldCBvZiBlbGVtZW50cyBhdHRhY2hlZCB0byB0aGlzIGZvcm0gKi9cbiAgY29uc3QgZWxlbWVudHMgPSBmb3JtRWxlbWVudHNNYXAuZ2V0KGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQpO1xuXG4gIC8qKiBTb21lIGZvcm1zIHdvbid0IGNvbnRhaW4gZm9ybSBhc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50cyAqL1xuICBpZiAoZWxlbWVudHMgJiYgZWxlbWVudHMuc2l6ZSkge1xuICAgIC8qKiBMb29wIG92ZXIgdGhlIGVsZW1lbnRzIGFuZCBjYWxsIGZvcm1SZXNldENhbGxiYWNrIGlmIGFwcGxpY2FibGUgKi9cbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoKGVsZW1lbnQuY29uc3RydWN0b3IgYXMgYW55KS5mb3JtQXNzb2NpYXRlZCAmJiBlbGVtZW50LmZvcm1SZXNldENhbGxiYWNrKSB7XG4gICAgICAgIGVsZW1lbnQuZm9ybVJlc2V0Q2FsbGJhY2suYXBwbHkoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgZm9ybS4gV2Ugd2lsbCBuZWVkIHRvIGFkZCBzdWJtaXQgYW5kIHJlc2V0IGxpc3RlbmVyc1xuICogaWYgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0LiBJZiB0aGV5IGRvLCBqdXN0IGFkZCB0aGUgbmV3IHJlZiB0byB0aGUgZm9ybS5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZiAtIFRoZSBlbGVtZW50IHJlZiB0aGF0IGluY2x1ZGVzIGludGVybmFsc1xuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm0gLSBUaGUgZm9ybSB0aGUgcmVmIGJlbG9uZ3MgdG9cbiAqIEBwYXJhbSB7RWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzIC0gVGhlIGludGVybmFscyBmb3IgcmVmXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgaW5pdEZvcm0gPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIGZvcm06IEhUTUxGb3JtRWxlbWVudCxcbiAgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFsc1xuKSA9PiB7XG4gIGlmIChmb3JtKSB7XG4gICAgLyoqIFRoaXMgd2lsbCBiZSBhIFdlYWtNYXA8SFRNTEZvcm1FbGVtZW50LCBTZXQ8SFRNTEVsZW1lbnQ+ICovXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzID0gZm9ybUVsZW1lbnRzTWFwLmdldChmb3JtKTtcblxuICAgIGlmIChmb3JtRWxlbWVudHMpIHtcbiAgICAgIC8qKiBJZiBmb3JtRWxlbWVudHMgZXhpc3RzLCBhZGQgdG8gaXQgKi9cbiAgICAgIGZvcm1FbGVtZW50cy5hZGQocmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoqIElmIGZvcm1FbGVtZW50cyBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgaXQgYW5kIGFkZCB0byBpdCAqL1xuICAgICAgY29uc3QgaW5pdFNldCA9IG5ldyBTZXQ8SUN1c3RvbUVsZW1lbnQ+KCk7XG4gICAgICBpbml0U2V0LmFkZChyZWYpO1xuICAgICAgZm9ybUVsZW1lbnRzTWFwLnNldChmb3JtLCBpbml0U2V0KTtcblxuICAgICAgLyoqIEFkZCBsaXN0ZW5lcnMgdG8gZW11bGF0ZSB2YWxpZGF0aW9uIGFuZCByZXNldCBiZWhhdmlvciAqL1xuICAgICAgd2lyZVN1Ym1pdExvZ2ljKGZvcm0pO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIGZvcm1SZXNldENhbGxiYWNrKTtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmb3JtSW5wdXRDYWxsYmFjayk7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZvcm1DaGFuZ2VDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgZm9ybXNNYXAuc2V0KGZvcm0sIHsgcmVmLCBpbnRlcm5hbHMgfSk7XG5cbiAgICAvKiogQ2FsbCBmb3JtQXNzb2NpYXRlZENhbGxiYWNrIGlmIGFwcGxpY2FibGUgKi9cbiAgICBpZiAocmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddICYmIHJlZi5mb3JtQXNzb2NpYXRlZENhbGxiYWNrKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVmLmZvcm1Bc3NvY2lhdGVkQ2FsbGJhY2suYXBwbHkocmVmLCBbZm9ybV0pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIHNldEZvcm1WYWxpZGl0eShmb3JtKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSBsb29rIGZvciBhbiBlbGVtZW50J3MgcGFyZW50IGZvcm1cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbSAtIFRoZSBlbGVtZW50IHRvIGxvb2sgZm9yIGEgcGFyZW50IGZvcm1cbiAqIEByZXR1cm4ge0hUTUxGb3JtRWxlbWVudHxudWxsfSAtIFRoZSBwYXJlbnQgZm9ybSwgaWYgb25lIGV4aXN0c1xuICovXG5leHBvcnQgY29uc3QgZmluZFBhcmVudEZvcm0gPSAoZWxlbSkgPT4ge1xuICBsZXQgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuICBpZiAocGFyZW50ICYmIHBhcmVudC50YWdOYW1lICE9PSAnRk9STScpIHtcbiAgICBwYXJlbnQgPSBmaW5kUGFyZW50Rm9ybShwYXJlbnQpO1xuICB9XG4gIHJldHVybiBwYXJlbnQ7XG59O1xuXG4vKipcbiAqIFRocm93IGFuIGVycm9yIGlmIHRoZSBlbGVtZW50IHJlZiBpcyBub3QgZm9ybSBhc3NvY2lhdGVkXG4gKiBAcGFyYW0gcmVmIHtJQ3VzdG9tRWxlbWVudH0gLSBUaGUgZWxlbWVudCB0byBjaGVjayBpZiBpdCBpcyBmb3JtIGFzc29jaWF0ZWRcbiAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IC0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdGhyb3dcbiAqIEBwYXJhbSBFcnJvclR5cGUge2FueX0gLSBUaGUgZXJyb3IgdHlwZSB0byB0aHJvdywgZGVmYXVsdHMgdG8gRE9NRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQgPSAoXG4gIHJlZjogSUN1c3RvbUVsZW1lbnQsXG4gIG1lc3NhZ2U6IHN0cmluZyxcbiAgRXJyb3JUeXBlOiBhbnkgPSBET01FeGNlcHRpb25cbik6IHZvaWQgPT4ge1xuICBpZiAoIXJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgIHRocm93IG5ldyBFcnJvclR5cGUobWVzc2FnZSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIGZvciBlYWNoIEhUTUxGb3JtRWxlbWVudC5jaGVja1ZhbGlkaXR5fHJlcG9ydFZhbGlkaXR5XG4gKiB3aWxsIGxvb3Agb3ZlciBhIGZvcm0ncyBhZGRlZCBjb21wb25lbnRzIGFuZCBjYWxsIHRoZSByZXNwZWN0aXZlXG4gKiBtZXRob2QgbW9kaWZ5aW5nIHRoZSBkZWZhdWx0IHJldHVybiB2YWx1ZSBpZiBuZWVkZWRcbiAqIEBwYXJhbSBmb3JtIHtIVE1MRm9ybUVsZW1lbnR9IC0gVGhlIGZvcm0gZWxlbWVudCB0byBydW4gdGhlIG1ldGhvZCBvblxuICogQHBhcmFtIHJldHVyblZhbHVlIHtib29sZWFufSAtIFRoZSBpbml0aWFsIHJlc3VsdCBvZiB0aGUgb3JpZ2luYWwgbWV0aG9kXG4gKiBAcGFyYW0gbWV0aG9kIHsnY2hlY2tWYWxpZGl0eSd8J3JlcG9ydFZhbGlkaXR5J30gLSBUaGUgb3JpZ2luYWwgbWV0aG9kXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVGhlIGZvcm0ncyB2YWxpZGl0eSBzdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgb3ZlcnJpZGVGb3JtTWV0aG9kID0gKFxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnQsXG4gIHJldHVyblZhbHVlOiBib29sZWFuLFxuICBtZXRob2Q6ICdjaGVja1ZhbGlkaXR5JyB8ICdyZXBvcnRWYWxpZGl0eSdcbik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGZvcm1FbGVtZW50c01hcC5nZXQoZm9ybSk7XG5cbiAgLyoqIFNvbWUgZm9ybXMgd29uJ3QgY29udGFpbiBmb3JtIGFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnRzICovXG4gIGlmIChlbGVtZW50cyAmJiBlbGVtZW50cy5zaXplKSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gaW50ZXJuYWxzTWFwLmdldChlbGVtZW50KTtcbiAgICAgIGNvbnN0IHZhbGlkID0gaW50ZXJuYWxzW21ldGhvZF0oKTtcbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xuXG4vKipcbiAqIFdpbGwgdXBncmFkZSBhbiBFbGVtZW50SW50ZXJuYWxzIGluc3RhbmNlIGJ5IGluaXRpYWxpemluZyB0aGVcbiAqIGluc3RhbmNlJ3MgZm9ybSBhbmQgbGFiZWxzLiBUaGlzIGlzIGNhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGlzXG4gKiBlaXRoZXIgY29uc3RydWN0ZWQgb3IgYXBwZW5kZWQgZnJvbSBhIERvY3VtZW50RnJhZ21lbnRcbiAqIEBwYXJhbSByZWYge0lDdXN0b21FbGVtZW50fSAtIFRoZSBjdXN0b20gZWxlbWVudCB0byB1cGdyYWRlXG4gKi9cbmV4cG9ydCBjb25zdCB1cGdyYWRlSW50ZXJuYWxzID0gKHJlZjogSUN1c3RvbUVsZW1lbnQpID0+IHtcbiAgaWYgKHJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSkge1xuICAgIGNvbnN0IGludGVybmFscyA9IGludGVybmFsc01hcC5nZXQocmVmKTtcbiAgICBjb25zdCB7IGxhYmVscywgZm9ybSB9ID0gaW50ZXJuYWxzO1xuICAgIGluaXRMYWJlbHMocmVmLCBsYWJlbHMpO1xuICAgIGluaXRGb3JtKHJlZiwgZm9ybSwgaW50ZXJuYWxzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayB0byBzZWUgaWYgTXV0YXRpb25PYnNlcnZlciBleGlzdHMgaW4gdGhlIGN1cnJlbnRcbiAqIGV4ZWN1dGlvbiBjb250ZXh0LiBXaWxsIGxpa2VseSByZXR1cm4gZmFsc2Ugb24gdGhlIHNlcnZlclxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdXRhdGlvbk9ic2VydmVyRXhpc3RzKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xufVxuIiwgImltcG9ydCB7IHNldEZvcm1WYWxpZGl0eSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKiogRW11bGF0ZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgVmFsaWRpdHlTdGF0ZSBvYmplY3QgKi9cbmV4cG9ydCBjbGFzcyBWYWxpZGl0eVN0YXRlIGltcGxlbWVudHMgZ2xvYmFsVGhpcy5WYWxpZGl0eVN0YXRlIHtcbiAgYmFkSW5wdXQgPSBmYWxzZTtcbiAgY3VzdG9tRXJyb3IgPSBmYWxzZTtcbiAgcGF0dGVybk1pc21hdGNoID0gZmFsc2U7XG4gIHJhbmdlT3ZlcmZsb3cgPSBmYWxzZTtcbiAgcmFuZ2VVbmRlcmZsb3cgPSBmYWxzZTtcbiAgc3RlcE1pc21hdGNoID0gZmFsc2U7XG4gIHRvb0xvbmcgPSBmYWxzZTtcbiAgdG9vU2hvcnQgPSBmYWxzZTtcbiAgdHlwZU1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkID0gdHJ1ZTtcbiAgdmFsdWVNaXNzaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgT2JqZWN0LnNlYWwodGhpcyk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldCBhIFZhbGlkaXR5U3RhdGUgb2JqZWN0IGJhY2sgdG8gdmFsaWRcbiAqIEBwYXJhbSB7VmFsaWRpdHlTdGF0ZX0gdmFsaWRpdHlPYmplY3QgLSBUaGUgb2JqZWN0IHRvIG1vZGlmeVxuICogQHJldHVybiB7VmFsaWRpdHlTdGF0ZX0gLSBUaGUgbW9kaWZpZWQgVmFsaWRpdHlTdGF0ZU9iamVjdFxuICovXG5leHBvcnQgY29uc3Qgc2V0VmFsaWQgPSAodmFsaWRpdHlPYmplY3Q6IFZhbGlkaXR5U3RhdGUpOiBWYWxpZGl0eVN0YXRlID0+IHtcbiAgdmFsaWRpdHlPYmplY3QuYmFkSW5wdXQgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QuY3VzdG9tRXJyb3IgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QucGF0dGVybk1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnJhbmdlT3ZlcmZsb3cgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QucmFuZ2VVbmRlcmZsb3cgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3Quc3RlcE1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnRvb0xvbmcgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QudG9vU2hvcnQgPSBmYWxzZTtcbiAgdmFsaWRpdHlPYmplY3QudHlwZU1pc21hdGNoID0gZmFsc2U7XG4gIHZhbGlkaXR5T2JqZWN0LnZhbGlkID0gdHJ1ZTtcbiAgdmFsaWRpdHlPYmplY3QudmFsdWVNaXNzaW5nID0gZmFsc2U7XG4gIHJldHVybiB2YWxpZGl0eU9iamVjdDtcbn07XG5cbi8qKlxuICogUmVjb25jaWxlIGEgVmFsaWRpdHlTdGF0ZSBvYmplY3Qgd2l0aCBhIG5ldyBzdGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7VmFsaWRpdHlTdGF0ZX0gLSBUaGUgYmFzZSBvYmplY3QgdG8gcmVjb25jaWxlIHdpdGggbmV3IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gLSBBIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3QgdG8gb3ZlcnJpZGUgdGhlIG9yaWdpbmFsXG4gKiBAcmV0dXJuIHtWYWxpZGl0eVN0YXRlfSAtIFRoZSB1cGRhdGVkIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCByZWNvbmNpbGVWYWxpZGl0eSA9IChcbiAgdmFsaWRpdHlPYmplY3Q6IFZhbGlkaXR5U3RhdGUsXG4gIG5ld1N0YXRlOiBQYXJ0aWFsPFZhbGlkaXR5U3RhdGU+LFxuICBmb3JtOiBIVE1MRm9ybUVsZW1lbnRcbik6IFZhbGlkaXR5U3RhdGUgPT4ge1xuICB2YWxpZGl0eU9iamVjdC52YWxpZCA9IGlzVmFsaWQobmV3U3RhdGUpO1xuICBPYmplY3Qua2V5cyhuZXdTdGF0ZSkuZm9yRWFjaCgoa2V5KSA9PiAodmFsaWRpdHlPYmplY3Rba2V5XSA9IG5ld1N0YXRlW2tleV0pKTtcbiAgaWYgKGZvcm0pIHtcbiAgICBzZXRGb3JtVmFsaWRpdHkoZm9ybSk7XG4gIH1cbiAgcmV0dXJuIHZhbGlkaXR5T2JqZWN0O1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3Qgc2hvdWxkIGJlIHZhbGlkXG4gKiBAcGFyYW0ge09iamVjdH0gLSBBIHBhcnRpYWwgVmFsaWRpdHlTdGF0ZSBvYmplY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IC0gU2hvdWxkIHRoZSBuZXcgb2JqZWN0IGJlIHZhbGlkXG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkID0gKHZhbGlkaXR5U3RhdGU6IFBhcnRpYWw8VmFsaWRpdHlTdGF0ZT4pOiBib29sZWFuID0+IHtcbiAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgZm9yIChsZXQga2V5IGluIHZhbGlkaXR5U3RhdGUpIHtcbiAgICBpZiAoa2V5ICE9PSAndmFsaWQnICYmIHZhbGlkaXR5U3RhdGVba2V5XSAhPT0gZmFsc2UpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWxpZDtcbn07XG4iLCAiaW1wb3J0IHsgSUN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzLmpzJztcblxuLyoqIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIHJlZiBmb3IgdGVoIEN1c3RvbVN0YXRlU2V0ICovXG5jb25zdCBjdXN0b21TdGF0ZU1hcCA9IG5ldyBXZWFrTWFwPEN1c3RvbVN0YXRlU2V0LCBJQ3VzdG9tRWxlbWVudD4oKTtcblxuZnVuY3Rpb24gYWRkU3RhdGUocmVmOiBJQ3VzdG9tRWxlbWVudCwgc3RhdGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgcmVmLnRvZ2dsZUF0dHJpYnV0ZShzdGF0ZU5hbWUsIHRydWUpO1xuICBpZiAocmVmLnBhcnQpIHtcbiAgICByZWYucGFydC5hZGQoc3RhdGVOYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDdXN0b21TdGF0ZSA9IGAtLSR7c3RyaW5nfWA7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21TdGF0ZVNldCBleHRlbmRzIFNldDxDdXN0b21TdGF0ZT4ge1xuICBzdGF0aWMgZ2V0IGlzUG9seWZpbGxlZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJlZjogSUN1c3RvbUVsZW1lbnQpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghcmVmIHx8ICFyZWYudGFnTmFtZSB8fCByZWYudGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbGxlZ2FsIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuXG4gICAgY3VzdG9tU3RhdGVNYXAuc2V0KHRoaXMsIHJlZik7XG4gIH1cblxuICBhZGQoc3RhdGU6IEN1c3RvbVN0YXRlKSB7XG4gICAgaWYgKCEvXi0tLy50ZXN0KHN0YXRlKSB8fCB0eXBlb2Ygc3RhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ2FkZCcgb24gJ0N1c3RvbVN0YXRlU2V0JzogVGhlIHNwZWNpZmllZCB2YWx1ZSAke3N0YXRlfSBtdXN0IHN0YXJ0IHdpdGggJy0tJy5gXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5hZGQoc3RhdGUpO1xuICAgIGNvbnN0IHJlZiA9IGN1c3RvbVN0YXRlTWFwLmdldCh0aGlzKTtcbiAgICBjb25zdCBzdGF0ZU5hbWUgPSBgc3RhdGUke3N0YXRlfWA7XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IGFkZCB0aGUgc3RhdGUgaW1tZWRpYXRlbHkgaWYgdGhlIHJlZiBpcyBjb25uZWN0ZWQgdG8gdGhlIERPTTtcbiAgICAgKiBvdGhlcndpc2UsIHdhaXQgYSB0aWNrIGJlY2F1c2UgdGhlIGVsZW1lbnQgaXMgbGlrZWx5IGJlaW5nIGNvbnN0cnVjdGVkXG4gICAgICogYnkgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBhbmQgd291bGQgdGhyb3cgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlmIChyZWYuaXNDb25uZWN0ZWQpIHtcbiAgICAgIGFkZFN0YXRlKHJlZiwgc3RhdGVOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFkZFN0YXRlKHJlZiwgc3RhdGVOYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBmb3IgKGxldCBbZW50cnldIG9mIHRoaXMuZW50cmllcygpKSB7XG4gICAgICB0aGlzLmRlbGV0ZShlbnRyeSk7XG4gICAgfVxuICAgIHN1cGVyLmNsZWFyKCk7XG4gIH1cblxuICBkZWxldGUoc3RhdGU6IEN1c3RvbVN0YXRlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuZGVsZXRlKHN0YXRlKTtcbiAgICBjb25zdCByZWYgPSBjdXN0b21TdGF0ZU1hcC5nZXQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHRvZ2dsZSB0aGUgc3RhdGUvYXR0ciBpbW1lZGlhdGVseSBpZiB0aGUgcmVmIGlzIGNvbm5lY3RlZCB0byB0aGUgRE9NO1xuICAgICAqIG90aGVyd2lzZSwgd2FpdCBhIHRpY2sgYmVjYXVzZSB0aGUgZWxlbWVudCBpcyBsaWtlbHkgYmVpbmcgY29uc3RydWN0ZWRcbiAgICAgKiBieSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGFuZCB3b3VsZCB0aHJvdyBvdGhlcndpc2UuXG4gICAgICovXG4gICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZShgc3RhdGUke3N0YXRlfWAsIGZhbHNlKTtcbiAgICAgIGlmIChyZWYucGFydCkge1xuICAgICAgICByZWYucGFydC5yZW1vdmUoYHN0YXRlJHtzdGF0ZX1gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlZi50b2dnbGVBdHRyaWJ1dGUoYHN0YXRlJHtzdGF0ZX1gLCBmYWxzZSk7XG4gICAgICAgIGlmIChyZWYucGFydCkge1xuICAgICAgICAgIHJlZi5wYXJ0LnJlbW92ZShgc3RhdGUke3N0YXRlfWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCAiZXhwb3J0IGNsYXNzIEhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uIGltcGxlbWVudHMgZ2xvYmFsVGhpcy5IVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbiB7XG4gIHJlYWRvbmx5ICNlbGVtZW50cztcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgIHRoaXMuI2VsZW1lbnRzID0gZWxlbWVudHM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgICB0aGlzW2ldID0gZWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgIHRoaXNbZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKV0gPSBlbGVtZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBbaW5kZXg6IG51bWJlcl06IEVsZW1lbnQ7XG5cbiAgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLiNlbGVtZW50cy5sZW5ndGg7XG4gIH1cblxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gdGhpcy4jZWxlbWVudHNbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICB9XG5cbiAgaXRlbShpKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXNbaV0gPT0gbnVsbCA/IG51bGwgOiB0aGlzW2ldO1xuICB9XG5cbiAgbmFtZWRJdGVtKG5hbWUpOiBFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpc1tuYW1lXSA9PSBudWxsID8gbnVsbCA6IHRoaXNbbmFtZV07XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbiB9IGZyb20gJy4vSFRNTEZvcm1Db250cm9sc0NvbGxlY3Rpb24uanMnO1xuaW1wb3J0IHsgZm9ybUVsZW1lbnRzTWFwIH0gZnJvbSAnLi9tYXBzLmpzJztcbmltcG9ydCB7IG92ZXJyaWRlRm9ybU1ldGhvZCB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFBhdGNoIHRoZSBIVE1MRWxlbWVudCBwcm90b3R5cGVcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHBhdGNoZXMgY2hlY2tWYWxpZGl0eSwgcmVwb3J0VmFsaWRpdHkgYW5kIGVsZW1lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEZvcm1Qcm90b3R5cGUoKTogdm9pZCB7XG4gIGNvbnN0IGNoZWNrVmFsaWRpdHkgPSBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmNoZWNrVmFsaWRpdHk7XG4gIEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUuY2hlY2tWYWxpZGl0eSA9IGNoZWNrVmFsaWRpdHlPdmVycmlkZTtcblxuICBjb25zdCByZXBvcnRWYWxpZGl0eSA9IEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUucmVwb3J0VmFsaWRpdHk7XG4gIEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUucmVwb3J0VmFsaWRpdHkgPSByZXBvcnRWYWxpZGl0eU92ZXJyaWRlO1xuXG4gIGZ1bmN0aW9uIGNoZWNrVmFsaWRpdHlPdmVycmlkZSguLi5hcmdzKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldHVyblZhbHVlID0gY2hlY2tWYWxpZGl0eS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICByZXR1cm4gb3ZlcnJpZGVGb3JtTWV0aG9kKHRoaXMsIHJldHVyblZhbHVlLCAnY2hlY2tWYWxpZGl0eScpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwb3J0VmFsaWRpdHlPdmVycmlkZSguLi5hcmdzKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldHVyblZhbHVlID0gcmVwb3J0VmFsaWRpdHkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgcmV0dXJuIG92ZXJyaWRlRm9ybU1ldGhvZCh0aGlzLCByZXR1cm5WYWx1ZSwgJ3JlcG9ydFZhbGlkaXR5Jyk7XG4gIH1cblxuICBjb25zdCB7IGdldCB9ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLCAnZWxlbWVudHMnKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUsICdlbGVtZW50cycsIHtcbiAgICBnZXQoLi4uYXJncykge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBnZXQuY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgICAgIGNvbnN0IHBvbHlmaWxsZWRFbGVtZW50cyA9IEFycmF5LmZyb20oZm9ybUVsZW1lbnRzTWFwLmdldCh0aGlzKSB8fCBbXSk7XG5cbiAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBwb2x5ZmlsbGVkIGVsZW1lbnRzLCByZXR1cm4gdGhlIG5hdGl2ZSBlbGVtZW50cyBjb2xsZWN0aW9uXG4gICAgICBpZiAocG9seWZpbGxlZEVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgICB9XG5cbiAgICAgIC8vIE1lcmdlIHRoZSBuYXRpdmUgZWxlbWVudHMgd2l0aCB0aGUgcG9seWZpbGxlZCBlbGVtZW50c1xuICAgICAgLy8gYW5kIG9yZGVyIHRoZW0gYnkgdGhlaXIgcG9zaXRpb24gaW4gdGhlIERPTVxuICAgICAgY29uc3Qgb3JkZXJlZEVsZW1lbnRzID0gQXJyYXkuZnJvbShlbGVtZW50cylcbiAgICAgICAgLmNvbmNhdChwb2x5ZmlsbGVkRWxlbWVudHMpXG4gICAgICAgIC5zb3J0KChhOiBFbGVtZW50LCBiOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpICYgMiA/IDEgOiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmV3IEhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uKG9yZGVyZWRFbGVtZW50cyk7XG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgY29ubmVjdGVkQ2FsbGJhY2tNYXAsXG4gIGludGVybmFsc01hcCxcbiAgcmVmTWFwLFxuICByZWZWYWx1ZU1hcCxcbiAgc2hhZG93SG9zdHNNYXAsXG4gIHNoYWRvd1Jvb3RNYXAsXG4gIHZhbGlkYXRpb25BbmNob3JNYXAsXG4gIHZhbGlkaXR5TWFwLFxuICB2YWxpZGF0aW9uTWVzc2FnZU1hcCxcbiAgdmFsaWRpdHlVcGdyYWRlTWFwLFxufSBmcm9tICcuL21hcHMuanMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlSGlkZGVuSW5wdXQsXG4gIGZpbmRQYXJlbnRGb3JtLFxuICBpbml0UmVmLFxuICBtdXRhdGlvbk9ic2VydmVyRXhpc3RzLFxuICByZW1vdmVIaWRkZW5JbnB1dHMsXG4gIHNldERpc2FibGVkLFxuICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQsXG4gIHVwZ3JhZGVJbnRlcm5hbHMsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgaW5pdEFvbSB9IGZyb20gJy4vYW9tLmpzJztcbmltcG9ydCB7IFZhbGlkaXR5U3RhdGUsIHJlY29uY2lsZVZhbGlkaXR5LCBzZXRWYWxpZCB9IGZyb20gJy4vVmFsaWRpdHlTdGF0ZS5qcyc7XG5pbXBvcnQgeyBkZWZlclVwZ3JhZGUsIG9ic2VydmVyQ2FsbGJhY2ssIG9ic2VydmVyQ29uZmlnIH0gZnJvbSAnLi9tdXRhdGlvbi1vYnNlcnZlcnMuanMnO1xuaW1wb3J0IHsgSUVsZW1lbnRJbnRlcm5hbHMsIElDdXN0b21FbGVtZW50LCBMYWJlbHNMaXN0IH0gZnJvbSAnLi90eXBlcy5qcyc7XG5pbXBvcnQgeyBDdXN0b21TdGF0ZVNldCB9IGZyb20gJy4vQ3VzdG9tU3RhdGVTZXQuanMnO1xuaW1wb3J0IHsgcGF0Y2hGb3JtUHJvdG90eXBlIH0gZnJvbSAnLi9wYXRjaC1mb3JtLXByb3RvdHlwZS5qcyc7XG5pbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gJ2xpdC1odG1sL2lzLXNlcnZlci5qcyc7XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50SW50ZXJuYWxzIGltcGxlbWVudHMgSUVsZW1lbnRJbnRlcm5hbHMge1xuICBhcmlhQXRvbWljOiBzdHJpbmc7XG4gIGFyaWFBdXRvQ29tcGxldGU6IHN0cmluZztcbiAgYXJpYUJ1c3k6IHN0cmluZztcbiAgYXJpYUNoZWNrZWQ6IHN0cmluZztcbiAgYXJpYUNvbENvdW50OiBzdHJpbmc7XG4gIGFyaWFDb2xJbmRleDogc3RyaW5nO1xuICBhcmlhQ29sSW5kZXhUZXh0OiBzdHJpbmc7XG4gIGFyaWFDb2xTcGFuOiBzdHJpbmc7XG4gIGFyaWFDdXJyZW50OiBzdHJpbmc7XG4gIGFyaWFEaXNhYmxlZDogc3RyaW5nO1xuICBhcmlhRXhwYW5kZWQ6IHN0cmluZztcbiAgYXJpYUhhc1BvcHVwOiBzdHJpbmc7XG4gIGFyaWFIaWRkZW46IHN0cmluZztcbiAgYXJpYUludmFsaWQ6IHN0cmluZztcbiAgYXJpYUtleVNob3J0Y3V0czogc3RyaW5nO1xuICBhcmlhTGFiZWw6IHN0cmluZztcbiAgYXJpYUxldmVsOiBzdHJpbmc7XG4gIGFyaWFMaXZlOiBzdHJpbmc7XG4gIGFyaWFNb2RhbDogc3RyaW5nO1xuICBhcmlhTXVsdGlMaW5lOiBzdHJpbmc7XG4gIGFyaWFNdWx0aVNlbGVjdGFibGU6IHN0cmluZztcbiAgYXJpYU9yaWVudGF0aW9uOiBzdHJpbmc7XG4gIGFyaWFQbGFjZWhvbGRlcjogc3RyaW5nO1xuICBhcmlhUG9zSW5TZXQ6IHN0cmluZztcbiAgYXJpYVByZXNzZWQ6IHN0cmluZztcbiAgYXJpYVJlYWRPbmx5OiBzdHJpbmc7XG4gIGFyaWFSZWxldmFudDogc3RyaW5nO1xuICBhcmlhUmVxdWlyZWQ6IHN0cmluZztcbiAgYXJpYVJvbGVEZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhcmlhUm93Q291bnQ6IHN0cmluZztcbiAgYXJpYVJvd0luZGV4OiBzdHJpbmc7XG4gIGFyaWFSb3dJbmRleFRleHQ6IHN0cmluZztcbiAgYXJpYVJvd1NwYW46IHN0cmluZztcbiAgYXJpYVNlbGVjdGVkOiBzdHJpbmc7XG4gIGFyaWFTZXRTaXplOiBzdHJpbmc7XG4gIGFyaWFTb3J0OiBzdHJpbmc7XG4gIGFyaWFWYWx1ZU1heDogc3RyaW5nO1xuICBhcmlhVmFsdWVNaW46IHN0cmluZztcbiAgYXJpYVZhbHVlTm93OiBzdHJpbmc7XG4gIGFyaWFWYWx1ZVRleHQ6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuXG4gIHN0YXRlczogQ3VzdG9tU3RhdGVTZXQ7XG5cbiAgc3RhdGljIGdldCBpc1BvbHlmaWxsZWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyZWY6IElDdXN0b21FbGVtZW50KSB7XG4gICAgaWYgKCFyZWYgfHwgIXJlZi50YWdOYW1lIHx8IHJlZi50YWdOYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0lsbGVnYWwgY29uc3RydWN0b3InKTtcbiAgICB9XG4gICAgY29uc3Qgcm9vdE5vZGUgPSByZWYuZ2V0Um9vdE5vZGUoKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IG5ldyBWYWxpZGl0eVN0YXRlKCk7XG4gICAgdGhpcy5zdGF0ZXMgPSBuZXcgQ3VzdG9tU3RhdGVTZXQocmVmKTtcbiAgICByZWZNYXAuc2V0KHRoaXMsIHJlZik7XG4gICAgdmFsaWRpdHlNYXAuc2V0KHRoaXMsIHZhbGlkaXR5KTtcbiAgICBpbnRlcm5hbHNNYXAuc2V0KHJlZiwgdGhpcyk7XG4gICAgaW5pdEFvbShyZWYsIHRoaXMpO1xuICAgIGluaXRSZWYocmVmLCB0aGlzKTtcbiAgICBPYmplY3Quc2VhbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIElmIGFwcGVuZGVkIGZyb20gYSBEb2N1bWVudEZyYWdtZW50LCB3YWl0IHVudGlsIGl0IGlzIGNvbm5lY3RlZFxuICAgICAqIGJlZm9yZSBhdHRlbXB0aW5nIHRvIHVwZ3JhZGUgdGhlIGludGVybmFscyBpbnN0YW5jZVxuICAgICAqL1xuICAgIGlmIChyb290Tm9kZSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgIGRlZmVyVXBncmFkZShyb290Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgaW4gYSB2YWxpZCBzdGF0ZVxuICAgKi9cbiAgY2hlY2tWYWxpZGl0eSgpOiBib29sZWFuIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gZXhlY3V0ZSAnY2hlY2tWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIC8qKiBJZiB0aGUgZWxlbWVudCB3aWxsIG5vdCB2YWxpZGF0ZSwgaXQgaXMgbmVjZXNzYXJpbHkgdmFsaWQgYnkgZGVmYXVsdCAqL1xuICAgIGlmICghdGhpcy53aWxsVmFsaWRhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICBpZiAoIXZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBjb25zdCB2YWxpZGl0eUV2ZW50ID0gbmV3IEV2ZW50KCdpbnZhbGlkJywge1xuICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgY29tcG9zZWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICByZWYuZGlzcGF0Y2hFdmVudCh2YWxpZGl0eUV2ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkaXR5LnZhbGlkO1xuICB9XG5cbiAgLyoqIFRoZSBmb3JtIGVsZW1lbnQgdGhlIGN1c3RvbSBlbGVtZW50IGlzIGFzc29jaWF0ZWQgd2l0aCAqL1xuICBnZXQgZm9ybSgpOiBIVE1MRm9ybUVsZW1lbnQge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAnZm9ybScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgbGV0IGZvcm07XG4gICAgaWYgKHJlZi5jb25zdHJ1Y3RvclsnZm9ybUFzc29jaWF0ZWQnXSA9PT0gdHJ1ZSkge1xuICAgICAgZm9ybSA9IGZpbmRQYXJlbnRGb3JtKHJlZik7XG4gICAgfVxuICAgIHJldHVybiBmb3JtO1xuICB9XG5cbiAgLyoqIEEgbGlzdCBvZiBhbGwgcmVsYXRpdmUgZm9ybSBsYWJlbHMgZm9yIHRoaXMgZWxlbWVudCAqL1xuICBnZXQgbGFiZWxzKCk6IExhYmVsc0xpc3Qge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAnbGFiZWxzJyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBjb25zdCBpZCA9IHJlZi5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgY29uc3QgaG9zdFJvb3QgPSByZWYuZ2V0Um9vdE5vZGUoKSBhcyBFbGVtZW50O1xuICAgIGlmIChob3N0Um9vdCAmJiBpZCkge1xuICAgICAgcmV0dXJuIGhvc3RSb290LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTExhYmVsRWxlbWVudD4oYFtmb3I9XCIke2lkfVwiXWApIGFzIHVua25vd24gYXMgTGFiZWxzTGlzdDtcbiAgICB9XG4gICAgcmV0dXJuIFtdIGFzIHVua25vd24gYXMgTGFiZWxzTGlzdDtcbiAgfVxuXG4gIC8qKiBXaWxsIHJlcG9ydCB0aGUgZWxlbWVudHMgdmFsaWRpdHkgc3RhdGUgKi9cbiAgcmVwb3J0VmFsaWRpdHkoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3JlcG9ydFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgLyoqIElmIHRoZSBlbGVtZW50IHdpbGwgbm90IHZhbGlkYXRlLCBpdCBpcyB2YWxpZCBieSBkZWZhdWx0ICovXG4gICAgaWYgKCF0aGlzLndpbGxWYWxpZGF0ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHZhbGlkID0gdGhpcy5jaGVja1ZhbGlkaXR5KCk7XG4gICAgY29uc3QgYW5jaG9yID0gdmFsaWRhdGlvbkFuY2hvck1hcC5nZXQodGhpcyk7XG4gICAgaWYgKGFuY2hvciAmJiAhcmVmLmNvbnN0cnVjdG9yWydmb3JtQXNzb2NpYXRlZCddKSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3JlcG9ydFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCF2YWxpZCAmJiBhbmNob3IpIHtcbiAgICAgIHJlZi5mb2N1cygpO1xuICAgICAgYW5jaG9yLmZvY3VzKCk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBlbGVtZW50J3MgdmFsdWUgd2l0aGluIHRoZSBmb3JtICovXG4gIHNldEZvcm1WYWx1ZSh2YWx1ZTogc3RyaW5nIHwgRm9ybURhdGEgfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldEZvcm1WYWx1ZScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIHJlbW92ZUhpZGRlbklucHV0cyh0aGlzKTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpKSB7XG4gICAgICBpZiAocmVmLmdldEF0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgIGNvbnN0IGhpZGRlbklucHV0ID0gY3JlYXRlSGlkZGVuSW5wdXQocmVmLCB0aGlzKTtcbiAgICAgICAgaGlkZGVuSW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgQXJyYXkuZnJvbSh2YWx1ZSlcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAuZm9yRWFjaCgoW2Zvcm1EYXRhS2V5LCBmb3JtRGF0YVZhbHVlXSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgZm9ybURhdGFWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGhpZGRlbklucHV0ID0gY3JlYXRlSGlkZGVuSW5wdXQocmVmLCB0aGlzKTtcbiAgICAgICAgICAgIGhpZGRlbklucHV0Lm5hbWUgPSBmb3JtRGF0YUtleTtcbiAgICAgICAgICAgIGhpZGRlbklucHV0LnZhbHVlID0gZm9ybURhdGFWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWZWYWx1ZU1hcC5zZXQocmVmLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZWxlbWVudCdzIHZhbGlkaXR5LiBUaGUgZmlyc3QgYXJndW1lbnQgaXMgYSBwYXJ0aWFsIFZhbGlkaXR5U3RhdGUgb2JqZWN0XG4gICAqIHJlZmxlY3RpbmcgdGhlIGNoYW5nZXMgdG8gYmUgbWFkZSB0byB0aGUgZWxlbWVudCdzIHZhbGlkaXR5LiBJZiB0aGUgZWxlbWVudCBpcyBpbnZhbGlkLFxuICAgKiB0aGUgc2Vjb25kIGFyZ3VtZW50IHNldHMgdGhlIGVsZW1lbnQncyB2YWxpZGF0aW9uIG1lc3NhZ2UuXG4gICAqXG4gICAqIElmIHRoZSBmaWVsZCBpcyB2YWxpZCBhbmQgYSBtZXNzYWdlIGlzIHNwZWNpZmllZCwgdGhlIG1ldGhvZCB3aWxsIHRocm93IGEgVHlwZUVycm9yLlxuICAgKi9cbiAgc2V0VmFsaWRpdHkoXG4gICAgdmFsaWRpdHlDaGFuZ2VzOiBQYXJ0aWFsPGdsb2JhbFRoaXMuVmFsaWRpdHlTdGF0ZT4sXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2U/OiBzdHJpbmcsXG4gICAgYW5jaG9yPzogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgY29uc3QgcmVmID0gcmVmTWFwLmdldCh0aGlzKTtcbiAgICB0aHJvd0lmTm90Rm9ybUFzc29jaWF0ZWQoXG4gICAgICByZWYsXG4gICAgICBgRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgaWYgKCF2YWxpZGl0eUNoYW5nZXMpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ3NldFZhbGlkaXR5JyBvbiAnRWxlbWVudEludGVybmFscyc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgdmFsaWRhdGlvbkFuY2hvck1hcC5zZXQodGhpcywgYW5jaG9yKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICBjb25zdCB2YWxpZGl0eUNoYW5nZXNPYmo6IFBhcnRpYWw8VmFsaWRpdHlTdGF0ZT4gPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWxpZGl0eUNoYW5nZXMpIHtcbiAgICAgIHZhbGlkaXR5Q2hhbmdlc09ialtrZXldID0gdmFsaWRpdHlDaGFuZ2VzW2tleV07XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyh2YWxpZGl0eUNoYW5nZXNPYmopLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0VmFsaWQodmFsaWRpdHkpO1xuICAgIH1cbiAgICBjb25zdCBjaGVjayA9IHsgLi4udmFsaWRpdHksIC4uLnZhbGlkaXR5Q2hhbmdlc09iaiB9O1xuICAgIGRlbGV0ZSBjaGVjay52YWxpZDtcbiAgICBjb25zdCB7IHZhbGlkIH0gPSByZWNvbmNpbGVWYWxpZGl0eSh2YWxpZGl0eSwgY2hlY2ssIHRoaXMuZm9ybSk7XG5cbiAgICBpZiAoIXZhbGlkICYmICF2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdzZXRWYWxpZGl0eScgb24gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgc2Vjb25kIGFyZ3VtZW50IHNob3VsZCBub3QgYmUgZW1wdHkgaWYgb25lIG9yIG1vcmUgZmxhZ3MgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IGFyZSB0cnVlLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHZhbGlkYXRpb25NZXNzYWdlTWFwLnNldCh0aGlzLCB2YWxpZCA/ICcnIDogdmFsaWRhdGlvbk1lc3NhZ2UpO1xuXG4gICAgLy8gY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBob3N0IGVsZW1lbnQgaXMgY29ubmVjdGVkIGJlZm9yZSBhZGRpbmcgYXR0cmlidXRlc1xuICAgIC8vIGJlY2F1c2Ugc2FmYXJpIGRvZXNudCBhbGxvdyBlbGVtZW50cyB0byBoYXZlIGF0dHJpYnV0ZXMgYWRkZWQgaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgaWYgKHJlZi5pc0Nvbm5lY3RlZCkge1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLWludmFsaWQnLCAhdmFsaWQpO1xuICAgICAgcmVmLnRvZ2dsZUF0dHJpYnV0ZSgnaW50ZXJuYWxzLXZhbGlkJywgdmFsaWQpO1xuICAgICAgcmVmLnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgYCR7IXZhbGlkfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGl0eVVwZ3JhZGVNYXAuc2V0KHJlZiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNoYWRvd1Jvb3QoKTogU2hhZG93Um9vdCB8IG51bGwge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IHNoYWRvd1Jvb3RNYXAuZ2V0KHJlZik7XG4gICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgIHJldHVybiBzaGFkb3dSb290O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBUaGUgZWxlbWVudCdzIHZhbGlkYXRpb24gbWVzc2FnZSBzZXQgZHVyaW5nIGEgY2FsbCB0byBFbGVtZW50SW50ZXJuYWxzLnNldFZhbGlkaXR5ICovXG4gIGdldCB2YWxpZGF0aW9uTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlZiA9IHJlZk1hcC5nZXQodGhpcyk7XG4gICAgdGhyb3dJZk5vdEZvcm1Bc3NvY2lhdGVkKFxuICAgICAgcmVmLFxuICAgICAgYEZhaWxlZCB0byByZWFkIHRoZSAndmFsaWRhdGlvbk1lc3NhZ2UnIHByb3BlcnR5IGZyb20gJ0VsZW1lbnRJbnRlcm5hbHMnOiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgbm90IGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBlbGVtZW50LmBcbiAgICApO1xuICAgIHJldHVybiB2YWxpZGF0aW9uTWVzc2FnZU1hcC5nZXQodGhpcyk7XG4gIH1cblxuICAvKiogVGhlIGN1cnJlbnQgdmFsaWRpdHkgc3RhdGUgb2YgdGhlIG9iamVjdCAqL1xuICBnZXQgdmFsaWRpdHkoKTogZ2xvYmFsVGhpcy5WYWxpZGl0eVN0YXRlIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ3ZhbGlkaXR5JyBwcm9wZXJ0eSBmcm9tICdFbGVtZW50SW50ZXJuYWxzJzogVGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gZWxlbWVudC5gXG4gICAgKTtcbiAgICBjb25zdCB2YWxpZGl0eSA9IHZhbGlkaXR5TWFwLmdldCh0aGlzKTtcbiAgICByZXR1cm4gdmFsaWRpdHk7XG4gIH1cblxuICAvKiogSWYgdHJ1ZSB0aGUgZWxlbWVudCB3aWxsIHBhcnRpY2lwYXRlIGluIGEgZm9ybSdzIGNvbnN0cmFpbnQgdmFsaWRhdGlvbi4gKi9cbiAgZ2V0IHdpbGxWYWxpZGF0ZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCByZWYgPSByZWZNYXAuZ2V0KHRoaXMpO1xuICAgIHRocm93SWZOb3RGb3JtQXNzb2NpYXRlZChcbiAgICAgIHJlZixcbiAgICAgIGBGYWlsZWQgdG8gcmVhZCB0aGUgJ3dpbGxWYWxpZGF0ZScgcHJvcGVydHkgZnJvbSAnRWxlbWVudEludGVybmFscyc6IFRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGVsZW1lbnQuYFxuICAgICk7XG4gICAgaWYgKHJlZi5kaXNhYmxlZCB8fCByZWYuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IHJlZi5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5JykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLy8gLS0tIERpc2FibGluZyB0aGlzIHR5cGUgZGVjbGFyYXRpb24gdG8gYXZvaWQgY29uZmxpY3Qgd2l0aCBleHRlcm5hbCBlbGVtZW50LWludGVybmFscy1wb2x5ZmlsbCB0eXBlcyAtLS1cbi8vIGRlY2xhcmUgZ2xvYmFsIHtcbi8vICAgaW50ZXJmYWNlIEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3RvciB7XG4vLyAgICAgZm9ybUFzc29jaWF0ZWQ/OiBib29sZWFuO1xuLy8gICB9XG5cbi8vICAgaW50ZXJmYWNlIFdpbmRvdyB7XG4vLyAgICAgRWxlbWVudEludGVybmFsczogdHlwZW9mIEVsZW1lbnRJbnRlcm5hbHM7XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudEludGVybmFsc1N1cHBvcnRlZCgpOiBib29sZWFuIHtcbiAgaWYgKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgIXdpbmRvdy5FbGVtZW50SW50ZXJuYWxzIHx8XG4gICAgIUhUTUxFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hJbnRlcm5hbHNcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2xhc3MgRWxlbWVudEludGVybmFsc0ZlYXR1cmVEZXRlY3Rpb24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgaW50ZXJuYWxzOiBJRWxlbWVudEludGVybmFscztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuaW50ZXJuYWxzID0gdGhpcy5hdHRhY2hJbnRlcm5hbHMoKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcmFuZG9tTmFtZSA9IGBlbGVtZW50LWludGVybmFscy1mZWF0dXJlLWRldGVjdGlvbi0ke01hdGgucmFuZG9tKClcbiAgICAudG9TdHJpbmcoMzYpXG4gICAgLnJlcGxhY2UoL1teYS16XSsvZywgJycpfWA7XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZShyYW5kb21OYW1lLCBFbGVtZW50SW50ZXJuYWxzRmVhdHVyZURldGVjdGlvbik7XG4gIGNvbnN0IGZlYXR1cmVEZXRlY3Rpb25FbGVtZW50ID0gbmV3IEVsZW1lbnRJbnRlcm5hbHNGZWF0dXJlRGV0ZWN0aW9uKCk7XG4gIHJldHVybiBbXG4gICAgJ3NoYWRvd1Jvb3QnLFxuICAgICdmb3JtJyxcbiAgICAnd2lsbFZhbGlkYXRlJyxcbiAgICAndmFsaWRpdHknLFxuICAgICd2YWxpZGF0aW9uTWVzc2FnZScsXG4gICAgJ2xhYmVscycsXG4gICAgJ3NldEZvcm1WYWx1ZScsXG4gICAgJ3NldFZhbGlkaXR5JyxcbiAgICAnY2hlY2tWYWxpZGl0eScsXG4gICAgJ3JlcG9ydFZhbGlkaXR5JyxcbiAgXS5ldmVyeSgocHJvcCkgPT4gcHJvcCBpbiBmZWF0dXJlRGV0ZWN0aW9uRWxlbWVudC5pbnRlcm5hbHMpO1xufVxuXG4vLyBPbmx5IGluY2x1ZGVzIHRoaXMgcG9seWZpbGwgaWYgd2UgYXJlIGluIGEgamVzdCBydW5uZXIgb3Igbm90IGluIFNTUlxuaWYgKFxuICAhaXNTZXJ2ZXIgfHxcbiAgKChwcm9jZXNzIGFzIGFueSk/LmVudi5KRVNUX1dPUktFUl9JRCAhPT0gdW5kZWZpbmVkICYmIChwcm9jZXNzIGFzIGFueSk/LmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKVxuKSB7XG4gIGlmICghaXNFbGVtZW50SW50ZXJuYWxzU3VwcG9ydGVkKCkpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8qKiBAdHMtZXhwZWN0LWVycm9yOiB3ZSBuZWVkIHRvIHJlcGxhY2UgdGhlIGRlZmF1bHQgRWxlbWVudEludGVybmFscyAqL1xuICAgICAgd2luZG93LkVsZW1lbnRJbnRlcm5hbHMgPSBFbGVtZW50SW50ZXJuYWxzO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgZGVmaW5lID0gQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5kZWZpbmU7XG4gICAgICBDdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlLmRlZmluZSA9IGZ1bmN0aW9uIChuYW1lLCBjb25zdHJ1Y3Rvciwgb3B0aW9ucykge1xuICAgICAgICBpZiAoY29uc3RydWN0b3IuZm9ybUFzc29jaWF0ZWQpIHtcbiAgICAgICAgICBjb25zdCBjb25uZWN0ZWRDYWxsYmFjayA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaztcbiAgICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWNvbm5lY3RlZENhbGxiYWNrTWFwLmhhcyh0aGlzKSkge1xuICAgICAgICAgICAgICBjb25uZWN0ZWRDYWxsYmFja01hcC5zZXQodGhpcywgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgc2V0RGlzYWJsZWQodGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbm5lY3RlZENhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2suYXBwbHkodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhbHdheXMgdXBncmFkZUludGVybmFscyBpbiBjb25uZWN0ZWRDYWxsYmFjayBpbnN0ZWFkIG9mIGNvbnN0cnVjdG9yXG4gICAgICAgICAgICB1cGdyYWRlSW50ZXJuYWxzKHRoaXMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBkZWZpbmUuY2FsbCh0aGlzLCBuYW1lLCBjb25zdHJ1Y3Rvciwgb3B0aW9ucyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFuIEVsZW1lbnRJbnRlcm5hbHMgaW5zdGFuY2UgdG8gYSBjdXN0b20gZWxlbWVudC4gQ2FsbGluZyB0aGlzIG1ldGhvZFxuICAgICAqIG9uIGEgYnVpbHQtaW4gZWxlbWVudCB3aWxsIHRocm93IGFuIGVycm9yLlxuICAgICAqL1xuICAgIGlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzID0gZnVuY3Rpb24gKCk6IElFbGVtZW50SW50ZXJuYWxzIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhZ05hbWUpIHtcbiAgICAgICAgICAvKiogVGhpcyBoYXBwZW5zIGluIHRoZSBMaXRTU1IgZW52aXJvbm1lbnQuIEhlcmUgd2UgY2FuIGdlbmVyYWxseSBpZ25vcmUgaW50ZXJuYWxzIGZvciBub3cgKi9cbiAgICAgICAgICByZXR1cm4ge30gYXMgb2JqZWN0IGFzIElFbGVtZW50SW50ZXJuYWxzO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEZhaWxlZCB0byBleGVjdXRlICdhdHRhY2hJbnRlcm5hbHMnIG9uICdIVE1MRWxlbWVudCc6IFVuYWJsZSB0byBhdHRhY2ggRWxlbWVudEludGVybmFscyB0byBub24tY3VzdG9tIGVsZW1lbnRzLmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnRlcm5hbHNNYXAuaGFzKHRoaXMpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgICAgIGBET01FeGNlcHRpb246IEZhaWxlZCB0byBleGVjdXRlICdhdHRhY2hJbnRlcm5hbHMnIG9uICdIVE1MRWxlbWVudCc6IEVsZW1lbnRJbnRlcm5hbHMgZm9yIHRoZSBzcGVjaWZpZWQgZWxlbWVudCB3YXMgYWxyZWFkeSBhdHRhY2hlZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnRJbnRlcm5hbHModGhpcykgYXMgSUVsZW1lbnRJbnRlcm5hbHM7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbm5lci1kZWNsYXJhdGlvbnNcbiAgICAgIGZ1bmN0aW9uIGF0dGFjaFNoYWRvd09ic2VydmVyKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGF0dGFjaFNoYWRvdy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgc2hhZG93Um9vdE1hcC5zZXQodGhpcywgc2hhZG93Um9vdCk7XG5cbiAgICAgICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJFeGlzdHMoKSkge1xuICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG4gICAgICAgICAgaWYgKHdpbmRvdy5TaGFkeURPTSkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCBvYnNlcnZlckNvbmZpZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2hhZG93Um9vdCwgb2JzZXJ2ZXJDb25maWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzaGFkb3dIb3N0c01hcC5zZXQodGhpcywgb2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGFkb3dSb290O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhdHRhY2hTaGFkb3cgPSBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3c7XG4gICAgICBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3cgPSBhdHRhY2hTaGFkb3dPYnNlcnZlcjtcbiAgICB9XG5cbiAgICBpZiAobXV0YXRpb25PYnNlcnZlckV4aXN0cygpKSB7XG4gICAgICBjb25zdCBkb2N1bWVudE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG4gICAgICBkb2N1bWVudE9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBvYnNlcnZlckNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogS2VlcHMgdGhlIHBvbHlmaWxsIGZyb20gdGhyb3dpbmcgaW4gZW52aXJvbm1lbnRzIHdoZXJlIEhUTUxGb3JtRWxlbWVudFxuICAgICAqIGlzIHVuZGVmaW5lZCBsaWtlIGluIGEgc2VydmVyIGVudmlyb25tZW50XG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBIVE1MRm9ybUVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwYXRjaEZvcm1Qcm90b3R5cGUoKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXdpbmRvdy5DdXN0b21TdGF0ZVNldCkge1xuICAgICAgd2luZG93LkN1c3RvbVN0YXRlU2V0ID0gQ3VzdG9tU3RhdGVTZXQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3cuQ3VzdG9tU3RhdGVTZXQpIHtcbiAgICB3aW5kb3cuQ3VzdG9tU3RhdGVTZXQgPSBDdXN0b21TdGF0ZVNldDtcbiAgICBjb25zdCBhdHRhY2hJbnRlcm5hbHMgPSBIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoSW50ZXJuYWxzO1xuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hJbnRlcm5hbHMgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgY29uc3QgaW50ZXJuYWxzID0gYXR0YWNoSW50ZXJuYWxzLmNhbGwodGhpcywgYXJncyk7XG4gICAgICBpbnRlcm5hbHMuc3RhdGVzID0gbmV3IEN1c3RvbVN0YXRlU2V0KHRoaXMpO1xuICAgICAgcmV0dXJuIGludGVybmFscztcbiAgICB9O1xuICB9XG59XG4iLCAiaW1wb3J0IHsgQ29uc3RydWN0b3IsIE10ZUVsZW1lbnQgfSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExhbmdJbnRlcmZhY2Uge1xuICAvKipcbiAgICogQWRqdXN0cyB0aGUgbGFuZyB1c2VkIHRvIGZvcm1hdCBjb250ZW50IHJlbmRlcmVkIGJ5IHRoaXMgZWxlbWVudFxuICAgKiBAYXR0ciBsYW5nXG4gICAqL1xuICBsYW5nOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBMYW5nTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPE10ZUVsZW1lbnQ+PihzdXBlckNsYXNzOiBUKSA9PiB7XG4gIGNsYXNzIExhbmdFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgbGFuZyB1c2VkIHRvIGZvcm1hdCBjb250ZW50IHJlbmRlcmVkIGJ5IHRoaXMgZWxlbWVudFxuICAgICAqIEBhdHRyIGxhbmdcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoeyByZWZsZWN0OiB0cnVlIH0pIGxhbmc6IHN0cmluZztcbiAgfVxuICByZXR1cm4gTGFuZ0VsZW1lbnQgYXMgQ29uc3RydWN0b3I8TGFuZ0ludGVyZmFjZT4gJiBUO1xufTtcbiIsICJpbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBNdGVFbGVtZW50IH0gZnJvbSAnLi4vJztcblxuLyoqXG4gKiBTcGVjaWFsIGNsYXNzIHRoYXQgaGVscHMgZnJhbWV3b3JrIHdyYXBwZXIgc3R5bGluZyBrbm93IHdoZW4gYSB3cmFwcGVyIGZyYW1ld29ya1xuICogaGFzIGZpbmlzaGVkIHJlbmRlcmluZyBhbmQgdGh1cyBlbGVtZW50cyBjYW4gbm93IGJlIHNob3duIHdpdGhvdXQgYSBGT1VDLiBUaGlzXG4gKiBvY2N1cnMgaW4gdGhlIHNjZW5hcmlvIHdoZXJlIExpdCBlbGVtZW50cyByZWdpc3RlciBhbmQgcmVuZGVyIGJlZm9yZSB0aGVcbiAqIHdyYXBwZXIgZnJhbWV3b3JrIHBhc3NlcyBlbGVtZW50cyB0aGVpciBwcm9wcy5cbiAqL1xuZXhwb3J0IGNvbnN0IFdhaXRGb3JGcmFtZXdvcmtNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RydWN0b3I8TXRlRWxlbWVudD4+KHN1cGVyQ2xhc3M6IFQpID0+IHtcbiAgY2xhc3MgV2FpdEZvckZyYW1ld29ya0VsZW1lbnQgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKiogQGlnbm9yZSAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogJ210ZS1mdy1yZW5kZXJlZCcsIHJlZmxlY3Q6IHRydWUgfSkgX2Z3UmVuZGVyZWQ7XG4gIH1cbiAgcmV0dXJuIFdhaXRGb3JGcmFtZXdvcmtFbGVtZW50IGFzIFQ7XG59O1xuIiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3h9YDsiLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0tY29sb3I6aW5oZXJpdDtjb2xvcjp2YXIoLS1jb2xvcik7ZGlzcGxheTppbmxpbmUtYmxvY2t9Omhvc3QoW2xpbmVDbGFtcF0pe2Rpc3BsYXk6LXdlYmtpdC1pbmxpbmUtYm94O292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzOy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbH06aG9zdChbbGluZUNsYW1wXVtibG9ja10pe2Rpc3BsYXk6LXdlYmtpdC1ib3h9Omhvc3QoW25vV3JhcF0pe2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfTpob3N0KFtzaXplPXh4c10pe2ZvbnQtc2l6ZTouNjI1cmVtfTpob3N0KFtzaXplPXhzXSl7Zm9udC1zaXplOi43NXJlbX06aG9zdChbc2l6ZT1zbV0pe2ZvbnQtc2l6ZTouODc1cmVtfTpob3N0KFtzaXplPW1kXSl7Zm9udC1zaXplOjFyZW19Omhvc3QoW3NpemU9bGddKXtmb250LXNpemU6MS4yNXJlbX06aG9zdChbc2l6ZT14bF0pe2ZvbnQtc2l6ZToxLjVyZW19Omhvc3QoW3NpemU9eHhsXSl7Zm9udC1zaXplOjEuNzVyZW19Omhvc3QoW211dGVkXSl7LS1jb2xvcjp2YXIoLS1tdGUtaW5rLTIpfWA7IiwgbnVsbF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FD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LFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsVUFBVTtNQUNSLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLFNBQVM7TUFDUCxXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsZ0JBQWdCO01BQ2QsV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0VBQ0Y7RUFDQSxNQUFNO0lBQ0osUUFBUTtNQUNOLFdBQVc7UUFDVCxXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxhQUFhO1FBQ1gsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsWUFBWTtRQUNWLFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLFVBQVU7UUFDUixXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsYUFBYTtRQUNYLFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLFlBQVk7UUFDVixXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsV0FBVztRQUNULFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLFVBQVU7UUFDUixXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FB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O0lBQ1QsU0FBUztNQUNQLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLFFBQVE7TUFDTixXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFVBQVU7UUFDUixTQUFTO1FBQ1QsWUFBWTtNQUNkO0lBQ0Y7SUFDQSxRQUFRO01BQ04sV0FBVztRQUNULFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxTQUFTO1FBQ1AsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxVQUFVO1FBQ1IsU0FBUztRQUNULFlBQVk7TUFDZDtJQUNGO0lBQ0EsUUFBUTtNQUNOLFdBQVc7UUFDVCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsU0FBUztRQUNQLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFFBQVE7UUFDTixTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsVUFBVTtRQUNSLFNBQVM7UUFDVCxZQUFZO01BQ2Q7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsU0FBUztRQUNULFlBQVk7TUFDZDtNQUNBLFNBQVM7UUFDUCxTQUFTO1FBQ1QsWUFBWTtNQUNkO01BQ0EsUUFBUTtRQUNOLFNBQVM7UUFDVCxZQUFZO01BQ2Q7TUFDQSxRQUFRO1FBQ04sU0FBUztRQUNU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Q1gsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsWUFBWTtRQUNWLFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLFVBQVU7UUFDUixXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsYUFBYTtRQUNYLFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLFlBQVk7UUFDVixXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsV0FBVztRQUNULFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLFVBQVU7UUFDUixXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7SUFDRjtJQUNBLE9BQU87TUFDTCxPQUFPO1FBQ0wsV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsT0FBTztRQUNMLFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLFNBQVM7UUFDUCxXQUFXO1VBQ1QsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFNBQVM7VUFDUCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFVBQVU7VUFDUixTQUFTO1VBQ1QsWUFBWTtRQUNkO01BQ0Y7TUFDQSxRQUFRO1FBQ04sV0FBVztVQUNULFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxTQUFTO1VBQ1AsU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsUUFBUTtVQUNOLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxVQUFVO1VBQ1IsU0FBUztVQUNULFlBQVk7UUFDZDtNQUNGO01BQ0EsUUFBUTtRQUNOLFdBQVc7VUFDVCxTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsU0FBUztVQUNQLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7UUFDQSxRQUFRO1VBQ04sU0FBUztVQUNULFlBQVk7UUFDZDtRQUNBLFFBQVE7VUFDTixTQUFTO1VBQ1QsWUFBWTtRQUNkO1FBQ0EsVUFBVTtVQUNSLFNBQVM7VUFDVCxZQUFZO1FBQ2Q7TUFDRjtNQUNBLE9BQU87UUFDTCxXQUFXO1VB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QUNGO0VBQ0EsV0FBVztJQUNULFNBQVM7TUFDUCxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsUUFBUTtNQUNOLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxRQUFRO01BQ04sV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFFBQVE7TUFDTixXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsVUFBVTtNQUNSLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFdBQVc7TUFDVCxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsT0FBTztNQUNMLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsU0FBUztNQUNQLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLGdCQUFnQjtNQUNkLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7RUFDRjtFQUNBLE1BQU07SUFDSixRQUFRO01BQ04sV0FBVztRQUNULFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxhQUFhO1FBQ1gsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFlBQVk7UUFDVixXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixXQUFXO1FBQ1QsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLGFBQWE7UUFDWCxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsWUFBWTtRQUNWLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsVUFBVTtRQUNSLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7SUFDRjtJQUNBLE9BQU87TUFDTCxPQUFPO1FBQ0wsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLE9BQU87UUFDTCxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsT0FBTztRQUNMLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7SUFDRjtFQUNGO0FBQ0Y7QUMvMEVBLElBQU8sNEJBQVE7RUFDYixTQUFTO0lBQ1AsU0FBUztNQUNQO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFNBQVM7TUFDUDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsUUFBUTtNQUNOO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxVQUFVO01BQ1I7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFNBQVM7TUFDUDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsZ0JBQWdCO01BQ2Q7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLGlCQUFpQjtNQUNmO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFNBQVM7TUFDUDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsU0FBUztNQUNQO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFNBQVM7TUFDUDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsU0FBUztNQUNQO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFNBQVM7TUFDUDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsU0FBUztNQUNQO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxVQUFVO01BQ1I7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFlBQVk7TUFDVjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsWUFBWTtNQUNWO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxZQUFZO01BQ1Y7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFlBQVk7TUFDVjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0Esa0JBQWtCO01BQ2hCO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxRQUFRO01BQ047TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFFBQVE7TUFDTjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsUUFBUTtNQUNOO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxRQUFRO01BQ047TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFFBQVE7TUFDTjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsY0FBYztNQUNaO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxXQUFXO01BQ1Q7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFdBQVc7TUFDVDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsV0FBVztNQUNUO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxpQkFBaUI7TUFDZjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsYUFBYTtNQUNYO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxhQUFhO01BQ1g7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLGFBQWE7TUFDWDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsYUFBYTtNQUNYO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxvQkFBb0I7TUFDbEI7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLG9CQUFvQjtNQUNsQjtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0Esb0JBQW9CO01BQ2xCO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxhQUFhO01BQ1g7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLGFBQWE7TUFDWDtNQUNBO01BQ0E7TUFDQTtJQUNGO0lBQ0EsYUFBYTtNQUNYO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxhQUFhO01BQ1g7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLGlCQUFpQjtNQUNmO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFDQSxTQUFTO01BQ1A7TUFDQTtNQUNBO01BQ0E7SUFDRjtJQUNBLFNBQVM7TUFDUDtNQUNBO01BQ0E7TUFDQTtJQUNGO0VBQ0Y7RUFDQSxXQUFXO0lBQ1QsU0FBUztNQUNQLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxRQUFRO01BQ04sVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFFBQVE7TUFDTixVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsUUFBUTtNQUNOLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxVQUFVO01BQ1IsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsV0FBVztNQUNULFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxPQUFPO01BQ0wsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsVUFBVTtNQUNSLFVBQVU7UUFDUixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFNBQVM7UUFDUCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxXQUFXO1FBQ1QsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO0lBQ0Y7SUFDQSxTQUFTO01BQ1AsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtJQUNBLFVBQVU7TUFDUixVQUFVO1FBQ1IsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsZ0JBQWdCO01BQ2QsVUFBVTtRQUNSLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7TUFDQSxRQUFRO1FBQ04sU0FBUztVQUNQO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7UUFDQSxZQUFZO1VBQ1Y7VUFDQTtVQUNBO1VBQ0E7UUFDRjtNQUNGO01BQ0EsU0FBUztRQUNQLFNBQVM7VUFDUDtVQUNBO1VBQ0E7VUFDQTtRQUNGO1FBQ0EsWUFBWTtVQUNWO1VBQ0E7VUFDQTtVQUNBO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxTQUFTO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7UUFDRjtRQUNBLFlBQVk7VUFDVjtVQUNBO1VBQ0E7VUFDQTtRQUNGO01BQ0Y7SUFDRjtFQUNGO0VBQ0EsTUFBTTtJQUNKLFFBQVE7TUFDTixXQUFXO1FBQ1QsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLGFBQWE7UUFDWCxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsWUFBWTtRQUNWLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsVUFBVTtNQUNSLFdBQVc7UUFDVCxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsYUFBYTtRQUNYLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxZQUFZO1FBQ1YsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFdBQVc7UUFDVCxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsV0FBVztRQUNULFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxVQUFVO1FBQ1IsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtJQUNGO0lBQ0EsT0FBTztNQUNMLE9BQU87UUFDTCxVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsT0FBTztRQUNMLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxTQUFTO1FBQ1AsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsU0FBUztVQUNQLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFdBQVc7VUFDVCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7TUFDRjtNQUNBLFFBQVE7UUFDTixVQUFVO1VBQ1IsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFFBQVE7VUFDTixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxTQUFTO1VBQ1AsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsV0FBVztVQUNULFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsUUFBUTtRQUNOLFVBQVU7VUFDUixTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxRQUFRO1VBQ04sU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO1FBQ0EsUUFBUTtVQUNOLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7UUFDRjtRQUNBLFNBQVM7VUFDUCxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7VUFDRjtVQUNBLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtVQUNGO1FBQ0Y7UUFDQSxXQUFXO1VBQ1QsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1VBQ0Y7VUFDQSxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7VUFDRjtRQUNGO01BQ0Y7TUFDQSxPQUFPO1FBQ0wsVUFBVTtVQUNSLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtVQUNGO1VBQ0EsWUFBWTtZQUNW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TyxvQkFBTyxLQUFLLGNBQWM7RUFDbkM7QUFDRjtBQXBDYSxRQUNKLFNBQVM7RUFDZEM7RUFDQUMsaUpBVUk7SUFDQTtJQUNBLENBQUMsR0FBRyxNQUFNQSxzQkFDUSxDQUFDLHFCQUNELE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7RUFJeEQsQ0FBQztBQUVMO0FBdkJXLFVBQU47RUFETixjQUFjLFVBQVU7R0FDWjsiLAogICJuYW1lcyI6IFsiY29sb3IiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJhY2MiLCAicHJvcCIsICJ2YWx1ZSIsICJzdHlsZXMiLCAiZGVwIiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAiY29sb3IiLCAib2JzZXJ2ZXIiLCAiZSIsICJjc3NWYXIiLCAib2JzZXJ2ZXIiLCAicG9ydGFsQ29udHJvbGxlciIsICJlbGVtZW50IiwgInNjcm9sbFgiLCAic2Nyb2xsWSIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfY29udGV4dCIsICJjb250ZXh0IiwgImltcG9ydF9saXQiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfaWZfZGVmaW5lZCIsICJpbXBvcnRfbGl0IiwgImltcG9ydF9kZWNvcmF0b3JzIiwgImltcG9ydF9saXQiLCAic3R5bGVzIiwgImltcG9ydF9jbGFzc19tYXAiLCAiaW1wb3J0X2xpdCIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJpbXBvcnRfZGVjb3JhdG9ycyIsICJub2RlIiwgIm9ic2VydmVyIiwgInN0YXRlIiwgImltcG9ydF9pc19zZXJ2ZXIiLCAib2JzZXJ2ZXIiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2RlY29yYXRvcnMiLCAiaW1wb3J0X2xpdCIsICJjc3MiLCAiX2NzcyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJpbXBvcnRfbGl0IiwgInN0eWxlcyIsICJzdHlsZXMiLCAiaW1wb3J0X2xpdCIsICJzdHlsZXMiLCAiY3NzIl0KfQo=
