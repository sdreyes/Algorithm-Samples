// Linear Search (essentially indexOf method)

// Write a function that accepts an array and a value. Loop through the array and check if the currect array element is equal to the value. If it is, return the index at which the element is found. If the value is neverfound, return -1.

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// console.log(linearSearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(linearSearch([1, 2, 3, 4, 5], 1)); // 0
// console.log(linearSearch([100], 100)); // 0
// console.log(linearSearch([9, 6, 7, 3, 54], 3)); // 3
// console.log(linearSearch([9, 6, 7, 3, 54], 4)); // -1

// Binary Search

// Write a function that accepts a sorted array and a value
const binarySearch = (arr, val) => {

  // Create a left pointer at the start of the array, and a right pointer at the end of the array
  let left = 0;
  let right = arr.length - 1;
  // Create a pointer in the middle
  // While the left pointer comes before the right pointer
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // If you find the value you want, return the index
    if (arr[mid] === val) return mid;
    // If the value is too small, move the left pointer up
    else if (arr[mid] < val) left = mid + 1;
    // If the value is too large, move the right pointer down
    else right = mid - 1;
  }
  // If you never find the value, return -1
  return -1;
}

console.log(binarySearch([1, 2, 3, 4], 3)); // 2
console.log(binarySearch([1, 2, 4, 6, 9, 10, 14, 16, 17, 25, 55, 56], 3)); // -1
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1