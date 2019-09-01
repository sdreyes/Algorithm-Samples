let inquirer = require("inquirer");

exports.anagramInput = () => {
  console.log("\nGiven two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as CINEMA formed from ICEMAN.\n");
  inquirer.prompt([
    {
      type: "input",
      message: "Please enter the first word.",
      name: "strOne"
    },
    {
      type: "input",
      message: "Please enter the second word.",
      name: "strTwo"
    }
  ]).then(function (res) {
    console.log(`\nChecking if "${res.strOne}" is an anagram of "${res.strTwo}"...\n`);
    if (isAnagram(res.strOne, res.strTwo)) {
      console.log(`"${res.strOne}" IS an anagram of "${res.strTwo}"!! :)`)
    }
    else {
      console.log(`"${res.strOne}" is not an anagram of "${res.strTwo}". :(`)
    }
  });
}