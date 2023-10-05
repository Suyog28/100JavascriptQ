//6.Write a function that includes factorials of a given number

function factorialOfNum(number){
    if(number < 0){
        console.log("Pleas enter positive number:")
        throw new Error("Input number is positive")
    }
    let fact = 1;
for(let i=1; i<=number; i++){
    // console.log(i);
 fact = fact * i;
 
}
return fact;
}

console.log(factorialOfNum(5));


function recurusionFactorials(number){

    if(number < 0){
        console.log("Pleas enter positive number:")
        throw new Error("Input number is positive")
    }

    if(number === 0 || number === 1){
        return 1;
    }

    return number * recurusionFactorials(number -1);

  
}

console.log(recurusionFactorials(5));