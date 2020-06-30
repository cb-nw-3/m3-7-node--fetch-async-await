// Exercise 2
// ----------

const doubleLater = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
};

// function addPromise(num) {
//   return new Promise((resolve) => {
//     doubleAfter2Seconds(10).then((a) => {
//       doubleAfter2Seconds(20).then((b) => {
//         doubleAfter2Seconds(30).then((c) => {
//           resolve(x + a + b + c);
//         });
//       });
//     });
//   });
// }

// function with async
const addPromise = async (num) => {
  const one = await doubleLater(10);
  const two = await doubleLater(20);
  const three = await doubleLater(30);

  return num + one + two + three;
};

addPromise(100).then((sum) => {
  console.log(sum);
});
