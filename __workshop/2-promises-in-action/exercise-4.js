const request = require("request-promise");

const getTronaldDump = async () => {
  const options = {
    url: "https://api.tronalddump.io/random/quote",
    method: "GET",
    json: true,
  };
  try {
    const result = await request(options);
    return result.value;
  } catch (error) {
    console.log(error);
  }
};

//getTronaldDump().then((result) => console.log(result));

module.exports = { getTronaldDump };
