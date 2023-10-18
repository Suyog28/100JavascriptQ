//Q30. Write a program that checks if the provided password is strong or not

//Minimum 8 Charecter
//One Small Case charecter a-z
//One Big Case Charector A-Z
//One Number 0-9
//One Special Charecter - !@
//No-Regex

function strongPasswordChecker(passwordChecks){
    passwordChecks = passwordChecks.trim();

    if(passwordChecks.length < 8 ){
        return false;
    }
  
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const specialChar = "!@";

    let lowerChecked = false;
    let UpperCaseChecked = false;
    let numberChecked = false;
    let SpecialChecked = false;

    for(let char of passwordChecks){
        if(lowerCase.includes(char)){
            lowerChecked =true;
        } else if(UpperCase.includes(char) ){
            UpperCaseChecked = true
        } else if(number.includes(char)){
            numberChecked = true;
        }else if(specialChar.includes(char)){
            SpecialChecked = true
        }
    }

    if(lowerChecked && UpperCaseChecked && numberChecked && SpecialChecked ){
        return true;
    } 
return false;
}

console.log(strongPasswordChecker("Ashish1@"))