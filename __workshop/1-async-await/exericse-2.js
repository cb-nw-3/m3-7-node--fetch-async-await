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
const addPromise = async (num) => {
  try {
    const a = await doublesLater(10);
    const b = await doublesLater(20);
    const c = await doublesLater(30);

    return num + a + b + c;
  } catch (error) {
    console.log("Error:", error);
  }
};

addPromise(10).then((sum) => {
  console.log(sum);
});
