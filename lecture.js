// Fundamentals 2:

// Lecture: Functions

/*
function describeCountry(country, population, capitalCity){
    const wichCountry = `${country} has ${population} million people and the
    capital city is ${capitalCity};`
    return wichCountry;
}

const description = describeCountry('Sweden', 8, 'Stockholm');

console.log(description);

console.log(describeCountry('Danmark', 5, 'Köpenhamn'));
console.log(describeCountry('England', 20, 'London'));


// Lecture: Function Declarations vs Expressions

const worldPopulation = 7900;

function percentageOfWorld1(population){
    return (population/worldPopulation) * 100; 
}

const sweden = percentageOfWorld1(8);
const usa = percentageOfWorld1(331);
const china = percentageOfWorld1(1412);

console.log(sweden, usa, china);

const percentageOfWorld2 = function (population){
    return (population/7900 ) * 100; 
}

const sweden = percentageOfWorld2(8);
const usa = percentageOfWorld2(331);
const china = percentageOfWorld2(1412);

console.log(sweden, usa, china);


// Lecture: Arrow Functions

const percentegeOfWorld3 = population => (population/ 7900) * 100;

const sweden = percentegeOfWorld3(8);
const usa = percentegeOfWorld3(331);
const china = percentegeOfWorld3(1412);

console.log(sweden, usa, china);

// Lecture: Functions calling other Functions

function describePopulation( country, population){
    const percentage = percentegeOfWorld3(population);
    const description = `${country} has ${population} wich is about    ${percentage} of the world`;
    console.log(description);
}
describePopulation('sweden', 8);
*/
