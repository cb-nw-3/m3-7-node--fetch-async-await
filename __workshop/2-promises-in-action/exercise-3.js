const request = require('request-promise');

const getDadJoke = async () => {
  const options = {
    uri: 'https://icanhazdadjoke.com/', // Taken from npm documentation on "request-promises"
    // https://www.npmjs.com/package/request-promise#get-something-from-a-json-rest-api
    headers: {
      Accept: 'application/json', // Returns the JSON format, an option given by the API
      // https://icanhazdadjoke.com/api
    },
  };
  //   console.log(options);
  const joke = await request(options); // This request the promise and "await" the response from the API.
  console.log(joke);
  const jokeParsed = JSON.parse(joke); // Parse the JSON object in a more readable way.
  return jokeParsed.joke;
};

getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };
