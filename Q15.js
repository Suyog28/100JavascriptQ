//15.Write a function that calculates and return the average of a set of numbers.
//First Approch by myself
function averageOfGivenNumbers(numbers){
    // console.log( typeof numbers)
 const total = [...numbers].reduce((a,b)=> a+b)
 const avg = total/[...numbers].length
 console.log(avg)

}

//Online approch

function averageOfGivenNumbers1(numbers){
     let sum =0
    for(let i=0; i<numbers.length; i++){
    sum += numbers[i]

    }
 console.log(sum/numbers.length)
}


averageOfGivenNumbers([3,3,3,3868]);
averageOfGivenNumbers1([3,3,3,3868])