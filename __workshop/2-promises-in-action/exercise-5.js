const request = require("request-promise");

const getGeekJoke = async () => {
  const response = await request(
    "https://geek-jokes.sameerkumar.website/api?format=json"
  );
  data = JSON.parse(response);
  return data.joke;
};

//getGeekJoke().then((joke) => console.log(joke));

module.exports = { getGeekJoke };
