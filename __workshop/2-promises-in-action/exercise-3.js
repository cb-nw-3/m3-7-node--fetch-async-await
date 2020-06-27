const request = require('request-promise');
const fetch = require('node-fetch');

// const getDadJoke = async () => {
//   const options = {
//     uri: 'https://icanhazdadjoke.com/',
//     headers: {
//       Accept: 'application/json',
//     },
//   };
//   return JSON.parse(await request(options)).joke;
// };

// async function wrapper() {
//   let joke = await getDadJoke();
//   console.log('request: ', joke);
// }

// wrapper();

// now using fetch
async function asyncWrapperDadJoke() {
  try {
    const parameter = {
      headers: {
        Accept: 'application/json',
      },
    };
    let response = await fetch('https://icanhazdadjoke.com/', parameter);
    let data = await response.json();
    return data.joke;
  } catch (err) {
    console.log(err);
  }
}

// asyncWrapperDadJoke();

//without async await
// const parameter = {
//   headers: {
//     Accept: 'application/json',
//   },
// };
// fetch('https://icanhazdadjoke.com/', parameter)
//   .then((res) => res.json())
//   .then((data) => console.log('No async: ', data.joke));

module.exports = {
  asyncWrapperDadJoke,
};
