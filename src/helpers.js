/**
 * Check if is an object
 * @param target
 * @returns {boolean}
 */
function isObject(target) {
  return (target && typeof target === 'object');
}

/**
 * Convert rem units
 * @param unit
 * @param normalizeRemUnit
 * @returns {*|number}
 */
function toRem(unit, normalizeRemUnit) {
  return (normalizeRemUnit) ? unit : (Math.round((unit / 1.6) * 100) / 100);
}

/**
 * Convert rem unit spacing
 * @returns {{}}
 */
function spacing(normalizeRemUnit) {
  let i, index = 0, obj = {};
  for(i = 0; i <= 3000; i++) {
    obj[i] = toRem((i)/10, normalizeRemUnit)+"rem";
  }
  return obj;
}

/**
 * Will set default font, with fallabck
 * @param settings
 * @returns {string[]}
 */
function setDefaultFontFamily(settings) {
  if(settings.fontFamily.length > 0) {
    return settings.fontFamily;
  } else {
    const defaultFont = settings.fontFace[0]?.['@font-face']?.['font-family'];
    if(typeof defaultFont === "string") {
      return [defaultFont, 'Helvetica', 'Arial', 'sans-serif'];
    }
  }
  return ['Helvetica', 'Arial', 'sans-serif'];
}

/**
 * Deep merge 2 objects
 * @param target
 * @param source
 * @returns {*}
 */
function deepMerge(target, source) {
  if (!isObject(target) || !isObject(source)) {
    return source;
  }
  Object.keys(source).forEach(key => {
    const targetValue = target[key];
    const sourceValue = source[key];
    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = deepMerge(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });
  return target;
}

module.exports = { deepMerge, toRem, spacing, setDefaultFontFamily };