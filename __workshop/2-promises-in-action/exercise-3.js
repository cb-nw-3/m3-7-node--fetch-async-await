const request = require("request-promise");
const getURL = "https://icanhazdadjoke.com/";

let options = {
  uri: getURL,
  headers: {
    "User-Agent": "Request-Promise",
  },
  json: true,
};
const getDadJoke = async () => {
  return await request(options);
};
getDadJoke()
  .then((joke) => console.log(joke.joke.toString()))
  .catch((err) => console.log(err));
