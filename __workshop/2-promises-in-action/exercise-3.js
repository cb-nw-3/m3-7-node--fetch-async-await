const request = require('request-promise');
// const fetch = requiere('node-fetch');

const getDadJoke = async () => {
  const options = {
    uri: 'https://icanhazdadjoke.com/',
    headers: {
      Accept: 'application/json',
    },
  };
  return JSON.parse(await request(options)).joke;
};

getDadJoke().then((answer) => console.log(answer));
