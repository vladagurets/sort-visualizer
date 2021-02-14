import { writable } from 'svelte/store'
import { getScreenInfo, generateRandomArray } from 'src/utils.js'

const DEFAULT_ELEMENTS_COUNT = 50
const DEFAULT_MAX_ELEMENT_VALUE = 150
const DEFAULT_DRAW_DELAY = 150

export const screenInfo = writable(getScreenInfo(DEFAULT_ELEMENTS_COUNT, DEFAULT_MAX_ELEMENT_VALUE))

export const canvas = writable(null)

export const array = writable(generateRandomArray())
export const sortType = writable(null)
export const elementsCount = writable(DEFAULT_ELEMENTS_COUNT)
export const maxElementValue = writable(DEFAULT_MAX_ELEMENT_VALUE)
export const drawDelay = writable(DEFAULT_DRAW_DELAY)

