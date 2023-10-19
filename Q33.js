//Q33. Write a program to find and count all pallindromic substrings within a given string

function pallindrom(inputString){

    inputString = inputString.toLowerCase();
  
    const reverseString = inputString.split('').reverse().join("")
    
   if(inputString === reverseString){
    return true
   }
    
    return false;


}


function palindromeSubString(inputString){
 //console.log(inputString.slice(1,4))

 const result = [];
    for(let i=0; i<inputString.length; i++){
        for(let j= i+1; j<=inputString.length; j++){

            const subString = inputString.slice(i,j)

            if(pallindrom(subString) && subString.length > 1){
            result.push(subString);
            }
        }
    }

    return result;

}

console.log(palindromeSubString("madam"))
console.log(palindromeSubString("radar"))
console.log(palindromeSubString("radarmadam"))