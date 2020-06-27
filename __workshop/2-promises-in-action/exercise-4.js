const request = require('request-promise');
const fetch = require('node-fetch');

//Without async await
const parameter = {
  headers: {
    Accept: 'application/json',
  },
};
fetch('https://api.tronalddump.io/random/quote', parameter)
  .then((res) => res.json())
  .then((data) => console.log('No async:', data.value));

const getTronaldDump = async () => {};

//using fetch and async await
async function asyncWrapper() {
  const parameter = {
    headers: {
      Accept: 'application/json',
    },
  };
  let response = await fetch(
    'https://api.tronalddump.io/random/quote',
    parameter
  );
  let data = await response.json();
  console.log('async fetch: ', data.value);
}

asyncWrapper();

//using request and async await
async function asyncWrapper2() {
  const options = {
    uri: 'https://api.tronalddump.io/random/quote',
    headers: {
      Accept: 'application/json',
    },
  };
  let response = await request(options);
  let data = JSON.parse(response);
  console.log('async request: ', data.value);
}

asyncWrapper2();
