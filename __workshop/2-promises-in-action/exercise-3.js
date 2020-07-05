const request = require("request-promise");
const { response } = require("express");

const getDadJoke = async () => {
  const options = {
    url: "https://icanhazdadjoke.com/",
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

getDadJoke().then((result) => console.log(result));
