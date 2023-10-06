//18.Write a function that counts and return the number of words in a sentence.

function sentence(userInput){

    const newSentence = userInput.split(' ');
    
  const result = newSentence.filter((element)=> element !== '');

 console.log(result.length)
    



}

sentence("Tiger is great living animal on planet    ");