// Exercise 2
// ----------

// Exercise 2.1
const doublesLater = async (num) => {
  const doubleNum = async (num) => {
    console.log(num * 2);
    return num * 2;
  };
  setTimeout(() => doubleNum(num), 2000);
};

doublesLater(3);

// Exercise 2.2

function addPromise(num) {
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

addPromise(10).then((sum) => {
  console.log(sum);
});
