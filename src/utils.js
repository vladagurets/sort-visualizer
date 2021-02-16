import { DEFAULT_ELEMENT_STATUS } from 'src/constants.js'

export function getScreenInfo() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: window.devicePixelRatio
  }
}

export function debounce (fn, delay) {
  let lastCall = null

  return function () {
    if (!lastCall || (+new Date() > lastCall + delay)) {
      fn(...arguments)
    }
    lastCall = +new Date()
  }
}

export function generateRandomArray (size = 50, max = 150) {
  return new Array(size).fill().map(() => ({
    value: getRandomInt(1, max),
    status: DEFAULT_ELEMENT_STATUS
  }))
}

export function getYAxisStep (max, rowsCount) {
  const stepSize = parseInt((max / rowsCount).toFixed(0))
  return Math.ceil(stepSize / 10) * 10
}

export function deepClone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}