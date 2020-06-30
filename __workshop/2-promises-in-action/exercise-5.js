const request = require('request-promise');

const getGeekJoke = async () => {
  const options = {
    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
    method: 'GET'
  }

  const joke = await request(options);

  console.log('\n' + JSON.parse(joke).joke + '\n')
}

getGeekJoke();