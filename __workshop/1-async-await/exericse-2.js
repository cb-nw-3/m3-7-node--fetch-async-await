// Exercise 2
// ----------

//Exercise 2.1

const doublesLater = (num) => {
  const result = new Promise((resolve, reject) => {
    if (typeof num === "number") {
      setTimeout(() => {
        resolve(num * 2);
      }, 2000);
    } else {
      reject("Error. Input is not a number");
    }
  });
  return result;
};

//Exercise 2.2
const addPromise = async (num) => {
  try {
    const a = await doublesLater(10);
    const b = await doublesLater(20);
    const c = await doublesLater(30);

    return num + a + b + c;
  } catch (error) {
    console.log(error);
  }
};

addPromise(10).then((sum) => {
  console.log(sum);
});
