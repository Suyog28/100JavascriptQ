//Q.21 Write a function to find given number is amstrong number or not

//153 = (1^3)+(5^3)+(3^3)=153
//370 = 

function amstrongNumber(numberInput){
   let numberStr = []
   let number = numberInput;
   while(number > 0){
      let lastnumber = number % 10;
       number = Math.floor(number/10)
      numberStr.push(lastnumber)
   }
    let len = numberStr.length;
     let sum = 0 ;
     numberStr.forEach(e=> {  sum += Math.pow(e,len)}
     )
     if(sum === numberInput){
      return true;
     }
     return false
   }


console.log(amstrongNumber(153))