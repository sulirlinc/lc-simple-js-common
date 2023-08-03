/**
 * 防抖
 * @param obj
 * @param fun
 * @param options
 */
const useDebounce = (obj, fun, options) => {
  if (!obj || typeof fun !== 'function') {
    return;
  }
  const { debounceTime = 0 } = obj;
  const { interval = 500, param } = options || {};
  if (new Date().getTime() - debounceTime > interval) {
    obj.debounceTime = new Date().getTime();
    fun(param);
  }
}


const L = {
  useDebounce,
  replacePathLastSlash({ value = '', includeSlash = true }) {
    value = value.replace(/^([^|]+)(\/)$/g, '$1')
    return value + (includeSlash ? '/' : '')
  },
  removeLashSlash(value = '') {
    return L.replacePathLastSlash({ value, includeSlash: false })
  },
  addLashSlash(value = '') {
    return L.replacePathLastSlash({ value, includeSlash: true })
  },
  replacePathFirstSlash({ value = '', includeSlash = true }) {
    value = value.replace(/^(\/)([^|]+)$/g, '$2')
    return (includeSlash ? '/' : '') + value
  },
  removeFirstSlash(value = '') {
    return L.replacePathFirstSlash({ value, includeSlash: false })
  },
  addFirstSlash(value = '') {
    return L.replacePathFirstSlash({ value, includeSlash: true })
  },
  randomNumberValue(x = 10, y = 0) {
    const minValue = Math.min(x, y)
    const maxValue = Math.max(x, y)
    if (minValue === maxValue) {
      return minValue
    }
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  },
}

export { L }
