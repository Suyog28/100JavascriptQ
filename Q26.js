//Q.26 Write a program if string is anagram  or not
//like cat,act or heart, earth, 

function anagramChecked(string1, string2){

    let str1 = {}
    let str2 = {}

    if(string1.length !== string2.length){
        return false;
    } 

   
    for(let i = 0; i<string1.length; i++){
        if(!str1[string1[i]]){
            str1[string1[i]] = 0
        } else {
            str1[string1[i]]= [str1[string1[i]] + 1]
        }
        
    }
    for(let i = 0; i<string2.length; i++){
        if(!str2[string2[i]]){
            str2[string2[i]] = 0
        } else {
            str2[string2[i]]= [str2[string2[i]] + 1]
        }
    }
 
        for(let key in str1){
            if(str1[key] !== str2[key]){
                return false;
            }
        }
    return true;
   
}

console.log(anagramChecked("cat","act"))
console.log(anagramChecked("pools","spool"))