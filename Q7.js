//7. Write a function to given year is leap year or not

function leapYear(inputYear){
    // if(inputYear % 4 ===0){
    //     console.log("This is leap year:", inputYear);
    // } else{
    //     console.log("Not a leap Year");
    // }

//    const result = (inputYear % 4 ===0 ) ? true :false
//    return result;

return inputYear %  4 === 0 
}

console.log(leapYear(2024))

