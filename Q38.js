//Q38.Write a program that simulates rolling a dice.

function rollADice(sidesInDice) {
    return Math.floor(Math.random() * sidesInDice) + 1;
}

function multipleDice(numberOfDice, sidesInDice) {
    const result = [];
    let counter = 0
    while (counter < numberOfDice) {
        result.push(rollADice(sidesInDice))
        counter++;
    }
    return result;
}



console.log(multipleDice(2, 4));