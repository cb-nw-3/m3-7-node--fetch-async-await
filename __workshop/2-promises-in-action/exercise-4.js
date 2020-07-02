const request = require("request-promise");

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

getTronaldDump().then((quote) => console.log(quote.value));
