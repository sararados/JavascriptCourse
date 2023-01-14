/*
const birthYear = 1976;
//birthYear = 1980;

var job = 'programmer';
job = 'teacher';

lastName = 'Rados';
console.log(lastName);


const now = 2037;
const ageSara = now - 1976;
const ageJesper = now - 1974;
console.log(ageSara, ageJesper);

console.log(ageSara *2, ageJesper / 10 , 2**3 );

const firstName = 'Sara';
console.log(firstName + ' ' + lastName);

// assignment operators

let x = 10 + 5; //15
x += 10; // x = x + 10 =25
x *=4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--;
x--;
console.log(x);

// comparison operators

console.log(ageJesper > ageSara);  // >, < , >=, <=
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;

console.log(now - 1974 > now - 1976)


const now = 2037;
const ageSara = now - 1991;
const ageJesper = now - 2018;

console.log(now - 1991 > now - 2018)

console.log(25 - 10 -5);

let x, y;
x = y = 25 - 10 - 5; // x= y = 10, x = 10; 
console.log(x,y);

const averageAge = (ageSara + ageJesper)/2
console.log(ageSara, ageJesper, averageAge);

const firstName = 'Sara';
const job = 'programmer';
const birthYear = 1976;
const year = 2037;

const sara = 'Im ' + firstName + ',a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(sara);

const saraNew = `I'm ${firstName}, a ${year-birthYear} year old ${job} !`;
console.log(saraNew);

console.log(`Just a regular string ....`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String 
multiple 
lines`);
*/

const age = 15;


if (age >= 18){
    console.log('Sara can start driving license 😊');
} else {
    const yearsLeft = 18 - age;
    console.log(`sara is too young. Wait another ${yearsLeft} years : ) `);
}

const birthYear = 2012;
let century;

if(birthYear <= 2000) {
   century = 20;
} else {
    century = 21;
}
console.log(century);