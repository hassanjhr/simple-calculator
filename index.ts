#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondtNumber" },
  {
    message: "Select oe of the operatoer to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// Conditional Statement:
if (answer.operator === "Addition") {
  console.log(`Your value is ${answer.firstNumber + answer.secondtNumber}`);
} else if (answer.operator === "Subtraction") {
  console.log(`Your value is ${answer.firstNumber - answer.secondtNumber}`);
} else if (answer.operator === "Multiplication") {
  console.log(`Your value is ${answer.firstNumber * answer.secondtNumber}`);
} else if (answer.operator === "Division") {
  console.log(`Your value is ${answer.firstNumber / answer.secondtNumber}`);
} else {
  console.log("Please select valid operator");
}
