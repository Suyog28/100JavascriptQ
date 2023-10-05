//11.Write a function that checks if a string is palindrome or not 

//example: madam, level, abba


function palindrome(inputString){
    const palString = inputString.toLowerCase();
     
    const str = palString.split('').reverse().join("");
   
 if(inputString === str){
    return true;
 } else {
    return false;
 }
    
}

console.log(palindrome("madam"))


function otherpalindrom(inputString){
    const lowerCaseString = inputString.toLowerCase();
    for(let i =0; i<=lowerCaseString.length/2; i++){
        if(lowerCaseString[i] !== lowerCaseString[lowerCaseString.length - 1 - i]){
            return false;
        }
    } 

    return true;
}


console.log(otherpalindrom("madam"));