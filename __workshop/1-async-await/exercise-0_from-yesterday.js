// Example
// ------------
// Write a function testNum that takes a number as an argument and returns
// a Promise that tests if the value is less than or greater than the value 10.

const compareToTen = (num) => {
  myPromise = new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(num + " is greater than 10, success!");
    } else {
      reject(num + " is less than 10, error!");
    }
  });
  return myPromise;
};

const myFunc = async (num) => {
  // add code here
  try {
    let result = await compareToTen(num);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

myFunc(15);
myFunc(8);

// Exercise 0.1
// ------------
// Write two functions that use Promises that you can chain!
// The first function, makeAllCaps(), will take in an array of words and capitalize them,
// and then the second function, sortWords(), will sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    if (array.every((word) => typeof word === "string")) {
      resolve(array.map((word) => word.toUpperCase()));
    } else {
      reject("Error: Not all items in the array are strings!");
    }
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    if (array.every((word) => typeof word === "string")) {
      resolve(array.sort());
    } else {
      reject("Error: Something went wrong with sorting words.");
    }
  });
};

//NOTE the a promise returns in 3 states, resolved, rejected or processing
//you can force your callback to enter this promise state using resolve() or
//reject()

const textTransform = async (array) => {
  // add code here
  try {
    //console.log("initial array is:", array);
    let A = await makeAllCaps(array);
    //console.log("array with all caps is:", A);
    let B = await sortWords(A);
    console.log("final array is:", B);
  } catch (error) {
    console.log(error);
  }
};

textTransform(["cucumber", "tomatos", "avocado"]);
textTransform(["cucumber", 44, true]);
