import SortHelper from 'src/helpers/SortHelper.js'

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
  return new Array(size).fill().map(() => getRandomInt(1, max))
}

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

export function lazySort ({
  arrayStore,
  array,
  sortType,
  iterationDelay
}) {
  const sortHelper = new SortHelper(arrayStore, array, sortType, iterationDelay)
  sortHelper.sort()
}