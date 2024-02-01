

# Stratox Tailwind CSS Theme
Stratox Tailwind theme is a Tailwind JavaScript CSS plugin theme, meaning it is super easy to install.

## Why Stratox Tailwind?
The Stratox tailwind theme includes well-designed UI components like forms, buttons, containers, and headlines. It enhances readability by simplifying rem unit conversion, making 1.5rem equal to 15px when using the theme.

## Installation

#### 1. Install the package
```
npm install @wazabii/stratoxtailwind --save-dev
```

#### 2. Require the plugin package
Now you just have to require the `require('@wazabii/stratoxtailwind');` plugin to the **tailwind.config.js** file.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
		extend: {},
	},
    plugins: [
        require('@wazabii/stratoxtailwind');
    ],
}
```
The theme has been installed!

## Configurations
Guide is not completed, more configs will come.

### Theme colors
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'bg': {
                    'primary': "#1E40AF",
                    'secondary': "#E2E8F0",
                    'light': "#F9F9F9",
                    'approve': '#17A355',
                    'error': '#D32E32',
                },
                'text': {
                    'primary': "#0F172B",
                    'secondary': "#47566C",
                    'link': '#1E40AF',
                    'approve': '#17A355',
                    'error': '#D32E32',
                },
                'border': {
                    'primary': "#CDD5E0",
                    'secondary': "#70A3F3",
                    'light': "#E3E8EF",
                    'approve': '#4CA054',
                    'error': '#8D2822'
                },
            }
        }
    },
    plugins: [
        require('@wazabii/stratoxtailwind');
    ],
}
```

### Default font
Set default font.
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
	    extend: {},
    },
    plugins: [
        require('../stratoxtailwind/src/index.js').settings({
	        fontFamily: ['Helvetica', 'Arial', 'sans-serif'],
        })
    ],
}

```
### Custom font with @font-face
Install a custom font with @font-face.
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
		extend: {},
	},
    plugins: [
        require('../stratoxtailwind/src/index.js').settings({
	        fontFamily: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
	        fontFace: [
                {
                    '@font-face': {
                        'font-family': '"Open Sans"',
                        'src': 'url("fontface/opensans-bold-webfont.woff2") format("woff2")',
                        'font-weight': 'bold',
                        'font-style': 'normal'
                    }
                },
                {
                    '@font-face': {
                        'font-family': '"Open Sans"',
                        'src': 'url("fontface/opensans-italic-webfont.woff2") format("woff2")',
                        'font-weight': 'normal',
                        'font-style': 'italic'
                    }
                },
                {
                    '@font-face': {
                        'font-family': '"Open Sans"',
                        'src': 'url("fontface/opensans-regular-webfont.woff2") format("woff2")',
                        'font-weight': 'normal',
                        'font-style': 'normal'
                    }
                }
            ]
        })
    ],
}
```
