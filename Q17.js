//17.Write a function that tells if the given number is prime or not

function primeChecked(number){
     let result = true;
    for(let i=2; i<number; i++){
        if(number % i === 0){
            result= false;
            break;
        } 
    }

    return result;
}

console.log(primeChecked(4))

function diffrentMethodPrimeOrNot(number){
    let result = true;
    if(number % 2 === 0){
     result = false;
    }
if(result === true){
        for(let i=3; i<number; i= i+2){
            if(number % i === 0){
                result = false;
                break;
            }
        }
       
    }
    return result;
}

console.log(diffrentMethodPrimeOrNot(4))
 