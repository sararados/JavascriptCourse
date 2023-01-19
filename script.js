'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense)console.log('i can drive');

//const interface = ' Audio';
// const private = 534;

function logger(){
    console.log('my name is sara');
}

logger();

function fruitProcessor(apples, oranges){
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
fruitProcessor(5,0);

const applejuice = fruitProcessor(5,0);
console.log(applejuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);


function calcAge1(birthYear) {
   return 2037-birthYear;   //function declaration
}

const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2037-birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);


const calcAge3 = birthYear => 2037 - birthYear;

const age3 =calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear , firstName ) => {
    const age = 2037 -birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'sara'));


function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}
console.log(fruitProcessor(2,3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const yearsUntilRetirement = function(birthYear , firstName ) {
    const age = calcAge(birthYear);
    const retirement = 65 -age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
        
    } else {
        console.log(`${firstName} has already retired`);
        return -1;

    }

}
console.log(yearsUntilRetirement(1991, 'sara'));
console.log(yearsUntilRetirement(1950, 'jesper'));

const friend1='madde';
const friend2 = 'marie';
const friend3 = 'Louice';

const friends = ['Madde', 'Marie', 'Louice'];
console.log(friends);

const year = new Array (1991, 1984, 2008 , 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Johan';
console.log(friends);

const firstName = 'jonas';
const jonas = [firstName, 'Svensson', 2037-1991, 'student', friends];

console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), 
calcAge(years[years.length -1])];
console.log(ages);


const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));

if(friends.includes('Peter')) {
    console.log('You have a friend');
}

const jonasArray = [
    'Jonas',
    'Rados',
    2037-1991,
    'teacher',
    ['Michel', 'Peter', 'Steven']
];

const jonas = {  // object with 5 key value pairs
    firstName: 'Jonas',
    lastName: 'Rados',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michel', 'Peter', 'Steven']
}
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first ' + nameKey]);
console.log(jonas['last ' + nameKey]);

const interestedIn = prompt('What do you want t know about jonas? Choose between firstName, lastName, age, job, and friends');

console.log(jonas[interestedIn]);

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong! Choose between firstName, lastName, age, job, and friends')
}

jonas.location = 'Portugal';
jonas ['twitter'] = 'sararados';
console.log(jonas);

// challenge

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

const jonas = {  // object with 5 key value pairs
    firstName: 'Jonas',
    lastName: 'Rados',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michel', 'Peter', 'Steven'],
    hasDriversLicense: true,

   /* calcAge: function (birthYear) {
        return 2037 - birthYear;
    }
 
    calcAge: function () {
        //console.log(this);
        return 2037 - this.birthYear;
    }
    
    calcAge: function () {
        //console.log(this);
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} -year old ${jonas.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's licence.}`
    }
};
console.log(jonas.getSummary());

console.log(jonas['calcAge']());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
   */
