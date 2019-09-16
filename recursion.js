// Recursion problems from Colt Steele's "JavaScript Algorithms and Data Structures Masterclass"

// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.

let power = (base, x) => {
  if (x === 0) return 1;
  return base * power(base, x-1);
}

console.log(power(2, 0)) // 1
console.log(power(2, 2)) // 4
console.log(power(2, 4)) // 16