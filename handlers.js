const request = require("request-promise");

// DAD JOKE
const getDadJoke = async () => {
  const options = {
    uri: "https://icanhazdadjoke.com/",
    headers: {
      "User-Agent": "Request-Promise",
      Accept: "application/json",
    },
    json: true,
  };
  const randomJoke = await request(options);

  return randomJoke.joke;
};

// TRUMP QUOTE

const getTronaldDump = async () => {
  const options = {
    uri: "https://api.tronalddump.io/random/quote",
    method: "GET",
    headers: {
      "User-Agent": "Request-Promise",
      Accept: "application/json",
    },
    json: true,
  };
  const quote = await request(options);

  return quote.value;
};

// GEEK JOKE

const getGeekJoke = async () => {
  const options = {
    uri: "https://geek-jokes.sameerkumar.website/api?format=json",
    method: "GET",
    headers: {
      "User-Agent": "Request-Promise",
      Accept: "application/json",
    },
    json: true,
  };
  const joke = await request(options);

  return joke.joke;
};

module.exports = { getDadJoke, getGeekJoke, getTronaldDump };
