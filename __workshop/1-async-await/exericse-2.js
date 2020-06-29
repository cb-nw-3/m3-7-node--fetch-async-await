// Exercise 2
// ----------

const doublesLater = (num) => {
  return new Promise((resolve) => {
    setTimeout(
      (value) => {
        resolve(value * 2);
      },
      2000,
      num
    );
  });
};

const addPromise = async (num) => {
  let a = await doublesLater(10);
  let b = await doublesLater(20);
  let c = await doublesLater(30);
  return num + a + b + c;
};

addPromise(10);
