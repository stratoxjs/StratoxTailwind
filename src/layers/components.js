
const { toRem, spacing } = require('../helpers');


function components(settings, getScreen) {

  return {

    'button, .c-button': {
      'width': 'auto',
      'cursor': 'pointer',
      'display': 'inline-block',
      'color': 'inherit',
      'line-height': '1.5em',
      'font-size': '{{fontSize.sm}}',
      'padding': toRem(1.2, settings.normalizeRemUnit) + 'rem ' + toRem(2.5, settings.normalizeRemUnit) + 'rem',
      'border-radius': settings.rounded,
      'box-sizing': 'border-box',
    },
    'button.c-button--md, .c-button--md': {
      'padding': toRem(0.8, settings.normalizeRemUnit) + 'rem ' + toRem(2, settings.normalizeRemUnit) + 'rem',
    },
    'button.c-button--sm, .c-button--sm': {
      'font-size': '{{fontSize.xs}}',
      'padding': toRem(0.8, settings.normalizeRemUnit) + 'rem ' + toRem(2, settings.normalizeRemUnit) + 'rem',
      'border-radius': '{{borderRadius.full}}',
    },
    'button:hover, .c-button:hover': {
      'background-image': 'linear-gradient(rgb(0 0 0/10%) 0 0)',
    }
  }
};

module.exports = components;