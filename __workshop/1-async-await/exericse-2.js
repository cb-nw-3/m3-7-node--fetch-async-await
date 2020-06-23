// Exercise 2
// ----------

//this function returns a promise that will double any number after 2 seconds
const doublesLater = async (num) => {
  return new Promise(function (resolve) {
    setTimeout(() => {
      let result = num * 2;
      console.log(num, "is now equal to", result);

      //i want my resolve to output the value
      resolve(result);
    }, 2000);
  });
};

//quickly check...
doublesLater(2);
doublesLater(4);

//the function we want to replace with an async function is..

function addPromise(num) {
  return new Promise((resolve) => {
    doublesLater(num).then((a) => {
      doublesLater(a).then((b) => {
        doublesLater(b).then((c) => {
          //had to slightly update this function
          //console.log(a + b + c);
          resolve(num + a + b + c);
        });
      });
    });
  });
}

//this function takes a number like 10, doubles it 3 times then adds
//them all together.
addPromise(10).then((sum) => {
  console.log(sum);
  //outputs 150
});

//the async function version is this:
const newAddPromise = async (num) => {
  const a = await doublesLater(num);
  const b = await doublesLater(a);
  const c = await doublesLater(b);

  let result = num + a + b + c;
  console.log("after doubling 3 times, we get:", result);
  return result;
};

newAddPromise(10);

//NOTE TO SELF: newAddPromise() is an async function that will resolve promises
//the doublesLater() is a function that returns a promise which will be taken by
//our async function.
