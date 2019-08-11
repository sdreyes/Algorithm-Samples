// These functions are to be refactored to allow for user input in app production

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

// console.log(search([1, 2, 3, 4, 5, 6], 4)); // returns 3
// console.log(search([1, 2, 3, 4, 5, 6], 6)); // returns 5
// console.log(search([1, 2, 3, 4, 5, 6], 11)); // returns -1

// ---------------------------------------------------------------------------------------
// Frequency Counter Pattern - Are There Duplicates?
// ---------------------------------------------------------------------------------------

// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

let areThereDuplicates = (...args) => {
  let counter = {};
  for (let val of args) {
    if (counter[val]) {
      return true;
    }
    else {
      counter[val] = 1;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true