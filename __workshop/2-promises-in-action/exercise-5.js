const request = require("request-promise");

const getGeekJoke = async () => {
  let options = {
    uri: "https://geek-jokes.sameerkumar.website/api?format=json",
    json: true,
  };

  return request(options).then((response) => response.joke);
};

getGeekJoke().then((data) => console.log(data));
