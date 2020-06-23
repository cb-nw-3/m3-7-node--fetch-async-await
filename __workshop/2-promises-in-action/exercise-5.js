const rp = require("request-promise");

const getGeekJoke = async () => {
  try {
    const options = {
      uri: "https://geek-jokes.sameerkumar.website/api?format=json",
      headers: { Accept: "application/json" },
    };

    let data = await rp(options);
    //console.log(JSON.parse(data));
    let joke = JSON.parse(data).joke;
    console.log(joke);
    return joke;
  } catch (error) {
    console.log(error);
  }
};

getGeekJoke();
