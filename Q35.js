//Q.35 Write a program that finds all occurrences of a given word in a big string.

function findOccurrence(bigString, word){
   
  
    let result = [];
    let index = bigString.indexOf(word);
   
    while(index !== -1){
        result.push(index)
        index = bigString.indexOf(word,index+1)
    }
    return result
   }

  


console.log(findOccurrence("This is a big string with the word big repeated in the big string.", "big"))