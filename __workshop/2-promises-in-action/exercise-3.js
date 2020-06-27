const request = require("request-promise");
const getURL = "https://icanhazdadjoke.com/";

let options = {
  uri: getURL,
  headers: {
    "User-Agent": "Request-Promise",
  },
  json: true,
};
const getDadJoke = async () => {
  const res = await request(options);
  console.log(res.joke);
};
getDadJoke();
