// ---------------------------------------------------------------------------------------
// Bubble Sort
// ---------------------------------------------------------------------------------------

let bubbleSort = arr => {
  for (let i = arr.length; i > 0; i--) {
    let done = true;
    for (let  j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp;
        done = false;
      }
    }
    if (done) return arr;
  }
  return arr;
}

console.log(bubbleSort([1,4,7,2,5,54,223,76,2,5,900,43]));

// ---------------------------------------------------------------------------------------
// Selection Sort
// ---------------------------------------------------------------------------------------

let selectionSort = arr => {
  // Store the first element as the smallest value you've seen so far.
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i+1; j < arr.length; j++) {
      // Compare this item to the next item in the array until you find a smaller number.
      if ( arr[j] < arr[min]) min = j
      // If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
    }
    // If the "minimum" is not the value (index) you initially began with, swap the two values.
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  // Repeat this with the next element until the array is sorted.
  return arr;
}

console.log(selectionSort([2,4,7,1,5,54,223,76,2,5,900,43]));

// ---------------------------------------------------------------------------------------
// Insertion Sort
// ---------------------------------------------------------------------------------------

let insertionSort = arr => {
  // Pick the second element in the array.
  for (let i = 1; i < arr.length; i++) {
    let currentNum = arr[i];
    // Compare the second element with the one before it and swap if necessary.
    for (var j = i-1; j >= 0 && currentNum < arr[j]; j--) {
      // continue to the next element, and if it is in the incorrect order, iterate through the sorted portion (the left side) to place the element in the correct place.
      arr[j+1] = arr[j];
    };
    arr[j+1] = currentNum;
  };
  return arr;
}

console.log(insertionSort([1,4,7,2,5,54,223,76,2,5,900,43]));

// ---------------------------------------------------------------------------------------
// Merge Sort
// ---------------------------------------------------------------------------------------

// Write a function to merge two arrays
let merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;
  // Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    };
  };
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  };
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  };
  // Once the array has been merged back together, return the merged and sorted array.
  return results;
}

// Break up the array into halves until you have arrays that are empty or have one element
let mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let midpoint = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midpoint));
  let right = mergeSort(arr.slice(midpoint));
  return merge(left, right);
}

console.log(mergeSort([1,4,7,2,5,54,223,76,2,5,900,43]));

// ---------------------------------------------------------------------------------------
// Quick Sort
// ---------------------------------------------------------------------------------------

// pivot takes in an array, the start index, and the end index

let pivot = (arr, startIdx, endIdx) => {
  // grab the pivot from the start of the array
  let pivotVal = arr[startIdx];
  // current pivot index will be the start index
  let pivotIdx = startIdx;


  // loop over the array from the start + 1 to the end
  for (let i = startIdx + 1; i <= endIdx; i++) {
    // if the pivot is greater than the current element
    // increment the pivot index
    if (pivotVal > arr[i]) {
      //swap current element with element at pivotIdx
      pivotIdx++;
      let temp = arr[i];
      arr[i] = arr[pivotIdx]
      arr[pivotIdx] = temp;
    }
  }
  // at the end of the loop, swap the pivot with the pivot index
  let temp = arr[pivotIdx];
  arr[pivotIdx] = pivotVal;
  arr[startIdx] = temp;
  // return the pivot index
  return pivotIdx;
}

// call the pivot helper on the array
// When the helper returns the updated pivot index, recursively call the pivot helper on the subarray to the left of that index and to the right of that index
// Base case is when the subarray is less than 2 elements

let quickSort = (arr, start=0, end=arr.length-1) => {
  if (start >= end) return arr;

  let pivotPoint = pivot(arr, start, end); // grabbing a pivot point to split the array in two

  quickSort(arr, start, pivotPoint - 1); // left
  quickSort(arr, pivotPoint + 1, end); // right
  return arr;
}

console.log(quickSort([1,4,7,2,5,54,223,76,2,5,900,43]));

// ---------------------------------------------------------------------------------------
// Radix Sort
// ---------------------------------------------------------------------------------------

// Helper functions: getDigit, digitCount, mostDigits

let getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

let digitCount = num => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

let mostDigits = nums => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

let radixSort = arr => {
  return arr;
}