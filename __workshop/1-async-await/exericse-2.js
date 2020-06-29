// Exercise 2
// ----------

function doubleAfter2Seconds(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * 2)
    }, 2000);
  })
}

async function addPromise(num) {
  const firstNum = await doubleAfter2Seconds(num);
  const secondNum = await doubleAfter2Seconds(firstNum);
  const thirdNum = await doubleAfter2Seconds(secondNum);
  let sum = firstNum + secondNum + thirdNum;
  console.log(sum)
  return sum
}

addPromise(10)