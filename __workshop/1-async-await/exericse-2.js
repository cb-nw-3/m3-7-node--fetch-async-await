// Exercise 2
// ----------
const doublesLater = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
};

const addPromise = async (num) => {
  const a = await doublesLater(10);
  const b = await doublesLater(20);
  const c = await doublesLater(30);
  return num + a + b + c;
};

addPromise(6).then((sum) => {
  console.log(sum);
});
