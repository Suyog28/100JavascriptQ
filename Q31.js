//Q.31 Write a program that multiple two matrices and return the result

function multiplicationMatrices(array1, array2){
    const rowInResult = array1.length;
    const coloumsInResult = array2[0].length;
    const rowInSecondArray = array2.length;
    const result = [];

    for(let i = 0; i<rowInResult;i++){
        for(let j=0; j<coloumsInResult; j++){
            let cellValue = 0;
            for(let n=0; n<rowInSecondArray; n++){
                 cellValue = cellValue + array1[i][n] * array2[n][j];
                
            }

            if(!result[i]){
                result[i] = []
            }

            result[i][j] = cellValue;
        }
    }

    return result;

}

const array1 = [[1,2],[3,4]];
const array2 = [[5,6],[7,8]];
console.log(multiplicationMatrices(array1,array2))