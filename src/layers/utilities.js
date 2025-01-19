const {toRem} = require("../helpers");

function utilities(settings) {


  function prefixClasses(prefix, styles) {
    const newObj = {};
    Object.entries(styles).forEach(([key, val]) => {
      newObj[prefix + "-" + key] = val;
    });
    return newObj;
  }

  return {
    '.border': {
      'border': '1px solid '+settings.border.primary['border-color']
    },
    '.border-top': {
      'border-top': '1px solid ' + settings.border.primary['border-color']
    },
    '.border-bottom,td,th': {
      'border-bottom': '1px solid ' + settings.border.primary['border-color']
    },
    '.border-left': {
      'border-left': '1px solid ' + settings.border.primary['border-color']
    },
    '.border-right': {
      'border-right': '1px solid ' + settings.border.primary['border-color']
    },
    ...prefixClasses('.border', settings.border),
    ...prefixClasses('.bg', settings.bgColors),
    ...prefixClasses('.text', settings.textColors),
    '.pt-default': {
      'padding-top': settings.padding,
    },
    '.pr-default': {
      'padding-right': settings.padding,
    },
    '.pb-default': {
      'padding-bottom': settings.padding,
    },
    '.pl-default': {
      'padding-left': settings.padding,
    },
    '.m-default': {
      'margin': settings.margin,
    },
    '.mt-default': {
      'margin-top': settings.margin,
    },
    '.mr-default': {
      'margin-right': settings.margin,
    },
    '.mb-default': {
      'margin-bottom': settings.margin,
    },
    '.ml-default': {
      'margin-left': settings.margin,
    },
    '.absolute-middle-x': {
      'left': '50%',
      'transform': 'translateX(-50%)',
    },
    '.absolute-middle-y': {
      'top': '50%',
      'transform': 'translateY(-50%)',
    },
    '.absolute-middle': {
      'left': '50%',
      'top': '50%',
      'transform': 'translate(-50%, -50%)',
    },
    '.flex-middle': {
      'align-items': 'center',
      'justify-content': 'center'
    },
    '.trans-primary': {
      'transition': 'all 500ms cubic-bezier(0.455, 0.030, 0.515, 0.955)'
    },
    '.trans-secondary': {
      'transition': 'all 300ms cubic-bezier(0.455, 0.030, 0.515, 0.955)'
    },
    '.trans-third': {
      'transition': 'all 150ms cubic-bezier(0.455, 0.030, 0.515, 0.955)'
    },
    '.trans-primary-out': {
      'transition': 'all 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940)'
    },
    '.trans-secondary-out': {
      'transition': 'all 300ms cubic-bezier(0.250, 0.460, 0.450, 0.940)'
    },
    '.trans-third-out': {
      'transition': 'all 150ms cubic-bezier(0.250, 0.460, 0.450, 0.940)'
    }
  }
}

module.exports = utilities;