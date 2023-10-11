//Q28.Write a program that checks if a given number is a perfect number

//Perfect number : the sum of its proper divisors equals the number itself.  

//6: 1,2,3 = 1+2+3 = 6 = true, 28, 496, 8128

function perfectNumber(inputNum){
    let sum = 0;
    for(let i = 0; i<inputNum; i++){
        if(inputNum % i === 0){
            sum +=i
        }
    }
        if(sum !== inputNum){
            return false;
        }

        return true;
 
}

console.log(perfectNumber(5))