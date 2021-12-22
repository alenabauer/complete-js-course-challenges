// Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
const avgDolhins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

// Create a function 'checkWinner' that takes the average score of each team as parameters('avgDolhins' and 'avgKoalas'), and then logs the winner to the console
const checkWinner = (dolphins, koalas) => {
  if (dolphins >= (koalas * 2)) return `Dolphins win with the average score of ${dolphins}.`;
  if (koalas >= (dolphins * 2)) return `Koalas win with the average score of ${koalas}.`;
  return "Non one wins."
}

console.log(checkWinner(avgDolhins, avgKoalas));
