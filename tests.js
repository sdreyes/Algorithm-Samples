// These functions are to be refactored to allow for user input in app production

// ---------------------------------------------------------------------------------------
// Divide and Conquer - Binary Search
// ---------------------------------------------------------------------------------------

// Given a SORTED array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

// Time Complexity - O(log(n))

let search = (arr, val) => {
  console.log(`Looking for the index of "${val}" out of [${arr}]...`);
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentVal = arr[middle];

    if (currentVal < val) {
      min = middle + 1;
    }
    else if (currentVal > val) {
      max = middle - 1;
    }
    else {
      return middle;
    };
  };
  return -1;
};

// console.log(search([1, 2, 3, 4, 5, 6], 4)); // returns 3
// console.log(search([1, 2, 3, 4, 5, 6], 6)); // returns 5
// console.log(search([1, 2, 3, 4, 5, 6], 11)); // returns -1

// ---------------------------------------------------------------------------------------
// Frequency Counter Pattern - Are There Duplicates?
// ---------------------------------------------------------------------------------------

// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Time complexity - O(n)
// Space complexity - O(n)

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

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates("a", "b", "c", "a")); // true

// ---------------------------------------------------------------------------------------
// Multiple Pointers - Average Pair
// ---------------------------------------------------------------------------------------

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Time complexity - O(n)
// Space complexity - O(1)

let averagePair = (arr, goal) => {
  let min = 0;
  let max = arr.length -1;
  while (min < max) {
    let avg = (arr[max] + arr[min]) / 2;
    if (avg === goal) {
      return true;
    }
    else if (avg > goal) {
      max--;
    }
    else {
      min++;
    };
  };
  return false;
};

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

// ---------------------------------------------------------------------------------------
// Multiple Pointers - isSubsequence
// ---------------------------------------------------------------------------------------

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, WITHOUT THEIR ORDER CHANGING.

// Complexity limitations: AT LEAST:
// Time Complexity - O(n + m)
// Space Complexity O(1)

let isSubsequence = (strOne, strTwo) => {
  let j = 0;
  for (let i = 0; i < strTwo.length; i++) {
    if (strTwo[i] === strOne[j]) j++;
  }
  if (j === strOne.length) return true;
  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)