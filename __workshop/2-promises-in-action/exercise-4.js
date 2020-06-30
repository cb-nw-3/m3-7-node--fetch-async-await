const request = require("request-promise");

const getTronaldDump = async () => {
  //
  const tronalDumpQuote = await request({
    uri: "https://api.tronalddump.io/random/quote",
    headers: {
      Accept: "application/json",
    },
  });

  return JSON.parse(tronalDumpQuote);
};
getTronaldDump().then((data) => console.log(data.value));
module.exports = { getTronaldDump };
