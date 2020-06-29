const request = require("request-promise");

const getTronaldDump = async () => {
  try {
    let quote = await request({
      uri: "https://api.tronalddump.io//random/quote",
      json: true,
    });
    return quote.value;
  } catch (error) {
    console.log(err);
  }
};

getTronaldDump();
