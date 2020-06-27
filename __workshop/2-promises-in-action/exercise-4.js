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
  let res = await request(options);
  console.log(res.value);
};
getTronaldDump();
