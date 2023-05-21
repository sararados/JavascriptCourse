'use strict';

//variables
console.log(me);
//console.log(job);
//console.log(year);


var me = 'Sara';
let job = 'teacher';
const year = 1991

console.log(addDecl(2,3));
//console.log(addExpr(2,3));
console.log(addArrow);
//console.log(addArrow(2,3));

function addDecl(a,b) {
    return a+b;
}

const addExpr = function (a,b) {
    return a+b;
}

var addArrow = (a,b)=> a+b;

console.log(undefined);

if(!numProduct) deleteShoppingCart();

var numProduct = 10;

function deleteShoppingCart() {
    console.log('all product deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x===window.x);