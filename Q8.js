//8. write a function that calculate the sum of the digit of given number 

// Number => 12 => 1 + 2 = 3

function sumOfGivenNumerDigit(number){

    if(number < 1){
        throw new Error ("Number should be Positive");
    }
    const newArrayOfNumber = [];
    let result = number.toString().split('');
    for (let i = 0 ; i< result.length; i++){
        newArrayOfNumber.push(parseInt(result[i]));
    }
    const final = newArrayOfNumber.reduce((a,b)=> a+b)
    return final;
}

console.log(sumOfGivenNumerDigit(12))


// const numbers= [1,2,3,3,4].reduce((a,b)=> a+b)

// console.log(numbers)

