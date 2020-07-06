const request = require("request-promise");

const getTronaldDump = async () => {
  try {
    const options = {
      uri: "https://api.tronalddump.io/random/quote",
      header: {
        Accept: "application/json",
      },
    };
    const quoteObj = await request(options);
    const parsedQuote = JSON.parse(quoteObj);
    return parsedQuote.value;
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getTronaldDump };
