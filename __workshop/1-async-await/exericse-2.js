// Exercise 2
// ----------

const doubleLater = (num) => {
  return new Promise((resolve) => {
    console.log('function call');
    setTimeout(() => {
      resolve(num * 2);
    }, 3000);
  });
};

const addPromise = async (num) => {
  const a = await doubleLater(10);
  console.log(a, num);
  const b = await doubleLater(20);
  console.log(b, num);
  const c = await doubleLater(30);
  console.log(c, num);
  //   console.log(a, b, c);
  return num + a + b + c;
};

addPromise(10).then((sum) => {
  console.log(sum);
});
