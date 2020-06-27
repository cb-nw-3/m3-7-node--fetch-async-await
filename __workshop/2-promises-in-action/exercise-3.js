const request = require('request-promise');
const fetch = require('node-fetch');

const getDadJoke = async () => {
  const options = {
    uri: 'https://icanhazdadjoke.com/',
    headers: {
      Accept: 'application/json',
    },
  };
  return JSON.parse(await request(options)).joke;
};

async function wrapper() {
  let joke = await getDadJoke();
  console.log('request:', joke);
}

wrapper();

// now using fetch
async function asyncWrapper() {
  try {
    const parameter = {
      headers: {
        Accept: 'application/json',
      },
    };
    let response = await fetch('https://icanhazdadjoke.com/', parameter);
    let data = await response.json();
    console.log('fetch:', data.joke);
  } catch (err) {
    console.log(err);
  }
}

asyncWrapper();

//without async await
const parameter = {
  headers: {
    Accept: 'application/json',
  },
};
fetch('https://icanhazdadjoke.com/', parameter)
  .then((res) => res.json())
  .then((data) => console.log(data.joke));
