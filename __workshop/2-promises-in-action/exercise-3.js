const request = require("request-promise");

const obj = {
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
  },
  json: true,
};

const getDadJoke = async () => {
  const requestJoke = await request(obj);
  console.log(requestJoke.joke);
  return requestJoke.joke;
};

getDadJoke();
