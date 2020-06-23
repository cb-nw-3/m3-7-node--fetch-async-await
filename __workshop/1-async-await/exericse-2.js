// Exercise 2
// ----------

function doubleAfter2Seconds(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
}

const addPromise = async (num) => {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  return num + a + b + c;
};

addPromise(5).then((data) => console.log(data));
