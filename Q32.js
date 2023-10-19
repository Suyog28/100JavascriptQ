//Q32.Tip Calculator - Write a program that calculate the tip amounts based on the bill total and percentages entered by the user.
//formula = percentage/100 * 1000;
function tipCalculator(amount, percentages){

    const result = [];
    for(let i =0; i< percentages.length; i++){
      let tipAmount = (percentages[i]/100)*amount

      const formatter = Intl.NumberFormat("en-In",{
        style:"currency",
        currency:"INR"
      })

      result.push(formatter.format(tipAmount))
    }
     return result;
}

const amount = 999;
const percentages = [5,10,15];

console.log(tipCalculator(amount,percentages));