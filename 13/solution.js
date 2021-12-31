const testData = "underscore_case\nfirst_name\nSome_Variable\n calculate_AGE\ndelayed_departure";

const convert = (string) => {
  const variables = string.split('\n');
  const converted = [];
  for (variable of variables) {
    let str = variable.trim().toLowerCase();
    str = str.replace(/_\w/, str.charAt(str.indexOf('_') + 1).toUpperCase());
    converted.push(str);
  }
  return converted;
}

for ([index, string] of convert(testData).entries()) {
  console.log(`${string.padEnd(20)} ${'✅'.repeat(index + 1)}`)
}
