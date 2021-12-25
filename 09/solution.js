const printForecast = (arr) => {
  outputString = "... ";
  for (let i = 0; i < arr.length; i++) {
    outputString += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  return outputString;
}

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
