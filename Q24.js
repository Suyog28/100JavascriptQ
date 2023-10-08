//Q24. Write a program to find out char count with in string

let countStr = {};

countStr.a = 1;


function charCount(inputString){
    inputString = inputString.toLowerCase();
    let result = {}
for(let i=0; i<inputString.length; i++){
    if(!result[inputString[i]]){
        result[inputString[i]] = 0
    }
    result[inputString[i]] =  result[inputString[i]] +1
}
console.log(result)
}

function usingReduce(inputString){
    inputString = inputString.toLowerCase();
    let splittedString = inputString.split('');
  const result=  splittedString.reduce((accu, current)=>{
      if(!accu[current]){
        accu[current] = 0;
      }
      accu[current] = accu[current]+1;
      return accu;
    },{})

 return  result
}
console.log(usingReduce("Suyog Muley"))
charCount("Suyog Muley")