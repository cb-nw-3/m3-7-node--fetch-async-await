const request = require("request-promise");

const getGeekJoke = async () => {
  let options = {
    url: "https://geek-jokes.sameerkumar.website/api?format=json",
    method: "GET",
    json: true,
  };
  try {
    const result = await request(options);
    return result.joke;
  } catch (error) {
    console.log(error);
  }
};

getGeekJoke().then((result) => console.log(result));
