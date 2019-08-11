let inquirer = require("inquirer");
require("./examples.js");
let input = require("./userInput.js");

startApp = () => {
  console.log("\nWelcome to Shelby's Algorithm examples!\n")
  inquirer.prompt([
    {
      type: "list",
      message: "Which algorithm would you like me to demo?",
      choices: [
        "Anagrams (Counters)"
        // "Squared Array (Counters)",
        // "Sum Zero (Pointers)"
      ],
      name: "choice"
    }
  ]).then(function(res) {
    switch (res.choice) {
      case "Anagrams (Counters)":
        input.anagramInput();
        break;
      case "Squared Array (Counters)":
        // input.squaredArrayInput();
        break;
      case "Sum Zero (Pointers)":
        // input.sumZeroInput();
        break;
      default:
        console.log("Not a valid choice.");
        process.exit();
    }
  })
}

startApp();