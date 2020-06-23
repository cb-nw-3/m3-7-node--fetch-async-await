const request = require("request-promise");

const getTronaldDump = async () => {
  const requestParams = {
    uri: "https://api.tronalddump.io/random/quote",
    headers: {
      Accept: "application/JSON",
    },
  };
  const response = await request(requestParams);
  const data = JSON.parse(response);

  return data.value;
};

getTronaldDump().then((quote) => console.log(quote));
