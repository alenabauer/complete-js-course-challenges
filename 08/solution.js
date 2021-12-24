// Create an array 'bills' containing all 10 test bill values
const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);

// Create empty arrays for the tips and the totals('tips' and 'totals')
const tips = [];
const totals = [];

// Function to calculate tips
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Iterate through the bills array and fill the tips and totals arrays
for(let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

// Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument.This function calculates the average of all numbers in the given
// array.

const calcAverage = (arr) => {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(totals));
