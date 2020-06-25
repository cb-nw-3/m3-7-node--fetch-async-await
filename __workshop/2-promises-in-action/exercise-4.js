const request = require("request-promise");
// const { json } = require("body-parser");
const getURL = "https://api.tronalddump.io/random/quote";
let options = {
  uri: getURL,
  headers: {
    "User-Agent": "Request-Promise",
  },
  json: true,
};

const getTronaldDump = async () => {
  return await request(options);
};
getTronaldDump()
  .then((quote) => console.log(quote.value))
  .catch((err) => console.log(err));
