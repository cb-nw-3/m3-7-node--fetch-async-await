const request = require('request-promise');
const fetch = requiere('node-fetch');

const getDadJoke = async () => {
  return await request('https://icanhazdadjoke.com/');
};
