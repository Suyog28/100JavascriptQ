  //Q.34 Write a program that checks if a given string of parentheses is balanced and well-formed
//[],{},() - Brackets 

const parentheses = {
    "{":"}",
    "[":"]",
    "(":")"
}

function balanceParentheses(backets){
    const parenthesesArray = [];
  for (let char of backets){
    //   console.log(char)
      
       if(parentheses[char]){
        parenthesesArray.push(char);
       } else if(char === ")" || char === "}" || char === "]"){
        let result = parenthesesArray.pop();
        if(parentheses[result] !== char){
            return false;
        }
       }
       
    } 

    return parenthesesArray.length === 0;
}




console.log(balanceParentheses("{}")); 