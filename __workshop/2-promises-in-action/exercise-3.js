const request = require("request-promise");

const getDadJoke = async () => {
  const joke = await request({
    uri: "https://icanhazdadjoke.com/",
    headers: {
      Accept: "application/json",
    },
  });
  return JSON.parse(joke);
};
getDadJoke().then((data) => {
  console.log(data.joke);
});
