/* const x = 10;
const y = 1;

const promiseAdd = new Promise((resolve, reject) => {
  if (typeof (x) === 'number' && typeof (y) === 'number') {
    const ans = x + y;
    resolve(ans);
  } else {
    const error = new Error('Values should be of type Number.');
    reject(error);
  }
});
const promiseSub = (a) => new Promise((resolve, reject) => {
  if (typeof (x) === 'number' && typeof (y) === 'number') {
    const ans = x - y;
    resolve(ans + a);
  } else {
    const error = new Error('Values should be of type Number.');
    reject(error);
  }
});

const promiseMultiply = (a) => new Promise((resolve, reject) => {
  if (typeof (x) === 'number' && typeof (y) === 'number') {
    const ans = x * y;
    resolve(ans + a);
  } else {
    const error = new Error('Values should be of type Number.');
    reject(error);
  }
});
const promiseDivide = (a) => new Promise((resolve, reject) => {
  if (typeof (x) === 'number' && typeof (y) === 'number') {
    const ans = x / y;
    resolve(ans + a);
  } else {
    const error = new Error('Values should be of type Number.');
    reject(error);
  }
});
// promiseAdd
//   .then((message) => promiseSub(message))
//   .then((message) => promiseMultiply(message))
//   .then((message) => promiseDivide(message))
//   .then((message) => console.log(message));

Promise.all([promiseAdd,
  promiseSub(0),
  promiseMultiply(0),
  promiseDivide(0)]).then((messges) => {
  const sum = messges.reduce((a, b) => a + b, 0);
  console.log('sum : ', sum);
}); */

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

// add(x, y)
//   .then((message1) => sub(x, y)
//     .then((message2) => multiply(x, y)
//       .then((message3) => divide(x, y)
//         .then((message4) => add(message1, message2)
//           .then((re1) => add(message3, message4)
//             .then((re2) => add(re1, re2)))))).then((finanlResult) => console.log('sum : ', finanlResult)))
//   .catch((error) => console.log(error));
add(x, y)
  .then((message1) => sub(x, y))
  .then((message2) => message2 + multiply(x, y))
  .then((message3) => message3 + divide(x, y))
  .then((result) => console.log(result));
