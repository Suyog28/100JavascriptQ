//Q25.Write a program that checks if a given string is in alphabetical order or not

let a ,b ;

// console.log("A"<"b")
// console.log("a">"b")

function alphabeticalChecked(inputString){
     inputString = inputString.toLowerCase();
     let splitString = inputString.split('');
     for(let i=0; i<splitString.length -1 ; i++){
    //  console.log(inputString[i])
     if(inputString[i] > inputString[i+1]){
        return false
     }
     
  }
  return true;
}

console.log(alphabeticalChecked("abcde"))
console.log(alphabeticalChecked("adnsjb"))