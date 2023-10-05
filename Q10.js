//10. Write a function that finds and prints the maximum element in an array of number

function maximumElement(arrayOfNumbers){
    if(!arrayOfNumbers || arrayOfNumbers.length === 0){
        throw new Error("We need some number in array")
    }
    const result =  arrayOfNumbers.reduce((a,b)=> {
        if(a > b){
            return a;
        } else{
            return b;
        }
     });
    return result;
    }
const arrayOfNumbers = [29,20,3,1110];

console.log(maximumElement(arrayOfNumbers));


function usingMathFunctionMax(arrayOfNumbers){
    const result = Math.max(...arrayOfNumbers);
    return result;
}

console.log(usingMathFunctionMax(arrayOfNumbers));
