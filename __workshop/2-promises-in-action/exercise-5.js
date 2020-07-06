const request = require("request-promise");

const getGeekJoke = async () => {
  try {
    const joke = await request("https://geek-jokes.sameerkumar.website/api");
    const paredJoke = JSON.parse(joke);
    return paredJoke;
  } catch (error) {
    console.log(error);
  }
};
