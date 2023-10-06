//11.Write a function that return the result of raising a given number to a specified power 

//Input Two numbers : Base = 2 and Exponent = 3  means 2,3 : 2*2*2 = 8

function raisingNumber(base, exponent){
  
    //let result =  Math.pow(base,exponent)//Do not use
    let result = 1;
    for(let i = 1; i<=exponent; i++ ){
       result = result * base;
    }

return result;

}

console.log(raisingNumber(2,4))