const request = require("request-promise");

const getTronaldDump = async () => {
  const options = {
    uri: "https://api.tronalddump.io/random/quote",
    headers: {
      "User-Agent": "Request-Promise",
      Accept: "application/json",
    },
    json: true,
  };
  const quote = request(options);
  return quote;
};

getTronaldDump().then((res) => console.log("Quote:", res.value));
