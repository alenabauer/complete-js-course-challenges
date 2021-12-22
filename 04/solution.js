// tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20 %

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${total}`);
