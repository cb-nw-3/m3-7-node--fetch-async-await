// Exercise 2
// ----------

const doublesLater = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(number * 2);
    }, 2000);
  });
};

// doublesLater(2)
//   .then((answer) => console.log(answer))
//   .catch((error) => console.log(error));

// async function addPromise(...number) {
//   let sum = 0;
//   try {
//     number.forEach((element) => {
//       let response = await doublesLater(element);
//       console.log(response)
//     });
//     console.log(sum);
//   } catch (error) {
//     console.log(error);
//   }
// }

addPromiseExercise(10).then((answer) => console.log(answer));
// addPromise(10, 20, 30, 40);

async function addPromiseExercise(number) {
  let sum = 0;
  try {
    const A = await doublesLater(10);
    const B = await doublesLater(20);
    const C = await doublesLater(30);
    return number + A + B + C;
  } catch (error) {
    console.log(error);
  }
}
