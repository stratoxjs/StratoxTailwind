
let plugin, error;
try {
  plugin = require('tailwindcss/plugin');
} catch (err) {
  error = err;
}

function config(configs, pluginPackage) {
  //console.log(configs);
  //configs.nomralizeRemUnit = true;
  //configs.normalizeSpacing = true;
  const settings = {
    // IF the e.g. color in theme bg does not exits in the config/settings bgColors then it will be pollyfilled.
    updateColorsInOnEmpty: {
      bg: 'bgColors',
      text: 'textColors',
      border: 'border'
    },
    rounded: '{{borderRadius.xl}}',
    pad: toRem(1.5) + 'rem',
    mb: toRem(3) + 'rem',
    fontFamily: [], // IF empty array, then it will take the first @font-face item family name!
    fontFace: [
    ],
    headlines: {
      '.display-1': {
        'font-size': '{{fontSize.8xl}}',
        'line-height': '1.0em',
        'margin': '0 0 ' + toRem(1.5) + 'rem 0'
      },
      '.display-2': {
        'font-size': '{{fontSize.7xl}}',
        'line-height': '1.0em',
        'margin': '0 0 ' + toRem(1.5) + 'rem 0'
      },
      '.headline-1': {
        'font-size': '{{fontSize.6xl}}',
        'line-height': '1.0em',
        'margin': '0 0 ' + toRem(1.5) + 'rem 0'
      },
      '.headline-2': {
        'font-size': '{{fontSize.5xl}}',
      },
      '.headline-3': {
        'font-size': '{{fontSize.3xl}}',
      },
      '.headline-4': {
        'font-size': '{{fontSize.2xl}}',
      },
      '.headline-5': {
        'font-size': '{{fontSize.xl}}',
      },
      '.headline-6': {
        'font-size': '{{fontSize.sm}}',
        'text-transform': 'uppercase',
        'letter-spacing': '1px'
      },
      '2xl': {
        '.display-1': {
          'font-size': '{{fontSize.7xl}}',
        },
        '.display-2': {
          'font-size': '{{fontSize.6xl}}',
        },
        '.headline-1': {
          'font-size': '{{fontSize.5xl}}',
        },
        '.headline-2': {
          'font-size': '{{fontSize.4xl}}',
        }
      },
      'xl': {
        '.display-1': {
          'font-size': '{{fontSize.6xl}}',
        },
        '.display-2': {
          'font-size': '{{fontSize.5xl}}',
        },
        '.headline-1': {
          'font-size': '{{fontSize.5xl}}',
        }
      },
      'lg': {
        '.display-1': {
          'font-size': '{{fontSize.5xl}}',
        },
        '.display-2': {
          'font-size': '{{fontSize.4xl}}',
        },
        '.headline-1': {
          'font-size': '{{fontSize.4xl}}',
        },
        '.headline-2': {
          'font-size': '{{fontSize.3xl}}',
        },
        '.headline-3': {
          'font-size': '{{fontSize.2xl}}',
        }
      },
      'md': {
        '.display-1': {
          'font-size': '{{fontSize.3xl}}',
        },
        '.display-2': {
          'font-size': '{{fontSize.3xl}}',
        },
        '.headline-1': {
          'font-size': '{{fontSize.3xl}}',
        },
        '.headline-2': {
          'font-size': '{{fontSize.3xl}}',
        },
        '.headline-3': {
          'font-size': '{{fontSize.2xl}}',
        },
        '.headline-6': {
          'font-size': '{{fontSize.xs}}',
        }
      }
    },
    normalize: {
      'p,label,li,dt,blockquote,button, html input[type="button"],input[type="reset"],input[type="submit"]': {
        'font-size': '{{fontSize.base}}',
        'line-height': '1.5em',
      },
      'input,textarea,select,pre,figcaption,.small, .small p': {
        'font-size': '{{fontSize.sm}}',
        'line-height': '1.3em',
      },
      '.legend,td,th': {
        'font-size': '{{fontSize.xs}}',
        'line-height': '1.3em',
      },
      'blockquote,figcaption': {
        'margin': toRem(2.5) + 'rem 0',
      },
      'blockquote,pre': {
        'background-color': "{{colors.bg.light|backgroundColor.slate.100}}",
      },
      '.scroller,pre': {
        'overflow': 'auto',
        '-webkit-overflow-scrolling': 'touch',
      },
      'pre': {
        'padding': toRem(1.5) + 'rem',
      },
      'blockquote': {
        'border-left': "6px solid {{colors.bg.approve|backgroundColor.green.600}}",
        'padding': '' + toRem(5) + 'rem ' + toRem(3) + 'rem ' + toRem(3) + 'rem ' + toRem(5) + 'rem',
        'position': 'relative'
      },
      'blockquote::before': {
        'content': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxOCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDIzIDE4Ij48cGF0aCBmaWxsPSIjNENBMDVEIiBkPSJNMTMuNDMzIDB2Ny4zOTFjMCA1LjcwNCAzLjU3NiA5LjU3IDguNjA5IDEwLjYwOWwuOTUzLTIuMTUxYy0yLjMzLS45MTctMy44MjgtMy42MzgtMy44MjgtNS44NDlIMjNWMGgtOS41NjdaTTAgMHY3LjM5MUMwIDEzLjA5NSAzLjU5MiAxNi45NjIgOC42MjUgMThsLjk1NC0yLjE1MUM3LjI0OCAxNC45MzIgNS43NSAxMi4yMTEgNS43NSAxMGgzLjgxN1YwSDBaIi8+PC9zdmc+')",
        'position': 'absolute',
        'left': '20px',
        'top': '20px',
        'display': 'block',
      },
      'p': {
        'margin': '0 0 ' + toRem(1.5) + 'rem 0'
      },
      '.ingress,.ingress p': {
        'font-size': '{{fontSize.xl}}',
      },
      'label,figcaption': {
        'font-weight': 'bold',
        'display': 'block',
        'margin-bottom': toRem(0.4) + 'rem'
      },
      'label *': {
        'font-weight': 'normal',
      },
      'a': {
        'color': '{{colors.text.link|backgroundColor.blue.800}}'
      },
      'ul,ol': {
        'padding-left': toRem(3) + 'rem',
        'margin': toRem(2.5) + 'rem 0',
      },
      'ul': {
        'list-style': 'disc',
      },
      'ol': {
        'list-style': 'decimal',
      },
      'nav ul,nav ol,aside ul,aside ol': {
        'list-style': 'none',
        'padding': '0',
        'margin': '0',
      },
      "lg": {
        '.ingress,.ingress p': {
          'font-size': '{{fontSize.base}}',
        },
        'p,label,blockquote,li,dt,button, html input[type="button"], input[type="reset"], input[type="submit"]': {
          'font-size': '{{fontSize.sm}}',
          'line-height': '1.4em',
        },
        'blockquote': {
          'padding': toRem(5) + 'rem ' + toRem(1.5) + 'rem ' + toRem(2) + 'rem ' + toRem(2) + 'rem',
        },
      }
    },
    bgColors: {
      primary: {
        'color': "{{backgroundColor.white}}",
        'background-color': "{{colors.bg.primary|backgroundColor.blue.800}}",
        'border-color': "{{colors.border.primary|colors.bg.primary|backgroundColor.blue.800}}",
      },
      secondary: {
        'color': "inherit",
        'background-color': "{{colors.bg.secondary|backgroundColor.slate.200}}",
        'border-color': "{{colors.border.secondary|backgroundColor.slate.300}}"
      },
      light: {
        'color': "inherit",
        'background-color': "{{colors.bg.light|backgroundColor.slate.100}}",
        'border-color': "{{colors.border.light|backgroundColor.slate.300}}"
      },
      approve: {
        'color': "{{backgroundColor.white}}",
        'background-color': "{{colors.bg.approve|backgroundColor.green.600}}",
        'border-color': "{{colors.border.approve|colors.bg.approve|backgroundColor.green.600}}",
      },
      error: {
        'color': "{{backgroundColor.white}}",
        'background-color': "{{colors.bg.error|backgroundColor.red.600}}",
        'border-color': "{{colors.border.error|colors.bg.error|backgroundColor.red.600}}",
      }
    },
    textColors: {
      primary: {
        'color': '{{colors.text.primary|backgroundColor.slate.900}}'
      },
      secondary: {
        'color': '{{colors.text.secondary|backgroundColor.slate.500}}'
      },
      light: {
        'color': '{{colors.text.light|backgroundColor.slate.400}}'
      },
      link: {
        'color': '{{colors.text.link|backgroundColor.blue.800}}'
      },
      approve: {
        'color': "{{colors.text.approve|backgroundColor.green.600}}",
      },
      error: {
        'color': '{{colors.text.error|backgroundColor.red.600}}'
      }
    },
    border: {
      primary: {
        'border-color': "{{colors.border.primary|backgroundColor.slate.300}}"
      },
      secondary: {
        'border-color': "{{colors.border.secondary|backgroundColor.blue.400}}"
      },
      light: {
        'border-color': "{{colors.border.light|backgroundColor.slate.200}}"
      },
      approve: {
        'border-color': "{{colors.border.approve|backgroundColor.green.600}}"
      },
      error: {
        'border-color': '{{colors.border.error|backgroundColor.red.800}}'
      }
    }
  }


  settings.spacing = {
    "DEFAULT": [
      {'padding': toRem(10.0) + 'rem ' + toRem(6.0) + "rem"},
      {'padding': toRem(6.0) + 'rem ' + toRem(6.0) + "rem"},
      {'padding': toRem(5.0) + 'rem ' + toRem(3.0) + "rem"},
      {'padding': toRem(3.0) + 'rem ' + toRem(3.0) + "rem"},
    ],
    "xl": [
      {'padding': toRem(8.0) + 'rem ' + toRem(5.0) + "rem"},
      {'padding': toRem(5.0) + 'rem ' + toRem(5.0) + "rem"},
      {'padding': toRem(5.0) + 'rem ' + toRem(3.0) + "rem"},
      {'padding': toRem(3.0) + 'rem ' + toRem(3.0) + "rem"},
    ],
    "lg": [
      {'padding': toRem(6.0) + 'rem ' + toRem(3.0) + "rem"},
      {'padding': toRem(5.0) + 'rem ' + toRem(3.0) + "rem"},
      {'padding': toRem(4.0) + 'rem ' + toRem(3.0) + "rem"},
      {'padding': toRem(3.0) + 'rem ' + toRem(3.0) + "rem"},
    ],
    "md": [
      {'padding': toRem(3.0) + 'rem ' + toRem(1.5) + "rem"},
      {'padding': toRem(3.0) + 'rem ' + toRem(1.5) + "rem"},
      {'padding': toRem(4.0) + 'rem ' + toRem(1.5) + "rem"},
      {'padding': toRem(3.0) + 'rem ' + toRem(1.5) + "rem"},
    ],
    "sm": [
      {'padding': toRem(3.0) + 'rem ' + toRem(1.5) + "rem"},
      {'padding': toRem(3.0) + 'rem ' + toRem(1.5) + "rem"},
      {'padding': toRem(3.0) + 'rem ' + toRem(1.5) + "rem"},
      {'padding': toRem(3.0) + 'rem ' + toRem(1.5) + "rem"},
    ]
  };

  deepMerge(settings, configs);

  let breakPointClasses = {};
  if(typeof pluginPackage === "function") {
    plugin = pluginPackage;
  } else {
    if(error) throw new Error(error);
  }

  function toRem(unit) {
    return (typeof configs === "object" && configs?.nomralizeRemUnit) ? unit : (Math.round((unit / 1.6) * 100) / 100);
  }

  function spacing() {
    let i, index = 0, obj = {};
    for(i = 0; i <= 360; i++) {
      obj[i] = toRem((i)/10)+"rem";
    }
    return obj;
  }

  function setDefaultFontFamily() {
    if(settings.fontFamily.length > 0) {
      return settings.fontFamily;
    } else {
      const defaultFont = settings.fontFace[0]?.['@font-face']?.['font-family'];
      if(typeof defaultFont === "string") {
        return [defaultFont, 'Helvetica', 'Arial', 'sans-serif'];
      }
    }
    return ['Helvetica', 'Arial', 'sans-serif'];
  }

  function deepMerge(target, source) {
    if (!isObject(target) || !isObject(source)) {
      return source;
    }
    Object.keys(source).forEach(key => {
      const targetValue = target[key];
      const sourceValue = source[key];
      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        target[key] = targetValue.concat(sourceValue);
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        target[key] = deepMerge(Object.assign({}, targetValue), sourceValue);
      } else {
        target[key] = sourceValue;
      }
    });
    return target;

  }
  function isObject(target) {
    return (target && typeof target === 'object');
  }

  const defaultTheme = require('tailwindcss/defaultTheme');
  return plugin(function({ addBase, addComponents, addUtilities, theme }) {
    const screens = theme('screens');
    const colors = theme('colors');

    pollyfillColors();

    const components = addClass({
      '.card': settings.spacing.DEFAULT,
      '.rounded': {
        'border-radius': settings.rounded,
      },
      '.title': {
        'margin-top': '0',
      },
      'buttton, .button': {
        'width': 'auto',
        'cursor': 'pointer',
        'display': 'inline-block',
        'color': 'inherit',
        'line-height': '1.5em',
        'font-size': '{{fontSize.sm}}',
        'padding': toRem(1.2) + 'rem ' + toRem(2.5) + 'rem',
        'border-radius': settings.rounded,
        'box-sizing': 'border-box',
      },
      'buttton, .button.md': {
        'padding': toRem(0.8) + 'rem ' + toRem(2) + 'rem',
      },
      'buttton, .button.sm': {
        'font-size': '{{fontSize.xs}}',
        'padding': toRem(0.8) + 'rem ' + toRem(2) + 'rem',
        'border-radius': '{{borderRadius.full}}',
      },
      'buttton:hover, .button:hover': {
        'background-image': 'linear-gradient(rgb(0 0 0/10%) 0 0)',
      },
      '.border': settings.border,
      '.bg': settings.bgColors,
      '.text': settings.textColors,
      '.wrapper,.container': {
        'max-width': getScreen('2xl'),
      },
      '.wrapper': {
        'margin': '0 auto'
      },
      '.wrapper.xl,.container.xl': {
        'max-width': getScreen('xl')
      },
      '.wrapper.lg,.container.lg': {
        'max-width': getScreen('lg')
      },
      '.wrapper.md,.container.md': {
        'max-width': getScreen('md')
      },
      '.wrapper.sm,.container.sm': {
        'max-width': getScreen('sm')
      },
      '.wrapper.xs,.container.xs': {
        'max-width': getScreen('xs')
      },
      '.pad': {
        'padding': settings.pad,
      },
      '.mb': {
        'margin-bottom': settings.mb,
      },
      '.items': {
        'display': 'flex',
        'flex-wrap': 'wrap',
        'align-items': 'center',
        //'justify-content': 'center'
      },
      'xl': {
        '.card': settings.spacing.xl,
      },
      'lg': {
        '.card': settings.spacing.lg,
      },
      'md': {
        '.card': settings.spacing.md,
      },
      'sm': {
        '.card': settings.spacing.sm,
      }
    });

    let baseA = addClass({
      'html': {
        'font-size': (settings.nomralizeRemUnit ? "10px" : 'inherit')
      },
      'body': {
        'font-size': toRem(1.8)+'rem',
        'line-height': '150%',
        'color': settings.textColors.primary['color']
      },
      'svg, svg path, svg circle, svg ellipse': {
        'vector-effect': 'non-scaling-stroke'
      },
      '.display-1,.display-2,.headline-1,.headline-2,.headline-3,.headline-4,.headline-5,.headline-6': {
        "margin": toRem(2.5) + 'rem 0 ' + toRem(0.8) + 'rem 0',
        "line-height": "1.2em",
        "font-weight": "800"
      },
      '.absolute.middle-x': {
        'left': '50%',
        'transform': 'translateX(-50%)',
      },
      '.absolute.middle-y': {
        'top': '50%',
        'transform': 'translateY(-50%)',
      },
      '.absolute.middle': {
        'left': '50%',
        'top': '50%',
        'transform': 'translate(-50%, -50%)',
      },
      '.legend': {
        'color': settings.textColors.secondary['color']
      },
      'button, input, select, optgroup, textarea, textarea:focus-visible': {
        'outline': 'none',
        'appearance': 'none',
        'margin': '0',
        'cursor': 'inherit',
      },
      'button, input, select, optgroup, textarea': {
        'color': 'inherit',
        'font': 'inherit',
        'line-height': 'inherit'
      },
      'button': {
        'overflow': 'visible',
        'background': 'none',
        'border': 'none',
        'text-transform': 'none',
      },
      'button, select': {
        'text-transform': 'none',
      },
      'button, html input[type="button"], input[type="reset"], input[type="submit"]': {
        'width': 'auto',
        '-webkit-appearance': 'button',
        'cursor': 'pointer',
      },
      'button[disabled], html input[disabled]': {
        'cursor': 'default',
      },
      'button::-moz-focus-inner, input::-moz-focus-inner': {
        'border': '0',
        'padding': '0',
      },
      'input': {
        '-webkit-box-shadow': 'none',
        'box-shadow': 'none',
        'line-height': 'normal',
      },
      'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button': {
        'height': 'auto',
      },
      'input:focus': {
        'outline-style': 'none',
        'box-shadow': 'none',
      },
      'select::-ms-expand': {
        'display': 'none',
      },
      'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active': {
        'transition': 'background-color 5000s ease-in-out 0s',
      },
      'label, input, textarea, select': {
        'font-size': '{{fontSize.base}}',
        'box-sizing': 'border-box',
      },
      'select': {
        'background': `url('data:image/svg+xml;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iOSIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDkgMTciPgogICAgPHBhdGggZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMSAxMyAzLjUgM0w4IDEzTTEgNGwzLjUtM0w4IDQiLz4KPC9zdmc+Cg==') no-repeat calc(100% - 15px) calc(50% + 1px)`,
      },
      'select[multiple]': {
        'background-image': 'none',
      },
      'input, button, textarea, select, .inp-placeholder': {
        'border': '1px solid '+settings.border.primary['border-color'],
        'width': '{{width.full}}',
        'padding': toRem(1.5) + 'rem ' + toRem(1.5) + 'rem',
        'border-radius': settings.rounded,
        'background-color': '{{backgroundColor.white}}',
      },

      'textarea, select[multiple]': {
        'height': '130px',
      },
      'input:focus-visible, textarea:focus': {
        'background': settings.bgColors.light['background-color'],
      },
      'input[type="checkbox"], input[type="radio"]': {
        'width': '20px',
        'height': '20px',
        'margin-right': '5px',
        'display': 'block',
        'float': 'left',
        'padding': '0',
      },
      'input[type="checkbox"]': {
        'border-radius': '{{borderRadius.sm}}',
      },
      'input[type="radio"]': {
        'border-radius': '{{borderRadius.full}}',
      },
      'input[type="checkbox"]:checked,input[type="radio"]:checked': {
        'background-color': settings.bgColors.primary['background-color'],
      },
      'input[type="checkbox"]:checked': {
        'background': `${settings.bgColors.primary['background-color']} url('data:image/svg+xml;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEwIDkiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjYiIGQ9Ik0xIDUuMjY3IDMuNjEyIDcuNCA4LjMxNCAxIi8+Cjwvc3ZnPgo=') no-repeat center center`,
      },
      'input[type="radio"]:checked': {
        'background': `${settings.bgColors.primary['background-color']} url('data:image/svg+xml;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4Ij4KICAgIDxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHg9IjYiIHk9IjYiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgcng9IjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02IC02KSIvPgo8L3N2Zz4K') no-repeat center center`,
      },
      'select[multiple] option:checked, select[multiple]:focus option:checked': {
        'background-color': '{{backgroundColor.white}}',
        'background': '#115BB8 linear-gradient(0deg, #115BB8 0%, #115BB8 100%)',
      },
      '.group .wa-field-group-btn': {
        'border-radius': '{{borderRadius.full}}',
        'padding': toRem(0.5) + 'rem',
        'border': '1px solid '+settings.border.primary['border-color'],
        'background-color': '{{backgroundColor.white}}',
        'display': 'none'
      },
      '.group:hover .wa-field-group-btn': {
        'display': 'block'
      },
      '.wa-field-group-btn:hover': {
        'color': '{{backgroundColor.white}}',
        'background-color': settings.bgColors.primary['background-color'],
      },
      '.wa-field-group-btn.before': {
        'top': '-11px',
      },
      '.wa-field-group-btn.after': {
        'bottom': '-11px',
      },
      '.border': {
        'border': '1px solid '+settings.border.primary['border-color']
      },
      '.border-top': {
        'border-top': '1px solid '+settings.border.primary['border-color']
      },
      '.border-bottom,td,th': {
        'border-bottom': '1px solid '+settings.border.primary['border-color']
      },
      '.border-left': {
        'border-left': '1px solid '+settings.border.primary['border-color']
      },
      '.border-right': {
        'border-right': '1px solid '+settings.border.primary['border-color']
      },
      'table': {
        'width': '100%',
        'margin': toRem(2.5) + 'rem 0'
      },
      'td,th': {
        'text-align': 'left',
        'padding': toRem(1) + 'rem'
      }
    });


    buildFontFace();

    addBase(baseA);

    // Defualt Tag values
    addBase(addClass(settings.normalize));

    // Add componets
    addComponents(addClass(settings.headlines));
    addComponents(components);

    // Add Break points
    addUtilities(getBreakPoints());

    function getValue(val) {
      if(typeof val === "string" && val.indexOf(".") >= 0) {
        return theme(val);
      }
      return val;
    }

    function getScreen(key) {
      if(screens[key] !== undefined) {
        return (screens[key].max ?? screens[key]);
      }
      return false;
    }

    function getBreakPoint(key) {
      return `@media (max-width: ${getScreen(key)})`;
    }

    function addClass(object) {
      let classObj = {};
      for (let [key, value] of Object.entries(object)) {
        if(typeof value === "object") {
          const keys = Object.keys(value), sc = getScreen(key), isArr = Array.isArray(value);
          if((typeof value[keys[0]] === "object") && !sc) {
            for (let [k, v] of Object.entries(value)) {
              if(isArr) k = parseInt(k)+1;
              classObj[key+'-'+k] = addClass(v);
            }
          } else {
            if(sc) {
              key = getBreakPoint(key);
              if(breakPointClasses[key] !== undefined) {
                Object.assign(breakPointClasses[key], addClass(value));
              } else {
                breakPointClasses[key] = addClass(value);
              }

            } else {
              classObj[key] = addClass(value);
            }

          }
        } else {
          if(value !== false) {
            classObj[key] = renderMustache(value);
          }
        }
      }

      return classObj;
    }

    function padClassNames(data) {
      let newData = Array();
      for (let [key, value] of Object.entries(data)) {
        newData.push(key);
      }
      return newData.join(",");
    }

    function padClassArg(obj, prefix, suffix) {
      let newObj = {};
      prefix = (typeof prefix === "string" && prefix) ? "-"+prefix : "";
      suffix = (typeof suffix === "string" && suffix) ? "-"+suffix : "";

      for (let [k1, val1] of Object.entries(obj)) {
        newObj[k1] = {};
        for (let [k2, val2] of Object.entries(val1)) {
          newObj[k1][prefix+k2+suffix] = val2;
        }
      }
      return newObj;
    }

    function renderMustache(template) {
      return template.replace(/{{(.*?)}}/g, function(match, key) {
        const items = key.split('|');
        for(let i = 0; i < items.length; i++) {
          let item = theme(items[i].trim());
          if(item !== undefined) {
            return item;
          }
        }

        console.warn("Could not find any themes matching:", key);
        return '';
      });
    }

    function getBreakPoints() {
      let newObj = {},
        point = Object.keys(breakPointClasses).sort(function(a, b) {
          let matchesA = a.match(/(\d+)/), matchesB = b.match(/(\d+)/);;
          if (matchesB && matchesB) {
            return (parseInt(matchesA[0]) - parseInt(matchesB[0]))*-1;
          }
          return a > b;
        });

      for(let i = 0; i < point.length; i++) {
        newObj[point[i]] = breakPointClasses[point[i]];
      }
      return newObj;
    }

    function buildFontFace() {
      if(settings.fontFace.length > 0) {
        for(let i = 0; i < settings.fontFace.length; i++) {
          if(typeof settings.fontFace?.[i]?.['@font-face'] === "object") {
            addBase(settings.fontFace[i]);
          } else {
            addBase({
              '@font-face': settings.fontFace[i]
            });
          }
        }
      }
    }

    function pollyfillColors() {
      for (const [key, val] of Object.entries(settings.updateColorsInOnEmpty)) {
        if(typeof colors?.[key] === "object") {
          for (const [name, hex] of Object.entries(colors[key])) {
            if(!settings?.[val]?.[name]) {
              settings.bgColors[name] = {
                'color': "inherit",
                'background-color': hex,
                'border-color': hex
              }
            }
          }
        }
      }
    }


  }, {
    theme: {
      screens: {
        '2xl': {'max': '1536px'},
        'xl': {'max': '1280px'},
        'lg': {'max': '1024px'},
        'md': {'max': '768px'},
        'sm': {'max': '640px'},
        'xs': {'max': '480px'}
      },
      fontSize: {
        xs: toRem(1.4)+'rem',
        sm: toRem(1.6)+'rem',
        base: toRem(1.8)+'rem',
        lg: toRem(2.0)+'rem',
        xl: toRem(2.2)+'rem',
        '2xl': toRem(2.4)+'rem',
        '3xl': toRem(3.0)+'rem',
        '4xl': toRem(3.6)+'rem',
        '5xl': toRem(4.8)+'rem',
        '6xl': toRem(6)+'rem',
        '7xl': toRem(7.2)+'rem',
        '8xl': toRem(9.6)+'rem',
        '9xl': toRem(12.8)+'rem',
      },
      fontFamily: {
        sans:  setDefaultFontFamily(),
      },
      maxWidth: {
        '7xl': toRem(128)+'rem',
        '6xl': toRem(115.2)+'rem',
        '5xl': toRem(102.4)+'rem',
        '4xl': toRem(89.6)+'rem',
        '3xl': toRem(76.8)+'rem',
        '2xl': toRem(67.2)+'rem',
        'xl': toRem(57.6)+'rem',
        'lg': toRem(51.2)+'rem',
        'md': toRem(44.8)+'rem',
        'sm': toRem(38.4)+'rem',
        'xs': toRem(32)+'rem',
      },
      spacing: (typeof configs === "object" && configs?.normalizeSpacing ? spacing() : { ...defaultTheme.spacing })
    },
  });
}


const exported = { config };

module.exports = exported;
