// Exercise 2
// ----------

const doublesLater = async (num) => {
  let x = await setTimeout(() => {
    return num * 2;
  }, 2000);
  console.log(x);
  return x;
};

doublesLater(5);
