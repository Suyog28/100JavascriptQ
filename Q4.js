//4. Write a code to find number is odd or even  

function oddEvenNumChecked(num){
   
if(typeof num !== Number){
    console.log("Only Number is allowed")
}
    if(num % 2 == 0 ){
        console.log("number is even:", num);
    } else{
        console.log("number is odd:", num);
    }
}

oddEvenNumChecked("a");