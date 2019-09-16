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

// Refactored fib (solution from course):
// function fib(n){
//   if (n <= 2) return 1;
//   return fib(n-1) + fib(n-2);
// }

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465