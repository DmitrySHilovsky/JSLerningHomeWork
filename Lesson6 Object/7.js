const score = '2:5';

let team1Score = parseInt(score.split(':')[0]);
let team2Score = parseInt(score.split(':')[1]);

if (team1Score > 9 || team2Score > 9) {
  console.log('Неверный формат счета');
} else {
  console.log(`Команда 1 забила ${team1Score} голов, а команда 2 - ${team2Score}.`);
}