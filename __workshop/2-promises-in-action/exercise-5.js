const request = require("request-promise");

const getGeekJoke = async () => {
  const options = {
    uri: "https://geek-jokes.sameerkumar.website/api?format=json",
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };
  const jokes = await request(options);

  return JSON.parse(jokes);
};

getGeekJoke().then((joke) => console.log(joke.joke));
