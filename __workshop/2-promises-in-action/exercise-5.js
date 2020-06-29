const request = require("request-promise");

const getGeekJoke = async () => {
  try {
    let result = await request({
      uri: "https://geek-jokes.sameerkumar.website/api?format=json",
      json: true,
    });
    return result.joke;
  } catch (err) {
    console.log(err);
  }
};
getGeekJoke().then((res) => console.log(res));
