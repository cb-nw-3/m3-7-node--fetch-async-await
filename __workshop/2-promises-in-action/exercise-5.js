const request = require("request-promise");

const getGeekJoke = async () => {
  const options = {
    uri: "https://geek-jokes.sameerkumar.website/api?format=json",
    method: "GET",
    headers: {
      "User-Agent": "Request-Promise",
      Accept: "application/json",
    },
    json: true,
  };
  const joke = await request(options);
  return joke;
};

getGeekJoke().then((res) => console.log(res.joke));
