const request = require('request-promise');
const fetch = require('node-fetch');

let options = {
  uri: 'https://icanhazdadjoke.com/',
  headers: {
    "Accept": "application/json"
  }
}

const getDadJoke = async () => {
  request(options)
    .then(res => {
      console.log('\n' + JSON.parse(res).joke + '\n')
      return JSON.parse(res)
    })
    .catch(err => {
      console.log('Error:', err)
    })
}

getDadJoke();