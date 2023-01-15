const bill =  430 //40 //275

const tip = bill <= 300  && bill >= 50 ? bill * 15/100 : bill * 20/100;

console.log(`The bill was ${bill} the tip was ${tip} and the total value was ${bill + tip}`);

