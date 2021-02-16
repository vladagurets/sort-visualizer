export const SORT_TYPE_QUICK = 'quick'
export const SORT_TYPE_BUBBLE = 'bubble'
export const SORT_TYPE_MERGE = 'merge'
export const SORT_TYPE_INSERT = 'insertion'

export const SORT_TYPE_OPTS = [
  { value: SORT_TYPE_QUICK, label: 'Quicksort' },
  { value: SORT_TYPE_BUBBLE, label: 'Bubble sort' },
  { value: SORT_TYPE_MERGE, label: 'Merge sort' },
  { value: SORT_TYPE_INSERT, label: 'Insertion sort' }
]

export const SELECTED_ELEMENT_STATUS = 's'
export const COMPARED_ELEMENT_STATUS = 'c'
export const DEFAULT_ELEMENT_STATUS = 'd'
export const PIVOT_ELEMENT_STATUS = 'p'

export const ELEMENT_COLORS_BY_STATUS = {
  [SELECTED_ELEMENT_STATUS]: '#4EDA8F',
  [COMPARED_ELEMENT_STATUS]: '#F2624F',
  [PIVOT_ELEMENT_STATUS]: '#33A9E0',
  [DEFAULT_ELEMENT_STATUS]: '#FBFBF2'
}

export const BASE_CHART_OPTS = {
  padding: 25,
  gridScale: 20,
  colors: {
    grid: '#5f5f5f',
    main: 'white'
  }
}