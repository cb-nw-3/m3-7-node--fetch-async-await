const request = require("request-promise");
const { get } = require("request-promise");
const getURL = "https://geek-jokes.sameerkumar.website/api?format=json";
let options = {
  uri: getURL,
  headers: {
    "User-Agent": "Request-Promise",
  },
  json: true,
};

const getGeekJoke = async () => {
  return await request(options);
};

getGeekJoke().then((joke) => console.log(joke.joke));
