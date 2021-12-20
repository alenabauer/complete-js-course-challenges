// Mark's height and weight
const markHeight = 1.69;
const markWeight = 78;

// John's height and weight
const johnHeight = 1.95;
const johnWeight = 92;

// Calculate BMI values for Mark and John
const markBMI = markWeight / (markHeight ** 2)
const johnBMI = johnWeight / (johnHeight ** 2)

// Check whether Mark's BMI is higher than that of John
const markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI)
