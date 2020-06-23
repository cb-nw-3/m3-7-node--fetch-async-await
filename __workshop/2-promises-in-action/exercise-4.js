const rp = require("request-promise");

const getTronaldDump = async () => {
  try {
    const options = {
      uri: "https://api.tronalddump.io/random/quote",
      headers: {
        Accept: "application/json",
      },
    };

    const data = await rp(options);
    //console.log(JSON.parse(data));

    let quote = JSON.parse(data).value;

    console.log(quote);

    return quote;
  } catch (error) {
    console.log(error);
  }
};

//return random quote
getTronaldDump();
