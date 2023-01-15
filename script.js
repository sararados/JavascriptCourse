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

const inputYear = ' 1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear ) + 18 );

console.log(Number('sara'));

console.log(String(23), 23);

console.log('I am' + 23 + 'years old');


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Sara'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;

if(money) {
    console.log('Dont spend it all:');
} else {
    console.log('You should get a job!');
}

let height = 123;
if(height) {
    console.log('Yay! Height is defined');
} else {
    console.log('Height is undefined');
}

const age = 10;
if(age === 18) console.log('You just became an adult');

const favorite = Number(prompt('Whats your favorite number?'));

console.log(favorite);
console.log(typeof favorite);

if(favorite == 23){
    console.log('cool! 23 is an amazing number!');
} else if (favorite === 7){
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}
if(favorite !== 23)console.log('why not 23?');


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive){
    console.log('sarah is able to drive')
} else {
    console.log('someone else should be driving....')
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('sarah is able to drive')
} else {
    console.log('someone else should be driving....')
}

const day = 'thursday';

switch(day){
    case 'monday':
        console.log('Plan course struccture');
        console.log('Go to code meetup');
        break;
    case 'tuesday':
        console.log('prepare video');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('programming');
        break;
    case 'friday':
        console.log('Record video');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy weekend');
        break;
    default:
        console.log('not a valid day');
}

const age = 23;
age >= 18 ? console.log('I like to drink wine'):console.log('I like to drink wine');

const drink = age >= 18 ? 'wine': 'water';
console.log(drink);

let drink2;
if(age >= 18){
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine': 'water'}`); // templete literal
*/

