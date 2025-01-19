
const { toRem, spacing } = require('../helpers');

function generics(settings)  {

  return {
    'html': {
      'font-size': (settings.naturalCountScaling ? "10px" : 'inherit')
    },
    'body': {
      'font-size': toRem(1.8, settings.naturalCountScaling) + 'rem',
      'line-height': '150%',
      'color': settings.textColors.primary['color']
    },
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
      'margin': toRem(2.5, settings.naturalCountScaling) + 'rem 0',
    },
    'blockquote,pre': {
      'background-color': "{{colors.bg.light|backgroundColor.slate.100}}",
    },
    '.scroller,pre': {
      'overflow': 'auto',
      '-webkit-overflow-scrolling': 'touch',
    },
    'pre': {
      'padding': toRem(1.5, settings.naturalCountScaling) + 'rem',
    },
    'blockquote': {
      'border-left': "6px solid {{colors.bg.approve|backgroundColor.green.600}}",
      'padding': '' + toRem(5, settings.naturalCountScaling) + 'rem ' + toRem(3, settings.naturalCountScaling) + 'rem ' + toRem(3, settings.naturalCountScaling) + 'rem ' + toRem(5, settings.naturalCountScaling) + 'rem',
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
      'margin': '0 0 ' + toRem(1.5, settings.naturalCountScaling) + 'rem 0'
    },
    '.ingress,.ingress p': {
      'font-size': '{{fontSize.xl}}',
    },
    'label,figcaption': {
      'font-weight': 'bold',
      'display': 'block',
      'margin-bottom': toRem(0.4, settings.naturalCountScaling) + 'rem'
    },
    'label *': {
      'font-weight': 'normal',
    },
    'a': {
      'color': '{{colors.text.link|backgroundColor.blue.800}}'
    },
    'ul,ol': {
      'padding-left': toRem(3, settings.naturalCountScaling) + 'rem',
      'margin': toRem(2.5, settings.naturalCountScaling) + 'rem 0',
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
        'padding': toRem(5, settings.naturalCountScaling) + 'rem ' + toRem(1.5, settings.naturalCountScaling) + 'rem ' + toRem(2, settings.naturalCountScaling) + 'rem ' + toRem(2, settings.naturalCountScaling) + 'rem',
      },
    },
    'svg, svg path, svg circle, svg ellipse': {
      'vector-effect': 'non-scaling-stroke'
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
      'border': '1px solid ' + settings.border.primary['border-color'],
      'width': '{{width.full}}',
      'padding': toRem(1.5, settings.naturalCountScaling) + 'rem ' + toRem(1.5, settings.naturalCountScaling) + 'rem',
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
    'table': {
      'width': '100%',
      'margin': toRem(2.5, settings.naturalCountScaling) + 'rem 0'
    },
    'td,th': {
      'text-align': 'left',
      'padding': toRem(1, settings.naturalCountScaling) + 'rem'
    },
    '.legend': {
      'color': settings.textColors.secondary['color']
    }
  }
}

module.exports = generics;