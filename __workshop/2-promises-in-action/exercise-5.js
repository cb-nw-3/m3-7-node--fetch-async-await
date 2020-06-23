const request = require("request-promise");

const getGeekJoke = async () => {
  try {
    const getJoke = await request(
      "https://geek-jokes.sameerkumar.website/api?format=json"
    );
    const parsedJoke = JSON.parse(getJoke);
    console.log(parsedJoke.joke);
    return parsedJoke.joke;
  } catch (err) {
    console.log(err);
  }
};

getGeekJoke();
