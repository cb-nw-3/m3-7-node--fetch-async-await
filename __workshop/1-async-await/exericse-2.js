// Exercise 2
// ----------
async function addPromise(num) {
  return new Promise((resolve) => {
    doubleAfter2Seconds(10).then((a) => {
      doubleAfter2Seconds(20).then((b) => {
        doubleAfter2Seconds(30).then((c) => {
          resolve(x + a + b + c);
        });
      });
    });
  });
}

function doubleAfter2Seconds(num) {
  return new Promise((resolve, reject) => {
    if (isNaN(num)) {
      reject(new Error("Please enter a valid number"));
    } else {
      setTimeout(() => {
        resolve(num * 2);
      }, 2000);
    }
  });
}
async function doublesLater(num) {
  try {
    let x = await doubleAfter2Seconds(num);
    let y = await doubleAfter2Seconds(x);
    let z = await doubleAfter2Seconds(y);
    console.log(x + y + z);
  } catch (err) {
    console.log(err);
  }
}
doublesLater(4);
