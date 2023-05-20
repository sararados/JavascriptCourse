'use strict';


function calcAge(birthYear) { //function Scope
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {  //block scope
            var millineal = true;
            //creating New Variable with same name as outer scope's variable
            const firstName = 'Maja';
            // Reassigning outer scopes variable
            output = 'New output';
            const string = `Oh, and your'e a millineal, ${firstName}`;
           console.log(string);   
        }
        function add(a,b) {
            return a+b;
        }
    }

    console.log(millineal);
    console.log(output)
    printAge();

    return age;
}

const firstName = 'Sara'; // global scope
calcAge(1991);