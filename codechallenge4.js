const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52];
const tips = [];
const totals = [];

function calcTip(bill) {
    const tip = bill <= 300 && bill >= 50 ? bill * 15/100 : bill *  20/100;
  return tip;   // function to calculate the tip
}

for(let i = 0; i <bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = arr => {
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}
console.log(calcAverage(totals));
console.log(calcAverage(tips));