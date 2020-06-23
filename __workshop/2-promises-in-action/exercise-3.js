const request = require("request-promise");

const queryOptions = {
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/JSON",
  },
};

const getDadJoke = async () => {
  const response = await request(queryOptions);
  data = JSON.parse(response);
  return data.joke;
};

getDadJoke().then((joke) => console.log(joke));
