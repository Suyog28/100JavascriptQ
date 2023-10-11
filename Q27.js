//Q27. Write a program that transposes a given matrix(swaps rows with coloums)
//Input: 2 dimentional array(Symantic Matrix) Output://Transposed Matrix

function twoDimentionalArray(InputArray){

    const numberOfRows = InputArray.length;
    const numberOfCols = InputArray[0].length;

      const result = [];

    for(let i=0; i<numberOfRows; i++){
      for(let j=0; j<numberOfCols; j++){

        if(!result[j]){
          result[j] = []
        }
        result[j][i]=InputArray[i][j]
      }
        
    }

    return result;

}

console.log(twoDimentionalArray([[2,3,4],
  [5,6,7]]))