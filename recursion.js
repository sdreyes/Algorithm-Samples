// Recursion problems from Colt Steele's "JavaScript Algorithms and Data Structures Masterclass"

// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.

let power = (base, x) => {
  if (x === 0) return 1;
  return base * power(base, x-1);
}

// console.log(power(2, 0)) // 1
// console.log(power(2, 2)) // 4
// console.log(power(2, 4)) // 16

// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g. factorial 4 (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.

let factorial = num => {
  if (num === 0) return 1;
  return num * factorial(num-1);
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

console.log(productOfArray([1, 2, 3])) // 6
console.log(productOfArray([1, 2, 3, 10])) // 60