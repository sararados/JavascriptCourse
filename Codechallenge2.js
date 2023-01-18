const bills = [125, 555, 44];


function calcTip(bill) {
    
    const tip = bill <= 300 && bill >= 50 ? bill * 15/100 : bill * 20/100;
    return tip;
}

console.log(calcTip(bills[0]));
console.log(calcTip(bills[1]));
console.log(calcTip(bills[2]));

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const totals = [`The bill was ${bills[0]} the tip was ${calcTip(bills[0])} and the total value was ${bills[0] + calcTip(bills[0])}`];

console.log(totals);

/*
// Jonas answer:

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0]];

console.log(totals);

*/