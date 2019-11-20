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

// console.log(bubbleSort([1,4,7,2,5,54,223,76,2,5,900,43]));

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