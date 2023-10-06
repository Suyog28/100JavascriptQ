//17.Write a function that tells if the given number is prime or not

function primeChecked(number){
     const result = true;
    for(let i=2; i<number; i++){
        if(number % i === 0){
            result= false;
            break;
        } 
    }

    return result;
}

console.log(primeChecked(5))