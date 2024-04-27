#! usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    INR: 83.40,
    EUR: 0.93,
    GBP: 0.80,
    PKR: 280
};
let answer = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "Enter from currency",
        choices: ["USD", "INR", "EUR", "GBP", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter to currency",
        choices: ["USD", "INR", "EUR", "GBP", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount",
    }
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
