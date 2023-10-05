//6.Write a function that includes factorials of a given number

function factorialOfNum(number){
    if(number < 0){
        console.log("Pleas enter positive number:")
        throw new Error("Input number is positive")
    }
    let fact = 1;
for(let i=1; i<=number; i++){
    console.log(i);
 fact = fact * i;
 
}
return fact;
}

console.log(factorialOfNum("a"));
