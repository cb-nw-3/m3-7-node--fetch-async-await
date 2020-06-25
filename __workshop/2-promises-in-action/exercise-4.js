const request = require("request-promise");

const getTronaldDump = async () => {
  let options = {
    uri: "https://api.tronalddump.io/random/quote",
    json: true,
  };
  return request(options).then((response) => response.value);
};

getTronaldDump().then((data) => console.log(data));
