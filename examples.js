// ---------------------------------------------------------------------------------------
// Frequency Counter Pattern - Anagrams
// ---------------------------------------------------------------------------------------

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as CINEMA formed from ICEMAN

isAnagram = (strOne, strTwo) => {
  if (typeof strOne === "string" && typeof strTwo === "string") {
    if (strOne.length !== strTwo.length) return false;
    let strCounter = {};
    for (let letter of strOne) {
      strCounter[letter] = ++strCounter[letter] || 1;
    }
    for (let letter of strTwo) {
      strCounter[letter]--;
    }
    for (let key in strCounter) {
      if (strCounter[key]) {
        return false;
      }
    }
    return true;
  }
  return null; 
}

console.log(isAnagram("", "")); // true
console.log(isAnagram("aaz", "zza")); // false
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("awesome", "awesom")) //false
console.log(isAnagram("qwerty", "qeywrt")); // true
console.log(isAnagram("texttwisttime", "timetwisttext")); // true
console.log(isAnagram(2, 3));

// ---------------------------------------------------------------------------------------
// Frequency Counter Pattern - Squared Numbers in an Array
// ---------------------------------------------------------------------------------------

// Write a function called same which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of the values must be the same.

same = (arrOne, arrTwo) => {
  console.log(`\nTrue or False: [ ${arrTwo} ] has all the values of [ ${arrOne} ] squared.`)

  let arrOneCount = {};
  let arrTwoCount = {};
  // Check frequencies of numbers in arrOne
  for (num of arrOne) {
    arrOneCount[num] = ++arrOneCount[num] || 1;
  }
  // Check frequencies of numbers in arrTwo
  for (num of arrTwo) {
    arrTwoCount[num] = ++arrTwoCount[num] || 1;
  }
  for (let i = 0; i < arrTwo.length; i++) {
    if (arrOneCount[arrOne[i]] !== arrTwoCount[arrOne[i] ** 2]) {
      return false;
    }
  }
  return true;
}

// same([1, 2, 3], [4, 1, 9]); // true
// same([1, 2, 1], [1, 1, 4]); // true
// same([1, 2, 3], [1, 9]); // false
// same([1, 2, 1], [4, 4, 1]); // false

// ---------------------------------------------------------------------------------------
// Multiple Pointers Pattern - Sum Zero
// ---------------------------------------------------------------------------------------

// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// This assumes the array is sorted.

sumZero = arr => {
  console.log(`\nGiven the array [ ${arr} ], return the first pair of integers that sum to zero.`)

  let pointerOne = 0;
  let pointerTwo = arr.length - 1;
  while (pointerOne < pointerTwo) {
    if (arr[pointerOne] + arr[pointerTwo] === 0) {
      return [arr[pointerOne], arr[pointerTwo]];
    }
    else if (arr[pointerOne] + arr[pointerTwo] < 0) {
      pointerOne++;
    }
    else {
      pointerTwo--;
    }
  }
}

// sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
// sumZero([-2, 0, 1, 3]); // undefined
// sumZero([1, 2, 3]); // undefined

// ---------------------------------------------------------------------------------------
// Multiple Pointers - Count Unique Values
// ---------------------------------------------------------------------------------------

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique vaules in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

// countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
// countUniqueValues([-2, -1, -1, 0, 1]) // 4
// countUniqueValues([]) // 0

function sameFrequency(numOne, numTwo){
  numOne = numOne.toString();
  numTwo = numTwo.toString();
  if (numOne.length !== numTwo.length) return false;
  let counter = {};
  for (let int of numOne) {
      counter[int] = ++counter[int] || 1;
  }
  for (let int of numTwo) {
      counter[int]--;
  }
  for (let key in counter) {
      if (counter[key]) {
          return false;
      }
  }
  return true;
}

// console.log(sameFrequency(14, 34));