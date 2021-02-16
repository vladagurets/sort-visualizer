import {
  SORT_TYPE_QUICK,
  SORT_TYPE_BUBBLE,
  SELECTED_ELEMENT_STATUS,
  COMPARED_ELEMENT_STATUS,
  DEFAULT_ELEMENT_STATUS,
  PIVOT_ELEMENT_STATUS
} from 'src/constants.js'
import { deepClone } from 'src/utils.js'

export default class SortableArray {
  constructor (array, sortType) {
    if (!array) throw new Error('Provide array')
    if (!sortType) throw new Error('Provide sortType')

    this.array = array
    this.sortedArray = null
    this.sortType = sortType
    this.history = []

    this.sort()
  }

  sort = () => {
    if (this[this.sortType]) {
      this[this.sortType]()
    } else {
      throw new Error('Provide correct sortType', this.sortType)
    }
  }

  bubble = () => {
    const arr = deepClone(this.array)

    for (let i = 1; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i; j++) {
        this.markMany(arr, [
          { index: j + 1, status: COMPARED_ELEMENT_STATUS },
          { index: j, status: SELECTED_ELEMENT_STATUS }
        ])

        if (arr[j + 1].value < arr[j].value) {
          ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

          this.markMany(arr, [
            { index: j + 1, status: SELECTED_ELEMENT_STATUS },
            { index: j, status: COMPARED_ELEMENT_STATUS }
          ])
        }
      }

      this.saveStep(arr)
    }

    this.saveSortedArray(arr)
  }

  quick = () => {
    const arr = deepClone(this.array)

    // Creating an array that we'll use as a stack, using the push() and pop() functions
    const stack = []
    
    // Adding the entire initial array as an "unsorted subarray"
    stack.push(0);
    stack.push(arr.length - 1)
    
    // There isn't an explicit peek() function
    // The loop repeats as long as we have unsorted subarrays
    while(stack[stack.length - 1] >= 0) {
      // Extracting the top unsorted subarray
      const end = stack.pop()
      const start = stack.pop()
        
      const pivotIndex = this.partition(arr, start, end)
      
      // If there are unsorted elements to the "left" of the pivot,
      // we add that subarray to the stack so we can sort it later
      if (pivotIndex - 1 > start){
        stack.push(start);
        stack.push(pivotIndex - 1)
      }
        
      // If there are unsorted elements to the "right" of the pivot,
      // we add that subarray to the stack so we can sort it later
      if (pivotIndex + 1 < end){
        stack.push(pivotIndex + 1)
        stack.push(end);
      }

      this.saveStep(arr)
    }

    this.saveSortedArray(arr)
  }

  markMany = (arr, elements) => {
    const clone = deepClone(arr)
    for (const el of elements) {
      clone[el.index].status = el.status
    }
    this.saveStep(clone)
  }

  saveSortedArray = arr => {
    this.sortedArray = deepClone(arr)
  }

  saveStep = arr => {
    this.history.push(deepClone(arr))
  }

  partition = (arr, start, end) => {
    // Taking the last element as the pivot
    const pivotEl = arr[end];

    let pivotIndex = start

    for (let i = start; i < end; i++) {
      
      this.markMany(arr, [
        { index: end, status: PIVOT_ELEMENT_STATUS },
        { index: pivotIndex, status: COMPARED_ELEMENT_STATUS },
        { index: i, status: SELECTED_ELEMENT_STATUS }
      ])
  
      if (arr[i].value < pivotEl.value) {
        // Swapping elements
        ;[arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]

        this.markMany(arr, [
          { index: end, status: PIVOT_ELEMENT_STATUS },
          { index: pivotIndex, status: SELECTED_ELEMENT_STATUS },
          { index: i, status: COMPARED_ELEMENT_STATUS }
        ])

        // Moving to next element
        pivotIndex++
      }
    }

    ;[arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]

    return pivotIndex
  }
}