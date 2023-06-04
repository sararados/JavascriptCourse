'use strict'

const game = {
 team1: 'Bayern Munich',
 team2: 'Borrussia Dortmund',
 players: [
    [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
    ],
    [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
    ],
 ],
 score: '4:0',
 scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
 'Hummels'],
 date: 'Nov 9th, 2037',
 odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
 },
}

// min lösning

/*
const [players1] =[game.players[0]];
console.log(players1);
const [players2] = [game.players[1]]
console.log(players2);

const gk = players1[0];
const fieldplayers = players1.slice(1,11);
console.log(gk);
console.log(fieldplayers);

const [allplayers] = [[players1],[ players2]];
console.log(allplayers);
*/
// rätt från tutorialen

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

const allplayers = [...players1, ...players2];
console.log(allplayers);

const playersfinal = [...players1,'Thiago','Couthino', 'Perisisc'];
console.log(playersfinal);

const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
   console.log(`${players.length} goals we scored`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

team1 < team2 && console.log('Team1 is more likely to win');

// 1.
const scored = Object.entries(game.scored);
//console.log(`Goal ${key}:${value}`);

for(const [i, player] of game.scored.entries()){
console.log(`Goal ${i+1}:${player}`);
}

