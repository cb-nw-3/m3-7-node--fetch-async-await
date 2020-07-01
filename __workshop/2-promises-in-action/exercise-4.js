const request = require('request-promise');

const getTronaldDump = async () => {
  const options = {
    uri: 'https://api.tronalddump.io/random/quote',
    headers: {
      "Accept": "application/json"
    }
  }

  const joke = await request(options)

  console.log('\n' + JSON.parse(joke).value + '\n')

  return JSON.parse(joke).value
}

getTronaldDump();