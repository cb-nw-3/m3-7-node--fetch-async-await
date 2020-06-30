const request = require("request-promise");

const getDadJoke = async () => {
  const dadJoke = await request({
    uri: "https://icanhazdadjoke.com/",
    headers: {
      Accept: "application/json",
    },
  });

  return JSON.parse(dadJoke);
};
getDadJoke().then((data) => console.log(data));
module.exports = { getDadJoke };
