// Exercise 2
// ----------

function doublesLater(num) {
  const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
  return prom;
}

let addPromise = async () => {
  let num1 = await doublesLater(10);
  let num2 = await doublesLater(20);
  let num3 = await doublesLater(30);
  return num1 + num2 + num3;
};

// addPromise().then((sum) => {
//   console.log(sum);
// });

addPromise();
