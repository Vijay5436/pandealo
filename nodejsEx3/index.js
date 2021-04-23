const x = 20;
const y = 1;
function add(a, b, callback) {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') {
    const error = new Error('Values should be of type Number.');
    callback(error);
  } else {
    const sum = a + b;
    callback(null, sum);
  }
}
function multiply(a, b, callback) {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') {
    const error = new Error('Values should be of type Number.');
    callback(error);
  } else {
    const ans = a * b;
    callback(null, ans);
  }
}
function sub(a, b, callback) {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') {
    const error = new Error('Values should be of type Number.');
    callback(error);
  } else {
    const ans = a - b;
    callback(null, ans);
  }
}
function division(a, b, callback) {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') {
    const error = new Error('Values should be of type Number.');
    callback(error);
  } else {
    const ans = a / b;
    callback(null, ans);
  }
}

add(x, y, (err, result1) => {
  if (err) {
    console.log('Sorry.., Error occured: ', err);
  } else {
    multiply(x, y, (err1, result2) => {
      if (err1) {
        console.log('Sorry.., Error occured: ', err);
      } else {
        sub(x, y, (err2, result3) => {
          if (err2) {
            console.log('Sorry.., Error occured: ', err);
          } else {
            division(x, y, (err3, result4) => {
              if (err3) {
                console.log('Sorry.., Error occured: ', err);
              } else {
                add(result1, result2, (err4, finalResult1) => {
                  if (err4) {
                    console.log('Sorry.., Error occured: ', err);
                  } else {
                    add(result3, result4, (err4, finalResult2) => {
                      if (err4) {
                        console.log('Sorry.., Error occured: ', err);
                      } else {
                        add(finalResult1, finalResult2, (err4, finalResult) => {
                          if (err4) {
                            console.log('Sorry.., Error occured: ', err);
                          } else {
                            console.log('sum : ', finalResult);
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
