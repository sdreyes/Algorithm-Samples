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
  let final = strOne.length;
  for (let i = 0; i < strTwo.length; i++) {
    if (strOne[j] === strTwo[i]) {
      j++;
      if (j === final) {
        return true;
      }
    }
  }
  return false;
};

// console.log(isSubsequence("hello", "hello world")); // true
// console.log(isSubsequence("sing", "sting")); // true
// console.log(isSubsequence("abc", "abracadabra")); // true
// console.log(isSubsequence("abc", "acb")); // false (order matters)

let issSubsequence = (strOne, strTwo) => {
  let i = 0;
  let j = 0;
  if (!strOne) return true;
  while (j < strTwo.length) {
    if (strTwo[j] === strOne[i]) i++;
    if (i === strOne.length) return true;
    j++;
  }
  return false;
};

// console.log(issSubsequence("hello", "hello world")); // true
// console.log(issSubsequence("sing", "sting")); // true
// console.log(issSubsequence("abc", "abracadabra")); // true
// console.log(issSubsequence("abc", "acb")); // false (order matters)

// console.log(isSubsequence("hello", "hello world")); // true
// console.log(isSubsequence("sing", "sting")); // true
// console.log(isSubsequence("abc", "abracadabra")); // true
// console.log(isSubsequence("abc", "acb")); // false (order matters)

// ---------------------------------------------------------------------------------------
// Sliding Window - maxSubarraySum
// ---------------------------------------------------------------------------------------

// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of CONSECUTIVE elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// Time complexity: O(n)
// Space complexity: O(1)

let maxSubarraySum = (arr, len) => {
  if (len > arr.length) {
    return null;
  }
  let maxSum = 0;
  for (let i = 0; i < len; i++) {
    maxSum += arr[i];
  }
  let tempSum = maxSum;
  for (let j = len; j < arr.length; j++) {
    tempSum = tempSum + arr[j] - arr[j - len];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
} 

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5

// ---------------------------------------------------------------------------------------
// Sliding Window - minSubarrayLen
// ---------------------------------------------------------------------------------------

// Write a function called minSubarrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// Time Complexity = O(n)
// Space Complexity = O(1)

let minSubarrayLen = (arr, num) => {
  let minCount = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let pointer = i;
    let tempSum = 0;
    let currentCount = 0;
    while ((tempSum < num) && (pointer < arr.length)) {
      tempSum += arr[pointer];
      currentCount += 1;
      pointer += 1;
    }
    if (tempSum >= num) minCount = Math.min(currentCount, minCount);
  }
  if (minCount === Infinity) return 0;
  return minCount;
}


let minnSubarrayLength = (arr, num) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let minCount = Infinity;

  while (start < arr.length) {
    if (total < num && end < arr.length) {
      total += arr[end];
      end++;
    }
    else if (total >= sum) {
      minCount = Math.min(minCount, end-start);
      total -= arr[start];
      start++;
    }
    else {
      // if the total is still less than the target sum but the end is at the end is at the array length
      break;
    }
  }
  return minCount === Infinity ? 0 : minCount;
}

// console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4, 3] is the smallest subarray
// console.log(minSubarrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5, 4] is the smallest subarray
// console.log(minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
// console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

// ---------------------------------------------------------------------------------------
// Sliding Window - findLongestSubstring
// ---------------------------------------------------------------------------------------

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

let findLongestSubstring = str => {
  let counts = {};
  let p1 = 0;
  let p2 = 0;
  let longest = 0;
  while (p1 < str.length) {
    // if str[p2] is in counts, 
    if (counts[str[p2]] || p2 === str.length) {
      // temp = p2 - p1 + 1
      let temp = p2 - p1;
      // if temp is greater than longest, set longest to temp
      longest = Math.max(temp, longest);
      //p1++ AND p2 = p1 AND counts = {}
      p1++;
      p2 = p1;
      // console.log(counts);
      counts = {};
      // console.log("\n----COUNTS RESET----\n");
    }
    // else counts[str[p2]] = 1 and p2++
    else {
      counts[str[p2]] = 1;
      p2++;
    }
  }
  return longest;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6