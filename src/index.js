

let plugin, error;
try {
  plugin = require('tailwindcss/plugin');
} catch (err) {
  error = err;
}
const defaultTheme = require('tailwindcss/defaultTheme');
const { deepMerge, toRem, spacing, setDefaultFontFamily } = require('./helpers');
const iconUtilities = require('./iconUtilities');
const genericsClasses = require("./layers/generics");
const elementsClasses = require('./layers/elements');
const objectsClasses = require("./layers/objects");
const componentsClasses = require("./layers/components");
const utilitiesClasses = require('./layers/utilities');

function config(configs, pluginPackage) {

  const normRemUnit = configs?.naturalCountScaling;

  const settings = {
    // IF the e.g. color in theme bg does not exits in the config/settings bgColors then it will be pollyfilled.
    updateColorsInOnEmpty: {
      bg: 'bgColors',
      text: 'textColors',
      border: 'border'
    },
    grid: 12,
    rounded: '{{borderRadius.xl}}',
    padding: toRem(1.5, normRemUnit) + 'rem',
    margin: toRem(3, normRemUnit) + 'rem',
    fontFamily: [], // IF empty array, then it will take the first @font-face item family name!
    fontFace: [
    ],
    googleFont: [
    ],
    elements: null,
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
      {'padding': toRem(10.0, normRemUnit) + 'rem ' + toRem(6.0, normRemUnit) + "rem"},
      {'padding': toRem(6.0, normRemUnit) + 'rem ' + toRem(6.0, normRemUnit) + "rem"},
      {'padding': toRem(5.0, normRemUnit) + 'rem ' + toRem(3.0, normRemUnit) + "rem"},
      {'padding': toRem(3.0, normRemUnit) + 'rem ' + toRem(3.0, normRemUnit) + "rem"},
    ],
    "xl": [
      {'padding': toRem(8.0, normRemUnit) + 'rem ' + toRem(5.0, normRemUnit) + "rem"},
      {'padding': toRem(5.0, normRemUnit) + 'rem ' + toRem(5.0, normRemUnit) + "rem"},
      {'padding': toRem(5.0, normRemUnit) + 'rem ' + toRem(3.0, normRemUnit) + "rem"},
      {'padding': toRem(3.0, normRemUnit) + 'rem ' + toRem(3.0, normRemUnit) + "rem"},
    ],
    "lg": [
      {'padding': toRem(6.0, normRemUnit) + 'rem ' + toRem(3.0, normRemUnit) + "rem"},
      {'padding': toRem(5.0, normRemUnit) + 'rem ' + toRem(3.0, normRemUnit) + "rem"},
      {'padding': toRem(4.0, normRemUnit) + 'rem ' + toRem(3.0, normRemUnit) + "rem"},
      {'padding': toRem(3.0, normRemUnit) + 'rem ' + toRem(3.0, normRemUnit) + "rem"},
    ],
    "md": [
      {'padding': toRem(3.0, normRemUnit) + 'rem ' + toRem(1.5, normRemUnit) + "rem"},
      {'padding': toRem(3.0, normRemUnit) + 'rem ' + toRem(1.5, normRemUnit) + "rem"},
      {'padding': toRem(4.0, normRemUnit) + 'rem ' + toRem(1.5, normRemUnit) + "rem"},
      {'padding': toRem(3.0, normRemUnit) + 'rem ' + toRem(1.5, normRemUnit) + "rem"},
    ],
    "sm": [
      {'padding': toRem(3.0, normRemUnit) + 'rem ' + toRem(1.5, normRemUnit) + "rem"},
      {'padding': toRem(3.0, normRemUnit) + 'rem ' + toRem(1.5, normRemUnit) + "rem"},
      {'padding': toRem(3.0, normRemUnit) + 'rem ' + toRem(1.5, normRemUnit) + "rem"},
      {'padding': toRem(3.0, normRemUnit) + 'rem ' + toRem(1.5, normRemUnit) + "rem"},
    ]
  };

  deepMerge(settings, configs);

  let breakPointClasses = {};
  if(typeof pluginPackage === "function") {
    plugin = pluginPackage;
  } else {
    if(error) throw new Error(error);
  }

  return plugin(function ({addBase, addComponents, addUtilities, theme}) {
    const screens = theme('screens');
    const colors = theme('colors');

    pollyfillColors();
    buildFontFace();

    addBase(
      {
        ...addClass(genericsClasses(settings)),
        ...addClass((settings.elements && typeof settings.elements === "object") ? settings.elements : elementsClasses(settings))
      },
      {
        layer: 'base',
        respectPrefix: false
      }
    )

    addComponents(
      {
        ...addClass(objectsClasses(settings, getScreen)),
        ...addClass(componentsClasses(settings, getScreen)),
        ...iconUtilities(settings, colors, 'u-'),
        ...getBreakPoints()
      },
      {
        layer: 'components',
        respectPrefix: false
      }
    )

    addComponents(
      {
        ...addClass(utilitiesClasses(settings))
      },
      {
        layer: 'utilities'
      }
    );


    function getScreen(key) {
      if (screens[key] !== undefined) {
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
        if (typeof value === "object") {
          const keys = Object.keys(value), sc = getScreen(key), isArr = Array.isArray(value);
          if ((typeof value[keys[0]] === "object") && !sc) {
            for (let [k, v] of Object.entries(value)) {
              if (isArr) k = parseInt(k) + 1;
              classObj[key + '-' + k] = addClass(v);
            }
          } else {
            if (sc) {
              key = getBreakPoint(key);
              if (breakPointClasses[key] !== undefined) {
                Object.assign(breakPointClasses[key], addClass(value));
              } else {
                breakPointClasses[key] = addClass(value);
              }

            } else {
              classObj[key] = addClass(value);
            }

          }
        } else {
          if (value !== false) {
            classObj[key] = renderMustache(value);
          }
        }
      }
      return classObj;
    }

    function renderMustache(template) {
      return template.replace(/{{(.*?)}}/g, function (match, key) {
        const items = key.split('|');
        for (let i = 0; i < items.length; i++) {
          let item = theme(items[i].trim());
          if (item !== undefined) {
            return item;
          }
        }

        console.warn("Could not find any themes matching:", key);
        return '';
      });
    }

    function getBreakPoints() {
      let newObj = {},
        point = Object.keys(breakPointClasses).sort(function (a, b) {
          let matchesA = a.match(/(\d+)/), matchesB = b.match(/(\d+)/);
          ;
          if (matchesB && matchesB) {
            return (parseInt(matchesA[0]) - parseInt(matchesB[0])) * -1;
          }
          return a > b;
        });

      for (let i = 0; i < point.length; i++) {
        newObj[point[i]] = breakPointClasses[point[i]];
      }
      return newObj;
    }

    function buildFontFace() {
      if (settings.fontFace.length > 0) {
        for (let i = 0; i < settings.fontFace.length; i++) {
          if (typeof settings.fontFace?.[i]?.['@font-face'] === "object") {
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
        if (typeof colors?.[key] === "object") {
          for (const [name, hex] of Object.entries(colors[key])) {
            if (!settings?.[val]?.[name]) {
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
    prefix: 'u-',
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
        xs: toRem(1.4, normRemUnit) + 'rem',
        sm: toRem(1.6, normRemUnit) + 'rem',
        base: toRem(1.8, normRemUnit) + 'rem',
        lg: toRem(2.0, normRemUnit) + 'rem',
        xl: toRem(2.2, normRemUnit) + 'rem',
        '2xl': toRem(2.4, normRemUnit) + 'rem',
        '3xl': toRem(3.0, normRemUnit) + 'rem',
        '4xl': toRem(3.6, normRemUnit) + 'rem',
        '5xl': toRem(4.8, normRemUnit) + 'rem',
        '6xl': toRem(6, normRemUnit) + 'rem',
        '7xl': toRem(7.2, normRemUnit) + 'rem',
        '8xl': toRem(9.6, normRemUnit) + 'rem',
        '9xl': toRem(12.8, normRemUnit) + 'rem',
      },
      fontFamily: {
        sans: setDefaultFontFamily(settings),
      },
      maxWidth: {
        '7xl': toRem(128, normRemUnit) + 'rem',
        '6xl': toRem(115.2, normRemUnit) + 'rem',
        '5xl': toRem(102.4, normRemUnit) + 'rem',
        '4xl': toRem(89.6, normRemUnit) + 'rem',
        '3xl': toRem(76.8, normRemUnit) + 'rem',
        '2xl': toRem(67.2, normRemUnit) + 'rem',
        'xl': toRem(57.6, normRemUnit) + 'rem',
        'lg': toRem(51.2, normRemUnit) + 'rem',
        'md': toRem(44.8, normRemUnit) + 'rem',
        'sm': toRem(38.4, normRemUnit) + 'rem',
        'xs': toRem(32, normRemUnit) + 'rem',
      },
      spacing: (normRemUnit ? spacing(normRemUnit)  : {...defaultTheme.spacing})
    },
  });
}

const exported = { config };

module.exports = exported;
