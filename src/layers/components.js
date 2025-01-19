
const { toRem, spacing } = require('../helpers');


function components(settings, getScreen) {

  return {
    '.c-icon': {
      display: 'inline-block',
      width: toRem(2.4, settings.naturalCountScaling) + 'rem',
      height: toRem(2.4, settings.naturalCountScaling) + 'rem'
    },
    '.c-button': {
      'width': 'auto',
      'cursor': 'pointer',
      'display': 'inline-block',
      'color': 'inherit',
      'line-height': '1.5em',
      'font-size': '{{fontSize.sm}}',
      'padding': toRem(1.2, settings.naturalCountScaling) + 'rem ' + toRem(2.5, settings.naturalCountScaling) + 'rem',
      'border-radius': settings.rounded,
      'box-sizing': 'border-box',
    },
    '.c-button--md': {
      'padding': toRem(0.8, settings.naturalCountScaling) + 'rem ' + toRem(2, settings.naturalCountScaling) + 'rem',
    },
    '.c-button--sm': {
      'font-size': '{{fontSize.xs}}',
      'padding': toRem(0.8, settings.naturalCountScaling) + 'rem ' + toRem(2, settings.naturalCountScaling) + 'rem',
      'border-radius': '{{borderRadius.full}}',
    },
    '.c-button:hover': {
      'background-image': 'linear-gradient(rgb(0 0 0/10%) 0 0)',
    },
    '.c-slider__button': {
      'width': toRem(1.4, settings.naturalCountScaling) + 'rem ',
      'height': toRem(1.4, settings.naturalCountScaling) + 'rem ',
      'border': '1px solid {{colors.border.secondary}}',
      'background-color': '{{backgroundColor.white}}',
      'border-radius': '{{borderRadius.full}}'
    },
    '.c-slider__button.js-is-active': {
      'width': toRem(1.8, settings.naturalCountScaling) + 'rem ',
      'height': toRem(1.8, settings.naturalCountScaling) + 'rem ',
    }
  }
};

module.exports = components;