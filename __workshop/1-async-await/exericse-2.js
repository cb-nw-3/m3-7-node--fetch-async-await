// Exercise 2
// ----------

const doublesLater = async (num) => {
  //setTimeout(2000, () => num * 2);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 1000);
  });
};

const addPromise = async (num) => {
  const firstNumber = await doublesLater(10);
  const secondNumber = await doublesLater(20);
  const thirdNumber = await doublesLater(30);

  const answer = num + firstNumber + secondNumber + thirdNumber;
  return answer;
};

addPromise(10).then((answer) => console.log(answer));
