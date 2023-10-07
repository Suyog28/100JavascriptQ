//22.Write a program that prints number from 1 to n 

// replacing multiple of 3 with fizz
// Replacing multiple of 5 with Buzz
//Replacing multiple of 3&5 with FizzBuzz


function fizzBuzzPrinting(n){

    for(let i=1; i<=n; i++){
      if( i % 3 === 0 && i % 5 === 0)  {
        console.log("FizzBizz")
      }
      if(i % 3 === 0){
        console.log("fizz")
      } else if(i % 5 === 0) {
        console.log("Buzz")
      } else{
        console.log(i)
      }
     
    }
}
fizzBuzzPrinting(100);