import { SORT_TYPE_QUICK, SORT_TYPE_BUBBLE } from 'src/constants.js'

export default class SortHelper {
  constructor (store, array, sortType, iterationDelay) {
    if (!store) throw new Error('Provide store')
    if (!array) throw new Error('Provide array')
    if (!sortType) throw new Error('Provide sortType')
    if (!iterationDelay) throw new Error('Provide iterationDelay')

    this.arrayStore = store
    this.array = array
    this.sortType = sortType
    this.iterationDelay = iterationDelay
  }

  sort = () => {
    if (this[SORT_TYPE_QUICK]) {
      this[SORT_TYPE_QUICK]()
    } else {
      throw new Error('Provide correct sortType', this.sortType)
    }
  }

  promisedTimeout = cb => {
    return new Promise(resolve => setTimeout(() => {
      cb()
      resolve()
    }, this.iterationDelay))
  }

  quick = async () => {
    const arr = [...this.array]

    // Creating an array that we'll use as a stack, using the push() and pop() functions
    const stack = [];
    
    // Adding the entire initial array as an "unsorted subarray"
    stack.push(0);
    stack.push(arr.length - 1);
    
    // There isn't an explicit peek() function
    // The loop repeats as long as we have unsorted subarrays
    while(stack[stack.length - 1] >= 0) {
      await this.promisedTimeout(() => {
        // Extracting the top unsorted subarray
        const end = stack.pop();
        const start = stack.pop();
          
        const pivotIndex = partition(arr, start, end);
        
        // If there are unsorted elements to the "left" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex - 1 > start){
          stack.push(start);
          stack.push(pivotIndex - 1);
        }
          
        // If there are unsorted elements to the "right" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex + 1 < end){
          stack.push(pivotIndex + 1);
          stack.push(end);
        }

        this.arrayStore.set(arr)
      })
    }
  }
}

function partition(arr, start, end){
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start; 
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }
  
  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
  return pivotIndex;
}