// Write a function called same which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of the values must be the same.

same = (arrOne, arrTwo) => {
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

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 1], [1, 1, 4])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// This assumes the array is sorted.

sumZero = arr => {
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

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------