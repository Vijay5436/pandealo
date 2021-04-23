const readLine = require('readline');

const rl = readLine.createInterface(process.stdin, process.stdout);

rl.question('Enter frist number : ', (input1) => {
  const number1 = parseInt(input1);
  rl.question('Enter second number : ', (input2) => {
    const number2 = parseInt(input2);
    const sum = number1 + number2;
    console.log('sum = ', sum);
    rl.close();
  });
});
