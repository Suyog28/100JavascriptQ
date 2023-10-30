//Q42.Write a program rock, paper, Scissors game

const prompt = require("prompt-sync")();


let exit = false;

while (!exit) {
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    let userChoicePrompt = prompt("Enter your choice: 1.Press 1 for Rock,2.Press 2 for Paper,3.Press 3 for Scissors, 4.Press 4 for exists ");

    let userChoice = parseInt(userChoicePrompt);




    const rock = 1;
    const paper = 2;
    const scissors = 3;

    let name = {
        1: "Rock",
        2: "Paper",
        3: "Scissors"
    }

    console.log("Computer Choice: " + computerChoice + " " + name[computerChoice]);
    console.log("User Choice: " + userChoice + " " + name[userChoice]);
    if (userChoice < 1 || userChoice > 4 || userChoice === 4) {
        console.log("Invalid Choice");
        exit = true;
    }
    else if (computerChoice === userChoice) {
        console.log("Tie");
    } else if ((computerChoice == rock && userChoice == scissors) || (computerChoice == rock && userChoice == paper)
        || (computerChoice == scissors && userChoice == paper)) {
        console.log("Computer Wins");
    } else {
        console.log("User Wins");
    }
}
