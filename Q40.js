//Q40.Build a number guessing game where the computer provides hints like "too high" or "too low" to help the player guess the correct number

const prompt = require("prompt-sync")();

function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


function guessNumber() {
    let random = randomNumber();
    let guess = prompt("Guess a number between 1 and 100");
    let guesses = 0;

    while (guess != random) {
        guesses++;
        if (guess > random) {
            guess = prompt("Too high, guess again");
        } else {
            guess = prompt("Too low, guess again");
        }
    }

    prompt("Congratulations! You guessed the number " + random + " in  " + guesses + " guesses!");

    return guesses;

}

guessNumber();