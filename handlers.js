//functions

const request = require("request-promise");

const getDadJoke = async () => {
  const options = {
    uri: "https://icanhazdadjoke.com/",
    headers: {
      Accept: "application/json",
    },
  };
  const joke = await request(options);

  return JSON.parse(joke);
};

//////////////////////////

const getTronaldDump = async () => {
  const options = {
    method: "GET",
    uri: "https://tronalddump.io/random/quote",
    headers: {
      Accept: "application/json",
    },
  };
  const quote = await request(options);

  return JSON.parse(quote);
};

///////////////////////////

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

module.exports = { getGeekJoke, getDadJoke, getTronaldDump };
