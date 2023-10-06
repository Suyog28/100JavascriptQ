//13.Write a function to find out vowels and consonants count in a string 
//Vowels - aeiou

function vowelsAndConsonantsFind(inputString){

    const upperCaseConvert = inputString.toUpperCase().replace(/ /g,'');
    const vowels = "AEIOU";
    const consonants = "BCDFGHJKLMNPQRSTVWXYZ"
   let vowelsCount = 0;
   let consonantsCount = 0;
    for(let i=0; i<=upperCaseConvert.length; i++){
      if(vowels.includes(upperCaseConvert[i])){
        vowelsCount++;
      } else if(consonants.includes(upperCaseConvert[i])){
        consonantsCount++;
      }
    }

    return {vowelsCount, consonantsCount}


}

console.log(vowelsAndConsonantsFind("Hello World world"))

