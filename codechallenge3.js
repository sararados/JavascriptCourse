const Mark = {
    firstName: 'Mark',
    lastName: 'Milller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
       this.BMI = this.mass/this.height ** 2;
       return this.BMI;
    }
}

const John = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
       this.BMI = this.mass/this.height ** 2;
       return this.BMI;
    }
}

console.log(John.calcBMI());
console.log(Mark.calcBMI());

if(Mark.BMI > John.BMI) {

    console.log(`${Mark.firstName}'s BMI(${Mark.BMI}) is higher than ${John.firstName}'s BMI(${John.BMI})!`);
} else if (Mark.BMI < John.BMI) {
    console.log(`${John.firstName}'s BMI(${John.BMI}) is higher than ${Mark.firstName}'s BMI(${Mark.BMI})!`);
}