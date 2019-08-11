// ---------------------------------------------------------------------------------------
// Divide and Conquer - Search
// ---------------------------------------------------------------------------------------

// Given a SORTED array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

// Binary search - Log(N) Time Complexity

let search = (arr, val) => {

  console.log(`Looking for the index of "${val}" out of [${arr}]...`)

  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    console.log(`(min + max) / 2 is ${(min+max)/2}`);
    let middle = Math.floor((min + max) / 2);
    console.log(`Floored is ${middle}`);
    let currentVal = arr[middle];

    if (currentVal < val) {
      min = middle + 1;
    }
    else if (currentVal > val) {
      min = max = middle - 1;
    }
    else {
      return middle;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // returns 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // returns 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // returns -1