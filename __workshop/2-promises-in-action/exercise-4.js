const request = require("request-promise");
const { get } = require("request-promise");

const obj = {
  uri: "https://api.tronalddump.io/random/quote",
  headers: {
    Accept: "application/json",
  },
  json: true,
};

const getTronaldDump = async () => {
  const getQuote = await request(obj);
  console.log(getQuote.value);
  return getQuote.value;
};

// getTronaldDump();

module.exports = {
  getTronaldDump,
};
