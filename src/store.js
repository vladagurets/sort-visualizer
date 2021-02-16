import { writable } from 'svelte/store'
import { getScreenInfo, generateRandomArray } from 'src/utils.js'
import { SORT_TYPE_OPTS } from 'src/constants.js'

const DEFAULT_ELEMENTS_COUNT = 50
const DEFAULT_MAX_ELEMENT_VALUE = 1000
const DEFAULT_DRAW_DELAY = 200

export const screenInfo = writable(getScreenInfo(DEFAULT_ELEMENTS_COUNT, DEFAULT_MAX_ELEMENT_VALUE))

export const canvas = writable(null)

export const dislayingArray = writable(generateRandomArray())
export const gameSettings = writable({
  drawDelay: DEFAULT_DRAW_DELAY,
  elementsCount: DEFAULT_ELEMENTS_COUNT,
  maxElementValue: DEFAULT_MAX_ELEMENT_VALUE,
  sortableArray: null,
  sortType: SORT_TYPE_OPTS[0].value,
  stepIndex: null
})

