//Q41.Write a program that builds a very basic calculator 
//Create a basic calculator program that can perform addition, subtraction, multiplication, and division.

const prompt = require("prompt-sync")();

function calculator(a, b, operator) {

    switch (operator) {

        case "-":
            console.log(a - b);
            break;
        case "*":
            console.log(a * b);
            break;
        case "/":
            console.log(a / b);
            break;
        case '+':
            console.log(a + b);
            break;
        default:
            console.log("Invalid Operator");
    }


}

const a = prompt("Enter the First Number");

const b = prompt("Enter the Second Number");

const operator = prompt("Enter the Operator");

calculator(parseInt(a), parseInt(b), operator)

