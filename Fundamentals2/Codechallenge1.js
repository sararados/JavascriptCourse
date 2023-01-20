'use strict'

const calcAverage = (score1, score2, score3)=> {
    return (score1 + score2 + score3)/3;
}

let dolphins=calcAverage(44,23,71);
let koalas = calcAverage(65,54, 49);

console.log(dolphins, koalas)

const checkWinner= ( avgdolphins, avgkoalas)=> {

    if(avgdolphins >= 2 * avgkoalas){
        console.log(`Dolphins wins the trophy( ${avgdolphins} vs ${avgkoalas})`);
    } else if (avgkoalas >= 2 * avgdolphins){
        console.log(`Koalas wins the trophy (${avgkoalas} vs ${avgdolphins})`)
    } else {
        console.log('nobody wins');
    }
}

checkWinner(koalas, dolphins);


dolphins = calcAverage(85, 54, 41);
koalas = calcAverage(23, 34, 27);

console.log(dolphins, koalas);
checkWinner(koalas, dolphins);