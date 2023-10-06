//Q20.Write a program to swipe to two number 

function swapping(num1, num2){

    
    let num3 = num1
    num1 = num2
    num2 = num3

    return {num1, num2}

}

console.log(swapping(12,27))