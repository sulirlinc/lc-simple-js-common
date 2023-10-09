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

const buildRandomCode = (length = 8,
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => {
  let result = ''
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

const buildRandomSymbolCode = (length) =>{
  return buildRandomCode(length,
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*.,')
}

/**
 * 日期格式化
 * @param date
 * @param format
 * @returns {void | string | *}
 */
const dateFormatter = (date, format) => {
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${ k })`).test(format)) {
      const str = o[k] + ''
      format = format.replace(RegExp.$1,
          (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return format
}

const L = {
  useDebounce,
  randomCode(length) {
    return buildRandomCode(length)
  },
  randomNumber(length){
    return buildRandomCode(length, '0123456789')
  },

  randomSymbolCode(length) {
    return buildRandomSymbolCode(length)
  },
  now: (arg = {}) => arg.format ? dateFormatter(new Date(), arg.format)
      : parseInt((new Date() / 1000) + ''),
  getCurrentDay: (arg = {}) => arg.format ? dateFormatter(
      new Date(new Date().toLocaleDateString()), arg.format) : parseInt(
      (new Date(new Date().toLocaleDateString()) / 1000) + ''),
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
