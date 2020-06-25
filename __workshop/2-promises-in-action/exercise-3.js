const request = require("request-promise");

const getDadJoke = async () => {
  let options = {
    uri: "https://icanhazdadjoke.com/",
    json: true,
  };
  return request(options).then((response) => response.joke);
};

getDadJoke().then((joke) => console.log(joke));
