
const { toRem, spacing } = require('../helpers');

/**
 * Will create a grid after what grid is specified, defualt is 12 grid
 * @return {object}
 */
function buildGridCssObject(settings) {
  const grid = {
    '.o-grid': {
      'display': 'flex',
    },
    '.o-grid--fixed > *': {
      'flex-shrink': '0',
    }
  }
  for (let i = 1; i <= settings.grid; i++) {
    const width = Math.round(((100 / settings.grid) * i) * 1000) / 1000

    grid['.o-grid--span-' + i] = grid['.o-grid'];

    grid['.o-grid--span-' + i + ' > *'] = {
      width: +width + "%",
    };
    grid['.o-grip__col.o-grip__col--span-' + i] = {
      width: +width + "% !important",
    };
  }
  return grid;
}

function objects(settings, getScreen) {

  return {
    '.o-wrapper,.o-container': {
      'max-width': getScreen('2xl'),
    },
    '.o-wrapper': {
      'margin': '0 auto'
    },
    '.o-wrapper--xl,.o-container--xl': {
      'max-width': getScreen('xl')
    },
    '.o-wrapper--lg,.o-container--lg': {
      'max-width': getScreen('lg')
    },
    '.o-wrapper--md,.o-container--md': {
      'max-width': getScreen('md')
    },
    '.o-wrapper--sm,.o-container--sm': {
      'max-width': getScreen('sm')
    },
    '.o-wrapper--xs,.o-container--xs': {
      'max-width': getScreen('xs')
    },
    '.o-card': settings.spacing.DEFAULT,
    '.o-card-group': {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'align-items': 'center',
    },
    '.o-scroll-container': {
      'overflow': 'auto',
      'scroll-snap-type': 'x mandatory',
      'scrollbar-width': 'thin',
      'scrollbar-color': '#333 #fff',
    },
    '.o-scroll-container > *': {
      'scroll-snap-align': 'start'
    },
    '.o-scroll-container--hide-scrollbar::-webkit-scrollbar': {
      'display': 'none'
    },
    '.o-scroll-container--hide-scrollbar': {
      'scrollbar-width': 'none'
    },
    ...buildGridCssObject(settings),
    'xl': {
      '.o-card': settings.spacing.xl,
    },
    'lg': {
      '.o-card': settings.spacing.lg,
    },
    'md': {
      '.o-card': settings.spacing.md,
    },
    'sm': {
      '.o-card': settings.spacing.sm,
    },
  }
};

module.exports = objects;