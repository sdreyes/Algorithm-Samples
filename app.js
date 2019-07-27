let inquirer = require("inquirer");
require("./examples.js");

const anagramDescription = "Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as CINEMA formed from ICEMAN"

const squaredArrayDescription = "Write a function called same which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of the values must be the same."

const sumZeroDescription = "Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist."

function startApp() {
  inquirer.prompt([
    {
      type: "list",
      message: "Welcome to Shelby's Algorithm examples!\nWhich algorithm would you like me to demo?",
      choices: [
        "Anagrams (Counters)",
        "Squared Array (Counters)",
        "Sum Zero (Pointers)"
      ],
      name: "choice"
    }
  ]).then(function(res) {
    switch (res.choice) {
      case "Anagrams (Counters)":
        anagramInput();
        break;
      case "Squared Array (Counters)":
        squaredArrayInput();
        break;
      case "Sum Zero (Pointers)":
        sumZeroInput();
        break;
      default:
        console.log("Not a valid choice.");
        process.exit();
    }
  })
}

startApp();