//9.Write function that generate and prints a multplication table for a given number upto a specific range

function multplicationTable(num, range){
    for(let i = 2; i<=range; i++){
        console.log("table of: ", num +" "+ i*num) ;

    }
}

multplicationTable(2,10)