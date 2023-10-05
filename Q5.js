//5.Write a function that return the reverse strings

function revStr(inputString){
    if(typeof inputString !== "string"){
        throw new Error("Only number are allowed");
    }
    let result = "";
    for(let i = inputString.length-1; i>=0; i--){
        result = result + inputString[i];
  
    }
    return result
}

 console.log(revStr("Suyog muley"));
console.log(revStr("Suyog muley form pune office"));