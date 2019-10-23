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

console.log(linearSearch([1, 2, 3, 4, 5], 5)); // 4
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([1, 2, 3, 4, 5], 1)); // 0
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([9, 6, 7, 3, 54], 3)); // 3
console.log(linearSearch([9, 6, 7, 3, 54], 4)); // -1

