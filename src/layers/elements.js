
const { toRem, spacing } = require('../helpers');

function elements(settings) {

  return {
    'h1,h2,h3,h4,h5,h6,.display-1,.display-2,.headline-1,.headline-2,.headline-3,.headline-4,.headline-5,.headline-6': {
      "margin": toRem(2.5) + 'rem 0 ' + toRem(0.8) + 'rem 0',
      "line-height": "1.2em",
      "font-weight": "800"
    },
    '.display-1': {
      'font-size': '{{fontSize.8xl}}',
      'line-height': '1.0em',
      'margin': '0 0 ' + toRem(1.5, settings.normalizeRemUnit) + 'r, normRemUnitem 0'
    },
    '.display-2': {
      'font-size': '{{fontSize.7xl}}',
      'line-height': '1.0em',
      'margin': '0 0 ' + toRem(1.5, settings.normalizeRemUnit) + 'r, normRemUnitem 0'
    },
    'h1, .headline-1': {
      'font-size': '{{fontSize.6xl}}',
      'line-height': '1.0em',
      'margin': '0 0 ' + toRem(1.5, settings.normalizeRemUnit) + 'rem 0'
    },
    'h2, .headline-2': {
      'font-size': '{{fontSize.5xl}}',
    },
    'h3, .headline-3': {
      'font-size': '{{fontSize.3xl}}',
    },
    'h4, .headline-4': {
      'font-size': '{{fontSize.2xl}}',
    },
    'h5, .headline-5': {
      'font-size': '{{fontSize.xl}}',
    },
    'h6, .headline-6': {
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
      'h1, .headline-1': {
        'font-size': '{{fontSize.5xl}}',
      },
      'h2, .headline-2': {
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
      'h1, .headline-1': {
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
      'h1, .headline-1': {
        'font-size': '{{fontSize.4xl}}',
      },
      'h2, .headline-2': {
        'font-size': '{{fontSize.3xl}}',
      },
      'h3, .headline-3': {
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
      'h1, .headline-1': {
        'font-size': '{{fontSize.3xl}}',
      },
      'h2, .headline-2': {
        'font-size': '{{fontSize.3xl}}',
      },
      'h3, .headline-3': {
        'font-size': '{{fontSize.2xl}}',
      },
      'h6, .headline-6': {
        'font-size': '{{fontSize.xs}}',
      }
    }
  }
};

module.exports = elements;