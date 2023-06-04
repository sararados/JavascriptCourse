'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({starterIndex, mainIndex, time, adress}) {
    console.log(`order recieved!${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${adress} at ${time}`);
  },
  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your pasta ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],

]);

console.log(question);
//convert object to map
console.log(Object.entries(restaurant.openingHours));

const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for(const [key, value] of question) {
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}

// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]);
//console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

//////////////////////////////////////////////////////////////////////////////

// Maps: Fundamentals

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisabon, Portugal'));

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open', 11)
// .set('closed', 23)
// .set(true, 'We are open')
// .set(false, 'We are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// const arr =[1,2]
// rest.set( arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');

// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

///////////////////////////////////////////////////////////
// const orderSet = new Set([
//   'Pasta', 
//   'Pizza', 
//   'Pizza', 
//   'Risotto', 
//   'Pasta', 
//   'Pizza'
// ]);
// console.log(orderSet);
// console.log(new Set('Sara'));
// console.log(orderSet.size);

// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));

// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// // orderSet.clear();
// console.log(orderSet);

// for(const order of orderSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUniqe = [...new Set(staff)];
// // const staffUniqe = new Set(staff);

// console.log(staffUniqe);
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

// console.log(new Set('sararados'))

//////////////////////////////////////////////////////////////



/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for ( const [i, el ] of menu.entries()) {
  console.log(`${i +1}: ${el}`);
}

//console.log([...menu.entries()])

const rest1 = {
  name: 'Capri',
  numGuests: 0,
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Sara',
}

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner = rest1.owner && '<Anonymus>';
rest2.owner = rest2.owner && '<Anonymus>';

rest1.owner &&= '<Anonymus>';
rest2.owner &&= '<Anonymus>';
console.log(rest1);
console.log(rest2);

// OR assignment
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1);
console.log(rest2);

//nullish

restaurant.numGuests=0;
const guests =restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
//use ANY 
console.log('-----OR-----');
console.log(3 || 'sara');
console.log('' || 'sara');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || ''||'Hello' || 23 || null);

restaurant.numGuests=23;
const guest1 =restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('----AND---');
console.log(0 && 'SARA');
console.log(7 && 'SARA');

console.log('Hello' && 23 && null && 'sara');

if(restaurant.orderPizza) {
  restaurant.orderPizza('cheese','tomato');
}

restaurant.orderPizza && restaurant.orderPizza
('cheese', 'tomato')

restaurant.orderPizza('ham', 'olive','pepperoni');
restaurant.orderPizza('cheese');

//spread =right
const arr = [1,2,...[3,4]];
//rest =left
const [a,b,...others] = [1,2,3,4, 5]

const[pizza, ,risotto, ...otherFood]=[...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza,risotto, otherFood);

//objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

//functions
const add = function (...numbers) {
  let sum = 0;

  for(let i=0; i<numbers.length; i++) sum += numbers[i];
  console.log(sum);
}
add(2,3);
add(5,3,7,2);


const ingridients = [prompt('Lets make pasta! Ingridient1?'),
prompt('Ingridient 2?'),
prompt('Ingridient 3?'),];

console.log(ingridients);

restaurant.orderPasta(...ingridients);

const newResturant = {foundedIn: 1998, ...restaurant, founder: 'Sara'};
console.log(newResturant);

const resturantCopy = {...restaurant};
resturantCopy.name='Loke';
console.log(resturantCopy.name);
console.log(restaurant.name);
/*
const arr = [7,8,9];
const badNewArr = [1,2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1,2,...arr];

const newMenu = [...restaurant.mainMenu,'Gnocci'];
console.log(newMenu);
// copy array
const mainMenuCopy = [...restaurant.mainMenu];
// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const string = 'sara';
const letters = [...string, '', 's.'];
console.log(letters)
console.log(...string)



//console.log(`${...string}`)

restaurant.orderDelivery({
    time:'22:30',
    adress: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});


const arr= [2,3,4];
const a = [arr[0]];
const b = [arr[1]];
const c = [arr[2]];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main,secondary);

[main, secondary] = [secondary, main];
console.log(main,secondary);

restaurant.order(2, 0);
console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
//nested destructoring
const nested = [2,4, [5,6]];
//const [i, ,j] = nested;
//console.log(i,j);

const [i, ,[j,k]]=nested;
console.log(i,j,k);

const [p=1,q=1,r=1] = [8,9];
console.log(p,q,r)

const { name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories );

const {
    name: restaurantName, 
    openingHours: hours, 
    categories: tags} = restaurant;
console.log(restaurantName,hours, tags);

const {menu = [], starterMenu: starters =[]}=restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;

const obj = {a: 23, b: 7, c: 14};
({a,b} = obj);

console.log(a,b);

//nested object
const {fri: {open,close}} = openingHours;
console.log(open,close);
*/
