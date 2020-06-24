const request = require("request-promise");

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
  return quote;
};

getTronaldDump().then((res) => console.log("Quote:", res.value));
