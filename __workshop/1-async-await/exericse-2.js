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
  let x = await doubleAfter2Seconds(num);
  let y = await doubleAfter2Seconds(x);
  return await doubleAfter2Seconds(y).then((z) => x + y + z);
}
doublesLater(4)
  .then((sum) => console.log(sum))
  .catch((err) => console.log(err));
