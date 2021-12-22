// Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

let dolphinsAvgScore = (97 + 112 + 101) / 3;
let koalasAvgScore = (109 + 95 + 123) / 3;

// Include a requirement for a minimum score of 100
const minimumScore = 100;

// Find the winnder
if (dolphinsAvgScore === koalasAvgScore && dolphinsAvgScore >= minimumScore && koalasAvgScore >= minimumScore) {
  console.log("It's a draw.")
} else if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= minimumScore) {
  console.log("Dolphins win!")
} else if (koalasAvgScore > dolphinsAvgScore && koalasAvgScore >= minimumScore) {
  console.log("Koalas win!")
} else {
  console.log("Nobody wins!")
}
