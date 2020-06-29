const request = require("request-promise");

const getTronaldDump = async () => {
  let quote = await request({
    uri: "https://api.tronalddump.io/",
    json: true,
  });
  console.log(quote);
};

getTronaldDump();
