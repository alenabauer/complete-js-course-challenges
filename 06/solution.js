// Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Create an array 'bills' containing the test data: 125, 555 and 44
const bills = new Array(125, 555, 44)

// Create an array 'tips' containing the tip value for each bill
const tips = new Array(calcTip(125), calcTip(555), calcTip(44))

// Create an array 'total' containing the total values, so the bill + tip
const totals = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2])
