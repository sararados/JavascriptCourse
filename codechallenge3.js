const averageScoreDolphins = (96 + 108 + 89 )/3;
const averageScoreKoalas = (88 + 91 + 110 )/3;


if (averageScoreDolphins > averageScoreKoalas ) {
    console.log(`Dolphins is the winner`);
} else if (averageScoreDolphins < averageScoreKoalas) {
    console.log(` Koalas is the winner`);
} else {
console.log (averageScoreDolphins === averageScoreKoalas,  `Nobody wins its a tie`);
}

/*

// Bonus 1:
const averageScoreDolphins = (97 + 112 + 101 )/3;
const averageScoreKoalas = (109 + 95 + 123 )/3;


if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
    console.log(`Dolphins is the winner`);
} else if (averageScoreDolphins < averageScoreKoalas && averageScoreKoalas >= 100) {
    console.log(` Koalas is the winner`);
} else {
console.log (averageScoreDolphins === averageScoreKoalas,  `Nobody wins its a tie`);
}


// Bonus 2:

const averageScoreDolphins = (97 + 112 + 81 )/3;
const averageScoreKoalas = (109 + 95 + 86 )/3;


if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
    console.log(`Dolphins is the winner`);
} else if (averageScoreDolphins < averageScoreKoalas && averageScoreKoalas >= 100) {
    console.log(` Koalas is the winner`);
} else  if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100 && averageScoreKoalas >= 100 ){
    console.log ( `Both win!`);
} else {
    console.log ( `No one wins!`);
}
*/