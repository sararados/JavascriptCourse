/*
// lecture: values and variables

const country = 'Sweden';
const continent = 'Europe';
let population = 8000000 ;

console.log(country);
console.log(continent);
console.log(population);

//Lecture: Data types

const isIsland = 'false';
let language;

console.log( typeof isIsland);
console.log( typeof population);
console.log( typeof country);
console.log( typeof language);

//Lecture: const,let and var

language = 'swedish';
// Ändrat let i första lecturen till const


//Lecture: Basic Operators

let countrySplitInHalf = population / 2;
countrySplitInHalf++;
console.log(countrySplitInHalf);

const finlandPopulation = 6000000;
const morePeopleMyCountry = population > finlandPopulation;
const averagePopulation = 33000000;
const averageCountry = averagePopulation > population;
const description = 'Portugal is in Europe, and its 11 million people speak portuguese';

// Lecture: String and Template literals

console.log(`Portugal is in Europe,
and its 11 million
people speak portuguese`);

// Lecture: Taking decisions: if/else

if( population > averagePopulation) {
    console.log(`Swedens population is above average`);
} else {
    console.log(`Swedens population is ${averagePopulation - population } million below average`)
}

//LECTURE: Type Conversion and Coercion

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);


// Lecture: Equality Operators: == vs ===

const numNeigbours = Number(prompt('How many neigbour countries does your country have'));

if( numNeigbours === 1) {
    console.log('Only 1 border');
} else if (numNeigbours > 1) {
    console.log('more than one border');
} else {
    console.log('No borders');
}

// lECTURE: logical Operators

const speakSwedish = true;
const isNotAIsland = true;
const peopleIsLessThanFiftyMillion = true;

if(speakEnglish && isNotAIsland && peopleIsLessThanFiftyMillion){
    console.log('You should live in sweden')
} else {
    console.log('Sweden doesnt meet your criteria');
}

//or

if(language === 'english' && population < 50  &&  !island){
    console.log(`You should live in ${country}`)
} else {
    console.log('Sweden doesnt meet your criteria');
}

*/
