// Recursion problems from Colt Steele's "JavaScript Algorithms and Data Structures Masterclass"

// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.

let power = (base, x) => {
  if (x === 0) return 1;
  return base * power(base, x - 1);
}

// console.log(power(2, 0)) // 1
// console.log(power(2, 2)) // 4
// console.log(power(2, 4)) // 16

// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g. factorial 4 (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.

let factorial = num => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(1)) // 1
// console.log(factorial(2)) // 2
// console.log(factorial(4)) // 24
// console.log(factorial(7)) // 5040

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

let productOfArray = arr => {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1, 2, 3])) // 6
// console.log(productOfArray([1, 2, 3, 10])) // 60

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

let recursiveRange = num => {
  if (num === 0) return 0;
  return (num + recursiveRange(num - 1));
}

// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55

// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

let fib = num => {
  let sequence = [1, 1];
  let helper = () => {
    if (sequence.length === num) return sequence[num - 1];
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return helper();
  }
  let result = helper();
  return result;
}

// console.log(fib(4)); // 3
// console.log(fib(10)); // 55
// console.log(fib(28)); // 317811
// console.log(fib(35)); // 9227465

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

let reverse = str => {
  let lastLetter = str[str.length - 1];
  if (str.length === 0) return "";
  return lastLetter + reverse(str.substring(0, str.length - 1));
}

// console.log(reverse("awesome")) // emosewa
// console.log(reverse("Shelby")) // yblehS

// Write a recursive function called isPalinfrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

let isPalindrome = str => {
  if (str.length <= 1) return true;
  if (str[0] === str[str.length - 1]) return isPalindrome(str.substring(1, str.length - 1));
  return false;
}

// console.log(isPalindrome("awesome")); // false
// console.log(isPalindrome("tacocat")); // true
// console.log(isPalindrome("amanaplanacanalpanama")); // true
// console.log(isPalindrome("amanaplanacanalpandemonium")); // false

// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. otherwise it returns false.

const isOdd = val => val % 2 !== 0;

const someRecursive = (arr, cb) => {
  if (arr.length === 0) return false;
  if (cb(arr[arr.length - 1])) return true;
  arr.pop();
  return someRecursive(arr, cb);
}

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false
// console.log(someRecursive([4, 6, 8], val => val > 10)); // false

// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened

const flatten = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]))
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
// console.log(flatten([[[[1], [[[3]]], [[[[[[3]]]]]]]]])); // [1, 2, 3]
// console.log(flatten([1, [2, 3, [4]]])); // [1, 2, 3, 4]