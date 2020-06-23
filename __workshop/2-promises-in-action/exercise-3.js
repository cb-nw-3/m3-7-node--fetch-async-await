const rp = require("request-promise");

//this promise function will return a random joke from the API
const getDadJoke = async () => {
  try {
    const options = {
      uri: "https://icanhazdadjoke.com/",
      headers: {
        Accept: "application/json",
      },
    };

    const data = await rp(options);

    let joke = JSON.parse(data).joke;
    console.log(joke);
    return joke;
  } catch (error) {
    console.log(error);
  }
};

getDadJoke();

module.exports.getDadJoke = getDadJoke;

//NOTE TO SELF: an async function will either return a promise or resolve promise(s)

//Only the function that creates the promise should be able to resolve, reject,
//or cancel the promise, my function getDadJoke() invokes and waits for the
//fulfilled state of rp(options), therefore i cannot invoke resolve() because the
//promise has already been returned.

//A promises' result state CANNOT be changed once it has been returned.

//Any function returning a fulfilled promise is "then-able", that is you can
//use the .then() method

//the advantage of await is being able to work with simultaneous promises when
//they are resolved asynchronously. Previously, we relied on the .then()
//method to chain promises (once they are fulfilled).
