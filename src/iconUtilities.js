const fs = require('fs');
const path = require('path');
const encodedIconsDir = path.resolve(__dirname, './assets/encoded-icons');
const NodeCache = require('node-cache');
const packageJsonPath = path.resolve(__dirname, '../package.json');
const myCache = new NodeCache();
const cacheName = 'startox-icon-cache';

if (!fs.existsSync(encodedIconsDir)) {
  throw new Error(`Directory not found: ${encodedIconsDir}`);
}

/**
 * Export: returns a collection of icon class utilities
 * @param {object} settings
 * @param {object} colors
 * @param {string} addPrefix
 * @returns {*}
 */
function iconUtilities(settings, colors, addPrefix = "") {
  if (!myCache.has(getCacheName())) {
    myCache.set(getCacheName(), buildIconUtilities(settings, colors, addPrefix));
  }
  return myCache.get(getCacheName());
}

/**
 * Will return the current packages version
 * @returns {string|null}
 */
function getPackageJsonVersion() {
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    return packageJson.version || null;
  }
  throw new Error(`package.json not found at: ${packageJsonPath}`);
}

/**
 * Will add the theme icon colors to the icons
 * @param {object} colors
 * @param {function} call
 */
function addColorClasses(colors, call) {
  Object.entries(colors).forEach(([colorName, colorValue]) => {
    if(typeof colorValue === "object" && colorName === "icons") {
      Object.entries(colorValue).forEach(([colorN, colorV]) => {
        call(colorN, colorV);
      });
    } else if(typeof colorValue === "string") {
      call(colorName, colorValue);
    }
  })
}

/**
 * Will build icon utility classes
 * @param {object} settings
 * @param {object} colors
 * @param {string} addPrefix
 * @returns {*}
 */
function buildIconUtilities(settings, colors, addPrefix = "") {
  const prefix = (typeof addPrefix === "string") ? addPrefix : "";
  return fs.readdirSync(encodedIconsDir)
    .filter((file) => file.endsWith('.txt'))
    .reduce((classes, file) => {
      const iconName = path.basename(file, '.txt');
      const encodedSVG = fs.readFileSync(path.join(encodedIconsDir, file), 'utf8');
      addColorClasses(colors, (colorName, colorValue) => {
        const color = colorValue.startsWith("#") ? `%23${colorValue.replace('#', '')}` : colorValue;
        classes[`.${prefix}icon.${prefix}icon--${iconName}-${colorName}`] = {
          background: `url("${encodedSVG.replace(/%230F172A/g, color)}") no-repeat center center`,
          backgroundSize: 'contain'
        };
      });
      return classes;
    }, {});
}

/**
 * Will return the expected cache key name
 * @returns {string}
 */
function getCacheName() {
  return `${cacheName}-${getPackageJsonVersion()}`;
}


module.exports = iconUtilities;