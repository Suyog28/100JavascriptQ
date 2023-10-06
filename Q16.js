//16. Write a function that calculate and prints the simple intrest on a loan amount

function simpleIntrest(principleAmount, intrestRatem, TimeDurationInYear){

    const result = (principleAmount*intrestRatem*TimeDurationInYear)/100;
    return result
}

console.log("Intrest Amount:", simpleIntrest(20000,8.755,5))