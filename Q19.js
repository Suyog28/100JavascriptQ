//Q19.Write a function that converts a tempeture in celsius

function tempConvertCelsius(userInput){
    const resutl = (userInput * (9/5))+32;
    return resutl;
}

console.log(tempConvertCelsius(27));