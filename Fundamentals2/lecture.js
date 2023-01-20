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

// Lecture : Introduction to Arrays

const population = [8, 6, 1442];

if(population.length === 3) {
    console.log(true);
}

const percentages = [percentegeOfWorld3(population[0]), percentegeOfWorld3(population[1]), percentegeOfWorld3(population[2])];

console.log(percentages);


// Lecture: Basic Array Operations

const neighbours = ['Danmark', 'Norge', 'Finland'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Norge')]= 'Republic of Norge';

console.log(neighbours);

// Lecture: Introduction to Objects

const myCountry = {
    country: 'Sweden',
    capital: 'Stockholm', 
    language: 'Swedish',
    population: 8,
    neighbours: ['Danmark', 'Norge', 'Finland']
};

// lecture: Dot vs Brackets

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and capital called ${myCountry.capital}.`);

myCountry.population += 2;
myCountry['population'] -= 2;

console.log(`${myCountry.population}`);
console.log(`${myCountry['population']}`);


// Lecture: Object Methods

const myCountry = {
    country: 'Sweden',
    capital: 'Stockholm', 
    language: 'Swedish',
    population: 8,
    neighbours: ['Danmark', 'Norge', 'Finland'],

    describe: function() {
        this.info = `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and capital called ${this.capital}.`;
        return this.info;
    },
    checkIsland:function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
      
    }
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);


// Lecture: Iteration the for loop

for( let vote = 1; vote <= 50; vote++) {
    console.log(`Voter number ${vote} is currently voting`);
}

//Lecture: Looping Arrays, Breaking and Continuing
const percentegeOfWorld3 = population => (population/ 7900) * 100;

const population = [8, 6, 1442, 340];
const percentages = [];

for( let i = 0; i < population.length; i++) {
    const perc = percentegeOfWorld3(population[i]);
    percentages.push(perc);
}

console.log(percentages);

// Lecture: Looping Backwards and Loops in Loops

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for( let i = 0; i < listOfNeighbours.length; i++) {
    for(let x = 0; x < listOfNeighbours[i].length; x++) {
        console.log(`Neighbour: ${listOfNeighbours[i][x]}`);
    }
}

// Lecture: The while loop

const population = [8, 6, 1442, 340];
const percentegeOfWorld3 = population => (population/ 7900) * 100;

const percentages1 = [];
let i = 0;

while(i < population.length) {
    const perc = percentegeOfWorld3(population[i]);
    percentages1.push(perc);
    i++;
}
console.log(percentages1);
*/