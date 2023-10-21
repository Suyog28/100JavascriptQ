//Q36. Write a program that generates a random number

// function randomNumber(maxNumber) {

//     let result = parseInt(Math.random() * maxNumber + 1)
//     return result;

// }

// console.log(randomNumber(100));


//Random Number between min and max


function randomNumberBetween(minNumber, maxNumber) {

    let result = parseInt(Math.random() * (maxNumber - minNumber) + minNumber)


    let j = 0;
    while (j < 20) {
        console.log(parseInt(Math.random() * (maxNumber - minNumber) + minNumber))
        j++;
    }

    return result;
}

console.log(randomNumberBetween(100, 150));