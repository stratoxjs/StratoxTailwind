

# Stratox Tailwind CSS
**Stratox Tailwind** is a design system designed to make working with CSS and HTML both enjoyable and efficient. Built on top of Tailwind CSS, it combines the flexibility of a utility-first approach with a carefully organized layered structure. This layered system keeps the code minimal by loading only the Tailwind styles and semantic design system classes that your project actually uses. Here's how it's structured:

## Layered CSS Approach

1. **Base**  
   We apply some basic styles to raw HTML elements—things like default typography rules for headings and paragraphs, or default styling for form elements (`input`, `textarea`, etc.). This creates a consistent foundation across the site.

2. **Layout**  
   We use layout classes for high-level page structure. Classes like `.wrapper` or `.container` help define the overall layout without tying themselves to a specific component.

3. **Components**  
   We adopt BEM (Block–Element–Modifier) to name our UI building blocks. Examples might include `.card` for a generic card component or `.button` for various button styles. BEM helps us keep things predictable and ensures each component stays self-contained.

4. **Utilities**  
   We rely heavily on Tailwind’s utility classes here. These are single-purpose helpers—like `.text-center` or `.float-right`—and we sometimes add custom utilities if needed. Tailwind itself is configured to remove anything you don’t use in production, so your final CSS stays lean.

## Tailwind Integration

Our Tailwind plugin is set up so it only includes the parts of Startox that your project actually needs. If you never use a form, for example, the form-related styles won’t appear in your production CSS.

### [See all the elements here](https://wazabii.se/stratox-tailwind/)

## Installation

#### 1. Install the package
```
npm install @stratox/tailwind --save-dev
```

#### 2. Require the plugin package
Now you just have to require the `require('@stratox/tailwind');` plugin to the **tailwind.config.js** file.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [
        require('@stratox/tailwind').config({
        })
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
        require('@stratox/tailwind').config({
        })
    ],
}
```

### Normalize units
* Rem unit: You can normalize rem units by automatically recalculating them so that 1.5 rem equals 15 px, instead of the default 0.938 rem.
* Spacing: You can normalize Tailwind spacing by making it more consistent, starting from 1 to 360 for every spacing class, such as `padding-9`, `margin-300`, `gap-15`, and so on.
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [
        require('@stratox/tailwind').config({
            normalizeRemUnit: true,
            normalizeSpacing: true
        })
    ],
}
```

### Change grid from 12 to whatever
You can change the default 12 grid to whatever you like with:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [
        require('@stratox/tailwind').config({
            grid: 16 // default value is: 12
        })
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
        require('@stratox/tailwind').config({
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
        require('@stratox/tailwind').config({
            fontFamily: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
            fontFace: [
                {
                        'font-family': '"Open Sans"',
                        'src': 'url("fontface/opensans-bold-webfont.woff2") format("woff2")',
                        'font-weight': 'bold',
                        'font-style': 'normal',
                        'font-display': 'swap'
                },
                {
                        'font-family': '"Open Sans"',
                        'src': 'url("fontface/opensans-italic-webfont.woff2") format("woff2")',
                        'font-weight': 'normal',
                        'font-style': 'italic',
                        'font-display': 'swap'
                },
                {
                        'font-family': '"Open Sans"',
                        'src': 'url("fontface/opensans-regular-webfont.woff2") format("woff2")',
                        'font-weight': 'normal',
                        'font-style': 'normal',
                        'font-display': 'swap'
                }
            ]
        })
    ],
}
```
