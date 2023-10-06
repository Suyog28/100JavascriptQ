//14.Write a function that finds all the factors of a given number

//4:1 2 4 
//14: 1,2,7,14
//35

function factorOfGivenNum(number){
let factors = [];;
    for(let i = 0; i<=number ; i++){
        if(number % i === 0){
            factors.push(i)
        }
    }
 return factors;
}

console.log(factorOfGivenNum(35))

