const request = require("request-promise");

const getGeekJoke = async () => {
  const geekJokes = await request({
    uri: "https://geek-jokes.sameerkumar.website/api?format=json",
    headers: {
      Accept: "application/json",
    },
  });

  return JSON.parse(geekJokes);
};

getGeekJoke().then((data) => console.log(data.joke));
module.exports = { getGeekJoke };
