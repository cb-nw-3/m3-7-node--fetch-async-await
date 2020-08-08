const request = require('request-promise');
const { response } = require('express');

const getGeekJoke = async () => {
  const response = await request(
    'https://geek-jokes.sameerkumar.website/api?format=json'
  );
  //   console.log('hey', response);
  const data = await JSON.parse(response);
  return data.joke;
};
getGeekJoke();

module.exports = {
  getGeekJoke,
};
