//3. find smallest number 

function smallestNumber(a, b, c){
 
//    return (a<b) ? a: b 

   if(a<b && a<c){
    return a;
   } else if(b < a && b < c){
    return b;
   }

   return c;

}

console.log("This is the smallest Number", smallestNumber(3,-16, 1));