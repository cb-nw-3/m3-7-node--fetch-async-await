const request = require('request-promise');

const options = {
    uri: 'https://geek-jokes.sameerkumar.website/api?format=json',
    json: true
}

const getGeekJoke = async () => {
    let joke = await request(options)
        .then(data => {
            return data.joke;
        })
        .catch(err => { console.log(err) });
    return joke;
}

// getGeekJoke().then(data => console.log(data));

module.exports = getGeekJoke;