const request = require("request-promise");

const getDadJoke = async () => {
  const options = {
    uri: "https://icanhazdadjoke.com/",
    headers: {
      "User-Agent": "Request-Promise",
      Accept: "application/json",
    },
    json: true,
  };
  const randomJoke = request(options);

  return randomJoke;
};

getDadJoke().then((res) => console.log(res.joke));
