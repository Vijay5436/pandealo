const x = 10;
const y = 1;
const add = (a, b) => new Promise((resole, reject) => {
  if (typeof (a) === 'number' && typeof (b) === 'number') {
    const ans = a + b;
    resole(ans);
  } else {
    const error = new Error('Values should be of type Number.');
    reject(error);
  }
});
const sub = (a, b) => new Promise((resole, reject) => {
  if (typeof (a) === 'number' && typeof (b) === 'number') {
    const ans = a - b;
    resole(ans);
  } else {
    const error = new Error('Values should be of type Number.');
    reject(error);
  }
});
const multiply = (a, b) => new Promise((resole, reject) => {
  if (typeof (a) === 'number' && typeof (b) === 'number') {
    const ans = a * b;
    resole(ans);
  } else {
    const error = new Error('Values should be of type Number.');
    reject(error);
  }
});
const divide = (a, b) => new Promise((resole, reject) => {
  if (typeof (a) === 'number' && typeof (b) === 'number') {
    const ans = a / b;
    resole(ans);
  } else {
    const error = new Error('Values should be of type Number.');
    reject(error);
  }
});

async function sum(a, b) {
  try {
    const addition = await add(a, b);
    const substraction = await sub(a, b);
    const multiplication = await multiply(a, b);
    const division = await divide(a, b);
    const result1 = await add(addition, substraction);
    const result2 = await add(multiplication, division);
    const finalResult = await add(result1, result2);
    console.log('sum : ', finalResult);
  } catch (err) {
    console.log(err);
  }
}
sum(x, y);
