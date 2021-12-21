// Mark's height and weight
const markHeight = 1.69;
const markWeight = 78;

// John's height and weight
const johnHeight = 1.95;
const johnWeight = 92;

// Calculate BMI values for Mark and John
const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);

// Print out whose BMI is higher
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}
