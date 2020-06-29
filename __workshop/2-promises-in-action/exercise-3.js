const request = require("request-promise");

const getDadJoke = async () => {
  let { joke } = await request({
    uri: "https://icanhazdadjoke.com/",
    json: true,
  });
  console.log(joke);
};

getDadJoke();
