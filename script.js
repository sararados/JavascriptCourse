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
*/

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

