const numberArray = process.argv.slice(2).map((el) => +el);
const filterArray = numberArray.find((el) => isNaN(el));
if (filterArray !== undefined) {
  console.log("Invalid data received(Value that can't be parsed to Number)");
} else if (numberArray.length === 1) {
  console.log('Only one number is provided.(A mmimimum of 2 number required)');
} else if (numberArray.length === 0) {
  console.log('No Number provide');
} else {
  const sum = numberArray.reduce((a, b) => a + b, 0);
  console.log('sum is : ', sum);
}
