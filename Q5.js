//5.Write a function that return the reverse strings

//Using reverse method
function reverse1Str(inputString){
    const inputStr = inputString.split('');
    const newArray = inputStr.reverse();
    const result = newArray.join("");
    console.log(result)
}

reverse1Str("Suyog Muley");


//Without reverse method

function reverseTheInput(inputString){
let result = ""
    for(let i = inputString.length-1; i>=0; i-- ){
      result = result +  inputString[i]
    }
   return result;
}

console.log(reverseTheInput("Suyog Muley"));
